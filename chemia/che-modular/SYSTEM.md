# SYSTEM — polecenia, dialekt MD, szablony, GFX (jedno źródło zasad)

Ten plik zastępuje rozproszone opisy z ZIP (`MAKRA*.md`, `MD_CEGIELKI.md`, `SILNIK_MD_HTML.md`) i z v0_59 (`SZABLON_LEKCJI.md`). Tamte zostają jako historia.

## 1. Mapa

| Warstwa | Gdzie | Edytujemy? |
|---|---|---|
| Treść lekcji (MD) | `lessons-md/<KOD>/LEKCJA.md`; kanon v0_59: `lessons-md/_zrodla_v0_59/` | **tak** |
| Szablon lekcji | `lessons-md/_SZABLON/LEKCJA.md` | rzadko |
| Rejestr zależności | `engine/registry/*.json` | przy nowej lekcji / elemencie |
| GFX i widoki per element | `engine/src/gfx/{vessels,effects,scenes,rx,views}/<id>.js` | **tak** (nowe/ulepszone) |
| Wspólny kod GFX/VIEW | `engine/src/gfx/_szkielet/*.js` (markery `/*@@GFX rodzaj/id@@*/`) | ostrożnie |
| Layout (header, TOC) | `engine/src/layout/lesson-shell.{css,js}` | tak — działa we wszystkich lekcjach |
| Pozostałe moduły silnika | `modules/*.js` — odtwarzane z monolitu, **poza gitem** | jeszcze nie (D5) |
| Dane w sekcjach | `sections/anon001/m*.js` + katalog tagów | jeszcze nie (K7) |
| Wyniki | `dist/`, `lessons-md/*/build/` — poza gitem | nigdy ręcznie |

## 2. Polecenia (jedno wejście: `tools/che.py`)

```
cd chemia/che-modular
python3 tools/che.py init                 # raz na sesję: moduły z monolitu, sekcje, GFX, testy bezstratności
python3 tools/che.py lekcje [plik.md]     # pełny silnik z modułów + lekcje MD → dist/, dist/jeden_plik/
python3 tools/che.py silnik               # odchudzone silniki z profili → dist/viz/<profil>.js
python3 tools/che.py test [--szybki]      # bezstratność + render 6 lekcji (--szybki: bez przeglądarki)
python3 tools/che.py nowa N06 systematyka # nowa lekcja z szablonu
python3 tools/che.py gfx | katalog        # liczniki GFX / KATALOG.md
python3 tools/odchudz.py --profil X [--lekcje A,B]   # odchudzanie z testem (długie, wznawialne)
```
Pod spodem: `extract_modules.py` (monolit → moduły + szkielet labu), `anon_split.mjs`, `gfx_split.mjs`, `gfx_join.py`, `silnik.py` (składanie i testy sha1), `md2html.py` (builder kanonu), `test_lekcje.cjs`. Prototyp ZIP: `md_parity.py`, `md_build_lesson.py`, `engine_registry.py`; stary packer w `tools/_stare/`.

**Praca w tle:** gdy działa `odchudz.py`, nie zmieniać `modules/`, `sections/`, `engine/src/gfx/`, `silnik.py`, `test_lekcje.cjs` (to wyrocznia i źródło kandydatów).

## 3. Dialekt MD — jeden, kanoniczny = v0_59

Decyzja: kanonem jest dialekt, w którym napisano 6 lekcji (560 KB). Makra `$…` z prototypu ZIP są **aliasami** (builder tłumaczy je na kanon). Nowe lekcje piszemy w kanonie.

**Nagłówek (frontmatter):** `kod`, `uid`, `przedmiot`, `tytul`, `opis`, `kicker`, `lead`, `plakietki`, `uwaga`, `stopka` (+ opcjonalnie `visuals: [...]`). Spis treści, header i hamburger TOC robi shell z `## … {#id}`.

**W tekście:** `**pogrub**`, `*kurs*`, `` `kod` ``, `[§3](#id)`, plakietki `[[basic:E8]] [[understand:…]] [[extra:…]] [[exam:…]] [[new:…]]`, wzory Unicode (H₂SO₄, Fe³⁺, →, ⇌, ↓, ↑), dosłowna gwiazdka `\*`.

**Bloki:** `## n | Tytuł [[plakietka]] {#id}` · `###`–`#####` · `> notka` · listy `-` / `1.` · `$$ równanie` · tabela `| … |` · `@model id | przycisk | opis` · `@zlewka pracownia rx-klucz | przycisk`.

**Kontenery `::: nazwa | argumenty` … `:::`** (użycie w 6 lekcjach w nawiasie):

| Kontener | Rola |
|---|---|
| `karta typ \| Etykieta` (396) | typ: basic core understand extra exam warning error new `-` |
| `odp \| Pokaż…` (81) | rozwijana odpowiedź |
| `dosw \| Tytuł` (43) | doświadczenie: Problem/Hipoteza/Sprzęt/Przebieg/Obserwacja/Wniosek/`Równanie::`/BHP |
| `adv \| Tytuł \| poziom` (27) | treść ponad LO |
| `slownik` (10) · `fiszki` (5) · `klinika \| kol \| kol \| kol` (4) · `test` (3) | powtórka i sprawdzanie |
| `minimum` · `warstwy` · `rdzen` (5–6) | start lekcji |
| `div.klasa#id` (~120) · `ol`/`ul` · `details` · `figure` | dowolny element z klasą |
| `html` · `styl` · `skrypt` (10) | wyjątki: surowy HTML / CSS / JS lekcji |

**Porządkowanie (przy K4, automatycznie w builderze, bez ręcznej edycji 6 lekcji):**
- `::: div.table-wrap` (66) → builder sam owija każdą tabelę; dyrektywa staje się zbędna (zostaje jako dozwolona).
- Klasy powtarzane ≥ 3 razy dostają nazwę: `div.rule-box` → `::: regula`, `div.checklist` → `::: checklista`, `div.bil` → `::: bilans`, `div.hist-*`/`figure.hist-card` → `::: historia`, `div.audit-*` → koniec lekcji, generowane z rejestru.
- `::: skrypt` (stare testy/widżety N01–N03) → `::: test` albo widok w `engine/src/gfx/views/`.

**Aliasy z prototypu ZIP → kanon:**

| Prototyp | Kanon |
|---|---|
| `@header … @end` | frontmatter |
| `@toc … @end` | automatyczny z `## {#id}` (jawny `@toc` tylko gdy kolejność ma być inna) |
| `$karta typ=X … $end` | `::: karta X` |
| `$callout typ=bhp\|warn\|info` | `::: karta warning` / `warning` / `understand` |
| `$fiszka "p" \| "t" tag=X`, `$flip`, `$fiszka_talia`, `$fiszki_panel` | wiersz `p \| t \| X:` w `::: fiszki` (panel, ukrywanie, flip = zachowanie klocka) |
| `$tabela_bledy` | `::: klinika` |
| `$gfx view=ID`, `{{gfx:ID}}` | `@model ID \| …` |
| `$gfx scene=S vessels=… effects=…` | `@zlewka …` (scena/naczynia z rejestru) |
| `` ```table `` / `$tabela id=` | zwykła tabela + `{#id}` dla parity |

## 4. Szablony

- `lessons-md/_SZABLON/LEKCJA.md` — pełna lekcja w kanonie, kolejność wg standardu (start → rdzeń E8 → rozumienie/ambitne → praktyka → powtórka → dodatki → modele). Mini-lekcja = ten sam plik po usunięciu sekcji.
- Zasady treści (jeden temat = jedno miejsce, wiedzy nie ubywa, plakietki poziomów, bez emoji): `../archiwum/che_v0_59/STANDARD_LEKCJI.md` — obowiązują dalej.
- `lessons-md/_prototyp_zip/` i `lessons-md/N01/` (4,8 KB) — prototyp `$`-makr, tylko do testów buildera.

## 5. GFX i widoki — podział per przedmiot i element

```
engine/src/gfx/
  _szkielet/            wspólny kod rysowania (markery /*@@GFX rodzaj/id@@*/)
  wspolne/<rodzaj>/     elementy kilku przedmiotów (scena, etykieta, skala, iskry…)
  chemia/<rodzaj>/      naczynia 34 · efekty 25 · sceny 9 · reakcje 60 · widoki 27
  fizyka/<rodzaj>/      naczynia 6 (elektroskop…) · efekty 1 · widoki 5
  biologia/ matematyka/ geografia/ …   (powstają z pierwszym elementem)
  index.json · KATALOG.md (id ↔ nazwa PL ↔ opis; `che.py katalog`)
```
Rodzaje: `naczynia`, `efekty`, `sceny`, `reakcje` (presety rx), `widoki` (modele `@model`).

- **Przydział:** z grup rejestru (`engine/registry/assets`, pole `subjects`). Element kilku przedmiotów → `wspolne/`. Przeniesienie pliku = zmiana przydziału, kod się nie zmienia.
- **Warianty przedmiotowe:** ten sam id może mieć osobny plik w kilku przedmiotach (np. `biologia/naczynia/beaker.js` z inną skalą/opisem). Build lekcji bierze: przedmiot lekcji → `wspolne/` → inny.
- **Bezstratność:** `che.py test` — pełne złożenie = oryginał bajt w bajt; złożenie z allow-listą zawsze poprawne składniowo (całe instrukcje).
- **Nowy / ulepszony element:** plik `<przedmiot>/<rodzaj>/<id>.js` + wpis w `engine/registry/assets/*.json` (`title`, `aliases`, `design`, grupa z `subjects`) + `che.py katalog`.
- Waga: elementy ~0,19 MB, szkielet ~0,5 MB — oszczędność głównie w danych (K7).

## 6. Dwa wyjścia z jednego MD

| Wyjście | Polecenie | Silnik |
|---|---|---|
| Samodzielny (telefon, offline) | `build` + `pack` (K5: jedno polecenie) | wstrzyknięte tylko potrzebne moduły |
| Zintegrowany | `build --zintegrowana` | `CHE.LessonShell.mount(meta)` z labu; lab = wszystkie moduły |

## 7. Rejestr — kiedy dopisać

| Zmiana | Plik |
|---|---|
| Nowa lekcja | `engine/registry/lessons.json` (domains, visuals, vesselGroups, effectGroups, scenes, tables) |
| Nowy przedmiot | `subjects.json` + `domains.json` |
| Nowe naczynie/efekt/scena | `assets/vessels|effects|scenes.json` + plik w `engine/src/gfx/` |
| Nowa tablica danych | `tables/index.json` + dane w domenie |

## 8. Słownik i nazewnictwo (MD ↔ HTML ↔ silnik)

| Pojęcie | MD | HTML / klasa | Uwagi |
|---|---|---|---|
| H1 tytuł lekcji | frontmatter `tytul` | `.hero h1`, header shell | jeden na lekcję |
| H2 sekcja | `## 4 \| Tytuł [[basic:E8]] {#id}` | `<section id> .part-heading .part-num` | numer ciągły 1..n, dodatki A, B; `{#id}` = TOC |
| H3–H5 | `###` … `#####` `{#id .klasa}` | `h3`–`h5` | |
| plakietka poziomu | `[[basic:E8]]` | `.level-badge.level-basic` | basic understand extra exam new |
| karta | `::: karta typ \| Etykieta` | `.card` + `.card-tag.tag-typ` | |
| odpowiedź | `::: odp` | `details.answer` | |
| akademickie | `::: adv` | `details.adv` (przycisk w nagłówku) | |
| doświadczenie | `::: dosw` | `.exp-grid` + `.che-prac-go` | |
| klinika błędów | `::: klinika` | `.error-row .col-blad .col-ok` | |
| fiszki | `::: fiszki` | `.flashcard .front .back` | panel/flip = klocek |
| test | `::: test` | `.che-quiz .quiz-q .quiz-opt` | |
| słownik | `::: slownik` | `.def-item` | |
| równanie | `$$ …` / `Równanie::` | `.formula` | `data-rx` z rejestru reakcji |
| model | `@model id \| przycisk \| opis` | `.che-lesson-viz-ref[data-che-lesson-viz]` | id z `KATALOG.md` → widoki |
| pracownia GFX | `@zlewka widok rx-klucz \| przycisk` | `.che-prac-go` | klucz z `KATALOG.md` → reakcje |
| notka | `> tekst` | `.mini-note` | |

**Nazwy (ustalone, stosować w nowych rzeczach):**
- Kody lekcji: `F00–F09` fundamenty, `N01…` chemia nieorganiczna, `FIZ01…`, `BIO…`, `MAT…`; plik `lessons-md/<KOD>/LEKCJA.md`.
- Widoki: `<kod-lekcji-małymi>-<temat>-vNN` (np. `n05-mapa-v01`, `fiz01-coulomb-v01`). Stare id (`kw-…`, `n01-…`, `fiz-…`) zostają.
- Elementy GFX: id angielskie camelCase jak w silniku (`beaker`, `testTube`); nazwa PL tylko w rejestrze (`title`, `aliases`). Nie zmieniamy istniejących id (zależą od nich sceny, reakcje i lekcje).
- Katalogi i polecenia: po polsku (`naczynia`, `che.py nowa`); kod i klucze JSON — jak w silniku.
