# CHE modular

**Start tutaj:** [PODSUMOWANIE.md](PODSUMOWANIE.md) — po co, co zrobione, dokąd dążymy.

# CHE modular packer

Przepisanie monolitu `CHE_lab_wizualizacje_*.html` na **moduły + generator lekcji**, żeby pojedynczy HTML brał tylko potrzebne dane i modele (w tym wycinek GFX: naczynia / efekty / sceny / rx).

## Sekcje `_anon_001` (279 szt.)

Monolit 1,20 MB jest pocięty na `sections/anon001/mNNN.js` z katalogiem `sections/anon001_catalog.json` (tagi: `data-oxides`, `data-acids`, `audit`, …).

Packer składa tylko sekcje pasujące do rodziny lekcji (`ANON_FAMILY_TAGS`) + m000–m008.

Efekt N01: **1,20 MB → 0,74 MB** w samym rdzeniu danych (−467 KB).

## Struktura

```
che-modular/
  modules/           # 78 skryptów wyciągniętych z monolitu (1:1)
  manifests/         # N01.json … — visuals, reactions, oxides (auto z skanu)
  gfx-inventory.json # vessels, effects, scenes, rxPresets w lab-engine
  catalog.json       # id, rozmiar, tagi (oxides|hydroxides|gfx|devtools|…)
  styles-pack.css    # minimalny CSS packa (~0.6 KB; lekcja ma własny <style>)
  styles.css         # pełny CSS labowy (~900 KB) — tylko do labu
  tools/pack_lesson.py
  dist/              # wynik: N01_pack.html + raport
```

## Uruchomienie

```bash
cd che-modular
python3 tools/pack_lesson.py N01
python3 tools/pack_lesson.py --all
python3 tools/pack_lesson.py N01 --no-gfx-filter   # bez wycinania vessel/effect
```

## Co już daje zysk

| Technika | Efekt |
|----------|--------|
| Wyrzucenie źródeł innych lekcji (N02–N04 / FIZ) | ~0.5–0.7 MB |
| Wyrzucenie hub / gate / consistency / migracji | ~50–80 KB |
| Minimalny CSS zamiast labowego | **~900 KB** |
| Filtrowanie `VIEW.define` w visual-library | ~80–100 KB |
| Filtrowanie GFX: `vessel` / `effect` / `sceneReg` / `P` (rx) | ~20–40 KB kodu rejestracji + mniejszy runtime |
| Wykluczenie obcych silników (np. hydroxides przy N01) | ~20–40 KB |

**N01 pack ≈ 2.4 MB** vs monolit **3.5 MB** vs stary wrapper lekcji **~3.0 MB**.

## GFX — tylko potrzebne modele

W `pack_lesson.py` → `GFX_ALLOW[code]`:

- **vessels** — np. N01: `beaker`, `testTube`, `flask`, `burner`, `tubeRack`… (bez `electroscope`, `burette`, `molTank`…)
- **effects** — `bubbles`, `flame`, `precipitate`, `steam`… (bez `discharge`, `titration`-only)
- **scenes** — `carbonate`, `heating`, `gasCollection`…
- **rx** — presety `P('caoH2o')` itd. z lab-engine

Packer **wycina całe wywołania** `vessel('…')` / `effect('…')` / `sceneReg` / `P` spoza listy (zostawia komentarz `/* GFX-PACK drop … */`).

Jeśli w lekcji potrzebujesz nowej próbówki / efektu — dopisz id do `GFX_ALLOW`.

Inwentarz: `gfx-inventory.json`.

## Manifest lekcji

Przykład `manifests/N01.json` (uzupełniany skanem `data-rx` / `data-ox` / `data-che-lesson-viz`):

```json
{
  "code": "N01",
  "visuals": ["n01-tlenki-v01", "n01-reaktor-v01", "gfx-scene-carbonate", ...],
  "reactions": ["mgO2", "caoH2o", ...],
  "oxides": ["MgO", "CO2", ...]
}
```

Registry w silniku ma już `dataScope` + `visuals` — to to samo źródło prawdy.

## Co dalej = największe kolejne zyski

### 1. Pociąć `_anon_001` (~1.2 MB) — **największy pozostały balast**

To wspólny „N03 Common Chemistry Engine” z setkami `try { … }` modułów (DATA, EDUCATION, AUDIT, ELEMENTS…).  
Kolejny krok:

- oznaczyć każdy blok `try` tagiem (`data-oxides`, `audit`, `education-max`, …),
- w packerze brać tylko bloki z tagów manifestu,
- albo `pick(FULL.REACTIONS, manifest.reactions)` zamiast całej mapy.

Szacunek po pocięciu: pack N01 w okolice **0.8–1.2 MB**.

### 2. Właściwy tree-shake GFX (nie tylko rejestracje)

Dziś wycinamy `vessel('electroscope')`, ale wspólne funkcje rysujące mogą zostać.  
Docelowo: naczynia jako osobne pliki `gfx/vessels/beaker.js` ładowane z manifestu.

### 3. `pick()` na DATA w `che-oxides-v001` / REACTIONS

Skan lekcji już zbiera 33 `data-rx` i 23 `data-ox` dla N01 — generator może emitować:

```js
CHE.DATA.REACTIONS = { mgO2: {...}, caoH2o: {...}, /* tylko te */ };
```

### 4. Lab deweloperski = suma modułów

`modules/*` + pełny CSS + wszystkie źródła lekcji = obecny monolit.  
Jedno źródło, dwa targety: `lab.html` i `N01_pack.html`.

## Mapowanie rodzin lekcji → tagi

| Lekcja | Tagi modułów | GFX focus |
|--------|----------------|-----------|
| N01 Tlenki | oxides, stoich, colors, gfx | spalanie, tlenki + H₂O/kwas, CO₂ |
| N02 Wodorotlenki | hydroxides, stoich, colors, gfx | strącanie OH⁻, zobojętnianie |
| N03 Kwasy | acids, stoich, colors, gfx | wskaźniki, miareczkowanie, dysocjacja |
| N04 Sole | salts, acids, stoich, colors, gfx | rozpuszczalność, hydroliza, osady |
| FIZ01 | fiz, gfx | elektroskop, pręt, wahadło |

## Pliki wynikowe

- `dist/N01_pack.html` — standalone (offline)
- `dist/N01_pack.report.json` — lista modułów, bajty, statystyki GFX/VIEW
