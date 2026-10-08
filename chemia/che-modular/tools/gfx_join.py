#!/usr/bin/env python3
"""gfx_join.py — składa moduł GFX/VIEW ze szkieletu i plików per element.

Jako biblioteka:  join(mod, allow=None, przedmiot="chemia") -> str
  allow: None = wszystko (bajt w bajt = oryginał), albo dict {rodzaj: set(id)};
  rodzaj spoza dict jest brany w całości. Element pominięty → /* GFX-PACK drop rodzaj/id */.
  Plik elementu: <przedmiot>/<rodzaj>/<id>.js → wspolne/… → dowolny inny przedmiot.
  Ten sam id w kilku przedmiotach = wariant przedmiotowy (np. inna zlewka w biologii).
Jako test:  python3 tools/gfx_join.py   → sprawdza sha1 pełnego złożenia z catalog.json.
"""
import hashlib, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GFX = ROOT / "engine" / "src" / "gfx"
sys.path.insert(0, str(Path(__file__).resolve().parent))
from scal import scal  # noqa: E402

MARK = re.compile(r"/\*@@GFX ([\w.-]+)/([\w.-]+)@@\*/")


def _id(file_id: str) -> str:
    return file_id.split("__")[0]


def find(kind: str, fid: str, przedmiot: str = "chemia") -> Path:
    for subj in (przedmiot, "wspolne"):
        p = GFX / subj / kind / f"{fid}.js"
        if p.exists():
            return p
    hits = sorted(GFX.glob(f"*/{kind}/{fid}.js"))
    if not hits:
        raise FileNotFoundError(f"{kind}/{fid}")
    return hits[0]


def join(mod: str, allow: dict | None = None, przedmiot: str = "chemia") -> str:
    d = GFX / "_szkielet" / mod
    skel = scal(d) if d.is_dir() else (GFX / "_szkielet" / f"{mod}.js").read_text(encoding="utf-8")

    def rep(m):
        kind, fid = m.group(1), m.group(2)
        if allow is not None and kind in allow and _id(fid) not in allow[kind]:
            return f"/* GFX-PACK drop {kind}/{fid} */"
        return find(kind, fid, przedmiot).read_text(encoding="utf-8")

    return MARK.sub(rep, skel)


def test() -> int:
    cat = {c["id"]: c for c in json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))}
    bad = 0
    mods = sorted({p.stem for p in (GFX / "_szkielet").glob("*.js")} | {p.name for p in (GFX / "_szkielet").iterdir() if p.is_dir()})
    for mod in mods:
        s = join(mod)
        sha = hashlib.sha1(s.encode("utf-8")).hexdigest()[:12]
        ok = sha == cat[mod]["sha1"]
        bad += not ok
        print(("OK " if ok else "FAIL ") + mod, sha)
    return bad


if __name__ == "__main__":
    sys.exit(1 if test() else 0)
