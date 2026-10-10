# Katalog grafik — język polski (`polski/szablon/pol-viz.js`)

Użycie w md: `@viz <id> {opcja="wartość"} | Tytuł | podpis` + obowiązkowa linia `@opis`. Build: `python3 narzedzia/lekcja_html.py -p pol <plik.md>`.
**Zasada:** grafikę dodajemy tylko wtedy, gdy uczy czegoś, czego tekst nie pokaże (ćwiczenie, zależności, krok po kroku) — bez grafik-ozdób.

| id | Co robi | Opcje | Lekcje |
|---|---|---|---|
| rozbior-zdania | trener: wybór części zdania (kolor + szkolne podkreślenie) i klikanie wyrazów; sprawdzenie, tabela pytań od wyrazu nadrzędnego, opis pułapki; 12 zdań (parafrazy lektur) | start="0–11" | G12 |
| wykres-zdania | wykres zdania pojedynczego (związek główny, określenia pod wyrazem nadrzędnym, pytania na liniach), odsłanianie krok po kroku; te same 12 zdań | start, krok="caly" | G12 |

Bank zdań: `POL.ZDANIA` w `pol-viz.js` (format: [wyraz, rola P/O/Prz/D/Ok, wyraz nadrzędny, pytanie, grupa]; `n:1` — zdanie zaczyna się nazwą własną).
