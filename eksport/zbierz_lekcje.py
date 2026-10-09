"""Zbiera gotowe lekcje każdego przedmiotu do jednego pliku md (z promptem dla Perplexity na początku).

Użycie (z katalogu repo):  python3 eksport/zbierz_lekcje.py
Wynik: eksport/out/PERPLEXITY_<PRZEDMIOT>.md  (katalog out/ jest poza gitem)

Zasada wyboru: dla każdej lekcji bierzemy JEDNĄ wersję — najobszerniejszą spośród
bloku w pakiecie MD (kanon) i tekstu wyciągniętego z najnowszego HTML.
Chemia: lekcje N01–N05 (chemia/che/md) zastępują stare L002–L005 z pakietu.
"""
import datetime
import re
from pathlib import Path

from html2md import html2md

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "eksport" / "out"
DZIS = datetime.date.today().isoformat()


def split_md(path, start_re, stop_re=None, end_re=None):
    """Dzieli pakiet md na lekcje. start_re: grupa 1 = numer, grupa 2 = tytuł."""
    lines = Path(path).read_text(encoding="utf-8", errors="replace").split("\n")
    starts = []
    for i, ln in enumerate(lines):
        m = re.match(start_re, ln)
        if m:
            starts.append((i, m.group(1), m.group(2).strip()))
    res = {}
    for k, (i, num, title) in enumerate(starts):
        j = starts[k + 1][0] if k + 1 < len(starts) else len(lines)
        for x in range(i + 1, j):  # wcześniejsze zakończenie (sekcje systemowe)
            if (stop_re and re.match(stop_re, lines[x])) or (end_re and re.match(end_re, lines[x])):
                j = x
                break
        res[num] = (title, "\n".join(lines[i + 1:j]).strip())
    return res


def demote(txt, shift=2):
    """Obniża nagłówki md, żeby lekcja była sekcją '## ' w pliku zbiorczym."""
    return re.sub(r"^(#{1,6}) ", lambda m: "#" * min(len(m.group(1)) + shift, 6) + " ", txt, flags=re.M)


def front(path):
    s = Path(path).read_text(encoding="utf-8")
    meta, body = {}, s
    m = re.match(r"---\n(.*?)\n---\n", s, re.S)
    if m:
        for ln in m.group(1).split("\n"):
            if ":" in ln:
                k, v = ln.split(":", 1)
                meta[k.strip()] = v.strip()
        body = s[m.end():]
    return meta, body


def pick(code, md_item, html_path):
    """Zwraca (tytuł, treść, źródło) — najobszerniejsza wersja."""
    cands = []
    if md_item:
        cands.append((md_item[0], md_item[1], "pakiet MD"))
    if html_path:
        p = ROOT / html_path
        t = html2md(p)
        cands.append((None, t, f"HTML: {p.name}"))
    best = max(cands, key=lambda c: len(c[1]))
    title = best[0] or (md_item[0] if md_item else code)
    return title, best[1], best[2]


PROMPT = """# PROMPT DLA PERPLEXITY — analiza lekcji: {przedmiot} (klasa 8, egzamin ósmoklasisty)

> Skopiuj tę sekcję jako polecenie, a cały plik dołącz jako załącznik.

**Rola:** Jesteś doświadczonym nauczycielem {przedmiot_dop} i egzaminatorem CKE. Analizujesz materiał kursu „Podstawa Plus” dla ucznia klasy 8 (Polska), który przygotowuje się do egzaminu ósmoklasisty (E8) i chce pójść dalej (poziomy: E8 → MASTER/ROZUMIENIE → KONKURS → OLIMPIADA).

**Kontekst pliku:** Poniżej są wszystkie lekcje z tego przedmiotu, które już mają treść ({liczba} lekcji). Każda lekcja to jedna, najnowsza wersja tekstu. Pliki HTML zostały spłaszczone do tekstu, więc **brak grafik, animacji i interaktywnych quizów to nie błąd** — nie zgłaszaj tego. Znaczniki typu `::: minimum`, `[[basic:E8]]`, `[UI: …]` to techniczne oznaczenia bloków — pomiń je. Linie `@opis …` oraz `> [Wizualizacja]` / `> [Obraz]` to słowne opisy grafik — oceń je jak treść (czy są poprawne i wystarczające bez obrazka).
{kontekst}

**Zadania (korzystaj z aktualnych źródeł w internecie: podstawa programowa MEN dla klas 7–8, informator CKE o egzaminie ósmoklasisty 2027, arkusze CKE z lat 2019–2026, wymagania konkursów kuratoryjnych woj. lubelskiego i olimpiad przedmiotowych):**

1. **Błędy merytoryczne.** Znajdź twierdzenia, definicje, dane liczbowe, przykłady i odpowiedzi do zadań, które są błędne, nieprecyzyjne albo niezgodne z tym, czego wymaga CKE. Dla każdego: cytat (krótki) → poprawna wersja → źródło.
2. **Pokrycie podstawy programowej.** Zestaw wymagania szczegółowe podstawy programowej (klasy 7–8) i informatora CKE z tym, co jest w lekcjach. Wypisz wymagania **niepokryte lub pokryte słabo**, z numerem wymagania i priorytetem (wysoki = często na egzaminie).
3. **Co uzupełnić w istniejących lekcjach.** Dla każdej lekcji: czego brakuje (pojęcia, typowe pułapki egzaminacyjne, typy zadań CKE, zadania otwarte z kluczem i punktacją, powtórka), co jest zbędne lub za trudne dla poziomu E8 (ale może zostać jako MASTER/KONKURS).
4. **Nowe lekcje.** Zaproponuj listę brakujących lekcji w kolejności realizacji (tytuł, zakres, wymagania podstawy, szacowana liczba godzin).
5. **Spójność.** Wskaż sprzeczności między lekcjami (np. różne definicje lub oznaczenia tego samego) i powtórzenia.

**Format odpowiedzi:**
- A. Tabela per lekcja: `Lekcja | Błędy (cytat → poprawka → źródło) | Braki do uzupełnienia | Do skrócenia/przeniesienia`.
- B. Lista wymagań podstawy niepokrytych (numer, treść, priorytet).
- C. Plan nowych lekcji (tabela).
- D. 10 najważniejszych poprawek do zrobienia najpierw.
Pisz po polsku, konkretnie, bez przepisywania całych lekcji. Każdą poprawkę merytoryczną poprzyj źródłem.

---

## Spis lekcji w pliku

{spis}

---
"""


def build(nazwa, przedmiot, przedmiot_dop, kontekst, lessons, pomin):
    """lessons: lista (kod, tytuł, treść, źródło)."""
    spis = "\n".join(f"- **{k}** — {t}  _(źródło: {z})_" for k, t, _, z in lessons)
    if pomin:
        spis += "\n\nPominięte (starsze/duplikaty): " + "; ".join(pomin)
    parts = [PROMPT.format(przedmiot=przedmiot, przedmiot_dop=przedmiot_dop, liczba=len(lessons),
                           kontekst=kontekst, spis=spis)]
    for k, t, body, z in lessons:
        parts.append(f"\n\n## {k} — {t}\n\n_Źródło: {z}_\n\n{demote(body)}\n")
    parts.append(f"\n\n---\n_Plik wygenerowany automatycznie {DZIS} skryptem eksport/zbierz_lekcje.py._\n")
    out = OUT / f"PERPLEXITY_{nazwa}.md"
    out.write_text("".join(parts), encoding="utf-8")
    return out, len(lessons)


def biologia():
    pak = split_md(ROOT / "biologia/BIOLOGIA_PODSTAWA_PLUS_v3.9_working (5).md",
                   r"^# (L\d{3}) — (.*)$", end_re=r"^# (WARSTWA|SVG|BACKLOG|STATUS)")
    html = {"L001": "biologia/BIOLOGIA_L001_KOMORKA v4.html", "L002": "biologia/BIOLOGIA_L002_CZLOWIEK_v4.html",
            "L003": "biologia/BIOLOGIA_L003_DIAGNOZA_v4.html", "L011": "biologia/BIOLOGIA_L011_DNA (1).html",
            "L012": "biologia/BIOLOGIA_L012_Chromosom v2.html", "L015": "biologia/BIOLOGIA_L015_MEJOZA.html",
            "L017": "biologia/BIOLOGIA_L017_PUNNETT (2).html"}
    les = []
    for code in sorted(set(pak) | set(html)):
        t, b, z = pick(code, pak.get(code), html.get(code))
        les.append((code, t, b, z))
    kont = ("Kurs biologii klasy 8: genetyka, ewolucja, ekologia + powtórki z klas 5–7 (komórka, człowiek). "
            "Lekcje L001/L002/L011/L015/L017 są rozbudowane; pozostałe to wersje robocze (krótsze) — "
            "oceń, czego im brakuje do poziomu lekcji rozbudowanych.")
    return build("BIOLOGIA", "biologia", "biologii", kont, les, ["BIOLOGIA_PODSTAWA_PLUS: sekcje SYSTEM/WARSTWA/BACKLOG"])


def chemia():
    pak = split_md(ROOT / "chemia/CHEMIA_PODSTAWA_PLUS_v1.1.md", r"^# LEKCJA (L\d{3}) — (.*)$")
    html = {"L001": "chemia/CHEMIA_L001_FUNDAMENTY.html", "L013": "chemia/CHEMIA_L013_ZAAWANSOWANA_extra.html"}
    zastap = {"L002": "N01", "L003": "N02", "L004": "N03", "L005": "N04"}
    nowe = {}
    for p in sorted((ROOT / "chemia/che/md").glob("*.md")):
        meta, body = front(p)
        nowe[meta.get("kod", p.stem)] = (meta.get("tytul", p.stem), meta.get("lead", ""), body, p.name)
    les = []
    for code in sorted(pak):
        if code in zastap:
            k = zastap[code]
            t, lead, body, fn = nowe.pop(k)
            les.append((k, t, (f"_{lead}_\n\n" if lead else "") + body, f"nowa wersja chemia/che/md/{fn} (zastępuje {code})"))
            continue
        t, b, z = pick(code, pak[code], html.get(code))
        les.append((code, t, b, z))
    for k, (t, lead, body, fn) in nowe.items():
        les.append((k, t, (f"_{lead}_\n\n" if lead else "") + body, f"chemia/che/md/{fn}"))
    kont = ("Kurs chemii klasy 8 (z powtórką klasy 7). Lekcje N01–N05 to najnowsza, najbardziej rozbudowana seria "
            "(związki nieorganiczne: tlenki, wodorotlenki, kwasy, sole, wodorki); FIZ-01 to most z fizyką. "
            "Dane liczbowe w N05 (temperatury wrzenia, elektroujemność, pKa, rozpuszczalność) wymagają szczególnej weryfikacji. "
            "Planowany jest też blok fundamentów F00–F09 — zaproponuj jego zakres.")
    return build("CHEMIA", "chemia", "chemii", kont, les,
                 ["L000-CHEMIA-Spis-tresci.html", "L001-CHEMIA-Zaawansowana.html", "L002-CHEMIA-Powtorka-Klasy7.html",
                  "pakiet L002–L005 (zastąpione przez N01–N04)"])


def polski():
    pak = split_md(ROOT / "polski/POLSKI_PODSTAWA_PLUS_v7.11 (3).md", r"^LEKCJA (\d) — (.*)$", end_re=r"^## STATUS")
    pak = {f"L00{k}": v for k, v in pak.items()}
    html = {"L001": "polski/L001_lekcja (2).html", "L002": "polski/L002_lekcja (3).html",
            "L003": "polski/L003-PL-Opowiesci-z-Narnii-zaimek v2.html",
            "L004": "polski/L004-PL-Chlopcy-z-Placu-Broni-przymiotnik-liczebnik v2.html",
            "L005": "polski/L005-PL-Kajko-i-Kokosz-rzeczownik v2.html",
            "L006": "polski/L006-PL-Akademia-Pana-Kleksa-czasownik v2.html"}
    les = [(c, *pick(c, pak.get(c), html.get(c))) for c in sorted(set(pak) | set(html))]
    kont = ("Kurs języka polskiego: każda lekcja łączy lekturę obowiązkową z gramatyką (imiesłowy, nieodmienne części mowy, "
            "zaimek, przymiotnik/liczebnik, rzeczownik, czasownik). Sprawdź zgodność z listą lektur obowiązkowych "
            "na egzaminie 2027 i z zasadami pisowni (w tym zmiany ortograficzne obowiązujące od 2026, np. „nie” z imiesłowami). "
            "Oceń też brak lekcji o formach wypowiedzi (rozprawka, opowiadanie, wypowiedzi argumentacyjne) i lekturach z klas 7–8.")
    return build("POLSKI", "język polski", "języka polskiego", kont, les,
                 ["starsze wersje HTML L001 v2–v7 i L002–L006 bez v2", "POLSKI_PODSTAWA_PLUS_v7 (kopie)",
                  "L001-L006-PL-Wszystkie-lekcje.md (skrót)"])


def angielski():
    pak = split_md(ROOT / "angielski/ANGIELSKI_PODSTAWA_PLUS_v1.0 (2).md",
                   r"^# LEKCJA (\d+|DODATKOWA \d) – (.*)$", stop_re=r"^# (Część|LEKCJE DODATKOWE)")
    pak2 = {}
    for k, v in pak.items():
        pak2[("D" + k.split()[-1]) if k.startswith("DODATKOWA") else f"L{int(k):03d}"] = v
    # sekcja „LEKCJE DODATKOWE” (dodatek 1: phrasal verbs, false friends itd.)
    dod = split_md(ROOT / "angielski/ANGIELSKI_PODSTAWA_PLUS_v1.0 (2).md", r"^# (LEKCJE DODATKOWE)()$",
                   stop_re=r"^# LEKCJA DODATKOWA 2")
    if dod:
        pak2["D1"] = ("Lekcje dodatkowe (phrasal verbs, false friends, ciekawostki)", dod["LEKCJE DODATKOWE"][1])
    html = {"L002": "angielski/L002-EN-Operatory-i-czasowniki-posilkowe.html",
            "L003": "angielski/L003-EN-Tryb-rozkaza zujacy-czasowniki-stanow-phrasal-verbs.html",
            "L004": "angielski/L004-EN-Czasy-terazniejsze-i-przeszle.html", "L005": "angielski/L005-EN-Present-Perfect.html",
            "L006": "angielski/L006-EN-Past-Simple-Continuous.html", "L012": "angielski/L012-EN-Future-Simple.html"}
    les = [(c, *pick(c, pak2.get(c), html.get(c))) for c in sorted(set(pak2) | set(html))]
    kont = ("Kurs gramatyki angielskiej z objaśnieniami po polsku (poziom A2+/B1, egzamin ósmoklasisty z angielskiego). "
            "Sprawdź poprawność przykładów angielskich i reguł. Oceń, czego brakuje względem egzaminu: "
            "rozumienie ze słuchu i tekstów, funkcje językowe, słownictwo tematyczne (14 obszarów z podstawy), "
            "e-mail/wiadomość (wypowiedź pisemna), stopniowanie, strona bierna, zdania warunkowe, mowa zależna, "
            "pytania pośrednie, question tags itd.")
    return build("ANGIELSKI", "język angielski", "języka angielskiego", kont, les,
                 ["L001-EN-Wszystkie-lekcje.md (duplikat pakietu)", "L000-EN-Fiszki.txt"])


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for fn in (biologia, chemia, polski, angielski):
        p, n = fn()
        print(f"{p.name}: {n} lekcji, {p.stat().st_size // 1024} KB")
