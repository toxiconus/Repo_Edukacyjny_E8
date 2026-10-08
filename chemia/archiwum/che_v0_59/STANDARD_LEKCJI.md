# Standard lekcji CHE (wspólny wygląd i układ treści) — v1, 2026-10-07

Obowiązuje lekcje chemii N01–N04 i kolejne. Lekcja to jeden plik `lesson/<x>_new.html` (edycja ręczna od v0_54), wczytywany do aplikacji jako JSON.

## Kolejność części (numeracja sekcji ciągła 1..n, dodatki literami A, B, …)
1. **Start:** Minimum E8 (karta `#minimum`), spis treści (`details.toc-item` — linki do wszystkich sekcji), cele (E8), kompas (co trzeba umieć wcześniej, z odnośnikami do F00–F09 / poprzednich lekcji), pytanie przewodnie lub problem startowy.
2. **Rdzeń (E8):** definicja i nazewnictwo → budowa i wzory → właściwości i podział → otrzymywanie → reakcje → zastosowania, środowisko, BHP.
3. **Rozumienie / ambitne:** modele i wyjaśnienia „dlaczego”, wyjątki, trendy — oznaczone plakietką AMBITNE albo ROZUMIENIE; treść ponad poziom LO w `<details class="adv">`.
4. **Praktyka:** doświadczenia (format egzaminacyjny: problem → hipoteza → sprzęt → przebieg → obserwacje → wniosek → równanie → BHP; przycisk „Zobacz w zlewce” `.che-prac-go`) → klinika błędów → ćwiczenia (poziomy A podstawa, B trening/egzamin, C ambitny, D zaawansowany) → typologia zadań E8 → test (z odpowiedziami w `details.answer`).
5. **Powtórka:** karta szybkiego powtórzenia (do druku), fiszki, mapa myśli, słownik, checklista.
6. **Dodatki** (A, B, …): treści poszerzające, każda z plakietką poziomu.
7. **Koniec:** „Modele silnika w tej lekcji” (tabela), audyt jakości.

## Zasady treści
- Jeden temat = jedno pełne wyjaśnienie w najlepszym miejscu. W innych miejscach najwyżej jedno zdanie przypomnienia + odnośnik (`<a href="#id">§n</a>`). Powtórzenie to także ten sam sens innymi słowami.
- Wiedzy nie ubywa: przy scalaniu przenosimy każdy unikalny szczegół (liczby, wyjątki, przykłady, uwagi BHP) do miejsca docelowego. Można przeredagować na logiczniejsze lub pełniejsze; poprawiamy błędy merytoryczne.
- Poziomy: plakietki `level-basic` (E8), `level-understand` (ROZUMIENIE), `level-extra` (AMBITNE), `level-new` tylko dla nowości z bieżącej wersji (nie jako stała ozdoba). Każda sekcja ponad E8 ma plakietkę.
- Jeden model silnika = jedno miejsce w lekcji (przycisk `.che-lesson-viz-ref`); nie usuwamy przycisków modeli, można je przenieść do lepszego miejsca.
- Równania zostają oznaczone (`data-rx`), barwy/tabele (`data-ox`, `data-hy*`) — audyty LES-* porównują je z silnikiem.
- Bez emoji. Język polski, styl podręcznikowy, krótkie akapity, wzory z indeksami Unicode (H₂O, Ca²⁺).
- Kody lekcji: F00–F09 fundamenty, N01 Tlenki, N02 Wodorotlenki, N03 Kwasy, N04 Sole, R…, X…; pełny uid np. CHE.02.N01.tlenki.

## Kontrola
`python3 tools/lesson_check.py lesson/_snap/<migawka>.html lesson/<x>_new.html lesson/edits_<KOD>.md` — każde zdanie migawki musi istnieć w nowej wersji albo być wpisane w pliku edycji:
```
- OLD: <dokładne stare zdanie>
  NEW: <gdzie i jak jest teraz (sekcja, nowe brzmienie)>
```
