# PRZEKAZANIE — CHE lekcje · 2026-10-07 · v0_59

## 1. Stan w skrócie
Od v0_58 pracujemy w trybie „najpierw lekcje”. Lekcje piszemy wyłącznie w **md** (`md/`), a HTML robi skrypt `narzedzia/md2html.py` (zero tokenów). Silnik CHE (dane, GFX, atlas, wzorcownia) jest **zamrożony** jako `dist/che-viz.js` z v0_57. Nowe modele i zlewki dopisujemy w `szablon/rozszerzenia.js`, bez ruszania silnika.

Gotowe lekcje: **N01 Tlenki, N02 Wodorotlenki, N03 Kwasy, N04 Sole, N05 Wodorki (nowa w v0_59), FIZ-01 Elektrostatyka**.

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

## 7. Następne kroki
0e. **F00 nie jest potrzebne** (decyzja użytkownika): blok F = F01–F21; mapa bloku (5 faz) jest w F01 §0.3. `lekcje_md/F_nowe/CHE.01.F00…` to tylko notatki autora (mapowanie starego kanonu, modele). Zasada GFX zapisana w CLAUDE.md, STANDARD_LEKCJI.md, KATALOG_MODELI.md.
0d. **F01 Jak myśli chemik** — `che/md/F01_jak_mysli_chemik.md` (format SZABLON, ~30 KB md) z kanonu v16 (`lekcje_md/F_nowe/…v16.0…md`) + treść F00 v1.0 cz. IV; modele: live-cv, beaker-prediction-enhanced, mind-map, zlewki caoh2Co2, mgO2. md2html przechodzi; testów sprawdz.js nie uruchamiano. Brakujące zlewki (sól+woda, NaHCO₃+ocet, Fe+S) wpisane na końcu lekcji. Następne: F02 z v16 tą samą metodą.
0c. **F v15.0** (`lekcje_md/F_nowe/…v15.0_21_LEKCJI_NAPRAWIONE.md` + `…AUDYT_ZMIAN.md`): duble wspólnych bloków usunięte, F01 = obserwacja→model→zapis. Nadal: szablonowa diagnoza w 21 lekcjach, F10/F15/F18–F20 ~5–6 KB, F21 ~2 KB, braki map myśli/checklist/celów. Prompt do v16: `lekcje_md/F_nowe/PROMPT_ulepszenia_F_v15.md` (lista per lekcja, łatki ZNAJDŹ/ZAMIEŃ).
0b. **F v14.0 od użytkownika** (`lekcje_md/F_nowe/CHE.01F_FUNDAMENTY_MASTER_v14.0_…md`, 440 KB, 21 lekcji): wstępna wersja do ulepszania, nie pisać od zera. Prompt audytu: `lekcje_md/F_nowe/PROMPT_ulepszenia_F.md` (etap 1 audyt, etap 2 łatki ZNAJDŹ/ZAMIEŃ). Stan: F10, F15 cienkie; F18–F21 prawie puste; wspólne bloki MASTER v5.0 wklejone 2× (w F18 i F19); wizualizacje `Vxxx` niezmapowane na modele silnika.
0a. **F00 v1.1** (`chemia/lekcje_md/F_nowe/`): nowy plan bloku F — 21 lekcji w 5 fazach (pomysł użytkownika, poprawiony): F00 = dokument meta, F01 = „Jak myśli chemik”; mapowanie starego kanonu F00–F09 → nowe F01–F21, modele silnika dla każdej lekcji, decyzje przed podziałem (cz. VIII). Oryginał użytkownika: `CHE.01.F00.v1.0_oryginal.md`. **Nie dzielić i nie pisać lekcji F bez zgody użytkownika**; użytkownik ma wstępne wersje wszystkich lekcji F.
0. **Sesja 2026-10-07 wieczór — gałąź `claude/chemia-podzial`** (od `main` po merge PR #1; zrobić PR do `main`):
   - `chemia/lekcje_md/`: `CHEMIA_PODSTAWA_PLUS_v1.1.md` podzielony po BEGIN/END na 16 plików wg uid (`INDEX.md`, `KOLEJNOSC.txt`; złożenie = oryginał). Skrypt: `che/narzedzia/podziel_all_md.py`.
   - `chemia/lekcje_md/F/`: F00–F09 wyjęte z kanonu `CHE.core.md` (archiwum): blok główny + sekcja z WARSTWY MASTER v5.0; F00 ma też części wspólne bloku F. Scalone: `lekcje_md/CHE.01.F00-F09.fundamenty_kanon.md` (370 KB).
   - **Otwarte:** (a) potwierdzić mapowanie L00x→kody (L006→O01-O07, L007→O11-O19, L008→R03-R04, L009→R05-R08, L010→X01-X10, L011→LAB, L012→REV02, L013→REV06); (b) dopiski F rozproszone dalej w kanonie (od ~w. 32000) nie są dołączone; (c) reszta kanonu (N06–N07, R, J, O, X, E, K, A, P, REV) niewydzielona — tylko szkielety 7–9 KB, wyjątek X08 ~20 KB; (d) następna lekcja HTML: F01 (najpełniejsza treść).
   - Pierwszy push tej gałęzi dawał 500 z serwera — po ponowieniu przeszedł.
1. N06 Systematyka nieorganiczna (most N01–N05) albo fundamenty F00–F09.
2. Testy N01–N03 → `::: test`; tryb Noc w `lekcja.css`.
3. Kolejne zlewki i modele w `rozszerzenia.js` dla nowych lekcji.
4. (użytkownik) GitHub Pages (PR #1 `claude/che-lekcje`→`main` już zmergowany 2026-10-07).
