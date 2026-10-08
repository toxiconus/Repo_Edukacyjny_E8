#!/usr/bin/env python3
"""
Unified engine registry resolver.
Reads engine/registry/* and expands lesson → domains → modules, vessels, effects, scenes, tables.
Used by pack_lesson.py; same contract can drive a full lab build later.
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
REG = ROOT / "engine" / "registry"


def _load(name: str) -> dict:
    path = REG / name
    if not path.exists():
        # nested
        path = REG / name
    return json.loads(path.read_text(encoding="utf-8"))


def load_registry() -> dict[str, Any]:
    return {
        "subjects": _load("subjects.json"),
        "domains": _load("domains.json"),
        "lessons": _load("lessons.json"),
        "vessels": _load("assets/vessels.json"),
        "effects": _load("assets/effects.json"),
        "scenes": _load("assets/scenes.json"),
        "tables": _load("tables/index.json"),
    }


def expand_group_items(groups_doc: dict, group_ids: list[str]) -> set[str]:
    """Resolve group ids → set of item ids. Unknown group ignored."""
    groups = groups_doc.get("groups") or {}
    out: set[str] = set()
    for gid in group_ids or []:
        g = groups.get(gid)
        if not g:
            continue
        for item in g.get("items") or []:
            out.add(item)
    # always include core items
    for iid, meta in (groups_doc.get("items") or {}).items():
        if isinstance(meta, dict) and meta.get("core"):
            out.add(iid)
    return out


def resolve_lesson(code: str, reg: dict | None = None) -> dict[str, Any]:
    """
    Full resolution for one lesson code.
    Returns dict with: lesson, domains, modules, vessel_ids, effect_ids,
    scene_ids, table_ids, visuals, subject, anon_tags.
    """
    reg = reg or load_registry()
    lessons = (reg["lessons"].get("lessons") or {})
    lesson = lessons.get(code)
    if not lesson:
        raise KeyError(f"Unknown lesson code: {code}")

    domains_doc = reg["domains"].get("domains") or {}
    domain_ids = list(lesson.get("domains") or [])

    modules: set[str] = set()
    anon_tags: set[str] = set()
    table_ids: set[str] = set()
    scene_ids: set[str] = set(lesson.get("scenes") or [])
    visuals: list[str] = list(lesson.get("visuals") or [])
    views_prefix: list[str] = []

    # Map domain module tags → anon001 section tags + catalog module name fragments
    DOMAIN_TO_ANON = {
        "oxides": {"data-oxides", "data-reactions"},
        "hydroxides": {"data-hydroxides", "data-salts"},
        "acids": {"data-acids", "data-reactions"},
        "salts": {"data-salts", "data-acids"},
        "stoich": {"stoich"},
        "atom": {"data-elements", "atom"},
        "reactions": {"data-reactions"},
        "electrostatics": {"phys"},
        "colors": set(),
        "lab-chem": set(),
    }

    for did in domain_ids:
        d = domains_doc.get(did) or {}
        for m in d.get("modules") or []:
            modules.add(m)
        for t in d.get("tables") or []:
            table_ids.add(t)
        gfx = d.get("gfx") or {}
        for s in gfx.get("scenes") or []:
            scene_ids.add(s)
        for p in d.get("viewsPrefix") or []:
            views_prefix.append(p)
        for v in d.get("views") or []:
            if v not in visuals:
                visuals.append(v)
        anon_tags |= DOMAIN_TO_ANON.get(did, set())

    for t in lesson.get("tables") or []:
        table_ids.add(t)

    vessel_ids = expand_group_items(reg["vessels"], lesson.get("vesselGroups") or [])
    effect_ids = expand_group_items(reg["effects"], lesson.get("effectGroups") or [])

    # Scenes pull required vessels/effects
    scenes_doc = reg["scenes"].get("scenes") or {}
    for sid in list(scene_ids):
        sc = scenes_doc.get(sid) or {}
        for v in sc.get("vessels") or []:
            vessel_ids.add(v)
        for e in sc.get("effects") or []:
            effect_ids.add(e)

    # Always core stage
    vessel_ids |= {"stage", "anchor"}
    effect_ids |= {"label", "scale"}

    return {
        "code": code,
        "lesson": lesson,
        "subject": lesson.get("subject"),
        "source": lesson.get("source"),
        "domains": domain_ids,
        "modules": sorted(modules),
        "anon_tags": sorted(anon_tags),
        "vessel_ids": sorted(vessel_ids),
        "effect_ids": sorted(effect_ids),
        "scene_ids": sorted(scene_ids),
        "table_ids": sorted(table_ids),
        "visuals": visuals,
        "views_prefix": views_prefix,
        "title": lesson.get("title"),
    }


def domain_module_filter(resolved: dict, catalog_entry: dict) -> bool:
    """
    Whether a catalog.js module id should be kept for this resolved lesson.
    Heuristic on id/tags vs resolved.modules and subject.
    """
    sid = catalog_entry.get("id") or ""
    tags = set(catalog_entry.get("tags") or [])
    mods = set(resolved.get("modules") or [])
    # direct id match
    if sid in mods:
        return True
    # tag overlap with domain module names that look like tags
    if tags & {"oxides", "hydroxides", "acids", "salts", "stoich", "fiz", "colors", "gfx", "core", "lessons"}:
        # map
        want = set()
        for m in mods:
            if "oxide" in m:
                want.add("oxides")
            if "hydrox" in m:
                want.add("hydroxides")
            if "ionic" in m or "salt" in m:
                want.add("salts")
            if "stoich" in m:
                want.add("stoich")
            if "fiz" in m or "elektro" in m:
                want.add("fiz")
            if "color" in m:
                want.add("colors")
            if "lab" in m or "visual" in m:
                want.add("gfx")
        if tags & want:
            return True
        if "core" in tags or "lessons" in tags or "gfx" in tags:
            return True
    return False


if __name__ == "__main__":
    import pprint
    import sys

    code = sys.argv[1] if len(sys.argv) > 1 else "N01"
    r = resolve_lesson(code)
    pprint.pp({k: v for k, v in r.items() if k != "lesson"})
