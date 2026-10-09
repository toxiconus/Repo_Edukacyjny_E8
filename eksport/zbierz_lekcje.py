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

6. **Szkielety** (jeśli są na końcu pliku): dla każdego zaproponuj treść i zadania z kluczem.

**Format odpowiedzi:**
- A. Tabela per lekcja: `Lekcja | Błędy (cytat → poprawka → źródło) | Braki do uzupełnienia | Do skrócenia/przeniesienia`.
- B. Lista wymagań podstawy niepokrytych (numer, treść, priorytet).
- C. Plan nowych lekcji (tabela).
- D. 10 najważniejszych poprawek do zrobienia najpierw.
- E. Szkielety: propozycja treści per szkielet.
Pisz po polsku, konkretnie, bez przepisywania całych lekcji. Każdą poprawkę merytoryczną poprzyj źródłem.

---

## Spis lekcji w pliku

{spis}

---
"""


def build(nazwa, przedmiot, przedmiot_dop, kontekst, lessons, pomin, szkielety=()):
    """lessons: lista (kod, tytuł, treść, źródło)."""
    spis = "\n".join(f"- **{k}** — {t}  _(źródło: {z})_" for k, t, _, z in lessons)
    if szkielety:
        spis += "\n\nSzkielety na końcu pliku: " + "; ".join(f"{k} {t}" for k, t, _, _ in szkielety)
    if pomin:
        spis += "\n\nPominięte (starsze/duplikaty): " + "; ".join(pomin)
    parts = [PROMPT.format(przedmiot=przedmiot, przedmiot_dop=przedmiot_dop, liczba=len(lessons),
                           kontekst=kontekst, spis=spis)]
    for k, t, body, z in lessons:
        parts.append(f"\n\n## {k} — {t}\n\n_Źródło: {z}_\n\n{demote(body)}\n")
    if szkielety:
        parts.append("\n\n---\n\n# SZKIELETY DO UZUPEŁNIENIA (lekcje bez treści)\n\n"
                     "Dla każdego szkieletu zaproponuj treść: kluczowe fakty, definicje, przykłady, doświadczenia, "
                     "typowe błędy, 3–5 zadań w stylu CKE/konkursu z kluczem i źródłami.\n")
        for k, t, body, z in szkielety:
            parts.append(f"\n## {k} — {t}\n\n_Plik: {z}_\n\n{demote(body)}\n")
    parts.append(f"\n\n---\n_Plik wygenerowany automatycznie {DZIS} skryptem eksport/zbierz_lekcje.py._\n")
    out = OUT / f"PERPLEXITY_{nazwa}.md"
    out.write_text("".join(parts), encoding="utf-8")
    return out, len(lessons)


def md_dir(d, pattern="*.md", skip=()):
    """Lekcje z katalogu md (plik = lekcja, nagłówek YAML lub '# KOD — tytuł')."""
    res = []
    for p in sorted((ROOT / d).glob(pattern)):
        if any(p.name.startswith(x) for x in skip):
            continue
        meta, body = front(p)
        kod = meta.get("kod", "").strip('"') or p.stem.split("_")[0].split(".")[-1]
        tyt = meta.get("tytul", "").strip('"')
        if not tyt:
            m = re.match(r"#\s*\S+\s*[—–-]\s*(.+)", body.lstrip())
            tyt = m.group(1).strip() if m else p.stem
            if m:
                body = body.lstrip().split("\n", 1)[-1]
        lead = meta.get("lead", "")
        res.append((kod, tyt, (f"_{lead}_\n\n" if lead else "") + body, f"{d}/{p.name}"))
    return res


def biologia():
    kanon = {k: v for k, v in ((x[0], x) for x in md_dir("biologia/md", "L*.md"))}
    for x in md_dir("biologia/bio/md"):  # gotowe lekcje (nowsze) zastępują kanon
        kanon[x[0]] = x
    les = [kanon[k] for k in sorted(kanon, key=lambda k: (k.startswith("REV"), k))]
    szk = md_dir("olimpiada/do_uzupelnienia", "BIO_*.md")
    kont = ("Kurs biologii klasy 8: genetyka, ewolucja, ekologia + powtórki z klas 5–7 (komórka, człowiek) "
            "oraz powtórki konkursowe REV01–REV02 (konkurs kuratoryjny, etap szkolny). Kanon: BIO.all v5.2 pocięty na lekcje; "
            "L010, REV01, REV02 to wersje gotowe (najnowsze). Część lekcji (L004–L009, L016A) to krótkie zarysy — "
            "oceń, czego im brakuje. Na końcu są szkielety działu „organizm człowieka i homeostaza” (etap rejonowy konkursu) — do wypełnienia.")
    return build("BIOLOGIA", "biologia", "biologii", kont, les,
                 ["X00–X99 (system, szablon, backlog)", "stare HTML i pakiet v3.9 (scalone w kanonie v5.2)"], szk)


def chemia():
    got = "chemia/che-modular/lessons-md/gotowe"
    gotowe = md_dir(got)
    gk = {x[3].split("/")[-1].split("_")[0] for x in gotowe}  # F01, N01, REV01...
    # kanon (lekcje_md): bez tego, co już jest w gotowych; seria N kanonu = stara numeracja tlenki..sole (zastąpiona)
    kanon = []
    for sub in ("00", "F", "R", "O"):
        for x in md_dir(f"chemia/lekcje_md/{sub}", skip=("CHE.00.S00",)):
            kod = x[0]
            if kod in gk and kod != "R03":
                continue
            kanon.append(x)
    def klucz(x):
        k = x[0]
        rz = {"W": 0, "F": 1, "N": 3, "R": 4, "O": 5, "L": 7, "R0": 4}
        if k.startswith("FIZ"): return (2, k)
        if k.startswith("REV"): return (6, k)
        return (rz.get(k[0], 8), k, x[3])
    les = sorted(gotowe + kanon, key=klucz)
    szk = md_dir("olimpiada/do_uzupelnienia", "CHE_*.md")
    kont = ("Kurs chemii klasy 7–8 (+ ambitne LO, konkurs kuratoryjny). Dwa rodzaje plików: "
            "`lessons-md/gotowe` = lekcje gotowe (najnowsze, najlepiej dopracowane: F01–F06, N01 Powietrze, N01–N05 związki nieorganiczne, "
            "R03, REV01, FIZ01); `lekcje_md` = materiał roboczy kanonu (F00, F07–F21, R, O, powtórki) — jeszcze nie gotowe lekcje. "
            "Uwaga na numerację: w gotowych tlenki = N01, w kanonie tlenki = N02 (stara numeracja — kanonowe N02–N05 pominięto jako zastąpione). "
            "Dane liczbowe (np. w N05: temperatury wrzenia, elektroujemność, pKa, rozpuszczalność) wymagają szczególnej weryfikacji. "
            "Na końcu są szkielety (szereg aktywności, równania jonowe, stechiometria z nadmiarem) — do wypełnienia.")
    return build("CHEMIA", "chemia", "chemii", kont, les,
                 ["CHE.00.S00 (system kursu)", "kanon N02–N05 i F01–F06, REV01 (są w gotowych)", "stare HTML i pakiety PODSTAWA_PLUS"], szk)


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
    szk = md_dir("polski/do_uzupelnienia")
    return build("POLSKI", "język polski", "języka polskiego", kont, les, szkielety=szk, pomin=["starsze wersje HTML L001 v2–v7 i L002–L006 bez v2", "POLSKI_PODSTAWA_PLUS_v7 (kopie)",
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
