# Przeniesione → `chemia/che-modular/`

Od 2026-10-08 praca CHE idzie **tylko na gałęzi `claude/che-lekcje`**, w folderze `chemia/che-modular/`.
Start: `CLAUDE.md` (korzeń repo) → `chemia/che-modular/PLAN_PRACY.md` → `tail PROGRESS.md`.

| było (`chemia/che/`) | jest |
|---|---|
| `md/*.md` (lekcje) | `che-modular/lessons-md/gotowe/` |
| `szablon/` (lekcja.css/js, rozszerzenia.js) | `che-modular/engine/src/lekcja/` |
| `narzedzia/md2html.py`, `sprawdz.js` | `che-modular/tools/md2html.py`, `test_lekcje.cjs` (`python3 tools/che.py lekcje / test`) |
| `dist/che-viz.js` (zamrożony) | składany z modułów: `tools/silnik.py` (identyczny bajt w bajt) |
| `KATALOG_MODELI.md`, `STANDARD_LEKCJI.md` | `che-modular/` |
| `narzedzia/spis_tresci.py`, `kanon_dane.py` | `chemia/plany/narzedzia/` |
| stary system v0_59 | `chemia/archiwum/che_v0_59/` (tylko do odczytu) |
