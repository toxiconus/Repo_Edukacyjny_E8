---
kod: F06
uid: CHE.01.F06.uklad_okresowy
tytul: Układ okresowy
opis: Okres, grupa, blok · elektrony walencyjne grup głównych · metale, niemetale, półmetale · rodziny · wodór · trendy: promień, elektroujemność, energia jonizacji, charakter metaliczny
kicker: F06 · FUNDAMENTY · MASTER v1.0
lead: Trzecia lekcja fazy B. Wiesz już, że pierwiastek wyznacza liczba protonów Z (F04, F05). Teraz uczymy się czytać układ okresowy jak mapę:
lead: z „adresu” pierwiastka — okresu i grupy — odczytujemy budowę zewnętrznej powłoki i przewidujemy, jak pierwiastek się zachowa.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stan: "W1 (audyt 06, 06b) wprowadzony — 2026-10-13"
stopka: **CHEMIA F06 v1.1 MASTER** · Układ okresowy · 2026
---
::: minimum | Muszę umieć na E8 — 10 punktów
1. Układ okresowy porządkuje pierwiastki według **rosnącej liczby atomowej Z**.
2. **Okres** to poziomy wiersz; w modelu szkolnym numer okresu = **liczba powłok elektronowych** atomu (Na: okres 3 → 3 powłoki).
3. **Grupa** to pionowa kolumna (numeracja IUPAC 1–18); pierwiastki jednej grupy mają podobną budowę zewnętrznej powłoki i podobne właściwości.
4. **Grupy główne:** 1, 2, 13–18. **Grupy poboczne (metale przejściowe):** 3–12.
5. **Elektrony walencyjne** w grupach głównych: grupy 1–2 → numer grupy; grupy 13–18 → numer grupy − 10 (wyjątek: hel ma 2).
6. Na leży w **grupie 1 i okresie 3**, Cl — w **grupie 17 i okresie 3**; gazy szlachetne tworzą **grupę 18**.
7. **Metale** zajmują lewą i środkową część układu, **niemetale** — prawą górną, **półmetale (metaloidy)** leżą przy schodkowej granicy.
8. Rodziny: grupa 1 — **litowce**, 2 — **berylowce**, 17 — **fluorowce**, 18 — **gazy szlachetne**. Wodór ma położenie wyjątkowe i jest niemetalem.
9. Trendy: **promień atomu** rośnie w dół grupy i maleje w prawo okresu; **elektroujemność** rośnie w prawo i w górę (największa — fluor).
10. **Grupa ≠ okres** i **grupa ≠ wartościowość** — położenie to informacja, z której przewidujemy, a nie gotowa odpowiedź.
:::

::: warstwy
- e8 | <b>E8:</b> okres i grupa; grupy główne i poboczne; elektrony walencyjne z numeru grupy; metale, niemetale, półmetale; rodziny; trend promienia i elektroujemności
- understand | <b>Rozumienie:</b> procedura „adres → elektrony → przewidywanie”; mechanizm trendów (ładunek jądra, liczba powłok, ekranowanie); wodór jako wyjątek; wartościowość ≠ numer grupy
- extra | <b>Ambitne (LO):</b> bloki s, p, d, f; energia jonizacji i jej wyjątki; wypieranie fluorowców; dlaczego metale przejściowe mają zmienne stopnie utlenienia
- contest | <b>Ponad LO:</b> rozwijane bloki „poziom akademicki” — przycisk w nagłówku lekcji
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to (ok. 35 min)
1. **[§0.4](#diagnoza)** — diagnoza: odpowiedz, zanim zaczniesz czytać.
2. **[§1](#mapa)–[§3](#walencyjne)** — układ jako mapa, okres i grupa, elektrony walencyjne.
3. **[§4](#metale)–[§5](#rodziny)** — metale, niemetale, półmetale i rodziny.
4. **[§7](#trendy)** — trendy: sprawdź je w modelu układu okresowego; potem **[§10](#klinika)** i **[§11](#cwiczenia)** A i B.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

::: karta understand
- **Nie czytaj biernie.** Najpierw spróbuj odpowiedzieć, potem sprawdź. Mów na głos, rysuj fragment układu.
- **Czytaj zawsze w tej samej kolejności:** symbol → Z → okres i grupa → liczba powłok i elektrony walencyjne → przewidywanie. Nazwa czy wartościowość — dopiero na końcu.
- **Każdą strzałkę trendu dopowiedz zdaniem „dlaczego?”** — sama strzałka bez mechanizmu szybko się myli.
- **Zasada 80/20:** grupy i okresy · elektrony walencyjne · typowe wartościowości · trendy (promień, elektroujemność).
:::

## 0.2 | Cele lekcji i pytanie przewodnie [[basic:E8]] {#cele}

::: karta basic | Po tej lekcji potrafisz
- opisać budowę układu okresowego (grupy, okresy) i odczytać z niego symbol, Z, masę atomową, grupę i okres ([§1](#mapa), [§2](#okresy-grupy)),
- odróżnić grupy główne (1, 2, 13–18) od pobocznych (3–12) ([§2](#okresy-grupy)),
- obliczyć liczbę elektronów walencyjnych dla grup głównych i podać typowe wartościowości ([§3](#walencyjne)),
- wskazać obszary metali, niemetali i półmetali oraz rozpoznać rodziny pierwiastków ([§4](#metale), [§5](#rodziny)),
- opisać i uzasadnić trendy: promień atomowy, elektroujemność, charakter metaliczny ([§7](#trendy)),
- (ambitnie) rozumieć zmiany właściwości w grupach i okresach, znać bloki s, p, d, f i energię jonizacji ([§8](#bloki)).
:::

::: karta exam | Pytanie przewodnie
**Co można przewidzieć z samego miejsca pierwiastka w układzie?** I dlaczego układ okresowy jest zaprojektowany właśnie tak — wierszami i kolumnami, a nie jako zwykła lista?

> Odpowiedź budujesz w [§1](#mapa)–[§3](#walencyjne) (adres → elektrony), sprawdzasz trendy w modelu z [§7](#trendy) i w doświadczeniach z [§9](#doswiadczenia).
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- substancja czysta a mieszanina, pierwiastek — F02,
- atom: Z, A, protony, neutrony, elektrony; elektrony na powłokach (model Bohra) — F04,
- izotopy, jony, masa atomowa jako średnia ważona — F05.

> Konfigurację elektronową (powłoki K, L, M, N i podpowłoki) wyprowadza w pełni F07. Tutaj używamy z niej tylko liczby powłok i liczby elektronów zewnętrznych.

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Co to jest okres, a co grupa?
2. Gdzie leży sód (Z = 11)? Ile powłok elektronowych ma jego atom?
3. Gdzie leży chlor? Ile ma elektronów walencyjnych?
4. Co to są elektrony walencyjne?
5. Co oznacza, że pierwiastek należy do bloku p?
6. Co to jest elektroujemność? Który pierwiastek ma największą?

::: odp | Pokaż klucz i interpretację
1. Okres — wiersz; grupa — kolumna. 2. Grupa 1, okres 3; 3 powłoki (2, 8, 1). 3. Grupa 17, okres 3; 7 elektronów walencyjnych. 4. Elektrony zewnętrznej powłoki — najważniejsze dla tworzenia wiązań i reaktywności. 5. Ostatnie elektrony obsadzają podpowłokę p ([§8](#bloki)). 6. Zdolność atomu w związku do przyciągania wspólnej pary elektronowej; fluor.

**Interpretacja:** 0–2/6 — rdzeń krok po kroku, z przykładami; 3–4/6 — rdzeń, szczególnie punkty z błędami; 5–6/6 — przejdź szybko do [§7](#trendy), [§8](#bloki) i zadań transferowych w [§11](#cwiczenia).
:::
:::

## 0.5 | Wykład — układ okresowy od zera {#wyklad}

::: karta understand | Wykład — układ okresowy od zera
Układ okresowy wisi w każdej sali chemicznej i na pierwszy rzut oka przypomina tabelę do wykucia. To błąd. To **mapa** — a kto umie ją czytać, ten z położenia pierwiastka odczyta jego budowę i przewidzi, jak się zachowa, nie ucząc się tego na pamięć.

Pierwiastki są ułożone według rosnącej **liczby atomowej Z**, czyli liczby protonów. Poziome wiersze to **okresy** (jest ich 7), pionowe kolumny — **grupy** (18). Numer okresu mówi, ile **powłok elektronowych** ma atom: sód (okres 3) ma trzy powłoki — K, L, M. Numer grupy (dla grup 1–2 i 13–18) mówi, ile atom ma **elektronów walencyjnych** — tych na zewnętrznej powłoce, które biorą udział w reakcjach: dla grup 1 i 2 to liczba równa numerowi grupy, dla grup 13–18 — numer grupy minus 10 (chlor w grupie 17 ma 7 elektronów walencyjnych).

To dlatego pierwiastki w jednej grupie są do siebie podobne — mają tyle samo elektronów walencyjnych. **Litowce** (grupa 1: Li, Na, K…) to miękkie, bardzo reaktywne metale, które łatwo oddają 1 elektron i tworzą jony 1+. **Berylowce** (grupa 2) oddają 2 elektrony. **Fluorowce** (grupa 17: F, Cl, Br, I) to reaktywne niemetale, które chętnie przyjmują 1 elektron i tworzą jony 1−. **Helowce** (grupa 18) mają zapełnioną powłokę zewnętrzną (oktet; hel — dublet) i prawie w ogóle nie reagują — to gazy szlachetne.

Układ dzieli się też na **metale** (po lewej i w środku, ok. 80% pierwiastków), **niemetale** (prawy górny róg) i **półmetale** na granicy (np. krzem, german). Metale przewodzą prąd i ciepło, mają połysk, są kowalne; niemetale zwykle nie. Wyjątkowe miejsce zajmuje **wodór** — stoi w grupie 1, bo ma 1 elektron walencyjny, ale jest niemetalem i gazem.

Wreszcie **trendy**: w grupie w dół rośnie promień atomu (przybywa powłok) i rośnie aktywność metali; w okresie w prawo promień maleje (jądro silniej przyciąga elektrony), a rośnie charakter niemetaliczny. Na egzaminie wystarczy umieć z położenia odczytać: liczbę powłok, liczbę elektronów walencyjnych, typ pierwiastka i najczęstszy ładunek jonu.
:::

## 1 | Układ okresowy jako mapa, a nie tabela do zapamiętania [[basic:E8]] {#mapa}

Układ okresowy porządkuje pierwiastki według **rosnącej liczby atomowej Z** i ustawia jeden pod drugim te, których budowa elektronowa i właściwości są podobne. To **mapa regularności** wynikających z budowy atomu: najważniejsza umiejętność tej lekcji to przejście od **adresu** pierwiastka do **przewidywania**, a nie samo znalezienie kratki.

W każdym polu układu znajdziesz co najmniej: **symbol**, **liczbę atomową Z** (= liczba protonów, F04) i **masę atomową** (średnia ważona mas izotopów, F05). Wiele tablic podaje też nazwę, elektroujemność i konfigurację elektronową.

::: karta core | Procedura „położenie → elektrony → przewidywanie”
1. **Symbol / nazwa → Z** (z pola układu).
2. **Z → okres i grupa** (wiersz i kolumna).
3. **Okres → liczba zajętych powłok** (model szkolny).
4. **Grupa (główna) → liczba elektronów walencyjnych.**
5. **Elektrony walencyjne → przewidywane zachowanie:** odda czy przyjmie elektrony, jaki jon, ile wiązań.
6. Dopiero potem nazwa rodziny lub typowa wartościowość.
:::

::: karta understand | Model i jego granica
Położenie organizuje informacje o Z, budowie elektronowej i trendach. Na leży w grupie 1 i okresie 3 — to pozwala przewidzieć, że łatwo oddaje jeden elektron. Trend jest jednak **modelem jakościowym** i ma wyjątki: wniosek wyciągnięty z położenia zapisuj jako przewidywanie, nie jako definicję bez wyjątków.
:::

::: historia | Skąd się wziął układ okresowy
W 1869 r. **Dmitrij Mendelejew** ułożył znane wtedy pierwiastki według masy atomowej i powtarzających się właściwości. Zostawił puste miejsca i przewidział właściwości nieodkrytych pierwiastków — np. „ekakrzemu”, odkrytego w 1886 r. jako german. W 1913 r. **Henry Moseley** pokazał, że prawdziwym kluczem porządkującym jest liczba atomowa Z, a nie masa — dlatego np. argon (39,95) stoi przed potasem (39,10).
:::

## 2 | Okresy i grupy [[basic:E8]] {#okresy-grupy}

**Okres** to poziomy rząd układu. W modelu szkolnym **numer okresu = liczba powłok elektronowych** atomu obojętnego (dokładniej: najwyższa zajęta powłoka w stanie podstawowym).
- Okres 1: H, He (2 pierwiastki).
- Okres 2: Li–Ne (8).
- Okres 3: Na–Ar (8).
- Okres 4: K–Kr (18 pierwiastków — pojawiają się metale przejściowe).
- Okres 5: Rb–Xe (18). Okres 6: Cs–Rn (32 — z lantanowcami). Okres 7: Fr–Og (32 — z aktynowcami).

::: karta understand | Długości okresów
| okres | pierwiastków | zakres Z |
|---|---|---|
| 1 | 2 | 1–2 |
| 2 | 8 | 3–10 |
| 3 | 8 | 11–18 |
| 4 | 18 | 19–36 |
| 5 | 18 | 37–54 |
| 6 | 32 | 55–86 |
| 7 | 32 | 87–118 |

Lantanowce (La–Lu, Z 57–71) i aktynowce (Ac–Lr, Z 89–103) to bloki f — wypisane dwa wiersze pod tablicą, by nie rozciągać układu.
:::

::: adv | Wyjątek: pallad | poziom akademicki
Pallad (Pd, okres 5) w stanie podstawowym ma konfigurację [Kr] 4d¹⁰ — jego najwyższa zajęta powłoka to 4, nie 5. Reguła „okres = liczba powłok” jest więc przybliżeniem dla większości pierwiastków; w szkole traktujemy ją jako model.
:::

**Grupa** to pionowa kolumna. Pierwiastki grup głównych w tej samej grupie mają **analogiczną budowę zewnętrznej powłoki**, co wyjaśnia ich podobieństwo chemiczne.
- **Grupy główne:** 1, 2, 13–18.
- **Grupy poboczne:** 3–12 (metale przejściowe).

::: karta warning | Numeracja grup
Standardem jest numeracja **IUPAC 1–18**. Starsze systemy (europejski z literami A/B, amerykański) są wycofywane, ale mogą pojawiać się w starszych podręcznikach — np. chlor bywał opisywany jako „grupa VIIA”. Na egzaminie używaj numeracji 1–18.
:::

::: karta understand | Przykład: Na, Mg, Cl — jeden okres, trzy różne grupy
Na: okres 3, grupa 1. Mg: okres 3, grupa 2. Cl: okres 3, grupa 17. Wszystkie mają **3 powłoki**, ale **różną liczbę elektronów walencyjnych** (1, 2, 7) — dlatego zachowują się zupełnie inaczej: Na i Mg oddają elektrony (tworzą kationy), Cl przyjmuje (tworzy anion). Pierwiastki jednego okresu **nie** mają podobnych właściwości — okres mówi o liczbie powłok, a wraz z Z zmienia się budowa zewnętrznej powłoki i charakter chemiczny.
:::

::: karta basic | Pierwsze 20 pierwiastków — symbole, grupy, okresy
| Z | symbol | nazwa | grupa | okres | e⁻ walencyjne |
|---|---|---|---|---|---|
| 1 | H | wodór | 1 | 1 | 1 (wyjątek — §6) |
| 2 | He | hel | 18 | 1 | 2 |
| 3 | Li | lit | 1 | 2 | 1 |
| 4 | Be | beryl | 2 | 2 | 2 |
| 5 | B | bor | 13 | 2 | 3 |
| 6 | C | węgiel | 14 | 2 | 4 |
| 7 | N | azot | 15 | 2 | 5 |
| 8 | O | tlen | 16 | 2 | 6 |
| 9 | F | fluor | 17 | 2 | 7 |
| 10 | Ne | neon | 18 | 2 | 8 |
| 11 | Na | sód | 1 | 3 | 1 |
| 12 | Mg | magnez | 2 | 3 | 2 |
| 13 | Al | glin | 13 | 3 | 3 |
| 14 | Si | krzem | 14 | 3 | 4 |
| 15 | P | fosfor | 15 | 3 | 5 |
| 16 | S | siarka | 16 | 3 | 6 |
| 17 | Cl | chlor | 17 | 3 | 7 |
| 18 | Ar | argon | 18 | 3 | 8 |
| 19 | K | potas | 1 | 4 | 1 |
| 20 | Ca | wapń | 2 | 4 | 2 |

Zadanie: z pamięci podaj symbol, okres i liczbę elektronów walencyjnych dla Mg, F i K. Sprawdź w tabeli.
:::

::: karta basic | Dodatkowe symbole na E8
Zn — cynk (gr. 12, okres 4) · Br — brom (17, 4) · I — jod (17, 5) · Ag — srebro (11, 5; łac. *argentum*) · Au — złoto (11, 6; *aurum*) · Hg — rtęć (12, 6; *hydrargyrum*) · Pb — ołów (14, 6; *plumbum*) · Sn — cyna (14, 5; *stannum*)
:::

## 3 | Elektrony walencyjne, jony i wartościowość [[basic:E8]] {#walencyjne}

**Elektrony walencyjne** to elektrony zewnętrznej powłoki, w szkolnym modelu najważniejsze dla przewidywania, jak atom łączy się z innymi. Sód ma jeden elektron na zewnętrznej powłoce, chlor — siedem. Ta liczba pomaga przewidywać typowe jony i liczbę wiązań, ale nie jest sama w sobie pełnym opisem reaktywności; dokładna definicja zależy od modelu i rodzaju pierwiastka (pełniej — F07).

::: regula
**Reguła dla grup głównych:** grupy 1 i 2 → liczba elektronów walencyjnych = numer grupy; grupy 13–18 → numer grupy − 10 (wyjątek: hel ma 2 elektrony — dublet). To reguła **tylko dla grup głównych**, nie uniwersalny wzór — dla metali przejściowych sytuacja jest bardziej złożona ([§8](#bloki)).
:::

| Grupa | Elektrony walencyjne | Rodzina | Typowe wartościowości | Typowy jon prosty |
|---|---|---|---|---|
| 1 | 1 | litowce (metale alkaliczne) | I | Na⁺, K⁺ |
| 2 | 2 | berylowce | II | Mg²⁺, Ca²⁺ |
| 13 | 3 | borowce | III | Al³⁺ |
| 14 | 4 | węglowce | IV (węgiel także II, np. w CO) | zwykle brak (wiązania kowalencyjne) |
| 15 | 5 | azotowce (pniktogeny) | III lub V | N³⁻ (w azotkach metali) |
| 16 | 6 | tlenowce (chalkogeny) | II (wobec wodoru i metali); IV, VI (S wobec tlenu) | O²⁻, S²⁻ |
| 17 | 7 | fluorowce (halogeny) | I (wobec metali i wodoru); Cl wobec tlenu: I, III, IV, VI, VII | F⁻, Cl⁻ |
| 18 | 8 (He: 2) | gazy szlachetne (helowce) | w szkolnym modelu nie tworzą związków (Xe i Kr tworzą nieliczne, np. XeF₂) | brak |

@klocek diagram-bohra {z="17"} | Elektrony walencyjne na powłoce zewnętrznej: wybierz pierwiastek suwakiem Z
@opis Model Bohra: pośrodku czerwone jądro z napisem „Zp” (liczba protonów), wokół niego przerywane okręgi powłok K, L, M (i N) z kropkami-elektronami; kropki powłoki zewnętrznej (walencyjnej) są w kolorze akcentu, wewnętrzne szare. Suwak Z zmienia pierwiastek, przyciski dodają lub odbierają elektron: kation oddaje elektron z powłoki zewnętrznej (kropka odlatuje), anion przyjmuje elektron (kropka dolatuje). Obok liczby protonów, elektronów, ładunek i liczba elektronów na powłokach. Wniosek: Na ma 2, 8, 1 elektronów, po oddaniu jednego ma 2, 8 (jak Ne); Cl ma 2, 8, 7, po przyjęciu jednego 2, 8, 8 (jak Ar); liczba protonów się nie zmienia.

::: karta core | Elektrony walencyjne → kierunek tworzenia jonu
Metale grup głównych **oddają** elektrony walencyjne → **kation** o ładunku = liczbie oddanych elektronów (Na → Na⁺, Mg → Mg²⁺, Al → Al³⁺). Niemetale grup 15–17 w związkach z metalami **przyjmują** brakujące do oktetu elektrony → **anion** (Cl: 7 + 1 = 8 → Cl⁻; O: 6 + 2 → O²⁻). Liczenie elektronów w jonie: e = Z − q (F05).
:::

::: karta core | Typowe jony grup głównych — ile elektronów, jak gaz szlachetny
| Jon | grupa | e⁻ | jak gaz szlachetny |
|---|---|---|---|
| Na⁺ | 1 | 10 | jak Ne |
| Mg²⁺ | 2 | 10 | jak Ne |
| Al³⁺ | 13 | 10 | jak Ne |
| O²⁻ | 16 | 10 | jak Ne |
| F⁻ | 17 | 10 | jak Ne |
| K⁺ | 1 | 18 | jak Ar |
| Ca²⁺ | 2 | 18 | jak Ar |
| S²⁻ | 16 | 18 | jak Ar |
| Cl⁻ | 17 | 18 | jak Ar |

**Wyjątki** (konfiguracja jonów d — zob. F07 §5): Ag⁺ ([Kr]4d¹⁰), Zn²⁺ ([Ar]3d¹⁰), Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺. Nie są „jak gaz szlachetny”, więc nie stosuj tej reguły do nich bez sprawdzenia.
:::

::: nie-myl
**Grupa ≠ wartościowość.** Wartościowość zależy od konkretnego związku. Chlor (grupa 17) w HCl jest jednowartościowy, a w Cl₂O₇ i HClO₄ — siedmiowartościowy (stopień utlenienia +VII; stopnie utlenienia — F09). Najwyższa wartościowość pierwiastka grup 13–17 wobec tlenu zwykle równa się liczbie elektronów walencyjnych (S w SO₃: VI). Wyjątki: fluor jest zawsze jednowartościowy (I), a tlen zwykle dwuwartościowy (II); chlor w tlenkach przyjmuje różne wartościowości (np. ClO₂: IV). „Grupa 17 = wartościowość XVII” — nigdy.
:::

::: karta warning | Wodór w wodorkach
Wodór, mimo położenia w grupie 1, nie jest metalem alkalicznym. Ma 1 elektron walencyjny, ale zachowuje się inaczej: tworzy H⁺ (w kwasach) albo H⁻. Wodorki metali (NaH, CaH₂) zawierają jon wodorkowy H⁻ — szczegóły w N06 Wodorki.
:::

## 4 | Metale, niemetale, półmetale [[basic:E8]] {#metale}

| Typ | Położenie | Przykłady | Typowe właściwości |
|---|---|---|---|
| Metale | lewa i środkowa część układu | Na, Mg, Fe, Cu, Au | połysk, przewodzą prąd i ciepło, kowalne i ciągliwe; tworzą kationy |
| Niemetale | prawa górna część | O, N, S, Cl, F | zwykle bez połysku, izolatory, w stanie stałym kruche; tworzą aniony lub wiązania kowalencyjne |
| Półmetale (metaloidy) | wzdłuż granicy | B, Si, Ge, As, Sb, Te | właściwości pośrednie, np. półprzewodniki (Si, Ge) |

**Granica metal–niemetal** ma kształt **linii schodkowej** (od boru do astatu); półmetale leżą tuż przy niej. Metali jest najwięcej — znajdują się w wielu grupach, nie tylko w grupie 1 (Fe, Cu, Zn leżą w grupach pobocznych).

> **Wodór jest niemetalem**, mimo że w wielu tablicach stoi w grupie 1 nad litowcami ([§6](#wodor)).

::: karta understand | Stan skupienia pierwiastków w temperaturze pokojowej
- **Gazy (11):** H₂, N₂, O₂, F₂, Cl₂ oraz gazy szlachetne He, Ne, Ar, Kr, Xe, Rn.
- **Ciecze (2):** Br₂ i Hg (rtęć, grupa 12).
- **Ciała stałe:** reszta, np. Na, Fe, C, S, I₂.

Zadanie: do której grupy należy każdy z gazów dwuatomowych? (H₂ — wyjątek, N₂ — 15, O₂ — 16, F₂ i Cl₂ — 17.)
:::

## 5 | Rodziny pierwiastków [[basic:E8]] {#rodziny}

Ważniejsze od samej nazwy jest powiązanie rodziny z **budową zewnętrznej powłoki** i typowymi właściwościami:

- **Grupa 1 — litowce** (metale alkaliczne: Li, Na, K, Rb, Cs, Fr): 1 elektron walencyjny; miękkie, bardzo aktywne metale; z wodą dają wodorotlenki — silne zasady (NaOH, KOH) i wodór. Reaktywność **rośnie w dół grupy** ([§9](#doswiadczenia)).
- **Grupa 2 — berylowce** (Be, Mg, Ca, Sr, Ba, Ra): 2 elektrony walencyjne; aktywne metale tworzące jony E²⁺. Ca, Sr, Ba i Ra nazywa się też **metalami ziem alkalicznych**.
- **Grupa 17 — fluorowce, halogeny** (F, Cl, Br, I, At — cała grupa, nie tylko fluor): 7 elektronów walencyjnych; bardzo aktywne niemetale, z metalami tworzą sole; cząsteczki dwuatomowe (F₂, Cl₂, Br₂, I₂). Reaktywność **maleje w dół grupy**.
- **Grupa 18 — gazy szlachetne, helowce** (He, Ne, Ar, Kr, Xe, Rn): zewnętrzna powłoka zapełniona (oktet, He — dublet); bardzo mało reaktywne, występują jako pojedyncze atomy. Tworzą jednak nieliczne związki, np. XeF₂, XeF₄, XeO₃.
- Pozostałe grupy główne: 13 — borowce, 14 — węglowce, 15 — azotowce, 16 — tlenowce. Grupy 3–12 — **metale przejściowe**; ich zachowania nie wtłaczamy sztucznie w prostą regułę grup głównych.

::: karta understand | Skąd nazwy — mnemotechnika
| Termin | Skąd nazwa | Jak pomaga zapamiętać |
|---|---|---|
| Atom | gr. *atomos* — „niepodzielny” | dawniej sądzono, że atomu nie da się podzielić (F04) |
| Jon | gr. *ion* — „wędrujący” | jony wędrują w roztworze (F05) |
| Kation | „idący ku katodzie” | kation ma ładunek + |
| Anion | „idący ku anodzie” | anion ma ładunek − |
| Metale alkaliczne | od *alkaliów* (ług) | ich wodorotlenki to silne zasady (NaOH, KOH) |
| Halogeny | gr. *hals* (sól) + *gennao* (tworzę) — „tworzące sole” | reagują z metalami → sole (NaCl); polska nazwa „fluorowce” — od pierwszego pierwiastka grupy |
| Chalkogeny | gr. „tworzące rudy” | tlen i siarka występują w minerałach rudnych (tlenki, siarczki) |
| Gazy szlachetne | „szlachetne” = niechętnie reagujące | He, Ne, Ar… — dawniej uważane za całkowicie bierne |
:::

::: karta understand | Pierwiastki w życiu — zastosowanie i właściwość, która to umożliwia
| Pierwiastek | Zastosowanie / rola | Właściwość, która to umożliwia |
|---|---|---|
| Na, K | przewodzenie impulsów nerwowych (jony w organizmie) | łatwo tworzą kationy 1+ |
| Ca | budowa kości i zębów (fosforan wapnia) | tworzy jon Ca²⁺ wbudowywany w związki |
| Cl | dezynfekcja wody; chlorek sodu w soli kuchennej | silny utleniacz, przyjmuje 1 e⁻ |
| Ar | gaz w żarówkach i do spawania | obojętny, prawie nie reaguje |
| Si | półprzewodniki w elektronice | półmetal — właściwości pośrednie |
| Fe | hemoglobina (transport tlenu) i stal | metal przejściowy, zmienne stopnie utlenienia |
| Cu | przewody elektryczne | dobry przewodnik (metal) |
| F | fluorki w pastach do zębów | największa elektroujemność |

Zadanie otwarte: dlaczego do żarówki wybiera się argon, a nie tlen?
:::

## 6 | Wodór — wyjątkowe położenie [[understand:ROZUMIENIE]] {#wodor}

Wodór ma konfigurację 1s¹ — **jeden elektron**, jak litowce. Dlatego bywa umieszczany w grupie 1. Brakuje mu jednak tylko jednego elektronu do **dubletu** (konfiguracji helu), jak fluorowcom do oktetu — dlatego bywa też stawiany nad grupą 17. W wielu tablicach stoi osobno: to wyjątek.

::: karta core | Wodór nie jest metalem alkalicznym
Mimo wspólnej z litowcami konfiguracji zewnętrznej wodór jest **niemetalem**: gaz z cząsteczkami H₂, nie przewodzi prądu, z niemetalami tworzy wiązania kowalencyjne (H₂O, HCl, CH₄), a z aktywnymi metalami — wodorki z jonem H⁻ (NaH). Położenie w układzie wynika z konfiguracji elektronowej, ale nie przesądza o charakterze pierwiastka.
:::

## 7 | Trendy okresowe — strzałka plus mechanizm [[understand:ROZUMIENIE]] {#trendy}

**Trend okresowy** to powtarzalna tendencja zmian właściwości wraz z położeniem pierwiastka w układzie. Trend pomaga przewidywać zachowanie, ale nie zastępuje sprawdzenia konkretnego przypadku. Ogólne tendencje wynikają z konkurencji trzech czynników:
- **ładunku jądra** (rośnie z Z),
- **odległości** elektronów walencyjnych od jądra (rośnie z liczbą powłok),
- **ekranowania** — elektrony wewnętrznych powłok częściowo „zasłaniają” jądro przed elektronami zewnętrznymi.

| Cecha | W dół grupy | W prawo okresu | Najkrócej: dlaczego |
|---|---|---|---|
| Promień atomowy | rośnie | maleje | w dół — nowa powłoka; w prawo — większy ładunek jądra przy tej samej powłoce mocniej ściąga elektrony |
| Elektroujemność | maleje | rośnie | w prawo — rośnie ładunek jądra przy tej samej powłoce; w górę — mniej powłok, więc elektrony są bliżej jądra i silniej przyciągane. W dół grupy jest odwrotnie, więc maleje |
| Energia jonizacji [[extra:AMBITNE]] | maleje | rośnie | trudniej oderwać elektron silnie przyciągany przez jądro |
| Charakter metaliczny | rośnie | maleje | łatwiej oddać elektron walencyjny daleki od jądra |
| Charakter niemetaliczny | maleje | rośnie | odwrotnie niż metaliczny |

::: karta core | Promień atomowy
Ogólnie **rośnie w dół grupy**, ponieważ pojawiają się kolejne powłoki. W okresie ogólnie **maleje w prawo**, ponieważ rośnie ładunek jądra, a elektrony walencyjne pozostają na tej samej powłoce — są silniej przyciągane. Dlatego „większe Z” **nie** oznacza zawsze większego promienia: Cl (Z = 17) jest mniejszy niż Na (Z = 11). W modelu i w tablicach używamy **promienia kowalencyjnego** jako miary wielkości atomu; wartości różnią się zależnie od definicji, ale trend jest ten sam.
:::

::: karta understand | Promienie jonów — kation mniejszy, anion większy
- **Kation** ma mniej elektronów przy tej samej liczbie protonów, więc chmura elektronowa się kurczy: **Na⁺ < Na** (zabrano całą powłokę M).
- **Anion** ma więcej elektronów, więc elektrony się odpychają: **Cl⁻ > Cl**.

Zadanie: porównaj Na i Na⁺ oraz Cl i Cl⁻. (Odp.: Na⁺ < Na; Cl⁻ > Cl.)
:::

::: karta core | Elektroujemność
**Elektroujemność** to miara zdolności atomu **w związku chemicznym** do przyciągania do siebie wspólnej pary elektronowej. Nie jest to „siła przyciągania wszystkich elektronów atomu”. W kursie używamy **skali Paulinga** — przede wszystkim do przewidywania polaryzacji wiązania i rozróżniania typów wiązań (F10–F11). Rośnie **w prawo okresu** (większy ładunek jądra, ta sama powłoka) i **w górę grupy** (mniej powłok, elektrony bliżej jądra). Największą elektroujemność ma **fluor**.
:::

| Pierwiastek | F | O | Cl | N | C | H | Mg | Ca | Na | K |
|---|---|---|---|---|---|---|---|---|---|---|
| χ (Pauling) | 3,98 | 3,44 | 3,16 | 3,04 | 2,55 | 2,20 | 1,31 | 1,00 | 0,93 | 0,82 |

> Wartości zaokrąglone; w modelu niżej — tryb „elektroujemność” dla pierwiastków 1–54.

::: karta core | Charakter metaliczny
Ogólnie **rośnie w dół i w lewo** układu: metale leżące nisko i po lewej najłatwiej oddają elektrony walencyjne. To trend jakościowy, nie mechaniczny „generator odpowiedzi”.
:::

@klocek uklad-okresowy-54 {tryby="adres,blok,wal,r,en,ie" wybrany="Cl"} | Układ okresowy 1–54 — okres i grupa, bloki, elektrony walencyjne, trendy
@opis Układ okresowy pierwiastków 1–54, którego komórki można kolorować według okresu i grupy, bloku (s, p, d), liczby elektronów walencyjnych, promienia atomowego, elektroujemności i energii jonizacji. Wniosek: właściwości zmieniają się regularnie — wzdłuż okresu i w dół grupy (trendy okresowe).

::: karta understand | Zadania predykcyjne — z samego położenia
1. Który ma większy promień atomowy: Na czy K? — **K**: leży niżej w tej samej grupie (jedna powłoka więcej).
2. Który ma silniej niemetaliczny charakter: Na czy Cl? — **Cl**: leży znacznie bardziej na prawo w tym samym okresie.
3. Czy pierwiastek z grupy 17 i okresu 3 to chlor? — **Tak.**
4. Czy pierwiastki jednego okresu mają identyczne właściwości? — **Nie.** Okres opisuje wspólny poziom najwyższej powłoki, ale wraz z Z zmienia się budowa elektronowa i charakter chemiczny.
:::

::: karta warning | Pułapka: trend to nie odpowiedź dla każdego pierwiastka
Każdą strzałkę trendu trzeba umieć dopowiedzieć zdaniem „dlaczego?”. Trend jest regułą ogólną — znaj jego zakres i wyjątki (np. energia jonizacji w [§8](#bloki); promienie gazów szlachetnych w modelu są szacunkowe). Wniosek z trendu zapisuj jako przewidywanie oparte na położeniu.
:::

## 8 | Bloki s, p, d, f i energia jonizacji [[extra:AMBITNE]] {#bloki}

**Blok** to obszar układu związany z typem **podpowłoki, którą obsadza się na końcu** w konfiguracji elektronowej:
- **blok s:** grupy 1, 2 oraz hel (He stoi w grupie 18, ale jego konfiguracja to 1s²),
- **blok p:** grupy 13–18 (bez helu),
- **blok d:** grupy 3–12 (metale przejściowe),
- **blok f:** lantanowce i aktynowce (dwa wiersze pod tablicą).

Szerokość bloków odpowiada pojemności podpowłok: s — 2 elektrony (2 kolumny), p — 6 (6 kolumn), d — 10 (10 kolumn), f — 14. Szczegółowe powiązanie z konfiguracją — F07–F08.

::: karta extra | Energia jonizacji
**(Pierwsza) energia jonizacji** to energia potrzebna do oderwania jednego, najsłabiej związanego elektronu od atomu w stanie gazowym. Rośnie w prawo i w górę układu — odwrotnie niż promień. Przykłady (dane NIST, zaokrąglone): Li 520 kJ/mol, Na 496, K 419 — maleje w dół grupy 1, więc potas najłatwiej oddaje elektron i najgwałtowniej reaguje z wodą.
:::

::: adv | Wyjątki od trendu energii jonizacji i metale przejściowe | poziom akademicki
W okresie 2 energia jonizacji nie rośnie równo: **Be (899 kJ/mol) > B (801)** oraz **N (1402) > O (1314)**. Bor odrywa elektron z podpowłoki 2p, wyżej energetycznie niż 2s berylu; w tlenie jeden orbital 2p zawiera parę elektronów, które się odpychają, więc łatwiej oderwać jeden z nich niż elektron z półzapełnionej podpowłoki 2p azotu.

**Metale przejściowe mają zmienne stopnie utlenienia** (Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺, Mn od +II do +VII), bo mają elektrony na dwóch podpowłokach — ns i (n−1)d — o zbliżonych energiach; w wiązaniach mogą uczestniczyć elektrony obu. Dlatego reguła „elektrony walencyjne = numer grupy − 10” ich nie obejmuje.
:::

@klocek karta-bhp {} | Zasady pracy i pierwsza pomoc
@opis Cztery rozwijane karty: przed doświadczeniem (okulary, fartuch, czytanie opisu), kwasy i zasady (kwas do wody, płukanie 15 minut), ogrzewanie (probówka ukośnie, otworem od siebie) oraz oparzenie i zranienie; przy poważnym urazie wołamy nauczyciela.

## 9 | Doświadczenia — podobieństwo w grupie i trend reaktywności [[basic:E8]] {#doswiadczenia}

::: dosw | Doświadczenie 1 — Reaktywność litowców z wodą (pokaz nauczyciela)
Problem: Czy litowce reagują z wodą podobnie i czy szybkość reakcji zależy od położenia w grupie?
Hipoteza: Wszystkie dają wodorotlenek i wodór, a reakcja jest tym gwałtowniejsza, im niżej w grupie leży metal.
Sprzęt: lit, sód, potas (małe grudki, przechowywane pod naftą), krystalizator z wodą, fenoloftaleina, osłona, okulary.
Przebieg: Do krystalizatora z wodą i kilkoma kroplami fenoloftaleiny nauczyciel wrzuca kolejno grudkę litu, sodu i potasu (za każdym razem świeża woda). Przygotuj trzy krystalizatory z taką samą ilością wody i taką samą liczbą kropli fenoloftaleiny (czwarty — kontrolny — bez metalu). Wrzucaj kolejno równe, bardzo małe porcje Li, Na i K, za każdym razem do świeżej wody. Wodór z litu i sodu można zebrać w odwróconą probówkę i sprawdzić próbą „pyk”; potas zapala wodór sam, więc tej próby nie robimy.
Obserwacja: Lit pływa i spokojnie wydziela gaz; sód topi się w kulkę i „biega” po powierzchni; potas reaguje bardzo gwałtownie, wydzielający się wodór zapala się fioletowym płomieniem. W każdym przypadku roztwór barwi się na malinowo.
Wniosek (po teście wodoru „pyk”): Litowce reagują z wodą tak samo (podobieństwo w grupie: wodorotlenek + wodór), a reaktywność metali grupy 1 rośnie w dół grupy — elektron walencyjny jest coraz dalej od jądra i łatwiej go oddać.
Równanie:: 2 Li + 2 H₂O → 2 LiOH + H₂↑
Równanie:: 2 Na + 2 H₂O → 2 NaOH + H₂↑
Równanie:: 2 K + 2 H₂O → 2 KOH + H₂↑
BHP: pokaz wyłącznie nauczyciela, za osłoną, w okularach i rękawicach. Porcje sodu wielkości ziarna ryżu, a potasu jeszcze mniejsze. Metale kroić na sucho, nie dotykać palcami. Resztek nie wyrzucać do zlewu — zbiera je nauczyciel. Potas często nie jest dostępny w szkole — zamiast pokazu można obejrzeć film lub model.
:::

@zlewka f06-doswiadczenia-v01 liH2o | Zobacz w zlewce: lit + woda
@opis Kawałek litu wrzucony do wody: lit pływa po powierzchni i spokojnie wydziela pęcherzyki gazu (wodoru). Wniosek: lit reaguje z wodą najsłabiej z porównywanych litowców — reaktywność rośnie w dół grupy: Li < Na < K.
@zlewka f06-doswiadczenia-v01 naH2o | Zobacz w zlewce: sód + woda
@opis Kawałek sodu wrzucony do wody: sód topi się w srebrzystą kulkę, szybko porusza się po powierzchni i intensywnie wydziela gaz (wodór). Wniosek: sód reaguje z wodą gwałtowniej niż lit — reaktywność litowców rośnie w dół grupy.
@zlewka f06-doswiadczenia-v01 kH2o | Zobacz w zlewce: potas + woda
@opis Kawałek potasu wrzucony do wody: reakcja jest bardzo gwałtowna, wydzielający się wodór zapala się fioletowym płomieniem. Wniosek: potas jest najbardziej reaktywny z porównywanych litowców (Li < Na < K).

::: dosw | Doświadczenie 2 — Który fluorowiec wypiera który? [[extra:AMBITNE]]
Problem: Czy fluorowce mają podobne właściwości i jak zmienia się ich aktywność w grupie?
Hipoteza: Aktywność fluorowców maleje w dół grupy, więc fluorowiec położony wyżej wypiera niższy z jego soli.
Sprzęt: woda chlorowa (Cl₂), woda bromowa (Br₂), woda jodowa (I₂), roztwory KBr i KI, probówki, kleik skrobiowy.
Przebieg: Do roztworu KBr dodajemy wodę chlorową. Do roztworu KI dodajemy wodę chlorową, a w drugiej probówce wodę bromową; do tych dwóch prób dodajemy potem kroplę kleiku skrobiowego. Do roztworu KBr dodajemy wodę jodową — w tej próbie **nie używamy skrobi**, bo jod w wodzie jodowej zawsze barwi ją na granatowo. Próba kontrolna: woda jodowa zmieszana z taką samą ilością wody (bez soli) — barwę porównujemy z probówką KBr + woda jodowa.
Obserwacja: KBr + woda chlorowa — roztwór żółknie, potem staje się pomarańczowy; KI + woda chlorowa i KI + woda bromowa — roztwór brunatnieje (ze skrobią granatowy); KBr + woda jodowa — barwa taka sama jak w próbie kontrolnej, bez zmiany: brak reakcji.
Wniosek: Chlor wypiera brom i jod, brom wypiera jod, jod nie wypiera bromu: aktywność fluorowców maleje w dół grupy (Cl > Br > I). Fluor jest jeszcze aktywniejszy, ale reaguje gwałtownie z wodą, więc nie testujemy go w roztworze wodnym. Uwaga: nadmiar wody chlorowej utlenia jod dalej (brunatna barwa znika) — to ograniczenie testu.
Równanie:: Cl₂ + 2 KBr → 2 KCl + Br₂
Równanie:: Cl₂ + 2 KI → 2 KCl + I₂
Równanie:: Br₂ + 2 KI → 2 KBr + I₂
BHP: woda chlorowa i bromowa — pod dygestorium, w rękawicach i okularach; chlor i brom są trujące i żrące.
:::

@zlewka f06-doswiadczenia-v01 f06Cl2Kbr | Zobacz w zlewce: chlor wypiera brom
@opis Do bezbarwnego roztworu bromku potasu dodano wodę chlorową: roztwór barwi się na żółtopomarańczowo od wydzielonego bromu. Wniosek: chlor jest aktywniejszy od bromu i wypiera go z soli: Cl₂ + 2 KBr → 2 KCl + Br₂.
@zlewka f06-doswiadczenia-v01 f06Br2Ki | Zobacz w zlewce: brom wypiera jod
@opis Do bezbarwnego roztworu jodku potasu dodano wodę bromową: roztwór brunatnieje od wydzielonego jodu. Wniosek: brom wypiera jod — aktywność fluorowców maleje w dół grupy: Br₂ + 2 KI → 2 KBr + I₂.

::: karta understand | Obserwacja ≠ wniosek
- **Obserwacja:** sód „biega” po wodzie, wydziela się gaz, fenoloftaleina malinowieje.
- **Wniosek:** sód reaguje z wodą, powstaje zasada (NaOH) i wodór. Nazwa gazu to wniosek — potwierdza go próba palności („pyk”).
:::

## 10 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Grupa = okres.” | Grupa jest pionowa (kolumna), okres poziomy (wiersz). | Na: grupa 1, okres 3 — dwie różne informacje. |
| „Okres = liczba elektronów.” | Okres = liczba powłok elektronowych. | Okres 3 → 3 powłoki (Na: 2, 8, 1), a nie 3 elektrony. |
| „Grupa = wartościowość.” | Grupa ≠ wartościowość. | Chlor (grupa 17) jest jednowartościowy w HCl, a siedmiowartościowy w Cl₂O₇ (stopień utlenienia +VII). |
| „Wszystkie metale są w grupie 1.” | Metale są w wielu grupach. | Fe, Cu, Zn leżą w grupach pobocznych; Al w grupie 13. |
| „Fluorowce to tylko fluor.” | Fluorowce: F, Cl, Br, I, At. | To cała grupa 17. |
| „Gazy szlachetne w ogóle nie reagują.” | Tworzą nieliczne związki. | XeF₂, XeF₄, XeO₃. |
| „Elektroujemność rośnie w dół grupy.” | Maleje w dół grupy. | Rośnie w górę i w prawo; największa — fluor. |
| „Większe Z zawsze = większy promień.” | Liczy się też położenie w okresie i liczba powłok. | Cl (Z = 17) ma mniejszy promień niż Na (Z = 11). |
| „Wodór jest metalem alkalicznym.” | Wodór jest niemetalem o wyjątkowym położeniu. | Ma 1 e⁻ walencyjny, ale tworzy H₂, wiązania kowalencyjne i H⁻. |
| „Trend nie ma wyjątków.” | Trend jest regułą ogólną. | Np. energia jonizacji Be > B, N > O ([§8](#bloki)). |
| „Numer grupy zawsze mówi, ile jest elektronów walencyjnych.” | Tylko dla grup głównych (1, 2, 13–18); dla grup 3–12 reguła nie działa wprost. | Metale przejściowe mają zmienne stopnie utlenienia (§8). |
| „Układ okresowy służy tylko do znalezienia symbolu.” | Służy do przewidywania właściwości. | Adres → elektrony → przewidywanie ([§1](#mapa)). |
| „Układ okresowy jest ułożony według mas atomowych.” | Według rosnącej liczby atomowej Z. | Wyjątki od kolejności mas: Ar (39,9) przed K (39,1), Te przed I. |
| „Pierwiastki jednej grupy mają identyczne właściwości.” | Mają podobne właściwości, ale zmieniające się w dół grupy (np. reaktywność litowców rośnie). | Rośnie liczba powłok i promień atomu. |
| „Kation jest większy od atomu.” | Kation jest mniejszy — ma mniej elektronów. | Na⁺ < Na. |
| „Fe leży w grupie 8, więc ma 8 e⁻ walencyjnych.” | Fe to metal przejściowy — reguła grup głównych go nie obejmuje; zmienne stopnie utlenienia (Fe²⁺, Fe³⁺). | Grupy 3–12 mają inne zasady (§8). |
| „Hel jest w grupie 2.” | Hel stoi w grupie 18 (blok s, dublet). | Zapełniona powłoka decyduje o grupie gazów szlachetnych. |
| „Z i masa atomowa mają zawsze tę samą kolejność.” | Nie zawsze: Ar (39,95 u) stoi przed K (39,10 u). | Porządek według Z (Moseley). |
| „Cl⁻ i Ar to to samo, bo mają tyle samo elektronów.” | Mają taką samą konfigurację (są izoelektronowe), ale różnią się liczbą protonów. | Cl⁻: 17 p⁺, 18 e⁻; Ar: 18 p⁺, 18 e⁻. |
| „Metal to zawsze twardy i ciężki pierwiastek.” | Na i K są miękkie, a rtęć jest cieczą. | Metal oznacza przewodnictwo, połysk i tworzenie kationów, nie twardość. |
:::

::: karta error | Klinika — przykład 1: „Grupa = wartościowość”
- **Znajdź:** uproszczenie — utożsamienie numeru grupy z wartościowością.
- **Popraw:** grupa ≠ wartościowość; wartościowość zależy od konkretnego związku.
- **Dlaczego:** chlor (grupa 17) w HCl ma wartościowość I, w HClO₄ — VII (stopień utlenienia +VII).
- **Zadanie podobne:** jaka jest wartościowość siarki w SO₂ i w H₂SO₄?
- **Pułapka:** „grupa 17 = wartościowość XVII” — nie.

::: odp | Pokaż odpowiedź
SO₂ — IV; H₂SO₄ — VI (siarka na stopniu utlenienia +VI).
:::
:::

::: karta error | Klinika — przykład 2: „Okres = liczba elektronów”
- **Znajdź:** zła definicja okresu.
- **Popraw:** okres = liczba powłok elektronowych atomu obojętnego.
- **Dlaczego:** sód (okres 3) ma 3 powłoki: 2, 8, 1.
- **Zadanie podobne:** ile powłok ma chlor?
- **Pułapka:** „okres 3 = 3 elektrony” — nie.

::: odp | Pokaż odpowiedź
3 powłoki (2, 8, 7) — chlor leży w okresie 3.
:::
:::

::: karta error | Klinika — przykład 3: „Elektroujemność rośnie w dół grupy”
- **Znajdź:** odwrócenie trendu.
- **Popraw:** elektroujemność rośnie w górę grupy i w prawo okresu; największa — fluor.
- **Dlaczego:** w dół grupy rośnie promień atomu, elektrony walencyjne są dalej od jądra i słabiej przyciągane.
- **Zadanie podobne:** który pierwiastek ma większą elektroujemność: Na czy Cl?
- **Pułapka:** „im wyższy numer grupy, tym większa elektroujemność” — liczy się położenie w prawo **i w górę** (gazy szlachetne w skali Paulinga zwykle nie mają podanej wartości).

::: odp | Pokaż odpowiedź
Cl (3,16) — leży po prawej stronie tego samego okresu; Na ma 0,93.
:::
:::

## 11 | Ćwiczenia {#cwiczenia}

::: karta basic | Mini-check (5 pytań)
1. Co to okres? Co to grupa?
2. Ile elektronów walencyjnych ma chlor?
3. W której grupie jest glin?
4. Jak zmienia się elektroujemność w okresie?
5. Który pierwiastek ma największą elektroujemność?

::: odp | Pokaż odpowiedzi
1. Okres — wiersz (liczba powłok); grupa — kolumna (podobna budowa zewnętrznej powłoki). 2. 7. 3. 13. 4. Rośnie w prawo. 5. Fluor.
:::
:::

::: karta core | Ćwiczenie prowadzone: pierwiastek z grupy 16 i okresu 3
- **Krok 1.** Grupa 16 → 16 − 10 = **6 elektronów walencyjnych**.
- **Krok 2.** Okres 3 → **3 powłoki**.
- **Krok 3.** Rozkład elektronów na powłokach: **2, 8, 6** (razem 16 → Z = 16).
- **Krok 4.** Z = 16 → **S (siarka)**.
- **Odpowiedź:** siarka, 2, 8, 6; jako niemetal przyjmuje 2 elektrony → S²⁻.

**Spróbuj sam:** pierwiastek z grupy 13 i okresu 3.

::: odp | Pokaż odpowiedź
3 elektrony walencyjne, 3 powłoki: 2, 8, 3 → Z = 13 → glin (Al); metal, tworzy Al³⁺.
:::
:::

::: karta exam | A. Podstawa (5 pkt)
1. Podaj grupę i okres dla: Na, Cl, C, Al, Ca.
2. Ile elektronów walencyjnych ma: Mg, O, N, K?
3. Wymień 3 metale, 3 niemetale i 1 półmetal.
4. Który pierwiastek ma największą elektroujemność?
5. Co to są gazy szlachetne?

::: odp | Pokaż odpowiedzi
1. Na: grupa 1, okres 3; Cl: 17, 3; C: 14, 2; Al: 13, 3; Ca: 2, 4. 2. Mg 2; O 6; N 5; K 1. 3. Np. metale Na, Fe, Cu; niemetale O, N, Cl; półmetal Si. 4. Fluor (F). 5. Pierwiastki grupy 18: He, Ne, Ar, Kr, Xe, Rn — zapełniona zewnętrzna powłoka, bardzo mała reaktywność.
:::
:::

::: karta exam | B. Trening (egzamin) (6 pkt)
6. Dlaczego chlor stoi w grupie 17, a nie 7?
7. Wyjaśnij, dlaczego wartościowość ≠ numer grupy.
8. Dlaczego w dół grupy rośnie promień atomowy?
9. Dlaczego w prawo okresu rośnie elektroujemność?
10. Popraw zdanie: „grupa = wartościowość”.
11. Mini-transfer: porównaj Na, Mg i Cl — okres, grupa, liczba elektronów walencyjnych, przewidywany jon. Która informacja z układu okresowego pozwoliła podjąć decyzję?

::: odp | Pokaż odpowiedzi
6. W numeracji IUPAC 1–18 grupa fluorowców ma numer 17 (7 elektronów walencyjnych = 17 − 10); „VII” to stara numeracja (VIIA). 7. Wartościowość zależy od konkretnego związku (Cl: I w HCl, VII w Cl₂O₇). 8. Z każdym okresem przybywa powłoka elektronowa — elektrony zewnętrzne są dalej od jądra. 9. Rośnie ładunek jądra, a elektrony walencyjne są na tej samej powłoce — są silniej przyciągane. 10. Grupa ≠ wartościowość; grupa (główna) wskazuje liczbę elektronów walencyjnych. 11. Wszystkie okres 3 (3 powłoki); Na — grupa 1, 1 e⁻, Na⁺; Mg — grupa 2, 2 e⁻, Mg²⁺; Cl — grupa 17, 7 e⁻, Cl⁻. Decyduje numer grupy (liczba elektronów walencyjnych) i typ pierwiastka (metal oddaje, niemetal przyjmuje).
:::
:::

::: karta extra | C. Ambitne
12. Porównaj metale i niemetale — podaj 3 różnice.
13. Jakie znaczenie ma położenie wodoru w układzie okresowym?
14. Co to są półmetale? Podaj 3 przykłady.
15. Wymień 3 właściwości, które rosną w prawo okresu.
16. Wymień 3 właściwości, które rosną w dół grupy.

::: odp | Pokaż odpowiedzi
12. Metale: przewodzą prąd i ciepło, kowalne, połysk (tworzą kationy). Niemetale: zwykle izolatory, kruche w stanie stałym, bez połysku (tworzą aniony lub wiązania kowalencyjne). 13. Wodór ma 1 e⁻ walencyjny (jak litowce), ale brakuje mu 1 e⁻ do dubletu (jak fluorowcom do oktetu); jest niemetalem — stoi osobno lub w grupie 1 albo 17. 14. Pierwiastki o właściwościach pośrednich, leżące przy schodkowej granicy: B, Si, Ge (też As, Sb, Te). 15. Elektroujemność, energia jonizacji, charakter niemetaliczny. 16. Promień atomowy, charakter metaliczny, reaktywność metali grupy 1.
:::
:::

::: karta exam | D. Zaawansowane
17. Co to są bloki s, p, d, f?
18. Dlaczego metale przejściowe mają zmienne stopnie utlenienia?
19. Co to jest energia jonizacji? Jak się zmienia w układzie?
20. Dlaczego H₂O nazywamy tlenkiem wodoru? Jak odróżnić tlenek od innych związków z tlenem (np. H₂SO₄, NaOH)?
21. Jak z położenia w układzie przewidzieć wzór tlenku o najwyższej wartościowości pierwiastka?

::: odp | Pokaż odpowiedzi
17. Blok s: grupy 1, 2 (i He); p: 13–18; d: 3–12; f: lantanowce i aktynowce — nazwa od podpowłoki obsadzanej na końcu. 18. Mają elektrony na dwóch podpowłokach (ns i (n−1)d) o podobnych energiach. 19. Energia potrzebna do oderwania elektronu od atomu (w stanie gazowym); rośnie w prawo i w górę. 20. Tlenek to związek dwupierwiastkowy z tlenem (tlen na −II); H₂O to tlenek wodoru — o tym, czy coś jest tlenkiem, decyduje skład, a nie grupa pierwiastka. H₂SO₄ i NaOH mają tlen, ale więcej niż dwa pierwiastki, więc tlenkami nie są. 21. Wartościowość maksymalna = liczba elektronów walencyjnych: grupa 1 → E₂O, 2 → EO, 13 → E₂O₃, 14 (C, Si) → EO₂, 15 → E₂O₅, 16 → EO₃, 17 (Cl) → E₂O₇ (N02 Tlenki). Uwaga: reguła nie dotyczy fluoru (zawsze I) i tlenu (w tlenkach II), a gazy szlachetne w szkolnym modelu nie tworzą tlenków.
:::
:::

::: karta understand | E. Przeplatane — powtórka F04–F06
1. Co to jest Z? (F04)
2. Ile neutronów ma ¹²C? (F04–F05)
3. W której grupie jest sód? (F06)
4. Ile elektronów walencyjnych ma chlor? (F06)
5. Co to jest elektroujemność? (F06)

::: odp | Pokaż odpowiedzi
1. Liczba atomowa = liczba protonów. 2. 6. 3. 1. 4. 7. 5. Zdolność atomu w związku do przyciągania wspólnej pary elektronowej.
:::
:::

::: karta exam | F. Utrwalenie — odczyt z układu okresowego (5 pkt)
1. Odczytaj okres, grupę i liczbę elektronów walencyjnych dla Na, O, Al, Cl.
2. Który atom jest większy: Na czy Cl? Uzasadnij.
3. Który atom jest większy: Li czy Cs? Uzasadnij.
4. Wyjaśnij, dlaczego sód tworzy jon Na⁺, a tlen jon O²⁻.
5. Podaj ograniczenie reguły „numer grupy mówi, ile jest elektronów walencyjnych”.

::: odp | Pokaż odpowiedzi
1. Na: okres 3, grupa 1, 1 e⁻ walencyjny · O: okres 2, grupa 16, 6 e⁻ · Al: okres 3, grupa 13, 3 e⁻ · Cl: okres 3, grupa 17, 7 e⁻.
2. Na — w okresie promień maleje w prawo (rośnie ładunek jądra przy tej samej liczbie powłok).
3. Cs — w grupie promień rośnie w dół (więcej powłok).
4. Sód łatwo oddaje 1 elektron walencyjny, tlen przyjmuje 2 elektrony — oba uzyskują trwałą konfigurację gazu szlachetnego (Ne).
5. Działa dla grup głównych (1–2: tyle, ile numer grupy; 13–18: numer grupy − 10; hel ma 2). Nie stosuje się prosto do metali przejściowych (grupy 3–12).
:::
:::

::: karta understand | Powtórka bloku F01–F06 — test kontrolny
Łańcuch rozumowania: **próbka → substancja czy mieszanina → pierwiastek czy związek → atom → Z, A, n, e → jon → miejsce w układzie okresowym**.
1. Czy każda mieszanina jest związkiem chemicznym?
2. Co oznacza liczba atomowa Z?
3. Jak obliczyć liczbę neutronów?
4. Czym różni się kation od anionu?
5. Co się nie zmienia, gdy z atomu powstaje jon?
6. Co oznacza numer okresu?
7. Dlaczego atomy jednego pierwiastka mogą mieć różną liczbę neutronów?
8. Czy sączenie rozdzieli roztwór soli?
9. Czy każda zmiana temperatury oznacza reakcję chemiczną?
10. Dlaczego H₂O nie jest równaniem reakcji?

::: odp | Pokaż odpowiedzi
1. Nie — mieszanina to co najmniej dwie substancje, ma zmienny skład. 2. Liczbę protonów w jądrze. 3. n = A − Z. 4. Kation (+) powstaje po oddaniu elektronów, anion (−) po przyjęciu. 5. Liczba protonów (i neutronów). 6. Liczbę powłok elektronowych atomu. 7. To izotopy — ta sama liczba protonów, różna liczba neutronów. 8. Nie — jony przechodzą przez sączek. 9. Nie — np. rozpuszczanie, topnienie. 10. Wzór opisuje skład substancji; równanie opisuje przemianę substratów w produkty.
:::
:::

::: karta exam | G. Zadania odwrotne i przypadki graniczne (5 pkt)
1. Pierwiastek ma 3 powłoki i 6 elektronów walencyjnych. Który to? (1 pkt)
2. Pierwiastek ma 2 powłoki i 7 elektronów walencyjnych. Który to? (1 pkt)
3. Pierwiastek ma 4 powłoki, 2 elektrony walencyjne i Z ≤ 20. Który to? (1 pkt)
4. Ile elektronów walencyjnych ma hel i dlaczego stoi w grupie 18, a nie 2? (1 pkt)
5. Pallad (Pd, okres 5) ma najwyższą zajętą powłokę 4. Co to mówi o regule „okres = liczba powłok”? (1 pkt)

::: odp | Pokaż odpowiedzi
1. S (Z = 16; 2, 8, 6). 2. F (Z = 9; 2, 7). 3. Ca (Z = 20; 2, 8, 8, 2). 4. 2 (dublet) — zapełniona powłoka, jak u gazów szlachetnych; grupa 18 wynika z zapełnionej powłoki, nie z podpowłoki s. 5. Reguła jest przybliżeniem; wyjątki (np. Pd) pokazują, że trzeba ją stosować ostrożnie.
:::
:::

::: karta exam | H. Fragment układu i zadania własne (E8 + ambitne, 14 pkt)
**H1 (E8, 4 pkt) — odczyt z fragmentu układu.** W fragmencie układu pierwiastki oznaczono literami (litery nie są symbolami): X — okres 2, grupa 17; Y — okres 3, grupa 17; Z — okres 3, grupa 1. a) Podaj symbole chemiczne X, Y i Z. b) Który z nich ma największy promień atomu? c) Podaj wzór związku Y z Z i rodzaj wiązania.

**H2 (E8, 2 pkt) — znajdź błąd.** „Magnez leży w grupie 2 i okresie 3, więc ma 2 powłoki i 3 elektrony walencyjne.” Popraw zdanie.

**H3 (ambitne, 5 pkt) — przewidywanie.** Gal (Ga) leży w okresie 4 i grupie 13. a) Podaj liczbę powłok. b) Podaj liczbę elektronów walencyjnych. c) Podaj typowy jon i wzór tlenku. d) Dlaczego Mendelejew mógł przewidzieć jego właściwości wcześniej (jako „ekaglin”)? (4 pkt za a–c, 1 pkt za uzasadnienie d.)

**H4 (ambitne, 3 pkt) — elektroujemność.** Uszereguj rosnąco: Mg, Si, S, Cl. Uzasadnij jednym zdaniem.

**H5 (konkursowe, 3 pkt) — promienie izoelektronowe.** Uszereguj rosnąco promienie: O²⁻, F⁻, Na⁺, Mg²⁺. Wszystkie mają 10 elektronów. Dlaczego różnią się wielkością?

::: odp | Pokaż klucz
H1: a) F, Cl, Na (1 pkt). b) Na — ma tyle samo powłok co Cl, ale mniejszy ładunek jądra, więc słabiej ściąga elektrony (1 pkt). c) NaCl, wiązanie jonowe (2 pkt).
H2: Odwrócone. Okres 3 → 3 powłoki (2, 8, 2); grupa 2 → 2 elektrony walencyjne. Poprawnie: „Magnez ma 3 powłoki i 2 elektrony walencyjne.” (2 pkt).
H3: a) 4 powłoki; b) 3 e⁻; c) Ga³⁺, Ga₂O₃ (po 1 pkt); d) leży pod glinem w tej samej grupie, więc ma podobną budowę zewnętrznej powłoki i podobne właściwości (1 pkt).
H4: Mg < Si < S < Cl (χ: 1,31; 1,90; 2,58; 3,16) (2 pkt). Ten sam okres, rosnący ładunek jądra przy tej samej liczbie powłok (1 pkt).
H5: Mg²⁺ < Na⁺ < F⁻ < O²⁻ (2 pkt). Liczba elektronów jest ta sama, a ładunek jądra rośnie od O (8 protonów) do Mg (12), więc te same 10 elektronów jest coraz mocniej przyciągane (1 pkt).
:::
:::

## 11.5 | Ciekawostki {#ciekawostki-plus}

::: karta extra | Mendelejew zostawił puste miejsca
Dmitrij Mendelejew w 1869 r. ułożył pierwiastki w tabelę i zostawił puste pola dla pierwiastków jeszcze nieznanych. Przewidział ich właściwości — i gdy odkryto gal, skand i german, zgadzały się z jego przewidywaniami.
:::

::: karta extra | Polskie pierwiastki
Polon (Po) nazwała na cześć Polski Maria Skłodowska-Curie, która odkryła go razem z Piotrem Curie w 1898 r. Pierwiastek kiur (Cm) upamiętnia małżeństwo Curie, a kopernik (Cn) — Mikołaja Kopernika.
:::

::: karta extra | Gaz, który nie chce reagować
Argon stanowi prawie 1% powietrza, a przez długi czas nikt go nie zauważył — bo prawie z niczym nie reaguje. Nazwa pochodzi od greckiego *argos* — „leniwy”. Używa się go w żarówkach i przy spawaniu.
:::

## 11.6 | Warstwa olimpijska — Dla olimpijczyka {#olimpijska}

*(Warstwa ponad E8 — zadania w stylu konkursów chemicznych.)*

::: karta understand | Dla olimpijczyka — układ okresowy głębiej
**Elektroujemność** rośnie w okresie w prawo i w grupie w górę — fluor jest najbardziej elektroujemny; to wyjaśnia, które pierwiastki „przyciągają” elektrony w wiązaniach. **Aktywność metali** rośnie w dół grupy 1 (Li < Na < K) — potas reaguje z wodą gwałtowniej niż sód. **Aktywność fluorowców** maleje w dół grupy (F > Cl > Br > I). **Pierwiastki bloku d** (grupy 3–12, metale przejściowe) mają kilka typowych ładunków jonów (Fe²⁺, Fe³⁺) — dla nich reguła „numer grupy = elektrony walencyjne” nie działa w prosty sposób.
:::

::: adv | Zadanie O1 (4 pkt) — z położenia do budowy | poziom ambitny (konkurs)
Pierwiastek leży w 3. okresie i 2. grupie. Podaj: symbol, liczbę powłok, liczbę elektronów walencyjnych i typowy jon.

::: odp | Pokaż klucz
Mg (1 pkt); 3 powłoki (1 pkt); 2 elektrony walencyjne (1 pkt); Mg²⁺ (1 pkt).
:::
:::

::: adv | Zadanie O2 (3 pkt) — trendy | poziom ambitny (konkurs)
Uszereguj według rosnącego promienia atomu: Cl, Na, Mg, i uzasadnij. Który z nich najłatwiej odda elektron?

::: odp | Pokaż klucz
Cl < Mg < Na (1 pkt) — w okresie w prawo jądro silniej przyciąga elektrony, promień maleje (1 pkt); najłatwiej odda elektron Na (1 pkt).
:::
:::

::: adv | Zadanie O3 (3 pkt) — aktywność w grupie | poziom ambitny (konkurs)
Lit, sód i potas wrzucono do wody z fenoloftaleiną. Przewidź, który zareaguje najgwałtowniej, jaką barwę przyjmie roztwór i dlaczego.

::: odp | Pokaż klucz
potas — najgwałtowniej (1 pkt); malinowa — powstaje zasada (wodorotlenek) (1 pkt); w dół grupy rośnie promień i łatwiej oddać elektron walencyjny (1 pkt).
:::
:::

::: adv | Zadanie O4 (3 pkt) — energie jonizacji | poziom ambitny (konkurs)
Kolejne energie jonizacji pierwiastka X (kJ/mol): 578, 1817, 2745, 11 577. W której grupie leży X? Uzasadnij.

::: odp | Pokaż klucz
Największy skok jest między 3. a 4. energią jonizacji — po oderwaniu 3 elektronów zaczyna się zapełniona powłoka (1 pkt). Pierwiastek ma 3 elektrony walencyjne → grupa 13 (1 pkt), to glin, Al (1 pkt).
:::
:::

::: adv | Zadanie O5 (2 pkt) — izoelektronowość | poziom ambitny (konkurs)
Które z drobin Cl⁻, K⁺, Ar, Ca²⁺ są izoelektronowe? Podaj liczbę elektronów.

::: odp | Pokaż klucz
Wszystkie cztery; każda ma 18 elektronów (2 pkt).
:::
:::

::: adv | Zadanie O6 (3 pkt) — najwyższe tlenki | poziom ambitny (konkurs)
Podaj wzór najwyższego tlenku pierwiastka z grupy 14 (Si), 15 (P) i 16 (S). Uzasadnij na podstawie liczby elektronów walencyjnych.

::: odp | Pokaż klucz
SiO₂ (IV), P₂O₅ (V), SO₃ (VI) — po 1 pkt za poprawny wzór; uzasadnienie: wartościowość wobec tlenu równa się liczbie elektronów walencyjnych (4, 5, 6) — 1 pkt za każdy wzór z uzasadnieniem.
:::
:::

## 12 | Test {#test}

::: test
? Okres w układzie okresowym to:
+ poziomy wiersz — w modelu szkolnym jego numer to liczba powłok elektronowych
- pionowa kolumna pierwiastków o podobnych właściwościach
- liczba elektronów walencyjnych
- liczba protonów w jądrze
! Okres = wiersz; Na (okres 3) ma 3 powłoki.

? Ile elektronów walencyjnych ma atom pierwiastka z grupy 15?
- 15
+ 5
- 3
- 8
! Grupy 13–18: numer grupy − 10.

? Pierwiastek leżący w grupie 17 i okresie 4 to:
- chlor
+ brom
- jod
- argon
! Grupa 17 = fluorowce; okres 4 → brom (Br).

? Jak zmienia się promień atomowy w grupie (w dół)?
+ rośnie, bo przybywa powłok elektronowych
- maleje, bo rośnie ładunek jądra
- nie zmienia się
- rośnie tylko w grupie 1
! Każdy kolejny okres to nowa powłoka.

? Który pierwiastek ma największą elektroujemność?
- chlor
- tlen
+ fluor
- hel
! Elektroujemność rośnie w prawo i w górę; F: 3,98 w skali Paulinga.

? Które zdanie jest prawdziwe?
- numer grupy zawsze równa się wartościowości
+ chlor może być jedno- lub siedmiowartościowy, choć leży w grupie 17
- wartościowość chloru wynosi XVII
- wartościowość zależy tylko od okresu
! Grupa ≠ wartościowość; wartościowość zależy od związku.

? Gdzie w układzie okresowym leżą niemetale?
- w lewej dolnej części
- w grupach 3–12
+ w prawej górnej części
- tylko w grupie 18
! Metale — lewa i środkowa część; niemetale — prawa górna; półmetale — przy schodkowej granicy.

? Wodór:
- jest metalem alkalicznym, bo stoi w grupie 1
+ jest niemetalem o wyjątkowym położeniu w układzie
- jest gazem szlachetnym
- nie ma elektronów walencyjnych
! Ma 1 e⁻ walencyjny, ale tworzy H₂, wiązania kowalencyjne i jon H⁻.

? Dlaczego potas reaguje z wodą gwałtowniej niż lit?
- ma mniej powłok elektronowych
+ jego elektron walencyjny jest dalej od jądra i łatwiej go oddać
- ma więcej elektronów walencyjnych
- jest niemetalem
! Reaktywność litowców rośnie w dół grupy; I energia jonizacji K (419 kJ/mol) < Li (520 kJ/mol).

? Do bloku d należą pierwiastki grup:
- 1 i 2
- 13–18
+ 3–12
- tylko 18
! Blok d = metale przejściowe; blok f — lantanowce i aktynowce.

? W którym doświadczeniu zajdzie reakcja?
+ woda chlorowa + KI
- woda jodowa + KBr
- woda jodowa + KCl
- woda bromowa + KCl
! Fluorowiec położony wyżej wypiera niższy: Cl₂ + 2 KI → 2 KCl + I₂.

? Pierwiastki grupy 15 to:
+ azotowce (pniktogeny)
- tlenowce
- węglowce
- borowce
! Grupa 15 — np. N, P.

? Który pierwiastek jest półmetalem?
- Na
+ Si
- Cl
- Fe
! Si leży przy schodkowej granicy metal–niemetal.

? Jon, który najprawdopodobniej tworzy magnez (grupa 2):
- Mg⁻
+ Mg²⁺
- Mg³⁺
- Mg⁰
! Berylowce oddają 2 elektrony walencyjne.

? Dlaczego argon stoi przed potasem, mimo większej masy atomowej?
- bo ma mniejszą masę atomową od potasu
+ bo ma mniejszą liczbę atomową Z (18 < 19)
- bo jest gazem szlachetnym o zapełnionej powłoce
- bo ma mniej elektronów walencyjnych w powłoce zewnętrznej
! Układ porządkuje pierwiastki według Z (Moseley).

? Jak zmienia się aktywność fluorowców w dół grupy?
- rośnie
+ maleje
- nie zmienia się
- zmienia się nieregularnie
! Cl > Br > I.
:::

## 13 | Karta szybkiego powtórzenia i mapa myśli {#powtorka}

::: karta core | Na jednej stronie
- Układ = pierwiastki według **rosnącego Z**. **Okres** (wiersz) = liczba powłok; **grupa** (kolumna) = podobna zewnętrzna powłoka.
- **Grupy główne** 1, 2, 13–18; **poboczne** 3–12. Elektrony walencyjne: gr. 1–2 → numer; 13–18 → numer − 10; He: 2.
- **Adres → elektrony → przewidywanie:** metal oddaje e⁻ (Na⁺, Mg²⁺, Al³⁺), niemetal przyjmuje (Cl⁻, O²⁻). **Grupa ≠ wartościowość.**
- **Metale** — lewo i środek; **niemetale** — prawo i góra; **półmetale** (B, Si, Ge, As, Sb, Te) — przy schodkowej granicy. **Wodór** — niemetal, położenie wyjątkowe.
- **Rodziny:** 1 litowce, 2 berylowce, 17 fluorowce, 18 gazy szlachetne.
- **Trendy:** promień ↓ grupy rośnie, → okresu maleje; elektroujemność i energia jonizacji odwrotnie (max: F); charakter metaliczny rośnie w lewo i w dół.
- **Bloki:** s (1–2, He), p (13–18), d (3–12), f (lantanowce, aktynowce).
:::

::: karta understand | Mapa myśli
**UKŁAD OKRESOWY (rosnące Z)**
→ **okresy** (wiersze) → liczba powłok → promień rośnie w dół grupy
→ **grupy** (kolumny) → *główne* 1, 2, 13–18 → elektrony walencyjne → jony i wartościowość (F09–F11) · *poboczne* 3–12 → metale przejściowe
→ **bloki** s, p, d, f → konfiguracja elektronowa (F07–F08)
→ **obszary** → metale · niemetale · półmetale · wodór (wyjątek)
→ **trendy** → promień · elektroujemność (wiązania, F10–F11) · energia jonizacji · charakter metaliczny
:::

## 14 | Fiszki {#fiszki}

::: fiszki
Co to okres? | wiersz układu; w modelu szkolnym = liczba powłok elektronowych | basic:podstawa
Co to grupa? | kolumna układu; pierwiastki o podobnej zewnętrznej powłoce | basic:podstawa
Grupa 1 — ile e⁻ walencyjnych? | 1 | basic:podstawa
Grupa 2 — ile e⁻ walencyjnych? | 2 | basic:podstawa
Grupa 13 — ile e⁻ walencyjnych? | 3 | basic:podstawa
Grupa 14 — ile e⁻ walencyjnych? | 4 | basic:podstawa
Grupa 15 — ile e⁻ walencyjnych? | 5 | basic:podstawa
Grupa 16 — ile e⁻ walencyjnych? | 6 | basic:podstawa
Grupa 17 — ile e⁻ walencyjnych? | 7 | basic:podstawa
Grupa 18 — ile e⁻ walencyjnych? | 8 (He: 2) | basic:podstawa
Gdzie litowce? | grupa 1 (bez wodoru) | basic:podstawa
Gdzie fluorowce? | grupa 17: F, Cl, Br, I, At | basic:podstawa
Gdzie gazy szlachetne? | grupa 18 | basic:podstawa
Gdzie metale przejściowe? | grupy 3–12 | basic:podstawa
Ile powłok ma Na? | 3 (2, 8, 1) | basic:podstawa
Ile powłok ma Ca? | 4 (2, 8, 8, 2) | basic:podstawa
Symbol potasu? | K (łac. kalium) | basic:podstawa
Symbol sodu? | Na (łac. natrium) | basic:podstawa
Symbol żelaza? | Fe (łac. ferrum) | basic:podstawa
Symbol miedzi? | Cu (łac. cuprum) | basic:podstawa
Symbol srebra? | Ag (łac. argentum) | basic:podstawa
Symbol złota? | Au (łac. aurum) | basic:podstawa
Ile gazów w temp. pokojowej? | 11 (5 dwuatomowych + 6 gazów szlachetnych) | basic:podstawa
Która ciecz oprócz Hg? | Br₂ | basic:podstawa
Gdzie metale? | lewa i środkowa część układu | basic:podstawa
Gdzie niemetale? | prawa górna część układu | basic:podstawa
Półmetale — przykłady? | B, Si, Ge (też As, Sb, Te) | basic:podstawa
Trend elektroujemności? | rośnie w prawo i w górę | basic:podstawa
Trend promienia atomowego? | rośnie w dół grupy, maleje w prawo okresu | basic:podstawa
Największa elektroujemność? | fluor (F), 3,98 | basic:podstawa
Grupa a wartościowość? | grupa ≠ wartościowość (Cl: I w HCl, VII w Cl₂O₇) | understand:rozumienie
Dlaczego promień maleje w prawo okresu? | rośnie ładunek jądra, a elektrony są na tej samej powłoce | understand:rozumienie
Wodór — metal czy niemetal? | niemetal o wyjątkowym położeniu (gr. 1 albo 17) | understand:rozumienie
Reaktywność litowców w grupie? | rośnie w dół (Li < Na < K) | understand:rozumienie
Reaktywność fluorowców w grupie? | maleje w dół (Cl > Br > I) | understand:rozumienie
Co to blok s? | grupy 1, 2 (i He) | extra:ambitne
Co to blok p? | grupy 13–18 (bez He) | extra:ambitne
Co to blok d? | grupy 3–12 | extra:ambitne
Energia jonizacji — trend? | rośnie w prawo i w górę; wyjątki Be > B, N > O | extra:ambitne
Mendelejew 1869 | ułożył układ i przewidział nieodkryte pierwiastki | olimpijski:uklad
dlaczego Ar przed K? | Z decyduje o kolejności (Ar Z = 18 < K Z = 19; masa odwrotnie) | olimpijski:uklad
najwyższy tlenek grupy 16 | SO₃ — wartościowość VI | olimpijski:uklad
Pd — wyjątek okresu | okres 5, ale najwyższa zajęta powłoka to 4 | olimpijski:uklad
skąd nazwa halogeny? | gr. „tworzące sole” — reagują z metalami dając sole | olimpijski:uklad
:::

## 15 | Słownik {#slownik}

::: slownik
Układ okresowy :: uporządkowanie pierwiastków według rosnącej liczby atomowej Z, w którym pierwiastki o podobnych właściwościach stoją w tych samych kolumnach
Okres :: poziomy wiersz układu; w modelu szkolnym jego numer to liczba powłok elektronowych atomu
Grupa :: pionowa kolumna układu (IUPAC 1–18); grupy główne 1, 2, 13–18, poboczne 3–12
Blok :: obszar układu związany z typem podpowłoki obsadzanej na końcu: s, p, d lub f
Elektrony walencyjne :: elektrony zewnętrznej powłoki, decydujące o tworzeniu wiązań i reaktywności
Metale przejściowe :: pierwiastki grup 3–12 (blok d)
Półmetale (metaloidy) :: pierwiastki o właściwościach pośrednich, leżące przy schodkowej granicy metal–niemetal
Litowce :: pierwiastki grupy 1 (bez wodoru) — metale alkaliczne
Berylowce :: pierwiastki grupy 2
Fluorowce (halogeny) :: pierwiastki grupy 17: F, Cl, Br, I, At
Gazy szlachetne (helowce) :: pierwiastki grupy 18 o zapełnionej zewnętrznej powłoce
Trend okresowy :: powtarzalna tendencja zmian właściwości wraz z położeniem w układzie
Elektroujemność :: zdolność atomu w związku do przyciągania wspólnej pary elektronowej (skala Paulinga)
Energia jonizacji :: energia potrzebna do oderwania elektronu od atomu w stanie gazowym
Promień atomowy :: miara rozmiaru atomu; rośnie w dół grupy, maleje w prawo okresu
Lantanowce :: pierwiastki Z 57–71 (blok f, okres 6)
Aktynowce :: pierwiastki Z 89–103 (blok f, okres 7)
Metale alkaliczne :: litowce (grupa 1, bez wodoru)
Metale ziem alkalicznych :: Ca, Sr, Ba, Ra — berylowce z wyjątkiem berylu i magnezu
Pniktogeny :: azotowce, grupa 15
Chalkogeny :: tlenowce, grupa 16
Borowce :: grupa 13
Węglowce :: grupa 14
Powłoka walencyjna :: zewnętrzna zajęta powłoka atomu
Oktet :: osiem elektronów na zewnętrznej powłoce (trwała konfiguracja gazu szlachetnego)
Dublet :: dwa elektrony na zewnętrznej powłoce (hel)
Linia schodkowa :: granica metal–niemetal w układzie okresowym
Skala Paulinga :: skala elektroujemności
:::

## 16 | Checklista {#checklista}

::: karta basic | Umiem…
- ☐ opisać okresy i grupy; okres = liczba powłok,
- ☐ obliczyć elektrony walencyjne dla grup głównych,
- ☐ rozróżnić grupy główne i poboczne,
- ☐ wskazać metale, niemetale, półmetale i rodziny (litowce, berylowce, fluorowce, gazy szlachetne),
- ☐ wyjaśnić wodór jako wyjątek,
- ☐ uzasadnić trendy: promień, elektroujemność, charakter metaliczny,
- ☐ (ambitnie) opisać bloki s, p, d, f i energię jonizacji z wyjątkami.
:::

## 17 | System powtórek {#powtorki}

| Kiedy | Ile | Co |
|---|---|---|
| po lekcji | 20 min | karta z [§13](#powtorka) i ćwiczenia A |
| po 1 dniu | 10 min | fiszki |
| po 3 dniach | 15 min | ćwiczenia B i model układu: tryby „e⁻ walencyjne” i „promień atomu” |
| po tygodniu | 20 min | test z [§12](#test) |
| po F08 | 25 min | F06 + F07 + F08 razem — położenie ↔ konfiguracja |

## A | Dodatek A — mosty i co dalej {#mosty}

::: karta understand | Powiązania
- **F02 Materia i substancje** — pierwiastek jako substancja prosta; tu: porządkujemy pierwiastki.
- **F04 Atom** — Z, powłoki w modelu Bohra; tu: Z porządkuje układ, liczba powłok = okres.
- **F05 Izotopy, jony, masa atomowa** — masa atomowa w każdym polu układu; liczenie elektronów w jonach.
- **F07 Konfiguracja elektronowa** — jak dokładnie rozmieszczone są elektrony (powłoki, podpowłoki, orbitale, kolejność obsadzania).
- **F08 Konfiguracja ↔ układ okresowy** — przejście w obie strony: konfiguracja ↔ położenie; bloki s, p, d, f.
- **F09–F11** — wartościowość, stopień utlenienia, wiązania: elektroujemność rozstrzyga o typie i polaryzacji wiązania.
- **N02 Tlenki** — trend charakteru tlenków w okresie; **N06 Wodorki** — wodór i jon H⁻.
- **P01–P06** — przegląd pierwiastków: bloki, charakterystyka, trendy.
:::

> F06 mówi, **gdzie** jest pierwiastek i co można z tego przewidzieć. Następne pytanie: **jak dokładnie rozmieszczone są jego elektrony?** — F07.

## AUDYT W1 — audyt 06 (2026-10-13)

Wprowadzono:
- A1: klinika — wiersz „grupa 1 zawsze…” zastąpiony poprawnym („numer grupy…” tylko dla grup głównych).
- A2: zadanie D.20 przeformułowane (nazwa H₂O, odróżnienie tlenku od H₂SO₄ i NaOH); odpowiedź dopisana.
- A3: doświadczenie 1 — test wodoru („pyk”) w przebiegu, wniosek po teście, BHP (potas: film lub model).
- A4: doświadczenie 2 — próba kontrolna (woda jodowa), skrobia, fluor poza testem, ograniczenie nadmiaru wody chlorowej; znacznik poziomu zmieniony na AMBITNE.
- A5: wyjątki wartościowości wobec tlenu (F zawsze I, O zwykle II, Cl w tlenkach — różne).
- A6: wyjątek „okres = liczba powłok” (pallad) w adv.
- A7: promień kowalencyjny jako miara w modelu i tablicach; zdanie w §7.
- A8: checklista zmieniona na kartę „Umiem…” (jak w innych lekcjach).
- A9: fiszki olimpijskie zastąpione nowymi (Ar przed K, SO₃, Pd, halogeny); podstawowe fiszki pierwiastków dodane.
- B1: długości okresów (2, 8, 8, 18, 18, 32, 32) z zakresami Z; lantanowce i aktynowce jako bloki f.
- B2: tabela pierwszych 20 pierwiastków (symbol, nazwa, grupa, okres, e⁻ walencyjne) + zadanie z pamięci; fiszki z symbolami.
- B3: stan skupienia (11 gazów, 2 ciecze, reszta ciała stałe) — karta z zadaniem.
- B4: tabela typowych jonów (e⁻ i „jak gaz szlachetny”) z wyjątkami d.
- B5: sekcja G — zadania odwrotne i przypadki graniczne (S, F, Ca, He, Pd).
- B6: test — +4 pytania (rodzina po grupie, półmetal, jon Mg, Ar przed K), +1 o aktywności fluorowców; wszystkie pytania mają `!` (sprawdzono — audyt wskazywał braki, których w tej wersji już nie było).
- B7: promienie jonów — karta z zadaniem (Na⁺ < Na, Cl⁻ > Cl) i wiersz kliniki.
- B8: olimpijska O4 (energie jonizacji → grupa 13), O5 (izoelektronowość), O6 (najwyższe tlenki); nagłówek bez „do zweryfikowania”.
- B9: słownik +14 (lantanowce, aktynowce, nazwy rodzin, powłoka walencyjna, oktet, dublet, linia schodkowa, skala Paulinga); klinika +4 (kation, Fe, hel, Ar przed K).
- B10: tabela „pierwiastek → zastosowanie → właściwość” (8 wierszy) + zadanie otwarte.
- C: stan i stopka v1.1; changelog usunięty; wewnętrzne dane silnika (ELEMENTS_54, COVALENT_RADIUS_EXT — do weryfikacji) przeniesione do GFX_TODO_F06.md; odwołania poprawione zgodnie ze spisem: N01 → N02 (Tlenki), N05 → N06 (Wodorki); P01–P06 opisane zgodnie z tytułami spisu; odwołania #mosty zamienione na nazwy lekcji.

Nieprzyjęte / sprawdzone:
- B6 — audyt wskazywał pytania bez `!`; w wersji przed audytem wszystkie miały `!` — zostaje.
- C — znacznik „[[extra:LO]]” zmieniony na „[[extra:AMBITNE]]” we wszystkich miejscach (nagłówek doświadczenia i tabela §7), spójnie z resztą kursu. `$$` w jednej linii zostaje (konwencja silnika).
- Odwołanie „F21” nie występuje w tej lekcji — brak zmian.

## AUDYT W1 — audyt 06b (2026-10-13)

Wprowadzono:
- Błąd 1 (skrobia w próbie z wodą jodową): przebieg przepisany — skrobia tylko przy KI i KBr z wodą chlorową/bromową; próba kontrolna z wodą jodową; w wodzie jodowej nie używa się skrobi (P1).
- Błąd 2 (słownik, berylowce): „berylowce z wyjątkiem berylu i magnezu” (P2).
- Błąd 3 (odsyłacz): „konfiguracja jonów d — zob. F07 §5” (F09 to wartościowość).
- Błąd 4 (Cl wobec tlenu): dodano wartościowość IV (ClO₂).
- Błąd 5 (metale ok. 80%).
- Błąd 6 (elektroujemność — mechanizm w obu kierunkach; P4).
- Błąd 7 (etykieta E dla bloku „Przeplatane”).
- Błąd 8 (klucz 21 — wyjątki F i O, gazy szlachetne; P5).
- Błąd 9 (doświadczenie 1 — próba kontrolna, porcje, potas bez próby „pyk”, BHP; P6).
- Błąd 10 (gazy szlachetne: XeF₂ w tabeli).
- Błąd 11 (test — czwarty dystraktor w dwóch pytaniach, wyrównane długości).
- Uzupełnienie U1 (symbole Zn, Br, I, Ag, Au, Hg, Pb, Sn).
- Uzupełnienie U2 i U3 — sekcja H (zadanie H1 z fragmentem układu, H2–H5 z kluczami).
- Uzupełnienie U4 — dwa wiersze do kliniki.

Poprawione względem propozycji:
- Cl wobec tlenu: propozycja podawała I, III, IV, V, VII; wpisano I, III, IV, VI, VII (Cl₂O₆ jest częstszy w tablicach niż Cl₂O₅, którego w szkole się nie używa).
- H3: zadanie oznaczone 5 pkt (4 pkt za a–c, 1 pkt za uzasadnienie), bo propozycja liczyła 4 pkt przy 5 składnikach.
- Odsyłacz w U-blokach: „F09” w propozycji zastąpiono „F07 §5” zgodnie z treścią lekcji.
- H2: klucz z propozycji zachowany bez zmian merytorycznych (3 powłoki, 2 elektrony walencyjne).

Nieprzyjęte: brak uwag odrzuconych w całości. „Bez uwag” z audytu potwierdzone (klucze diagnozy, mini-check, A–D, F–G, O1–O6, wartości Pauling, energie jonizacji).
