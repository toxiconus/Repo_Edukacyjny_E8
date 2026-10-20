# Zadania: Haiku (tanie) i Sonnet (droższe) — stan 2026-10-20

Priorytet: biologia LKO etap szkolny, środa 21.10.2026, 9:00, 60 min. Nie pisać nowych lekcji — poprawiać istniejące, pytać zewnętrzne AI (Perplexity).

## Tanie — Haiku (mechaniczne)
- [ ] H-A. Odświeżyć spisy: `python3 narzedzia/mapa.py`, `biologia/bio/BIO_KATALOG.md` (KB, stan audytów), wpis w `chemia/che-modular/PROGRESS.md`.
- [ ] H-B. Sprawdzić REV01 po buildzie: każde `@viz`/`@klocek` ma `@opis`; brak sklejonych nagłówków „{#id}…” i LaTeX-a `\(`.
- [ ] H-C. Przeszukać lekcje biologii pod kątem „LKO 2025/26” i tkanek roślinnych jako wymogu (zakres 2026/27).
- [ ] H-D. Zbudować ZIP przekazania (md + html + małe silniki + przekazanie + `olimpiada/` z datami).
- [ ] H-E. Przed wklejeniem odpowiedzi Perplexity dla REV02: automatyczne naprawy formatu (sklejone nagłówki, LaTeX→Unicode `narzedzia/latex2uni.py`, frontmatter `---`).
- [ ] H-F. Policzyć KB przed/po dla lekcji i wpisać do `WERYFIKACJA.md`.

## Droższe — Sonnet (merytoryka, decyzje)
- [ ] S-A. **REV02: tury 2–4 odpowiedzi Perplexity** (tura 1 wprowadzona 2026-10-20: tkanki 6.1, ryby, pasożyty, bezkręgowce, D+). Odrzucone z powodem w `WERYFIKACJA.md`. PRIORYTET przed środą.
- [ ] S-F. Brakujące lekcje etapu II: **B2h Układ krążenia**, **B2i Układ odpornościowy**, B2j arkusz próbny — plan w `biologia/plany/PLAN_BRAKUJACE_LEKCJE.md`; przygotować paczki dla zewnętrznego AI.
- [ ] S-B. Weryfikacja liczb REV01 (próg 0,01% makroelementów, ~60% wody, 2× energia z tłuszczu) i kluczy §12a.
- [ ] S-C. Rozbudowa tkanek zwierzęcych w REV02 + zadania z odczytem schematu i planowaniem doświadczenia (styl arkusza 2025/26).
- [ ] S-D. Etap II biologii (B2a–B2g): zgodność z zakresem rejonowym (24.11.2026).
- [ ] S-E. Gałęzie zdalne z niepowiązaną historią — decyzja użytkownika (wymaga „scal”).

## Zrobione
- 2026-10-19/20: pakiety dla Perplexity (`eksport/out/bio_etap1/`, poza gitem); REV01 v1.2 wprowadzona (§1a Chemizm życia, §12a zadania LKO); push i scalenie `main` na polecenie.
