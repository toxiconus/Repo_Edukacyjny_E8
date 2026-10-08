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
- **Lekcje gotowe (11, test 11/11 OK):** F01–F05, N01–N05, FIZ01 w `lessons-md/gotowe/` (kanoniczny dialekt MD — `SYSTEM.md` §3).
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
3. **Blok F:** 21 lekcji F01–F21; nie pisać od zera — ulepszać materiał użytkownika z `chemia/lekcje_md/F/` (kanon v17). **Na razie nie robić kolejnych lekcji** (polecenie z 2026-10-08 14:21).
4. Dane liczbowe niepewne — oznaczać „do weryfikacji”. Dane bierzemy z `CHE.DATA`, nie z lokalnych kopii w widokach.
5. Silnika nie piszemy od nowa — stopniowa podmiana (czyste dane w dziedzinach, nowa mała warstwa obok starej).

## 4. Otwarte / znane problemy

- `f05-izotopy-v01` (rozszerzenia.js §8) ma **własny rysunek atomu** — do oparcia na elementach atlasu (dane już z `CHE.DATA.ISOTOPES`, `ELEMENTS_54`).
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
2. Profil per lekcja (w toku): `python3 tools/odchudz.py --profil <LEKCJA> --lekcje <LEKCJA> --start wspolny --etap mod,pod,anon,widoki` (~5 min/lekcję, mało tokenów — tylko czekanie). Gotowe: **F04_atom 1,55 → 1,13 MB** (`engine/registry/profile/F04_atom.json`; md2html sam bierze `dist/viz/<lekcja>.js` po `che.py silnik`). Zostało 10 lekcji — pętla po kolei (wspólny katalog `dist/_kand`, nie równolegle). Wymaga `python3 tools/wzorzec.py 6` raz na sesję (~5 min).
3. Przerobić `f05-izotopy-v01` na komponenty atlasu.
4. Odchudzanie CSS/DOM z porównaniem zrzutów.
5. Potem — na polecenie użytkownika — dalsze lekcje F06…
