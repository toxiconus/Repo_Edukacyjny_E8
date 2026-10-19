#!/usr/bin/env python3
"""styl_sprawdz.py — raport zgodności rysunków ze wspólnym stylem (engine/src/gfx/wspolne/styl/styl-tokeny.js).

Liczy w plikach rysunkowych: kolory #hex spoza palety tokenów i grubości linii spoza {1; 1,5; 2,5; 3}.
Pomija efekty i reakcje (realistyczne kolory substancji z CHE.COLORS — to dane, nie styl).
  python3 tools/styl_sprawdz.py            → STYL_RAPORT.md (kolejka przeróbek, od najgorszych)
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPO = ROOT.parents[1]
TOK = (ROOT / "engine/src/gfx/wspolne/styl/styl-tokeny.js").read_text(encoding="utf-8")
PALETA = {h.lower() for h in re.findall(r"#[0-9a-fA-F]{6}\b", TOK)} | {"#ffffff", "#000000"}
LINIE = {"1", "1.5", "2.5", "3"}
G = ROOT / "engine/src/gfx"
ZAKRES = [(G / "chemia" / k, "*.js") for k in ("widoki", "naczynia", "sceny", "szkielet")] + \
         [(G / "fizyka", "**/*.js"), (G / "wspolne", "**/*.js"), (ROOT / "engine/src/lekcja", "rozszerzenia.js"),
          (REPO / "biologia/bio/szablon", "bio-viz.js"), (ROOT / "wizualizacje_r4", "*.html")]


def main() -> None:
    wiersze = []
    for d, pat in ZAKRES:
        for p in sorted(d.glob(pat)):
            if p.name == "styl-tokeny.js":
                continue
            t = p.read_text(encoding="utf-8", errors="ignore")
            hx = {h.lower() for h in re.findall(r"#[0-9a-fA-F]{6}\b", t)} - PALETA
            lw = {x for x in re.findall(r"lineWidth\s*=\s*([\d.]+)", t) if x.lstrip("0") not in LINIE and x not in LINIE}
            sw = {x for x in re.findall(r'stroke-width[=:]\s*"?([\d.]+)', t) if x not in LINIE}
            uz = "STYL" in t
            wiersze.append((len(hx) + len(lw) + len(sw), str(p.relative_to(REPO)), len(hx), len(lw) + len(sw), uz))
    wiersze.sort(reverse=True)
    ok = sum(1 for w in wiersze if w[0] == 0)
    o = ["# STYL_RAPORT — zgodność rysunków ze wspólnym stylem (generowany: `python3 tools/styl_sprawdz.py`)", "",
         "Wzorzec: `engine/src/gfx/wspolne/styl/styl-tokeny.js` i `STYL_WIZUALIZACJI.md`. Kolejka przeróbek: od największej liczby odstępstw.", "",
         f"Plików: {len(wiersze)}; zgodnych: {ok}; używa `CHE.GFX.STYL`: {sum(1 for w in wiersze if w[4])}.", "",
         "| plik | kolory spoza palety | linie spoza skali | używa STYL |", "|---|---|---|---|"]
    o += [f"| `{f}` | {h} | {l} | {'tak' if u else ''} |" for n, f, h, l, u in wiersze if n]
    (ROOT / "STYL_RAPORT.md").write_text("\n".join(o) + "\n", encoding="utf-8")
    print(f"→ STYL_RAPORT.md: {len(wiersze)} plików, zgodnych {ok}")


if __name__ == "__main__":
    main()
