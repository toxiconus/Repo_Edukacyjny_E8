---
kod: F17
uid: CHE.01.F17.rownania_reakcji_i_obliczenia
tytul: Równania reakcji i obliczenia z równań
opis: substraty i produkty · prawo zachowania masy · współczynnik a indeks · bilansowanie krok po kroku · stany skupienia, warunki, ↑ ↓ · typy reakcji i energia · cykle przemian · obliczenia masowe z równania (bez mola) · nadmiar i reagent ograniczający · mieszaniny · warstwa ambitna: mol, masa molowa, objętość molowa, wydajność, równania jonowe
kicker: F17 · RÓWNANIA REAKCJI · DZIAŁ III PODSTAWY · KONKURS ETAP SZKOLNY
lead: Równanie reakcji to „przepis” chemii: mówi, co reaguje, co powstaje i w jakich proporcjach — a z proporcji można policzyć masy.
lead: Lekcja ma dwie części: A — zapis i uzgadnianie równań, B — obliczenia z równań na masach (bez mola). Mol, masa molowa i wydajność są w warstwie ambitnej na końcu.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:KONKURS]][[extra:AMBITNE]]
uwaga: Scalenie kanonu F17 (równania reakcji) i części masowej R07–R08 (stechiometria). Rdzeń bez pojęcia mola — tak liczy się na etapie szkolnym; mol (R04) i wydajność (R09) — ramki ambitne. Masy atomowe zaokrąglone szkolnie (Cl = 35,5).
stopka: **CHEMIA F17 v1.0** · Równania reakcji i obliczenia z równań · 2026
stan: W1 FULL — Perplexity, 2026-10-11
---
::: minimum | Muszę umieć — 10 punktów
1. **Substraty → produkty.** Po lewej to, co reaguje; po prawej to, co powstaje; strzałka czytamy „reagują, tworząc”.
2. **Prawo zachowania masy:** masa substratów = masa produktów, bo atomy nie znikają i nie powstają — zmienia się tylko sposób ich połączenia.
3. **Współczynnik** (liczba przed wzorem) mnoży **cały wzór**; **indeks** (mała liczba we wzorze) należy do substancji. **Współczynniki tak, indeksy nie.**
4. Pierwiastki dwuatomowe w stanie wolnym: **H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂**.
5. **Bilansowanie:** poprawne wzory → policz atomy → dobieraj współczynniki (H i O zwykle na końcu) → skróć do najmniejszych liczb całkowitych → sprawdź jeszcze raz.
6. Zapis dodatkowy: (s), (l), (g), (aq); warunki (Δ, katalizator, światło) **nad strzałką**; ↑ gaz, ↓ osad — tylko gdy to prawda.
7. **Typy reakcji:** synteza, analiza (rozkład), wymiana (pojedyncza, podwójna); reakcja **egzo-** oddaje energię, **endo-** pobiera.
8. **Stosunek masowy z równania:** współczynnik × masa cząsteczkowa każdej substancji (np. 2Mg + O₂ → 2MgO: 48 : 32 : 80).
9. **Proporcja:** z równania (masy wzorcowe) i z zadania (masy dane) — „na krzyż”; wynik z jednostką i zdaniem odpowiedzi.
10. **Nadmiar:** gdy podano dwa substraty, sprawdź, którego zabraknie pierwszego (**reagent ograniczający**) — z niego liczysz produkt.
:::

::: warstwy
- e8 | <b>Podstawa:</b> zapis i uzgadnianie równań, prawo zachowania masy, typy reakcji, proste obliczenia masowe z równania
- understand | <b>Rozumienie:</b> dlaczego indeksów nie wolno zmieniać, dlaczego współczynniki to nie gramy, co bilans mówi, a czego nie mówi
- contest | <b>Konkurs:</b> równania z opisu słownego, spalanie związków organicznych, cykle przemian, nadmiar, mieszaniny, zadania odwrotne i tabelaryczne
- extra | <b>Ambitne:</b> mol, masa molowa, objętość molowa gazu, wydajność, równania jonowe z bilansem ładunku
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
1. **[§0.2](#diagnoza)** — diagnoza.
2. **[§1](#wyklad)–[§3](#bilansowanie)** — wykład, prawo zachowania masy, bilansowanie; potem **[§12](#cwiczenia)** część A.
3. **[§7](#obliczenia)–[§8](#nadmiar)** — obliczenia z równań i nadmiar; potem **[§12](#cwiczenia)** część B.
4. **[§10](#konkurs)** — zadania konkursowe, **[§11](#klinika)** — klinika błędów.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

::: karta understand
- **Najpierw sam, potem klucz.** Każde równanie uzgodnij na kartce, zanim otworzysz odpowiedź — rozwiązanie przeczytane „na oko” nie zostaje w głowie.
- **Licz atomy w tabelce:** pierwiastek | lewa | prawa. Tabelka wyłapuje błąd, którego nie widać w zapisie.
- **W obliczeniach pisz trzy wiersze:** równanie → masy z równania → masy z zadania. Proporcja powstaje sama.
- **Nie spiesz się.** To kurs we własnym tempie — wracaj do sekcji, które sprawiły trudność, i rób je ponownie po kilku dniach.
:::

## 0.2 | Diagnoza {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Co wolno zmieniać przy uzgadnianiu równania — współczynniki czy indeksy?
2. Czy równanie H₂ + O₂ → H₂O jest uzgodnione?
3. Ile atomów tlenu jest w zapisie 3CO₂?
4. Co oznacza symbol (aq)?
5. Gdzie zapisuje się katalizator?
6. Z 12 g magnezu powstało 20 g tlenku magnezu. Skąd wzięło się dodatkowe 8 g?

::: odp | Pokaż klucz
1. Tylko współczynniki. 2. Nie — po lewej 2 atomy O, po prawej 1; poprawnie 2H₂ + O₂ → 2H₂O. 3. 6 (3 · 2). 4. Roztwór wodny. 5. Nad strzałką. 6. Z tlenu, który przyłączył się do magnezu (prawo zachowania masy).

**Interpretacja:** 0–2 — zacznij od [§1](#wyklad) i czytaj powoli; 3–4 — przejdź rdzeń, zatrzymaj się przy błędnych punktach; 5–6 — przejdź szybko do [§7](#obliczenia) i [§10](#konkurs).
:::
:::

**Pytanie przewodnie:** jak zapisać reakcję tak, żeby zapis zachował informację o składzie i o ilości — i jak z tego zapisu policzyć masy?

> **CZĘŚĆ A — RÓWNANIA REAKCJI** — §1–§6: zapis i uzgadnianie równań.

## 1 | Wykład — równanie reakcji od zera [[basic:E8]] {#wyklad}

Wyobraź sobie, że rozbierasz zamek z klocków LEGO i z tych samych klocków budujesz samochód. Klocków nie przybyło ani nie ubyło — zmienił się tylko sposób, w jaki są połączone. **Reakcja chemiczna działa tak samo:** atomy substratów rozłączają się i łączą na nowo w inne cząsteczki. Atomy są „klockami”, cząsteczki — „budowlami”.

**Równanie reakcji** to skrócony zapis takiej przebudowy. Po lewej stronie strzałki piszemy **substraty** (to, co wchodzi do reakcji), po prawej — **produkty** (to, co powstaje). Znak „+” po lewej czytamy „i”, strzałkę — „reagują, tworząc”.

Spróbujmy zapisać spalanie wodoru (wodór reaguje z tlenem, powstaje woda). Najpierw same wzory:

$$ H₂ + O₂ → H₂O

Policzmy klocki. Po lewej: 2 atomy H i 2 atomy O. Po prawej: 2 atomy H i **tylko 1** atom O. Zgubiliśmy atom tlenu — a przecież atomy nie znikają. Taki zapis jest **schematem**, ale jeszcze nie równaniem.

Co możemy zmienić? Kusi, żeby dopisać tlenowi indeks: H₂O₂. Ale **H₂O₂ to nadtlenek wodoru** — inna substancja (środek do odkażania), a nie woda! Indeks jest częścią „przepisu na cząsteczkę”: zmieniasz indeks, zmieniasz substancję. Wolno nam za to zmieniać **liczbę cząsteczek** — czyli **współczynniki** przed wzorami:

$$ 2H₂ + O₂ → 2H₂O

Teraz: po lewej 4 H i 2 O, po prawej 4 H i 2 O. **Równanie jest uzgodnione.** Czytamy je: „dwie cząsteczki wodoru reagują z jedną cząsteczką tlenu, tworząc dwie cząsteczki wody”. Współczynnika 1 nie piszemy.

Uzgodnione równanie to **przepis kulinarny chemii**. Przepis „2 jajka + 1 szklanka mąki → 1 placek” mówi, w jakich proporcjach łączyć składniki. Jeśli masz 4 jajka i 2 szklanki mąki — upieczesz 2 placki. Równanie 2H₂ + O₂ → 2H₂O mówi to samo: wodór i tlen zawsze reagują w stosunku 2 cząsteczki : 1 cząsteczka, niezależnie od tego, czy reaguje ich garść, czy cysterna. Właśnie dlatego z równania da się **liczyć** — to część B lekcji.

Równanie mówi też, **jaki to typ reakcji**: dwie substancje łączą się w jedną (synteza), jedna rozpada się na kilka (analiza), atomy „zamieniają się miejscami” (wymiana). Mówi jednak tylko tyle, ile w nim zapisano — **nie mówi, czy reakcja w ogóle zajdzie**, jak szybko, ani jak wygląda doświadczenie. Uzgodnić da się nawet reakcję niemożliwą (np. Cu + 2HCl → CuCl₂ + H₂ — miedź nie wypiera wodoru z kwasu solnego). O tym, czy reakcja zachodzi, decyduje wiedza o substancjach: szereg aktywności metali, rozpuszczalność, warunki.

::: karta understand | W skrócie — współczynnik a indeks
**Indeks** (H₂**O**, CO**₂**) mówi, ile atomów danego pierwiastka jest w **jednej** cząsteczce — to część tożsamości substancji. **Współczynnik** (**3**H₂O) mówi, ile jest cząsteczek (albo jednostek wzoru, np. w solach) i mnoży **wszystkie** atomy we wzorze: 3H₂O to 6 atomów H i 3 atomy O. Nawias też się mnoży: 2Ca(OH)₂ to 2 atomy Ca, 4 atomy O i 4 atomy H. Zmiana indeksu tworzy nową substancję, zmiana współczynnika — tylko inną ilość tej samej.
:::

::: historia | Lavoisier, Łomonosow i waga
W XVIII wieku sądzono, że przy spalaniu z substancji ulatuje „flogiston”. Michaił Łomonosow (1756) i Antoine Lavoisier (lata 70.–80. XVIII w.) zaczęli **ważyć** substancje przed reakcją i po niej — w zamkniętych naczyniach. Okazało się, że masa całości się nie zmienia, a metal przy prażeniu staje się **cięższy**, bo przyłącza coś z powietrza — tlen. Waga obaliła teorię flogistonu, a chemia stała się nauką ilościową. Prawo zachowania masy bywa nazywane prawem Łomonosowa–Lavoisiera.
:::

## 2 | Prawo zachowania masy [[basic:E8]] {#zachowanie-masy}

::: regula
**Prawo zachowania masy:** w reakcji chemicznej łączna masa substratów jest równa łącznej masie produktów. Przyczyna: liczba atomów każdego pierwiastka się nie zmienia.
:::

Na co dzień prawo to wydaje się łamane — i właśnie dlatego jest ulubionym tematem zadań. Klucz: **czy liczysz wszystkie substancje, także gazy?**

| Sytuacja | Co pokazuje waga | Wyjaśnienie |
|---|---|---|
| spalanie magnezu w otwartym tyglu | masa **rośnie** | do magnezu przyłącza się tlen z powietrza, którego nie ważyliśmy na początku |
| spalanie świecy na wadze | masa **maleje** | produkty (tlenek węgla(IV) i para wodna) uchodzą do powietrza |
| reakcja w zamkniętym naczyniu (np. soda + ocet w butelce z balonikiem) | masa **stała** | nic nie ucieka i nic nie dochodzi |
| prażenie węglanu wapnia | masa stałej pozostałości **maleje** | ulatuje tlenek węgla(IV): CaCO₃ → CaO + CO₂ |

::: dosw | Doświadczenie — spalanie magnezu a masa
Problem: Czy masa produktu spalania magnezu jest większa, mniejsza czy równa masie magnezu?
Hipoteza: Masa produktu jest większa, bo magnez łączy się z tlenem z powietrza.
Sprzęt: tygiel porcelanowy z pokrywką, trójkąt ceramiczny, trójnóg, palnik, szczypce, waga, wstążka magnezowa.
Przebieg: Ważymy tygiel z wstążką magnezu. Ogrzewamy, uchylając co chwilę pokrywkę (dopływ powietrza), aż magnez przestanie się żarzyć. Po ostygnięciu ważymy ponownie.
Obserwacja: Magnez spala się oślepiająco jasnym, białym płomieniem; powstaje biały proszek; masa zawartości tygla wzrosła.
Wniosek: Produkt (tlenek magnezu) zawiera magnez i przyłączony tlen, dlatego jest cięższy od magnezu. Masa układu magnez + tlen nie zmieniła się — przybyło tyle, ile tlenu przereagowało.
Równanie:: 2Mg + O₂ → 2MgO
BHP: nie patrzeć bezpośrednio w płomień magnezu (silne światło, także UV); tygiel chwytać szczypcami — jest bardzo gorący.
:::

@zlewka f01-doswiadczenia-v01 f01Mg | Zobacz w tyglu: spalanie magnezu
@opis Animacja tygla nad palnikiem: srebrzysta wstążka magnezu zapala się oślepiająco białym płomieniem, a po zakończeniu w tyglu zostaje biały proszek tlenku magnezu. Wniosek: magnez połączył się z tlenem z powietrza, więc produkt jest cięższy od użytego metalu — masa układu (Mg + O₂) się nie zmienia.

::: karta core | Przykład liczbowy
Z 12 g magnezu powstało 20 g tlenku magnezu. Ile gramów tlenu przereagowało? **m(O₂) = 20 g − 12 g = 8 g.** To najprostsze zadanie z prawa zachowania masy — i dobry sposób na **sprawdzanie** wyników obliczeń w części B.
:::

## 3 | Bilansowanie krok po kroku [[basic:E8]] {#bilansowanie}

::: regula
**W–L–W–K:** **W**zory (poprawne) → **L**iczniki (policz atomy po obu stronach) → **W**spółczynniki (zmieniaj tylko je) → **K**ontrola (przelicz wszystko, skróć do najmniejszych liczb całkowitych).
:::

**Wskazówki doboru kolejności:**
- zacznij od pierwiastka, który występuje w **najmniejszej liczbie** wzorów (zwykle metal lub węgiel);
- **wodór i tlen** zostaw na koniec, jeśli pojawiają się w kilku wzorach;
- grupę atomów, która przechodzi w całości (SO₄, NO₃, OH), możesz liczyć jako **jeden blok**;
- gdy liczba atomów O po jednej stronie jest nieparzysta, a po drugiej jest O₂ — wstaw ułamek, a potem **pomnóż całe równanie przez 2**.

### Przykład 1 — magnez i tlen

Mg + O₂ → MgO. Tlen: 2 po lewej, 1 po prawej → **2**MgO. Teraz magnez: 2 po prawej → **2**Mg.

$$ 2Mg + O₂ → 2MgO

### Przykład 2 — tlenek żelaza(III): najmniejsza wspólna wielokrotność

Fe + O₂ → Fe₂O₃. Tlen: 2 i 3 — najmniejsza wspólna wielokrotność to 6: **3**O₂ i **2**Fe₂O₃. Żelazo: po prawej 4 → **4**Fe.

$$ 4Fe + 3O₂ → 2Fe₂O₃

| Pierwiastek | Lewa | Prawa |
|---|---|---|
| Fe | 4 | 2 · 2 = 4 |
| O | 3 · 2 = 6 | 2 · 3 = 6 |

### Przykład 3 — glin i kwas chlorowodorowy (solny)

Al + HCl → AlCl₃ + H₂. Chlor: AlCl₃ ma 3 Cl, a wodór H₂ — 2 atomy; żeby H wyszedł parzyście, bierzemy **2**AlCl₃ (6 Cl) → **6**HCl → 6 atomów H → **3**H₂ → **2**Al.

$$ 2Al + 6HCl → 2AlCl₃ + 3H₂

### Przykład 4 — spalanie metanu (C, potem H, na końcu O)

CH₄ + O₂ → CO₂ + H₂O. C: 1 = 1. H: 4 → **2**H₂O. O po prawej: 2 + 2 = 4 → **2**O₂.

$$ CH₄ + 2O₂ → CO₂ + 2H₂O

### Przykład 5 — spalanie etanu: sztuczka z ułamkiem

C₂H₆ + O₂ → CO₂ + H₂O. C: **2**CO₂. H: 6 → **3**H₂O. O po prawej: 4 + 3 = 7 — nieparzyście! Tymczasowo **3½**O₂, potem całość · 2:

$$ 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O

### Przykład 6 — spalanie etanolu: tlen w paliwie

C₂H₅OH + O₂ → CO₂ + H₂O. C: **2**CO₂. H: 6 (5 + 1) → **3**H₂O. O po prawej: 4 + 3 = 7; jeden atom O jest już w etanolu, więc z O₂ potrzeba 6 atomów → **3**O₂.

$$ C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O

### Przykład 7 — blok atomów (zobojętnianie)

NaOH + H₂SO₄ → Na₂SO₄ + H₂O. Grupa SO₄ przechodzi w całości (1 = 1). Na: 2 po prawej → **2**NaOH. Wodór: 2 + 2 = 4 po lewej → **2**H₂O.

$$ 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O

### Przykład 8 — rozkład z nawiasem

Fe(OH)₃ → Fe₂O₃ + H₂O. Fe: **2**Fe(OH)₃ → 6 O i 6 H po lewej. Wodór: **3**H₂O. Tlen po prawej: 3 + 3 = 6 ✔.

$$ 2Fe(OH)₃ → Fe₂O₃ + 3H₂O

@model f17-bilans-v01 | Bilansowanie na żywo: zmieniaj współczynniki, licz atomy | 8 równań (woda, metan, propan, Al + HCl, Fe₂O₃, Cu + Ag⁺, strącanie) · tabela atomów i ładunku
@opis Model równania z przyciskami „−” i „+” przy każdym wzorze: zmieniasz wyłącznie współczynniki (wzorów i indeksów nie da się edytować). Pod spodem tabela: każdy pierwiastek, liczba atomów po lewej i po prawej, kolorowe kreski-liczniki i znaczek OK albo błąd; ostatni wiersz porównuje łączny ładunek (ważne w równaniach z jonami, np. Cu + Ag⁺). Gdy wszystko się zgadza, pojawia się „Równanie uzgodnione”; tryb ekspercki ostrzega, gdy współczynniki da się jeszcze skrócić. Wniosek: równanie jest uzgodnione dopiero wtedy, gdy zgadza się każdy pierwiastek (i ładunek), a dobiera się je samymi współczynnikami w najmniejszych liczbach całkowitych.

::: karta understand | W skrócie — dlaczego „najmniejsze liczby całkowite”?
4H₂ + 2O₂ → 4H₂O też zachowuje atomy, ale opisuje tę samą proporcję co 2H₂ + O₂ → 2H₂O, tylko „podwojoną”. Umowa chemików: zapisujemy **najprostszy** zestaw współczynników, jak ułamek skrócony do końca. W obliczeniach oba zapisy dają ten sam wynik, ale w odpowiedzi na sprawdzianie liczy się zapis skrócony.
:::

## 4 | Zapis pełny: stany, warunki, strzałki [[basic:E8]] {#zapis}

| Symbol | Znaczenie | Przykład |
|---|---|---|
| (s) | ciało stałe | Mg(s) |
| (l) | ciecz | H₂O(l) |
| (g) | gaz | O₂(g) |
| (aq) | roztwór wodny | NaCl(aq) |
| ↑ | wydziela się gaz (zwykle gdy substraty nie są gazami) | Zn + 2HCl → ZnCl₂ + H₂↑ |
| ↓ | wytrąca się osad (substancja trudno rozpuszczalna) | AgNO₃ + NaCl → AgCl↓ + NaNO₃ |
| —(Δ)→ | ogrzewanie | CaCO₃ —(Δ)→ CaO + CO₂↑ |
| —(MnO₂)→ | katalizator | 2H₂O₂ —(MnO₂)→ 2H₂O + O₂↑ |
| —(światło)→ | energia światła | 6CO₂ + 6H₂O —(światło, chlorofil)→ C₆H₁₂O₆ + 6O₂ |

::: karta understand | W skrócie — warunek to nie substrat
Katalizator przyspiesza reakcję, ale **wychodzi z niej niezmieniony** — dlatego nie stoi po żadnej stronie równania, tylko nad strzałką. Tak samo ogrzewanie (Δ) i światło: dostarczają energii, a nie atomów. Stany skupienia dopisuj wtedy, gdy wymaga tego polecenie albo gdy pomagają zrozumieć zadanie (np. osad, gaz) — nie w każdym równaniu. Strzałki ↑ i ↓ stawiaj tylko przy produktach, które **naprawdę** są gazem albo osadem.
:::

## 5 | Typy reakcji i energia [[basic:E8]] {#typy}

| Typ | Schemat | Przykład |
|---|---|---|
| **synteza** (łączenie) | A + B → AB | 2Mg + O₂ → 2MgO |
| **analiza** (rozkład) | AB → A + B | 2H₂O —(prąd)→ 2H₂↑ + O₂↑ |
| **wymiana pojedyncza** (wypieranie) | A + BC → AC + B | Zn + 2HCl → ZnCl₂ + H₂↑ |
| **wymiana podwójna** | AB + CD → AD + CB | AgNO₃ + NaCl → AgCl↓ + NaNO₃ |

Inne nazwy opisują reakcję **z innej strony** i mogą nakładać się na powyższe: **spalanie** (z tlenem, z wydzieleniem dużej ilości energii — ciepła i zwykle światła), **zobojętnianie** (kwas + wodorotlenek → sól + woda; to wymiana podwójna), **strącanie** (powstaje osad; też wymiana podwójna). Spalanie magnezu jest jednocześnie syntezą i spalaniem.

::: karta understand | W skrócie — czy każda reakcja z tlenem to spalanie?
Nie. **Spalanie** to reakcja z tlenem, której towarzyszy wydzielanie **dużej ilości energii** (ciepła, zwykle też światła — płomień, żarzenie). Rdzewienie żelaza też jest reakcją z tlenem (i z wodą), ale zachodzi powoli i bez płomienia — to **powolne utlenianie**, a nie spalanie. Utlenianie SO₂ do SO₃ (2SO₂ + O₂ —(kat.)→ 2SO₃) w przemyśle też nie jest spalaniem. Obecność O₂ po lewej stronie to za mało — patrz na przebieg i efekt energetyczny.
:::

**Energia:** reakcja **egzotermiczna** oddaje energię do otoczenia (otoczenie się ogrzewa: spalanie, gaszenie wapna CaO + H₂O → Ca(OH)₂), **endotermiczna** pobiera energię (trzeba stale ogrzewać: rozkład CaCO₃; fotosynteza pobiera energię światła). Uwaga: „egzotermiczna” nie znaczy „zachodzi sama od razu” — drewno spala się egzotermicznie, a jednak trzeba je zapalić. Do rozpoczęcia wielu reakcji potrzebna jest **energia aktywacji** (iskra, zapałka).

::: karta understand | W skrócie — kiedy reakcja egzo-, kiedy endo-?
Podczas reakcji wiązania w substratach się zrywają (to **kosztuje** energię), a w produktach tworzą się nowe (to **uwalnia** energię). Jeśli przy tworzeniu nowych wiązań uwolni się więcej, niż kosztowało zrywanie starych — nadwyżka idzie do otoczenia i reakcja jest egzotermiczna. Jeśli mniej — trzeba energię dostarczać i reakcja jest endotermiczna.
:::

## 6 | Równania z opisu słownego i cykle przemian [[exam:KONKURS]] {#cykle}

Na konkursie często dostajesz **opis zamiast wzorów**. Procedura: (1) z nazw zapisz poprawne wzory (wartościowość!), (2) ułóż schemat, (3) uzgodnij.

::: karta core | Przykład — opis słowny
„Cynk reaguje z kwasem chlorowodorowym; powstaje chlorek cynku i wydziela się wodór.”
Wzory: Zn, HCl, ZnCl₂ (Zn — II, Cl — I), H₂. Schemat: Zn + HCl → ZnCl₂ + H₂. Uzgodnienie:
$$ Zn + 2HCl → ZnCl₂ + H₂↑
:::

**Cykl przemian** to łańcuch reakcji, w którym produkt jednej jest substratem następnej. Najczęstszy wzór: **metal → tlenek → wodorotlenek → sól** albo **niemetal → tlenek → kwas → sól**.

| Przemiana | Równanie |
|---|---|
| Ca → CaO | 2Ca + O₂ → 2CaO |
| CaO → Ca(OH)₂ | CaO + H₂O → Ca(OH)₂ |
| Ca(OH)₂ → CaCl₂ | Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O |
| S → SO₂ | S + O₂ → SO₂ |
| SO₂ → H₂SO₃ | SO₂ + H₂O → H₂SO₃ |
| H₂SO₃ → Na₂SO₃ | H₂SO₃ + 2NaOH → Na₂SO₃ + 2H₂O |

::: karta warning | Bilans nie zastępuje wiedzy chemicznej
Uzgodnione równanie mówi tylko, że zapis **zachowuje atomy** (i ładunek). Nie mówi, czy reakcja zachodzi. Przed zapisaniem sprawdź: czy metal jest **przed wodorem w szeregu aktywności** (Cu, Ag, Au nie wypierają wodoru z HCl); czy w wymianie podwójnej powstaje **osad, gaz lub woda** (tabela rozpuszczalności); czy tlenek **reaguje z wodą** (CuO, Fe₂O₃, SiO₂ — nie).
:::

> **CZĘŚĆ B — OBLICZENIA Z RÓWNAŃ (BEZ MOLA)** — §7–§13.

## 7 | Wykład — jak liczyć z równania [[basic:E8]] {#obliczenia}

Wróćmy do przepisu: „2 jajka + 1 szklanka mąki → 1 placek”. Przepis mówi o **sztukach**, ale w sklepie kupujesz na **wagę**. Żeby przejść ze sztuk na gramy, musisz wiedzieć, ile waży jedno jajko i jedna szklanka mąki. W chemii jest dokładnie tak samo.

Równanie 2H₂ + O₂ → 2H₂O mówi o **cząsteczkach**: 2 : 1 : 2. To **nie są gramy** — cząsteczka tlenu jest 16 razy cięższa od cząsteczki wodoru. Żeby przejść na masy, każdą liczbę cząsteczek mnożymy przez **masę cząsteczkową** (w jednostkach masy atomowej u):

| | 2H₂ | O₂ | 2H₂O |
|---|---|---|---|
| masa cząsteczkowa | 2 · 1 = 2 u | 2 · 16 = 32 u | 2 · 1 + 16 = 18 u |
| współczynnik × masa | 2 · 2 = **4** | 1 · 32 = **32** | 2 · 18 = **36** |

Otrzymaliśmy **stosunek masowy** 4 : 32 : 36 (po skróceniu 1 : 8 : 9). Ten stosunek jest taki sam dla 4 u, 4 g, 4 kg i 4 tony wodoru — bo każda próbka to po prostu ogromna liczba takich samych „paczek” 2H₂ + O₂. Dlatego **liczby z równania możemy czytać w gramach**: 4 g wodoru reagują z 32 g tlenu i dają 36 g wody. Kontrola: 4 + 32 = 36 — prawo zachowania masy działa.

Teraz zadanie: **ile wody powstanie z 1 g wodoru?** Układamy dwa wiersze — wzorcowy (z równania) i zadaniowy (z treści):

| | H₂ | H₂O |
|---|---|---|
| z równania | 4 g | 36 g |
| z zadania | 1 g | x |

Proporcja: 4 g / 1 g = 36 g / x → **x = 1 · 36 / 4 = 9 g**. To wszystko — reszta zadań to te same trzy kroki w innych przebraniach.

::: regula
**Uniwersalny algorytm (9 kroków):**
1. Przeczytaj polecenie; wypisz **dane** i **szukane**.
2. Zapisz poprawne **wzory** substratów i produktów.
3. **Uzgodnij** równanie (tylko współczynniki).
4. Oblicz **masy cząsteczkowe** potrzebnych substancji.
5. Pomnóż przez współczynniki — to **stosunek masowy** z równania.
6. Ułóż **proporcję** (wiersz z równania nad wierszem z zadania).
7. Gdy podano **dwa substraty** — sprawdź nadmiar i znajdź reagent ograniczający ([§8](#nadmiar)).
8. Zapisz wynik **z jednostką** i odpowiedź **pełnym zdaniem**.
9. **Sprawdź:** czy masy się bilansują i czy wynik ma sens (produkt nie może ważyć mniej niż substrat, z którego w całości powstał, jeśli coś się do niego przyłącza).
:::

::: karta understand | W skrócie — współczynniki to nie gramy
W 2Mg + O₂ → 2MgO współczynniki to 2 : 1 : 2, ale masy to 2 · 24 : 32 : 2 · 40 = **48 : 32 : 80** (po skróceniu 3 : 2 : 5). Gdyby czytać współczynniki jako gramy, wyszłoby, że 2 g magnezu dają 2 g tlenku — a przecież do magnezu przyłącza się tlen, więc produkt musi być cięższy. Zasada: **współczynniki → liczba cząsteczek; współczynnik × masa cząsteczkowa → gramy.**
:::

### Przykład B1 — masa produktu

Ile gramów tlenku magnezu powstanie z 12 g magnezu (tlen w nadmiarze)? Mg = 24 u, O = 16 u.

| | 2Mg | 2MgO |
|---|---|---|
| z równania | 2 · 24 = 48 g | 2 · 40 = 80 g |
| z zadania | 12 g | x |

x = 12 · 80 / 48 = **20 g**. Kontrola: przyłączyło się 20 − 12 = 8 g tlenu, a z równania 48 g Mg wiąże 32 g O₂ → 12 g Mg wiąże 8 g ✔.
**Odpowiedź:** powstanie 20 g tlenku magnezu.

### Przykład B2 — masa substratu (zadanie odwrotne)

Ile gramów węglanu wapnia trzeba rozłożyć, aby otrzymać 11 g tlenku węgla(IV)? CaCO₃ —(Δ)→ CaO + CO₂. Mr(CaCO₃) = 40 + 12 + 3 · 16 = 100 u; Mr(CO₂) = 12 + 2 · 16 = 44 u.

100 g CaCO₃ — 44 g CO₂; x — 11 g CO₂ → x = 100 · 11 / 44 = **25 g**.
**Odpowiedź:** należy rozłożyć 25 g CaCO₃. (Przy okazji: CaO powstanie 25 − 11 = 14 g.)

### Przykład B3 — masa drugiego substratu

Ile gramów tlenu potrzeba do spalenia 6 g węgla? C + O₂ → CO₂; masy 12 : 32 : 44.

12 g C — 32 g O₂; 6 g C — x → x = **16 g** tlenu (i powstanie 22 g CO₂).

### Przykład B4 — gaz z metalu i kwasu

Ile gramów wodoru wydzieli się w reakcji 13 g cynku z kwasem chlorowodorowym? Zn + 2HCl → ZnCl₂ + H₂; Zn = 65 u, H₂ = 2 u.

65 g Zn — 2 g H₂; 13 g Zn — x → x = 13 · 2 / 65 = **0,4 g**.

### Przykład B5 — tlenek żelaza(III)

Ile gramów tlenku żelaza(III) powstanie z 11,2 g żelaza? 4Fe + 3O₂ → 2Fe₂O₃; Fe = 56 u, Mr(Fe₂O₃) = 2 · 56 + 3 · 16 = 160 u.

Z równania: 4 · 56 = 224 g Fe — 2 · 160 = 320 g Fe₂O₃ (po skróceniu przez 2: 112 g — 160 g). 11,2 g Fe — x → x = 11,2 · 160 / 112 = **16 g**.

::: karta understand | W skrócie — skracaj, zanim pomnożysz
Stosunek masowy możesz skrócić tak samo jak ułamek: 224 : 320 = 112 : 160 = 7 : 10. Wtedy 11,2 g Fe · 10/7 = 16 g. Mniejsze liczby = mniej pomyłek rachunkowych. Na konkursie jest prosty kalkulator, ale skracanie i tak przyspiesza i pozwala szybko oszacować wynik.
:::

@model stech-kalkulator-v01 | Kalkulator stechiometryczny — sprawdź swoje obliczenia | wybierz reakcję, wpisz masę jednego reagenta
@opis Kalkulator: wybierasz reakcję z listy (np. spalanie węgla lub metanu, rozkład CaCO₃), wpisujesz masę jednego reagenta, a model przelicza masy pozostałych substratów i produktów; przy dwóch podanych substratach wskazuje, który jest w niedomiarze. Kalkulator pokazuje też mole i objętości gazów — to warstwa ambitna ([§13](#ambitne)). Wniosek: masy w reakcji zawsze pozostają w stałym stosunku wynikającym z równania; kalkulator służy do sprawdzenia wyniku policzonego samodzielnie proporcją.

## 8 | Nadmiar i reagent ograniczający [[exam:KONKURS]] {#nadmiar}

Masz 10 bułek i 3 kotlety, a przepis na hamburgera to 2 bułki + 1 kotlet. Ile hamburgerów zrobisz? Bułek starczy na 5, kotletów — tylko na 3. Zrobisz **3**, a 4 bułki zostaną. Kotlety **ograniczyły** wynik, bułek było **w nadmiarze**. Dokładanie bułek nic nie da.

::: regula
**Reagent ograniczający** — substrat, który zużyje się pierwszy; to on decyduje, ile powstanie produktu. Drugi substrat jest **w nadmiarze** — jego część zostaje. Uwaga: reagentem ograniczającym **nie musi być** substrat o mniejszej masie — decyduje porównanie z proporcją z równania.
:::

**Metoda masowa (bez mola):** policz, ile drugiego substratu potrzeba do pierwszego, i porównaj z tym, co jest.

### Przykład B6 — wodór i tlen

Zmieszano 4 g wodoru i 16 g tlenu. Ile powstanie wody? Z równania: 4 g H₂ — 32 g O₂ — 36 g H₂O.
- Do 16 g O₂ potrzeba 16 · 4 / 32 = **2 g** H₂. Wodoru jest 4 g → **wodór w nadmiarze** (zostaną 2 g), **tlen ogranicza**.
- Wodę liczymy z tlenu: 16 · 36 / 32 = **18 g**. Kontrola: 2 g H₂ + 16 g O₂ = 18 g H₂O ✔.

Zwróć uwagę: tlenu było więcej (16 g > 4 g), a jednak to on się skończył!

### Przykład B7 — magnez i tlen

Do spalenia użyto 12 g magnezu i 10 g tlenu. Do 12 g Mg potrzeba 8 g O₂ (48 : 32). Tlenu jest 10 g → **2 g tlenu zostanie**, ogranicza magnez. MgO: **20 g**. Kontrola: 12 + 8 = 20 ✔.

### Przykład B8 — tabela prób

Dla 2Mg + O₂ → 2MgO (stosunek masowy Mg : O₂ = 48 : 32 = 3 : 2):

| Próba | Mg | O₂ | Co ogranicza? | MgO | Co zostaje? |
|---|---|---|---|---|---|
| A | 12 g | 8 g | nic — proporcja dokładna | 20 g | nic |
| B | 24 g | 8 g | tlen | 20 g | 12 g Mg |
| C | 6 g | 8 g | magnez | 10 g | 4 g O₂ |

::: karta understand | W skrócie — sprawdź, co zostało
W zadaniach z nadmiarem pytania są zwykle trzy: (1) który substrat ogranicza, (2) ile powstało produktu, (3) **ile i czego zostało**. Na trzecie odpowiesz odejmowaniem: masa substratu w nadmiarze − masa, która przereagowała. Kontrola: masa wszystkich substancji po reakcji (produkty + pozostałość) = masa wszystkich substratów na początku.
:::

## 9 | Mieszaniny i obliczenia wieloetapowe [[exam:KONKURS]] {#mieszaniny}

**Mieszanina:** w reakcji bierze udział tylko ta substancja, która reaguje — resztę pomijamy w proporcji.

### Przykład B9 — próbka z piaskiem

Próbka zawiera 10 g CaCO₃ i 5 g piasku. Ile CaO powstanie po prażeniu? Piasek (SiO₂) się nie rozkłada. 100 g CaCO₃ — 56 g CaO; 10 g — x → **5,6 g CaO** (a w tyglu zostanie 5,6 g + 5 g piasku = 10,6 g).

### Przykład B10 — skład mieszaniny z masy gazu

10 g mieszaniny CaCO₃ i NaCl potraktowano nadmiarem kwasu solnego. Wydzieliło się 2,2 g CO₂. Jaki procent mieszaniny stanowił CaCO₃? NaCl z HCl nie reaguje.
CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑; 100 g CaCO₃ — 44 g CO₂; x — 2,2 g → x = **5 g**. Procent: 5 / 10 · 100% = **50%**.

### Przykład B11 — dwa etapy

12 g magnezu spalono, a otrzymany tlenek w całości przereagował z kwasem solnym. Ile powstało chlorku magnezu?
- Etap 1: 2Mg + O₂ → 2MgO — z 12 g Mg powstaje 20 g MgO.
- Etap 2: MgO + 2HCl → MgCl₂ + H₂O; Mr(MgO) = 40, Mr(MgCl₂) = 24 + 2 · 35,5 = 95. 40 g — 95 g; 20 g — x → **47,5 g MgCl₂**.
Skrót: każdy atom Mg trafia do MgCl₂, więc 24 g Mg — 95 g MgCl₂; 12 g → 47,5 g ✔ (to samo bez etapu pośredniego).

::: karta understand | W skrócie — droga na skróty przez atom
W łańcuchu przemian pierwiastek „wędruje” bez strat: Mg → MgO → MgCl₂. Zamiast liczyć każdy etap, możesz połączyć pierwszy i ostatni związek przez **liczbę atomów tego pierwiastka**. Działa, gdy w każdym etapie cały pierwiastek przechodzi do produktu.
:::

## 10 | Zadania konkursowe [[exam:KONKURS]] {#konkurs}

::: karta exam | Zadanie 1 (3 pkt) — znajdź błąd
Uczeń „uzgodnił” równanie tak: H₂ + O₂ → H₂O₂. Wskaż błąd, podaj poprawne równanie i wyjaśnij, czym różnią się H₂O i H₂O₂.

::: odp | Pokaż rozwiązanie
Zmieniono indeks we wzorze produktu (1 pkt). Poprawnie: 2H₂ + O₂ → 2H₂O (1 pkt). H₂O to woda, H₂O₂ — nadtlenek wodoru, inna substancja o innym składzie i właściwościach (1 pkt).
:::
:::

::: karta exam | Zadanie 2 (5 pkt) — prawda czy fałsz
1. Współczynnik stoi przed wzorem i mnoży wszystkie atomy w tym wzorze.
2. Przy uzgadnianiu można zmieniać indeksy, jeśli powstały wzór istnieje.
3. W równaniu 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O po każdej stronie jest 14 atomów tlenu.
4. Każda reakcja z udziałem tlenu jest spalaniem.
5. Katalizator zapisuje się nad strzałką, bo nie zużywa się w reakcji.

::: odp | Pokaż klucz
1 P · 2 F (to tworzy inną substancję — zmienia treść zadania) · 3 P (7 · 2 = 14; 4 · 2 + 6 = 14) · 4 F (np. rdzewienie) · 5 P. Po 1 pkt.
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — uzgodnij
a) Al + O₂ → Al₂O₃ · b) C₃H₈ + O₂ → CO₂ + H₂O · c) C₃H₇OH + O₂ → CO₂ + H₂O

::: odp | Pokaż rozwiązanie
a) 4Al + 3O₂ → 2Al₂O₃.
b) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (C: 3; H: 8 → 4H₂O; O: 6 + 4 = 10 → 5O₂).
c) C: 3CO₂; H: 8 → 4H₂O; O po prawej 10, w alkoholu 1 → z O₂ 9 atomów → 4½O₂ → · 2: **2C₃H₇OH + 9O₂ → 6CO₂ + 8H₂O**. Po 1 pkt.
:::
:::

::: karta exam | Zadanie 4 (3 pkt) — cykl przemian
Zapisz równania reakcji: Mg → MgO → Mg(OH)₂ → MgCl₂. (Tlenek magnezu reaguje z wodą słabo, ale reakcja jest szkolnym przykładem otrzymywania wodorotlenku.)

::: odp | Pokaż rozwiązanie
2Mg + O₂ → 2MgO · MgO + H₂O → Mg(OH)₂ · Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O. Po 1 pkt.
:::
:::

::: karta exam | Zadanie 5 (2 pkt) — zadanie odwrotne
Ile gramów wapnia trzeba spalić, aby otrzymać 28 g tlenku wapnia? 2Ca + O₂ → 2CaO; Ca = 40 u, O = 16 u.

::: odp | Pokaż rozwiązanie
80 g Ca — 112 g CaO (czyli 40 g — 56 g); x — 28 g → x = **20 g** wapnia. 1 pkt metoda (poprawna proporcja z równania), 1 pkt wynik z jednostką.
:::
:::

::: karta exam | Zadanie 6 (4 pkt) — nadmiar
Zmieszano 6 g węgla i 20 g tlenu i spalono węgiel całkowicie do CO₂. a) Który substrat był w nadmiarze i ile go zostało? b) Ile gramów CO₂ powstało? c) Sprawdź wynik prawem zachowania masy.

::: odp | Pokaż rozwiązanie
a) 12 g C — 32 g O₂ → 6 g C potrzebuje 16 g O₂; tlen w nadmiarze, zostają **4 g** (2 pkt). b) 6 g C → **22 g CO₂** (1 pkt). c) 6 + 16 = 22 g; razem z nadmiarem: 6 + 20 = 26 = 22 + 4 ✔ (1 pkt).
:::
:::

::: karta exam | Zadanie 7 (3 pkt) — tabela
Spalano metan: CH₄ + 2O₂ → CO₂ + 2H₂O (masy 16 : 64 : 44 : 36). Uzupełnij tabelę.

| Masa CH₄ | Masa O₂ zużytego | Masa CO₂ | Masa H₂O |
|---|---|---|---|
| 8 g | ? | ? | ? |
| ? | ? | 11 g | ? |

::: odp | Pokaż rozwiązanie
Wiersz 1: 32 g O₂, 22 g CO₂, 18 g H₂O (kontrola: 8 + 32 = 22 + 18 = 40 ✔). Wiersz 2: 11 g CO₂ to ¼ z 44 g → 4 g CH₄, 16 g O₂, 9 g H₂O (4 + 16 = 11 + 9 ✔). Po 1 pkt za każdy wiersz, 1 pkt za kontrolę.
:::
:::

::: karta exam | Zadanie 8 (3 pkt) — sytuacja nietypowa
Uczeń zważył świecę przed spaleniem i po nim i stwierdził: „Masa zmalała, więc prawo zachowania masy tu nie obowiązuje”. Oceń wniosek i zaproponuj, jak zmienić doświadczenie, aby prawo zachowania masy było widoczne.

::: odp | Pokaż rozwiązanie
Wniosek błędny (1 pkt): produkty spalania — tlenek węgla(IV) i para wodna — uleciały i nie zostały zważone, a tlen z powietrza też nie był ważony na początku (1 pkt). Doświadczenie w szczelnie zamkniętym naczyniu (np. kolba z balonikiem) na wadze — masa się nie zmieni (1 pkt).
:::
:::

::: karta exam | Zadanie 9 (3 pkt) — opis → równanie → obliczenie
Glin reaguje z kwasem chlorowodorowym, tworząc chlorek glinu i wodór. Zapisz równanie i oblicz, ile gramów wodoru powstanie z 5,4 g glinu. Al = 27 u, H = 1 u.

::: odp | Pokaż rozwiązanie
2Al + 6HCl → 2AlCl₃ + 3H₂ (1 pkt). 54 g Al — 6 g H₂ (1 pkt); 5,4 g — x → **0,6 g H₂** (1 pkt).
:::
:::

::: karta exam | Zadanie 10 (2 pkt) — obserwacja a wniosek
W doświadczeniu na marmur podziałano kwasem solnym, a gaz wprowadzono do wody wapiennej. Zapisz osobno obserwację i wniosek.

::: odp | Pokaż rozwiązanie
Obserwacja: marmur się roztwarza, wydzielają się pęcherzyki bezbarwnego gazu; woda wapienna mętnieje (1 pkt). Wniosek: wydziela się tlenek węgla(IV): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ (1 pkt). Błąd: w obserwacji pisać „wydziela się CO₂” — tego nie widać, to już wniosek.
:::
:::

## 11 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| Mg + O₂ → MgO₂ | 2Mg + O₂ → 2MgO | Zmieniono indeks — MgO₂ to inna substancja (nadtlenek). Bilansuje się współczynnikami. |
| H₂ + O → H₂O | 2H₂ + O₂ → 2H₂O | Wolny tlen to cząsteczki **O₂**. Pamiętaj: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂. |
| „3H₂O to 3 atomy H i 1 atom O” | 6 atomów H i 3 atomy O | Współczynnik mnoży **cały** wzór. |
| 2Ca(OH)₂ — „2 atomy O” | 4 atomy O, 4 atomy H | Nawias mnoży się przez indeks, a potem całość przez współczynnik. |
| 4H₂ + 2O₂ → 4H₂O jako odpowiedź | 2H₂ + O₂ → 2H₂O | Współczynniki skracamy do najmniejszych liczb całkowitych. |
| Liczenie z nieuzgodnionego równania | najpierw uzgodnij | Nieuzgodnione równanie podaje fałszywą proporcję — poprawny rachunek na złych danych daje zły wynik. |
| „2 g Mg dają 2 g MgO” (współczynniki jako gramy) | 48 g Mg → 80 g MgO | Współczynniki to liczby cząsteczek; gramy = współczynnik × masa cząsteczkowa. |
| „Z 12 g Mg powstaje 12 g MgO” | 20 g MgO | Przyłącza się 8 g tlenu — produkt jest cięższy. |
| Liczenie produktu z substratu o mniejszej masie | z reagenta ograniczającego | Mniejsza masa ≠ ograniczający; porównaj z proporcją z równania (4 g H₂ i 16 g O₂ → ogranicza tlen). |
| Katalizator po lewej jako substrat | nad strzałką | Katalizator wychodzi z reakcji niezmieniony. |
| „Każda reakcja z O₂ to spalanie” | spalanie = z O₂ i z wydzieleniem dużej ilości energii | Rdzewienie to powolne utlenianie, nie spalanie. |
| Obserwacja: „powstał CO₂” | Obserwacja: „gaz zmętnił wodę wapienną”; wniosek: „to CO₂” | Obserwacja to to, co widać; nazwa substancji to wniosek. |
| ↑ przy każdym produkcie | ↑ tylko przy gazie, ↓ tylko przy osadzie | Strzałki niosą informację — stawiane „na zapas” są błędem. |
| Cu + 2HCl → CuCl₂ + H₂ | reakcja nie zachodzi | Miedź jest za wodorem w szeregu aktywności; uzgodniony zapis nie dowodzi, że reakcja zachodzi. |
:::

## 12 | Ćwiczenia {#cwiczenia}

### A. Równania [[basic:E8]]

::: karta basic | A1–A8 — uzgodnij
1. Na + Cl₂ → NaCl
2. Mg + HCl → MgCl₂ + H₂
3. P + O₂ → P₂O₅
4. H₂O₂ → H₂O + O₂
5. CaCO₃ + HCl → CaCl₂ + H₂O + CO₂
6. Fe + Cl₂ → FeCl₃
7. KOH + H₃PO₄ → K₃PO₄ + H₂O
8. Al(OH)₃ → Al₂O₃ + H₂O

::: odp | Pokaż klucz
1. 2Na + Cl₂ → 2NaCl · 2. Mg + 2HCl → MgCl₂ + H₂ · 3. 4P + 5O₂ → 2P₂O₅ · 4. 2H₂O₂ → 2H₂O + O₂ · 5. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ · 6. 2Fe + 3Cl₂ → 2FeCl₃ · 7. 3KOH + H₃PO₄ → K₃PO₄ + 3H₂O · 8. 2Al(OH)₃ → Al₂O₃ + 3H₂O
:::
:::

::: karta basic | A9–A12 — rozpoznaj i nazwij
9. Ile atomów każdego pierwiastka jest w zapisie 3Ca(OH)₂?
10. Określ typ reakcji: a) 2KClO₃ → 2KCl + 3O₂; b) Fe + CuSO₄ → FeSO₄ + Cu; c) 2Na + Cl₂ → 2NaCl; d) BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl.
11. Zapisz równanie z opisu: „Wodór reaguje z chlorem, tworząc chlorowodór.”
12. Zapisz równanie spalania butanu C₄H₁₀.

::: odp | Pokaż klucz
9. Ca 3, O 6, H 6. · 10. a) analiza; b) wymiana pojedyncza; c) synteza; d) wymiana podwójna (strącanie). · 11. H₂ + Cl₂ → 2HCl. · 12. C: 4CO₂; H: 10 → 5H₂O; O: 8 + 5 = 13 → 6½O₂ → · 2: **2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O**.
:::
:::

### B. Obliczenia [[basic:E8]]

::: karta basic | B1–B6
Masy atomowe: H 1, C 12, O 16, Na 23, Mg 24, Al 27, S 32, Cl 35,5, Ca 40, Fe 56, Cu 64, Zn 65.
1. Ile gramów tlenu potrzeba do spalenia 3 g węgla do CO₂?
2. Ile gramów wody powstanie ze spalenia 8 g metanu?
3. Ile gramów CaO powstanie z rozkładu 50 g CaCO₃?
4. Ile gramów magnezu potrzeba, aby otrzymać 4 g MgO?
5. Ile gramów wodoru wydzieli się z 6 g magnezu w reakcji z HCl?
6. W reakcji 2Cu + O₂ → 2CuO otrzymano 8 g CuO. Ile gramów tlenu przereagowało?

::: odp | Pokaż klucz
1. 12 : 32 → **8 g**. · 2. 16 g CH₄ — 36 g H₂O → **18 g**. · 3. 100 : 56 → **28 g**. · 4. 48 g Mg — 80 g MgO → **2,4 g**. · 5. Mg + 2HCl → MgCl₂ + H₂; 24 : 2 → **0,5 g**. · 6. 128 g Cu + 32 g O₂ → 160 g CuO; 8 g CuO — x → **1,6 g O₂** (i 6,4 g Cu).
:::
:::

### C. Konkursowe [[exam:KONKURS]]

::: karta exam | C1–C4
1. Zmieszano 2 g wodoru i 20 g tlenu i zainicjowano reakcję. Ile powstało wody i ile czego zostało?
2. 20 g mieszaniny węglanu wapnia z piaskiem prażono do stałej masy; masa zmalała o 4,4 g. Ile procent CaCO₃ zawierała mieszanina?
3. Spalono całkowicie 4,6 g etanolu. Ile gramów CO₂ i ile gramów wody powstało? (C₂H₅OH = 46 u)
4. Ile gramów chlorku wapnia można otrzymać z 4 g wapnia w łańcuchu Ca → CaO → Ca(OH)₂ → CaCl₂?

::: odp | Pokaż klucz
1. 4 g H₂ — 32 g O₂ → do 2 g H₂ potrzeba 16 g O₂; ogranicza wodór; powstaje **18 g H₂O**, zostaje **4 g O₂** (2 + 20 = 18 + 4 ✔).
2. Ubytek masy = ulatujący CO₂ = 4,4 g; 100 g CaCO₃ — 44 g CO₂ → **10 g CaCO₃**, czyli **50%**.
3. C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O; 46 : 88 : 54 → **8,8 g CO₂** i **5,4 g H₂O** (tlenu zużyto 9,6 g; 4,6 + 9,6 = 8,8 + 5,4 ✔).
4. Przez atom wapnia: 40 g Ca — 111 g CaCl₂ (40 + 71) → **11,1 g CaCl₂**.
:::
:::

## 13 | Warstwa ambitna: mol, gazy, wydajność, jony [[extra:AMBITNE]] {#ambitne}

::: adv | Mol i masa molowa | etap wojewódzki · liceum
Gramy są wygodne w zadaniu, ale chemik woli **liczyć sztuki** — tylko że cząsteczek jest niewyobrażalnie dużo. Dlatego wprowadzono „chemiczny tuzin”: **mol**. Jeden mol to dokładnie **6,02214076 · 10²³** obiektów (atomów, cząsteczek, jonów, jednostek wzoru) — to **liczba Avogadra** N_A (jednostka mol⁻¹). Zawsze trzeba powiedzieć, czego mol dotyczy: 1 mol cząsteczek O₂ to 2 mole atomów O.

**Masa molowa** M — masa jednego mola, w g/mol; liczbowo równa masie cząsteczkowej w u: M(H₂O) = 18 g/mol, M(CO₂) = 44 g/mol, M(Al₂(SO₄)₃) = 2 · 27 + 3 · (32 + 4 · 16) = 342 g/mol. Nie myl: masa molowa (g/mol) ≠ masa jednej cząsteczki (u).

**Wzory:** n = m / M · m = n · M · N = n · N_A.

**Współczynniki uzgodnionego równania to stosunki molowe:** 2H₂ + O₂ → 2H₂O → 2 mol : 1 mol : 2 mol. Schemat: masa → mole (÷ M) → stosunek współczynników → mole szukanej → masa (· M).
Przykład: 12 g Mg → n = 12/24 = 0,5 mol; Mg : MgO = 1 : 1 → 0,5 mol MgO → m = 0,5 · 40 = **20 g** — ten sam wynik co proporcją masową.
**Reagent ograniczający na molach:** podziel liczbę moli każdego substratu przez jego współczynnik — najmniejszy wynik wskazuje ograniczający. N₂ + 3H₂ → 2NH₃, 2 mol N₂ i 3 mol H₂: 2/1 = 2, 3/3 = 1 → ogranicza **H₂**, powstają 2 mol NH₃.
:::

::: adv | Objętość molowa gazów | etap wojewódzki · liceum
W tych samych warunkach mol każdego gazu zajmuje tę samą objętość. W **warunkach normalnych** (szkolnie: 0°C, 1013,25 hPa) jest to ok. **22,4 dm³/mol**. Przykład: rozkład 10 g CaCO₃ → 0,1 mol CO₂ → 0,1 · 22,4 = **2,24 dm³** (w warunkach normalnych). Bez podanych warunków objętości molowej używać nie wolno; w innych warunkach stosuje się równanie stanu gazu pV = nRT (Clapeyrona) — poziom liceum.
:::

::: adv | Wydajność reakcji | etap wojewódzki · liceum
W praktyce otrzymuje się zwykle mniej produktu, niż wynika z równania (straty przy sączeniu i przenoszeniu, reakcje uboczne, reakcja niecałkowita). **Wydajność:** η = m(rzeczywista) / m(teoretyczna) · 100%. Najpierw ustal reagent ograniczający — z niego wynika masa teoretyczna.
Przykład: z 10 g CaCO₃ teoretycznie 5,6 g CaO, otrzymano 4,2 g → η = 4,2 / 5,6 · 100% = **75%**. Wynik powyżej 100% to sygnał błędu: produkt wilgotny lub zanieczyszczony, zły pomiar albo błąd rachunku.
:::

::: adv | Równania jonowe — bilans ładunku | etap rejonowy
W równaniu jonowym oprócz atomów musi się zgadzać **łączny ładunek**. AgNO₃ + NaCl → AgCl↓ + NaNO₃: jonowo pełne Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻; skrócone (bez jonów „obserwatorów”) **Ag⁺ + Cl⁻ → AgCl↓** (ładunek: 0 = 0). Zobojętnianie: **H⁺ + OH⁻ → H₂O**. Wypieranie: Cu + 2Ag⁺ → Cu²⁺ + 2Ag — zapis Cu + Ag⁺ → Cu²⁺ + Ag zgadza się atomami, ale nie ładunkiem (+1 ≠ +2). Szersze omówienie — lekcje o kwasach, wodorotlenkach i solach (N02–N04).
:::

## 14 | Ciekawostki {#ciekawostki}

::: karta extra | Wierzba van Helmonta
W XVII wieku Jan Baptysta van Helmont posadził wierzbę w odważonej ziemi i przez 5 lat tylko ją podlewał. Drzewko przybrało ok. 74 kg, a ziemi ubyło zaledwie ok. 60 g (dane orientacyjne). Uznał, że drzewo „zrobiło się z wody”. Dziś wiemy, że masa rośliny pochodzi głównie z **tlenku węgla(IV) z powietrza** i wody — 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Roślina nie tworzy materii ze światła; światło daje tylko energię.
:::

::: karta extra | Poduszka powietrzna liczy stechiometrycznie
W starszych poduszkach powietrznych azydek sodu rozkłada się w ułamku sekundy: 2NaN₃ → 2Na + 3N₂↑. Masę ładunku dobiera się z równania tak, żeby powstało dokładnie tyle azotu, ile potrzeba do napełnienia poduszki — za mało gazu nie ochroni, za dużo grozi rozerwaniem. Powstający sód od razu wiąże się z innymi składnikami ładunku, bo jest niebezpieczny. (Nowsze poduszki używają innych mieszanin.)
:::

::: karta extra | Rakieta celowo „marnuje” wodór
Silniki zasilane ciekłym wodorem i tlenem (jak w promach kosmicznych) nie pracują w proporcji stechiometrycznej 1 : 8 (masowo), tylko z **nadmiarem wodoru** — ok. 1 : 6. Spaliny zawierające lekki, nieprzereagowany wodór wylatują szybciej, a to daje większy ciąg w przeliczeniu na kilogram paliwa. Reagent w nadmiarze bywa więc decyzją inżyniera, a nie błędem.
:::

::: karta extra | Świeca, która „znika”
Świeca o masie 20 g po spaleniu „waży” prawie nic — a jednak masa nie zginęła. Parafina (węglowodory) połączyła się z tlenem z powietrza i zamieniła w tlenek węgla(IV) i parę wodną. Gdyby zebrać i zważyć te gazy, ważyłyby **więcej** niż świeca, bo zawierają też przyłączony tlen.
:::

::: karta extra | Ciasto i stechiometria
Proszek do pieczenia zawiera wodorowęglan sodu i kwaśny składnik. W wilgotnym, ciepłym cieście reagują, wydzielając CO₂, który spulchnia ciasto. Producent dobiera ilości tak, by oba składniki przereagowały całkowicie — nadmiar sody dałby ciastu mydlany, gorzkawy posmak. To kuchenny przykład reagenta w nadmiarze.
:::

## 15 | Sposoby pamięciowe {#mnemotechniki}

::: wskazowki
- **„Współczynnik tak, indeks nie.”** Współczynnik zmienia ilość, indeks — substancję.
- **W–L–W–K:** Wzory → Liczniki → Współczynniki → Kontrola.
- **„C — H — O” przy spalaniu:** najpierw węgiel (CO₂), potem wodór (H₂O), na końcu tlen (O₂); nieparzysty tlen → ułamek → · 2.
- **„Siedem dwuatomowych”: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂** — na układzie okresowym zacznij od azotu (Z = 7): N → O → F w poziomie, potem w dół F → Cl → Br → I; razem tworzą kształt cyfry 7, a wodór dopisz osobno.
- **„Wiersz z równania nad wierszem z zadania”** — proporcja powstaje sama.
- **„Kto skończy się pierwszy, ten rządzi wynikiem”** — reagent ograniczający.
- **„Co wchodzi, musi wyjść”** — suma mas przed = suma mas po; najszybsze sprawdzenie każdego wyniku.
- **„Obserwuję oczami, wnioskuję głową”** — w obserwacji nie ma nazw substancji, które powstały.
:::

## 16 | Granice materiału — co na którym poziomie {#granice}

| Poziom | Zakres w tej lekcji |
|---|---|
| E8 (szkoła, egzamin) | zapis i uzgadnianie równań, prawo zachowania masy, typy reakcji, stany i warunki, proste obliczenia masowe z równania |
| Ambitny | zadania z nadmiarem, mieszaniny, obliczenia dwuetapowe, spalanie związków z tlenem w cząsteczce |
| Konkursowy (etap szkolny/rejonowy) | równania z opisu słownego, cykle przemian, dane tabelaryczne, sytuacje nietypowe, równania jonowe (rejonowy) |
| Licealny (etap wojewódzki) | mol, masa molowa, liczba Avogadra, objętość molowa, wydajność, pV = nRT |

## 17 | Test końcowy {#test}

::: test
? Które zdanie o uzgadnianiu równań jest prawdziwe?
- można zmieniać indeksy, jeśli tak jest szybciej
+ zmienia się tylko współczynniki przed wzorami
- współczynniki zapisuje się jako indeksy dolne
- współczynnik 1 trzeba zawsze zapisywać
! Indeks należy do wzoru substancji — jego zmiana tworzy inną substancję.

? Ile atomów wodoru jest w zapisie 2Ca(OH)₂?
- 2
+ 4
- 6
- 8
! 2 · (OH)₂ = 2 · 2 = 4 atomy H.

? Które równanie jest poprawnie uzgodnione?
- Fe + O₂ → Fe₂O₃
- 2Fe + 3O₂ → Fe₂O₃
+ 4Fe + 3O₂ → 2Fe₂O₃
- 4Fe + 6O₂ → 2Fe₂O₃
! Fe: 4 = 4, O: 6 = 6.

? Współczynnik przed tlenem w uzgodnionym równaniu spalania propanu C₃H₈ wynosi:
- 3
- 4
+ 5
- 10
! C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.

? Z 12 g węgla spalonego całkowicie powstaje 44 g CO₂. Ile tlenu przereagowało?
- 12 g
+ 32 g
- 44 g
- 56 g
! Prawo zachowania masy: 44 − 12 = 32 g.

? Stosunek masowy Mg : O₂ : MgO w reakcji 2Mg + O₂ → 2MgO wynosi:
- 2 : 1 : 2
+ 3 : 2 : 5
- 1 : 1 : 1
- 24 : 16 : 40
! 48 : 32 : 80 = 3 : 2 : 5. Współczynniki 2 : 1 : 2 to liczby cząsteczek, nie masy.

? Ile gramów CaO powstanie z 25 g CaCO₃?
- 11 g
+ 14 g
- 25 g
- 56 g
! 100 g → 56 g, więc 25 g → 14 g.

? Zmieszano 4 g H₂ i 16 g O₂. Reagentem ograniczającym jest:
- wodór, bo jest go mniej
+ tlen
- żaden — proporcja jest dokładna
- oba naraz
! Do 16 g O₂ potrzeba tylko 2 g H₂ — tlen kończy się pierwszy.

? Masa magnezu spalonego w otwartym tyglu po reakcji (z produktem) jest:
+ większa, bo przyłączył się tlen z powietrza
- mniejsza, bo magnez się spalił
- taka sama, bo obowiązuje prawo zachowania masy
- zależna od koloru płomienia
! Przyłącza się tlen, którego nie ważyliśmy na początku — masa układu Mg + O₂ się nie zmienia.

? Katalizator w równaniu reakcji zapisuje się:
- po lewej stronie jako substrat
- po prawej stronie jako produkt
+ nad strzałką
- nie zapisuje się go nigdy
! Katalizator wychodzi z reakcji niezmieniony.

? Która reakcja nie zachodzi, choć da się zapisać jej uzgodnione równanie?
- Zn + 2HCl → ZnCl₂ + H₂
- Mg + 2HCl → MgCl₂ + H₂
+ Cu + 2HCl → CuCl₂ + H₂
- Fe + 2HCl → FeCl₂ + H₂
! Miedź leży za wodorem w szeregu aktywności metali.

? Spalanie to:
- każda reakcja z tlenem
+ reakcja z tlenem z wydzieleniem dużej ilości energii (ciepła, zwykle światła)
- każda reakcja egzotermiczna
- rozkład substancji pod wpływem ogrzewania
! Rdzewienie jest reakcją z tlenem, ale nie spalaniem.
:::

## 18 | Fiszki {#fiszki}

::: fiszki
Substraty | substancje, które reagują (lewa strona równania) | basic:równania
Produkty | substancje, które powstają (prawa strona) | basic:równania
Prawo zachowania masy | masa substratów = masa produktów | basic:równania
Współczynnik | liczba przed wzorem; mnoży cały wzór | basic:równania
Indeks | liczba we wzorze; należy do substancji — nie zmieniać! | basic:równania
Pierwiastki dwuatomowe | H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ | basic:równania
2H₂ + O₂ → ? | 2H₂O | basic:równania
Spalanie metanu | CH₄ + 2O₂ → CO₂ + 2H₂O | basic:równania
Spalanie propanu | C₃H₈ + 5O₂ → 3CO₂ + 4H₂O | exam:konkurs
(aq) | roztwór wodny | basic:zapis
↑ / ↓ | wydziela się gaz / wytrąca się osad | basic:zapis
Synteza / analiza | A + B → AB / AB → A + B | basic:typy
Wymiana pojedyncza / podwójna | A + BC → AC + B / AB + CD → AD + CB | basic:typy
Egzotermiczna / endotermiczna | oddaje / pobiera energię | basic:typy
Stosunek masowy z równania | współczynnik × masa cząsteczkowa | basic:obliczenia
2Mg + O₂ → 2MgO masowo | 48 : 32 : 80 (3 : 2 : 5) | basic:obliczenia
2H₂ + O₂ → 2H₂O masowo | 4 : 32 : 36 (1 : 8 : 9) | basic:obliczenia
CaCO₃ → CaO + CO₂ masowo | 100 : 56 : 44 | basic:obliczenia
Reagent ograniczający | zużywa się pierwszy, wyznacza ilość produktu | exam:konkurs
Mol | 6,02214076 · 10²³ obiektów | extra:ambitne
n = ? | n = m / M | extra:ambitne
Objętość molowa (war. normalne) | ok. 22,4 dm³/mol | extra:ambitne
Wydajność | η = m(rzecz.) / m(teor.) · 100% | extra:ambitne
:::

## 19 | Słownik {#slownik}

::: slownik
Równanie reakcji :: zapis przemiany chemicznej za pomocą wzorów, ze współczynnikami zachowującymi liczbę atomów
Substrat :: substancja wchodząca do reakcji
Produkt :: substancja powstająca w reakcji
Współczynnik stechiometryczny :: liczba przed wzorem, określająca liczbę cząsteczek (jednostek wzoru, moli) substancji
Indeks :: liczba we wzorze, określająca liczbę atomów pierwiastka w jednej cząsteczce lub jednostce wzoru
Uzgadnianie (bilansowanie) :: dobór współczynników tak, by liczba atomów każdego pierwiastka (i ładunek) była po obu stronach równa
Prawo zachowania masy :: łączna masa substratów równa się łącznej masie produktów
Stosunek masowy :: stosunek mas reagujących substancji wynikający z równania (współczynnik × masa cząsteczkowa)
Reagent ograniczający :: substrat zużywany całkowicie, decydujący o ilości produktu
Reagent w nadmiarze :: substrat, którego część pozostaje po reakcji
Katalizator :: substancja przyspieszająca reakcję, niezużywająca się w niej
Reakcja egzotermiczna :: reakcja oddająca energię do otoczenia
Reakcja endotermiczna :: reakcja pobierająca energię z otoczenia
Stechiometria :: dział chemii zajmujący się ilościowymi zależnościami w reakcjach
:::

## 20 | Ściąga {#sciaga}

::: karta core
- Substraty → produkty; **masa przed = masa po**.
- **Współczynniki tak, indeksy nie.** Współczynnik mnoży cały wzór (z nawiasem).
- W–L–W–K; przy spalaniu C → H → O; nieparzysty O → ułamek → · 2; skracaj do najmniejszych liczb całkowitych.
- Warunki nad strzałką; ↑ gaz, ↓ osad — tylko gdy to prawda; (s) (l) (g) (aq).
- Synteza · analiza · wymiana pojedyncza · wymiana podwójna; spalanie = z O₂ + dużo energii.
- **Bilans ≠ dowód, że reakcja zachodzi** (szereg aktywności, rozpuszczalność).
- Obliczenia: równanie → masy z równania (wsp. × Mr) → masy z zadania → proporcja → jednostka → kontrola sumą mas.
- Dwa substraty → sprawdź, czego zabraknie; produkt licz z reagenta ograniczającego; policz, co zostało.
- Mieszanina: w proporcji tylko substancja, która reaguje.
:::

::: checklista
- [ ] odróżniam współczynnik od indeksu i liczę atomy z nawiasem
- [ ] uzgadniam proste równania i spalanie węglowodorów oraz alkoholi
- [ ] zapisuję równanie z opisu słownego i cykl przemian
- [ ] rozpoznaję typ reakcji i efekt energetyczny
- [ ] obliczam stosunek masowy z równania
- [ ] liczę masę produktu i substratu (zadanie odwrotne)
- [ ] rozpoznaję reagent ograniczający i obliczam pozostałość
- [ ] sprawdzam wynik prawem zachowania masy
- [ ] (ambitne) przeliczam masę na mole i stosuję wydajność
:::

## 21 | Co dalej? {#dalej}

- Ćwicz bilansowanie w modelu z [§3](#bilansowanie), aż każde równanie zajmie ci mniej niż minutę — bez pośpiechu, ale do skutku.
- Doświadczenia i zapis „obserwacja → wniosek → równanie” — lekcja doświadczeń (LAB).
- Równania jonowe, szereg aktywności metali, sole — lekcje N02–N04 (etap rejonowy).
- Mol i stechiometria na molach — lekcja R04/R07 (etap wojewódzki, liceum).

## AUDYT W1 — wynik (2026-10-11, Perplexity) {#audyt}

> Źródło: `chemia/plany/audyty/W1_perplexity_C3_F17_2026-10-11.md` (3 tury + uzupełnienie). Paczka: `eksport/out/PERPLEXITY_C3_rownania_obliczenia.md` (F17 + stechiometria R04/R07–R09 + uwagi audytu 2026-10-09). Wprowadzone także uwagi W1 z 2026-10-09 dla F17 i R04–R09.

**Przyjęte (wszystkie po sprawdzeniu):** wykład od zera (LEGO, przepis), procedura bilansowania i W–L–W–K, przykłady Mg, Fe₂O₃, Al + HCl, CH₄, C₂H₆ (ułamek), C₂H₅OH, C₃H₇OH, C₃H₈; mini-wykłady (współczynnik a indeks, stany i warunki, energia, dlaczego najpierw bilans, stosunek masowy, reagent ograniczający); ciekawostki (Lavoisier, świeca, poduszka powietrzna, fotosynteza, kuchnia); zadania konkursowe 1–18 tury 3 (wybrane i scalone w §10, §12, §8–§9, §13); klinika 8 błędów (§11); mnemotechniki; karta samooceny (→ checklista); uniwersalny algorytm 9 kroków i tabela granic materiału (uzupełnienie); zastrzeżenie, że bilans nie przesądza, czy reakcja zachodzi; definicja współczynnika obejmująca jednostki wzoru; definicja spalania; warunki nie są substratami; stany skupienia tylko gdy potrzebne; warunki normalne 0°C i 1013,25 hPa; nazwa „tlenek węgla(IV)” (audyt 2026-10-09); zadania z audytu 2026-10-09 (Mg + HCl, NaOH + H₂SO₄, Fe(OH)₃, mol, masa molowa, ograniczający na molach, wydajność i wynik > 100%).

**Poprawione względem propozycji:**
- Wykład obliczeń w turze 2 wprowadzał mole w rdzeniu — przeniesione do ramki ambitnej; rdzeń liczy wyłącznie masami.
- Przykład z mieszaniną (10 g CaCO₃ + NaCl → 2,24 dm³ CO₂) dawał przypadek graniczny 100% CaCO₃ — zamieniony na dane z wynikiem 50% i liczony bez mola (2,2 g CO₂).
- Klucz „11,2 g Fe → Fe₂O₃” był sformułowany niejasno („0,2 części z 56 g”) — przepisany jako proporcja 112 g : 160 g.
- Ciekawostka o poduszce powietrznej („reagent ograniczający… nadmierne ciśnienie”) — przeredagowana z równaniem 2NaN₃ → 2Na + 3N₂ i zastrzeżeniem o nowszych mieszaninach.
- „Wypieranie” i „wymiana pojedyncza” ujednolicone jako jedna kategoria.
- Przykład z kanonu „4Fe + 3O₂ → 2Fe₂O₃ to też spalanie” — doprecyzowany: rdzewienie to powolne utlenianie, nie spalanie.
- Zadanie MgO + H₂O → Mg(OH)₂ — dopisana uwaga, że reakcja zachodzi słabo (szkolny przykład).

**Nieprzyjęte:**
- Podział na dwie osobne lekcje — lekcja zostaje jedna z częściami A i B (decyzja użytkownika: C3 jako jedna lekcja; nawigacja przez rdzeń i [§7](#obliczenia)).
- Warstwa akademicka „bilans algebraiczny, bilans elektronowy, reakcje odwracalne” — poza zakresem SP i konkursu etapów I–II; redoks w lekcji o reakcjach utleniania-redukcji.
- Pełne zadanie z równaniem pV = nRT — poziom liceum; zostało tylko jedno zdanie w ramce o objętości molowej.
- Duplikaty zadań (Al₂O₃, MgO z 12 g, cykl magnezu powtórzone w turach 1–3) — wpisane raz.
