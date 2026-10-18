# Prompty dla zewnętrznych AI — braki olimpiady, runda 4 (chemia wojewódzki, biologia genetyka)

Data: 2026-10-18 · Priorytet: po etapie rejonowym — mol i wzory (chemia, poziom 2 wg kanonu LO), genetyka krzyżówek (biologia, kolejka B1b w `PRIORYTETY.md`).
Uzupełnia: `PROMPTY_AI_BRAKI_OLI_2026-10-18_runda3.md`. Zadania z rund 2 i 3 są już odebrane — **nie wysyłać ich ponownie**.

---

## Jak używać tego pliku

1. Wklej do nowej rozmowy blok **[WSPÓLNE ZASADY]** w całości, na początku.
2. Pod nim wklej jeden blok **[ZADANIE …]** i dołącz wskazane pliki (jako tekst lub PDF).
3. Model odpowiada **po jednej lekcji w turze**. Następne zadanie wysyłasz po odebraniu poprzedniego.
4. Odpowiedź zapisz surowo w `<przedmiot>/plany/audyty/` i dopisz wiersz do `WERYFIKACJA.md`.
5. Uwagi z audytu wprowadzaj wszystkie (błędy, braki zakresu, ulepszenia, ciekawostki, mnemotechniki). Odrzucone zapisz z powodem.

Limit paczki: ok. 80–100 KB. Jeśli materiał nie mieści się w jednej turze — rozbij zadanie na części („część 1/3”).

---

## [WSPÓLNE ZASADY] — wklej na początku każdej rozmowy

Jesteś autorem i recenzentem lekcji do samodzielnej nauki we własnym tempie, dla ucznia klasy 8 (polski system edukacji, podstawa programowa E8, przygotowanie do olimpiady chemicznej, etap rejonowy). Lekcje mają być pisane **od zera** — zakładaj, że uczeń nie zna tematu, i prowadź go krok po kroku, jak w Khan Academy. Dodawaj mini-wykłady w suchych miejscach i ciekawostki.

Zasady obowiązkowe:
1. **Nie skracaj odpowiedzi.** Nie ma limitu długości. Nie zastępuj treści streszczeniem ani „i tak dalej”.
2. **Możesz ulepszać i uzupełniać.** Sprawdź pełny zakres zadania, dodaj brakujące dane i przykłady.
3. **Nie gub danych.** Jeśli w materiale źródłowym jest coś, czego nie przepisujesz, wypisz to na końcu z powodem.
4. **Mini-wykłady w suchych miejscach.** Gdy fragment jest suchy (wzór, definicja, reguła), dodaj krótkie wyjaśnienie „dlaczego tak”, przykład lub mini-wykład.
5. **Ciekawostki i mnemotechniki** oznaczaj wyraźnie `::: ciekawostka` albo `::: mnemonik`.
6. **Dane niepewne oznaczaj** słowami „do weryfikacji”. Nie zmyślaj liczb, nazw ani dat.
7. **Ćwiczenia z kluczem.** Każde zadanie ma rozwiązanie krok po kroku i punktację.
8. **Każda wizualizacja, schemat lub wykres ma opis słowny** zaraz pod nim, w linii `@opis …`: co dokładnie widać (elementy, oznaczenia, kolory, liczby) i jaki wniosek ma wyciągnąć uczeń.
9. **Grafiki tylko wtedy, gdy są potrzebne do zrozumienia.** Nie dodawaj ozdób.
10. **Chemia — bez mola.** Obliczenia masowe wykonuj proporcją mas z równania (np. „z 12 g Mg → 20 g MgO”).
11. **Bez samokorekt w tekście.** Nie pisz „czekaj”, „zaraz”, „sprawdźmy ponownie”, „błąd w policzeniu”, „poprawka:”. Jeśli rachunek nie wychodzi — przelicz go przed oddaniem i zostaw w tekście wyłącznie wynik.
12. **Format wyjścia:** czysty Markdown, jedna lekcja w odpowiedzi. Na początku podaj `KB przed: <liczba>` i `KB po: <liczba>` (przybliżone rozmiary tekstu wejściowego i wyjściowego).
13. **Na końcu** dodaj blok `## Pytania do autora`.
14. **Język: wyłącznie polski.** Bez obcych słów w tekście (angielskich, rosyjskich) i bez obcych liter (cyrylica, znaki innych alfabetów). Przed oddaniem przeczytaj tekst pod kątem literówek i zniekształconych znaków.
15. **Liczby i fakty.** Każda liczba, norma, data, nazwisko i ciekawostka ma źródło (podręcznik, tablica, norma) albo dopisek „do weryfikacji”. Nie przypisuj odkryć ani cytatów, których nie jesteś pewien. Nie używaj zdań typu „jak wiadomo”.
16. **Równania.** Indeksy i ładunki zapisuj w Unicode (H₂O, SO₄²⁻, Ca²⁺). Strzałka ↑ przy gazie, ↓ przy osadzie. Zawsze dobieraj współczynniki i sprawdź bilans atomów po obu stronach.
17. **Pytania do autora:** najwyżej 8, każde konkretne i z wartością domyślną, którą przyjąłeś („przyjęto X; czy poprawne?”). Nie odpowiadaj na nie sam w tekście lekcji.

Format sekcji lekcji (kolejność stała):
- Cel lekcji (2–3 zdania)
- Minimum (10 pkt — to, co uczeń musi umieć na etap)
- Wyjaśnienie krok po kroku (z przykładami)
- Ciekawostki i mnemoniki
- Ćwiczenia z kluczem i punktacją
- Pułapki i typowe błędy
- Mini-test (5–8 pytań z odpowiedziami)
- Podsumowanie (checklista)
- Pytania do autora

---

18. **Ulepszanie i ciekawość.** Możesz ulepszać lekcje, inspirując się sprawdzonymi materiałami (np. Khan Academy, podręczniki akademickie, dobre zbiory zadań olimpijskich). Zachęcaj do samodzielnego wykładu „od zera”: uczeń ma rozumieć, skąd bierze się wzór, a nie tylko go podstawiać.
19. **Tempo.** Kurs jest do samodzielnej nauki we własnym tempie. Nie buduj treningów na czas ani wyścigów.
20. **Model może się mylić.** Lekcję traktuj jako propozycję do weryfikacji przez autora. Wszystkie liczby i fakty sprawdzaj pod kątem źródła (pkt 15).

---

## Część A — zadania do napisania

### [ZADANIE 15] CHE — mol i masa molowa (etap wojewódzki, poziom 2, C2)

**Etap:** wojewódzki (poziom 2 — LO; wprowadzenie do obliczeń).
**Cel:** uczeń rozumie mol jako liczność (6,02·10²³ cząstek), liczy masę molową z układu okresowego i przelicza masę na liczbę moli oraz odwrotnie.
**Wymagania szczegółowe:**
- definicja mola i stała Avogadra (6,02·10²³ mol⁻¹), z uzasadnieniem, skąd ta liczba (ustalona konwencja, związek z masą atomu ¹²C),
- masa molowa M w g/mol (liczbowo równa masie cząsteczkowej), wzór n = m / M,
- przeliczenia: liczba cząstek N = n · N_A, objętość gazu w warunkach normalnych V = n · 22,4 dm³/mol,
- obliczenia z równania reakcji z użyciem moli (współczynniki stechiometryczne = stosunek moli),
- porównanie: obliczenie „bez mola” (proporcja mas) i „z molem” daje ten sam wynik — uczeń ma to zobaczyć na przykładzie 12 g Mg → MgO,
- pułapki: mylenie masy z liczbą moli, zapomniany indeks w M, jednostki g vs kg.
**Ćwiczenia:** co najmniej 8 zadań z kluczem i punktacją, w tym 2 zadania wieloetapowe.
**Pliki:** `chemia/plany/audyty/W1_zadanie14_masy_sklad_2026-10-18.md` (lekcja C1c masy i skład) — do spójności poziomów; `chemia/che-modular/lessons-md/gotowe/C1c_masy_sklad_procentowy.md`.
**Uwaga dla AI:** lekcja C1c jest na etap rejonowy i używa wyłącznie proporcji mas. Ta lekcja wprowadza mol jako narzędzie wyższego poziomu i nie zastępuje C1c — nawiąż do niej wprost.

### [ZADANIE 16] CHE — wzór elementarny i rzeczywisty; obliczenia z mol (etap wojewódzki, poziom 2, C2)

**Etap:** wojewódzki (poziom 2).
**Cel:** uczeń wyznacza wzór elementarny (najprostszy) i rzeczywisty z danych procentowych i z masy cząsteczkowej, używając mola.
**Wymagania szczegółowe:**
- wyznaczanie wzoru najprostszego z procentów przez n = m / M (przeliczenie na mole pierwiastków),
- wzór rzeczywisty z masy molowej: n = M_rzecz. / M_elem.,
- zadanie odwrotne: skład procentowy z wzoru,
- skład procentowy hydratów (np. CuSO₄ · 5 H₂O) — tylko jako przykład wykraczający poza etap rejonowy, z jasnym oznaczeniem poziomu.
**Ćwiczenia:** co najmniej 8 zadań z kluczem, w tym dwa z hydratem i jedno z danymi w gramach (nie w procentach).
**Uwaga dla AI:** ta lekcja poszerza C1c (wzór najprostszy bez mola) o wersję z molem. Zaznacz wyraźnie, co z tej lekcji jest w zakresie etapu rejonowego, a co wojewódzkiego.

### [ZADANIE 17] BIO — krzyżówki jednogenowe i prawa Mendla (kolejka B1b, etap wojewódzki / oceny kl. 8)

**Etap:** wojewódzki; oceny bieżące kl. 8.
**Cel:** uczeń rozwiązuje krzyżówki jednogenowe (dominacja zupełna, cechy recesywne), stosuje pierwsze i drugie prawo Mendla i zapisuje wyniki w szachownicy Punnetta.
**Wymagania szczegółowe:**
- pojęcia: gen, allel, genotyp, fenotyp, homozygota, heterozygota, dominacja i recesywność, pokolenie P, F1, F2, krzyżówka testowa,
- pierwsze prawo Mendla (jednolitość pokolenia F1) i drugie (rozszczepienie 3 : 1 w F2) z przykładami, np. groch,
- szachownica Punnetta dla krzyżówki monohybrydowej i dihybrydowej (9 : 3 : 3 : 1),
- prawdopodobieństwo a stosunek liczbowy: uczeń ma zrozumieć różnicę, nie tylko podać wynik,
- krzyżówka testowa jako sposób ustalenia genotypu osobnika o dominującym fenotypie,
- zadania z drzewem genealogicznym (tylko podstawy: cecha dominująca / recesywna sprzężona z płcią — wzmianka, bez wchodzenia głęboko).
**Ćwiczenia:** co najmniej 8 zadań z kluczem, w tym 2 z drzewem genealogicznym i 1 z krzyżówką testową.
**Pliki:** `biologia/bio/md/L010_*.md` (lekcja DNA — kontynuacja), `biologia/bio/BIO_KATALOG.md` (numeracja L011).
**Uwaga dla AI:** genetyka ma być od zera, z mini-wykładem o tym, skąd się biorą gamety i dlaczego rozszczepienie jest 3 : 1. Dane groszku Mendla podaj ze źródła (do weryfikacji).

---

## Część B — zakończenie

Po odebraniu każdej odpowiedzi: zapisz surowo, sprawdź wszystkie uwagi, wypisz odrzucone z powodem, dopisz wiersz do `WERYFIKACJA.md`.
