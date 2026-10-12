---
kod: "K04"
tytul: "Szybkość reakcji"
poziom: LO
wymaga: "R05"
poglebia: "K05"
opis: "Szybkość reakcji: średnia i chwilowa, wykresy stężenie–czas, jednostka, metody pomiaru, wstęp do równania kinetycznego."
stan: "PRZEBUDOWANA OD ZERA — Claude Haiku 5.5, 2026-10-12; W1 FULL do zrobienia (wartości do weryfikacji)"
---

## 1 | Wykład — jak szybko zachodzi reakcja {#wyklad}

::: karta understand | Wykład od zera
Pytanie na start: dlaczego jedna reakcja kończy się w ułamku sekundy, a inna trwa lata? Wrzuć kawałek magnezu do kwasu solnego: od razu pojawiają się pęcherzyki wodoru i metal szybko znika. Położ zwykłe żelazo na deszczu: rdza narasta miesiącami. Obie reakcje prowadzą do produktów, ale różnią się **szybkością**.

Szybkość reakcji mówi, jak szybko zmienia się ilość substratów lub produktów w czasie. Najczęściej mierzymy ją przez stężenie, czyli liczbę moli substancji w jednym decymetrze sześciennym roztworu (mol/dm³). Jeśli stężenie substratu w ciągu 60 sekund spada z 0,40 do 0,10 mol/dm³, to średnio w każdej sekundzie ubywało 0,005 mol/dm³ tej substancji.

Ważne jest rozróżnienie dwóch rzeczy. **Szybkość średnia** to zmiana w całym przedziale czasu, czyli iloraz Δc/Δt. **Szybkość chwilowa** to szybkość w jednej, konkretnej chwili; na wykresie stężenia od czasu odpowiada nachyleniu stycznej do krzywej w tym punkcie. Dlatego średnia z przedziału 0–60 s nie mówi, jak szybko reakcja szła na początku.

Dlaczego szybkość się zmienia? Gdy substratów ubywa, rzadziej zderzają się ze sobą, więc reakcja zwalnia. Zwykle najszybciej przebiega na początku, a pod koniec już wolno. Ta obserwacja jest kluczem do odczytywania wykresów: tam, gdzie krzywa jest bardziej stroma, reakcja przebiega szybciej.

Jak to zmierzyć? Wystarczy wybrać cechę, która zmienia się razem z reakcją: objętość wydzielającego się gazu, masę, barwę roztworu, przewodnictwo elektryczne albo ciśnienie w zamkniętym naczyniu. Każdą z nich odczytujemy w kolejnych chwilach i rysujemy wykres. Taki pomiar jest podstawą całej kinetyki.
:::

### 1.1 Szybkość średnia — wzór i znak {#srednia}

Dla substancji, której ubywa (substrat), szybkość średnia w przedziale czasu od t₁ do t₂ to:

$$ v_śr = −Δc/Δt = −(c₂ − c₁)/(t₂ − t₁)

Znak minus jest potrzebny, bo Δc dla substratu jest ujemne. Dzięki temu szybkość wychodzi dodatnia. Dla produktu, którego przybywa, szybkość liczymy bez minusa: v_śr = +Δc/Δt.

::: karta core | Szybkość średnia — krok po kroku
1. Odczytaj stężenie na początku i na końcu przedziału.
2. Oblicz Δc = c₂ − c₁ i Δt = t₂ − t₁.
3. Podziel: v_śr = |Δc|/Δt. Dla substratu wynik jest dodatni dzięki modułowi.
4. Zapisz jednostkę: mol/(dm³·s) (czyli mol·dm⁻³·s⁻¹).
:::

### 1.2 Szybkość chwilowa i wykres stężenie–czas {#chwilowa}

Wykres stężenia substratu od czasu zaczyna się wysoko i opada. Szybkość chwilowa w punkcie t to nachylenie stycznej w tym punkcie. Nie trzeba liczyć pochodnej: na szkolnym wykresie wystarczy narysować styczną i policzyć jej nachylenie jako stosunek przyrostów.

Przykład tabeli pomiarowej dla reakcji A → produkty:

| t (s) | c(A) (mol/dm³) | Szybkość średnia w przedziale poprzednim (mol/(dm³·s)) |
|---|---|---|
| 0 | 0,40 | — |
| 20 | 0,28 | 0,006 |
| 40 | 0,18 | 0,005 |
| 60 | 0,10 | 0,004 |

Szybkość średnia maleje z czasem, więc w pierwszych sekundach reakcja jest najszybsza. Dla produktu wykres idzie w górę, ale szybkość wyznaczamy tak samo, z dodatnim znakiem.

::: karta warning | Pułapka: średnia nie jest chwilową
Wynik 0,005 mol/(dm³·s) z przedziału 0–60 s jest średnią. Na początku szybkość chwilowa była większa (około 0,006), a pod koniec mniejsza (około 0,004). Gdy w zadaniu pada słowo „średnia” albo „w przedziale”, licz z Δc/Δt; gdy pada „w chwili t”, odczytaj nachylenie stycznej.
:::

### 1.3 Równanie reakcji a szybkość {#wspolczynniki}

Dla reakcji ogólnej aA + bB → cC + dD szybkości zmiany stężeń są powiązane współczynnikami stechiometrycznymi. Jeśli substrat A zużywa się dwa razy szybciej niż produkt C powstaje, to zapisujemy to wprost: szybkość liczona z A jest podzielona przez a, a z C przez c. Dlatego w zadaniach trzeba zwrócić uwagę, z której substancji liczymy.

::: karta understand | W skrócie: po co dzielić przez współczynnik?
Jeżeli w równaniu 2 mole substratu zużywają się na 1 mol produktu, to w tej samej chwili substrat ubywa dwa razy szybciej niż produkt przybywa. Dzielenie przez współczynnik sprowadza wszystkie szybkości do jednej „wspólnej” wielkości, dzięki której możemy porównać różne reakcje.
:::

## 2 | Co wpływa na pomiar {#pomiar}

Każda metoda pomiaru ma swoje ograniczenia. Gdy wydziela się gaz, masa układu maleje (gaz ucieka). Gdy powstaje osad, roztwór mętnieje, a nie wszystko da się zmierzyć równie łatwo. Dlatego przy projektowaniu doświadczenia wybieramy tę cechę, która jest proporcjonalna do przebiegu reakcji.

| Metoda | Co mierzymy | Przykład reakcji |
|---|---|---|
| Objętość gazu | Objętość wydzielonego gazu (w tej samej temperaturze i ciśnieniu) | Mg + 2HCl → MgCl₂ + H₂↑ |
| Masa układu | Ubytek masy, gdy gaz ucieka z naczynia | CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ |
| Barwa roztworu | Zmiana intensywności barwy | Reakcje z udziałem jodu |
| Przewodnictwo | Zmiana liczby jonów w roztworze | Reakcje tworzące lub zużywające jony |
| Ciśnienie | Ciśnienie w zamkniętym naczyniu | Reakcje gazowe przy stałej objętości |

::: karta extra | Ciekawostka: reakcja zegarowa
W reakcji jodowego zegara roztwór po chwili nagle zmienia barwę z bezbarwnej na granatową. Przyczyną jest tworzenie jodu, który reaguje ze skrobią. Dodając do roztworu tiosiarczan sodu, opóźniamy moment zmiany barwy o czas proporcjonalny do ilości użytego reagenta. W ten sposób szkolny pokaz zamienia się w pomiar szybkości.
:::

## 3 | Czynniki i kolejne kroki {#czynniki}

Szybkość zależy od stężenia, temperatury, rozdrobnienia substancji stałych oraz obecności katalizatora. Pierwsze trzy czynniki omówimy dokładniej w lekcji K05, a o katalizatorze i energii aktywacji — w K06 i K07. Tutaj ważne jest jedno: nie każda zmiana szybkości wynika z tego samego mechanizmu. Zwiększenie stężenia zwiększa liczbę zderzeń. Zwiększenie temperatury zwiększa liczbę zderzeń skutecznych. Katalizator zmienia drogę reakcji.

::: karta understand | W skrócie: szybkość a wydajność
Szybkość mówi, jak szybko reakcja zachodzi. Wydajność mówi, jak dużo produktu powstaje w ostatecznym stanie. Reakcja może być bardzo szybka, a jej wydajność mała (gdy ustala się równowaga), i odwrotnie. Nie mylimy tych pojęć, nawet jeśli w życiu codziennym mówimy „szybka reakcja” o czymś, co po prostu dużo daje.
:::

::: karta extra | Ciekawostka: rdza — reakcja, którą widzimy po latach
Rdzewienie żelaza to reakcja utleniania z tlenem i wodą, ale przebiega bardzo wolno w temperaturze pokojowej. Dlatego stalowe konstrukcje mogą stać dekady, zanim zauważymy zmiany. Gdy ustawimy je w wilgotnym, słonym powietrzu, szybkość rośnie, bo woda i sól przyspieszają przebieg reakcji elektrochemicznej.
:::

::: karta extra | Ciekawostka: lodówka to kinetyka
Dlaczego żywność w lodówce psuje się wolniej? Niższa temperatura zmniejsza szybkość reakcji i procesów rozkładu, które wywołują bakterie i enzymy. Ta sama zasada działa w odwrotną stronę: po podgrzaniu produkty psują się szybciej.
:::

## 4 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| Szybkość = ΔH | Szybkość to kinetyka (jak szybko), ΔH to energetyka (ile energii) | Dwie różne wielkości; reakcja może być szybka i egzotermiczna albo wolna i endotermiczna |
| Szybkość bez modułu dla substratu | v = −Δc/Δt albo moduł(Δc)/Δt | Stężenie substratu maleje, więc Δc jest ujemne |
| Szybkość w chwili liczona jak średnia | Dla chwili t bierzemy nachylenie stycznej | Średnia obejmuje przedział, chwilowa jeden punkt |
| Mieszanie jednostek (s zamiast min) | Przelicz czas na sekundy przed obliczeniem | Wynik w mol/(dm³·min) jest inny niż w mol/(dm³·s) |
:::

## 5 | Ćwiczenia {#cwiczenia}

::: karta exam | Zadanie 1 (2 pkt) — szybkość średnia
Stężenie substancji A w reakcji A → produkty spadło z 0,40 mol/dm³ do 0,10 mol/dm³ w czasie 60 s. Oblicz szybkość średnią tej reakcji i podaj jednostkę.
::: odp | Pokaż klucz
v_śr = |Δc|/Δt = (0,40 − 0,10)/60 = 0,30/60 = 0,005. Jednostka: mol/(dm³·s). (1 pkt za wynik, 1 pkt za jednostkę)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — wykres c(t)
Na wykresie stężenia substratu od czasu nachylenie krzywej w 10 s jest większe niż w 50 s. Co to mówi o szybkości? Uzasadnij.
::: odp | Pokaż klucz
Szybkość chwilowa jest większa w 10 s niż w 50 s, bo nachylenie stycznej (szybkość zmiany stężenia) jest większe. Reakcja zwalnia, gdy substratu ubywa. (1 pkt za wniosek, 1 pkt za uzasadnienie odwołujące się do nachylenia)
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — produkt i substrat
W reakcji 2A → B szybkość tworzenia B wynosi 0,010 mol/(dm³·s). Oblicz szybkość zmiany stężenia A i podaj wynik ze znakiem. Wyjaśnij, dlaczego wynik różni się od szybkości B.
::: odp | Pokaż klucz
Z równania: na 1 mol B zużywa się 2 mole A, więc ubywanie A jest dwa razy szybsze: Δc(A)/Δt = −2 · 0,010 = −0,020 mol/(dm³·s). Wynik ujemny, bo A ubywa. (1 pkt za zależność od współczynnika, 1 pkt za wartość, 1 pkt za znak i wyjaśnienie)
:::
:::

## 6 | Test {#test}

::: test
? Jednostka szybkości reakcji w układzie SI w przypadku stężeń w mol/dm³ to:
+ mol/(dm³·s)
- mol/dm³
- s/mol
- dm³/(mol·s)
! Szybkość to zmiana stężenia w czasie, więc jednostka to stężenie podzielone przez czas.
? Szybkość średnia substratu w przedziale czasu jest dodatnia, ponieważ:
+ stosujemy moduł albo minus przed Δc, bo stężenie substratu maleje
- substrat zawsze ma dodatnie stężenie
- czas zawsze jest ujemny
- Δc dla substratu rośnie
! Dla substratu Δc < 0, więc bez minusa lub modułu wynik byłby ujemny.
? Na wykresie stężenia substratu od czasu nachylenie stycznej w chwili t mówi o:
+ szybkości chwilowej w tej chwili
- szybkości średniej w całym przedziale
- wydajności reakcji
- masie produktu
! Styczna opisuje lokalną zmianę stężenia, czyli szybkość chwilową.
? Który czynnik nie jest wymieniony jako wpływający na szybkość w tej lekcji?
+ masa molowa produktu
- stężenie
- temperatura
- katalizator
! Masa molowa nie zmienia mechanizmu zderzeń; w lekcji wymienione są stężenie, temperatura, rozdrobnienie i katalizator.
? Szybkość średnia z przedziału 0–60 s jest większa od szybkości chwilowej w 60 s, gdy:
+ reakcja zwalnia z czasem
- reakcja przyspiesza z czasem
- stężenie substratu nie zmienia się
- reakcja jest zakończona już na początku
! Przy zwalnianiu szybkość na początku przedziału jest większa, więc średnia przewyższa wartość końcową.
:::

## 7 | Słownik {#slownik}

::: slownik
Szybkość reakcji :: zmiana stężenia reagenta lub produktu w jednostce czasu
Szybkość średnia :: moduł(Δc)/Δt w danym przedziale czasu
Szybkość chwilowa :: szybkość w ustalonej chwili, równa nachyleniu stycznej do wykresu c(t)
Wykres stężenie–czas :: zależność stężenia od czasu, z której odczytujemy szybkość
Jednostka szybkości :: mol/(dm³·s) (w tej lekcji)
Metoda pomiaru :: sposób odczytu zmiany układu, np. objętości gazu lub barwy roztworu
Substrat :: substancja, która się zużywa w reakcji
Produkt :: substancja, która powstaje w reakcji
Równanie kinetyczne :: zależność szybkości od stężeń (wstęp w LO, szczegóły w K05)
:::

## 8 | Fiszki {#fiszki}

::: fiszki
Czym jest szybkość reakcji? | Zmiana stężenia reagenta w jednostce czasu | basic:kinetyka
Jaki wzór ma szybkość średnia? | v_śr = moduł(Δc)/Δt | basic:kinetyka
Jaka jest jednostka szybkości? | mol/(dm³·s) | basic:kinetyka
Czym różni się szybkość chwilowa od średniej? | Chwilowa to jeden punkt (styczna), średnia to przedział | understand:kinetyka
Co oznacza nachylenie stycznej na wykresie c(t)? | Szybkość chwilową reakcji | understand:kinetyka
Dlaczego szybkość substratu ma znak minus? | Bo stężenie substratu maleje, Δc < 0 | understand:kinetyka
Jak zmienia się szybkość w miarę zużywania substratów? | Zwykle maleje | basic:kinetyka
Co mierzymy przy wydzielaniu gazu? | Objętość gazu lub ubytek masy | basic:pomiar
Co zmienia się w reakcji jodowego zegara? | Barwa roztworu (pojawia się granatowa) | extra:pomiar
Jak przeliczyć czas z minut na sekundy? | Mnożymy przez 60 | basic:kinetyka
Co z zadania 3 wynika dla współczynników? | Szybkość zmiany substratu zależy od jego współczynnika | understand:kinetyka
Czym jest szybkość a wydajność? | Szybkość mówi jak szybko, wydajność ile produktu w końcu | understand:kinetyka
:::

## 9 | Mosty {#mosty}

- Przed tą lekcją: R05 (stężenia i obliczenia z nimi).
- Dalej: K05 (czynniki: stężenie, temperatura, rozdrobnienie), K06 (zderzenia i energia aktywacji), K08 (równowaga dynamiczna: szybkość w przód i wstecz).

## AUDYT W1 — Claude Haiku 5.5, 2026-10-12 (przebudowa od zera)

**Stan:** lekcja przepisana od zera w składni pełnej (wykład, mini-wykłady, zadania z kluczem, test, fiszki, słownik, klinika). Wartości liczbowe sprawdzone rachunkowo (0,30/60 = 0,005; 0,12/20 = 0,006 mol/(dm³·s) dla przedziału 0–20 s).

**Do W1 FULL (zewnętrzny recenzent):** tabela wartości w §1.2 jest ilustracyjna — do sprawdzenia przez recenzenta; ciekawostki (rdza, lodówka, jodowy zegar) do weryfikacji źródłowej.
