# PRZEKAZANIE — CHE modular · 2026-10-08 (koniec sesji)

Czytaj po `CLAUDE.md`. Szczegóły: `PLAN_PRACY.md` (cele, decyzje, kroki K0–K8, §6 kurs i blok F), `SYSTEM.md` (polecenia, dialekt MD, mapa plików), dziennik: `PROGRESS.md`.

## 1. Stan w skrócie

- **Jedna gałąź pracy:** `claude/che-lekcje` (= `claude/chemia-podzial`, oba wskaźniki na tym samym commicie). Folder: `chemia/che-modular/`. Stary system v0_59 i pliki 2025 → `chemia/archiwum/` (tylko do odczytu), `chemia/che/README.md` kieruje tutaj.
- **Silnik jako źródła w gicie, bez strat:** złożenie wszystkich części = monolit v0_57 bajt w bajt, a pakiet dla lekcji = zamrożony `che-viz.js` v0_59 (test sha1: `python3 tools/silnik.py`).
  - moduły: `engine/src/moduly/` (duże pocięte na części ≤ ~30 KB, `_kolejnosc.txt`),
  - rdzeń danych `_anon_001`: `sections/anon001/<podmoduł>/sNNN.js` — 280 sekcji w 13 podmodułach (pomiar w przeglądarce, `engine/registry/mapa_sekcji.json`),
  - GFX per przedmiot i element: `engine/src/gfx/{chemia,fizyka,wspolne}/{naczynia,efekty,sceny,reakcje,widoki}/<id>.js` + szkielety, katalog `engine/src/gfx/KATALOG.md`,
  - HTML/CSS labu: `engine/src/lab/szkielet.html`, `engine/src/style/*.css`,
  - wygląd lekcji i rozszerzenia (nowe modele, pracownie): `engine/src/lekcja/` (`rozszerzenia.js` §1–8).
- **Lekcje gotowe (12, test 12/12 OK):** F01–F06, N01–N05, FIZ01 w `lessons-md/gotowe/` (kanoniczny dialekt MD — `SYSTEM.md` §3).
- **Odchudzanie (K3) zakończone:** profil `engine/registry/profile/wspolny.json` → silnik lekcyjny **1,55 MB** (było 2,86); pliki `dist/jeden_plik/` ~1,6–1,7 MB (było ~3 MB). CSS labu nieodchudzany (test nie widzi wyglądu).

## 2. Jak pracować

```
cd chemia/che-modular
python3 tools/che.py init        # raz na sesję: acorn + monolit do testu + testy bezstratności
python3 tools/che.py lekcje      # silnik + wszystkie lekcje → dist/, dist/jeden_plik/
python3 tools/che.py silnik      # odchudzony silnik z profilu → dist/viz/wspolny.js (potem znowu `lekcje`)
python3 tools/che.py test        # bezstratność + render lekcji w Chromium (tylko błędy)
node tools/test_lekcje.cjs --wzorzec=dist/_wz/wzorzec.json   # z porównaniem treści modeli (wzorzec: python3 tools/wzorzec.py 6)
```
- Nowa lekcja: `python3 tools/che.py nowa KOD nazwa` albo plik w `lessons-md/gotowe/`. Dostaje **pełny** silnik, dopóki nie zostanie dopisana do `lekcje` w profilu i przetestowana (`python3 tools/odchudz.py --profil wspolny --etap widoki` sprawdzi profil na wszystkich lekcjach z `dist/`).
- **Nie uruchamiać ponownie** `anon_split.mjs`, `gfx_split.mjs`, `zrodla_silnika.py`, `dziedziny.py --przenies` — to jednorazowe ekstrakcje, nadpisałyby edytowane źródła.
- Zabijanie procesu w tle: nie `pkill -f <nazwa>` w tym samym poleceniu, które zawiera tę nazwę (zabija własną powłokę) — najpierw `pgrep`, potem `kill PID` osobno. Proces w tle działa tylko w czasie aktywnej tury.

## 3. Decyzje i uwagi użytkownika (obowiązują)

1. **Zero utraty danych starego silnika** — dzielić, porządkować, ulepszać; nie wyrzucać ze źródeł (odchudzanie dotyczy tylko pakietu lekcji).
2. **Grafiki z atlasu, nie własne:** przed każdym nowym modelem sprawdzić atlas (`engine/src/moduly/_anon_004/`: `bohr`, `cloud`, `isoBar`, karty pierwiastków) i widoki silnika (`KATALOG.md`, `KATALOG_MODELI.md`). Brakujący element = komponent wielokrotnego użytku + wpis w katalogu.
3. **Blok F:** 21 lekcji F01–F21; nie pisać od zera — ulepszać materiał użytkownika z `chemia/lekcje_md/F/` (kanon v17). Kolejne lekcje tylko na polecenie (2026-10-08 17:36 użytkownik zlecił jedną — zrobiona F06; po etapie stop).
4. Dane liczbowe niepewne — oznaczać „do weryfikacji”. Dane bierzemy z `CHE.DATA`, nie z lokalnych kopii w widokach.
5. Silnika nie piszemy od nowa — stopniowa podmiana (czyste dane w dziedzinach, nowa mała warstwa obok starej).

## 4. Otwarte / znane problemy

- **F06 (2026-10-08):** `lessons-md/gotowe/F06_uklad_okresowy.md` z materiału v17 (+ archiwum, poprawki merytoryczne: wartościowość Cl I/III/V/VII, etymologia „halogeny”, metale ziem alkalicznych, zad. D19–D20, doświadczenie z fluorowcami jako wypieranie). Model: istniejący `periodic-54` rozbudowany w rozszerzenia.js §9 (bez nowej tablicy; działa też w N01). Do weryfikacji: `COVALENT_RADIUS_EXT` (34 promienie Cordero 2008), wartości H 37 / He 32 w `ATOMIC_PROPS` różnią się od Cordero (31/28). F06 ma pełny silnik — profil odchudzony do zrobienia jak dla F04.

- `f05-izotopy-v01` rysuje atom przez nowy komponent **`atomSVG`** (rozszerzenia.js przed §8, też `CHE.LAB.atomSVG`): kolory jak w atlasie, `powloki:true` = powłoki K/L/M/N 2,8,8 (gotowe dla F07; sprawdzone Na = 2,8,1). Atlasowy `bohr` (`_anon_004`) to cała strona związana z DOM i stanem atlasu — nie da się go wywołać jako komponentu; wyciągnięty do komponentu canvas **`atomBohr`** (`CHE.LAB.atomBohr(canvas,{p,n,e,n0,cfg,t})`, `.anim`) — wygląd atlasu sprawdzony zrzutem (Na 2,8,1; Cl⁻ 2,8,8 z podpowłokami). **Nowa warstwa `engine/src/dodatki/`** (`atlas-gfx.js`: `CHE.LAB.atomBohr`, `CHE.LAB.orbitalCloud`): lab dostaje ją przez `python3 tools/che.py lab` → `dist/lab.html`, lekcje przez md2html; test bajt w bajt liczy lab bez dodatków (stary silnik nietknięty). **Atlas rysuje chmurę orbitalną komponentem** (podmiana globalnej `cloud`) — piksele identyczne ze starym (hash canvasu przed/po kliknięciu orbitalu). `bohr` w atlasie jeszcze własny (zoom, lupa jądra, podświetlenia → najpierw do `atomBohr`). Dalej: (a) F05/F07 na `atomBohr`, (b) to samo dla `cloud` i `isoBar`, (c) atlas wywołuje komponenty (zmiana źródła `_anon_004` → aktualizacja wzorca sha w `silnik.py`, ocena wizualna), bez lupy/zoomu na razie.
- Odchudzanie CSS labu (~170 KB) i DOM labu (~70 KB, m.in. bank widżetów 46 KB) wymaga oceny wizualnej (zrzuty) — flaga `--css-tak` w `odchudz.py`, domyślnie wyłączona.
- Z v0_59: tryb Noc (podwójne odwrócenie kolorów), stare `::: skrypt` w N01–N03 → `::: test`.
- Po zatwierdzeniu kanonu v0.3: przemianować N01…N05 → N02…N06 (pliki, `kod`, `uid`, rejestr, profil `lekcje`).
- Mapowanie L006–L013 → kody (O, R, X, LAB, REV) do potwierdzenia przez użytkownika.
- `main` niezmieniony — PR `claude/che-lekcje` → `main` robi użytkownik na github.com (push na `main` = 403).

## 5. Następne kroki (propozycja, kolejność do potwierdzenia)

1. **Dane według dziedzin jako czyste pliki** (w toku):
   - 1a ✅ eksport: `python3 tools/che.py dane` → `engine/src/dane/<podmoduł>.json` + `_indeks.json` (121 kluczy CHE.DATA, 116 czystych JSON; 5 z funkcjami: `SCIENCE_CORE_V288`, `*_V387/V406/V407`, `CIAAW_ATOMIC_WEIGHTS_AUDIT`; współdzielone obiekty w 4 kluczach; znaczniki czasu → `$czas`). `--sprawdz` = sha1 każdego klucza vs silnik (deterministyczne). Silnik bez zmian.
   - 1a: dziedziny wg znaczenia nazwy klucza (`REGULY` w `dane_eksport.py`): pierwiastki 481 KB, substancje 131, reakcje 94, weryfikacja 835 (audyty, rejestry, kontrakty — lekcje ich nie czytają), reszta drobna; sekcja-twórca → `zrodlo` w `_indeks.json`.
   - 1b ✅ `python3 tools/che.py dane --lekcje` → `engine/registry/dane_lekcji.json` (sonda Proxy w `test_lekcje.cjs --klucze=`). **Wynik:** odchudzony silnik ma 41 kluczy (~300 KB danych z 1,55 MB); wszystkie 11 lekcji czyta te same 36 kluczy, różnice tylko `CHAR_COLORS`, `MOL3D_SETS`. Dane per lekcja prawie nic nie dadzą na rozmiarze — reszta (~1,25 MB) to kod, GFX i CSS.
   - 1c (do decyzji): ładowanie danych z JSON zamiast sekcji — zysk porządkowy (dane oddzielone od kodu, edycja w jednym miejscu), nie rozmiarowy. Większy zysk rozmiaru: krok 2 (profil per lekcja dla kodu/GFX) i 4 (CSS/DOM).
2. Profil per lekcja (w toku): `python3 tools/odchudz.py --profil <LEKCJA> --lekcje <LEKCJA> --start wspolny --etap mod,pod,anon,widoki` (~5 min/lekcję, mało tokenów — tylko czekanie). Gotowe: **F04_atom 1,55 → 1,13 MB** (`engine/registry/profile/F04_atom.json`; md2html sam bierze `dist/viz/<lekcja>.js` po `che.py silnik`). **✅ 2026-10-09 16:35 — wszystkie 15 lekcji mają profil** (`engine/registry/profile/<LEKCJA>.json`): silniki `dist/viz/<lekcja>.js` 1,04–1,18 MB (wspólny 1,49 MB), pliki `dist/jeden_plik/` 1,19–1,45 MB, razem 19,4 MB (F01 domknięty 16:55: silnik 1,38 → 1,10 MB) (było ~45 MB, po ~3 MB na lekcję); test 15/15. Po zmianie silnika/rozszerzeń: `python3 tools/che.py silnik` → `lekcje` → `test`. Nowa lekcja dostaje pełny silnik, dopóki nie zrobi się jej profilu (to samo polecenie co niżej). Historia: **2026-10-09 (wstrzymane 14:19 na polecenie):** gotowe F01, F02 1,11, F03 1,09, F04 1,13, F05 1,09, N02 1,21, N03 1,20, N04 1,20 MB. N05 przerwany w trakcie (profil wznawialny — ten sam rozkaz go dokończy). Zostały: N05, R03, REV01, N01_powietrze_i_gazy, FIZ01, F06, N01_tlenki. `wspolny.json`: przywrócona sekcja `dane-pierwiastki/s086.js` (CHE.DATA.FIRST_IONIZATION_ENERGY) — bez niej periodic-54 (rozszerzenie F06) różnił się od pełnego silnika i F06/N01_tlenki nie startowały. Pętla po kolei, ~10–22 min/lekcję; najpierw `python3 tools/wzorzec.py 6`. Dawniej: zostało 10 lekcji — pętla po kolei (wspólny katalog `dist/_kand`, nie równolegle). Wymaga `python3 tools/wzorzec.py 6` raz na sesję (~5 min).
3. Przerobić `f05-izotopy-v01` na komponenty atlasu.
4. **Atlas poza silnikiem (2026-10-08):** `python3 tools/che.py atlas --sprawdz` → `dist/atlas.html` (2,08 MB; moduły w `engine/src/atlas/moduly.txt`, start bez ekranu powitalnego `engine/src/atlas/start.js`). Test `tools/atlas_sprawdz.cjs`: 65/65 zakładek + rysunki canvas = pełny lab. `_anon_004` pocięty według ról na 19 części (bajt w bajt), mapa zależności `engine/src/moduly/_anon_004/OPIS.md` (`node tools/opis_modulu.cjs <katalog>`). Komponenty wspólne atlasu i lekcji: `engine/src/komponenty/atlas-gfx.js` (`CHE_GFX` + lustro w `CHE.LAB`): `atomBohr` (pełny: zoom, lupa, podświetlenia), `orbitalCloud`, `isotopeBar`, `orbitalDiagram`. Plik jest pierwszą częścią `_anon_004` (`_kolejnosc.txt`), lekcje dostają go z md2html. Stary kod rysunków usunięty z `_anon_004` (zgoda użytkownika 2026-10-08 19:42) — dlatego test bajtowy lab/che-viz vs monolit pokazuje „ZMIENIONY (zamierzone)”, a równoważność sprawdza `che.py test`: monolit v0_57 ↔ nowy lab i atlas (89 zakładek + 18 obrazów canvas). Dalej: karta danych (mocno łatana przez inne moduły), odchudzenie rdzenia (`tools/atlas_odchudz.py` w tle, potem kontrola `ATLAS_PELNY=1`; przerwane 19:36).
4. Odchudzanie CSS/DOM z porównaniem zrzutów.
5. Potem — na polecenie użytkownika — dalsze lekcje F06…

## 6. Dublowanie w silniku (spis 2026-10-08, grep — do potwierdzenia przy podmianie)

- **Konfiguracja elektronowa liczona kilka razy:** atlas `fill()` (`_anon_004/01_dane-pierwiastkow.js`), `ORDER`/aufbau w `anon001/dane-jadrowe/s002.js`, `CHE.MOLECULE.electronConfiguration` (`rdzen/s011.js`, `s018.js`; używa `gfx-ui/s032.js`, `che-visual-library-v001/01_CHE.js`), `ORDER=` w `rdzen/s276.js` i `che-home-gate-v0182/01_C.js`. Cel: jedno źródło (`CHE.MOLECULE.electronConfiguration`), reszta je wywołuje; `atomBohr` bez `cfg` ma brać konfigurację stamtąd zamiast reguły 2,8,8.
- **Rysunki atomu:** atlas `bohr`/`cloud` (`_anon_004/03_rys-bohr.js / 04_rys-poziomy-chmura.js`), widoki `atomModel` (`rdzen/s020.js`, `s021.js`, `s216.js`, `gfx-ui/s032.js`, `s074.js`), nowe `atomSVG`/`atomBohr` (rozszerzenia.js). Cel: `atomBohr` jako wspólny rysunek, widoki i atlas go wywołują.
- **Izotopy:** `isotopeData` atlasu + odczyty `CHE.DATA.ISOTOPES` w ~10 modułach (`_anon_002, 021, 025, 026, 029, 030, 031`) — sprawdzić, czy to te same przeliczenia.
- Każda podmiana zmienia źródła → test bajt w bajt (`silnik.py`) trzeba świadomie przestawić na nowy wzorzec + porównać zrzuty.

## Zasada @opis (2026-10-09)
- Każda wizualizacja w md ma linię `@opis` (build egzekwuje, `narzedzia/opis_wizualizacji.py`). Dług starych lekcji: `narzedzia/opis_dlug.json` — przy edycji lekcji dopisywać opisy.
