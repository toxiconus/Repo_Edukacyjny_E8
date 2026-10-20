***
kod: K04
tytul: Szybkość reakcji
opis: szybkość reakcji · szybkość średnia · szybkość chwilowa · wykres stężenie–czas · jednostki szybkości · stechiometria szybkości · metody pomiaru · wpływ temperatury · wpływ stężenia · wpływ powierzchni kontaktu · katalizator · wstęp do równania kinetycznego
uid: CHE.07.K04.szybkosc_reakcji
kicker: K04 · CHEMIA · Kinetyka · NOWA WERSJA · SZKOŁA / KONKURS
lead: Dlaczego jedna reakcja kończy się w ułamku sekundy, a inna trwa lata? Odpowiedź leży w szybkości — czyli w tym, jak szybko zmienia się skład układu w czasie. Ta lekcja uczy ją mierzyć, odczytywać z wykresu i przeliczać.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE]][[extra:LO]]
uwaga: Plakietka E8 oznacza podstawową warstwę kursu, nie zakres egzaminu ósmoklasisty z chemii. Szybkość reakcji jest wielkością dodatnią. Dla substratów stężenie maleje, dla produktów rośnie, dlatego w obliczeniach stosuje się wartość bezwzględną zmiany stężenia. Równanie kinetyczne przedstawiono jako wstęp; jego pełne zastosowanie wymaga danych doświadczalnych.
stopka: CHEMIA K04 · Szybkość reakcji · Materiał do samodzielnej nauki · 2026
stan: ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia
***

::: minimum | Muszę umieć — 10 punktów
1. Definiuję szybkość reakcji jako zmianę stężenia substratu lub produktu w jednostce czasu.
2. Obliczam szybkość średnią ze wzoru v = Δc/Δt, stosując wartość bezwzględną zmiany stężenia.
3. Odczytuję szybkość średnią z tabeli pomiarowej oraz z wykresu stężenie–czas.
4. Rozróżniam szybkość średnią na odcinku czasu od szybkości chwilowej w danym momencie.
5. Podaję jednostki szybkości reakcji, na przykład mol/(dm³·s).
6. Łączę szybkości zaniku substratów i powstawania produktów ze współczynnikami stechiometrycznymi równania.
7. Wskazuję czynniki wpływające na szybkość reakcji: stężenie, temperaturę, powierzchnię kontaktu, katalizator oraz — dla reakcji gazowych — ciśnienie.
8. Wyjaśniam, że zwiększenie temperatury zwiększa energię cząsteczek i liczbę zderzeń skutecznych.
9. Wyjaśniam, że katalizator obniża energię aktywacji, ale nie zmienia równania reakcji ani jej bilansu energetycznego.
10. Zapisuję wstępne równanie kinetyczne dla reakcji jednosubstratowej: v = k·[A]ⁿ, gdzie k to stała szybkości, a n rząd reakcji względem A.
:::

::: warstwy
- e8 | <b>Podstawa:</b> pojęcie szybkości reakcji, szybkość średnia, odczyt z tabeli i wykresu, czynniki wpływające na szybkość oraz proste przykłady.
- understand | <b>Rozumienie:</b> dlaczego dla substratu stężenie maleje, a dla produktu rośnie, dlaczego szybkość jest dodatnia oraz jak stechiometria łączy szybkości różnych substancji.
- extra | <b>Poziom rozszerzony:</b> szybkość chwilowa, jednostki, stechiometria szybkości oraz wstęp do równania kinetycznego.
- contest | <b>Konkurs:</b> analiza wykresów, porównywanie szybkości w różnych momentach, projektowanie doświadczeń, wpływ warunków oraz granice wnioskowania z jednego pomiaru.
- extra | <b>Ambitne:</b> teoria zderzeń, energia aktywacji, katalizator, rząd reakcji oraz różnica między szybkością chwilową a średnią.
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
- [§1](#wyklad) — Wykład od zera: co to znaczy, że reakcja jest szybka.
- [§2](#srednia-chwilowa) — Szybkość średnia i chwilowa.
- [§3](#stechiometria) — Stechiometria szybkości reakcji.
- [§4](#czynniki) — Czynniki wpływające na szybkość.
- [§5](#kinetyka) — Wstęp do równania kinetycznego.
- [§6](#przyklady) — Przykłady prowadzone.
- [§7](#klinika) — Klinika błędów.
- [§8](#cwiczenia) — Ćwiczenia z kluczem.
- [§9](#slownik) — Słownik.
- [§10](#test) — Test końcowy.
- [§11](#checklista) — Checklista.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

Ta lekcja uczy, jak mierzyć i opisywać szybkość reakcji. Po jej przejściu umiesz:

- obliczyć szybkość średnią z tabeli;
- odczytać szybkość chwilową z wykresu;
- przeliczyć jednostki;
- powiązać szybkości różnych substancji ze współczynnikami reakcji;
- wyjaśnić wpływ warunków na tempo przemiany.

Kolejność pracy:

1. Zacznij od diagnozy w [§0.4](#diagnoza). Odpowiedz samodzielnie, a dopiero potem sprawdź klucz.
2. Przeczytaj wykład w [§1](#wyklad). Obraz przewodni to zderzenia cząsteczek: nie każde zderzenie prowadzi do reakcji.
3. W [§2](#srednia-chwilowa) rozwiąż przykłady szybkości średniej i chwilowej. Zwróć uwagę na znak zmiany stężenia.
4. W [§3](#stechiometria) połącz szybkości substratów i produktów ze współczynnikami równania.
5. W [§4](#czynniki) przeanalizuj wpływ warunków. Nie myl wpływu temperatury z wpływem katalizatora.
6. Równanie kinetyczne w [§5](#kinetyka) traktuj jako wstęp. Rząd reakcji ustala się na podstawie danych doświadczalnych, nie na podstawie współczynników równania.

Przydatne wcześniej: reakcja jako zjawisko z F03 i F16, równanie reakcji oraz substraty i produkty z F17, energia aktywacji z K01, stężenie i jednostki stężeń.

## 0.2 | Cele i pytanie przewodnie {#cele}

Pytanie przewodnie: **Jak zmierzyć, opisać i przewidzieć tempo przemiany chemicznej?**

Po tej lekcji potrafisz:

- zdefiniować szybkość reakcji;
- obliczyć szybkość średnią;
- odczytać szybkość chwilową z wykresu;
- powiązać szybkości substratów i produktów;
- wyjaśnić wpływ temperatury, stężenia, powierzchni kontaktu i katalizatora.

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- **Reakcja jako zjawisko** — F03, F16.
- **Równanie reakcji, substraty i produkty** — F17.
- **Stężenie i jednostki stężeń** — J01.
- **Energia aktywacji i katalizator** — K01.
- **Temperatura jako miara ruchu cząsteczek** — przyroda, fizyka.
- **Wykresy i odczyt danych** — matematyka.

## 0.4 | Diagnoza startowa {#diagnoza}

Odpowiedz najpierw samodzielnie.

1. Co to jest szybkość reakcji?
2. Jak oblicza się szybkość średnią?
3. Jaka jest jednostka szybkości, jeżeli stężenie podaje się w mol/dm³, a czas w sekundach?
4. Co się dzieje ze stężeniem substratu podczas reakcji?
5. Jak katalizator wpływa na szybkość reakcji?

::: odp | Klucz diagnozy i interpretacja
1. (1 pkt) Szybkość reakcji to zmiana stężenia substratu lub produktu w jednostce czasu.

2. (1 pkt) v = Δc/Δt, przy czym dla substratu stosuje się wartość bezwzględną zmiany stężenia.

3. (1 pkt) mol/(dm³·s).

4. (1 pkt) Stężenie substratu maleje.

5. (1 pkt) Katalizator zwiększa szybkość reakcji, między innymi przez obniżenie energii aktywacji.

Interpretacja wyniku: 5 pkt — przejdź do przykładów; 3–4 pkt — przeczytaj punkty 2 i 3; 0–2 pkt — zacznij od rdzenia.
:::

## 0.5 | Przypomnienie z poprzedniej lekcji

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

## 1 | Wykład — co to znaczy, że reakcja jest szybka? {#wyklad} [[basic:E8]]

Niektóre reakcje zachodzą niemal natychmiast. Inne trwają sekundy, godziny, lata, a nawet dłużej. Rdzewienie żelaza może trwać miesiącami, spalanie magnezu — ułamki sekundy, a wytrącanie osadu po zmieszaniu odpowiednich roztworów często zachodzi bardzo szybko.

**Szybkość reakcji** opisuje, jak szybko zmienia się skład układu w czasie. W najprostszym przypadku mierzy się zmianę stężenia jednego substratu albo jednego produktu.

Dla substratu A:

v = −Δ[A]/Δt

Stężenie substratu maleje, więc Δ[A] jest ujemne. Znak minus sprawia, że szybkość v pozostaje dodatnia.

Dla produktu B:

v = Δ[B]/Δt

Stężenie produktu rośnie, więc Δ[B] jest dodatnie. Szybkość również pozostaje dodatnia.

W praktyce często zapisuje się:

v = |Δc|/Δt

gdzie Δc to zmiana stężenia, a Δt — zmiana czasu.

Jednostka szybkości zależy od jednostek stężenia i czasu. Jeżeli stężenie podajemy w mol/dm³, a czas w sekundach, to:

v = mol/(dm³·s)

Obraz przewodni lekcji to zderzenia cząsteczek. Aby reakcja mogła zajść, cząsteczki muszą się zderzyć z odpowiednią energią i odpowiednim ustawieniem. Nie każde zderzenie jest skuteczne.

Zwiększenie stężenia oznacza więcej cząsteczek w tej samej objętości, więc zderzenia występują częściej. Zwiększenie temperatury zwiększa energię cząsteczek, więc większa liczba zderzeń ma wystarczającą energię, aby pokonać barierę energetyczną.

Katalizator działa inaczej. Nie zwiększa energii cząsteczek, lecz obniża barierę energetyczną — energię aktywacji. Dzięki temu więcej zderzeń prowadzi do reakcji.

Szybkość reakcji nie jest stała przez cały czas. Na początku, gdy substratów jest dużo, reakcja może przebiegać szybko. W miarę zużywania substratu szybkość zwykle maleje. Dlatego rozróżnia się szybkość średnią i szybkość chwilową.

::: karta understand | W skrócie — szybkość w jednym zdaniu
Szybkość reakcji to tempo zmiany stężenia substratu lub produktu w czasie. Dla substratu stężenie maleje, dla produktu rośnie, a szybkość zawsze zapisujemy jako liczbę dodatnią.
:::

::: karta core | Najważniejsze — zderzenia i bariera
Reakcja zachodzi, gdy cząsteczki zderzą się z odpowiednią energią i ustawieniem. Stężenie, temperatura, powierzchnia kontaktu i katalizator wpływają na liczbę skutecznych zderzeń.
:::

::: karta warning | Uwaga — szybkość nie jest stała
Szybkość reakcji zwykle maleje w miarę zużywania substratu. Dlatego nie należy przypisywać jednej wartości szybkości całej reakcji bez podania przedziału czasu albo momentu pomiaru.
:::

## 1a | Jednostki i przeliczanie

Jednostka szybkości wynika z definicji: stężenie w mol/dm³ dzielone przez czas. Najczęściej w zadaniach spotkasz mol/(dm³·s). Jeśli czas podano w minutach, przelicz go na sekundy przed obliczeniem albo zapisz wynik w mol/(dm³·min) i wyraźnie to zaznacz.

Przykład przeliczenia: zmiana stężenia o 0,6 mol/dm³ w ciągu 2 minut to 0,6/120 = 0,005 mol/(dm³·s). Ta sama szybkość w mol/(dm³·min) wynosi 0,6/2 = 0,3 mol/(dm³·min). Obie wartości opisują to samo zjawisko, tylko w innych jednostkach.

::: karta warning | Pułapka: mieszanie minut i sekund
Najczęstszy błąd rachunkowy to podzielenie zmiany stężenia przez czas podany w minutach, a potem zapisanie wyniku jako mol/(dm³·s). Zawsze sprawdź, co jest w mianowniku. Jeśli nie jest to sekunda, przelicz.
:::

::: karta understand | W skrócie: różne zapisy w literaturze
Podręczniki i strony z zadaniami nie zawsze podają jednostkę w tym samym zapisie. Spotkasz mol/(dm³·s), mol·dm⁻³·s⁻¹, a przy stałych szybkości także min⁻¹ czy l·mol⁻¹·s⁻¹. To ten sam pomysł zapisany inaczej. W tej lekcji trzymamy się mol/(dm³·s).
:::

## 2 | Szybkość średnia i chwilowa {#srednia-chwilowa} [[understand:ROZUMIENIE]] [[extra:LO]]

**Szybkość średnia** opisuje zmianę stężenia na określonym odcinku czasu:

v(średnia) = |Δc|/Δt

Przykład: jeżeli stężenie substratu spadło z 0,80 mol/dm³ do 0,60 mol/dm³ w czasie 20 s, to:

Δc = 0,60 − 0,80 = −0,20 mol/dm³

v = |−0,20|/20

v = 0,010 mol/(dm³·s)

**Szybkość chwilowa** opisuje tempo reakcji w konkretnym momencie. Na wykresie stężenie–czas jest to nachylenie stycznej do krzywej w danym punkcie.

Na początku reakcji krzywa może być stroma, co oznacza dużą szybkość chwilową. Pod koniec reakcji krzywa staje się łagodniejsza, co oznacza mniejszą szybkość. Gdy reakcja się zakończy, stężenie substratu przestaje się zmieniać, a szybkość netto spada do zera.

| Pojęcie | Co opisuje? | Jak je wyznaczyć? |
|---|---|---|
| Szybkość średnia | Zmianę stężenia na odcinku czasu | v = |Δc|/Δt |
| Szybkość chwilowa | Tempo w konkretnym momencie | Nachylenie stycznej do wykresu |
| Początkowa szybkość | Tempo na początku reakcji | Nachylenie stycznej w punkcie startowym |

Szybkość chwilową trudniej obliczyć dokładnie z tabeli, ponieważ wymaga danych w bardzo krótkich odstępach czasu albo wykresu. W szkolnych zadaniach często wystarczy oszacowanie nachylenia stycznej.

::: karta understand | W skrócie — średnia czy chwilowa?
Szybkość średnia opisuje cały odcinek czasu. Szybkość chwilowa opisuje jeden moment. Na wykresie pierwszą oblicza się ze zmiany stężenia i czasu, a drugą z nachylenia stycznej.
:::

::: nie-myl | Szybkość, zmiana stężenia i czas
- Szybkość ≠ zmiana stężenia — szybkość to zmiana stężenia podzielona przez czas; test rozstrzygający: sprawdź, czy w obliczeniu występuje dzielenie przez Δt.
- Szybkość substratu ≠ szybkość produktu — dla substratu stężenie maleje, dla produktu rośnie; test rozstrzygający: zastosuj wartość bezwzględną i uwzględnij współczynniki stechiometryczne.
- Duża zmiana stężenia ≠ duża szybkość — jeżeli zmiana nastąpiła w bardzo długim czasie, szybkość może być mała; test rozstrzygający: podziel zmianę stężenia przez czas.
:::

::: karta exam | Zadanie 1 (3 pkt) — Szybkość średnia
Stężenie substratu A zmienia się w czasie:

t = 0 s, [A] = 0,80 mol/dm³

t = 20 s, [A] = 0,60 mol/dm³

a) Oblicz zmianę stężenia Δ[A]. (1 pkt)

b) Oblicz szybkość średnią reakcji. (1 pkt)

c) Podaj jednostkę szybkości. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Δ[A] = 0,60 − 0,80 = −0,20 mol/dm³.

b) (1 pkt) v = |Δ[A]|/Δt = 0,20/20 = 0,010 mol/(dm³·s).

c) (1 pkt) mol/(dm³·s).
:::
:::

## 3 | Stechiometria szybkości reakcji {#stechiometria} [[understand:ROZUMIENIE]] [[extra:LO]]

Dla reakcji:

aA + bB → cC + dD

szybkość reakcji można zapisać za pomocą zmian stężeń:

v = −(1/a)·Δ[A]/Δt = −(1/b)·Δ[B]/Δt = (1/c)·Δ[C]/Δt = (1/d)·Δ[D]/Δt

Znaki minus przy substratach wynikają z tego, że ich stężenia maleją. Dzielenie przez współczynniki stechiometryczne jest konieczne, ponieważ różne substancje mogą zmieniać stężenie w różnym tempie.

Przykład dla reakcji:

N₂ + 3H₂ → 2NH₃

szybkość można zapisać jako:

v = −Δ[N₂]/Δt = −(1/3)·Δ[H₂]/Δt = (1/2)·Δ[NH₃]/Δt

Jeżeli azot znika z szybkością 0,010 mol/(dm³·s), to wodór znika trzy razy szybciej:

v(H₂) = 3·0,010 = 0,030 mol/(dm³·s)

Amoniak powstaje dwa razy szybciej niż znika azot:

v(NH₃) = 2·0,010 = 0,020 mol/(dm³·s)

Nie należy mylić współczynników stechiometrycznych z rzędem reakcji. Współczynniki opisują proporcje substratów i produktów. Rząd reakcji ustala się doświadczalnie.

::: karta understand | W skrócie — współczynniki w szybkości
Współczynniki stechiometryczne mówią, w jakiej proporcji zmieniają się stężenia. Przy obliczaniu jednej wspólnej szybkości reakcji dzieli się zmianę stężenia przez współczynnik danej substancji.
:::

::: karta warning | Uwaga — współczynnik stechiometryczny nie jest rzędem reakcji
Rząd reakcji względem substratu ustala się z danych doświadczalnych. Współczynnik w równaniu może być inny niż rząd reakcji.
:::

## 3a | Metody pomiaru szybkości

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

## 4 | Czynniki wpływające na szybkość {#czynniki} [[basic:E8]] [[understand:ROZUMIENIE]]

Na szybkość reakcji wpływają między innymi:

1. **Stężenie substratów** — większe stężenie oznacza więcej cząsteczek w tej samej objętości i częstsze zderzenia.
2. **Temperatura** — wyższa temperatura zwiększa energię cząsteczek i liczbę zderzeń o wystarczającej energii.
3. **Powierzchnia kontaktu** — rozdrobnienie ciała stałego zwiększa powierzchnię, na której mogą zachodzić zderzenia.
4. **Katalizator** — obniża energię aktywacji, dzięki czemu więcej zderzeń prowadzi do reakcji.
5. **Ciśnienie** — dla reakcji gazowych zwiększenie ciśnienia zwykle zwiększa stężenie gazów i częstotliwość zderzeń.

| Czynnik | Co się zmienia? | Efekt na szybkość |
|---|---|---|
| Większe stężenie | Więcej cząsteczek w objętości | Zderzenia częstsze, szybkość rośnie |
| Wyższa temperatura | Większa energia cząsteczek | Więcej zderzeń skutecznych, szybkość rośnie |
| Większa powierzchnia kontaktu | Więcej miejsca reakcji | Szybkość rośnie |
| Katalizator | Niższa energia aktywacji | Szybkość rośnie |
| Większe ciśnienie gazu | Większe stężenie gazu | Szybkość zwykle rośnie |

Przykład: magnez w postaci granulek reaguje z kwasem wolniej niż magnez w postaci proszku. Proszek ma większą powierzchnię kontaktu z kwasem.

Przykład: zwiększenie temperatury zwykle przyspiesza reakcję, ale nie zmienia jej bilansu energetycznego. Reakcja egzotermiczna pozostaje egzotermiczna, a endotermiczna — endotermiczna.

Przykład: katalizator obniża energię aktywacji. Nie zmienia równania reakcji ani ΔH. Po reakcji katalizator wraca do postaci, w której może działać dalej.

::: karta understand | W skrócie — cztery drogi przyspieszenia
Można zwiększyć stężenie, podnieść temperaturę, zwiększyć powierzchnię kontaktu albo dodać katalizator. Każdy z tych sposobów zwiększa liczbę skutecznych zderzeń, ale działa innym mechanizmem.
:::

::: karta warning | Uwaga — temperatura nie obniża energii aktywacji
Wyższa temperatura zwiększa energię cząsteczek, więc więcej zderzeń ma wystarczającą energię. Katalizator natomiast obniża samą barierę energetyczną.
:::

## 5 | Wstęp do równania kinetycznego {#kinetyka} [[extra:LO]] [[extra:AMBITNE]]

Dla reakcji jednosubstratowej:

A → produkty

można zapisać wstępne równanie kinetyczne:

v = k·[A]ⁿ

gdzie:

- v — szybkość reakcji;
- k — stała szybkości;
- [A] — stężenie substratu A;
- n — rząd reakcji względem A.

Rząd reakcji n ustala się na podstawie danych doświadczalnych. Nie wynika automatycznie ze współczynnika w równaniu reakcji.

Jeżeli n = 0, to:

v = k

Szybkość nie zależy od stężenia A.

Jeżeli n = 1, to:

v = k·[A]

Podwojenie stężenia podwaja szybkość.

Jeżeli n = 2, to:

v = k·[A]²

Podwojenie stężenia zwiększa szybkość czterokrotnie.

Stała szybkości k zależy od temperatury oraz od obecności katalizatora. Nie jest bezwymiarowa: jej jednostka zależy od rzędu reakcji.

Dla reakcji wielosubstratowej równanie może mieć postać:

v = k·[A]ᵐ·[B]ⁿ

Rzędy m i n również ustala się doświadczalnie.

::: karta understand | W skrócie — równanie kinetyczne
Równanie kinetyczne łączy szybkość reakcji ze stężeniami substratów. Stała k oraz rzędy reakcji poznaje się z doświadczenia, a nie z samego równania stechiometrycznego.
:::

::: karta warning | Uwaga — rząd reakcji ustala doświadczenie
Nie zakładaj, że rząd reakcji względem A jest równy współczynnikowi przy A w równaniu reakcji. To częsty błąd w kinetyce.
:::

## 6 | Przykłady prowadzone {#przyklady} [[basic:E8]] [[extra:LO]]

**Przykład 1 — szybkość średnia z tabeli.**

| t, s | [A], mol/dm³ |
|---|---|
| 0 | 0,80 |
| 20 | 0,60 |

v = |0,60 − 0,80|/20

v = 0,010 mol/(dm³·s)

**Przykład 2 — szybkość produktu.**

Dla reakcji:

A → B

jeżeli stężenie B wzrosło z 0 do 0,40 mol/dm³ w czasie 10 s, to:

v = Δ[B]/Δt

v = 0,40/10

v = 0,040 mol/(dm³·s)

**Przykład 3 — stechiometria szybkości.**

Dla reakcji:

2A → B

jeżeli A znika z szybkością 0,060 mol/(dm³·s), to B powstaje z szybkością:

v(B) = 0,060/2

v(B) = 0,030 mol/(dm³·s)

**Przykład 4 — wpływ rozdrobnienia.**

Magnez w postaci proszku reaguje z kwasem szybciej niż w postaci granulek, ponieważ proszek ma większą powierzchnię kontaktu z kwasem.

**Przykład 5 — wpływ temperatury.**

Zwiększenie temperatury zwiększa energię cząsteczek. Więcej zderzeń ma energię wystarczającą do pokonania energii aktywacji, więc reakcja przebiega szybciej.

::: karta basic | Po tej lekcji potrafisz
- obliczyć szybkość średnią;
- odczytać szybkość z wykresu;
- powiązać szybkości substratów i produktów;
- wyjaśnić wpływ warunków na szybkość reakcji.
:::

::: karta exam | Zadanie 2 (4 pkt) — Stechiometria szybkości | poziom ambitny
Dla reakcji:

N₂ + 3H₂ → 2NH₃

azot znika z szybkością 0,010 mol/(dm³·s).

a) Zapisz zależność między szybkościami N₂, H₂ i NH₃. (1 pkt)

b) Oblicz szybkość zaniku H₂. (1 pkt)

c) Oblicz szybkość powstawania NH₃. (1 pkt)

d) Wyjaśnij, dlaczego szybkości są różne. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) v = −Δ[N₂]/Δt = −(1/3)·Δ[H₂]/Δt = (1/2)·Δ[NH₃]/Δt.

b) (1 pkt) v(H₂) = 3·0,010 = 0,030 mol/(dm³·s).

c) (1 pkt) v(NH₃) = 2·0,010 = 0,020 mol/(dm³·s).

d) (1 pkt) Szybkości są różne, ponieważ ze stechiometrii wynika, że na 1 mol N₂ przypada 3 mole H₂ i 2 mole NH₃.
:::
:::

## 6a | Przykłady obliczeniowe krok po kroku

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

## 7 | Klinika błędów {#klinika} [[basic:E8]] [[understand:ROZUMIENIE]]

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Szybkość reakcji może być ujemna.” | Szybkość reakcji jest wielkością dodatnią. | Dla substratu stężenie maleje, dlatego stosuje się wartość bezwzględną zmiany stężenia. |
| „Szybkość to zmiana stężenia.” | Szybkość to zmiana stężenia podzielona przez czas. | Bez podziału przez Δt otrzymuje się zmianę stężenia, nie szybkość. |
| „Szybkość reakcji jest stała przez cały czas.” | Szybkość zwykle maleje w miarę zużywania substratu. | Na początku substratów jest więcej, więc zderzenia skuteczne występują częściej. |
| „Współczynnik stechiometryczny to rząd reakcji.” | Rząd reakcji ustala się doświadczalnie. | Współczynnik opisuje proporcje substratów i produktów, nie zależność szybkości od stężenia. |
| „Katalizator zwiększa energię cząsteczek.” | Katalizator obniża energię aktywacji. | Większa energia cząsteczek wynika z podwyższenia temperatury. |
| „Wyższa temperatura obniża energię aktywacji.” | Wyższa temperatura zwiększa energię cząsteczek. | Katalizator obniża barierę, a temperatura zwiększa liczbę zderzeń skutecznych. |
| „Proszek reaguje wolniej niż granulki.” | Proszek zwykle reaguje szybciej niż granulki. | Proszek ma większą powierzchnię kontaktu z drugim substratem. |
| „Szybkość produktu jest zawsze równa szybkości substratu.” | Szybkości łączy się przez współczynniki stechiometryczne. | Przy różnych współczynnikach stężenia zmieniają się w różnych proporcjach. |
| „Rząd reakcji można odczytać z równania reakcji.” | Rząd reakcji ustala się na podstawie danych doświadczalnych. | Równanie stechiometryczne nie określa mechanizmu ani rzędu reakcji. |
| „Jednostka szybkości zawsze wynosi mol/(dm³·s).” | Jednostka zależy od jednostek stężenia i czasu. | Jeżeli czas podano w minutach, jednostką będzie mol/(dm³·min). |
:::

::: mity
„Szybka reakcja zawsze wydziela dużo ciepła.” || Szybkość i efekt energetyczny to różne cechy. Reakcja może być szybka i endotermiczna albo wolna i egzotermiczna.

„Katalizator zużywa się w reakcji.” || Katalizator nie ulega trwałemu zużyciu w przebiegu reakcji.

„Większe stężenie zawsze oznacza większą szybkość.” || W wielu reakcjach tak, ale zależność musi być potwierdzona danymi doświadczalnymi.

„Temperatura zmienia tylko szybkość, nigdy równowagę.” || Temperatura wpływa zarówno na szybkość, jak i na położenie równowagi. W tej lekcji skupiamy się na szybkości.

„Reakcja kończy się, gdy szybkość osiągnie zero.” || W układzie otwartym reakcja może się zakończyć po zużyciu substratu. W układzie zamkniętym reakcje odwracalne osiągają stan równowagi. Szybkość netto może spaść do zera w równowadze, mimo że reakcje elementarne nadal zachodzą w obu kierunkach.

„Powierzchnia kontaktu nie ma znaczenia dla cieczy i gazów.” || Dla cieczy i gazów mieszanie oraz dyfuzja mogą mieć duże znaczenie. Powierzchnia kontaktu jest szczególnie ważna, gdy jednym z substratów jest ciało stałe.
:::

## 8 | Ćwiczenia z kluczem {#cwiczenia} [[basic:E8]] [[extra:LO]]

**Ćwiczenie 1.** Stężenie substratu spadło z 0,50 mol/dm³ do 0,30 mol/dm³ w czasie 10 s. Oblicz szybkość średnią.

::: odp | Klucz
v = |0,30 − 0,50|/10 = 0,020 mol/(dm³·s).
:::

**Ćwiczenie 2.** Stężenie produktu wzrosło z 0 do 0,25 mol/dm³ w czasie 5 s. Oblicz szybkość powstawania produktu.

::: odp | Klucz
v = 0,25/5 = 0,050 mol/(dm³·s).
:::

**Ćwiczenie 3.** Dla reakcji 2A → B substrat A znika z szybkością 0,080 mol/(dm³·s). Oblicz szybkość powstawania B.

::: odp | Klucz
v(B) = 0,080/2 = 0,040 mol/(dm³·s).
:::

**Ćwiczenie 4.** Dlaczego magnez w proszku reaguje z kwasem szybciej niż w postaci granulek?

::: odp | Klucz
Proszek ma większą powierzchnię kontaktu z kwasem, więc zderzenia skuteczne zachodzą częściej.
:::

**Ćwiczenie 5 — mini-test samodzielny.** Odpowiedz bez zaglądania do lekcji: 1) Co to jest szybkość reakcji? 2) Jak oblicza się szybkość średnią? 3) Jaka jest jednostka szybkości? 4) Co się dzieje ze stężeniem substratu? 5) Jak katalizator wpływa na szybkość? Potem sprawdź odpowiedzi w diagnozie.

## 8a | Ćwiczenia — dodatkowe

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

## 9 | Słownik {#slownik} [[understand:ROZUMIENIE]]

::: slownik
Szybkość reakcji :: zmiana stężenia substratu lub produktu w jednostce czasu.
Szybkość średnia :: zmiana stężenia na określonym odcinku czasu.
Szybkość chwilowa :: tempo reakcji w konkretnym momencie.
Szybkość początkowa :: szybkość reakcji na jej początku.
Stężenie :: ilość substancji w określonej objętości roztworu lub gazu.
Stała szybkości k :: współczynnik w równaniu kinetycznym, zależny między innymi od temperatury.
Rząd reakcji :: wykładnik przy stężeniu substratu w równaniu kinetycznym, ustalany doświadczalnie.
Równanie kinetyczne :: zależność szybkości reakcji od stężeń substratów.
Energia aktywacji :: minimalna energia potrzebna do rozpoczęcia reakcji.
Katalizator :: substancja zwiększająca szybkość reakcji przez obniżenie energii aktywacji.
Zderzenie skuteczne :: zderzenie cząsteczek prowadzące do reakcji.
Powierzchnia kontaktu :: powierzchnia, na której mogą zderzać się substraty, szczególnie gdy jednym z nich jest ciało stałe.
Teoria zderzeń :: model wyjaśniający reakcję przez zderzenia cząsteczek o odpowiedniej energii i orientacji.
Stechiometria :: zależność ilościowa między substratami i produktami reakcji.
Równowaga :: stan, w którym szybkości reakcji przeciwnych są równe.
Wykres stężenie–czas :: zależność stężenia od czasu, z której odczytujemy szybkość
Styczna :: prosta dotykająca krzywej w jednym punkcie, o tym samym kierunku co krzywa w tym punkcie
Jednostka szybkości :: mol/(dm³·s) (w tej lekcji)
Metoda pomiaru :: sposób odczytu zmiany układu, np. objętości gazu lub barwy roztworu
Substrat :: substancja, która się zużywa w reakcji
Produkt :: substancja, która powstaje w reakcji
Stechiometria szybkości :: związek szybkości różnych składników reakcji przez współczynniki
Wydajność :: ilość produktu w stanie końcowym, niezależna od tego, jak szybko powstał
Warunki normalne :: 0 °C i 1013 hPa, w których 1 mol gazu zajmuje 22,4 dm³
:::

## 9b | Fiszki

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

## 10 | Test {#test} [[basic:E8]] [[extra:LO]]

::: test
? Co to jest szybkość reakcji?
+ zmiana stężenia substratu lub produktu w jednostce czasu
- zmiana temperatury w czasie
- ilość substratu w probówce
- energia aktywacji reakcji
! Szybkość opisuje tempo zmiany składu układu w czasie.

? Stężenie substratu spadło z 0,60 mol/dm³ do 0,40 mol/dm³ w czasie 10 s. Szybkość średnia wynosi:
+ 0,020 mol/(dm³·s)
- 0,20 mol/(dm³·s)
- 0,0020 mol/(dm³·s)
- 0,60 mol/(dm³·s)
! v = |0,40 − 0,60|/10 = 0,020 mol/(dm³·s).

? Podczas reakcji stężenie substratu:
+ maleje
- rośnie
- pozostaje zawsze stałe
- najpierw rośnie, potem maleje
! Substrat jest zużywany podczas reakcji.

? Dla reakcji N₂ + 3H₂ → 2NH₃, jeżeli N₂ znika z szybkością 0,010 mol/(dm³·s), to H₂ znika z szybkością:
+ 0,030 mol/(dm³·s)
- 0,010 mol/(dm³·s)
- 0,020 mol/(dm³·s)
- 0,0033 mol/(dm³·s)
! Na 1 mol N₂ przypada 3 mole H₂, więc wodór znika trzy razy szybciej.

? Który czynnik obniża energię aktywacji?
+ katalizator
- wyższa temperatura
- większe stężenie
- większa masa substratu
! Katalizator obniża barierę energetyczną. Temperatura zwiększa energię cząsteczek.

? Które zdanie o rzędzie reakcji jest poprawne?
+ rząd reakcji ustala się na podstawie danych doświadczalnych
- rząd reakcji zawsze równa się współczynnikowi stechiometrycznemu
- rząd reakcji zależy wyłącznie od temperatury
- rząd reakcji zawsze wynosi 1
! Rząd reakcji opisuje zależność szybkości od stężenia i ustala się go doświadczalnie.
:::

## 10a | Test uzupełniający

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

## 10b | Mnemotechniki

::: karta understand | Sposoby pamięciowe
Ubywa — minus, przybywa — plus. Zapamiętaj: znak minus dla substratu, który się zużywa; bez minusa dla produktu, który powstaje.
Mianownik to zawsze czas. Jednostka szybkości zaczyna się od stężenia, a kończy na sekundzie: mol/(dm³·s). Jeśli czas jest w minutach, zatrzymaj się i przelicz.
Współczynnik dzieli, nie mnoży. Przy 2A → B szybkość ubywania A dzielimy przez 2, by porównać ją z szybkością B.
:::

## 10c | Mosty

- Przed tą lekcją: R05 (stężenia i obliczenia z nimi).
- Dalej: K05 (czynniki: stężenie, temperatura, rozdrobnienie), K06 (zderzenia i energia aktywacji), K08 (równowaga dynamiczna: szybkość w przód i wstecz).

## 10d | Ciekawostki

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

## 11 | Checklista {#checklista} [[basic:E8]] [[understand:ROZUMIENIE]]

::: checklista
- [ ] umiem zdefiniować szybkość reakcji
- [ ] umiem obliczyć szybkość średnią z tabeli
- [ ] umiem odczytać szybkość chwilową z wykresu
- [ ] umiem podać jednostkę szybkości
- [ ] umiem powiązać szybkości substratów i produktów
- [ ] umiem wyjaśnić wpływ stężenia na szybkość
- [ ] umiem wyjaśnić wpływ temperatury na szybkość
- [ ] umiem wyjaśnić wpływ powierzchni kontaktu
- [ ] umiem wyjaśnić działanie katalizatora
- [ ] umiem odróżnić współczynnik stechiometryczny od rzędu reakcji
:::

### AUDYT — Perplexity, 2026-10-13 {#audyt-ulepsz}

**Poprawione:**
- Frontmatter: dodano uid, uzupełniono kicker, opis, plakietki i stopkę; zmieniono stan na „ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia”.
- Minimum: „szybkość reakcji” → dodano definicję przez zmianę stężenia w jednostce czasu.
- Minimum: „v = Δc/Δt” → doprecyzowano stosowanie wartości bezwzględnej dla substratów.
- Minimum: „czynniki wpływające na szybkość” → dodano zastrzeżenie, że wpływ ciśnienia dotyczy przede wszystkim reakcji gazowych.
- Wykład: „nie każde zderzenie prowadzi do reakcji” → rozwinięto o energię i orientację zderzenia.
- Wykład: „szybkość maleje w miarę zużywania substratu” → dodano zastrzeżenie o reakcjach odwracalnych i równowadze.
- Stechiometria: poprawiono zapis szybkości przez współczynniki stechiometryczne.
- Kinetyka: doprecyzowano, że rząd reakcji ustala się doświadczalnie, a nie z równania stechiometrycznego.
- Test: poprawiono odpowiedzi i wyjaśnienia dotyczące katalizatora oraz rzędu reakcji.
- Wszystkie wzory zapisano w Unicode, bez LaTeX-a.

**Dodane:**
- §0.1–§0.4: cel, kompas, diagnoza z kluczem i interpretacją wyniku.
- §1: pełny wykład od zera, teoria zderzeń, znak szybkości i jednostki.
- §2: szybkość średnia, chwilowa i początkowa oraz tabela porównawcza.
- §3: stechiometria szybkości z przykładem N₂ + 3H₂ → 2NH₃.
- §4: czynniki wpływające na szybkość i tabela porównawcza.
- §5: wstęp do równania kinetycznego, rzędy 0, 1 i 2.
- §6: pięć przykładów prowadzonych.
- §7: klinika 10 błędów i 6 mitów.
- §8: ćwiczenia z kluczem i mini-test samodzielny.
- §9: słownik 15 haseł.
- §10: test 6 pytań.
- §11: checklista.

**Niepewne / do weryfikacji:**
- Zakres konkretnego konkursu chemicznego nie został określony w paczce, dlatego wymagania konkursowe opisano ogólnie.
- Rząd reakcji i stała szybkości wymagają danych doświadczalnych; w lekcji przedstawiono je jako wstęp, a nie gotową metodę rozwiązywania każdego zadania.
- Wpływ ciśnienia na szybkość jest najbardziej jednoznaczny dla reakcji gazowych; dla roztworów należy mówić przede wszystkim o stężeniu.

**Proponuję usunąć:**
- Brak.

**Źródła:**
- Dostarczona paczka: lekcja K04.
- Zintegrowana Platforma Edukacyjna — materiały o kinetyce chemicznej, szybkości reakcji i czynnikach ją wpływających.

**Grafiki do zrobienia:**

| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |
|---|---|---|---|---|
| §1, po wykładzie o zderzeniach | animacja „do przodu i od początku” | zderzenia cząsteczek o różnej energii i orientacji | Reakcję powodują tylko zderzenia skuteczne | Cząsteczki A i B zbliżają się do siebie. Zderzenie o zbyt małej energii nie prowadzi do reakcji, a zderzenie o energii co najmniej Ea i właściwej orientacji prowadzi do powstania produktu. |
| §2, po szybkości średniej i chwilowej | wykres liniowy | krzywa stężenia substratu w czasie, odcinek średniej i styczna w punkcie | Szybkość chwilowa to nachylenie stycznej | Oś pozioma przedstawia czas, oś pionowa stężenie A. Krzywa opada coraz łagodniej. Odcinek między dwoma punktami pokazuje szybkość średnią, a styczna w wybranym punkcie — szybkość chwilową. |
| §3, przy stechiometrii szybkości | schemat statyczny | reakcja N₂ + 3H₂ → 2NH₃ i proporcje zmian stężeń | Szybkości różnych substancji łączy stechiometria | Jeden jon N₂ odpowiada trzem H₂ i dwóm NH₃. Strzałki pokazują, że H₂ znika trzy razy szybciej niż N₂, a NH₃ powstaje dwa razy szybciej niż znika N₂. |
| §4, przy czynnikach szybkości | model interaktywny z suwakiem | wpływ stężenia, temperatury, powierzchni kontaktu i katalizatora | Każdy czynnik zwiększa liczbę zderzeń skutecznych innym mechanizmem | Cztery przełączniki zmieniają stężenie, temperaturę, stopień rozdrobnienia oraz obecność katalizatora. Wyświetlana jest względna liczba zderzeń skutecznych i szybkość reakcji. |

**Przywrócono z poprzedniej wersji (nie zgubiono treści):**
- Przypomnienie z poprzedniej lekcji (§0.5), jednostki i przeliczanie (§1a), metody pomiaru szybkości (§3a), przykłady krok po kroku (§6a), ćwiczenia dodatkowe (§8a), fiszki (§9b), test uzupełniający (§10a), mnemotechniki (§10b), mosty (§10c), ciekawostki (§10d).
- Brakujące hasła słownika: wykres stężenie–czas, styczna, jednostka szybkości, metoda pomiaru, substrat, produkt, stechiometria szybkości, wydajność, warunki normalne.

**Poprawione względem propozycji:**
- Mit „Reakcja kończy się, gdy szybkość osiągnie zero” miał zły format (trzy pola zamiast „pytanie || odpowiedź”); poprawiono.

**Nieprzyjęte:**
- Stare wykłady 2, 3 i 5 (średnia, chwilowa, stechiometria) zastąpiono krótszymi sekcjami §2 i §3; treść pojęć jest w nowym wykładzie i w tych sekcjach.
- Stary wstęp do równania kinetycznego i stara klinika (10 pozycji w nowej wersji) zastąpione nowymi sekcjami §5 i §7.

