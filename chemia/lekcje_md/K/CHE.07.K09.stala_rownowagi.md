---
kod: "K09"
tytul: "Stała równowagi"
poziom: LO
wymaga: "K08"
poglebia: "K10; K11; J07"
opis: "Wyrażenie na stałą równowagi K, jej interpretacja, obliczanie stężeń równowagowych, Kp (wstęp) i zależność K od temperatury."
zrodla: "UMB — materiał konsultacyjny „Równowaga chemiczna” (wzór Kc, pomijanie ciał stałych, zależność od T, przykład obliczeniowy); ZPE i PWr — materiały wyszukane, do weryfikacji; materiał K09 Grok 2026-10-09 (poprawiony)"
stan: PRZEBUDOWA — Claude Haiku 5.5, 2026-10-12 (do W1)
---

# K09 — Stała równowagi

**Dział:** Energetyka, kinetyka i równowaga (blok K)
**Poziomy:** LO
**Poprzednia:** K08
**Następna:** K10 / K11

**Lead:** Po tej lekcji zapiszesz wyrażenie na stałą równowagi, odczytasz z wartości K, w którą stronę przesunięta jest równowaga, i obliczysz stężenia równowagowe w prostym zadaniu.

## Pytanie przewodnie

Jak jedną liczbą opisać, jak daleko zaszła reakcja w stanie równowagi?

## Przypomnienie — karta startowa LO

1. Dla aA + bB ⇌ cC + dD: K = [C]ᶜ [D]ᵈ / ([A]ᵃ [B]ᵇ) (stężenia równowagowe).
2. K jest stała w danej temperaturze i nie zależy od stężeń początkowych.
3. K ≫ 1 → równowaga przesunięta w prawo (dużo produktów).
4. K ≪ 1 → w lewo (dużo substratów).
5. Ciała stałe i ciecze (czyste) nie wchodzą do wyrażenia K.
6. Kp — stała wyrażona przez ciśnienia cząstkowe gazów (wstęp w tej lekcji).
7. Związek z ΔG / E° — poza zakresem podstawowym.
8. Obliczenia: z K i stężeń początkowych wyznaczamy stężenia równowagowe (tabela ICE — wstęp).
9. K zależy od T: dla reakcji egzotermicznej wzrost T zmniejsza K (jakościowo, van ’t Hoff).
10. Most do J07 (Ka, Kb, Kw to szczególne przypadki K) i K10 (Le Chatelier a K).

### Diagnoza wejściowa

1. Wzór K dla 2SO₂ + O₂ ⇌ 2SO₃?
2. Co oznacza K duże?
3. Czy K zależy od stężeń początkowych?
4. Czy ciało stałe wchodzi do K?
5. Jak T wpływa na K reakcji egzotermicznej?

**Klucz:** 1 [SO₃]² / ([SO₂]² [O₂]); 2 dużo produktów; 3 nie; 4 nie; 5 K maleje przy wzroście T.

## Cele

Po lekcji uczeń:

- zapisuje wyrażenie K dla reakcji odwracalnej,
- interpretuje wartość K (w którą stronę przesunięta jest równowaga),
- wie, które reagenty pomija się we wzorze,
- wykonuje proste obliczenia stężeń równowagowych.

## Wykład — liczba, która mówi „jak daleko”

Wiemy już, że w równowadze reakcje w obu kierunkach zachodzą z równymi szybkościami i stężenia są stałe. Pytanie brzmi: jakie to stałe stężenia? Dla jednej reakcji mogą wyjść bardzo różne, zależnie od tego, czy produkty dominują, czy substraty. Potrzebujemy jednej liczby, która opisze położenie równowagi.

Tą liczbą jest **stała równowagi K**. Dla reakcji aA + bB ⇌ cC + dD zapisujemy ją jako iloraz stężeń produktów, każde podniesione do potęgi równej współczynnikowi, przez iloraz stężeń substratów, też z potęgami. Wszystkie stężenia są **równowagowe**, czyli te, które ustaliły się po osiągnięciu równowagi.

Jak czytać wartość? Gdy K jest duże (K ≫ 1), w równowadze w liczniku jest dużo produktów, czyli równowaga leży po stronie produktów. Gdy K jest małe (K ≪ 1), dominują substraty. Gdy K ≈ 1, obie strony są porównywalne.

Dwie zasady pomagają uniknąć błędów. Po pierwsze K zależy **tylko od temperatury**. Nie zmieniają go ani stężenia początkowe, ani katalizator (katalizator przyspiesza dojście do równowagi, ale nie zmienia jej położenia). Po drugie ciała stałe nie wchodzą do wyrażenia, bo ich „stężenie” jest stałe i pomija się je przy zapisie.

Ten sam układ można zapisać różnie: jeśli odwrócimy reakcję, K staje się odwrotnością (K′ = 1/K), a jeśli współczynniki podwoimy, K podnosi się do kwadratu. Dlatego zawsze przy liczbie podaj równanie, którego dotyczy.

**Wniosek:** K to miara położenia równowagi przy danej temperaturze, a nie szybkości reakcji.

## W skrócie — skąd bierze się potęga przy stężeniu

::: karta understand | W skrócie — potęgi z współczynników
Potęga przy stężeniu równa się współczynnikowi stechiometrycznemu. W reakcji 2NO₂ ⇌ N₂O₄ stężenie NO₂ podnosimy do kwadratu, bo są dwa mole NO₂ w równaniu. To nie jest dodatkowa zasada, tylko zapis tego, ile cząsteczek bierze udział w reakcji.
:::

::: karta understand | W skrócie — kiedy pomijamy reagent
Ciało stałe ma stałe stężenie niezależnie od ilości, więc nie wpływa na położenie równowagi. Dlatego w reakcji CaCO₃(s) ⇌ CaO(s) + CO₂(g) do wyrażenia wchodzi tylko CO₂.
:::

## Przykłady

### Zapis wyrażenia K

Dla N₂ + 3H₂ ⇌ 2NH₃: K = [NH₃]² / ([N₂] · [H₂]³). Potęga 3 przy wodorze wynika z trzech moli H₂ w równaniu.

**Krok po kroku — zapisz K dla 2SO₂ + O₂ ⇌ 2SO₃:**
1. Które reagenty są produktami? Co zrobisz z ich stężeniami?
2. Jakie potęgi przypisujesz każdemu stężeniu? Dlaczego?
3. Czy wszystkie reagenty są gazami? Czy coś pomijasz?

### Obliczanie stężeń równowagowych (ICE)

Reakcja: H₂ + I₂ ⇌ 2HI, K = 4 (wartość przyjęta do ćwiczenia, nie dla konkretnej temperatury). Na starcie [H₂] = 1 mol/dm³, [I₂] = 1 mol/dm³, [HI] = 0.

Niech w równowadze przereaguje x mol/dm³ H₂ i tyle samo I₂. Wtedy powstaje 2x mol/dm³ HI.

| Reagent | Start | Zmiana | Równowaga |
|---|---|---|---|
| H₂ | 1 | −x | 1 − x |
| I₂ | 1 | −x | 1 − x |
| HI | 0 | +2x | 2x |

Podstawiamy do wyrażenia: (2x)² / ((1 − x)²) = 4. Pierwiastkujemy: 2x / (1 − x) = 2, więc 2x = 2 − 2x, czyli x = 0,5.

Odpowiedź: w równowadze [H₂] = [I₂] = 0,5 mol/dm³ i [HI] = 1 mol/dm³. Sprawdzenie: 1² / (0,5 · 0,5) = 4 ✔.

**Pytanie do analizy:** dlaczego x nie może być większe niż 1 mol/dm³? (Nie można przereagować więcej substratu, niż go było na starcie.)

### Przykład z materiału (H₂ + CO₂ ⇌ CO + H₂O)

Reakcja w reaktorze 2 dm³: na starcie 6 mol H₂ i 4 mol CO₂. W równowadze powstało po 2 mol CO i H₂O, więc przereagowało po 2 mol H₂ i CO₂.
- [H₂] = 4 mol / 2 dm³ = 2 mol/dm³
- [CO₂] = 2 mol / 2 dm³ = 1 mol/dm³
- [CO] = [H₂O] = 2 mol / 2 dm³ = 1 mol/dm³
- Kc = (1 · 1) / (2 · 1) = 0,5

Źródło: UMB, materiał konsultacyjny „Równowaga chemiczna”. Zwróć uwagę: w oryginale rozwiązanie miało błędy w zapisie; wartości przeliczono ponownie.

## Kp — wstęp

Dla gazów zamiast stężeń można użyć ciśnień cząstkowych. Dla N₂ + 3H₂ ⇌ 2NH₃: Kp = p(NH₃)² / (p(N₂) · p(H₂)³). Kp i Kc różnią się zwykle wartością (zależą od zmiany liczby moli gazów), więc przy liczbie zawsze podajemy, którą stałą opisujemy.

## Temperatura a K

Dla reakcji egzotermicznej wzrost temperatury zmniejsza K, a dla endotermicznej je zwiększa. To jakościowy wniosek, który pojawi się w K10 przy regule Le Chateliera.

## Klinika błędów

| Błąd | Popraw | Dlaczego |
|------|--------|----------|
| K zależy od stężeń początkowych | Nie — tylko od T | stężenia początkowe zmieniają drogę, nie położenie równowagi |
| Ciała stałe w K | Nie wstawiamy | ich stężenie jest stałe |
| Katalizator zmienia K | Nie, zmienia tylko szybkość dojścia | K zależy od T |
| Duże K = szybka reakcja | Duże K = dużo produktów w równowadze | K mówi o położeniu, nie o czasie |

### Klinika 2.0 — przykład 1

**Błąd:** „Dodałem katalizator, więc K wzrosło.”
- **Znajdź:** mylenie szybkości z położeniem równowagi.
- **Popraw:** katalizator skraca czas dojścia do równowagi, K pozostaje bez zmian.
- **Zadanie podobne:** jak zmieni się K, jeśli podwoimy stężenie substratów?

## Mity

::: mity | Popularne błędy o K
K duże oznacza, że reakcja jest szybka || K opisuje położenie równowagi, nie szybkość.
Katalizator zwiększa wydajność reakcji w równowadze || Katalizator przyspiesza dojście do równowagi, nie zmienia jej położenia.
Jednostka K jest zawsze mol/dm³ || Jednostka zależy od równania (dla niektórych reakcji K jest bezwymiarowe).
:::

## Ćwiczenia

### A. Podstawa

1. Zapisz K dla H₂ + I₂ ⇌ 2HI.
2. Co oznacza K = 100?
3. Czy ciało stałe wchodzi do K dla reakcji CaCO₃(s) ⇌ CaO(s) + CO₂(g)?

### B. Trening

4. Zapisz K dla 2NO + O₂ ⇌ 2NO₂.
5. Jak zmieni się K reakcji egzotermicznej po podwyższeniu temperatury?

### C. Ambitne

6. Jak zmieni się K, jeśli odwrócimy równanie reakcji? Dlaczego?
7. Oblicz K dla 2 mol H₂ i 2 mol I₂ w reaktorze 1 dm³, jeśli w równowadze powstało 1,6 mol HI (przyjmij, że HI powstaje z H₂ i I₂ w stosunku 1 : 1 : 2).

**Ćwiczenie prowadzone (z kluczem):** 1 [HI]² / ([H₂][I₂]); 2 dużo produktów w równowadze; 3 nie, CO₂ jest jedynym gazem w wyrażeniu; 4 [NO₂]² / ([NO]² [O₂]); 5 K maleje; 6 K′ = 1/K, bo wyrażenie się odwraca; 7 przereagowało 0,8 mol H₂ i 0,8 mol I₂, w równowadze po 1,2 mol/dm³ H₂ i I₂ oraz 1,6 mol/dm³ HI, więc K = 1,6² / (1,2 · 1,2) ≈ 1,78.

## Odpowiedzi

1. [HI]² / ([H₂][I₂]).
2. Dużo produktów; równowaga przesunięta w prawo.
3. Nie; ciała stałe pomijamy.
4. [NO₂]² / ([NO]² [O₂]).
5. Maleje.
6. K′ = 1/K.
7. ≈ 1,78.

## Sprawdzenie — test

::: test
? Dla reakcji 2SO₂ + O₂ ⇌ 2SO₃ wyrażenie K to:
+ [SO₃]² / ([SO₂]² [O₂])
- [SO₃] / ([SO₂] [O₂])
- [SO₂]² [O₂] / [SO₃]²
! Potęgi odpowiadają współczynnikom, a produkty są w liczniku.
? Katalizator w reakcji równowagowej:
+ przyspiesza dojście do równowagi, nie zmienia K
- zwiększa K
- zmniejsza K
! K zależy tylko od temperatury.
? W reakcji egzotermicznej wzrost temperatury:
+ zmniejsza K
- zwiększa K
- nie wpływa na K
! Dla reakcji egzotermicznej ciepło jest po stronie produktów, więc wzrost T przesuwa równowagę ku substratom.
? Wartość K = 0,01 oznacza:
+ dominują substraty w równowadze
- dominują produkty w równowadze
- reakcja jest bardzo szybka
! K ≪ 1 oznacza przewagę substratów; K nie mówi o szybkości.
? Które reagenty pomijamy we wzorze K dla CaCO₃(s) ⇌ CaO(s) + CO₂(g)?
+ CaCO₃ i CaO (ciała stałe)
- tylko CO₂
- żadne
! Ciała stałe mają stałe stężenie i nie wchodzą do wyrażenia; w tej reakcji zostaje tylko CO₂.
:::

## Fiszki

::: fiszki
Stała równowagi K | iloraz stężeń równowagowych produktów do substratów z potęgami | E8:K09
Co mówi duże K? | dużo produktów w równowadze | E8:K09
Czy K zależy od stężeń początkowych? | nie, tylko od temperatury | E8:K09
Czy ciało stałe wchodzi do K? | nie | E8:K09
Wpływ katalizatora na K | nie zmienia K | E8:K09
K dla odwróconej reakcji | 1/K | E8:K09
Wpływ T na K reakcji egzo | K maleje przy wzroście T | E8:K09
Kp | stała wyrażona ciśnieniami cząstkowymi gazów | E8:K09
Obliczenia ICE | zapis: start, zmiana, równowaga | E8:K09
Jednostka K | zależy od równania | E8:K09
:::

## Słownik

| Termin | Definicja |
|--------|-----------|
| Stała równowagi K | iloraz stężeń (aktywności) reagentów w równowadze, z potęgami równymi współczynnikom |
| Kp | stała równowagi wyrażona ciśnieniami cząstkowymi gazów |
| Tabela ICE | zapis stanu początkowego, zmiany i równowagi w obliczeniach równowagowych |

## Ciekawostki

::: karta extra | Ta sama liczba, różne zapisy
Równanie 2NO₂ ⇌ N₂O₄ i NO₂ ⇌ ½N₂O₄ opisują tę samą równowagę, ale ich stałe różnią się: pierwsza jest kwadratem drugiej. Dlatego zawsze podajemy równanie wraz z K.
:::

::: karta extra | Stała kwasu jako K
Dla słabego kwasu octowego stała dysocjacji Ka ma wartość rzędu 10⁻⁵ (orientacyjnie). Ta sama idea: iloraz stężeń produktów i substratu w równowadze, tylko dla dysocjacji.
:::

::: karta extra | Katalizator bez zmiany wyniku
Katalizator w reakcji równowagowej działa jak przyspieszacz drogi, a nie zmieniacz celu: ta sama równowaga, osiągnięta szybciej.
:::

## Mnemotechnika

::: karta understand | Sposób pamięciowy
K = „kto wygrywa”: duże K, liczba w liczniku, wygrywają produkty. Mały ułamek, wygrywają substraty. Kolejność w liczniku odpowiada kierunkowi strzałki ⇌ w prawo.
:::

## Mosty

- **K10 — reguła Le Chateliera:** jak zmiana warunków zmienia położenie równowagi, a więc także K przy zmianie T.
- **K11 — równowaga ilościowa:** obliczenia z K w bardziej złożonych układach.
- **J07 — Ka, Kb, Kw:** szczególne przypadki K dla kwasów, zasad i wody.

## Źródła

- UMB, „Równowaga chemiczna” (materiał konsultacyjny, PDF, wynik wyszukiwania; treść pobrana): https://www.umb.edu.pl/photo/image/biologia-i-chemia/konsultacje_rownowaga_chemiczna%281%29.pdf — wzór Kc, pomijanie ciał stałych, zależność od T, przykład obliczeniowy.
- Politechnika Wrocławska, materiały „Kinetyka chemiczna — stała równowagi” (PDF, wynik wyszukiwania, nie pobrano): https://wme-z1.pwr.edu.pl/wp-content/uploads/2016/10/KINETYKA_CHEMICZNA_stala_rownowagi.pdf
- ZPE — materiały do podstawy programowej, zob. wyniki wyszukiwania (nie pobrano).

## AUDYT Grok — 2026-10-09

Nowa lekcja od zera. Status: UZUPEŁNIONE. Do wykonania: W1 (zrobić po przebudowie).

## LOG ZMIAN — 2026-10-12

Przebudowa z 2,5 KB szkieletu do pełnej lekcji (Claude Haiku 5.5).

**Zachowano:** wszystkie 10 punktów karty startowej (w przeredagowanej formie), diagnozę z kluczem, pytanie przewodnie, cele (4), przykład N₂ + 3H₂ (wyrażenie K), klinikę (2 wiersze), ćwiczenia 1–3 z kluczem (przeniesione do ćwiczeń A), słownik (2 hasła), sekcja AUDYT Grok.

**Usunięto:** nic z treści merytorycznej. Nie usunięto żadnego punktu ani przykładu.

**Dodano:** wykład, 2 mini-wykłady, przykład ICE z krokami, przykład z materiału UMB (z poprawionymi wartościami), wstęp do Kp, zależność K od T, 4 wiersze kliniki, mity, ćwiczenia A–C, test 5 pytań, 10 fiszek, 3 ciekawostki, mnemotechnikę, mosty i źródła.

**Do weryfikacji:** wartość Ka ok. 10⁻⁵ (orientacyjna); zadanie 7 (przykład ICE z przyjętymi liczbami); wzmianka o źródle ZPE (bez pobrania treści).
