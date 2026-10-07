# STATE
wersja: 0.57 → cel: 0.58
cel sesji: strona startowa (skróty do lekcji, „Kontynuuj”, liczby z silnika, naprawiony tryb Noc) + przekazanie
ostatnia zmiana: 2026-10-07 — modules/base/027_html_che-landing.html, 136_che-home-gate-v0182.js (fillLanding, che.lastLesson, CHE.APP_VERSION), 025_che-gate-boot-css.css (landing v0.57, noc bez filtra), build.py (__CHE_APP_VERSION__), lesson/sole_new.html (<title> v1.1), test/hub.js (ścieżka)

## Moduły (plik | rola | zależy od | status)
- src/p0_phys.js | CHE.PHYS (gazy, płomień, electro: coulomb, field, potential, electrons, share, contact, ground, transfer, electroscope) | — | stabilny
- src/fiz_elektro.js | CHE.FIZ.ELEKTRO (tribo, ρ, εr, delegacja do PHYS.electro, audit 14) | PHYS | stabilny
- src/oxides.js + d_oxides_*.js (gen_oxides.py) | CHE.OXIDES / DATA.OXIDES (39 tlenków, 57 reakcji) | REACTION | stabilny
- src/hydroxides.js + d_hydroxides_*.js (gen_hydroxides.py) | CHE.HYDROXIDES (19, 45 reakcji, Ksp, neutral, heat; audit 19) | SOLUBILITY_TABLE, OXIDES | stabilny
- src/stoich.js | CHE.STECH (≠ stare CHE.STOICH 2.17) | REACTION | stabilny
- src/x_elektro.js, x_ions.js, x_rx_n01.js, x_rx_n04.js, p5c_rx.js | GFX.electro, GFX.ions, GFX.rx (specy reakcji; N04: strącanie, węglany, hydrat, odczyn soli hyd-* qualitative) | COLORS | stabilny
- src/v_*.js | widoki: n01-*, n02-*, fiz-*, kw-*, sole-*, stech-*, pracownie (v_pracownia.js), test silnika | silniki | stabilny
- src/atlas_visual.css, atlas_rx_list.js | Atlas: nagłówek, wykres faz, katalog reakcji | modules/base (atlas) + src | stabilny
- src/atlas_lessons.js | CHE.ATLAS_LESSONS (forElement, forFormula, open): panel „W lekcjach” w Karcie danych, znaczniki lekcji w Związkach i na liście pierwiastków (Z) | OXIDES, HYDROXIDES, ACIDS, SOLUBILITY_TABLE+IONIC, REACTION_DATA.lesson | stabilny
- lesson/md_n01_sync.py, md_n02_sync.py | sekcje SYNC w kanonie md z zrzutów silnika (test/n01_engine.json z test/n01_dump_eval.js) | dump.js | stabilny
- src/consistency.js | audyty ENG/LES/ATL/FIZ (N/N) | wszystko | stabilny
- src/viz_retire.js + tools/prune.js | wycofane widoki → następcy | VIEW | stabilny
- lesson/lesson_lib.py | narzędzia przebudowy lekcji | test/rx_norm.json | stabilny
- lesson/lesson_merge.py (+ n01_merge.py, n02_merge.py) | scalanie sekcji, dedup, numeracja, SVG → HTML, kontrola wiedzy | bs4 | stabilny
- tools/md_split.py, md_assemble.py, md_lesson_layout.py | kanon md: CHE.core.md + lekcje/<uid>.md → CHE.all | — | stabilny
- src/d_mol3d_oxides.js | CHE.DATA.MOL3D_SETS (zestawy modelu 3D wg lekcji); SO₃, N₂O, NO₂ w MOL3D (modules/base/006) | MOLECULE | stabilny

## Build
- `python3 build.py [--lessons] [--data] [--check]`; spis kodu: docs/INDEX_KODU.md; nowy moduł = plik w src/ + wpis w manifest.json.

## Kontrakty
- Widok: CHE.VIEW.define(id,{title,tag,hint,foot,build(host)}); przycisk w lekcji: .che-lesson-viz-ref + postMessage CHE_LESSON_OPEN_VISUAL.
- Lekcja: JSON w <script id="che-<kod>-src">, L.register('KOD',{code,title,subject,source,status,dataScope,visuals,description}).
- Znaczniki w lekcjach: data-rx (klucz REACTION), data-hy/-hy-sol, data-hy-heat, data-ox/-ox-col, data-fiz*, data-fiz-share/-sharer + data-fiz-res.
- Pracownia: C.PRACOWNIA.define(id,{title,groups:[[nazwa,[klucze]]]}).

## Zasady lokalne
- Bez emoji. Treści nie usuwamy (diff zdań po przebudowie). Jeden model = jedno miejsce w lekcji. md ↔ HTML na plus.
- Chat 2–4 zdania; zmiany w docs/ZMIANY.md.

## Decyzje
- 2026-10-07 — strona startowa v0.57: Lekcje (kafelki z rejestru CHE.LESSONS, kolejność chemia → fizyka), Kontynuuj (localStorage che.lastLesson), Narzędzia (Atlas, Wizualizacje, Przedmioty, Silnik), liczby z silnika; wersja wstrzykiwana przy buildzie (CHE.APP_VERSION). Tryb Noc na stronie startowej: paleta zmiennych bez filtra invert (filtr zostaje dla paneli).
- 2026-10-07 — N04 v1.1: sekcje 0.1–0.3, rdzeń E8 §1–11, ambitne §12–15, praktyka §16–20, powtórka §21–24, dodatek A; id sekcji słowne (definicja, wzory, …); tabele w lekcji ze znacznikami data-cmp / data-sol / data-salt / data-ppt audytowane z CHE.IONIC i CHE.COLORS; „Zobacz w zlewce” → sole-doswiadczenia-v01 (host._show).
- 2026-10-07 — etap 3 md: N04 wydzielone (lekcje/CHE.02.N04.sole.md, 10 części); PRZELOT N-F i 111.9 zostają w CHE.core.md (wspólne bloku N, jak N-D dla N03).
- 2026-10-07 — N03: sekcje startowe numerowane 0.1–0.3, rdzeń od 1 (Moc = §6, pH = §7 — audyty LES-01/02 szukają nagłówków 6.6 i 7.3); zewnętrzna nawigacja lekcji (aside, nagłówek, wznów, dolny pasek) usunięta jak w N01/N02.
- 2026-10-07 — N01, N02, N03: edycja ręczna lesson/*_new.html; buildery zamrożone; kontrola wiedzy tools/lesson_check.py + lesson/edits_<KOD>.md.
- 2026-10-07 — kody: N03 Kwasy, N04 Sole, FIZ-01 Elektrostatyka (F = fundamenty chemii); uid PRZEDMIOT.GRUPA.KOD.temat (np. CHE.02.N01.tlenki) — pliki md lekcji noszą nazwę uid.
- 2026-10-07 — etap 3 za zgodą użytkownika: N01, N02, N03 (lekcje/CHE.02.N03.kwasy.md; wspólne sekcje 178, 179 zostają w CHE.core.md).
- 2026-10-07 — ZMIANY.md zamiast opisów na czacie (oszczędność tokenów w historii rozmowy).
- 2026-10-07 — etap 2 wykonany (akceptacja użytkownika): build z manifest.json + modules/base, bez v0_30 i patch_big (archiwum tools/legacy). Wynik bajtowo zgodny.
- 2026-10-07 — „zasada zachowania potencjału” nie istnieje: w lekcji zasada zachowania ładunku + wyrównanie potencjałów (LO).

## TODO (kolejność)
1. Etap 3 md: wydzielić F00–F09 (PARTS w tools/md_split.py; `python3 tools/md_split.py core.md wynik.md KOD` — tylko wskazane kody). N01–N04 wydzielone.
2. N02 ← treści md v19.75/v19.77 (lekcje/CHE.02.N02.wodorotlenki.md) — sprawdzić, czy redakcja v8.3 je objęła.
3. N05 Wodorki: lekcja HTML (brak) — zakres z md (# N05 — Wodorki, 119, 257) wg STANDARD_LEKCJI.
4. FIZ-01: zakres wg Nowa Era „Spotkania z fizyką 8”.

## Znane błędy
- Tryb Noc w panelach (Atlas, Wizualizacje, lekcje) nadal działa przez filtr invert(.93) na <html> (moduły 003, 060) i równocześnie paletę zmiennych z 025 — sprawdzić, czy panele nie mają tego samego „podwójnego odwrócenia” co dawna strona startowa.

## Testy: ostatni wynik
- v0_57: spójność 47/47; aud.js 43 sprawdzenia (30 ok, reszta „?”), 0 FAIL; lekcje N01–N04, FIZ-01 0 błędów JS; ts.js 0 błędów; hub.js 100/100; strona startowa: 5 kafelków lekcji, Kontynuuj po zamknięciu lekcji, Noc ciemna, 390 px bez przewijania poziomego.
- v0_56: lesson_check N04 OK (246 → 724 zdań), N03 OK; LES-N04-01..05 ok; test/prac.js LES=N04 — właściwe zestawy.
- Uwaga: test/aud.js i dump.js wymagają nazwy pliku (bez out/); build wymaga globalnego acorn (npm i -g acorn) i NODE_PATH=$(npm root -g).
