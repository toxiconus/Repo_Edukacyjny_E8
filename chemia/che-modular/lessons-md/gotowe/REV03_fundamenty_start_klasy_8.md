---
kod: REV03
uid: CHE.00.REV03.fundamenty_start_klasy_8
tytul: Fundamenty na start klasy 8 — atom, wartościowość, wzory, równania
opis: BHP w pracowni · budowa atomu i liczby Z, A · izotopy · układ okresowy jako mapa · wartościowość i krzyżowanie · wzory sumaryczne · wiązania jonowe i kowalencyjne · bilansowanie równań i typy reakcji · diagnoza, pułapki, ćwiczenia z kluczem
kicker: REV03 · POWTÓRKA · START KLASY 8
lead: Chemia w klasie 8 stoi na czterech filarach: atom, wartościowość, wzór i równanie. Jeśli je opanujesz, reszta roku przestanie wydawać się obca. Ta lekcja składa je w jedną całość i sprawdza, czy stoisz na nich pewnie.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:TRENING]]
uwaga: Lekcja powstała z archiwalnej L002 (`CHEMIA_PODSTAWA_PLUS_L002`) przepisanej według promptu budowy lekcji. Treść częściowo pokrywa się z REV01 (powtórka klasy 7); tu jest ujęcie „start klasy 8”: krótsze, z naciskiem na rozumienie i diagnozę. Liczby (masy, wartościowości) zgodne z układem okresowym; do W1.
stopka: **CHEMIA REV03 v1.0** · Fundamenty na start klasy 8 · 2026
stan: NOWA LEKCJA z archiwum L002 wg PROMPT_BUDOWANIA_LEKCJI (2026-10-12) — Claude Haiku 5.5; W1 FULL do zrobienia
---

Ta lekcja składa cztery podstawy chemii w jedną całość: atom, wartościowość, wzór i równanie. Po jej przejściu policzysz liczbę protonów, neutronów i elektronów, ułożysz wzór sumaryczny z wartościowości, rozpoznasz wiązanie i zbilansujesz prosty zapis reakcji.

::: minimum | Muszę umieć — 8 punktów
1. **Liczba atomowa Z** to liczba protonów; w atomie obojętnym jest też równa liczbie elektronów.
2. **Liczba masowa A** = liczba protonów + liczba neutronów. Neutrony obliczasz jako n = A − Z.
3. **Układ okresowy:** okres to wiersz (liczba powłok), grupa to kolumna (podobne własności; dla grup głównych podobna wartościowość).
4. **Wartościowość** to liczba „haczyków” atomu do łączenia się. Dla grup głównych często: grupa 1 → I, grupa 2 → II, grupa 13 → III, grupa 14 → IV.
5. **Wzór sumaryczny** ułożymy krzyżując wartościowości (algorytm w §4); indeksy 1 się nie zapisuje.
6. **Wiązanie:** metal + niemetal → zwykle jonowe; same niemetale → kowalencyjne.
7. **Równanie** musi być zbilansowane: ta sama liczba atomów każdego pierwiastka po obu stronach. Zmieniamy tylko współczynniki, nigdy indeksów.
8. **Typy reakcji:** synteza (dwa substraty → jeden produkt), analiza (jeden substrat → wiele), wymiana, spalanie (z tlenem).
:::

::: warstwy
- e8 | <b>Podstawa:</b> liczby Z, A, n; układ okresowy; wartościowość; wzory sumaryczne; wiązania; bilansowanie
- understand | <b>Rozumienie:</b> dlaczego izotopy mają tę samą chemię; dlaczego indeksów nie wolno zmieniać
- exam | <b>Trening:</b> diagnoza, pułapki, zadania z kluczem na trzech poziomach
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
1. **[§0.2](#diagnoza)** — diagnoza startowa (sprawdź się, zanim przeczytasz).
2. **[§1](#wyklad)–[§2](#atom)** — wykład „od zera” i budowa atomu.
3. **[§3](#wartosciowosc)–[§4](#wzory)** — wartościowość i wzory; tu najczęściej robi się błędy.
4. **[§5](#wiazania)–[§6](#rownania)** — wiązania i równania; potem **[§7](#klinika)** i **[§8](#cwiczenia)**.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand
- **Pisz, nie czytaj.** Każdy wzór i każde równanie zapisz ręcznie na kartce.
- **Mów na głos:** „sód ma jeden elektron walencyjny, więc wartościowość I”. To działa lepiej niż zapamiętywanie tabeli.
- **Nie przeskakuj diagnozy.** Jeśli popełnisz błąd w diagnozie, wróć do odpowiedniego działu.
:::

## 0.2 | Diagnoza startowa {#diagnoza}

1. Ile protonów, neutronów i elektronów ma atom ²³Na?
2. W której grupie i którym okresie leży chlor?
3. Jaka jest wartościowość tlenu i wapnia?
4. Napisz wzór sumaryczny chlorku magnezu.
5. Jakie wiązanie występuje w NaCl, a jakie w H₂O?

::: karta understand | Klucz do diagnozy
1. Z = 11 (p⁺ = 11, e⁻ = 11), A = 23, więc n⁰ = 23 − 11 = 12.
2. Grupa 17 (VII. grupa główna), okres 3.
3. Tlen — II, wapń — II.
4. MgCl₂ (Mg: II, Cl: I; krzyżowanie daje indeksy 1 i 2).
5. NaCl — jonowe (metal + niemetal); H₂O — kowalencyjne spolaryzowane (same niemetale).
:::

::: karta core | Pytanie przewodnie
Jak z kilku prostych zasad zbudować wzór, nazwę i równanie reakcji — i jak sprawdzić, że są poprawne?
:::

## 1 | Wykład — chemia zaczyna się od liczenia {#wyklad}

::: karta understand | Wykład od zera
Chemik zapisuje świat w formie liczb i symboli. Pierwiastek to rodzaj atomów o tej samej liczbie protonów w jądrze. Ta liczba nazywa się liczbą atomową Z i jednoznacznie określa, czym jest atom: sód ma 11 protonów, tlen ma 8, chlor 17.

Atomy są obojętne elektrycznie, więc liczba elektronów w nich jest równa liczbie protonów. Elektrony krążą wokół jądra w powłokach. To one decydują o tym, jak atom się łączy z innymi. Dlatego pierwiastki z podobną liczbą elektronów na ostatniej powłoce zachowują się podobnie — i tak powstał układ okresowy.

Gdy zrozumiesz tę logikę, wartościowość, wzory i równania przestają być zbiorem reguł do zapamiętania. Stają się wynikiem jednej idei: atomy łączą się, bo chcą mieć stabilniejszą konfigurację elektronów.
:::

### 1.1 Mini-wykład: BHP to pierwsza lekcja chemii {#bhp}

::: karta understand | W skrócie: dlaczego pierwsza jest pracownia
Zanim zaczniesz łączyć atomy, musisz wiedzieć, jak bezpiecznie pracować z substancjami. Nie smakujemy i nie wąchamy substancji bezpośrednio (do węchu przesuwamy dłonią pary). Przy ogrzewaniu w probówce otwór kierujemy od siebie i od innych. Substancji nie wylewamy do zlewu bez konsultacji, a po doświadczeniu sprzątamy stanowisko.
:::

## 2 | Budowa atomu i izotopy {#atom}

| Cząstka | Ładunek | Masa (ok.) | Miejsce |
|---|---|---|---|
| proton p⁺ | +1 | 1 u | jądro |
| neutron n⁰ | 0 | 1 u | jądro |
| elektron e⁻ | −1 | ok. 1/1836 u | powłoki |

**Wzory:** Z = liczba p⁺ = liczba e⁻ (atom obojętny); A = p⁺ + n⁰; n⁰ = A − Z.

**Przykłady:** ¹⁶O — 8 p⁺, 8 n⁰, 8 e⁻; ²³Na — 11 p⁺, 12 n⁰, 11 e⁻; ³⁵Cl — 17 p⁺, 18 n⁰, 17 e⁻; ⁴⁰Ca — 20 p⁺, 20 n⁰, 20 e⁻.

::: karta understand | Przykład prowadzony: atom ³⁵Cl
**Dane:** Z = 17, A = 35.
**Krok 1:** p⁺ = Z = 17; e⁻ = 17 (atom obojętny).
**Krok 2:** n⁰ = A − Z = 35 − 17 = 18.
**Wniosek:** chlor-35 ma 17 protonów, 18 neutronów i 17 elektronów.
:::

**Izotopy** to odmiany tego samego pierwiastka: ta sama liczba protonów, różna liczba neutronów. Węgiel ma izotopy ¹²C, ¹³C i ¹⁴C. Mają one tę samą chemię, bo elektrony są takie same.

::: karta understand | W skrócie: po co dwie liczby
Liczba atomowa Z mówi, który to pierwiastek. Liczba masowa A mówi, jak „ciężkie” jest jądro. Mylenie ich to jeden z najczęstszych błędów (klinika §7).
:::

## 3 | Układ okresowy — mapa, nie spis {#uklad}

- **Okresy** (wiersze) — liczba powłok elektronowych. Okres 3 ma trzy powłoki.
- **Grupy** (kolumny) — pierwiastki o podobnych własnościach chemicznych. Dla grup głównych liczba elektronów walencyjnych często odpowiada typowej wartościowości.

| Grupa | Przykłady | Typowa wartościowość |
|---|---|---|
| 1 (IA) | Li, Na, K | I |
| 2 (IIA) | Mg, Ca | II |
| 13 | B, Al | III |
| 14 | C, Si | IV |
| 15 | N, P | III / V |
| 16 | O, S | II / IV / VI |
| 17 | F, Cl, Br, I | I |
| 18 | He, Ne, Ar | 0 |

::: karta understand | Mini-wykład: dlaczego grupa 15 ma dwie wartościowości
Azot i fosfor mają po pięć elektronów na ostatniej powłoce. Mogą zdobyć trzy elektrony (III) albo oddać pięć (V), zależnie od partnera reakcji. Dlatego przy N i P zawsze sprawdzaj, z czym się łączą. To samo dotyczy siarki (II, IV, VI).
:::

## 4 | Wartościowość i wzory sumaryczne {#wartosciowosc}

**Wartościowość** to liczba „haczyków” atomu do łączenia się z innymi. Zapisujemy ją cyframi rzymskimi.

Skąd ją wziąć?
1. Z układu okresowego (grupy główne).
2. Z nazwy (np. tlenek żelaza(III) — żelazo ma III).
3. Ze znanego wzoru (jeśli znasz jedną wartościowość w związku).

**Metale o zmiennej wartościowości** — żelazo (II, III) i miedź (I, II) — zawsze podajemy w nazwie.

**Algorytm krzyżowania:**
1. Zapisz symbole z wartościowościami cyframi rzymskimi.
2. Skrzyżuj: wartościowość pierwszego pierwiastka staje się indeksem drugiego, i odwrotnie.
3. Uprość indeksy (dzielnikiem NWD).
4. Indeks 1 nie zapisujemy.

**Przykłady:**
- Na^I + O^II → Na₂O (skrzyżowanie: Na₂ i O₁ → O jest II, więc Na₂O);
- Al^III + O^II → Al₂O₃;
- Ca^II + Cl^I → CaCl₂;
- Fe^III + O^II → Fe₂O₃;
- C^IV + O^II → CO₂ (indeksy 4 i 2 skracamy NWD = 2 → 2 i 1).

::: karta core | Trzy kroki sprawdzenia wzoru
1. Suma wartościowości dodatnich i ujemnych w związku jest zerowa (np. 2 · I = 2 · I w Na₂O: 2 · (+I) + 1 · (−II) = 0).
2. Indeksy są najmniejsze możliwe (skrócone NWD).
3. Nazwa zawiera wartościowość, jeśli pierwiastek jej wymaga.
:::

::: karta understand | Przykład prowadzony: wzór chlorku glinu
**Dane:** Al (III), Cl (I).
**Krok 1:** krzyżujemy: Al₁ Cl₃ — indeks Cl = 3, indeks Al = 1 (nie zapisujemy).
**Krok 2:** wzór: AlCl₃.
**Sprawdzenie:** (+III) + 3 · (−I) = 0. ✔
**Wniosek:** chlorek glinu to AlCl₃.
:::

## 5 | Wiązania chemiczne {#wiazania}

| Cecha | Jonowe | Kowalencyjne |
|---|---|---|
| Między | metal + niemetal | niemetal + niemetal |
| Mechanizm | przeniesienie elektronów | współdzielenie pary elektronów |
| Przykłady | NaCl, MgO, CaF₂ | H₂O, CO₂, Cl₂, CH₄, NH₃ |

::: karta warning | Pułapka: „metal + niemetal = zawsze jonowe”
To reguła orientacyjna. Są związki metali z niemetalami o wyraźnym charakterze kowalencyjnym (np. chlorek glinu w niektórych warunkach). Na poziomie klasy 8 trzymaj się reguły, ale pamiętaj, że to model, nie prawo.
:::

## 6 | Równania reakcji — bilans {#rownania}

Równanie zapisujemy od substratów do produktów: **substraty → produkty**. Bilans musi się zgadzać: liczba atomów każdego pierwiastka po obu stronach jest taka sama.

**Zasada:** nie zmieniamy indeksów we wzorach — indeks należy do substancji. Zmieniamy tylko **współczynniki** przed wzorami.

::: karta understand | Przykład prowadzony: bilansowanie spalania metanu
**Zapis wyjściowy:** CH₄ + O₂ → CO₂ + H₂O.
**Krok 1:** węgiel: 1 po obu stronach ✔.
**Krok 2:** wodór: po lewej 4, po prawej 2 — dajemy współczynnik 2 przed H₂O: CH₄ + O₂ → CO₂ + 2 H₂O.
**Krok 3:** tlen: po prawej 2 + 2 = 4, po lewej 2 — dajemy współczynnik 2 przed O₂: CH₄ + 2 O₂ → CO₂ + 2 H₂O.
**Wniosek:** równanie zbilansowane.
:::

**Typy reakcji:**

| Typ | Schemat | Przykład |
|---|---|---|
| synteza | A + B → AB | 2 H₂ + O₂ → 2 H₂O |
| analiza (rozkład) | AB → A + B | 2 HgO → 2 Hg + O₂ |
| wymiana | AB + C → AC + B | Zn + 2 HCl → ZnCl₂ + H₂ |
| spalanie | paliwo + O₂ → CO₂ + H₂O | CH₄ + 2 O₂ → CO₂ + 2 H₂O |

## 7 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| Zmiana indeksów przy bilansowaniu | Zmiana tylko współczynników | Indeks należy do wzoru substancji. |
| FeO₃ zamiast Fe₂O₃ | Fe^III + O^II → Fe₂O₃ | Brak krzyżowania wartościowości. |
| Tlenek żelaza bez cyfry | Tlenek żelaza(III) | Żelazo ma zmienną wartościowość — trzeba ją podać. |
| Mylenie Z z A | Z = p⁺; A = p⁺ + n⁰ | To dwie różne liczby. |
| „Wartościowość zawsze = numer grupy” | Dla grup 15–17 zależy od partnera | Azot, siarka i chlorowce mają kilka wartości. |
:::

## 8 | Ćwiczenia z kluczem {#cwiczenia}

::: karta exam | Zadanie 1 (2 pkt) — atom
Atom ⁴⁰Ca. Podaj liczbę protonów, neutronów i elektronów.
::: odp | Pokaż klucz
Z = 20 (p⁺ = 20, e⁻ = 20); n⁰ = 40 − 20 = 20. (1 pkt za Z i e⁻, 1 pkt za n⁰.)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — wzór
Ułóż wzór sumaryczny tlenku glinu.
::: odp | Pokaż klucz
Al (III), O (II): krzyżowanie daje Al₂O₃. Sprawdzenie: 2 · (+III) + 3 · (−II) = 0. (1 pkt za indeksy, 1 pkt za sprawdzenie.)
:::
:::

::: karta exam | Zadanie 3 (2 pkt) — nazwa
Wzór FeCl₃. Podaj nazwę związku z wartościowością żelaza.
::: odp | Pokaż klucz
Chlorek żelaza(III). Chlor ma I, więc 3 · (−I) = −3, żelazo musi mieć III. (1 pkt za nazwę, 1 pkt za uzasadnienie.)
:::
:::

::: karta exam | Zadanie 4 (2 pkt) — bilans
Zbilansuj: Na + Cl₂ → NaCl.
::: odp | Pokaż klucz
2 Na + Cl₂ → 2 NaCl. Chlor: 2 po obu stronach; sód: 2 po obu stronach. (1 pkt za współczynnik przed Na, 1 pkt za przed NaCl.)
:::
:::

::: karta exam | Zadanie 5 (2 pkt) — typ reakcji
Określ typ reakcji: 2 H₂ + O₂ → 2 H₂O. Uzasadnij.
::: odp | Pokaż klucz
Synteza: dwa substraty tworzą jeden produkt. (1 pkt za typ, 1 pkt za uzasadnienie.)
:::
:::

::: karta exam | Zadanie 6 (3 pkt) — wiązanie i wzór
Związek ma wzór MgO. Określ rodzaj wiązania, podaj wartościowości obu pierwiastków i wyjaśnij, dlaczego indeksy są równe 1.
::: odp | Pokaż klucz
Wiązanie jonowe (metal + niemetal). Mg: II, O: II — krzyżowanie daje indeksy 2 i 2, które skracają się NWD do 1 i 1, więc indeksów nie zapisujemy. (1 pkt za wiązanie, 1 pkt za wartościowości, 1 pkt za skrócenie.)
:::
:::

## 9 | Fiszki {#fiszki}

::: fiszki
Liczba atomowa Z | liczba protonów (w atomie obojętnym równa liczbie elektronów) | basic:atom
Liczba masowa A | p⁺ + n⁰ | basic:atom
Izotop | ten sam pierwiastek, różna liczba neutronów | basic:atom
Okres | wiersz układu okresowego, liczba powłok | basic:uklad
Grupa | kolumna układu okresowego, podobne własności | basic:uklad
Wartościowość | liczba „haczyków” atomu do łączenia się | basic:wartosciowosc
Krzyżowanie wartościowości | wartościowości stają się indeksami drugiego pierwiastka | basic:wzory
Wiązanie jonowe | metal + niemetal, przeniesienie elektronów | basic:wiazania
Wiązanie kowalencyjne | niemetal + niemetal, współdzielenie elektronów | basic:wiazania
Bilans równania | ta sama liczba atomów każdego pierwiastka po obu stronach | basic:rownania
Synteza | dwa substraty → jeden produkt | basic:rownania
:::

## 10 | Słownik {#slownik}

::: slownik
Pierwiastek :: rodzaj atomów o tej samej liczbie protonów w jądrze
Liczba atomowa Z :: liczba protonów w jądrze atomu
Liczba masowa A :: suma protonów i neutronów w jądrze
Izotop :: odmiana pierwiastka o tej samej liczbie protonów i różnej liczbie neutronów
Okres :: wiersz układu okresowego; liczba powłok elektronowych
Grupa :: kolumna układu okresowego; pierwiastki o podobnych własnościach
Wartościowość :: liczba wiązań, jaką atom może utworzyć
Wzór sumaryczny :: zapis składu związku z indeksami liczby atomów
Wiązanie jonowe :: wiązanie powstające przez przeniesienie elektronów z metalu na niemetal
Wiązanie kowalencyjne :: wiązanie powstające przez współdzielenie pary elektronów
Współczynnik stechiometryczny :: liczba przed wzorem w równaniu reakcji
:::

## 11 | Test końcowy {#test}

::: test
? Atom ²³Na ma:
- 11 protonów, 11 neutronów, 11 elektronów
+ 11 protonów, 12 neutronów, 11 elektronów
- 12 protonów, 11 neutronów, 12 elektronów
- 23 protony, 0 neutronów, 23 elektrony
! n⁰ = A − Z = 23 − 11 = 12.
? Wartościowość tlenu i wapnia to:
- I i I
+ II i II
- II i I
- III i II
! Oba pierwiastki mają wartościowość II.
? Wzór chlorku magnezu to:
- MgCl
+ MgCl₂
- Mg₂Cl
- MgCl₃
! Mg (II) i Cl (I): krzyżowanie daje MgCl₂.
? Wiązanie w NaCl to:
+ jonowe
- kowalencyjne
- metaliczne
- wodorowe
! Metal i niemetal dają wiązanie jonowe.
? Zbilansowane równanie spalania metanu to:
- CH₄ + O₂ → CO₂ + H₂O
+ CH₄ + 2 O₂ → CO₂ + 2 H₂O
- CH₄ + 2 O₂ → 2 CO₂ + H₂O
- CH₄ + O₂ → CO₂ + 2 H₂O
! Węgiel 1 = 1, wodór 4 = 2·2, tlen 4 = 2 + 2.
? Reakcja Zn + 2 HCl → ZnCl₂ + H₂ to typ:
- synteza
- analiza
+ wymiana
- spalanie
! Atomy metalu wypierają wodór z kwasu.
:::

## 12 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego węgiel jest w każdym organizmie
Węgiel ma wartościowość IV, więc może tworzyć cztery wiązania jednocześnie i budować długie łańcuchy. Stąd bierze się ogromna różnorodność związków organicznych, od cukru po białka.
:::

::: karta extra | Izotop, który pomaga datować
Węgiel-14 powstaje w atmosferze i rozpada się powoli. Porównanie jego ilości w szczątkach z obecną zawartością pozwala określić wiek materiału. To ten sam pierwiastek, różne izotopy — dokładnie to, o czym mówi lekcja.
:::

::: karta extra | Dlaczego żelazo rdzewieje w dwóch wersjach
Żelazo tworzy związki na II i III stopniu utlenienia. Stąd różne tlenki i różne odcienie rdzy. Dlatego w nazwie zawsze podaje się cyfrę rzymską.
:::

## 13 | Sposoby zapamiętania {#mnemotechniki}

- **Z = e, A = p + n** — Z na początku, bo zawsze „zero elektronów” w atomie obojętnym; A to całość.
- **Krzyżuj i skracaj** — wartościowości zamieniają się miejscami, potem NWD.
- **Indeksy zostają, współczynniki się zmieniają** — jak ceny w sklepie: nie przerabiasz produktu, tylko liczysz sztuki.

## 14 | Co dalej? {#dalej}

Następny krok to lekcja o wzorach strukturalnych i wiązaniach (F13–F14 w kursie) oraz powtórka klasy 7 (REV01) dla pełnego obrazu. Ta lekcja jest szybkim startem, a REV01 — głębszą powtórką.

## 15 | Checklista — umiem… {#checklista}

::: checklista
- [ ] obliczam p⁺, e⁻ i n⁰ z Z i A
- [ ] podaję grupę i okres pierwiastka z układu okresowego
- [ ] ustalam wartościowość i krzyżuję ją do wzoru sumarycznego
- [ ] rozpoznaję wiązanie jonowe i kowalencyjne
- [ ] bilansuję proste równanie i nazywam jego typ
:::

## Pochodzenie i sprawdzenie treści {#zrodla}

- Źródło: archiwalna `CHEMIA_PODSTAWA_PLUS_L002` (sekcje: cel, ściąga, diagnoza, treść 5.1–5.7, pułapki) — przepisane od zera według `PROMPT_BUDOWANIA_LEKCJI.md`, z wykładem, mini-wykładami, klinikami, zadaniami z kluczem, fiszkami, słownikiem i testem.
- Treść częściowo pokrywa się z REV01; różnica: ujęcie „start klasy 8”, krótsze i z diagnozą.
- Wartości mas i wartościowości zgodne z układem okresowego; datowanie węglem-14 — ciekawostka do weryfikacji w W1.
