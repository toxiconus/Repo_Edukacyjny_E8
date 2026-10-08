# PLAN PRACY — CHE modular · od 2026-10-08

Czytaj ten plik zaraz po `CLAUDE.md`; zasady i polecenia: `SYSTEM.md`. Dziennik kroków: `PROGRESS.md`. Historia decyzji ZIP: `PODSUMOWANIE.md`, `AUDYT_I_PLAN.md` (nie czytać przy zwykłej pracy).

## 1. Cele (bez zmian merytorycznych, nowe podejście)

**Zasada nadrzędna: zero utraty danych starego silnika.** Wszystko z v0_57/v0_59 (dane chemiczne, reakcje, substancje, GFX, widoki, atlas, `rozszerzenia.js`) przechodzi do modułów — dzielimy i ulepszamy, niczego nie wyrzucamy. Lab = suma modułów = pełny stary silnik.

1. **Moduły danych i kodu** zamiast monolitu: dane podzielone domenami (tlenki, wodorotlenki, kwasy, sole, wodorki, pierwiastki, fizyka…), GFX podzielony na naczynia/efekty/sceny. Każdy kawałek da się dołączyć osobno.
2. **Małe HTML**: lekcja bierze tylko potrzebne moduły (rejestr + manifest). Cel ≤ 1,4 MB offline (dziś ~3 MB).
3. **MD → HTML tanio**: autor pisze treść i makra w MD; builder robi HTML bez tokenów. Ułatwienia: szablon, makra (fiszki, tabele błędów, karty, doświadczenia, testy, `$gfx`), parity (co brakuje w silniku), test.
4. **Dwa wyjścia z tego samego MD**: HTML samodzielny (offline, telefon) i HTML zintegrowany z silnikiem (lab, wspólny shell). Ta sama treść, ten sam `meta.json`.
5. **Tanie ulepszanie**: zmiana layoutu/makra/modelu w jednym miejscu obejmuje wszystkie lekcje; poprawka lekcji = edycja MD + build.
6. **Rozszerzalność**: nowa lekcja / przedmiot / zlewka / efekt / tablica = wpis w rejestrze + mały plik.

**Kontrola kompletności (od K1):** suma wszystkich modułów musi dawać te same dane co monolit (liczba i treść kluczy `CHE.DATA.*`, rejestrowanych naczyń/efektów/scen/widoków). Test porównuje lab z modułów z monolitem v0_57 + `rozszerzenia.js`.

## 2. Audyt nowego podejścia (stan faktyczny, sprawdzony 2026-10-08)

| Element | Stan | Uwagi |
|---|---|---|
| Ekstrakcja modułów | ✅ | `tools/extract_modules.py` (dopisany): 78/78 sha1 zgodne z `catalog.json`. `modules/` w gicie ignorowane, odtwarza `tools/pobierz_moduly.sh` z gałęzi archiwum. |
| `pack_lesson.py --all` | ✅ buduje | N01 2,00 · N02 1,76 · N03 1,83 · N04 1,77 · FIZ01 1,66 MB |
| **Packi w przeglądarce** | ❌ | Chromium 390 px: widać tylko shell/TOC, **brak treści lekcji**, 3–4 błędy JS: `Unexpected token ':'` / `'.'` (wycinanie GFX/VIEW psuje składnię), `onpointerdown` na null (brak elementu labu), `pHFromH` undefined (wycięta zależność). |
| `md_parity.py N01` | ✅ | 10/10 |
| `md_build_lesson.py N01` | ⚠️ | Działa, 0 błędów konsoli, ale **przewijanie w bok** na 390 px; brak silnika/modeli (tylko przyciski `$gfx`). |
| Szablon MD (`$makra`) | ⚠️ | N01 testowy = 4,8 KB. Prawdziwe lekcje v0_59 (`lessons-md/_zrodla_v0_59/`, 50–128 KB) są w **innym dialekcie** (`::: dosw`, `@model`, `@zlewka`, `::: test`…). Dwa dialekty = ryzyko. |
| Rejestr | ⚠️ | `lessons.json`: N01–N04, FIZ01. **Brak N05**. |
| Sekcje anon001 | ⚠️ | 278 plików (dokumenty mówią 279) — sprawdzić przy pick(). |
| Test regresji | ❌ | Brak testu „lekcja renderuje treść + 0 błędów”. |

**Wniosek:** architektura (moduły + rejestr + MD + shell) jest dobra i powtarzalna, ale pipeline nie daje jeszcze działającej lekcji. Najpierw poprawność, potem odchudzanie.

## 3. Decyzje

- **D1.** Stary system v0_59 i bardzo stare pliki → `chemia/archiwum/` (opis w `archiwum/OPIS.md`). Nie edytujemy.
- **D2.** Treść lekcji v0_59 (`_zrodla_v0_59/*.md`) to **kanon treści**. Nie przepisujemy ręcznie: builder ma rozumieć stare dyrektywy jako aliasy makr (jeden dialekt docelowy, konwersja automatyczna).
- **D3.** Kolejność: **działa → test → chudnie**. Żadnego odchudzania bez testu renderu.
- **D4.** Packer nie może wycinać kodu „po tekście”, jeśli psuje składnię: wycinamy całe wywołania z kontrolą składni (`node --check`) albo rejestrację wyłączamy flagą.
- **D5.** `modules/` stają się źródłem w gicie dopiero, gdy zaczniemy je edytować (moduł edytowany → commit jego pliku).

## 4. Kroki (każdy kończy się testem + commitem + wpisem w PROGRESS)

| # | Krok | Gotowe, gdy |
|---|---|---|
| **K0** ✅ | Systematyzacja: `SYSTEM.md` (jeden dialekt MD = kanon v0_59 + aliasy `$`-makr), `tools/che.py` (jedno polecenie), `_SZABLON/LEKCJA.md`, bezstratny podział GFX/VIEW per element (`gfx_split.mjs` / `gfx_join.py`, sha1 = oryginał) | zrobione 2026-10-08 |
| **K1** | Testy jednym poleceniem: (a) `test_pack.js` Chromium 390 px — treść lekcji, 0 błędów konsoli, brak przewijania w bok, modele zamontowane; (b) `test_kompletnosc` — inwentarz danych/GFX/VIEW z modułów = monolit | oba testy działają, pokazują FAIL dla obecnych packów |
| **K2** | Naprawa packera: pack z **wyłączonymi filtrami** (`--no-gfx-filter`, bez VIEW/anon cięcia) musi przejść K1 → baza odniesienia | N01 pack bez filtrów: 0 błędów, treść widoczna |
| **K3** | Włączać filtry po kolei (CSS → źródła lekcji → anon001 → VIEW → GFX), po każdym K1; filtr GFX/VIEW przez `gfx_join.join(mod, allow)` zamiast cięcia tekstu (D4) | N01–N04, FIZ01 przechodzą K1 z filtrami |
| **K4** | Builder MD rozumie kanon v0_59 + aliasy `$`-makr i porządkowanie klas (SYSTEM.md §3); `md_build_lesson.py N01` z `_zrodla_v0_59/N01_tlenki.md` | pełna N01 z MD, parity bez luk, K1 OK |
| **K5** | Połączenie: MD-build + pack silnika = jedna lekcja offline (`meta.json` → packer) | N01 offline z modelami i zlewkami, K1 OK |
| **K6** | `rozszerzenia.js` z v0_59 → moduły domen (wodorki, nowe zlewki); N02–N05, FIZ01 przez ten sam pipeline; N05 do `lessons.json` | 6 lekcji OK w K1, kompletność OK |
| **K7** | Podział danych na pliki domen (`engine/src/data/<domena>.js`) i GFX per plik; `pick()` wg manifestu; węższe tagi core | ≤ 1,4 MB / lekcja, K1 i kompletność OK |
| **K8** | Nowe treści: N06 systematyka / F00–F09; potem biologia na tym samym silniku | wg potrzeb |

Otwarte błędy z v0_59 do przeniesienia przy K4–K6: tryb Noc (podwójne odwrócenie kolorów), stare `::: skrypt` w N01–N03 → `::: test`.

## 5. Jak pracować

```
cd chemia/che-modular
python3 tools/che.py init      # raz na sesję
python3 tools/che.py --help    # reszta poleceń (SYSTEM.md §2)
```
Gałąź: `claude/che-lekcje`. Wyniki (`dist/`, `build/`) poza gitem.
