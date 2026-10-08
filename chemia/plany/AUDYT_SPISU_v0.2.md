---
kod: AUDYT-SPISU
tytul: Audyt spisu 110 lekcji CHE → propozycja v0.2
status: propozycja (nic nie zmienione w kanonie)
data: 2026-10-08
zrodlo: pomysł z zewnętrznego LLM, przeanalizowany i poprawiony; uzupełnia PLAN_SCIEZKI_DYDAKTYCZNE.md
---

# Audyt spisu CHE → v0.2 (propozycja)

Spis 110 lekcji traktujemy jako **v0.1 roboczy**. Ten plik niczego nie zmienia — zbiera propozycje do decyzji. Audyt zrobiony na tytułach i kanonie F v16; 82 lekcje (R…P) mają tylko tytuł, więc ich ocena jest wstępna.

## 1. Ocena pomysłu źródłowego

**Trafne — przyjmuję**
- Spis to wersja robocza, nie „zaklepany” kanon (pkt 12).
- J i R przecinają N, a nie stoją po nim (pkt 5).
- X01 dubluje F09 (pkt 6) — realny dublet.
- Nazewnictwo organiczne (O20) za późno (pkt 7).
- N07 jako mapa przemian dostępna z każdej lekcji N, nie tylko ostatnia lekcja (pkt 4).
- E zależy od X + J + R, nie tylko od poprzedniej grupy (pkt 8).
- Granice F06 ↔ P i F05 ↔ A są dobre (pkt 9–10).

**Co poprawiam / czego brakowało**

| w pomyśle | problem | poprawka |
|---|---|---|
| pkt 1 i 11 (dwie osie: kanon + ścieżka) | to już jest w `PLAN_SCIEZKI_DYDAKTYCZNE.md` | nie dublujemy — ten audyt tylko go uzupełnia |
| pkt 3: F10 i F14 jako „rozwinięcie LO” | oktet/dublet (F10) jest w podstawie E8; F14 faktycznie całe LO | F10 zostaje w E8, ale jako krótki wstęp — kandydat do scalenia z F11 (pkt 3.1) |
| pkt 6: „OWNER / REF / EXPAND / APPLY” bez definicji | nie da się stosować reguły bez opisu | definicja w sekcji 2 |
| pkt 12: 10 kryteriów audytu (A–J) | za dużo do ręcznego stosowania na 110 pozycjach | 5 pytań: brak / dublet / zła grupa / zły rozmiar / prerekwizyty (sekcja 3) |
| pkt 12: pełny audyt przed jakąkolwiek produkcją | ryzyko paraliżu — tygodnie planowania bez nowej lekcji | audyt **równolegle** z próbą na F01 + N02 (ścieżka E8); produkcja wstrzymana tylko dla bloków R…P |
| brak | nie zauważono luk w zakresie E8 | sekcja 3: brakuje m.in. powietrza i gazów, masy cząsteczkowej, mydeł |

## 2. Zasada właściciela pojęcia (OWNER / REF / EXPAND / APPLY)

Każde pojęcie ma **dokładnie jedną** lekcję-właściciela. Pozostałe lekcje odnoszą się do niego jednym z trzech sposobów:

| rola | co robi lekcja | przykład: stopień utlenienia |
|---|---|---|
| OWNER | definiuje i uczy od zera | F09 |
| REF | przypomina ściągą (makro z OWNER), nie uczy ponownie | N01 (ustalanie wzoru tlenku) |
| EXPAND | pogłębia na wyższym poziomie | X07–X08 (bilans w środowisku) |
| APPLY | używa jako narzędzia | X03, E01 |

W frontmatter lekcji: `posiada: [stopien_utlenienia]`, `uzywa: [...]`. Narzędzie wykrywa pojęcie z dwoma właścicielami (= dublet).

## 3. Wyniki audytu (5 pytań: brak · dublet · zła grupa · zły rozmiar · prerekwizyty)

### F — Fundamenty

| # | co | propozycja |
|---|---|---|
| 3.1 | F10 cienkie (≈270 linii kanonu przy średniej ≈700) | scalić z F11 jako jej pierwsza część **albo** rozbudować; decyzja autora |
| 3.2 | F15 cienkie (≈275 linii) | rozbudować o sekcję E8 („podobne rozpuszcza podobne”, woda jako rozpuszczalnik) — mostek do R01 |
| 3.3 | F18–F21 cienkie (130–190 linii) | zostawić krótkie — to lekcje integrujące, nie wykładowe; uzupełnić o zadania |
| 3.4 | F07 + F08 + F09 dla E8 | w ścieżce E8: F07(E8)+F08(E8) jako jedna jednostka czasu, potem F09 — bez zmiany kanonu |
| 3.5 | **brak:** masa cząsteczkowa, stosunek masowy, skład procentowy (E8) | OWNER: F12 (sekcja E8) — mol i masa molowa zostają w R05 (LO) |
| 3.6 | F16–F17: prawo zachowania masy i stałości składu | potwierdzić OWNER = F17 (zachowanie masy), F12 (stałość składu) |

### N — Nieorganiczna

| # | co | propozycja |
|---|---|---|
| 3.7 | **brak:** powietrze i inne gazy (skład powietrza, tlen, azot, CO₂, gazy szlachetne, wodór, zanieczyszczenia) — cały dział IV podstawy E8 | nowa lekcja **N00 Powietrze i gazy** (lub wpięcie do N01/N05 — wtedy obie puchną) |
| 3.8 | N05 wodorki — mało miejsca w E8 | w ścieżce E8 tylko część „wodór”; pełne N05 w LO |
| 3.9 | N07 jako mapa | ustawić jako interaktywny moduł dostępny z N01–N06 + lekcja podsumowująca |
| 3.10 | **brak:** metale i ich reakcje z kwasami / wodą (E8, wspólne z X04) | OWNER: N03 (E8: metal + kwas), EXPAND: X04 (szereg aktywności) |

### R — Roztwory i stechiometria

| # | co | propozycja |
|---|---|---|
| 3.11 | R05 Mol stoi **po** R04 Stężenie molowe | odwrócić: R04 ↔ R05 (stężenie molowe wymaga mola) |
| 3.12 | **brak:** gazy — objętość molowa, prawa gazowe (LO) | nowa lekcja R09 albo sekcja LO w R05 |
| 3.13 | R01–R03 to E8 kl. 7 | w ścieżce E8 przed N02 (rozpuszczanie i stężenie potrzebne do kwasów i zasad) |

### J — Jonowa

| # | co | propozycja |
|---|---|---|
| 3.14 | J01–J04 w E8 żyją w sekcjach N02–N04 | J01, J02 = OWNER pełny (LO); N02/N03 mają sekcje E8 typu REF+wprowadzenie |
| 3.15 | J06 vs J09 (równowagi vs Ka/Kb/Kw) — ryzyko dubletu | J06 = jakościowo, J09 = ilościowo; zapisać granicę w obu |
| 3.16 | J05 amfoteryczność | grupa OK, prerekwizyt: N01 + N02 |

### O — Organiczna

| # | co | propozycja |
|---|---|---|
| 3.17 | O20 Nazewnictwo na końcu | nazewnictwo jako warstwa: każda lekcja klasy związków ma swoją sekcję nazw (REF do O01); O20 → „Nazewnictwo — procedura zbiorcza” (LO), O01 zostaje właścicielem podstaw |
| 3.18 | **brak (LO):** aldehydy i ketony, aminy, amidy, fenole, polimery | dopisać O22–O26 (kody tymczasowe) |
| 3.19 | **brak (E8, do weryfikacji z podstawą 2024):** mydła i detergenty, kwasy tłuszczowe | sekcja w O09/O11 albo osobna lekcja |
| 3.20 | O06 Izomeria po alkenach i alkinach | przesunąć po O02 (izomeria łańcuchowa już przy alkanach), pełna wersja LO |
| 3.21 | O18 Witaminy, O19 Metabolizm — bardziej biologia | oznaczyć jako wspólne z BIO (OWNER w biologii, tu REF), nie pisać dwa razy |

### X — Redoks

| # | co | propozycja |
|---|---|---|
| 3.22 | X01 Stopień utlenienia = dublet F09 | X01 → **„Rozpoznawanie redoks po zmianie stopni utlenienia”** (APPLY); definicja tylko w F09 |
| 3.23 | X02 Redoks vs X05 Utleniacze i reduktory — duże nakładanie | scalić X02 + X05 **albo** X05 → „Typowe utleniacze i reduktory (katalog)” |
| 3.24 | X10 Redoks przekrojowy | jak F21 — lekcja integrująca, zostaje |

### E, K, A, P

| # | co | propozycja |
|---|---|---|
| 3.25 | E — prerekwizyty z trzech grup | E01 wymaga: X03, J01, R04 — zapisać w frontmatter |
| 3.26 | K05 Energia reakcji vs K06 Entalpia — dublet | scalić **albo** K05 = jakościowo (E8: egzo/endo), K06 = ilościowo (LO) |
| 3.27 | K10 Kalorymetria po równowagach | przesunąć po K06 (temat energii, nie równowagi) |
| 3.28 | A01 Jądro vs F04/F05 | F04/F05 = OWNER składu i izotopów; A01 = EXPAND (siły jądrowe, stabilność) |
| 3.29 | P07 vs P08 vs F06 (trendy) — potrójne nakładanie | scalić P07 + P08; F06 = czytanie trendu (OWNER), P = przewidywanie (EXPAND) |

## 4. Bilans propozycji v0.2

| zmiana | liczba |
|---|---|
| nowe lekcje (N00, R09, O22–O26 + ew. mydła) | 7–8 |
| scalenia (F10→F11?, X02+X05, K05+K06?, P07+P08) | 2–4 |
| zmiana roli bez scalenia (X01, O20) | 2 |
| zamiany kolejności (R04↔R05, O06, K10) | 3 |
| **spis po v0.2** | **≈113–116 lekcji** |

Kody: przy scaleniu kod znika z kanonu (zostaje w archiwum z odnośnikiem „→ X02”); nowe lekcje dostają kolejne wolne numery w grupie — **nie przenumerowujemy istniejących**.

## 5. Kolejność prac (poprawiona)

1. Ten audyt → decyzje autora przy pozycjach oznaczonych „albo” (3.1, 3.7, 3.19, 3.23, 3.26).
2. **Równolegle:** próba ścieżki E8 na F01 → N02 (z `PLAN_SCIEZKI_DYDAKTYCZNE.md` §6) — sprawdza, czy model zależności działa w praktyce.
3. Spis v0.2 w `CHE_SPIS_LEKCJI.md` + podmiana bloku F w `PLAN_LEKCJI.md`.
4. Mapa właścicieli pojęć — tylko dla F i N (istniejące treści).
5. Weryfikacja ścieżek E8 z aktualną podstawą programową (po zmianach 2024).
6. Kanon v1.0 → dopiero wtedy produkcja bloków R…P.

## 6. Decyzje do podjęcia (autor)

- [ ] F10: scalić z F11 czy rozbudować?
- [ ] Powietrze i gazy: nowa N00 czy sekcje w N01/N05?
- [ ] X02 + X05: scalić czy rozdzielić rolami?
- [ ] K05 + K06: scalić czy rozdzielić E8/LO?
- [ ] Mydła i detergenty: osobna lekcja czy sekcja O11?
