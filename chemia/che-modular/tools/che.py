#!/usr/bin/env python3
"""che.py — jedno polecenie do całej pracy z CHE (uruchamiaj z chemia/che-modular).

  python3 tools/che.py init               raz na sesję: acorn + testy bezstratności
  python3 tools/che.py nowa KOD nazwa     nowa lekcja z szablonu → lessons-md/KOD/LEKCJA.md
  python3 tools/che.py parity KOD         MD ↔ rejestr: czego brakuje w silniku
  python3 tools/che.py lekcje [plik.md]   silnik z modułów + lekcje MD (kanon) → dist/ i dist/jeden_plik/
  python3 tools/che.py build KOD [--zintegrowana]   prototyp $-makr: MD → HTML
  python3 tools/che.py silnik             dist/viz/<profil>.js z engine/registry/profile/*.json
  python3 tools/odchudz.py [--profil X] [--lekcje A,B]   odchudzanie silnika z testem (ddmin)
  python3 tools/che.py test [--szybki]    bezstratność (GFX, lab==monolit, che-viz==v0_59) + render lekcji
  python3 tools/che.py gfx                lista elementów GFX/VIEW (przedmiot/rodzaj: liczba, KB)
  python3 tools/che.py katalog            generuje engine/src/gfx/KATALOG.md (id ↔ nazwa PL ↔ plik)
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
    # źródła silnika są w gicie (engine/src, sections); monolit tylko do testu „lab == monolit”
    if not Path("/tmp/che_mono.html").exists():
        run("sh", str(T / "pobierz_moduly.sh"))
    if not (T / "node_modules" / "acorn").exists():
        run("npm", "i", "-s", "--prefix", str(T))
    test("--szybki")


def nowa(kod, nazwa="lekcja"):
    dst = ROOT / "lessons-md" / kod / "LEKCJA.md"
    if dst.exists():
        sys.exit(f"istnieje: {dst}")
    dst.parent.mkdir(parents=True)
    s = (ROOT / "lessons-md/_SZABLON/LEKCJA.md").read_text(encoding="utf-8")
    dst.write_text(s.replace("{{KOD}}", kod).replace("{{NAZWA}}", nazwa), encoding="utf-8")
    print("→", dst.relative_to(ROOT), "| dopisz lekcję do engine/registry/lessons.json")


def lekcje(*md):
    sys.path.insert(0, str(T))
    import silnik
    (ROOT / "dist").mkdir(exist_ok=True)
    (ROOT / "dist/che-viz.js").write_text(silnik.che_viz(silnik.lab_html()), encoding="utf-8")
    run(sys.executable, str(T / "md2html.py"), *md)


def silnik_profile():
    sys.path.insert(0, str(T))
    import silnik
    (ROOT / "dist/viz").mkdir(parents=True, exist_ok=True)
    for p in sorted((ROOT / "engine/registry/profile").glob("*.json")):
        js = silnik.z_profilu(json.loads(p.read_text(encoding="utf-8")))
        (ROOT / "dist/viz" / (p.stem + ".js")).write_text(js, encoding="utf-8")
        print(f"→ dist/viz/{p.stem}.js {len(js.encode())/1e6:.2f} MB")


def test(*a):
    run(sys.executable, str(T / "gfx_join.py"))
    run(sys.executable, str(T / "silnik.py"))
    if "--szybki" not in a:
        lekcje()
        run("node", str(T / "test_lekcje.cjs"))


def gfx():
    idx = json.loads((ROOT / "engine/src/gfx/index.json").read_text(encoding="utf-8"))
    agg = {}
    for items in idx.values():
        for it in items:
            k = it["subject"] + "/" + it["kind"]
            n, b = agg.get(k, (0, 0))
            agg[k] = (n + 1, b + it["bytes"])
    for k, (n, b) in sorted(agg.items()):
        print(f"{k:18} {n:3}  {b/1024:6.1f} KB")


def katalog():
    import re
    idx = json.loads((ROOT / "engine/src/gfx/index.json").read_text(encoding="utf-8"))
    reg = {}
    for f, kind in (("vessels.json", "naczynia"), ("effects.json", "efekty"), ("scenes.json", "sceny")):
        d = json.loads((ROOT / "engine/registry/assets" / f).read_text(encoding="utf-8"))
        reg[kind] = d.get("items") or d.get("scenes") or {}
    rows = {}
    for items in idx.values():
        for it in items:
            r = reg.get(it["kind"], {}).get(it["id"], {})
            name = r.get("title", "")
            if not name:
                head = (ROOT / "engine/src/gfx" / it["file"]).read_text(encoding="utf-8")[:400]
                m = re.search(r"\b(?:title|n):'([^']{1,90})", head)
                name = m.group(1) if m else ""
            rows.setdefault((it["subject"], it["kind"]), []).append((it["id"], name, r.get("design", "")))
    out = ["# KATALOG GFX — wygenerowany (`python3 tools/che.py katalog`), nie edytować", "",
           "Id w MD/HTML/kodzie jest angielskie (jak w silniku); nazwa PL z rejestru. Plik: `engine/src/gfx/<przedmiot>/<rodzaj>/<id>.js`.", ""]
    for (subj, kind) in sorted(rows):
        out += [f"## {subj} / {kind} ({len(rows[(subj, kind)])})", "", "| id | nazwa | opis |", "|---|---|---|"]
        out += [f"| `{i}` | {n} | {d} |" for i, n, d in sorted(rows[(subj, kind)])] + [""]
    (ROOT / "engine/src/gfx/KATALOG.md").write_text("\n".join(out), encoding="utf-8")
    print("→ engine/src/gfx/KATALOG.md", sum(len(v) for v in rows.values()), "pozycji")


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
    elif c == "test": test(*rest)
    elif c == "lekcje": lekcje(*rest)
    elif c == "silnik": silnik_profile()
    elif c == "gfx": gfx()
    elif c == "katalog": katalog()
    else: sys.exit(f"nieznane: {c}\n{__doc__}")


if __name__ == "__main__":
    main(sys.argv[1:])
