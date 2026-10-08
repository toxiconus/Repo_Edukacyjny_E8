# PROGRESS — dziennik kroków (1–2 linie na krok)

- 2026-10-08 · start nowego podejścia: import `che-modular` z ZIP, `extract_modules.py` + `pobierz_moduly.sh` (78/78 sha1), audyt → `PLAN_PRACY.md` §2. Packi budują się, ale w przeglądarce bez treści i z błędami JS. Stary system → `chemia/archiwum/`. Następny: K1 (test regresji).
- 2026-10-08 · cele doprecyzowane: zero utraty danych silnika, test kompletności w K1, dwa wyjścia z MD (samodzielny + zintegrowany).
- 2026-10-08 · K0: SYSTEM.md, tools/che.py, _SZABLON/LEKCJA.md, podział GFX/VIEW per element (175 plików, sha1 OK, złożenia z allow-listą przechodzą node --check). Prototyp $-makr → _prototyp_zip/. Następny: K1.
- 2026-10-08 · GFX per przedmiot (chemia/fizyka/wspolne, warianty przedmiotowe w gfx_join.find), KATALOG.md (che.py katalog), słownik MD↔HTML↔silnik w SYSTEM.md §8. molTank bez grupy w rejestrze → chemia.
- 2026-10-08 · K1+K2 ✅: lab z modułów == monolit (sha1), che-viz.js z modułów == zamrożony v0_59 (sha1) → zero utraty danych udowodnione. Szkielet labu `modules/_lab_skeleton.html`, `tools/silnik.py`, builder kanonu `tools/md2html.py` + `engine/src/lekcja/` (css/js/rozszerzenia). Test `tools/test_lekcje.cjs`: 6/6 OK (treść, 0 błędów, modele zamontowane, pracownie). Packer ZIP odstawiony (gubił HOME_GATE → brak treści). Następny: K3 odchudzanie per lekcja z testem.
