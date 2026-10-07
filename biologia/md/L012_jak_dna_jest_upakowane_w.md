# L012 — Jak DNA jest upakowane w chromosomach?

## KARTA LEKCJI L012

- Numer: L012
- Tytuł roboczy: Jak DNA jest upakowane
- Dział: Genetyka
- Poziom: klasa 8 — [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY]
- Poprzednia: L011 · Następna: L013
- Status treści: jest wykład MD; audyt przy edycji
- Status HTML: BIOLOGIA_L012_CHROMOSOMY.html
- Szablon: karta + sekcje 0–22 jak L015; brakującą sekcję oznaczać `STATUS: DO UZUPEŁNIENIA` (nie przesuwać numerów)
- Zasada: nic nie wycinać; treść dopisywać poniżej karty



## WARSTWA WIZUALNA — specyfikacja MD pod przyszły HTML

**Główna plansza:** Upakowanie DNA.

`[BIO: DIAGRAM type=FLOW]`
`DNA → chromatyna → chromosom → chromatydy`
`[/BIO: DIAGRAM]`

**Co uczeń ma zauważyć:** X nie oznacza automatycznie dwóch chromosomów.

**Zasada projektowa:** grafika ma objaśniać treść, a nie zastępować wyjaśnienie tekstowe.

**Dział:** Genetyka  
**Poziomy:** podstawa · trening · ambitny · zaawansowany  
**Warstwy:** [PRZYPOMNIENIE] · [PODSTAWA E8] · [TRENING] · [MASTER] · [ZAAWANSOWANY] · ([KONKURS])  
**Poprzednia lekcja:** L011  
**Następna lekcja:** L013  
**Źródło synchronizacji:** `BIO_012_v08_jak_DNA_jest_upakowane_w_chromosomach.html` v8.1

> **Zasada redakcyjna tej wersji:** treść wcześniejszego L012 zostaje zachowana, a elementy dodane lub doprecyzowane w HTML v8.1 są przeniesione do MD jako treść merytoryczna. Interaktywne widgety HTML są tutaj opisane jako modele/ćwiczenia, a nie jako kod.

---

## 0. Wprowadzenie + historia + minimum konieczne

### O co tu właściwie chodzi?

W lekcji L011 poznajesz DNA — cząsteczkę, która przechowuje informację genetyczną. Tutaj pojawia się problem:

**DNA jednej komórki ludzkiej ma około 2 metrów długości w fazie G1**, jeśli rozciągnąć cały materiał DNA, a musi zmieścić się w jądrze o średnicy kilku mikrometrów.

Po replikacji ilość DNA w komórce przed podziałem jest około dwukrotnie większa — można mówić o około **4 metrach DNA** w całej komórce, mimo że liczba chromosomów nie zwiększyła się.

To nie oznacza, że DNA jest wrzucone do jądra jak kłębek. DNA jest wielokrotnie organizowane i upakowywane z udziałem białek, dzięki czemu:

- mieści się w jądrze,
- nie tworzy przypadkowego kłębowiska,
- może być kopiowane,
- może być odczytywane,
- a podczas podziału może zostać sprawnie rozdzielone do komórek potomnych.

Odpowiedź prowadzi przez kolejne poziomy organizacji materiału genetycznego — aż do silnie skondensowanych chromosomów widocznych podczas podziału.

### Trzy rzeczy, które trzeba wiedzieć na starcie

1. **Chromosomy są w komórce cały czas.**  
   Nie „pojawiają się” dopiero w mitozie. W interfazie materiał chromosomowy jest zwykle mniej skondensowany, dlatego nie widać wyraźnych struktur w kształcie pałeczek lub X.

2. **Replikacja nie zwiększa liczby chromosomów.**  
   Po replikacji wzrasta liczba chromatyd i cząsteczek DNA, ale w typowej komórce człowieka nadal mamy 46 chromosomów.

3. **W anafazie mitozy liczba chromosomów w całej dzielącej się komórce chwilowo wynosi 92.**  
   Dzieje się tak dlatego, że chromatydy siostrzane rozdzielają się i każda z nich staje się osobnym chromosomem jednochromatydowym. Po zakończeniu podziału każda komórka potomna ma 46 chromosomów.

### Historia odkrycia chromosomów — minimum kontekstu

| Rok | Badacz / wydarzenie | Znaczenie |
|---|---|---|
| 1842 | Carl Nägeli | obserwacje struktur („ciałek”) w jądrze komórkowym roślin |
| 1879 | Walther Flemming | badania struktur jądrowych i wprowadzenie terminu „chromatyna” |
| 1888 | Wilhelm Waldeyer | wprowadzenie terminu „chromosom” |
| 1902 | Walter Sutton i Theodor Boveri | rozwój chromosomowej teorii dziedziczenia |
| 1956 | Joe Hin Tjio i Albert Levan | ustalenie prawidłowej liczby chromosomów człowieka: 46 |

**To jest materiał kontekstowy, nie rdzeń E8.**

### Zatrzymaj się: minimum konieczne

Jeżeli masz zapamiętać tylko najważniejszy rdzeń przed dalszą nauką:

- chromosomy są obecne przez cały czas, ale najlepiej widoczne podczas podziału,
- po replikacji człowiek nadal ma 46 chromosomów, ale 92 chromatydy i 92 cząsteczki DNA,
- **liczbę chromosomów wyznaczamy według liczby centromerów**,
- w anafazie mitozy cała dzieląca się komórka ma chwilowo 92 chromosomy,
- po zakończeniu mitozy każda komórka potomna ma 46 chromosomów.

---

## 1. Pytanie przewodnie

**Jak bardzo długa cząsteczka DNA mieści się w małym jądrze i jak jest zorganizowana podczas podziału?**

---

## 2. Cele lekcji

### [PODSTAWA E8]

Po tej lekcji uczeń:

- wyjaśnia, czym jest chromosom,
- rozróżnia chromosom przed i po replikacji,
- podaje liczbę chromosomów człowieka: **46 = 23 pary**,
- rozróżnia autosomy (pary 1–22) i chromosomy płci,
- zna szkolny model XX/XY,
- rozumie pojęcia chromatyda i centromer,
- liczy chromosomy, chromatydy i cząsteczki DNA według reguły centromerów,
- potrafi uwzględnić anafazę w zadaniu dotyczącym liczby chromosomów.

### [MASTER]

Uczeń:

- wyjaśnia, dlaczego po replikacji liczba chromosomów się nie zmienia,
- rozróżnia chromatynę i chromosom,
- rozróżnia chromosomy homologiczne i chromatydy siostrzane,
- rozumie, dlaczego kształt „X” nie oznacza dwóch chromosomów.

### [ZAAWANSOWANY]

Uczeń:

- zna pojęcia kariotyp i kariogram,
- zna ideę nukleosomu,
- zna histony,
- zna ramiona p i q,
- rozumie aneuploidię i nondysjunkcję,
- potrafi liczyć dla dowolnej liczby diploidalnej `2n`, a nie tylko dla człowieka.

### Zasada 80/20

| 20% = 80% efektu | Dlaczego |
|---|---|
| 46 chromosomów = 23 pary | podstawowa liczba dla człowieka |
| Chromatyda + centromer | podstawa wszystkich zadań liczbowych |
| Liczba chromosomów = liczba centromerów | najważniejsza reguła |
| Po replikacji: 46 / 92 / 92 | chroni przed błędem „92 chromosomy” |
| Anafaza: chwilowo 92 chromosomy w całej komórce | chroni przed błędem „46 zawsze” |
| Homologiczne ≠ siostrzane | fundament dalszej genetyki |

---

## 3. Co trzeba wiedzieć wcześniej (kompas) · [PRZYPOMNIENIE]

### L011 — DNA

- DNA jest nośnikiem informacji genetycznej,
- nukleotydy tworzą nić DNA,
- obowiązuje komplementarność A–T i C–G,
- DNA ma strukturę podwójnej helisy.

### L001 — komórka

- jądro komórkowe zawiera większość DNA komórki eukariotycznej,
- DNA jest zorganizowane w obrębie materiału chromosomowego.

---

## 4. Zacznij od problemu

W jednej komórce człowieka znajduje się około **2 m DNA w fazie G1**. Po replikacji ilość DNA jest około dwukrotnie większa, czyli około **4 m** w całej komórce przed podziałem.

A mimo to DNA nadal musi zmieścić się w jądrze o średnicy kilku mikrometrów.

**Pytania:**

1. Jak DNA może zmieścić się w tak małej przestrzeni?
2. Dlaczego podczas podziału widzimy wyraźne „pałeczki”, skoro DNA jest obecne także wcześniej?
3. Dlaczego po replikacji nie mówimy o 92 chromosomach?
4. Dlaczego w anafazie liczba chromosomów w całej dzielącej się komórce może wynosić 92?

**Hipoteza ucznia:**  
....................................................................

**Podpowiedź:** pomyśl o bardzo długiej nici, która musi być uporządkowana i wielokrotnie złożona, ale jednocześnie musi pozostać dostępna dla procesów zachodzących w komórce.

---

# 5. Ściąga — definicje precyzyjne · [PODSTAWA E8]

## 5.1. Co to chromosom?

**Chromosom to uporządkowana struktura zbudowana z DNA i białek, głównie histonów.**

W szkolnym opisie:

- przed replikacją chromosom zawiera **jedną cząsteczkę DNA**,
- po replikacji jeden chromosom ma **dwie chromatydy siostrzane**, a więc dwie cząsteczki DNA połączone w obszarze centromeru,
- chromosomy są obecne w komórce cały czas,
- podczas podziału stają się bardzo silnie skondensowane i dlatego są łatwiej widoczne.

> **Nie myl istnienia chromosomu z jego widocznością.**  
> „Nie widzę wyraźnego chromosomu” nie znaczy „chromosomu nie ma”.

### Najważniejsza korekta pojęciowa

Chromosom **nie zawsze oznacza jedną cząsteczkę DNA**.

- przed replikacją: 1 chromosom → 1 cząsteczka DNA,
- po replikacji: 1 chromosom → 2 chromatydy → 2 cząsteczki DNA,
- po rozdzieleniu chromatyd: każda dawna chromatyda staje się osobnym chromosomem jednochromatydowym.

---

## 5.2. Chromatyna — co to właściwie jest?

**Chromatyna to DNA połączone z białkami, przede wszystkim histonami, o różnym stopniu kondensacji.**

W interfazie znaczna część chromatyny jest mniej skondensowana niż podczas mitozy. Ułatwia to dostęp do wielu genów.

Nie całe DNA jest jednak jednakowo luźne:

- niektóre fragmenty pozostają silniej upakowane,
- stopień upakowania może się różnić w różnych obszarach,
- stopień kondensacji wpływa na dostępność DNA dla procesów komórkowych.

Przed podziałem i w trakcie podziału kondensacja chromatyny wzrasta.

### Ważne

**Chromatyna nie występuje wyłącznie w interfazie.**

Chromosom metafazowy także jest zbudowany z chromatyny — jest ona wtedy maksymalnie skondensowana.

---

## 5.2a. Chromatyna i chromosom — nie są przeciwieństwami

| Pojęcie | Co opisuje? |
|---|---|
| **Chromatyna** | DNA połączone z białkami, o określonym stopniu kondensacji |
| **Chromosom** | odrębnie zorganizowana jednostka materiału chromosomowego |
| **Chromosom metafazowy** | silnie skondensowana postać materiału chromosomowego |

Najkrócej:

> **Chromatyna opisuje materiał i jego upakowanie, a chromosom — jedną zorganizowaną jednostkę tego materiału.**

Nie są to dwie różne substancje.

---

## 5.3. Jak DNA się upakowuje?

### Ważne zastrzeżenie do modelu

W szkolnych materiałach można spotkać schemat:

```text
DNA
↓
nukleosomy
↓
włókno chromatyny
↓
pętle chromatyny
↓
silnie skondensowana chromatyna
↓
chromosom
```

To **model dydaktyczny**, a nie dosłowna instrukcja przedstawiająca każdy etap organizacji chromatyny w żywej komórce.

Współczesna wiedza pokazuje, że organizacja chromatyny jest dynamiczna i trójwymiarowa. Nie wszystkie etapy tworzą jeden sztywny, jednakowy łańcuch.

Na poziomie E8 najważniejsze jest:

1. DNA wiąże się z białkami, m.in. histonami.
2. Powstają nukleosomy.
3. Chromatyna może być różnie skondensowana.
4. Przed podziałem chromosomy ulegają silnej kondensacji.
5. Silna kondensacja ułatwia ich uporządkowane rozdzielenie.

### Uproszczony obraz poziomów upakowania

```text
DNA → nukleosomy → wyższe poziomy organizacji chromatyny
→ pętle i domeny → silna kondensacja → chromosom metafazowy
```

W niektórych podręcznikach pojawia się termin **„włókno 30 nm”** lub model **„solenoidu”**. Należy traktować je jako uproszczone modele organizacji chromatyny, a nie jako jedyny dokładny opis jej struktury w żywej komórce.

---

## 5.4. Chromatyda — definicja precyzyjna

**Chromatyda to jedna kopia DNA należąca do chromosomu.**

Po replikacji:

- powstają dwie kopie,
- są one połączone w obszarze centromeru,
- nazywamy je **chromatydami siostrzanymi**.

Każda chromatyda zawiera **jedną cząsteczkę DNA**.

Po rozdzieleniu w anafazie każda dawna chromatyda staje się **osobnym chromosomem jednochromatydowym**.

### Uwaga językowa

W zadaniach szkolnych słowo „chromatyda” najczęściej oznacza jedną z dwóch chromatyd siostrzanych chromosomu po replikacji.

Po anafazie bezpieczniej mówić:

> **chromosom jednochromatydowy**

---

## 5.5. Ten sam chromosom w trzech sytuacjach

### Przed replikacją

```text
1 chromosom
1 chromatyda
1 cząsteczka DNA
1 centromer
```

### Po replikacji

```text
1 chromosom
2 chromatydy siostrzane
2 cząsteczki DNA
1 centromer
```

### Po rozdzieleniu chromatyd — anafaza

```text
2 chromosomy jednochromatydowe
2 chromatydy
2 cząsteczki DNA
2 centromery
```

### Najważniejsze

**To, ile jest chromosomów, zależy od liczby centromerów w danym momencie.**

---

## 5.6. Co znaczy „23 pary chromosomów”? · pary homologiczne

W typowej komórce somatycznej człowieka występują:

**46 chromosomów = 23 pary.**

W każdej parze homologicznej:

- jeden chromosom pochodzi od matki,
- drugi od ojca,
- chromosomy mają podobną budowę,
- zawierają geny dotyczące tych samych cech w odpowiadających sobie miejscach,
- mogą jednak zawierać różne allele.

### Nie myl dwóch rodzajów „par”

**Chromosomy homologiczne:**

```text
od mamy ↔ od taty
```

**Chromatydy siostrzane:**

```text
kopia ↔ kopia
tego samego chromosomu po replikacji
```

### Kluczowe rozróżnienie

> **Homologiczne = podobne chromosomy od różnych rodziców.**  
> **Siostrzane = kopie tego samego chromosomu powstałe w replikacji.**

---

## 5.7. Kariotyp i kariogram

### Kariotyp

**Kariotyp to zestaw chromosomów obecnych w komórce**, opisywany m.in. liczbą chromosomów i chromosomami płci.

Przykłady:

- `46, XX`
- `46, XY`
- `47, XX, +21`
- `47, XY, +21`
- `45, X`
- `47, XXY`

### Kariogram

**Kariogram to uporządkowany obraz lub schemat chromosomów**, zwykle zestawionych parami.

Mnemonika:

```text
kario-TYP = zestaw
kario-GRAM = obraz
```

> W części podręczników termin „kariotyp” bywa używany szerzej, także na określenie przedstawienia chromosomów. W tej lekcji przyjmujemy wygodne rozróżnienie: **kariotyp = zestaw, kariogram = jego obraz**.

---

## 5.8. XX/XY — typowy model szkolny

W typowym szkolnym modelu:

```text
XX → płeć żeńska
XY → płeć męska
```

Komórka jajowa typowo wnosi chromosom **X**.

Plemnik może wnieść:

- **X** → zygota XX,
- **Y** → zygota XY.

Dlatego w tym uproszczonym modelu rodzaj chromosomu płci wniesionego przez plemnik decyduje, czy powstanie zygota XX czy XY.

> Rozwój płci człowieka jest biologicznie bardziej złożony niż sam zapis XX/XY. Na poziomie E8 stosujemy model szkolny.

---

## 5.9. Mnemotechniki

| # | Mnemotechnika | Znaczenie |
|---|---|---|
| 1 | **46 = 44 + XX/XY** | 22 pary autosomów + para chromosomów płci |
| 2 | **Licz według centromerów** | najważniejsza reguła liczenia |
| 3 | **Chromatyda = jedna z dwóch kopii** | po replikacji |
| 4 | **XX / XY** | typowy szkolny model płci |
| 5 | **2n = 46, n = 23** | diploidalność / haploidalność |
| 6 | **Chromatyna = DNA + białka** | materiał o różnym stopniu kondensacji |
| 7 | **Homologiczne = mama + tata** | chromosomy homologiczne |
| 8 | **Siostrzane = kopie** | chromatydy siostrzane |
| 9 | **X ≠ 2 chromosomy** | X zwykle przedstawia jeden chromosom po replikacji |
| 10 | **Anafaza = rozdzielenie** | po rozdzieleniu chromatyd powstają chromosomy jednochromatydowe |

---

## 5.10. Tabela zbiorcza — chromosom, chromatyda, centromer

| Termin | Definicja | Kluczowe skojarzenie |
|---|---|---|
| **Chromatyna** | DNA + białka, o różnym stopniu kondensacji | materiał |
| **Chromosom** | uporządkowana jednostka materiału chromosomowego | jednostka |
| **Chromatyda** | jedna kopia DNA należąca do chromosomu | kopia |
| **Chromatydy siostrzane** | dwie kopie tego samego chromosomu po replikacji | kopie połączone |
| **Centromer** | wyspecjalizowany obszar chromosomu; po replikacji uczestniczy w utrzymaniu połączenia chromatyd | liczenie |
| **Kinetochor** | struktura białkowa tworząca się w obrębie centromeru; miejsce przyłączenia mikrotubul wrzeciona | podział |
| **Nukleosom** | DNA nawinięte na oktamer histonów | upakowanie |

### Doprecyzowanie centromeru i kinetochoru

Centromer nie powinien być przedstawiany po prostu jako „kropka, do której przyczepia się wrzeciono”.

Precyzyjniej:

> **W obrębie centromeru tworzy się kinetochor, do którego przyłączają się mikrotubule wrzeciona podziałowego.**

W zadaniach szkolnych nadal używamy praktycznej reguły:

> **liczba chromosomów = liczba centromerów.**

---

## 5.11. Skąd wiemy, że liczymy właśnie centromery?

Reguła „liczba chromosomów = liczba centromerów” nie jest przypadkowym sposobem liczenia.

### Eksperyment myślowy

Załóżmy, że po replikacji zaczniemy liczyć chromatydy zamiast chromosomów.

1. Przed replikacją: 46 chromosomów i 46 chromatyd.
2. Po replikacji: 46 chromosomów, ale 92 chromatydy.
3. W anafazie: chromatydy rozdzielają się i każda staje się osobnym chromosomem, więc cała komórka ma chwilowo 92 chromosomy.

Gdybyśmy utożsamiali chromosom z chromatydą, liczba „chromosomów” zmieniałaby się przy samym kopiowaniu DNA.

Dlatego w szkolnym liczeniu korzystamy z centromerów:

> **Jednostkę chromosomu śledzimy przez centromer.**

### Analogia — zszyta książka

Wyobraź sobie dwie kopie książki zszyte razem w jednym miejscu.

- dwie części = dwie chromatydy,
- wspólne miejsce połączenia = centromer,
- przed rozdzieleniem opisujemy całość jako jeden chromosom,
- po rozdzieleniu powstają dwa chromosomy jednochromatydowe.

Analogia jest tylko pomocą. Nie należy traktować jej dosłownie jako budowy chromosomu.

---

## 5.12. Ograniczenia modeli

Modele pomagają liczyć i rozumieć, ale upraszczają rzeczywistość.

Nie pokazują m.in.:

- pełnej trójwymiarowej organizacji chromatyny,
- wszystkich białek uczestniczących w organizacji DNA,
- dynamicznej zmiany stopnia kondensacji,
- wszystkich szczegółów budowy kinetochoru,
- całej różnorodności chromosomów między organizmami.

Dlatego:

> **model ma być wystarczająco prosty do nauki, ale nie powinien być mylony z pełnym obrazem biologicznym.**

---

# 6. Wyjaśnienie od podstaw — z anafazą · [PODSTAWA E8]

## 6.1. Dlaczego DNA musi być upakowane?

DNA jest bardzo długie w stosunku do rozmiaru jądra.

Upakowanie:

- zmniejsza zajmowaną przestrzeń,
- porządkuje materiał,
- chroni DNA,
- umożliwia kontrolowany dostęp do jego fragmentów,
- przed podziałem pomaga przygotować materiał do rozdzielenia.

Nie jest to jednak „kompresja informacji” w sensie informatycznym.

> **Upakowanie zmienia rozmieszczenie przestrzenne DNA, ale nie usuwa informacji genetycznej.**

---

## 6.2. Reguła centromerów — najważniejsza rzecz w tej lekcji

### Algorytm

Gdy widzisz schemat:

**Krok 1.** Znajdź centromery.  
**Krok 2.** Policz centromery.  
**Krok 3.** Ta liczba = liczba chromosomów.  
**Krok 4.** Następnie policz chromatydy.  
**Krok 5.** Następnie policz cząsteczki DNA.  
**Krok 6.** Sprawdź, czy pytanie dotyczy całej komórki, jednego bieguna czy jednej komórki potomnej.

### Reguła

```text
LICZBA CHROMOSOMÓW = LICZBA CENTROMERÓW
```

### Najczęstsza pułapka

```text
92 chromatydy ≠ 92 chromosomy
```

po replikacji.

---

## 6.2a. „Centromerometr” — ćwiczenie liczenia

W tym miejscu HTML wykorzystuje interaktywny model. W MD można odtworzyć jego logikę ręcznie.

### Przypadek A

```text
X   X   X   X
```

Jeśli każda struktura X ma jeden centromer:

- 4 centromery,
- 4 chromosomy,
- 8 chromatyd,
- 8 cząsteczek DNA.

### Przypadek B

```text
I   I   I   I   I   I
```

Każda pojedyncza struktura I ma jeden centromer:

- 6 centromerów,
- 6 chromosomów,
- 6 chromatyd,
- 6 cząsteczek DNA.

### Przypadek C

```text
X   X   X
```

- 3 chromosomy,
- 6 chromatyd,
- 6 cząsteczek DNA,
- 3 centromery.

---

## 6.2b. „X nie znaczy dwa”

Struktura w kształcie X zwykle przedstawia:

```text
        chromatyda
             \
              X
             /
        chromatyda
             |
          centromer
```

Czyli:

> **1 chromosom po replikacji = 2 chromatydy + 1 centromer.**

Dwa chromosomy powstają dopiero po rozdzieleniu chromatyd.

---

## 6.2c. Nakładki pojęć — jedna struktura, kilka sposobów patrzenia

Dla chromosomu po replikacji możemy jednocześnie powiedzieć:

- to **1 chromosom**,
- składa się z **2 chromatyd siostrzanych**,
- zawiera **2 cząsteczki DNA**,
- ma **1 centromer**,
- jest silnie skondensowany, jeśli obserwujemy go w metafazie.

To nie są sprzeczne informacje. Każda odpowiada na inne pytanie.

---

## 6.3. Tabela „policz sam” — z anafazą

| Stan komórki | Chromosomy | Chromatydy | Cząsteczki DNA | Co się dzieje? |
|---|---:|---:|---:|---|
| G1, przed S | 46 | 46 | 46 | każdy chromosom ma jedną chromatydę |
| Po fazie S | **46** | **92** | **92** | DNA zostało zreplikowane |
| G2 | **46** | **92** | **92** | komórka przygotowuje się do podziału |
| Metafaza | **46** | **92** | **92** | chromosomy są silnie skondensowane |
| Anafaza — cała komórka | **92** | **92** | **92** | chromatydy rozdzieliły się |
| Anafaza — jeden biegun | **46** | **46** | **46** | do każdego bieguna zmierza pełny zestaw |
| Po mitozie — jedna komórka potomna | **46** | **46** | **46** | każda komórka wraca do stanu jednochromatydowego |

### Bardzo ważna uwaga

W tabelach trzeba odróżniać:

- **całą komórkę**,
- **jeden biegun**,
- **jedną komórkę potomną**.

To samo zdarzenie może dawać różne liczby zależnie od obszaru, o który pyta zadanie.

---

## 6.4. Najczęstsze pytanie: „Czy w anafazie są 92 chromosomy?”

**Tak — jeśli pytanie dotyczy całej dzielącej się komórki człowieka w anafazie mitozy.**

Dlaczego?

1. Przed anafazą mamy 46 chromosomów.
2. Każdy ma dwie chromatydy.
3. Chromatydy siostrzane rozdzielają się.
4. Każda ma teraz własny centromer.
5. Każda staje się osobnym chromosomem jednochromatydowym.
6. W całej komórce jest więc chwilowo **92 chromosomy**.
7. Przy każdym biegunie znajduje się po **46 chromosomów**.
8. Po zakończeniu podziału każda komórka potomna ma **46 chromosomów**.

### Najważniejsze pytanie pomocnicze

> **Czy zadanie pyta o całą komórkę, czy o jeden biegun?**

---

## 6.4a. Zanim policzysz — wskaż obszar

Przed wykonaniem obliczenia dopisz sobie:

```text
[CAŁA KOMÓRKA]
albo
[JEDEN BIEGUN]
albo
[JEDNA KOMÓRKA POTOMNA]
```

Dopiero potem licz.

To prosta technika, która usuwa dużą część błędów.

---

## 6.4b. Mapa liczebności

### Człowiek — 2n = 46

```text
G1:
46 chromosomów
46 chromatyd
46 DNA

PO REPLIKACJI:
46 chromosomów
92 chromatydy
92 DNA

METAFAZA:
46 chromosomów
92 chromatydy
92 DNA

ANAFAZA — CAŁA KOMÓRKA:
92 chromosomy
92 chromatydy
92 DNA

ANAFAZA — JEDEN BIEGUN:
46 chromosomów
46 chromatyd
46 DNA

PO MITOZIE — JEDNA KOMÓRKA:
46 chromosomów
46 chromatyd
46 DNA
```

---

## 6.4c. Kalkulator liczenia — dowolne 2n

Można stosować ten sam algorytm do dowolnego organizmu.

### Jeżeli organizm ma `2n = 8`

Przed S:

```text
8 chromosomów
8 chromatyd
8 DNA
```

Po S / metafaza:

```text
8 chromosomów
16 chromatyd
16 DNA
```

Anafaza — cała komórka:

```text
16 chromosomów
16 chromatyd
16 DNA
```

Anafaza — jeden biegun:

```text
8 chromosomów
8 chromatyd
8 DNA
```

### Reguła ogólna dla `2n`

Przed S:

```text
chromosomy = 2n
chromatydy = 2n
DNA = 2n
```

Po S / metafaza:

```text
chromosomy = 2n
chromatydy = 4n
DNA = 4n
```

Anafaza — cała komórka:

```text
chromosomy = 4n
chromatydy = 4n
DNA = 4n
```

Anafaza — jeden biegun:

```text
chromosomy = 2n
chromatydy = 2n
DNA = 2n
```

---

## 6.4d. Czy liczba chromosomów zależy od organizmu?

Tak.

Przykłady liczby diploidalnej:

| Organizm | 2n |
|---|---:|
| Muszka owocowa | 8 |
| Groszek zwyczajny | 14 |
| Kukurydza | 20 |
| Człowiek | 46 |
| Szympans | 48 |
| Pies | 78 |

### Wniosek

**Liczba chromosomów jest cechą gatunkową, ale nie jest miarą „złożoności” organizmu.**

Pies ma więcej chromosomów niż człowiek, ale nie oznacza to, że jest „bardziej złożonym” organizmem.

---

## 6.5. Oś cyklu komórkowego — wersja do nauki

```text
G1
↓
replikacja DNA — faza S
↓
G2
↓
profaza
↓
metafaza
↓
anafaza
↓
telofaza
↓
komórki potomne
```

### Kluczowe punkty

**G1:**

```text
46 chromosomów / 46 chromatyd / 46 DNA
```

**Po S / G2 / metafaza:**

```text
46 chromosomów / 92 chromatydy / 92 DNA
```

**Anafaza — cała komórka:**

```text
92 chromosomy / 92 chromatydy / 92 DNA
```

**Po podziale — jedna komórka potomna:**

```text
46 chromosomów / 46 chromatyd / 46 DNA
```

---

## 6.5a. Trening na małej liczbie — 2n = 6

Zamiast człowieka użyjmy organizmu z `2n = 6`.

### Przed S

```text
6 chromosomów
6 chromatyd
6 DNA
```

### Po S

```text
6 chromosomów
12 chromatyd
12 DNA
```

### Metafaza

```text
6 chromosomów
12 chromatyd
12 DNA
```

### Anafaza — cała komórka

```text
12 chromosomów
12 chromatyd
12 DNA
```

### Anafaza — jeden biegun

```text
6 chromosomów
6 chromatyd
6 DNA
```

**Ćwiczenie:** wykonaj to samo dla `2n = 10`.

---

## 6.6. Autosomy i chromosomy płci

U człowieka:

```text
46 chromosomów
= 44 autosomy
+ 2 chromosomy płci
```

czyli:

```text
22 pary autosomów
+ 1 para chromosomów płci
```

Typowy szkolny zapis:

```text
46, XX
46, XY
```

Gamety są haploidalne:

```text
n = 23
```

---

## 6.7. Przykład prowadzony

**Dane:** komórka somatyczna człowieka w metafazie mitozy.

**Pytanie:** ile ma chromosomów, chromatyd i cząsteczek DNA?

### Krok 1

Człowiek:

```text
2n = 46
```

### Krok 2

Metafaza występuje po replikacji:

```text
każdy chromosom ma 2 chromatydy
```

### Krok 3

Liczymy centromery:

```text
46 centromerów → 46 chromosomów
```

### Krok 4

Chromatydy:

```text
46 × 2 = 92
```

### Krok 5

Cząsteczki DNA:

```text
92
```

### Odpowiedź

**46 chromosomów · 92 chromatydy · 92 cząsteczki DNA.**

---

## 6.8. Powiązanie z innymi lekcjami

```text
L011 — DNA
      ↓
L012 — chromosom, chromatyna, chromatyda, centromer
      ↓
L013 — replikacja DNA (faza S)
      ↓
L014 — mitoza
      ↓
L015 — mejoza
      ↓
L017 — dziedziczenie
      ↓
L018 — chromosomy płci / X-linked
      ↓
L020 — mutacje i aneuploidia
```

---

# 7. Poziom ambitny · [MASTER]

## 7.1. Dlaczego upakowanie jest potrzebne?

Upakowanie nie służy tylko „oszczędzaniu miejsca”.

Materiał chromosomowy musi:

- być uporządkowany,
- być chroniony,
- pozostawać dostępny dla ekspresji genów,
- zostać skopiowany,
- zostać właściwie rozdzielony podczas podziału.

Dlatego komórka wykorzystuje różne stopnie kondensacji.

---

## 7.2. Chromatyna vs chromosom

| Cecha | Chromatyna | Chromosom |
|---|---|---|
| Materiał | DNA + białka | DNA + białka |
| Stopień kondensacji | zmienny, często mniejszy w interfazie | silnie skondensowany podczas podziału |
| Widoczność | mniej wyraźna | wyraźniejsza podczas podziału |
| Funkcja | umożliwia organizację i dostęp do DNA | uporządkowana jednostka materiału chromosomowego |

### Najważniejszy wniosek

To nie jest:

```text
chromatyna ALBO chromosom
```

lecz:

```text
chromosom jest zorganizowaną, skondensowaną postacią materiału chromosomowego,
którego podstawą jest chromatyna.
```

---

## 7.3. Inaktywacja X — ciekawostka

U wielu komórek osób z chromosomami XX jeden z chromosomów X ulega silnemu wyciszeniu. Powstaje skondensowana struktura nazywana **ciałkiem Barra**.

To materiał poza rdzeniem E8.

---

## 7.4. Dlaczego X nie oznacza dwóch chromosomów?

Schemat:

```text
X
```

najczęściej oznacza:

```text
1 chromosom
2 chromatydy
1 centromer
```

Nie:

```text
2 chromosomy
```

Dwa chromosomy otrzymujemy po rozdzieleniu chromatyd w anafazie.

---

# 8. Poziom zaawansowany · [ZAAWANSOWANY]

## 8.1. Nukleosom

**Nukleosom** jest podstawową jednostką organizacji chromatyny.

W uproszczonym opisie:

```text
DNA
↓
owija się wokół oktameru histonów
↓
NUKLEOSOM
```

Oktamer tworzą po dwa białka:

- H2A,
- H2B,
- H3,
- H4.

Wokół rdzenia histonowego owinięty jest odcinek około **147 par zasad DNA**.

Nukleosomy mogą być połączone odcinkami DNA linkerowego.

---

## 8.2. Ramiona chromosomu — p i q

Centromer dzieli chromosom na dwa ramiona:

- **p** — krótsze,
- **q** — dłuższe.

To terminologia używana m.in. w opisie kariotypów i lokalizacji genów.

---

## 8.3. Aneuploidia

**Aneuploidia = nieprawidłowa liczba pojedynczych chromosomów.**

Przykłady:

| Kariotyp / zapis | Przykład |
|---|---|
| 47, +21 | trisomia 21 |
| 45, X | monosomia X |
| 47, XXY | dodatkowy chromosom X |
| 47, +18 | trisomia 18 |

Najczęstszym mechanizmem prowadzącym do aneuploidii jest **nondysjunkcja** — nieprawidłowe rozchodzenie się chromosomów lub chromatyd podczas mejozy.

---

## 8.4. Nondysjunkcja

Uproszczony schemat:

```text
błąd w mejozie
↓
gameta n+1 lub n−1
↓
zapłodnienie prawidłową gametą n
↓
zygota 2n+1 lub 2n−1
↓
aneuploidia
```

### Nondysjunkcja w mejozie I

Nie rozchodzą się prawidłowo chromosomy homologiczne.

W uproszczonym przypadku po kolejnych podziałach mogą powstać:

```text
2 gamety n+1
2 gamety n−1
```

### Nondysjunkcja w mejozie II

Błąd dotyczy rozdzielenia chromatyd siostrzanych w jednej z komórek po mejozie I.

To dobry temat do dalszej pracy w L015 i L020.

---

## 8.5. Poliploidia

**Poliploidia = zwielokrotnienie całych zestawów chromosomów**, np.:

```text
3n
4n
```

Jest szczególnie ważna u roślin.

Nie należy mylić:

```text
aneuploidia → zmiana liczby pojedynczych chromosomów
poliploidia → zmiana liczby całych zestawów
```

---

## 8.6. Telomery

**Telomery** to specjalne sekwencje znajdujące się na końcach chromosomów.

Pomagają chronić końce chromosomów i wiążą się z problemem skracania końców DNA podczas kolejnych replikacji.

**Telomeraza** jest enzymem, który może wydłużać telomery w określonych typach komórek.

To materiał poza rdzeniem E8.

---

# 9. Klinika błędów · [PODSTAWA E8] / [TRENING]

## 9.1. Tabela najczęstszych błędów

| Błąd | Poprawa | Dlaczego? |
|---|---|---|
| „Po replikacji jest 92 chromosomy.” | 46 chromosomów, 92 chromatydy | liczymy centromery |
| „Chromatyda to ramię chromosomu.” | chromatyda ≠ ramię | różne pojęcia |
| „XX/XY to autosomy.” | XX/XY = chromosomy płci | autosomy = pary 1–22 |
| „Gameta ma 46 chromosomów.” | gameta ma 23 | mejoza redukuje 2n → n |
| „Chromosomy pojawiają się dopiero w mitozie.” | są obecne także w interfazie | zmienia się stopień kondensacji |
| „W anafazie nadal są chromatydy siostrzane.” | po rozdzieleniu powstają chromosomy jednochromatydowe | siostrzane oznacza połączone kopie |
| „Człowiek zawsze ma 46 chromosomów w każdej chwili.” | zależy od fazy i zakresu pytania | w anafazie cała komórka ma chwilowo 92 |
| „Każdy chromosom wygląda jak X.” | X to zwykle schemat chromosomu po replikacji | kształt zależy od kondensacji i etapu |
| „Kariotyp = zdjęcie.” | kariotyp = zestaw; kariogram = obraz | dwa pojęcia |
| „Liczba chromosomów mówi, jak złożony jest organizm.” | nie | liczba chromosomów nie jest miarą złożoności |

---

## 9.2. Klinika 2.0 — pełne przykłady

### Błąd 1: „W metafazie jest 92 chromosomy”

**Znajdź:**  
Mylenie chromatyd z chromosomami.

**Popraw:**  
46 chromosomów, 92 chromatydy.

**Reguła:**  
Liczymy centromery.

**Dlaczego:**  
Replikacja tworzy kopie DNA, ale nie rozdziela centromerów.

**Pułapka:**  
„Więcej DNA = więcej chromosomów” — fałsz.

---

### Błąd 2: „Chromosomy pojawiają się w mitozie”

**Znajdź:**  
Mylenie istnienia z widocznością.

**Popraw:**  
Chromosomy są obecne cały czas, ale w interfazie materiał chromosomowy jest zwykle mniej skondensowany.

**Reguła:**  
Kondensacja zmienia widoczność.

**Pułapka:**  
„Nie widać” ≠ „nie ma”.

---

### Błąd 3: „W anafazie nadal są chromatydy siostrzane”

**Znajdź:**  
Pomieszanie metafazy z anafazą.

**Popraw:**  
W anafazie chromatydy siostrzane rozdzielają się. Każda staje się chromosomem jednochromatydowym.

**Reguła:**  
Przed rozdzieleniem = chromatydy siostrzane. Po rozdzieleniu = chromosomy jednochromatydowe.

---

### Błąd 4: „46 to zawsze liczba chromosomów”

**Poprawny model:**

```text
G1 → 46
po S → 46
metafaza → 46
anafaza, cała komórka → 92
anafaza, jeden biegun → 46
po mitozie, jedna komórka → 46
gameta → 23
```

---

### Błąd 5: „X oznacza dwa chromosomy”

**Poprawa:**  
Zwykle struktura X oznacza jeden chromosom po replikacji.

```text
1 chromosom
2 chromatydy
1 centromer
```

---

### Prawda czy fałsz?

> „Jeżeli na rysunku widzę strukturę X, to zawsze są to dwa chromosomy.”

**Fałsz.**

W szkolnym schemacie X zwykle przedstawia jeden chromosom po replikacji.

---

# 10. Obserwacja / model · [TRENING]

## 10.1. Model liczenia

**Problem:**  
Jak zmienia się liczba chromatyd i DNA przy stałej liczbie chromosomów?

**Hipoteza:**  
Po replikacji przybywa chromatyd i DNA, ale nie przybywa centromerów.

**Obserwacja/model:**  
46 centromerów → 46 chromosomów.  
92 chromatydy → 92 cząsteczki DNA.

**Wniosek:**  
Liczba chromosomów = liczba centromerów.

**Ograniczenia:**  
Schemat nie pokazuje pełnej organizacji chromatyny, histonów, kinetochoru ani trójwymiarowej struktury jądra.

**BHP:**  
Brak przy pracy z modelem papierowym lub cyfrowym.

---

## 10.2. Wirtualne doświadczenie — kariotyp

Przykładowa procedura laboratoryjna może obejmować:

1. pobranie odpowiedniego materiału biologicznego,
2. uzyskanie komórek dzielących się,
3. zatrzymanie ich w metafazie,
4. wybarwienie chromosomów,
5. wykonanie obrazu mikroskopowego,
6. uporządkowanie chromosomów parami,
7. otrzymanie kariogramu.

W praktyce laboratoryjnej wykorzystuje się odpowiednie procedury i substancje blokujące wrzeciono podziałowe.

> **BHP:** kolchicyna jest substancją silnie toksyczną. Nie wolno jej używać w samodzielnych doświadczeniach szkolnych. Informacja ma charakter biologiczny, nie instruktażowy.

---

# 11. Ćwiczenia · [TRENING]

## 11A. Mini-check

1. Co to chromosom?
2. Ile chromosomów ma typowa komórka somatyczna człowieka?
3. Co to chromatyda?
4. Co to centromer?
5. Czym różnią się chromosomy homologiczne od chromatyd siostrzanych?
6. Co oznacza zapis 2n = 46?

### Odpowiedzi skrócone

1. Uporządkowana struktura DNA i białek.
2. 46.
3. Jedna kopia DNA należąca do chromosomu.
4. Wyspecjalizowany obszar chromosomu; w zadaniach służy jako praktyczna podstawa liczenia chromosomów.
5. Homologiczne pochodzą z różnych rodzicielskich zestawów; siostrzane są kopiami tego samego chromosomu po replikacji.
6. Diploidalna liczba chromosomów wynosi 46.

---

## 11B. Ćwiczenie prowadzone — komórka po replikacji

**Dane:**  
Komórka somatyczna człowieka po fazie S.

**Pytania:**

- Ile chromosomów?
- Ile chromatyd?
- Ile cząsteczek DNA?

### Tok rozumowania

1. Człowiek ma `2n = 46`.
2. Replikacja podwoiła DNA.
3. Powstały po dwie chromatydy na każdy chromosom.
4. Centromery nie zostały jeszcze rozdzielone.
5. Dlatego:

```text
46 chromosomów
92 chromatydy
92 cząsteczki DNA
```

---

# 11C. Ćwiczenia samodzielne

## A. Podstawa

1. Co to chromosom?
2. Ile chromosomów ma człowiek?
3. Co to centromer?
4. Co to chromatyda?
5. Co oznacza XX i XY w typowym modelu szkolnym?

## B. Trening

6. Po replikacji: ile chromatyd ma typowa komórka człowieka?
7. Popraw zdanie: „W metafazie jest 92 chromosomy”.
8. Co to autosomy?
9. Co oznacza `2n = 46`?
10. Ile centromerów ma komórka `2n = 10` w metafazie?

## C. Ambitne

11. Dlaczego liczba chromosomów nie rośnie po replikacji?
12. Dlaczego DNA nie zawsze jest maksymalnie skondensowane?
13. Uzupełnij tabelę:

| Etap | Chromosomy | Chromatydy | DNA |
|---|---:|---:|---:|
| G1 | | | |
| po S | | | |
| metafaza | | | |
| anafaza — cała komórka | | | |

14. Komórka człowieka ma 46 chromosomów, 46 cząsteczek DNA i nie ma par chromatyd siostrzanych. Podaj co najmniej jeden możliwy etap cyklu.

## D. Zaawansowane

15. Co to kariotyp? Podaj przykład.
16. Co to kariogram? Czym różni się od kariotypu?
17. Co to aneuploidia? Podaj przykład.
18. Ile chromatyd ma komórka `2n = 10` po fazie S?
19. Dlaczego pies z `2n = 78` nie jest przez to „bardziej złożony” od człowieka?

---

# 11D. Czytasz schemat, nie zgadujesz · [KONKURS]

### Zadanie 1

Na rysunku widzisz **6 struktur w kształcie X**. Każda ma jeden centromer.

Ile jest:

- chromosomów,
- chromatyd,
- centromerów?

**Model odpowiedzi:**

```text
6 centromerów
→ 6 chromosomów
→ 12 chromatyd
```

---

### Zadanie 2

Na rysunku widzisz **12 pojedynczych struktur I**, które rozchodzą się do dwóch biegunów.

Ile chromosomów ma cała komórka?

**Odpowiedź:** 12.

**Dlaczego?**

Każda pojedyncza struktura ma własny centromer. Jest to model anafazy.

---

### Zadanie 3

Organizm ma `2n = 8`.

W metafazie mitozy:

- ile chromosomów?
- ile chromatyd?
- ile DNA?

**Odpowiedź:**

```text
8 chromosomów
16 chromatyd
16 DNA
```

---

### Zadanie 4

Organizm ma `2n = 8`.

W anafazie:

- ile chromosomów w całej komórce?
- ile przy jednym biegunie?

**Odpowiedź:**

```text
cała komórka → 16
jeden biegun → 8
```

---

# 11E. Wykrywanie braku informacji

### Zadanie 5

Komórka człowieka ma **92 cząsteczki DNA**.

**Pytanie:** Ile ma chromosomów?

**Odpowiedź: nie da się odpowiedzieć bez znajomości etapu cyklu komórkowego.**

Możliwe sytuacje:

- po fazie S / G2 / metafaza → 46 chromosomów i 92 DNA,
- anafaza — cała komórka → 92 chromosomy i 92 DNA.

### Reguła

> Ta sama liczba cząsteczek DNA może odpowiadać różnej liczbie chromosomów, jeśli zmieni się etap cyklu.

---

### Zadanie 6 — wykrywanie fazy

Komórka ma:

- 12 chromosomów,
- 24 cząsteczki DNA,
- 12 centromerów.

Czy można jednoznacznie stwierdzić, że jest w metafazie?

**Nie.**

Dane pasują do okresu po replikacji, np.:

- końca fazy S,
- G2,
- profazy,
- metafazy.

Aby rozpoznać metafazę, potrzebna jest dodatkowa informacja, np. że chromosomy ustawiają się w płaszczyźnie równikowej.

---

### Zadanie 7 — oceń wypowiedź

Uczeń mówi:

> „W anafazie komórka ma 92 chromosomy, więc człowiek ma wtedy 92 chromosomy.”

**Ocena:** pierwsza część może być prawdziwa, druga jest błędna.

Jeżeli pytamy o **całą dzielącą się komórkę człowieka w anafazie mitozy**, rzeczywiście ma ona chwilowo 92 chromosomy.

Nie oznacza to jednak, że typowa komórka somatyczna człowieka ma przez cały czas 92 chromosomy.

---

## 11F. Przełącznik błędu — wersja tekstowa

### Sytuacja

```text
X   X   X   X
```

Każda struktura ma jeden centromer.

**Ile chromosomów?**

**4.**

Nie 8.

**Dlaczego?**

```text
4 centromery = 4 chromosomy
8 chromatyd = 8 kopii DNA
```

---

## 11G. Dopasuj pojęcie do opisu

1. DNA + histony w mniej zwartej formie → **chromatyna**
2. Jedna kopia DNA należąca do chromosomu → **chromatyda**
3. Obszar chromosomu, w którym tworzy się kinetochor → **centromer**
4. DNA owinięte wokół ośmiu histonów → **nukleosom**
5. Uporządkowany obraz chromosomów → **kariogram**
6. Zestaw chromosomów w komórce, np. 46, XX → **kariotyp**

---

## 11H. Drabinka trudności

| Poziom | Zadanie |
|---|---|
| ODTWÓRZ | Ile chromosomów ma człowiek? |
| ZASTOSUJ | Policz chromosomy i chromatydy po replikacji. |
| WYJAŚNIJ | Dlaczego liczymy centromery? |
| ODKRYJ | W jakiej fazie jest komórka z 92 chromatydami? |
| POŁĄCZ | Połącz replikację z liczbą chromatyd. |
| ZAKWESTIONUJ | Czy z podanych danych da się jednoznacznie ustalić fazę? |

---

# 12. Odpowiedzi i sposób oceniania

1. **Chromosom** — uporządkowana struktura DNA + białek.
2. **46** — 23 pary.
3. **Chromatyda** — jedna kopia DNA należąca do chromosomu.
4. **Centromer** — wyspecjalizowany obszar chromosomu; w obrębie centromeru tworzy się kinetochor.
5. **XX / XY** — typowy szkolny model chromosomów płci.
6. Po replikacji: **46 chromosomów, 92 chromatydy, 92 DNA**.
7. W metafazie nadal **46 chromosomów**, ponieważ liczymy centromery.
8. DNA jest mniej skondensowane w części interfazowych obszarów, co ułatwia dostęp do genów.
9. Reguła: **liczba chromosomów = liczba centromerów**.
10. `2n = 10` w metafazie → **10 chromosomów i 20 chromatyd**.
11. G1 albo komórka potomna po mitozie.
12. Kariotyp = zestaw chromosomów; kariogram = uporządkowany obraz tego zestawu.
13. Aneuploidia = nieprawidłowa liczba pojedynczych chromosomów; np. trisomia 21.
14. `2n = 10` po S → **20 chromatyd**.
15. `2n = 12`: metafaza → 12 chromosomów, 24 chromatydy; anafaza cała komórka → 24 chromosomy jednochromatydowe.
16. Nondysjunkcja w mejozie I może prowadzić do gamet `n+1` i `n−1`; po zapłodnieniu może powstać `2n+1` lub `2n−1`.

### Sposób oceniania

- **Podstawa:** 1 pkt za poprawną odpowiedź.
- **Trening:** 1 pkt za wynik + 1 pkt za poprawne uzasadnienie, gdy zadanie tego wymaga.
- **Ambitne:** 2 pkt, jeśli odpowiedź zawiera mechanizm.
- **Zaawansowane:** 3 pkt, jeśli odpowiedź poprawnie łączy dane, mechanizm i wniosek.
- **Konkurs:** oceniaj przede wszystkim tok rozumowania, nie samo hasło.

---

# 13. Fiszki · [POWTÓRKA]

| Pytanie | Odpowiedź |
|---|---|
| Ile chromosomów ma typowa komórka somatyczna człowieka? | 46 |
| Ile par? | 23 |
| Według czego liczymy chromosomy? | Według liczby centromerów |
| Co to chromatyda? | Jedna kopia DNA należąca do chromosomu |
| Po replikacji: chromosomy / chromatydy? | 46 / 92 |
| Po replikacji: DNA? | 92 cząsteczki |
| Ile chromosomów w anafazie w całej komórce człowieka? | 92 |
| Ile przy jednym biegunie? | 46 |
| Homologiczne? | Od różnych rodziców |
| Siostrzane? | Kopie tego samego chromosomu po replikacji |
| Chromatyna? | DNA + białka o różnym stopniu kondensacji |
| Chromosom? | Zorganizowana jednostka materiału chromosomowego |
| Kariotyp? | Zestaw chromosomów |
| Kariogram? | Obraz/schemat zestawu chromosomów |
| Aneuploidia? | Nieprawidłowa liczba pojedynczych chromosomów |
| Nondysjunkcja? | Błąd rozchodzenia chromosomów/chromatyd w podziale |
| Nukleosom? | DNA nawinięte na oktamer histonów |
| X na schemacie? | Zwykle jeden chromosom po replikacji |

---

# 14. Test końcowy · [TRENING]

## Podstawa

1. Ile chromosomów ma typowa komórka somatyczna człowieka?
2. Co to centromer?
3. Co oznacza XX / XY w typowym modelu szkolnym?

## Trening

4. Po replikacji: ile chromatyd?
5. Popraw: „W metafazie są 92 chromosomy.”
6. Ile centromerów ma komórka `2n = 10` w metafazie?

## Ambitne

7. Dlaczego liczba chromosomów nie rośnie po replikacji?
8. Dlaczego DNA nie zawsze jest silnie skondensowane?
9. Co dokładnie oznacza reguła centromerów?

## Zaawansowane

10. Komórka człowieka ma 92 chromosomy w całej komórce. W jakiej fazie jest to możliwe? Uzasadnij.
11. Organizm `2n = 12`: podaj liczbę chromosomów i chromatyd w metafazie i anafazie w całej komórce.
12. Nondysjunkcja w mejozie I — jakie typy gamet mogą powstać?

### Klucz skrócony

1. 46.
2. Wyspecjalizowany obszar chromosomu; w zadaniach liczymy według centromerów.
3. XX — żeński, XY — męski w modelu szkolnym.
4. 92.
5. 46 chromosomów, 92 chromatydy.
6. 10.
7. Replikacja tworzy dwie chromatydy połączone w obrębie centromeru.
8. Komórka potrzebuje dostępu do DNA; stopień kondensacji jest regulowany.
9. Liczba chromosomów = liczba centromerów.
10. Anafaza mitozy, jeśli pytamy o całą dzielącą się komórkę.
11. Metafaza: 12 / 24; anafaza cała komórka: 24 / 24.
12. W uproszczonym przypadku 2 gamety `n+1` i 2 gamety `n−1`.

---

# 15. Checklista

- [ ] Wiem, czym jest chromosom.
- [ ] Wiem, czym jest chromatyna.
- [ ] Wiem, czym jest chromatyda.
- [ ] Wiem, czym jest centromer.
- [ ] Rozróżniam chromosom przed i po replikacji.
- [ ] Umiem policzyć chromosomy, chromatydy i DNA.
- [ ] Znam regułę centromerów.
- [ ] Nie mylę chromatyd z chromosomami.
- [ ] Wiem, że X zwykle przedstawia jeden chromosom po replikacji.
- [ ] Rozróżniam homologiczne i siostrzane.
- [ ] Znam 46 = 22 pary autosomów + para płci.
- [ ] Wiem, że gameta ma n = 23.
- [ ] Rozumiem anafazę i chwilowe 92 chromosomy w całej komórce.
- [ ] Umiem liczyć dla dowolnego `2n`.
- [ ] Znam pojęcia kariotyp i kariogram.
- [ ] Znam aneuploidię i nondysjunkcję.
- [ ] Wiem, że liczba chromosomów nie jest miarą złożoności organizmu.

---

# 16. „5 zdań, które rozwiązują zadania”

Zapamiętaj:

1. **Chromosom to uporządkowana struktura DNA i białek.**
2. **Po replikacji jeden chromosom ma dwie chromatydy siostrzane, ale nadal jest jednym chromosomem.**
3. **Liczbę chromosomów wyznacza liczba centromerów.**
4. **W metafazie typowa komórka człowieka ma 46 chromosomów i 92 chromatydy.**
5. **W anafazie chromatydy rozdzielają się i każda staje się osobnym chromosomem jednochromatydowym; dlatego cała komórka ma chwilowo 92 chromosomy.**

---

# 17. Mapa pojęć

```text
DNA
 ↓
DNA + HISTONY
 ↓
CHROMATYNA
 ↓
różny stopień kondensacji
 ↓
CHROMOSOM
 ├── centromer
 ├── przed replikacją → 1 chromatyda
 ├── po replikacji → 2 chromatydy siostrzane
 ├── anafaza → 2 chromosomy jednochromatydowe
 ├── autosomy → 22 pary
 └── chromosomy płci → XX / XY

46 chromosomów
 ↓
23 pary
 ↓
dziedziczenie / płeć / choroby chromosomowe
```

### Mosty

```text
L011 → DNA
L012 → chromosom
L013 → replikacja
L014 → mitoza
L015 → mejoza
L017 → dziedziczenie
L018 → chromosomy płci
L020 → mutacje / aneuploidia
```

---

# 18. Co dalej?

### Następna lekcja

**L013 — Jak komórka kopiuje DNA?**

Kluczowe połączenie:

```text
L012: po replikacji → 2 chromatydy
L013: jak powstają te dwie kopie DNA?
```

### Zajawka L014

Podczas mitozy:

- chromosomy są silnie skondensowane,
- wrzeciono podziałowe pomaga je rozdzielić,
- w profazie zanika otoczka jądrowa,
- w telofazie odtwarza się wokół dwóch zestawów chromosomów.

Szczegóły faz mitozy należą do L014.

---

# 19. Słownik

| Termin | Definicja |
|---|---|
| **Chromosom** | Uporządkowana struktura DNA + białek; przed replikacją zawiera 1 cząsteczkę DNA, po replikacji 2. |
| **Chromatyna** | DNA połączone z białkami, o różnym stopniu kondensacji. |
| **Chromatyda** | Jedna kopia DNA należąca do chromosomu. |
| **Chromatydy siostrzane** | Dwie kopie tego samego chromosomu powstałe w replikacji. |
| **Centromer** | Wyspecjalizowany obszar chromosomu; w jego obrębie tworzy się kinetochor. |
| **Kinetochor** | Struktura białkowa związana z centromerem, do której przyłączają się mikrotubule wrzeciona. |
| **Nukleosom** | Jednostka organizacji chromatyny: DNA owinięte wokół oktameru histonów. |
| **Histon** | Białko uczestniczące w organizacji i upakowaniu DNA. |
| **Kariotyp** | Zestaw chromosomów danej komórki. |
| **Kariogram** | Uporządkowany obraz chromosomów. |
| **Autosom** | Chromosom niebędący chromosomem płci. |
| **Aneuploidia** | Nieprawidłowa liczba pojedynczych chromosomów. |
| **Nondysjunkcja** | Błąd rozchodzenia się chromosomów lub chromatyd podczas podziału. |
| **Poliploidia** | Zwielokrotnienie całych zestawów chromosomów. |
| **Telomer** | Specjalna sekwencja na końcu chromosomu. |
| **Faza S** | Faza cyklu komórkowego, w której zachodzi replikacja DNA. |
| **2n** | Liczba diploidalna chromosomów. |
| **n** | Liczba haploidalna chromosomów. |

---

# 20. Dodatek zaawansowany · [ZAAWANSOWANY]

## 20.1. Nukleosom — szczegóły

Oktamer histonów:

```text
2 × H2A
2 × H2B
2 × H3
2 × H4
```

DNA owija się wokół rdzenia histonowego.

Warto znać pojęcie **DNA linkerowego** między nukleosomami.

---

## 20.2. Ramiona p i q

```text
p = krótsze ramię
q = dłuższe ramię
```

---

## 20.3. Aneuploidia a poliploidia

```text
ANEUPLOIDIA
zmiana liczby pojedynczych chromosomów
np. 2n+1

POLIPLOIDIA
zwielokrotnienie całego zestawu
np. 3n, 4n
```

---

## 20.4. Dlaczego liczba chromosomów nie mówi o „inteligencji” ani „złożoności”?

Liczba chromosomów nie jest prostym miernikiem:

- liczby genów,
- stopnia regulacji genów,
- złożoności rozwoju,
- złożoności organizmu.

Dlatego nie można wyciągać wniosku:

```text
więcej chromosomów = bardziej złożony organizm
```

---

# 21. Zadania z życia codziennego

## 21.1. Dlaczego kariotyp bada się w diagnostyce prenatalnej?

**Model odpowiedzi:**

Kariotyp pozwala ocenić liczbę i organizację chromosomów. Może ujawnić nieprawidłowości, takie jak trisomia 21. Badania genetyczne mają jednak różne możliwości i ograniczenia — wynik konkretnego badania należy interpretować w kontekście klinicznym.

---

## 21.2. Dlaczego trisomia 21 wynika z nieprawidłowej liczby chromosomów?

W prawidłowym kariotypie człowiek ma 46 chromosomów. W trisomii 21 występuje dodatkowa kopia chromosomu 21, dlatego liczba chromosomów wynosi zwykle 47.

---

## 21.3. Jak dziedziczy się płeć w typowym modelu XX/XY?

Komórka jajowa typowo wnosi X. Plemnik wnosi X albo Y.

```text
X + X → XX
X + Y → XY
```

To model szkolny, a rzeczywisty rozwój płci jest bardziej złożony.

---

## 21.4. Dlaczego chromosomy widzimy szczególnie dobrze podczas podziału?

Ponieważ podczas podziału materiał chromosomowy jest silnie skondensowany i tworzy wyraźniejsze struktury możliwe do obserwacji mikroskopowej.

Nie oznacza to, że wcześniej chromosomy „nie istnieją”.

---

## 21.5. Uczniowi wydaje się, że 92 chromosomy w anafazie to błąd. Jak mu wyjaśnić?

W anafazie chromatydy siostrzane rozdzielają się. Każda otrzymuje własny centromer i staje się chromosomem jednochromatydowym. Dlatego cała dzieląca się komórka ma chwilowo 92 chromosomy. Po zakończeniu podziału każda komórka potomna ma 46.

---

## 21.6. Dlaczego pies z 2n = 78 nie jest bardziej złożony od człowieka z 2n = 46?

Liczba chromosomów jest cechą gatunkową i nie jest prostą miarą złożoności organizmu.

---

## 21.7. Dlaczego w hodowli roślin wykorzystuje się czasem wiedzę o podziałach chromosomów?

Zmiany liczby całych zestawów chromosomów mogą wpływać na cechy roślin. W praktyce hodowlanej stosuje się specjalistyczne metody laboratoryjne.

> **BHP:** kolchicyna jest silnie toksyczna. Nie jest materiałem do samodzielnych doświadczeń szkolnych.

---

## 21.8. Skąd wiemy, że materiał chromosomowy istnieje także w interfazie?

W interfazie obserwuje się chromatynę, a materiał genetyczny jest aktywnie wykorzystywany m.in. do ekspresji genów i replikacji. W kolejnym podziale ten sam materiał ulega silnej kondensacji i ponownie staje się widoczny jako wyraźne chromosomy.

---

# 22. Jak się uczyć tej lekcji?

## Plan podstawowy — około 40 minut

### 1. Ściąga — 5 min

Przeczytaj:

- 5.1–5.5,
- 5.10–5.11.

Zapamiętaj:

> **liczba chromosomów = liczba centromerów**

### 2. Tabela liczenia — 5–7 min

Przepisz z pamięci:

```text
G1
po S
metafaza
anafaza
```

i uzupełnij:

```text
chromosomy / chromatydy / DNA
```

### 3. Liczenie na innych 2n — 5 min

Wykonaj:

- `2n = 6`,
- `2n = 8`,
- `2n = 10`.

### 4. Klinika błędów — 5 min

Znajdź własne błędy.

### 5. Ćwiczenia — 8 min

Zrób mini-check + A + B.

### 6. Fiszki — 5 min

Powtórz pojęcia.

### 7. Test — 10 min

Rozwiąż bez zaglądania do odpowiedzi.

---

## Powtórki rozłożone w czasie

| Kiedy | Co | Czas |
|---|---|---:|
| Po lekcji | ściąga + 5 fiszek | 15–20 min |
| +1 dzień | fiszki + tabela liczenia | 10 min |
| +3 dni | klinika + kalkulator `2n = 8, 10, 20` | 15 min |
| +1 tydzień | test + fiszki | 20 min |
| +1 miesiąc | mapa pojęć + zadania z życia | 15 min |

### Zasada 3 pytań

1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

# 23. Połączenia międzyprzedmiotowe

| Przedmiot | Połączenie |
|---|---|
| **Matematyka** | proporcje, mnożenie ×2, praca z `2n`, `n`, `4n` |
| **Fizyka** | upakowanie przestrzenne i skala mikro/nano |
| **Informatyka** | organizacja danych; ważne zastrzeżenie: upakowanie DNA nie jest kompresją informacji |
| **Chemia** | DNA, histony, oddziaływania między cząsteczkami |
| **Historia / WOS** | historia badań nad chromosomami, etyka badań genetycznych |
| **Geografia / ewolucja** | różnice międzygatunkowe i izolacja populacji |
| **Biologia molekularna** | połączenie L012 z replikacją, ekspresją genów i mutacjami |

### Szczególnie ważne połączenie z informatyką

Nie należy pisać:

> „DNA jest kompresowane bezstratnie jak plik.”

Lepsze porównanie:

> **DNA jest przestrzennie organizowane i upakowywane, ale informacja genetyczna nie jest przez to „skompresowana” w informatycznym znaczeniu.**

---

# 24. Mosty do kolejnych lekcji

| Lekcja | Co wnosi L012 |
|---|---|
| **L013** | Replikacja zachodzi w fazie S; po niej chromosom ma 2 chromatydy |
| **L014** | Chromatydy siostrzane rozchodzą się w mitozie; anafaza zmienia liczbę chromosomów w całej komórce |
| **L015** | Mejoza redukuje liczbę zestawów; homologi i chromatydy rozdzielają się w różnych etapach |
| **L017** | Chromosomy homologiczne niosą odpowiadające sobie geny/allele |
| **L018** | XX/XY i dziedziczenie cech sprzężonych z X |
| **L020** | Aneuploidia i mutacje chromosomowe |

---

# 25. STATUS LEKCJI

**L012 — synchronizacja z HTML v8.1**

### Zachowane

- cała dotychczasowa treść L012,
- reguła centromerów,
- tabela liczenia,
- ćwiczenia,
- klinika błędów,
- fiszki,
- test,
- mapa pojęć,
- słownik,
- dodatek zaawansowany,
- zadania z życia,
- plan nauki.

### Przeniesione / doprecyzowane z HTML v8.1

- ekran „Muszę umieć na E8”,
- historia odkrycia chromosomów,
- rozróżnienie 2 m DNA w G1 i około 4 m po replikacji,
- precyzyjniejsza definicja chromosomu,
- precyzyjniejsze rozróżnienie chromatyd siostrzanych,
- centromer + kinetochor,
- ostrożniejszy opis chromatyny,
- zastrzeżenie do modelu „30 nm / solenoidu”,
- pary homologiczne vs chromatydy siostrzane,
- kariotyp vs kariogram,
- reguła „X nie znaczy dwa”,
- anafaza jako osobny etap liczenia,
- liczenie dla dowolnego `2n`,
- zadanie „brak informacji”,
- zadanie „wykrywanie fazy”,
- zadanie diagnostyczne dotyczące 92 chromosomów,
- dodatkowe ćwiczenia schematowe,
- doprecyzowanie analogii informatycznej,
- ostrzeżenie BHP dotyczące kolchicyny,
- poprawiona terminologia „jednochromatydowy”.

### Ważne

**L001–L011 nie były merytorycznie przebudowywane w tej rewizji.**

### Status L012 (2026-09-20)

HTML kanon: `BIOLOGIA_L012_CHROMOSOMY.html` (v8.1). MD już zawiera wykład + liczenie centromerów + anafazę + 92≠chromosomy. Widgety (kalkulator 2n, nondysjunkcja SVG) zostają w HTML. Nic nie obcinane.

<!-- ==================== END L012 ==================== -->


<!-- ==================== BEGIN L013 ==================== -->
