# PLAN PRACY — CHE modular · od 2026-10-08

Czytaj ten plik zaraz po `CLAUDE.md`. Dziennik kroków: `PROGRESS.md`. Historia decyzji ZIP: `PODSUMOWANIE.md`, `AUDYT_I_PLAN.md` (nie czytać przy zwykłej pracy).

## 1. Cele (bez zmian merytorycznych, nowe podejście)

1. **Lekcje E8 chemii (potem fizyka, biologia)** — pełna treść, doświadczenia, fiszki, testy, modele i zlewki GFX.
2. **Jedno źródło treści = MD.** Autor pisze treść i makra; HTML powstaje z builda (zero tokenów).
3. **Jeden silnik, rozbity na moduły** zamiast zamrożonego `che-viz.js` (2,8 MB). Rejestr (`engine/registry/`) mówi, czego lekcja potrzebuje; kod modułów mówi, jak to działa.
4. **Lekcja offline na telefon** z samym potrzebnym kawałkiem silnika. Cel: **≤ 1,4 MB** na lekcję (dziś v0_59 jeden_plik ~3 MB).
5. **Wspólny layout (`lesson-shell`)**: zmiana w jednym miejscu obejmuje wszystkie lekcje.
6. **Rozszerzalność**: nowa lekcja / zlewka / efekt / tablica = wpis w rejestrze + mały plik kodu.

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
| **K1** | Test regresji `tools/test_pack.js` (Chromium 390 px): treść lekcji > X znaków, 0 błędów konsoli, brak przewijania w bok, modele zamontowane | test uruchamia się jednym poleceniem i pokazuje FAIL dla obecnych packów |
| **K2** | Naprawa packera: pack z **wyłączonymi filtrami** (`--no-gfx-filter`, bez VIEW/anon cięcia) musi przejść K1 → baza odniesienia | N01 pack bez filtrów: 0 błędów, treść widoczna |
| **K3** | Włączać filtry po kolei (CSS → źródła lekcji → anon001 → VIEW → GFX), po każdym K1; naprawić cięcie składni (D4) | N01–N04, FIZ01 przechodzą K1 z filtrami |
| **K4** | Builder MD rozumie dialekt v0_59 (aliasy → makra); `md_build_lesson.py N01` z `_zrodla_v0_59/N01_tlenki.md` | pełna N01 z MD, parity bez luk, K1 OK |
| **K5** | Połączenie: MD-build + pack silnika = jedna lekcja offline (`meta.json` → packer) | N01 offline z modelami i zlewkami, K1 OK |
| **K6** | N02–N05, FIZ01 przez ten sam pipeline; N05 do `lessons.json`; `rozszerzenia.js` z v0_59 jako moduł | 6 lekcji OK w K1 |
| **K7** | Odchudzanie: `pick(REACTIONS/OXIDES)`, węższe tagi core, GFX per plik | ≤ 1,4 MB / lekcja, K1 OK |
| **K8** | Nowe treści: N06 systematyka / F00–F09; potem biologia na tym samym silniku | wg potrzeb |

Otwarte błędy z v0_59 do przeniesienia przy K4–K6: tryb Noc (podwójne odwrócenie kolorów), stare `::: skrypt` w N01–N03 → `::: test`.

## 5. Jak pracować

```
cd chemia/che-modular
sh tools/pobierz_moduly.sh            # raz na sesję (modules/ nie są w gicie)
python3 tools/pack_lesson.py N01      # pack → dist/
python3 tools/md_parity.py N01
python3 tools/md_build_lesson.py N01
```
Gałąź: `claude/che-lekcje`. Wyniki (`dist/`, `build/`) poza gitem.
