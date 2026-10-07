# PRZEKAZANIE 2026-10-07 (v0_58 — lekcje w md)

Zrobione: archiwum v0_57 na GitHubie (gałąź claude/che-lab-archiwum-v0_57). Nowy układ: lekcje N01–N04, FIZ-01 jako md (md/), wspólny szablon (szablon/lekcja.css, lekcja.js), konwerter md2html.py, zamrożony silnik dist/che-viz.js. Treść po migracji identyczna z v0_57 (porownaj.py: 0 różnic poza zamierzonymi), wszystkie modele i „Zobacz w zlewce” działają, fiszki/test/treści akademickie ze wspólnego lekcja.js. N01/N02 dostały wspólny wygląd (ich stare style kart/nagłówków usunięte, zostały tylko style własnych widżetów).
Zostało po staremu (działa, do ujednolicenia przy okazji): testy N01–N03 i widżety N03 jako ::: skrypt; część tabel i list z klasami jako HTML w md.
Otwarte / TODO: 1) N05 Wodorki — nowa lekcja w md 2) testy N01–N03 → ::: test 3) tryb Noc w panelach (z v0_57) 4) F00–F09
Start nowego wątku: dołącz SZABLON_LEKCJI.md, KATALOG_MODELI.md i md lekcji, nad którą pracujemy (nie cały projekt). Build: python3 narzedzia/md2html.py (wymaga tylko Pythona; szablon/ i dist/che-viz.js z repo).
