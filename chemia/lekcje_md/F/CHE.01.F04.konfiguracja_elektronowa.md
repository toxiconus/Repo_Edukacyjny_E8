<!-- ŹRÓDŁO: kanon CHE.core.md (archiwum v0_57), blok główny w. 3280–4149 -->
# F04 — KONFIGURACJA ELEKTRONOWA (Fundamenty)

### WARSTWA INTEGRACYJNA MASTER 3.0 — F04

**Model:** Konfiguracja elektronowa → zachowanie.

**Wyjaśnij teraz:** Konfiguracja opisuje rozmieszczenie elektronów i jest mostem do właściwości okresowych.

**Mini-przykład:** Na: 1s²2s²2p⁶3s¹; łatwo tworzy Na⁺ przez oddanie elektronu walencyjnego.

**Ograniczenie/kontrola:** Kolejność obsadzania orbitali nie jest tym samym co kolejność energetyczna usuwania elektronów.


**Wersja:** 1.4 · 2026-09-28
**Poziom:** E7/E8 — rdzeń kursowy → LO podstawowe → LO rozszerzone → pomost akademicki
**Poprzednia:** F03 · **Następna:** F05 Wartościowość
**Plik źródłowy:** CHE.all.v01.00.md (blok L013, fragment F04)
**Status zakresu:** w MASTER-ze F04 ma obowiązkową warstwę kursową E7/E8; formalne wymagania podstawy programowej i wymagania LO są śledzone osobno. Dzięki temu uczeń E7/E8 może nauczyć się konfiguracji jako prawdziwego, uproszczonego modelu bez przenoszenia całego formalizmu LO rozszerzonego do podstawy.

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ

1. **Nie czytaj biernie.**
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach.**
4. **Mów na głos.**
5. **Rysuj.**
6. **Łap moment „aha!".**

**Zasada 80/20 tej lekcji:**
- powłoki i podpowłoki,
- kolejność Aufbau,
- reguła Hunda i Pauliego,
- wyjątki Cr i Cu.

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

---

## POZIOMY (STAŁE)

| Poziom | Co uczeń robi w F04 |
|--------|----------------------|
| **E7/E8 — RDZEŃ KURSU** | rozumie powłokę i podpowłokę, zna pojemności s/p/d/f, zapisuje podstawowe konfiguracje i widzi związek z układem okresowym; poznaje pierwszy sygnał, że prosta reguła obsadzania ma wyjątki |
| **LO PODSTAWOWE** | utrwala zapis podpowłokowy i wykorzystuje konfigurację do interpretacji budowy atomu |
| **LO ROZSZERZONE** | stosuje orbitale, Pauliego, Hunda, konfiguracje jonów i bardziej formalny opis |
| **POMOST AKADEMICKI** | analizuje rzeczywiste energie, oddziaływania elektron–elektron i ograniczenia reguł szkolnych |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z F02:
- atom, Z, A, p⁺, n⁰, e⁻,
- izotopy,
- konfiguracja powłokowa (2, 8, 8, 2).

Z F03:
- układ okresowy,
- grupy i okresy,
- elektrony walencyjne.

---

## 1. CEL LEKCJI

### E7/E8 — co trzeba umieć

Uczeń:
- rozumie różnicę między powłoką i podpowłoką,
- zna podpowłoki s, p, d, f i ich maksymalną liczbę elektronów,
- potrafi zapisać podstawową konfigurację elektronową atomów do Z=20,
- potrafi odczytać z konfiguracji liczbę elektronów zewnętrznych w prostych przypadkach,
- wie, że szkolna reguła obsadzania jest modelem i że istnieją wyjątki.

### LO podstawowe i rozszerzone

Uczeń rozwija zapis podpowłokowy, rozumie rolę orbitali i stosuje zasady obsadzania elektronów; zakres formalny rośnie wraz z poziomem.

### Pomost akademicki

Uczeń może sprawdzić, dlaczego energie orbitali nie tworzą jednej stałej drabiny oraz dlaczego wyjątki nie dają się wyjaśnić wyłącznie hasłem „półpełna lub pełna podpowłoka”.

---

## 2. PYTANIE PRZEWODNIE

**Jak zapisać rozmieszczenie elektronów i dlaczego szkolna kolejność obsadzania jest tylko modelem?**

W rdzeniu E7/E8 interesuje nas przede wszystkim poprawny zapis i umiejętność sprawdzenia liczby elektronów. Pytanie o rzeczywiste energie orbitali zostawiamy jako rozwinięcie LO rozszerzonego i pomostu akademickiego.

---

## 3. MAPA POJĘĆ TEJ LEKCJI

```
ATOM
├── POWŁOKA (n = 1, 2, 3, 4...)
│   │
│   └── PODPOWŁOKA
│       ├── s (1 orbital, 2 e⁻)
│       ├── p (3 orbitale, 6 e⁻)
│       ├── d (5 orbitali, 10 e⁻)
│       └── f (7 orbitali, 14 e⁻)
│
└── ORBITAL
    └── maksymalnie 2 e⁻ (przeciwne spiny)

KOLEJNOŚĆ AUFBAU (Madelunga):
1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p ...

REGUŁY:
- Aufbau: od najniższej energii
- Hund: najpierw pojedynczo, potem parowanie
- Pauli: max 2 e⁻ na orbitalu (przeciwne spiny)
```

---

## 4. DIAGNOZA STARTOWA

1. Co to orbital?
2. Ile elektronów mieści podpowłoka s?
3. Ile orbitali ma podpowłoka p?
4. Dlaczego w szkolnym schemacie obsadzania pojawia się 4s przed 3d?
5. Co to reguła Hunda?

**Uwaga:** pytanie 4 sprawdza regułę zapisu/obsadzania, nie oznacza, że orbital 4s zawsze ma niższą energię od 3d w każdym atomie i każdym stanie.

**Odpowiedzi:**
1. Obszar, gdzie prawdopodobieństwo znalezienia elektronu jest największe.
2. 2.
3. 3.
4. Niższa energia całkowita układu w atomach K, Ca (reguła Madelunga).
5. Elektrony zajmują orbitale pojedynczo przed parowaniem.

### 4A. PROCEDURA ZAPISU KONFIGURACJI

Nie ucz się samego ciągu podpowłok. Przy każdym zapisie wykonuj kontrolę:

```text
1. Ustal liczbę elektronów.
2. Rozpisz podpowłoki według przyjętej kolejności.
3. Pilnuj maksymalnej liczby elektronów w s/p/d/f.
4. Przy równorzędnych orbitalach zastosuj regułę Hunda.
5. Sprawdź sumę elektronów.
6. Jeżeli to jon — ustal najpierw liczbę elektronów jonu.
7. Dla metali przejściowych przy jonizacji pamiętaj o usuwaniu elektronów 4s przed 3d.
```

**Mini-transfer:**
Dla `Na`, `Cl`, `Ca²⁺` i `Fe³⁺` zapisz konfigurację, policz elektrony i zaznacz, który krok kontroli był najważniejszy. Dla `Fe³⁺` dopisz osobno, skąd usuwane są elektrony podczas tworzenia kationu.

**Ważne rozróżnienie:** kolejność zapisu/zapełniania podpowłok nie jest tym samym co kolejność usuwania elektronów przy jonizacji. Ten punkt ma zostać zachowany także w późniejszym F05.

---

## WARSTWOWANIE WYKŁADU F04

W tej lekcji nie rozdzielamy „podstawy” od prawdziwej chemii przez podanie dwóch sprzecznych modeli. Rdzeń E7/E8 korzysta z uproszczonego modelu, ale od razu zaznacza jego granice.

- **E7/E8:** powłoka → podpowłoka → pojemność → zapis konfiguracji → związek z układem okresowym → pierwsza informacja o wyjątkach.
- **LO:** orbitale i formalne reguły obsadzania.
- **LO rozszerzone:** liczby kwantowe, schematy klatkowe, konfiguracje bardziej złożone i wyjątki.
- **Akademia:** rzeczywisty opis stanów elektronowych i energii.

**Rozwiń:** F03 — położenie pierwiastka w układzie okresowym i elektrony zewnętrzne.

**Zajrzyj wyżej:** F04, sekcje 5.8–5.10 oraz pomost akademicki — orbitale, liczby kwantowe i ograniczenia modelu.

## 5. ŚCIĄGA — KONFIGURACJA ELEKTRONOWA

### 5.1. Powłoka vs podpowłoka — E7/E8

**Powłoka** — poziom energetyczny (n = 1, 2, 3, 4; historycznie K, L, M, N).

**Podpowłoka** — zbiór orbitali wewnątrz powłoki (s, p, d, f).

| Powłoka | Podpowłoki |
|---------|------------|
| K (n=1) | 1s |
| L (n=2) | 2s, 2p |
| M (n=3) | 3s, 3p, 3d |
| N (n=4) | 4s, 4p, 4d, 4f |

### 5.2. Podpowłoki — orbitale i pojemność — E7/E8 → LO

| Podpowłoka | Liczba orbitali | Maks. e⁻ | Możliwe mₗ | Kształt |
|------------|-----------------|-----------|-----------|---------|
| s | 1 | 2 | 0 | sferyczny |
| p | 3 | 6 | −1, 0, +1 | dwupłatowy |
| d | 5 | 10 | −2, −1, 0, +1, +2 | złożony |
| f | 7 | 14 | −3 … +3 | bardzo złożony |

**Orbital** — obszar przestrzeni, w którym prawdopodobieństwo znalezienia elektronu jest największe (zwykle przyjmuje się 90%).

### 5.3. Kolejność obsadzania elektronów — E7/E8 → LO

Elektrony zapełniają orbitale od najniższej energii do najwyższej.

**Kolejność energetyczna (Aufbau/Madelunga):**
1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p

**Reguła Madelunga (n+l):** orbitale zapełniają się według rosnącej sumy (n+l); przy równych sumach decyduje mniejsze n.

| Podpowłoka | n | l | n+l | Kolejność |
|------------|---|---|-----|-----------|
| 1s | 1 | 0 | 1 | 1 |
| 2s | 2 | 0 | 2 | 2 |
| 2p | 2 | 1 | 3 | 3 |
| 3s | 3 | 0 | 3 | 4 |
| 3p | 3 | 1 | 4 | 5 |
| 4s | 4 | 0 | 4 | 6 |
| 3d | 3 | 2 | 5 | 7 |
| 4p | 4 | 1 | 5 | 8 |
| 5s | 5 | 0 | 5 | 9 |
| 4d | 4 | 2 | 6 | 10 |

**Klucz:** 4s ma (n+l) = 4, a 3d ma (n+l) = 5. Mniejsza suma → niższa energia → 4s przed 3d .

**Uwaga zaawansowana:** W atomach K i Ca orbital 4s ma rzeczywiście niższą energię niż 3d. Jednak od Sc do Zn rzeczywista energia orbitalu 3d jest **niższa** niż 4s. Kolejność zapełniania 4s → 3d wynika z faktu, że elektrony najpierw obsadzają orbital 4s, ponieważ układ z elektronem na 4s ma niższą energię całkowitą (uwzględniając odpychanie elektron-elektron) niż układ z elektronem na 3d . Reguła „4s przed 3d” jest więc narzędziem porządkowym, a nie literalnym opisem energii orbitali dla wszystkich atomów.

### 5.4. Reguła Hunda — LO

W obrębie jednej podpowłoki elektrony najpierw zajmują orbitale pojedynczo (zgodne spiny), a dopiero potem się parują.

**Przykład — azot 2p³:**
- 2p: ↑ ↑ ↑ (3 niesparowane elektrony).

**Przykład — tlen 2p⁴:**
- 2p: ↑↓ ↑ ↑.

**Reguła Pauliego:** na jednym orbitalu maksymalnie 2 elektrony o przeciwnych spinach (↑↓).

### 5.5. Przykłady konfiguracji podpowłokowej — E7/E8 → LO

| Pierwiastek | Z | Konfiguracja |
|-------------|---|--------------|
| H | 1 | 1s¹ |
| He | 2 | 1s² |
| Li | 3 | 1s² 2s¹ |
| C | 6 | 1s² 2s² 2p² |
| N | 7 | 1s² 2s² 2p³ |
| O | 8 | 1s² 2s² 2p⁴ |
| F | 9 | 1s² 2s² 2p⁵ |
| Ne | 10 | 1s² 2s² 2p⁶ |
| Na | 11 | [Ne] 3s¹ |
| Ar | 18 | [Ne] 3s² 3p⁶ |
| K | 19 | [Ar] 4s¹ |
| Ca | 20 | [Ar] 4s² |
| Sc | 21 | [Ar] 3d¹ 4s² |
| Fe | 26 | [Ar] 3d⁶ 4s² |
| Cu | 29 | [Ar] 3d¹⁰ 4s¹ (wyjątek) |
| Zn | 30 | [Ar] 3d¹⁰ 4s² |

**Skróty:**
- [He] = 1s²,
- [Ne] = 1s² 2s² 2p⁶,
- [Ar] = 1s² 2s² 2p⁶ 3s² 3p⁶.

### 5.6. Wyjątki od prostej reguły obsadzania — LO rozszerzone

**Konfiguracja oczekiwana (Aufbau):**
- Cr (Z=24): [Ar] 3d⁴ 4s²,
- Cu (Z=29): [Ar] 3d⁹ 4s².

**Konfiguracja rzeczywista:**
- Cr (Z=24): [Ar] 3d⁵ 4s¹,
- Cu (Z=29): [Ar] 3d¹⁰ 4s¹.

**Dlaczego?** W rzeczywistym opisie energia całego atomu zależy od kilku efektów, m.in. oddziaływań elektron–elektron i różnic energii między blisko położonymi stanami. W konfiguracjach Cr i Cu niewielkie przesunięcie elektronu między 4s i 3d prowadzi do stanu o niższej energii całkowitej.

Hasło „półpełna d⁵ i pełna d¹⁰ są stabilniejsze” jest użytecznym szkolnym skrótem, ale **nie jest pełnym wyjaśnieniem mechanizmu**. Nie należy z niego tworzyć uniwersalnej reguły przewidującej wszystkie wyjątki.

**Inne wyjątki:** Nb, Mo, Ag, Au, Pt.

### 5.7. Kolejność zapisu ≠ kolejność usuwania — LO rozszerzone

**Zapełnianie atomu:** 4s przed 3d (w atomach K, Ca; narzędzie porządkowe).

**Usuwanie elektronów z kationu:** najpierw 4s, potem 3d.

**Przykład:**
- Fe: [Ar] 3d⁶ 4s²
- Fe²⁺: [Ar] 3d⁶ (usunięto 4s²)
- Fe³⁺: [Ar] 3d⁵ (usunięto 4s² + 1×3d)

**Wyjaśnienie:** W jonach metali przejściowych elektrony 4s są usuwane pierwsze, ponieważ w tych układach orbital 4s ma wyższą energię niż 3d .

### 5.8. Kształty orbitali — LO rozszerzone / pomost akademicki

- **s** — sferyczny; kolejne orbitale ns mogą mieć węzły radialne.
- **p** — trzy orbitale (pₓ, pᵧ, p_z); dwupłatowy kształt.
- **d** — pięć orbitali; cztery mają cztery płaty, d_z² ma torus.
- **f** — siedem orbitali; złożona struktura.

**Uwaga:** orbitale to nie „kolorowe balony". To obszary prawdopodobieństwa znalezienia elektronu.

### KRÓTKIE WYJAŚNIENIE PRZED ROZWINIĘCIEM

**Liczby kwantowe** to zestaw liczb opisujących stan elektronu w atomie w modelu kwantowym. Na poziomie tego kursu nie trzeba ich używać do podstawowego zapisu konfiguracji; pojawiają się po to, aby pokazać, skąd biorą się pojęcia powłoki, podpowłoki i orbitalu.

**Rozwiń:** poniższa sekcja 5.9.

### 5.9. Liczby kwantowe — LO rozszerzone / pomost akademicki

- **n** — główna liczba kwantowa (powłoka),
- **l** — poboczna (0=s, 1=p, 2=d, 3=f),
- **mₗ** — magnetyczna (od −l do +l),
- **mₛ** — spinowa (+½ lub −½).

**Przykład — elektron 2p:**
- n=2, l=1, mₗ ∈ {−1, 0, +1}, mₛ = ±½.

### 5.10. Węzły — pomost akademicki

- **Węzły kątowe:** l,
- **Węzły radialne:** n − l − 1,
- **Suma węzłów:** n − 1.

**Przykład — orbital 3p:**
- l = 1 → 1 węzeł kątowy,
- n − l − 1 = 3 − 1 − 1 = 1 węzeł radialny,
- suma: 2.

---

## 6. DOŚWIADCZENIA MODELOWE

### Doświadczenie 1: Model orbitali s, p, d

**Problem:** Jak wyobrazić sobie kształty orbitali?
**Sprzęt:** balony, model 3D z drucików, oprogramowanie (PhET).
**Obserwacja:** s — kula, p — dwa płaty, d — cztery płaty.
**Wniosek:** Orbitale mają określone kształty.

### Doświadczenie 2: Węzły — fala stojąca

**Problem:** Co to węzeł orbitalu?
**Sprzęt:** lina/sznurek, drgania.
**Obserwacja:** węzeł = miejsce, gdzie fala ma zerową amplitudę.
**Wniosek:** węzły to obszary zerowego prawdopodobieństwa.

---

## 7. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd | Poprawnie | Dlaczego |
|------|-----------|----------|
| „Podpowłoka p ma 1 orbital" | p ma 3 orbitale | pₓ, pᵧ, p_z |
| „4s ma wyższą energię niż 3d" (w K, Ca) | 4s ma niższą energię niż 3d | reguła Madelunga (n+l) |
| „Zawsze 3d przed 4s" | 4s przed 3d w zapisie konfiguracji | reguła Aufbau |
| „Cr to [Ar] 3d⁴ 4s²" | Cr to [Ar] 3d⁵ 4s¹ | wyjątek — półpełna d⁵ |
| „Podpowłoka może mieć więcej niż 2 e⁻ na orbital" | max 2 e⁻ na orbital | zakaz Pauliego |
| „Orbitale to kolorowe balony" | orbitale to obszary prawdopodobieństwa | nie mają ostrych granic |
| „Hel ma 8 elektronów walencyjnych" | hel ma 2 | pełna powłoka K = 2 |
| „Hund: elektrony od razu się parują" | najpierw pojedynczo | reguła Hunda |
| „4s zawsze ma niższą energię" | tylko w K, Ca | w Sc-Zn rzeczywista energia 3d < 4s |

### Klinika 2.0 — przykład 1

**Błąd:** „4s ma wyższą energię niż 3d."

- **Znajdź:** zła kolejność (dla K, Ca).
- **Popraw:** W atomach K, Ca 4s ma niższą energię niż 3d.
- **Reguła:** reguła Madelunga (n+l): 4s (n+l)=4, 3d (n+l)=5.
- **Dlaczego:** mniejsza suma (n+l) → niższa energia.
- **Zadanie podobne:** Co ma niższą energię: 5s czy 4d?
- **Pułapka:** „wyższe n = wyższa energia" — nie zawsze.

### Klinika 2.0 — przykład 2

**Błąd:** „Chrom ma konfigurację [Ar] 3d⁴ 4s²."

- **Znajdź:** pominięcie wyjątku.
- **Popraw:** Cr ma [Ar] 3d⁵ 4s¹.
- **Reguła:** półpełna podpowłoka d⁵ jest korzystna energetycznie.
- **Dlaczego:** 5 elektronów na 5 orbitalach — każdy z jednym elektronem, wszystkie o zgodnych spinach.
- **Zadanie podobne:** Jaka jest konfiguracja Cu?
- **Pułapka:** Aufbau to model — ma wyjątki.

### Klinika 2.0 — przykład 3

**Błąd:** „Podpowłoka p ma 1 orbital."

- **Znajdź:** zła liczba orbitali.
- **Popraw:** p ma 3 orbitale (pₓ, pᵧ, p_z).
- **Reguła:** liczba orbitali: s=1, p=3, d=5, f=7.
- **Dlaczego:** 2l+1 = 2·1+1 = 3.
- **Zadanie podobne:** Ile orbitali ma podpowłoka d?
- **Pułapka:** „litera s = 1 orbital, litera p = 1 orbital" — nie.

---

## 8. ĆWICZENIA

### 8.1. Mini-check (5 pytań)

1. Co to orbital?
2. Ile elektronów mieści podpowłoka d?
3. Zapisz konfigurację dla C.
4. Co mówi reguła Hunda?
5. Dlaczego Cr ma [Ar] 3d⁵ 4s¹?

### 8.2. Ćwiczenie prowadzone

**Dane:** Atom azotu (Z=7).

**Krok 1.** 1s² (2 e⁻).
**Krok 2.** 2s² (2 e⁻).
**Krok 3.** 2p³ (3 e⁻) — ↑ ↑ ↑ (Hund).
**Razem:** 1s² 2s² 2p³.

**Spróbuj sam:** atom tlenu (Z=8).

### 8.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Ile elektronów mieści podpowłoka: s, p, d, f?
2. Zapisz konfigurację dla: H, Li, C, O, Ne.
3. Co mówi reguła Aufbau?
4. Co mówi reguła Hunda?
5. Co mówi zakaz Pauliego?

**B. Trening**

6. Zapisz konfigurację dla: Na, Mg, Al, Cl, Ar.
7. Zapisz konfigurację skróconą [Ne] dla Na.
8. Narysuj diagram orbitali dla azotu (2p³).
9. Dlaczego 4s zapełnia się przed 3d?
10. Popraw: „4s wyżej niż 3d".

**C. Ambitne**

11. Zapisz konfigurację dla: K, Ca, Sc, Fe.
12. Zapisz konfigurację dla Cu (wyjątek).
13. Dlaczego Cr ma inną konfigurację?
14. Zapisz konfigurację dla Fe²⁺ i Fe³⁺.
15. Co to reguła Madelunga?

**D. Zaawansowane**

16. Co to liczby kwantowe? Wymień je.
17. Ile węzłów ma orbital 3p?
18. Zapisz konfigurację dla Br (Z=35).
19. Co to blok s, p, d, f?
20. Dlaczego orbitale to nie „kolorowe balony"?

### 8.4. Interleaving (przeplatany)

1. Co to elektrony walencyjne? (F03)
2. Ile powłok ma sód? (F02)
3. Ile orbitali ma podpowłoka p? (F04)
4. Co to reguła Hunda? (F04)
5. Dlaczego 4s przed 3d? (F04)

---

## 9. ODPOWIEDZI

### Mini-check

1. Obszar, gdzie prawdopodobieństwo znalezienia elektronu jest największe.
2. 10.
3. 1s² 2s² 2p².
4. Elektrony pojedynczo przed parowaniem.
5. Półpełna d⁵ jest korzystna energetycznie.

### Ćwiczenia A

1. s: 2; p: 6; d: 10; f: 14.
2. H: 1s¹; Li: 1s² 2s¹; C: 1s² 2s² 2p²; O: 1s² 2s² 2p⁴; Ne: 1s² 2s² 2p⁶.
3. Od najniższej energii.
4. Pojedynczo przed parowaniem.
5. Max 2 e⁻ na orbitalu (przeciwne spiny).

### Ćwiczenia B

6. Na: [Ne] 3s¹; Mg: [Ne] 3s²; Al: [Ne] 3s² 3p¹; Cl: [Ne] 3s² 3p⁵; Ar: [Ne] 3s² 3p⁶.
7. [Ne] 3s¹.
8. 2p: ↑ ↑ ↑.
9. Reguła Madelunga — 4s ma (n+l)=4, 3d ma (n+l)=5.
10. W K, Ca: 4s ma niższą energię niż 3d.

### Ćwiczenia C

11. K: [Ar] 4s¹; Ca: [Ar] 4s²; Sc: [Ar] 3d¹ 4s²; Fe: [Ar] 3d⁶ 4s².
12. Cu: [Ar] 3d¹⁰ 4s¹.
13. Półpełna d⁵ jest korzystna energetycznie.
14. Fe²⁺: [Ar] 3d⁶; Fe³⁺: [Ar] 3d⁵.
15. Orbitale zapełniają się według rosnącej sumy (n+l); przy równych sumach decyduje mniejsze n.

### Ćwiczenia D

16. Liczby kwantowe: n, l, mₗ, mₛ.
17. 3p: l=1 → 1 węzeł kątowy; n−l−1=1 węzeł radialny; suma 2.
18. Br: [Ar] 3d¹⁰ 4s² 4p⁵.
19. Blok s: grupy 1,2; p: 13–18; d: 3–12; f: lantanowce, aktynowce.
20. Orbitale to obszary prawdopodobieństwa — nie mają ostrych granic.

---

## 10. FISZKI — tylko jeśli potrzebne

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to orbital? | Obszar największego prawdopodobieństwa znalezienia elektronu |
| Ile e⁻ mieści podpowłoka s? | 2 |
| Ile e⁻ mieści podpowłoka p? | 6 |
| Ile e⁻ mieści podpowłoka d? | 10 |
| Ile e⁻ mieści podpowłoka f? | 14 |
| Ile orbitali ma p? | 3 |
| Ile orbitali ma d? | 5 |
| Ile orbitali ma f? | 7 |
| Co mówi reguła Aufbau? | Od najniższej energii |
| Co mówi reguła Hunda? | Pojedynczo przed parowaniem |
| Co mówi zakaz Pauliego? | Max 2 e⁻ na orbitalu |
| Kolejność Aufbau? | 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p |
| Konfiguracja H? | 1s¹ |
| Konfiguracja C? | 1s² 2s² 2p² |
| Konfiguracja Ne? | 1s² 2s² 2p⁶ |
| Konfiguracja Na? | [Ne] 3s¹ |
| Konfiguracja Ar? | [Ne] 3s² 3p⁶ |
| Konfiguracja K? | [Ar] 4s¹ |
| Konfiguracja Ca? | [Ar] 4s² |
| Konfiguracja Fe? | [Ar] 3d⁶ 4s² |
| Konfiguracja Cr? | [Ar] 3d⁵ 4s¹ (wyjątek) |
| Konfiguracja Cu? | [Ar] 3d¹⁰ 4s¹ (wyjątek) |
| Dlaczego 4s przed 3d? | Niższa energia (reguła Madelunga) |
| Reguła Madelunga? | Rosnąca suma (n+l) |
| Kolejność usuwania e⁻ z Fe? | Najpierw 4s, potem 3d |

---

## 11. SPRAWDZENIE DIAGNOSTYCZNE

Test nie jest celem lekcji. Wybierz tylko te zadania, które pokazują, czy uczeń opanował definicję, procedurę i kontrolę wyniku. (F04)

1. Zapisz konfigurację dla: C, O, Na, Ar.
2. Ile orbitali ma podpowłoka d?
3. Co mówi reguła Hunda?
4. Dlaczego 4s przed 3d?
5. Zapisz konfigurację dla Fe.
6. Popraw: „Cr to [Ar] 3d⁴ 4s²".
7. (extra) Co to reguła Madelunga?
8. (extra) Ile węzłów ma orbital 3p?
9. (extra) Zapisz konfigurację Fe²⁺.

---

## 12. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Powłoki i podpowłoki | definicje, pojemności |
| Orbitale | kształty, liczby |
| Reguła Aufbau | kolejność |
| Reguła Hunda | pojedynczo przed parowaniem |
| Zakaz Pauliego | max 2 e⁻ |
| Kolejność Madelunga | (n+l) |
| Wyjątki Cr, Cu | półpełna i pełna d |
| Kolejność usuwania | 4s przed 3d |
| Liczby kwantowe | n, l, mₗ, mₛ (ambitnie) |
| Węzły | l i n−l−1 (ambitnie) |

---

## 13. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |

---

## 14. MAPA MYŚLI

```
KONFIGURACJA ELEKTRONOWA
├── POWŁOKI (n)
│   └── K, L, M, N
├── PODPOWŁOKI
│   ├── s (1 orbital, 2 e⁻)
│   ├── p (3 orbitale, 6 e⁻)
│   ├── d (5 orbitali, 10 e⁻)
│   └── f (7 orbitali, 14 e⁻)
├── ORBITALE
│   └── max 2 e⁻ (zakaz Pauliego)
├── KOLEJNOŚĆ AUFBAU
│   └── 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p
├── REGUŁY
│   ├── Aufbau (Madelunga)
│   ├── Hund
│   └── Pauli
├── WYJĄTKI
│   ├── Cr ([Ar] 3d⁵ 4s¹)
│   ├── Cu ([Ar] 3d¹⁰ 4s¹)
│   └── ...
└── USUWANIE ELEKTRONÓW
    └── najpierw 4s, potem 3d
```

---

## 15. CO DALEJ?

**F05 — Wartościowość / ładunek / stopień utlenienia:** trzy pojęcia, które często są mylone.

**F08 — VSEPR:** geometria cząsteczek.

**L013 — Zaawansowana:** pełna konfiguracja, hybrydyzacja, orbitale molekularne.

---

## 16. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Orbital | Obszar największego prawdopodobieństwa znalezienia elektronu. |
| Podpowłoka | Zbiór orbitali wewnątrz powłoki (s, p, d, f). |
| Powłoka | Poziom energetyczny (K, L, M, N). |
| Reguła Aufbau | Od najniższej energii. |
| Reguła Hunda | Pojedynczo przed parowaniem. |
| Zakaz Pauliego | Max 2 e⁻ na orbitalu (przeciwne spiny). |
| Reguła Madelunga | Zapełnianie według rosnącej (n+l). |
| Konfiguracja podpowłokowa | Zapis obsadzenia orbitali (np. 1s² 2s² 2p²). |
| Wyjątek od Aufbau | Nietypowa konfiguracja (Cr, Cu) — półpełna lub pełna podpowłoka. |
| Węzeł | Obszar zerowego prawdopodobieństwa (kątowy lub radialny). |
| Liczby kwantowe | n, l, mₗ, mₛ. |

---

## 17. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

---

## 18. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

---

## 19. DODATEK E — WARSTWA EXTRA

### E.1. Reguła Madelunga — pełna lista

```
1s (1) → 2s (2) → 2p (3) → 3s (3) → 3p (4) → 4s (4) → 3d (5) → 4p (5) → 5s (5) → 4d (6) → 5p (6) → 6s (6) → 4f (7) → 5d (7) → 6p (7) → 7s (7) → 5f (8) → 6d (8) → 7p (8)
```

### E.2. Wyjątki od Aufbau

| Atom | Konfiguracja rzeczywista | Powód |
|------|--------------------------|-------|
| Cr (Z=24) | [Ar] 3d⁵ 4s¹ | półpełna d⁵ |
| Cu (Z=29) | [Ar] 3d¹⁰ 4s¹ | pełna d¹⁰ |
| Nb (Z=41) | [Kr] 4d⁴ 5s¹ | odstępstwo |
| Mo (Z=42) | [Kr] 4d⁵ 5s¹ | półpełna d⁵ |
| Ag (Z=47) | [Kr] 4d¹⁰ 5s¹ | pełna d¹⁰ |
| Au (Z=79) | [Xe] 4f¹⁴ 5d¹⁰ 6s¹ | pełna d¹⁰ |

### E.3. Węzły orbitali

- **kątowe:** l,
- **radialne:** n − l − 1,
- **suma:** n − 1.

**Przykład:** 3p → 1 kątowy + 1 radialny = 2.

### E.4. Most do F08 (VSEPR)

Konfiguracja elektronowa → orbitale walencyjne → geometria cząsteczki.

### E.5. Most do chemii kwantowej

Orbitale wodoropodobne, równanie Schrödingera — most akademicki.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Orbital | Obszar największego prawdopodobieństwa znalezienia elektronu. |
| Podpowłoka | Zbiór orbitali o tej samej energii (s, p, d, f). |
| Reguła Aufbau | Od najniższej energii. |
| Reguła Hunda | Pojedynczo przed parowaniem. |
| Zakaz Pauliego | Max 2 e⁻ na orbitalu. |

---

## 21. 10 ZASAD SUPERNAUKI

1. **Najpierw próbuj, potem czytaj.**
2. **Mów na głos.**
3. **Rysuj.**
4. **Powtarzaj w odstępach.**
5. **Mieszaj tematy.**
6. **Testuj się.**
7. **Tłumacz komuś.**
8. **Łap moment „aha!".**
9. **Śpij.**
10. **Bądź ciekawy.**

---

## 22. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
PODPOWŁOKI:
s = 1 orbital, 2 e⁻
p = 3 orbitale, 6 e⁻
d = 5 orbitali, 10 e⁻
f = 7 orbitali, 14 e⁻

KOLEJNOŚĆ AUFBAU:
1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p

REGUŁY:
Aufbau: od najniższej energii
Hund: pojedynczo przed parowaniem
Pauli: max 2 e⁻ na orbitalu
Madelunga: rosnąca (n+l)

WYJĄTKI:
Cr: [Ar] 3d⁵ 4s¹
Cu: [Ar] 3d¹⁰ 4s¹
Mo, Ag, Au — analogicznie

USUWANIE ELEKTRONÓW:
najpierw 4s, potem 3d

PRZYKŁADY:
H: 1s¹
C: 1s² 2s² 2p²
Na: [Ne] 3s¹
Fe: [Ar] 3d⁶ 4s²

WĘZŁY:
kątowe = l
radialne = n − l − 1
suma = n − 1

PUŁAPKI:
- 4s przed 3d (niższa energia w K, Ca)
- Cr i Cu — wyjątki
- p ma 3 orbitale
- orbitale ≠ kolorowe balony
- w Sc-Zn rzeczywista energia 3d < 4s
```

---

## 23. STATUS LEKCJI

- **Wersja 1.1** (2026-09-27).
- **Nowa numeracja:** F04.
- **Następna lekcja:** F05 Wartościowość / ładunek / stopień utlenienia.

---

**Koniec F04 MASTER v1.1**

---

## WARSTWA WYKŁADOWA MASTER 2.0 — F04

### 1. Po co zapisujemy konfigurację elektronową?

Konfiguracja elektronowa jest uporządkowanym opisem rozmieszczenia elektronów w atomie. Nie jest celem samym w sobie — ma wyjaśniać m.in. elektrony walencyjne, położenie pierwiastka i część jego właściwości chemicznych.

### 2. Powłoka, podpowłoka, orbital

Nie należy mieszać tych pojęć:

- **powłoka** — poziom energetyczny określany główną liczbą kwantową `n`;
- **podpowłoka** — typ `s`, `p`, `d`, `f` w obrębie powłoki;
- **orbital** — stan przestrzenny orbitalu, mieszczący maksymalnie dwa elektrony o przeciwnych spinach.

Liczba orbitali:

- `s` → 1 orbital → maks. 2 elektrony;
- `p` → 3 orbitale → maks. 6;
- `d` → 5 orbitali → maks. 10;
- `f` → 7 orbitali → maks. 14.

### 3. Trzy zasady, które trzeba rozumieć

**Zakaz Pauliego:** orbital może zawierać maksymalnie dwa elektrony o przeciwnych spinach.

**Reguła Hunda:** w równocennych orbitalach elektrony najpierw zajmują orbitale pojedynczo, z równoległymi spinach, zanim dojdzie do parowania.

**Zasada obsadzania od niższej energii:** elektrony zajmują dostępne stany zgodnie z ich energią; szkolny schemat przekątni jest praktycznym przybliżeniem kolejności.

### 4. Przykład: sód

Sód ma `Z = 11`, więc obojętny atom ma 11 elektronów:

`1s² 2s² 2p⁶ 3s¹`.

Suma wykładników: `2 + 2 + 6 + 1 = 11`.

Ostatni elektron znajduje się na podpowłoce `3s`, co jest zgodne z położeniem sodu w 3. okresie i grupie 1.

### 5. Skrócony zapis gazem szlachetnym

Dla sodu:

`[Ne] 3s¹`.

Skrócony zapis nie zmienia konfiguracji — tylko zastępuje jej wewnętrzną część symbolem poprzedniego gazu szlachetnego.

### 6. Jony — ważna kontrola liczby elektronów

Dla kationu liczba elektronów jest mniejsza od `Z`, a dla anionu większa.

Przykład:

`Na⁺` ma 10 elektronów, więc konfigurację taką jak neon.

`Cl⁻` ma 18 elektronów, również taką jak argon.

Nie oznacza to jednak, że sód stał się neonem albo chlor argonem — **jądro nadal ma inną liczbę protonów**.

### 7. Dlaczego elektrony walencyjne są tak ważne?

To elektrony najbardziej związane z tworzeniem wiązań i reakcjami chemicznymi w prostych modelach szkolnych. Dlatego przejście:

`układ okresowy → konfiguracja → elektrony walencyjne → wiązanie → wzór związku`

jest jednym z najważniejszych łańcuchów całego kursu.

### 8. Procedura kontrolna dla konfiguracji

Po zapisaniu konfiguracji sprawdź:

1. czy liczba elektronów zgadza się z ładunkiem i `Z`;
2. czy żadna podpowłoka nie przekracza swojej pojemności;
3. czy kolejność obsadzania jest zgodna z przyjętym modelem;
4. czy liczba elektronów walencyjnych pasuje do położenia pierwiastka;
5. czy zapis skrócony używa właściwego poprzedniego gazu szlachetnego.

### 9. Minimum MASTER

Uczeń powinien umieć nie tylko napisać konfigurację, ale **wyjaśnić, co z niej wynika i wykorzystać ją do uzasadnienia położenia pierwiastka oraz podstawowych właściwości chemicznych**.



---

<!-- ŹRÓDŁO: kanon CHE.core.md, WARSTWA MASTER v5.0 dla F04 (w. 9358–9601) -->

# F04 — WARSTWA MASTER v5.0

## F04 — KONFIGURACJA ELEKTRONOWA

### A. Główna ścieżka

```text
powłoka n
→ podpowłoka
→ orbital
→ pojemność
→ Aufbau / Madelung
→ Hund
→ Pauli
→ konfiguracja
→ elektrony walencyjne
→ jon
```

### B. Obowiązkowy model pojemności

| Podpowłoka | Liczba orbitali | Maks. e⁻ |
|---|---:|---:|
| s | 1 | 2 |
| p | 3 | 6 |
| d | 5 | 10 |
| f | 7 | 14 |

### C. Pełna kolejność obsadzania

```text
1s
2s
2p
3s
3p
4s
3d
4p
5s
4d
5p
6s
4f
5d
6p
7s
5f
6d
7p
```

### D. Konstruktor konfiguracji

HTML powinien umożliwić:

```text
wybór Z
→ automatyczna konfiguracja
→ zapis pełny
→ zapis skrócony
→ diagram orbitali
→ wskazanie elektronów walencyjnych
```

### E. Osobny tryb „atom vs jon”

Konieczne są przykłady:

```text
Fe  → [Ar] 3d⁶ 4s²
Fe²⁺ → [Ar] 3d⁶
Fe³⁺ → [Ar] 3d⁵

Cu → [Ar] 3d¹⁰ 4s¹
Cu⁺ → [Ar] 3d¹⁰
```

Reguła:

> Przy tworzeniu kationów metali przejściowych elektrony 4s usuwa się przed elektronami 3d.

### F. Wyjątki

Co najmniej:

```text
Cr → [Ar] 3d⁵ 4s¹
Cu → [Ar] 3d¹⁰ 4s¹
Mo → [Kr] 4d⁵ 5s¹
Ag → [Kr] 4d¹⁰ 5s¹
```

Rozszerzenie może obejmować Nb i Au, ale powinno być oznaczone jako warstwa zaawansowana.

### G. Model 3D orbitali

Jeżeli HTML pokazuje orbitale:

- musi wyraźnie mówić, że są to funkcje / obszary prawdopodobieństwa;
- `s`, `p`, `d`, `f` nie są torami elektronu;
- kształt jest wizualizacją matematycznego opisu, nie fotografią elektronu.

---


### ZINTEGROWANE FRAGMENTY CHE.ALL — v12.0

> Materiał przeniesiony z warstwy migracyjnej do kanonicznej lekcji. Treść zachowana; usunięto wyłącznie powtórzenia wykazane w audycie.

#### 9. DLA AMBITNYCH

## 9. DLA AMBITNYCH

- Konfiguracja podpowłokowa (1s, 2s, 2p…) — dla pierwszych ~20 pierwiastków.  
- Izobary.  
- P₄O₁₀ vs P₂O₅.  
- Wyjątki od reguły oktetu / dubletu.  
- Nietrwały SO.  
- Spalanie niecałkowite (przy niedoborze tlenu mogą powstawać CO i C).  
- Zadania łączące atom + jon + wartościowość + równanie.  
- Zapis jonowy równań.  
- Alotropia.

**Kolejność zapełniania podpowłok:**  
**Dla pierwszych 20 pierwiastków:** 1s → 2s → 2p → 3s → 3p → 4s.  
**Dalej (ambitnie):** 3d → 4p → 5s itd.

**Skojarzenie podpowłok:**  
s — 1 orbital (2 elektrony); p — 3 orbitale (6 elektronów); d — 5 orbitali (10 elektronów); f — 7 orbitali (14 elektronów).

---

<!-- źródłowy fragment: ## 9. DLA AMBITNYCH; dopasowanie: F04:4, O07:1, LAB20:1, J03:1 -->

#### 12. TEST KOŃCOWY

## 12. TEST KOŃCOWY

1. Zapisz rozmieszczenie elektronów **na powłokach** (K, L, M…): atom P (Z=15) oraz jon S²⁻.  
   *(Dla chętnych: konfiguracja podpowłokowa.)*  
2. Ustal wartościowości i napisz wzory: a) tlenek azotu(V), b) chlorek żelaza(III), c) siarczek wapnia, d) wodorotlenek sodu.  
3. Zbilansuj i określ typ reakcji:  
   a) Mg + N₂ → Mg₃N₂  
   b) 2KClO₃ →(Δ, MnO₂) 2KCl + 3O₂  
   c) Cl₂ + 2KI → 2KCl + I₂  
4. Wskaż, jaką wartościowość ma siarka w każdym z poniższych związków i podaj nazwę systematyczną tlenku (jeśli dotyczy): H₂S, SO₂, SO₃.  
5. Różnica: izotopy vs izobary (jeśli znasz — dla chętnych).  
6. Co to elektroujemność? Który pierwiastek ma największą?  
7. Jakie znasz rodzaje wiązań chemicznych? Podaj po jednym przykładzie.  
8. Co to reakcja egzotermiczna? Podaj przykład.  
9. Oblicz masę cząsteczkową H₂SO₄.  
10. Narysuj wzór strukturalny CO₂.  
11. Co to alotropia? Podaj przykład.  
12. Wyjaśnij różnicę między A, masą atomową a masą cząsteczkową.

**Odpowiedzi:**  
1. P: K2 L8 M5; S²⁻: K2 L8 M8  
2. N₂O₅; FeCl₃; CaS; NaOH  
3. a) 3Mg + N₂ → Mg₃N₂ (synteza);  
   b) 2KClO₃ —(Δ, MnO₂)→ 2KCl + 3O₂ — analiza (rozkład).  
   · Δ oznacza ogrzewanie,  
   · MnO₂ jest katalizatorem: przyspiesza reakcję, ale nie zużywa się w jej równaniu.  
   c) Cl₂ + 2KI → 2KCl + I₂ — wypieranie (lub wymiana jednokrotna).  
4. H₂S — S(II); SO₂ — S(IV), tlenek siarki(IV); SO₃ — S(VI), tlenek siarki(VI).  
5. Izotopy: ten sam Z, różny A; izobary: ten sam A, różny Z.  
6. Zdolność do przyciągania elektronów; F.  
7. Jonowe (NaCl), kowalencyjne (H₂O), metaliczne (Fe).  
8. Wydziela ciepło, np. spalanie CH₄.  
9. 2·1 + 32 + 4·16 = 98 u.  
10. O=C=O.  
11. Ten sam pierwiastek w różnych postaciach, np. O₂ i O₃.  
12. A — liczba całkowita dla izotopu; masa atomowa — średnia ważona (dziesiętna); masa cząsteczkowa — suma mas atomowych.

**Samoocena:**  
- 10–12/12 — jesteś gotowy na klasę 8.  
- 7–9/12 — wróć do sekcji, w których się pomyliłeś.  
- 0–6/12 — przejdź lekcję jeszcze raz, spokojnie, z fiszkami.

---

<!-- źródłowy fragment: ## 12. TEST KOŃCOWY; dopasowanie: F04:3, F02:2, O07:1, N02:1 -->

#### E.9. Most do L013

Kiedy przejść do L013 (zaawansowana): gdy opanujesz podstawę (12/12) i chcesz iść dalej. L013 zawiera:
- Konfiguracja podpowłokowa (1s, 2s, 2p, 3s, 3p, 4s, 3d)
- Zasady Aufbau, Hunda, Pauliego
- Stopnie utlenienia, pełny redoks, bilans elektronowy
- Stechiometria z nadmiarem, wydajnością
- Kinetyka, równowaga, stała K, Le Chatelier

**Ale nie musisz.** L013 jest zawsze dostępna. Ciekawość wystarczy.

---

**Koniec L001 MASTER v3.1**

Data: 2026-09-11  
Poprzednia: L000 Indeks v4.1  
Następna: L002 Tlenki (v2.1 — do podniesienia)



---

<!-- źródłowy fragment: ### E.9. Most do L013; dopasowanie: F04:3, X03:1, X02:1, R08:1 -->

#### LEKCJA L001e — WARTOŚCIOWOŚCI ZAAWANSOWANE (extra)

# LEKCJA L001e — WARTOŚCIOWOŚCI ZAAWANSOWANE (extra)

HTML: `CHE.001e.v01.00.html` (v1.5 mer). Nie zastępuje L001. Warstwa [ZAAWANSOWANY] / konkurs. Widgety tylko w HTML.

**Po tej lekcji (extra, nie E8 obowiązek tygodnia 1):**
- elektrony walencyjne pomagają przewidywać typowe zachowanie, ale **nie wyznaczają automatycznie** wartościowości w każdym związku;
- wartościowość (szkolna liczba połączeń) ≠ stopień utlenienia (umowna księgowość e⁻);
- grupy główne: e⁻ walencyjne ≈ zewnętrzna powłoka; metale przejściowe: ns i często (n−1)d — nie „numer grupy = e⁻ walencyjne”;
- dublet = powłoka K (H, He, Li⁺). Hel **nie** ma oktetu;
- pojemność powłoki 2n² to maksimum, nie kolejność zapełniania. Sc: [Ar] 3d¹ 4s² → powłoki 2, 8, 9, 2;
- w jonach Fe najpierw ubywa 4s (w jonie 4s wyżej niż 3d);
- Cr/Cu: konfiguracja rzeczywista bywa inna niż prosty Aufbau; „elektron przeskakuje” to skrót, nie film procesu;
- HNO₃: do nazwy kwas azotowy(V) liczy się stopień N +V, **nie** „wartościowość IV = 3σ+1π”;
- NO₂⁻ = azotyn(III); SO₃²⁻ = siarczyn(IV); NO₃⁻ = azotan(V); SO₄²⁻ = siarczan(VI);
- Ca(OH)₂ = Ca²⁺ + 2 OH⁻ (obojętność ładunku), nie dwa wiązania kowalencyjne Ca–OH; CaO vs nawias;
- HCl czysta substancja: kowalencyjne spolaryzowane; HCl(aq): jony;
- kowalencyjne ≠ zawsze cząsteczka (diament, SiO₂ — sieć);
- rozszerzony oktet (PCl₅, SF₆): bywa >8 e⁻ wokół atomu od 3. okresu; udział orbitali d to **model historyczny**;
- Δχ ~1,7 w szkole jest orientacyjna, nie ostra granica;
- redoks szkolnie: zmiana stopnia; półreakcja Fe → Fe²⁺ + 2e⁻ nie jest pełnym równaniem.

**Widgety HTML (nie kopiować do MD):** suwak walencyjny, drabina energii, podpowłoki, mini-układ, kalkulator wzoru.

<!-- ==================== END L001e ==================== -->




---

<!-- ==================== BEGIN L002 ==================== -->

<!-- źródłowy fragment: # LEKCJA L001e — WARTOŚCIOWOŚCI ZAAWANSOWANE (extra); dopasowanie: F04:4, J09:2, F05:2, F03:2 -->

---
