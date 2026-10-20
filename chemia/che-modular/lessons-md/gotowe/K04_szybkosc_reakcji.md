---
kod: K04
uid: CHE.07.K04.szybkosc_reakcji
tytul: Szybkość reakcji
opis: Szybkość reakcji od zera — szybkość średnia i chwilowa, wykres stężenie–czas, jednostki, stechiometria szybkości, metody pomiaru, przykłady krok po kroku · wstęp do równania kinetycznego (LO)
kicker: K04 · KINETYKA · NOWA WERSJA
lead: Dlaczego jedna reakcja kończy się w ułamku sekundy, a inna trwa lata? Odpowiedź leży w szybkości — tym, jak szybko zmienia się skład układu w czasie. Ta lekcja uczy ją mierzyć, odczytywać z wykresu i przeliczać.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA K04 v1.0** · Szybkość reakcji · 2026
---


Ta lekcja uczy, jak mierzyć i opisywać szybkość reakcji. Po jej przejściu umiesz policzyć szybkość średnią z tabeli, odczytać szybkość chwilową z wykresu, przeliczyć jednostki i powiązać szybkości różnych substancji ze współczynnikami reakcji.

## Przypomnienie z poprzedniej lekcji

Zanim przeczytasz dalej, odpowiedz na dwa pytania z R05 (bez zaglądania):

1. Ile moli znajduje się w 0,5 dm³ roztworu o stężeniu 0,2 mol/dm³?
2. Co oznacza zapis „mol/dm³”?

::: karta understand | Klucz do przypomnienia
1. n = c · V = 0,2 · 0,5 = 0,1 mol. Jeśli wynik wyszedł inny, wróć do R05 przed dalszą lekcją.
2. Liczba moli substancji w jednym decymetrze sześciennym roztworu. Ta jednostka wróci w każdym wzorze tej lekcji.
:::

::: minimum | Muszę umieć — 6 punktów
1. Szybkość reakcji to zmiana stężenia w jednostce czasu. Jednostka: mol/(dm³·s).
2. Szybkość średnią liczymy jako moduł(Δc)/Δt dla przedziału czasu.
3. Szybkość chwilowa to nachylenie stycznej do wykresu c(t).
4. Dla substratu Δc jest ujemne, dlatego bierzemy moduł albo stawiamy minus.
5. Współczynniki reakcji łączą szybkości różnych składników.
6. Gaz mierzymy w warunkach normalnych (1 mol = 22,4 dm³) albo przeliczamy wynik.
:::

## 1 | Wykład 1 — co to znaczy „szybko" {#wyklad}

::: karta understand | Wykład od zera
Pytanie na start: dlaczego jedna reakcja kończy się w ułamku sekundy, a inna trwa lata? Wrzuć kawałek magnezu do kwasu solnego: od razu pojawiają się pęcherzyki wodoru i metal szybko znika. Połóż zwykłe żelazo na deszczu: rdza narasta miesiącami. Obie reakcje prowadzą do produktów, ale różnią się **szybkością**, czyli tym, jak szybko zmienia się skład układu w czasie.

Szybkość reakcji to zmiana ilości substancji (zwykle stężenia) w jednostce czasu. Mierzymy ją przez to, jak zmienia się stężenie substratu, który ubywa, albo produktu, który przybywa. Stężenie to liczba moli substancji w jednym decymetrze sześciennym roztworu (mol/dm³). Jeśli stężenie substratu w ciągu 60 sekund spada z 0,40 do 0,10 mol/dm³, to średnio w każdej sekundzie ubywało 0,005 mol/dm³ tej substancji.

Od razu widać dwie rzeczy, które trzeba trzymać w głowie. Po pierwsze: szybkość mierzymy w czasie, więc zawsze pojawia się mianownik „sekunda” (albo minuta, godzina). Po drugie: szybkość nie mówi, ile produktu powstanie w końcu; mówi tylko, jak szybko do niego dochodzi. Dlatego reakcja szybka może mieć małą wydajność, a wolna — dużą. To rozróżnienie wróci w ciekawostkach i w klinice błędów.

Dlaczego szybkość się zmienia? Gdy substratów ubywa, rzadziej zderzają się one ze sobą, więc reakcja zwykle zwalnia. Najszybciej przebiega na początku, a pod koniec już wolno. Ta obserwacja jest kluczem do odczytywania wykresów: tam, gdzie krzywa jest bardziej stroma, reakcja przebiega szybciej.

Jak to zmierzyć? Wystarczy wybrać cechę, która zmienia się razem z reakcją: objętość wydzielającego się gazu, masę naczynia (gdy gaz ucieka), barwę roztworu, przewodnictwo elektryczne albo ciśnienie w zamkniętym naczyniu. Każdą z nich odczytujemy w kolejnych chwilach, notujemy w tabeli i rysujemy wykres. Taki pomiar jest podstawą całej kinetyki — nauki o szybkości reakcji.
:::

### 1.1 Mini-wykład: po co w ogóle mierzyć szybkość {#po-co}

::: karta understand | W skrócie: szybkość w przemyśle i w kuchni
Przemysł chemiczny płaci za czas: im szybciej reaktor przerabia substraty, tym więcej produktu z jednej instalacji. Dlatego inżynierowie mierzą szybkość i dobierają temperaturę, ciśnienie i katalizatory. W kuchni robimy to intuicyjnie: ciasto rośnie szybciej w cieple, a mleko psuje się szybciej w upale. Szybkość to więc nie tylko wielkość na kartce, ale narzędzie sterowania procesem.
:::

## 2 | Wykład 2 — szybkość średnia i jej wzór {#srednia}

### 2.1 Wzór i znak

Dla substancji, której ubywa (substrat), szybkość średnia w przedziale czasu od t₁ do t₂ to:

 v_śr = −Δc/Δt = −(c₂ − c₁)/(t₂ − t₁)

Znak minus jest potrzebny, bo Δc dla substratu jest ujemne (stężenie maleje). Dzięki temu szybkość wychodzi dodatnia. Dla produktu, którego przybywa, szybkość liczymy bez minusa: v_śr = +Δc/Δt. Szybkość reakcji jest wielkością dodatnią — jeśli wynik wyszedł ujemny, prawie na pewno zapomniałeś o znaku albo o tym, którą substancję liczysz.

::: karta core | Szybkość średnia — krok po kroku
1. Odczytaj stężenie na początku i na końcu przedziału czasu.
2. Oblicz Δc = c₂ − c₁ oraz Δt = t₂ − t₁ (w sekundach).
3. Podziel: v_śr = moduł(Δc) / Δt. Moduł daje wynik dodatni dla każdej substancji.
4. Zapisz jednostkę: mol/(dm³·s), czyli mol·dm⁻³·s⁻¹.
5. Sprawdź rząd wielkości: w typowych reakcjach szkolnych wynik jest rzędu 10⁻⁴–10⁻¹ mol/(dm³·s).
:::

### 2.2 Przykład liczbowy z tabelą

Przyjmijmy, że w zbiorniku zachodzi reakcja A → produkty, a stężenie A mierzymy co 20 sekund:

| t (s) | c(A) (mol/dm³) | Zmiana c od poprzedniego pomiaru (mol/dm³) | szybkość średnia w przedziale (mol/(dm³·s)) |
|---|---|---|---|
| 0 | 0,40 | — | — |
| 20 | 0,28 | −0,12 | 0,006 |
| 40 | 0,18 | −0,10 | 0,005 |
| 60 | 0,10 | −0,08 | 0,004 |

Każdy wiersz liczymy osobno: w przedziale 0–20 s |Δc| = 0,12, więc v = 0,12/20 = 0,006. W przedziale 20–40 s |Δc| = 0,10, więc v = 0,10/20 = 0,005. W przedziale 40–60 s |Δc| = 0,08, więc v = 0,08/20 = 0,004. Szybkość średnia spada z czasem, a jej malejący ciąg odbija wykres, który coraz słabiej opada.

Całkowita szybkość średnia w przedziale 0–60 s to 0,30/60 = 0,005 mol/(dm³·s). Ta liczba jest średnią z całej minuty i nie mówi nic o tym, co działo się na początku. Dlatego w zadaniach trzeba uważać, czy pytają o średnią, czy o chwilową.

### 2.3 Mini-wykład: szybkość średnia jako „wygładzony" obraz

::: karta understand | W skrócie: średnia to kompromis
Wyobraź sobie jazdę samochodem: licznik pokazuje w każdej sekundzie inną prędkość, ale po godzinie mówisz „jechałem średnio 80 km/h". To średnia z całego przedziału. Szybkość średnia w reakcji działa tak samo: wygładza przebieg. Gdy chcesz wiedzieć, co dzieje się teraz, potrzebujesz szybkości chwilowej.
:::

## 3 | Wykład 3 — szybkość chwilowa i nachylenie stycznej {#chwilowa}

### 3.1 Co to jest szybkość chwilowa

Szybkość chwilowa w punkcie t to szybkość zmiany stężenia dokładnie w tej chwili. Na wykresie stężenia substratu od czasu odpowiada ona nachyleniu stycznej do krzywej w punkcie t. Styczna to prosta, która dotyka krzywej w jednym miejscu i ma ten sam kierunek co krzywa w tym punkcie.

Nie trzeba znać rachunku różniczkowego, żeby z tego skorzystać. Na szkolnym wykresie rysujemy styczną ołówkiem i liczymy jej nachylenie jako stosunek przyrostów: wybieramy dwa punkty na stycznej, odczytujemy różnicę stężeń i różnicę czasu, i dzielimy. Pamiętaj tylko, że dla substratu nachylenie wyjdzie ujemne — przy szybkości bierzemy moduł.

### 3.2 Jak odczytać szybkość z wykresu

Wykres stężenia substratu zaczyna się wysoko i opada, z czasem coraz łagodniej. W punkcie początkowym krzywa jest najbardziej stroma, więc szybkość chwilowa jest największa. W miarę upływu czasu nachylenie maleje, aż krzywa prawie się wypłaszcza, gdy substratu już prawie nie ma.

Dla produktu sytuacja jest odwrotna: wykres idzie w górę, na początku najstromiej, a potem się wypłaszcza. Szybkość tworzenia produktu obliczamy tak samo jak szybkość zużywania substratu, tylko bez minusa.

::: karta core | Odczyt szybkości chwilowej z wykresu
1. Zaznacz punkt na krzywej dla żądanej chwili t.
2. Narysuj styczną w tym punkcie (prosta, która ledwo dotyka krzywej).
3. Wybierz dwa punkty na stycznej, daleko od siebie, i odczytaj Δc oraz Δt.
4. Oblicz moduł(Δc)/Δt. Wynik to szybkość chwilowa w chwili t.
5. Sprawdź, czy wynik jest mniejszy od szybkości początkowej (zwykle tak, gdy substratu ubywa).
:::

### 3.3 Mini-wykład: dlaczego reakcja zwalnia

::: karta understand | W skrócie: mniej substratu, mniej zderzeń
Im mniej cząsteczek substratu w tej samej objętości, tym rzadziej się one spotykają. Dlatego szybkość maleje, nawet gdy temperatura i katalizator pozostają takie same. Zależność od stężenia zapiszemy ilościowo dopiero przy równaniu kinetycznym (sekcja 8).
:::

::: karta adv | Dla ciekawych: szybkość chwilowa jako pochodna | poziom rozszerzony
Dla matematycznie ciekawych: szybkość chwilowa to granica ilorazu Δc/Δt, gdy Δt dąży do zera. Zapisujemy ją jako dc/dt. Na egzaminie wystarczy odczyt stycznej, ale ten zapis pojawi się w podręcznikach LO i w równaniu kinetycznym.
:::

## 4 | Wykład 4 — jednostki i przeliczanie {#jednostki}

Jednostka szybkości wynika z definicji: stężenie w mol/dm³ dzielone przez czas. Najczęściej w zadaniach spotkasz mol/(dm³·s). Jeśli czas podano w minutach, przelicz go na sekundy przed obliczeniem albo zapisz wynik w mol/(dm³·min) i wyraźnie to zaznacz.

Przykład przeliczenia: zmiana stężenia o 0,6 mol/dm³ w ciągu 2 minut to 0,6/120 = 0,005 mol/(dm³·s). Ta sama szybkość w mol/(dm³·min) wynosi 0,6/2 = 0,3 mol/(dm³·min). Obie wartości opisują to samo zjawisko, tylko w innych jednostkach.

::: karta warning | Pułapka: mieszanie minut i sekund
Najczęstszy błąd rachunkowy to podzielenie zmiany stężenia przez czas podany w minutach, a potem zapisanie wyniku jako mol/(dm³·s). Zawsze sprawdź, co jest w mianowniku. Jeśli nie jest to sekunda, przelicz.
:::

::: karta understand | W skrócie: różne zapisy w literaturze
Podręczniki i strony z zadaniami nie zawsze podają jednostkę w tym samym zapisie. Spotkasz mol/(dm³·s), mol·dm⁻³·s⁻¹, a przy stałych szybkości także min⁻¹ czy l·mol⁻¹·s⁻¹. To ten sam pomysł zapisany inaczej. W tej lekcji trzymamy się mol/(dm³·s).
:::

## 5 | Wykład 5 — stechiometria szybkości {#wspolczynniki}

### 5.1 Dlaczego współczynniki mają znaczenie

Dla reakcji ogólnej aA + bB → cC + dD szybkości zmiany stężeń są powiązane współczynnikami stechiometrycznymi. Jeśli na 1 mol produktu C zużywają się 2 mole substratu A, to w tej samej chwili substrat A ubywa dwa razy szybciej, niż produkt C przybywa. Dlatego szybkość zależy od tego, którą substancję wybieramy do obliczeń.

Aby porównać szybkości różnych składników w jednej reakcji, dzielimy każdą zmianę przez odpowiedni współczynnik. Dzięki temu dostajemy jedną wspólną wielkość, nazywaną szybkością reakcji.

### 5.2 Przykład

Reakcja 2A → B. Jeżeli szybkość tworzenia B wynosi 0,010 mol/(dm³·s), to szybkość ubywania A wynosi 2 · 0,010 = 0,020 mol/(dm³·s). Po podzieleniu przez współczynniki obie wielkości dają tę samą wartość szybkości reakcji: 0,020/2 = 0,010 mol/(dm³·s) dla A oraz 0,010/1 dla B.

::: karta understand | W skrócie: po co dzielić przez współczynnik
Dzielenie przez współczynnik sprowadza wszystkie szybkości do jednej wspólnej wielkości. Bez tego każdy składnik miałby własną „szybkość reakcji", a porównywanie różnych reakcji byłoby bezsensowne. Dzieląc przez współczynnik, mówimy: „ile razy reakcja zaszła w jednostce czasu".
:::

::: karta adv | Dla ciekawych: zapis z pochodnymi | poziom rozszerzony
Dla reakcji aA + bB → cC + dD zapisujemy szybkość reakcji jako v = −(1/a)·dc(A)/dt = −(1/b)·dc(B)/dt = (1/c)·dc(C)/dt = (1/d)·dc(D)/dt. Znak minus stoi przy substratach, bo ich stężenia maleją. Zapis z przykładu 2A → B jest szczególnym przypadkiem: v = −½·dc(A)/dt = dc(B)/dt.
:::

## 6 | Metody pomiaru szybkości {#pomiar}

Każda metoda pomiaru ma swoje ograniczenia. Gdy wydziela się gaz, masa układu maleje, bo gaz ucieka. Gdy powstaje osad, roztwór mętnieje i trudniej mierzyć barwę. Dlatego przy projektowaniu doświadczenia wybieramy cechę, która jest proporcjonalna do przebiegu reakcji i łatwa do odczytania.

| Metoda | Co mierzymy | Przykład reakcji | Kiedy stosować |
|---|---|---|---|
| Objętość gazu | Objętość wydzielonego gazu w stałej temperaturze i ciśnieniu | Mg + 2HCl → MgCl₂ + H₂↑ | reakcje z wydzielaniem gazu |
| Masa układu | Ubytek masy, gdy gaz ucieka z otwartego naczynia | CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ | gdy gaz ucieka, a naczynie stoi na wadze |
| Barwa roztworu | Zmiana intensywności barwy | reakcje z udziałem jodu | reakcje zmieniające kolor |
| Przewodnictwo | Zmiana liczby jonów w roztworze | reakcje tworzące lub zużywające jony | reakcje w roztworach wodnych |
| Ciśnienie | Ciśnienie w zamkniętym naczyniu | reakcje gazowe przy stałej objętości | układy gazowe |
| pH | Zmiana stężenia jonów H⁺ | reakcje z udziałem kwasów lub zasad | roztwory o zmiennym odczynie |

Metody pobierania próbek są inne: w stałej temperaturze pobieramy porcje mieszaniny, zatrzymujemy w nich reakcję (np. szybkim ochłodzeniem) i oznaczamy stężenie, np. miareczkowaniem. Podobnie działa pomiar absorpcji światła w spektrofotometrze. Źródło tej listy podajemy w sekcji „Źródła” na końcu lekcji.

### 6.1 Pomiar objętości gazu — opis doświadczenia

Probówkę z roztworem kwasu solnego łączymy wężykiem z cylindrem wypełnionym wodą, odwróconym do góry dnem. Do kwasu dodajemy kawałek magnezu i szybko zatykamy probówkę. Wydzielający się wodór wypiera wodę z cylindra; co kilkanaście sekund notujemy objętość gazu. Po przeliczeniu objętości na liczbę moli i uwzględnieniu stechiometrii odczytujemy zmianę ilości magnezu lub kwasu.

Ważne: objętość gazu zależy od temperatury i ciśnienia, dlatego pomiar robimy w tych samych warunkach albo przeliczamy wynik do warunków normalnych (0 °C, 1013 hPa, gdzie 1 mol gazu zajmuje 22,4 dm³). Gdy tego nie zrobisz, wyniki z kolejnych prób będą niespójne.

::: karta warning | BHP przy pomiarach z gazami i kwasami
Kwas solny jest żrący, więc pracujemy w okularach i rękawicach. Wodór jest łatwopalny, więc nie zbliżamy do niego płomienia. Gdy reakcja wydziela CO₂, pracujemy w dobrze wentylowanym pomieszczeniu. Układ z zatyczką nie może być całkowicie szczelny podczas wydzielania gazu, bo może pęknąć.
:::

### 6.2 Pomiar ubytku masy — opis doświadczenia

Kolbkę z węglanem wagę pokazuje na początku. Dodajemy kwas i co kilkanaście sekund odczytujemy masę. Ubytek masy odpowiada gazowi, który uciekł (CO₂). Metoda jest prosta, ale gdy gaz ucieka zbyt szybko, wynik jest obarczony błędem. Dlatego w doświadczeniu szkolnym warto zapisać kilka prób i porównać przebieg.

::: karta understand | Mini-wykład: po co powtarzać pomiar
Pojedynczy pomiar jest jak jedna fotografia. Gdy powtórzysz doświadczenie kilka razy i wyniki będą się różnić o kilka procent, wiesz, że błąd jest rzędu kilku procent. Powtarzanie pomiaru to sposób na uczciwą ocenę, jak bardzo możesz ufać swojej liczbie.
:::

## 7 | Przykłady obliczeniowe krok po kroku {#przyklady}

Każdy przykład rozwiąż najpierw sam, zanim zajrzysz do rozwiązania. Przed każdym krokiem zatrzymaj się i zapytaj: co zrobię i dlaczego? Po rozwiązaniu wyjaśnij własnymi słowami, dlaczego wynik ma taki znak i jednostkę.

### 7.1 Przykład 1 — szybkość średnia z kilku pomiarów

Stężenie substancji A w reakcji A → produkty mierzono w kolejnych chwilach: t = 0 s, c = 0,50 mol/dm³; t = 30 s, c = 0,35 mol/dm³; t = 90 s, c = 0,05 mol/dm³. Oblicz szybkość średnią w przedziale 0–30 s, 30–90 s i 0–90 s.

::: karta core | Rozwiązanie krok po kroku
Krok 1. Dla przedziału 0–30 s oblicz |Δc| i Δt. Co wychodzi? (Odpowiedź: |Δc| = 0,15 mol/dm³, Δt = 30 s.)
Krok 2. Podziel: v = 0,15/30 = 0,0050 mol/(dm³·s).
Krok 3. Powtórz dla 30–90 s: |Δc| = 0,30, Δt = 60 s, v = 0,30/60 = 0,0050 mol/(dm³·s).
Krok 4. Dla 0–90 s: |Δc| = 0,45, Δt = 90 s, v = 0,45/90 = 0,0050 mol/(dm³·s).
Pytanie do przemyślenia: dlaczego wszystkie trzy wyniki są równe? To dane wyjątkowe — w prawdziwej reakcji szybkość średnia zwykle maleje z czasem.
:::

### 7.2 Przykład 2 — porównanie dwóch przedziałów

Stężenie B: w chwili 0 s wynosi 1,00 mol/dm³, w chwili 20 s wynosi 0,80 mol/dm³, w chwili 60 s wynosi 0,40 mol/dm³. Porównaj szybkości średnie w przedziałach 0–20 s i 20–60 s.

::: karta core | Rozwiązanie krok po kroku
Krok 1. Przedział 0–20 s: |Δc| = 0,20, v = 0,20/20 = 0,010 mol/(dm³·s).
Krok 2. Przedział 20–60 s: |Δc| = 0,40, Δt = 40 s, v = 0,40/40 = 0,010 mol/(dm³·s).
Krok 3. Wyjaśnij własnymi słowami: dlaczego w drugim przedziale spadek stężenia był dwa razy większy, a szybkość taka sama? (Odpowiedź: czas trwania przedziału był też dwa razy dłuższy.)
:::

### 7.3 Przykład 3 — z szybkości produktu do szybkości substratu

Reakcja 3A → 2C. Szybkość tworzenia C w pewnym przedziale wynosi 0,024 mol/(dm³·s). Oblicz szybkość ubywania A w tym samym przedziale.

::: karta core | Rozwiązanie krok po kroku
Krok 1. Z równania: na 2 mole C zużywa się 3 mole A. Stosunek szybkości ubywania A do tworzenia C wynosi 3/2.
Krok 2. Oblicz: (3/2) · 0,024 = 0,036 mol/(dm³·s) co do wartości bezwzględnej. Ze znakiem minus jako zmiana stężenia substratu.
Krok 3. Wyjaśnij, dlaczego A nie może mieć szybkości równej szybkości C. (Odpowiedź: współczynniki stechiometryczne są różne.)
:::

### 7.4 Przykład 4 — szybkość wydzielania gazu (warunki normalne)

W doświadczeniu z magnezem zebrano 120 cm³ wodoru w czasie 60 s, w warunkach normalnych, w których 1 mol gazu zajmuje 22,4 dm³. Oblicz szybkość wydzielania wodoru w mol/s.

::: karta core | Rozwiązanie krok po kroku
Krok 1. Zamień jednostki: 120 cm³ = 0,120 dm³.
Krok 2. Oblicz liczbę moli: n = 0,120/22,4 ≈ 0,00536 mol.
Krok 3. Podziel przez czas: 0,00536/60 ≈ 0,000089 mol/s.
Krok 4. Wyjaśnij, czego ta szybkość dotyczy. (Odpowiedź: tworzenia wodoru, a nie zmiany stężenia w roztworze, więc nie porównujemy jej wprost z tabelą c(t) bez przeliczenia.)
:::

::: karta warning | Uwaga przy objętości gazu
Objętość gazu zależy od warunków. Ta sama liczba moli zajmuje inną objętość w innej temperaturze i przy innym ciśnieniu. W zadaniach szkolnych podaje się zwykle warunki normalne (22,4 dm³/mol) albo jednoznacznie określoną objętość molową.
:::

## 8 | Wstęp do równania kinetycznego (LO) {#kinetyczne}

::: karta adv | Rozszerzenie LO — równanie kinetyczne | poziom rozszerzony
Dla wielu reakcji szybkość zależy od stężeń substratów. Zapisujemy to równaniem kinetycznym: v = k · [A]ᵐ · [B]ⁿ, gdzie k to stała szybkości, a wykładniki m i n to rzędy reakcji względem substancji A i B. Wykładniki nie wynikają z współczynników w równaniu reakcji, tylko z doświadczenia.

Dla reakcji pierwszego rzędu względem A szybkość jest proporcjonalna do stężenia A: v = k · [A]. Szczegóły zostawiamy na późniejszą część kursu; tutaj wystarczy wiedzieć, że równanie kinetyczne łączy szybkość z ilością substratów.
:::

## 9 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Szybkość = ΔH | Szybkość to kinetyka (jak szybko), ΔH to energetyka (ile energii) | Dwie różne wielkości; reakcja może być szybka i egzotermiczna albo wolna i endotermiczna |
Szybkość dla substratu bez modułu lub znaku | v = −Δc/Δt albo moduł(Δc)/Δt | Stężenie substratu maleje, więc Δc jest ujemne |
Szybkość w chwili liczona jak średnia | Dla chwili t bierzemy nachylenie stycznej | Średnia obejmuje przedział, chwilowa jeden punkt |
Mieszanie minut i sekund | Przelicz czas na sekundy przed obliczeniem | Wynik w mol/(dm³·min) jest inny niż w mol/(dm³·s) |
Porównanie samych Δc | Dziel przez czas przedziału | Dwa przedziały o różnych Δt mogą mieć tę samą szybkość |
Szybkość produktu bez współczynnika | Uwzględnij współczynniki stechiometryczne | Substrat i produkt zmieniają się w różnym tempie |
Objętość gazu bez warunków | Podaj temperaturę i ciśnienie lub przelicz do warunków normalnych | Ta sama liczba moli zajmuje różną objętość |
:::

::: karta warning | Mit: Reakcja, która jest szybka, daje dużo produktu.
Szybkość mówi o tempie, wydajność o ilości produktu. Szybka reakcja może mieć małą wydajność i odwrotnie.
:::

::: karta warning | Mit: Szybkość reakcji to jednostka stężenia.
To stężenie podzielone przez czas: mol/(dm³·s).
:::

::: karta warning | Mit: Wynik ujemny znaczy, że reakcja biegnie wstecz.
Ujemny wynik zwykle oznacza pominięcie minusa przy Δc substratu. Zwrot reakcji to temat równowagi (K08).
:::

::: karta warning | Mit: Katalizator zmienia szybkość przez zmianę wyniku końcowego.
Katalizator przyspiesza reakcję, ale wydajność równowagowa się nie zmienia (K07).
:::

## 10 | Mnemotechniki {#mnemotechniki}

::: karta understand | Sposoby pamięciowe
Ubywa — minus, przybywa — plus. Zapamiętaj: znak minus dla substratu, który się zużywa; bez minusa dla produktu, który powstaje.
Mianownik to zawsze czas. Jednostka szybkości zaczyna się od stężenia, a kończy na sekundzie: mol/(dm³·s). Jeśli czas jest w minutach, zatrzymaj się i przelicz.
Współczynnik dzieli, nie mnoży. Przy 2A → B szybkość ubywania A dzielimy przez 2, by porównać ją z szybkością B.
:::

## 11 | Ćwiczenia {#cwiczenia}

::: karta exam | Zadanie 1 (2 pkt) — szybkość średnia
Stężenie substancji A w reakcji A → produkty spadło z 0,40 mol/dm³ do 0,10 mol/dm³ w czasie 60 s. Oblicz szybkość średnią tej reakcji i podaj jednostkę.
::: odp | Pokaż klucz
v_śr = moduł(Δc)/Δt = (0,40 − 0,10)/60 = 0,30/60 = 0,005. Jednostka: mol/(dm³·s). (1 pkt za wynik, 1 pkt za jednostkę)
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

::: karta exam | Zadanie 4 (3 pkt) — przeliczanie jednostek
W pewnym przedziale stężenie substratu zmniejszyło się o 0,18 mol/dm³ w ciągu 3 minut. Oblicz szybkość średnią w mol/(dm³·min) i w mol/(dm³·s).
::: odp | Pokaż klucz
W mol/(dm³·min): 0,18/3 = 0,060 mol/(dm³·min). W mol/(dm³·s): czas 3 min = 180 s, więc 0,18/180 = 0,0010 mol/(dm³·s). Sprawdzenie: 0,060/60 = 0,0010. (1 pkt za wynik w min, 1 pkt za przeliczenie czasu, 1 pkt za wynik w s)
:::
:::

::: karta exam | Zadanie 5 (3 pkt) — z tabeli do wniosku
Dane pomiarowe dla reakcji D → E: t = 0 s, c(D) = 0,80; t = 10 s, c(D) = 0,60; t = 20 s, c(D) = 0,45; t = 30 s, c(D) = 0,35 (mol/dm³). Oblicz szybkość średnią w każdym z trzech przedziałów i sformułuj wniosek o zmianie szybkości w czasie.
::: odp | Pokaż klucz
0–10 s: 0,20/10 = 0,020; 10–20 s: 0,15/10 = 0,015; 20–30 s: 0,10/10 = 0,010 mol/(dm³·s). Wniosek: szybkość maleje w czasie, bo kolejne przedziały dają coraz mniejsze wartości. (1 pkt za każdy przedział, 1 pkt za wniosek)
:::
:::

::: karta exam | Zadanie 6 (3 pkt) — pomiar gazu w warunkach normalnych
W doświadczeniu zebrano w czasie 40 s objętość H₂ równą 56 cm³ (warunki normalne, 1 mol = 22,4 dm³). Oblicz liczbę moli H₂ i szybkość wydzielania w mol/s. Zapisz, czego ta szybkość dotyczy.
::: odp | Pokaż klucz
56 cm³ = 0,056 dm³; n = 0,056/22,4 = 0,0025 mol. Szybkość: 0,0025/40 = 0,0000625 mol/s, czyli 6,25 · 10⁻⁵ mol/s. Dotyczy wydzielania wodoru (tworzenia produktu), a nie zmiany stężenia substratu w roztworze. (1 pkt za moli, 1 pkt za szybkość, 1 pkt za interpretację)
:::
:::

### 11.1 Zadanie transferowe — szybkość w nowym kontekście

::: karta exam | Zadanie 7 (4 pkt) — tabletka musująca
Tabletkę musującą wrzucono do wody i zmierzono objętość wydzielonego CO₂ w warunkach normalnych: po 20 s — 0,224 dm³, po 40 s — 0,336 dm³, po 60 s — 0,392 dm³. Oblicz liczbę moli CO₂ po 60 s, szybkość średnią wydzielania w każdym z przedziałów 0–20 s, 20–40 s i 40–60 s, a potem wyjaśnij, czy szybkość rośnie, czy maleje, i dlaczego może tak być.
::: odp | Pokaż klucz
Po 60 s: n = 0,392/22,4 = 0,0175 mol. Przedziały (w mol/s): 0–20 s: 0,224/22,4 = 0,0100 mol, czyli 0,0100/20 = 0,00050 mol/s; 20–40 s: (0,336 − 0,224)/22,4 = 0,0050 mol, czyli 0,00025 mol/s; 40–60 s: (0,392 − 0,336)/22,4 = 0,0025 mol, czyli 0,000125 mol/s. Wniosek: szybkość maleje, bo substrat się zużywa. (1 pkt za moli, 1 pkt za każdy przedział po ½ pkt, 1 pkt za wniosek i uzasadnienie)
:::
:::

## 12 | Test {#test}

::: test
? Jednostka szybkości reakcji, gdy stężenia podajemy w mol/dm³, a czas w sekundach, to:
+ mol/(dm³·s)
- mol/dm³
- s/mol
- dm³/(mol·s)
! Szybkość to zmiana stężenia w czasie, więc jednostka to stężenie podzielone przez czas.
? Dla substratu Δc jest ujemne, więc szybkość średnią liczymy tak, że:
+ stosujemy moduł albo minus przed Δc, bo stężenie substratu maleje
- bierzemy Δc bez zmian, bo wynik ma być ujemny
- dzielimy przez stężenie zamiast przez czas
- zakładamy, że Δc zawsze rośnie
! Bez minusa lub modułu wynik dla substratu wyszedłby ujemny, a szybkość jest wielkością dodatnią.
? Na wykresie stężenia substratu od czasu nachylenie stycznej w chwili t mówi o:
+ szybkości chwilowej w tej chwili
- szybkości średniej w całym przedziale
- wydajności reakcji
- masie produktu
! Styczna opisuje lokalną zmianę stężenia, czyli szybkość chwilową.
? W reakcji 2A → B szybkość tworzenia B wynosi 0,010 mol/(dm³·s). Szybkość ubywania A wynosi:
+ 0,020 mol/(dm³·s) co do wartości bezwzględnej
- 0,005 mol/(dm³·s)
- 0,010 mol/(dm³·s) bez zmian
- 0,040 mol/(dm³·s)
! Na 1 mol B zużywa się 2 mole A, więc A ubywa dwa razy szybciej.
? Przy wydzielaniu gazu w warunkach normalnych 0,224 dm³ CO₂ to:
+ 0,010 mol
- 0,224 mol
- 0,0022 mol
- 0,100 mol
! n = V/22,4 = 0,224/22,4 = 0,010 mol. Warunki normalne podają objętość molową 22,4 dm³/mol.
:::

## 13 | Słownik {#slownik}

::: slownik
Szybkość reakcji :: zmiana stężenia reagenta lub produktu w jednostce czasu
Szybkość średnia :: moduł(Δc)/Δt w danym przedziale czasu
Szybkość chwilowa :: szybkość w ustalonej chwili, równa nachyleniu stycznej do wykresu c(t)
Wykres stężenie–czas :: zależność stężenia od czasu, z której odczytujemy szybkość
Styczna :: prosta dotykająca krzywej w jednym punkcie, o tym samym kierunku co krzywa w tym punkcie
Jednostka szybkości :: mol/(dm³·s) (w tej lekcji)
Metoda pomiaru :: sposób odczytu zmiany układu, np. objętości gazu lub barwy roztworu
Substrat :: substancja, która się zużywa w reakcji
Produkt :: substancja, która powstaje w reakcji
Stechiometria szybkości :: związek szybkości różnych składników reakcji przez współczynniki
Równanie kinetyczne :: zależność szybkości od stężeń substratów, v = k[A]ᵐ[B]ⁿ (rozszerzenie LO)
Stała szybkości k :: współczynnik proporcjonalności w równaniu kinetycznym
Wydajność :: ilość produktu w stanie końcowym, niezależna od tego, jak szybko powstał
Warunki normalne :: 0 °C i 1013 hPa, w których 1 mol gazu zajmuje 22,4 dm³
:::

## 14 | Fiszki {#fiszki}

::: fiszki
Czym jest szybkość reakcji? | Zmiana stężenia reagenta w jednostce czasu | basic:kinetyka
Jaki wzór ma szybkość średnia? | v_śr = moduł(Δc)/Δt | basic:kinetyka
Jaka jest jednostka szybkości? | mol/(dm³·s) | basic:kinetyka
Czym różni się szybkość chwilowa od średniej? | Chwilowa to jeden punkt (styczna), średnia to przedział | understand:kinetyka
Co oznacza nachylenie stycznej na wykresie c(t)? | Szybkość chwilową reakcji | understand:kinetyka
Dlaczego szybkość substratu ma znak minus? | Bo stężenie substratu maleje, więc Δc < 0 | understand:kinetyka
Jak zmienia się szybkość w miarę zużywania substratów? | Zwykle maleje | basic:kinetyka
Co mierzymy przy wydzielaniu gazu? | Objętość gazu lub ubytek masy | basic:pomiar
Co zmienia się w reakcji jodowego zegara? | Barwa roztworu (pojawia się granatowa) | extra:pomiar
Jak przeliczyć minuty na sekundy? | Mnożymy przez 60 | basic:kinetyka
Co wynika ze współczynników? | Szybkość zmiany substratu zależy od jego współczynnika | understand:stechiometria
Czym jest szybkość a wydajność? | Szybkość mówi jak szybko, wydajność ile produktu w końcu | understand:kinetyka
Dlaczego porównujemy szybkości przez czas, nie przez Δc? | Bo dwa przedziały o różnych Δt mogą mieć tę samą szybkość | understand:kinetyka
Jaka objętość zajmuje 1 mol gazu w warunkach normalnych? | 22,4 dm³ | basic:pomiar
Co to styczna? | Prosta dotykająca krzywej w jednym punkcie | basic:kinetyka
Czym jest stała szybkości k? | Współczynnikiem w równaniu kinetycznym v = k[A]ᵐ[B]ⁿ | adv:kinetyka
:::

## 15 | Mosty {#mosty}

- Przed tą lekcją: R05 (stężenia i obliczenia z nimi).
- Dalej: K05 (czynniki: stężenie, temperatura, rozdrobnienie), K06 (zderzenia i energia aktywacji), K08 (równowaga dynamiczna: szybkość w przód i wstecz).

## 16 | Ciekawostki {#ciekawostki}

::: karta extra | Reakcja zegarowa
W reakcji jodowego zegara roztwór po chwili nagle zmienia barwę z bezbarwnej na granatową. Przyczyną jest utworzony jod, który reaguje ze skrobią. Dodając tiosiarczan sodu, opóźniamy moment zmiany barwy o czas proporcjonalny do ilości użytego reagenta. Szkolny pokaz zamienia się w pomiar szybkości.
:::

::: karta extra | Rdza jako reakcja, którą widzimy po latach
Rdzewienie żelaza to reakcja utleniania z tlenem i wodą, ale w temperaturze pokojowej przebiega bardzo wolno. Stalowe konstrukcje stoją dekady, zanim zauważymy zmiany. W wilgotnym, słonym powietrzu szybkość rośnie, bo woda i sól przyspieszają reakcje elektrochemiczne.
:::

::: karta extra | Lodówka to kinetyka
Dlaczego żywność w lodówce psuje się wolniej? Niższa temperatura zmniejsza szybkość reakcji i procesów rozkładu, które wywołują bakterie i enzymy. Ta sama zasada działa w odwrotną stronę: po podgrzaniu produkty psują się szybciej.
:::

::: karta extra | Szybkość a wydajność w praktyce
Reakcja może być bardzo szybka, a mieć małą wydajność (gdy ustala się równowaga), i odwrotnie: wolna reakcja może dać wysoką wydajność, jeśli będzie dość czasu. Dlatego przemysł osobno optymalizuje szybkość (temperatura, katalizator) i wydajność (ciśnienie, usuwanie produktu).
:::

## Źródła

- Uniwersytet Medyczny w Białymstoku, materiał „Kinetyka chemiczna — teoria” (plik PDF, zakład chemii fizycznej): definicje średniej i chwilowej szybkości, wzory dla substratu i produktu, zapis z pochodną, zależność od współczynników stechiometrycznych, metody pobierania próbek i pomiaru absorpcji. Sprawdzone wyszukiwaniem i odczytem: https://www.umb.edu.pl/photo/pliki/WF_jednostki/zaklad-chemii-fizycznej/kinetyka_chemiczna_teoria.pdf
- Do uzupełnienia przy W1 FULL: wpis Khan Academy lub Wikipedia dotyczący szybkości reakcji (nie udało się otworzyć strony w tej wersji) oraz arkusz CKE z zadaniami o szybkości.

