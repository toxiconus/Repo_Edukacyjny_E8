# P01 „Blok s — litowce i berylowce” — zebrane błędy, decyzje i reguły

Źródło: dwa raporty audytu (pierwszy: ocena kodu, merytoryki i wyglądu; drugi: poprawki po odpowiedzi autora) oraz prompt z sekcjami A–H. Stan: **zapisane, bez zmian w lekcji i w kodzie.** Lekcja `P01_blok_s_litowce_berylowce_s01.md` zostaje w obecnym stanie do czasu decyzji o korekcie.

## 1. Zasady, które obowiązują przy korekcie (decyzje autora)

- Lekcja jest **celowo przeładowana** (ambitny ósmoklasista, olimpiada, LO bio-chem). Nie redukować do minimum egzaminacyjnego. Poziomy: rdzeń, rozszerzenie, olimpijskie, akademickie.
- Reakcji niebezpiecznych **nie usuwać**, bo lekcja jest wirtualna. Przy każdej dodać status i ostrzeżenie: „przedstawiono komputerowo, nie jako instrukcja doświadczenia”.
- **Trzy probówki** zostają jako domyślna sekwencja, ale z różnymi efektami (nie trzy metale z jednego trendu).
- **Sekwencje palnikowe** zostają, ale każda ma inny cel dydaktyczny i inną nazwę. Nie usuwać ich, tylko przenazwać i rozdzielić.
- Powtórzenia: zachować, jeśli mają inną funkcję (wykład, ćwiczenie, klinika błędów, fiszka, test). Ograniczać tylko dosłowne duplikaty albo oznaczać je jako skrótowe. Ponieważ powtórki wynikają ze skryptu generującego, usuwanie ma iść **regułami w generatorze**, nie ręcznie.
- Przy zmianach: najpierw lista zmian, dopiero potem pełny kod (zasada z promptu).
- Wzory zapisywać poprawnie z indeksami, nawiasami i ładunkami.

## 2. Błędy bezdyskusyjne (wzory i równania)

| W pliku / w opisie | Poprawnie |
|---|---|
| `CaOH` | `Ca(OH)₂` |
| `BaOH` | `Ba(OH)₂` |
| `BeOH` | `Be(OH)₂` |
| `Ca₂OH` (wariant pytania 7 w teście, dystraktor) | `Ca(OH)₂` — pozostawić jako dystraktor tylko jako jawny błąd, nie jako równorzędną opcję |
| `LiO` | `Li₂O` |
| `NaO` (jako produkt spalania sodu) | `Na₂O₂` |
| `BaSO` | `BaSO₄` |
| `CO HO HCO` | `CO₂ + H₂O → H₂CO₃` |
| `CaO HO CaOH` | `CaO + H₂O → Ca(OH)₂` |
| `NaO HO 2 NaOH` | `Na₂O + H₂O → 2 NaOH` |
| `2 Na 2 HO 2 NaOH H` | `2 Na + 2 H₂O → 2 NaOH + H₂` |
| `2 K 2 HO 2 KOH H` | `2 K + 2 H₂O → 2 KOH + H₂` |
| `Mg O MgO` | `2 Mg + O₂ → 2 MgO` |
| `BeOH 2 HCl BeCl 2 HO` | `Be(OH)₂ + 2 HCl → BeCl₂ + 2 H₂O` |
| `BeOH 2 OH BeOH` | `Be(OH)₂ + 2 OH⁻ → [Be(OH)₄]²⁻` |
| `2Na + O₂` (bez produktu) | `2 Na + O₂ → Na₂O₂` |

Źródło wpadki: w md brak indeksów w wielu miejscach (`CaOH`, `BaOH`, `BeOH`, `LiO`, `NaO`, `BaSO`). Wzory w md z jednolitym zapisem `Ca(OH)<sub>2</sub>` lub znakami Unicode.

Grep z 13.10 w `P01_…_s01.md`: `CaOH` w linii 339, `Ca₂OH` w linii 340, poprawne `Ca(OH)₂` w liniach 23, 50, 175, 227, 231, 273, 338, 355; `Ba(OH)₂` w 23, 50, 175; `Be(OH)₂` w 230, 231, 255, 278, 382, 393; `BeO` w 222, 251; `Na₂O₂` w 292; zdanie o lampach sodowych w linii 206.

## 3. Nieścisłości (zmienić sformułowanie)

- **Tlenki:** „Tlenki litowców i berylowców są zasadowe” → „Tlenki litowców są zasadowe. Tlenki berylowców mają charakter zasadowy, z wyjątkiem amfoterycznego BeO.” Dodać: MgO jest zasadowy, ale reaguje z wodą powoli i słabo widocznie.
- **Wodorotlenki:** „LiOH, NaOH, KOH, CaOH, BaOH to zasady” → „LiOH, NaOH, KOH, Ca(OH)₂ i Ba(OH)₂ mają właściwości zasadowe; Be(OH)₂ jest amfoteryczny.” Nie pisać „zasada mocna” przy wszystkich. Rozpuszczalność i moc to różne pojęcia. Przy Ca(OH)₂ nie pisać „czysta zasada”.
- **Beryl:** nie tłumaczyć braku reakcji wyłącznie warstwą BeO. Dopisać: mały promień, duża energia jonizacji, niska rozpuszczalność produktów. Na poziomie podstawowym wystarczy warstwa tlenku.
- **Reaktywność:** „rośnie w dół — im większy atom, tym łatwiej oddaje elektrony” → wersja z zastrzeżeniem: trend na ogół, zależny od warstwy powierzchniowej, rozpuszczalności produktów i warunków. Nie przedstawiać jako prawa bez wyjątków.
- **Reakcje z wodą:** „Metal grupy 1 lub 2 reaguje z wodą…” → „Aktywne metale grupy 1 oraz wybrane metale grupy 2 reagują z wodą… szybkość zależy od metalu, temperatury, powierzchni i warstwy tlenkowej.”
- **Mg:** „Mg reaguje lepiej z gorącą wodą” → „Mg reaguje z gorącą wodą bardzo powoli; z parą wodną wyraźniej: Mg + H₂O(g) → MgO + H₂.”
- **Tabela reakcji z wodą:** „Grupa 2: Ca, Sr, Ba; Be, Mg — wolno lub wcale” jest nieczytelna. Zastąpić tabelą: metal × zimna woda × gorąca woda / para.
- **Ca + woda:** dopisać obserwację (pęcherzyki H₂, zmętnienie od słabo rozpuszczalnego Ca(OH)₂).
- **Lampy sodowe (ćw. B3):** „zawierają sód w postaci związku lub par w szczelnej bańce” → „Lampa sodowa wykorzystuje pary sodu zamknięte w szczelnej rurze wyładowczej, dlatego metal nie ma kontaktu z wodą ani wilgocią.” (Niskoprężne: metaliczny sód + gaz pomocniczy; wysokoprężne: bardziej złożona mieszanina.)
- **Pytanie przewodnie:** „Dlaczego magnez pali się jak pasek do zapalniczki” jest mylące (taśma wymaga rozgrzania, pali się bardzo jasnym światłem). Proponowane: „Dlaczego sód przechowuje się pod naftą, a magnezową taśmę można po rozgrzaniu spalać w powietrzu?”
- **Zadanie C2:** przy reakcji z zasadą podać zapis jonowy `Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻`.
- **Zadanie C3:** `CaO + H₂O → Ca(OH)₂` — dopisać ostrożność (reakcja egzotermiczna, małe ilości). Dla MgO: „reaguje bardzo powoli i słabo; zawiesina może mieć odczyn zasadowy” zamiast „nie reaguje”.
- **Tlenki litowców — produkty spalania:** zdanie „litowce spalają się w tlenie, tworząc tlenki” za ogólne → „Litowce reagują z tlenem, ale główny produkt zależy od metalu i warunków: tlenki, nadtlenki lub ponadtlenki.” Lit: głównie Li₂O; sód: przede wszystkim Na₂O₂; potas i cięższe: ponadtlenki, np. KO₂.
- **Barwy płomieni:** potas „fioletowy” → „fioletowy, najlepiej obserwowany przez filtr kobaltowy”.

## 4. Ostrzeżenia i statusy (obowiązkowe przy każdej reakcji niebezpiecznej)

Trzy statusy (propozycja z raportu), zastosować przy każdej reakcji:
- **doświadczenie rzeczywiste — tylko nauczyciel**;
- **demonstracja wirtualna lub film**;
- **opis reakcji bez wykonania**.

Decyzja z odpowiedzi autora: etykieta statusu zamiast zakazu, np.
> **Status: wizualizacja komputerowa.** Rzeczywista reakcja sodu z wodą jest niebezpieczna i wymaga profesjonalnych warunków.

Dla radu:
> **Model teoretyczny.** Rad jest promieniotwórczy i nie jest używany w szkolnych doświadczeniach. W tej lekcji pokazujemy jedynie jego miejsce w grupie 2 i przewidywane analogie chemiczne.

Ostrzeżenie ma stać **bezpośrednio przy reakcji**, a nie tylko w ogólnej sekcji BHP. Przykład dla potasu: „Potas reaguje z wodą bardzo gwałtownie; może się stopić, zapalić, a rozprysk żrącego KOH… W tej lekcji obserwację zastępuje film lub symulacja.”

## 5. Sekwencje: propozycja podziału (nazwy i cele)

Zamiast „palniki” jako wspólnego nagłówka, cztery sekwencje z wyraźnym celem:

1. **Reakcje z wodą** — cel: różnica między metalem, tlenkiem i wodorotlenkiem.
2. **Próby płomieniowe** — cel: identyfikacja metalu po barwie. Na, K, Ca, Sr, Ba (Li: karmazynowoczerwony). Bez Mg.
3. **Spalanie i utlenianie** — cel: produkty reakcji z tlenem. Li → Li₂O; Na → Na₂O₂; K → KO₂; Mg → MgO; Ca → CaO; Sr → SrO; Ba → BaO. Z zastrzeżeniem: produkt zależy od metalu, dostępu tlenu i warunków. Spalanie Mg osobna karta, bez porównania z próbą płomieniową.
4. **Modele teoretyczne i reakcje niemożliwe w szkole** — Rb, Cs, Ra; reakcje Na i K z wodą jako film lub symulacja.

Decyzje otwarte (do rozstrzygnięcia z autorem):
- czy Ra zostawić w sekwencji palnikowej, czy przenieść wyłącznie do tabeli układu okresowego / sekcji „pierwiastki nieprzeznaczone do doświadczeń szkolnych” (raport: przenieść);
- kolor płomienia Cs: źródło (WebMineral) podaje fioletowy; projekt używa niebiesko-fioletowego #5aa4ff — do sprawdzenia przed W1.

## 6. Trzy probówki — domyślna sekwencja z różnymi efektami

Propozycja z raportu (wersja 1, zgodna z celem „różne efekty”):

| Probówka | Substancja | Efekt | Znaczenie |
|---|---|---|---|
| 1 | Mg + zimna woda | prawie brak widocznej reakcji | metal grupy 2 reaguje bardzo wolno |
| 2 | Ca + woda | pęcherzyki H₂, zmętnienie, odczyn zasadowy | wyraźna reakcja metalu z wodą |
| 3 | CaO + woda | ogrzewanie, powstanie zasady | reakcja tlenku z wodą |

Alternatywa z litowcem (wersja 2): Mg + zimna woda / Ca + woda / Na + woda (demonstracja nauczycielska lub film). Dopowiedzieć, że Mg < Ca < Na nie jest prostą kolejnością całego układu, tylko zestawem metali i warunków.

Nie dawać jako domyślnej sekwencji: Li–Na–K (ryzyko, podobny typ reakcji), Be–Mg–Ca (beryl niedostępny i toksyczny), Rb–Cs (tylko opis, film lub symulacja). Zachować je w rozszerzonej osi reaktywności.

Decyzja autora: nie zmieniać sekwencji domyślnej na jeden zestaw, zachować różnorodność efektów; na razie nie kodować.

## 7. Struktura lekcji (propozycja z raportu)

1. Pytanie przewodnie
2. Minimum do zapamiętania
3. Litowce i berylowce — podobieństwa i różnice
4. Trend reaktywności w grupie
5. Doświadczenie z wodą (tabela, probówki)
6. Równania reakcji z wodą
7. Tlenki i wodorotlenki
8. Próby płomieniowe (jedna sekwencja)
9. Osobno: spalanie magnezu
10. Zastosowania
11. Klinika błędów
12. Ćwiczenia
13. Rozszerzenie: beryl i amfoteryczność
14. Fiszki i test
15. Checklista

Oznaczenia warstw (zaproponowane w prompcie): RDZEŃ, ROZSZERZENIE, OLIMPIJSKIE, AKADEMICKIE, WIZUALIZACJA, MODEL TEORETYCZNY, UWAGA: RZECZYWISTA REAKCJA NIEBEZPIECZNA. Treści olimpijskie i akademickie domyślnie w `<details>`.

Uwaga od autora: jeśli lekcja ma być pełna, nie wycinać. Oznaczać i chować w rozwijane sekcje.

## 8. Powtórzenia — co ograniczyć, co zachować

Zachować (różna funkcja): wykład, przykład, klinika błędów, fiszka, test.

Ograniczyć (dosłowne duplikaty): pełne równanie Na + H₂O; lista barw płomienia; to samo wyjaśnienie wzrostu reaktywności; ta sama informacja o warstwie BeO; identyczny wzór w sekcji podstawowej, fiszkach i teście.

Reguła dla generatora (do wdrożenia): pełne objaśnienie pojawia się raz; kolejne wystąpienie to skrót lub odsyłacz („zob. mechanizm wyżej”); fiszka — tylko hasło i odpowiedź; test — pytanie bez ponownego wykładu.

## 9. Wizualne i kodowe (do zrobienia przy korekcie)

- Zamienić ciężkie ramki na hierarchię: cienki pasek koloru przy nagłówku; kolor dla rdzenia, rozszerzenia i bezpieczeństwa; neutralne tło przykładów. Karty tylko dla doświadczeń, ćwiczeń, kliniki, fiszek i testu.
- Stałe etykiety przy blokach: RDZEŃ, OBSERWACJA, RÓWNANIE, PUŁAPKA, BEZPIECZEŃSTWO, ROZSZERZENIE.
- Doświadczenia tabelą: doświadczenie × obserwacja × równanie × wniosek.
- Wzory w `<sub>`/`<sup>` lub Unicode, jednolicie; strzałki `→`, jony `OH⁻`, `H⁺`.
- Skrócić wstęp: zostawić tylko opis lekcji i pytanie przewodnie; metadane (kanon, benchmarki, wersja, źródło) na dół lub do sekcji autora.
- Przy kartach doświadczeń: cel → sprzęt → obserwacja → równanie → wniosek → bezpieczeństwo.
- Dostępność: etykiety elementów interaktywnych, kontrast tekstu na ciemnym tle wizualizacji, responsywność (telefon).

## 10. Priorytety (z raportu)

**Konieczne:** wszystkie wzory z `OH`; `Li₂O`, `Na₂O₂`, `BaSO₄`; równania z wodą; reakcja amfoteryczna berylu; usunąć rad z listy zwykłych prób płomieniowych; ostrzeżenia bezpośrednio przy Na, K, Ba i Ra; odróżnić próbę płomieniową od spalania Mg.

**Ważne:** rozdzielić reakcję z wodą od reakcji z parą; doprecyzować produkty utleniania litowców; zaznaczyć amfoteryczność BeO i Be(OH)₂; nie pisać, że wszystkie tlenki berylowców są zasadowe; zastąpić „czystą zasadę” przy Ca(OH)₂.

**Opcjonalne:** ograniczyć powtórzenia w generatorze; wizualnie rozdzielić barwy płomieni od spalania metali; metadane na koniec; ikony statusu: wykonalne / tylko nauczyciel / film-symulacja / teoria.

## 11. Czego nie usuwać

- Reakcji sodu, potasu, baru, radu (są wizualizacjami i to one pokazują granicę chemii szkolnej).
- Sekwencji palnikowych (zmienić nazwy i funkcje).
- Treści olimpijskich i akademickich (oznaczyć, nie usuwać).
- Trzech probówek z różnymi efektami jako domyślnej wizualizacji.
- Pytania przewodniego o sodzie i magnezie (po zmianie sformułowania).

## 12. Do ustalenia w kolejnym kroku

1. Kolor Cs (fiolet źródła vs niebiesko-fioletowy projektu).
2. Ra: sekwencja palnikowa czy tylko tablica i sekcja „nieprzeznaczone do doświadczeń”.
3. Zestaw probówek: wersja 1 (Mg / Ca / CaO) czy wersja 2 (Mg / Ca / Na film).
4. Reguła ograniczania powtórzeń w generatorze — konkretne typy treści.
5. Kiedy wprowadzić korektę (po poleceniu autora; najpierw lista zmian, potem kod).
