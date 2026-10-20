# L090 — Extra olimpijska

## KARTA LEKCJI L090

- Numer: L090
- Tytuł roboczy: Extra olimpijska
- Dział: Konkurs
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L050 · Następna: —
- Status treści: audyt W1 punktowy 2026-10-09; pełna walidacja wszystkich kluczy nadal wymagana
- Status HTML: brak HTML
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Myślenie konkursowe.

`[BIO: DIAGRAM type=FLOW]`
`dane → model → obliczenie/wniosek`
`[/BIO: DIAGRAM]`
@opis Rozszerzenie olimpijskie: jawnie zapisuj założenia, definicje i ograniczenia modeli. Schemat 1 w lekcji L090 pokazuje relację opisaną w jego etykietach; strzałki należy czytać zgodnie z kierunkiem zapisu. Jest modelem dydaktycznym, nie pełnym obrazem wszystkich wyjątków.

**Co uczeń ma zauważyć:** jawne założenia i kontrola wyniku.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Extra  
**Poziomy:** zaawansowany  
**Poprzednia lekcja:** L050  
**Następna lekcja:** —

---

## 1. Pytanie przewodnie

Jakie tematy wykraczają poza podstawę programową i jak je zrozumieć?

---

## 2. Cele lekcji

Po lekcji uczeń:

- zna tematy wykraczające poza podstawę,
- (ambitny) rozumie mechanizmy molekularne,
- (zaawansowany) rozwiązuje zadania olimpijskie,
- łączy genetykę, ewolucję i ekologię z chemią i matematyką.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|-------------------|----------|
| kod genetyczny | fundament |
| Hardy–Weinberg | matematyka populacji |
| mapowanie genów | genetyka klasyczna |

---

## 3. Co trzeba wiedzieć wcześniej (kompas)

Wszystko z L010–L050:
- genetyka (DNA, chromosom, podziały, dziedziczenie, mutacje),
- ewolucja (dobór),
- ekologia (ekosystem).

---

## 4. Tematy olimpijskie (rozwinięte)

### 4.1. Kod genetyczny

**Cechy kodu genetycznego:**

1. **Trójkowy** — 3 nukleotydy (kodon) kodują 1 aminokwas.
2. **Zdegenerowany** — wiele kodonów koduje ten sam aminokwas (64 kodony, 20 aminokwasów).
3. **Bezprzecinkowy** — kodony następują po sobie bez przerw.
4. **Niezachodzący** — każdy nukleotyd należy do jednego kodonu.
5. **Uniwersalny** — ten sam kod u prawie wszystkich organizmów (wyjątki: mitochondria, niektóre protisty).

**Przykład:**
- AUG → metionina (start)
- UAA, UAG, UGA → stop
- 61 kodonów → 20 aminokwasów (bo zdegenerowany)

**Zadanie:** Ile kodonów koduje 20 aminokwasów? (Odp.: 61 — bo 64 − 3 stop.)

### 4.2. Transkrypcja i translacja (szkic)

```
DNA → (transkrypcja) → mRNA → (translacja) → białko
```

**Transkrypcja:** w jądrze; DNA → mRNA (komplementarność A–U, T–A, C–G, G–C).
**Translacja:** w rybosomach; mRNA → aminokwasy (kodon → antykodon tRNA → aminokwas).

**Zadanie:** Sekwencja DNA: TAC GCA TGG. Jaka sekwencja mRNA? (Odp.: AUG CGU ACC.)

@viz kod-genetyczny | Kod genetyczny: DNA → mRNA → białko i skutki mutacji | kliknij zasadę w nici kodującej
@opis Nić kodująca i matrycowa DNA, pod nimi mRNA w kodonach i aminokwasy (Met, Phe, Gly, Trp, Lys, Cys, STOP). Kliknięcie zasady zmienia ją i panel nazywa skutek: mutacja cicha (ten sam aminokwas — degeneracja kodu), zmiany sensu (inny aminokwas), nonsensowna (przedwczesny STOP, białko skrócone) albo utrata START; przycisk przywraca sekwencję. Wniosek: kod jest trójkowy, jednoznaczny i zdegenerowany, a skutek mutacji punktowej zależy od tego, w który kodon i w którą pozycję trafi.

### 4.3. Prawa Mendla formalnie

**I prawo (rozszczepienia):** allele rozchodzą się do gamet.
**II prawo (niezależnej segregacji):** allele różnych genów rozchodzą się niezależnie (jeśli geny na różnych chromosomach).

**Krzyżówka dwugenowa:** AaBb × AaBb → 9:3:3:1 (fenotypy przy pełnej dominacji).

**Zadanie:** AaBb × AaBb. Ile genotypów? (Odp.: 9 różnych genotypów.)

### 4.4. Drzewa rodowe złożone

**Algorytm:**
1. Cecha u obu płci? (autosomalna vs X-linked)
2. Przeskoki pokoleń? (recesywna vs dominująca)
3. Chory ojciec → chory syn? (X-linked recesywna: nie)
4. Wykluczaj modele.

**Zadanie:** Zdrowi rodzice mają chore dziecko. Jaki model? (Odp.: recesywna — autosomalna lub X-linked.)

### 4.5. Hardy–Weinberg

```
p + q = 1
p² + 2pq + q² = 1
```

- p — częstość allelu A
- q — częstość allelu a
- p² — AA
- 2pq — Aa
- q² — aa

**Założenia:**
- duża populacja,
- brak doboru,
- brak mutacji,
- brak migracji,
- losowe kojarzenie.

**Zadanie:** q² = 0,09 → q = 0,3 → p = 0,7. Ile Aa? (Odp.: 2pq = 2·0,7·0,3 = 0,42.)

**Kiedy model nie działa:** mała populacja, dobór, dryf, migracja.

@viz hardy-weinberg | Hardy–Weinberg: od chorych do nosicieli | tryb „znam q” albo „znam częstość chorych”; przesuń suwak
@opis Dwa tryby z suwakiem. „Znam q”: częstość allelu a od 0 do 1. „Znam częstość chorych”: q² do wyboru suwakiem (1 na 4, 9 na 100, 1 na 25, 1 na 100, 1 na 400, 1 na 2500, 1 na 10 000). Panel pokazuje obliczenia krok po kroku (q² → q = √q² → p = 1 − q) i sprawdzenie p² + 2pq + q² = 1. Trzy poziome słupki: AA (zielony, p²), Aa — nosiciele (pomarańczowy, 2pq), aa (czerwony, q²) z procentem i liczbą osób w populacji 10 000. Dla 1 chorego na 2500 wychodzi q = 0,02, nosicieli ok. 3,9% (1 osoba na 26) — ok. 98 razy więcej niż chorych. Wniosek: przy rzadkiej chorobie recesywnej nosicieli jest wielokrotnie więcej niż chorych; obliczenia zakładają dużą populację bez doboru, mutacji i migracji oraz losowe kojarzenie.

### 4.6. Mapowanie genów

- Frekwencja rekombinacji = odsetek potomstwa z rekombinowanymi allelami.
- Jednostka: centymorgan (cM).
- 1 cM ≈ 1% rekombinacji.

**Zadanie:** W krzyżówce 100 osobników, 15 rekombinantów. Jaka odległość? (Odp.: 15 cM.)

### 4.7. Mutacje — rozszerzone typy

| Typ | Opis |
|-----|------|
| Substytucja | jedna zasada → inna |
| Missense | zmiana aminokwasu |
| Nonsense | kodon stop przedwcześnie |
| Frameshift | przesunięcie ramki odczytu |
| Delecja/insercja | ubytek/wstawka |

**Zadanie:** Sekwencja ATG CCA. Substytucja C→G: ATG GCA. Jaki typ mutacji? (Odp.: missense — zmiana aminokwasu.)

### 4.8. Telomery, starzenie

- **Telomery** — końcówki chromosomów, chronią przed utratą informacji.
- Skracają się przy każdym podziale.
- **Telomeraza** — enzym odbudowujący telomery (aktywny w komórkach macierzystych i nowotworowych).

### 4.9. mtDNA, dziedziczenie maternalne

- mtDNA — w mitochondriach.
- Dziedziczy się **po matce** (ojciec przekazuje mitochondria plemnika, ale są one degradowane).
- Mutacje mtDNA → choroby mitochondrialne.

### 4.10. Biotechnologia w mediach vs fakt

- **GMO** — organizmy modyfikowane genetycznie.
- **CRISPR/Cas9** — precyzyjna edycja genów.
- **Klonowanie** — Dolly (1996).
- **Terapia genowa** — wprowadzanie prawidłowych genów.

**Uwaga:** media często upraszczają; warto znać fakty.

---

## 5. Ćwiczenia

### A. Podstawa olimpijska

1. Podaj 5 cech kodu genetycznego.
2. Ile kodonów koduje 20 aminokwasów?
3. Co to transkrypcja? Gdzie zachodzi?
4. Co to translacja? Gdzie zachodzi?
5. Podaj założenia Hardy'ego-Weinberga.

### B. Trening olimpijski

6. Sekwencja DNA: TAC GCA TGG. Jaka mRNA?
7. AaBb × AaBb. Ile genotypów?
8. q² = 0,16. Oblicz p, q, 2pq.
9. W krzyżówce 200 osobników, 30 rekombinantów. Jaka odległość w cM?
10. Substytucja C→G w ATG CCA. Jaki typ mutacji?

### C. Ambitne olimpijskie

11. Zdrowi rodzice mają chore dziecko. Jakie modele dziedziczenia?
12. Anemia sierpowata — dlaczego allel utrzymuje się?
13. Dlaczego kod genetyczny jest zdegenerowany?
14. Kiedy model Hardy'ego-Weinberga nie działa?

### D. Zaawansowane olimpijskie

15. Zaprojektuj krzyżówkę, która pozwoli odróżnić AA od Aa.
16. Rodowód: chory ojciec, zdrowa matka, chory syn i zdrowa córka. Jaki model?
17. Oblicz odległość między genami A i B, jeśli w krzyżówce 1000 osobników 180 to rekombinanty.
18. Wyjaśnij, dlaczego mutacje mitochondrialne dziedziczą się po matce.

---

## 6. Odpowiedzi

### A

1. Trójkowy, zdegenerowany, bezprzecinkowy, niezachodzący, uniwersalny.
2. 61 (64 − 3 stop).
3. Przepisanie DNA na mRNA; w jądrze.
4. Odczyt mRNA i synteza białka; w rybosomach.
5. Duża populacja, brak doboru, brak mutacji, brak migracji, losowe kojarzenie.

### B

6. AUG CGU ACC.
7. 9.
8. q = 0,4; p = 0,6; 2pq = 0,48.
9. 15 cM.
10. Missense.

### C

11. Autosomalna recesywna lub X-linked recesywna.
12. Heterozygoty mają przewagę (ochrona przed malarią).
13. Chroni przed skutkami mutacji punktowych.
14. Mała populacja, dobór, dryf, migracja.

### D

15. Krzyżówka testowa z aa: AA × aa → 100% Aa; Aa × aa → 1:1 Aa : aa.
16. X-linked recesywna (chory ojciec nie przekazuje X synowi — syn chory od matki nosicielki).
17. 18 cM.
18. Mitochondria plemnika są degradowane po zapłodnieniu; tylko mitochondria komórki jajowej pozostają.

---

## 7. Fiszki olimpijskie

| Pytanie | Odpowiedź |
|---------|-----------|
| Kod genetyczny — cechy | Trójkowy, zdegenerowany, bezprzecinkowy, niezachodzący, uniwersalny |
| Kodon start | AUG (metionina) |
| Kodony stop | UAA, UAG, UGA |
| Transkrypcja | DNA → mRNA (jądro) |
| Translacja | mRNA → białko (rybosom) |
| Hardy–Weinberg | p + q = 1; p² + 2pq + q² = 1 |
| 1 cM | 1% rekombinacji |
| Frameshift | Przesunięcie ramki odczytu |
| Missense | Zmiana aminokwasu |
| Nonsense | Przedwczesny stop |
| Telomery | Końcówki chromosomów |
| mtDNA | Dziedziczone po matce |
| CRISPR | Edycja genów |

---

## 8. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Podaj cechy kodu genetycznego. |
| ZASTOSUJ | Oblicz częstość alleli. |
| WYJAŚNIJ | Dlaczego kod jest zdegenerowany? |
| ODKRYJ | Kiedy model HW nie działa? |
| POŁĄCZ | Połącz mapowanie z mejozą. |
| ZAKWESTIONUJ | Czy model HW jest realistyczny? |

---

## 9. Klinika 2.0 — olimpijska

**Błąd 1:** „Kod genetyczny jest uniwersalny — zawsze."

- **Znajdź:** Uogólnienie.
- **Popraw:** Prawie zawsze; wyjątki: mitochondria, niektóre protisty.
- **Reguła:** Uniwersalność to reguła, ale są wyjątki.
- **Dlaczego:** Kod mitochondrialny różni się od jądrowego.

**Błąd 2:** „Hardy–Weinberg działa zawsze."

- **Znajdź:** Brak założeń.
- **Popraw:** Działa tylko przy spełnieniu założeń (duża populacja, brak doboru, mutacji, migracji, losowe kojarzenie).
- **Reguła:** Model to uproszczenie.
- **Dlaczego:** W rzeczywistości populacje są małe, dobór działa, mutacje zachodzą.

---

## 10. Jak się uczyć — olimpijska

1. Wybierz temat (np. Hardy–Weinberg).
2. Przeczytaj materiały (podręcznik licealny, źródła).
3. Zrób notatki.
4. Rozwiąż zadania.
5. Wróć do L010–L021 jako baza.

**Tempo dowolne. Bez bramki.**

---

## 11. Połączenia międzyprzedmiotowe

- **Matematyka:** statystyka, prawdopodobieństwo, proporcje.
- **Chemia:** biochemia, kwasy nukleinowe, białka.
- **Informatyka:** kod binarny vs kod genetyczny, kompresja danych.

---

## 12. Zadania z życia codziennego

1. Jak działa test na ojcostwo?
2. Jak działa CRISPR?
3. Dlaczego telomery są ważne w starzeniu?
4. Jakie znaczenie mają badania genetyczne?
5. Czy GMO jest bezpieczne? (dyskusja)

---

## 13. Słownik

| Termin | Definicja |
|--------|-----------|
| Kodon | Trójka nukleotydów kodująca aminokwas |
| Antykodon | Trójka nukleotydów w tRNA komplementarna do kodonu |
| Transkrypcja | Przepisanie DNA na mRNA |
| Translacja | Synteza białka na podstawie mRNA |
| Hardy–Weinberg | Model równowagi alleli w populacji |
| cM | Centymorgan — jednostka odległości genetycznej |
| Frameshift | Przesunięcie ramki odczytu |
| Telomer | Końcówka chromosomu |
| mtDNA | DNA mitochondrialny |

---

## 14. Checklista

- [ ] Znam cechy kodu genetycznego.
- [ ] Rozumiem transkrypcję i translację (szkic).
- [ ] Znam prawa Mendla.
- [ ] Umiem obliczyć częstości w modelu HW.
- [ ] Znam mapowanie genów (cM).
- [ ] Rozróżniam typy mutacji (missense, nonsense, frameshift).
- [ ] Wiem, co to telomery, mtDNA, CRISPR.

---

## 15. Co dalej?

Po L090:
- Powtórka L010–L050 (utrwalenie).
- Przygotowanie do konkursu biologicznego (LKO) — patrz `KONKURSY_2026_2027.md`.
- Ewentualnie: chemia (L002–L013) jako uzupełnienie.

---


## UZUPEŁNIENIE MASTER v4.1 — kontrola precyzji olimpijskiej

### 16. Jak czytać materiał rozszerzony?

Materiał olimpijski powinien być traktowany jako **budowanie modelu**, a nie lista trudniejszych słów.

Przy każdym nowym pojęciu zadaj cztery pytania:

1. **Co to jest?**
2. **Jak działa?**
3. **Z czym łączy się z wcześniejszych lekcji?**
4. **Jakie założenie muszę spełnić, aby mój wniosek był prawdziwy?**

### 16.1. Kod genetyczny — ważne zastrzeżenia

Warto rozróżniać:

- **kod genetyczny** — reguła przyporządkowania kodonów aminokwasom,
- **sekwencję DNA/RNA** — konkretny zapis nukleotydów,
- **ekspresję genu** — proces wykorzystania informacji genetycznej.

Cechy kodu genetycznego:

- trójkowy,
- zdegenerowany,
- bezprzecinkowy,
- niezachodzący,
- prawie uniwersalny.

„Prawie uniwersalny” jest bezpieczniejsze niż „zawsze uniwersalny”, ponieważ istnieją wyjątki, m.in. w niektórych genomach mitochondrialnych.

### 16.2. Transkrypcja i translacja — nie myl kierunku

Uproszczony schemat:

```text
DNA
 ↓ transkrypcja
RNA
 ↓ translacja
białko
```

W komórce eukariotycznej transkrypcja zachodzi w jądrze, natomiast translacja zachodzi na rybosomach.

Przy przepisywaniu sekwencji trzeba zawsze sprawdzić, **która nić DNA została podana i w jakim kierunku**. Nie wolno mechanicznie zamieniać każdej litery bez określenia, czy podana sekwencja jest nicią matrycową.

### 16.3. Hardy–Weinberg — model, nie prawo rzeczywistości

Równania:

```text
p + q = 1
p² + 2pq + q² = 1
```

opisują model równowagi populacji przy określonych założeniach.

Przed zastosowaniem wzoru sprawdź:

- czy populacja jest wystarczająco duża,
- czy zakładamy brak doboru,
- czy zakładamy brak migracji,
- czy zakładamy brak mutacji,
- czy kojarzenie jest losowe.

> **Najważniejsza umiejętność olimpijska:** nie tylko policzyć, ale sprawdzić, czy model wolno zastosować.

### 16.4. Mapowanie genów

Przybliżenie:

```text
1% rekombinacji ≈ 1 cM
```

jest użyteczne dla zadań szkolnych i wielu zadań konkursowych, ale częstość rekombinacji nie jest bezwarunkowo idealną miarą fizycznej odległości DNA.

### 16.5. Rodowody — nie zgaduj po jednym znaku

Algorytm:

```text
1. Czy cecha występuje u obu płci?
2. Czy zdrowi rodzice mają chore dziecko?
3. Czy cecha przeskakuje pokolenia?
4. Czy występuje przekaz ojciec → syn?
5. Które modele można wykluczyć?
6. Czy pozostałe dane jednoznacznie wybierają jeden model?
```

Jeśli dane nie rozstrzygają, odpowiedź powinna to powiedzieć.

### 16.6. Mutacja ≠ skutek

Schemat:

```text
mutacja
 ↓
zmiana sekwencji?
 ↓
zmiana RNA / białka?
 ↓
zmiana funkcji?
 ↓
zmiana fenotypu?
```

Nie każdy etap musi zakończyć się zmianą następnego.

### 16.7. Nondysjunkcja — pilnuj poziomu

Nie należy mieszać:

```text
błąd w mejozie
→ nieprawidłowa gameta
→ nieprawidłowa zygota
→ aneuploidia
```

z:

```text
mutacja genu
→ zmiana sekwencji DNA
```

To różne poziomy organizacji materiału genetycznego.

### 16.8. Kontrola zadań olimpijskich

Przed zapisaniem wyniku sprawdź:

- jednostki,
- zakres populacji,
- kierunek nici DNA,
- założenia modelu,
- czy wynik jest biologicznie możliwy,
- czy pytanie dotyczy genotypu, fenotypu, allelu, genu czy chromosomu.

### 16.9. Zasada „nie przesadzaj z uproszczeniem”

Jeżeli szkolny skrót jest użyteczny, oznacz go jako skrót.

Przykłady:

- „XX = kobieta, XY = mężczyzna” → **typowy model szkolny**,
- „kod genetyczny jest uniwersalny” → lepiej: **prawie uniwersalny**,
- „1 cM = 1% rekombinacji” → użyteczne przybliżenie,
- „chromatyna = luźne DNA” → zbyt duże uproszczenie; chromatyna może mieć różny stopień kondensacji.


## 16. STATUS LEKCJI

- Wersja 4.0 (2026-09-12) — pełny MASTER.
- Zachowano całą treść v3.7.
- Dodano: pełne rozwinięcia tematów (kod genetyczny, transkrypcja/translacja, prawa Mendla, rodowody, Hardy–Weinberg, mapowanie, mutacje, telomery, mtDNA, biotechnologia), ćwiczenia A/B/C/D, odpowiedzi, fiszki, drabinka, Klinika 2.0, „Jak się uczyć", połączenia, zadania z życia, słownik, checklista.

---

**Koniec L090 MASTER v4.0**


## 16.10. UZUPEŁNIENIE AUDYTOWE v4.2 — kontrola założeń przed liczeniem

### 16.10.1. Zasada
W zadaniu olimpijskim najpierw wypisz:
- **dane**,
- **założenia modelu**,
- **niewiadomą**,
- **regułę**, którą wolno zastosować.

Dopiero potem licz.

### 16.10.2. Przykład — Hardy–Weinberg
Jeżeli zadanie każe użyć modelu Hardy’ego–Weinberga, nie zakładaj automatycznie, że rzeczywista populacja spełnia wszystkie warunki. Sprawdź, czy zadanie **jawnie** lub przez kontekst przyjmuje model.

### 16.10.3. Przykład — mapowanie genów
Nie wystarczy policzyć procentów. Trzeba ustalić:
1. które klasy potomstwa są rodzicielskie,
2. które są rekombinantami,
3. jak obliczana jest częstość rekombinacji,
4. jakie ograniczenia ma interpretacja wyniku.

### 16.10.4. Przykład — rodowód
Nie rozpoznawaj sposobu dziedziczenia po jednym pokoleniu. Najpierw sprawdź:
- kto choruje,
- jaka jest płeć osób,
- czy występuje przekazanie ojciec → syn,
- czy zdrowi rodzice mają chore dziecko,
- czy wzór pasuje do jednego modelu lepiej niż do innych.

### 16.10.5. Reguła olimpijska
> **Najpierw model, potem obliczenia, na końcu wniosek.**

To chroni przed poprawnym rachunkiem wykonanym na błędnych założeniach.

<!-- ==================== END L090 ==================== -->


<!-- ==================== BEGIN WARSTWA_B_MASTER ==================== -->

---

## 25. AUDYT W16 — ewolucja, ekologia i synteza (2026-10-09)

**Zakres:** punktowa kontrola pojęć wysokiego ryzyka i czytelności schematów; nie jest to niezależna recenzja całego materiału.

### Co sprawdzać przy rozwiązywaniu zadań

- **Wniosek musi wynikać z danych.** Nazwij obserwację, wyjaśnij mechanizm i dopiero wtedy sformułuj wniosek. Samo podobieństwo nie wystarcza do rozstrzygnięcia pokrewieństwa, a brak jednego rodzaju skamieniałości nie obala całej teorii ewolucji.
- **Poziom osobnika a poziom populacji.** Dobór różnicuje sukces rozrodczy osobników, ale ewolucję opisuje się jako zmianę populacji na przestrzeni pokoleń. Mutacja nie pojawia się dlatego, że jest potrzebna; dobór nie działa świadomie.
- **Energia a materia.** Energia przepływa przez ekosystem i ulega rozproszeniu jako ciepło; materia jest ponownie wykorzystywana w obiegach. Strzałka w łańcuchu pokarmowym prowadzi od pokarmu do konsumenta.
- **Relacje ekologiczne.** Najpierw ustal skutek dla organizmu A i B, a potem nazwij relację. Nie wnioskuj wyłącznie z nazwy gatunku lub pojedynczej ilustracji.
- **Człowiek i środowisko.** Oddziel źródło wpływu, mechanizm, skutek i możliwe ograniczenie. Naturalny efekt cieplarniany jest konieczny dla obecnego klimatu Ziemi; problemem jest jego dodatkowe nasilenie przez działalność człowieka.
- **Warstwa olimpijska.** Model Hardy’ego–Weinberga to model z założeniami (m.in. losowe kojarzenie, brak doboru, mutacji i migracji oraz bardzo duża populacja); nie traktuj go jako automatycznego opisu każdej populacji.

### Ograniczenie audytu

Wprowadzono doprecyzowania pojęciowe i opisy wizualne, lecz nie sprawdzono niezależnie każdego zadania, klucza odpowiedzi ani zgodności zakresu z aktualnym regulaminem konkursu. Liczby, przykłady lokalne i wymagania konkretnego etapu należy walidować osobno.
