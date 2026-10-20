"""Przegląd lekcji: stan, weryfikacje (rejestr WERYFIKACJA.md) i najpełniejsza historyczna wersja (git).

Generuje PRZEGLAD_LEKCJI.md (raport) i przeglad_lekcji.json (dane).
Uruchom z korzenia repo:  python3 narzedzia/przeglad_lekcji.py [--od 2026-10-08]

Ocena (automatyczna, nie merytoryczna):
  A — stan „W1 FULL” w nagłówku i treść nie krótsza niż 90% najdłuższej historycznej wersji
  B — ma audyt (W1 albo ULEPSZONA) w nagłówku albo w rejestrze, ale bez pełnego W1 FULL
  C — brak audytu, albo treść krótsza niż 75% najdłuższej historycznej wersji (możliwa utrata)
  - — pozostałe (świeże, bez audytu, bez utraty)
"""
import glob, json, os, re, subprocess, sys
from collections import defaultdict
from datetime import date
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
ZRODLA = {
    "polski": ["polski/lekcje_md/*.md", "polski/podstawy/*.md", "polski/do_uzupelnienia/*.md", "polski/blok_D/lekcje/*.md"],
    "biologia": ["biologia/md/BIO.*.md", "biologia/bio/md/*.md"],
    "chemia": ["chemia/lekcje_md/*/*.md"],
    "chemia (gotowe)": ["chemia/che-modular/lessons-md/gotowe/*.md"],
    "angielski": ["angielski/lekcje_md/*.md"],
    "olimpiada": ["olimpiada/do_uzupelnienia/OLI.*.md"],
}


def front(text):
    t = text.split("\n")
    out = {}
    if not t or t[0].strip() != "---":
        return out
    for l in t[1:80]:
        if l.strip() == "---":
            break
        m = re.match(r"^(kod|stan|tytul):\s*\"?(.*?)\"?\s*$", l)
        if m:
            out[m.group(1)] = m.group(2)
    return out


def biezace():
    """(przedmiot, plik) -> dane aktualnej wersji."""
    out = {}
    for przedm, wzorce in ZRODLA.items():
        for w in wzorce:
            for f in sorted(glob.glob(str(REPO / w))):
                b = os.path.basename(f)
                if b.startswith("README") or ".99.X" in b:
                    continue
                txt = Path(f).read_text(encoding="utf-8")
                fm = front(txt)
                out[(przedm, b)] = {"sciezka": os.path.relpath(f, REPO), "kb": round(len(txt.encode()) / 1024, 1),
                                    "stan": fm.get("stan", ""), "kod": fm.get("kod", ""), "tytul": fm.get("tytul", "")}
    return out


def historia(sciezki, od):
    """Dla każdej ścieżki: najdłuższa wersja w git od daty `od` (commit, data, KB, stan)."""
    wynik = {}
    log = subprocess.run(["git", "log", f"--since={od}", "--format=%H %ad", "--date=short", "--name-only", "--", *sciezki],
                         cwd=REPO, capture_output=True, text=True).stdout.split("\n")
    commit, data, widziane = None, None, set()
    pary = []
    for l in log:
        if not l.strip():
            continue
        if re.match(r"^[0-9a-f]{40} ", l):
            commit, data = l.split()[0], l.split()[1]
            continue
        if (commit, l) not in widziane:
            widziane.add((commit, l))
            pary.append((commit, data, l))
    for commit, data, f in pary:
        r = subprocess.run(["git", "show", f"{commit}:{f}"], cwd=REPO, capture_output=True)
        if r.returncode != 0:
            continue
        kb = round(len(r.stdout) / 1024, 1)
        stan = front(r.stdout.decode("utf-8", "replace")).get("stan", "")
        cur = wynik.get(f)
        if cur is None or kb > cur["kb"]:
            wynik[f] = {"commit": commit[:7], "data": data, "kb": kb, "stan": stan}
    return wynik


def rejestr():
    """Wiersze WERYFIKACJA.md: (przedmiot, kod) -> lista (data, stan, pełny W1?)."""
    out = defaultdict(list)
    p = REPO / "WERYFIKACJA.md"
    if not p.exists():
        return out
    for l in p.read_text(encoding="utf-8").splitlines():
        if not l.startswith("| ") or l.startswith("| Przedmiot") or l.startswith("|---"):
            continue
        c = [x.strip() for x in l.strip().strip("|").split("|")]
        if len(c) < 5:
            continue
        m = re.search(r"(\d{4}-\d{2}-\d{2})", c[3])
        full = "FULL" in c[3] or "FULL" in c[4]
        out[(c[0].lower(), c[1])].append((m.group(1) if m else "", c[4][:90], full))
    return out


def main():
    od = "2026-10-08"
    if "--od" in sys.argv:
        od = sys.argv[sys.argv.index("--od") + 1]
    cur = biezace()
    hist = historia([v["sciezka"] for v in cur.values()], od)
    reg = rejestr()
    wiersze = []
    for (przedm, b), v in sorted(cur.items()):
        h = hist.get(v["sciezka"], {})
        kb_max = max(h.get("kb", 0), v["kb"])
        reg_rows = reg.get((przedm.split(" ")[0], v["kod"]), [])
        ostatni = max(reg_rows)[0] if reg_rows else ""
        full_reg = any(r[2] for r in reg_rows)
        stan = v["stan"]
        full = "W1 FULL" in stan or full_reg
        audyt = full or "W1" in stan or "ULEPSZ" in stan or bool(reg_rows)
        strata = kb_max and v["kb"] < 0.75 * kb_max
        if full and not (kb_max and v["kb"] < 0.9 * kb_max):
            ocena = "A"
        elif strata:
            ocena = "C"
        elif audyt:
            ocena = "B"
        else:
            ocena = "-"
        if strata and full:
            ocena = "C"
        wiersze.append({"przedmiot": przedm, "plik": b, "kod": v["kod"], "tytul": v["tytul"], "sciezka": v["sciezka"],
                        "stan": stan, "kb": v["kb"], "kb_max": kb_max, "max_commit": h.get("commit", ""),
                        "max_data": h.get("data", ""), "max_stan": h.get("stan", ""), "rejestr": ostatni,
                        "full": full, "ocena": ocena})
    dzis = date.today().isoformat()
    L = ["# Przegląd lekcji — najpełniejsze wersje i weryfikacje", "",
         f"Stan: {dzis}. Generowane przez `narzedzia/przeglad_lekcji.py` (od {od}). **Nie edytować ręcznie.**", "",
         "Ocena automatyczna (nie merytoryczna): **A** = pełny W1 i treść nie krótsza niż 90% najdłuższej wersji; "
         "**B** = jest audyt (W1 / ULEPSZONA), bez pełnego W1 FULL; **C** = możliwa utrata treści (aktualna wersja krótsza niż 75% najdłuższej z historii) albo W1 FULL przy utracie; "
         "**-** = brak audytu.", ""]
    licz = defaultdict(int)
    for w in wiersze:
        licz[w["ocena"]] += 1
    L += ["| Ocena | Liczba |", "|---|---|"] + [f"| {k} | {licz[k]} |" for k in ["A", "B", "C", "-"]] + [""]
    L += ["## C — do przywrócenia albo sprawdzenia (możliwa utrata treści)", "",
          "C nie zawsze znaczy stratę: część to świadome przebudowy, w których poprzednia wersja została zachowana w git (commit w tabeli) i w `chemia/plany/`. Każdy wiersz trzeba sprawdzić ręcznie.", "",
          "| Przedmiot | Plik | KB teraz | KB max | Najdłuższa wersja (commit, data) | Stan w niej |", "|---|---|---|---|---|---|"]
    for w in wiersze:
        if w["ocena"] == "C":
            L.append(f"| {w['przedmiot']} | {w['plik'][:-3]} | {w['kb']} | {w['kb_max']} | {w['max_commit']} {w['max_data']} | {w['max_stan'][:50]} |")
    L += ["", "## A — najpełniejsze (pewne)", "", "| Przedmiot | Plik | KB | Stan | Ostatni wpis rejestru |", "|---|---|---|---|---|"]
    for w in wiersze:
        if w["ocena"] == "A":
            L.append(f"| {w['przedmiot']} | {w['plik'][:-3]} | {w['kb']} | {w['stan'][:60]} | {w['rejestr']} |")
    L += ["", "## B — z audytem, bez pełnego W1 FULL", "", "| Przedmiot | Plik | KB | Stan |", "|---|---|---|---|"]
    for w in wiersze:
        if w["ocena"] == "B":
            L.append(f"| {w['przedmiot']} | {w['plik'][:-3]} | {w['kb']} | {w['stan'][:70]} |")
    (REPO / "PRZEGLAD_LEKCJI.md").write_text("\n".join(L) + "\n", encoding="utf-8")
    (REPO / "przeglad_lekcji.json").write_text(json.dumps(wiersze, ensure_ascii=False, indent=1), encoding="utf-8")
    print("A", licz["A"], "B", licz["B"], "C", licz["C"], "-", licz["-"], "| razem", len(wiersze))


if __name__ == "__main__":
    main()
