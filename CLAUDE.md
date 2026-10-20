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
- Wyniki poleceń skracaj (`| tail -3`, `| head`, liczniki zamiast list). Testy jednym poleceniem, pokazuj tylko błędy (`node narzedzia/sprawdz.js`).
- Wiele zmian w jednym pliku: jeden skrypt z `assert s.count(old)==1` zamiast wielu edycji.
- Bez komentowania kroków w czacie. Odpowiedź końcowa po polsku, 1–4 zdania: co zmienione, wynik testów, następny krok.
- Pytaj tylko, gdy decyzja naprawdę należy do użytkownika.
- Po dodaniu/usunięciu plików: `python3 narzedzia/mapa.py` (odświeża MAPA.md).
- Porównania wersji przez git (`git diff --stat`), nie przez czytanie plików; diff wygenerowanych HTML i packów `dist/` jest wyłączony w `.gitattributes`.
- Przy kończącym się limicie: najpierw zapisz stan (commit + wpis w `chemia/che-modular/PRZEKAZANIE.md` i `PROGRESS.md`), potem najmniejszy działający krok.

## Biologia (BIO)
- **Grafiki BIO: najpierw sprawdź `biologia/plany/KATALOG_GRAFIK_BIO.md`** (generowany: `python3 narzedzia/katalog_grafik_bio.py`): komponenty BIO, stare HTML z animacjami i specyfikacje „WARSTWA WIZUALNA” w starych md. Używaj i ulepszaj istniejące (nowe i dawne), nie dubluj; nowy komponent → `szablon/bio-rysunki.js` + wpis w `BIO_KATALOG.md`.
- **Wspólne ścieżki BIO (jedna wersja każdej lekcji):** źródło = `biologia/bio/md/BIO.<blok>.<kod>.<slug>.md` (nazwa = uid; bez starych nazw B2a_/REV01_/L010_). Wersje „rejon” (kompaktowe) to `BIO.02.B2*`, `BIO.02.B10`, `BIO.01.B1b`; pełne układy `BIO.07.U*`; powtórki `BIO.00.REV01/02` (scalone: treść + audyty + olimpijska warstwa). Przed utworzeniem lekcji sprawdź `ls biologia/bio/md | grep <temat>` — nie twórz drugiej wersji tego samego tematu, rozbuduj istniejącą.
- **Jedno źródło md: `biologia/bio/md/` (katalog `biologia/md/` zlikwidowany). Starsze wersje i duble → `biologia/niewykorzystane/` (nie kasujemy: najpierw porównanie, lepsze zostaje, unikalne treści dopisujemy do lepszej lekcji albo trafiają do niewykorzystane/; chemia: `chemia/plany/niewykorzystane/`).
- **Build kanoniczny:** `python3 narzedzia/zbuduj_wszystkie.py bio` → `biologia/html/` (wspólny szablon `narzedzia/lekcja_html.py`; grafiki: `bio-core.js` + `szablon/wizualizacje/<id>.js` + `szablon/bio-rysunki.js`, brak id = błąd). Szybki podgląd/test: `cd biologia/bio && python3 narzedzia/md2html_bio.py` (→ `dist/`, nieśledzone) i `node narzedzia/sprawdz_bio.js`. `szablon/bio-viz.js` = legacy, nieużywany.
- Praca BIO: najpierw `biologia/bio/PRZEKAZANIE.md`, potem tylko md lekcji i `biologia/bio/BIO_KATALOG.md`. Etap konkursu po prefiksie nazwy: `narzedzia/etap_lko.py`.
- Praca na gałęzi roboczej, scalanie do `main` na polecenie „scal”.

## Olimpiada 8 (projekt przełączany)
- Praca OLI: najpierw `olimpiada/PRZEKAZANIE.md`; `OLIMPIADA_8_MASTER.md` czytać tylko potrzebną sekcję (`grep -n '^#'`).
- Lekcje są wspólne z kursem E8: jeden plik MD, warstwy poziomów 2–4 dopisywane w tej samej lekcji — nie kopiować treści do `olimpiada/`.

## Praca ciągła (każdy model, zwłaszcza Haiku)
- Skończone zadanie → od razu następne z listy (`ZADANIA_HAIKU_SONNET.md`), bez pytania „czy dalej?”. Raport na końcu serii. Pytać tylko przy ryzyku utraty danych.

## Weryfikacja z ZPE (zasada stała, od 2026-10-20)
Każdy model (Haiku, Sonnet, zewnętrzne AI) przy tworzeniu i audycie lekcji **mapuje temat na materiały Zintegrowanej Platformy Edukacyjnej (zpe.gov.pl)** i sprawdza z nimi treść: definicje, progi, liczby, zakres podstawy programowej, kolejność tematów. Braki zakresu dopisujemy do lekcji; rozbieżności rozstrzyga się drugim źródłem i zapisuje w `WERYFIKACJA.md` (lekcja, miejsce, źródło, wynik). Mapa lekcja → odpowiedniki ZPE: `biologia/plany/MAPA_ZPE.md`, `chemia/plany/MAPA_ZPE.md` (osobno per przedmiot, URL + temat + status). Uwaga (sprawdzone 2026-10-20): ZPE nie ma osobnego kursu biologii dla klasy 8 SP, który dałoby się znaleźć: „Świat pod lupą” to przyroda IV–VI (ciało człowieka, zdrowie, środowisko), a biologia z genetyką, ewolucją i ekologią to materiały dla liceum/technikum (zakres wyższy niż E8, przydatny jako rozszerzenie i do sprawdzania definicji). Podstawa programowa SP biologii na zpe.gov.pl wskazuje: kl. 8 = genetyka, ewolucja, ekologia. Mapując, zapisuj poziom materiału (SP IV–VI / LO). ZPE zastępuje tylko „do weryfikacji”, nie wykład: zostaje nasz styl i pełny wykład od zera.

## Bez planów czasowych i bez „supernauki” (od 2026-10-20)
- Lekcje nie zawierają planów czasowych („Mapa (10 min)” itp.) ani ogólnych haseł motywacyjnych („10 zasad supernauki”, „10 zasad skutecznej nauki”). Takie bloki usuwamy z żywych lekcji; kopie idą do `niewykorzystane/`.

## Jedna najlepsza wersja (zasada stała, od 2026-10-20)
- Każda lekcja, grafika i narzędzie ma w repo **jedną najlepszą wersję**. Przed utworzeniem czegoś sprawdź, czy już istnieje (`ls`, katalogi, KATALOG_GRAFIK_BIO); nie twórz drugiej wersji — rozbuduj istniejącą.
- Dubel: porównaj (rozmiar, nagłówki, viz, data, zawartość); lepsza zostaje, unikalne treści gorszej dopisz do lepszej albo przenieś do `niewykorzystane/` (biologia/niewykorzystane, chemia/plany/niewykorzystane). Identyczne kopie usuwaj od razu. Nic nie ginie bez porównania.
- Po zmianach: `python3 narzedzia/odswiez_wszystko.py`.

## Push i scalanie bez pytania (zasada stała, od 2026-10-20)
- Mogę sam robić commit, push na dowolną gałąź i scalać (też do `main`) bez polecenia, **jeśli nie tracimy danych**: scalanie bez przegranych treści (konflikty rozwiązane zasadą wyżej), build i testy bez błędów, brak `--force` i kasowania historii. Przy ryzyku utraty danych — najpierw zachować (niewykorzystane/), potem scalać.

## Git
- Klon: `git clone --depth 1` (jeden naraz, długi timeout); przy pracy nad jednym przedmiotem `git sparse-checkout set <folder>`.
- Gałąź pracy (CHE, BIO, wizualizacje): `claude/che-lekcje` — zbiorcza, opis w `PRZEKAZANIE.md`. Push na `main` działa (sprawdzone 2026-10-20).
- Po każdym zamkniętym etapie: commit i push, krótki wpis w `chemia/che-modular/PROGRESS.md`.

## Wizualizacje i obrazy — opis obowiązkowy (zawsze, każdy przedmiot)
- Każda wizualizacja, model, zlewka, wykres, schemat SVG i obraz w lekcji ma **opis słowny w md**: co dokładnie widać (elementy, oznaczenia, kolory, liczby, co się zmienia) i jaki wniosek uczeń ma z tego wyciągnąć.
- **Piszę opis od razu przy tworzeniu md** — linia `@opis …` zaraz pod każdą `@model` / `@zlewka` / `@viz` / obrazem (`![…]`, `<img>` + `alt`, `<svg>`). W HTML staje się ukrytym komentarzem `<!-- OPIS: … -->`.
- **Build to egzekwuje** (`chemia/che-modular/tools/md2html.py`, `biologia/bio/narzedzia/md2html_bio.py` → `narzedzia/opis_wizualizacji.py`): nowa lekcja bez opisu = błąd, build się nie wykona. Stare lekcje mają dług w `narzedzia/opis_dlug.json` — może tylko maleć (przy edycji lekcji uzupełniam opisy). Sprawdzenie bez budowania: `python3 narzedzia/opis_wizualizacji.py`.
- Każdy nowy skrypt md→HTML (inne przedmioty) ma wołać `OPIS.egzekwuj()` i zamieniać `@opis` przez `OPIS.komentarz()`.
- Cel: treść czytelna bez grafiki (eksport do Perplexity/LLM, czytniki ekranu, druk).

## Generowane katalogi
- Po zmianach lekcji jedno polecenie: `python3 narzedzia/odswiez_wszystko.py` (HTML wszystkich przedmiotów, pakiety i okładki, spisy, katalog grafik BIO, opisy, baza mała wizualizacji, MAPA). `--szybko` pomija budowę HTML. Kopie w `okladki/`, `chemia/pakiet/`, `olimpiada/LKO_pakiet/`, `wizualizacje-projekty/baza-mala/` są generowane — nie edytować ręcznie.

## Eksport do analizy (Perplexity)
- Rejestr weryfikacji: `WERYFIKACJA.md` (W1 = treść wysłanego zapisu, W2 = zakres). Po każdym audycie: surowa odpowiedź do `chemia/plany/audyty/` (lub `<przedmiot>/plany/audyty/`), poprawki do lekcji gotowej albo jako sekcja „AUDYT W1” do kanonu, wiersz w rejestrze. LaTeX z odpowiedzi → Unicode: `narzedzia/latex2uni.py`. Dla lekcji z kanonu (niegotowych) jednym poleceniem: `python3 narzedzia/audyt_do_kanonu.py <odpowiedź> [--uwaga KOD "tekst"]` (zapis surowy + sekcja AUDYT W1 + wiersz rejestru).
- **Archiwalne arkusze konkursów:** rejestr `olimpiada/zrodla/archiwum_arkuszy.json` (przedmiot, rok, etap I/II/III, plik, klucz, opis roku; `brak` = czego nie mamy). Nowy arkusz → wpis w JSON + `python3 narzedzia/spis_lekcji.py` (linki w `SPIS_LEKCJI.md` i we wszystkich `INDEKS.html`, kolumna „etap LKO” z legendą). Etap lekcji: `narzedzia/etap_lko.py`.
- **ZIP przekazania:** `python3 eksport/zip_przekazania.py` → `eksport/out/PRZEKAZANIE_<data>.zip`: `lekcje/<przedmiot>/<etap>/` (md+html), `archiwum_arkuszy/<przedmiot>/<etap>/<rok>/` (arkusz, klucz, OPIS_ROKU.md), `olimpiada/` (cała), `silniki/`, `przekazanie/`. Wysyłać na prośbę lub co 10 zmian.
- `python3 eksport/zbierz_lekcje.py` → `eksport/out/PERPLEXITY_<PRZEDMIOT>.md` (prompt na początku + wszystkie lekcje, jedna najnowsza wersja każdej). Katalog `out/` jest poza gitem.

## Polski — lekcje podstawowe (priorytet)
- **Kanon kursu: `polski/plany/POL_SPIS_TRESCI_v2.md`** (106 tematów, bloki POL.01–11, warstwy W0–W3, znaczniki `[SPRAWDZIAN]/[E8]/[KONKURS]/[LO]`, kolejność klas 7–8, priorytety produkcji). Stan plików/KB/audytów: `polski/plany/POL_KATALOG.md` ← `python3 narzedzia/spis_polski.py` (po każdej zmianie lekcji). Szkielety nowych lekcji: `--szkielety K02 T01` lub `--priorytet N` → `polski/lekcje/` (nie nadpisuje). Warstwy w md: `::: warstwa W2 [KONKURS]` … `:::`.
- Szkielety G01–G17 (części mowy, składnia) i S01–S06 (środki stylistyczne) w `polski/podstawy/`, generator `python3 narzedzia/szkielety_polski.py` (nie nadpisuje wypełnionych), paczka dla LLM `eksport/out/DO_WYPELNIENIA_PL_podstawy.md`. Wypełniony plik: zmienić `stan: PUSTY` → `stan: WYPEŁNIONY — model, data`, potem W1.

## Merytoryka
- Język lekcji: polski, poziom E8 (podstawa programowa). Dane liczbowe oznaczaj do weryfikacji, jeśli nie są pewne.

## GFX i modele
- Najpierw istniejące animacje, modele i zlewki (`chemia/che-modular/KATALOG_WIZUALIZACJI.md` — jeden katalog: modele i gfx z użyciem w lekcjach i statusem; oceny w `engine/registry/katalog_oceny.json`; szczegóły: `engine/src/gfx/KATALOG.md` i `KATALOG_MODELI.md` — pracownie z rozszerzeń) — rozszerzamy je i ulepszamy. Brakujący element (naczynie, przyrząd, przedmiot, efekt) budujemy od podstaw jako komponent wielokrotnego użytku (`engine/src/lekcja/rozszerzenia.js` albo plik w `engine/src/gfx/<przedmiot>/<rodzaj>/`) + wpis w katalogu, nie jednorazowo w lekcji.

## Silnik chemii — decyzja (2026-10-20)
- Obowiązuje **nowy mniejszy silnik modułowy**: `chemia/che-modular/engine/src/klocki/` + `engine/src/lekcja/rozszerzenia.js`, składany per lekcja przez `chemia/che-modular/tools/lite.py` (tylko modele użyte w lekcji).
- Duży `dist/che-viz.js` (2,8 MB, z `silnik.py`) NIE jest już używany w pakietach ani okładkach (`narzedzia/pakiety_okladki.py` → `lite.py`). Archiwum: `chemia/archiwum/che_v0_59/`.
- Wszystkie modele lekcji chemii działają już na klockach (stan 2026-10-20: `python3 chemia/che-modular/tools/lite.py chemia/che-modular/lessons-md/gotowe/*.md` nie zgłasza żadnego „tylko w pełnej wersji”). Nowy model = nowy klocek (`engine/src/klocki/`, wpis w `manifest.json`: `klocki` i `lekcje`), nie blok w `rozszerzenia.js`. Zanim napiszesz klocek, sprawdź `klocki/README.md` — palniki, spalanie z wychwytem gazu i skroplin (`palnik-gazowy`), `bilans-spalania`, `probowki-wybor`, `zbieranie-gazu`, `lancuch-przemian` już istnieją.

## Styl rysunków (jeden dla wszystkich przedmiotów)
- Każdy nowy rysunek/model: kolory i linie z `CHE.GFX.STYL` (`chemia/che-modular/engine/src/gfx/wspolne/styl/styl-tokeny.js`), zasady w `chemia/che-modular/STYL_WIZUALIZACJI.md`; kolory substancji realistyczne z `CHE.COLORS`. Kontrola: `python3 chemia/che-modular/tools/styl_sprawdz.py` (raport `STYL_RAPORT.md`).

## Plany kursu
- Spis kursu (kanon v0.3, 113 lekcji): `chemia/plany/CHE_SPIS_TRESCI.md` (generowany: `cd chemia && python3 plany/narzedzia/spis_tresci.py`, dane w `plany/narzedzia/kanon_dane.py`). Materiał wstępny lekcji: `chemia/lekcje_md/<grupa>/` — czytać tylko sekcję potrzebnej lekcji.

