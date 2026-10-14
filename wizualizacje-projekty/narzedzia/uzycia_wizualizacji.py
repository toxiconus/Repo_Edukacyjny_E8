"""Mapa użyć wizualizacji: które grafiki są w których lekcjach i ile razy (0, 1, wiele).

Generuje:
  wizualizacje-projekty/baza-mala/UZYCIA_WIZUALIZACJI.md   (raport dla człowieka)
  wizualizacje-projekty/baza-mala/uzycia.json              (dla narzędzi)

Podmiana na nowszą wersję (domyślnie podgląd, nic nie zapisuje):
  python3 wizualizacje-projekty/narzedzia/uzycia_wizualizacji.py --podmien STARE NOWE
  python3 wizualizacje-projekty/narzedzia/uzycia_wizualizacji.py --podmien STARE NOWE --zapisz
Po podmianie: przebuduj lekcje (narzedzia/zbuduj_wszystkie.py) i uruchom ten skrypt ponownie.

Zasada: lekcja odwołuje się do wizualizacji tylko przez identyfikator (@model / @viz / @klocek / @zlewka),
więc nowszą wersję podpina się pod ten sam identyfikator albo podmienia identyfikator w lekcjach.
"""
import glob, json, os, re, sys
from collections import defaultdict
from datetime import date
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
CHE = REPO / "chemia" / "che-modular"
BAZA = REPO / "wizualizacje-projekty" / "baza-mala"

# te same źródła co narzedzia/zbuduj_wszystkie.py (+ gotowe lekcje chemii z modelami silnika)
ZRODLA = {
    "polski": ["polski/lekcje_md/*.md", "polski/podstawy/*.md", "polski/do_uzupelnienia/*.md", "polski/blok_D/lekcje/*.md"],
    "biologia": ["biologia/md/BIO.*.md", "biologia/bio/md/*.md"],
    "chemia": ["chemia/lekcje_md/*/*.md", "chemia/che-modular/lessons-md/gotowe/*.md"],
    "angielski": ["angielski/lekcje_md/*.md"],
    "olimpiada": ["olimpiada/do_uzupelnienia/OLI.*.md"],
}


def lekcje():
    """Unikalne lekcje (po nazwie pliku; późniejsze źródło nadpisuje, jak w buildzie)."""
    out = {}
    for przedm, wzorce in ZRODLA.items():
        for w in wzorce:
            for f in sorted(glob.glob(str(REPO / w))):
                b = os.path.basename(f)
                if b.startswith("README") or ".99.X" in b:
                    continue
                out[b[:-3]] = (przedm, Path(f))
    return out


def biblioteki():
    """id -> (biblioteka, tytuł) dla wszystkich wizualizacji, które istnieją w bazie."""
    lib = {}
    for row in (CHE / "KATALOG_MODELI.md").read_text(encoding="utf-8").splitlines():
        m = re.match(r"\| `([\w-]+)` \| (.*?) \|", row)
        if m:
            lib.setdefault(m.group(1), ("CHE model", m.group(2)))
    idx = json.loads((CHE / "engine/src/gfx/index.json").read_text(encoding="utf-8"))
    for v in idx.values():
        if isinstance(v, list):
            for w in v:
                lib.setdefault(w["id"], ("CHE gfx/" + w.get("kind", "?"), w.get("subject", "")))
    for f in (CHE / "engine/src/klocki").glob("*.js"):
        for n in re.findall(r"KLOCKI\.def\('([\w-]+)'", f.read_text(encoding="utf-8")):
            lib.setdefault(n, ("klocek", f.name))
    for f in (REPO / "biologia/bio/szablon/wizualizacje").glob("*.js"):
        for n in re.findall(r"BIO\.define\('([\w-]+)'", f.read_text(encoding="utf-8")):
            lib.setdefault(n, ("BIO", f.stem))
    for n in re.findall(r"POL\.define\('([\w-]+)'", (REPO / "polski/szablon/pol-viz.js").read_text(encoding="utf-8")):
        lib.setdefault(n, ("POL", "pol-viz.js"))
    # pracownie i zlewki silnika lite (klucze @zlewka) oraz tabela GFX z KATALOG.md
    dane = json.loads((CHE / "engine/src/lite/lab-dane.json").read_text(encoding="utf-8"))
    for n in dane.get("pracownie", {}):
        lib.setdefault(n, ("CHE pracownia (lite)", "lab-dane.json"))
    for n in dane.get("specs", {}):
        lib.setdefault(n, ("CHE zlewka (lite)", "lab-dane.json"))
    for row in (CHE / "engine/src/gfx/KATALOG.md").read_text(encoding="utf-8").splitlines():
        m = re.match(r"\| `([\w-]+)` \| ", row)
        if m:
            lib.setdefault(m.group(1), ("CHE gfx (KATALOG)", ""))
    return lib


DYREKTYWY = [
    (re.compile(r"^@model\s+([\w-]+)"), "model"),
    (re.compile(r"^@viz\s+([\w-]+)"), "viz"),
    (re.compile(r"^@klocek\s+([\w-]+)"), "klocek"),
    (re.compile(r"^@zlewka\s+([\w-]+)\s+([\w-]+)"), "zlewka"),
]


def uzycia_w_lekcji(tekst):
    """Lista (id, rodzaj) wystąpień w jednej lekcji — każde wystąpienie osobno."""
    out = []
    for ln in tekst.splitlines():
        s = ln.strip()
        for rx, rodz in DYREKTYWY:
            m = rx.match(s)
            if m:
                for g in m.groups():
                    out.append((g, rodz))
        m = re.search(r"\$gfx\s+scene=([\w-]+)", s)
        if m:
            out.append((m.group(1), "gfx-scena"))
    return out


def zbierz():
    lib = biblioteki()
    L = lekcje()
    wyniki = {}          # lekcja -> Counter(id -> n)
    for lek, (przedm, f) in sorted(L.items()):
        tekst = f.read_text(encoding="utf-8")
        cnt = defaultdict(int)
        for idv, _ in uzycia_w_lekcji(tekst):
            cnt[idv] += 1
        wyniki[lek] = (przedm, dict(cnt))
    return lib, wyniki


def raport(lib, wyniki):
    uzyc = defaultdict(lambda: defaultdict(int))   # id -> lekcja -> n
    for lek, (przedm, cnt) in wyniki.items():
        for idv, n in cnt.items():
            uzyc[idv][lek] += n
    dzis = date.today().isoformat()
    tot = {i: sum(v.values()) for i, v in uzyc.items()}
    zero = [i for i in lib if tot.get(i, 0) == 0]
    jeden = [i for i in lib if tot.get(i, 0) == 1]
    wiele = [i for i in lib if tot.get(i, 0) >= 2]
    nie_w_bazie = sorted(i for i in uzyc if i not in lib)

    L = [
        "# Użycia wizualizacji — która grafika w której lekcji",
        "",
        f"Stan: {dzis}. Generowane przez `wizualizacje-projekty/narzedzia/uzycia_wizualizacji.py`. **Nie edytować ręcznie.**",
        "",
        "Liczenie: każde wystąpienie dyrektywy `@model`, `@viz`, `@klocek`, `@zlewka` (druga część = klucz) oraz `$gfx scene=` w źródłach lekcji. Lekcje z różnych folderów liczone osobno.",
        "",
        "## 1. Podsumowanie",
        "",
        "| Liczba wizualizacji w bazie | Użyte 0 razy | Użyte 1 raz | Użyte 2 lub więcej razy |",
        "|---|---|---|---|",
        f"| {len(lib)} | {len(zero)} | {len(jeden)} | {len(wiele)} |",
        "",
        f"Identyfikatory w lekcjach, których nie ma w bazie (do sprawdzenia, prawdopodobnie literówki lub klucze pracowni): **{len(nie_w_bazie)}**" + (": " + ", ".join(f"`{i}`" for i in nie_w_bazie) if nie_w_bazie else "."),
        "",
        "## 2. Najczęściej używane (kandydaci do ulepszenia w pierwszej kolejności)",
        "",
        "| # | Identyfikator | Biblioteka | Użycia | Lekcje (liczba użyć) |",
        "|---|---|---|---|---|",
    ]
    top = sorted(lib, key=lambda i: (-tot.get(i, 0), i))
    k = 0
    for i in top:
        if tot.get(i, 0) < 2:
            break
        k += 1
        lek = ", ".join(f"{l} ×{n}" for l, n in sorted(uzyc[i].items(), key=lambda x: (-x[1], x[0])))
        L.append(f"| {k} | `{i}` | {lib[i][0]} | **{tot[i]}** | {lek} |")
    L += ["", "## 3. Użyte jeden raz", ""]
    for i in sorted(jeden):
        lek = ", ".join(sorted(uzyc[i]))
        L.append(f"- `{i}` ({lib[i][0]}) → {lek}")
    L += ["", "## 4. Nieużywane (0 użyć) — do osadzenia albo do usunięcia z bazy", ""]
    for i in sorted(zero):
        L.append(f"- `{i}` ({lib[i][0]}: {lib[i][1]})")
    L += ["", "## 5. Pełna tabela — wszystkie wizualizacje", "",
          "| Identyfikator | Biblioteka | Użycia | Lekcje |", "|---|---|---|---|"]
    for i in sorted(lib):
        lek = ", ".join(f"{l} ×{n}" for l, n in sorted(uzyc.get(i, {}).items())) or "—"
        L.append(f"| `{i}` | {lib[i][0]} | {tot.get(i, 0)} | {lek} |")
    L += ["", "## 6. Lekcje — jakie wizualizacje zawierają", "", "| Przedmiot | Lekcja | Wizualizacje (liczba użyć) |", "|---|---|---|"]
    for lek in sorted(wyniki, key=lambda l: (wyniki[l][0], l)):
        przedm, cnt = wyniki[lek]
        opis = ", ".join(f"`{i}` ×{n}" for i, n in sorted(cnt.items())) or "—"
        L.append(f"| {przedm} | {lek} | {opis} |")
    L += ["", "## 7. Jak podmienić wizualizację na nowszą", "",
          "1. Nowa wersja dostaje **ten sam identyfikator**, jeśli ma zastąpić starą: wtedy wystarczy podmienić plik biblioteki, lekcje się nie zmieniają.",
          "2. Jeśli ma mieć nową nazwę: podgląd `python3 wizualizacje-projekty/narzedzia/uzycia_wizualizacji.py --podmien STARE NOWE`, potem to samo z `--zapisz`.",
          "3. Przebuduj lekcje: `python3 narzedzia/zbuduj_wszystkie.py` (chemia z gotowe: `chemia/che-modular/tools/lite.py`).",
          "4. Uruchom ten skrypt ponownie i sprawdź, że stara nazwa ma 0 użyć.",
          ""]
    return "\n".join(L), {"biblioteka": {i: lib[i][0] for i in lib}, "uzycia": {i: dict(uzyc.get(i, {})) for i in lib}, "zero": zero, "jeden": jeden, "wiele": wiele, "nie_w_bazie": nie_w_bazie}


def podmien(stare, nowe, zapisz):
    """Zamienia identyfikator w dyrektywach (@model/@viz/@klocek/@zlewka) we wszystkich lekcjach."""
    wzor = re.compile(r"^(@(?:model|viz|klocek|zlewka)\s+)" + re.escape(stare) + r"(?![\w-])", re.M)
    razem = 0
    for lek, (przedm, f) in sorted(lekcje().items()):
        t = f.read_text(encoding="utf-8")
        t2, n = wzor.subn(lambda m: m.group(1) + nowe, t)
        if n:
            razem += n
            print(f"{przedm}/{lek}: {n}")
            if zapisz:
                f.write_text(t2, encoding="utf-8")
    print(("ZAPISANO" if zapisz else "PODGLĄD (nic nie zapisano)") + f": {razem} zamian {stare} → {nowe}")


def main():
    args = sys.argv[1:]
    if args[:1] == ["--podmien"]:
        if len(args) < 3:
            sys.exit("użycie: --podmien STARE NOWE [--zapisz]")
        podmien(args[1], args[2], "--zapisz" in args)
        return
    lib, wyniki = zbierz()
    md, js = raport(lib, wyniki)
    BAZA.mkdir(parents=True, exist_ok=True)
    (BAZA / "UZYCIA_WIZUALIZACJI.md").write_text(md, encoding="utf-8")
    (BAZA / "uzycia.json").write_text(json.dumps(js, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"biblioteka: {len(lib)} · 0 użyć: {len(js['zero'])} · 1: {len(js['jeden'])} · 2+: {len(js['wiele'])} · nieznane: {len(js['nie_w_bazie'])}")


if __name__ == "__main__":
    main()
