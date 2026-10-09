#!/usr/bin/env python3
"""dziedziny.py — porządkuje sekcje _anon_001 w podmoduły według tego, co tworzą (mapa z mapa_danych.py).

  python3 tools/dziedziny.py           # raport: podmoduł → liczba sekcji, KB (bez zmian w plikach)
  python3 tools/dziedziny.py --przenies  # git mv do sections/anon001/<podmoduł>/sNNN.js + katalog + profile

Kolejność sekcji (num) się nie zmienia, więc złożenie jest nadal bajt w bajt identyczne.
"""
import json, re, subprocess, sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEC = ROOT / "sections"

DANE = [  # (podmoduł, wzorzec kluczy CHE.DATA) — pierwsze trafienie wygrywa
    ("dane-jadrowe", r"NUCLEAR|NUCLID"),
    ("dane-pierwiastki", r"ELEMENT|ATOM|^ELEM$|ISOTOP|CIAAW|IONIZATION|PHYSICAL_PROPS|QUANTUM|SPECTRA"),
    ("dane-reakcje", r"REACTION"),
    ("dane-kwasy-zasady", r"ACID|INDICATOR|PKA|BASE|SOLUBILITY|METAL_SERIES|METAL_ACTIVE"),
    ("dane-termo-redoks", r"THERMO|REDOX|KINETIC|EQUILIBR|ELECTRO|HENRY"),
    ("dane-substancje", r"SUBSTANCE|COMPOUND|MOLECULE|MOL2D|MOL3D|BOND_TYPES|FUNCTIONAL"),
    ("organiczna", r"organic|biochem|ORGANIC"),
    ("edukacja", r"EDUCATION|^E8|SCHOOL|LO_CHEM|CONCEPTS|TIMELINE|MODEL_LIMITS|LEVELS"),
    ("nauka-referencje", r"SCIENCE|REFERENCE|VERIFIED|KNOWLEDGE|SOURCE"),
]
CHE = [  # (podmoduł, wzorzec przestrzeni CHE.*) dla sekcji bez nowych danych
    ("audyt", r"AUDIT|REGRESSION|TESTS?$|_TEST|LEDGER|LOCK|ROADMAP|READINESS|INTEGRITY|EVIDENCE|QUEUE|CLOSURE|CONTRACT|PROVENANCE"
              r"|LINEAGE|COVERAGE|GAP|SELFTEST|PROGRESS|PROJECT_|POLICY|REPAIR|VERIFY|CROSSWALK|GATE|SOURCE_|RECONCILIATION|CLASSIFIER"
              r"|^P0_|^FULL_|^MAX_|^MAX\d|gapAudit|^SP\d"),
    ("organiczna", r"ORGANIC|ISOMORPH|STEREO|MECHANISM|SPECTRA"),
    ("dane-jadrowe", r"NUCLE"),
    ("edukacja", r"EDUCATION|^EDU$|CURRICULUM|LESSON|SCHOOL|^E8|LEVELS|EXPLAIN|LO_MAPPING"),
    ("nauka-referencje", r"SCIENCE|REFERENCE|KNOWLEDGE"),
    ("gfx-ui", r"^UI|VIZ|VIEW|RENDER|^VIS$|VISUAL|MOTION|^DOM$|^CV$|EDITOR|OBSERVER|^STATE$|REPRESENTATION"),
]


def klasa(v):
    for mod, rx in DANE:
        if any(re.search(rx, k) for k in v["data"]):
            return mod
    che = [c for c in v["che"] if c not in ("DATA", "modules", "registry")]
    for mod, rx in CHE:
        if che and all(re.search(rx, c) for c in che):
            return mod
    for mod, rx in CHE:
        if any(re.search(rx, c) for c in che) and mod in ("audyt",) and len(che) > 1 and \
                sum(bool(re.search(rx, c)) for c in che) * 2 > len(che):
            return mod
    return "rdzen" if che or v["data"] else "inne"


def main():
    mapa = json.loads((ROOT / "engine/registry/mapa_sekcji.json").read_text(encoding="utf-8"))
    catp = SEC / "anon001_catalog.json"
    cat = json.loads(catp.read_text(encoding="utf-8"))
    agg = defaultdict(lambda: [0, 0])
    stara_na_nowa = {}
    for x in cat:
        v = mapa[x["file"]]
        mod = klasa(v)
        x["modul"] = mod
        agg[mod][0] += 1; agg[mod][1] += x["bytes"]
        nazwa = x["file"].split("/")[-1]
        stara_na_nowa[x["file"]] = f"anon001/{mod}/{nazwa}"
    for mod, (n, b) in sorted(agg.items(), key=lambda t: -t[1][1]):
        print(f"{mod:18} {n:4} sekcji  {b/1024:7.1f} KB")
    if "--przenies" not in sys.argv:
        return
    for x in cat:
        new = stara_na_nowa[x["file"]]
        if new != x["file"]:
            (SEC / new).parent.mkdir(parents=True, exist_ok=True)
            subprocess.run(["git", "mv", str(SEC / x["file"]), str(SEC / new)], check=True, cwd=ROOT)
            x["file"] = new
    catp.write_text(json.dumps(cat, ensure_ascii=False, indent=1), encoding="utf-8")
    nowa_mapa = {stara_na_nowa.get(k, k): v for k, v in mapa.items()}
    (ROOT / "engine/registry/mapa_sekcji.json").write_text(json.dumps(nowa_mapa, ensure_ascii=False, indent=0), encoding="utf-8")
    for p in (ROOT / "engine/registry/profile").glob("*.json"):
        pr = json.loads(p.read_text(encoding="utf-8"))
        pr["drop_sections"] = [stara_na_nowa.get(f, f) for f in pr.get("drop_sections", [])]
        p.write_text(json.dumps(pr, ensure_ascii=False, indent=1), encoding="utf-8")
    print("przeniesiono; katalog, mapa i profile zaktualizowane")


if __name__ == "__main__":
    main()
