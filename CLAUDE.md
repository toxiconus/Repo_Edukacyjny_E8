# CLAUDE.md — zasady dla Claude w tym repo

Przeczytaj ten plik jako pierwszy, zanim otworzysz cokolwiek innego. Obowiązuje każdą sesję i każdy wątek, który pracuje na tym repo.

## Kolejność startu
1. Ten plik.
2. `MAPA.md` — rozmiary i rola plików (⚠ = tylko grep, ⛔ = nie czytać). Pełne zasady: skill `.claude/skills/oszczedzanie-tokenow`.
3. `chemia/che/PRZEKAZANIE.md`: stan, git, znane błędy, następne kroki (praca CHE).
4. Tylko pliki dotyczące zadania (np. `chemia/che/md/<KOD>_*.md`) i potrzebne fragmenty `SZABLON_LEKCJI.md` / `KATALOG_MODELI.md`.

Nie przeglądaj repo „na wszelki wypadek”. Nie czytaj `.specstory/`, `biologia/`, `angielski/` ani starych `chemia/*.html`, jeśli zadanie ich nie dotyczy.

## Oszczędzanie tokenów (zawsze, chyba że użytkownik poprosi inaczej)
- **Wyjątek:** gdy zadanie wymaga więcej tokenów, by nie stracić jakości, można dla niego ominąć oszczędzanie — ale przed startem zapytaj albo poinformuj jednym zdaniem: „W tym zadaniu nie mogę oszczędzać tokenów na <czym>, bo <powód>.” Tylko ta rzecz, tylko to zadanie.
- Plików > 50 KB nie czytaj w całości: najpierw `grep -n`, potem fragment (`sed -n a,bp`). Dotyczy zwłaszcza `chemia/che/dist/che-viz.js` (zamrożony silnik, nie edytować) i wygenerowanych HTML.
- Lekcje edytuje się w `md/`; HTML robi `python3 narzedzia/md2html.py` (zero tokenów). Wygenerowanego HTML nie czytaj ani nie poprawiaj ręcznie.
- Wyniki poleceń skracaj (`| tail -3`, `| head`, liczniki zamiast list). Testy jednym poleceniem, pokazuj tylko błędy (`node narzedzia/sprawdz.js`).
- Wiele zmian w jednym pliku: jeden skrypt z `assert s.count(old)==1` zamiast wielu edycji.
- Bez komentowania kroków w czacie. Odpowiedź końcowa po polsku, 1–4 zdania: co zmienione, wynik testów, następny krok.
- Pytaj tylko, gdy decyzja naprawdę należy do użytkownika.
- Po dodaniu/usunięciu plików: `python3 narzedzia/mapa.py` (odświeża MAPA.md).
- Porównania wersji przez git (`git diff --stat`), nie przez czytanie plików; diff HTML i `che-viz.js` jest wyłączony w `.gitattributes`.
- Przy kończącym się limicie: najpierw zapisz stan (commit + wpis w PRZEKAZANIE), potem najmniejszy działający krok.

## Git
- Klon: `git clone --depth 1` (jeden naraz, długi timeout); przy pracy nad jednym przedmiotem `git sparse-checkout set <folder>`.
- Gałąź pracy CHE: `claude/che-lekcje`, BIO: `claude/bio-lekcje`. Push tylko na gałęzie `claude/...` (push na `main` kończy się 403).
- Po każdym zamkniętym etapie: commit i push, krótki wpis w `PRZEKAZANIE.md`.

## Merytoryka
- Język lekcji: polski, poziom E8 (podstawa programowa). Dane liczbowe oznaczaj do weryfikacji, jeśli nie są pewne.
