# PRZEKAZANIE — całe repo · 2026-10-09 (stan 12:40)

Jeden punkt startu dla każdej sesji. Szczegóły są w przekazaniach obszarów (niżej) — czytaj tylko ten, którego dotyczy zadanie.

## Polski — lekcje wzorcowe (2026-10-10, wątek „wizualizacje/polski”)
- **G12 Części zdania v3.0** (`polski/podstawy/POL.02.G12.czesci_zdania.md` → `polski/html/`): pełny dialekt (minimum E8, warstwy, rdzeń, diagnoza, procedura, 5 części zdania z tabelami, klinika, ćwiczenia A/B/C z kluczami, zadania E8 z punktacją, test, fiszki, słownik, ściąga). Zachowane treści v2.1 po W1. Nowa biblioteka `polski/szablon/pol-viz.js` (katalog `POL_KATALOG_GRAFIK.md`), podpięta w `narzedzia/lekcja_html.py` (VIZ['pol']): `rozbior-zdania`, `wykres-zdania`.
- **Decyzja użytkownika:** grafiki w polskim tylko gdy konieczne (ćwiczenie, zależności) — nie ozdoby.
- **Uwaga:** gałąź `claude/polski-spis` (kanon v2, `narzedzia/spis_polski.py`, wstępne G12–G20, P01–P04, J01–J06 z Perplexity) **nie jest scalona** z tą gałęzią — tu jest inna organizacja plików (POL.NN.KOD). Do scalenia: kanon v2 + P/J jako nowe pliki w nowym nazewnictwie.
- **Następne:** G13–G17 tym samym wzorem (G13 i G14 mogą użyć `wykres-zdania`).

## Wizualizacje CHE — plan i stan (2026-10-09 17:30, wątek „wizualizacje”)
- **Ranking użycia:** karty doświadczeń GFX.rx (122 reakcje, 65 wstawek @zlewka w 11 lekcjach) ≫ tabela rozpuszczalności, układ okresowy (po 4) ≫ wskaźniki, równania jonowe, cząsteczki 3D, przewodnictwo (po 3). Luki: R03 (stężenia, rozpuszczalność) — 0 modeli; F02, F04, F05 — po 1.
- **Zrobione** (`engine/src/lekcja/rozszerzenia.js` §P i §R, silnik che-viz.js nietknięty): (1) karty doświadczeń w probówce w łapie statywu (`stand`), ogrzewanie — probówka ~45° w uchwycie nad palnikiem (`burner`), parownica na trójnogu z siatką (`burner`+`tripod`+`evapDish`), duże doświadczenia w zlewce, przełącznik zlewka/probówka; aliasy `testTube/tube/evapDish`; (2) pracownia `odparowanie-v01` (NaCl, CuSO₄) → F03; (3) R03: `r03-krzywe-v01` (krzywe rozpuszczalności, nasycenie, krystalizacja) i `r03-stezenie-v01` (zlewka 500 mL + pasek mas, rozcieńczanie/zatężanie, nadmiar); (4) stara `testTube` silnika z brzegiem i refleksem (spójny wygląd scen). Test 15/15 przy 1280 i 390 px.
- **18:15:** F04 — trening `f04-nuklid-v01` (zapis nuklidu → p, n, e; model `atomBohr` po sprawdzeniu), wstawiony do lekcji. Sprawdzone bez zmian: `molecule3d-merged` CH₃COOH ma wszystkie 4 H (wcześniej zasłonięte przy obrocie); `kw-reszty-v01` i `tabela-rozpuszczalnosci-v01` biorą R/T/N z tej samej tabeli `CHE.IONIC` — zgodne.
- **18:50 — 5 nowych wizualizacji:** CHE F02 `f02-czastki-v01` (model cząsteczkowy: pierwiastek / związek / mieszanina jednorodna / niejednorodna, 8 próbek, m.in. woda z lodem); BIO (`biologia/bio/szablon/bio-viz.js`, osobny blok na końcu, `BIO_KATALOG.md`): REV01 `fotosynteza-oddychanie`, `energia-glukozy`, `proba-kontrolna`; REV02 `klucz-kregowce`. Test CHE F02 OK (1280/390), BIO 3/3 OK.
- **19:15:** REV01 ma 7 grafik — wstawione `mikroskop-model`, `komorka-nakladki`, `transport-blona` (z @opis); poprawki: tekst panelu `.bv-info` (zlepione zdania, pogrubienia łamały wiersz), etykieta ATP→ADP ucięta, tabela transportu przewijana na telefonie, większe napisy i układ słupków pod telefon (`energia-glukozy`, `fotosynteza-oddychanie`). ATP ok. 38 — szkolne/orientacyjne (do W1).
- **19:40:** REV02 — `wirus-bakteria` (§3) i `przeobrazenie-plaza` (§8.2); panel informacji w nowych grafikach: tytuł w osobnym wierszu, zdania w osobnych liniach.
- **Następne:** REV02 — porównanie roślin (mszaki → paprotniki → nagonasienne → okrytonasienne: tkanki przewodzące, korzeń, nasiona, kwiat, owoc); przeobrażenie zupełne i niezupełne owadów (§7).

## ⚑ KONIEC WĄTKU „silnik/atlas” (2026-10-09 17:00) — równolegle pracuje drugi wątek
- **Drugi wątek nadal działa** na tej samej gałęzi (`claude/che-lekcje`): zawsze `git pull --rebase --autostash` przed pracą i przed push; nie nadpisywać jego plików bez sprawdzenia `git log`.
- **Zrobione w tym wątku (12:28–17:00):** wgrane paczki LLM (BIO L004–L021, CHE 35 lekcji Groka + K02–K11, A01; J00–J06 scalone z W22); dług `@opis` = 0; paczka W1 dla 42 lekcji Groka (`eksport/w1_paczka.py`, wysłana — czeka na odpowiedź Perplexity); spisy `SPIS_WSZYSTKICH.md` + `polski/SPIS_LEKCJI_POLSKI.md`; F05 na wspólnym `atomBohr` (powłoki + lupa), `atomSVG` usunięty; **odchudzanie silnika zakończone** — 15/15 profili, lekcje 1,19–1,45 MB (razem 19,4 MB, było ~45), test 15/15, atlas 89/18 bez zmian; pomiar CSS (`test_lekcje.cjs --css= --szer=`): działa ~120 KB z 355 KB arkuszy.
- **Następne kroki silnik/atlas:** (1) N02 przy 1280 px — 3 modele puste (`n02-zobojetnianie-v01`, `n02-reaktor-v01`, `n02-stracanie-v01`), na 390 px OK; (2) bank widżetów DOM (46 KB) tylko z widżetami lekcji; (3) cięcie CSS po plikach/regułach z porównaniem zrzutów (wzorzec jak w atlasie); (4) dublowanie z §6 `chemia/che-modular/PRZEKAZANIE.md` — konfiguracja elektronowa liczona w kilku miejscach (do jednego źródła); (5) po każdej zmianie silnika: `che.py silnik` → `lekcje` → `test` (+ `atlas --sprawdz`).

## ⚑ PRZEKAZANIE DLA NOWEGO WĄTKU (2026-10-09 15:07)
- Odchudzanie silnika zakończone 16:55 (15/15 profili, lekcje 1,19–1,45 MB, test 15/15) — `chemia/che-modular/` znów wolne. Przed push: `git pull --rebase`.
- Po klonie (płytki klon pobiera tylko `main`): `git config --add remote.origin.fetch '+refs/heads/claude/che-lekcje:refs/remotes/origin/claude/che-lekcje' && git fetch origin && git branch -u origin/claude/che-lekcje`.
- Start: `CLAUDE.md`, ten plik (sekcje 2026-10-09), `SPIS_WSZYSTKICH.md` (podsumowanie + „Tematy planowane”).
- Stan: spisy `SPIS_WSZYSTKICH.md` (`narzedzia/spis_wszystkich.py`), `polski/SPIS_LEKCJI_POLSKI.md` (`narzedzia/polski_paczka.py` + zip). Polski: 47 lekcji, brak planu kursu (tylko mapa POL-01…39 w `olimpiada/OLIMPIADA_8_MASTER.md`); luki bez lekcji: lektury VII–VIII, słowotwórstwo, frazeologia, semantyka, gatunki, interpretacja wiersza, esej; do porównania pisownia „nie” przy przeciwstawieniu (master vs G06/L001, RJP 2026: zawsze łącznie). Biologia: 36 lekcji bez niezależnego W1 (tylko audyty GPT-6 w plikach). Chemia kanon: 42 lekcje Groka czekają na W1 (`eksport/w1_paczka.py` → odpowiedź `narzedzia/audyt_do_kanonu.py`). Angielski: z 13 lekcji mastera tylko 6 w osobnym md; moduły do dodania w `angielski/plany/audyty/W1_ANGIELSKI_ocena_2026-10-09.md`.
- Chemia F05: rysunek atomu przez wspólny `atomBohr` (powłoki K, L, M + lupa jądra), `atomSVG` usunięty; atlas 89/18 bez zmian.

## Gałęzie
- **`claude/che-lekcje` = gałąź zbiorcza.** 2026-10-08 scalone do niej: `claude/wizualizacje-projekty` (folder `wizualizacje-projekty/`), `claude/bio-lekcje` (`biologia/`), wcześniej `claude/chemia-podzial` i `claude/project-thread-71s81b` (zawarte w całości).
- Pozostałe gałęzie są już w `claude/che-lekcje` — nowe prace zaczynać od niej. Wyjątek: `claude/che-lab-archiwum-v0_57` (osobna historia, archiwum źródeł v0_57; nie scalać).
- `main` (@ae82cb8) — aktualizuje użytkownik przez PR `claude/che-lekcje` → `main` na github.com (push na `main` = 403).
- Płytki klon: hook fałszywie zgłasza „unpushed commits”, bo klon pobiera tylko `main`. Raz po sklonowaniu: `git config --add remote.origin.fetch '+refs/heads/claude/che-lekcje:refs/remotes/origin/claude/che-lekcje' && git fetch origin && git branch -u origin/claude/che-lekcje`. Repo przeniesione: `https://github.com/toxiconus/Repo_Edukacyjny_E8.git`.

## Obszary
| Obszar | Przekazanie | Stan w skrócie |
|---|---|---|
| Chemia — silnik, lekcje F/N, atlas | `chemia/che-modular/PRZEKAZANIE.md` (+ `PROGRESS.md`) | 12 lekcji (F01–F06, N01–N05, FIZ01), test 12/12. Dane CHE.DATA w `engine/src/dane/` (krok 1a–1b), profil per lekcja (F04 1,13 MB; reszta do zrobienia), warstwa `engine/src/dodatki/` (atlas-gfx: `atomBohr`, `orbitalCloud`; atlas rysuje chmurę komponentem), spis dublowania §6. |
| Wizualizacje dla lekcji bez grafik | `wizualizacje-projekty/PRZEKAZANIE.md` | `PROJEKT.md` (CHE F06–F21, BIO, FIZ) + `wzorcownia.html` (9 prototypów). Czeka na akceptację użytkownika. |
| Biologia | `biologia/bio/PRZEKAZANIE.md` | L010 gotowa (bio-viz.js, build `md2html_bio.py`, test `sprawdz_bio.js`); następna L011. |
| Olimpiada 8 / klasa 8 (projekt przełączany: chemia, biologia, polski, matematyka + OLI) | `olimpiada/PRZEKAZANIE.md` | **Priorytety i terminy konkursów LKO: `olimpiada/PRIORYTETY.md`.** Etapy szkolne chemii i biologii pokryte lekcjami (2026-10-08); następne: audyt REV01/REV02/N01/R03 na arkuszach (w toku), szkielety do uzupełnienia danymi w `olimpiada/do_uzupelnienia/` i `polski/do_uzupelnienia/`. |

## Decyzje użytkownika (wspólne)
- Zero utraty danych starego silnika — dzielić i ulepszać, nie wyrzucać; nowe rzeczy jako komponenty wielokrotnego użytku + wpis w katalogu.
- Lekcje F tylko na polecenie, po jednej (ostatnio F06, 2026-10-08 17:36).
- Dane niepewne oznaczać „do weryfikacji”.
- (2026-10-09) Każda wizualizacja/obraz ma opis `@opis` w md → ukryty komentarz w HTML; build egzekwuje (`narzedzia/opis_wizualizacji.py`). Eksport do Perplexity: `python3 eksport/zbierz_lekcje.py`.

## Spisy (2026-10-09 15:00) — jeden punkt wejścia
- `SPIS_WSZYSTKICH.md` (`python3 narzedzia/spis_wszystkich.py`): podsumowanie per przedmiot (tematy w planie, pliki lekcji, KB, weryfikacja W1+ / tylko audyt w pliku / brak), tabele lekcji z kolumnami rozmiar i weryfikacja (stan/status lekcji, a gdy brak — rejestr `WERYFIKACJA.md`), osobno **„Tematy planowane — to nie są lekcje”**: CHE kanon + mapa OLI, BIO kanon + mapa OLI, POL mapa OLI z ręcznym pokryciem (brak planu kursu; luki: lektury VII–VIII, słowotwórstwo, frazeologia, semantyka, gatunki, interpretacja wiersza, esej), ANG master L001–L012 + D2 + moduły z W1, MAT i OLI.
- Polski szczegółowo: `polski/SPIS_LEKCJI_POLSKI.md` + paczka `python3 narzedzia/polski_paczka.py` (zakres, stan, KB, luki).

## Sesja 2026-10-09 (12:28–12:40) — wyniki paczki braków wgrane — STAN AKTUALNY
- **Wgrane (commity f20b55d, 8ed4b0f):** 5 paczek BRAKI (L004, L005–L007, L008–L010, GENETYKA; L004 przyszła 3× identycznie) + 2 paczki Grok. Pliki bazowe paczek nie zmieniły się w repo od 504ac8d, więc kopia nowszej wersji = wynik scalenia trójstronnego. Pliki identyczne z repo pominięte (polski G/S, angielski, olimpiada, audyty Perplexity, F18–F21, O08+O11+O12, CHE_SPIS — paczki ich nie zmieniły, więc A3/B część/C/D/E z `ZADANIA.md` dalej otwarte).
- **BIO:** L004–L010, L013, L016A, L018–L021 pogłębione (GPT-6, ostatnia paczka = nadzbiór poprzednich). L013: replikacja przed mitozą i przed mejozą I, nie między I i II. L004: zachowany stary blok „AUDYT W1”.
- **CHE nowe (Grok W23/W24):** N07–N08, R01/R02/R06, J07–J12, O09/O10/O14/O21/O24/O25, E01–E06, K01–K11 (K01 W24 ~22 KB, reszta krótsze W23), A01. Wartości Ka/Ksp/E°/Vₘ u Groka oznaczone jako orientacyjne — **bez niezależnej recenzji (W1 do zrobienia)**.
- **J00–J06 — kolizja:** Grok napisał od nowa i nie zachował materiału W1–W22 (wbrew swojemu RAPORT). Scalenie: lekcja Groka jako treść główna + sekcja „MATERIAŁ ŹRÓDŁOWY I HISTORIA AUDYTÓW (W1–W22)” bez skracania + notka „SCALENIE — Claude”. Do zrobienia: sprawdzić, czy uwagi W22 są w treści głównej, potem odchudzić.
- **Spis CHE:** 113 kodów, ○○○ (brak materiału) 18 → 11: zostały A02–A06, P01–P06; RT00–RT10 (A4) też nie ruszone.
- **Testy:** odwołanie w CLAUDE.md poprawione (testy: `che.py test`, `sprawdz_bio.js`); chemia 15/15 OK. BIO: `md2html_bio.py` + `sprawdz_bio.js` OK.
- **13:00–14:19:** J00–J06 przegląd — brakujące uwagi W22 dopisane (J00, J01, J03). Paczka W1 dla 42 lekcji Groka: `python3 eksport/w1_paczka.py` → `eksport/out/W1_CHEMIA_1..3.md` (wysłana użytkownikowi jako zip; odpowiedź wgrać `narzedzia/audyt_do_kanonu.py`). Odchudzanie silnika per lekcja — stan w `chemia/che-modular/PRZEKAZANIE.md` §5 pkt 2 (wstrzymane, zostało 7 lekcji).
- **Następne kroki:** (a) W1 nowych lekcji chemii Groka; (b) przegląd J00–J06 po scaleniu; (c) A02–A06, P01–P06, RT00–RT10; (d) angielski moduły, polski W2, olimpiada OLI.* (z `ZADANIA.md` — LLM ich nie zrobił); (e) ~~dług `@opis`~~ — wyzerowany 12:55 (BIO L010, REV01, CHE N05, FIZ01; `opis_dlug.json` pusty). Zrobione też: odwołania testów w CLAUDE.md, `stan:` „W1 nieprzeprowadzony” w 42 lekcjach Groka.

## Sesja 2026-10-09 (08:25–09:15) — paczka W23, grafiki L001, audyty BIO, kolizje CHE
- **Paczka W23 (GPT-6) scalona trójstronnie** pod nazwy `PRZ.NN.KOD` (119 plików, 13 nowych audytów); raport i odrzucenia: `paczki/W23_2026-10-09/AUDYT_SCALENIA_Claude.md`. Zasada: paczek z zewnątrz nigdy nie kopiować na repo — scalać (`git merge-file` z bazą z historii), bo budowane są na starszym stanie.
- **Pisownia „nie” (RJP od 1.01.2026):** z przymiotnikami, imiesłowami przymiotnikowymi i przysłówkami odprzymiotnikowymi zawsze łącznie, także przy przeciwstawieniu; CKE 2026–2030 uznaje też zapis dawny. Klucze w G06/G07 według tego.
- **BIO:** grafiki `komorka-nakladki` i `mikroskop-model` (bio-viz, L001); zalecenia audytów W15/W16/W18 wprowadzone do treści L014–L044 (L018 najszerzej).
- **CHE:** znaczniki „✔ wprowadzone” w kanonach → jedna notka na sekcję; decyzje noty kolizji: kolumna `status` w spisie (`spis_tresci.py` naprawiony), treść ponad E8 → `[[extra:ZAAWANSOWANY]]` w lekcji, powtórki tematyczne = RT00–RT10.
- **Paczka braków dla LLM:** `PACZKA_BRAKI_2026-10-09.zip` (wysłana użytkownikowi; instrukcja `ZADANIA.md` w środku). Wyniki wgrywać scalaniem jak W23.
- **Spis wszystkich przedmiotów:** `SPIS_WSZYSTKICH.md` (kod, tytuł, notka o treści, plik) — generator `python3 narzedzia/spis_wszystkich.py`; uruchamiać po zmianach lekcji. Spis chemii z kolumną status: `cd chemia && python3 plany/narzedzia/spis_tresci.py`.
- **Następne kroki:** (a) wgrać wyniki paczki braków; (b) modele silnika w kanonie chemii; (c) dług `@opis` (42); (d) korekta scalająca kursu polskiego (decyzja użytkownika).

## Sesja 2026-10-09 (rano, 07:20–09:00) — szablon wspólny, porządek, nazwy — STAN AKTUALNY
- **Wspólny szablon HTML dla wszystkich przedmiotów:** `szablon/` (baza z CHE + `ulepszenia.css` + `motywy/che|bio|pol|ang|oli.css` + `lekcja.js`), opis `szablon/README.md`, podgląd `szablon/podglad/`. Pasek z postępem czytania, spis z aktywną sekcją (na telefonie zwinięty), tryb ciemny, druk; komponenty: mity, drzewo, cytat, dialog, słówka, klinika; przedmiotowe: `div.rownanie` (che), podkreślenia części zdania `z-pod/z-orz/z-prz/z-dop/z-oko` (pol), `wzor`/`en`/`ipa` (ang), `poz-2..4`/`zad-konk` (oli), grafiki `@viz` z bio-viz (bio).
- **Build:** jedna lekcja `python3 narzedzia/lekcja_html.py -p <przedmiot> plik.md`; wszystkie `python3 narzedzia/zbuduj_wszystkie.py` → `polski/html/` (47), `biologia/html/` (36), `chemia/html/` (45 kanon), `angielski/html/` (6), `olimpiada/html/` (10); każdy z `index.html`. BIO `dist/` też przez szablon. Test 144 lekcji w 390 px: 0 problemów. **Gotowe lekcje chemii z modelami (15) nadal buduje `chemia/che-modular/tools/md2html.py`** (silnik che-viz).
- **Nazwy plików:** `PRZ.NN.KOD.slug.md` (zasada w `CLAUDE.md` → „Nazwy plików lekcji”). Narzędzia zaktualizowane (zbuduj_wszystkie, zbierz_lekcje, szkielety_polski).
- **Dawne ręczne HTML → md** (`narzedzia/html_do_md.py`): polski L001–L006 → `polski/lekcje_md/`, angielski L002–L006, L012 → `angielski/lekcje_md/`, biologia L001, L003, L015 (pełne lekcje; dawne zarysy dołączone na końcu jako „do scalenia”, oryginały w `biologia/md/archiwum/`). Stare HTML: `<przedmiot>/archiwum/lekcje_html_stare/`. Odpowiedzi z dawnych skryptów (pola, listy, testy JS) odzyskane.
- **GFX:** biologia — 26 grafik bio-viz w lekcjach (dodane w L001, L005, L011, L015, L017–L020, L041); „komorka-nakladki” i „mikroskop-model” w bio-viz (L001, 2026-10-09). Chemia: kanon (45) bez grafik — dodać modele przy budowie lekcji gotowych. Polski/angielski/olimpiada: bez grafik.
- **Polski:** paczka v3 i v4 wgrane (G01–G17, S01–S06 rozbudowane; L007–L011, blok D; audyty L001–L011, G, S, D). Audyt Claude paczki v4: `polski/plany/audyty/AUDYT_Claude_paczka_v4_2026-10-09.md`. Przywrócona informacja o okresie przejściowym CKE 2026–2030 (pisownia „nie”) w L004 i G03 (źródła prasowe, [do weryfikacji w komunikacie CKE]); L006 — narracja wspomnieniowa. Układ: `lekcje_md/`, `podstawy/`, `do_uzupelnienia/`, `blok_D/`, `archiwum/`.
- **Chemia:** surowe audyty W1 Perplexity X/E/K/A/P/LAB/REV + audyt końcowy w `chemia/plany/audyty/`, nota kolizji numeracji `W1_perplexity_NOTA_kolizje_2026-10-09.md` — **nie scalone; decyzje użytkownika:** (1) rejestr statusów, (2) treść ponad E8 → OLIMPIADA czy rozszerzenie, (3) nowa numeracja REV.
- **Paczka zadań dla LLM:** `PACZKA_do_poprawy_2026-10-09_v2.zip` (wysłana użytkownikowi; 137 md + `ZADANIA.md`, grupy A–K). Odpowiedzi wgrywać tak jak paczki polskiego: porównać z poprzednią wersją, wgrać tylko zmienione pliki, ścieżki dopasować do nowych nazw.
- **Następne kroki:** (a) wgrać wyniki paczki zadań; (b) decyzje do noty kolizji chemii; (d) modele silnika w kanonie chemii; (e) oczyścić notatki robocze w starszych md biologii (np. „WARSTWA WIZUALNA — specyfikacja”), które w HTML widać jak treść; (f) W1 dla polskiego G/S/L007–L011/D i biologii (nigdy nie audytowana).

## Sesja 2026-10-09 (noc) — eksport, weryfikacja W1, polski
- **Eksport do LLM:** `python3 eksport/zbierz_lekcje.py` → `eksport/out/PERPLEXITY_<PRZEDMIOT>.md` (prompt + wszystkie lekcje, znacznik [W1] przy zweryfikowanych). Rejestr weryfikacji: `WERYFIKACJA.md` (W1 = treść zapisu, W2 = zakres — jeszcze nie robiony; na końcu „Wnioski przekrojowe”).
- **Zasada @opis** (każda wizualizacja ma opis w md → komentarz w HTML) egzekwowana w buildach CHE i BIO (`narzedzia/opis_wizualizacji.py`, dług `narzedzia/opis_dlug.json`, zostało 42 — N05, FIZ01, R03?, BIO).
- **Chemia W1:** F01–F06, N01 powietrze, N01–N04, R03, REV01 — wprowadzone do lekcji gotowych (+@opis); F07–F21, R04–R09, O, REV02, LAB, X04/J03/R07 — sekcje „AUDYT W1” w kanonie (`chemia/lekcje_md/`, `olimpiada/do_uzupelnienia/`); J01–J06 i alkohole/kwasy/estry — materiał wstępny od Perplexity (czeka na W1). Narzędzia: `narzedzia/audyt_do_kanonu.py`, `narzedzia/latex2uni.py`.
- **Polski W1:** poprawione potwierdzone błędy L002–L005; ocena `polski/plany/audyty/W1_POLSKI_ocena_2026-10-09.md` (odrzucone nieaktualne zasady „nie” — reforma 2026). **Decyzja użytkownika otwarta:** korekta scalająca kursu polskiego (moduły wspólne + odsyłacze).
- **Angielski W1:** poprawki D1/D2/L008/L010; ocena `angielski/plany/audyty/W1_ANGIELSKI_ocena_2026-10-09.md`.
- **Polski — priorytet:** szkielety lekcji podstawowych `polski/podstawy/` (G01–G17 części mowy i składnia, S01–S06 środki stylistyczne), generator `narzedzia/szkielety_polski.py`, paczka dla LLM `eksport/out/DO_WYPELNIENIA_PL_podstawy.md` (zawiera tylko puste). G01–G03 wypełnione przez Grok i przejrzane (poprawki opisane na końcu plików). G04–G17 i S01–S06: od Grok przyszły tylko zwarte zarysy (bez ćwiczeń i kluczy) — wstawione jako sekcja „Zarys” (stan CZĘŚCIOWY), paczka nadal je zawiera do pełnego rozwinięcia. **Następny krok:** wypełnić G04–G17 i S01–S06 w innym LLM (po 2–4 lekcje), przejrzeć jak G01–G03, potem W1; potem ewentualnie build HTML dla polskiego (nowy skrypt musi wołać `OPIS.egzekwuj()`).
- ~~Znany błąd: sporadyczny FAIL `N01_powietrze_i_gazy` (canvas `arc`)~~ — naprawione osłoną w `engine/src/lekcja/rozszerzenia.js` (§12); test 15/15 OK 2026-10-09 12:45.

### Plan na następną sesję (ustalony z użytkownikiem 2026-10-09 04:20)
**Decyzja użytkownika: nowe lekcje pisać tylko w MD — HTML na razie nie.**
1. **Polski (priorytet):** Claude sam rozwija `polski/podstawy/` G04–G11 (części mowy), G12–G17 (składnia), S01–S06 (środki stylistyczne) do pełnych sekcji 0–12 jak w G01–G03: konkretne zadania z treścią, kluczem i punktacją CKE, przykłady z lektur obowiązkowych (bez Froda i postaci spoza lektur), pisownia wg reformy 2026, przecinek przed każdym zdaniem podrzędnym, `@opis` pod każdą wizualizacją. Zarys Groka jest w każdym pliku (sekcja „Zarys od Grok”) i surowo w `polski/plany/wypelnienia/`. Po napisaniu: `stan: WYPEŁNIONY — Claude, data; czeka na W1`, wiersz w `WERYFIKACJA.md`.
2. **Po polskim — md brakujących lekcji innych przedmiotów** (tylko md): angielski — moduły z oceny audytu (`angielski/plany/audyty/W1_ANGIELSKI_ocena_2026-10-09.md`: słuchanie, czytanie, funkcje językowe, przetwarzanie, wpis na blogu, used to/would, been/gone itd.); chemia — materiały wstępne J01–J06 i alkohole/kwasy/estry do weryfikacji.
3. ~~Chemia: FAIL `N01_powietrze_i_gazy`~~ — naprawione (osłona `arc`).
4. Dług `@opis` (42): N05, FIZ01, R03 itd., biologia L010/REV01.
5. Otwarte decyzje użytkownika: korekta scalająca kursu polskiego (moduły wspólne + odsyłacze).

### Stan na 2026-10-09 07:20 (po pracy równoległej sesji)
- **Polski:** G01–G11 wypełnione w pełni (G04–G11 napisane przez Claude w osobnej sesji, commity f504cdf, c8c3dd4) — czekają na W1. **Do zrobienia:** G12–G17 (składnia) i S01–S06 (środki stylistyczne) — mają tylko zarys Groka (stan CZĘŚCIOWY). Tylko MD, bez HTML.
- **Chemia:** sporadyczny FAIL `N01_powietrze_i_gazy` naprawiony w commicie 7353649 (osłona canvas `arc`) — punkt 3 planu wyżej jest nieaktualny; potwierdzić testem `python3 tools/che.py test`.
- Pozostałe kroki planu bez zmian: md braków innych przedmiotów (angielski — moduły egzaminacyjne, chemia — weryfikacja J01–J06), dług `@opis`, decyzja o korekcie scalającej polskiego.
- `WERYFIKACJA.md` nie ma jeszcze wierszy dla G04–G11 — dopisać przy następnym kroku.

