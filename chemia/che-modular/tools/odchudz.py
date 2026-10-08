#!/usr/bin/env python3
"""odchudz.py — automatyczne odchudzanie silnika z testem jako wyrocznią (ddmin).

  python3 tools/odchudz.py [--profil wspolny] [--lekcje N01_tlenki,N05_wodorki] [--etap mod,anon,widoki,gfx]

Dla każdej grupy kandydatów: zbuduj che-viz.js bez niej → test_lekcje.cjs na lekcjach profilu.
Test OK → grupa usunięta na stałe; FAIL → dziel na pół (do 1 elementu / 3 sekcji).
Stan zapisywany po każdej akceptacji: engine/registry/profile/<profil>.json (wznawialne).
Wymaga: python3 tools/che.py lekcje (strony dist/*.html z pełnym silnikiem).
"""
import argparse, json, re, shutil, subprocess, sys, time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
import silnik  # noqa: E402

DIST = ROOT / "dist"
KAND = DIST / "_kand"
PROF = ROOT / "engine/registry/profile"
GFX_IDX = json.loads((ROOT / "engine/src/gfx/index.json").read_text(encoding="utf-8"))
ALL_GFX = {}
for items in GFX_IDX.values():
    for it in items:
        ALL_GFX.setdefault(it["kind"], set()).add(it["id"])
ANON = json.loads((ROOT / "sections/anon001_catalog.json").read_text(encoding="utf-8"))
ANON = [s for s in ANON if (ROOT / "sections" / s["file"]).exists()]
TAG_ORDER = ["misc", "editor", "organic", "nuclear", "geometry", "education", "audit", "thermo",
             "electrochem", "atom", "viz-ui", "stoich", "data-elements", "core"]


def load(name):
    p = PROF / f"{name}.json"
    if p.exists():
        return json.loads(p.read_text(encoding="utf-8"))
    return {"drop_mods": [], "drop_sections": [], "drop_gfx": {}, "log": []}


def save(name, prof):
    PROF.mkdir(parents=True, exist_ok=True)
    (PROF / f"{name}.json").write_text(json.dumps(prof, ensure_ascii=False, indent=1), encoding="utf-8")


def build(prof):
    keep_sections = [s["file"].split("/", 1)[1] for s in ANON if s["file"] not in set(prof["drop_sections"])]
    allow = {k: ALL_GFX[k] - set(prof["drop_gfx"].get(k, [])) for k in ALL_GFX}
    html = silnik.lab_html(drop=set(prof["drop_mods"]), gfx_allow=allow, sections=keep_sections)
    return silnik.che_viz(html)


def test(prof, pages):
    viz = build(prof)
    (KAND / "che-viz.js").write_text(viz, encoding="utf-8")
    r = subprocess.run(["node", str(ROOT / "tools/test_lekcje.cjs"), "--cicho", *[str(KAND / p) for p in pages]],
                       capture_output=True, text=True, timeout=900)
    return r.returncode == 0, len(viz.encode("utf-8")), r.stdout.strip().splitlines()[:2]


def apply(prof, kind, items):
    p = json.loads(json.dumps(prof))
    if kind == "mod":
        p["drop_mods"] += items
    elif kind == "anon":
        p["drop_sections"] += items
    else:
        p["drop_gfx"].setdefault(kind, [])
        p["drop_gfx"][kind] += items
    return p


def ddmin(name, prof, kind, items, label, pages, min_size):
    if not items:
        return prof
    cand = apply(prof, kind, items)
    t = time.time()
    ok, size, out = test(cand, pages)
    print(f"{'OK  ' if ok else 'FAIL'} {label} ({len(items)}) → {size/1e6:.2f} MB  {time.time()-t:.0f}s"
          + ("" if ok else "  " + " ".join(out)[:160]), flush=True)
    if ok:
        cand["log"].append(f"{label}: -{len(items)} → {size/1e6:.2f} MB")
        save(name, cand)
        return cand
    if len(items) <= min_size:
        return prof
    h = len(items) // 2
    prof = ddmin(name, prof, kind, items[:h], label + "/a", pages, min_size)
    return ddmin(name, prof, kind, items[h:], label + "/b", pages, min_size)


def referenced(pages):
    ids, keys = set(), set()
    for p in pages:
        s = (DIST / p).read_text(encoding="utf-8")
        ids |= set(re.findall(r'data-che-lesson-viz=\\?"([\w.-]+)', s)) | set(re.findall(r'data-prac=\\?"([\w.-]+)', s))
        keys |= set(re.findall(r'data-k=\\?"([\w.-]+)', s))
    return ids, keys


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--profil", default="wspolny")
    ap.add_argument("--lekcje", default="")
    ap.add_argument("--etap", default="mod,anon,widoki,gfx")
    a = ap.parse_args()
    pages = [f"{x}.html" for x in a.lekcje.split(",") if x] or sorted(
        p.name for p in DIST.glob("*.html") if p.name != "index.html")
    KAND.mkdir(parents=True, exist_ok=True)
    for p in pages:
        shutil.copy(DIST / p, KAND / p)
    prof = load(a.profil)
    ok, size, out = test(prof, pages)
    print(f"start {a.profil}: {'OK' if ok else 'FAIL'} {size/1e6:.2f} MB lekcje={len(pages)}", flush=True)
    if not ok:
        sys.exit("profil startowy nie przechodzi testu: " + " ".join(out))
    et = a.etap.split(",")
    keep_always = {"che-consistency-v001", "che-prepaint", "che-lesson-registry-js"}
    if "mod" in et:
        cat = sorted(silnik.CATALOG, key=lambda c: -c["bytes"])
        for c in cat:
            if c["id"] in keep_always or c["id"] in prof["drop_mods"] or c["id"] in silnik.GFX_MODS or c["id"] == "_anon_001":
                continue
            prof = ddmin(a.profil, prof, "mod", [c["id"]], "mod " + c["id"], pages, 1)
    if "anon" in et:
        done = set(prof["drop_sections"])
        for tag in TAG_ORDER:
            grp = [s["file"] for s in ANON if s["file"] not in done and tag in s.get("tags", [])
                   and s["num"] > 8 and not any(t.startswith("data-") for t in s.get("tags", []) if tag != "data-elements")]
            prof = ddmin(a.profil, prof, "anon", grp, "anon " + tag, pages, 3)
            done = set(prof["drop_sections"])
        rest = [s["file"] for s in ANON if s["file"] not in done and s["num"] > 8]
        prof = ddmin(a.profil, prof, "anon", rest, "anon reszta", pages, 3)
    ids, keys = referenced(pages)
    if "widoki" in et:
        grp = sorted(ALL_GFX["widoki"] - ids - set(prof["drop_gfx"].get("widoki", [])))
        prof = ddmin(a.profil, prof, "widoki", grp, "widoki nieużywane", pages, 1)
    if "gfx" in et:
        grp = sorted(ALL_GFX["reakcje"] - keys - set(prof["drop_gfx"].get("reakcje", [])))
        prof = ddmin(a.profil, prof, "reakcje", grp, "reakcje nieużywane", pages, 1)
        for k in ("sceny", "efekty", "naczynia"):
            grp = sorted(ALL_GFX[k] - set(prof["drop_gfx"].get(k, [])))
            prof = ddmin(a.profil, prof, k, grp, k, pages, 1)
    ok, size, _ = test(prof, pages)
    print(f"koniec {a.profil}: {'OK' if ok else 'FAIL'} {size/1e6:.2f} MB")


if __name__ == "__main__":
    main()
