# RAPORT — U10 Układ dokrewny (tryb ULEPSZ, wersja bez dzielenia)

**Co widzę w paczce:** część 1/1, sekcje §14–§23 (zadania, klinika, ćwiczenia, ciekawostki, test, fiszki, słownik, mapa, ściąga, co dalej). Nie widzę §1–§13 (w tym wykładu, wykresu glukozy z §6 i doświadczeń z §13) — nie oceniam ich. W paczce **nie ma dokumentu wymagań LKO**, więc cała warstwa konkursowa jest oznaczona „(konkurs)” i jest **do zweryfikowania z wymaganiami**. Pełny wykład „od zera” nie został dopisany, bo należy do wcześniejszej części (zgodnie z uwagą w paczce).

## Raport przed / po

| Miara | Przed | Po | Zmiana |
|---|---|---|---|
| rozmiar tekstu (KB, 1 KB ≈ 1000 znaków) | 32,5 (nagłówek paczki; mój pomiar tą samą metodą co „po”: 33,8) | 58,2 | +24,4 |
| liczba sekcji `##` | 10 | 13 | +3 (§24, §25, §26) |
| zadania (`karta exam`) | 21 | 21 | 0 (nowe zadania są w `::: adv`) |
| zadania ambitne (`::: adv`) | 0 | 7 (Zad. 21–27) | +7 |
| pytania testowe (`?`) | 20 | 26 | +6 |
| fiszki | 33 | 43 | +10 |
| hasła słownika | 32 | 48 | +16 |
| grafiki (`@viz`, `@model`, `@zlewka`) z `@opis` | 0 | 0 | 0 (propozycje poniżej) |
| ciekawostki (`karta extra`) | 6 | 8 | +2 |
| mini-wykłady „W skrócie” | 0 | 3 | +3 |
| błędy w klinice | 20 | 28 | +8 |
| pary `::: nie-myl` | 0 | 6 | +6 |

## Lista sekcji przed → po (tylko zmienione)

- §14 Zadania konkursowe: + mini-wykład „W skrócie — jak czytać parę wyników”; poprawione klucze Zad. 11, 17, 19, 20.
- §15 Klinika: + „W skrócie — wytwarza czy uwalnia”; + 8 wierszy; dopisek w wierszu o wątrobie.
- §16 Ćwiczenia: + „W skrócie — cztery pytania”; + karta A7–A10; drobne poprawki B1, B3.
- §17 Ciekawostki: + 2 ciekawostki; doprecyzowane 3 istniejące.
- §18 Test: + 6 pytań (konkurs); naprawiona składnia (puste linie między pytaniami).
- §19 Fiszki: + 10 (poziom `olimpijski`); ujednolicone 2 znaczniki.
- §20 Słownik: + 16 haseł.
- §21 Mapa pojęć, §22 Ściąga (+2 punkty, +3 pozycje checklisty), §23 Co dalej (+1 punkt).
- **Nowe:** §24 Pary do odróżniania i trudne przypadki; §25 Dla olimpijczyka (3 mini-wykłady); §26 Zadania olimpijskie (Zad. 21–27).

## Poprawione

- **P1 (§18 test):** pytania 16–20 były sklejone bez pustej linii (`! … ↵ ? …`) — grozi błędnym parsowaniem; wstawiłem puste linie między wszystkimi pytaniami.
- **P2 (§19 fiszki):** znacznik `contest:wapien` → `contest:wapn` (parathormon i tężyczka mają wspólny temat); `understand:sprzezenie` → `understand:regulacja` (obie fiszki o sprzężeniu w jednym temacie).
- **P3 (Zad. 20 d):** „zmienna niezależna — czas od podania glukozy” było nieprecyzyjne; teraz: podanie roztworu glukozy (na wykresie czas), dopisana próba kontrolna (woda zamiast glukozy).
- **P4 (Zad. 19 d):** dopisek, że T4 + TSH nie rozstrzyga choroby Gravesa-Basedowa (potrzebne przeciwciała).
- **P5 (Zad. 17 b):** dopisek o moczówce nerkowej (ADH jest, nerki nie reagują).
- **P6 (Zad. 11 c):** nazwa stanu — tężyczka (nie tężec).
- **P7 (klinika, wątroba):** dopisek o konwencji szkolnej a szerszej.
- **P8 (B1, B3):** insulina to „białko (hormon peptydowy)”; światło „zwłaszcza niebieskie”.
- **P9 (ciekawostki):** Nobel 1923 — Macleod dzielił nagrodę z Collipem; Humulin; powód wycofania hormonu wzrostu z przysadek (priony; orientacyjnie).
- Pozostałe klucze (Zad. 1–20, A1–A6, test, fiszki, słownik) sprawdziłem merytorycznie — poprawne.

## Przeniesione / scalone

Nic nie przenosiłem ani nie scalałem.

## Proponuję usunąć (nie usunąłem)

- Test: pyt. „Gruczołem mieszanym jest: trzustka” (nr 11) i „Który gruczoł jest gruczołem mieszanym?” (nr 21) — powtórzenie; podobnie „Nadmiar hormonu wzrostu u dorosłego” (nr 6 i 22) oraz „ADH i oksytocynę wytwarza…” (nr 13) i „tylny płat przysadki” (nr 25). Propozycja: zostawić po jednym, albo przeformułować drugie na wariant trudniejszy.
- Słownik: „Antagonizm hormonalny” duplikuje „Antagonizm hormonów”; „Hormon tropowy” duplikuje „Hormony tropowe”.
- Blok `> CZĘŚĆ 1/1 lekcji …` — notatka paczki, nie treść lekcji; zostawiłem, bo nie jestem pewien, czy generator ją pomija.

## Propozycje grafiki (nie zmieniałem kodów `@viz`)

1. **Pętla sprzężenia zwrotnego osi podwzgórze–przysadka–tarczyca** (§25 i Zad. 5/19): trzy prostokąty w pionie (podwzgórze → przysadka → tarczyca), strzałki pobudzające z podpisami TRH, TSH, T4/T3 oraz dwie linie hamujące z minusem od tarczycy do wyższych pięter. Wniosek: awaria w gruczole to liczby w przeciwne strony. *(Wykonana jako SVG — patrz folder grafik.)*
2. **Trzy krzywe po wypiciu glukozy** (Zad. 20): oś czasu 0–120 min, glukoza (szczyt ok. 135 mg/dl w 30 min), insulina (szczyt 30–60 min), glukagon (spada, od ok. 90 min rośnie); dane poglądowe. Wniosek: antagonizm. *(SVG.)*
3. Tabela decyzyjna T4/TSH (Zad. 19) — wystarczy tabela tekstowa, grafika zbędna.

## Lista kontrolna (TAK/NIE)

raport na początku — TAK · żaden licznik nie zmalał — TAK · nic nie usunięte bez pozycji „Proponuję usunąć” — TAK · składnia według Zasady 3 — TAK, z zastrzeżeniami: format `::: nie-myl` (w paczce nie ma opisu jego linii — użyłem tytułu pary i dwóch linii treści + „Test rozstrzygający”) oraz zagnieżdżony `::: odp` w `::: adv` (analogicznie do `karta exam`) — **do sprawdzenia w generatorze** · brak bloków kodu/ASCII/cytowań — TAK · brak nowych `@viz` — TAK · wykład — NIE (należy do wcześniejszej części), mini-wykłady i ciekawostki — TAK · klucze sprawdzone — TAK · liczby niepewne oznaczone — TAK · warstwa ponad E8 oznaczona — TAK · brak harmonogramów — TAK.
**Uwaga o położeniu:** nowe sekcje §24–§26 stoją po §23 „Co dalej?” (numeracja ciągła, jak wymaga paczka); jeśli generator układa wg kolejności w pliku, autor może je przesunąć przed „Co dalej?”.

## Źródła i pewność

Zakres: podstawa programowa biologii (układ dokrewny), LKO 2025/26 pkt III.10 (wg nagłówka lekcji). Fakty historyczne: nobelprize.org (insulina 1923), encyklopedie fizjologii (Bayliss–Starling 1902/1905 — daty orientacyjne). Normy glikemii i próg nerkowy — wartości orientacyjne (zalecenia towarzystw diabetologicznych), do weryfikacji.

Gotowe: U10. Plik lekcji: `U10_ULEPSZONA.md`.
