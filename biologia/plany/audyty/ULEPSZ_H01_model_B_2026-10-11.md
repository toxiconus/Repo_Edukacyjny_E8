## Co widzę w paczce, a czego brakuje

Widzę **całą lekcję H01** — frontmatter, sekcje `## 0.1`–`## 20`, wszystkie karty, grafiki, test, fiszki, słownik, klinikę. Liczniki zgadzają się z nagłówkiem (23 nagłówki `##` licząc 0.1 i 0.2, 13 zadań exam, 10 pytań testowych, 18 fiszek, 14 haseł słownika, 2 grafiki z 2 opisami, 5 ciekawostek, 6 mini-wykładów, 1 doświadczenie, 11 błędów w klinice).

**Czego brakuje w paczce:**
- **dokumentu wymagań LKO** — jest tylko wzmianka „Zakres LKO biologia 2025/26, etap II (rejonowy): pkt IV Homeostaza”; nie mogę zweryfikować, czy któryś podtemat nie jest nadmiarowy lub brakujący. Warstwę konkursową oznaczam jako „do zweryfikowania z wymaganiami”.
- **arkuszy CKE** z zadaniami o homeostazie — opieram się na znanych typach zadań z informatora E8 i doświadczeniu egzaminatorskim.
- **rozwinięcia ciśnienia krwi i pH** — są wymienione w minimum (pkt 1) i w tabeli zaburzeń, ale nie mają własnej sekcji z wyjaśnieniem. To główna luka zakresowa.

---

## Raport PRZED / PO

| Miara | Przed | Po | Zmiana |
|---|---|---|---|
| rozmiar tekstu lekcji (KB, 1 KB ≈ 1000 znaków) | 44,1 | ≈ 52,5 | +8,4 |
| liczba sekcji `##` | 23 | 24 | +1 |
| zadania (`karta exam`) | 13 | 16 | +3 |
| pytania testowe (`?`) | 10 | 13 | +3 |
| fiszki / hasła słownika | 18 / 14 | 21 / 17 | +3 / +3 |
| grafiki (`@viz`, `@model`, `@zlewka`) z opisem `@opis` | 2 / 2 | 2 / 2 | 0 (opisy rozbudowane, bez nowych kodów) |
| ciekawostki (`karta extra`) / mini-wykłady („W skrócie”) | 5 / 6 | 6 / 8 | +1 / +2 |
| doświadczenia (`dosw`) | 1 | 2 | +1 |
| błędy w klinice | 11 | 13 | +2 |

### Lista sekcji przed → po (tylko zmienione)

- **§3** — dopisany mini-wykład „W skrócie — jak rozpoznać rodzaj sprzężenia” (nowa karta `understand` po `warning`).
- **§8** — dopisany mini-wykład „W skrócie — dlaczego homeostaza się załamuje” (nowa karta `understand` na końcu sekcji).
- **§9** — dopisane **Doświadczenie 2** (wysiłek a częstość oddechów).
- **§10** — dopisane **Zadania 13–15** (ciśnienie krwi, analiza danych, pH i nerki).
- **§11** — dopisane **2 błędy** (nadciśnienie, oddech a tlen).
- **§13** — dopisana **ciekawostka** „Homeostaza w kosmosie”.
- **§15** — dopisane **3 pytania testowe** (baroreceptory, oddech po wysiłku, nerki a pH).
- **§16** — dopisane **3 fiszki** (ciśnienie, pH, baroreceptory).
- **§17** — dopisane **3 hasła słownika** (baroreceptory, ciśnienie krwi, pH krwi).
- **§21 (nowa)** — „Ciśnienie krwi i pH — dwa pozostałe parametry” (z mini-wykładem, tabelą, wzorem, ostrzeżeniem).
- **§19 (Ściąga)** — dopisany punkt o ciśnieniu i pH.
- **§20 (Co dalej?)** — zaktualizowane odsyłacze (dodane U04 i B2e o nerkach).
- **@opis** w §3 i §5 — rozbudowane o dokładniejszy opis elementów i wniosku (bez zmiany kodu `@viz`).

### Poprawione

Nie znalazłem błędów merytorycznych w wersji „przed”. Wszystkie definicje, wartości liczbowe (36–37,5°C; 70–99 mg/dl; pH 7,35–7,45) i klucze są zgodne z podręcznikami i informatorami. Poprawki dotyczyły wyłącznie:
- **doprecyzowania** opisu grafiki w §3 (dodałem, co dokładnie pokazuje pętla przy sprzężeniu dodatnim — dotąd opis był niepełny przy „porodzie”),
- **uzupełnienia** opisu w §5 o informację, że dane na wykresie są przykładowe (było tylko w treści, nie w `@opis`),
- **dodania** odsyłacza do §21 w §8 i §19.

### Przeniesione / scalone

- Informacja o ciśnieniu krwi z tabeli w §8 została **przeniesiona i rozwinięta** w nowej §21 — w §8 pozostał skrót z odsyłaczem, żeby nie dublować treści.
- Informacja o pH z `::: adv` w §8 została **scalona** z nową §21 — w §8 pozostał tylko sygnał „patrz §21”, a pełne wyjaśnienie jest w nowej sekcji.

### Proponuję usunąć

- **Nic.** Wszystkie elementy zachowane. Jeśli autor uzna, że któraś ciekawostka (np. o wielbłądzie) jest zbyt odległa od podstawy, można ją przenieść do `::: adv` — ale nie usuwam.

### Propozycje grafik (bez nowych kodów `@viz`)

1. **„Baroreceptorowy odruch ciśnieniowy”** — schemat pętli: spadek ciśnienia → baroreceptory w tętnicach → rdzeń przedłużony → serce (szybsze, mocniejsze skurcze) + naczynia (zwężenie) → wzrost ciśnienia. Miejsce: §21. Wniosek: ciśnienie krwi też podlega ujemnemu sprzężeniu zwrotnemu.
2. **„pH krwi — dwie linie obrony”** — oś czasu: minuty (oddech) vs. godziny/dni (nerki). Miejsce: §21. Wniosek: organizm najpierw używa szybkiego mechanizmu, potem wolnego.
3. **„Bilans wodny — sankey”** — strzałki przyjęcia (napoje, pokarm, przemiany) i utraty (mocz, pot, oddech, kał) z liczbami orientacyjnymi. Miejsce: §7. Wniosek: woda z przemian to ok. 300 ml/dzień, a utrata z oddechem ok. 400 ml/dzień — trudno zgadnąć bez schematu.

---

## LEKCJA W NOWEJ WERSJI (gotowa do zapisania jako plik)

```markdown
---
kod: H01
uid: BIO.07.H01.homeostaza
tytul: Homeostaza — jak organizm utrzymuje stałe warunki
opis: homeostaza jako równowaga dynamiczna · bodziec, receptor, ośrodek, efektor, odpowiedź · ujemne i dodatnie sprzężenie zwrotne · termoregulacja · regulacja glukozy: insulina i glukagon · cukrzyca, hiper- i hipoglikemia · gospodarka wodna, osmoregulacja, ADH · ciśnienie krwi i pH · zaburzenia homeostazy · wykresy i doświadczenia
kicker: H01 · BIOLOGIA · ORGANIZM CZŁOWIEKA · KONKURS ETAP REJONOWY (PKT IV)
lead: Na zewnątrz upał albo mróz, posiłek albo głodówka — a we krwi temperatura, glukoza i woda trzymają się wąskich granic. To homeostaza: ciągłe, niewidoczne poprawki.
lead: Jeden schemat wyjaśnia wszystkie przykłady: bodziec → receptor → ośrodek → efektor → odpowiedź, która przeciwdziała zmianie.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:KONKURS]][[extra:AMBITNE]]
uwaga: Zakres LKO biologia 2025/26, etap II (rejonowy): pkt IV Homeostaza. Łączy lekcje o układach: krążenia (U04), dokrewnym, nerwowym, wydalniczym i skórze. Wartości prawidłowe (temperatura, glukoza, ciśnienie, pH) są orientacyjne — zależą od metody pomiaru i laboratorium. Warstwa konkursowa (sekcje z [[exam:KONKURS]] i ::: adv) do zweryfikowania z wymaganiami LKO — w paczce nie ma dokumentu wymagań.
stopka: **BIOLOGIA H01 v1.1** · Homeostaza · 2026
stan: ULEPSZONA — Claude, 2026-10-11; do sprawdzenia
---
::: minimum | Muszę umieć — 12 punktów
1. **Homeostaza** — utrzymywanie względnie stałych warunków wewnętrznych (temperatura, glukoza, woda, sole, pH, ciśnienie, CO₂) mimo zmian w otoczeniu. To **równowaga dynamiczna** — stale poprawiana.
2. **Elementy regulacji:** bodziec (zmiana) → **receptor** (wykrywa) → **ośrodek** (porównuje z normą, decyduje) → **efektor** (wykonuje) → **odpowiedź**.
3. **Ujemne sprzężenie zwrotne** — odpowiedź **przeciwdziała** zmianie (podstawa homeostazy). **Dodatnie** — odpowiedź **nasila** zmianę, aż proces się zakończy (poród, krzepnięcie).
4. **Ośrodek termoregulacji:** **podwzgórze**. **Za ciepło:** rozszerzenie naczyń skóry, pot. **Za zimno:** zwężenie naczyń skóry, dreszcze, „gęsia skórka”, szybsza przemiana materii.
5. **Pot chłodzi**, bo parując zabiera ciepło ze skóry.
6. **Insulina** (trzustka) **obniża** glukozę: komórki ją pobierają, wątroba i mięśnie magazynują jako **glikogen**. **Glukagon** (trzustka) **podwyższa** glukozę: wątroba rozkłada glikogen. Działają **antagonistycznie**.
7. **Cukrzyca** — za mało insuliny (typ 1) albo słaba reakcja komórek na insulinę (typ 2) → **hiperglikemia**. **Hipoglikemia** — za mało glukozy (osłabienie, drżenie, poty, splątanie).
8. **Bilans wodny:** woda przyjęta (napoje, pokarm, woda z przemian) = woda utracona (mocz, pot, wydychane powietrze, kał).
9. **ADH** (hormon antydiuretyczny): wytwarzany w podwzgórzu, uwalniany z przysadki; **zwiększa zwrotne wchłanianie wody w nerkach** → mniej, bardziej zagęszczonego moczu. **Mało wody — dużo ADH; dużo wody — mało ADH.**
10. **Ciśnienie krwi** — siła nacisku krwi na ściany tętnic (mmHg). Regulują je **baroreceptory** w tętnicach, ośrodek w rdzeniu przedłużonym, serce i naczynia. **pH krwi** — ok. 7,35–7,45; regulacja oddechowa (szybka) i nerkowa (wolna).
11. Homeostazę wspólnie utrzymują **układ nerwowy i dokrewny** (sterowanie) oraz **skóra, nerki, płuca, wątroba, krążenie** (wykonanie).
12. **Zaburzenia homeostazy** — gorączka, udar cieplny, wychłodzenie, cukrzyca, odwodnienie, nadciśnienie; każda choroba to stan, w którym regulacja nie nadąża lub jest uszkodzona.
:::

::: warstwy
- e8 | <b>Podstawa:</b> definicja homeostazy, ujemne sprzężenie zwrotne, termoregulacja, insulina i glukagon, gospodarka wodna, cukrzyca, ciśnienie krwi i pH
- understand | <b>Rozumienie:</b> receptor–ośrodek–efektor w każdym przykładzie, dlaczego pot chłodzi, dlaczego w wilgotnym upale łatwiej się przegrzać, antagonizm hormonów, rola baroreceptorów
- contest | <b>Konkurs:</b> schematy regulacji do uzupełnienia, wykres glukozy po posiłku, ADH a mocz, analiza przypadków, bilans wody z pomiaru masy ciała, ciśnienie i pH krwi
- extra | <b>Ambitne:</b> dodatnie sprzężenie zwrotne, gorączka jako przestawienie „termostatu”, osmoregulacja, pH krwi, brunatna tkanka tłuszczowa, homeostaza w kosmosie
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
1. **[§0.2](#diagnoza)** — diagnoza.
2. **[§1](#wyklad)–[§3](#sprzezenie)** — wykład, elementy regulacji, sprzężenie zwrotne; grafikę przejdź krok po kroku.
3. **[§4](#temperatura)–[§7](#woda)** — trzy wielkie przykłady: temperatura, glukoza, woda.
4. **[§9](#badania)–[§10](#zadania)** — wykresy, doświadczenia i zadania; potem **[§11](#klinika)**.
5. **[§21](#cisnienie-ph)** — ciśnienie krwi i pH jako uzupełnienie obrazu.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

::: karta understand
- **Każdy przykład rozpisz na pięć kratek:** bodziec → receptor → ośrodek → efektor → odpowiedź. Jeśli umiesz to zrobić dla temperatury, glukozy i wody, masz cały dział.
- **Pytaj „w którą stronę?”.** Glukoza ↑ → który hormon? Woda ↓ → więcej czy mniej ADH? Większość pułapek to pomylony kierunek.
- **Łącz z innymi lekcjami:** skóra (termoregulacja), trzustka i wątroba (glukoza), nerki (woda, pH, ciśnienie), krążenie (transport ciepła i hormonów — U04).
:::

## 0.2 | Diagnoza {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Czy homeostaza oznacza, że parametry organizmu w ogóle się nie zmieniają?
2. Gdzie znajduje się ośrodek termoregulacji?
3. Który hormon obniża stężenie glukozy we krwi?
4. Dlaczego pocenie się chłodzi ciało?
5. Jak zmieni się ilość moczu po wypiciu dużej ilości wody?
6. Co to znaczy, że insulina i glukagon działają antagonistycznie?
7. Co wykrywają baroreceptory i gdzie się znajdują?

::: odp | Pokaż klucz
1. Nie — zmieniają się stale, ale organizm koryguje odchylenia (równowaga dynamiczna). · 2. W podwzgórzu. · 3. Insulina. · 4. Parujący pot zabiera ciepło ze skóry. · 5. Wzrośnie (mniej ADH, nerki zwracają mniej wody). · 6. Mają przeciwne działanie: insulina obniża, glukagon podwyższa glukozę. · 7. Rozciągnięcie ścian tętnic (ciśnienie krwi); w ścianach tętnic szyjnych i łuku aorty.

**Interpretacja:** 0–3 — zacznij od [§1](#wyklad); 4–5 — przejdź rdzeń, uważaj na kierunki zmian; 6–7 — przejdź do [§9](#badania) i [§10](#zadania).
:::
:::

**Pytanie przewodnie:** jak organizm wykrywa odchylenie od normy i przywraca prawidłowy stan?

## 1 | Wykład — organizm jak dom z termostatem {#wyklad}

Pomyśl o domu z ogrzewaniem sterowanym termostatem. Ustawiasz 21°C. Gdy w pokoju robi się chłodniej, czujnik to wykrywa, termostat porównuje odczyt z ustawioną wartością i włącza piec. Robi się cieplej — termostat wyłącza piec. Temperatura w domu nie jest idealnie stała: waha się trochę wokół 21°C, ale nigdy nie ucieka daleko. Twój organizm robi to samo — tylko jednocześnie z temperaturą, poziomem cukru we krwi, ilością wody, stężeniem soli, kwasowością krwi i ciśnieniem. Ta zdolność to **homeostaza** (z greckiego: „podobny stan”).

Dlaczego to takie ważne? Bo życie komórki zależy od reakcji chemicznych prowadzonych przez **enzymy** — białka, które dobrze pracują tylko w określonej temperaturze, przy określonym pH i w odpowiednim środowisku wodnym. Gdyby temperatura ciała skoczyła o kilka stopni albo krew zrobiła się za kwaśna, enzymy przestałyby działać, a komórki — zaczęłyby obumierać. Mózg, który zużywa dużo glukozy, już po kilku minutach jej braku przestaje sprawnie pracować. Homeostaza to więc nie „ciekawostka z biologii”, tylko warunek przeżycia.

Każda regulacja ma te same elementy co termostat. **Bodziec** to zmiana — np. wzrost temperatury ciała w czasie biegu. **Receptor** (czujnik) ją wykrywa — tu są to termoreceptory w skórze i komórki podwzgórza czujące temperaturę krwi. **Ośrodek** (regulator) porównuje odczyt z wartością prawidłową i „decyduje” — w termoregulacji to **podwzgórze**, część mózgu. **Efektor** wykonuje polecenie — naczynia krwionośne skóry i gruczoły potowe. **Odpowiedź** — oddawanie ciepła — sprowadza temperaturę z powrotem do normy. I tu najważniejsze: odpowiedź **przeciwdziała** bodźcowi. Temperatura rosła, odpowiedź ją obniża. To **ujemne sprzężenie zwrotne** — „ujemne”, bo działa przeciwnie do zmiany.

Polecenia z ośrodka mogą biec dwiema drogami. **Nerwową** — impulsy nerwowe są bardzo szybkie (np. rozszerzenie naczyń skóry, dreszcze). **Hormonalną** — hormony płyną z krwią, działają wolniej, ale dłużej i na wiele narządów naraz (np. insulina, ADH). W większości regulacji oba układy współpracują, a podwzgórze jest miejscem, w którym się spotykają.

W tej lekcji przejdziemy trzy wielkie przykłady: **temperaturę**, **glukozę** i **wodę** — a na końcu dwa ciche parametry: **ciśnienie krwi** i **pH**. Gdy zobaczysz, że każdy z nich da się rozpisać na te same pięć kratek, homeostaza przestanie być listą faktów do wkucia — stanie się jednym, logicznym schematem.

::: historia | Od „środowiska wewnętrznego” do homeostazy
W XIX wieku francuski fizjolog Claude Bernard zauważył, że komórki naszego ciała nie żyją w świecie zewnętrznym, tylko w „środowisku wewnętrznym” — płynach ustrojowych — które organizm utrzymuje w stałym stanie. Nazwał to warunkiem „wolnego, niezależnego życia”. W XX wieku amerykański fizjolog Walter Cannon opisał mechanizmy tej stałości i nadał im nazwę **homeostaza**.
:::

## 2 | Elementy regulacji [[basic:E8]] {#elementy}

| Element | Rola | Przykład (przegrzanie) |
|---|---|---|
| **bodziec** | zmiana parametru | temperatura ciała rośnie podczas biegu |
| **receptor** | wykrywa zmianę | termoreceptory w skórze, czujniki temperatury krwi w podwzgórzu |
| **ośrodek** | porównuje z normą, wysyła polecenie | ośrodek termoregulacji w **podwzgórzu** |
| **efektor** | wykonuje polecenie | naczynia krwionośne skóry, gruczoły potowe |
| **odpowiedź** | zmienia parametr | więcej ciepła oddanego, pot paruje → temperatura spada |

::: karta understand | W skrócie — receptor czy efektor?
**Receptor** to „oko” układu — tylko mierzy. **Efektor** to „ręce” — wykonuje zmianę: mięsień albo gruczoł (np. gruczoł potowy, trzustka wydzielająca hormon, mięśnie przywłosowe). Ośrodek leży zwykle w mózgu (podwzgórze, rdzeń przedłużony), ale w regulacji glukozy rolę czujnika i ośrodka pełnią same **komórki trzustki** — to one wyczuwają stężenie glukozy i decydują, ile hormonu wydzielić. W kluczu odpowiedzi do zadań o mechanizmie zwykle trzeba wskazać wszystkie pięć elementów.
:::

## 3 | Sprzężenie zwrotne [[basic:E8]] {#sprzezenie}

::: regula
**Ujemne sprzężenie zwrotne:** odpowiedź **przeciwdziała** zmianie i przywraca normę (temperatura, glukoza, woda, ciśnienie, pH). **Dodatnie sprzężenie zwrotne:** odpowiedź **nasila** zmianę, aż proces się zakończy — nie służy utrzymaniu stałej wartości.
:::

@viz sprzezenie-zwrotne | Pętla sprzężenia zwrotnego | wybierz sytuację i przejdź pętlę przyciskiem „krok”
@opis U góry przyciski siedmiu sytuacji: temperatura ↑, temperatura ↓, glukoza ↑, glukoza ↓, wody za mało, wody za dużo i poród (dodatnie). Pod nimi pięć zaokrąglonych prostokątów połączonych w pętlę: 1. bodziec, 2. receptor, 3. ośrodek, 4. efektor, 5. odpowiedź; ostatnia, przerywana strzałka wraca do bodźca — zielona przy sprzężeniu ujemnym, czerwona przy dodatnim — z napisem „ujemne: odpowiedź przeciwdziała zmianie” albo „dodatnie: odpowiedź nasila zmianę”. Pod pętlą poziomy pasek z kreską „norma” i kropką oznaczającą parametr (np. temperaturę ciała): przy sprzężeniu ujemnym kropka po kolejnych krokach wraca do normy, przy dodatnim — oddala się coraz bardziej. Przycisk „krok” podświetla kolejne elementy i pokazuje opis: konkretny receptor, ośrodek, efektor i odpowiedź dla wybranej sytuacji. Dla porodu: bodziec — nacisk główki na szyjkę macicy; receptor — receptory rozciągnięcia w szyjce; ośrodek — podwzgórze; efektor — mięsień macicy; odpowiedź — silniejsze skurcze, które zwiększają nacisk (dodatnie). Wniosek: wszystkie regulacje homeostazy mają ten sam schemat pięciu elementów, a w ujemnym sprzężeniu zwrotnym odpowiedź cofa zmianę, która ją wywołała; w dodatnim — wzmacnia ją aż do zakończenia procesu.

**Przykłady dodatniego sprzężenia:** **poród** — nacisk główki dziecka na szyjkę macicy → oksytocyna → silniejsze skurcze → większy nacisk → jeszcze więcej oksytocyny… aż do narodzin; **krzepnięcie krwi** — pierwsze aktywne czynniki krzepnięcia uruchamiają kolejne, aż powstanie skrzep.

::: karta warning | Pułapka — nie każda reakcja to sprzężenie zwrotne
Żeby mówić o sprzężeniu zwrotnym, muszą być trzy rzeczy: **początkowa zmiana**, **reakcja organizmu** i **wpływ tej reakcji z powrotem na początkową zmianę**. Kichnięcie po wdechu kurzu to odruch, a nie sprzężenie zwrotne utrzymujące jakiś parametr. Rozpoznając rodzaj sprzężenia, patrz na **kierunek**: odpowiedź przeciwna do zmiany — ujemne; zgodna i wzmacniająca — dodatnie.
:::

::: karta understand | W skrócie — jak rozpoznać rodzaj sprzężenia w 3 krokach
1. **Nazwij zmianę:** co się zmieniło? (temperatura ↑, glukoza ↓, nacisk na szyjkę ↑)
2. **Nazwij odpowiedź:** co zrobił organizm? (pot, glukagon, oksytocyna)
3. **Porównaj kierunki:** odpowiedź jest **przeciwna** do zmiany → ujemne; **zgodna** i wzmacnia → dodatnie. Przykład: temperatura ↑ → pot → chłodzenie = ujemne. Nacisk na szyjkę ↑ → oksytocyna → silniejsze skurcze → nacisk ↑ = dodatnie. Jeśli odpowiedź nie wpływa na zmianę, to nie sprzężenie zwrotne, tylko odruch (kichnięcie).
:::

## 4 | Termoregulacja [[basic:E8]] {#temperatura}

Temperatura wnętrza ciała człowieka utrzymuje się w wąskim zakresie, ok. 36–37,5°C (zależnie od miejsca i pory pomiaru; dane orientacyjne). Człowiek jest **stałocieplny** — ciepło wytwarza sam, głównie w przemianach materii mięśni i wątroby.

| | Gdy jest **za ciepło** | Gdy jest **za zimno** |
|---|---|---|
| naczynia skóry | **rozszerzają się** — więcej krwi przy powierzchni, skóra czerwienieje | **zwężają się** — krew zostaje w głębi ciała, skóra blednie |
| pot | więcej potu — parowanie zabiera ciepło | mniej potu |
| mięśnie | mniejsza aktywność | **dreszcze** — mimowolne skurcze wytwarzają ciepło |
| włosy | — | **„gęsia skórka”** — mięśnie przywłosowe stroszą włosy |
| przemiana materii | nie przyspiesza | **przyspiesza** (więcej ciepła) |
| zachowanie | cień, lżejsze ubranie, picie | ruch, ciepłe ubranie, schronienie |

::: karta understand | W skrócie — dlaczego pot chłodzi
Żeby woda zamieniła się w parę, potrzebna jest energia. Kropla potu na skórze pobiera ją w postaci ciepła — właśnie ze skóry i z krwi płynącej pod nią. Parujący pot „wynosi” ciepło z ciała. Dlatego chłodzi pot, który **paruje**, a nie ten, który spływa. W **wilgotnym** upale powietrze jest już pełne pary wodnej, pot paruje wolno i słabo odbiera ciepło — łatwiej o przegrzanie, mimo że się pocimy.
:::

**Drogi wymiany ciepła z otoczeniem:** **promieniowanie** (ciało oddaje ciepło jak kaloryfer), **przewodzenie** (dotyk z zimnym przedmiotem, zimna woda), **konwekcja** (opływające ciało powietrze lub woda — wiatr chłodzi), **parowanie** (pot, wydychane powietrze). Skóra działa jednocześnie jak **czujnik** i jak **chłodnica**.

::: adv | Gorączka — termostat przestawiony wyżej | poziom ambitny
Przy zakażeniu niektóre substancje wydzielane przez komórki odpornościowe docierają do podwzgórza i **przestawiają** wartość nastawioną „termostatu” na wyższą, np. 38,5°C. Organizm uważa wtedy normalną temperaturę za zbyt niską: zwęża naczynia skóry, pojawiają się dreszcze i uczucie zimna — temperatura rośnie. Gdy przyczyna mija, nastawa wraca do normy: teraz ciało „uważa”, że jest za ciepło, pocimy się i temperatura spada. Gorączka utrudnia namnażanie części drobnoustrojów i przyspiesza odpowiedź odpornościową — ale bardzo wysoka gorączka jest niebezpieczna i wymaga pomocy.
:::

::: karta warning | Przegrzanie i wychłodzenie
**Udar cieplny** — gdy w upale i przy wysiłku ciało nie nadąża z oddawaniem ciepła (zwłaszcza przy wilgotnym powietrzu i odwodnieniu): bóle głowy, osłabienie, zaburzenia świadomości. **Wychłodzenie (hipotermia)** — gdy organizm traci więcej ciepła, niż wytwarza (zimna woda, mokre ubranie, wiatr). W obu przypadkach regulacja przestaje nadążać — to granice homeostazy. Profilaktyka: picie wody, cień i nakrycie głowy w upale; suche, warstwowe ubranie w zimnie.
:::

## 5 | Regulacja stężenia glukozy [[basic:E8]] {#glukoza}

Glukoza to główne „paliwo” komórek; najbardziej wrażliwy na jej brak jest **mózg**. Stężenie glukozy we krwi na czczo u zdrowej osoby mieści się mniej więcej w przedziale 70–99 mg/dl (orientacyjnie; zakres zależy od laboratorium). Regulują je dwa hormony **trzustki**, wytwarzane w **wyspach trzustkowych** (wyspach Langerhansa).

| Sytuacja | Hormon | Skąd | Działanie | Skutek |
|---|---|---|---|---|
| po posiłku — glukozy **za dużo** | **insulina** | komórki β wysp trzustkowych | komórki ciała pobierają glukozę; wątroba i mięśnie zamieniają ją w **glikogen**; nadmiar może zmienić się w tłuszcz | stężenie glukozy **spada** |
| głód, długi wysiłek — glukozy **za mało** | **glukagon** | komórki α wysp trzustkowych | wątroba **rozkłada glikogen** i uwalnia glukozę do krwi | stężenie glukozy **rośnie** |

::: karta understand | W skrócie — glikogen jako spiżarnia
Glukoza z posiłku przychodzi „falą”, a mózg potrzebuje jej równo przez całą dobę. Dlatego organizm robi zapasy: nadmiar glukozy zamienia w **glikogen** — cząsteczkę złożoną z tysięcy połączonych cząsteczek glukozy, magazynowaną w wątrobie i mięśniach. Insulina to „zamknij w spiżarni”, glukagon — „wyjmij ze spiżarni”. Glikogen mięśni zużywają głównie same mięśnie; dla całego organizmu glukozę z zapasu oddaje do krwi **wątroba**. Gdy glikogen się kończy (np. po długim głodzie), organizm sięga po tłuszcze.
:::

@viz glukoza-wykres | Stężenie glukozy po posiłku | kliknij punkt na wykresie, przełączaj krzywe
@opis Wykres liniowy: oś pozioma — czas po posiłku od 0 do 180 minut, oś pionowa — stężenie glukozy we krwi w mg/dl (od 40 do 260). Jasnozielony pas oznacza orientacyjny zakres prawidłowy na czczo (70–99). Zielona krzywa osoby zdrowej: 85 na czczo, szczyt ok. 135 po 30 minutach, potem spadek i powrót do ok. 86–90 po 2–3 godzinach. Czerwona krzywa osoby z cukrzycą: już na czczo ok. 130, szczyt ok. 240 dopiero po godzinie, potem powolny spadek, po 3 godzinach nadal ok. 165. Przyciski włączają i wyłączają każdą krzywą; kliknięcie punktu pokazuje wartość i wyjaśnienie. **Dane są przykładowe** — mają pokazać kształt zależności, nie służą do diagnostyki. Wniosek: u osoby zdrowej insulina szybko sprowadza glukozę do normy (ujemne sprzężenie zwrotne działa), u osoby z cukrzycą glukoza rośnie wyżej, później osiąga szczyt i długo nie wraca do normy — regulacja jest zaburzona.

## 6 | Cukrzyca, hiperglikemia i hipoglikemia [[basic:E8]] {#cukrzyca}

**Cukrzyca** to choroba, w której organizm nie utrzymuje prawidłowego stężenia glukozy — jest go stale za dużo (**hiperglikemia**).

| | Cukrzyca typu 1 | Cukrzyca typu 2 |
|---|---|---|
| przyczyna | układ odpornościowy niszczy komórki β trzustki → **brak insuliny** (choroba autoimmunizacyjna) | komórki słabo reagują na insulinę (**insulinooporność**), z czasem trzustka nie nadąża |
| kiedy | często u dzieci i młodzieży | częściej u dorosłych; sprzyja otyłość, brak ruchu, nadmiar cukrów prostych |
| leczenie | **insulina** (zastrzyki, pompa) | ruch, dieta, leki; czasem insulina |

**Objawy hiperglikemii:** wzmożone pragnienie, częste oddawanie dużej ilości moczu, zmęczenie, chudnięcie (typ 1), gorsze gojenie ran, zaburzenia widzenia. **Hipoglikemia** (za mało glukozy, np. po za dużej dawce insuliny lub wysiłku bez jedzenia): osłabienie, drżenie, zimne poty, głód, zaburzenia koncentracji, splątanie, w ciężkich przypadkach utrata przytomności.

::: karta warning | Pierwsza pomoc przy hipoglikemii
Osobie przytomnej z objawami hipoglikemii (zwłaszcza choremu na cukrzycę) podaje się **coś słodkiego** — kostki cukru, słodki napój, sok. Osobie nieprzytomnej **niczego nie podaje się do ust** — układamy ją w pozycji bezpiecznej i dzwonimy pod **112**.
:::

::: karta understand | W skrócie — dlaczego przy cukrzycy chce się pić
Gdy glukozy we krwi jest bardzo dużo, nerki nie nadążają z jej odzyskiwaniem i glukoza pojawia się w moczu. Glukoza „ciągnie” za sobą wodę, więc moczu jest dużo, organizm traci wodę — i włącza się pragnienie (osmoregulacja z [§7](#woda)). Jedna zaburzona regulacja pociąga więc za sobą drugą — to dobry przykład, że układy homeostazy są ze sobą powiązane.
:::

## 7 | Gospodarka wodna i ADH [[basic:E8]] {#woda}

Woda stanowi ponad połowę masy ciała dorosłego. Jest potrzebna do transportu substancji, przebiegu reakcji chemicznych, termoregulacji (pot) i utrzymania objętości krwi.

::: regula
**Bilans wodny:** woda przyjęta **−** woda utracona **=** zmiana ilości wody w organizmie. **Przyjmujemy:** napoje, pokarmy, wodę powstającą w przemianach (oddychanie komórkowe). **Tracimy:** mocz, pot, wydychane powietrze (para wodna), kał.
:::

**Osmoregulacja** — utrzymywanie odpowiedniego stężenia substancji (głównie soli) w płynach ustrojowych.

| | **Wody za mało** (upał, wysiłek, brak picia) | **Wody za dużo** (wypito dużo płynów) |
|---|---|---|
| osocze | bardziej stężone | bardziej rozcieńczone |
| receptory | **osmoreceptory** w podwzgórzu wykrywają wzrost stężenia | osmoreceptory wykrywają spadek stężenia |
| pragnienie | rośnie | maleje |
| ADH | **więcej** | **mniej** |
| nerki | zwracają **więcej** wody do krwi | zwracają **mniej** wody |
| mocz | **mało**, ciemny, zagęszczony | **dużo**, jasny, rozcieńczony |

**ADH — hormon antydiuretyczny** (wazopresyna): wytwarzają go komórki **podwzgórza**, a uwalnia **tylny płat przysadki**. Działa na **nerki**: zwiększa zwrotne wchłanianie wody z powstającego moczu do krwi. Nazwa mówi wszystko: *diureza* to wydalanie moczu, *anty-* — przeciw; ADH **zmniejsza ilość moczu**.

::: karta understand | W skrócie — kolor moczu jako wskaźnik
Jasnosłomkowy mocz zwykle oznacza, że organizm ma wystarczająco wody (mało ADH), a ciemny, intensywnie żółty — że oszczędza wodę (dużo ADH). Barwnik się nie zmienia, zmienia się ilość wody, w której jest rozpuszczony. Na kolor wpływają też niektóre pokarmy i leki, więc to tylko orientacyjny sygnał.
:::

## 8 | Zaburzenia homeostazy i współpraca układów {#zaburzenia}

| Zaburzenie | Co się dzieje |
|---|---|
| gorączka | podwzgórze przestawia „termostat” wyżej (obrona przed zakażeniem) |
| udar cieplny / wychłodzenie | regulacja temperatury nie nadąża za warunkami |
| cukrzyca | brak insuliny lub słaba reakcja komórek → hiperglikemia |
| odwodnienie | strata wody większa niż przyjęcie; krew gęstnieje, spada objętość krwi |
| przewodnienie | bardzo duża ilość wody naraz → zbyt rozcieńczone płyny ustrojowe (rzadkie, groźne) |
| nadciśnienie / niedociśnienie | zaburzona regulacja ciśnienia krwi (patrz [§21](#cisnienie-ph)) |
| kwasica / zasadowica | pH krwi poza zakresem 7,35–7,45 (patrz [§21](#cisnienie-ph)) |

| Układ / narząd | Udział w homeostazie |
|---|---|
| układ nerwowy (podwzgórze, rdzeń przedłużony) | czujniki, ośrodki temperatury, pragnienia, ciśnienia i pH; szybkie polecenia |
| układ dokrewny | hormony: insulina, glukagon, ADH, adrenalina, aldosteron — polecenia długotrwałe |
| skóra | czujnik temperatury, pocenie, naczynia skóry |
| nerki | ilość wody i soli, usuwanie zbędnych produktów, pH, ciśnienie (objętość krwi) |
| płuca | usuwanie CO₂ — wpływ na pH krwi |
| wątroba | magazyn glikogenu, wytwarzanie ciepła |
| krążenie | transport ciepła, hormonów, glukozy i wody (U04) |

::: adv | pH krwi — kolejny parametr pod kontrolą | poziom ambitny
Krew ma odczyn lekko zasadowy, pH ok. 7,35–7,45 (dane orientacyjne). Podczas wysiłku mięśnie wytwarzają więcej CO₂, który w krwi tworzy kwas węglowy i obniża pH. Receptory to wykrywają, a ośrodek oddechowy przyspiesza i pogłębia oddech — więcej CO₂ jest usuwane przez płuca i pH wraca do normy. Długofalowo pH regulują też nerki. To kolejny przykład ujemnego sprzężenia zwrotnego — i dowód, że „zadyszka” po biegu też służy homeostazie. **Pełne wyjaśnienie — [§21](#cisnienie-ph).**
:::

::: karta understand | W skrócie — dlaczego homeostaza się załamuje
Homeostaza działa, dopóki bodziec nie przekracza możliwości efektorów. Załamuje się na trzy sposoby: **1) bodziec za silny** (upał + wysiłek + brak wody → udar cieplny); **2) efektor uszkodzony** (zniszczone komórki β trzustki → cukrzyca typu 1); **3) receptor lub ośrodek zawodzi** (choroby mózgu, zatrucia). W każdym przypadku parametr wymyka się spod kontroli — i to jest właśnie choroba. Dlatego leczenie często polega na wsparciu brakującego elementu (insulina z zewnątrz, płyny, chłodzenie).
:::

## 9 | Wykresy i doświadczenia [[exam:KONKURS]] {#badania}

::: karta core | Przykład — glukoza po posiłku (dane przykładowe)
| Czas po posiłku [min] | 0 | 30 | 60 | 120 |
|---|---|---|---|---|
| Glukoza [mg/dl] | 85 | 135 | 112 | 90 |

Najwyższe stężenie — po 30 minutach (glukoza wchłonięta z jelita). Spadek po 30 minutach — działa **insulina**: komórki pobierają glukozę, wątroba magazynuje glikogen. Po 2 godzinach stężenie wraca blisko wartości wyjściowej — ujemne sprzężenie zwrotne działa prawidłowo.
:::

::: dosw | Doświadczenie 1 — temperatura otoczenia a utrata wody
Problem: Czy temperatura otoczenia wpływa na ilość wody traconej przez organizm podczas wysiłku?
Hipoteza: W wyższej temperaturze organizm traci więcej wody (więcej potu).
Sprzęt: waga łazienkowa (z dokładnością do 0,1 kg), stoper, butelka wody z podziałką, termometr.
Przebieg: Ta sama osoba wykonuje taki sam wysiłek (np. 30 minut szybkiego marszu) w dwa dni: raz w chłodnym, raz w ciepłym otoczeniu. Przed i po wysiłku waży się w tym samym ubraniu; zapisuje ilość wypitej wody i to, czy oddawała mocz. Próba kontrolna — wysiłek w chłodnym otoczeniu.
Obserwacja: Po wysiłku w cieple ubytek masy ciała (z uwzględnieniem wypitej wody) jest większy niż po wysiłku w chłodzie; więcej się pociła.
Wniosek: Wyższa temperatura otoczenia zwiększa utratę wody, głównie z potem, który służy termoregulacji.
BHP: pić wodę, nie wykonywać wysiłku w upale w południe; przerwać przy zawrotach głowy.
:::

::: dosw | Doświadczenie 2 — wysiłek a częstość oddechów
Problem: Czy wysiłek fizyczny wpływa na częstość oddechów?
Hipoteza: Po wysiłku częstość oddechów wzrośnie, a po kilku minutach wróci do wartości wyjściowej.
Sprzęt: stoper, kartka i długopis.
Przebieg: Zmierz częstość oddechów w spoczynku (licz oddechy przez 30 s, pomnóż ×2). Wykonaj 30 przysiadów. Natychmiast zmierz częstość oddechów, potem po 1, 3 i 5 minutach. Zapisz wyniki w tabeli. Próba kontrolna — pomiar w spoczynku przed wysiłkiem.
Obserwacja: Po wysiłku oddech jest szybszy i głębszy; z czasem wraca do wartości wyjściowej.
Wniosek: Wysiłek zwiększa wytwarzanie CO₂, który obniża pH krwi; ośrodek oddechowy w rdzeniu przedłużonym przyspiesza oddech, aby usunąć nadmiar CO₂ — to ujemne sprzężenie zwrotne.
BHP: Przerwij przy zawrotach głowy lub duszności. Nie wykonuj przy chorobach serca lub płuc bez zgody lekarza.
:::

::: karta understand | W skrócie — co pokazuje waga po wysiłku
W krótkim doświadczeniu ubytek masy ciała to prawie wyłącznie **utracona woda**, a nie spalony tłuszcz. Przykład: osoba ważyła 60,0 kg przed wysiłkiem i 59,4 kg po nim, w trakcie wypiła 0,3 l wody i nie oddała moczu. Utrata wody z potem i oddechem ≈ 0,6 kg + 0,3 kg = **0,9 kg**, czyli ok. 0,9 l. To przybliżenie — zakłada, że inne zmiany masy są pomijalne.
:::

## 10 | Zadania konkursowe [[exam:KONKURS]] {#zadania}

::: karta exam | Zadanie 1 (2 pkt) — kolejność w upale
Ułóż w kolejności: A. rozszerzenie naczyń skóry; B. wzrost temperatury ciała; C. zwiększenie oddawania ciepła; D. pobudzenie ośrodka termoregulacji; E. wydzielanie potu.

::: odp | Pokaż rozwiązanie
B → D → A i E (jednocześnie) → C. 2 pkt za pełną kolejność, 1 pkt przy jednym błędzie.
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — wilgotny upał
Wyjaśnij, dlaczego w wilgotnym, upalnym powietrzu łatwiej się przegrzać, chociaż się pocimy.

::: odp | Pokaż rozwiązanie
W wilgotnym powietrzu pot paruje wolniej (1 pkt), więc odbiera ze skóry mniej ciepła i chłodzenie jest słabsze (1 pkt).
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — po posiłku
Po posiłku stężenie glukozy we krwi wzrosło. a) Który hormon zostanie wydzielony i przez który narząd? b) Co stanie się w wątrobie? c) Jaki będzie skutek?

::: odp | Pokaż rozwiązanie
a) Insulina, trzustka (1 pkt). b) Glukoza zostanie zmagazynowana jako glikogen (1 pkt). c) Stężenie glukozy we krwi spadnie do normy (1 pkt).
:::
:::

::: karta exam | Zadanie 4 (3 pkt) — długi wysiłek
Podczas długiego wysiłku stężenie glukozy spada. Który hormon działa wtedy silniej, jaki proces zachodzi w wątrobie i jak zmieni się stężenie glukozy?

::: odp | Pokaż rozwiązanie
Glukagon (1 pkt); rozkład glikogenu i uwalnianie glukozy do krwi (1 pkt); stężenie wzrośnie lub będzie utrzymywane bliżej normy (1 pkt).
:::
:::

::: karta exam | Zadanie 5 (4 pkt) — słońce i brak wody
Osoba długo przebywa na słońcu i nie pije. Jak zmienią się: a) stężenie substancji w osoczu; b) wydzielanie ADH; c) ilość moczu; d) jego wygląd?

::: odp | Pokaż klucz
a) wzrośnie; b) wzrośnie; c) zmniejszy się; d) mocz ciemniejszy, bardziej zagęszczony. Po 1 pkt.
:::
:::

::: karta exam | Zadanie 6 (2 pkt) — oceń zdanie
Uczeń napisał: „Po wypiciu dużej ilości wody organizm wydziela więcej ADH, żeby zatrzymać wodę.” Oceń i popraw.

::: odp | Pokaż rozwiązanie
Zdanie błędne (1 pkt). Po wypiciu dużej ilości wody wydzielanie ADH **maleje**, nerki zwracają mniej wody i powstaje dużo rozcieńczonego moczu (1 pkt).
:::
:::

::: karta exam | Zadanie 7 (2 pkt) — rodzaj sprzężenia
Wzrost temperatury ciała zwiększa wydzielanie potu, co prowadzi do obniżenia temperatury. Jakie to sprzężenie zwrotne? Uzasadnij.

::: odp | Pokaż rozwiązanie
Ujemne (1 pkt) — odpowiedź (pocenie) przeciwdziała początkowej zmianie, czyli wzrostowi temperatury (1 pkt).
:::
:::

::: karta exam | Zadanie 8 (2 pkt) — uzupełnij schemat
Spadek glukozy → ………… → rozkład glikogenu w wątrobie → ………… . Co powinno znaleźć się na początku schematu „insulina → magazynowanie glukozy → spadek glukozy”?

::: odp | Pokaż klucz
Glukagon; wzrost stężenia glukozy we krwi (1 pkt). Na początku — bodziec: wzrost stężenia glukozy we krwi, np. po posiłku (1 pkt).
:::
:::

::: karta exam | Zadanie 9 (3 pkt) — dwie osoby
Dwie osoby przez 3 godziny nie piły. A siedziała w chłodnym pomieszczeniu, B biegła w upale. Która prawdopodobnie: a) straciła więcej wody; b) miała większe wydzielanie ADH; c) wytworzyła bardziej zagęszczony mocz? Uzasadnij.

::: odp | Pokaż rozwiązanie
We wszystkich trzech — osoba B (po 1 pkt): w czasie wysiłku w upale traci dużo wody z potem i oddechem, więc osocze się zagęszcza, rośnie wydzielanie ADH, a nerki oszczędzają wodę.
:::
:::

::: karta exam | Zadanie 10 (3 pkt) — wykres u chorego
Na wykresie po posiłku u osoby zdrowej glukoza po 2 godzinach wraca do normy, a u osoby z cukrzycą typu 1 pozostaje wysoka. a) W którym przypadku sprzężenie zwrotne działa prawidłowo? b) Wyjaśnij przyczynę różnicy. c) Jak leczy się cukrzycę typu 1?

::: odp | Pokaż rozwiązanie
a) U osoby zdrowej (1 pkt). b) U chorego trzustka nie wytwarza insuliny, więc komórki nie pobierają glukozy i wątroba jej nie magazynuje (1 pkt). c) Podawaniem insuliny (1 pkt).
:::
:::

::: karta exam | Zadanie 11 (3 pkt) — pięć elementów
Dla reakcji na zimno podaj: bodziec, receptor, ośrodek, dwa efektory i odpowiedź.

::: odp | Pokaż rozwiązanie
Bodziec: spadek temperatury ciała; receptor: termoreceptory skóry (i podwzgórza); ośrodek: podwzgórze; efektory: naczynia skóry (zwężenie), mięśnie szkieletowe (dreszcze) lub mięśnie przywłosowe; odpowiedź: mniejsza utrata i większe wytwarzanie ciepła → temperatura wraca do normy. 3 pkt za komplet, 2 pkt przy jednym braku.
:::
:::

::: karta exam | Zadanie 12 (2 pkt) — sprzężenie dodatnie
Podaj przykład dodatniego sprzężenia zwrotnego i wyjaśnij, czym różni się od ujemnego.

::: odp | Pokaż rozwiązanie
Np. poród (oksytocyna → silniejsze skurcze → więcej oksytocyny) albo krzepnięcie krwi (1 pkt). Dodatnie nasila zmianę i doprowadza proces do końca, ujemne przeciwdziała zmianie i utrzymuje stałą wartość (1 pkt).
:::
:::

::: karta exam | Zadanie 13 (3 pkt) — ciśnienie krwi
Po szybkim wstaniu z łóżka osoba odczuwa chwilowe zawroty głowy. Wyjaśnij, jaki mechanizm homeostatyczny powinien zadziałać i jakie elementy w nim uczestniczą.

::: odp | Pokaż klucz
Baroreceptory w tętnicach szyjnych i łuku aorty wykrywają spadek ciśnienia (1 pkt); ośrodek naczynioruchowy w rdzeniu przedłużonym wysyła polecenia (1 pkt); serce bije szybciej i mocniej, naczynia się zwężają — ciśnienie wraca do normy (1 pkt). Zawroty są skutkiem chwilowego opóźnienia tej regulacji.
:::
:::

::: karta exam | Zadanie 14 (3 pkt) — analiza danych
| Czas po wysiłku [min] | 0 | 1 | 3 | 5 |
|---|---|---|---|---|
| Częstość oddechów [na min] | 12 | 28 | 20 | 14 |

a) W którym momencie częstość oddechów była największa? b) Wyjaśnij, dlaczego wzrosła. c) Dlaczego po 5 minutach wróciła blisko wartości wyjściowej?

::: odp | Pokaż klucz
a) Po 1 minucie (1 pkt). b) Wzrost CO₂ obniżył pH krwi, ośrodek oddechowy przyspieszył oddech, aby usunąć nadmiar CO₂ (1 pkt). c) CO₂ został usunięty, pH wróciło do normy, ujemne sprzężenie zwrotne wyłączyło przyspieszenie oddechu (1 pkt).
:::
:::

::: karta exam | Zadanie 15 (2 pkt) — pH i nerki
Wyjaśnij, dlaczego nerki są ważne dla utrzymania pH krwi.

::: odp | Pokaż klucz
Nerki wydalają jony wodorowe (H⁺) i zatrzymują jony wodorowęglanowe (HCO₃⁻) (1 pkt), dzięki czemu mogą korygować pH długoterminowo, gdy regulacja oddechowa nie wystarcza (1 pkt).
:::
:::

## 11 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Homeostaza to stałość bez zmian.” | Homeostaza to równowaga dynamiczna. | Parametry stale się wahają, a organizm je koryguje. |
| „Homeostaza to tylko stała temperatura.” | Także glukoza, woda, sole, pH, ciśnienie, CO₂. | Temperatura to jeden z wielu parametrów. |
| „Pocenie podnosi temperaturę.” | Parujący pot obniża temperaturę. | Parowanie zabiera ciepło ze skóry. |
| „Glukagon obniża glukozę.” | Glukagon podwyższa, insulina obniża. | Hormony antagonistyczne. |
| „Insulina wytwarza glukozę.” | Insulina obniża stężenie glukozy we krwi. | Pomaga komórkom ją pobrać i zmagazynować. |
| „Insulina jest wydzielana w czasie głodu.” | Głównie po posiłku, gdy glukoza rośnie; w głodzie działa glukagon. | Kierunek zmiany decyduje o hormonie. |
| „ADH zwiększa ilość moczu.” | ADH zmniejsza ilość moczu. | Zwiększa zwrotne wchłanianie wody w nerkach. |
| „Wszystkie sprzężenia zwrotne są ujemne.” | Istnieją też dodatnie (poród, krzepnięcie). | Ale homeostazę utrzymują ujemne. |
| „Receptor wykonuje reakcję.” | Receptor wykrywa, efektor wykonuje. | Mięsień lub gruczoł to efektor. |
| „Ubytek masy po wysiłku to spalony tłuszcz.” | W krótkim czasie to głównie utracona woda. | Tłuszcz zużywa się znacznie wolniej. |
| „Glikogen magazynuje się w trzustce.” | W wątrobie i mięśniach. | Trzustka wytwarza hormony. |
| „Nadciśnienie zawsze daje objawy.” | Nadciśnienie długo nie daje objawów. | Dlatego trzeba je mierzyć regularnie. |
| „Oddech przyspiesza, bo brakuje tlenu.” | Głównym bodźcem jest wzrost CO₂ i spadek pH. | Chemoreceptory reagują na CO₂ i pH, nie na tlen. |
:::

## 12 | Ćwiczenia {#cwiczenia}

::: karta basic | A1–A6
1. Wymień pięć parametrów regulowanych w organizmie.
2. Uzupełnij: ośrodek termoregulacji znajduje się w ……; insulinę i glukagon wytwarza ……; ADH uwalnia ……, a działa on na ……
3. Podaj dwie reakcje organizmu na przegrzanie i dwie na wychłodzenie.
4. Wymień cztery drogi utraty wody.
5. Co to jest glikogen i gdzie jest magazynowany?
6. Podaj dwa objawy hipoglikemii i dwa hiperglikemii.

::: odp | Pokaż klucz
1. Np. temperatura, glukoza, ilość wody, stężenie soli, pH, ciśnienie krwi, CO₂. · 2. podwzgórzu; trzustka; tylny płat przysadki; nerki. · 3. Przegrzanie: rozszerzenie naczyń skóry, pocenie; wychłodzenie: zwężenie naczyń skóry, dreszcze („gęsia skórka”, szybsza przemiana materii). · 4. Mocz, pot, wydychane powietrze, kał. · 5. Zapasowy wielocukier zbudowany z glukozy; wątroba i mięśnie. · 6. Hipo: drżenie, poty, osłabienie, splątanie; hiper: pragnienie, częste oddawanie moczu, zmęczenie.
:::
:::

::: karta exam | B1–B4 (konkursowe)
1. Wyjaśnij, dlaczego dreszcze pomagają w zimnie, a rozgrzewka przed treningiem podnosi temperaturę ciała.
2. Osoba ważyła 72,4 kg przed treningiem i 71,6 kg po nim, wypiła 0,5 l wody i nie oddała moczu. Oszacuj utratę wody.
3. Dlaczego u nieleczonej osoby z cukrzycą występuje silne pragnienie?
4. Po wysiłku oddech jest szybszy i głębszy. Wyjaśnij to w kategoriach homeostazy.

::: odp | Pokaż klucz
1. Praca mięśni wytwarza ciepło — dreszcze to mimowolne skurcze, rozgrzewka to skurcze zamierzone. · 2. 72,4 − 71,6 = 0,8 kg; + 0,5 kg wypitej wody ≈ **1,3 kg** (ok. 1,3 l). · 3. Nadmiar glukozy przechodzi do moczu i „ciągnie” za sobą wodę → duża utrata wody → wzrost stężenia osocza → pragnienie (osmoregulacja). · 4. Mięśnie wytworzyły więcej CO₂, który obniża pH krwi; ośrodek oddechowy przyspiesza oddech, więcej CO₂ zostaje usunięte — pH wraca do normy (ujemne sprzężenie zwrotne).
:::
:::

## 13 | Ciekawostki {#ciekawostki}

::: karta extra | Insulina — Nobel za uratowane życie
Do lat 20. XX wieku cukrzyca typu 1 oznaczała śmierć w ciągu kilku lat. W 1921 r. Frederick Banting i Charles Best w Toronto wyizolowali insulinę z trzustki psów, a w 1922 r. podali ją po raz pierwszy choremu chłopcu, który przeżył. Banting wraz z Johnem Macleodem dostał za to Nagrodę Nobla w 1923 r. Dziś insulinę wytwarzają genetycznie zmodyfikowane bakterie i drożdże.
:::

::: karta extra | Grzejnik dla niemowląt
Noworodki nie umieją jeszcze sprawnie drżeć z zimna. Mają za to **brunatną tkankę tłuszczową** — tłuszcz pełen mitochondriów, który zamiast ATP wytwarza bezpośrednio ciepło. U dorosłych jest jej niewiele, ale nie znika całkiem i włącza się m.in. w zimnie.
:::

::: karta extra | Pies nie poci się jak człowiek
Psy mają gruczoły potowe głównie na opuszkach łap, więc w upale chłodzą się inaczej — **ziajaniem**: szybki oddech z otwartym pyskiem odparowuje wodę z języka i dróg oddechowych. Słoń chłodzi się wielkimi uszami pełnymi naczyń krwionośnych, którymi wachluje. Zasada jest ta sama: parowanie albo duża powierzchnia oddająca ciepło.
:::

::: karta extra | Wielbłąd — mistrz gospodarki wodnej
Wielbłąd może długo obywać się bez picia: wytwarza bardzo zagęszczony mocz i suchy kał, a w ciągu dnia pozwala swojej temperaturze ciała podnieść się o kilka stopni (dane orientacyjne), zamiast tracić wodę na pocenie — nocą oddaje zgromadzone ciepło. Garb to nie zbiornik wody, tylko zapas tłuszczu.
:::

::: karta extra | Dlaczego zimą częściej chodzimy do toalety
W zimnie naczynia skóry się zwężają i więcej krwi zostaje w głębi ciała. Organizm odczytuje to jako nadmiar płynu w naczyniach centralnych i ogranicza ADH — nerki wytwarzają więcej moczu. Do tego zimą mniej się pocimy, więc nadmiar wody wychodzi głównie z moczem.
:::

::: karta extra | Homeostaza w kosmosie
W stanie nieważkości płyny ustrojowe przesuwają się ku górnej części ciała. Organizm odczytuje to jako nadmiar płynu i zwiększa wydalanie wody oraz soli — astronauci w pierwszych dniach misji oddają dużo moczu i muszą pić więcej. Serce nie musi pompować krwi tak mocno do góry, więc jego lewa komora nieco się zmniejsza. Po powrocie na Ziemię organizm musi się na nowo przystosować — dlatego astronauci po długich misjach mają problemy z ciśnieniem przy wstawaniu. To pokazuje, że homeostaza to nie sztywny zestaw wartości, ale elastyczny system dostosowany do warunków (źródło: NASA).
:::

## 14 | Sposoby pamięciowe {#mnemotechniki}

::: wskazowki
- **„Wykryj — oceń — zareaguj — wróć”**: receptor → ośrodek → efektor → powrót do normy.
- **„Ciepło: rozszerz i wypoć. Zimno: zwęż i zatrzęś.”**
- **Insulina — „Idź do komórek”; Glukagon — „Glukozę wypuść z zapasów”.**
- **ADH = anty-diureza = przeciw sikaniu.** „Mało wody — dużo ADH; dużo wody — mało ADH.”
- **Ujemne — „u-spokaja” zmianę; dodatnie — „do-daje” do zmiany.**
- **Ciśnienie: „Baro-receptor — baro-metr ciśnienia”.** Spada ciśnienie → serce przyspiesza, naczynia zwężają.
- **pH: „CO₂ w górę — oddech w górę”.** Więcej CO₂ = niższe pH = szybszy oddech.
:::

## 15 | Test końcowy {#test}

::: test
? Homeostaza to:
- stan, w którym parametry organizmu w ogóle się nie zmieniają
+ utrzymywanie względnie stałych warunków wewnętrznych dzięki ciągłym korektom
- wyłącznie stała temperatura ciała
- odporność na choroby
! Homeostaza jest równowagą dynamiczną.

? Ośrodek termoregulacji znajduje się w:
- móżdżku
- rdzeniu kręgowym
+ podwzgórzu
- trzustce
! Podwzgórze porównuje temperaturę z normą i steruje reakcjami.

? W ujemnym sprzężeniu zwrotnym odpowiedź organizmu:
+ przeciwdziała początkowej zmianie
- nasila początkową zmianę
- nie wpływa na zmianę
- zawsze podnosi wartość parametru
! Dlatego parametr wraca do normy.

? Przykładem dodatniego sprzężenia zwrotnego jest:
- pocenie się w upale
- wydzielanie insuliny po posiłku
+ wydzielanie oksytocyny podczas porodu
- wydzielanie ADH przy odwodnieniu
! Oksytocyna nasila skurcze, a skurcze — jej wydzielanie.

? W zimnie naczynia krwionośne skóry:
- rozszerzają się
+ zwężają się
- nie zmieniają się
- pękają
! Mniej krwi przy powierzchni — mniej utraconego ciepła.

? Glukagon:
- obniża stężenie glukozy we krwi
+ powoduje rozkład glikogenu w wątrobie
- jest wydzielany głównie po posiłku
- wytwarza go przysadka
! Glukagon podwyższa stężenie glukozy.

? Po posiłku bogatym w węglowodany wzrasta wydzielanie:
+ insuliny
- glukagonu
- ADH
- adrenaliny
! Insulina obniża podwyższone stężenie glukozy.

? ADH:
- zwiększa ilość moczu
+ zwiększa zwrotne wchłanianie wody w nerkach
- wytwarzają nerki
- wydziela się po wypiciu dużej ilości wody
! Mało wody — dużo ADH.

? Po wypiciu dużej ilości wody mocz jest:
- mniej obfity i ciemny
+ obfity i rozcieńczony
- bez zmian
- zawiera glukozę
! Spada wydzielanie ADH.

? Główną przyczyną cukrzycy typu 1 jest:
- nadmiar glukagonu
+ zniszczenie komórek trzustki wytwarzających insulinę
- odwodnienie
- brak ADH
! Układ odpornościowy niszczy komórki β wysp trzustkowych.

? Baroreceptory wykrywają:
- stężenie glukozy we krwi
+ rozciągnięcie ścian tętnic
- temperaturę krwi
- ilość wody w organizmie
! Baroreceptory to czujniki ciśnienia krwi.

? Po wysiłku oddech przyspiesza, ponieważ:
- wzrasta stężenie tlenu we krwi
+ wzrasta stężenie CO₂, który obniża pH krwi
- spada temperatura ciała
- wzrasta stężenie glukozy
! CO₂ obniża pH, a organizm chce je przywrócić do normy.

? Nerki regulują pH krwi, wydalając:
- jony wapnia
- jony potasu
+ jony wodorowe (H⁺)
- jony sodu
! Nerki wydalają H⁺ i zatrzymują HCO₃⁻.
:::

## 16 | Fiszki {#fiszki}

::: fiszki
Homeostaza | utrzymywanie względnie stałych warunków wewnętrznych; równowaga dynamiczna | basic:homeostaza
Bodziec → … | receptor → ośrodek → efektor → odpowiedź | basic:homeostaza
Ujemne sprzężenie zwrotne | odpowiedź przeciwdziała zmianie | basic:homeostaza
Dodatnie sprzężenie zwrotne | odpowiedź nasila zmianę (poród, krzepnięcie) | extra:ambitne
Ośrodek termoregulacji | podwzgórze | basic:temperatura
Za ciepło | rozszerzenie naczyń skóry, pot | basic:temperatura
Za zimno | zwężenie naczyń skóry, dreszcze, gęsia skórka | basic:temperatura
Dlaczego pot chłodzi? | parowanie zabiera ciepło ze skóry | basic:temperatura
Insulina | trzustka (β); obniża glukozę; glikogen w wątrobie i mięśniach | basic:glukoza
Glukagon | trzustka (α); podwyższa glukozę; rozkład glikogenu w wątrobie | basic:glukoza
Antagonizm hormonów | przeciwne działanie (insulina ↔ glukagon) | basic:glukoza
Cukrzyca typu 1 / 2 | brak insuliny / słaba reakcja komórek na insulinę | basic:glukoza
Hipoglikemia | za mało glukozy: drżenie, poty, splątanie — podać coś słodkiego (przytomnemu) | basic:glukoza
ADH | podwzgórze → przysadka → nerki; mniej moczu | basic:woda
Mało wody | dużo ADH, mało zagęszczonego moczu, pragnienie | basic:woda
Osmoreceptory | czujniki stężenia osocza w podwzgórzu | exam:konkurs
Bilans wodny | przyjęta − utracona = zmiana | basic:woda
Gorączka | podwzgórze przestawia „termostat” wyżej | extra:ambitne
Ciśnienie krwi | ~120/80 mmHg; baroreceptory → rdzeń przedłużony → serce i naczynia | basic:cisnienie
pH krwi | 7,35–7,45; regulacja oddechowa (szybka) i nerkowa (wolna) | basic:cisnienie
Baroreceptory | czujniki rozciągnięcia ścian tętnic (ciśnienie) | exam:konkurs
:::

## 17 | Słownik {#slownik}

::: slownik
Homeostaza :: utrzymywanie względnie stałych warunków środowiska wewnętrznego organizmu
Receptor :: struktura wykrywająca zmianę (bodziec)
Ośrodek regulacji :: miejsce porównujące stan z normą i wysyłające polecenia (np. podwzgórze)
Efektor :: mięsień lub gruczoł wykonujący reakcję
Sprzężenie zwrotne ujemne :: regulacja, w której odpowiedź przeciwdziała zmianie
Sprzężenie zwrotne dodatnie :: regulacja, w której odpowiedź nasila zmianę
Termoregulacja :: utrzymywanie stałej temperatury ciała
Glikogen :: wielocukier zapasowy z glukozy, magazynowany w wątrobie i mięśniach
Insulina :: hormon trzustki obniżający stężenie glukozy we krwi
Glukagon :: hormon trzustki podwyższający stężenie glukozy we krwi
Hiperglikemia / hipoglikemia :: zbyt wysokie / zbyt niskie stężenie glukozy we krwi
Osmoregulacja :: utrzymywanie właściwego stężenia substancji w płynach ustrojowych
ADH (wazopresyna) :: hormon zwiększający zwrotne wchłanianie wody w nerkach
Podwzgórze :: część mózgu z ośrodkami termoregulacji, pragnienia i gospodarki wodnej
Baroreceptory :: czujniki ciśnienia krwi w ścianach tętnic
Ciśnienie krwi :: siła, z jaką krew naciska na ściany tętnic (mmHg)
pH krwi :: miara kwasowości krwi; prawidłowo 7,35–7,45
:::

## 18 | Mapa pojęć {#mapa}

::: drzewo
Homeostaza — równowaga dynamiczna
  Schemat regulacji: bodziec → receptor → ośrodek → efektor → odpowiedź
  Sprzężenie zwrotne
    ujemne — przeciwdziała zmianie (temperatura, glukoza, woda, pH, ciśnienie)
    dodatnie — nasila zmianę (poród, krzepnięcie)
  Temperatura (podwzgórze)
    ciepło: rozszerzenie naczyń skóry, pot
    zimno: zwężenie naczyń, dreszcze, gęsia skórka, szybsza przemiana materii
  Glukoza (trzustka)
    insulina ↓ — glikogen w wątrobie i mięśniach
    glukagon ↑ — rozkład glikogenu
    cukrzyca typu 1 i 2; hipo- i hiperglikemia
  Woda (podwzgórze, przysadka, nerki)
    mało wody: dużo ADH, mało zagęszczonego moczu, pragnienie
    dużo wody: mało ADH, dużo rozcieńczonego moczu
  Ciśnienie krwi (baroreceptory, rdzeń przedłużony, serce, naczynia)
    spada: serce szybciej, naczynia zwężone
    rośnie: serce wolniej, naczynia rozszerzone
  pH (ośrodek oddechowy, nerki)
    szybko: przyspieszenie oddechu usuwa CO₂
    wolno: nerki wydalają H⁺, zatrzymują HCO₃⁻
:::

## 19 | Ściąga {#sciaga}

::: karta core
- **Homeostaza** = względna stałość warunków wewnętrznych, równowaga dynamiczna.
- **Schemat:** bodziec → receptor → ośrodek → efektor → odpowiedź; **ujemne** przeciwdziała zmianie, **dodatnie** ją nasila.
- **Ciepło:** rozszerz naczynia + pot → oddawanie ciepła. **Zimno:** zwęż naczynia + dreszcze → zatrzymanie i wytwarzanie ciepła. Ośrodek — podwzgórze.
- **Glukoza wysoka:** insulina → pobieranie i magazynowanie (glikogen) → spada. **Niska:** glukagon → rozkład glikogenu w wątrobie → rośnie.
- **Wody mało:** dużo ADH → nerki zatrzymują wodę → mało zagęszczonego moczu. **Wody dużo:** mało ADH → dużo rozcieńczonego moczu.
- **Ciśnienie krwi:** baroreceptory → rdzeń przedłużony → serce i naczynia. Spada → serce szybciej, naczynia zwężone.
- **pH krwi (7,35–7,45):** szybko — przyspieszenie oddechu usuwa CO₂; wolno — nerki wydalają H⁺, zatrzymują HCO₃⁻.
- **Cukrzyca:** typ 1 — brak insuliny; typ 2 — słaba reakcja komórek. Hipoglikemia u przytomnego — coś słodkiego.
:::

::: checklista
- [ ] definiuję homeostazę jako równowagę dynamiczną
- [ ] wskazuję bodziec, receptor, ośrodek, efektor i odpowiedź w każdym przykładzie
- [ ] rozpoznaję ujemne i dodatnie sprzężenie zwrotne
- [ ] opisuję termoregulację w cieple i w zimnie i wyjaśniam, dlaczego pot chłodzi
- [ ] wyjaśniam działanie insuliny i glukagonu oraz ich antagonizm
- [ ] odróżniam cukrzycę typu 1 i 2, hipo- i hiperglikemię
- [ ] opisuję rolę ADH i przewiduję ilość i wygląd moczu
- [ ] wyjaśniam rolę baroreceptorów w regulacji ciśnienia krwi
- [ ] wyjaśniam, jak organizm reguluje pH krwi (oddech i nerki)
- [ ] odczytuję wykres glukozy po posiłku i liczę utratę wody z pomiaru masy ciała
:::

## 20 | Co dalej? {#dalej}

- Krążenie jako transport ciepła, glukozy i hormonów — lekcja U04.
- Układ dokrewny (hormony, przysadka, trzustka) — B2e; wydalanie i nerka — B2c; skóra — B2a; układ nerwowy i podwzgórze — B2d.
- Rozdział o ciśnieniu krwi i pH — [§21](#cisnienie-ph) w tej lekcji.
```

---

## Nowa sekcja 21 (dopisana do lekcji powyżej — wklejona w całości)

```markdown
## 21 | Ciśnienie krwi i pH — dwa pozostałe parametry {#cisnienie-ph}

Ciśnienie krwi i pH to parametry, o których rzadko myślimy, a które organizm reguluje bez przerwy. Oba mają ten sam schemat pięciu elementów co termoregulacja.

**Ciśnienie krwi** to siła, z jaką krew naciska na ściany tętnic. Podaje się je w milimetrach słupa rtęci (mmHg) jako dwie liczby: ciśnienie skurczowe (gdy serce się kurczy) i rozkurczowe (gdy odpoczywa). U zdrowego dorosłego to ok. 120/80 mmHg (orientacyjnie). Regulują je:
- **baroreceptory** (presoreceptory) w ścianach tętnicy szyjnej i łuku aorty — czujniki rozciągnięcia ściany naczynia,
- **ośrodek naczynioruchowy** w rdzeniu przedłużonym,
- **efektory:** serce (częstość i siła skurczów), naczynia krwionośne (średnica), nerki (objętość krwi przez zatrzymanie lub wydalenie wody i soli).

Gdy ciśnienie spada (np. przy wstawaniu), baroreceptory wykrywają mniejsze rozciągnięcie ścian, ośrodek wysyła polecenia: serce bije szybciej i mocniej, naczynia się zwężają — ciśnienie wraca do normy. Gdy rośnie — odwrotnie. To ujemne sprzężenie zwrotne.

**pH krwi** to miara kwasowości. Prawidłowo wynosi 7,35–7,45 (orientacyjnie) — krew jest lekko zasadowa. CO₂ powstający w przemianach materii reaguje z wodą, tworząc kwas węglowy, który obniża pH. Organizm radzi sobie z tym na dwa sposoby:
1. **Szybko:** ośrodek oddechowy w rdzeniu przedłużonym wykrywa spadek pH i przyspiesza oddech — więcej CO₂ wydychane, pH wraca do normy.
2. **Wolno:** nerki wydalają jony wodorowe (H⁺) i zatrzymują jony wodorowęglanowe (HCO₃⁻) — to trwa godziny i dni.

$$ CO_2 + H_2O \rightleftharpoons H_2CO_3 \rightleftharpoons H^+ + HCO_3^- $$

::: karta understand | W skrócie — dlaczego po biegu szybko oddychamy
Mięśnie podczas wysiłku wytwarzają dużo CO₂. CO₂ przechodzi do krwi, gdzie obniża pH. Receptory w naczyniach i rdzeniu przedłużonym to wykrywają i wysyłają sygnał do mięśni oddechowych: „przyspiesz”. Szybszy i głębszy oddech usuwa nadmiar CO₂, pH wraca do normy — i po chwili oddech się uspokaja. To ujemne sprzężenie zwrotne w czystej postaci.
:::

::: karta warning | Nadciśnienie — cichy zabójca
Przewlekłe podwyższone ciśnienie krwi (nadciśnienie) długo nie daje objawów, a uszkadza naczynia, serce, nerki i mózg. Sprzyjają mu: nadmiar soli, otyłość, brak ruchu, stres, palenie. To przykład zaburzenia homeostazy, które rozwija się latami — dlatego tak ważne są regularne pomiary.
:::

::: adv | Kwasica i zasadowica — gdy pH wymyka się spod kontroli | poziom ambitny
**Kwasica** — pH poniżej 7,35; przyczyny: cukrzyca (nagromadzenie ciał ketonowych), ciężka biegunka, choroby płuc. **Zasadowica** — pH powyżej 7,45; przyczyny: hiperwentylacja (zbyt szybki oddech), wymioty (utrata kwasu żołądkowego). Obie są groźne, bo zmieniają kształt białek i spowalniają enzymy. Organizm najpierw uruchamia bufory krwi i przyspiesza oddech, potem włącza nerki. To przykład, że homeostaza ma zapasowe mechanizmy i różne tempo reakcji.
:::
```

---

## Lista kontrolna na koniec tury

- raport przed/po jest na początku — **TAK**
- żaden licznik nie zmalał bez wyjaśnienia — **TAK** (wszystkie wiersze + lub 0)
- nic nie zostało usunięte bez pozycji „Proponuję usunąć” — **TAK**
- składnia według Zasady nr 3 (test `? + - !`, fiszki `|`, słownik `::`, zadania z `::: odp`) — **TAK**
- brak bloków kodu, rysunków ASCII i znaczników cytowań — **TAK**
- brak nowych kodów `@viz` (tylko „Propozycje grafiki”) — **TAK**
- jest wykład, mini-wykłady i ciekawostki — **TAK** (wykład 450+ słów, 8 mini-wykładów, 6 ciekawostek)
- klucze i punktacja sprawdzone — **TAK**
- terminy bez literówek — **TAK**
- liczby niepewne oznaczone — **TAK** („orientacyjnie” przy temp., glukozie, ciśnieniu, pH, danych wielbłąda)
- warstwa ponad E8 oznaczona „(konkurs)” — **TAK**
- brak harmonogramów powtórek, planów i limitów czasu — **TAK**

**Gotowe: H01. Napisz „dalej”.**