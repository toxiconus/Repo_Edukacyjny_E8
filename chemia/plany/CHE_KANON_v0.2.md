---
kod: CHE-KANON
wersja: v0.2 (plan roboczy)
data: 2026-10-08
status: plan — numeracja v0.2 obowiązuje dopiero po zatwierdzeniu; pliki lekcji mają jeszcze stare kody
zastepuje: CHE_SPIS_LEKCJI.md (v0.1), AUDYT_SPISU_v0.2.md (wnioski wdrożone tutaj), PLAN_LEKCJI.md (stary blok F)
uzupelnia: PLAN_SCIEZKI_DYDAKTYCZNE.md (ścieżki E7/E8/LO)
---

# CHE — kanon lekcji v0.2: baza, zakresy, stan, uzasadnienia

## 0. Jak czytać ten plik

- **Kanon** = biblioteka całej chemii. Kod lekcji (np. N03) to jej stałe miejsce w bibliotece, **nie** kolejność nauki ucznia. Kolejność dla klasy 7, klasy 8 i LO wyznaczają ścieżki (`PLAN_SCIEZKI_DYDAKTYCZNE.md`).
- Numeracja v0.2 jest ułożona **logicznie wewnątrz grupy**: każda lekcja korzysta tylko z wcześniejszych lekcji tej grupy (+ wskazanych grup).
- Kolumna **poziom**: `E8` — w całości szkoła podstawowa; `E8+LO` — część E8 i rozszerzenie LO (sekcje oznaczone poziomem); `LO` — tylko liceum. Przydział E8 do weryfikacji z podstawą programową po zmianach 2024.
- Kolumna **stan**: ●●● md + HTML działa · ●○○ treść w kanonie F v16 · ◐○○ treść w kanonie, cienka · ○○○ tylko plan.
- Kolumna **było**: kod w v0.1. `nowa` = lekcja dopisana w v0.2.

**Bilans:** 113 lekcji w 10 grupach (v0.1: 110). Gotowe: 6 (F01, N02–N06). Treść w kanonie: 20 (F02–F21). Plan: 87.

---

## 1. Zasady budowy kanonu

1. **Jeden właściciel pojęcia.** Każde pojęcie jest uczone od zera w jednej lekcji (OWNER). Inne lekcje: przypominają je ściągą (REF), pogłębiają (EXPAND) albo używają (APPLY). Dzięki temu nie ma dwóch lekcji o tym samym.
2. **Poziomy w lekcji, nie osobne lekcje.** Temat E8 i jego rozszerzenie LO są w jednej lekcji, w sekcjach z oznaczeniem poziomu. Ścieżka E8 pokazuje tylko sekcje E8.
3. **Grupy się przecinają.** J (jony) i R (roztwory) wchodzą w lekcje N jako sekcje E8; pełne lekcje J/R są ich właścicielami. Zależności zapisuje się w lekcji (`wymaga`, `zalecane`, `poglebia`).
4. **Bez kasowania treści.** Scalenie = treść obu lekcji trafia do jednej; stary kod zostaje w mapie (sekcja 13).
5. **Numeracja stabilna od v1.0.** Do zatwierdzenia v1.0 wolno przenumerowywać; po v1.0 nowe lekcje dostają tylko kolejne wolne numery.

### Kolejność grup (dlaczego taka)

| nr | grupa | dlaczego tu |
|---|---|---|
| 01 | F Fundamenty | język, atom, wiązanie, równanie — potrzebne wszędzie |
| 02 | N Nieorganiczna | pierwsze klasy związków; oparta tylko na F |
| 03 | R Roztwory i stechiometria | ilościowy opis; potrzebny J, X, E, K |
| 04 | J Jonowa | wymaga N (substancje) i R (stężenia) |
| 05 | O Organiczna | wymaga F (wiązania, wzory) i częściowo J (kwasowość) |
| 06 | X Redoks | wymaga F09, N, J |
| 07 | E Elektrochemia | wymaga X + J + R |
| 08 | K Energetyka, kinetyka, równowaga | wymaga R; J09–J10 korzystają z K08 (stała równowagi) — zapisane jako zależność |
| 09 | A Jądrowa | rozwija F04–F05; niezależna od reszty |
| 10 | P Układ okresowy — pogłębienie | spina wszystko: przewidywanie właściwości z położenia |

Grupy F–A zostają w dotychczasowej kolejności; zmiany są wewnątrz grup.

---

## 2. F — Fundamenty (21 lekcji)

Źródło treści: `chemia/lekcje_md/F_nowe/CHE.01F_FUNDAMENTY_MASTER_v16.0_…md`. Numeracja F bez zmian — kanon v16 jest już ułożony logicznie (5 faz).

### Faza A — Co badamy?

| kod | lekcja | zakres | poziom | stan |
|---|---|---|---|---|
| F01 | Jak myśli chemik | obserwacja vs wniosek, model vs rzeczywistość, 4 poziomy opisu, 5 pytań chemika | E8 | ●●● |
| F02 | Materia i substancje | substancja czysta (pierwiastek, związek) vs mieszanina jednorodna i niejednorodna | E8 | ●○○ |
| F03 | Właściwości i rozdzielanie mieszanin | właściwości fizyczne i chemiczne, stany skupienia, zjawisko vs reakcja, metody rozdzielania | E8 | ●○○ |

### Faza B — Z czego to wynika?

| kod | lekcja | zakres | poziom | stan |
|---|---|---|---|---|
| F04 | Atom | Z, A, protony, neutrony, elektrony w atomie i jonie | E8 | ●○○ |
| F05 | Izotopy, jony, masa atomowa | izotop vs jon vs inny pierwiastek, masa atomowa jako średnia ważona | E8+LO | ●○○ |
| F06 | Układ okresowy | czytanie położenia, elektrony walencyjne, trendy (OWNER trendów) | E8+LO | ●○○ |
| F07 | Konfiguracja elektronowa | E8: powłoki; LO: podpowłoki, Hund, Pauli, wyjątki Cr i Cu | E8+LO | ●○○ |
| F08 | Konfiguracja ↔ układ okresowy | odczyt okresu, grupy, bloku z konfiguracji i odwrotnie | E8+LO | ●○○ |
| F09 | Wartościowość, ładunek, stopień utlenienia | trzy liczby, kiedy której używać; OWNER stopnia utlenienia | E8+LO | ●○○ |

### Faza C — Jak powstaje struktura?

| kod | lekcja | zakres | poziom | stan |
|---|---|---|---|---|
| F10 | Dlaczego atomy się łączą | niższa energia, reguła oktetu i dubletu, jej granice | E8+LO | ◐○○ |
| F11 | Wiązania jonowe, kowalencyjne, metaliczne | rozpoznanie typu wiązania (też spolaryzowane), właściwości substancji | E8+LO | ●○○ |
| F12 | Wzory chemiczne | W–K–S–K, indeks / współczynnik / nawias, grupy wieloatomowe, **+ masa cząsteczkowa, stosunek masowy, skład procentowy, prawo stałości składu** | E8 | ●○○ |
| F13 | Wzory elektronowe (Lewis) | wzory kropkowe i kreskowe cząsteczek (E8), jonów (LO) | E8+LO | ●○○ |
| F14 | Geometria cząsteczek (VSEPR) | domeny, geometria elektronowa i cząsteczkowa, kąty | LO | ●○○ |
| F15 | Polarność i oddziaływania | E8: polarność wiązania, woda jako rozpuszczalnik, „podobne rozpuszcza podobne”; LO: polarność cząsteczki, oddziaływania międzycząsteczkowe | E8+LO | ◐○○ |

### Faza D — Jak opisujemy przemianę?

| kod | lekcja | zakres | poziom | stan |
|---|---|---|---|---|
| F16 | Od obserwacji do modelu reakcji | objawy reakcji, oddzielenie objawu od wniosku, model słowny | E8 | ●○○ |
| F17 | Równania reakcji | współczynniki, typy (synteza, analiza, wymiana), warunki, **prawo zachowania masy** | E8+LO | ●○○ |

### Faza E — Integracja

| kod | lekcja | zakres | poziom | stan |
|---|---|---|---|---|
| F18 | Dossier substancji | pełny profil substancji: wzór, wiązanie, struktura, polarność, właściwości | E8+LO | ◐○○ |
| F19 | Dossier reakcji | substraty, warunki, obserwacje, energia, BHP, równanie | E8+LO | ◐○○ |
| F20 | Klinika błędów fundamentów | błędy przekrojowe łączące kilka lekcji i procedura naprawy | E8+LO | ◐○○ |
| F21 | Zadania transferowe i diagnostyka | cały blok F w nowym problemie bez wskazania metody | E8+LO | ◐○○ |

**Zmiany w F i dlaczego**
- F12 przejmuje masę cząsteczkową, stosunek masowy i skład procentowy — są w E8, a w v0.1 nie miały właściciela (mol zostaje w R04, bo to LO).
- F17 = właściciel prawa zachowania masy, F12 = prawa stałości składu.
- F10, F15 do rozbudowy (cienkie w kanonie); F15 dostaje sekcję E8 jako mostek do R01.
- F18–F21 zostają krótkie — to lekcje integrujące; do uzupełnienia o zadania.
- Ścieżka E8: F07 + F08 jako jedna jednostka czasu, F14 pomijane (LO).

---

## 3. N — Chemia nieorganiczna (8 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| N01 | Powietrze i gazy | skład powietrza, tlen, azot, wodór, CO₂, gazy szlachetne, otrzymywanie i wykrywanie, zanieczyszczenia | E8 | ○○○ | nowa |
| N02 | Tlenki | budowa, nazwy, otrzymywanie, tlenki kwasowe / zasadowe / obojętne | E8+LO | ●●● | N01 |
| N03 | Wodorotlenki i zasady | budowa, otrzymywanie, właściwości, dysocjacja (E8), wskaźniki | E8+LO | ●●● | N02 |
| N04 | Kwasy | tlenowe i beztlenowe, otrzymywanie, właściwości, dysocjacja, pH (E8), **metal + kwas** | E8+LO | ●●● | N03 |
| N05 | Sole | budowa, nazwy, metody otrzymywania, rozpuszczalność, strącanie (E8) | E8+LO | ●●● | N04 |
| N06 | Wodorki | E8: wodór i jego związki proste; LO: systematyka wodorków | E8+LO | ●●● | N05 |
| N07 | Systematyka nieorganiczna | klasyfikacja wszystkich klas, wzory → nazwy → klasa | E8+LO | ○○○ | N06 |
| N08 | Mapa przemian „co powstanie?” | genetyka związków: pierwiastek → tlenek → wodorotlenek / kwas → sól; moduł interaktywny dostępny z N02–N07 | E8+LO | ○○○ | N07 |

**Dlaczego:** dział „Powietrze i inne gazy” to osobny dział podstawy E8, a w v0.1 nie miał żadnej lekcji — trafia na początek N, bo tlen i wodór są potrzebne do tlenków i wodorków. N08 nie jest „tylko ostatnią lekcją”: jej mapa jest dostępna z każdej lekcji N. Metal + kwas ma właściciela w N04 (E8), szereg aktywności w X04 (LO).

---

## 4. R — Roztwory i stechiometria (9 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| R01 | Woda i roztwory | woda jako rozpuszczalnik, roztwór / zawiesina / koloid, rozpuszczanie | E8 | ○○○ | R01 |
| R02 | Rozpuszczalność | krzywe rozpuszczalności, roztwór nasycony i nienasycony, krystalizacja | E8 | ○○○ | R02 |
| R03 | Stężenie procentowe | obliczenia, rozcieńczanie i zatężanie, mieszanie roztworów | E8+LO | ○○○ | R03 |
| R04 | Mol i masa molowa | liczba Avogadra, przeliczenia masa ↔ mol ↔ liczba cząstek | LO | ○○○ | R05 |
| R05 | Stężenie molowe | obliczenia, przeliczanie Cp ↔ Cm | LO | ○○○ | R04 |
| R06 | Gazy: objętość molowa | objętość molowa w warunkach normalnych, równanie Clapeyrona | LO | ○○○ | nowa |
| R07 | Stechiometria | obliczenia z równań: masa, mole, objętość | LO | ○○○ | R06 |
| R08 | Reagent ograniczający | nadmiar i niedomiar, skład mieszaniny poreakcyjnej | LO | ○○○ | R07 |
| R09 | Wydajność reakcji | wydajność, straty, zanieczyszczenia substratów | LO | ○○○ | R08 |

**Dlaczego:** stężenie molowe wymaga mola, więc mol idzie pierwszy (v0.1 miało odwrotnie). Gazy dostają lekcję, bo stechiometria z objętością gazu była bez właściciela.

---

## 5. J — Chemia jonowa (12 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| J01 | Dysocjacja elektrolityczna | elektrolity mocne i słabe, równania dysocjacji, stopień dysocjacji (LO); OWNER pełnej dysocjacji | E8+LO | ○○○ | J01 |
| J02 | pH i odczyn | skala pH, wskaźniki, obliczenia pH (LO) | E8+LO | ○○○ | J02 |
| J03 | Reakcje jonowe | zapis cząsteczkowy, jonowy pełny i skrócony, zobojętnianie | E8+LO | ○○○ | J03 |
| J04 | Strącanie osadów | tabela rozpuszczalności, przewidywanie osadu | E8+LO | ○○○ | J04 |
| J05 | Amfoteryczność | tlenki i wodorotlenki amfoteryczne, reakcje z kwasem i zasadą | LO | ○○○ | J05 |
| J06 | Równowagi kwasowo-zasadowe | teoria Brønsteda, pary sprzężone — opis jakościowy | LO | ○○○ | J06 |
| J07 | Ka, Kb i Kw | stałe dysocjacji, iloczyn jonowy wody — opis ilościowy | LO | ○○○ | J09 |
| J08 | Hydroliza soli | odczyn roztworów soli, przewidywanie i obliczenia | LO | ○○○ | J07 |
| J09 | Bufory | działanie, skład, pH buforu | LO | ○○○ | J08 |
| J10 | Iloczyn rozpuszczalności Ksp | obliczenia rozpuszczalności, warunek strącania | LO | ○○○ | J10 |
| J11 | Identyfikacja jonów | analiza jakościowa, reakcje charakterystyczne | E8+LO | ○○○ | J11 |
| J12 | Miareczkowanie | procedura, krzywe, obliczenia analizy ilościowej | LO | ○○○ | J12 |

**Dlaczego:** stałe Ka/Kb/Kw są potrzebne do hydrolizy i buforów, więc idą przed nimi. J06 = jakościowo, J07 = ilościowo (granica zapisana, żeby nie dublować). W E8 J01–J04 wchodzą jako sekcje E8 lekcji N03–N05; pełne lekcje J są ich właścicielami.

---

## 6. O — Chemia organiczna (25 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| O01 | Język chemii organicznej | węgiel w związkach, wzory strukturalne i półstrukturalne, szereg homologiczny, **podstawy nazewnictwa** | E8+LO | ○○○ | O01 + część O20 |
| O02 | Alkany | budowa, nazwy, właściwości, reakcja podstawienia | E8+LO | ○○○ | O02 |
| O03 | Izomeria | izomeria łańcuchowa (od alkanów), położenia, geometryczna i optyczna (LO) | E8+LO | ○○○ | O06 |
| O04 | Alkeny | wiązanie podwójne, addycja, polimeryzacja (wstęp) | E8+LO | ○○○ | O03 |
| O05 | Alkiny | wiązanie potrójne, etyn, właściwości | E8+LO | ○○○ | O04 |
| O06 | Spalanie węglowodorów | spalanie całkowite i niecałkowite, paliwa, wykrywanie produktów | E8 | ○○○ | O07 |
| O07 | Areny | benzen, aromatyczność, substytucja | LO | ○○○ | O05 |
| O08 | Alkohole | jedno- i wielowodorotlenowe, właściwości, utlenianie (LO) | E8+LO | ○○○ | O08 |
| O09 | Fenole | budowa, kwasowość, porównanie z alkoholami | LO | ○○○ | nowa |
| O10 | Aldehydy i ketony | grupa karbonylowa, próby Tollensa i Trommera | LO | ○○○ | nowa |
| O11 | Kwasy karboksylowe | budowa, właściwości, kwasy tłuszczowe, reakcje | E8+LO | ○○○ | O09 |
| O12 | Estry | estryfikacja, hydroliza, zastosowania | E8+LO | ○○○ | O10 |
| O13 | Tłuszcze, mydła i detergenty | budowa tłuszczów, utwardzanie, zmydlanie, działanie mydła i detergentów | E8+LO | ○○○ | O11 + nowe |
| O14 | Aminy i amidy | budowa, zasadowość, mocznik | LO | ○○○ | nowa |
| O15 | Cukry — monosacharydy | glukoza, fruktoza, budowa i wykrywanie | E8+LO | ○○○ | O12 |
| O16 | Cukry — disacharydy | sacharoza, laktoza, maltoza, hydroliza | E8+LO | ○○○ | O13 |
| O17 | Cukry — polisacharydy | skrobia, celuloza, wykrywanie skrobi | E8+LO | ○○○ | O14 |
| O18 | Aminokwasy | budowa, amfoteryczność, wiązanie peptydowe | E8+LO | ○○○ | O15 |
| O19 | Białka — struktura | struktury I–IV rzędowe, denaturacja i koagulacja | E8+LO | ○○○ | O16 |
| O20 | Białka — reakcje charakterystyczne | ksantoproteinowa, biuretowa | E8+LO | ○○○ | O17 |
| O21 | Polimery i tworzywa | polimeryzacja i polikondensacja, tworzywa, recykling | E8+LO | ○○○ | nowa |
| O22 | Witaminy i sole mineralne | REF do biologii (właściciel w BIO), tu tylko aspekt chemiczny | E8 | ○○○ | O18 |
| O23 | Metabolizm | REF do biologii, tu tylko reakcje i energia | LO | ○○○ | O19 |
| O24 | Nazewnictwo — procedura zbiorcza | nazwy wszystkich klas, grupy funkcyjne, priorytety | LO | ○○○ | O20 |
| O25 | Mechanizmy reakcji organicznych | przepływ elektronów, substytucja, addycja, eliminacja | LO | ○○○ | O21 |

**Dlaczego:**
- Nazewnictwo jako **warstwa**: podstawy w O01, każda klasa związków ma swoją sekcję nazw, zbiorcza procedura (O24) na końcu LO.
- Izomeria zaraz po alkanach — izomeria łańcuchowa pojawia się już tam.
- Spalanie po alkinach (E8), areny po nim (LO) — ścieżka E8 przechodzi O01–O06 bez przerw.
- Grupy funkcyjne w kolejności rosnącego utlenienia: alkohole → (fenole) → aldehydy/ketony → kwasy → estry; aminy przed aminokwasami.
- Dopisane braki LO: fenole, aldehydy i ketony, aminy i amidy, polimery. Mydła i detergenty dołączone do tłuszczów (do weryfikacji, czy są w E8 po 2024).
- Witaminy i metabolizm: właścicielem jest biologia — tu tylko odwołanie, bez pisania dwa razy.

---

## 7. X — Redoks (9 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| X01 | Reakcje redoks | rozpoznanie redoks po zmianie stopni utlenienia (definicja w F09 — tu ściąga), utlenianie, redukcja, utleniacz, reduktor | LO | ○○○ | X01 + X02 |
| X02 | Typowe utleniacze i reduktory | katalog: KMnO₄, K₂Cr₂O₇, H₂O₂, HNO₃, metale, węgiel, wodór | LO | ○○○ | X05 |
| X03 | Bilans elektronowy | dobieranie współczynników metodą bilansu | LO | ○○○ | X03 |
| X04 | Szereg aktywności metali | wypieranie metali i wodoru, przewidywanie reakcji | E8+LO | ○○○ | X04 |
| X05 | Redoks jonowy | bilans w formie jonowej | LO | ○○○ | X06 |
| X06 | Redoks w środowisku kwasowym | metoda połówkowa, H⁺ i H₂O | LO | ○○○ | X07 |
| X07 | Redoks w środowisku zasadowym | metoda połówkowa, OH⁻ i H₂O | LO | ○○○ | X08 |
| X08 | Dysproporcjonowanie i synproporcjonowanie | rozpoznawanie i bilans | LO | ○○○ | X09 |
| X09 | Redoks przekrojowy | zadania łączące całą grupę X | LO | ○○○ | X10 |

**Dlaczego:** stary X01 „Stopień utlenienia” dublował F09 — definicja zostaje tylko w F09, a X01 łączy rozpoznawanie redoks z dawnym X02. Stary X05 nakładał się na X02, więc dostał wąską rolę katalogu.

---

## 8. E — Elektrochemia (6 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| E01 | Ogniwo galwaniczne | budowa, schemat, procesy na elektrodach | LO | ○○○ | E01 |
| E02 | Potencjały elektrodowe | szereg elektrochemiczny, elektroda wodorowa | LO | ○○○ | E02 |
| E03 | SEM | obliczanie SEM, przewidywanie samorzutności | LO | ○○○ | E03 |
| E04 | Elektroliza | procesy na elektrodach, prawa Faradaya | LO | ○○○ | E04 |
| E05 | Korozja | mechanizm, ochrona przed korozją | E8+LO | ○○○ | E05 |
| E06 | Źródła energii i akumulatory | baterie, akumulatory, ogniwa paliwowe | LO | ○○○ | E06 |

**Dlaczego:** bez zmian numeracji. E01 wymaga X03 + J01 + R05 — zapisane w zależnościach, nie w kolejności grup.

---

## 9. K — Energetyka, kinetyka i równowaga (11 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| K01 | Energia reakcji | reakcje egzo- i endoenergetyczne, wykres energetyczny — jakościowo | E8+LO | ○○○ | K05 |
| K02 | Entalpia | ΔH, prawo Hessa, entalpie tworzenia — ilościowo | LO | ○○○ | K06 |
| K03 | Kalorymetria i przemiany fazowe | ciepło właściwe, pomiar ciepła reakcji, przemiany fazowe | LO | ○○○ | K10 |
| K04 | Szybkość reakcji | definicja, pomiar, wykresy | LO | ○○○ | K01 |
| K05 | Czynniki wpływające na szybkość | stężenie, temperatura, rozdrobnienie | E8+LO | ○○○ | K02 |
| K06 | Zderzenia i energia aktywacji | teoria zderzeń, wykres z energią aktywacji | LO | ○○○ | K03 |
| K07 | Kataliza | katalizatory, enzymy, inhibitory | E8+LO | ○○○ | K04 |
| K08 | Równowaga dynamiczna | reakcje odwracalne, stan równowagi | LO | ○○○ | K07 |
| K09 | Stała równowagi | wyrażenie i obliczenia K | LO | ○○○ | K08 |
| K10 | Reguła Le Chateliera | przesunięcie równowagi | LO | ○○○ | K09 |
| K11 | Równowaga ilościowa | zadania z K, stopień przereagowania | LO | ○○○ | K11 |

**Dlaczego:** energia idzie przed szybkością — energia aktywacji (K06) wymaga wykresu energetycznego (K01). Stare K05/K06 nakładały się: teraz K01 = jakościowo (E8), K02 = ilościowo (LO). Kalorymetria przeniesiona z grupy równowag do grupy energii.

---

## 10. A — Chemia jądrowa (6 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| A01 | Jądro atomowe | siły jądrowe, stabilność jąder (skład atomu i izotopy — REF do F04, F05) | LO | ○○○ | A01 |
| A02 | Radioaktywność | rodzaje promieniowania, właściwości | E8+LO | ○○○ | A02 |
| A03 | Przemiany jądrowe | α, β, γ, zapis równań jądrowych, szeregi | LO | ○○○ | A03 |
| A04 | Okres półtrwania i aktywność | obliczenia, datowanie | LO | ○○○ | A04 |
| A05 | Energia wiązania jądra | deficyt masy, E = mc², rozszczepienie i synteza | LO | ○○○ | A06 |
| A06 | Zastosowania i BHP | medycyna, energetyka, datowanie, ochrona radiologiczna | E8+LO | ○○○ | A05 |

**Dlaczego:** zastosowania (energetyka jądrowa) wymagają energii wiązania, więc idą na koniec. Izotopy uczone w F05 — tu tylko odwołanie.

---

## 11. P — Układ okresowy, pogłębienie (6 lekcji)

| kod | lekcja | zakres | poziom | stan | było |
|---|---|---|---|---|---|
| P01 | Blok s | litowce i berylowce: właściwości, związki, reakcje z wodą | E8+LO | ○○○ | P01 |
| P02 | Blok p | borowce do helowców: przegląd, niemetale i metale bloku p | LO | ○○○ | P02 |
| P03 | Blok d i metale przejściowe | konfiguracje, stopnie utlenienia, związki barwne, kompleksy (wstęp) | LO | ○○○ | P03 + P04 |
| P04 | Charakterystyka grup | porównanie grup, typowe właściwości | LO | ○○○ | P05 |
| P05 | Związki charakterystyczne pierwiastków | najważniejsze związki każdej grupy i ich zastosowania | LO | ○○○ | P06 |
| P06 | Trend → właściwość → reaktywność | łańcuch przyczynowy: położenie → budowa → właściwości → reakcje (trendy w F06 — tu przewidywanie) | LO | ○○○ | P07 + P08 |

**Dlaczego:** „blok d” i „metale przejściowe” to prawie ten sam temat — scalone. Stare P07 i P08 opisywały jedno (trend jako łańcuch przyczynowy) — scalone. F06 = jak czytać układ (OWNER trendów), P = jak z niego przewidywać.

---

## 12. Uzupełnienia (poza numeracją grup)

| kod | co | stan |
|---|---|---|
| FIZ-01 | Elektrostatyka (fizyka, pomost do F04 i F11) | ●●● |
| LAB01–24 | Zbiór doświadczeń — przypisane do lekcji przez `wymaga` | ○○○ |
| REV01–07 | Powtórki: E7, E8, LO podst., LO rozsz., zadania przekrojowe, pomost akademicki, mapa kompetencji | ○○○ |

---

## 13. Mapa kodów v0.1 → v0.2

Tylko kody, które się zmieniły (pozostałe bez zmian).

| v0.1 | v0.2 | | v0.1 | v0.2 |
|---|---|---|---|---|
| N01 Tlenki | N02 | | O13 | O16 |
| N02 Wodorotlenki | N03 | | O14 | O17 |
| N03 Kwasy | N04 | | O15 | O18 |
| N04 Sole | N05 | | O16 | O19 |
| N05 Wodorki | N06 | | O17 | O20 |
| N06 | N07 | | O18 | O22 |
| N07 | N08 | | O19 | O23 |
| R04 | R05 | | O20 | O24 (+ podstawy do O01) |
| R05 | R04 | | O21 | O25 |
| R06–R08 | R07–R09 | | X01 + X02 | X01 |
| J07 | J08 | | X05 | X02 |
| J08 | J09 | | X06–X10 | X05–X09 |
| J09 | J07 | | K05, K06, K10 | K01, K02, K03 |
| O03 | O04 | | K01–K04 | K04–K07 |
| O04 | O05 | | K07–K09 | K08–K10 |
| O05 | O07 | | A05 | A06 |
| O06 | O03 | | A06 | A05 |
| O07 | O06 | | P03 + P04 | P03 |
| O09 | O11 | | P05, P06 | P04, P05 |
| O10 | O12 | | P07 + P08 | P06 |
| O11 | O13 | | | |
| O12 | O15 | | | |

**Gotowe pliki do przemianowania po zatwierdzeniu:** `N01_tlenki.md` → N02, `N02_wodorotlenki.md` → N03, `N03_kwasy.md` → N04, `N04_sole.md` → N05, `N05_wodorki.md` → N06 (+ kody w frontmatter i HTML). Robi się to jednym skryptem, dopiero po zatwierdzeniu v0.2.

---

## 14. Decyzje przyjęte domyślnie w v0.2 (do potwierdzenia)

| sprawa | przyjęte | alternatywa |
|---|---|---|
| F10 cienkie | zostaje osobno, do rozbudowy | scalić z F11 |
| Powietrze i gazy | nowa lekcja N01 | sekcje w tlenkach i wodorkach |
| X02 vs X05 | scalone z X01 / X05 → katalog X02 | dwie pełne lekcje |
| K05 vs K06 | rozdzielone poziomem (K01 E8, K02 LO) | scalić w jedną |
| Mydła i detergenty | sekcja w O13 | osobna lekcja |
| Przenumerowanie N | tak (N01 = Powietrze) | dodać powietrze jako N00, stare kody N bez zmian |

Ostatnia decyzja jest najważniejsza praktycznie: przenumerowanie N zmienia kody pięciu gotowych lekcji. Wariant „N00” jest tańszy, ale mniej logiczny.

## 15. Następne kroki

1. Zatwierdzenie v0.2 (sekcja 14).
2. Weryfikacja kolumny „poziom” z podstawą programową E8 po zmianach 2024.
3. Skrypt przemianowania gotowych lekcji N + podmiana `PLAN_LEKCJI.md` na ten kanon.
4. Próba ścieżki E8 na F01 → N03 (wodorotlenki) wg `PLAN_SCIEZKI_DYDAKTYCZNE.md`.
5. Kanon v1.0 → od tej chwili numeracja stała.
