# CHE — spis lekcji: zrobione i planowane

Stan z repo `Repo_Edukacyjny_E8` na 08.10.2026: gałąź `claude/chemia-podzial` (blok F) i `claude/che-lekcje` (nowy silnik modułowy).

**Stopień gotowości**

| znak | znaczenie |
|---|---|
| ●●● | md w szablonie + HTML z `md2html.py` (lekcja działa) |
| ●●○ | md lekcji w szablonie, HTML z niego jeszcze nie zrobiony lub niesprawdzony |
| ●○○ | treść jest tylko w kanonie MASTER v16 (szkic do wydzielenia) |
| ◐○○ | treść w kanonie, ale cienka (do rozbudowy) |
| ○○○ | tylko tytuł w planie |

**Podsumowanie:** z chemii działa 6 lekcji (F01, N01–N05), do tego FIZ-01 z fizyki. F02–F21 istnieją tylko w kanonie, N06–N07 i bloki R…P (82 lekcje) to sam plan.

---

## 01 F — Fundamenty (21 lekcji, kanon v16.0)

Źródło: `chemia/lekcje_md/F_nowe/CHE.01F_FUNDAMENTY_MASTER_v16.0_…md`, plan: `CHE.01.F00.architektura_bloku_F.md`. F00 skreślone, blok F to F01–F21.

### Faza A — Co badamy?

| kod | lekcja | o czym | stan |
|---|---|---|---|
| F01 | Jak myśli chemik | obserwacja vs wniosek, model vs rzeczywistość, 4 poziomy opisu, 5 pytań chemika | ●●● md v1.1 + HTML + pracownia GFX (6 zlewek) |
| F02 | Materia, substancja, pierwiastek, związek, mieszanina | klasyfikacja próbki | ●○○ |
| F03 | Właściwości, stany skupienia, zjawiska, rozdzielanie mieszanin | zjawisko fizyczne vs reakcja, dobór metody rozdzielania | ●○○ |

### Faza B — Z czego to wynika?

| kod | lekcja | o czym | stan |
|---|---|---|---|
| F04 | Atom: Z, A, p, n, e | skład atomu i jonu liczbowo | ●○○ |
| F05 | Izotopy, jony, masa atomowa | izotop / jon / inny pierwiastek, średnia ważona | ●○○ |
| F06 | Układ okresowy | położenie, elektrony walencyjne, trendy | ●○○ |
| F07 | Konfiguracja elektronowa | E8: powłoki; LO: podpowłoki, Hund, Pauli, Cr/Cu | ●○○ |
| F08 | Konfiguracja ↔ okres, grupa, blok | odczyt w obie strony | ●○○ |
| F09 | Wartościowość, ładunek, stopień utlenienia | trzy pojęcia, reguły stopnia utlenienia | ●○○ |

### Faza C — Jak powstaje struktura?

| kod | lekcja | o czym | stan |
|---|---|---|---|
| F10 | Dlaczego atomy się łączą | niższa energia, oktet i jego granice | ◐○○ |
| F11 | Wiązania jonowe, kowalencyjne, metaliczne | typ wiązania → właściwości | ●○○ |
| F12 | Wzory chemiczne | W–K–S–K, indeks/współczynnik/nawias, grupy wieloatomowe | ●○○ |
| F13 | Wzory elektronowe (Lewis) | kropkowe i kreskowe (E8), jony (LO) | ●○○ |
| F14 | Geometria cząsteczek (VSEPR) | domeny, kształt, kąty — całość LO | ●○○ |
| F15 | Polarność i oddziaływania | E8: elektroujemność; LO: polarność cząsteczki | ◐○○ |

### Faza D — Jak opisujemy przemianę?

| kod | lekcja | o czym | stan |
|---|---|---|---|
| F16 | Od obserwacji do modelu reakcji | objawy reakcji → model słowny | ●○○ |
| F17 | Równania reakcji, bilans atomów i ładunku | współczynniki, typy reakcji, warunki | ●○○ |

### Faza E — Integracja

| kod | lekcja | o czym | stan |
|---|---|---|---|
| F18 | Dossier substancji | pełny profil jednej substancji | ◐○○ |
| F19 | Dossier reakcji | pełny opis reakcji z BHP i energią | ◐○○ |
| F20 | Klinika błędów fundamentów | błędy przekrojowe i ich naprawa | ◐○○ |
| F21 | Zadania transferowe i diagnostyka | cały blok w nowym problemie | ◐○○ |

**Archiwum (nieaktualne):** stary podział F00–F09 w `chemia/lekcje_md/F/` oraz `CHEMIA_L001_FUNDAMENTY.html` — zastąpione przez F01–F21.

---

## 02 N — Chemia nieorganiczna

| kod | lekcja | stan |
|---|---|---|
| N01 | Tlenki | ●●● (+ wersja w nowym szablonie modułowym w toku) |
| N02 | Wodorotlenki i zasady | ●●● |
| N03 | Kwasy | ●●● |
| N04 | Sole | ●●● |
| N05 | Wodorki | ●●● |
| N06 | Systematyka nieorganiczna | ○○○ |
| N07 | Mapa przemian nieorganicznych („co powstanie?”) | ○○○ |

## 03 R — Roztwory i stechiometria (wszystko ○○○)

R01 Woda i roztwory · R02 Rozpuszczalność · R03 Stężenie procentowe · R04 Stężenie molowe · R05 Mol i masa molowa · R06 Stechiometria · R07 Reagent ograniczający · R08 Wydajność reakcji

## 04 J — Chemia jonowa (wszystko ○○○)

J01 Dysocjacja · J02 pH i odczyn · J03 Reakcje jonowe · J04 Strącanie · J05 Amfoteryczność · J06 Równowagi kwasowo-zasadowe · J07 Hydroliza soli · J08 Bufory · J09 Ka, Kb, Kw · J10 Iloczyn rozpuszczalności Ksp · J11 Identyfikacja jonów · J12 Miareczkowanie

## 05 O — Chemia organiczna (wszystko ○○○)

O01 Węglowodory — wprowadzenie · O02 Alkany · O03 Alkeny · O04 Alkiny · O05 Areny · O06 Izomeria · O07 Spalanie węglowodorów · O08 Alkohole · O09 Kwasy karboksylowe · O10 Estry · O11 Tłuszcze · O12 Monosacharydy · O13 Disacharydy · O14 Polisacharydy · O15 Aminokwasy · O16 Struktury białek · O17 Reakcje charakterystyczne białek · O18 Witaminy i sole mineralne · O19 Metabolizm · O20 Nazewnictwo organiczne · O21 Mechanizm reakcji organicznej

## 06 X — Redoks (wszystko ○○○)

X01 Stopień utlenienia · X02 Redoks · X03 Bilans elektronowy · X04 Szereg aktywności metali · X05 Utleniacze i reduktory · X06 Redoks jonowy · X07 Redoks w środowisku kwasowym · X08 Redoks w środowisku zasadowym · X09 Dys- i synproporcjonowanie · X10 Redoks przekrojowy

## 07 E — Elektrochemia (wszystko ○○○)

E01 Ogniwo galwaniczne · E02 Potencjały elektrodowe · E03 SEM · E04 Elektroliza · E05 Korozja · E06 Źródła energii i akumulatory

## 08 K — Kinetyka i równowaga (wszystko ○○○)

K01 Szybkość reakcji · K02 Czynniki szybkości · K03 Zderzenia i energia aktywacji · K04 Kataliza · K05 Energia reakcji · K06 Entalpia · K07 Równowaga dynamiczna · K08 Stała równowagi · K09 Le Chatelier · K10 Kalorymetria i przemiany fazowe · K11 Równowaga ilościowa

## 09 A — Chemia jądrowa (wszystko ○○○)

A01 Jądro atomowe · A02 Radioaktywność · A03 Przemiany jądrowe · A04 Okres półtrwania · A05 Zastosowania i BHP · A06 Energia wiązania, deficyt masy

## 10 P — Bloki układu okresowego (wszystko ○○○)

P01 Blok s · P02 Blok p · P03 Blok d · P04 Metale przejściowe · P05 Charakterystyka grup · P06 Związki charakterystyczne · P07 Trendy okresowe jako łańcuch przyczynowy · P08 Trend → właściwość → reaktywność

---

## Uzupełnienia

| kod | co | stan |
|---|---|---|
| FIZ-01 | Elektrostatyka (fizyka) | ●●● |
| LAB01–24 | Zbiór doświadczeń | ○○○ |
| REV00–07 | Powtórki: E7, E8, LO podst./rozsz., zadania przekrojowe, pomost akademicki, mapa kompetencji | ○○○ |

## Liczby

| blok | lekcji | działa | md | kanon | plan |
|---|---|---|---|---|---|
| F | 21 | 1 | — | 20 | — |
| N | 7 | 5 | — | — | 2 |
| R, J, O, X, E, K, A, P | 82 | — | — | — | 82 |
| **razem chemia** | **110** | **6** | — | **20** | **84** |

Do zrobienia w `PLAN_LEKCJI.md`: blok F nadal ma tam stary podział F00–F09 (10 lekcji) — trzeba podmienić na F01–F21.
