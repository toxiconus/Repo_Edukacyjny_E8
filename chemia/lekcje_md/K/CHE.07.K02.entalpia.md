---
kod: "K02"
tytul: "Entalpia"
poziom: LO
wymaga: "K01"
poglebia: "K03"
opis: "Pełna lekcja LO: ΔH, prawo Hessa, entalpie tworzenia i spalania, energie wiązań — ciągłość z K01 (układ/otoczenie, wykres), bez dublowania."
stan: W24 — Grok, 2026-10-09; pełna lekcja (inspiracja Khan: bond enthalpy + system/surroundings; ZPE: efekt energetyczny)
---

# K02 — Entalpia

**Dział:** Energetyka, kinetyka i równowaga (blok K)  
**Poziomy:** [LO] · [[extra:OLIMPIADA]]  
**Poprzednia:** K01 (energia reakcji — wykres, egzo/endo, E_a)  
**Następna:** K03 (kalorymetria — pomiar Q)

---

## 1. Pytanie przewodnie

**Jak przejść od jakościowego wykresu z K01 do liczby w kJ/mol — i policzyć ciepło reakcji, nawet gdy nie da się go zmierzyć bezpośrednio?**

Po tej lekcji:
- rozumiesz, czym jest ΔH i dlaczego przy stałym ciśnieniu Q_p = ΔH,
- stosujesz prawo Hessa (ΔH niezależne od drogi),
- obliczasz ΔH z tablic ΔH_f° i z energii wiązań,
- nie mylisz ΔH z E_a ani z szybkością.

---

## 2. Cele (+ 80/20)

**[LO]**
- definiuje ΔH i interpretuje znak (ΔH < 0 = egzotermiczna),
- stosuje prawo Hessa do prostych cykli,
- oblicza ΔH reakcji z standardowych entalpii tworzenia,
- szacuje ΔH z średnich energii wiązań,
- łączy wynik liczbowy z wykresem z K01 (produkty niżej/wyżej).

**[[extra]]**
- rozróżnia ΔU i ΔH; wie, kiedy przybliżenie ΔH ≈ ΔU jest sensowne,
- buduje cykle Hessa z wieloma krokami.

**80/20:**  
1. ΔH = Σ ΔH_f°(produkty) − Σ ΔH_f°(substraty).  
2. Prawo Hessa: suma ΔH po dowolnej drodze = ΔH reakcji netto.  
3. Znak ΔH = znak „czy układ oddaje, czy pobiera ciepło” (przy p = const).

---

## 3. Most z K01 (bez powtórzenia wykładu)

W K01 nauczyliśmy się:
- egzo / endo na podstawie obserwacji i wykresu,
- że E_a to bariera, a różnica poziomów S i P to jakościowy efekt energetyczny.

Tutaj ta różnica poziomów dostaje **liczbę** i nazwę: **ΔH** (w typowych warunkach szkolnych — stałe ciśnienie).

| K01 (jakość) | K02 (liczba) |
|--------------|--------------|
| P poniżej S → egzo | ΔH < 0 |
| P powyżej S → endo | ΔH > 0 |
| bariera = E_a | E_a nadal nie jest ΔH |

---

## 4. Co to jest entalpia i ΔH?

**Entalpia H** to funkcja stanu (zależy od stanu układu, nie od drogi dojścia).  
**Zmiana entalpii ΔH** w reakcji przy **stałym ciśnieniu** jest równa ciepłu wymienionemu z otoczeniem:

ΔH = Q_p

- ΔH < 0 → układ oddaje ciepło → reakcja **egzotermiczna**.  
- ΔH > 0 → układ pobiera ciepło → **endotermiczna**.

Jednostka: zwykle **kJ/mol** (na mol reakcji zapisanej w równaniu).

**Dlaczego „przy stałym ciśnieniu”?**  
W labie większość reakcji w otwartym naczyniu lub w roztworze odbywa się przy ciśnieniu atmosferycznym. Wtedy ciepło, które mierzymy (lub które „czujemy” jako wzrost/spadek T otoczenia), odpowiada właśnie ΔH.

---

## 5. Skąd się bierze ΔH? (model wiązań)

Każda reakcja:
1. **Pękanie wiązań** w substratach → wymaga energii (wkład dodatni).  
2. **Tworzenie wiązań** w produktach → uwalnia energię (wkład ujemny).

Netto:

ΔH ≈ Σ E_wiązań zerwanych − Σ E_wiązań utworzonych

(To przybliżenie — energie wiązań są średnimi; dokładniejsze są tablice ΔH_f°.)

**Przykład myślowy:**  
H₂ + F₂ → 2 HF  
- zrywamy H–H i F–F → wkład dodatni,  
- tworzymy dwa H–F → wkład ujemny,  
- jeśli |uwolnione| > |włożone| → ΔH < 0 (egzo).

---

## 6. Standardowe entalpie tworzenia ΔH_f°

**ΔH_f°** = zmiana entalpii przy tworzeniu **1 mola** związku z pierwiastków w ich stanach standardowych (najtrwalsza forma w warunkach standardowych: 1 bar, zwykle 25 °C).

Dla pierwiastka w stanie standardowym: **ΔH_f° = 0** (np. C(grafit), H₂(g), O₂(g), Fe(s)).

**Wzór kluczowy:**

ΔH° = Σ ΔH_f°(produkty) − Σ ΔH_f°(substraty)

(z uwzględnieniem współczynników stechiometrycznych).

**Przykład prowadzony 1**

CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)

Dane (orientacyjne, [do weryfikacji w tablicach]):  
ΔH_f°(CH₄) = −74,8 kJ/mol  
ΔH_f°(CO₂) = −393,5 kJ/mol  
ΔH_f°(H₂O,l) = −285,8 kJ/mol  
ΔH_f°(O₂) = 0  

ΔH° = [(−393,5) + 2(−285,8)] − [(−74,8) + 2(0)] = −393,5 − 571,6 + 74,8 = **−890,3 kJ/mol**

Wynik ujemny → silnie egzotermiczna (spalanie metanu) — zgodne z wykresem z K01: produkty dużo niżej.

---

## 7. Prawo Hessa

**ΔH zależy tylko od stanu początkowego i końcowego — nie od drogi.**

Jeśli reakcję można rozłożyć na etapy, suma ΔH etapów = ΔH reakcji netto.

**Po co?**  
Niektórych reakcji nie da się przeprowadzić czysto w kalorymetrze (uboczne produkty, zbyt wolne, niebezpieczne). Mierzymy etapy „wygodne” i składamy.

**Przykład prowadzony 2 — cykl**

Chcemy ΔH dla: C(grafit) + ½ O₂ → CO  

Znamy:  
(1) C + O₂ → CO₂  ΔH₁ = −393,5 kJ  
(2) CO + ½ O₂ → CO₂ ΔH₂ = −283,0 kJ  

Reakcja szukana = (1) − (2):  
C + ½ O₂ → CO  
ΔH = ΔH₁ − ΔH₂ = −393,5 − (−283,0) = **−110,5 kJ**

Na wykresie myślowym: ta sama różnica poziomów C→CO, niezależnie czy idziemy prosto, czy przez CO₂.

---

## 8. Entalpia spalania ΔH_c°

ΔH_c° = ΔH spalenia 1 mola substancji w nadmiarze O₂ do CO₂, H₂O (i innych tlenków w stanie standardowym).

Często podawana w tablicach; można z niej wracać do ΔH_f° przez cykle Hessa.

---

## 9. Klinika błędów

| Błąd | Popraw | Reguła |
|------|--------|--------|
| ΔH = E_a | To różne wielkości | ΔH = różnica poziomów; E_a = bariera |
| Zapominanie współczynników w Σ ΔH_f° | Mnożymy przez liczby stechiometryczne | Jak w równaniu |
| ΔH_f° pierwiastka ≠ 0 | Dla stanu standardowego = 0 | Definicja |
| Odwrócenie znaku przy odwróceniu reakcji | Odwrócenie równania → zmiana znaku ΔH | Prawo Hessa |
| Mieszanie kJ i kJ/mol bez stechiometrii | Pilnuj „na mol reakcji” | Jednostka + równanie |

---

## 10. Ćwiczenia (z kluczem)

**10A**  
1. Co oznacza ΔH < 0?  
2. Zapisz wzór na ΔH° z ΔH_f°.  
3. Dlaczego ΔH_f°(O₂) = 0?

**10B**  
4. Oblicz ΔH° dla: 2 H₂(g) + O₂(g) → 2 H₂O(l)  
   ΔH_f°(H₂O,l) = −285,8 kJ/mol.  
5. Reakcja A → B ma ΔH = −40 kJ. Jakie ΔH ma B → A?

**10C**  
6. Z prawa Hessa: X → Y ΔH = +30; Y → Z ΔH = −50. Oblicz ΔH dla X → Z.  
7. (Szacunek wiązań) Zrywamy jedno wiązanie 400 kJ/mol, tworzymy dwa po 250 kJ/mol — oszacuj znak i rząd ΔH.

**Klucz**  
1. Układ oddaje ciepło (egzotermiczna).  
2. ΣΔH_f°(prod) − ΣΔH_f°(substr).  
3. Pierwiastek w stanie standardowym — definicja.  
4. ΔH° = 2(−285,8) − 0 = **−571,6 kJ** (na równanie z 2 mol H₂O).  
5. **+40 kJ**.  
6. **−20 kJ**.  
7. Wkład +400; uwolnione −500; ΔH ≈ **−100 kJ** (egzo).

---

## 11. Test (3+2+2+1)

**A.** Zdefiniuj ΔH i podaj wzór z ΔH_f°.  
**B.** Prawda/fałsz: a) Prawo Hessa mówi, że ΔH zależy od drogi. b) ΔH_f° pierwiastka w stanie std = 0.  
**C.** Oblicz ΔH°: C₃H₈(g) + 5 O₂ → 3 CO₂ + 4 H₂O(l)  
   (ΔH_f° orientacyjne: C₃H₈ = −104; CO₂ = −394; H₂O(l) = −286; O₂ = 0).  
**D.** Jednym zdaniem: różnica między ΔH a E_a.

**Klucz**  
A: ciepło przy p=const; Σprod − Σsubstr.  
B: a) F; b) P.  
C: [3(−394)+4(−286)] − [(−104)] = −1182 −1144 +104 = **−2222 kJ** (orientacyjnie).  
D: ΔH = różnica energii produktów i substrateów; E_a = wysokość bariery.

---

## 12. [[extra:OLIMPIADA]]

- ΔH = ΔU + Δ(pV); dla reakcji gazowych przy 25 °C często ΔH ≈ ΔU + Δn_g·RT.  
- Cykle Hessa z więcej niż dwoma etapami; entalpie fazowe (parowanie, topnienie) jako dodatkowe stopnie.  
- Krytyka przybliżenia energii wiązań (średnie vs rzeczywiste w cząsteczce).

---

## 13. Słownik

| Termin | Definicja |
|--------|-----------|
| ΔH | Zmiana entalpii; przy p=const równa ciepłu Q_p |
| ΔH_f° | Standardowa entalpia tworzenia 1 mola z pierwiastków |
| ΔH_c° | Standardowa entalpia spalania 1 mola |
| Prawo Hessa | ΔH niezależne od drogi — tylko od stanu początkowego i końcowego |
| Energia wiązania | Energia potrzebna do zerwania 1 mola wiązań (średnia) |

---

## 14. Co dalej?

- **K03** — jak zmierzyć Q w kalorymetrze i powiązać z ΔH.  
- Nie wracaj do rysowania wykresów egzo/endo od zera (to K01) — tu tylko liczby i cykle.

---

## AUDYT Grok — 2026-10-09 (W24)

**Źródła inspiracji (pedagogika, nie kopiowanie treści):**  
Khan Academy (system/surroundings, bond breaking/forming → net ΔH); ZPE.gov.pl (efekt energetyczny, bariera — most do K01/K06).  

**Zakres:** pełny wykład LO bez dublowania K01; przykłady prowadzone; klinika; ćwiczenia + test z kluczem; extra olimpijska.  
**Wartości ΔH_f°:** orientacyjne szkolne — [do weryfikacji w aktualnych tablicach].  
**Status:** UZUPEŁNIONE — jakość > sztuczna objętość; gotowe do łączenia z K01/K03 w większą partię.
