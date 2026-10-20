---
kod: J10
tytul: Iloczyn rozpuszczalności Ksp
opis: iloczyn rozpuszczalności Ksp · rozpuszczalność molowa s · równowaga rozpuszczania · iloczyn stężeń jonów Q · warunek strącania osadu · roztwór nasycony · roztwór nienasycony · roztwór przesycony · efekt wspólnego jonu · Ksp a temperatura
uid: CHE.04.J10.iloczyn_rozpuszczalnosci_ksp
kicker: J10 · CHEMIA · Jony w roztworach · POZIOM ROZSZERZONY / KONKURS
lead: W J04 przewidywałeś osad jakościowo, korzystając z tabeli rozpuszczalności. Teraz liczysz ilościowo: ile soli rozpuści się w wodzie i kiedy po zmieszaniu roztworów osad naprawdę się pojawi. Narzędziem jest iloczyn rozpuszczalności Ksp.
plakietki: [[understand:ROZUMIENIE]][[extra:LO]]
uwaga: Lekcja należy do poziomu rozszerzonego. Ksp jest stałą równowagi rozpuszczania trudno rozpuszczalnej substancji w danej temperaturze. Wartości Ksp zależą od temperatury, dlatego w zadaniach należy korzystać z danych podanych w poleceniu. Porównanie Ksp różnych soli pozwala wnioskować o rozpuszczalności tylko dla soli o takiej samej stechiometrii dysocjacji.
stopka: CHEMIA J10 · Iloczyn rozpuszczalności Ksp · Materiał do samodzielnej nauki · 2026
stan: ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia
---


::: minimum | Muszę umieć — 10 punktów
1. Wyjaśniam, że Ksp to iloczyn rozpuszczalności — stała równowagi rozpuszczania trudno rozpuszczalnej soli.
2. Zapisuję równanie rozpuszczania soli typu AB: AB(s) ⇌ A⁺(aq) + B⁻(aq).
3. Zapisuję wyrażenie Ksp dla soli typu AB: Ksp = [A⁺]·[B⁻].
4. Zapisuję wyrażenie Ksp dla soli typu AB₂: Ksp = [A²⁺]·[B⁻]².
5. Rozumiem, że stała Ksp nie zawiera stężenia osadu, ponieważ osad jest fazą stałą.
6. Definiuję rozpuszczalność molową s jako stężenie nasyconego roztworu soli, wyrażone w mol/dm³.
7. Dla soli typu AB obliczam s = √Ksp.
8. Dla soli typu AB₂ obliczam Ksp = 4s³, a następnie s = ∛(Ksp/4).
9. Porównuję iloczyn stężeń jonów Q z Ksp: osad powstaje, gdy Q > Ksp.
10. Wyjaśniam efekt wspólnego jonu: dodanie jonu obecnego już w równowadze rozpuszczania zmniejsza rozpuszczalność soli.
:::

::: warstwy
- understand | <b>Rozumienie:</b> Ksp jako stała równowagi, różnica między Q a Ksp, dlaczego osad nie znika całkowicie w wodzie oraz dlaczego wspólny jon zmniejsza rozpuszczalność.
- extra | <b>Poziom rozszerzony:</b> rozpuszczalność molowa dla soli typu AB i AB₂, warunek strącania, obliczenia z Ksp oraz efekt wspólnego jonu.
- contest | <b>Konkurs:</b> analiza stechiometrii, obliczenia odwrotne, porównywanie rozpuszczalności soli o różnych wzorach, projektowanie warunków strącania oraz granice prostych reguł.
- extra | <b>Ambitne:</b> wpływ temperatury na Ksp, porównywanie soli o różnych typach stechiometrycznych, związek Ksp z tabelą rozpuszczalności oraz zastosowania w analizie i oczyszczaniu.
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
- [§1](#wyklad) — Wykład od zera: równowaga między stałą solą a roztworem.
- [§2](#ksp) — Wyrażenie Ksp i rozpuszczalność molowa.
- [§3](#warunek) — Warunek strącania: Q i Ksp.
- [§4](#przyklady) — Przykłady prowadzone.
- [§5](#klinika) — Klinika błędów.
- [§6](#cwiczenia) — Ćwiczenia z kluczem.
- [§7](#slownik) — Słownik.
- [§8](#test) — Test końcowy.
- [§9](#checklista) — Checklista.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

Po tej lekcji potrafisz:

- zapisać wyrażenie Ksp dla danej soli;
- obliczyć rozpuszczalność molową z Ksp;
- ocenić, czy po zmieszaniu roztworów powstanie osad;
- wyjaśnić efekt wspólnego jonu;
- odróżnić Ksp od tabeli rozpuszczalności.

Kolejność pracy:

1. Zacznij od diagnozy w [§0.4](#diagnoza). Odpowiedz samodzielnie, a dopiero potem sprawdź klucz.
2. Przeczytaj wykład w [§1](#wyklad). Pokazuje, że trudno rozpuszczalna sól nie znika całkowicie w wodzie, lecz ustala równowagę.
3. W [§2](#ksp) zapisz wyrażenia Ksp dla soli typu AB, AB₂ i A₂B. Wykładniki wynikają ze stechiometrii, nie z wartości ładunków.
4. W [§3](#warunek) opanuj porównanie Q z Ksp. To najważniejsze narzędzie przewidywania strącania.
5. Przykłady w [§4](#przyklady) licz samodzielnie, zanim sprawdzisz klucz.
6. Test i ćwiczenia rozwiązuj bez zaglądania do treści. Błędne odpowiedzi wskażą zagadnienie do powtórki.

Przydatne wcześniej: strącanie osadów i tabela rozpuszczalności z J04, równowaga dynamiczna z J06, stała równowagi z K09.

## 0.2 | Cele i pytanie przewodnie {#cele}

Pytanie przewodnie: **Jak liczbowo przewidzieć, czy osad się strąci, czy rozpuści?**

Po tej lekcji potrafisz:

- zapisać wyrażenie Ksp;
- obliczyć rozpuszczalność molową;
- sprawdzić warunek strącania;
- wyjaśnić efekt wspólnego jonu;
- porównać rozpuszczalność soli o tym samym typie stechiometrycznym.

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- **Strącanie osadów i tabela rozpuszczalności** — J04.
- **Równowaga dynamiczna** — J06.
- **Stała równowagi** — K09; tutaj stosujemy ją do rozpuszczania.
- **Równania jonowe** — J03.
- **Obliczenia stechiometryczne** — CHE-R07.

## 0.4 | Diagnoza startowa {#diagnoza}

Odpowiedz najpierw samodzielnie.

1. Co to jest Ksp?
2. Zapisz wyrażenie Ksp dla AgCl.
3. Jak z Ksp obliczyć s dla soli typu AB?
4. Kiedy strąca się osad?
5. Co to jest efekt wspólnego jonu?

::: odp | Klucz diagnozy i interpretacja
1. (1 pkt) Ksp to iloczyn rozpuszczalności — stała równowagi rozpuszczania trudno rozpuszczalnej soli.

2. (1 pkt) Ksp(AgCl) = [Ag⁺]·[Cl⁻].

3. (1 pkt) s = √Ksp.

4. (1 pkt) Osad strąca się, gdy iloczyn stężeń jonów Q jest większy od Ksp.

5. (1 pkt) Efekt wspólnego jonu to zmniejszenie rozpuszczalności soli po dodaniu jonu, który już występuje w jej równowadze rozpuszczania.

Interpretacja wyniku: 5 pkt — przejdź do przykładów; 3–4 pkt — przeczytaj punkty 1–4; 0–2 pkt — zacznij od rdzenia.
:::

## 1 | Wykład — równowaga między stałą solą a roztworem {#wyklad} [[understand:ROZUMIENIE]]

Co to znaczy, że substancja jest trudno rozpuszczalna? Nie oznacza to, że znika całkowicie w wodzie. Nawet nad osadem AgCl w roztworze znajdują się niewielkie ilości jonów Ag⁺ i Cl⁻.

Gdy umieścisz kryształ AgCl w wodzie, część jonów przechodzi do roztworu:

AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)

Jony z roztworu mogą też wracać do powierzchni kryształu i budować ponownie stałą fazę. Po pewnym czasie ustala się równowaga dynamiczna: szybkość rozpuszczania jest równa szybkości krystalizacji.

W stanie równowagi stężenia jonów są stałe, choć bardzo małe. Dla tej równowagi zapisujemy iloczyn rozpuszczalności:

Ksp(AgCl) = [Ag⁺]·[Cl⁻]

Ksp jest liczbą charakterystyczną dla danej substancji w danej temperaturze. Mała wartość Ksp oznacza, że w roztworze pozostaje bardzo mało jonów, czyli substancja jest trudno rozpuszczalna.

Nie wpisujemy do wyrażenia Ksp stężenia AgCl(s). Osad jest fazą stałą, a jego „stężenie” nie zmienia ilościowego opisu równowagi w taki sposób jak stężenia jonów w roztworze.

Rozpuszczalność molowa s to stężenie nasyconego roztworu soli, wyrażone w mol/dm³. Dla AgCl jeden mol rozpuszczonej soli daje jeden mol Ag⁺ i jeden mol Cl⁻. Dlatego:

[Ag⁺] = s

[Cl⁻] = s

Ksp = s·s = s²

s = √Ksp

Jeżeli Ksp(AgCl) = 1,8·10⁻¹⁰, to:

s = √(1,8·10⁻¹⁰)

s ≈ 1,34·10⁻⁵ mol/dm³

Oznacza to, że w litrze nasyconego roztworu znajduje się około 1,34·10⁻⁵ mola rozpuszczonego AgCl.

Ksp jest ilościową wersją informacji z tabeli rozpuszczalności. Tabela mówi zwykle „rozpuszczalna” albo „nierozpuszczalna”. Ksp podaje liczbę, dzięki której można obliczyć dokładną rozpuszczalność i przewidzieć strącanie.

::: karta understand | W skrócie — po co Ksp?
Ksp odpowiada na dwa pytania: ile soli rozpuści się w wodzie oraz czy po zmieszaniu roztworów powstanie osad. Mała wartość Ksp oznacza małą rozpuszczalność.
:::

::: karta understand | W skrócie — po co potęgi?
Wykładniki w wyrażeniu Ksp wynikają z liczby jonów danego rodzaju powstających z jednej jednostki wzoru soli. Dla AB₂ powstają dwa jony B⁻, dlatego stężenie B⁻ występuje w kwadracie.
:::

::: karta core | W skrócie — strącanie ilościowo
Osad powstaje, gdy iloczyn stężeń jonów Q przekroczy Ksp. Rozpuszczalność molową oblicza się z Ksp, a wspólny jon ją zmniejsza.
:::

::: karta warning | Uwaga — „nierozpuszczalny” nie znaczy „zero jonów”
Nawet nad osadem AgCl istnieją w roztworze niewielkie ilości Ag⁺ i Cl⁻. Określenie „nierozpuszczalny” jest szkolnym uproszczeniem oznaczającym bardzo małą rozpuszczalność.
:::

## 2 | Wyrażenie Ksp i rozpuszczalność molowa {#ksp} [[understand:ROZUMIENIE]]

Dla soli o wzorze ogólnym:

AₘBₙ(s) ⇌ mAᵖ⁺(aq) + nBq⁻(aq)

iloczyn rozpuszczalności zapisuje się jako:

Ksp = [Aᵖ⁺]ᵐ·[Bq⁻]ⁿ

Wykładniki pochodzą ze stechiometrii równania rozpuszczania, czyli z indeksów we wzorze soli.

| Typ soli | Równowaga | Wyrażenie Ksp | Związek z s |
|---|---|---|---|
| AB | AB(s) ⇌ A⁺ + B⁻ | Ksp = [A⁺]·[B⁻] | Ksp = s², s = √Ksp |
| AB₂ | AB₂(s) ⇌ A²⁺ + 2B⁻ | Ksp = [A²⁺]·[B⁻]² | Ksp = 4s³, s = ∛(Ksp/4) |
| A₂B | A₂B(s) ⇌ 2A⁺ + B²⁻ | Ksp = [A⁺]²·[B²⁻] | Ksp = 4s³, s = ∛(Ksp/4) |
| AB₃ | AB₃(s) ⇌ A³⁺ + 3B⁻ | Ksp = [A³⁺]·[B⁻]³ | Ksp = 27s⁴, s = ∜(Ksp/27) |

Przykłady zapisu:

AgCl(s) ⇌ Ag⁺ + Cl⁻

Ksp = [Ag⁺]·[Cl⁻]

BaSO₄(s) ⇌ Ba²⁺ + SO₄²⁻

Ksp = [Ba²⁺]·[SO₄²⁻]

CaF₂(s) ⇌ Ca²⁺ + 2F⁻

Ksp = [Ca²⁺]·[F⁻]²

Ag₂CrO₄(s) ⇌ 2Ag⁺ + CrO₄²⁻

Ksp = [Ag⁺]²·[CrO₄²⁻]

Dla soli typu AB₂ rozpuszczalność molowa s oznacza stężenie rozpuszczonej soli. Z jednej jednostki wzoru AB₂ powstaje jeden jon A²⁺ i dwa jony B⁻:

[A²⁺] = s

[B⁻] = 2s

Wtedy:

Ksp = s·(2s)²

Ksp = s·4s²

Ksp = 4s³

Stąd:

s = ∛(Ksp/4)

Ważne: nie myl ładunku jonu z liczbą jonów. W CaF₂ wapń ma ładunek +2, ale z jednej jednostki wzoru powstaje jeden jon Ca²⁺. Fluor ma ładunek −1, ale powstają dwa jony F⁻. Dlatego wykładnik 2 dotyczy F⁻, a nie ładunku wapnia.

::: karta understand | W skrócie — skąd bierze się 4s³?
Dla AB₂ każdy mol rozpuszczonej soli daje 1 mol A²⁺ i 2 mole B⁻. Jeżeli rozpuszczalność molowa wynosi s, to [A²⁺] = s, a [B⁻] = 2s. Wtedy Ksp = s·(2s)² = 4s³.
:::

::: nie-myl | Ksp, s i ładunek jonu
- Ksp ≠ s — Ksp jest stałą równowagi, a s rozpuszczalnością molową; test rozstrzygający: Ksp ma jednostkę wynikającą z iloczynu stężeń, a s jest stężeniem nasyconego roztworu.
- Indeks we wzorze ≠ ładunek jonu — CaF₂ zawiera dwa jony F⁻, choć wapń ma ładunek +2; test rozstrzygający: policz jony powstające z jednej jednostki wzoru.
- Ksp ≠ Q — Ksp opisuje równowagę, Q iloczyn stężeń w dowolnym momencie; test rozstrzygający: porównaj aktualne stężenia jonów z wartością Ksp.
:::

::: karta warning | Uwaga — wykładniki wynikają ze stechiometrii
Dla Mg(OH)₂ równanie rozpuszczania wygląda tak:

Mg(OH)₂(s) ⇌ Mg²⁺ + 2OH⁻

Dlatego:

Ksp = [Mg²⁺]·[OH⁻]²

Wykładnik 2 przy OH⁻ wynika z indeksu 2 we wzorze, a nie z ładunku jonu magnezu.
:::

## 3 | Warunek strącania — Q i Ksp {#warunek} [[understand:ROZUMIENIE]] [[extra:LO]]

Iloczyn stężeń jonów Q oblicza się tak samo jak Ksp, ale dla dowolnego momentu, niekoniecznie równowagi.

Dla AgCl:

Q = [Ag⁺]·[Cl⁻]

Porównanie Q z Ksp pozwala przewidzieć, co się wydarzy:

| Porównanie | Stan roztworu | Co się dzieje? |
|---|---|---|
| Q < Ksp | nienasycony | osad nie powstanie; sól może się dalej rozpuszczać |
| Q = Ksp | nasycony | układ jest w równowadze |
| Q > Ksp | przesycony | osad strąca się, aż Q spadnie do Ksp |

Przykład: jeżeli w roztworze [Ag⁺] = 0,01 mol/dm³ i [Cl⁻] = 0,01 mol/dm³, to:

Q = 0,01·0,01 = 1,0·10⁻⁴

Ponieważ Ksp(AgCl) = 1,8·10⁻¹⁰, mamy:

Q > Ksp

Osad AgCl strąca się.

Po strąceniu część jonów opuszcza roztwór. Iloczyn Q maleje, aż osiągnie wartość Ksp. Wtedy ustala się równowaga między osadem a roztworem.

**Efekt wspólnego jonu.** Jeżeli do nasyconego roztworu AgCl dodamy NaCl, zwiększymy stężenie Cl⁻. Wtedy:

Q = [Ag⁺]·[Cl⁻]

rośnie i przekracza Ksp. Równowaga przesuwa się w stronę osadu:

Ag⁺ + Cl⁻ → AgCl(s)

W efekcie rozpuszczalność AgCl maleje. Dodanie wspólnego jonu nie zmienia wartości Ksp w danej temperaturze, ale zmienia stężenia jonów w równowadze.

::: karta understand | W skrócie — Q czy Ksp?
Q opisuje aktualny stan roztworu. Ksp opisuje stan równowagi. Jeżeli Q > Ksp, powstaje osad. Jeżeli Q < Ksp, osad nie powstaje. Jeżeli Q = Ksp, roztwór jest nasycony.
:::

::: karta warning | Pułapka — Q = Ksp nie oznacza strącania
Osad pojawia się dopiero wtedy, gdy Q przekroczy Ksp. Przy Q równym Ksp roztwór jest dokładnie nasycony, a układ znajduje się w równowadze.
:::

::: karta exam | Zadanie 1 (3 pkt) — Czy strąci się AgCl?
Ksp(AgCl) = 1,8·10⁻¹⁰. Po zmieszaniu roztworów [Ag⁺] = 1,0·10⁻⁵ mol/dm³, a [Cl⁻] = 1,0·10⁻⁵ mol/dm³.

a) Zapisz wyrażenie na Q. (1 pkt)

b) Oblicz Q. (1 pkt)

c) Ustal, czy powstanie osad, i uzasadnij. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) Q = [Ag⁺]·[Cl⁻].

b) (1 pkt) Q = 1,0·10⁻⁵ · 1,0·10⁻⁵ = 1,0·10⁻¹⁰.

c) (1 pkt) Q < Ksp, ponieważ 1,0·10⁻¹⁰ < 1,8·10⁻¹⁰. Osad nie powstanie; roztwór jest nienasycony względem AgCl.
:::
:::

## 4 | Przykłady prowadzone {#przyklady} [[extra:LO]]

**Przykład 1 — rozpuszczalność AgCl.**

Ksp(AgCl) = 1,8·10⁻¹⁰.

AgCl jest solą typu AB, więc:

s = √Ksp

s = √(1,8·10⁻¹⁰)

s ≈ 1,34·10⁻⁵ mol/dm³

**Przykład 2 — strącanie AgCl.**

Po zmieszaniu roztworów otrzymano:

[Ag⁺] = 0,01 mol/dm³

[Cl⁻] = 0,01 mol/dm³

Q = 0,01·0,01 = 1,0·10⁻⁴

Ponieważ Q = 1,0·10⁻⁴ > Ksp = 1,8·10⁻¹⁰, osad AgCl strąca się.

**Przykład 3 — efekt wspólnego jonu.**

AgCl znajduje się w równowadze z roztworem zawierającym 0,1 mol/dm³ NaCl. Jon wspólny to Cl⁻.

Ksp = [Ag⁺]·[Cl⁻]

[Ag⁺] = Ksp/[Cl⁻]

[Ag⁺] = 1,8·10⁻¹⁰/0,1

[Ag⁺] = 1,8·10⁻⁹ mol/dm³

W czystej wodzie rozpuszczalność AgCl wynosi około 1,34·10⁻⁵ mol/dm³. W obecności 0,1 mol/dm³ Cl⁻ spada do około 1,8·10⁻⁹ mol/dm³. Efekt wspólnego jonu jest bardzo wyraźny.

**Przykład 4 — rozpuszczalność CaF₂.**

Ksp(CaF₂) = 3,2·10⁻¹¹.

CaF₂ jest solą typu AB₂:

CaF₂(s) ⇌ Ca²⁺ + 2F⁻

Ksp = 4s³

s = ∛(Ksp/4)

s = ∛(3,2·10⁻¹¹/4)

s = ∛(8,0·10⁻¹²)

s = 2,0·10⁻⁴ mol/dm³

::: karta warning | Pułapka — Q > Ksp nie oznacza strącania
Osad pojawia się dopiero, gdy Q przekroczy Ksp. Przy Q równym Ksp roztwór jest dokładnie nasycony.
:::

::: karta exam | Zadanie 2 (4 pkt) — Rozpuszczalność soli typu AB₂ | poziom ambitny
Ksp(CaF₂) = 3,2·10⁻¹¹.

a) Zapisz równanie rozpuszczania CaF₂. (1 pkt)

b) Zapisz wyrażenie Ksp. (1 pkt)

c) Zapisz zależność Ksp od rozpuszczalności molowej s. (1 pkt)

d) Oblicz s. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) CaF₂(s) ⇌ Ca²⁺ + 2F⁻.

b) (1 pkt) Ksp = [Ca²⁺]·[F⁻]².

c) (1 pkt) Ksp = s·(2s)² = 4s³.

d) (1 pkt) s = ∛(Ksp/4) = ∛(3,2·10⁻¹¹/4) = ∛(8,0·10⁻¹²) = 2,0·10⁻⁴ mol/dm³.
:::
:::

## 5 | Klinika błędów {#klinika} [[understand:ROZUMIENIE]]

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Ksp = s zawsze.” | Dla AB Ksp = s², dla AB₂ Ksp = 4s³. | Wzór zależy od liczby jonów powstających z jednej jednostki wzoru soli. |
| „Osad strąca się, gdy Q = Ksp.” | Osad strąca się, gdy Q > Ksp. | Równość Q i Ksp oznacza roztwór nasycony i stan równowagi. |
| „Pominę wykładniki w Ksp.” | Dla AB₂ Ksp = [A²⁺]·[B⁻]². | Wykładniki wynikają ze stechiometrii równania rozpuszczania. |
| „Wspólny jon zwiększa rozpuszczalność.” | Wspólny jon zmniejsza rozpuszczalność. | Dodanie jonu wspólnego przesuwa równowagę w stronę osadu. |
| „Ksp zależy od stężenia jonów.” | Ksp zależy od temperatury, a w równowadze iloczyn stężeń jest stały. | Zmiana stężeń powoduje strącanie lub rozpuszczanie, ale nie zmienia Ksp w danej temperaturze. |
| „Ksp można porównywać dla wszystkich soli.” | Bezpośrednie porównanie jest sensowne dla soli o tej samej stechiometrii. | Dla AB i AB₂ zależność między Ksp a s jest inna. |
| „Osad nie ma nic wspólnego z roztworem.” | Nad osadem ustala się równowaga z jonami w roztworze. | Trudno rozpuszczalna sól rozpuszcza się w bardzo małym stopniu. |
| „Q obliczam tylko w stanie równowagi.” | Q oblicza się dla dowolnego momentu. | Ksp jest wartością równowagową, a Q może być większe, mniejsze lub równe Ksp. |
| „Ładunek jonu jest wykładnikiem w Ksp.” | Wykładnik wynika z liczby jonów w równaniu rozpuszczania. | Dla CaF₂ wykładnik 2 dotyczy dwóch jonów F⁻, a nie ładunku Ca²⁺. |
| „Efekt wspólnego jonu zmienia Ksp.” | Efekt wspólnego jonu zmienia rozpuszczalność, nie Ksp. | Ksp pozostaje stałą równowagi w danej temperaturze. |
:::

::: mity
„Trudno rozpuszczalna sól w ogóle nie rozpuszcza się w wodzie.” || Rozpuszcza się w bardzo małym stopniu. Nad osadem istnieje równowaga z jonami w roztworze.

„Im większe Ksp, tym zawsze większa rozpuszczalność.” || Bezpośrednie porównanie jest poprawne tylko dla soli o tej samej stechiometrii. Dla AB i AB₂ zależność między Ksp a s różni się.

„Dodanie NaCl zawsze zwiększa rozpuszczalność AgCl.” || Dodanie Cl⁻, czyli wspólnego jonu, zmniejsza rozpuszczalność AgCl.

„Ksp zależy od ilości osadu w naczyniu.” || Ksp zależy od temperatury i rodzaju substancji. Ilość osadu wpływa na to, czy faza stała jest obecna, ale nie zmienia samej stałej.

„Q można obliczyć tylko dla roztworu nasyconego.” || Q oblicza się dla dowolnego układu, aby sprawdzić, czy osiągnął lub przekroczył warunek nasycenia.

„Osad zawsze strąca się natychmiast po przekroczeniu Ksp.” | W praktyce powstanie osadu może wymagać zarodkowania i zależy od warunków. | W szkolnych zadaniach zakłada się jednak, że po przekroczeniu Ksp osad się wydziela.
:::

## 6 | Ćwiczenia z kluczem {#cwiczenia} [[extra:LO]]

**Ćwiczenie 1.** Zapisz wyrażenia Ksp dla BaSO₄, CaF₂ i Ag₂CrO₄.

::: odp | Klucz
BaSO₄: Ksp = [Ba²⁺]·[SO₄²⁻].

CaF₂: Ksp = [Ca²⁺]·[F⁻]².

Ag₂CrO₄: Ksp = [Ag⁺]²·[CrO₄²⁻].
:::

**Ćwiczenie 2.** Oblicz s dla soli typu AB o Ksp = 4,0·10⁻⁸.

::: odp | Klucz
s = √Ksp = √(4,0·10⁻⁸) = 2,0·10⁻⁴ mol/dm³.
:::

**Ćwiczenie 3.** Czy strąci się AgCl, gdy [Ag⁺] = 1,0·10⁻⁵ mol/dm³ i [Cl⁻] = 1,0·10⁻⁵ mol/dm³? Ksp(AgCl) = 1,8·10⁻¹⁰.

::: odp | Klucz
Q = 1,0·10⁻⁵ · 1,0·10⁻⁵ = 1,0·10⁻¹⁰.

Q < Ksp, więc osad nie powstanie.
:::

**Ćwiczenie 4.** Dla soli typu AB₂ Ksp = 3,2·10⁻¹¹. Oblicz s.

::: odp | Klucz
s = ∛(Ksp/4) = ∛(3,2·10⁻¹¹/4) = ∛(8,0·10⁻¹²) = 2,0·10⁻⁴ mol/dm³.
:::

**Ćwiczenie 5 — mini-test samodzielny.** Odpowiedz bez zaglądania do lekcji: 1) Co to jest Ksp? 2) Zapisz Ksp dla AgCl. 3) Jak oblicza się s dla AB? 4) Kiedy osad strąca się? 5) Co robi efekt wspólnego jonu? Potem sprawdź odpowiedzi w diagnozie.

## 7 | Słownik {#slownik} [[understand:ROZUMIENIE]]

::: slownik
Iloczyn rozpuszczalności Ksp :: stała równowagi rozpuszczania trudno rozpuszczalnej soli.
Rozpuszczalność molowa s :: stężenie nasyconego roztworu soli, wyrażone w mol/dm³.
Równowaga rozpuszczania :: stan, w którym szybkość rozpuszczania jest równa szybkości krystalizacji.
Roztwór nasycony :: roztwór, w którym Q = Ksp.
Roztwór nienasycony :: roztwór, w którym Q < Ksp.
Roztwór przesycony :: roztwór, w którym Q > Ksp.
Iloczyn stężeń jonów Q :: iloczyn aktualnych stężeń jonów, obliczany tak samo jak Ksp.
Warunek strącania :: sytuacja, w której Q > Ksp i wydziela się osad.
Efekt wspólnego jonu :: zmniejszenie rozpuszczalności soli po dodaniu jonu obecnego w jej równowadze rozpuszczania.
Osad :: faza stała będąca w równowadze z jonami w roztworze.
Trudno rozpuszczalna sól :: sól o bardzo małej rozpuszczalności, opisywana przez Ksp.
Stała równowagi :: wielkość opisująca położenie równowagi w danej temperaturze.
Jon wspólny :: jon obecny zarówno w równowadze rozpuszczania soli, jak i w dodanym odczynniku.
Krzystalizacja :: proces tworzenia fazy stałej z jonów obecnych w roztworze.
Rozpuszczanie :: proces przechodzenia substancji ze stanu stałego do roztworu.
:::

## 8 | Test {#test} [[extra:LO]]

::: test
? Ksp dla soli Mg(OH)₂ dysocjującej według Mg(OH)₂ ⇌ Mg²⁺ + 2OH⁻ zapisujemy jako:
+ Ksp = [Mg²⁺]·[OH⁻]²
- Ksp = [Mg²⁺]·[OH⁻]
- Ksp = [Mg²⁺]²·[OH⁻]
- Ksp = [Mg(OH)₂]
! Wykładnik 2 przy OH⁻ wynika z liczby jonów hydroksylowych powstających z jednej jednostki wzoru.

? Osad strąca się, gdy:
+ Q > Ksp
- Q < Ksp
- Q = 0
- Ksp = 0
! Przesycenie roztworu prowadzi do wydzielania osadu.

? Efekt wspólnego jonu:
+ zmniejsza rozpuszczalność soli
- zwiększa rozpuszczalność soli
- nie zmienia rozpuszczalności soli
- zmienia wartość Ksp
! Dodanie wspólnego jonu przesuwa równowagę w stronę osadu.

? Dla soli typu AB rozpuszczalność molowa wynosi:
+ s = √Ksp
- s = Ksp
- s = Ksp²
- s = 2·Ksp
! Dla AB Ksp = s², więc s = √Ksp.

? Która sól typu AB ma najmniejszą rozpuszczalność?
+ sól o Ksp = 1,0·10⁻¹²
- sól o Ksp = 1,0·10⁻⁸
- sól o Ksp = 1,0·10⁻⁴
- rozpuszczalność zależy wyłącznie od temperatury
! Dla soli o tym samym typie stechiometrycznym mniejsze Ksp oznacza mniejszą rozpuszczalność molową.

? Które zdanie jest poprawne?
+ Ksp zależy od temperatury
- Ksp zależy od ilości osadu w naczyniu
- Ksp zależy od stężenia jonów w dowolnym momencie
- Ksp nie zależy od rodzaju substancji
! Ksp jest stałą równowagi charakterystyczną dla substancji w danej temperaturze.
? Co robi efekt wspólnego jonu w równowadze rozpuszczania?
+ zmniejsza rozpuszczalność soli
- zwiększa rozpuszczalność soli
- nie zmienia rozpuszczalności soli
- zmienia wartość Ksp
! Dodanie wspólnego jonu przesuwa równowagę w stronę osadu.

:::

## 7a | Fiszki {#fiszki}

::: fiszki
Co to Ksp? | iloczyn rozpuszczalności, stała równowagi rozpuszczania | basic:podstawa
Ksp dla AgCl? | [Ag⁺][Cl⁻] | basic:podstawa
Wzór na s dla AB? | s = √Ksp | extra:LO
Kiedy osad się strąca? | gdy Q > Ksp | understand:rozumienie
Co robi efekt wspólnego jonu? | zmniejsza rozpuszczalność | understand:rozumienie
:::

## 8a | Test — pytania uzupełniające {#test-uzupelnienie} [[extra:LO]]

::: test
? Ksp dla soli Mg(OH)₂ (Mg²⁺ i 2OH⁻) zapisujemy jako:
- [Mg²⁺][OH⁻]
+ [Mg²⁺][OH⁻]²
- [Mg²⁺]²[OH⁻]
- [Mg²⁺][OH⁻]/2
! Wykładnik 2 przy OH⁻ wynika z indeksu.

? Osad strąca się, gdy:
- Q < Ksp
+ Q > Ksp
- Q = 0
- Ksp = 0
! Przesycenie prowadzi do strącania.

? Efekt wspólnego jonu:
- zwiększa rozpuszczalność
+ zmniejsza rozpuszczalność
- nie zmienia rozpuszczalności
- zmienia Ksp
! Równowaga przesuwa się w stronę osadu.

? Dla AB rozpuszczalność molowa to:
- Ksp
+ √Ksp
- Ksp/2
- 2 · Ksp
! Z Ksp = s² wynika s = √Ksp.

? Która sól ma najmniejszą rozpuszczalność przy tym samym typie AB?
- sól o Ksp = 10⁻⁴
+ sól o Ksp = 10⁻¹²
- sól o Ksp = 10⁻⁶
- zależy tylko od temperatury
! Mniejsze Ksp oznacza mniejsze s.
:::

## 9 | Checklista {#checklista} [[understand:ROZUMIENIE]]

::: checklista
- [ ] umiem zapisać Ksp dla soli z indeksami
- [ ] umiem obliczyć s dla AB i AB₂
- [ ] umiem sprawdzić warunek strącania, porównując Q z Ksp
- [ ] umiem wyjaśnić efekt wspólnego jonu
- [ ] umiem odróżnić Ksp od tabeli rozpuszczalności
- [ ] umiem wyjaśnić, dlaczego osad nie znika całkowicie w wodzie
- [ ] umiem rozróżnić roztwór nasycony, nienasycony i przesycony
- [ ] umiem wskazać wpływ temperatury na Ksp
:::

### AUDYT — Perplexity, 2026-10-13 {#audyt-ulepsz}

**Poprawione:**
- Frontmatter: dodano uid, uzupełniono kicker, opis, plakietki i stopkę; zmieniono stan na „ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia”.
- Minimum: „Ksp = A·B” → pełny zapis Ksp = [A⁺]·[B⁻] dla AB.
- Minimum: „dla AB₂ Ksp = 4s” → poprawny zapis Ksp = 4s³.
- Minimum: „małe Ksp oznacza substancję trudno rozpuszczalną” → doprecyzowano porównanie tylko w obrębie soli o tej samej stechiometrii.
- Minimum: „Ksp zwykle rośnie z T” → doprecyzowano zależność od temperatury bez twierdzenia o zawsze rosnącej wartości.
- Wykład: „trudno rozpuszczalny osad nie znika całkowicie” → wyjaśniono równowagę rozpuszczania i krystalizacji.
- Wykład: „z tabeli wiesz tylko tak lub nie” → doprecyzowano różnicę między jakościową tabelą a ilościowym Ksp.
- §2: poprawiono zapis ogólny Ksp dla soli AₘBₙ i wyjaśniono pochodzenie wykładników.
- §2: rozdzielono ładunek jonu od liczby jonów powstających z jednostki wzoru.
- §3: „Q > Ksp oznacza strącanie” → dodano wyjaśnienie, że Q maleje do Ksp po wydzieleniu osadu.
- §4: poprawiono obliczenia i doprecyzowano jednostkę rozpuszczalności molowej.
- Test: „Ksp = MgOH” → poprawny zapis Ksp = [Mg²⁺]·[OH⁻]².
- Test: „s = Ksp” → poprawny zapis s = √Ksp dla AB.

**Dodane:**
- §0.1–§0.4: cel, kompas, diagnoza z kluczem i interpretacją wyniku.
- §1: pełny wykład od zera o równowadze między fazą stałą a roztworem.
- §2: tabela typów soli, zapis ogólny Ksp, przykłady AgCl, BaSO₄, CaF₂ i Ag₂CrO₄.
- §2: wyjaśnienie różnicy między indeksem, ładunkiem i wykładnikiem w Ksp.
- §3: porównanie Q z Ksp, tabela stanów roztworu oraz efekt wspólnego jonu.
- §4: cztery przykłady prowadzone z obliczeniami.
- §5: klinika 10 błędów i 6 mitów.
- §6: ćwiczenia z kluczem i mini-test samodzielny.
- §7: słownik 15 haseł.
- §8: test 6 pytań.
- §9: checklista.

**Niepewne / do weryfikacji:**
- Zakres konkretnego konkursu chemicznego nie został określony w paczce, dlatego wymagania konkursowe opisano ogólnie.
- Wartości Ksp zależą od temperatury; w zadaniach należy stosować dane podane przez autora polecenia.
- Porównywanie Ksp różnych soli wymaga uwzględnienia stechiometrii; w lekcji ograniczono to twierdzenie do soli o tym samym typie.

**Proponuję usunąć:**
- Brak.

**Źródła:**
- Dostarczona paczka: lekcja J10.
- Zintegrowana Platforma Edukacyjna — materiały o równowagach rozpuszczania i strącaniu osadów.

**Grafiki do zrobienia:**

| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |
|---|---|---|---|---|
| §1, po równaniu AgCl(s) ⇌ Ag⁺ + Cl⁻ | animacja „tam i z powrotem” | rozpuszczanie jonów z kryształu i ich powrót do fazy stałej | Trudno rozpuszczalna sól ustala równowagę z jonami w roztworze | Animacja pokazuje kryształ AgCl, z którego przechodzą pojedyncze jony Ag⁺ i Cl⁻, a następnie część z nich wraca do kryształu. Po ustaleniu równowagi obie szybkości są równe. |
| §2, po tabeli typów soli | schemat statyczny | zależność między wzorem soli, liczbą jonów i wyrażeniem Ksp | Wykładniki w Ksp wynikają ze stechiometrii | Trzy karty przedstawiają AB, AB₂ i A₂B. Przy każdej znajdują się równanie rozpuszczania, wyrażenie Ksp oraz związek z rozpuszczalnością molową s. |
| §3, po porównaniu Q z Ksp | model interaktywny z suwakiem | zmiana Q przy zwiększaniu stężenia jednego jonu | Osad powstaje dopiero po przekroczeniu Ksp | Suwak zmienia stężenie Cl⁻ przy stałym [Ag⁺]. Wyświetlane są Q, Ksp oraz stan: nienasycony, nasycony albo przesycony. Po przekroczeniu Ksp pojawia się osad. |
| §3, przy efekcie wspólnego jonu | animacja „tam i z powrotem” | dodanie NaCl do nasyconego roztworu AgCl i przesunięcie równowagi | Wspólny jon zmniejsza rozpuszczalność soli | Animacja pokazuje wzrost [Cl⁻] po dodaniu NaCl, wzrost Q powyżej Ksp i powstawanie dodatkowego AgCl. Równowaga przesuwa się w stronę fazy stałej. |

## 10 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego kamień w czajniku się odkłada?
Woda twarda zawiera jony wapnia i węglanowe. Po ogrzaniu część CO₂ ucieka, a węglan wapnia przekracza iloczyn rozpuszczalności i osadza się jako kamień. To warunek strącania w praktyce.
:::

::: karta extra | Mikroskopijne rozpuszczanie zębów
Szkliwo zębów zawiera fosforany wapnia o małym Ksp. Kwaśne napoje zwiększają rozpuszczanie, bo jony H⁺ wiążą część anionów fosforanowych i przesuwają równowagę.
:::

## 11 | Wykład — równowaga między stałą solą a roztworem {#wyklad}

::: karta understand | Wykład — od zera: co to znaczy „trudno rozpuszczalny”
Sól trudno rozpuszczalna nie znika całkowicie w wodzie. Część jej powierzchni rozpuszcza się, a jony z roztworu wracają do osadu. Ustala się równowaga, a stężenia jonów są bardzo małe. Ksp to iloczyn tych stężeń w stanie równowagi.

Dlatego Ksp jest tak użyteczne. Nie musisz pamiętać, ile soli się rozpuści w każdym przypadku. Wystarczy jedna wartość i prosty rachunek. Z tabeli z J04 wiesz tylko „tak” lub „nie”; z Ksp znasz liczbę.

**Mini-wykład: po co potęgi.** Wykładniki w Ksp wynikają z liczby jonów w jednostce wzoru. Dla AB₂ w roztworze są dwa aniony na jeden kation, więc iloczyn zawiera [B⁻]². To ta sama logika, którą znasz z równań.

**Mini-wykład: Q a Ksp.** Q to iloczyn stężeń, który mierzysz w danym momencie. Ksp to wartość w stanie równowagi. Porównanie obu pokazuje, czy układ będzie tworzył osad, czy się rozpuszczał.
:::

::: karta core | W skrócie — strącanie ilościowo
Osad powstaje, gdy iloczyn stężeń jonów Q przekroczy Ksp; rozpuszczalność molową liczymy z Ksp, a wspólny jon ją zmniejsza.
:::

## 12 | Checklista — umiem… {#checklista}

::: checklista
- [ ] zapisać Ksp dla soli z indeksami;
- [ ] obliczyć s dla AB i AB₂;
- [ ] sprawdzić warunek strącania, porównując Q z Ksp;
- [ ] wyjaśnić efekt wspólnego jonu;
- [ ] odróżnić Ksp od tabeli rozpuszczalności.
:::
