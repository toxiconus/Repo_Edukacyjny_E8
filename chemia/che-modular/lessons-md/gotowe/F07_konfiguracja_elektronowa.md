---
kod: F07
uid: CHE.01.F07.konfiguracja_elektronowa
tytul: Konfiguracja elektronowa
opis: Powłoki i podpowłoki · kolejność zapełniania (Aufbau) · reguły Pauliego i Hunda · zapis skrócony [gaz szlachetny] · konfiguracje jonów · wyjątki dla Cr i Cu
kicker: F07 · FUNDAMENTY · NOWA WERSJA
lead: Atom ma jądro i elektrony. F04 i F05 mówiły, ile ich jest. Ta lekcja mówi, **gdzie** te elektrony się znajdują. Ten zapis — konfiguracja elektronowa — jest językiem, którym opisujemy budowę atomu i z którego wynika położenie pierwiastka w układzie okresowym.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA F07 v1.0** · Konfiguracja elektronowa · 2026
---

::: minimum | Muszę umieć na E8 — 10 punktów
1. Elektrony w atomie ułożone są w **powłokach** K, L, M, N… (numerowanych n = 1, 2, 3, 4…). Na powłoce o numerze n mieści się co najwyżej **2n²** elektronów: K — 2, L — 8, M — 18.
2. Powłoka zewnętrzna **nie może** mieć więcej niż 8 elektronów (w modelu szkolnym); gdy zapełni się 8, zaczyna się następna powłoka.
3. Elektrony zajmują najpierw miejsca o **najniższej energii** — kolejność zapełniania (zasada Aufbau) dla pierwszych 20 pierwiastków: 1s → 2s → 2p → 3s → 3p → 4s.
4. Każda podpowłoka ma maksimum: **s — 2**, **p — 6**, **d — 10**, **f — 14** elektronów.
5. **Zasada Hunda:** w obrębie podpowłoki elektrony najpierw zajmują osobne orbitale (po jednym), dopiero potem się łączą w pary.
6. **Zasada Pauliego:** na jednym orbitalu są co najwyżej **dwa** elektrony o przeciwnych spinach.
7. Konfiguracja Na: **1s² 2s² 2p⁶ 3s¹**; w zapisie skróconym: **[Ne] 3s¹**.
8. Liczba elektronów w atomie obojętnym jest równa liczbie protonów Z.
9. Konfiguracja **jonu** różni się od atomu liczbą elektronów: Na⁺ ma 10 elektronów, tak jak Ne; Cl⁻ ma 18, tak jak Ar.
10. Dla **Fe²⁺** i innych kationów metali przejściowych elektrony odchodzą najpierw z powłoki **4s**, potem z 3d.
:::

::: warstwy
- e8 | <b>E8:</b> powłoki (2n²), podpowłoki s/p/d/f i ich maksima, kolejność 1s→2s→2p→3s→3p→4s, konfiguracje Z = 1–20, konfiguracje prostych jonów, zapis skrócony [gaz szlachetny]
- understand | <b>Rozumienie:</b> dlaczego kolejność zapełniania jest taka, a nie inna (przenikanie i ekranowanie); reguły Hunda i Pauliego jako „dlaczego”; powód, dla którego jony mają konfiguracje gazów szlachetnych
- extra | <b>LO / ambitne:</b> kolejność Madelunga do 6p; wyjątki Cr i Cu; kationy metali przejściowych; konfiguracja w zapisie orbitali (klatki)
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
Konfiguracja elektronowa to **adres elektronów**. Jak w mieszkaniu: budynek ma piętra (powłoki), a na każdym piętrze są pokoje (podpowłoki) o określonej pojemności. Elektrony wprowadzamy po kolei, zaczynając od parteru, i zapełniamy każde piętro do limitu. Zapis `2s²` czyta się: „na podpowłoce 2s są dwa elektrony”.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Najpierw przeczytaj minimum, potem wykład. Diagnozę z punktu 0.4 rozwiąż **przed** zajrzeniem do klucza. Ćwiczenia rób bez patrzenia na odpowiedzi. Gdy coś się nie zgadza, wróć do wykładu, a nie do odpowiedzi.
:::

## 0.2 | Cele i pytanie przewodnie [[basic:E8]] {#cele}

::: karta basic | Po tej lekcji potrafisz
- wyjaśnić, czym jest powłoka i podpowłoka oraz ile elektronów mieści każda z nich;
- zapisać konfigurację elektronową atomu Z = 1–20 (pełną i skróconą);
- zastosować zasady Hunda i Pauliego do zapisu orbitali;
- wyprowadzić konfigurację prostego jonu z konfiguracji atomu;
- wskazać, co z konfiguracji wynika dla położenia pierwiastka (zapowiedź F08).
:::

::: karta exam | Pytanie przewodnie
Dlaczego sód i jon sodowy Na⁺ tak bardzo różnią się zachowaniem, skoro jądro jest to samo? Co dokładnie zmienia się w ich „obsadzie” elektronowej?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- liczba protonów Z i liczba atomowa (F04);
- liczba elektronów w atomie obojętnym jest równa Z;
- pojęcie jonu: kation to atom, który oddał elektrony, anion — który je przyjął (F05).

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Ile elektronów mieści się na powłoce L? A na podpowłoce 3p?
2. Ile elektronów ma atom chloru (Z = 17)?
3. Który pierwiastek w zapisie skróconym to [Ne] 3s² 3p¹?

::: odp | Pokaż klucz i interpretację
1. Powłoka L (n = 2): 2·2² = 8. Podpowłoka 3p: maksimum 6 (p ma 3 orbitale po 2 elektrony).
2. Z = 17, więc 17 elektronów.
3. Ne ma 10 elektronów; dodatkowe 3 elektrony to 3s² 3p¹ — 13 elektronów, czyli glin, Al (Z = 13).
:::
:::

## 0.5 | Wykład — konfiguracja elektronowa od zera {#wyklad}

::: karta understand | Wykład — dlaczego elektrony „układają się” w warstwy
Elektron w atomie nie krąży po prostym torze jak planeta. Mechanika kwantowa mówi, że może przebywać tylko w określonych stanach energetycznych. Nazwijmy je **orbitalami**. Orbitale grupują się w **powłoki** (numer n), a w obrębie powłoki w **podpowłoki** (s, p, d, f). Każda powłoka ma określoną liczbę miejsc, a więc każdy atom ma swój „schemat zajętości”.

Dlaczego najpierw zapełnia się 1s, a nie np. 3d? Im bliżej jądra i im mniejsza liczba kwantowa, tym niższa energia elektronu. Jednak w atomach wielo-elektronowych energie powłok zachodzą na siebie: 4s ma niższą energię niż 3d, dlatego po argonie (Z = 18) do obsadzenia wchodzi 4s, a dopiero potem 3d. Źródło tego zjawiska to **ekranowanie**: elektrony wewnętrzne osłaniają jądro przed elektronami zewnętrznymi, a orbitale s mają element „przenikania” bliżej jądra.

Zapis konfiguracji odczytujemy czytając cyfry jako numer powłoki, litery jako podpowłokę, a górny indeks jako liczbę elektronów. Zapis `3p⁴` oznacza: powłoka 3, podpowłoka p, cztery elektrony.

Kolejność 1s → 2s → 2p → 3s → 3p → 4s pamiętamy jako **przekątne** (ukośne linie w schemacie). To mnemotechnika, nie prawo przyrody: wynika z tego, że energie orbitali wzrastają w tej kolejności w typowych atomach.
:::

::: karta understand | W skrócie — co naprawdę oznacza „powłoka”
Powłoka to zbiór elektronów o podobnej energii i podobnej średniej odległości od jądra. Im większe n, tym elektron średnio dalej od jądra i tym łatwiej go oddać. To jest właśnie powód, dla którego metale z dużym n chętnie tworzą kationy.
:::

## 1 | Powłoki i podpowłoki [[basic:E8]] {#powloki}

| Powłoka | n | Maksymalna liczba e⁻ (2n²) | Podpowłoki | Miejsca na podpowłokach |
|---|---|---|---|---|
| K | 1 | 2 | 1s | 2 |
| L | 2 | 8 | 2s, 2p | 2 + 6 |
| M | 3 | 18 | 3s, 3p, 3d | 2 + 6 + 10 |
| N | 4 | 32 | 4s, 4p, 4d, 4f | 2 + 6 + 10 + 14 |

::: karta core | Dwie różne liczby, które łatwo pomylić
Liczba 2n² to **teoretyczny limit powłoki**. Liczba elektronów w powłoce zewnętrznej atomu w modelu szkolnym nie przekracza 8 — dlatego w wielu atomach powłoka M nie jest zapełniona do 18, zanim zacznie się N. To ważne przy F08.
:::

## 2 | Kolejność zapełniania — zasada Aufbau [[basic:E8]] {#aufbau}

Aufbau (z niem. „budowanie”) to reguła: elektrony zajmują orbitale w kolejności rosnącej energii. Dla pierwszych 20 pierwiastków wystarcza ciąg:

**1s → 2s → 2p → 3s → 3p → 4s**

Pojemności tych podpowłok to kolejno 2, 2, 6, 2, 6, 2. Suma daje 20 — stąd Ca (Z = 20) kończy się na 4s². Zauważ, że 3d pojawia się dopiero po 4s.

::: karta warning | Pułapka: „3d po 3p, więc 3d po 3s”?
Nie. Kolejność energetyczna to 3p → 4s → 3d, nie 3p → 3d. Uczeń, który pisze konfigurację Fe jako 1s²2s²2p⁶3s²3p⁶3d⁸, pomija 4s i zapisuje za dużo elektronów na 3d. Prawidłowo: Fe to [Ar] 3d⁶ 4s².
:::

## 3 | Zasady obsadzania — Hund i Pauli [[basic:E8]] {#zasady}

::: regula
**Pauli:** na jednym orbitalu są najwyżej dwa elektrony, i to o przeciwnych spinach (zapisujemy strzałkami ↑↓).

**Hund:** w podpowłoce o kilku orbitalach o tej samej energii (np. trzy orbitale p) najpierw każdy orbital dostaje po jednym elektronie o tym samym spinie, dopiero potem następują pary.
:::

Przykład — węgiel (Z = 6), konfiguracja 1s² 2s² 2p²:

- 2p ma trzy orbitale; dwa elektrony obsadzają **dwa różne** orbitale (↑ ↑ _), a nie jeden orbital w parze (↑↓ _ _);
- to daje węglowi dwa niesparowane elektrony — co tłumaczy, dlaczego węgiel chętnie tworzy wiązania.

::: karta understand | Dlaczego Hund ma znaczenie
Elektrony o tym samym spinie się odpychają, więc rozmieszczenie ich po różnych orbitalach jest energetycznie korzystniejsze. Ta reguła wyjaśnia, dlaczego atomy o tej samej konfiguracji gęstej mają różną liczbę niesparowanych elektronów, a to przekłada się na właściwości magnetyczne (ambitnie: paramagnetyzm).
:::

## 4 | Zapis konfiguracji i zapis skrócony [[basic:E8]] {#zapis}

Pełny zapis dla Na (Z = 11): **1s² 2s² 2p⁶ 3s¹**. Suma elektronów: 2 + 2 + 6 + 1 = 11.

Zapis skrócony: w nawiasie kwadratowym podajemy symbol **gazu szlachetnego** poprzedzającego pierwiastek, a dalej tylko kolejne podpowłoki. Dla sodu: **[Ne] 3s¹**, ponieważ konfiguracja neonu to 1s² 2s² 2p⁶ (10 elektronów).

| Pierwiastek | Z | Pełna konfiguracja | Skrócona |
|---|---|---|---|
| H | 1 | 1s¹ | — |
| He | 2 | 1s² | — |
| Li | 3 | 1s² 2s¹ | [He] 2s¹ |
| C | 6 | 1s² 2s² 2p² | [He] 2s² 2p² |
| O | 8 | 1s² 2s² 2p⁴ | [He] 2s² 2p⁴ |
| Ne | 10 | 1s² 2s² 2p⁶ | — |
| Na | 11 | 1s² 2s² 2p⁶ 3s¹ | [Ne] 3s¹ |
| Mg | 12 | 1s² 2s² 2p⁶ 3s² | [Ne] 3s² |
| Al | 13 | … 3s² 3p¹ | [Ne] 3s² 3p¹ |
| S | 16 | … 3s² 3p⁴ | [Ne] 3s² 3p⁴ |
| Cl | 17 | … 3s² 3p⁵ | [Ne] 3s² 3p⁵ |
| Ar | 18 | … 3s² 3p⁶ | [Ne] 3s² 3p⁶ |
| K | 19 | … 3s² 3p⁶ 4s¹ | [Ar] 4s¹ |
| Ca | 20 | … 3s² 3p⁶ 4s² | [Ar] 4s² |

::: karta core | Procedura zapisu konfiguracji (5 kroków)
1. Odczytaj Z z układu okresowego (F04).
2. Zapełniaj po kolei: 1s, 2s, 2p, 3s, 3p, 4s… aż suma elektronów będzie równa Z.
3. Pilnuj limitów: s — 2, p — 6, d — 10.
4. Sprawdź sumę indeksów — musi dać Z.
5. Jeśli możesz, skróć zapis, podając gaz szlachetny z poprzedniego okresu w nawiasie.
:::

## 5 | Konfiguracje jonów [[basic:E8]] {#jony}

Ion powstaje przez oddanie lub przyjęcie elektronów, więc jego konfiguracja jest konfiguracją atomu po dodaniu albo odjęciu elektronów.

- **Na⁺** = Na − 1 e⁻ → 1s² 2s² 2p⁶ = konfiguracja neonu. Odchodzi elektron z powłoki M.
- **Mg²⁺** = Mg − 2 e⁻ → 1s² 2s² 2p⁶ = konfiguracja neonu.
- **Cl⁻** = Cl + 1 e⁻ → 1s² 2s² 2p⁶ 3s² 3p⁶ = konfiguracja argonu.
- **O²⁻** = O + 2 e⁻ → 1s² 2s² 2p⁶ = konfiguracja neonu.

::: karta warning | Uwaga przy jonach metali przejściowych
Dla Fe (Z = 26) konfiguracja atomu to [Ar] 3d⁶ 4s². Jon Fe²⁺ traci **najpierw elektrony z 4s**, a dopiero potem z 3d: [Ar] 3d⁶. Jon Fe³⁺ ma [Ar] 3d⁵. Uczeń, który oddaje elektrony z 3d, popełnia klasyczny błąd.
:::

::: odp | Ćwiczenie w pamięci — konfiguracja Mg²⁺
Mg ma 12 elektronów: 1s² 2s² 2p⁶ 3s². Po oddaniu 2 e⁻ z 3s zostaje 1s² 2s² 2p⁶ — 10 elektronów, konfiguracja Ne.
:::

## 6 | Wyjątki: Cr i Cu [[understand:ROZUMIENIE]] {#wyjatki}

Idealna reguła Aufbau dla Cr (Z = 24) dałaby [Ar] 3d⁴ 4s². W rzeczywistości jest [Ar] **3d⁵ 4s¹**. Podobnie Cu (Z = 29): zamiast [Ar] 3d⁹ 4s² mamy [Ar] **3d¹⁰ 4s¹**. Powód: połowicznie zapełniona (d⁵) i całkowicie zapełniona (d¹⁰) podpowłoka mają dodatkową stabilność, którą wyrównują przez przesunięcie jednego elektronu z 4s.

::: karta understand | Jak to traktować na E8
Na egzaminie ósmoklasisty wyjątków nie wymaga się. Na poziomie LO warto je znać, bo pokazują, że reguły są **modelem**, a nie prawem absolutnym. Zapamiętaj: „reguła działa w ~90% przypadków, a wyjątki wynikają z energii, nie z kaprysu”.
:::

## 7 | Wykład ambitny — skąd kolejność 4s przed 3d [[extra:AMBITNE (LO)]] {#ambitne}

::: adv | Ekranowanie i efektywny ładunek jądra | poziom LO
Elektron na orbitalu 3d jest silniej osłaniany przez elektrony wewnętrzne niż elektron na 4s, który częściowo „przenika” w pobliże jądra. Efektywny ładunek jądra odczuwany przez 4s jest więc większy, a jego energia niższa. Dlatego po zapełnieniu 3p atom ma tendencję do obsadzania 4s przed 3d.

Model ten jest przybliżeniem. Dla pierwiastków przejściowych energie 3d i 4s są bardzo bliskie, a ich kolejność może zależeć od stopnia jonizacji. Dlatego przy jonach stosujemy zasadę: najpierw odchodzą elektrony z najwyższej powłoki n, nawet jeśli to 4s, a nie 3d.
:::

## 8 | Doświadczenie modelowe — barwienie płomienia [[basic:E8]] {#dosw}

::: dosw | Barwienie płomienia solami sodu i potasu | Problem: czy różne pierwiastki wydają różne barwy płomienia?
**Hipoteza:** barwa zależy od tego, jakie elektrony są wzbudzane w płomieniu.
**Sprzęt:** palnik, drut platynowy lub nichromowy, sole NaCl i KCl (w roztworze lub stałe), zlewka z wodą destylowaną.
**Przebieg:** drut zanurzyć w kwasie chlorowodorowym, wypalić w płomieniu, zanurzyć w soli i wprowadzić do płomienia. Obserwować barwę.
**Obserwacja (opis tradycyjny):** sód — intensywna żółta barwa; potas — fioletowa (przez szkło kobaltowe widoczna wyraźniej).
**Wniosek:** wzbudzone elektrony wracają na niższe poziomy energii i wysyłają fotony o charakterystycznych długościach fali. Źródłem barwy jest więc układ elektronów, a nie sam pierwiastek „sam w sobie”.
**BHP:** nie używać drutu zanieczyszczonego; soli nie wkładać do ust; pracować przy otwartym oknie.
:::

::: karta understand | Obserwacja ≠ wniosek
„Płomień jest żółty” to obserwacja. „Sód ma elektrony, które przy wzbudzeniu emitują żółte światło” to wniosek. Na egzaminie wpisz wniosek dopiero po obserwacji.
:::

## 9 | Nie myl! {#nie-myl}

::: nie-myl | Pojęcia, które łatwo pomylić
- **powłoka** (n) ↔ **podpowłoka** (s, p, d, f) — powłoka ma wiele podpowłok;
- **liczba elektronów na powłoce** ↔ **2n²** — drugie to limit, pierwsze to fakt dla konkretnego atomu;
- **konfiguracja atomu** ↔ **konfiguracja jonu** — jon ma inną liczbę elektronów;
- **zapis skrócony** ↔ **zapis pełny** — nie pomijaj niczego poza gazem szlachetnym w nawiasie.
:::

## 10 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Po 3p zapełniamy 3d.” | Po 3p zapełniamy 4s, potem 3d. | Kolejność energetyczna, nie numer powłoki. |
| „Na powłoce L jest 4 elektrony.” | Na L mieści się 8 (2s² 2p⁶). | Limit 2n² dla n = 2 wynosi 8. |
| „Cl⁻ ma 17 elektronów.” | Cl⁻ ma 18 elektronów. | Anion przyjmuje elektron. |
| „Na⁺ ma konfigurację Na.” | Na⁺ ma konfigurację Ne. | Kation utracił elektron z powłoki M. |
| „Fe²⁺ = [Ar] 3d⁴ 4s².” | Fe²⁺ = [Ar] 3d⁶. | Najpierw z 4s, potem 3d — 4s jest „zewnętrzne”. |
| „Pauli: elektrony się nie odpychają.” | Pauli: dwa elektrony na orbitalu mają przeciwne spiny. | Hund dotyczy rozmieszczenia, Pauli liczby na orbitalu. |
:::

::: karta error | Klinika — przykład: konfiguracja tlenu
Uczeń zapisuje O jako 1s² 2s² 2p⁶ (10 elektronów). To konfiguracja neonu. Tlen ma Z = 8, więc 1s² 2s² 2p⁴.

::: odp | Pokaż odpowiedź
Pomylił atom z sąsiadem w układzie. Sprawdź zawsze sumę indeksów: musi równać się Z.
:::
:::

## 11 | Ćwiczenia {#cwiczenia}

::: karta basic | A. Podstawa — zapisz konfiguracje
1. Zapisz pełną konfigurację Mg (Z = 12).
2. Zapisz skróconą konfigurację K (Z = 19).
3. Ile elektronów mieści się na podpowłoce 3d?
4. Zapisz konfigurację Cl⁻.

::: odp | Pokaż odpowiedzi
1. 1s² 2s² 2p⁶ 3s².
2. [Ar] 4s¹.
3. 10.
4. 1s² 2s² 2p⁶ 3s² 3p⁶ (= Ar).
:::
:::

::: karta understand | B. Trening — rozpoznaj pierwiastek
1. Konfiguracja: 1s² 2s² 2p⁶ 3s² 3p⁴. Jaki to pierwiastek i ile ma elektronów?
2. Zapis [Ar] 4s² 3d⁶ — który pierwiastek? (Uwaga: zapisz w kolejności zwyczajowej.)
3. Ile niesparowanych elektronów ma atom węgla według reguły Hunda?

::: odp | Pokaż odpowiedzi
1. Siarka S, Z = 16 (2 + 2 + 6 + 2 + 4).
2. Żelazo Fe, Z = 26 (18 + 2 + 6). Zapis zwyczajowy: [Ar] 3d⁶ 4s².
3. Dwa (węgiel ma 2p², dwa różne orbitale po jednym elektronie).
:::
:::

::: karta extra | C. Ambitne — jony i wyjątki
1. Podaj konfigurację Fe³⁺ i porównaj ją z konfiguracją Cr³⁺.
2. Wyjaśnij, dlaczego Cu nie ma konfiguracji [Ar] 3d⁹ 4s².
3. Zapisz konfigurację S²⁻ i wskaż, który gaz szlachetny ma taką samą.

::: odp | Pokaż odpowiedzi
1. Fe³⁺ = [Ar] 3d⁵ (oddane 4s² i jeden 3d). Cr³⁺ = [Ar] 3d³. Oba mają inną liczbę d-elektronów.
2. Konfiguracja 3d¹⁰ 4s¹ jest bardziej stabilna (podpowłoka d całkowicie zapełniona); ta stabilność przewyższa koszt przesunięcia elektronu z 4s.
3. S²⁻ = 1s² 2s² 2p⁶ 3s² 3p⁶ = konfiguracja Ar.
:::
:::

::: karta exam | D. Zaawansowane — z konfiguracji do pierwiastka
Atom ma w powłoce zewnętrznej 4s² 4p⁵ i zapełnione niższe powłoki. Jaki to pierwiastek, w którym grupie i okresie się znajduje (zapowiedź F08)?

::: odp | Pokaż odpowiedź
Zapełnione niższe podpowłoki to 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ — łącznie 28 elektronów. Dodajemy 4s² 4p⁵: Z = 28 + 2 + 5 = 35 → brom Br. Okres 4 (powłoka N), grupa 17 (7 elektronów walencyjnych).
:::
:::

## 12 | Fiszki {#fiszki}

::: fiszki
Ile elektronów mieści się na powłoce n? | 2n² | basic:podstawa
Ile elektronów mieści się na podpowłoce s? | 2 | basic:podstawa
Ile elektronów mieści się na podpowłoce p? | 6 | basic:podstawa
Ile elektronów mieści się na podpowłoce d? | 10 | basic:podstawa
Ile elektronów mieści się na podpowłoce f? | 14 | basic:podstawa
Kolejność zapełniania do 4s (pierwsze 20 pierwiastków)? | 1s → 2s → 2p → 3s → 3p → 4s | basic:podstawa
Konfiguracja Na? | 1s² 2s² 2p⁶ 3s¹, skrócona [Ne] 3s¹ | basic:podstawa
Konfiguracja Cl⁻? | 1s² 2s² 2p⁶ 3s² 3p⁶ (= Ar) | basic:podstawa
Co mówi zasada Pauliego? | najwyżej dwa elektrony na orbitalu, o przeciwnych spinach | understand:rozumienie
Co mówi zasada Hunda? | najpierw po jednym elektronie na każdym orbitalu podpowłoki, potem pary | understand:rozumienie
Który pierwiastek ma konfigurację [Ar] 3d¹⁰ 4s¹? | Cu (wyjątek od Aufbau) | extra:ambitne
Co oddaje Fe²⁺ najpierw? | elektrony z 4s, potem z 3d | extra:ambitne
:::

## 13 | Słownik {#slownik}

::: slownik
Powłoka :: zbiór orbitali o tym samym n; mieści co najwyżej 2n² elektronów
Podpowłoka :: s, p, d lub f — podział powłoki na orbitale o określonym kształcie
Orbital :: obszar przestrzeni o wysokim prawdopodobieństwie znalezienia elektronu (model kwantowy)
Zasada Aufbau :: elektrony zajmują orbitale w kolejności rosnącej energii
Zasada Pauliego :: na orbitalu mogą być najwyżej dwa elektrony o przeciwnych spinach
Reguła Hunda :: w podpowłoce elektrony najpierw zajmują osobne orbitale o tej samej energii
Konfiguracja elektronowa :: zapis rozmieszczenia elektronów w powłokach i podpowłokach
Zapis skrócony :: konfiguracja podana po symbolu gazu szlachetnego w nawiasie kwadratowym
Konfiguracja gazu szlachetnego :: pełna powłoka walencyjna, np. Ne: 2s² 2p⁶
:::

## 14 | Test {#test}

::: test
? Ile elektronów mieści się na powłoce L (n = 2)?
+ 8
- 2
- 4
- 18
! 2n² dla n = 2 daje 8.

? Konfiguracja atomu sodu (Z = 11) to:
- 1s² 2s² 2p⁶ 3s² 3p¹
+ 1s² 2s² 2p⁶ 3s¹
- 1s² 2s² 2p⁵ 3s²
- 1s² 2s² 2p⁶ 3s² 3p⁰ 4s¹
! Na ma 11 elektronów: 2 + 2 + 6 + 1.

? Ile elektronów ma jon Mg²⁺?
- 12
+ 10
- 14
- 8
! Mg ma 12 e⁻; po oddaniu dwóch zostaje 10 (konfiguracja Ne).

? Która reguła mówi, że w podpowłoce p elektrony najpierw zajmują osobne orbitale?
- Pauli
+ Hund
- Aufbau
- Madelung
! Reguła Hunda — rozmieszczenie po różnych orbitalach przed utworzeniem par.

? Zapis [Ar] 4s² odpowiada pierwiastkowi:
- Ca (Z = 20)
- K (Z = 19)
- Ar (Z = 18)
- Sc (Z = 21)
! Argon ma 18 e⁻; dodatkowe 2 na 4s to wapń.

? Który jon ma konfigurację argonu?
+ Cl⁻
- Na⁺
- Mg²⁺
- O²⁻
! Cl ma 17 e⁻, po przyjęciu jednego ma 18 (= Ar). O²⁻ ma konfigurację Ne.
:::

## 15 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego lampy sodowe świecą na żółto?
Lampy sodowe wykorzystują wzbudzanie elektronów w atomach sodu. Wypromieniowane fotony mają długość fali bliską 589 nm — to w tym obszarze leży żółta barwa płomienia z doświadczenia z punktu 8. Lampy te są wydajne energetycznie, choć słabo oddają barwy.
:::

::: karta extra | Konfiguracja a zapach i kolor
Wiele związków przejściowych ma barwę, bo ich elektrony d mogą pochłaniać fotony z widzialnego zakresu światła. Gdy konfiguracja d zmienia się przez utlenianie, zmienia się też kolor — tak działa np. dwuchromian potasu (pomarańczowy) i jego jony chromu(III) (zielone).
:::

::: karta extra | Mendelejew i wyjątki
Gdy Mendelejew układał tablicę, nie znał konfiguracji elektronowych. Jego zasady oparte na masach i właściwościach zadziałały, bo elektrony walencyjne decydują o właściwościach, a ich konfiguracja powtarza się okresowo. Wyjątki Cr i Cu są jednym z dowodów, że reguły to model.
:::

## 16 | Mini-wykład: po co to wszystko [[understand:ROZUMIENIE]] {#mini}

::: karta understand | W skrócie — konfiguracja jest adresem elektronów
Gdy znasz konfigurację, znasz **powłokę walencyjną**, a z niej wynika grupa i okres (F08), tworzenie jonów (F09) i wiązań (F10–F11). Konfiguracja to więc most między budową atomu a całym resztą chemii.
:::

## 17 | Checklista — umiem… {#checklista}

::: checklista
- [ ] podać liczbę elektronów na powłoce i podpowłoce z 2n² i limitów s, p, d, f;
- [ ] zapisać konfigurację Z = 1–20, pełną i skróconą;
- [ ] zastosować Hunda i Pauliego do zapisu orbitali;
- [ ] wyprowadzić konfigurację prostego jonu;
- [ ] wskazać przypadki, w których reguła Aufbau wymaga uwagi (Cr, Cu, jony metali przejściowych).
:::

::: karta core | Na jednej stronie
Powłoka n mieści 2n² e⁻ · s 2, p 6, d 10, f 14 · kolejność 1s 2s 2p 3s 3p 4s · Hund: najpierw osobno · Pauli: pary o przeciwnych spinach · zapis skrócony [gaz szlachetny] · kation: odchodzą najpierw elektrony z najwyższego n · Cr i Cu — wyjątki.
:::
