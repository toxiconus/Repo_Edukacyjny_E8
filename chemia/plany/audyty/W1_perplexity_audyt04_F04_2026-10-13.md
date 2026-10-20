# AUDYT 04 / 60 — F04 Atom

Legenda: 🔴 błąd merytoryczny / sprzeczność · 🟠 niespójność · 🟡 brak · ⚪ formalne

---

## A. Błędy i sprzeczności

### 🔴 A1. Masa elektronu: „1/1836 u” jest nieprecyzyjne
- Minimum #2, §1 tabela, §11 karta, słownik: „elektron ok. 1/1836 u”.
- 1836 to stosunek **masy protonu do masy elektronu**. Masa elektronu wynosi ok. 0,00055 u, czyli ≈ 1/1823 u.
- **Popraw:** „masa elektronu ≈ 1/1836 masy protonu (≈ 0,00055 u)”. Zmień w 5 miejscach (Minimum, tabela, karta, fiszka, słownik).

### 🔴 A2. Skala jądra: trzy różne liczby
- Minimum #11: „ok. 100 000 razy mniejsze”. §1: „10 000–100 000 razy”. Wykład: „dziesiątki tysięcy razy”.
- **Popraw:** jedno sformułowanie wszędzie: „rzędu 10⁴–10⁵ razy (atom ≈ 10⁻¹⁰ m, jądro ≈ 10⁻¹⁵ m)”. Analogia ze stadionem i ziarnkiem grochu tylko dla ~10⁴ (inaczej groch byłby za duży).

### 🔴 A3. „Doświadczenie myślowe — Rutherford i złota folia”
- To realne doświadczenie historyczne (Geiger i Marsden, 1909; interpretacja Rutherforda, 1911). Etykieta „myślowe” jest myląca.
- **Popraw:** „Doświadczenie historyczne — folia złota (analiza wyników)”.

### 🟠 A4. Klinika — zdublowany wiersz
- „Liczba masowa to masa atomowa” występuje **dwa razy** (wiersze 5 i 10) z różnymi sformułowaniami. Zostaw jeden.

### 🟠 A5. Dośw. 2: równanie `Na + Cl → Na⁺ + Cl⁻`
- Model pokazuje pojedyncze atomy, a rzeczywiście reakcja to 2 Na + Cl₂ → 2 NaCl. Uczeń może zapamiętać błędne równanie.
- **Popraw:** oznacz jako „zapis modelowy dla pojedynczych atomów (rzeczywiste równanie: F11/F17)”. Użyj `Na → Na⁺ + e⁻` i `Cl + e⁻ → Cl⁻` jako zapisu półreakcji.

### 🟠 A6. Dośw. 1 (plastelina): „Obserwacja” jest opisem modelu, a nie obserwacją
- „Jądro jest zwarte w środku, elektrony są daleko od niego” to opis tego, co sam ulepiłeś. Lekcja F01 uczy pilnować obserwacji. **Popraw:** zmień typ na „Ćwiczenie modelowe” albo wpisz sensowną obserwację („w modelu na kartce nie da się zachować skali: elektrony musiałyby być kilka metrów od jądra”).

### 🟠 A7. §5, przykład ¹⁴₆C → ¹⁴₇N
- Wiersz „zmieniam liczbę protonów” pokazuje rozpad β⁻, w którym zmienia się też liczba neutronów (A bez zmian). **Dodaj** notkę „neutron → proton + elektron (A zostaje 14)”. Zdanie „zmieniam Z” jest wtedy poprawne.

### 🟠 A8. „Jon” w Minimum vs słownik
- Minimum #8: jon = oddanie/przyjęcie elektronów (atom). Słownik: „atom lub grupa atomów z ładunkiem”. **Dodaj** w §4 uwagę o jonach złożonych (NH₄⁺, SO₄²⁻, OH⁻ — F09/F12), bo Test i F05 będą ich używać.

### 🟠 A9. Zapis `ᴬ_Z X`
- W Minimum #7, §3, Wykładzie i Mapie zapis ma literalne znaki `_` (np. „ᴬ_Z X”), które w Markdown mogą włączyć kursywę lub wyświetlić się źle.
- **Popraw:** użyć `<sup>A</sup><sub>Z</sub>X` lub spójnie ²³₁₁Na (jak w tabelach).

---

## B. Braki

### 🟡 B1. Historia modeli — luki
- W §6 brakuje: **Demokryta** (nie „Greków” ogólnie), **odkrycia protonu** (Rutherford 1917–1919) i **neutronu** (Chadwick 1932) — dopiero Ciekawostka. Model ze składem jądra bez neutronu nie jest kompletny.
- **Dodaj** dwa wiersze do tabeli §6 (proton, neutron) i oznacz oś czasu.
- Dośw. historyczne: dodaj, że **model Thomsona** przewidywał odchylenia o małe kąty, a obserwacja odbić „do tyłu” była zaskoczeniem (słynne zdanie Rutherforda o pocisku 15 cali, który odbija się od bibułki — własnymi słowami).

### 🟡 B2. Tablica pierwszych 20 pierwiastków
- Wiele zadań podaje Z w nawiasie. Dla E8 trzeba czytać Z z układu. **Dodaj** w lekcji miniukład (Z 1–20: symbol, nazwa) i zadania bez podanego Z (np. „ile protonów ma ²⁷Al, ¹⁹F, ³⁹K?”).

### 🟡 B3. Skala i liczby w jednym miejscu
- **Dodaj** tabelkę: średnica atomu ~10⁻¹⁰ m (0,1 nm), jądra ~10⁻¹⁵ m, masa atomu H ≈ 1,67·10⁻²⁴ g, elektronu ≈ 9,1·10⁻²⁸ g; ładunek elementarny (nazwa). Pomaga w przejściu na „u” i mol (R04).

### 🟡 B4. Ćwiczenia — luki
- Brak: zadań „z zapisu do tabeli” bez podanego Z, zadania z H, H⁺ i ¹H (0 neutronów) w części podstawowej (jest dopiero w olimpijskiej), zadań z jonami złożonymi, zadań ze znakiem (Fe²⁺, Fe³⁺, S²⁻, N³⁻), „zbuduj atom z klocków” (konstruktor).
- Brak zadania **odwrotnego** (z p, n, e do symbolu i ładunku) w części B/C — jest dopiero w O2.
- **Dodaj** zadanie na wnioskowanie z tabeli cząstek („cząstka X: 9 p, 10 n, 10 e → jaki jon?”).

### 🟡 B5. Test (9 pytań) zbyt krótki
- Brakuje: zadanie z ujemnym ładunkiem (S²⁻), zadanie odwrotne (z p, e do ładunku), skala (jądro vs atom), Z vs A (zamiana), modele atomu, przypadek ¹H, „co zmienia p / n / e”.
- Pytania 1, 4, 5, 6, 8, 9 nie mają `!`. Dodaj 6–8 pytań (do ok. 15–17).

### 🟡 B6. Fiszki i słownik
- **Fiszki:** brak „Co zmienia p / n / e” w wersji pytanie-odpowiedź z przykładami, „e = Z − q — dlaczego minus?”, „Z kontra A” (przykład), „nuklid”, „zapis nuklidu”. Dublowanie treści z kartą powtórek jest OK, ale dodaj „pułapki znaku”.
- **Słownik:** brak: izotop (zapowiedź F05), izobar, izoton, ładunek elementarny, powłoka elektronowa, model atomu, orbital, proton/neutron nukleony, „nukleon”.

### 🟡 B7. Klinika — luki
- Dodaj: „Neutrony decydują o ładunku”, „A − Z to liczba elektronów”, „W jonie zmieniają się neutrony”, „Kation jest większy od atomu” (zapowiedź; w F06 promienie), „atom to kulka” (model), „zamieniam elektron na proton, żeby zrobić jon”.

### 🟡 B8. Warstwa olimpijska
- 4 zadania O1–O4 są dobre, ale: (a) brak zadania **ilościowego** (masa atomu w g z liczby u, masa próbki z liczby atomów), (b) brak zadania na **ładunek + masa** (np. „jon ma 2,0·10⁻¹⁹ C ładunku” — ładunek elementarny), (c) nagłówek zawiera „do zweryfikowania z wymaganiami konkursu”.
- **Dodaj** 2 zadania: ładunek całkowity jonu (liczba e·1,6·10⁻¹⁹ C) i oszacowanie masy atomu z A.

### 🟡 B9. Powiązania z lekcjami spoza zbioru
- Lekcja odwołuje się do **FIZ-01**, **A01–A03**, **BIO U08**, **O06** (inne lekcje) — nie ma ich w tym pliku. Upewnij się, że istnieją lub usuń odnośniki; w tekście ucznia daj jedno zdanie wyjaśnienia, żeby lekcja działała samodzielnie.

---

## C. Formalne ⚪

- Changelog „Ulepszenie — Claude, 2026-10-11” i TODO „Do zbudowania w GFX…” → usunąć z treści.
- Tabela „Modele silnika” zawiera tylko `periodic-54`; brakuje `f04-nuklid-v01` (używany w §3).
- `periodic-54` użyty w §3 przed F06 (układ okresowy) — dodaj jedno zdanie wyjaśniające, jak z niego czytać Z.
- Ciekawostka „Jesteśmy z gwiazd” zawiera „(orientacyjnie: …)” w nawiasie — przeredaguj w zdanie bez notki roboczej.
- `kicker v1.1` vs `stopka v1.0` — jak w F02, F03.
- Jednoliniowe `$$` (3×) — sprawdź renderowanie.
- Kotwica `#mosty` użyta w odnośnikach do F05/F07/F10 → prowadzi do Dodatku A tej samej lekcji.

---

## D. Kolejność poprawek

1. A1, A2 (liczby), A3 (etykieta) — szybkie poprawki.
2. A4–A9 — porządki w klinice, równaniu, zapisie nuklidu.
3. B1–B5 — modele atomu, tablica Z, zadania bez podanego Z, rozszerzony test.
4. B6–B9 — fiszki, słownik, klinika, olimpijska, odwołania.
5. Sekcja C.
