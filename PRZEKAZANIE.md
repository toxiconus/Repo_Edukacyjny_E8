# PRZEKAZANIE — całe repo · 2026-10-09

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

