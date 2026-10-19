# Styl wizualizacji — jeden „autor rysunków” dla chemii, biologii i fizyki

Cel: każdy rysunek (canvas, SVG, model, zlewka) wygląda, jakby narysowała go ta sama ręka: spokojny, schematyczny rysunek podręcznikowy. Interfejs (kolory, promienie, cienie) jest już wspólny w chemii i biologii (`--accent`, `--c-*`, `--r-*`). Rozjeżdża się warstwa rysunków; ten dokument ją ujednolica.

Kod: `engine/src/gfx/wspolne/styl/styl-tokeny.js` (`CHE.GFX.STYL`). Kontrola: `python3 tools/styl_sprawdz.py` → `STYL_RAPORT.md` (kolejka przeróbek).

## Zasady

1. **Kolor niesie znaczenie.** `ok` (zielony), `blad` (czerwony), `uwaga` (bursztyn), `info` (niebieski), `dodatek` (fiolet), `akcent` (teal przedmiotu). Bez kolorów dla ozdoby.
2. **Ładunek ma jeden kolor wszędzie:** plus czerwony (`plus`), minus niebieski (`minus`) — jony w chemii, ładunki w fizyce, jony błony w biologii.
3. **Kolory substancji i organizmów są realistyczne** (CuSO₄ niebieski, osad Cu(OH)₂, płomień) i pochodzą z `CHE.COLORS`, nie z palety stylu. Paleta stylu dotyczy znaczników, strzałek, ramek, osi, wykresów.
4. **Linie:** 1 px siatka i pomocnicze, 1,5 px cienkie, 2,5 px kontur naczyń i ramek, 3 px akcent; końce i łączenia okrągłe.
5. **Szkło i ciecz:** jedna geometria (`testTube` itd.), kontur `STYL.szklo.kontur()`, odblask z lewej strony, ciecz półprzezroczysta (`STYL.ciecz`).
6. **Tekst:** etykiety 12 px (system-ui), wzory i liczby monospace 13 px, indeksy i potęgi znakami Unicode (H₂O, Ca²⁺).
7. **Motyw jasny i ciemny** zawsze; kolory z tokenów lub `currentColor`, nigdy sztywne `#fff`/`#000`.
8. **Animacja:** domyślna (tło, przepływ) startuje sama, gdy rysunek jest widoczny, i się powtarza; doświadczenie startuje przyciskiem; `prefers-reduced-motion` zatrzymuje.
9. **Opis słowny** `@opis` przy każdym rysunku (wymóg buildu).
10. **Zakres:** rysunek pokazuje tylko to, co potrzebne do zrozumienia; treść poza zakresem LKO oznaczona w rysunku.

## Stan (z `STYL_RAPORT.md`)

Chemia używa palety niebiesko-szarej, biologia własnej, ziemistej (`bio-viz.js`), fizyka trzeciej; grubości linii skaczą między 0,8 a 3 px. Największe odstępstwa: `lekcja/rozszerzenia.js` (wiele widoków w jednym pliku), `bio-viz.js`, prototyp R4, `acid-rain-v01`, `fiz-przewodniki-v01`, `kw-dysocjacja-v01`.

## Plan przeróbki (od najmniejszego ryzyka)

1. Nowe komponenty i prototyp R4 od razu na tokenach (R4: wymiana własnych kolorów na `STYL`).
2. Widoki o największej liczbie odstępstw, po jednym, z zrzutem przed i po (bez zmiany treści).
3. `bio-viz.js`: zmapować paletę ziemistą na tokeny, kolory organizmów zostawić.
4. `rozszerzenia.js`: osobno, bo to jeden plik z wieloma widokami; po przeróbce testy bezstratności silnika trzeba odświeżyć świadomie.
5. Po przeróbce: `styl_sprawdz.py` ma pokazywać 0 odstępstw w plikach rysunkowych.

## Do decyzji autora

- Paleta ciemnego motywu (teraz jaśniejsze odpowiedniki tokenów jasnych).
- Czy `plus`/`minus` mają być czerwony/niebieski (tak jak w większości podręczników), czy odwrotnie.
- Czy biologia zachowuje ziemisty akcent przedmiotu w tle rysunków, czy przechodzi na teal chemii.
