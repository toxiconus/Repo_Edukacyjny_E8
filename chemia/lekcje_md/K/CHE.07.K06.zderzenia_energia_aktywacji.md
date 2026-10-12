---
kod: "K06"
tytul: "Zderzenia i energia aktywacji"
poziom: LO
wymaga: "K01; K05"
poglebia: "K07"
opis: "Teoria zderzeń, zderzenie skuteczne, energia aktywacji i profil energetyczny reakcji, rozkład energii cząsteczek, wpływ temperatury i katalizatora."
stan: "PRZEBUDOWANA OD ZERA — Claude Haiku 5.5, 2026-10-12; W1 FULL do zrobienia (wartości do weryfikacji)"
---

## 1 | Wykład — dlaczego reakcje potrzebują „kopnięcia" {#wyklad}

::: karta understand | Wykład od zera
Wyobraź sobie dwie cząsteczki, które przypadkiem się spotkały. Czy zawsze zaczną reagować? Nie. Gdy zmieszasz wodę z cukrem, cząsteczki sacharozy spotykają się z cząsteczkami wody niezliczoną liczbę razy, a cukier nie zmienia się w nic innego. Za to węgiel w temperaturze pokojowej nie zapali się sam, choć cząsteczki tlenu z powietrza krążą wokół niego bez przerwy. Potrzebujemy zapałki.

Teoria zderzeń wyjaśnia to prosto. Reakcja chemiczna może zajść tylko wtedy, gdy cząsteczki się zderzą. Nie każde zderzenie jest jednak **skuteczne**. Aby doszło do przerwania starych wiązań i utworzenia nowych, zderzające się cząsteczki muszą mieć na początku odpowiednio dużą energię. Najmniejszą energię potrzebną do zajścia reakcji nazywamy **energią aktywacji** E_a.

Druga ważna sprawa to orientacja. Nawet przy dużej energii cząsteczki muszą zderzyć się odpowiednią stroną. Kula bilardowa uderzona w krawędź zamiast w środek nie wbije się w łuzę. Podobnie w reakcjach: tylko część zderzeń ma właściwe ustawienie atomów.

Dlaczego energia aktywacji jest tak ważna? Wyobraź sobie górę, którą trzeba przejść z doliny substratów do doliny produktów. Wysokość tej góry to właśnie E_a. Im niższa góra, tym łatwiej przejść, a im wyższa, tym rzadziej przechodzą cząsteczki. Ta prosta analogia wraca w całej lekcji.
:::

### 1.1 Zderzenie skuteczne {#skuteczne}

Zderzenie jest skuteczne, gdy spełnione są jednocześnie dwa warunki:

$$ E_zderzenia ≥ E_a; oraz właściwa orientacja cząsteczek

Liczba zderzeń w jednostce czasu rośnie ze stężeniem, ale liczba zderzeń skutecznych zależy dodatkowo od energii. Dlatego dwukrotne zwiększenie stężenia podwaja liczbę zderzeń, a samo zwiększenie energii może zmienić ich skuteczność wielokrotnie.

::: karta core | Zderzenie skuteczne — dwa warunki
1. Energia zderzenia musi być co najmniej równa E_a (warunek energetyczny).
2. Cząsteczki muszą zderzyć się właściwą częścią (warunek geometryczny, orientacja).
3. Dopiero spełnienie obu warunków daje reakcję; brak któregokolwiek oznacza zderzenie bez reakcji.
:::

### 1.2 Profil energetyczny reakcji {#profil}

Wykres energii w zależności od przebiegu reakcji ma kształt garbu. Substraty leżą na poziomie początkowym, produkty na końcowym, a między nimi znajduje się najwyższy punkt — **kompleks aktywny** (stan przejściowy). Energia aktywacji to różnica między poziomem substratów a poziomem kompleksu aktywnego.

Dla reakcji z przeciwnym przebiegiem (produkty → substraty) bariera ma inną wysokość. Różnica obu barier wyznacza zmianę entalpii:

$$ ΔH = E_a(przód) − E_a(wstecz)

Przykład: jeśli E_a(przód) = 50 kJ/mol, a ΔH = −20 kJ/mol (reakcja egzotermiczna), to E_a(wstecz) = 50 − (−20) = 70 kJ/mol. Bariera powrotu jest wyższa, więc produkty trudniej się cofają.

::: karta understand | W skrócie: góra energii
Dla reakcji egzotermicznej produkty leżą niżej niż substraty, więc droga powrotna musi pokonać wyższą górę. Dla reakcji endotermicznej jest odwrotnie. Energia aktywacji nie jest „kosztem” reakcji; to tylko bariera, którą trzeba pokonać, zanim produkty pojawią się w dużej ilości.
:::

## 2 | Rozkład energii cząsteczek {#rozklad}

W każdej chwili cząsteczki w gazie mają bardzo różne energie. Nie wszystkie są „równe”, a rozkład energii pokazuje, jaki ułamek cząsteczek ma energię większą lub równą danej wartości. Ten rozkład zmienia się z temperaturą: w wyższej temperaturze krzywa jest szersza i przesunięta w prawo, czyli więcej cząsteczek ma dużą energię.

Dla reakcji ważny jest obszar powyżej E_a. Pole pod krzywą z prawej strony od E_a to ułamek cząsteczek zdolnych do reakcji. Gdy temperatura rośnie, to pole rośnie bardzo szybko, mimo że sama krzywa tylko się przesuwa.

::: karta understand | Mini-wykład: dlaczego T działa tak mocno
Zwiększenie temperatury o 10 K nie przesuwa krzywej o wiele, ale zwiększa liczbę cząsteczek powyżej E_a w znacznym stopniu. Dla wielu reakcji w pobliżu temperatury pokojowej szybkość rośnie około dwukrotnie przy wzroście o 10 K (wartość orientacyjna, zależna od reakcji).
:::

## 3 | Katalizator i temperatura {#kataliza}

Temperatura zmienia ułamek cząsteczek o dużej energii. Katalizator robi coś innego: zmienia drogę reakcji, obniżając E_a. Na wykresie dostajemy niższy garb, więc większy ułamek zderzeń staje się skutecznych w tej samej temperaturze. Katalizator nie zmienia ΔH, bo poziomy substratów i produktów pozostają te same.

Warto to porównać: wzrost temperatury zwiększa liczbę skutecznych zderzeń przez zmianę rozkładu energii, a katalizator przez zmianę wysokości bariery. Oba czynniki działają razem, ale nie są tym samym.

::: karta extra | Ciekawostka: katalizator w samochodzie
Katalizator spalin w samochodzie zawiera metale szlachetne (np. platynę, pallad, rod). Zamienia tlenek węgla(II) i tlenki azotu w mniej szkodliwe gazy już w temperaturze pracy silnika. Bez katalizatora te reakcje byłyby zbyt wolne, by oczyścić spaliny.
:::

::: karta extra | Ciekawostka: enzymy to katalizatory życia
Enzymy są białkowymi katalizatorami w organizmach. Niektóre przyspieszają reakcje miliony razy, a działają w łagodnej temperaturze ciała. To dlatego ciało nie potrzebuje wysokich temperatur, by przeprowadzić reakcje trawienia.
:::

::: karta extra | Ciekawostka: zapałka i węgiel
Węgiel drzewny nie płonie sam z siebie w temperaturze pokojowej, bo nie dochodzi do wystarczającej liczby skutecznych zderzeń. Zapałka dostarcza energii, która pozwala cząsteczkom przekroczyć barierę E_a. Gdy reakcja już się zacznie, wydziela się ciepło, które podtrzymuje proces.
:::

## 4 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| E_a = ΔH | E_a to bariera, ΔH to różnica poziomów substratów i produktów | Dwie różne wielkości; reakcja o dużej E_a może mieć małe ΔH |
| Każde zderzenie prowadzi do reakcji | Tylko zderzenie o energii ≥ E_a i właściwej orientacji | Część zderzeń jest nieskuteczna |
| Katalizator zmienia ΔH | Katalizator obniża E_a, ΔH pozostaje takie samo | Zmienia się droga, nie poziomy początku i końca |
| Wzrost T zwiększa energię każdej cząsteczki o tyle samo | Wzrost T zmienia rozkład energii i zwiększa ułamek cząsteczek ≥ E_a | Dlatego efekt jest silny i nieliniowy |
:::

## 5 | Ćwiczenia {#cwiczenia}

::: karta exam | Zadanie 1 (2 pkt) — energia aktywacji i ΔH
Reakcja egzotermiczna ma E_a(przód) = 80 kJ/mol i ΔH = −30 kJ/mol. Oblicz E_a reakcji wstecznej i uzasadnij, która z reakcji ma wyższą barierę.
::: odp | Pokaż klucz
E_a(wstecz) = E_a(przód) − ΔH = 80 − (−30) = 110 kJ/mol. Reakcja wsteczna ma wyższą barierę, bo produkty leżą niżej i trudniej się z nich cofnąć. (1 pkt za wzór i wynik, 1 pkt za uzasadnienie)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — katalizator
Katalizator obniża E_a z 90 do 60 kJ/mol. Wyjaśnij, czy zmieni się wydajność reakcji i dlaczego.
::: odp | Pokaż klucz
Katalizator nie zmienia poziomów substratów i produktów, więc ΔH i stan równowagi pozostają takie same, a wydajność końcowa nie zmienia się. Zmienia się szybkość: więcej zderzeń ma energię ≥ E_a. (1 pkt za wniosek o wydajności, 1 pkt za uzasadnienie o szybkości)
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — temperatura
Opisz, dlaczego wzrost temperatury z 300 K do 310 K może przyspieszyć reakcję bardziej, niż wynikałoby to z samego wzrostu energii cząsteczek o niewielki ułamek. Odwołaj się do rozkładu energii i pojęcia E_a.
::: odp | Pokaż klucz
Wzrost T przesuwa i poszerza rozkład energii cząsteczek, więc rośnie ułamek cząsteczek o energii ≥ E_a. Ten ułamek rośnie nieliniowo, a nie proporcjonalnie do temperatury. (1 pkt za rozkład, 1 pkt za E_a, 1 pkt za nieliniowość)
:::
:::

## 6 | Test {#test}

::: test
? Najmniejsza energia zderzenia, przy której może zajść reakcja, to:
+ energia aktywacji
- entalpia reakcji
- energia wiązania
- energia jonizacji
! E_a to bariera, którą muszą pokonać zderzające się cząsteczki.
? Zderzenie jest skuteczne, gdy:
+ ma energię co najmniej E_a i właściwą orientację
- zachodzi między dwiema cząsteczkami gazu
- prowadzi do wydzielenia ciepła
- trwa dłużej niż 1 sekundę
! Oba warunki (energetyczny i geometryczny) są konieczne.
? Katalizator wpływa na reakcję tak, że:
+ obniża energię aktywacji
- zmienia ΔH reakcji
- zwiększa wydajność w stanie równowagi
- podnosi energię substratów
! Katalizator zmienia drogę reakcji, nie poziomy substratów i produktów.
? Wzrost temperatury przyspiesza reakcje przede wszystkim dlatego, że:
+ zwiększa ułamek cząsteczek o energii co najmniej E_a
- zmniejsza energię aktywacji o stałą wartość
- zwiększa masę cząsteczek
- zmienia ΔH na mniejszą wartość
! Wzrost T zmienia rozkład energii, co zwiększa liczbę skutecznych zderzeń.
? Dla reakcji egzotermicznej (ΔH < 0) prawda jest taka, że:
+ E_a reakcji wstecznej jest większa niż E_a reakcji w przód
- E_a reakcji wstecznej jest mniejsza niż E_a reakcji w przód
- obie bariery są zawsze równe
- E_a reakcji w przód wynosi zero
! Z zależności ΔH = E_a(przód) − E_a(wstecz) wynika, że E_a(wstecz) = E_a(przód) − ΔH, czyli większa.
:::

## 7 | Słownik {#slownik}

::: slownik
Teoria zderzeń :: reakcja zachodzi, gdy cząsteczki zderzą się z odpowiednią energią i orientacją
Zderzenie skuteczne :: zderzenie prowadzące do reakcji, o energii co najmniej E_a i właściwej orientacji
Energia aktywacji E_a :: minimalna energia zderzenia potrzebna do zajścia reakcji
Kompleks aktywny :: stan przejściowy na szczycie profilu energetycznego reakcji
Profil energetyczny :: wykres energii w funkcji przebiegu reakcji, z garbem barierą
Rozkład energii cząsteczek :: zależność liczby cząsteczek od ich energii w danej temperaturze
Katalizator :: substancja obniżająca E_a, nie zmieniająca ΔH
Orientacja :: właściwe ustawienie zderzających się cząsteczek względem siebie
:::

## 8 | Fiszki {#fiszki}

::: fiszki
Co to energia aktywacji? | Najmniejsza energia zderzenia potrzebna do reakcji | basic:zderzenia
Kiedy zderzenie jest skuteczne? | Gdy energia ≥ E_a i właściwa orientacja | basic:zderzenia
Czy każde zderzenie prowadzi do reakcji? | Nie, tylko skuteczne | basic:zderzenia
Co to kompleks aktywny? | Stan przejściowy na szczycie garbu energetycznego | understand:zderzenia
Jak wyznaczyć E_a wstecz z ΔH? | E_a(wstecz) = E_a(przód) − ΔH | understand:energia
Co zmienia katalizator? | Obniża E_a i zmienia drogę reakcji | basic:kataliza
Czy katalizator zmienia ΔH? | Nie | understand:kataliza
Dlaczego wzrost T przyspiesza reakcję? | Rośnie ułamek cząsteczek o energii ≥ E_a | understand:temperatura
Co to orientacja? | Właściwe ustawienie cząsteczek przy zderzeniu | basic:zderzenia
Gdzie na wykresie widać E_a? | Jako wysokość garbu nad poziomem substratów | basic:profil
Dlaczego reakcja egzotermiczna ma wyższą barierę wsteczną? | Bo produkty leżą niżej i ΔH jest ujemne | understand:energia
Czy zapałka jest katalizatorem spalania węgla? | Nie, dostarcza energii, by przekroczyć E_a | extra:zapalanie
:::

## 9 | Mosty {#mosty}

- Przed tą lekcją: K01 (stężenia i szybkość w ogólności), K05 (czynniki szybkości).
- Dalej: K07 (kataliza i mechanizmy), K08 (równowaga: szybkość w przód i wstecz).

## AUDYT W1 — Claude Haiku 5.5, 2026-10-12 (przebudowa od zera)

**Stan:** lekcja przepisana od zera (wykład, profil energetyczny, rozkład Maxwella–Boltzmanna opisany słownie, katalizator, klinika, zadania z kluczem, test, fiszki, słownik). Rachunek: E_a(wstecz) = 80 − (−30) = 110 kJ/mol; 50 − (−20) = 70 kJ/mol.

**Do W1 FULL (zewnętrzny recenzent):** reguła „×2 na 10 K” ma charakter orientacyjny (zależny od reakcji) — do sprawdzenia; ciekawostki (katalizator spalin, enzymy, zapałka) do weryfikacji źródłowej; liczby zadań są ilustracyjne.
