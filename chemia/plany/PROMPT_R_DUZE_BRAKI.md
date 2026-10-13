# PROMPT: duże braki w pięciu lekcjach chemii E8 — blok R (R01, R02, R04, R08, R09)

Jesteś autorem lekcji chemii dla ucznia klasy 8 (E8, podstawa programowa; przygotowanie do konkursu kuratoryjnego). Dostajesz pięć lekcji w formie md — każda ma wykład i zadania, ale **brakuje w nich całych bloków**, które mają wszystkie pełne lekcje w tym kursie. Twoim zadaniem jest **dopisać brakujące bloki** i wstawić je w odpowiednie miejsca, **bez usuwania istniejącej treści** (wykłady, zadania i klucze zostają; ewentualne poprawki liczb oznacz w „Do weryfikacji”).

Wszystko, czego potrzebujesz, jest w tym prompcie. Nie korzystaj z żadnych linków ani zewnętrznych źródeł.

## 1. Co jest, a czego brakuje

| Blok | R01 | R02 | R04 | R08 | R09 |
|---|---|---|---|---|---|
| Front matter + wykład „od zera” | ✔ | ✔ | ✔ | ✔ | ✔ |
| Zadania (jako zwykła sekcja `## Zadania`) | ✔ | ✔ | ✔ | ✔ | ✔ |
| Klucz i punktacja (sekcja zbiorcza) | ✔ | ✔ | ✔ | ✔ | ✔ |
| **Blok „Muszę umieć” (minimum)** | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Blok „Warstwy”** | ✘ | ✘ (jest tylko warstwa w treści) | ✘ | ✘ | ✘ |
| **Rdzeń lekcji** (co zrobić najpierw) | ✘ | ✘ | ✘ | ✘ | ✘ |
| **„Jak pracować z lekcją”** | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Diagnoza wejściowa** (5 pytań + klucz) | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Doświadczenie / ćwiczenie laboratoryjne** | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Zadania konkursowe** (poziom ambitny, 2 zadania) | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Zadania jako karty egzaminacyjne** (min. 4, każde z kluczem) | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Fiszki** (8–15 pozycji) | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Test krótki** (5 pytań jednokrotnego wyboru) | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Słownik pojęć** (8–15 haseł) | ✘ | ✘ | ✘ | ✘ | ✘ |
| **Mini-wykłady „W skrócie”** w formie karty (patrz §3) | ✘ | ✘ | ✘ | ✘ | ✘ |

Uwaga: w niektórych lekcjach są już sekcje „## N | W skrócie — …”. Nie usuwaj ich — ale wpisz też każdy mini-wykład w formie karty (patrz §3), bo tylko karta jest liczona przez kontrolę limitów.

## 2. Kolejność w pliku (od góry do dołu)

1. Front matter (bez zmian, poza polem `opis` — możesz go doprecyzować).
2. Tytuł `# R0X — …`.
3. **Blok „Muszę umieć”** (§3.1).
4. **Blok „Warstwy”** (§3.2).
5. **Rdzeń lekcji** (§3.3).
6. **„Jak pracować z lekcją”** (§3.4).
7. **Diagnoza wejściowa** (§3.5).
8. Istniejący **wykład** (`## 1 | Wykład — …` itd.) — bez zmian.
9. Istniejące sekcje z mini-wykładami — dopisz kartę (§3.6) obok.
10. **Doświadczenie** (§3.7) — tam, gdzie temat na to pozwala.
11. Istniejące **zadania** — przerób na karty egzaminacyjne (§3.8), zachowując treść i liczby.
12. **Zadania konkursowe** (§3.9).
13. **Fiszki** (§3.10), **test** (§3.11), **słownik** (§3.12).
14. Istniejący **klucz i punktacja** — zostaw, a klucze z kart egzaminacyjnych i konkursowych trafiają do bloków `odp` przy zadaniach.
15. Istniejące **ciekawostki** i **Notatka dla prowadzącego** — bez zmian.

## 3. Składnia bloków (dokładnie w tej postaci)

### 3.1 Muszę umieć — blok minimum
```
::: minimum | Muszę umieć — 10 punktów
1. Pierwsze twierdzenie ucznia (jedno zdanie, konkretne).
2. …
10. …
:::
```
Dokładnie 10 punktów, każdy konkretny i sprawdzalny (np. „Liczę masę cząsteczkową CaCO₃: 40 + 12 + 3·16 = 100”).

### 3.2 Warstwy
```
::: warstwy
- e8 | <b>Podstawa:</b> co dokładnie jest w poziomie E8 w tej lekcji.
- understand | <b>Rozumienie:</b> dlaczego — co wyjaśniamy i po co.
- contest | <b>Konkurs:</b> co dochodzi na poziomie konkursowym (w tej lekcji).
- extra | <b>Ambitne:</b> ciekawe rozszerzenie, poza zakresem egzaminu.
:::
```

### 3.3 Rdzeń lekcji
```
::: rdzen | Rdzeń lekcji — najpierw to
- [§1](#wyklad) — krótko, co uczeń z tej sekcji wynosi.
- [§2](#…) — …
:::
```
Każda pozycja to jedna z sekcji, z kotwicą `{#id}` dopisaną do jej nagłówka (np. `## 1 | Wykład — … {#wyklad}`). Wypisz 4–6 pozycji.

### 3.4 Jak pracować z lekcją
Sekcja `## 0.1 | Jak pracować z lekcją {#jak-pracowac}` — 4–6 zdań: w jakiej kolejności czytać, kiedy zrobić diagnozę, kiedy zadania, kiedy wrócić do wykładu. **Bez czasu** (żadnych „5 min”, „dzień 1”).

### 3.5 Diagnoza wejściowa
```
## 0.2 | Diagnoza {#diagnoza}

Odpowiedz na kartce, bez zaglądania do lekcji. Potem sprawdź klucz i policz punkty.

1. Pytanie 1 (z ocenianiem w nawiasie).
2. …
5. …

::: odp | Klucz diagnozy
1. (1 pkt) Odpowiedź …
…
:::

Rozliczenie: 5 pkt — …; 3–4 pkt — …; 0–2 pkt — …
```
Pięć pytań, od prostych do zadania z liczbą. Klucz do każdego.

### 3.6 Mini-wykład jako karta (wymagane przez kontrolę limitów)
```
::: karta understand | W skrócie — tytuł
Treść 3–6 zdań, bez wzorów spoza tematu.
:::
```
Każda lekcja: **co najmniej 2** takie karty (np. jedna przy wykładzie, jedna przy procedurze).

### 3.7 Doświadczenie / ćwiczenie laboratoryjne
```
::: dosw | Doświadczenie 1 — tytuł
Problem: pytanie badawcze.
Hipoteza: co przewidujesz i dlaczego.
Sprzęt: lista, bez wymyślonych przyrządów.
Przebieg: 1) … 2) … 3) …
Obserwacje: czego należy się spodziewać.
Wniosek: zdanie, które uczeń napisze po doświadczeniu.
Bezpieczeństwo: jedno zdanie (np. okulary, wentylacja, nie wąchać).
:::
```
Każda lekcja, której temat pozwala (R01: rozpuszczanie soli i cukru w wodzie zimnej i ciepłej; efekt Tyndalla w mleku lub w roztworze skrobi; R02: odparowanie roztworu nasyconego i obserwacja kryształów; R08 i R09: reakcja kawałka marmuru z kwasem solnym z pomiarem ubytku masy), dostaje **co najmniej 1** doświadczenie. R04 — jedno ćwiczenie „kontroli masy” (ważenie przeliczonej porcji soli kuchennej w zlewce). Bez odczynników spoza szkolnego zestawu; bez trujących reagentów.

### 3.8 Zadania jako karty egzaminacyjne
Każde zadanie z sekcji `## Zadania` przerabiasz na kartę (zachowaj treść i liczby):
```
::: karta exam | Zadanie 1 (2 pkt) — tytuł
Treść zadania.
a) … (1 pkt)
b) … (1 pkt)
:::

::: odp | Pokaż klucz
a) … (1 pkt) …
b) … (1 pkt) …
:::
```
Minimum **4 karty egzaminacyjne** na lekcję. Klucz do każdej karty. Punkty w tytule karty = suma punktów w zadaniu.

### 3.9 Zadania konkursowe (poziom ambitny)
```
::: adv | Zadanie 7 (4 pkt) — tytuł | poziom ambitny
Treść.
a) … (1 pkt)
b) … (3 pkt)
:::

::: odp | Pokaż klucz
…
:::
```
**2 zadania** na lekcję: jedno z błędem w cudzym rozwiązaniu (uczeń ma znaleźć błąd), jedno wieloetapowe (np. nadmiar + wydajność, albo nadmiar + zanieczyszczenie).

### 3.10 Fiszki
```
:::: fiszki
Pytanie | odpowiedź | tag
Pytanie | odpowiedź | tag
:::
```
8–15 pozycji. Każda pozycja to **jeden** termin z lekcji. Tag np. `basic:podstawa`, `understand:rozumienie`, `contest:konkurs`.

### 3.11 Test krótki
```
? Pytanie jednokrotnego wyboru?
+ poprawna odpowiedź
- błędna odpowiedź
- błędna odpowiedź
```
**5 pytań** na lekcję (maksimum przewidziane przez kontrolę limitów). Każde pytanie ma dokładnie jedną poprawną odpowiedź (`+`) i minimum dwie błędne (`-`) — błędne mają być wiarygodne (typowe pomyłki ucznia).

### 3.12 Słownik
```
:::: slownik
Pojęcie :: definicja w jednym zdaniu
Pojęcie :: definicja w jednym zdaniu
:::
```
8–15 haseł, każde z definicją w jednym zdaniu.

## 4. Zasady pracy

1. **Nie usuwaj i nie skracaj** istniejących sekcji. Możesz tylko poprawić oczywiste błędy liczbowe i oznaczyć wątpliwe „(do weryfikacji)”.
2. **Liczby i chemia:** masy H 1, C 12, N 14, O 16, Na 23, Cl 35,5, Ca 40, S 32; Avogadro 6,02·10²³ mol⁻¹. Rozpuszczalność KNO₃ w 60 °C = 110 g/100 g H₂O (odczyt z wykresu tolerancja 108–112 g).
3. **Bez czasu:** żadnych „5 min”, „ok. 45 min”, planów dziennych ani limitów czasu — kurs jest do samodzielnej nauki.
4. **Bez linków** do stron i do innych plików lekcji (odwołuj się wyłącznie kodem lekcji, np. „patrz R07”).
5. **Jedna lekcja na odpowiedź.** Oddajesz pełny plik md jednej lekcji w jednym bloku kodu ` ```markdown `, z nazwą pliku nad blokiem. Po kolejnej prośbie („dalej”) przechodzisz do następnej.
6. Stan w front matter zostaw: `stan: "szkic — 2026-10-13, bez audytu W1"`.

## 5. Kolejność pracy

1. R04 (najwięcej do dopisania, bo najmniej gotowe)
2. R08
3. R09
4. R01
5. R02

## 6. Na końcu każdego pliku — sekcja „Do weryfikacji”

Po treści pliku, po jego bloku kodu, dopisz krótką listę: liczby i fakty, których nie jesteś pewien, z numerem bloku/karty. Bez innych komentarzy.
