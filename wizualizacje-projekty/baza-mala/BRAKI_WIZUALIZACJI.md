# Braki wizualizacji — co mamy, czego brakuje, czego oczekujemy

Stan: 2026-10-14. Sprawdzono: wszystkie 191 lekcji (md) oraz biblioteki w tej paczce (`klocki/`, `gfx/`, `biblioteki/`). Spis tego, co już istnieje, jest w `KATALOG_KLOCKOW.md`.

Lista obejmuje 30 pozycji z poprzedniego przeglądu. Przy sprawdzaniu część pozycji się zmieniła (patrz §6), więc tabele są już po korekcie.

## 0. Aktualizacja 2026-10-14 — osadzanie istniejących wizualizacji

Zasada tej rundy: osadzać tylko wizualizacje już napisane pod konkretną lekcję, lekkie (silnik lite i klocki) i bez zbędnych.

**Osadzone i sprawdzone** (HTML przebudowany, test w Chromium: wszystkie figury się rysują, 0 błędów JS):

- CHE.01.F06 układ okresowy: klocek `uklad-okresowy` w sekcji „Układ okresowy jako mapa”.
- CHE.01.F07 konfiguracja elektronowa: klocek `palniki {seria="plomien"}` w sekcji „Doświadczenie v16 — barwienie płomienia”.
- CHE.02.N03 wodorotlenki: klocek `probowki` (Mg, Ca, Na z wodą) w sekcji „3. Doświadczenie model”.
- BIO.01.L004 organizacja budowy: `lancuch` (siedem poziomów) w sekcji 10.

**Już osadzone wcześniej (sprawdzone, nic nie trzeba):** BIO L005, L011, L017–L020, L041 (`transport-blona`, `kod-genetyczny`, `punnett`, `siec-troficzna`); BIO L042 (`relacje-ekologiczne`, sekcja 6); BIO L010 (12 grafik, patrz niżej); CHE R03A (`r03-krzyz-v01`) i F17 (`f17-bilans-v01`) w ścieżce lite.

**Nie osadzone, z powodem:**

- POL.01.L008 `wykres-zdania` i POL.01.L009 `wykres-zlozonego`: klocki są przypisane do G12 i G15, nie do L008 i L009. Osadzenie to nowe przypisanie, więc do decyzji autora.
- CHE F09 `f09-trzy-liczby-v01`, F10 `f10-energia-h2-v01`, F15 `f15-dipol-v01`: dedykowane i lekkie, ale ich lekcje są w kanonicznym buildzie (`lekcja_html.py`), który nie obsługuje `@model`. Ścieżka lite działa tylko dla lekcji z `lessons-md/gotowe`, a tam tych lekcji nie ma. Potrzebne: wersja lekcji w `gotowe` albo obsługa lite w buildzie kanonicznym.
- CHE N01 `palenie`: klocek dotyczy spalania Mg, Na i K, a lekcja N01 dotyczy powietrza i gazów. Brak wspólnego tematu.
- CHE LAB `znaki`: w lekcji LAB nie ma tematu znaków ostrzegawczych.
- BIO L001 `komorka`: nie jest zbudowana (w bibliotece jest `komorka-nakladki`), więc nie była „już napisana”.

**Duplikat L010 do decyzji.** Są dwie wersje lekcji:

- `okladki/biologia/md/BIO.02.L010.dna_od_zera.md`: 66 KB, 12 grafik, audyt W1 z 2026-10-12. To wersja aktualna, ale nie leży w źródłach buildu BIO (`zbuduj_wszystkie.py`).
- `biologia/md/BIO.02.L010.genetyka_i_dna_od_zera.md`: 24 KB, 1 grafika, bez audytu. Kopia starsza, nadal budowana do `biologia/html/`.

Nie usuwałem żadnej z nich. Decyzja: którą wersję uznać za kanon i czy usunąć drugą.



| Działanie | Co znaczy |
|---|---|
| **OSADZIĆ** | Klocek już istnieje w bazie i jest użyty w innej lekcji. Trzeba go tylko dołączyć w tym miejscu (`@viz` / `@model`). |
| **ROZSZERZYĆ** | Klocek istnieje, ale brakuje w nim jednego elementu (np. wielkości z lekcji). |
| **ZBUDOWAĆ** | Nowy klocek do biblioteki (komponent wielokrotnego użytku + wpis w katalogu). |
| **OPIS** | Grafika nie jest potrzebna, ale `@opis` jest ogólnikowy albo jest błędny. Trzeba go napisać konkretnie. |
| **DECYZJA** | Autor lekcji świadomie zrezygnował z grafiki. Zmiana wymaga decyzji autora. |
| **BEZ ZMIAN** | Fałszywy alarm: w tekście nie ma grafiki do zrobienia. |

## Podsumowanie

| Działanie | Liczba (z 30) |
|---|---|
| OSADZIĆ | 6 |
| ROZSZERZYĆ | 2 |
| ZBUDOWAĆ | 16 |
| OPIS | 2 (+1 dodatkowa lekcja, §5) |
| DECYZJA | 1 |
| BEZ ZMIAN | 3 |

## 1. Polski — opisy są, grafik nie ma (ZBUDOWAĆ)

W tych ośmiu lekcjach `@opis` opisuje grafikę, ale nie ma ani `@viz`, ani pliku obrazu. W dzienniku lekcji G07 jest zapis, że grafiki są „propozycjami bez kodów `@viz`”. Pozostałe mają ten sam wzorzec. Propozycja: jeden wspólny klocek `schemat-pola` w `pol-viz.js` (pola-prostokąty, strzałki, kolor kategorii, klik → wyjaśnienie), który pokryje większość z nich. Tabele (siatki, kolumny) to osobne, proste klocki.

| Lekcja | Co brakuje | Oczekiwania (wg `@opis` w lekcji) | Działanie |
|---|---|---|---|
| POL.02.G04 liczebnik | Dwie grafiki | (1) siatka 6 przypadków × 3 rodzaje, wyróżnione formy z częstymi błędami; (2) trzy ścieżki „2–4 → mianownik”, „5 i więcej → dopełniacz”, „dwoje, troje → dopełniacz”, przy każdej przykład zdania. Wniosek: liczebnik decyduje o przypadku rzeczownika. | ZBUDOWAĆ (siatka + ścieżki) |
| POL.02.G05 zaimek | Dwie grafiki | (1) „ZAIMEK” w środku, cztery strzałki do pól: rzeczownik, przymiotnik, liczebnik, przysłówek; (2) strzałka od „swój” wraca do podmiotu, od „jej” wychodzi poza zdanie. Wniosek: „swój” wskazuje podmiot, „jego/jej” kogoś innego. | ZBUDOWAĆ |
| POL.02.G06 imiesłowy | Dwie grafiki | (1) pień „czytać/przeczytać” rozgałęziony: przymiotnikowe (-ący, -ny/-ony/-ty) i przysłówkowe (-ąc, -wszy); (2) dwa zdania, strzałka od „Idąc” do podmiotu; w jednym trafia, w drugim nie („deszcz nie idzie”). Wniosek: wykonawca imiesłowu musi być podmiotem. | ZBUDOWAĆ |
| POL.02.G07 przysłówek | Cztery grafiki (4 z 4) | (1) dwie karty: przymiotnik → rzeczownik vs przysłówek → czasownik; (2) dwie kolumny „łącznie” / „rozdzielnie” z przykładami i paskiem „nie + przysłówek odprzymiotnikowy = łącznie”; (3) oś stopniowania „równy–wyższy–najwyższy” z czterema torami, jeden tor kończy się znakiem stopu; (4) drzewko decyzyjne dla „nie + przysłówek”. | ZBUDOWAĆ (4 grafiki; (4) może być klockiem `schemat-pola`) |
| POL.02.G08 przyimek | Dwie grafiki | (1) pudełko i osiem kotków: w, na, pod, nad, za, przed, obok, między — z podpisami przypadków; (2) pięć kolumn przypadków z przyimkami w dwóch kolumnach (dokąd? / gdzie?). Wniosek: o przypadku decyduje przyimek i znaczenie. | ZBUDOWAĆ |
| POL.02.G09 spójnik | Dwie grafiki | (1) sygnalizator: zielona kolumna „STAW PRZECINEK” (przeciwstawne, wynikowe, podrzędne), czerwona „BEZ PRZECINKA” (łączne, rozłączne); (2) lewy: „więc” między dwoma prostokątami; prawy: „Zostaliśmy” ↓ „bo padało” z pytaniem „dlaczego?”. | ZBUDOWAĆ |
| POL.02.G10 partykuła | Dwie grafiki | (1) zdanie „Łucja wróciła.” w środku, sześć kafelków z partykułą, pod każdym etykieta funkcji (pytanie, przeczenie, wzmocnienie, ograniczenie, życzenie, ocena); (2) osiem wierszy części mowy, kolumna „pisownia” zabarwiona zielono/niebiesko. Wniosek: partykuła nie dodaje treści, zmienia funkcję zdania. | ZBUDOWAĆ |
| POL.02.G11 wykrzyknik | Dwie grafiki | (1) trzy dymki z ikonami serca, megafonu, nuty, w każdym po trzy wykrzykniki, pod nimi „nieodmienne, często samodzielne zdanie”; (2) „o” połączone łukiem z wołaczem „ojczyzno”, bez przecinka; po „O” czerwony przecinek i etykieta „wykrzyknik zdziwienia”. | ZBUDOWAĆ |

## 2. Biologia

| Lekcja | Co brakuje | Oczekiwania / stan | Działanie |
|---|---|---|---|
| BIO.01.L003 diagnoza | Grafika „Mapa dalszej nauki” | Schemat blokowy: Etap 1 DIAGNOZA (startowa) rozgałęziony na luki (DNA → L001 + L011; 46/23 → L012; gamety/płeć → L002 + L015 + L018) i Etap 2 „strefa”. Już jest narysowany jako tekstowy blok `step-flow` (HTML). Brakuje czytelnego rysunku i konkretnego `@opis` (obecny to powtórzenie tekstu). | OPIS (grafika opcjonalna, niski priorytet) |
| BIO.01.L004 organizacja budowy | Jedna z dwóch grafik | Łańcuch komórka → tkanka → narząd → układ narządów → organizm. Jest już `@viz lancuch` (linia 35). Druga grafika (linia 211, „pięć poziomów”) to ten sam wzorzec. Propozycja: osadzić `od-organizmu-do-genu` (wariant „w górę”) albo potwierdzić, że `lancuch` wystarcza. | ZROBIONE 2026-10-14: `lancuch` (siedem poziomów) w sekcji 10 |
| BIO.02.L015 mejoza | Dwie grafiki bez konkretnego opisu | (1) komórka 2n = 46 (dwie pary homologów: czerwone od matki, niebieskie od ojca; chromosom z dwiema chromatydami); (2) łańcuch: 2n → replikacja (92 chromatydy) → mejoza I → mejoza II → 4 gamety n = 23 → zapłodnienie. Są już `@viz podzial-komorki` i `@viz lancuch`; dwie linie `@opis` są ogólne (`Schemat z lekcji; elementy: …`). | OPIS (napisać konkretnie) |

## 3. Chemia

| Lekcja | Co brakuje | Oczekiwania (wg lekcji) | Działanie |
|---|---|---|---|
| R02 rozpuszczalność | Wykres rozpuszczalności w funkcji temperatury | Oś pozioma T 0–100 °C; oś pionowa g substancji na 100 g wody; krzywa KNO₃ stromo rosnąca i inne z lekcji. Rysunek poglądowy, bez odczytu co do grama. Punkt (T, m) na krzywej = roztwór nasycony. Klocek do użycia także w LKO_KRZYWE. Istniejący `tabela-rozpuszczalnosci-v01` to tabela 20 °C, nie wykres. | ZBUDOWAĆ `krzywe-rozpuszczalnosci` |
| R04 mol–masa molowa | Trójkąt przeliczeń | Szczyt: masa m [g]; lewy dół: liczba moli n; prawy dół: liczba cząstek N. Strzałki z działaniami: m → n: ÷ M; n → m: × M; n → N: × N_A. Kliknięcie w bok pokazuje wzór i przykład. `stech-kalkulator-v01` to kalkulator, nie trójkąt. | ZBUDOWAĆ `trojkat-przeliczen` (mały, statyczny + klik) |
| N07 systematyka nieorganicznej | Diagram przepływów między klasami (tylko ASCII) | Mapa: metal → tlenek zasadowy → wodorotlenek; niemetal → tlenek kwasowy → kwas; wodorotlenek + kwas → sól + woda (zobojętnianie); tlenek + woda. Istniejący `chain-scn` pokazuje łańcuch pierwiastek → tlenek → kwas → sól — wystarczy go rozszerzyć o klasy i zobojętnianie. | ROZSZERZYĆ `chain-scn` |

## 4. Pozostałe (angielski, olimpiada, poprawki w polskim)

| Lekcja | Co brakuje | Oczekiwania (wg lekcji) | Działanie |
|---|---|---|---|
| ANG.01.L002 operatory i czasowniki posiłkowe | Schemat decyzyjny („55. Schemat decyzyjny”) | Krok 1: znajdź czasownik i określ czas; kolejne kroki: pytanie / przeczenie / twierdzenie z posiłkowym. Lista kroków już jest. Biblioteka ANG w bazie nie istnieje. Priorytet niski. | ZBUDOWAĆ (niski priorytet; lista może zostać) |
| CHE K01 energia reakcji | Wykres energetyczny (sekcja 2) | Osie: przebieg reakcji i energia. Poziomy substratów i produktów, ΔE (różnica), Ea (bariera). Istniejący `energy-profile` pokazuje egzo/endo; trzeba sprawdzić, czy ma Ea. | ROZSZERZYĆ `energy-profile` o Ea (po weryfikacji klocka) |
| CHE K03 kalorymetria | Wykres ogrzewania (sekcja 2) | Oś pozioma: dostarczone ciepło Q; oś pionowa: temperatura T. Odcinki pochyłe (ogrzewanie cieczy i pary) i poziome (topnienie, wrzenie — stała T mimo dopływu ciepła). Klik w odcinek = wyjaśnienie. Przykład z lekcji. Istniejący `heating` to scena naczynia bez wykresu. | ZBUDOWAĆ `krzywa-ogrzewania` |
| CHE LKO_KRZYWE krzywe rozpuszczalności | Trzy strefy wykresu | Ten sam wykres co R02 (oś T, oś m). Trzy strefy dla ustalonej T: nienasycony (pod krzywą), nasycony (na krzywej), przesycony (nad krzywą). Punkt (T, m) klikany → przypisanie strefy. | ZBUDOWAĆ `krzywe-rozpuszczalnosci` (wspólny z R02) |
| CHE N06 wodorki | Rysunek budowy NH₃ („jeden rysunek wyjaśnia wszystko”) | Wzór Lewisa NH₃: N w środku, trzy kreski do H, jedna para wolna (boczna para kropek). Istniejący `molecule-2d` (wiązania, kąty, wolne pary) pokrywa to. | OSADZIĆ `molecule-2d` (NH₃) |
| CHE OLI.CHE.X04 szereg aktywności | Schemat doświadczenia („pełny schemat”) | Trzy probówki z Mg, Zn, Cu i kwasem solnym, ponumerowane; obserwacja wydzielania gazu. Istniejący `probowki.js` (statyw z probówkami, 1–4 metale) pasuje. Do potwierdzenia z autorem: czy kwas i kolejność metali zgadzają się z lekcją. | OSADZIĆ `probowki.js` (do potwierdzenia) |
| POL.01.L002 hobbit / nieodmienne | Schemat budowy rozprawki | Trzy pola: Wstęp (teza, 2–3 zdania) → Rozwinięcie (argumenty z przykładami) → Zakończenie (wniosek, nawiązanie do tezy). Strzałka od tezy do zakończenia. | ZBUDOWAĆ `schemat-pola` |
| POL.01.L008 części zdania | „Wykres zdania” (§9) i „Wizualizacja zależności” (§16) | Wykres zdania: „Wczoraj uczniowie przeczytali ciekawy tekst w bibliotece.” z podporządkowaniem. Klocek `wykres-zdania` istnieje i działa w G12 (zdania z lektur). Brakuje osadzenia; zdanie z L008 trzeba dodać do klocka albo wybrać jedno z 12 zdań. | DO DECYZJI: `wykres-zdania` jest przypisany do G12 (§0) |
| POL.01.L009 zdania złożone | „Wykres — pokaż relację” (§8) | Zdanie współrzędne: części na jednym poziomie ze spójnikiem między nimi. Klocek `wykres-zlozonego` istnieje (G15). Brakuje osadzenia w L009 z przykładem z lekcji. | DO DECYZJI: `wykres-zlozonego` jest przypisany do G15 (§0) |
| POL.01.L010 środki stylistyczne | „Wizualizacja i powiązania” (§19) | Mapa trzech pól dla każdego środka: definicja — przykład — funkcja. Linie łączą pary łatwo mylone (epitet/porównanie, metafora/porównanie, ożywienie/uosobienie, powtórzenie/anafora, symbol …). | ZBUDOWAĆ `schemat-pola` (mapa par) |
| POL.02.G02 czasownik | „Schematy do zapamiętania” (§18) | To lista reguł (aspekt, strona, tryb), a nie schemat. | BEZ ZMIAN |
| POL.02.G16 zdania podrzędne | „Wykres” (§7) | Wykres zdania podrzędnego: nadrzędne 1, podrzędne 1a, strzałka z pytaniem „kiedy?”. Klocek `wykres-zlozonego` istnieje. Dziennik lekcji (linia 227): „grafika niepotrzebna; wykres opisany w §7 słownie”. To świadoma decyzja autora. | DECYZJA (przywrócić tylko za zgodą autora) |
| POL.04.D01 czytanie ze zrozumieniem | „Ilustracja lub wykres” (§11) | To poradnik, jak czytać grafikę ze źródła (podpis, osie, źródło). Nie wymaga grafiki w lekcji. | BEZ ZMIAN |
| POL.04.D11 lektura jako dowód | „Schemat pracy z przykładem” (§2) | Łańcuch: problem → argument → sytuacja z utworu → zachowanie bohatera → interpretacja → związek z tezą. Niski priorytet; podobny kształt do `lancuch` z biologii. | ZBUDOWAĆ `schemat-pola` (łańcuch, niski priorytet) |
| OLI.BIO.B2 homeostaza | „Analiza wykresu” (§6) | Stężenie glukozy we krwi po posiłku: osoba zdrowa (wzrost, potem powrót do normy) i osoba z cukrzycą (wysoki poziom utrzymuje się). Klocek `glukoza-wykres` już pokazuje ten dokładnie przypadek (BIO.07.H01); dane przykładowe. | OSADZIĆ `glukoza-wykres` w OLI.BIO.B2 |

## 5. Opisy do przepisania (`@opis` ogólnikowy)

Sześć linii `@opis Schemat z lekcji; elementy: …` w trzech lekcjach BIO. Opis nie mówi, co dokładnie widać, więc nie spełnia zasady „opis czytelny bez grafiki”:

- **BIO.01.L001 komórka** — dwa wiersze; lekcja ma już grafikę (`komorka`). Przepisać opis: nazwy organelli i wniosek.
- **BIO.01.L003 diagnoza** — jeden wiersz; patrz §2.
- **BIO.02.L015 mejoza** — dwa wiersze; patrz §2.

## 6. Korekty względem poprzedniej listy

- **POL.02.G16** — nie jest „brak wykresu bez miejsca”. Wykres `wykres-zlozonego` istnieje, a autor świadomie usunął grafikę. Oznaczone jako DECYZJA.
- **POL.02.G02, POL.04.D01, CHE LKO_DOSW** — fałszywe alarmy (lista reguł, poradnik czytania, wymóg rysunku dla ucznia). Oznaczone BEZ ZMIAN.
- **OLI.BIO.B2** — klocek `glukoza-wykres` już istnieje; brakuje tylko osadzenia.
- **POL.01.L008 i L009** — klocki `wykres-zdania` i `wykres-zlozonego` istnieją (użyte w G12 i G15). Brakuje osadzenia.
- **BIO.01.L003** — schemat jest już narysowany jako tekst (`step-flow`); to kwestia opisu i ewentualnej ładniejszej grafiki.
- **BIO.01.L004** — drugi schemat ma już klocek (`od-organizmu-do-genu`); to osadzenie.

## 7. Kolejność (propozycja)

1. **Szybkie osadzenia (OSADZIĆ, 6 pozycji):** POL L008, POL L009, CHE N06, OLI.BIO.B2, BIO L004, CHE OLI.CHE.X04 (po potwierdzeniu).
2. **Rozszerzenia (ROZSZERZYĆ, 2):** CHE N07 (`chain-scn`), CHE K01 (`energy-profile` + Ea).
3. **Nowe klocki wielokrotnego użytku (ZBUDOWAĆ):**
   - `krzywe-rozpuszczalnosci` — R02 i LKO_KRZYWE (jeden klocek, dwie lekcje),
   - `trojkat-przeliczen` — R04,
   - `krzywa-ogrzewania` — K03,
   - `schemat-pola` w `pol-viz.js` — POL L002, L010, D11 i większość G04–G11,
   - pozostałe G04–G11 jako tabele i proste schematy (osobno przy każdej lekcji).
4. **Opisy (OPIS):** BIO L001, L003, L015 — przepisać `@opis` konkretnie.
5. **Decyzja autora:** POL G16 (przywrócić grafikę czy nie).

Oczekiwany format nowego klocka: dane w lekcji jako parametry w `@viz` (jak `lancuch {kroki=…}`), wejście i wyjście opisane w `KATALOG_KLOCKOW.md`, plik w `gfx/` albo w bibliotece przedmiotowej, wpis w katalogu. Zewnętrzny model dostaje: ten plik, `KATALOG_KLOCKOW.md` i potrzebny klocek.
