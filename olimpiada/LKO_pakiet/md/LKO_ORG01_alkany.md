---
kod: LKO-ORG01
uid: CHE.LKO.ORG01
tytul: "Alkany C1–C5 i halogenowanie"
typ: lekcja
dzial: "Chemia organiczna (etap III LKO)"
poziom: "LKO — etap III (wojewódzki)"
wymaga: "R07; R08; R09"
poglebia: "LKO-ORG02; LKO-ORG08"
wlasciciel: "chemia olimpijska LKO"
zrodla: "Zakres olimpiady kuratoryjnej (etap III) + podstawa programowa"
opis: "Szereg homologiczny alkanów od metanu do pentanu: wzory, izomery, spalanie i halogenowanie (substytucja) — z pełnymi równaniami i obliczeniami."
stan: "W1 FULL — Perplexity, 2026-10-13"
kicker: "ORG01 · alkany"
lead: "Pięć substancji zbudowanych wyłącznie z węgla i wodoru, jedna reguła wzoru i jedna reakcja-charakterystyka: tak zaczyna się chemia organiczna."
plakietki: ["alkany", "halogenowanie"]
stopka: "LKO-ORG01 · v1.1"
---

# LKO-ORG01 — Alkany C1–C5 i halogenowanie

::: minimum | Muszę umieć — 10 punktów
1. Zdefiniować węglowodór i wskazać alkan wśród wzorów.
2. Podać wzór ogólny alkanów CₙH₂ₙ₊₂ i policzyć z niego wzory C1–C5.
3. Nazwać i zapisać: metan, etan, propan, butan, pentan.
4. Uzasadnić, że dany związek należy do szeregu homologicznego (różnica CH₂ między sąsiadami).
5. Wskazać izomery butanu i pentanu (budowa łańcucha).
6. Zbilansować całkowite spalanie dowolnego alkana C1–C5.
7. Odróżnić spalanie całkowite od niecałkowitego (produkty, wygląd płomienia).
8. Zapisać halogenowanie metanu chlorem ze wskazaniem warunku (światło) i typu reakcji (substytucja).
9. Wyjaśnić, dlaczego chlorowanie metanu daje mieszaninę produktów (CH₃Cl, CH₂Cl₂, CHCl₃, CCl₄).
10. Policzyć stechiometrię spalania w molach, gramach i objętościach gazów (22,4 dm³/mol w warunkach normalnych; patrz LKO-ORG08).
:::

::: warstwy
e8 | Szereg metan–pentan, spalanie całkowite, równanie halogenowania metanu na pamięć.
understand | Dlaczego wzór CₙH₂ₙ₊₂ działa, czym jest substytucja i dlaczego produktów chlorowania jest kilka.
contest | Stechiometria spalania w trzech jednostkach (mol, gram, dm³), izomery pentanu, analiza błędnych równań — poziom zadań wojewódzkich.
extra | Metan na Tytanie, lampa górnicza Davy'ego, losy chloroformu i CCl₄, izomery butanu w zapalniczce.
:::

::: rdzen | Rdzeń lekcji — najpierw to
1. [Wzór ogólny i szereg C1–C5](#szereg) — jedna reguła zamiast pięciu wzorów do wkucia.
2. [Spalanie całkowite — bilans bez błędów](#spalanie) — podstawowa reakcja wszystkich węglowodorów.
3. [Halogenowanie = substytucja](#halogenowanie) — warunek światła i łańcuch produktów.
4. [Izomery](#izomery) — ten sam wzór, inna budowa.
5. [Zadania exam](#zadania) i [zadania adv](#zadania-adv) — formy, które pojawią się na wojewódzkim.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

Zacznij od diagnozy — pokaże, które z dziesięciu punktów minimum już masz. Potem przejdź po odnośnikach z rdzenia: to trasa przez całą lekcję. Każde równanie przepisz ręcznie i zbilansuj samodzielnie — w organice liczą się wzory strukturalne, nie same litery. Zadania exam rozwiązuj na czysto, z pełnym zapisem jak w R08 i R09; kartę `odp` otwieraj dopiero po własnej próbie. Fiszki i test zostaw na koniec jako kontrolę — wracaj do nich, gdy chcesz sprawdzić, co już pamiętasz.

## 0.2 | Diagnoza {#diagnoza}

Odpowiedz pisemnie, zanim zaczniesz:

1. Podać wzór ogólny alkanów i z niego wzory metanu i pentanu.
2. Zbilansować: C₃H₈ + O₂ → CO₂ + H₂O.
3. Co to jest substytucja? Jedno zdanie.
4. Jaki warunek jest potrzebny do reakcji metanu z chlorem?
5. Zapisz wzór CCl₄ i podaj jego nazwę.

::: odp | Klucz diagnozy
1. CₙH₂ₙ₊₂; metan CH₄ (n = 1), pentan C₅H₁₂ (n = 5) (1 pkt).
2. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (1 pkt; bez współczynnika 5 przy O₂ — 0 pkt).
3. Substytucja to reakcja, w której atom w cząsteczce zostaje **zastąpiony** innym atomem (tu: H → Cl) (1 pkt).
4. Światło (dzienne/UV) — w ciemności reakcja nie biegnie (1 pkt).
5. CCl₄ — tetrachlorometan (czterochlorek węgla) (1 pkt).

**Rozliczenie:** 5 pkt — przeczytaj rdzeń selektywnie i idź prosto do zadań exam; 3–4 pkt — pełna praca przez lekcję, z naciskiem na punkty, w których zabrakło odpowiedzi; 0–2 pkt — najpierw wróć do R04 (wzory, masy molowe) i R09 (bilanse), potem lekcja od początku.
:::

## 1 | Wykład — węglowodory i szereg homologiczny alkanów {#szereg}
@klocek wzor-2d {smiles="CCCCC", grupa="none"} | Pentan C₅H₁₂: łańcuch pięciu węgli, same wiązania pojedyncze
@opis Rysunek szkieletowy: każda łamana to węgiel, końce to grupy CH₃, wewnętrzne węgle to CH₂ bez podpisu. Same kreski pojedyncze, zero podwójnych. Wniosek: alkan to łańcuch, w którym każdy węgiel ma cztery wiązania, a reszta to wodory; stąd wzór CₙH₂ₙ₊₂.


::: karta understand | Przypomnienie — ile wiązań ma węgiel
Atom węgla w związkach organicznych tworzy **cztery** wiązania (wartościowość IV), a wodór — jedno. Wszystko, co dalej w lekcji, wynika z tej jednej reguły: każdy węgiel „musi" mieć cztery kreski.
:::

**Węglowodór** to związek chemiczny zbudowany **wyłącznie z dwóch pierwiastków: węgla i wodoru**. To najprostsze ciało chemii organicznej — i jej fundament: z węglowodorów przez kolejne reakcje powstają alkohole, kwasy, estry i reszta organiki.

**Alkany** to węglowodory **łańcuchowe** (nie zamknięte w pierścień), w których wszystkie wiązania węgla są **pojedyncze** (C–C). Węgiel „używa" swoich czterech wiązań do maksimum i nie zostawia sobie rezerwy — dlatego alkany bywają nazywane związkami **nasyconymi**: nie mają już czego dodać.

Wzory alkanów podlegają jednej regule. Policzmy: metan CH₄, etan C₂H₆, propan C₃H₈. Przy n atomach węgla liczba wodorów to **2n + 2**:

**CₙH₂ₙ₊₂** — wzór ogólny alkanów.

Sprawdźmy: n = 1 → C₁H₍₂·₁₊₂₎ = CH₄ ✔; n = 2 → C₂H₍₂·₂₊₂₎ = C₂H₆ ✔; n = 5 → C₅H₁₂ ✔. Dlaczego reguła działa: każdy z n węgli w łańcuchu poświęca jedno wiązanie na sąsiada (łącznie n − 1 wiązań C–C), a wolne wiązania zakańcza wodorami — wychodzi dokładnie 2n + 2.

Pełny wzór strukturalny zapisujemy, rysując każde wiązanie kreską. Dla propanu to dziesięć kresek: dwie C–C i osiem C–H. Ćwiczenie: narysuj pełny wzór butanu i sprawdź, czy przy każdym węglu jest dokładnie cztery kreski.

Pełny szereg od C1 do C5:

| n | Nazwa | Wzór | Masa molowa M |
|---|---|---|---|
| 1 | metan | CH₄ | 12 + 4·1 = **16 g/mol** |
| 2 | etan | C₂H₆ | 2·12 + 6·1 = **30 g/mol** |
| 3 | propan | C₃H₈ | 3·12 + 8·1 = **44 g/mol** |
| 4 | butan | C₄H₁₀ | 4·12 + 10·1 = **58 g/mol** |
| 5 | pentan | C₅H₁₂ | 5·12 + 12·1 = **72 g/mol** |

Wraz ze wzrostem liczby atomów węgla rośnie temperatura wrzenia: metan wrze w −162 °C, etan w −89 °C, propan w −42 °C, butan w −0,5 °C, n-pentan w 36 °C. Dlatego C1–C4 są gazami, a n-pentan cieczą. Wyjątek w obrębie izomerów: neopentan (też C₅H₁₂) wrze już w ok. 9,5 °C — w temperaturze pokojowej jest gazem. Rozgałęzienie łańcucha obniża temperaturę wrzenia. Alkany nie mieszają się z wodą: ich ciecze mają gęstość mniejszą niż 1 g/cm³ i pływają na wodzie.

Sąsiedzi różnią się dokładnie o **CH₂** — to znak rozpoznawczy **szeregu homologicznego**: rodziny związków o podobnej budowie, podobnych własnościach i stałym kroku wzoru. Nazwy mają wspólną końcówkę **-an**, a przedrostek mówi o liczbie węgli: met- (1), et- (2), prop- (3), but- (4), pent- (5).

Cechy fizyczne: alkany są **bezbarwne**, słabo rozpuszczalne w wodzie („podobne rozpuszcza podobne" — R01: węglowodory są niepolarne), a od C1 do C4 są **gazami** (n-pentan C5 już cieczą). Gęstość względem powietrza: metan (M = 16) jest **lżejszy** od powietrza (M ≈ 29), propan (M = 44) — **cięższy**. To będzie miało znaczenie w zadaniach o zbieraniu gazów.

::: karta understand | W skrócie — dlaczego właśnie 2n + 2
W łańcuchu n węgli jest n − 1 wiązań C–C. Każdy węgiel ma 4 wiązania, więc na wodorowy zostaje: 4n − 2(n − 1) = 4n − 2n + 2 = **2n + 2**. Wzór ogólny nie jest zaklęciem — jest rachunkiem wiązań. Gdyby ktoś zapytał o alkan C₆: C₆H₁₄ (heksan), i wiesz to bez wkucia.
:::

::: karta extra | Jeziora metanu na Tytanie
Największy księżyc Saturna, Tytan, jest jedynym ciałem Układu Słonecznego poza Ziemią, na którym stwierdzono ciekłe jeziora i rzeki — ale nie z wody, tylko z **ciekłego metanu i etanu** (temperatura powierzchni ok. −179 °C). Sonda Cassini badała Tytan od 2004 r., a lądownik Huygens osiadł na nim w 2005 r. Metan — główny bohater tej lekcji — jest tam tym, czym na Ziemi jest woda: paruje, skrapla się i pada deszczem.
:::

::: karta extra | Lampa, która poprawiła bezpieczeństwo w kopalniach
Metan występujący w kopalniach węgla (gaz kopalniany, ang. firedamp) tworzy z powietrzem mieszaninę wybuchową. W 1815 r. Humphry Davy skonstruował lampę górniczą z płomieniem zamkniętym w gęstej **metalowej siatce**: siatka odprowadzała ciepło i chłodziła otaczające gazy poniżej temperatury zapłonu, więc wybuch nie rozchodził się na zewnątrz. Lampa Davy'ego znacznie poprawiła bezpieczeństwo pracy górników — i jest ładnym przykładem, że reakcja chemiczna (zapłon) ma swoje warunki: paliwo + tlen + temperatura.
:::

## 2 | Wykład — spalanie całkowite: bilans dla każdego alkana {#spalanie}

Alkany są mało reaktywne — nie reagują z kwasami, zasadami ani wodą. Ich reakcją charakterystyczną jest **spalanie**: przy dostępie tlenu węgiel i wodór zamieniają się w CO₂ i H₂O, a wydziela się dużo energii (dlatego alkany to paliwa). Ciepło wydzielone przy spaleniu jednego mola nazywamy ciepłem spalania; im jest ono większe na gram paliwa, tym paliwo bardziej „energetyczne".

Wzorcowa procedura bilansowania, na metanie:

1. Zapisz szkielet: CH₄ + O₂ → CO₂ + H₂O.
2. Węgiel: 1 = 1 — gotowe.
3. Wodór: 4 H → 2 H₂O.
4. Tlen (zawsze na końcu!): prawa strona ma 2 (z CO₂) + 2 (z H₂O) = 4 O → lewa: **2 O₂**.

**CH₄ + 2O₂ → CO₂ + 2H₂O** ✔ (sprawdzenie O: 4 = 4)

Pozostałe alkany C2–C5 — wszystkie zbilansowane, sprawdź każdy samodzielnie:

- **2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O** (O: 14 = 14 ✔)
- **C₃H₈ + 5O₂ → 3CO₂ + 4H₂O** (O: 10 = 10 ✔)
- **2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O** (O: 26 = 26 ✔)
- **C₅H₁₂ + 8O₂ → 5CO₂ + 6H₂O** (O: 16 = 16 ✔)

Zauważ regularność: dla alkana CₙH₂ₙ₊₂ pełne spalanie potrzebuje O₂ w ilości n + (2n+2)/4 moli na mol paliwa (metan: 1 + 1 = 2 ✔; propan: 3 + 2 = 5 ✔; pentan: 5 + 3 = 8 ✔). W konkursie to przyspiesza rachunek objętości.

**Spalanie niecałkowite** — gdy tlenu brakuje: obok (lub zamiast) CO₂ powstają **tlenek węgla CO** i **sadza C**; płomień jest żółty i kopcący (porównaj: spalanie całkowite daje płomień niebieski, bez dymu). Zapisy: 2CH₄ + 3O₂ → 2CO + 4H₂O; CH₄ + O₂ → C + 2H₂O. Niebezpieczeństwo CO — bezbarwny, bezwonny, trujący (blokuje transport tlenu we krwi — szczegóły w N01).

::: karta understand | W skrócie — trzy jednostki spalania propanu
Zadanie z wojewódzkiego zwykle chce wszystkich trzech: **moli, gramów i dm³**. Przykład: 11 g propanu (0,25 mol; M = 44).
Mole: 0,25 mol C₃H₈ → 0,75 mol CO₂, 1 mol H₂O, potrzeba 1,25 mol O₂.
Gramy: m(CO₂) = 0,75 · 44 = 33 g; m(O₂) = 1,25 · 32 = 40 g.
Objętości (tylko gazy! warunki normalne, 22,4 dm³/mol — LKO-ORG08): V(O₂) = 1,25 · 22,4 = 28 dm³; V(CO₂) = 0,75 · 22,4 = 16,8 dm³. W warunkach normalnych (0 °C) woda jest cieczą, więc jej objętości jako gazu nie liczymy.
Konwencja: na egzaminie używaj wartości Vₘ podanej w arkuszu. Wartość 22,4 dm³/mol odpowiada 0 °C i 1013 hPa; dla innych warunków (np. 25 °C) objętość molowa jest większa.
:::

::: karta error | Tlen bilansujemy ostatni, wodór przed nim
Najczęstsza przyczyna niepotrzebnych ułamków: startowanie od O₂. Zawsze: najpierw C, potem H, **na końcu O** — wtedy współczynnik przy O₂ wyjdzie sam. Druga pułapka: ułamkowe współczynniki. Zapis „C₂H₆ + 3,5O₂ → 2CO₂ + 3H₂O" jest chemicznie poprawny (O: 7 = 4 + 3), ale konkurs i egzamin oczekują liczb całkowitych — mnożymy wszystko przez 2: **2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O**.
:::

## 3 | Wykład — halogenowanie: substytucja, nie addycja {#halogenowanie}
@klocek wzor-2d {smiles="CCl", grupa="X"} | Chlorometan CH₃Cl: atom chloru zastąpił jeden wodór
@opis Metan z jednym atomem wodoru zamienionym na chlor. Ramka wskazuje podstawiony atom Cl. Wniosek: w substytucji wodór odchodzi, a na jego miejsce wchodzi chlor, więc liczba wiązań węgla się nie zmienia.


Chlor (i brom) reaguje z alkanami, ale na swoich warunkach:

**CH₄ + Cl₂ →(światło) CH₃Cl + HCl**

Ta jedna linia niesie trzy informacje egzaminacyjne:

1. **Warunek: światło** (dzienne lub UV). W ciemności i w temperaturze pokojowej reakcja nie biegnie. W klasycznej próbie kontrolnej mieszanina metanu i chloru stoi w ciemnym naczyniu bez zmian; na świetle barwa chloru stopniowo słabnie, na ściankach naczynia osiadają oleiste krople bezbarwnych cieczy (chloropochodne metanu), a w naczyniu gromadzi się gazowy HCl (wilgotny papierek wskaźnikowy czerwienieje). *Uwaga bezpieczeństwa:* mieszanina CH₄ + Cl₂ w silnym świetle słonecznym lub UV może reagować gwałtownie, nawet wybuchowo — powyższy opis służy do analizy, nie do samodzielnego wykonania.
2. **Typ: substytucja (podstawianie).** Jeden atom wodoru z metanu został **zastąpiony** atomem chloru; wyrzucony H łączy się z drugim Cl w HCl. Cząsteczka metanu nie przyjęła chloru „do środka" — oddała za niego wodór.
3. **Produkty w stosunku 1 : 1** (chlorometan : chlorowodór).

Reakcja nie kończy się na CH₃Cl — chlorometan sam podlega dalszemu podstawianiu:

- CH₃Cl + Cl₂ →(światło) **CH₂Cl₂** + HCl (dichlorometan)
- CH₂Cl₂ + Cl₂ →(światło) **CHCl₃** + HCl (trichlorometan — **chloroform**)
- CHCl₃ + Cl₂ →(światło) **CCl₄** + HCl (tetrachlorometan)

Dlatego chlorowanie metanu prowadzi do **mieszaniny** czterech chlorowanych produktów. Sterowanie składem: nadmiar metanu sprzyja powstawaniu CH₃Cl; nadmiar chloru — produktom bardziej schlorowanym (aż do CCl₄) (logika nadmiaru — R08).

Nazwa pochodnej składa się z liczby podstawionych atomów (mono-, di-, tri-, tetra-; przedrostek „mono" zwykle pomijamy), słowa **chloro-** i nazwy alkanu: chloro + metan = chlorometan; dichloro + metan = dichlorometan.

Brom reaguje podobnie: CH₄ + Br₂ →(światło) CH₃Br + HBr (bromometan i bromowodór). Typ reakcji ten sam — substytucja. Alkany nie odbarwiają wody bromowej w ciemności — patrz LKO-ORG02.

::: karta understand | W skrócie — substytucja vs addycja (jedna linia różnicy)
W alkaniu **nie ma** podwójnych wiązań, więc chlor może tylko **podstawić** (H wychodzi, Cl wchodzi; HCl zawsze powstaje). W alkenie (ORG02) jest wiązanie C=C, które potrafi **dodać** drugi atom — bez wyrzucania czegokolwiek i bez HCl. Zapis „C₂H₆ + Cl₂ → C₂H₆Cl₂" to addycja do alkana — niemożliwa, bo brak wiązania do otwarcia. To rozróżnienie to najczęściej punktowany trop na etapie III.
:::

::: karta error | Typowe błędy — czego nie pisać
- Przypisywanie atomowi węgla pięciu wiązań (węgiel ma cztery).
- Liczenie wodorów dla cykloalkanów wzorem 2n + 2 (cykloalkany to nie alkany łańcuchowe).
- Mylenie izomerów z homologami: izomery mają ten sam wzór sumaryczny, homologi różnią się o CH₂.
- Zapominanie o HCl w substytucji.
- Uznawanie „C₂H₆ + Cl₂ → C₂H₆Cl₂" za addycję.
- Liczenie wody w spalinach jako gazu w warunkach normalnych (woda jest cieczą i nie wchodzi do objętości gazów).
:::

::: karta extra | Chloroform i CCl₄ — chwała i wycofanie
Chloroform (CHCl₃) wprowadził w 1847 r. James Simpson do położnictwa jako narkotyk — zrewolucjonizował chirurgię, ale okazał się niebezpieczny dla serca i został zastąpiony. Tetrachlorometan (CCl₄) dekady używano do chemicznego czyszczenia i gaśnic — dziś jest zakazany: silnie toksyczny dla wątroby i niszczący warstwę ozonową (protokół montrealski 1987, jakościowo). Morał konkursowy: te „stare" nazwy wciąż wypadają w zadaniach o halogenowaniu — warto znać wzór i nazwę, ale nie nadużywać ich jako bezpiecznych substancji.
:::

::: karta extra | Metan w żwaczu krowy i w bagnie
Metan powstaje też w żwaczu przeżuwaczy i w bagnach — w wyniku fermentacji beztlenowej (tzw. biogaz, LKO-ORG07). Metan ma silniejsze działanie cieplarniane niż CO₂ w przeliczeniu na cząsteczkę, ale zostaje w atmosferze krócej. Ten sam gaz, który pali się w kuchence, powstaje w żołądku krowy — to dobry przykład, że chemia organiczna jest wszędzie w biologii.
:::

::: karta extra | Butan i izobutan — dwie osobowości jednego wzoru
C₄H₁₀ istnieje w dwóch odmianach: **n-butan** (prosty łańcuch) i **izobutan** (2-metylopropan, łańcuch rozgałęziony). Mają identyczny wzór i masy molowe, ale różne temperatury wrzenia: n-butan wrze w ok. −0,5 °C, izobutan w ok. −11,7 °C (wartości podręcznikowe). W zapalniczce pracuje zwykle mieszanina obu. To najprostszy dowód, że **budowa cząsteczki decyduje o własnościach** — nie tylko jej skład.
:::

::: karta extra | Gaz ziemny, gaz płynny i ropa — ten sam węglowodór w trzech wersjach
Gaz ziemny to głównie metan; gaz płynny LPG to propan i butan, spakowane pod ciśnieniem w butlach; ropa naftowa jest mieszaniną wielu węglowodorów, którą w rafinerii rozdziela się na frakcje przez destylację (od gazów po asfalt). Ten sam szereg homologiczny, który poznajesz tutaj, odpowiada za paliwa w domu i w samochodzie.
:::

::: karta extra | Dlaczego gaz ziemny ma zapach
Czysty metan i propan nie mają zapachu. Gazowniczy dodaje do gazu środek zapachowy (np. merkaptany), żeby wyciek dało się wyczuć, zanim zrobi się groźnie. Ten sam zapach to przykład zastosowania chemii w bezpieczeństwie — czujnik, który działa „nosem" człowieka.
:::

::: karta adv | Ambitnie — mechanizm rodnikowy chlorowania (tylko zarys)
Reakcja biegnie łańcuchowo, przez rodniki (cząstki z niesparowanym elektronem). Inicjacja: światło rozbija Cl₂ na dwa atomy chloru. Propagacja: rodnik Cl• wyrywa H z metanu, a powstały rodnik •CH₃ zrywa cząsteczkę Cl₂ i daje CH₃Cl oraz kolejny rodnik Cl•. Terminacja: dwa rodniki łączą się i łańcuch się kończy. Bromowanie idzie tym samym mechanizmem, ale wolniej i z większą selektywnością.
:::

## 4 | Wykład — izomery: ten sam wzór, inna budowa {#izomery}
@klocek wzor-2d {smiles="CCCC", grupa="none"} | n-butan C₄H₁₀: łańcuch prosty
@opis Cztery węgle w jednym rzędzie. Wniosek: n-butan i izobutan mają ten sam wzór C₄H₁₀, różnią się tylko budową łańcucha (izomeria łańcuchowa).

@klocek wzor-2d {smiles="CC(C)C", grupa="none"} | Izobutan (2-metylopropan) C₄H₁₀: łańcuch rozgałęziony
@opis Trzy węgle w łańcuchu i jeden metyl przy środkowym węglu. Ten sam wzór co n-butan, inne połączenia atomów. Wniosek: izomery to nie to samo co wzór sumaryczny; liczy się budowa.


**Izomery** to związki o **identycznym wzorze sumarycznym**, ale **różnej budowie** (tu: różnym rozgałęzieniu łańcucha). Zjawisko nazywa się izomerią.

Metan, etan, propan mają po jednej możliwej budowie — łańcucha nie da się rozgałęzić. Ale butan (C₄H₁₀) ma **dwa** izomery:

- **n-butan:** CH₃–CH₂–CH₂–CH₃ (łańcuch prosty, cztery węgle w rzędzie);
- **izobutan** (2-metylopropan): CH₃–CH(CH₃)–CH₃ (łańcuch trójwęglowy z metylem przy środkowym węglu).

Pentan (C₅H₁₂) ma **trzy** izomery:

1. **n-pentan:** CH₃–CH₂–CH₂–CH₂–CH₃;
2. **izopentan** (2-metylobutan): CH₃–CH(CH₃)–CH₂–CH₃;
3. **neopentan** (2,2-dimetylopropan): C(CH₃)₄ — węgiel centralny z czterema metylami.

Zasada liczenia (na poziomie konkursu): wypisuj łańcuchy od najdłuższego, skracaj o jeden węgiel i rozważaj wszystkie pozycje rozgałęzienia, eliminując duplikaty (izopentan odwrócony o 180° to nadal izopentan).

::: karta warning | Ten sam związek czy inny? Najpierw szkielet, nie zapis
Dwa zapisy mogą wyglądać różnie, a opisywać ten sam związek. Przykład: CH₃–CH(CH₃)–CH₂–CH₃ i CH₃–CH₂–CH(CH₃)–CH₃ to **ten sam** izopentan (2-metylobutan) — tylko zapisany od drugiego końca łańcucha. Natomiast CH₃–CH₂–CH₂–CH₃ i CH₃–CH(CH₃)–CH₃ to **dwa różne** związki (n-butan i izobutan), bo mają inny szkielet. Test: znajdź najdłuższy łańcuch węglowy i policz, gdzie jest odgałęzienie. Jeśli oba zapisy dają ten sam szkielet — to jeden związek.
:::

::: karta understand | W skrócie — ilu izomerów wymienić na konkursie
C1–C3: po jednym (brak izomerii). C4: **2**. C5: **3**. Te liczby trzeba znać; przy C6 (heksan — 5 izomerów) raczej podadzą gotowe struktury do rozpoznania. W uzasadnieniu pisz: „izomery różnią się budową łańcucha (rozgałęzieniem) przy tym samym wzorze sumarycznym C₄H₁₀".
:::

::: karta understand | Sprawdź się sam — bez zaglądania
1. Ile wiązań ma węgiel i ile wodoru potrzeba w propanie?
2. Zapisz równanie spalania całkowitego butanu bez ułamków.
3. Dlaczego C₂H₆ + Cl₂ → C₂H₆Cl₂ jest błędne?
4. Czy CH₃Cl jest alkanem? Uzasadnij.
5. Ile izomerów ma C₅H₁₂? Zapisz ich nazwy.
:::

## 5 | Doświadczenie — dwa dowody z płomienia metanu {#dosw}

::: dosw | Doświadczenie 1 — Produkty spalania metanu: zlewka i woda wapienna
**Problem:** Jakie produkty powstają przy całkowitym spalaniu metanu i jak je wykazać?

**Hipoteza:** Zbilansowane równanie CH₄ + 2O₂ → CO₂ + 2H₂O każe spodziewać się pary wodnej i dwutlenku węgla — oba można wykazać prostymi próbami nad płomieniem.

**Sprzęt:** palnik z metanem (butla laboratoryjna) lub przyrząd z gazem z butli, dwie zimne i suche zlewki (jedna do próby kontrolnej), czysta kolba lub zlewka do wody wapiennej, woda wapienna, bezwodny siarczan(VI) miedzi(II) (opcjonalnie), szczypce, okulary ochronne.

**Przebieg:**
1. Zapal strumień metanu z palnika; zaobserwuj płomień (niebieski, bez dymu).
2. Przytrzymaj **nad** płomieniem (nie w płomieniu) zimną, suchą zlewkę odwróconą dnem do góry. Zaobserwuj jej ściankę.
3. **Próba kontrolna:** drugą zimną, suchą zlewkę trzymaj w tym samym czasie kilkanaście centymetrów obok płomienia. Zaobserwuj, czy osiada na niej ciecz.
4. Czystą kolbkę lub zlewkę odwróć dnem do góry nad płomieniem na kilkanaście sekund, odwróć dnem w dół i szybko wlej kilka mililitrów wody wapiennej. Zamieszaj.
5. (Opcjonalnie) Krople ze zlewki potwierdź bezwodnym siarczanem(VI) miedzi(II), który z wodą zmienia barwę z białej na niebieską.

**Obserwacje:** (1) na zlewce nad płomieniem osiadają krople bezbarwnej cieczy; na zlewce kontrolnej — brak; (2) woda wapienna mętnieje; (3) bezwodny CuSO₄ staje się niebieski.

**Wniosek:** w spalinach jest **H₂O** (z wodoru metanu) i **CO₂** (z węgla metanu) — spalanie całkowite. Sadza występuje tylko przy niedoborze tlenu (płomień żółty). Zauważ: zbyt długie przepuszczanie CO₂ do wody wapiennej prowadzi do rozpuszczenia osadu (Ca(HCO₃)₂), więc woda znów się klaruje — przerwij, gdy zmętnieje.

**Bezpieczeństwo:** metan z powietrzem tworzy mieszaninę wybuchową w pewnych proporcjach — pracować tylko z upływającym strumieniem z palnika (nigdy z gazem z butli wypuszczanym bez kontroli), w przewietrzanym pomieszczeniu, bez otwartego ognia poza płomieniem palnika; zlewkę chwytać szczypcami; sprawdzić szczelność połączeń.
:::

@klocek palnik-gazowy {etap="2"} | Doświadczenie 1 po obserwacjach: krople H₂O na zlewce odwróconej, sucha zlewka kontrolna, woda wapienna mętnieje
@opis Płomień palnika z metanem stoi pod zlewką odwróconą (dnem do góry). Na jej wewnętrznej kopule są krople wody; zlewka kontrolna obok płomienia jest sucha. Rurka od zlewki odwróconej prowadzi gaz do probówki z wodą wapienną, która jest mętna. Wniosek: w spalinach są H₂O i CO₂ — spalanie całkowite metanu.

## 6 | Zadania {#zadania}

::: karta exam | Zadanie 1 (4 pkt) — Szereg homologiczny od metanu do pentanu
(a) Podaj wzór ogólny alkanów i wyjaśnij jednym zdaniem, skąd bierze się liczba wodorów 2n + 2. (b) Zapisz wzory i nazwy alkanów C1–C5. (c) Uzasadnij jednym zdaniem, że te pięć związków tworzy szereg homologiczny. (d) Wskaż, które z nich są gazami w warunkach pokojowych.
:::

::: odp | Pokaż klucz
(a) CₙH₂ₙ₊₂; każdy z n węgli łańcucha oddaje jedno wiązanie na sąsiada (n − 1 wiązań C–C), więc na wodory zostaje 4n − 2(n − 1) = 2n + 2 (1 pkt). (b) CH₄ metan, C₂H₆ etan, C₃H₈ propan, C₄H₁₀ butan, C₅H₁₂ pentan (1 pkt). (c) Sąsiednie wzory różnią się o stały krok CH₂, a związki mają podobną budowę (pojedyncze wiązania) i własności (1 pkt). (d) Gazy: metan, etan, propan, butan (C1–C4); n-pentan już cieczą (1 pkt).
:::

::: karta exam | Zadanie 2 (4 pkt) — Spalanie propanu: równanie i stechiometria
Propan używany jest w palnikach turystycznych. (a) Zbilansuj równanie spalania całkowitego propanu. (b) Oblicz, ile moli O₂ potrzeba do spalania 11 g propanu (M = 44 g/mol). (c) Oblicz masę powstałego CO₂. (d) Oblicz objętość zużytego O₂ w warunkach normalnych (22,4 dm³/mol).
:::

::: odp | Pokaż klucz
(a) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (1 pkt; bilans O: 10 = 10). (b) n(C₃H₈) = 11 g / 44 g/mol = 0,25 mol; z równania 1 mol propanu potrzebuje 5 mol O₂ → n(O₂) = 0,25 · 5 = **1,25 mol** (1 pkt). (c) n(CO₂) = 0,25 · 3 = 0,75 mol; m = 0,75 · 44 = **33 g** (1 pkt). (d) V(O₂) = 1,25 · 22,4 = **28 dm³** (1 pkt).
:::

::: karta exam | Zadanie 3 (5 pkt) — Halogenowanie metanu: warunki i produkty
(a) Zapisz równanie reakcji metanu z chlorem ze wskazaniem warunku. (b) Nazwij typ reakcji i wyjaśnij jednozdaniowo, co dokładnie się podstawia. (c) Zapisz wzory wszystkich czterech produktów chlorowania metanu (od CH₃Cl do CCl₄) i podaj ich nazwy. (d) Dlaczego jeden przebieg reakcji nie da czystego CH₃Cl?
:::

::: odp | Pokaż klucz
(a) CH₄ + Cl₂ →(światło) CH₃Cl + HCl; warunek: światło dzienne/UV (1 pkt). (b) Substytucja: atom H w cząsteczce metanu zostaje zastąpiony atomem Cl, a odłączony H tworzy z drugim Cl cząsteczkę HCl (1 pkt). (c) CH₃Cl chlorometan, CH₂Cl₂ dichlorometan, CHCl₃ trichlorometan (chloroform), CCl₄ tetrachlorometan — 2 pkt: 4 poprawne wzory z nazwami = 2 pkt; 2–3 poprawne = 1 pkt. (d) CH₃Cl jest chloropochodną metanu; nadal ma wiązania C–H, więc sam podlega substytucji — reakcja biegnie dalej do CH₂Cl₂, CHCl₃ i CCl₄, więc powstaje mieszanina (1 pkt).
:::

::: karta exam | Zadanie 4 (4 pkt) — Izomeria butanu i pentanu
(a) Zdefiniuj izomery. (b) Narysuj/zapisz oba izomery butanu (C₄H₁₀) i podaj ich nazwy. (c) Ile izomerów ma pentan? Zapisz ich skrócone wzory. (d) Czy n-butan i izobutan różnią się masą molową? Uzasadnij.
:::

::: odp | Pokaż klucz
(a) Związki o tym samym wzorze sumarycznym, ale różnej budowie cząsteczek (1 pkt). (b) n-butan CH₃–CH₂–CH₂–CH₃; izobutan (2-metylopropan) CH₃–CH(CH₃)–CH₃ (1 pkt). (c) Trzy: n-pentan CH₃–CH₂–CH₂–CH₂–CH₃; izopentan CH₃–CH(CH₃)–CH₂–CH₃; neopentan C(CH₃)₄ (1 pkt). (d) Nie — oba mają wzór C₄H₁₀, więc M = 58 g/mol; różni je budowa, nie skład (1 pkt).
:::

## 7 | Zadania konkursowe {#zadania-adv}

::: adv | Zadanie 5 (6 pkt) — Znajdź oba błędy i napraw równanie | poziom ambitny
Uczeń napisał: „Etan reaguje z chlorem na świetle zgodnie z równaniem C₂H₆ + Cl₂ → C₂H₆Cl₂. Warunek światła jest potrzebny, bo alkan musi się rozgrzać." Rozstrzygnij:
(a) Czy produkt jest możliwy dla alkana? Wykaż odwołaniem do budowy (rodzaj wiązań) i podaj właściwy typ reakcji.
(b) Zapisz poprawne równanie reakcji etanu z chlorem i zbilansuj je.
(c) Oceń drugą część uzasadnienia ucznia (warunek światła) — co jest nie tak i dlaczego światło działa?
(d) Podaj wzór produktu dwukrotnego podstawienia w etanie i jego nazwę.
:::

::: odp | Pokaż klucz
(a) Nie — w etanie wszystkie wiązania węgla są pojedyncze, nie ma czego „dodać"; zapis C₂H₆Cl₂ przez addycję jest niemożliwy. Właściwy typ: **substytucja** (2 pkt: 1 za odwołanie do pojedynczych wiązań, 1 za nazwę typu). (b) C₂H₆ + Cl₂ →(światło) C₂H₅Cl + HCl — chloroetan i chlorowodór (1,5 pkt: 1 równanie, 0,5 produkty nazwane lub zbilansowane). (c) Światło nie „rozgrzewa" — inicjuje reakcję rozbijając cząsteczki Cl₂ na reaktywne atomy chloru; stąd próba kontrolna w ciemności: brak reakcji (1,5 pkt). (d) C₂H₄Cl₂ — dichloroetan; istnieją dwa izomery: 1,1-dichloroetan i 1,2-dichloroetan (1 pkt).
:::

::: adv | Zadanie 6 (7 pkt) — Butan w turystycznym palniku: objętości, powietrze, bilans | poziom ambitny
W palniku spalono **10 dm³ butanu** (warunki normalne; Vₘ = 22,4 dm³/mol). Równanie spalania: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. Powietrze zawiera 21% objętościowo O₂ i 79% N₂ (dla uproszczenia; patrz N01).
(a) Oblicz objętość O₂ potrzebną do całkowitego spalania (gaz–gaz: stosunki objętościowe równe stosunkom współczynników).
(b) Oblicz objętość powietrza zawierającego tyle tlenu.
(c) Oblicz objętość i masę powstałego CO₂.
(d) Uczeń podsumował: „łącznie z palnika wyszło 65 dm³ spalin gazowych". Sprawdź — czy się myli, i o ile (załóż, że para wodna skropliła się, a N₂ powietrza przeszedł bez zmian; policz N₂ z powietrza z punktu (b)).
:::

::: odp | Pokaż klucz
(a) Ze stosunku 2 : 13 na 10 dm³ butanu: V(O₂) = 10 · 13/2 = **65 dm³** (1,5 pkt). (b) 65/0,21 ≈ **310 dm³ powietrza** (1 pkt; dokładnie 309,5). (c) V(CO₂) = 10 · 8/2 = **40 dm³** (1 pkt); n(CO₂) = 40/22,4 ≈ 1,79 mol; m = 1,79 · 44 ≈ **78,6 g** (1 pkt; dopuszczalne 40/22,4 = 1,786 mol → 78,6 g). (d) Uczeń pominął azot: z 309,5 dm³ powietrza N₂ ≈ 309,5 · 0,79 ≈ **244,5 dm³** (1 pkt). Spaliny gazowe = CO₂ 40 + N₂ ≈ 244,5 = **ok. 284,5 dm³**; uczeń zaniżył wynik o ok. 219,5 dm³ (1 pkt: suma spalin). Wskazanie, że 65 dm³ to objętość zużytego O₂, a nie spalin (0,5 pkt). Razem (d): 2,5 pkt.
:::

::: adv | Zadanie A (E8, 3 pkt) — Który to alkan?
Masa molowa pewnego alkanu wynosi 58 g/mol. (a) Wykaż, że masę molową alkanu można zapisać wyrażeniem 14n + 2. (b) Ustal wzór alkanu. (c) Zapisz wzory półstrukturalne wszystkich jego izomerów.
:::

::: odp | Pokaż klucz
(a) M = 12n + (2n + 2) · 1 = 14n + 2 (1 pkt). (b) 14n + 2 = 58 → n = 4 → C₄H₁₀ (1 pkt). (c) CH₃–CH₂–CH₂–CH₃ oraz CH₃–CH(CH₃)–CH₃ (1 pkt).
:::

::: karta exam | Zadanie B (E8, 3 pkt) — Zawartość węgla
Oblicz zawartość procentową (w % masowych) węgla w metanie i w propanie. Który alkan jest bogatszy w węgiel? Jak to się łączy ze skłonnością do kopcenia przy spalaniu?
:::

::: odp | Pokaż klucz
Metan: 12/16 · 100% = 75%. Propan: 36/44 · 100% ≈ 81,8% (po 1 pkt). Bogatszy w węgiel: propan; im większa zawartość węgla, tym łatwiej przy niedoborze tlenu powstaje sadza (1 pkt).
:::

::: karta adv | Zadanie C (ambitny, 4 pkt) — Znajdź błąd w reakcji
Uczeń zapisał: „CH₄ + Cl₂ →(światło) CH₂Cl₂ + H₂". (a) Wskaż błąd i uzasadnij go. (b) Zapisz poprawne równanie otrzymywania dichlorometanu z metanu i chloru. (c) Ile moli Cl₂ potrzeba na przemianę 2 mol CH₄ w CH₂Cl₂?
:::

::: odp | Pokaż klucz
(a) Równanie jest zbilansowane, ale chemicznie błędne: w substytucji odłączony atom wodoru łączy się z atomem chloru i powstaje HCl, a nie H₂ (1 pkt); jedna cząsteczka Cl₂ wprowadza do związku tylko jeden atom Cl (drugi trafia do HCl), więc podstawienie dwóch atomów H wymaga dwóch cząsteczek Cl₂ (1 pkt). (b) CH₄ + 2Cl₂ →(światło) CH₂Cl₂ + 2HCl (1 pkt). (c) 4 mol Cl₂ (1 pkt).
:::

::: karta adv | Zadanie D (konkursowy, 5 pkt) — Mieszanina metanu i etanu
Spalono 1 dm³ mieszaniny metanu i etanu (objętości wszystkich gazów mierzono w tych samych warunkach). Powstało 1,6 dm³ CO₂. (a) Wyznacz skład objętościowy mieszaniny. (b) Oblicz objętość zużytego tlenu. (c) Wyjaśnij, dlaczego do tych obliczeń nie potrzeba masy molowej ani 22,4 dm³/mol.
:::

::: odp | Pokaż klucz
(a) Niech x = V(CH₄) w dm³; V(C₂H₆) = 1 − x. CO₂: x + 2(1 − x) = 2 − x = 1,6 → x = 0,4 dm³ metanu (40%), 0,6 dm³ etanu (60%) (2 pkt). (b) O₂: 0,4 · 2 + 0,6 · 3,5 = 0,8 + 2,1 = 2,9 dm³ (2 pkt). (c) Dla gazów w tych samych warunkach stosunek objętości = stosunek współczynników (prawo Avogadra), więc rachunek można prowadzić w dm³ bez przeliczania na mole (1 pkt).
:::

::: karta adv | Zadanie E (E8/ambitny, 3 pkt) — Dlaczego czujnik gazu wisi tam, gdzie wisi?
Gęstość gazu względem powietrza można oszacować z jego masy molowej (M powietrza ≈ 29 g/mol). (a) Oblicz stosunek M gazu do M powietrza dla metanu i propanu. (b) Wskaż, gdzie umieścisz czujnik wykrywający wyciek gazu ziemnego (głównie metan), a gdzie wyciek gazu w butli (propan-butan). (c) Uzasadnij.
:::

::: odp | Pokaż klucz
(a) Metan: 16/29 ≈ 0,55; propan: 44/29 ≈ 1,52 (1 pkt). (b) Czujnik metanu — wysoko, pod sufitem; czujnik propanu-butanu — nisko, przy podłodze (1 pkt). (c) Metan jest lżejszy od powietrza i unosi się w górę; propan i butan są cięższe od powietrza, gromadzą się przy podłodze, w zagłębieniach (1 pkt).
:::

## 8 | Fiszki

::: fiszki
Wzór ogólny alkanów? | CₙH₂ₙ₊₂ (n = liczba atomów węgla) | szereg
Wzory alkanów C1–C5? | CH₄, C₂H₆, C₃H₈, C₄H₁₀, C₅H₁₂ | szereg
Ile izomerów ma butan i pentan? | butan: 2 (n-, izo-); pentan: 3 (n-, izo-, neo-) | izomeria
Równanie całkowitego spalania metanu? | CH₄ + 2O₂ → CO₂ + 2H₂O | spalanie
Ile O₂ na 1 mol pentanu (spalanie)? | 8 mol (C₅H₁₂ + 8O₂ → 5CO₂ + 6H₂O) | spalanie
Produkty spalania niecałkowitego alkana? | CO i/lub sadza (C) + H₂O; żółty kopcący płomień | spalanie
Typ reakcji metanu z chlorem? | substytucja (podstawianie H przez Cl), warunek: światło | halogenowanie
Równanie halogenowania metanu? | CH₄ + Cl₂ →(światło) CH₃Cl + HCl | halogenowanie
Cztery produkty chlorowania metanu? | CH₃Cl, CH₂Cl₂, CHCl₃ (chloroform), CCl₄ | halogenowanie
Nazwa CCl₄? | tetrachlorometan (czterochlorek węgla) | halogenowanie
Które alkany są gazami (C1–C5)? | metan, etan, propan, butan; n-pentan — ciecz (neopentan wrze już ok. 9,5 °C) | własności
Metan lżejszy czy cięższy od powietrza? | lżejszy (M = 16 < 29); propan cięższy (M = 44 > 29) | własności
Co jest istotą szeregu homologicznego? | stały krok CH₂ między sąsiadami + podobna budowa i własności | szereg
Masa molowa butanu? | M = 4·12 + 10·1 = 58 g/mol | obliczenia
:::

## 9 | Test kontrolny

::: test

? Który wzór odpowiada pentanowi?
- C₅H₁₀
- C₄H₁₂
+ C₅H₁₂

? Halogenowanie metanu chlorem wymaga:
- wyłącznie wysokiego ciśnienia
+ światła (działającego na mieszaninę)
- obecności wody

? Zapis C₂H₆ + Cl₂ → C₂H₆Cl₂ jest błędny, ponieważ:
- etan nie reaguje z chlorem wcale
+ w etanie wszystkie wiązania są pojedyncze — możliwa jest tylko substytucja
- brakuje w nim katalizatora niklu

? Do całkowitego spalania 1 mol propanu potrzeba:
- 3 moli O₂
+ 5 moli O₂
- 10 moli O₂

? n-butan i izobutan to:
- ten sam związek pod dwiema nazwami
- homologi różniące się o CH₂
+ izomery — ten sam wzór sumaryczny, różna budowa łańcucha

? Który wzór należy do alkanu?
- C₂H₂
+ C₄H₁₀
- C₃H₆
! Wzór ogólny alkanu CₙH₂ₙ₊₂: dla n = 4 daje C₄H₁₀. C₃H₆ to propen, C₂H₂ — etyn.

? CH₃Cl jest:
- alkanem, bo powstaje z alkanu
+ pochodną chlorową alkanu, bo zawiera atom chloru
- izomerem metanu
! Alkany to węglowodory — zawierają tylko C i H. Atom Cl wyklucza CH₃Cl z grupy alkanów.
:::

## 10 | Słownik

::: slownik
węglowodór :: związek chemiczny zbudowany wyłącznie z węgla i wodoru.
alkan :: węglowodór łańcuchowy o wszystkich wiązaniach pojedynczych (C–C); związek nasycony, wzór CₙH₂ₙ₊₂.
szereg homologiczny :: rodzina związków o podobnej budowie i własnościach, w której sąsiednie wzory różnią się o stały krok CH₂.
substytucja :: reakcja, w której atom (tu: H) zostaje zastąpiony innym atomem (tu: Cl) bez zmiany szkieletu cząsteczki.
halogenowanie :: wprowadzanie atomu halogenu (Cl, Br) do cząsteczki; dla alkanów z warunkiem światła.
izomery :: związki o tym samym wzorze sumarycznym, lecz różnej budowie cząsteczek.
spalanie całkowite :: spalanie przy dobrym dostępie tlenu; produkty: CO₂ i H₂O, płomień niebieski.
spalanie niecałkowite :: spalanie przy niedoborze tlenu; produkty: CO i/lub sadza, płomień żółty kopcący.
chloroform :: trichlorometan CHCl₃ — historyczny narkotyk, dziś wycofany z użycia.
tetrachlorometan :: CCl₄ — produkt czterokrotnego podstawienia w metanie; dawniej do czyszczenia, dziś zakazany.
metan kopalniany :: metan wydzielający się ze złoża węgla (gaz kopalniany, ang. firedamp); mieszanina z powietrzem bywa wybuchowa.
biogaz :: mieszanina gazów z fermentacji materii organicznej, o znacznym udziale metanu (patrz LKO-ORG07).
:::

## Do weryfikacji


- **WIZUALIZACJA ORG01 (spalanie §2, doświadczenie §5): klocek `palnik-gazowy` dodany do §5 (etap 2 = stan końcowy). Etapy 0–1 i wizualizacja spalania §2 — do zrobienia.** Dawny opis braku: `palniki.js` to próba płomieniowa metali (barwy jonów w palniku), a nie palnik gazowy — nie nadaje się do tej lekcji. Potrzebny nowy klocek `palnik-gazowy`: płomień metanu, zlewka odwrócona nad płomieniem z kroplami wody, zlewka kontrolna obok, woda wapienna. Do zrobienia po zatwierdzeniu.
- **ORG01:** zakres wybuchowości metanu z powietrzem świadomie niepodany (literatura podaje różne przedziały) — w dosw i karcie o lampie Davy'ego tylko jakościowo.
- **ORG01:** N₂ przyjęty jako 79% (uproszczenie: 21% O₂ + 79% N₂ podane w treści zadania 6) — sprawdzić zgodność z N01, gdzie może być przyjęte 78%; w tym wariancie suma spalin wynosi 281,4 dm³.
- **ORG01:** adw 6c: 40/22,4 = 1,786 mol → 78,6 g (44 · 1,786 = 78,58) ✔.
- **ORG01:** zakładana pozycja kart `odp` jako siostrzanych po kartach zadań (jak w N01/REV01) — przy scalaniu dostosować, jeśli repo wymaga zagnieżdżenia.
- **ORG01:** „neopentan = 2,2-dimetylopropan" — nazwa zwyczajowa i systematyczna zgodne; nazewnictwo podstawnikowe (metylo-) wykracza minimalnie poza etap I, tu tylko w nazwach izomerów — do decyzji autora.
- **ORG01:** nazwa „metan kopalniany" (zamiast gwarowego „grzyb") — do potwierdzenia przez autora.
- **ORG01:** karty ambitne (rodnik, czujnik gazu, biogaz w żwaczu) — zarys; przy scalaniu sprawdzić zgodność z poziomem wojewódzkim.

## AUDYT W1 — audyt 01 (2026-10-13)

Zastosowano wszystkie uwagi z audytu Perplexity (P1–P16, braki, typy zadań, poszerzenie horyzontu, ulepszenia U1–U9, zadania A–E, test).

- Błędy merytoryczne: HCl jako gaz i oleiste chloropochodne na ściankach (P1); CH₃Cl nie jest alkanem (P2); przykład ułamkowy zamieniony na etan 3,5 O₂ (P3); karta o izomerach zastąpiona U1 (P4); klucz (d) zadania 6 przeliczony z 79% N₂ (P5); punktacja (d) łącznie 2,5 pkt (P6); doświadczenie przepisane wg U2 z próbą kontrolną i bez „zakręcania" wodą wapienną (P7–P9); bezpieczeństwo mieszaniny CH₄ + Cl₂ (P10); zdanie o nadmiarze reagentów doprecyzowane (P11); n-pentan vs neopentan (P12); definicja alkanu jako łańcuchowych (P13); lampa Davy'ego bez tezy „uratowała" (P14); „grzyb" → metan kopalniany (P15); para wodna — woda jako ciecz w warunkach normalnych (P16).
- Językowe: wszystkie poprawki z sekcji „Językowe i redakcyjne" (w tym „kopcący", „podlegają", „reguła", „wodór", „te pięć związków", „o stały krok", „kolejnych dniach nauki" usunięte).
- Punktacja: zadanie 3 (exam) przeliczone na całe punkty; ułamki zostawione w zadaniach konkursowych (5, 6, C, D, E).
- Test: poprawna odpowiedź przestawiona w pięciu pytaniach; dodano dwa pytania (U9).
- Poprawione względem propozycji: suma spalin w zadaniu 6(d) to 284,5 dm³ (przy 79% N₂), a nie 282 dm³ (przy 78%, z poprzedniej wersji).
- Nieprzyjęte: brak odrzuceń. Do decyzji zostaje wariant 78% vs 79% N₂ (patrz „Do weryfikacji").
