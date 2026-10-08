#!/usr/bin/env python3
"""zrodla_silnika.py — jednorazowo (lub po ponownej ekstrakcji): moduły → śledzone źródła engine/src/.

  engine/src/moduly/<id>.js          moduły < 30 KB
  engine/src/moduly/<id>/NN_*.js     moduły ≥ 30 KB, pocięte na części (tools/podziel.mjs, _kolejnosc.txt)
  engine/src/gfx/_szkielet/<mod>/    szkielety GFX/VIEW pocięte tak samo
  engine/src/lab/szkielet.html       HTML labu z markerami /*@@MOD n@@*/ i /*@@CSS plik@@*/
  engine/src/style/NN_*.css          bloki <style> labu
Bez strat: python3 tools/silnik.py (sha1 lab == monolit, che-viz == v0_59).
"""
import json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "engine/src"
MOD = ROOT / "modules"
cat = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
gfx_mods = {p.stem for p in (SRC / "gfx/_szkielet").glob("*.js")} | {p.name for p in (SRC / "gfx/_szkielet").iterdir() if p.is_dir()}
(SRC / "moduly").mkdir(parents=True, exist_ok=True)
LIMIT = 30 * 1024
for c in cat:
    if c["id"] in gfx_mods or c["id"] == "_anon_001":
        continue
    body = (MOD / c["file"]).read_text(encoding="utf-8")
    if len(body.encode()) < LIMIT or c["file"].endswith(".json") or c["id"].endswith("-src"):
        (SRC / "moduly" / f'{c["id"]}.js').write_text(body, encoding="utf-8")
    else:
        subprocess.run(["node", str(ROOT / "tools/podziel.mjs"), str(MOD / c["file"]), str(SRC / "moduly" / c["id"]), "24"], check=True)
for mod in sorted(gfx_mods):
    f = SRC / "gfx/_szkielet" / f"{mod}.js"
    if f.exists():
        subprocess.run(["node", str(ROOT / "tools/podziel.mjs"), str(f), str(SRC / "gfx/_szkielet" / mod), "24"], check=True)
# szkielet labu + CSS
skel = (MOD / "_lab_skeleton.html").read_text(encoding="utf-8")
(SRC / "style").mkdir(exist_ok=True)
for p in (SRC / "style").glob("*.css"):
    p.unlink()
n = [0]
def st(m):
    n[0] += 1
    css = m.group(2)
    sel = re.search(r"([.#]?[a-zA-Z][\w-]{2,})", css)
    fn = f"{n[0]:02d}_{(sel.group(1).lstrip('.#') if sel else 'styl')[:24]}.css"
    (SRC / "style" / fn).write_text(css, encoding="utf-8")
    return f"<style{m.group(1)}>/*@@CSS {fn}@@*/</style>"
lab = re.sub(r"<style([^>]*)>(.*?)</style>", st, skel, flags=re.S)
(SRC / "lab").mkdir(exist_ok=True)
(SRC / "lab/szkielet.html").write_text(lab, encoding="utf-8")
print(f"moduły → engine/src/moduly, szkielet labu + {n[0]} plików CSS")
