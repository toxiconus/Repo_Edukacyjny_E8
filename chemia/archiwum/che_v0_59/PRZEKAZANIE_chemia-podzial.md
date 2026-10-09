# PRZEKAZANIE — CHE lekcje · 2026-10-07 · v0_59 + blok F (F01)

## 1. Stan w skrócie
Od v0_58 pracujemy w trybie „najpierw lekcje”. Lekcje piszemy wyłącznie w **md** (`md/`), a HTML robi skrypt `narzedzia/md2html.py` (zero tokenów). Silnik CHE (dane, GFX, atlas, wzorcownia) jest **zamrożony** jako `dist/che-viz.js` z v0_57. Nowe modele i zlewki dopisujemy w `szablon/rozszerzenia.js`, bez ruszania silnika.

Gotowe lekcje: **F01 Jak myśli chemik (md, 2026-10-07), N01 Tlenki, N02 Wodorotlenki, N03 Kwasy, N04 Sole, N05 Wodorki (nowa w v0_59), FIZ-01 Elektrostatyka**.

Historia wersji:
- **v0_58** — migracja N01–N04 i FIZ-01 do md. Treść identyczna z v0_57 (`porownaj.py`: 0 różnic poza zamierzonymi). Wspólny szkielet: spis treści, nagłówek, stopka, fiszki, test i przycisk treści akademickich ze wspólnego szablonu. N01/N02 dostały wspólny wygląd.
- **v0_59** — N05 Wodorki: 22 sekcje + dodatek, 8 doświadczeń, 26 fiszek, 14 pytań testu. Nowe modele: mapa wodorków, wykres temperatur wrzenia, pracownia z 11 zlewkami GFX; 8 reakcji (bilans sprawdzony przez silnik) i 8 substancji. Wersja jednoplikowa na telefon (`dist/jeden_plik/`) z ukrytym przyciskiem spisu.

## 2. Gdzie co jest

**GitHub:** repo `toxiconus/Repo_Edukacyjny_E8` (publiczne).

| gałąź | zawartość |
|---|---|
| `claude/che-lekcje` | **aktualna praca**, folder `chemia/che/` |
| `claude/che-lab-archiwum-v0_57` | pełne archiwum starego projektu: silnik, atlas, wzorcownia, kanon md v19.93 (`sources/chemia/CHE.core.md` + `lekcje/`), buildery, testy, zbudowana aplikacja `out_build/` |
| `main` | nietknięty (stare pliki repo: angielski, biologia, chemia L001…) |

**Folder `chemia/che/`:**

| ścieżka | co to |
|---|---|
| `md/*.md` | źródła lekcji — **jedyne miejsce edycji treści** |
| `SZABLON_LEKCJI.md` | format md: sekcje `##`, karty, `::: dosw`, `@model`, `@zlewka`, klinika, słownik, fiszki, test… |
| `STANDARD_LEKCJI.md` | kolejność części i zasady treści (jeden temat = jedno miejsce, plakietki poziomów) |
| `KATALOG_MODELI.md` | modele silnika + modele z rozszerzeń + klucze zlewek; instrukcja dodawania zlewki |
| `szablon/lekcja.css`, `lekcja.js` | wspólny wygląd i zachowanie |
| `szablon/rozszerzenia.js` | nowe modele, zlewki GFX, reakcje i substancje dokładane do silnika |
| `szablon/index.html` | wzór spisu lekcji |
| `narzedzia/md2html.py` | md → `dist/` (wersja lekka + `dist/jeden_plik/`) |
| `narzedzia/html2md.py`, `styl_wlasny.py`, `przebuduj_z_html.sh`, `porownaj.py` | jednorazowa migracja v0_57 → md (wykonana; **nie uruchamiać ponownie** — nadpisze md/) |
| `narzedzia/split_viz.py` | jak powstał `che-viz.js` z aplikacji v0_57 (uruchamiany w archiwum) |
| `dist/` | lekcje lekkie (100–170 KB) + `che-viz.js` (2,8 MB, **jedyny plik z dist/ w gicie**, reszta powstaje z builda) + `index.html` — praca na komputerze |
| `dist/jeden_plik/` | każda lekcja w jednym pliku (~3 MB) — **telefon, wysyłanie** |

## 3. Jak pracować
```
cd chemia/che
python3 narzedzia/md2html.py                          # wszystkie lekcje
python3 narzedzia/md2html.py md/N06_systematyka.md    # jedna
```
- Wymaga tylko Pythona 3 (bez bibliotek). Nowa lekcja = nowy plik `md/<KOD>_<nazwa>.md` z nagłówkiem jak w SZABLON_LEKCJI.md — sama trafia do spisu.
- Test: `node narzedzia/sprawdz.js` (Chromium 390 px; wypisuje tylko FAIL: błędy konsoli, brak lekcji, ekran startowy, przewijanie w bok). Ręcznie dodatkowo: każdy model zamontowany, „Zobacz w zlewce” otwiera właściwy klucz.

**Start nowego wątku (oszczędnie):** nic nie dołączaj — wystarczy napisać „CHE: <zadanie>, lekcja <KOD>”. Claude klonuje repo (gałąź `claude/che-lekcje`) i czyta tylko md tej lekcji oraz potrzebne fragmenty SZABLON/KATALOG. Uwagi o błędach: tekstem (lekcja, sekcja, co nie działa); zrzut tylko przycięty do miejsca błędu.

## 4. Git — jak to działa (instrukcja dla Claude)
- Klonowanie: narzędzie `add_repo` (owner `toxiconus`, repo `Repo_Edukacyjny_E8`, access `push`), potem `git clone --depth 1 https://github.com/toxiconus/repo_edukacyjny_e8`.
- Płytki klon pobiera tylko `main`. Gałąź pracy:
  ```
  git config --add remote.origin.fetch '+refs/heads/claude/che-lekcje:refs/remotes/origin/claude/che-lekcje'
  git fetch origin && git checkout -b claude/che-lekcje origin/claude/che-lekcje
  ```
- **Wysyłać wolno tylko na gałęzie z prefiksem `claude/`.** Push na `main`, na inne nazwy i tagi kończy się błędem 403 (polityka proxy). Dlatego archiwum nie ma taga — wersja jest w nazwie gałęzi.
- `gh` (GitHub CLI) ma w sesji nieważny token — nie da się nim założyć repo, PR ani GitHub Pages. To robi użytkownik na github.com.
- Komunikat hooka „Branch has N unpushed commits and no remote branch” był fałszywy (wszystko było wysłane): płytki klon nie śledził gałęzi zdalnej. Naprawa: konfiguracja `fetch` jak wyżej + `git branch -u origin/claude/che-lekcje`. Sprawdzenie: `git ls-remote origin refs/heads/claude/che-lekcje` = `git rev-parse HEAD`.
- Commity: autor `toxiconus <toxiconus@gmail.com>`; na końcu wiadomości linie `Co-Authored-By` i `Claude-Session` (podaje system).

**Do zrobienia przez użytkownika (opcjonalnie):** Pull request `claude/che-lekcje` → `main` na github.com i/lub **GitHub Pages** (Settings → Pages → gałąź i folder `/`). Wtedy lekcje będą pod linkiem `https://toxiconus.github.io/Repo_Edukacyjny_E8/chemia/che/dist/` i na telefonie zadziała też spis lekcji.

## 5. Znane błędy i ograniczenia
1. **Android — pusta strona** przy otwieraniu `dist/N0x.html` z pobranych plików: telefon nie widzi sąsiedniego `che-viz.js`. Rozwiązanie: `dist/jeden_plik/`. Wersja lekka pokazuje teraz komunikat zamiast białej strony. (rozwiązane)
2. **Przycisk „← Spis lekcji” w `jeden_plik`** prowadził do nieistniejącego spisu — teraz jest ukryty. (rozwiązane)
3. **Tryb Noc** — panele modeli mają inne tło niż strona (podwójne odwrócenie kolorów: filtr invert + ciemna paleta). Błąd z v0_57 w silniku; obejście możliwe w `lekcja.css`. (otwarte)
4. **Szerokie tabele na telefonie** przewijają się w bok w ramce `table-wrap`; strona się nie rozjeżdża. W N03/N04 wewnętrzny obszar lekcji jest szerszy niż ekran (tak samo w v0_57) — nie przeszkadza w czytaniu. (kosmetyka)
5. **Stare skrypty w N01–N03** (`::: skrypt`): testy N01/N02/N03 i widżety N03 działają po staremu. Do przeniesienia na `::: test`. (otwarte)
6. **Część HTML w md** — tabele i listy ze specjalnymi klasami (`data-sol`, `mobile-stack` itd.). Działa; upraszczać przy edycji. (kosmetyka)
7. **Dane silnika są zamrożone (deepFreeze)** — `rozszerzenia.js` podmienia `CHE.DATA.REACTIONS`, `REACTION_DATA`, `SUBSTANCES` na rozszerzalne kopie. Nowe dane dopisywać tak samo. (zasada)
8. **Kontrola spójności silnika** (konsola: `[CHE.CONSISTENCY] rozjazdy`): zlewka bez rekordu reakcji → ostrzeżenie GFX-01; reakcja z nieznaną substancją → ENG-07. Stan v0_59: 0 ostrzeżeń. (zasada)
9. **Nowe widoki:** nie używać `color:var(--ink)` (w aplikacji jest jasna) — używać `inherit`. Wykresy SVG są owijane w ramkę powiększania `che-zoom-frame` — ustawić jej szerokość 100%. (zasada)
10. **Ekran startowy aplikacji przed lekcją** — przy otwieraniu lekcji przez ~1 s było widać widok CHE · LAB (Atlas, Wizualizacje…). Przyczyna: `che-viz.js` chowa `#che-landing` stylem z samego końca pakietu, a przeglądarka rysuje stronę w trakcie wczytywania 2,8 MB. Naprawa w `md2html.py`: styl `che-bez-startu` w `<head>`. (rozwiązane)

## 6. Merytoryka
- N05 Wodorki napisana od zera (kanon md miał tylko szkic). Dane liczbowe (t. wrzenia, EN Paulinga, rozpuszczalność, pKa) to wartości podręcznikowe — **do sprawdzenia w Perplexity / innym LLM**.
- Kanon md (CHE.core.md, 2 MB) jest w archiwum. Dla nowej lekcji szukać w nim tylko fragmentów z jej kodem (np. „N06”) — nie czytać całości.

## 7. Sesja 2026-10-07 wieczór (gałąź `claude/chemia-podzial`)

**Git:** gałąź `claude/chemia-podzial` wychodzi z `main` (po merge PR #1). **Do zrobienia przez użytkownika: PR `claude/chemia-podzial` → `main`.** Pierwszy push dawał 500 z serwera, ponowienie przeszło. Płytki klon: komunikat hooka „no remote branch” jest fałszywy, naprawa jak w §4 (fetch + `git branch -u`).

**Blok F — decyzje użytkownika**
- Blok F = **21 lekcji F01–F21** w 5 fazach (A F01–03, B F04–09, C F10–15, D F16–17, E F18–21). **F00 nie istnieje jako lekcja** — mapa bloku jest w F01 §0.3.
- **Nie pisać lekcji od zera.** Użytkownik dostarcza wersje wstępne (kanon F v14 → v15 → v16 z innego LLM), my ulepszamy i przenosimy do formatu `SZABLON_LEKCJI.md`.
- **Zasada GFX** (zapisana w CLAUDE.md, STANDARD_LEKCJI.md, KATALOG_MODELI.md): najpierw istniejące modele/zlewki (rozszerzać, ulepszać); brakujący element budować od podstaw jako komponent wielokrotnego użytku w `rozszerzenia.js` + wpis w katalogu.

**Gotowe**
- **F01 Jak myśli chemik** — `che/md/F01_jak_mysli_chemik.md` v1.1 (wersja użytkownika + poprawki: karta 15 punktów, kolejność ćwiczeń A–E, mapa bloku). md2html przechodzi; `sprawdz.js` nie uruchamiany. Modele: `live-cv`, `beaker-prediction-enhanced`, `mind-map`, zlewki `caoh2Co2`, `mgO2`.
- **GFX dla F01** (`szablon/rozszerzenia.js` §5–6): wspólny budowniczy pracowni `C.EXT_PRACOWNIA(...)` + pracownia `f01-doswiadczenia-v01` (zlewki `f01SolWoda`, `f01Odparowanie`, `f01SodaOcet`, `f01WodaWapienna`, `f01Mg` w tyglu, `f01FeS` w probówce) z rekordami reakcji i substancji. F01 ma `@model f01-doswiadczenia-v01` w §10; test Chromium: 6/6 przycisków „Zobacz w zlewce” działa, bez błędów konsoli (jedyny FAIL `sprawdz.js` to brak sieci w sesji — jak w N05). Wiedza o silniku zapisana w KATALOG_MODELI.md: naczynia `beaker`/`testTube`/`crucible`; `evapDish` rysuje tylko ciecz; `noRx:1` zatrzymuje animację; lekcja potrzebuje `@model <pracownia>`, żeby `@zlewka` działała.
- **Spis kursu:** `chemia/plany/CHE_SPIS_TRESCI.md` — 113 lekcji (kanon v0.3): kod, poziom, wymaga/pogłębia, cel, „co ma być”, stan, jakie pliki mamy. Generowany: `python3 che/narzedzia/spis_tresci.py` z danych `che/narzedzia/kanon_dane.py` (zmiany robić w danych). Ścieżki E8/LO: `plany/PLAN_SCIEZKI_DYDAKTYCZNE.md`.
- **Materiał lekcji:** `chemia/lekcje_md/<grupa>/` — F: jeden plik na lekcję F01–F21 + `F00.wspolne_bloku_F.md` (z kanonu v17; na końcu każdego „MATERIAŁ Z ARCHIWUM — do redakcji” z v14/v15, starego F00–F09 i F00 v1.0, bez dubli). N/R/O/X/00: stare lekcje v1.1 pod nowymi kodami (N02–N05 = materiał obok gotowych lekcji che/md; R, O, X — pliki zbiorcze kilku kodów). REV01 = trzy wersje powtórki klasy 7 scalone.
- Usunięte jako dublety (08.10, są w historii git): MASTER v14–v17, stare F00–F09, `CHEMIA_PODSTAWA_PLUS_v1.1.md` (= suma plików lekcje_md), L002 ×2, INDEX, KOLEJNOSC, Z99, `CHE_KANON_v0.2`, `CHE_SPIS_LEKCJI`, `AUDYT_SPISU_v0.2`. Sprawdzone skryptem: żadna linia treści nie zginęła.

**Następne kroki (kolejność)**
1. **F05 Izotopy, jony i masa atomowa** z `lekcje_md/F/CHE.01.F05.*.md` tą samą metodą co F02–F04 (uwaga: w materiale F04/F05 były zepsute liczby „3**fikcyjny pierwiastek X…**” — poprawne: Ar(Cl) ≈ 35,45; m(³⁷Cl) = 36,966 u) → `che/md/F02_*.md` tą samą metodą co F01; czytać tylko sekcję lekcji (grep numerów wierszy), modele z F00 cz. X.
2. Kolejne F03–F21 tak samo; cienkie w v16 (F10, F15, F18–F21; v17 dodaje do F18–F20 po ~16 akapitów) — najpierw sprawdzić, czy użytkownik ma nowszą wersję.
3. GFX do zbudowania od podstaw (zasada GFX): magnes (Fe + S), lód pływający, osad i para w parownicy, płomień w tyglu; modele: rozdzielanie mieszanin (F03 — następny), izotopy (F05), energia wiązania (F10), polarność/dipol (F15), dobieranie współczynników (F17). Zlewki F01 — zrobione.
4. Po zatwierdzeniu kanonu v0.3: przemianować gotowe lekcje N (`che/md/N01…N05` → N02…N06).
5. Otwarte z wcześniej: mapowanie L006–L013 → kody (O, R, X, LAB, REV) do potwierdzenia; N06 Systematyka; testy N01–N03 → `::: test`; tryb Noc w `lekcja.css`; GitHub Pages (użytkownik).


- 2026-10-08 · Kanon F **v17.0** = v16 (pełna treść) + akapity nowe z pliku użytkownika CLEAN v0.2x (yaml zależności per lekcja, rozbudowa F01–F06, F09, F18–F20, audyt archiwalny L001–L013, zestawy interleavingu). CLEAN miał puste znaczniki zamiast treści F02–F21 — nie zastępuje v16. Poprawiono: ⁴⁰Ca²⁺ (było ²⁴Ca, n=4). Plany kursu: `chemia/plany/`.

- 2026-10-08 · **F02, F03, F04 gotowe** (`che/md/F02_materia_i_substancje.md`, `F03_wlasciwosci_i_rozdzielanie.md`, `F04_atom.md`) — z materiału `lekcje_md/F/` wg szablonu F01; md2html OK, `sprawdz.js` OK (3 lekcje; sprawdz.js ignoruje teraz błędy sieci offline). Nowa pracownia GFX `f03-rozdzielanie-v01` (rozszerzenia.js §7: zlewki `f03PiasekWoda`, `f03KredaWoda` + zlewki F01). Zasada właściciela: metody rozdzielania — F03 (F02 tylko zapowiedź), konfiguracja powłokowa — F07, izotopy i masa atomowa — F05 (F04 tylko odesłanie). F05 wstrzymane na prośbę użytkownika.
