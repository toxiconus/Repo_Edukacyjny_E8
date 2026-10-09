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
# szkielet labu: cały HTML z treścią skryptów zastąpioną markerami (lab = szkielet + moduły)
_n = iter(range(10**6))
def _mark(m):
    if "src=" in m.group(1):
        return m.group(0)
    return f"<script{m.group(1)}>/*@@MOD {next(_n)}@@*/</script>"
skel = re.sub(r"<script\b([^>]*)>(.*?)</script>", _mark, html, flags=re.S)
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
(out / "_lab_skeleton.html").write_text(skel, encoding="utf-8")
print(f"szkielet labu: {len(skel.encode()):,} B")
print(f"inline scripts: {len(inline)}, catalog: {len(cat)}, ok: {ok}, rozjazd: {bad}")
