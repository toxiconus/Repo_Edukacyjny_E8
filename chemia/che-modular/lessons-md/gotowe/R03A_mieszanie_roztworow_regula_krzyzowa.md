---
kod: R03A
uid: CHE.03.R03A.mieszanie_roztworow_regula_krzyzowa
tytul: Mieszanie roztworów i reguła krzyżowa
opis: bilans masy substancji rozpuszczonej · mieszanie dwóch i trzech roztworów · reguła krzyżowa i „huśtawka” · woda 0%, czysta substancja 100% · rozcieńczanie, zatężanie, dosypywanie · hydraty · substancja reagująca z wodą · objętość i gęstość · zadania konkursowe
kicker: R03A · ROZTWORY · POGŁĘBIENIE R03 · KONKURS I OLIMPIADA
lead: Gdy mieszasz dwa roztwory, dodają się masy roztworów i masy substancji — nigdy stężenia. Reguła krzyżowa to szybki skrót tego bilansu, ulubione narzędzie zadań konkursowych.
lead: Lekcja zakłada znajomość wzoru Cp = ms ÷ mr · 100% z lekcji R03 — dla porządku przypominamy go na początku.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:KONKURS]][[extra:AMBITNE]]
uwaga: Pogłębienie lekcji R03 (stężenie procentowe) — zakres R03 kanonu: mieszanie roztworów. Hydraty, substancje reagujące z wodą i gęstość — warstwa ambitna (etap rejonowy i wyżej). Materiał wyjściowy: lekcja Perplexity z 2026-10-11, sprawdzony i rozbudowany.
stopka: **CHEMIA R03A v1.0** · Mieszanie roztworów i reguła krzyżowa · 2026
stan: WYPEŁNIONY — Perplexity + Claude, 2026-10-11; do W1
---
::: minimum | Muszę umieć — 10 punktów
1. **Cp = ms ÷ mr · 100%**, gdzie **mr = ms + mw** (masa roztworu = masa substancji + masa wody).
2. Przekształcenia: **ms = Cp · mr ÷ 100%**, **mr = ms · 100% ÷ Cp**.
3. **Przy mieszaniu dodają się masy substancji i masy roztworów** — stężeń się nie dodaje: Cp₃ = (ms₁ + ms₂) ÷ (mr₁ + mr₂) · 100%.
4. Bilans: **m₁ · Cp₁ + m₂ · Cp₂ = (m₁ + m₂) · Cp₃** (m — masy roztworów).
5. Stężenie po zmieszaniu **zawsze leży między** stężeniami składników — bliżej tego, którego jest więcej.
6. **Reguła krzyżowa:** m₁ : m₂ = (Cp₃ − Cp₂) : (Cp₁ − Cp₃) — odejmuj po przekątnych, liczba należy do roztworu z przeciwnego rogu.
7. **Woda = 0%**, **czysta substancja = 100%** — dzięki temu rozcieńczanie i dosypywanie to też „mieszanie”.
8. **Rozcieńczanie i odparowanie** nie zmieniają ms: m₁ · Cp₁ = m₂ · Cp₂.
9. Reguła daje **stosunek mas (części)** — na gramy przeliczasz dopiero przez masę całości lub jednego składnika.
10. **Kontrola:** policz ms przed i po — musi się zgadzać.
:::

::: warstwy
- e8 | <b>Podstawa:</b> Cp, rozcieńczanie, zatężanie, mieszanie dwóch roztworów tej samej substancji
- understand | <b>Rozumienie:</b> skąd bierze się reguła krzyżowa (bilans), „huśtawka” stężeń, dlaczego wynik leży między składnikami
- contest | <b>Konkurs:</b> zadania odwrotne, trzy roztwory, dosypywanie substancji, roztwór nasycony, woda utleniona z perhydrolu
- extra | <b>Ambitne:</b> hydraty (CuSO₄·5H₂O), tlenek reagujący z wodą (Na₂O → NaOH), objętość i gęstość, nieaddytywność objętości
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
1. **[§0.2](#diagnoza)** — diagnoza.
2. **[§1](#przypomnienie)–[§2](#wyklad)** — przypomnienie Cp i wykład o mieszaniu.
3. **[§3](#krzyz)–[§5](#woda-substancja)** — reguła krzyżowa, przykłady, woda i czysta substancja; potem **[§10](#cwiczenia)** część A i B.
4. **[§7](#konkurs)** — zadania konkursowe, **[§9](#klinika)** — klinika błędów.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

::: karta understand
- **Najpierw bilans, potem skrót.** Każde zadanie z tej lekcji da się rozwiązać „na piechotę”: policz ms każdego roztworu, dodaj, podziel przez masę całości. Reguła krzyżowa to przyspieszenie — nie zastępuje zrozumienia.
- **Zawsze sprawdź przedział.** Zanim zaczniesz liczyć, oszacuj: wynik musi leżeć między stężeniami składników.
- **Pisz jednostki przy każdej liczbie** — „części”, „g”, „%”. Większość błędów w tym dziale to pomylenie części z gramami albo masy wody z masą roztworu.
- **Wracaj do zadań po kilku dniach.** Reguła krzyżowa łatwo się myli „na skróty” — utrwala ją dopiero kilkukrotne samodzielne rozwiązanie.
:::

## 0.2 | Diagnoza {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. W 185 g wody rozpuszczono 15 g soli. Jakie jest stężenie procentowe?
2. Ile gramów soli zawiera 250 g roztworu 8%?
3. Zmieszano 100 g roztworu 10% i 100 g roztworu 20%. Jakie jest stężenie? A gdyby roztworu 10% było 300 g?
4. Czy mieszając roztwory 20% i 5%, można otrzymać roztwór 25%?
5. Do roztworu dolano wody. Co się zmieniło: ms, mr, Cp?

::: odp | Pokaż klucz
1. mr = 200 g; Cp = 7,5%. · 2. 20 g. · 3. 15% (równe masy); przy 300 g roztworu 10%: (30 + 20) ÷ 400 · 100% = 12,5% — bliżej 10%, bo tego roztworu jest więcej. · 4. Nie — wynik musi leżeć między 5% a 20%. · 5. ms bez zmian, mr rośnie, Cp maleje.

**Interpretacja:** 0–2 — zacznij od [§1](#przypomnienie) i lekcji R03; 3–4 — przeczytaj [§2](#wyklad) uważnie; 5 — przejdź do [§3](#krzyz) i [§7](#konkurs).
:::
:::

**Pytanie przewodnie:** jak obliczyć, ile dwóch roztworów trzeba zmieszać, aby otrzymać roztwór o określonym stężeniu — i jak szybko sprawdzić, czy wynik ma sens?

## 1 | Przypomnienie: stężenie procentowe [[basic:E8]] {#przypomnienie}

Roztwór składa się z **substancji rozpuszczonej** (np. soli, cukru) i **rozpuszczalnika** (najczęściej wody).

| Oznaczenie | Znaczenie |
|---|---|
| ms | masa substancji rozpuszczonej |
| mw | masa rozpuszczalnika (wody) |
| mr | masa roztworu: **mr = ms + mw** |
| Cp | stężenie procentowe: **Cp = ms ÷ mr · 100%** |

**Stężenie 10%** znaczy: w każdych **100 g roztworu** jest 10 g substancji (a nie: 10 g w 100 g wody!). Przykład: 30 g soli w 200 g roztworu → Cp = 30 ÷ 200 · 100% = **15%**. A 20 g soli w 80 g wody → mr = 100 g → **20%**, nie 25%.

::: karta understand | W skrócie — dlaczego masa roztworu to suma?
Sól wsypana do wody nie znika — jej drobiny rozpraszają się między cząsteczkami wody. Jeśli nic nie wylejesz i nic nie odparuje, waga pokaże masę wody + masę soli. To prawo zachowania masy, to samo co w równaniach reakcji. Dlatego **mr = ms + mw** zawsze — nawet wtedy, gdy objętość roztworu nie jest sumą objętości (patrz ciekawostki).
:::

## 2 | Wykład — co się dzieje, gdy mieszamy roztwory {#wyklad}

Wyobraź sobie dwa dzbanki lemoniady. W pierwszym 100 g lemoniady bardzo słodkiej — 20%, czyli 20 g cukru. W drugim 200 g lemoniady ledwo słodkiej — 5%, czyli 10 g cukru. Wlewasz obie do jednej wazy. Co jest w wazie?

Cukier nie znika ani nie przybywa: **20 g + 10 g = 30 g cukru**. Lemoniady też tyle, ile wlałeś: **100 g + 200 g = 300 g**. Stężenie w wazie: 30 ÷ 300 · 100% = **10%**.

Zauważ dwie rzeczy. Po pierwsze, **nie** wyszło (20% + 5%) = 25% ani średnia (20% + 5%) ÷ 2 = 12,5%. Stężeń nie wolno dodawać ani uśredniać „na ślepo” — trzeba ważyć je masami. Po drugie, 10% leży **między** 5% a 20% i to **bliżej 5%** — bo słabej lemoniady było więcej. Tak jest zawsze: mieszanka nie może być słodsza od najsłodszego składnika ani mniej słodka od najmniej słodkiego, a „przeciąga” ją ten składnik, którego jest więcej.

To wszystko zapisuje jedno zdanie — **bilans masy substancji rozpuszczonej**:

::: regula
**m₁ · Cp₁ + m₂ · Cp₂ = (m₁ + m₂) · Cp₃**
(cukier z pierwszego dzbanka + cukier z drugiego = cukier w wazie; procenty możesz wpisywać jako zwykłe liczby, bo „÷ 100%” skraca się po obu stronach)
:::

Teraz odwróćmy pytanie — i to jest typowe zadanie konkursowe: **mamy roztwory 20% i 5%; w jakim stosunku je zmieszać, żeby dostać 10%?** Z bilansu:
m₁ · 20 + m₂ · 5 = (m₁ + m₂) · 10 → m₁ · 20 − m₁ · 10 = m₂ · 10 − m₂ · 5 → m₁ · 10 = m₂ · 5 → **m₁ : m₂ = 5 : 10 = 1 : 2**.

Spójrz, skąd wzięły się liczby: **5 = 10 − 5** (o ile docelowe przewyższa słabszy) i **10 = 20 − 10** (o ile mocniejszy przewyższa docelowe). I co ciekawe — różnica „przy słabszym” trafia do **mocniejszego**, i odwrotnie. To jest właśnie **reguła krzyżowa**: rachunek, który zawsze robi się tak samo, można więc zapisać jako schemat i liczyć w pamięci.

**Analogia huśtawki.** Połóż oś stężeń jak deskę huśtawki: na jednym końcu 5%, na drugim 20%, a podpórkę ustaw w 10%. Podpórka jest 5 „jednostek” od lewego końca i 10 od prawego. Żeby huśtawka była w równowadze, na krótszym ramieniu musi siedzieć **cięższy** — na końcu 5% (bliżej podpórki) potrzeba dwa razy więcej masy niż na końcu 20%. **Więcej bierzesz tego roztworu, który jest bliżej stężenia docelowego** — to cała intuicja reguły krzyżowej.

## 3 | Reguła krzyżowa krok po kroku [[basic:E8]] {#krzyz}

::: regula
Dla Cp₁ > Cp₃ > Cp₂ (mocniejszy, docelowy, słabszy):
**m₁ : m₂ = (Cp₃ − Cp₂) : (Cp₁ − Cp₃)**
:::

**Schemat krzyża** (odejmujemy po przekątnych, zawsze **większe minus mniejsze**):

| Roztwór | | Różnica po przekątnej | Należy do |
|---|---|---|---|
| **Cp₁** (mocniejszy, u góry) | ↘ | Cp₃ − Cp₂ | **roztworu Cp₁** (liczba w jego wierszu) |
| | **Cp₃** (pośrodku) | | |
| **Cp₂** (słabszy, na dole) | ↗ | Cp₁ − Cp₃ | **roztworu Cp₂** |

::: regula
**Algorytm (7 kroków):**
1. Sprawdź, czy Cp₃ leży **między** Cp₁ a Cp₂ — jeśli nie, zadanie jest sprzeczne albo coś źle odczytałeś.
2. Większe stężenie **u góry**, mniejsze **na dole**, docelowe **pośrodku**.
3. Odejmij **po przekątnych** (większe − mniejsze).
4. Liczbę z prawej strony wiersza przypisz roztworowi **z tego samego wiersza**.
5. **Skróć** stosunek (jak ułamek).
6. Przelicz **części na gramy** (masa całości ÷ suma części albo masa znanego składnika ÷ jego części).
7. **Sprawdź bilansem** ms — to zajmuje chwilę i wyłapuje pomylone przekątne.
:::

::: karta understand | W skrócie — co znaczą „części”?
Reguła krzyżowa daje **stosunek mas**, nie gramy. Stosunek 1 : 2 to równie dobrze 10 g i 20 g, 100 g i 200 g, 1 kg i 2 kg — każda para da 10%. Gramy pojawią się dopiero, gdy znasz **masę całości** (wtedy dzielisz ją na sumę części) albo **masę jednego składnika** (wtedy liczysz, ile gramów to jedna część). Pomylenie części z gramami to najczęstszy błąd w tym dziale.
:::

@klocek regula-krzyzowa | Reguła krzyżowa i huśtawka — wpisz stężenia, zobacz masy
@opis Interaktywny schemat: u góry pola na Cp₁ (mocniejszy), Cp₂ (słabszy, woda = 0%), Cp₃ (docelowy) i masę końcową oraz przyciski gotowych przykładów. Pod nimi krzyż: po lewej stężenia składników, pośrodku stężenie docelowe, dwie przecinające się kreski (czerwona i niebieska) prowadzą do różnic obliczonych po przekątnych, a przy każdej różnicy napis, do którego roztworu należy. Niżej „huśtawka”: pozioma deska od Cp₂ do Cp₁ z pomarańczową podpórką w Cp₃ i dwoma słupkami mas — wyższy słupek stoi na końcu bliższym podpórce. Pod rysunkiem: stosunek mas skrócony, masy w gramach i kontrola bilansem (ms obu składników, Cp mieszaniny). Gdy Cp₃ nie leży między składnikami, model wyświetla ostrzeżenie zamiast wyniku. Wniosek: masy roztworów są odwrotnie proporcjonalne do odległości ich stężeń od stężenia docelowego, a wynik zawsze da się sprawdzić bilansem substancji.

## 4 | Przykłady prowadzone [[basic:E8]] {#przyklady}

### Przykład 1 — 20% i 5% → 300 g roztworu 10%

| | | różnica | |
|---|---|---|---|
| 20% | | 10 − 5 = **5** cz. | → roztwór 20% |
| | **10%** | | |
| 5% | | 20 − 10 = **10** cz. | → roztwór 5% |

Stosunek 5 : 10 = **1 : 2**; suma 3 części; 1 część = 300 g ÷ 3 = 100 g → **100 g roztworu 20% i 200 g roztworu 5%**.
Kontrola: 20 g + 10 g = 30 g substancji w 300 g → 10% ✔.

### Przykład 2 — 30% i 10% → 400 g roztworu 20%

Różnice: 20 − 10 = 10 (dla 30%) i 30 − 20 = 10 (dla 10%) → **1 : 1** → po **200 g**. Gdy docelowe leży dokładnie pośrodku, bierzemy równe masy — i tylko wtedy wolno „uśrednić”.

### Przykład 3 — 40% i 5% → 900 g roztworu 20%

Różnice: 20 − 5 = 15 (dla 40%), 40 − 20 = 20 (dla 5%) → 15 : 20 = **3 : 4**; 1 część = 900 ÷ 7 ≈ 128,57 g → **≈ 385,7 g roztworu 40%** i **≈ 514,3 g roztworu 5%**.
Kontrola: 385,71 · 0,40 + 514,29 · 0,05 ≈ 154,29 + 25,71 = 180,00 g; 180 ÷ 900 · 100% = 20% ✔. Wyniki nie muszą być „okrągłe” — na konkursie podaj je z sensownym zaokrągleniem.

### Przykład 4 — znana masa jednego składnika

Ile gramów roztworu 5% trzeba dodać do 200 g roztworu 25%, aby otrzymać 10%?
Różnice: 10 − 5 = 5 (dla 25%), 25 − 10 = 15 (dla 5%) → 1 : 3. 200 g roztworu 25% to **1 część**, więc 1 część = 200 g → roztworu 5%: 3 · 200 = **600 g**.
Kontrola: 50 g + 30 g = 80 g w 800 g → 10% ✔.

### Przykład 5 — stosunek znany, szukamy stężenia

Zmieszano roztwory 40% i 10% w stosunku masowym 1 : 2. Jakie jest stężenie?
Weź 1 g i 2 g (części wystarczą): ms = 0,4 + 0,2 = 0,6 g w 3 g → **20%**. Tu reguła krzyżowa „od tyłu” jest zbędna — wystarczy bilans.

::: karta understand | W skrócie — pełny bilans zamiast krzyża
Z bilansu m₁ · Cp₁ + m₂ · Cp₂ = (m₁ + m₂) · Cp₃ po przeniesieniu wyrazów: m₁ · (Cp₁ − Cp₃) = m₂ · (Cp₃ − Cp₂), czyli **m₁ ÷ m₂ = (Cp₃ − Cp₂) ÷ (Cp₁ − Cp₃)** — dokładnie reguła krzyżowa. Krzyż nie jest więc osobnym „prawem chemii”, tylko gotowym wynikiem tego przekształcenia. Gdy zapomnisz, w którą stronę idą przekątne, wyprowadź go z bilansu w trzech linijkach.
:::

## 5 | Woda (0%) i czysta substancja (100%) [[basic:E8]] {#woda-substancja}

Dwie sztuczki, które zamieniają każde zadanie z R03 w zadanie z mieszania:
- **Dolewanie wody** = mieszanie z „roztworem 0%” (w wodzie nie ma substancji).
- **Dosypywanie substancji** = mieszanie z „roztworem 100%” (czysta substancja to sama substancja).

### Rozcieńczanie — dwa sposoby

Ile wody trzeba dodać do 200 g roztworu 30%, aby otrzymać 20%?
- **Bilans:** ms = 200 · 0,30 = 60 g (bez zmian) → mr₂ = 60 ÷ 0,20 = 300 g → wody 300 − 200 = **100 g**.
- **Krzyż:** 30% i 0% → 20%: różnice 20 − 0 = 20 (dla 30%) i 30 − 20 = 10 (dla wody) → **2 : 1** → 200 g to 2 części → woda = 1 część = **100 g** ✔.

### Zatężanie przez odparowanie

Ile wody odparować z 500 g roztworu 12%, aby otrzymać 20%? ms = 60 g → mr₂ = 60 ÷ 0,20 = 300 g → odparować **200 g**. Zasada rozcieńczania i odparowania: **m₁ · Cp₁ = m₂ · Cp₂** (masa substancji się nie zmienia).

### Dosypywanie substancji

Ile soli dosypać do 300 g roztworu 10%, aby otrzymać 25%?
Krzyż: 100% (sól) i 10% → 25%: różnice 25 − 10 = 15 (dla soli) i 100 − 25 = 75 (dla roztworu) → **1 : 5** → 300 g to 5 części → sól = 1 część = **60 g**.
Kontrola: (30 + 60) ÷ (300 + 60) · 100% = 90 ÷ 360 · 100% = 25% ✔. Uwaga: po dosypaniu rośnie **i** ms, **i** mr.

::: karta warning | BHP — kwas do wody, nie odwrotnie
Rozcieńczając stężone kwasy (zwłaszcza kwas siarkowy(VI)), **zawsze wlewaj kwas do wody** — powoli, mieszając. Rozcieńczanie wydziela dużo ciepła; gdy wlejesz wodę do kwasu, pierwsze krople mogą zawrzeć i wyrzucić kwas. Rymowanka: „Pamiętaj, chemiku młody, wlewaj zawsze kwas do wody”.
:::

## 6 | Kiedy reguły krzyżowej nie wolno używać wprost {#granice}

Reguła działa, gdy: mieszasz roztwory **tej samej substancji**, stężenia są **procentowe masowe**, masz **masy** roztworów i **nic nie reaguje**.

| Sytuacja | Co zrobić |
|---|---|
| podano **objętości** roztworów | przelicz na masy: **m = d · V** (potrzebna gęstość) |
| substancje **reagują** ze sobą (np. kwas + zasada) | najpierw równanie reakcji i obliczenia z równania (F17) |
| roztwory **różnych** substancji | liczyć osobno ms każdej substancji; stężenie każdej w masie całości |
| stężenia **molowe** | inne obliczenia (poziom liceum) |
| dosypana substancja **nie rozpuszcza się w całości** (roztwór nasycony) | sprawdź rozpuszczalność (R03) — nadmiar nie wchodzi do roztworu |
| rozpuszczamy **hydrat** lub substancję **reagującą z wodą** | patrz [§8](#ambitne) |

## 7 | Zadania konkursowe [[exam:KONKURS]] {#konkurs}

::: karta exam | Zadanie 1 (2 pkt) — woda utleniona z perhydrolu
Perhydrol to 30% roztwór nadtlenku wodoru, a woda utleniona z apteki — 3%. Ile gramów perhydrolu i ile wody potrzeba do przygotowania 300 g wody utlenionej?

::: odp | Pokaż rozwiązanie
Krzyż 30% i 0% → 3%: różnice 3 (dla perhydrolu) i 27 (dla wody) → 1 : 9 → 1 część = 30 g → **30 g perhydrolu i 270 g wody** (1 pkt stosunek, 1 pkt masy). Kontrola: 9 g H₂O₂ w 300 g → 3% ✔.
:::
:::

::: karta exam | Zadanie 2 (3 pkt) — trzy roztwory
Zmieszano 100 g roztworu 10%, 200 g roztworu 20% i 100 g wody. Oblicz stężenie końcowe.

::: odp | Pokaż rozwiązanie
ms = 10 + 40 + 0 = 50 g (1 pkt); mr = 400 g (1 pkt); Cp = 50 ÷ 400 · 100% = **12,5%** (1 pkt). Przy trzech składnikach krzyż nie wystarcza — liczy się bilans.
:::
:::

::: karta exam | Zadanie 3 (2 pkt) — znajdź błąd
Uczeń zmieszał 20 g roztworu 30% z 80 g wody i zapisał: Cp = 30% · 20% + 0% · 80% = 6%. Wynik jest dobry — czy rozwiązanie też?

::: odp | Pokaż rozwiązanie
Nie (1 pkt): pomnożył stężenia przez „procenty mas”, czyli przypadkiem użył udziałów 20 g i 80 g w 100 g całości. Zadziałało tylko dlatego, że suma mas wyniosła 100 g. Poprawnie: ms = 20 · 0,30 = 6 g; mr = 100 g; Cp = 6% (1 pkt). Przy 40 g + 80 g ten „sposób” dałby błędny wynik.
:::
:::

::: karta exam | Zadanie 4 (3 pkt) — roztwór nasycony
Rozpuszczalność NaCl w 20°C wynosi ok. 36 g w 100 g wody. a) Oblicz stężenie roztworu nasyconego. b) Ile wody trzeba dodać do 136 g tego roztworu, aby otrzymać 10%?

::: odp | Pokaż rozwiązanie
a) Cp = 36 ÷ 136 · 100% ≈ **26,5%** (1 pkt). b) ms = 36 g; mr₂ = 36 ÷ 0,10 = 360 g (1 pkt); wody 360 − 136 = **224 g** (1 pkt).
:::
:::

::: karta exam | Zadanie 5 (3 pkt) — objętość i gęstość
Stężony kwas solny ma stężenie 36% i gęstość 1,18 g/cm³. Ile gramów wody trzeba dodać do 100 cm³ tego kwasu, aby otrzymać roztwór 10%?

::: odp | Pokaż rozwiązanie
m = d · V = 1,18 · 100 = 118 g (1 pkt); ms = 118 · 0,36 = 42,48 g; mr₂ = 42,48 ÷ 0,10 = 424,8 g (1 pkt); wody 424,8 − 118 = **306,8 g** (1 pkt). Pamiętaj o BHP: kwas wlewamy do wody.
:::
:::

::: karta exam | Zadanie 6 (2 pkt) — odparowanie
Ile wody trzeba odparować z 600 g roztworu 10%, aby otrzymać 15%?

::: odp | Pokaż rozwiązanie
ms = 60 g → mr₂ = 60 ÷ 0,15 = 400 g → odparować **200 g** wody. Krzyżem nie da się tu „dodać” wody — odparowanie to odwrotność rozcieńczania, więc licz bilansem m₁ · Cp₁ = m₂ · Cp₂.
:::
:::

::: karta exam | Zadanie 7 (3 pkt) — mieszanie dwóch roztworów w danych proporcjach
Zmieszano 150 g roztworu cukru o nieznanym stężeniu z 50 g roztworu 40% i otrzymano roztwór 25%. Oblicz nieznane stężenie.

::: odp | Pokaż rozwiązanie
Bilans: 150 · x + 50 · 40 = 200 · 25 (1 pkt) → 150x + 2000 = 5000 → 150x = 3000 (1 pkt) → x = **20%** (1 pkt). Kontrola: 25% leży między 20% a 40%, bliżej 20% — bo tego roztworu jest więcej ✔.
:::
:::

::: karta exam | Zadanie 8 (2 pkt) — prawda czy fałsz
1. Mieszając roztwory 10% i 30%, można otrzymać roztwór 35%.
2. Reguła krzyżowa podaje od razu masy roztworów w gramach.
3. Przy dolewaniu wody masa substancji rozpuszczonej się nie zmienia.
4. Mieszając równe masy roztworów 10% i 30%, otrzymamy roztwór 20%.

::: odp | Pokaż klucz
1 F · 2 F (podaje stosunek mas) · 3 P · 4 P (równe masy — wtedy wynik to średnia). Po 0,5 pkt.
:::
:::

## 8 | Warstwa ambitna: hydraty, reakcja z wodą, objętości [[extra:AMBITNE]] {#ambitne}

::: adv | Hydrat — sól z wodą krystalizacyjną | etap rejonowy i wyżej
Niebieski siarczan(VI) miedzi(II) w słoiku to **hydrat CuSO₄·5H₂O** — w kryształach na każdą „cząsteczkę” CuSO₄ przypada 5 cząsteczek wody. Gdy go rozpuszczasz, ta woda przechodzi do roztworu i **zwiększa mw**, a substancją rozpuszczoną jest tylko CuSO₄.
Masy: CuSO₄ = 64 + 32 + 4 · 16 = 160 u; 5H₂O = 90 u; hydrat = 250 u. Hydrat zawiera więc 160 ÷ 250 · 100% = **64% CuSO₄** — można go traktować jak „roztwór 64%”.
Przykład: ile hydratu i wody potrzeba na 200 g roztworu 8% CuSO₄? ms = 16 g CuSO₄ → hydratu 16 · 250 ÷ 160 = **25 g**, wody 200 − 25 = **175 g**. Krzyżem: 64% i 0% → 8%: 8 : 56 = 1 : 7 → 25 g i 175 g ✔.
Typowy błąd: liczyć 16 g hydratu, jakby był bezwodny — wtedy roztwór miałby tylko 16 · 0,64 ≈ 10,2 g CuSO₄, czyli ok. 5%.
:::

::: adv | Substancja, która reaguje z wodą | etap rejonowy i wyżej
Gdy do wody wrzucasz **tlenek sodu**, w roztworze nie ma Na₂O, tylko NaOH: **Na₂O + H₂O → 2NaOH**. Substancją rozpuszczoną jest produkt reakcji — liczysz go z równania (lekcja F17).
Przykład: 6,2 g Na₂O rozpuszczono w 93,8 g wody. Masy: Na₂O = 62 u, 2NaOH = 80 u → z 6,2 g powstaje **8 g NaOH**. mr = 6,2 + 93,8 = 100 g (masa się nie zmienia — woda, która przereagowała, i tak jest w roztworze, tylko w NaOH). Cp(NaOH) = **8%**, choć wsypano tylko 6,2 g substancji. Podobnie SO₃ + H₂O → H₂SO₄ albo sód: 2Na + 2H₂O → 2NaOH + H₂↑ — wtedy uchodzący wodór **zmniejsza** mr.
:::

::: adv | Objętości się nie dodają | liceum
Masy roztworów zawsze się dodają, objętości — nie zawsze. 50 cm³ etanolu + 50 cm³ wody daje ok. 96–97 cm³ roztworu (dane orientacyjne): cząsteczki wody i alkoholu „upakowują się” ciaśniej niż każda ciecz osobno. Dlatego w zadaniach z objętościami przeliczamy wszystko na masy (m = d · V) i dopiero mieszamy.
:::

## 9 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| 20% + 5% = 25% | wynik między 5% a 20% | Stężeń się nie dodaje — dodaje się ms i mr. |
| „10% i 30% → zawsze 20%” | 20% tylko przy równych masach | Średnią zwykłą wolno liczyć wyłącznie dla równych mas; w ogólności średnia ważona masami. |
| Liczba z krzyża przypisana do roztworu z przeciwnego wiersza | liczba należy do roztworu ze **swojego** wiersza | Różnica przy słabszym (Cp₃ − Cp₂) trafia do mocniejszego. Sprawdź bilansem. |
| Części potraktowane jak gramy | części × (masa całości ÷ suma części) | Stosunek 1 : 2 nie znaczy „1 g i 2 g”. |
| Cp liczone na masę wody | Cp = ms ÷ **mr** | 10 g w 90 g wody to 10%, nie 11,1%. |
| Po dosypaniu soli: „mr bez zmian” | rośnie i ms, i mr | Dosypana sól też jest częścią roztworu. |
| Objętości dodane jak masy | m = d · V, potem bilans mas | Bez gęstości nie ma masy; objętości mogą się nie sumować. |
| Krzyż dla kwasu i zasady | najpierw reakcja (F17) | Substancje reagujące zmieniają się — bilans jednej substancji nie obowiązuje. |
| Hydrat liczony jak bezwodna sól | w hydracie tylko 64% to CuSO₄ | Woda krystalizacyjna przechodzi do rozpuszczalnika. |
| „Rozcieńczanie zmniejsza ilość substancji” | ms bez zmian | Dolewamy tylko wodę. |
| Dosypanie ponad rozpuszczalność | nadmiar zostaje na dnie | Roztwór nasycony nie przyjmie więcej substancji (R03). |
:::

## 10 | Ćwiczenia {#cwiczenia}

### A. Podstawy [[basic:E8]]

::: karta basic | A1–A6
1. Ile gramów roztworu 25% można otrzymać z 50 g substancji?
2. Zmieszano 50 g roztworu 8% i 150 g roztworu 4%. Oblicz Cp.
3. Do 150 g roztworu 24% dolano wodę i otrzymano 12%. Ile wody dolano?
4. Ile wody trzeba dodać do 80 g roztworu 25%, aby otrzymać 10%?
5. Do 200 g roztworu 15% dosypano 50 g substancji (całkowicie się rozpuściła). Oblicz Cp.
6. Z 250 g roztworu 6% odparowano 100 g wody. Oblicz Cp.

::: odp | Pokaż klucz
1. 50 · 100 ÷ 25 = **200 g**. · 2. ms = 4 + 6 = 10 g; mr = 200 g → **5%**. · 3. ms = 36 g → mr₂ = 300 g → **150 g** wody. · 4. ms = 20 g → mr₂ = 200 g → **120 g** wody (krzyż 25 i 0 → 10: 10 : 15 = 2 : 3; 80 g = 2 cz. → woda 3 cz. = 120 g). · 5. ms = 30 + 50 = 80 g; mr = 250 g → **32%** (krzyż 100 i 15 → 32: 17 : 68 = 1 : 4 ✔). · 6. ms = 15 g; mr = 150 g → **10%**.
:::
:::

### B. Reguła krzyżowa [[basic:E8]]

::: karta basic | B1–B5
1. W jakim stosunku masowym zmieszać roztwory 50% i 10%, aby otrzymać 20%?
2. Ile gramów roztworu 60% i ile wody potrzeba na 600 g roztworu 15%?
3. Ile gramów roztworu 2% dodać do 100 g roztworu 12%, aby otrzymać 5%?
4. Ile soli dosypać do 400 g roztworu 5%, aby otrzymać 24%?
5. Zmieszano 300 g roztworu 10% i 100 g roztworu 50%. Oblicz Cp i sprawdź „huśtawką”, do którego składnika wynik jest bliżej.

::: odp | Pokaż klucz
1. 50%: 20 − 10 = 10; 10%: 50 − 20 = 30 → **1 : 3**. · 2. 60% i 0% → 15%: 15 : 45 = 1 : 3 → **150 g roztworu 60% i 450 g wody**. · 3. 12%: 5 − 2 = 3; 2%: 12 − 5 = 7 → 3 : 7; 100 g = 3 cz. → 1 cz. ≈ 33,33 g → roztworu 2%: **≈ 233,3 g** (kontrola: 12 + 4,67 = 16,67 g w 333,3 g → 5% ✔). · 4. 100% i 5% → 24%: 19 : 76 = 1 : 4; 400 g = 4 cz. → sól **100 g** (kontrola: 120 ÷ 500 = 24% ✔). · 5. ms = 30 + 50 = 80 g; mr = 400 g → **20%** — bliżej 10%, bo roztworu 10% jest 3 razy więcej (odległości 10 i 30 w stosunku 1 : 3).
:::
:::

### C. Konkursowe i ambitne [[exam:KONKURS]]

::: karta exam | C1–C4
1. Ile gramów CuSO₄·5H₂O i wody trzeba użyć, aby otrzymać 500 g roztworu 16% CuSO₄?
2. W 87,6 g wody rozpuszczono 12,4 g tlenku sodu. Oblicz stężenie NaOH. (Na = 23, O = 16, H = 1)
3. Ile cm³ roztworu 20% (gęstość 1,1 g/cm³) potrzeba, aby po rozcieńczeniu wodą otrzymać 440 g roztworu 5%?
4. Z 400 g roztworu 10% odparowano część wody, a potem dosypano 20 g substancji i otrzymano 300 g roztworu. Oblicz Cp końcowe i masę odparowanej wody.

::: odp | Pokaż klucz
1. ms = 80 g CuSO₄ → hydratu 80 · 250 ÷ 160 = **125 g**, wody **375 g** (krzyż 64 i 0 → 16: 16 : 48 = 1 : 3 ✔).
2. Na₂O + H₂O → 2NaOH; 62 g → 80 g, więc 12,4 g → 16 g NaOH; mr = 100 g → **16%**.
3. ms = 440 · 0,05 = 22 g → roztworu 20%: 22 ÷ 0,20 = 110 g → V = m ÷ d = 110 ÷ 1,1 = **100 cm³**.
4. ms = 40 + 20 = 60 g w 300 g → **20%**; masa przed dosypaniem = 300 − 20 = 280 g → odparowano 400 − 280 = **120 g** wody.
:::
:::

## 11 | Ciekawostki {#ciekawostki}

::: karta extra | Kwadrat Pearsona w mleczarni i paszarni
Reguła krzyżowa w krajach anglojęzycznych nazywa się **kwadratem Pearsona** (Pearson square). Mleczarnie używają jej, by ze śmietanki i mleka chudego otrzymać mleko o dokładnie ustalonej zawartości tłuszczu (np. 3,2%), a hodowcy — by z dwóch pasz o różnej zawartości białka przygotować mieszankę o zadanym procencie białka. To ten sam rachunek co w tej lekcji: „stężeniem” jest procent tłuszczu albo białka.
:::

::: karta extra | Sól fizjologiczna i morza
Sól fizjologiczna, podawana w kroplówkach, to roztwór **0,9%** NaCl — ma podobne stężenie soli jak płyny ustrojowe, więc nie niszczy krwinek. Woda oceaniczna zawiera średnio ok. **3,5%** soli, Bałtyk tylko kilka promili, a Morze Martwe ok. **34%** (dane orientacyjne) — dlatego unosi człowieka jak dmuchany materac.
:::

::: karta extra | Woda utleniona i perhydrol
Apteczna woda utleniona to 3% roztwór nadtlenku wodoru. Perhydrol (30%) jest dziesięć razy mocniejszy i parzy skórę — rozcieńcza się go w proporcji 1 : 9. Fryzjerzy używają do rozjaśniania włosów roztworów pośrednich, np. 6–12%, przygotowanych dokładnie tym rachunkiem.
:::

::: karta extra | Akumulator samochodowy
Elektrolitem w klasycznym akumulatorze ołowiowym jest kwas siarkowy(VI) o stężeniu ok. 35–37% (orientacyjnie). Podczas rozładowania kwas zużywa się w reakcji i stężenie maleje — dlatego dawniej stan naładowania sprawdzało się, mierząc gęstość elektrolitu areometrem.
:::

::: karta extra | 50 + 50 ≠ 100
Zmieszaj 50 cm³ spirytusu z 50 cm³ wody — otrzymasz wyraźnie mniej niż 100 cm³ (ok. 96–97 cm³). Masa za to zgadza się co do grama. To dobry argument, dlaczego chemicy liczą stężenia procentowe **masowo**, a nie objętościowo.
:::

## 12 | Sposoby pamięciowe {#mnemotechniki}

::: wskazowki
- **„Dodaję gramy, nie procenty.”** ms do ms, mr do mr — stężenie liczę na końcu.
- **„Wynik w środku”** — mieszanka zawsze między składnikami; bliżej tego, którego więcej.
- **„Krzyż: większe minus mniejsze, po skosie”** — a liczba zostaje w **swoim** wierszu.
- **„Huśtawka”:** bliżej podpórki siedzi ten, kogo więcej — więcej bierzesz roztworu bliższego stężeniu docelowemu.
- **„Woda zero, sól sto.”** Dolewanie wody i dosypywanie substancji to też mieszanie.
- **„Części to nie gramy.”** Najpierw części, potem 1 część = całość ÷ suma części.
- **„Kwas do wody.”** Pamiętaj, chemiku młody, wlewaj zawsze kwas do wody.
- **„Hydrat to roztwór 64%”** — dla CuSO₄·5H₂O.
:::

## 13 | Test końcowy {#test}

::: test
? Zmieszano 100 g roztworu 20% i 200 g roztworu 5%. Stężenie końcowe wynosi:
- 25%
- 12,5%
+ 10%
- 15%
! ms = 20 + 10 = 30 g; mr = 300 g.

? Z roztworów 20% i 5% NIE da się otrzymać roztworu:
- 6%
- 12%
- 19%
+ 22%
! Wynik musi leżeć między 5% a 20%.

? Reguła krzyżowa dla 30% i 10% → 15% daje stosunek m(30%) : m(10%):
+ 1 : 3
- 3 : 1
- 1 : 2
- 2 : 1
! 15 − 10 = 5 (dla 30%), 30 − 15 = 15 (dla 10%) → 5 : 15 = 1 : 3.

? Woda w regule krzyżowej to roztwór o stężeniu:
+ 0%
- 100%
- 1%
- zależnym od temperatury
! W wodzie nie ma substancji rozpuszczonej.

? Ile wody trzeba dodać do 100 g roztworu 40%, aby otrzymać 10%?
- 100 g
- 200 g
+ 300 g
- 400 g
! ms = 40 g → mr₂ = 400 g → wody 300 g.

? Po dosypaniu soli do roztworu:
- rośnie tylko ms
- rośnie tylko mr
+ rosną ms i mr, rośnie Cp
- ms rośnie, a mr maleje
! Dosypana sól jest i substancją, i częścią roztworu.

? Mieszając równe masy roztworów 12% i 28%, otrzymamy:
- 16%
+ 20%
- 24%
- 40%
! Przy równych masach — średnia: (12 + 28) ÷ 2.

? Reguła krzyżowa daje:
- masy roztworów w gramach
+ stosunek mas roztworów
- objętości roztworów
- stężenie końcowe
! Gramy liczy się dopiero z masy całości lub jednego składnika.

? Ile procent CuSO₄ zawiera hydrat CuSO₄·5H₂O? (CuSO₄ = 160 u, H₂O = 18 u)
- 36%
+ 64%
- 50%
- 100%
! 160 ÷ 250 · 100% = 64%.

? Gdy podano objętości roztworów, przed użyciem reguły krzyżowej trzeba:
- dodać objętości
+ przeliczyć je na masy (m = d · V)
- pomnożyć je przez stężenia
- nic — reguła działa na objętościach
! Stężenie procentowe jest masowe; potrzebna gęstość.
:::

## 14 | Fiszki {#fiszki}

::: fiszki
Cp | ms ÷ mr · 100% | basic:roztwory
mr | ms + mw | basic:roztwory
Mieszanie — co się dodaje? | masy substancji i masy roztworów (nie stężenia!) | basic:mieszanie
Bilans mieszania | m₁·Cp₁ + m₂·Cp₂ = (m₁ + m₂)·Cp₃ | basic:mieszanie
Reguła krzyżowa | m₁ : m₂ = (Cp₃ − Cp₂) : (Cp₁ − Cp₃) | exam:konkurs
Gdzie leży wynik? | między stężeniami składników, bliżej tego, którego więcej | basic:mieszanie
Woda / czysta substancja | 0% / 100% | basic:mieszanie
Rozcieńczanie i odparowanie | m₁·Cp₁ = m₂·Cp₂ (ms stała) | basic:mieszanie
Części → gramy | 1 część = masa całości ÷ suma części | basic:mieszanie
Huśtawka stężeń | masy odwrotnie proporcjonalne do odległości od Cp₃ | understand:rozumienie
Objętość → masa | m = d · V | extra:ambitne
Hydrat CuSO₄·5H₂O | 64% CuSO₄ | extra:ambitne
Na₂O w wodzie | Na₂O + H₂O → 2NaOH — liczymy Cp NaOH | extra:ambitne
BHP rozcieńczania kwasu | kwas do wody | basic:bhp
Sól fizjologiczna | 0,9% NaCl | basic:roztwory
:::

## 15 | Słownik {#slownik}

::: slownik
Stężenie procentowe :: liczba gramów substancji rozpuszczonej w 100 g roztworu
Rozcieńczanie :: zmniejszanie stężenia przez dodanie rozpuszczalnika
Zatężanie :: zwiększanie stężenia przez odparowanie rozpuszczalnika lub dodanie substancji
Bilans substancji :: równanie mówiące, że masa substancji rozpuszczonej przed zmieszaniem równa się masie po zmieszaniu
Reguła krzyżowa :: skrócony sposób obliczania stosunku mas dwóch mieszanych roztworów (kwadrat Pearsona)
Hydrat :: związek zawierający w kryształach wodę krystalizacyjną, np. CuSO₄·5H₂O
Woda krystalizacyjna :: woda związana w kryształach soli, uwalniana przy rozpuszczaniu lub prażeniu
Gęstość :: masa jednostki objętości, d = m ÷ V
Perhydrol :: 30% roztwór nadtlenku wodoru
:::

## 16 | Ściąga {#sciaga}

::: karta core
- Cp = ms ÷ mr · 100% · mr = ms + mw · ms = Cp · mr ÷ 100%.
- **Mieszanie:** dodaj ms i mr; Cp₃ = Σms ÷ Σmr · 100%; wynik między składnikami.
- **Krzyż:** mocniejszy u góry, słabszy na dole, docelowy pośrodku; odejmij po skosie (większe − mniejsze); liczba należy do swojego wiersza; skróć; przelicz części na gramy; sprawdź bilansem.
- **Woda = 0%, substancja = 100%.** Rozcieńczanie i odparowanie: m₁·Cp₁ = m₂·Cp₂.
- Objętości → masy (m = d · V). Reakcja → najpierw równanie (F17). Hydrat → licz tylko sól bezwodną.
:::

::: checklista
- [ ] obliczam Cp, ms i mr i odróżniam masę roztworu od masy wody
- [ ] mieszam dwa i trzy roztwory bilansem
- [ ] stosuję regułę krzyżową i przeliczam części na gramy
- [ ] traktuję wodę jako 0%, a czystą substancję jako 100%
- [ ] rozcieńczam i zatężam roztwory
- [ ] sprawdzam, czy wynik leży między stężeniami składników
- [ ] rozwiązuję zadanie bez krzyża, samym bilansem
- [ ] (ambitne) przeliczam objętość na masę, liczę hydraty i substancje reagujące z wodą
:::

## 17 | Co dalej? {#dalej}

- Wróć do [R03](#rdzen) — krzywe rozpuszczalności i roztwór nasycony łączą się z mieszaniem w zadaniach konkursowych.
- Obliczenia z równań reakcji — lekcja F17 (potrzebne przy Na₂O, SO₃ i reagujących roztworach).
- Stężenie molowe i mieszanie roztworów molowych — poziom liceum (R05).

## Pochodzenie i sprawdzenie treści {#audyt}

> Materiał wyjściowy: lekcja Perplexity „Mieszanie roztworów i reguła krzyżowa” (2026-10-11), zapis surowy `chemia/plany/audyty/W1_perplexity_R03A_regula_krzyzowa_2026-10-11.md`. Lekcja jeszcze nie przeszła W1 (pełnego audytu z promptem) — do paczki W1.

**Przyjęte (po sprawdzeniu rachunków):** wzory i oznaczenia, wykład z lemoniadą, reguła krzyżowa z wyprowadzeniem z bilansu, algorytm 7 kroków, przykłady 20% + 5%, rozcieńczanie i zatężanie, woda 0% i substancja 100%, lista sytuacji, gdy krzyża nie wolno stosować, mini-wykłady (wynik między stężeniami, „części”, masa roztworu jako suma), zadania 1–10 (rozdzielone między §4, §5, §7 i §10), pułapki egzaminacyjne (→ klinika), ściąga, karta samooceny (→ checklista).

**Poprawione względem propozycji:**
- Wzór z pierwszej odpowiedzi m₁ : m₂ = (Cp₂ − Cp₃) : (Cp₃ − Cp₁) daje dobry stosunek tylko przez dwie ujemne liczby — w lekcji zapis bez znaków ujemnych (Cp₃ − Cp₂) : (Cp₁ − Cp₃) i zasada „większe minus mniejsze”.
- W wykładzie różnice podano w kolejności myląco odwrotnej do stosunku — przepisane z wyjaśnieniem, która różnica należy do którego roztworu, plus analogia huśtawki.
- „Ciekawostki” 1–5 propozycji były w istocie pułapkami i wzorami — przeniesione do kliniki i ściągi; ciekawostki napisane od nowa (kwadrat Pearsona, sól fizjologiczna, perhydrol, akumulator, kontrakcja objętości).
- Przykład zatężania przez odparowanie rozwiązywany bilansem — krzyż nie opisuje odejmowania wody.

**Dodane (zakres konkursowy i olimpijski):** trzy roztwory, dosypywanie substancji krzyżem (100%), roztwór nasycony, objętość i gęstość, nieznane stężenie z bilansu, hydraty, substancja reagująca z wodą, BHP rozcieńczania kwasów, model `r03-krzyz-v01`.

**Nieprzyjęte:** schematy w blokach kodu (```text) — zastąpione tabelami, bo dialekt lekcji nie ma bloków kodu; numer „CHE.01R.06” z propozycji — w kanonie R06 to objętość molowa gazów, lekcja dostała kod R03A (pogłębienie R03).
