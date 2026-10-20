# Uzupełnienie — 10 lekcji z paczki GOTOWE_CHE_NASTEPNE_10

Zakres: J03, J07, J08, J09, J10, K01, K02, K03, K04, K05 (`chemia/che-modular/lessons-md/gotowe/`).
Stan: 2026-10-13. Audyt strukturalny (limity_lekcji.py, sprawdz_wyklady.py, sprawdzenie pól front matter i elementów). Ocena merytoryczna wymaga przeczytania treści przez model z promptu poniżej.

## 1. Stan mechaniczny

Wszystkie 10 lekcji przechodzą limity bez ❌ i mają wykład oraz wymagane bloki (fiszki, test, słownik, zadania z kluczem). Wyniki sprawdzeń:

| Lekcja | uid | stan | Mini-wykłady („W skrócie”) | Ciekawostki | Modele / grafiki | „Do weryfikacji” |
|---|---|---|---|---|---|---|
| J03 | **brak** | WYPEŁNIONY | 4 | 5 | 0 | brak |
| J07 | tak | **brak** | 1 | 3 | 0 | brak |
| J08 | tak | **brak** | 2 | 3 | 0 | brak |
| J09 | tak | **brak** | 2 | 3 | 0 | brak |
| J10 | tak | **brak** | 1 | 3 | 0 | brak |
| K01 | tak | **brak** | 2 | 4 | 0 | brak |
| K02 | tak | **brak** | 1 | 3 | 0 | brak |
| K03 | tak | **brak** | 1 | 3 | 0 | brak |
| K04 | tak | **brak** | 5 | 4 | 0 | brak |
| K05 | tak | **brak** | 2 | 4 | 0 | brak |

Uwagi do wyników:
- Ostrzeżenia ⚠ w limitach dotyczą liczby fiszek, testów i zadań (J03: 37 fiszek, 14 testów, 8 zadań; J07: 6 testów; K01: 6 testów; K04: 7 zadań). Wynikają z długości i nie są błędem.
- W K04 wystąpiły zapisy „min” w przeliczeniach jednostek szybkości (mol/(dm³·min)). To nie są znaczniki czasu kursu, więc nic nie trzeba zmieniać.

## 2. Braki do uzupełnienia

**A. Front matter (wszystkie lekcje, bez zmiany treści)**
1. Dodać `stan:` w formacie `stan: "pełna struktura — 2026-10-13, bez audytu W1"` (lub „W1 FULL …” po audycie) — dziewięć lekcji: J07, J08, J09, J10, K01, K02, K03, K04, K05.
2. Dodać `uid:` w J03, wzorem z pozostałych lekcji: `CHE.E8.J03.rownania_jonowe_i_stracanie` (uzgodnić z konwencją kanonu, np. `CHE.04.J07.ka_kb_kw`).

**B. Wizualizacje (brak grafik w 10 lekcjach)**
Grafika tylko tam, gdzie pomaga zrozumieć (decyzja użytkownika). Proponowane miejsca:
- **K02 Entalpia** — diagram profilu energii (substraty → stan przejściowy → produkty) dla reakcji egzo- i endotermicznej. Opis słowny w `@opis`.
- **K04 Szybkość reakcji** — wykres stężenia substratu od czasu (krzywa malejąca) z zaznaczonym nachyleniem jako szybkością średnią.
- **J09 Bufory** — krzywa miareczkowania słaby kwas + mocna zasada z zaznaczonym obszarem buforowym.
- **J08 Hydroliza soli** — schemat jonów w roztworze (np. CH₃COONa): skąd odczyn zasadowy.
- Pozostałe lekcje: bez grafiki, jeśli nie ma w nich procesu, który trudno zrozumieć słowami.

Każda grafika: `@model`/`@zlewka` lub obraz z linią `@opis` (wymóg buildu).

**C. Pola weryfikacyjne (wszystkie lekcje)**
Dodać na końcu sekcję „Do weryfikacji” z listą wartości, które model podał z pamięci (stałe, pKa, entalpie tworzenia, iloczyny rozpuszczalności, współczynniki). Bez tego trudno śledzić poprawki po audycie.

**D. Mini-wykłady i ciekawostki (minimum wg kanonu: 1–3 mini, 3–5 ciekawostek)**
- Wszystkie lekcje spełniają minimum. Warto dopisać po jednym mini-wykładzie tam, gdzie sekcja jest sucha: J07 (przejście od Ka do pH), K03 (kalorymetria — dlaczego woda ma duże ciepło właściwe), K01 (dlaczego egzotermiczne nie znaczy „samoczynne”).

**E. Zadania**
- Każda lekcja ma co najmniej jeden blok `karta exam` z kluczem. Dla J07, J08, J09, J10, K02, K03 jest to tylko jedno zadanie egzaminacyjne — warto dodać drugie, różnego typu (obliczeniowe + wyjaśnienie „dlaczego”).

## 3. Prompt do uzupełnienia (dla dowolnego modelu)

> Masz 10 lekcji chemii E8 (plik paczki). Dla każdej: (1) uzupełnij brakujące pola front matter (`stan:` w formacie „pełna struktura — 2026-10-13, bez audytu W1”; w J03 dodaj `uid:`); (2) dopisz sekcję „Do weryfikacji” z listą wartości liczbowych i stałych, które podałeś z pamięci; (3) w K02, K04, J08, J09 dodaj po jednej wizualizacji tam, gdzie pomaga zrozumieć proces — z opisem słownym w linii `@opis` (co widać, oznaczenia, wniosek); (4) w miejscach suchych dopisz 1 mini-wykład (karta „W skrócie”); (5) w J07, J08, J09, J10, K02, K03 dodaj drugie zadanie egzaminacyjne z kluczem. Nie usuwaj żadnej istniejącej treści; zmiany oznacz w sekcji „Zmiany”. Nie dodawaj zadań domowych, limitów czasu ani planów dziennych (kurs jest do samodzielnej nauki we własnym tempie). Odpowiedź: pełne lekcje między `<<<PLIK KOD` i `PLIK>>>`.

## 4. Następny krok

Po odpowiedzi modelu: `python3 narzedzia/wczytaj_odpowiedz.py odp*.md --zapisz`, następnie limity, build (`tools/md2html.py`) i audyt W1 wybranych lekcji.
