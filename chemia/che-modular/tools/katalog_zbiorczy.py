#!/usr/bin/env python3
"""katalog_zbiorczy.py — jeden katalog wizualizacji: modele + elementy gfx, z użyciem liczonym z md.

Wynik: KATALOG_WIZUALIZACJI.md (generowany; nie edytować).
Wejście: KATALOG_MODELI.md (id i tytuły modeli), lessons-md/**/*.md (@model → gdzie użyty),
         engine/src/gfx/index.json (elementy gfx), engine/registry/katalog_oceny.json (status, uwagi: edytować TU).
  python3 tools/katalog_zbiorczy.py
"""
import json, re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def uzycie() -> dict[str, set[str]]:
    u = defaultdict(set)
    for p in (ROOT / "lessons-md").rglob("*.md"):
        kod = p.stem.split("_")[0]
        for m in re.finditer(r"^@model\s+(\S+)", p.read_text(encoding="utf-8", errors="ignore"), re.M):
            u[m.group(1)].add(kod)
    return u


def modele() -> list[tuple[str, str]]:
    out, seen = [], set()
    for l in (ROOT / "KATALOG_MODELI.md").read_text(encoding="utf-8").splitlines():
        m = re.match(r"\| `([\w:.-]+)` \| ([^|]*)\|", l)
        if m and m.group(1) not in seen:
            seen.add(m.group(1)); out.append((m.group(1), m.group(2).strip()))
    return out


def main() -> None:
    u = uzycie()
    oc = json.loads((ROOT / "engine/registry/katalog_oceny.json").read_text(encoding="utf-8"))
    mod, ocm = modele(), oc["modele"]
    ids = {i for i, _ in mod}
    dod = [(i, "") for i in sorted(u) if i not in ids]  # użyte w md, brak w KATALOG_MODELI
    wszystkie = mod + dod
    o = ["# KATALOG WIZUALIZACJI — wygenerowany (`python3 tools/katalog_zbiorczy.py`), nie edytować", "",
         "Jedno źródło prawdy: modele (widoki) i elementy gfx. Użycie jest liczone z `@model` w `lessons-md/` (nie z ręcznej kolumny). "
         "Statusy i uwagi edytuje się w `engine/registry/katalog_oceny.json`. Stare wpisy o statusie „zastąpiony” wyrzucamy po podmianie w lekcjach.", "",
         "## Statusy", ""]
    o += [f"- **{k}** — {v}" for k, v in oc["_statusy"].items()] + [""]
    n_uzyte = sum(1 for i, _ in wszystkie if u.get(i))
    o += [f"## Modele ({len(wszystkie)}; użyte w lekcjach: {n_uzyte})", "", "| id | tytuł | użyte w | status | uwaga |", "|---|---|---|---|---|"]
    for i, t in wszystkie:
        w = ", ".join(sorted(u.get(i, [])))
        a = ocm.get(i, {})
        st = a.get("status", "" if not w else "używany")
        uw = a.get("uwaga", "")
        if a.get("lekcja"): uw = (uw + "; " if uw else "") + "lekcja: " + a["lekcja"]
        if a.get("zamiennik"): uw = (uw + "; " if uw else "") + "zamiennik: `" + a["zamiennik"] + "`"
        o.append(f"| `{i}` | {t} | {w} | {st} | {uw} |")
    brak = [i for i, _ in wszystkie if not u.get(i) and i not in ocm]
    o += ["", f"Nieużyte bez oceny: {', '.join(brak) if brak else 'brak'}", ""]
    o += ["## Lekcje gotowe bez wizualizacji — co wstawić", "", "| lekcja | propozycja z istniejących |", "|---|---|"]
    o += [f"| {k} | {v} |" for k, v in oc["luki"].items()] + [""]
    idx = json.loads((ROOT / "engine/src/gfx/index.json").read_text(encoding="utf-8"))
    agg = defaultdict(lambda: [0, 0])
    for items in idx.values():
        for it in items:
            a = agg[(it["subject"], it["kind"])]; a[0] += 1; a[1] += it["bytes"]
    o += ["## Elementy gfx (szczegóły: `engine/src/gfx/KATALOG.md`)", "",
          "Efekty, naczynia i reakcje to warstwy wspólne silnika (panel efektów i sceny je podpinają), dlatego nie oceniamy ich jako „nieużytych” w lekcjach.", "",
          "| przedmiot / rodzaj | liczba | KB |", "|---|---|---|"]
    o += [f"| {s} / {k} | {n} | {b/1024:.1f} |" for (s, k), (n, b) in sorted(agg.items())] + [""]
    (ROOT / "KATALOG_WIZUALIZACJI.md").write_text("\n".join(o), encoding="utf-8")
    print("→ KATALOG_WIZUALIZACJI.md:", len(wszystkie), "modeli,", n_uzyte, "użytych; bez oceny:", len(brak))


if __name__ == "__main__":
    main()
