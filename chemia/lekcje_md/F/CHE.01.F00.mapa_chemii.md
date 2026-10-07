<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 502–738 -->
# CHEMIA: PODSTAWA PLUS — BLOK F FUNDAMENTY (v4.1)

**Wersja:** 5.0 · 2026-09-28
**Wersja bazowa zachowana:** 4.1 · 2026-09-27
**Zmiana:** przebudowa architektury na moduły F / N / R / J / O / B / X / E / K / A / P / LAB / REV
**Zasada:** stara numeracja L001–L013 zachowana jako aliasy. Nie kasujemy treści — przenosimy.
**Status implementacji:** F00–F09 = pełna treść MASTER + warstwa dydaktyczna/interakcyjna v5.0; HTML pozostaje warstwą wykonawczą.

---

# SPIS MODUŁÓW

| Kod | Nazwa | Plik źródłowy (stary) | Status |
|-----|-------|----------------------|--------|
| **F00** | Mapa chemii i architektura fundamentów | nowa warstwa MASTER | ✅ MASTER |
| **F01** | Materia i substancje | L001 (fragment) | ✅ MASTER |
| **F02** | Atom | L001 (fragment) | ✅ MASTER |
| F03 | Układ okresowy | L001 (fragment) | ✅ MASTER |
| F04 | Konfiguracja elektronowa | L013 (fragment) | ✅ MASTER |
| F05 | Wartościowość / ładunek / stopień utlenienia | L001 (fragment) | ✅ MASTER |
| F06 | Wzory chemiczne | L001 (fragment) | ✅ MASTER |
| F07 | Wiązania chemiczne | L001 (fragment) | ✅ MASTER |
| F08 | Geometria cząsteczek (VSEPR) | L013 (fragment) | ✅ MASTER |
| F09 | Równania reakcji | L001 (fragment) | ✅ MASTER |
| N01 | Tlenki | L002 | W trakcie |
| N02 | Wodorotlenki i zasady | L003 | **Treść pełna + MASTER; priorytet integracji** |
| N03 | Kwasy | L004 | **Treść pełna + MASTER; priorytet integracji** |
| N04 | Sole | L005 | **Treść pełna + MASTER; następny etap** |
| N05 | Wodorki | — | W trakcie |
| N06 | Systematyka nieorganiczna | — | W trakcie |
| R01 | Woda i roztwory | L008 (fragment) | W trakcie |
| R02 | Rozpuszczalność | L008 (fragment) | W trakcie |
| R03 | Stężenie procentowe | L008 (fragment) | W trakcie |
| R04 | Stężenie molowe | L008 (fragment) | W trakcie |
| R05 | Mol i masa molowa | L009 (fragment) | W trakcie |
| R06 | Stechiometria | L009 (fragment) | W trakcie |
| R07 | Reagent ograniczający | L009 (fragment) | W trakcie |
| R08 | Wydajność reakcji | L009 (fragment) | W trakcie |
| J01 | Dysocjacja | L004 (fragment) | W trakcie |
| J02 | pH i odczyn | L004 (fragment) | W trakcie |
| J03 | Reakcje jonowe | L005 (fragment) | W trakcie |
| J04 | Strącanie | L005 (fragment) | W trakcie |
| J05 | Amfoteryczność | L002/L003 (fragment) | W trakcie |
| J06 | Równowagi kwasowo-zasadowe | L013 (fragment) | W trakcie |
| O01–O19 | Organika i biochemia | L006, L007 | W trakcie |
| X01–X10 | Redoks i rozszerzenia | L010, L013 | W trakcie |
| E01–E06 | Elektrochemia | L010, L013 | W trakcie |
| K01–K11 | Kinetyka, termochemia, równowaga | L013 | W trakcie |
| A01–A08 | Jądro i radioaktywność | — | W trakcie |
| P01–P06 | Systematyka pierwiastków | — | W trakcie |
| LAB00–LAB10 | Laboratorium | L011 | W trakcie |
| REV00–REV10 | Powtórki | L012 | W trakcie |

---


---

# F00 — MAPA CHEMII I INSTRUKCJA BLOKU FUNDAMENTÓW

**Wersja:** 4.2 · 2026-09-28  
**Poziom:** E7/E8 → LO podstawowe → LO rozszerzone → pomost akademicki  
**Rola:** moduł nadrzędny dla F01–F09

## 1. PO CO ISTNIEJE BLOK F

Blok F nie jest zbiorem dziewięciu niezależnych lekcji. Jest jednym łańcuchem rozumowania:

```text
MATERIA
  ↓
ATOM
  ↓
UKŁAD OKRESOWY
  ↓
ELEKTRONY
  ↓
JON / ŁADUNEK / STOPIEŃ UTLENIENIA
  ↓
WZÓR CHEMICZNY
  ↓
WIĄZANIE
  ↓
STRUKTURA LEWISA
  ↓
GEOMETRIA VSEPR
  ↓
RÓWNANIE REAKCJI
  ↓
STECHIOMETRIA
```

Uczeń nie powinien zapamiętywać tych elementów jako osobnych tabel. Każdy kolejny moduł ma wykorzystywać wynik poprzedniego.

## 2. KOLEJNOŚĆ KANONICZNA

| Moduł | Temat | Główne pytanie |
|---|---|---|
| F01 | Materia i substancje | Co właściwie badamy? |
| F02 | Atom | Z czego zbudowana jest substancja? |
| F03 | Układ okresowy | Co położenie pierwiastka mówi o jego zachowaniu? |
| F04 | Konfiguracja elektronowa | Gdzie znajdują się elektrony i jak są rozmieszczone? |
| F05 | Wartościowość / ładunek / stopień utlenienia | Jak opisywać elektrony i ładunek w chemii? |
| F06 | Wzory chemiczne | Jak przejść od składu i jonów do poprawnego wzoru? |
| F07 | Wiązania chemiczne | Dlaczego atomy tworzą określone połączenia? |
| F08 | Geometria cząsteczek | Jaki kształt ma struktura przestrzenna? |
| F09 | Równania reakcji | Jak zapisać zmianę chemiczną i przygotować ją do obliczeń? |

## 3. CZTERY WARSTWY KURSU

### E7/E8 — RDZEŃ KURSU

To jest punkt wejścia całego MASTER-a. Uczeń ma dostać model wystarczający do dalszej nauki, ale bez udawania, że uproszczenie jest pełnym opisem naukowym.

### LO — ZAKRES PODSTAWOWY

Rozwija i porządkuje model E7/E8 oraz wprowadza formalizm potrzebny do chemii licealnej.

### LO — ZAKRES ROZSZERZONY

Rozszerza model, zwiększa liczbę przypadków i wymaga bardziej formalnego uzasadniania.

### POMOST AKADEMICKI

Pokazuje, co znajduje się za szkolnym modelem, jakie są jego ograniczenia i jakie pojęcia stosuje się w chemii akademickiej. Nie zamienia się automatycznie w listę rzeczy do zapamiętania przez ucznia E7/E8.

Uczeń widzi ograniczenia modeli:
- orbital nie jest klasyczną orbitą elektronu,
- kolejność Aufbau jest modelem porządku energetycznego, a nie uniwersalnym „zegarem” wszystkich układów,
- konfiguracje jonów metali przejściowych wymagają poprawnej kolejności usuwania elektronów,
- hybrydyzacja jest modelem opisu wiązań, a nie literalnym obrazem „przestawienia” orbitali,
- VSEPR przewiduje geometrię jakościowo i półilościowo, ale nie zastępuje pełnego opisu kwantowochemicznego,
- wzór sumaryczny nie zawiera całej informacji strukturalnej.

## 4. WSPÓLNE ZASADY EDYCJI

Każdy moduł F powinien zachować:

1. cel lekcji,
2. pytanie przewodnie,
3. mapę pojęć,
4. diagnozę startową,
5. rdzeń merytoryczny,
6. doświadczenie lub model,
7. klinikę błędów,
8. ćwiczenia,
9. odpowiedzi,
10. fiszki,
11. test,
12. checklistę,
13. system powtórek,
14. mapę myśli,
15. słownik,
16. warstwę ambitną,
17. warstwę zaawansowaną,
18. jednostronicową ściągę,
19. status i następny krok.

## 5. WSPÓLNY PRZEPŁYW DANYCH

HTML może wykorzystywać wspólny silnik:

```text
F02 element
   ↓
F03 dane układu okresowego
   ↓
F04 konfiguracja elektronowa
   ↓
F05 jon / stopień utlenienia
   ↓
F06 parser wzoru
   ↓
F07 Lewis / rodzaj wiązania
   ↓
F08 VSEPR / kąt / model 3D
   ↓
F09 równanie
   ↓
R05–R08 obliczenia
```

Nie należy tworzyć osobnych, sprzecznych baz dla każdego modułu.

## 6. WAŻNE ROZRÓŻNIENIA

### Wartościowość ≠ stopień utlenienia

Wartościowość opisuje liczbę wiązań / zdolność łączenia się w określonym modelu szkolnym. Stopień utlenienia jest formalnym przypisaniem ładunków elektronowych według przyjętych reguł.

### Wzór sumaryczny ≠ wzór strukturalny

`C2H6O` nie mówi jednoznacznie, czy chodzi o etanol, czy eter dimetylowy. Wzór strukturalny zawiera dodatkową informację o połączeniu atomów.

### Schemat 2D ≠ geometria 3D

Kreski w szkolnym wzorze strukturalnym nie powinny być automatycznie traktowane jako rzeczywiste kąty przestrzenne.

### 4s przed 3d ≠ 4s usuwane po 3d

Dla typowych konfiguracji przejściowych:
- zapełnianie: 4s przed 3d (w atomach K, Ca — 4s ma niższą energię),
- jonizacja kationów: elektrony 4s usuwa się przed 3d.

**Uwaga zaawansowana:** W atomach od Sc do Zn rzeczywista energia orbitalu 3d jest **niższa** niż 4s. Kolejność zapełniania 4s → 3d wynika z faktu, że elektrony najpierw obsadzają orbital 4s, ponieważ układ z elektronem na 4s ma niższą energię całkowitą (uwzględniając odpychanie elektron-elektron) niż układ z elektronem na 3d . Reguła „4s przed 3d” jest więc narzędziem porządkowym, a nie literalnym opisem energii orbitali dla wszystkich atomów.

### Nie każdy elektron d automatycznie tworzy wiązanie

W przypadku metali przejściowych podpowłoka `(n−1)d` może być chemicznie istotna, ale jej rola zależy od pierwiastka, jonu, związku i modelu.

## 7. MINIMALNY PRZEGLĄD PRZED PRZEJŚCIEM DO N

Po F09 uczeń powinien potrafić przejść:

```text
Ca²⁺ + 2OH⁻
      ↓
Ca(OH)₂
      ↓
związek jonowy
      ↓
Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O
      ↓
stosunek molowy 1 : 2 : 1 : 2
```

oraz:

```text
C → konfiguracja elektronowa → elektrony walencyjne
→ wiązania → struktura Lewisa → geometria
```

Jeżeli któryś z tych łańcuchów się urywa, należy wrócić do odpowiedniego modułu F zamiast dokładać kolejną porcję pamięciowego materiału.


## WARSTWA WYKŁADOWA MASTER 2.0 — F00

### 1. Po co istnieje blok F?

Blok F nie jest „wstępem do odhaczenia”. Jest mapą pojęć, na których później opierają się reakcje, stechiometria, redoks, elektrochemia i chemia organiczna.

Najważniejsza zasada nauki:

> **Nie uczymy się wzoru bez wiedzy, co opisuje, i nie uczymy się reguły bez wiedzy, kiedy wolno jej użyć.**

W praktyce uczeń powinien stopniowo przechodzić od:

`obserwacja → substancja → cząstka → struktura → właściwość → reakcja → równanie → obliczenie`.

### 2. Mapa zależności

- **F01 Materia i substancje** odpowiada na pytanie: *co właściwie opisujemy?*
- **F02 Atom**: *z czego zbudowana jest materia?*
- **F03 Układ okresowy**: *jak uporządkować pierwiastki i przewidywać ich zachowanie?*
- **F04 Konfiguracja elektronowa**: *jak rozmieszczenie elektronów pomaga wyjaśnić właściwości?*
- **F05 Wartościowość / ładunek / stopień utlenienia**: *jak liczbowo opisywać udział pierwiastka w związku i reakcji?*
- **F06 Wzory chemiczne**: *jak z informacji o składzie zbudować poprawny zapis?*
- **F07 Wiązania**: *dlaczego atomy łączą się właśnie w taki sposób?*
- **F08 Geometria**: *jak rozmieszczenie par elektronowych wpływa na kształt cząsteczki?*
- **F09 Równania reakcji**: *jak opisać przemianę tak, aby zachować materię i ładunek?*

### 3. Główny model rozumowania

Przy każdym nowym zagadnieniu warto zadać pięć pytań:

1. **Co widzę lub co podano?**
2. **Jaki model cząsteczkowy/atomowy to wyjaśnia?**
3. **Jaką regułę mogę zastosować i jakie ma ograniczenia?**
4. **Jaki zapis chemiczny odpowiada temu modelowi?**
5. **Jak sprawdzę, że wynik ma sens?**

### 4. Cztery poziomy poprawności

W chemii poprawna odpowiedź powinna być sprawdzana na kilku poziomach:

- **językowym** — poprawna nazwa i symbol;
- **strukturalnym** — poprawny wzór lub model cząstki;
- **ilościowym** — właściwe proporcje atomów, elektronów, ładunków lub moli;
- **chemicznym** — zgodność z właściwościami i warunkami reakcji.

### 5. Pułapka „reguła zawsze działa”

Reguły szkolne są modelami. Przykład: „metal tworzy kation, niemetal anion” jest dobrym pierwszym przybliżeniem dla wielu związków jonowych, ale nie jest definicją całej chemii wiązań. Podobnie „metal + kwas daje wodór” wymaga uwzględnienia aktywności metalu i warunków.

### 6. Minimalny standard po F00

Uczeń powinien umieć wyjaśnić, jak kolejne moduły łączą się w jeden łańcuch. Nie musi jeszcze rozwiązywać zadań z każdego działu. Ma natomiast rozumieć, **po co istnieje każdy fundament** i wiedzieć, gdzie szukać potrzebnej reguły.

### 7. Klinika błędu

Jeżeli uczeń zna wynik, ale nie potrafi powiedzieć, z którego modelu wynika, wiedza jest jeszcze proceduralna. Jeżeli potrafi podać regułę, ale nie rozpoznaje sytuacji, w której ją zastosować, potrzebuje zadań transferowych, a nie kolejnej listy definicji.



---

<!-- ŹRÓDŁO: kanon CHE.core.md, wspólne warstwy bloku F (w. 7894–8211, 10706–11443) -->

# DODATEK MASTER — INTEGRACJA F01–F09

## A. KANONICZNE MOSTY MIĘDZY MODUŁAMI

| Z | Do | Co ma zostać zachowane |
|---|---|---|
| F01 → F02 | substancja → atom | symbol pierwiastka, skład związku |
| F02 → F03 | atom → układ okresowy | Z, symbol, grupa, okres, blok |
| F03 → F04 | położenie → elektrony | blok, powłoka, podpowłoka |
| F04 → F05 | konfiguracja → jon | liczba elektronów, konfiguracja kationu/anionu |
| F05 → F06 | ładunek → wzór | bilans ładunku |
| F06 → F07 | wzór → wiązanie | typ związku, elektrony walencyjne, Lewis |
| F07 → F08 | Lewis → geometria | liczba domen, wolne pary |
| F08 → F09 | struktura → reakcja | poprawne wzory produktów i substratów |
| F09 → R05–R08 | reakcja → rachunek | współczynniki stechiometryczne |

## B. WSPÓLNE DANE PIERWIASTKA

Minimalny rekord danych powinien obejmować:

```text
Z
symbol
nazwa
masa atomowa / masa względna używana w danym module
grupa
okres
blok
konfiguracja elektronowa
konfiguracja skrócona
rozkład powłokowy
typowe jony
typowe stopnie utlenienia
informację o elektronach walencyjnych w odpowiednim modelu
elektroujemność, jeżeli jest potrzebna
```

Brak którejkolwiek z tych informacji nie powinien powodować tworzenia drugiej, niezależnej tabeli w kolejnym module.

## C. WSPÓLNY MODEL WZORU

Parser F06 powinien rozumieć co najmniej:

```text
H2O
Al2(SO4)3
Ca(OH)2
NH4NO3
CuSO4·5H2O
K4[Fe(CN)6]        # warstwa ambitna/zaawansowana
```

Model powinien umieć zwrócić:

```text
skład atomowy
liczbę atomów
masę molową
skład procentowy
część bezwodną
wodę krystalizacyjną
strukturę drzewa parsera
```

## D. WSPÓLNY MODEL RÓWNANIA

Równanie powinno być przechowywane jako:

```text
substraty[]
produkty[]
współczynniki[]
warunki[]
stany skupienia[]
ładunki[]
```

Dzięki temu to samo równanie może zasilać:
- bilansowanie,
- równanie jonowe,
- stechiometrię,
- informacje o typie reakcji,
- wizualizację,
- zadanie tekstowe.

## E. WSPÓLNA KLINIKA BŁĘDÓW

Każdy błąd powinien być klasyfikowany:

| Kod | Błąd |
|---|---|
| F01-01 | substancja czysta pomylona z mieszaniną |
| F02-01 | Z pomylone z A |
| F03-01 | grupa pomylona z okresem |
| F04-01 | powłoka pomylona z podpowłoką |
| F04-02 | kolejność 4s/3d użyta bez kontekstu |
| F05-01 | wartościowość utożsamiona ze stopniem utlenienia |
| F05-02 | zła konfiguracja kationu metalu przejściowego |
| F06-01 | zmiana indeksu zamiast współczynnika |
| F06-02 | brak nawiasu dla jonu wieloatomowego |
| F06-03 | błędny bilans ładunków |
| F07-01 | typ wiązania określony wyłącznie na podstawie jednego uproszczenia |
| F08-01 | liczba wiązań pomylona z liczbą domen |
| F08-02 | geometria elektronowa pomylona z geometrią cząsteczki |
| F09-01 | zmiana indeksów przy bilansowaniu |
| F09-02 | współczynnik pomylony z indeksem |
| F09-03 | brak kontroli atomów/ładunku |

## F. WYMAGANIA DLA HTML

Każdy moduł F w HTML powinien:
- działać samodzielnie,
- nie wymagać osobnych plików JS/CSS,
- zachować pełną treść MD,
- umożliwiać ukrywanie odpowiedzi,
- zapisywać postęp lokalnie,
- mieć responsywny układ tabel,
- umożliwiać przejście do poprzedniego i następnego F,
- korzystać ze wspólnego silnika danych,
- nie duplikować logiki parsera, konfiguracji ani wzorów.

## G. STATUS BLOKU F

| Moduł | Status MASTER | Status logiczny |
|---|---|---|
| F00 | GOTOWY | mapa i architektura |
| F01 | GOTOWY | fundament materii |
| F02 | GOTOWY | atom |
| F03 | GOTOWY | układ okresowy |
| F04 | GOTOWY | konfiguracja elektronowa |
| F05 | GOTOWY | jon / wartościowość / stopień utlenienia |
| F06 | GOTOWY | wzory chemiczne |
| F07 | GOTOWY | wiązania |
| F08 | GOTOWY | VSEPR / geometria |
| F09 | GOTOWY | równania reakcji |

**Uwaga redakcyjna:** „GOTOWY” oznacza kompletny moduł MASTER. Nie oznacza, że wszystkie przyszłe elementy HTML, wizualizacje i silniki obliczeniowe zostały już wdrożone w identycznym stopniu.

## H. CO POWSTAJE DALEJ

Po zamknięciu bloku F naturalnym ciągiem jest:

```text
N01 Tlenki
N02 Wodorotlenki i zasady
N03 Kwasy
N04 Sole
N05 Wodorki
N06 Systematyka nieorganiczna

R01 Woda i roztwory
R02 Rozpuszczalność
R03 Stężenie procentowe
R04 Stężenie molowe
R05 Mol i masa molowa
R06 Stechiometria
R07 Reagent ograniczający
R08 Wydajność

J01 Dysocjacja
J02 pH i odczyn
J03 Reakcje jonowe
J04 Strącanie
J05 Amfoteryczność
J06 Równowagi kwasowo-zasadowe
```

Blok F jest więc fundamentem, a nie końcową wersją całego kursu.

---


# BLOK F — WARSTWA LEKCJI MASTER v5.0
## Specyfikacja kompletnej lekcji dla HTML i Markdown

> Ten dokument jest źródłem treści. HTML ma być wykonaniem tej samej logiki, a nie osobnym podręcznikiem.
> Nie usuwa się treści źródłowej tylko dlatego, że można ją przedstawić interaktywnie.

### 0.1. Jak czytać ten plik

Każdy moduł F01–F09 ma trzy funkcje jednocześnie:

1. **lekcja** — prowadzi ucznia krok po kroku;
2. **podręcznik** — pozwala wrócić do dowolnego zagadnienia;
3. **specyfikacja dla HTML** — wskazuje, co ma zostać pokazane, ukryte, sprawdzone albo zwizualizowane.

Warstwy trudności nie są osobnymi kursami:

```text
PODSTAWA
   ↓
ROZSZERZENIE
   ↓
DLA AMBITNYCH
   ↓
ZAAWANSOWANY / MOST AKADEMICKI
```

Uczeń może wejść na dowolnym poziomie, ale HTML powinien jasno pokazywać, do czego dana sekcja służy.

### 0.2. Obowiązkowy rytm każdej lekcji

```text
START
 ↓
Orientacja
 ↓
Diagnoza „co już wiem?”
 ↓
Cel i pytanie przewodnie
 ↓
Model / przykład
 ↓
Reguła
 ↓
Próba ucznia
 ↓
Informacja zwrotna
 ↓
Klinika błędu
 ↓
Drugi przykład
 ↓
Zadanie transferowe
 ↓
Warstwa ambitna
 ↓
Test mistrzostwa
 ↓
Powtórka
 ↓
Most do następnego F
```

### 0.3. Zasada „najpierw decyzja, potem odpowiedź”

W ćwiczeniach interaktywnych uczeń powinien najpierw:

- sklasyfikować,
- przewidzieć,
- narysować,
- wybrać strategię,
- wykonać obliczenie,
- zapisać wzór lub równanie,

a dopiero potem otrzymać odpowiedź.

Nie pokazujemy rozwiązania od razu pod każdym zadaniem.

### 0.4. Stały format elementu dydaktycznego

Każdy ważny koncept powinien mieć, jeśli ma to sens:

```text
NAZWA
→ co to jest?
→ po czym rozpoznać?
→ jak zastosować?
→ przykład rozwiązany
→ przykład podobny do samodzielnego wykonania
→ typowy błąd
→ dlaczego ten błąd powstaje?
→ sprawdzenie
→ połączenie z innym F
```

### 0.5. Stałe typy kart

W HTML mogą zostać odwzorowane jako osobne karty:

- `CORE` — minimum konieczne;
- `REGUŁA` — reguła do zastosowania;
- `PRZYKŁAD` — przykład prowadzony;
- `PUŁAPKA` — typowy błąd;
- `HINT` — wskazówka ukryta;
- `ODPOWIEDŹ` — rozwiązanie ukryte;
- `EXTRA` — rozszerzenie;
- `MOST` — połączenie z innym modułem;
- `MODEL` — model / symulacja;
- `LAB` — doświadczenie lub doświadczenie modelowe;
- `CHECK` — szybkie sprawdzenie.

### 0.6. Minimalny kontrakt interakcji

Jeżeli HTML implementuje zadanie:

```text
wejście ucznia
→ walidacja
→ komunikat o błędzie
→ podpowiedź
→ ponowna próba
→ rozwiązanie
```

Komunikat nie powinien ograniczać się do „źle”. Powinien mówić **co sprawdzić**, bez zdradzania całej odpowiedzi.

### 0.7. Pamięć i wznowienie

Każdy moduł powinien mieć logiczne punkty wznowienia:

```text
Fxx.START
Fxx.DIAGNOZA
Fxx.RDZEN
Fxx.MODEL
Fxx.CWICZENIA
Fxx.EXTRA
Fxx.TEST
Fxx.POWTORKA
Fxx.KONIEC
```

HTML może zapamiętywać ostatni punkt, wynik testu i błędne zagadnienia. Markdown pozostaje źródłem definicji tych punktów.

---

# WSPÓLNY SYSTEM ZADAŃ F01–F09


### ZINTEGROWANE FRAGMENTY CHE.ALL — v12.0

> Materiał przeniesiony z warstwy migracyjnej do kanonicznej lekcji. Treść zachowana; usunięto wyłącznie powtórzenia wykazane w audycie.

#### Diagnoza startowa (5–8 min)

1. Z = ? A = ? w atomie.  
2. Jon Al³⁺: ile e⁻ przy Z=13?  
3. Wzór: tlenek glinu / chlorek wapnia.  
4. Bilans: H₂ + O₂ → H₂O (współczynniki).  
5. Co to wartościowość vs ładunek jonu (jednym zdaniem)?

**Interpretacja:** 4–5/5 → L001 szybko jako powtórka. 2–3 → L001 uważnie. 0–1 → L001 od zera + fiszki.

<!-- źródłowy fragment: ### Diagnoza startowa (5–8 min); dopasowanie: F09:2, F05:2, REV00:1, J09:1 -->

#### 80/20 września z L001

1. Atom: Z, A, p⁺, n⁰, e⁻; atom vs jon.  
2. Wartościowość (model szkolny „rąk”) ≠ ładunek ≠ indeks ≠ współczynnik.  
3. W–K–S–K + nawias przy grupie.  
4. Współczynniki tak, indeksy nie.  
5. Typy wiązań (orientacyjnie) + proste bilansowanie.

<!-- źródłowy fragment: ### 80/20 września z L001; dopasowanie: F09:2, F06:2, F05:1, F03:1 -->

#### Typy reakcji

| Typ | Schemat / przykład |
|-----|-------------------|
| Synteza | 2Mg + O₂ → 2MgO |
| Analiza (rozkład) | CaCO₃ → CaO + CO₂ |
| Wypieranie | Zn + CuSO₄ → ZnSO₄ + Cu; Zn + 2HCl → ZnCl₂ + H₂ |
| Podwójna wymiana | AgNO₃ + NaCl → AgCl↓ + NaNO₃  *(↓ = osad — trudno rozpuszczalna substancja stała)* |
| Spalanie | CH₄ + 2O₂ → CO₂ + 2H₂O |

**Bilansowanie:** indeksów nie zmieniamy — tylko współczynniki. Prawo zachowania masy: atomy nie znikają i nie powstają z niczego.

**Skrót do wzorów:** W–K–S–K (wartościowości → krzyżowanie → skracanie → kontrola).

**Mnemonic typów (opcjonalny):**  
**S A W P S** → „Synteza, Analiza, Wypieranie, Podwójna wymiana, Spalanie”.

<!-- źródłowy fragment: ### Typy reakcji; dopasowanie: F09:2, R02:1, O07:1, LAB20:1 -->

#### 6.5. KLINIKA BŁĘDÓW (realna sekcja z ćwiczeniami)

## 6.5. KLINIKA BŁĘDÓW (realna sekcja z ćwiczeniami)

**Zasada:** Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.

| Błędny zapis | Popraw | Reguła | Dlaczego |
|--------------|--------|--------|----------|
| CaOH₂ | Ca(OH)₂ | Nawias obejmuje całą grupę | Indeks 2 dotyczy całego OH, nie tylko H |
| FeO₃ | Fe₂O₃ | Krzyżowanie + kontrola | Fe(III), O(II) → 2·3 = 3·2. FeO₃ nie odpowiada poprawnemu, prostemu wzorowi tlenku żelaza(III) |
| H₂ + O₂ → H₂O₂ | 2H₂ + O₂ → 2H₂O | Nie zmieniaj indeksów | H₂O₂ to nadtlenek wodoru — inna substancja |
| Al + HCl → AlCl₃ + H₂ | 2Al + 6HCl → 2AlCl₃ + 3H₂ | Bilansuj współczynnikami | Liczba atomów musi się zgadzać |
| Na⁺ ma 11 elektronów | Na⁺ ma 10 elektronów | Kation oddał elektron | 11 − 1 = 10 |
| Cl ma 17 neutronów | Cl ma 18 neutronów (dla ³⁵Cl) | A − Z = n⁰ | 35 − 17 = 18 |
| „Tlenek żelaza” bez wartościowości | „Tlenek żelaza(III)” | Fe ma II/III | Nazwa musi precyzować wartościowość |
| „Wartościowość = numer grupy” | To zależy od grupy | Grupy 15–17 mają warianty | Np. S: II, IV, VI |
| „Jest O₂ → to spalanie” | Analizuj substraty i produkty | Spalanie to reakcja z O₂ + wydzielanie energii | Nie każda reakcja z O₂ to spalanie |
| Mg + O₂ → MgO | 2Mg + O₂ → 2MgO | Bilansuj | Po obu stronach musi być tyle samo atomów |
| „Wartościowość = ładunek jonu” | To pokrewne, ale różne pojęcia | Wartościowość = liczba wiązań; ładunek = nadmiar/niedobór e⁻ | Nie utożsamiaj |
| H₂O ma masę 18 g | H₂O ma masę cząsteczkową 18 u | u to jednostka masy atomowej, nie gram | 1 u ≈ 1,66·10⁻²⁴ g |

<!-- źródłowy fragment: ## 6.5. KLINIKA BŁĘDÓW (realna sekcja z ćwiczeniami); dopasowanie: F09:2, F06:2, F05:2, F02:2 -->

#### Mapa myśli: RÓWNANIE

```
RÓWNANIE
├── Substraty → Produkty (warunki nad strzałką, np. Δ, katalizator)
├── Prawo zachowania masy
├── Współczynniki (nie indeksy!)
├── Bilans: policz, porównaj, popraw, sprawdź
└── Typ: S A W P S
```

<!-- źródłowy fragment: ### Mapa myśli: RÓWNANIE; dopasowanie: F09:2, LAB01:1, K04:1, J09:1 -->

---
## Poziom 1 — ROZPOZNAJ

Uczeń rozpoznaje termin, symbol, wzór, model lub typ procesu.

## Poziom 2 — ZASTOSUJ

Uczeń wykonuje jedną operację:

- klasyfikuje,
- liczy,
- zapisuje,
- dobiera metodę,
- tworzy konfigurację.

## Poziom 3 — WYJAŚNIJ

Uczeń musi podać przyczynę, nie tylko wynik.

## Poziom 4 — POŁĄCZ

Zadanie wymaga minimum dwóch modułów:

```text
F03 + F04
F04 + F05
F05 + F06
F06 + F07
F07 + F08
F06 + F09
```

## Poziom 5 — ZAKWESTIONUJ

Uczeń dostaje zdanie, które brzmi wiarygodnie, ale jest nieprecyzyjne, i ma je poprawić.

Przykłady:

- „Każdy atom chce mieć oktet.”
- „4s zawsze ma niższą energię niż 3d.”
- „Wartościowość i stopień utlenienia to to samo.”
- „Wzór sumaryczny mówi, jak atomy są połączone.”
- „Jeżeli związek zawiera tlen, to jest tlenkiem.”
- „Kąt w rysunku 2D jest rzeczywistym kątem cząsteczki.”

---

# WSPÓLNA KLINIKA BŁĘDÓW F01–F09

Każdy błąd powinien mieć rekord:

```text
ID:
MODUŁ:
BŁĘDNA ODPOWIEDŹ:
CO ZWODZI:
REGUŁA:
POPRAWNA ODPOWIEDŹ:
KRÓTKIE UZASADNIENIE:
ZADANIE PODOBNE:
POWIĄZANY F:
```

### Minimalny zestaw rekordów

```text
F01-01  woda = mieszanina H + O
F01-02  filtracja soli z wody
F01-03  Fe + S = FeS

F02-01  jon Na⁺ ma 11 elektronów
F02-02  izotop = inny pierwiastek
F02-03  A = liczba neutronów

F03-01  okres = liczba elektronów walencyjnych
F03-02  grupa główna = reguła dla wszystkich grup
F03-03  trend promienia „rośnie w prawo”

F04-01  4s usuwa się po 3d
F04-02  p ma 2 orbitale
F04-03  Cr i Cu zapisuje się zawsze bez wyjątku

F05-01  ładunek jonu = stopień utlenienia
F05-02  wartościowość = stopień utlenienia
F05-03  ładunek całego jonu = stopień utlenienia atomu

F06-01  zmiana indeksu podczas bilansowania
F06-02  brak nawiasu w Ca(OH)₂
F06-03  nieuwzględnienie ładunku jonu wieloatomowego

F07-01  każde wiązanie polarne = cząsteczka polarna
F07-02  wiązanie jonowe jako „pojedyncza para wspólna”
F07-03  zła liczba elektronów Lewisa

F08-01  geometria elektronowa = zawsze kształt cząsteczki
F08-02  ignorowanie wolnych par
F08-03  kąt z rysunku 2D traktowany jako rzeczywisty

F09-01  zmiana indeksów
F09-02  bilans tylko jednego pierwiastka
F09-03  współczynnik pomylony z indeksem
```

---

# WSPÓLNY SYSTEM ODPOWIEDZI

## Tryb „jedna odpowiedź”

Po sprawdzeniu pojedynczego zadania:

```text
WYNIK
↓
Poprawnie / Niepoprawnie
↓
co było sprawdzane
↓
krótka wskazówka
```

## Tryb „pokaż rozwiązanie”

Dopiero po świadomym kliknięciu:

```text
DANE
STRATEGIA
KROK 1
KROK 2
KROK 3
WYNIK
DLACZEGO
```

## Tryb „pokaż wszystkie”

Dla nauczyciela / powtórki można ujawnić wszystkie odpowiedzi jednocześnie.

---

# WSPÓLNY TEST MISTRZOSTWA BLOKU F

Test końcowy nie powinien być zbiorem dziewięciu mini-testów. Ma sprawdzać cały łańcuch.

### Zadanie 1 — atom

Dany jest jon `Mg²⁺`.

Podaj:

- Z,
- liczbę protonów,
- liczbę elektronów,
- konfigurację powłokową.

### Zadanie 2 — układ okresowy

Na podstawie konfiguracji `2,8,2` wskaż:

- okres,
- grupę główną,
- liczbę elektronów walencyjnych,
- typowy jon.

### Zadanie 3 — wzór

Z jonów `Al³⁺` i `SO₄²⁻` zbuduj wzór obojętnego związku.

### Zadanie 4 — wiązanie

Wyjaśnij, jaki model wiązania opisuje NaCl i dlaczego.

### Zadanie 5 — Lewis + VSEPR

Dla `H₂O`:

- policz elektrony walencyjne,
- narysuj strukturę Lewisa,
- określ liczbę domen,
- podaj geometrię elektronową,
- podaj kształt cząsteczki,
- wyjaśnij, dlaczego kąt jest mniejszy niż 109,5°.

### Zadanie 6 — równanie

Zbilansuj:

```text
Al + O₂ → Al₂O₃
```

### Zadanie 7 — transfer

Wyjaśnij pełny łańcuch:

```text
położenie Al w układzie
→ elektrony walencyjne
→ Al³⁺
→ Al₂O₃
→ charakter wiązania
→ zapis równania otrzymywania
```

---

# SYSTEM MISTRZOSTWA

Nie stosować jednego wyniku procentowego jako jedynego kryterium.

Uczeń ma opanowane F, jeżeli potrafi:

```text
ROZPOZNAĆ
+
ZASTOSOWAĆ
+
WYJAŚNIĆ
+
POŁĄCZYĆ
```

Dodatkowo dla warstwy zaawansowanej:

```text
wskazać ograniczenie modelu
```

### Minimalne bramki

| Obszar | Kryterium |
|---|---|
| F01 | poprawna klasyfikacja i dobór metody rozdzielania |
| F02 | Z/A/p/n/e i jony |
| F03 | grupa/okres/trendy |
| F04 | konfiguracja i obsadzanie |
| F05 | rozróżnienie trzech pojęć |
| F06 | poprawny wzór i kontrola ładunku |
| F07 | model wiązania + Lewis |
| F08 | VSEPR + kąt + polarność |
| F09 | poprawne równanie i bilans |

---

# INTERLEAVING — POWTÓRKI PRZEKROJOWE

## Zestaw A

```text
1. Ile elektronów ma Na⁺?
2. Jaki okres ma Cl?
3. Zapisz konfigurację Na.
4. Jaki jon tworzy tlen?
5. Zapisz wzór tlenku glinu.
6. Jaki typ wiązania występuje w NaCl?
7. Jaki kształt ma H₂O?
8. Zbilansuj H₂ + O₂ → H₂O.
```

## Zestaw B

```text
1. Dlaczego Fe²⁺ nie zapisujemy jako „Fe z dwoma protonami mniej”?
2. Dlaczego promień atomowy rośnie w dół grupy?
3. Dlaczego 4s jest usuwane przed 3d przy jonizacji typowego kationu metalu przejściowego?
4. Dlaczego Al₂(SO₄)₃ ma indeks 3 przy grupie siarczanowej?
5. Dlaczego CO₂ jest liniowy?
6. Dlaczego zmiana indeksu podczas bilansowania zmienia substancję?
```

---

# SYSTEM POWTÓREK BLOKU F

### Po każdym F

```text
10 min — szybka ściąga
10 min — błędy
15 min — dwa zadania bez pomocy
```

### Po F03

Powtórka:

```text
F01 + F02 + F03
```

### Po F05

Powtórka:

```text
F02 + F03 + F04 + F05
```

### Po F07

Powtórka:

```text
F04 + F05 + F06 + F07
```

### Po F09

Pełny test przekrojowy:

```text
F01 → F02 → F03 → F04 → F05 → F06 → F07 → F08 → F09
```

---

# SPECYFIKACJA HTML DLA CAŁEGO BLOKU F

## Nagłówek

Powinien zawierać tylko najważniejsze sterowanie:

```text
[← wybór lekcji] [← poprzednia] [Fxx / tytuł] [następna →]
                                      [tryb]
```

## Spis treści

Domyślnie zwinięty.

Po otwarciu:

```text
START
DIAGNOZA
RDZEŃ
MODELE
ĆWICZENIA
KLINIKA
EXTRA
TEST
POWTÓRKA
```

## Odpowiedzi

Domyślnie ukryte.

Sterowanie:

```text
Pokaż podpowiedź
Pokaż odpowiedź
Pokaż wszystkie odpowiedzi
Ukryj wszystkie
```

## Dolna nawigacja

Domyślnie zwinięta.

Powinna zawierać tylko:

```text
← poprzednia
spis
następna →
zapisz miejsce
```

## Zakładka wznowienia

System zapisuje:

```text
moduł
sekcja
zadanie
wynik
ostatnia aktywność
```

## Telefon

Każdy element tabelaryczny powinien mieć:

- przewijanie poziome,
- minimalną szerokość tabeli,
- sticky nagłówek tam, gdzie to ma sens,
- alternatywną wersję kartową dla najważniejszych tabel.

Nie wolno zmniejszać tekstu do rozmiaru utrudniającego czytanie tylko po to, aby tabela zmieściła się na ekranie.

---

# STANDARD MODELI I ANIMACJI

## Animacja nie może być ozdobnikiem

Każda animacja ma odpowiedzieć na pytanie:

```text
CO SIĘ ZMIENIA?
DLACZEGO?
CO MAM ZAUWAŻYĆ?
```

## Sterowanie

Obok modelu:

```text
[Play/Pauza] [Krok ←] [Krok →] [Reset]
```

Jeżeli animacja ma więcej stanów:

```text
1 → 2 → 3 → 4
```

Uczeń może przejść krok po kroku.

## Model 3D

Dla F08 obowiązkowo:

```text
obrót
reset
zoom
widok przód
widok góra
widok 3D
kąt
wybór atomu
wybór trzech atomów
```

---

# DANE WSPÓLNE — JEDNO ŹRÓDŁO PRAWDY

HTML nie powinien posiadać oddzielnej tabeli pierwiastków dla każdego F.

Minimalny rekord pierwiastka:

```text
symbol
nazwa
Z
okres
grupa
blok
typ
elektrony walencyjne
konfiguracja pełna
konfiguracja skrócona
typowe ładunki
typowe stopnie utlenienia
typowe wartościowości
elektroujemność
promień — jeżeli dostępny
```

Minimalny rekord jonu:

```text
symbol
ładunek
liczba protonów
liczba elektronów
konfiguracja
nazwa
```

Minimalny rekord cząsteczki:

```text
wzór
nazwa
atom centralny
więzi
wolne pary
geometria elektronowa
geometria cząsteczki
kąty
polarność
źródło danych / status modelu
```

---

# STATUS JAKOŚCI — F00–F09

| Moduł | Treść | Ćwiczenia | Doświadczenie/model | Interakcje opisane | Mosty | Status |
|---|---|---|---|---|---|---|
| F00 | tak | mapa | — | architektura | F01–F09 | MASTER |
| F01 | tak | tak | tak | klasyfikator/rozdzielanie | F02/F05 | MASTER+ |
| F02 | tak | tak | model atomu | konstruktor atomu | F03/F04/F05 | MASTER+ |
| F03 | tak | tak | układ okresowy | porównywarka | F02/F04/F05/F07 | MASTER+ |
| F04 | tak | tak | orbital/konfiguracja | konfigurator | F05/F08 | MASTER+ |
| F05 | tak | tak | modele jonów | rozróżniacz pojęć | F06/X01 | MASTER+ |
| F06 | tak | tak | konstruktor wzoru | parser/balans ładunku | F07/R05 | MASTER+ |
| F07 | tak | tak | Lewis | konstruktor Lewisa | F08 | MASTER+ |
| F08 | tak | tak | 3D/VSEPR | atomy/kąty | F09/K/J | MASTER+ |
| F09 | tak | tak | reactor/balancer | bilansator | R05–R08/N | MASTER+ |

---

# WARUNEK „GOTOWE DO HTML”

Moduł uznajemy za gotowy do implementacji HTML, gdy posiada:

- pełny tekst,
- cele,
- diagnozę,
- przykłady prowadzone,
- zadania samodzielne,
- odpowiedzi,
- klinikę błędów,
- doświadczenie lub model,
- warstwę rozszerzoną,
- słownik,
- fiszki,
- test,
- checklistę,
- mapę myśli,
- powtórki,
- most do następnego modułu,
- specyfikację interakcji,
- dane potrzebne do wspólnego silnika.

**„Gotowe do HTML” nie oznacza jeszcze „HTML napisany”.**

---

# ZASADA REDAKCYJNA NA DALSZE MODUŁY

Dla N, R, J, O, X, E, K, A, P i LAB stosujemy ten sam standard.

Nie tworzymy:

```text
krótkiej notatki → osobnego HTML → osobnej bazy → osobnych odpowiedzi
```

Tworzymy:

```text
JEDEN MASTER MD
        ↓
wspólne dane
        ↓
wspólny silnik
        ↓
HTML
```

Dzięki temu zmiana definicji, wzoru, nazwy albo danych nie powoduje rozjechania się lekcji.

---

# KRYTERIUM KOŃCOWE BLOKU F

Po przejściu F01–F09 uczeń powinien umieć odpowiedzieć na pytanie:

> Jak przejść od obserwowanej substancji do poprawnego chemicznego opisu jej budowy, właściwości i przemiany?

Łańcuch:

```text
MATERIA
 ↓
SUBSTANCJA
 ↓
PIERWIASTEK
 ↓
ATOM
 ↓
UKŁAD OKRESOWY
 ↓
KONFIGURACJA ELEKTRONOWA
 ↓
JON / WARTOŚCIOWOŚĆ / STOPIEŃ UTLENIENIA
 ↓
WZÓR
 ↓
WIĄZANIE
 ↓
LEWIS
 ↓
VSEPR / 3D
 ↓
REAKCJA
 ↓
BILANS
 ↓
STECHIOMETRIA
```

Jeżeli uczeń potrafi przejść cały łańcuch na nowych przykładach, fundament został zbudowany.

---

# KONIEC WARSTWY MASTER v5.0

---

# PODSUMOWANIE MODUŁÓW F01–F09

| Moduł | Temat | Status |
|-------|-------|--------|
| F01 | Materia i substancje | ✅ |
| F02 | Atom | ✅ |
| F03 | Układ okresowy | ✅ |
| F04 | Konfiguracja elektronowa | ✅ |
| F05 | Wartościowość / ładunek / stopień utlenienia | ✅ |
| F06 | Wzory chemiczne | ✅ |
| F07 | Wiązania chemiczne | ✅ |
| F08 | Geometria cząsteczek (VSEPR) | ✅ |
| F09 | Równania reakcji | ✅ |

**Następne moduły do opracowania:**
- N01–N04 (tlenki, wodorotlenki, kwasy, sole),
- R01–R08 (roztwory, mol, stechiometria),
- J01–J06 (chemia jonowa),
- O01–O19 (organika, biochemia),
- X01–X10 (redoks),
- E01–E06 (elektrochemia),
- K01–K11 (kinetyka, termochemia, równowaga),
- A01–A08 (jądro, radioaktywność),
- P01–P06 (systematyka pierwiastków),
- LAB00–LAB10 (laboratorium),
- REV00–REV10 (powtórki).

**Koniec bloku F (Fundamenty) — MASTER v1.1**

---

# NOTA ŹRÓDŁOWA I REDAKCYJNA

Ten plik jest rozwinięciem dostarczonego szkieletu bloku F oraz materiałów MASTER kursu L001–L013. Zachowuje istniejącą organizację modułów i ich warstw dydaktycznych, a dodatkowo porządkuje zależności między modułami oraz wymagania dla wspólnych silników HTML.

Nie traktować pojedynczego uproszczenia szkolnego jako pełnego opisu chemii akademickiej. W miejscach, w których model szkolny i bardziej zaawansowany opis różnią się zakresem, należy pokazywać oba poziomy i wyraźnie zaznaczać, który model jest używany.

**Koniec CHEMIA: PODSTAWA PLUS — BLOK F FUNDAMENTY MASTER v4.1**


---
