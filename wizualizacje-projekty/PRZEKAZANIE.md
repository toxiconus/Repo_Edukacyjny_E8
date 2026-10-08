# PRZEKAZANIE — wizualizacje dla lekcji bez grafik · 2026-10-08

## Stan
- Gałąź: `claude/wizualizacje-projekty` (od `claude/che-lekcje` @cb88726), folder `wizualizacje-projekty/`.
- `PROJEKT.md` — plan wizualizacji: chemia F06–F21, biologia L001–L043 (gotowa tylko L010), fizyka FIZ-02…08 (tematy wg podstawy E8, brak materiału w repo — do potwierdzenia). Dla każdej lekcji: UŻYJ / ROZSZERZ / NOWY.
- `wzorcownia.html` — 9 samodzielnych prototypów (własne dane, tryb dzienny, telefon 390 px; test: 0 błędów JS, brak przewijania w bok). Opublikowana też jako artefakt „Wzorcownia wizualizacji E8”.
  - CHE: F09 trzy karty (ładunek / wartościowość / stopień utlenienia), F10 krzywa energii H₂ (Morse, 74 pm, 436 kJ/mol), F15 wektory dipola (CO₂, H₂O, NH₃, CH₄, HCl), F17 bilans równań (atomy + ładunek, tryb ekspercki).
  - BIO: kod genetyczny z mutacjami (L011, L020), Punnett (A/a, grupy krwi, hemofilia — L017–L019), transport przez błonę (L005), sieć troficzna z trybem usuwania (L041–L042).
  - FIZ: obwód szeregowy/równoległy (propozycja FIZ-02).
- Silnika CHE, `rozszerzenia.js` i `bio-viz.js` nie zmieniano (równolegle pracowała inna sesja na `claude/che-lekcje`).

## Czeka na użytkownika
- Akceptacja prototypów (wygląd, zakres, dane do weryfikacji: EN Paulinga, H₂ 74 pm / 436 kJ/mol, barwy płomieni).
- Potwierdzenie listy lekcji fizyki.
- Lekcje F06+ nadal wstrzymane (decyzja z 2026-10-08 14:21).

## Następne kroki po akceptacji
1. CHE: V012 (dipol) i V015 (bilans) do `chemia/che-modular/engine/src/lekcja/rozszerzenia.js` na danych silnika (MOL3D, elektroujemność z danych pierwiastków, parser wzorów z `CHE.IONIC`/`CHE.STECH`), potem V009, V008; wpis w `KATALOG_MODELI.md`; test `python3 tools/che.py test`.
2. BIO: kod-genetyczny, punnett, transport-blona, siec-troficzna → `BIO.define` w `biologia/bio/szablon/bio-viz.js` (gałąź `claude/bio-lekcje`) + `BIO_KATALOG.md`.
3. FIZ: obwód → silnik fizyki (`CHE.PHYS`) razem z lekcją FIZ-02.
4. ✅ Scalone z `claude/che-lekcje` 2026-10-08 18:40 (bez konfliktów).

## Git
- Płytki klon: `git config --add remote.origin.fetch '+refs/heads/claude/wizualizacje-projekty:refs/remotes/origin/claude/wizualizacje-projekty'`, `git fetch`, `git checkout -b claude/wizualizacje-projekty origin/claude/wizualizacje-projekty`. Komunikat hooka o „unpushed commits” przy płytkim klonie jest fałszywy — naprawa `git branch -u origin/<gałąź>`.
