---
kod: K02
uid: CHE.07.K02.entalpia
tytul: Entalpia
opis: Zmiana entalpii ΔH jako liczba w kJ/mol; ΔH = Q przy stałym ciśnieniu; prawo Hessa; obliczanie ΔH z entalpii tworzenia i z energii wiązań; entalpia spalania · LO
kicker: K02 · ENERGETYKA · NOWA WERSJA
lead: W K01 energię opisywaliśmy jakościowo: produkty niżej albo wyżej. Teraz nadajemy tej różnicy liczbę w kJ/mol i uczymy się ją policzyć nawet wtedy, gdy nie da się zmierzyć reakcji bezpośrednio.
plakietki: [[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
stopka: **CHEMIA K02 v1.0** · Entalpia · 2026
---

::: minimum | Muszę umieć — 10 punktów (LO)
1. **Entalpia H** to funkcja stanu: zależy od stanu układu, nie od drogi.
2. **ΔH** reakcji przy stałym ciśnieniu jest równa ciepłu wymienionemu z otoczeniem: ΔH = Q_p.
3. ΔH < 0 — reakcja egzotermiczna (układ oddaje ciepło); ΔH > 0 — endotermiczna.
4. Jednostka ΔH: zwykle kJ/mol, odniesiona do reakcji zapisanej w równaniu.
5. Standardowa entalpia tworzenia ΔH_f° pierwiastka w stanie standardowym wynosi **0**.
6. ΔH° = Σ ΔH_f°(produkty) − Σ ΔH_f°(substraty), z uwzględnieniem współczynników.
7. **Prawo Hessa:** ΔH reakcji netto jest sumą ΔH jej etapów, niezależnie od drogi.
8. Odwrócenie równania zmienia znak ΔH; pomnożenie równania przez liczbę mnoży ΔH przez tę liczbę.
9. Przybliżenie z energii wiązań: ΔH ≈ Σ E(zerwanych) − Σ E(utworzonych).
10. ΔH to nie E_a (K01) i nie mówi nic o szybkości reakcji.
:::

::: warstwy
- understand | <b>Rozumienie:</b> ΔH jako różnica poziomów z K01; dlaczego „przy stałym ciśnieniu”; prawo Hessa jako zasada zachowania energii
- extra | <b>LO / ambitne:</b> ΔH z energii wiązań; cykle Hessa z wieloma krokami; spalanie
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
ΔH to liczba opisująca to samo, co różnica poziomów na wykresie z K01. Najważniejsze, co z niej wynika: **ΔH zależy tylko od początku i końca reakcji, nie od drogi**. Dzięki temu możemy policzyć ciepło reakcji, której nie da się zmierzyć, składając wygodne etapy o znanych ΔH.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Przeczytaj most z K01 (punkt 1), potem definicję ΔH (punkt 2). Przykłady licz samodzielnie, zanim zajrzysz do wyniku. Prawo Hessa ćwicz na cyklu, a nie na samej regule.
:::

## 0.2 | Cele i pytanie przewodnie {#cele}

::: karta basic | Po tej lekcji potrafisz
- zdefiniować ΔH i interpretować jej znak;
- obliczyć ΔH z tablicowych ΔH_f°;
- zastosować prawo Hessa do prostego cyklu;
- oszacować ΔH z energii wiązań;
- połączyć liczbę z wykresem z K01.
:::

::: karta exam | Pytanie przewodnie
Jak policzyć ciepło reakcji, której nie da się przeprowadzić czysto w kalorymetrze?
:::

## 1 | Most z K01 {#most}

| K01 (jakość) | K02 (liczba) |
|---|---|
| produkty niżej niż substraty → egzo | ΔH < 0 |
| produkty wyżej niż substraty → endo | ΔH > 0 |
| bariera E_a | E_a to nadal nie ΔH |

## 2 | Entalpia i ΔH [[understand:ROZUMIENIE]] {#entalpia}

**Entalpia H** to funkcja stanu. **Zmiana entalpii ΔH** w reakcji przy stałym ciśnieniu jest równa ciepłu wymienionemu z otoczeniem: **ΔH = Q_p**.

::: regula
**ΔH < 0 → układ oddaje ciepło (egzo). ΔH > 0 → układ pobiera ciepło (endo).**
:::

::: karta understand | Dlaczego „przy stałym ciśnieniu”?
Większość reakcji w laboratorium przebiega w otwartym naczyniu lub w roztworze pod ciśnieniem atmosferycznym. Ciepło, które wymienia układ z otoczeniem w takich warunkach, to właśnie ΔH. Dlatego w tablicach podaje się wartości dla warunków standardowych (1 bar).
:::

## 3 | Skąd bierze się ΔH — model wiązań {#wiazania}

Każda reakcja składa się z dwóch procesów:
1. **Zrywanie wiązań** w substratach — wymaga energii (wkład dodatni).
2. **Tworzenie wiązań** w produktach — uwalnia energię (wkład ujemny).

Przybliżenie: **ΔH ≈ Σ E(zerwanych) − Σ E(utworzonych)**. Energie wiązań są średnimi wartościami, więc to tylko oszacowanie.

::: odp | Przykład: H₂ + F₂ → 2HF (szacunek)
Zrywamy H–H i F–F (wkład dodatni). Tworzymy dwa wiązania H–F (wkład ujemny). Jeśli energia uwolniona jest większa niż włożona, ΔH < 0 — reakcja egzotermiczna.
:::

## 4 | Standardowe entalpie tworzenia ΔH_f° [[understand:ROZUMIENIE]] {#hf}

**ΔH_f°** to zmiana entalpii przy tworzeniu **1 mola** związku z pierwiastków w ich stanach standardowych (1 bar, zwykle 25 °C). Dla pierwiastka w stanie standardowym **ΔH_f° = 0** (np. C(grafit), H₂(g), O₂(g), Fe(s)).

::: regula
**ΔH° = Σ ΔH_f°(produkty) − Σ ΔH_f°(substraty)** — każdą wartość mnożymy przez współczynnik ze równania.
:::

::: odp | Przykład 1: spalanie metanu
CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(c)

Wartości orientacyjne (sprawdź w tablicach): ΔH_f°(CH₄) = −74,8 kJ/mol; ΔH_f°(CO₂) = −393,5 kJ/mol; ΔH_f°(H₂O, c) = −285,8 kJ/mol; ΔH_f°(O₂) = 0.

ΔH° = [−393,5 + 2·(−285,8)] − [−74,8 + 2·0] = −965,1 + 74,8 = **−890,3 kJ/mol**.

Wynik ujemny — reakcja silnie egzotermiczna, zgodnie z wykresem z K01: produkty daleko niżej.
:::

## 5 | Prawo Hessa [[extra:AMBITNE (LO)]] {#hess}

::: regula
**ΔH reakcji zależy tylko od stanu początkowego i końcowego, nie od drogi.** Jeśli reakcję rozłożymy na etapy, suma ich ΔH daje ΔH reakcji netto.
:::

::: odp | Przykład 2: cykl dla C(grafit) + ½O₂ → CO
Dane:
(1) C + O₂ → CO₂, ΔH₁ = −393,5 kJ
(2) CO + ½O₂ → CO₂, ΔH₂ = −283,0 kJ

Reakcja szukana = (1) − (2): C + ½O₂ → CO.
ΔH = ΔH₁ − ΔH₂ = −393,5 − (−283,0) = **−110,5 kJ**.

Odwrócenie drugiej reakcji zmienia znak jej ΔH; to dlatego odejmujemy ΔH₂.
:::

::: karta warning | Pułapka: odwrócenie i mnożenie
Odwrócenie równania zmienia znak ΔH. Pomnożenie równania przez 2 mnoży ΔH przez 2. Zapomnienie o tym to najczęstszy błąd w cyklach Hessa.
:::

## 6 | Entalpia spalania ΔH_c° {#spalanie}

ΔH_c° to ΔH spalenia **1 mola** substancji w nadmiarze O₂ do produktów standardowych (CO₂, H₂O ciekła). Wartości są w tablicach, a z nich można wrócić do ΔH_f° przez cykl Hessa.

## 7 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
ΔH = E_a | ΔH to różnica poziomów; E_a to bariera | Dwie różne wielkości (K01)
Pominięte współczynniki w Σ ΔH_f° | Mnożymy przez liczby ze równania | Bilans zależy od ilości moli
ΔH_f° pierwiastka ≠ 0 | W stanie standardowym ΔH_f° = 0 | Definicja
Odwrócenie reakcji bez zmiany znaku | Odwrócenie → zmiana znaku ΔH | Prawo Hessa
Mieszanie kJ z kJ/mol | ΔH podajemy na mol reakcji zapisanej w równaniu | Jednostka odnosi się do równania
:::

## 8 | Ćwiczenia {#cwiczenia}

::: karta understand | A. Interpretacja znaku
Reakcja ma ΔH = +25 kJ/mol. Czy jest egzo- czy endotermiczna? Co się dzieje z otoczeniem?

::: odp | Pokaż odpowiedź
Endotermiczna (ΔH > 0). Układ pobiera ciepło, więc otoczenie się ochładza.
:::
:::

::: karta understand | B. Trening — ΔH z tablic
Oblicz ΔH dla: 2H₂(g) + O₂(g) → 2H₂O(c), gdy ΔH_f°(H₂O, c) = −285,8 kJ/mol, a ΔH_f°(H₂, O₂) = 0.

::: odp | Pokaż odpowiedź
ΔH° = 2·(−285,8) − [2·0 + 0] = **−571,6 kJ** na reakcję zapisaną w równaniu (czyli −285,8 kJ/mol H₂O).
:::
:::

::: karta extra | C. LO — cykl Hessa
Dane: (1) C(grafit) + O₂ → CO₂, ΔH = −393,5 kJ; (2) CO₂ → CO + ½O₂, ΔH = +283,0 kJ. Oblicz ΔH dla C + ½O₂ → CO.

::: odp | Pokaż odpowiedź
Suma reakcji (1) i (2): C + O₂ + CO₂ → CO₂ + CO + ½O₂, po skróceniu C + ½O₂ → CO. ΔH = −393,5 + 283,0 = **−110,5 kJ**.
:::
:::

## 9 | Fiszki {#fiszki}

::: fiszki
Co to ΔH? | zmiana entalpii reakcji, przy stałym ciśnieniu równa Q_p | basic:podstawa
Co znaczy ΔH < 0? | reakcja egzotermiczna | basic:podstawa
ΔH_f° pierwiastka w stanie standardowym? | 0 | basic:podstawa
Co mówi prawo Hessa? | ΔH zależy tylko od stanu początkowego i końcowego | understand:rozumienie
Co się dzieje z ΔH przy odwróceniu równania? | zmienia znak | understand:rozumienie
Czy ΔH to E_a? | nie | extra:ambitne
:::

## 10 | Słownik {#slownik}

::: slownik
Entalpia H :: funkcja stanu układu, zależna od stanu, nie od drogi
ΔH (zmiana entalpii) :: różnica entalpii produktów i substratów; równa Q_p przy stałym ciśnieniu
Entalpia tworzenia ΔH_f° :: ΔH powstawania 1 mola związku z pierwiastków w stanie standardowym
Prawo Hessa :: ΔH reakcji netto jest sumą ΔH etapów
Entalpia spalania ΔH_c° :: ΔH spalenia 1 mola substancji w nadmiarze tlenu
:::

## 11 | Test {#test}

::: test
? Reakcja o ΔH = −120 kJ/mol jest:
+ egzotermiczna
- endotermiczna
- izotermiczna
- katalityczna
! ΔH < 0 — układ oddaje ciepło.

? Entalpia tworzenia O₂(g) w stanie standardowym wynosi:
- −1
+ 0
- 1
- 32
! Pierwiastek w stanie standardowym ma ΔH_f° = 0.

? Prawo Hessa mówi, że ΔH zależy od:
- drogi reakcji
+ stanu początkowego i końcowego
- katalizatora
- szybkości reakcji
! ΔH jest funkcją stanu.

? Odwrócenie równania reakcji daje:
- ten sam ΔH
+ ΔH o przeciwnym znaku
- dwukrotny ΔH
- zerowy ΔH
! Odwrócenie = zmiana znaku.

? Które zdanie jest prawdziwe?
- ΔH jest równe E_a.
+ ΔH mówi o różnicy poziomów produktów i substratów.
- ΔH zależy od szybkości reakcji.
- ΔH zawsze jest dodatnie.
! ΔH to bilans energii, nie bariera.
:::

## 12 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego tablice podają ΔH_f°, a nie ΔH wszystkich reakcji?
Istnieją tysiące reakcji, a ΔH_f° kilkuset związków wystarcza do obliczenia ΔH każdej z nich przez prawo Hessa. Tablica jest więc oszczędną bazą danych.
:::

::: karta extra | Ile energii ma jedna kanapka?
Spalanie wartości energetycznej pożywienia (kaloryczność) to w istocie ΔH_c° przeliczona na jednostkę masy. Dlatego etykiety podają kJ lub kcal — to pomiar entalpii spalania.
:::

## 13 | Wykład — entalpia jako bilans, nie jako magazyn {#wyklad}

::: karta understand | Wykład — od zera: co właściwie mierzymy
Uczeń często wyobraża sobie, że substancja „ma w sobie” entalpię jak wodę w zbiorniku. To wygodne, ale nieprecyzyjne. Entalpia to funkcja stanu: liczymy różnicę między stanem początkowym a końcowym. Dlatego nie pytamy „ile entalpii ma CH₄”, tylko „jak zmienia się entalpia, gdy CH₄ spala się do CO₂ i H₂O”.

Prawo Hessa wynika z tego wprost. Jeśli dwie drogi prowadzą z tego samego stanu początkowego do tego samego końcowego, różnica entalpii musi być taka sama. Gdyby było inaczej, można by zrobić perpetuum mobile energetyczne, co przeczy zasadzie zachowania energii.

**Mini-wykład: dlaczego tablice podają wartości dla pierwiastków jako zero.** Wybieramy umowny punkt odniesienia. Entalpia tworzenia mówi, ile energii trzeba dodać lub uzyskać, gdy związek powstaje z pierwiastków. Pierwiastki w stanie standardowym są punktem zerowym, więc ich ΔH_f° = 0.

**Mini-wykład: entalpia a ciepło w kalorymetrze.** Przy stałym ciśnieniu kalorymetr mierzy ciepło przemiany, czyli ΔH. To pomost do K03.
:::

::: karta core | W skrócie — ΔH w jednym zdaniu
ΔH to liczba w kJ/mol opisująca bilans energii reakcji przy stałym ciśnieniu; liczymy ją z tablic (ΔH_f°) albo składając etapy (Hess).
:::

## 14 | Checklista — umiem… {#checklista}

::: checklista
- [ ] zdefiniować ΔH i odczytać jego znak;
- [ ] policzyć ΔH z ΔH_f° z uwzględnieniem współczynników;
- [ ] zastosować prawo Hessa do prostego cyklu;
- [ ] przewidzieć zmianę znaku przy odwróceniu równania;
- [ ] odróżnić ΔH od E_a i od szybkości reakcji.
:::
