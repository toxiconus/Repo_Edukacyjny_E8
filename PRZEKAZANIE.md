# PRZEKAZANIE — całe repo · 2026-10-09 (stan 09:00)

Jeden punkt startu dla każdej sesji. Szczegóły są w przekazaniach obszarów (niżej) — czytaj tylko ten, którego dotyczy zadanie.

## Gałęzie
- **`claude/che-lekcje` = gałąź zbiorcza.** 2026-10-08 scalone do niej: `claude/wizualizacje-projekty` (folder `wizualizacje-projekty/`), `claude/bio-lekcje` (`biologia/`), wcześniej `claude/chemia-podzial` i `claude/project-thread-71s81b` (zawarte w całości).
- Pozostałe gałęzie są już w `claude/che-lekcje` — nowe prace zaczynać od niej. Wyjątek: `claude/che-lab-archiwum-v0_57` (osobna historia, archiwum źródeł v0_57; nie scalać).
- `main` (@ae82cb8) — aktualizuje użytkownik przez PR `claude/che-lekcje` → `main` na github.com (push na `main` = 403).
- Płytki klon: po `git fetch` hook może fałszywie zgłaszać „unpushed commits” — `git fetch origin claude/che-lekcje:refs/remotes/origin/claude/che-lekcje` i `git branch -u origin/claude/che-lekcje`.

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
- **Znany błąd:** test chemii sporadycznie FAIL `N01_powietrze_i_gazy` (canvas `arc` z ujemnym promieniem) — sprzed tych zmian, do naprawy.

### Plan na następną sesję (ustalony z użytkownikiem 2026-10-09 04:20)
**Decyzja użytkownika: nowe lekcje pisać tylko w MD — HTML na razie nie.**
1. **Polski (priorytet):** Claude sam rozwija `polski/podstawy/` G04–G11 (części mowy), G12–G17 (składnia), S01–S06 (środki stylistyczne) do pełnych sekcji 0–12 jak w G01–G03: konkretne zadania z treścią, kluczem i punktacją CKE, przykłady z lektur obowiązkowych (bez Froda i postaci spoza lektur), pisownia wg reformy 2026, przecinek przed każdym zdaniem podrzędnym, `@opis` pod każdą wizualizacją. Zarys Groka jest w każdym pliku (sekcja „Zarys od Grok”) i surowo w `polski/plany/wypelnienia/`. Po napisaniu: `stan: WYPEŁNIONY — Claude, data; czeka na W1`, wiersz w `WERYFIKACJA.md`.
2. **Po polskim — md brakujących lekcji innych przedmiotów** (tylko md): angielski — moduły z oceny audytu (`angielski/plany/audyty/W1_ANGIELSKI_ocena_2026-10-09.md`: słuchanie, czytanie, funkcje językowe, przetwarzanie, wpis na blogu, used to/would, been/gone itd.); chemia — materiały wstępne J01–J06 i alkohole/kwasy/estry do weryfikacji.
3. Chemia: sporadyczny FAIL testu `N01_powietrze_i_gazy` (canvas `arc` z ujemnym promieniem).
4. Dług `@opis` (42): N05, FIZ01, R03 itd., biologia L010/REV01.
5. Otwarte decyzje użytkownika: korekta scalająca kursu polskiego (moduły wspólne + odsyłacze).

### Stan na 2026-10-09 07:20 (po pracy równoległej sesji)
- **Polski:** G01–G11 wypełnione w pełni (G04–G11 napisane przez Claude w osobnej sesji, commity f504cdf, c8c3dd4) — czekają na W1. **Do zrobienia:** G12–G17 (składnia) i S01–S06 (środki stylistyczne) — mają tylko zarys Groka (stan CZĘŚCIOWY). Tylko MD, bez HTML.
- **Chemia:** sporadyczny FAIL `N01_powietrze_i_gazy` naprawiony w commicie 7353649 (osłona canvas `arc`) — punkt 3 planu wyżej jest nieaktualny; potwierdzić testem `python3 tools/che.py test`.
- Pozostałe kroki planu bez zmian: md braków innych przedmiotów (angielski — moduły egzaminacyjne, chemia — weryfikacja J01–J06), dług `@opis`, decyzja o korekcie scalającej polskiego.
- `WERYFIKACJA.md` nie ma jeszcze wierszy dla G04–G11 — dopisać przy następnym kroku.

