# Perplexity — lekcja „Mieszanie roztworów i reguła krzyżowa” (materiał wyjściowy R03A), 2026-10-11

Tak, chodzi najprawdopodobniej o regułę krzyżową zwaną też metodą mieszania roztworów dla stężeń procentowych.

Oznaczenia:

· C_{p1} – stężenie procentowe roztworu 1
· C_{p2} – stężenie procentowe roztworu 2
· C_{p3} – stężenie procentowe roztworu po zmieszaniu
· m_1, m_2 – masy roztworów 1 i 2
· m_3 = m_1 + m_2

Podstawowe równanie bilansu substancji rozpuszczonej:

m_1 \cdot C_{p1} + m_2 \cdot C_{p2} = (m_1+m_2)\cdot C_{p3}

Stąd:

C_{p3}=\frac{m_1 C_{p1}+m_2 C_{p2}}{m_1+m_2}

A przekształcenie do stosunku mas, czyli właśnie „na krzyż”:

\frac{m_1}{m_2}=\frac{C_{p2}-C_{p3}}{C_{p3}-C_{p1}}

czyli

m_1 : m_2 = (C_{p2}-C_{p3}) : (C_{p3}-C_{p1})

Często zapisuje się to schematem:

```text
Cp1        Cp3 - Cp2   ->  m1
        Cp3
Cp2        Cp1 - Cp3   ->  m2
```

Przykład:

Mamy roztwór 20% i roztwór 5%. Chcemy otrzymać roztwór 10%.

```text
20%        10 - 5 = 5 części  -> roztwór 20%
        10%
5%         20 - 10 = 10 części -> roztwór 5%
```

Czyli:

m_{20\%} : m_{5\%} = 5 : 10 = 1 : 2

Trzeba więc wziąć 1 część roztworu 20% i 2 części roztworu 5%.

Jeśli np. ma powstać 300 g roztworu 10%, to:

m_{20\%}=100\text{ g}, \quad m_{5\%}=200\text{ g}

Przydatne przypadki:

· woda ma C_p = 0\%
· czysta substancja ma C_p = 100\%
· przy rozcieńczaniu lub odparowaniu wody, jeśli substancja rozpuszczona nie znika:

m_1 C_{p1}=m_2 C_{p2}

To jest właśnie ta „proporcja na krzyż”, którą prawdopodobnie pamiętasz.   - czy zrobisz mi o tym lekcje wykład jak dla rownan

# CHE.01R.06 — Mieszanie roztworów i reguła krzyżowa

## Karta startowa

### Pytanie przewodnie

**Jak obliczyć, ile dwóch roztworów trzeba zmieszać, aby otrzymać roztwór o określonym stężeniu?**

Po tej lekcji umiesz:

- obliczyć stężenie procentowe roztworu;
- obliczyć masę substancji rozpuszczonej;
- rozcieńczyć roztwór wodą;
- zatężyć roztwór przez odparowanie wody;
- mieszać dwa roztwory tej samej substancji;
- stosować regułę krzyżową;
- sprawdzać, czy wynik ma sens.

Stężenie procentowe oznacza liczbę gramów substancji rozpuszczonej w 100 g roztworu. [1][2]

***

## 1. Podstawowe pojęcia

Roztwór składa się z:

- **substancji rozpuszczonej** — na przykład soli lub cukru;
- **rozpuszczalnika** — najczęściej wody;
- **roztworu** — całości po zmieszaniu obu składników.

Obowiązuje zależność:

**masa roztworu = masa substancji rozpuszczonej + masa rozpuszczalnika**

Oznaczenia:

- mₛ — masa substancji rozpuszczonej;
- mᵣ — masa roztworu;
- mᵣₚ — masa rozpuszczalnika;
- Cₚ — stężenie procentowe.

Podstawowy wzór:

**Cₚ = mₛ / mᵣ · 100%**

Z tego wynikają przekształcenia:

**mₛ = Cₚ · mᵣ / 100%**

**mᵣ = mₛ · 100% / Cₚ**

### Przykład

W 200 g roztworu znajduje się 30 g soli.

Cₚ = 30 g / 200 g · 100% = 15%

Roztwór ma stężenie **15%**.

***

## 2. Wykład

Wyobraź sobie roztwór jak dzbanek lemoniady. Cukier jest substancją rozpuszczoną, woda jest rozpuszczalnikiem, a cała lemoniada jest roztworem. Jeśli w 100 g lemoniady znajduje się 10 g cukru, mówimy, że lemoniada ma stężenie 10%.

Najważniejsze jest to, że procent odnosi się do **masy całego roztworu**, a nie tylko do masy wody. Jeśli wsypiesz 20 g soli do 80 g wody, masa roztworu wynosi 100 g, więc stężenie wynosi 20%, a nie 25%.

Przy mieszaniu roztworów trzeba pilnować dwóch rzeczy. Po pierwsze, masy roztworów się dodają. Po drugie, dodają się masy substancji rozpuszczonej. Jeśli zmieszasz 100 g roztworu 20% i 200 g roztworu 5%, to pierwszy roztwór zawiera 20 g substancji, a drugi 10 g. Razem otrzymasz 30 g substancji w 300 g roztworu:

Cₚ = 30 g / 300 g · 100% = 10%.

Reguła krzyżowa jest skróconym sposobem wykonania tego samego bilansu. Jeśli mieszasz roztwór bardziej stężony z mniej stężonym, stężenie końcowe musi leżeć między nimi. Z roztworów 20% i 5% nie otrzymasz roztworu 25% ani 2%.

Dla roztworów 20% i 5%, aby otrzymać 10%, różnice wynoszą:

- 20% − 10% = 10;
- 10% − 5% = 5.

Zatem stosunek mas wynosi:

m₂₀% : m₅% = 5 : 10 = 1 : 2.

Potrzebujesz jednej części roztworu 20% i dwóch części roztworu 5%.

Najczęstsza pułapka polega na pomyleniu „części mocniejszego roztworu” z różnicą po tej samej stronie. Dlatego zawsze warto sprawdzić wynik zwykłym bilansem masy substancji. [1][3]

***

## 3. Reguła krzyżowa

Załóżmy:

- Cₚ₁ — stężenie większe;
- Cₚ₂ — stężenie mniejsze;
- Cₚ₃ — stężenie końcowe.

Musi zachodzić:

**Cₚ₁ > Cₚ₃ > Cₚ₂**

Reguła:

**m₁ : m₂ = (Cₚ₃ − Cₚ₂) : (Cₚ₁ − Cₚ₃)**

Schemat:

```text
Cₚ₁              Cₚ₃ − Cₚ₂  → masa roztworu Cₚ₁
                 Cₚ₃

Cₚ₂              Cₚ₁ − Cₚ₃  → masa roztworu Cₚ₂
```

### Dlaczego działa?

Roztwór mocniejszy „oddaje” nadmiar stężenia, a roztwór słabszy „uzupełnia” brak. Im bliżej stężenia końcowego znajduje się dany roztwór, tym większa jego ilość jest potrzebna.

***

## 4. Przykład podstawowy

Zmieszano roztwór 20% z roztworem 5%. Chcemy otrzymać roztwór 10%.

```text
20%       10 − 5 = 5 części

          10%

5%        20 − 10 = 10 części
```

Stosunek:

**m₂₀% : m₅% = 5 : 10 = 1 : 2**

### Jeśli trzeba otrzymać 300 g roztworu

Suma części:

1 + 2 = 3 części

Jedna część:

300 g / 3 = 100 g

Zatem:

- roztwór 20%: 100 g;
- roztwór 5%: 200 g.

### Kontrola

W 100 g roztworu 20% jest 20 g substancji.

W 200 g roztworu 5% jest 10 g substancji.

Razem:

- substancja: 30 g;
- roztwór: 300 g.

Cₚ = 30 g / 300 g · 100% = 10%.

***

## 5. Pełny bilans zamiast reguły krzyżowej

Reguła krzyżowa jest wygodna, ale zawsze można użyć równania:

**m₁ · Cₚ₁ / 100% + m₂ · Cₚ₂ / 100% = (m₁ + m₂) · Cₚ₃ / 100%**

Procenty można zapisać jako liczby:

**m₁ · Cₚ₁ + m₂ · Cₚ₂ = (m₁ + m₂) · Cₚ₃**

### Przekształcenie

m₁Cₚ₁ + m₂Cₚ₂ = m₁Cₚ₃ + m₂Cₚ₃

m₁(Cₚ₁ − Cₚ₃) = m₂(Cₚ₃ − Cₚ₂)

Stąd:

**m₁ / m₂ = (Cₚ₃ − Cₚ₂) / (Cₚ₁ − Cₚ₃)**

To dokładnie reguła krzyżowa.

***

## 6. Rozcieńczanie wodą

Woda ma stężenie substancji rozpuszczonej równe 0%.

Jeżeli do roztworu dodajesz wodę, masa substancji rozpuszczonej się nie zmienia, ale zwiększa się masa roztworu. Dlatego stężenie maleje.

Jeśli nie ubywa substancji rozpuszczonej:

**m₁ · Cₚ₁ = m₂ · Cₚ₂**

### Przykład

Ile wody trzeba dodać do 200 g roztworu 30%, aby otrzymać roztwór 20%?

Masa substancji przed rozcieńczeniem:

200 g · 30 / 100 = 60 g

Po rozcieńczeniu nadal musi być 60 g substancji.

Masa końcowa roztworu:

m₂ = 60 g · 100 / 20 = 300 g

Masa wody:

300 g − 200 g = 100 g

### Odpowiedź

Trzeba dodać **100 g wody**.

***

## 7. Reguła krzyżowa przy rozcieńczaniu

Mieszamy:

- roztwór 30%;
- wodę 0%;
- chcemy otrzymać 20%.

```text
30%       20 − 0 = 20 części

          20%

0%        30 − 20 = 10 części
```

Stosunek:

**roztwór 30% : woda = 20 : 10 = 2 : 1**

Czyli na 2 części roztworu 30% przypada 1 część wody.

Dla 200 g roztworu:

- 2 części = 200 g;
- 1 część = 100 g wody.

***

## 8. Zatężanie przez odparowanie

Podczas odparowywania wody:

- masa substancji rozpuszczonej pozostaje taka sama;
- masa roztworu maleje;
- stężenie rośnie.

### Przykład

Ile wody trzeba odparować z 500 g roztworu 12%, aby otrzymać roztwór 20%?

Masa substancji:

500 g · 12 / 100 = 60 g

Masa końcowa roztworu:

m₂ = 60 g · 100 / 20 = 300 g

Masa odparowanej wody:

500 g − 300 g = 200 g

### Odpowiedź

Należy odparować **200 g wody**.

***

## 9. Czego nie wolno mieszać

Reguła krzyżowa działa bezpośrednio wtedy, gdy:

- mieszasz roztwory tej samej substancji;
- stężenia dotyczą tej samej substancji;
- podajesz masy roztworów;
- nie zachodzi reakcja chemiczna.

Nie używaj jej bezpośrednio, gdy:

- substancje reagują ze sobą;
- podano objętości, ale nie podano gęstości;
- roztwory zawierają różne substancje i pytanie dotyczy konkretnego składnika;
- stężenia są molowe, a nie procentowe masowe.

***

# Mini-wykłady

## Mini-wykład 1 — Dlaczego stężenie końcowe leży między stężeniami?

Jeśli zmieszasz roztwór 20% z roztworem 5%, każdy gram pierwszego zawiera więcej substancji, a każdy gram drugiego mniej. Mieszanka nie może być mocniejsza niż 20%, bo nie dodano niczego o stężeniu większym niż 20%. Nie może też być słabsza niż 5%, bo nie dodano wody ani roztworu o stężeniu niższym niż 5%. Dlatego stężenie końcowe musi znaleźć się pomiędzy 5% a 20%. To szybki test sensowności odpowiedzi.

## Mini-wykład 2 — Co oznaczają „części”?

Części w regule krzyżowej są częściami masy, niekoniecznie gramami. Stosunek 1 : 2 oznacza dowolne masy zachowujące tę proporcję: 10 g i 20 g, 100 g i 200 g albo 1 kg i 2 kg. Dopiero gdy znamy całkowitą masę roztworu, możemy przeliczyć części na gramy.

## Mini-wykład 3 — Dlaczego masa roztworu jest sumą?

Jeśli wsypiesz sól do wody i nic nie wylejesz ani nie odparuje, całkowita masa się nie zmienia. Sól nie znika — tylko rozprasza się między cząsteczkami wody. Dlatego masa roztworu jest sumą masy soli i masy wody. Ta zasada jest podstawą każdego zadania ze stężeniem procentowym.

***

# Ciekawostki

1. Stężenie 10% nie oznacza, że w 100 g wody znajduje się 10 g substancji. Oznacza, że w 100 g **całego roztworu** znajduje się 10 g substancji. [1][4]

2. Reguła krzyżowa jest skrótem bilansu masy substancji rozpuszczonej, a nie osobnym prawem chemicznym. Wynika bezpośrednio z równania bilansowego. [1]

3. Jeśli zmieszasz roztwór 35% z wodą, aby otrzymać 20%, możesz potraktować wodę jako roztwór o stężeniu 0%. [1]

4. Podczas odparowywania czystej wody stężenie rośnie, ale masa substancji rozpuszczonej pozostaje stała — o ile substancja nie krystalizuje i nie rozkłada się.

5. Gęstość jest potrzebna wtedy, gdy zadanie podaje objętość roztworu, a pyta o jego masę. Wtedy stosujemy **m = d · V**. [5]

***

# Przykłady i zadania

## Zadanie 1 — oblicz stężenie

Rozpuszczono 15 g soli w 185 g wody.

### Rozwiązanie

Masa roztworu:

15 g + 185 g = 200 g

Stężenie:

Cₚ = 15 / 200 · 100% = 7,5%

### Odpowiedź

Otrzymano roztwór 7,5%.

***

## Zadanie 2 — oblicz masę substancji

Ile soli znajduje się w 250 g roztworu 8%?

mₛ = 8 / 100 · 250 g = 20 g

### Odpowiedź

W roztworze znajduje się 20 g soli.

***

## Zadanie 3 — oblicz masę roztworu

Ile gramów roztworu 25% można otrzymać z 50 g substancji?

mᵣ = 50 g · 100 / 25 = 200 g

### Odpowiedź

Można otrzymać 200 g roztworu.

***

## Zadanie 4 — mieszanie dwóch roztworów

Ile gramów roztworu 30% i 10% trzeba zmieszać, aby otrzymać 400 g roztworu 20%?

Reguła krzyżowa:

```text
30%       20 − 10 = 10 części

          20%

10%       30 − 20 = 10 części
```

Stosunek:

30% : 10% = 1 : 1

Zatem:

- 200 g roztworu 30%;
- 200 g roztworu 10%.

***

## Zadanie 5 — trudniejsze mieszanie

Ile gramów roztworu 40% i ile gramów roztworu 5% trzeba zmieszać, aby otrzymać 900 g roztworu 20%?

```text
40%       20 − 5 = 15 części

          20%

5%        40 − 20 = 20 części
```

Stosunek:

40% : 5% = 15 : 20 = 3 : 4

Suma części:

3 + 4 = 7

Jedna część:

900 g / 7 ≈ 128,57 g

Masy:

- roztwór 40%: 3 · 128,57 ≈ 385,71 g;
- roztwór 5%: 4 · 128,57 ≈ 514,29 g.

### Kontrola

Substancja:

385,71 · 40 / 100 ≈ 154,28 g

514,29 · 5 / 100 ≈ 25,71 g

Razem:

180 g substancji w 900 g roztworu.

180 / 900 · 100% = 20%.

***

## Zadanie 6 — rozcieńczanie

Do 150 g roztworu 24% dodano wodę, otrzymując roztwór 12%.

Masa substancji przed rozcieńczeniem:

150 · 24 / 100 = 36 g

Masa końcowa:

36 · 100 / 12 = 300 g

Masa dodanej wody:

300 − 150 = 150 g

### Odpowiedź

Dodano 150 g wody.

***

## Zadanie 7 — zatężanie

Ile wody trzeba odparować z 600 g roztworu 10%, aby otrzymać roztwór 15%?

Masa substancji:

600 · 10 / 100 = 60 g

Masa końcowa:

60 · 100 / 15 = 400 g

Odparowana woda:

600 − 400 = 200 g

### Odpowiedź

Odparować trzeba 200 g wody.

***

## Zadanie 8 — woda jako drugi roztwór

Ile wody trzeba dodać do 80 g roztworu 25%, aby otrzymać roztwór 10%?

Reguła krzyżowa:

```text
25%       10 − 0 = 10 części

          10%

0%        25 − 10 = 15 części
```

Stosunek:

roztwór 25% : woda = 10 : 15 = 2 : 3

80 g odpowiada 2 częściom.

Jedna część:

80 g / 2 = 40 g

Woda:

3 · 40 g = 120 g

### Odpowiedź

Należy dodać 120 g wody.

***

## Zadanie 9 — znajdź błąd

Uczeń obliczył:

Zmieszano 20 g roztworu 30% i 80 g wody.

Cₚ = 30% · 20% + 0% · 80% = 6%

### Co jest źle?

Nie wolno mnożyć stężeń zapisanych jako procenty bez uwzględnienia mas i dzielenia przez całkowitą masę roztworu.

Poprawnie:

Masa substancji:

20 g · 30 / 100 = 6 g

Masa roztworu:

20 g + 80 g = 100 g

Cₚ = 6 / 100 · 100% = 6%

Wynik 6% jest poprawny, ale zapis rozwiązania był niepoprawny i przypadkowo doprowadził do właściwej odpowiedzi.

***

## Zadanie 10 — warstwa ambitna

Do 200 g roztworu 15% dodano 50 g substancji stałej. Oblicz stężenie końcowe, zakładając, że substancja całkowicie się rozpuściła.

Masa substancji początkowo:

200 · 15 / 100 = 30 g

Masa substancji końcowo:

30 g + 50 g = 80 g

Masa roztworu końcowo:

200 g + 50 g = 250 g

Stężenie:

Cₚ = 80 / 250 · 100% = 32%

### Odpowiedź

Stężenie końcowe wynosi 32%.

***

# Pułapki egzaminacyjne

- Procent odnosi się do **masy roztworu**, nie do masy rozpuszczalnika.
- Po dodaniu substancji stałej zwiększa się zarówno masa substancji, jak i masa roztworu.
- Przy dodaniu wody masa substancji pozostaje stała.
- Przy odparowaniu wody masa substancji pozostaje stała.
- Stężenie końcowe musi leżeć między stężeniami składników.
- Reguła krzyżowa daje stosunek mas, a nie od razu konkretne masy.
- Woda ma stężenie 0%, a czysta substancja 100%.
- Jeżeli podano objętość, może być potrzebna gęstość.
- Nie wolno mieszać bezpośrednio stężeń procentowych ze stężeniami molowymi.
- Najpewniejsza kontrola to obliczenie masy substancji rozpuszczonej przed i po zmieszaniu.

***

# Szybka ściąga

```text
Cₚ = mₛ / mᵣ · 100%

mₛ = Cₚ · mᵣ / 100%

mᵣ = mₛ · 100% / Cₚ

mᵣ = mₛ + mrozpuszczalnika

Mieszanie:
m₁Cₚ₁ + m₂Cₚ₂ = (m₁ + m₂)Cₚ₃

Reguła krzyżowa:
m₁ : m₂ = (Cₚ₃ − Cₚ₂) : (Cₚ₁ − Cₚ₃)

Rozcieńczanie:
m₁Cₚ₁ = m₂Cₚ₂

Woda:
Cₚ = 0%

Czysta substancja:
Cₚ = 100%
```

## Algorytm reguły krzyżowej

1. Ustaw większe stężenie u góry, mniejsze na dole.
2. Wpisz stężenie docelowe pośrodku.
3. Odejmij po przekątnej.
4. Otrzymane liczby przypisz do przeciwległych roztworów.
5. Skróć stosunek.
6. Przelicz części na gramy.
7. Sprawdź bilans substancji.

# Karta samooceny

- [ ] Wiem, czym różni się substancja rozpuszczona od roztworu.
- [ ] Umiem obliczyć masę roztworu.
- [ ] Umiem obliczyć stężenie procentowe.
- [ ] Umiem obliczyć masę substancji.
- [ ] Rozumiem, dlaczego woda ma stężenie 0%.
- [ ] Umiem zastosować regułę krzyżową.
- [ ] Umiem rozcieńczyć roztwór.
- [ ] Umiem zatężyć roztwór.
- [ ] Sprawdzam, czy stężenie końcowe leży między stężeniami początkowymi.
- [ ] Potrafię rozwiązać zadanie bez reguły krzyżowej, stosując bilans masy substancji.

**Najważniejsza zasada:** reguła krzyżowa to skrócony bilans substancji rozpuszczonej. Jeśli zapamiętasz ten sens, nie zgubisz się nawet w zadaniu nietypowym.

