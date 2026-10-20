---
kod: C1c
uid: CHE.01.C1c.masy_sklad_procentowy
tytul: Masy cząsteczkowe i skład procentowy związku
opis: masy atomowe do zapamiętania · masa cząsteczkowa ze wzoru · udział procentowy pierwiastków · wzór najprostszy i rzeczywisty z danych procentowych · bez mola
kicker: C1c · OLIMPIADA · ETAP REJONOWY
lead: Z wzoru związku policzysz, ile masy przypada na każdy pierwiastek. Działanie jest też odwrotne: z procentowego składu odtworzysz wzór. Obie drogi prowadzą przez proporcje mas, bez pojęcia mola.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:OLIMPIADA REJONOWA]]
stopka: **CHEMIA C1c · Masy cząsteczkowe i skład procentowy · wersja robocza po audycie W1 (2026-10-18)**
---

::: minimum | Muszę umieć na etap rejonowy — 10 punktów
1. Znać masy atomowe: H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27, S 32, Cl 35,5, K 39, Ca 40, Fe 56, Cu 64, Zn 65, Ag 108.
2. Obliczyć masę cząsteczkową jako sumę mas atomów z uwzględnieniem indeksów.
3. Obliczyć procentowy udział pierwiastka w związku: (n · A) / M · 100%.
4. Sprawdzić, że suma udziałów wszystkich pierwiastków wynosi 100%.
5. Wyznaczyć wzór najprostszy z danych procentowych: przyjąć 100 g, podzielić masy przez masy atomowe, sprowadzić do najmniejszych liczb całkowitych.
6. Odróżnić wzór najprostszy (CH₂O) od wzoru rzeczywistego (C₆H₁₂O₆ — glukoza).
7. Wyznaczyć wzór rzeczywisty: n = M(związku) / M(wzoru najprostszego).
8. Obliczyć skład procentowy dla H₂O, CO₂, NaCl, H₂SO₄ i Fe₂O₃.
9. Rozróżnić zadanie „ze wzoru do procentów” od zadania „z procentów do wzoru”.
10. Unikać typowych błędów: pominięcia indeksu, dzielenia przez złą masę, pominięcia sprawdzenia sumy.
:::

---

## Cel lekcji

W tej lekcji nauczysz się obliczać **masę cząsteczkową** związku ze wzoru i **udział procentowy** pierwiastków w związku. Zrobisz też zadanie odwrotne: z danych procentowych wyznaczysz **wzór najprostszy** i **wzór rzeczywisty**. Wszystkie obliczenia wykonujemy metodą proporcji mas, bez pojęcia mola.

---

## Wyjaśnienie krok po kroku

### 1. Masy atomowe do zapamiętania

Wartości zaokrąglone zgodnie z tablicą etapu szkolnego (Cl: 35,5). Są zgodne z zaokrągleniem standardowych mas atomowych CIAAW (2024), np. Cl 35,446–35,457 → 35,5, Fe 55,845 → 56.

| Pierwiastek | Symbol | Masa atomowa (u) |
|---|---|---|
| wodór | H | 1 |
| węgiel | C | 12 |
| azot | N | 14 |
| tlen | O | 16 |
| sód | Na | 23 |
| magnez | Mg | 24 |
| glin | Al | 27 |
| siarka | S | 32 |
| chlor | Cl | 35,5 |
| potas | K | 39 |
| wapń | Ca | 40 |
| żelazo | Fe | 56 |
| miedź | Cu | 64 |
| cynk | Zn | 65 |
| srebro | Ag | 108 |

Chlor ma masę 35,5, bo w przyrodzie występuje jako mieszanina izotopów o masach 35 i 37.

@model f05-izotopy-v01 | Skąd się bierze masa atomowa: średnia ważona izotopów | Silnik CHE · otwiera się w oknie
@opis Konstruktor atomu (protony, neutrony, elektrony) z dolnym panelem, w którym masa atomowa jest obliczana jako średnia ważona mas izotopów wybranego pierwiastka. Wniosek: ułamkowa masa atomowa z układu okresowego wynika z mieszaniny izotopów, a nie z jednego rodzaju atomów.

### 2. Masa cząsteczkowa

**Masa cząsteczkowa** M to suma mas atomowych wszystkich atomów w cząsteczce, z uwzględnieniem indeksów:

$$M = \sum n_i \cdot A_i$$

**Przykłady:**
- H₂O: M = 2 · 1 + 1 · 16 = **18 u**
- CO₂: M = 1 · 12 + 2 · 16 = **44 u**
- NaCl: M = 1 · 23 + 1 · 35,5 = **58,5 u**
- H₂SO₄: M = 2 · 1 + 1 · 32 + 4 · 16 = **98 u**
- Fe₂O₃: M = 2 · 56 + 3 · 16 = **160 u**
- CaCO₃: M = 40 + 12 + 3 · 16 = **100 u**
- Al₂O₃: M = 2 · 27 + 3 · 16 = **102 u**

Nawias mnoży wszystko w środku. W Al₂(SO₄)₃ masa grupy SO₄ to 32 + 4 · 16 = 96, a cały związek ma M = 2 · 27 + 3 · 96 = **342 u**.

::: ciekawostka
Jednostka u (unit, dawniej „jednostka masy atomowej”) to 1/12 masy atomu węgla-12. Standard węgla-12 przyjęto w 1961 r. Na etapie rejonowym wystarczy operować samą liczbą z jednostką u.
:::

### 3. Udział procentowy pierwiastka

**Udział procentowy** pierwiastka X w związku to stosunek masy tego pierwiastka w cząsteczce do masy całej cząsteczki:

$$\%X = \frac{n \cdot A_X}{M} \cdot 100\%$$

gdzie n to liczba atomów X w cząsteczce, A_X — masa atomowa X, M — masa cząsteczkowa związku.

Uwaga: w mianowniku jest masa **związku**, nie masa samego pierwiastka.

**Przykład 1: H₂O** (M = 18)
- %H = (2 · 1) / 18 · 100% ≈ **11,1%**
- %O = (1 · 16) / 18 · 100% ≈ **88,9%**
- Sprawdzenie: 11,1 + 88,9 = 100% ✓

**Przykład 2: CO₂** (M = 44)
- %C = 12 / 44 · 100% ≈ **27,3%**
- %O = 32 / 44 · 100% ≈ **72,7%**

**Przykład 3: NaCl** (M = 58,5)
- %Na = 23 / 58,5 · 100% ≈ **39,3%**
- %Cl = 35,5 / 58,5 · 100% ≈ **60,7%**

**Przykład 4: H₂SO₄** (M = 98)
- %H = 2 / 98 · 100% ≈ **2,04%**
- %S = 32 / 98 · 100% ≈ **32,65%**
- %O = 64 / 98 · 100% ≈ **65,31%**
- Sprawdzenie: 2,04 + 32,65 + 65,31 = 100% ✓

**Przykład 5: Fe₂O₃** (M = 160)
- %Fe = 112 / 160 · 100% = **70%**
- %O = 48 / 160 · 100% = **30%**

::: mnemonik
**Atom nie równa się procentowi.** H₂O ma 2 atomy wodoru i 1 tlenu, ale wodoru jest tylko 11,1% masy, bo tlen jest 16 razy cięższy. Zawsze liczysz masę, nie liczbę atomów.
:::

@klocek sklad-procentowy {wzor="H2SO4"} | Kalkulator składu procentowego: wpisz wzór albo wybierz przykład
@opis Pole na wzór związku (np. H2SO4, Fe2O3, Ca(OH)2) i przyciski z przykładami: model podaje masę cząsteczkową jako sumę n · A, kolorowy pasek z udziałami pierwiastków oraz dla każdego pierwiastka obliczenie n · A / M · 100% z wynikiem; suma procentów to 100%. Masy atomowe zaokrąglone jak w tabeli lekcji (Cl = 35,5).

### 4. Wzór najprostszy z danych procentowych

**Wzór najprostszy** (empiryczny) to najmniejszy całkowity stosunek liczby atomów w związku. Np. dla glukozy C₆H₁₂O₆ stosunek 6 : 12 : 6 upraszcza się do 1 : 2 : 1, czyli wzór najprostszy to CH₂O.

**Algorytm PODZIEL:**
1. **Przyjmij 100 g** związku. Wtedy procenty są równe gramom.
2. **Oblicz „liczbę atomów”:** m / A dla każdego pierwiastka.
3. **Dziel** wszystkie wyniki przez najmniejszy z nich.
4. **Zapisz** wzór z całkowitymi współczynnikami. Jeśli wychodzi ułamek typu 1,5, pomnóż wszystko przez 2.
5. **Idź dalej:** sprawdź sumę, zsumuj procenty.

#### Przykład 1: związek o składzie 40% Ca, 12% C, 48% O

W 100 g: Ca — 40 g, C — 12 g, O — 48 g.
- n(Ca) = 40 / 40 = 1
- n(C) = 12 / 12 = 1
- n(O) = 48 / 16 = 3

Stosunek 1 : 1 : 3. Wzór najprostszy: **CaCO₃**.

Sprawdzenie: M(CaCO₃) = 40 + 12 + 48 = 100, a 40 + 12 + 48 = 100%. ✓

#### Przykład 2: związek o składzie 11,1% H, 88,9% O

W 100 g: H — 11,1 g, O — 88,9 g.
- n(H) = 11,1 / 1 = 11,1
- n(O) = 88,9 / 16 ≈ 5,56

Dzielimy przez 5,56: H ≈ 2, O = 1. Wzór najprostszy: **H₂O**.

#### Przykład 3: związek o składzie 52,9% Al, 47,1% O

W 100 g: Al — 52,9 g, O — 47,1 g.
- n(Al) = 52,9 / 27 ≈ 1,96
- n(O) = 47,1 / 16 ≈ 2,94

Dzielimy przez 1,96: Al = 1, O ≈ 1,5. Mnożymy przez 2, żeby uniknąć ułamka: Al = 2, O = 3. Wzór najprostszy: **Al₂O₃**.

### 5. Wzór rzeczywisty

Wzór najprostszy nie zawsze jest wzorem rzeczywistym. Aby go wyznaczyć, potrzebujemy masy cząsteczkowej związku:

$$n = \frac{M_{\text{związku}}}{M_{\text{wzoru najprostszego}}}$$

Wzór rzeczywisty to wzór najprostszy pomnożony przez n.

**Przykład:** wzór najprostszy CH₂O (M = 30), masa cząsteczkowa związku 180.
n = 180 / 30 = 6, więc wzór rzeczywisty to **C₆H₁₂O₆** (glukoza).

### 6. Schemat obliczeń dla H₂O

**Opis schematu:** diagram składa się z trzech części.
1. Po lewej wzór H₂O z indeksem 2 przy H. Pod spodem masy atomowe: H = 1, O = 16.
2. W środku obliczenie M = 2 · 1 + 1 · 16 = 18 i dwa wiersze udziałów: %H = 2 · 1 / 18 · 100% ≈ 11,1% oraz %O = 16 / 18 · 100% ≈ 88,9%.
3. Po prawej wykres kołowy: wycinek H (11,1%) i wycinek O (88,9%).

**Wniosek dla ucznia:** mimo że w cząsteczce przypadają 2 atomy wodoru na 1 atom tlenu, masowo to tlen stanowi prawie 90% wody.

---

## Ciekawostki i mnemotechniki

::: ciekawostka
**Glukoza i fruktoza** mają ten sam wzór sumaryczny C₆H₁₂O₆. To izomery: różnią się budową przestrzenną. Sam wzór sumaryczny czy najprostszy nie wystarczy, żeby odróżnić te związki.
:::

::: mnemonik
**Algorytm PODZIEL na wzór najprostszy:** **P**rzyjmij 100 g, **O**blicz m / A, **D**ziel przez najmniejszy, **Z**apisz liczby całkowite, **I**dź dalej — zsumuj procenty, **E**wentualnie policz n, **L**icz wzór rzeczywisty.
:::

---

## Ćwiczenia z kluczem i punktacją

### Ćwiczenie 1 (4 pkt) — masa cząsteczkowa
Oblicz masę cząsteczkową Al₂(SO₄)₃.

**Rozwiązanie:** M = 2 · 27 + 3 · (32 + 4 · 16) = 54 + 3 · 96 = 54 + 288 = **342 u** (1 pkt za każdy poprawny krok).

### Ćwiczenie 2 (5 pkt) — skład procentowy H₂SO₄
Oblicz skład procentowy kwasu siarkowego(VI).

**Rozwiązanie:**
- M = 98 u (1 pkt),
- %H = 2 / 98 · 100% ≈ 2,04% (1 pkt),
- %S = 32 / 98 · 100% ≈ 32,65% (1 pkt),
- %O = 64 / 98 · 100% ≈ 65,31% (1 pkt),
- sprawdzenie sumy: 100% (1 pkt).

### Ćwiczenie 3 (6 pkt) — wzór najprostszy z procentów
Związek ma 40% Ca, 12% C, 48% O. Wyznacz wzór najprostszy.

**Rozwiązanie:**
- w 100 g: 40 g Ca, 12 g C, 48 g O (1 pkt),
- n(Ca) = 1, n(C) = 1, n(O) = 3 (2 pkt),
- stosunek 1 : 1 : 3 jest już całkowity (1 pkt),
- wzór najprostszy: **CaCO₃** (1 pkt),
- sprawdzenie: M = 100, suma procentów = 100% (1 pkt).

### Ćwiczenie 4 (5 pkt) — wzór najprostszy z ułamkiem
Związek ma 11,1% H i 88,9% O. Wyznacz wzór najprostszy.

**Rozwiązanie:**
- w 100 g: 11,1 g H, 88,9 g O (1 pkt),
- n(H) = 11,1, n(O) ≈ 5,56 (1 pkt),
- dzielimy przez 5,56: H ≈ 2, O = 1 (2 pkt),
- wzór najprostszy: **H₂O** (1 pkt).

### Ćwiczenie 5 (5 pkt) — wzór rzeczywisty
Wzór najprostszy związku to CH₂O (M = 30). Masa cząsteczkowa związku wynosi 180. Podaj wzór rzeczywisty.

**Rozwiązanie:**
- n = 180 / 30 = 6 (2 pkt),
- wzór rzeczywisty: C₆H₁₂O₆ (2 pkt),
- to glukoza (1 pkt).

### Ćwiczenie 6 (4 pkt) — skład procentowy Fe₂O₃
Oblicz skład procentowy tlenku żelaza(III).

**Rozwiązanie:** M = 160 u (1 pkt), %Fe = 112 / 160 · 100% = 70% (1,5 pkt), %O = 48 / 160 · 100% = 30% (1,5 pkt).

### Ćwiczenie 7 (5 pkt) — zadanie ze wzoru do procentów
Oblicz skład procentowy chlorku sodu i wyjaśnij, dlaczego udział chloru jest wysoki, mimo że w cząsteczce jest jeden atom Cl.

**Rozwiązanie:**
- M = 58,5 u (1 pkt),
- %Na = 23 / 58,5 · 100% ≈ 39,3% (1,5 pkt),
- %Cl = 35,5 / 58,5 · 100% ≈ 60,7% (1,5 pkt).
- Wyjaśnienie: udział procentowy zależy od liczby atomów pomnożonej przez ich masę, nie tylko od liczby atomów. Chlor jest ciężki, więc jego udział jest duży (1 pkt).

### Ćwiczenie 8 (5 pkt) — wzór najprostszy z danych z ułamkiem
Związek ma 52,9% Al i 47,1% O. Wyznacz wzór najprostszy.

**Rozwiązanie:**
- w 100 g: 52,9 g Al, 47,1 g O (1 pkt),
- n(Al) ≈ 1,96, n(O) ≈ 2,94 (1 pkt),
- dzielimy przez 1,96: Al = 1, O ≈ 1,5 (1 pkt),
- mnożymy przez 2: Al = 2, O = 3 (1 pkt),
- wzór najprostszy: **Al₂O₃** (1 pkt).

---

## Pułapki i typowe błędy

**Pułapka 1. Pominięty indeks.** Zapis H₂O = 1 + 16 = 17 jest błędny. Poprawnie: 2 · 1 + 16 = 18.

**Pułapka 2. Nawias traktowany niepoprawnie.** W Al₂(SO₄)₃ trzy grupy SO₄ mnożą cały zestaw S i 4 atomy O: 3 · (32 + 4 · 16).

**Pułapka 3. Dzielenie przez masę pierwiastka zamiast masy związku.** W wzorze %X = n · A_X / M w mianowniku jest M związku.

**Pułapka 4. Suma procentów różna od 100%.** Jeśli suma nie wynosi 100%, popełniono błąd w M lub w rachunku. Zawsze sprawdzaj.

**Pułapka 5. Zbyt wczesne zaokrąglanie.** Pośrednie wyniki zachowuj z dokładnością do 3 cyfr znaczących, a w wyniku końcowym podawaj 1–2 miejsca po przecinku.

**Pułapka 6. Liczba atomów zamiast masy.** %H w H₂O to nie 2/3 ≈ 67%, tylko 11,1%.

**Pułapka 7. Ułamki w stosunku.** Po podziale wyniki bywają ułamkowe (np. 1 : 1,5). Wtedy mnożymy przez 2 i dostajemy 2 : 3.

**Pułapka 8. Wzór najprostszy bez sprawdzenia masy.** Wzór najprostszy CH₂O nie jest wzorem glukozy. Trzeba jeszcze wyznaczyć n i pomnożyć.

**Pułapka 9. Zaokrąglona masa chloru.** Dla Cl używamy 35,5, a nie 35. Inaczej wyniki nie zgodzą się z kluczem.

**Pułapka 10. Brak sprawdzenia.** Po wyznaczeniu wzoru policz jego masę i porównaj z danymi.

---

## Mini-test (8 pytań)

**1. Masa cząsteczkowa H₂O wynosi:** a) 16; b) 17; c) 18; d) 20.
Odpowiedź: **c) 18**.

**2. Procentowy udział tlenu w H₂O wynosi:** a) 50%; b) 67%; c) 88,9%; d) 11,1%.
Odpowiedź: **c) 88,9%**.

**3. Masa cząsteczkowa H₂SO₄ wynosi:** a) 96; b) 98; c) 100; d) 102.
Odpowiedź: **b) 98**.

**4. Związek ma 40% Ca, 12% C, 48% O. Wzór najprostszy to:** a) CaCO; b) CaCO₂; c) CaCO₃; d) Ca₂CO₃.
Odpowiedź: **c) CaCO₃** (stosunek 1 : 1 : 3).

**5. Wzór najprostszy CH₂O, masa cząsteczkowa związku 180. Wzór rzeczywisty to:** a) CH₂O; b) C₂H₄O₂; c) C₃H₆O₃; d) C₆H₁₂O₆.
Odpowiedź: **d) C₆H₁₂O₆** (n = 6).

**6. Masa atomowa chloru na etapie rejonowym:** a) 35; b) 35,5; c) 36; d) 36,5.
Odpowiedź: **b) 35,5**.

**7. W NaCl procentowy udział Cl wynosi:** a) 39,3%; b) 50%; c) 60,7%; d) 70%.
Odpowiedź: **c) 60,7%**.

**8. Al₂O₃ ma procentowy udział Al:** a) 47,1%; b) 52,9%; c) 60%; d) 70%.
Odpowiedź: **b) 52,9%** (54 / 102 · 100%).

---

## Podsumowanie

Przed zawodami sprawdź, czy umiesz:

- [ ] podać masy atomowe z listy 1,
- [ ] obliczyć masę cząsteczkową z uwzględnieniem indeksów i nawiasów,
- [ ] obliczyć udział procentowy i sprawdzić sumę 100%,
- [ ] wyznaczyć wzór najprostszy metodą PODZIEL, także z ułamkiem,
- [ ] wyznaczyć wzór rzeczywisty z masy cząsteczkowej.

---

## Do potwierdzenia przed publikacją

1. Czy lista 16 mas atomowych ma być podawana w arkuszu, czy uczeń ma ją znać na pamięć? Lekcja zakłada znajomość.
2. Czy wartość Cl = 35,5 jest zgodna z tablicą etapu rejonowego (alternatywnie 35,45)?
3. Czy metoda wzoru najprostszego bez pojęcia mola jest wymagana w tej formie? Lekcja używa proporcji mas.
4. Czy zadania z hydratami (np. CuSO₄ · 5 H₂O) mają wejść do zakresu? Lekcja ich nie obejmuje.
5. Czy zadania z związkami organicznymi (np. etanol C₂H₆O) mają być w zakresie? Lekcja używa głównie związków nieorganicznych i glukozy.
