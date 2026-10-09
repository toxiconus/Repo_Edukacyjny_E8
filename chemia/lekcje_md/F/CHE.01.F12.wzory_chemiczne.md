---
kod: F12
tytul: "Wzory chemiczne"
poziom: E8
wymaga: "F09; F11"
poglebia: "F13; F17; N02–N08"
zrodla: "MASTER v17.0; MASTER v15.0; MASTER v14.0; stary kanon F00–F09 (v4.1/v5.0); stary podział CHE.01.F06.wzory_chemiczne.md"
opis: "Materiał roboczy lekcji (nie gotowa lekcja). Spis i zakres: chemia/plany/CHE_SPIS_TRESCI.md"
---
# CHE.01F.12-WZORY — WZORY CHEMICZNE

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

1. indeks we wzorze zmienia skład substancji
2. współczynnik zmienia liczbę jednostek substancji w równaniu
3. H₂O ma stosunek H:O = 2:1
4. NaCl ma stosunek 1:1
5. CaCl₂ wymaga dwóch jonów Cl⁻ na Ca²⁺
6. grupy wieloatomowe można traktować jako jednostki przy budowie wzoru
7. wzór sumaryczny nie pokazuje całej struktury
8. W–K–S–K jest procedurą szkolną, nie prawem natury
9. wzór trzeba kontrolować przez ładunek/stechiometrię
10. nie wolno bilansować równania przez zmianę indeksów

### Diagnoza wejściowa

1. Co robi indeks?
2. Co robi współczynnik?
3. Jaki skład ma H₂O?
4. Jaki skład ma CaCl₂?
5. Dlaczego MgCl₂, a nie MgCl?
6. Czy wolno zmienić indeks przy bilansowaniu?

**Klucz:** 1 zmienia skład; 2 zmienia liczbę jednostek; 3 2:1; 4 1:2; 5 bilans ładunków; 6 nie

**Interpretacja:**
- **0–2/6** → zacznij od rdzenia lekcji i wróć do przykładów krok po kroku.
- **3–4/6** → przejdź przez rdzeń, szczególnie punkty z błędami.
- **5–6/6** → przejdź szybko do ROZUMIENIA / zadań transferowych.


**Pytanie przewodnie:** Jak zbudować poprawny zapis substancji?

## Rodzaje zapisu

**Wzór sumaryczny** podaje rodzaj i liczbę atomów w jednostce wzoru. 
**Wzór strukturalny** pokazuje sposób połączenia atomów. 
**Wzór Lewisa** pokazuje wiązania i pary elektronowe. 
**Wzór empiryczny** podaje najprostszy całkowity stosunek atomów.

`C₂H₆O` nie mówi, czy struktura to etanol czy eter dimetylowy.

## Związki jonowe

Najpierw zapisujemy jony i ich ładunki. Następnie dobieramy najmniejsze całkowite proporcje zapewniające obojętność.

`Ca²⁺ + 2Cl⁻ → CaCl₂`.

`Al³⁺ + O²⁻ → Al₂O₃`.

Dla grup wieloatomowych:
`Ca²⁺ + 2OH⁻ → Ca(OH)₂`.

Nawias informuje, że cała grupa OH występuje dwa razy.

## Indeks i współczynnik

`2H₂O` oznacza dwie jednostki wody.

`H₂O₂` oznacza inną substancję.

To jedna z najważniejszych zasad całego F.

## Wizualizacja `V010v001`

Budowniczy wzoru:
1. wybierz kation;
2. wybierz anion;
3. pokaż ładunki;
4. zbilansuj;
5. wygeneruj wzór;
6. pokaż kontrolę ładunku.

Tryb „błąd celowo” pokazuje `CaOH2` vs `Ca(OH)2` i tłumaczy różnicę.

## Parser

Docelowy parser powinien rozumieć co najmniej:
`H2O`, `Al2(SO4)3`, `Ca(OH)2`, `NH4NO3`, `CuSO4·5H2O`.

Nie powinien być implementowany osobno w każdej lekcji.


---

## DOMKNIĘCIE WYKŁADU MASTER 5.0 — Budowanie wzoru bez zgadywania

**Rdzeń pojęciowy:** Wzór związku jonowego buduje się przez zachowanie obojętności elektrycznej całego zapisu. Indeksy należą do wzoru substancji, a współczynniki do równania reakcji. Najpierw ustal ładunki składników, potem najmniejszy wspólny bilans.

**Przykład prowadzony:** Dla Ca²⁺ i Cl⁻ potrzebne są dwa jony chlorkowe: CaCl₂. Dla Al³⁺ i SO₄²⁻ najmniejszy wspólny bilans ładunku daje Al₂(SO₄)₃.

**Procedura pracy:** 1. nazwij dokładnie obiekt lub proces; 2. wybierz model właściwy dla poziomu zadania; 3. zapisz dane i założenia; 4. wykonaj operację bez zmiany znaczenia wzoru lub równania; 5. sprawdź jednostki, bilans oraz sens chemiczny wyniku.

**Ograniczenie modelu:** wynik szkolny jest poprawny tylko przy zachowaniu założeń podanych w lekcji; nie wolno przenosić reguły na układ, którego model nie obejmuje.

**Kontrola rozumowania:** uczeń powinien umieć powiedzieć nie tylko *co* otrzymał, ale *dlaczego ten model i ta reguła pasują do danych*.


### WARSTWA INTEGRACYJNA MASTER 3.0 — 

**Model:** Wzór → bilans ładunku.

**Wyjaśnij teraz:** Indeksy we wzorze opisują skład jednostki, a współczynniki liczbę jednostek w równaniu.

**Mini-przykład:** Ca²⁺ i Cl⁻ dają CaCl₂.

**Ograniczenie/kontrola:** Nie zmieniaj indeksów podczas bilansowania równania.


**Poziom:** E7/E8 → LO podstawowe → LO rozszerzone → pomost akademicki
**Poprzednia:** · **Następna:** Wiązania chemiczne
**Plik źródłowy:** CHE.all.v01.00.md (blok L001, sekcje 5.5, 5.6, 5.6a)

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ

1. **Nie czytaj biernie.**
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach.**
4. **Mów na głos.**
5. **Rysuj.**
6. **Łap moment „aha!".**

**Zasada 80/20 tej lekcji:**
- W–K–S–K,
- indeks vs współczynnik vs nawias,
- grupy atomów,
- wzory sumaryczne, strukturalne, elektronowe.

---

## 0. WYKŁAD KANONICZNY — RDZEŃ: JAK ZBUDOWAĆ POPRAWNY WZÓR

Wzór chemiczny nie jest nazwą ani przypadkowym zestawieniem symboli. Pokazuje, jakie składniki tworzą substancję i w jakiej proporcji występują w jej jednostce zapisu.

Dla związku jonowego podstawą jest **bilans ładunków**: całkowity ładunek wzoru musi być równy zero. Dla `Ca²⁺` i `Cl⁻` potrzebne są dwa jony chlorkowe, więc otrzymujemy `CaCl₂`. Dla `Al³⁺` i `O²⁻` najmniejsza proporcja równoważąca ładunki to `2 : 3`, więc `Al₂O₃`.

**Ważne rozróżnienie:** indeks dolny zmienia skład/proporcję substancji, natomiast współczynnik przed wzorem zmienia liczbę jednostek substancji w równaniu. Dlatego `2H₂O` nie oznacza innej substancji niż `H₂O`, ale `H₂O₂` jest inną substancją niż `H₂O`.

**Procedura:** rozpoznaj jony lub składniki → ustal ich ładunki/wartościowości → znajdź najmniejszą proporcję całkowitą → zapisz indeksy → sprawdź bilans ładunków i sens chemiczny wzoru.

**Przykład:** `Al³⁺ + SO₄²⁻` daje `Al₂(SO₄)₃`; nawias jest potrzebny, ponieważ cała grupa siarczanowa występuje trzy razy.

**Granica modelu:** prosta metoda „skrzyżuj liczby” jest tylko skrótem. Nie zastępuje rozpoznania jonów, uproszczenia stosunku ani kontroli ładunku.

**Rozwiń:** dalsze sekcje . **Zajrzyj wyżej:** przy bardziej złożonych związkach i chemii molekularnej potrzebne są dodatkowe reguły zapisu.

## WARSTWOWANIE LEKCJI

Każde pojęcie omawiamy najpierw w zakresie potrzebnym na bieżącym poziomie. Jeżeli pełniejsze wyjaśnienie należy do wyższego poziomu, uczeń dostaje krótkie objaśnienie tutaj oraz odnośnik do rozwinięcia. Odnośnik nie zastępuje definicji.

- **E7/E8 — RDZEŃ:** trzeba umieć zastosować.
- **LO PODSTAWOWE:** trzeba szerzej rozumieć zależności.
- **LO ROZSZERZONE:** trzeba znać mechanizm i wyjątki.
- **POMOST AKADEMICKI:** można wejść w pełniejszy model.
```

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **E7/E8 — RDZEŃ** | pojęcia i procedury konieczne na tym etapie |
| **LO PODSTAWOWE** | pełniejsze zastosowania i zależności |
| **LO ROZSZERZONE** | mechanizmy, wyjątki i formalizm |
| **POMOST AKADEMICKI** | głębszy model i ograniczenia uproszczeń |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z :
- atom, jon.

Z :
- układ okresowy, grupy.

Z :
- wartościowość, ładunek jonu.

---

## ODNIESIENIA W TEJ LEKCJI

**Wyjaśnij teraz:** wzór chemiczny jest zapisem składu lub organizacji substancji. Wzór sumaryczny mówi, jakie i ile atomów przypada na jednostkę wzoru; wzór strukturalny pokazuje sposób połączenia atomów; wzór elektronowy pokazuje rozmieszczenie elektronów walencyjnych w przyjętym modelu.

**Rozwiń:** — wiązania i struktury Lewisa.

**Zajrzyj wyżej:** R05 — masa molowa i obliczenia ilościowe na podstawie wzoru.

## 1. CEL LEKCJI

Po tej lekcji uczeń:

- **stosuje** algorytm W–K–S–K do układania wzorów,
- **rozróżnia** indeks dolny, współczynnik i nawias,
- **traktuje** grupy atomów jako jeden klocek,
- **zapisuje** wzory sumaryczne, strukturalne i elektronowe,
- **oblicza** masę cząsteczkową i masę jednostki wzoru,
- **rozpoznaje** grupy wieloatomowe (OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻, NH₄⁺),
- (ambitnie) **rozumie** zapis hydratów (CuSO₄·5H₂O),
- (zaawansowanie) **stosuje** wzory do stechiometrii.

---

## 2. PYTANIE PRZEWODNIE

**Jak z wartościowości zbudować poprawny wzór chemiczny — i jak zapisać grupy atomów?**

---

## 3. MAPA POJĘĆ TEJ LEKCJI

```
WZÓR CHEMICZNY
│
├── SUMARYCZNY (H₂O, Al₂O₃, Ca(OH)₂)
│ ├── indeks dolny
│ ├── grupy atomów
│ └── nawias
│
├── STRUKTURALNY (H–O–H, O=C=O)
│
├── ELEKTRONOWY (kropkowy)
│
└── PÓŁSTRUKTURALNY (CH₃–CH₂–OH)

W–K–S–K:
W — wartościowości
K — krzyżowanie
S — skracanie
K — kontrola
```

---

## 4. DIAGNOZA STARTOWA

1. Co to indeks dolny?
2. Co to współczynnik?
3. Kiedy używać nawiasu?
4. Zapisz wzór tlenku glinu.
5. Dlaczego Ca(OH)₂ ma nawias?

**Odpowiedzi:**
1. Liczba atomów w cząsteczce.
2. Liczba cząsteczek w równaniu.
3. Gdy grupa powtarza się > 1 raz.
4. Al₂O₃.
5. Bo OH⁻ występuje 2 razy.

---

## 5. ŚCIĄGA — WZORY CHEMICZNE

### 5.1. Wzór sumaryczny

**Wzór sumaryczny** — zapis składu substancji za pomocą symboli pierwiastków i indeksów dolnych.

**Przykłady:**
- H₂O — 2 atomy wodoru + 1 atom tlenu,
- CO₂ — 1 atom węgla + 2 atomy tlenu,
- NaCl — 1 atom sodu + 1 atom chloru,
- Al₂O₃ — 2 atomy glinu + 3 atomy tlenu,
- Ca(OH)₂ — 1 atom wapnia + 2 grupy OH.

**Indeks dolny** — liczba atomów danego pierwiastka lub grupy w jednej cząsteczce / jednostce wzoru.

**Uwaga:** indeks „1" pomijamy (H₂O, nie H₂O₁).

### 5.2. Algorytm W–K–S–K

**W** — Wartościowości.
**K** — Krzyżowanie.
**S** — Skracanie.
**K** — Kontrola.

**Przykład — Al₂O₃:**
1. Wartościowości: Al(III), O(II).
2. Krzyżowanie: Al₂O₃.
3. Skracanie: 2 i 3 nie mają wspólnego dzielnika.
4. Kontrola: 2·(+3) = 3·(−2) = +6 → ładunek 0.

**Przykład — CaO:**
1. Wartościowości: Ca(II), O(II).
2. Krzyżowanie: Ca₂O₂.
3. Skracanie: dzielimy przez 2 → CaO.
4. Kontrola: 1·(+2) = 1·(−2) = 0.

**Przykład — Fe₂O₃:**
1. Wartościowości: Fe(III), O(II).
2. Krzyżowanie: Fe₂O₃.
3. Skracanie: 2 i 3 — bez wspólnego dzielnika.
4. Kontrola: 2·(+3) = 3·(−2) = +6 → 0.

### 5.3. Indeks vs współczynnik vs nawias

| Zapis | Co oznacza | Co obejmuje |
|-------|------------|-------------|
| H₂O | indeks dolny 2 | 2 atomy H w jednej cząsteczce |
| 3H₂O | współczynnik 3 | 3 całe cząsteczki H₂O = 6 H + 3 O |
| Ca(OH)₂ | nawias + indeks 2 | 2 całe grupy OH = 2 O + 2 H |

**Reguła:** nawias stosujemy, gdy grupa powtarza się więcej niż raz.

**Pułapka:** CaOH₂ ≠ Ca(OH)₂.
- CaOH₂ sugeruje: Ca + O + 2 H,
- Ca(OH)₂ mówi: Ca + 2×(O + H).

### 5.4. Grupy atomów (grupy wieloatomowe)

Grupa atomów zachowuje się jak jeden „klocek".

| Grupa | Nazwa | Ładunek | Wartościowość |
|-------|-------|---------|---------------|
| OH | wodorotlenkowa | OH⁻ | I |
| NO₃ | azotanowa(V) | NO₃⁻ | I |
| NO₂ | azotanowa(III) | NO₂⁻ | I |
| SO₄ | siarczanowa(VI) | SO₄²⁻ | II |
| SO₃ | siarczanowa(IV) | SO₃²⁻ | II |
| CO₃ | węglanowa | CO₃²⁻ | II |
| PO₄ | fosforanowa(V) | PO₄³⁻ | III |
| NH₄ | amonowa | NH₄⁺ | I |
| HCO₃ | wodorowęglanowa | HCO₃⁻ | I |
| CH₃COO | octanowa | CH₃COO⁻ | I |
| MnO₄ | manganianowa(VII) | MnO₄⁻ | I |
| CrO₄ | chromianowa(VI) | CrO₄²⁻ | II |
| Cr₂O₇ | dichromianowa(VI) | Cr₂O₇²⁻ | II |

**Nawias:** Ca(OH)₂ — bo OH powtarza się 2×. Al₂(SO₄)₃ — bo SO₄ powtarza się 3×.

### 5.5. Wzór strukturalny

**Wzór strukturalny** — pokazuje, które atomy są ze sobą połączone (kreski = wiązania).

**Przykłady:**
- woda: H–O–H,
- dwutlenek węgla: O=C=O,
- metan: H–C(–H)(–H)–H,
- chlor: Cl–Cl,
- chlorowodór: H–Cl.

### 5.6. Wzór elektronowy (kropkowy)

**Wzór elektronowy** pokazuje elektrony walencyjne atomów oraz pary elektronowe uczestniczące w wiązaniach i pozostające jako pary wolne. Jest to sposób przedstawienia modelu elektronowego, a nie fotografia rzeczywistego rozkładu elektronów.

Na poziomie E7/E8 najważniejsze jest rozumienie, że:
- pojedyncza wspólna para elektronowa może być przedstawiona jako wiązanie,
- para elektronowa może pozostać wolna na atomie,
- liczba elektronów walencyjnych pomaga ustalić, ile elektronów należy rozmieścić.

**Przykład opisowy:** w H₂O atom tlenu tworzy dwa wiązania z atomami wodoru i ma dwie wolne pary elektronowe.

**Rozwiń:** — struktury Lewisa, liczenie elektronów walencyjnych i przewidywanie geometrii.

### 5.7. Wzór a masa względna i masa molowa

**Wzór pozwala policzyć względną masę cząsteczkową `Mᵣ`** dla substancji złożonej z cząsteczek albo odpowiednią względną masę jednostki wzoru dla substancji jonowej. Jest to liczba bez jednostki, otrzymana przez zsumowanie względnych mas atomowych zgodnie z indeksem we wzorze.

**Przykłady:**
- `Mᵣ(H₂O) = 2·1 + 16 = 18`,
- `Mᵣ(CO₂) = 12 + 2·16 = 44`,
- dla `NaCl`: `23 + 35,5 = 58,5`,
- dla `Ca(OH)₂`: `40 + 2·(16+1) = 74`,
- dla `Al₂O₃`: `2·27 + 3·16 = 102`.

**Masa molowa `M`** ma już jednostkę `g/mol` i pojawi się jako osobne narzędzie ilościowe w R05. Dla liczbowej wartości w przybliżeniu odpowiada wartości `Mᵣ` wyrażonej w g/mol, ale nie są to te same wielkości.

**Rozwiń:** R05 — mol i masa molowa.

### 5.8. Hydraty (rozszerzenie)

**Hydrat** — związek z cząsteczkami wody w sieci krystalicznej.

**Zapis:** sól bezwodna · n H₂O.

**Przykłady:**
- CuSO₄·5H₂O — pentahydrat siarczanu(VI) miedzi(II),
- Na₂CO₃·10H₂O — dekahydrat węglanu sodu,
- CaSO₄·2H₂O — dihydrat siarczanu(VI) wapnia (gips).

**Masa molowa hydratu** = masa bezwodnej + masa wody.

**Przykład:** M(CuSO₄·5H₂O) = 159,6 + 5·18 = 249,6 g/mol.

### 5.9. Najczęstsze błędy w zapisie

| Błędnie | Poprawnie | Dlaczego |
|---------|-----------|----------|
| CaOH₂ | Ca(OH)₂ | nawias obejmuje całą grupę OH |
| FeO₃ | Fe₂O₃ | W–K–S–K |
| HSO₄ | H₂SO₄ | wartościowości H i SO₄ |
| Ca₂O₂ | CaO | skrócenie do najprostszego stosunku |
| AlSO₄ | Al₂(SO₄)₃ | W–K–S–K + nawias |
| CaNO₃ | Ca(NO₃)₂ | W–K–S–K + nawias |

---

## 6. DOŚWIADCZENIA MODELOWE

### Doświadczenie 1: Model wzoru z klocków

**Problem:** Jak zobrazować wzór chemiczny?
**Sprzęt:** klocki lub kulki z plasteliny.
**Wykonanie:** zbuduj model H₂O (2 kulki H + 1 O).
**Wniosek:** wzór sumaryczny opisuje liczbę atomów.

### Doświadczenie 2: Budowanie z jonów (W–K–S–K)

**Problem:** Jak zbudować wzór z jonów?
**Wykonanie:** Ca²⁺ + 2 OH⁻ → Ca(OH)₂.
**Wniosek:** W–K–S–K (lub ładunki) prowadzi do wzoru.

---

## 7. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd | Poprawnie | Dlaczego |
|------|-----------|----------|
| CaOH₂ | Ca(OH)₂ | indeks 2 obejmuje całą grupę OH |
| FeO₃ | Fe₂O₃ | W–K–S–K: 2·III = 3·II |
| AlSO₄ | Al₂(SO₄)₃ | W–K–S–K + nawias |
| CaNO₃ | Ca(NO₃)₂ | W–K–S–K + nawias |
| Ca₂O₂ | CaO | skrócenie |
| HSO₄ | H₂SO₄ | wartościowości |
| „3H₂O = 3 atomy H" | 3H₂O = 6 atomów H | współczynnik mnoży wszystko |
| „indeks przy Ca(OH)₂ dotyczy tylko H" | dotyczy całej grupy OH | nawias obejmuje grupę |

### Klinika 2.0 — przykład 1

**Błąd:** CaOH₂.

- **Znajdź:** brak nawiasu.
- **Popraw:** Ca(OH)₂.
- **Reguła:** nawias obejmuje całą grupę OH.
- **Dlaczego:** bez nawiasu indeks 2 dotyczy tylko H.
- **Zadanie podobne:** Zapisz wzór wodorotlenku baru.
- **Pułapka:** NaOH nie ma nawiasu (tylko 1 grupa OH).

### Klinika 2.0 — przykład 2

**Błąd:** FeO₃.

- **Znajdź:** brak kontroli W–K–S–K.
- **Popraw:** Fe₂O₃.
- **Reguła:** Fe(III) + O(II) → Fe₂O₃.
- **Dlaczego:** 2·(+3) = 3·(−2) = +6 → 0.
- **Zadanie podobne:** Zapisz wzór tlenku żelaza(II).
- **Pułapka:** FeO (nie Fe₂O₂).

### Klinika 2.0 — przykład 3

**Błąd:** AlSO₄.

- **Znajdź:** brak nawiasu + brak krzyżowania.
- **Popraw:** Al₂(SO₄)₃.
- **Reguła:** Al(III) + SO₄(II) → 2 atomy Al i 3 grupy SO₄.
- **Dlaczego:** 2·(+3) = 3·(−2) = +6 → 0. Nawias, bo 3 grupy SO₄.
- **Zadanie podobne:** Zapisz wzór siarczanu(VI) miedzi(II).
- **Pułapka:** CuSO₄ bez nawiasu (1 grupa SO₄).

---

## 8. ĆWICZENIA

### 8.1. Mini-check (5 pytań)

1. Co to indeks dolny?
2. Co to współczynnik?
3. Kiedy używać nawiasu?
4. Zapisz wzór tlenku glinu.
5. Zapisz wzór wodorotlenku wapnia.

### 8.2. Ćwiczenie prowadzone

**Dane:** Al(III) + SO₄(II).

**Krok 1.** Wartościowości: 3 i 2.
**Krok 2.** Krzyżowanie: Al₂(SO₄)₃.
**Krok 3.** Nawias, bo 3 grupy SO₄.
**Krok 4.** Kontrola: 2·(+3) + 3·(−2) = 0.

**Spróbuj sam:** Ca(II) + PO₄(III).

### 8.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Zapisz wzory: tlenek magnezu, tlenek glinu, tlenek siarki(IV), tlenek azotu(V).
2. Nazwij: Fe₂O₃, CuO, N₂O₅, P₂O₅.
3. Zapisz wzory: chlorek sodu, chlorek wapnia, chlorek glinu.
4. Zapisz wzory: wodorotlenek sodu, wodorotlenek wapnia, wodorotlenek glinu.
5. Zapisz wzory: azotan(V) sodu, siarczan(VI) sodu, węglan wapnia.

**B. Trening**

6. Zapisz wzory: siarczan(VI) glinu, fosforan(V) wapnia, azotan(V) ołowiu(II).
7. Zapisz wzory: wodorotlenek żelaza(II), wodorotlenek żelaza(III).
8. Popraw: CaOH₂; FeO₃; AlSO₄.
9. Zapisz wzór hydratu CuSO₄·5H₂O.
10. Oblicz masę cząsteczkową: H₂O, CO₂, H₂SO₄.

**C. Ambitne**

11. Zapisz wzory: manganian(VII) potasu, dichromian(VI) potasu.
12. Zapisz wzory: wodorowęglan sodu, octan sodu.
13. Narysuj wzór strukturalny: H₂O, CO₂, CH₄.
14. Narysuj wzór elektronowy: H₂O, Cl₂, HCl.
15. Wyjaśnij, dlaczego Ca(OH)₂ ma nawias, a NaOH nie.

**D. Zaawansowane**

16. Co to hydrat? Podaj 3 przykłady.
17. Oblicz masę molową CuSO₄·5H₂O.
18. Ile atomów H jest w 3Ca(OH)₂?
19. Zapisz wzór: azotan(V) żelaza(III).
20. Porównaj masę cząsteczkową H₂O i D₂O (ciężka woda, D = deuter).

### 8.4. Interleaving (przeplatany)

1. Co to Z?
2. Wartościowość C?
3. Zapisz wzór tlenku glinu.
4. Kiedy nawias?
5. Masa cząsteczkowa H₂O?

---

## 9. ODPOWIEDZI

### Mini-check

1. Liczba atomów danego pierwiastka w cząsteczce.
2. Liczba cząsteczek w równaniu.
3. Gdy grupa powtarza się > 1 raz.
4. Al₂O₃.
5. Ca(OH)₂.

### Ćwiczenia A

1. MgO, Al₂O₃, SO₂, N₂O₅.
2. tlenek żelaza(III), tlenek miedzi(II), tlenek azotu(V), tlenek fosforu(V).
3. NaCl, CaCl₂, AlCl₃.
4. NaOH, Ca(OH)₂, Al(OH)₃.
5. NaNO₃, Na₂SO₄, CaCO₃.

### Ćwiczenia B

6. Al₂(SO₄)₃, Ca₃(PO₄)₂, Pb(NO₃)₂.
7. Fe(OH)₂, Fe(OH)₃.
8. Ca(OH)₂, Fe₂O₃, Al₂(SO₄)₃.
9. CuSO₄·5H₂O — pentahydrat.
10. M(H₂O) = 18 u, M(CO₂) = 44 u, M(H₂SO₄) = 98 u.

### Ćwiczenia C

11. KMnO₄, K₂Cr₂O₇.
12. NaHCO₃, CH₃COONa.
13. H–O–H; O=C=O; H–C(–H)(–H)–H.
14. H:O:H (wolne pary na O); :Cl:Cl:; H:Cl:.
15. NaOH ma 1 grupę OH → bez nawiasu. Ca(OH)₂ ma 2 grupy OH → nawias.

### Ćwiczenia D

16. Związek z cząsteczkami wody w sieci, np. CuSO₄·5H₂O, Na₂CO₃·10H₂O, CaSO₄·2H₂O.
17. M(CuSO₄·5H₂O) = 159,6 + 5·18 = 249,6 g/mol.
18. 3·2 = 6 atomów H (z 3 grup OH).
19. Fe(NO₃)₃.
20. M(H₂O) = 18 u; M(D₂O) = 2·2 + 16 = 20 u.

---

## 10. FISZKI — tylko jeśli potrzebne

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to indeks dolny? | Liczba atomów w cząsteczce |
| Co to współczynnik? | Liczba cząsteczek w równaniu |
| Kiedy nawias? | Gdy grupa powtarza się > 1 raz |
| W–K–S–K? | Wartościowości, krzyżowanie, skracanie, kontrola |
| Wzór tlenku glinu? | Al₂O₃ |
| Wzór chlorku wapnia? | CaCl₂ |
| Wzór wodorotlenku sodu? | NaOH |
| Wzór wodorotlenku wapnia? | Ca(OH)₂ |
| Wzór wodorotlenku glinu? | Al(OH)₃ |
| Wzór siarczanu(VI) sodu? | Na₂SO₄ |
| Wzór siarczanu(VI) glinu? | Al₂(SO₄)₃ |
| Wzór azotanu(V) sodu? | NaNO₃ |
| Wzór węglanu wapnia? | CaCO₃ |
| Wzór fosforanu(V) wapnia? | Ca₃(PO₄)₂ |
| Wzór kwasu siarkowego(VI)? | H₂SO₄ |
| Wzór kwasu azotowego(V)? | HNO₃ |
| M(H₂O)? | 18 u |
| M(CO₂)? | 44 u |
| M(NaCl)? | 5**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste** |
| M(H₂SO₄)? | 98 u |
| Grupa OH⁻ — wartościowość? | I |
| Grupa SO₄²⁻ — wartościowość? | II |
| Grupa PO₄³⁻ — wartościowość? | III |
| Co to hydrat? | Sól z wodą krystalizacyjną |
| Przykład hydratu? | CuSO₄·5H₂O |

---

## 11. SPRAWDZENIE DIAGNOSTYCZNE

Test nie jest celem lekcji. Wybierz tylko te zadania, które pokazują, czy uczeń opanował definicję, procedurę i kontrolę wyniku.

1. Zapisz wzory: tlenek wapnia, tlenek żelaza(III), tlenek siarki(VI).
2. Nazwij: Al₂O₃, N₂O₅, CuO, SO₂.
3. Zapisz wzory: wodorotlenek wapnia, wodorotlenek glinu, siarczan(VI) sodu.
4. Popraw: CaOH₂; FeO₃; AlSO₄.
5. Oblicz masę cząsteczkową H₂O i H₂SO₄.
6. (extra) Co to hydrat? Podaj przykład.
7. (extra) Zapisz wzór azotanu(V) ołowiu(II).
8. (extra) Ile atomów tlenu jest w 2Al₂(SO₄)₃?

---

## 12. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Wzór sumaryczny | definicja, przykłady |
| Wzór strukturalny | definicja, przykłady |
| Wzór elektronowy | definicja, przykłady |
| Indeks, współczynnik, nawias | rozróżnienie |
| W–K–S–K | algorytm |
| Grupy atomów | wartościowości, przykłady |
| Masa cząsteczkowa | obliczanie |
| Hydraty | zapis, przykłady (ambitnie) |

---

## 13. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 20 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 15 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |

---

## 14. MAPA MYŚLI

```
WZÓR CHEMICZNY
├── SUMARYCZNY
│ ├── indeks dolny
│ ├── grupy atomów
│ └── nawias
├── STRUKTURALNY
├── ELEKTRONOWY
└── PÓŁSTRUKTURALNY

W–K–S–K:
W — wartościowości
K — krzyżowanie
S — skracanie
K — kontrola

GRUPY ATOMÓW:
OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻, NH₄⁺

MASY:
M = suma mas atomowych
```

---

## 15. CO DALEJ?

** — Wiązania chemiczne:** jonowe, kowalencyjne, metaliczne.

** — VSEPR:** geometria cząsteczek.

---

## 16. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Wzór sumaryczny | Zapis liczby atomów pierwiastków. |
| Wzór strukturalny | Zapis połączeń między atomami. |
| Wzór elektronowy | Zapis z kropkami (elektrony walencyjne). |
| Indeks dolny | Liczba atomów w cząsteczce. |
| Współczynnik | Liczba cząsteczek w równaniu. |
| Nawias | Obejmuje grupę atomów. |
| Grupa atomów | Kilka atomów działających jak jeden klocek. |
| Masa cząsteczkowa | Suma mas atomowych w cząsteczce. |
| Hydrat | Sól z wodą krystalizacyjną. |

---

## 17. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

---

## 18. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

---

## 19. DODATEK E — WARSTWA EXTRA

### E.1. Hydraty — dokładniej

- CuSO₄·5H₂O — niebieskie kryształy (uwodniony),
- CuSO₄ — biały proszek (bezwodny).

Hydraty stosowane do wykrywania wody (CuSO₄ zmienia barwę).

### E.2. Masa jednostki wzoru vs masa cząsteczkowa

- kowalencyjne (H₂O, CO₂, CH₄) → masa cząsteczkowa,
- jonowe (NaCl, CaCl₂) → masa jednostki wzoru.

### E.3. Most do (Wiązania)

Wzór chemiczny → typ wiązania (jonowe, kowalencyjne) → właściwości.

### E.4. Most do R05 (Mol)

Wzór chemiczny + masa cząsteczkowa → mol → stechiometria.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Wzór sumaryczny | Zapis liczby atomów pierwiastków w substancji. |
| Wzór strukturalny | Zapis połączeń między atomami. |
| Indeks dolny | Liczba atomów w cząsteczce. |
| Współczynnik | Liczba cząsteczek w równaniu. |
| Grupa atomów | Kilka atomów działających jak jeden klocek. |
| Hydrat | Sól z wodą krystalizacyjną. |

---

## 21. 10 ZASAD SUPERNAUKI

1. **Najpierw próbuj, potem czytaj.**
2. **Mów na głos.**
3. **Rysuj.**
4. **Powtarzaj w odstępach.**
5. **Mieszaj tematy.**
6. **Testuj się.**
7. **Tłumacz komuś.**
8. **Łap moment „aha!".**
9. **Śpij.**
10. **Bądź ciekawy.**

---

## 22. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
WZORY CHEMICZNE
SUMARYCZNY: H₂O, CO₂, Al₂O₃, Ca(OH)₂
STRUKTURALNY: H–O–H, O=C=O
ELEKTRONOWY: H:O:H, :Cl:Cl:

W–K–S–K:
1. Wartościowości (I, II, III, IV...)
2. Krzyżowanie
3. Skracanie (NWD)
4. Kontrola (suma ładunków = 0)

INDEKS vs WSPÓŁCZYNNIK vs NAWIAS:
- indeks: H₂O (2 atomy H)
- współczynnik: 3H₂O (3 cząsteczki = 6 H)
- nawias: Ca(OH)₂ (2 całe grupy OH)

GRUPY ATOMÓW:
OH⁻ (I), NO₃⁻ (I), SO₄²⁻ (II), CO₃²⁻ (II),
PO₄³⁻ (III), NH₄⁺ (I)

MASY:
H₂O = 18 u; CO₂ = 44 u; NaCl = 5**fikcyjny pierwiastek X — wartość przykładowa, nie dane rzeczywiste**;
H₂SO₄ = 98 u; Ca(OH)₂ = 74 u; Al₂O₃ = 102 u

PUŁAPKI:
- CaOH₂ ✗ → Ca(OH)₂ ✓
- FeO₃ ✗ → Fe₂O₃ ✓
- AlSO₄ ✗ → Al₂(SO₄)₃ ✓
- Ca₂O₂ ✗ → CaO ✓
```

---

## 23. STATUS LEKCJI

- **Wersja 1.1** (2026-09-27).
- **Nowa numeracja:** .
- **Następna lekcja:** Wiązania chemiczne.

---

**Koniec MASTER v1.1**

---

<!-- ŹRÓDŁO: kanon CHE.core.md, WARSTWA MASTER v5.0 dla (w. 9764–10373) -->


---

---

## WARSTWA v0.2x — dopisane do F12 (nowe względem v16)

```yaml
kod: F12
tytul: "Wzory chemiczne"
wymaga: "F09; F11"
poglebia: "F13; F17; N01–N07"
poziomy: "E8; LO-P; LO-R"
granice: "elastyczne; kontrolowane nakładanie dozwolone"
```

## 1. Cel i zakres

Budowanie i czytanie wzoru: indeks, współczynnik, nawias, grupy wieloatomowe. Właścicielem są też masa względna, stosunek masowy, skład procentowy i prawo stałości składu. Nie zmieniaj indeksów podczas bilansowania reakcji.

---


---

# MATERIAŁ Z ARCHIWUM — do redakcji (akapity, których nie ma w treści głównej)

## z: MASTER v15.0

# CHE.01F.12-WZORY — WZORY CHEMICZNE

## KARTA STARTOWA E8 — 10 rzeczy, które muszę umieć

**Dominująca umiejętność:** Wzory chemiczne jako zapis składu.
**Poziomy:** E8 — rdzeń · ROZUMIENIE — wyjaśniam mechanizm · AMBITNE — łączę i uzasadniam · AKADEMICKI — znam granice modelu.

1. wzór pokazuje skład.
2. indeks zmienia skład substancji.
3. współczynnik zmienia liczbę jednostek.
4. wzór związku jonowego wynika z obojętności elektrycznej.
5. NaCl oznacza stosunek jonów w sieci.
6. cząsteczka i jednostka wzoru nie są tym samym.
7. nawiasy grup wieloatomowych mają znaczenie.
8. wzór strukturalny dodaje informację o połączeniach.
9. wzór empiryczny może być najprostszym stosunkiem.
10. nie bilansujemy reakcji przez zmianę indeksów.

### Diagnoza wejściowa

Bez zaglądania do wykładu odpowiedz: **co już potrafię w obszarze „Wzory chemiczne jako zapis składu” i gdzie pojawia się pierwsza niepewność?** Wynik diagnozy ma wskazać fragment do powtórki, a nie być oceną końcową.

### Zasada kontroli

**Pytanie przewodnie:** Jak zbudować poprawny zapis substancji?

## Rodzaje zapisu

**Wzór sumaryczny** podaje rodzaj i liczbę atomów w jednostce wzoru. 
**Wzór strukturalny** pokazuje sposób połączenia atomów. 
**Wzór Lewisa** pokazuje wiązania i pary elektronowe. 
**Wzór empiryczny** podaje najprostszy całkowity stosunek atomów.

`C₂H₆O` nie mówi, czy struktura to etanol czy eter dimetylowy.

## Związki jonowe

Najpierw zapisujemy jony i ich ładunki. Następnie dobieramy najmniejsze całkowite proporcje zapewniające obojętność.

Dla grup wieloatomowych:
`Ca²⁺ + 2OH⁻ → Ca(OH)₂`.

Nawias informuje, że cała grupa OH występuje dwa razy.

## Indeks i współczynnik

`2H₂O` oznacza dwie jednostki wody.

`H₂O₂` oznacza inną substancję.

To jedna z najważniejszych zasad całego F.

## Wizualizacja `V010v001`

Budowniczy wzoru:
1. wybierz kation;
2. wybierz anion;
3. pokaż ładunki;
4. zbilansuj;
5. wygeneruj wzór;
6. pokaż kontrolę ładunku.

Tryb „błąd celowo” pokazuje `CaOH2` vs `Ca(OH)2` i tłumaczy różnicę.

## Parser

Docelowy parser powinien rozumieć co najmniej:
`H2O`, `Al2(SO4)3`, `Ca(OH)2`, `NH4NO3`, `CuSO4·5H2O`.

Nie powinien być implementowany osobno w każdej lekcji.

## DOMKNIĘCIE WYKŁADU MASTER 5.0 — Budowanie wzoru bez zgadywania

**Rdzeń pojęciowy:** Wzór związku jonowego buduje się przez zachowanie obojętności elektrycznej całego zapisu. Indeksy należą do wzoru substancji, a współczynniki do równania reakcji. Najpierw ustal ładunki składników, potem najmniejszy wspólny bilans.

**Przykład prowadzony:** Dla Ca²⁺ i Cl⁻ potrzebne są dwa jony chlorkowe: CaCl₂. Dla Al³⁺ i SO₄²⁻ najmniejszy wspólny bilans ładunku daje Al₂(SO₄)₃.

### WARSTWA INTEGRACYJNA MASTER 3.0 — 

**Model:** Wzór → bilans ładunku.

**Wyjaśnij teraz:** Indeksy we wzorze opisują skład jednostki, a współczynniki liczbę jednostek w równaniu.

**Mini-przykład:** Ca²⁺ i Cl⁻ dają CaCl₂.

**Ograniczenie/kontrola:** Nie zmieniaj indeksów podczas bilansowania równania.

**Poziom:** E7/E8 → LO podstawowe → LO rozszerzone → pomost akademicki
**Poprzednia:** · **Następna:** Wiązania chemiczne
**Plik źródłowy:** CHE.all.v01.00.md (blok L001, sekcje 5.5, 5.6, 5.6a)

## JAK PRACOWAĆ Z TĄ LEKCJĄ

**Zasada 80/20 tej lekcji:**
- W–K–S–K,
- indeks vs współczynnik vs nawias,
- grupy atomów,
- wzory sumaryczne, strukturalne, elektronowe.

## 0. WYKŁAD KANONICZNY — RDZEŃ: JAK ZBUDOWAĆ POPRAWNY WZÓR

Wzór chemiczny nie jest nazwą ani przypadkowym zestawieniem symboli. Pokazuje, jakie składniki tworzą substancję i w jakiej proporcji występują w jej jednostce zapisu.

Dla związku jonowego podstawą jest **bilans ładunków**: całkowity ładunek wzoru musi być równy zero. Dla `Ca²⁺` i `Cl⁻` potrzebne są dwa jony chlorkowe, więc otrzymujemy `CaCl₂`. Dla `Al³⁺` i `O²⁻` najmniejsza proporcja równoważąca ładunki to `2 : 3`, więc `Al₂O₃`.

**Ważne rozróżnienie:** indeks dolny zmienia skład/proporcję substancji, natomiast współczynnik przed wzorem zmienia liczbę jednostek substancji w równaniu. Dlatego `2H₂O` nie oznacza innej substancji niż `H₂O`, ale `H₂O₂` jest inną substancją niż `H₂O`.

**Procedura:** rozpoznaj jony lub składniki → ustal ich ładunki/wartościowości → znajdź najmniejszą proporcję całkowitą → zapisz indeksy → sprawdź bilans ładunków i sens chemiczny wzoru.

**Przykład:** `Al³⁺ + SO₄²⁻` daje `Al₂(SO₄)₃`; nawias jest potrzebny, ponieważ cała grupa siarczanowa występuje trzy razy.

**Granica modelu:** prosta metoda „skrzyżuj liczby” jest tylko skrótem. Nie zastępuje rozpoznania jonów, uproszczenia stosunku ani kontroli ładunku.

**Rozwiń:** dalsze sekcje . **Zajrzyj wyżej:** przy bardziej złożonych związkach i chemii molekularnej potrzebne są dodatkowe reguły zapisu.

## WARSTWOWANIE LEKCJI

- **E7/E8 — RDZEŃ:** trzeba umieć zastosować.
- **LO PODSTAWOWE:** trzeba szerzej rozumieć zależności.
- **LO ROZSZERZONE:** trzeba znać mechanizm i wyjątki.
- **POMOST AKADEMICKI:** można wejść w pełniejszy model.
```

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **E7/E8 — RDZEŃ** | pojęcia i procedury konieczne na tym etapie |
| **LO PODSTAWOWE** | pełniejsze zastosowania i zależności |
| **LO ROZSZERZONE** | mechanizmy, wyjątki i formalizm |
| **POMOST AKADEMICKI** | głębszy model i ograniczenia uproszczeń |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z :
- atom, jon.

Z :
- układ okresowy, grupy.

Z :
- wartościowość, ładunek jonu.

---

## ODNIESIENIA W TEJ LEKCJI

**Wyjaśnij teraz:** wzór chemiczny jest zapisem składu lub organizacji substancji. Wzór sumaryczny mówi, jakie i ile atomów przypada na jednostkę wzoru; wzór strukturalny pokazuje sposób połączenia atomów; wzór elektronowy pokazuje rozmieszczenie elektronów walencyjnych w przyjętym modelu.

**Rozwiń:** — wiązania i struktury Lewisa.

**Zajrzyj wyżej:** R05 — masa molowa i obliczenia ilościowe na podstawie wzoru.

## 1. CEL LEKCJI

Po tej lekcji uczeń:

- **stosuje** algorytm W–K–S–K do układania wzorów,
- **rozróżnia** indeks dolny, współczynnik i nawias,
- **traktuje** grupy atomów jako jeden klocek,
- **zapisuje** wzory sumaryczne, strukturalne i elektronowe,
- **oblicza** masę cząsteczkową i masę jednostki wzoru,
- **rozpoznaje** grupy wieloatomowe (OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻, NH₄⁺),
- (ambitnie) **rozumie** zapis hydratów (CuSO₄·5H₂O),
- (zaawansowanie) **stosuje** wzory do stechiometrii.

---

## 2. PYTANIE PRZEWODNIE

**Jak z wartościowości zbudować poprawny wzór chemiczny — i jak zapisać grupy atomów?**

---

## 3. MAPA POJĘĆ TEJ LEKCJI

```
WZÓR CHEMICZNY
│
├── SUMARYCZNY (H₂O, Al₂O₃, Ca(OH)₂)
│ ├── indeks dolny
│ ├── grupy atomów
│ └── nawias
│
├── STRUKTURALNY (H–O–H, O=C=O)
│
├── ELEKTRONOWY (kropkowy)
│
└── PÓŁSTRUKTURALNY (CH₃–CH₂–OH)

W–K–S–K:
W — wartościowości
K — krzyżowanie
S — skracanie
K — kontrola
```

---

## 4. DIAGNOZA STARTOWA

1. Co to indeks dolny?
2. Co to współczynnik?
3. Kiedy używać nawiasu?
4. Zapisz wzór tlenku glinu.
5. Dlaczego Ca(OH)₂ ma nawias?

**Odpowiedzi:**
1. Liczba atomów w cząsteczce.
2. Liczba cząsteczek w równaniu.
3. Gdy grupa powtarza się > 1 raz.
4. Al₂O₃.
5. Bo OH⁻ występuje 2 razy.

---

## 5. ŚCIĄGA — WZORY CHEMICZNE

### 5.1. Wzór sumaryczny

**Wzór sumaryczny** — zapis składu substancji za pomocą symboli pierwiastków i indeksów dolnych.

**Przykłady:**
- H₂O — 2 atomy wodoru + 1 atom tlenu,
- CO₂ — 1 atom węgla + 2 atomy tlenu,
- NaCl — 1 atom sodu + 1 atom chloru,
- Al₂O₃ — 2 atomy glinu + 3 atomy tlenu,
- Ca(OH)₂ — 1 atom wapnia + 2 grupy OH.

**Indeks dolny** — liczba atomów danego pierwiastka lub grupy w jednej cząsteczce / jednostce wzoru.

**Uwaga:** indeks „1" pomijamy (H₂O, nie H₂O₁).

### 5.2. Algorytm W–K–S–K

**W** — Wartościowości.
**K** — Krzyżowanie.
**S** — Skracanie.
**K** — Kontrola.

**Przykład — Al₂O₃:**
1. Wartościowości: Al(III), O(II).
2. Krzyżowanie: Al₂O₃.
3. Skracanie: 2 i 3 nie mają wspólnego dzielnika.
4. Kontrola: 2·(+3) = 3·(−2) = +6 → ładunek 0.

**Przykład — CaO:**
1. Wartościowości: Ca(II), O(II).
2. Krzyżowanie: Ca₂O₂.
3. Skracanie: dzielimy przez 2 → CaO.
4. Kontrola: 1·(+2) = 1·(−2) = 0.

**Przykład — Fe₂O₃:**
1. Wartościowości: Fe(III), O(II).
2. Krzyżowanie: Fe₂O₃.
3. Skracanie: 2 i 3 — bez wspólnego dzielnika.
4. Kontrola: 2·(+3) = 3·(−2) = +6 → 0.

### 5.3. Indeks vs współczynnik vs nawias

| Zapis | Co oznacza | Co obejmuje |
|-------|------------|-------------|
| H₂O | indeks dolny 2 | 2 atomy H w jednej cząsteczce |
| 3H₂O | współczynnik 3 | 3 całe cząsteczki H₂O = 6 H + 3 O |
| Ca(OH)₂ | nawias + indeks 2 | 2 całe grupy OH = 2 O + 2 H |

**Reguła:** nawias stosujemy, gdy grupa powtarza się więcej niż raz.

**Pułapka:** CaOH₂ ≠ Ca(OH)₂.
- CaOH₂ sugeruje: Ca + O + 2 H,
- Ca(OH)₂ mówi: Ca + 2×(O + H).

### 5.4. Grupy atomów (grupy wieloatomowe)

Grupa atomów zachowuje się jak jeden „klocek".

| Grupa | Nazwa | Ładunek | Wartościowość |
|-------|-------|---------|---------------|
| OH | wodorotlenkowa | OH⁻ | I |
| NO₃ | azotanowa(V) | NO₃⁻ | I |
| NO₂ | azotanowa(III) | NO₂⁻ | I |
| SO₄ | siarczanowa(VI) | SO₄²⁻ | II |
| SO₃ | siarczanowa(IV) | SO₃²⁻ | II |
| CO₃ | węglanowa | CO₃²⁻ | II |
| PO₄ | fosforanowa(V) | PO₄³⁻ | III |
| NH₄ | amonowa | NH₄⁺ | I |
| HCO₃ | wodorowęglanowa | HCO₃⁻ | I |
| CH₃COO | octanowa | CH₃COO⁻ | I |
| MnO₄ | manganianowa(VII) | MnO₄⁻ | I |
| CrO₄ | chromianowa(VI) | CrO₄²⁻ | II |
| Cr₂O₇ | dichromianowa(VI) | Cr₂O₇²⁻ | II |

**Nawias:** Ca(OH)₂ — bo OH powtarza się 2×. Al₂(SO₄)₃ — bo SO₄ powtarza się 3×.

### 5.5. Wzór strukturalny

**Wzór strukturalny** — pokazuje, które atomy są ze sobą połączone (kreski = wiązania).

**Przykłady:**
- woda: H–O–H,
- dwutlenek węgla: O=C=O,
- metan: H–C(–H)(–H)–H,
- chlor: Cl–Cl,
- chlorowodór: H–Cl.

### 5.6. Wzór elektronowy (kropkowy)

**Wzór elektronowy** pokazuje elektrony walencyjne atomów oraz pary elektronowe uczestniczące w wiązaniach i pozostające jako pary wolne. Jest to sposób przedstawienia modelu elektronowego, a nie fotografia rzeczywistego rozkładu elektronów.

Na poziomie E7/E8 najważniejsze jest rozumienie, że:
- pojedyncza wspólna para elektronowa może być przedstawiona jako wiązanie,
- para elektronowa może pozostać wolna na atomie,
- liczba elektronów walencyjnych pomaga ustalić, ile elektronów należy rozmieścić.

**Przykład opisowy:** w H₂O atom tlenu tworzy dwa wiązania z atomami wodoru i ma dwie wolne pary elektronowe.

**Rozwiń:** — struktury Lewisa, liczenie elektronów walencyjnych i przewidywanie geometrii.

### 5.7. Wzór a masa względna i masa molowa

**Wzór pozwala policzyć względną masę cząsteczkową `Mᵣ`** dla substancji złożonej z cząsteczek albo odpowiednią względną masę jednostki wzoru dla substancji jonowej. Jest to liczba bez jednostki, otrzymana przez zsumowanie względnych mas atomowych zgodnie z indeksem we wzorze.

**Przykłady:**
- `Mᵣ(H₂O) = 2·1 + 16 = 18`,
- `Mᵣ(CO₂) = 12 + 2·16 = 44`,
- dla `NaCl`: `23 + 35,5 = 58,5`,
- dla `Ca(OH)₂`: `40 + 2·(16+1) = 74`,
- dla `Al₂O₃`: `2·27 + 3·16 = 102`.

**Masa molowa `M`** ma już jednostkę `g/mol` i pojawi się jako osobne narzędzie ilościowe w R05. Dla liczbowej wartości w przybliżeniu odpowiada wartości `Mᵣ` wyrażonej w g/mol, ale nie są to te same wielkości.

**Rozwiń:** R05 — mol i masa molowa.

### 5.8. Hydraty (rozszerzenie)

**Hydrat** — związek z cząsteczkami wody w sieci krystalicznej.

**Zapis:** sól bezwodna · n H₂O.

**Przykłady:**
- CuSO₄·5H₂O — pentahydrat siarczanu(VI) miedzi(II),
- Na₂CO₃·10H₂O — dekahydrat węglanu sodu,
- CaSO₄·2H₂O — dihydrat siarczanu(VI) wapnia (gips).

**Masa molowa hydratu** = masa bezwodnej + masa wody.

**Przykład:** M(CuSO₄·5H₂O) = 159,6 + 5·18 = 249,6 g/mol.

### 5.9. Najczęstsze błędy w zapisie

| Błędnie | Poprawnie | Dlaczego |
|---------|-----------|----------|
| CaOH₂ | Ca(OH)₂ | nawias obejmuje całą grupę OH |
| FeO₃ | Fe₂O₃ | W–K–S–K |
| HSO₄ | H₂SO₄ | wartościowości H i SO₄ |
| Ca₂O₂ | CaO | skrócenie do najprostszego stosunku |
| AlSO₄ | Al₂(SO₄)₃ | W–K–S–K + nawias |
| CaNO₃ | Ca(NO₃)₂ | W–K–S–K + nawias |

---

## 6. DOŚWIADCZENIA MODELOWE

### Doświadczenie 1: Model wzoru z klocków

**Problem:** Jak zobrazować wzór chemiczny?
**Sprzęt:** klocki lub kulki z plasteliny.
**Wykonanie:** zbuduj model H₂O (2 kulki H + 1 O).
**Wniosek:** wzór sumaryczny opisuje liczbę atomów.

### Doświadczenie 2: Budowanie z jonów (W–K–S–K)

**Problem:** Jak zbudować wzór z jonów?
**Wykonanie:** Ca²⁺ + 2 OH⁻ → Ca(OH)₂.
**Wniosek:** W–K–S–K (lub ładunki) prowadzi do wzoru.

---

## 7. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd | Poprawnie | Dlaczego |
|------|-----------|----------|
| CaOH₂ | Ca(OH)₂ | indeks 2 obejmuje całą grupę OH |
| FeO₃ | Fe₂O₃ | W–K–S–K: 2·III = 3·II |
| AlSO₄ | Al₂(SO₄)₃ | W–K–S–K + nawias |
| CaNO₃ | Ca(NO₃)₂ | W–K–S–K + nawias |
| Ca₂O₂ | CaO | skrócenie |
| HSO₄ | H₂SO₄ | wartościowości |
| „3H₂O = 3 atomy H" | 3H₂O = 6 atomów H | współczynnik mnoży wszystko |
| „indeks przy Ca(OH)₂ dotyczy tylko H" | dotyczy całej grupy OH | nawias obejmuje grupę |

### Klinika 2.0 — przykład 1

**Błąd:** CaOH₂.

- **Znajdź:** brak nawiasu.
- **Popraw:** Ca(OH)₂.
- **Reguła:** nawias obejmuje całą grupę OH.
- **Dlaczego:** bez nawiasu indeks 2 dotyczy tylko H.
- **Zadanie podobne:** Zapisz wzór wodorotlenku baru.
- **Pułapka:** NaOH nie ma nawiasu (tylko 1 grupa OH).

### Klinika 2.0 — przykład 2

**Błąd:** FeO₃.

- **Znajdź:** brak kontroli W–K–S–K.
- **Popraw:** Fe₂O₃.
- **Reguła:** Fe(III) + O(II) → Fe₂O₃.
- **Dlaczego:** 2·(+3) = 3·(−2) = +6 → 0.
- **Zadanie podobne:** Zapisz wzór tlenku żelaza(II).
- **Pułapka:** FeO (nie Fe₂O₂).

### Klinika 2.0 — przykład 3

**Błąd:** AlSO₄.

- **Znajdź:** brak nawiasu + brak krzyżowania.
- **Popraw:** Al₂(SO₄)₃.
- **Reguła:** Al(III) + SO₄(II) → 2 atomy Al i 3 grupy SO₄.
- **Dlaczego:** 2·(+3) = 3·(−2) = +6 → 0. Nawias, bo 3 grupy SO₄.
- **Zadanie podobne:** Zapisz wzór siarczanu(VI) miedzi(II).
- **Pułapka:** CuSO₄ bez nawiasu (1 grupa SO₄).

---

## 8. ĆWICZENIA

### 8.1. Mini-check (5 pytań)

1. Co to indeks dolny?
2. Co to współczynnik?
3. Kiedy używać nawiasu?
4. Zapisz wzór tlenku glinu.
5. Zapisz wzór wodorotlenku wapnia.

### 8.2. Ćwiczenie prowadzone

**Dane:** Al(III) + SO₄(II).

**Krok 1.** Wartościowości: 3 i 2.
**Krok 2.** Krzyżowanie: Al₂(SO₄)₃.
**Krok 3.** Nawias, bo 3 grupy SO₄.
**Krok 4.** Kontrola: 2·(+3) + 3·(−2) = 0.

**Spróbuj sam:** Ca(II) + PO₄(III).

### 8.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Zapisz wzory: tlenek magnezu, tlenek glinu, tlenek siarki(IV), tlenek azotu(V).
2. Nazwij: Fe₂O₃, CuO, N₂O₅, P₂O₅.
3. Zapisz wzory: chlorek sodu, chlorek wapnia, chlorek glinu.
4. Zapisz wzory: wodorotlenek sodu, wodorotlenek wapnia, wodorotlenek glinu.
5. Zapisz wzory: azotan(V) sodu, siarczan(VI) sodu, węglan wapnia.

**B. Trening**

6. Zapisz wzory: siarczan(VI) glinu, fosforan(V) wapnia, azotan(V) ołowiu(II).
7. Zapisz wzory: wodorotlenek żelaza(II), wodorotlenek żelaza(III).
8. Popraw: CaOH₂; FeO₃; AlSO₄.
9. Zapisz wzór hydratu CuSO₄·5H₂O.
10. Oblicz masę cząsteczkową: H₂O, CO₂, H₂SO₄.

**C. Ambitne**

11. Zapisz wzory: manganian(VII) potasu, dichromian(VI) potasu.
12. Zapisz wzory: wodorowęglan sodu, octan sodu.
13. Narysuj wzór strukturalny: H₂O, CO₂, CH₄.
14. Narysuj wzór elektronowy: H₂O, Cl₂, HCl.
15. Wyjaśnij, dlaczego Ca(OH)₂ ma nawias, a NaOH nie.

**D. Zaawansowane**

16. Co to hydrat? Podaj 3 przykłady.
17. Oblicz masę molową CuSO₄·5H₂O.
18. Ile atomów H jest w 3Ca(OH)₂?
19. Zapisz wzór: azotan(V) żelaza(III).
20. Porównaj masę cząsteczkową H₂O i D₂O (ciężka woda, D = deuter).

### 8.4. Interleaving (przeplatany)

1. Co to Z?
2. Wartościowość C?
3. Zapisz wzór tlenku glinu.
4. Kiedy nawias?
5. Masa cząsteczkowa H₂O?

---

## 9. ODPOWIEDZI

### Mini-check

1. Liczba atomów danego pierwiastka w cząsteczce.
2. Liczba cząsteczek w równaniu.
3. Gdy grupa powtarza się > 1 raz.
4. Al₂O₃.
5. Ca(OH)₂.

### Ćwiczenia A

1. MgO, Al₂O₃, SO₂, N₂O₅.
2. tlenek żelaza(III), tlenek miedzi(II), tlenek azotu(V), tlenek fosforu(V).
3. NaCl, CaCl₂, AlCl₃.
4. NaOH, Ca(OH)₂, Al(OH)₃.
5. NaNO₃, Na₂SO₄, CaCO₃.

### Ćwiczenia B

6. Al₂(SO₄)₃, Ca₃(PO₄)₂, Pb(NO₃)₂.
7. Fe(OH)₂, Fe(OH)₃.
8. Ca(OH)₂, Fe₂O₃, Al₂(SO₄)₃.
9. CuSO₄·5H₂O — pentahydrat.
10. M(H₂O) = 18 u, M(CO₂) = 44 u, M(H₂SO₄) = 98 u.

### Ćwiczenia C

11. KMnO₄, K₂Cr₂O₇.
12. NaHCO₃, CH₃COONa.
13. H–O–H; O=C=O; H–C(–H)(–H)–H.
14. H:O:H (wolne pary na O); :Cl:Cl:; H:Cl:.
15. NaOH ma 1 grupę OH → bez nawiasu. Ca(OH)₂ ma 2 grupy OH → nawias.

### Ćwiczenia D

16. Związek z cząsteczkami wody w sieci, np. CuSO₄·5H₂O, Na₂CO₃·10H₂O, CaSO₄·2H₂O.
17. M(CuSO₄·5H₂O) = 159,6 + 5·18 = 249,6 g/mol.
18. 3·2 = 6 atomów H (z 3 grup OH).
19. Fe(NO₃)₃.
20. M(H₂O) = 18 u; M(D₂O) = 2·2 + 16 = 20 u.

---

## 10. FISZKI — tylko jeśli potrzebne

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to indeks dolny? | Liczba atomów w cząsteczce |
| Co to współczynnik? | Liczba cząsteczek w równaniu |
| Kiedy nawias? | Gdy grupa powtarza się > 1 raz |
| W–K–S–K? | Wartościowości, krzyżowanie, skracanie, kontrola |
| Wzór tlenku glinu? | Al₂O₃ |
| Wzór chlorku wapnia? | CaCl₂ |
| Wzór wodorotlenku sodu? | NaOH |
| Wzór wodorotlenku wapnia? | Ca(OH)₂ |
| Wzór wodorotlenku glinu? | Al(OH)₃ |
| Wzór siarczanu(VI) sodu? | Na₂SO₄ |
| Wzór siarczanu(VI) glinu? | Al₂(SO₄)₃ |
| Wzór azotanu(V) sodu? | NaNO₃ |
| Wzór węglanu wapnia? | CaCO₃ |
| Wzór fosforanu(V) wapnia? | Ca₃(PO₄)₂ |
| Wzór kwasu siarkowego(VI)? | H₂SO₄ |
| Wzór kwasu azotowego(V)? | HNO₃ |
| M(H₂O)? | 18 u |
| M(CO₂)? | 44 u |
| M(NaCl)? | 58,5 u |
| M(H₂SO₄)? | 98 u |
| Grupa OH⁻ — wartościowość? | I |
| Grupa SO₄²⁻ — wartościowość? | II |
| Grupa PO₄³⁻ — wartościowość? | III |
| Co to hydrat? | Sól z wodą krystalizacyjną |
| Przykład hydratu? | CuSO₄·5H₂O |

---

## 11. SPRAWDZENIE DIAGNOSTYCZNE

Test nie jest celem lekcji. Wybierz tylko te zadania, które pokazują, czy uczeń opanował definicję, procedurę i kontrolę wyniku.

1. Zapisz wzory: tlenek wapnia, tlenek żelaza(III), tlenek siarki(VI).
2. Nazwij: Al₂O₃, N₂O₅, CuO, SO₂.
3. Zapisz wzory: wodorotlenek wapnia, wodorotlenek glinu, siarczan(VI) sodu.
4. Popraw: CaOH₂; FeO₃; AlSO₄.
5. Oblicz masę cząsteczkową H₂O i H₂SO₄.
6. (extra) Co to hydrat? Podaj przykład.
7. (extra) Zapisz wzór azotanu(V) ołowiu(II).
8. (extra) Ile atomów tlenu jest w 2Al₂(SO₄)₃?

---

## 12. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Wzór sumaryczny | definicja, przykłady |
| Wzór strukturalny | definicja, przykłady |
| Wzór elektronowy | definicja, przykłady |
| Indeks, współczynnik, nawias | rozróżnienie |
| W–K–S–K | algorytm |
| Grupy atomów | wartościowości, przykłady |
| Masa cząsteczkowa | obliczanie |
| Hydraty | zapis, przykłady (ambitnie) |

---

## 13. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 20 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 15 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |

---

## 14. MAPA MYŚLI

```
WZÓR CHEMICZNY
├── SUMARYCZNY
│ ├── indeks dolny
│ ├── grupy atomów
│ └── nawias
├── STRUKTURALNY
├── ELEKTRONOWY
└── PÓŁSTRUKTURALNY

W–K–S–K:
W — wartościowości
K — krzyżowanie
S — skracanie
K — kontrola

GRUPY ATOMÓW:
OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻, NH₄⁺

MASY:
M = suma mas atomowych
```

---

## 15. CO DALEJ?

** — Wiązania chemiczne:** jonowe, kowalencyjne, metaliczne.

** — VSEPR:** geometria cząsteczek.

---

## 16. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Wzór sumaryczny | Zapis liczby atomów pierwiastków. |
| Wzór strukturalny | Zapis połączeń między atomami. |
| Wzór elektronowy | Zapis z kropkami (elektrony walencyjne). |
| Indeks dolny | Liczba atomów w cząsteczce. |
| Współczynnik | Liczba cząsteczek w równaniu. |
| Nawias | Obejmuje grupę atomów. |
| Grupa atomów | Kilka atomów działających jak jeden klocek. |
| Masa cząsteczkowa | Suma mas atomowych w cząsteczce. |
| Hydrat | Sól z wodą krystalizacyjną. |

---

## 17. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

---

## 18. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

---

## 19. DODATEK E — WARSTWA EXTRA

### E.1. Hydraty — dokładniej

- CuSO₄·5H₂O — niebieskie kryształy (uwodniony),
- CuSO₄ — biały proszek (bezwodny).

Hydraty stosowane do wykrywania wody (CuSO₄ zmienia barwę).

### E.2. Masa jednostki wzoru vs masa cząsteczkowa

- kowalencyjne (H₂O, CO₂, CH₄) → masa cząsteczkowa,
- jonowe (NaCl, CaCl₂) → masa jednostki wzoru.

### E.3. Most do (Wiązania)

Wzór chemiczny → typ wiązania (jonowe, kowalencyjne) → właściwości.

### E.4. Most do R05 (Mol)

Wzór chemiczny + masa cząsteczkowa → mol → stechiometria.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Wzór sumaryczny | Zapis liczby atomów pierwiastków w substancji. |
| Wzór strukturalny | Zapis połączeń między atomami. |
| Indeks dolny | Liczba atomów w cząsteczce. |
| Współczynnik | Liczba cząsteczek w równaniu. |
| Grupa atomów | Kilka atomów działających jak jeden klocek. |
| Hydrat | Sól z wodą krystalizacyjną. |

---

## 21. 10 ZASAD SUPERNAUKI

1. **Najpierw próbuj, potem czytaj.**
2. **Mów na głos.**
3. **Rysuj.**
4. **Powtarzaj w odstępach.**
5. **Mieszaj tematy.**
6. **Testuj się.**
7. **Tłumacz komuś.**
8. **Łap moment „aha!".**
9. **Śpij.**
10. **Bądź ciekawy.**

---

## 22. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
WZORY CHEMICZNE
SUMARYCZNY: H₂O, CO₂, Al₂O₃, Ca(OH)₂
STRUKTURALNY: H–O–H, O=C=O
ELEKTRONOWY: H:O:H, :Cl:Cl:

W–K–S–K:
1. Wartościowości (I, II, III, IV...)
2. Krzyżowanie
3. Skracanie (NWD)
4. Kontrola (suma ładunków = 0)

INDEKS vs WSPÓŁCZYNNIK vs NAWIAS:
- indeks: H₂O (2 atomy H)
- współczynnik: 3H₂O (3 cząsteczki = 6 H)
- nawias: Ca(OH)₂ (2 całe grupy OH)

GRUPY ATOMÓW:
OH⁻ (I), NO₃⁻ (I), SO₄²⁻ (II), CO₃²⁻ (II),
PO₄³⁻ (III), NH₄⁺ (I)

MASY:
H₂O = 18 u; CO₂ = 44 u; NaCl = 58,5 u;
H₂SO₄ = 98 u; Ca(OH)₂ = 74 u; Al₂O₃ = 102 u

PUŁAPKI:
- CaOH₂ ✗ → Ca(OH)₂ ✓
- FeO₃ ✗ → Fe₂O₃ ✓
- AlSO₄ ✗ → Al₂(SO₄)₃ ✓
- Ca₂O₂ ✗ → CaO ✓
```

---

## 23. STATUS LEKCJI

- **Wersja 1.1** (2026-09-27).
- **Nowa numeracja:** .
- **Następna lekcja:** Wiązania chemiczne.

---

**Koniec MASTER v1.1**

---

<!-- ŹRÓDŁO: kanon CHE.core.md, WARSTWA MASTER v5.0 dla (w. 9764–10373) -->


---



## WARSTWA ULEPSZENIA — WZÓR JAKO SKOMPRESOWANA INFORMACJA

### Co mówi wzór?
Wzór określa skład jakościowy oraz ilościowy zapisany przez indeksy. Nie mówi automatycznie o pełnej geometrii, stanie skupienia, mechanizmie reakcji ani wszystkich właściwościach substancji.

### Związek jonowy
Dla związku jonowego dobiera się najmniejszy stosunek całkowity jonów zapewniający obojętność elektryczną, np. Al³⁺ i O²⁻ → Al₂O₃. Indeksy wynikają z bilansu ładunku, nie z „zamiany liczb na krzyż” bez kontroli skracania.

### Cząsteczka a jednostka wzoru
Dla substancji cząsteczkowych wzór może opisywać rzeczywistą cząsteczkę, natomiast dla wielu kryształów jonowych lepiej mówić o jednostce wzoru.

### Indeks kontra współczynnik
Indeks zmienia tożsamość zapisywanej cząstki/składu; współczynnik zmienia liczbę jednostek. Dlatego równania bilansujemy współczynnikami, nie indeksami.


## TEST JEDNOKROTNEGO WYBORU

**Co wolno zmienić przy bilansowaniu równania?** A. indeks w H₂O; B. współczynnik przed H₂O; C. symbol pierwiastka; D. skład jonu. **Odp.: B.**

## SŁOWNIK

**Indeks** — liczba we wzorze określająca liczbę atomów/danego składnika. **Współczynnik** — liczba jednostek wzoru w równaniu. **Jednostka wzoru** — najmniejszy stosunek jonów reprezentowany przez wzór związku jonowego.


## z: MASTER v14.0

# CHE.01F.12-WZORY — WZORY CHEMICZNE

## WARSTWOWANIE LEKCJI

PUŁAPKI:
- CaOH₂ ✗ → Ca(OH)₂ ✓
- FeO₃ ✗ → Fe₂O₃ ✓
- AlSO₄ ✗ → Al₂(SO₄)₃ ✓
- Ca₂O₂ ✗ → CaO ✓
```

---

## 23. STATUS LEKCJI

- **Wersja 1.1** (2026-09-27).
- **Nowa numeracja:** .
- **Następna lekcja:** Wiązania chemiczne.

---

**Koniec MASTER v1.1**

---

<!-- ŹRÓDŁO: kanon CHE.core.md, WARSTWA MASTER v5.0 dla (w. 9764–10373) -->


---



## WARSTWA ULEPSZENIA — WZÓR JAKO SKOMPRESOWANA INFORMACJA

### Co mówi wzór?
Wzór określa skład jakościowy oraz ilościowy zapisany przez indeksy. Nie mówi automatycznie o pełnej geometrii, stanie skupienia, mechanizmie reakcji ani wszystkich właściwościach substancji.

### Związek jonowy
Dla związku jonowego dobiera się najmniejszy stosunek całkowity jonów zapewniający obojętność elektryczną, np. Al³⁺ i O²⁻ → Al₂O₃. Indeksy wynikają z bilansu ładunku, nie z „zamiany liczb na krzyż” bez kontroli skracania.

### Cząsteczka a jednostka wzoru
Dla substancji cząsteczkowych wzór może opisywać rzeczywistą cząsteczkę, natomiast dla wielu kryształów jonowych lepiej mówić o jednostce wzoru.

### Indeks kontra współczynnik
Indeks zmienia tożsamość zapisywanej cząstki/składu; współczynnik zmienia liczbę jednostek. Dlatego równania bilansujemy współczynnikami, nie indeksami.



## z: stary kanon F00–F09 (v4.1/v5.0)

# F06 — WZORY CHEMICZNE (Fundamenty)

## DOMKNIĘCIE WYKŁADU MASTER 5.0 — Budowanie wzoru bez zgadywania

### WARSTWA INTEGRACYJNA MASTER 3.0 — F06

**Wersja:** 1.3 · 2026-09-28
**Poziom:** E7/E8 → LO podstawowe → LO rozszerzone → pomost akademicki
**Poprzednia:** F05 · **Następna:** F07 Wiązania chemiczne
**Plik źródłowy:** CHE.all.v01.00.md (blok L001, sekcje 5.5, 5.6, 5.6a)

## 0. WYKŁAD KANONICZNY — RDZEŃ: JAK ZBUDOWAĆ POPRAWNY WZÓR

**Rozwiń:** dalsze sekcje F06. **Zajrzyj wyżej:** przy bardziej złożonych związkach i chemii molekularnej potrzebne są dodatkowe reguły zapisu.

## WARSTWOWANIE LEKCJI

- **E7/E8 — RDZEŃ:** trzeba umieć zastosować.
- **LO PODSTAWOWE:** trzeba szerzej rozumieć zależności.
- **LO ROZSZERZONE:** trzeba znać mechanizm i wyjątki.
- **POMOST AKADEMICKI:** można wejść w pełniejszy model.
```

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **E7/E8 — RDZEŃ** | pojęcia i procedury konieczne na tym etapie |
| **LO PODSTAWOWE** | pełniejsze zastosowania i zależności |
| **LO ROZSZERZONE** | mechanizmy, wyjątki i formalizm |
| **POMOST AKADEMICKI** | głębszy model i ograniczenia uproszczeń |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z F02:
- atom, jon.

Z F03:
- układ okresowy, grupy.

Z F05:
- wartościowość, ładunek jonu.

---

## ODNIESIENIA W TEJ LEKCJI

**Wyjaśnij teraz:** wzór chemiczny jest zapisem składu lub organizacji substancji. Wzór sumaryczny mówi, jakie i ile atomów przypada na jednostkę wzoru; wzór strukturalny pokazuje sposób połączenia atomów; wzór elektronowy pokazuje rozmieszczenie elektronów walencyjnych w przyjętym modelu.

**Rozwiń:** F07 — wiązania i struktury Lewisa.

**Zajrzyj wyżej:** R05 — masa molowa i obliczenia ilościowe na podstawie wzoru.

## 1. CEL LEKCJI

Po tej lekcji uczeń:

- **stosuje** algorytm W–K–S–K do układania wzorów,
- **rozróżnia** indeks dolny, współczynnik i nawias,
- **traktuje** grupy atomów jako jeden klocek,
- **zapisuje** wzory sumaryczne, strukturalne i elektronowe,
- **oblicza** masę cząsteczkową i masę jednostki wzoru,
- **rozpoznaje** grupy wieloatomowe (OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻, NH₄⁺),
- (ambitnie) **rozumie** zapis hydratów (CuSO₄·5H₂O),
- (zaawansowanie) **stosuje** wzory do stechiometrii.

---

## 2. PYTANIE PRZEWODNIE

**Jak z wartościowości zbudować poprawny wzór chemiczny — i jak zapisać grupy atomów?**

---

## 3. MAPA POJĘĆ TEJ LEKCJI

```
WZÓR CHEMICZNY
│
├── SUMARYCZNY (H₂O, Al₂O₃, Ca(OH)₂)
│   ├── indeks dolny
│   ├── grupy atomów
│   └── nawias
│
├── STRUKTURALNY (H–O–H, O=C=O)
│
├── ELEKTRONOWY (kropkowy)
│
└── PÓŁSTRUKTURALNY (CH₃–CH₂–OH)

W–K–S–K:
W — wartościowości
K — krzyżowanie
S — skracanie
K — kontrola
```

---

## 4. DIAGNOZA STARTOWA

1. Co to indeks dolny?
2. Co to współczynnik?
3. Kiedy używać nawiasu?
4. Zapisz wzór tlenku glinu.
5. Dlaczego Ca(OH)₂ ma nawias?

**Odpowiedzi:**
1. Liczba atomów w cząsteczce.
2. Liczba cząsteczek w równaniu.
3. Gdy grupa powtarza się > 1 raz.
4. Al₂O₃.
5. Bo OH⁻ występuje 2 razy.

---

## 5. ŚCIĄGA — WZORY CHEMICZNE

### 5.1. Wzór sumaryczny

**Wzór sumaryczny** — zapis składu substancji za pomocą symboli pierwiastków i indeksów dolnych.

**Przykłady:**
- H₂O — 2 atomy wodoru + 1 atom tlenu,
- CO₂ — 1 atom węgla + 2 atomy tlenu,
- NaCl — 1 atom sodu + 1 atom chloru,
- Al₂O₃ — 2 atomy glinu + 3 atomy tlenu,
- Ca(OH)₂ — 1 atom wapnia + 2 grupy OH.

**Indeks dolny** — liczba atomów danego pierwiastka lub grupy w jednej cząsteczce / jednostce wzoru.

**Uwaga:** indeks „1" pomijamy (H₂O, nie H₂O₁).

### 5.2. Algorytm W–K–S–K

**W** — Wartościowości.
**K** — Krzyżowanie.
**S** — Skracanie.
**K** — Kontrola.

**Przykład — Al₂O₃:**
1. Wartościowości: Al(III), O(II).
2. Krzyżowanie: Al₂O₃.
3. Skracanie: 2 i 3 nie mają wspólnego dzielnika.
4. Kontrola: 2·(+3) = 3·(−2) = +6 → ładunek 0.

**Przykład — CaO:**
1. Wartościowości: Ca(II), O(II).
2. Krzyżowanie: Ca₂O₂.
3. Skracanie: dzielimy przez 2 → CaO.
4. Kontrola: 1·(+2) = 1·(−2) = 0.

**Przykład — Fe₂O₃:**
1. Wartościowości: Fe(III), O(II).
2. Krzyżowanie: Fe₂O₃.
3. Skracanie: 2 i 3 — bez wspólnego dzielnika.
4. Kontrola: 2·(+3) = 3·(−2) = +6 → 0.

### 5.3. Indeks vs współczynnik vs nawias

| Zapis | Co oznacza | Co obejmuje |
|-------|------------|-------------|
| H₂O | indeks dolny 2 | 2 atomy H w jednej cząsteczce |
| 3H₂O | współczynnik 3 | 3 całe cząsteczki H₂O = 6 H + 3 O |
| Ca(OH)₂ | nawias + indeks 2 | 2 całe grupy OH = 2 O + 2 H |

**Reguła:** nawias stosujemy, gdy grupa powtarza się więcej niż raz.

**Pułapka:** CaOH₂ ≠ Ca(OH)₂.
- CaOH₂ sugeruje: Ca + O + 2 H,
- Ca(OH)₂ mówi: Ca + 2×(O + H).

### 5.4. Grupy atomów (grupy wieloatomowe)

Grupa atomów zachowuje się jak jeden „klocek".

| Grupa | Nazwa | Ładunek | Wartościowość |
|-------|-------|---------|---------------|
| OH | wodorotlenkowa | OH⁻ | I |
| NO₃ | azotanowa(V) | NO₃⁻ | I |
| NO₂ | azotanowa(III) | NO₂⁻ | I |
| SO₄ | siarczanowa(VI) | SO₄²⁻ | II |
| SO₃ | siarczanowa(IV) | SO₃²⁻ | II |
| CO₃ | węglanowa | CO₃²⁻ | II |
| PO₄ | fosforanowa(V) | PO₄³⁻ | III |
| NH₄ | amonowa | NH₄⁺ | I |
| HCO₃ | wodorowęglanowa | HCO₃⁻ | I |
| CH₃COO | octanowa | CH₃COO⁻ | I |
| MnO₄ | manganianowa(VII) | MnO₄⁻ | I |
| CrO₄ | chromianowa(VI) | CrO₄²⁻ | II |
| Cr₂O₇ | dichromianowa(VI) | Cr₂O₇²⁻ | II |

**Nawias:** Ca(OH)₂ — bo OH powtarza się 2×. Al₂(SO₄)₃ — bo SO₄ powtarza się 3×.

### 5.5. Wzór strukturalny

**Wzór strukturalny** — pokazuje, które atomy są ze sobą połączone (kreski = wiązania).

**Przykłady:**
- woda: H–O–H,
- dwutlenek węgla: O=C=O,
- metan: H–C(–H)(–H)–H,
- chlor: Cl–Cl,
- chlorowodór: H–Cl.

### 5.6. Wzór elektronowy (kropkowy)

**Wzór elektronowy** pokazuje elektrony walencyjne atomów oraz pary elektronowe uczestniczące w wiązaniach i pozostające jako pary wolne. Jest to sposób przedstawienia modelu elektronowego, a nie fotografia rzeczywistego rozkładu elektronów.

Na poziomie E7/E8 najważniejsze jest rozumienie, że:
- pojedyncza wspólna para elektronowa może być przedstawiona jako wiązanie,
- para elektronowa może pozostać wolna na atomie,
- liczba elektronów walencyjnych pomaga ustalić, ile elektronów należy rozmieścić.

**Przykład opisowy:** w H₂O atom tlenu tworzy dwa wiązania z atomami wodoru i ma dwie wolne pary elektronowe.

**Rozwiń:** F07 — struktury Lewisa, liczenie elektronów walencyjnych i przewidywanie geometrii.

### 5.7. Wzór a masa względna i masa molowa

**Wzór pozwala policzyć względną masę cząsteczkową `Mᵣ`** dla substancji złożonej z cząsteczek albo odpowiednią względną masę jednostki wzoru dla substancji jonowej. Jest to liczba bez jednostki, otrzymana przez zsumowanie względnych mas atomowych zgodnie z indeksem we wzorze.

**Przykłady:**
- `Mᵣ(H₂O) = 2·1 + 16 = 18`,
- `Mᵣ(CO₂) = 12 + 2·16 = 44`,
- dla `NaCl`: `23 + 35,5 = 58,5`,
- dla `Ca(OH)₂`: `40 + 2·(16+1) = 74`,
- dla `Al₂O₃`: `2·27 + 3·16 = 102`.

**Masa molowa `M`** ma już jednostkę `g/mol` i pojawi się jako osobne narzędzie ilościowe w R05. Dla liczbowej wartości w przybliżeniu odpowiada wartości `Mᵣ` wyrażonej w g/mol, ale nie są to te same wielkości.

**Rozwiń:** R05 — mol i masa molowa.

### 5.8. Hydraty (rozszerzenie)

**Hydrat** — związek z cząsteczkami wody w sieci krystalicznej.

**Zapis:** sól bezwodna · n H₂O.

**Przykłady:**
- CuSO₄·5H₂O — pentahydrat siarczanu(VI) miedzi(II),
- Na₂CO₃·10H₂O — dekahydrat węglanu sodu,
- CaSO₄·2H₂O — dihydrat siarczanu(VI) wapnia (gips).

**Masa molowa hydratu** = masa bezwodnej + masa wody.

**Przykład:** M(CuSO₄·5H₂O) = 159,6 + 5·18 = 249,6 g/mol.

### 5.9. Najczęstsze błędy w zapisie

| Błędnie | Poprawnie | Dlaczego |
|---------|-----------|----------|
| CaOH₂ | Ca(OH)₂ | nawias obejmuje całą grupę OH |
| FeO₃ | Fe₂O₃ | W–K–S–K |
| HSO₄ | H₂SO₄ | wartościowości H i SO₄ |
| Ca₂O₂ | CaO | skrócenie do najprostszego stosunku |
| AlSO₄ | Al₂(SO₄)₃ | W–K–S–K + nawias |
| CaNO₃ | Ca(NO₃)₂ | W–K–S–K + nawias |

---

## 6. DOŚWIADCZENIA MODELOWE

### Doświadczenie 1: Model wzoru z klocków

**Problem:** Jak zobrazować wzór chemiczny?
**Sprzęt:** klocki lub kulki z plasteliny.
**Wykonanie:** zbuduj model H₂O (2 kulki H + 1 O).
**Wniosek:** wzór sumaryczny opisuje liczbę atomów.

### Doświadczenie 2: Budowanie z jonów (W–K–S–K)

**Problem:** Jak zbudować wzór z jonów?
**Wykonanie:** Ca²⁺ + 2 OH⁻ → Ca(OH)₂.
**Wniosek:** W–K–S–K (lub ładunki) prowadzi do wzoru.

---

## 7. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd | Poprawnie | Dlaczego |
|------|-----------|----------|
| CaOH₂ | Ca(OH)₂ | indeks 2 obejmuje całą grupę OH |
| FeO₃ | Fe₂O₃ | W–K–S–K: 2·III = 3·II |
| AlSO₄ | Al₂(SO₄)₃ | W–K–S–K + nawias |
| CaNO₃ | Ca(NO₃)₂ | W–K–S–K + nawias |
| Ca₂O₂ | CaO | skrócenie |
| HSO₄ | H₂SO₄ | wartościowości |
| „3H₂O = 3 atomy H" | 3H₂O = 6 atomów H | współczynnik mnoży wszystko |
| „indeks przy Ca(OH)₂ dotyczy tylko H" | dotyczy całej grupy OH | nawias obejmuje grupę |

### Klinika 2.0 — przykład 1

**Błąd:** CaOH₂.

- **Znajdź:** brak nawiasu.
- **Popraw:** Ca(OH)₂.
- **Reguła:** nawias obejmuje całą grupę OH.
- **Dlaczego:** bez nawiasu indeks 2 dotyczy tylko H.
- **Zadanie podobne:** Zapisz wzór wodorotlenku baru.
- **Pułapka:** NaOH nie ma nawiasu (tylko 1 grupa OH).

### Klinika 2.0 — przykład 2

**Błąd:** FeO₃.

- **Znajdź:** brak kontroli W–K–S–K.
- **Popraw:** Fe₂O₃.
- **Reguła:** Fe(III) + O(II) → Fe₂O₃.
- **Dlaczego:** 2·(+3) = 3·(−2) = +6 → 0.
- **Zadanie podobne:** Zapisz wzór tlenku żelaza(II).
- **Pułapka:** FeO (nie Fe₂O₂).

### Klinika 2.0 — przykład 3

**Błąd:** AlSO₄.

- **Znajdź:** brak nawiasu + brak krzyżowania.
- **Popraw:** Al₂(SO₄)₃.
- **Reguła:** Al(III) + SO₄(II) → 2 atomy Al i 3 grupy SO₄.
- **Dlaczego:** 2·(+3) = 3·(−2) = +6 → 0. Nawias, bo 3 grupy SO₄.
- **Zadanie podobne:** Zapisz wzór siarczanu(VI) miedzi(II).
- **Pułapka:** CuSO₄ bez nawiasu (1 grupa SO₄).

---

## 8. ĆWICZENIA

### 8.1. Mini-check (5 pytań)

1. Co to indeks dolny?
2. Co to współczynnik?
3. Kiedy używać nawiasu?
4. Zapisz wzór tlenku glinu.
5. Zapisz wzór wodorotlenku wapnia.

### 8.2. Ćwiczenie prowadzone

**Dane:** Al(III) + SO₄(II).

**Krok 1.** Wartościowości: 3 i 2.
**Krok 2.** Krzyżowanie: Al₂(SO₄)₃.
**Krok 3.** Nawias, bo 3 grupy SO₄.
**Krok 4.** Kontrola: 2·(+3) + 3·(−2) = 0.

**Spróbuj sam:** Ca(II) + PO₄(III).

### 8.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Zapisz wzory: tlenek magnezu, tlenek glinu, tlenek siarki(IV), tlenek azotu(V).
2. Nazwij: Fe₂O₃, CuO, N₂O₅, P₂O₅.
3. Zapisz wzory: chlorek sodu, chlorek wapnia, chlorek glinu.
4. Zapisz wzory: wodorotlenek sodu, wodorotlenek wapnia, wodorotlenek glinu.
5. Zapisz wzory: azotan(V) sodu, siarczan(VI) sodu, węglan wapnia.

**B. Trening**

6. Zapisz wzory: siarczan(VI) glinu, fosforan(V) wapnia, azotan(V) ołowiu(II).
7. Zapisz wzory: wodorotlenek żelaza(II), wodorotlenek żelaza(III).
8. Popraw: CaOH₂; FeO₃; AlSO₄.
9. Zapisz wzór hydratu CuSO₄·5H₂O.
10. Oblicz masę cząsteczkową: H₂O, CO₂, H₂SO₄.

**C. Ambitne**

11. Zapisz wzory: manganian(VII) potasu, dichromian(VI) potasu.
12. Zapisz wzory: wodorowęglan sodu, octan sodu.
13. Narysuj wzór strukturalny: H₂O, CO₂, CH₄.
14. Narysuj wzór elektronowy: H₂O, Cl₂, HCl.
15. Wyjaśnij, dlaczego Ca(OH)₂ ma nawias, a NaOH nie.

**D. Zaawansowane**

16. Co to hydrat? Podaj 3 przykłady.
17. Oblicz masę molową CuSO₄·5H₂O.
18. Ile atomów H jest w 3Ca(OH)₂?
19. Zapisz wzór: azotan(V) żelaza(III).
20. Porównaj masę cząsteczkową H₂O i D₂O (ciężka woda, D = deuter).

### 8.4. Interleaving (przeplatany)

1. Co to Z? (F02)
2. Wartościowość C? (F05)
3. Zapisz wzór tlenku glinu. (F06)
4. Kiedy nawias? (F06)
5. Masa cząsteczkowa H₂O? (F06)

---

## 9. ODPOWIEDZI

### Mini-check

1. Liczba atomów danego pierwiastka w cząsteczce.
2. Liczba cząsteczek w równaniu.
3. Gdy grupa powtarza się > 1 raz.
4. Al₂O₃.
5. Ca(OH)₂.

### Ćwiczenia A

1. MgO, Al₂O₃, SO₂, N₂O₅.
2. tlenek żelaza(III), tlenek miedzi(II), tlenek azotu(V), tlenek fosforu(V).
3. NaCl, CaCl₂, AlCl₃.
4. NaOH, Ca(OH)₂, Al(OH)₃.
5. NaNO₃, Na₂SO₄, CaCO₃.

### Ćwiczenia B

6. Al₂(SO₄)₃, Ca₃(PO₄)₂, Pb(NO₃)₂.
7. Fe(OH)₂, Fe(OH)₃.
8. Ca(OH)₂, Fe₂O₃, Al₂(SO₄)₃.
9. CuSO₄·5H₂O — pentahydrat.
10. M(H₂O) = 18 u, M(CO₂) = 44 u, M(H₂SO₄) = 98 u.

### Ćwiczenia C

11. KMnO₄, K₂Cr₂O₇.
12. NaHCO₃, CH₃COONa.
13. H–O–H; O=C=O; H–C(–H)(–H)–H.
14. H:O:H (wolne pary na O); :Cl:Cl:; H:Cl:.
15. NaOH ma 1 grupę OH → bez nawiasu. Ca(OH)₂ ma 2 grupy OH → nawias.

### Ćwiczenia D

16. Związek z cząsteczkami wody w sieci, np. CuSO₄·5H₂O, Na₂CO₃·10H₂O, CaSO₄·2H₂O.
17. M(CuSO₄·5H₂O) = 159,6 + 5·18 = 249,6 g/mol.
18. 3·2 = 6 atomów H (z 3 grup OH).
19. Fe(NO₃)₃.
20. M(H₂O) = 18 u; M(D₂O) = 2·2 + 16 = 20 u.

---

## 10. FISZKI — tylko jeśli potrzebne

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to indeks dolny? | Liczba atomów w cząsteczce |
| Co to współczynnik? | Liczba cząsteczek w równaniu |
| Kiedy nawias? | Gdy grupa powtarza się > 1 raz |
| W–K–S–K? | Wartościowości, krzyżowanie, skracanie, kontrola |
| Wzór tlenku glinu? | Al₂O₃ |
| Wzór chlorku wapnia? | CaCl₂ |
| Wzór wodorotlenku sodu? | NaOH |
| Wzór wodorotlenku wapnia? | Ca(OH)₂ |
| Wzór wodorotlenku glinu? | Al(OH)₃ |
| Wzór siarczanu(VI) sodu? | Na₂SO₄ |
| Wzór siarczanu(VI) glinu? | Al₂(SO₄)₃ |
| Wzór azotanu(V) sodu? | NaNO₃ |
| Wzór węglanu wapnia? | CaCO₃ |
| Wzór fosforanu(V) wapnia? | Ca₃(PO₄)₂ |
| Wzór kwasu siarkowego(VI)? | H₂SO₄ |
| Wzór kwasu azotowego(V)? | HNO₃ |
| M(H₂O)? | 18 u |
| M(CO₂)? | 44 u |
| M(NaCl)? | 58,5 u |
| M(H₂SO₄)? | 98 u |
| Grupa OH⁻ — wartościowość? | I |
| Grupa SO₄²⁻ — wartościowość? | II |
| Grupa PO₄³⁻ — wartościowość? | III |
| Co to hydrat? | Sól z wodą krystalizacyjną |
| Przykład hydratu? | CuSO₄·5H₂O |

---

## 11. SPRAWDZENIE DIAGNOSTYCZNE

Test nie jest celem lekcji. Wybierz tylko te zadania, które pokazują, czy uczeń opanował definicję, procedurę i kontrolę wyniku. (F06)

1. Zapisz wzory: tlenek wapnia, tlenek żelaza(III), tlenek siarki(VI).
2. Nazwij: Al₂O₃, N₂O₅, CuO, SO₂.
3. Zapisz wzory: wodorotlenek wapnia, wodorotlenek glinu, siarczan(VI) sodu.
4. Popraw: CaOH₂; FeO₃; AlSO₄.
5. Oblicz masę cząsteczkową H₂O i H₂SO₄.
6. (extra) Co to hydrat? Podaj przykład.
7. (extra) Zapisz wzór azotanu(V) ołowiu(II).
8. (extra) Ile atomów tlenu jest w 2Al₂(SO₄)₃?

---

## 12. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Wzór sumaryczny | definicja, przykłady |
| Wzór strukturalny | definicja, przykłady |
| Wzór elektronowy | definicja, przykłady |
| Indeks, współczynnik, nawias | rozróżnienie |
| W–K–S–K | algorytm |
| Grupy atomów | wartościowości, przykłady |
| Masa cząsteczkowa | obliczanie |
| Hydraty | zapis, przykłady (ambitnie) |

---

## 13. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 20 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 15 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |

---

## 14. MAPA MYŚLI

```
WZÓR CHEMICZNY
├── SUMARYCZNY
│   ├── indeks dolny
│   ├── grupy atomów
│   └── nawias
├── STRUKTURALNY
├── ELEKTRONOWY
└── PÓŁSTRUKTURALNY

MASY:
M = suma mas atomowych
```

---

## 15. CO DALEJ?

**F07 — Wiązania chemiczne:** jonowe, kowalencyjne, metaliczne.

**F08 — VSEPR:** geometria cząsteczek.

---

## 16. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Wzór sumaryczny | Zapis liczby atomów pierwiastków. |
| Wzór strukturalny | Zapis połączeń między atomami. |
| Wzór elektronowy | Zapis z kropkami (elektrony walencyjne). |
| Indeks dolny | Liczba atomów w cząsteczce. |
| Współczynnik | Liczba cząsteczek w równaniu. |
| Nawias | Obejmuje grupę atomów. |
| Grupa atomów | Kilka atomów działających jak jeden klocek. |
| Masa cząsteczkowa | Suma mas atomowych w cząsteczce. |
| Hydrat | Sól z wodą krystalizacyjną. |

---

## 17. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

---

## 18. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

---

## 19. DODATEK E — WARSTWA EXTRA

### E.1. Hydraty — dokładniej

- CuSO₄·5H₂O — niebieskie kryształy (uwodniony),
- CuSO₄ — biały proszek (bezwodny).

Hydraty stosowane do wykrywania wody (CuSO₄ zmienia barwę).

### E.2. Masa jednostki wzoru vs masa cząsteczkowa

- kowalencyjne (H₂O, CO₂, CH₄) → masa cząsteczkowa,
- jonowe (NaCl, CaCl₂) → masa jednostki wzoru.

### E.3. Most do F07 (Wiązania)

Wzór chemiczny → typ wiązania (jonowe, kowalencyjne) → właściwości.

### E.4. Most do R05 (Mol)

Wzór chemiczny + masa cząsteczkowa → mol → stechiometria.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Wzór sumaryczny | Zapis liczby atomów pierwiastków w substancji. |
| Wzór strukturalny | Zapis połączeń między atomami. |
| Indeks dolny | Liczba atomów w cząsteczce. |
| Współczynnik | Liczba cząsteczek w równaniu. |
| Grupa atomów | Kilka atomów działających jak jeden klocek. |
| Hydrat | Sól z wodą krystalizacyjną. |

---

## 21. 10 ZASAD SUPERNAUKI

1. **Najpierw próbuj, potem czytaj.**
2. **Mów na głos.**
3. **Rysuj.**
4. **Powtarzaj w odstępach.**
5. **Mieszaj tematy.**
6. **Testuj się.**
7. **Tłumacz komuś.**
8. **Łap moment „aha!".**
9. **Śpij.**
10. **Bądź ciekawy.**

---

## 22. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
WZORY CHEMICZNE
SUMARYCZNY: H₂O, CO₂, Al₂O₃, Ca(OH)₂
STRUKTURALNY: H–O–H, O=C=O
ELEKTRONOWY: H:O:H, :Cl:Cl:

PUŁAPKI:
- CaOH₂ ✗ → Ca(OH)₂ ✓
- FeO₃ ✗ → Fe₂O₃ ✓
- AlSO₄ ✗ → Al₂(SO₄)₃ ✓
- Ca₂O₂ ✗ → CaO ✓
```

---

## 23. STATUS LEKCJI

- **Wersja 1.1** (2026-09-27).
- **Nowa numeracja:** F06.
- **Następna lekcja:** F07 Wiązania chemiczne.

---

**Koniec F06 MASTER v1.1**

---


---

<!-- ŹRÓDŁO: kanon CHE.core.md, WARSTWA MASTER v5.0 dla F06 (w. 9764–10373) -->

# F06 — WARSTWA MASTER v5.0

## F06 — WZORY CHEMICZNE

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

<!-- źródłowy fragment: ## STANDARD ZAPISU CHEMICZNEGO (pakiet v2.0); dopasowanie: F06:3, F05:3, F03:2, F02:2 -->

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

<!-- źródłowy fragment: ## A5. Mnemotechniki (rdzeń kursu); dopasowanie: F06:3, X08:2, N04:2, J09:2 -->

#### Ćwiczenia (basic + train)

Wzory i nazwy · charakter · dokończ +H₂O · popraw FeO₃ / Ca₂O₂.

<!-- źródłowy fragment: ### Ćwiczenia (basic + train); dopasowanie: F06:1 -->

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

<!-- źródłowy fragment: ## L001 — Powtórka fundamentów z klasy 7 (start klasy 8); dopasowanie: F06:3, F05:3, F03:3, REV00:2 -->

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

<!-- źródłowy fragment: ## 0. MAPA LEKCJI + ORIENTACJA; dopasowanie: F06:3, F04:3, F03:3, F07:2 -->

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

<!-- źródłowy fragment: ## 1. CEL LEKCJI; dopasowanie: F06:4, F03:3, F02:3, LAB12:2 -->

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

<!-- źródłowy fragment: ### Krzyżowanie wartościowości — algorytm W–K–S–K; dopasowanie: F06:2, F05:2, F03:2, N04:1 -->

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
| NaCl | 23 + 35,5 | 58,5 u (masa jednostki wzoru) |
| Ca(OH)₂ | 40 + 2·(16+1) | 74 u (masa jednostki wzoru) |
| H₂SO₄ | 2·1 + 32 + 4·16 | 98 u (masa cząsteczkowa) |

<!-- źródłowy fragment: ### 5.5. Wzory sumaryczne + grupy atomów + wzory strukturalne; dopasowanie: F06:3, F07:2, F03:2, F02:2 -->

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

<!-- źródłowy fragment: ### 5.7. Równania reakcji – podstawy; dopasowanie: F06:3, LAB12:2, J09:2, F09:2 -->

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

<!-- źródłowy fragment: ### Ćwiczenia KLINIKI BŁĘDÓW; dopasowanie: F06:2, F05:2, O07:1, LAB20:1 -->

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

<!-- źródłowy fragment: ### Diagnostyka fundamentów (5 minut) — zrób przed resztą; dopasowanie: F06:2, REV00:1, J09:1, J03:1 -->

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

<!-- źródłowy fragment: ### Mapa myśli: WZÓR SUMARYCZNY; dopasowanie: F06:2, F05:1, F03:1 -->

#### Nawias = pudełko na grupę OH

```
CaOH₂   →  Ca–O–H–H      ← indeks przyklejony do H (źle)
Ca(OH)₂ →  Ca–(O–H)(O–H) ← indeks obejmuje całą grupę OH
```

<!-- źródłowy fragment: ### Nawias = pudełko na grupę OH; dopasowanie: F06:2, F03:1 -->

---

---

<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 5643–6378 -->

## z: stary podział CHE.01.F06.wzory_chemiczne.md

<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 4909–5643 -->
# F06 — WZORY CHEMICZNE (Fundamenty)

## WARSTWOWANIE LEKCJI

PUŁAPKI:
- CaOH₂ ✗ → Ca(OH)₂ ✓
- FeO₃ ✗ → Fe₂O₃ ✓
- AlSO₄ ✗ → Al₂(SO₄)₃ ✓
- Ca₂O₂ ✗ → CaO ✓
```

---

## 23. STATUS LEKCJI

- **Wersja 1.1** (2026-09-27).
- **Nowa numeracja:** F06.
- **Następna lekcja:** F07 Wiązania chemiczne.

---

**Koniec F06 MASTER v1.1**

---


---

<!-- ŹRÓDŁO: kanon CHE.core.md, WARSTWA MASTER v5.0 dla F06 (w. 9764–10373) -->

# F06 — WARSTWA MASTER v5.0

## F06 — WZORY CHEMICZNE

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

<!-- źródłowy fragment: ## STANDARD ZAPISU CHEMICZNEGO (pakiet v2.0); dopasowanie: F06:3, F05:3, F03:2, F02:2 -->

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

<!-- źródłowy fragment: ## A5. Mnemotechniki (rdzeń kursu); dopasowanie: F06:3, X08:2, N04:2, J09:2 -->

#### Ćwiczenia (basic + train)

Wzory i nazwy · charakter · dokończ +H₂O · popraw FeO₃ / Ca₂O₂.

<!-- źródłowy fragment: ### Ćwiczenia (basic + train); dopasowanie: F06:1 -->

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

<!-- źródłowy fragment: ## L001 — Powtórka fundamentów z klasy 7 (start klasy 8); dopasowanie: F06:3, F05:3, F03:3, REV00:2 -->

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

<!-- źródłowy fragment: ## 0. MAPA LEKCJI + ORIENTACJA; dopasowanie: F06:3, F04:3, F03:3, F07:2 -->

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

<!-- źródłowy fragment: ## 1. CEL LEKCJI; dopasowanie: F06:4, F03:3, F02:3, LAB12:2 -->

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

<!-- źródłowy fragment: ### Krzyżowanie wartościowości — algorytm W–K–S–K; dopasowanie: F06:2, F05:2, F03:2, N04:1 -->

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
| NaCl | 23 + 35,5 | 58,5 u (masa jednostki wzoru) |
| Ca(OH)₂ | 40 + 2·(16+1) | 74 u (masa jednostki wzoru) |
| H₂SO₄ | 2·1 + 32 + 4·16 | 98 u (masa cząsteczkowa) |

<!-- źródłowy fragment: ### 5.5. Wzory sumaryczne + grupy atomów + wzory strukturalne; dopasowanie: F06:3, F07:2, F03:2, F02:2 -->

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

<!-- źródłowy fragment: ### 5.7. Równania reakcji – podstawy; dopasowanie: F06:3, LAB12:2, J09:2, F09:2 -->

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

<!-- źródłowy fragment: ### Ćwiczenia KLINIKI BŁĘDÓW; dopasowanie: F06:2, F05:2, O07:1, LAB20:1 -->

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

<!-- źródłowy fragment: ### Diagnostyka fundamentów (5 minut) — zrób przed resztą; dopasowanie: F06:2, REV00:1, J09:1, J03:1 -->

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

<!-- źródłowy fragment: ### Mapa myśli: WZÓR SUMARYCZNY; dopasowanie: F06:2, F05:1, F03:1 -->

#### Nawias = pudełko na grupę OH

```
CaOH₂   →  Ca–O–H–H      ← indeks przyklejony do H (źle)
Ca(OH)₂ →  Ca–(O–H)(O–H) ← indeks obejmuje całą grupę OH
```

<!-- źródłowy fragment: ### Nawias = pudełko na grupę OH; dopasowanie: F06:2, F03:1 -->

---

## AUDYT W1 — Perplexity, 2026-10-09 (poprawki i uzupełnienia do wprowadzenia przy budowie lekcji)

> Źródło: `chemia/plany/audyty/W1_perplexity_F07-F14₂026-10-09.md`. Weryfikacja treści wysłanego zapisu, nie zakresu.

> Uwaga przy scalaniu: W kluczu zad. 4 zamiast „dwutlenek węgla” używać nazwy systematycznej „tlenek węgla(IV)”.

### Poprawki

- Indeks dolny opisuje liczbę atomów danego pierwiastka w jednej cząsteczce lub najmniejszej jednostce wzoru.
- Współczynnik przed wzorem zmienia liczbę cząsteczek, jednostek wzoru lub moli.
- Nie wolno zmieniać indeksów podczas bilansowania równania reakcji.
- Nawias stosuje się wtedy, gdy grupa atomów występuje więcej niż raz.
- Wzór CaOH₂ jest błędny; poprawny zapis to Ca(OH)₂.
- Wzór AlSO₄ jest błędny dla siarczanu glinu; poprawny zapis to Al₂(SO₄)₃.
- Wzór Na₂O oznacza dwa atomy sodu przypadające na jeden atom tlenu w jednostce wzoru.
- Wzór 2NaOH oznacza dwie jednostki wzoru wodorotlenku sodu, a nie nową substancję.
- W związku jonowym indeksy wynikają z obojętności elektrycznej całej jednostki wzoru.
- Wzór sumaryczny nie pokazuje zawsze sposobu połączenia atomów.

### Uzupełnienia

#### Metoda krzyżowa

Dla jonów Al³⁺ i O²⁻:

1. zapisujemy ładunki;
2. dobieramy najmniejszą wspólną wielokrotność 6;
3. potrzebne są 2 jony Al³⁺ i 3 jony O²⁻;
4. otrzymujemy Al₂O₃.

Dla jonów Ca²⁺ i OH⁻:

 Ca(OH)₂

#### Redukcja indeksów

Jeśli stosunek jonów wynosi 2:2, należy go skrócić do 1:1.

Błędny zapis:

 Ca₂O₂

Poprawny zapis:

 CaO

#### Zadania

1. Zapisz wzór tlenku glinu.
2. Zapisz wzór wodorotlenku magnezu.
3. Zapisz wzór siarczanu glinu.
4. Wyjaśnij różnicę między 3CO₂ a CO₂.
5. Popraw: BaOH₂, NaSO₄, FeNO₃.

#### Klucz

1. Al₂O₃.
2. Mg(OH)₂.
3. Al₂(SO₄)₃.
4. 3CO₂ oznacza trzy cząsteczki lub trzy mole dwutlenku węgla; CO₂ oznacza jedną cząsteczkę lub jednostkę ilościową.
5. Ba(OH)₂, Na₂SO₄, Fe(NO₃)₃ dla żelaza na stopniu utlenienia +III.
