---
kod: F00
tytul: "Blok F — część wspólna (kontrakt, systemy zadań, powtórek, mistrzostwa, specyfikacje)"
zrodla: "MASTER v17.0; MASTER v15.0; MASTER v14.0; stary kanon F00–F09 (v4.1/v5.0); stary kanon F00–F09 (v4.1/v5.0); MASTER v15.0 — audyt zmian"
opis: "Materiał roboczy lekcji (nie gotowa lekcja). Spis i zakres: chemia/plany/CHE_SPIS_TRESCI.md"
---
# CHE.01F — FUNDAMENTY CHEMII · MASTER v17.0 · 21 LEKCJI (v16 + warstwa v0.2x)

**Baza:** v14.0_21_LEKCJI_UDOSKONALONE
**Tryb:** zachowanie treści + naprawa struktury + uzupełnienia punktowe + centralizacja warstw wspólnych.
**Nie usunięto treści unikalnej. Usunięto tylko potwierdzone duplikaty strukturalne lub przeniesiono je do właściwego właściciela.**

## DZIENNIK ZMIAN v16.0

- globalnie zastąpiono szablonową diagnozę konkretnymi pytaniami tematycznymi + klucz + interpretacja;
- karty „STARTOWA E8 — 10 rzeczy” doprecyzowano tak, aby każdy punkt był faktem/umiejętnością z przykładem;
- treści „WARSTWA ULEPSZENIA” włączono do właściwych miejsc zamiast utrzymywać równoległe wykłady;
- F10 rozszerzono o rdzeń E8, przykłady NaCl/H₂/Cl₂/O₂/N₂/HCl/H₂O, energię, wyjątki oktetu, doświadczenie i pełny trening;
- F15 rozszerzono o elektroujemność, δ, wektory, CO₂/H₂O/NH₃/CH₄, oddziaływania i doświadczenia;
- F18–F21 rozbudowano do pełnych lekcji integracyjnych;
- dodano wymagane hipotezy i BHP do doświadczeń, tam gdzie wskazywał prompt;
- dodano brakujące mapy myśli/checklisty i testy w cienkich lekcjach;
- usunięto oczywiste sztuczne masy atomowe z zadań lub oznaczono je jako fikcyjne X;
- dopisano specyfikacje V004, V009, V012, V014 i V015;
- zachowano istniejącą treść v15.0; nowe fragmenty są oznaczone komentarzami v16.0.

---

## JEDEN KANON: 21 PEŁNYCH LEKCJI BLOKU F

**Status:** kanon roboczy bloku F po pełnym passie A1–A8, B i C z promptu v15.0 → v16.0.

**v16.0 — zakres zmian:** konkretne karty E8 i diagnozy w 21 lekcjach; integracja WARSTW ULEPSZENIA; rozbudowa F10/F15/F18–F21; hipotezy i BHP; testy/fiszki/checklisty/mapy myśli; poprawa danych przykładowych i struktury; tabela podziału części wspólnej; specyfikacja V004/V009/V012/V014/V015.

**Reguła nadrzędna:** blok F ma dokładnie **21 lekcji**. W całym pliku obowiązuje wyłącznie numeracja `CHE.01F.01`–`CHE.01F.21`. Nie istnieje równoległy podział lekcji ani alternatywna numeracja dydaktyczna.

**Cel bloku F:** zbudować jeden ciąg rozumowania od obserwacji materii do samodzielnego opisu substancji i reakcji:

```text
obserwacja
→ materia i właściwości
→ atom i skład
→ układ okresowy i elektrony
→ ładunek / wartościowość / stopień utlenienia
→ przyczyna tworzenia wiązań
→ wiązanie i wzór
→ Lewis
→ geometria i polarność
→ obserwacja reakcji
→ równanie i bilans
→ pełne dossier substancji i reakcji
→ diagnoza błędów
→ transfer do nowych problemów
```

## DLACZEGO BLOK F MA 21 LEKCJI

Podział na 21 lekcji nie jest mechanicznym rozdrobnieniem materiału. Każda lekcja ma mieć **jedno dominujące pytanie**, własny model pojęciowy, kontrolę błędów i konkretny wynik, który staje się wejściem do kolejnej lekcji. Dzięki temu uczeń nie musi jednocześnie uczyć się zbyt wielu nowych reprezentacji chemicznych.

21 lekcji pozwala rozdzielić pojęcia, które łatwo się mieszają: izotop i jon; grupa i okres; powłoka, podpowłoka i orbital; wartościowość, ładunek i stopień utlenienia; wzór i struktura Lewisa; polarność wiązania i polarność cząsteczki; obserwację doświadczenia i równanie reakcji. Każde z tych rozróżnień otrzymuje własne miejsce zanim zostanie użyte w zadaniu złożonym.

Układ jest jednocześnie **spiralny**: pojęcie wprowadzone wcześniej wraca później w bogatszym kontekście. Atom wraca w konfiguracji elektronowej, konfiguracja w wiązaniach, wiązania w Lewisie i geometrii, geometria w polarności, a wszystkie te warstwy wracają w dossier substancji i reakcji.

## PIĘĆ FAZ BLOKU F

### Faza A — co badamy? · lekcje 01–03
Uczeń dostaje mapę chemii, odróżnia materię, substancję, pierwiastek, związek i mieszaninę oraz łączy właściwości z fazą, zjawiskiem i metodą rozdzielania. To poziom makroskopowy: najpierw obserwujemy i klasyfikujemy.

### Faza B — z czego to wynika? · lekcje 04–09
Przechodzimy do atomu, izotopów, jonów, układu okresowego i konfiguracji elektronowej. Potem porządkujemy trzy różne języki formalne: wartościowość, ładunek i stopień utlenienia. Ta faza buduje mikroskopowe wyjaśnienie składu i zachowania substancji.

### Faza C — jak powstaje struktura? · lekcje 10–15
Najpierw odpowiadamy, dlaczego atomy się łączą, potem rozróżniamy typy wiązań. Dopiero na tej podstawie budujemy wzory, struktury Lewisa, geometrię VSEPR i polarność. Kolejność prowadzi od przyczyny energetyczno-elektronowej do przestrzennej struktury i właściwości.

### Faza D — jak opisujemy przemianę? · lekcje 16–17
Uczeń oddziela obserwację od interpretacji, rozpoznaje oznaki reakcji i przechodzi do równania chemicznego. Bilans atomów i ładunku jest skutkiem zasady zachowania, a nie sztuczką rachunkową.

### Faza E — integracja i samodzielność · lekcje 18–21
Dossier substancji scala wszystkie informacje o jednym obiekcie, dossier reakcji scala cały przebieg przemiany, klinika błędów naprawia typowe pomyłki, a transfer sprawdza, czy uczeń potrafi użyć całego systemu w nowej sytuacji bez podpowiedzi działu.

## STANDARD KAŻDEJ PEŁNEJ LEKCJI

```text
orientacja
→ pytanie przewodnie
→ cele i wymagania wstępne
→ diagnoza startowa
→ definicje operacyjne
→ pełny wykład
→ model rozumowania
→ przykłady krok po kroku
→ doświadczenie / wizualizacja
→ klinika błędów
→ ćwiczenia
→ odpowiedzi i autokontrola
→ zadanie transferowe
→ diagnostyka
→ rozszerzenie
→ powtórka
→ podsumowanie
→ most do następnej lekcji
```

## ZASADY INTEGRACJI TREŚCI

1. Jedna informacja merytoryczna powinna mieć jedno główne miejsce, a w innych lekcjach być przywoływana tylko jako zależność.
2. Każda nowa reprezentacja musi wynikać z poprzedniej: symbol nie może pojawiać się bez znaczenia, wzór bez składu, Lewis bez elektronów walencyjnych, VSEPR bez domen elektronowych, równanie bez modelu reakcji.
3. Wersja E7/E8, LO podstawowa, LO rozszerzona i pomost akademicki mają być warstwami tej samej lekcji, a nie osobnymi kursami.
4. Doświadczenia, wizualizacje i dane silnika mają korzystać ze wspólnych rekordów; lekcja nie tworzy własnej konkurencyjnej „prawdy danych”.
5. Błędy ucznia są częścią projektu lekcji: przy każdym kluczowym pojęciu ma istnieć kontrprzykład lub test odróżniający je od pojęcia podobnego.
6. Lekcje 18–21 nie są dodatkiem. To obowiązkowa warstwa integrująca cały blok i sprawdzająca transfer wiedzy.

---

## MAPA KANONICZNYCH 21 LEKCJI

| Nr | ID | Lekcja | Główne pytanie / wynik |
|---:|---|---|---|
| 01 | `CHE.01F.01-MAPA` | Mapa chemii i instrukcja fundamentów | Jak poruszać się między obserwacją, modelem, symbolem i równaniem? |
| 02 | `CHE.01F.02-MATERIA` | Materia, substancja, pierwiastek, związek i mieszanina | Co właściwie badamy i jak klasyfikujemy próbkę? |
| 03 | `CHE.01F.03-WŁAŚCIWOŚCI-I-ROZDZIELANIE` | Właściwości, fazy, zjawiska i rozdzielanie mieszanin | Jak właściwości pozwalają rozpoznać i rozdzielać składniki? |
| 04 | `CHE.01F.04-ATOM` | Atom: Z, A, protony, neutrony i elektrony | Jak skład atomu zapisujemy liczbowo? |
| 05 | `CHE.01F.05-IZOTOPY-JONY` | Izotopy, nuklidy, jony i masa atomowa | Co może zmienić się w atomie bez zmiany tożsamości pierwiastka? |
| 06 | `CHE.01F.06-UKŁAD` | Układ okresowy | Jak położenie pierwiastka porządkuje i przewiduje jego właściwości? |
| 07 | `CHE.01F.07-KONFIGURACJA` | Konfiguracja elektronowa | Jak rozmieszczone są elektrony? |
| 08 | `CHE.01F.08-KONFIGURACJA-UKŁAD` | Konfiguracja → okres, grupa, blok i walencyjność | Jak przechodzić w obie strony między konfiguracją a układem okresowym? |
| 09 | `CHE.01F.09-WARTOŚCIOŚĆ-LADUNEK` | Wartościowość, ładunek i stopień utlenienia | Której liczby używamy do opisu którego zjawiska? |
| 10 | `CHE.01F.10-DLACZEGO-LACZYMY` | Dlaczego atomy się łączą | Co energetycznie i elektronowo sprzyja tworzeniu trwałych układów? |
| 11 | `CHE.01F.11-WIĄZANIA` | Wiązania jonowe, kowalencyjne i metaliczne | Jak rozpoznać model wiązania i jego konsekwencje? |
| 12 | `CHE.01F.12-WZORY` | Wzory chemiczne | Jak poprawnie zapisać skład substancji? |
| 13 | `CHE.01F.13-LEWIS` | Struktury Lewisa i elektrony walencyjne | Jak pokazać elektrony i połączenia w strukturze? |
| 14 | `CHE.01F.14-GEOMETRIA` | Geometria cząsteczek: VSEPR, domeny i kąty | Jak z rozmieszczenia domen przewidzieć kształt? |
| 15 | `CHE.01F.15-POLARNOSC` | Polarność wiązań, cząsteczek i oddziaływania | Kiedy polarne wiązania dają polarną cząsteczkę i jakie ma to skutki? |
| 16 | `CHE.01F.16-REAKCJE-OBSERWACJA` | Od obserwacji do modelu reakcji | Skąd wiemy, że zaszła przemiana chemiczna i co naprawdę obserwujemy? |
| 17 | `CHE.01F.17-RÓWNANIA` | Równania reakcji, bilans atomów i ładunku | Jak zapisać przemianę zgodnie z zasadami zachowania? |
| 18 | `CHE.01F.18-DOSSIER-SUBSTANCJI` | Dossier substancji | Jak zebrać wszystkie warstwy wiedzy o jednej substancji w jeden spójny profil? |
| 19 | `CHE.01F.19-DOSSIER-REAKCJI` | Dossier reakcji | Jak opisać reakcję od reagentów i warunków po obserwacje, energię, BHP i równanie? |
| 20 | `CHE.01F.20-KLINIKA-BLEDOW` | Klinika błędów fundamentów | Jak wykryć, nazwać i naprawić błąd modelu, a nie tylko poprawić wynik? |
| 21 | `CHE.01F.21-TRANSFER` | Zadania transferowe i diagnostyka | Czy potrafimy połączyć cały blok w nowym problemie bez wskazania metody? |

---

# KONTRAKT WSPÓLNEGO SILNIKA I DANYCH — PO 21 LEKCJACH

Jedno źródło danych: CHE.DATA → CHE.CHEM → CHE.MOLECULE / CHE.REACTION → LESSON / VISUALIZATION / TEST / DOSSIER.

Lewis ↔ 2D ↔ 3D ↔ VSEPR ↔ kąty ↔ polarność muszą korzystać z tego samego modelu cząsteczki.

Próbówka ↔ obserwacja ↔ cząstki ↔ równanie ↔ bilans ↔ warunki/energia/BHP muszą korzystać z jednego modelu reakcji.

Każda lekcja ma własny rekord, wizualizacje i diagnostykę, ale korzysta ze wspólnego silnika.




---

# ANEKS V16.0 — ŚLAD INTEGRACJI TREŚCI V15.0

Poniższy aneks jest częścią dokumentacji redakcyjnej, nie drugą lekcją dla ucznia. Zawiera dokładne fragmenty v15.0, które zostały zintegrowane, skrócone lub zastąpione w części pedagogicznej v16.0. Zachowuje ślad treści, aby żaden unikalny szczegół źródłowy nie został utracony podczas konsolidacji. Przy kolejnych edycjach fragment może zostać przeniesiony do właściwego miejsca i wtedy usunięty z tego aneksu.

## F01 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — MODEL UCZENIA SIĘ

### Rdzeń lekcji
Ta lekcja ma nauczyć **jak myśleć chemicznie**, a nie tylko jak zapamiętać nazwy działów. Każdy dalszy temat powinien dać się umieścić w łańcuchu: **obserwacja → pytanie → model cząsteczkowy → zapis symboliczny → przewidywanie → sprawdzenie**.

### Trzy poziomy rozumienia
1. **Widzę** — potrafię opisać obserwację bez dopowiadania przyczyny.
2. **Wyjaśniam** — łączę obserwację z modelem cząstek i właściwością substancji.
3. **Przewiduję** — na podstawie modelu przewiduję wynik nowej sytuacji i wskazuję, co mogłoby mnie z niego wyprowadzić.

### Reguła kontroli odpowiedzi
Przed uznaniem odpowiedzi za poprawną uczeń sprawdza: **co opisuję, jaką mam jednostkę, czy użyłem właściwego modelu, czy zachowałem liczby atomów/ładunek oraz czy wniosek wynika z danych**.

### Transfer
Przykład: zamiast pytać tylko „co to jest sól?”, pytamy kolejno: z jakich cząstek/jonów jest zbudowana, jaki ma skład, jakie ma właściwości, jak można ją otrzymać, jak rozpoznać ją doświadczalnie i jak zapisać przemianę.


## DOŚWIADCZENIE, KLINIKA I ĆWICZENIA

### Doświadczenie-model
**Problem:** Czy opis słowny, model cząsteczkowy i zapis chemiczny mogą opisywać tę samą sytuację?  
**Hipoteza:** Tak, jeśli każdy poziom zachowuje informację istotną dla pytania.  
**Przebieg:** opisz obserwację makro, zaproponuj model, a następnie zapis symboliczny.  
**Wniosek:** reprezentacje są różne, ale powinny być wzajemnie zgodne.

### Klinika błędów
| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| obserwacja = wyjaśnienie | Najpierw zapisujemy obserwację | Wniosek wymaga modelu |
| symbol = znaczenie | Symbol trzeba zinterpretować | Sam zapis nie mówi, co oznacza bez kontekstu |
| model = rzeczywistość | Model ma zakres stosowalności | Każdy model upraszcza |

### Ćwiczenia + odpowiedzi
1. Podaj przykład obserwacji, która nie jest jeszcze wnioskiem. **Odp.: „powstał osad”.**
2. Co robi model? **Odp.: łączy dane z wyjaśnieniem i pozwala przewidywać.**
3. Co kontrolujemy po zapisie? **Odp.: zgodność z obserwacją i regułami chemicznymi.**

### Test jednokrotnego wyboru
**Która kolejność jest najbliższa pracy chemika?** A. wzór → zgadywanie → obserwacja; B. obserwacja → model → zapis → kontrola; C. definicja → odpowiedź → doświadczenie; D. zapis → obserwacja. **Odp.: B.**

### Fiszki
- obserwacja → dane;
- model → wyjaśnienie;
- zapis → skondensowana reprezentacja;
- kontrola → sprawdzenie zgodności.

### Słownik
**Model** — uproszczony opis układu używany do wyjaśniania i przewidywania. **Hipoteza** — sprawdzalne przypuszczenie. **Reprezentacja** — sposób przedstawienia tego samego obiektu lub procesu.

### Most
F01 ustala sposób pracy. F02 zaczyna używać tej metody do klasyfikowania materii.

## F02 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — KLASYFIKACJA MATERII BEZ SKRÓTÓW

### Drzewo decyzyjne
```text
PRÓBKA
├─ ma stały skład i charakterystyczne właściwości? → substancja czysta
│  ├─ jeden rodzaj atomów → pierwiastek
│  └─ co najmniej dwa pierwiastki związane chemicznie → związek
└─ zawiera składniki zachowujące własne tożsamości? → mieszanina
   ├─ jednorodna
   └─ niejednorodna
```

### Ważne rozróżnienie
„Pierwiastek” oznacza rodzaj atomów określony przez liczbę protonów; „substancja prosta” opisuje substancję zbudowaną z jednego pierwiastka, ale nie należy mieszać tego pojęcia z pojedynczym atomem. Związek ma określony skład pierwiastkowy i wiązania chemiczne, a mieszanina nie ma jednej własnej formuły chemicznej.

### Przykłady graniczne
Powietrze, stal i woda mineralna są mieszaninami; O₂ jest substancją prostą, a H₂O związkiem. Rozróżnienie trzeba uzasadniać składem i sposobem połączenia składników, nie wyglądem próbki.


## DODATKOWE DOMKNIĘCIE STANDARDU

### Klinika błędów
| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| Pierwiastek = każda substancja prosta | Pierwiastek to rodzaj atomów o tym samym Z; substancja prosta to substancja złożona z jednego pierwiastka | Poziomy pojęć są różne |
| Mieszanina = związek | Mieszanina zawiera kilka substancji | Związek ma określony skład chemiczny |

### Fiszki
- substancja czysta → stały skład;
- mieszanina → kilka substancji;
- mieszanina jednorodna → jedna faza w obserwacji makro;
- niejednorodna → więcej niż jedna faza.

### Test
**Który opis jest poprawny?** A. powietrze jest związkiem; B. NaCl jest mieszaniną; C. woda destylowana jest substancją czystą; D. piasek z wodą jest substancją czystą. **Odp.: C.**

### Słownik
**Pierwiastek** — rodzaj atomów o tej samej liczbie protonów. **Substancja prosta** — substancja złożona z jednego pierwiastka. **Związek** — substancja złożona chemicznie z atomów co najmniej dwóch pierwiastków. **Mieszanina** — fizyczne połączenie kilku substancji.

## TEST I PEŁNE DOMKNIĘCIE LEKCJI

### Klinika błędów
| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| „pierwiastek = substancja” | Pierwiastek to pojęcie dotyczące rodzaju atomów; substancja to konkretny materiał | Różne poziomy opisu |
| „mieszaninę można opisać jednym wzorem związku” | Mieszanina nie ma jednego wzoru chemicznego opisującego całość | Składa się z kilku substancji |
| „jednorodna = zawsze czysta” | Jednorodność dotyczy wyglądu/faz, nie liczby substancji | Roztwór może być jednorodną mieszaniną |

### Ćwiczenia + odpowiedzi
1. Zaklasyfikuj powietrze. **Odp.: mieszanina jednorodna.**
2. Zaklasyfikuj wodę jako czystą substancję. **Odp.: związek chemiczny, jeśli mowa o czystym H₂O.**
3. Zaklasyfikuj piasek z wodą. **Odp.: mieszanina niejednorodna.**

### Test jednokrotnego wyboru
**Który obiekt jest mieszaniną jednorodną?** A. piasek + woda; B. powietrze; C. czyste NaCl; D. kryształ lodu H₂O. **Odp.: B.**

### Fiszki
- materia → substancje + mieszaniny;
- substancja czysta → stały skład;
- związek → chemicznie połączone pierwiastki;
- mieszanina → kilka substancji.

### Słownik
**Materiał** — konkretny badany układ/materiał. **Substancja** — rodzaj materii o określonym składzie i właściwościach. **Faza** — jednorodna część układu pod względem składu i właściwości w przyjętym opisie.

### Most
Po klasyfikacji trzeba umieć wykorzystać różnice właściwości. To zadanie F03.

## F03 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — WŁAŚCIWOŚĆ → MODEL → METODA ROZDZIELANIA

### Kluczowa zasada
Metody rozdzielania nie wybiera się „z listy”, lecz na podstawie różnicy właściwości fizycznych składników: wielkości cząstek, temperatury wrzenia, rozpuszczalności, gęstości, właściwości magnetycznych lub powinowactwa do fazy.

### Procedura
**1.** Zidentyfikuj składniki. **2.** Znajdź właściwość, która się różni. **3.** Dobierz operację. **4.** Określ, co pozostanie w każdej frakcji. **5.** Oceń czystość produktu.

### Zjawisko fizyczne a chemiczne
Zmiana stanu skupienia, rozpuszczanie czy rozdrabnianie nie tworzą nowej substancji. Powstawanie nowych substancji, np. gazu w wyniku reakcji albo osadu po reakcji jonów, wymaga już interpretacji chemicznej. Samo pojawienie się pęcherzyków nie jest jednak automatycznie dowodem reakcji — gaz może wydzielać się także wskutek fizycznego odgazowania.

### Doświadczenie modelowe
Dla mieszaniny piasku i wody uczeń powinien umieć wskazać: różnicę wielkości cząstek → filtracja → osad + przesącz, a następnie zaproponować sposób odzyskania wody.


## TEST JEDNOKROTNEGO WYBORU

**Która metoda najlepiej wykorzystuje różnicę temperatur wrzenia składników?** A. filtracja; B. destylacja; C. magnes; D. sedymentacja. **Odp.: B.**

## MOST I CHECKLISTA

- [ ] odróżniam właściwość fizyczną od chemicznej;
- [ ] rozpoznaję fazy;
- [ ] dobieram metodę rozdzielania do różnicy właściwości;
- [ ] potrafię opisać obserwację i wniosek;
- [ ] wiem, że rozdzielanie mieszaniny nie musi być reakcją chemiczną.

F04 przechodzi z makroskopowej materii do modelu atomowego.

## F04 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — ATOM JAKO KSIĘGA LICZB

### Niezmienniki
Dla obojętnego atomu: **Z = liczba protonów = liczba elektronów**. Dla nuklidu: **A = p + n**, więc **n = A − Z**. Zmiana liczby neutronów daje izotop; zmiana liczby elektronów daje jon. Zmiana Z oznacza zmianę pierwiastka.

### Co naprawdę identyfikuje pierwiastek?
Wyłącznie liczba protonów. Masa atomu nie identyfikuje pierwiastka, a liczba elektronów może zmieniać się podczas jonizacji.

### Ćwiczenie kontrolne
Dla ^{23}_{11}Na, ^{24}_{11}Mg i Na⁺ uczeń powinien osobno odczytać Z, A, p, n i e⁻. Celem nie jest samo liczenie, lecz rozpoznanie, która liczba opisuje **jądro**, a która **stan elektronowy**.


## TEST JEDNOKROTNEGO WYBORU

**Dla `^23_11Na` liczba neutronów wynosi:** A. 11; B. 12; C. 23; D. 34. **Odp.: B.**

## FISZKI

- Z = p;
- A = p+n;
- neutralny atom: p=e;
- jon: zmieniona liczba e;
- izotopy: to samo Z, inne n.

## SŁOWNIK

**Liczba atomowa Z** — liczba protonów. **Liczba masowa A** — suma protonów i neutronów. **Jon** — cząstka naładowana wskutek nierówności liczby protonów i elektronów. **Izotop** — odmiana tego samego pierwiastka o innej liczbie neutronów.

## F05 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — IZOTOP, JON I MASA ATOMOWA

### Trzy operacje, trzy skutki
- **izotop:** zmiana n, Z pozostaje stałe;
- **jon:** zmiana e⁻, Z pozostaje stałe;
- **inny pierwiastek:** zmiana Z.

### Masa atomowa a liczba masowa
Liczba masowa A dotyczy konkretnego nuklidu i jest całkowitą sumą protonów i neutronów. Średnia masa atomowa pierwiastka w próbce naturalnej może być średnią ważoną mas izotopów; dlatego nie należy utożsamiać jej z A dowolnego pojedynczego atomu.

### Ładunek
Ładunek jonu wynika z bilansu protonów i elektronów: **q = p − e** w jednostkach ładunku elementarnego. Kation ma niedobór elektronów, anion ich nadmiar.

### Pułapka
„Izotop dodatni” nie oznacza jonu dodatniego z definicji. Można mieć np. różne izotopy tego samego pierwiastka oraz ich kationy lub aniony.


## DODATKOWE ĆWICZENIA I SŁOWNIK

1. Dla `^37_17Cl` podaj p, n, e. **Odp.: 17, 20, 17.**
2. Dla `Cl⁻` podaj p, e. **Odp.: 17, 18.**
3. Wyjaśnij różnicę między A i średnią masą atomową. **Odp.: A dotyczy konkretnego nuklidu; średnia masa uwzględnia naturalny skład izotopowy.**

### Słownik
**Nuklid** — konkretny rodzaj jądra określony przez Z i liczbę neutronów/A. **Izotopy** — nuklidy tego samego pierwiastka o różnej liczbie neutronów. **Kation** — jon dodatni. **Anion** — jon ujemny.

## KLINIKA BŁĘDÓW

| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| izotop = jon | Izotop zmienia n, jon zmienia e | To dwa niezależne parametry |
| A = średnia masa atomowa | A dotyczy jednego nuklidu | Średnia masa uwzględnia mieszaninę izotopów |

## TEST JEDNOKROTNEGO WYBORU

**Co pozostaje niezmienione między izotopami tego samego pierwiastka?** A. liczba neutronów; B. Z; C. A; D. masa konkretnego jądra. **Odp.: B.**

## MOST
F06 wykorzystuje Z i konfigurację do czytania układu okresowego.

## F06 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — UKŁAD OKRESOWY JAKO MAPA PREDYKCJI

### Czytanie układu w czterech krokach
**Z → okres → grupa → blok → właściwości/trendy.** Położenie nie jest tylko adresem: pozwala przewidywać liczbę powłok, charakter elektronowy i wiele trendów okresowych.

### Trendy z wyjaśnieniem
Promień atomowy na ogół rośnie w dół grupy, bo pojawiają się kolejne powłoki; w okresie zwykle maleje w prawo wskutek wzrostu efektywnego przyciągania jądra. Elektroujemność na ogół rośnie w prawo i ku górze. Są to trendy, nie bezwyjątkowe prawa dla każdego parametru i każdego modelu.

### Rodziny
Litowce, berylowce, fluorowce i gazy szlachetne należy poznawać nie tylko jako nazwy grup, ale jako rodziny o charakterystycznych konfiguracjach walencyjnych i podobieństwach reaktywności.


## SŁOWNIK

**Okres** — poziomy rząd układu okresowego. **Grupa** — pionowa kolumna. **Blok** — obszar związany z typem ostatniej obsadzanej podpowłoki. **Elektrony walencyjne** — elektrony istotne dla typowej chemii pierwiastków grup głównych.

## TEST JEDNOKROTNEGO WYBORU

**Co najpewniej odczytamy bezpośrednio z okresu pierwiastka?** A. liczbę protonów; B. najwyższą zajętą główną powłokę w podstawowym szkolnym modelu; C. ładunek jonu; D. liczbę neutronów. **Odp.: B.**

## MOST
Położenie w układzie jest użyteczne, ale pełną konfigurację trzeba umieć zapisać — F07.

## F07 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — KONFIGURACJA OD POWŁOKI DO ORBITALU

### Hierarchia
**powłoka n → podpowłoka s/p/d/f → orbitale → elektrony.** Podpowłoka s ma 1 orbital, p — 3, d — 5, f — 7; pojedynczy orbital może zawierać najwyżej 2 elektrony o przeciwnych spinach.

### Trzy zasady modelu
Reguła obsadzania najniższych dostępnych energii, zakaz Pauliego i reguła Hunda tworzą szkolny model zapisu konfiguracji. Kolejność energetyczna jest ważna, ale nie należy przedstawiać jej jako prostego „numerowania orbitali” niezależnego od atomu.

### Przejście atom → jon
Dla prostych kationów głównych grup konfigurację jonu można otrzymać przez odpowiednie usunięcie elektronów; dla metali przejściowych kolejność usuwania elektronów może wymagać osobnego modelu. Wyjątki konfiguracji, np. Cr i Cu, powinny być przedstawiane jako wyjątki od szkolnego schematu, a nie jako błąd reguły.


## SŁOWNIK

**Powłoka** — poziom głównej liczby kwantowej. **Podpowłoka** — część powłoki typu s, p, d lub f. **Orbital** — stan/obszar opisany funkcją orbitalną, mieszczący maksymalnie dwa elektrony o przeciwnych spinach. **Reguła Hunda** — w zdegenerowanych orbitalach elektrony zajmują najpierw osobne orbitale z równoległymi spinach.

## TEST JEDNOKROTNEGO WYBORU

**Ile elektronów maksymalnie mieści podpowłoka p?** A. 2; B. 6; C. 10; D. 14. **Odp.: B.**

## MOST
F08 uczy, jak z konfiguracji wyciągnąć położenie i walencyjność zamiast tylko odtwarzać zapis.

## F08 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — KONFIGURACJA JAKO MOST DO UKŁADU

### Łańcuch dedukcji
```text
konfiguracja → najwyższe n → okres
           → rodzaj obsadzanej podpowłoki → blok
           → elektrony walencyjne / konfiguracja walencyjna
           → przewidywane podobieństwo chemiczne
```

### Ważne ograniczenie
Dla grup głównych zależność między numerem grupy a liczbą elektronów walencyjnych jest bardzo użyteczna. Dla metali przejściowych proste utożsamienie „numer grupy = liczba elektronów walencyjnych” może prowadzić do błędów, dlatego trzeba rozdzielić model szkolny od pełniejszego opisu konfiguracji.

### Zadanie integracyjne
Dla Na, Mg, Al, Cl i Ar uczeń powinien przejść w obie strony: z konfiguracji odczytać miejsce w układzie oraz z miejsca w układzie odtworzyć konfigurację walencyjną.

## F09 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — TRZY LICZBY, KTÓRYCH NIE WOLNO MIESZAĆ

### Wartościowość
Wartościowość opisuje w szkolnym modelu zdolność atomu do tworzenia określonej liczby wiązań lub odpowiadający jej udział w związku. Nie jest synonimem stopnia utlenienia.

### Ładunek jonu
Jest rzeczywistym formalnym ładunkiem elektrycznym przypisanym jonowi. Na przykład Ca²⁺ i Cl⁻ mają ładunki wynikające z liczby elektronów względem atomu obojętnego.

### Stopień utlenienia
Jest formalną wielkością księgową używaną do śledzenia redoks. W związku może być przypisany atomowi nawet wtedy, gdy substancja nie składa się z prostych jonów.

### Reguła kontrolna
Przed użyciem liczby trzeba zadać pytanie: **czy opisuję jon, liczbę wiązań, czy formalny bilans elektronowy?**


## — WARTOŚCIOWOŚĆ / ŁADUNEK / STOPIEŃ UTLENIENIA

### A. Najważniejsza oś lekcji

```text
WARTOŚCIOWOŚĆ
≠
ŁADUNEK JONU
≠
STOPIEŃ UTLENIENIA
```

### B. Tabela porównawcza

| Pojęcie | Pytanie | Typowy zapis |
|---|---|---|
| wartościowość | ile wiązań / jaka zdolność łączenia? | I, II, III... |
| ładunek jonu | jaki rzeczywisty/formalny ładunek jonu? | Na⁺, O²⁻ |
| stopień utlenienia | jak formalnie przypisujemy elektrony w związku? | Fe(III), S(−II) |

### C. Trzy osobne zadania

Nie łączyć ich w jedno ćwiczenie na początku.

1. Wyznacz ładunek jonu.
2. Wyznacz wartościowość w szkolnym modelu.
3. Wyznacz stopień utlenienia.

Dopiero potem zadania mieszane.

### D. Klinika

Obowiązkowe błędy:

```text
„Fe³⁺ ma wartościowość III” — nie zawsze jest to poprawne jako zamiennik pojęć.
„SO₄²⁻ ma stopień utlenienia −2” — nie; −2 to ładunek całego jonu, nie stopień utlenienia siarki.
„NaCl: Na ma stopień utlenienia −1” — błędna reguła przypisywania.
```

Każdy taki przypadek powinien być rozebrany krok po kroku.

---


### ZINTEGROWANE FRAGMENTY CHE.ALL — v12.0

> Materiał przeniesiony z warstwy migracyjnej do kanonicznej lekcji. Treść zachowana; usunięto wyłącznie powtórzenia wykazane w audycie.

#### Trzy (pięć) rzeczy, których nie wolno mieszać

| Pojęcie | Co opisuje | Przykład |
|---------|------------|----------|
| **Wartościowość** | Ile wiązań tworzy atom w danym związku (model „liczby rąk”) | W CO₂ węgiel ma wartościowość IV, tlen II |
| **Stopień utlenienia** | Umowny ładunek atomu przy założeniu całkowitego przesunięcia elektronów | W CO₂: C ma +IV, O ma −II |
| **Ładunek jonu** | Rzeczywisty ładunek całego atomu lub grupy | Ca²⁺, Cl⁻, SO₄²⁻ |
| **Indeks dolny** | Liczba atomów lub grup w jednej cząsteczce / jednostce wzoru | Ca(OH)₂ zawiera 1 Ca, 2 O i 2 H |
| **Współczynnik** | Liczba cząsteczek albo jednostek wzoru biorących udział w reakcji | 2H₂O oznacza łącznie 4 atomy H i 2 atomy O |

**Zapamiętaj:** 
Wartościowość to **nie** ładunek. 
W CaCl₂ wapń ma wartościowość II, a jon wapnia ma ładunek 2+. Wyniki są tu podobne, lecz opisują różne rzeczy. 
Indeks to część substancji, współczynnik to liczba porcji substancji. Dlatego podczas bilansowania zmieniamy wyłącznie współczynniki.

**Uzupełnienie dla jonów:** 
W przypadku jonów mówimy o **wartościowości jonu** — odpowiada ona wartości bezwzględnej ładunku (np. Ca²⁺ → II, Cl⁻ → I). Nie jest to jednak to samo co ładunek: wartościowość to liczba wiązań, a ładunek to nadmiar/niedobór elektronów.

**Uwaga o związkach jonowych:** 
W związkach jonowych nie wyodrębniamy pojedynczych wiązań — mówimy o **sieci jonowej** i przyciąganiu przeciwnie naładowanych jonów. Wartościowość mówi wtedy, ile ładunków musi się zrównoważyć.

<!-- źródłowy fragment: ### Trzy (pięć) rzeczy, których nie wolno mieszać; dopasowanie: :3, :2, X01:1, K09:1 -->

#### 5.4. Wartościowość (kluczowy temat)

**Definicja (uproszczenie szkolne / model dydaktyczny):** 
**Wartościowość** to liczba wiązań, które atom tworzy z innymi atomami, przy czym wiązanie podwójne liczymy jako dwa, a potrójne jako trzy. 
W szkole zapisujemy ją cyfrą rzymską, np. O(II), Al(III), Fe(II) lub Fe(III).

> **Wartościowość — wersja szkolna:** liczba wiązań tworzonych przez atom w konkretnym związku. 
> **Uwaga:** w bardziej zaawansowanej chemii opis wiązań bywa bardziej złożony (IUPAC rozróżnia wartościowość i stopień utlenienia). Na poziomie klasy 7/8 stosuj wartościowość jako narzędzie do układania wzorów i rysowania wiązań.

**Model „liczby rąk” (bardzo użyteczny):** 
Wyobraź sobie, że atom ma określoną liczbę „rąk”, którymi może łączyć się z innymi atomami.
- H(I) ma 1 rękę
- O(II) ma 2 ręce
- Al(III) ma 3 ręce
- C(IV) ma 4 ręce

We wzorze wszystkie „ręce” muszą zostać wykorzystane. Dlatego Ca(II) i O(II) tworzą CaO, a nie Ca₂O₂: stosunek 1 : 1 jest już najprostszy.

**Test równowagi wartościowości:**
- W Al₂O₃: 2 · III = 6 oraz 3 · II = 6 → wzór poprawny.
- W AlO: 1 · III ≠ 1 · II → wzór niepoprawny.
- W Ca₂O₂: wartościowości się równoważą, ale wzór trzeba skrócić do CaO (najprostszy stosunek).

**Ważne doprecyzowanie:** 
Pierwiastek **nie ma jednej wartościowości „na zawsze”**. Wartościowość odczytujemy lub ustalamy w konkretnym związku. 
Przykład: w H₂S siarka tworzy 2 wiązania (wartościowość II), w SO₂ — 4 (IV), w SO₃ — 6 (VI).

**Nie myl pojęć (kluczowe rozróżnienie):** 
· **Wartościowość** — mówi o liczbie wiązań (model szkolny „liczby rąk”). 
· **Stopień utlenienia** — formalny „ładunek umowny” atomu w związku (przy założeniu całkowitego przesunięcia elektronów). 
· **Ładunek jonu** — rzeczywisty ładunek całego atomu lub grupy (np. Ca²⁺, SO₄²⁻). 
W prostych zadaniach szkolnych wyniki często wyglądają podobnie, ale **nie są to pojęcia tożsame**.

**Jak ustalić:** 
1. z układu okresowego (grupy główne), 
2. z znanego wzoru — jeśli znasz wartościowość jednego pierwiastka i wzór, możesz obliczyć wartościowość drugiego tak, aby łączna wartościowość obu składników była taka sama, 
3. z nazwy (np. tlenek żelaza(III)).

**Metale o zmiennej wartościowości:** Fe (II/III), Cu (I/II), Sn (II/IV), Pb (II/IV), Mn (II/IV/VII), Cr (II/III/VI) — zawsze podawać w nazwie.

**Wartościowość maksymalna:** 
Najwyższa wartościowość, jaką pierwiastek może osiągnąć w związku. 
Dla pierwiastków **grup głównych** maksymalna wartościowość względem tlenu jest często równa numerowi grupy w **dawnym zapisie A** (I, II, III, IV, V, VI, VII) — nie numerowi 1–18. 
Przykłady: Al — III, C — IV, P — V, S — VI, Cl — VII (np. HClO₄).

**Hak pamięciowy:** 
Wartościowość to **liczba wiązań**, którymi atom łączy się z innymi atomami.

**Mnemonic główny:** 
**H–I, O–II, Al–III, C–IV** → „wodór raz, tlen dwa, glin trzy, węgiel cztery”.

**Tabela szybkiego dostępu:**

| Pierwiastek | Wartościowość |
|-------------|---------------|
| H | I |
| O | II |
| Na, K | I |
| Mg, Ca | II |
| Al | III |
| C | IV |
| N, P | III / V (P: względem H zwykle III, maks. względem O = V) |
| S | II / IV / VI |
| Cl | I (chlorki); III/V/VII (związki tlenowe, rozszerzenie) |
| Fe | II / III |
| Cu | I / II |
| Sn | II / IV |
| Pb | II / IV |
| Mn | II / IV / VII |
| Cr | II / III / VI |

**Przykład obliczenia wartościowości z wzoru:** 
CO₂ → tlen ma II, dwa atomy tlenu dają łącznie IV. Węgiel ma zatem wartościowość IV.

<!-- źródłowy fragment: ### 5.4. Wartościowość (kluczowy temat); dopasowanie: :3, :3, X01:1, LAB18:1 -->

#### DOPRECYZOWANIA I CIEKAWOSTKI L001 (przegląd mer. — doklejone)

## DOPRECYZOWANIA I CIEKAWOSTKI L001 (przegląd mer. — doklejone)

**Atom (precyzyjniej):** najmniejsza elektrycznie obojętna cząstka pierwiastka zachowująca jego tożsamość chemiczną. Właściwości chemiczne → głównie elektrony walencyjne. 
**Jon:** atom lub trwała grupa atomów z ładunkiem (oddanie/przyjęcie e⁻). 
**Wartościowość:** model szkolny (ile wiązań / ile H). Ładunek jonu zapisuj jako Fe³⁺, nie „wartościowość 3” bez komentarza. 
**Stopień utlenienia:** ładunek **fikcyjny** — elektrony wiązania przypisane bardziej elektroujemnemu. 
**Izotopy:** ten sam Z, różne A; chemia prawie ta sama, masa i część fizyki inna. 
**Aᵣ:** średnia ważona **częstością (abundancją)** izotopów. 
**Mol (2019):** N_A = 6,02214076·10²³ mol⁻¹; w szkole 6,02·10²³.

<!-- źródłowy fragment: ## DOPRECYZOWANIA I CIEKAWOSTKI L001 (przegląd mer. — doklejone); dopasowanie: :3, :2, :2, X01:1 -->

---

---

<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 4909–5643 -->

---



## TEST JEDNOKROTNEGO WYBORU

**Które stwierdzenie jest poprawne?** A. ładunek jonu = stopień utlenienia w każdej sytuacji; B. wartościowość = zawsze ładunek; C. stopień utlenienia jest formalnym sposobem księgowania elektronów; D. wszystkie trzy pojęcia są synonimami. **Odp.: C.**

## MOST
F10 korzysta z rozróżnienia F09 i przechodzi do pytania, dlaczego atomy tworzą stabilniejsze układy.

## F10 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

---

## WARSTWA ULEPSZENIA — DLACZEGO POWSTAJĄ WIĄZANIA

### Od izolowanego atomu do układu wielu jąder
Tworzenie wiązania nie powinno być tłumaczone wyłącznie zdaniem „atom chce mieć oktet”. Stabilność układu wynika z całkowitej energii i rozkładu elektronów oraz jąder. Reguła oktetu jest użyteczną regułą orientacyjną dla wielu związków głównych grup, ale ma ograniczenia.

### Krzywa energii
Dla dwóch atomów istnieje korzystna odległość, przy której przyciągania i odpychania prowadzą do minimum energii potencjalnej. Zbyt duże oddalenie nie daje znaczącego wiązania, a zbyt małe zwiększa odpychanie.

### Konsekwencja
Rodzaj atomów, liczba elektronów walencyjnych, różnica elektroujemności, geometria i środowisko wspólnie wpływają na charakter wiązania. Dlatego „wiążemy, bo oktet” jest początkiem modelu, a nie jego pełnym wyjaśnieniem.


## PRAKTYKA — DOŚWIADCZENIE MODELOWE

### Problem
Jak sprawdzić, że trwałe połączenie dwóch atomów może odpowiadać minimum energii układu?

### Model
Rozważamy energię układu dwóch atomów w funkcji odległości. Przy dużej odległości oddziaływanie jest małe; przy zbliżaniu pojawia się przyciąganie, a przy zbyt małej odległości silne odpychanie.

### Wniosek
Minimum krzywej wyznacza preferowaną odległość w danym modelu. Nie oznacza to, że wszystkie wiązania mają tę samą energię lub długość.

### BHP
Model komputerowy nie zastępuje doświadczenia laboratoryjnego; nie interpretujemy wykresu bez określenia, jaki układ opisuje.

## KLINIKA BŁĘDÓW

| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| „Atom tworzy wiązanie tylko po to, żeby mieć oktet” | Oktet jest regułą orientacyjną | O stabilności decyduje całe oddziaływanie i energia układu |
| „Im bliżej, tym stabilniej” | Istnieje odległość równowagi | Przy zbyt małej odległości rośnie odpychanie |
| „Każde wiązanie ma tę samą energię” | Energia zależy od konkretnego wiązania | Różne atomy i środowiska dają różne profile energii |

## ĆWICZENIA + ODPOWIEDZI

1. Co oznacza minimum na krzywej energii? **Odp.: preferowaną odległość równowagi w przyjętym modelu.**
2. Czy „pełny oktet” jest bezwzględnym prawem? **Odp.: nie; jest użyteczną regułą orientacyjną z wyjątkami.**
3. Co dzieje się przy zbyt małej odległości atomów? **Odp.: silnie rośnie odpychanie.**

## TEST JEDNOKROTNEGO WYBORU

**Które stwierdzenie jest najlepsze?**
A. Każde zbliżenie atomów obniża energię.
B. Minimum energii może odpowiadać stabilnej odległości równowagi.
C. Oktet jest warunkiem każdego wiązania.
D. Energia wiązania nie zależy od atomów.

**Odpowiedź: B.**

## FISZKI

- Minimum energii → preferowana odległość równowagi.
- Oktet → reguła orientacyjna, nie absolutne prawo.
- Zbyt mała odległość → silne odpychanie.

## SŁOWNIK

**Energia układu** — wielkość opisująca stan energetyczny rozważanego układu.

**Odległość równowagi** — odległość odpowiadająca minimum energii w danym modelu.

**Reguła oktetu** — szkolna reguła opisująca częsty wzorzec konfiguracji walencyjnej, z wyjątkami.

## MOST

F10 daje przyczynę energetyczną. F11 rozdziela typy wiązań; F13–F15 pokazują, jak z elektronów przejść do struktury, geometrii i polarności.

## ROZUMIENIE / AMBITNE

### E8
Wiązanie rozpatruj jako układ dwóch lub większej liczby jąder i elektronów. Pytanie „dlaczego łączą się atomy?” jest pytaniem o zmianę energii całego układu, nie tylko o „zapełnienie oktetu”.

### Ambitne
Krzywa energii wiązania ma minimum, ponieważ przy zbliżaniu konkurują efekty przyciągania i odpychania. Szczegóły profilu zależą od konkretnego układu.

## F11 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — WIĄZANIE JAKO MODEL ROZKŁADU ELEKTRONÓW

### Jonowe
Opisuje przyciąganie elektrostatyczne między przeciwnoimiennymi jonami w sieci; nie należy rysować pojedynczej cząsteczki NaCl jako pełnego obrazu kryształu jonowego.

### Kowalencyjne
Para elektronowa jest współdzielona między atomami. W zależności od różnicy elektroujemności wiązanie może mieć większy lub mniejszy udział jonowy.

### Metaliczne
W modelu metalu elektrony walencyjne są zdelokalizowane w strukturze wielu atomów, co pomaga wyjaśnić przewodnictwo i kowalność.

### Kontrola modelu
Wizualizacja powinna rozróżniać **typ wiązania, rząd wiązania, polarność oraz geometrię**. To cztery różne informacje.


## TEST JEDNOKROTNEGO WYBORU

**Który opis najlepiej pasuje do metalu?** A. wyłącznie izolowane cząsteczki; B. sieć z ruchliwymi/zdelokalizowanymi elektronami; C. wyłącznie aniony; D. zawsze wiązania wodorowe. **Odp.: B.**

## SŁOWNIK

**Wiązanie jonowe** — oddziaływanie elektrostatyczne w układzie jonów. **Wiązanie kowalencyjne** — współdzielenie par elektronowych. **Wiązanie metaliczne** — model zdelokalizowanych elektronów w sieci metalu. **Rząd wiązania** — liczba współdzielonych par w prostym zapisie Lewisa, nie tożsama z typem wiązania.

## F12 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — WZÓR JAKO SKOMPRESOWANA INFORMACJA

### Co mówi wzór?
Wzór określa skład jakościowy oraz ilościowy zapisany przez indeksy. Nie mówi automatycznie o pełnej geometrii, stanie skupienia, mechanizmie reakcji ani wszystkich właściwościach substancji.

### Związek jonowy
Dla związku jonowego dobiera się najmniejszy stosunek całkowity jonów zapewniający obojętność elektryczną, np. Al³⁺ i O²⁻ → Al₂O₃. Indeksy wynikają z bilansu ładunku, nie z „zamiany liczb na krzyż” bez kontroli skracania.

### Cząsteczka a jednostka wzoru
Dla substancji cząsteczkowych wzór może opisywać rzeczywistą cząsteczkę, natomiast dla wielu kryształów jonowych lepiej mówić o jednostce wzoru.

### Indeks kontra współczynnik
Indeks zmienia tożsamość zapisywanej cząstki/składu; współczynnik zmienia liczbę jednostek. Dlatego równania bilansujemy współczynnikami, nie indeksami.


## TEST JEDNOKROTNEGO WYBORU

**Co wolno zmienić przy bilansowaniu równania?** A. indeks w H₂O; B. współczynnik przed H₂O; C. symbol pierwiastka; D. skład jonu. **Odp.: B.**

## SŁOWNIK

**Indeks** — liczba we wzorze określająca liczbę atomów/danego składnika. **Współczynnik** — liczba jednostek wzoru w równaniu. **Jednostka wzoru** — najmniejszy stosunek jonów reprezentowany przez wzór związku jonowego.

## F13 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — LEWIS OD DANYCH DO STRUKTURY

### Algorytm
1. Zsumuj elektrony walencyjne.
2. Wybierz szkielet.
3. Połącz atomy wiązaniami pojedynczymi.
4. Uzupełnij zewnętrzne powłoki.
5. Pozostałe elektrony umieść na atomie centralnym.
6. Jeśli potrzeba, utwórz wiązania wielokrotne.
7. Sprawdź sumę elektronów i formalne ładunki.

### Co Lewis pokazuje, a czego nie pokazuje
Pokazuje sposób księgowania elektronów walencyjnych i par wiążących/niewiążących w modelu. Nie jest pełną mapą gęstości elektronowej ani dokładnym modelem orbitali molekularnych.

### Wyjątki
Niektóre cząsteczki mają nieparzystą liczbę elektronów, niepełny oktet lub rozszerzoną powłokę walencyjną w odpowiednich modelach. Nie należy „naprawiać” poprawnego przypadku tylko po to, aby zawsze uzyskać oktet.


## DIAGNOZA STARTOWA — KONTROLA PRZED LEWISEM

1. Czy potrafię policzyć elektrony walencyjne?
2. Czy odróżniam indeks od liczby elektronów?
3. Czy wiem, że Lewis jest modelem zapisu elektronów, a nie pełnym modelem geometrii?

**Kontrola:** jeśli odpowiedź na którekolwiek pytanie brzmi „nie”, wróć do F06/F07/F12 przed przejściem dalej.

## KLINIKA BŁĘDÓW

| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| Lewis = geometria 3D | Lewis pokazuje rozmieszczenie par w zapisie 2D | VSEPR wyznacza kształt |
| wolna para = dwa atomy | Wolna para to para elektronów na atomie | Nie jest osobnym atomem |
| każdy układ ma oktet | Są wyjątki | Reguła oktetu ma zakres stosowalności |

## TEST JEDNOKROTNEGO WYBORU

**Co jest bezpośrednim wejściem do VSEPR?** A. sama masa atomowa; B. struktura elektronowa/Lewisa i liczba domen; C. temperatura wrzenia; D. współczynnik równania. **Odp.: B.**

## FISZKI

- Lewis → elektrony i połączenia;
- wolna para → domena VSEPR;
- wiązanie wielokrotne → jedna domena;
- oktet → reguła z wyjątkami.

## SŁOWNIK

**Struktura Lewisa** — model zapisu elektronów walencyjnych i wiązań. **Wolna para** — para elektronów niewspółdzielona w wiązaniu. **Ładunek formalny** — pomocniczy zapis kontroli rozmieszczenia elektronów w strukturze Lewisa.

## MOST
F14 bierze strukturę Lewisa jako wejście do geometrii VSEPR.

## F14 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — VSEPR OD DOMEN DO KĄTA

### Procedura
**Lewis → liczba domen elektronowych → geometria domen → rozmieszczenie atomów → kształt cząsteczki → kąty przybliżone.**

### Domeny
Pojedyncze, podwójne i potrójne wiązanie liczą się jako jedna domena elektronowa. Wolna para również jest jedną domeną, ale odpychanie nie jest identyczne dla wszystkich typów domen. Dlatego rzeczywiste kąty mogą odbiegać od idealnych wartości.

### Przykłady
CO₂: 2 domeny → liniowa geometria i kąt około 180°. H₂O: 4 domeny elektronowe, 2 wiązania + 2 wolne pary → geometria elektronowa tetraedryczna, kształt kątowy i kąt około 104,5°.

### Ważne rozróżnienie
„Geometria domen elektronowych” i „kształt cząsteczki” nie są zawsze tym samym.


## TEST JEDNOKROTNEGO WYBORU

**Ile domen elektronowych ma centralny atom H₂O w modelu VSEPR?** A. 2; B. 3; C. 4; D. 5. **Odp.: C — dwa wiązania i dwie wolne pary.**

## SŁOWNIK

**Domena elektronowa** — obszar odpychania elektronów w modelu VSEPR. **Geometria elektronowa** — układ wszystkich domen. **Geometria cząsteczki** — położenie atomów, bez traktowania wolnych par jako atomów.

## MOST
F15 wykorzystuje geometrię jako warunek do oceny polarności całej cząsteczki.

## F15 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — POLARNOŚĆ OD WIĄZANIA DO CAŁEJ CZĄSTECZKI

### Dwa pytania
1. Czy poszczególne wiązania są polarne?
2. Czy wektory momentów dipolowych znoszą się przez geometrię?

CO₂ ma polarne wiązania C=O, ale liniowa geometria prowadzi do zniesienia wypadkowego momentu dipolowego. H₂O ma polarne wiązania i geometrię kątową, więc cząsteczka jest polarna.

### Oddziaływania
Oddziaływania międzycząsteczkowe należy odróżniać od wiązań wewnątrz cząsteczki. W dalszej nauce pozwalają one wyjaśniać m.in. temperatury wrzenia, rozpuszczalność i zachowanie fazowe.

### Pułapka
„Ma wiązania polarne” nie oznacza automatycznie „jest cząsteczką polarną”. Geometria jest drugim etapem decyzji.


## PRAKTYKA — MODEL WEKTORÓW DIPOLOWYCH

### Problem
Czy polarne wiązania zawsze oznaczają polarną cząsteczkę?

### Procedura
1. Oceń polarność każdego wiązania.
2. Ustal geometrię cząsteczki z F14.
3. Potraktuj momenty dipolowe jako wektory.
4. Sprawdź, czy ich suma jest zerowa.
5. Dopiero wtedy nazwij cząsteczkę polarną lub niepolarną.

### Przykład kontrolny
CO₂ ma polarne wiązania C=O, lecz liniowa geometria powoduje zniesienie wektorów. H₂O ma polarne wiązania i geometrię kątową, więc pozostaje polarna.

## KLINIKA BŁĘDÓW

| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| „Jedno polarne wiązanie = polarna cząsteczka” | Sprawdzamy sumę wektorów | Geometria może znosić momenty |
| „Elektroujemność daje gotową polarność cząsteczki” | Elektroujemność dotyczy przede wszystkim wiązania | Cała cząsteczka wymaga geometrii |
| „Oddziaływanie międzycząsteczkowe to wiązanie w cząsteczce” | To osobna warstwa opisu | Nie należy mieszać wiązań wewnątrz i między cząsteczkami |

## ĆWICZENIA + ODPOWIEDZI

1. Czy CO₂ jest polarną cząsteczką? **Odp.: nie, przy idealizacji szkolnej suma momentów wynosi 0.**
2. Czy H₂O jest polarna? **Odp.: tak.**
3. Co musi być znane oprócz polarności wiązań? **Odp.: geometria cząsteczki.**

## TEST JEDNOKROTNEGO WYBORU

**Co najlepiej opisuje polarność cząsteczki?**
A. Tylko liczba atomów.
B. Tylko różnice elektroujemności.
C. Rozkład momentów dipolowych wynikający z wiązań i geometrii.
D. Tylko liczba wolnych par.

**Odpowiedź: C.**

## FISZKI

- Polarność wiązania → nierówny rozkład ładunku w wiązaniu.
- Polarność cząsteczki → wynik wszystkich momentów dipolowych.
- CO₂ → wiązania polarne, cząsteczka niepolarna.
- H₂O → wiązania polarne, cząsteczka polarna.

## SŁOWNIK

**Elektroujemność** — miara tendencji atomu do przyciągania elektronów w wiązaniu.

**Moment dipolowy** — wektor opisujący rozdzielenie ładunku.

**Polarność cząsteczki** — wynik niesymetrycznego rozkładu ładunku całej cząsteczki.

## MOST

F15 zamyka ciąg **Lewis → VSEPR → geometria → polarność**. Następna faza zaczyna się od obserwacji rzeczywistej przemiany w F16.

## ROZUMIENIE / AMBITNE

### E8
Rozróżniaj dwa pytania: „czy wiązanie jest polarne?” i „czy cała cząsteczka ma niezerowy moment dipolowy?”.

### Ambitne
Wektorowa suma momentów pozwala wyjaśnić, dlaczego symetryczna cząsteczka może być niepolarna mimo polarnych wiązań.

## F16 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — OD OBSERWACJI DO HIPOTEZY REAKCJI

### Protokół chemiczny
**reagenty → warunki → obserwacja → interpretacja → produkty/model → równanie → kontrola.**

### Obserwacja kontra wniosek
„Roztwór stał się mętny” jest obserwacją. „Powstał trudno rozpuszczalny produkt” jest interpretacją wymagającą modelu. „Zaszła reakcja strąceniowa” jest wnioskiem chemicznym opartym na dodatkowej wiedzy.

### Typowe sygnały
Zmiana barwy, temperatura, światło, gaz, osad, zapach lub zmiana pH mogą wskazywać na przemianę. Żaden pojedynczy sygnał nie powinien być interpretowany bez uwzględnienia warunków i alternatywnych wyjaśnień.

### BHP
Każde doświadczenie powinno mieć osobny rekord BHP, a wizualizacja ma pokazywać tylko te warunki, które są zapisane w danych reakcji.


## ĆWICZENIA, FISZKI I TEST

### Ćwiczenie
W reakcji po zmieszaniu dwóch roztworów pojawia się osad. Zapisz osobno: obserwację, hipotezę, możliwe produkty i informację, która wymaga dalszej kontroli. **Odpowiedź:** obserwacja = pojawienie się osadu; hipoteza = powstała słabo rozpuszczalna substancja; produkty wymagają identyfikacji z danych.

### Fiszki
- obserwacja ≠ wniosek;
- osad → możliwy sygnał reakcji;
- równanie jest modelem, nie samą obserwacją;
- BHP należy do poprawnego protokołu.

### Test
**Co zapisujemy jako pierwsze?** A. równanie; B. obserwację; C. interpretację; D. nazwę reakcji. **Odp.: B.**

### Słownik
**Obserwacja** — opis tego, co bezpośrednio zaobserwowano lub zmierzono. **Hipoteza** — sprawdzalne wyjaśnienie. **Wniosek** — interpretacja wynikająca z danych i modelu.

## SŁOWNIK

**Reakcja chemiczna** — przemiana, w której powstają nowe substancje. **Obserwacja** — bezpośredni opis wyniku doświadczenia. **Wniosek** — interpretacja danych w świetle modelu. **BHP** — zasady bezpiecznej pracy z substancjami i sprzętem.

## F17 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — RÓWNANIE JAKO KONTROLOWANY ZAPIS

### Algorytm bilansowania
1. Zapisz poprawne wzory substratów i produktów.
2. Policz atomy każdego pierwiastka.
3. Zmieniaj wyłącznie współczynniki.
4. Sprawdź wszystkie pierwiastki.
5. Dla równań jonowych sprawdź także ładunek.
6. Uprość współczynniki do najmniejszych liczb całkowitych.

### Przykład
`2H₂ + O₂ → 2H₂O` zachowuje liczbę atomów H i O. Zmiana indeksu H₂O na H₂O₂ nie jest bilansem — tworzyłaby inną substancję.

### Warunki i stany
Temperatura, światło, katalizator, ciśnienie lub środowisko powinny być zapisywane jako warunki, a `(s)`, `(l)`, `(g)`, `(aq)` jako stany/fazy, jeśli są potrzebne. Warunek nie jest współczynnikiem, a stan skupienia nie jest częścią wzoru chemicznego.

### Kontrola zachowania materii
Równanie musi zachować liczbę atomów każdego pierwiastka; w równaniu jonowym także całkowity ładunek.


## DIAGNOZA STARTOWA — BILANS

Przed bilansowaniem sprawdź: 1) czy znam wzory reagentów i produktów; 2) czy wiem, które liczby są indeksami; 3) czy rozumiem, co zmienia współczynnik. Dopiero potem dobieraj współczynniki.

## KLINIKA BŁĘDÓW

| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| zmiana indeksu przy bilansie | Zmieniamy współczynniki | Indeks definiuje skład substancji |
| bilans tylko jednego pierwiastka | Sprawdzamy wszystkie składniki | Równanie musi zachować atomy |
| pominięcie ładunku w równaniu jonowym | Kontrolujemy także ładunek | Ładunek również się zachowuje |

## TEST JEDNOKROTNEGO WYBORU

**Który zapis jest poprawnym bilansem spalania wodoru?** A. `H₂ + O₂ → H₂O`; B. `2H₂ + O₂ → 2H₂O`; C. `H₂ + 2O₂ → H₂O`; D. `2H₂ + 2O₂ → H₂O`. **Odp.: B.**

## MOST
F18/F19 wykorzystują poprawne równania jako dane w dossier; F20 kontroluje typowe błędy, a F21 sprawdza transfer.

## F18 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — DOSSIER SUBSTANCJI JAKO JEDEN OBIEKT DANYCH

### Minimalny rekord
`id → nazwa → wzór → skład → typ → stan → właściwości → struktura → wiązania → geometria → polarność → reakcje → warunki → BHP → zastosowania → źródła/proweniencja`.

### Zasada jednej prawdy
Ta sama substancja używana w lekcji, wizualizacji, doświadczeniu i reakcji powinna korzystać z jednego rekordu danych. Nie wolno ręcznie przepisywać różnych wartości do wielu modułów.

### H₂O jako przykład integracyjny
Dossier powinno łączyć wzór H₂O z atomami H/O, elektronami walencyjnymi, strukturą Lewisa, geometrią kątową, polarnością, stanami skupienia, właściwościami i reakcjami. Zmiana danych bazowych powinna propagować się do wizualizacji.

### Poziom pewności
Dane eksperymentalne, wartości zależne od temperatury/ciśnienia i przybliżenia edukacyjne powinny mieć oznaczone warunki oraz proweniencję.


## DIAGNOZA I PRAKTYKA

### Diagnoza
Wybierz dla H₂O informacje, które muszą być spójne w jednym rekordzie: wzór, skład, Lewis, geometria, polarność, właściwości, reakcje i BHP. Następnie wskaż, które dane pochodzą z wcześniejszych lekcji.

### Doświadczenie/model
Zbuduj kartę H₂O z pól: wzór → skład → Lewis → VSEPR → polarność → właściwość. Zmiana jednego pola nie może tworzyć sprzeczności w pozostałych.

## KLINIKA BŁĘDÓW

| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| Dwa różne rekordy H₂O | Jeden rekord źródłowy | Zapobiega rozjazdom danych |
| Wizualizacja przechowuje własne wartości | Wizualizacja czyta rekord | Renderer nie jest właścicielem danych |
| Brak proweniencji | Rekord zawiera źródło/poziom pewności | Pozwala audytować dane |

## ĆWICZENIA + ODPOWIEDZI

1. Wymień pięć pól strukturalnych dossier H₂O. **Odp.: np. skład, wiązania, Lewis, geometria, polarność.**
2. Co aktualizuje zmianę substancji w wizualizacji? **Odp.: wszystkie widoki korzystające z tego samego rekordu.**
3. Po co proweniencja? **Odp.: żeby wiedzieć, skąd pochodzi dana informacja.**

## TEST JEDNOKROTNEGO WYBORU

**Która zasada jest zgodna z architekturą?**
A. Każda wizualizacja ma własną bazę.
B. Lekcja kopiuje dane substancji.
C. Jeden rekord zasila różne widoki.
D. Dane są wpisywane osobno w każdym modelu.

**Odpowiedź: C.**

## FISZKI

- Dossier → jeden rekord substancji.
- Proweniencja → informacja o źródle danych.
- Renderer → konsument danych, nie ich właściciel.

## SŁOWNIK

**Dossier substancji** — zintegrowany rekord opisujący jedną substancję.

**Proweniencja** — informacja o pochodzeniu i statusie danych.

**Źródło prawdy** — rekord, z którego korzystają pozostałe warstwy systemu.

## MOST

F18 łączy dane obiektu. F19 przenosi tę samą zasadę na przebieg reakcji.

## RDZEŃ E8 → ROZUMIENIE → AMBITNE

**E8:** dossier musi zachować spójność wzoru, składu i podstawowych właściwości.  
**Rozumienie:** rekord łączy reprezentacje pochodzące z różnych lekcji.  
**Ambitne:** proweniencja i poziom pewności pozwalają kontrolować dane oraz rozdzielać fakt od wartości wymagającej weryfikacji.

## F19 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — DOSSIER REAKCJI JAKO PRZEBIEG

### Pełny rekord
`substraty + produkty + współczynniki + stany + warunki + obserwacje + typ reakcji + energia + katalizator + medium + forma jonowa + redoks + BHP + wizualizacje`.

### Rozdziel cztery warstwy
**co zmieszano** → dane wejściowe; **co zrobiono** → warunki; **co zobaczono** → obserwacja; **co zaszło według modelu** → równanie i interpretacja. Dzięki temu wizualizacja nie „zgaduje” reakcji z samego tekstu.

### Kontrola reakcji
Każda reakcja powinna przejść walidację wzorów, bilansu atomów, a w odpowiednich przypadkach bilansu ładunku, warunków i zgodności obserwacji z modelem.

### Połączenie z doświadczeniem
Jedna reakcja może mieć wiele scenariuszy obserwacyjnych, ale każdy scenariusz musi wskazywać własne warunki i BHP.


## DIAGNOZA I PRAKTYKA

### Diagnoza
Dla prostej reakcji wskaż osobno: substraty, produkty, współczynniki, warunki, obserwację i BHP. Nie mieszaj danych obserwacyjnych z interpretacją.

### Doświadczenie/model
Przejdź ścieżkę: **obserwacja → hipoteza → model cząsteczkowy → równanie → bilans → warunki → BHP**. Każdy krok ma własne pole w dossier.

## KLINIKA BŁĘDÓW

| Błąd | Poprawnie | Dlaczego? |
|---|---|---|
| Warunek wpisany do wzoru | Warunek jest osobnym polem | Nie zmienia tożsamości substancji |
| Obserwacja = wyjaśnienie | Najpierw obserwacja, potem interpretacja | Chroni przed dopowiadaniem danych |
| Bilans jako osobna kopia reakcji | Bilans jest walidacją tego samego równania | Jedno źródło prawdy |

## ĆWICZENIA + ODPOWIEDZI

1. Co jest osobnym polem od produktu? **Odp.: obserwacja, warunki, energia, BHP itd.**
2. Czy współczynnik jest częścią wzoru substancji? **Odp.: nie; opisuje liczbę jednostek w równaniu.**
3. Co kontroluje bilans? **Odp.: zachowanie liczby atomów, a w odpowiednim zapisie także ładunku.**

## TEST JEDNOKROTNEGO WYBORU

**Dlaczego jeden rekord reakcji jest potrzebny?**
A. Żeby każda wizualizacja mogła zmienić równanie niezależnie.
B. Żeby uniknąć sprzecznych wersji tej samej reakcji.
C. Żeby nie przechowywać warunków.
D. Żeby pominąć obserwację.

**Odpowiedź: B.**

## FISZKI

- Dossier reakcji → opis procesu w jednym rekordzie.
- Obserwacja → dane z doświadczenia.
- Warunek → osobne pole, nie część wzoru.
- Bilans → kontrola zapisu reakcji.

## SŁOWNIK

**Substrat** — substancja obecna po stronie wyjściowej reakcji.

**Produkt** — substancja powstająca w reakcji.

**Warunki reakcji** — np. temperatura, katalizator, światło lub środowisko, jeśli są istotne dla przebiegu.

## MOST

F19 przygotowuje dane do F20: zamiast tylko zapamiętywać poprawne odpowiedzi, system ma umieć wskazać pierwszy błędny etap rozumowania.

## RDZEŃ E8 → ROZUMIENIE → AMBITNE

**E8:** reakcję opisujemy przez substraty, produkty i poprawne równanie.  
**Rozumienie:** obserwacja, model, warunki i bilans są różnymi warstwami tego samego procesu.  
**Ambitne:** jeden rekord może zasilać zapis cząsteczkowy, jonowy, energetyczny i wizualizację bez kopiowania danych.

## F20 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — KLINIKA BŁĘDÓW JAKO SYSTEM DIAGNOSTYCZNY

### Kategorie błędów
**pojęciowe** — np. grupa = wartościowość; **symboliczne** — np. zmiana indeksu przy bilansowaniu; **rachunkowe** — błąd w A−Z; **modelowe** — np. traktowanie Lewis jako pełnej funkcji falowej; **interpretacyjne** — obserwacja pomylona z wnioskiem.

### Procedura naprawcza
**wykryj → nazwij → pokaż minimalny kontrprzykład → popraw model → rozwiąż podobne zadanie → rozwiąż zadanie transferowe.** Samo podanie poprawnej odpowiedzi nie oznacza usunięcia błędu.

### Błędy krytyczne
Szczególnie kontrolować: Z vs A; neutron vs elektron; izotop vs jon; powłoka vs podpowłoka; okres vs grupa; elektrony walencyjne vs wszystkie elektrony; wartościowość vs stopień utlenienia; indeks vs współczynnik; polarne wiązanie vs polarna cząsteczka; geometria elektronowa vs kształt cząsteczki.


## PROCEDURA KLINICZNA

Każdy błąd diagnozujemy w pięciu krokach:
1. **ZNAJDŹ** pierwsze niepoprawne twierdzenie.
2. **NAZWIJ** pojęcie, które zostało użyte błędnie.
3. **POPRAW** zapis lub rozumowanie.
4. **WYJAŚNIJ** dlaczego poprawka działa.
5. **PRZENIEŚ** regułę do nowego przykładu.

## ĆWICZENIA + ODPOWIEDZI

1. Uczeń mówi: „Cl⁻ ma 17 protonów i 17 elektronów”. **Błąd:** pomylony jon z atomem obojętnym. **Poprawnie:** 17 protonów i 18 elektronów.
2. Uczeń bilansuje `H₂ + O₂ → H₂O` przez zmianę indeksu w wodzie. **Błąd:** zmiana tożsamości substancji. **Poprawnie:** `2H₂ + O₂ → 2H₂O`.
3. Uczeń mówi „CO₂ jest polarny, bo ma polarne wiązania”. **Błąd:** pominięta geometria. **Poprawnie:** liniowa symetria znosi momenty.

## TEST JEDNOKROTNEGO WYBORU

**Najlepsza pierwsza reakcja na błędne rozwiązanie to:**
A. od razu podać poprawną odpowiedź;
B. znaleźć pierwszy błędny krok;
C. zmienić wszystkie liczby;
D. pominąć uzasadnienie.

**Odpowiedź: B.**

## FISZKI

- Pierwszy błąd → miejsce, w którym rozumowanie odchodzi od danych/reguły.
- Indeks → zmienia substancję.
- Współczynnik → zmienia liczbę jednostek w równaniu.
- Polarność → zawsze kontroluj geometrią.

## SŁOWNIK

**Błąd pojęciowy** — błędne rozumienie znaczenia pojęcia.

**Błąd proceduralny** — poprawne pojęcie, ale zła kolejność lub operacja.

**Transfer błędu** — sprawdzenie, czy uczeń potrafi uniknąć tego samego błędu w nowej sytuacji.

## MOST

F20 nie jest końcem nauki. F21 sprawdza, czy uczeń potrafi samodzielnie zbudować cały łańcuch rozumowania.

## RDZEŃ E8 → ROZUMIENIE → AMBITNE

**E8:** rozpoznaj pierwszy błąd w podstawowych obliczeniach i zapisach.  
**Rozumienie:** odróżniaj błąd pojęcia od błędu procedury.  
**Ambitne:** przewiduj, w jakiej nowej sytuacji ten sam błąd może się powtórzyć.

## F21 — fragment zachowany do integracji

<!-- ARCHIWUM REDAKCYJNE v15.0; nie wyświetlać jako osobnej lekcji -->

## WARSTWA ULEPSZENIA — TRANSFER I EGZAMIN DOJRZAŁOŚCI

### Zadanie mistrzowskie powinno łączyć łańcuch
```text
substancja → atomy → Z/A → układ okresowy → konfiguracja
→ elektrony walencyjne → wiązanie → Lewis → VSEPR
→ polarność/właściwości → reakcja → równanie → kontrola
```

### Poziomy transferu
**A — rozpoznanie:** nazwij i zdefiniuj.
**B — procedura:** wykonaj znany algorytm.
**C — wyjaśnienie:** uzasadnij, dlaczego działa.
**D — transfer:** zastosuj go w nowym kontekście.
**E — krytyka:** znajdź błąd w rozwiązaniu lub modelu i popraw go.

### Diagnostyka końcowa
Uczeń powinien umieć nie tylko otrzymać wynik, ale wskazać: **z jakich danych wyszedł, jaki model zastosował, jakie założenie przyjął, jak sprawdził wynik i gdzie model przestaje być wystarczający**. To jest kryterium opanowania fundamentów.

### Most do dalszej chemii
Po ukończeniu bloku fundamentów uczeń ma być gotowy do stechiometrii, reakcji jonowych, redoks, kwasów i zasad, termochemii, elektrochemii oraz dalszego modelowania struktury bez konieczności przebudowywania podstawowych pojęć.


## DIAGNOZA KOŃCOWA

Przed testem uczeń wykonuje trzy pełne łańcuchy bez podpowiedzi:

```text
konfiguracja → układ → walencyjność → jon → wzór
Lewis → VSEPR → geometria → polarność → właściwość
obserwacja → model reakcji → równanie → bilans → interpretacja
```

## ĆWICZENIE TRANSFEROWE Z ODPOWIEDZIĄ

**Zadanie:** Dla nowego przykładu nieznanej substancji uczeń ma ustalić, jakie dane są potrzebne, aby przejść od obserwacji do dossier i modelu reakcji.

**Odpowiedź kontrolna:** powinien wskazać co najmniej obserwację, skład/identyfikację substancji, strukturę odpowiednią do poziomu, właściwości, możliwe produkty, warunki, równanie, bilans i BHP. Brak jednego ogniwa powinien wskazać konkretną lekcję F.

## KLINIKA BŁĘDÓW TRANSFEROWYCH

| Sygnał | Najpierw sprawdź |
|---|---|
| zły pierwiastek | F04–F06 |
| zła konfiguracja | F07–F08 |
| zły jon/wzór | F09–F12 |
| zła struktura | F13–F14 |
| zła polarność | F15 |
| zły model reakcji | F16 |
| zły bilans | F17 |
| sprzeczne dane | F18–F19 |
| poprawna reguła, zła decyzja | F20 |

## TEST MISTRZOSTWA

Uczeń uzyskuje zamknięcie bloku dopiero wtedy, gdy potrafi **wyjaśnić**, a nie tylko wykonać, trzy łańcuchy z diagnozy końcowej i poprawić własny błąd po wskazaniu jego miejsca.

## FISZKI

- Transfer → zastosowanie wiedzy w nowej sytuacji.
- Łańcuch → kilka poprawnych reprezentacji połączonych przyczynowo.
- Diagnostyka → wskazanie miejsca, w którym rozumowanie się urwało.

## SŁOWNIK

**Transfer** — zastosowanie wcześniej zbudowanego modelu do nowego problemu.

**Diagnostyka mistrzostwa** — sprawdzenie samodzielnego przejścia przez pełny łańcuch rozumowania.

## MOST DO DALSZEJ CHEMII

Po F21 uczeń powinien przechodzić z fundamentów do kolejnych działów bez zmiany sposobu pracy: **obserwacja → model → zapis → kontrola → transfer**.




---

# DODATEK MASTER — INTEGRACJA lekcji bloku F

## A. KANONICZNE MOSTY MIĘDZY MODUŁAMI

| Z | Do | Co ma zostać zachowane |
|---|---|---|
| → | substancja → atom | symbol pierwiastka, skład związku |
| → | atom → układ okresowy | Z, symbol, grupa, okres, blok |
| → | położenie → elektrony | blok, powłoka, podpowłoka |
| → | konfiguracja → jon | liczba elektronów, konfiguracja kationu/anionu |
| → | ładunek → wzór | bilans ładunku |
| → | wzór → wiązanie | typ związku, elektrony walencyjne, Lewis |
| → | Lewis → geometria | liczba domen, wolne pary |
| → | struktura → reakcja | poprawne wzory produktów i substratów |
| → R05–R08 | reakcja → rachunek | współczynniki stechiometryczne |

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

Parser powinien rozumieć co najmniej:

```text
H2O
Al2(SO4)3
Ca(OH)2
NH4NO3
CuSO4·5H2O
K4[Fe(CN)6] # warstwa ambitna/zaawansowana
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
| -01 | substancja czysta pomylona z mieszaniną |
| -01 | Z pomylone z A |
| -01 | grupa pomylona z okresem |
| -01 | powłoka pomylona z podpowłoką |
| -02 | kolejność 4s/3d użyta bez kontekstu |
| -01 | wartościowość utożsamiona ze stopniem utlenienia |
| -02 | zła konfiguracja kationu metalu przejściowego |
| -01 | zmiana indeksu zamiast współczynnika |
| -02 | brak nawiasu dla jonu wieloatomowego |
| -03 | błędny bilans ładunków |
| -01 | typ wiązania określony wyłącznie na podstawie jednego uproszczenia |
| -01 | liczba wiązań pomylona z liczbą domen |
| -02 | geometria elektronowa pomylona z geometrią cząsteczki |
| -01 | zmiana indeksów przy bilansowaniu |
| -02 | współczynnik pomylony z indeksem |
| -03 | brak kontroli atomów/ładunku |

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
| | GOTOWY | mapa i architektura |
| | GOTOWY | fundament materii |
| | GOTOWY | atom |
| | GOTOWY | układ okresowy |
| | GOTOWY | konfiguracja elektronowa |
| | GOTOWY | jon / wartościowość / stopień utlenienia |
| | GOTOWY | wzory chemiczne |
| | GOTOWY | wiązania |
| | GOTOWY | VSEPR / geometria |
| | GOTOWY | równania reakcji |

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

Każdy moduł lekcji bloku F ma trzy funkcje jednocześnie:

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

# WSPÓLNY SYSTEM ZADAŃ lekcji bloku F


### ZINTEGROWANE FRAGMENTY CHE.ALL — v12.0

> Materiał przeniesiony z warstwy migracyjnej do kanonicznej lekcji. Treść zachowana; usunięto wyłącznie powtórzenia wykazane w audycie.

#### Diagnoza startowa (5–8 min)

1. Z = ? A = ? w atomie. 
2. Jon Al³⁺: ile e⁻ przy Z=13? 
3. Wzór: tlenek glinu / chlorek wapnia. 
4. Bilans: H₂ + O₂ → H₂O (współczynniki). 
5. Co to wartościowość vs ładunek jonu (jednym zdaniem)?

**Interpretacja:** 4–5/5 → L001 szybko jako powtórka. 2–3 → L001 uważnie. 0–1 → L001 od zera + fiszki.

<!-- źródłowy fragment: ### Diagnoza startowa (5–8 min); dopasowanie: :2, :2, REV00:1, J09:1 -->

#### 80/20 września z L001

1. Atom: Z, A, p⁺, n⁰, e⁻; atom vs jon. 
2. Wartościowość (model szkolny „rąk”) ≠ ładunek ≠ indeks ≠ współczynnik. 
3. W–K–S–K + nawias przy grupie. 
4. Współczynniki tak, indeksy nie. 
5. Typy wiązań (orientacyjnie) + proste bilansowanie.

<!-- źródłowy fragment: ### 80/20 września z L001; dopasowanie: :2, :2, :1, :1 -->

#### Typy reakcji

| Typ | Schemat / przykład |
|-----|-------------------|
| Synteza | 2Mg + O₂ → 2MgO |
| Analiza (rozkład) | CaCO₃ → CaO + CO₂ |
| Wypieranie | Zn + CuSO₄ → ZnSO₄ + Cu; Zn + 2HCl → ZnCl₂ + H₂ |
| Podwójna wymiana | AgNO₃ + NaCl → AgCl↓ + NaNO₃ *(↓ = osad — trudno rozpuszczalna substancja stała)* |
| Spalanie | CH₄ + 2O₂ → CO₂ + 2H₂O |

**Bilansowanie:** indeksów nie zmieniamy — tylko współczynniki. Prawo zachowania masy: atomy nie znikają i nie powstają z niczego.

**Skrót do wzorów:** W–K–S–K (wartościowości → krzyżowanie → skracanie → kontrola).

**Mnemonic typów (opcjonalny):** 
**S A W P S** → „Synteza, Analiza, Wypieranie, Podwójna wymiana, Spalanie”.

<!-- źródłowy fragment: ### Typy reakcji; dopasowanie: :2, R02:1, O07:1, LAB20:1 -->

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

<!-- źródłowy fragment: ## 6.5. KLINIKA BŁĘDÓW (realna sekcja z ćwiczeniami); dopasowanie: :2, :2, :2, :2 -->

#### Mapa myśli: RÓWNANIE

```
RÓWNANIE
├── Substraty → Produkty (warunki nad strzałką, np. Δ, katalizator)
├── Prawo zachowania masy
├── Współczynniki (nie indeksy!)
├── Bilans: policz, porównaj, popraw, sprawdź
└── Typ: S A W P S
```

<!-- źródłowy fragment: ### Mapa myśli: RÓWNANIE; dopasowanie: :2, LAB01:1, K04:1, J09:1 -->

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
 + 
 + 
 + 
 + 
 + 
 + 
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

# WSPÓLNA KLINIKA BŁĘDÓW lekcji bloku F

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
-01 woda = mieszanina H + O
-02 filtracja soli z wody
-03 Fe + S = FeS

-01 jon Na⁺ ma 11 elektronów
-02 izotop = inny pierwiastek
-03 A = liczba neutronów

-01 okres = liczba elektronów walencyjnych
-02 grupa główna = reguła dla wszystkich grup
-03 trend promienia „rośnie w prawo”

-01 4s usuwa się po 3d
-02 p ma 2 orbitale
-03 Cr i Cu zapisuje się zawsze bez wyjątku

-01 ładunek jonu = stopień utlenienia
-02 wartościowość = stopień utlenienia
-03 ładunek całego jonu = stopień utlenienia atomu

-01 zmiana indeksu podczas bilansowania
-02 brak nawiasu w Ca(OH)₂
-03 nieuwzględnienie ładunku jonu wieloatomowego

-01 każde wiązanie polarne = cząsteczka polarna
-02 wiązanie jonowe jako „pojedyncza para wspólna”
-03 zła liczba elektronów Lewisa

-01 geometria elektronowa = zawsze kształt cząsteczki
-02 ignorowanie wolnych par
-03 kąt z rysunku 2D traktowany jako rzeczywisty

-01 zmiana indeksów
-02 bilans tylko jednego pierwiastka
-03 współczynnik pomylony z indeksem
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
| | poprawna klasyfikacja i dobór metody rozdzielania |
| | Z/A/p/n/e i jony |
| | grupa/okres/trendy |
| | konfiguracja i obsadzanie |
| | rozróżnienie trzech pojęć |
| | poprawny wzór i kontrola ładunku |
| | model wiązania + Lewis |
| | VSEPR + kąt + polarność |
| | poprawne równanie i bilans |

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

### Po 

Powtórka:

```text
 + + 
```

### Po 

Powtórka:

```text
 + + + 
```

### Po 

Powtórka:

```text
 + + + 
```

### Po ukończeniu bloku F

Pełny test przekrojowy:

```text
 → → → → → → → → 
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

Dla obowiązkowo:

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

# STATUS JAKOŚCI — 21 lekcji bloku F

| Moduł | Treść | Ćwiczenia | Doświadczenie/model | Interakcje opisane | Mosty | Status |
|---|---|---|---|---|---|---|
| | tak | mapa | — | architektura | lekcji bloku F | MASTER |
| | tak | tak | tak | klasyfikator/rozdzielanie | / | MASTER+ |
| | tak | tak | model atomu | konstruktor atomu | // | MASTER+ |
| | tak | tak | układ okresowy | porównywarka | /// | MASTER+ |
| | tak | tak | orbital/konfiguracja | konfigurator | / | MASTER+ |
| | tak | tak | modele jonów | rozróżniacz pojęć | /X01 | MASTER+ |
| | tak | tak | konstruktor wzoru | parser/balans ładunku | /R05 | MASTER+ |
| | tak | tak | Lewis | konstruktor Lewisa | | MASTER+ |
| | tak | tak | 3D/VSEPR | atomy/kąty | /K/J | MASTER+ |
| | tak | tak | reactor/balancer | bilansator | R05–R08/N | MASTER+ |

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

Po przejściu lekcji bloku F uczeń powinien umieć odpowiedzieć na pytanie:

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

# PODSUMOWANIE MODUŁÓW lekcji bloku F

| Moduł | Temat | Status |
|-------|-------|--------|
| | Materia i substancje | ✅ |
| | Atom | ✅ |
| | Układ okresowy | ✅ |
| | Konfiguracja elektronowa | ✅ |
| | Wartościowość / ładunek / stopień utlenienia | ✅ |
| | Wzory chemiczne | ✅ |
| | Wiązania chemiczne | ✅ |
| | Geometria cząsteczek (VSEPR) | ✅ |
| | Równania reakcji | ✅ |

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

---


# ANEKS WSPÓLNY v15.0 — JEDNO ŹRÓDŁO PRAWDY, WIZUALIZACJE I KONTRAKT LEKCJI

## 1. Zasada własności treści

- **F00** = meta-architektura bloku; nie jest lekcją.
- **F01–F21** = dokładnie 21 lekcji dydaktycznych.
- Pełne wyjaśnienie pojęcia ma jedno miejsce docelowe.
- Późniejsze lekcje używają pojęcia jako prerekwizytu i podają odnośnik, zamiast kopiować wykład.
- Wspólne reguły HTML, dane i systemy powtórek są centralne; lekcja przechowuje zakres dydaktyczny.

## 2. Właściciele głównych pojęć

| Pojęcie | Miejsce pełnego wyjaśnienia | Później |
|---|---|---|
| klasyfikacja materii | F02 | użycie |
| właściwości i rozdzielanie | F03 | użycie |
| Z, A, p, n, e | F04 | kontrola |
| izotopy, jony, masa atomowa | F05 | kontrola |
| elektrony walencyjne / odczyt układu | F06 | przypomnienie |
| konfiguracja elektronowa | F07 | użycie |
| konfiguracja → położenie | F08 | użycie |
| wartościowość / ładunek / stopień utlenienia | F09 | rozróżnienie |
| przyczyna tworzenia wiązania | F10 | użycie |
| typy wiązań | F11 | użycie |
| wzory | F12 | użycie |
| Lewis | F13 | prerekwizyt |
| VSEPR | F14 | prerekwizyt |
| polarność | F15 | użycie |
| obserwacja reakcji | F16 | użycie |
| równania i bilans | F17 | kontrola |
| dossier substancji | F18 | integracja |
| dossier reakcji | F19 | integracja |
| klinika błędów | F20 | transfer |
| transfer | F21 | zamknięcie bloku |

## 3. Katalog wizualizacji v15

| ID | Co pokazuje | Model silnika / status |
|---|---|---|
| V001v001 | łańcuch materia → reakcja → równanie | `live-cv` / do spięcia z lekcjami |
| V002v001 | klasyfikację próbki | `substance` / do weryfikacji integracji |
| V003v001 | atom: p/n/e, Z/A | `periodic-54` / do kontroli skali |
| V004v001 | izotop i jon przez Z/N/e | `ion-map-v02` + brak pełnego modelu izotopów / do wykonania |
| V005v001 | układ, grupa, okres, blok, trendy | `periodic-54` |
| V006v001 | konfigurację i orbitale | `molecule-electrons`, `molecule-orbitals` |
| V007v001 | dowód konfiguracja → układ | `periodic-54`, `molecule-electrons` |
| V008v001 | wartościowość / ładunek / stopień utlenienia | `ion-map-v02` / wymaga antybłędu |
| V009v001 | energia i odległość atomów | `energy-profile` / rozszerzyć o rząd/energię wiązania |
| V010v001 | konstruktor wzoru | `n01-konstruktor-v01`, `n02-wzory-v01` |
| V011v001 | wzór → Lewis → VSEPR → 3D | `molecule-2d`, `molecule3d-merged` |
| V012v001 | polarność i sumę wektorów | `molecule-cv` |
| V013v001 | obserwację reakcji w próbówce | `beaker-prediction-enhanced`, `lab-beaker-v102` |
| V014v001 | rozdzielanie mieszanin | brak dedykowanego modelu / do wykonania |
| V015v001 | bilans atomów i ładunku | `reaction`, `stech-kalkulator-v01` |
| V016v001 | dossier substancji | `substance`, `chem-profile10`, `molecule-cv` |
| V017v001 | dossier reakcji | `reaction`, `lab-beaker-v102`, `safety` |
| V018v001 | „Znajdź błąd” | `flow-egzamin-enhanced` |

## 4. Minimalny kontrakt każdej lekcji

1. karta E8 — 10 faktów;
2. legenda poziomów;
3. pytanie przewodnie i cel;
4. diagnoza;
5. rdzeń E8;
6. rozumienie / ambitne;
7. model lub doświadczenie;
8. klinika błędów;
9. ćwiczenia z odpowiedziami;
10. test jednokrotnego wyboru;
11. karta powtórkowa / mapa;
12. fiszki;
13. słownik;
14. dodatki z poziomem;
15. most do następnej lekcji;
16. model silnika / identyfikator wizualizacji.

## 5. Status zmian v15.0

- [x] dokładnie 21 lekcji;
- [x] F00 pozostaje dokumentem meta, F01 jest lekcją myślenia chemicznego;
- [x] usunięty duplikat rdzenia F09 z F10;
- [x] usunięty duplikat VSEPR z F15;
- [x] wspólna warstwa MASTER przeniesiona do jednego miejsca po F21;
- [x] poprawiona kolejność elektroujemności: F > O > Cl > N;
- [x] doprecyzowane 4s/3d;
- [x] doprecyzowana definicja wartościowości;
- [x] dodane karty E8 do wszystkich lekcji;
- [x] uzupełnione cienkie lekcje F10, F15, F18, F19, F20, F21;
- [x] uzupełnione wskazane braki F02, F05, F06, F07, F13, F16, F17;
- [x] zachowane wszystkie unikalne bloki źródłowe poza rzeczywistymi duplikatami;
- [ ] implementacja brakujących modeli V004/V014/V009 w HTML — zadanie silnika, nie Markdown;
- [ ] pełny audit danych `ATOMIC_PROPS` 118/118 — osobny gate danych.
## RDZEŃ E8 → ROZUMIENIE → AMBITNE

**E8:** wykonaj poprawny łańcuch od danych do odpowiedzi.  
**Rozumienie:** uzasadnij przejście między reprezentacjami.  
**Ambitne:** rozpoznaj granicę modelu i sam wskaż, czego jeszcze brakuje do pewnego wniosku.

---

# ANEKS v0.2x — NOWE WZGLĘDEM v16

# AUDYT ARCHIWALNY BLOKU F — F01–F09 · PRZELOT PONOWNY v0.2x

> **Uwaga redakcyjna v17 (08.10):** plik CLEAN v0.2x, w którym powstał ten audyt, miał zamiast treści lekcji F02–F21 puste znaczniki „zachowany materiał źródłowy” (≈170 KB zamiast 516 KB w v16). Oceny „ZACHOWANE” dotyczą więc **v16**, nie pliku CLEAN. W v17 treść v16 jest pełna, a z CLEAN dołączono tylko akapity nowe względem v16.

**Cel:** sprawdzić, czy przy przejściu ze starszej architektury L001–L013 / F00–F09 do obecnych F01–F21 nie zgubiono treści. Stare pliki są biblioteką odzysku, a obecny układ F01–F21 pozostaje kanonem.

| Archiwalny obszar | Obecny właściciel | Wynik |
|---|---|---|
| L001 — chemia jako nauka: makro / mikro / symboliczny / ilościowy; zapis ma znaczenie modelowe | F01 | **ZACHOWANE** |
| L002 — bezpieczeństwo, obserwacja, doświadczenie; problem→hipoteza→plan→obserwacja→dane→wniosek→wyjaśnienie; piktogramy/BHP | F01 | **ODZYSKANE TERAZ** |
| L003 — materia, substancja, pierwiastek, związek, mieszanina; jednorodność/fazy | F02 | **ZACHOWANE** |
| L004–L006 — właściwości, zjawisko fizyczne/reakcja, dobór rozdzielania | F03 | **ZACHOWANE** |
| L007 — atom: Z, A, N, proton/neutron/elektron, nuklid | F04 | **ZACHOWANE** |
| L008–L009 — izotopy, masa atomowa, jony i ładunek | F05 | **ZACHOWANE** |
| L010–L011 — układ okresowy, rodziny, elektrony walencyjne, reaktywność | F06 | **ZACHOWANE** |
| L012 — powłoka/podpowłoka/orbital/konfiguracja, Hund/Pauli/Aufbau, wyjątki i jonizacja | F07 | **ZACHOWANE** |
| L013 — konfiguracja ↔ położenie w układzie, okres/blok/grupa i ograniczenia uproszczeń | F08 | **ZACHOWANE** |
| Archiwalne mosty do molu/Avogadra, izobaru, liczb kwantowych i rozszerzeń | F04/F05/F07 + dalsze bloki | **ZACHOWANE JAKO POMOSTY / NIE DUBLOWAĆ** |
| Stare F07–F09: wiązania, VSEPR, równania reakcji | F11/F14/F17 w obecnym kanonie | **PRZENIESIONE LOGICZNIE** |

### Reguła po audycie

Różnica numeracji **nie jest utratą treści**. Treść pozostaje, a właściciel zmienia się wraz z nowym kanonem. Fragment jest uznawany za rzeczywisty brak dopiero wtedy, gdy nie ma ani w obecnym właścicielu, ani w oznaczonym moście do innego właściciela.


---

# DODATEK — INTERLEAVING BLOKU F · ODZYSKANY Z AUDYTU

To jest **nowy, scalony zestaw powtórkowy**, a nie kopia archiwalnej lekcji. Został włączony do F21, ponieważ obecny kanon nie zawierał tego konkretnego zestawu w tej postaci.

## Zestaw A — szybki przekrój

1. Ile elektronów ma Na⁺?
2. Jaki okres ma Cl?
3. Zapisz konfigurację Na.
4. Jaki jon tworzy tlen?
5. Zapisz wzór tlenku glinu.
6. Jaki typ wiązania występuje w NaCl?
7. Jaki kształt ma H₂O?
8. Zbilansuj H₂ + O₂ → H₂O.

## Zestaw B — wyjaśnij „dlaczego”

1. Dlaczego Fe²⁺ nie zapisujemy jako „Fe z dwoma protonami mniej”?
2. Dlaczego promień atomowy rośnie w dół grupy?
3. Dlaczego przy jonizacji typowego kationu metalu przejściowego elektrony usuwa się najpierw z 4s, a nie z 3d?
4. Dlaczego Al₂(SO₄)₃ ma indeks 3 przy grupie siarczanowej?
5. Dlaczego CO₂ jest liniowy?
6. Dlaczego zmiana indeksu podczas bilansowania zmienia substancję?

## System powtórek

Po każdej lekcji:
- 10 min — szybka ściąga;
- 10 min — analiza błędów;
- 15 min — dwa zadania bez pomocy.

Po F03: F01 + F02 + F03.

Po F05: F02 + F03 + F04 + F05.

Po F07: F04 + F05 + F06 + F07.

Po F09: pełny test przekrojowy F01 → F02 → F03 → F04 → F05 → F06 → F07 → F08 → F09.

## Kontrola końcowa

Po przejściu bloku F uczeń powinien umieć przejść od obserwowanej substancji do poprawnego opisu jej budowy, właściwości i przemiany oraz wyjaśnić, **dlaczego** wykonał każdy krok.


---

# MATERIAŁ Z ARCHIWUM — do redakcji (akapity, których nie ma w treści głównej)

## z: MASTER v15.0

# CHE.01F — FUNDAMENTY CHEMII · MASTER v15.0 · 21 LEKCJI NAPRAWIONE

## DZIENNIK ZMIAN v15.0

- F01 przemianowano dydaktycznie na „Jak myśli chemik: obserwacja → model → zapis”; mapa architektury pozostaje w F00.
- F09 odzyskał materiał błędnie wklejony do F10.
- F15 odzyskał własność polarności; pełny VSEPR pozostaje w F14.
- wspólne warstwy MASTER zostały scentralizowane po F21.
- dodano warstwę startową E8 dla wszystkich 21 lekcji.
- uzupełniono brakujące komponenty lekcji i naprawiono wskazane nieścisłości.

# CHE.01F — FUNDAMENTY CHEMII — MASTER v14.0
## JEDEN KANON: 21 PEŁNYCH LEKCJI BLOKU F

**Status:** kanon roboczy bloku F po scaleniu i uporządkowaniu.

## z: MASTER v14.0

# WSPÓLNA KLINIKA BŁĘDÓW lekcji bloku F

### Minimalny zestaw rekordów

## WSPÓLNY TEST / TRANSFER BLOKU F — ZASTOSOWANIE W TEJ LEKCJI
# WSPÓLNY TEST MISTRZOSTWA BLOKU F

## z: stary kanon F00–F09 (v4.1/v5.0)

# CHE.01.F — BLOK F: FUNDAMENTY (F00–F09) · scalone

- CHE.01.F00.mapa_chemii
- CHE.01.F01.materia_i_substancje
- CHE.01.F02.atom
- CHE.01.F03.uklad_okresowy
- CHE.01.F04.konfiguracja_elektronowa
- CHE.01.F05.wartosciowosc_ladunek_stopien_utlenienia
- CHE.01.F06.wzory_chemiczne
- CHE.01.F07.wiazania_chemiczne
- CHE.01.F08.geometria_czasteczek
- CHE.01.F09.rownania_reakcji

<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 502–738 -->
# CHEMIA: PODSTAWA PLUS — BLOK F FUNDAMENTY (v4.1)

**Wersja:** 5.0 · 2026-09-28
**Wersja bazowa zachowana:** 4.1 · 2026-09-27
**Zmiana:** przebudowa architektury na moduły F / N / R / J / O / B / X / E / K / A / P / LAB / REV
**Zasada:** stara numeracja L001–L013 zachowana jako aliasy. Nie kasujemy treści — przenosimy.
**Status implementacji:** F00–F09 = pełna treść MASTER + warstwa dydaktyczna/interakcyjna v5.0; HTML pozostaje warstwą wykonawczą.

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

## z: stary kanon F00–F09 (v4.1/v5.0)

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

## C. WSPÓLNY MODEL WZORU

Parser F06 powinien rozumieć co najmniej:

## E. WSPÓLNA KLINIKA BŁĘDÓW

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

## H. CO POWSTAJE DALEJ

### 0.1. Jak czytać ten plik

Każdy moduł F01–F09 ma trzy funkcje jednocześnie:

# WSPÓLNY SYSTEM ZADAŃ F01–F09

### ZINTEGROWANE FRAGMENTY CHE.ALL — v12.0

#### Diagnoza startowa (5–8 min)

<!-- źródłowy fragment: ### Diagnoza startowa (5–8 min); dopasowanie: F09:2, F05:2, REV00:1, J09:1 -->

#### 80/20 września z L001

<!-- źródłowy fragment: ### 80/20 września z L001; dopasowanie: F09:2, F06:2, F05:1, F03:1 -->

#### Typy reakcji

<!-- źródłowy fragment: ### Typy reakcji; dopasowanie: F09:2, R02:1, O07:1, LAB20:1 -->

## 6.5. KLINIKA BŁĘDÓW (realna sekcja z ćwiczeniami)

<!-- źródłowy fragment: ## 6.5. KLINIKA BŁĘDÓW (realna sekcja z ćwiczeniami); dopasowanie: F09:2, F06:2, F05:2, F02:2 -->

#### Mapa myśli: RÓWNANIE

<!-- źródłowy fragment: ### Mapa myśli: RÓWNANIE; dopasowanie: F09:2, LAB01:1, K04:1, J09:1 -->

## Poziom 4 — POŁĄCZ

```text
F03 + F04
F04 + F05
F05 + F06
F06 + F07
F07 + F08
F06 + F09
```

# WSPÓLNA KLINIKA BŁĘDÓW F01–F09

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

# SYSTEM MISTRZOSTWA

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

# SYSTEM POWTÓREK BLOKU F

### Po F09

```text
F01 → F02 → F03 → F04 → F05 → F06 → F07 → F08 → F09
```

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

# KRYTERIUM KOŃCOWE BLOKU F

Po przejściu F01–F09 uczeń powinien umieć odpowiedzieć na pytanie:

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

# NOTA ŹRÓDŁOWA I REDAKCYJNA

<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 738–1677 -->

## z: MASTER v15.0 — audyt zmian

# CHE.01F — AUDYT ZMIAN v15.0

**Baza:** `CHE.01F_FUNDAMENTY_MASTER_v14.0_21_LEKCJI_UDOSKONALONE(1).md`
**Wersja robocza:** `CHE.01F_FUNDAMENTY_MASTER_v15.0_21_LEKCJI_NAPRAWIONE.md` · 472331 B · 13333 linii

## Kontrola struktury

- [x] dokładnie 21 lekcji `CHE.01F.01`–`CHE.01F.21`;
- [x] F00 pozostaje dokumentem meta; F01 = `obserwacja → model → zapis`;
- [x] potwierdzone duplikaty wspólnej warstwy usunięte; każdy wspólny marker poniżej występuje raz;
- [x] pełny VSEPR pozostaje w F14; F15 ma tylko prerekwizyt VSEPR i własny wykład polarności;
- [x] materiał F09 błędnie wklejony do F10 przeniesiony do F09;

| Wspólny marker | Liczba |
|---|---:|
| `DODATEK MASTER — INTEGRACJA lekcji bloku F` | 1 |
| `BLOK F — WARSTWA LEKCJI MASTER v5.0` | 1 |
| `WSPÓLNY SYSTEM ZADAŃ lekcji bloku F` | 1 |
| `WSPÓLNA KLINIKA BŁĘDÓW lekcji bloku F` | 1 |
| `WSPÓLNY TEST MISTRZOSTWA BLOKU F` | 1 |
| `SYSTEM POWTÓREK BLOKU F` | 1 |
| `SPECYFIKACJA HTML DLA CAŁEGO BLOKU F` | 1 |
| `DANE WSPÓLNE — JEDNO ŹRÓDŁO PRAWDY` | 1 |

## Kontrola merytoryczna

- [x] elektroujemność: `F > O > Cl > N`;
- [x] 4s/3d: rozdzielono regułę obsadzania od rzeczywistej kolejności energii orbitali;
- [x] wartościowość nie jest utożsamiana z ładunkiem jonu ani stopniem utlenienia;
- [x] F15 nie powiela pełnego VSEPR;
- [x] zachowano wyjątki i przykłady źródłowe zamiast zastępować je skrótem.

## Uzupełnienia

- [x] karta E8 + diagnoza wejściowa we wszystkich 21 lekcjach;
- [x] uzupełnione kliniki, ćwiczenia, testy, fiszki, słowniki i mosty tam, gdzie audyt wykazał braki;
- [x] rozbudowane F10, F15, F18, F19, F20, F21;
- [x] dodany centralny aneks właścicieli pojęć i katalog V001–V018.

## Otwarte zadania projektu

- [ ] V004: dedykowany model izotopów;
- [ ] V014: dedykowany model rozdzielania mieszanin;
- [ ] V009: głębszy model energii/rzędu wiązania;
- [ ] gate danych `ATOMIC_PROPS` 118/118;
- [ ] implementacja HTML i testy runtime — ten plik jest kanonem dydaktycznym, nie wykonawczym HTML.

## Rozmiar lekcji

| Lekcja | Linie |
|---|---:|
| F01 | 382 |
| F02 | 477 |
| F03 | 917 |
| F04 | 959 |
| F05 | 811 |
| F06 | 629 |
| F07 | 733 |
| F08 | 683 |
| F09 | 1039 |
| F10 | 143 |
| F11 | 835 |
| F12 | 842 |
| F13 | 756 |
| F14 | 849 |
| F15 | 164 |
| F16 | 510 |
| F17 | 658 |
| F18 | 166 |
| F19 | 155 |
| F20 | 139 |
| F21 | 1356 |
