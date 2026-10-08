#!/usr/bin/env python3
"""Odtwarza modules/*.js z monolitu labu (kolejne <script> inline) i sprawdza sha1 z catalog.json.

Użycie: python3 tools/extract_modules.py <monolit.html>
"""
import hashlib, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
cat = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
html = Path(sys.argv[1]).read_text(encoding="utf-8")
scripts = re.findall(r"<script\b([^>]*)>(.*?)</script>", html, flags=re.S)
inline = [(a, b) for a, b in scripts if "src=" not in a]
out = ROOT / "modules"
out.mkdir(exist_ok=True)
ok = bad = 0
for c in cat:
    if c["index"] >= len(inline):
        print("BRAK", c["id"]); bad += 1; continue
    body = inline[c["index"]][1]
    sha = hashlib.sha1(body.encode("utf-8")).hexdigest()[:12]
    if sha != c["sha1"]:
        # spróbuj bez skrajnych białych znaków
        body2 = body.strip("\n")
        if hashlib.sha1(body2.encode("utf-8")).hexdigest()[:12] == c["sha1"]:
            body, sha = body2, c["sha1"]
    (out / c["file"]).write_text(body, encoding="utf-8")
    if sha == c["sha1"]:
        ok += 1
    else:
        bad += 1; print("SHA≠", c["id"], sha, c["sha1"])
print(f"inline scripts: {len(inline)}, catalog: {len(cat)}, ok: {ok}, rozjazd: {bad}")
