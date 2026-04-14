import os
import json
import re
import requests
import subprocess

DEEPL_API_KEY = os.environ["DEEPL_API_KEY"]
DEEPL_URL = "https://api-free.deepl.com/v2/translate"

CACHE_FILE = "scripts/translation_cache.json"

PLACEHOLDER_PATTERN = r"%\d+|%L\d+|%n"

# We now separate the <message> block into two parts:
# - message_head: everything preceding <translation (included)
# - We separately capture the prefix before <translation to be able to insert the extracomment
TRANSLATION_BLOCK = re.compile(
    r'(<message\b.*?<source>(.*?)</source>)(.*?)(<translation\b)([^>]*)(>)(.*?)(</translation>)',
    re.DOTALL
)


def load_cache():
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, "r", encoding="utf8") as f:
            return json.load(f)
    return {}


def save_cache(cache):
    with open(CACHE_FILE, "w", encoding="utf8") as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)


def protect_placeholders(text):
    placeholders = re.findall(PLACEHOLDER_PATTERN, text)
    mapping = {}
    protected = text
    for i, ph in enumerate(placeholders):
        token = f"__PH_{i}__"
        protected = protected.replace(ph, token, 1)  # count=1 to avoid duplicates
        mapping[token] = ph
    return protected, mapping


def restore_placeholders(text, mapping):
    restored = text
    for token, ph in mapping.items():
        restored = restored.replace(token, ph)
    return restored


ENTITY_PAIRS = [
    ("&lt;", "<"),
    ("&gt;", ">"),
    ("&apos;", "'"),
    ("&quot;", '"'),
]


def preserve_entities(source_raw, translated):
    if not source_raw:
        return translated
    if "&amp;" in source_raw:
        translated = re.sub(r'&(?![A-Za-z]+;)', "&amp;", translated)
    for entity, char in ENTITY_PAIRS:
        if entity in source_raw:
            translated = translated.replace(char, entity)
    return translated


def clean_translation_attributes(attrs):
    return re.sub(r'\s*type=(["\'])unfinished\1', '', attrs or "")


def has_extracomment_mt(middle_section):
    """Checks if an mt:deepl extracomment already exists in the block."""
    return bool(re.search(r'<extracomment>\s*mt:deepl\s*</extracomment>', middle_section))


def build_new_block(message_prefix, middle_section, translation_tag,
                    translation_attrs, translation_gt, translated_text, translation_close):
    """
    Rebuilds the complete <message> block with:
    - type="unfinished" on <translation>
    - <extracomment>mt:deepl</extracomment> inserted before <translation> (if absent)
    """
    clean_attrs = clean_translation_attributes(translation_attrs)
    new_attrs = f' type="unfinished"{clean_attrs}'

    # Insertion of the extracomment if absent
    if has_extracomment_mt(middle_section):
        new_middle = middle_section
    else:
        # We insert <extracomment> just before <translation>, preserving indentation
        indent_match = re.search(r'\n(\s*)$', middle_section)
        indent = indent_match.group(1) if indent_match else "        "
        new_middle = middle_section + f'<extracomment>mt:deepl</extracomment>\n{indent}'

    return (
        f"{message_prefix}"
        f"{new_middle}"
        f"{translation_tag}{new_attrs}{translation_gt}"
        f"{translated_text}"
        f"{translation_close}"
    )


def batch_translate(texts, target_lang):
    headers = {"Authorization": f"DeepL-Auth-Key {DEEPL_API_KEY}"}
    payload = {"target_lang": target_lang, "text": texts}
    r = requests.post(DEEPL_URL, data=payload, headers=headers)
    r.raise_for_status()
    return [t["text"] for t in r.json()["translations"]]


def get_modified_ts_files():
    cmd = ["git", "diff", "--name-only", "HEAD^", "HEAD"]
    result = subprocess.run(cmd, capture_output=True, text=True)
    files = result.stdout.splitlines()
    return [f for f in files if f.endswith(".ts")]


def process_file(path, cache):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    lang_match = re.search(r"<TS\b[^>]*\blanguage=(['\"])([^'\"]+)\1", content)
    lang = (lang_match.group(2) if lang_match else "EN").upper()

    print("Processing:", path, "→", lang)

    matches = list(TRANSLATION_BLOCK.finditer(content))

    texts_to_translate = []
    replacements = []

    for m in matches:
        full             = m.group(0)
        message_prefix   = m.group(1)   # <message ...> up to </source> included
        source_text      = m.group(2)   # content of <source>
        middle_section   = m.group(3)   # content between </source> and <translation
        translation_tag  = m.group(4)   # "<translation"
        translation_attrs = m.group(5)  # existing attributes e.g. ' type="unfinished"'
        translation_gt   = m.group(6)   # ">"
        translation_text = m.group(7)   # current content of the translation
        translation_close = m.group(8)  # "</translation>"

        if not source_text or source_text.strip() == "":
            continue

        if translation_text and translation_text.strip() != "":
            continue

        key = f"{source_text}:{lang}"

        if key in cache:
            translated = preserve_entities(source_text, cache[key])
            new_block = build_new_block(
                message_prefix, middle_section,
                translation_tag, translation_attrs, translation_gt,
                translated, translation_close
            )
            replacements.append((full, new_block))
            print(source_text, "→", translated, "(cached)")
            continue

        protected, mapping = protect_placeholders(source_text)
        texts_to_translate.append((
            source_text, protected, mapping,
            full, message_prefix, middle_section,
            translation_tag, translation_attrs, translation_gt, translation_close,
        ))

    if texts_to_translate:
        protected_texts = [item[1] for item in texts_to_translate]
        translated_batch = batch_translate(protected_texts, lang)

        for item, translated in zip(texts_to_translate, translated_batch):
            (source_text, protected, mapping,
             full, message_prefix, middle_section,
             translation_tag, translation_attrs, translation_gt, translation_close) = item

            restored = restore_placeholders(translated, mapping)
            restored = preserve_entities(source_text, restored)

            cache[f"{source_text}:{lang}"] = restored

            new_block = build_new_block(
                message_prefix, middle_section,
                translation_tag, translation_attrs, translation_gt,
                restored, translation_close
            )
            replacements.append((full, new_block))
            print(source_text, "→", restored)

    if not replacements:
        return False

    updated = content
    for old, new in replacements:
        updated = updated.replace(old, new, 1)

    with open(path, "w", encoding="utf-8") as f:
        f.write(updated)

    return True


def main():
    cache = load_cache()
    files = get_modified_ts_files()
    modified = False

    for f in files:
        try:
            if process_file(f, cache):
                modified = True
        except Exception as e:
            print(f"Error processing {f}: \n\t{e}")

    save_cache(cache)

    if modified:
        print("Translations updated")
    else:
        print("No translations needed")


if __name__ == "__main__":
    main()