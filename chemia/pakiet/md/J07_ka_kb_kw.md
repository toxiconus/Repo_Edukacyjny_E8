---
kod: J07
tytul: Ka, Kb i Kw
opis: stała dysocjacji kwasu Ka · stała dysocjacji zasady Kb · iloczyn jonowy wody Kw · pKa · pKb · stopień dysocjacji α · prawo rozcieńczenia Ostwalda · pH słabego kwasu · para sprzężona kwas–zasada · równowaga dysocjacji · założenia przybliżeń
uid: CHE.04.J07.ka_kb_kw
kicker: J07 · CHEMIA · Jony w roztworach · POZIOM ROZSZERZONY / KONKURS
lead: Słaby kwas ma swoją moc zapisaną liczbą. Stała dysocjacji Ka pokazuje, jak chętnie kwas oddaje proton, a z niej można obliczyć stężenie jonów H₃O⁺ oraz pH roztworu.
plakietki: [[understand:ROZUMIENIE]][[extra:LO]]
uwaga: Lekcja należy do poziomu rozszerzonego. Wzory przybliżone stosuje się wyłącznie dla słabych elektrolitów, przy stężeniach znacznie większych od Ka oraz gdy stopień dysocjacji jest mały. Wartość Kw zależy od temperatury; wartość 1,0·10⁻¹⁴ dotyczy około 25 °C. W dokładniejszym zapisie proton w wodzie występuje jako H₃O⁺, a symbol H⁺ jest konwencjonalnym skrótem.
stopka: CHEMIA J07 · Ka, Kb i Kw · Materiał do samodzielnej nauki · 2026
stan: ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia
---


::: minimum | Muszę umieć — 10 punktów
1. Zapisuję równanie dysocjacji słabego kwasu HA w wodzie: HA + H₂O ⇌ H₃O⁺ + A⁻, a w uproszczeniu HA ⇌ H⁺ + A⁻.
2. Zapisuję wyrażenie stałej dysocjacji kwasu: Ka = [H₃O⁺]·[A⁻]/[HA]. Im większa Ka, tym mocniejszy kwas.
3. Zapisuję równanie dysocjacji słabej zasady B w wodzie: B + H₂O ⇌ BH⁺ + OH⁻.
4. Zapisuję wyrażenie stałej dysocjacji zasady: Kb = [BH⁺]·[OH⁻]/[B]. Im większa Kb, tym mocniejsza zasada.
5. Zapisuję iloczyn jonowy wody: Kw = [H₃O⁺]·[OH⁻]. W temperaturze około 25 °C Kw = 1,0·10⁻¹⁴.
6. Obliczam pKa z Ka oraz Ka z pKa: pKa = −log Ka, a Ka = 10⁻ᵖᴷᵃ. Mniejsza pKa oznacza mocniejszy kwas.
7. Dla pary sprzężonej kwas–zasada stosuję zależność Ka·Kb = Kw.
8. Dla słabego kwasu jednoprotonowego, gdy c jest znacznie większe od Ka, stosuję przybliżenie [H₃O⁺] = √(Ka·c).
9. Obliczam pH słabego kwasu: pH = −log[H₃O⁺], a przy użyciu przybliżenia pH = ½(pKa − log c).
10. Wyjaśniam prawo rozcieńczenia Ostwalda: przy rozcieńczaniu słabego elektrolitu jego stopień dysocjacji rośnie, choć stała Ka pozostaje stała w danej temperaturze.
:::

::: warstwy
- understand | <b>Rozumienie:</b> co mówi stała Ka, dlaczego słaby kwas ustala równowagę, dlaczego Ka nie zależy od stężenia roztworu, a stopień dysocjacji tak, oraz kiedy można stosować wzory przybliżone.
- extra | <b>Poziom rozszerzony:</b> pKa, pKb, prawo rozcieńczenia Ostwalda, obliczenia pH słabych kwasów, para sprzężona oraz zależność Ka·Kb = Kw.
- contest | <b>Konkurs:</b> analiza założeń przybliżeń, porównywanie mocy kwasów i zasad, obliczenia odwrotne, sprawdzanie sensowności wyniku oraz rozróżnianie Ka, Kb i Kw.
- extra | <b>Ambitne:</b> wpływ temperatury na Kw, dokładniejszy zapis z H₃O⁺, granice stosowania wzoru √(Ka·c) oraz związek stałych równowagi z mocą kwasów i zasad.
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
- [§1](#wyklad) — Wykład od zera: stała, która opisuje moc słabego kwasu.
- [§2](#definicje) — Definicje i wzory: Ka, Kb, Kw, pKa.
- [§3](#przyklady) — Przykłady prowadzone: pH, pKa i para sprzężona.
- [§4](#klinika) — Klinika błędów.
- [§5](#cwiczenia) — Ćwiczenia z kluczem.
- [§6](#ciekawostki) — Ciekawostki.
- [§7](#slownik) — Słownik.
- [§8](#test) — Test końcowy.
- [§9](#ciekawostki-dodatkowe) — Ciekawostki dodatkowe.
- [§10](#wyklad-rozszerzenie) — Wykład rozszerzający.
- [§11](#checklista) — Checklista.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

Po tej lekcji potrafisz:

- zapisać wyrażenia Ka i Kb dla słabego kwasu oraz słabej zasady;
- obliczyć pKa z Ka i odwrotnie;
- obliczyć [H₃O⁺] oraz pH słabego kwasu przy użyciu uzasadnionego przybliżenia;
- wyjaśnić prawo rozcieńczenia Ostwalda;
- sprawdzić, czy wzór przybliżony może być zastosowany w danym zadaniu.

Kolejność pracy:

1. Zacznij od diagnozy w [§0.4](#diagnoza). Odpowiedz samodzielnie, a dopiero potem sprawdź klucz.
2. Przeczytaj wykład w [§1](#wyklad). Pokazuje, skąd bierze się stała Ka i dlaczego opisuje moc kwasu.
3. W sekcji [§2](#definicje) zapisz wszystkie wzory we własnych notatkach. Nie ucz się ich mechanicznie: do każdego wzoru dopisz, jakiego procesu dotyczy.
4. W [§3](#przyklady) najpierw sam rozwiąż każdy przykład, a potem porównaj z kluczem.
5. Przejdź przez klinika błędów, ćwiczenia i test. Błędne odpowiedzi wskażą fragment do powtórki.
6. Sekcje oznaczone jako poziom rozszerzony traktuj jako trening obliczeniowy, a nie jako obowiązkową podstawę szkolną.

Przydatne wcześniej: pH i skala logarytmiczna z lekcji J02, równowagi i pary sprzężone z J06, podstawowe pojęcie stałej równowagi z K09. Ta lekcja stosuje te idee do dysocjacji kwasów i zasad.

## 0.2 | Cele i pytanie przewodnie {#cele}

Pytanie przewodnie: **Jak liczbowo opisać moc słabego kwasu i obliczyć pH jego roztworu?**

Po tej lekcji potrafisz:

- zapisać wyrażenia Ka i Kb;
- obliczyć pKa z Ka i odwrotnie;
- obliczyć [H₃O⁺] oraz pH słabego kwasu z przybliżeniem;
- wyjaśnić prawo Ostwalda;
- rozpoznać sytuacje, w których przybliżenie nie jest zasadne.

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- **Równowaga dynamiczna i pary sprzężone** — J06.
- **pH i skala logarytmiczna** — J02.
- **Stała równowagi** — K09; tutaj stosujemy ją do dysocjacji.
- **Słabe kwasy, pary sprzężone i równowagi** — J06.
- **Hydroliza soli** — J08; korzysta z Ka, Kb i Kw.

## 0.4 | Diagnoza startowa {#diagnoza}

Odpowiedz najpierw samodzielnie.

1. Co to jest Ka?
2. Ile wynosi Kw w temperaturze około 25 °C?
3. Jak z Ka obliczyć pKa?
4. Co mówi prawo rozcieńczenia Ostwalda?
5. Jak przybliżyć [H₃O⁺] dla słabego kwasu jednoprotonowego?

::: odp | Klucz diagnozy i interpretacja
1. (1 pkt) Ka to stała dysocjacji kwasu. Opisuje położenie równowagi dysocjacji kwasu i jego skłonność do oddawania protonu.

2. (1 pkt) W temperaturze około 25 °C Kw = 1,0·10⁻¹⁴.

3. (1 pkt) pKa = −log Ka.

4. (1 pkt) Przy rozcieńczaniu słabego elektrolitu jego stopień dysocjacji rośnie.

5. (1 pkt) Dla słabego kwasu jednoprotonowego, gdy c jest znacznie większe od Ka, [H₃O⁺] = √(Ka·c).

Interpretacja wyniku: 5 pkt — przejdź do przykładów; 3–4 pkt — przeczytaj punkty 3 i 4; 0–2 pkt — zacznij od rdzenia lekcji.
:::

## 1 | Wykład — stała, która opisuje kwas {#wyklad} [[understand:ROZUMIENIE]]

W J06 poznałeś słaby kwas jakościowo: dysocjuje tylko częściowo. Chemik chce jednak wiedzieć więcej. Jak daleko leży równowaga po stronie jonów? Czy kwas o stężeniu 0,1 mol/dm³ da więcej jonów H₃O⁺ niż kwas o stężeniu 0,01 mol/dm³? Jak obliczyć pH?

Na te pytania odpowiada **stała dysocjacji kwasu**, oznaczana Ka.

Rozpatrz słaby kwas HA. W wodzie zachodzi reakcja:

HA + H₂O ⇌ H₃O⁺ + A⁻

Kwas HA oddaje proton cząsteczce wody. Powstaje jon hydroniowy H₃O⁺ oraz sprzężona zasada A⁻. Woda pełni rolę zasady Brønsteda, ponieważ przyjmuje proton.

W szkolnym zapisie uproszczonym często pomija się wodę:

HA ⇌ H⁺ + A⁻

Oba zapisy opisują ten sam proces, ale pierwszy jest dokładniejszy. Symbol H⁺ nie oznacza samotnego protonu pływającego w wodzie. Proton jest związany z cząsteczką wody, dlatego dokładniejszym modelem jest H₃O⁺.

Dla równowagi HA + H₂O ⇌ H₃O⁺ + A⁻ zapisujemy:

Ka = [H₃O⁺]·[A⁻]/[HA]

Woda jest rozpuszczalnikiem i jej stężenie pozostaje praktycznie stałe, dlatego nie wpisuje się go do wyrażenia stałej.

Ka jest liczbą charakterystyczną dla danego kwasu w danej temperaturze. Nie zależy od tego, ile kwasu rozpuszczono. Zmienia się natomiast stopień dysocjacji α.

Jeżeli Ka jest duża, równowaga leży bardziej po stronie jonów H₃O⁺ i A⁻. Kwas oddaje proton chętniej, więc jest mocniejszy. Jeżeli Ka jest mała, większość cząsteczek HA pozostaje niezdysocjowana, a kwas jest słabszy.

Porównanie: kwas o Ka = 1,8·10⁻⁵ jest mocniejszy niż kwas o Ka = 1,0·10⁻⁸, ponieważ pierwsza wartość jest większa. Różnica wynosi około trzy rzędy wielkości.

Stężenia jonów w roztworach mogą różnić się o wiele rzędów wielkości. Dlatego wygodnie jest używać logarytmów. Dla kwasu wprowadza się pKa:

pKa = −log Ka

Mniejsza pKa oznacza większą Ka, a więc mocniejszy kwas. Na przykład:

- Ka = 1,0·10⁻⁴ → pKa = 4
- Ka = 1,0·10⁻⁵ → pKa = 5
- Ka = 1,0·10⁻⁸ → pKa = 8

Kwas o pKa = 4 jest mocniejszy niż kwas o pKa = 8.

Podobnie dla słabej zasady B:

B + H₂O ⇌ BH⁺ + OH⁻

Kb = [BH⁺]·[OH⁻]/[B]

Kb opisuje skłonność zasady do przyjmowania protonu od wody i wytwarzania OH⁻. Im większa Kb, tym mocniejsza zasada.

Woda sama w sobie jest bardzo słabym elektrolitem:

2H₂O ⇌ H₃O⁺ + OH⁻

Dla tej równowagi:

Kw = [H₃O⁺]·[OH⁻]

W temperaturze około 25 °C:

Kw = 1,0·10⁻¹⁴

W czystej wodzie [H₃O⁺] = [OH⁻] = 1,0·10⁻⁷ mol/dm³, dlatego pH = 7. Woda pozostaje obojętna, ponieważ stężenia obu rodzajów jonów są równe.

Dla sprzężonej pary kwas–zasada HA/A⁻ zachodzi ważna zależność:

Ka·Kb = Kw

Jeżeli kwas jest mocniejszy, jego sprzężona zasada jest słabsza. Zwiększenie Ka powoduje zmniejszenie Kb, ponieważ iloczyn obu stałych pozostaje równy Kw w danej temperaturze.

Dla słabego kwasu jednoprotonowego o początkowym stężeniu c można zapisać tabelę równowagi:

| Substancja | Początkowo | Zmiana | W równowadze |
|---|---|---|---|
| HA | c | −x | c − x |
| H₃O⁺ | około 0 | +x | x |
| A⁻ | 0 | +x | x |

Wtedy:

Ka = x²/(c − x)

Jeżeli x jest znacznie mniejsze od c, można przyjąć c − x ≈ c. Wtedy:

Ka ≈ x²/c

x = √(Ka·c)

Czyli:

[H₃O⁺] ≈ √(Ka·c)

To przybliżenie działa tylko wtedy, gdy:

- kwas jest słaby;
- Ka jest znacznie mniejsze od c;
- stopień dysocjacji jest mały;
- nie trzeba uwzględniać jonów z innych źródeł.

Jeżeli kwas jest bardzo rozcieńczony, x może nie być pomijalne względem c. Jeżeli kwas jest mocny, dysocjuje praktycznie całkowicie i nie stosuje się wzoru √(Ka·c). Dla mocnego kwasu jednoprotonowego [H₃O⁺] ≈ c.

::: karta understand | W skrócie — po co stała dysocjacji?
Ka odpowiada na pytanie: jak daleko przesuwa się równowaga dysocjacji kwasu w stronę jonów? Duża Ka oznacza mocniejszy kwas, mała Ka — słabszy. Ka zależy od rodzaju kwasu i temperatury, ale nie od stężenia roztworu.
:::

::: karta understand | W skrócie — po co logarytm?
Stężenia jonów i stałe dysocjacji często mają wartości typu 10⁻⁵ lub 10⁻⁸. Logarytm zamienia je na wygodniejsze liczby. pH opisuje stężenie H₃O⁺, a pKa opisuje Ka. Zmiana o 1 jednostkę oznacza dziesięciokrotną zmianę wielkości.
:::

::: karta core | W skrócie — Ka w jednym zdaniu
Ka opisuje moc słabego kwasu niezależnie od stężenia roztworu. Z Ka i stężenia kwasu oblicza się [H₃O⁺], a następnie pH.
:::

::: karta warning | Uwaga — wzór √(Ka·c) tylko dla słabych kwasów
Wzoru [H₃O⁺] = √(Ka·c) nie stosuje się do mocnych kwasów. Mocny kwas dysocjuje praktycznie całkowicie, więc [H₃O⁺] ≈ c. Przed obliczeniem zawsze sprawdź, czy kwas jest słaby oraz czy Ka jest znacznie mniejsze od c.
:::

## 2 | Definicje i wzory {#definicje} [[understand:ROZUMIENIE]]

Kwas HA:

HA + H₂O ⇌ H₃O⁺ + A⁻

Ka = [H₃O⁺]·[A⁻]/[HA]

Zasada B:

B + H₂O ⇌ BH⁺ + OH⁻

Kb = [BH⁺]·[OH⁻]/[B]

Woda:

2H₂O ⇌ H₃O⁺ + OH⁻

Kw = [H₃O⁺]·[OH⁻]

W temperaturze około 25 °C:

Kw = 1,0·10⁻¹⁴

Dla pary sprzężonej HA/A⁻:

Ka·Kb = Kw

Definicje logarytmiczne:

pKa = −log Ka

pKb = −log Kb

pH = −log[H₃O⁺]

pOH = −log[OH⁻]

W temperaturze około 25 °C:

pH + pOH = 14

Dla słabego kwasu jednoprotonowego, gdy przybliżenie jest uzasadnione:

[H₃O⁺] ≈ √(Ka·c)

pH ≈ ½(pKa − log c)

Dla słabej zasady jednoprotonowej, gdy przybliżenie jest uzasadnione:

[OH⁻] ≈ √(Kb·c)

pOH ≈ ½(pKb − log c)

pH = 14 − pOH

w temperaturze około 25 °C.

| Wielkość | Proces | Wzór | Interpretacja |
|---|---|---|---|
| Ka | dysocjacja kwasu | Ka = [H₃O⁺]·[A⁻]/[HA] | większa Ka — mocniejszy kwas |
| Kb | dysocjacja zasady | Kb = [BH⁺]·[OH⁻]/[B] | większa Kb — mocniejsza zasada |
| Kw | autodysocjacja wody | Kw = [H₃O⁺]·[OH⁻] | w 25 °C wynosi 1,0·10⁻¹⁴ |
| pKa | logarytm Ka | pKa = −log Ka | mniejsza pKa — mocniejszy kwas |
| pKb | logarytm Kb | pKb = −log Kb | mniejsza pKb — mocniejsza zasada |
| α | stopień dysocjacji | α = liczba zdysocjowanych cząsteczek/liczba cząsteczek początkowych | rośnie przy rozcieńczaniu słabego elektrolitu |

Stopień dysocjacji α można wyrazić jako ułamek lub procent:

α = x/c

gdzie x to stężenie zdysocjowanej części kwasu, a c — początkowe stężenie kwasu.

Dla słabego kwasu jednoprotonowego, przy uzasadnionym przybliżeniu:

α ≈ √(Ka/c)

To jest jedna z form prawa rozcieńczenia Ostwalda. Przy zmniejszaniu c wartość α rośnie.

::: karta understand | W skrócie — Ka, Kb i Kw
Ka opisuje kwas, Kb opisuje zasadę, a Kw opisuje wodę. Dla sprzężonej pary kwas–zasada iloczyn Ka i Kb jest równy Kw. Wszystkie trzy stałe zależą od temperatury.
:::

::: nie-myl | Ka, Kb, Kw i α
- Ka ≠ Kb — Ka dotyczy dysocjacji kwasu, Kb dysocjacji zasady; test rozstrzygający: sprawdź, czy w równaniu powstaje H₃O⁺ czy OH⁻.
- Kw ≠ Ka — Kw opisuje autodysocjację wody, a Ka konkretny kwas; test rozstrzygający: Kw jest takie samo dla wszystkich rozcieńczonych roztworów wodnych w danej temperaturze.
- α ≠ Ka — α zależy od stężenia, a Ka w danej temperaturze nie; test rozstrzygający: rozcieńczanie zwiększa α, ale nie zmienia Ka.
- Mocny kwas ≠ stężony kwas — moc opisuje dysocjację, stężenie ilość substancji w objętości; test rozstrzygający: rozcieńczony HCl pozostaje mocnym kwasem.
:::

::: karta warning | Uwaga — Ka nie zależy od stężenia
Zdanie „po rozcieńczeniu Ka kwasu zmalało” jest błędne. W danej temperaturze Ka pozostaje stała. Zmienia się stopień dysocjacji α oraz stężenia jonów w roztworze.
:::

## 2a | Prawo rozcieńczeń Ostwalda — wzór ścisły {#ostwald} [[extra:LO]]

Dla słabego elektrolitu jednoprotonowego o stężeniu c i stopniu dysocjacji α:

Ka = α²·c / (1 − α).

Gdy α ≪ 1, przybliżamy: Ka ≈ α²·c, czyli α ≈ √(Ka / c).

Z tego wynika, że przy rozcieńczaniu (mniejsze c) α rośnie: prawo Ostwalda.

## 3 | Przykłady prowadzone {#przyklady} [[extra:LO]]

**Przykład 1 — pH słabego kwasu.**

Kwas octowy CH₃COOH ma Ka = 1,8·10⁻⁵. Oblicz [H₃O⁺] oraz pH roztworu o stężeniu c = 0,1 mol/dm³.

Rozwiązanie:

[H₃O⁺] ≈ √(Ka·c)

[H₃O⁺] ≈ √(1,8·10⁻⁵ · 0,1)

[H₃O⁺] ≈ √(1,8·10⁻⁶)

[H₃O⁺] ≈ 1,34·10⁻³ mol/dm³

pH = −log(1,34·10⁻³)

pH ≈ 2,87

Sprawdzenie założenia: x = 1,34·10⁻³, a c = 0,1. Ponieważ x jest znacznie mniejsze od c, przybliżenie jest uzasadnione.

**Przykład 2 — pKa na Ka.**

Jeżeli pKa = 4,76, to:

Ka = 10⁻ᵖᴷᵃ

Ka = 10⁻⁴·⁷⁶

Ka ≈ 1,74·10⁻⁵

**Przykład 3 — Ka sprzężonego kwasu amoniaku.**

Dla amoniaku Kb(NH₃) = 1,8·10⁻⁵. Jon NH₄⁺ jest sprzężonym kwasem amoniaku. Oblicz Ka(NH₄⁺).

Ka·Kb = Kw

Ka = Kw/Kb

Ka = 1,0·10⁻¹⁴/(1,8·10⁻⁵)

Ka ≈ 5,6·10⁻¹⁰

**Przykład 4 — stopień dysocjacji.**

Dla kwasu o Ka = 1,8·10⁻⁵ i c = 0,1 mol/dm³:

α ≈ √(Ka/c)

α ≈ √(1,8·10⁻⁵/0,1)

α ≈ √(1,8·10⁻⁴)

α ≈ 0,0134

Czyli α ≈ 1,3%.

::: karta warning | Pułapka — wzór Ka·c tylko dla słabych kwasów
Do mocnego kwasu nie stosuje się [H₃O⁺] = √(Ka·c). Mocny kwas dysocjuje praktycznie całkowicie, więc [H₃O⁺] ≈ c. Zawsze najpierw sprawdź, czy kwas jest słaby.
:::

::: karta exam | Zadanie 1 (3 pkt) — pH słabego kwasu
Kwas HA ma Ka = 1,0·10⁻⁵. Stężenie roztworu wynosi c = 0,01 mol/dm³.

a) Zapisz wyrażenie na Ka. (1 pkt)

b) Oblicz [H₃O⁺], stosując uzasadnione przybliżenie. (1 pkt)

c) Oblicz pH. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Ka = [H₃O⁺]·[A⁻]/[HA].

b) (1 pkt) [H₃O⁺] ≈ √(Ka·c) = √(1,0·10⁻⁵ · 1,0·10⁻²) = √(1,0·10⁻⁷) ≈ 3,16·10⁻⁴ mol/dm³.

c) (1 pkt) pH = −log(3,16·10⁻⁴) ≈ 3,5.
:::
:::

::: adv | Zadanie 2 (4 pkt) — Kb z Ka sprzężonego kwasu | poziom ambitny
Kwas sprzężony pewnej zasady ma Ka = 4,0·10⁻⁵ w temperaturze około 25 °C.

a) Zapisz zależność między Ka, Kb i Kw. (1 pkt)

b) Oblicz Kb sprzężonej zasady. (1 pkt)

c) Wyjaśnij, czy zasada jest mocna czy słaba. (1 pkt)

d) Wyjaśnij, dlaczego zwiększenie Ka kwasu powoduje zmniejszenie Kb jego sprzężonej zasady. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Ka·Kb = Kw.

b) (1 pkt) Kb = Kw/Ka = 1,0·10⁻¹⁴/(4,0·10⁻⁵) = 2,5·10⁻¹⁰.

c) (1 pkt) Zasada jest słaba, ponieważ jej Kb ma bardzo małą wartość.

d) (1 pkt) W danej temperaturze Kw jest stałe. Jeżeli Ka rośnie, to aby iloczyn Ka·Kb pozostał równy Kw, Kb musi maleć.
:::
:::

## 4 | Klinika błędów {#klinika} [[understand:ROZUMIENIE]]

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Używam wzoru Ka·c dla mocnego kwasu.” | Dla mocnego kwasu [H₃O⁺] ≈ c. | Wzór zakłada słaby kwas i mały stopień dysocjacji. Mocny kwas dysocjuje praktycznie całkowicie. |
| „Kw zależy od rodzaju kwasu.” | Kw zależy od temperatury, nie od rodzaju kwasu. | Kw opisuje autodysocjację wody i jest wspólne dla rozcieńczonych roztworów wodnych w danej temperaturze. |
| „Po rozcieńczeniu Ka maleje.” | Po rozcieńczeniu α rośnie, a Ka pozostaje stała w danej temperaturze. | Ka jest stałą równowagi charakterystyczną dla kwasu i temperatury. |
| „Dla zasady używam Ka.” | Dla zasady stosuje się Kb. | Ka opisuje dysocjację kwasu, a Kb dysocjację zasady. |
| „pKa = log Ka.” | pKa = −log Ka. | Znak minus sprawia, że mniejsza pKa odpowiada większej Ka i mocniejszemu kwasowi. |
| „Mniejsza pKa oznacza słabszy kwas.” | Mniejsza pKa oznacza mocniejszy kwas. | pKa = −log Ka, więc mniejsza pKa odpowiada większej Ka. |
| „Wzór √(Ka·c) zawsze daje dokładny wynik.” | Wzór jest przybliżeniem; sprawdź, czy x jest znacznie mniejsze od c. | Przy bardzo rozcieńczonych roztworach lub większych Ka założenie c − x ≈ c może być nieuzasadnione. |
| „Kw = 1,0·10⁻¹⁴ zawsze i wszędzie.” | Kw = 1,0·10⁻¹⁴ w temperaturze około 25 °C. | Kw rośnie wraz z temperaturą, więc w innej temperaturze wartość się zmienia. |
| „Mocny kwas to zawsze stężony kwas.” | Mocny kwas może być rozcieńczony. | Moc opisuje stopień dysocjacji, a stężenie ilość substancji w objętości. |
| „pH słabego kwasu nie zależy od stężenia.” | pH zależy od stężenia, choć zależność jest słabsza niż dla mocnego kwasu. | W przybliżeniu [H₃O⁺] = √(Ka·c), więc zmiana c zmienia [H₃O⁺] i pH. |
:::

::: mity
„Im większe stężenie słabego kwasu, tym większa Ka.” || Ka nie zależy od stężenia w danej temperaturze. Zwiększenie stężenia zwiększa [H₃O⁺], ale nie zmienia stałej równowagi.

„Każdy kwas można opisać wzorem √(Ka·c).” || Wzór dotyczy słabych kwasów jednoprotonowych przy małym stopniu dysocjacji. Dla mocnych kwasów [H₃O⁺] ≈ c.

„Kw to stała dysocjacji kwasu.” || Kw to iloczyn jonowy wody, opisujący równowagę 2H₂O ⇌ H₃O⁺ + OH⁻.

„Jeżeli pH wynosi 7, roztwór zawsze jest obojętny.” || W temperaturze około 25 °C pH = 7 odpowiada roztworowi obojętnemu. W innej temperaturze obojętność odpowiada innemu pH, ponieważ Kw się zmienia.

„Mocniejszy kwas ma większą pKa.” || Mocniejszy kwas ma większą Ka, a więc mniejszą pKa.

„Para sprzężona ma dwa niezależne stałe Ka i Kb.” || Dla pary sprzężonej iloczyn Ka·Kb jest równy Kw w danej temperaturze.
:::

## 5 | Ćwiczenia z kluczem {#cwiczenia} [[extra:LO]]

**Ćwiczenie 1.** Oblicz pKa dla Ka = 1,0·10⁻⁵.

::: odp | Klucz
pKa = −log(1,0·10⁻⁵) = 5.
:::

**Ćwiczenie 2.** Oblicz [H₃O⁺] oraz pH dla c = 0,01 mol/dm³ i Ka = 1,0·10⁻⁵, stosując przybliżenie.

::: odp | Klucz
[H₃O⁺] ≈ √(1,0·10⁻⁵ · 1,0·10⁻²) = √(1,0·10⁻⁷) ≈ 3,16·10⁻⁴ mol/dm³.

pH ≈ 3,5.
:::

**Ćwiczenie 3.** Oblicz stopień dysocjacji dla c = 0,1 mol/dm³ i Ka = 1,8·10⁻⁵, stosując przybliżenie.

::: odp | Klucz
α ≈ √(Ka/c) = √(1,8·10⁻⁵/0,1) = √(1,8·10⁻⁴) ≈ 0,0134, czyli około 1,3%.
:::

**Ćwiczenie 4.** Ka sprzężonego kwasu wynosi 4,0·10⁻⁵ w temperaturze około 25 °C. Oblicz Kb sprzężonej zasady.

::: odp | Klucz
Kb = Kw/Ka = 1,0·10⁻¹⁴/(4,0·10⁻⁵) = 2,5·10⁻¹⁰.
:::

**Ćwiczenie 5 — mini-test samodzielny.** Odpowiedz bez zaglądania do lekcji: 1) Co to jest Ka? 2) Ile wynosi Kw w około 25 °C? 3) Jak oblicza się pKa? 4) Co mówi prawo Ostwalda? 5) Jak przybliża się [H₃O⁺] dla słabego kwasu? Potem sprawdź odpowiedzi w diagnozie.

## 5a | Fiszki {#fiszki}

::: fiszki
Co to Ka? | stała dysocjacji kwasu | basic:podstawa
Ile wynosi Kw w 25 °C? | 1,0·10⁻¹⁴ | basic:podstawa
Jak obliczyć pKa? | pKa = −log Ka | basic:podstawa
Co mówi prawo Ostwalda? | α rośnie przy rozcieńczaniu | understand:rozumienie
Wzór na [H₃O⁺] słabego kwasu? | √(Ka·c) | extra:LO
Czy Ka zależy od stężenia? | nie — zależy od kwasu i T | understand:rozumienie
Jak obliczyć pKb? | pKb = −log Kb | basic:podstawa
Jak wiążą się Ka i Kb pary sprzężonej? | Ka · Kb = Kw | understand:rozumienie
:::

## 6 | Ciekawostki {#ciekawostki} [[extra:AMBITNE]]

::: karta extra | Dlaczego pKa jest wygodniejsze niż Ka?
Stałe dysocjacji mają często wartości rzędu 10⁻⁴ lub 10⁻¹⁰. Logarytm zamienia je na liczby takie jak 4 lub 10. Dzięki temu łatwiej porównywać moce kwasów, podobnie jak pH ułatwia porównywanie stężeń jonów H₃O⁺.
:::

::: karta extra | Kw a temperatura
Iloczyn jonowy wody rośnie wraz z temperaturą. W wyższej temperaturze pH czystej wody może być mniejsze niż 7, mimo że woda pozostaje obojętna, ponieważ [H₃O⁺] = [OH⁻].
:::

::: karta extra | Dlaczego rozcieńczanie zwiększa α?
Po rozcieńczeniu liczba cząsteczek kwasu w jednostce objętości maleje. Aby zachować tę samą wartość Ka, większa część dostępnych cząsteczek HA musi ulec dysocjacji. Dlatego stopień dysocjacji α rośnie, choć Ka pozostaje stałe.
:::

## 7 | Słownik {#slownik} [[understand:ROZUMIENIE]]

::: slownik
Stała dysocjacji Ka :: stała równowagi dysocjacji kwasu; im większa, tym mocniejszy kwas.
Stała dysocjacji Kb :: stała równowagi dysocjacji zasady; im większa, tym mocniejsza zasada.
Iloczyn jonowy wody Kw :: iloczyn stężeń [H₃O⁺] i [OH⁻]; w około 25 °C wynosi 1,0·10⁻¹⁴.
pKa :: ujemny logarytm Ka; mniejsza wartość oznacza mocniejszy kwas.
pKb :: ujemny logarytm Kb; mniejsza wartość oznacza mocniejszą zasadę.
Kwas słaby :: kwas dysocjujący w roztworze tylko częściowo.
Zasada słaba :: zasada dysocjująca w roztworze tylko częściowo.
Stopień dysocjacji :: ułamek cząsteczek, które uległy dysocjacji.
Prawo rozcieńczenia Ostwalda :: zależność mówiąca, że stopień dysocjacji słabego elektrolitu rośnie przy rozcieńczaniu.
Para sprzężona :: kwas i zasada różniące się jednym protonem.
Zasada Brønsteda :: substancja zdolna przyjmować proton.
Kwas Brønsteda :: substancja zdolna oddawać proton.
Jon hydroniowy :: H₃O⁺ — proton związany z cząsteczką wody.
pH :: ujemny logarytm stężenia jonów H₃O⁺.
pOH :: ujemny logarytm stężenia jonów OH⁻.
Równowaga dynamiczna :: stan, w którym reakcja przeciwna przebiegają z taką samą szybkością.
:::

## 8 | Test {#test} [[extra:LO]]

::: test
? Które zdanie jest prawdziwe?
+ Im większa Ka, tym mocniejszy kwas.
- Im większa Ka, tym słabszy kwas.
- Ka zależy od stężenia roztworu.
- Kw zależy od rodzaju kwasu.
! Ka mierzy skłonność kwasu do oddawania protonu. Większa Ka oznacza mocniejszy kwas.

? Ile wynosi pKa, gdy Ka = 1,0·10⁻⁴?
+ 4
- 2
- 10
- 14
! pKa = −log(1,0·10⁻⁴) = 4.

? Iloczyn jonowy wody w temperaturze około 25 °C wynosi:
+ 1,0·10⁻¹⁴
- 1,0·10⁻⁷
- 1,0
- 14
! Kw = [H₃O⁺]·[OH⁻] = 1,0·10⁻¹⁴ w temperaturze około 25 °C.

? Prawo rozcieńczenia Ostwalda mówi, że przy rozcieńczaniu słabego elektrolitu:
+ stopień dysocjacji rośnie
- stopień dysocjacji maleje
- stopień dysocjacji się nie zmienia
- Ka rośnie
! Rozcieńczanie zwiększa α, ale nie zmienia Ka w danej temperaturze.

? Dla pary sprzężonej kwas–zasada zachodzi:
+ Ka·Kb = Kw
- Ka + Kb = Kw
- Ka = Kb
- Kb = 0
! Iloczyn stałych dysocjacji sprzężonej pary jest równy Kw w danej temperaturze.

? Które wyrażenie opisuje stałą dysocjacji kwasu HA?
+ Ka = [H₃O⁺]·[A⁻]/[HA]
- Ka = [HA]/([H₃O⁺]·[A⁻])
- Ka = [H₃O⁺]
- Ka = pH
! Ka to stosunek iloczynu stężeń produktów do stężenia niezdysocjowanego kwasu w stanie równowagi.
:::

## 9 | Ciekawostki dodatkowe {#ciekawostki-dodatkowe} [[extra:AMBITNE]]

::: karta extra | Skala pKa w praktyce
Wartości pKa pozwalają szybko porównywać kwasy. Kwas o pKa bliskim 0 jest znacznie mocniejszy niż kwas o pKa równym 5. Różnica 5 jednostek pKa oznacza, że pierwsza stała Ka jest około 100 000 razy większa.
:::

::: karta extra | Dlaczego woda nie jest „zupełnie obojętna”?
Woda dysocjuje bardzo słabo, ale stale. Nawet w czystej wodzie występują niewielkie ilości H₃O⁺ i OH⁻. W temperaturze około 25 °C każde z tych stężeń wynosi 1,0·10⁻⁷ mol/dm³, dlatego pH wynosi 7.
:::

::: karta extra | Od Ka do pH w jednym kroku
Dla słabego kwasu jednoprotonowego można połączyć obliczenia:

pH ≈ ½(pKa − log c)

Wzór wynika z podstawienia [H₃O⁺] = √(Ka·c) do definicji pH. Jest wygodny, ale nadal wymaga sprawdzenia założeń.
:::

## 10 | Wykład rozszerzający — granice modelu {#wyklad-rozszerzenie} [[extra:AMBITNE]]

Wzór [H₃O⁺] = √(Ka·c) jest bardzo użyteczny, ale nie jest prawem uniwersalnym. Wynika z założenia, że stężenie zdysocjowanego kwasu x jest znacznie mniejsze od początkowego stężenia c.

Dokładne równanie ma postać:

Ka = x²/(c − x)

Jeżeli x nie można pominąć, należy rozwiązać równanie kwadratowe:

x² + Ka·x − Ka·c = 0

Wtedy:

x = (−Ka + √(Ka² + 4·Ka·c))/2

Przybliżenie jest tym lepsze, im mniejszy jest stosunek Ka/c. W praktyce szkolnej przyjmuje się, że jeżeli x stanowi niewielki ułamek c, wynik jest wystarczająco dokładny.

Dla mocnego kwasu sytuacja jest inna. HCl w rozcieńczonym roztworze wodnym dysocjuje praktycznie całkowicie:

HCl + H₂O → H₃O⁺ + Cl⁻

Dlatego [H₃O⁺] ≈ c. Nie ma sensu wprowadzać tu Ka jako małej stałej równowagi dysocjacji.

Dla słabej zasady analogicznie:

[OH⁻] ≈ √(Kb·c)

a następnie:

pOH = −log[OH⁻]

pH = 14 − pOH

w temperaturze około 25 °C.

W zadaniach konkursowych warto zawsze wykonać trzy kroki:

1. Ustal, czy elektrolit jest słaby czy mocny.
2. Zapisz równanie równowagi i wyrażenie stałej.
3. Sprawdź, czy przybliżenie jest uzasadnione.

::: karta understand | Dla konkursowca — w skrócie
Nie zaczynaj od wzoru. Zacznij od równania równowagi. Dopiero potem zdecyduj, czy można przyjąć c − x ≈ c. Wzór √(Ka·c) jest narzędziem, a nie automatyczną odpowiedzią.
:::

::: adv | Zadanie 3 (4 pkt) — Sprawdź granicę przybliżenia | poziom ambitny
Kwas HA ma Ka = 1,0·10⁻⁴, a jego roztwór ma c = 1,0·10⁻⁴ mol/dm³.

a) Zapisz dokładne równanie na Ka. (1 pkt)

b) Oblicz wstępnie [H₃O⁺] ze wzoru przybliżonego. (1 pkt)

c) Wyjaśnij, dlaczego wynik wymaga sprawdzenia. (1 pkt)

d) Zapisz równanie kwadratowe potrzebne do obliczenia dokładniejszego wyniku. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Ka = x²/(c − x), gdzie x = [H₃O⁺] = [A⁻].

b) (1 pkt) [H₃O⁺] ≈ √(Ka·c) = √(1,0·10⁻⁴ · 1,0·10⁻⁴) = 1,0·10⁻⁴ mol/dm³.

c) (1 pkt) Wynik sugeruje, że x = c, czyli cały kwas miałby ulec dysocjacji. To sprzeczne z założeniem słabego kwasu i pomijalności x względem c.

d) (1 pkt) x² + Ka·x − Ka·c = 0, czyli x² + 1,0·10⁻⁴·x − 1,0·10⁻⁸ = 0.
:::
:::

## 11 | Checklista {#checklista} [[understand:ROZUMIENIE]]

::: checklista
- [ ] umiem zapisać wyrażenia Ka, Kb i Kw
- [ ] umiem obliczyć pKa z Ka i odwrotnie
- [ ] umiem obliczyć pH słabego kwasu przybliżeniem
- [ ] umiem wyjaśnić prawo rozcieńczenia Ostwalda
- [ ] umiem sprawdzić, czy wzór przybliżony stosuje się do danego kwasu
- [ ] umiem obliczyć Kb z Ka sprzężonego kwasu
- [ ] umiem wyjaśnić, dlaczego Ka nie zależy od stężenia
- [ ] umiem rozróżnić mocny kwas, słaby kwas, roztwór stężony i rozcieńczony
:::

### AUDYT — Perplexity, 2026-10-13 {#audyt-ulepsz}

**Poprawione:**
- Frontmatter: dodano uid, uzupełniono kicker, opis, plakietki i stopkę; zmieniono stan na „ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia”.
- Minimum: „Ka = H₃O·A/HA” → pełny, poprawny zapis Ka = [H₃O⁺]·[A⁻]/[HA].
- Minimum i wykład: „Kw = H₃O·OH” → Kw = [H₃O⁺]·[OH⁻].
- Minimum: „pH = log(Ka·c)” → poprawny zapis pH = −log[H₃O⁺] oraz pH ≈ ½(pKa − log c).
- Minimum: „Kw rośnie z T” → doprecyzowano, że wartość 1,0·10⁻¹⁴ dotyczy około 25 °C.
- Wykład: „kwas o mniejszym stężeniu dysocjuje z większą łatwością” → wyjaśnienie przez zachowanie stałej Ka i wzrost stopnia dysocjacji.
- Wykład: „pH słabego kwasu nie zależy wprost od stężenia” → pH zależy od stężenia, ale słabiej niż w przypadku mocnego kwasu.
- Test: „Kw = 10⁻¹⁴” → „1,0·10⁻¹⁴ w temperaturze około 25 °C”.
- Test: „Kb = 0” → „Kb = 0” jako opcja błędna pozostaje, ale poprawna odpowiedź została zapisana jako Ka·Kb = Kw.
- Wszystkie wzory zapisano w Unicode, bez LaTeX-a, z przecinkiem dziesiętnym tam, gdzie występuje liczba dziesiętna.

**Dodane:**
- §0.1–§0.4: cel, kompas, diagnoza z kluczem i interpretacją wyniku.
- §1: pełny wykład od zera, tabela równowagi, warunki stosowania przybliżenia, konwencja H₃O⁺.
- §2: tabela wzorów, definicje pKb, pH, pOH, α oraz zależność pH + pOH = 14.
- §3: cztery przykłady prowadzone z obliczeniami i sprawdzeniem założeń.
- §4: klinika 10 błędów i 6 mitów.
- §5: ćwiczenia z kluczem, w tym mini-test samodzielny.
- §6 i §9: łącznie 6 ciekawostek.
- §7: słownik 16 haseł.
- §8: test 6 pytań.
- §10: wykład rozszerzający o równanie kwadratowe, granice przybliżenia i zadanie 3.
- §11: checklista.

**Niepewne / do weryfikacji:**
- Zakres konkretnego konkursu chemicznego nie został określony w paczce, dlatego wymagania konkursowe opisano ogólnie.
- Wartość Kw = 1,0·10⁻¹⁴ jest przybliżeniem dla temperatury około 25 °C i powinna być zastąpiona wartością z tabeli, jeżeli zadanie podaje inną temperaturę.

**Proponuję usunąć:**
- Brak.

**Źródła:**
- Dostarczona paczka: lekcja J07.
- Zintegrowana Platforma Edukacyjna — materiały o słabych kwasach, równowagach i pH.

**Grafiki do zrobienia:**

| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |
|---|---|---|---|---|
| §1, po równaniu HA + H₂O ⇌ H₃O⁺ + A⁻ | animacja „tam i z powrotem” | cząsteczki HA, H₂O, H₃O⁺ i A⁻ oraz przebieg reakcji w obu kierunkach | Słaby kwas ustala równowagę, a nie dysocjuje całkowicie | Po lewej stronie znajdują się HA i H₂O, po prawej H₃O⁺ i A⁻. Strzałki w obu kierunkach pokazują, że reakcja przebiega w obie strony, a w stanie równowagi obie szybkości są równe. |
| §2, po tabeli wzorów | schemat statyczny | relacje Ka, Kb, Kw, pKa i pH | Ka, Kb i Kw opisują różne równowagi, ale są ze sobą powiązane | Schemat łączy Ka z kwasem HA, Kb z zasadą B oraz Kw z wodą. Strzałka między Ka i Kb prowadzi przez zależność Ka·Kb = Kw. |
| §3, po przykładzie 1 | wykres liniowy | zależność pH słabego kwasu od logarytmu stężenia c | Rozcieńczanie zwiększa pH słabego kwasu | Oś pozioma przedstawia −log c, oś pionowa pH. Linia pokazuje wzrost pH wraz z rozcieńczaniem, zgodnie z pH ≈ ½(pKa − log c). |
| §10, przy omówieniu granic przybliżenia | model interaktywny z suwakiem | stosunek Ka/c oraz porównanie wyniku przybliżonego i dokładnego | Przybliżenie działa tylko przy małym stopniu dysocjacji | Suwak zmienia stosunek Ka/c. Przy małych wartościach wyniki są zbliżone, a przy Ka zbliżonym do c różnica rośnie. Podpis wskazuje konieczność rozwiązania równania kwadratowego. |
