---
code: N0X
title: Tytuł lekcji chemii
subject: chemia
status: design
# Domeny silnika (packer / parity) — usuń zbędne
domains: [atom, oxides, stoich, reactions, colors, lab-chem]
# Warianty użycia wizualizacji:
#   visuals: []                    → lekcja bez modeli (tylko tekst + fiszki)
#   visuals: [id1, id2]            → jawna lista widoków silnika
#   planVisuals: true              → sekcja „Plan wizuali” w MD (do parity)
#   planVisuals: false             → bez planowania GFX na tym etapie
planVisuals: true
visuals: []
vesselGroups: [chem.glassware, chem.setup, common.stage]
effectGroups: [chem.phase, chem.reaction, common.ui]
scenes: []
tables: []
layout:
  variant: chemia
  toc: float-hamburger
  header: standard
---

@header
code: N0X
title: Tytuł lekcji chemii
subject: chemia
badge: E8
@end

@toc
- minimum | Minimum E8
- jak-pracowac | Jak pracować
- cele | Cele
- kompas | Kompas
- teoria | Treść główna
- doswiadczenia | Doświadczenia
- cwiczenia | Ćwiczenia
- fiszki | Fiszki
- podsumowanie | Podsumowanie
- checklista | Checklista
@end

<!--
  MAKRA (builder rozumie / planowane):
  $fiszka "przód" | "tył" [tag=basic|exam|extra|error]
  $flip "przód" | "tył"
  $fiszka_talia  ...  $end          → kilka fiszek w siatce
  $karta typ=understand|exam|basic|warning
  ...treść...
  $end
  $gfx view=id caption="…"          → tylko gdy planVisuals / visuals
  $callout typ=info|warn|bhp
  ...
  $end
  $tabela id=oxide-types            → blok table + parity

  Wariant BEZ wizuali: planVisuals: false i nie używaj $gfx / @plan-wizuali
-->

# {{title}}

## Minimum E8 {#minimum}

$karta typ=exam
**Musisz umieć:**
- fakt 1
- fakt 2
- fakt 3
$end

---

## Jak pracować z lekcją {#jak-pracowac}

1. Przeczytaj **Minimum E8**.
2. Przejdź sekcje z przykładami.
3. Zrób **ćwiczenia**, potem **fiszki**.
4. (Opcjonalnie) otwórz modele w labie — tylko jeśli są w `visuals`.

$callout typ=info
Bez pośpiechu: najpierw sens, potem wzory.
$end

---

## Cele {#cele}

- Cel 1 (wiadomości)
- Cel 2 (umiejętności: zapis równania / odczyt tabeli)
- Cel 3 (doświadczenie → obserwacja → wniosek)

**Pytanie przewodnie:** …?

---

## Kompas — co trzeba wiedzieć wcześniej {#kompas}

- Wiązanie / wzór sumaryczny / …
- Tabele: … (id z `tables:` w frontmatter)

---

## Treść główna {#teoria}

### Definicje i nazewnictwo

…

### Kluczowa reguła

$karta typ=core
**Reguła:** …
$end

### Przykłady

…

$karta typ=error
**Częsty błąd:** …
$end

---

## Doświadczenia {#doswiadczenia}

<!-- Wariant A: tylko opis (bez GFX) -->
| Próba | Obserwacja | Wniosek |
|-------|------------|---------|
| A | | |
| B | | |

<!-- Wariant B: z modelem — odkomentuj gdy planVisuals: true
$gfx view=n0x-reaktor-v01 caption="Krótki podpis pod modelem"
-->

$callout typ=bhp
**BHP:** …
$end

---

## Ćwiczenia {#cwiczenia}

1. …
2. …

$karta typ=exam
**Zadanie egzaminacyjne (szkic):** …
$end

---

## Fiszki {#fiszki}

<!-- Jedna fiszka: przód | tył -->
$fiszka "Pytanie / pojęcie" | "Odpowiedź / definicja" tag=basic

$fiszka "Wzór / reakcja" | "Nazwa / warunki" tag=exam

<!-- Talia (kilka stron / kart w siatce) -->
$fiszka_talia
$fiszka "Strona 1 przód" | "Strona 1 tył" tag=basic
$fiszka "Strona 2 przód" | "Strona 2 tył" tag=extra
$fiszka "Strona 3 przód" | "Strona 3 tył" tag=exam
$end

<!-- Alias: $flip = to samo co $fiszka (jedna karta odwracana) -->
$flip "Co widzisz w probówce?" | "Osad / gaz / barwa → wniosek"

---

## Podsumowanie {#podsumowanie}

- …
- …

---

## Checklista {#checklista}

- [ ] Wiem minimum E8
- [ ] Potrafię zapisać kluczowe równania
- [ ] Rozumiem doświadczenia (obserwacja → wniosek)
- [ ] Przerobiłem fiszki
- [ ] (Jeśli wizuale) otworzyłem modele z listy `visuals`

---

## Plan wizuali {#plan-wizuali}

<!-- Usuń całą sekcję albo ustaw planVisuals: false w frontmatter,
     jeśli ta lekcja ma być czysto tekstowa. -->

| Potrzeba dydaktyczna | view / scene | caption | status |
|----------------------|--------------|---------|--------|
| Reaktor / ścieżka reakcji | `…-reaktor-v01` | | missing |
| Tabela / trend | | | |
| Probówka / zlewka | scene: … | | |

$callout typ=info
Parity: `python3 tools/md_parity.py N0X` — sprawdza, czy `visuals` i sceny są w rejestrze.
$end

---

## TODO silnik {#todo}

- [ ] data-rx / tablice
- [ ] ewentualne nowe $gfx view=
- [ ] po gotowości: `status: ready` → pack / integracja
