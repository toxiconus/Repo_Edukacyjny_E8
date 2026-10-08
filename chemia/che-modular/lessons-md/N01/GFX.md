# N01 · mapa GFX i widoków

Słownik wizualny: `engine/docs/gfx/VESSELS.md`, `EFFECTS.md`, `SCENES.md`.

## Widoki silnika (VIEW)

| id | Po co w lekcji | Caption (projekt) |
|----|----------------|-------------------|
| `n01-tlenki-v01` | Przegląd typów tlenków | Przegląd tlenków — typ i reakcja |
| `n01-konstruktor-v01` | Budowa wzoru tlenku | Konstruktor wzorów |
| `n01-reaktor-v01` | Ścieżki reakcji | Reaktor: spalanie / +H₂O / +kwas |
| `n01-trend-v01` | Trend w układzie okresowym | Metale→zasadowe, niemetale→kwasowe |
| `n01-spalanie-v01` | Spalanie pierwiastka | Mg/S/C w tlenie |
| `n01-doswiadczenia-v01` | Lista prób laboratoryjnych | Wybór doświadczenia |
| `gfx-scene-carbonate` | CO₂ + woda wapienna | Burzenie i zmętnienie |
| `molecule3d-merged` | Model cząsteczki tlenku | 3D |
| `periodic-54` | Kontekst układu okresowego | PT |
| `chain-scn` | Łańcuch przemian | Od pierwiastka do soli |
| `stech-kalkulator-v01` | Liczenie z równania | Stechiometria |

## Sceny pracowni

| scene | Naczynia | Efekty | Moment w lekcji |
|-------|----------|--------|-----------------|
| `heating` | testTube, burner, stand | flame, heatGlow, solids | spalanie / ogrzewanie |
| `carbonate` | testTube, beaker | bubbles, liquid, turbidity | CO₂ + Ca(OH)₂ |
| `gasCollection` | testTube, gasCollect | bubbles, liquid | zbieranie O₂/CO₂ (opcjonalnie) |
| `acidMetal` | testTube, beaker | bubbles, liquid, heatGlow | tlenek/metal + kwas |

## Naczynia (z grup)

Z `vesselGroups` lekcji wynikają m.in.: **testTube**, **beaker**, **flask**, **burner**, **stand**, **tubeRack**, **crucible** (termit — pokaz).

Użycie w tekście MD:
- „W **probówce** …” → `testTube`
- „W **zlewce** z wodą wapienną …” → `beaker` + `turbidity`

## Efekty — kiedy który

| Efekt | Znaczenie dydaktyczne |
|-------|------------------------|
| `flame` | Spalanie, barwa płomienia |
| `heatGlow` | Reakcja egzoenergetyczna / ogrzewanie |
| `bubbles` | Wydzielanie gazu (CO₂, H₂, O₂) |
| `turbidity` | Osad CaCO₃ — zmętnienie |
| `precipitate` | Osad na dnie (nie tylko zmętnienie) |
| `solids` | Proszek tlenku, opiłki metalu |
| `fumes` | Opary SO₂ / dym |
| `liquid` | Zawsze przy roztworze — kolor z danych |
| `label` | Wzór na etykiecie naczynia |

## Zasady wyglądu (design)

1. Jedna scena = jedna myśl obserwacyjna (nie 5 gazów naraz).  
2. Kolor cieczy / osadu **z silnika** (COLORS / OXIDES), nie „z pamięci” HTML.  
3. `caption` w MD = podpis pod modelem w HTML.  
4. Jeśli brak `view` w silniku → zostaw w TODO, nie udawaj przycisku.
