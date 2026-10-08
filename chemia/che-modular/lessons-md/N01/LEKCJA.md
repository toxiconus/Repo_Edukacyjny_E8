---
code: N01
title: Tlenki
subject: chemia
status: design
planVisuals: true
domains: [atom, oxides, stoich, reactions, colors, lab-chem]
visuals:
  - n01-tlenki-v01
  - n01-konstruktor-v01
  - n01-reaktor-v01
  - n01-trend-v01
  - n01-spalanie-v01
  - n01-doswiadczenia-v01
  - gfx-scene-carbonate
  - stech-kalkulator-v01
vesselGroups: [chem.glassware, chem.heat, chem.setup, common.stage]
effectGroups: [chem.phase, chem.reaction, chem.heat, common.ui]
scenes: [carbonate, heating, gasCollection, acidMetal]
tables: [oxide-types, oxide-colors, periodic-basic]
layout:
  variant: chemia
  toc: float-hamburger
  header: standard
---

@header
code: N01
title: Tlenki
subject: chemia
badge: E8
@end

@toc
- minimum | Minimum E8
- cele | Cele
- typy | Typy tlenków
- bledy | Częste błędy
- tlenek-woda | Tlenek + woda
- doswiadczenia | Doświadczenia
- fiszki | Fiszki
- podsumowanie | Podsumowanie
- plan-wizuali | Plan wizuali
@end

# {{title}}

## Minimum E8 {#minimum}

$karta typ=exam
**Musisz umieć:**
- nazwać tlenek (stopień utlenienia)
- rozróżnić tlenek kwasowy / zasadowy / amfoteryczny / obojętny
- zapisać: pierwiastek + O₂, tlenek + H₂O, tlenek + kwas lub zasada
- związać obserwację (gaz, mętnienie, barwa) z równaniem
$end

---

## Cele {#cele}

- Klasyfikować tlenki i przewidywać zachowanie wobec wody.
- Budować wzory i bilansować proste równania.
- Opisać doświadczenia jakościowe (CO₂ + woda wapienna, spalanie).

**Pytanie przewodnie:** Skąd wiemy, że dany tlenek jest kwasowy albo zasadowy?

---

## Typy tlenków {#typy}

$karta typ=core
**Reguła orientacyjna:** tlenki metali (zwłaszcza 1–2 grupy) → zasadowe; tlenki niemetali → kwasowe; Al₂O₃, ZnO → amfoteryczne; CO, NO → obojętne (nie dają kwasu/zasady z wodą w sensie E8).
$end

```table
id: oxide-types
columns: [formula, type, with_water]
rows:
  - [Na₂O, zasadowy, "→ NaOH"]
  - [CaO, zasadowy, "→ Ca(OH)₂"]
  - [SO₃, kwasowy, "→ H₂SO₄"]
  - [CO₂, kwasowy, "⇌ H₂CO₃"]
  - [Al₂O₃, amfoteryczny, "—"]
  - [CO, obojętny, "—"]
engine: CHE.OXIDES
status: partial
```

$gfx view=n01-tlenki-v01 caption="Przegląd typów tlenków"
$gfx view=n01-trend-v01 caption="Trend w układzie okresowym"

---

## Częste błędy {#bledy}

$tabela_bledy
Charakter | Tlenek kwasowy z wodą daje kwas tlenowy | „Kwasowy” = zawsze gaz lub zawsze z wodą burzy
Nazewnictwo E8 | tlenek żelaza(III), tlenek węgla(IV) | „trójtlenek żelaza” / „dwutlenek” jako jedyna nazwa na sprawdzianie
Amfoteryczność | Al₂O₃ reaguje z kwasem i z zasadą | Amfoteryczny = „obojętny”
CO₂ + woda wapienna | Najpierw mętnienie (CaCO₃), nadmiar CO₂ może rozjaśnić | Mętnienie = zawsze koniec reakcji
Spalanie C | C + O₂ → CO₂ (dostatek tlenu); mało tlenu → CO | Zawsze tylko CO₂
$end

---

## Tlenek + woda {#tlenek-woda}

- Zasadowy: `CaO + H₂O → Ca(OH)₂`
- Kwasowy: `SO₃ + H₂O → H₂SO₄`, `CO₂ + H₂O ⇌ H₂CO₃`

$gfx view=gfx-scene-carbonate caption="CO₂ + woda wapienna — zmętnienie"
$gfx view=n01-reaktor-v01 caption="Reaktor: ścieżki tlenek + H₂O / kwas / zasada"

---

## Doświadczenia {#doswiadczenia}

| Próba | Obserwacja | Wniosek |
|-------|------------|---------|
| CaO + H₂O | ciepło, pH > 7 | tlenek zasadowy |
| CO₂ + Ca(OH)₂ | mętnienie | powstaje CaCO₃ |
| Spalanie S (pokaz) | gaz, zapach | tlenek kwasowy SO₂ |

$callout typ=bhp
Spalanie Mg / termit — tylko pokaz nauczyciela, ochrona wzroku.
$end

$gfx view=n01-doswiadczenia-v01 caption="Zestaw doświadczeń N01"
$gfx view=n01-spalanie-v01 caption="Spalanie pierwiastka w tlenie"

---

## Fiszki {#fiszki}

$fiszki_panel title="Powtórka: tlenki"
$fiszka "Tlenek zasadowy + woda" | "Wodorotlenek (np. CaO → Ca(OH)₂)" tag=basic
$fiszka "Tlenek kwasowy + woda" | "Kwas tlenowy (np. SO₃ → H₂SO₄)" tag=basic
$fiszka "Al₂O₃ — jaki charakter?" | "Amfoteryczny — z kwasem i zasadą" tag=exam
$fiszka "CO₂ + woda wapienna" | "Mętnienie: CaCO₃↓" tag=exam
$fiszka "Wzór tlenku żelaza(III)" | "Fe₂O₃" tag=basic
$fiszka "CO — charakter na E8" | "Obojętny (nie tworzy kwasu/zasady z H₂O w programie)" tag=extra
$end

---

## Podsumowanie {#podsumowanie}

- Typ tlenku ↔ zachowanie wobec wody i kwasu/zasady.
- Nazwy ze stopniem utlenienia na E8.
- Obserwacja laboratoryjna ma swoje równanie.

---

## Plan wizuali {#plan-wizuali}

| Potrzeba | view | status |
|----------|------|--------|
| Przegląd typów | n01-tlenki-v01 | ok |
| Trend PT | n01-trend-v01 | ok |
| Reaktor | n01-reaktor-v01 | ok |
| CO₂ / węglan | gfx-scene-carbonate | ok |
| Spalanie | n01-spalanie-v01 | ok |
| Doświadczenia | n01-doswiadczenia-v01 | ok |

$callout typ=info
Parity: `python3 tools/md_parity.py N01`
$end
