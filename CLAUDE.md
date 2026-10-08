# CLAUDE.md — zasady dla Claude w tym repo

Przeczytaj ten plik jako pierwszy, zanim otworzysz cokolwiek innego. Obowiązuje każdą sesję i każdy wątek, który pracuje na tym repo.

## Kolejność startu
1. Ten plik.
2. `chemia/che-modular/PLAN_PRACY.md`: cele, audyt, kroki K0–K8 (praca CHE). Potem `tail PROGRESS.md`. Polecenia, dialekt MD, GFX: `SYSTEM.md` (czytaj tylko potrzebną sekcję).
3. Tylko pliki dotyczące zadania (np. `lessons-md/_zrodla_v0_59/<KOD>_*.md`, jeden tool z `tools/`).

Nie przeglądaj repo „na wszelki wypadek”. Nie czytaj `.specstory/`, `biologia/`, `angielski/`, `chemia/archiwum/` (tylko do odczytu, opis w `archiwum/OPIS.md`), `PODSUMOWANIE.md`/`AUDYT_I_PLAN.md`, jeśli zadanie ich nie dotyczy.

## Oszczędzanie tokenów (zawsze, chyba że użytkownik poprosi inaczej)
- Plików > 50 KB nie czytaj w całości: najpierw `grep -n`, potem fragment (`sed -n a,bp`). Dotyczy zwłaszcza `modules/_anon_001.js`, `modules/che-lab-engine-v001.js`, packów w `dist/` i wygenerowanych HTML.
- Lekcje edytuje się w MD (`lessons-md/`); HTML robią narzędzia z `chemia/che-modular/tools/` (zero tokenów). Wygenerowanego HTML nie czytaj ani nie poprawiaj ręcznie. `modules/` odtwarza `sh tools/pobierz_moduly.sh`.
- Wyniki poleceń skracaj (`| tail -3`, `| head`, liczniki zamiast list). Testy jednym poleceniem, pokazuj tylko błędy (`node narzedzia/sprawdz.js`).
- Wiele zmian w jednym pliku: jeden skrypt z `assert s.count(old)==1` zamiast wielu edycji.
- Bez komentowania kroków w czacie. Odpowiedź końcowa po polsku, 1–4 zdania: co zmienione, wynik testów, następny krok.
- Pytaj tylko, gdy decyzja naprawdę należy do użytkownika.
- Przy kończącym się limicie: najpierw zapisz stan (commit + wpis w PRZEKAZANIE), potem najmniejszy działający krok.

## Git
- Gałąź pracy CHE: `claude/che-lekcje`. Push tylko na gałęzie `claude/...` (push na `main` kończy się 403).
- Po każdym zamkniętym etapie: commit i push, krótki wpis w `chemia/che-modular/PROGRESS.md`.

## Merytoryka
- Język lekcji: polski, poziom E8 (podstawa programowa). Dane liczbowe oznaczaj do weryfikacji, jeśli nie są pewne.
