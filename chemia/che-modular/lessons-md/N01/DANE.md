# N01 · dane: silnik ↔ MD

Status: **parity w toku** (uzupełniane toolami i skanem).

## Tablice z rejestru

| id tablicy | W MD | W `tables/index.json` | Źródło silnika | Status |
|------------|------|------------------------|----------------|--------|
| oxide-types | tak | tak | CHE.OXIDES / DATA.OXIDES | partial |
| oxide-colors | tak | tak | DATA.OXIDES | partial |
| periodic-basic | tak | tak | DATA.ELEMENTS | ok |
| molar-masses | (domena stoich) | tak | derived | ok |
| ion-colors | (domena colors) | tak | CHE.COLORS | ok |

## Tlenki użyte w lekcji (`data-ox` ze skanu)

Al₂O₃, B₂O₃, BeO, CaO, CrO₃, Cu₂O, CuO, Fe₂O₃, FeO, HgO, K₂O, Li₂O, MgO, Mn₂O₇, MnO₂, N₂O₅, NO₂, Na₂O, P₂O₅, P₄O₁₀, SO₃, SiO₂, ZnO  

**Parity:** każdy powinien mieć wpis w `DATA.OXIDES` (wzór, typ, barwa jeśli pokazywana).

## Reakcje (`data-rx` ze skanu)

ag2oDecomp, al2o3Hcl, al2o3NaohMelt, alO2, baoH2o, cO2, caoCo2, caoH2o, caoHcl, caoh2Co2, cuoC, cuoH2, cuoH2so4, fe2o3Co, fe2o3Hcl, hgoDecomp, k2oH2o, mgO2, n2o5H2o, na2oH2o, na2oHno3, naohCo2, p2o5H2o, p4o10H2o, pO2, pbo2Decomp, sO2, so2H2o, so3H2o, so3Naoh, termit, znoHcl, znoNaoh  

**Uwaga:** część jest w `DATA.REACTIONS`, część ma preset w `LAB.GFX` (`P('caoH2o')` itd.) — nie wszystkie rx mają animację w zlewce. W MD nie obiecywać „Zobacz w zlewce”, jeśli brak `GFX.rx`.

## Luki (do decyzji)

| Brak | Opcja A (silnik) | Opcja B (MD) |
|------|------------------|--------------|
| Preset GFX dla `termit` | dodać scenę/rx | tylko opis + ostrzeżenie BHP, bez przycisku pracowni |
| Barwa Mn₂O₇ / CrO₃ | dopisać w OXIDES/COLORS | nie kolorować w tabeli |
| `pbo2Decomp` w GFX | dodać | tylko równanie tekstowe |

## Reguła ujednolicania

1. Lista w MD ⊆ silnik **albo** świadomy TODO.  
2. Po dopisaniu do silnika — odhacz TODO i ustaw `status: ok` w bloku `table`.  
3. Pack HTML generować dopiero gdy krytyczne `data-rx` / tablice nie są `missing`.
