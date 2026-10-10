# CLAUDE.md — zasady dla Claude w tym repo

Przeczytaj ten plik jako pierwszy, zanim otworzysz cokolwiek innego. Obowiązuje każdą sesję i każdy wątek, który pracuje na tym repo.

## Kolejność startu
1. Ten plik.
2. `MAPA.md` — rozmiary plików (⚠ = tylko grep, ⛔ = nie czytać). Pełne zasady: skill `.claude/skills/oszczedzanie-tokenow`.
3. `PRZEKAZANIE.md` w katalogu głównym (gałęzie, obszary), potem przekazanie obszaru: `chemia/che-modular/PRZEKAZANIE.md` (stan, jak pracować, decyzje użytkownika, następne kroki), potem `PLAN_PRACY.md` w razie potrzeby i `tail PROGRESS.md`. Polecenia, dialekt MD, GFX: `SYSTEM.md` (czytaj tylko potrzebną sekcję).
4. Tylko pliki dotyczące zadania (np. `lessons-md/gotowe/<KOD>_*.md`, jeden tool z `tools/`).

Nie przeglądaj repo „na wszelki wypadek”. Nie czytaj `.specstory/`, `biologia/`, `angielski/`, `chemia/archiwum/` (tylko do odczytu, opis w `archiwum/OPIS.md`), `PODSUMOWANIE.md`/`AUDYT_I_PLAN.md`, jeśli zadanie ich nie dotyczy.

## Oszczędzanie tokenów (zawsze, chyba że użytkownik poprosi inaczej)
- **Wyjątek:** gdy zadanie wymaga więcej tokenów, by nie stracić jakości, można dla niego ominąć oszczędzanie — ale przed startem zapytaj albo poinformuj jednym zdaniem: „W tym zadaniu nie mogę oszczędzać tokenów na <czym>, bo <powód>.” Tylko ta rzecz, tylko to zadanie.
- Plików > 50 KB nie czytaj w całości: najpierw `grep -n`, potem fragment (`sed -n a,bp`). Dotyczy zwłaszcza `modules/_anon_001.js`, `modules/che-lab-engine-v001.js`, packów w `dist/` i wygenerowanych HTML.
- Lekcje edytuje się w MD (`lessons-md/`); HTML robią narzędzia z `chemia/che-modular/tools/` (zero tokenów). Wygenerowanego HTML nie czytaj ani nie poprawiaj ręcznie. `modules/` odtwarza `sh tools/pobierz_moduly.sh`.
- Wyniki poleceń skracaj (`| tail -3`, `| head`, liczniki zamiast list). Testy jednym poleceniem, pokazuj tylko błędy (chemia: `cd chemia/che-modular && python3 tools/che.py test` — wcześniej raz `che.py init` i `che.py lekcje`; biologia: `node biologia/bio/narzedzia/sprawdz_bio.js` po `md2html_bio.py`).
- Wiele zmian w jednym pliku: jeden skrypt z `assert s.count(old)==1` zamiast wielu edycji.
- Bez komentowania kroków w czacie. Odpowiedź końcowa po polsku, 1–4 zdania: co zmienione, wynik testów, następny krok.
- Pytaj tylko, gdy decyzja naprawdę należy do użytkownika.
- Po dodaniu/usunięciu plików: `python3 narzedzia/mapa.py` (odświeża MAPA.md).
- Porównania wersji przez git (`git diff --stat`), nie przez czytanie plików; diff wygenerowanych HTML i packów `dist/` jest wyłączony w `.gitattributes`.
- Przy kończącym się limicie: najpierw zapisz stan (commit + wpis w `chemia/che-modular/PRZEKAZANIE.md` i `PROGRESS.md`), potem najmniejszy działający krok.

## Biologia (BIO)
- Praca BIO: najpierw `biologia/bio/PRZEKAZANIE.md`, potem tylko md lekcji (`biologia/bio/md/`) i `biologia/bio/BIO_KATALOG.md`. Gałąź: `claude/che-lekcje` (zbiorcza; `claude/bio-lekcje` scalona 2026-10-08).
- Build `python3 biologia/bio/narzedzia/md2html_bio.py`, test `node biologia/bio/narzedzia/sprawdz_bio.js`. Wygenerowanego HTML nie czytać.

## Olimpiada 8 (projekt przełączany)
- Praca OLI: najpierw `olimpiada/PRZEKAZANIE.md`; `OLIMPIADA_8_MASTER.md` czytać tylko potrzebną sekcję (`grep -n '^#'`).
- Lekcje są wspólne z kursem E8: jeden plik MD, warstwy poziomów 2–4 dopisywane w tej samej lekcji — nie kopiować treści do `olimpiada/`.

## Git
- Klon: `git clone --depth 1` (jeden naraz, długi timeout); przy pracy nad jednym przedmiotem `git sparse-checkout set <folder>`.
- Gałąź pracy (CHE, BIO, wizualizacje): `claude/che-lekcje` — zbiorcza, opis w `PRZEKAZANIE.md`. Push tylko na gałęzie `claude/...` (push na `main` kończy się 403).
- Po każdym zamkniętym etapie: commit i push, krótki wpis w `chemia/che-modular/PROGRESS.md`.

## Wizualizacje i obrazy — opis obowiązkowy (zawsze, każdy przedmiot)
- Każda wizualizacja, model, zlewka, wykres, schemat SVG i obraz w lekcji ma **opis słowny w md**: co dokładnie widać (elementy, oznaczenia, kolory, liczby, co się zmienia) i jaki wniosek uczeń ma z tego wyciągnąć.
- **Piszę opis od razu przy tworzeniu md** — linia `@opis …` zaraz pod każdą `@model` / `@zlewka` / `@viz` / obrazem (`![…]`, `<img>` + `alt`, `<svg>`). W HTML staje się ukrytym komentarzem `<!-- OPIS: … -->`.
- **Build to egzekwuje** (`chemia/che-modular/tools/md2html.py`, `biologia/bio/narzedzia/md2html_bio.py` → `narzedzia/opis_wizualizacji.py`): nowa lekcja bez opisu = błąd, build się nie wykona. Stare lekcje mają dług w `narzedzia/opis_dlug.json` — może tylko maleć (przy edycji lekcji uzupełniam opisy). Sprawdzenie bez budowania: `python3 narzedzia/opis_wizualizacji.py`.
- Każdy nowy skrypt md→HTML (inne przedmioty) ma wołać `OPIS.egzekwuj()` i zamieniać `@opis` przez `OPIS.komentarz()`.
- Cel: treść czytelna bez grafiki (eksport do Perplexity/LLM, czytniki ekranu, druk).

## Eksport do analizy (Perplexity)
- Rejestr weryfikacji: `WERYFIKACJA.md` (W1 = treść wysłanego zapisu, W2 = zakres). Po każdym audycie: surowa odpowiedź do `chemia/plany/audyty/` (lub `<przedmiot>/plany/audyty/`), poprawki do lekcji gotowej albo jako sekcja „AUDYT W1” do kanonu, wiersz w rejestrze. LaTeX z odpowiedzi → Unicode: `narzedzia/latex2uni.py`. Dla lekcji z kanonu (niegotowych) jednym poleceniem: `python3 narzedzia/audyt_do_kanonu.py <odpowiedź> [--uwaga KOD "tekst"]` (zapis surowy + sekcja AUDYT W1 + wiersz rejestru).
- **Paczki W1 dla wybranych lekcji:** `python3 eksport/w1_lekcje.py NAZWA plik.md …` — prompt wspólny `eksport/W1_PROMPT.md` (decyzja użytkownika: oprócz błędów LLM sprawdza **pełny zakres**, dopisuje brakujące dane i **ulepsza** lekcje, inspirując się np. Khan Academy; odpowiedź w podsekcjach Błędy / Braki w zakresie / Ulepszenia). Perplexity czyta ok. 80–100 KB, a odpowiedź z ulepszeniami ucina się po ok. 3 lekcjach — paczki po 2 lekcje (do ~60 KB).
- `python3 eksport/zbierz_lekcje.py` → `eksport/out/PERPLEXITY_<PRZEDMIOT>.md` (prompt na początku + wszystkie lekcje, jedna najnowsza wersja każdej). Katalog `out/` jest poza gitem.

## Polski — lekcje podstawowe (priorytet)
- **Grafiki w polskim to wyjątek** (decyzja użytkownika): tylko w niektórych lekcjach, gdy pomagają zrozumieć (np. wykres zdania); bez ozdób. Biblioteka `polski/szablon/pol-viz.js`, katalog `polski/szablon/POL_KATALOG_GRAFIK.md`.
- Szkielety G01–G17 (części mowy, składnia) i S01–S06 (środki stylistyczne) w `polski/podstawy/`, generator `python3 narzedzia/szkielety_polski.py` (nie nadpisuje wypełnionych), paczka dla LLM `eksport/out/DO_WYPELNIENIA_PL_podstawy.md`. Pliki: `POL.02.G01.rzeczownik.md` itd. Wypełniony plik: zmienić `stan: PUSTY` → `stan: WYPEŁNIONY — model, data`, potem W1.

## Nazwy plików lekcji
- Wzór `PRZ.NN.KOD.slug.md` (jak chemia `CHE.01.F07.…`): `POL.01.L…` lektury + gramatyka, `POL.02.G…` części mowy/składnia, `POL.03.S…` środki stylistyczne, `POL.04.D…` kompetencje E8; `ANG.01.L…`; `BIO.01` komórka (L001–L009), `BIO.02` genetyka (L010–L021), `BIO.03` ewolucja, `BIO.04` ekologia, `BIO.05` powtórka, `BIO.06` extra, `BIO.00.REV…`, `BIO.99.X…` pliki systemowe; olimpiada `OLI.BIO.B2…`, `OLI.CHE.J03…`. HTML ma tę samą nazwę.

## Szablon HTML lekcji (wszystkie przedmioty)
- Wspólny wygląd: `szablon/` (baza + ulepszenia + `motywy/<che|bio|pol|ang|oli>.css`, `lekcja.js`), opis w `szablon/README.md`. Build jednej lekcji: `python3 narzedzia/lekcja_html.py -p <przedmiot> plik.md`; wszystkich: `python3 narzedzia/zbuduj_wszystkie.py` → `polski/html/`, `biologia/html/`, `chemia/html/` (kanon), `olimpiada/html/` (wygenerowane — nie czytać, nie poprawiać ręcznie). BIO `dist/` też idzie przez szablon. Gotowe lekcje chemii z modelami: nadal `che-modular/tools/md2html.py`. Zmiany wspólne tylko w `szablon/ulepszenia.css`, przedmiotowe w motywie.

## Merytoryka
- Język lekcji: polski, poziom E8 (podstawa programowa). Dane liczbowe oznaczaj do weryfikacji, jeśli nie są pewne.

## GFX i modele
- Najpierw istniejące animacje, modele i zlewki (`chemia/che-modular/engine/src/gfx/KATALOG.md` — silnik, `chemia/che-modular/KATALOG_MODELI.md` — modele i pracownie z rozszerzeń) — rozszerzamy je i ulepszamy. Brakujący element (naczynie, przyrząd, przedmiot, efekt) budujemy od podstaw jako komponent wielokrotnego użytku (`engine/src/lekcja/rozszerzenia.js` albo plik w `engine/src/gfx/<przedmiot>/<rodzaj>/`) + wpis w katalogu, nie jednorazowo w lekcji.

## Plany kursu
- Spis kursu (kanon v0.3, 113 lekcji): `chemia/plany/CHE_SPIS_TRESCI.md` (generowany: `cd chemia && python3 plany/narzedzia/spis_tresci.py`, dane w `plany/narzedzia/kanon_dane.py`). Materiał wstępny lekcji: `chemia/lekcje_md/<grupa>/` — czytać tylko sekcję potrzebnej lekcji.

