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
| Szablon MD (`$makra`) | ⚠️ | N01 testowy = 4,8 KB. Prawdziwe lekcje v0_59 (`lessons-md/gotowe/`, 50–128 KB) są w **innym dialekcie** (`::: dosw`, `@model`, `@zlewka`, `::: test`…). Dwa dialekty = ryzyko. |
| Rejestr | ⚠️ | `lessons.json`: N01–N04, FIZ01. **Brak N05**. |
| Sekcje anon001 | ⚠️ | 278 plików (dokumenty mówią 279) — sprawdzić przy pick(). |
| Test regresji | ❌ | Brak testu „lekcja renderuje treść + 0 błędów”. |

**Wniosek (rano):** architektura dobra, packer ZIP nie dawał działającej lekcji. **Stan (K2):** silnik złożony z modułów jest identyczny ze starym, 6 lekcji v0_59 działa na nim; odchudzanie idzie testem, nie zgadywaniem.

## 3. Decyzje

- **D1.** Stary system v0_59 i bardzo stare pliki → `chemia/archiwum/` (opis w `archiwum/OPIS.md`). Nie edytujemy.
- **D2.** Treść lekcji v0_59 (`gotowe/*.md`) to **kanon treści**. Nie przepisujemy ręcznie: builder ma rozumieć stare dyrektywy jako aliasy makr (jeden dialekt docelowy, konwersja automatyczna).
- **D3.** Kolejność: **działa → test → chudnie**. Żadnego odchudzania bez testu renderu.
- **D4.** Packer nie może wycinać kodu „po tekście”, jeśli psuje składnię: wycinamy całe wywołania z kontrolą składni (`node --check`) albo rejestrację wyłączamy flagą.
- **D5.** `modules/` stają się źródłem w gicie dopiero, gdy zaczniemy je edytować (moduł edytowany → commit jego pliku).

## 4. Kroki (każdy kończy się testem + commitem + wpisem w PROGRESS)

| # | Krok | Gotowe, gdy |
|---|---|---|
| **K0** ✅ | Systematyzacja: `SYSTEM.md` (jeden dialekt MD = kanon v0_59 + aliasy `$`-makr), `tools/che.py` (jedno polecenie), `_SZABLON/LEKCJA.md`, bezstratny podział GFX/VIEW per element (`gfx_split.mjs` / `gfx_join.py`, sha1 = oryginał) | zrobione 2026-10-08 |
| **K1** ✅ | `tools/test_lekcje.cjs`: Chromium 390 px, lekcje równolegle — treść, 0 błędów (bez sieci), CONSISTENCY, modele zamontowane + klik 3 przycisków/select, każda pracownia otwiera się | 6/6 OK |
| **K2** ✅ | Bezstratność: `silnik.py` — lab z modułów == monolit v0_57, che-viz.js == zamrożony v0_59 (sha1); sekcje `_anon_001` (280, `anon_split.mjs`) i GFX (175) składają się bajt w bajt. Builder kanonu `tools/md2html.py`, szablon wyglądu `engine/src/lekcja/`. Packer ZIP odstawiony (gubił HOME_GATE) | zrobione |
| **K3** ⏳ | `tools/odchudz.py`: ddmin z testem jako wyrocznią → profile `engine/registry/profile/*.json` (najpierw `wspolny` dla 6 lekcji, potem per lekcja). `che.py silnik` → `dist/viz/<profil>.js`; `md2html.py` wkleja `dist/viz/<lekcja>.js` → `wspolny.js` → pełny | wspólny < 2 MB, per lekcja ≤ 1,4 MB |
| **K4** | Builder MD rozumie kanon v0_59 + aliasy `$`-makr i porządkowanie klas (SYSTEM.md §3); `md_build_lesson.py N01` z `gotowe/N01_tlenki.md` | pełna N01 z MD, parity bez luk, K1 OK |
| **K5** | Połączenie: MD-build + pack silnika = jedna lekcja offline (`meta.json` → packer) | N01 offline z modelami i zlewkami, K1 OK |
| **K6** | `rozszerzenia.js` z v0_59 → moduły domen (wodorki, nowe zlewki); N02–N05, FIZ01 przez ten sam pipeline; N05 do `lessons.json` | 6 lekcji OK w K1, kompletność OK |
| **K7** | Podział danych na pliki domen (`engine/src/data/<domena>.js`) i GFX per plik; `pick()` wg manifestu; węższe tagi core | ≤ 1,4 MB / lekcja, K1 i kompletność OK |
| **K8** | Kurs (kanon v0.3, 113 lekcji) — patrz §6: blok F (F02→F21), potem przemianowanie N01–N05 → N02–N06 | wg §6 |

Otwarte błędy z v0_59 do przeniesienia przy K4–K6: tryb Noc (podwójne odwrócenie kolorów), stare `::: skrypt` w N01–N03 → `::: test`.

## 5. Jak pracować

```
cd chemia/che-modular
python3 tools/che.py init      # raz na sesję
python3 tools/che.py --help    # reszta poleceń (SYSTEM.md §2)
```
Gałąź: `claude/che-lekcje`. Wyniki (`dist/`, `build/`) poza gitem.

## 6. Kurs i blok F (z gałęzi `claude/chemia-podzial`, wcielone 2026-10-08 @a49e2ae)

- **Spis kursu:** `chemia/plany/CHE_SPIS_TRESCI.md` (kanon v0.3, 113 lekcji: kod, poziom, wymaga/pogłębia, cel, stan, pliki). Generator: `cd chemia && python3 plany/narzedzia/spis_tresci.py` (dane: `plany/narzedzia/kanon_dane.py` — zmiany tylko w danych). Ścieżki E8/LO: `plany/PLAN_SCIEZKI_DYDAKTYCZNE.md`, architektura F: `plany/CHE.01.F00.architektura_bloku_F.md`.
- **Materiał wstępny:** `chemia/lekcje_md/<grupa>/` (F: kanon v17.0 + na końcu „MATERIAŁ Z ARCHIWUM — do redakcji”; N/R/O/X/00: stare v1.1 pod nowymi kodami). Czytać tylko sekcję potrzebnej lekcji (grep), nie całość.
- **Decyzje użytkownika (blok F):** 21 lekcji F01–F21 w 5 fazach (A F01–03, B F04–09, C F10–15, D F16–17, E F18–21); F00 nie jest lekcją (mapa bloku w F01 §0.3). **Nie piszemy od zera** — ulepszamy wersje użytkownika i przenosimy do kanonu MD (`SYSTEM.md` §3).
- **Zasada GFX:** najpierw istniejący model/zlewka (rozszerzać, ulepszać); brakujący element = komponent wielokrotnego użytku (`engine/src/lekcja/rozszerzenia.js` lub `engine/src/gfx/<przedmiot>/…`) + wpis w katalogu. Nowa pracownia: `C.EXT_PRACOWNIA(...)` (rozszerzenia.js §5, opis w `KATALOG_MODELI.md`).
- **Gotowe (test OK 2026-10-08, pełny silnik):** F01 Jak myśli chemik (pracownia `f01-doswiadczenia-v01`; poprawka `rxKey` caoh2Co2 / mgO2), F02 Materia i substancje, F03 Właściwości i rozdzielanie (pracownia `f03-rozdzielanie-v01`), F04 Atom — `lessons-md/gotowe/F0x_*.md`. Właściciele pojęć: metody rozdzielania — F03, konfiguracja powłokowa — F07.
- **Kolejność:** F05 Izotopy, jony i masa atomowa (uwaga: w materiale F04/F05 zepsute liczby — poprawne Ar(Cl) ≈ 35,45; m(³⁷Cl) = 36,966 u) → F06 … F21; cienkie F10, F15, F18–F21 — najpierw zapytać o nowszą wersję. GFX do zbudowania: magnes (Fe+S), lód pływający, osad i para w parownicy, płomień w tyglu; modele: rozdzielanie mieszanin (F03), izotopy (F05), energia wiązania (F10), polarność/dipol (F15), dobieranie współczynników (F17).
- **Po zatwierdzeniu kanonu v0.3:** przemianować gotowe N01…N05 → N02…N06 (pliki, `kod`, `uid`, rejestr).
- Otwarte: mapowanie L006–L013 → kody (O, R, X, LAB, REV) do potwierdzenia; testy N01–N03 → `::: test`; tryb Noc w `lekcja.css`.

