# PRZEKAZANIE 2026-10-07 (v0_57)

Zrobione: v0_57 — nowa strona startowa (kafelki lekcji z rejestru, „Kontynuuj”, narzędzia, liczby z silnika, wersja), naprawiony tryb Noc na stronie startowej. v0_56 — etap 3 md N04; N04 Sole v1.1 wg STANDARD_LEKCJI (55 tys. znaków, 9 modeli bez dubli, 10 doświadczeń z „Zobacz w zlewce”, BHP, typologia), x_rx_n04.js, audyty LES-N04-01..05, kanon md v19.93.
Zmienione pliki (v0_57): modules/base/027_html_che-landing.html, 136_che-home-gate-v0182.js, 025_che-gate-boot-css.css; build.py (wstrzykiwanie wersji); lesson/sole_new.html + _redakcja/n04_red.py (title); manifest 0.57; test/*.js; docs/.
Otwarte / TODO: 1) tryb Noc w panelach — sprawdzić podwójne odwrócenie (filtr invert w 003/060 + paleta 025) 2) etap 3 md: F00–F09 3) N02 ← md v19.75/77 — pokrycie 4) N05 Wodorki — lekcja HTML 5) FIZ-01 zakres Nowa Era
Decyzje: strona startowa czyta CHE.LESSONS.registry (nowa lekcja pojawia się sama po L.register); ostatnia lekcja w localStorage che.lastLesson; wersja = manifest.version przez __CHE_APP_VERSION__
Znane błędy: patrz TODO 1
Sprawdzić ręcznie: strona startowa (dzień/noc, telefon), N04 (§13, §16)
Następny krok: tryb Noc w panelach albo etap 3 md F00–F09 / N05 Wodorki

Start nowego wątku: dołącz CHE_zrodla_v0_57.zip. Rozpakuj do /home/claude/che; `npm i -g acorn`; `export NODE_PATH=$(npm root -g)`; wynik: python3 build.py; skill che-silnik-lekcje.
