# Prompty dla zewnętrznych AI — braki olimpiady, runda 2 (chemia i biologia)

Data: 2026-10-18 · Priorytet: etap szkolny (bio ok. 21.10, chem ok. 23.10 — daty niepotwierdzone), potem etap rejonowy.
Zastępuje: `PROMPTY_AI_BRAKI_OLI_2026-10-17.md` (runda 1). Zadania 1–7 i 9a, 9c–9f, 10 mają już wersje robocze z Claude; w tej rundzie wysyłamy je do **audytu**, a zadania 8 i 9b — do **napisania**.

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

Jesteś autorem i recenzentem lekcji do samodzielnej nauki we własnym tempie, dla ucznia klasy 8 (polski system edukacji, podstawa programowa E8, przygotowanie do olimpiady). Lekcje mają być pisane **od zera** — zakładaj, że uczeń nie zna tematu, i prowadź go krok po kroku, jak w Khan Academy. Zachęcaj do pełnego wykładu „od zera”, dodawaj mini-wykłady w suchych miejscach i ciekawostki.

Zasady obowiązkowe:
1. **Nie skracaj odpowiedzi.** Nie ma limitu długości. Nie zastępuj treści streszczeniem ani „i tak dalej”.
2. **Możesz ulepszać i uzupełniać.** Sprawdź pełny zakres zadania, dodaj brakujące dane i przykłady. Inspiruj się Khan Academy i innymi dobrymi materiałami, żeby zbudować solidniejszą podstawę lekcji.
3. **Nie gub danych.** Jeśli w materiale źródłowym jest coś, czego nie przepisujesz, wypisz to na końcu z powodem.
4. **Mini-wykłady w suchych miejscach.** Gdy fragment jest suchy (wzór, definicja, reguła), dodaj krótkie wyjaśnienie „dlaczego tak”, przykład lub mini-wykład.
5. **Ciekawostki i mnemotechniki** oznaczaj wyraźnie `::: ciekawostka` albo `::: mnemonik`.
6. **Dane niepewne oznaczaj** słowami „do weryfikacji”. Nie zmyślaj liczb, nazw ani dat.
7. **Ćwiczenia z kluczem.** Każde zadanie ma rozwiązanie krok po kroku i punktację (zadania konkursowe).
8. **Każda wizualizacja, schemat, wykres lub obraz ma opis słowny** zaraz pod nim, w linii `@opis …`: co dokładnie widać (elementy, oznaczenia, kolory, liczby, co się zmienia) i jaki wniosek ma wyciągnąć uczeń. Bez opisu lekcja jest niepełna.
9. **Grafiki tylko wtedy, gdy są potrzebne do zrozumienia** (proces, zależność, ćwiczenie). Nie dodawaj ozdób.
10. **Chemia — bez mola.** Obliczenia masowe wykonuj proporcją mas z równania (np. „z 12 g Mg → 20 g MgO”). Słowo „mol” nie pojawia się w lekcjach szkolnych ani w zadaniach 1–7, chyba że wyraźnie zaznaczysz to jako „do weryfikacji — etap rejonowy”.
11. **Bez samokorekt w tekście.** Nie pisz „Błąd w policzeniu!”, „Zaraz…”, „poprawka:”. Poprawiaj przed oddaniem, a w tekście zostaje wersja finalna.
12. **Format wyjścia:** czysty Markdown, jedna lekcja w odpowiedzi. Na początku podaj `KB przed: <liczba>` i `KB po: <liczba>` (przybliżone rozmiary tekstu wejściowego i wyjściowego).
13. **Na końcu** dodaj blok `## Pytania do autora` — wszystko, co wymaga decyzji albo danych od człowieka.

Format sekcji lekcji (kolejność stała):
- Cel lekcji (2–3 zdania)
- Minimum (10 pkt — to, co uczeń musi umieć na etap)
- Wyjaśnienie krok po kroku (z przykładami)
- Ciekawostki i mnemoniki
- Ćwiczenia z kluczem i punktacją
- Pułapki i typowe błędy
- Mini-test (5–8 pytań z odpowiedziami)
- Podsumowanie (checklista)

---

## Część A — zadania do napisania (nowe)

### [ZADANIE 8] BIO — homeostaza (etap rejonowy, B2)

**Etap:** rejonowy.
**Cel:** uczeń rozumie, jak organizm utrzymuje stałe warunki (temperatura, glukoza, woda, pH).
**Dołącz:** `olimpiada/do_uzupelnienia/BIO_B2_homeostaza.md` (szkielet z danymi) oraz `biologia/bio/md/B2e_uklad_dokrewny.md` i `biologia/bio/md/B10_powtorka_uklady_czlowieka.md` (żeby nie powtarzać i nie kłócić się z tym, co już jest w lekcjach).
**Wymagania szczegółowe:**
- Pojęcie homeostazy; sprzężenie zwrotne ujemne i dodatnie, z przykładami z organizmu (dodatnie: skurcz porodowy, krzepnięcie).
- Regulacja temperatury (ośrodek w podwzgórzu, pocenie, dreszcze, naczynia skóry).
- Regulacja glukozy (insulina, glukagon, wątroba).
- Regulacja wody (ADH, nerki, pragnienie).
- Wizualizacja pętli sprzężenia — z opisem słownym `@opis`.
- Zadania z kluczem: co się stanie, gdy jeden element pętli przestanie działać.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych.

---

### [ZADANIE 9b] BIO — układ pokarmowy i odżywianie (etap rejonowy, B2b)

**Etap:** rejonowy.
**Cel:** uczeń opisuje drogę pokarmu, rolę enzymów i wchłanianie oraz wie, jak budowa jelita służy wchłanianiu.
**Dołącz:** `olimpiada/do_uzupelnienia/BIO_B2b_uklad_pokarmowy_i_odzywianie.md` oraz `biologia/bio/md/B10_powtorka_uklady_czlowieka.md` (sekcja o układzie pokarmowym — spójność z kosmkami i ok. 600× powierzchni, wartość do weryfikacji).
**Wymagania szczegółowe:**
- Odcinki przewodu pokarmowego w kolejności; gruczoły dopawowe (ślinianki, wątroba, trzustka).
- Trawienie mechaniczne i chemiczne; enzymy z miejscem działania (amylaza, pepsyna, trypsyna, lipaza) — nazwy i substraty.
- Rola żółci (emulgacja, nie trawienie).
- Budowa jelita cienkiego: fałdy, kosmki, mikrokosmki — dlaczego zwiększają powierzchnię.
- Wchłanianie: glukoza i aminokwasy do krwi (żyła wrotna), tłuszcze do limfy.
- Odżywianie: składniki pokarmowe, rola witamin i składników mineralnych (przykłady z objawami niedoborów).
- Wizualizacja drogi pokarmu — z opisem `@opis`.
- Zadania z kluczem i punktacją.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych.

---

## Część B — audyt zadań już napisanych (sprawdzanie, nie pisanie od nowa)

Dla każdego poniższego zadania: **nie przepisuj całej lekcji**. Zwróć listę poprawek (co, gdzie, dlaczego) z potwierdzeniem lub odrzuceniem każdej pozycji z listy kontrolnej, plus pełny tekst nowych lub zmienionych fragmentów. Odpowiedź ma być w formacie: tabela „problem → poprawka → źródło”, następnie „braki zakresu”, na końcu „do weryfikacji”.

Format wyjścia dla audytu:
- `## Zgodność z zakresem` — co z zakresu etapu jest, czego brakuje.
- `## Błędy merytoryczne` — tabela.
- `## Poprawki tekstu` — literówki, zniekształcone znaki, niespójności.
- `## Ciekawostki i mnemotechniki` — co zostawić, co usunąć (z powodem).
- `## Do weryfikacji` — dane, których nie da się potwierdzić.

### [AUDYT 4] CHE — szereg aktywności metali (X04)
**Plik:** `chemia/che-modular/lessons-md/gotowe/X04_szereg_aktywnosci_metali.md`.
**Sprawdź:** szereg (K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au); czy Li jest pominięte celowo (surowy wynik twierdził, że Li jest bardziej aktywny niż K w wodzie — błędnie); reakcja Na z wodą; masa Cu wypartego z 13 g Zn = 12,8 g; Mg z gorącą wodą; Al pod kątem pasywacji.

### [AUDYT 5] CHE — równania jonowe i strącanie (J03)
**Plik:** `chemia/che-modular/lessons-md/gotowe/J03_rownania_jonowe_i_stracanie.md`.
**Sprawdź:** tabela rozpuszczalności (zwłaszcza Ag⁺, Ba²⁺, Ca²⁺, Pb²⁺, Fe, Cu z OH⁻); kolory osadów; reguła NPSW; przykłady AgNO₃ + NaCl, BaCl₂ + Na₂SO₄, Pb(NO₃)₂ + KI.

### [AUDYT 6] CHE — stechiometria z nadmiarem (R07, bez mola)
**Plik:** `chemia/che-modular/lessons-md/gotowe/R07_stechiometria_z_nadmiarem.md`.
**Sprawdź:** M(2 HCl) = 73 (surowy wynik miał 71 — odrzucone); wszystkie rachunki proporcją mas; przykład „6 g Mg i 8 g HCl”; ćwiczenia 1–7 (liczby i odpowiedzi); pozycje „do weryfikacji”.

### [AUDYT 9a] BIO — skóra i układ ruchu (B2a)
**Plik:** `biologia/bio/md/B2a_skora_i_uklad_ruchu.md`.
**Sprawdź:** suma kości 206 (czaszka 29, kręgosłup 26 po zrośnięciu, klatka 25, kończyna górna 64, dolna 62); 6 typów stawów i przykłady; mechanizm skurczu (kolejność kroków); „do potwierdzenia” w końcu lekcji.

### [AUDYT 9c] BIO — oddychanie i wydalanie (B2c)
**Plik:** `biologia/bio/md/B2c_oddychanie_i_wydalanie.md`.
**Sprawdź:** transport CO₂ (70% / 23% / 7%); mechanika wdechu; 180 L → 1,5 L; pH moczu; ciekawostka o kolorze krwi została usunięta — potwierdź, czy to słuszne.

### [AUDYT 9d] BIO — układ nerwowy i zmysły (B2d)
**Plik:** `biologia/bio/md/B2d_uklad_nerwowy_i_zmysly.md`.
**Sprawdź:** potencjał czynnościowy (−70 mV, próg ok. −55 mV, +30 mV); przewodzenie skokowe 120 m/s; neuroprzekaźniki i ich role; rodopsyna i wybielanie po błysku; liczba receptorów węchowych (do potwierdzenia).

### [AUDYT 9e] BIO — układ dokrewny (B2e)
**Plik:** `biologia/bio/md/B2e_uklad_dokrewny.md`.
**Sprawdź:** hormony przysadki przedniej i tylnej (skąd produkowane); oś TRH → TSH → T3/T4; insulina i glukagon; mechanizm steroidów i białek; sól jodowana w Polsce — data wprowadzenia (do weryfikacji, nie zgadywać).

### [AUDYT 9f] BIO — rozmnażanie i rozwój (B2f)
**Plik:** `biologia/bio/md/B2f_rozmnazanie_i_rozwoj.md`.
**Sprawdź:** cykl menstruacyjny (dni faz, hormony); zapłodnienie (reakcja akrosomalna, korowa); etapy rozwoju i dni; listki zarodkowe (ektoderma, mezoderma, endoderma i pochodne); łożysko (funkcje, brak mieszania krwi); czasy życia gamet i wiek dojrzewania — tylko jako „do weryfikacji”.

### [AUDYT 10] BIO — powtórka układów człowieka (B10)
**Plik:** `biologia/bio/md/B10_powtorka_uklady_czlowieka.md`.
**Sprawdź:** liczba układów (10 vs 11 z osobnym układem chłonnym — co wymaga zakres etapu); 600× dla kosmków (w części podręczników 200×); bursa Fabrycjusza; spójność z L002 (`biologia/md/L002_powtorka_czlowiek.md`) — nie powtarzać mostów do genetyki.

### [AUDYT 1–3] CHE — doświadczenia, równania, poprawka REV01/F03
Pliki: `chemia/che-modular/lessons-md/gotowe/C4_doswiadczenia_zbiorczo.md`, `C3_rownania_i_obliczenia_z_rownan.md`, `REV01_powtorka_klasy_7.md` (sekcja Δχ), `F03_wlasciwosci_i_rozdzielanie.md` (sekcja ciecze niemieszające się).
**Sprawdź:** progi Δχ Paulinga (<0,4 niepolarne; 0,4–1,7 spolaryzowane; >1,7 jonowe — „do weryfikacji”); gęstości cieczy (woda 1,00; olej 0,92; chloroform 1,49; etanol 0,79); masa Mg = 24; przykłady proporcji masowych.

---

## Po odebraniu odpowiedzi (dla człowieka)

1. Zapisz surową odpowiedź: `<przedmiot>/plany/audyty/W1_<zadanie>_<data>.md`.
2. Wprowadź wszystkie uwagi do lekcji. Odrzucone zapisz z powodem w sekcji „Decyzje”.
3. Uruchom build i test przedmiotu:
   - chemia: `cd chemia/che-modular && python3 tools/che.py lekcje lessons-md/gotowe/<plik>.md`
   - biologia: `python3 biologia/bio/narzedzia/md2html_bio.py <plik>` oraz `node biologia/bio/narzedzia/sprawdz_bio.js`
4. Dopisz wiersz do `WERYFIKACJA.md` (W1 = treść zapisu, W2 = zakres).
5. Zaktualizuj `olimpiada/PRZEKAZANIE.md` i odhacz pozycje w „Braki”.
