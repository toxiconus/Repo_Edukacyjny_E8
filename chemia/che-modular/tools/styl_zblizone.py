#!/usr/bin/env python3
"""styl_zblizone.py — zamienia kolory #hex bardzo bliskie palecie tokenów (odległość RGB <= PROG) na dokładny kolor tokenu.
Zmiana praktycznie niewidoczna, a plik wychodzi z raportu STYL_RAPORT.md. Kolory dalsze (substancje, wykresy) zostają świadomie.
  python3 tools/styl_zblizone.py [--prog 16] plik [plik ...]      (bez --zapisz tylko pokazuje zamiany)
"""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
TOK = (ROOT / "engine/src/gfx/wspolne/styl/styl-tokeny.js").read_text(encoding="utf-8")
PAL = sorted({h.lower() for h in re.findall(r"#[0-9a-fA-F]{6}\b", TOK)} | {"#ffffff", "#000000"})
rgb = lambda h: [int(h[i:i + 2], 16) for i in (1, 3, 5)]
dist = lambda a, b: sum((x - y) ** 2 for x, y in zip(rgb(a), rgb(b))) ** .5

def main():
    a = sys.argv[1:]; prog = 16; zapis = False
    if "--prog" in a: i = a.index("--prog"); prog = float(a[i + 1]); del a[i:i + 2]
    if "--zapisz" in a: a.remove("--zapisz"); zapis = True
    for f in a:
        p = Path(f); t = p.read_text(encoding="utf-8"); n = [0]
        def sub(m):
            h = m.group(0).lower()
            if h in PAL: return m.group(0)
            b = min(PAL, key=lambda q: dist(h, q))
            if dist(h, b) <= prog: n[0] += 1; return b
            return m.group(0)
        t2 = re.sub(r"#[0-9a-fA-F]{6}\b", sub, t)
        print(f, "zamian:", n[0])
        if zapis and t2 != t: p.write_text(t2, encoding="utf-8")
main()
