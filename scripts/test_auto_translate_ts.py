"""Tests for auto_translate_ts.py. Run with: python -m unittest discover scripts"""

import json
import os
import tempfile
import unittest
import xml.etree.ElementTree as ET
from unittest import mock

os.environ.setdefault("DEEPL_API_KEY", "test")

import auto_translate_ts  # noqa: E402

TS_TEMPLATE = """<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ky">
<context>
    <name>Test</name>
    <message>
        <source>{source}</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
"""

SOURCE = "See &lt;a href=&quot;https://slicer.org&quot;&gt;Slicer&lt;/a&gt;.&lt;br&gt;Tom &amp; Jerry&apos;s %1"
PLAIN_SOURCE = "See <a href=\"https://slicer.org\">Slicer</a>.<br>Tom & Jerry's %1"


class AutoTranslateTsTest(unittest.TestCase):

    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.path = os.path.join(self.tmpdir.name, "Test_ky.ts")
        with open(self.path, "w", encoding="utf-8") as f:
            f.write(TS_TEMPLATE.format(source=SOURCE))

    def tearDown(self):
        self.tmpdir.cleanup()

    def translate(self, fake_deepl, cache=None):
        with mock.patch.object(auto_translate_ts, "_send_translation_request",
                               side_effect=lambda texts, lang, headers: [fake_deepl(t) for t in texts]) as m:
            self.assertTrue(auto_translate_ts.process_file(self.path, {} if cache is None else cache))
        return m

    def translation_text(self):
        # Fails if the file is not valid XML, which is what Weblate reports as a parse error
        return ET.parse(self.path).getroot().find("context/message/translation").text

    def test_deepl_receives_plain_text(self):
        m = self.translate(lambda t: "KY " + t)
        sent = m.call_args[0][0]
        self.assertEqual(sent, ["See <a href=\"https://slicer.org\">Slicer</a>.<br>Tom & Jerry's __PH_0__"])
        self.assertEqual(self.translation_text(), "KY " + PLAIN_SOURCE)

    def test_corrupted_deepl_output_stays_valid_xml(self):
        # DeepL once returned "&ltlt;br&gt;", which made Slicer_ky.ts unparseable
        self.translate(lambda t: "bioinformatics&ltlt;br&gt; & <b")
        self.assertEqual(self.translation_text(), "bioinformatics&ltlt;br&gt; & <b")

    def test_quotes_escaped_like_source(self):
        self.translate(lambda t: "\"q\" 'a'")
        with open(self.path, encoding="utf-8") as f:
            self.assertIn("&quot;q&quot; &apos;a&apos;", f.read())

    def test_cache_stores_plain_text(self):
        cache = {}
        self.translate(lambda t: "KY " + t, cache)
        self.assertEqual(cache, {auto_translate_ts.cache_key(PLAIN_SOURCE, "KY"): "KY " + PLAIN_SOURCE})

    def test_old_cache_entries_discarded(self):
        cache_file = os.path.join(self.tmpdir.name, "cache.json")
        new_key = auto_translate_ts.cache_key("Hello", "KY")
        with open(cache_file, "w", encoding="utf8") as f:
            json.dump({f"{SOURCE}:KY": "&ltlt;br&gt;", new_key: "Салам"}, f)
        with mock.patch.object(auto_translate_ts, "CACHE_FILE", cache_file):
            self.assertEqual(auto_translate_ts.load_cache(), {new_key: "Салам"})


if __name__ == "__main__":
    unittest.main()
