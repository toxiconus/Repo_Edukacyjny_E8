# Prompty dla zewnętrznych AI — braki olimpiady, runda 3 (chemia, etap rejonowy)

Data: 2026-10-18 · Priorytet: etap rejonowy (chemia C1c: konfiguracje do Z = 36, wodorki, równania otrzymywania, masy cząsteczkowe) oraz audyt świeżo napisanych lekcji N01 i R03.
Uzupełnia: `PROMPTY_AI_BRAKI_OLI_2026-10-18.md` (runda 2). Zadania 1–10 z rundy 2 są już odebrane — **nie wysyłać ich ponownie**.

---

## Jak używać tego pliku

1. Wklej do nowej rozmowy blok **[WSPÓLNE ZASADY]** w całości, na początku.
2. Pod nim wklej jeden blok **[ZADANIE …]** lub **[AUDYT …]** i dołącz wskazane pliki (jako tekst lub PDF).
3. Model odpowiada **po jednej lekcji w turze**. Następne zadanie wysyłasz po odebraniu poprzedniego.
4. Odpowiedź zapisz surowo w `chemia/plany/audyty/` i dopisz wiersz do `WERYFIKACJA.md`.
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

## Część A — zadania do napisania (nowe)

### [ZADANIE 11] CHE — konfiguracje elektronowe, Z ≤ 36 (etap rejonowy, C1c)

**Etap:** rejonowy.
**Cel:** uczeń zapisuje konfigurację elektronową atomu i jonu dla Z ≤ 36 na powłokach i podpowłokach, wskazuje elektrony walencyjne i na tej podstawie określa grupę i okres pierwiastka.
**Wymagania szczegółowe:**
- powłoki K, L, M, N; maksymalna liczba elektronów na powłokę (2, 8, 18, 32) i na podpowłokę (s — 2, p — 6, d — 10); orbitali f nie wymagaj (Z ≤ 36 ich nie wymaga — co najwyżej wzmianka);
- zasada zapełniania (Aufbau), zakaz Pauliego i reguła Hunda — opis słowny z przykładem, bez wyprowadzeń;
- zapis skrócony z gazem szlachetnym (np. [Ar] 3d¹⁰ 4s¹);
- konfiguracje dla: H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca, Cr (Z = 24), Fe (Z = 26), Cu (Z = 29), Br (Z = 35), Kr (Z = 36); wyjątki Cr i Cu oznacz „do weryfikacji z konwencją etapu”;
- jony: Na⁺, Mg²⁺, Al³⁺, O²⁻, S²⁻, Cl⁻ — dlaczego uzyskują konfigurację gazu szlachetnego;
- grupy 1, 2 i 13–18: liczba elektronów walencyjnych = numer grupy (dla grupy 18 — 8, dla helu — 2); okres = liczba zapełnionych powłok;
- wizualizacja: diagram powłok (model Bohra) dla Na, Cl i Ca — z opisem `@opis`;
- ćwiczenia z kluczem: zapis konfiguracji, wyznaczenie grupy i okresu z konfiguracji, konfiguracja jonu; mini-test.

**Pliki do dołączenia:** brak (tylko zakres z tego bloku). Jeśli masz dostęp do zakresu LKO 2025/26, dopisz w „Pytaniach do autora”, czy zakres wymaga Cr i Cu.

### [ZADANIE 12] CHE — wodorki niemetali i typy reakcji (etap rejonowy, C1c)

**Etap:** rejonowy.
**Cel:** uczeń zapisuje wzory i reakcje otrzymywania wodorków niemetali (H₂O, NH₃, HCl, H₂S, CH₄) oraz rozpoznaje typ reakcji z równania.
**Wymagania szczegółowe:**
- wzory, nazwy i odczyn roztworu wodnego wodorków: HCl (roztwór — kwas solny), H₂S (kwas siarkowodorowy, słaby), NH₃ (roztwór — zasadowy, zasada amonowa), H₂O (obojętna), CH₄ (nie tworzy jonów w wodzie) — zakres do weryfikacji;
- otrzymywanie: H₂ + Cl₂ → 2 HCl; synteza NH₃ z pierwiastków (tylko zapis i wzmianka o warunkach — do weryfikacji);
- rozpoznawanie amoniaku: NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O (zapach, papierek uniwersalny niebieski);
- typy reakcji: synteza, analiza (rozkład), wymiana pojedyncza (metal lub niemetal wypiera pierwiastek z związku), wymiana podwójna, zobojętnianie jako szczególny przypadek wymiany — tabela z przykładem każdego typu;
- rozpoznawanie typu reakcji z równania i uzasadnienie;
- ćwiczenia z kluczem i punktacją; mini-test.

### [ZADANIE 13] CHE — równania otrzymywania kwasów, wodorotlenków i soli; kwasy z soli (etap rejonowy, C1c)

**Etap:** rejonowy.
**Cel:** uczeń zapisuje reakcje otrzymywania kwasu, wodorotlenku i soli w trzech formach (cząsteczkowej, jonowej pełnej, jonowej skróconej) oraz rozpoznaje, kiedy sól wypiera kwas.
**Wymagania szczegółowe:**
- kwasy: tlenek niemetalu + woda (SO₃ + H₂O → H₂SO₄); z pierwiastków (H₂ + Cl₂ → 2 HCl) i roztwór HCl; dla reakcji z udziałem tlenku i wody zapisz jony tylko tam, gdzie powstają;
- wodorotlenki: tlenek metalu + woda (Na₂O + H₂O → 2 NaOH); metal aktywny + woda (2 Na + 2 H₂O → 2 NaOH + H₂↑); sól + zasada z wytrąceniem osadu (CuSO₄ + 2 NaOH → Cu(OH)₂↓ + Na₂SO₄);
- sole: metal + kwas, zasada + kwas, tlenek + kwas, sól + sól (z osadem);
- kwasy z soli: mocniejszy kwas wypiera słabszy z soli (Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂↑); wypieranie lotnego kwasu z soli mocnym kwasem nieotwierającym się — tylko zapis i wzmianka, do weryfikacji zakresu (np. NaCl + H₂SO₄ stęż. → NaHSO₄ + HCl↑);
- odwołanie do zasady NPSW (osad, gaz, słaby elektrolit, woda) — bez powtarzania całej lekcji o rozpuszczalności;
- ćwiczenia z kluczem: każde równanie w trzech formach; mini-test.

### [ZADANIE 14] CHE — masy cząsteczkowe i skład procentowy związku (etap rejonowy, C1c)

**Etap:** rejonowy.
**Cel:** uczeń oblicza masę cząsteczkową ze wzoru, procentowy udział pierwiastków w związku i wyznacza wzór najprostszy z danych procentowych — bez mola.
**Wymagania szczegółowe:**
- masy atomowe z zestawienia: H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27, S 32, Cl 35,5, K 39, Ca 40, Fe 56, Cu 64, Zn 65, Ag 108 — oznacz „do weryfikacji z tablicą etapu”;
- masa cząsteczkowa jako suma mas atomów z uwzględnieniem indeksów (np. H₂SO₄ = 98);
- skład procentowy: udział pierwiastka = (liczba atomów × masa atomowa) : M × 100%;
- wzór najprostszy: przykład CaCO₃ (40% Ca, 12% C, 48% O) — pokaż, jak z procentów dojść do stosunku liczb atomów (podział udziałów przez masy atomowe, potem sprowadzenie do najmniejszych liczb całkowitych); zaznacz „do weryfikacji — czy etap dopuszcza tę metodę bez mola”;
- wzór rzeczywisty z masy cząsteczkowej i wzoru najprostszego (np. związek o M = 60 i wzorze CH₂O → C₂H₄O₂);
- przykłady: H₂O, CO₂, NaCl, H₂SO₄, Fe₂O₃ — udział procentowy każdego pierwiastka;
- ćwiczenia z kluczem i punktacją (w tym jedno zadanie „z wzoru odwrotnie”); mini-test.

---

## Część B — audyt zadań już napisanych (sprawdzanie, nie pisanie od nowa)

Dla każdego poniższego zadania: **nie przepisuj całej lekcji**. Zwróć listę poprawek (co, gdzie, dlaczego) z potwierdzeniem lub odrzuceniem każdej pozycji z listy kontrolnej, plus pełny tekst nowych lub zmienionych fragmentów. Format wyjścia dla audytu:
- `## Zgodność z zakresem` — co z zakresu etapu jest, czego brakuje;
- `## Błędy merytoryczne` — tabela „problem → poprawka → źródło”;
- `## Poprawki tekstu` — literówki, zniekształcone znaki, niespójności;
- `## Ciekawostki i mnemotechniki` — co zostawić, co usunąć (z powodem);
- `## Do weryfikacji` — dane, których nie da się potwierdzić.

### [AUDYT 7] CHE — N01 Powietrze i gazy
**Plik:** `chemia/che-modular/lessons-md/gotowe/N01_powietrze_i_gazy.md`.
**Sprawdź:**
- skład powietrza objętościowo: N₂ ok. 78%, O₂ ok. 21%, Ar ok. 0,93%, CO₂ ok. 0,04% (do weryfikacji z tablicą);
- gęstości gazów w warunkach normalnych: O₂ ok. 1,43 g/dm³, H₂ ok. 0,09 g/dm³, N₂ ok. 1,25 g/dm³, CO₂ ok. 1,96 g/dm³ (do weryfikacji);
- otrzymywanie tlenu i wodoru: wzory reakcji, warunki, sposób zbierania gazu i jego uzasadnienie;
- korozja żelaza: warunki (woda i tlen), co przyspiesza, równanie tylko jako schemat lub z jasnym zaznaczeniem produktu;
- spalanie siarki i fosforu: równania z współczynnikami, produkt, odczyn wodnego roztworu tlenku (kwasowy).

### [AUDYT 8] CHE — R03 Woda, roztwory i stężenie procentowe
**Plik:** `chemia/che-modular/lessons-md/gotowe/R03_woda_roztwory_stezenie_procentowe.md`.
**Sprawdź:**
- definicje: roztwór, substancja rozpuszczona, rozpuszczalnik, roztwór nasycony;
- wzór Cp = m(substancji) : m(roztworu) · 100%; przekształcenia: m(substancji) = Cp · m(roztworu) : 100; m(roztworu) = m(substancji) + m(wody);
- mieszanie dwóch roztworów o różnych Cp (jeśli jest metoda „krzyża” — sprawdź poprawność każdego kroku);
- rozcieńczanie (dolewanie wody) i zatężanie (odparowanie wody lub dosypanie substancji): przelicz każdy przykład od nowa;
- rozpuszczalność: wartości podane w lekcji traktuj jako „do weryfikacji”, dopóki nie są potwierdzone tablicą; nie podawaj ich jako pewnych.

---

## Część C — poza tą paczką

Lekcje z pakietu polskiego (PL L007–L011) i luki z zakresu biologii (REV01, REV02) nie są w tej rundzie. Nie wysyłaj ich tym promptem.

---

## Po odebraniu odpowiedzi (dla człowieka)

1. Zapisz surową odpowiedź: `chemia/plany/audyty/W1_zadanie<N>_<data>.md` (dla audytu: `W1_audyt<N>_<data>.md`).
2. Wprowadź wszystkie uwagi do lekcji. Odrzucone zapisz z powodem w sekcji „Decyzje”.
3. Uruchom build i test:
   - `cd chemia/che-modular && python3 tools/che.py lekcje lessons-md/gotowe/<plik>.md`
4. Dopisz wiersz do `WERYFIKACJA.md` (W1 = treść zapisu, W2 = zakres).
5. Zaktualizuj `olimpiada/PRZEKAZANIE.md` i odhacz pozycje w „Braki” (C1c).
