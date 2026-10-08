---
kod: PLAN-SCIEZKI
tytul: Kanon + zależności + ścieżki dydaktyczne
status: plan do możliwego użycia (nie wdrożony)
data: 2026-10-08
zrodlo: propozycja z zewnętrznego LLM, poprawiona i uproszczona
---

# Plan: kanon lekcji + ścieżki dydaktyczne

## 1. Idea w jednym zdaniu

Numeracja lekcji (F01–F21, N01–N07 … P01–P08) zostaje na stałe jako **kanon**, a kolejność nauki dla konkretnego ucznia (klasa 7, klasa 8, LO) wyznacza osobna **ścieżka**, która tylko wskazuje lekcje z kanonu i nie zmienia ich numerów.

## 2. Ocena propozycji źródłowej

**Co jest dobre i zostaje**
- Rozdzielenie kanonu od kolejności nauki. Rozwiązuje realny problem: uczeń klasy 8 nie może przechodzić F01→F21, żeby dojść do wodorotlenków.
- Brak przenumerowania 110 lekcji — zero kosztu i zero bałaganu w plikach.
- Kontrolowane nakładanie się tematów (np. dysocjacja w N02 w wersji E8, pełna w J01, pogłębiona w J06–J09).
- N02 jako pierwszy test ścieżki — lekcja jest gotowa.

**Co poprawiam**

| problem w propozycji | poprawka |
|---|---|
| 6 typów powiązań (PREREQUISITES, RECOMMENDED_BEFORE, CAN_BE_TAUGHT_BEFORE, EXPANDS, PROGRAM_PATHS, OPTIONAL_FOR_PATH) — za dużo, nikt tego nie utrzyma przy 110 lekcjach | 3 powiązania: `wymaga`, `zalecane`, `poglebia`. Przynależność do ścieżki i jej obowiązkowość w jednym polu `sciezki` |
| Ścieżka wybiera całe lekcje, a lekcje F mieszają poziomy (F07 podpowłoki = LO, F14 w całości LO, F15 część LO) | Poziom na **sekcjach**: sekcje w md oznaczone `E8` / `LO`, ścieżka E8 pokazuje tylko sekcje E8 |
| „Mini-wstawka z fundamentów” bez opisu, skąd ją wziąć | Każda lekcja F dostaje krótki blok **ŚCIĄGA** (1 ekran). Lekcja N/R/J wstawia go makrem, gdy uczeń nie przeszedł danej lekcji F |
| Ścieżka „klasa 7” bez wiązań (F11) i bez równań (F16–F17), a z N01 przed roztworami — niezgodna z podstawą | Ścieżki ułożone wg działów podstawy E8 (sekcja 5), do weryfikacji |
| Ścieżka „klasa 8” kończy się na solach — brak chemii organicznej (działy VIII–X) | Dodane O01–O17 w wersji E8 |
| Mol (R05) w kolejności E8 | Mol to LO — poza ścieżką E8 |
| Ścieżki BIOL-CHEM, POWTÓRKA_E8 na start | Odłożone. Na start tylko E8-kl7, E8-kl8; LO później |
| „Najpierw przeanalizujmy wszystkie 110 lekcji” — drogie i przedwczesne (82 lekcje to sam tytuł) | Zależności wpisujemy tylko do lekcji, które istnieją (F01–F21, N01–N05); reszta przy pisaniu lekcji |

## 3. Cztery warstwy (uproszczone)

1. **Kanon** — kod + tytuł lekcji. Stały. Już jest (`CHE_SPIS_LEKCJI.md`).
2. **Zależności** — w frontmatter każdej lekcji md (jedno źródło prawdy, bez osobnej bazy).
3. **Ścieżki** — małe pliki `sciezki/E8-kl7.md`, `E8-kl8.md`, później `LO-P.md`, `LO-R.md`: lista kodów w kolejności + poziom (`E8`/`LO`) + tryb (`pelna` / `sciaga` / `pomin`).
4. **Wejście „teraz”** — „klasa 8 → wodorotlenki”: narzędzie bierze N02, dokłada z zależności brakujące ściągi i pokazuje zestaw.

## 4. Format danych

### Frontmatter lekcji

```yaml
kod: N02
tytul: Wodorotlenki i zasady
wymaga: [F02, F09, F12]        # bez tego lekcja nie ma sensu → ściąga obowiązkowa
zalecane: [F04, F06]           # lepiej znać, ściąga opcjonalna
poglebia: [J01, J02, J05]      # gdzie temat wraca szerzej
poziomy: [E8, LO]              # jakie warstwy sekcji ma lekcja
```

### Sekcja z poziomem (md)

```md
## Dysocjacja wodorotlenków {poziom=E8}
## Stała dysocjacji zasady {poziom=LO}
```

### Plik ścieżki

```md
# Ścieżka E8 — klasa 8
| kod | poziom | tryb |
|---|---|---|
| F12 | E8 | sciaga |
| N02 | E8 | pelna |
| N03 | E8 | pelna |
```

### Narzędzie (jeden skrypt, np. `narzedzia/sciezki.py`)
- sprawdza: czy kody istnieją, brak cykli w `wymaga`, czy każda lekcja ścieżki ma spełnione `wymaga` (wcześniej w ścieżce albo jako ściąga);
- generuje: mapę zależności (md/mermaid) i spis ścieżki z linkami do HTML;
- `md2html.py --poziom E8` — buduje HTML tylko z sekcji danego poziomu.

## 5. Szkic ścieżek E8 (wg działów podstawy programowej — do weryfikacji z aktualną podstawą)

| dział podstawy E8 | klasa | lekcje kanonu | uwagi |
|---|---|---|---|
| I. Substancje i ich właściwości | 7 | F01, F02, F03 | |
| II. Wewnętrzna budowa materii | 7 | F04, F05, F06, F07(E8), F09, F10, F11, F13(E8), F15(E8) | F07, F13, F15 tylko sekcje E8; F08, F14 pomijamy |
| III. Reakcje chemiczne | 7 | F16, F12, F17 | |
| IV. Powietrze i inne gazy | 7 | N01 (E8), N05 (część: wodór) | |
| V. Woda i roztwory wodne | 7 | R01, R02, R03 | R04 (molowe) = LO |
| VI. Kwasy i wodorotlenki | 8 | N02, N03 + J01, J02 jako sekcje E8 | J01/J02 wchodzą jako ściągi lub sekcje E8 w N02/N03 |
| VII. Sole | 8 | N04, J03, J04 (E8) | |
| VIII. Związki węgla z wodorem | 8 | O01, O02, O03, O04, O07 | O05 areny, O06 izomeria = LO |
| IX. Pochodne węglowodorów | 8 | O08, O09, O10 | |
| X. Substancje o znaczeniu biologicznym | 8 | O11, O12–O14 (E8), O15–O17 (E8) | |
| powtórka / integracja | 8 | F18–F21 (wybór) | na koniec klasy 8 przed egzaminem |

Wniosek ze szkicu: blok F rozkłada się na całą klasę 7, a nie stoi jako 21 lekcji przed wszystkim — dokładnie to, co propozycja chciała osiągnąć.

## 6. Kolejność wdrożenia (gdy zapadnie decyzja)

1. Frontmatter `wymaga/zalecane/poglebia/poziomy` w F01 i N02 (próba na 2 lekcjach).
2. Ściąga w F09 i F12 + makro wstawiające ją do N02.
3. `sciezki/E8-kl8.md` (tylko dział VI) + `sciezki.py` w wersji „sprawdź”.
4. `md2html.py --poziom E8` na N02 — porównanie z obecnym HTML.
5. Jeśli działa: reszta F01–F21 i N01–N05, potem pełne ścieżki E8-kl7 i E8-kl8.
6. LO-P / LO-R dopiero po zbudowaniu bloków R i J.

## 7. Ryzyka

- Oznaczanie sekcji poziomem w istniejących lekcjach (N01–N05 po ~100 KB) — praca ręczna; robić tylko przy okazji edycji lekcji.
- Dwa poziomy w jednym pliku mogą rozjechać numerację zadań i odpowiedzi — zadania też muszą mieć `{poziom=…}`.
- Podział na działy podstawy (sekcja 5) trzeba sprawdzić z aktualnym rozporządzeniem (podstawa po zmianach 2024).
