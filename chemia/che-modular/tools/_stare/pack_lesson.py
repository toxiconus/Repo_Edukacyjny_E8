#!/usr/bin/env python3
"""
CHE lesson packer — builds a slim standalone HTML for one lesson
from the extracted monolith modules.

Biggest wins:
  1. Drop other lessons' source HTML (N02/N03/N04 ≈ 0.5 MB)
  2. Drop devtools (hub, gate, consistency, migrations)
  3. Keep only modules matching dataScope + shared core/gfx
  4. Filter GFX: vessels / effects / scenes / rx presets by allow-list
  5. Filter VIEW definitions in visual-library to manifest.visuals
  6. Optional: pick() on DATA.REACTIONS / OXIDES keys from lesson scan

Usage:
  python3 pack_lesson.py N01
  python3 pack_lesson.py N01 --no-gfx-filter
  python3 pack_lesson.py --all
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MODULES = ROOT / "modules"
DIST = ROOT / "dist"
MANIFESTS = ROOT / "manifests"
SECTIONS = ROOT / "sections"
CATALOG = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))

# Optional unified registry (engine/registry) — preferred source of lesson deps
try:
    import sys as _sys
    _sys.path.insert(0, str(ROOT / "tools"))
    from engine_registry import load_registry, resolve_lesson  # type: ignore
    _REG = load_registry()
except Exception:
    _REG = None
    resolve_lesson = None  # type: ignore

# Prefer slim pack CSS; full lab styles.css is ~900 KB and not needed in lesson packs
_styles_pack = ROOT / "styles-pack.css"
_styles_full = ROOT / "styles.css"
STYLES = (
    _styles_pack.read_text(encoding="utf-8")
    if _styles_pack.exists()
    else (_styles_full.read_text(encoding="utf-8") if _styles_full.exists() else "")
)

# Split of monolith _anon_001 into tagged try/catch modules (sections/anon001_catalog.json)
_ANON_CAT_PATH = SECTIONS / "anon001_catalog.json"
ANON001_CATALOG = (
    json.loads(_ANON_CAT_PATH.read_text(encoding="utf-8"))
    if _ANON_CAT_PATH.exists()
    else []
)

# Tags on anon001 sections that mean "chemistry data for family"
ANON_FAMILY_TAGS = {
    "N01": {"data-oxides", "data-reactions", "data-elements", "stoich", "atom"},
    "N02": {"data-hydroxides", "data-salts", "data-reactions", "data-elements", "stoich"},
    "N03": {"data-acids", "data-reactions", "data-elements", "stoich", "electrochem"},
    "N04": {"data-salts", "data-acids", "data-reactions", "data-elements", "stoich"},
    "FIZ01": {"phys", "data-elements", "atom"},
}
# Pure-dev tags — drop unless section also has family chem tags
ANON_DEV_ONLY = {"audit", "education", "organic", "nuclear", "editor", "geometry", "misc"}
ANON_ALWAYS_MAX_NUM = 8  # bootstrap + early DATA modules always kept


def select_anon001_sections(code: str, anon_tags: set | None = None) -> list[dict]:
    """Pick tagged slices of _anon_001 instead of the whole 1.2 MB blob."""
    if not ANON001_CATALOG:
        return []
    fam = set(anon_tags) if anon_tags else set(ANON_FAMILY_TAGS.get(code, {"data-elements", "stoich"}))
    out = []
    for c in ANON001_CATALOG:
        tags = set(c.get("tags") or [])
        if c["num"] <= ANON_ALWAYS_MAX_NUM:
            out.append(c)
            continue
        # drop pure developer / pedagogy / organic / nuclear slices
        if tags and tags <= (ANON_DEV_ONLY | {"core", "viz-ui"}):
            continue
        if tags & fam:
            out.append(c)
            continue
    out.sort(key=lambda x: x["num"])
    return out


def load_anon001_bundle(code: str, anon_tags: set | None = None) -> tuple[str, dict]:
    """Concatenate selected section files into one script body."""
    selected = select_anon001_sections(code, anon_tags=anon_tags)
    if not selected:
        # fallback: full module
        full = (MODULES / "_anon_001.js").read_text(encoding="utf-8")
        return full, {"mode": "full", "sections": 0, "bytes": len(full.encode())}
    chunks = []
    total = 0
    for c in selected:
        path = SECTIONS / c["file"]
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        chunks.append(f"/* anon001 section m{c['num']:03d} tags={','.join(c['tags'])} */\n")
        chunks.append(text)
        total += c["bytes"]
    body = "\n".join(chunks)
    full_bytes = sum(x["bytes"] for x in ANON001_CATALOG) if ANON001_CATALOG else total
    return body, {
        "mode": "sections",
        "sections": len(selected),
        "sections_total": len(ANON001_CATALOG),
        "bytes": total,
        "bytes_full": full_bytes,
        "saved": full_bytes - total,
    }

# ---------------------------------------------------------------------------
# Policy: which catalog tags / module ids belong to which lesson family
# ---------------------------------------------------------------------------

CORE_TAGS = {"core"}
# Always keep these module ids if present (shell / runtime for standalone)
ALWAYS_IDS = {
    "che-prepaint",
    "che-lesson-data",
    "che-lesson-registry-js",
    "che-lab-bridge-v102",
    "che-widget-api-v005",
    "che-shared-visual-registry-v017",
    "che-lesson-context-v001",
    "che-lesson-open-viz-v001",
    "che-zoom-engine-v001",
    "che-v038-views",
    "che-viz-retire-v001",
}

# Drop from single-lesson packs (dev / multi-subject shell)
DROP_TAGS = {"devtools"}
DROP_ID_PREFIXES = (
    "che-home-gate",
    "che-project-shell",
    "che-hub-",
    "che-consistency",
    "che-widget-migration",
    "che-experiment-migration",
    "che-legacy-consumer",
    "che-chemistry-widget-migration",
    "che-char-central",
    "che-local-data-migration",
    "che-local-data-audit",
    "che-engine-hardening",
    "che-literal-newline",
    "che-widget-migration-audit",
)

# Lesson family → tags to KEEP (in addition to core)
FAMILY_TAGS = {
    "N01": {"oxides", "stoich", "colors", "gfx", "lessons"},
    "N02": {"hydroxides", "stoich", "colors", "gfx", "lessons"},
    "N03": {"acids", "stoich", "colors", "gfx", "lessons"},
    "N04": {"salts", "stoich", "colors", "gfx", "lessons", "acids"},  # salts share acid anions
    "FIZ01": {"fiz", "gfx", "lessons"},
}

# Lesson → source script id
SOURCE_ID = {
    "N01": "che-n01-src",
    "N02": "che-n02-src",
    "N03": "che-kw-src",
    "N04": "che-sole-src",
    "FIZ01": "fiz-elektro-src",
}

# Other lesson sources to always exclude when packing one lesson
ALL_SOURCES = set(SOURCE_ID.values())

# ---------------------------------------------------------------------------
# GFX allow-lists per lesson family (vessels / effects / scenes / rx)
# Conservative: include anything the family might need in demos.
# ---------------------------------------------------------------------------

GFX_ALLOW = {
    "N01": {
        "vessels": {
            "beaker", "testTube", "flask", "roundFlask", "cylinder",
            "burner", "spiritLamp", "stand", "tripod", "hotplate",
            "tubeRack", "dropper", "gasCollect", "crucible", "evapDish",
            "watchGlass", "stage", "anchor", "label", "thermometer",
        },
        "effects": {
            "heatGlow", "liquid", "meniscus", "precipitate", "plume",
            "turbidity", "solids", "bubbles", "foam", "ripples",
            "fumes", "steam", "heatConvection", "flame", "sparks",
            "metalBurn", "flash", "splint", "pop", "label", "stopper",
            "condensation", "splash", "scale",
        },
        "scenes": {"carbonate", "heating", "gasCollection", "acidMetal"},
        # rx presets that exist in lab-engine and match N01 chemistry
        "rx": {
            "na2oH2o", "k2oH2o", "li2oH2o", "caoH2o", "mgoH2o", "baoH2o",
            "so3H2o", "so2H2o", "co2H2o", "p4o10H2o",
            "caoHcl", "mgoHcl", "znoHcl", "al2o3Hcl", "fe2o3Hcl", "fe2o3H2so4",
            "so2Naoh", "so3Naoh", "naohCo2", "al2o3NaohAq",
            "cuoh2Heat", "baoh2Co2",
        },
    },
    "N02": {
        "vessels": {
            "beaker", "testTube", "flask", "cylinder", "burner", "stand",
            "tripod", "tubeRack", "dropper", "stage", "anchor", "pHscale",
            "pHmeter", "thermometer", "evapDish",
        },
        "effects": {
            "heatGlow", "liquid", "meniscus", "precipitate", "plume",
            "turbidity", "solids", "bubbles", "ripples", "fumes", "steam",
            "dropMix", "label", "stopper", "splash", "scale",
        },
        "scenes": {"acidMetal", "indicator", "heating"},
        "rx": {
            "mgcl2Naoh", "alcl3Naoh", "znso4Naoh", "feso4Naoh", "cucl2Naoh",
            "niso4Naoh", "mnso4Naoh", "pbno32Naoh", "cacl2Naoh", "agno3Naoh",
            "caoh2Hcl", "kohHcl", "kohHno3", "naohHno3", "baoh2H2so4",
            "cuoh2H2so4", "cuoh2Hcl", "feoh3Hcl", "znoh2Hcl", "aloh3Naoh",
            "znoh2Naoh", "baoh2Co2", "cuoh2Heat", "feoh2O2", "caoh2Na2co3",
            "nh4clNaoh", "mgoH2o", "caoH2o", "baoH2o",
        },
    },
    "N03": {
        "vessels": {
            "beaker", "testTube", "flask", "cylinder", "burette", "stand",
            "tubeRack", "dropper", "stage", "anchor", "pHscale", "pHmeter",
            "pipette", "volFlask",
        },
        "effects": {
            "liquid", "meniscus", "precipitate", "bubbles", "foam", "ripples",
            "dropMix", "label", "stopper", "tap", "splash", "scale", "fumes",
        },
        "scenes": {"indicator", "indicatorRack", "titration", "dilution", "acidMetal"},
        "rx": {
            "liH2o", "kH2o", "caH2o", "mgH2oHot",
            "caoh2Hcl", "kohHcl", "kohHno3", "naohHno3", "baoh2H2so4",
        },
    },
    "N04": {
        "vessels": {
            "beaker", "testTube", "flask", "cylinder", "stand", "tubeRack",
            "dropper", "stage", "anchor", "pHscale", "conductivity",
            "burner", "evapDish",
        },
        "effects": {
            "liquid", "meniscus", "precipitate", "turbidity", "solids",
            "bubbles", "ripples", "dropMix", "label", "stopper", "splash",
            "scale", "fumes", "heatGlow",
        },
        "scenes": {"conductivity", "indicator", "heating", "carbonate"},
        "rx": {
            "mgcl2Naoh", "alcl3Naoh", "znso4Naoh", "feso4Naoh", "cucl2Naoh",
            "agno3Naoh", "caoh2Na2co3", "nh4clNaoh", "hyd-nacl", "hyd-na2co3",
            "hyd-nh4cl", "hyd-cuso4", "cu-hydrate",
        },
    },
    "FIZ01": {
        "vessels": {
            "electroscope", "chargedRod", "pendulum", "fieldMap", "chargeBar",
            "stage", "anchor", "paper",
        },
        "effects": {"discharge", "sparks", "label", "scale"},
        "scenes": set(),
        "rx": set(),
    },
}

# Minimal vessels always kept if any chemistry vessel is kept (draw helpers)
GFX_CORE_VESSELS = {"stage", "anchor"}
GFX_CORE_EFFECTS = {"label", "scale", "liquid", "meniscus"}


def load_manifest(code: str) -> dict:
    path = MANIFESTS / f"{code}.json"
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return {"code": code, "visuals": [], "reactions": [], "oxides": []}


def scan_lesson_source(src_js: str) -> dict:
    """Pull data-* attributes from lesson HTML embedded in source script."""
    text = src_js
    # may be JSON-stringified
    raw = text.strip()
    if raw.startswith('"') or raw.startswith("'"):
        try:
            text = json.loads(raw)
        except Exception:
            pass
    elif raw.startswith("{") or "DOCTYPE" in raw[:200]:
        pass
    else:
        try:
            text = json.loads(raw)
        except Exception:
            text = src_js

    if not isinstance(text, str):
        text = src_js

    def attrs(name):
        return sorted(set(re.findall(rf'{name}="([^"]+)"', text)))

    return {
        "reactions": attrs("data-rx"),
        "oxides": attrs("data-ox"),
        "hydroxides": attrs("data-hy"),
        "visuals": sorted(set(attrs("data-che-lesson-viz") + attrs("data-che-open-viz"))),
        "compounds": attrs("data-cmp"),
        "salts": attrs("data-salt"),
        "ppts": attrs("data-ppt"),
    }


# Module ids that are family-specific even if poorly tagged
FAMILY_EXCLUDE = {
    "N01": {
        "che-hydroxides-v001", "che-kw-src", "che-sole-src", "che-n02-src",
        "che-atlas-acid-v001", "che-ionic-v001", "che-fiz-elektro-v001",
        "fiz-elektro-src",
    },
    "N02": {
        "che-oxides-v001", "che-kw-src", "che-sole-src", "che-n01-src",
        "che-atlas-acid-v001", "che-fiz-elektro-v001", "fiz-elektro-src",
    },
    "N03": {
        "che-oxides-v001", "che-hydroxides-v001", "che-n01-src", "che-n02-src",
        "che-sole-src", "che-ionic-v001", "che-fiz-elektro-v001", "fiz-elektro-src",
    },
    "N04": {
        "che-oxides-v001", "che-hydroxides-v001", "che-n01-src", "che-n02-src",
        "che-kw-src", "che-fiz-elektro-v001", "fiz-elektro-src",
    },
    "FIZ01": {
        "che-oxides-v001", "che-hydroxides-v001", "che-ionic-v001",
        "che-n01-src", "che-n02-src", "che-kw-src", "che-sole-src",
        "che-atlas-acid-v001", "che-stoich-v001", "che-colors-v001",
    },
}


def select_modules(code: str) -> list[dict]:
    family_tags = FAMILY_TAGS.get(code, {"gfx", "lessons"})
    keep_tags = CORE_TAGS | family_tags
    my_source = SOURCE_ID.get(code)
    exclude = FAMILY_EXCLUDE.get(code, set())
    selected = []
    for c in CATALOG:
        sid = c["id"]
        tags = set(c["tags"])
        if sid in exclude:
            continue
        # always drop other lesson sources
        if sid in ALL_SOURCES and sid != my_source:
            continue
        if any(sid.startswith(p) for p in DROP_ID_PREFIXES):
            continue
        if tags & DROP_TAGS and sid not in ALWAYS_IDS:
            continue
        # foreign family tags only (e.g. hydroxides on N01) → skip unless also core/gfx/lessons
        foreign = tags - keep_tags - {"lessons", "gfx", "stoich", "colors", "core"}
        if foreign and not (tags & {"core", "gfx", "lessons"}):
            continue
        # keep if core, always, matching family, or source
        if (
            sid in ALWAYS_IDS
            or sid == my_source
            or tags & keep_tags
            or (not tags and c["index"] < 5)  # early anon bootstrap
        ):
            selected.append(c)
            continue
        # small untagged glue
        if sid.startswith("_anon_") and c["bytes"] < 5000:
            selected.append(c)
            continue
    selected.sort(key=lambda x: x["index"])
    return selected


def filter_gfx_lab_engine(js: str, code: str, allow_override: dict | None = None) -> tuple[str, dict]:
    """
    Remove vessel/effect/sceneReg/P registrations not in allow-list.
    Strategy: comment-out whole registration calls by balancing parentheses
    from the keyword match. Conservative — if parsing fails, keep the call.
    """
    allow = allow_override or GFX_ALLOW.get(code)
    if not allow:
        return js, {"skipped": True}

    vessels = set(allow["vessels"]) | GFX_CORE_VESSELS
    effects = set(allow["effects"]) | GFX_CORE_EFFECTS
    scenes = set(allow["scenes"])
    rx = set(allow["rx"])

    stats = {"vessels_kept": 0, "vessels_drop": 0, "effects_kept": 0, "effects_drop": 0,
             "scenes_kept": 0, "scenes_drop": 0, "rx_kept": 0, "rx_drop": 0}

    def drop_calls(text: str, fn: str, allowed: set, kept_key: str, drop_key: str) -> str:
        # Match fn('id' or fn("id"
        pattern = re.compile(rf"\b{re.escape(fn)}\(\s*(['\"])([a-zA-Z0-9_-]+)\1")
        out = []
        pos = 0
        for m in pattern.finditer(text):
            name = m.group(2)
            start = m.start()
            # find end of call by paren balance from m.start()
            i = m.end() - 1  # at opening paren roughly — walk from first (
            # locate the '(' after fn name
            paren = text.find("(", start)
            if paren < 0:
                continue
            depth = 0
            j = paren
            in_str = None
            escape = False
            while j < len(text):
                ch = text[j]
                if in_str:
                    if escape:
                        escape = False
                    elif ch == "\\":
                        escape = True
                    elif ch == in_str:
                        in_str = None
                else:
                    if ch in ("'", '"', "`"):
                        in_str = ch
                    elif ch == "(":
                        depth += 1
                    elif ch == ")":
                        depth -= 1
                        if depth == 0:
                            j += 1
                            # swallow trailing semicolon / newline
                            while j < len(text) and text[j] in " \t":
                                j += 1
                            if j < len(text) and text[j] == ";":
                                j += 1
                            break
                j += 1
            else:
                continue  # unbalanced — keep

            out.append(text[pos:start])
            if name in allowed:
                out.append(text[start:j])
                stats[kept_key] += 1
            else:
                out.append(f"/* GFX-PACK drop {fn}('{name}') */")
                stats[drop_key] += 1
            pos = j
        out.append(text[pos:])
        return "".join(out)

    js = drop_calls(js, "vessel", vessels, "vessels_kept", "vessels_drop")
    js = drop_calls(js, "effect", effects, "effects_kept", "effects_drop")
    js = drop_calls(js, "sceneReg", scenes, "scenes_kept", "scenes_drop")
    js = drop_calls(js, "P", rx, "rx_kept", "rx_drop")
    return js, stats


def filter_visual_library(js: str, keep_visuals: set[str]) -> tuple[str, int]:
    """
    Keep V.define('id', ...) only when id is in keep_visuals or is a shared primitive.
    Also keep defines whose id starts with prefixes we always need.
    """
    always_prefix = ("gfx-scene-",)  # handled separately; scenes filtered via GFX
    # Shared / cross-lesson tools often linked from N01
    shared = {
        "molecule3d-merged", "periodic-54", "stech-kalkulator-v01",
        "chain-scn", "timelineAnim", "ion-map-v02",
    }
    keep = set(keep_visuals) | shared

    pattern = re.compile(r"""\b([A-Za-z_$][\w$]*)\.define\(\s*(['"])([^'"]+)\2""")
    out = []
    pos = 0
    dropped = 0
    for m in pattern.finditer(js):
        vid = m.group(3)
        start = m.start()
        # balance from define(
        paren = js.find("(", start)
        depth = 0
        j = paren
        in_str = None
        escape = False
        while j < len(js):
            ch = js[j]
            if in_str:
                if escape:
                    escape = False
                elif ch == "\\":
                    escape = True
                elif ch == in_str:
                    in_str = None
            else:
                if ch in ("'", '"', "`"):
                    in_str = ch
                elif ch == "(":
                    depth += 1
                elif ch == ")":
                    depth -= 1
                    if depth == 0:
                        j += 1
                        while j < len(js) and js[j] in " \t":
                            j += 1
                        if j < len(js) and js[j] == ";":
                            j += 1
                        break
            j += 1
        else:
            continue

        out.append(js[pos:start])
        keep_it = (
            vid in keep
            or any(vid.startswith(p) for p in always_prefix)
            or vid.startswith("legacy:")
        )
        # gfx-scene-* : keep only if scene name in lesson scenes later — keep all gfx-scene for safety
        if keep_it:
            out.append(js[start:j])
        else:
            out.append(f"/* VIEW-PACK drop define('{vid}') */")
            dropped += 1
        pos = j
    out.append(js[pos:])
    return "".join(out), dropped


def build_html(code: str, modules: list[dict], gfx_filter: bool, view_filter: bool) -> tuple[str, dict]:
    manifest = load_manifest(code)
    resolved = None
    if resolve_lesson is not None:
        try:
            resolved = resolve_lesson(code)
            # merge visuals from registry into manifest
            manifest = dict(manifest)
            manifest["visuals"] = sorted(set((manifest.get("visuals") or []) + (resolved.get("visuals") or [])))
        except Exception as e:
            resolved = {"error": str(e)}
    report = {
        "code": code,
        "modules": [],
        "bytes_in": 0,
        "bytes_out": 0,
        "gfx": None,
        "views_dropped": 0,
        "resolved": {k: resolved[k] for k in ("domains", "vessel_ids", "effect_ids", "scene_ids", "table_ids", "anon_tags", "subject") if resolved and k in resolved} if isinstance(resolved, dict) and "error" not in (resolved or {}) else resolved,
    }
    if isinstance(resolved, dict) and resolved.get("vessel_ids"):
        report["_gfx_allow"] = {
            "vessels": set(resolved["vessel_ids"]),
            "effects": set(resolved["effect_ids"]),
            "scenes": set(resolved["scene_ids"]),
            "rx": set((GFX_ALLOW.get(code) or {}).get("rx") or []),
        }


    parts = [
        "<!DOCTYPE html>",
        '<html lang="pl">',
        "<head>",
        '<meta charset="utf-8"/>',
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>',
        f"<title>CHE · {code} (pack)</title>",
        "<style>",
        STYLES,
        "</style>",
        "</head>",
        "<body>",
        f'<!-- CHE lesson pack: {code} · generated by pack_lesson.py -->',
    ]

    src_id = SOURCE_ID.get(code)
    scanned = {}
    for c in modules:
        # _anon_001 → tagged sections instead of full 1.2 MB blob
        if c["id"] == "_anon_001" and ANON001_CATALOG:
            body, anon_stats = load_anon001_bundle(code, anon_tags=set((report.get("resolved") or {}).get("anon_tags") or []) or None)
            report["bytes_in"] += anon_stats.get("bytes_full") or len(body.encode("utf-8"))
            report["anon001"] = anon_stats
            note = (
                f" sections {anon_stats.get('sections')}/{anon_stats.get('sections_total')} "
                f"saved={anon_stats.get('saved', 0):,}"
            )
        else:
            body = (MODULES / c["file"]).read_text(encoding="utf-8")
            report["bytes_in"] += len(body.encode("utf-8"))
            note = ""

        if c["id"] == "che-lab-engine-v001" and gfx_filter:
            body, stats = filter_gfx_lab_engine(body, code, allow_override=report.get("_gfx_allow"))
            report["gfx"] = stats
            note = (note + f" gfx-filter {stats}").strip()

        if c["id"] == "che-visual-library-v001" and view_filter:
            keep = set(manifest.get("visuals") or [])
            # merge scan if we have source
            body, dropped = filter_visual_library(body, keep)
            report["views_dropped"] = dropped
            note = (note + f" views-drop={dropped}").strip()

        if c["id"] == src_id:
            scanned = scan_lesson_source(body)
            # enrich manifest file for next runs
            merged = {
                "code": code,
                "source": src_id,
                "visuals": sorted(set(manifest.get("visuals", []) + scanned.get("visuals", []))),
                "reactions": scanned.get("reactions", []),
                "oxides": scanned.get("oxides", []),
                "hydroxides": scanned.get("hydroxides", []),
                "scanned": scanned,
            }
            MANIFESTS.mkdir(parents=True, exist_ok=True)
            (MANIFESTS / f"{code}.json").write_text(
                json.dumps(merged, indent=2, ensure_ascii=False), encoding="utf-8"
            )

        out_bytes = len(body.encode("utf-8"))
        report["bytes_out"] += out_bytes
        report["modules"].append({"id": c["id"], "bytes": out_bytes, "note": note})
        attr = f' id="{c["id"]}"' if not c["id"].startswith("_anon_") else ""
        parts.append(f"<script{attr}>")
        parts.append(body)
        parts.append("</script>")

    # --- Lesson shell (header + hamburger TOC) — shared brick ---
    shell_css = ROOT / "engine" / "src" / "layout" / "lesson-shell.css"
    shell_js = ROOT / "engine" / "src" / "layout" / "lesson-shell.js"
    meta_path = ROOT / "lessons-md" / code / "build" / "meta.json"
    if not meta_path.exists():
        meta_path = ROOT / "lessons-md" / code / "meta.json"
    lesson_meta = None
    if meta_path.exists():
        try:
            lesson_meta = json.loads(meta_path.read_text(encoding="utf-8"))
        except Exception:
            lesson_meta = None
    if shell_css.exists() and shell_js.exists():
        parts.append('<style id="che-lesson-shell-css">')
        parts.append(shell_css.read_text(encoding="utf-8"))
        parts.append("</style>")
        parts.append('<script id="che-lesson-shell-js">')
        parts.append(shell_js.read_text(encoding="utf-8"))
        parts.append("</script>")
        mount = {
            "code": code,
            "title": (lesson_meta or {}).get("title") or {"N01": "Tlenki", "N02": "Wodorotlenki", "N03": "Kwasy", "N04": "Sole", "FIZ01": "Elektrostatyka"}.get(code, code),
            "subject": (lesson_meta or {}).get("subject") or ("fizyka" if code.startswith("FIZ") else "chemia"),
            "variant": ((lesson_meta or {}).get("layout") or {}).get("variant") or ("fizyka" if code.startswith("FIZ") else "chemia"),
            "toc": ((lesson_meta or {}).get("layout") or {}).get("toc") or "float-hamburger",
            "tocItems": (lesson_meta or {}).get("tocItems") or [],
        }
        parts.append("<script>")
        parts.append("window.__LESSON_META__ = " + json.dumps(mount, ensure_ascii=False) + ";")
        parts.append("""try{
  if(window.CHE&&CHE.LessonShell)CHE.LessonShell.mount(window.__LESSON_META__);
}catch(e){console.warn('[shell]',e)}""")
        parts.append("</script>")
        report["shell"] = {"injected": True, "tocItems": len(mount.get("tocItems") or [])}
    else:
        report["shell"] = {"injected": False}


    # Standalone bootstrap if engine supports it
    title = {"N01": "Tlenki", "N02": "Wodorotlenki", "N03": "Kwasy", "N04": "Sole", "FIZ01": "Elektrostatyka"}.get(code, code)
    parts.append(
        f'<script>try{{if(window.CHE&&CHE.STANDALONE)CHE.STANDALONE.open("{code}",'
        f'{{source:"{src_id}",title:"{title}",uid:""}});}}catch(e){{console.warn(e)}}</script>'
    )
    parts.append("</body></html>")
    html = "\n".join(parts)
    report["scanned"] = scanned
    report["html_bytes"] = len(html.encode("utf-8"))
    return html, report


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("code", nargs="?", help="Lesson code e.g. N01")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--no-gfx-filter", action="store_true")
    ap.add_argument("--no-view-filter", action="store_true")
    args = ap.parse_args()

    codes = list(SOURCE_ID.keys()) if args.all else [args.code]
    if not codes or codes[0] is None:
        ap.error("provide lesson code or --all")

    DIST.mkdir(parents=True, exist_ok=True)
    for code in codes:
        mods = select_modules(code)
        html, report = build_html(
            code, mods,
            gfx_filter=not args.no_gfx_filter,
            view_filter=not args.no_view_filter,
        )
        out = DIST / f"{code}_pack.html"
        out.write_text(html, encoding="utf-8")
        rep_path = DIST / f"{code}_pack.report.json"
        report.pop("_gfx_allow", None)
        rep_path.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")

        full = sum(c["bytes"] for c in CATALOG)
        print(f"=== {code} ===")
        print(f"  modules: {len(mods)} / {len(CATALOG)}")
        print(f"  JS in→out: {report['bytes_in']:,} → {report['bytes_out']:,} "
              f"({100*report['bytes_out']/max(1,report['bytes_in']):.0f}% of selected)")
        print(f"  HTML pack: {report['html_bytes']:,} bytes  "
              f"(vs monolith JS {full:,} ≈ {100*report['html_bytes']/full:.0f}%)")
        if report.get("gfx"):
            g = report["gfx"]
            print(f"  GFX filter: vessels {g.get('vessels_kept')}/{g.get('vessels_kept',0)+g.get('vessels_drop',0)} "
                  f"effects {g.get('effects_kept')}/{g.get('effects_kept',0)+g.get('effects_drop',0)} "
                  f"scenes {g.get('scenes_kept')} rx {g.get('rx_kept')}")
        if report.get("anon001"):
            a = report["anon001"]
            print(f"  anon001: {a.get('sections')}/{a.get('sections_total')} sections  "
                  f"{a.get('bytes',0):,} B (full {a.get('bytes_full',0):,}, saved {a.get('saved',0):,})")
        print(f"  views dropped: {report.get('views_dropped')}")
        print(f"  → {out}")


if __name__ == "__main__":
    main()
