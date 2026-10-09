#!/usr/bin/env python3
"""wzorzec.py — wzorzec odcisków modeli z pełnego silnika (N przebiegów; pozycja różna w którymkolwiek → null).
Użycie: python3 tools/wzorzec.py  → dist/_wz/wzorzec.json (strony dist/*_*.html + dist/che-viz.js)"""
import json, shutil, subprocess, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
WZ = ROOT / "dist/_wz"
WZ.mkdir(parents=True, exist_ok=True)
pages = sorted(p for p in (ROOT / "dist").glob("*_*.html"))
for p in pages:
    shutil.copy(p, WZ / p.name)
shutil.copy(ROOT / "dist/che-viz.js", WZ / "che-viz.js")
runs = []
N = int(sys.argv[1]) if len(sys.argv) > 1 else 4
for i in range(N):
    out = WZ / f"run{i}.json"
    subprocess.run(["node", str(ROOT / "tools/test_lekcje.cjs"), "--cicho", f"--zrzut={out}", *[str(WZ / p.name) for p in pages]], check=False)
    runs.append(json.loads(out.read_text()))
wz, stab, all_ = {}, 0, 0
for les in runs[0]:
    wz[les] = {}
    for k in runs[0][les]:
        sets = [set(r.get(les, {}).get(k, [])) for r in runs]
        common = set.intersection(*sets)
        wz[les][k] = sorted(common)
        stab += len(common); all_ += len(set.union(*sets))
(WZ / "wzorzec.json").write_text(json.dumps(wz))
print(f"wzorzec: {stab}/{all_} stabilnych słów → dist/_wz/wzorzec.json")
