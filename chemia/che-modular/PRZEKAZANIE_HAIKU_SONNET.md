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
| ~~H1~~ (wykonane 2026-10-19, zgodne z CIAAW) | Masy atomowe w C1c masy: porównać listę z tablicą IUPAC (CIAAW), zdjąć oznaczenie „do weryfikacji” | `lessons-md/gotowe/C1c_masy_sklad_procentowy.md` | lista zgodna ze źródłem, wpis w `WERYFIKACJA.md`, build OK |
| ~~H2~~ (wykonane 2026-10-19; C2w poprawiono temperatury) | Weryfikacja faktów i liczb: C2m, C2w, C1c wodorki, C1c masy (każda lekcja osobno) | md w `lessons-md/gotowe/`; metoda jak w wierszach C1c w `WERYFIKACJA.md` | poprawki w md, wiersze rejestru |
| ~~H3~~ (wykonane 2026-10-19: 7 ocen w katalog_oceny.json, zamienniki z użyciem) | Siedem modeli „do sprawdzenia”: porównać z zamiennikiem, wpisać status (zastąpiony / zachować / scalić) | `engine/registry/katalog_oceny.json` (statusy „do sprawdzenia”: chem-profile10, compound-cards, diss-three-levels, ion-vs-diss, flow-naming, naming-table, molecule-cv); potem `che.py katalog` | żadnego „do sprawdzenia” w `KATALOG_WIZUALIZACJI.md` |
| H4 | Wstawić gotowe modele: `energy-profile` do C1c wodorki/typy reakcji, `acid-game` do C1c kwasy/zasady/sole, `gfx-scene-gasCollection` do N01 powietrze i gazy | wzór: sekcje `@model` + `@opis` już wstawione w C1c kwasy; najpierw obejrzeć działanie modelu | build OK, model otwiera się bez błędów (headless), `@opis` jest |
| H5 | Dług opisów: 42 stare wizualizacje bez `@opis`, po kilka na raz | `python3 narzedzia/opis_wizualizacji.py`, `narzedzia/opis_dlug.json` | dług maleje, wpisy usunięte z `opis_dlug.json` |
| H6 (UWAGA: zakres 2026/27 jest oficjalny — etap I = pkt I–V + konfiguracje, typy reakcji, wzory z wartościowości; etap II = I–VIII + wodorki, sole, jonowe, szereg aktywności, stechiometria; zob. `olimpiada/PRIORYTETY.md` §1) | Oznaczanie „poza zakresem LKO 2025/26” w pozostałych lekcjach chemii i biologii | plik zakresu LKO; wzór oznaczeń w C1c konfiguracje, C2w, B1b | oznaczenia w md, nic nie usunięte |
| H7 | Małe widoki do stylu: pliki z 1–6 odstępstwami w `STYL_RAPORT.md` (np. `n02-zobojetnianie-v01`, `n02-wzory-v01`, `n02-dysocjacja-v01`, `n01-konstruktor-v01`) | `python3 tools/styl_sprawdz.py`; mapowanie hex → `CHE.GFX.STYL` tylko dla znaczników i ramek, kolorów substancji nie ruszać | zrzut przed i po bez zmiany treści, raport pokazuje 0 dla pliku |
| H8 | Rutyna: spisy tematów i lekcji z rozmiarem KB i stanem audytów dla wszystkich przedmiotów; odświeżenie `MAPA.md`, katalogu, build wszystkich lekcji | `python3 narzedzia/spis_lekcji.py` (z katalogu głównego → `SPIS_LEKCJI.md`, `INDEKS.html` i `INDEKS.html` w chemia/, biologia/, polski/; stary `chemia/plany/narzedzia/spis_tresci.py` ma nieaktualne ścieżki `che/md`), `narzedzia/mapa.py` | spisy zgodne z plikami |

## Dla Sonneta (projektowe, refaktory, merytoryka)

| id | zadanie | wskazówki | gotowe, gdy |
|---|---|---|---|
| ~~S1~~ (wykonane) | Widok konfiguracji elektronowych Z ≤ 36 jako mały komponent: kolejność 4s przed 3d, powłoki K–N, pudełka orbitali; wstawić do C1c konfiguracje | punkt wyjścia: zakładka „Konfiguracje” w `wizualizacje_r4/Wizualizacje_do_lekcji_R4.html`; model `molecule-orbitals` jest ograniczony do wybranych atomów; Cr i Cu oraz grupy 3–12 oznaczone „poza zakresem” | widok zarejestrowany, `@model` w lekcji z `@opis`, test w headless |
| ~~S2~~ (wykonane) | Ogólny kalkulator mola: n = m/M, N = n·N_A, V = n·22,4 dm³/mol (0 °C, 1013 hPa) dla dowolnej masy molowej | prototyp: zakładka „Mol” w pliku R4; `stech-kalkulator-v01` liczy tylko z reakcji | widok w C2m, zgodny z liczbami lekcji |
| ~~S3~~ (wykonane) | Komponent genetyczny (szachownica Mendla 2×2, gamety, stosunki fenotypów) dla biologii | prototyp: zakładka „Mendel” w pliku R4; dihybryda 4×4 poza zakresem LKO; miejsce: `engine/src/gfx/biologia/` + wpis w katalogu | wstawiony do B1b z `@opis`, build bio OK |
| ~~S4~~ (wykonane) | Duże pliki do wspólnego stylu: `lekcja/rozszerzenia.js` (73 odstępstwa), `biologia/bio/szablon/bio-viz.js` (38), `acid-rain-v01`, `fiz-przewodniki-v01`, `kw-dysocjacja-v01` | `STYL_RAPORT.md`; po przeróbce świadomie odświeżyć testy bezstratności (`python3 tools/silnik.py`); zrzuty przed i po | raport pokazuje 0 odstępstw dla tych plików, wygląd bez regresji |
| ~~S5~~ (wykonane) | Wspólne rysowanie probówki: prototyp R4 ma własne szkło (`inner`, `glassBack`, `liquid`), powinno używać `naczynia/testTube` i efektów `liquid`/`meniscus` | `engine/src/gfx/chemia/naczynia/testTube.js`; `tools/efekty_do_html.py` | prototyp rysuje szkło z silnika, wygląd taki sam |
| ~~S6~~ (wykonane) | Chemia organiczna: wykorzystać 2D z ORG01 (`c2d_prosta`, `c2d_grupy`, `c2d_wzor`) i `szkielet-zygzak` w lekcjach O01–O08 | ORG01 w gałęzi `origin/claude/olimpiada-8-sprint` (commit 24c0083); komponent `engine/src/gfx/chemia/szkielet/szkielet-zygzak.js` | wzory kreskowe w lekcjach, jeden komponent zamiast kopii |
| ~~S7~~ (wykonane) | Dihybryda (9:3:3:1) jako osobna lekcja biologii, oznaczona jako poza zakresem LKO 2025/26 | sekcje „poza zakresem” w `biologia/bio/md/B1b_krzyzowki_mendel.md` | osobny md, B1b odsyła do niego |
| ~~S8~~ (wykonane) | Jeden mechanizm animacji w silniku: autostart gdy widoczne + powtarzanie dla animacji domyślnych, klik dla doświadczeń, `prefers-reduced-motion` | wzór: `runner()` w pliku R4 | wszystkie nowe modele używają jednego mechanizmu |

## Tylko użytkownik
- Konwencja zapisu konfiguracji w arkuszu olimpiady (Fe: [Ar] 4s² 3d⁶ czy 3d⁶ 4s²).
- Push na origin.
- ~~Zakres 2026/27~~ — opublikowany; pliki `olimpiada/zrodla/LKO_2026_27_*`, zmiany w `olimpiada/PRIORYTETY.md` §1.

## Stan na dziś
- Katalog: `KATALOG_WIZUALIZACJI.md` (generowany `che.py katalog`); oceny w `engine/registry/katalog_oceny.json`.
- Styl: `STYL_WIZUALIZACJI.md`, kontrola `tools/styl_sprawdz.py` → `STYL_RAPORT.md` (94 pliki, 59 zgodnych).
- Prototyp wizualizacji R4: `wizualizacje_r4/Wizualizacje_do_lekcji_R4.html` (blok efektów generowany: `tools/efekty_do_html.py`).
- Gotowe modele wstawione do 9 lekcji R4; S1–S8 wykonane (klocki: patrz `engine/src/klocki/README.md`).
- Repo scalone 2026-10-19: do gałęzi `claude/che-olimpiada-chem-1-3` scalono `claude/polski-spis`; pozostałe gałęzie mają niepowiązane historie (`unrelated histories`) — nie scalać bez decyzji użytkownika.


## Stan 2026-10-19 (klocki)
- Wykonane: S1 konfiguracje (`konfiguracje`), kalkulator mola (`kalkulator-mola`), S2 trójkąt przeliczeń w C2m, S6 wzory 2D w C1c, `probowki-wybor` (X04, J03, C1c, C4), opcja `kat` w `probowki-odczyn`.
- Zostaje: S3/S7 Mendel, S4 migracja stylu dużych plików, S5 wspólna probówka z `naczynia/testTube`, S8 jeden mechanizm animacji.
- Wykonane też: `krzyzowka-mendla` (S3; dihybryda 4×4 w opcji `krzyzowki`), `karta-bhp` (w C4). Zostaje: wstawienie Mendla do lekcji biologii (L017 i dihybryda) — builder bio (`biologia/bio/narzedzia/md2html_bio.py`) nie obsługuje jeszcze `@klocek`, trzeba przenieść wsparcie z `tools/md2html.py` (klocek_line, klocki_js, klocki_css), S5, S8, S4.
- Biologia: `md2html_bio.py` obsługuje już `@klocek` (importuje `klocek_line`, `klocki_css`, `klocki_js` z `chemia/che-modular/tools/md2html.py`; manifest `lekcje[kod]`). Mendel wstawiony do B1b (§6 jedna cecha, §7 dihybryda). Do zrobienia: L017 (`biologia/md/`) nie ma builda w `bio/md/`; po przeniesieniu dodać klocek i wpis `L017` do manifestu.
- Dodane 2026-10-19 (po kolei): `sklad-procentowy` (C1c masy), `bilans-rownania` (C3), `nadmiar-substratu` (R07), `krzywe-rozpuszczalnosci` w R03, ogrzewanie hydratu w C2w. F04/F05 mają już modele silnika (periodic-54, f05-izotopy). Zostaje S5, S8, S4.
- S5 wykonane: `engine/src/klocki/naczynia.js` (wspólna probówka); `probowki` i `probowki-odczyn` używają `KLOCKI.naczynia`. Zostaje S8, S4.
- S8 wykonane: jeden zegar `KLOCKI.zegar` w `klocki.js` (jedna pętla rAF dla wszystkich klocków, stoi gdy nic nie jest widoczne); `montuj` i `podepnij` z `pomocnicze.js` używają go; `prefers-reduced-motion` = bez autostartu (klik uruchamia). Zostaje S4.
- S4 częściowo: `tools/styl_zblizone.py` zamienia kolory #hex bliskie palecie tokenów (odległość RGB ≤ 16) na dokładny token; użyte dla `lekcja/rozszerzenia.js` (62 zamiany) i `bio-viz.js` (22). Pozostałe odstępstwa to kolory substancji/wykresów (decyzja: zostają) oraz pliki `acid-rain-v01`, `fiz-przewodniki-v01`, `kw-dysocjacja-v01` (do osobnej decyzji; wymagają odświeżenia testów bezstratności `tools/silnik.py` po zmianie).
- Decyzja użytkownika 2026-10-19: rzeczywiste kolory substancji/reakcji zostają i są podstawą. `styl_zblizone.py` chroni linie z kolorami substancji i pierwiastków (COL/ECOL/CPK, symbole jako klucze, słowa proton/neutron/elektron/osad/roztwór/płomień) oraz linie z komentarzem `styl:zostaw` (kolor celowy, np. do pokazania czegoś). Pliki rozszerzenia.js i bio-viz.js przeliczone od nowa z ochroną (44 + 15 zamian).
- S4 zakończone 2026-10-19: `kw-dysocjacja-v01` (ładunki: plus czerwony, minus niebieski wg STYL; H⁺ czerwony; tła/linie do tokenów), `acid-rain-v01` (kolory tekstu do tokenów, linie), `fiz-przewodniki-v01`. Realne barwy (scena kwaśnego deszczu, materiały przewodników, serie kwasów) zostają i są oznaczone `/*styl:zostaw*/`; `styl_sprawdz.py` pomija oznaczone linie. Test bezstratności `gfx_join` odświeżony świadomie (catalog.json: che-visual-library-v001 sha1/bytes), `che.py test --szybki` i `test_lekcje.cjs` (26 lekcji) OK.
- 2026-10-19: lekcje LKO_ORG01–08 (md ze zgodnymi treściami 30–44 KB) skopiowane z gałęzi `olimpiada-8-sprint` do `lessons-md/gotowe/` (bez scalania gałęzi) i wzbogacone o klocki: wzor-2d (ORG01–07), bilans-spalania i palnik-gazowy (ORG01), probowki-odczyn (ORG02 woda bromowa, ORG03 etanol+Na, ORG04 Cu(OH)₂, ORG05 kwas octowy), kalkulator-mola i trojkat-przeliczen (ORG08). L017 (biologia) niepotrzebna: temat pokrywa B1b z klockami Mendla.
- Wykonane 2026-10-19: klocek `haworth` (α/β-D-glukopiranoza, β-D-fruktofuranoza) w ORG07; ORG06 rozbudowane o `bilans-rownania` (estryfikacja) i `wzor-2d` izomeru estru. Animacja estryfikacji (`estryfikacja`) też gotowa.

## Nowe zadania (2026-10-19)

### Haiku — H9: przegląd lekcja po lekcji (wizualizacje)
Dla KAŻDEJ lekcji z tabeli niżej (jedna lekcja = jedna tura; commit lokalny po każdej) sprawdź w md, czy grafika wnosi coś do zrozumienia (zasady: pamięć/CLAUDE.md — grafiki tylko gdy potrzebne, `@opis` obowiązkowy, jak od jednego autora, rzeczywiste kolory substancji zostają):
1. Zastąp słabszą wizualizację lepszą z `engine/src/klocki/README.md` / `KATALOG_WIZUALIZACJI.md` (np. `wzor-2d` zamiast wzoru wpisanego tekstem, `bilans-rownania` przy każdym równaniu do bilansowania, `probowki-odczyn`/`probowki-wybor` przy doświadczeniach z probówką, `karta-bhp` zamiast własnych list BHP).
2. Dodaj tylko tam, gdzie proces/zależność/ćwiczenie tego wymaga; nie jako ozdobę.
3. Ujednolić karty BHP: każda lekcja z doświadczeniem ma `karta-bhp` (jeden wygląd) zamiast opisów w tekście; treści nie usuwać — zostawić zdanie, dodać klocek.
4. Jeśli potrzebny jest NOWY komponent — nie buduj; dopisz wiersz do sekcji „Plan komponentów” niżej (nazwa, lekcja, po co).
5. Po zmianie: `python3 tools/che.py lekcje <plik>`, otwarcie bez błędów konsoli, wpis w `PROGRESS.md`.
Lekcje (klocki / modele `@model` / `@zlewka` dziś): C1c konfiguracje 1/0/0; C1c kwasy 3/3/0; C1c masy 1/1/0; C1c wodorki 3/2/0; C2m 3/1/0; C2w 1/0/1; C3 1/1/0; C4 6/0/0; F01 0/4/6; F02 0/1/3; F03 0/2/2; F04 0/1/0; F05 0/1/0; F06 0/1/5; FIZ01 0/15/0; J03 1/2/0; ORG01–08 (4,3,2,3,2,3,2,3 klocków); N01 powietrze 0/3/1; N01 tlenki 0/11/4; N02 0/12/8; N03 0/17/10; N04 0/9/13; N05 0/4/10; R03 1/0/2; R07 1/1/0; REV01 kl.7 0/6/0; X04 1/1/0. Biologia (`biologia/bio/md`, builder `md2html_bio.py`): wszystkie poza B1b mają 0 wizualizacji — dla każdej ocenić, czy proces (np. oddychanie, hormony, odruch, trawienie) wymaga schematu; jeśli tak, wpisać do planu komponentów (biologia nie ma jeszcze własnych klocków poza `krzyzowka-mendla`).

### Sonnet — S9–S12
| id | zadanie | gotowe, gdy |
|---|---|---|
| S9 (częściowo: `petla-regulacji` — 3 lekcje bio, `estryfikacja`, `haworth`) | Plan komponentów: zebrać wiersze od Haiku (H9), pogrupować, zbudować te, które wracają w ≥ 2 lekcjach (kandydaci: animacja estryfikacji ORG06, schemat procesu biologicznego „strzałki i etapy”, układ narządów z podświetlaniem, wykres z suwakiem) | klocki w `engine/src/klocki/`, wpis w manifest i README |
| ~~S10~~ (wykonane 2026-10-19: `doswiadczenie` w C4 ×2, X04, C1c kwasy; N01–N05 to lekcje bez `@klocek` — Haiku w H9 może je podpiąć tam, gdzie jest doświadczenie) | Wspólny klocek „doświadczenie”: probówka/zlewka + palnik + karta BHP + równanie w jednym układzie (zamiast składania ręcznego w md) | użyty w C4 i ≥ 2 lekcjach N |
| ~~S11~~ (wykonane 2026-10-19: `petla-regulacji` w B2c, B2e, B2g) | Biologia: przenieść wzorzec klocków do kilku lekcji (B2c oddychanie, B2e hormony, B2g homeostaza) po ocenie Haiku | min. 3 lekcje z `@klocek` + `@opis` |
| S12 | Przegląd wyników H9 (losowo 30%): czy zmiany wnoszą coś do lekcji, spójność stylu (`styl_sprawdz.py`) | raport w `PROGRESS.md` |

### Plan komponentów (uzupełnia Haiku)
| nazwa | lekcja | po co |
|---|---|---|
| animacja-estryfikacji | ORG06 | cząsteczki kwasu i alkoholu łączą się w ester + H₂O (opcjonalnie) |
