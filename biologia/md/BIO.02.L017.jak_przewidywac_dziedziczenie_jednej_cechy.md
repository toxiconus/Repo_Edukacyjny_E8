# L017 — Jak przewidywać dziedziczenie jednej cechy?

## KARTA LEKCJI L017

- Numer: L017
- Tytuł roboczy: Dziedziczenie jednej cechy (Punnett)
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L015 · Następna: L018
- Status treści: jest wykład MD; audyt przy edycji; audyt punktowy W15 — 2026-10-09
- Status HTML: BIOLOGIA_L017_PUNNETT.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Krzyżówka genetyczna.

`[BIO: DIAGRAM type=FLOW]`
`rodzice → gamety → potomstwo → genotyp → fenotyp`
`[/BIO: DIAGRAM]`
@opis Krzyżówka genetyczna daje przewidywania dla modelu i określonych założeń; nie gwarantuje dokładnego rozkładu cech w małej rodzinie.

**Co uczeń ma zauważyć:** najpierw założenia modelu, potem rachunek.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]  
**Poprzednia lekcja:** L016 (kontrola podziałów / nowotwory)  
**Następna lekcja:** L018 (płeć i cechy sprzężone z X)

**Wersja:** v5.0 (2026-09-13) — przebudowa strukturalna: dodano wprowadzenie, pełne wyjaśnienia definicji, logikę narzędzia, osobną sekcję o krzyżówce testowej, ograniczenia Punnett. **Nic nie usunięto** względem v3.8/v4.0/v4.1/v4.2 — wszystko rozbudowano.

---

## Mapa lekcji

| Warstwa | Gdzie w lekcji |
|---------|----------------|
| **[PRZYPOMNIENIE]** | pkt 3 Kompas (L011, L012, L015, L010) |
| **[PODSTAWA E8]** | pkt 5 Ściąga + pkt 6 Wyjaśnienie + pkt 10 Klinika |
| **[TRENING]** | pkt 12–15 (ćwiczenia, test) |
| **[MASTER]** | pkt 8 Poziom ambitny |
| **[ZAAWANSOWANY]** | pkt 9 + pkt 20 |
| **[KONKURS]** | pkt 12D PROBLEM / THINK |
| **[POWTÓRKA]** | pkt 14 Fiszki |

**Most obowiązkowy:** L015 (mejoza → gameta ma 1 allel) → **L017 (Punnett)** → L018 (X-linked).  
**Mosty dodatkowe:** L011 (DNA → gen), L019 (ABO — kodominacja), L020 (mutacje → allele).

---

## 0. Wprowadzenie — o co tu właściwie chodzi? [NOWE]

Wyobraź sobie, że masz dwa psy tej samej rasy. Jeden ma uszy sterczące, drugi opadające. Chcesz wiedzieć: **czy ich szczenięta będą miały uszy sterczące czy opadające?** A może jedne i drugie? W jakich proporcjach?

Albo inaczej: rodzice mają brązowe oczy, a dziecko niebieskie. **Czy to w ogóle możliwe?** Skąd wiadomo, że to nie pomyłka?

Jeszcze inaczej: w rodzinie pojawia się choroba, która „przeskakuje pokolenia". Dziadek chorował, ojciec nie, a syn tak. **Jak to możliwe?**

Wszystkie te pytania sprowadzają się do jednego: **jak przewidzieć, jakie cechy będzie miało potomstwo, jeśli znamy cechy rodziców?**

Właśnie tym zajmuje się **genetyka klasyczna** — a konkretnie **dziedziczenie jednogenowe** (dziedziczenie jednej cechy). Na tej lekcji nauczysz się:

1. **Co to znaczy „cecha dziedziczna"** i jak jest zapisana w DNA.
2. **Jak przewidzieć**, jakie cechy może mieć potomstwo — za pomocą narzędzia zwanego **szachownicą (kwadratem) Punnetta**.
3. **Jak obliczyć prawdopodobieństwo** — i dlaczego „25%" nie znaczy „co czwarte dziecko".
4. **Jak sprawdzić**, czy osobnik o cesze dominującej jest homo- czy heterozygotą (krzyżówka testowa).
5. **Kiedy to narzędzie przestaje działać** (ograniczenia Punnett).

### Skąd ta nazwa — Reginald Punnett

**Reginald Crundall Punnett** (1875–1967) był angielskim genetykiem, jednym z pierwszych, którzy spopularyzowali prawa Mendla w Anglii. Około 1900 r. wymyślił prosty diagram — kwadrat — który pozwala **zobaczyć wszystkie możliwe kombinacje alleli** u potomstwa. Do dziś używa się go na całym świecie.

Punnett był nie tylko twórcą szachownicy. Napisał także **„Mendelism" (1905)** — pierwszy podręcznik o prawach Mendla — i razem z Williamem Batesonem założył **„Journal of Genetics"**, jedno z najstarszych czasopism genetycznych. Ale najbardziej zapamiętano go właśnie za kwadrat, który nosi jego imię.

> **Kluczowa myśl:** Punnett to **narzędzie wizualne**. Nie „wróży" konkretnych dzieci — pokazuje **wszystkie możliwe wyniki i ich prawdopodobieństwa**. To różnica między „co czwarte dziecko będzie chore" (błąd!) a „każde dziecko ma 25% szansy" (prawda).

### Dlaczego to ma znaczenie?

- **W medycynie:** poradnictwo genetyczne — ocena ryzyka chorób dziedzicznych.
- **W rolnictwie:** hodowla odmian o pożądanych cechach.
- **W hodowli zwierząt:** planowanie krzyżówek.
- **W kryminalistyce:** wykluczanie ojcostwa (uproszczone).
- **W codziennym życiu:** zrozumienie, dlaczego dziecko może wyglądać inaczej niż rodzice.

---

## 1. Pytanie przewodnie

Jak przewidywać dziedziczenie jednej cechy na podstawie alleli rodziców?

---

## 2. Cele lekcji (+ 80/20 — wyjaśnione)

Po lekcji uczeń:

- **definiuje** podstawowe pojęcia: gen, allel, genotyp, fenotyp, homozygota, heterozygota, dominujący, recesywny — i **rozumie, skąd się one biorą**,
- **zapisuje i odczytuje** krzyżówkę jednogenową (kwadrat Punnetta),
- **oblicza** stosunki genotypów (1:2:1) i fenotypów (3:1 przy pełnej dominacji),
- **uzasadnia** wynik mejozą (L015) i **rozróżnia** prawdopodobieństwo od „gwarancji kolejności",
- **(ambitny)** zna ideę dominacji niepełnej, kodominacji i testu krzyżowego,
- **(zaawansowany)** rozumie ograniczenia Punnett i potrafi je ominąć rachunkiem prawdopodobieństwa.

### Zasada 80/20 — co naprawdę daje 80% efektu (i dlaczego)

| 20% = 80% efektu | Dlaczego to jest kluczowe |
|---|---|
| **Allel to wersja genu; homo = dwie takie same, hetero = dwie różne** | Bez tego nie odróżnisz AA od Aa i nie zrozumiesz, dlaczego fenotyp bywa mylący |
| **Punnett to tabela: gamety jednego rodzica × gamety drugiego** | To jest **cała mechanika** — reszta to interpretacja |
| **3:1 i 1:2:1** | Najczęstsze wyniki w zadaniach; musisz je rozpoznawać natychmiast |
| **P = 25% ≠ „co czwarte dziecko"** | Najczęstszy błąd w zadaniach i w rozumieniu genetyki |
| **Gameta ma 1 allel, bo mejoza rozdziela homologi** | To łączy L017 z L015 — bez tego Punnett to „magia" |

**Dlaczego to wystarczy?** Bo 90% zadań E8 o dziedziczeniu jednogenowym sprowadza się do: zapisz genotypy → wypisz gamety → zrób Punnett → odczytaj stosunek. Reszta to niuanse.

---

## 3. Co trzeba wiedzieć wcześniej (kompas) · **[PRZYPOMNIENIE]**

- **L011:** DNA to nośnik informacji; informacja jest w kolejności zasad.
- **L012:** chromosomy homologiczne — w komórce ciała masz po jednym chromosomie od każdego rodzica.
- **L015:** mejoza redukuje 2n → n; **gameta dostaje jeden chromosom z pary homologicznej** → **jeden allel z pary genów**.
- **L010:** fenotyp = geny + środowisko + rozwój.

> **Jeśli nie pamiętasz, jak powstają gamety — wróć do L015, sekcja 6B. To fundament Punnett.**

---

## 4. Zacznij od problemu

**Rodzice mają cechę dominującą, dziecko — recesywną. Czy to możliwe? Jakie genotypy?**

**Hipoteza ucznia:** ....................................

**Podpowiedź:** Jeśli dziecko ma cechę recesywną (aa), to **oboje rodzice musieli dać mu „a"**. Więc oboje muszą być co najmniej heterozygotami (Aa). Ale jak to możliwe, że rodzice z cechą dominującą mają dziecko z recesywną? Bo **dominująca nie znaczy „jedyna"** — heterozygota Aa wygląda jak dominująca, ale nosi ukryte „a".

**Po lekcji wróć do hipotezy i sprawdź, czy była trafna.**

---

## 5. Ściąga — poziom podstawowy · **[PODSTAWA E8]**

### 5.1. Skąd się bierze cały zapis — od DNA do allelu

Zacznijmy od początku:

1. **DNA** (L011) to cząsteczka, która przechowuje informację.
2. **Gen** to odcinek DNA, który zawiera informację o jednym produkcie (białku/RNA), a ten produkt wpływa na cechę.
3. **Allel** to **wersja genu**. Ten sam gen może występować w różnych wersjach — np. allel „A" (dominujący) i allel „a" (recesywny).
4. W komórce ciała (2n) masz **dwa allele** tego samego genu — jeden na chromosomie od matki, drugi od ojca (chromosomy homologiczne, L012).
5. W **gamecie** (n) masz **jeden allel** — bo w mejozie I homologi się rozchodzą (L015).

> **To jest cała logika:** dwa allele w komórce ciała → jeden allel w gamecie → Punnett pokazuje, co się stanie, gdy dwa allele się spotkają.

### 5.2. Definicje — pełne wyjaśnienie (nie tylko tabela)

| Termin | Definicja | Co to znaczy w praktyce | Przykład |
|---|---|---|---|
| **Gen** | Odcinek DNA związany z cechą | „Przepis" na białko, które wpływa na cechę | Gen barwy kwiatu |
| **Allel** | Wersja genu | Ten sam gen, ale inna „wersja" | A (czerwony) / a (biały) |
| **Genotyp** | Zestaw alleli | To, co jest w DNA — „litery" | AA, Aa, aa |
| **Fenotyp** | Ujawniona cecha | To, co widać / mierzymy | Czerwony lub biały kwiat |
| **Homozygota** | Dwa takie same allele | AA lub aa | AA — dwa dominujące |
| **Heterozygota** | Dwa różne allele | Aa | Aa — jeden dominujący, jeden recesywny |
| **Dominujący** | Ujawnia się w heterozygocie | Wystarczy jeden allel, by cecha się pojawiła | A w Aa daje czerwony |
| **Recesywny** | Tylko w homozygocie | Potrzeba dwóch, by cecha się pojawiła | aa daje biały |

**Uwaga:** „Dominujący" **nie** znaczy: silniejszy, częstszy, lepszy, zdrowszy. To tylko opis **sposobu ujawniania się** w fenotypie.

### 5.3. Dlaczego AA i Aa mogą wyglądać tak samo?

Przy **pełnej dominacji** allel A „przykrywa" efekt allelu a. Więc:
- AA → fenotyp dominujący
- Aa → fenotyp dominujący (bo A przykrywa a)
- aa → fenotyp recesywny (bo nie ma A)

**Skutek:** z samego wyglądu **nie** odczytasz, czy ktoś to AA, czy Aa. To jest właśnie powód, dla którego istnieje **krzyżówka testowa** (sekcja 7).

### 5.4. Skąd gameta ma jeden allel? (most do L015)

W **mejozie I** chromosomy homologiczne się rozchodzą. Każda gameta dostaje **jeden chromosom z pary** → **jeden allel z pary genów**.

- AA → wszystkie gamety mają A
- aa → wszystkie gamety mają a
- Aa → połowa gamet ma A, połowa ma a (50/50)

**To dlatego w Punnett na brzegach piszemy pojedyncze litery (A, a), a nie pary (Aa).**

### 5.5. Konwencja zapisu

- **Wielka litera** = allel dominujący (A).
- **Mała litera** = allel recesywny (a).
- **Zapis heterozygoty:** zwykle duża litera pierwsza (Aa, nie aA).
- **Zapis homozygoty:** AA lub aa.

To konwencja, nie prawo natury. W innych podręcznikach mogą być inne litery (np. B/b, D/d) — zasada pozostaje ta sama.

### 5.6. Mnemotechniki

| # | Mnemotechnika | Znaczenie |
|---|---|---|
| 1 | **Duża = dominujący, mała = recesywny** | konwencja zapisu (nie „lepszy") |
| 2 | **Homo = te same, hetero = różne** | AA / Aa / aa |
| 3 | **1:2:1 → „jeden AA, dwa Aa, jeden aa"** | genotypy |
| 4 | **3:1 → „trzy dominujące, jeden recesywny"** | fenotypy |
| 5 | **Gameta = 1 litera, nie 2** | most do mejozy |

### 5.7. Tabela zbiorcza — genotyp → fenotyp

| Genotyp | Nazwa | Fenotyp (pełna dominacja) |
|---|---|---|
| AA | homozygota dominująca | cecha dominująca |
| Aa | heterozygota | cecha dominująca (ale nosi ukryte a) |
| aa | homozygota recesywna | cecha recesywna |

---

## 6. Wyjaśnienie od podstaw · **[PODSTAWA E8]**

### 6.1. Po co w ogóle Punnett? (logika narzędzia)

Wyobraź sobie, że masz dwie monety. Każda może wypaść orłem (O) lub reszką (R). Chcesz wiedzieć, **jakie są możliwe wyniki rzutu dwiema monetami**:

| | O | R |
|---|---|---|
| **O** | OO | OR |
| **R** | RO | RR |

To dokładnie ten sam pomysł co Punnett! Tyle że zamiast monet mamy **gamety**, a zamiast orła/reszki — **allele**.

**Punnett to tabela, która pokazuje wszystkie możliwe połączenia gamet.**

### 6.2. Jak zrobić Punnett — krok po kroku

@viz punnett {tryb="A"} | Szachownica Punnetta | wybierz genotypy rodziców
@opis Szachownica 2×2: gamety jednego rodzica w wierszach, drugiego w kolumnach, w polach genotypy potomstwa (AA, Aa, aa), pod spodem udział genotypów i fenotypów w procentach. Wniosek: przy krzyżówce Aa × Aa stosunek fenotypów wynosi 3 : 1, a genotypów 1 : 2 : 1.


1. **Zapisz genotypy rodziców** (np. Aa × Aa).
2. **Wypisz gamety każdego rodzica** (po jednym allelu z pary):
   - Aa → A i a
   - AA → A i A (wszystkie takie same)
   - aa → a i a
3. **Narysuj tabelę:** gamety jednego rodzica u góry, drugiego z boku.
4. **Wypełnij pola:** w każdą kratkę wpisz jeden allel z góry + jeden z boku.
5. **Policz genotypy** (ile AA, ile Aa, ile aa).
6. **Zamień na fenotypy** (pamiętając o dominacji).

### 6.3. Przykład prowadzony — Aa × Aa (pełny tok rozumowania)

**Dane:** Oboje rodzice to heterozygoty Aa (np. czerwone kwiaty, ale noszą ukryty allel biały).

**Krok 1.** Gamety każdego rodzica: A i a.

**Krok 2.** Tabela:

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

**Krok 3.** Genotypy: AA (1), Aa (2), aa (1) → stosunek **1:2:1**.

**Krok 4.** Fenotypy (pełna dominacja): AA i Aa = czerwone, aa = białe → stosunek **3:1**.

**Krok 5.** Prawdopodobieństwa: P(AA) = 1/4, P(Aa) = 2/4 = 1/2, P(aa) = 1/4.

**Wniosek:** 75% potomstwa będzie miało kwiaty czerwone, 25% białe.

### 6.4. Dlaczego 3:1, a nie 2:2? (kluczowe pytanie)

Bo **tylko jedno z czterech pól** daje fenotyp recesywny (aa). Pozostałe trzy (AA, Aa, Aa) dają fenotyp dominujący. To nie „2 dominujące i 2 recesywne" — to „3 dominujące i 1 recesywny".

### 6.5. Dlaczego 1:2:1, a nie 1:1:2?

Bo heterozygota Aa powstaje na **dwa sposoby**:
- A od matki + a od ojca
- a od matki + A od ojca

To dwa różne pola w tabeli, ale **ten sam genotyp** (Aa). Dlatego Aa występuje **dwa razy** częściej niż AA czy aa.

### 6.6. Cztery podstawowe krzyżówki — pełne tabele

#### AA × AA

| | A | A |
|---|---|---|
| **A** | AA | AA |
| **A** | AA | AA |

→ **100% AA** · 100% fenotyp dominujący

#### aa × aa

| | a | a |
|---|---|---|
| **a** | aa | aa |
| **a** | aa | aa |

→ **100% aa** · 100% fenotyp recesywny

#### AA × aa

| | A | A |
|---|---|---|
| **a** | Aa | Aa |
| **a** | Aa | Aa |

→ **100% Aa** · 100% fenotyp dominujący (ale wszyscy to nosiciele)

#### Aa × Aa

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

→ **1 AA : 2 Aa : 1 aa** (genotypy) · **3:1** (fenotypy)

#### Aa × aa (test krzyżowy)

| | A | a |
|---|---|---|
| **a** | Aa | aa |
| **a** | Aa | aa |

→ **1 Aa : 1 aa** · **1:1** (dominujący : recesywny)

### 6.7. Tabela zbiorcza — wyniki krzyżówek

| Rodzice | Potomstwo (genotypy) | Potomstwo (fenotypy) | Po co |
|---|---|---|---|
| AA × AA | 100% AA | 100% dominujący | linia czysta dominująca |
| aa × aa | 100% aa | 100% recesywny | linia czysta recesywna |
| AA × aa | 100% Aa | 100% dominujący | pokolenie F1 u Mendla |
| Aa × Aa | 1:2:1 | 3:1 | F2, klasyka E8 |
| Aa × aa | 1:1 | 1:1 | test krzyżowy |

### 6.8. 6A. Dlaczego?

1. **Dlaczego gameta ma jeden allel?** Bo w mejozie I homologi się rozchodzą (L015).
2. **Dlaczego połączenie gamet jest losowe?** Losowy plemnik × losowa komórka jajowa.
3. **Dlaczego przy Aa × Aa jest 3:1, a nie 2:2?** Cztery równoprawdopodobne pola Punnetta; tylko jedno (aa) daje fenotyp recesywny.
4. **Dlaczego genotypy 1:2:1, a nie 1:1:2?** Heterozygota Aa powstaje na **dwa** sposoby (A od matki + a od ojca **oraz** odwrotnie).

### 6.9. 6B. Krok po kroku — jak zrobić Punnett

1. Zapisz genotypy rodziców.
2. Wypisz gamety każdego rodzica (po jednym allelu z pary).
3. Zbuduj tabelę: gamety jednego rodzica u góry, drugiego z boku.
4. Wypełnij pola (łącz po jednym allelu z każdej strony).
5. Odczytaj genotypy i policz stosunek.
6. Zamień na fenotypy (pamiętając o dominacji).

**Gamety:**
- AA → wszystkie A
- aa → wszystkie a
- Aa → połowa A, połowa a

### 6.10. 6C. Przykład prowadzony — pełny

**Dane:** Krzyżówka Aa × Aa (np. dwa czarne koty, które noszą ukryty allel na rude futro).

**Pytanie:** Jakie jest prawdopodobieństwo, że kocię będzie rude?

**Rozumowanie:**
1. Każdy rodzic Aa → gamety: A i a (po 50%).
2. Punnett:

| | A | a |
|---|---|---|
| **A** | AA (czarny) | Aa (czarny) |
| **a** | Aa (czarny) | aa (rudy) |

3. Genotypy: 1 AA : 2 Aa : 1 aa.
4. Fenotypy: 3 czarne : 1 rudy.
5. P(rudy) = P(aa) = 1/4 = 25%.

**Odpowiedź:** Prawdopodobieństwo, że kocię będzie rude, wynosi 25% — ale to **przy każdym kocięciu osobno**, nie „co czwarte".

### 6.11. 6D. Powiązanie z innymi lekcjami

```
L011 (DNA) → L012 (chromosom) → L015 (mejoza → gameta z 1 allelem)
  → L017 (Punnett) → L018 (płeć / X-linked) → L019 (ABO) → L020 (mutacje)
```

- **L011:** gen = odcinek DNA.
- **L012:** chromosomy homologiczne — dwa allele w komórce ciała.
- **L015:** mejoza → gameta ma jeden allel.
- **L018:** płeć i cechy sprzężone z X — inna „geometria" dziedziczenia.
- **L019:** ABO — wyjątek: 3 allele + kodominacja.
- **L020:** mutacje → nowe allele → zmienność.

---

## 7. Krzyżówka testowa — pełne wyjaśnienie [NOWA SEKCJA]

### 7.1. Problem: nie wiesz, czy osobnik dominujący to AA czy Aa

Masz roślinę o czerwonych kwiatach. Wiesz, że ma **co najmniej jeden allel A**. Ale czy jest:
- **AA** (homozygota dominująca), czy
- **Aa** (heterozygota)?

Z **fenotypu** tego nie odróżnisz — oba wyglądają tak samo (sekcja 5.3).

### 7.2. Rozwiązanie: skrzyżuj z homozygotą recesywną (aa)

To właśnie **krzyżówka testowa** (inaczej: test cross, krzyżówka wsteczna).

**Jeśli testowany osobnik to AA:**

| | A | A |
|---|---|---|
| **a** | Aa | Aa |
| **a** | Aa | Aa |

→ **100% Aa** → **wszystkie dzieci dominujące** (100% czerwonych)

**Jeśli testowany osobnik to Aa:**

| | A | a |
|---|---|---|
| **a** | Aa | aa |
| **a** | Aa | aa |

→ **50% Aa, 50% aa** → **połowa dzieci recesywnych** (50% białych)

### 7.3. Wniosek

- Jeśli w potomstwie **pojawi się choć jedno dziecko z cechą recesywną** → testowany osobnik był **Aa**.
- Jeśli **wszystkie** dzieci mają cechę dominującą → prawdopodobnie **AA** (ale przy małej liczbie potomstwa to tylko sugestia — może być Aa, które przypadkiem nie dało aa).

> **Uwaga praktyczna:** „Wszystkie dzieci dominujące" przy **małej** liczbie potomstwa **nie dowodzi** AA. Dopiero duża próba (dziesiątki, setki) daje pewność statystyczną.

### 7.4. Po co to komu?

- **Rolnictwo:** selekcja odmian homozygotycznych pod względem pożądanych cech (np. odporność na choroby).
- **Hodowla zwierząt:** planowanie krzyżówek w celu uzyskania pożądanych cech.
- **Medycyna:** ocena ryzyka chorób recesywnych u potomstwa.

### 7.5. Przykład praktyczny

**Dane:** Hodowca ma byka o pożądanej cesze dominującej (np. duża masa mięśniowa). Chce wiedzieć, czy byk jest AA (homozygota) czy Aa (heterozygota) — bo tylko AA daje **wszystkim** potomstwu pożądaną cechę.

**Rozwiązanie:** Krzyżuje byka z krowami o cesze recesywnej (aa). Jeśli w potomstwie pojawi się choć jedno cielę bez pożądanej cechy → byk był Aa. Jeśli wszystkie cielęta mają pożądaną cechę → prawdopodobnie AA.

---

## 8. Poziom ambitny · **[MASTER]**

### 8.1. Prawdopodobieństwo ≠ przeznaczenie

P(aa) = 1/4 przy **każdym** dziecku osobno — niezależnie od tego, co było wcześniej.

| Sytuacja | Prawda |
|---|---|
| Rodzina ma już 3 dzieci z cechą dominującą | 4. dziecko **nadal** ma P(aa) = 1/4 |
| „Co czwarte musi być recesywne" | **Fałsz** — to nie kolejka, tylko P |
| Dwoje kolejnych dzieci aa | P = 1/4 × 1/4 = **1/16** (reguła iloczynu) |

**Analogia:** Rzut monetą 4 razy nie gwarantuje 2 orłów i 2 reszek. Tak samo 4 dzieci Aa × Aa nie gwarantuje dokładnie 3:1. Mendel mówił o **dużej liczbie** potomstwa, nie o czwórce dzieci w jednej rodzinie.

### 8.2. Reguła iloczynu i sumy

- **Reguła iloczynu:** P(A i B) = P(A) · P(B) — gdy zdarzenia są niezależne.
- **Reguła sumy:** P(A lub B) = P(A) + P(B) — gdy zdarzenia się wykluczają.

**Przykłady:**
- P(dwoje kolejnych dzieci aa) = 1/4 · 1/4 = **1/16**
- P(dokładnie jedno z dwojga dzieci aa) = 1/4 · 3/4 + 3/4 · 1/4 = **3/8**
- P(co najmniej jedno z dwojga aa) = 1 − P(żadne aa) = 1 − (3/4 · 3/4) = 1 − 9/16 = **7/16**

### 8.3. Zadanie odwrócone

Rodzice z fenotypem dominującym + dziecko recesywne (aa) → **oboje rodzice muszą być Aa × Aa**.

**Dlaczego?** Bo dziecko aa potrzebuje dwóch alleli „a" — po jednym od każdego rodzica. Skoro rodzice mają fenotyp dominujący, ich genotypy to A_, ale skoro dają „a", muszą być Aa.

### 8.4. Ćwiczenie myślowe

Rzut monetą 4 razy nie gwarantuje 2 orłów i 2 reszek — tak samo 4 dzieci Aa × Aa nie gwarantuje dokładnie 3:1.

Możliwe wyniki w rodzinie z 4 dzieci (Aa × Aa):
- 4 dominujące: P = (3/4)⁴ = 81/256 ≈ 32%
- 3 dominujące, 1 recesywne: P = 4 · (3/4)³ · (1/4) = 108/256 ≈ 42%
- 2 dominujące, 2 recesywne: P = 6 · (3/4)² · (1/4)² = 54/256 ≈ 21%
- 1 dominujące, 3 recesywne: P = 4 · (3/4) · (1/4)³ = 12/256 ≈ 5%
- 4 recesywne: P = (1/4)⁴ = 1/256 ≈ 0,4%

**Wniosek:** W małej rodzinie stosunek 3:1 może się nie pojawić — i to jest **normalne**.

---

## 9. Poziom zaawansowany · **[ZAAWANSOWANY]**

### 9.1. Typy dominacji — pełna tabela

| Pojęcie | Idea | Stosunek fenotypów (przykład) |
|---|---|---|
| **Dominacja pełna** | Aa = AA w wyglądzie | Aa × Aa → **3:1** |
| **Dominacja niepełna** | Aa = pośredni (np. różowy kwiat) | Aa × Aa → **1:2:1** |
| **Kodominacja** | oba allele widoczne naraz (np. ABO: AB) | zależnie od alleli |
| **Allele wielokrotne** | więcej niż 2 allele w populacji (Iᴬ, Iᴮ, i) | grupy krwi (L019) |
| **Test krzyżowy** | krzyżówka z **aa** — rozróżnia AA od Aa | AA×aa → 100% Aa; Aa×aa → 1:1 |

### 9.2. Dominacja niepełna — przykład

**Czerwony kwiat (RR) × biały kwiat (rr) → wszystkie różowe (Rr)**

W dominacji niepełnej heterozygota Rr ma fenotyp **pośredni** — nie czerwony, nie biały, ale różowy. Dlatego w pokoleniu F2 (Rr × Rr):

| | R | r |
|---|---|---|
| **R** | RR (czerwony) | Rr (różowy) |
| **r** | Rr (różowy) | rr (biały) |

→ **1:2:1** (czerwony : różowy : biały) — genotyp = fenotyp, bo każdy genotyp ma inny fenotyp.

**Uwaga:** To **model szkolny**. W rzeczywistości barwy kwiatów są często wielogenowe.

### 9.3. Kodominacja — przykład

**ABO (uproszczenie, szczegóły w L019):**
- Allel Iᴬ → antygen A
- Allel Iᴮ → antygen B
- Allel i → brak antygenu

**Kodominacja:** Iᴬ i Iᴮ **oba się ujawniają** w heterozygocie IᴬIᴮ → grupa AB. To nie „mieszanka", ale **współwystępowanie** obu antygenów.

**Różnica kluczowa:**
- **Niepełna dominacja:** Aa = pośredni (np. różowy)
- **Kodominacja:** Aa = oba naraz (np. AB)

### 9.4. Ograniczenia szachownicy Punnetta [NOWE — z ZPE]

Punnett jest świetny dla **1–2 cech**. Ale:

| Liczba cech | Rozmiar tabeli | Praktyczność |
|---|---|---|
| 1 | 2×2 = 4 pola | idealna |
| 2 | 4×4 = 16 pól | dobra |
| 3 | 8×8 = 64 pola | niepraktyczna |
| 4 | 16×16 = 256 pól | koszmar |
| 5+ | 32×32+ | niemożliwa |

**Więcej niż 2 cechy** → używamy **rachunku prawdopodobieństwa**, nie tabeli.

**Czego Punnett nie uwzględnia:**
- **Epistaza** — jeden gen maskuje efekt innego
- **Geny sprzężone** — nie segregują niezależnie (są na tym samym chromosomie)
- **Dziedziczenie poligeniczne** — wiele genów na jedną cechę (np. wzrost, kolor skóry)
- **Wpływ środowiska** — fenotyp = geny + środowisko (L010)
- **Mutacje de novo** — nowe allele, których nie ma u rodziców
- **Niepełna penetracja** — allel jest, ale się nie ujawnia

### 9.5. Alternatywa dla wielu cech — rachunek prawdopodobieństwa

Dla dwóch cech niezależnych (AaBb × AaBb):
- Zamiast tabeli 4×4, można policzyć osobno: P(A_) = 3/4, P(aa) = 1/4 itd.
- P(A_B_) = 3/4 · 3/4 = 9/16
- P(A_bb) = 3/4 · 1/4 = 3/16
- P(aaB_) = 1/4 · 3/4 = 3/16
- P(aabb) = 1/4 · 1/4 = 1/16
- Stosunek: **9:3:3:1** (II prawo Mendla)

### 9.6. Plejotropia i epistaza (poziom olimpijski)

- **Plejotropia** — jeden gen wpływa na wiele cech (np. gen odpowiedzialny za fenyloketonurię wpływa na układ nerwowy i pigmentację).
- **Epistaza** — gen maskuje efekt innego genu (np. gen albinizmu maskuje geny koloru sierści).

---

## 10. Klinika błędów · **[PODSTAWA E8] / [TRENING]**

### 10.1. Tabela błędów

| Błąd | Poprawa | Dlaczego? |
|---|---|---|
| 25% = co czwarte dziecko chore | P przy każdym dziecku | niezależność zdarzeń |
| Heterozygota ujawnia recesywny | dominujący | definicja dominacji |
| Genotyp = fenotyp | różne pojęcia | AA i Aa mogą wyglądać tak samo |
| Duża litera = częstszy allel | konwencja | dominacja ≠ częstość |
| Aa × Aa zawsze 3:1 | tylko dom. pełna | przy niepełnej 1:2:1 |
| Rodzice dominujący → dziecko recesywne niemożliwe | możliwe, jeśli oboje Aa | aa wymaga dwóch a |
| Krzyżówka testowa = zwykła krzyżówka | to krzyżówka z **aa** | ma konkretny cel: rozróżnić AA od Aa |
| Punnett działa dla 5 cech | nie — 32×32 pola | ograniczenia narzędzia |
| „Dominujący" znaczy „lepszy/częstszy" | to tylko opis ujawniania | dominacja ≠ wartość |
| aA to inny genotyp niż Aa | ten sam genotyp | konwencja zapisu |

### 10.2. Klinika 2.0 — cztery pełne przykłady

#### Przykład 1 — „Skoro 25%, to co czwarte dziecko chore"

- **Błąd:** „Skoro P(aa) = 25%, to co czwarte dziecko będzie chore."
- **Znajdź:** Gwarancja kolejności.
- **Popraw:** Każde dziecko osobno 25%.
- **Reguła:** Niezależność zdarzeń.
- **Dlaczego:** Zapłodnienie to osobne zdarzenie — poprzednie dzieci nie wpływają na następne.
- **Podobne:** P(dwoje kolejnych aa) = 1/16.
- **Pułapka:** Rodzina ma już troje dominujących. Czy czwarte „musi" być recesywne? **Nie.**

#### Przykład 2 — „AA i Aa to samo"

- **Błąd:** „AA i Aa to to samo, bo wyglądają tak samo."
- **Znajdź:** Mylenie genotypu z fenotypem.
- **Popraw:** Ten sam fenotyp, różny genotyp.
- **Reguła:** Genotyp ≠ fenotyp.
- **Dlaczego:** Allel dominujący ujawnia się w obu, ale Aa nosi ukryte „a" i może przekazać je potomstwu.
- **Podobne:** Rozróżnij AA od Aa testem krzyżowym.
- **Pułapka:** Czy z fenotypu można odczytać genotyp? **Nie.**

#### Przykład 3 — „Aa × aa daje 3:1"

- **Błąd:** „Aa × aa daje 3:1, tak jak Aa × Aa."
- **Znajdź:** Zły stosunek.
- **Popraw:** 1:1.
- **Reguła:** Stosunek zależy od genotypów rodziców.
- **Dlaczego:** aa daje tylko a; Aa daje A i a — więc połowa dzieci dostanie A (dominujące), połowa a (recesywne).
- **Podobne:** AA × aa → 100% Aa.
- **Pułapka:** Aa × Aa → 3:1, ale tylko przy pełnej dominacji. **Nie każda krzyżówka daje 3:1.**

#### Przykład 4 — „Dominacja niepełna to to samo co kodominacja"

- **Błąd:** „Niepełna dominacja i kodominacja to to samo."
- **Znajdź:** Mylenie dwóch pojęć.
- **Popraw:** Dominacja niepełna → fenotyp **pośredni** (Aa = różowy); kodominacja → **oba allele widoczne naraz** (AB = A i B jednocześnie).
- **Reguła:** Niepełna = mieszanie; kodominacja = współwystępowanie.
- **Dlaczego:** W niepełnej Aa wygląda inaczej niż AA; w kodominacji Aa pokazuje oba naraz.
- **Podobne:** Grupy krwi ABO (kodominacja Iᴬ Iᴮ).
- **Pułapka:** „Niepełna" ≠ „kodominacja" — to dwa różne modele.

#### Przykład 5 — „Punnett dla 4 cech"

- **Błąd:** „Zrobię Punnett dla 4 cech."
- **Znajdź:** Nieznajomość ograniczeń narzędzia.
- **Popraw:** Dla 4 cech tabela ma 16×16 = 256 pól — użyj rachunku prawdopodobieństwa.
- **Reguła:** Punnett dla 1–2 cech; dalej — mnożenie P.
- **Dlaczego:** Rozmiar tabeli rośnie wykładniczo.
- **Podobne:** 3 cechy → 8×8 = 64 pola.
- **Pułapka:** Punnett to narzędzie, nie uniwersalna metoda.

---

## 11. Obserwacja / model

```
Problem: Jakie genotypy potomstwa z Aa × Aa?
Hipoteza: 1:2:1 (genotypy), 3:1 (fenotypy przy pełnej dominacji).
Materiał: kwadrat Punnetta.
Obserwacja: 4 równoprawdopodobne pola.
Wniosek: P(aa)=1/4; fenotyp 3:1.
Ograniczenia: model dotyczy 1 genu i pełnej dominacji.
BHP: brak.
```

**Kwadrat Punnetta nie jest doświadczeniem — to model probabilistyczny.**

### Porównanie: model vs obserwacja

| Typ | Przykład |
|---|---|
| **Obserwacja** | liczenie potomstwa w hodowli, izolacja DNA, preparat mitozy |
| **Model** | Punnett, schemat mejozy, rodowód |

Punnett **przewiduje** prawdopodobieństwa. Obserwacja **sprawdza**, czy przewidywania się zgadzają (przy dużej próbie).

---

## 12. Ćwiczenia · **[TRENING]** (12D → [KONKURS])

### 12A. Mini-check (5 pytań)

1. Co to allel?
2. Co to heterozygota?
3. Co ujawnia się w Aa przy pełnej dominacji?
4. Skąd gameta ma jeden allel?
5. Co znaczy P = 25%?

### 12B. Ćwiczenie prowadzone

**Dane:** Aa × Aa.

**Krok 1.** Gamety: A, a (od każdego rodzica).
**Krok 2.** Punnett: AA, Aa, Aa, aa.
**Krok 3.** Genotypy 1:2:1; fenotypy 3:1; P(aa) = 1/4.

**Spróbuj sam:** AA × aa → ?

### 12C. Ćwiczenia samodzielne

#### A. Podstawa

1. Zdefiniuj: allel, genotyp, fenotyp.
2. Homozygota vs heterozygota — przykład.
3. Aa × Aa — stosunek genotypów i fenotypów.
4. Co to allel dominujący?

#### B. Trening

5. Narysuj Punnett dla AA × aa.
6. Popraw: „25% znaczy, że co czwarte dziecko będzie chore".
7. Rodzice mają fenotyp dominujący, dziecko recesywny. Jakie genotypy rodziców?

#### C. Ambitne

8. P(dwoje kolejnych dzieci aa) w Aa × Aa?
9. Uzasadnij, dlaczego fenotypy w Aa × Aa dają 3:1, a nie 2:2.
10. Po co wykonuje się test krzyżowy?

#### D. Zaawansowane

11. Rodzice dominujący, jedno dziecko recesywne — genotypy rodziców?
12. Czy fenotyp dominujący = AA? Uzasadnij.
13. Jak mejoza (L015) wyjaśnia, że gameta ma jeden allel?
14. P(dokładnie jedno aa z dwojga dzieci) w Aa × Aa?

### 12D. PROBLEM / THINK

Zdrowi rodzice mają dwoje dzieci z cechą recesywną. Czy to przeczy modelowi Aa × Aa? Uzasadnij.

### Drabinka trudności

| Poziom | Zadanie |
|---|---|
| ODTWÓRZ | Definicja allelu. |
| ZASTOSUJ | Oblicz P(aa). |
| WYJAŚNIJ | Dlaczego 3:1? |
| ODKRYJ | Jaki genotyp rodzica? |
| POŁĄCZ | Mejoza + dziedziczenie. |
| ZAKWESTIONUJ | Fenotyp dominujący = AA? |

---

## 13. Odpowiedzi i sposób oceniania

### 12A

1. Wersja genu (A lub a).
2. Osobnik o dwóch różnych allelach (Aa).
3. Allel dominujący (A).
4. Bo w mejozie I homologi się rozchodzą.
5. Prawdopodobieństwo przy każdym dziecku osobno.

### 12B

AA × aa → wszystkie Aa → 100% fenotyp dominujący.

### 12C

**A.**
1. Allel — wersja genu; genotyp — zestaw alleli; fenotyp — ujawniona cecha.
2. Homozygota: AA lub aa; heterozygota: Aa.
3. Genotypy 1:2:1; fenotypy 3:1 (pełna dominacja).
4. Allel, który ujawnia się w heterozygocie (A).

**B.**
5. Wszystkie pola Aa.
6. 25% to prawdopodobieństwo przy każdym dziecku osobno.
7. Oboje Aa (bo tylko wtedy mogą dać „a" dziecku).

**C.**
8. 1/4 · 1/4 = 1/16.
9. Bo tylko jedno z czterech pól (aa) daje fenotyp recesywny.
10. Aby odróżnić AA od Aa (krzyżujemy z aa).

**D.**
11. Oboje Aa.
12. Nie — fenotyp dominujący to AA **lub** Aa. Bez testu nie odróżnisz.
13. W mejozie I homologi się rozchodzą; każda gameta dostaje jeden chromosom z pary → jeden allel.
14. 1/4 · 3/4 + 3/4 · 1/4 = 3/8.

### 12D

Nie przeczy. Przy Aa × Aa każde dziecko ma P(aa) = 1/4. Dwoje kolejnych aa ma prawdopodobieństwo 1/16 — rzadkie, ale całkowicie możliwe. Model nie gwarantuje „3:1 w każdej rodzinie" — mówi o prawdopodobieństwie.

### Sposób oceniania

- **Podstawa:** 1 pkt.
- **Trening:** 1 pkt za wynik, 1 pkt za uzasadnienie.
- **Ambitne:** 2 pkt.
- **Zaawansowane:** 3 pkt.

---

## 14. Fiszki · **[POWTÓRKA]**

| Pytanie | Odpowiedź |
|---|---|
| Allel | Wersja genu |
| Aa × Aa genotypy | 1:2:1 |
| Aa × Aa fenotypy | 3:1 |
| Co znaczy 25%? | P przy każdym dziecku |
| Dominujący | Ujawnia się w heterozygocie |
| Homozygota | AA lub aa |
| Heterozygota | Aa |
| Test krzyżowy | Krzyżówka z aa |
| AA × aa | 100% Aa |
| Aa × aa | 1:1 |
| Dominacja niepełna | 1:2:1 (fenotyp pośredni) |
| Kodominacja | Oba allele widoczne naraz |
| P(dwoje aa)? | 1/16 |
| Ograniczenie Punnett | >2 cechy — niepraktyczne |
| Kto wymyślił Punnett? | Reginald Punnett, ok. 1900 |

---

## 15. Test końcowy (3+2+2+1) · **[TRENING]**

1. (P) Allel / genotyp / fenotyp — definicje.
2. (P) Homozygota vs heterozygota.
3. (P) Aa × Aa — stosunek genotypów i fenotypów.
4. (T) Narysuj Punnett dla AA × aa.
5. (T) Popraw mit o „co czwartym dziecku".
6. (A) P(dwoje dzieci aa) w Aa × Aa?
7. (A) Rodzice dominujący, dziecko recesywne — genotypy rodziców?
8. (Z) Czy fenotyp dominujący = AA? Uzasadnij. Jak to sprawdzić?

### Odpowiedzi

1. Allel = wersja genu; genotyp = zestaw alleli; fenotyp = ujawniona cecha.
2. Homo = AA lub aa; hetero = Aa.
3. Genotypy 1:2:1; fenotypy 3:1 (pełna dominacja).
4. Wszystkie pola Aa (100% fenotyp dominujący).
5. 25% to P przy każdym dziecku osobno — nie kolejka.
6. 1/4 · 1/4 = 1/16.
7. Oboje Aa.
8. Nie — fenotyp dominujący to AA lub Aa. Sprawdzić można testem krzyżowym z aa.

---

## 16. Checklista

- [ ] Znam pojęcia: allel, genotyp, fenotyp, homo/hetero, dominacja.
- [ ] Umiem narysować i odczytać Punnetta.
- [ ] Rozumiem 3:1 i 1:2:1.
- [ ] Wiem, że 25% ≠ gwarancja kolejności.
- [ ] Potrafię wnioskować o genotypach rodziców.
- [ ] Znam ideę testu krzyżowego.
- [ ] Wiem, że dominacja niepełna daje 1:2:1.
- [ ] Rozumiem różnicę: dominacja niepełna ≠ kodominacja.
- [ ] Znam ograniczenia Punnett (ambitny).
- [ ] Wiem, kim był Reginald Punnett.

---

## 17. Mapa pojęć

```
DZIEDZICZENIE 1 GENU
├── allele (wersje genu)
├── genotyp → fenotyp
├── gamety (mejoza → 1 allel)
├── Punnett
│   ├── Aa × Aa → 1:2:1 / 3:1
│   ├── AA × aa → 100% Aa
│   ├── Aa × aa → 1:1 (test krzyżowy)
│   └── ograniczenia (>2 cechy)
├── typy dominacji
│   ├── pełna (3:1)
│   ├── niepełna (1:2:1)
│   └── kodominacja (oba naraz)
└── P (niezależne zdarzenia)
```

---

## 18. Co dalej? Jak się uczyć?

**Następna lekcja:** L018 — płeć i cechy sprzężone z X.

**Most wstecz:** L015 (mejoza → 1 allel w gamecie) + L011 (gen = odcinek DNA) → L017 (Punnett).

### Plan nauki

1. Ściąga.
2. Przerysuj Punnett dla 4 krzyżówek.
3. Mini-check.
4. Ćwiczenia A i B.
5. Fiszki.
6. Test.
7. Powtórka za 1 dzień, 3 dni, tydzień.

### System powtórek (spaced)

| Kiedy | Co | Czas |
|---|---|---|
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki bloku | 10 min |
| +3 dni | klinika + 3 zadania treningowe | 15 min |
| +1 tydzień | mini-test bloku | 20 min |
| +1 miesiąc | mapa pojęć + pułapki | 15 min |

---

## 19. Słownik

| Termin | Definicja |
|---|---|
| Allel | Wersja genu (A / a) |
| Genotyp | Zestaw alleli (AA, Aa, aa) |
| Fenotyp | Ujawniona cecha |
| Homozygota | AA lub aa |
| Heterozygota | Aa |
| Krzyżówka | Zapis możliwych genotypów potomstwa |
| Locus | Miejsce genu na chromosomie |
| Dominacja pełna | Aa = AA w fenotypie |
| Dominacja niepełna | Aa = fenotyp pośredni |
| Kodominacja | Oba allele widoczne naraz |
| Test krzyżowy | Krzyżówka z homozygotą recesywną (aa) |
| Linia czysta | Zespół osobników homozygotycznych |
| Punnett | Diagram pokazujący kombinacje alleli |
| Epistaza | Gen maskuje efekt innego genu |
| Plejotropia | Jeden gen wpływa na wiele cech |
| Poligeniczne | Wiele genów na jedną cechę |

---

## 20. Dodatek zaawansowany · **[ZAAWANSOWANY]**

### 20.1. Test krzyżowy — pełny algorytm

**Cel:** odróżnić AA od Aa u osobnika o fenotypie dominującym.

**Krok 1.** Wybierz partnera: homozygota recesywna (aa).
**Krok 2.** Wykonaj krzyżówkę.
**Krok 3.** Obserwuj potomstwo:
- 100% dominujące → prawdopodobnie AA
- Jakiekolwiek recesywne → na pewno Aa

**Uwaga statystyczna:** przy małej liczbie potomstwa „100% dominujące" może się zdarzyć nawet przy Aa. Potrzebna duża próba.

### 20.2. Krzyżówka dwugenowa (zapowiedź)

**AaBb × AaBb** (dwie cechy niezależne) → **9:3:3:1** (II prawo Mendla).

Szczegóły — w przyszłych lekcjach lub w materiale rozszerzonym.

### 20.3. Plejotropia i epistaza

- **Plejotropia:** jeden gen → wiele cech.
- **Epistaza:** gen maskuje efekt innego genu.

### 20.4. Zadanie olimpijskie

**Pytanie:** Aa × Aa. P(dokładnie jedno z dwojga dzieci aa)?

**Rozwiązanie:** 1/4 · 3/4 + 3/4 · 1/4 = **3/8**.

---

## 21. Połączenia międzyprzedmiotowe

- **Matematyka:** prawdopodobieństwo, stosunki, reguła iloczynu i sumy.
- **Historia:** Gregor Mendel — ojciec genetyki, groszek zwyczajny; Reginald Punnett — twórca szachownicy.
- **Etyka:** poradnictwo genetyczne, choroby dziedziczne.
- **Informatyka:** symulacje krzyżówek, drzewa decyzyjne.

---

## 22. Zadania z życia codziennego

1. Uproszczone krzyżówki jednogenowe są do cech modelowych. Kolor oczu człowieka zależy od wielu genów — nie jest typowym przykładem A/a.
2. Dlaczego grupy krwi dziedziczą się inaczej niż kolor oczu? (Bo ABO to 3 allele + kodominacja — L019.)
3. Jak hodowcy wykorzystują wiedzę o dziedziczeniu? (Dobór sztuczny — L031.)
4. Dlaczego w rodzinie z dzieckiem chorym na mukowiscydozę rodzice „nosiciele" nie są chorzy? (Bo to cecha recesywna — heterozygoty są zdrowe.)
5. Dlaczego w małej rodzinie może nie być dziecka z cechą recesywną, mimo że oboje rodzice są Aa? (Bo P = 25% przy każdym dziecku — może się zdarzyć, że żadne nie będzie aa.)

---

## 23. STATUS LEKCJI (wersja przebudowana)

**Wersja 5.0 (2026-09-13)** — przebudowa „od podstaw do zaawansowanych".

**Zachowano całą treść v3.8/v4.0/v4.1/v4.2.**

**Dodano:**
- sekcję 0 (wprowadzenie — o co chodzi, historia Punnett, dlaczego to ważne),
- pełne wyjaśnienie definicji z kontekstem (sekcja 5.1–5.7),
- logikę narzędzia (dlaczego tabela 2×2 — sekcja 6.1),
- pełny tok rozumowania w przykładach (sekcja 6.3–6.5, 6.10),
- osobną, rozbudowaną sekcję o krzyżówce testowej (sekcja 7),
- ograniczenia Punnett (sekcja 9.4),
- rachunek prawdopodobieństwa jako alternatywę (sekcja 9.5),
- rozbudowaną tabelę błędów (sekcja 10.1) + 5 pełnych przykładów Kliniki 2.0,
- tabelę zbiorczą krzyżówek (sekcja 6.7),
- rozkład prawdopodobieństw w rodzinie z 4 dzieci (sekcja 8.4).

**Zasada:** nic nie usunięto — tylko rozbudowano.

---

**Koniec L017 MASTER v5.0 (przebudowana)**

---

# Podsumowanie — porównanie z poprzednią wersją

| Element | v4.2 | v5.0 |
|---|---|---|
| Wprowadzenie | Brak | Sekcja 0 — historia, kontekst, „po co to" |
| Definicje | Tabela bez wyjaśnień | Tabela + pełne wyjaśnienie + przykłady + „skąd się bierze" |
| 80/20 | Suche hasła | Hasła + wyjaśnienie, dlaczego to 80% efektu |
| Logika Punnett | „Zrób tabelę" | Analogia monet + pełny tok rozumowania |
| Krzyżówka testowa | Wzmianka | Osobna sekcja z pełnym wyjaśnieniem i przykładami |
| Ograniczenia Punnett | Brak | Sekcja 9.4 — kiedy narzędzie zawodzi |
| Rachunek prawdopodobieństwa | Wzmianka | Sekcja 9.5 — alternatywa dla >2 cech |
| Przykłady | Skrótowe | Pełny tok: dane → kroki → wynik → interpretacja |
| Klinika błędów | 6 wierszy | 10 wierszy + 5 pełnych przykładów Kliniki 2.0 |
| Historia | Brak | Reginald Punnett, Mendel, kontekst |
| Rozkład P w rodzinie | Brak | Sekcja 8.4 — rozkład dwumianowy |
| Status | v4.2 | v5.0 — wyraźne oznaczenie przebudowy |

---

HTML lekcji: `BIOLOGIA_L017_PUNNETT.html` (v5.0).

## DOPISEK v5.1 (HTML v5.0 + recenzja)

- **Niepełna vs kodominacja:** niepełna = fenotyp pośredni; kodominacja = oba widać jednocześnie, nie „wymieszane w jeden kolor”.
- Liczba pól Punnetta przy n niezależnych genach (2 allele każdy): **4ⁿ**.
- Test krzyżowy: szkolnie z aa; w hodowli dziś częściej markery DNA.
- Extra poza E8: mtDNA / imprinting jako wyjątki od prostego Mendla; epistaza recesywna bywa **9:3:4**.
- Tabele Punnetta w MD i HTML trzymać jako prawdziwe siatki 2×2 (góra/lewa = gamety).
- Powtórki Aa×Aa w kilku sekcjach są celowe (warstwy); w HTML wystarczy odsyłacz „patrz 6.6”.

### Status L017 (2026-09-20)

MD i HTML zsynchronizowane merytorycznie. Wizualne siatki Punnetta + flip-fiszki zostają w HTML. Nic nie obcinane.

<!-- ==================== END L017 ==================== -->


<!-- ==================== BEGIN L018 ==================== -->


## 23. Doprecyzowanie — prawdopodobieństwo a rzeczywisty wynik (W15)

Dla krzyżówki **Aa × Aa**, przy pełnej dominacji i prostym dziedziczeniu jednego genu, prawdopodobieństwo genotypu `aa` wynosi 1/4 dla każdego kolejnego potomstwa. Nie oznacza to, że w każdej rodzinie z czworgiem dzieci dokładnie jedno będzie `aa`. Wyniki kolejnych poczęć nie „wyrównują” automatycznie wcześniejszych.

Przed rozwiązaniem zadania zapisz założenia: genotypy rodziców, relację dominacji i recesywności oraz czy cecha jest autosomalna i jednogenowa. Dominacja nie oznacza częstszego występowania ani większej wartości biologicznej allelu.

## AUDYT W15 — kontrola merytoryczna i wizualna (2026-10-09, GPT-6)

**Zakres:** kontrola punktowa treści podstawowej, terminologii, typowych pułapek odpowiedzi i opisu schematu. To nie jest niezależna recenzja specjalisty ani pełna walidacja wszystkich zadań.

### Uściślenia do utrzymania w treści
- Przy podawaniu 25% dla aa w krzyżówce Aa × Aa dopisać, że to prawdopodobieństwo dla każdego kolejnego potomstwa przy założeniach modelu, a nie obietnica „jedno na czworo” w każdej rodzinie.
- Przed użyciem krzyżówki ustalić dominację, genotypy rodziców, sposób dziedziczenia i czy zadanie rzeczywiście dotyczy jednej cechy/pojedynczego genu.
- Nie utożsamiać dominacji z częstszym występowaniem, większą „siłą” allelu ani korzyścią biologiczną.

### Status
- Schemat główny otrzymał opis `@opis` z informacją, co przedstawia i jaki wniosek ma wyciągnąć uczeń.
- ✔ Sprawdzone w treści głównej (2026-10-09, Claude): punkty obecne w lekcji lub dopisane do ściągi/kliniki błędów.

## AUDYT W18 — klucz i zadania (2026-10-09, GPT-6)

**Zakres:** kontrola celowana zadań o krzyżówkach, prawdopodobieństwie i dziedziczeniu cech.

- W krzyżówce Punnetta wynik 1:2:1 dotyczy genotypów przy krzyżowaniu Aa × Aa; stosunek fenotypów 3:1 obowiązuje tylko przy pełnej dominacji i założeniach prostego modelu jednogenowego.
- Prawdopodobieństwo dla każdego poczęcia/urodzenia jest liczone od nowa w modelu szkolnym; wynik 25% nie oznacza, że dokładnie jedno na czworo dzieci w konkretnej rodzinie musi mieć dany genotyp.
- Zapis „cecha dominująca” nie oznacza, że jest częstsza, lepsza ani korzystniejsza. Dominacja opisuje relację alleli w określonym modelu fenotypowym.
- Przed oceną odpowiedzi sprawdź, czy treść podaje genotypy rodziców, rodzaj dominacji oraz czy chodzi o genotyp, fenotyp, płeć czy prawdopodobieństwo.
- **Status:** dopisano kontrolę warunków modelu; pełny audyt wszystkich kluczy pozostaje otwarty.
