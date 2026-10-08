# PRZEKAZANIE — całe repo · 2026-10-08 18:40

Jeden punkt startu dla każdej sesji. Szczegóły są w przekazaniach obszarów (niżej) — czytaj tylko ten, którego dotyczy zadanie.

## Gałęzie
- **`claude/che-lekcje` = gałąź zbiorcza.** 2026-10-08 scalone do niej: `claude/wizualizacje-projekty` (folder `wizualizacje-projekty/`), `claude/bio-lekcje` (`biologia/`), wcześniej `claude/chemia-podzial` i `claude/project-thread-71s81b` (zawarte w całości).
- Pozostałe gałęzie są już w `claude/che-lekcje` — nowe prace zaczynać od niej. Wyjątek: `claude/che-lab-archiwum-v0_57` (osobna historia, archiwum źródeł v0_57; nie scalać).
- `main` (@ae82cb8) — aktualizuje użytkownik przez PR `claude/che-lekcje` → `main` na github.com (push na `main` = 403).
- Płytki klon: po `git fetch` hook może fałszywie zgłaszać „unpushed commits” — `git fetch origin claude/che-lekcje:refs/remotes/origin/claude/che-lekcje` i `git branch -u origin/claude/che-lekcje`.

## Obszary
| Obszar | Przekazanie | Stan w skrócie |
|---|---|---|
| Chemia — silnik, lekcje F/N, atlas | `chemia/che-modular/PRZEKAZANIE.md` (+ `PROGRESS.md`) | 12 lekcji (F01–F06, N01–N05, FIZ01), test 12/12. Dane CHE.DATA w `engine/src/dane/` (krok 1a–1b), profil per lekcja (F04 1,13 MB; reszta do zrobienia), warstwa `engine/src/dodatki/` (atlas-gfx: `atomBohr`, `orbitalCloud`; atlas rysuje chmurę komponentem), spis dublowania §6. |
| Wizualizacje dla lekcji bez grafik | `wizualizacje-projekty/PRZEKAZANIE.md` | `PROJEKT.md` (CHE F06–F21, BIO, FIZ) + `wzorcownia.html` (9 prototypów). Czeka na akceptację użytkownika. |
| Biologia | `biologia/bio/PRZEKAZANIE.md` | L010 gotowa (bio-viz.js, build `md2html_bio.py`, test `sprawdz_bio.js`); następna L011. |

## Decyzje użytkownika (wspólne)
- Zero utraty danych starego silnika — dzielić i ulepszać, nie wyrzucać; nowe rzeczy jako komponenty wielokrotnego użytku + wpis w katalogu.
- Lekcje F tylko na polecenie, po jednej (ostatnio F06, 2026-10-08 17:36).
- Dane niepewne oznaczać „do weryfikacji”.
