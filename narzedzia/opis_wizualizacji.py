"""Zasada stała (wszystkie przedmioty): każda wizualizacja/obraz w md lekcji ma opis słowny.

Składnia md:  zaraz pod linią @model / @zlewka / @viz / obrazem (![…](…), <img>, <svg>) linia
    @opis Co dokładnie widać (elementy, kolory, liczby, co się zmienia) i jaki wniosek.
W HTML opis trafia jako ukryty komentarz  <!-- OPIS: … -->  (czytniki, eksport do Perplexity/LLM, druk).

Egzekwowanie (w md2html chemii i biologii):
- nowa lekcja → 0 braków, inaczej build kończy się błędem;
- lekcje sprzed zasady mają „dług” w narzedzia/opis_dlug.json — liczba braków może tylko maleć.
Sprawdzenie bez budowania:  python3 narzedzia/opis_wizualizacji.py [plik.md ...]   (bez argumentów: wszystkie lekcje)
"""
import json
import os
import re
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DLUG = os.path.join(REPO, "narzedzia", "opis_dlug.json")
KATALOGI = ["chemia/che-modular/lessons-md/gotowe", "biologia/bio/md"]  # lekcje budowane do HTML
WIZ = re.compile(r"^(@model |@zlewka |@viz |!\[|<img\b|<svg\b)")


def braki(text):
    """Lista (nr_linii, linia) wizualizacji bez @opis w następnej niepustej linii."""
    L = text.split("\n")
    out = []
    for i, ln in enumerate(L):
        if WIZ.match(ln.strip()):
            j = i + 1
            while j < len(L) and not L[j].strip():
                j += 1
            nxt = L[j].strip() if j < len(L) else ""
            if not nxt.startswith("@opis "):
                out.append((i + 1, ln.strip()[:70]))
    return out


def komentarz(opis):
    return "<!-- OPIS: %s -->" % opis.strip().replace("--", "–")


def _rel(path):
    return os.path.relpath(os.path.abspath(path), REPO).replace(os.sep, "/")


def egzekwuj(sciezki, wyjdz=True):
    """Sprawdza pliki md; błąd, gdy braków jest więcej niż dług (nowa lekcja: dług 0)."""
    try:
        dlug = json.load(open(DLUG, encoding="utf-8"))
    except FileNotFoundError:
        dlug = {}
    zle, suma = [], 0
    for p in sciezki:
        b = braki(open(p, encoding="utf-8").read())
        suma += len(b)
        dozw = dlug.get(_rel(p), 0)
        if len(b) > dozw:
            zle.append((p, b, dozw))
        elif len(b) < dozw:  # poprawa — zmniejsz dług (zapadka)
            dlug[_rel(p)] = len(b)
            if not b:
                dlug.pop(_rel(p))
            json.dump(dlug, open(DLUG, "w", encoding="utf-8"), ensure_ascii=False, indent=1, sort_keys=True)
    for p, b, dozw in zle:
        print("BŁĄD @opis: %s — %d wizualizacji bez opisu (dozwolone %d):" % (_rel(p), len(b), dozw))
        for nr, ln in b[:8]:
            print("   linia %d: %s" % (nr, ln))
    if suma and not zle:
        print("opis: %d starych wizualizacji bez @opis (dług w narzedzia/opis_dlug.json)" % suma)
    if zle and wyjdz:
        print("Dopisz linię „@opis …” pod każdą wizualizacją (zasada w CLAUDE.md).")
        sys.exit(1)
    return not zle


def wszystkie():
    return [os.path.join(REPO, d, f) for d in KATALOGI for f in sorted(os.listdir(os.path.join(REPO, d))) if f.endswith(".md")]


if __name__ == "__main__":
    if sys.argv[1:2] == ["--zapisz-dlug"]:  # tylko jednorazowo przy wprowadzaniu zasady
        d = {_rel(p): n for p in wszystkie() if (n := len(braki(open(p, encoding="utf-8").read())))}
        json.dump(d, open(DLUG, "w", encoding="utf-8"), ensure_ascii=False, indent=1, sort_keys=True)
        print("dług zapisany:", sum(d.values()), "w", len(d), "plikach")
    else:
        egzekwuj(sys.argv[1:] or wszystkie())
