# Język polski — spis treści v2 (warstwowy: E8 → konkurs/olimpiada klasy 8 → pomost LO)

Stan: 2026-10-09. Kontynuacja konwencji kodów POL.XX.

> **Kanon kursu polskiego** (przyjęty 2026-10-09). Stan plików i audytów: `polski/plany/POL_KATALOG.md` (generuje `python3 narzedzia/spis_polski.py`). **Korekta stanu repo:** bloku D01–D13 nie ma w repo — w praktyce istnieje 34 lekcje (L001–L011, G01–G17, S01–S06), nie 47; D01–D13 traktować jak NOWE.
 Dokument projektowy: katalog lekcji, warstwy treści i kolejność przerabiania; docelowo renderowane w HTML z przełącznikami poziomów.

---

## 0. Podstawa prawna i egzaminacyjna (stan na październik 2026)

| Dokument | Co z niego wynika dla spisu | Źródło |
|---|---|---|
| Rozporządzenie MEN z 28.06.2024 (Dz.U. 2024 poz. 996) — uszczuplona podstawa programowa SP | Kanon lektur VII–VIII wg nowego wykazu (m.in. **Balladyna** na liście, **Śmierć Pułkownika**, **Żona modna**, treny I i V poza listą — odwołania dozwolone do 2028); uszczuplenie ~20% treści teoretycznych | [CKE — informator E8](https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Informatory/2025/standard/Informator_E8_polski_2025_P1.pdf) |
| Informator CKE E8 (obowiązujący od 2024/25) | Lista lektur egzaminacyjnych IV–VI i VII–VIII (szczegóły w bloku LEK7); struktura egzaminu: 150 min, część I ~20 zadań (tekst literacki + nieliteracki, także plakat/reprodukcja/frazeologizmy), część II wypracowanie ≥200 słów (opowiadanie twórcze **albo** rozprawka/przemówienie), łącznie 45 pkt | [CKE — informator E8](https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Informatory/2025/standard/Informator_E8_polski_2025_P1.pdf) |
| Zasada sprawdzania lektur IV–VI | „Tylko fragment w arkuszu" jest wprost udokumentowana **wyłącznie dla sesji 2024/25 i 2025/26**; dla sesji 2027+ informator tego nie rozstrzyga — przed każdym rokiem sprawdzić aktualny informator. LEK4 traktujemy jako warstwę powtórkową W0, nie rdzeń egzaminacyjny | [CKE — informator E8](https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Informatory/2025/standard/Informator_E8_polski_2025_P1.pdf) |
| Zasady RJP obowiązujące od 1.01.2026 | Nowa ortografia i interpunkcja (m.in. łączna pisownia „nie" z imiesłowami odmiennymi, rozdzielna cząstek -by ze spójnikami, wielka litera mieszkańców, „pół-" łącznie) — osobny blok POP | [UW Pomorski / RJP](https://www.gov.pl/web/uw-pomorski/od-1-stycznia-2026-r---ortografia-i-interpunkcja-po-nowemu) |
| Regulamin OLiJP-SP (edycja 2025/26 — odniesienie strukturalne dla warstwy konkursowej) | Olimpiada klasy 8: etap szkolny (praca pisemna), okręgowy (rozprawka 120 min + test językowy: poprawność, składnia, fleksja, słowotwórstwo, frazeologia, semantyka, stylistyka; ustna: interpretacja wiersza), ogólnopolski (rozprawka + ustna). Komitet Główny co roku publikuje listę lektur i zagadnienia — **coroczna weryfikacja na olijp.pl** | [Regulamin OLiJP-SP 2025/26](https://ilij.ujk.edu.pl/wp-content/uploads/2025/09/Regulamin-OLIJP-SP_2025-2026-1.pdf) |
| OLiJP edycja LO 2026/27 (kontekst dla pomostu) | Etap I: praca 240 min na ogłoszone wcześniej tematy; etap II: praca 240 min + test językowy + obrona; etap III: rozprawka **lub interpretacja porównawcza** 300 min + ustna; wymagana podstawa LO rozszerzona — informuje, dokąd prowadzi most | [OLiJP 2026/27 — ZSO2 Białystok](https://zso2bialystok.pl/aktualnosci/olimpiada-literatury-i-jezyka-polskiego-2026-2027) |
| Podstawa programowa LO (ZPE) — tylko jako cel pomostu | Formy: wypowiedź argumentacyjna, referat, definicja, notatka syntetyzująca (+ rozszerzenie: esej, interpretacja porównawcza, reportaż, felieton); retoryka, typy argumentów, erystyka. **Nie budujemy kursu LO od zera — tylko rozszerzenia-most dla absolwenta E8** | [ZPE — podstawa LO](https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/jezyk-polski) |
| Reforma26 — nowe podstawy programowe SP | Nowa podstawa wdrażana od **1.09.2026 wyłącznie w klasach 1 i 4**, kolejne roczniki stopniowo; zmieniony egzamin ósmoklasisty dopiero **od 2031**. Wniosek: roczniki klas 7–8 do końca dekady uczą się według podstawy 2024 — ten spis pozostaje aktualny dla E8 do ~2030; nową podstawę języka polskiego monitorować pod kątem przyszłych edycji | [MEN — Reforma26 FAQ](https://reforma26.men.gov.pl/najczesciej-zadawane-pytania/), [MEN — rozporządzenia podpisane](https://www.gov.pl/web/edukacja/nowe-podstawy-programowe-wychowania-przedszkolnego-i-ksztalcenia-ogolnego-dla-szkoly-podstawowej-wraz-ze-zmianami-w-ramowych-planach-nauczania-dla-publicznych-szkol-podstawowych--rozporzadzenia-podpisane) |

Zastrzeżenia:
- Lista lektur w podstawie ≠ zakres sprawdzania na E8 (patrz: zasada fragmentu dla IV–VI).
- „E8+" nie jest urzędowym zakresem — to warstwa dydaktyczna ponad podstawą (konkursy kuratoryjne, olimpiada klasy 8).
- Regulaminy olimpiad zmieniają się co roku — warstwa konkursowa (W2) wymaga corocznej aktualizacji względem listy Komitetu Głównego.

---

## 1. System warstw treści (do przełączników w HTML)

### 1.1. Zakres treści (co pokazujemy/ukrywamy) — niezależne przełączniki W0–W3

| Warstwa | Nazwa | Zakres | Domyślnie |
|---|---|---|---|
| **W0** | Fundament IV–VI | powtórka i reaktywacja (lektury IV–VI, fleksja podstawowa, fonetyka) | ukryta; włączana przy powtórkach |
| **W1** | Rdzeń E8 | podstawa programowa 2024 klas VII–VIII — obowiązkowa dla E8 i sprawdzianów | zawsze widoczna |
| **W2** | Rozszerzenie — konkurs/olimpiada klasy 8 | przygotowania i rozszerzenia na konkursy kuratoryjne oraz olimpiadę (OLiJP-SP): pogłębiona problematyka lektur, test językowy, interpretacja wiersza, rozprawka olimpijska | włączana dla ambitnych |
| **W3** | Pomost LO | **tylko rozszerzenia-most do LO** (formy wypowiedzi, retoryka, interpretacja, konteksty) — bez budowania podstawy LO od zera i bez pełnego kanonu maturalnego | włączana po E8 |

Warstwy są **niezależnymi checkboxami**: profil konkursowy (W2) nie wymusza pomostu LO (W3) i odwrotnie — uczeń trenujący olimpiadę klasy 8 nie musi przerabiać materiału licealnego.

### 1.2. Profil zastosowania (filtr zadań, niezależny od warstwy)

Znaczniki przy ćwiczeniach i testach: `[SPRAWDZIAN]` · `[E8]` · `[KONKURS]` · `[LO]`.

- Każde ćwiczenie ma **przynajmniej jeden** znacznik — uczeń widzi, do czego trenuje.
- Znaczniki filtrują zadania; nie każda lekcja musi mieć zadania `[E8]` — moduł wyłącznie konkursowy (np. B07) lub pomostowy (np. B05) może nie mieć odpowiednika egzaminacyjnego.
- Ustawienia predefiniowane w HTML: „Klasa 7" (W0+W1), „E8" (W1), „E8+ konkurs" (W1+W2), „Pomost LO" (W1+W2+W3).

### 1.3. Znaczniki w Markdown → HTML

Propozycja spójna z istniejącymi sekcjami „Rozszerzenie opcja / Dla ambitnych opcja / Zaawansowany opcja / Progi opcja":

```
::: warstwa W2 [KONKURS]
Treść sekcji…
:::
```

- rdzeń W1 piszemy bez znaczników (zawsze widoczny),
- istniejące sekcje „opcja" mapujemy: „Rozszerzenie opcja" i „Dla ambitnych opcja" → `W2`, „Zaawansowany opcja" → `W3`, „Progi opcja" → `W2/W3` (próg wejścia do warstwy),
- liczba pojęcia w słowniku/fiszkach = warstwa, w której się pojawia (np. „parafraza²").

### 1.4. Reguły wewnętrzne lekcji

1. Jedna lekcja = jeden plik; warstwy dodają głębię, nie zmieniają tematu.
2. Cel lekcji formułowany w W1; cel rozszerzony dopisujemy w nagłówku warstwy.
3. Fiszki i słownik terminów wspólne dla wszystkich warstw lekcji.
4. Właściciel treści: każda umiejętność ma jedną lekcję „właściciela" teorii; pozostałe odwołują się do niej ćwiczeniami (zob. 1.5).

### 1.5. Właściciele powtarzających się obszarów (bez dublowania teorii)

| Obszar | Lekcja-właściciel teorii | Konsument (tylko ćwiczenia/warsztat) |
|---|---|---|
| Interpretacja liryki | M05 | B03 (warsztat formatu LO), K14 |
| Porównywanie tekstów | D15 | M04, B05 |
| Retoryka i erystyka | S08 | B02 (warsztat erystyki), D07 |
| Składnia | G12–G16 | L008–L009 (syntezy), P03 (interpunkcja) |

---

## 2. Kanoniczny katalog bloków (porządek spisu, nie kolejność przerabiania)

| Blok | Nazwa | Status | Zawartość |
|---|---|---|---|
| POL.01 | LEK4 — lektury klas IV–VI | ADAPTACJA | L001–L006 |
| POL.02 | G — gramatyka: fleksja i składnia | ISTNIEJE + 3 NOWE | G01–G17 (+G18–G20) |
| POL.03 | S — środki stylistyczne i poetyka | ISTNIEJE + 2 NOWE | S01–S06 (+S07–S08) |
| POL.04 | D — kompetencje egzaminacyjne | ISTNIEJE + 3 NOWE | D01–D13 (+D14–D16) |
| POL.05 | LEK7 — lektury klas VII–VIII | NOWY BLOK (największa luka) | K01–K15 |
| POL.06 | LIT — teoria literatury i gatunki | ISTNIEJE + NOWE | L011 rdzeń + T01–T04 |
| POL.07 | JĘZ+ — słowotwórstwo, frazeologia, semantyka, leksyka | NOWY BLOK | J01–J06 |
| POL.08 | POP — ortografia i interpunkcja (2026) | NOWY BLOK | P01–P04 |
| POL.09 | MOT — motywy, konteksty, porównania, interpretacja | NOWY (częściowo w L001) | M01–M06 |
| POL.10 | POW — powtórki, diagnostyka, symulacje | NOWY (L007–L010 jako syntezy) | R01–R08 |
| POL.11 | POMOST — rozszerzenia do LO + warsztat konkursowy | NOWY BLOK | B01–B08 |

Stan liczbowy: istnieje 47 lekcji (wszystkie zostają, część w roli syntez); nowych do napisania 59 (K×15, J×6, R×8, B×8, M×6, P×4, T×4, G×3, S×2, D×3).

---

## 3. Szczegółowy spis lekcji

Tabela warstw dla każdej lekcji: W1 = rdzeń E8 (cel sprawdzalny), W2 = rozszerzenie — konkurs/olimpiada klasy 8, W3 = pomost LO (tylko rozszerzenia). Status: ISTNIEJE (dopisać warstwy) · ADAPTACJA (restrukturyzacja) · NOWA.

### POL.01 LEK4 — lektury klas IV–VI (warstwa W0; na E8 od 2024/25 sprawdzane tylko z fragmentu w arkuszu)

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| L001 | Lektury IV–VI — przegląd bohaterów i motywów | uczeń porównuje bohaterów dynamicznych i wskazuje 2 cechy każdej lektury | pary lektur i motywy | — | ADAPTACJA: wydzielić imiesłowy → ćwiczenia do G06 |
| L002 | „Hobbit" — bohater w drodze | uczeń śledzi przemianę Bilba i uzasadnia ją cytatem | archetyp podróży | monomita (pomost) | ADAPTACJA: nieodmienne części mowy → G07–G11 |
| L003 | „Opowieści z Narnii" — wybór moralny | uczeń analizuje przemianę Edmunda jako bohatera dynamicznego | — | alegoria | ADAPTACJA: zaimek → G05 |
| L004 | „Chłopcy z Placu Broni" — przyjaźń i konflikt | uczeń omawia konflikt wartości i rolę grupy rówieśniczej | — | — | ADAPTACJA: przymiotnik/liczebnik → G03–G04 |
| L005 | „Kajko i Kokosz" — komiks jako tekst kultury | uczeń odczytuje relację obrazu i słowa w komiksie | — | — | ADAPTACJA: rzeczownik → G01 |
| L006 | „Akademia Pana Kleksa" — świat wyobraźni | uczeń rozróżnia elementy realistyczne i fantastyczne oraz zasady świata przedstawionego | — | — | ADAPTACJA: czasownik → G02 |

Po restrukturyzacji: czysty moduł lekturowy; ćwiczenia gramatyczne wyprowadzone do bloku G jako „teksty do ćwiczeń" (odwołanie krzyżowe).

### POL.02 G — gramatyka: fleksja i składnia

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| G01 | Rzeczownik | uczeń rozpoznaje rzeczownik i określa jego kategorie (rodzaj, liczba, przypadek) | pułapki odmiany, rzeczowniki odczasownikowe i zbiorowe | kategorie rzeczownika w zadaniach akademickich | ISTNIEJE |
| G02 | Czasownik | uczeń opisuje formy czasownika (osoba, czas, tryb, aspekt, strona) | nieosobowe formy czasownika | aspekt w analizie tekstu | ISTNIEJE |
| G03 | Przymiotnik | uczeń stopniuje i odmienia przymiotnik | przymiotniki dzierżawcze/relacyjne | stopniowanie opisowe | ISTNIEJE |
| G04 | Liczebnik | uczeń rozpoznaje typy liczebnika i poprawnie odmienia „dwaj/dwa/dwoje" | liczebniki ułamkowe i zbiorowe | — | ISTNIEJE |
| G05 | Zaimek | uczeń rozróżnia rodzaje zaimków i stosuje zasadę „swój" | zaimek „który" a spójniki | deiksa (pomost akademicki) | ISTNIEJE |
| G06 | Imiesłowy | uczeń rozpoznaje 4 imiesłowy i buduje imiesłowowy równoważnik zdania | imiesłów w funkcji przydawki i okolicznika; transformacje zdań w testach | — | ISTNIEJE |
| G07 | Przysłówek | uczeń rozpoznaje przysłówek i stopniuje go | przysłówki od przymiotników | — | ISTNIEJE |
| G08 | Przyimek | uczeń rozpoznaje wyrażenia przyimkowe i rekcję przyimka | przyimki złożone | — | ISTNIEJE |
| G09 | Spójnik | uczeń rozróżnia spójniki współrzędne i podrzędne | spójniki a typy zdań | spójniki logiczne w argumentacji | ISTNIEJE |
| G10 | Partykuła | uczeń rozpoznaje partykuły i pisownię „nie" | partykuły modalne | — | ISTNIEJE |
| G11 | Wykrzyknik | uczeń rozpoznaje wykrzyknik i wykrzyknienie | onomatopeje a wykrzykniki | — | ISTNIEJE |
| G12 | Części zdania | uczeń wskazuje podmiot, orzeczenie i określenia | orzeczenie imienne, podmiot domyślny; wykresy w testach olimpijskich | — | ISTNIEJE |
| G13 | Związki wyrazowe | uczeń nazywa związek główny, zgody, rządu | związek przynależności | — | ISTNIEJE |
| G14 | Zdanie pojedyncze | uczeń odróżnia zdanie od równoważnika | zdania wielokrotnie rozwinięte | — | ISTNIEJE |
| G15 | Zdanie złożone współrzędnie | uczeń rozpoznaje typy współrzędności i stawia przecinek | wielokrotna współrzędność | — | ISTNIEJE |
| G16 | Zdanie złożone podrzędnie | uczeń rozpoznaje typy podrzędności i stawia przecinek | zdanie podrzędne w zdaniu podrzędnym | — | ISTNIEJE |
| G17 | Mowa zależna | uczeń przekształca mowę niezależną na zależną i odwrotnie | mowa zależna a cudzysłów | — | ISTNIEJE |
| **G18** | **Zdania wielokrotnie złożone i wykresy** | uczeń buduje wykres zdania wielokrotnie złożonego | analiza konstrukcji 3-zdaniowych — standard testu olimpijskiego | — | NOWA (treść częściowo w L009 — wydzielić) |
| **G19** | **Fleksja w zadaniach testowych — typologia pułapek** | uczeń rozpoznaje typowy błąd fleksyjny i go poprawia | bank pułapek konkursowych; format testu OLiJP | — | NOWA |
| **G20** | **Fonetyka: głoska, litera, sylaba, akcent** | uczeń różnicuje głoskę i literę oraz wskazuje akcent paradygmatyczny | uproszczenia grup spółgłoskowych; akcent w testach | — | NOWA (materiał powtórkowy W0–W1) |

### POL.03 S — środki stylistyczne i poetyka

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| S01 | Epitet i porównanie | uczeń rozpoznaje epitet i porównanie oraz nazywa ich funkcję | epitet stały | funkcja w interpretacji | ISTNIEJE |
| S02 | Przenośnia, ożywienie, uosobienie | uczeń odróżnia metaforę od porównania | metafora poetycka; interpretacja metafory | — | ISTNIEJE |
| S03 | Środki brzmieniowe i retoryczne (onomatopeje, apostrofa, pytanie retoryczne) | uczeń rozpoznaje środek i jego funkcję | instrumentacja głoskowa | — | ISTNIEJE |
| S04 | Powtórzenie, anafora, wyliczenie, kontrast | uczeń wskazuje środek budujący rytm i podkreślający treść | refren, paralelizm | — | ISTNIEJE |
| S05 | Neologizm, zdrobnienie, zgrubienie, archaizm | uczeń rozpoznaje słowotwórcze i leksykalne środki | neologizmy autorskie | — | ISTNIEJE |
| S06 | Hiperbola, ironia, symbol, alegoria | uczeń rozpoznaje środki znaczeniowe trudniejsze | ironia romantyczna | alegoria a parabola | ISTNIEJE |
| **S07** | **Środki obrazowania i rytmu: przerzutnia, inwersja, paralelizm, elipsa, pauza** | uczeń wskazuje środek i jego funkcję w wierszu | analiza rytmu (przygotowanie ustne olimpiady) | wymagane przez podstawę LO | NOWA |
| **S08** | **Retoryka i perswazja: środki retoryczne, apel, pointa** (właściciel teorii — konsumenci: B02, D07) | uczeń rozpoznaje środki perswazji w tekście | — | typy argumentów (właściciel dla B02) | NOWA |

### POL.04 D — kompetencje egzaminacyjne

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| D01 | Czytanie ze zrozumieniem tekstu nieliterackiego | uczeń wskazuje informację jawną i ukrytą | dwuznaczność pytania | — | ISTNIEJE |
| D02 | Fakt, opinia, teza, argument, przykład, wniosek | uczeń klasyfikuje elementy wypowiedzi | manipulacja a perswazja | teza a hipoteza | ISTNIEJE |
| D03 | Wnioskowanie i łączenie informacji | uczeń wyprowadza wniosek z przesłanek | dane z tabeli i diagramu | synteza wielu źródeł | ISTNIEJE |
| D04 | Odpowiedź pełnym zdaniem i uzasadnienie | uczeń odpowiada trafnie, kompletnie, jednoznacznie | odpowiedź na „dlaczego" | — | ISTNIEJE |
| D05 | Rozprawka — stanowisko, argumentacja, kompozycja | uczeń buduje rozprawkę z tezą, 2 argumentami, wnioskiem | kontrargument i polemika | rozprawka problemowa LO | ISTNIEJE |
| D06 | Opowiadanie twórcze | uczeń planuje i pisze opowiadanie ze spójną narracją | dialog i punkt widzenia | — | ISTNIEJE |
| D07 | Przemówienie | uczeń pisze przemówienie z celem i odbiorcą | środki perswazji (konsument S08) | retoryka | ISTNIEJE |
| D08 | List oficjalny | uczeń stosuje układ i rejestr formalny | e-mail urzędowy | — | ISTNIEJE |
| D09 | Krótkie formy użytkowe | uczeń redaguje ogłoszenie, zaproszenie, podziękowanie, życzenia | zaproszenie oficjalne | — | ISTNIEJE |
| D10 | Streszczenie i przekształcanie tekstu | uczeń streszcza tekst bez oceny | parafraza | parafraza poetycka | ISTNIEJE |
| D11 | Lektura jako dowód w odpowiedzi | uczeń popiera argument konkretną sytuacją z lektury | cytat i jego funkcja | — | ISTNIEJE |
| D12 | Kontrola języka, ortografii i interpunkcji | uczeń samodzielnie sprawdza i poprawia własny tekst | checklisty korekty | — | ISTNIEJE |
| D13 | Zadania przekrojowe i pułapki | uczeń rozwiązuje zadanie łączące kilka umiejętności | format konkursowy | — | ISTNIEJE |
| **D14** | **Teksty kultury: plakat, reprodukcja obrazu, film, instrukcja, schemat** | uczeń odczytuje komunikat wizualny i łączy go z tekstem | reklama i propaganda | tekst kultury w interpretacji LO | NOWA — E8 wprost sprawdza plakat/reprodukcję |
| **D15** | **Porównywanie tekstów (właściciel teorii — konsumenci: M04, B05)** | uczeń porównuje dwa teksty wg ustalonego schematu | liryka z liryką | interpretacja porównawcza (dokąd prowadzi most) | NOWA |
| **D16** | **Opis, charakterystyka i sprawozdanie — formy szkolne** | uczeń pisze opis, charakterystykę postaci i sprawozdanie z wydarzenia | charakterystyka bezpośrednia/pośrednia | — | NOWA — formy wymagane na sprawdzianach, nie wprost na E8 |

### POL.05 LEK7 — lektury klas VII–VIII (kanon wg informatora CKE; blok krytyczny)

Lektury całości: 6 pozycji; krótkie utwory i fragmenty: 5 autorów; liryka: wybór wierszy. Kolejność poniżej = sugerowana kolejność przerabiania. Uwaga: „Balladyna" znajduje się w wykazie informatora (2025); dokładnej daty wejścia do wykazu nie ustalano — spis opiera się na aktualnym stanie listy.

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| K01 | Biblia i mitologia jako kontekst kultury | uczeń rozpoznaje nawiązania biblijne i mitologiczne w tekstach | funkcja archetypu | kontekst kulturowy w interpretacji | NOWA — konteksty (nieegzaminacyjne wprost, potrzebne do rozprawki) |
| K02 | Jan Kochanowski — fraszki, pieśni, treny VII i VIII | uczeń odczytuje funkcję gatunku i wnioskuje o postawie podmiotu | humanizm i autobiografizm | liryka bezpośrednia | NOWA |
| K03 | Adam Mickiewicz — „Świtezianka", „Reduta Ordona" | uczeń rozpoznaje balladę oraz cechy poematu i wskazuje funkcję środka stylistycznego | romantyczna konwencja | kompozycja utworu | NOWA (sonety krymskie — wykreślone w 2024 — w materiale K15) |
| K04 | Adam Mickiewicz — „Dziady cz. II" | uczeń omawia problem winy i kary oraz rolę ludowości | kontekst biograficzny | problematyka winy i kary | NOWA |
| K05 | Adam Mickiewicz — „Pan Tadeusz" (księgi I, II, IV, X, XI, XII) | uczeń wskazuje wartości i konflikty świata szlacheckiego na podstawie wskazanych ksiąg | sarmatyzm; polowanie i koncert Wojskiego | epopeja jako gatunek | NOWA |
| K06 | Aleksander Fredro — „Zemsta" | uczeń analizuje konflikt, komizm i cechy komedii | typy komizmu | dramat jako rodzaj | NOWA |
| K07 | Juliusz Słowacki — „Balladyna" | uczeń śledzi degradację bohaterki i funkcję winy | komizm i groza; folklor | dramat romantyczny jako gatunek | NOWA |
| K08 | Charles Dickens — „Opowieść wigilijna" | uczeń omawia przemianę bohatera i funkcję fantastyki | konwencja opowiadania bożonarodzeniowego | — | NOWA |
| K09 | Antoine de Saint-Exupéry — „Mały Książę" | uczeń odczytuje przesłanie przez symbole i relacje bohatera | symbolika | alegoria i parabola | NOWA |
| K10 | Henryk Sienkiewicz — „Latarnik", „Quo vadis" (fragmenty) | uczeń wskazuje funkcję bohatera-ideału i pytanie o wartości | strategia „pokrzepienia serc" | nowela a powieść | NOWA |
| K11 | Stefan Żeromski — „Syzyfowe prace" (fragmenty) | uczeń omawia rusyfikację, opór i budzenie świadomości narodowej jako proces dojrzewania | kontekst zaborów | narracja pamiętnikarska (do potwierdzenia tekstem) | NOWA |
| K12 | Sławomir Mrożek — „Artysta" | uczeń interpretuje puentę i mechanizm absurdu | groteska | parabola współczesna | NOWA |
| K13 | Aleksander Kamiński — „Kamienie na szaniec" | uczeń omawia wzorzec wychowawczy i wybory moralne małego sabotażu | dokumentalizm | martyrologia i konspiracja | NOWA |
| K14 | Liryka VII–VIII — wiersze wskazane w podstawie (Baczyński, Herbert, Szymborska, Miłosz, Leśmian, Barańczak i inni; fraszki Sztaudyngera, aforyzmy Leca) | uczeń rozpoznaje temat i środek oraz buduje tezę interpretacyjną | 3 wiersze pogłębione; konteksty do interpretacji ustnej olimpiady | pełna procedura interpretacji (konsument M05) | NOWA — do priorytetu E8 (wiersz w każdym arkuszu) |
| K15 | Lektury wykreślone w 2024 (treny I i V, „Śmierć Pułkownika", „Żona modna", „Katarynka", „W pustyni i w puszczy", Wańkowicz, pozostałe księgi „Pana Tadeusza", sonety krymskie) | uczeń odwołuje się do utworu wykreślonego w wypracowaniu (dozwolone do 2028) | — | — | NOWA — zasób dodatkowy i przejściowy, nie obowiązkowy kanon |

### POL.06 LIT — teoria literatury i gatunki

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| L011 | Autor, narrator, podmiot liryczny, bohater · rodzaje literackie · morał/puenta/przesłanie | uczeń odróżnia autora od narratora i podmiotu lirycznego oraz rozpoznaje rodzaj literacki | zakres wiedzy narratora | podmiot liryczny a maska | ISTNIEJE — rdzeń bloku |
| **T01** | **Gatunki epickie: bajka, legenda, mit, opowiadanie, nowela, powieść, komiks** | uczeń rozpoznaje gatunek po zestawie cech | nowela a opowiadanie | konwencje powieści | NOWA (procedura rozpoznawania już w L011 — wydzielić) |
| **T02** | **Gatunki liryczne: fraszka, pieśń, tren, sonet, ballada, hymn** | uczeń przypisuje utwór do gatunku i wskazuje cechę | sonet jako forma; cykle liryczne | — | NOWA — spójna z K02–K03 |
| **T03** | **Gatunki dramatyczne: komedia, tragedia, dramat romantyczny** | uczeń rozpoznaje gatunek dramatyczny i jego cechy | komizm i groza | didaskalia i konwencja | NOWA — spójna z K06–K07 |
| **T04** | **Kompozycja i narracja: fabuła, punkt kulminacyjny, retardacja, narrator 1./3. os.** | uczeń opisuje porządek zdarzeń i typ narracji | in medias res, narracja ramowa | narracja pamiętnikarska i osobista | NOWA (częściowo w L011 — wydzielić) |
| L007 | Przegląd części mowy (synteza) | uczeń wybiera metodę rozpoznania części mowy | — | — | ISTNIEJE — funkcja POW |
| L008 | Części zdania (synteza) | uczeń uzasadnia funkcję wyrazu w zdaniu | — | — | ISTNIEJE — funkcja POW (po G12–G14) |
| L009 | Zdanie pojedyncze i złożone (synteza) | uczeń rozróżnia typy zdań i liczy zdania składowe | — | — | ISTNIEJE — funkcja POW (po G15–G16) |
| L010 | Środki stylistyczne (synteza) | uczeń dobiera środek do funkcji | — | — | ISTNIEJE — funkcja POW (scalona z S01–S06 w R05) |

### POL.07 JĘZ+ — słowotwórstwo, frazeologia, semantyka, leksyka, komunikacja

Uwaga metodologiczna: poniższe bloki mają dziś **brak samodzielnego modułu** w istniejących materiałach; szczegółowe pokrycie rozproszone w istniejących plikach nie zostało ustalone. Test językowy olimpiady klasy 8 wprost wymaga: poprawności, składni, fleksji, słowotwórstwa, frazeologii, semantyki, stylistyki.

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| **J01** | **Słowotwórstwo: rodziny wyrazów, formanty, złożenia** | uczeń buduje łańcuch słowotwórczy i nazywa formant | derywacja rzeczownikowa a przymiotnikowa; format zadań testowych olimpiady | — | NOWA |
| **J02** | **Frazeologia: frazeologizmy, przysłowia i ich funkcja** | uczeń wyjaśnia znaczenie frazeologizmu i używa go w wypowiedzi | frazeologia biblijna i mitologiczna; frazeologia w testach | — | NOWA — E8 wprost daje zadania na przysłowia/frazeologizmy |
| **J03** | **Semantyka i leksyka: polisemia, homonimy, synonimy, antonimy, pola semantyczne** | uczeń rozróżnia typy znaczeń i dobiera wyraz do kontekstu | konotacja i denotacja; semantyka w testach | — | NOWA |
| **J04** | **Kultura języka: norma wzorcowa i użytkowa, błędy, samokształcenie ze słowników** | uczeń poprawia zdanie z błędem i uzasadnia poprawkę | norma a uzus | kultura wypowiedzi LO | NOWA — rozwinięcie sekcji „Poprawna polszczyzna" z L001–L006 |
| **J05** | **Etymologia, zapożyczenia, neologizmy, mody językowe** | uczeń śledzi historię wyrazu i odróżnia neologizm od żargonu | internacjonalizmy; etymologia w testach | — | NOWA |
| **J06** | **Komunikacja językowa i odmiany polszczyzny** | uczeń rozróżnia odmiany terytorialne i środowiskowe oraz dostosuje wypowiedź do sytuacji | skróty językowe i emocjonalne | funkcje językowe (pomost LO) | NOWA |

### POL.08 POP — ortografia i interpunkcja (zasady od 1.01.2026)

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| **P01** | **Pisownia „nie" z częściami mowy (zasady 2026)** | uczeń poprawnie pisze „nie" z każdą częścią mowy | „nie" w utrwalonych połączeniach | — | NOWA — skonsolidować rozproszone fragmenty (L001, G03, G06, G10) |
| **P02** | **Nowe zasady RJP 2026 — kompendium zmian** | uczeń stosuje nowe zasady (wielka/mała litera, -by ze spójnikami, „pół-", pary typu „tuż-tuż") | dwie normy w tekstach sprzed 2026 | — | NOWA — L001 już ma aktualizację dla imiesłowów; zebrać całość |
| **P03** | **Przecinek: zdanie złożone, imiesłowy, „który", wyliczenia** | uczeń stawia przecinek zgodnie z regułą i uzasadnia | przypadki dwuznaczne | — | NOWA — skonsolidować G15–G17 + G06 + L003 |
| **P04** | **Znaki inne niż przecinek: dwukropek, średnik, cudzysłów, myślnik, wielokropek** | uczeń dobiera znak do funkcji | cudzysłów a mowa zależna | znaki w tekście argumentacyjnym | NOWA |

### POL.09 MOT — motywy, konteksty, porównania, interpretacja

| Kod | Lekcja | W1 — rdzeń (cel) | W2 — konkurs | W3 — pomost LO | Status |
|---|---|---|---|---|---|
| **M01** | **Mapa motywów literackich (przyjaźń, miłość, dom, wolność, ojczyzna, dorastanie, dobro i zło, wina i kara)** | uczeń przyporządkowuje lekturę do motywu i porównuje ujęcia | motyw w dwóch epokach; motyw jako temat rozprawki olimpijskiej | — | NOWA — rozwinięcie „map motywów" z L001–L006 |
| **M02** | **Bohater: typologie (główny/drugoplanowy, dynamiczny/statyczny, bohater zbiorowy)** | uczeń klasyfikuje bohatera i uzasadnia przykładem | bohater zbiorowy w „Kamieniach" | bohater w epice LO | NOWA — częściowo w L001, wydzielić |
| **M03** | **Konteksty: biblijny, mitologiczny, historyczny, biograficzny** | uczeń dobiera kontekst do tekstu | kontekst kulturowy; olimpiada wprost ocenia pracę kontekstami | — | NOWA |
| **M04** | **Porównywanie tekstów i tekstów kultury** | uczeń porównuje wg schematu z D15 | liryka z filmem | tekst + przekaz wizualny | NOWA — ćwiczeniowa (teoria w D15) |
| **M05** | **Interpretacja liryki: od podmiotu lirycznego do tezy interpretacyjnej (właściciel procedury)** | uczeń buduje tezę interpretacyjną i uzasadnia środkami z tekstu | kontekst w interpretacji; przygotowanie ustne olimpiady | format LO (B03 — warsztat) | NOWA |
| **M06** | **Epoki i konteksty historycznoliterackie w pigułce** | uczeń lokalizuje utwór w epoce | epoka a konwencja; konteksty dla olimpiady | konteksty dla LO | NOWA — SP nie wymaga epok, konkurs i pomost tak |

### POL.10 POW — powtórki, diagnostyka, symulacje

| Kod | Lekcja | W1 — rdzeń | Status |
|---|---|---|---|
| **R01** | **Powtórka lektur IV–VI (zadania na fragmencie, w stylu E8)** | uczeń rozwiązuje zadania na tekście | NOWA |
| **R02** | **Powtórka lektur VII–VIII cz. 1 (Kochanowski — Mickiewicz)** | uczeń odtwarza i porównuje treści | NOWA |
| **R03** | **Powtórka lektur VII–VIII cz. 2 (Fredro — Kamiński)** | uczeń odtwarza i porównuje treści | NOWA |
| **R04** | **Powtórka gramatyki i składni (synteza L007–L009)** | uczeń rozwiązuje zadania gramatyczne na czas | NOWA |
| **R05** | **Powtórka środków stylistycznych i gatunków (synteza L010)** | uczeń rozpoznaje środek i gatunek | NOWA |
| **R06** | **Powtórka czytania i pisania (synteza bloku D)** | uczeń pisze wypracowanie na czas | NOWA |
| **R07** | **Arkusz próbny E8 — symulacja 150 min + omówienie** | uczeń zdaje próbny egzamin | NOWA |
| **R08** | **Diagnostyka i mapa kompetencji (start roku i po każdej powtórce)** | uczeń zna swoje luki i plan naprawczy | NOWA |

### POL.11 POMOST — rozszerzenia do LO + warsztat konkursowy

| Kod | Lekcja | Warstwa | Zakres | Status |
|---|---|---|---|---|
| **B01** | **Od rozprawki E8 do wypowiedzi argumentacyjnej LO** | W3 | teza, argumenty, wniosek w formacie LO; notatka syntetyzująca, definicja, referat | NOWA |
| **B02** | **Retoryka i erystyka: typy argumentów, demagogia, etyka sporu** | W3 (teoria w S08) | erystyka, ad personam, dyskusja a spór | NOWA |
| **B03** | **Interpretacja utworu poetyckiego w formacie LO** | W3 (teoria w M05) | pisanie interpretacji, kryteria oceny | NOWA |
| **B04** | **Analiza epiki i dramatu na poziomie LO** | W3 | fragment i całość, kontekst epoki (M06) | NOWA |
| **B05** | **Esej, felieton, reportaż, interpretacja porównawcza** | W3 (teoria w D15) | warsztat form rozszerzenia LO | NOWA |
| **B06** | **Warsztat olimpiady klasy 8 I: rozprawka olimpijska (poziom celujący)** | W2 | praca na ogłoszony temat, dyspozycje Komitetu | NOWA — aktualizować względem edycji roku |
| **B07** | **Warsztat olimpiady klasy 8 II: test językowy + interpretacja ustna wiersza** | W2 | strategia testu, rozmowa z jury, dialog | NOWA — aktualizować względem edycji roku |
| **B08** | **Przewodnik po kanonie LO (opcjonalny)** | W3 | mapa lektur licealnych i jak je czytać efektywnie | NOWA — pomost, nie pełny kurs maturalny |

---

## 4. Macierz wymagań podstawy SP → lekcje

Obszary wymagania (podstawa 2024, klasy VII–VIII, syntetycznie) i ich pokrycie w spisie:

| Obszar wymagania | Lekcje/warstwy | Uwagi |
|---|---|---|
| Czytanie i odbiór tekstów kultury (w tym dane, plakat, reprodukcja) | D01, D03, D14 | D14 nowa — luka realna |
| Argumentacja i stanowisko własne | D02, D04, D05, B01–B02 (W3) | |
| Formy pisemne: opowiadanie, opis, charakterystyka, sprawozdanie, streszczenie, rozprawka, przemówienie, list, krótkie formy | D05–D10, D16 | D16 nowa — formy szkolne |
| Fleksja i składnia | G01–G19 | G18–G19 nowe |
| Fonetyka | G20 | nowa, powtórkowa |
| Ortografia i interpunkcja | P01–P04, D12 | POP nowy blok (w tym zasady 2026) |
| Słowotwórstwo | J01 | nowa — brak samodzielnego modułu |
| Znaczenie słów i frazeologia | J02–J03 | nowe — brak samodzielnego modułu |
| Komunikacja, odmiany języka, kultura języka, samokształcenie | J04, J06 | nowe |
| Literatura: rodzaje, gatunki, kompozycja, narracja | L011, T01–T04 | T nowe — systematyczny moduł gatunków |
| Środki stylistyczne i poetyka | S01–S08 | S07–S08 nowe |
| Lektury obowiązkowe VII–VIII | K01–K15 | blok krytyczny |
| Samokształcenie: słowniki, zbieranie i porządkowanie informacji | J04, D12 | oznaczyć w obu lekcjach jako wymaganie wprost |

---

## 5. Kolejność dydaktyczna (ścieżki przerabiania)

Katalog z sekcji 2–4 to porządek spisu; poniżej kolejność nauki. Zasady: przeplatać język, lekturę, pisanie; argumentacja zaczyna się od krótkich uzasadnień (D04), nie od rozprawki; składnia zawsze z interpunkcją; syntezy (L007–L010) dopiero po modułach źródłowych.

### Rok 1 — klasa 7

| Krok | Moduł | Uwagi |
|---|---|---|
| 1 | R08 Diagnostyka startowa + D01 Czytanie ze zrozumieniem | baseline, mapa kompetencji |
| 2 | D04 Odpowiedź pełnym zdaniem | kultura odpowiedzi od początku |
| 3 | L001–L006 Powtórka lektur IV–VI (W0) + G01–G02 + G20 Fonetyka | lektura jako tekst do ćwiczeń gramatycznych |
| 4 | L011 Autor/narrator/podmiot liryczny + T04 Kompozycja i narracja | fundament teorii przed lekturami |
| 5 | K01 Biblia i mitologia (kontekst) | przed Kochanowskim i Mickiewiczem |
| 6 | K02 Kochanowski + T02 Gatunki liryczne + S01–S02 | treny VII–VIII jako lektura egzaminacyjna |
| 7 | G03–G05 Przymiotnik, liczebnik, zaimek | |
| 8 | K03 Mickiewicz — „Świtezianka", „Reduta Ordona" + S04 | |
| 9 | D02 Fakt, opinia, teza, argument + D06 Opowiadanie twórcze | pisanie twórcze wcześnie, nie na koniec |
| 10 | K04 Dziady cz. II + S03, S06 | |
| 11 | G06 Imiesłowy + G07–G11 Nieodmienne części mowy | imiesłowy PO czasowniku i przymiotniku |
| 12 | G12–G14 Części zdania, związki, zdanie pojedyncze + P03 Przecinek | |
| 13 | G15–G16 Zdanie złożone + P03/P04 Interpunkcja | |
| 14 | L008–L009 Syntezy części zdania i zdań złożonych + G17 Mowa zależna | synteza PO modułach G |
| 15 | K06 Zemsta + T03 Gatunki dramatyczne | |
| 16 | D09 Krótkie formy użytkowe + J03 Semantyka | |
| 17 | R04 Powtórka gramatyki i składni (koniec roku) | checkpoint |

### Rok 2 — klasa 8 (cel: E8)

| Krok | Moduł | Uwagi |
|---|---|---|
| 1 | D03 Wnioskowanie + D05 Rozprawka | rozprawka od początku roku 8 |
| 2 | K05 Pan Tadeusz (wskazane księgi) + S05–S06 | największa luka treściowa |
| 3 | K07 Balladyna + T03 | |
| 4 | K08 Opowieść wigilijna + K09 Mały Książę | |
| 5 | K10 Sienkiewicz + K11 Żeromski + K12 Mrożek | |
| 6 | K13 Kamienie na szaniec + D11 Lektura jako dowód | |
| 7 | K14 Liryka VII–VIII + M05 Interpretacja liryki (W2) | wiersz w każdym arkuszu — priorytet |
| 8 | D07 Przemówienie + D08 List + D10 Streszczenie | formy wypowiedzi E8 |
| 9 | J01 Słowotwórstwo + J02 Frazeologia + P01–P02 Ortografia 2026 | |
| 10 | D12 Kontrola języka + P04 Interpunkcja — znaki | |
| 11 | D13 Zadania przekrojowe + D14 Teksty kultury | plakat/reprodukcja |
| 12 | R01–R06 Powtórki tematyczne | styczeń–marzec |
| 13 | R07 Arkusz próbny E8 + R08 Diagnostyka końcowa | kwiecień |

### Po E8 — pomost LO (lato po klasie 8 i pierwszy rok LO; tylko rozszerzenia)

B01 → B02 + S07–S08 → B03 + M05 (pogłębienie) → B04 → D15 + M04 → B05 → (opcjonalnie) B08 + K15.

### KONKURS — profil olimpijski klasy 8 (warstwa W2, równolegle od klasy 8)

Włączane treści W2 w: K02–K14 (pogłębiona problematyka lektur), J01–J06 (test językowy), G18–G20, M01–M03, M05, T02, B06–B07. Wejście: po R08 diagnostyce; minimalna baza: D01–D05, K02–K07, G01–G17. Corocznie zweryfikować listę lektur i zagadnienia Komitetu Głównego (olijp.pl). Warstwa konkursowa nie wymusza pomostu LO (W3).

---

## 6. Mapowanie: istniejące 47 lekcji → nowy spis

| Istnieje | Przeznaczenie w v2 | Status |
|---|---|---|
| L001–L006 | LEK4 (W0) + ćwiczenia gramatyczne wyprowadzone do G | ADAPTACJA — rozdzielić lekturę od gramatyki |
| L007–L009 | Syntezy w POW (R04, R06) — po modułach G, nie równolegle | PRZEKONWERTOWAĆ NA POWTÓRKI |
| L010 | Scalony z S01–S06 (sekcja teorii) + R05 | SCALIĆ |
| L011 | Rdzeń bloku LIT (rozbudowa o T01–T04) | ISTNIEJE — rozbudować |
| G01–G17 | Blok G bez zmian + dopisać W2/W3 | ISTNIEJE |
| S01–S06 | Blok S + dopisać W2/W3 | ISTNIEJE |
| D01–D13 | Blok D bez zmian + dopisać W2/W3 | ISTNIEJE |
| — | K01–K15, T01–T04, J01–J06, P01–P04, M01–M06, R01–R08, B01–B08, G18–G20, S07–S08, D14–D16 | NOWE (59 lekcji) |

Tematy mapy POL-01…39 (z SPIS_WSZYSTKICH): po wdrożeniu v2 **zaplanowano przypisanie** wszystkich 39 tematów (m.in. POL-10 podmiot liryczny → L011+M05; POL-18 gatunki → T01–T03; POL-22 słowotwórstwo → J01; POL-23 frazeologia → J02; POL-24 semantyka → J03; POL-25/26 ortografia i interpunkcja → P01–P04; POL-28 lektury → K01–K15; POL-29 motywy → M01; POL-30 konteksty → M03; POL-32 interpretacja → M05; POL-34 esej → B05). Plan przypisania nie jest potwierdzeniem wykonania — pokrycie weryfikować po produkcji.

### Priorytety produkcji (kolejność tworzenia nowych lekcji)

1. **K02–K14 + T01–T03** — lektury VII–VIII i gatunki (bez nich nie ma kursu E8); K14 i M05 (podstawowa interpretacja poezji) w tym priorytecie.
2. **R01–R08** — powtórki i symulacja (szybki zwrot przed majem).
3. **J01–J03 + P01–P04 + D16** — bloki językowe i formy szkolne (E8 + test olimpiady).
4. **D14, M01–M02, T04, G20, J04–J06** — uzupełnienie kompetencji i wymagań podstawy.
5. **B01–B08, S07–S08, D15, M03–M04, M06, G18–G19, K15** — warstwa W3 (pomost LO) i pogłębienia konkursowe W2.

---

## 7. Źródła

- Informator CKE o egzaminie ósmoklasisty z języka polskiego (od roku szkolnego 2024/2025; lektury, struktura egzaminu, zasada fragmentu dla IV–VI): https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Informatory/2025/standard/Informator_E8_polski_2025_P1.pdf
- Zmiany w podstawie programowej 2024 — język polski SP (GWO, zestawienie z wykazami lektur): https://gwo.pl/nowa-podstawa-programowa-do-jezyka-polskiego-sp-zmiany/
- Uszczuplone podstawy programowe — rozporządzenia podpisane (MEN, 28.06.2024): https://www.gov.pl/web/edukacja/uszczuplone-podstawy-programowe--rozporzadzenia-podpisane
- Nowe zasady ortografii i interpunkcji od 1.01.2026 (RJP, komunikacja UW Pomorski): https://www.gov.pl/web/uw-pomorski/od-1-stycznia-2026-r---ortografia-i-interpunkcja-po-nowemu
- Regulamin OLiJP-SP 2025/2026: https://ilij.ujk.edu.pl/wp-content/uploads/2025/09/Regulamin-OLIJP-SP_2025-2026-1.pdf
- OLiJP 2026/2027 — przebieg zawodów i wymagania: https://zso2bialystok.pl/aktualnosci/olimpiada-literatury-i-jezyka-polskiego-2026-2027 (oficjalnie: olijp.pl)
- Podstawa programowa — język polski, szkoła ponadpodstawowa (ZPE): https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/jezyk-polski
- Reforma26 — harmonogram wdrożenia nowych podstaw i egzaminów: https://reforma26.men.gov.pl/najczesciej-zadawane-pytania/ oraz https://www.gov.pl/web/edukacja/nowe-podstawy-programowe-wychowania-przedszkolnego-i-ksztalcenia-ogolnego-dla-szkoly-podstawowej-wraz-ze-zmianami-w-ramowych-planach-nauczania-dla-publicznych-szkol-podstawowych--rozporzadzenia-podpisane
- Lektury do egzaminu ósmoklasisty (Wolne Lektury): https://wolnelektury.pl/katalog/lektury/lektury-do-egzaminu-osmoklasisty/

Dokument v2. Numeracja kodów stabilna — stare kody pozostają jako odwołania migracyjne. Przed produkcją każdego rocznika: sprawdzić aktualny informator CKE (E8), coroczną listę OLiJP oraz postęp wdrożenia Reformy26 (zmieniony egzamin dopiero od 2031).
