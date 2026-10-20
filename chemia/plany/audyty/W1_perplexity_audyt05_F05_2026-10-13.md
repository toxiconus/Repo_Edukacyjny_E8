# AUDYT 05 / 60 — F05 Izotopy, jony, masa atomowa

Obliczenia w lekcji (35,45 u; 10,8 u; Mg 24,32; Cu 63,62; Br 55%; Ga 64%; Cl₂ 70/72/74) sprawdziłem — są poprawne. Poniżej tylko to, co trzeba poprawić lub dodać.

Legenda: 🔴 błąd / sprzeczność · 🟠 niespójność · 🟡 brak · ⚪ formalne

---

## A. Błędy i niespójności

### 🔴 A1. Oznaczenie „Ar” — kolizja z argonem i niespójny zapis
- W tej samej lekcji „Ar” to **argon** (⁴⁰Ar, izobary, Test, Ćw.) i **masa atomowa** („Ar(Cl) = …”, słownik „Masa atomowa (Ar)”). W Ćw. F.4 pojawia się jeszcze „Aᵣ”. Trzy różne zapisy dla jednej wielkości.
- Dodatkowo: względna masa atomowa Aᵣ jest bezwymiarowa, a lekcja podaje ją „w jednostkach u”.
- **Popraw:** na E8 użyj jednego zapisu, np. **m_at(Cl) = 35,45 u** lub słownie „masa atomowa chloru”. Jeśli zostaje Aᵣ, dodaj ramkę: „Aᵣ (względna masa atomowa, bez jednostki) to liczba taka sama jak masa atomowa w u; nie myl z symbolem argonu Ar”.

### 🔴 A2. Masa elektronu „1/1836 u” (ta sama nieścisłość co F04 A1)
- Olimpijska ramka „Masa jonu” i fiszka: „elektron ma masę ok. 1/1836 u”. 1836 to stosunek masy protonu do elektronu; masa elektronu ≈ 0,00055 u.
- **Popraw:** „masa elektronu ≈ 0,00055 u (≈ 1/1836 masy protonu)”.

### 🟠 A3. Stosunek 9 : 6 : 1 dla Cl₂ dopasowany do 3 : 1, a nie do 76 : 24
- Przy 0,76 i 0,24: 0,58 : 0,36 : 0,06 ≈ **10 : 6 : 1**. Wartość 9 : 6 : 1 dotyczy udziałów 3 : 1 (75 : 25).
- **Popraw:** zapis „≈ 10 : 6 : 1 (przy 3 : 1 byłoby 9 : 6 : 1)” albo przepisz udziały na 75/25.

### 🟠 A4. Klinika, wiersz o promieniotwórczości
- „Wiele pierwiastków ma tylko izotopy trwałe (¹²C, ¹³C, ³⁵Cl, ³⁷Cl); promieniotwórcze są tylko niektóre (¹⁴C)” — pomieszane: węgiel ma i trwałe, i promieniotwórczy izotop, więc „pierwiastki z samymi trwałymi izotopami” nie pasuje do przykładów.
- **Popraw:** „Wiele **nuklidów** jest trwałych (¹²C, ¹³C, ³⁵Cl, ³⁷Cl); promieniotwórcze są tylko niektóre (¹⁴C, ³H).”

### 🟠 A5. Klinika, wiersz „Masa cząsteczkowa NaCl.”
- Kolumna „Błąd” nie zawiera błędnego zdania (to tylko hasło). **Popraw:** „Masa cząsteczkowa NaCl wynosi 58,5 u.” → „Poprawnie: NaCl nie tworzy cząsteczek; 58,5 u to masa jednostki wzoru (masa formalna)”.

### 🟠 A6. „Dana do weryfikacji” i „Wartości do weryfikacji w tablicach” w tekście ucznia
- §1 (D₂O wrze w ok. 101,4 °C „dana do weryfikacji”), §6 ramka akademicka. D₂O: t. wrzenia **101,4 °C** (tablice). Wpisz zweryfikowaną wartość i usuń uwagę (lub zamień na „sprawdź w tablicach”, jeśli to polecenie dla ucznia).

### 🟠 A7. Zadanie odwrotne: przybliżenie „zawyża wynik”
- Br: 55% vs 50,7%; Ga: 64% vs 60,1%. Uzasadnienie „przybliżenie mas zawyża wynik” jest prawdziwe, ale nieoczywiste — **dodaj** jedno zdanie: „masy izotopów są nieco mniejsze niż A (np. ⁷⁹Br: 78,918 u), więc użycie A przesuwa wynik”. Wartości w tablicach podaj z tabelką mas izotopów.

### 🟠 A8. Duplikacja z F04 §4 (jony proste)
- Tabela jonów (Na⁺, Mg²⁺, Al³⁺, Cl⁻, S²⁻), karta „Najczęstszy błąd”, „Kontrola ładunku” i reguła e = Z − q są niemal identyczne jak w F04. Uczeń dostaje to samo dwa razy, a nowe treści (jony wieloatomowe) są tylko wymienione.
- **Popraw:** w F05 §2 zostaw krótkie powtórzenie, a miejsce oddaj na **liczenie p i e w jonach wieloatomowych** i jony o zmiennym ładunku (Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺ — zapowiedź F09).

### 🟠 A9. „Dlaczego izotopy reagują tak samo” — za mocno
- §1: „izotopy reagują prawie tak samo” — OK, ale F05 nie wspomina o **efekcie izotopowym** (D reaguje wolniej, ciężka woda inaczej w organizmach). Jest zdanie „reakcje z deuterem bywają wolniejsze” — dobrze; **dodaj** uwagę, że „prawie” dotyczy też wodoru, gdzie różnica mas jest dwukrotna (największe efekty).

### 🟠 A10. Model `f05-izotopy-v01`: szczegóły silnika w tekście ucznia
- Opis i tabela „Modele silnika” zawierają `CHE.DATA.ISOTOPES`, „IUPAC/CIAAW”, „Model wielokrotnego użytku…”. To informacje dla zespołu, nie dla ucznia → przenieś do dokumentacji.

---

## B. Braki

### 🟡 B1. Jony wieloatomowe — brak liczenia protonów i elektronów
- Lekcja wprowadza SO₄²⁻, NO₃⁻, NH₄⁺, ale **nie uczy** liczenia p i e dla takich jonów (typowe zadanie konkursowe): SO₄²⁻ → p = 16 + 4·8 = 48, e = 50; NH₄⁺ → p = 11, e = 10; OH⁻ → p = 9, e = 10.
- **Dodaj** przykład i 3 zadania (np. NH₄⁺ i Na⁺ jako jony izoelektronowe).

### 🟡 B2. Kontrola sumy udziałów
- W procedurze średniej ważonej dodaj krok: „sprawdź, czy udziały sumują się do 100% (lub 1)” — częsty błąd w zadaniach z trzema izotopami. Dodaj zadanie z brakującym udziałem („izotopy 10% i 20%, trzeci — ile?”).

### 🟡 B3. Zadania odwrotne tylko z dwoma izotopami
- Brak zadania z danymi z tablicy mas izotopów (np. dokładne masy ⁶³Cu 62,93, ⁶⁵Cu 64,93), brak zadania, w którym trzeba **wskazać pierwiastek** po masie atomowej i znanych izotopach (jest B.3, ale tylko jedno).
- **Dodaj:** dwa zadania „masa atomowa → procent izotopu” (dokładne masy), „trzy izotopy z jedną niewiadomą” (olimpijska).

### 🟡 B4. Zastosowania izotopów — za mało
- E8 oczekuje zastosowań (¹⁴C, ¹³¹I, ⁶⁰Co, ²³⁵U, tryt w oświetleniu, izotopy w medycynie). Lekcja daje je przelotnie w §6 i Ciekawostkach.
- **Dodaj** tabelkę „izotop → zastosowanie → dlaczego” oraz pytanie opisowe. Dodaj jedno zdanie o bezpieczeństwie (promieniowanie), z odesłaniem do A01–A03.

### 🟡 B5. Widmo mas / skąd znamy skład izotopowy
- Brakuje 3 zdań o spektrometrii mas i o tym, że udział izotopów mierzy się doświadczalnie (ambitne). Wykres słupkowy dla Cl (35 i 37) pomoże zrozumieć „wartość × udział”. **Dodaj** wykres w modelu lub rysunku.

### 🟡 B6. Test (8 pytań) — luki
- Brakuje: jon wieloatomowy, jon + izotop jednocześnie (³⁷Cl⁻), obliczenie z trzema izotopami, „średnia ważona leży…”, A vs masa atomowa, kontrola wyniku (który wynik jest niemożliwy). Pytania 1, 6, 7 nie mają `!` w kluczu.
- Dodaj 6–8 pytań (do ok. 14–16).

### 🟡 B7. Fiszki i słownik
- Słownik: brak **nukleon**, **deuter**, **tryt**, **masa izotopu**, **masa cząsteczkowa**, **jednostka wzoru**, **spektrometr mas**, **okres półtrwania**, **znacznik izotopowy**.
- Fiszki: brak fiszek „jak obliczyć p, n, e jonu wieloatomowego”, „jak sprawdzić średnią”, „trzy izotopy — wzór ogólny”. Obecne fiszki olimpijskie powtarzają ciekawostki zamiast wymagać obliczeń.

### 🟡 B8. Warstwa olimpijska
- O2 (gal) jest tym samym typem zadania co przykład w lekcji; O3 jest łatwiejsze niż zadania z F04 (O2). Brak zadania o **cząsteczkach z kilku izotopów** innych niż Cl₂ (np. HCl: 4 masy; Br₂: 3 masy z dokładnymi udziałami), brak o **mieszaninie izotopowej wody** (H₂O, D₂O, HDO — liczba możliwych cząsteczek).
- **Dodaj** 2–3 zadania: HDO/H₂O/D₂O i masy cząsteczek, trzy izotopy + jedna niewiadoma, ocena niepewności masy atomowej.
- Nagłówek „(do zweryfikowania z wymaganiami konkursu)” — usuń z tekstu ucznia.

### 🟡 B9. Klinika — luki
- Dodaj: „D i H to różne pierwiastki”, „izotopy różnią się liczbą elektronów”, „masa atomowa to masa najcięższego izotopu”, „jeśli średnia wyszła większa od masy większego izotopu — zamieniłem udziały” (jest w „W skrócie”, ale nie w klinice).

### 🟡 B10. Eksperyment
- Dośw. 2 („torebka kulek”) jest dobry, ale brak **zapisu wyników** (tabela pomiarów) i **oceny niepewności wagi**. Dodaj tabelę (m₁, m₂, m_średnia z wagi, m_średnia ważona) i pytanie „dlaczego wyniki się różnią?” (niepewność wagi).

---

## C. Formalne ⚪

- Changelog „Ulepszenie — Claude, 2026-10-11” w treści → usunąć.
- „(orientacyjnie)” w ciekawostce o masie atomowej jako przedziale — przeredaguj w zdanie bez notki roboczej.
- Odnośniki `[F04 Atom](#mosty)`, `[F07](#mosty)`, `[F09 i F12](#mosty)` prowadzą do Dodatku A tej samej lekcji, nie do innych lekcji.
- `kicker v1.1` vs `stopka v1.0` — ujednolicić.
- Jednoliniowe `$$` (kilka wzorów) — sprawdzić renderowanie.
- Odnośniki do **A01–A03**, **R**, **F21** — upewnij się, że lekcje istnieją i mają zgodne numery.

---

## D. Kolejność poprawek

1. A1, A2 — oznaczenie masy atomowej i masa elektronu (też w F04).
2. A3–A7 — liczby, klinika, notatki robocze.
3. A8, B1 — przerobić §2 na treść „nowa wartość” (jony wieloatomowe).
4. B2–B6 — zadania, test, zastosowania.
5. B7–B10 — słownik, fiszki, olimpijska, klinika, doświadczenie.
6. Sekcja C.
