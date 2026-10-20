# Efekty i dane do klocków — notatki dla kolejnych grafik

Ten plik zbiera to, co już sprawdzone przy budowie klocków laboratoryjnych (palniki, probówki, znaki). Nowe grafiki mają z niego brać dane zamiast zgadywać.

## 1. Barwy płomienia (próba płomieniowa)

Wartości poglądowe do wyświetlania. Źródło: WebMineral „Flame Tests” (webmineral.com/help/FlameTest.shtml) oraz uzgodnienie z tabelami szkolnymi. Do sprawdzenia w W1.

| Pierwiastek | Barwa (słownie) | Kolor w klockach | Uwagi |
|---|---|---|---|
| Li | karmazynowa (czerwona) | `#ff3b6b` | łatwo pomylić ze strontem |
| Na | intensywnie żółta | `#ffd21f` | zagłusza inne barwy; ślady wszędzie |
| K | fioletowa (blada, liliowa) | `#b794ff` | ogląda się przez niebieskie szkło kobaltowe |
| Rb | czerwonofioletowa | `#d2428f` | podobna do potasu, z większą czerwienią |
| Cs | niebieskofioletowa (źródło podaje „violet”) | `#5aa4ff` | **rozbieżność źródeł**: sprawdzić w W1 |
| Ca | ceglastoczerwona / pomarańczowa | `#ff6a1f` | |
| Sr | karminowa | `#ff2430` | |
| Ba | żółtozielona | `#9be34d` | sole baru są trujące |
| Ra | karminowa (dane historyczne) | `#d6123d` | promieniotwórczy: tylko animacja |
| B | zielona | — | nie w klockach P01 |
| Cu | niebieskozielona (azur) | — | nie w klockach P01 |
| Mg, Be | nie barwią płomienia | — | Mg pali się własnym, białym światłem |

Zasada wizualna: płomień zaczyna się od barwy gazu (pomarańczowo-niebieskiej), a barwa soli narasta powoli (około 3 s). Nie tonować płomienia od pierwszej klatki (to był błąd, poprawiony w P01).

## 2. Zachowanie metali w wodzie (probówki)

Parametry w `dane/pierwiastki.js` (PR): `tempo` — szybkość pęcherzyków, `rozow` — jak mocno roztwór różowieje od fenoloftaleiny, `kurcz` — kurczenie się kawałka metalu.

- Li: wolno, lekko unoszący się, różowienie słabe w czasie.
- Na: szybciej, wyraźne różowienie.
- K: najszybciej, metal szybko się kurczy, bardzo gwałtowna reakcja (w pokazie wyłącznie nauczyciel).
- Ca, Sr, Ba: pośrednio; Ba energicznie.
- Be, Mg: prawie nie reagują z zimną wodą (warstwa tlenku; Mg reaguje z gorącą).
- Ra: tonie, energiczniej niż bar; **tylko animacja**, bez doświadczenia w szkole.

Barwa roztworu zmienia się **tylko** przy wskaźniku (fenoloftaleina). Pęcherzyki to wodór. Różowy kolor to dowód na zasadę (OH⁻), a nie na sam metal.

## 3. Palenie metali (w powietrzu)

- Mg: jasny, oślepiający biały błysk i iskry; tworzy biały dym MgO. Nie patrzeć prosto w błysk.
- Na: żółty płomień. K: fioletowy, z małą liczbą iskier.
- Palenie metali grupy 1 i 2 w szkole to pokaz nauczyciela, nie zadanie ucznia.

## 4. Typy efektów (wspólne klocki)

- **Płomień**: gradient radialny + drgająca mgiełka (`Math.sin` z przesunięciem), barwa mieszana z pomarańczowej w barwę soli.
- **Pęcherzyki**: kulki rosnące w górę, wysokość zależna od `tempo`, przezroczystość od `1 - p`.
- **Poświata radu**: `globalCompositeOperation = 'lighter'` + gradient turkusowy — **do dodania** w kolejnej iteracji.
- **Iskry magnezu**: krótkie linie w losowych kierunkach, zanikające; ograniczone do Mg.
- **Pauza**: `znakPauzy` (przyciemnienie i symbol ||). Klik w płótno przełącza.

## 5. Znaki bezpieczeństwa

- Promieniowanie: trójlistek ISO 361 na żółtym tle (`KLOCKI.znak.tref`).
- Zakaz w szkole: przekreślona kolba w czerwonym kole (`KLOCKI.znak.zabron`).
- Wspólny baner: `KLOCKI.znak.zakaz(tekst)`. Każdy pierwiastek promieniotwórczy ma `rad: 1` w danych, a komponent sam wstawia baner i znacznik przy symbolu.

## 6. Wybór pierwiastka

Tylko symbole, bez pełnych nazw. Znacznik ▸ mówi, że lista się rozwija (`wyborSymbole` w `pomocnicze.js`, element `<details>`). Pełna nazwa i uwaga jako `title`.

## 7. Do zrobienia (następne iteracje)

- Poświata radu w probówce i palniku (efekt `lighter`).
- Przeniesienie tablicy okresowej z animacji (`uklad_okresowy`) z kafelkami i znacznikami — obecna wersja w klocku jest uproszczona.
- Wspólny statyw z trzema probówkami i trzema palnikami jako jeden klocek z parametrami.
