# AUDYT 02 / 60 — F02 Materia i substancje

Legenda: 🔴 błąd merytoryczny / sprzeczność z własną zasadą · 🟠 niespójność · 🟡 brak · ⚪ formalne

---

## A. Błędy merytoryczne i sprzeczności

### 🔴 A1. „Pierwiastek” = „substancja prosta” — lekcja łamie własną zasadę
§2 mówi wprost: „pierwiastek i substancja prosta to nie synonimy”. Tymczasem:
- Minimum #2: „substancja czysta dzieli się na **pierwiastki** i związki” (powinno: substancje proste i związki).
- §0.5 Wykład: „**Pierwiastki** (substancje proste) zbudowane są z atomów jednego rodzaju…”.
- Diagnoza Q4: „O₂ — pierwiastek (substancja prosta) czy związek?”.
- Fiszka „Substancja czysta | … pierwiastek lub związek”.
- Model `f02-czastki-v01`: uczeń wybiera „pierwiastek / związek / mieszanina…”.
- Olimpijskie O1: „diament — pierwiastek (węgiel)” — **błędne wg lekcji** (diament to substancja prosta; pierwiastek to węgiel). Prompt O1 też podaje „pierwiastek” jako kategorię.
- **Popraw:** wszędzie „substancja czysta = substancja prosta albo związek”. „Pierwiastek” wyłącznie jako rodzaj atomów. W modelu zamień opcję „pierwiastek” na „substancja prosta”. W O1 klucz: „diament — substancja prosta (alotrop węgla)”.

### 🔴 A2. Stopy (stal, brąz, mosiądz) jako „mieszanina jednorodna (roztwór stały)” — zbyt kategorycznie
- Lekcja uczy, że jednorodność zależy od skali, a potem klasyfikuje stal i brąz jednoznacznie jako jednorodne. Stal węglowa to ferryt + cementyt (≥ 2 fazy pod mikroskopem); mosiądz o dużej zawartości Zn ma dwie fazy; brąz może zawierać fazy międzymetaliczne.
- **Popraw:** „stop (np. mosiądz α) — w szkolnym ujęciu mieszanina jednorodna; pod mikroskopem metalograficznym stopy bywają wielofazowe”. Dodaj to do ramki „Jednorodność zależy od skali” (§4) i przypadków granicznych (§5), słownika („Stop”) i klucza O1.

### 🔴 A3. Test „czy da się rozłożyć” jako kryterium pierwiastek/związek (§8.5 „W skrócie”, Stopień 2a)
- „Nie da się rozłożyć → pierwiastek” to wniosek z **braku** dowodu. Lekcja nie mówi, że pozytywnym dowodem związku jest rozkład (np. elektroliza wody), a pierwiastka — wielokrotne nieudane próby i analiza składu.
- Dodatkowo kryterium „nie da się rozłożyć” dotyczy substancji prostej, a nie „pierwiastka” (A1).
- **Popraw:** dopisz zdanie „związek rozpoznajemy po tym, że **da się go rozłożyć** (np. wodę prądem), substancja prosta — nie daje się rozłożyć znanymi metodami”. Dodaj do klucza przykład rozkładu (elektroliza H₂O, rozkład HgO).

### 🟠 A4. „Składniki mieszaniny zachowują swoje właściwości” (§3 cecha 2, minimum #7, fiszki)
- Dla roztworów to uproszczenie: sól w wodzie nie ma właściwości kryształu, a roztwór ma inną t. wrzenia i gęstość niż woda.
- **Popraw:** „składniki zachowują swoją **tożsamość chemiczną** (da się je odzyskać) i wiele właściwości; właściwości mieszaniny zależą od składu”. Przykład Fe + S zostaw (tam działa idealnie).
- Ambitne: mieszanina o stałym składzie istnieje (azeotrop etanol–woda 95,6% etanolu, mieszaniny eutektyczne), więc „zmienny skład” to cecha typowa, nie logiczna definicja.

### 🟠 A5. Wykład §0.5: „długopis i linijka z tej samej substancji — plastiku”
- „Plastik” to klasa materiałów (mieszaniny polimerów z dodatkami), a nie jedna substancja. Zaprzecza definicji „substancja czysta”.
- **Popraw:** „gwóźdź i śruba mogą być z tej samej substancji — żelaza” albo „polietylen” (z odesłaniem do F-lekcji organiki).

### 🟠 A6. Dośw. 2 (kranówka vs destylowana): wniosek mocniejszy niż dowód
- Brak pozostałości po odparowaniu pokazuje „bardzo mało rozpuszczonych soli”, a nie „substancja czysta”. Lekcja sama pisze (§1), że czystość jest względna.
- **Popraw:** „woda destylowana — w tym teście bez wykrywalnej pozostałości, więc w modelu szkolnym traktujemy ją jako czystą H₂O”.
- Sprzęt: szkiełko zegarkowe nad palnikiem może pęknąć → „płytka grzejna, mała parownica”.
- `@opis` pod doświadczeniem pokazuje **roztwór soli** (`f01Odparowanie`), a nie wodę z kranu → niezgodność obrazka z opisem.

### 🟠 A7. „Osad” zamiast „pozostałość / nalot”
- §5 (woda z kranu: „zostaje osad”), Ćw. B.2 („biały osad”), Dośw. 2 hipoteza („osad soli”), Test („zostawia osad”). W F01 „osad” = produkt strącenia (objaw reakcji). Tu to krystaliczna pozostałość/kamień. Ujednolić: „biały nalot / pozostałość po odparowaniu”.

### 🟠 A8. Przypadki graniczne (§5)
- **woda mineralna:** uzasadnienie „zmienny między markami” jest niepoprawne (różnice między markami nie czynią czegoś mieszaniną). Zamień na „zawiera kilka rozpuszczonych soli (Ca²⁺, Mg²⁺, HCO₃⁻…)”; dodaj „gazowana po otwarciu: pęcherzyki CO₂ = dodatkowa faza gazowa”.
- **powietrze:** „(dane do weryfikacji)” to notatka robocza w tekście ucznia. Zastąp: „ok. 78% N₂, 21% O₂, 0,9% Ar, 0,04% CO₂ (objętościowo)” — tak jak w Ciekawostkach (obecnie dwie wersje liczb).

### 🟠 A9. §8.5 „Nie myl”: wiersz „tlen (pierwiastek) / tlen w wodzie” jest nieczytelny
- „W H₂O nie ma pierwiastka tlenu jako substancji — jest pierwiastek w związku” jest zagmatwane. **Popraw:** „słowo ‘tlen’ może znaczyć: **pierwiastek** (rodzaj atomów — jest w H₂O), **substancję prostą O₂** (gaz — w H₂O jej nie ma), **atom O**.”

### 🟠 A10. Niedomknięte kryteria w „W skrócie” i procedurze (§5)
- Procedura zaczyna od pytania „ile substancji?”, ale **nigdzie nie mówi, jak to ustalić** (jedyne wskazówki są w ramce „poziom akademicki” §8 i w Ćw. D).
- **Dodaj do §5** trzy praktyczne kryteria: stała t. topnienia/wrzenia, odparowanie bez pozostałości, chromatografia (jedna plamka). Z zastrzeżeniem, że to mocne przesłanki, a nie 100% dowód (eutektyki, azeotropy).

### 🟠 A11. Wersje / metadane
- `kicker: MASTER v1.1` vs `stopka: MASTER v1.0`. Ujednolić.

---

## B. Braki

### 🟡 B1. Zawiesina, emulsja, piana, aerozol — bez definicji na poziomie E8
- Mapa myśli i klinika używają „zawiesina, emulsja”, ale §8 jest oznaczony [extra] i nie zawiera emulsji. Podstawa programowa wymaga zawiesiny i emulsji już w E8.
- **Dodaj do §4 (E8)** 4-wierszową tabelkę: zawiesina (ciało stałe w cieczy: piasek+woda), emulsja (ciecz w cieczy: olej+woda), piana (gaz w cieczy/stałym), aerozol (dym — ciało stałe w gazie, mgła — ciecz w gazie). Rozwinięcie koloidów zostaw w §8.

### 🟡 B2. Cząsteczki dwuatomowe i wzory substancji prostych
- Lekcja używa O₂, N₂, H₂, Cl₂, ale nie podaje listy substancji dwuatomowych ani zasady „metale i gazy szlachetne: wzór = symbol (Fe, He)”.
- **Dodaj do §6:** H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ (7 dwuatomowych); metale i gazy szlachetne zapisujemy symbolem; ambitnie: P₄, S₈.

### 🟡 B3. „Liczba protonów / Z” użyta przed F04
- Minimum #3, §2, słownik. **Dodaj** 1 zdanie: „proton — cząstka w jądrze atomu; ich liczba (Z) to numer pierwiastka; więcej w F04”.

### 🟡 B4. „Substancja złożona” (Ćw. F.4, Klinika) — termin niewprowadzony
- Dodaj w §2: „związek chemiczny (inaczej substancja złożona)” i do słownika.

### 🟡 B5. Terminologia „substancja” vs „substancja czysta”
- Minimum #1 definiuje „substancję” jako „o stałym składzie”, a #2 „substancję czystą”. Dodaj: „w tej lekcji ‘substancja’ = ‘substancja czysta’; mieszanina składa się z kilku substancji”. Mapa myśli i §13 mają „materia → substancje czyste i mieszaniny”, co brzmi pleonastycznie.

### 🟡 B6. Pytanie przewodnie (§0.2) bez domknięcia
- „Trzy szklanki: destylowana, z solą, z piaskiem — które mieszaniny i jak sprawdzić?” — odpowiedź nigdzie nie wraca. Dodaj na końcu §5 krótkie „Wracamy do pytania przewodniego” (odparowanie, sączenie, magnes…).

### 🟡 B7. Ćwiczenia
- **E. Transfer:** polecenie obejmuje 8 próbek, klucz opisuje tylko 4 (etanol z wodą, woda z olejem, Cu/O₂, H₂O). Dopisz pełną tabelkę dla powietrza, wody z cukrem, granitu.
- **D.1** — dodaj do klucza: mieszaniny eutektyczne i azeotropy też mają ostre punkty (ambitnie).
- **Brak** ćwiczeń: symbol vs wzór (Co / CO, Cl / CL), liczenie atomów w 3 Ca(OH)₂, narysuj cząsteczkowy model (kółka) mieszaniny i substancji, wskazanie sposobu rozdzielenia 3-składnikowej mieszaniny (jest tylko C.1).
- **Brak** zadania na przeliczanie faz w układzie z gazem (dodaj uwagę, że fazy gazowej „powietrze nad cieczą” zwykle nie liczymy).
- **O3:** dodaj w kluczu zastrzeżenie, że sól i lód przy 0 °C oddziałują (obniżenie temp. topnienia) i fazę gazową pomijamy.

### 🟡 B8. Test (10 pytań) — luki
- Brakuje: Co vs CO (symbol/wzór), liczba faz (woda + olej + lód), „jednorodna ≠ czysta” w formie kontrprzykładu, mieszanina vs związek na przykładzie Fe + S, odmiany alotropowe, emulsja vs zawiesina.
- Pytania 3, 5, 6, 7, 10 nie mają `!` (wyjaśnienia). Uzupełnić.
- Dodaj 6–8 pytań → razem ok. 16–18.

### 🟡 B9. Klinika błędów — powtórzenia i luki
- Dwa wiersze („Jednorodne znaczy czyste” i „Jedna faza = jedna substancja”) mają to samo „Dlaczego?: Liczba faz ≠ liczba substancji”. Połącz albo rozróżnij.
- **Dodaj:** „CO = Co”, „woda z kranu to czysta woda”, „roztwór zawsze zawiera wodę”, „powietrze to tlen”, „związek = coś, co ma wiele atomów” (CO₂ vs O₂ przykład jest, ale brakuje He₂/Ne jako kontrprzykładu).

### 🟡 B10. Słownik i fiszki
- **Słownik:** brak koloid, zawiesina, emulsja, substancja złożona, faza gazowa, jednostka wzoru, metoda fizyczna.
- **Fiszki:** „faza” występuje dwa razy (understand i olimpijska); „alotropia” dubluje „odmiany alotropowe”. Zamień dublety na nowe: eutektyk/azeotrop, zawiesina vs emulsja, 7 dwuatomowych, jak rozpoznać czystość (t. topnienia).

### 🟡 B11. Warstwa olimpijska
- Za cienka (1 ramka, 3 zadania, 1–2 pkt na zadanie), a nagłówek zawiera „do zweryfikowania z wymaganiami konkursu”.
- **Dodaj** zadania: (1) wykres temperatury topnienia/krzepnięcia czystej substancji vs mieszaniny; (2) obliczenia ze stałości składu (ile g H₂O powstanie z 4 g H₂ i 40 g O₂ — prosty nadmiar); (3) „znajdź błąd w klasyfikacji” tabela z 6 wierszami; (4) rozdzielanie mieszaniny 4-składnikowej z uzasadnieniem właściwościami.

### 🟡 B12. §7 rozdzielanie
- Tabela nie wymienia: dekantacji, rozdzielacza (ciecze niemieszające się), chromatografii — a Ćw. E używa „rozdzielacza”. Dodaj do tabeli lub w przypisie z odesłaniem do F03.
- Uwaga ambitna: destylacją prostą etanolu z wodą nie otrzymasz 100% etanolu (azeotrop).

---

## C. Formalne / techniczne ⚪

- **Changelog „Ulepszenie — Claude, 2026-10-11”** i zdanie „jeśli występował” w treści ucznia → usunąć.
- **TODO deweloperskie** („Do zbudowania w GFX: … magnes wyciągający opiłki… interaktywne drzewo klasyfikacji”): magnes już istnieje jako `@model f02-magnes-fes-v01` — TODO nieaktualne.
- **Tabela „Modele silnika”** nie zawiera `f02-magnes-fes-v01` ani `f02-czastki-v01`.
- **Model `f02-czastki-v01`:** opcja „pierwiastek” → „substancja prosta” (A1).
- **Dośw. 1** to powtórka Dośw. 4 z F01 (taki sam sprzęt i model `f01FeS`; w opisie „ciemnoszara” a w tekście „czarna”) → ujednolić z F01 (patrz audyt F01 A9) albo zróżnicować (np. w F02 podkreślić tylko magnes i skład).
- **`$$` w jednej linii** (procedura §5) — jak w F01: sprawdzić renderowanie. Długa linia ze strzałkami i średnikami jest nieczytelna → rozważ rysunek lub listę.
- **Kotwice** (`#mosty`, `#test` itd.) powtarzają się w każdej lekcji — sprawdź kolizje po scaleniu plików.
- **Ciekawostki:** OK merytorycznie (14 kt = 58,3% Au), tylko usuń „(orientacyjnie)” z zapisu albo daj źródło.

---

## D. Kolejność poprawek

1. A1 (terminologia pierwiastek / substancja prosta) — globalnie w tej lekcji.
2. A2–A5 — uściślenia merytoryczne (stopy, rozkład, właściwości składników, „plastik”).
3. A6–A10 — doświadczenie 2, „osad”, przypadki graniczne, kryteria „ile substancji”.
4. B1–B4 — emulsja/zawiesina, dwuatomowe, Z, „substancja złożona”.
5. B6–B12 — pytanie przewodnie, ćwiczenia, test, klinika, słownik, olimpijska.
6. Sekcja C — posprzątać plik.
