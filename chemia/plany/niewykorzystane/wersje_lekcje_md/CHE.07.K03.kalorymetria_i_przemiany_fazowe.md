---
kod: "K03"
tytul: "Kalorymetria i przemiany fazowe"
poziom: LO
wymaga: "K02"
poglebia: "—"
opis: "Pełna lekcja LO: ciepło właściwe, kalorymetr, ciepło przemian fazowych, wykres ogrzewania, obliczenia bilansu cieplnego."
stan: W23 — Grok, 2026-10-09; pełna lekcja od zera (DO IMPLEMENTACJI → UZUPEŁNIONE); W1 nieprzeprowadzony — wartości liczbowe do weryfikacji
---

# K03 — Kalorymetria i przemiany fazowe

**Dział:** Energetyka, kinetyka i równowaga (blok K)  
**Poziomy:** LO  
**Poprzednia:** K02 (entalpia)  
**Następna:** K04 (szybkość) / zastosowanie w laborze

## KARTA STARTOWA LO — 12 rzeczy, które muszę umieć

1. Ciepło właściwe *c* = ilość ciepła potrzebna do podniesienia temperatury 1 g (lub 1 kg) substancji o 1 °C (lub 1 K).
2. Wzór podstawowy: **Q = m · c · ΔT** (bez przemiany fazowej).
3. Jednostki: *c* często w J/(g·°C) lub J/(kg·K); Q w dżulach lub kJ.
4. Kalorymetr = urządzenie do pomiaru ciepła wymienianego w procesie (reakcja, rozpuszczanie, ogrzewanie).
5. W idealnym kalorymetrze: ciepło oddane = ciepło pobrane (bilans: Q₁ + Q₂ + … = 0).
6. Ciepło topnienia *q<sub>t</sub>* (lub ΔH<sub>fus</sub>) = ciepło potrzebne do stopienia 1 g (1 mola) ciała stałego w T topnienia **bez zmiany temperatury**.
7. Ciepło parowania *q<sub>p</sub>* (lub ΔH<sub>vap</sub>) = ciepło potrzebne do odparowania 1 g (1 mola) cieczy w T wrzenia **bez zmiany temperatury**.
8. Wzory: **Q = m · q<sub>t</sub>** (topnienie/krzepnięcie); **Q = m · q<sub>p</sub>** (parowanie/skraplanie).
9. Wykres ogrzewania (krzywa grzania): odcinki pochyłe = zmiana T (Q = mcΔT); odcinki poziome = przemiana fazowa (T = const, Q = m·q).
10. Kolejność przy ogrzewaniu lodu od −10 °C do pary 120 °C: ogrzewanie lodu → topnienie → ogrzewanie wody → parowanie → ogrzewanie pary.
11. Przy krzepnięciu i skraplaniu ciepło jest **wydzielane** (te same wartości *q*, przeciwny znak w bilansie).
12. Błędy typowe: mieszanie jednostek (g vs kg, J vs kJ), zapominanie odcinka fazowego, mylenie *c* wody z *c* lodu/pary.

### Diagnoza wejściowa (8 pytań)

1. Zapisz wzór na ciepło ogrzewania bez przemiany fazowej.
2. Co to ciepło właściwe?
3. Co dzieje się z temperaturą podczas topnienia czystej substancji pod stałym ciśnieniem?
4. Zapisz wzór na ciepło topnienia.
5. Co mierzy kalorymetr?
6. W bilansie cieplnym suma Q wynosi…?
7. Które odcinki na wykresie ogrzewania są poziome?
8. *c* wody ≈ 4,2 J/(g·°C). Ile ciepła potrzeba, by ogrzać 100 g wody o 10 °C?

**Klucz:**  
1. Q = m·c·ΔT  
2. ciepło na jednostkę masy i jednostkę przyrostu T  
3. temperatura stała  
4. Q = m·q<sub>t</sub>  
5. ciepło wymienione w procesie  
6. zero (w układzie izolowanym)  
7. przemiany fazowe (topnienie, parowanie)  
8. Q = 100·4,2·10 = 4200 J = 4,2 kJ  

**Interpretacja:**  
- 0–3/8 → zacznij od sekcji 5–6 i wróć do przykładów.  
- 4–6/8 → przejdź przez wykres i bilans, potem ćwiczenia.  
- 7–8/8 → skup się na zadaniach złożonych (kilka etapów).

**Pytanie przewodnie:** Jak zmierzyć i obliczyć ciepło, które „znika” albo „pojawia się”, gdy substancja się ogrzewa, topi lub paruje?

---

## 2. Cele lekcji (+ 80/20)

**Po tej lekcji uczeń:**
- stosuje wzór Q = m·c·ΔT i Q = m·q (topnienie/parowanie);
- interpretuje wykres ogrzewania / oziębiania (odcinki pochyłe i poziome);
- układa i rozwiązuje bilans cieplny w kalorymetrze (w tym z przemianą fazową);
- rozróżnia ciepło właściwe, ciepło topnienia i ciepło parowania;
- unika typowych pułapek jednostek i znaków.

**80/20 (to, co daje większość punktów):**
- Q = mcΔT + rozpoznanie, kiedy dodać m·q<sub>t</sub> / m·q<sub>p</sub>;
- odczyt z wykresu: gdzie T rośnie, gdzie stoi;
- bilans: ciepło oddane = ciepło pobrane.

---

## 3. Co trzeba wiedzieć wcześniej

- Pojęcie temperatury i różnicy ΔT (K01).
- ΔH i znak ciepła (K02) — jakościowo: egzo/endo.
- Stany skupienia i przemiany: topnienie, krzepnięcie, parowanie, skraplanie.
- Jednostki masy i energii (g, kg, J, kJ).

---

## 4. Zacznij od problemu

**Sytuacja:** Masz kostkę lodu prosto z zamrażalnika (−10 °C). Wrzuć ją do szklanki z wodą o temperaturze pokojowej.  
**Hipoteza ucznia (przed lekcją):** „Lód się ogrzeje i woda się oziębi, aż będą miały tę samą temperaturę — i już.”  
**Po lekcji:** Najpierw lód musi dojść do 0 °C, potem się stopić (dużo ciepła przy T = const), potem powstała woda ogrzewa się dalej. Bilans cieplny uwzględnia **wszystkie** etapy. Temperatura końcowa zależy od mas i od ciepła topnienia, nie tylko od *c*.

---

## 5. Ściąga — wzory i wartości orientacyjne

| Wielkość | Wzór | Typowa jednostka | Uwagi |
|----------|------|------------------|-------|
| Ciepło ogrzewania / oziębiania | Q = m · c · ΔT | J lub kJ | ΔT = T<sub>k</sub> − T<sub>p</sub> |
| Ciepło topnienia / krzepnięcia | Q = m · q<sub>t</sub> | J lub kJ | T = const = T<sub>topn</sub> |
| Ciepło parowania / skraplania | Q = m · q<sub>p</sub> | J lub kJ | T = const = T<sub>wrz</sub> |
| Bilans w kalorymetrze | Σ Q = 0 | — | oddane + pobrane = 0 |

**Wartości orientacyjne (woda) — [do weryfikacji w tablicach]:**  
- *c* wody (ciecz) ≈ 4,19 J/(g·°C) ≈ 4180 J/(kg·K)  
- *c* lodu ≈ 2,1 J/(g·°C)  
- *c* pary wodnej ≈ 2,0 J/(g·°C)  
- *q<sub>t</sub>* lodu ≈ 334 J/g  
- *q<sub>p</sub>* wody ≈ 2260 J/g (przy 100 °C)

**Mnemotechnika:**  
**Pochyłe = temperatura się zmienia (mcΔT).**  
**Poziome = faza się zmienia, T stoi (m·q).**

---

## 6. Wyjaśnienie od podstaw

### 6A. Dlaczego w ogóle mierzymy ciepło?

Reakcje chemiczne i przemiany fizyczne wymieniają energię z otoczeniem. Kalorymetria pozwala **zmierzyć** tę energię (Q) i powiązać ją z ΔH (K02). Bez pomiaru zostajemy tylko przy znaku „egzo/endo”.

### 6B. Ciepło właściwe i wzór Q = mcΔT

Różne substancje „opierają się” zmianie temperatury w różnym stopniu. Woda ma stosunkowo duże *c* — dlatego ocean stabilizuje klimat, a grzejnik z wodą długo trzyma ciepło.

**Przykład prowadzony 1**  
Ile ciepła potrzeba, by ogrzać 250 g wody od 20 °C do 80 °C?  
ΔT = 60 °C  
Q = 250 g · 4,19 J/(g·°C) · 60 °C ≈ 62 850 J ≈ **62,9 kJ**

### 6C. Przemiany fazowe — dlaczego T stoi?

Przy topnieniu dostarczana energia idzie na zerwanie uporządkowania sieci (lód → woda), a nie na zwiększenie energii kinetycznej cząsteczek. Dlatego temperatura **nie rośnie**, dopóki cały lód się nie stopi. Analogicznie przy parowaniu.

**Przykład prowadzony 2**  
Ile ciepła potrzeba, by stopić 50 g lodu w 0 °C?  
Q = 50 g · 334 J/g = **16 700 J = 16,7 kJ**  
(temperatura pozostaje 0 °C)

**Przykład prowadzony 3 — kilka etapów**  
Ogrzewamy 20 g lodu od −10 °C do wody w 30 °C.  
1. Ogrzanie lodu −10 → 0 °C: Q₁ = 20 · 2,1 · 10 = 420 J  
2. Topnienie: Q₂ = 20 · 334 = 6680 J  
3. Ogrzanie wody 0 → 30 °C: Q₃ = 20 · 4,19 · 30 ≈ 2514 J  
**Razem Q ≈ 420 + 6680 + 2514 = 9614 J ≈ 9,6 kJ**

### 6D. Kalorymetr i bilans cieplny

W kalorymetrze (przybliżenie układu izolowanego):  
ciepło oddane przez jedno ciało = ciepło pobrane przez drugie.  

Zapisujemy:  
m₁ · c₁ · (T₁ − T<sub>k</sub>) = m₂ · c₂ · (T<sub>k</sub> − T₂)  
albo ogólniej Σ Q = 0 (z znakami: oddane ujemne, pobrane dodatnie — konwencja bywa różna, ważne by być konsekwentnym).

**Przykład prowadzony 4 — kalorymetr**  
W kalorymetrze 100 g wody w 20 °C. Dodajemy 50 g metalu o T = 100 °C. T końcowa = 25 °C. *c* wody = 4,19 J/(g·°C). Oblicz *c* metalu.  

Ciepło oddane przez metal = ciepło pobrane przez wodę  
50 · c<sub>m</sub> · (100 − 25) = 100 · 4,19 · (25 − 20)  
50 · c<sub>m</sub> · 75 = 100 · 4,19 · 5  
3750 · c<sub>m</sub> = 2095  
c<sub>m</sub> ≈ **0,56 J/(g·°C)**

### 6E. Wykres ogrzewania (krzywa grzania)

```
T
↑
│                    ╱ para (c_pary)
│                   ╱
│        ──────────   ← parowanie (T = 100 °C, Q = m·q_p)
│       ╱
│      ╱ woda (c_wody)
│     ╱
│ ───      ← topnienie (T = 0 °C, Q = m·q_t)
│╱
│  lód (c_lodu)
└──────────────────→ Q (ciepło dostarczone)
```

- Odcinek **pochyły**: T rośnie, faza stała → Q = mcΔT  
- Odcinek **poziomy**: T stała, faza się zmienia → Q = m·q  

Im dłuższy odcinek poziomy, tym większe *q* (przy tej samej masie i tej samej skali).

### 6F. Powiązanie z innymi lekcjami

- K01 / K02: znak Q i ΔH (egzo/endo).  
- R01: woda jako substancja o dużym *c*.  
- F03: stany skupienia i przemiany fazowe.  
- Laboratorium: pomiar *c* lub *q<sub>t</sub>* w kalorymetrze szkolnym.

---

## 7. Klinika błędów

| Błąd | Co nie tak? | Popraw | Reguła |
|------|-------------|--------|--------|
| Q = m·c·T zamiast ΔT | Bierzesz temperaturę bezwzględną | ΔT = T<sub>k</sub> − T<sub>p</sub> | Zawsze różnica |
| Zapominanie topnienia przy ogrzewaniu lodu | Liczysz tylko mcΔT od −10 do 20 | Dodaj m·q<sub>t</sub> przy 0 °C | Każda przemiana fazowa ma swój odcinek |
| Mieszanie g i kg | *c* w J/g, masa w kg | Ujednolić jednostki | Sprawdź przed podstawieniem |
| Zły znak w bilansie | Oba Q dodatnie | Oddane = − pobrane albo ΣQ=0 | Konsekwentna konwencja |
| *c* lodu = *c* wody | Różne wartości | Użyj właściwego *c* dla fazy | Faza ma swoje *c* |
| T rośnie podczas topnienia | Na wykresie poziomo | T = const do końca przemiany | Poziomy = faza |

**Klinika 2.0 (ćwiczenie):**  
Znajdź błąd → popraw → nazwij regułę → wyjaśnij dlaczego → zadanie podobne.

---

## 8. Obserwacja / model (kalorymetr szkolny)

**Problem:** Jakie jest ciepło właściwe nieznanego metalu?  
**Materiał:** kalorymetr z wodą, termometr, metal ogrzany w wrzątku, waga.  
**Procedura:** zważ metal i wodę; zmierz T początkowe; wrzuć metal; zmierz T końcową; podstaw do bilansu.  
**Obserwacja:** temperatura wody rośnie, metalu spada → wspólna T<sub>k</sub>.  
**Wniosek:** z bilansu obliczamy *c* metalu.  
**Ograniczenia:** straty ciepła do otoczenia, pojemność cieplna naczynia (czasem trzeba uwzględnić), niedokładność termometru.  
**BHP:** wrzątek — ostrożność przy przenoszeniu; nie dotykać gorącego metalu gołą ręką.

---

## 9. Ćwiczenia (z kluczem)

### 9A. Podstawowe

1. Oblicz Q potrzebne do ogrzania 200 g wody od 15 °C do 75 °C (*c* = 4,19 J/(g·°C)).  
2. Ile ciepła wydzieli się przy krzepnięciu 30 g wody w 0 °C (*q<sub>t</sub>* = 334 J/g)?  
3. Na wykresie ogrzewania odcinek poziomy przy 100 °C odpowiada jakiej przemianie?  
4. Zapisz bilans: gorący metal oddaje ciepło wodzie w kalorymetrze (słowami i schematem).

### 9B. Trening

5. 40 g lodu w −5 °C zamieniamy w wodę w 20 °C. Oblicz całkowite Q (*c* lodu = 2,1; *c* wody = 4,19; *q<sub>t</sub>* = 334).  
6. W kalorymetrze 150 g wody w 18 °C. Dodano 80 g żelaza w 100 °C. T<sub>k</sub> = 22 °C. Oblicz *c* żelaza (*c* wody = 4,19).  
7. Dlaczego na wykresie ogrzewania odcinek parowania jest zwykle dłuższy niż topnienia (przy tej samej masie wody)?

### 9C. Transfer

8. Czy do stopienia 1 g lodu potrzeba więcej, mniej, czy tyle samo ciepła co do ogrzania 1 g wody o 1 °C? Uzasadnij liczbami.  
9. Projekt: jak w szkolnym labie zmierzyć w przybliżeniu *q<sub>t</sub>* lodu? (krótki plan)

### Klucz

1. Q = 200 · 4,19 · 60 = 50 280 J ≈ **50,3 kJ**  
2. Q = 30 · 334 = 10 020 J ≈ **10,0 kJ** (wydzielone)  
3. Parowanie wody.  
4. Q<sub>metal</sub> (ujemne) + Q<sub>woda</sub> (dodatnie) = 0; m<sub>m</sub>c<sub>m</sub>(T<sub>m</sub>−T<sub>k</sub>) = m<sub>w</sub>c<sub>w</sub>(T<sub>k</sub>−T<sub>w</sub>).  

5. Q₁ (lód −5→0) = 40·2,1·5 = 420 J  
   Q₂ (topnienie) = 40·334 = 13 360 J  
   Q₃ (woda 0→20) = 40·4,19·20 = 3352 J  
   **Razem ≈ 17 132 J ≈ 17,1 kJ**  

6. 80 · c · (100−22) = 150 · 4,19 · (22−18)  
   80 · c · 78 = 150 · 4,19 · 4  
   6240 c = 2514  
   c ≈ **0,40 J/(g·°C)**  

7. Bo *q<sub>p</sub>* (≈2260 J/g) ≫ *q<sub>t</sub>* (≈334 J/g) — dużo więcej energii na oderwanie cząsteczek do fazy gazowej.  

8. Na ogrzanie 1 g wody o 1 °C: ≈4,2 J. Na stopienie 1 g lodu: ≈334 J. **Znacznie więcej** na topnienie.  
9. Zważyć lód; wrzucić do znanej masy wody o znanej T; zmierzyć T<sub>k</sub>; z bilansu (uwzględniając topnienie) wyliczyć *q<sub>t</sub>*. Uwzględnić przybliżenia (straty, *c* naczynia).

---

## 10. Test końcowy (3+2+2+1)

**A. (3 pkt)**  
1. Zapisz wzory: ciepło ogrzewania, ciepło topnienia, ciepło parowania.  
2. Na wykresie ogrzewania: co oznaczają odcinki pochyłe, a co poziome?  
3. Oblicz Q ogrzania 50 g wody od 10 °C do 60 °C (*c* = 4,2 J/(g·°C)).

**B. (2 pkt)** Prawda/fałsz:  
a) Podczas topnienia czystej substancji temperatura rośnie.  
b) W bilansie kalorymetrycznym suma ciepł wynosi zero (układ izolowany).

**C. (2 pkt)**  
40 g lodu w 0 °C wrzucono do 100 g wody w 40 °C. Zakładając, że cały lód się stopił i T<sub>k</sub> > 0, ułóż równanie bilansu (nie licz liczbowo). *c* wody = 4,2; *q<sub>t</sub>* = 334.

**D. (1 pkt)**  
Dlaczego *q<sub>p</sub>* wody jest dużo większe niż *q<sub>t</sub>*?

**Klucz testu**  
A1: Q=mcΔT; Q=m·q<sub>t</sub>; Q=m·q<sub>p</sub>  
A2: pochyłe = zmiana T (faza stała); poziome = przemiana fazowa (T=const)  
A3: 50·4,2·50 = 10 500 J = 10,5 kJ  
B: a) fałsz; b) prawda  
C: ciepło na topnienie lodu + ciepło na ogrzanie powstałej wody od 0 do T<sub>k</sub> = ciepło oddane przez wodę od 40 do T<sub>k</sub>  
   40·334 + 40·4,2·(T<sub>k</sub>−0) = 100·4,2·(40−T<sub>k</sub>)  
D: Parowanie wymaga zerwania większej liczby oddziaływań (przejście do fazy gazowej) niż topnienie (pozostanie w fazie skondensowanej).

---

## 11. Checklista przed sprawdzianem

- [ ] Stosuję Q = mcΔT z ΔT (nie z T).  
- [ ] Wiem, kiedy dodać m·q<sub>t</sub> / m·q<sub>p</sub>.  
- [ ] Czytam wykres: pochyłe vs poziome.  
- [ ] Układam bilans ΣQ = 0.  
- [ ] Ujednolicam jednostki (g/kg, J/kJ).  
- [ ] Znam orientacyjne wartości dla wody (rząd wielkości).

---

## 12. Mapa pojęć

```
Ciepło Q
├── bez zmiany fazy → Q = m·c·ΔT
│     └── c = ciepło właściwe (zależy od fazy)
└── z zmianą fazy → Q = m·q
      ├── q_t topnienie / krzepnięcie
      └── q_p parowanie / skraplanie

Kalorymetr → bilans ΣQ = 0
Wykres ogrzewania → pochyłe (ΔT) + poziome (faza)
```

---

## 13. Słownik

| Termin | Definicja |
|--------|-----------|
| Ciepło właściwe *c* | Ciepło potrzebne do zmiany T jednostki masy o 1 °C (1 K) |
| Ciepło topnienia *q<sub>t</sub>* | Ciepło potrzebne do stopienia jednostki masy w T topnienia |
| Ciepło parowania *q<sub>p</sub>* | Ciepło potrzebne do odparowania jednostki masy w T wrzenia |
| Kalorymetr | Urządzenie do pomiaru ciepła wymienianego w procesie |
| Bilans cieplny | Równanie: ciepło oddane + ciepło pobrane = 0 (układ izolowany) |
| Wykres ogrzewania | Zależność T od dostarczonego ciepła Q |

---

## 14. Co dalej?

- K04 — szybkość reakcji (kinetyka — inny aspekt „jak szybko”, nie „ile ciepła”).  
- Laboratorium: pomiar *c* metalu lub przybliżone *q<sub>t</sub>* lodu.  
- Powtórka z K01–K02: znak Q a ΔH.

---

## AUDYT Grok — 2026-10-09

**Co zrobiono:**  
Pełna lekcja od zera (status DO IMPLEMENTACJI). Struktura kanoniczna: karta 12 pkt, diagnoza 8 pytań, cele 80/20, kompas, problem wejściowy, ściąga z wzorami i wartościami orientacyjnymi, wykład 6A–6F z 4 przykładami prowadzonymi (w tym wieloetapowy i kalorymetr), klinika błędów z tabelą, obserwacja/model, ćwiczenia 9A–C z pełnym kluczem, test 3+2+2+1 z kluczem, checklista, mapa, słownik.  

**Wartości liczbowe** (*c*, *q<sub>t</sub>*, *q<sub>p</sub>*) — orientacyjne szkolne; oznaczone [do weryfikacji w tablicach].  

**Czego nie sprawdzono:**  
- Porównanie z konkretnym podręcznikiem / arkuszem CKE.  
- Niezależna recenzja liczb.  
- Szczegółowa korekta na pojemność cieplną naczynia kalorymetru (poziom rozszerzony).  

**Status:** UZUPEŁNIONE — gotowe do warstwy HTML / recenzji.
