# Archiwum chemii — tylko do odczytu

Przeniesione 2026-10-08 przy przejściu na `chemia/che-modular/`. Nie edytować. Historia sprzed przeniesienia: commit `c36df4c` (gałąź `claude/che-lekcje`).

| Folder | Co to | Uwagi |
|---|---|---|
| `che_v0_59/` | Działający system v0_59: zamrożony silnik `dist/che-viz.js` (2,8 MB), `narzedzia/md2html.py` (md → HTML), `szablon/` (wygląd, `rozszerzenia.js` — modele, zlewki, reakcje N05), dokumenty `SZABLON_LEKCJI`, `STANDARD_LEKCJI`, `KATALOG_MODELI`, `PRZEKAZANIE` (stan i znane błędy v0_59). | Treść lekcji (md) przeniesiona do `che-modular/lessons-md/_zrodla_v0_59/`. `rozszerzenia.js` i opisy dyrektyw będą potrzebne w K4/K6. Narzędzia migracji (`html2md`, `porownaj`, `split_viz`…) — jednorazowe, nieużywane. |
| `stare_2025/` | Najstarsze lekcje chemii (L000–L002, L013, CHEMIA_PODSTAWA_PLUS v1.1 md 0,5 MB). | Sprzed silnika CHE. Tylko źródło pomysłów. |

Pełne archiwum projektu sprzed v0_58 (monolit v0_57, kanon `CHE.core.md` 2 MB, buildery): gałąź `claude/che-lab-archiwum-v0_57`. Z niej `che-modular/tools/pobierz_moduly.sh` odtwarza moduły.
