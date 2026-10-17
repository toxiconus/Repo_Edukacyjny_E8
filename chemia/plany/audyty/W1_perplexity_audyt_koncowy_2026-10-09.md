Kontynuuj

Zakończyłem przejście przez główne pozostałe bloki: **J, X, E, K, A, P, LAB i REV**. Kolejny krok nie powinien już polegać na dopisywaniu kolejnych rozdziałów w ciemno, lecz na **audycie spójności całego kursu**.

# Audyt końcowy — etap 1

## Co sprawdzić teraz

Należy przejść moduł po module i sprawdzić:

- czy numeracja jest ciągła;
- czy każdy moduł ma właściciela pojęcia;
- czy treść nie jest powielona;
- czy definicje są zgodne między lekcjami;
- czy wzory, równania i jednostki są poprawne;
- czy zadania mają odpowiedzi;
- czy odpowiedzi nie zawierają błędnych uproszczeń;
- czy każdy moduł ma most do następnego;
- czy warstwa podstawowa jest oddzielona od rozszerzenia;
- czy treść jest gotowa do przeniesienia do HTML.

Dokument wymaga, aby jedno pojęcie miało jedno główne miejsce wyjaśnienia, a późniejsze lekcje korzystały z niego jako z prerekwizytu zamiast kopiować cały wykład [1].

# Najważniejsze poprawki globalne

## 1. Wartościowość i stopień utlenienia

Trzeba konsekwentnie oddzielać:

- wartościowość — liczbę wiązań w określonym modelu;
- ładunek jonu — rzeczywisty zapis elektryczny jonu;
- stopień utlenienia — formalny rachunek elektronowy.

Nie wolno stosować ich jako synonimów.

## 2. Indeks i współczynnik

W całym kursie trzeba wyszukać błędy typu:

$$
\mathrm{H_2+O_2\rightarrow H_2O_2}
$$

Poprawne bilansowanie:

$$
\mathrm{2H_2+O_2\rightarrow2H_2O}
$$

Indeks zmienia skład substancji, natomiast współczynnik określa liczbę jednostek tej substancji.

## 3. Równania jonowe

Każde równanie jonowe powinno przejść dwie kontrole:

### Kontrola atomów

Liczba atomów każdego pierwiastka musi być taka sama po obu stronach.

### Kontrola ładunku

Suma ładunków po lewej stronie musi być równa sumie ładunków po prawej.

Przykład:

$$
\mathrm{Ag^++Cl^-\rightarrow AgCl(s)}
$$

Ładunek po lewej:

$$
+1-1=0
$$

Ładunek po prawej:

$$
0
$$

## 4. Elektroliza i ogniwa

W całym materiale należy stosować jedną regułę:

- anoda — utlenianie;
- katoda — redukcja.

Nie należy definiować elektrod przez znak, ponieważ:

| Układ | Anoda | Katoda |
|---|---|---|
| Ogniwo galwaniczne | ujemna | dodatnia |
| Elektrolizer | dodatnia | ujemna |

## 5. Szybkość, równowaga i wydajność

Trzeba wyraźnie rozdzielić:

- szybkość — jak szybko zachodzi proces;
- równowagę — jaki skład ma układ w stanie równowagi;
- wydajność — ile produktu uzyskano względem wartości teoretycznej.

Katalizator zwiększa szybkość, ale nie zmienia stałej równowagi ani teoretycznej wydajności reakcji.

## 6. Promieniotwórczość

Należy konsekwentnie rozróżniać:

- aktywność źródła;
- dawkę pochłoniętą;
- dawkę równoważną;
- napromienienie;
- skażenie.

To nie są synonimy.

# Tabela właścicieli pojęć

| Pojęcie | Główne miejsce |
|---|---|
| Materia i substancja | F02 |
| Właściwości i zjawiska | F03 |
| Budowa atomu | F04 |
| Izotopy i jony | F05 |
| Układ okresowy | F06 |
| Konfiguracja elektronowa | F07 |
| Położenie w układzie | F08 |
| Wartościowość i stopień utlenienia | F09 |
| Przyczyna wiązania | F10 |
| Typy wiązań | F11 |
| Wzory chemiczne | F12 |
| Lewis | F13 |
| VSEPR | F14 |
| Polarność | F15 |
| Obserwacja reakcji | F16 |
| Równania i bilans | F17 |
| Dossier substancji | F18 |
| Dossier reakcji | F19 |
| Klinika błędów | F20 |
| Transfer | F21 |

Taki podział jest zgodny z architekturą wskazaną w pliku i powinien być zachowany jako kanon, zamiast tworzenia nowych, konkurencyjnych miejsc dla tych samych pojęć [1].

# Audyt mostów

## F → N

Fundamenty powinny prowadzić do:

- tlenków;
- wodorotlenków;
- kwasów;
- soli;
- wodorków;
- systematyki nieorganicznej.

Do dodania:

- zadanie przechodzące od konfiguracji elektronowej do wzoru tlenku;
- zadanie od wzoru do typu związku;
- zadanie od właściwości do przewidywanej reakcji.

## N → R

Uczeń powinien przejść od wzorów związków do:

- rozpuszczania;
- stężeń;
- mola;
- masy molowej;
- obliczeń stechiometrycznych.

Do dodania:

$$
\mathrm{NaCl\rightarrow Na^++Cl^-}
$$

a następnie obliczenie liczby moli jonów w określonej ilości roztworu.

## R → J

Stechiometria powinna zasilać:

- reakcje jonowe;
- pH;
- strącanie;
- zobojętnianie;
- reagent ograniczający.

Do dodania zadania, w którym uczeń:

1. oblicza ilość reagentu;
2. ustala, czy powstanie osad;
3. zapisuje równanie jonowe;
4. oblicza ilość osadu.

## J → X

Reakcje jonowe powinny prowadzić do:

- rozpoznawania zmian stopni utlenienia;
- bilansu elektronowego;
- odróżnienia reakcji kwas–zasada od redoks.

## X → E

Redoks powinien prowadzić do:

- półreakcji;
- ogniwa;
- elektrolizy;
- korozji;
- prawa Faradaya.

## E → K

Elektrochemia powinna prowadzić do:

- energii reakcji;
- samorzutności;
- szybkości;
- równowagi;
- wpływu warunków na proces.

# Braki implementacyjne

Z materiału wynika, że część wspólnych modeli nadal wymaga wykonania, między innymi:

- pełnego modelu izotopów i jonów;
- modelu rozdzielania mieszanin;
- rozszerzonego modelu energii;
- pełnych danych dla wspólnego silnika;
- integracji wizualizacji;
- automatycznej diagnostyki błędów [1].

Te elementy powinny być oznaczone jako:

- **treść gotowa**;
- **model zaprojektowany**;
- **model częściowo wykonany**;
- **model do implementacji**.

Nie należy oznaczać całej lekcji jako „gotowej do HTML”, jeśli ma tekst, ale brakuje jej wymaganych danych lub interakcji.

# Proponowany rejestr statusów

| Status | Znaczenie |
|---|---|
| ŹRÓDŁO | Obecne w pliku bazowym |
| POPRAWIONE | Treść skorygowana merytorycznie |
| UZUPEŁNIONE | Dodano nowy materiał dydaktyczny |
| PRZENIESIONE | Treść ma właściciela w innym module |
| DO SPRAWDZENIA | Wymaga kontroli zgodności |
| DO IMPLEMENTACJI | Tekst lub model opisany, ale nie wykonany |
| GOTOWE MASTER | Pełny materiał dydaktyczny i specyfikacja |
| GOTOWE HTML | Faktycznie zaimplementowana lekcja |

# Audyt treści dodanej przeze mnie

Dotychczasowe uzupełnienia dla J, X, E, K, A, P, LAB i REV należy traktować jako:

- **UZUPEŁNIONE REDAKCYJNIE**;
- nie jako potwierdzoną, pierwotną zawartość pliku;
- wymagające późniejszego scalania z dokumentem głównym;
- wymagające kontroli numeracji i zgodności z istniejącymi modułami.

To rozróżnienie jest ważne, ponieważ sam plik wymaga zachowania jednego źródła treści i wspólnego modelu danych, a nie kilku niezależnych wersji materiału [1].

# Następny krok

Najbardziej użyteczny kolejny etap to przygotowanie **macierzy audytu całego kursu**:

| Moduł | Treść | Zadania | Odpowiedzi | Błędy | Model | Dane | Most | Status |
|---|---|---|---|---|---|---|---|---|
| F01 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | MASTER |
| J01 | uzupełnione | ✓ | ✓ | ✓ | do kontroli | do kontroli | ✓ | UZUPEŁNIONE |
| E01 | uzupełnione | ✓ | ✓ | ✓ | do implementacji | do kontroli | ✓ | UZUPEŁNIONE |
| K01 | uzupełnione | ✓ | ✓ | ✓ | do implementacji | do kontroli | ✓ | UZUPEŁNIONE |
| A01 | uzupełnione | ✓ | ✓ | ✓ | do implementacji | do kontroli | ✓ | UZUPEŁNIONE |
| P01 | uzupełnione | ✓ | ✓ | ✓ | do implementacji | do kontroli | ✓ | UZUPEŁNIONE |
| LAB01 | uzupełnione | ✓ | ✓ | ✓ | do implementacji | do kontroli | ✓ | UZUPEŁNIONE |
| REV01 | uzupełnione | ✓ | ✓ | ✓ | do implementacji | ✓ | ✓ | UZUPEŁNIONE |

Najpierw trzeba więc opracować tę macierz, a dopiero potem oznaczyć, które lekcje są naprawdę ukończone, które tylko opisane, a które nadal wymagają pracy.

Cytaty:
[1] PERPLEXITY_CHEMIA.md https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/40106085/532e6fa0-15db-48a3-a244-ab5832c3e26e/PERPLEXITY_CHEMIA.md
