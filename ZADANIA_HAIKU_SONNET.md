# Zadania: Haiku (tanie) i Sonnet (droższe) — stan 2026-10-20

Priorytet: biologia LKO etap szkolny, środa 21.10.2026, 9:00, 60 min. Nie pisać nowych lekcji — poprawiać istniejące, pytać zewnętrzne AI (Perplexity).

## Tanie — Haiku (mechaniczne)
- [ ] H-A. Odświeżyć spisy: `python3 narzedzia/mapa.py`, `biologia/bio/BIO_KATALOG.md` (KB, stan audytów), wpis w `chemia/che-modular/PROGRESS.md`.
- [ ] H-B. Sprawdzić REV01 po buildzie: każde `@viz`/`@klocek` ma `@opis`; brak sklejonych nagłówków „{#id}…” i LaTeX-a `\(`.
- [ ] H-C. Przeszukać lekcje biologii pod kątem „LKO 2025/26” i tkanek roślinnych jako wymogu (zakres 2026/27).
- [ ] H-D. Zbudować ZIP przekazania (md + html + małe silniki + przekazanie + `olimpiada/` z datami).
- [ ] H-E. Przed wklejeniem odpowiedzi Perplexity dla REV02: automatyczne naprawy formatu (sklejone nagłówki, LaTeX→Unicode `narzedzia/latex2uni.py`, frontmatter `---`).
- [ ] H-F. Policzyć KB przed/po dla lekcji i wpisać do `WERYFIKACJA.md`.

- [ ] H-G. **Wstawić gotowe rysunki BIO do innych lekcji** (tylko tam, gdzie pomagają zrozumieć; nie jako ozdoba). Składnia: `@viz <id> {opcja="wartość"} | Tytuł | podpis`, zaraz pod nią obowiązkowa linia `@opis …` (co widać + wniosek). Po zmianach: `python3 biologia/bio/narzedzia/md2html_bio.py` i `node biologia/bio/narzedzia/sprawdz_bio.js` (0 FAIL). Katalog: `biologia/bio/BIO_KATALOG.md`, kod: `biologia/bio/szablon/bio-rysunki.js`. NIE zmieniać kodu rysunków ani treści lekcji, tylko dodawać `@viz`+`@opis`; jeden rysunek raz na lekcję. Dostępne id i gdzie je zaproponować:
  - `tkanki-zwierzece` → B2a (§5 tkanka mięśniowa, §3–4 kość i chrząstka jako tkanka łączna), B2d (neuron = tkanka nerwowa).
  - `jajo-ptaka`, `jajo-porownanie` → B2f (rozmnażanie i rozwój: jajorodność, błony płodowe, łożysko).
  - `komorki-porownanie` → L010 (gdzie jest DNA: jądro vs nukleoid) i B1b (jeśli jest sekcja o komórce).
  - `wykres-dane` → REV01 §9.1 (metoda naukowa) i B2g (homeostaza, jeśli są wykresy).
  - `mikroskop-budowa` → REV01 (dział o komórce/preparatach), jeśli jest wzmianka o mikroskopie.
  - `serce-budowa`, `krazenie` → B10 §2.5 (wstawione); docelowo B2h Układ krążenia.
  - `cykl {cykl="zaba|tasiemiec|mech|paproc|kwiat|faga"}` → B2f (płazy/rozwój), L010 (faga — jeśli jest wirus), REV02 już ma.
  - `ryba-budowa`, `stawonogi-budowa` → tylko REV02 (już wstawione); inne lekcje: pominąć.
  Raport końcowy: lista (lekcja → id → sekcja) i wynik testu; wątpliwe miejsca zostawić bez rysunku i wypisać.

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
