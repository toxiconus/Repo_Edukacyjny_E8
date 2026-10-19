#!/usr/bin/env python3
"""efekty_do_html.py — synchronizuje efekty silnika z samodzielnym HTML (bez całego silnika).

W HTML między znacznikami
  /* @@EFEKTY-BEGIN bubbles condensation steam precipitate @@ */ … /* @@EFEKTY-END @@ */
leży blok generowany: mini-adapter (C, effect, rnd, rgba, PPT_LOOK — wzięte z 06_E.js silnika)
+ źródła wymienionych efektów z engine/src/gfx/chemia/efekty/<id>.js. Nie edytować ręcznie.

  python3 tools/efekty_do_html.py <plik.html>             # przepisz blok
  python3 tools/efekty_do_html.py --sprawdz <plik.html>   # tylko porównaj (kod wyjścia 1 = rozjazd)
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GFX = ROOT / "engine" / "src" / "gfx"
E06 = GFX / "_szkielet" / "che-lab-engine-v001" / "06_E.js"
RE = re.compile(r"(/\* @@EFEKTY-BEGIN ([\w ]+) @@ \*/)\n.*?\n(/\* @@EFEKTY-END @@ \*/)", re.S)


def linia(src: str, wzor: str) -> str:
    m = re.search(wzor, src, re.M)
    if not m:
        raise SystemExit(f"nie znaleziono w 06_E.js: {wzor}")
    return m.group(0)


def blok(ids: list[str]) -> str:
    e = E06.read_text(encoding="utf-8")
    cz = [
        "/* generowane z engine/src/gfx — python3 tools/efekty_do_html.py; nie edytować ręcznie */",
        "const C={};const EFFECTS={};",
        "function effect(name,spec){EFFECTS[name]=spec}",
        linia(e, r"^const rnd=.*$"),
        linia(e, r"^const rgba=.*$"),
        linia(e, r"^const PPT_LOOK=.*$"),
    ]
    for i in ids:
        p = GFX / "chemia" / "efekty" / f"{i}.js"
        cz.append(p.read_text(encoding="utf-8").strip())
    return "\n".join(cz)


def main(a: list[str]) -> int:
    tylko = "--sprawdz" in a
    pliki = [x for x in a if not x.startswith("--")]
    if len(pliki) != 1:
        print(__doc__)
        return 2
    p = Path(pliki[0])
    s = p.read_text(encoding="utf-8")
    m = RE.search(s)
    if not m:
        print("brak znaczników @@EFEKTY-BEGIN/END w pliku")
        return 2
    nowy = f"{m.group(1)}\n{blok(m.group(2).split())}\n{m.group(3)}"
    zgodny = m.group(0) == nowy
    if tylko:
        print("zgodny z silnikiem" if zgodny else "ROZJAZD: blok różni się od silnika")
        return 0 if zgodny else 1
    if not zgodny:
        p.write_text(s[: m.start()] + nowy + s[m.end():], encoding="utf-8")
    print("zaktualizowano" if not zgodny else "bez zmian")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
