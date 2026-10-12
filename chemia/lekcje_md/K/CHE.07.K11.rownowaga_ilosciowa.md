---
kod: "K11"
tytul: "Równowaga ilościowa"
poziom: LO
wymaga: "K09; K10"
poglebia: "—"
opis: "Stopień przereagowania α, bilans materii, tabela ICE, obliczanie składu w stanie równowagi, przybliżenia dla słabych elektrolitów."
stan: "PRZEBUDOWANA OD ZERA — Claude Haiku 5.5, 2026-10-12; W1 FULL do zrobienia (wartości do weryfikacji)"
---

## 1 | Wykład — ile naprawdę przereagowało {#wyklad}

::: karta understand | Wykład od zera
W K09 nauczyłeś się, że w stanie równowagi stała K ma stałą wartość, a stosunek stężeń produktów do substratów jest do niej dopasowany. Pytanie tej lekcji jest bardziej praktyczne: skoro znamy K i ilości substancji na początku, to ile dokładnie substancji przereagowało, zanim układ się uspokoił?

Odpowiedź daje **stopień przereagowania** α. To ułamek ilości substratu, który przereagował. Dla substratu A, którego na początku było n₀ moli, a przereagowało n, mamy α = n/n₀. Wartość zawsze mieści się w przedziale od 0 do 1. Często podajemy ją w procentach: α = 0,25 oznacza 25%.

Dlaczego α jest tak ważne? Bo w równowadze pewna część substratów nadal istnieje, a część została przekształcona. Gdy znasz α, znasz skład mieszaniny. Gdy znasz skład, możesz sprawdzić, czy wartość K się zgadza.

Najczęstszy błąd polega na tym, by uważać, że α = 1 w równowadze. Tak jest tylko wtedy, gdy K jest bardzo duża i reakcja praktycznie przebiega do końca. Dla wielu reakcji wartość α jest pośrednia, więc w równowadze obok siebie są i substraty, i produkty.

Jak to policzyć? Zapisujemy bilans materii w tabeli ICE (Initial, Change, Equilibrium): stan początkowy, zmianę w czasie dążenia do równowagi i stan równowagowy. Z tabeli układamy wyrażenie na K, a z niego wyznaczamy niewiadomą x. To powtarzalna procedura, a nie zgadywanie.
:::

### 1.1 Stopień przereagowania {#alfa}

$$ α = n_przereagowane / n_początkowe (dla substratu ograniczającego)

Zwróć uwagę, że mówimy o substracie ograniczającym albo o tym, którego stężenie chcemy śledzić. Jeżeli obie substancje wyjściowe są w nadmiarze lub w równych ilościach, wybór jest mniej oczywisty, dlatego w zadaniach zawsze wskazujemy, o którą substancję chodzi.

::: karta core | Stopień przereagowania — krok po kroku
1. Wypisz ilości początkowe substratów (w molach lub stężeniach).
2. Oznacz przereagowaną część jako x (lub n) i zapisz ją zgodnie ze współczynnikami.
3. Oblicz α = przereagowana ilość / ilość początkowa dla wybranego substratu.
4. Sprawdź, czy wynik leży w przedziale 0–1 (lub 0–100%).
:::

### 1.2 Tabela ICE {#ice}

Dla reakcji A + B ⇌ C + D, gdy na początku są substraty i brak produktów, tabela wygląda tak:

| | A | B | C | D |
|---|---|---|---|---|
| Initial (początek) | a | b | 0 | 0 |
| Change (zmiana) | −x | −x | +x | +x |
| Equilibrium (równowaga) | a − x | b − x | x | x |

Wyrażenie na stałą: K = x² / ((a − x)(b − x)). Liczymy x, a z niego α.

::: karta understand | W skrócie: dlaczego tabela, a nie od razu wzór
Tabela wymusza uczciwy bilans. Każda zmiana w równaniu reakcji (współczynnik 1 przy A, 1 przy B) jest zapisana w jednym miejscu. Bez tej tabeli łatwo zapomnieć, że substrat ubywa też wtedy, gdy powstaje produkt, i wtedy wynik jest błędny.
:::

## 2 | Przykład i przybliżenia {#przyklad}

Przykład 1. Mieszamy po 1 molu substancji A i B w zbiorniku o objętości 1 dm³. Reakcja A + B ⇌ C + D ma K = 4 w danej temperaturze. Ponieważ substraty są w równych ilościach, a stężenia wynoszą 1 mol/dm³, po podstawieniu do tabeli ICE dostajemy:

$$ K = x²/(1 − x)² = 4

Pierwiastkując obie strony, otrzymujemy x/(1 − x) = 2, czyli x = 2/3 ≈ 0,67 mol/dm³. Stopień przereagowania substratów wynosi α ≈ 67%.

Przykład 2. Słaby kwas HA o stężeniu 0,1 mol/dm³ dysocjuje na H⁺ i A⁻, a stała Ka = 10⁻⁵. Tabela ICE daje wyrażenie x²/(0,1 − x) = 10⁻⁵. Ponieważ kwas jest słaby, x jest bardzo małe w porównaniu z 0,1, więc przyjmujemy 0,1 − x ≈ 0,1. Wtedy x² ≈ 10⁻⁶, czyli x ≈ 10⁻³ mol/dm³. Stopień dysocjacji α = x / 0,1 = 1%. Przybliżenie jest dopuszczalne, bo 1% < 5%.

::: karta core | Przybliżenie dla słabych elektrolitów
Jeśli x jest mniejsze niż kilka procent początkowego stężenia, można zastąpić (c − x) przez c. Wtedy α ≈ √(Ka/c) dla słabego kwasu. Po wyniku sprawdź warunek: x / c < 0,05. Gdy warunek nie jest spełniony, trzeba rozwiązać równanie kwadratowe.
:::

::: karta understand | Mini-wykład: po co sprawdzać przybliżenie
Przybliżenie to skrót, a skrót ma koszt. Jeżeli popełnisz błąd w zakresie kilku procent, wynik nie będzie dokładny. Dlatego po obliczeniu zawsze pytamy: czy x naprawdę jest małe w porównaniu z c? To jedno pytanie oszczędza wiele błędnych odpowiedzi.
:::

## 3 | Równowaga a warunki {#warunki}

Wartość K zależy od temperatury, ale nie zależy od ilości substancji na początku. Dwie różne mieszaniny w tej samej temperaturze dadzą różne stężenia równowagowe, ale ich stosunek (w wyrażeniu na K) będzie taki sam. Dlatego α może się zmieniać, nawet gdy K pozostaje stałe, bo zależy też od ilości początkowych.

Przykład: jeśli do tej samej mieszaniny dodamy więcej substratu A, to równowaga przesunie się w stronę produktów, a α substratu B wzrośnie. To połączenie z K10 (przesunięcia równowagi) jest kluczowe.

::: karta extra | Ciekawostka: amoniak w przemyśle
Synteza amoniaku N₂ + 3H₂ ⇌ 2NH₃ jest egzotermiczna, więc niższa temperatura sprzyja produktom. Jednak w niskiej temperaturze reakcja jest zbyt wolna. Przemysł pracuje w kompromisie: około 400–450 °C, wysokim ciśnieniu i z katalizatorem. Wydajność w danych warunkach jest orientacyjna i zależy od układu.
:::

::: karta extra | Ciekawostka: woda gazowana
Rozpuszczanie CO₂ w wodzie to równowaga: CO₂ + H₂O ⇌ H₂CO₃. Większość CO₂ pozostaje w postaci gazu lub rozpuszczonego CO₂, a tylko niewielka część tworzy kwas węglowy. Dlatego woda gazowana ma lekko kwaśny smak, ale nie jest silnie kwaśna.
:::

::: karta extra | Ciekawostka: kwas octowy w domu
Kwas octowy w occie to kwas słaby. Dla octu o stężeniu około 0,1 mol/dm³ stopień dysocjacji jest rzędu 1%, więc większość cząsteczek pozostaje niezdysocjowana. Właśnie dlatego ocet ma kwaśny smak, ale nie żre skóry jak kwas solny o tym samym stężeniu.
:::

## 4 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| α = 1 w równowadze | α = 1 tylko wtedy, gdy reakcja przebiega praktycznie do końca | Dla wielu reakcji w równowadze są i substraty, i produkty |
| Zapominanie współczynników w zmianie | Zmiana w tabeli ICE zależy od współczynników stechiometrycznych | Dwa mole substratu zużywają się na jeden mol produktu |
| Brak sprawdzenia przybliżenia | Po wyniku sprawdzamy, czy x/c < 0,05 | Bez tego wynik może być zbyt niedokładny |
| α jako wartość w procentach w rachunku | Rachunki prowadzimy na ułamkach, procenty podajemy na końcu | Mnożenie przez 100 za wcześnie daje błędny wynik |
:::

## 5 | Ćwiczenia {#cwiczenia}

::: karta exam | Zadanie 1 (1 pkt) — stopień przereagowania
Na początku w zbiorniku było 2,0 mola substancji A. W stanie równowagi pozostało 1,5 mola. Oblicz stopień przereagowania α substancji A.
::: odp | Pokaż klucz
Przereagowało 2,0 − 1,5 = 0,5 mola. α = 0,5 / 2,0 = 0,25, czyli 25%. (1 pkt za wynik z jednostką lub w procentach)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — przybliżenie dla słabego kwasu
Kwas HA o stężeniu 0,10 mol/dm³ ma Ka = 10⁻⁵. Oblicz stężenie jonów H⁺ w przybliżeniu i stopień dysocjacji. Sprawdź, czy przybliżenie jest dopuszczalne.
::: odp | Pokaż klucz
x ≈ √(Ka · c) = √(10⁻⁵ · 0,1) = √(10⁻⁶) = 10⁻³ mol/dm³. α = x / c = 10⁻³ / 0,1 = 0,01, czyli 1%. Przybliżenie jest dopuszczalne, bo x/c = 1% < 5%. (1 pkt za x, 1 pkt za sprawdzenie warunku i α)
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — równowaga z tabelą ICE
W zbiorniku o objętości 1 dm³ zmieszano 2 mole A i 1 mol B. Reakcja A + B ⇌ C + D ma K = 4. Ułóż tabelę ICE, zapisz równanie na K i oblicz α substancji B.
::: odp | Pokaż klucz
Tabela: A: 2 − x; B: 1 − x; C: x; D: x. K = x² / ((2 − x)(1 − x)) = 4, czyli 3x² − 12x + 8 = 0. Rozwiązanie fizycznie możliwe: x = (12 − √48)/6 ≈ 0,85 mol. Dla B: α = 0,85 / 1 ≈ 85%. (1 pkt za tabelę, 1 pkt za równanie, 1 pkt za wynik i α)
:::
:::

## 6 | Test {#test}

::: test
? Stopień przereagowania α jest równy:
+ ilości przereagowanej podzielonej przez ilość początkową substratu
- ilości produktu podzielonej przez stałą K
- stałej K pomnożonej przez 100
- sumie ilości substratów i produktów
! α to ułamek substratu, który przereagował, więc przyjmuje wartości od 0 do 1.
? W tabeli ICE zmiana dla substratu w reakcji A + B ⇌ C + D wynosi:
+ −x dla obu substratów, +x dla obu produktów
- +x dla substratów, −x dla produktów
- zero dla wszystkich substancji
- −2x dla substratów
! Każda zmiana jest zapisana zgodnie z współczynnikami; tu wszystkie wynoszą 1.
? Przy słabym kwasie HA o stężeniu c i Ka przybliżenie α ≈ √(Ka/c) wynika z założenia, że:
+ x jest bardzo małe w porównaniu z c, więc c − x ≈ c
- kwas jest mocny i dysocjuje całkowicie
- Ka jest równe stężeniu kwasu
- temperatura wynosi zero
! Z przybliżenia c − x ≈ c otrzymujemy x² ≈ Ka · c, czyli x ≈ √(Ka · c), a α = x/c.
? Czy α = 1 oznacza zawsze, że w równowadze nie ma substratów?
+ Tak, α = 1 oznacza całkowite przereagowanie substratu
- Nie, α = 1 oznacza, że K jest zawsze równa jeden
- Nie, α zawsze jest mniejsze od 0,5
- Tak, ale tylko dla gazów
! α = 1 oznacza, że cały substrat przereagował; w większości reakcji równowagowych tak nie jest.
? Stała K w tej lekcji zależy od:
+ temperatury
- ilości substancji wziętej do reakcji
- objętości naczynia przy stałej temperaturze
- masy molowej substratów
! K zależy od temperatury; ilości początkowe wpływają na skład, nie na wartość K.
:::

## 7 | Słownik {#slownik}

::: slownik
Stopień przereagowania α :: ułamek ilości substratu, który przereagował w stanie równowagi
Tabela ICE :: zestawienie stanów Initial, Change, Equilibrium dla składników reakcji
Substrat ograniczający :: substrat, którego ilość określa maksymalną ilość produktu lub wybrany do obliczeń α
Stopień dysocjacji :: stopień przereagowania dla dysocjacji elektrolitu
Stała równowagi K :: stosunek stężeń produktów do substratów w stanie równowagi, z potęgami współczynników
Przybliżenie słabego elektrolitu :: założenie c − x ≈ c, dopuszczalne, gdy x/c < 5%
Ułamek przereagowany :: wartość α wyrażona liczbą od 0 do 1
:::

## 8 | Fiszki {#fiszki}

::: fiszki
Co to stopień przereagowania α? | Ułamek substratu, który przereagował | basic:rownowaga
Jaki zakres ma α? | Od 0 do 1 (czyli 0–100%) | basic:rownowaga
Czy w równowadze α zawsze wynosi 1? | Nie, tylko gdy reakcja przebiega praktycznie do końca | understand:rownowaga
Co zapisujemy w tabeli ICE? | Stan początkowy, zmianę i stan równowagowy | basic:ice
Jak zapisujemy zmianę w tabeli ICE? | Zgodnie ze współczynnikami, np. −x dla substratu | understand:ice
Kiedy stosujemy przybliżenie c − x ≈ c? | Gdy x/c < 5% | understand:przyblizenie
Jak obliczyć α słabego kwasu? | α ≈ √(Ka/c), gdy przybliżenie jest dopuszczalne | understand:kwas
Co to stała Ka? | Stała dysocjacji słabego kwasu | basic:kwas
Od czego zależy K? | Od temperatury | basic:rownowaga
Czy ilość substratów zmienia K? | Nie, zmienia skład równowagowy | understand:rownowaga
Co robimy po obliczeniu x? | Wyznaczamy stężenia równowagowe i α | basic:ice
Dlaczego α podajemy na końcu rachunku? | Bo rachunek prowadzimy na ułamkach | extra:rachunek
:::

## 9 | Mosty {#mosty}

- Przed tą lekcją: K09 (stała równowagi), K10 (przesunięcia równowagi).
- Dalej: J07 (dysocjacja słabych kwasów — stopień dysocjacji), a w LO dalsza praca z równowagami w roztworach.

## AUDYT W1 — Claude Haiku 5.5, 2026-10-12 (przebudowa od zera)

**Stan:** lekcja przepisana od zera (wykład, tabela ICE, dwa przykłady obliczeniowe, przybliżenie słabego elektrolitu, klinika, zadania z kluczem, test, fiszki, słownik). Rachunki sprawdzone: K = 4 dla 2 mol A i 1 mol B daje x ≈ 0,85 mol (kontrola: 0,714 / 0,179 ≈ 4,0); Ka = 10⁻⁵, c = 0,1 mol/dm³ daje α = 1%.

**Do W1 FULL (zewnętrzny recenzent):** liczby w ciekawostkach (synteza amoniaku, ocet, woda gazowana) orientacyjne — do weryfikacji źródłowej; zapis „α = n_przereagowane / n_początkowe” w §1.1 wymaga sprawdzenia przy kilku konwencjach podręcznikowych.
