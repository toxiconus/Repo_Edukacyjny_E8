---
kod: N05
uid: CHE.02.N05.wodorki
tytul: Wodorki
opis: Wodorki jonowe, kowalencyjne i metaliczne · rola wodoru (H⁻ / H⁺) · amoniak, chlorowodór, siarkowodór · trendy
stan: W10 — GPT-6, 2026-10-09; korekty bezpieczeństwa i doprecyzowania danych, wymaga niezależnej recenzji chemicznej
kicker: N05 · MASTER LAB v1.0
lead: Związki wodoru z innymi pierwiastkami: wzory z wartościowości, nazwy, trzy typy wodorków i rola wodoru (−I albo +I), właściwości i temperatury wrzenia, zachowanie w wodzie (kwasy beztlenowe, amoniak), otrzymywanie, reakcje wodorków jonowych z wodą, wykrywanie gazów, BHP; dla ambitnych: trendy kwasowości, elektroliza LiH, synteza amoniaku, magazynowanie wodoru.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA N05 v1.0 MASTER LAB** · Wodorki · 2026
---
::: minimum | Muszę umieć na E8 — 10 faktów
1. **Wodorek** to związek wodoru z jednym innym pierwiastkiem: NaH, CaH₂, CH₄, NH₃, H₂O, H₂S, HCl.
2. **Wzór** układamy z wartościowości pierwiastka względem wodoru: grupy 1–2 → I–II, grupa 14 → IV, 15 → III, 16 → II, 17 → I (H zawsze I).
3. Dla wielu prostych wodorków grup **16–17** wodór zapisuje się **na początku** (H₂S, HCl), a dla wielu wodorków metali i grup 13–15 — **na końcu** (NaH, CH₄, NH₃). To reguła szkolna dla typowych przykładów, nie uniwersalny algorytm dla wszystkich związków wodoru.
4. **Nazwy:** wodorek + metal (wodorek sodu); dla niemetali nazwy zwyczajowe: metan, amoniak, woda, siarkowodór, chlorowodór.
5. **Wodorki metali aktywnych** (NaH, CaH₂) są **jonowe** — wodór jest w nich anionem **H⁻**, stopień utlenienia **−I**.
6. **Wodorki niemetali** (CH₄, NH₃, H₂O, H₂S, HCl) są **kowalencyjne** — wodór ma stopień utlenienia **+I**.
7. Wodorek jonowy + woda → **wodorotlenek + wodór**: CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑.
8. **Chlorowodór** i **siarkowodór** rozpuszczone w wodzie dają **kwasy beztlenowe** (kwas solny, kwas siarkowodorowy); **amoniak** daje roztwór **zasadowy**; **metan** nie rozpuszcza się i nie reaguje z wodą.
9. **Wykrywanie:** NH₃ — odpowiedni wilgotny papierek wskaźnikowy; HCl — w kontrolowanym pokazie biały dym NH₄Cl po kontakcie z amoniakiem; H₂S — specjalistyczny papierek z octanem ołowiu czernieje. **Nie identyfikuj gazów przez wąchanie.**
10. **BHP:** H₂S, NH₃ i HCl są trujące lub drażniące — tylko pod dygestorium; NaH i CaH₂ z wodą dają palny wodór.
:::

::: warstwy
- e8 | <b>E8:</b> definicja, wzory z wartościowości, nazwy, wodorki niemetali w wodzie (kwasy beztlenowe, amoniak), otrzymywanie, wykrywanie gazów, zastosowania, BHP
- understand | <b>Rozumienie:</b> trzy typy wodorków i rola wodoru (H⁻ / H⁺), elektroujemność, wiązania wodorowe i temperatury wrzenia, reakcja wodorku jonowego z wodą jako redoks
- extra | <b>Ambitne (LO):</b> trendy kwasowości w okresie i w grupie, elektroliza LiH, wodorki metaliczne i magazynowanie wodoru, synteza Habera–Boscha, metoda Ostwalda
- contest | <b>Ponad LO:</b> rozwijane bloki „poziom akademicki” — przycisk w nagłówku lekcji
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
1. **[§1](#definicja)–[§3](#nazwy)** — czym jest wodorek, jak ułożyć wzór z wartościowości i jak go nazwać.
2. **[§4](#budowa)** — trzy typy wodorków: dlaczego w NaH wodór jest „ujemny”, a w HCl „dodatni”.
3. **[§6](#woda)** — co się dzieje, gdy wodorek trafi do wody (kwas, zasada, wodór albo nic).
4. **[§7](#otrzymywanie)–[§8](#reakcje)** — otrzymywanie, najważniejsze reakcje i wykrywanie NH₃, HCl i H₂S.
5. **[§9](#zastosowania)–[§10](#bhp)** — ważne wodorki i bezpieczeństwo.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

::: karta understand
1. **Najpierw próbuj, potem patrz na odpowiedź.** Każde zadanie ma ukryte rozwiązanie.
2. **Mów na głos i rysuj.** „Sód oddaje elektron wodorowi” — narysuj strzałkę elektronu.
3. **Łącz z poprzednimi lekcjami.** HCl i H₂S znasz z N03 (kwasy beztlenowe), NH₃ i NH₄⁺ z N02 i N04.
4. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.

> **Zasada 80/20:** wzór z wartościowości · nazwy pięciu wodorków niemetali · wodorek jonowy + woda · zachowanie NH₃, HCl i H₂S w wodzie.
:::

## 0.2 | Cele lekcji i pytanie przewodnie [[basic:E8]] {#cele}

::: karta basic | Po tej lekcji potrafisz
- zdefiniować wodorek i odróżnić go od innych związków zawierających wodór ([§1](#definicja)),
- ułożyć wzór wodorku z wartościowości i zapisać go w dobrej kolejności ([§2](#wzory)),
- nazwać wodorki metali i najważniejsze wodorki niemetali ([§3](#nazwy)),
- rozpoznać typ wodorka i stopień utlenienia wodoru na podstawie elektroujemności ([§4](#budowa)),
- wyjaśnić, dlaczego woda, amoniak i fluorowodór mają „za wysokie” temperatury wrzenia ([§5](#wlasciwosci)),
- przewidzieć zachowanie wodorku w wodzie i zapisać odpowiednie równanie ([§6](#woda), [§8](#reakcje)),
- opisać otrzymywanie i wykrywanie NH₃, HCl i H₂S oraz zasady BHP ([§7](#otrzymywanie), [§10](#bhp)),
- (ambitnie) uzasadnić trendy kwasowości wodorków w okresie i w grupie ([§11](#trendy)).
:::

::: karta exam | Pytanie przewodnie
Porównajmy modelowo zachowanie NaH, CH₄, NH₃ i HCl wobec wody i wskaźników. Nie jest to instrukcja wykonania doświadczenia: NaH gwałtownie reaguje z wodą, a NH₃ i HCl są niebezpiecznymi gazami; realne doświadczenia wymagają oceny ryzyka i odpowiednich warunków laboratoryjnych. W modelu: wodorek jonowy wydziela H₂ i tworzy roztwór zasadowy; metan nie reaguje z wodą; amoniak tworzy roztwór zasadowy bez wydzielania H₂; chlorowodór tworzy roztwór kwasowy. **Dlaczego cztery „związki wodoru” zachowują się tak różnie?**

> Odpowiedź budujesz w [§4](#budowa) (rola wodoru), [§6](#woda) (wodorki w wodzie) i [§11](#trendy) (trendy); sprawdzasz ją w doświadczeniach ([§14](#doswiadczenia)).
:::

::: karta core | Model całej lekcji
**pierwiastek → wartościowość → wzór i nazwa → elektroujemność względem H → typ wodorku (jonowy / kowalencyjny / metaliczny) → rola wodoru (H⁻ albo H z +I) → zachowanie w wodzie i reakcje.** Sama obecność wodoru we wzorze nie mówi, jak związek się zachowa — decyduje partner wodoru.
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- wartościowość i układanie wzorów metodą W–K–S–K (lekcje fundamentów F00–F09),
- elektroujemność i rodzaje wiązań: jonowe, kowalencyjne niespolaryzowane i spolaryzowane,
- stopnie utlenienia (H zwykle +I, O zwykle −II),
- kwasy beztlenowe HCl i H₂S ([N03 Kwasy](#mosty)), wodorotlenki i odczyn zasadowy (N02), jon amonowy NH₄⁺ (N04).

> Jeżeli W–K–S–K i elektroujemność są jeszcze niepewne — wróć do fundamentów przed §2 i §4.

## 1 | Czym jest wodorek [[basic:E8]] {#definicja}

**Wodorek** to związek chemiczny wodoru z **jednym** innym pierwiastkiem. Ogólny wzór: E<sub>x</sub>H<sub>y</sub> albo H<sub>y</sub>E (E — pierwiastek).

::: karta basic | Przykłady wodorków
| Pierwiastek | Wodorek | Nazwa | Gdzie go spotkasz |
|---|---|---|---|
| Na (metal) | NaH | wodorek sodu | laboratorium — odczynnik |
| Ca (metal) | CaH₂ | wodorek wapnia | osuszanie, źródło wodoru |
| C | CH₄ | metan | gaz ziemny, biogaz |
| N | NH₃ | amoniak | nawozy, płyny do mycia szyb |
| O | H₂O | woda | wszędzie |
| S | H₂S | siarkowodór | zapach zgniłych jaj, wody siarczkowe |
| Cl | HCl | chlorowodór | kwas solny, sok żołądkowy |
:::

::: karta warning | Uwaga — nie każdy związek z wodorem jest wodorkiem
- **NaOH** zawiera H, ale składa się z **trzech** pierwiastków — to wodorotlenek (N02).
- **H₂SO₄** — kwas tlenowy (trzy pierwiastki), nie wodorek.
- **NH₄Cl** — sól amonowa (N, H, Cl).
- **C₂H₆, C₂H₄** — też związki tylko węgla i wodoru, ale omawia się je osobno jako **węglowodory** (chemia organiczna). Metan jest jednocześnie najprostszym wodorkiem węgla i najprostszym węglowodorem.

> W szkolnej systematyce **HCl** i **H₂S** poznajesz głównie jako kwasy beztlenowe. Jako gazy — przed rozpuszczeniem w wodzie — są wodorkami: chlorowodorem i siarkowodorem.
:::

@model n05-wodorki-v01 | Mapa wodorków: kliknij pierwiastek — wzór, nazwa, typ, rola wodoru | elektroujemność względem H, stan, t. wrzenia, zachowanie w wodzie
@opis Układ okresowy z klikalnymi pierwiastkami tworzącymi wodorki; po kliknięciu karta pokazuje wzór i nazwę wodorku, typ (jonowy albo kowalencyjny), rolę wodoru (H⁻ w wodorkach metali aktywnych, H⁺/δ+ w wodorkach niemetali), elektroujemność względem wodoru, stan skupienia, temperaturę wrzenia i zachowanie w wodzie. Wniosek: położenie pierwiastka w układzie decyduje o typie wodorku i o tym, czy w wodzie da odczyn zasadowy, czy kwasowy.

## 2 | Wzory wodorków — wartościowość względem wodoru [[basic:E8]] {#wzory}

Wodór jest zawsze **jednowartościowy**. Liczba atomów H we wzorze = wartościowość pierwiastka względem wodoru.

::: karta basic | Wartościowość względem wodoru — reguła grup
| Grupa | 1 | 2 | 13 | 14 | 15 | 16 | 17 |
|---|---|---|---|---|---|---|---|
| Wartościowość | I | II | III | IV | III | II | I |
| Przykład | NaH, LiH | CaH₂, MgH₂ | (BH₃ → B₂H₆) | CH₄, SiH₄ | NH₃, PH₃ | H₂O, H₂S | HF, HCl |

> Grupy 1–2: wartościowość = numer grupy. Grupy 15–17: wartościowość = **18 − numer grupy**. Grupa 14: IV.
:::

::: karta core | Kolejność zapisu
- **Grupy 16–17** (tlen, siarka, fluorowce): wodór **na początku** → H₂O, H₂S, HF, HCl, HBr, HI. To te wodorki, których roztwory są kwasowe lub obojętne.
- **Pozostałe** (metale, grupy 13–15): wodór **na końcu** → NaH, CaH₂, CH₄, SiH₄, NH₃, PH₃.
:::

::: karta basic | Przykład prowadzony — wodorek wapnia
1. Ca — grupa 2 → wartościowość **II**; H → **I**.
2. Krzyżujemy: Ca<sub>1</sub>H<sub>2</sub> → **CaH₂**.
3. Kontrola: 1 · II = 2 · I = 2 ✓.
4. Metal → H na końcu ✓.

**Spróbuj sam:** wodorek siarki (siarka w wodorku jest II-wartościowa).

::: odp | Pokaż rozwiązanie
S(II), H(I) → H₂S; grupa 16 → wodór na początku: **H₂S** (siarkowodór).
:::
:::

> Częsty błąd: „SH₂”. Zawartość jest ta sama, ale zapis niezgodny z umową — w grupach 16–17 H piszemy pierwszy.

## 3 | Nazwy wodorków [[basic:E8]] {#nazwy}

::: karta basic | Wodorki metali
Nazwa: **wodorek + nazwa metalu w dopełniaczu** — wodorek sodu (NaH), wodorek litu (LiH), wodorek wapnia (CaH₂), wodorek magnezu (MgH₂).
:::

::: karta basic | Wodorki niemetali — nazwy zwyczajowe (obowiązują na E8)
| Wzór | Nazwa szkolna | Inna nazwa (systematyczna) | Wodny roztwór |
|---|---|---|---|
| CH₄ | metan | — | nie powstaje (nierozpuszczalny) |
| NH₃ | amoniak | azan | woda amoniakalna — zasadowa |
| H₂O | woda | oksydan | — |
| H₂S | siarkowodór | sulfan | kwas siarkowodorowy |
| HF | fluorowodór | — | kwas fluorowodorowy |
| HCl | chlorowodór | chlorek wodoru | kwas chlorowodorowy (solny) |
| HBr | bromowodór | bromek wodoru | kwas bromowodorowy |
| HI | jodowodór | jodek wodoru | kwas jodowodorowy |
| PH₃ | fosforowodór | fosfan | — |
| SiH₄ | krzemowodór | silan | — |
:::

::: karta warning | Gaz czy roztwór? Dwie różne nazwy
**Chlorowodór** (HCl) to **gaz**. Po rozpuszczeniu w wodzie mamy **kwas chlorowodorowy** (solny) — roztwór jonów H₃O⁺ i Cl⁻. Tak samo: **siarkowodór** (gaz) → **kwas siarkowodorowy** (roztwór). Nazwa „kwas solny” dla czystego gazu jest błędem.
:::

## 4 | Budowa — trzy typy wodorków i rola wodoru [[understand:ROZUMIENIE]] {#budowa}

Wodór ma elektroujemność **2,20** — leży „pośrodku” skali. Dlatego to **partner** decyduje, czy wodór przyjmie elektron, czy go „podzieli” w wiązaniu.

::: karta understand | Elektroujemność decyduje
| Partner | EN partnera | Porównanie z H (2,20) | Typ wodorku | Wodór |
|---|---|---|---|---|
| Na | 0,93 | dużo mniejsza | **jonowy** Na⁺H⁻ | anion **H⁻**, −I |
| Ca | 1,00 | dużo mniejsza | **jonowy** Ca²⁺(H⁻)₂ | **H⁻**, −I |
| C | 2,55 | trochę większa | **kowalencyjny** prawie niepolarny | +I |
| N | 3,04 | większa | **kowalencyjny** spolaryzowany | +I |
| Cl | 3,16 | większa | **kowalencyjny** spolaryzowany | +I |
| Pd | 2,20 | podobna (metal przejściowy) | **metaliczny** (międzywęzłowy) | atomy H w lukach sieci |
:::

::: karta basic | Trzy typy wodorków
1. **Jonowe (solopodobne)** — metale grup 1 i 2 (oprócz Be; MgH₂ ma charakter pośredni). Białe lub szare ciała stałe o budowie kryształu jonowego, wysokie temperatury topnienia. Zawierają anion **wodorkowy H⁻**. Silne reduktory, gwałtownie reagują z wodą.
2. **Kowalencyjne (cząsteczkowe)** — niemetale grup 13–17: CH₄, NH₃, H₂O, H₂S, HCl. Zwykle gazy (woda — ciecz) o niskich temperaturach wrzenia. Wiązania E–H to wspólne pary elektronów.
3. **Metaliczne (międzywęzłowe)** — metale przejściowe, np. pallad, tytan. Atomy wodoru wnikają w **luki sieci krystalicznej metalu**; skład często zmienny (PdHₓ), przewodzą prąd.
:::

::: karta core | Jak to zapamiętać
**Metal aktywny oddaje elektron wodorowi → H⁻ (−I).** **Niemetal przyciąga elektrony mocniej niż wodór → wodór ma +I.** Ten sam pierwiastek H zachowuje się raz jak „fluorowiec” (H⁻ jak Cl⁻), a raz jak „metal” (H⁺ jak Na⁺) — stąd w niektórych układach okresowych stoi i w grupie 1, i nad fluorem.
:::

::: karta understand | Wzory elektronowe — kropki i kreski
- **NaH:** Na⁺ [H:]⁻ — anion wodorkowy ma **dwa** elektrony (konfiguracja helu).
- **CH₄:** cztery wiązania C–H, brak wolnych par; cząsteczka tetraedryczna (109,5°).
- **NH₃:** trzy wiązania N–H i **jedna wolna para** na N; piramida trygonalna (ok. 107°). Wolna para przyłącza H⁺ → NH₄⁺.
- **H₂O:** dwa wiązania O–H i **dwie wolne pary**; cząsteczka kątowa (ok. 104,5°).
- **HCl:** jedno wiązanie H–Cl, trzy wolne pary na Cl.
:::

::: adv | Wodorki „na granicy”: B₂H₆, SiH₄, PH₃ | poziom akademicki
Bor (2,04) i krzem (1,90) są **mniej** elektroujemne od wodoru — formalnie wodór w B₂H₆ i SiH₄ ma stopień utlenienia **−I**, choć wiązania są kowalencyjne. Diboran B₂H₆ jest **elektronowo deficytowy**: dwa atomy H tworzą mostki B–H–B (wiązania trójcentrowe dwuelektronowe), bo cząsteczka BH₃ nie ma dość elektronów na klasyczne wiązania. Fosfor (2,19) ma prawie taką samą EN jak wodór — w PH₃ umownie przyjmuje się P −III i H +I. Wniosek: reguła „H ma +I” jest dobra dla typowych niemetali (C, N, O, S, fluorowce), ale nie dla wszystkich wodorków.
:::

## 5 | Właściwości fizyczne i temperatury wrzenia [[basic:E8]] {#wlasciwosci}

::: karta basic | Najważniejsze wodorki niemetali
| Wodorek | Stan (20 °C) | Barwa (zapach nie służy do identyfikacji) | Gęstość względem powietrza | Rozpuszczalność w wodzie (wartości orientacyjne, wymagają warunków) | T. wrzenia przy ok. 1 atm |
|---|---|---|---|---|---|
| CH₄ | gaz | bezbarwny, bez zapachu | lżejszy (M = 16 g/mol) | prawie nierozpuszczalny | −161,5 °C |
| NH₃ | gaz | bezbarwny, ostry, duszący | lżejszy (17 g/mol) | bardzo dobra (ok. 700 obj. w 1 obj. wody) [do weryfikacji: temperatura i warunki] | −33,3 °C |
| H₂O | ciecz | bezbarwna, bez zapachu | — | — | 100 °C |
| H₂S | gaz | bezbarwny, zgniłe jaja | cięższy (34 g/mol) | umiarkowana (ok. 2,6 obj.) [do weryfikacji: temperatura i warunki] | −60,3 °C |
| HCl | gaz | bezbarwny, ostry, „dymi” w wilgotnym powietrzu | cięższy (36,5 g/mol) | bardzo dobra (ok. 450 obj.) [do weryfikacji: temperatura i warunki] | −85,1 °C |

> Powietrze ma średnią masę molową ok. 29 g/mol. Gaz o M < 29 g/mol jest lżejszy od powietrza (zbieramy go do naczynia odwróconego dnem do góry), o M > 29 g/mol — cięższy (zbieramy do naczynia ustawionego normalnie).
:::

::: karta understand | Dlaczego woda wrze w 100 °C, a siarkowodór w −60 °C?
W grupie 16 masa cząsteczek rośnie: H₂O (18) < H₂S (34) < H₂Se (81) < H₂Te (130). Gdyby liczyła się tylko masa, woda powinna wrzeć najniżej — mniej więcej w −80 °C. Wrze w **+100 °C**, bo między jej cząsteczkami tworzą się **wiązania wodorowe**: atom H związany z bardzo elektroujemnym O przyciąga wolną parę elektronów atomu O sąsiedniej cząsteczki. To samo dotyczy **HF** i **NH₃** (H przy F lub N). Metan (C nie jest dość elektroujemny) wiązań wodorowych nie tworzy — w grupie 14 temperatury rosną równo z masą.
:::

@model n05-trendy-v01 | Temperatury wrzenia wodorków grup 14–17 | wiązania wodorowe: H₂O, HF i NH₃ wrą „za wysoko”
@opis Wykres temperatur wrzenia wodorków grup 14–17 w kolejnych okresach: linia grupy 14 (CH₄ → SnH₄) rośnie równo z masą cząsteczek, a w grupach 15–17 pierwszy punkt — NH₃, H₂O, HF — wyskakuje wyraźnie w górę (woda wrze w +100 °C zamiast ok. −80 °C z trendu). Wniosek: wiązania wodorowe między cząsteczkami NH₃, H₂O i HF podnoszą ich temperatury wrzenia ponad to, co wynikałoby z samej masy.

::: adv | Ile wiązań wodorowych na cząsteczkę? | poziom LO / akademicki
H₂O ma 2 atomy H i 2 wolne pary elektronowe — każda cząsteczka może tworzyć średnio do **czterech** wiązań wodorowych (dwa jako donor, dwa jako akceptor), stąd sieć przestrzenna (lód ma strukturę ażurową i mniejszą gęstość niż ciekła woda). HF ma 3 wolne pary, ale tylko 1 atom H — tworzy zygzakowate łańcuchy, w sumie mniej wiązań na cząsteczkę niż woda, więc wrze niżej (19,5 °C), mimo że pojedyncze wiązanie wodorowe F–H···F jest silniejsze. NH₃ ma 3 atomy H, ale tylko 1 wolną parę — wiązań jeszcze mniej (t. wrz. −33 °C).
:::

## 6 | Wodorki w wodzie — kwas, zasada, wodór albo nic [[basic:E8]] {#woda}

::: karta core | Cztery scenariusze
| Wodorek | Co się dzieje w wodzie | Równanie | Odczyn |
|---|---|---|---|
| CaH₂, NaH (jonowy) | **reakcja** — wydziela się H₂, powstaje wodorotlenek | CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑ | zasadowy |
| HCl, H₂S (gr. 16–17) | rozpuszcza się i **dysocjuje** — powstaje kwas beztlenowy | HCl → H⁺ + Cl⁻ (H₂O) | kwasowy |
| NH₃ (gr. 15) | rozpuszcza się i **przyłącza H⁺ od wody** | NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ | zasadowy |
| CH₄ (gr. 14) | **nie rozpuszcza się, nie reaguje** | — | obojętny (woda bez zmian) |
:::

::: karta basic | Kwasy beztlenowe z wodorków
$$ HCl (gaz) → kwas chlorowodorowy (solny): HCl → H⁺ + Cl⁻

$$ H₂S (gaz) → kwas siarkowodorowy: H₂S ⇌ H⁺ + HS⁻ (słaby, dysocjuje w niewielkim stopniu)

Pełny wykład o kwasach beztlenowych, ich mocy i reakcjach — w lekcji N03 Kwasy.
:::

::: karta basic | Woda amoniakalna — zasadowy roztwór bez grupy OH we wzorze
Amoniak NH₃ nie zawiera grupy OH, a jednak jego roztwór barwi fenoloftaleinę na malinowo. Wolna para elektronowa azotu **przyłącza jon H⁺ z cząsteczki wody**; zostaje jon OH⁻:

$$ NH₃ + H₂O ⇌ NH₄⁺ + OH⁻

Równowaga jest przesunięta w lewo (zasada słaba) — większość amoniaku pozostaje w roztworze jako cząsteczki NH₃. Dlatego roztwór pachnie amoniakiem. Wzór „NH₄OH” to tylko umowny zapis — takiej cząsteczki nie da się wyodrębnić.
:::

@model ph-indicators-v03 | Wskaźniki i skala pH | barwy fenoloftaleiny, oranżu i wskaźnika uniwersalnego dla roztworów NH₃, HCl i H₂S
@opis Panel ze skalą pH 0–14 i trzema wskaźnikami; dla roztworów NH₃, HCl i H₂S pokazuje barwę: fenoloftaleina malinowa tylko w zasadowym NH₃ (pH ok. 11), oranż metylowy czerwony w kwasie solnym, wskaźnik uniwersalny od czerwieni (HCl) przez pomarańcz (H₂S, pH ok. 4) do niebieskiego (NH₃). Wniosek: wodorek azotu daje roztwór zasadowy, a wodorki chloru i siarki — kwasowe, przy czym HCl to kwas mocny, a H₂S słaby.

## 7 | Otrzymywanie wodorków [[basic:E8]] {#otrzymywanie}

::: karta basic | 1. Synteza z pierwiastków
| Wodorek | Równanie | Warunki |
|---|---|---|
| NaH | 2 Na + H₂ → 2 NaH | ogrzewanie (ok. 300–400 °C) |
| CaH₂ | Ca + H₂ → CaH₂ | ogrzewanie |
| HCl | H₂ + Cl₂ → 2 HCl | światło lub płomień (spalanie wodoru w chlorze); mieszanina wybuchowa |
| H₂S | H₂ + S → H₂S | ogrzewanie |
| NH₃ | N₂ + 3 H₂ ⇌ 2 NH₃ | katalizator Fe, ok. 450 °C, 15–25 MPa (metoda Habera–Boscha) |
| H₂O | 2 H₂ + O₂ → 2 H₂O | zapalenie; mieszanina piorunująca |
:::

::: karta basic | 2. Metody laboratoryjne — sól + kwas lub zasada
- **Amoniak:** sól amonowa + mocna zasada, ogrzewanie

$$ 2 NH₄Cl + Ca(OH)₂ → CaCl₂ + 2 NH₃↑ + 2 H₂O

- **Chlorowodór:** sól kamienna + stężony kwas siarkowy(VI) — mniej lotny kwas wypiera kwas lotny

$$ NaCl + H₂SO₄ → NaHSO₄ + HCl↑

- **Siarkowodór:** siarczek + kwas (aparat Kippa)

$$ FeS + 2 HCl → FeCl₂ + H₂S↑

- **Metan:** w szkole zwykle nie otrzymujemy — korzystamy z gazu ziemnego (ok. 90% CH₄ i więcej).
:::

::: karta understand | Jak zbierać otrzymany gaz?
| Gaz | Lżejszy czy cięższy od powietrza? | Rozpuszczalny w wodzie? | Sposób zbierania |
|---|---|---|---|
| NH₃ | lżejszy | bardzo dobrze | do naczynia **odwróconego dnem do góry**; nie nad wodą |
| HCl | cięższy | bardzo dobrze | do naczynia **ustawionego normalnie**; nie nad wodą |
| H₂S | cięższy | umiarkowanie | do naczynia ustawionego normalnie, pod dygestorium |
| H₂ (z wodorków jonowych) | lżejszy | bardzo słabo | nad wodą albo dnem do góry |
:::

::: adv | Osuszanie gazów — co z czym? | poziom LO
Amoniaku **nie** osuszamy stężonym H₂SO₄ (powstałby siarczan(VI) amonu) ani CaCl₂ (tworzy z NH₃ związek kompleksowy) — używa się **CaO** lub NaOH. Chlorowodór i siarkowodór osusza się substancjami obojętnymi lub kwasowymi (np. P₄O₁₀ dla HCl), nie zasadowymi. Zasada ogólna: środek suszący nie może reagować z suszonym gazem.
:::

## 8 | Reakcje wodorków i wykrywanie gazów [[basic:E8]] {#reakcje}

::: karta basic | Wodorki jonowe + woda
$$ NaH + H₂O → NaOH + H₂↑

$$ CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑

$$ LiH + H₂O → LiOH + H₂↑

**Wzór reakcji:** wodorek metalu + woda → wodorotlenek metalu + wodór. Obserwacje: wydziela się bezbarwny gaz (zapalony daje charakterystyczny „pyk”), roztwór z fenoloftaleiną malinowieje, naczynie się ogrzewa.
:::

::: karta understand | To jest reakcja redoks
W CaH₂ wodór ma **−I**, w wodzie **+I**, w H₂ — **0**. Anion H⁻ oddaje elektron (utlenia się), wodór z wody go przyjmuje (redukuje się). Oba spotykają się w cząsteczce H₂:

$$ H⁻ + H₂O → H₂ + OH⁻

Gdy ten sam pierwiastek z dwóch różnych stopni utlenienia przechodzi na jeden wspólny — mówimy o **synproporcjonowaniu**. Dlatego wodorki jonowe są **silnymi reduktorami**.
:::

::: karta basic | Wodorki jonowe + kwasy
$$ NaH + HCl → NaCl + H₂↑

Anion H⁻ jest bardzo mocną zasadą — „zabiera” H⁺ kwasowi szybciej niż wodzie.
:::

::: karta basic | Spalanie wodorków kowalencyjnych
$$ CH₄ + 2 O₂ → CO₂ + 2 H₂O

$$ 2 H₂S + 3 O₂ → 2 SO₂ + 2 H₂O

$$ 4 NH₃ + 3 O₂ → 2 N₂ + 6 H₂O

> Metan spala się niebieskim płomieniem (gaz w kuchence). Przy niedomiarze tlenu powstaje trujący CO. H₂S spalany przy niedomiarze tlenu daje siarkę: 2 H₂S + O₂ → 2 S + 2 H₂O. Amoniak pali się w czystym tlenie, w powietrzu bardzo trudno.
:::

::: karta basic | Amoniak + chlorowodór — biały dym
$$ NH₃ + HCl → NH₄Cl

Dwa bezbarwne gazy tworzą biały dym drobnych kryształków **chlorku amonu**. To zarazem test na amoniak (bagietka z HCl) i na chlorowodór (bagietka z amoniakiem).
:::

::: karta core | Wykrywanie gazów — tabela do zapamiętania
| Gaz | Zapach | Próba | Wynik |
|---|---|---|---|
| NH₃ | ostry, duszący | wilgotny papierek uniwersalny / fenoloftaleina | niebieski / malinowy |
| NH₃ | — | bagietka zwilżona stęż. HCl | biały dym NH₄Cl |
| HCl | ostry, drażniący | wilgotny papierek uniwersalny | czerwony |
| HCl | — | bagietka z amoniakiem; roztwór AgNO₃ | biały dym; biały osad AgCl |
| H₂S | zgniłych jaj | bibuła z octanem ołowiu(II) | czarna (PbS) |
| H₂S | — | roztwór CuSO₄ | czarny osad CuS |
| H₂ | brak | zapalone łuczywo przy wylocie probówki | „pyk” |
| CH₄ | brak | spalanie; zimne szkło i woda wapienna nad płomieniem | rosa (H₂O) i zmętnienie (CO₂) |
:::

$$ H₂S + (CH₃COO)₂Pb → PbS↓ + 2 CH₃COOH

@model n05-doswiadczenia-v01 | Pracownia: doświadczenia z wodorkami | wodorki jonowe z wodą, otrzymywanie NH₃, HCl, H₂S, odczyn roztworów, wykrywanie gazów
@opis Wirtualna pracownia z listą doświadczeń z wodorkami: CaH₂ i NaH z wodą, otrzymywanie NH₃, HCl i H₂S, odczyn ich roztworów ze wskaźnikami, wykrywanie gazów (biały dym NH₄Cl, czernienie bibuły z octanem ołowiu, mętnienie wody wapiennej); każde doświadczenie pokazuje naczynia, obserwacje i równanie. Wniosek: wodorki metali reagują z wodą z wydzieleniem wodoru, a wodorki niemetali rozpoznaje się po odczynie roztworu i reakcjach charakterystycznych.

## 9 | Ważne wodorki i ich zastosowania [[basic:E8]] {#zastosowania}

::: karta basic | Z życia i przemysłu
- **Metan CH₄** — główny składnik gazu ziemnego i biogazu; paliwo w kuchenkach i elektrowniach, surowiec do produkcji wodoru. Gaz cieplarniany (silniejszy od CO₂). Wydziela się z bagien, wysypisk, przewodu pokarmowego przeżuwaczy.
- **Amoniak NH₃** — produkcja **nawozów azotowych** (saletry, mocznik), kwasu azotowego(V), materiałów wybuchowych, tworzyw; czynnik chłodniczy w dużych chłodniach; składnik płynów do mycia szyb. Jeden z najważniejszych produktów przemysłu chemicznego na świecie.
- **Chlorowodór HCl** — w postaci kwasu solnego: trawienie i czyszczenie metali, produkcja chlorków, przemysł spożywczy (regulacja pH); kwas solny w żołądku (ok. 0,1 mol/dm³) aktywuje enzym pepsynę i niszczy bakterie.
- **Siarkowodór H₂S** — powstaje przy gniciu białek (zgniłe jaja), występuje w wodach siarczkowych (uzdrowiska, np. Busko-Zdrój) i gazie ziemnym; z niego odzyskuje się siarkę.
- **Woda H₂O** — rozpuszczalnik, środowisko życia, reagent.
- **Wodorek wapnia CaH₂** — osuszanie rozpuszczalników organicznych; dawniej przenośne źródło wodoru (napełnianie balonów meteorologicznych).
- **Fluorowodór HF** — trawienie szkła (matowe żarówki, zdobienia), produkcja freonów i teflonu.
:::

::: karta understand | Wodorki a energetyka wodorowa
Wodór jest paliwem przyszłości, ale trudno go przechowywać (gaz o bardzo małej gęstości). Jednym z pomysłów jest **magazynowanie wodoru w wodorkach metali**: MgH₂ zawiera 7,6% masy wodoru, a pallad pochłania do ok. 900 objętości H₂. Ogrzanie wodorku uwalnia gaz z powrotem. Szczegóły — [§13](#metaliczne).
:::

## 10 | Bezpieczeństwo (BHP) [[basic:E8]] {#bhp}

::: karta warning | Zasady pracy z wodorkami
- **Siarkowodór** — silnie toksyczny; przy wyższych stężeniach może osłabiać/wyłączać węch, więc zapach nie jest ostrzeżeniem. Nie wytwarzać ani nie wykrywać przez wąchanie; ewentualny pokaz wyłącznie przez uprawnioną osobę w sprawnym dygestorium, preferować symulację.
- **Amoniak** — drażni oczy i drogi oddechowe; stężony roztwór żrący. Nie wąchać bezpośrednio ani nie stosować celowego „nagarniania” zapachu jako próby identyfikacyjnej.
- **Chlorowodór / stężony kwas solny** — drażni drogi oddechowe, „dymi”; okulary, rękawice, dygestorium.
- **Fluorowodór** — wyjątkowo niebezpieczny: przenika przez skórę i wiąże wapń w tkankach; w szkole się go nie używa.
- **NaH, CaH₂** — reagują z wodą (także z wilgocią powietrza), wydzielając **palny wodór**; przechowywać w szczelnych naczyniach, z dala od ognia. NaH — tylko pokaz nauczyciela.
- **Metan** — z powietrzem tworzy mieszaninę wybuchową (ok. 5–15% obj.); gaz ziemny ma dodany środek zapachowy, żeby wyczuć nieszczelność.
- **Fosforowodór, silan, diboran** — trujące i/lub samozapalne; poza szkolnym laboratorium.
:::

## 11 | Trendy: kwasowość i zasadowość wodorków [[extra:AMBITNE]] {#trendy}

::: karta extra | W okresie: od zasady do kwasu
| Okres 2 | CH₄ | NH₃ | H₂O | HF |
|---|---|---|---|---|
| EN partnera | 2,55 | 3,04 | 3,44 | 3,98 |
| W wodzie | obojętny | zasada (przyjmuje H⁺) | amfiprotyczna | kwas (oddaje H⁺) |

Im bardziej elektroujemny partner, tym silniej spolaryzowane wiązanie E–H i tym łatwiej oddać H⁺. W okresie kwasowość wodorków **rośnie od lewej do prawej**. W okresie 3 podobnie: SiH₄, PH₃ (praktycznie obojętne) → H₂S (słaby kwas) → HCl (mocny kwas).
:::

::: karta extra | W grupie: decyduje długość wiązania
| Grupa 17 | HF | HCl | HBr | HI |
|---|---|---|---|---|
| Moc kwasu | słaby (pKa ≈ 3,2) | mocny (pKa ≈ −6) | mocniejszy (≈ −9) | najmocniejszy (≈ −10) |
| Wiązanie H–X | najkrótsze, najmocniejsze | → | → | najdłuższe, najsłabsze |

Choć fluor jest najbardziej elektroujemny, **HF jest najsłabszym** z tych kwasów: krótkie, mocne wiązanie H–F trudno zerwać, a mały jon F⁻ silnie wiąże się z wodą i z H⁺. W dół grupy wiązanie H–X słabnie, więc kwasowość **rośnie**. Tak samo w grupie 16: H₂O < H₂S < H₂Se < H₂Te.
:::

::: karta core | Reguła w jednym zdaniu
W **okresie** o kwasowości wodorków decyduje głównie **elektroujemność** partnera, w **grupie** — **długość (moc) wiązania E–H**.
:::

## 12 | Wodorki jonowe: zasady, reduktory, dowód na H⁻ [[extra:AMBITNE]] {#jonowe}

::: karta extra | Skąd wiemy, że w LiH jest anion H⁻?
Stopiony LiH przewodzi prąd. Podczas **elektrolizy** stopionego wodorku litu wodór wydziela się na **anodzie** (elektrodzie dodatniej) — a tam zmierzają aniony:

$$ anoda (+): 2 H⁻ → H₂ + 2 e⁻

$$ katoda (−): Li⁺ + e⁻ → Li

To bezpośredni dowód, że wodór w wodorkach metali aktywnych występuje jako jon ujemny.
:::

::: karta extra | Wodorki jako reduktory i zasady w syntezie
- **NaH** — bardzo mocna zasada: odrywa H⁺ nawet od alkoholi (R–OH → R–O⁻), wydzielając H₂.
- **LiAlH₄** (glinowodorek litu) i **NaBH₄** (borowodorek sodu) — źródła jonu H⁻ w chemii organicznej; redukują aldehydy i ketony do alkoholi.
- Reaktywność wodorków grup 1–2 z wodą rośnie w dół grupy: LiH < NaH < KH — zgodnie z aktywnością metali.
:::

## 13 | Wodorki metaliczne, synteza amoniaku i metoda Ostwalda [[extra:AMBITNE]] {#metaliczne}

::: karta extra | Wodorki metaliczne (międzywęzłowe)
Metale przejściowe (Pd, Ti, Zr, Ni, La) pochłaniają wodór: cząsteczka H₂ rozpada się na powierzchni metalu na atomy, które wnikają w luki sieci. Skład bywa **niestechiometryczny** (PdH₀,₇, TiH₁,₇–TiH₂). Materiał zachowuje połysk i przewodnictwo metalu, choć staje się kruchy. Zastosowania: magazynowanie i oczyszczanie wodoru (membrany palladowe), akumulatory niklowo-wodorkowe (Ni-MH — stop typu LaNi₅ pochłania wodór).
:::

::: karta extra | Synteza amoniaku — metoda Habera–Boscha
$$ N₂ + 3 H₂ ⇌ 2 NH₃ (ΔH = −92 kJ)

Reakcja odwracalna i egzotermiczna. Niska temperatura sprzyja wydajności, ale reakcja jest wtedy zbyt wolna — stosuje się kompromis: **ok. 450 °C**, **wysokie ciśnienie 15–25 MPa** (mniej moli gazu po prawej stronie), **katalizator żelazowy**; amoniak wymraża się z mieszaniny, a nieprzereagowane N₂ i H₂ zawraca. Dzięki tej metodzie produkuje się nawozy, które wyżywiają znaczną część ludzkości (Nagroda Nobla: F. Haber 1918, C. Bosch 1931).
:::

::: karta extra | Od amoniaku do kwasu azotowego(V) — metoda Ostwalda
$$ 4 NH₃ + 5 O₂ → 4 NO + 6 H₂O (katalizator Pt–Rh, ok. 850–900 °C)

$$ 2 NO + O₂ → 2 NO₂

$$ 4 NO₂ + O₂ + 2 H₂O → 4 HNO₃

Porównaj: spalanie amoniaku **bez katalizatora** daje azot (4 NH₃ + 3 O₂ → 2 N₂ + 6 H₂O) — katalizator decyduje o produkcie.
:::

::: adv | Dyfuzja gazów: gdzie powstaje pierścień NH₄Cl? | poziom LO / akademicki
W długiej rurze z watą nasączoną stężonym NH₃(aq) z jednej strony i stężonym HCl z drugiej biały pierścień NH₄Cl powstaje **bliżej końca z HCl**. Szybkość dyfuzji gazów jest odwrotnie proporcjonalna do pierwiastka z masy molowej (prawo Grahama): v(NH₃)/v(HCl) = √(36,5/17) ≈ 1,47 — lżejszy amoniak pokonuje dłuższą drogę w tym samym czasie.
:::

## 14 | Doświadczenia {#doswiadczenia}

> Każde doświadczenie w formacie egzaminacyjnym. Przyciski „Zobacz w zlewce” otwierają pracownię na tym doświadczeniu.

::: dosw | Doświadczenie 1 — Wodorek wapnia i woda
Problem: Co powstaje w reakcji wodorku wapnia z wodą?
Hipoteza: Wydzieli się wodór, a w roztworze powstanie wodorotlenek wapnia (odczyn zasadowy).
Uwaga: to nie jest doświadczenie do samodzielnego wykonania przez ucznia. CaH₂ reaguje z wodą, wydzielając palny H₂ i ciepło. Realny pokaz może prowadzić wyłącznie nauczyciel/wykwalifikowana osoba po ocenie ryzyka, z osłoną i właściwą wentylacją; bezpieczniejszą alternatywą jest symulacja. Nie zbierać i nie zapalać gazu bez formalnej procedury BHP.
Obserwacja: Proszek „musuje”, wydziela się bezbarwny gaz, który zapalony daje „pyk”; roztwór malinowieje i lekko się ogrzewa.
Wniosek: Wodorek jonowy reaguje z wodą — powstaje wodór i wodorotlenek (zasada).
Równanie:: CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑
BHP: Małe ilości, z dala od ognia (poza próbą łuczywa); okulary.

@zlewka n05-doswiadczenia-v01 cah2H2o | Zobacz w zlewce (pracownia GFX)
@opis Zlewka z wodą i fenoloftaleiną, do której trafia szary proszek CaH₂: pęcherzyki gazu (wodór), roztwór zabarwia się na malinowo; równanie CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑. Wniosek: wodorek jonowy z wodą daje wodór i zasadę.
:::

::: dosw | Doświadczenie 2 — Otrzymywanie i wykrywanie amoniaku
Problem: Jak otrzymać amoniak i jak go rozpoznać?
Hipoteza: Ogrzewanie soli amonowej z wodorotlenkiem wapnia uwolni amoniak, który zmieni barwę wilgotnego papierka na niebieską.
Sprzęt: Probówka, statyw, palnik, NH₄Cl, Ca(OH)₂, wilgotny papierek uniwersalny, bagietka zwilżona stęż. HCl.
Przebieg: Mieszaninę NH₄Cl i Ca(OH)₂ ogrzewamy w probówce; u jej wylotu trzymamy wilgotny papierek, potem bagietkę z HCl.
Obserwacja: papierek wskaźnikowy zmienia barwę; przy kontrolowanym kontakcie z HCl powstaje biały dym NH₄Cl. Zapach nie jest kryterium identyfikacji.
Wniosek: Powstał amoniak — gaz o odczynie zasadowym w obecności wody; z HCl tworzy chlorek amonu.
Równanie:: 2 NH₄Cl + Ca(OH)₂ → CaCl₂ + 2 NH₃↑ + 2 H₂O
BHP: Nie wąchać bezpośrednio; dygestorium; probówkę kierować wylotem od siebie i innych.

@zlewka n05-doswiadczenia-v01 nh4clCaoh2 | Zobacz w zlewce (pracownia GFX)
@opis Probówka z ogrzewaną mieszaniną NH₄Cl i Ca(OH)₂; u wylotu wilgotny papierek uniwersalny niebieszczeje; równanie 2 NH₄Cl + Ca(OH)₂ → CaCl₂ + 2 NH₃↑ + 2 H₂O. Wniosek: tak otrzymuje się amoniak, a jego roztwór ma odczyn zasadowy.
:::

::: dosw | Doświadczenie 3 — Fontanna amoniakowa
Problem: Jak dobrze amoniak rozpuszcza się w wodzie i jaki odczyn ma roztwór?
Hipoteza: Amoniak rozpuści się bardzo szybko, a roztwór będzie zasadowy.
Pokaz wyłącznie dla wykwalifikowanego prowadzącego w sprawnym dygestorium i po ocenie ryzyka; dla samodzielnej nauki użyj animacji. NH₃ drażni drogi oddechowe, a kolba z gazem wymaga zabezpieczenia przed rozpryskiem i wciągnięciem cieczy.
Obserwacja: Woda gwałtownie wtryskuje do kolby jak fontanna i barwi się na malinowo.
Wniosek: NH₃ rozpuszcza się tak dobrze, że w kolbie powstaje podciśnienie; roztwór jest zasadowy.
Równanie:: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻
BHP: Kolba okrągłodenna bez pęknięć (podciśnienie); pokaz nauczyciela.

> Wariant z chlorowodorem i oranżem metylowym daje czerwoną fontannę — HCl też jest bardzo dobrze rozpuszczalny, a roztwór jest kwasowy.

@zlewka n05-doswiadczenia-v01 nh3H2oPhp | Zobacz w zlewce (pracownia GFX)
@opis Woda z fenoloftaleiną, do której wprowadza się amoniak: roztwór staje się malinowy; równanie NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (dla 0,1 mol/dm³ pH ok. 11). Wniosek: amoniak dobrze rozpuszcza się w wodzie, a powstające jony OH⁻ nadają odczyn zasadowy.
:::

::: dosw | Doświadczenie 4 — Otrzymywanie chlorowodoru i kwasu solnego (pokaz)
Problem: Jak z soli kamiennej otrzymać kwas solny?
Hipoteza: Stężony H₂SO₄ wyprze z NaCl lotny chlorowodór, który rozpuszczony w wodzie da kwas.
To demonstracja nauczycielska, nie ćwiczenie uczniowskie: stężony H₂SO₄ jest silnie żrący, a HCl drażni drogi oddechowe. Wymagane są dygestorium, osłona, właściwe środki ochrony i zatwierdzona procedura; bez tego użyj symulacji.
Przebieg: Na NaCl wlewamy stęż. H₂SO₄ i łagodnie ogrzewamy; gaz wprowadzamy nad powierzchnię wody przez odwrócony lejek.
Obserwacja: Wydziela się bezbarwny gaz „dymiący” w wilgotnym powietrzu; oranż w wodzie zmienia barwę na czerwoną.
Wniosek: Powstał chlorowodór; jego roztwór wodny to kwas chlorowodorowy (solny).
Równanie:: NaCl + H₂SO₄ → NaHSO₄ + HCl↑
BHP: Tylko pokaz nauczyciela pod dygestorium; lejek zapobiega cofnięciu wody do kolby.

@zlewka n05-doswiadczenia-v01 naclH2so4 | Zobacz w zlewce (pracownia GFX)
@opis Pokaz nauczyciela pod dygestorium: na NaCl działa stężony H₂SO₄, wydziela się bezbarwny gaz, który nad naczyniem tworzy białą mgłę; równanie NaCl + H₂SO₄ → NaHSO₄ + HCl↑. Wniosek: tak otrzymuje się chlorowodór, który z wilgocią powietrza tworzy mgiełkę kwasu solnego.
:::

::: dosw | Doświadczenie 5 — Siarkowodór i jego wykrywanie (pokaz)
Problem: Jak otrzymać i wykryć siarkowodór?
Hipoteza: Z siarczku żelaza(II) i kwasu solnego powstanie H₂S, który zaczerni bibułę z octanem ołowiu(II).
Sprzęt: Aparat Kippa lub probówka z rurką, FeS, kwas solny, bibuła nasączona (CH₃COO)₂Pb, roztwór CuSO₄.
Przebieg: Na grudki FeS działamy kwasem solnym; nad wylotem trzymamy bibułę, następnie gaz przepuszczamy przez roztwór CuSO₄.
Obserwacja: odpowiedni papierek z octanem ołowiu czernieje; w kontrolowanym układzie z jonami Cu²⁺ może powstać czarny osad CuS. Nie wykrywa się H₂S przez wąchanie; pokaz wyłącznie w warunkach profesjonalnych, najlepiej zastąpić symulacją.
Wniosek: Powstał siarkowodór; z jonami Pb²⁺ i Cu²⁺ tworzy czarne siarczki (PbS, CuS).
Równanie:: FeS + 2 HCl → FeCl₂ + H₂S↑
BHP: H₂S bardzo trujący — tylko pokaz pod dygestorium; sole ołowiu trujące.

@zlewka n05-doswiadczenia-v01 fesHcl | Zobacz w zlewce: otrzymywanie H₂S
@opis Pokaz pod dygestorium: czarne grudki FeS w kwasie solnym roztwarzają się, wydzielają się pęcherzyki gazu, roztwór robi się bladozielony (Fe²⁺); równanie FeS + 2 HCl → FeCl₂ + H₂S↑. Wniosek: tak otrzymuje się siarkowodór — trujący gaz o zapachu zgniłych jaj (identyfikacja nie przez wąchanie, tylko reakcją z octanem ołowiu).

@zlewka n05-doswiadczenia-v01 h2sPbac | Zobacz w zlewce: bibuła z octanem ołowiu (PbS)
@opis Bibuła nasączona bezbarwnym octanem ołowiu(II) czernieje w kontakcie z siarkowodorem; równanie H₂S + (CH₃COO)₂Pb → PbS↓ + 2 CH₃COOH. Wniosek: czarny PbS to bezpieczny sposób wykrycia H₂S.
:::

::: dosw | Doświadczenie 6 — Biały dym bez ognia
Problem: Co powstaje, gdy spotkają się amoniak i chlorowodór?
Hipoteza: Zasadowy NH₃ i kwasowy HCl połączą się w sól.
Sprzęt: Dwie bagietki, stężony roztwór amoniaku, stężony kwas solny (lub dwie otwarte butelki).
Przebieg: Zwilżone bagietki zbliżamy do siebie, nie stykając ich.
Obserwacja: Między bagietkami powstaje gęsty biały dym.
Wniosek: Gazowe NH₃ i HCl reagują ze sobą — powstaje stały chlorek amonu.
Równanie:: NH₃ + HCl → NH₄Cl
BHP: Stężone roztwory — dygestorium, okulary, rękawice.

@zlewka n05-doswiadczenia-v01 nh3Hcl | Zobacz w zlewce (pracownia GFX)
@opis Dwa otwarte naczynia — ze stężonym amoniakiem i ze stężonym kwasem solnym — a między nimi tworzy się biały dym; równanie NH₃ + HCl → NH₄Cl. Wniosek: gazowe NH₃ i HCl reagują ze sobą bez wody, a dym to drobne kryształki chlorku amonu.
:::

::: dosw | Doświadczenie 7 — Odczyn wodnych roztworów wodorków
Problem: Jaki odczyn mają wodne roztwory NH₃, HCl i H₂S?
Hipoteza: NH₃ — zasadowy, HCl — silnie kwasowy, H₂S — słabo kwasowy.
Sprzęt: Trzy probówki z roztworami (woda amoniakalna, kwas solny, woda siarkowodorowa), wskaźnik uniwersalny.
Przebieg: Do każdej probówki dodajemy kilka kropel wskaźnika uniwersalnego.
Obserwacja: NH₃(aq) — niebieskozielony/granatowy; HCl(aq) — czerwony; H₂S(aq) — pomarańczowy.
Wniosek: Wodorki grup 16–17 tworzą w wodzie kwasy (HCl mocny, H₂S słaby), amoniak — roztwór zasadowy.
Równanie:: HCl → H⁺ + Cl⁻; H₂S ⇌ H⁺ + HS⁻; NH₃ + H₂O ⇌ NH₄⁺ + OH⁻
BHP: Woda siarkowodorowa tylko pod dygestorium; okulary.

@zlewka n05-doswiadczenia-v01 hclH2oOranz | Zobacz w zlewce: HCl + oranż metylowy
@opis Woda z oranżem metylowym, w której rozpuszcza się chlorowodór: roztwór staje się czerwony; równanie HCl + H₂O → H₃O⁺ + Cl⁻. Wniosek: HCl dysocjuje całkowicie — powstaje mocny kwas solny.

@zlewka n05-doswiadczenia-v01 h2sH2oUni | Zobacz w zlewce: H₂S + wskaźnik uniwersalny
@opis Woda ze wskaźnikiem uniwersalnym, w której rozpuszcza się siarkowodór: barwa przechodzi tylko w pomarańczową (pH ok. 4); równanie H₂S + H₂O ⇌ H₃O⁺ + HS⁻. Wniosek: kwas siarkowodorowy jest słaby — dysocjuje w niewielkim stopniu.
:::

::: dosw | Doświadczenie 8 — Skład metanu: wykrywanie produktów spalania
Problem: Jakie pierwiastki wchodzą w skład metanu?
Hipoteza: Metan zawiera węgiel i wodór — przy spalaniu powstaną CO₂ i H₂O.
Sprzęt: Palnik gazowy (gaz ziemny), suchy zimny lejek lub zlewka, woda wapienna, pompka/aspirator.
Przebieg: Nad płomieniem trzymamy zimną suchą zlewkę, potem gazy spalinowe przepuszczamy przez wodę wapienną.
Obserwacja: Na zimnym szkle osiada rosa; woda wapienna mętnieje.
Wniosek: Powstała woda (jest wodór) i CO₂ (jest węgiel) — metan to wodorek węgla CH₄.
Równanie:: CH₄ + 2 O₂ → CO₂ + 2 H₂O
BHP: Uwaga na płomień — związane włosy, brak luźnych rękawów.

@zlewka n05-doswiadczenia-v01 caOH2Co2 | Zobacz w zlewce: CO₂ mętni wodę wapienną
@opis Produkty spalania metanu przepuszczone przez wodę wapienną: klarowny roztwór mętnieje (CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O), a na zimnym szkle osiada rosa (H₂O). Wniosek: w metanie jest węgiel (bo powstał CO₂) i wodór (bo powstała woda).
:::

## 15 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| SH₂ | H₂S | W wodorkach grup 16–17 wodór zapisujemy na początku. |
| CH₂, NH₂ | CH₄, NH₃ | C w wodorku jest IV-wartościowy, N — III-wartościowy. |
| NaH₂ | NaH | Sód jest I-wartościowy. |
| „W NaH wodór ma +I” | W NaH wodór ma −I | Na (0,93) jest mniej elektroujemny od H (2,20) — oddaje elektron, powstaje H⁻. |
| „Kwas solny to gaz HCl” | Gaz to chlorowodór; kwas solny to jego roztwór | Kwas powstaje dopiero po rozpuszczeniu w wodzie (dysocjacja). |
| „NH₃ nie ma grupy OH, więc nie może być zasadowy” | NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ | Jony OH⁻ pochodzą z wody — amoniak przyłącza od niej H⁺. |
| CaH₂ + H₂O → CaO + H₂ | CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂ | W wodzie powstaje wodorotlenek, a nie tlenek; bilans: 2 H₂O. |
| „Każdy związek z H to wodorek” | NaOH, H₂SO₄, NH₄Cl to nie wodorki | Wodorek — tylko wodór + jeden inny pierwiastek. |
| „HF jest najmocniejszym kwasem, bo F jest najbardziej elektroujemny” | HF jest najsłabszy z HX | W grupie decyduje długość i moc wiązania H–X; H–F jest najmocniejsze. |
| „Woda wrze wysoko, bo jest ciężka” | Wiązania wodorowe | H₂O ma mniejszą masę niż H₂S, a wrze o 160 °C wyżej. |
| „Amoniak zbieramy nad wodą” | Do naczynia dnem do góry | NH₃ bardzo dobrze rozpuszcza się w wodzie i jest lżejszy od powietrza. |
:::

## 16 | Ćwiczenia {#cwiczenia}

::: karta understand | Mini-check (rozgrzewka)
1. Co to wodorek?
2. Ile atomów H ma wodorek azotu?
3. Jaki stopień utlenienia ma wodór w CaH₂?
4. Jak nazywa się roztwór HCl w wodzie?
5. Który wodorek nie rozpuszcza się w wodzie: NH₃, HCl, CH₄?

::: odp | Pokaż odpowiedzi
1. Związek wodoru z jednym innym pierwiastkiem.
2. Trzy — NH₃ (N jest III-wartościowy).
3. −I.
4. Kwas chlorowodorowy (solny).
5. CH₄.
:::
:::

::: karta basic | Ćwiczenie prowadzone — wodorek litu
1. Li — grupa 1 → I-wartościowy; wzór **LiH**, nazwa: wodorek litu.
2. EN: Li 0,98 < H 2,20 → wodorek **jonowy**, Li⁺H⁻, H: −I.
3. Z wodą: **LiH + H₂O → LiOH + H₂↑**; roztwór zasadowy.
4. Redoks: H(−I) → H(0) utlenia się; H(+I) z wody → H(0) redukuje się.

**Spróbuj sam:** wodorek potasu.

::: odp | Pokaż rozwiązanie
KH — wodorek potasu; jonowy K⁺H⁻ (EN K 0,82); KH + H₂O → KOH + H₂↑; reakcja gwałtowniejsza niż dla LiH (potas aktywniejszy).
:::
:::

### Poziom A — podstawa

::: karta -
1. Napisz wzory wodorków: sodu, magnezu, węgla, azotu, siarki, chloru.
2. Nazwij: CaH₂, LiH, NH₃, H₂S, HBr, CH₄.
3. Podkreśl wodorki: NaOH, NaH, HCl, HClO, CH₄, CH₃OH, H₂S, H₂SO₄.
4. Uzupełnij: CaH₂ + … H₂O → … + … H₂↑.
5. Który gaz jest lżejszy od powietrza: NH₃, HCl, H₂S, CH₄?

::: odp | Pokaż odpowiedzi
1. NaH, MgH₂, CH₄, NH₃, H₂S, HCl.
2. Wodorek wapnia, wodorek litu, amoniak, siarkowodór, bromowodór, metan.
3. NaH, HCl, CH₄, H₂S.
4. CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑.
5. NH₃ (17 g/mol) i CH₄ (16 g/mol); HCl i H₂S są cięższe (M > 29 g/mol).
:::
:::

### Poziom B — trening

::: karta -
6. Zapisz równania otrzymywania z pierwiastków: NaH, HCl, H₂S, NH₃ (z warunkami dla NH₃).
7. Do roztworów NH₃, HCl i NaH (po reakcji z wodą) dodano fenoloftaleinę. W których probówkach pojawi się malinowa barwa? Uzasadnij równaniami.
8. Zaproponuj dwa sposoby odróżnienia amoniaku od chlorowodoru.
9. Oblicz, ile dm³ wodoru (warunki normalne, 22,4 dm³/mol) powstanie z 4,2 g CaH₂ w reakcji z wodą. M(CaH₂) = 42 g/mol.
10. Ustal stopnie utlenienia wszystkich pierwiastków: NaH, CaH₂, CH₄, NH₃, H₂S, HCl.

::: odp | Pokaż odpowiedzi
6. 2 Na + H₂ → 2 NaH; H₂ + Cl₂ → 2 HCl; H₂ + S → H₂S; N₂ + 3 H₂ ⇌ 2 NH₃ (Fe, ok. 450 °C, 15–25 MPa).
7. W NH₃(aq): NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ — malinowa; po NaH: NaH + H₂O → NaOH + H₂↑ — malinowa; HCl(aq) — bezbarwna (odczyn kwasowy).
8. Np. wilgotny papierek uniwersalny (NH₃ — niebieski, HCl — czerwony); bagietka z drugim gazem/roztworem — w obu przypadkach biały dym, ale z HCl reaguje tylko NH₃ i odwrotnie; zapach i AgNO₃ (z HCl biały osad AgCl).
9. n(CaH₂) = 4,2 g : 42 g/mol = 0,1 mol → n(H₂) = 0,2 mol → V = 0,2 · 22,4 = 4,48 dm³.
10. NaH: Na +I, H −I; CaH₂: Ca +II, H −I; CH₄: C −IV, H +I; NH₃: N −III, H +I; H₂S: H +I, S −II; HCl: H +I, Cl −I.
:::
:::

### Poziom C — ambitny

::: karta -
11. Uszereguj według rosnącej mocy kwasowej: HI, HF, HBr, HCl. Uzasadnij.
12. Dlaczego CaH₂ jest dobrym środkiem do osuszania rozpuszczalników, a CaO nie nadaje się do osuszania HCl?
13. Wyjaśnij, dlaczego temperatura wrzenia rośnie w szeregu PH₃ < AsH₃ < SbH₃, a NH₃ wrze wyżej niż PH₃.
14. Zaproponuj doświadczenie dowodzące, że w LiH występuje anion wodorkowy.

::: odp | Pokaż odpowiedzi
11. HF < HCl < HBr < HI — w dół grupy rośnie długość i maleje moc wiązania H–X, łatwiej oddać H⁺.
12. CaH₂ nieodwracalnie wiąże wodę (CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑), a powstały H₂ ulatnia się. CaO jest tlenkiem zasadowym — reagowałby z kwasowym HCl (CaO + 2 HCl → CaCl₂ + H₂O).
13. PH₃ → SbH₃: rośnie masa i liczba elektronów → silniejsze oddziaływania międzycząsteczkowe. NH₃ tworzy wiązania wodorowe (N bardzo elektroujemny), dlatego wrze wyżej niż PH₃.
14. Elektroliza stopionego LiH — wodór wydziela się na anodzie (+): 2 H⁻ → H₂ + 2 e⁻.
:::
:::

### Poziom D — zaawansowany

::: karta -
15. W syntezie amoniaku obniżenie temperatury zwiększa wydajność, a mimo to stosuje się ok. 450 °C. Wyjaśnij ten kompromis i rolę wysokiego ciśnienia.
16. W rurze długości 100 cm z jednej strony umieszczono watę z NH₃(aq), z drugiej z HCl(aq). W jakiej odległości od końca z amoniakiem powstanie pierścień NH₄Cl? (Prawo Grahama.)

::: odp | Pokaż odpowiedzi
15. Reakcja jest egzotermiczna — niska temperatura przesuwa równowagę w prawo, ale reakcja zachodzi wtedy zbyt wolno; 450 °C z katalizatorem Fe to kompromis między szybkością a wydajnością. Ciśnienie przesuwa równowagę w stronę mniejszej liczby moli gazu (4 → 2), czyli w stronę NH₃.
16. v(NH₃) : v(HCl) = √(36,5/17) ≈ 1,47. Drogi w tym samym czasie: x : (100 − x) = 1,47 → x ≈ 59,5 cm od końca z amoniakiem.
:::
:::

## 17 | Typologia zadań E8 [[basic:E8]] {#typologia}

::: karta exam | Jak wodorki pojawiają się na egzaminie
| Typ zadania | Co trzeba zrobić | Przykład |
|---|---|---|
| Wzór i nazwa | ułożyć wzór z wartościowości, nazwać | „Napisz wzór siarkowodoru.” |
| Kwasy beztlenowe | zapisać otrzymywanie kwasu z gazu i dysocjację | „Zapisz, jak powstaje kwas chlorowodorowy.” |
| Odczyn roztworu | dobrać barwę wskaźnika | „Jaką barwę przyjmie fenoloftaleina w wodzie amoniakalnej?” |
| Projekt doświadczenia | opisać wykrycie gazu | „Zaproponuj sposób wykrycia amoniaku.” |
| Obliczenia | masa cząsteczkowa, stosunek masowy, zawartość % | „Oblicz zawartość % wodoru w metanie.” → 25% |
| Właściwości i zastosowania | dopasować gaz do zastosowania | „Który gaz jest składnikiem gazu ziemnego?” |
:::

## 18 | Test {#test}

::: test
? Który związek jest wodorkiem?
- NaOH
+ NaH
- NH₄Cl

? Poprawny wzór siarkowodoru to:
- SH₂
+ H₂S
- HS₂

? Stopień utlenienia wodoru w CaH₂ wynosi:
- +I
+ −I
- 0
! Wapń jest mniej elektroujemny od wodoru — w CaH₂ wodór występuje jako anion H⁻.

? Wodorek wapnia z wodą tworzy:
- CaO i H₂O
+ Ca(OH)₂ i H₂
- CaO i H₂

? Wodny roztwór amoniaku ma odczyn:
- kwasowy
- obojętny
+ zasadowy

? Kwas solny to:
- czysty gazowy chlorowodór
+ roztwór chlorowodoru w wodzie
- roztwór chloru w wodzie

? Gaz o zapachu zgniłych jaj, czerniejący bibułę z octanem ołowiu(II), to:
- NH₃
+ H₂S
- HCl

? Biały dym powstaje, gdy spotkają się:
+ NH₃ i HCl
- CH₄ i O₂
- H₂S i HCl

? Który wodorek nie rozpuszcza się w wodzie i nie zmienia barwy wskaźnika?
- NH₃
- HCl
+ CH₄

? Woda wrze w znacznie wyższej temperaturze niż H₂S, ponieważ:
- ma większą masę cząsteczkową
+ między jej cząsteczkami tworzą się wiązania wodorowe
- jest związkiem jonowym

? Najmocniejszym kwasem jest:
- HF
- HCl
+ HI
! W dół grupy wiązanie H–X jest coraz dłuższe i słabsze — łatwiej oddać H⁺.

? Amoniak zbieramy do probówki odwróconej dnem do góry, ponieważ:
+ jest lżejszy od powietrza
- jest cięższy od powietrza
- nie rozpuszcza się w wodzie

? Typ wodorku zależy przede wszystkim od:
- liczby atomów wodoru
+ elektroujemności pierwiastka połączonego z wodorem
- stanu skupienia

? Zawartość procentowa (masowa) wodoru w metanie wynosi:
- 4%
+ 25%
- 75%
! M(CH₄) = 16 g/mol; 4 g H : 16 g = 25%.
:::

::: karta understand {style="margin-top:18px;"} | Sprawdzenie diagnostyczne (zadania otwarte)
1. Napisz wzory i nazwy wodorków pierwiastków okresu 2 od Li do F (pomiń Be).
2. Wyjaśnij, czym różni się wiązanie w NaH od wiązania w HCl.
3. Zapisz reakcję NaH z wodą i wskaż utleniacz oraz reduktor.
4. Zapisz dysocjację kwasu chlorowodorowego i reakcję amoniaku z wodą.
5. Zaproponuj sposób odróżnienia trzech bezbarwnych gazów: NH₃, HCl, CH₄.

::: odp | Pokaż odpowiedzi
1. LiH — wodorek litu; B₂H₆ — diboran; CH₄ — metan; NH₃ — amoniak; H₂O — woda; HF — fluorowodór.
2. NaH — wiązanie jonowe (Na⁺ i H⁻, duża różnica EN); HCl — kowalencyjne spolaryzowane (wspólna para przesunięta do Cl).
3. NaH + H₂O → NaOH + H₂↑; reduktor: H⁻ (z NaH), utleniacz: H⁺ (z wody, H +I).
4. HCl → H⁺ + Cl⁻ (H₂O); NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.
5. Wilgotny papierek uniwersalny: NH₃ — niebieski, HCl — czerwony, CH₄ — bez zmian; CH₄ się pali.
:::
:::

## 19 | Karta szybkiego powtórzenia i mapa myśli {#powtorka}

::: karta core | Na jednej stronie
- **Wodorek** = H + jeden pierwiastek. **Wzór**: wartościowość względem H (gr. 1–2: I–II; 14: IV; 15: III; 16: II; 17: I). Gr. 16–17: H na początku.
- **Typy:** jonowe (metale gr. 1–2, H⁻, −I) · kowalencyjne (niemetale, H +I) · metaliczne (metale przejściowe, H w lukach sieci).
- **W wodzie:** NaH, CaH₂ → wodorotlenek + H₂ · HCl, H₂S → kwasy beztlenowe · NH₃ → roztwór zasadowy · CH₄ → nic.
- **Otrzymywanie lab.:** NH₄Cl + Ca(OH)₂ → NH₃; NaCl + H₂SO₄ → HCl; FeS + HCl → H₂S.
- **Wykrywanie:** NH₃ — papierek niebieski, z HCl biały dym; H₂S — PbS czarny; HCl — z NH₃ biały dym, z Ag⁺ biały osad.
- **Wiązania wodorowe:** H₂O, HF, NH₃ — „za wysokie” t. wrzenia.
- **Trendy (LO):** w okresie kwasowość rośnie z EN partnera; w grupie rośnie w dół (słabsze wiązanie E–H).
:::

::: karta understand | Mapa myśli
**WODORKI** → *budowa*: jonowe (H⁻) · kowalencyjne · metaliczne → *wzory i nazwy*: wartościowość, kolejność zapisu, nazwy zwyczajowe → *właściwości*: stan, zapach, rozpuszczalność, wiązania wodorowe → *w wodzie*: kwasy beztlenowe · zasadowy NH₃ · H₂ z wodorków jonowych → *otrzymywanie*: synteza · sól + kwas/zasada · Haber–Bosch → *zastosowania*: nawozy, paliwa, kwas solny, magazyn wodoru → *BHP*.
:::

## 20 | Fiszki {#fiszki}

::: fiszki
Co to wodorek? | związek wodoru z jednym innym pierwiastkiem | basic:podstawa
Wartościowość N w wodorku | III → NH₃ | basic:podstawa
Wartościowość C w wodorku | IV → CH₄ | basic:podstawa
Kiedy H piszemy na początku wzoru? | w wodorkach grup 16–17: H₂O, H₂S, HCl | basic:podstawa
Wzór siarkowodoru | H₂S | basic:podstawa
Wzór wodorku wapnia | CaH₂ | basic:podstawa
Stopień utlenienia H w NaH | −I (anion H⁻) | understand:rozumienie
Stopień utlenienia H w HCl | +I | basic:podstawa
Trzy typy wodorków | jonowe, kowalencyjne, metaliczne | understand:rozumienie
Co decyduje o typie wodorku? | elektroujemność partnera względem H (2,20) | understand:rozumienie
CaH₂ + H₂O → ? | Ca(OH)₂ + 2 H₂↑ (z 2 H₂O) | basic:podstawa
NH₃ + H₂O ⇌ ? | NH₄⁺ + OH⁻ — roztwór zasadowy | basic:podstawa
Chlorowodór a kwas solny | gaz HCl vs jego roztwór wodny | basic:podstawa
Otrzymywanie NH₃ w laboratorium | 2 NH₄Cl + Ca(OH)₂ → CaCl₂ + 2 NH₃ + 2 H₂O | basic:podstawa
Otrzymywanie HCl w laboratorium | NaCl + H₂SO₄ → NaHSO₄ + HCl | basic:podstawa
Otrzymywanie H₂S | FeS + 2 HCl → FeCl₂ + H₂S | basic:podstawa
Wykrywanie H₂S | czernieje bibuła z octanem ołowiu(II) — PbS | basic:podstawa
Wykrywanie NH₃ | wilgotny papierek uniwersalny niebieski; z HCl biały dym | basic:podstawa
Biały dym NH₃ + HCl | NH₄Cl — chlorek amonu | basic:podstawa
Dlaczego woda wrze w 100 °C? | wiązania wodorowe między cząsteczkami | understand:rozumienie
Najsłabszy kwas z HX | HF (najmocniejsze wiązanie H–X) | extra:ambitne
Najmocniejszy kwas z HX | HI | extra:ambitne
Dowód na H⁻ w LiH | elektroliza stopionego LiH — H₂ na anodzie | extra:ambitne
Synteza Habera–Boscha | N₂ + 3 H₂ ⇌ 2 NH₃, Fe, ok. 450 °C, 15–25 MPa | extra:ambitne
Wodorek metaliczny — przykład | PdHₓ, TiH₂ — H w lukach sieci metalu | extra:ambitne
Metan — gdzie? | gaz ziemny, biogaz; CH₄ + 2 O₂ → CO₂ + 2 H₂O | basic:podstawa
:::

## 21 | Słownik {#slownik}

::: karta -
::: slownik
Wodorek :: związek wodoru z jednym innym pierwiastkiem
Wodorek jonowy :: wodorek metalu aktywnego (gr. 1–2), zbudowany z kationów metalu i anionów H⁻
Anion wodorkowy :: H⁻ — atom wodoru z dodatkowym elektronem (2 elektrony, konfiguracja helu)
Wodorek kowalencyjny :: wodorek niemetalu, cząsteczki z wiązaniami kowalencyjnymi E–H (CH₄, NH₃, HCl)
Wodorek metaliczny :: wodorek metalu przejściowego; atomy H zajmują luki w sieci metalu, skład zmienny
Kwas beztlenowy :: wodny roztwór wodorku niemetalu z grupy 16 lub 17 (HCl, H₂S)
Woda amoniakalna :: wodny roztwór amoniaku; odczyn zasadowy
Wiązanie wodorowe :: przyciąganie atomu H związanego z F, O lub N przez wolną parę elektronową innego atomu F, O lub N
Synproporcjonowanie :: reakcja redoks, w której ten sam pierwiastek z dwóch stopni utlenienia przechodzi na jeden wspólny (H⁻ + H⁺ → H₂)
Aparat Kippa :: urządzenie do otrzymywania gazów (H₂, H₂S, CO₂) z ciała stałego i cieczy „na żądanie”
:::
:::

## 22 | Checklista {#checklista}

::: karta basic | Umiem…
- ☐ zdefiniować wodorek i wskazać wodorki wśród innych związków z wodorem,
- ☐ ułożyć wzór wodorku z wartościowości i zapisać H we właściwym miejscu,
- ☐ nazwać wodorki metali oraz CH₄, NH₃, H₂O, H₂S, HCl, HF, HBr, HI,
- ☐ rozróżnić wodorki jonowe, kowalencyjne i metaliczne oraz podać stopień utlenienia H,
- ☐ zapisać reakcję wodorku jonowego z wodą i wyjaśnić, dlaczego to redoks,
- ☐ opisać zachowanie NH₃, HCl, H₂S i CH₄ w wodzie,
- ☐ zapisać laboratoryjne otrzymywanie NH₃, HCl i H₂S,
- ☐ wykryć NH₃, HCl, H₂S i produkty spalania CH₄,
- ☐ wyjaśnić wysoką temperaturę wrzenia wody wiązaniami wodorowymi,
- ☐ (ambitnie) uzasadnić trendy kwasowości wodorków w okresie i grupie.
:::

## A | Dodatek A — mosty i co dalej {#mosty}

::: karta understand | Powiązania
- **N03 Kwasy** — HCl i H₂S jako kwasy beztlenowe: moc, dysocjacja, reakcje, otrzymywanie z wodorków.
- **N02 Wodorotlenki** — produkty reakcji wodorków jonowych z wodą; amoniak a zasady.
- **N04 Sole** — jon amonowy NH₄⁺, siarczki (PbS, CuS) jako czarne osady, chlorek amonu.
- **N06 Systematyka** — wodorki jako jedna z klas związków nieorganicznych obok tlenków, wodorotlenków, kwasów i soli.
- **Chemia organiczna** — metan jako pierwszy węglowodór (alkany).
- **Redoks i elektrochemia** — wodorki jako reduktory, elektroliza LiH, ogniwa i magazynowanie wodoru.
:::

## ↻ | Modele silnika w tej lekcji {#modele}

| Sekcja | Model | Co pokazuje |
|---|---|---|
| [§1](#definicja) | `n05-wodorki-v01` | mapa wodorków: typ, rola H, EN, właściwości |
| [§5](#wlasciwosci) | `n05-trendy-v01` | temperatury wrzenia gr. 14–17, wiązania wodorowe |
| [§6](#woda) | `ph-indicators-v03` | wskaźniki i skala pH |
| [§8](#reakcje) | `n05-doswiadczenia-v01` | pracownia: 12 zlewek z wodorkami |


## AUDYT W1 — wynik (2026-10-09, GPT-6)

- **Bezpieczeństwo H₂S:** usunięto wąchanie jako metodę identyfikacji; pozostawiono opis zapachu wyłącznie jako właściwość, z ostrzeżeniem o osłabieniu węchu i toksyczności. Wykrywanie oparto na odpowiednim papierku/reakcji modelowej.
- **Bezpieczeństwo NH₃ i HCl:** usunięto celowe wąchanie i „nagarnianie” zapachu jako procedurę; podkreślono rolę wskaźników i kontrolowanych pokazów.
- **Niebezpieczne pokazy:** dopisano wyraźne ograniczenie doświadczeń z CaH₂, NH₃, HCl i H₂S do wykwalifikowanego prowadzącego, z oceną ryzyka i dygestorium; wskazano symulację jako alternatywę.
- **Zakres reguły wzorów:** regułę kolejności zapisu wodoru ograniczono do typowych przykładów, bez przedstawiania jej jako uniwersalnej zasady dla wszystkich wodorków.
- **Dane fizyczne:** liczby rozpuszczalności zależne od warunków oznaczono `[do weryfikacji]`; temperatury wrzenia opisano jako wartości przy ciśnieniu około 1 atm.
- **Ograniczenie:** nie przeprowadzono pełnego audytu każdego z 882 wierszy ani niezależnej weryfikacji wszystkich danych liczbowych. Wymagana recenzja chemiczna i BHP przed użyciem jako instrukcji laboratoryjnej.
