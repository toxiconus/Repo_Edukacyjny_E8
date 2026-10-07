# CLAUDE.md — zasady dla Claude w tym repo

Przeczytaj ten plik jako pierwszy, zanim otworzysz cokolwiek innego. Obowiązuje każdą sesję i każdy wątek, który pracuje na tym repo.

## Kolejność startu
1. Ten plik.
2. `chemia/che/PRZEKAZANIE.md`: stan, git, znane błędy, następne kroki (praca CHE).
3. Tylko pliki dotyczące zadania (np. `chemia/che/md/<KOD>_*.md`) i potrzebne fragmenty `SZABLON_LEKCJI.md` / `KATALOG_MODELI.md`.

Nie przeglądaj repo „na wszelki wypadek”. Nie czytaj `.specstory/`, `biologia/`, `angielski/` ani starych `chemia/*.html`, jeśli zadanie ich nie dotyczy.

## Oszczędzanie tokenów (zawsze, chyba że użytkownik poprosi inaczej)
- Plików > 50 KB nie czytaj w całości: najpierw `grep -n`, potem fragment (`sed -n a,bp`). Dotyczy zwłaszcza `chemia/che/dist/che-viz.js` (zamrożony silnik, nie edytować) i wygenerowanych HTML.
- Lekcje edytuje się w `md/`; HTML robi `python3 narzedzia/md2html.py` (zero tokenów). Wygenerowanego HTML nie czytaj ani nie poprawiaj ręcznie.
- Wyniki poleceń skracaj (`| tail -3`, `| head`, liczniki zamiast list). Testy jednym poleceniem, pokazuj tylko błędy (`node narzedzia/sprawdz.js`).
- Wiele zmian w jednym pliku: jeden skrypt z `assert s.count(old)==1` zamiast wielu edycji.
- Bez komentowania kroków w czacie. Odpowiedź końcowa po polsku, 1–4 zdania: co zmienione, wynik testów, następny krok.
- Pytaj tylko, gdy decyzja naprawdę należy do użytkownika.
- Przy kończącym się limicie: najpierw zapisz stan (commit + wpis w PRZEKAZANIE), potem najmniejszy działający krok.

## Git
- Gałąź pracy CHE: `claude/che-lekcje`. Push tylko na gałęzie `claude/...` (push na `main` kończy się 403).
- Po każdym zamkniętym etapie: commit i push, krótki wpis w `PRZEKAZANIE.md`.

## GFX i modele
- Najpierw istniejące animacje, modele i zlewki (`chemia/che/KATALOG_MODELI.md`) — rozszerzamy je i ulepszamy. Brakujący element (naczynie, przyrząd, przedmiot, efekt) budujemy od podstaw jako komponent wielokrotnego użytku w `szablon/rozszerzenia.js` + wpis w katalogu, nie jednorazowo w lekcji.

## Merytoryka
- Język lekcji: polski, poziom E8 (podstawa programowa). Dane liczbowe oznaczaj do weryfikacji, jeśli nie są pewne.
