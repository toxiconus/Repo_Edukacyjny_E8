---
kod: F08
uid: CHE.01.F08.konfiguracja_uklad_okresowy
tytul: Od konfiguracji do układu okresowego
opis: Numer okresu z najwyższego n · numer grupy z elektronów walencyjnych · bloki s, p, d, f · jak z zapisu konfiguracji odczytać pozycję pierwiastka
kicker: F08 · FUNDAMENTY · NOWA WERSJA
lead: F06 nauczyła czytać układ okresowy z pozycji pierwiastka. Ta lekcja działa w odwrotną stronę: znając konfigurację elektronową (F07), **przewidujemy** okres, grupę i blok. To most między budową atomu a tablicą.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA F08 v1.0** · Konfiguracja → układ okresowy · 2026
---

::: minimum | Muszę umieć na E8 — 10 punktów
1. **Okres** = najwyższa liczba główna powłoki n zajętej przez elektrony (dla Cl: 3s² 3p⁵ → n = 3 → okres 3).
2. **Elektrony walencyjne** grup głównych leżą na zewnętrznej powłoce (najwyższe n) i w podpowłokach s i p tej powłoki.
3. **Grupy 1–2** (blok s): liczba elektronów walencyjnych = numer grupy.
4. **Grupy 13–18** (blok p): liczba elektronów walencyjnych = numer grupy − 10.
5. **Grupy 3–12** (blok d): numer grupy = suma elektronów na podpowłoce ns i na (n−1)d (np. Fe: 6 + 2 = 8).
6. **Blok** to podpowłoka, na której kończy się zapis: s, p, d lub f.
7. Hel (1s²) jest w bloku s, ale w układzie stoi w grupie 18 — to wyjątek od reguły „blok = grupa”, wynikający z zapełnionej powłoki.
8. Fe: [Ar] 3d⁶ 4s² → okres 4, blok d, grupa 8 (6 + 2).
9. Mn: [Ar] 3d⁵ 4s² → okres 4, blok d, grupa 7.
10. Pierwiastek o konfiguracji zakończonej na 4p⁴ leży w okresie 4 i grupie 16.
:::

::: warstwy
- e8 | <b>E8:</b> okres z najwyższego n; grupa z elektronów walencyjnych dla grup 1–2 i 13–18; bloki s i p; przykłady Na, Cl, Ca, Fe
- understand | <b>Rozumienie:</b> dlaczego grupy 3–12 liczymy inaczej; co znaczy „zapełniona powłoka walencyjna” i dlaczego gazy szlachetne są w grupie 18; blok d i f jako „zapełnianie wewnętrznej podpowłoki”
- extra | <b>LO / ambitne:</b> numeracja IUPAC a dawna numeracja A/B; konfiguracje wyjątkowe (Cr, Cu); pierwiastki f (lantanowce, aktynowce) i ich położenie
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
Konfiguracja mówi, **gdzie** w układzie stoi atom. Pytamy: jaka jest najwyższa powłoka (→ okres), ile elektronów jest na zewnątrz (→ grupa), która podpowłoka kończy zapis (→ blok). Trzy pytania, trzy odpowiedzi, jeden pierwiastek.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Przeczytaj minimum i wykład. Przed ćwiczeniami sprawdź w F07, czy potrafisz zapisać konfigurację Z = 1–20. Bez tego ta lekcja będzie tylko zapamiętywaniem tabelki.
:::

## 0.2 | Cele i pytanie przewodnie [[basic:E8]] {#cele}

::: karta basic | Po tej lekcji potrafisz
- z konfiguracji podać okres i grupę pierwiastka grup głównych;
- określić blok, do którego należy pierwiastek;
- przewidzieć pozycję pierwiastka z konfiguracji pierwiastków przejściowych na poziomie podstawowym;
- wyjaśnić, dlaczego elektrony walencyjne decydują o właściwościach.
:::

::: karta exam | Pytanie przewodnie
Dwa pierwiastki z okresu 3: Mg (…3s²) i Cl (…3s² 3p⁵). Który z nich jest metalem, a który niemetalem, i jak to widać po ich pozycji w układzie?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- zapis konfiguracji i zapis skrócony (F07);
- pojemności podpowłok s, p, d (F07);
- układ okresowy jako mapa (F06): okresy, grupy, metale i niemetale.

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Która podpowłoka kończy zapis konfiguracji Ca (Z = 20)?
2. Ile elektronów walencyjnych ma atom o konfiguracji [Ne] 3s² 3p⁴?
3. W którym okresie jest pierwiastek o konfiguracji [Ar] 4s¹?

::: odp | Pokaż klucz i interpretację
1. Ca: [Ar] 4s² — kończy się na 4s, więc blok s.
2. 3s² 3p⁴ → 2 + 4 = 6 elektronów walencyjnych (siarka, grupa 16).
3. Najwyższe n = 4 → okres 4 (to potas K, grupa 1).
:::
:::

## 1 | Okres — najwyższa powłoka [[basic:E8]] {#okres}

Okres to wiersz układu. Numer okresu to **najwyższe n**, na którym są elektrony w atomie obojętnym.

| Pierwiastek | Konfiguracja | Najwyższe n | Okres |
|---|---|---|---|
| Li | 1s² 2s¹ | 2 | 2 |
| Na | [Ne] 3s¹ | 3 | 3 |
| Ca | [Ar] 4s² | 4 | 4 |
| Fe | [Ar] 3d⁶ 4s² | 4 | 4 |

Uwaga: w pierwiastkach d i f podpowłoki (n − 1)d i (n − 2)f mają niższe n niż zewnętrzna powłoka. Okres bierzemy z **najwyższego n**, a nie z tego, który jest zapisany jako ostatni w kolejności zapełniania.

::: karta warning | Pułapka: „ostatni zapisany = najwyższy”
Dla Fe ostatnia podpowłoka zapełniona w zapisie to 3d, ale najwyższa powłoka to 4 (4s). Okres Fe to 4, nie 3.
:::

## 2 | Grupa — elektrony walencyjne [[basic:E8]] {#grupa}

::: regula
**Bloki s (grupy 1–2):** liczba e⁻ walencyjnych = numer grupy (Na: 1, Mg: 2).

**Bloki p (grupy 13–18):** liczba e⁻ walencyjnych = numer grupy − 10 (Al: 3, S: 6, Cl: 7). Wyjątek: hel ma 2, a nie 8.

**Bloki d (grupy 3–12):** numer grupy = suma elektronów na ns i (n−1)d. Dla Cu ([Ar] 3d¹⁰ 4s¹) daje 11, dla Zn — 12 (zob. klinikę przy ćwiczeniach).
:::

Przykłady:

- **Cl** [Ne] 3s² 3p⁵: 2 + 5 = 7 e⁻ walencyjnych, grupa **17** (7 + 10), okres 3.
- **S** [Ne] 3s² 3p⁴: 6 e⁻ walencyjnych, grupa **16**.
- **Fe** [Ar] 3d⁶ 4s²: 6 + 2 = 8, grupa **8**.
- **Zn** [Ar] 3d¹⁰ 4s²: 10 + 2 = 12, grupa **12**.

::: karta core | Procedura: konfiguracja → grupa (trzy kroki)
1. Znajdź najwyższą powłokę n — to okres.
2. Zsumuj elektrony na tej powłoce i (dla bloków d) na poprzedniej podpowłoce d.
3. Jeśli blok s, podaj sumę jako numer grupy; jeśli p, odejmij 10; jeśli d, sumę zapisz jako numer grupy (dla 3–12).
:::

## 3 | Bloki — s, p, d, f [[basic:E8]] {#bloki}

Blok to „kolor” pierwiastka w układzie, wskazujący, którą podpowłokę zapełnia się jako ostatnią:

- **blok s** — grupy 1 i 2 (oraz hel na pozycji grupy 18 — wyjątek);
- **blok p** — grupy 13–18;
- **blok d** — metale przejściowe, grupy 3–12;
- **blok f** — lantanowce i aktynowce, układane poniżej głównej tabeli.

::: karta understand | Dlaczego blok d jest „w środku”
Podpowłoka d leży o jedną powłokę niżej niż zewnętrzna powłoka s i p. Elektrony d zapełniają się, gdy zewnętrzne ns są już obecne, więc atomy przejściowe mają zwykle dwa elektrony na zewnątrz (ns²) i kilka niesparowanych d-elektronów. To tłumaczy barwy i wielowartościowość metali przejściowych (F09).
:::

## 4 | Zastosowanie: z konfiguracji do pozycji [[understand:ROZUMIENIE]] {#zastosowanie}

::: karta understand | Przykład prowadzony — pierwiastek [Ar] 3d¹⁰ 4s² 4p⁴
1. Najwyższe n = 4 → **okres 4**.
2. Blok: zapis kończy się na 4p → **blok p**.
3. Elektrony walencyjne: 4s² 4p⁴ = 6 → grupa 16 (16 = 6 + 10).
4. Z = 18 + 10 + 2 + 4 = 34 → **selen Se**.

::: odp | Pokaż kontrolę
Selen leży w okresie 4, w grupie 16 (tlenowce) — zgodnie z odczytem.
:::
:::

::: karta understand | Dlaczego gazy szlachetne są w grupie 18
Hel ma 2 elektrony (1s²), neon 8 walencyjnych, argon 8 itd. Zapełniona powłoka walencyjna (ns² np⁶) jest bardzo trwała. Dlatego grupa 18 jest „pełna”, a pierwiastki wokół niej dążą do jej konfiguracji (F10).
:::

## 5 | Wykład — skąd bierze się cały układ [[understand:ROZUMIENIE]] {#wykład}

::: karta understand | Wykład — układ okresowy jako wynik konfiguracji
Gdy dodajemy kolejny proton do jądra i kolejny elektron do atomu, nowy elektron zajmuje najniżej energetyczne wolne miejsce (F07). Po zapełnieniu powłoki elektronowej zaczyna się nowy okres — stąd okresy mają długości 2, 8, 8, 18, 18, 32 (w skróconej tablicy, z pominięciem f). Pierwiastki w tej samej grupie mają tę samą liczbę elektronów walencyjnych, więc podobny sposób tworzenia wiązań.

Układ okresowy nie jest więc przypadkową tabelką. Jest zapisem tego, jak w kolejnych atomach zapełniają się podpowłoki. Dlatego znając konfigurację, możemy przewidzieć właściwości, których nie zapamiętaliśmy.
:::

::: karta understand | W skrócie — co zmienia się w okresie, a co w grupie
W **okresie** zmienia się liczba elektronów walencyjnych (rośnie od 1 do 8). W **grupie** zmienia się liczba powłok (rośnie w dół), ale liczba walencyjnych jest stała.
:::

## 6 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Okres = ostatnia zapisana podpowłoka.” | Okres = najwyższe n. | Dla Fe ostatnia zapisana to 3d, a okres to 4. |
| „Grupa Cl to 7.” | Grupa Cl to 17. | Numer grupy w bloku p = e⁻ walencyjne + 10. |
| „Hel jest w grupie 2, bo ma 2 elektrony.” | Hel jest w grupie 18. | Zapełniona powłoka walencyjna; wyjątek od bloków. |
| „Fe ma 2 elektrony walencyjne, więc grupa 2.” | Fe jest w grupie 8. | Walencyjne d też się liczą: 6 + 2. |
| „Blok d to grupy 1–2.” | Blok d to grupy 3–12. | Bloki s to 1–2. |
:::

::: karta error | Klinika — przykład: siarka i selen
Uczeń uznaje, że selen (Z = 34) ma 6 elektronów walencyjnych jak siarka, więc leży w tej samej grupie. Ma rację co do grupy 16, ale myli okres: Se jest w okresie 4, S w okresie 3.

::: odp | Pokaż odpowiedź
Ta sama grupa oznacza podobne elektrony walencyjne, ale inny okres (inna najwyższa powłoka). Dwa parametry, dwie odpowiedzi.
:::
:::

## 7 | Ćwiczenia {#cwiczenia}

::: karta basic | A. Podstawa — okres, grupa, blok
Dla każdego pierwiastka określ okres, grupę i blok:
1. Na (Z = 11)
2. Cl (Z = 17)
3. Ca (Z = 20)

::: odp | Pokaż odpowiedzi
1. Na: [Ne] 3s¹ → okres 3, grupa 1, blok s.
2. Cl: [Ne] 3s² 3p⁵ → okres 3, grupa 17, blok p.
3. Ca: [Ar] 4s² → okres 4, grupa 2, blok s.
:::
:::

::: karta understand | B. Trening — odwrotnie
1. Pierwiastek ma konfigurację [Ne] 3s² 3p² — podaj okres, grupę i nazwę.
2. Pierwiastek z grupy 13 w okresie 3 — podaj konfigurację skróconą.

::: odp | Pokaż odpowiedzi
1. Okres 3, 4 e⁻ walencyjne → grupa 14 → krzem Si.
2. Grupa 13 = 3 e⁻ walencyjne w bloku p, okres 3: [Ne] 3s² 3p¹ → glin Al.
:::
:::

::: karta extra | C. Ambitne — przejściowe
1. Mn ma konfigurację [Ar] 3d⁵ 4s². Podaj okres, blok i grupę.
2. Dlaczego Zn (Z = 30, [Ar] 3d¹⁰ 4s²) leży w grupie 12, a nie w grupie 2?

::: odp | Pokaż odpowiedzi
1. Okres 4, blok d, grupa 7 (5 + 2).
2. Umownie liczymy 10 (3d) + 2 (4s) = 12. Warto wiedzieć, że w niektórych ujęciach cynk nie jest pierwiastkiem przejściowym, bo ma pełną podpowłokę d we wszystkich związkach. To dyskusja o definicji, nie błąd w obliczeniu grupy.
:::
:::

::: karta exam | D. Zaawansowane — odczyt z pozycji
Pierwiastek leży w okresie 5 i grupie 15 (blok p). Podaj liczbę elektronów walencyjnych i zapisz konfigurację zakończoną na zewnętrznej powłoce.

::: odp | Pokaż odpowiedź
Grupa 15 → 15 − 10 = 5 e⁻ walencyjnych. Okres 5 → zewnętrzna powłoka n = 5: 5s² 5p³. Pierwiastek to antymon Sb (Z = 51), przy założeniu, że konfiguracja odpowiada stanowi podstawowemu.
:::
:::

## 8 | Fiszki {#fiszki}

::: fiszki
Jak znaleźć okres z konfiguracji? | najwyższe n zajęte przez elektrony | basic:podstawa
Ile e⁻ walencyjnych ma atom z grupy 1? | 1 | basic:podstawa
Ile e⁻ walencyjnych ma atom z grupy 17? | 7 (17 − 10) | basic:podstawa
Jaki blok to grupy 3–12? | d | basic:podstawa
Jaki blok to grupy 13–18? | p | basic:podstawa
Dlaczego hel jest w grupie 18? | ma zapełnioną powłokę walencyjną (1s²) | understand:rozumienie
Okres Fe i jego grupa? | okres 4, grupa 8 | understand:rozumienie
Pierwiastek [Ar] 4s² 4p⁴? | Se (selen), okres 4, grupa 16 | extra:ambitne
:::

## 9 | Słownik {#slownik}

::: slownik
Okres :: wiersz układu okresowego; numer okresu = najwyższe n zajęte przez elektrony
Grupa :: kolumna układu okresowego; w grupach głównych elektrony walencyjne o tej samej liczbie
Blok :: obszar układu związany z podpowłoką, która kończy zapis konfiguracji (s, p, d, f)
Elektrony walencyjne :: elektrony na zewnętrznej powłoce (i, dla bloku d, na podpowłoce (n−1)d)
Metale przejściowe :: pierwiastki bloku d (grupy 3–12)
Lantanowce i aktynowce :: pierwiastki bloku f, układane poniżej głównej części układu
:::

## 10 | Test {#test}

::: test
? Pierwiastek o konfiguracji [Ne] 3s² 3p⁵ leży w:
- okresie 2, grupie 17
+ okresie 3, grupie 17
- okresie 3, grupie 7
- okresie 5, grupie 17
! Najwyższe n = 3 (okres 3); 5 + 2 = 7 e⁻ walencyjnych → grupa 17.

? Ile elektronów walencyjnych ma atom wapnia (Ca, Z = 20)?
- 1
- 4
+ 2
- 20
! Konfiguracja [Ar] 4s²: dwa elektrony na zewnętrznej powłoce.

? Który blok obejmuje grupy 13–18?
- s
+ p
- d
- f
! Bloki p — w grupach 13–18.

? Fe ma konfigurację [Ar] 3d⁶ 4s². Jaka jest jego grupa?
- 2
- 6
+ 8
- 10
! 6 + 2 = 8.

? Dla którego pierwiastka numer grupy równa się liczbie elektronów walencyjnych?
+ Na (grupa 1)
- Cl (grupa 17)
- He (grupa 18)
- Fe (grupa 8)
! Dla bloku s numer grupy = liczba e⁻ walencyjnych. Na: 3s¹ → 1.
:::

## 11 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego okresy mają długości 2, 8, 8, 18, 18, 32?
Długości okresów wynikają z liczby elektronów, jakie mieszczą się w kolejnych podpowłokach w kolejności zapełniania: 2 (1s), 8 (2s 2p), 8 (3s 3p), 18 (4s 3d 4p), 18 (5s 4d 5p), 32 (6s 4f 5d 6p). Kolejność nie jest „po numerze powłoki”, a po energii.
:::

::: karta extra | Układ okresowy ma ponad jeden kształt
Tablica w formie długiej (z blokiem f wstawionym w środek) jest najbardziej czytelna pod względem konfiguracji. Krótka tablica jest wygodniejsza do nauki i była popularniejsza w szkołach. Obie pokazują ten sam porządek.
:::

## 12 | Checklista — umiem… {#checklista}

::: checklista
- [ ] podać okres z najwyższego n w konfiguracji;
- [ ] obliczyć liczbę e⁻ walencyjnych dla bloków s, p i d;
- [ ] wskazać blok i grupę z konfiguracji;
- [ ] wyjaśnić, dlaczego hel jest w grupie 18;
- [ ] nie mylić okresu z ostatnią zapisaną podpowłoką.
:::

::: karta core | Na jednej stronie
Okres = najwyższe n · grupy 1–2 = e⁻ walencyjne · grupy 13–18 = e⁻ walencyjne + 10 (we wzorze: numer = walencyjne + 10) · grupy 3–12 = blok d · bloki: s (1–2), p (13–18), d (3–12), f (lantanowce, aktynowce) · hel to wyjątek w grupie 18.
:::
