---
kod: F13
tytul: "Wzory elektronowe (Lewis)"
poziom: E8+LO
wymaga: "F11; F12"
poglebia: "F14; F15; F18"
zrodla: "MASTER v17.0; MASTER v15.0"
opis: "Materiał roboczy lekcji (nie gotowa lekcja). Spis i zakres: chemia/plany/CHE_SPIS_TRESCI.md"
---
# CHE.01F.13-LEWIS — STRUKTURY LEWISA I ELEKTRONY WALENCYJNE

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

1. struktura Lewisa pokazuje elektrony walencyjne i wiązania
2. para wspólna może być pokazana kreską
3. wolne pary należą do atomu
4. dla H₂ każdy H uczestniczy w jednej wspólnej parze
5. dla H₂O tlen ma dwie wolne pary
6. Lewis jest modelem 2D, nie pełnym obrazem 3D
7. ładunki formalne są rozszerzeniem LO
8. liczba elektronów walencyjnych musi się zgadzać
9. Lewis przygotowuje do VSEPR
10. Lewis nie zastępuje wzoru sumarycznego

### Diagnoza wejściowa

1. Co pokazuje Lewis?
2. Ile e⁻ walencyjnych ma O?
3. Ile wolnych par ma O w H₂O?
4. Co oznacza kreska między atomami?
5. Czy Lewis pokazuje geometrię 3D?
6. Po co liczyć wszystkie e⁻ walencyjne?

**Klucz:** 1 e⁻ walencyjne/wiązania; 2 6; 3 2; 4 parę wspólną; 5 nie; 6 kontrola modelu

**Interpretacja:**
- **0–2/6** → zacznij od rdzenia lekcji i wróć do przykładów krok po kroku.
- **3–4/6** → przejdź przez rdzeń, szczególnie punkty z błędami.
- **5–6/6** → przejdź szybko do ROZUMIENIA / zadań transferowych.


**Pytanie przewodnie:** Jak przejść od konfiguracji elektronowej do struktury wiązania?

## Wykład

Struktura Lewisa jest modelem zapisu elektronów walencyjnych. Pokazuje:
- pary wiążące;
- pary niewiążące;
- wiązania pojedyncze, podwójne i potrójne;
- w odpowiednim rozszerzeniu — ładunki formalne.

## Algorytm

1. Zsumuj elektrony walencyjne.
2. Wybierz atom centralny.
3. Połącz atomy wiązaniami pojedynczymi.
4. Uzupełnij oktety atomów zewnętrznych.
5. Elektrony pozostałe umieść przy atomie centralnym.
6. Jeśli centralny atom nie spełnia modelu, rozważ wiązania wielokrotne.
7. Dla jonów dodaj/odejmij elektrony zgodnie z ładunkiem.
8. Sprawdź sumę elektronów.

### Przykład H₂O

Elektrony walencyjne:
`2×1 + 6 = 8`.

Dwa wiązania O–H zużywają 4 elektrony. Pozostałe 4 tworzą dwie wolne pary na O.

### CO₂

`O=C=O`.

Wiązania podwójne pozwalają uzyskać strukturę zgodną z podstawowym modelem oktetu.

## Ładunki formalne

Dla ambitnego poziomu:
`ładunek formalny = elektrony walencyjne atomu wolnego − elektrony przypisane atomowi w strukturze`.

Struktury rezonansowe pokazują, że jeden rysunek Lewisa nie zawsze oddaje pełny rozkład elektronów.

## Wizualizacja `V010v001`

Automatyczny budowniczy Lewisa:
- licznik elektronów;
- przeciąganie par;
- automatyczna kontrola sumy;
- ostrzeżenie o niepełnym/rozszerzonym oktecie;
- przejście do VSEPR.

**Poprawka:** nie przedstawiać par jako „małych kulek elektronów” w dosłownym sensie. To zapis modelowy.

## Checklista „Umiem…”

- [ ] liczę elektrony walencyjne
- [ ] buduję prosty Lewis
- [ ] zaznaczam wolne pary
- [ ] kontroluję sumę elektronów
- [ ] rozumiem ograniczenia modelu 2D
- [ ] łączę Lewis z F14

## Most

Lewis mówi o organizacji elektronów. VSEPR pozwoli przewidzieć, **jak domeny elektronowe układają się w przestrzeni**.


---

## — WZORY CHEMICZNE

### A. Główna ścieżka

```text
nazwa / jony
→ rozpoznanie składników
→ ładunki
→ najmniejszy wspólny wielokrotność
→ indeksy
→ nawiasy
→ kontrola elektrycznej obojętności
→ nazwa
```

### B. Algorytm W–K–S–K

```text
W — wypisz jony / składniki
K — kontroluj ładunki
S — skróć do najmniejszych całkowitych indeksów
K — kontrola końcowa
```

### C. Konstruktor wzoru

Obowiązkowe przypadki:

```text
Na⁺ + Cl⁻ → NaCl
Mg²⁺ + Cl⁻ → MgCl₂
Al³⁺ + O²⁻ → Al₂O₃
Ca²⁺ + OH⁻ → Ca(OH)₂
Al³⁺ + SO₄²⁻ → Al₂(SO₄)₃
NH₄⁺ + NO₃⁻ → NH₄NO₃
```

Rozszerzenie:

```text
CuSO₄·5H₂O
```

### D. Kontrola automatyczna

Parser powinien potrafić:

- policzyć atomy,
- rozpoznać nawiasy,
- rozpoznać indeksy,
- rozpoznać ładunki,
- rozpoznać wodę krystalizacyjną,
- sprawdzić bilans ładunku,
- rozdzielić wzór sumaryczny od informacji strukturalnej.

### E. Ważne rozróżnienie

```text
2H₂O ≠ H₄O₂ jako zapis reakcji
```

Współczynnik mówi o liczbie jednostek / cząsteczek, a indeks jest częścią wzoru.

---


### ZINTEGROWANE FRAGMENTY CHE.ALL — v12.0

> Materiał przeniesiony z warstwy migracyjnej do kanonicznej lekcji. Treść zachowana; usunięto wyłącznie powtórzenia wykazane w audycie.

#### STANDARD ZAPISU CHEMICZNEGO (pakiet v2.0)

## STANDARD ZAPISU CHEMICZNEGO (pakiet v2.0)

<!-- KEEP: konwencja dla MD i przyszłego HTML -->

W tym pliku wzory zapisujemy **Unicode z indeksami dolnymi**, nie „CaOH2”.

| Złe / niepełne | Poprawnie | Uwaga |
|----------------|-----------|--------|
| CaOH, CaOH₂ | Ca(OH)₂ | nawias na całą grupę OH |
| FeOH | Fe(OH)₂ albo Fe(OH)₃ | według wartościowości |
| AlOH | Al(OH)₃ | |
| AlO | Al₂O₃ | |
| NaO | Na₂O | |
| SO (gdy chodzi o tlenki szkolne) | SO₂ albo SO₃ | S(IV) vs S(VI) |
| CO (gdy produkt spalania całkowitego) | CO₂ | CO to inny tlenek |
| HSO | H₂SO₄ | |
| NaSO | Na₂SO₄ | |
| FeNO | Fe(NO₃)₃ | grupy NO₃ w nawiasie |

**Strzałka reakcji:** `→`. Osad: `↓`. Gaz: `↑` gdy potrzeba.

**Trzy zapisy, których nie wolno mylić:**
- wartościowość — cyfra rzymska, np. Fe(III);
- ładunek jonu — arabska ze znakiem, np. Fe³⁺;
- stopień utlenienia — rzymska ze znakiem, np. Fe(+3).

**Masy:**
- liczba masowa **A** = p⁺ + n⁰ w **danym izotopie** (całkowita);
- względna masa atomowa **Aᵣ** — średnia izotopów z układu okresowego;
- względna masa cząsteczkowa **Mᵣ** — suma Aᵣ; dla kryształu jonowego lepiej: **masa jednostki wzoru**.

W HTML później: `Ca(OH)<sub>2</sub>`. Znaczniki warstw (`:::layer{.basic}`) — specyfikacja, nie wymuszane w całym MD teraz.

Gdy w klinice widać `CaOH` / `CaOH₂`, to **przykład błędu**, obok stoi poprawny wzór.

---

<!-- źródłowy fragment: ## STANDARD ZAPISU CHEMICZNEGO (pakiet v2.0); dopasowanie: :3, :3, :2, :2 -->

#### A5. Mnemotechniki (rdzeń kursu)

## A5. Mnemotechniki (rdzeń kursu)

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | Z = protony; A = p⁺+n⁰ | liczby |
| 2 | Kation oddał, anion przyjął | jony |
| 3 | W–K–S–K | wzory |
| 4 | Współczynniki tak, indeksy nie | bilans |
| 5 | Kwas do wody | BHP |
| 6 | Zapach — wachluj | BHP |
| 7 | Kontakt — płucz wodą | BHP |
| 8 | Nawias = pudełko na grupę | Ca(OH)₂ |
| 9 | Nawias gdy grupa się powtarza | wzory |
| 10 | H–I, O–II, Al–III, C–IV | wartościowość |
| 11 | Kwasy: beztlenowe „-owodorowy”, tlenowe z cyfrą | nazwy kwasów |
| 12 | Reszta kwasowa = kwas minus H⁺ | Cl⁻, SO₄²⁻, NO₃⁻ |
| 13 | Zobojętnianie: kwas + zasada → sól + woda | sole |
| 14 | Rozpuszczalne sole: azotany(V), metale alkaliczne | tabela rozpuszczalności |
| 15 | Spalanie: całkowite → CO₂ + H₂O; niecałkowite → CO + C | węglowodory |
| 16 | UTLENIACZ przyjmuje e⁻; REDUKTOR oddaje e⁻ | redoks |
| 17 | Obserwacja ≠ wniosek | doświadczenia |

Opcjonalne: S A W P S · exo/endo · F>O>N>Cl · metal oddaje / niemetal bierze.

Żarty tylko jako haczyk pamięciowy — nie w odpowiedzi na sprawdzianie.

---

<!-- źródłowy fragment: ## A5. Mnemotechniki (rdzeń kursu); dopasowanie: :3, X08:2, N04:2, J09:2 -->

#### Ćwiczenia (basic + train)

Wzory i nazwy · charakter · dokończ +H₂O · popraw FeO₃ / Ca₂O₂.

<!-- źródłowy fragment: ### Ćwiczenia (basic + train); dopasowanie: :1 -->

#### L001 — Powtórka fundamentów z klasy 7 (start klasy 8)

## L001 — Powtórka fundamentów z klasy 7 (start klasy 8)

**Wartościowość · budowa atomu · jony · układ okresowy · wiązania · wzory · równania**

**MASTER v3.1** · źródło prawdy dla HTML · 2026-09-11 
Wzorzec struktury: POLSKI: PODSTAWA PLUS (GLOBALNY SCHEMAT + warstwy) 
Wizualizacja: HTML bez paska postępu, bez emoji, praca we własnym tempie

**Kolejność logiczna treści:** atom → jon → wartościowość / ładunek → wzór → wiązanie → równanie

**Zasada techniczna:** ten plik MD jest MASTER. HTML L001 jest jego wiernym rozwinięciem. Indeks L000 linkuje do L001 MASTER.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane (VSEPR, hybrydyzacja…) | tylko po opanowaniu podstawy; nie wymagane na sprawdzianach szkolnych | fiolet / osobna sekcja |

**Zmiany w v3.0 (względem 2.7):**
· MASTER: MD = źródło prawdy; HTML = forma
· ujednolicona numeracja lekcji w indeksie L000 (L001 → L002 tlenki → …)
· wartościowość: mocniejsza ramka „model szkolny” + tabela Typowo / Rozszerzenie
· O i H: sformułowania „najczęściej / w modelu szkolnym” zamiast absolutów
· stały format DOŚWIADCZENIE (problem → hipoteza → sprzęt → obserwacja → wniosek → równanie → BHP)
· stały blok: obserwacja ≠ wniosek
· rozbudowany format Kliniki błędów (błąd → reguła → zadanie podobne → pułapka)
· kontrprzykłady jako element stały
· warstwa zaawansowana (VSEPR, hybrydyzacja sp³, moment dipolowy, energia wiązania) przeniesiona z HTML i oznaczona jako „nie musisz teraz”
· słownik definicji jednym zdaniem jako oficjalne źródło terminologii kursu
· zakres: odniesiony do podstawy programowej obowiązującej dla danego rocznika (nie „MEN” ogólnie)
· zachowana cała treść v2.7 bez skracania

**Zmiany w v2.7 (względem 2.6):**
· Cl: I w chlorkach; III/V/VII w związkach tlenowych (rozszerzenie)
· P: III lub V; względem H zwykle III, maks. względem O = V
· wartościowość maksymalna vs numer grupy (stary system A)
· silniejsza ramka P₂O₅ / P₄O₁₀
· wiązanie jonowe = przyciąganie w sieci krystalicznej
· definicja elektronów walencyjnych + prostszy okres
· definicja wzoru sumarycznego przed W–K–S–K
· tabela indeks / współczynnik / nawias w jednym miejscu
· cele w języku ucznia
· idea równowagi „rąk” przed algorytmem krzyżowania
· dwa tryby zapisu wzorów (wartościowość vs ładunki)
· ograniczone mnemoniki rdzeniowe
· etymologie rozszerzone
· poprawki redakcyjne (80/20, szkło, spójność)

**Zmiany w v2.6 (względem 2.5):**
· poprawiony przykład grupy octanowej (CH₃COONa)
· HCl jako kowalencyjne spolaryzowane
· elektroujemność: największa tylko F
· precyzyjniejsze P₂O₅ / P₄O₁₀
· złagodzona definicja spalania
· wzmocnione Ca(OH)₂ vs CaOH₂
· ramka ochronna wartościowości (model szkolny)
· wzór ładunku jonu = p⁺ − e⁻
· kontrprzykład okres/jon (Na vs Na⁺)
· tabela grupa ≠ wartościowość (Cl)
· algorytm rozpoznawania wiązań 1–5
· „współczynnik mnoży wszystko”
· nowe typy zadań (wybierz regułę, P/F, od wzoru do wszystkiego)
· wyraźniejsze warstwy Musisz / Warto / Dla ciekawych

**Zmiany w v2.5:** 
· precyzja: masa cząsteczkowa vs masa jednostki wzoru 
· wyraźne rozdzielenie: wartościowość ≠ stopień utlenienia ≠ ładunek jonu ≠ indeks ≠ współczynnik 
· poprawiona definicja jonu (jedno- i wieloatomowy) 
· algorytm liczenia elektronów w jonie 
· wartościowość jako model „liczby rąk” + test równowagi 
· osłabiona reguła elektroujemności (orientacyjna) 
· powód reguły „kwas do wody” 
· usunięte pytanie o nietrwały SO 
· zadania o siarce oparte na konkretnych związkach 
· nowe 5-minutowe ćwiczenie diagnostyczne fundamentów 
· ulepszone skojarzenia

---

<!-- źródłowy fragment: ## L001 — Powtórka fundamentów z klasy 7 (start klasy 8); dopasowanie: :3, :3, :3, REV00:2 -->

#### 0. MAPA LEKCJI + ORIENTACJA

## 0. MAPA LEKCJI + ORIENTACJA

**Plan pracy**

1. Przypomnij – atom, jon, układ okresowy. 
2. Opanuj – wartościowość i układanie wzorów (kluczowy temat). 
3. Zastosuj – wiązania, typy reakcji, bilansowanie, ćwiczenia.

**Kluczowy temat:** wartościowość — bez niej nie ułożysz poprawnych wzorów w klasie 8.

**Flow:** 
BHP i atom → Jon → Układ okresowy → Wartościowość → Wzory → Wiązania → Równania → Strategie → Klinika błędów → Ćwiczenia

**Pułapki PODSTAWA:** 
· zmienianie indeksów przy bilansowaniu, 
· Fe / Cu bez podania wartościowości w nazwie, 
· mylenie liczby atomowej z masową (oraz z masą atomową z układu), 
· FeO₃ zamiast Fe₂O₃, 
· brak nawiasu przy powtarzającej się grupie atomów.

**Minimum vs rozszerzenie**

**Trzy warstwy — nie ucz się wszystkiego naraz:**

| Warstwa | Co opanować |
|---------|-------------|
| **Musisz umieć** | BHP, atom i jon, Z i A, wartościowość (H, O, grupy 1–2, Al, C, Fe), wzory, nawiasy, wiązania jonowe/kowalencyjne/metaliczne, bilans równań, typy: synteza/analiza/wymiana/spalanie |
| **Warto umieć** | Izotopy, wzory elektronowe, egzo/endotermiczne, wypieranie vs podwójna wymiana |
| **Dla ciekawych** | Trendy okresowe, elektroujemność i polaryzacja, rozpuszczalność, zapis jonowy, podpowłoki, izobary, P₄O₁₀, Mn/Cr wartościowości, wyjątki od oktetu, alotropia, masa jednostki wzoru |

**PODSTAWA (Musisz umieć):** atom, p⁺/n⁰/e⁻, Z, A, izotopy, jon, grupy i okresy, wartościowość, wzory sumaryczne, wiązanie jonowe i kowalencyjne, bilansowanie prostych równań.

**Dla chętnych / ambitnych:** konfiguracja podpowłokowa, izobary, P₄O₁₀, wyjątki od reguły oktetu, wartościowość a stopień utlenienia, sieci kowalencyjne, wiązanie metaliczne, elektroujemność, alotropia, zapis jonowy równań.

---

<!-- źródłowy fragment: ## 0. MAPA LEKCJI + ORIENTACJA; dopasowanie: :3, :3, :3, :2 -->

#### 1. CEL LEKCJI

## 1. CEL LEKCJI

**Po tej lekcji umiesz:**
- policzyć protony, neutrony i elektrony w atomie oraz jonie;
- odróżnić Z, A i masę atomową;
- ułożyć prosty wzór chemiczny z wartościowości;
- zastosować nawias przy grupie atomów;
- rozpoznać podstawowy typ wiązania;
- zbilansować równanie bez zmieniania indeksów.

Po tej lekcji uczeń:

- stosuje podstawowe zasady BHP w pracowni chemicznej,
- opisuje budowę atomu i oblicza liczbę p⁺, n⁰, e⁻,
- rozróżnia atom i jon (kation, anion),
- orientuje się w układzie okresowym (system 1–18) i przewiduje typową wartościowość pierwiastków grup głównych,
- **ustala wartościowość i układa poprawne wzory sumaryczne** (w tym z grupami atomów),
- rozróżnia wiązanie jonowe, kowalencyjne i metaliczne,
- bilansuje proste równania reakcji i rozpoznaje typy: synteza, analiza, wypieranie, podwójna wymiana, spalanie,
- rozróżnia reakcje egzotermiczne i endotermiczne,
- oblicza masę cząsteczkową prostych związków,
- zna pojęcie elektroujemności i potrafi je wykorzystać do przewidywania charakteru wiązania.

---

<!-- źródłowy fragment: ## 1. CEL LEKCJI; dopasowanie: :4, :3, :3, LAB12:2 -->

#### Krzyżowanie wartościowości — algorytm W–K–S–K

**Najpierw idea równowagi „rąk”:** 
W związku chemicznym liczba „rąk” użytych przez jeden pierwiastek musi zgadzać się z liczbą „rąk” użytych przez drugi. 
Dla Al(III) i O(II): najmniejsza wspólna liczba to 6, więc potrzeba 2 atomów Al i 3 atomów O → Al₂O₃. 
**Krzyżowanie nie jest sztuczką do zapamiętania — to skrót prowadzący do takiej równowagi.**

**W** — Wartościowości (zapisz cyframi rzymskimi nad symbolami). 
**K** — Krzyżuj (wartościowość jednego → indeks drugiego). 
**S** — Skracaj (podziel przez NWD). 
**K** — Kontrola (łączna wartościowość po obu stronach musi być równa).

Przykład kontroli: Alᴵᴵᴵ Oᴵᴵ → Al₂O₃; 2·III = 6 i 3·II = 6. 
Przykład skracania: Caᴵᴵ Oᴵᴵ → Ca₂O₂ → **CaO**.

**Dwa sposoby, ten sam wynik:** 
· wartościowość: Ca(II) i Cl(I) → CaCl₂ 
· ładunki jonów: Ca²⁺ i Cl⁻ → suma ładunków 0 → CaCl₂ 

**Reguła awaryjna — cały klocek:** 
Najpierw określ, co jest „całym klockiem”. Jeśli występuje jon wieloatomowy (OH⁻, SO₄²⁻, NO₃⁻), traktuj go jak jeden klocek podczas krzyżowania.

Przykład: Al³⁺ + SO₄²⁻ → Al₂(SO₄)₃ 
Kontrola ładunku: 2 · (+3) + 3 · (−2) = 0 

Nawias stawiamy, gdy indeks dotyczy całej grupy i jest większy od 1: 
· NaOH — bez nawiasu (jedno OH) 
· Ca(OH)₂ — nawias (dwa OH) 
· Al₂(SO₄)₃ — nawias (trzy SO₄)

**Dwa tryby zapisu wzorów:**

| Sytuacja | Najwygodniejsza metoda | Przykład |
|----------|------------------------|----------|
| Proste tlenki i związki kowalencyjne | Wartościowość | Al(III) i O(II) → Al₂O₃ |
| Sole i wodorotlenki z jonami | Ładunki jonów | Ca²⁺ i 2OH⁻ → Ca(OH)₂ |
| Nazwa zawiera cyfrę rzymską | Informacja z nazwy | chlorek żelaza(III) → FeCl₃ | 

**Wartościowość i ładunek — podobne, ale różne:**

- **Wartościowość** mówi, ile wiązań tworzy atom lub grupa atomów, np. Ca(II), Cl(I).
- **Ładunek jonu** mówi, czy jon ma niedobór albo nadmiar elektronów, np. Ca²⁺ i Cl⁻.
- W prostych związkach jonowych oba sposoby często prowadzą do tego samego wzoru, np. CaCl₂, ale **nie są tym samym pojęciem** — nie utożsamiaj ich.

<!-- źródłowy fragment: ### Krzyżowanie wartościowości — algorytm W–K–S–K; dopasowanie: :2, :2, :2, N04:1 -->

#### 5.5. Wzory sumaryczne + grupy atomów + wzory strukturalne

**Algorytm (krzyżowanie) + kontrola** — patrz ściąga. 
Metoda krzyżowania jest **skrótem**, nie magiczną regułą. Po ułożeniu wzoru zawsze sprawdź równość łącznej wartościowości.

**Przykład krok po kroku (Al + O):**

1. Symbole: Al O 
2. Wartościowości: Alᴵᴵᴵ Oᴵᴵ 
3. Krzyżowanie: Al₂O₃ (3 od O idzie do Al, 2 od Al idzie do O) 
4. Skracanie: 2 i 3 nie mają wspólnego dzielnika → zostaje Al₂O₃ 
5. Kontrola: 2·III = 6; 3·II = 6 → OK

**Przykład ze skracaniem (Ca + O):**

1. Caᴵᴵ Oᴵᴵ 
2. Krzyżowanie: Ca₂O₂ 
3. Skracanie: dzielimy przez 2 → CaO 
4. Kontrola: 1·II = 2; 1·II = 2 → OK

**Grupy atomów** (OH, NO₃, SO₄, CO₃, PO₄, NH₄, HCO₃, CH₃COO, MnO₄, CrO₄, Cr₂O₇) — patrz ściąga. Nawias przy powtórzeniu grupy.

**Hak pamięciowy:** 
**Nawias to pudełko na grupę.** 
Bez pudełka indeks „2” przykleiłby się tylko do ostatniego atomu — i wzór byłby błędny.

**Przykład z grupą (Ca + OH):**

1. Caᴵᴵ (OH)ᴵ 
2. Krzyżowanie: Ca₁(OH)₂ 
3. Indeks 1 pomijamy: Ca(OH)₂ 
4. Kontrola: 1·II = 2; 2·I = 2 → OK

**Wzory strukturalne i elektronowe (rozszerzenie):**

**Wzór strukturalny (kreskowy)** — pokazuje, które atomy są połączone i ile wiązań tworzą. Np. H–O–H, O=C=O, H–Cl.

**Wzór elektronowy (kropkowy, Lewisa)** — pokazuje elektrony walencyjne jako kropki. Np. H:H, Cl:Cl, H:Cl.

Te wzory pomagają zrozumieć, **skąd bierze się wartościowość** — widać, ile wiązań tworzy każdy atom.

**Przykłady:**

| Związek | Wzór sumaryczny | Wzór strukturalny | Wzór elektronowy |
|---------|-----------------|-------------------|------------------|
| woda | H₂O | H–O–H | H:O:H (z wolnymi parami na O) |
| dwutlenek węgla | CO₂ | O=C=O | :O::C::O: |
| metan | CH₄ | H–C(–H)(–H)–H | H:C:H z H pod i nad |
| chlor | Cl₂ | Cl–Cl | :Cl:Cl: |
| chlorowodór | HCl | H–Cl | H:Cl: | **kowalencyjne spolaryzowane** |

**Masa cząsteczkowa (rozszerzenie):**

**Masa cząsteczkowa** — suma mas atomowych wszystkich atomów we wzorze. 
Np. H₂O: 2·1 u + 16 u = 18 u. 
**Masa atomowa** — średnia ważona mas izotopów (liczba dziesiętna z układu okresowego). 
**Liczba masowa A** — liczba całkowita dla konkretnego izotopu.

**Przykłady obliczeń:**

| Związek | Obliczenie | Wynik |
|---------|-----------|-------|
| H₂O | 2·1 + 16 | 18 u (masa cząsteczkowa) |
| CO₂ | 12 + 2·16 | 44 u (masa cząsteczkowa) |
| NaCl | 23 + 35,5 | 5**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste** (masa jednostki wzoru) |
| Ca(OH)₂ | 40 + 2·(16+1) | 74 u (masa jednostki wzoru) |
| H₂SO₄ | 2·1 + 32 + 4·16 | 98 u (masa cząsteczkowa) |

<!-- źródłowy fragment: ### 5.5. Wzory sumaryczne + grupy atomów + wzory strukturalne; dopasowanie: :3, :2, :2, :2 -->

#### 5.7. Równania reakcji – podstawy

**Prawo zachowania masy:** w reakcji chemicznej atomy nie znikają i nie powstają z niczego — tylko łączą się inaczej. Dlatego liczba atomów każdego pierwiastka przed strzałką i po strzałce musi być taka sama.

**Procedura bilansowania**

1. Zapisz poprawne wzory substratów i produktów. 
2. Policz atomy każdego pierwiastka po obu stronach. 
3. Zacznij od pierwiastka występującego w najmniejszej liczbie wzorów. 
4. Ustaw współczynniki przed wzorami. 
5. Wodór i tlen zwykle na koniec. 
6. Sprawdź wszystkie pierwiastki; skróć współczynniki do najmniejszych liczb całkowitych. 
7. **Nigdy nie zmieniaj indeksów dolnych we wzorach.**

**Hak pamięciowy:** 
**„Współczynniki tak, indeksy nie!”**

**Współczynnik mnoży wszystko:** 
Współczynnik przed wzorem mnoży liczbę **wszystkich** atomów w tym wzorze. 
· 2H₂O oznacza 4 atomy H i 2 atomy O. 
· 3Ca(OH)₂ oznacza 3 Ca, 6 O i 6 H.

**Indeks · współczynnik · nawias — punkt krytyczny**

| Zapis | Co oznacza | Co obejmuje |
|-------|------------|-------------|
| H₂O | Indeks dolny 2 | Dwa atomy H w jednej cząsteczce wody |
| 3H₂O | Współczynnik 3 | Trzy całe cząsteczki H₂O, czyli 6 H i 3 O |
| Ca(OH)₂ | Nawias i indeks 2 | Dwie całe grupy OH |

**Substraty i produkty:** 
Substraty są po lewej stronie strzałki; produkty po prawej. 
Strzałka nie oznacza „równa się”, tylko „powstają z”.

**Kontrprzykład:** 
Błędnie: H₂ + O₂ → H₂O₂ (to inna substancja — nadtlenek wodoru). 
Poprawnie: 2H₂ + O₂ → 2H₂O.

**Przykłady bilansowania krok po kroku:**

**Przykład 1:** Fe + O₂ → Fe₂O₃ 
1. Policz: Fe: 1 vs 2; O: 2 vs 3. 
2. Ustaw Fe: 4Fe → 2Fe₂O₃. 
3. Ustaw O: 3O₂ → 2Fe₂O₃. 
4. Sprawdź: 4Fe, 6O po obu stronach. 
**Wynik:** 4Fe + 3O₂ → 2Fe₂O₃.

**Przykład 2:** Al + HCl → AlCl₃ + H₂ 
1. Policz: Al: 1 vs 1; H: 1 vs 2; Cl: 1 vs 3. 
2. Ustaw Al: 2Al → 2AlCl₃. 
3. Ustaw Cl: 6HCl → 2AlCl₃. 
4. Ustaw H: 6HCl → 3H₂. 
5. Sprawdź: 2Al, 6H, 6Cl po obu stronach. 
**Wynik:** 2Al + 6HCl → 2AlCl₃ + 3H₂.

**Przykład 3:** C₂H₆ + O₂ → CO₂ + H₂O 
1. Policz: C: 2 vs 1; H: 6 vs 2; O: 2 vs 3. 
2. Ustaw C: C₂H₆ → 2CO₂. 
3. Ustaw H: C₂H₆ → 3H₂O. 
4. Policz O: 2CO₂ + 3H₂O = 4 + 3 = 7 O → 7/2 O₂. 
5. Pomnóż przez 2: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. 
**Wynik:** 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.

**Typy reakcji** — tabela w ściądze.

**Uwaga o spalaniu:** 
Spalanie to szybka reakcja substancji z tlenem, której zwykle towarzyszy wydzielanie energii, często jako ciepło i światło. 
W zadaniach szkolnych spalanie metalu, niemetalu lub związku organicznego w O₂ najczęściej zaliczamy do spalania.

**Pułapka:** obecność tlenu po lewej stronie **nie wystarcza**, aby bez zastanowienia nazwać reakcję spalaniem. Analizuj, co reaguje i jakie powstają produkty. W szkolnych zadaniach spalanie najczęściej rozpoznasz po reakcji substancji z O₂, połączonej z wydzielaniem energii.

**Reakcje egzo- i endotermiczne:**

| Typ | Co robi z ciepłem | Przykład |
|-----|-------------------|----------|
| Egzotermiczna | Wydziela ciepło | spalanie CH₄, reakcja metalu z kwasem |
| Endotermiczna | Pochłania ciepło | rozkład CaCO₃ (wymaga ogrzewania) |

**Mnemonic:** 
**Exo** = „na zewnątrz” (ciepło wychodzi). 
**Endo** = „do wewnątrz” (ciepło wchodzi).

**Uwaga BHP do przykładów:** 
Równanie 2K + 2H₂O → 2KOH + H₂ dotyczy potasu, który reaguje z wodą bardzo gwałtownie. To przykład do analizy równania, a nie doświadczenie do samodzielnego wykonania.

**Zapis warunków reakcji (strzałka z opisem):** 
Nad strzałką można zapisywać warunki reakcji, np. temperaturę, ciśnienie, katalizator. 
Przykład: 2KClO₃ —(Δ, MnO₂)→ 2KCl + 3O₂ 
· Δ oznacza ogrzewanie, 
· MnO₂ jest katalizatorem: przyspiesza reakcję, ale nie zużywa się w jej równaniu.

**Uproszczona tabela rozpuszczalności (rozszerzenie):**

- Wszystkie azotany(V) są rozpuszczalne. 
- Wszystkie sole metali alkalicznych (Li, Na, K, Rb, Cs) są rozpuszczalne. 
- Chlorki są rozpuszczalne — **wyjątki:** AgCl, PbCl₂, Hg₂Cl₂. 
- Siarczany są rozpuszczalne — **wyjątki:** BaSO₄, PbSO₄, CaSO₄ (słabo). 
- Węglany są **nierozpuszczalne** — wyjątki: sole metali alkalicznych i NH₄⁺. 
- Wodorotlenki są **nierozpuszczalne** — wyjątki: NaOH, KOH, Ba(OH)₂, Ca(OH)₂ (słabo).

To przygotowuje grunt pod reakcje strąceniowe w klasie 8.

**Zapis jonowy równań (dla ambitnych):** 
**Zapis jonowy** — pokazuje jony rzeczywiście biorące udział w reakcji. Np. 
AgNO₃ + NaCl → AgCl↓ + NaNO₃ 
w zapisie jonowym: Ag⁺ + Cl⁻ → AgCl↓ 
Jony „widzowe” (Na⁺, NO₃⁻) się nie zmieniają — to **jony widzowe**.

<!-- źródłowy fragment: ### 5.7. Równania reakcji – podstawy; dopasowanie: :3, LAB12:2, J09:2, :2 -->

#### Ćwiczenia KLINIKI BŁĘDÓW

**Znajdź i popraw błąd:**

1. CaOH₂ 
2. FeO₃ 
3. H₂ + O₂ → H₂O₂ 
4. Na⁺ ma 11 elektronów 
5. „Tlenek żelaza” 
6. Mg + O₂ → MgO 
7. Al + HCl → AlCl₃ + H₂ 
8. „Wartościowość siarki = 6, bo jest w grupie 16” 
9. „Jest O₂ → to spalanie” 
10. „Wartościowość = ładunek jonu” 
11. „Masa cząsteczkowa H₂O to 18 g” 
12. „Wiązanie metaliczne to to samo co jonowe” 

**Odpowiedzi:** 
1. Ca(OH)₂ — nawias. 
2. Fe₂O₃ — krzyżowanie. 
3. 2H₂ + O₂ → 2H₂O — nie zmieniaj indeksów. 
4. 10 elektronów — kation oddał. 
5. Tlenek żelaza(III) — Fe ma II/III. 
6. 2Mg + O₂ → 2MgO — bilans. 
7. 2Al + 6HCl → 2AlCl₃ + 3H₂ — bilans. 
8. S ma II, IV, VI — nie zawsze numer grupy. 
9. Analizuj substraty i produkty — nie każda reakcja z O₂ to spalanie. 
10. Wartościowość ≠ ładunek — to pokrewne, ale różne pojęcia. 
11. Masa cząsteczkowa H₂O to 18 u — nie gramów. 
12. Wiązanie metaliczne to morze elektronów; jonowe to przekazanie elektronów — to różne wiązania.

---

<!-- źródłowy fragment: ### Ćwiczenia KLINIKI BŁĘDÓW; dopasowanie: :2, :2, O07:1, LAB20:1 -->

#### Diagnostyka fundamentów (5 minut) — zrób przed resztą

Szybki test, czy rozumiesz pięć kluczowych rzeczy:

1. Wybierz poprawny zapis: **CaOH₂** czy **Ca(OH)₂**? Wyjaśnij jednym zdaniem.
2. Wybierz poprawne równanie otrzymywania wody: **H₂ + O₂ → H₂O₂** czy **2H₂ + O₂ → 2H₂O**?
3. Jon Al³⁺ ma 13 protonów. Ile ma elektronów?
4. Czy Ca₂O₂ jest wzorem błędnym? Dlaczego zapisujemy CaO?
5. Podaj typ wiązania w: MgO, Cl₂, Fe.

**Odpowiedzi diagnostyki:** 
1. Ca(OH)₂ — nawias obejmuje całą grupę OH. 
2. 2H₂ + O₂ → 2H₂O — nie zmieniamy indeksów; H₂O₂ to inna substancja. 
3. 10 elektronów (13 − 3). 
4. Wartościowości się równoważą, ale stosunek nie jest najprostszy — skracamy do CaO. 
5. MgO — jonowe; Cl₂ — kowalencyjne; Fe — metaliczne.

<!-- źródłowy fragment: ### Diagnostyka fundamentów (5 minut) — zrób przed resztą; dopasowanie: :2, REV00:1, J09:1, J03:1 -->

#### Mapa myśli: WZÓR SUMARYCZNY

```
WZÓR
├── Wartościowości (cyfry rzymskie)
├── Krzyżowanie
├── Skracanie (NWD)
├── Indeks 1 — pomijamy
├── Nawias — gdy grupa się powtarza
└── Kontrola — łączna wartościowość równa
```

<!-- źródłowy fragment: ### Mapa myśli: WZÓR SUMARYCZNY; dopasowanie: :2, :1, :1 -->

#### Nawias = pudełko na grupę OH

```
CaOH₂ → Ca–O–H–H ← indeks przyklejony do H (źle)
Ca(OH)₂ → Ca–(O–H)(O–H) ← indeks obejmuje całą grupę OH
```

<!-- źródłowy fragment: ### Nawias = pudełko na grupę OH; dopasowanie: :2, :1 -->

---

---

<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 5643–6378 -->

---

---

## WARSTWA v0.2x — dopisane do F13 (nowe względem v16)

```yaml
kod: F13
tytul: "Wzory elektronowe (Lewis)"
wymaga: "F11; F12"
poglebia: "F14; F15; F18"
poziomy: "E8; LO-P; LO-R"
granice: "elastyczne; kontrolowane nakładanie dozwolone"
```

## 1. Cel i zakres

Procedura Lewisa: elektrony walencyjne → szkielet → pary → oktety/duety → kontrola elektronów → ładunki formalne i wiązania wielokrotne tam, gdzie potrzebne. Model ma zakres stosowalności.

---


---

# MATERIAŁ Z ARCHIWUM — do redakcji (akapity, których nie ma w treści głównej)

## z: MASTER v15.0

# CHE.01F.13-LEWIS — STRUKTURY LEWISA I ELEKTRONY WALENCYJNE

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

**Dominująca umiejętność:** Struktury Lewisa i elektrony walencyjne.
**Poziomy:** E8 — rdzeń · ROZUMIENIE — wyjaśniam mechanizm · AMBITNE — łączę i uzasadniam · AKADEMICKI — znam granice modelu.

1. elektrony walencyjne są punktem startowym Lewisa.
2. liczymy elektrony walencyjne całego układu.
3. tworzymy szkic połączeń.
4. uzupełniamy wolne pary.
5. sprawdzamy regułę oktetu tam, gdzie ma zastosowanie.
6. ładunek formalny pomaga kontrolować strukturę.
7. nie wszystkie układy spełniają prosty oktet.
8. Lewis jest modelem zapisu elektronów.
9. Lewis nie jest pełną geometrią 3D.
10. Lewis przygotowuje do VSEPR.

### Diagnoza wejściowa

Bez zaglądania do wykładu odpowiedz: **co już potrafię w obszarze „Struktury Lewisa i elektrony walencyjne” i gdzie pojawia się pierwsza niepewność?** Wynik diagnozy ma wskazać fragment do powtórki, a nie być oceną końcową.

## 1. CEL LEKCJI

#### 5.5. Wzory sumaryczne + grupy atomów + wzory strukturalne

| Związek | Obliczenie | Wynik |
|---------|-----------|-------|
| H₂O | 2·1 + 16 | 18 u (masa cząsteczkowa) |
| CO₂ | 12 + 2·16 | 44 u (masa cząsteczkowa) |
| NaCl | 23 + 35,5 | 58,5 u (masa jednostki wzoru) |
| Ca(OH)₂ | 40 + 2·(16+1) | 74 u (masa jednostki wzoru) |
| H₂SO₄ | 2·1 + 32 + 4·16 | 98 u (masa cząsteczkowa) |

## AUDYT W1 — Perplexity, 2026-10-09 (poprawki i uzupełnienia do wprowadzenia przy budowie lekcji)

> Źródło: `chemia/plany/audyty/W1_perplexity_F07-F14₂026-10-09.md`. Weryfikacja treści wysłanego zapisu, nie zakresu.

### Poprawki

- Wzór Lewisa przedstawia elektrony walencyjne, pary wiążące i wolne pary elektronowe.
- Nie utożsamiaj kreski we wzorze Lewisa z całym wiązaniem chemicznym w każdym możliwym modelu.
- Jedna kreska zwykle oznacza jedną wspólną parę elektronową.
- Dwie kreski oznaczają wiązanie podwójne, a trzy kreski wiązanie potrójne.
- Najpierw należy policzyć wszystkie elektrony walencyjne.
- Dla jonu wieloatomowego liczbę elektronów należy skorygować o ładunek:
  - dla anionu dodaj elektrony;
  - dla kationu odejmij elektrony.
- Wzór Lewisa nie pokazuje rzeczywistych długości wiązań ani dokładnej geometrii cząsteczki.
- Reguła oktetu pomaga budować wzory, ale ma wyjątki.
- Dla jonu wieloatomowego należy stosować nawias kwadratowy i zapisać ładunek, na przykład [OH]⁻.

### Uzupełnienia

#### Procedura

1. Policz elektrony walencyjne.
2. Wybierz atom centralny.
3. Połącz atomy wiązaniami pojedynczymi.
4. Uzupełnij oktety atomów zewnętrznych.
5. Umieść pozostałe elektrony na atomie centralnym.
6. Jeśli atom centralny nie ma oktetu, utwórz wiązania wielokrotne.
7. Sprawdź łączną liczbę elektronów.
8. Dla jonów zapisz nawias i ładunek.

#### Przykład: woda

Tlen ma 6 elektronów walencyjnych, a dwa atomy wodoru po 1:

 6+1+1=8

Struktura zawiera:

- dwa wiązania O-H;
- dwie wolne pary elektronowe na atomie tlenu.

#### Przykład: dwutlenek węgla

Łączna liczba elektronów walencyjnych:

 4+2·6=16

Poprawny zapis strukturalny:

 O=C=O

#### Zadania

1. Narysuj wzór Lewisa dla NH₃.
2. Narysuj wzór Lewisa dla CH₄.
3. Narysuj wzór Lewisa dla HCl.
4. Policz elektrony walencyjne w CO₃²⁻.
5. Wyjaśnij, dlaczego wzór CO₂ zawiera dwa wiązania podwójne w modelu Lewisa.

#### Klucz

1. Azot tworzy trzy wiązania z wodorem i ma jedną wolną parę elektronową.
2. Węgiel tworzy cztery wiązania pojedyncze z wodorem.
3. Chlor tworzy jedno wiązanie z wodorem i ma trzy wolne pary.
4. 4+3·6+2=24 elektrony walencyjne.
5. Dwa wiązania podwójne pozwalają wypełnić oktet atomu węgla i obu atomów tlenu.
