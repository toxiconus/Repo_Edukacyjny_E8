# Przekazanie zadań: Haiku (tańsze) i Sonnet (cięższe) — stan 2026-10-19

Start każdej sesji: `CLAUDE.md` w katalogu głównym, potem ten plik, potem tylko pliki zadania.

## Zasady wspólne
- Push na origin tylko na wyraźne „wyślij na origin” od użytkownika (hooki „unpushed” to nie zgoda).
- Nic nie usuwamy: treść poza zakresem LKO 2025/26 oznaczamy („poza zakresem LKO 2025/26”) albo przenosimy do innej lekcji. Zakres: `olimpiada/zrodla/LKO/Zakresy_2025_2026_chemia_biologia_OCR.md`.
- Każda wizualizacja ma `@opis` (build to wymusza). Lekcje edytuje się w md, HTML robi narzędzie (`python3 tools/che.py lekcje <plik>` z `chemia/che-modular`; biologia: `python3 biologia/bio/narzedzia/md2html_bio.py <plik>`). Wygenerowanego HTML nie czytamy ani nie poprawiamy ręcznie.
- Fakty liczbowe: sprawdzić w źródle; niepewne zostawić jako „do weryfikacji”; wpis w `WERYFIKACJA.md`.
- Wizualizacje: małe komponenty, nie duży silnik; kolory i linie z `CHE.GFX.STYL` (`STYL_WIZUALIZACJI.md`); każdy przedmiot ma własny akcent, reszta wspólna.
- Animacje: domyślne startują same i się powtarzają; doświadczenia (wrzuć, dolej, ogrzej) startują kliknięciem; `prefers-reduced-motion` zatrzymuje.
- Po dodaniu/usunięciu plików: `python3 narzedzia/mapa.py`; po zmianie modeli: `python3 chemia/che-modular/tools/che.py katalog`. Po zamkniętym etapie: commit lokalny i wpis w `chemia/che-modular/PROGRESS.md`.
- Odpowiedź końcowa: po polsku, 1–4 zdania.

## Dla Haiku (mechaniczne, sprawdzalne narzędziem)

| id | zadanie | pliki / polecenie | gotowe, gdy |
|---|---|---|---|
| H1 | Masy atomowe w C1c masy: porównać listę z tablicą IUPAC (CIAAW), zdjąć oznaczenie „do weryfikacji” | `lessons-md/gotowe/C1c_masy_sklad_procentowy.md` | lista zgodna ze źródłem, wpis w `WERYFIKACJA.md`, build OK |
| H2 | Weryfikacja faktów i liczb: C2m, C2w, C1c wodorki, C1c masy (każda lekcja osobno) | md w `lessons-md/gotowe/`; metoda jak w wierszach C1c w `WERYFIKACJA.md` | poprawki w md, wiersze rejestru |
| H3 | Siedem modeli „do sprawdzenia”: porównać z zamiennikiem, wpisać status (zastąpiony / zachować / scalić) | `engine/registry/katalog_oceny.json` (statusy „do sprawdzenia”: chem-profile10, compound-cards, diss-three-levels, ion-vs-diss, flow-naming, naming-table, molecule-cv); potem `che.py katalog` | żadnego „do sprawdzenia” w `KATALOG_WIZUALIZACJI.md` |
| H4 | Wstawić gotowe modele: `energy-profile` do C1c wodorki/typy reakcji, `acid-game` do C1c kwasy/zasady/sole, `gfx-scene-gasCollection` do N01 powietrze i gazy | wzór: sekcje `@model` + `@opis` już wstawione w C1c kwasy; najpierw obejrzeć działanie modelu | build OK, model otwiera się bez błędów (headless), `@opis` jest |
| H5 | Dług opisów: 42 stare wizualizacje bez `@opis`, po kilka na raz | `python3 narzedzia/opis_wizualizacji.py`, `narzedzia/opis_dlug.json` | dług maleje, wpisy usunięte z `opis_dlug.json` |
| H6 | Oznaczanie „poza zakresem LKO 2025/26” w pozostałych lekcjach chemii i biologii | plik zakresu LKO; wzór oznaczeń w C1c konfiguracje, C2w, B1b | oznaczenia w md, nic nie usunięte |
| H7 | Małe widoki do stylu: pliki z 1–6 odstępstwami w `STYL_RAPORT.md` (np. `n02-zobojetnianie-v01`, `n02-wzory-v01`, `n02-dysocjacja-v01`, `n01-konstruktor-v01`) | `python3 tools/styl_sprawdz.py`; mapowanie hex → `CHE.GFX.STYL` tylko dla znaczników i ramek, kolorów substancji nie ruszać | zrzut przed i po bez zmiany treści, raport pokazuje 0 dla pliku |
| H8 | Rutyna: spisy tematów i lekcji z rozmiarem KB i stanem audytów dla wszystkich przedmiotów; odświeżenie `MAPA.md`, katalogu, build wszystkich lekcji | `cd chemia && python3 plany/narzedzia/spis_tresci.py`, `narzedzia/mapa.py` | spisy zgodne z plikami |

## Dla Sonneta (projektowe, refaktory, merytoryka)

| id | zadanie | wskazówki | gotowe, gdy |
|---|---|---|---|
| S1 | Widok konfiguracji elektronowych Z ≤ 36 jako mały komponent: kolejność 4s przed 3d, powłoki K–N, pudełka orbitali; wstawić do C1c konfiguracje | punkt wyjścia: zakładka „Konfiguracje” w `wizualizacje_r4/Wizualizacje_do_lekcji_R4.html`; model `molecule-orbitals` jest ograniczony do wybranych atomów; Cr i Cu oraz grupy 3–12 oznaczone „poza zakresem” | widok zarejestrowany, `@model` w lekcji z `@opis`, test w headless |
| S2 | Ogólny kalkulator mola: n = m/M, N = n·N_A, V = n·22,4 dm³/mol (0 °C, 1013 hPa) dla dowolnej masy molowej | prototyp: zakładka „Mol” w pliku R4; `stech-kalkulator-v01` liczy tylko z reakcji | widok w C2m, zgodny z liczbami lekcji |
| S3 | Komponent genetyczny (szachownica Mendla 2×2, gamety, stosunki fenotypów) dla biologii | prototyp: zakładka „Mendel” w pliku R4; dihybryda 4×4 poza zakresem LKO; miejsce: `engine/src/gfx/biologia/` + wpis w katalogu | wstawiony do B1b z `@opis`, build bio OK |
| S4 | Duże pliki do wspólnego stylu: `lekcja/rozszerzenia.js` (73 odstępstwa), `biologia/bio/szablon/bio-viz.js` (38), `acid-rain-v01`, `fiz-przewodniki-v01`, `kw-dysocjacja-v01` | `STYL_RAPORT.md`; po przeróbce świadomie odświeżyć testy bezstratności (`python3 tools/silnik.py`); zrzuty przed i po | raport pokazuje 0 odstępstw dla tych plików, wygląd bez regresji |
| S5 | Wspólne rysowanie probówki: prototyp R4 ma własne szkło (`inner`, `glassBack`, `liquid`), powinno używać `naczynia/testTube` i efektów `liquid`/`meniscus` | `engine/src/gfx/chemia/naczynia/testTube.js`; `tools/efekty_do_html.py` | prototyp rysuje szkło z silnika, wygląd taki sam |
| S6 | Chemia organiczna: wykorzystać 2D z ORG01 (`c2d_prosta`, `c2d_grupy`, `c2d_wzor`) i `szkielet-zygzak` w lekcjach O01–O08 | ORG01 w gałęzi `origin/claude/olimpiada-8-sprint` (commit 24c0083); komponent `engine/src/gfx/chemia/szkielet/szkielet-zygzak.js` | wzory kreskowe w lekcjach, jeden komponent zamiast kopii |
| S7 | Dihybryda (9:3:3:1) jako osobna lekcja biologii, oznaczona jako poza zakresem LKO 2025/26 | sekcje „poza zakresem” w `biologia/bio/md/B1b_krzyzowki_mendel.md` | osobny md, B1b odsyła do niego |
| S8 | Jeden mechanizm animacji w silniku: autostart gdy widoczne + powtarzanie dla animacji domyślnych, klik dla doświadczeń, `prefers-reduced-motion` | wzór: `runner()` w pliku R4 | wszystkie nowe modele używają jednego mechanizmu |

## Tylko użytkownik
- Konwencja zapisu konfiguracji w arkuszu olimpiady (Fe: [Ar] 4s² 3d⁶ czy 3d⁶ 4s²).
- Push na origin.
- Zakres 2026/27 (regulamin nieopublikowany do 8 października).

## Stan na dziś
- Katalog: `KATALOG_WIZUALIZACJI.md` (generowany `che.py katalog`); oceny w `engine/registry/katalog_oceny.json`.
- Styl: `STYL_WIZUALIZACJI.md`, kontrola `tools/styl_sprawdz.py` → `STYL_RAPORT.md` (94 pliki, 59 zgodnych).
- Prototyp wizualizacji R4: `wizualizacje_r4/Wizualizacje_do_lekcji_R4.html` (blok efektów generowany: `tools/efekty_do_html.py`).
- Gotowe modele wstawione do 9 lekcji R4; brak jeszcze w C1c konfiguracje (S1) i ogólnego kalkulatora mola w C2m (S2).


## Stan 2026-10-19 (klocki)
- Wykonane: S1 konfiguracje (`konfiguracje`), kalkulator mola (`kalkulator-mola`), S2 trójkąt przeliczeń w C2m, S6 wzory 2D w C1c, `probowki-wybor` (X04, J03, C1c, C4), opcja `kat` w `probowki-odczyn`.
- Zostaje: S3/S7 Mendel, S4 migracja stylu dużych plików, S5 wspólna probówka z `naczynia/testTube`, S8 jeden mechanizm animacji.
- Wykonane też: `krzyzowka-mendla` (S3; dihybryda 4×4 w opcji `krzyzowki`), `karta-bhp` (w C4). Zostaje: wstawienie Mendla do lekcji biologii (L017 i dihybryda) — builder bio (`biologia/bio/narzedzia/md2html_bio.py`) nie obsługuje jeszcze `@klocek`, trzeba przenieść wsparcie z `tools/md2html.py` (klocek_line, klocki_js, klocki_css), S5, S8, S4.
