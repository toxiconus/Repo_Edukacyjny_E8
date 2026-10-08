# CLAUDE.md — zasady dla Claude w tym repo

Przeczytaj ten plik jako pierwszy, zanim otworzysz cokolwiek innego. Obowiązuje każdą sesję i każdy wątek, który pracuje na tym repo.

## Kolejność startu
1. Ten plik.
2. `chemia/che-modular/PRZEKAZANIE.md` (stan, jak pracować, decyzje użytkownika, następne kroki), potem `PLAN_PRACY.md` w razie potrzeby i `tail PROGRESS.md`. Polecenia, dialekt MD, GFX: `SYSTEM.md` (czytaj tylko potrzebną sekcję).
3. Tylko pliki dotyczące zadania (np. `lessons-md/gotowe/<KOD>_*.md`, jeden tool z `tools/`).

Nie przeglądaj repo „na wszelki wypadek”. Nie czytaj `.specstory/`, `biologia/`, `angielski/`, `chemia/archiwum/` (tylko do odczytu, opis w `archiwum/OPIS.md`), `PODSUMOWANIE.md`/`AUDYT_I_PLAN.md`, jeśli zadanie ich nie dotyczy.

## Oszczędzanie tokenów (zawsze, chyba że użytkownik poprosi inaczej)
- Plików > 50 KB nie czytaj w całości: najpierw `grep -n`, potem fragment (`sed -n a,bp`). Dotyczy zwłaszcza `modules/_anon_001.js`, `modules/che-lab-engine-v001.js`, packów w `dist/` i wygenerowanych HTML.
- Lekcje edytuje się w MD (`lessons-md/`); HTML robią narzędzia z `chemia/che-modular/tools/` (zero tokenów). Wygenerowanego HTML nie czytaj ani nie poprawiaj ręcznie. `modules/` odtwarza `sh tools/pobierz_moduly.sh`.
- Wyniki poleceń skracaj (`| tail -3`, `| head`, liczniki zamiast list). Testy jednym poleceniem, pokazuj tylko błędy (`node narzedzia/sprawdz.js`).
- Wiele zmian w jednym pliku: jeden skrypt z `assert s.count(old)==1` zamiast wielu edycji.
- Bez komentowania kroków w czacie. Odpowiedź końcowa po polsku, 1–4 zdania: co zmienione, wynik testów, następny krok.
- Pytaj tylko, gdy decyzja naprawdę należy do użytkownika.
- Przy kończącym się limicie: najpierw zapisz stan (commit + wpis w `chemia/che-modular/PRZEKAZANIE.md` i `PROGRESS.md`), potem najmniejszy działający krok.

## Biologia (BIO)
- Praca BIO: najpierw `biologia/bio/PRZEKAZANIE.md`, potem tylko md lekcji (`biologia/bio/md/`) i `biologia/bio/BIO_KATALOG.md`. Gałąź `claude/bio-lekcje`.
- Build `python3 biologia/bio/narzedzia/md2html_bio.py`, test `node biologia/bio/narzedzia/sprawdz_bio.js`. Wygenerowanego HTML nie czytać.

## Git
- Gałąź pracy CHE: `claude/che-lekcje`. Push tylko na gałęzie `claude/...` (push na `main` kończy się 403).
- Po każdym zamkniętym etapie: commit i push, krótki wpis w `chemia/che-modular/PROGRESS.md`.

## Merytoryka
- Język lekcji: polski, poziom E8 (podstawa programowa). Dane liczbowe oznaczaj do weryfikacji, jeśli nie są pewne.

## GFX i modele
- Najpierw istniejące animacje, modele i zlewki (`chemia/che-modular/engine/src/gfx/KATALOG.md` — silnik, `chemia/che-modular/KATALOG_MODELI.md` — modele i pracownie z rozszerzeń) — rozszerzamy je i ulepszamy. Brakujący element (naczynie, przyrząd, przedmiot, efekt) budujemy od podstaw jako komponent wielokrotnego użytku (`engine/src/lekcja/rozszerzenia.js` albo plik w `engine/src/gfx/<przedmiot>/<rodzaj>/`) + wpis w katalogu, nie jednorazowo w lekcji.

## Plany kursu
- Spis kursu (kanon v0.3, 113 lekcji): `chemia/plany/CHE_SPIS_TRESCI.md` (generowany: `cd chemia && python3 plany/narzedzia/spis_tresci.py`, dane w `plany/narzedzia/kanon_dane.py`). Materiał wstępny lekcji: `chemia/lekcje_md/<grupa>/` — czytać tylko sekcję potrzebnej lekcji.

