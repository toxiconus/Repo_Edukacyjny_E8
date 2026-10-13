# Analiza i ścieżka „bieżąco + pomost LO + olimpiada" dla klasy 8

## 0. Założenia

- Szkoła jest teraz na **solach** (dział II kl. 8); dalej: **Węgiel i jego związki**, **Substancje biologiczne**, powtórki i **E8 (kwiecień/maj)**. Jeśli kolejność w szkole jest inna — moduły poniżej przesuwa się 1:1.
- Cel trzytorowy: (A) bieżące lekcje szkolne + E8, (B) pomost do LO biol-chem, (C) fundamenty pod Olimpiadę Chemiczną (pierwsze wejście: klasa 1 LO, zawody I st. ~listopad — w kl. 8 olimpiady chemii nie ma, są konkursy przedmiotowe).

---

## 1. Analiza: co zostaje, co zmienić

**Co jest mocne (zostaje):**
1. Kanon 113 lekcji + reguła „jeden właściciel pojęcia" (OWNER/REF/EXPAND/APPLY) — idealnie wspiera ideę „lustro / most / olimpijsko".
2. Kolumny „Wymaga / Pogłębia" w F00 są spójne — sprawdziłem wszystkie łańcuchy potrzebne dla ścieżki poniżej (działają bez sprzeczności, przy dwóch świadomych wyjątkach — pkt 5).

**Co zmienić:**
2. **Repo jest „podręcznikowe", nie „kalendarzowe".** Kolejność F→N→R→J→O nie pokrywa się z rocznikiem szkolnym. Nie przestawiać lekcji — dodać **plik ścieżki** (`chemia/plany/CHE_SCIEZKA_KL8.md`) + kolumnę „Moduł kl.8" w F00 (przez `gen_f00.py`, frontmatter `modul_kl8: M1.3`).
3. **Brak warstw E8/LO/OLIMP.** Niektóre lekcje już mają rozdział E8/LO (F07, F14, F15…), ale nie ma tego systemowo. Dodać frontmatter `warstwy: [E8, LO, OL]` i w szablonie HTML stały box **„Lustro i most"**: *Było: … | Teraz: … | Będzie (LO): … | Olimpijsko: …*.
4. **Luki krytyczne dla ścieżki bieżącej:** REV01/REV02 bez treści, RT00–RT10 tylko szkice, **R01/R02 za cienkie** (5,5/4,6 KB — a krzywe rozpuszczalności to stały element E8), N06 pusty.
5. **Dwa łańcuchy zależności, które wymuszają kolejność:** J07/J09/J10 wymagają K09 (równowaga) → pełne wersje dopiero w Fazie C; K04 wymaga R05 → kinetyka ilościowa dopiero po molowości. Dlatego w kl. 8 te tematy wchodzą **jakościowo** (jako mosty), a formalnie w LO.
6. **Niespójność statusów** (GOTOWE HTML + „PRZEBUDOWA" w tabeli plików: F01–F04, F09, N01) — uporządkować w generatorze, żeby zaufanie do F00 nie spadało.
7. **Dozowanie przed E8:** 70% rdzeń E8 / 20% most LO / 10% olimpijsko. Po E8 (okno kwiecień–sierpień = złoty czas na pomost) odwrócenie proporcji.
8. **Puste bloki A i P nie blokują kl. 8** — termin: przed/na klasę 1 LO. J07–J12 (3,6–4,7 KB) są OK jako mosty, ale przed Fazą C trzeba je rozbudować do pełnych lekcji.

---

## 2. Model: trzy warstwy w każdym module

| Znak | Warstwa | Znaczenie |
|---|---|---|
| **[E8]** | Rdzeń | podstawa programowa + arkusze E8 — obowiązkowe |
| **[LO]** | Most | treść rozszerzenia LO na miękkim gruncie (jakościowo, bez logarytmów) |
| **[OL]** | Olimpijsko | zadania transferowe, detektyw chemiczny, konkursy |
| **[REF]** | Lustro | przypomnienie znanego w nowym kontekście |

---

## 3. Ścieżka — pełny spis (wszystkie 113 lekcji przypisane dokładnie raz)

Legenda stanu: ✅ GOTOWE HTML · ◐ działa (uzupełnione/poprawione) · ⚠ przebudowa zaplanowana · ○ pusty/do napisania

### FAZA 0 — Fundamenty i powtórka kl. 7 (adaptacyjnie; tor krytyczny 2–3 tyg., reszta równolegle)

**Tor krytyczny (przed Modułem 1):**

| # | Kod | Tytuł | Warstwa | Zakres (cel) | Było → Będzie | Stan |
|---|---|---|---|---|---|---|
| 0.1 | REV01 | Powtórka kl. 7 | REF | atom Z/A, układ, wiązania, reakcje, roztwory — diagnostyka braków | kl. 7 → cały kurs | ○ **P1** |
| 0.2 | F09 | Wartościowość, ładunek, SU | E8+OL | trzy liczby i które do czego; SU we wzorach soli | F04–F08 → N05, X01 | ✅⚠ |
| 0.3 | F12 | Wzory chemiczne | E8 | wzory soli, masa cząsteczkowa, skład % | F09/F11 → R04, R07 | ✅ W3 |
| 0.4 | F17 | Równania reakcji | E8 | dobieranie współczynników, typy, warunki | F16 → R07, X01 | ◐ |
| 0.5 | R03 | Stężenie procentowe | E8 | Cp, rozcieńczanie, zatężanie, mieszanie | R01–R02 → R05 (F. B) | ✅ |
| 0.6 | F20 | Klinika błędów fundamentów | OL | diagnoza i naprawa błędów przekrojowych | F01–F19 → wszystko | ◐ |

**Tor równoległy (w tle, ~2 lekcje/tydz.):**

| Kod | Tytuł | Warstwa | Zakres (cel) | Było → Będzie | Stan |
|---|---|---|---|---|---|
| F01 | Jak myśli chemik | REF | obserwacja/wniosek, model, 4 poziomy | — → wszystko | ✅⚠ |
| F02 | Materia i substancje | REF | klasyfikacja próbki | F01 → F03 | ✅⚠ |
| F03 | Właściwości i rozdzielanie | REF | fiz./chem., dobór metody | F02 → R01, N01 | ✅⚠ |
| F04 | Atom | REF | Z, A, p/n/e, jony | — → F05 | ✅⚠ |
| F05 | Izotopy, jony, masa atomowa | REF+OL | średnia ważona | F04 → F06, A01 | ◐ |
| F06 | Układ okresowy | REF | położenie, walencyjne, trendy | F04–F05 → P01–P06 | ✅ |
| F07 | Konfiguracja (E8: powłoki) | E8 | rozmieszczenie na powłokach | F04/F06 → LO-podpowłoki (B2.1) | ◐ |
| F08 | Konfiguracja ↔ układ | E8 | powłoki ↔ grupa/okres | F06/F07 → F09–F15 | ◐ |
| F10 | Dlaczego atomy się łączą | E8/LO | energia, oktet i jego granice | F06–F09 → F11, F13 | ◐ |
| F11 | Wiązania jonowe/kowalencyjne/metaliczne | E8/LO | typ wiązania, polaryzacja, właściwości | F06–F09 → O01 | ◐ |
| F13 | Wzory Lewis (E8: cząsteczki) | E8 | kropkowe/kreskowe | F11/F12 → LO-jony (B2.3) | ◐ |
| F15 | Polarność (E8: wiązanie) | E8 | „podobne rozpuszcza podobne" | F11 → oddziaływania (B2.5) | ◐ |
| F16 | Od obserwacji do modelu reakcji | E8 | objawy ≠ wniosek, model słowny | F01–F03 → F17 | ◐ |
| F18 | Dossier substancji | OL | synteza wiedzy o substancji | F02–F12 → R, J | ◐ |
| F19 | Dossier reakcji | OL | rekord reakcji od A do Z | F16/F17 → N, X | ◐ |
| F21 | Zadania transferowe | OL | F bez wskazania metody | F01–F20 → dalej | ◐ |
| N01 | Powietrze i gazy | REF | tlen, wodór, CO₂ — otrzymywanie i wykrywanie | F02/F03 → N02 | ✅⚠ |
| N02 | Tlenki | REF | klasyfikacja wg charakteru | F09 → N03, N04, J05 | ✅ |
| N06 | Wodorki | REF | wodór i proste związki (mini-wersja) | N01 → N07 | ○ **P2** |
| R01 | Woda i roztwory | E8 | roztwór / zawiesina / koloid | F03/F15 → R02 | ◐ **P1: pogłębić** |
| R02 | Rozpuszczalność | E8 | krzywe, nasycony/nienasycony | R01 → R03, J10 | ◐ **P1: pogłębić** |

### MODUŁ 1 — System kwasy–zasady–sole (szkoła: **teraz sole**) — 4–6 tyg.

| # | Kod | Tytuł | Warstwa | Zakres (cel) | Było → Będzie | Stan |
|---|---|---|---|---|---|---|
| 1.1 | **N05** | **Sole** | **E8** | wzory, nazwy, dysocjacja, metody otrzymywania, właściwości | N03/N04 → J04, J11 | ✅ |
| 1.2 | N03 | Wodorotlenki (lustro) | REF | powtórka + rozszerzenie o moc/słabość | N02 → J01, J05 | ✅ |
| 1.3 | N04 | Kwasy (lustro) | REF | tlenowe/beztlenowe, odczyn | N02 → J01, X04 | ✅ |
| 1.4 | J01 | Dysocjacja elektrolityczna | E8 | równania, elektrolity mocne/słabe | F15, N03–N05 → J02–J06 | ◐ |
| 1.5 | J02 | pH i odczyn | E8 | wskaźniki, skala pH (obliczenia → C2) | J01 → J06, J12 | ◐ |
| 1.6 | J03 | Reakcje jonowe | LO | forma cząsteczkowa / jonowa pełna / skrócona | J01 → J04, X05 | ◐ |
| 1.7 | J04 | Strącanie osadów | E8+LO | tabela rozpuszczalności, przewidywanie osadu | J03 → J10 | ◐ |
| 1.8 | J05 | Amfoteryczność | LO | Al(OH)₃, Zn(OH)₂ | N02, N03, J03 → P02/P03 | ◐ |
| 1.9 | J06 | Równowagi kwasowo-zasadowe | LO | Brønsted jakościowo, pary sprzężone | J01, J02 → J07 (C2) | ◐ |
| 1.10 | J08 | Hydroliza soli *(jakościowo)* | LO | dlaczego NaCl ≠ Na₂CO₃ | J06 → pełna wersja C2 | ◐ cienki |
| 1.11 | J10 | Ksp *(jakościowo)* | LO/OL | idea iloczynu rozpuszczalności, warunek strącania | J04 → pełna C2 (po K09) | ◐ cienki |
| 1.12 | J11 | Identyfikacja jonów | OL | Cl⁻, SO₄²⁻, CO₃²⁻, NH₄⁺, PO₄³⁻ — detektyw | J03, J04 → laboratoria | ◐ cienki |
| 1.13 | N07 | Systematyka nieorganiczna | REF/OL | wzór → nazwa → klasa | N02–N06 → N08 | ◐ cienki |
| 1.14 | N08 | Mapa przemian | OL | „co powstanie?" między klasami | N02–N07 → X01 | ◐ cienki |

**Zestaw OL.M1:** nieznana sól do rozpoznania (detektyw) · jedna sól × 3 drogi otrzymywania · strącanie + wydajność (po mini-molu z F12) · SU w solach złożonych.

### MODUŁ 2 — Węgiel i związki węgla (szkoła: dział III) — 5–7 tyg.

| # | Kod | Tytuł | Warstwa | Zakres (cel) | Było → Będzie | Stan |
|---|---|---|---|---|---|---|
| 2.1 | O01 | Język chemii organicznej | E8 | wzory, podstawy nazewnictwa | F11–F13 → O02–O25 | ◐ |
| 2.2 | O02 | Alkany | E8 | szeregi homologiczne, właściwości | O01 → O03 | ◐ |
| 2.3 | O03 | Izomeria | E8+OL | izomery konstytucyjne do C5 | O02 → O24, OL: liczba izomerów | ◐ |
| 2.4 | O04 | Alkeny | E8 | wiązanie podwójne, addycja, próba bromowa | O02, O03 → O07, O21 | ◐ |
| 2.5 | O05 | Alkiny | E8 | etyn (minimum) | O04 → O06 | ◐ |
| 2.6 | O06 | Spalanie węglowodorów | E8+OL | całkowite/niecałkowite, wykrywanie produktów | O02–O05 → K01; OL: analiza spalania | ◐ |
| 2.7 | O07 | Areny | LO | benzen, aromatyczność, substytucja | O04 → O09, O25 (C) | ◐ |
| 2.8 | O08 | Alkohole | E8 | etanol, właściwości, reakcje | O02 → O10–O12 | ◐ |
| 2.9 | O10 | Aldehydy i ketony | LO | C=O, Tollens/Trommer — **pomost do glukozy** | O08 → O15 | ◐ cienki |
| 2.10 | O11 | Kwasy karboksylowe | E8 | metanowy, octowy | O08, J01 → O12 | ◐ |
| 2.11 | O12 | Estry | E8 | estryfikacja, hydroliza | O08, O11 → O13 | ◐ |
| 2.12 | O09 | Fenole | LO | porównanie z alkoholami | O07, O08 | ◐ cienki |
| 2.13 | O14 | Aminy i amidy | LO | grupa –NH₂, zapowiedź peptydów | O01, J06 → O18 | ◐ cienki |
| 2.14 | O21 | Polimery i tworzywa | E8 | polimeryzacja, tworzywa, odpady | O04, O12 | ◐ cienki |
| 2.15 | O24 | Nazewnictwo zbiorcze | LO/OL | procedura IUPAC dla poznanych klas | O01–O21 → pełna C5 | ◐ cienki |

**Zestaw OL.M2:** wyznaczanie wzoru z bilansu spalania · liczenie izomerów · rozróżnianie alkan/alken/kwas jedną probówką.

### MODUŁ 3 — Biochemia + kinetyka (szkoła: dział IV) — 4–5 tyg. (złoty most biol-chem)

| # | Kod | Tytuł | Warstwa | Zakres (cel) | Było → Będzie | Stan |
|---|---|---|---|---|---|---|
| 3.1 | O13 | Tłuszcze, mydła, detergenty | E8 | estry glicerolu, zmydlanie | O11, O12 → O22 | ◐ |
| 3.2 | O15 | Cukry — mono | E8 | glukoza, fruktoza, próby redukcyjne (O10!) | O08, O10 → O16 | ◐ |
| 3.3 | O16 | Cukry — di | E8 | sacharoza, hydroliza | O15 → O17 | ◐ |
| 3.4 | O17 | Cukry — poli | E8 | skrobia vs celuloza, próba jodowa | O16 → O23 | ◐ |
| 3.5 | O18 | Aminokwasy | E8+LO | budowa, wiązanie peptydowe | O11, O14 → O19 | ◐ |
| 3.6 | O19 | Białka — struktura | E8/LO | I–IV str., denaturacja, koagulacja | O18 → K07 | ◐ |
| 3.7 | O20 | Białka — reakcje | E8 | biuret, ksantoproteinowa | O19 | ◐ |
| 3.8 | O22 | Witaminy | REF-biol | aspekt chemiczny (właściciel: biologia) | O13 | ◐ |
| 3.9 | O23 | Metabolizm | REF-biol | aspekt chemiczny | O15–O20 | ◐ |
| 3.10 | K01 | Energia reakcji | E8/LO | egzo/endo, wykres energetyczny, kalorie | F16/F17 → K02 (B4) | ◐ |
| 3.11 | K04 | Szybkość reakcji *(jakościowo)* | LO | definicja, pomiar, wykresy | → ilościowo C (po R05) | ◐ |
| 3.12 | K05 | Czynniki szybkości | LO | stężenie, temperatura, rozdrobnienie | K04 → K06 | ◐ cienki |
| 3.13 | K06 | Zderzenia i Ea | LO | teoria zderzeń, energia aktywacji | K01, K05 → K07 | ◐ |
| 3.14 | K07 | Kataliza | LO-biol | katalizator, **enzym**, inhibitor | K06 → O19 | ◐ |

**Teastery:** J09 (bufory — pH krwi, pełne w C2) · X01 (oddychanie komórkowe = redoks, pełne w B3).
**Zestaw OL.M3:** dlaczego w lodówce jedzenie dłużej świeże (Ea) · projekt: enzymy w życiu codziennym.

### MODUŁ 4 — Powtórka i E8 (kwiecień/maj)

| # | Kod | Co | Warstwa | Stan |
|---|---|---|---|---|
| 4.1 | REV02 | Pełna powtórka kl. 8 wg działów | E8 | ○ **P1** |
| 4.2 | RT00–RT10 | Powtórki tematyczne (wybór 6–8 pod wynik diagnostyki F20) | E8 | ○ szkice **P1** |
| 4.3 | F20 + F21 (2. fala) | Błędy przekrojowe + transfer na arkuszach | OL | ◐ |
| 4.4 | N07/N08 + arkusze E8 | Systematyka jako szybkie punkty egzaminacyjne | E8 | ◐ |

### FAZA B — POMOST LO (po E8 → koniec wakacji; odwrócone dozowanie)

| # | Kod | Tytuł | Warstwa | Zakres (cel) | Było → Będzie | Stan |
|---|---|---|---|---|---|---|
| B1.1 | R04 | Mol i masa molowa | LO | n, M, liczba Avogadra — **narzędzie nr 1** | F12 → R05–R09 | ◐ |
| B1.2 | R05 | Stężenie molowe | LO | Cm, Cp ↔ Cm | R03, R04 → J07, K04, E01 | ◐ |
| B1.3 | R06 | Objętość molowa | LO | 22,4 dm³, Clapeyron | R04 → R07 | ◐ rozbudować P2 |
| B1.4 | R07 | Stechiometria | LO/OL | obliczenia z równań | F17, R04, R06 → wszystko | ◐ |
| B1.5 | R08 | Reagent ograniczający | OL | skład mieszaniny poreakcyjnej | R07 → R09 | ◐ |
| B1.6 | R09 | Wydajność | OL | wydajność, zanieczyszczenia | R07, R08 → K11 | ◐ |
| B2.1 | F07 (w. LO) | Podpowłoki | LO | s/p/d, reguły zapełniania | F06 → P03 | ◐ |
| B2.2 | F08 (w. LO) | Konfiguracja ↔ układ | LO | pełna wersja z podpowłokami | F07 → F09–F15 | ◐ |
| B2.3 | F13 (w. LO) | Lewis dla jonów | LO | kationy/aniony, pierwiastek 8. grupy | F11, F12 → F14 | ◐ |
| B2.4 | F14 | Geometria (VSEPR) | LO | domeny, geometria, kąty | F11–F13 → F15 | ◐ |
| B2.5 | F15 (w. LO) | Oddziaływania | LO | polarność cząsteczki, wiązanie wodorowe | F14 → R01–R03, J01 | ◐ |
| B2.6 | F10 (w. LO) | Energia wiązania | LO | granice oktetu, wyjątki | F06–F09 | ◐ |
| B3.1 | X01 | Reakcje redoks | LO | zmiana SU, utleniacz/reduktor — **narzędzie nr 2** | F09, F17 → X02–X09 | ◐ |
| B3.2 | X02 | Utleniacze i reduktory | LO | katalog, przewidywanie produktów | X01 → X05–X07 | ◐ |
| B3.3 | X03 | Bilans elektronowy | OL | dobieranie współczynników redoks | X01 → E01, X05 | ◐ |
| B3.4 | X04 | Szereg aktywności metali | LO | wypieranie metali i wodoru | N04, X01 → E02, E05 | ◐ |
| B3.5 | X05 | Redoks jonowy | OL | bilans w formie jonowej | X03, J03 → X06, X07 | ◐ |
| B3.6 | X06 | Redoks kwasowy | OL | metoda połówkowa (H⁺) | X05 → E04 | ◐ |
| B3.7 | X07 | Redoks zasadowy | OL | metoda połówkowa (OH⁻) | X05 | ◐ |
| B3.8 | X08 | Dys-/synproporcjonowanie | OL (opc.) | rozpoznawanie i bilans | X03 | ◐ |
| B4.1 | K02 | Entalpia | LO | ΔH, prawo Hessa | K01 → K03 | ◐ rozbudować P2 |
| B4.2 | K03 | Kalorymetria | OL | ciepło reakcji, przemiany fazowe | K02 | ◐ |
| B5.1 | A01 | Jądro atomowe | OL | siły jądrowe, stabilność | F04, F05 → A02 | ◐ cienki |
| B5.2 | A02 | Radioaktywność | OL | α/β/γ | A01 → A03 | ○ P3 |
| B5.3 | A03 | Przemiany jądrowe | OL | równania jądrowe | A02 → A04 | ○ P3 |
| B5.4 | A04 | Okres półtrwania | OL | obliczenia t½ | A03 → A06 | ○ P3 |
| B6.1 | F18/F19 | Dossiers — 2. fala | OL | te same zadania z molami i redoksem | — | ◐ |
| B6.2 | F20/F21 | Klinika + transfer — 2. fala | OL | poziom LO | — | ◐ |
| B6.3 | LAB01–24 (wybór) | Tydzień praktyk | OL/E8 | doświadczenia przypisane przez „wymaga" | mapa LAB | — |

### FAZA C — LO klasa 1: druga fala rozszerzenia = OLIMPIADA (wrzesień →)

| # | Grupa | Warstwa | Zakres | Było → Będzie | Stan |
|---|---|---|---|---|---|
| C1 | K08 → K09 → K10 → K11 | LO/OL | równowaga dynamiczna, K, Le Chatelier, zadania | K04, R05 → J07, J10 | ◐⚠ |
| C2 | J07 → J08 → J09 → J10 → J12 | LO/OL | Ka/Kb/Kw, hydroliza pełna, bufory, Ksp, miareczkowanie | J06, K09 → biol-chem | ◐ **P2: rozbudować** |
| C3 | E01–E06 | LO/OL | ogniwa, potencjały, SEM, elektroliza, korozja, baterie | X03–X06, R05 | ◐ |
| C4 | P01–P06 | LO/OL | bloki s/p/d, grupy, związki charakterystyczne, predykcja | F06–F08, X01 | ○ P3 |
| C5 | O24 (pełny) → O25 | OL | IUPAC zbiorczo, mechanizmy i przepływ elektronów | O01–O21 | ◐ cienki |
| C6 | K04 (ilościowo), A05, A06 | OL | szybkość w mol/(dm³·s), deficyt masy, zastosowania | R05, A01–A04 | ○ |
| C7 | X09 + REV03–REV06 + sety olimpijskie | OL | przekroje, powtórki LO, arkusze zawodów | wszystko | do zrobienia |

---

## 4. Zmiany w repo — kolejność prac

| Priorytet | Zadanie | Dlaczego / termin |
|---|---|---|
| **P1** | Treść REV01 + REV02 | Bez nich diagnostyka i powtórki nie istnieją — na teraz |
| **P1** | RT00–RT10: napisać 6–8 pod E8 (symbole/wzory, równania, sole, organika, biochemia, obliczenia %) | przed powtórkami (marzec) |
| **P1** | Pogłębić R01, R02 | krzywe rozpuszczalności = stały punkt E8 |
| **P2** | Plik `CHE_SCIEZKA_KL8.md` + frontmatter `modul_kl8`, `warstwy` w lekcjach + kolumny w `gen_f00.py` | trwałe osadzenie ścieżki |
| **P2** | Box „Lustro i most" w szablonie HTML (4 linie na początku lekcji) | to jest realizacja „patrzenia co było i co będzie" |
| **P2** | Rozbudować J07–J12, R06, K02 | w Fazie C stają się rdzeniem |
| **P2** | N06 mini-wersja (2 strony) | domyka kl. 7 |
| **P2** | Zestawy OL.M1–M3 jako osobne pliki (np. `00/CHE.00.OL.M1.md`) | warstwa olimpijska per moduł |
| **P3** | A02–A06, P01–P06, REV03–REV06 | przed/na klasę 1 LO |
| **P3** | Sprzątka statusów F00 (GOTOWE vs PRZEBUDOWA) | wiarygodność spisu |

## 5. Kalendarz skrótowy

**teraz–styczeń:** tor krytyczny 0 + M1 (sole) → **luty:** M2 → **marzec:** M3 → **kwiecień–maj:** M4 + E8 → **maj–czerwiec:** B1–B3 → **lipiec–sierpień:** B4–B6 + LAB → **wrzesień (LO):** C + zawody OCh I stopień (~listopad).

## 6. Uwagi końcowe

- Jeśli profil = **biol-chem**: w Fazie C priorytet mają C2 (bufory! miareczkowanie), K07/enzymy i cała biochemia — resztę można odłożyć.
- Przed E8 pilnować limitu: mosty tylko **jakościowo** (bez logarytmów, bez Ksp-obliczeń) — inaczej pomost zje punktację E8.
- Chętnie wygeneruję teraz konkretny element: plik `CHE_SCIEZKA_KL8.md` w formacie zgodnym z repo, treść REV01, albo pierwszy zestaw OL.M1 — który bierzemy na warsztat?