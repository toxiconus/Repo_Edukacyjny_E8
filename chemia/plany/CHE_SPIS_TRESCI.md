---
kod: CHE-SPIS
wersja: v0.3 (plan roboczy)
data: 2026-10-08
zrodlo: wygenerowane z che/narzedzia/kanon_dane.py (edytuj dane, nie ten plik) — `python3 che/narzedzia/spis_tresci.py`
zastepuje: CHE_KANON_v0.2.md, CHE_SPIS_LEKCJI.md, AUDYT_SPISU_v0.2.md (usunięte, w historii git), PLAN_LEKCJI.md
uzupelnia: PLAN_SCIEZKI_DYDAKTYCZNE.md
---

# CHE — spis treści kursu chemii: wszystkie lekcje, zakresy, co mamy

## 0. Jak czytać

- **Kanon** = biblioteka całej chemii. Kod (np. N03) to stałe miejsce lekcji w bibliotece, **nie** kolejność nauki. Kolejność dla klasy 7, klasy 8 i LO wyznaczają ścieżki (`PLAN_SCIEZKI_DYDAKTYCZNE.md`).
- Numeracja jest logiczna **wewnątrz grupy**: lekcja korzysta z wcześniejszych lekcji tej grupy i z grup wskazanych w `wymaga`.
- **Poziom:** `E8` szkoła podstawowa · `E8+LO` część E8 + rozszerzenie LO w sekcjach z oznaczeniem poziomu · `LO` tylko liceum. Przydział E8 do weryfikacji z podstawą programową po zmianach 2024.
- **Stan:** ●●● gotowa lekcja (md w szablonie + HTML) · ●●○ obszerny materiał w osobnym md · ◐○○ materiał cienki · ●○○ materiał wspólny z innymi lekcjami (stara lekcja zbiorcza) · ○○○ brak materiału.
- **Mamy:** pliki materiału w `chemia/lekcje_md/<grupa>/` — jeden plik na lekcję (blok F) albo plik zbiorczy starej lekcji v1.1. Na końcu każdego pliku F jest sekcja „MATERIAŁ Z ARCHIWUM — do redakcji” z treściami ze starszych wersji, których nie było w głównej.
- **Było:** kod w spisie v0.1 (sprzed przenumerowania).

**Bilans:** 113 lekcji w 10 grupach. ●●● 9 · ●●○ 11 · ◐○○ 6 · ●○○ 31 · ○○○ 56.

## 1. Zasady kanonu

1. **Jeden właściciel pojęcia (OWNER).** Pojęcie uczy od zera jedna lekcja; inne je przypominają ściągą (REF), pogłębiają (EXPAND) albo używają (APPLY). Przykład: stopień utlenienia — OWNER F09, REF N02, EXPAND X06–X07, APPLY X03.
2. **Poziomy w lekcji, nie osobne lekcje.** Ścieżka E8 pokazuje tylko sekcje E8.
3. **Grupy się przecinają.** J i R wchodzą do lekcji N jako sekcje E8; pełne lekcje J/R są właścicielami.
4. **Bez kasowania treści.** Scalenie = treść obu lekcji w jednej; stary kod w mapie (sekcja 13).
5. **Numeracja stabilna od v1.0.** Do zatwierdzenia v1.0 wolno przenumerowywać.

### Kolejność grup

| nr | grupa | lekcji | dlaczego tu |
|---|---|---|---|
| 01 | F Fundamenty | 21 | język, atom, wiązanie, równanie — potrzebne wszędzie |
| 02 | N Chemia nieorganiczna | 8 | pierwsze klasy związków; oparta tylko na F |
| 03 | R Roztwory i stechiometria | 9 | ilościowy opis; potrzebny J, X, E, K |
| 04 | J Chemia jonowa | 12 | wymaga N (substancje) i R (stężenia) |
| 05 | O Chemia organiczna | 25 | wymaga F (wiązania, wzory) i częściowo J (kwasowość) |
| 06 | X Redoks | 9 | wymaga F09, N, J |
| 07 | E Elektrochemia | 6 | wymaga X + J + R |
| 08 | K Energetyka, kinetyka i równowaga | 11 | wymaga R; J07–J10 korzystają z K09 (stała równowagi) |
| 09 | A Chemia jądrowa | 6 | rozwija F04–F05; niezależna od reszty |
| 10 | P Układ okresowy — pogłębienie | 6 | spina wszystko: przewidywanie właściwości z położenia |

## 2. Spis skrócony

**F Fundamenty:** ●●● F01 Jak myśli chemik · ●●● F02 Materia i substancje · ●●● F03 Właściwości i rozdzielanie mieszanin · ●●● F04 Atom · ●●○ F05 Izotopy, jony i masa atomowa · ●●○ F06 Układ okresowy · ●●○ F07 Konfiguracja elektronowa · ●●○ F08 Konfiguracja ↔ układ okresowy · ●●○ F09 Wartościowość, ładunek i stopień utlenienia · ◐○○ F10 Dlaczego atomy się łączą · ●●○ F11 Wiązania jonowe, kowalencyjne i metaliczne · ●●○ F12 Wzory chemiczne · ●●○ F13 Wzory elektronowe (Lewis) · ●●○ F14 Geometria cząsteczek (VSEPR) · ◐○○ F15 Polarność i oddziaływania · ●●○ F16 Od obserwacji do modelu reakcji · ●●○ F17 Równania reakcji · ◐○○ F18 Dossier substancji · ◐○○ F19 Dossier reakcji · ◐○○ F20 Klinika błędów fundamentów · ◐○○ F21 Zadania transferowe i diagnostyka

**N Chemia nieorganiczna:** ○○○ N01 Powietrze i gazy · ●●● N02 Tlenki · ●●● N03 Wodorotlenki i zasady · ●●● N04 Kwasy · ●●● N05 Sole · ●●● N06 Wodorki · ○○○ N07 Systematyka nieorganiczna · ○○○ N08 Mapa przemian „co powstanie?”

**R Roztwory i stechiometria:** ○○○ R01 Woda i roztwory · ○○○ R02 Rozpuszczalność · ●○○ R03 Stężenie procentowe · ●○○ R04 Mol i masa molowa · ●○○ R05 Stężenie molowe · ○○○ R06 Gazy: objętość molowa · ●○○ R07 Stechiometria · ●○○ R08 Reagent ograniczający · ●○○ R09 Wydajność reakcji

**J Chemia jonowa:** ○○○ J01 Dysocjacja elektrolityczna · ○○○ J02 pH i odczyn · ○○○ J03 Reakcje jonowe · ○○○ J04 Strącanie osadów · ○○○ J05 Amfoteryczność · ○○○ J06 Równowagi kwasowo-zasadowe · ○○○ J07 Ka, Kb i Kw · ○○○ J08 Hydroliza soli · ○○○ J09 Bufory · ○○○ J10 Iloczyn rozpuszczalności Ksp · ○○○ J11 Identyfikacja jonów · ○○○ J12 Miareczkowanie

**O Chemia organiczna:** ●○○ O01 Język chemii organicznej · ●○○ O02 Alkany · ●○○ O03 Izomeria · ●○○ O04 Alkeny · ●○○ O05 Alkiny · ●○○ O06 Spalanie węglowodorów · ●○○ O07 Areny · ○○○ O08 Alkohole · ○○○ O09 Fenole · ○○○ O10 Aldehydy i ketony · ○○○ O11 Kwasy karboksylowe · ○○○ O12 Estry · ●○○ O13 Tłuszcze, mydła i detergenty · ○○○ O14 Aminy i amidy · ●○○ O15 Cukry — monosacharydy · ●○○ O16 Cukry — disacharydy · ●○○ O17 Cukry — polisacharydy · ●○○ O18 Aminokwasy · ●○○ O19 Białka — struktura · ●○○ O20 Białka — reakcje charakterystyczne · ○○○ O21 Polimery i tworzywa · ●○○ O22 Witaminy i sole mineralne · ●○○ O23 Metabolizm · ○○○ O24 Nazewnictwo — procedura zbiorcza · ○○○ O25 Mechanizmy reakcji organicznych

**X Redoks:** ●○○ X01 Reakcje redoks · ●○○ X02 Typowe utleniacze i reduktory · ●○○ X03 Bilans elektronowy · ●○○ X04 Szereg aktywności metali · ●○○ X05 Redoks jonowy · ●○○ X06 Redoks w środowisku kwasowym · ●○○ X07 Redoks w środowisku zasadowym · ●○○ X08 Dysproporcjonowanie i synproporcjonowanie · ●○○ X09 Redoks przekrojowy

**E Elektrochemia:** ○○○ E01 Ogniwo galwaniczne · ○○○ E02 Potencjały elektrodowe · ○○○ E03 SEM · ○○○ E04 Elektroliza · ○○○ E05 Korozja · ○○○ E06 Źródła energii i akumulatory

**K Energetyka, kinetyka i równowaga:** ○○○ K01 Energia reakcji · ○○○ K02 Entalpia · ○○○ K03 Kalorymetria i przemiany fazowe · ○○○ K04 Szybkość reakcji · ○○○ K05 Czynniki wpływające na szybkość · ○○○ K06 Zderzenia i energia aktywacji · ○○○ K07 Kataliza · ○○○ K08 Równowaga dynamiczna · ○○○ K09 Stała równowagi · ○○○ K10 Reguła Le Chateliera · ○○○ K11 Równowaga ilościowa

**A Chemia jądrowa:** ○○○ A01 Jądro atomowe · ○○○ A02 Radioaktywność · ○○○ A03 Przemiany jądrowe · ○○○ A04 Okres półtrwania i aktywność · ○○○ A05 Energia wiązania jądra · ○○○ A06 Zastosowania i BHP

**P Układ okresowy — pogłębienie:** ○○○ P01 Blok s · ○○○ P02 Blok p · ○○○ P03 Blok d i metale przejściowe · ○○○ P04 Charakterystyka grup · ○○○ P05 Związki charakterystyczne pierwiastków · ○○○ P06 Trend → właściwość → reaktywność

---

## 3. F — Fundamenty

_język, atom, wiązanie, równanie — potrzebne wszędzie_

### Faza A — Co badamy?

#### F01 — Jak myśli chemik

```yaml
kod: F01
poziom: E8
wymaga: "—"
poglebia: "F02–F03; F16–F17"
stan: "●●●"
```

**Cel:** Uczeń odróżnia obserwację od wniosku, model od rzeczywistości, zna cztery poziomy opisu i pięć pytań chemika.

**Co ma być:**
- obserwacja, wniosek, hipoteza, model
- poziomy makro / cząsteczkowy / symboliczny / ilościowy
- pięć pytań chemika
- zmiana fizyczna vs reakcja (wstęp)
- metoda badawcza problem → hipoteza → plan → obserwacja → wniosek
- minimum BHP i piktogramy
- pracownia GFX (6 zlewek)

**Mamy:** gotowa lekcja `che/md/F01_jak_mysli_chemik.md` (42 KB) → HTML przez `md2html.py`; materiał `lekcje_md/F/CHE.01.F01.jak_mysli_chemik.md` (83 KB)

#### F02 — Materia i substancje

```yaml
kod: F02
poziom: E8
wymaga: "F01"
poglebia: "F03; F04; F12"
stan: "●●●"
```

**Cel:** Uczeń klasyfikuje próbkę: substancja czysta (pierwiastek, związek) czy mieszanina (jednorodna, niejednorodna) i uzasadnia.

**Co ma być:**
- materia, substancja, pierwiastek, związek, mieszanina
- jednorodność i fazy
- drzewo klasyfikacji
- metale i niemetale (wstęp)

**Mamy:** gotowa lekcja `che/md/F02_materia_i_substancje.md` (32 KB) → HTML przez `md2html.py`; materiał `lekcje_md/F/CHE.01.F02.materia_i_substancje.md` (29 KB)

#### F03 — Właściwości i rozdzielanie mieszanin

```yaml
kod: F03
poziom: E8
wymaga: "F01; F02"
poglebia: "F16–F17; R01–R02"
stan: "●●●"
```

**Cel:** Uczeń rozróżnia właściwości fizyczne i chemiczne, zjawisko i reakcję oraz dobiera metodę rozdzielania do różnicy właściwości.

**Co ma być:**
- właściwości fizyczne i chemiczne
- stany skupienia i przemiany fazowe
- zjawisko vs reakcja
- sączenie, dekantacja, odparowanie, krystalizacja, destylacja, chromatografia, magnes
- dobór metody

**Mamy:** gotowa lekcja `che/md/F03_wlasciwosci_i_rozdzielanie.md` (33 KB) → HTML przez `md2html.py`; materiał `lekcje_md/F/CHE.01.F03.wlasciwosci_i_rozdzielanie_mieszanin.md` (42 KB)

### Faza B — Z czego to wynika?

#### F04 — Atom

```yaml
kod: F04
poziom: E8
wymaga: "F01; F02"
poglebia: "F05; F06–F09"
stan: "●●●"
```

**Cel:** Uczeń oblicza liczbę protonów, neutronów i elektronów w atomie i jonie oraz rozróżnia Z i A.

**Co ma być:**
- budowa atomu
- Z, A, N
- zapis nuklidu
- atom obojętny vs jon
- modele atomu (historia skrócona)

**Mamy:** gotowa lekcja `che/md/F04_atom.md` (24 KB) → HTML przez `md2html.py`; materiał `lekcje_md/F/CHE.01.F04.atom.md` (41 KB)

#### F05 — Izotopy, jony i masa atomowa

```yaml
kod: F05
poziom: E8+LO
wymaga: "F04"
poglebia: "F06–F09; A01–A06"
stan: "●●○"
```

**Cel:** Uczeń rozróżnia izotop, jon i inny pierwiastek oraz liczy masę atomową jako średnią ważoną.

**Co ma być:**
- izotopy i nuklidy
- kationy i aniony
- masa atomowa i jednostka u
- procedura średniej izotopowej
- izotop i jon jednocześnie (np. ³⁵Cl⁻)

**Mamy:** materiał `lekcje_md/F/CHE.01.F05.izotopy_jony_i_masa_atomowa.md` (41 KB)

#### F06 — Układ okresowy

```yaml
kod: F06
poziom: E8+LO
wymaga: "F04; F05"
poglebia: "F08–F11; P01–P06"
stan: "●●○"
```

**Cel:** Uczeń czyta położenie pierwiastka, określa elektrony walencyjne i przewiduje trendy.

**Co ma być:**
- okres, grupa, blok
- rodziny (litowce, berylowce, fluorowce, helowce)
- elektrony walencyjne
- trendy: promień, elektroujemność, charakter metaliczny — każdy z „dlaczego”
- OWNER trendów

**Mamy:** materiał `lekcje_md/F/CHE.01.F06.uklad_okresowy.md` (32 KB)

#### F07 — Konfiguracja elektronowa

```yaml
kod: F07
poziom: E8+LO
wymaga: "F04; F06"
poglebia: "F08–F10; F13"
stan: "●●○"
```

**Cel:** E8: rozmieszczenie elektronów na powłokach. LO: konfiguracja podpowłokowa z regułami.

**Co ma być:**
- E8: powłoki K, L, M, N
- LO: podpowłoki, orbitale, reguła rozbudowy, Hund, Pauli, wyjątki Cr i Cu, konfiguracje jonów

**Mamy:** materiał `lekcje_md/F/CHE.01.F07.konfiguracja_elektronowa.md` (48 KB)

#### F08 — Konfiguracja ↔ układ okresowy

```yaml
kod: F08
poziom: E8+LO
wymaga: "F06; F07"
poglebia: "F09–F15"
stan: "●●○"
```

**Cel:** Uczeń przechodzi w obie strony między konfiguracją a położeniem w układzie.

**Co ma być:**
- okres z liczby powłok, grupa z elektronów walencyjnych, blok z podpowłoki
- ograniczenia uproszczeń
- w ścieżce E8 łączona z F07

**Mamy:** materiał `lekcje_md/F/CHE.01.F08.konfiguracja_uklad_okresowy.md` (51 KB)

#### F09 — Wartościowość, ładunek i stopień utlenienia

```yaml
kod: F09
poziom: E8+LO
wymaga: "F04; F05; F06; F08"
poglebia: "F12; F17; X01–X09"
stan: "●●○"
```

**Cel:** Uczeń rozróżnia trzy liczby, wie której używać do czego i oblicza stopień utlenienia.

**Co ma być:**
- wartościowość (E8), ładunek jonu, stopień utlenienia i jego reguły (OWNER)
- tabela typowych wartości
- pułapki mylenia trzech pojęć

**Mamy:** materiał `lekcje_md/F/CHE.01.F09.wartosciowosc_ladunek_i_stopien_utlenien.md` (103 KB)

### Faza C — Jak powstaje struktura?

#### F10 — Dlaczego atomy się łączą

```yaml
kod: F10
poziom: E8+LO
wymaga: "F06–F09"
poglebia: "F11; F13–F15"
stan: "◐○○"
```

**Cel:** Uczeń rozumie wiązanie jako przejście do stanu o niższej energii oraz sens i granice reguły oktetu.

**Co ma być:**
- trwałe konfiguracje (oktet, dublet)
- energia a wiązanie
- wyjątki od oktetu (LO)
- do rozbudowy — treść cienka

**Mamy:** materiał `lekcje_md/F/CHE.01.F10.dlaczego_atomy_sie_lacza.md` (14 KB)

#### F11 — Wiązania jonowe, kowalencyjne i metaliczne

```yaml
kod: F11
poziom: E8+LO
wymaga: "F06; F08; F09; F10"
poglebia: "F12–F15; P03–P06"
stan: "●●○"
```

**Cel:** Uczeń rozpoznaje typ wiązania (także kowalencyjne spolaryzowane) i przewiduje właściwości substancji.

**Co ma być:**
- wiązanie jonowe (sieć jonowa), kowalencyjne niespolaryzowane i spolaryzowane, metaliczne
- elektroujemność jako wskazówka, nie ostra granica
- typ wiązania → właściwości
- wiązanie koordynacyjne (LO)

**Mamy:** materiał `lekcje_md/F/CHE.01.F11.wiazania_jonowe_kowalencyjne_i_metaliczn.md` (60 KB)

#### F12 — Wzory chemiczne

```yaml
kod: F12
poziom: E8
wymaga: "F09; F11"
poglebia: "F13; F17; N02–N08"
stan: "●●○"
```

**Cel:** Uczeń poprawnie zapisuje i odczytuje wzory, liczy masę cząsteczkową i skład procentowy.

**Co ma być:**
- W–K–S–K
- indeks, współczynnik, nawias
- grupy wieloatomowe
- wzór sumaryczny i strukturalny
- masa cząsteczkowa
- stosunek masowy
- skład procentowy
- prawo stałości składu (OWNER)

**Mamy:** materiał `lekcje_md/F/CHE.01.F12.wzory_chemiczne.md` (125 KB)

#### F13 — Wzory elektronowe (Lewis)

```yaml
kod: F13
poziom: E8+LO
wymaga: "F11; F12"
poglebia: "F14; F15; F18"
stan: "●●○"
```

**Cel:** Uczeń rysuje wzory kropkowe i kreskowe cząsteczek (E8) oraz jonów (LO).

**Co ma być:**
- elektrony walencyjne w zapisie
- pary wiążące i wolne
- wiązania wielokrotne
- ładunek formalny i jony (LO)

**Mamy:** materiał `lekcje_md/F/CHE.01.F13.wzory_elektronowe_lewis.md` (30 KB)

#### F14 — Geometria cząsteczek (VSEPR)

```yaml
kod: F14
poziom: LO
wymaga: "F11; F12; F13"
poglebia: "F15; F18"
stan: "●●○"
```

**Cel:** Uczeń liczy domeny i przewiduje geometrię oraz kąty.

**Co ma być:**
- domeny elektronowe
- geometria elektronowa vs cząsteczkowa
- kąty
- wpływ wolnych par
- hybrydyzacja (wstęp, LO-R)

**Mamy:** materiał `lekcje_md/F/CHE.01.F14.geometria_czasteczek_vsepr.md` (61 KB)

#### F15 — Polarność i oddziaływania

```yaml
kod: F15
poziom: E8+LO
wymaga: "F11; F13; F14"
poglebia: "F18; R01–R03; J01–J02"
stan: "◐○○"
```

**Cel:** E8: polarność wiązania i „podobne rozpuszcza podobne”. LO: polarność cząsteczki z geometrii i oddziaływania.

**Co ma być:**
- E8: polarność wiązania z elektroujemności, woda jako rozpuszczalnik (mostek do R01)
- LO: moment dipolowy, wiązania wodorowe, siły van der Waalsa, wpływ na temperatury wrzenia
- do rozbudowy

**Mamy:** materiał `lekcje_md/F/CHE.01.F15.polarnosc_i_oddzialywania.md` (18 KB)

### Faza D — Jak opisujemy przemianę?

#### F16 — Od obserwacji do modelu reakcji

```yaml
kod: F16
poziom: E8
wymaga: "F01; F02; F03"
poglebia: "F17; F19"
stan: "●●○"
```

**Cel:** Uczeń zbiera objawy reakcji, oddziela je od wniosku i buduje słowny model reakcji.

**Co ma być:**
- objawy reakcji (gaz, osad, barwa, ciepło, światło)
- substraty i produkty
- zapis słowny
- reakcje egzo- i endoenergetyczne (wstęp)

**Mamy:** materiał `lekcje_md/F/CHE.01.F16.od_obserwacji_do_modelu_reakcji.md` (42 KB)

#### F17 — Równania reakcji

```yaml
kod: F17
poziom: E8+LO
wymaga: "F12; F16"
poglebia: "F19; R07; X01–X09"
stan: "●●○"
```

**Cel:** Uczeń dobiera współczynniki, rozpoznaje typ reakcji i zapisuje warunki.

**Co ma być:**
- prawo zachowania masy (OWNER)
- współczynniki
- synteza, analiza, wymiana
- zapis warunków
- bilans ładunku (LO)

**Mamy:** materiał `lekcje_md/F/CHE.01.F17.rownania_reakcji.md` (39 KB)

### Faza E — Integracja i samodzielność

#### F18 — Dossier substancji

```yaml
kod: F18
poziom: E8+LO
wymaga: "F02; F03; F06; F09; F11; F12"
poglebia: "F13–F15; N02–N08; R01–R03"
stan: "◐○○"
```

**Cel:** Uczeń tworzy pełny profil jednej substancji ze wszystkich warstw wiedzy.

**Co ma być:**
- wzór, typ wiązania, wzór elektronowy, geometria, polarność, właściwości, zastosowania, BHP
- karta rekordu substancji

**Mamy:** materiał `lekcje_md/F/CHE.01.F18.dossier_substancji.md` (10 KB)

#### F19 — Dossier reakcji

```yaml
kod: F19
poziom: E8+LO
wymaga: "F16; F17"
poglebia: "N02–N08; R07–R09; X01–X09; K01–K11"
stan: "◐○○"
```

**Cel:** Uczeń tworzy rekord reakcji od substratów i warunków po obserwacje, energię, BHP i równanie.

**Co ma być:**
- substraty, warunki, obserwacje, typ, energia, BHP, równanie
- karta rekordu reakcji

**Mamy:** materiał `lekcje_md/F/CHE.01.F19.dossier_reakcji.md` (9 KB)

#### F20 — Klinika błędów fundamentów

```yaml
kod: F20
poziom: E8+LO
wymaga: "zależnie od diagnozy F01–F19"
poglebia: "F21 i właściciele pojęć"
stan: "◐○○"
```

**Cel:** Uczeń diagnozuje błędy przekrojowe (łączące kilka lekcji) i stosuje procedurę naprawczą.

**Co ma być:**
- katalog błędów przekrojowych
- procedura: wykryj → nazwij → napraw model
- kliniki pojedynczych pojęć zostają w swoich lekcjach

**Mamy:** materiał `lekcje_md/F/CHE.01.F20.klinika_bledow_fundamentow.md` (9 KB)

#### F21 — Zadania transferowe i diagnostyka

```yaml
kod: F21
poziom: E8+LO
wymaga: "F01–F20 zależnie od problemu"
poglebia: "dalsze grupy kursu"
stan: "◐○○"
```

**Cel:** Uczeń łączy cały blok F w nowym problemie bez wskazania metody.

**Co ma być:**
- zadania transferowe
- test mistrzostwa bloku F
- zestawy interleavingu (przekrój, „dlaczego”)
- system powtórek po F03, F05, F07, F09

**Mamy:** materiał `lekcje_md/F/CHE.01.F21.zadania_transferowe_i_diagnostyka.md` (9 KB)

---

## 4. N — Chemia nieorganiczna

_pierwsze klasy związków; oparta tylko na F_

#### N01 — Powietrze i gazy

```yaml
kod: N01
poziom: E8
wymaga: "F02; F03; F16"
poglebia: "N02; N06; K07"
stan: "○○○"
bylo: "nowa"
```

**Cel:** Uczeń zna skład powietrza oraz otrzymywanie, właściwości i wykrywanie tlenu, wodoru i CO₂.

**Co ma być:**
- skład powietrza
- tlen, azot, wodór, CO₂, gazy szlachetne — otrzymywanie, właściwości, wykrywanie, zastosowania
- zanieczyszczenia powietrza, efekt cieplarniany, dziura ozonowa

**Mamy:** nic — do napisania

**Dlaczego tu:** cały dział IV podstawy E8 nie miał lekcji; tlen i wodór są potrzebne do tlenków i wodorków

#### N02 — Tlenki

```yaml
kod: N02
poziom: E8+LO
wymaga: "F09; F12; N01"
poglebia: "N03; N04; J05"
stan: "●●●"
bylo: "N01"
```

**Cel:** Uczeń zapisuje, nazywa i otrzymuje tlenki oraz klasyfikuje je wg charakteru chemicznego.

**Co ma być:**
- budowa i nazewnictwo
- otrzymywanie (spalanie, rozkład)
- tlenki kwasowe, zasadowe, obojętne, amfoteryczne (LO)
- reakcje z wodą

**Mamy:** gotowa lekcja `che/md/N01_tlenki.md` (119 KB) → HTML przez `md2html.py`; materiał `lekcje_md/N/CHE.02.N02.tlenki.md` (38 KB)

#### N03 — Wodorotlenki i zasady

```yaml
kod: N03
poziom: E8+LO
wymaga: "F09; F12; N02"
poglebia: "J01; J02; J05"
stan: "●●●"
bylo: "N02"
```

**Cel:** Uczeń zapisuje i otrzymuje wodorotlenki, odróżnia wodorotlenek od zasady i bada odczyn.

**Co ma być:**
- budowa i nazwy
- otrzymywanie (metal + woda, tlenek + woda)
- właściwości i zastosowania
- dysocjacja (E8)
- wskaźniki

**Mamy:** gotowa lekcja `che/md/N02_wodorotlenki.md` (125 KB) → HTML przez `md2html.py`; materiał `lekcje_md/N/CHE.02.N03.wodorotlenki.md` (31 KB)

#### N04 — Kwasy

```yaml
kod: N04
poziom: E8+LO
wymaga: "F09; F12; N02"
poglebia: "J01–J03; X04"
stan: "●●●"
bylo: "N03"
```

**Cel:** Uczeń zapisuje i otrzymuje kwasy tlenowe i beztlenowe, opisuje ich właściwości i odczyn.

**Co ma być:**
- kwasy beztlenowe i tlenowe
- otrzymywanie
- właściwości, zastosowania, BHP
- dysocjacja i pH (E8)
- metal + kwas (OWNER E8)
- kwaśne deszcze

**Mamy:** gotowa lekcja `che/md/N03_kwasy.md` (128 KB) → HTML przez `md2html.py`; materiał `lekcje_md/N/CHE.02.N04.kwasy.md` (35 KB)

#### N05 — Sole

```yaml
kod: N05
poziom: E8+LO
wymaga: "N03; N04"
poglebia: "J03; J04; J08"
stan: "●●●"
bylo: "N04"
```

**Cel:** Uczeń zapisuje i nazywa sole, zna metody ich otrzymywania i przewiduje strącanie.

**Co ma być:**
- budowa i nazwy
- metody otrzymywania (zobojętnianie, metal + kwas, tlenek + kwas itd.)
- dysocjacja soli
- tabela rozpuszczalności i strącanie (E8)
- zastosowania

**Mamy:** gotowa lekcja `che/md/N04_sole.md` (81 KB) → HTML przez `md2html.py`; materiał `lekcje_md/N/CHE.02.N05.sole.md` (38 KB)

#### N06 — Wodorki

```yaml
kod: N06
poziom: E8+LO
wymaga: "N01; F12"
poglebia: "N07; P01–P02"
stan: "●●●"
bylo: "N05"
```

**Cel:** E8: wodór i jego proste związki. LO: systematyka wodorków.

**Co ma być:**
- wodorki metali i niemetali
- charakter chemiczny w układzie okresowym
- amoniak, chlorowodór, siarkowodór

**Mamy:** gotowa lekcja `che/md/N05_wodorki.md` (54 KB) → HTML przez `md2html.py`

#### N07 — Systematyka nieorganiczna

```yaml
kod: N07
poziom: E8+LO
wymaga: "N02–N06"
poglebia: "N08"
stan: "○○○"
bylo: "N06"
```

**Cel:** Uczeń klasyfikuje dowolny związek nieorganiczny: wzór → nazwa → klasa.

**Co ma być:**
- klasyfikacja wszystkich klas
- nazewnictwo systematyczne
- procedura rozpoznawania klasy

**Mamy:** nic — do napisania

#### N08 — Mapa przemian „co powstanie?”

```yaml
kod: N08
poziom: E8+LO
wymaga: "N02–N07"
poglebia: "J03; X01"
stan: "○○○"
bylo: "N07"
```

**Cel:** Uczeń przewiduje produkty przemian między klasami związków.

**Co ma być:**
- pierwiastek → tlenek → wodorotlenek / kwas → sól
- reakcje między klasami
- moduł interaktywny dostępny z każdej lekcji N

**Mamy:** nic — do napisania

**Dlaczego tu:** mapa spina N i ma być dostępna z każdej lekcji N, nie tylko na końcu

---

## 5. R — Roztwory i stechiometria

_ilościowy opis; potrzebny J, X, E, K_

#### R01 — Woda i roztwory

```yaml
kod: R01
poziom: E8
wymaga: "F03; F15"
poglebia: "R02; J01"
stan: "○○○"
```

**Cel:** Uczeń opisuje wodę jako rozpuszczalnik i rozróżnia roztwór, zawiesinę i koloid.

**Co ma być:**
- budowa i polarność wody
- rozpuszczanie
- roztwór, zawiesina, koloid
- czynniki szybkości rozpuszczania

**Mamy:** nic — do napisania

#### R02 — Rozpuszczalność

```yaml
kod: R02
poziom: E8
wymaga: "R01"
poglebia: "R03; J10"
stan: "○○○"
```

**Cel:** Uczeń odczytuje krzywe rozpuszczalności i rozróżnia roztwór nasycony i nienasycony.

**Co ma być:**
- rozpuszczalność i jej zależność od temperatury
- krzywe
- roztwór nasycony / nienasycony
- krystalizacja
- zadania z krzywych

**Mamy:** nic — do napisania

#### R03 — Stężenie procentowe

```yaml
kod: R03
poziom: E8+LO
wymaga: "R02"
poglebia: "R05"
stan: "●○○"
```

**Cel:** Uczeń oblicza stężenie procentowe, rozcieńcza, zatęża i miesza roztwory.

**Co ma być:**
- Cp
- rozcieńczanie i zatężanie
- mieszanie roztworów
- gęstość (LO)

**Mamy:** materiał `lekcje_md/R/CHE.03.R03+R05.stezenia.md` (29 KB) — wspólny dla R03, R05

#### R04 — Mol i masa molowa

```yaml
kod: R04
poziom: LO
wymaga: "F12"
poglebia: "R05–R09"
stan: "●○○"
bylo: "R05"
```

**Cel:** Uczeń przelicza masę, liczbę moli i liczbę cząstek.

**Co ma być:**
- mol, liczba Avogadra, masa molowa
- przeliczenia masa ↔ mol ↔ liczba cząstek

**Mamy:** materiał `lekcje_md/R/CHE.03.R04+R07-R09.stechiometria.md` (32 KB) — wspólny dla R04, R07, R08, R09

**Dlaczego tu:** stężenie molowe wymaga mola — w v0.1 było odwrotnie

#### R05 — Stężenie molowe

```yaml
kod: R05
poziom: LO
wymaga: "R03; R04"
poglebia: "J02; J07; E01"
stan: "●○○"
bylo: "R04"
```

**Cel:** Uczeń oblicza stężenie molowe i przelicza Cp ↔ Cm.

**Co ma być:**
- Cm
- przygotowanie roztworu
- przeliczanie Cp ↔ Cm z gęstością

**Mamy:** materiał `lekcje_md/R/CHE.03.R03+R05.stezenia.md` (29 KB) — wspólny dla R03, R05

#### R06 — Gazy: objętość molowa

```yaml
kod: R06
poziom: LO
wymaga: "R04"
poglebia: "R07"
stan: "○○○"
bylo: "nowa"
```

**Cel:** Uczeń stosuje objętość molową i równanie Clapeyrona.

**Co ma być:**
- objętość molowa w warunkach normalnych
- równanie Clapeyrona
- gęstość gazu

**Mamy:** nic — do napisania

**Dlaczego tu:** stechiometria z objętością gazu nie miała właściciela

#### R07 — Stechiometria

```yaml
kod: R07
poziom: LO
wymaga: "F17; R04; R06"
poglebia: "R08; R09"
stan: "●○○"
bylo: "R06"
```

**Cel:** Uczeń wykonuje obliczenia na podstawie równań reakcji.

**Co ma być:**
- obliczenia masa / mole / objętość z równania
- proporcje
- skład mieszanin

**Mamy:** materiał `lekcje_md/R/CHE.03.R04+R07-R09.stechiometria.md` (32 KB) — wspólny dla R04, R07, R08, R09

#### R08 — Reagent ograniczający

```yaml
kod: R08
poziom: LO
wymaga: "R07"
poglebia: "R09"
stan: "●○○"
bylo: "R07"
```

**Cel:** Uczeń wskazuje reagent ograniczający i oblicza skład mieszaniny poreakcyjnej.

**Co ma być:**
- nadmiar i niedomiar
- reagent ograniczający
- skład po reakcji

**Mamy:** materiał `lekcje_md/R/CHE.03.R04+R07-R09.stechiometria.md` (32 KB) — wspólny dla R04, R07, R08, R09

#### R09 — Wydajność reakcji

```yaml
kod: R09
poziom: LO
wymaga: "R07; R08"
poglebia: "K11"
stan: "●○○"
bylo: "R08"
```

**Cel:** Uczeń oblicza wydajność i uwzględnia zanieczyszczenia substratów.

**Co ma być:**
- wydajność
- straty
- czystość substratów
- zadania wieloetapowe

**Mamy:** materiał `lekcje_md/R/CHE.03.R04+R07-R09.stechiometria.md` (32 KB) — wspólny dla R04, R07, R08, R09

---

## 6. J — Chemia jonowa

_wymaga N (substancje) i R (stężenia)_

#### J01 — Dysocjacja elektrolityczna

```yaml
kod: J01
poziom: E8+LO
wymaga: "F15; N03–N05; R01"
poglebia: "J02–J04; J06"
stan: "○○○"
```

**Cel:** Uczeń zapisuje równania dysocjacji i rozróżnia elektrolity mocne i słabe.

**Co ma być:**
- elektrolity i nieelektrolity
- dysocjacja kwasów, zasad, soli (OWNER pełny)
- dysocjacja stopniowa
- stopień dysocjacji (LO)

**Mamy:** nic — do napisania

#### J02 — pH i odczyn

```yaml
kod: J02
poziom: E8+LO
wymaga: "J01"
poglebia: "J07; J09; J12"
stan: "○○○"
```

**Cel:** Uczeń określa odczyn, posługuje się skalą pH i wskaźnikami; LO: oblicza pH.

**Co ma być:**
- odczyn kwasowy, obojętny, zasadowy
- skala pH
- wskaźniki
- obliczenia pH roztworów mocnych elektrolitów (LO)

**Mamy:** nic — do napisania

#### J03 — Reakcje jonowe

```yaml
kod: J03
poziom: E8+LO
wymaga: "J01"
poglebia: "J04; J11"
stan: "○○○"
```

**Cel:** Uczeń zapisuje reakcje w formie cząsteczkowej, jonowej pełnej i skróconej.

**Co ma być:**
- zapis jonowy pełny i skrócony
- zobojętnianie
- kiedy reakcja jonowa zachodzi

**Mamy:** nic — do napisania

#### J04 — Strącanie osadów

```yaml
kod: J04
poziom: E8+LO
wymaga: "J03; N05"
poglebia: "J10; J11"
stan: "○○○"
```

**Cel:** Uczeń przewiduje powstanie osadu z tabeli rozpuszczalności.

**Co ma być:**
- tabela rozpuszczalności
- reakcje strąceniowe
- dobór odczynników

**Mamy:** nic — do napisania

#### J05 — Amfoteryczność

```yaml
kod: J05
poziom: LO
wymaga: "N02; N03; J03"
poglebia: "P03"
stan: "○○○"
```

**Cel:** Uczeń rozpoznaje substancje amfoteryczne i zapisuje ich reakcje.

**Co ma być:**
- tlenki i wodorotlenki amfoteryczne (Al, Zn)
- reakcje z kwasem i zasadą
- kompleksy hydroksylowe

**Mamy:** nic — do napisania

#### J06 — Równowagi kwasowo-zasadowe

```yaml
kod: J06
poziom: LO
wymaga: "J01; J02"
poglebia: "J07"
stan: "○○○"
```

**Cel:** Uczeń stosuje teorię Brønsteda jakościowo.

**Co ma być:**
- teoria Arrheniusa i Brønsteda
- pary sprzężone
- moc kwasów i zasad — opis jakościowy

**Mamy:** nic — do napisania

#### J07 — Ka, Kb i Kw

```yaml
kod: J07
poziom: LO
wymaga: "J06; K09"
poglebia: "J08; J09"
stan: "○○○"
bylo: "J09"
```

**Cel:** Uczeń oblicza stałe dysocjacji i korzysta z iloczynu jonowego wody.

**Co ma być:**
- Ka, Kb, Kw
- pKa
- prawo rozcieńczeń Ostwalda
- pH słabych elektrolitów

**Mamy:** nic — do napisania

**Dlaczego tu:** stałe są potrzebne do hydrolizy i buforów, więc idą przed nimi

#### J08 — Hydroliza soli

```yaml
kod: J08
poziom: LO
wymaga: "J07; N05"
poglebia: "J09"
stan: "○○○"
bylo: "J07"
```

**Cel:** Uczeń przewiduje odczyn roztworów soli i zapisuje równania hydrolizy.

**Co ma być:**
- hydroliza kationowa, anionowa, kationowo-anionowa
- przewidywanie odczynu
- obliczenia (LO-R)

**Mamy:** nic — do napisania

#### J09 — Bufory

```yaml
kod: J09
poziom: LO
wymaga: "J07; J08"
poglebia: "J12"
stan: "○○○"
bylo: "J08"
```

**Cel:** Uczeń wyjaśnia działanie buforu i oblicza jego pH.

**Co ma być:**
- skład i działanie buforu
- bufory w organizmie
- pH buforu

**Mamy:** nic — do napisania

#### J10 — Iloczyn rozpuszczalności Ksp

```yaml
kod: J10
poziom: LO
wymaga: "J04; K09"
poglebia: "J11"
stan: "○○○"
```

**Cel:** Uczeń oblicza rozpuszczalność z Ksp i warunek strącania.

**Co ma być:**
- Ksp
- rozpuszczalność molowa
- warunek strącania
- efekt wspólnego jonu

**Mamy:** nic — do napisania

#### J11 — Identyfikacja jonów

```yaml
kod: J11
poziom: E8+LO
wymaga: "J03; J04"
poglebia: "J12"
stan: "○○○"
```

**Cel:** Uczeń planuje wykrycie jonów reakcjami charakterystycznymi.

**Co ma być:**
- analiza jakościowa
- reakcje charakterystyczne kationów i anionów
- projekt doświadczenia

**Mamy:** nic — do napisania

#### J12 — Miareczkowanie

```yaml
kod: J12
poziom: LO
wymaga: "J02; R05"
poglebia: "—"
stan: "○○○"
```

**Cel:** Uczeń przeprowadza i interpretuje miareczkowanie alkacymetryczne.

**Co ma być:**
- procedura i sprzęt
- krzywe miareczkowania
- punkt równoważnikowy i wskaźnik
- obliczenia

**Mamy:** nic — do napisania

---

## 7. O — Chemia organiczna

_wymaga F (wiązania, wzory) i częściowo J (kwasowość)_

#### O01 — Język chemii organicznej

```yaml
kod: O01
poziom: E8+LO
wymaga: "F11; F12; F13"
poglebia: "O02–O25"
stan: "●○○"
bylo: "O01 + część O20"
```

**Cel:** Uczeń zapisuje wzory związków węgla i stosuje podstawy nazewnictwa.

**Co ma być:**
- węgiel w związkach
- wzory strukturalne, półstrukturalne, szkieletowe
- szereg homologiczny
- podstawy nazewnictwa (OWNER podstaw)

**Mamy:** materiał `lekcje_md/O/CHE.05.O01-O07.weglowodory.md` (32 KB) — wspólny dla O01, O02, O03, O04, O05, O06, O07

**Dlaczego tu:** nazewnictwo to warstwa — podstawy na początku, zbiorcza procedura (O24) na końcu

#### O02 — Alkany

```yaml
kod: O02
poziom: E8+LO
wymaga: "O01"
poglebia: "O03; O06"
stan: "●○○"
```

**Cel:** Uczeń opisuje budowę, nazwy i właściwości alkanów.

**Co ma być:**
- szereg alkanów
- nazwy
- właściwości fizyczne
- reakcja podstawienia (halogenowanie)
- źródła (ropa, gaz)

**Mamy:** materiał `lekcje_md/O/CHE.05.O01-O07.weglowodory.md` (32 KB) — wspólny dla O01, O02, O03, O04, O05, O06, O07

#### O03 — Izomeria

```yaml
kod: O03
poziom: E8+LO
wymaga: "O02"
poglebia: "O04; O15; O18"
stan: "●○○"
bylo: "O06"
```

**Cel:** Uczeń rozpoznaje i rysuje izomery.

**Co ma być:**
- izomeria łańcuchowa (od alkanów), położenia, funkcyjna
- geometryczna cis-trans i optyczna (LO)

**Mamy:** materiał `lekcje_md/O/CHE.05.O01-O07.weglowodory.md` (32 KB) — wspólny dla O01, O02, O03, O04, O05, O06, O07

**Dlaczego tu:** izomeria łańcuchowa pojawia się już przy alkanach

#### O04 — Alkeny

```yaml
kod: O04
poziom: E8+LO
wymaga: "O02; O03"
poglebia: "O05; O21"
stan: "●○○"
bylo: "O03"
```

**Cel:** Uczeń opisuje wiązanie podwójne i reakcje addycji.

**Co ma być:**
- budowa i nazwy
- addycja (H₂, Br₂, HX, H₂O)
- reguła Markownikowa (LO)
- polimeryzacja (wstęp)
- odbarwianie wody bromowej

**Mamy:** materiał `lekcje_md/O/CHE.05.O01-O07.weglowodory.md` (32 KB) — wspólny dla O01, O02, O03, O04, O05, O06, O07

#### O05 — Alkiny

```yaml
kod: O05
poziom: E8+LO
wymaga: "O04"
poglebia: "O06"
stan: "●○○"
bylo: "O04"
```

**Cel:** Uczeń opisuje wiązanie potrójne i właściwości etynu.

**Co ma być:**
- budowa i nazwy
- etyn — otrzymywanie z karbidu, właściwości
- addycja

**Mamy:** materiał `lekcje_md/O/CHE.05.O01-O07.weglowodory.md` (32 KB) — wspólny dla O01, O02, O03, O04, O05, O06, O07

#### O06 — Spalanie węglowodorów

```yaml
kod: O06
poziom: E8
wymaga: "O02; O04; O05; F17"
poglebia: "K01"
stan: "●○○"
bylo: "O07"
```

**Cel:** Uczeń zapisuje spalanie całkowite i niecałkowite i wykrywa produkty.

**Co ma być:**
- spalanie całkowite, półspalanie, niecałkowite
- wykrywanie CO₂ i H₂O
- paliwa
- BHP (CO)

**Mamy:** materiał `lekcje_md/O/CHE.05.O01-O07.weglowodory.md` (32 KB) — wspólny dla O01, O02, O03, O04, O05, O06, O07

#### O07 — Areny

```yaml
kod: O07
poziom: LO
wymaga: "O04"
poglebia: "O09; O25"
stan: "●○○"
bylo: "O05"
```

**Cel:** Uczeń opisuje aromatyczność benzenu i substytucję.

**Co ma być:**
- benzen, aromatyczność
- substytucja elektrofilowa
- homologi benzenu

**Mamy:** materiał `lekcje_md/O/CHE.05.O01-O07.weglowodory.md` (32 KB) — wspólny dla O01, O02, O03, O04, O05, O06, O07

#### O08 — Alkohole

```yaml
kod: O08
poziom: E8+LO
wymaga: "O02"
poglebia: "O10–O12"
stan: "○○○"
```

**Cel:** Uczeń opisuje budowę, właściwości i reakcje alkoholi.

**Co ma być:**
- metanol, etanol, glicerol
- alkohole jedno- i wielowodorotlenowe
- właściwości
- fermentacja
- utlenianie (LO)
- rzędowość (LO)

**Mamy:** nic — do napisania

#### O09 — Fenole

```yaml
kod: O09
poziom: LO
wymaga: "O07; O08"
poglebia: "—"
stan: "○○○"
bylo: "nowa"
```

**Cel:** Uczeń porównuje fenole z alkoholami.

**Co ma być:**
- budowa fenolu
- kwasowość
- reakcje
- porównanie z alkoholami

**Mamy:** nic — do napisania

#### O10 — Aldehydy i ketony

```yaml
kod: O10
poziom: LO
wymaga: "O08"
poglebia: "O11; O15"
stan: "○○○"
bylo: "nowa"
```

**Cel:** Uczeń rozpoznaje grupę karbonylową i wykonuje próby Tollensa i Trommera.

**Co ma być:**
- aldehydy i ketony — budowa, nazwy
- otrzymywanie z alkoholi
- próba Tollensa, Trommera

**Mamy:** nic — do napisania

#### O11 — Kwasy karboksylowe

```yaml
kod: O11
poziom: E8+LO
wymaga: "O08; J01"
poglebia: "O12; O13"
stan: "○○○"
bylo: "O09"
```

**Cel:** Uczeń opisuje budowę i reakcje kwasów karboksylowych.

**Co ma być:**
- kwas mrówkowy, octowy
- kwasy tłuszczowe
- dysocjacja
- reakcje z metalami, zasadami, tlenkami
- hydroksykwasy i aminokwasy (wstęp, LO)

**Mamy:** nic — do napisania

#### O12 — Estry

```yaml
kod: O12
poziom: E8+LO
wymaga: "O08; O11"
poglebia: "O13"
stan: "○○○"
bylo: "O10"
```

**Cel:** Uczeń zapisuje estryfikację i hydrolizę estrów.

**Co ma być:**
- estryfikacja
- nazwy estrów
- hydroliza kwasowa i zasadowa
- zastosowania

**Mamy:** nic — do napisania

#### O13 — Tłuszcze, mydła i detergenty

```yaml
kod: O13
poziom: E8+LO
wymaga: "O11; O12"
poglebia: "O22; O23"
stan: "●○○"
bylo: "O11 + nowe"
```

**Cel:** Uczeń opisuje budowę tłuszczów, zmydlanie i działanie mydła.

**Co ma być:**
- tłuszcze nasycone i nienasycone
- utwardzanie
- zmydlanie
- budowa i działanie mydła i detergentów
- twarda woda

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

**Dlaczego tu:** mydła nie miały właściciela; do weryfikacji, czy są w E8 po 2024

#### O14 — Aminy i amidy

```yaml
kod: O14
poziom: LO
wymaga: "O01; J06"
poglebia: "O18"
stan: "○○○"
bylo: "nowa"
```

**Cel:** Uczeń opisuje zasadowość amin i budowę amidów.

**Co ma być:**
- aminy — budowa, zasadowość
- amidy
- mocznik

**Mamy:** nic — do napisania

#### O15 — Cukry — monosacharydy

```yaml
kod: O15
poziom: E8+LO
wymaga: "O08; O10"
poglebia: "O16; O17"
stan: "●○○"
bylo: "O12"
```

**Cel:** Uczeń opisuje glukozę i fruktozę i je wykrywa.

**Co ma być:**
- glukoza, fruktoza
- budowa łańcuchowa i pierścieniowa (LO)
- wykrywanie
- fotosynteza (wstęp)

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

#### O16 — Cukry — disacharydy

```yaml
kod: O16
poziom: E8+LO
wymaga: "O15"
poglebia: "O17"
stan: "●○○"
bylo: "O13"
```

**Cel:** Uczeń opisuje sacharozę i jej hydrolizę.

**Co ma być:**
- sacharoza, laktoza, maltoza
- hydroliza
- cukry redukujące i nieredukujące (LO)

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

#### O17 — Cukry — polisacharydy

```yaml
kod: O17
poziom: E8+LO
wymaga: "O16"
poglebia: "O23"
stan: "●○○"
bylo: "O14"
```

**Cel:** Uczeń porównuje skrobię i celulozę i wykrywa skrobię.

**Co ma być:**
- skrobia, celuloza, glikogen
- wykrywanie skrobi jodem
- znaczenie

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

#### O18 — Aminokwasy

```yaml
kod: O18
poziom: E8+LO
wymaga: "O11; O14"
poglebia: "O19"
stan: "●○○"
bylo: "O15"
```

**Cel:** Uczeń opisuje budowę aminokwasów i wiązanie peptydowe.

**Co ma być:**
- glicyna
- amfoteryczność
- jon obojnaczy (LO)
- wiązanie peptydowe
- peptydy

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

#### O19 — Białka — struktura

```yaml
kod: O19
poziom: E8+LO
wymaga: "O18"
poglebia: "O20"
stan: "●○○"
bylo: "O16"
```

**Cel:** Uczeń opisuje struktury białek, denaturację i koagulację.

**Co ma być:**
- struktury I–IV rzędowe
- denaturacja i koagulacja
- czynniki denaturujące

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

#### O20 — Białka — reakcje charakterystyczne

```yaml
kod: O20
poziom: E8+LO
wymaga: "O19"
poglebia: "O23"
stan: "●○○"
bylo: "O17"
```

**Cel:** Uczeń wykrywa białka reakcjami charakterystycznymi.

**Co ma być:**
- reakcja ksantoproteinowa i biuretowa
- projekt doświadczenia

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

#### O21 — Polimery i tworzywa

```yaml
kod: O21
poziom: E8+LO
wymaga: "O04; O12"
poglebia: "—"
stan: "○○○"
bylo: "nowa"
```

**Cel:** Uczeń opisuje polimeryzację, polikondensację i problem tworzyw sztucznych.

**Co ma być:**
- polimeryzacja i polikondensacja
- PE, PVC, PET
- tworzywa i środowisko
- recykling

**Mamy:** nic — do napisania

#### O22 — Witaminy i sole mineralne

```yaml
kod: O22
poziom: E8
wymaga: "O13"
poglebia: "—"
stan: "●○○"
bylo: "O18"
```

**Cel:** Aspekt chemiczny — właściciel tematu w biologii (REF).

**Co ma być:**
- witaminy rozpuszczalne w wodzie i tłuszczach
- makro- i mikroelementy — tylko chemiczne odniesienie do biologii

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

#### O23 — Metabolizm

```yaml
kod: O23
poziom: LO
wymaga: "O15–O20"
poglebia: "—"
stan: "●○○"
bylo: "O19"
```

**Cel:** Aspekt chemiczny — właściciel tematu w biologii (REF).

**Co ma być:**
- reakcje i energia w metabolizmie
- oddychanie komórkowe chemicznie — odniesienie do biologii

**Mamy:** materiał `lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md` (33 KB) — wspólny dla O13, O15, O16, O17, O18, O19, O20, O22, O23

#### O24 — Nazewnictwo — procedura zbiorcza

```yaml
kod: O24
poziom: LO
wymaga: "O01–O21"
poglebia: "O25"
stan: "○○○"
bylo: "O20"
```

**Cel:** Uczeń nazywa związki wszystkich klas wg zasad IUPAC.

**Co ma być:**
- priorytety grup funkcyjnych
- łańcuch główny
- lokanty
- związki wielofunkcyjne

**Mamy:** nic — do napisania

#### O25 — Mechanizmy reakcji organicznych

```yaml
kod: O25
poziom: LO
wymaga: "O24"
poglebia: "—"
stan: "○○○"
bylo: "O21"
```

**Cel:** Uczeń opisuje przepływ elektronów w typowych mechanizmach.

**Co ma być:**
- substytucja rodnikowa, elektrofilowa, nukleofilowa
- addycja
- eliminacja
- zapis strzałkowy

**Mamy:** nic — do napisania

---

## 8. X — Redoks

_wymaga F09, N, J_

#### X01 — Reakcje redoks

```yaml
kod: X01
poziom: LO
wymaga: "F09; F17"
poglebia: "X02–X09"
stan: "●○○"
bylo: "X01 + X02"
```

**Cel:** Uczeń rozpoznaje redoks po zmianie stopni utlenienia i wskazuje utleniacz i reduktor.

**Co ma być:**
- ściąga stopnia utlenienia (definicja w F09)
- utlenianie, redukcja
- utleniacz, reduktor
- rozpoznawanie reakcji redoks

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

**Dlaczego tu:** stary X01 dublował F09 — definicja zostaje tylko w F09

#### X02 — Typowe utleniacze i reduktory

```yaml
kod: X02
poziom: LO
wymaga: "X01"
poglebia: "X05–X07"
stan: "●○○"
bylo: "X05"
```

**Cel:** Uczeń zna katalog typowych utleniaczy i reduktorów i przewiduje produkty.

**Co ma być:**
- KMnO₄, K₂Cr₂O₇, H₂O₂, HNO₃, H₂SO₄ stęż.
- metale, węgiel, wodór
- zależność od środowiska

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

#### X03 — Bilans elektronowy

```yaml
kod: X03
poziom: LO
wymaga: "X01"
poglebia: "X05–X08"
stan: "●○○"
```

**Cel:** Uczeń dobiera współczynniki metodą bilansu elektronowego.

**Co ma być:**
- równania połówkowe
- bilans elektronów
- procedura krok po kroku

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

#### X04 — Szereg aktywności metali

```yaml
kod: X04
poziom: E8+LO
wymaga: "N04; X01"
poglebia: "E02"
stan: "●○○"
```

**Cel:** Uczeń przewiduje wypieranie metali i wodoru.

**Co ma być:**
- szereg aktywności
- metal + kwas, metal + sól
- metale szlachetne

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

#### X05 — Redoks jonowy

```yaml
kod: X05
poziom: LO
wymaga: "X03; J03"
poglebia: "X06; X07"
stan: "●○○"
bylo: "X06"
```

**Cel:** Uczeń bilansuje redoks w formie jonowej.

**Co ma być:**
- zapis jonowy redoks
- bilans ładunku i elektronów

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

#### X06 — Redoks w środowisku kwasowym

```yaml
kod: X06
poziom: LO
wymaga: "X05"
poglebia: "E04"
stan: "●○○"
bylo: "X07"
```

**Cel:** Uczeń bilansuje metodą połówkową w środowisku kwasowym.

**Co ma być:**
- metoda połówkowa z H⁺ i H₂O
- KMnO₄ w kwasie

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

#### X07 — Redoks w środowisku zasadowym

```yaml
kod: X07
poziom: LO
wymaga: "X05"
poglebia: "—"
stan: "●○○"
bylo: "X08"
```

**Cel:** Uczeń bilansuje metodą połówkową w środowisku zasadowym.

**Co ma być:**
- metoda połówkowa z OH⁻ i H₂O
- KMnO₄ w środowisku obojętnym i zasadowym

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

#### X08 — Dysproporcjonowanie i synproporcjonowanie

```yaml
kod: X08
poziom: LO
wymaga: "X03"
poglebia: "—"
stan: "●○○"
bylo: "X09"
```

**Cel:** Uczeń rozpoznaje i bilansuje dys- i synproporcjonowanie.

**Co ma być:**
- definicje
- przykłady (Cl₂ w zasadzie, H₂O₂)
- bilans

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

#### X09 — Redoks przekrojowy

```yaml
kod: X09
poziom: LO
wymaga: "X01–X08"
poglebia: "E01–E06"
stan: "●○○"
bylo: "X10"
```

**Cel:** Uczeń łączy całą grupę X w zadaniach przekrojowych.

**Co ma być:**
- zadania łączące
- diagnostyka błędów redoks

**Mamy:** materiał `lekcje_md/X/CHE.06.X01-X09.redoks.md` (35 KB) — wspólny dla X01, X02, X03, X04, X05, X06, X07, X08, X09

---

## 9. E — Elektrochemia

_wymaga X + J + R_

#### E01 — Ogniwo galwaniczne

```yaml
kod: E01
poziom: LO
wymaga: "X03; J01; R05"
poglebia: "E02; E03"
stan: "○○○"
```

**Cel:** Uczeń opisuje budowę i działanie ogniwa i zapisuje jego schemat.

**Co ma być:**
- ogniwo Daniella
- anoda, katoda
- klucz elektrolityczny
- schemat ogniwa

**Mamy:** nic — do napisania

#### E02 — Potencjały elektrodowe

```yaml
kod: E02
poziom: LO
wymaga: "E01; X04"
poglebia: "E03"
stan: "○○○"
```

**Cel:** Uczeń korzysta z szeregu elektrochemicznego.

**Co ma być:**
- potencjał standardowy
- elektroda wodorowa
- szereg elektrochemiczny

**Mamy:** nic — do napisania

#### E03 — SEM

```yaml
kod: E03
poziom: LO
wymaga: "E02"
poglebia: "E06"
stan: "○○○"
```

**Cel:** Uczeń oblicza SEM i przewiduje samorzutność reakcji.

**Co ma być:**
- obliczanie SEM
- kierunek reakcji
- równanie Nernsta (LO-R, wstęp)

**Mamy:** nic — do napisania

#### E04 — Elektroliza

```yaml
kod: E04
poziom: LO
wymaga: "E02; X06"
poglebia: "—"
stan: "○○○"
```

**Cel:** Uczeń zapisuje procesy elektrodowe i stosuje prawa Faradaya.

**Co ma być:**
- elektroliza stopionych soli i roztworów
- kolejność wydzielania
- prawa Faradaya

**Mamy:** nic — do napisania

#### E05 — Korozja

```yaml
kod: E05
poziom: E8+LO
wymaga: "X04"
poglebia: "—"
stan: "○○○"
```

**Cel:** Uczeń wyjaśnia korozję i dobiera ochronę.

**Co ma być:**
- korozja chemiczna i elektrochemiczna
- czynniki
- ochrona (powłoki, protektor)

**Mamy:** nic — do napisania

#### E06 — Źródła energii i akumulatory

```yaml
kod: E06
poziom: LO
wymaga: "E03"
poglebia: "—"
stan: "○○○"
```

**Cel:** Uczeń porównuje baterie, akumulatory i ogniwa paliwowe.

**Co ma być:**
- ogniwo Leclanchégo
- akumulator ołowiowy i litowo-jonowy
- ogniwo paliwowe

**Mamy:** nic — do napisania

---

## 10. K — Energetyka, kinetyka i równowaga

_wymaga R; J07–J10 korzystają z K09 (stała równowagi)_

#### K01 — Energia reakcji

```yaml
kod: K01
poziom: E8+LO
wymaga: "F16; F17"
poglebia: "K02; K06"
stan: "○○○"
bylo: "K05"
```

**Cel:** Uczeń rozróżnia reakcje egzo- i endoenergetyczne i czyta wykres energetyczny.

**Co ma być:**
- egzo- i endoenergetyczne
- wykres energetyczny — jakościowo

**Mamy:** nic — do napisania

**Dlaczego tu:** energia przed szybkością — energia aktywacji wymaga wykresu energetycznego

#### K02 — Entalpia

```yaml
kod: K02
poziom: LO
wymaga: "K01"
poglebia: "K03"
stan: "○○○"
bylo: "K06"
```

**Cel:** Uczeń oblicza ΔH, także z prawa Hessa.

**Co ma być:**
- ΔH
- entalpie tworzenia i spalania
- prawo Hessa
- energia wiązań

**Mamy:** nic — do napisania

#### K03 — Kalorymetria i przemiany fazowe

```yaml
kod: K03
poziom: LO
wymaga: "K02"
poglebia: "—"
stan: "○○○"
bylo: "K10"
```

**Cel:** Uczeń mierzy i oblicza ciepło reakcji i przemian fazowych.

**Co ma być:**
- ciepło właściwe
- kalorymetr
- ciepło przemian fazowych
- wykres ogrzewania

**Mamy:** nic — do napisania

#### K04 — Szybkość reakcji

```yaml
kod: K04
poziom: LO
wymaga: "R05"
poglebia: "K05"
stan: "○○○"
bylo: "K01"
```

**Cel:** Uczeń definiuje i mierzy szybkość reakcji.

**Co ma być:**
- szybkość średnia i chwilowa
- pomiar
- wykresy stężenie–czas
- równanie kinetyczne (LO-R)

**Mamy:** nic — do napisania

#### K05 — Czynniki wpływające na szybkość

```yaml
kod: K05
poziom: E8+LO
wymaga: "K04"
poglebia: "K06; K07"
stan: "○○○"
bylo: "K02"
```

**Cel:** Uczeń przewiduje wpływ stężenia, temperatury i rozdrobnienia.

**Co ma być:**
- stężenie, temperatura, rozdrobnienie, katalizator — doświadczenia

**Mamy:** nic — do napisania

#### K06 — Zderzenia i energia aktywacji

```yaml
kod: K06
poziom: LO
wymaga: "K01; K05"
poglebia: "K07"
stan: "○○○"
bylo: "K03"
```

**Cel:** Uczeń wyjaśnia szybkość teorią zderzeń.

**Co ma być:**
- teoria zderzeń
- energia aktywacji na wykresie
- rozkład energii cząsteczek

**Mamy:** nic — do napisania

#### K07 — Kataliza

```yaml
kod: K07
poziom: E8+LO
wymaga: "K06"
poglebia: "O19"
stan: "○○○"
bylo: "K04"
```

**Cel:** Uczeń opisuje działanie katalizatora, enzymu i inhibitora.

**Co ma być:**
- kataliza homo- i heterogeniczna
- enzymy
- inhibitory
- katalizatory w przemyśle i samochodach

**Mamy:** nic — do napisania

#### K08 — Równowaga dynamiczna

```yaml
kod: K08
poziom: LO
wymaga: "K04"
poglebia: "K09"
stan: "○○○"
bylo: "K07"
```

**Cel:** Uczeń opisuje stan równowagi w reakcjach odwracalnych.

**Co ma być:**
- reakcje odwracalne
- stan równowagi dynamicznej
- modele

**Mamy:** nic — do napisania

#### K09 — Stała równowagi

```yaml
kod: K09
poziom: LO
wymaga: "K08; R05"
poglebia: "K10; J07; J10"
stan: "○○○"
bylo: "K08"
```

**Cel:** Uczeń zapisuje wyrażenie na K i wykonuje obliczenia.

**Co ma być:**
- wyrażenie K
- obliczenia stężeń równowagowych
- Kp (LO-R)

**Mamy:** nic — do napisania

#### K10 — Reguła Le Chateliera

```yaml
kod: K10
poziom: LO
wymaga: "K09"
poglebia: "K11"
stan: "○○○"
bylo: "K09"
```

**Cel:** Uczeń przewiduje przesunięcie równowagi.

**Co ma być:**
- wpływ stężenia, ciśnienia, temperatury
- zastosowania przemysłowe (synteza amoniaku)

**Mamy:** nic — do napisania

#### K11 — Równowaga ilościowa

```yaml
kod: K11
poziom: LO
wymaga: "K09; K10"
poglebia: "—"
stan: "○○○"
```

**Cel:** Uczeń rozwiązuje zadania z równowagi.

**Co ma być:**
- stopień przereagowania
- zadania złożone z K

**Mamy:** nic — do napisania

---

## 11. A — Chemia jądrowa

_rozwija F04–F05; niezależna od reszty_

#### A01 — Jądro atomowe

```yaml
kod: A01
poziom: LO
wymaga: "F04; F05"
poglebia: "A02"
stan: "○○○"
```

**Cel:** Uczeń opisuje siły jądrowe i stabilność jąder.

**Co ma być:**
- skład jądra (REF do F04–F05)
- siły jądrowe
- ścieżka stabilności

**Mamy:** nic — do napisania

#### A02 — Radioaktywność

```yaml
kod: A02
poziom: E8+LO
wymaga: "A01"
poglebia: "A03"
stan: "○○○"
```

**Cel:** Uczeń rozróżnia rodzaje promieniowania i ich właściwości.

**Co ma być:**
- promieniowanie α, β, γ
- przenikliwość
- detekcja

**Mamy:** nic — do napisania

#### A03 — Przemiany jądrowe

```yaml
kod: A03
poziom: LO
wymaga: "A02"
poglebia: "A04"
stan: "○○○"
```

**Cel:** Uczeń zapisuje równania przemian jądrowych.

**Co ma być:**
- przemiany α, β⁻, β⁺
- szeregi promieniotwórcze
- reakcje jądrowe

**Mamy:** nic — do napisania

#### A04 — Okres półtrwania i aktywność

```yaml
kod: A04
poziom: LO
wymaga: "A03"
poglebia: "A06"
stan: "○○○"
```

**Cel:** Uczeń oblicza ubytek substancji promieniotwórczej.

**Co ma być:**
- okres półtrwania
- aktywność
- datowanie izotopowe

**Mamy:** nic — do napisania

#### A05 — Energia wiązania jądra

```yaml
kod: A05
poziom: LO
wymaga: "A01"
poglebia: "A06"
stan: "○○○"
bylo: "A06"
```

**Cel:** Uczeń oblicza deficyt masy i energię wiązania.

**Co ma być:**
- deficyt masy
- E = mc²
- rozszczepienie i synteza jądrowa

**Mamy:** nic — do napisania

#### A06 — Zastosowania i BHP

```yaml
kod: A06
poziom: E8+LO
wymaga: "A04; A05"
poglebia: "—"
stan: "○○○"
bylo: "A05"
```

**Cel:** Uczeń ocenia zastosowania i zagrożenia promieniotwórczości.

**Co ma być:**
- medycyna, energetyka, datowanie
- ochrona radiologiczna

**Mamy:** nic — do napisania

**Dlaczego tu:** energetyka jądrowa wymaga energii wiązania, więc zastosowania na koniec

---

## 12. P — Układ okresowy — pogłębienie

_spina wszystko: przewidywanie właściwości z położenia_

#### P01 — Blok s

```yaml
kod: P01
poziom: E8+LO
wymaga: "F06; F11; N03"
poglebia: "P04"
stan: "○○○"
```

**Cel:** Uczeń opisuje litowce i berylowce oraz ich związki.

**Co ma być:**
- właściwości
- reakcje z wodą i tlenem
- najważniejsze związki

**Mamy:** nic — do napisania

#### P02 — Blok p

```yaml
kod: P02
poziom: LO
wymaga: "F06; N02; N04"
poglebia: "P04"
stan: "○○○"
```

**Cel:** Uczeń opisuje pierwiastki bloku p i ich związki.

**Co ma być:**
- borowce do helowców
- metale i niemetale bloku p
- najważniejsze związki

**Mamy:** nic — do napisania

#### P03 — Blok d i metale przejściowe

```yaml
kod: P03
poziom: LO
wymaga: "F07; F08; X01"
poglebia: "P05"
stan: "○○○"
bylo: "P03 + P04"
```

**Cel:** Uczeń opisuje konfiguracje, stopnie utlenienia i związki metali przejściowych.

**Co ma być:**
- konfiguracje bloku d
- zmienne stopnie utlenienia (Cr, Mn, Fe, Cu)
- związki barwne
- kompleksy (wstęp)

**Mamy:** nic — do napisania

**Dlaczego tu:** „blok d” i „metale przejściowe” to prawie ten sam temat

#### P04 — Charakterystyka grup

```yaml
kod: P04
poziom: LO
wymaga: "P01–P03"
poglebia: "P05"
stan: "○○○"
bylo: "P05"
```

**Cel:** Uczeń porównuje grupy i ich typowe właściwości.

**Co ma być:**
- porównanie grup
- podobieństwa i wyjątki

**Mamy:** nic — do napisania

#### P05 — Związki charakterystyczne pierwiastków

```yaml
kod: P05
poziom: LO
wymaga: "P04"
poglebia: "P06"
stan: "○○○"
bylo: "P06"
```

**Cel:** Uczeń zna najważniejsze związki każdej grupy i ich zastosowania.

**Co ma być:**
- katalog związków charakterystycznych
- zastosowania

**Mamy:** nic — do napisania

#### P06 — Trend → właściwość → reaktywność

```yaml
kod: P06
poziom: LO
wymaga: "F06; P01–P05"
poglebia: "—"
stan: "○○○"
bylo: "P07 + P08"
```

**Cel:** Uczeń przewiduje właściwości z położenia w układzie.

**Co ma być:**
- łańcuch: położenie → budowa → właściwości → reakcje (trendy jako OWNER w F06 — tu przewidywanie)

**Mamy:** nic — do napisania

**Dlaczego tu:** stare P07 i P08 opisywały to samo

---

## 13. Uzupełnienia (poza grupami)

| kod | co | mamy |
|---|---|---|
| FIZ-01 | Elektrostatyka (fizyka, pomost do F04 i F11) | `che/md/FIZ01_elektrostatyka.md (gotowa ●●●)` |
| LAB | Zbiór doświadczeń LAB01–24 — przypisane do lekcji przez `wymaga` | `lekcje_md/00/CHE.00.LAB.doswiadczenia.md` |
| REV01 | Powtórka fundamentów z klasy 7 (start klasy 8) | `lekcje_md/00/CHE.00.REV01.powtorka_klasy_7.md` |
| REV02 | Powtórka klasy 8 | `lekcje_md/00/CHE.00.REV02.powtorka_klasy_8.md` |
| REV03–05 | LO podstawowe, LO rozszerzone, zadania przekrojowe | — |
| REV06 | Pomost akademicki / zaawansowana | `lekcje_md/00/CHE.00.REV06.zaawansowana.md` |
| REV07 | Mapa kompetencji i diagnostyka zależności | — |

Materiał wspólny kursu: `lekcje_md/00/CHE.00.W00.wstep.md` (wstęp pakietu v1.1), `lekcje_md/00/CHE.00.S00.system_kursu.md` (system kursu), `lekcje_md/F/CHE.01.F00.wspolne_bloku_F.md` (systemy zadań, powtórek, mistrzostwa i specyfikacja HTML bloku F).

## 14. Mapa kodów v0.1 → v0.3

| v0.1 | teraz | lekcja |
|---|---|---|
| nowa | N01 | Powietrze i gazy |
| N01 | N02 | Tlenki |
| N02 | N03 | Wodorotlenki i zasady |
| N03 | N04 | Kwasy |
| N04 | N05 | Sole |
| N05 | N06 | Wodorki |
| N06 | N07 | Systematyka nieorganiczna |
| N07 | N08 | Mapa przemian „co powstanie?” |
| R05 | R04 | Mol i masa molowa |
| R04 | R05 | Stężenie molowe |
| nowa | R06 | Gazy: objętość molowa |
| R06 | R07 | Stechiometria |
| R07 | R08 | Reagent ograniczający |
| R08 | R09 | Wydajność reakcji |
| J09 | J07 | Ka, Kb i Kw |
| J07 | J08 | Hydroliza soli |
| J08 | J09 | Bufory |
| O01 + część O20 | O01 | Język chemii organicznej |
| O06 | O03 | Izomeria |
| O03 | O04 | Alkeny |
| O04 | O05 | Alkiny |
| O07 | O06 | Spalanie węglowodorów |
| O05 | O07 | Areny |
| nowa | O09 | Fenole |
| nowa | O10 | Aldehydy i ketony |
| O09 | O11 | Kwasy karboksylowe |
| O10 | O12 | Estry |
| O11 + nowe | O13 | Tłuszcze, mydła i detergenty |
| nowa | O14 | Aminy i amidy |
| O12 | O15 | Cukry — monosacharydy |
| O13 | O16 | Cukry — disacharydy |
| O14 | O17 | Cukry — polisacharydy |
| O15 | O18 | Aminokwasy |
| O16 | O19 | Białka — struktura |
| O17 | O20 | Białka — reakcje charakterystyczne |
| nowa | O21 | Polimery i tworzywa |
| O18 | O22 | Witaminy i sole mineralne |
| O19 | O23 | Metabolizm |
| O20 | O24 | Nazewnictwo — procedura zbiorcza |
| O21 | O25 | Mechanizmy reakcji organicznych |
| X01 + X02 | X01 | Reakcje redoks |
| X05 | X02 | Typowe utleniacze i reduktory |
| X06 | X05 | Redoks jonowy |
| X07 | X06 | Redoks w środowisku kwasowym |
| X08 | X07 | Redoks w środowisku zasadowym |
| X09 | X08 | Dysproporcjonowanie i synproporcjonowanie |
| X10 | X09 | Redoks przekrojowy |
| K05 | K01 | Energia reakcji |
| K06 | K02 | Entalpia |
| K10 | K03 | Kalorymetria i przemiany fazowe |
| K01 | K04 | Szybkość reakcji |
| K02 | K05 | Czynniki wpływające na szybkość |
| K03 | K06 | Zderzenia i energia aktywacji |
| K04 | K07 | Kataliza |
| K07 | K08 | Równowaga dynamiczna |
| K08 | K09 | Stała równowagi |
| K09 | K10 | Reguła Le Chateliera |
| A06 | A05 | Energia wiązania jądra |
| A05 | A06 | Zastosowania i BHP |
| P03 + P04 | P03 | Blok d i metale przejściowe |
| P05 | P04 | Charakterystyka grup |
| P06 | P05 | Związki charakterystyczne pierwiastków |
| P07 + P08 | P06 | Trend → właściwość → reaktywność |

Gotowe pliki z dawnymi kodami (do przemianowania jednym skryptem po zatwierdzeniu): `che/md/N01_tlenki.md` → N02, `che/md/N02_wodorotlenki.md` → N03, `che/md/N03_kwasy.md` → N04, `che/md/N04_sole.md` → N05, `che/md/N05_wodorki.md` → N06.

## 15. Decyzje przyjęte domyślnie (do potwierdzenia)

| sprawa | przyjęte | alternatywa |
|---|---|---|
| F10 cienkie | osobno, do rozbudowy | scalić z F11 |
| Powietrze i gazy | nowa lekcja N01 | N00 bez przenumerowania N |
| stary X02 vs X05 | X01 = rozpoznawanie redoks, X02 = katalog utleniaczy | dwie pełne lekcje |
| stare K05 vs K06 | K01 jakościowo (E8), K02 ilościowo (LO) | scalić |
| Mydła i detergenty | sekcja w O13 | osobna lekcja |

## 16. Następne kroki

1. Zatwierdzić decyzje z tabeli wyżej i kolumnę „poziom” (podstawa E8 po 2024).
2. Przemianować gotowe lekcje N (che/md) na nowe kody.
3. Wydzielać kolejne lekcje F do szablonu (F02 → `che/md/`) z plików `lekcje_md/F/` — treść główna + przegląd sekcji „z archiwum”.
4. Rozdzielić stare lekcje zbiorcze v1.1 (R, O, X) na pojedyncze kody przy pisaniu tych lekcji.
