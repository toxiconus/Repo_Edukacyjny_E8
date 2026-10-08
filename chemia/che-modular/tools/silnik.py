#!/usr/bin/env python3
"""silnik.py — składa silnik CHE z modułów (lab = szkielet + moduły; che-viz.js dla lekcji).

Biblioteka:
  lab_html(drop=None, gfx_allow=None, przedmiot="chemia", sections=None) -> str
      drop: zbiór id modułów do pominięcia (treść <script> zostaje pusta).
      gfx_allow: {rodzaj: set(id)} dla naczyń/efektów/scen/reakcji/widoków (gfx_join).
      sections: lista plików sekcji _anon_001 (None = cały moduł).
  che_viz(html) -> str   pakiet silnika dla lekcji (jak archiwalny split_viz.py v0_59).
CLI (test bezstratności):
  python3 tools/silnik.py   → lab == monolit (sha1) i che-viz.js == archiwum v0_59 (sha1)
"""
import hashlib, json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from gfx_join import join  # noqa: E402

MOD = ROOT / "modules"
CATALOG = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
BY_INDEX = {c["index"]: c for c in CATALOG}
_SK = ROOT / "engine/src/gfx/_szkielet"
GFX_MODS = {p.stem for p in _SK.glob("*.js")} | {p.name for p in _SK.iterdir() if p.is_dir()}
SRC = ROOT / "engine/src"
from scal import scal  # noqa: E402
MONO_NAME = "CHE_lab_wizualizacje_v0_57_GFX16.html"
LESSON_SRC = ["che-n01-src", "che-n02-src", "che-kw-src", "che-sole-src", "fiz-elektro-src"]


def module_body(c, gfx_allow=None, przedmiot="chemia", sections=None):
    if c["id"] in GFX_MODS:
        return join(c["id"], gfx_allow, przedmiot)
    if c["id"] == "_anon_001":
        if sections is None:
            sections = [x["file"].split("/", 1)[1] for x in json.loads((ROOT / "sections/anon001_catalog.json").read_text(encoding="utf-8"))]
        return "".join((ROOT / "sections/anon001" / f).read_text(encoding="utf-8") for f in sections)  # kolejność jak w katalogu
    f, d = SRC / "moduly" / f'{c["id"]}.js', SRC / "moduly" / c["id"]
    if d.is_dir():
        return scal(d)
    if f.exists():
        return f.read_text(encoding="utf-8")
    return (MOD / c["file"]).read_text(encoding="utf-8")   # zapas: moduł z ekstrakcji


def skeleton():
    """HTML labu: engine/src/lab/szkielet.html + CSS z engine/src/style (zapas: modules/_lab_skeleton.html)."""
    p = SRC / "lab/szkielet.html"
    if not p.exists():
        return (MOD / "_lab_skeleton.html").read_text(encoding="utf-8")
    return re.sub(r"/\*@@CSS ([\w.-]+)@@\*/", lambda m: (SRC / "style" / m.group(1)).read_text(encoding="utf-8"),
                  p.read_text(encoding="utf-8"))


def lab_html(drop=None, gfx_allow=None, przedmiot="chemia", sections=None):
    drop = drop or set()
    skel = skeleton()

    def rep(m):
        c = BY_INDEX[int(m.group(1))]
        return "" if c["id"] in drop else module_body(c, gfx_allow, przedmiot, sections)

    return re.sub(r"/\*@@MOD (\d+)@@\*/", rep, skel)


STANDALONE = (ROOT / "engine/src/standalone.html")


def che_viz(s, name=MONO_NAME):
    """Logika 1:1 z archiwum/che_v0_59/narzedzia/split_viz.py (część che-viz.js)."""
    head = re.search(r"<head>(.*?)</head>", s, re.S).group(1)
    body = re.search(r"<body[^>]*>(.*)</body>", s, re.S).group(1)
    head = re.sub(r"<meta[^>]*>\s*", "", head)
    head = re.sub(r"<title>.*?</title>\s*", "", head, flags=re.S)
    for sid in LESSON_SRC:
        m = re.search(r'<script type="application/json" id="%s">.*?</script>' % re.escape(sid), body, re.S)
        if m:
            body = body.replace(m.group(0), "")
    payload = head + body + STANDALONE.read_text(encoding="utf-8")
    return ("/* che-viz.js — wspólny pakiet CHE (silnik, dane, GFX, widoki, style) z %s. ZAMROŻONY: nie edytować ręcznie.\n"
            "   Źródła: gałąź claude/che-lab-archiwum-v0_57; odtworzenie: python3 build.py && python3 tools/split_viz.py */\n"
            'document.documentElement.classList.add("che-standalone");\ndocument.write(%s);\n') % (
        name, json.dumps(payload, ensure_ascii=False))


def z_profilu(prof):
    """che-viz.js z profilu odchudzania (engine/registry/profile/<nazwa>.json)."""
    cat = json.loads((ROOT / "sections/anon001_catalog.json").read_text(encoding="utf-8"))
    drop_s = set(prof.get("drop_sections", []))
    keep = [x["file"].split("/", 1)[1] for x in cat if x["file"] not in drop_s]
    allg = {}
    for items in json.loads((ROOT / "engine/src/gfx/index.json").read_text(encoding="utf-8")).values():
        for it in items:
            allg.setdefault(it["kind"], set()).add(it["id"])
    allow = {k: v - set(prof.get("drop_gfx", {}).get(k, [])) for k, v in allg.items()}
    return che_viz(lab_html(drop=set(prof.get("drop_mods", [])), gfx_allow=allow, sections=keep))


def sha(s):
    return hashlib.sha1(s.encode("utf-8")).hexdigest()[:12]


def test():
    bad = 0
    if (MOD / "_anon_001.js").exists():
        cat = json.loads((ROOT / "sections/anon001_catalog.json").read_text(encoding="utf-8"))
        joined = "".join((ROOT / "sections" / x["file"]).read_text(encoding="utf-8") for x in cat)
        ok = joined == (MOD / "_anon_001.js").read_text(encoding="utf-8")
        bad += not ok
        print(("OK " if ok else "FAIL ") + f"sekcje _anon_001 ({len(cat)}) == moduł")
    lab = lab_html()
    mono = Path("/tmp/che_mono.html")
    if mono.exists():
        ok = sha(lab) == sha(mono.read_text(encoding="utf-8"))
        bad += not ok
        print(("OK " if ok else "FAIL ") + "lab z modułów == monolit v0_57")
    arch = ROOT.parent / "archiwum/che_v0_59/dist/che-viz.js"
    if arch.exists():
        ok = sha(che_viz(lab)) == sha(arch.read_text(encoding="utf-8"))
        bad += not ok
        print(("OK " if ok else "FAIL ") + "che-viz.js z modułów == zamrożony v0_59")
    return bad


if __name__ == "__main__":
    sys.exit(1 if test() else 0)
