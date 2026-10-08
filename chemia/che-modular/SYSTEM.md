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
python3 tools/che.py init                 # raz na sesję: moduły + acorn + podział GFX + test
python3 tools/che.py nowa N06 systematyka # nowa lekcja z szablonu
python3 tools/che.py parity N06           # czego lekcja chce, a silnik nie ma
python3 tools/che.py build N06            # MD → HTML samodzielny   (--zintegrowana: z silnikiem labu)
python3 tools/che.py pack N06|--all       # mały HTML offline z wybranymi modułami
python3 tools/che.py test                 # testy, tylko błędy
python3 tools/che.py gfx                  # ile elementów GFX/VIEW i ile KB
```
Narzędzia pod spodem (wołać tylko przy debugowaniu): `extract_modules.py`, `pobierz_moduly.sh`, `gfx_split.mjs`, `gfx_join.py`, `md_parity.py`, `md_build_lesson.py`, `pack_lesson.py`, `engine_registry.py`.

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

## 5. GFX i widoki — podział per element

`tools/gfx_split.mjs` (parser acorn) wyciąga każdą instrukcję rejestracji do osobnego pliku: **42 naczynia, 31 efektów, 9 scen, 60 presetów rx, 33 widoki**. `gfx_join.py` składa z powrotem: pełne złożenie = oryginał bajt w bajt (sha1 z `catalog.json`), złożenie z allow-listą zawsze składniowo poprawne (całe instrukcje, nie wycinanie tekstu).

- Ulepszenie naczynia/efektu/widoku = edycja jednego pliku `engine/src/gfx/<rodzaj>/<id>.js`.
- Nowy element = nowy plik + marker w szkielecie (lub plik w `engine/src/gfx/ext/`, K6) + wpis w `engine/registry/assets/*.json` (grupa, `design`).
- Lekcja dostaje elementy z rejestru (`vesselGroups`, `effectGroups`, `scenes`, `visuals`) → packer woła `join(mod, allow)`.
- Uwaga: elementy to tylko ~0,19 MB (widoki 125 KB, efekty 26, sceny 16, rx 11, naczynia 8), wspólny szkielet ~0,5 MB. Podział służy edycji i bezpiecznemu filtrowaniu; oszczędność wagi jest głównie w danych (K7) i w szkielecie (rysowanie wspólne — dzielić dopiero, gdy pomiar pokaże sens).

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
