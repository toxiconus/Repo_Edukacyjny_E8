# Zadania: Haiku (tanie) i Sonnet (droższe) — stan 2026-10-20

> **ZASADA PRACY CIĄGŁEJ (Haiku i każdy model wykonujący tę listę):** po skończeniu zadania NIE pytaj „czy kontynuować?” ani „co dalej?” — od razu bierz następne niezaznaczone `- [ ]` z listy i rób je po kolei, aż skończą się zadania albo wyczerpie się limit. Raportuj dopiero na końcu serii (2–4 zdania: co zrobione, co zostało). Pytaj tylko wtedy, gdy decyzja grozi utratą danych lub naprawdę należy do użytkownika. Po każdym zadaniu: odhacz `- [x]`, commit, `python3 narzedzia/odswiez_wszystko.py --szybko`; push i scalanie do `main` wolno, jeśli nie tracimy danych (CLAUDE.md). Przy limicie: zapisz stan w tym pliku i zrób najmniejszy działający krok.

Priorytet: biologia LKO etap szkolny, środa 21.10.2026, 9:00, 60 min. Nie pisać nowych lekcji — poprawiać istniejące, pytać zewnętrzne AI (Perplexity).

## Tanie — Haiku (mechaniczne)
- [x] H-A. Odświeżyć spisy: `python3 narzedzia/mapa.py`, `biologia/bio/BIO_KATALOG.md` (KB, stan audytów), wpis w `chemia/che-modular/PROGRESS.md`.
- [x] H-B. Sprawdzić REV01 po buildzie: każde `@viz`/`@klocek` ma `@opis`; brak sklejonych nagłówków „{#id}…” i LaTeX-a `\(`.
- [x] H-C. Przeszukać lekcje biologii pod kątem „LKO 2025/26” i tkanek roślinnych jako wymogu (zakres 2026/27).
- [x] H-D. Zbudować ZIP przekazania (md + html + małe silniki + przekazanie + `olimpiada/` z datami).
- [x] H-E. (zrobione: `narzedzia/popraw_odpowiedz_ai.py`) Przed wklejeniem odpowiedzi Perplexity dla REV02: automatyczne naprawy formatu (sklejone nagłówki, LaTeX→Unicode `narzedzia/latex2uni.py`, frontmatter `---`).
- [x] H-F. Policzyć KB przed/po dla lekcji i wpisać do `WERYFIKACJA.md`.

- [x] H-G. **Wstawić gotowe rysunki BIO do innych lekcji** (tylko tam, gdzie pomagają zrozumieć; nie jako ozdoba). Składnia: `@viz <id> {opcja="wartość"} | Tytuł | podpis`, zaraz pod nią obowiązkowa linia `@opis …` (co widać + wniosek). Po zmianach: `python3 biologia/bio/narzedzia/md2html_bio.py` i `node biologia/bio/narzedzia/sprawdz_bio.js` (0 FAIL). Katalog: `biologia/bio/BIO_KATALOG.md`, kod: `biologia/bio/szablon/bio-rysunki.js`. NIE zmieniać kodu rysunków ani treści lekcji, tylko dodawać `@viz`+`@opis`; jeden rysunek raz na lekcję. Dostępne id i gdzie je zaproponować:
  - `tkanki-zwierzece` → B2a (§5 tkanka mięśniowa, §3–4 kość i chrząstka jako tkanka łączna), B2d (neuron = tkanka nerwowa).
  - `jajo-ptaka`, `jajo-porownanie` → B2f (rozmnażanie i rozwój: jajorodność, błony płodowe, łożysko).
  - `komorki-porownanie` → L010 (gdzie jest DNA: jądro vs nukleoid) i B1b (jeśli jest sekcja o komórce).
  - `wykres-dane` → REV01 §9.1 (metoda naukowa) i B2g (homeostaza, jeśli są wykresy).
  - `mikroskop-budowa` → REV01 (dział o komórce/preparatach), jeśli jest wzmianka o mikroskopie.
  - `serce-budowa`, `krazenie` → B10 §2.5 (wstawione); docelowo B2h Układ krążenia.
  - `neuron-budowa`, `cykl {cykl="odruch"}` → B2d (wstawione); `nefron-budowa`, `wentylacja` → B2c (wstawione). Przed wstawianiem czegokolwiek: `python3 narzedzia/katalog_grafik_bio.py` i sprawdź kolumnę „użyte w”.
  - `cykl {cykl="zaba|tasiemiec|mech|paproc|kwiat|faga"}` → B2f (płazy/rozwój), L010 (faga — jeśli jest wirus), REV02 już ma.
  - `ryba-budowa`, `stawonogi-budowa` → tylko REV02 (już wstawione); inne lekcje: pominąć.
  Raport końcowy: lista (lekcja → id → sekcja) i wynik testu; wątpliwe miejsca zostawić bez rysunku i wypisać.
  **Raport H-G (wykonano 2026-10-20):** wstawione (lekcja → id → sekcja): B2a → tkanki-zwierzece → §5 tkanka mięśniowa; B2d → tkanki-zwierzece → §4 neuron; B2f → cykl {zaba} → §5 rozwój zarodkowy; B2f → jajo-ptaka → §5; B2f → jajo-porownanie → §8 łożysko; L010 → komorki-porownanie → §8 gdzie jest DNA; REV01 → wykres-dane → §9.1 metoda naukowa. Wcześniej: B10 (serce, krążenie), B2c (wentylacja, nefron), B2d (neuron, odruch), B2e (gruczoły, sprzężenie, glukoza), B2g (sprzężenie, homeostaza), B1b (Punnett). Pominięte z powodem: `cykl faga` (L010 nie mówi o wirusach), `mikroskop-budowa` (REV01 §2 ma już mikroskop-model: jeden model = jedno miejsce), `komorki-porownanie` w B1b (jedna wzmianka o komórce, bez sekcji). Test: sprawdz_bio.js OK 55; opisy: 0 braków.

- **H-D1 (dubel źródeł chemii) — STAN 2026-10-20: zestawienie gotowe (`chemia/plany/H-D1_pary_chemia.md`), decyzje per para NIE podjęte.** Powód: `zbuduj_wszystkie.py che` czyta tylko `chemia/lekcje_md/*/*.md` (93), a pakiety/okładki i `che-modular` czytają `lessons-md/gotowe` (90). Usunięcie 16 identycznych kopii najpierw wymaga, żeby builder `che` czytał też `gotowe` (dedup po uid). Dopiero potem usuwać kopie. Krok 1: zmienić builder, sprawdzić, że `chemia/html` ma nadal 93+ lekcji; krok 2: usunąć 16 identycznych z jednego katalogu; krok 3: porównać resztę.
- **H-D1 (opis zadania):** lekcje chemii mają dwa źródła md: `chemia/che-modular/lessons-md/gotowe/` (build che-modular → dist) i `chemia/lekcje_md/<grupa>/CHE.*.md` (zbuduj_wszystkie.py che → chemia/html). 16 plików jest identycznych (np. F05, F12, J07–J10, K01, N02, N06, P01), reszta różni się. Zasada: porównaj parami (rozmiar, nagłówki `grep -o '^#\+ '`, `git log`), zostaw lepszą wersję w jednym katalogu, unikalne sekcje dopisz do niej, gorszą przenieś do `chemia/plany/niewykorzystane/`; ustal jedną ścieżkę i zapisz w CLAUDE.md. Nie kasuj bez porównania.
- **H-D2 (N02_tlenki) — ZROBIONE 2026-10-20:** porównano sekcje ze starym N01 (`chemia/plany/niewykorzystane/N01_tlenki__wersja_pelna_main_2026-10-20.md`): czad, BHP, smog/kwaśne deszcze/efekt cieplarniany/emisje, tabela „Nie myl z”, redukcja H₂/CO/C i termit, tlenki mieszane, nadtlenki, ponadtlenki, OF₂, CO vs CO₂, SiO₂, MgO, „Jak rozpoznać w 10 sekund” — WSZYSTKO już jest w N02 (w wersji skróconej). Nic nie dopisywano. Build md2html N02 OK, opisy OK. Stara wersja zostaje w niewykorzystane jako archiwum.
- **H-D3 (fragmenty z niewykorzystane) — ZROBIONE 2026-10-20:** F17 (definicje, 10 zasad, typy reakcji): pokryte w sprint F17 (§5 typy, §19 słownik); „10 zasad supernauki” zostaje w archiwum (generyczne, w innych lekcjach). J03: pokryte (§4, §6, §12 pułapki, §14 ciekawostki, §15 mnemoniki). F01–F06, FIZ01: notatki GFX przeniesione do `chemia/che-modular/KATALOG_WIZUALIZACJI.md` (luki). Nic nie dopisywano do lekcji, bo nie było unikalnej treści lekcyjnej.
- **H-D4 (starsze wersje BIO) — ZROBIONE 2026-10-20:** porównano 40 starych plików z nowymi (wg pogrubionych terminów). Prawie wszystko już jest. Jedyne braki: czasy w planach powtórek (L032, L044, L050) — ODRZUCONE, bo obowiązuje zasada „bez planów czasowych”; tagi `[konkurs]`/`[master]` — metadane, nie treść. Nic nie dopisywano. Stare pliki zostają w `biologia/niewykorzystane/starsze_wersje_lekcji/`.

## Droższe — Sonnet (merytoryka, decyzje)
- [ ] S-A. **REV02: tury 2–4 odpowiedzi Perplexity** (tura 1 wprowadzona 2026-10-20: tkanki 6.1, ryby, pasożyty, bezkręgowce, D+). Odrzucone z powodem w `WERYFIKACJA.md`. PRIORYTET przed środą.
- [ ] S-F. Brakujące lekcje etapu II: **B2h Układ krążenia**, **B2i Układ odpornościowy**, B2j arkusz próbny — plan w `biologia/plany/PLAN_BRAKUJACE_LEKCJE.md`; przygotować paczki dla zewnętrznego AI.
- [ ] S-B. Weryfikacja liczb REV01 (próg 0,01% makroelementów, ~60% wody, 2× energia z tłuszczu) i kluczy §12a.
- [ ] S-C. Rozbudowa tkanek zwierzęcych w REV02 + zadania z odczytem schematu i planowaniem doświadczenia (styl arkusza 2025/26).
- [ ] S-D. Etap II biologii (B2a–B2g): zgodność z zakresem rejonowym (24.11.2026).
- [ ] S-E. Gałęzie zdalne z niepowiązaną historią — decyzja użytkownika (wymaga „scal”).

## Zrobione
- 2026-10-20: rysunki BIO (bio-rysunki.js): ryba, mikroskop, jajo ptaka, jajo-porownanie, tkanki, stawonogi, komórki, wykres, cykl (6 cykli) — wstawione w REV01/REV02; wstawianie do innych lekcji = H-G.
- 2026-10-19/20: pakiety dla Perplexity (`eksport/out/bio_etap1/`, poza gitem); REV01 v1.2 wprowadzona (§1a Chemizm życia, §12a zadania LKO); push i scalenie `main` na polecenie.
