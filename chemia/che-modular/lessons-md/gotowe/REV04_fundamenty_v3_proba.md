---
kod: REV04
uid: CHE.00.REV04.fundamenty_v3_proba
tytul: Fundamenty na start klasy 8 — atom, wartościowość, wzory, równania (próba promptu v3)
opis: BHP w pracowni · liczby Z, A, n · izotopy · układ okresowy jako mapa · wartościowość i krzyżowanie · wzory sumaryczne · wiązania jonowe i kowalencyjne · bilansowanie i typy reakcji · warstwy lo / olim / uni · diagnoza, ściąga, ćwiczenia A/B/C z kluczem
kicker: REV04 · POWTÓRKA · START KLASY 8 · PRÓBA v3
lead: Chemia w klasie 8 stoi na czterech filarach: atom, wartościowość, wzór i równanie. Ta lekcja składa je w całość i na końcu wraca do jednego pytania, które prowadzi przez cały materiał.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[exam:TRENING]][[lo:ROZSZERZENIE]][[olim:DLA AMBITNYCH]][[uni:ZAAWANSOWANE]]
skala: L
typ: przeglad
uwaga: Próbna lekcja wg PROMPT_BUDOWANIA_LEKCJI v3. Legenda warstw: basic = podstawa E8; lo = rozszerzenie; olim = dla ambitnych; uni = zaawansowane (model i jego granice). Treści ponad podstawę są oznaczone i nigdy nie są wymagane na egzaminie. Lekcja zastępuje w próbie REV03 (wersja v2) i może z nią konkurować; liczby do W1.
stopka: **CHEMIA REV04 v0.1 (próba v3)** · Fundamenty na start klasy 8 · 2026
stan: PRÓBNA — v3, Claude Haiku 5.5, 2026-10-12; przebieg „uczniem” i „księgowym” do wykonania po przeglądzie; W1 FULL do zrobienia
---

Ta lekcja składa cztery podstawy chemii w jedną całość: atom, wartościowość, wzór i równanie. Po jej przejściu policzysz liczbę protonów, neutronów i elektronów, ułożysz wzór sumaryczny z wartościowości, nazwiesz związek, rozpoznasz wiązanie i zbilansujesz prosty zapis reakcji. Na końcu wrócimy do pytania przewodniego.

::: minimum | Muszę umieć — 8 punktów
1. **Liczba atomowa Z** to liczba protonów w jądrze; w atomie obojętnym jest też równa liczbie elektronów.
2. **Liczba masowa A** to suma protonów i neutronów. Liczbę neutronów liczysz ze wzoru n = A − Z.
3. **Układ okresowy:** okres to wiersz (liczba powłok), grupa to kolumna (podobne własności; dla grup głównych podobna wartościowość).
4. **Wartościowość** to liczba wiązań, jaką atom może utworzyć. Dla grup głównych często: grupa 1 → I, grupa 2 → II, grupa 13 → III, grupa 14 → IV.
5. **Wzór sumaryczny** układasz, krzyżując wartościowości (algorytm w §4). Indeksu 1 się nie zapisuje.
6. **Wiązanie:** metal + niemetal → zwykle jonowe; same niemetale → kowalencyjne.
7. **Równanie** musi być zbilansowane: ta sama liczba atomów każdego pierwiastka po obu stronach. Zmieniasz tylko współczynniki, nigdy indeksów.
8. **Typy reakcji:** synteza (dwa substraty → jeden produkt), analiza (jeden substrat → produkty), wymiana (atom wypiera atom), spalanie (reakcja z tlenem).
:::

::: warstwy
- basic | <b>Podstawa (E8):</b> Z, A, n; układ okresowy; wartościowość; wzory sumaryczne; wiązania; bilansowanie; typy reakcji
- lo | <b>Rozszerzenie:</b> stopień utlenienia a wartościowość; elektroujemność i charakter wiązania (orientacyjnie)
- olim | <b>Dla ambitnych:</b> wyjątki od kolejności zapełniania powłok; dysproporcjonowanie; zadania wieloetapowe
- uni | <b>Zaawansowane:</b> wzór sumaryczny a sieć jonowa; granice modelu wartościowości i wiązania
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
1. **[§0.2](#diagnoza)** — diagnoza startowa. Sprawdź się, zanim przeczytasz.
2. **[§1](#wyklad)–[§2](#atom)** — wykład od zera i budowa atomu.
3. **[§3](#uklad)–[§4](#wartosciowosc)** — układ okresowy i wartościowość. Tu najczęściej robi się błędy.
4. **[§5](#wiazania)–[§6](#rownania)** — wiązania i równania.
5. **[§7](#klinika)–[§8](#cwiczenia)** — klinika błędów i ćwiczenia z kluczem.
:::

::: karta core | Pytanie przewodnie
Dlaczego „tlenek żelaza” to za mało, a „tlenek sodu” wystarcza? Odpowiedź znajdziesz w §14 — po drodze wszystko, czego potrzeba, żeby ją napisać samodzielnie.
:::

## 0 | Ściąga — cała lekcja na jednej stronie {#sciaga}

**Oznaczenia w tekście:** fakt chemiczny · uproszczenie szkolne · pułapka · wskazówka egzaminacyjna.

| Pierwiastek | Wartościowość | Uwagi |
|---|---|---|
| H | I | zawsze |
| O | II | prawie zawsze (wyjątki: nadtlenki, np. H₂O₂) |
| Na, K | I | grupa 1 |
| Mg, Ca | II | grupa 2 |
| Al | III | grupa 13 |
| C | IV | grupa 14 |
| N, P | III / V | zależnie od partnera |
| S | II / IV / VI | zależnie od partnera |
| Cl | I | wobec H i metali |
| Fe | II / III | **zawsze podawać w nazwie** |
| Cu | I / II | **zawsze podawać w nazwie** |

**Krzyżowanie (algorytm):** 1) symbole z wartościowościami rzymskimi → 2) skrzyżuj (wartościowość jednego to indeks drugiego) → 3) skróć NWD → 4) indeks 1 pomijasz.

**Atom:** Z = p⁺ = e⁻ (obojętny); A = p⁺ + n⁰; n⁰ = A − Z.

**Wiązania (test):** metal + niemetal → jonowe (uproszczenie szkolne); same niemetale → kowalencyjne.

**Równania:** bilans zmienia współczynniki, nie indeksy. Typy: synteza, analiza, wymiana, spalanie.

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand
- **Pisz, nie czytaj.** Każdy wzór i każde równanie zapisz ręcznie na kartce.
- **Mów na głos:** „sód ma jeden elektron walencyjny, więc wartościowość I”. Mówienie na głos wymusza zrozumienie, a nie zapamiętanie.
- **Nie przeskakuj diagnozy.** Błąd w diagnozie wskazuje dział do powtórki.
:::

## 0.2 | Diagnoza startowa {#diagnoza}

1. Ile protonów, neutronów i elektronów ma atom ²³Na?
2. W której grupie i którym okresie leży chlor?
3. Jaka jest wartościowość tlenu i wapnia?
4. Napisz wzór sumaryczny chlorku magnezu.
5. Jakie wiązanie występuje w NaCl, a jakie w H₂O?

::: karta understand | Klucz do diagnozy
1. Z = 11, więc p⁺ = 11 i e⁻ = 11; A = 23, więc n⁰ = 23 − 11 = 12.
2. Grupa 17 (VII grupa główna), okres 3.
3. Tlen — II, wapń — II.
4. MgCl₂ (Mg: II, Cl: I; krzyżowanie daje indeksy 1 i 2, indeks 1 pomijamy).
5. NaCl — jonowe (metal + niemetal); H₂O — kowalencyjne (same niemetale). Dla H₂O to uproszczenie: wiązanie jest spolaryzowane (patrz §5 i warstwa lo).
:::

## 1 | Wykład — chemia zaczyna się od liczenia {#wyklad}

::: karta understand | Wykład od zera
Chemik zapisuje świat w liczbach i symbolach. **Pierwiastek** to rodzaj atomów o tej samej liczbie protonów w jądrze. Tę liczbę nazywamy **liczbą atomową Z** i to ona decyduje, czym jest atom: sód ma 11 protonów, tlen 8, chlor 17.

Atomy są obojętne elektrycznie, więc liczba elektronów jest równa liczbie protonów. Elektrony krążą wokół jądra w **powłokach**. To one decydują o tym, jak atom łączy się z innymi. Dlatego pierwiastki z podobną liczbą elektronów na zewnętrznej powłoce zachowują się podobnie — i stąd bierze się układ okresowy.

**Analogia z kontrolą.** Wartościowość to „haczyki” atomu: im więcej haczyków, tym więcej wiązań może utworzyć. **Gdzie analogia się psuje:** elektrony nie są haczykami i nie mają wyznaczonych torów. Haczyki to model, który pozwala przewidywać wzory, a nie opis rzeczywistości.

Gdy zrozumiesz tę logikę, wartościowość, wzory i równania przestają być zbiorem reguł do zapamiętania. Są wynikiem jednej idei: atomy łączą się, bo dążą do bardziej stabilnej konfiguracji elektronów.
:::

### 1.1 Mini-wykład: BHP to pierwsza lekcja chemii {#bhp}

::: karta understand | W skrócie: dlaczego zaczynamy od pracowni
Zanim połączysz pierwszy atom, musisz umieć pracować bezpiecznie. Nie smakujemy i nie wąchamy substancji bezpośrednio — do węchu przesuwamy dłonią pary znad naczynia. Przy ogrzewaniu w probówce otwór kierujemy od siebie i od innych osób. Substancji nie wylewamy do zlewu bez konsultacji, a po doświadczeniu sprzątamy stanowisko. Fartuch i okulary to podstawa; rękawice — gdy wymaga tego substancja.
:::

## 2 | Budowa atomu i izotopy {#atom}

| Cząstka | Ładunek | Masa (ok.) | Miejsce |
|---|---|---|---|
| proton p⁺ | +1 | 1 u | jądro |
| neutron n⁰ | 0 | 1 u | jądro |
| elektron e⁻ | −1 | ok. 1/1836 u | powłoki |

**Wzory:** Z = liczba p⁺ = liczba e⁻ (atom obojętny); A = p⁺ + n⁰; n⁰ = A − Z.

**Przykłady zapisu:** ¹⁶O — 8 p⁺, 8 n⁰, 8 e⁻; ²³Na — 11 p⁺, 12 n⁰, 11 e⁻; ³⁵Cl — 17 p⁺, 18 n⁰, 17 e⁻; ⁴⁰Ca — 20 p⁺, 20 n⁰, 20 e⁻.

::: karta understand | Przykład prowadzony: atom ³⁵Cl
**Dane:** Z = 17, A = 35.
**Krok 1:** p⁺ = Z = 17; e⁻ = 17, bo atom jest obojętny.
**Krok 2:** n⁰ = A − Z = 35 − 17 = 18.
**Wniosek:** chlor-35 ma 17 protonów, 18 neutronów i 17 elektronów.
:::

**Izotopy** to odmiany tego samego pierwiastka: ta sama liczba protonów, różna liczba neutronów. Węgiel ma izotopy ¹²C, ¹³C i ¹⁴C. Mają tę samą chemię, bo mają te same elektrony.

::: karta understand | W skrócie: po co dwie liczby
Liczba atomowa Z mówi, który to pierwiastek. Liczba masowa A mówi, jak „ciężkie” jest jądro. Pomylenie ich to jeden z najczęstszych błędów (klinika w §7).
:::

## 3 | Układ okresowy — mapa, nie spis {#uklad}

- **Okresy** (wiersze) — liczba powłok elektronowych. Pierwiastki okresu 3 mają trzy powłoki.
- **Grupy** (kolumny) — pierwiastki o podobnych własnościach. Dla grup głównych liczba elektronów na zewnętrznej powłoce często odpowiada typowej wartościowości.

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
Azot i fosfor mają po pięć elektronów na zewnętrznej powłoce. Mogą „uzupełnić” ośmiu do trzech elektronów (III) albo oddać pięć (V) — zależnie od partnera reakcji. Dlatego przy N i P zawsze sprawdzaj, z czym się łączą. Ten sam mechanizm stoi za siarką (II, IV, VI).
:::

## 4 | Wartościowość i wzory sumaryczne {#wartosciowosc}

**Wartościowość** to liczba wiązań, jaką atom może utworzyć z innymi atomami. Zapisujemy ją cyframi rzymskimi.

Skąd ją wziąć?
1. Z układu okresowego (grupy główne).
2. Z nazwy (np. tlenek żelaza(III) — żelazo ma tu III).
3. Ze znanego wzoru (jeśli znasz wartościowość jednego z pierwiastków w związku).

**Metale o zmiennej wartościowości** — żelazo (II, III) i miedź (I, II) — zawsze podajemy w nazwie.

**Algorytm krzyżowania:**
1. Zapisz symbole z wartościowościami cyframi rzymskimi.
2. Skrzyżuj: wartościowość pierwszego pierwiastka staje się indeksem drugiego i odwrotnie.
3. Skróć indeksy (NWD).
4. Indeks 1 pomijasz.

**Przykłady:**
- Na^I + O^II → Na₂O (indeks Na = II = 2; indeks O = I = 1, czyli pomijamy);
- Al^III + O^II → Al₂O₃;
- Ca^II + Cl^I → CaCl₂;
- Fe^III + O^II → Fe₂O₃;
- C^IV + O^II → CO₂ (indeksy 4 i 2 skracamy NWD = 2 → 2 i 1).

::: karta core | Trzy kroki sprawdzenia wzoru
1. Suma ładunków w związku wynosi zero: w Na₂O mamy 2 · (+I) + 1 · (−II) = 0.
2. Indeksy są najmniejsze możliwe (po skróceniu NWD).
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
To reguła szkolna, czyli uproszczenie. Kilka związków metali z niemetalami ma wyraźny udział wiązania kowalencyjnego (przykład w warstwie lo). Na poziomie klasy 8 trzymaj się reguły, ale pamiętaj, że to model, a nie prawo.
:::

## 6 | Równania reakcji — bilans {#rownania}

Równanie zapisujemy od substratów do produktów: **substraty → produkty**. Bilans musi się zgadzać: liczba atomów każdego pierwiastka po obu stronach jest taka sama.

**Zasada:** indeks należy do substancji — nie zmieniamy go. Zmieniamy tylko **współczynniki** przed wzorami.

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

**Klinika aktywna.** Każdy zapis ma ukryty błąd. Znajdź go sam, a poprawną wersję sprawdź w kluczu.

::: karta exam | Znajdź błąd (3 zapisy)
a) „Związek Fe₂O₃ nazywam tlenkiem żelaza(II).”
b) „Reakcja 2 HgO → 2 Hg + O₂ to synteza.”
c) „Żeby zbilansować równanie, zmieniam indeks w H₂O na H₂O₂.”
::: odp | Pokaż klucz
a) Fe₂O₃ to tlenek żelaza(III): Fe musi mieć III, bo 2 · (+III) + 3 · (−II) = 0.
b) To analiza (rozkład jednego substratu na produkty), nie synteza.
c) Nie zmieniamy indeksów; zmieniamy tylko współczynniki. H₂O₂ to inna substancja.
:::
:::

**Tabela pułapek (podsumowanie):**

::: klinika | Błąd | Poprawnie | Dlaczego?
| Zmiana indeksów przy bilansowaniu | Zmiana tylko współczynników | Indeks należy do wzoru substancji. |
| FeO₃ zamiast Fe₂O₃ | Fe^III + O^II → Fe₂O₃ | Brak krzyżowania wartościowości. |
| Tlenek żelaza bez cyfry | Tlenek żelaza(III) | Żelazo ma zmienną wartościowość — trzeba ją podać. |
| Mylenie Z z A | Z = p⁺; A = p⁺ + n⁰ | To dwie różne liczby. |
| „Wartościowość zawsze = numer grupy” | Dla grup 15–17 zależy od partnera | Azot, siarka i chlorowce mają kilka wartości. |
| „Metal + niemetal zawsze jonowe” | Reguła szkolna; kilka związków ma wyraźny udział wiązania kowalencyjnego | Model upraszcza; warstwa lo pokazuje, kiedy. |
:::

## 8 | Ćwiczenia z kluczem {#cwiczenia}

Trzy poziomy: **A** — podstawowe (2 pkt), **B** — egzaminacyjne, 2+ kroki (3 pkt), **C** — ambitne (4 pkt; oznaczone [[lo]] / [[olim]]). Przy każdym zadaniu podano typ zadania (drabina trudności: rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty).

### Poziom A — podstawowy

::: karta exam | A1 (2 pkt) — rozpoznanie
Ile protonów, neutronów i elektronów ma atom ²⁴Mg?
::: odp | Pokaż klucz
Z = 12, więc p⁺ = 12 i e⁻ = 12; n⁰ = 24 − 12 = 12. (1 pkt za p⁺ i e⁻, 1 pkt za n⁰.)
:::
:::

::: karta exam | A2 (2 pkt) — zastosowanie
Podaj wartościowość podanego pierwiastka w każdym wzorze: S w H₂S, C w CO₂, Al w AlCl₃, O w Na₂O.
::: odp | Pokaż klucz
S — II; C — IV; Al — III; O — II. (1 pkt za dwa poprawne, 1 pkt za pozostałe dwa.)
:::
:::

::: karta exam | A3 (2 pkt) — zastosowanie
Napisz wzory sumaryczne: tlenek wapnia, chlorek glinu, siarczek sodu, tlenek żelaza(III).
::: odp | Pokaż klucz
CaO; AlCl₃; Na₂S; Fe₂O₃. (1 pkt za pierwsze dwa, 1 pkt za pozostałe dwa.)
:::
:::

::: karta exam | A4 (2 pkt) — rozpoznanie
Jakie wiązanie występuje w NaCl, Cl₂, H₂O i MgO? Podaj każdy rodzaj.
::: odp | Pokaż klucz
NaCl — jonowe; Cl₂ — kowalencyjne; H₂O — kowalencyjne; MgO — jonowe. (1 pkt za dwa poprawne, 1 pkt za pozostałe dwa.)
:::
:::

### Poziom B — egzaminacyjny

::: karta exam | B1 (3 pkt) — transformacja
Zbilansuj równanie: Fe + O₂ → Fe₂O₃.
::: odp | Pokaż klucz
4 Fe + 3 O₂ → 2 Fe₂O₃. Sprawdzenie: żelazo 4 = 2 · 2; tlen 6 = 3 · 2 = 2 · 3. (1 pkt za każdy z trzech współczynników: 4, 3, 2.)
:::
:::

::: karta exam | B2 (3 pkt) — uzasadnienie
Dlaczego FeCl₃ nazywamy chlorkiem żelaza(III), a NaCl po prostu chlorkiem sodu? Uzasadnij na podstawie wartościowości.
::: odp | Pokaż klucz
Żelazo ma zmienną wartościowość (II i III), więc w nazwie trzeba wskazać, która. W FeCl₃ chlor ma I, więc 3 · (−I) = −3, a żelazo musi mieć III. Sód ma tylko jedną wartościowość (I), więc cyfra byłaby zbędna. (1 pkt za zmienną wartościowość, 1 pkt za obliczenie III, 1 pkt za wniosek o sodzie.)
:::
:::

::: karta exam | B3 (3 pkt) — analiza błędu (kontekst: pracownia)
Uczeń w pracowni zapisał: Al + HCl → AlCl₂ + H₂. Znajdź błąd i napisz poprawne, zbilansowane równanie.
::: odp | Pokaż klucz
Błąd: glin ma wartościowość III, więc chlorek to AlCl₃, nie AlCl₂. Poprawnie: 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂. Sprawdzenie: Al 2 = 2; H 6 = 3 · 2; Cl 6 = 2 · 3. (1 pkt za wskazanie błędu, 1 pkt za AlCl₃, 1 pkt za współczynniki.)
:::
:::

::: karta exam | B4 (3 pkt) — transformacja i typ
Zbilansuj i określ typ reakcji: Mg + HCl → MgCl₂ + H₂.
::: odp | Pokaż klucz
Mg + 2 HCl → MgCl₂ + H₂. Typ: wymiana (atom magnezu wypiera wodór z kwasu). (1 pkt za współczynnik 2, 1 pkt za typ, 1 pkt za uzasadnienie.)
:::
:::

### Poziom C — ambitny

::: karta exam | C1 (4 pkt) — kontrprzykład [[lo]]
Reguła „metal + niemetal = jonowe” ma wyjątki. Podaj związek metalu z niemetalem, w którym wiązanie ma wyraźny udział kowalencyjności, i uzasadnij to różnicą elektroujemności (wartości Paulinga, orientacyjnie: Al ≈ 1,6; Cl ≈ 3,2).
::: odp | Pokaż klucz
AlCl₃. Δχ ≈ 3,2 − 1,6 = 1,6 (orientacyjnie), czyli mniej niż przybliżony próg ok. 1,7 stosowany w szkole do oceny wiązania jonowego. Wniosek: wiązanie ma pośredni charakter. (1 pkt za wybór, 1 pkt za Δχ, 1 pkt za porównanie z progiem, 1 pkt za wniosek, że to model.)
:::
:::

::: karta exam | C2 (4 pkt) — analiza [[olim]]
Cl₂ w zimnym roztworze NaOH daje NaCl i NaClO. Zbilansuj równanie, podaj stopnie utlenienia chloru przed i po reakcji i uzasadnij, że to dysproporcjonowanie.
::: odp | Pokaż klucz
Cl₂ + 2 NaOH → NaCl + NaClO + H₂O. Chlor w Cl₂ ma 0; w NaCl ma −I; w NaClO ma +I (Na: +I, O: −II). Ten sam pierwiastek jednocześnie się redukuje (0 → −I) i utlenia (0 → +I) — to dysproporcjonowanie. (1 pkt za bilans, 1 pkt za 0, 1 pkt za −I i +I, 1 pkt za wniosek.)
:::
:::

::: karta exam | C3 (4 pkt) — problem otwarty [[olim]]
Pierwiastek X ma liczbę atomową Z = 16. Podaj jego symbol, okres i grupę, wzór jego wodorku oraz wzory tlenków, które może tworzyć. Uzasadnij, dlaczego jeden z możliwych tlenków (SO) nie jest typowym związkiem.
::: odp | Pokaż klucz
X = S; okres 3; grupa 16 (VI). Wodorek: H₂S. Tlenki: SO₂ (IV) i SO₃ (VI). Tlenek SO (II) jest nietrwały, więc nie występuje jako typowy związek. (1 pkt za symbol, okres i grupę; 1 pkt za H₂S; 2 pkt za dwa tlenki z uzasadnieniem.) Problem otwarty: czy pierwiastek o innej wartościowości mógłby mieć taki tlenek w warunkach laboratoryjnych? Napisz w 2–3 zdaniach.
:::
:::

## 9 | Sekcje warstwowe (ponad podstawę)

::: karta lo | [[lo]] Pomost do LO — stopień utlenienia a wartościowość
**Wartościowość** liczy wiązania. **Stopień utlenienia** to umowny ładunek atomu, gdy wiązania przypiszemy bardziej elektroujemnemu partnerowi. W większości prostych związków dają te same liczby — stąd na starcie wymiennie. Różnica widać w nadtlenku wodoru H₂O₂: tlen ma wartościowość II (dwa wiązania), ale stopień utlenienia −I (wiązanie O–O nie przesuwa ładunku). Przy redoksie (klasa 1 LO) liczy się stopień utlenienia.
:::

::: karta lo | [[lo]] Elektroujemność i charakter wiązania (orientacyjnie)
Elektroujemność (skala Paulinga) mówi, jak mocno atom przyciąga wspólną parę elektronów. Im większa różnica Δχ, tym bardziej wiązanie „przechyla się” w stronę jonowego. Orientacyjne wartości: Na ≈ 0,9; Cl ≈ 3,2; O ≈ 3,4; H ≈ 2,2. Stąd: Δχ dla NaCl ≈ 2,2 (jonowe), dla H–O ≈ 1,2 (kowalencyjne spolaryzowane). Progi 1,7 i 0,4 to uproszczenie szkolne — nie ostre granice.
:::

::: karta olim | [[olim]] Dla ambitnych — wyjątki od kolejności zapełniania powłok
Schemat zapełniania powłok (Aufbau) przewiduje np. konfigurację Cr: [Ar] 3d⁴ 4s², ale rzeczywista to [Ar] 3d⁵ 4s¹. Podobnie Cu: [Ar] 3d¹⁰ 4s¹, nie 3d⁹ 4s². Powód: połówkowo i całkowicie zapełniona podpowłoka d daje pewną stabilność (uproszczenie; to wyjaśnienie na poziomie olimpiady). Dla klasy 8 wystarczy wiedzieć, że wyjątki istnieją — wrócą w klasie 1 LO.
:::

::: karta olim | [[olim]] Dla ambitnych — dysproporcjonowanie
W reakcji Cl₂ z zimnym NaOH jeden pierwiastek jednocześnie się utlenia i redukuje. Chlor zapowiada reakcje redoks, które w klasie 8 jeszcze nie są omawiane, ale rozpoznanie wzoru jest już dostępne: patrz C2.
:::

::: karta uni | [[uni]] Zaawansowane — model i jego granice
**Wzór NaCl jest wzorem sumarycznym, a nie opisem cząsteczki.** Kryształ soli kuchennej to sieć jonów Na⁺ i Cl⁻ rozciągająca się we wszystkich kierunkach; wzór NaCl podaje tylko stosunek liczby jonów (1 : 1). Gdy mówimy „cząsteczka NaCl”, używamy modelu, który obowiązuje w fazie gazowej, a nie w krysztale.

**Wartościowość jako liczba wiązań** to także model. Dla H₂O i CO₂ liczba wiązań zgadza się z klasyczną wartościowością, ale już przy związkach koordynacyjnych ten prosty licznik przestaje wystarczać. Pytanie „gdzie model się kończy?” jest dobrym pytaniem na każdym etapie chemii.
:::

## 10 | Fiszki {#fiszki}

::: fiszki
Liczba atomowa Z | liczba protonów (w atomie obojętnym równa liczbie elektronów) | basic:atom
Liczba masowa A | p⁺ + n⁰ | basic:atom
Izotop | ten sam pierwiastek, różna liczba neutronów | basic:atom
Okres | wiersz układu okresowego; liczba powłok | basic:uklad
Grupa | kolumna układu okresowego; podobne własności | basic:uklad
Wartościowość | liczba wiązań, jaką atom może utworzyć | basic:wartosciowosc
Krzyżowanie wartościowości | wartościowości stają się indeksami drugiego pierwiastka | basic:wzory
Wiązanie jonowe | metal + niemetal, przeniesienie elektronów | basic:wiazania
Bilans równania | ta sama liczba atomów każdego pierwiastka po obu stronach | basic:rownania
Wartościowość H₂O₂ dla tlenu | II (dwa wiązania), ale stopień utlenienia −I | lo:utlenienie
Δχ dla NaCl (orientacyjnie) | ok. 2,2 — wiązanie jonowe | lo:wiazania
Wyjątek od Aufbau | Cr: [Ar] 3d⁵ 4s¹; Cu: [Ar] 3d¹⁰ 4s¹ | olim:konfiguracje
Dysproporcjonowanie | ten sam pierwiastek jednocześnie się utlenia i redukuje | olim:redoks
Sieć jonowa NaCl | wzór sumaryczny podaje stosunek jonów, nie cząsteczkę | uni:model
Granice modelu wartościowości | liczba wiązań to model; nie zawsze wystarcza | uni:model
:::

## 11 | Słownik {#slownik}

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
Stopień utlenienia :: umowny ładunek atomu przy przypisaniu wiązań bardziej elektroujemnemu partnerowi (lo)
Dysproporcjonowanie :: reakcja, w której jeden pierwiastek jednocześnie się utlenia i redukuje (olim)
:::

## 12 | Test końcowy {#test}

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
! Metal i niemetal dają wiązanie jonowe (uproszczenie szkolne).
? Zbilansowane równanie spalania metanu to:
- CH₄ + O₂ → CO₂ + H₂O
+ CH₄ + 2 O₂ → CO₂ + 2 H₂O
- CH₄ + 2 O₂ → 2 CO₂ + H₂O
- CH₄ + O₂ → CO₂ + 2 H₂O
! Węgiel 1 = 1, wodór 4 = 2 · 2, tlen 4 = 2 + 2.
? Reakcja Zn + 2 HCl → ZnCl₂ + H₂ to typ:
- synteza
- analiza
+ wymiana
- spalanie
! Atom metalu wypiera wodór z kwasu.
? Atomy izotopów tego samego pierwiastka różnią się:
- liczbą protonów
+ liczbą neutronów
- liczbą elektronów na zewnętrznej powłoce
- wartościowością
! Izotopy mają ten sam Z, więc te same elektrony; różnią się n⁰ i A.
? Wartościowość siarki w SO₃ to:
- II
- IV
+ VI
- III
! W SO₃ siarka wiąże się z trzema atomami tlenu po dwa wiązania: 3 · II = VI.
? W reakcji 2 H₂ + O₂ → 2 H₂O typ to:
+ synteza
- analiza
- wymiana
- spalanie
! Dwa substraty dają jeden produkt.
? Które stwierdzenie o Fe₂O₃ jest poprawne?
- Żelazo ma wartościowość II
+ Nazwa to tlenek żelaza(III)
- Wzór powstaje bez krzyżowania
- Związek jest kowalencyjny z definicji
! Fe ma III, O ma II; 2 · III = 3 · II = 6.
:::

## 13 | Sposoby zapamiętania {#mnemotechniki}

- **Z = e, A = p + n** — Z zawsze równe liczbie elektronów w atomie obojętnym; A to całe jądro.
- **Krzyżuj i skracaj** — wartościowości zamieniają się miejscami, potem NWD.
- **Indeksy zostają, współczynniki się zmieniają** — jak w sklepie: nie przerabiasz produktu, tylko liczysz sztuki.

## 14 | Odpowiedź na pytanie przewodnie {#odpowiedz}

„Tlenek sodu” wystarcza, bo sód ma tylko jedną wartościowość (I), więc Na₂O jest jedynym możliwym tlenkiem sodu. Żelazo ma dwie wartościowości, II i III, a więc dwa tlenki: FeO (żelazo(II)) i Fe₂O₃ (żelazo(III)). Cyfra rzymska w nazwie to jedyny sposób, żeby je odróżnić.

## 15 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego węgiel jest w każdym organizmie
Węgiel ma wartościowość IV, więc może utworzyć cztery wiązania naraz i budować długie łańcuchy. Stąd bierze się ogromna różnorodność związków organicznych, od cukru po białka.
:::

::: karta extra | Izotop, który pomaga datować
Węgiel-14 powstaje w atmosferze i powoli się rozpada (okres połowicznego rozpadu ok. 5730 lat — orientacyjnie). Porównanie jego zawartości w szczątkach z zawartością dzisiejszą pozwala oszacować wiek materiału.
:::

::: karta extra | Magnetyt: tlenek z dwiema wartościowościami naraz
Magnetyt ma wzór Fe₃O₄. Można go zapisać jako FeO · Fe₂O₃, więc zawiera żelazo na II i III stopniu jednocześnie. To dobry przykład, dlaczego jeden „tlenek żelaza” bez cyfry jest niejednoznaczny.
:::

## 16 | Co dalej? {#dalej}

**Wcześniej:** REV01 — powtórka klasy 7 (ta sama treść w głębszym ujęciu).
**Dalej:** lekcje o wzorach strukturalnych i wiązaniach (F13–F14). **Spirala:** wartościowość i stopnie utlenienia wrócą w klasie 1 LO przy reakcjach redoks; wyjątki od Aufbau — w chemii olimpijskiej.

## 17 | Checklista — umiem… {#checklista}

::: checklista
- [ ] obliczam p⁺, e⁻ i n⁰ z Z i A
- [ ] podaję grupę i okres pierwiastka z układu okresowego
- [ ] ustalam wartościowość i krzyżuję ją do wzoru sumarycznego
- [ ] nazywam związek z cyfrą rzymską tam, gdzie trzeba
- [ ] rozpoznaję wiązanie jonowe i kowalencyjne
- [ ] bilansuję proste równanie i nazywam jego typ
- [ ] [[lo]] odróżniam wartościowość od stopnia utlenienia na przykładzie H₂O₂
- [ ] [[olim]] wiem, że istnieją wyjątki od kolejności zapełniania powłok
- [ ] [[uni]] wyjaśniam, dlaczego wzór NaCl nie opisuje cząsteczki
- [ ] Zapisz własnymi słowami, co było najtrudniejsze — to będzie twoja pierwsza samodzielna fiszka.
:::

## Pochodzenie i sprawdzenie treści {#zrodla}

- **Skala i typ:** skala L (minimum 8 pozycji, synteza wielu działów); typ przeglad (najdłuższa diagnoza i ściąga, wykład syntetyczny).
- **Źródło:** archiwalna `CHEMIA_PODSTAWA_PLUS_L002` (cel, ściąga, diagnoza, treść 5.1–5.7, pułapki, ćwiczenia) — przepisane od zera wg PROMPT_BUDOWANIA_LEKCJI v3. Warstwy lo/olim/uni: treść nowa (moja), nie z archiwum, które tych warstw nie miało poza krótką sekcją „Rozszerzenie” i „Dla ambitnych”.
- **Pominięcia:** ścieżki czasowe („masz 20 minut”) — pominięte na życzenie użytkownika w tej próbie.
- **Do W1:** wartości Paulinga (orientacyjne), okres połowicznego rozpadu ¹⁴C, wyjątki Cr i Cu, wyjaśnienie stabilności połówkowo zapełnionej podpowłoki d, stopnie utlenienia w H₂O₂ i SO₃.
- **Do przebiegu „uczniem”:** sprawdzić, czy „wiązanie spolaryzowane”, „sieć jonowa”, „elektroujemność” są wyjaśnione przy pierwszym użyciu (w tej wersji wyjaśnione w warstwach lo/uni — do potwierdzenia).
