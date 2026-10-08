#!/usr/bin/env python3
"""che.py — jedno polecenie do całej pracy z CHE (uruchamiaj z chemia/che-modular).

  python3 tools/che.py init               moduły z monolitu + podział GFX + test (raz na sesję)
  python3 tools/che.py nowa KOD nazwa     nowa lekcja z szablonu → lessons-md/KOD/LEKCJA.md
  python3 tools/che.py parity KOD         MD ↔ rejestr: czego brakuje w silniku
  python3 tools/che.py build KOD [--zintegrowana]   MD → HTML (samodzielny / zintegrowany z silnikiem)
  python3 tools/che.py pack KOD|--all     mały HTML offline z potrzebnymi modułami
  python3 tools/che.py test               wszystkie testy (kompletność GFX, …) — wypisuje tylko błędy
  python3 tools/che.py gfx                lista elementów GFX/VIEW (rodzaj: liczba, KB)
"""
import json, shutil, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
T = ROOT / "tools"


def run(*cmd):
    r = subprocess.run(list(cmd), cwd=ROOT)
    if r.returncode:
        sys.exit(r.returncode)


def init():
    run("sh", str(T / "pobierz_moduly.sh"))
    if not (T / "node_modules" / "acorn").exists():
        run("npm", "i", "-s", "--prefix", str(T))
    if not (ROOT / "engine/src/gfx/_szkielet").exists():
        run("node", str(T / "gfx_split.mjs"))
    test()


def nowa(kod, nazwa="lekcja"):
    dst = ROOT / "lessons-md" / kod / "LEKCJA.md"
    if dst.exists():
        sys.exit(f"istnieje: {dst}")
    dst.parent.mkdir(parents=True)
    s = (ROOT / "lessons-md/_SZABLON/LEKCJA.md").read_text(encoding="utf-8")
    dst.write_text(s.replace("{{KOD}}", kod).replace("{{NAZWA}}", nazwa), encoding="utf-8")
    print("→", dst.relative_to(ROOT), "| dopisz lekcję do engine/registry/lessons.json")


def test():
    run(sys.executable, str(T / "gfx_join.py"))


def gfx():
    idx = json.loads((ROOT / "engine/src/gfx/index.json").read_text(encoding="utf-8"))
    agg = {}
    for items in idx.values():
        for it in items:
            n, b = agg.get(it["kind"], (0, 0))
            agg[it["kind"]] = (n + 1, b + it["bytes"])
    for k, (n, b) in sorted(agg.items()):
        print(f"{k:8} {n:3}  {b/1024:6.1f} KB")


def main(a):
    if not a or a[0] in ("-h", "--help", "help"):
        print(__doc__); return
    c, rest = a[0], a[1:]
    if c == "init": init()
    elif c == "nowa": nowa(*rest)
    elif c == "parity": run(sys.executable, str(T / "md_parity.py"), *rest)
    elif c == "build":
        extra = ["--mode", "integrated"] if "--zintegrowana" in rest else []
        run(sys.executable, str(T / "md_build_lesson.py"), *[x for x in rest if x != "--zintegrowana"], *extra)
    elif c == "pack": run(sys.executable, str(T / "pack_lesson.py"), *rest)
    elif c == "test": test()
    elif c == "gfx": gfx()
    else: sys.exit(f"nieznane: {c}\n{__doc__}")


if __name__ == "__main__":
    main(sys.argv[1:])
