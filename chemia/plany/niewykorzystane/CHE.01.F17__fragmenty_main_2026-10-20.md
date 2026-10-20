# Fragmenty wersji main (stary układ), nieobecne w wersji sprint

tytul: "Równania reakcji"
poziom: E8+LO
wymaga: "F12; F16"
poglebia: "F19; R07; X01–X09"
zrodla: "MASTER v17.0; MASTER v15.0; stary kanon F00–F09 (v4.1/v5.0); stary podział CHE.01.F09.rownania_reakcji.md"
opis: "Materiał roboczy lekcji (nie gotowa lekcja). Spis i zakres: chemia/plany/CHE_SPIS_TRESCI.md"


### E.5. Most do L013 (Zaawansowana)

Redoks, bilans elektronowy, ogniwa, elektroliza.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Równanie reakcji | Zapis reakcji chemicznej. |
| Substrat | Substancja reagująca. |
| Produkt | Substancja powstająca. |
| Prawo zachowania masy | Masa substratów = masa produktów. |
| Synteza | A + B → AB. |
| Analiza | AB → A + B. |
| Wypieranie | A + BC → AC + B. |
| Podwójna wymiana | AB + CD → AD + CB. |
| Spalanie | Substancja + O₂ → tlenki. |

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
RÓWNANIE REAKCJI
substraty → produkty

PRAWO ZACHOWANIA MASY
Liczba atomów po obu stronach taka sama

BILANSOWANIE
Współczynniki tak, indeksy nie!

TYPY REAKCJI
Synteza: A + B → AB
Analiza: AB → A + B
Wypieranie: A + BC → AC + B
Podwójna wymiana: AB + CD → AD + CB
Spalanie: substancja + O₂ → tlenki

ENERGETYKA
Egzotermiczna: wydziela ciepło
Endotermiczna: pochłania ciepło

ZAPIS WARUNKÓW
Δ — ogrzewanie
kat. — katalizator
hν — światło

STANY SKUPIENIA
(s) ciało stałe
(l) ciecz
(g) gaz
(aq) roztwór wodny
↓ osad
↑ gaz

PRZYKŁADY
2H₂ + O₂ → 2H₂O
4Fe + 3O₂ → 2Fe₂O₃
CH₄ + 2O₂ → CO₂ + 2H₂O
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
CaCO₃ →(Δ) CaO + CO₂

PUŁAPKI:
- nie zmieniaj indeksów
- H₂ + O₂ → H₂O₂ ✗
- każda reakcja z O₂ to nie zawsze spalanie
```

---

## 23. STATUS LEKCJI

- **Wersja 1.1** (2026-09-27).
- **Nowa numeracja:** F09.
- **Następna lekcja:** N01 Tlenki.

---

**Koniec F09 MASTER v1.1**

---


---


---

<!-- ŹRÓDŁO: kanon CHE.core.md, WARSTWA MASTER v5.0 dla F09 (w. 10604–10706) -->

# F09 — WARSTWA MASTER v5.0

## F09 — RÓWNANIA REAKCJI

### A. Główna ścieżka

```text
substraty
→ produkty
→ poprawne wzory
→ zapis słowny / symboliczny
→ współczynniki
→ bilans atomów
→ stany skupienia / warunki
→ interpretacja jakościowa
→ interpretacja ilościowa
```

### B. Konstruktor równania

Uczeń powinien móc:

1. wybrać substraty,
2. wybrać produkty,
3. otrzymać niebilansowane równanie,
4. ustawiać współczynniki,
5. obserwować liczniki atomów po obu stronach,
6. dostać komunikat o pierwszym błędzie,
7. zatwierdzić bilans.

### C. Zasada krytyczna

**Nie wolno zmieniać indeksów we wzorach podczas bilansowania.**

Dozwolone:

```text
2H₂ + O₂ → 2H₂O
```

Niedozwolone:

```text
H₂ + O₂ → H₂O₂
```

### D. Bilans jako zachowanie liczby atomów

HTML powinien pokazywać równolegle:

| Pierwiastek | Lewa strona | Prawa strona |
|---|---:|---:|
| H | 4 | 4 |
| O | 2 | 2 |

Dopiero wtedy równanie otrzymuje status:

```text
BILANS ZGODNY
```

### E. Typy reakcji

```text
synteza
analiza / rozkład
wypieranie
podwójna wymiana
spalanie
```

Typ reakcji nie może być wybierany wyłącznie na podstawie obecności jednego pierwiastka. Uczeń powinien analizować schemat przemiany.

### F. Stany i warunki

```text
(s) — ciało stałe
(l) — ciecz
(g) — gaz
(aq) — roztwór wodny
↓ — osad
↑ — gaz

Δ — ogrzewanie
kat. — katalizator
hν — światło
```

### G. Most do dalszego kursu

```text
F09
 ↓
R05 mol
 ↓
R06 stechiometria
 ↓
R07 reagent ograniczający
 ↓
R08 wydajność
```

---


## z: stary podział CHE.01.F09.rownania_reakcji.md

<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 7113–7894 -->
# F09 — RÓWNANIA REAKCJI (Fundamenty)

## AUDYT W1 — Perplexity, 2026-10-09 (poprawki i uzupełnienia do wprowadzenia przy budowie lekcji)

> Źródło: `chemia/plany/audyty/W1_perplexity_F15-F21₂026-10-09.md`. Weryfikacja treści wysłanego zapisu, nie zakresu.

### Poprawki

- Równanie reakcji musi spełniać zasadę zachowania atomów.
- W reakcjach jonowych należy dodatkowo zachować całkowity ładunek.
- Współczynniki stechiometryczne zmieniają ilość substancji, a indeksy zmieniają jej skład.
- Nie wolno bilansować równania przez zmianę indeksów.
- Najpierw ustal poprawne wzory substratów i produktów, dopiero potem dobieraj współczynniki.
- Współczynnik 1 pomija się w zapisie.
- Stan skupienia należy zapisywać tylko wtedy, gdy jest potrzebny lub wymagany:

 (s), (l), (g), (aq)

- Strzałka ↑ może oznaczać wydzielanie gazu, a ↓ powstawanie osadu, ale nie należy używać ich bez uzasadnienia.
- Katalizator i warunki reakcji zapisuje się nad strzałką.
- Równanie reakcji nie jest równoważne opisowi mechanizmu reakcji.

### Uzupełnienia

#### Procedura bilansowania

1. Zapisz wzory substratów i produktów.
2. Policz atomy każdego pierwiastka po obu stronach.
3. Zacznij od pierwiastka występującego w najmniejszej liczbie związków.
4. Wodór i tlen zostaw często na koniec, jeśli pojawiają się w kilku związkach.
5. Zmieniaj wyłącznie współczynniki.
6. Skróć współczynniki do najmniejszych liczb całkowitych.
7. Sprawdź wszystkie atomy.
8. Dla równań jonowych sprawdź także ładunek.

#### Przykłady

 Al + O₂ → Al₂O₃

 4Al + 3O₂ → 2Al₂O₃

 Fe + O₂ → Fe₂O₃

 4Fe + 3O₂ → 2Fe₂O₃

 C₃H₈ + O₂ → CO₂ + H₂O

 C₃H₈ + 5O₂ → 3CO₂ + 4H₂O

#### Równanie jonowe skrócone

Dla reakcji:

 AgNO₃ + NaCl → AgCl↓ + NaNO₃

Równanie pełne jonowe:

 Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻

Równanie jonowe skrócone:

 Ag⁺ + Cl⁻ → AgCl↓

#### Zadania

Zbilansuj:

1. H₂ + O₂ → H₂O 2. Mg + HCl → MgCl₂ + H₂
3. NaOH + H₂SO₄ → Na₂SO₄ + H₂O
4. Fe(OH)₃ → Fe₂O₃ + H₂O
5. Al + HCl → AlCl₃ + H₂

#### Klucz

1.
2H₂ + O₂ → 2H₂O
 2.
Mg + 2HCl → MgCl₂ + H₂
 3.
2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O
 4.
2Fe(OH)₃ → Fe₂O₃ + 3H₂O
 5.
2Al + 6HCl → 2AlCl₃ + 3H₂

> Kolejna partia audytu W1 — źródło: `chemia/plany/audyty/W1_perplexity_C3-C3_2026-10-18.md`.

### C3 — Równania reakcji i obliczenia z równań (część masowa, bez mola)

> Uwaga przy scalaniu: Usunąć samokorekty ('czekaj', 'policzmy osobno') w sprawdzeniu masy. Poprawny rachunek: 12 g Mg + 8 g O₂ = 20 g MgO (48 g Mg + 32 g O₂ → 80 g MgO). Przykłady z REV01 (Fe+S → 8,8 g FeS; CaCO₃ → 5,6 g CaO + 4,4 g CO₂) sprawdzone rachunkowo: zgodne. Rozwiązania nie mogą używać słowa mol (zasada ZADANIA 2); proporcje z mas.

Etap:** szkolny → rejonowy (punkt F17 kanonu + część stechiometrii masowej).
**Zakres:** prawo zachowania masy, dobieranie współczynników, obliczenia masowe proporcją, wstęp do nadmiaru substratu.

---

#### Cel lekcji

W tej lekcji nauczysz się **zapisywać równania reakcji z dobrze dobranymi współczynnikami** oraz **liczyć masy substratów i produktów** bez używania pojęcia „mol". W olimpiadzie chemicznej na poziomie szkolnym i rejonowym często wystarczy **proporcja „z X gramów → Y gramów"** — i to właśnie będziemy ćwiczyć. Po lekcji będziesz umiał rozwiązać takie zadanie: „Ile gramów tlenku magnezu powstanie z 12 g magnezu?" — dwoma sposobami.

#### Minimum (10 pkt — musisz umieć na etap szkolny i rejonowy)

1. Sformułować **prawo zachowania masy** i pokazać, jak działa na wadze.
2. Wyjaśnić, dlaczego w równaniu **muszą być współczynniki**.
3. Dobrać współczynniki metodą **kolejnych kroków** (z próbą błędną, potem poprawną).
4. Zapisać pełne równanie z poprawnymi współczynnikami dla: spalania magnezu, syntezy siarczku żelaza, rozkładu węglanu wapnia.
5. Obliczyć masę produktu z masy substratu, używając **proporcji** (bez mola).
6. Pokazać ten sam przykład dwoma sposobami: przez proporcję i przez „współczynnik mnożnikowy".
7. Sprawdzić, że suma mas substratów = suma mas produktów.
8. Rozpoznać, że w reakcji **Fe + S → FeS** z 5,6 g Fe i 3,2 g S powstaje **8,8 g FeS** (przykład z REV01).
9. Rozpoznać, że rozkład 10 g CaCO₃ daje **5,6 g CaO + 4,4 g CO₂** (przykład z REV01).
10. Wiedzieć, że obliczenia z nadmiarem substratu wymagają porównania proporcji (pełna wersja w ZADANIU 6).

---

#### Wyjaśnienie krok po kroku

##### 1. Prawo zachowania masy — co to znaczy i jak to sprawdzamy

**Prawo zachowania masy** mówi: w każdej reakcji chemicznej **całkowita masa substancji przed reakcją równa się całkowitej masie substancji po reakcji**. Masa nie znika, nie powstaje z niczego — atomy tylko się **przegrupowują**.

Formalnie: **masa substratów = masa produktów**.

**Doświadczenie z wagą (Lomonosow / Lavoisier — do weryfikacji autorstwa):**

1. Na wadzie umieszczamy szczelnie zamkniętą probówkę z kwasem solnym i kawałkiem magnezu (metal w małym koszyczku nad kwasem, żeby nie dotykał).
2. Notujemy masę całego układu: $m₁$.
3. Przechylamy probówkę, żeby metal wpadł do kwasu — zaczyna się reakcja (wydziela się wodór, ale nie uchodzi, bo probówka jest zamknięta).
4. Po zakończeniu reakcji again ważymy układ: $m₂ = m₁$.

Masa jest **taka sama** — ponieważ atomy magnezu, wodoru i chloru są wciąż w probówce, tylko połączone inaczej. Jeśli probówka byłaby otwarta, wodór uciekłby — masa zmalałaby o masę uchodzącego gazu.

::: ciekawostka
Prawo zachowania masy sformułował niezależnie **Michaił Łomonosow** (1756) i **Antoine Lavoisier** (1789). Lavoisier użył precyzyjnej wagi, żeby pokazać, że cyna po kalcynacji (spalaniu w powietrzu) waży więcej — ale masa powietrza w naczyniu zmalała o dokładnie tę samą wartość. Dlatego nazywany jest „ojcem nowoczesnej chemii". (Łomonosow zrobił podobne doświadczenie wcześniej, ale jego praca nie była szeroko znana w Europie — do weryfikacji ze źródłami historycznymi.)
:::

**Wniosek dla równań:** W równaniu chemicznym liczba atomów każdego pierwiastka **musi być taka sama po obu stronach**. Dlatego musimy dobrać współczynniki.

##### 2. Dlaczego potrzebujemy współczynników?

Weźmy prosty przykład — spalanie magnezu. Jeśli napiszemy:

Mg + O₂ → MgO policzmy atomy:
- lewa strona: 1 atom Mg + 2 atomy O = razem 1 Mg, 2 O
- prawa strona: 1 atom Mg + 1 atom O = razem 1 Mg, 1 O

**Brakuje jednego atomu tlenu po prawej!** Łamiemy prawo zachowania masy. Dlatego musimy dodać współczynnik 2 przed MgO:Mg + O₂ → 2 MgO Teraz prawa strona: 2 Mg + 2 O — ale lewa ma 1 Mg. Dodajemy 2 przed Mg:2 Mg + O₂ → 2 MgO Sprawdzenie: lewa 2 Mg + 2 O, prawa 2 Mg + 2 O. **Zbilansowane.**

##### 3. Dobieranie współczynników — metoda kolejnych kroków

**Algorytm:**
1. Policz atomy każdego pierwiastka po obu stronach.
2. Znajdź pierwiastek najbardziej „nierówny" i dobierz współczynnik przed związkiem, w którym go jest najwięcej.
3. Policz ponownie i popraw kolejne nierówności.
4. Powtarzaj, aż wszystkie pierwiastki się zbalansują.

**Przykład: rozkład CaCO₃**

Zapiszmy po prostu nazwy: węglan wapnia rozkłada się na tlenek wapnia + ditlenek węgla.

Równanie szkieletowe:CaCO₃ → CaO + CO₂ Policzmy:
- Ca: lewa 1, prawa 1 ✓
- C: lewa 1, prawa 1 ✓
- O: lewa 3, prawa 1 + 2 = 3 ✓

Już jest zbilansowane! Czasem równanie wychodzi od razu. To znak, że dobieranie współczynników nie zawsze jest trudne.

**Przykład trudniejszy: synteza siarczku żelaza**

Żelazo reaguje z siarką, tworząc FeS:Fe + S → FeS Policzmy:
- Fe: 1 = 1 ✓
- S: 1 = 1 ✓

Również gotowe. To dlatego, że reakcja syntezy binarnej jest prosta — atomy łączą się 1:1.

**Przykład z błędną pierwszą próbą: spalanie aluminium**

Spróbujmy zapisać spalanie aluminium:Al + O₂ → Al₂O₃ **Pierwsza próba (błędna):** uczeń stawia współczynnik 2 przed Al:2 Al + O₂ → Al₂O₃ - Al: lewa 2, prawa 2 ✓
- O: lewa 2, prawa 3 ✗

Nadal nierównowaga tlenu. Uczeń dodaje 2 przed tlenem:2 Al + 2 O₂ → Al₂O₃ - O: lewa 4, prawa 3 ✗ — jeszcze gorzej.

**Druga próba (poprawna):** myślimy o **najmniejszej wspólnej wielokrotności** (NWW) dla tlenu. Lewa ma O w grupach po 2 (z O₂), prawa ma 3 atomy O w Al₂O₃. NWW(2,3) = 6. Więc stawiamy 3 przed O₂ i 2 przed Al₂O₃:?  Al + 3 O₂ → 2 Al₂O₃ - O: lewa 6, prawa 6 ✓
- Al: prawa 4, lewa musimy dobrać 4:4 Al + 3 O₂ → 2 Al₂O₃ Sprawdzenie: Al lewa 4, prawa 4 ✓; O lewa 6, prawa 6 ✓. **Zbilansowane.**

::: mnemonik
**NWW tlenu** — gdy tlen występuje jako O₂ (związek pierwiastkowy) i jest w produkcie w nieparzystej liczbie, używamy **najmniejszej wspólnej wielokrotności** liczby atomów O po obu stronach. Dla 2 i 3 → 6 (czyli 3 × O₂ i 2 × produkt z 3 atomami O).
:::

##### 4. Obliczenia masowe BEZ MOLA — proporcja „z X g → Y g"

**Kluczowa idea:** w zbilansowanym równaniu **stosunek masowy substratów do produktów jest stały**. Jeśli wiemy, że 48 g Mg daje 80 g MgO, to 12 g Mg da **tyle razy mniej, ile razy 12 jest mniejsze od 48** — czyli 4 razy mniej: 20 g.

Dlaczego to działa? Bo każda reakcja zachodzi w **ustalonych proporcjach masowych**, wynikających z mas cząsteczkowych (M). Jeśli M(Mg) = 24, M(O) = 16, to 1 atom Mg łączy się z 1 atomem O dając MgO (M = 40). Masowo: 24 + 16 = 40 — więc 24 g Mg + 16 g O = 40 g MgO, czyli **stosunek m(Mg) : m(O) : m(MgO) = 24 : 16 : 40 = 3 : 2 : 5**.

Skoro proporcja jest stała, możemy z każdej części obliczyć każdą inną. To jest **proporcja „z X g → Y g"**.

###### Przykład 1 (z REV01). Spalanie magnezu

**Zadanie:** Ile gramów tlenku magnezu powstanie ze spalenia 12 g magnezu?

**Krok 1: równanie zbilansowane**2 Mg + O₂ → 2 MgO **Krok 2: masy molowe (potrzebne do proporcji, ale bez liczenia moli!)**
- M(Mg) = 24 g/mol (do weryfikacji z dokładnością szkolną — często 24,3)
- M(O) = 16 g/mol
- M(MgO) = 24 + 16 = 40 g/mol

**Krok 3: odczytujemy proporcję z równania**
Z równania: 2 mol Mg → 2 mol MgO, czyli **masowo**: 2 × 24 = 48 g Mg → 2 × 40 = 80 g MgO.

Czyli: **48 g Mg daje 80 g MgO**. To nasza proporcja odniesienia.

**Krok 4: stawiamy proporcję**

Jeśli 48 g Mg → 80 g MgO, to 12 g Mg → x g MgO.48 / 12 = 80 / x x = (80 · 12) / 48 = 960 / 48 = 20 g **Odpowiedź:** Powstanie 20 g MgO.

**Sprawdzenie prawa zachowania masy:** z 12 g Mg musi też reagować 8 g O₂ (bo 80 - 20 = 60... czekaj, policzmy osobno). Z proporcji: 48 g Mg potrzebuje 32 g O₂ (bo 2 O₂ = 64... czekaj, 1 O₂ = 32 g, więc 32 g O₂ na 48 g Mg). Skoro mamy 12 g Mg (4 razy mniej), to O₂ potrzeba 32/4 = 8 g. Razem: 12 + 8 = 20 g MgO. **Zgodne z prawem zachowania masy.**

::: ciekawostka
To samo zadanie można rozwiązać **drugim sposobem** — przez „współczynnik mnożnikowy": 12 g Mg to 4 razy mniej niż 48 g, więc produktu będzie też 4 razy mniej niż 80 g: 80/4 = 20 g. Sposób jest równoważny z proporcją, ale szybszy w głowie — dobry do szybkiego sprawdzania.
:::

###### Przykład 2 (z REV01). Synteza siarczku żelaza

**Zadanie:** Zmieszano 5,6 g żelaza z 3,2 g siarki i podgrzano. Ile gramów FeS powstanie?

**Krok 1: równanie**Fe + S → FeS **Krok 2: masy molowe**
- M(Fe) = 56 g/mol
- M(S) = 32 g/mol
- M(FeS) = 56 + 32 = 88 g/mol

**Krok 3: proporcja odniesienia z równania**
56 g Fe + 32 g S → 88 g FeS

**Krok 4: sprawdzamy, czy podane masy pasują do proporcji**

Podane: 5,6 g Fe i 3,2 g S. Porównajmy z proporcją 56 : 32 (po podzieleniu przez 16 dostajemy 3,5 : 2).

Stosunek 5,6 : 3,2 = 56 : 32 (bo 5,6 = 56 × 0,1; 3,2 = 32 × 0,1). **Idealnie pasuje** — oba substraty są w idealnej proporcji stechiometrycznej (żaden nie jest w nadmiarze).

**Krok 5: obliczamy masę produktu**

Skoro 56 g Fe daje 88 g FeS, to 5,6 g Fe da:x = (88 · 5,6) / 56 = 88 / 10 = 8,8 g Albo współczynnikowo: 5,6 to 10 razy mniej niż 56, więc 88/10 = 8,8 g.

**Sprawdzenie prawa zachowania masy:** 5,6 g + 3,2 g = 8,8 g FeS. **Zgodne.**

**Odpowiedź:** Powstanie 8,8 g FeS.

###### Przykład 3 (z REV01). Rozkład węglanu wapnia

**Zadanie:** Ile gramów CaO i ile gramów CO₂ powstanie z rozkładu 10 g CaCO₃?

**Krok 1: równanie**CaCO₃ → CaO + CO₂ **Krok 2: masy molowe**
- M(CaCO₃) = 40 + 12 + 48 = 100 g/mol
- M(CaO) = 40 + 16 = 56 g/mol
- M(CO₂) = 12 + 32 = 44 g/mol

**Krok 3: proporcja odniesienia z równania**
100 g CaCO₃ → 56 g CaO + 44 g CO₂

Sprawdźmy: 56 + 44 = 100 ✓ (prawo zachowania masy).

**Krok 4: obliczamy dla 10 g CaCO₃**

Współczynnik: 10 to 10 razy mniej niż 100, więc wszystkie masy podziel przez 10:

- m(CaO) = 56 / 10 = **5,6 g**
- m(CO₂) = 44 / 10 = **4,4 g**

Sprawdzenie: 5,6 + 4,4 = 10 g ✓

**Odpowiedź:** Powstanie 5,6 g CaO i 4,4 g CO₂.

::: mnemonik
**Współczynnik mnożnikowy** = „ile razy podana masa jest mniejsza (lub większa) od masy odniesienia z równania". Ten sam współczynnik stosujemy do wszystkich substratów i produktów. Jeśli substrat jest 5 razy mniejszy — produkt też będzie 5 razy mniejszy.
:::

##### 5. Ten sam przykład dwoma sposobami

Weźmy zadanie: **Z 24 g Mg ile powstanie MgO?**

**Sposób 1: proporcja klasyczna**

48 g Mg → 80 g MgO
24 g Mg → x48 / 24 = 80 / x  \Rightarrow  x = (80 · 24) / 48 = 40 g **Sposób 2: współczynnik mnożnikowy**

24 g to dokładnie połowa od 48 g, więc i produktu będzie połowa: 80/2 = 40 g.

**Wniosek:** oba sposoby dają ten sam wynik. Proporcja jest bardziej uniwersalna (działa zawsze), współczynnik mnożnikowy jest szybszy, gdy podana masa jest prostym ułamkiem masy odniesienia (1/2, 1/4, 1/10).

##### 6. Wstęp do obliczeń z nadmiarem substratu

Czasem podane są **masy obu substratów** i trzeba sprawdzić, czy są w idealnej proporcji. Jeśli nie — jeden substrat jest w **nadmiarze**, drugi **przereaguje w całości**. Pełną wersję tych obliczeń robimy w ZADANIU 6 (ze stechiometrią molową), ale na poziomie proporcji masowych możemy już sprawdzić:

**Przykład:** Mamy 6 g Mg i 4 g O₂. Czy oba substraty przereagują w całości?

**Sprawdzenie:** z równania 2 Mg + O₂ → 2 MgO wiemy, że proporcja masowa Mg : O₂ wynosi 48 : 32 = 3 : 2 (po podzieleniu przez 16).

Mamy 6 g Mg i 4 g O₂. Stosunek 6 : 4 = 3 : 2 — **idealna proporcja**, oba substraty przereagują w całości.

Gdybyśmy mieli 6 g Mg i **5 g** O₂, to proporcja 6 : 5 nie pasuje do 3 : 2 (bo 6/5 = 1,2, ale 3/2 = 1,5). Tu mamy **nadmiar O₂** — bo na 6 g Mg potrzeba 4 g O₂ (6 × 2/3), a mamy 5 g, czyli o 1 g za dużo. **O₂ zostanie w nadmiarze 1 g**, a Mg przereaguje w całości.

To wstęp — pełne obliczenia nadmiaru w ZADANIU 6.

---

#### Ciekawostki i mnemotechniki

::: ciekawostka
W dawnej chemii (przed Lavoisierem) uważano, że masa może „znikać" — bo spalanie drewna daje mało popiołu. Dopiero po zamknięciu reakcji w szczelnej probówce i zważeniu okazało się, że **masa uchodzi z gazami** (CO₂, H₂O w postaci pary). To był przełom, który zrodził nowoczesną chemię ilościową.
:::

::: ciekawostka
Masy molowe w układzie SI są podawane z precyzją do 4 miejsc po przecinku (np. Mg = 24,3050 g/mol). W szkole wystarcza zazwyczaj **M(Mg) = 24** lub **24,3** — różnica na poziomie 0,3% nie wpływa na wynik szkolny. Na olimpiadzie warto używać dokładniej: **M(Mg) = 24,3, M(O) = 16, M(Fe) = 56, M(S) = 32** — są to wartości standardowe. (Dokładne masy uczeń sprawdza w układzie okresowym.)
:::

::: mnemonik
**3-2-1 NWW** dla dobierania współczynników:
- **3** — policz atomy po obu stronach.
- **2** — znajdź najbardziej nierówny pierwiastek.
- **1** — użyj NWW, żeby zbalansować ten pierwiastek.

To jest **algorytm kolejnych kroków** opisany wyżej.
:::

::: mnemonik
**Proporcja „z X g → Y g":** „z 48 g → 80 g" to Twoja tabela odniesienia. Podziel przez 48, pomnóż przez 80 — zawsze działa. $x = (m(substrat) · M(produkt)) / (M(substrat))$.
:::

---

#### Ćwiczenia z kluczem i punktacją

##### Ćwiczenie 1 (4 pkt) — dobieranie współczynników

Dobierz współczynniki do równania: $Al + O₂ → Al₂O₃$.

**Rozwiązanie:**

**Krok 1.** Policz atomy po obu stronach:
- Al: lewa 1, prawa 2
- O: lewa 2, prawa 3

(1 pkt)

**Krok 2.** Najmniejsza wspólna wielokrotność dla tlenu: NWW(2, 3) = 6. Stawiamy 3 przed O₂ i 2 przed Al₂O₃:Al + 3 O₂ → 2 Al₂O₃ (1 pkt)

**Krok 3.** Policz Al: prawa 4, więc stawiamy 4 przed Al:4 Al + 3 O₂ → 2 Al₂O₃ (1 pkt)

**Krok 4.** Sprawdzenie: Al lewa 4, prawa 4 ✓; O lewa 6, prawa 6 ✓. (1 pkt)

##### Ćwiczenie 2 (5 pkt) — spalanie magnezu (przykład z REV01)

Ile gramów tlenku magnezu powstanie ze spalenia 12 g magnezu? Pokaż pełne rozwiązanie proporcją.

**Rozwiązanie:**

**Krok 1. Równanie zbilansowane:**2 Mg + O₂ → 2 MgO (1 pkt)

**Krok 2. Masy molowe:**
- M(Mg) = 24 g/mol
- M(MgO) = 24 + 16 = 40 g/mol (1 pkt)

**Krok 3. Proporcja odniesienia z równania:**
2 × 24 = 48 g Mg → 2 × 40 = 80 g MgO (1 pkt)

**Krok 4. Stawiamy proporcję dla 12 g:**
48 / 12 = 80 / x x = (80 · 12) / 48 = 20 g (2 pkt)

**Odpowiedź:** Powstanie 20 g MgO.

##### Ćwiczenie 3 (5 pkt) — synteza siarczku żelaza (przykład z REV01)

Zmieszano 5,6 g Fe z 3,2 g S. Ile gramów FeS powstanie? Sprawdź, czy substraty są w idealnej proporcji.

**Rozwiązanie:**

**Krok 1. Równanie:**Fe + S → FeS (1 pkt)

**Krok 2. Masy molowe:**
- M(Fe) = 56 g/mol
- M(S) = 32 g/mol
- M(FeS) = 88 g/mol (1 pkt)

**Krok 3. Sprawdzenie proporcji substratów:**
Proporcja odniesienia: 56 : 32 = 7 : 4 (po podzieleniu przez 8).
Podane: 5,6 : 3,2 = 56 : 32 (pomnożone przez 0,1).
**Idealna proporcja** — żaden substrat nie jest w nadmiarze. (1,5 pkt)

**Krok 4. Obliczenie masy produktu:**
x = (88 · 5,6) / 56 = 88 / 10 = 8,8 g (1,5 pkt)

**Odpowiedź:** Powstanie 8,8 g FeS.

##### Ćwiczenie 4 (6 pkt) — rozkład węglanu wapnia (przykład z REV01)

Ile gramów CaO i ile gramów CO₂ powstanie z rozkładu 10 g CaCO₃? Sprawdź prawo zachowania masy.

**Rozwiązanie:**

**Krok 1. Równanie:**
CaCO₃ → CaO + CO₂ (1 pkt)

**Krok 2. Masy molowe:**
- M(CaCO₃) = 40 + 12 + 3 × 16 = 100 g/mol
- M(CaO) = 40 + 16 = 56 g/mol
- M(CO₂) = 12 + 32 = 44 g/mol (2 pkt)

**Krok 3. Proporcja odniesienia:**
100 g CaCO₃ → 56 g CaO + 44 g CO₂ (1 pkt)

**Krok 4. Obliczenie dla 10 g (współczynnik 10× mniejszy):**
- m(CaO) = 56 / 10 = **5,6 g**
- m(CO₂) = 44 / 10 = **4,4 g** (1 pkt)

**Krok 5. Sprawdzenie:**
5,6 g + 4,4 g = 10,0 g = masa CaCO₃ ✓ (prawo zachowania masy potwierdzone). (1 pkt)

**Odpowiedź:** Powstanie 5,6 g CaO i 4,4 g CO₂.

##### Ćwiczenie 5 (5 pkt) — sprawdzenie nadmiaru (wstęp)

Mamy 6 g Mg i 4 g O₂. Czy oba substraty przereagują w całości?

**Rozwiązanie:**

**Krok 1. Równanie:**
2 Mg + O₂ → 2 MgO (1 pkt)

**Krok 2. Proporcja odniesienia:**
48 g Mg : 32 g O₂ = 3 : 2 (po podzieleniu przez 16). (1 pkt)

**Krok 3. Porównanie z podanymi:**
6 g : 4 g = 3 : 2 (po podzieleniu przez 2). (1,5 pkt)

**Wniosek:** Podane masy są w idealnej proporcji 3 : 2 — **oba substraty przereagują w całości**. Nie ma nadmiaru. (1,5 pkt)

**Odpowiedź:** Tak, oba substraty przereagują w całości; nie ma substratu w nadmiarze.

##### Ćwiczenie 6 (4 pkt) — drugi sposób obliczeń

Pokaż na przykładzie ćwiczenia 2 (12 g Mg → MgO), jak rozwiązać to zadanie współczynnikiem mnożnikowym zamiast proporcji klasycznej.

**Rozwiązanie:**

**Krok 1.** Masa odniesienia: 48 g Mg (z równania 2 × M(Mg) = 48). (1 pkt)

**Krok 2.** Podana masa: 12 g Mg. (0,5 pkt)

**Krok 3.** Współczynnik: 12/48 = 1/4 — czyli podana masa jest **4 razy mniejsza** od masy odniesienia. (1,5 pkt)

**Krok 4.** Produkt też 4 razy mniejszy: 80 g / 4 = 20 g. (1 pkt)

**Odpowiedź:** Powstanie 20 g MgO — ten sam wynik co w ćwiczeniu 2.

##### Ćwiczenie 7 (4 pkt) — samodzielne zadanie

Ile gramów wody powstanie z reakcji 2 g wodoru z 16 g tlenu?

**Rozwiązanie:**

**Krok 1. Równanie:**
2 H₂ + O₂ → 2 H₂O (1 pkt)

**Krok 2. Masy molowe:**
- M(H₂) = 2 g/mol; 2 × 2 = 4 g H₂
- M(O₂) = 32 g/mol
- M(H₂O) = 18 g/mol; 2 × 18 = 36 g H₂O (1 pkt)

**Krok 3. Proporcja odniesienia:** 4 g H₂ + 32 g O₂ → 36 g H₂O. Sprawdźmy podane: 2 g H₂ i 16 g O₂ — obie połowę od referencji. **Idealna proporcja.** (1 pkt)

**Krok 4.** m(H₂O) = 36 / 2 = 18 g. (1 pkt)

**Odpowiedź:** Powstanie 18 g wody.

---

#### Pułapki i typowe błędy

##### Pułapka 1. Brak współczynników
Najczęstszy błąd. Uczeń pisze `Mg + O₂ → MgO` i liczy proporcję tak, jakby była równa 24:40. Powinien policzyć 48:80 — współczynniki zmieniają proporcję masową. **Zawsze najpierw zbilansuj równanie**, a dopiero potem licz.

##### Pułapka 2. Pomylenie M substratu z M produktu
Uczeń dzieli przez M(substrat) zamiast przez M(produkt) albo odwrotnie. **Pamiętaj:** w proporcji „substrat/produkt = substrat_podany/produkt_szukany" — masa substratu zawsze po tej samej stronie co masa substratu.

##### Pułapka 3. Zapominanie o prawie zachowania masy
Jeśli wynik nie spełnia m(substraty) = m(produkty), to znaczy, że gdzieś pomyliłeś M albo współczynniki. **Zawsze** sprawdź sumę mas po obu stronach.

##### Pułapka 4. Używanie mola, gdy zadanie jest bez mola
Na etapie szkolnym często można rozwiązać zadanie **proporcją**, bez liczenia liczby moli. Nie wprowadzaj mola, jeśli nie jest potrzebny — to dodatkowy krok, w którym można popełnić błąd.

##### Pułapka 5. Brak sprawdzenia nadmiaru
Gdy podane są **obie masy substratów**, sprawdź najpierw, czy są w idealnej proporcji. Jeśli nie, jeden substrat jest w nadmiarze — a wtedy masa produktu liczy się od substratu, który przereaguje w całości, nie od tego, który zostaje.

##### Pułapka 6. Masy molowe z błędem
M(Mg) = 24 (a nie 24,5 albo 26). M(O) = 16 (a nie 8 albo 18). M(Fe) = 56. M(S) = 32. M(C) = 12. M(Ca) = 40. To są wartości, które uczeń musi pamiętać — warto powtórzyć przed egzaminem.

##### Pułapka 7. Niedokładne czytanie treści
„Ile gramów powstanie?" — to masa produktu. „Ile gramów przereaguje?" — to masa substratu, który weźmie udział w reakcji. Te pytania **różnią się**!

##### Pułapka 8. Obliczanie ilości gazu bez uwzględnienia, że uchodzi
Jeśli produkt jest gazem (H₂, CO₂), to po reakcji w probówce go nie ma — masa „znika" z probówki (uchodzi do atmosfery). W zadaniach z prawem zachowania masy w zamkniętej probówce masa się zachowuje; w otwartej — masa gazu uchodzi.

##### Pułapka 9. Próba liczenia ułamków, gdy współczynnik mnożnikowy jest prostszy
Jeśli podana masa jest 1/10 albo 1/4 masy odniesienia, nie ma sensu pisać długiej proporcji — podziel przez 10 albo 4 i gotowe.

##### Pułapka 10. Mieszanie dwóch sposobów
Jeśli zacząłeś rozwiązywać proporcją, dokończ proporcją. Jeśli współczynnikiem mnożnikowym — dokończ współczynnikiem. Mieszanie obu sposobów w jednym rozwiązaniu prowadzi do pomyłek.

---

#### Mini-test (8 pytań z odpowiedziami)

**1. Prawo zachowania masy mówi, że:**
- a) Masa substratów > masa produktów
- b) Masa substratów = masa produktów
- c) Masa substratów < masa produktów
- d) Masa może zmalać, ale nie rosnąć

**Odpowiedź:** b) Masa substratów = masa produktów.

---

**2. W równaniu $2 Mg + O₂ → 2 MgO$ stosunek masowy Mg : MgO wynosi:**
- a) 24 : 40
- b) 48 : 80
- c) 2 : 2
- d) 1 : 1

**Odpowiedź:** b) 48 : 80 (bo 2 × M(Mg) = 48; 2 × M(MgO) = 80).

---

**3. Z 12 g Mg powstanie MgO:**
- a) 12 g
- b) 16 g
- c) 20 g
- d) 24 g

**Odpowiedź:** c) 20 g (proporcja 48 : 80 = 12 : x → x = 20).

---

**4. W reakcji Fe + S → FeS z 5,6 g Fe i 3,2 g S powstanie FeS:**
- a) 5,6 g
- b) 8,8 g
- c) 3,2 g
- d) 88 g

**Odpowiedź:** b) 8,8 g (proporcja 56 : 88 = 5,6 : x → x = 8,8; S w idealnej proporcji 32 : 3,2).

---

**5. Z 10 g CaCO₃ po rozkładzie powstanie CaO i CO₂ o masach:**
- a) 5,6 g CaO i 4,4 g CO₂
- b) 10 g CaO i 0 g CO₂
- c) 4,4 g CaO i 5,6 g CO₂
- d) 5 g CaO i 5 g CO₂

**Odpowiedź:** a) 5,6 g CaO i 4,4 g CO₂ (proporcja 100 : 56 : 44 = 10 : 5,6 : 4,4).

---

**6. Dobierz współczynniki do równania $Al + O₂ → Al₂O₃$:**
- a) Al + O₂ → Al₂O₃
- b) 2 Al + O₂ → Al₂O₃
- c) 4 Al + 3 O₂ → 2 Al₂O₃
- d) 3 Al + 2 O₂ → Al₂O₃

**Odpowiedź:** c) 4 Al + 3 O₂ → 2 Al₂O₃ (NWW tlenu = 6).

---

**7. Mamy 6 g Mg i 5 g O₂. Który substrat jest w nadmiarze?**
- a) Mg (zostaje 1 g)
- b) O₂ (zostaje 1 g)
- c) Żaden — idealna proporcja
- d) Nie da się określić

**Odpowiedź:** b) O₂ zostaje w nadmiarze 1 g. Na 6 g Mg potrzeba 4 g O₂ (6 × 2/3), a mamy 5 g — więc 1 g O₂ jest w nadmiarze.

---

**8. Współczynnik mnożnikowy dla 24 g Mg względem masy odniesienia 48 g wynosi:**
- a) 2 (dwukrotnie więcej)
- b) 1/2 (dwukrotnie mniej)
- c) 1/4 (czterokrotnie mniej)
- d) 4 (czterokrotnie więcej)

**Odpowiedź:** b) 1/2 (24/48 = 1/2, czyli podana masa jest dwukrotnie mniejsza).

---

#### Podsumowanie (checklista)

Przed egzaminem sprawdź, czy umiesz:

- [ ] Sformułować prawo zachowania masy i wyjaśnić doświadczenie z wagą.
- [ ] Wyjaśnić, dlaczego w równaniu muszą być współczynniki.
- [ ] Dobrać współczynniki metodą kolejnych kroków (z błędną pierwszą próbą).
- [ ] Zapisać zbilansowane równania: 2 Mg + O₂ → 2 MgO; Fe + S → FeS; CaCO₃ → CaO + CO₂; 4 Al + 3 O₂ → 2 Al₂O₃.
- [ ] Obliczyć masę produktu z masy substratu, używając proporcji (bez mola).
- [ ] Pokazać ten sam przykład dwoma sposobami (proporcja + współczynnik mnożnikowy).
- [ ] Sprawdzić, że m(substratów) = m(produktów).
- [ ] Rozwiązać ćwiczenie 2 (12 g Mg → 20 g MgO).
- [ ] Rozwiązać ćwiczenie 3 (5,6 g Fe + 3,2 g S → 8,8 g FeS).
- [ ] Rozwiązać ćwiczenie 4 (10 g CaCO₃ → 5,6 g CaO + 4,4 g CO₂).
- [ ] Sprawdzić, czy substraty są w idealnej proporcji (ćw. 5).
- [ ] Rozróżnić proporcję od współczynnika mnożnikowego i wiedzieć, kiedy użyć której.
- [ ] Rozpoznać 10 typowych błędów (Pułapki 1–10).

---

#### Pytania do autora

1. **Masy molowe szkolne** — używam M(Mg) = 24, M(Fe) = 56, M(Ca) = 40, M(S) = 32, M(O) = 16, M(C) = 12, M(H) = 1, M(Al) = 27. Czy w materiałach olimpiady obowiązuje dokładność do 0,1 (np. Mg = 24,3)? Proszę potwierdzić konwencję.
2. **Pliki źródłowe** — nadal nie mam dostępu do `chemia/lekcje_md/F/CHE.01.F17*.md` ani `REV01_powtorka_klasy₇.md`. Przykłady z REV01 (12 g Mg, 5,6+3,2 g FeS, 10 g CaCO₃) zachowałem dosłownie — ale czy w oryginalnych plikach jest więcej szczegółów (np. punkty za każdy krok)?
3. **Stechiometria z nadmiarem** — w tej lekcji dałem tylko wstęp; pełna wersja w ZADANIU 6. Czy w etapie szkolnym mogą pojawić się zadania z nadmiarem, czy to dopiero etap rejonowy?
4. **Proporcja czy mol** — na etapie szkolnym OLIMPIADY zalecane jest rozwiązywanie proporcją czy molami? Jeśli molami — powinienem dodać rozdział o molach w tej lekcji?
5. **Format równań** — czy równania w plikach docelowych mają być w LaTeX ($...$), w czystym tekście, czy w innym formacie? W lekcji 1 używam LaTeX, tu też.
6. **Punktacja** — czy punkty (np. „4 pkt", „6 pkt") mają odpowiadać skali olimpiady, czy są umowne? Jeśli skali — proszę podać maksymalną liczbę punktów za zadanie etapu szkolnego.
7. **Ciekawostki historyczne** — czy przypisywanie „do weryfikacji" Łomonosowowi jest poprawne? W polskiej tradycji szkolnej prawo zachowania masy jest przypisywane Łomonosowowi, ale w anglosaskiej — Lavoisierowi. Czy w OLIMPIADZIE obowiązuje konwencja polska?
8. **ZADANIE 3 (audyt REV01)** — czy mam teraz wykonać ZADANIE 3 (audyt dwóch poprawek) po lekcji 2, czy kontynuować lekcje do ZADANIA 4? Według kolejności pliku powinno być 3, ale ZADANIE 3 wymaga REV01 i F03 — do których nie mam dostępu.
9. **Przykład 7 (2 g H₂ + 16 g O₂ → 18 g H₂O)** — dodałem to ćwiczenie samodzielnie; czy jest ono zgodne z kanonem etapu szkolnego, czy mam je zastąpić innym?
10. **Częstość ciekawostek** — czy jest limit ciekawostek na lekcję (np. 2–3), czy mam dodawać je zawsze, gdy temat na to pozwala?
