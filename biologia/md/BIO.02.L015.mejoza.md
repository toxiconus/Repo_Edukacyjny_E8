---
kod: L015
przedmiot: biologia
tytul: L015 — Jak powstają komórki haploidalne i skąd bierze się różnorodność?
lead: Genetyka · mejoza · 2n → n · rekombinacja chromosomowa · nondysjunkcja · oogeneza vs spermatogeneza
stopka: BIOLOGIA L015 v5.1 · Genetyka · Mejoza · 2n → n · Rekombinacja chromosomowa · Nondysjunkcja · 2026
zrodlo: BIOLOGIA_L015_MEJOZA.html (konwersja html_do_md.py, 2026-10-09)
stan: KONWERSJA Z HTML — sprawdzić odpowiedzi „DO UZUPEŁNIENIA” i grafiki GFX
---
::: karta new | Dopisek v5.2 — precyzja (treść v5.1 zostaje)
**Gdzie mejoza:** w komórkach *linii płciowej* w gonadach. Dojrzałe gamety już jej nie przechodzą.

**Homologi:** te same geny w tych samych loci, mogą mieć różne allele.

**Niezależna segregacja:** losowe ustawienie par w *metafazie I* → różne kombinacje chromosomów dziadków w gamecie.

**Wiek matki:** rośnie ryzyko błędów rozchodzenia; jedna z przyczyn — długie zatrzymanie mejozy komórki jajowej. Mechanizm nie jest prostym „gromadzeniem uszkodzeń”.

**Oogeneza:** mejoza II u człowieka kończy się dopiero po zapłodnieniu.

**Po mejozie I:** n chromosomów, ale każdy nadal z dwiema chromatydami (liczymy centromery). Chromatydy rozchodzą się w mejozie II.

Roślinny cykl spor/gametofitu, pełne tabele nondysjunkcji I/II, oogeneza vs starzenie — **dla chętnych**.

:::

## Spis treści

Słowa kluczowe: mejoza · 2n → n · komórka haploidalna · rekombinacja chromosomowa · niezależna segregacja · nondysjunkcja · oogeneza · spermatogeneza

## 0. Wprowadzenie | [[new:WPROWADZENIE]]

::: karta new | O co tu właściwie chodzi?
Wyobraź sobie, że masz talię kart. **46 kart** — dokładnie tyle, ile chromosomów ma człowiek. Dzielisz tę talię na dwie kupki **po 23 karty**. Potem mama i tata łączą swoje kupki w **nową talię 46 kart**.

To jest właśnie **mejoza** — proces, w którym z komórki z **46 chromosomami** powstają komórki z **23 chromosomami**, a następnie (u zwierząt) z tych komórek powstają **gamety** (plemniki, komórki jajowe).

Ale jest jeden haczyk: **nie dzielisz tych samych kart za każdym razem**. Karty tasują się, mieszają — i za każdym razem wychodzi **inny zestaw**. To dlatego **każde dziecko tej samej pary rodziców jest inne** (z wyjątkiem bliźniąt jednojajowych).

:::

### Dlaczego bez mejozy mielibyśmy problem?

::: karta understand
Gdyby gamety miały 46 chromosomów, a nie 23:

- Pokolenie 1: 46 chromosomów.
- Pokolenie 2: 46 + 46 = **92** chromosomy.
- Pokolenie 3: 92 + 92 = **184** chromosomy.

**Liczba chromosomów podwajałaby się w każdym pokoleniu** — komórki nie byłyby w stanie tego utrzymać.

**Mejoza rozwiązuje problem:** redukuje liczbę chromosomów o połowę przed zapłodnieniem → zygota znowu ma 46.

:::

::: karta basic | Czego się nauczysz na tej lekcji?
1. **Czym jest mejoza** i jak różni się od mitozy.
2. **Jak zachodzi redukcja 2n → n** (i dlaczego to konieczne).
3. **Skąd bierze się różnorodność genetyczna** (rekombinacja chromosomowa, segregacja, losowe zapłodnienie).
4. **Jak policzyć chromosomy i chromatydy** na każdym etapie mejozy.
5. **Co się dzieje, gdy mejoza zawodzi** (nondysjunkcja → aneuploidia).

:::

### Krótka historia

::: karta new | Od obserwacji mikroskopowych do chromosomowej teorii dziedziczenia
**1880s — Walther Flemming, Edouard van Beneden** obserwowali podział komórek. Zauważyli, że w komórkach rozrodczych chromosomy zachowują się inaczej niż w komórkach ciała.

**1887 — August Weismann** zaproponował, że **liczba chromosomów musi się zmniejszyć o połowę** przed zapłodnieniem, żeby nie rosła z pokolenia na pokolenie.

**1900s — Walter Sutton i Theodor Boveri** połączyli obserwacje mejozy z prawami Mendla: **chromosomy to nośniki genów**. To dało podstawę **chromosomalnej teorii dziedziczenia**.

:::

::: karta warning | Kluczowa myśl
Mejoza to **dwa podziały po jednej replikacji**, które redukują liczbę chromosomów o połowę i **mieszają** informację genetyczną.

:::

### Dlaczego to ma znaczenie?

| Dziedzina | Zastosowanie |
|---|---|
| **Genetyka** | zrozumienie, dlaczego rodzeństwo nie jest identyczne |
| **Medycyna** | diagnostyka nondysjunkcji (np. trisomia 21 — zespół Downa) |
| **Rozrodczość** | badanie przyczyn niepłodności (błędy mejozy) |
| **Hodowla** | planowanie krzyżówek w celu uzyskania pożądanych cech |
| **Ewolucja** | źródło zmienności → materiał dla doboru naturalnego |
| **Poradnictwo genetyczne** | ocena ryzyka chorób genetycznych u potomstwa |

::: html
<div class="lk-czesc">1. Pytanie przewodnie</div>
:::

::: karta basic
Jak powstają komórki haploidalne i dlaczego rodzeństwo nie jest identyczne?

:::

## 2. Cele lekcji | [[basic:PODSTAWA E8]]

::: karta basic | Po tej lekcji umiesz:
- **wyjaśnić**, że mejoza redukuje **2n → n** (u człowieka 46 → 23),
- **podać**, że komórka haploidalna ma 23 chromosomy,
- **wymienić 3 źródła zmienności genetycznej**,
- (ambitny) rozróżniać mejozę I (pary chromosomów homologicznych) i II (chromatydy siostrzane) oraz liczyć chromosomy/chromatydy na każdym etapie,
- (zaawansowany) znać nondysjunkcję, aneuploidię i różnicę oogeneza vs spermatogeneza.

:::

::: karta understand | Zasada 80/20 — co daje 80% efektu (i dlaczego)

| 20% = 80% efektu | Dlaczego to jest kluczowe |
|---|---|
| **2n → n (redukcja o połowę)** | Kluczowa cecha mejozy — odróżnia ją od mitozy |
| **Komórka haploidalna = 23 chromosomy** | Liczba, którą trzeba znać na pamięć |
| **3 źródła zmienności** | Odpowiedź na pytanie: dlaczego rodzeństwo się różni |
| **Mejoza I = pary; II = kopie** | Co się rozchodzi — kluczowe dla zrozumienia nondysjunkcji |
| **Jedna replikacja, dwa podziały** | Bez tego nie zrozumiesz, dlaczego 2n → n wymaga dwóch etapów |

**Dlaczego to wystarczy?** Bo 90% zadań E8 o mejozie sprowadza się do: policz chromosomy/chromatydy → rozróżnij mejozę I i II → wskaż źródła zmienności → rozpoznaj nondysjunkcję.

:::

## 3. Kompas | [[basic:PRZYPOMNIENIE]]

::: karta basic | Co trzeba wiedzieć wcześniej
- **L012:** chromosomy homologiczne (para — jeden od matki, jeden od ojca); 46 = 23 pary; chromatydy; centromer.
- **L013:** replikacja DNA (faza S) — po replikacji 1 chromosom = 2 chromatydy.
- **L014:** mitoza — zachowuje liczbę zestawów (2n → 2n); cel: wzrost, regeneracja.

Jeśli nie pamiętasz, co to chromosomy homologiczne — wróć do L012, sekcja 5. To fundament mejozy.

:::

::: html
<div class="lk-czesc">4. Zacznij od problemu</div>
:::

::: karta understand
**Gdyby gamety miały 46 chromosomów, zygota miałaby 92.** Potem następne pokolenie: 184, 368… Liczba chromosomów **podwajałaby się w każdym pokoleniu**.

**Jak organizm utrzymuje stałą liczbę 46 chromosomów w każdym pokoleniu?**

Zapisz hipotezę: ....................................

💡 **Podpowiedź:** Coś musi **zmniejszać** liczbę chromosomów o połowę przed zapłodnieniem. To właśnie robi **mejoza** — redukuje 2n → n. Po lekcji wróć do hipotezy i sprawdź, czy była trafna.

:::

## 5. Ściąga | [[basic:PODSTAWA E8]]

### 5.1. Co to mejoza? (definicja pełna)

::: karta new | Definicja
**Mejoza** to szczególny rodzaj podziału komórkowego, w którym **liczba zestawów chromosomów zmniejsza się o połowę**:

2n → n

Komórka **diploidalna** (2n) ma dwa zestawy chromosomów: jeden odziedziczony po matce, drugi po ojcu. Komórka **haploidalna** (n) ma tylko jeden zestaw.

**U człowieka:**

- Komórki ciała są zwykle diploidalne: **2n = 46**, czyli 23 pary chromosomów.
- Komórki haploidalne mają **n = 23** chromosomy.
- Podczas zapłodnienia łączą się dwie komórki haploidalne: 23 chromosomy od matki i 23 od ojca.
- Powstaje **zygota** o liczbie **2n = 46** chromosomów.

::: karta warning | Ważne — precyzyjne sformułowanie
Mejoza **nie zawsze tworzy bezpośrednio gamety**:

- U **zwierząt** — prowadzi do powstania **gamet** (plemniki, komórki jajowe).
- U **roślin** — jej bezpośrednim produktem są zwykle **spory** (dopiero z nich, w drodze mitozy, powstają gamety — patrz sekcja 20).

:::

**Gdzie zachodzi mejoza u człowieka?**<br>W **komórkach rozrodczych** znajdujących się w **gonadach**: w **jądrach** (spermatogeneza) i **jajnikach** (oogeneza).

:::

### 5.2. Czym różni się od mitozy? (jedna wspólna tabela)

| Cecha | Mitoza (L014) | Mejoza (L015) |
|---|---|---|
| **Cel** | wzrost, regeneracja, naprawa | powstawanie komórek haploidalnych (→ gamety u zwierząt, spory u roślin) |
| **Liczba podziałów** | 1 | **2** |
| **Liczba komórek potomnych** | 2 | 4 |
| **Liczba zestawów chromosomów** | **taka sama** (2n → 2n) | **redukcja** (2n → n) |
| **Rekombinacja chromosomowa** | nie | **tak** (w profazie I) |
| **Zmienność** | zachowuje informację komórki macierzystej (mogą powstać sporadyczne mutacje wskutek błędów kopiowania DNA) | **generuje zmienność** (rekombinacja + segregacja) |
| **Gdzie zachodzi** | prawie wszystkie komórki ciała | gonady / tkanki rozrodcze |

### 5.3. Jedna replikacja, dwa podziały — dlaczego?

::: karta basic
**Kluczowa zasada:**

1. **Przed mejozą** zachodzi **jedna** replikacja DNA (faza S, L013). Po niej: 46 chromosomów = 92 chromatydy.
2. Potem **dwa podziały**:
  - **Mejoza I** — rozdzielają się **całe pary chromosomów homologicznych**.
  - **Mejoza II** — rozdzielają się **chromatydy siostrzane**.

**Najkrócej:** pierwszy podział rozdziela **pary**, drugi — **kopie chromosomów**.

(Pełne uzasadnienie — sekcja 6.3.)

:::

### 5.4. Skąd różnorodność? Trzy źródła

::: karta basic
1. **Rekombinacja chromosomowa** (crossing-over) — wymiana fragmentów chromatyd **niesiostrzanych** między homologami, zachodzi w profazie I mejozy.
2. **Niezależna segregacja chromosomów** — każda para chromosomów homologicznych rozchodzi się do komórek potomnych niezależnie od innych par.
3. **Losowe zapłodnienie** — dowolny plemnik może połączyć się z dowolną komórką jajową.

**Ilościowo (u człowieka, bez rekombinacji):**

- Liczba możliwych zestawów chromosomów w jednej komórce haploidalnej: **2²³ = 8 388 608**.
- Jeśli uwzględnimy oboje rodziców: **8 388 608 × 8 388 608 ≈ 7 × 10¹³** (ok. **70 bilionów**) potencjalnych kombinacji zygoty.

To **bardzo duża liczba**, ale **nie „nieskończona"** — możliwych kombinacji jest skończenie wiele (choć ogromnie dużo).

:::

### 5.5. Liczby u człowieka + zasada liczenia

::: karta understand
**Zasada liczenia:** chromosom liczymy według liczby **centromerów**, a nie liczby chromatyd. Chromosom po replikacji to **nadal jeden chromosom**, choć składa się z dwóch chromatyd siostrzanych.

:::

| Etap | Chromosomy (centromery) | Chromatydy |
|---|---|---|
| Przed replikacją (G1) | 46 | 46 |
| Po replikacji, przed mejozą I | 46 | 92 |
| Po mejozie I (2 komórki) | 23 w każdej | 46 w każdej |
| Po mejozie II (4 komórki) | 23 w każdej | 23 w każdej |

### Kontrastowy przykład: 2n = 8

| Etap | Chromosomy | Chromatydy |
|---|---|---|
| Po replikacji | 8 | 16 |
| Po mejozie I (2 komórki) | 4 w każdej | 8 w każdej |
| Po mejozie II (4 komórki) | 4 w każdej | 4 w każdej |

### 5.6. Mnemotechniki

::: karta understand
- **2n → mejoza → n** — redukcja
- **Mejoza I — pary; II — kopie** — co się rozchodzi
- **Rekombinacja miesza** — zmienność
- **23 + 23 = 46** — komórki haploidalne + zygota
- **Jedna replikacja, dwa podziały** — kluczowa różnica od mitozy

:::

### 5.7. „Cztery komórki haploidalne" — precyzyjnie

::: karta warning
**Mejoza zwykle daje cztery komórki haploidalne.**

- W **spermatogenezie** rozwijają się z nich **cztery plemniki**.
- W **oogenezie** powstaje **jedna funkcjonalna komórka jajowa** i **ciałka kierunkowe** — otrzymują one niewiele cytoplazmy i zwykle zanikają.

To jest **ważne rozróżnienie** — „mejoza daje cztery gamety" to uproszczenie: u kobiety funkcjonalna jest tylko jedna.

:::

::: html
<div class="lk-czesc">6. Wyjaśnienie od podstaw</div>
:::

### 6.1. Łańcuch procesu

::: karta -

::: html
<div class="step-flow"> 2n (komórka diploidalna, 46) ↓ REPLIKACJA (faza S, L013) 46 chromosomów, 92 chromatydy ↓ MEJOZA I (rozdział par chromosomów homologicznych) 2 komórki z 23 chromosomami (każdy z 2 chromatydami) ↓ MEJOZA II (rozdział chromatyd siostrzanych) 4 komórki haploidalne (n = 23) ↓ ZAPŁODNIENIE 2n (zygota, 46)</div>
:::
@opis Schemat z lekcji; elementy: 2n (komórka diploidalna, 46)
    ↓ REPLIKACJA (faza S, L013)
46 chromosomów, 92 chromatydy
    ↓ MEJOZA I (rozdział par chromosomów homologicznych)
2 komórki z 23 chromosomami (każdy z 2 chromatydami)
    ↓ MEJOZA II (rozdział chromatyd siostrzanych)
4 komórki haploidalne (n = 23)
    ↓ ZAPŁODNIENIE
2n (zygota, 46)

:::

### 6.2. Mejoza I — co się dzieje?

::: karta basic
1. **Profaza I:** chromosomy homologiczne łączą się w pary — **synapsa chromosomów homologicznych**. W tym momencie zachodzi **rekombinacja chromosomowa** (crossing-over) — wymiana fragmentów chromatyd niesiostrzanych. Miejsca widocznego skrzyżowania chromatyd nazywamy **chiazmami**.
2. **Metafaza I:** pary homologów ustawiają się w płaszczyźnie równikowej.
3. **Anafaza I:** całe chromosomy (każdy z 2 chromatydami) rozchodzą się do biegunów.
4. **Telofaza I + cytokineza:** powstają 2 komórki haploidalne (n = 23), każda z chromosomami mającymi 2 chromatydy.

**Kluczowe:** W mejozie I rozchodzą się **całe chromosomy** (pary homologów), a nie chromatydy.

:::

### 6.3. Dlaczego są dwa podziały?

::: karta new | Klarowne wyjaśnienie
Przed mejozą DNA zostaje skopiowane, dlatego każdy chromosom składa się z **dwóch chromatyd siostrzanych**.

W **mejozie I** rozdzielają się całe pary chromosomów homologicznych. To właśnie zmniejsza liczbę zestawów chromosomów z **2n do n**.

W **mejozie II** rozdzielają się chromatydy siostrzane. Dzięki temu każda końcowa komórka dostaje po jednej kopii każdego chromosomu.

**Najkrócej:** pierwszy podział rozdziela **pary**, drugi — **kopie chromosomów**.

:::

### 6.4. Mejoza II — co się dzieje?

::: karta basic
1. **Profaza II:** chromosomy (już bez pary) kondensują się.
2. **Metafaza II:** chromosomy ustawiają się pojedynczo w płaszczyźnie równikowej.
3. **Anafaza II:** chromatydy siostrzane rozchodzą się do biegunów.
4. **Telofaza II + cytokineza:** powstają 4 komórki haploidalne (n = 23).

**Kluczowe:** Mejoza II jest **podobna do mitozy** — ale zachodzi w komórce haploidalnej.

:::

### 6.5. 6A. Dlaczego?

::: karta understand
1. **Dlaczego redukcja konieczna?** Bez niej liczba chromosomów podwajałaby się w każdym pokoleniu.
2. **Dlaczego dwa podziały po jednej replikacji?** Mejoza I oddziela pary homologów (redukcja); mejoza II oddziela chromatydy (utrzymanie n).
3. **Dlaczego rekombinacja zwiększa zmienność?** Homologi wymieniają fragmenty chromatyd niesiostrzanych → chromosom potomny ma nowe kombinacje alleli.
4. **Dlaczego „4 gamety" to uproszczenie?** Mejoza daje 4 komórki haploidalne — ale w oogenezie tylko jedna jest funkcjonalna.

:::

### 6.6. 6B. Krok po kroku (człowiek)

::: karta basic
1. **Start:** komórka 2n = 46 → **replikacja** (L013) → 46 chromosomów, 92 chromatydy.
2. **Mejoza I:** pary homologów ustawiają się i rozchodzą → 2 komórki z **23 chromosomami** (każdy z 2 chromatydami).
3. **Mejoza II:** chromatydy siostrzane się rozchodzą → 4 komórki z **23 chromosomami** (23 chromatydy).

:::

### 6.7. 6C. Przykład prowadzony

::: karta basic
**Dane:** Człowiek, 2n = 46.

**Pytanie:** Ile chromosomów i chromatyd w komórce po mejozie I?

**Rozumowanie:**

1. Przed mejozą: 46 chromosomów, 92 chromatydy.
2. Mejoza I: pary homologów się rozchodzą → 2 komórki.
3. Każda komórka ma 23 chromosomy.
4. Każdy chromosom nadal ma 2 chromatydy → 23 × 2 = 46 chromatyd.

**Odpowiedź:** 2 komórki, każda z 23 chromosomami i 46 chromatydami.

**Spróbuj sam:** 2n = 16 → komórka haploidalna n = ? **Odpowiedź:** n = 8.

:::

### 6.8. 6D. Powiązanie z innymi lekcjami

::: karta -

::: html
<div class="step-flow">L012 (chromosom, homologi) → L013 (replikacja) → L014 (mitoza) → L015 (mejoza) → L016 (nowotwory) → L017 (dziedziczenie)</div>
:::
@opis Schemat z lekcji; elementy: L012 (chromosom, homologi) → L013 (replikacja) → L014 (mitoza)
  → L015 (mejoza) → L016 (nowotwory) → L017 (dziedziczenie)

:::

## 7. Dlaczego rodzeństwo się różni? | [[new:KLUCZOWA RAMKA]]

::: karta new | Trzy mechanizmy
Rodzeństwo ma tych samych rodziców, ale zwykle **nie otrzymuje dokładnie tego samego zestawu alleli**. Wynika to z **trzech mechanizmów**:

1. **Rekombinacja chromosomowa** — w profazie I chromosomy homologiczne wymieniają fragmenty DNA (chromatyd niesiostrzanych), tworząc nowe układy alleli na chromosomach.
2. **Niezależna segregacja chromosomów** — każda para chromosomów homologicznych rozchodzi się do komórek potomnych niezależnie od innych par.
3. **Losowe zapłodnienie** — dowolny plemnik może połączyć się z dowolną komórką jajową.

:::

### Ilościowo (bez rekombinacji)

| Liczba par chromosomów | Liczba możliwych zestawów chromosomów w komórce haploidalnej |
|---|---|
| 1 para | 2 |
| 2 pary | 4 |
| 3 pary | 8 |
| 23 pary (człowiek) | **2²³ = 8 388 608** |

::: karta basic
Jeśli połączymy możliwości obu rodziców: 8 388 608 × 8 388 608 ≈ **7 × 10¹³** (ok. **70 bilionów**) potencjalnych kombinacji — **jeszcze przed uwzględnieniem rekombinacji chromosomowej**.

**Wniosek:** każdy człowiek (poza bliźniakami jednojajowymi) jest **genetycznie unikalny**, choć liczba możliwych kombinacji jest **skończona** (bardzo duża, ale nie „nieskończona").

:::

::: karta warning | O bliźniętach jednojajowych
Zwykle mają **niemal identyczny genom jądrowy** (pochodzą z jednej zygoty), lecz z czasem mogą pojawić się między nimi **drobne różnice** wynikające z mutacji somatycznych i zmian epigenetycznych.

:::

## 8. Poziom ambitny | [[extra:MASTER]]

### 8.1. Mejoza I vs II

| Cecha | Mejoza I | Mejoza II |
|---|---|---|
| **Co się rozchodzi?** | **pary homologów** | **chromatydy siostrzane** |
| **Rekombinacja chromosomowa** | **tak** (profaza I) | nie |
| **Redukcja 2n → n** | **tak** | nie (utrzymanie n) |
| **Liczba chromosomów (człowiek)** | 46 → 23 | 23 → 23 |
| **Podobieństwo do mitozy?** | nie (unikalny) | **tak** (jak „mini-mitoza") |

**Pułapka:** „W mejozie rozchodzą się chromatydy" — **nie od razu**. Najpierw pary homologów (I), potem chromatydy (II).

### 8.2. Precyzyjne rozróżnienie: komórki haploidalne ≠ gamety

::: karta extra
**Mejoza daje 4 komórki haploidalne.** To, ile z nich staje się **funkcjonalnymi gametami**, zależy od organizmu i płci:

| Organizm | Produkt mejozy | Ile funkcjonalnych? |
|---|---|---|
| Mężczyzna (spermatogeneza) | 4 komórki haploidalne | **4 plemniki** |
| Kobieta (oogeneza) | 4 komórki haploidalne | **1 komórka jajowa** + 3 ciałka kierunkowe |
| Roślina | 4 spory | (spory → gametofit → mitoza → gamety) |

:::

### 8.3. Porównanie mitoza ↔ mejoza — uzupełnienie

::: karta understand
Mitoza **co do zasady** zachowuje informację genetyczną komórki macierzystej. **Sporadyczne mutacje** mogą jednak powstać wskutek błędów kopiowania DNA — dlatego komórki potomne mitozy **nie zawsze** są w 100% identyczne.

:::

## 9. Poziom zaawansowany | [[extra:ZAAWANSOWANY]]

### 9.1. Nondysjunkcja — tabela zadań

::: karta extra
**Nondysjunkcja** = błąd rozchodzenia chromosomów w mejozie. Pary homologów (lub chromatydy siostrzane) **nie rozchodzą się prawidłowo** — trafiają do tej samej komórki potomnej.

| Błąd | Co nie rozchodzi się prawidłowo? | Produkty mejozy |
|---|---|---|
| **Nondysjunkcja w mejozie I** | pary chromosomów homologicznych | 2 komórki z **n+1** i 2 z **n−1** |
| **Nondysjunkcja w mejozie II** | chromatydy siostrzane | 2 komórki **prawidłowe (n)**, 1 z **n+1**, 1 z **n−1** |

Po zapłodnieniu nieprawidłowej komórki haploidalnej przez prawidłową może powstać zygota z **trisomią (2n+1)** albo **monosomią (2n−1)**. Przykładem trisomii jest **trisomia chromosomu 21**, związana z zespołem Downa.

:::

### 9.2. Ryzyko nondysjunkcji rośnie z wiekiem matki

::: karta extra
Komórki jajowe są **zatrzymane w profazie I** od życia płodowego kobiety aż do owulacji. Przez dziesięciolecia mogą gromadzić uszkodzenia, co zwiększa ryzyko błędów rozchodzenia chromosomów.

:::

### 9.3. Oogeneza vs spermatogeneza

| Cecha | Spermatogeneza | Oogeneza |
|---|---|---|
| **Produkt końcowy** | 4 plemniki | 1 komórka jajowa + ciałka kierunkowe |
| **Podział cytoplazmy** | równy | nierówny (jajowa zbiera zasoby) |
| **Czas** | ciągła od dojrzewania | start w życiu płodowym; dokończenie przy owulacji/zapłodnieniu |

### 9.4. Chromosomy płci — jak się rozchodzą?

::: karta extra
- **Kobieta (XX):** oba chromosomy X są homologiczne → rozchodzą się w mejozie I → każda komórka jajowa ma 1 X.
- **Mężczyzna (XY):** X i Y mają regiony częściowo homologiczne → rozchodzą się w mejozie I → **50% plemników ma X, 50% ma Y**.

**Reguła:** płeć dziecka zależy od plemnika (X lub Y). Komórka jajowa zawsze ma X.

:::

### 9.5. Mejoza u roślin — przemiana pokoleń

::: karta extra
- U roślin mejoza prowadzi do powstania **spor** (nie gamet).
- **Sporofit (2n)** → mejoza → **spory (n)** → **gametofit (n)** → mitoza → **gamety (n)** → zapłodnienie → **sporofit (2n)**.
- U zwierząt: **organizm dorosły (2n)** → mejoza → **gamety (n)** → zapłodnienie → **zygota (2n)**.

:::

### 9.6. Choroby związane z nondysjunkcją

| Choroba | Mechanizm |
|---|---|
| **Trisomia 21 (zespół Downa)** | nondysjunkcja chromosomu 21 |
| **Trisomia 18 (Edwards)** | nondysjunkcja chromosomu 18 |
| **Trisomia 13 (Patau)** | nondysjunkcja chromosomu 13 |
| **Zespół Turnera (45,X)** | brak jednego chromosomu X |
| **Zespół Klinefeltera (47,XXY)** | dodatkowy chromosom X |

**Szczegóły — w L090.**

## 10. Klinika błędów | PUŁAPKI

### 10.1. Tabela błędów

| Błąd | Poprawa | Dlaczego? |
|---|---|---|
| „Mejoza zawsze tworzy gamety" | mejoza tworzy **komórki haploidalne**; u zwierząt → gamety, u roślin → spory | precyzja definicji |
| Gameta ma 46 chromosomów | komórka haploidalna ma **23** | redukcja 2n → n |
| Mejoza = mitoza | różne cele | redukcja vs zachowanie 2n |
| Rekombinacja w mejozie II | w **profazie I** | tylko tam są pary homologów |
| „Po mejozie I jest 23 chromatydy" | 23 chromosomy × 2 = **46 chromatyd** | centromer = 1 chromosom |
| Mejoza daje 2 komórki | **4 komórki haploidalne** | dwa podziały |
| Rekombinacja **zmniejsza** zmienność | **zwiększa** | wymiana fragmentów → nowe kombinacje |
| Nondysjunkcja = normalny etap | to **błąd** | prowadzi do aneuploidii |
| Bliźnięta jednojajowe = identyczne DNA | **niemal identyczny genom jądrowy** (drobne różnice epigenetyczne/mutacje somatyczne) | precyzja |
| „Rekombinacja zachodzi 1–2 razy na parę" | **zwykle zachodzi w wielu miejscach genomu**; liczba zależy od chromosomu i organizmu | unikać nieuzasadnionych liczb |

### 10.2. Klinika 2.0 — pięć pełnych przykładów

::: karta error | Przykład 1 — „Mejoza zawsze daje cztery gamety"
- **Błąd:** „Mejoza zawsze daje cztery gamety."
- **Znajdź:** Pomylenie komórek haploidalnych z gametami.
- **Popraw:** Mejoza daje **cztery komórki haploidalne**; u mężczyzny → 4 plemniki, u kobiety → 1 komórka jajowa + ciałka kierunkowe.
- **Reguła:** Produkt mejozy ≠ zawsze liczba funkcjonalnych gamet.
- **Dlaczego:** W oogenezie cytoplazma dzielona nierówno, ciałka kierunkowe zanikają.
- **Pułapka:** „4 komórki = 4 gamety" — tylko w spermatogenezie.

:::

::: karta error | Przykład 2 — „Mejoza to mitoza w gonadach"
- **Błąd:** „Mejoza to mitoza, która zachodzi w jądrach/jajnikach."
- **Znajdź:** Pomylenie celu i wyniku liczbowego.
- **Popraw:** Mitoza: 2n → 2n. Mejoza: 2n → n.
- **Reguła:** Liczba zestawów po podziale = cel procesu.
- **Dlaczego:** Mitoza służy wzrostowi; mejoza — wytworzeniu komórek haploidalnych.
- **Podobne:** Mitoza: 1 podział. Mejoza: 2 podziały.
- **Pułapka:** „Oba dzielą komórkę" — ale w różnym celu.

:::

::: karta error | Przykład 3 — „Gameta ma tyle samo chromosomów co komórka ciała"
- **Błąd:** „Gameta ma 46 chromosomów."
- **Znajdź:** Mylenie n z 2n.
- **Popraw:** Komórka haploidalna ma **n = 23** chromosomy.
- **Reguła:** Mejoza redukuje 2n → n.
- **Podobne:** Zygota ma 2n = 46.
- **Pułapka:** „Gameta = komórka ciała" — nie, to komórka haploidalna.

:::

::: karta error | Przykład 4 — „Rekombinacja chromosomowa w mejozie II"
- **Błąd:** „Rekombinacja chromosomowa zachodzi w mejozie II."
- **Znajdź:** Zła faza.
- **Popraw:** Rekombinacja zachodzi w **profazie mejozy I**.
- **Reguła:** Wymaga **par homologów** — a te są tylko w mejozie I.
- **Dlaczego:** W mejozie II nie ma już par.
- **Pułapka:** „Rekombinacja w II" — niemożliwe, bo nie ma par.

:::

::: karta error | Przykład 5 — „Nondysjunkcja to normalny proces"
- **Błąd:** „Nondysjunkcja to normalny etap mejozy."
- **Znajdź:** Pomylenie błędu z procesem.
- **Popraw:** Nondysjunkcja to **błąd** rozchodzenia chromosomów.
- **Reguła:** Prawidłowo pary homologów (lub chromatydy) rozchodzą się po równo.
- **Dlaczego:** Nondysjunkcja prowadzi do aneuploidii (np. trisomia 21).
- **Pułapka:** „Czasem się zdarza" ≠ „normalny etap".

:::

::: html
<div class="lk-czesc">11. Obserwacja / model</div>
:::

::: karta -
Problem: Jak z 46 chromosomów powstają komórki z 23? Hipoteza: Przez redukcyjny podział (mejoza). Materiał: schemat mejozy I i II. Obserwacja: po mejozie I liczba chromosomów spada o połowę. Wniosek: komórki haploidalne; zapłodnienie przywraca 2n. Ograniczenia: schemat nie pokazuje wszystkich miejsc rekombinacji. BHP: brak.

Schemat mejozy **nie jest** doświadczeniem — to model.

:::

| Typ | Przykład |
|---|---|
| **Obserwacja** | preparat mikroskopowy mejozy (np. w pylnikach cebuli), liczenie komórek |
| **Model** | schemat mejozy I i II, diagram rekombinacji chromosomowej |

## 12. Ćwiczenia (12A–12D) | [[understand:TRENING]]

### 12A. Mini-check (5 pytań)

1. Mejoza (2n → ?)?
2. Ile chromosomów w komórce haploidalnej człowieka?
3. Co rozchodzi się w mejozie I?
4. Podaj 2 źródła zmienności.
5. Dlaczego „4 gamety" to uproszczenie?

::: odp | Odpowiedź
1. 2n → n.
2. 23 chromosomy.
3. Pary chromosomów homologicznych.
4. Rekombinacja chromosomowa, niezależna segregacja, losowe zapłodnienie.
5. Bo u kobiety powstaje tylko 1 funkcjonalna komórka jajowa + ciałka kierunkowe.

:::

### 12B. Ćwiczenie prowadzone

**Dane:** Człowiek, 2n = 46.

**Krok 1.** Po replikacji: 46 chromosomów, 92 chromatydy.

**Krok 2.** Po mejozie I: 2 komórki, każda z 23 chromosomami (46 chromatyd).

**Krok 3.** Po mejozie II: 4 komórki, każda z 23 chromosomami (23 chromatydy).

**Krok 4.** Komórka haploidalna: n = 23.

**Spróbuj sam:** 2n = 16 → n = ?

::: odp | Odpowiedź
2n = 16 → n = **8**.

:::

### 12C. Ćwiczenia samodzielne

#### A. Podstawa [[basic:A]]

1. Co to mejoza?
2. Ile chromosomów w komórce haploidalnej człowieka?
3. Czym różni się n od 2n?
4. Podaj 2 źródła zmienności.

::: odp | Odpowiedź
1. Podział redukcyjny (2n → n), prowadzący do powstania komórek haploidalnych.
2. 23 chromosomy (n).
3. n = haploidalna (połowa), 2n = diploidalna (pełny zestaw).
4. Rekombinacja chromosomowa, niezależna segregacja.

:::

#### B. Trening [[understand:B]]

1. Popraw: „Mejoza daje 2n".
2. Dlaczego rodzeństwo się różni?
3. Co się dzieje po zapłodnieniu?

::: odp | Odpowiedź
1. Mejoza daje **n** (2n → n), nie 2n.
2. Trzy mechanizmy zmienności (rekombinacja, segregacja, losowe zapłodnienie).
3. Powstaje zygota 2n (23 + 23 = 46).

:::

#### C. Ambitne [[extra:C]]

1. Mejoza I vs II — co się rozchodzi?
2. Jak działa rekombinacja chromosomowa?
3. Uzasadnij: 2n = 46 → n = 23.

::: odp | Odpowiedź
1. Mejoza I — pary homologów. Mejoza II — chromatydy siostrzane.
2. Rekombinacja = wymiana fragmentów chromatyd niesiostrzanych w profazie I → nowe kombinacje alleli.
3. Redukcja: 46 → 23 (połowa).

:::

#### D. Zaawansowane [[extra:D]]

1. Co to nondysjunkcja?
2. Dlaczego „4 gamety" to uproszczenie?
3. Nondysjunkcja I vs II — różnica w produktach?

::: odp | Odpowiedź
1. Błąd rozchodzenia chromosomów w mejozie → komórka z n+1 lub n−1 → zygota 2n±1.
2. U kobiety tylko 1 komórka jajowa jest funkcjonalna; pozostałe 3 to ciałka kierunkowe.
3. **Nondysjunkcja I:** pary homologów nie rozchodzą się → wszystkie 4 komórki nieprawidłowe (2 z n+1, 2 z n−1). **Nondysjunkcja II:** chromatydy nie rozchodzą się → 2 prawidłowe (n), 1 z n+1, 1 z n−1.

:::

### 12D. PROBLEM / THINK [[extra:KONKURS]]

Dlaczego rodzeństwo (poza bliźniakami jednojajowymi) nie jest identyczne? Podaj **3 mechanizmy** i wyjaśnij każdy.

::: odp | Odpowiedź
**Trzy mechanizmy zmienności:**

1. **Rekombinacja chromosomowa** — wymiana fragmentów chromatyd niesiostrzanych w profazie I → nowe kombinacje alleli na chromosomach.
2. **Niezależna segregacja chromosomów** — losowe rozchodzenie się 23 par homologów → 2²³ ≈ 8,4 mln możliwych zestawów chromosomów w komórce haploidalnej.
3. **Losowe zapłodnienie** przy zapłodnieniu → niemal nieskończona liczba kombinacji genów w zygocie.

**Wniosek:** Każdy człowiek (poza bliźniakami jednojajowymi) jest genetycznie unikalny, choć liczba możliwych kombinacji jest **skończona** (bardzo duża).

:::

### Drabinka trudności

| Poziom | Zadanie |
|---|---|
| ODTWÓRZ | Ile chromosomów w komórce haploidalnej człowieka? |
| ZASTOSUJ | 2n = 46 → ile po mejozie I? |
| WYJAŚNIJ | Dlaczego bez mejozy liczba chromosomów by rosła? |
| ODKRYJ | Co rozchodzi się w mejozie I, a co w II? |
| POŁĄCZ | Połącz 3 mechanizmy zmienności z tym, że rodzeństwo nie jest identyczne. |
| ZAKWESTIONUJ | Czy z faktu „4 komórki haploidalne" wynika „4 funkcjonalne gamety u kobiety"? |

::: html
<div class="lk-czesc">13. Sposób oceniania</div>
:::

::: karta -
- **Podstawa:** 1 pkt.
- **Trening:** 1 pkt za wynik + 1 pkt za uzasadnienie.
- **Ambitne:** 2 pkt.
- **Zaawansowane:** 3 pkt.

:::

## 14. Fiszki | [[understand:POWTÓRKA]]

::: fiszki
Mejoza — wynik | **2n → n** | basic:podstawa
Komórka haploidalna człowieka | **23 chromosomy (n)** | basic:podstawa
Zygota człowieka | **46 chromosomów (2n)** | basic:podstawa
Trzy źródła zmienności | **Rekombinacja, segregacja, losowe zapłodnienie** | basic:podstawa
Mejoza I — co się rozchodzi? | **Pary chromosomów homologicznych** | ambitious:ambitny
Mejoza II — co się rozchodzi? | **Chromatydy siostrzane** | ambitious:ambitny
„4 gamety" u człowieka? | **Uproszczenie (oogeneza: 1 funkcjonalna)** | trap:pułapka
Nondysjunkcja | **Błąd rozchodzenia → aneuploidia** | ambitious:ambitny
Liczba możliwych zestawów (bez rekombinacji) | **2²³ = 8 388 608** | ambitious:ambitny
Rekombinacja chromosomowa — kiedy? | **Profaza I** | basic:podstawa
Jedna replikacja? | **Tak, przed mejozą** | basic:podstawa
Liczba podziałów w mejozie | **2 (mejoza I + II)** | basic:podstawa
Oogeneza vs spermatogeneza | **1 jajowa vs 4 plemniki** | ambitious:ambitny
Trisomia 21 | **Nondysjunkcja chromosomu 21** | ambitious:ambitny
Kto decyduje o płci? | **Plemnik (X lub Y)** | basic:podstawa
Synapsa chromosomów homologicznych | **Łączenie się homologów w pary (profaza I)** | ambitious:ambitny
Chiazma | **Miejsce skrzyżowania chromatyd** | ambitious:ambitny
:::

## 15. Test końcowy (3+2+2+1) | [[understand:TRENING]]

1. (P) Co to mejoza (2n → ?)?
2. (P) Ile chromosomów w komórce haploidalnej człowieka?
3. (P) Podaj 3 źródła różnorodności.
4. (T) Popraw: „Mejoza daje 2n".
5. (T) Co po zapłodnieniu dwóch komórek haploidalnych 23 + 23?
6. (A) Mejoza I vs II — co się rozchodzi?
7. (A) Dlaczego rodzeństwo (poza bliźniakami) nie jest identyczne?
8. (Z) Nondysjunkcja → jaka zygota?

::: odp | Odpowiedź
1. Podział redukcyjny: 2n → n.
2. 23 chromosomy (n).
3. Rekombinacja chromosomowa, niezależna segregacja, losowe zapłodnienie.
4. Mejoza daje **n**, nie 2n.
5. Zygota 2n = 46 chromosomów.
6. Mejoza I — pary homologów. Mejoza II — chromatydy siostrzane.
7. Trzy mechanizmy zmienności.
8. Zygota 2n+1 (trisomia) lub 2n−1 (monosomia).

:::

::: html
<div class="lk-czesc">16. Checklista</div>
:::

::: karta basic
- ☐ Wiem, że mejoza redukuje 2n → n.
- ☐ Znam 23 chromosomy w komórce haploidalnej.
- ☐ Wymieniam 3 źródła zmienności.
- ☐ Rozróżniam mejozę I i II.
- ☐ Wiem, że mejoza daje 4 komórki haploidalne (nie zawsze 4 gamety).
- ☐ Rozumiem nondysjunkcję (ambitny).
- ☐ Znam różnicę oogeneza vs spermatogeneza (ambitny).
- ☐ Wiem, że rekombinacja zachodzi w profazie I.

:::

::: html
<div class="lk-czesc">17. Mapa pojęć</div>
:::

@viz lancuch {kroki="2n = 46|komórka diploidalna > replikacja|faza S: 46 → 92 chromatydy (L013) > mejoza I|rozdział par homologicznych > mejoza II|rozdział chromatyd siostrzanych > 4 komórki n = 23|gamety haploidalne > zapłodnienie|23 + 23 = 46 → zygota 2n" boki="zmienność: crossing-over; niezależna segregacja; losowe zapłodnienie"} | Mejoza w jednym łańcuchu | kliknij krok, aby zobaczyć wyjaśnienie
@opis Łańcuch kroków: komórka 2n (46) → replikacja w fazie S (92 chromatydy) → mejoza I rozdziela pary homologiczne → mejoza II rozdziela chromatydy → 4 gamety n = 23 → zapłodnienie przywraca 2n = 46; z boku trzy źródła zmienności. Wniosek: mejoza zmniejsza liczbę chromosomów o połowę, a zapłodnienie ją przywraca.

Mapa pojęć L015 — od mejozy przez 3 źródła zmienności do unikalności genetycznej.

::: html
<div class="lk-czesc">18. Co dalej? Jak się uczyć?</div>
:::

::: karta understand
**Następna lekcja:** L016 — gdy podziały wymykają się kontroli (nowotwory).

**Most wstecz:** L014 (mitoza) vs L015 (mejoza) — tabela w sekcji 5.2.

**Plan nauki:**

1. Ściąga + tabela mitoza/mejoza (7 min).
2. Schemat mejozy I i II (7 min).
3. Mini-check (5 min).
4. Ćwiczenia A i B (10 min).
5. Fiszki (10 min).
6. Test końcowy (10 min).
7. Powtórka za 1 dzień, 3 dni, tydzień.

:::

### Powtórki rozłożone w czasie

| Kiedy | Co | Czas |
|---|---|---|
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki bloku | 10 min |
| +3 dni | klinika + 3 zadania treningowe | 15 min |
| +1 tydzień | mini-test bloku | 20 min |
| +1 miesiąc | mapa pojęć + pułapki | 15 min |

::: html
<div class="lk-czesc">19. Słownik</div>
:::

| Termin | Definicja |
|---|---|
| Mejoza | Podział prowadzący do komórek haploidalnych (u zwierząt → gamety, u roślin → spory) |
| Komórka haploidalna (n) | Z jednym zestawem chromosomów |
| Komórka diploidalna (2n) | Z dwoma zestawami chromosomów |
| Gameta | Komórka rozrodcza (n) — u zwierząt |
| Zygota | Komórka po połączeniu dwóch komórek haploidalnych (2n) |
| Homologi | Para chromosomów: jeden od matki, jeden od ojca |
| Rekombinacja chromosomowa (crossing-over) | Wymiana fragmentów chromatyd niesiostrzanych w profazie I |
| Synapsa chromosomów homologicznych | Łączenie się homologów w pary w profazie I |
| Chiazma | Miejsce widocznego skrzyżowania chromatyd |
| Niezależna segregacja | Losowe rozchodzenie się par chromosomów w anafazie I |
| Nondysjunkcja | Błąd rozchodzenia chromosomów lub chromatyd |
| Aneuploidia | Nieprawidłowa liczba chromosomów (np. trisomia 21) |
| Oogeneza | Powstawanie komórek jajowych (1 funkcjonalna + ciałka kierunkowe) |
| Spermatogeneza | Powstawanie plemników (4 funkcjonalne) |
| Ciałko kierunkowe | Mała komórka powstająca w oogenezie, otrzymuje niewiele cytoplazmy, zwykle zanika |
| Mejoza I | Podział redukcyjny (rozdział par homologów) |
| Mejoza II | Podział zachowawczy (rozdział chromatyd) |

## 20. Dodatek zaawansowany | [[extra:ZAAWANSOWANY]]

### 20.1. Mejoza a starzenie komórek jajowych

::: karta extra
Komórki jajowe są **zatrzymane w profazie I** od życia płodowego kobiety aż do owulacji. Przez dziesięciolecia mogą gromadzić uszkodzenia białek wrzeciona podziałowego — co zwiększa ryzyko **nondysjunkcji** i aneuploidii (np. trisomii 21).

:::

### 20.2. Mejoza u roślin — cykl pełny

::: karta extra

::: html
<div class="step-flow"> Sporofit (2n) ↓ mejoza Spory (n) ↓ mitoza Gametofit (n) ↓ mitoza Gamety (n) ↓ zapłodnienie Zygota (2n) → Sporofit (2n)</div>
:::
@opis Schemat z lekcji; elementy: Sporofit (2n)
  ↓ mejoza
Spory (n)
  ↓ mitoza
Gametofit (n)
  ↓ mitoza
Gamety (n)
  ↓ zapłodnienie
Zygota (2n) → Sporofit (2n)

U zwierząt mejoza zachodzi bezpośrednio przed powstaniem gamet; u roślin mejoza tworzy **spory**, a gamety powstają z nich **przez mitozę**.

:::

### 20.3. Nondysjunkcja I vs II — pełna tabela

| Typ | Co się dzieje | Produkty mejozy |
|---|---|---|
| Nondysjunkcja I | Pary homologów nie rozchodzą się w anafazie I | 2 komórki z n+1, 2 z n−1 |
| Nondysjunkcja II | Chromatydy nie rozchodzą się w anafazie II | 2 komórki prawidłowe (n), 1 z n+1, 1 z n−1 |

### 20.4. Mejoza a mutacje

::: karta extra
W trakcie mejozy mogą wystąpić **błędy** (nondysjunkcja, niewłaściwa rekombinacja). Większość prowadzi do **niepłodności** lub **poronienia**, ale niektóre do chorób (np. trisomia 21).

:::

### 20.5. Zadanie olimpijskie

::: karta warning
**Pytanie:** Organizm ma 2n = 20. Ile chromosomów i chromatyd w komórce po mejozie I?

**Rozwiązanie:**

- 2n = 20 → po replikacji: 20 chromosomów, 40 chromatyd.
- Po mejozie I: 2 komórki, każda z **10 chromosomami** (20 chromatyd).

**Odpowiedź:** 10 chromosomów, 20 chromatyd w każdej z 2 komórek.

:::

::: html
<div class="lk-czesc">21. Połączenia międzyprzedmiotowe</div>
:::

::: karta -
- **Matematyka:** kombinatoryka (2²³), potęgi, prawdopodobieństwo.
- **Biologia:** rozmnażanie, dziedziczenie, zmienność, ewolucja.
- **Medycyna:** diagnostyka prenatalna, aneuploidie, niepłodność.
- **Rolnictwo:** hodowla, planowanie krzyżówek.
- **Etyka:** poradnictwo genetyczne (dyskusja).

:::

::: html
<div class="lk-czesc">22. Zadania z życia codziennego</div>
:::

::: karta basic
1. Dlaczego dzieci tej samej pary rodziców różnią się między sobą?
2. Dlaczego wiek matki wpływa na ryzyko zespołu Downa?
3. Jakie znaczenie ma mejoza w hodowli roślin i zwierząt?
4. Dlaczego bracia i siostry mogą mieć różne grupy krwi?
5. Czy bliźniaki jednojajowe mają identyczne DNA? (Zwykle **niemal identyczny genom jądrowy**, ale z czasem mogą pojawić się między nimi drobne różnice wynikające z mutacji somatycznych i zmian epigenetycznych.)

:::

::: html
<div class="lk-czesc">23. Status lekcji</div>
:::

::: karta new | Wersja 5.1 (2026-09-13) — po korekcie merytorycznej
**Zachowano całą treść merytoryczną v5.0.**

**Poprawki w v5.1:**

- **Definicja mejozy:** uściślona — mejoza tworzy **komórki haploidalne** (u zwierząt → gamety, u roślin → spory).
- **Miejsce zachodzenia:** „komórki rozrodcze w gonadach: jądrach i jajnikach".
- **Rekombinacja chromosomowa:** usunięto nieuzasadnioną liczbę „1–2 razy na parę"; zamieniono na „zwykle zachodzi w wielu miejscach genomu".
- **Różnorodność:** „praktycznie nieskończona" → „bardzo duża liczba kombinacji (skończona)".
- **Nondysjunkcja II:** precyzyjnie — „2 komórki prawidłowe (n), 1 z n+1, 1 z n−1".
- **Bliźnięta jednojajowe:** „niemal identyczny genom jądrowy" (nie „identyczne DNA").
- **Mitoza:** „zachowuje informację komórki macierzystej; sporadyczne mutacje mogą powstać".
- **„4 gamety":** konsekwentnie mówimy o **4 komórkach haploidalnych**; osobno o spermatogenezie i oogenezie.
- **Sekcja 6.3:** usunięto błędne zdanie o „46 chromosomach"; zastąpiono klarownym wyjaśnieniem „pierwszy podział rozdziela pary, drugi — kopie chromosomów".
- **Sekcja 5.5:** dodano **zasadę liczenia centromerów** i kontrastowy przykład 2n = 8.
- **Terminologia:** polskie odpowiedniki — „rekombinacja chromosomowa", „synapsa chromosomów homologicznych", „chiazma", „powtórki rozłożone w czasie".
- **Język:** usunięto „praktycznie nieskończona różnorodność", „komórki nie wytrzymają", „ciałka są odrzucane".
- **Powtórzenia:** scalono tabele mitoza/mejoza; scalono nondysjunkcję; usunięto duplikację „jedna replikacja, dwa podziały".

**Zasada:** nic istotnego nie usunięto — tylko uporządkowano i uściślono.

:::

<p class="mini-note">Ucz się świadomie, nie na pamięć.</p>

## Z kanonu md — zarys do scalenia

::: adv | Zarys z dawnego pliku L015_jak_powstaja_gamety_i_skad.md (treść, której nie było w HTML, do scalenia) | do scalenia
### L015 — Jak powstają gamety i skąd bierze się różnorodność?



#### WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Mejoza i różnorodność.

`[BIO: DIAGRAM type=FLOW]`
`komórka 2n → mejoza → gamety n → zapłodnienie`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** redukcja liczby chromosomów + rekombinacja.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L014  
**Następna lekcja:** L016

---

#### Mapa lekcji (etykiety warstw — treść bez zmian)

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 + pkt 9 Klinika |
| **[TRENING]** | pkt 11–14 |
| **[MASTER]** | pkt 7 |
| **[ZAAWANSOWANY]** | pkt 8 + pkt 19 |
| **[KONKURS]** | pkt 11D (gdy jest) |
| **[POWTÓRKA]** | pkt 13 Fiszki |


---

#### 1. Pytanie przewodnie

Jak powstają gamety (n) i dlaczego rodzeństwo nie jest identyczne?

---

#### 2. Cele lekcji

Po lekcji uczeń:

- wyjaśnia, że mejoza redukuje **2n → n** (u człowieka 46 → 23),
- podaje, że gameta jest haploidalna (23 chromosomy),
- wymienia 3 źródła zmienności genetycznej,
- (ambitny) rozróżnia mejozę I (homologi) i II (chromatydy) oraz liczy chromosomy/chromatydy,
- (zaawansowany) zna nondysjunkcję, aneuploidię i różnicę oogeneza vs spermatogeneza.

#### Zasada 80/20
| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| 2n → n | kluczowa cecha mejozy |
| gameta = 23 | liczba u człowieka |
| 3 źródła zmienności | dlaczego rodzeństwo się różni |
| Mejoza I = homologi; II = chromatydy | co się rozchodzi |

---

#### 3. Kompas  · **[PRZYPOMNIENIE]**
L012 (chromosomy, homologi), L013 (replikacja), L014 (mitoza).

---

#### 4. Zacznij od problemu
Gdyby gamety miały 46 chromosomów, zygota miałaby 92. Jak organizm utrzymuje 46?

**Hipoteza:** ....................................

---

#### 5. Ściąga — poziom podstawowy  · **[PODSTAWA E8]**

**Mejoza** — podział redukcyjny: 2n → n.

**U człowieka:** gameta = 23 chromosomy. Po zapłodnieniu: 23 + 23 = 46.

**Źródła różnorodności:**
1. Crossing-over
2. Niezależna segregacja
3. Losowe łączenie gamet

```text
2n → mejoza → n (gamety) → zapłodnienie → 2n (zygota)
```

**Uwaga:** „Mejoza daje cztery gamety” to uproszczenie — u kobiety 1 jajowa + ciałka kierunkowe.

#### Mnemotechniki
| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | **2n → mejoza → n** | redukcja |
| 2 | **Mejoza I — homologi; II — siostry** | co się rozchodzi |
| 3 | **Crossing-over miesza** | zmienność |
| 4 | **23 + 23 = 46** | gamety + zygota |

---

#### 6. Wyjaśnienie od podstaw  · **[PODSTAWA E8]**

**Mejoza** to podział redukcyjny, w którym z komórki diploidalnej (2n) powstają gamety haploidalne (n).  
U człowieka: **46 → 23**. Po zapłodnieniu: 23 + 23 = **46** (zygota 2n).

**Most z L014:** Mitoza zachowuje liczbę zestawów (2n → 2n). Mejoza **redukuje** (2n → n). Bez mejozy każde pokolenie miałoby dwa razy więcej chromosomów.

#### Dwa podziały, jedna replikacja

Przed mejozą zachodzi **jedna** replikacja DNA (faza S, L013). Potem **dwa** podziały:

| | Co się rozchodzi? | Efekt na liczbę chromosomów |
|---|-------------------|------------------------------|
| **Mejoza I** | chromosomy **homologiczne** (pary) | redukcja 2n → n (każdy chromosom ma jeszcze 2 chromatydy) |
| **Mejoza II** | **chromatydy siostrzane** | utrzymanie n (każda gameta: 23 chromosomy = 23 chromatydy) |

**Reguła liczenia (jak w L012/L014):** liczymy chromosomy po **centromerach**. Po replikacji 46 chromosomów = 92 chromatydy; po mejozie I: 23 chromosomy (46 chromatyd); po mejozie II: 23 chromosomy.

#### Źródła różnorodności (dlaczego rodzeństwo nie jest identyczne)

1. **Crossing-over** — wymiana odcinków DNA między homologami (zwykle w profazie mejozy I) → nowe kombinacje alleli na chromosomie.
2. **Niezależna segregacja** — losowe rozchodzenie się 23 par homologów → u człowieka **2²³ ≈ 8,4 mln** możliwych zestawów w jednej gamecie (bez crossing-over).
3. **Losowe łączenie gamet** przy zapłodnieniu → jeszcze większa liczba kombinacji zygoty.

#### Uproszczenie „cztery gamety”
U mężczyzny (spermatogeneza): 4 funkcjonalne plemniki.  
U kobiety (oogeneza): **1** komórka jajowa + ciałka kierunkowe (cytoplazma dzielona nierówno).

#### 6A. Dlaczego?

1. **Dlaczego redukcja konieczna?** Bez niej zygota miałaby 92, potem 184… — liczba chromosomów rosłaby z pokolenia na pokolenie.
2. **Dlaczego dwa podziały po jednej replikacji?** Mejoza I oddziela homologi (redukcja); mejoza II oddziela chromatydy (jak „mini-mitoza” haploidów).
3. **Dlaczego crossing-over zwiększa zmienność?** Homologi wymieniają odcinki → chromosom potomny ma mix alleli od matki i ojca rodzica.
4. **Dlaczego „4 gamety” to uproszczenie?** Liczba **komórek haploidalnych** ≠ liczba **funkcjonalnych gamet** (oogeneza).

#### 6B. Krok po kroku (człowiek)
1. Start: komórka 2n = 46 → **replikacja** (L013) → 46 chromosomów, 92 chromatydy.
2. **Mejoza I:** pary homologów ustawiają się i rozchodzą → 2 komórki z **23 chromosomami** (każdy z 2 chromatydami).
3. **Mejoza II:** chromatydy siostrzane się rozchodzą → gamety z **23 chromosomami** (23 chromatydy).

#### 6C. Przykład prowadzony
- Człowiek: 2n = 46 → gameta n = **23**.
- Organizm 2n = 16 → gameta n = **8**.
- Po zapłodnieniu dwóch gamet 23+23 → zygota **46**.

#### 6D. Powiązanie
```text
L012 (chromosom, homologi, centromer)
  → L013 (replikacja = faza S)
  → L014 (mitoza: 2n → 2n)
  → L015 (mejoza: 2n → n) → gamety + allelle → L017 (dziedziczenie)
```

---

#### 7. Poziom ambitny  · **[MASTER]**

**Mejoza I vs II (pełna tabela):**

| Cecha | Mejoza I | Mejoza II |
|-------|----------|-----------|
| Co się rozchodzi? | **homologi** (pary) | **chromatydy siostrzane** |
| Crossing-over | tak (profaza I) | nie |
| Redukcja 2n → n | **tak** | nie (utrzymanie n) |
| Liczba chromosomów (człowiek) | 46 → 23 | 23 → 23 |
| Chromatydy na chromosom | 2 → 2 (po I) | 2 → 1 (po II) |

**Pułapka:** „W mejozie rozchodzą się chromatydy” — **nie od razu**. Najpierw homologi (I), potem chromatydy (II).

**Most mitoza ↔ mejoza:**

| | Mitoza (L014) | Mejoza (L015) |
|---|---------------|---------------|
| Cel | odnowa ciała, wzrost | gamety |
| Wynik liczby | 2n → 2n | 2n → n |
| Liczba podziałów | 1 | 2 |
| Crossing-over | nie | tak (I) |

---

#### 8. Poziom zaawansowany  · **[ZAAWANSOWANY]**

**Nondysjunkcja** — błąd rozchodzenia chromosomów w mejozie:

```text
błąd → gameta n+1 lub n−1
→ zapłodnienie z prawidłową gametą n
→ zygota 2n+1 (trisomia) lub 2n−1 (monosomia) → aneuploidia
```

Przykład: **trisomia 21** (zespół Downa). Ryzyko rośnie z wiekiem matki (dłuższe zatrzymanie oocytów w mejozie I).

**Oogeneza vs spermatogeneza:**

| | Spermatogeneza | Oogeneza |
|---|----------------|----------|
| Wynik | 4 plemniki | 1 komórka jajowa + ciałka kierunkowe |
| Cytoplazma | równo | nierówno (jajowa zbiera zasoby) |
| Czas | ciągła od dojrzewania | start w życiu płodowym; dokończenie przy owulacji/zapłodnieniu |

---

#### 9. Klinika błędów  · **[PODSTAWA E8] / [TRENING]**

| Błąd | Poprawa | Dlaczego? |
|------|---------|-----------|
| Mejoza = zawsze 4 gamety u człowieka | uproszczenie | oogeneza: 1 jajowa |
| Gameta ma 46 | gameta ma **23** | redukcja 2n → n |
| Mejoza = mitoza | różne cele | redukcja vs zachowanie 2n |
| Crossing-over w mejozie II | typowo w **I** | tylko wtedy homologi w synapsis |
| „Po mejozie I jest już 23 chromatydy” | 23 chromosomy × 2 chromatydy | centromer = 1 chromosom |

#### Klinika 2.0
**Błąd 1:** „Mejoza zawsze daje cztery plemniki i cztery komórki jajowe.”
- **Znajdź:** Uproszczenie szkolne.
- **Popraw:** ♂ 4 plemniki; ♀ 1 jajowa + ciałka kierunkowe.
- **Reguła:** Oogeneza ≠ spermatogeneza.
- **Dlaczego:** Cytoplazma nierówno dzielona — jajowa musi wyżywić zarodek.
- **Pułapka:** Liczba komórek haploidalnych ≠ liczba funkcjonalnych gamet.

**Błąd 2:** „Mejoza to to samo co mitoza, tylko w gonadach.”
- **Znajdź:** Pomylenie celu i wyniku liczbowego.
- **Popraw:** Mitoza: 2n → 2n (ciało). Mejoza: 2n → n (gamety).
- **Reguła:** Liczba zestawów po podziale = cel procesu.
- **Most:** L014 vs L015.

---

#### 10. Obserwacja / model

```text
Problem: Jak z 46 chromosomów powstać gameta z 23?
Hipoteza: Przez redukcyjny podział (mejoza).
Materiał: schemat mejozy I i II.
Obserwacja: po mejozie I liczba chromosomów spada o połowę.
Wniosek: gamety haploidalne; zapłodnienie przywraca 2n.
Ograniczenia: nie pokazuje wszystkich crossing-over.
BHP: brak.
```

---

#### 11. Ćwiczenia  · **[TRENING]** (11D → [KONKURS])

#### 11A. Mini-check
1. Mejoza (2n → ?)? 2. Ile chromosomów w gamecie? 3. Co rozchodzi się w mejozie I? 4. 2 źródła zmienności? 5. Dlaczego „4 gamety” to uproszczenie?

#### 11B. Ćwiczenie prowadzone
2n = 46 → gameta n = 23.  
**Spróbuj sam:** 2n = 16 → ?

#### 11C. Ćwiczenia samodzielne
**A.** Mejoza? 23? n vs 2n? 2 źródła zmienności?
**B.** Popraw: „Mejoza daje 2n”. Dlaczego rodzeństwo się różni? Co po zapłodnieniu?
**C.** Mejoza I vs II. Crossing-over? Uzasadnij 2n=46 → 23.
**D.** Nondysjunkcja? „4 gamety” uproszczenie? Nondysjunkcja I vs II?

#### 11D. PROBLEM / THINK
Dlaczego rodzeństwo (poza bliźniakami) nie jest identyczne? Podaj 3 mechanizmy.

#### Drabinka trudności
| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Ile chromosomów w gamecie człowieka? |
| ZASTOSUJ | 2n = 46 → ile w gamecie po mejozie? |
| WYJAŚNIJ | Dlaczego bez mejozy liczba chromosomów by rosła? |
| ODKRYJ | Co rozchodzi się w mejozie I, a co w II? |
| POŁĄCZ | Połącz 3 mechanizmy zmienności z tym, że rodzeństwo nie jest identyczne. |
| ZAKWESTIONUJ | Czy z samego faktu „4 komórki haploidalne” wynika „4 funkcjonalne gamety u kobiety”? |

---

#### 12. Odpowiedzi

1. 2n → n. 2. 23. 3. n vs 2n. 4. Crossing-over, segregacja, losowe gamety. 5. Mejoza daje komórki n. 6. Różne kombinacje + crossing-over + losowe gamety. 7. Zygota 2n. 8. I — homologi; II — chromatydy. 9. Wymiana odcinków, typowo w I. 10. Redukcja o połowę. 11. Gameta n±1 → aneuploidia. 12. U kobiety 1 jajowa + ciałka. 13. Inny zestaw alleli.

**Sposób oceniania:** Podstawa 1; Trening 1+1; Ambitne 2; Zaawansowane 3.

---

#### 13. Fiszki  · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---------|-----------|
| Mejoza — wynik | 2n → n |
| Gameta człowieka | 23 chromosomy |
| Źródła zmienności | Crossing-over, segregacja, losowe gamety |
| Mejoza I | Homologi |
| Mejoza II | Chromatydy |
| „4 gamety” u człowieka? | Uproszczenie |
| Nondysjunkcja | Błąd rozchodzenia |

---

#### 14. Test końcowy  · **[TRENING]**
1. (P) Co to mejoza (2n → ?)? 2. (P) Ile chromosomów w plemniku? 3. (P) Podaj 3 źródła różnorodności. 4. (T) Popraw: „Mejoza daje 2n”. 5. (T) Co po zapłodnieniu dwóch gamet 23+23? 6. (A) Mejoza I vs II — co się rozchodzi? 7. (A) Dlaczego rodzeństwo (poza bliźniakami) nie jest identyczne? 8. (Z) Nondysjunkcja → jaka zygota?

#### 15. Checklista
- [ ] Wiem, że mejoza redukuje 2n → n.
- [ ] Znam 23 chromosomy w gamecie.
- [ ] Wymieniam źródła zmienności.
- [ ] Rozróżniam mejozę I i II.
- [ ] Wiem, że „4 gamety” to uproszczenie.

#### 16. Mapa pojęć
```text
MEJOZA
├── 2n → n
├── mejoza I (homologi)
├── mejoza II (chromatydy)
├── gamety
├── zmienność
└── nondysjunkcja → aneuploidia
```

#### 17. Co dalej?
L016 — gdy podziały wymykają się kontroli (nowotwory).

**Most wstecz:** L014 (mitoza) vs L015 (mejoza) — tabela w sekcji 7.

#### 18. Słownik
Mejoza · Gameta · Crossing-over · Nondysjunkcja · Aneuploidia · Oogeneza · Spermatogeneza.

#### 19. Dodatek zaawansowany  · **[ZAAWANSOWANY]**
Oogeneza vs spermatogeneza · nondysjunkcja I vs II · mapowanie genów.

#### 20. Jak się uczyć?
Ściąga (5 min) → schemat mejozy (5 min) → mini-check (5 min) → ćwiczenia (10 min) → fiszki (5 min) → test (10 min).

#### 21. Połączenia międzyprzedmiotowe
Matematyka (2²³ kombinacji) · Biologia (rozmnażanie) · Etyka (dziedziczenie).

#### 22. Zadania z życia codziennego
1. Dlaczego dzieci się różnią? 2. Dlaczego wiek matki wpływa na ryzyko Downa? 3. Jakie znaczenie ma mejoza w hodowli?


#### L015 — warstwa v5.1/v5.2 (HTML + korekta; nic z v3.8 nie skreślono)

HTML: `lekcje_html/BIOLOGIA_L015_MEJOZA.html` (v5.1; dopisek v5.2 w pliku). Bez paska postępu i checkboxów TOC.

**Tytuł precyzyjny:** komórki haploidalne i różnorodność — u zwierząt z nich gamety, u roślin spory.

#### Rdzeń E8
- Mejoza: 1 replikacja + 2 podziały → komórki **n**.
- Mejoza I rozdziela **pary homologów** (redukcja 2n → n). Mejoza II rozdziela **chromatydy siostrzane** (n zostaje n).
- Po mejozie I chromosom często wygląda jak X, bo ma **dwie chromatydy i jeden centromer** — i tak liczy się jako **jeden** chromosom.
- Trzy źródła różnorodności: rekombinacja chromosomowa (profaza I) · niezależna segregacja (ustawienie par w **metafazie I**) · losowe zapłodnienie.
- 2²³ = 8 388 608 zestawów w gamecie **przed** rekombinacją.
- Spermatogeneza: 4 funkcjonalne plemniki. Oogeneza: 1 duża komórka jajowa + ciałka kierunkowe; mejoza II u człowieka **po zapłodnieniu**.

#### FIX (zamiast starych skrótów)
- Mejoza **nie** „w dojrzałych gametach”. Linia płciowa w gonadach → komórki haploidalne → dopiero z nich gamety.
- Homologi: te same geny w tych samych **loci**, mogą mieć różne **allele**.
- Wiek matki: rośnie ryzyko błędów rozchodzenia; jedna przyczyna — długie zatrzymanie mejozy. Nie sprowadzać do „gromadzenia uszkodzeń”.
- Różnorodność jest **skończona, ale ogromna** — nie „nieskończona”.
- Nondysjunkcja II: 2 komórki n + 1×(n+1) + 1×(n−1).
- Bliźnięta jednojajowe: niemal identyczny genom jądrowy (mutacje somatyczne / epigenetyka mogą dojść).

#### Extra (zostaje, nie obowiązek E8)
Rośliny: mejoza → spory → gametofit → gamety mitozą. Nondysjunkcja I vs II pełna tabela. Starzenie oocytu.

#### Zadania (uzasadnienie)
1. 2n = 12. Po replikacji: 12 chromosomów / 24 chromatydy. Po mejozie I: 6 / 12 w każdej z 2. Po mejozie II: 6 / 6 w każdej z 4.
2. „Po mejozie I każdy chromosom ma już jedną chromatydę” — **fałsz**. Redukcja par; chromatydy siostrzane do mejozy II.
3. Rekombinacja nie w mejozie II: homologi są już w **różnych** komórkach.

#### Status L015 (2026-09-20)

MD = HTML na plus (wykład v3.8 + warstwa v5.1/v5.2). Brak luk merytorycznych do doklejania. Widgety/schematy SVG zostają w HTML.

</details>

<!-- ==================== END L015 ==================== -->


<!-- ==================== BEGIN L016 ==================== -->
:::


## Doprecyzowanie — wynik mejozy zależy od organizmu (W15)

- U człowieka spermatogeneza prowadzi zwykle do czterech funkcjonalnych plemników, natomiast oogeneza — do jednej dużej komórki jajowej i małych ciałek kierunkowych. Nie opisuj obu procesów jako „czterech równych gamet”.
- U roślin mejoza prowadzi do **zarodników**, a gamety powstają później w gametoficie, zwykle przez mitozę.
- Crossing-over zachodzi w profazie I; niezależne ustawienie par homologów w metafazie I wpływa na kombinacje chromosomów. Zapłodnienie dodaje kolejne źródło losowości.

## AUDYT W15 — kontrola merytoryczna i wizualna (2026-10-09, GPT-6)

**Zakres:** kontrola punktowa treści podstawowej, terminologii, typowych pułapek odpowiedzi i opisu schematu. To nie jest niezależna recenzja specjalisty ani pełna walidacja wszystkich zadań.

### Uściślenia do utrzymania w treści
- Potwierdzenie kluczowego rozróżnienia: po mejozie I liczba zestawów chromosomów jest zredukowana, ale każdy chromosom zwykle nadal składa się z dwóch chromatyd.
- Opis „cztery komórki” nie jest uniwersalnym opisem oogenezy człowieka: wynik obejmuje jedną dużą komórkę jajową i małe ciałka kierunkowe; cytokineza jest nierówna.
- Źródła różnorodności rozdzielić: crossing-over zachodzi w profazie I, niezależna orientacja par homologów w metafazie I, a losowe łączenie gamet podczas zapłodnienia.

### Status
- Schemat główny otrzymał opis `@opis` z informacją, co przedstawia i jaki wniosek ma wyciągnąć uczeń.
- Wskazane punkty traktować jako warunki poprawnej interpretacji; przy kolejnej edycji wprowadzać je w odpowiednich sekcjach lekcji, nie tylko w audycie.

## AUDYT W18 — klucz i zadania (2026-10-09, GPT-6)

**Zakres:** kontrola celowana zadań o mejozie, gametach i ploidalności; nie jest to pełna walidacja wszystkich odpowiedzi.

- Po mejozie I komórki są haploidalne (n), ale chromosomy zwykle nadal mają po dwie chromatydy; po mejozie II chromatydy siostrzane zostają rozdzielone.
- U człowieka typowa gameta ma 23 chromosomy. Nie wpisuj „23 pary” — to liczba dla diploidalnej komórki somatycznej (46 chromosomów, 23 pary homologiczne).
- U roślin cykle życiowe obejmują przemianę pokoleń; gamety powstają mitotycznie w gametoficie, a mejoza prowadzi do powstania zarodników. Nie uogólniać modelu zwierzęcego na wszystkie organizmy.
- **Status:** doprecyzowano zasady kontroli kluczy; pełna walidacja odpowiedzi pozostaje do wykonania.
