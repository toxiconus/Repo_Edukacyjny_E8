# Uwspólnienie wizualizacji — kwasy i pH (stan 2026-11-04)

Zasada: jedna najlepsza wersja. Przy podmianie sprawdź, których lekcji dotyczy (kolumna „użycia” z `baza-mala/uzycia.json`, stan przed odświeżeniem).

## Zrobione w N04 (port z `visual-library-v001` do małych klocków; `model_widok.js` + `ruch_che.js`)
- `ph-indicators-v03` → klocek `ph_panel.js` (z modułem barw CHE.COLORS i danymi kwasów); w N04 zastąpił przycisk „otwórz w oknie”. Moja prostsza `ph-skala` zostaje tylko jako uzupełnienie (substancje z życia) — do decyzji, czy scalić z panelem.
- `titration-merged` → `miareczkowanie_tm.js` (shim `CHE.EQUILIBRIUM.titrationPH`); mój klocek `miareczkowanie` usunięty.
- `acid-rain-v01` → `acid_rain.js`; mój `kwasne-deszcze` zostaje jako dopełnienie (marmur, zabytki) — do scalenia.

## Do zrobienia (uwspólnić najlepsze, uwaga na lekcje już używające)
- `kw-bufor-v01` (pH-metry + zlewki, GFX) vs mój `bufor`: port rysunków `pHmeter`/`beaker` do klocka (kod w `_szkielet/che-lab-engine-v001/07_tubeRack.js`), potem jeden `bufor`.
- `kw-dysocjacja-v01`, `kw-reszty-v01`, `kw-wlasciwosci-v01`, `kw-szereg-metali-v01`, `kw-doswiadczenia-v01`: wymagają GFX (mount, rx) — port przez klocki rx-lite lub dopisanie rysunków naczyń.
- `ph-ladder` jest częścią panelu pH; `acid-table`/`ka-pka-table` (V.table/flowchart) — osobny port.
- Po porcie: podmienić `@model` na `@klocek` w N02, N03, N05 (używają `ph-indicators-v03`), potem usunąć duble.

## Użycia (przed zmianą)
| Wizualizacja | Lekcje×liczba |
|---|---|
| `ph-indicators-v03` | N03×2, N04×1 |
| `titration-merged` | N04×1 |
| `acid-rain-v01` | N04×1 |
| `kw-bufor-v01` | N04×1 |
| `kw-dysocjacja-v01` | N04×1 |
| `kw-reszty-v01` | N04×1, N05×1 |
| `kw-wlasciwosci-v01` | N04×1 |
| `kw-szereg-metali-v01` | N04×1, N05×1 |
| `kw-doswiadczenia-v01` | N04×11 |
| `ph-skala` | N04×1 |
| `kwasne-deszcze` | N04×1 |
| `bufor` | N04×1 |
| `kwasy-reszty` | N04×1 |
| `kwasy-wlasciwosci` | N04×1 |
| `kwasy-rozcienczanie` | N04×1 |
| `zlewka-rx` | N04×9 |
| `zlewki-rx` | N04×6 |
