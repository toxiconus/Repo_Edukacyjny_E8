---
kod: F04
uid: CHE.01.F04.atom
tytul: Atom
opis: Jądro i elektrony · proton, neutron, elektron · liczba atomowa Z i masowa A · zapis nuklidu · atom obojętny i jon · modele atomu
kicker: F04 · FUNDAMENTY · MASTER v1.0
lead: Pierwsza lekcja fazy B — „z czego to wynika?”. Schodzimy z poziomu substancji do atomu: z jakich cząstek się składa,
lead: która liczba definiuje pierwiastek i jak z zapisu nuklidu bez zgadywania policzyć protony, neutrony i elektrony — w atomie i w jonie.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA F04 v1.0 MASTER** · Atom · 2026
---
::: minimum | Muszę umieć na E8 — 12 punktów
1. Atom składa się z **jądra** (protony i neutrony) i **elektronów** wokół jądra.
2. **Proton** p⁺: ładunek +1, masa ok. 1 u; **neutron** n⁰: ładunek 0, masa ok. 1 u; **elektron** e⁻: ładunek −1, masa ok. 1/1836 u.
3. **Liczba atomowa Z** = liczba protonów. **Z definiuje pierwiastek**: inne Z — inny pierwiastek.
4. **Liczba masowa A** = liczba protonów + liczba neutronów.
5. **Liczba neutronów** n = A − Z.
6. **Atom obojętny** ma tyle elektronów, ile protonów: e = Z.
7. Zapis nuklidu **ᴬ_Z X**, np. ²³₁₁Na: 11 p⁺, 12 n⁰, 11 e⁻.
8. **Jon** powstaje przez **oddanie lub przyjęcie elektronów** — liczba protonów się nie zmienia.
9. **Kation** (+) oddał elektrony: Na⁺ ma 10 e⁻. **Anion** (−) przyjął elektrony: Cl⁻ ma 18 e⁻.
10. Ładunek jonu q = p − e, stąd **e = Z − q**: Al³⁺ → 13 − 3 = 10 e⁻; O²⁻ → 8 − (−2) = 10 e⁻.
11. Prawie cała masa atomu jest w jądrze, a jądro jest ok. 100 000 razy mniejsze od atomu — atom to głównie pusta przestrzeń.
12. **A ≠ masa atomowa** z układu okresowego: A jest liczbą całkowitą dla jednego nuklidu, masa atomowa — średnią (szczegóły: [F05](#mosty)).
:::

::: warstwy
- e8 | <b>E8:</b> budowa atomu; p⁺, n⁰, e⁻; Z i A; zapis nuklidu; liczenie p, n, e w atomie i jonie; kation i anion
- understand | <b>Rozumienie:</b> co zmienia Z, n, e (pierwiastek, izotop, jon); skala atomu; dlaczego reakcje chemiczne nie zmieniają jądra
- extra | <b>Ambitne (LO):</b> historia modeli atomu i doświadczenie Rutherforda; jednostka u; nuklid i izobary; ograniczenia modelu planetarnego
- contest | <b>Ponad LO:</b> rozwijane bloki „poziom akademicki” — przycisk w nagłówku lekcji
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to (ok. 30 min)
1. **[§0.4](#diagnoza)** — diagnoza: odpowiedz, zanim zaczniesz czytać.
2. **[§1](#czastki)–[§3](#nuklid)** — cząstki atomu, liczby Z i A, zapis nuklidu.
3. **[§4](#jony)** — atom obojętny i jon: procedura liczenia elektronów.
4. **[§8](#klinika)** — klinika błędów, potem **[§9](#cwiczenia)** ćwiczenia A i B.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

::: karta understand
- **Mów na głos:** „Z to liczba protonów”, „neutrony to A minus Z”, „kation oddał, anion przyjął”.
- **Zawsze sprawdzaj znak:** jeśli liczba elektronów nie pasuje do znaku ładunku, wróć do wzoru e = Z − q — nie poprawiaj „na oko”.
- **Rysuj** jądro i elektrony, nawet schematycznie.
- **Zasada 80/20:** Z, A, n = A − Z, e = Z − q, kation/anion.
:::

## 0.2 | Cele lekcji i pytanie przewodnie [[basic:E8]] {#cele}

::: karta basic | Po tej lekcji potrafisz
- opisać budowę atomu i właściwości protonu, neutronu i elektronu,
- odczytać z zapisu nuklidu liczbę protonów, neutronów i elektronów,
- obliczyć liczbę elektronów w kationie i anionie,
- wyjaśnić, dlaczego to liczba protonów, a nie neutronów czy elektronów, definiuje pierwiastek,
- (rozumienie) powiedzieć, co zmienia zmiana Z, liczby neutronów i liczby elektronów,
- (ambitnie) opisać, jak zmieniały się modele atomu i co pokazało doświadczenie Rutherforda.
:::

::: karta exam | Pytanie przewodnie
**Co decyduje o tym, że atom jest atomem konkretnego pierwiastka?** Podpowiedź: nie liczba neutronów i nie liczba elektronów.
:::

::: karta core | Model całej lekcji
**Zapis → Z → protony → A − Z → neutrony → ładunek → elektrony → kontrola sumy ładunków.**
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- **F02 Materia i substancje:** pierwiastek to rodzaj atomów; symbol pierwiastka.
- **FIZ-01 Elektrostatyka** (pomocniczo): ładunki dodatnie i ujemne przyciągają się, jednoimienne odpychają.
- Matematyka: dodawanie i odejmowanie liczb całkowitych (także ujemnych).

::: karta core | Gdzie jesteś
Faza A (F01–F03) opisała substancje. **Faza B — Z czego to wynika?** **F04 atom** → F05 izotopy i jony → F06 układ okresowy → F07–F08 konfiguracja → F09 wartościowość i stopień utlenienia.
:::

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Co oznacza Z?
2. Co oznacza A?
3. Ile neutronów ma ³⁵₁₇Cl?
4. Ile elektronów ma atom obojętny tlenu (Z = 8)?
5. Ile elektronów ma jon Na⁺ (Z = 11)?
6. Czy zmiana liczby neutronów zmienia pierwiastek?

::: odp | Pokaż klucz i interpretację
1. Liczbę protonów. 2. Sumę protonów i neutronów. 3. 35 − 17 = 18. 4. 8. 5. 10. 6. Nie — powstaje inny izotop tego samego pierwiastka.

**Interpretacja:** 0–2/6 — rdzeń krok po kroku; 3–4/6 — rdzeń, szczególnie punkty z błędami; 5–6/6 — przejdź do [§5](#co-zmienia) i zadań transferowych.
:::
:::

## 1 | Cząstki atomu [[basic:E8]] {#czastki}

| Cząstka | Symbol | Ładunek | Masa (ok.) | Miejsce |
|---|---|---|---|---|
| proton | p⁺ | +1 | 1 u | jądro |
| neutron | n⁰ | 0 | 1 u | jądro |
| elektron | e⁻ | −1 | 1/1836 u (prawie zero) | wokół jądra |

**Jądro** zawiera protony i neutrony — ma ładunek dodatni i prawie całą masę atomu. **Elektrony** zajmują obszar wokół jądra; przyciąga je dodatnie jądro. **Jednostka masy atomowej u** to 1/12 masy atomu węgla ¹²C; 1 u ≈ 1,66 · 10⁻²⁴ g.

::: karta understand | Skala atomu [[understand:ROZUMIENIE]]
Gdyby atom powiększyć do rozmiaru stadionu, jądro byłoby ziarnkiem grochu na środku boiska. Jądro jest ok. 10 000–100 000 razy mniejsze od atomu, a skupia ponad 99,9% jego masy. Rysunki atomu w podręcznikach celowo nie zachowują skali.
:::

## 2 | Liczba atomowa Z i liczba masowa A [[basic:E8]] {#liczby}

$$ Z = liczba protonów · A = protony + neutrony · n = A − Z · atom obojętny: e = Z

- **Z** jest „dowodem osobistym” pierwiastka: Z = 1 — wodór, Z = 6 — węgiel, Z = 11 — sód, Z = 17 — chlor. Z odczytasz z układu okresowego (to numer pierwiastka).
- **A** dotyczy konkretnego **nuklidu** (rodzaju atomu o określonym składzie jądra) i zawsze jest liczbą całkowitą.

::: karta core | Zmiana protonów to zmiana pierwiastka
Atom z 6 protonami jest zawsze węglem. Gdyby miał 7 protonów, byłby azotem — nie „innym węglem”. W zwykłych reakcjach chemicznych jądra się nie zmieniają; przestawiają się tylko elektrony. Zmiana jądra to przemiana jądrowa (blok A).
:::

## 3 | Zapis nuklidu [[basic:E8]] {#nuklid}

Zapis **ᴬ_Z X**: u góry liczba masowa A, u dołu liczba atomowa Z, obok symbol pierwiastka. Często pomija się Z (wynika z symbolu): ³⁵Cl, ¹²C.

::: karta basic | Procedura odczytu
1. **Symbol** X → jaki pierwiastek.
2. **Z** → liczba protonów.
3. **A − Z** → liczba neutronów.
4. **Ładunek** (jeśli podany) → liczba elektronów: e = Z − q; brak ładunku → e = Z.
5. **Kontrola:** p − e musi dać podany ładunek.
:::

| Zapis | p⁺ | n⁰ | e⁻ |
|---|---|---|---|
| ¹²₆C | 6 | 6 | 6 |
| ¹⁶₈O | 8 | 8 | 8 |
| ²³₁₁Na | 11 | 12 | 11 |
| ³⁵₁₇Cl | 17 | 18 | 17 |
| ³⁷₁₇Cl | 17 | 20 | 17 |
| ⁴⁰₂₀Ca | 20 | 20 | 20 |
| ²⁷₁₃Al | 13 | 14 | 13 |

> Elektronów **nie** odczytujesz z A — A mówi tylko o jądrze.

@model periodic-54 | Układ okresowy z modelami atomów (pierwiastki 1–54) | wybierz pierwiastek: Z, liczba elektronów, schemat atomu
@opis Interaktywny układ okresowy pierwiastków od 1 do 54; po wybraniu pierwiastka widać jego liczbę atomową Z, liczbę elektronów i schemat atomu z elektronami rozmieszczonymi na powłokach. Wniosek: miejsce pierwiastka w tablicy wynika z liczby protonów i budowy powłok elektronowych.

## 4 | Atom obojętny i jon [[basic:E8]] {#jony}

Atom jest **obojętny**, gdy ma tyle samo protonów (+) co elektronów (−). **Jon** powstaje, gdy atom **odda lub przyjmie elektrony** — liczba protonów (i neutronów) się nie zmienia.

$$ q = p − e → e = Z − q

| Jon | Z | ładunek q | p⁺ | e⁻ | jak powstał |
|---|---|---|---|---|---|
| Na⁺ | 11 | +1 | 11 | 10 | oddał 1 e⁻ |
| Mg²⁺ | 12 | +2 | 12 | 10 | oddał 2 e⁻ |
| Al³⁺ | 13 | +3 | 13 | 10 | oddał 3 e⁻ |
| Cl⁻ | 17 | −1 | 17 | 18 | przyjął 1 e⁻ |
| O²⁻ | 8 | −2 | 8 | 10 | przyjął 2 e⁻ |
| S²⁻ | 16 | −2 | 16 | 18 | przyjął 2 e⁻ |

$$ Na → Na⁺ + e⁻ · Cl + e⁻ → Cl⁻

::: karta core | Reguła: kation oddał, anion przyjął
**Kation** (ładunek dodatni) — elektronów **mniej** niż protonów. **Anion** (ładunek ujemny) — elektronów **więcej** niż protonów. Uwaga na znak: dla O²⁻ e = 8 − (−2) = 10, a nie 6.
:::

::: karta warning | Najczęstszy błąd
„Al³⁺ ma 13 − 3 = 10 **protonów**” — nie! Ładunek powstał przez utratę elektronów. Al³⁺ ma nadal **13 protonów** i **10 elektronów**. Gdyby zmieniła się liczba protonów, nie byłby to już glin.
:::

Dlaczego atomy tworzą jony i które jony są typowe — [F05](#mosty) i [F10](#mosty). Jak elektrony rozmieszczają się wokół jądra (powłoki K, L, M) — [F07](#mosty).

## 5 | Co zmienia Z, liczba neutronów i liczba elektronów? [[understand:ROZUMIENIE]] {#co-zmienia}

::: karta core | Trzy operacje, których nie wolno mylić
| Zmieniam | Co powstaje | Przykład |
|---|---|---|
| liczbę **protonów** (Z) | **inny pierwiastek** | ¹⁴₆C → ¹⁴₇N |
| liczbę **neutronów** | **inny izotop** tego samego pierwiastka | ³⁵Cl i ³⁷Cl |
| liczbę **elektronów** | **jon** tego samego pierwiastka | Na i Na⁺ |
:::

To jedna z najważniejszych osi całego bloku F. Kto pomyli te trzy operacje, potem pomyli izotopy z jonami, masę atomową z liczbą masową i stopień utlenienia z ładunkiem jądra. Izotopy i masę atomową rozwija **F05**.

Zapis ²⁷₁₃Al³⁺ łączy wszystkie informacje naraz: pierwiastek (Z = 13, glin), nuklid (A = 27, czyli 14 neutronów) i stan elektronowy (ładunek 3+, czyli 10 elektronów).

## 6 | Jak powstał model atomu [[extra:AMBITNE]] {#modele-atomu}

| Rok | Model | Co wniósł | Ograniczenie |
|---|---|---|---|
| ok. 1808 | **Dalton** — niepodzielne kulki | każdy pierwiastek ma swój rodzaj atomów | atom jest podzielny |
| 1897–1904 | **Thomson** — „ciasto z rodzynkami” | odkrycie elektronu; atom ma ładunki | brak jądra |
| 1911 | **Rutherford** — jądro | mała, dodatnia, ciężka centralna część | nie tłumaczy trwałości elektronów |
| 1913 | **Bohr** — powłoki | elektrony na określonych poziomach energii | działa dobrze tylko dla wodoru |
| od 1926 | **kwantowo-mechaniczny** — orbitale | obszary prawdopodobnego położenia elektronu | wymaga matematyki ponad szkołę |

::: dosw | Doświadczenie myślowe — Rutherford i złota folia
Problem: Czy ładunek dodatni i masa są w atomie rozłożone równomiernie?
Hipoteza (model Thomsona): cząstki α przelecą przez cienką złotą folię prawie bez odchyleń.
Sprzęt: źródło cząstek α (dodatnich), bardzo cienka folia złota, ekran fluorescencyjny wokół folii.
Przebieg: Strumień cząstek α kierujemy na folię i liczymy błyski na ekranie pod różnymi kątami.
Obserwacja: Prawie wszystkie cząstki przechodzą bez odchylenia; nieliczne odchylają się mocno, a bardzo nieliczne odbijają się niemal do tyłu.
Wniosek: Atom to głównie pusta przestrzeń, a ładunek dodatni i prawie cała masa skupione są w maleńkim jądrze. Model Thomsona trzeba odrzucić.
BHP: doświadczenie historyczne — źródła promieniowania α wymagają specjalistycznego laboratorium; tu analizujemy wyniki.
:::

::: karta understand | Model jako narzędzie
Model powłokowy wystarcza, by liczyć p, n, e i rysować schematy. Nie wolno jednak mówić, że elektron to kulka krążąca po dokładnej orbicie jak planeta — to uproszczenie. Każdy model ma zakres stosowalności (F01 §7).
:::

::: adv | Co trzyma jądro razem? | poziom akademicki
Protony w jądrze odpychają się elektrostatycznie, a mimo to jądro jest trwałe. Utrzymują je **oddziaływania silne (jądrowe)** — znacznie silniejsze od odpychania, ale działające tylko na odległościach rzędu rozmiaru jądra (ok. 10⁻¹⁵ m). Neutrony „rozcieńczają” odpychanie protonów, dlatego cięższe jądra mają więcej neutronów niż protonów. Rozwinięcie: A01.
:::

### Nuklid, izotop, izobar [[extra:AMBITNE]]

- **Nuklid** — rodzaj atomu o określonym Z i A (²³Na, ³⁵Cl).
- **Izotopy** — nuklidy o tym samym Z, różnym A (³⁵Cl i ³⁷Cl) — rozwinięcie w F05.
- **Izobary** — nuklidy o tym samym A, różnym Z (⁴⁰Ar i ⁴⁰Ca) — to różne pierwiastki.

## 7 | Doświadczenia modelowe {#doswiadczenia}

::: dosw | Doświadczenie 1 — Model atomu z plasteliny
Problem: Jak przedstawić budowę atomu węgla ¹²C?
Hipoteza: Model pokaże małe, ciężkie jądro i elektrony wokół niego.
Sprzęt: plastelina w trzech kolorach (protony, neutrony, elektrony), wykałaczki, kartka z narysowanymi okręgami powłok.
Przebieg: Ulep 6 kulek „protonów” i 6 „neutronów”, sklej je w jądro na środku kartki. Na okręgach rozmieść 6 małych kulek „elektronów” (2 na pierwszym, 4 na drugim).
Obserwacja: Jądro jest zwarte w środku, elektrony są daleko od niego.
Wniosek: Atom węgla: 6 p⁺ i 6 n⁰ w jądrze, 6 e⁻ wokół. Model nie zachowuje skali — w rzeczywistości jądro byłoby niewidocznie małe.
BHP: brak szczególnych zagrożeń.
:::

::: dosw | Doświadczenie 2 — Od atomu do jonu
Problem: Co się zmienia, gdy atom sodu staje się kationem Na⁺, a chlor anionem Cl⁻?
Hipoteza: Zmienia się tylko liczba elektronów; jądra zostają takie same.
Sprzęt: model atomu Na (11 p⁺, 12 n⁰, 11 e⁻) i Cl (17 p⁺, 18 n⁰, 17 e⁻) z kulek lub na kartce.
Przebieg: Zabierz jeden elektron z modelu Na i dołóż go do modelu Cl. Policz p, n, e w obu.
Obserwacja: Na: 11 p⁺, 12 n⁰, 10 e⁻ (ładunek +1); Cl: 17 p⁺, 18 n⁰, 18 e⁻ (ładunek −1).
Wniosek: Jon powstaje przez przeniesienie elektronów; liczba protonów, a więc pierwiastek, się nie zmienia. Suma ładunków obu jonów wynosi zero.
Równanie:: Na + Cl → Na⁺ + Cl⁻
BHP: brak — doświadczenie modelowe.
:::

## 8 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Na⁺ ma 11 elektronów.” | Na⁺ ma 10 elektronów. | Kation oddał elektron: e = 11 − 1. |
| „Al³⁺ ma 10 protonów.” | Al³⁺ ma 13 protonów i 10 elektronów. | Ładunek zmienia elektrony, nie protony. |
| „O²⁻ ma 6 elektronów.” | O²⁻ ma 10 elektronów. | Anion przyjął: e = 8 − (−2) = 10. |
| „A to liczba neutronów.” | A = protony + neutrony; neutrony = A − Z. | A dotyczy całego jądra. |
| „Liczba masowa to masa atomowa.” | A — całkowita, dla nuklidu; masa atomowa — średnia (F05). | ³⁵Cl ma A = 35, a chlor ma masę atomową ok. 35,45. |
| „Elektron krąży po orbicie jak planeta.” | Model powłokowy to uproszczenie. | Elektron opisuje się obszarem prawdopodobieństwa (F07). |
| „Atom ma zawsze tyle samo neutronów co protonów.” | Liczba neutronów zależy od nuklidu. | ²³Na: 11 p⁺, 12 n⁰; ³⁵Cl: 17 p⁺, 18 n⁰. |
| „Zmiana liczby elektronów zmienia pierwiastek.” | Powstaje jon tego samego pierwiastka. | Pierwiastek definiuje Z. |
| „Atom jest niepodzielny.” | Atom składa się z jądra (protony, neutrony) i elektronów; w reakcjach chemicznych się nie dzieli, ale nie jest niepodzielny. | „átomos” to nazwa historyczna (Demokryt, Dalton). |
| „Liczba masowa to masa atomowa.” | A to liczba protonów i neutronów jednego nuklidu (liczba całkowita); masa atomowa to średnia ważona mas izotopów. | Cl: A = 35 lub 37, a masa atomowa ≈ 35,5 u. |
:::

## 9 | Ćwiczenia {#cwiczenia}

::: karta basic | A. Podstawa
1. Podaj liczbę p⁺, n⁰, e⁻ dla: ¹⁶O, ²⁴Mg, ⁴⁰Ar (Z: O 8, Mg 12, Ar 18).
2. Ile elektronów mają jony: Na⁺, Cl⁻, Mg²⁺, O²⁻?
3. Uzupełnij: atom obojętny ma tyle elektronów co …; kation … elektrony; anion … elektrony.
4. Co definiuje pierwiastek?

::: odp | Pokaż odpowiedzi
1. ¹⁶O: 8, 8, 8; ²⁴Mg: 12, 12, 12; ⁴⁰Ar: 18, 22, 18.
2. Na⁺ 10; Cl⁻ 18; Mg²⁺ 10; O²⁻ 10.
3. protonów; oddał; przyjął.
4. Liczba protonów (Z).
:::
:::

::: karta understand | B. Trening
1. Atom ma Z = 17 i A = 35. Podaj p⁺, n⁰, e⁻. Ile elektronów ma jego anion z ładunkiem −1?
2. Jon ma 12 protonów i 10 elektronów. Jaki ma ładunek i jaki to pierwiastek?
3. Dla ²⁷₁₃Al³⁺ wyznacz p, n, e.
4. Popraw: „Na⁺ ma 11 elektronów”; „Al³⁺ ma 10 protonów”.

::: odp | Pokaż odpowiedzi
1. 17, 18, 17; anion Cl⁻ ma 18 e⁻.
2. q = 12 − 10 = +2; Z = 12 → magnez, Mg²⁺.
3. p = 13, n = 14, e = 10.
4. Na⁺ ma 10 elektronów; Al³⁺ ma 13 protonów i 10 elektronów.
:::
:::

::: karta extra | C. Ambitne [[extra:AMBITNE]]
1. Atom X ma 20 elektronów i A = 40. Jaki to pierwiastek i ile ma neutronów?
2. Czy ²⁷₁₃Al i ²⁷₁₄Si są izotopami? Uzasadnij.
3. Jakie wnioski wyciągnął Rutherford z obserwacji, że nieliczne cząstki α odbijały się do tyłu?

::: odp | Pokaż odpowiedzi
1. Atom obojętny → Z = 20 → wapń; n = 40 − 20 = 20.
2. Nie — mają różne Z, więc to różne pierwiastki (to izobary).
3. Że w atomie jest małe, dodatnie i bardzo ciężkie jądro — odbicie wymaga zderzenia z czymś masywnym i silnie dodatnim.
:::
:::

::: karta extra | D. Zaawansowane [[extra:AMBITNE]]
1. Ile neutronów ma ¹⁴C (Z = 6)? Ile elektronów ma jon C⁴⁺?
2. Dlaczego atom jako całość jest elektrycznie obojętny, choć zbudowany z naładowanych cząstek?
3. Oszacuj: ile razy masa protonu jest większa od masy elektronu? Dlaczego masę elektronów zwykle pomijamy przy liczeniu masy atomu?

::: odp | Pokaż odpowiedzi
1. 14 − 6 = 8 neutronów; C⁴⁺: 6 − 4 = 2 elektrony.
2. Ładunki protonów (+) i elektronów (−) mają tę samą wartość, a ich liczby są równe — sumują się do zera.
3. Ok. 1836 razy; elektrony stanowią poniżej 0,1% masy atomu.
:::
:::

::: karta understand | E. Transfer — myślenie chemika
Uczeń twierdzi: „W reakcji sodu z chlorem sód zamienił się w inny pierwiastek, bo zmienił ładunek”. Oceń to twierdzenie schematem twierdzenie → dowód → wyjaśnienie.

::: odp | Przykładowy kierunek
Twierdzenie jest fałszywe. Dowód: Na⁺ ma nadal 11 protonów (Z = 11). Wyjaśnienie: ładunek powstał przez oddanie elektronu; o tożsamości pierwiastka decyduje Z, a zwykła reakcja chemiczna nie zmienia jąder.
:::
:::

::: karta basic | F. Utrwalenie — p, n, e
1. Oblicz liczbę protonów, neutronów i elektronów w ³⁵₁₇Cl.
2. Ile elektronów ma jon O²⁻?
3. Zapisz symbol nuklidu, który ma 13 protonów i 14 neutronów.
4. Wyjaśnij, dlaczego ¹²C i ¹⁴C są izotopami.

::: odp | Pokaż odpowiedzi
1. p = 17, n = 35 − 17 = 18, e = 17.
2. Tlen: Z = 8; jon O²⁻ przyjął 2 elektrony → 10 elektronów.
3. ²⁷₁₃Al (Z = 13 → glin; A = 13 + 14 = 27).
4. Oba mają 6 protonów (to ten sam pierwiastek — węgiel), ale różną liczbę neutronów: 6 i 8.
:::
:::

## 10 | Test {#test}

::: test
? Liczba atomowa Z to liczba:
+ protonów
- neutronów
- protonów i neutronów
- elektronów w jonie

? Ile neutronów ma ²³₁₁Na?
- 11
+ 12
- 23
- 34
! n = A − Z = 23 − 11.

? Ile elektronów ma jon Cl⁻ (Z = 17)?
- 16
- 17
+ 18
! Anion przyjął 1 elektron.

? Ile elektronów ma jon Al³⁺ (Z = 13)?
+ 10
- 13
- 16

? Kation to atom, który:
+ oddał elektrony
- przyjął elektrony
- stracił protony
- zyskał neutrony

? Co definiuje pierwiastek?
- liczba neutronów
+ liczba protonów
- liczba elektronów
- liczba masowa

? Gdzie skupiona jest prawie cała masa atomu?
+ w jądrze
- w elektronach
- równo w całym atomie

? Jon ma 8 protonów i 10 elektronów. To:
- Ne
+ O²⁻
- O²⁺
! Z = 8 → tlen; ładunek 8 − 10 = −2.

? Doświadczenie Rutherforda pokazało, że:
- atom jest niepodzielną kulką
+ w atomie jest małe, dodatnie jądro
- elektrony krążą po orbitach

? Zapis ³⁷₁₇Cl oznacza atom z:
- 37 protonami
+ 17 protonami i 20 neutronami
- 17 neutronami i 20 protonami
:::

## 11 | Karta szybkiego powtórzenia i mapa myśli {#powtorka}

::: karta core | Na jednej stronie
- **Atom** = jądro (p⁺ + n⁰) + elektrony. p⁺: +1, ok. 1 u; n⁰: 0, ok. 1 u; e⁻: −1, ok. 1/1836 u.
- **Z** = protony = tożsamość pierwiastka. **A** = p + n. **n = A − Z.** Atom obojętny: **e = Z**.
- **Jon:** e = Z − q. Kation oddał (Na⁺: 10 e⁻), anion przyjął (Cl⁻: 18 e⁻). Protony bez zmian.
- **Zmień Z** → inny pierwiastek · **zmień n** → izotop · **zmień e** → jon.
- **Modele:** Dalton → Thomson → Rutherford (jądro) → Bohr (powłoki) → kwantowy (orbitale).
:::

::: karta understand | Mapa myśli
**ATOM** → *jądro* (protony: Z · neutrony: A − Z) · *elektrony* (atom obojętny: e = Z · jon: e = Z − q)
→ *zapis nuklidu* ᴬ_Z X → *izotopy* (F05) → *powłoki i konfiguracja* (F07) → *jony w związkach* (F09–F11)
:::

## 12 | Fiszki {#fiszki}

::: fiszki
Liczba atomowa Z | liczba protonów; określa pierwiastek | basic:podstawa
Liczba masowa A | protony + neutrony | basic:podstawa
Liczba neutronów | n = A − Z | basic:podstawa
Elektrony w atomie obojętnym | e = Z | basic:podstawa
Elektrony w jonie | e = Z − q | basic:podstawa
Kation | jon dodatni — oddał elektrony | basic:podstawa
Anion | jon ujemny — przyjął elektrony | basic:podstawa
Na⁺ | 11 p⁺, 12 n⁰, 10 e⁻ | basic:podstawa
Cl⁻ (³⁵Cl) | 17 p⁺, 18 n⁰, 18 e⁻ | basic:podstawa
Gdzie jest masa atomu? | prawie cała w jądrze | basic:podstawa
Zmiana Z / n / e | inny pierwiastek / izotop / jon | understand:rozumienie
Jednostka u | 1/12 masy atomu ¹²C ≈ 1,66 · 10⁻²⁴ g | extra:ambitne
Izobary | ten sam A, różne Z (⁴⁰Ar, ⁴⁰Ca) | extra:ambitne
Doświadczenie Rutherforda | odkrycie małego, dodatniego jądra | extra:ambitne
:::

## 13 | Słownik {#slownik}

::: slownik
Atom :: najmniejsza cząstka pierwiastka, zbudowana z jądra i elektronów, elektrycznie obojętna
Jądro atomowe :: centralna część atomu zawierająca protony i neutrony
Proton :: cząstka jądra o ładunku +1 i masie ok. 1 u
Neutron :: cząstka jądra bez ładunku, o masie ok. 1 u
Elektron :: cząstka o ładunku −1 i masie ok. 1/1836 u, znajdująca się wokół jądra
Liczba atomowa Z :: liczba protonów w jądrze
Liczba masowa A :: suma liczby protonów i neutronów w jądrze
Nuklid :: rodzaj atomu o określonej liczbie protonów i neutronów
Jon :: atom lub grupa atomów z ładunkiem elektrycznym
Kation :: jon dodatni
Anion :: jon ujemny
Jednostka masy atomowej u :: 1/12 masy atomu węgla ¹²C
:::

## 14 | Checklista {#checklista}

::: karta basic | Umiem…
- ☐ opisać budowę atomu i podać ładunek oraz masę p⁺, n⁰, e⁻,
- ☐ odczytać Z i A z zapisu nuklidu i policzyć p, n, e,
- ☐ policzyć elektrony w kationie i anionie, pilnując znaku,
- ☐ wyjaśnić, dlaczego Z definiuje pierwiastek,
- ☐ powiedzieć, co zmienia zmiana Z, liczby neutronów i liczby elektronów,
- ☐ (ambitnie) opisać doświadczenie Rutherforda i kolejne modele atomu.
:::

## 15 | System powtórek {#powtorki}

| Kiedy | Ile | Co |
|---|---|---|
| po lekcji | 20 min | karta z [§11](#powtorka) i ćwiczenia A |
| po 1 dniu | 10 min | fiszki |
| po 3 dniach | 15 min | ćwiczenia B |
| po tygodniu | 20 min | test z [§10](#test) |
| po F05 | 25 min | F02 + F03 + F04 + F05 razem — zestaw przekrojowy z F21 |

## A | Dodatek A — mosty i co dalej {#mosty}

::: karta understand | Powiązania
- **F02 Materia i substancje** — pierwiastek jako rodzaj atomów; tu: co ten „rodzaj” znaczy (Z).
- **F05 Izotopy, jony i masa atomowa** — następna lekcja: izotopy, typowe jony, masa atomowa jako średnia ważona.
- **F06 Układ okresowy** — Z jako numer pierwiastka; położenie a elektrony walencyjne.
- **F07 Konfiguracja elektronowa** — jak elektrony rozmieszczają się na powłokach K, L, M, N.
- **F09–F11** — ładunek jonu w wzorach i wiązaniu jonowym.
- **A01–A03 Chemia jądrowa** — przemiany, w których zmienia się jądro.
- **FIZ-01 Elektrostatyka** — przyciąganie i odpychanie ładunków.
:::

## ↻ | Modele silnika w tej lekcji {#modele}

| Sekcja | Model | Co pokazuje |
|---|---|---|
| [§3](#nuklid) | `periodic-54` | układ okresowy 1–54 z modelami atomów — Z i liczba elektronów |

> Do zbudowania w GFX (nowe elementy): „Atom zoom” (V003) — jądro z licznikiem p/n, elektrony, przełącznik skali schematyczna/rzeczywista; konstruktor atomu i jonu (dodaj/zabierz proton, neutron, elektron — pokazuje, czy zmienia się pierwiastek, izotop czy ładunek); animacja doświadczenia Rutherforda.
