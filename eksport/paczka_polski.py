#!/usr/bin/env python3
"""Paczka ZIP dla Perplexity: język polski — części mowy, składnia, interpunkcja, środki, słownictwo.

python3 eksport/paczka_polski.py  →  eksport/out/PL_JEZYK_DO_ZROBIENIA_<data>.zip
Zawiera: PROMPT, DO_ZROBIENIA (kolejność priorytetu, stan z katalogu), kanon, wzory, pliki do pracy.
"""
import datetime, os, sys, zipfile

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(REPO, "narzedzia"))
import spis_polski as SP  # noqa: E402

DZIS = datetime.date.today().isoformat()
OUT = os.path.join(REPO, "eksport", "out", f"PL_JEZYK_DO_ZROBIENIA_{DZIS}.zip")
PROMPT = os.path.join(REPO, "polski", "plany", "PROMPT_PERPLEXITY_JEZYK.md")
ZRODLO_L001_L006 = os.path.join(REPO, "polski", "POLSKI_PODSTAWA_PLUS_v7.11 (3).md")  # najnowsza wersja po W1

# (etap, opis, kody, rodzaj): rodzaj = rozwin | nowa | weryfikuj | przenies | wzor
ETAPY = [
    ("1", "Składnia — rozwinąć zarysy do pełnych lekcji", "G12-G17", "rozwin"),
    ("2", "Interpunkcja i pisownia (zasady 2026) — nowe lekcje; P03 przecinek najpierw", "P03 P01 P02 P04", "nowa"),
    ("3", "Środki stylistyczne — rozwinąć zarysy", "S01-S06", "rozwin"),
    ("4", "Weryfikacja części mowy (wypełnione, przed W1)", "G01-G11", "weryfikuj"),
    ("5", "Gramatyka — nowe: wykresy zdań, pułapki fleksyjne, fonetyka", "G18-G20", "nowa"),
    ("6", "Słownictwo i kultura języka — nowe", "J01-J06", "nowa"),
    ("7", "Poetyka i retoryka — nowe", "S07-S08", "nowa"),
    ("8", "Przeniesienie: gramatyka z L001–L006 → G, syntezy L007–L010 → R04/R05, L011 → T01/T04", "L001-L011", "przenies"),
]
WZORY = ["G01", "G02", "G03"]
KATALOG_ZIP = {"rozwin": "do_rozwiniecia", "nowa": "nowe", "weryfikuj": "do_weryfikacji", "przenies": "do_przeniesienia"}


def main():
    lekcje = {l["kod"]: l for l in SP.wczytaj_kanon()}
    pliki = SP.pliki_lekcji()
    SP.katalog(list(lekcje.values()))

    def md(kod):
        ps = sorted([p for p in pliki.get(kod, []) if p.endswith(".md")], key=os.path.getmtime)
        return ps[-1] if ps else None

    do_zip, todo = {}, [f"# Język polski — DO ZROBIENIA (paczka {DZIS})\n",
                        "Priorytet: części mowy, składnia, przecinki i pisownia, potem środki i słownictwo. "
                        "Wykonuj etapami w tej kolejności, 2–3 lekcje na odpowiedź. Zasady i format: `PROMPT_PERPLEXITY.md`.\n",
                        "Wzory poziomu: " + ", ".join(f"`wzor/{os.path.basename(md(k))}`" for k in WZORY) + "\n"]
    for k in WZORY:
        do_zip[md(k)] = "wzor/" + os.path.basename(md(k))
    for nr, opis, spec, rodzaj in ETAPY:
        todo.append(f"\n## Etap {nr} — {opis}\n\n| Kod | Lekcja | Stan | Plik w paczce | Zadanie |\n|---|---|---|---|---|")
        kody = SP.rozwin(spec)
        for k in kody:
            l = lekcje.get(k)
            p = md(k)
            if rodzaj == "przenies" and k <= "L006":
                p = ZRODLO_L001_L006
            if not p:
                todo.append(f"| {k} | {l['tytul'] if l else '?'} | BRAK PLIKU | — | pominąć |"); continue
            cel = f"{KATALOG_ZIP[rodzaj]}/{os.path.basename(p)}"
            do_zip.setdefault(p, cel)
            zad = {"rozwin": "rozwinąć sekcje do pełnej lekcji (zarys zostaje jako baza)",
                   "nowa": "napisać lekcję wg celów W1/W2/W3 z nagłówka",
                   "weryfikuj": "tabela błędów (bez przepisywania)",
                   "przenies": "tabela: fragment → lekcja docelowa"}[rodzaj]
            todo.append(f"| {k} | {l['tytul'][:60] if l else '?'} | {SP.stan(p)} | `{do_zip[p]}` | {zad} |")
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
        z.write(PROMPT, "PROMPT_PERPLEXITY.md")
        z.writestr("DO_ZROBIENIA.md", "\n".join(todo) + "\n")
        z.write(SP.KANON, "kanon/POL_SPIS_TRESCI_v2.md")
        z.write(SP.KATALOG, "kanon/POL_KATALOG.md")
        for src, cel in do_zip.items():
            z.write(src, cel)
    print(f"paczka: {len(do_zip)} lekcji/plików + prompt, kanon → {os.path.relpath(OUT, REPO)} ({os.path.getsize(OUT)//1024} KB)")


if __name__ == "__main__":
    main()
