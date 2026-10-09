# ANALIZA BLOKÓW X, E, K, A, P, LAB, REV — kolizje kodów i braki

**Stan:** W11 — GPT-6, 2026-10-09. Analiza porównawcza propozycji Perplexity z kanonicznym `chemia/plany/CHE_SPIS_TRESCI.md` oraz `W1_perplexity_NOTA_kolizje_2026-10-09.md`. To mapa scalania, nie potwierdzenie niezależnego audytu wszystkich równań w materiałach źródłowych.

## Zasady scalania

1. Kody kanoniczne wynikają ze `CHE_SPIS_TRESCI.md`, a nie z numeracji w propozycji Perplexity.
2. Definicja ma jednego właściciela; inne moduły mogą ją przypominać, stosować lub pogłębiać, ale nie powinny tworzyć drugiej konkurencyjnej lekcji.
3. Rdzeń E8 oddzielamy od LO/konkursu. Pojęcia takie jak Ka/pKa, bufory, prawo szybkości, stała równowagi, entalpia, prawa Faradaya i termodynamika wymagają wyraźnego oznaczenia poziomu.
4. REV01, REV02 i REV06 istnieją już w kanonie z innym znaczeniem — propozycja nie może ich nadpisać.
5. LAB00–LAB10 to proponowany podział jednej istniejącej lekcji laboratoryjnej; decyzja o osobnych plikach nie może prowadzić do utraty dotychczasowych doświadczeń i instrukcji BHP.

## 1. X — redoks

| Kod i tytuł Perplexity | Kod kanoniczny | Poziom | Błędy/ryzyka do kontroli | Braki względem kanonu |
|---|---|---|---|---|
| X01 Utlenianie i redukcja | X01; definicję bazową pozostawić jako OWNER w F09 | E8 + rozszerzenie | Ryzyko powtórzenia definicji F09; stopień utlenienia nie jest zawsze rzeczywistym ładunkiem atomu. | Rozdzielić definicję, przykłady i zastosowanie; nie dublować F09. |
| X02 Stopnie utlenienia | F09 jako OWNER; zastosowanie w X02 | E8/LO | Sprawdzić reguły dla związków obojętnych i jonów wieloatomowych oraz wyjątki. | Typowe utleniacze i reduktory jako główna treść X02. |
| X03 Bilans elektronowy | X03 | LO/konkurs dla metod połówkowych; podstawowe rozpoznawanie E8+ | Sprawdzić bilans atomów, ładunku i elektronów; nie mieszać bilansu atomowego z elektronowym. | Przykłady przekrojowe z kwasami i zasadami. |
| X04 Redoks w środowisku kwasowym i zasadowym | X06 + X07 | LO/konkurs | Wymaga osobnego sprawdzenia każdego równania jonowego, zwłaszcza dodawania H₂O, H⁺/OH⁻ i kontroli ładunku. | X04 kanonu to szereg aktywności metali; nie ma go w tej propozycji. |
| X05 Właściwości utleniające i redukujące | X02 | E8/LO | Ryzyko utożsamienia utleniacza z substancją, która sama się utlenia; utleniacz ulega redukcji. | X05 kanonu — redoks jonowy — pozostaje do opracowania. |
| X06 Test przekrojowy redoks | X09 | E8 + rozszerzenie | Klucz powinien wyjaśniać stopnie utlenienia, elektrony i bilans, nie tylko podawać wynik. | Brak testu wyraźnie obejmującego szereg aktywności (X04), redoks jonowy (X05) i dysproporcjonowanie (X08). |
| Most do elektrochemii | Most X09 → E01–E06 | E8/LO | Nie sugerować, że potencjał elektrody da się wywnioskować wyłącznie z reguł redoks bez warunków. | Odwołanie do ogniwa, potencjałów, elektrolizy, korozji i akumulatorów. |

**Decyzja:** zachować plik L010 jako źródło wspólne, ale przy migracji rozdzielić fragmenty pod X01–X09; nie tworzyć drugiego OWNER dla stopni utlenienia. X04 i X05 trzeba dopisać jako brakujące lekcje kanonu.

## 2. E — elektrochemia

| Kod i tytuł Perplexity | Kod kanoniczny | Poziom | Błędy/ryzyka do kontroli | Braki względem kanonu |
|---|---|---|---|---|
| E01 Elektrochemia — audyt i uzupełnienie | E01 Ogniwo galwaniczne | LO | Schemat ogniwa musi wskazywać anodę, katodę, kierunek elektronów i rolę mostka solnego; znaki elektrod zależą od typu układu. | Pełna analiza półogniw i reakcji sumarycznej ogniwa. |
| E02 Potencjał elektrody i szereg elektrochemiczny | E02 Potencjały elektrodowe + fragment E03 SEM | LO | Potencjały wymagają odniesienia do standardowych warunków i potencjału odniesienia; nie są „napięciem metalu” bez kontekstu. | Rozdzielić potencjał standardowy od siły elektromotorycznej całego ogniwa. |
| E03 Elektroliza | E04 Elektroliza | LO/konkurs | Produkty zależą od elektrod, składu roztworu/stopu i warunków; nie podawać jednej reguły dla wszystkich elektrolitów. | Kanoniczne E03 = SEM; potrzebuje osobnego modułu. |
| E04 Korozja i ochrona metali | E05 Korozja | E8/LO | Rozróżnić korozję chemiczną i elektrochemiczną; ochronę anodową/katodową opisywać precyzyjnie. | E04 elektroliza, z osobnym bilansem elektrodowym. |
| E05 Prawa Faradaya | Brak bezpośredniego kodu; proponowany E07 lub moduł rozszerzony | Konkurs/LO rozszerzone | Wymaga jednostek, stałej Faradaya i kontroli liczby elektronów; nie przedstawiać jako rdzenia E8. | W kanonie E05 = korozja; brak E06 akumulatory/źródła energii. |
| E06 Powtórka i diagnostyka elektrochemii | Nie tworzyć E06; wpiąć jako test przekrojowy po E01–E06 albo REV | LO | Test powinien obejmować ogniwo, SEM, elektrolizę, korozję i akumulatory. | Kanoniczne E06 to źródła energii i akumulatory. |
| Most do następnego bloku | E06 → K01 lub R/J, zależnie od celu | LO | Most nie może zastąpić brakującej lekcji. | Akumulatory, ogniwa paliwowe i ograniczenia modeli źródeł energii. |

**Decyzja:** E05 Faradaya przenieść do jawnie oznaczonego rozszerzenia/konkursu, np. `E07_FARADAY` po zatwierdzeniu rejestru. Nie nadpisywać kanonicznych E03–E06.

## 3. K — energetyka, kinetyka i równowaga

| Kod i tytuł Perplexity | Kod kanoniczny | Poziom | Błędy/ryzyka do kontroli | Braki względem kanonu |
|---|---|---|---|---|
| K01 Szybkość reakcji | K04 | E8/LO | Rozróżnić szybkość średnią i chwilową; podać jednostki oraz wpływ warunków. | Kanoniczne K01 = energia reakcji. |
| K02 Prawo szybkości i rząd reakcji | Brak; rozszerzenie do K04/K05 | LO/konkurs | Rząd reakcji wynika z danych doświadczalnych, nie zawsze z równania sumarycznego. | Brak kanonicznego modułu praw szybkości; nie tworzyć go przez przesunięcie K11. |
| K03 Energia aktywacji i kataliza | K06 + K07 | LO | Katalizator obniża energię aktywacji alternatywnej drogi, nie zmienia ΔH ani położenia równowagi. | K03 kanonu = kalorymetria i przemiany fazowe. |
| K04 Efekty energetyczne reakcji | K01 + K02 | E8/LO | Nie utożsamiać temperatury układu ze znakiem entalpii; rozróżnić egzotermiczność i gwałtowność. | Osobne cele: energia reakcji i entalpia. |
| K05 Prawo Hessa | K02 | LO/konkurs | Dbać o znaki ΔH przy odwracaniu równań i mnożeniu współczynników. | K05 kanonu = czynniki wpływające na szybkość. |
| K06 Równowaga chemiczna | K08 | LO | Równowaga jest dynamiczna; stałość stężeń nie oznacza równych stężeń reagentów i produktów. | Kanoniczne K06 = zderzenia i energia aktywacji. |
| K07 Równowagi kwasowo-zasadowe | J06–J10; część rozszerzona | LO/konkurs | Ka/pKa i bufory oznaczyć jako rozszerzenie; sprawdzić konwencję i warunki. | Kanoniczne K07 = kataliza. |
| K08 Rozpuszczalność i iloczyn rozpuszczalności | J04 + K09 jako rozszerzenie | LO/konkurs | Ksp ma sens w określonym modelu równowagi; nie mieszać rozpuszczalności z szybkością rozpuszczania. | Brak osobnego kanonicznego Ksp; część podstawowa w J04. |
| K09 Termodynamika i samorzutność | Brak bezpośredniego odpowiednika; rozszerzenie | Konkurs/LO rozszerzone | Samorzutność nie znaczy szybkość; ΔG zależy od warunków, temperatury i stanu układu. | Nie mylić z kanonicznym K09 = stała równowagi. |
| K10 Zintegrowane wykresy energii | K01/K02/K06/K07 zależnie od wykresu | LO | Opisy osi, poziomów energii i energii aktywacji muszą być spójne; grafika powinna mieć `@opis`. | Brak jednego kanonicznego właściciela — rozdzielić według pojęcia. |
| K11 Powtórka i diagnostyka | Test przekrojowy K01–K11, nie K11 kanonu | E8/LO | Nie zmieniać kodu K11. | Kanoniczne K11 = równowaga ilościowa. |

**Decyzja:** materiały energetyczne rozdzielić zgodnie z tytułami kanonu; Faradaya/Hessa/prawo szybkości/termodynamikę oznaczyć jako rozszerzenie albo konkurs. Brakujące K03 — kalorymetria i przemiany fazowe — dopisać odrębnie.

## 4. A — chemia jądrowa

| Kod i tytuł Perplexity | Kod kanoniczny | Poziom | Błędy/ryzyka do kontroli | Braki względem kanonu |
|---|---|---|---|---|
| A01 Jądro atomowe i izotopy | A01; izotopy mają OWNER w F05 | E8/LO | Rozdzielić Z, A, protony, neutrony i elektrony; izotop nie jest jonem. | Nie dublować nauczania izotopów z F05; w A01 skupić się na jądrze. |
| A02 Promieniotwórczość | A02 Radioaktywność | E8/LO | Rozróżnić promieniowanie od skażenia; nie sugerować, że każdy izotop jest promieniotwórczy. | Właściwości i rodzaje promieniowania z bezpiecznymi przykładami. |
| A03 Równania przemian jądrowych | A03 Przemiany jądrowe | LO | Bilans liczby masowej i liczby atomowej; poprawne symbole α/β/γ i bilans ładunku. | Pełny zestaw typów przemian i interpretacji. |
| A04 Okres półtrwania i aktywność | A04 | LO | Wzory i jednostki muszą być zgodne; aktywność nie jest tym samym co dawka. | Przykłady obliczeń i wykresy rozpadu. |
| A05 Dawka, ochrona i BHP radiologiczne | A06 Zastosowania i BHP | E8/LO | Dawka pochłonięta, równoważna i skuteczna nie są zamienne; jednostki wymagają kontroli. | Kanoniczne A05 = energia wiązania jądra. |
| A06 Zastosowania promieniotwórczości | A06 | E8/LO | Korzyści i ryzyka w medycynie, przemyśle i badaniach; nie uogólniać dawek. | Połączyć z ochroną radiologiczną, nie powielać A05. |
| A07 Energia jądrowa | A05 Energia wiązania jądra + część A06 | LO/konkurs | Rozróżnić rozszczepienie, syntezę i energię wiązania; nie upraszczać bezpieczeństwa do jednego czynnika. | Kanoniczne A05 i A06; nie tworzyć dodatkowego kodu bez rejestru. |
| A08 Powtórka i diagnostyka | Test po A01–A06 | E8/LO | Nie tworzyć A08 bez decyzji; klucz musi obejmować równania i bezpieczeństwo. | Brak A08 w kanonie. |

**Decyzja:** A07 może być sekcją rozszerzoną A05/A06; A08 jako test wpiąć do REV albo końca bloku, nie tworzyć kanonicznego kodu bez zmiany spisu.

## 5. P — układ okresowy i pogłębienie

| Kod i tytuł Perplexity | Kod kanoniczny | Poziom | Błędy/ryzyka do kontroli | Braki względem kanonu |
|---|---|---|---|---|
| P01 Układ okresowy jako systematyka | F06 jako OWNER; P01 blok s | E8/LO | Nie dublować budowy układu i odczytu grup/okresów. | Kanoniczne P01 = blok s. |
| P02 Rodziny pierwiastków | P01/P02/P04 według rodziny | E8/LO | Nie utożsamiać wszystkich pierwiastków grupy z identycznymi właściwościami; uwzględnić trendy i wyjątki. | Rozdzielić bloki s i p, nie scalać w jedną ogólną „rodzinę”. |
| P03 Metale, niemetale i metaloidy | P03 blok d/metale przejściowe tylko częściowo | E8/LO | Klasyfikacja ma wyjątki; przewodnictwo i połysk to tendencje, nie pojedyncze kryteria bezwarunkowe. | Brakuje osobnej systematyki metali przejściowych/bloku d. |
| P04 Trendy okresowe | P06 Trend → właściwość → reaktywność | LO | Kierunki trendów trzeba uzasadnić efektywnym ładunkiem jądra i ekranowaniem; uwzględnić wyjątki. | Kanoniczne P04 = charakterystyka grup. |
| P05 Konfiguracja a właściwości pierwiastka | F07/F08 + P06 | E8/LO | Nie dublować konfiguracji elektronowej; konfiguracje wyjątkowe i bloki d wymagają poziomu rozszerzonego. | Kanoniczne P05 = związki charakterystyczne pierwiastków. |
| P06 Zadania integracyjne z układu okresowego | P06 | E8/LO | Każde zadanie powinno łączyć trend z wyjaśnieniem, a nie wymagać zgadywania. | Kanoniczne P06 = trend → właściwość → reaktywność; testy są warstwą ćwiczeniową. |

**Decyzja:** wykorzystać zadania P jako ćwiczenia, ale przenieść teorię do właścicieli F06–F08 i zachować kanoniczne P01–P06 zgodnie ze spisem.

## 6. LAB — laboratorium

| Kod i tytuł Perplexity | Kod kanoniczny | Poziom | Błędy/ryzyka do kontroli | Braki względem kanonu |
|---|---|---|---|---|
| LAB00 Laboratorium — audyt i uzupełnienie | `00/CHE.00.LAB.doswiadczenia.md` — warstwa wspólna | E8/LO | Nie zastępować obecnej biblioteki doświadczeń samą listą nowych modułów; każde doświadczenie ma BHP, obserwację, wniosek i `@opis`. | Indeks doświadczeń i odsyłacze do właścicieli pojęć. |
| LAB01 BHP i organizacja pracy | Sekcja BHP wspólnego LAB | E8 | Ocena ryzyka, środki ochrony, odpady i procedury awaryjne; nie publikować ryzykownych pokazów jako samodzielnych instrukcji. | Zasady konkretne dla każdego odczynnika i gazu. |
| LAB02 Obserwacja i pomiar | LAB wspólny + F16 | E8 | Oddzielać obserwację od wniosku; jednostki, niepewność i próby kontrolne. | Wzorcowy raport i procedura pomiarowa. |
| LAB03 Rozdzielanie mieszanin | LAB wspólny + treści podstawowe | E8 | Dobór metody do właściwości fizycznej; destylacja/ogrzewanie wymaga BHP. | Przykłady filtracji, krystalizacji, destylacji i chromatografii. |
| LAB04 Reakcje gazotwórcze | LAB wspólny + J03 | E8/LO | Identyfikacja gazu wymaga próby; toksyczne/palne gazy wyłącznie pod nadzorem. | Bezpieczne warianty i alternatywy symulacyjne. |
| LAB05 Wskaźniki i pH | LAB wspólny + J02 | E8 | Kolory wskaźników zależą od zakresu przejścia; wskaźnik nie zawsze daje dokładne pH. | Czytelna tabela barw z `@opis` i warunkami. |
| LAB06 Strącanie i identyfikacja jonów | LAB wspólny + J04 | E8/LO | Osad nie identyfikuje automatycznie jednego jonu; należy kontrolować rozpuszczalność i bilans jonowy. | Tabela reakcji potwierdzających i ograniczeń. |
| LAB07 Redoks i elektrochemia | LAB wspólny + X/E | LO | Kontrola półreakcji, warunków i zagrożeń; nie łączyć z demonstracją bez osłon. | Ogniwo galwaniczne, elektroliza i korozja jako oddzielne modele. |
| LAB08 Kinetyka i energia | LAB wspólny + K | E8/LO | Rozróżnić szybkość i efekt energetyczny; kontrolować zmienne. | Wykresy pomiarowe, procedura i interpretacja danych. |
| LAB09 Substancje organiczne i biochemiczne | LAB wspólny + O | E8/LO | Nie identyfikować substancji po smaku/zapachu; odróżnić obserwację od interpretacji. | Bezpieczne próby i ograniczenia testów jakościowych. |
| LAB10 Raport, analiza błędów i transfer | LAB wspólny + F16/F21 | E8/LO | Raport powinien zawierać dane, wniosek, ograniczenia, źródła i BHP. | Wzorzec raportu i kryteria oceny bez zmyślonych punktacji CKE. |
| Zadanie końcowe/diagnostyka | Wpiąć w LAB00 lub REV | E8/LO | Nie mnożyć kodów lekcji, jeśli są to tylko testy i checklisty. | Indeks i linki do istniejących doświadczeń. |

**Decyzja:** LAB00–LAB10 traktować na tym etapie jako podział funkcjonalny istniejącego `CHE.00.LAB.doswiadczenia.md`, a nie 11 nowych plików kanonicznych. Najpierw zachować i skatalogować wszystkie istniejące doświadczenia.

## 7. REV — powtórki i diagnostyka

| Kod i tytuł Perplexity | Kod kanoniczny | Poziom | Błędy/ryzyka do kontroli | Braki/kolizje |
|---|---|---|---|---|
| REV00 Powtórki i diagnostyka | Nowa warstwa diagnostyczna; można użyć jako indeksu | E8 | Powinien kierować do lekcji właścicielskich, a nie dublować pełne wykłady. | Ustalić miejsce w rejestrze. |
| REV01 Materia i substancje | **Kolizja: kanoniczne REV01 = powtórka klasy 7** | E8 | Nie nadpisywać istniejącego pliku. | Wpiąć jako sekcję albo nadać nowy kod, np. `REV-T01`. |
| REV02 Atom, układ okresowy i konfiguracja | **Kolizja: kanoniczne REV02 = powtórka klasy 8** | E8 | Nie nadpisywać istniejącego pliku. | Sekcja lub `REV-T02`. |
| REV03 Wiązania, Lewis i geometria | Wpiąć w powtórkę F11–F15 | E8/LO | Zadania nie mogą uczyć pojęć wbrew właścicielom F. | Nowy kod tematyczny, np. `REV-T03`. |
| REV04 Wzory i równania reakcji | Wpiąć w F12/F17/N/R | E8 | Sprawdzać indeksy, współczynniki, atomy i ładunek. | `REV-T04` lub sekcja. |
| REV05 Kwasy, zasady i chemia jonowa | Wpiąć w N/J | E8/LO | Kontrolować moc/słabość elektrolitu, pH, osady, amfoteryczność. | `REV-T05` lub sekcja. |
| REV06 Stechiometria i roztwory | **Kolizja: kanoniczne REV06 = zaawansowana** | E8/LO | Nie nadpisywać istniejącego REV06. | Sekcja lub `REV-T06`. |
| REV07 Redoks i elektrochemia | Wpiąć w X/E | E8/LO | Rozdzielić redoks od elektrochemii; bilans ładunku i elektronów. | `REV-T07` lub sekcja. |
| REV08 Kinetyka, energia i równowaga | Wpiąć w K | E8/LO | Rozdzielić szybkość, entalpię i równowagę. | `REV-T08` lub sekcja. |
| REV09 Jądro, promieniotwórczość i laboratorium | Wpiąć w A/LAB | E8/LO | Oddzielić aktywność, dawkę i skażenie; bezpieczeństwo. | `REV-T09` lub sekcja. |
| REV10 Test mistrzostwa | Test końcowy bez kodu kanonicznego albo nowy kod po zatwierdzeniu | E8/LO | Klucz powinien wyjaśniać kroki i mapować błędy do lekcji. | Brak kanonicznego REV10. |
| Klinika błędów/checklist/status | Sekcje wspólne do odpowiednich REV | E8/LO | Nie powielać statusów w wielu plikach; wskazywać właściciela pojęcia. | Jedna macierz statusu źródeł i walidacji. |

**Decyzja:** nie zmieniać REV01/REV02/REV06. Proponowane tematyczne powtórki oznaczać tymczasowo `REV-T01`–`REV-T09` (plus test `REV-T10`) albo włączać jako sekcje do istniejących lekcji; ostateczny wybór wymaga aktualizacji spisu i rejestru, nie nadpisania plików.

## 8. Wspólne błędy i brakujące elementy

- „UZUPEŁNIONE REDAKCYJNIE” w plikach Perplexity nie oznacza weryfikacji naukowej ani gotowości HTML.
- Każde równanie: kontrola atomów, ładunku, warunków, medium i nazw. Każda wartość liczbowa: jednostka, warunki, źródło.
- Każda wizualizacja musi mieć `@opis` (co widać i jaki wniosek wolno wyciągnąć); nie wolno wstawiać wykresów bez opisu osi i warunków.
- Braki kluczowe wskazane w nocie: X04 szereg aktywności; X05 redoks jonowy; E06 akumulatory; K03 kalorymetria/przemiany fazowe; K11 kanoniczna równowaga ilościowa; A05 energia wiązania jądra; P05 związki charakterystyczne pierwiastków.
- Treści ponad E8 (prawo szybkości, Faraday, Hess, Ka/pKa, Ksp, termodynamika) oznaczać jawnie jako `[[exam:KONKURS]]` lub rozszerzenie LO. Nie przenosić ich do rdzenia E8 bez uzasadnienia programowego.
- Rekomendowany rejestr statusów: `ŹRÓDŁO → ZMAPOWANE → WERYFIKACJA MERYTORYCZNA → POPRAWIONE → TESTY/ŹRÓDŁA → GOTOWE DO HTML`. Nie oznaczać pliku jako „gotowy” po samej korekcie redakcyjnej.

## 9. Źródła i zakres

- `chemia/plany/audyty/W1_perplexity_NOTA_kolizje_2026-10-09.md` — mapa kolizji i stwierdzone braki.
- `chemia/plany/CHE_SPIS_TRESCI.md` — kanoniczne kody, tytuły i relacje między lekcjami.
- Pliki propozycji `W1_perplexity_X01-X06`, `E01-E06`, `K01-K11`, `A01-A08`, `P01-P06`, `LAB00-LAB10`, `REV00-REV10` — źródło tytułów i treści propozycji; ich deklaracja redakcyjnej kompletności nie jest traktowana jako niezależna walidacja.
