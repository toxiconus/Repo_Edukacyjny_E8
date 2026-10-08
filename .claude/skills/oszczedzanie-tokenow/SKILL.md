---
name: oszczedzanie-tokenow
description: Tryb oszczędnej pracy w repo Repo_Edukacyjny_E8 (CHE, BIO i inne przedmioty) — git zamiast uploadów, MAPA.md zamiast przeglądania, md→HTML skryptem, krótki czat, zapis stanu przy limitach.
---

# Oszczędzanie tokenów — zasady pracy w tym repo

Użytkownik ma limity (godzinowe / tygodniowe). Cel: maksimum pracy na token bez utraty merytoryki. Domyślnie ZAWSZE oszczędnie, chyba że użytkownik poprosi inaczej.

**Wyjątek — jakość ważniejsza niż limit:** gdy zadanie naprawdę wymaga więcej (np. pełna lektura dużego pliku, wiele zrzutów, szeroki przegląd), oszczędzanie można dla tego zadania pominąć — ale zawsze najpierw o tym mówię: pytam (gdy koszt duży) albo informuję jednym zdaniem przed startem: „W tym zadaniu nie mogę oszczędzać tokenów na <czym>, bo <powód>.” Wyjątek dotyczy tylko tego zadania i tylko tej rzeczy; reszta pracy dalej oszczędnie.

## 1. Start sesji (stała kolejność, nic „na wszelki wypadek”)
1. `CLAUDE.md` (ładuje się sam).
2. `MAPA.md` — rozmiary i rola plików; pliki z ⚠ czytać tylko grep/fragmentami.
3. `PRZEKAZANIE.md` w katalogu głównym, potem przekazanie obszaru (`chemia/che-modular/PRZEKAZANIE.md`, `biologia/bio/PRZEKAZANIE.md`) + `tail PROGRESS.md` — tylko sekcje „Stan” i „Następne kroki”: `sed -n '/## 1/,/## 2/p'`, `sed -n '/## 7/,$p'`.
4. Dopiero pliki konkretnego zadania.

Po przerwanej turze: `git status -s | head`, `git log --oneline -3`, `git diff --stat` — zanim cokolwiek zaczniesz od nowa.

## 2. Git zamiast uploadów i wersji w nazwach
- Klon płytki: `git clone --depth 1` (długi timeout, jeden klon naraz). Potrzebna gałąź: `git config --add remote.origin.fetch '+refs/heads/<g>:refs/remotes/origin/<g>'` + `git fetch --depth 1 origin <g>`.
- Duże repo / jeden przedmiot: `git sparse-checkout set chemia/che` (lub inny folder) — reszta nie trafia na dysk ani w grep.
- Historia = commity, nie `v0_NN` w nazwach plików. Porównania: `git diff --stat`, `git diff -U1 -- plik | head -80`. Nigdy pełny diff wygenerowanego HTML (oznaczone w `.gitattributes` jako `-diff`).
- Push tylko na gałęzie `claude/…` (main → 403). Przed pushem z płytkiego klonu: `git fetch origin <gałąź_bazowa>` (inaczej 413).
- Pliki od użytkownika (zip, html) zamiast czytać — rozpakuj do repo, `git add`, `git diff --stat` pokaże, co się zmieniło względem ostatniej wersji.

## 3. Czytanie
- Plików > 50 KB nie czytaj w całości: `grep -n` / `grep -o '.{0,120}klucz.{0,200}' | cut -c1-250`, potem `sed -n a,bp`.
- Nigdy: `.specstory/`, `chemia/archiwum/` (tylko na wyraźną prośbę), `chemia/che/dist/che-viz.js` (zamrożony), duże moduły `chemia/che-modular/modules/*` w całości, wygenerowane `dist/*.html`, stare `*PODSTAWA_PLUS*` całe (tylko grep po kodzie lekcji, np. `N06`, `L012`).
- Z HTML czytaj sam tekst: `python3 -c` z wycięciem `<script>/<style>`.
- Przed nowym modułem: grep nazwy (czy już istnieje) zamiast czytania katalogów.
- Szerokie przeglądy wielu plików → subagent (Explore), biorę tylko wnioski.

## 4. Pisanie i edycja
- Treść lekcji tylko w `md/`; HTML robi skrypt (`md2html.py`) — zero tokenów, wyniku nie czytać ani nie poprawiać ręcznie.
- Wiele zmian w pliku → jeden skrypt python z `assert s.count(old)==1`.
- Nowe pliki od razu kompletne (Write), bez dłubania drobiazgów kolejnymi edycjami.
- Tabele/spisy generuj z danych (regex po md), nie przepisuj ręcznie.
- Usuwanie starego: najpierw mapa „stare → następca” (odwracalne), fizyczne usunięcie osobnym commitem i tylko po zgodzie użytkownika.
- Po dodaniu/usunięciu plików: `python3 narzedzia/mapa.py` (odświeża MAPA.md).

## 5. Testy i podgląd
- Testy jednym poleceniem, tylko błędy (`node narzedzia/sprawdz.js`, `| grep -v ^OK | head`).
- Zrzuty: tylko zmienione rzeczy, kilka → jeden kolaż w połowie rozdzielczości. Tryb nocny pomijać (użytkownik go nie używa).

## 6. Czat
- Między narzędziami bez komentarzy. Odpowiedź końcowa po polsku, 1–4 zdania: co zmienione, wynik testów, następny krok.
- Pytania tylko o decyzje użytkownika: AskUserQuestion, 1 pytanie z opcjami.
- Pliki wysyłaj tylko gotowe (SendUserFile, 1–3 sztuki), bez opisu zawartości. Zwykle wystarczy push — użytkownik ma je na GitHubie.

## 7. Stan pracy w repo, nie w rozmowie
- Co zamknięty etap: commit + push + 1–3 linie w PRZEKAZANIE (sekcja „Stan” / „Następne kroki”), wersja +0.01.
- Nowy wątek startuje z samego „<PRZEDMIOT>: <zadanie>, lekcja <KOD>” — bez załączników.

## 8. Przy kończącym się limicie
1. Najpierw commit + push + wpis w PRZEKAZANIE (nawet niedokończone, na gałęzi `claude/…`).
2. Potem najważniejsza rzecz z listy, najmniejszym zakresem, kończona działającą wersją.
3. Kroki małe i przetestowane — przerwanie niczego nie psuje.
