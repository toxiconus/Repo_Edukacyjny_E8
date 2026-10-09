#!/usr/bin/env python3
"""
Porównanie projektu MD lekcji z rejestrem silnika.
Czyta lessons-md/<KOD>/LEKCJA.md (frontmatter + bloki ```table / ```gfx)
oraz engine/registry + manifests/.

Usage:
  python3 tools/md_parity.py N01
  python3 tools/md_parity.py --all
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MD_ROOT = ROOT / "lessons-md"
REG = ROOT / "engine" / "registry"
MANIFESTS = ROOT / "manifests"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end < 0:
        return {}, text
    raw = text[3:end].strip()
    body = text[end + 4 :]
    data: dict = {}
    current_key = None
    for line in raw.splitlines():
        if re.match(r"^\s*-\s+", line) and current_key:
            val = re.sub(r"^\s*-\s+", "", line).strip()
            data.setdefault(current_key, [])
            if isinstance(data[current_key], list):
                data[current_key].append(val)
            continue
        m = re.match(r"^(\w+)\s*:\s*(.*)$", line)
        if not m:
            continue
        k, v = m.group(1), m.group(2).strip()
        current_key = k
        if v.startswith("[") and v.endswith("]"):
            inner = v[1:-1].strip()
            data[k] = [x.strip() for x in inner.split(",") if x.strip()] if inner else []
        elif v == "" or v == "|":
            data[k] = []
        else:
            data[k] = v
    return data, body


def parse_blocks(body: str, kind: str) -> list[dict]:
    """Extract fenced blocks ```kind ... ``` as crude key: value dicts."""
    blocks = []
    pattern = re.compile(rf"```{kind}\s*\n(.*?)```", re.S)
    for m in pattern.finditer(body):
        block: dict = {"_raw": m.group(1)}
        for line in m.group(1).splitlines():
            if ":" in line:
                k, _, v = line.partition(":")
                k, v = k.strip(), v.strip()
                if v.startswith("[") and v.endswith("]"):
                    inner = v[1:-1]
                    block[k] = [x.strip().strip("'\"") for x in inner.split(",") if x.strip()]
                else:
                    block[k] = v.strip('"')
        blocks.append(block)
    return blocks


def load_json(path: Path):
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def parity(code: str) -> dict:
    md_path = MD_ROOT / code / "LEKCJA.md"
    report = {"code": code, "md": str(md_path), "ok": True, "checks": []}

    def add(name, ok, detail=""):
        report["checks"].append({"name": name, "ok": ok, "detail": detail})
        if not ok:
            report["ok"] = False

    if not md_path.exists():
        add("md_exists", False, f"brak {md_path}")
        return report
    add("md_exists", True)

    text = md_path.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(text)
    tables_md = parse_blocks(body, "table")
    gfx_md = parse_blocks(body, "gfx")

    lessons = load_json(REG / "lessons.json").get("lessons") or {}
    tables_reg = load_json(REG / "tables" / "index.json").get("tables") or {}
    scenes_reg = load_json(REG / "assets" / "scenes.json").get("scenes") or {}
    vessels_reg = load_json(REG / "assets" / "vessels.json")
    effects_reg = load_json(REG / "assets" / "effects.json")
    vessel_ids = set((vessels_reg.get("items") or {}).keys())
    for g in (vessels_reg.get("groups") or {}).values():
        vessel_ids.update(g.get("items") or [])
    effect_ids = set((effects_reg.get("items") or {}).keys())
    for g in (effects_reg.get("groups") or {}).values():
        effect_ids.update(g.get("items") or [])

    reg_lesson = lessons.get(code) or {}
    add("in_registry", bool(reg_lesson), "wpis w lessons.json" if reg_lesson else "brak w lessons.json")

    # domains
    md_dom = set(fm.get("domains") or [])
    reg_dom = set(reg_lesson.get("domains") or [])
    if md_dom or reg_dom:
        add(
            "domains_match",
            md_dom == reg_dom,
            f"md={sorted(md_dom)} reg={sorted(reg_dom)} only_md={sorted(md_dom-reg_dom)} only_reg={sorted(reg_dom-md_dom)}",
        )

    # visuals
    md_vis = set(fm.get("visuals") or [])
    reg_vis = set(reg_lesson.get("visuals") or [])
    # also from gfx blocks
    for g in gfx_md:
        if g.get("view"):
            md_vis.add(g["view"])
    if md_vis or reg_vis:
        add(
            "visuals_subset",
            md_vis <= reg_vis or not reg_vis,
            f"w MD brak w reg: {sorted(md_vis - reg_vis)}; w reg nie w MD: {sorted(reg_vis - md_vis)[:12]}",
        )

    # tables
    for tb in tables_md:
        tid = tb.get("id")
        if not tid:
            continue
        st = tb.get("status", "")
        in_reg = tid in tables_reg
        add(f"table:{tid}", in_reg or st == "missing", f"status={st} in_registry={in_reg}")

    fm_tables = set(fm.get("tables") or [])
    for tid in fm_tables:
        add(f"fm_table:{tid}", tid in tables_reg, "jest w tables/index.json" if tid in tables_reg else "BRAK w tables/index.json")

    # scenes / vessels / effects from gfx blocks
    for g in gfx_md:
        sc = g.get("scene")
        if sc:
            add(f"scene:{sc}", sc in scenes_reg, "ok" if sc in scenes_reg else "brak w scenes.json")
        for vid in g.get("vessels") or []:
            add(f"vessel:{vid}", vid in vessel_ids, "ok" if vid in vessel_ids else "brak w vessels")
        for eid in g.get("effects") or []:
            add(f"effect:{eid}", eid in effect_ids, "ok" if eid in effect_ids else "brak w effects")

    # manifest scan if present
    man = load_json(MANIFESTS / f"{code}.json")
    scanned = man.get("scanned") or man
    if scanned.get("reactions"):
        add("manifest_rx", True, f"{len(scanned['reactions'])} data-rx w manifeście")
    if scanned.get("oxides"):
        add("manifest_ox", True, f"{len(scanned['oxides'])} data-ox w manifeście")

    report["frontmatter"] = fm
    report["tables_blocks"] = len(tables_md)
    report["gfx_blocks"] = len(gfx_md)
    report["summary"] = {
        "passed": sum(1 for c in report["checks"] if c["ok"]),
        "failed": sum(1 for c in report["checks"] if not c["ok"]),
        "total": len(report["checks"]),
    }
    return report


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("code", nargs="?")
    ap.add_argument("--all", action="store_true")
    args = ap.parse_args()
    codes = []
    if args.all:
        codes = sorted(p.name for p in MD_ROOT.iterdir() if p.is_dir() and not p.name.startswith("_"))
    elif args.code:
        codes = [args.code]
    else:
        ap.error("code or --all")

    for code in codes:
        r = parity(code)
        s = r["summary"]
        status = "OK" if r["ok"] else "LUKI"
        print(f"=== {code} [{status}] {s['passed']}/{s['total']} ===")
        for c in r["checks"]:
            mark = "✓" if c["ok"] else "✗"
            print(f"  {mark} {c['name']}: {c['detail']}")
        out = MD_ROOT / code / "PARITY_REPORT.json"
        if out.parent.exists():
            # strip nothing — all serializable
            out.write_text(json.dumps(r, indent=2, ensure_ascii=False), encoding="utf-8")
            print(f"  → {out}")


if __name__ == "__main__":
    main()
