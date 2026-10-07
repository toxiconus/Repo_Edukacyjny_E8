# CHE · lekcje (model „najpierw lekcje”, od 2026-10-07)

Otwórz `index.html` albo dowolną lekcję. Wszystkie lekcje korzystają z jednego pliku `che-viz.js`
(silnik, dane, GFX, wizualizacje, style z CHE_lab v0_57 — zamrożony, nie edytujemy).

| plik | lekcja |
|---|---|
| N01_tlenki.html | Tlenki |
| N02_wodorotlenki.html | Wodorotlenki i zasady |
| N03_kwasy.html | Kwasy |
| N04_sole.html | Sole |
| FIZ01_elektrostatyka.html | Elektrostatyka (fizyka) |

Lekcja = treść (JSON jak w aplikacji) + `<script src="che-viz.js">` + `CHE.STANDALONE.open('KOD')`.
Wygląd i modele identyczne jak w aplikacji v0_57 (sprawdzone: ta sama treść, wszystkie modele się montują, „Zobacz w zlewce” działa).

Archiwum silnika, atlasu, wzorcowni i kanonu md: gałąź `claude/che-lab-archiwum-v0_57`.
Odtworzenie che-viz.js: w archiwum `python3 build.py && python3 tools/split_viz.py` → `dist/`.
