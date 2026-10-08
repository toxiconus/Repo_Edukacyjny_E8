> **Podsumowanie strategiczne (cel, stan, kierunek):** [`PODSUMOWANIE.md`](PODSUMOWANIE.md)

# CHE lab → pakiety lekcji: audyt, decyzje, plan

**Data:** 2026-10-08  
**Źródła:**
- Monolit: `CHE_lab_wizualizacje_v0_57_GFX16.html` (~3,49 MB)
- Lekcje (wrappery telefon): `CHE_lekcje_telefon.zip` (N01–N04, FIZ01, każdy ~3 MB)

**Artefakty tego katalogu:** `che-modular/` (moduły, manifesty, packer, raporty, packi HTML)

---

## 1. Po co to robimy

Chcemy **jeden silnik chemii (lab)** jako źródło prawdy, a przy generowaniu **pojedynczej lekcji w HTML** dołączać wyłącznie:

- dane (reakcje, tlenki, jony, …) faktycznie użyte w tej lekcji,
- modele / widoki (`VIEW.define`) z listy lekcji,
- z warstwy **GFX** tylko potrzebne **naczynia** (np. próbówka, zlewka), **efekty** (bąbelki, płomień), **sceny** i **presety rx**,

żeby plik offline na telefon nie ważył tyle co cały lab z pięcioma lekcjami i narzędziami developerskimi.

### Problem dziś

| Artefakt | Rozmiar | Uwaga |
|----------|---------|--------|
| Monolit lab | **3,49 MB** | Wszystko: dane, GFX, 5 lekcji, hub, audyty, migracje |
| Wrapper lekcji (ZIP telefon) | **~3,0 MB** każdy | Cienka obudowa + JSON z treścią; i tak oczekuje pełnego silnika / prawie pełnej kopii |
| Brak drzewa zależności | — | Nie ma automatycznego „weź tylko N01” |

Lekcje i lab są już **logiczenie pocięte** (osobne skrypty `che-oxides-v001`, `che-lab-engine-v001`, `data-rx`, registry z `visuals` / `dataScope`), ale **nie ma generatora**, który z tego robi slim HTML.

---

## 2. Co zrobiliśmy (audyt techniczny)

### 2.1 Rozbiór monolitu

- Wyciągnięto **78 skryptów** → `modules/*.js` (katalog: `catalog.json`).
- Najcięższe elementy:

| Moduł | ~Bajty | Rola |
|-------|--------|------|
| `_anon_001.js` | **1,20 MB** | Wspólny silnik danych (DATA, EDUCATION, AUDIT, …) |
| `che-lab-engine-v001.js` | **0,37 MB** | LAB + **GFX** (vessels, effects, scenes, rx) |
| `che-visual-library-v001.js` | **0,32 MB** | Definicje `VIEW.define` |
| `_anon_004.js` | **0,18 MB** | Rdzeń UI / silnik |
| `che-n01-src` … `che-sole-src` | **0,11–0,18 MB** | Treść HTML lekcji (JSON/HTML) |
| Pełny CSS labowy | **~0,90 MB** | Shell labu (sidebar, PT, drawer…) — zbędny w packu lekcji |

### 2.2 GFX — inwentaryzacja

Plik: `gfx-inventory.json`.

| Kategoria | Liczba | Przykłady |
|-----------|--------|-----------|
| **vessels** (naczynia / sprzęt) | 42 | `beaker`, `testTube`, `flask`, `burner`, `electroscope`, `burette`… |
| **effects** | 31 | `bubbles`, `flame`, `precipitate`, `steam`, `discharge`… |
| **scenes** | 9 | `carbonate`, `heating`, `titration`, `indicatorRack`… |
| **rx presets** (`P('…')`) | 60 | `caoH2o`, `al2o3Hcl`, `cucl2Naoh`… |

Wniosek: przy N01 (tlenki) **nie potrzeba** elektroskopu, biurety ani połowy presetów soli/kwasów — stąd allow-listy w packerze.

### 2.3 Skan lekcji N01 (przykład)

Z atrybutów w `che-n01-src`:

| Atrybut | Liczba unikalnych | Przykład |
|---------|-------------------|----------|
| `data-rx` | 33 | `mgO2`, `caoH2o`, `termit`… |
| `data-ox` | 23 | `MgO`, `CO2`, `P4O10`… |
| `data-che-lesson-viz` | 11 | `n01-reaktor-v01`, `gfx-scene-carbonate`… |

To jest naturalny **manifest** „co musi być w packu”.

Registry silnika już ma `dataScope` + `visuals` per lekcja — zgodne z tym kierunkiem.

### 2.4 Punkty spięcia silnik ↔ lekcja

(wykorzystywane też przez `CHE.CONSISTENCY` w monolitie)

| W lekcji | W silniku |
|----------|-----------|
| `data-rx` | `D.REACTIONS` / `CHE.REACTION` |
| `data-ox` / kolory | `CHE.DATA.OXIDES` / `CHE.OXIDES` |
| `data-hy` | `CHE.HYDROXIDES` + rozpuszczalność |
| `data-cmp` / `data-salt` | `CHE.IONIC` |
| `data-ppt` | `CHE.COLORS` |
| `data-che-lesson-viz` | `CHE.VIEW` + GFX sceny |

---

## 3. Architektura docelowa (co chcemy)

```
[ Monolit / repo modules ]  ──build──►  lab.html          (wszystko)
                    └──pack_lesson──►  N01_pack.html     (tylko N01)
                                       N02_pack.html
                                       …
```

1. **Manifest lekcji** (`manifests/N01.json`) — visuals, reactions, oxides, family tags.
2. **Selekcja modułów** — core + oxides|hydroxides|acids|salts|fiz + gfx; **bez** hub/gate/consistency/migracji i **bez** źródeł innych lekcji.
3. **Filtr GFX** — tylko `vessel` / `effect` / `sceneReg` / `P` z allow-listy rodziny lekcji.
4. **Filtr VIEW** — tylko `define` z manifestu (+ wspólne: molecule3d, periodic, stech…).
5. **Minimalny CSS** packa; style lekcji zostają w jej źródle.
6. **Później:** `pick()` na mapach DATA w `_anon_001` oraz rozbicie GFX na pliki per naczynie.

### Allow-lista GFX (skrót)

| Lekcja | Naczynia (idea) | Efekty | Sceny |
|--------|-----------------|--------|-------|
| N01 | beaker, testTube, flask, burner, tubeRack… | flame, bubbles, precipitate, steam… | carbonate, heating, gasCollection |
| N02 | + pH, dropper | precipitate, dropMix… | indicator, acidMetal |
| N03 | + burette, volFlask | meniscus, tap… | titration, indicatorRack |
| N04 | + conductivity | turbidity, solids… | conductivity, carbonate |
| FIZ01 | electroscope, chargedRod, pendulum… | discharge, sparks | — |

Szczegóły: `tools/pack_lesson.py` → `GFX_ALLOW`.

---

## 4. Wyniki packera

Narzędzie: `python3 tools/pack_lesson.py --all`

### 4.1 Po filtrach modułów + GFX + CSS (wcześniej)

| Lekcja | Pack | % monolitu |
|--------|------|------------|
| N01 | 2,43 MB | 70% |

### 4.2 Po pocięciu `_anon_001` na 279 sekcji (teraz)

Monolit `_anon_001` (1,20 MB) → `sections/anon001/m000.js` … + `anon001_catalog.json` (tagi).

| Lekcja | Stary wrapper | Pack | % monolitu | anon001 sekcje | GFX vessels | VIEW drop |
|--------|---------------|------|------------|----------------|-------------|-----------|
| **N01** | 3,03 MB | **1,97 MB** | **61%** | 109/279 (−467 KB) | 21/42 | 25 |
| **N02** | 3,03 MB | **1,91 MB** | **59%** | 97/279 (−510 KB) | 16/42 | 21 |
| **N03** | 3,04 MB | **1,98 MB** | **61%** | 117/279 (−443 KB) | 15/42 | 21 |
| **N04** | 2,99 MB | **1,91 MB** | **59%** | 113/279 (−451 KB) | 14/42 | 25 |
| **FIZ01** | 2,95 MB | **1,64 MB** | **51%** | 77/279 (−654 KB) | 8/42 | 24 |

### Skąd oszczędność

1. CSS labowy ~900 KB → `styles-pack.css` ~0,6 KB  
2. Wyrzucenie HTML źródeł innych lekcji  
3. Wyrzucenie hub / home-gate / consistency / migracji  
4. Wykluczenie obcych silników (np. hydroxides przy N01)  
5. Wycinek rejestracji GFX + `VIEW.define`  
6. **`_anon_001` tylko sekcje z tagami rodziny** (bez pure audit / education / organic / nuclear / editor)

### Tagi sekcji anon001 (największe koszyki)

| Tag | ~Bajty | Sekcje |
|-----|--------|--------|
| core (szeroki) | 669 KB | 153 |
| audit | 624 KB | 163 |
| education | 500 KB | 84 |
| data-acids | 356 KB | 48 |
| nuclear | 324 KB | 59 |
| data-elements | 278 KB | 50 |
| data-oxides | 183 KB | 18 |

Polityka: zawsze m000–m008; dalej tylko tagi z `ANON_FAMILY_TAGS[code]`; drop gdy wyłącznie audit/education/organic/nuclear/editor/misc.

### Co dalej (kolejne MB)

| # | Zadanie | Szacunek |
|---|---------|----------|
| 1 | `pick(REACTIONS/OXIDES)` w sekcjach data-* wg manifestu | −100…300 KB |
| 2 | Węższe „core” (mniej fałszywych trafień ENGINE) | −100…200 KB |
| 3 | GFX vessels jako osobne pliki | czytelność + runtime |
| 4 | Test regresji data-rx / visuals w packu | jakość |

**Cel:** pack N01 **~1,0–1,4 MB**.

---

## 5. Pliki w tym ZIP (audyt + wyniki)

```
AUDYT_I_PLAN.md          ← ten dokument (po co, co zrobione, co dalej)
README.md                ← instrukcja packera
catalog.json             ← 78 modułów: id, bajty, tagi, sha1
gfx-inventory.json       ← vessels / effects / scenes / rxPresets
manifests/
  N01.json … FIZ01.json  ← visuals + skan data-rx / data-ox
tools/
  pack_lesson.py         ← generator slim HTML
dist/
  *_pack.report.json     ← raporty: lista modułów, GFX, bajty
  *_pack.html            ← wygenerowane packi (wynik builda)
styles-pack.css          ← CSS używany w packach
```

**Uwaga:** pełne `modules/*.js` (~3,2 MB łącznie) są w katalogu roboczym `che-modular/modules/`; w ZIP audytowym mogą być pominięte jako kopia 1:1 monolitu — odtwarzane komendą ekstrakcji z HTML labowego. Packi HTML w `dist/` to mierzalny wynik.

### Odtworzenie packów

```bash
cd che-modular
python3 tools/pack_lesson.py N01
python3 tools/pack_lesson.py --all
```

---

## 6. Plan dalszych prac (priorytet)

| # | Zadanie | Oczekiwany zysk |
|---|---------|-----------------|
| 1 | Tagi / selekcja bloków w `_anon_001` + `pick(REACTIONS, oxides)` wg manifestu | **−0,5 … −0,9 MB** |
| 2 | GFX: osobne pliki `vessels/beaker.js` zamiast tylko drop rejestracji | mniejszy runtime + czytelność |
| 3 | Jedno źródło modułów w repo → target `lab` i target `lesson` | brak rozjazdów lab ↔ lekcja |
| 4 | Test: każdy `data-rx` / `data-che-lesson-viz` z N01 istnieje w packu (jak CONSISTENCY) | regresja |

---

## 7. Decyzje projektowe (krótko)

- **Nie** przepisujemy chemii od zera — wycinamy i składamy to, co już jest.
- **Tak** traktujemy atrybuty lekcji + registry jako kontrakt zależności.
- **GFX** jest pierwszym miejscem świadomego allow-list (probówka ≠ cały lab).
- Pack lekcji = offline, bez hubu przedmiotów i bez audytu developerskiego.
- Lab zostaje pełny; packer tylko **czyta** monolit/moduły i emituje subset.

---

*Wygenerowano w ramach prac nad modularizacją CHE.lab · packer v0*


---

## 8. Rejestr silnika (wieloprzedmiotowy) — 2026-10-08

Dodano `engine/registry/`:

| Plik | Zawartość |
|------|-----------|
| `subjects.json` | chemia, fizyka (+ plan bio/mat/geo) |
| `domains.json` | oxides, acids, salts, electrostatics… → data, modules, gfx, tables |
| `lessons.json` | N01–N04, FIZ01: domains, vesselGroups, effectGroups, visuals, tables |
| `assets/vessels.json` | grupy: chem.glassware, phys.electro, common.stage… |
| `assets/effects.json` | grupy: chem.reaction, chem.heat, phys.electro, common.ui… |
| `assets/scenes.json` | sceny pracowni + wymagane vessels/effects |
| `tables/index.json` | tablice fizykochemiczne (kontrakt) |
| `docs/ARCHITEKTURA.md` | opis warstw i reguł rozwoju |

Packer (`tools/engine_registry.py` + `pack_lesson.py`) **rozwiązuje** lekcję z rejestru → allow-listy GFX i tagi anon001.

**Zasada:** nowa lekcja / efekt / tablica = wpis w rejestrze + kod; bez „wszystko albo nic”.

Pomiar po rejestrze (N02/N03/N04 chudsze dzięki `anon_tags` z domen):

| Lekcja | Pack |
|--------|------|
| N01 | 1,98 MB |
| N02 | **1,74 MB** |
| N03 | **1,81 MB** |
| N04 | **1,75 MB** |
| FIZ01 | 1,64 MB |


---

## 9. Przepływ MD → silnik → HTML

Dokumentacja: `engine/docs/flow/SILNIK_MD_HTML.md`

| Element | Ścieżka |
|---------|---------|
| Szablon lekcji MD | `lessons-md/_TEMPLATE/LEKCJA.md` |
| Przykład N01 | `lessons-md/N01/{LEKCJA,GFX,DANE}.md` |
| Słownik naczyń/efektów/scen | `engine/docs/gfx/{VESSELS,EFFECTS,SCENES}.md` |
| Opisy design w rejestrze | pole `design` w vessels/effects/scenes JSON |
| Tool parity | `python3 tools/md_parity.py N01` |

Kolejność: **projekt MD** → parity (luki vs rejestr) → ujednolicenie DATA → HTML pack / integracja w lab.


---

## 10. Wspólny layout lekcji (cegiełki)

Dokumentacja: `engine/docs/layout/LAYOUT_LEKCJI.md`

| Element | Ścieżka |
|---------|---------|
| CSS shell | `engine/src/layout/lesson-shell.css` |
| JS shell (header + hamburger TOC) | `engine/src/layout/lesson-shell.js` |
| Demo | `engine/src/layout/demo-shell.html` |
| Rejestr | `engine/registry/layout/shell.json` |

**TOC:** pływający przycisk 3 kreski (lewy górny róg) → panel ze spisem, aktywna sekcja przy scrollu, Esc zamyka.

Warianty: `chemia` / `fizyka` / `default` (kolor akcentu). Masowa zmiana layoutu = jedna para CSS/JS, nie każda lekcja osobno.


---

## 11. MD → cegiełki → HTML (zewnętrzny i zintegrowany)

- Opis dyrektyw: `engine/docs/layout/MD_CEGIELKI.md`
- Builder: `python3 tools/md_build_lesson.py N01` → `lessons-md/N01/build/lesson.html` + `meta.json`
- Tryb `--mode integrated` — bez inline shell; `CHE.LessonShell.mount(__LESSON_META__)` z labu
- Packer wstrzykuje ten sam `lesson-shell.css/js` do packów

**Zintegrowane lekcje:** jedna zmiana w `engine/src/layout/lesson-shell.*` aktualizuje TOC/header u wszystkich, bo montują kloc z silnika. MD podaje tylko treść i `tocItems` / `{#id}`.


---

## 12. Szablon MD lekcji chemii + makra

| Plik | Opis |
|------|------|
| `lessons-md/_TEMPLATE_CHEMIA/LEKCJA.md` | Pełny szkielet E8 |
| `…/LEKCJA_MINI_BEZ_WIZUALI.md` | Mini bez modeli |
| `…/MAKRA.md` / `MAKRA_ROZWINIECIE.md` | Makra i warianty |
| `lessons-md/N01/LEKCJA.md` | Test: tlenki na szablonie |

Makra m.in.: `$fiszki_panel` (karty domyślnie ukryte), `$tabela_bledy` (tylko treść; kolory z CSS), `$fiszka` / `$flip`, `$karta`, `$callout`, `$gfx`.

Builder: `md_build_lesson.py`. Szczegóły i kierunek: **PODSUMOWANIE.md**.
