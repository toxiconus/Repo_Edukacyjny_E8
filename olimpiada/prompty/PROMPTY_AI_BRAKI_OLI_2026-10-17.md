# Prompty dla zewnętrznych AI — braki olimpiady (chemia i biologia)

Data: 2026-10-17 · Priorytet: etap szkolny (bio ok. 21.10, chem ok. 23.10 — daty niepotwierdzone), potem etap rejonowy.
Źródło listy braków: `olimpiada/PRZEKAZANIE.md`, sekcja „Braki — priorytet: olimpiada, chemia i biologia”.

---

## Jak używać tego pliku

1. Wklej do nowej rozmowy blok **[WSPÓLNE ZASADY]** (poniżej) — w całości, na początku.
2. Wklej pod nim jeden blok zadania **[ZADANIE …]** i dołącz wskazane pliki źródłowe (zawsze jako tekst lub PDF).
3. Model odpowiada **po jednej lekcji w turze**. Kolejne zadanie wysyłasz dopiero po odebraniu poprzedniego.
4. Odpowiedź zapisz surowo w `olimpiada/audyt/` (lub `<przedmiot>/plany/audyty/`) i wpisz wiersz do `WERYFIKACJA.md`.
5. Uwagi z audytu wprowadzaj wszystkie (błędy, braki zakresu, ulepszenia, ciekawostki, mnemotechniki). Odrzucone zapisz z powodem.

Limit wielkości paczki: 80 KB. Jeśli materiał nie mieści się w jednej turze — rozbij zadanie na kilka tur (np. „część 1/3”).

---

## [WSPÓLNE ZASADY] — wklej na początku każdej rozmowy

Jesteś autorem lekcji do samodzielnej nauki we własnym tempie, dla ucznia klasy 8 (polski system edukacji, podstawa programowa E8). Lekcje mają być pisane **od zera** — zakładaj, że uczeń nie zna tematu, i prowadź go krok po kroku, jak w Khan Academy.

Zasady obowiązkowe:
1. **Nie skracaj odpowiedzi.** Nie ma limitu długości — pisz pełną lekcję, nawet jeśli będzie długa. Nie zastępuj treści streszczeniem ani „i tak dalej”.
2. **Możesz ulepszać i uzupełniać.** Sprawdź pełny zakres zadania, dodaj brakujące dane i przykłady. Inspiruj się Khan Academy i innymi dobrymi materiałami, żeby zbudować solidniejszą podstawę lekcji.
3. **Nie gub danych.** Jeśli w materiale źródłowym jest coś, czego nie przepisujesz, wypisz to na końcu z powodem.
4. **Mini-wykłady w suchych miejscach.** Gdy fragment jest suchy (wzór, definicja, reguła), dodaj krótkie wyjaśnienie „dlaczego tak”, obrazowy przykład albo mini-wykład.
5. **Ciekawostki i mnemotechniki.** Wstawiaj je tam, gdzie pomagają zapamiętać. Oznaczaj je wyraźnie `::: ciekawostka` albo `::: mnemonik`.
6. **Dane niepewne oznaczaj** słowami „do weryfikacji”. Nie zmyślaj liczb ani nazw.
7. **Ćwiczenia z kluczem.** Każde zadanie ma rozwiązanie krok po kroku, a przy zadaniach konkursowych także punktację.
8. **Każda wizualizacja, model, schemat, zlewka, wykres lub obraz ma opis słowny** zaraz pod nim, w linii `@opis …`: co dokładnie widać (elementy, oznaczenia, kolory, liczby, co się zmienia) i jaki wniosek ma wyciągnąć uczeń. Bez opisu lekcja jest niepełna.
9. **Grafiki tylko wtedy, gdy są potrzebne do zrozumienia** (proces, zależność, ćwiczenie). Nie dodawaj ozdób.
10. **Format wyjścia:** czysty Markdown, jedna lekcja w odpowiedzi. Na samym początku podaj: `KB przed: <liczba>` i `KB po: <liczba>` (przybliżone rozmiary tekstu wejściowego i wyjściowego).
11. **Na końcu odpowiedzi** dodaj blok `## Pytania do autora` — wszystko, co wymaga decyzji albo danych od człowieka.

Format sekcji lekcji (kolejność stała):
- Cel lekcji (2–3 zdania)
- Minimum (10 pkt — to, co uczeń musi umieć na etap szkolny)
- Wyjaśnienie krok po kroku (z przykładami)
- Ciekawostki i mnemoniki
- Ćwiczenia z kluczem i punktacją
- Pułapki i typowe błędy
- Mini-test (5–8 pytań z odpowiedziami)
- Podsumowanie (checklista)

---

## [ZADANIE 1] CHE — doświadczenia chemiczne zbiorczo (etap szkolny)

**Etap:** szkolny (pkt I–VII zakresu LKO 2025/26).
**Cel:** uczeń umie opisać doświadczenie, odróżnić **obserwację** od **wniosku**, zapisać równanie reakcji i wyjaśnić wynik.
**Dołącz:** `chemia/lekcje_md/00/CHE.00.LAB.doswiadczenia.md` (materiał wstępny) oraz `olimpiada/zrodla/LKO/Zakresy_2025_2026_chemia_biologia_OCR.md` (sekcja chemii).
**Wymagania szczegółowe:**
- Schemat: obserwacja → wniosek → równanie (ten sam trójkąt w każdym doświadczeniu).
- Doświadczenia: spalanie magnezu, reakcja metalu z kwasem, reakcja tlenku z wodą, reakcja wodorotlenku z kwasem (zobojętnianie) z zabarwieniem wskaźnikiem, strącanie osadu, rozkład CaCO₃ (wykrycie CO₂ w wodzie wapiennej).
- Dla każdego: przyrządy, odczynniki, obserwacja, wniosek, równanie cząsteczkowe i jonowe (jeśli dotyczy), błąd typowy.
- Zakończ tabelą „obserwacja ≠ wniosek” z przykładami.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych.

---

## [ZADANIE 2] CHE — równania reakcji i obliczenia z równań (część masowa, bez mola)

**Etap:** szkolny → rejonowy (F17 + część stechiometrii masowej).
**Cel:** uczeń dobiera współczynniki, zapisuje równanie i liczy masy substratów i produktów z proporcji.
**Dołącz:** `chemia/lekcje_md/F/CHE.01.F17*.md` (kanon) oraz `chemia/che-modular/lessons-md/gotowe/REV01_powtorka_klasy_7.md` (sekcja „Obliczenia i doświadczenia konkursowe” — tam są gotowe przykłady, które nie mogą zniknąć).
**Wymagania szczegółowe:**
- Prawo zachowania masy: wyjaśnienie na przykładzie z wagą.
- Dobieranie współczynników: metoda kolejnych kroków, z przykładem, w którym pierwsza próba jest błędna.
- Obliczenia masowe: `m = n · M` **bez mola** — proporcja „z X g → Y g”. Pokaż ten sam przykład dwoma sposobami.
- Obliczenia z nadmiarem substratu — tylko wstęp (pełne w ZADANIU 5 po mol).
- Zachowaj przykłady z REV01: 2Mg + O₂ → 2MgO (z 12 g Mg → 20 g MgO); Fe + S (5,6 g + 3,2 g → 8,8 g FeS); CaCO₃ → CaO + CO₂ (10 g → 5,6 g CaO + 4,4 g CO₂).
- Każdy przykład z pełnym rozwiązaniem i punktacją.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych.

---

## [ZADANIE 3] CHE — audyt REV01 (dwa punkty do poprawy)

**Etap:** szkolny.
**Cel:** poprawka dwóch luk znalezionych w audycie arkusza etapu szkolnego 2025/26.
**Dołącz:** `chemia/che-modular/lessons-md/gotowe/REV01_powtorka_klasy_7.md` oraz `chemia/che-modular/lessons-md/gotowe/F03*.md` (gęstości cieczy niemieszających się).
**Zadania:**
- **Progi Δχ Paulinga** — uczeń ma znać: Δχ < 0,4 wiązanie niepolarne kowalencyjne; 0,4–1,7 wiązanie spolaryzowane kowalencyjne; > 1,7 wiązanie jonowe (sprawdź te progi w źródle; jeśli są różne w materiałach szkolnych — zaznacz „do weryfikacji”). Dodaj przykłady: H₂, HCl, NaCl.
- **Gęstość cieczy niemieszających się** — wyjaśnij, która ciecz jest na dole i dlaczego; dodaj zadanie z obliczeniem warstw.

**Format wyjścia:** krótka sekcja „poprawki” (co i gdzie zmienić, z podaniem linii) + pełny tekst zmienionych fragmentów. Bez ponownego pisania całej lekcji.

---

## [ZADANIE 4] CHE — szereg aktywności metali (etap rejonowy, X04)

**Etap:** rejonowy (pkt I–VII + konfiguracje, reakcje metali).
**Cel:** uczeń przewiduje, czy metal wypiera inny z roztworu, i czy reaguje z kwasem lub wodą.
**Dołącz:** `olimpiada/do_uzupelnienia/CHE_X04_szereg_aktywnosci_metali.md` (szkielet z danymi).
**Wymagania szczegółowe:**
- Szereg aktywności (Li, K, Ca, Na, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au — do weryfikacji z materiałem szkolnym).
- Zasada: metal bardziej aktywny wypiera mniej aktywny z roztworu soli.
- Reakcje z kwasami (tylko metale przed wodorem) i z wodą (tylko najbardziej aktywne).
- Mnemonik do zapamiętania szeregu (zaproponuj i oznacz `::: mnemonik`).
- Zadania z kluczem: zapisz równanie, uzasadnij, czy reakcja zajdzie.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych.

---

## [ZADANIE 5] CHE — równania jonowe i strącanie (etap rejonowy, J03)

**Etap:** rejonowy.
**Cel:** uczeń zapisuje równanie cząsteczkowe, jonowe pełne i jonowe skrócone oraz przewiduje osad.
**Dołącz:** `olimpiada/do_uzupelnienia/CHE_J03_rownania_jonowe_i_straceanie.md`.
**Wymagania szczegółowe:**
- Reguła: sole rozpuszczalne / nierozpuszczalne (tabela — jeśli brak w materiale, oznacz „do weryfikacji”).
- Krok po kroku: cząsteczkowe → pełne jonowe → skrócone jonowe. Przykłady: AgNO₃ + NaCl, BaCl₂ + Na₂SO₄, Pb(NO₃)₂ + KI.
- Strącanie: kiedy powstaje osad, a kiedy nie.
- Zadania z kluczem i punktacją.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych.

---

## [ZADANIE 6] CHE — stechiometria z nadmiarem (etap rejonowy, R07 — bez mola)

**Etap:** rejonowy.
**Cel:** uczeń rozpoznaje substrat w nadmiarze i liczy produkty na podstawie substratu, który przereaguje w całości.
**Dołącz:** `olimpiada/do_uzupelnienia/CHE_R07_stechiometria_z_nadmiarem.md`.
**Wymagania szczegółowe:**
- Sposób: najpierw sprawdź, który substrat jest „mniejszy” w proporcji (bez mola — proporcją mas).
- Przykłady: Mg + HCl, Fe + S, Zn + H₂SO₄ — z dwoma podanymi masami.
- Zadania z kluczem: pokaż, który substrat zostaje i ile go zostaje.
- Pułapka: uczeń liczy na oko zamiast porównać proporcje — pokaż to.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych.

---

## [ZADANIE 7] BIO — luki z audytu REV01 i REV02 (etap szkolny)

**Etap:** szkolny (pkt I–II zakresu LKO 2025/26).
**Cel:** uzupełnić REV01 (organizacja i chemizm życia) i REV02 (różnorodność życia) o brakujące treści.
**Dołącz:** `biologia/bio/md/REV01_organizacja_i_chemizm_zycia.md`, `biologia/bio/md/REV02_roznorodnosc_zycia.md`, `olimpiada/audyt/AUDYT_KP_SZ_2526.md` (lista luk).
**Luki do uzupełnienia:**
- **REV01:** poziomy organizacji od atomu (REV01 błędnie wyklucza atom — popraw). Makro- i mikroelementy z funkcjami.
- **REV02:** bakteriofag; zwarcica i naczynia; cykle mszaków i paproci (przedrośle, plemnie, rodnie); drzewa (wierzba, topola, osika, olsza); gąbki i parzydełkowce + tabela cech (segmentacja, odbyt, tkanki, symetria); szkielet zewnętrzny jako przyczep mięśni; jajo- i żyworodność; podwójna wymiana gazowa u ptaków.
- Każda luka: definicja, przykład, pułapka, pytanie kontrolne.

**Format wyjścia:** dla każdej luki osobna sekcja „Uzupełnienie: <luka>” + miejsce w pliku, gdzie wstawić. Bez przepisywania całych lekcji.

---

## [ZADANIE 8] BIO — homeostaza (etap rejonowy, B2)

**Etap:** rejonowy.
**Cel:** uczeń rozumie, jak organizm utrzymuje stałe warunki (temperatura, glukoza, woda, pH).
**Dołącz:** `olimpiada/do_uzupelnienia/BIO_B2_homeostaza.md`.
**Wymagania szczegółowe:**
- Pojęcie homeostazy, sprzężenie zwrotne ujemne i dodatnie (przykłady z organizmu).
- Regulacja temperatury, glukozy (insulina, glukagon), wody (ADH, nerki).
- Wizualizacja pętli sprzężenia — z opisem słownym (`@opis`).
- Zadania z kluczem.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych.

---

## [ZADANIE 9] BIO — układy człowieka B2a–B2f (etap rejonowy, po jednym na turę)

Wyślij każde podzadanie osobno (po odebraniu poprzedniego). Każde ma ten sam format wyjścia.

- **9a — skóra i układ ruchu** — `olimpiada/do_uzupelnienia/BIO_B2a_skora_i_uklad_ruchu.md`
- **9b — układ pokarmowy i odżywianie** — `olimpiada/do_uzupelnienia/BIO_B2b_uklad_pokarmowy_i_odzywianie.md`
- **9c — oddychanie i wydalanie** — `olimpiada/do_uzupelnienia/BIO_B2c_oddychanie_i_wydalanie.md`
- **9d — układ nerwowy i zmysły** — `olimpiada/do_uzupelnienia/BIO_B2d_uklad_nerwowy_i_zmysly.md`
- **9e — układ dokrewny** — `olimpiada/do_uzupelnienia/BIO_B2e_uklad_dokrewny.md`
- **9f — rozmnażanie i rozwój** — `olimpiada/do_uzupelnienia/BIO_B2f_rozmnazanie_i_rozwoj.md`

**Wymagania wspólne:** pełna lekcja wg sekcji z zasad wspólnych, z rysunkiem opisanym w `@opis`, zadaniami z kluczem i punktacją.

---

## [ZADANIE 10] BIO — człowiek (etap rejonowy, źródło L002)

**Etap:** rejonowy.
**Cel:** powtórka układów człowieka w formie zgodnej z zakresem etapu rejonowego.
**Dołącz:** `biologia/md/L002_powtorka_czlowiek.md`.
**Wymagania szczegółowe:**
- Zachowaj treść L002 (nie skracaj). Dopisz tylko braki wg zakresu rejonowego.
- Każdy układ: budowa → funkcja → zależność między nimi.
- Pytania kontrolne i zadania z kluczem.

**Format wyjścia:** pełna lekcja wg sekcji z zasad wspólnych; przy dopisanych fragmentach zaznacz `(dopisane)`.

---

## Po odebraniu odpowiedzi (dla człowieka)

1. Zapisz surową odpowiedź: `olimpiada/audyt/<nazwa>_surowa.md`.
2. Wprowadź wszystkie uwagi do lekcji (błędy, braki, ulepszenia, ciekawostki, mnemoniki). Odrzucone zapisz z powodem w sekcji „Decyzje”.
3. Uruchom build i test odpowiedniego przedmiotu.
4. Dopisz wiersz do `WERYFIKACJA.md` (W1 = treść zapisu, W2 = zakres).
5. Zaktualizuj `olimpiada/PRZEKAZANIE.md`, odhacz pozycję w „Braki”.
