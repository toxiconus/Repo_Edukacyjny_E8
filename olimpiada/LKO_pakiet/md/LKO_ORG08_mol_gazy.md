---
kod: LKO-ORG08
uid: CHE.LKO.ORG08
tytul: "Mol, objętość molowa i wzory elementarne — rachunkowa puenta serii"
typ: lekcja
dzial: "Chemia organiczna (etap III LKO)"
poziom: "LKO — etap III (wojewódzki)"
wymaga: "R04; R09; LKO-ORG01; LKO-ORG02"
poglebia: "LKO-STECH; LKO-B1B2"
wlasciciel: "chemia olimpijska LKO"
zrodla: "Zakres olimpiady kuratoryjnej (etap III) + podstawa programowa"
opis: "Komplet narzędzi ilościowych: mol i liczba Avogadra, masa molowa, objętość molowa gazów (22,4 dm³/mol), stosunki objętościowe, gęstość względna oraz ustalanie wzorów elementarnych i rzeczywistych."
stan: "pełna struktura — 2026-10-13, bez audytu W1"
kicker: "ORG08 · mol i gazy"
lead: "Cztery wzory, jeden trójkąt konwersji i procedura ustalania wzorów z procentów — narzędzia, na których stoi każdy arkusz wojewódzki."
plakietki: ["mol", "objętość molowa"]
stopka: "LKO-ORG08 · pełna struktura"
---

# LKO-ORG08 — Mol, objętość molowa i wzory elementarne — rachunkowa puenta serii

::: minimum | Muszę umieć — 10 punktów
1. Zdefiniować mol (liczność) i podać liczbę Avogadra (6,02·10²³ mol⁻¹; dokładnie 6,02214076·10²³).
2. Stosować cztery wzory konwersji: n = m/M; m = n·M; N = n·N_A; V = n·Vₘ (i odwrotnie).
3. Podać objętość molową gazów Vₘ = 22,4 dm³/mol w warunkach normalnych (0 °C, p ≈ 1013 hPa) i stosować ją do gazów.
4. Stosować prawo Avogadra i wniosek: w reakcjach gaz–gaz stosunki objętościowe = stosunki współczynników (bez liczenia moli!).
5. Obliczać gęstość względną gazów: d = M/M(wzorca); względem powietrza M ≈ 29, względem wodoru M = 2.
6. Ustalać wzór rzeczywisty gazów z gęstości względnej (M = d · M(wzorca)).
7. Rozróżniać wzór elementarny (najprostszy stosunek atomów) i rzeczywisty (rzeczywista liczba atomów); związek: M = k · M(elementarnego).
8. Przeprowadzać pełną procedurę: % masowe → liczby moli atomów → stosunek elementarny → (z M) wzór rzeczywisty.
9. Wskazywać pułapki: wzory elementarne wspólne dla wielu związków (CH₂O → C₂H₄O₂ i C₆H₁₂O₆); objętości — tylko dla gazów.
10. Liczyć zadania łańcuchowe łączące objętości, masy i wydajność (R09) — na związkach z całej serii organiki.
:::

::: warstwy
e8 | Mol = porcja 6,02·10²³; M z listy; 22,4 dm³/mol dla gazów; M i m — ta sama liczba, inna jednostka.
understand | Dlaczego objętości behave jak współczynniki (prawo Avogadra) i dlaczego wzór elementarny nie musi być wzorem rzeczywistym.
contest | Procedura wzoru z procentów, gęstość względna jako źródło M, łańcuchy z wydajnością — pełny arsenał wojewódzki.
extra | Sześcian molowy 22,4 dm³, liczba Loschmidta, cząsteczki w kropli wody, definicja mola z 2019 r.
:::

::: rdzen | Rdzeń lekcji — najpierw to
1. [Trójkąt konwersji m–n–N–V](#trojkat) — cztery wzory i ich kierunki.
2. [Objętość molowa i stosunki objętościowe](#objestosc) — prawo Avogadra, gaz–gaz bez moli.
3. [Gęstość względna](#gestosc) — d = M/M(wzorca), odczytywanie M gazów.
4. [Wzory elementarne i rzeczywiste](#wzory) — pełna procedura procentów.
5. [Zadania exam](#zadania) i [zadania adv](#zadania-adv).
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

To lekcja-rachmistrz serii: bez jej narzędzi zadania wojewódzkie z ORG01–ORG07 zatrzymują się w połowie. Fundament masz z R04 (mol, masa molowa) — tu dochodzą dwie nowości: **objętość molowa gazów** i **wzory elementarne**. Każdą procedurę przećwicz na przykładach z lekcji, a potem na zadanach; kontroluj zawsze jednostki (g, mol, dm³) i rząd wielkości. Karty `odp` otwieraj po własnym zapisie — rachunku nie da się zrozumieć czytając klucz.

## 0.2 | Diagnoza {#diagnoza}

1. Ile moli stanowi 88 g CO₂ (M = 44 g/mol)?
2. Ile dm³ zajmuje ten gaz w warunkach normalnych?
3. Względem czego porównujemy gęstość gazów i jaki wzór stosujemy dla powietrza (M ≈ 29)?
4. Czym różni się wzór elementarny od rzeczywistego? Podaj przykład pary związków o wspólnym wzorze elementarnym.
5. Związek zawiera 40% C, 6,7% H, 53,3% O (masowe). Podaj wzór elementarny.

::: odp | Klucz diagnozy
1. n = 88/44 = **2 mol** (1 pkt).
2. V = 2 · 22,4 = **44,8 dm³** (1 pkt).
3. Względem wzorca (powietrze M ≈ 29, wodór M = 2); d = M(gazu)/M(powietrza) (1 pkt).
4. Elementarny — najprostszy stosunek atomów; rzeczywisty — rzeczywista liczba atomów w cząsteczce; przykład: CH₂O wspólne dla kwasu octowego C₂H₄O₂ i glukozy C₆H₁₂O₆ (1 pkt).
5. CH₂O (1 pkt; procedura w sekcji 4).

**Rozliczenie:** 5 pkt — prosto do zadań exam; 3–4 pkt — pełna praca przez rdzeń; 0–2 pkt — najpierw R04 i R09, potem lekcja od początku.
:::

## 1 | Wykład — trójkąt konwersji: m–n–N–V {#trojkat}

R04 dało ci trzy wierzchołki: masa **m** (g), liczba moli **n** (mol), liczba cząstek **N**. Etap III dokłada czwarty: objętość gazu **V** (dm³). Cztery wzory łączą wszystkie pary przez mol:

| Z | Do | Wzór | Uwagi |
|---|---|---|---|
| m (g) | n (mol) | **n = m/M** | M w g/mol, z masy atomowej i wzoru |
| n (mol) | m (g) | **m = n·M** | odwrotność |
| n (mol) | N (cząstki) | **N = n·N_A** | N_A = 6,02·10²³ mol⁻¹ |
| N (cząstki) | n (mol) | **n = N/N_A** | odwrotność |
| n (mol) | V (dm³) | **V = n·Vₘ** | **tylko gazy**; Vₘ = 22,4 dm³/mol |
| V (dm³) | n (mol) | **n = V/Vₘ** | tylko gazy, warunki normalne |

Drogi „na przełaj" — m → N i m → V — zawsze przez mol (dwa kroki). Objętość nie działa dla cieczy i ciał stałych (tam jest własnością indywidualną, nie stałą porcji — porównaj 1 mol wody: 18 g, ale tylko ok. 18 cm³!).

**Warunki normalne** to umowny punkt odniesienia: temperatura 0 °C i ciśnienie ≈ 1013 hPa (1 atm). Przy tych warunkach **każdy gaz** zajmuje Vₘ = 22,4 dm³ na mol — niezależnie, czy to metan, CO₂ czy mieszanina. Przy temperaturze pokojowej objętość molowa jest większa (ok. 24 dm³/mol — wartość orientacyjna; w zadaniach konkursowych domyślnie 22,4).

**Liczba Avogadro:** N_A = 6,02·10²³ mol⁻¹ w rachunkach szkolnych; od reformy SI 2019 r. wartość dokładna: **6,02214076·10²³ mol⁻¹** (mol zdefiniowano właśnie przez tę liczbę — bez uzależnienia od masy wzorca).

### Najczęstsze pułapki

- Masa molowa to nie masa próbki: M w g/mol, m w gramach — najpierw n = m/M, dopiero potem reszta.
- 22,4 dm³/mol tylko dla gazów w warunkach normalnych (0 °C, ok. 1013 hPa); nie stosuj go do cieczy ani do innych warunków.
- Pomijanie współczynników z równania: liczby moli i objętości gazów przeliczamy przez współczynniki.
- Objętość przed liczbą moli: najpierw n z danych, potem V = n·Vₘ.
- Wydajność stosujemy do właściwego etapu i właściwego produktu teoretycznego.
- Brak sprawdzenia reagenta ograniczającego: przed liczeniem produktu porównaj liczby moli substratów z równania (ten, którego mniej w stosunku do współczynników, ogranicza reakcję).

::: karta understand | W skrócie — mapa konwersji w jednej karcie
Gramy → mole: dziel przez M. Mole → gramy: mnoż przez M. Mole → cząstki: mnoż przez 6,02·10²³. Cząstki → mole: dziel przez 6,02·10²³. Mole → dm³ (gaz!): mnoż przez 22,4. dm³ → mole: dziel przez 22,4. Każde „dalekie" przejście = dwa kroki przez mol. Kontrola błędów: jednostki na każdym kroku i rząd wielkości (mol gazu to zawsze dziesiątki dm³, masa mola — dziesiątki–setki gramów).
:::

::: karta extra | Sześcian molowy — 22,4 dm³ w rękach
22,4 dm³ to sześcian o boku ok. 28,2 cm (∛22400 ≈ 28,2) — klasyczna kostka do gry. W takiej przestrzeni, w warunkach normalnych, mieści się dokładnie 6,02·10²³ cząsteczek **dowolnego** gazu. W 1 cm³ tego samego gazu „upchnięto"by ok. 2,7·10¹⁹ cząsteczek (6,02·10²³/22400 ≈ 2,69·10¹⁹ — tzw. liczba Loschmidta; wartość zaokrąglona, do weryfikacji): to rząd wielkości 10¹⁹ cząsteczek.
:::

::: karta extra | Cząsteczki w kropli — rachunek, który robi wrażenie
1 cm³ wody = 1 g = 1/18 mol = 0,0556 mol → N = 0,0556 · 6,02·10²³ ≈ **3,3·10²² cząsteczek**. Kropla (ok. 0,05 cm³ — zależnie od pipety; do weryfikacji) zawiera więc rzędu 10²¹ cząsteczek. Liczby atomowe w chemii są ogromne dlatego, że cząsteczki są mikroskopijne — mol to porcja skalowana pod odważanie, nie pod wyobraźnię.
:::

::: karta extra | Skąd wzięła się nazwa „mol”
Słowo „mol” wprowadził niemiecki chemik fizyczny Wilhelm Ostwald (ok. 1893 r.), od łac. *moles* — „masa, ilość”. Amedeo Avogadro sformułował swoją hipotezę o równych liczbach cząsteczek w równych objętościach gazów już w 1811 r., ale uznanie jej przyszło dopiero po Kongresie w Karlsruhe (1860), gdy Stanislao Cannizzaro przekonał środowisko do spójnych mas atomowych i cząsteczkowych. Dziś to zwykła praca laboratorium: jedna wielka liczba, nazwana na cześć człowieka, który na nią nie zdążył. (Daty do weryfikacji.)
:::

@klocek kalkulator-mola {subst="1"} | Kalkulator mola: m, n, N, V gazu
@opis Pola masy molowej, masy, liczby moli i objętości gazu dla wybranej substancji (H₂O, CO₂, O₂, CH₄, NaCl): zmiana jednej wartości przelicza pozostałe, a pod polami stoją wzory n = m/M, N = n·N_A i V = n·22,4 dm³/mol; objętość dotyczy gazów w warunkach normalnych (0 °C, 1013 hPa).

@klocek trojkat-przeliczen {wzor="mol"} | Trójkąt: m, n, M
@opis Trójkąt z trzema polami: masa m u góry, liczba moli n i masa molowa M na dole; zasłonięcie jednej wielkości pokazuje wzór na jej obliczenie.

## 2 | Wykład — objętość molowa i stosunki objętościowe {#objestosc}

**Prawo Avogadro:** w równych objętościach różnych gazów (te same T i p) jest **ta sama liczba cząsteczek**. Skąd to wiadomo? Z tysięcy pomiarów reakcji gazowych — i właśnie to prawo wyjaśnia najpraktyczniejszy wniosek olimpijski:

**W reakcji, w której substraty i produkty są gazami, stosunek objętości = stosunek współczynników równania.**

Nie trzeba liczyć moli, mas ani objętości molowych — objętości zachowują się jak współczynniki:

- spalanie propanu: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O(ł) → na **1 dm³** propanu: **5 dm³** O₂ i **3 dm³** CO₂ (para wodna po ochłodzeniu — ciecz, jej objętości nie liczymy w gazach spalin);
- synteza amoniaku: N₂ + 3H₂ → 2NH₃ → z 10 dm³ N₂ i 30 dm³ H₂: **20 dm³** NH₃ (spadek objętości 40 → 20 dm³ — typowe pytanie o zmianę objętości);
- addycja HCl do propenu (ORG02): 1 : 1 — z 5,6 dm³ propenu przy 5,6 dm³ HCl: 5,6 dm³ chloropropanu (1 cząsteczka → 1 cząsteczka).

Kontrola sensu: objętości się **nie zmieniają w stosunku mas** — masa gazu w 22,4 dm³ zależy od M (metan 16 g, CO₂ 44 g); objętość mówi tylko o liczbie cząstek.

**Gęstość względna** — sposób na M nieznanego gazu:

**d = M(gazu) / M(wzorca)** — „ile razy gaz cięższy od wzorca".

Wzorce i ich M: **powietrze ≈ 29 g/mol** (średnia mieszaniny 78% N₂ — 28, 21% O₂ — 32; wartość przybliżona standardowa), **wodór = 2 g/mol**. Przykłady:

| Gaz | M | d wzgl. powietrza (÷29) | d wzgl. wodoru (÷2) |
|---|---|---|---|
| metan CH₄ | 16 | 0,55 (lżejszy) | 8 |
| eten C₂H₄ | 28 | 0,97 (na granicy) | 14 |
| propan C₃H₈ | 44 | 1,52 (cięższy) | 22 |
| CO₂ | 44 | 1,52 | 22 |

Odczyt odwrotny: **M = d · M(wzorca)** — gaz o d = 1,52 względem powietrza ma M = 1,52 · 29 ≈ 44. To brama do wzorów rzeczywistych (sekcja 4).

::: karta understand | W skrócie — gaz–gaz w trzech krokach bez moli
(1) Zbilansuj równanie. (2) Objętości gazów przepisz proporcjonalnie do współczynników (dm³ jak mole). (3) Para wodna po ochłodzeniu — ciecz: wyłącz ją z bilansu objętości. Przykład: 10 dm³ butanu (2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O): O₂ = 10·13/2 = 65 dm³; CO₂ = 10·8/2 = 40 dm³; H₂O — pomijamy w objętościach.
:::

::: karta error | Objętość molowa dla cieczy — klasyczny fałszywy krok
„1 mol wody ma 22,4 dm³" — błąd. Vₘ = 22,4 dm³/mol działa **wyłącznie dla gazów**. 1 mol wody to 18 g i ok. 18 cm³ (gęstość 1 g/cm³); 1 mol glukozy — ok. 120 cm³ (M = 180, gęstość ~1,5 g/cm³ — orientacyjnie). Objętość cieczy/ciała stałego zależy od upakowania cząsteczek; objętość gazu — tylko od ich liczby. W zadaniach: V = n·22,4 piszemy tylko przy symbolu gazu (CO₂(g), H₂(g), NH₃(g)).
:::

@klocek trojkat-przeliczen {wzor="gaz"} | Trójkąt: V, n, Vm
@opis Trójkąt dla gazu w warunkach normalnych (0 °C, 1013 hPa): objętość V u góry, liczba moli n i objętość molowa 22,4 dm³/mol na dole; V = n · 22,4 i n = V / 22,4.

## 3 | Wykład — wzory elementarne i rzeczywiste: procedura procentów {#wzory}

**Wzór elementarny** to najprostszy całkowity stosunek atomów w związku. **Wzór rzeczywisty (sumaryczny)** — rzeczywista liczba atomów w cząsteczce. Zawsze:

**M(rzeczywisty) = k · M(elementarnego)**, gdzie k = 1, 2, 3, ...

Procedura z procentów masowych (klasyka wojewódzka — krok po kroku):

1. Przyjmij **100 g** związku → procenty stają się gramami.
2. Przelicz masy pierwiastków na **mole atomów**: n = m/A (A — masa atomowa).
3. Podziel wszystkie wyniki przez **najmniejszy** → stosunek elementarny (zaokrąglaj do bliskich liczb całkowitych; 0,5 lub 0,33/0,67 podpowiedzi mnożenie ×2/×3).
4. Zapisz **wzór elementarny** i policz M(elementarnego).
5. Jeśli masz **M rzeczywiste** (z gęstości względnej albo danych) → k = M/M(el.) → **wzór rzeczywisty**.

**Przykład 1 — domknięcie ORG05.** Związek: 40,0% C, 6,7% H, 53,3% O; M = 60 g/mol.

1. 100 g → m(C) = 40 g; m(H) = 6,7 g; m(O) = 53,3 g.
2. n(C) = 40/12 = 3,33 mol; n(H) = 6,7/1 = 6,7 mol; n(O) = 53,3/16 = 3,33 mol.
3. Dziel przez 3,33: C — 1; H — 2,01 → 2; O — 1,00.
4. Wzór elementarny: **CH₂O**; M(el.) = 12 + 2 + 16 = 30 g/mol.
5. k = 60/30 = 2 → wzór rzeczywisty: **C₂H₄O₂** — kwas octowy (albo mrówczan metylu HCOOCH₃ — izomery funkcjonalne, ORG06).

**Przykład 2 — domknięcie ORG07.** Te same procenty (40,0/6,7/53,3), ale M = 180 g/mol:

k = 180/30 = 6 → **C₆H₁₂O₆** — glukoza!

Ten sam wzór elementarny, dwa różne rzeczywiste — CH₂O to wspólny „przodek" kwasu octowego i glukozy; sam w sobie jest tylko proporcją, nie substancją.

**Przykład 3 — domknięcie ORG02.** Węglowodór: 85,7% C, 14,3% H; gęstość względem powietrza d ≈ 1,93.

1–3. n(C) = 85,7/12 = 7,14; n(H) = 14,3/1 = 14,3 → dziel przez 7,14: C 1; H 2 → **CH₂**; M(el.) = 14.
4. M = 1,93 · 29 ≈ 56 g/mol.
5. k = 56/14 = 4 → **C₄H₈** — buten (alken; CₙH₂ₙ ✔).

::: karta understand | W skrócie — wzór elementarny vs rzeczywisty w trzech liniach
Elementarny = proporcja (CH₂O); rzeczywisty = substancja (C₂H₄O₂). Bez M rzeczywistego nie ma wzoru rzeczywistego — procenty dają tylko proporcję. Jeden elementarny, wiele rzeczywistych: CH₂O → C₂H₄O₂ (k = 2, np. kwas octowy) albo C₆H₁₂O₆ (k = 6, glukoza); każde k daje inną substancję. Na konkursie: policz elementarny, sprawdź, czy M się zgadza z k = 1 — jeśli nie, dopiero wtedy mnoż.
:::

::: karta error | Odczytywanie M z gęstości — dwa typowe błędy
(1) Pomnożenie przez złego wzorca: d względem **wodoru** wymaga M = d · 2, względem **powietrza** — M = d · 29; w zadaniu zawsze jest napisane „względem czego". (2) Trzymanie się d jako „gęstości w g/dm³": gęstość względna jest **liczbą bez jednostki** (porównanie dwóch gęstości); gęstość absolutna gazu w warunkach normalnych to M/22,4 g/dm³ — to inna wielkość. Przykład: CO₂ — d(powietrze) = 1,52, ale ρ = 44/22,4 ≈ 1,96 g/dm³.
:::

## 4 | Doświadczenie {#dosw}

@klocek karta-bhp {} | Zasady pracy i pierwsza pomoc
@opis Cztery rozwijane karty: przed doświadczeniem (okulary, fartuch, czytanie opisu), kwasy i zasady (kwas do wody, płukanie 15 minut), ogrzewanie (probówka ukośnie, otworem od siebie), pierwsza pomoc (oparzenie, skaleczenie, wdychanie gazu). Wniosek: zasady są takie same przy każdym doświadczeniu i trzeba je znać przed rozpoczęciem pracy.

@klocek zbieranie-gazu {gaz="H2" metoda="woda" gazy="H2,O2,CO2"} | Zbieranie wodoru nad wodą (i porównanie z innymi metodami)
@opis Scena zbierania gazu: po lewej kolba z reakcją (pęcherzyki w cieczy, nad nią korek), z niej rurka odprowadzająca prowadzi do naczynia po prawej. Gaz jest bezbarwny, więc zaznaczono go ciemnozielonymi kropkami, a powietrze — szarymi. Chipy wybierają gaz i sposób zbierania: naczynie wylotem do góry (gaz cięższy od powietrza opada na dno i wypycha powietrze), wylotem do dołu (gaz lżejszy zbiera się pod dnem) albo nad wodą (gaz wypiera wodę z odwróconego naczynia). Poprawny wybór napełnia naczynie i pokazuje zielony werdykt; zły — gaz ucieka z naczynia albo rozpuszcza się w wodzie, a werdykt jest czerwony. Wniosek: o sposobie zbierania decyduje gęstość względna d = M/29 (cięższy czy lżejszy od powietrza) i rozpuszczalność w wodzie.

::: dosw | Doświadczenie 1 — Wytworzenie i pomiar wodoru: kontrola objętości molowej (demonstracja)
**Problem:** Czy z odważonej porcji cynku można przewidzieć objętość wodoru — i czy pomiar potwierdzi Vₘ = 22,4 dm³/mol?

**Hipoteza:** Zn + 2HCl → ZnCl₂ + H₂↑; z 3,25 g cynku (0,05 mol) powstanie 0,05 mol H₂, czyli teoretycznie 0,05 · 22,4 = 1,12 dm³ — pomiar odwróconym cylindrem nad wanienką powinien dać wartość bliską (poprawki: temperatura pokojowa zwiększy objętość, rozpuszczalność H₂ w wodzie minimalnie zmniejszy; porównujemy rzędy wielkości).

**Sprzęt:** kolba z korkiem i rurką odprowadzającą, odwrócony cylinder miarowy (lub butelka z podziałką) nad wanienką wodną, cynk granulowany (3,25 g — odważone), rozcieńczony kwas solny, okulary i rękawice — **demonstracja nauczycielska**.

**Przebieg:**
1. Wypełnij cylinder wodą, odwróć nad wanienką (koniec nie może się wynurzyć).
2. Do kolby wsyp cynk, wlej kwas, zamknij korkiem z rurką prowadzącą pod cylinder.
3. Gazy zbieraj nad wodą; po ustaniu reakcji odczytaj objętość H₂ przy wyrównaniu poziomów wody.
4. Porównaj z przewidywaniem (1,12 dm³ — warunki normalne; przy ~20 °C oczekuj ok. 7% więcej (293/273) — jakościowo).

**Obserwacje:** na cynku intensywne bąbelki; cylinder wypełnia się gazem; objętość końcowa rzędu ~1,1–1,2 dm³ (zależnie od warunków pomiaru).

**Wniosek:** 3,25 g Zn = 0,05 mol → 0,05 mol H₂ → teoretycznie 1,12 dm³ (Vₘ = 22,4 dm³/mol). Pomiar potwierdza rząd wielkości i ideę: masa substratu → mole → objętość gazu. Różnice rzędu kilku % to temperatura pomiaru, ciśnienie pary wodnej nad wodą i rozpuszczalność H₂ — dokładna analiza poprawek poza zakresem.

**Bezpieczeństwo:** H₂ — palny (próba zapłonu dopiero po zdjęciu cylindra, mała probówka, strona od twarzy); kwas — rękawice i okulary; sprawdzić szczelność przed startem; nie prowadzić przy otwartym ogniu.
:::

## 5 | Zadania {#zadania}

::: karta exam | Zadanie 1 (4 pkt) — Trójkąt konwersji na CO₂
Dla **88 g CO₂** (M = 44 g/mol) oblicz: (a) liczbę moli; (b) liczbę cząsteczek; (c) objętość w warunkach normalnych; (d) gęstość względną względem powietrza (M ≈ 29) i wniosek o zbieraniu gazu.
:::

::: odp | Pokaż klucz
(a) n = 88/44 = **2 mol** (1 pkt). (b) N = 2 · 6,02·10²³ = **1,204·10²⁴ cząsteczek** (1 pkt). (c) V = 2 · 22,4 = **44,8 dm³** (1 pkt). (d) d = 44/29 ≈ **1,52** — CO₂ cięższy od powietrza (można zbierać wypieraniem powietrza do zlewki „dnem w dół" — gaz opada) (1 pkt).
:::

::: karta exam | Zadanie 2 (5 pkt) — Stosunki objętościowe: spalanie propanu
Spalano **5 dm³ propanu** (C₃H₈ + 5O₂ → 3CO₂ + 4H₂O). Oblicz: (a) objętość O₂ potrzebną do spalania; (b) objętość CO₂ powstającą; (c) objętość powietrza (21% O₂ — N01); (d) dlaczego pary wodnej nie uwzględnia się w objętościach spalin; (e) ile moli propanu odpowiada 5 dm³ (warunki normalne) i jaką masę ma ta porcja?
:::

::: odp | Pokaż klucz
(a) Stosunek 1 : 5 → **25 dm³** (1 pkt). (b) 1 : 3 → **15 dm³** (1 pkt). (c) 25/0,21 ≈ **119 dm³** (1 pkt; dokładnie 119,05). (d) Po ochłodzeniu H₂O jest cieczą — z bilansu gazów wypada (1 pkt). (e) n = 5/22,4 ≈ 0,223 mol; m ≈ 0,223 · 44 ≈ **9,8 g** (1 pkt).
:::

::: karta exam | Zadanie 3 (5 pkt) — Wzór elementarny z procentów
Związek zawiera 85,7% C i 14,3% H (masowo); jego gęstość względem powietrza wynosi d ≈ 1,45 (M ≈ 42 g/mol). (a) Przeprowadź procedurę: masy → mole atomów → stosunek elementarny. (b) Podaj wzór elementarny i jego M. (c) Oblicz k i wzór rzeczywisty. (d) Do jakiej grupy węglowodorów należy ten związek (wzór ogólny)? (e) Podaj dwie możliwe tożsamości (nazwy) związku.
:::

::: odp | Pokaż klucz
(a) 100 g: n(C) = 85,7/12 = 7,14; n(H) = 14,3/1 = 14,3 → dziel przez 7,14: C 1,00; H 2,00 → stosunek C : H = 1 : 2 (1,5 pkt). (b) Wzór elementarny **CH₂**; M(el.) = 14 g/mol (0,5 pkt). (c) k = 42/14 = 3 → **C₃H₆** (2 pkt: 1 k, 1 wzór). (d) CₙH₂ₙ — alkeny (0,5 pkt). (e) Propen (propylen); ewentualnie cyklopropan (izomer C₃H₆ bez wiązania podwójnego — nazwa nieobowiązkowa) (0,5 pkt).
:::

::: karta exam | Zadanie 4 (4 pkt) — Gęstość względna w obie strony
(a) Oblicz d metanu (CH₄) względem powietrza (M ≈ 29) i wniosek o zbieraniu nad cieczą/powietrzem. (b) Gaz ma d = 2,22 względem powietrza — oblicz jego M i zaproponuj tożsamość (z serii organiki; M ∈ {58, 64,5}). (c) Ile waży 1 dm³ tego gazu w warunkach normalnych (gęstość absolutna)? (d) Dlaczego d jest liczbą bez jednostki?
:::

::: odp | Pokaż klucz
(a) d = 16/29 ≈ **0,55** — metan lżejszy od powietrza (można zbierać naczyniem dnem do góry lub nad cieczą) (1 pkt). (b) M = 2,22 · 29 ≈ **64,5 g/mol** → chloroetan C₂H₅Cl (24 + 5 + 35,5 = 64,5) (1,5 pkt). (c) ρ = M/Vₘ = 64,5/22,4 ≈ **2,88 g/dm³** (1 pkt). (d) To iloraz dwóch gęstości w tych samych jednostkach — jednostki się skracają (0,5 pkt).
:::

## 6 | Zadania konkursowe {#zadania-adv}

::: adv | Zadanie 5 (6 pkt) — Wzór rzeczywisty z gęstości: pełny łańcuch | poziom ambitny
Związek organiczny zawiera 40,0% C, 6,7% H i 53,3% O (masowo); jego gęstość względem powietrza wynosi d ≈ 2,07.
(a) Ustal wzór elementarny (pełna procedura).
(b) Oblicz M rzeczywiste z gęstości względnej (M powietrza ≈ 29).
(c) Ustal wzór rzeczywisty.
(d) Podaj **dwie** możliwe tożsamości związku (z serii organiki) i rozstrzygnij, jaką jedną próbą je rozróżnisz.
(e) Uczeń stwierdził: „wzór elementarny CH₂O to formaldehyd". Oceń — co jest nie tak?
:::

::: odp | Pokaż klucz
(a) 100 g → 40/12 = 3,33; 6,7/1 = 6,7; 53,3/16 = 3,33 → 1 : 2 : 1 → **CH₂O** (M(el.) = 30) (2 pkt).
(b) M = 2,07 · 29 ≈ **60 g/mol** (1 pkt).
(c) k = 60/30 = 2 → **C₂H₄O₂** (1 pkt).
(d) Dwie tożsamości C₂H₄O₂: **kwas octowy** CH₃COOH i **mrówczan metylu** HCOOCH₃ (izomery funkcjonalne: kwas i ester, ORG06). Rozróżnienie: lakmus — kwas octowy czerwieni lakmus, mrówczan metylu jest obojętny (1,5 pkt: 0,5 × 2 tożsamości, 0,5 próba).
(e) Formaldehyd to CH₂O rzeczywisty (M = 30) — wzór elementarny równy rzeczywistemu tylko, gdy k = 1; nasz związek ma M = 60, więc CH₂O jest tylko proporcją (1 pkt).
:::



::: adv | Zadanie 6 (7 pkt) — Eten przez trzy reaktory: objętości, wydajność, gęstość | poziom ambitny
Do instalacji wchodzi **11,2 dm³ etenu** (warunki normalne; Vₘ = 22,4 dm³/mol). Etap 1 — addycja HCl (wydajność 90%): CH₂=CH₂ + HCl → CH₃CH₂Cl. Etap 2 — reszta etenu (nieprzekształcona) przechodzi addycję Br₂ (1 : 1; M(Br₂) = 160 g/mol — wartość podręcznikowa). M(C₂H₅Cl) = 64,5 g/mol.
(a) Oblicz liczbę moli etenu na wejściu.
(b) Oblicz liczbę moli i masę chloroetanu z etapu 1.
(c) Oblicz gęstość względną chloroetanu względem powietrza (M ≈ 29) i porównaj z CO₂ — który jest cięższy?
(d) Oblicz masę Br₂ zużytą w etapie 2.
(e) Oblicz łączną objętość H₂ (warunki normalne), jaka wystarczyłaby, by uwodornić do etanu **cały** eten wejściowy (kontrola bilansu materiałowego instalacji).
(f) Uczeń podsumował: „z 11,2 dm³ etenu wyszło łącznie ok. 45 g produktów organicznych". Sprawdź rachunek (chloroetan + dibromoetan).
:::

::: odp | Pokaż klucz
(a) n(C₂H₄) = 11,2/22,4 = **0,5 mol** (1 pkt).
(b) n(C₂H₅Cl) = 0,9 · 0,5 = **0,45 mol**; m = 0,45 · 64,5 = **29,025 g ≈ 29,0 g** (2 pkt: 1 wydajność, 1 masa).
(c) d = 64,5/29 ≈ **2,22**; CO₂: 44/29 ≈ 1,52 — chloroetan **cięższy** (1 pkt).
(d) Eten na etap 2: 0,5 − 0,45 = 0,05 mol → n(Br₂) = 0,05 mol → m = 0,05 · 160 = **8 g** (1,5 pkt).
(e) Uwodornienie 1 : 1 na całość: 0,5 mol H₂ → V = 0,5 · 22,4 = **11,2 dm³** (0,5 pkt).
(f) Dibromoetan: 0,05 mol · 188 = 9,4 g; razem produkty: 29,0 + 9,4 = **38,4 g**. Wynik ucznia (ok. 45 g) jest zawyżony — błąd w rachunku masy (1 pkt).
:::

## 7 | Fiszki

::: fiszki
Definicja mola? | porcja 6,02·10²³ cząstek (atomów, cząsteczek, jonów) | definicje
Liczba Avogadra (szkolna i dokładna)? | 6,02·10²³ mol⁻¹; dokładnie 6,02214076·10²³ (SI 2019) | definicje
Wzory konwersji m–n? | n = m/M; m = n·M | rachunek
Wzory konwersji n–N? | N = n·N_A; n = N/N_A | rachunek
Wzory konwersji n–V (gazy)? | V = n·22,4; n = V/22,4 — tylko gazy! | rachunek
Vₘ i warunki normalne? | 22,4 dm³/mol przy 0 °C i ≈1013 hPa | gazy
Stosunki objętościowe gaz–gaz? | równe stosunkom współczynników równania (prawo Avogadro) — bez liczenia moli | gazy
Gęstość względna — wzory? | d = M/M(wzorca); M = d·29 (powietrze) lub d·2 (wodór) | gazy
M powietrza (średnia)? | ok. 29 g/mol (78% N₂ + 21% O₂) | gazy
Wzór elementarny? | najprostszy całkowity stosunek atomów (CH₂O) | wzory
Wzór rzeczywisty? | rzeczywista liczba atomów; M = k · M(elementarnego) | wzory
Procedura procentów — krok 2? | przelicz masy na mole atomów: n = m/A, potem dziel przez najmniejsze | wzory
CH₂O — o którym związku mówi? | o proporcji; rzeczywiście: C₂H₄O₂ (kwas octowy, M = 60) i C₆H₁₂O₆ (glukoza, M = 180) | wzory
1 mol wody — ile g i ile cm³? | 18 g; ok. 18 cm³ (Vₘ = 22,4 tylko dla gazów!) | pułapki
Para wodna w spalinach — objętość? | nie liczy się (po ochłodzeniu ciecz) | pułapki
:::

## 8 | Test kontrolny

::: test
? Objętość molowa gazu w warunkach normalnych wynosi:
+ 22,4 dm³/mol
- 22,4 cm³/mol
- 24 mol/dm³

? Z 10 dm³ propanu po spalaniu powstanie (C₃H₈ + 5O₂ → 3CO₂ + 4H₂O):
+ 30 dm³ CO₂
- 15 dm³ CO₂
- 50 dm³ CO₂

? Gaz o gęstości względnej d = 0,55 względem powietrza jest:
+ lżejszy od powietrza (możliwy metan)
- cięższy od powietrza (możliwy propan)
- niemożliwy do ustalenia bez próby

? Wzór elementarny CH₂O odpowiada rzeczywistemu:
+ C₂H₄O₂ (kwas octowy) przy M = 60 g/mol
- wyłącznie formaldehydowi, zawsze
- C₃H₆O₃ przy M = 60 g/mol

? Do ustalenia wzoru rzeczywistego oprócz procentów masowych potrzebne jest:
+ masa molowa (np. z gęstości względnej)
- objętość próbki
- temperatura topnienia
:::

## 9 | Słownik

::: slownik
mol :: jednostka liczności: porcja 6,02214076·10²³ cząstek (skrótowo 6,02·10²³).
liczba Avogadra (N_A) :: liczba cząstek w molu; 6,02·10²³ mol⁻¹ (dokładna od reformy SI 2019 r.).
masa molowa (M) :: masa jednego mola w g/mol; liczbowo równa masie cząsteczkowej/atomowej.
objętość molowa (Vₘ) :: objętość jednego mola gazu: 22,4 dm³/mol w warunkach normalnych — tylko dla gazów.
warunki normalne :: 0 °C i ciśnienie ≈ 1013 hPa; punkt odniesienia Vₘ = 22,4 dm³/mol.
prawo Avogadro :: w równych objętościach gazów (te T, p) jest ta sama liczba cząsteczek; stąd stosunki objętościowe = stosunki molowe.
stosunek objętościowy :: proporcja objętości gazów w reakcji, równa proporcji współczynników równania.
gęstość względna (d) :: stosunek gęstości gazu do gęstości wzorca (powietrze M ≈ 29, wodór M = 2); d = M/M(wzorca), liczba bez jednostki.
wzór elementarny :: najprostszy całkowity stosunek atomów w związku (CH₂O); niekoniecznie wzór cząsteczki.
wzór rzeczywisty (sumaryczny) :: rzeczywista liczba atomów w cząsteczce (C₂H₄O₂); M = k · M(elementarnego).
stosunek molowy :: proporcja moli substratów/produktów wynikająca ze współczynników równania.
liczba Loschmidta :: liczba cząsteczek gazu w 1 cm³ w warunkach normalnych (ok. 2,7·10¹⁹ — zaokrąglona).
gęstość absolutna :: masa jednostki objętości gazu: ρ = M/22,4 g/dm³ (warunki normalne) — odróżniać od d.
:::

## Do weryfikacji

- **ORG08:** Vₘ = 22,4 dm³/mol i warunki normalne (0 °C, 1013,25 hPa) — wartości standardowe podręcznikowe; objętość molowa przy ~20 °C „ok. 24 dm³/mol" — orientacyjne, oznaczone.
- **ORG08:** M powietrza ≈ 29 g/mol — średnia standardowa (dokładniej 28,96); d metanu 0,55 (16/29 = 0,5517), propanu 1,52 (44/29 = 1,517), chloroetanu 2,22 (64,5/29 = 2,224) — zaokrąglenia spójne.
- **ORG08:** liczba Loschmidta 2,69·10¹⁹/cm³ — zaokrąglona, oznaczona (dokładna 2,6868·10¹⁹ przy 22,414 dm³/mol).
- **ORG08:** kropla wody „ok. 0,05 cm³" — zależnie od pipety, oznaczone; 1 cm³ wody → 3,34·10²² cząsteczek (1/18 · 6,02·10²³ = 3,344·10²²) ✔.
- **ORG08:** exam 3 — dane poprawiono względem wersji roboczej (92,3% C / 7,7% H dawało stosunek 1 : 1 i M = 42, niepodzielne przez 13); teraz 85,7% C / 14,3% H → CH₂, k = 3, C₃H₆ — rachunek dokładny.
- **ORG08:** adv 5d — tożsamości C₂H₄O₂: kwas octowy i mrówczan metylu (ester, izomer funkcjonalny); wcześniejsza notka o glikolaldehydzie usunięta.
- **ORG08:** adv 6f — poprawna suma 38,4 g (29,025 + 9,4); „ok. 45 g" ucznia pozostawione jako celowy błąd do wykrycia (bez wskazania źródła błędu — klucz dopuszcza interpretację); rachunki: 0,45·64,5 = 29,025 ✔; 0,05·188 = 9,4 ✔; 29,025 + 9,4 = 38,425 ≈ 38,4 ✔.
- **ORG08:** M(Br₂) = 160 g/mol — wartość podręcznikowa spoza listy B1 (Br = 80), oznaczona (jak w ORG02).
- **SERIA ORG01–ORG08:** wszystkie odwołania do Vₘ = 22,4 dm³/mol domknięte wykładem ORG08; w ORG01–07 przy scalaniu można dodać odnośniki do sekcji 1–2 ORG08.

## AUDYT W1/W2 — zewnętrzny, blok organiczny (2026-10-14)

Zastosowano: dodano sekcję „Najczęstsze pułapki” z pięcioma punktami (masa molowa a masa próbki, Vₘ tylko dla gazów w warunkach normalnych, współczynniki, kolejność n → V, wydajność na właściwym etapie).

Nieprzyjęte: wzory n = m/M, N = n·N_A, V = n·Vₘ, Vₘ = 22,4 dm³/mol w warunkach normalnych są w lekcji; pułapka wzorów elementarnych i pary wodnej jest już w ćwiczeniach.

## AUDYT W1/W2 — kolejny przebieg zewnętrzny (2026-10-14)

Zastosowano: dodano pułapkę „brak sprawdzenia reagenta ograniczającego” do listy pułapek.

Nieprzyjęte (sprawdzone w pliku): procedura zadania (zbilansuj, przelicz na mole, użyj współczynników, przelicz na jednostkę, sprawdź fazę) jest w lekcji jako kroki przy zadaniu z gazami; zasada, że woda w warunkach normalnych jest cieczą, jest w lekcji; wzory n = m/M, N = n·N_A, V = n·Vₘ są poprawne.

Do osobnego zadania (nie w tej lekcji): test przekrojowy ORG01–ORG08 i zestaw mieszany — poza zakresem tego audytu.

## AUDYT W1/W2 — wynik zewnętrzny, kolejny przebieg (2026-10-14)

Zastosowano: brak zmian treści.

Nieprzyjęte: oznaczenie „W1 FULL” nie zostało wprowadzone — pełny przegląd linia po linii nie był wykonany, stan lekcji pozostaje „bez audytu W1”. Sprawdzone w pliku: zależności n = m/M, N = nN_A, V = nVₘ; Vₘ = 22,4 dm³/mol tylko dla gazów w warunkach normalnych; gęstości względne (CH₄ ≈ 0,55; C₂H₅Cl ≈ 2,22); wzór elementarny CH₂O i rzeczywisty C₂H₄O₂ (k = 2); stosunki objętościowe propanu; zadanie łańcuchowe z etenem (0,5 mol, 0,45 mol chloroetanu, 29,0 g; Br₂ 8,0 g; produkty ok. 38,4 g) jest w lekcji z kontrolą uczniowskiego błędu „45 g”. Zapis „CH₄?” nie występuje w pliku.
