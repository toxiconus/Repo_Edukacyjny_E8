---
kod: K03
uid: CHE.07.K03.kalorymetria_i_przemiany_fazowe
tytul: Kalorymetria i przemiany fazowe
opis: Ciepło właściwe, wzór Q = m·c·ΔT, ciepło topnienia i parowania, wykres ogrzewania, bilans cieplny w kalorymetrze · LO
kicker: K03 · ENERGETYKA · NOWA LEKCJA
lead: Lód wrzucony do ciepłej wody topi się, a temperatura wody spada, choć nie widać żadnego ogrzewania. Ta lekcja pokazuje, jak zmierzyć ciepło, które wymieniają substancje, i jak ułożyć bilans cieplny, gdy po drodze zmienia się stan skupienia.
plakietki: [[understand:ROZUMIENIE]][[extra:LO]]
stopka: **CHEMIA K03 v1.0** · Kalorymetria i przemiany fazowe · 2026
---

::: minimum | Muszę umieć — 10 punktów (LO)
1. **Ciepło właściwe c** to ciepło potrzebne do ogrzania 1 g substancji o 1 °C (1 K).
2. Ogrzewanie bez przemiany fazowej: **Q = m · c · ΔT**.
3. **Ciepło topnienia** q_t to ciepło potrzebne do stopienia 1 g ciała stałego w temperaturze topnienia (bez zmiany T).
4. **Ciepło parowania** q_p to ciepło potrzebne do odparowania 1 g cieczy w temperaturze wrzenia.
5. Przemiana fazowa: **Q = m · q** (topnienie, krzepnięcie, parowanie, skraplanie).
6. Na wykresie ogrzewania odcinki **pochyłe** to zmiana T (m·c·ΔT), a **poziome** to przemiana fazowa (T stała).
7. **Kalorymetr** to naczynie izolowane cieplnie, w którym mierzymy ciepło przemiany.
8. **Bilans cieplny**: ciepło oddane przez jedno ciało jest równe ciału pobranemu przez drugie (suma Q = 0 w układzie izolowanym).
9. Przy krzepnięciu i skraplaniu ciepło jest wydzielane (przeciwny znak w bilansie).
10. Najczęstsze błędy: mieszanie jednostek (g i kg, J i kJ), pominięcie odcinka fazowego, mylenie c wody z c lodu.
:::

::: warstwy
- understand | <b>Rozumienie:</b> dlaczego temperatura stoi podczas topnienia; po co bilans z przemianą fazową
- extra | <b>LO:</b> pełny bilans z wieloma etapami; związek Q z ΔH (K02)
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
Ciepło dostarczone substancji zużywa się na dwie rzeczy: na zmianę temperatury (wtedy T rośnie i wykres jest pochyły) albo na zmianę stanu skupienia (wtedy T stoi, a wykres jest poziomy). Najpierw ustal, czy w procesie zachodzi przemiana fazowa. Dopiero potem licz bilans.
:::

## 0.1 | Jak pracować z tą lekcją {#jak-pracowac}

::: karta understand | Kolejność pracy
Zacznij od diagnozy (0.4). Potem przeczytaj ściągę (punkt 1) i przykłady z punktu 3. Bilans licz sam, zanim porównasz z kluczem.
:::

## 0.2 | Cele i pytanie przewodnie {#cele}

::: karta basic | Po tej lekcji potrafisz
- obliczyć ciepło ogrzewania Q = m·c·ΔT;
- obliczyć ciepło przemiany fazowej Q = m·q;
- odczytać z wykresu ogrzewania odcinki z przemianą i bez;
- ułożyć bilans cieplny w kalorymetrze.
:::

::: karta exam | Pytanie przewodnie
Jak zmierzyć i obliczyć ciepło, które „znika” lub „pojawia się”, gdy substancja się ogrzewa, topi albo paruje?
:::

## 0.3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- ciepło i znak efektu energetycznego (K01, K02);
- temperatura i różnica temperatur ΔT; stany skupienia i przemiany fazowe (F03, K01);
- jednostki masy i energii (g, kg, J, kJ).

## 0.4 | Diagnoza startowa {#diagnoza}

::: karta understand | Odpowiedz najpierw sam
1. Zapisz wzór na ciepło ogrzewania bez przemiany fazowej.
2. Co to ciepło właściwe?
3. Co dzieje się z temperaturą podczas topnienia czystej substancji pod stałym ciśnieniem?
4. Zapisz wzór na ciepło topnienia.
5. Ile ciepła potrzeba, by ogrzać 100 g wody o 10 °C, gdy c = 4,2 J/(g·°C)?

::: odp | Pokaż klucz i interpretację
1. Q = m·c·ΔT.
2. Ciepło potrzebne do ogrzania 1 g substancji o 1 °C.
3. Temperatura stoi w miejscu.
4. Q = m·q_t.
5. Q = 100 · 4,2 · 10 = 4200 J = 4,2 kJ.

**Interpretacja:** 5/5 — przejdź do wykresu i bilansu; 3–4/5 — przeczytaj punkty 1–2; 0–2/5 — zacznij od rdzenia.
:::
:::

## 1 | Ściąga: wzory i wartości orientacyjne [[basic:E8]] {#sciaga}

| Wielkość | Wzór | Jednostka | Uwagi |
|---|---|---|---|
| ciepło ogrzewania / oziębiania | Q = m · c · ΔT | J lub kJ | ΔT = T_końcowa − T_początkowa |
| ciepło topnienia / krzepnięcia | Q = m · q_t | J lub kJ | T = const = T topnienia |
| ciepło parowania / skraplania | Q = m · q_p | J lub kJ | T = const = T wrzenia |
| bilans w kalorymetrze | Σ Q = 0 | — | ciepło oddane + pobrane = 0 |

Wartości orientacyjne dla wody (sprawdź w tablicach): c wody ciekłej ≈ 4,2 J/(g·°C); c lodu ≈ 2,1 J/(g·°C); q_t lodu ≈ 334 J/g; q_p wody ≈ 2260 J/g (przy 100 °C).

::: regula
**Pochyłe = temperatura się zmienia (m·c·ΔT). Poziome = faza się zmienia, T stoi (m·q).**
:::

## 2 | Wykres ogrzewania [[understand:ROZUMIENIE]] {#wykres}

Dla lodu o temperaturze −10 °C ogrzewanego do pary o 120 °C wykres ma pięć odcinków w tej kolejności:

1. ogrzewanie lodu od −10 °C do 0 °C (pochyły);
2. topnienie lodu w 0 °C (poziomy);
3. ogrzewanie wody od 0 °C do 100 °C (pochyły);
4. parowanie wody w 100 °C (poziomy);
5. ogrzewanie pary od 100 °C do 120 °C (pochyły).

Na poziomych odcinkach dostarczasz ciepło, ale temperatura nie rośnie: energia zmienia stan skupienia.

## 3 | Przykłady prowadzone [[extra:LO]] {#przyklady}

::: odp | Przykład 1: ogrzewanie wody
Ile ciepła potrzeba, by ogrzać 200 g wody z 20 °C do 50 °C? (c = 4,2 J/(g·°C))
Q = 200 · 4,2 · 30 = 25 200 J = 25,2 kJ.
:::

::: odp | Przykład 2: topnienie lodu
Ile ciepła potrzeba, by stopić 50 g lodu w 0 °C? (q_t = 334 J/g)
Q = 50 · 334 = 16 700 J = 16,7 kJ. Temperatura nie zmienia się.
:::

::: odp | Przykład 3: bilans cieplny
Do kalorymetru wlano 200 g wody o temperaturze 60 °C i wrzucono 50 g lodu o temperaturze 0 °C. Zakładamy brak strat ciepła i c = 4,2 J/(g·°C). Oblicz temperaturę końcową T.

Woda oddaje ciepło: Q_oddane = 200 · 4,2 · (60 − T).
Lód pobiera ciepło na stopienie: 50 · 334 = 16 700 J.
Powstała woda ogrzewa się od 0 °C do T: Q_pobrane = 50 · 4,2 · T.

Bilans: 200 · 4,2 · (60 − T) = 16 700 + 50 · 4,2 · T
50 400 − 840T = 16 700 + 210T
33 700 = 1050T, czyli T ≈ 32,1 °C.
:::

::: karta warning | Pułapka: pominięty odcinek fazowy
Jeśli w bilansie zapomnisz o topnieniu lodu, wynik będzie zawyżony o wielokrotność około 16 kJ. Zawsze sprawdź, czy w procesie zmienia się stan skupienia.
:::

## 4 | Kalorymetr — po co izolacja {#kalorymetr}

::: karta core | Dlaczego naczynie jest izolowane
Kalorymetr ogranicza wymianę ciepła z otoczeniem. Dzięki temu ciepło oddane przez jedną część układu trafia do drugiej części, a bilans można zamknąć. W szkolnym kalorymetrze zakładamy brak strat, co jest przybliżeniem.
:::

## 5 | Klinika błędów {#klinika}

::: klinika | Błąd | Poprawnie | Dlaczego?
Zmieszanie g z kg bez przeliczenia | Zamieniamy jednostki przed rachunkiem | Wynik zależy od jednostek
Pominięcie topnienia w bilansie z lodem | Dodajemy m·q_t | Przemiana wymaga ciepła, mimo stałej T
Używanie c wody dla lodu | c lodu ≈ 2,1 J/(g·°C) | Każda faza ma inne c
Ciepło krzepnięcia dodatnie w bilansie oddanym | Krzepnięcie oddaje ciepło | Znak wynika z kierunku przemiany
:::

## 6 | Ćwiczenia {#cwiczenia}

::: karta basic | A. Podstawa — ogrzewanie
Ile ciepła potrzeba, by ogrzać 500 g wody o 8 °C? (c = 4,2 J/(g·°C))

::: odp | Pokaż odpowiedź
Q = 500 · 4,2 · 8 = 16 800 J = 16,8 kJ.
:::
:::

::: karta understand | B. Trening — topnienie
Ile ciepła trzeba, by stopić 20 g lodu? (q_t = 334 J/g)

::: odp | Pokaż odpowiedź
Q = 20 · 334 = 6680 J = 6,68 kJ.
:::
:::

::: karta understand | C. Trening — wykres
Na wykresie ogrzewania wody od 0 °C do 100 °C i następnie parowania odcinek poziomy pojawia się w 100 °C. Dlaczego?

::: odp | Pokaż odpowiedź
W 100 °C woda wrze i zmienia stan skupienia. Dostarczone ciepło zużywa się na parowanie (m·q_p), więc temperatura nie rośnie.
:::
:::

::: karta extra | D. LO — bilans z lodem
Do 100 g wody o temperaturze 30 °C wrzucono 10 g lodu o temperaturze 0 °C. Oblicz temperaturę końcową, zakładając brak strat i c = 4,2 J/(g·°C). Podpowiedź: sprawdź, czy lód się stopi w całości.

::: odp | Pokaż odpowiedź
Woda oddaje ciepło: 100 · 4,2 · (30 − T). Lód pobiera ciepło na stopienie: 10 · 334 = 3340 J. Powstała woda ogrzewa się od 0 do T: 10 · 4,2 · T.
100 · 4,2 · (30 − T) = 3340 + 42T → 12 600 − 420T = 3340 + 42T → 9260 = 462T → T ≈ 20,0 °C.
Lód stopił się w całości (woda oddaje 12 600 − 420·20 = 4200 J; wystarczy na 3340 J topnienia i ogrzanie 10 g o 20 °C — 840 J).
:::
:::

## 7 | Fiszki {#fiszki}

::: fiszki
Wzór na ciepło ogrzewania? | Q = m·c·ΔT | basic:podstawa
Wzór na ciepło topnienia? | Q = m·q_t | basic:podstawa
Co oznacza odcinek poziomy na wykresie? | przemianę fazową, T stała | basic:podstawa
Co to bilans cieplny? | oddane ciepło = pobrane ciepło (Σ Q = 0) | understand:rozumienie
Czy podczas topnienia zmienia się T? | nie | understand:rozumienie
Jakie c ma woda ciekła? | ok. 4,2 J/(g·°C) | extra:LO
:::

## 8 | Słownik {#slownik}

::: slownik
Ciepło właściwe c :: ciepło potrzebne do ogrzania 1 g substancji o 1 °C
Ciepło topnienia q_t :: ciepło potrzebne do stopienia 1 g ciała stałego w temperaturze topnienia
Ciepło parowania q_p :: ciepło potrzebne do odparowania 1 g cieczy w temperaturze wrzenia
Kalorymetr :: naczynie izolowane cieplnie, w którym mierzy się ciepło przemiany
Bilans cieplny :: równanie, w którym suma ciepła wymienionego w układzie izolowanym wynosi zero
:::

## 9 | Test {#test}

::: test
? Ciepło potrzebne do ogrzania 2 kg wody o 5 °C (c = 4,2 J/(g·°C)) wynosi:
- 4,2 kJ
+ 42 kJ
- 420 kJ
- 0,42 kJ
! Q = 2000 g · 4,2 · 5 = 42 000 J = 42 kJ.

? Podczas topnienia lodu w 0 °C:
- temperatura rośnie
+ temperatura się nie zmienia
- temperatura maleje
- nie wymienia się ciepła
! Dostarczone ciepło zmienia stan skupienia.

? Który wzór opisuje ciepło przemiany fazowej?
- Q = m·c·ΔT
+ Q = m·q
- Q = m·g·h
- Q = n·R·T
! Przemiana wymaga q, a nie c.

? W bilansie cieplnym układu izolowanego suma Q wynosi:
- 1
+ 0
- 100
- zależy od temperatury
! Ciepło oddane równa się ciepłu pobranemu.

? Odcinek pochyły na wykresie ogrzewania oznacza:
+ zmianę temperatury
- przemianę fazową
- brak dostarczanego ciepła
- zmianę masy
! Pochyły = m·c·ΔT.
:::

## 10 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego ciepło parowania jest tak duże?
Woda ma bardzo dużą ciepło parowania (ok. 2260 J/g). Dzięki temu pot na skórze skutecznie chłodzi ciało: odparowując, pobiera ogromne ilości ciepła z organizmu.
:::

::: karta extra | Ciepło topnienia w zimnych napojach
Lód w napoju nie tylko schładza go przez wyższą temperaturę, ale przede wszystkim przez ciepło topnienia. Każdy gram stopionego lodu pobiera ok. 334 J, więc nawet kilka kostek znacznie obniża temperaturę.
:::

## 11 | Wykład — dlaczego temperatura „stoi” {#wyklad}

::: karta understand | Wykład — od zera: energia bez zmiany temperatury
Gdy ogrzewasz garnek z wodą, temperatura rośnie, bo cząsteczki poruszają się coraz szybciej. Gdy woda zaczyna wrzeć, dostarczone ciepło nie zwiększa już średniej energii kinetycznej, tylko rozrywa oddziaływania między cząsteczkami. Dlatego temperatura się nie zmienia, dopóki cała woda nie odparuje.

Z tego wynika bilans cieplny. Chcesz wiedzieć, jaka będzie temperatura po zmieszaniu. Zapisujesz, ile ciepła oddaje ciepła część i ile pobiera zimna część. Jeśli w grę wchodzi lód, dodajesz ciepło topnienia, bo ta energia nie zmienia T, ale jest potrzebna.

**Mini-wykład: dlaczego lód chłodzi bardziej niż sama zimna woda.** Lód ma niską temperaturę, ale jego głównym „zadaniem” w napoju jest ciepło topnienia. Dzięki temu pobiera więcej ciepła, niż wynikałoby z samego ogrzania.

**Mini-wykład: kalorymetr jako uczciwy świadek.** Izolacja i przybliżenie braku strat pozwalają zamknąć bilans. W prawdziwym laboratorium zawsze są małe straty, dlatego wynik jest przybliżony.
:::

::: karta core | W skrócie — kalorymetria w jednym zdaniu
Ciepło idzie albo na zmianę temperatury (m·c·ΔT), albo na zmianę stanu skupienia (m·q), a w bilansie ciepło oddane równa się pobranemu.
:::

## 12 | Checklista — umiem… {#checklista}

::: checklista
- [ ] obliczyć Q = m·c·ΔT z zachowaniem jednostek;
- [ ] obliczyć Q = m·q dla topnienia lub parowania;
- [ ] odczytać z wykresu ogrzewania odcinki pochyłe i poziome;
- [ ] ułożyć bilans cieplny z przemianą fazową;
- [ ] wyjaśnić, dlaczego temperatura w przemianie fazowej nie rośnie.
:::
