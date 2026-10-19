#!/usr/bin/env python3
"""styl_zblizone.py — zamienia kolory #hex bardzo bliskie palecie tokenów (odległość RGB <= PROG) na dokładny kolor tokenu.
Zmiana praktycznie niewidoczna, a plik wychodzi z raportu STYL_RAPORT.md. Kolory dalsze (substancje, wykresy) zostają świadomie.
CHRONIONE (nie ruszane): linie z kolorami substancji i pierwiastków (CHRON poniżej: COL/ECOL/CPK, symbole pierwiastków jako klucze,
słowa proton/neutron/elektron/osad/roztwór/płomień…) oraz linie z komentarzem  styl:zostaw  — kolor celowo pokazuje coś konkretnego.
  python3 tools/styl_zblizone.py [--prog 16] plik [plik ...]      (bez --zapisz tylko pokazuje zamiany)
"""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
TOK = (ROOT / "engine/src/gfx/wspolne/styl/styl-tokeny.js").read_text(encoding="utf-8")
PAL = sorted({h.lower() for h in re.findall(r"#[0-9a-fA-F]{6}\b", TOK)} | {"#ffffff", "#000000"})
CHRON = re.compile(r"\b(COL\w*|ECOL|CPK|PPT\w*|KOL(?:ORY)?_SUBST\w*)\b|\b[A-Z][a-z]?:\s*['\"]#|proton|neutron|elektron|osad|roztw|płomie|plomien|substanc|styl:zostaw", re.I)
rgb = lambda h: [int(h[i:i + 2], 16) for i in (1, 3, 5)]
dist = lambda a, b: sum((x - y) ** 2 for x, y in zip(rgb(a), rgb(b))) ** .5

def main():
    a = sys.argv[1:]; prog = 16; zapis = False
    if "--prog" in a: i = a.index("--prog"); prog = float(a[i + 1]); del a[i:i + 2]
    if "--zapisz" in a: a.remove("--zapisz"); zapis = True
    for f in a:
        p = Path(f); t = p.read_text(encoding="utf-8"); n = [0]; pomin = [0]
        def sub(m):
            h = m.group(0).lower()
            if h in PAL: return m.group(0)
            a0 = t.rfind("\n", 0, m.start()) + 1; a1 = t.find("\n", m.end()); a1 = len(t) if a1 < 0 else a1
            if CHRON.search(t[a0:a1]): pomin[0] += 1; return m.group(0)
            b = min(PAL, key=lambda q: dist(h, q))
            if dist(h, b) <= prog: n[0] += 1; return b
            return m.group(0)
        t2 = re.sub(r"#[0-9a-fA-F]{6}\b", sub, t)
        print(f, "zamian:", n[0], "pominięto (chronione):", pomin[0])
        if zapis and t2 != t: p.write_text(t2, encoding="utf-8")
main()
