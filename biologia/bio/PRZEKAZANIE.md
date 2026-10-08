# BIO — przekazanie (stan pracy)

## Stan 2026-10-07
- Gałąź: `claude/che-lekcje` (zbiorcza; `claude/bio-lekcje` scalona 2026-10-08). Kanon treści: `biologia/BIO.all.v01.00.md` (v5.2), pocięty na `biologia/md/<KOD>_*.md` (źródła robocze, nie format szablonu).
- Nowy tor lekcji (jak CHE): `biologia/bio/md/<KOD>_*.md` w formacie `chemia/che/SZABLON_LEKCJI.md` + dodatki BIO (`@viz`, `::: mity`, `::: drzewo`).
- Build: `python3 biologia/bio/narzedzia/md2html_bio.py` → `biologia/bio/dist/<KOD>.html` (jeden samodzielny plik, offline, telefon) + `index.html`.
- Test: `node biologia/bio/narzedzia/sprawdz_bio.js` (390 px + 1200 px; konsola, grafiki, przewijanie w bok). Opcja `--zrzuty katalog`.
- Wygląd: `szablon/baza-wspolna.css` (styl lekcji z CHE, nie edytować) + `szablon/bio-warstwa.css` (paleta bio, grafiki; tylko tryb dzienny). Zachowanie: `szablon/lekcja.js`.
- Grafiki: nowa biblioteka `szablon/bio-viz.js` — katalog w `BIO_KATALOG.md`. Stare HTML/wizualizacje (`biologia/wizualizacje/`, `biologia/*.html`) tylko jako źródło treści; grafik z nich nie przenosimy.

## Lekcje
| Kod | Plik md | Stan |
|---|---|---|
| L010 | `L010_dna_od_zera.md` | v4.0 — scalone BIO.all L010 + HTML v3.0, 12 grafik, test OK |
| REV01 | `REV01_organizacja_i_chemizm_zycia.md` | v1.0 (2026-10-08) — powtórka do konkursu LKO, etap szkolny pkt I: poziomy, mikroskop, organelle, typy komórek, transport, fotosynteza, oddychanie, fermentacja, czynności życiowe, 2 doświadczenia; źródło L001, L004–L008; test OK |
| REV02 | `REV02_roznorodnosc_zycia.md` | v1.0 (2026-10-08) — powtórka do konkursu LKO, etap szkolny pkt II (kl. 5–6); treść nowa (podstawa 2024 + zakres LKO 2025/26), bez nowych grafik; test OK |

## Następne kroki
0. **Priorytet konkursowy** (`olimpiada/PRIORYTETY.md`): zakres etapu szkolnego pokryty (REV01 + REV02). Dalej: etap rejonowy — organizm człowieka i homeostaza (źródło `biologia/md/L002_powtorka_czlowiek.md`). Builder: parser chemii brany z `chemia/archiwum/che_v0_59/narzedzia/md2html.py` (po reorganizacji chemii).
1. L011 (DNA: chemia par, ekspresja) — źródło `biologia/md/L011_*.md` + `biologia/wizualizacje/BIO.011w…` (tylko treść); nowe grafiki: kodon/transkrypcja.
2. Liczby (2 nm, 3,4 nm, 10 par, ~2 m DNA) — do weryfikacji w Perplexity.
3. (użytkownik) PR `claude/bio-lekcje` → `main` / GitHub Pages.
