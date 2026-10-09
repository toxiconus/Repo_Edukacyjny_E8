# Postęp uzupełniania polskiego — tryb jedna lekcja na raz

Data startu: 2026-10-09

## Bieżący stan (ostatnia aktualizacja 2026-10-09)

- D01–D13: wersja 3.0 po drugim cyklu analizy braków i kontroli wewnętrznej.
- G01–G17 oraz S01–S06: lekcje kanoniczne i osobne audyty zachowane.
- L001–L006: porównano i poprawiono główne warianty HTML; 9 wybranych plików przeszło kontrolę składni JS, identyfikatorów i linków wewnętrznych.
- L007: wersja 3.0 po wewnętrznym audycie kompletności.
- L008–L011: pełne lekcje wersji 4.0 z osobnymi audytami.
- [Spis treści całego zasobu](SPIS_TRESCI_POLSKI.md) | [Mapa](MAPA_POLSKI.md) | [Audyt zbiorczy](plany/audyty/AUDYT_ZBIORCZY_POLSKI_2026-10-09.md)
- ZIP końcowy obejmuje cały katalog polski wraz z historycznymi wersjami, masterami, szkiele­tami i audytami.

## Zasady pracy
1. Pracować po kolei, jedną lekcję na iterację.
2. Najpierw odczytać istniejący szkielet, lekcję kanoniczną i materiały uzupełniające.
3. Zachować poprawną treść; nie usuwać wartościowych fragmentów tylko dlatego, że są powtórzone — najpierw ustalić, czy pełnią inną funkcję.
4. Uzupełniać teorię, przykłady, ćwiczenia, klucze, pułapki, samoocenę i metadane.
5. Oznaczać zadania autorskie i nie przedstawiać autorskiej punktacji jako oficjalnej.
6. Aktualizować status i kolejny krok po każdej lekcji.
7. Po zakończeniu serii przeprowadzić osobny audyt W1 (poprawność) i W2 (kompletność zakresu).
8. W trakcie pracy aktualizować pliki w katalogu roboczym i komunikować krótko postęp. Nie wysyłać ZIP-a po każdej lekcji; po zakończeniu ustalonej sekwencji scalić stare i nowe materiały polskie, mapę, szkielety i audyty do jednego ZIP-a.

## Rejestr
| Kod | Plik | Status | Uwagi |
|---|---|---|---|
| L007 | `polski/do_uzupelnienia/PL_L007_przeglad_czesci_mowy.md` | PEŁNA v3.0 — audyt W2 wewnętrzny wykonany | Rozbudowano szkielet do pełnej lekcji: mapa 10 części mowy, procedura rozpoznawania, imiesłowy, pułapki, ćwiczenia z kluczami, test 20 pkt, fiszki i samoocena. |
| L008 | `polski/do_uzupelnienia/PL_L008_czesci_zdania.md` | PEŁNA v4.0 — audyt wewnętrzny zapisany | Porównać z `polski/podstawy/PL_G12_czesci_zdania.md`; scalić bez utraty wartościowej treści. |
| L009 | `polski/do_uzupelnienia/PL_L009_zdania_zlozone.md` | PEŁNA v4.0 — audyt wewnętrzny zapisany | Porównać z G14–G16 i uzupełnić tylko luki. |
| L010 | `polski/do_uzupelnienia/PL_L010_srodki_stylistyczne.md` | PEŁNA v4.0 — audyt wewnętrzny zapisany | Porównać z S01–S06 i dodać ćwiczenia przekrojowe. |
| L011 | `polski/do_uzupelnienia/PL_L011_elementy_utworu_moral_puenta.md` | PEŁNA v4.0 — audyt wewnętrzny zapisany | Sprawdzić pokrycie: elementy utworu, morał, puenta, interpretacja. |

## Kontrola jakości L007
- [x] Rozbudowana teoria i tabela porównawcza.
- [x] Rozpoznawanie na podstawie kontekstu, nie wyłącznie pytania.
- [x] Imiesłowy i zgodność wykonawcy.
- [x] Ćwiczenia podstawowe i konkursowe.
- [x] Klucz odpowiedzi.
- [x] Test końcowy i samoocena.
- [ ] Audyt merytoryczny przez porównanie z podręcznikiem/aktualnymi wymaganiami.
- [ ] Audyt W2: sprawdzenie, czy wymagany zakres jest kompletny.
- [ ] Sprawdzenie spójności odsyłaczy i spisu treści repozytorium.

## Blok D — postęp prac

- [x] Utworzono osobną mapę bloku: `polski/blok_D/README.md`.
- [x] Opracowano i pogłębiono lekcje D01–D13 do wersji 3.0; drugi cykl wewnętrzny zakończony.
- [x] Każda lekcja ma plik audytu w `polski/blok_D/audyty/` (diagnoza luki → uzupełnienie → kontrola).
- [x] Zachowano starszy `polski/blok_D/POLSKI_BLOK_D_KOMPETENCJE_E8_v1.md` jako materiał źródłowy i dodano do niego odsyłacz do kanonicznej mapy.
- [ ] Wykonać zbiorczy audyt W1/W2 całego bloku na podstawie aktualnego informatora CKE i arkuszy; nie oznaczać bloku jako ostatecznie zweryfikowanego przed tą kontrolą.

Zbiorczy audyt bloku D zapisano w `blok_D/AUDYT_ZBIORCZY_D_v3.md`; niezależna walidacja względem aktualnego informatora i arkuszy nadal otwarta.

## Blok G — gramatyka i składnia

- [x] Rozpoczęto blok G bez dublowania kanonicznych lekcji: mapa i audyty są w `polski/blok_G/`, a lekcje kanoniczne pozostają w `polski/podstawy/`.
- [x] G01 — `polski/podstawy/PL_G01_rzeczownik.md` rozbudowano do v3.0 po porównaniu z masterem, L005 i lekcjami powiązanymi.
- [x] Dodano `polski/blok_G/audyty/G01_AUDYT.md`: diagnoza braków, uzupełnienia, kontrola po zmianie i uwagi wymagające niezależnej weryfikacji.
- [ ] G01 wymaga niezależnej kontroli polonistycznej kluczy, szczególnie zadań 8, 12 i 15.
- [x] G02 — czasownik rozbudowany do v2.0; dodano audyt braków i kontroli po zmianie.
- [ ] G02 wymaga niezależnej kontroli polonistycznej.
- [x] G03 — przymiotnik: v3.0; audyt braków, uzupełnienie, ponowna analiza i poprawki; poprawiono również sprzeczne fragmenty L004 HTML v1/v2.
- [x] G04 — liczebnik v2.0; diagnoza braków → uzupełnienie → ponowna analiza; audyt `blok_G/audyty/G04_AUDYT.md`.
- [x] G07–G11 rozbudowane v2.0; każda lekcja ma osobny audyt cyklu.
- [x] Zasada eksportu zgodnie z aktualną decyzją: pracować na katalogu roboczym; ZIP scalający cały polski przygotować na końcu, po zakończeniu sekwencji lekcji.


## Blok G — przebieg kolejnego cyklu (2026-10-09)

- G04 Liczebnik — v3.0: analiza trudnych form, zgoda składniowa, daty/godziny, zadania i klucz; audyt po zmianie zapisany.
- G05 Zaimek — v3.0: formy krótkie/długie, „swój”, zaimki względne, przeczenie i dwuznaczność; audyt po zmianie zapisany.
- G06 Imiesłowy — v3.0: aspekt, wykonawca czynności, przecinki, „nie” i korekta błędów; audyt po zmianie zapisany.
- G07 Przysłówek — v3.0: określanie różnych części mowy, stopniowanie, pisownia i analiza zdania; audyt po zmianie zapisany.
- G08 Przyimek — v3.0: przypadki, rekcja, pisownia, funkcje wyrażeń; audyt po zmianie zapisany.
- G09 Spójnik — v3.0: relacje, granice zdań, przecinki i podobne wyrazy; audyt po zmianie zapisany.
- G10 Partykuła — v3.0: zakres znaczeniowy, „czy/może”, kontekst i ćwiczenia; audyt po zmianie zapisany.
- G11 Wykrzyknik — v3.0: część mowy a znak interpunkcyjny, funkcje i dialog; audyt po zmianie zapisany.

G01–G17: wszystkie kanoniczne lekcje istnieją i mają audyty; niezależna recenzja pozostaje otwarta. ZIP zbiorczy powstanie po zakończeniu ustalonej sekwencji.


## Blok G — G12–G17 (2026-10-09)

- G12 Części zdania — pełna lekcja v2.0; podmiot logiczny/domyślny, orzeczenie imienne, funkcje składniowe, rozbiór krok po kroku i klucze.
- G13 Związki wyrazowe — pełna lekcja v2.0; zgoda/rząd/przynależność, nadrzędność i podrzędność, zadania z uzasadnieniem.
- G14 Zdanie pojedyncze i równoważnik — pełna lekcja v2.0; orzeczenie, formy nieosobowe, przekształcenia i interpunkcja.
- G15 Zdania współrzędne — pełna lekcja v2.0; cztery relacje, zdania bezspójnikowe, przecinki i wykres.
- G16 Zdania podrzędne — pełna lekcja v2.0; typy zdań, granice, przecinki, zdania wtrącone i wykres.
- G17 Mowa niezależna i zależna — pełna lekcja v2.0; zmiana perspektywy, dialog, przekształcenia i klucze.
- Do każdego pliku dodano audyt braków i kontroli po uzupełnieniu.

**Blok G: G01–G17 ma teraz treść kanoniczną.** Kolejny etap: przegląd spójności całego bloku, poprawki wykrytych nieścisłości i przygotowanie ZIP-a całego polskiego zgodnie z ustaleniem — bez wysyłania paczek pośrednich.


## Blok S — środki stylistyczne (2026-10-09)

- S01 Epitet i porównanie — pełna lekcja v2.0, audyt braków i kontroli zapisany.
- S02 Przenośnia, ożywienie i uosobienie — pełna lekcja v2.0, audyt zapisany.
- S03 Onomatopeja, apostrofa i pytanie retoryczne — pełna lekcja v2.0, audyt zapisany.
- S04 Powtórzenie, anafora, wyliczenie, refren i kontrast — pełna lekcja v2.0, audyt zapisany.
- S05 Neologizm, zdrobnienie, zgrubienie i archaizm — pełna lekcja v2.0, audyt zapisany.
- S06 Hiperbola, ironia, symbol i alegoria — pełna lekcja v2.0, audyt zapisany.

Każda lekcja przeszła wewnętrzny cykl analizy braków, uzupełnienia i kontroli. Kolejny etap: audyt spójności całego bloku S i porównanie z lekcjami L010 oraz masterem.


## Zachowanie źródeł

- Oryginalne szkielety G12–G17 i S01–S06 skopiowano do `polski/archiwum/szkielety/`.
- Wersje wejściowe G04–G17 i S01–S06 zachowano w `polski/archiwum/wersje_wejsciowe/`.
- Audyty S01–S06 przeniesiono do `polski/blok_S/audyty/`; mapę bloku zapisano w `polski/blok_S/README.md`.


## Lekcje integrujące L008–L011 — 2026-10-09

- L008 Części zdania — rozbudowano do v3.0; połączono z G12.
- L009 Zdania pojedyncze i złożone — rozbudowano do v3.0; połączono z G14–G16.
- L010 Środki stylistyczne — rozbudowano do v3.0; połączono z S01–S06.
- L011 Budowa utworu, narrator, podmiot liryczny, morał i puenta — rozbudowano do v3.0.
- Wersje wejściowe zachowano w `archiwum/wersje_wejsciowe/`, a audyty w `plany/audyty/`.


## Kontrola zbiorcza i przygotowanie do scalania

Dodano `plany/audyty/AUDYT_ZBIORCZY_POLSKI_2026-10-09.md`, README katalogów szkiele­tów i archiwum oraz mapę lekcji integrujących. Przed przygotowaniem ZIP-a wykonuję jeszcze kontrolę kompletności plików i integralności archiwum.


## Drugi cykl audytu bloku D — 2026-10-09

- **D01 Czytanie ze zrozumieniem v3.0:** po ponownej analizie dodano interpretację tabeli, obliczenia procentowe, kontrolę mianownika i zadanie łączące tekst z wynikami ankiety. Audyt `blok_D/audyty/D01_AUDYT.md` zapisuje diagnozę, uzupełnienie i kontrolę po zmianie.
- **D02 Fakt/opinia/teza/argument v3.0:** doprecyzowano różnicę między sprawdzalnością a potwierdzeniem oraz dodano analizę twierdzenie–racja–dowód–wyjaśnienie. Audyt `blok_D/audyty/D02_AUDYT.md`.
- **D03 Wnioskowanie i łączenie informacji v3.0:** dodano procedurę porównywalności źródeł i zadanie z liczbą wypożyczeń w przeliczeniu na dzień. Audyt `blok_D/audyty/D03_AUDYT.md`.

Następna lekcja w sekwencji pogłębionego audytu: **D04 — pełna odpowiedź i uzasadnienie**. Kontynuować bez zatwierdzania; ZIP całego polskiego dopiero po zakończeniu serii.

- **D04 Pełna odpowiedź i uzasadnienie v3.0:** dodano macierz rozbioru polecenia, przykłady odpowiedzi niepełnej i pełnej, treningową listę kontroli oraz zadanie wieloetapowe. Audyt `blok_D/audyty/D04_AUDYT.md`.
- **D05 Rozprawka v3.0:** pogłębiono procedurę planowania, dodano modelowy akapit i pełną rozprawkę z analizą kompozycji, zadania naprawcze i rozszerzoną rubrykę. Audyt `blok_D/audyty/D05_AUDYT.md`.

Następne w kolejce pogłębionego audytu: **D06 — opowiadanie twórcze**, a potem D07 i kolejne, bez oczekiwania na zatwierdzenie.

- **D06 Opowiadanie twórcze v3.0:** dodano planowanie celu/przeszkody/stawki, tabelę scen, pełne opowiadanie modelowe i analizę narracji, przyczynowości oraz zakończenia. Audyt `blok_D/audyty/D06_AUDYT.md`.
- **D07 Przemówienie v3.0:** dodano pełne przemówienie modelowe, analizę retoryczną, dopasowanie rejestru do odbiorcy i rozróżnienie perswazji od manipulacji. Audyt `blok_D/audyty/D07_AUDYT.md`.

Następna lekcja: **D08 — list oficjalny**. Kontynuować sekwencję bez oczekiwania na zatwierdzenie.

- **D08 List oficjalny v3.0:** dodano pełny model, analizę elementów, klinikę błędów oraz transformację stylu potocznego w formalny. Audyt `blok_D/audyty/D08_AUDYT.md`.
- **D09 Krótkie formy użytkowe v3.0:** dodano kompletne modele ogłoszenia, zaproszenia, podziękowania i życzeń, tabelę wyboru oraz kontrolę fikcyjnych danych. Audyt `blok_D/audyty/D09_AUDYT.md`.

Następna lekcja: **D10 — streszczenie i przekształcanie tekstu**. Kontynuować bez zatwierdzania.

- **D10 Streszczenie i przekształcanie v3.0:** dodano tekst źródłowy, streszczenia o różnej długości, kontrolę zastrzeżeń i ćwiczenia z kluczem. Audyt `blok_D/audyty/D10_AUDYT.md`.
- **D11 Lektura jako dowód v3.0:** dodano procedurę doboru lektury, modelowy argument z *Opowieści wigilijnej* i tabelę oceny trafności przykładu. Audyt `blok_D/audyty/D11_AUDYT.md`.

Następna lekcja: **D12 — kontrola języka i zapisu**. Kontynuować bez zatwierdzania.

- **D12 Kontrola języka i zapisu v3.0:** dodano hierarchię korekty, klinikę błędów, dziennik i test korektorski. Audyt `blok_D/audyty/D12_AUDYT.md`.
- **D13 Zadania przekrojowe v3.0:** dodano pełny zestaw łączący tekst i tabelę, klucz, warianty pisemne oraz diagnozę błędów. Audyt `blok_D/audyty/D13_AUDYT.md`.

**D01–D13: zakończono drugi wewnętrzny cykl analizy braków, uzupełnienia i ponownej kontroli.** Następny etap: audyt spójności bloku D jako całości, potem przejście do kolejnego obszaru polskiego. Nie wysyłam ZIP-a pośredniego.


## Następna kolejka — lekcje L001–L006

- **L001 — audyt wykonany:** porównano główny HTML z wariantami i masterem; poprawiono nieprecyzyjne pytanie interaktywne o pisownię „nie” z imiesłowami; sprawdzono unikalność ID i składnię JS. Audyt `plany/audyty/L001_AUDYT_2026-10-09.md`.
- Następna lekcja do analizy: **L002 — „Hobbit” i nieodmienne części mowy**. Zachować wszystkie warianty, wybrać kanoniczny po porównaniu i wykonać cykl analizy → uzupełnienia → ponownej kontroli.

- **L002 — audyt i uzupełnienie:** porównano wersje, dodano mikroćwiczenie „czy” w pytaniu bezpośrednim, zależnym i alternatywnym; sprawdzono strukturę ID i JS. Audyt `plany/audyty/L002_AUDYT_2026-10-09.md`.
- Następna lekcja: **L003 — „Opowieści z Narnii” i zaimek**.

- **L003 — audyt i doprecyzowanie terminologii:** dodano uwagę o szkolnej klasyfikacji „gdzie/kiedy”; audyt `plany/audyty/L003_AUDYT_2026-10-09.md`.
- **L004 — korekta obu wariantów:** usunięto mylącą wskazówkę, że zapis rozdzielny „nie” z przymiotnikiem jest zawsze akceptowalny; doprecyzowano warunek rzeczywistego przeciwstawienia zgodnie z RJP. Audyt `plany/audyty/L004_AUDYT_2026-10-09.md`.
- Następna lekcja: **L005 — „Kajko i Kokosz” i rzeczownik**.

- **L005 — audyt i uzupełnienie:** dodano mikroćwiczenie o „niepogodzie”, „nieprzyjacielu” i konstrukcji przeciwstawnej; audyt `plany/audyty/L005_AUDYT_2026-10-09.md`.
- **L006 — korekta i uzupełnienie:** zawężono heurystykę pisowni „nie” z czasownikami i dodano test wyjątków; audyt `plany/audyty/L006_AUDYT_2026-10-09.md`.
- Następny krok: **zbiorczy audyt L001–L006, kontrola JS/ID i sprawdzenie spójności wszystkich sześciu lekcji**.

- W głównych wariantach L003–L006 zaktualizowano zastrzeżenie o zakresie lektur: historyczna wzmianka o sesjach 2024/2025–2025/2026 nie jest przedstawiana jako automatyczne potwierdzenie zakresu 2026/2027; należy sprawdzić aktualne materiały CKE.

- **Ortografia 2026:** w L001 i obu wariantach L004 dodano oficjalne zastrzeżenie CKE o okresie przejściowym 2026–2030 (akceptacja obu systemów w ocenianiu), oddzielając je od normy ortograficznej obowiązującej od 1.01.2026 r.


## L008 — zakończony cykl analizy i uzupełnienia (2026-10-09)

- **L008 Części zdania v4.0:** porównano szkielet z G12–G14, rozbudowano do pełnej lekcji, dodano rozbiór, klinikę błędów, ćwiczenia, test 21-punktowy i klucz.
- Audyt: `plany/audyty/L008_AUDYT_2026-10-09.md`.
- Następna lekcja: **L009 — zdania pojedyncze i złożone**; kontynuować bez zatwierdzania.

- **L009 Zdania pojedyncze i złożone v4.0:** porównano z G14–G16, rozbudowano klasyfikację zdań, interpunkcję, wykresy, ćwiczenia i test 20-punktowy. Audyt: `plany/audyty/L009_AUDYT_2026-10-09.md`.
- Następna lekcja: **L010 — środki stylistyczne**.

- **L010 Środki stylistyczne v4.0:** porównano z S01–S06, rozbudowano definicje, przykłady, analizę modelową, ćwiczenia i test 20-punktowy. Audyt: `plany/audyty/L010_AUDYT_2026-10-09.md`.
- Następna lekcja: **L011 — elementy utworu, morał, puenta, narrator i podmiot liryczny**.

- **L011 Elementy utworu, morał i puenta v4.0:** rozbudowano rodzaje literackie, narratora/podmiot liryczny, kompozycję, gatunki, morał/puentę/przesłanie oraz test 20-punktowy. Audyt: `plany/audyty/L011_AUDYT_2026-10-09.md`.

- **L007 Przegląd części mowy v3.0:** wykonano wewnętrzny audyt W2, dodano aktualizację ortografii „nie” z imiesłowami i okres przejściowy CKE 2026–2030. Audyt: `plany/audyty/L007_AUDYT_2026-10-09.md`.


## STAN AKTUALNY — 2026-10-09

- Blok D: D01–D13 v3.0 po drugim cyklu analizy braków, uzupełnienia i ponownej kontroli.
- Blok G: G01–G17 w `podstawy/`, z audytami w `blok_G/audyty/`.
- Blok S: S01–S06 w `podstawy/`, z audytami w `blok_S/audyty/`.
- Lekcje L001–L006: porównano warianty HTML, poprawiono wskazane nieścisłości; główne wersje wskazuje `MAPA_POLSKI.md`.
- Lekcje L007–L011: L007 v3.0 po audycie W2 wewnętrznym; L008–L011 pełne lekcje v4.0, każda z audytem.
- Zasoby historyczne, szkielety i masterowe wersje pozostają zachowane.
- Kolejny etap nie jest pisaniem nowych szkiców, lecz niezależną recenzją polonistyczną i walidacją zakresu z aktualnym informatorem/arkuszami CKE.
- ZIP końcowy obejmuje cały katalog `polski/`, w tym stare i nowe pliki, mapy, szkielety i audyty.
