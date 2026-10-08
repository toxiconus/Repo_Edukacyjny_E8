#!/usr/bin/env python3
"""atlas_odchudz.py — które sekcje rdzenia _anon_001 są potrzebne atlasowi (ddmin, wyrocznia: tools/atlas_sprawdz.cjs).
Wynik: engine/src/atlas/sekcje.txt (używa go `che.py atlas`). Najpierw całe podmoduły, potem pojedyncze sekcje.
Długie (kilkanaście minut) — uruchamiać w tle:  nohup python3 tools/atlas_odchudz.py > /tmp/atlas_odchudz.log 2>&1 &"""
import json, subprocess, sys, time
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
import silnik  # noqa: E402

KAT = [x["file"].split("/", 1)[1] for x in json.loads((ROOT / "sections/anon001_catalog.json").read_text(encoding="utf-8"))]
TMP = ROOT / "dist/_atlas_odch"
TMP.mkdir(parents=True, exist_ok=True)
WZ = TMP / "wzorzec.json"
N = [0]


def ok(secs):
    N[0] += 1
    f = TMP / "proba.html"
    f.write_text(silnik.atlas_html(sections=[s for s in KAT if s in secs]), encoding="utf-8")
    r = subprocess.run(["node", str(ROOT / "tools/atlas_sprawdz.cjs"), "--wzorzec", str(WZ), str(f)], capture_output=True, text=True)
    return r.returncode == 0


def ddmin(keep, items, label):
    """Usuwa z keep jak najwięcej elementów items (grupy → pojedyncze), zachowując zgodność atlasu."""
    n = 2
    items = list(items)
    while len(items) >= 1:
        size = max(1, len(items) // n)
        chunks = [items[i:i + size] for i in range(0, len(items), size)]
        removed = False
        for ch in chunks:
            trial = keep - set(ch)
            if ok(trial):
                keep = trial
                items = [x for x in items if x not in ch]
                print(f"  {label}: −{len(ch)} (zostało do sprawdzenia {len(items)}, prób {N[0]})", flush=True)
                removed = True
                break
        if not removed:
            if size == 1:
                break
            n = min(len(items), n * 2)
    return keep


def main():
    t = time.time()
    lab = TMP / "atlas_pelny.html"
    lab.write_text(silnik.atlas_html(sections=None), encoding="utf-8")
    subprocess.run(["node", str(ROOT / "tools/atlas_sprawdz.cjs"), str(lab), "--zapisz", str(WZ)], check=True)
    keep = set(KAT)
    mods = sorted({s.split("/")[0] for s in KAT})
    for m in mods:   # całe podmoduły
        trial = keep - {s for s in KAT if s.startswith(m + "/")}
        if ok(trial):
            keep = trial
            print(f"podmoduł {m}: zbędny", flush=True)
    keep = ddmin(keep, [s for s in KAT if s in keep], "sekcje")
    out = ROOT / "engine/src/atlas/sekcje.txt"
    out.write_text("# Sekcje rdzenia _anon_001 potrzebne atlasowi (tools/atlas_odchudz.py, %s; %d z %d)\n" % (time.strftime("%Y-%m-%d %H:%M"), len(keep), len(KAT))
                   + "\n".join(s for s in KAT if s in keep) + "\n", encoding="utf-8")
    print(f"→ {out}: {len(keep)}/{len(KAT)} sekcji, prób {N[0]}, {int(time.time() - t)} s")


if __name__ == "__main__":
    main()
