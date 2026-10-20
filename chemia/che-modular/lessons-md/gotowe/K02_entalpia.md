***
kod: K02
tytul: Entalpia
opis: zmiana entalpii ΔH · entalpia jako funkcja stanu · ciepło reakcji przy stałym ciśnieniu · standardowa entalpia tworzenia ΔHf · prawo Hessa · entalpia spalania · energia wiązań · reakcje egzotermiczne i endotermiczne · jednostka kJ/mol
uid: CHE.07.K02.entalpia
kicker: K02 · CHEMIA · Energetyka · NOWA WERSJA · POZIOM ROZSZERZONY / KONKURS
lead: W K01 energię opisywaliśmy jakościowo: produkty niżej albo wyżej. Teraz nadajemy tej różnicy liczbę w kJ/mol i uczymy się ją obliczać, nawet wtedy, gdy reakcji nie da się przeprowadzić bezpośrednio w kalorymetrze.
plakietki: [[understand:ROZUMIENIE]][[extra:AMBITNE]][[extra:LO]]
uwaga: Lekcja należy do poziomu rozszerzonego. Zmiana entalpii ΔH odnosi się do reakcji zapisanej w równaniu, z uwzględnieniem współczynników stechiometrycznych. Standardowe entalpie tworzenia odnoszą się do warunków standardowych określonych w danej tablicy. Entalpia nie jest energią aktywacji i nie przesądza o szybkości reakcji.
stopka: CHEMIA K02 · Entalpia · Materiał do samodzielnej nauki · 2026
stan: ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia
***

::: minimum | Muszę umieć — 10 punktów
1. Wyjaśniam, że entalpia H jest funkcją stanu: jej zmiana zależy od stanu początkowego i końcowego, nie od drogi przemiany.
2. Zapisuję, że przy stałym ciśnieniu zmiana entalpii reakcji odpowiada ciepłu wymienionemu z otoczeniem: ΔH = Qp.
3. Rozróżniam reakcję egzotermiczną: ΔH < 0, od reakcji endotermicznej: ΔH > 0.
4. Podaję jednostkę ΔH: zwykle kJ/mol, odniesioną do reakcji zapisanej w równaniu.
5. Zapisuję, że standardowa entalpia tworzenia pierwiastka w stanie standardowym wynosi 0.
6. Obliczam ΔH reakcji z standardowych entalpii tworzenia: ΔH = ΣΔHf(produkty) − ΣΔHf(substraty), z uwzględnieniem współczynników.
7. Zapisuję prawo Hessa: ΔH reakcji netto jest sumą ΔH jej etapów, niezależnie od drogi.
8. Wyjaśniam, że odwrócenie równania zmienia znak ΔH, a pomnożenie równania przez liczbę mnoży ΔH przez tę liczbę.
9. Stosuję przybliżenie z energii wiązań: ΔH ≈ ΣE(wiązań rozerwanych) − ΣE(wiązań utworzonych).
10. Rozróżniam ΔH od energii aktywacji Ea: ΔH opisuje bilans energetyczny reakcji, a Ea barierę jej rozpoczęcia.
:::

::: warstwy
- understand | <b>Rozumienie:</b> co właściwie mierzymy jako ΔH, dlaczego entalpia jest funkcją stanu, dlaczego pierwiastki w stanie standardowym mają ΔHf = 0 oraz jak znak ΔH łączy się z wykresem z K01.
- extra | <b>Poziom rozszerzony:</b> obliczenia ΔH z entalpii tworzenia, prawo Hessa, entalpia spalania oraz przybliżenie z energii wiązań.
- contest | <b>Konkurs:</b> cykle Hessa, odwracanie i mnożenie równań, analiza znaku ΔH, rozróżnianie ΔH i Ea oraz sprawdzanie jednostek i współczynników.
- extra | <b>Ambitne:</b> ograniczenia przybliżenia wiązaniami, różnica między ΔH a ΔE, wpływ warunków na wartości tablicowe oraz związek entalpii z kalorymetrią.
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
- [§1](#most) — Most z K01: od wykresu do liczby.
- [§2](#definicja) — Entalpia jako bilans, nie magazyn.
- [§3](#wiazania) — Skąd bierze się ΔH: model wiązań.
- [§4](#hess) — Prawo Hessa.
- [§5](#przyklady) — Przykłady prowadzone.
- [§6](#klinika) — Klinika błędów.
- [§7](#cwiczenia) — Ćwiczenia z kluczem.
- [§8](#slownik) — Słownik.
- [§9](#test) — Test końcowy.
- [§10](#checklista) — Checklista.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

Po tej lekcji potrafisz:

- zdefiniować ΔH i interpretować jego znak;
- obliczyć ΔH z tablicowych ΔHf;
- zastosować prawo Hessa do prostego cyklu;
- oszacować ΔH z energii wiązań;
- połączyć liczbę ΔH z wykresem energetycznym z K01.

Kolejność pracy:

1. Przeczytaj most z K01 w [§1](#most). Przypomni, że znak ΔH opisuje bilans energii, a nie szybkość reakcji.
2. W [§2](#definicja) zrozum, dlaczego entalpia jest funkcją stanu. Nie pytaj, „ile entalpii ma metan”, lecz „jak zmienia się entalpia podczas spalania metanu”.
3. W [§3](#wiazania) przećwicz model rozerwania i tworzenia wiązań. Pamiętaj, że jest to przybliżenie.
4. W [§4](#hess) ćwicz prawo Hessa na cyklu reakcji. Najpierw samodzielnie ustal znaki i współczynniki.
5. Przykłady w [§5](#przyklady) licz samodzielnie, a dopiero potem sprawdź klucz.
6. Test i ćwiczenia rozwiązuj bez zaglądania do treści. Błędne odpowiedzi wskażą zagadnienie do powtórki.

Przydatne wcześniej: ciepło i znak efektu energetycznego z K01, temperatura i różnica temperatur z F03 oraz K01, stany skupienia i przemiany fazowe z F03 oraz K01, jednostki masy i energii.

## 0.2 | Cele i pytanie przewodnie {#cele}

Pytanie przewodnie: **Jak obliczyć ciepło reakcji, którego nie da się zmierzyć bezpośrednio w kalorymetrze?**

Po tej lekcji potrafisz:

- zdefiniować ΔH i odczytać jego znak;
- obliczyć ΔH z ΔHf z uwzględnieniem współczynników;
- zastosować prawo Hessa do prostego cyklu;
- przewidzieć zmianę znaku przy odwrceniu równania;
- odróżnić ΔH od Ea i od szybkości reakcji.

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- **Ciepło i znak efektu energetycznego** — K01, K02.
- **Temperatura i różnica temperatur** — F03, K01.
- **Stany skupienia i przemiany fazowe** — F03, K01.
- **Jednostki masy i energii** — g, kg, J, kJ.
- **Energia reakcji, Ea i katalizator** — K01.
- **Kalorymetria i bilans cieplny** — K03.

## 0.4 | Diagnoza startowa {#diagnoza}

Odpowiedz najpierw samodzielnie.

1. Zapisz wzór na ciepło ogrzewania bez przemiany fazowej.
2. Co to jest ciepło właściwe?
3. Co dzieje się z temperaturą podczas topnienia czystej substancji pod stałym ciśnieniem?
4. Zapisz wzór na ciepło topnienia.
5. Ile ciepła potrzeba, aby ogrzać 100 g wody o 10 °C, jeżeli c = 4,2 J/(g·°C)?

::: odp | Klucz diagnozy i interpretacja
1. (1 pkt) Q = m·c·ΔT.

2. (1 pkt) Ciepło właściwe to ilość ciepła potrzebna do ogrzania 1 g substancji o 1 °C.

3. (1 pkt) Temperatura pozostaje stała.

4. (1 pkt) Q = m·qt.

5. (1 pkt) Q = 100·4,2·10 = 4200 J = 4,2 kJ.

Interpretacja wyniku: 5 pkt — przejdź do wykresu i bilansu; 3–4 pkt — przeczytaj punkty 1–2; 0–2 pkt — zacznij od rdzenia.
:::

## 1 | Most z K01 — od wykresu do liczby {#most} [[understand:ROZUMIENIE]]

W K01 rozróżniałeś reakcje egzoenergetyczne i endoenergetyczne. Produkty reakcji egzoenergetycznej znajdują się niżej niż substraty, a reakcji endoenergetycznej — wyżej. Teraz tę różnicę poziomów zapisujemy liczbą.

| K01 — wykres | K02 — liczba |
|---|---|
| Produkty niżej niż substraty | Reakcja egzotermiczna, ΔH < 0 |
| Produkty wyżej niż substraty | Reakcja endotermiczna, ΔH > 0 |
| Bariera Ea | Nadal nie jest to ΔH |
| Wyższa bariera | Reakcja może zaczynać się wolniej |
| Katalizator obniża szczyt | Ea maleje, ΔH pozostaje bez zmian |

Zmiana entalpii ΔH opisuje bilans energii reakcji przy stałym ciśnieniu. Nie mówi natomiast, jak szybko reakcja zachodzi. Reakcja może wydzielać dużo ciepła, a mimo to wymagać zapłonu, jak spalanie drewna. Może też być korzystna energetycznie, ale przebiegać bardzo wolno, jak rdzewienie żelaza.

Zasada zachowania energii mówi, że energia nie znika. Jeżeli układ oddaje ciepło, otoczenie je pobiera. Jeżeli układ pobiera ciepło, otoczenie je oddaje. Suma energii układu i otoczenia pozostaje zachowana.

Aby cząsteczki zareagowały, muszą się zderzyć z odpowiednią energią i odpowiednim ustawieniem. Zanim wiązania się przebudują, układ przechodzi przez stan pośredni o wyższej energii — stan przejściowy. Stąd na wykresie pojawia się szczyt.

::: karta understand | W skrócie — energia jako bilans i bariera
Egzoenergetyczna reakcja oddaje energię i grzeje otoczenie. Endoenergetyczna pobiera energię i je ochładza. Każda reakcja, nawet egzotermiczna, potrzebuje bariery Ea, aby ruszyć.
:::

::: karta core | W skrócie — energia w jednym zdaniu
Egzoenergetyczna oddaje energię, endoenergetyczna pobiera energię, a energia aktywacji opisuje barierę rozpoczęcia reakcji.
:::

::: karta warning | Uwaga — rozróżniaj ΔH i Ea
ΔH mówi, dokąd zmierza bilans energii. Ea mówi, ile energii trzeba włożyć na start. Pomylenie tych pojęć jest jednym z najczęstszych błędów w energetyce.
:::

## 2 | Entalpia jako bilans, nie magazyn {#definicja} [[understand:ROZUMIENIE]] [[extra:LO]]

Uczeń często wyobraża sobie, że substancja ma w sobie entalpię jak wodę w zbiorniku. To wygodne, ale nieprecyzyjne. Entalpia jest funkcją stanu: obliczamy różnicę między stanem początkowym a końcowym.

Dlatego nie pytamy: „ile entalpii ma CH₄?”. Pytamy: „jak zmienia się entalpia, gdy CH₄ spala się do CO₂ i H₂O?”.

Zmiana entalpii reakcji:

ΔH = H(produkty) − H(substraty)

Przy stałym ciśnieniu zmiana entalpii odpowiada ciepłu wymienionemu z otoczeniem:

ΔH = Qp

Jeżeli ΔH < 0, reakcja jest egzotermiczna. Układ oddaje ciepło do otoczenia. Jeżeli ΔH > 0, reakcja jest endotermiczna. Układ pobiera ciepło z otoczenia.

Jednostką ΔH jest zwykle kJ/mol. Zapis „ΔH = −890 kJ/mol” odnosi się do reakcji zapisanej w równaniu, z uwzględnieniem wszystkich współczynników stechiometrycznych.

Standardowa entalpia tworzenia ΔHf to zmiana entalpii przy utworzeniu 1 mola związku z pierwiastków w ich stanach standardowych. Dla pierwiastka w stanie standardowym przyjmuje się:

ΔHf = 0

To umowny punkt odniesienia. Nie oznacza, że pierwiastek nie ma energii wewnętrznej. Oznacza jedynie, że jego entalpię tworzenia przyjęto za zero w przyjętej skali.

Przykłady:

- ΔHf(O₂, g) = 0
- ΔHf(C, grafit) = 0
- ΔHf(H₂, g) = 0

Dla związków chemicznych wartości ΔHf mogą być dodatnie albo ujemne. Są one mierzone lub obliczane względem przyjętego punktu odniesienia.

ΔH reakcji oblicza się według wzoru:

ΔH = ΣΔHf(produkty) − ΣΔHf(substraty)

Współczynniki stechiometryczne mnożą wartości ΔHf odpowiednich substancji.

Przy stałym ciśnieniu kalorymetr mierzy ciepło przemiany, czyli ΔH. To pomost między tą lekcją a kalorymetrią z K03.

::: karta understand | W skrócie — dlaczego tablice podają zero dla pierwiastków?
Wybieramy umowny punkt odniesienia. Entalpia tworzenia mówi, ile energii trzeba dodać lub uzyskać, gdy związek powstaje z pierwiastków. Pierwiastki w stanie standardowym są punktem zerowym, więc ich ΔHf = 0.
:::

::: karta core | W skrócie — ΔH w jednym zdaniu
ΔH to liczba w kJ/mol opisująca bilans energii reakcji przy stałym ciśnieniu. Oblicza się ją z tablic ΔHf albo sumując etapy według prawa Hessa.
:::

::: karta warning | Uwaga — ΔH odnosi się do równania
Zapis ΔH = −890 kJ/mol nie oznacza „na 1 mol każdej substancji”. Oznacza ciepło dla reakcji dokładnie tak, jak została zapisana, ze wszystkimi współczynnikami.
:::

## 3 | Skąd bierze się ΔH — model wiązań {#wiazania} [[understand:ROZUMIENIE]] [[extra:LO]]

Każda reakcja składa się z dwóch procesów:

1. Rozerwanie wiązań w substratach wymaga energii — wkład dodatni.
2. Tworzenie wiązań w produktach uwalnia energię — wkład ujemny.

Przybliżenie z energii wiązań zapisuje się jako:

ΔH ≈ ΣE(wiązań rozerwanych) − ΣE(wiązań utworzonych)

Jeżeli energia uwolniona przy tworzeniu wiązań jest większa niż energia zużyta na ich rozerwanie, ΔH < 0 i reakcja jest egzotermiczna. Jeżeli energia zużyta na rozerwanie wiązań jest większa, ΔH > 0 i reakcja jest endotermiczna.

Przykład: reakcja H₂ + F₂ → 2HF.

Rozerwane wiązania:

- H–H w H₂
- F–F w F₂

Tworzone wiązania:

- dwa wiązania H–F w 2HF

Jeżeli energia uwolniona przy tworzeniu dwóch wiązań H–F jest większa niż energia zużyta na rozerwanie H–H i F–F, to ΔH < 0. Reakcja jest egzotermiczna.

Energie wiązań podawane w tablicach są wartościami średnimi. Rzeczywista energia rozerwania wiązania zależy od otoczenia cząsteczki, fazy i pozostałych wiązań. Dlatego obliczenie z energii wiązań jest oszacowaniem, a nie dokładnym wynikiem.

::: karta understand | W skrócie — dwa procesy
Rozerwanie wiązań wymaga energii, a tworzenie wiązań ją uwalnia. Różnica między tymi wielkościami daje przybliżoną wartość ΔH.
:::

::: karta warning | Uwaga — energia wiązań to oszacowanie
Wartości energii wiązań są średnie. Nie stosuje się ich jako dokładnych danych do obliczeń wymagających wysokiej precyzji. Do dokładnych obliczeń używa się tablic ΔHf i prawa Hessa.
:::

## 4 | Prawo Hessa {#hess} [[extra:AMBITNE]] [[extra:LO]]

Prawo Hessa wynika z tego, że entalpia jest funkcją stanu. Jeżeli dwie drogi prowadzą z tego samego stanu początkowego do tego samego stanu końcowego, zmiana entalpii musi być taka sama.

ΔH(reakcja netto) = ΣΔH(etapów)

Gdyby różne drogi dawały różne ΔH, można by uzyskać energię „z niczego”, co przeczy zasadzie zachowania energii.

Dwie zasady przekształcania równań:

1. Odwrócenie równania zmienia znak ΔH.
2. Pomnożenie równania przez liczbę mnoży ΔH przez tę liczbę.

Przykład: cykl dla reakcji C(grafit) + ½O₂ → CO.

Dane:

1) C(grafit) + O₂ → CO₂, ΔH₁ = −393,5 kJ/mol

2) CO + ½O₂ → CO₂, ΔH₂ = −283,0 kJ/mol

Reakcja szukana:

C(grafit) + ½O₂ → CO

Aby otrzymać równanie szukane, należy odwrócić reakcję 2:

CO₂ → CO + ½O₂, ΔH₂′ = +283,0 kJ/mol

Następnie dodajemy reakcję 1 i odwróconą reakcję 2:

C + O₂ → CO₂

CO₂ → CO + ½O₂

Suma:

C + ½O₂ → CO

ΔH = ΔH₁ + ΔH₂′

ΔH = −393,5 + 283,0

ΔH = −110,5 kJ/mol

Odwrócenie drugiej reakcji zmieniło znak jej ΔH. Dlatego zamiast odejmowania −283,0 dodajemy +283,0.

::: karta understand | W skrócie — prawo Hessa
ΔH reakcji zależy tylko od stanu początkowego i końcowego, nie od drogi. Jeżeli reakcję rozłożysz na etapy, suma ich ΔH daje ΔH reakcji netto.
:::

::: karta warning | Pułapka — odwrócenie i mnożenie
Odwrócenie równania zmienia znak ΔH. Pomnożenie równania przez 2 mnoży ΔH przez 2. Zapomnienie o tej zasadzie to najczęstszy błąd w cyklach Hessa.
:::

::: karta exam | Zadanie 1 (3 pkt) — Prawo Hessa
Dane:

1) C(grafit) + O₂ → CO₂, ΔH₁ = −393,5 kJ/mol

2) CO + ½O₂ → CO₂, ΔH₂ = −283,0 kJ/mol

Oblicz ΔH reakcji:

C(grafit) + ½O₂ → CO

a) Zapisz odwrócone równanie 2 wraz z nowym ΔH. (1 pkt)

b) Zapisz sumę równań prowadzącą do reakcji szukanej. (1 pkt)

c) Oblicz ΔH reakcji szukanej. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) CO₂ → CO + ½O₂, ΔH₂′ = +283,0 kJ/mol.

b) (1 pkt) C + O₂ → CO₂ oraz CO₂ → CO + ½O₂. Po zsumowaniu: C + ½O₂ → CO.

c) (1 pkt) ΔH = −393,5 + 283,0 = −110,5 kJ/mol.
:::
:::

## 5 | Przykłady prowadzone {#przyklady} [[basic:E8]] [[extra:LO]]

**Przykład 1 — spalanie metanu.**

CH₄ + 2O₂ → CO₂ + 2H₂O

Obserwacja: płomień, ciepło w otoczeniu. Układ oddaje energię, więc reakcja jest egzotermiczna.

Na wykresie produkty znajdują się niżej niż substraty. Start może wymagać zapłonu, ponieważ istnieje energia aktywacji Ea.

**Przykład 2 — rozpuszczanie azotanu(V) amonu.**

Po wsypaniu NH₄NO₃ do wody naczynie jest zimne. Układ pobiera energię z otoczenia, więc proces jest endotermiczny.

Na wykresie produkty — roztwór soli — znajdują się wyżej niż substraty.

**Przykład 3 — zobojętnianie HCl roztworem NaOH.**

HCl + NaOH → NaCl + H₂O

Roztwór się ogrzewa. Układ oddaje energię, więc reakcja jest egzotermiczna.

Reakcja jonowa:

H₃O⁺ + OH⁻ → 2H₂O

przebiega praktycznie od razu, ponieważ bariera Ea jest niska.

**Przykład 4 — ΔH z entalpii tworzenia.**

Dla reakcji:

CH₄ + 2O₂ → CO₂ + 2H₂O

przyjmij przykładowe wartości:

ΔHf(CH₄) = −74,8 kJ/mol

ΔHf(CO₂) = −393,5 kJ/mol

ΔHf(H₂O, l) = −285,8 kJ/mol

ΔHf(O₂) = 0

Obliczenie:

ΔH = [ΔHf(CO₂) + 2·ΔHf(H₂O)] − [ΔHf(CH₄) + 2·ΔHf(O₂)]

ΔH = [−393,5 + 2·(−285,8)] − [−74,8 + 0]

ΔH = [−393,5 − 571,6] − (−74,8)

ΔH = −965,1 + 74,8

ΔH = −890,3 kJ/mol

Wartość jest ujemna, więc reakcja jest egzotermiczna.

**Przykład 5 — ΔH z energii wiązań.**

Dla reakcji H₂ + F₂ → 2HF przybliżenie wygląda tak:

ΔH ≈ E(H–H) + E(F–F) − 2·E(H–F)

Jeżeli suma energii tworzących się wiązań H–F jest większa od sumy energii rozerwanych wiązań H–H i F–F, to ΔH < 0. Reakcja jest egzotermiczna.

::: karta basic | Po tej lekcji potrafisz
- zdefiniować ΔH i interpretować jego znak;
- obliczyć ΔH z tablicowych ΔHf;
- zastosować prawo Hessa do prostego cyklu;
- oszacować ΔH z energii wiązań;
- połączyć liczbę z wykresem z K01.
:::

::: karta exam | Zadanie 2 (4 pkt) — ΔH z entalpii tworzenia | poziom ambitny
Dla reakcji:

CH₄ + 2O₂ → CO₂ + 2H₂O

podano:

ΔHf(CH₄) = −74,8 kJ/mol

ΔHf(CO₂) = −393,5 kJ/mol

ΔHf(H₂O, l) = −285,8 kJ/mol

ΔHf(O₂) = 0

a) Zapisz wzór na ΔH z entalpii tworzenia. (1 pkt)

b) Zapisz podstawienie wartości z uwzględnieniem współczynników. (1 pkt)

c) Oblicz ΔH. (1 pkt)

d) Określ typ reakcji i wyjaśnij znak wyniku. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) ΔH = ΣΔHf(produkty) − ΣΔHf(substraty).

b) (1 pkt) ΔH = [−393,5 + 2·(−285,8)] − [−74,8 + 2·0].

c) (1 pkt) ΔH = −965,1 + 74,8 = −890,3 kJ/mol.

d) (1 pkt) Reakcja jest egzotermiczna, ponieważ ΔH < 0. Układ oddaje ciepło do otoczenia.
:::
:::

## 5a | Entalpia spalania ΔH_c° {#spalanie}

ΔH_c° to ΔH spalenia **1 mola** substancji w nadmiarze O₂ do produktów standardowych (CO₂, H₂O ciekła). Wartości są w tablicach, a z nich można wrócić do ΔH_f° przez cykl Hessa.

## 6 | Klinika błędów {#klinika} [[understand:ROZUMIENIE]] [[extra:LO]]

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Egzoenergetyczna reakcja pobiera energię.” | Egzoenergetyczna reakcja oddaje energię do otoczenia. | Energia wychodzi z układu, dlatego otoczenie się nagrzewa. |
| „Endotermiczna reakcja nagrzewa naczynie.” | Endotermiczna reakcja ochładza otoczenie. | Układ pobiera ciepło z otoczenia. |
| „ΔH to energia aktywacji.” | ΔH to zmiana entalpii, a Ea to energia aktywacji. | ΔH opisuje bilans energetyczny, a Ea barierę rozpoczęcia reakcji. |
| „Katalizator zmienia ΔH.” | Katalizator obniża Ea, a ΔH pozostaje bez zmian. | Katalizator nie zmienia energii substratów ani produktów. |
| „ΔHf pierwiastka zawsze wynosi 0.” | ΔHf = 0 dla pierwiastka w stanie standardowym. | Punkt zerowy dotyczy umownego stanu standardowego, nie każdego stanu pierwiastka. |
| „ΔH = −890 kJ/mol oznacza 890 kJ na 1 mol metanu.” | Wartość odnosi się do reakcji zapisanej w równaniu. | Współczynniki stechiometryczne są częścią definicji ΔH. |
| „Odwrócenie równania nie zmienia ΔH.” | Odwrócenie równania zmienia znak ΔH. | Reakcja przeciwna ma przeciwny bilans energetyczny. |
| „Pomnożenie równania przez 2 nie zmienia ΔH.” | Pomnożenie równania przez 2 mnoży ΔH przez 2. | ΔH odnosi się do reakcji zapisanej w równaniu. |
| „ΔH obliczam jako ΣΔHf(substraty) − ΣΔHf(produkty).” | ΔH = ΣΔHf(produkty) − ΣΔHf(substraty). | Kolejność odejmowania decyduje o znaku wyniku. |
| „Energia wiązań daje dokładne ΔH.” | Energia wiązań daje przybliżenie ΔH. | Wartości są średnie i zależą od otoczenia wiązania. |
| Pominięte współczynniki w ΣΔH_f° | Mnożymy wartości przez współczynniki z równania | Bilans zależy od liczby moli |
:::

::: mity
„Entalpia to energia zgromadzona w substancji.” || Entalpia jest funkcją stanu. W chemii obliczamy zmianę entalpii między stanem początkowym a końcowym, a nie „zapas entalpii” substancji.

„Reakcja egzotermiczna zawsze przebiega szybko.” || Szybkość zależy między innymi od Ea, temperatury i stężeń. Reakcja egzotermiczna może być bardzo wolna.

„ΔH ujemne oznacza, że reakcja nie potrzebuje energii startowej.” || Nawet reakcja egzotermiczna może mieć energię aktywacji i wymagać zapłonu.

„Katalizator zwiększa ΔH reakcji.” || Katalizator obniża Ea, ale nie zmienia ΔH.

„Pierwiastki nie mają energii, bo ΔHf = 0.” || ΔHf = 0 to umowny punkt odniesienia, a nie twierdzenie o braku energii wewnętrznej.

„Prawo Hessa działa tylko dla reakcji spalania.” || Prawo Hessa dotyczy każdej reakcji, której entalpię można rozłożyć na etapy.
:::

## 7 | Ćwiczenia z kluczem {#cwiczenia} [[extra:LO]]

**Ćwiczenie 1.** Oceń, czy reakcja jest egzo- czy endotermiczna: spalanie wodoru w powietrzu.

::: odp | Klucz
Egzotermiczna. Reakcja oddaje ciepło do otoczenia; ΔH < 0.
:::

**Ćwiczenie 2.** Narysuj jakościowy wykres energetyczny reakcji endotermicznej i zaznacz S, P, Ea oraz ΔH.

::: odp | Klucz
Poziom substratów S znajduje się niżej. Poziom produktów P znajduje się wyżej. Szczyt znajduje się nad S. Ea to wysokość szczytu ponad S. ΔH = H(P) − H(S) > 0.
:::

**Ćwiczenie 3.** Probówka z kwasem solnym i magnezem się nagrzewa. Zapisz typ reakcji, wniosek o znaku ΔH oraz sposób przyspieszenia reakcji bez zmiany znaku.

::: odp | Klucz
Reakcja jest egzotermiczna. ΔH < 0. Można zwiększyć stężenie kwasu, rozdrobnić magnez albo delikatnie podgrzać układ. Znak ΔH pozostaje ujemny.
:::

**Ćwiczenie 4.** Do reakcji egzotermicznej dodano katalizator. Jak zmieni się wykres i ΔH?

::: odp | Klucz
Szczyt Ea obniża się. Poziomy substratów i produktów pozostają bez zmian. Reakcja przebiega szybciej, a ΔH nadal jest ujemne.
:::

**Ćwiczenie 5 — mini-test samodzielny.** Odpowiedz bez zaglądania do lekcji: 1) Zapisz wzór na ciepło ogrzewania. 2) Co to jest ciepło właściwe? 3) Co dzieje się z temperaturą podczas topnienia? 4) Zapisz wzór na ciepło topnienia. 5) Ile ciepła potrzeba, aby ogrzać 100 g wody o 10 °C, jeżeli c = 4,2 J/(g·°C)? Potem sprawdź odpowiedzi w diagnozie.

## 7a | Ćwiczenia LO — trening ΔH i cykl Hessa {#cwiczenia-lo}

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

## 8 | Słownik {#slownik} [[understand:ROZUMIENIE]]

::: slownik
Entalpia H :: funkcja stanu opisująca bilans energii układu przy stałym ciśnieniu.
Zmiana entalpii ΔH :: różnica entalpii produktów i substratów reakcji.
Reakcja egzotermiczna :: reakcja oddająca ciepło do otoczenia; ΔH < 0.
Reakcja endotermiczna :: reakcja pobierająca ciepło z otoczenia; ΔH > 0.
Standardowa entalpia tworzenia ΔHf :: zmiana entalpii przy utworzeniu 1 mola związku z pierwiastków w stanach standardowych.
Prawo Hessa :: zasada, że ΔH reakcji netto jest sumą ΔH jej etapów.
Entalpia spalania :: zmiana entalpii przy całkowitym spalaniu 1 mola substancji.
Energia wiązania :: energia potrzebna do rozerwania określonego wiązania chemicznego.
Energia aktywacji Ea :: minimalna energia potrzebna do rozpoczęcia reakcji.
Katalizator :: substancja zwiększająca szybkość reakcji przez obniżenie Ea, bez trwałego zużycia.
Funkcja stanu :: wielkość zależna tylko od stanu początkowego i końcowego, nie od drogi.
Stan standardowy :: przyjęty w tablicach zestaw warunków odniesienia.
Ciepło reakcji :: energia wymieniana między układem a otoczeniem podczas reakcji.
Kalorymetr :: naczynie służące do pomiaru ciepła przemiany.
Układ :: substancje, których przemianę badamy.
Otoczenie :: wszystko poza układem, mogące wymieniać z nim energię.
:::

## 8a | Fiszki {#fiszki}

::: fiszki
Co to ΔH? | zmiana entalpii reakcji, przy stałym ciśnieniu równa Q_p | basic:podstawa
Co znaczy ΔH < 0? | reakcja egzotermiczna | basic:podstawa
ΔH_f° pierwiastka w stanie standardowym? | 0 | basic:podstawa
Co mówi prawo Hessa? | ΔH zależy tylko od stanu początkowego i końcowego | understand:rozumienie
Co się dzieje z ΔH przy odwróceniu równania? | zmienia znak | understand:rozumienie
Czy ΔH to E_a? | nie | extra:ambitne
:::

## 8b | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego tablice podają ΔH_f°, a nie ΔH wszystkich reakcji?
Istnieją tysiące reakcji, a ΔH_f° kilkuset związków wystarcza do obliczenia ΔH każdej z nich przez prawo Hessa. Tablica jest więc oszczędną bazą danych.
:::

::: karta extra | Ile energii ma jedna kanapka?
Spalanie wartości energetycznej pożywienia (kaloryczność) to w istocie ΔH_c° przeliczona na jednostkę masy. Dlatego etykiety podają kJ lub kcal — to pomiar entalpii spalania.
:::

## 9 | Test {#test} [[understand:ROZUMIENIE]] [[extra:LO]]

::: test
? Co to jest ΔH?
+ zmiana entalpii reakcji, przy stałym ciśnieniu równa ciepłu wymienionemu z otoczeniem
- energia aktywacji reakcji
- energia zgromadzona w jednym molze substancji
- temperatura reakcji
! ΔH opisuje bilans energetyczny reakcji przy stałym ciśnieniu.

? Co oznacza ΔH < 0?
+ reakcja jest egzotermiczna
- reakcja jest endotermiczna
- reakcja nie zachodzi
- reakcja zawsze przebiega szybko
! Ujemna wartość ΔH oznacza oddawanie ciepła do otoczenia.

? ΔHf pierwiastka w stanie standardowym wynosi:
+ 0
- 1 kJ/mol
- −1 kJ/mol
- wartość zależną od masy
! Pierwiastki w stanach standardowych są umownym punktem odniesienia.

? Jak oblicza się ΔH reakcji z entalpii tworzenia?
+ ΔH = ΣΔHf(produkty) − ΣΔHf(substraty)
- ΔH = ΣΔHf(substraty) − ΣΔHf(produkty)
- ΔH = ΣΔHf(produkty) + ΣΔHf(substraty)
- ΔH = ΣΔHf(produkty)·ΣΔHf(substraty)
! Od wartości produktów odejmuje się wartości substratów, z uwzględnieniem współczynników.

? Co robi katalizator z ΔH?
+ nic — ΔH pozostaje bez zmian
- zwiększa ΔH
- zmniejsza ΔH
- zmienia znak ΔH
! Katalizator obniża Ea, ale nie zmienia energii substratów ani produktów.

? Co się dzieje z ΔH po odwrceniu równania reakcji?
+ zmienia znak
- pozostaje takie samo
- podwaja się
- staje się zerem
! Reakcja przeciwna ma przeciwny bilans energetyczny.
:::

## 9a | Test uzupełniający {#test-uzupelniajacy}

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

## 9b | Wykład — ΔH jak różnica wysokości {#wyklad}

::: karta understand | Wykład — od zera: droga a wynik
Wyobraź sobie górę i dwie ścieżki z podnóża na szczyt: prostą i zakręconą. Różnica wysokości między podnóżem a szczytem jest taka sama, niezależnie od tego, którą ścieżką idziesz. Entalpia zachowuje się podobnie: ΔH to różnica między stanem końcowym a początkowym, a nie suma tego, co zdarzyło się po drodze. Dlatego etapy pośrednie, katalizator czy zmiana tempa przemiany nie zmieniają wyniku, o ile stan początkowy i końcowy są takie same.

Analogia ma jednak granice. Wysokość góry jest jednoznaczna, a entalpia zależy od warunków: ciśnienia, temperatury i stanu skupienia. Dlatego podajemy ΔH przy stałym ciśnieniu i w warunkach standardowych, a fazy zapisujemy w równaniu. H₂O(c) i H₂O(g) mają różne ΔH_f°, bo to różne stany.
:::

::: karta extra | Mini-wykład: dlaczego właśnie „przy stałym ciśnieniu”?
Entalpię definiuje się jako H = U + pV. Gdy reakcja zmienia objętość układu, np. powstaje gaz pod ciśnieniem atmosferycznym, część energii idzie na pracę przeciw ciśnieniu. Entalpia uwzględnia tę pracę, dlatego przy stałym ciśnieniu zmiana entalpii równa się ciepłu wymienionemu z otoczeniem: ΔH = Q_p.
:::

## 10 | Checklista {#checklista} [[understand:ROZUMIENIE]] [[extra:LO]]

::: checklista
- [ ] umiem zdefiniować ΔH i odczytać jego znak
- [ ] umiem obliczyć ΔH z ΔHf z uwzględnieniem współczynników
- [ ] umiem zastosować prawo Hessa do prostego cyklu
- [ ] umiem przewidzieć zmianę znaku przy odwrceniu równania
- [ ] umiem odróżnić ΔH od Ea i od szybkości reakcji
- [ ] umiem oszacować ΔH z energii wiązań
- [ ] umiem połączyć znak ΔH z wykresem energetycznym
- [ ] umiem wskazać przykłady reakcji egzo- i endotermicznych
:::

### AUDYT — Perplexity, 2026-10-13 {#audyt-ulepsz}

**Poprawione:**
- Frontmatter: dodano uid, uzupełniono kicker, opis, plakietki i stopkę; zmieniono stan na „ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia”.
- Minimum: „ΔH = Qp” → doprecyzowano, że zależność dotyczy ciepła wymienionego przy stałym ciśnieniu.
- Minimum: „ΔH < 0 reakcja egzotermiczna” → dodano pełną nazwę „egzotermiczna” zamiast mieszania terminów „egzo” i „egzotermiczna”.
- Minimum: „ΔHf pierwiastka = 0” → doprecyzowano warunek stanu standardowego.
- Minimum: „ΔH = ΔHf produkty − ΔHf substraty” → zapisano sumę Σ i wymóg uwzględnienia współczynników.
- Wykład: „substancja ma entalpię” → wyjaśniono entalpię jako funkcję stanu i różnicę między stanami.
- Wykład: „perpetuum mobile energetyczne” → zastąpione odwołaniem do zasady zachowania energii.
- Wykład: „entalpia a ciepło w kalorymetrze” → doprecyzowano warunek stałego ciśnienia.
- Prawo Hessa: poprawiono cykl dla C + ½O₂ → CO, w tym znak ΔH po odwróceniu reakcji 2.
- Model wiązań: „ΔH = E rozerwanych − E utworzonych” → zachowano jako przybliżenie i dodano ograniczenia.
- Test: poprawiono sformułowania dotyczące ΔHf, odwrcenia równania i katalizatora.

**Dodane:**
- §0.1–§0.4: cel, kompas, diagnoza z kluczem i interpretacją wyniku.
- §1: most z K01, tabela powiązań wykresu z ΔH oraz przypomnienie o Ea.
- §2: pełny wykład o entalpii jako funkcji stanu, jednostce kJ/mol i punkcie odniesienia ΔHf.
- §3: model rozerwania i tworzenia wiązań wraz z ograniczeniami.
- §4: prawo Hessa, cykl dla C + ½O₂ → CO oraz zadanie 1.
- §5: pięć przykładów prowadzonych, w tym obliczenie ΔH spalania metanu.
- §6: klinika 10 błędów i 6 mitów.
- §7: ćwiczenia z kluczem i mini-test samodzielny.
- §8: słownik 16 haseł.
- §9: test 6 pytań.
- §10: checklista.

**Niepewne / do weryfikacji:**
- Zakres konkretnego konkursu chemicznego nie został określony w paczce, dlatego wymagania konkursowe opisano ogólnie.
- Wartości ΔHf użyte w przykładzie spalania metanu są przykładowe i należy je zastąpić wartościami z tablicy dołączonej do zadania.
- W bardziej zaawansowanej termodynamice rozróżnia się ΔH i ΔE; w tej lekcji ΔH odnosi się do warunków stałego ciśnienia.

**Proponuję usunąć:**
- Brak.

**Źródła:**
- Dostarczona paczka: lekcja K02.
- Zintegrowana Platforma Edukacyjna — materiały o termochemii, entalpii i prawie Hessa.

**Grafiki do zrobienia:**

| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |
|---|---|---|---|---|
| §1, po tabeli K01–K02 | schemat statyczny | połączenie wykresu energetycznego z wartością ΔH | Znak ΔH odpowiada położeniu produktów względem substratów | Po lewej stronie znajduje się uproszczony wykres: produkty niżej dla reakcji egzotermicznej i wyżej dla endotermicznej. Po prawej stronie znajdują się odpowiadające wartości ΔH < 0 oraz ΔH > 0. |
| §2, po definicji ΔH | schemat statyczny | dwa stany układu: substraty i produkty oraz różnica ΔH | Entalpia jest funkcją stanu, więc liczy się różnicę stanów | Dwa poziomy oznaczone jako substraty i produkty łączy strzałka oznaczona ΔH. Podpis wskazuje, że wartość nie zależy od drogi przemiany. |
| §4, przy prawie Hessa | schemat statyczny | cykl reakcji C → CO₂ → CO | Suma ΔH etapów daje ΔH reakcji netto | Cykl pokazuje trzy węzły: C, CO₂ i CO. Strzałki oznaczają reakcje i ich ΔH. Odwrócona reakcja ma przeciwny znak ΔH. |
| §5, przy przykładzie spalania metanu | wykres liniowy | poziomy substratów i produktów oraz ΔH = −890,3 kJ/mol | Spalanie metanu jest reakcją egzotermiczną | Poziom substratów znajduje się wyżej niż poziom produktów. Strzałka w dół oznacza ΔH ujemne. Szczyt Ea znajduje się nad substratami. |

**Przywrócono z poprzedniej wersji (nie zgubiono treści):**
- Fiszki (6), test uzupełniający (5 pytań), ćwiczenia A–C z cyklem Hessa (§7a), ciekawostki (2 karty, §8b), sekcja „Entalpia spalania” (§5a) i wiersz kliniki o pominiętych współczynnikach.
- Wykład: sekcja §9b napisana od nowa (analogia wysokości i mini-wykład o H = U + pV), zamiast starego tekstu, który dublował §2.

**Poprawione względem propozycji:**
- Literówka „odwrcenie” → „odwrócenie” w całym tekście.
- „ze równania” → „z równania”.
- Usunięto link do pliku z sekcji „Źródła”.

**Nieprzyjęte:**
- Stare nagłówki i kotwice (#entalpia, #hf) zastąpiono nową strukturą §1–§10; treść tych sekcji jest w nowych paragrafach.
- Stare hasła „ΔH (zmiana entalpii)”, „Entalpia tworzenia ΔH_f°”, „Entalpia spalania ΔH_c°” są w słowniku pod nowymi nazwami („Zmiana entalpii ΔH”, „Standardowa entalpia tworzenia ΔHf”, „Entalpia spalania”).
- Stara checklista (5 pozycji) zawarta w nowej (8 pozycji).
