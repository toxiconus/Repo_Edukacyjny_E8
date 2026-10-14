# Baza mała — klocki wizualizacji E8

Paczka dla zewnętrznych modeli AI i dla osób pracujących poza silnikiem. Zawiera gotowe elementy wizualizacji (klocki, sceny, modele, tablice danych) wydzielone z dużej bazy, oraz listę braków do zrobienia.

## Co jest w środku

| Plik / folder | Co to jest |
|---|---|
| `KATALOG_KLOCKOW.md` | **Zacznij tutaj.** Spis wszystkiego w paczce: klocki laboratoryjne, modele chemii, grafiki biologii, polskie grafiki, tablice danych. |
| `BRAKI_WIZUALIZACJI.md` | Lista 30 pozycji, których brakuje w lekcjach, z oczekiwanymi elementami każdej grafiki i zaleceniem (osadzić / rozszerzyć / zbudować / opisać / decyzja autora). |
| `klocki/` | Mała baza: klocki laboratoryjne (zlewka, płomień, probówki, palniki, układ okresowy, znaki…) z `manifest.json` i folderem `dane/`. |
| `klocki/lite/` | Lekkie silniki: rejestr modeli (`che-lite.js`), naczynia SVG (`rx-lite.js`), kalkulator stechiometryczny (`stech-lite.js`), dane zlewek (`lab-dane.json`). |
| `gfx/` | Sceny, naczynia, reakcje i efekty chemii (z dużej bazy) z `KATALOG.md` i `index.json`. |
| `tablice/` | Zbiory JSON z danymi referencyjnymi (pierwiastki, substancje, reakcje, rozpuszczalność, weryfikacja) i `_indeks.json`. |
| `biblioteki/chemia/` | `rozszerzenia.js` (modele i zlewki chemii) oraz `KATALOG_MODELI.md`. |
| `biblioteki/polski/` | `pol-viz.js` (grafiki języka polskiego) oraz `POL_KATALOG_GRAFIK.md`. |
| `biblioteki/biologia/` | `wizualizacje/` (59 grafik, jeden plik na grafikę) oraz `BIO_KATALOG.md`. |

## Jak z tego korzystać (zewnętrzny model)

1. Przeczytaj `KATALOG_KLOCKOW.md`, żeby znaleźć id potrzebnego klocka.
2. Dla braku z `BRAKI_WIZUALIZACJI.md` sprawdź, czy istnieje klocek o podobnym kształcie, zanim zaprojektujesz nowy.
3. Otwórz plik klocka i sprawdź, jakie dane przyjmuje (parametry w nagłówku pliku i w katalogu).
4. Nowa grafika ma tę samą strukturę co istniejące: komponent wielokrotnego użytku z opisem wejścia i wyjścia, plus wpis w katalogu.

## Ograniczenia (ważne)

- `klocki/` i `klocki/lite/` mają własny rejestr i działają bez głównego silnika.
- `gfx/`, `biblioteki/chemia/rozszerzenia.js` i `biblioteki/biologia/` zakładają obecność głównego silnika (obiekt `CHE` i jego rejestry). W tej paczce służą do czytania i przenoszenia kodu, nie do samodzielnego uruchomienia.
- Paczka jest **kopią**. Źródłem jest duża baza (`chemia/che-modular/engine/`, `biologia/bio/`, `polski/szablon/`). Zmiany rób w źródle, potem odśwież paczkę.

## Odświeżanie

Z korzenia repo:

```
python3 wizualizacje-projekty/narzedzia/zbuduj_baze_mala.py
```

Skrypt kopiuje foldery i generuje `KATALOG_KLOCKOW.md` na nowo. `README.md` i `BRAKI_WIZUALIZACJI.md` zachowuje — te pliki pisze się ręcznie.
