# CHE · lekcje — praca „najpierw lekcje” (od v0_58, 2026-10-07)

**Otwórz:** `dist/index.html` (wszystkie pliki z `dist/` muszą leżeć w jednym folderze).

| folder / plik | co to |
|---|---|
| `md/` | **źródło lekcji** — tu piszemy i poprawiamy treść (N01, N02, N03, N04, FIZ01) |
| `SZABLON_LEKCJI.md` | format md (sekcje, karty, doświadczenia, modele, fiszki, test…) |
| `STANDARD_LEKCJI.md` | kolejność części i zasady treści |
| `KATALOG_MODELI.md` | modele silnika do `@model` i klucze do `@zlewka` |
| `szablon/` | wspólny wygląd `lekcja.css` i zachowanie `lekcja.js`, spis `index.html` |
| `narzedzia/md2html.py` | md → `dist/*.html` |
| `dist/che-viz.js` | silnik, dane, GFX, modele z CHE_lab v0_57 — **zamrożony** |

## Praca
```
python3 narzedzia/md2html.py                 # wszystkie lekcje
python3 narzedzia/md2html.py md/N05_wodorki.md   # jedna
```
Nowa lekcja = nowy plik `md/<KOD>_<nazwa>.md` (nagłówek jak w SZABLON_LEKCJI.md) → pojawia się w spisie sama.

## Historia
- Archiwum silnika, atlasu, wzorcowni, kanonu md i starych builderów: gałąź `claude/che-lab-archiwum-v0_57`.
- Migracja v0_57 → md: `narzedzia/html2md.py`, `styl_wlasny.py`, `przebuduj_z_html.sh` (jednorazowe; treść po migracji = oryginał, sprawdzone `porownaj.py`).
- `che-viz.js` odtwarzasz z archiwum: `python3 build.py && python3 tools/split_viz.py`.
