import os
import json
import re
import requests
import subprocess

DEEPL_API_KEY = os.environ["DEEPL_API_KEY"]
DEEPL_URL = "https://api-free.deepl.com/v2/translate"

CACHE_FILE = "scripts/translation_cache.json"

PLACEHOLDER_PATTERN = r"%\d+|%L\d+|%n"

TRANSLATION_BLOCK = re.compile(
    r'(<message\b.*?<source>(.*?)</source>.*?<translation\b)([^>]*)(>)(.*?)(</translation>)',
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

        protected = protected.replace(ph, token)

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


def batch_translate(texts, target_lang):

    headers = {
        "Authorization": f"DeepL-Auth-Key {DEEPL_API_KEY}"
    }

    payload = {
        "target_lang": target_lang
    }

    for t in texts:
        payload.setdefault("text", []).append(t)

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
        full = m.group(0)
        translation_open = m.group(1)
        source_text = (m.group(2) or "")
        translation_attrs = m.group(3) or ""
        translation_gt = m.group(4)
        translation_text = (m.group(5) or "")
        source_raw = m.group(2)
        translation_close = m.group(6)

        if not source_text or source_text.strip() == "":
            continue

        if translation_text and translation_text.strip() != "":
            continue

        key = f"{source_text}:{lang}"

        if key in cache:
            translated = preserve_entities(source_raw, cache[key])
            clean_attrs = clean_translation_attributes(translation_attrs)
            new_block = f"{translation_open}{clean_attrs}{translation_gt}{translated}{translation_close}"
            replacements.append((full, new_block))
            print(source_text, "→", translated, "(cached)")
            continue

        protected, mapping = protect_placeholders(source_text)
        texts_to_translate.append(
            (
                source_text,
                protected,
                mapping,
                source_raw,
                full,
                translation_open,
                translation_attrs,
                translation_gt,
                translation_close,
            )
        )

    if texts_to_translate:
        protected_texts = [item[1] for item in texts_to_translate]
        translated_batch = batch_translate(protected_texts, lang)

        for (
            source_text,
            protected,
            mapping,
            source_raw,
            full,
            translation_open,
            translation_attrs,
            translation_gt,
            translation_close,
        ), translated in zip(texts_to_translate, translated_batch):
            restored = restore_placeholders(translated, mapping)
            restored = preserve_entities(source_raw, restored)

            cache[f"{source_text}:{lang}"] = restored
            clean_attrs = clean_translation_attributes(translation_attrs)
            new_block = f"{translation_open}{clean_attrs}{translation_gt}{restored}{translation_close}"
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
