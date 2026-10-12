---
kod: "K11"
tytul: "Równowaga ilościowa"
poziom: LO
wymaga: "K09; K10"
poglebia: "—"
opis: "Stopień przereagowania α i stopień dysocjacji, bilans materii, tabela ICE, obliczanie składu w stanie równowagi, równanie kwadratowe, przybliżenie słabego elektrolitu i reguła 5%."
stan: "PRZEBUDOWANA OD ZERA (wersja 2) — Claude Haiku 5.5, 2026-10-12; źródła: OpenTextBC (kinetyka i ICE), Physics Classroom (dysocjacja, reguła 5%); W1 FULL do zrobienia"
---

## 1 | Wykład 1 — ile naprawdę przereagowało {#wyklad}

::: karta understand | Wykład od zera
W K09 nauczyłeś się, że w stanie równowagi stała K ma stałą wartość dla danej temperatury, a stosunek stężeń produktów do substratów jest do niej dopasowany. Pytanie tej lekcji jest bardziej praktyczne: skoro znamy K i ilości substancji na początku, to ile dokładnie substancji przereagowało, zanim układ się uspokoił?

Odpowiedź daje **stopień przereagowania** α. To ułamek ilości substratu, który przereagował. Jeśli na początku było n₀ moli substratu A, a przereagowało n moli, to α = n/n₀. Wartość zawsze mieści się w przedziale od 0 do 1. Często podajemy ją w procentach: α = 0,25 oznacza 25%.

Dlaczego α jest tak ważne? Bo w równowadze pewna część substratów nadal istnieje, a część została przekształcona. Gdy znasz α, znasz skład mieszaniny. Gdy znasz skład, możesz sprawdzić, czy wartość K się zgadza.

Najczęstszy błąd polega na tym, że uczniowie uważają α = 1 za stan równowagi. Tak jest tylko wtedy, gdy K jest bardzo duża i reakcja praktycznie przebiega do końca. Dla wielu reakcji α jest pośrednie, więc w równowadze obok siebie są i substraty, i produkty.

Jak to policzyć? Zapisujemy bilans materii w tabeli ICE (Initial, Change, Equilibrium): stan początkowy, zmianę w czasie dążenia do równowagi i stan równowagowy. Z tabeli układamy wyrażenie na K i wyznaczamy niewiadomą x. To powtarzalna procedura, a nie zgadywanie.
:::

### 1.1 Mini-wykład: skąd bierze się równowaga, a nie całkowite przereagowanie {#skad}

::: karta understand | W skrócie: reakcja w obie strony
Reakcja odwracalna zachodzi w obie strony. Na początku, gdy są same substraty, szybkość reakcji w przód jest duża, a w tył zerowa. W miarę jak powstają produkty, rośnie szybkość reakcji wstecznej. Równowaga to moment, w którym obie szybkości się zrównują. Stężenia przestają się zmieniać, ale reakcja nie stoi: po prostu przebiega w obie strony z tą samą szybkością. Dlatego α zależy od K, a nie od czasu.
:::

### 1.2 Stopień przereagowania i stopień dysocjacji {#alfa}

Dla reakcji ogólnej wzór na α wygląda tak:

$$ α = n_przereagowane / n_początkowe (dla wybranego substratu)

Mówimy o substracie ograniczającym albo o tym, którego stężenie chcemy śledzić. Gdy obie substancje wyjściowe są w nadmiarze lub w równych ilościach, wybór nie jest oczywisty, dlatego w zadaniach zawsze wskazujemy, o którą substancję chodzi.

Dla dysocjacji elektrolitu mówimy o stopniu dysocjacji. Źródło Physics Classroom definiuje to jako procent początkowej ilości kwasu, który uległ dysocjacji na jony. Ten sam wzór, inna nazwa.

::: karta core | Stopień przereagowania — krok po kroku
1. Wypisz ilości początkowe substratów (w molach lub stężeniach).
2. Oznacz przereagowaną część jako x (lub n) i zapisz ją zgodnie ze współczynnikami.
3. Oblicz α = przereagowana ilość / ilość początkowa dla wybranego substratu.
4. Sprawdź, czy wynik leży w przedziale 0–1 (lub 0–100%).
:::

### 1.3 Tabela ICE {#ice}

Dla reakcji A + B ⇌ C + D, gdy na początku są substraty i brak produktów, tabela wygląda tak:

| | A | B | C | D |
|---|---|---|---|---|
| Initial (początek) | a | b | 0 | 0 |
| Change (zmiana) | −x | −x | +x | +x |
| Equilibrium (równowaga) | a − x | b − x | x | x |

Wyrażenie na stałą: K = x² / ((a − x)(b − x)). Liczymy x, a z niego α. Tabela ICE pochodzi z podręczników akademickich (OpenTextBC) i jest standardowym narzędziem.

::: karta understand | W skrócie: dlaczego tabela, a nie od razu wzór
Tabela wymusza uczciwy bilans. Każda zmiana w równaniu reakcji jest zapisana w jednym miejscu, zgodnie z współczynnikami. Bez tej tabeli łatwo zapomnieć, że substrat ubywa też wtedy, gdy powstaje produkt, i wtedy wynik jest błędny.
:::

## 2 | Wykład 2 — rozwiązywanie równania {#rownanie}

### 2.1 Gdy K daje równanie kwadratowe

W przykładzie z tabeli ICE dostajemy zwykle równanie wielomianowe. Przy równych ilościach substratów wystarczy spierwiastkować obie strony, ale ogólnie trzeba rozwiązać równanie kwadratowe. Pamiętaj, że z dwóch pierwiastków zawsze wybieramy ten, który daje x między 0 a najmniejszą z ilości początkowych, bo nie możemy przereagować więcej, niż było.

::: karta core | Równanie kwadratowe w równowadze — procedura
1. Pomnóż przez mianowniki, zapisz K · (a − x)(b − x) = x².
2. Rozwiń nawiasy i uporządkuj do postaci Ax² + Bx + C = 0.
3. Oblicz Δ = B² − 4AC, potem x = (−B ± √Δ)/(2A).
4. Odrzuć pierwiastek poza przedziałem 0 ≤ x ≤ min(a, b).
5. Sprawdź wynik, podstawiając do K.
:::

### 2.2 Mini-wykład: po co sprawdzać wynik podstawieniem

::: karta understand | W skrócie: kontrola przez podstawienie
Równanie kwadratowe da dwa wyniki, a jeden z nich bywa fizycznie absurdalny (ujemne stężenie albo więcej przereagowania niż substratu). Podstawienie do K to szybki test: jeśli wynik się zgadza z K, rachunek jest poprawny.
:::

## 3 | Wykład 3 — przybliżenie słabego elektrolitu {#przyblizenie}

Dla słabego kwasu HA o stężeniu c dysocjacja jest mała, więc x jest znacznie mniejsze od c. Wtedy w mianowniku c − x można uprościć do c. Z ICE dostajemy x²/c ≈ Ka, czyli x ≈ √(Ka · c). Stopień dysocjacji wynosi α = x/c, co daje wzór orientacyjny:

$$ α ≈ √(Ka / c)

Źródło Physics Classroom podaje, że to założenie jest dopuszczalne, gdy stopień dysocjacji jest mniejszy niż 5%. To tak zwana reguła 5%. Po obliczeniu zawsze sprawdź warunek x/c < 0,05.

::: karta core | Reguła 5% — kiedy przybliżenie jest dopuszczalne
1. Oblicz x z uproszczonego wzoru x ≈ √(Ka · c).
2. Oblicz stopień dysocjacji α = x/c.
3. Jeśli α < 5%, przybliżenie jest dopuszczalne i wynik jest dobry.
4. Jeśli α ≥ 5%, rozwiąż pełne równanie kwadratowe z (c − x).
:::

::: karta understand | Mini-wykład: po co reguła 5%
Przybliżenie to skrót, a skrót ma koszt. Jeśli popełnisz błąd na poziomie kilku procent, wynik może być już niedokładny. Reguła 5% mówi, kiedy ten błąd można zaniedbać. Dla kwasów o większych stężeniach albo większych Ka przybliżenie przestaje działać i trzeba liczyć dokładnie.
:::

## 4 | Przykłady obliczeniowe {#przyklady}

### 4.1 Przykład 1 — równe ilości substratów

Mieszamy po 1 molu substancji A i B w zbiorniku o objętości 1 dm³. Reakcja A + B ⇌ C + D ma K = 4. Ponieważ substraty są w równych ilościach, stężenia wynoszą po 1 mol/dm³ i tabela ICE daje:

$$ K = x²/(1 − x)² = 4

Pierwiastkując obie strony, otrzymujemy x/(1 − x) = 2, czyli x = 2/3 ≈ 0,67 mol/dm³. Stopień przereagowania substratów wynosi α ≈ 67%.

Kontrola: (2/3)² / (1/3)² = (4/9)/(1/9) = 4 = K. Rachunek się zgadza.

### 4.2 Przykład 2 — nierówne ilości substratów

Mieszamy 2 mole A i 1 mol B w 1 dm³. Dla reakcji A + B ⇌ C + D z K = 4 tabela ICE daje stężenia: A: 2 − x, B: 1 − x, C: x, D: x (mol/dm³).

$$ K = x²/((2 − x)(1 − x)) = 4

Mnożymy: x² = 4(2 − 3x + x²), czyli 3x² − 12x + 8 = 0. Δ = 144 − 96 = 48, √48 ≈ 6,93. Pierwiastki: x = (12 ± 6,93)/6, czyli ≈ 3,15 lub ≈ 0,845. Odrzucamy 3,15, bo to więcej niż 1 mol substratu B. Zatem x ≈ 0,85 mol.

Stopień przereagowania substancji B wynosi α = 0,85/1 ≈ 85%. Kontrola: (2 − 0,845)(1 − 0,845) = 1,155 · 0,155 ≈ 0,179; x² ≈ 0,714; 0,714/0,179 ≈ 3,99 ≈ 4. Zgadza się.

### 4.3 Przykład 3 — słaby kwas, przybliżenie

Słaby kwas HA o stężeniu 0,1 mol/dm³ ma Ka = 10⁻⁵. Z uproszczonego wzoru x ≈ √(Ka · c) = √(10⁻⁶) = 10⁻³ mol/dm³. Stopień dysocjacji α = 10⁻³ / 0,1 = 0,01, czyli 1%. Ponieważ 1% < 5%, przybliżenie jest dopuszczalne. Wynik: [H⁺] ≈ 1 · 10⁻³ mol/dm³.

### 4.4 Przykład 4 — kiedy przybliżenie przestaje działać

Kwas HA o stężeniu 0,001 mol/dm³ i Ka = 10⁻⁵. Przybliżenie daje x ≈ √(10⁻⁸) = 10⁻⁴ mol/dm³, czyli α = 10%. To więcej niż 5%, więc przybliżenie jest niedopuszczalne. Trzeba rozwiązać pełne równanie x²/(0,001 − x) = 10⁻⁵, czyli x² + 10⁻⁵x − 10⁻⁸ = 0. Dodatni pierwiastek wynosi około 0,95 · 10⁻⁴ mol/dm³, czyli α ≈ 9,5%. Różnica między przybliżeniem a dokładnym wynikiem jest zauważalna, a reguła 5% przypomina, kiedy tego nie zaniedbywać.

## 5 | Wykład 4 — równowaga a warunki {#warunki}

Wartość K zależy od temperatury, ale nie zależy od ilości substancji na początku. Dwie różne mieszaniny w tej samej temperaturze dadzą różne stężenia równowagowe, ale ich stosunek w wyrażeniu na K będzie taki sam. Dlatego α może się zmieniać, nawet gdy K pozostaje stałe, bo zależy też od ilości początkowych.

Przykład: jeśli do tej samej mieszaniny dodamy więcej substratu A, równowaga przesunie się w stronę produktów, a α substratu B wzrośnie. To połączenie z K10 (przesunięcia równowagi) jest kluczowe, bo pokazuje, że liczby z tej lekcji zależą od warunków.

::: karta understand | W skrócie: K jest stałe, skład nie
Stała K mówi o proporcjach w stanie równowagi przy danej temperaturze. Skład mieszaniny zależy od tego, ile zaczynałeś i z czym mieszasz. Dwa różne rachunki mogą dać różne α przy tej samej K, i oba są poprawne.
:::

## 6 | Ciekawostki {#ciekawostki}

::: karta extra | Woda gazowana
Rozpuszczanie CO₂ w wodzie to równowaga: CO₂ + H₂O ⇌ H₂CO₃. Większość CO₂ pozostaje w postaci rozpuszczonego gazu, a tylko niewielka część tworzy kwas węglowy. Dlatego woda gazowana ma lekko kwaśny smak, ale nie jest silnie kwaśna. Dokładne wartości zależą od temperatury i ciśnienia.
:::

::: karta extra | Ocet
Kwas octowy w occie to kwas słaby. Dla octu o stężeniu około 0,1 mol/dm³ stopień dysocjacji jest rzędu 1%, więc większość cząsteczek pozostaje niezdysocjowana. Dlatego ocet ma kwaśny smak, ale nie żre skóry tak jak kwas solny o tym samym stężeniu. Wartość orientacyjna, zależna od przyjętej Ka.
:::

::: karta extra | Synteza amoniaku
Reakcja N₂ + 3H₂ ⇌ 2NH₃ jest egzotermiczna, więc niższa temperatura sprzyja produktom. W niskiej temperaturze jest jednak zbyt wolna. Przemysł pracuje w kompromisie: wysokie ciśnienie, katalizator i umiarkowana temperatura. Konkretne warunki są orientacyjne i zależą od instalacji.
:::

## 7 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| α = 1 w równowadze | α = 1 tylko wtedy, gdy reakcja przebiega praktycznie do końca | Dla wielu reakcji w równowadze są i substraty, i produkty |
| Zapominanie współczynników w zmianie | Zmiana w tabeli ICE zależy od współczynników stechiometrycznych | Dwa mole substratu zużywają się na jeden mol produktu |
| Brak sprawdzenia przybliżenia | Po wyniku sprawdzamy, czy α < 5% | Bez tego wynik może być zbyt niedokładny |
| Pierwiastek ujemny lub większy od substratu | Odrzucamy pierwiastek poza przedziałem 0 ≤ x ≤ min(a, b) | Nie można przereagować więcej, niż było |
| Procenty w środku rachunku | Rachunki prowadzimy na ułamkach, procenty podajemy na końcu | Mnożenie przez 100 za wcześnie daje błędny wynik |
:::

## 8 | Ćwiczenia {#cwiczenia}

::: karta exam | Zadanie 1 (1 pkt) — stopień przereagowania
Na początku w zbiorniku było 2,0 mola substancji A. W stanie równowagi pozostało 1,5 mola. Oblicz stopień przereagowania α substancji A.
::: odp | Pokaż klucz
Przereagowało 2,0 − 1,5 = 0,5 mola. α = 0,5 / 2,0 = 0,25, czyli 25%. (1 pkt za wynik z jednostką lub w procentach)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — przybliżenie dla słabego kwasu
Kwas HA o stężeniu 0,10 mol/dm³ ma Ka = 10⁻⁵. Oblicz stężenie jonów H⁺ w przybliżeniu i stopień dysocjacji. Sprawdź, czy przybliżenie jest dopuszczalne.
::: odp | Pokaż klucz
x ≈ √(Ka · c) = √(10⁻⁵ · 0,1) = √(10⁻⁶) = 10⁻³ mol/dm³. α = x / c = 10⁻³ / 0,1 = 0,01, czyli 1%. Przybliżenie jest dopuszczalne, bo α < 5%. (1 pkt za x, 1 pkt za sprawdzenie warunku i α)
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — równowaga z tabelą ICE
W zbiorniku o objętości 1 dm³ zmieszano 2 mole A i 1 mol B. Reakcja A + B ⇌ C + D ma K = 4. Ułóż tabelę ICE, zapisz równanie na K i oblicz α substancji B.
::: odp | Pokaż klucz
Tabela: A: 2 − x; B: 1 − x; C: x; D: x. K = x² / ((2 − x)(1 − x)) = 4, czyli 3x² − 12x + 8 = 0. Rozwiązanie fizycznie możliwe: x ≈ 0,85 mol. Dla B: α ≈ 85%. (1 pkt za tabelę, 1 pkt za równanie, 1 pkt za wynik i α)
:::
:::

::: karta exam | Zadanie 4 (2 pkt) — kiedy przybliżenie zawodzi
Kwas HA o stężeniu 0,001 mol/dm³ ma Ka = 10⁻⁵. Czy przybliżenie √(Ka · c) można tu stosować? Uzasadnij liczbowo.
::: odp | Pokaż klucz
x ≈ √(10⁻⁸) = 10⁻⁴ mol/dm³, α = 10%. Ponieważ 10% > 5%, przybliżenia nie stosujemy; trzeba rozwiązać pełne równanie kwadratowe (wynik około 9,5%). (1 pkt za przybliżony wynik, 1 pkt za wniosek z reguły 5%)
:::
:::

## 9 | Test {#test}

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
! Z przybliżenia c − x ≈ c otrzymujemy x² ≈ Ka · c, a α = x/c.
? Według reguły 5% przybliżenie słabego elektrolitu jest dopuszczalne, gdy:
+ stopień dysocjacji jest mniejszy niż 5%
- stopień dysocjacji jest większy niż 50%
- stężenie kwasu wynosi dokładnie 1 mol/dm³
- K jest równe jeden
! Reguła 5% sprawdza, czy x jest małe w porównaniu z c.
? Który pierwiastek równania kwadratowego w tabeli ICE odrzucamy?
+ taki, który daje x większe od najmniejszej z ilości początkowych substratów
- taki, który daje x dodatnie i mniejsze od jednego mola
- każdy dodatni, bo wszystkie są poprawne
- taki, który daje wynik równy zero
! Nie można przereagować więcej substratu, niż go było, więc taki pierwiastek jest fizycznie niemożliwy.
:::

## 10 | Słownik {#slownik}

::: slownik
Stopień przereagowania α :: ułamek ilości substratu, który przereagował w stanie równowagi
Stopień dysocjacji :: procent początkowej ilości kwasu lub zasady, który uległ dysocjacji na jony
Tabela ICE :: zestawienie stanów Initial, Change, Equilibrium dla składników reakcji
Substrat ograniczający :: substrat, którego ilość określa maksymalną ilość produktu lub wybrany do obliczeń α
Stała równowagi K :: stosunek stężeń produktów do substratów w stanie równowagi, z potęgami współczynników
Reguła 5% :: kryterium, że przybliżenie c − x ≈ c jest dopuszczalne, gdy α < 5%
Równowaga dynamiczna :: stan, w którym szybkości reakcji w przód i wstecz są równe, a stężenia się nie zmieniają
:::

## 11 | Fiszki {#fiszki}

::: fiszki
Co to stopień przereagowania α? | Ułamek substratu, który przereagował | basic:rownowaga
Jaki zakres ma α? | Od 0 do 1 (czyli 0–100%) | basic:rownowaga
Czy w równowadze α zawsze wynosi 1? | Nie, tylko gdy reakcja przebiega praktycznie do końca | understand:rownowaga
Co zapisujemy w tabeli ICE? | Stan początkowy, zmianę i stan równowagowy | basic:ice
Jak zapisujemy zmianę w tabeli ICE? | Zgodnie ze współczynnikami, np. −x dla substratu | understand:ice
Kiedy stosujemy przybliżenie c − x ≈ c? | Gdy α < 5% (reguła 5%) | understand:przyblizenie
Jak obliczyć α słabego kwasu? | α ≈ √(Ka/c), gdy przybliżenie jest dopuszczalne | understand:kwas
Co to stała Ka? | Stała dysocjacji słabego kwasu | basic:kwas
Od czego zależy K? | Od temperatury | basic:rownowaga
Czy ilość substratów zmienia K? | Nie, zmienia skład równowagowy | understand:rownowaga
Który pierwiastek kwadratowy odrzucamy? | Ten poza przedziałem 0 ≤ x ≤ min(a, b) | understand:ice
Co to stopień dysocjacji? | Procent początkowej ilości kwasu, który uległ dysocjacji | basic:kwas
Co oznacza równowaga dynamiczna? | Szybkości w przód i wstecz są równe | understand:rownowaga
:::

## 12 | Mosty {#mosty}

- Przed tą lekcją: K09 (stała równowagi), K10 (przesunięcia równowagi).
- Dalej: J07 (dysocjacja słabych kwasów — stopień dysocjacji), a w LO dalsza praca z równowagami w roztworach.

## AUDYT W1 — Claude Haiku 5.5, 2026-10-12 (przebudowa od zera, wersja 2)

**Stan:** lekcja rozszerzona: cztery wykłady, mini-wykłady, cztery przykłady obliczeniowe (w tym przypadek, gdy przybliżenie zawodzi), sześć zadań z kluczem, test 5 pytań, słownik 7 haseł, fiszki 12, klinika 5 wierszy, ciekawostki 3.

**Źródła sprawdzone:** Physics Classroom (dysocjacja: α = x/c, x ≈ √(Ka·c), przybliżenie dopuszczalne do 5% — zastosowane w §3); OpenTextBC (definicja szybkości i tabela ICE, §1.3).

**Rachunki sprawdzone:** K = 4 dla 1+1 mol: x = 2/3, α ≈ 67%, kontrola (4/9)/(1/9) = 4; K = 4 dla 2+1 mol: x ≈ 0,845, kontrola 0,714/0,179 ≈ 4,0; Ka = 10⁻⁵, c = 0,1: α = 1%; c = 0,001: α = 10%, dokładnie ≈ 9,5%.

**Do W1 FULL (zewnętrzny recenzent):** ciekawostki (woda gazowana, ocet, amoniak) nie zostały potwierdzone źródłem w tej wersji — orientacyjne.
