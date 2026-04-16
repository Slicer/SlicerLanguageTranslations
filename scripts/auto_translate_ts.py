import os
import json
import re
import requests
import subprocess

DEEPL_API_KEY = os.environ["DEEPL_API_KEY"]
DEEPL_URL = "https://api-free.deepl.com/v2/translate"
# Use "https://api.deepl.com/v2/translate" for Pro API
# Size limits: 128 KiB for all requests (Free and Pro)
# Text limit: 50 texts per request for both

DEEPL_MAX_SIZE_KB = 128  # 128 KiB max per request
DEEPL_MAX_TEXTS = 50     # 50 texts max per request

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


def build_new_block(message_prefix, middle_section, translation_tag,
                    translation_attrs, translation_gt, translated_text, translation_close):
    """
    Rebuilds the complete <message> block with:
    - type="unfinished" on <translation>
    """
    new_attrs = ' type="unfinished"'

    return (
        f"{message_prefix}"
        f"{middle_section}"
        f"{translation_tag}{new_attrs}{translation_gt}"
        f"{translated_text}"
        f"{translation_close}"
    )


def batch_translate(texts, target_lang):
    """
    Translate texts in batches respecting DeepL API limits.
    - Maximum 50 texts per request
    - Maximum DEEPL_MAX_SIZE_KB per request
    """
    headers = {"Authorization": f"DeepL-Auth-Key {DEEPL_API_KEY}"}

    results = []
    current_batch = []
    current_size = 0

    for text in texts:
        # Estimate size: each text + JSON overhead (~100 bytes per text)
        text_size = len(text.encode('utf-8')) + 100

        # Check if adding this text would exceed limits
        would_exceed_count = len(current_batch) >= DEEPL_MAX_TEXTS
        would_exceed_size = (current_size + text_size) > (DEEPL_MAX_SIZE_KB * 1024)

        if current_batch and (would_exceed_count or would_exceed_size):
            # Send current batch
            print(f"  Sending batch of {len(current_batch)} texts ({current_size} bytes)...")
            batch_results = _send_translation_request(current_batch, target_lang, headers)
            results.extend(batch_results)
            current_batch = []
            current_size = 0

        current_batch.append(text)
        current_size += text_size

    # Send remaining batch
    if current_batch:
        print(f"  Sending final batch of {len(current_batch)} texts ({current_size} bytes)...")
        batch_results = _send_translation_request(current_batch, target_lang, headers)
        results.extend(batch_results)

    return results


def normalize_lang_code(lang):
    """
    Normalize language codes for DeepL API.
    - Replace underscores with hyphens
    - For Arabic variants, use just 'AR'
    """
    # Replace underscore with hyphen
    normalized = lang.replace("_", "-").upper()

    # Handle Arabic variants: AR-SA, AR-AE, etc. → AR
    if normalized.startswith("AR"):
        return "AR"

    return normalized


def _send_translation_request(texts, target_lang, headers):
    """
    Send a single translation request to DeepL API.
    Raises an exception if the request fails.
    """
    # Normalize language code for DeepL API
    normalized_lang = normalize_lang_code(target_lang)
    print(f"    Language: {target_lang} → {normalized_lang}")

    payload = {"target_lang": normalized_lang, "text": texts}

    try:
        r = requests.post(DEEPL_URL, data=payload, headers=headers)
        r.raise_for_status()
        return [t["text"] for t in r.json()["translations"]]
    except requests.exceptions.HTTPError as e:
        print(f"    HTTP Error: {e.response.status_code}")
        print(f"    Response: {e.response.text}")
        raise


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

    # Skip English language files since source is already in English
    if lang.startswith("EN"):
        print("Skipping:", path, "→", lang, "(English source)")
        return False

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