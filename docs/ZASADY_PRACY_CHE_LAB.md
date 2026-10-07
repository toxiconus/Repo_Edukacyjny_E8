# ZASADY PRACY — projekt CHE_lab (silnik + atlas + lekcje) · v2

> Zasady pracy z Claude (nadrzędne): `docs/INSTRUKCJE_PROJEKTU.md` (wklejone do instrukcji projektu). Ten plik to opis techniczny bazy: build, struktura, warstwy.

> Cel: małe części, jeden wynikowy HTML, minimum tokenów, zero utraty treści.
> Podstawa pracy razem ze skillem `che-silnik-lekcje` (skill = technika, ten plik = umowa i procedura).
> Źródłem prawdy o stanie jest `STATE.md`, a o zmianach dla użytkownika — `ZMIANY.md`.

---

## 0. Fakty (stan v0_51, 2026-10-07)

- Wynik: `out/CHE_lab_wizualizacje_v0_51_GFX16.html` — 3,4 MB, 30 tys. linii, 80 `<script>` (42 z `id`), 33 `<style>`, 87 widoków `CHE.VIEW`, 5 lekcji (N01, N02, N03, N04, FIZ-01). Nigdy nie czytany ani wysyłany do rozmowy w całości.
- Drugi wynik: `out/CHE_biblioteka_v0_07.html` (podgląd GFX) + `out/CHE_GFX_blok_v1_7.js`.
- **Build (od v0_52, etap 2 zrobiony):** `manifest.json` (212 kawałków) → `build.py` skleja: `modules/base/*` (151 plików bazy, każdy ≤ 1400 linii) + `src/*` (32 pliki: silniki, dane, widoki, atlas) + blok GFX (`src/p*`, `x_*` wg `gfx_order`) + lekcje (`lesson/*_new.html` jako JSON) → `tools/prune.js` → `tools/clean.js`. Wynik bajtowo zgodny z dawnym buildem (sprawdzone). Upload v0_30 i `patch_big.py` nie są już potrzebne (archiwum: `tools/legacy/`).
- Kanon treści chemii (od v19.90, etap 3): edytujemy `sources/chemia/CHE.core.md` + pliki lekcji `sources/chemia/lekcje/<uid>.md` (spis: `lekcje/INDEX.md`); pełny `CHE.all.vXX.md` składa `tools/md_assemble.py` (bajtowo sprawdzone). Wydzielanie kolejnych lekcji: `tools/md_split.py` (lista PARTS).
- **Kody lekcji:** krótki kod w panelu (N01, N02, N03 Kwasy, N04 Sole; FIZ-01 fizyka) + pełny `uid` = PRZEDMIOT.GRUPA.KOD.temat, np. `CHE.02.N01.tlenki` (grupy chemii: 01 F fundamenty klasy 7, 02 N nieorganiczna, 03 R, 04 J, 05 O, 06 X, 07 E, 08 K, 09 A, 10 P); fizyka `FIZ.01.01.elektrostatyka`. F00–F09 = fundamenty chemii, nie fizyka. Rejestr: `L.register(kod,{code,uid,…})`, `CHE.LESSONS.byUid`. Źródła lekcji HTML: `sources/chemia/CHE.N01…`, `CHE.N02…`.
- Praca toczy się w kontenerze chmurowym: pliki żyją do końca sesji. Nowa sesja = rozpakowanie `CHE_zrodla_v0_NN.zip` (zawiera `modules/`, `manifest.json`, `src/`, `lesson/`, `docs/`) + `sources/` tylko do pracy nad treścią lekcji.

## 1. Złota zasada

**Edytujemy małe pliki źródłowe. Duży HTML to wyłącznie produkt builda.** Liczby tylko z silnika (`CHE.DATA`, `CHE.PHYS`, `CHE.OXIDES`, `CHE.HYDROXIDES`, `CHE.FIZ.*`…); lekcje, Atlas i widoki je czytają, a audyt `CHE.CONSISTENCY` pilnuje zgodności.

## 2. Struktura — stan obecny i cel

```
che/
  docs/ZASADY_PRACY_CHE_LAB.md   ← ten plik
  docs/STATE.md                  ← stan (max 150 linii) — czytam na starcie
  docs/ZMIANY.md                 ← dla użytkownika: co zmieniono w każdej wersji
  docs/INDEX_KODU.md             ← (cel) sygnatury modułów/API/widoków, generowany
  PROGRESS.md                    ← dziennik kroków = ARCHIWUM (nie czytam w całości)
  manifest.json                  ← kolejność składania (generuje tools/split.py; dalej edytowany ręcznie przy nowym module)
  build.py                       ← build: --lessons (buildery lekcji), --data (generatory), --check
  modules/base/                  ← baza (dawny v0_30 po łatkach), pocięta wg <script>/<style>, ≤ 1400 linii
  src/                           ← moduły: silniki (oxides, hydroxides, stoich, fiz_elektro, ionic),
                                    dane (d_*.js + generatory gen_*.py), GFX (p*, x_*), widoki (v_*.js),
                                    atlas (atlas_*), audyt (consistency.js), hub, viz_retire
  lesson/                        ← buildery lekcji (*_build.py, lesson_lib.py) → *_new.html; md_*_sync.py → kanon md
  sources/chemia/                ← kanon md + źródłowe HTML lekcji (tylko odczyt)
  tools/                         ← prune.js, clean.js, analizy
  test/                          ← Playwright: aud, dump, n2, lesl, ts, atltabs, fl, …
  out/                           ← wyniki (nie edytować); zip źródeł co wersję
```

**Etap 2 zrobiony (v0_52):** zmiany w bazie to zwykłe edycje plików `modules/base/*` (znajdziesz je w `docs/INDEX_KODU.md`: API `CHE.*` → kawałek, widok → kawałek). Nowy moduł: plik w `src/` + wpis w `manifest.json` w odpowiednim miejscu. Dalszy krok porządkowy: nazwy folderów jak w propozycji (`00_boot … 60_lessons`) i stałe usunięcie z bazy kodu wycofanych widoków (dziś robi to `prune.js` przy każdym buildzie).

### Zasady składania
1. Jeden plik w `src/` = jeden `<script id="…">` / `<style id="…">` albo jedna część bloku GFX.
2. Kolejność tylko z `manifest.json` (blok GFX: `gfx_order`).
3. Moduł 200–1500 linii; większy dzielimy przy najbliższej edycji.
4. Dane w osobnych plikach generowanych skryptami (`gen_*.py`), z assertem bilansu i kontrolą kolizji kluczy.
5. Po każdej zmianie: build → testy → dopiero nowa wersja `v0_NN+1` (poprzednia zostaje).
6. Nowy widok = `CHE.VIEW.define`; stary widok → `viz_retire.js` (mapa stary → następca), kod usuwa `prune.js`.
7. Tekst wstawiany do HTML — przez funkcję escapującą (`esc`/`DOM.esc`).
8. Przed dopisaniem modułu: grep, czy nazwa/API już istnieje (pułapka: `CHE.STOICH` 2.17 ≠ nowe `CHE.STECH`).

## 3. STATE.md, ZMIANY.md, PROGRESS.md — kto co czyta

| Plik | Dla kogo | Zawartość | Limit |
|---|---|---|---|
| `STATE.md` | Claude (start sesji) | wersja, moduły i kontrakty, decyzje, TODO (≤ 10), znane błędy, ostatni wynik testów | 150 linii, aktualizuję tylko zmienione sekcje |
| `ZMIANY.md` | użytkownik | dla każdej wersji: co zmieniono merytorycznie, co poprawiono (błędy), wynik testów, co sprawdzić ręcznie, lista plików | najnowsza wersja na górze |
| `PROGRESS.md` | archiwum techniczne | szczegółowy dziennik kroków | nie czytany domyślnie |

**Odpowiedź na czacie = 2–4 zdania + odesłanie do `ZMIANY.md`.** Szczegóły zmian nie idą do czatu (oszczędność tokenów w każdej kolejnej odpowiedzi). `ZMIANY.md` wysyłam razem z wynikiem; `STATE.md` i `PROGRESS.md` zapisuję w projekcie (`CHE/…`), bez wysyłania.

## 4. Lekcje

**Stan:** lekcje są HTML-ami budowanymi skryptami z plików źródłowych (`n01_build.py`, `n02_build.py`, `kw_build.py`, `sole_build.py`, `fiz_elektro_build.py`), wstawianymi jako JSON i rejestrowanymi `L.register('KOD',{subject,visuals,…})`. Kanon treści chemii to jeden md 2,3 MB.

**Reguły (obowiązują już teraz):**
- Treści nie usuwamy: błąd → poprawione zdanie; poziom ponad LO → `<details class="adv">`. Po każdej przebudowie lekcji — diff zdań źródło ↔ wynik (zostać mogą tylko instrukcje UI i zdania poprawione).
- Widgety wbudowane w lekcję → przyciski do widoków silnika; jeden model = jedno miejsce w lekcji; doświadczenia → jedna pracownia lekcji.
- Liczby/barwy/równania w lekcji oznaczone (`data-rx`, `data-hy`, `data-ox`, `data-fiz…`) i sprawdzane audytem `LES-<kod>-*`.
- md ↔ HTML zawsze na plus: po zmianie lekcji sekcja SYNC do kanonu md (`md_<lekcja>_sync.py`), nowa wersja md +0.01.
- Bez emoji w lekcjach i UI.

**Cel (etap 3–4):** jedna lekcja = jeden plik md z nagłówkiem (`id, przedmiot, poziom, wymaga, widoki, status, wersja`) w `lessons/<przedmiot>/`, `lessons/INDEX.md` jako jedyny spis czytany przez Claude, kompilator md → JSON i wspólny runner lekcji. Kanon `CHE.all` rozcinamy na pliki lekcji (N01.md, N02.md, …) — to największa oszczędność tokenów przy pracy nad treścią. Istniejące lekcje HTML przechodzą na md stopniowo, gdy są edytowane.

## 5. Architektura warstw

| Warstwa | Dziś | Uwagi |
|---|---|---|
| Silnik naukowy | `CHE.DATA`, `CHE.REACTION`, `CHE.IONIC`, `CHE.OXIDES`, `CHE.HYDROXIDES`, `CHE.STECH`, `CHE.PHYS` (+ `electro`), `CHE.FIZ.ELEKTRO`, `CHE.COLORS`, GFX (`rx`, `ions`, `electro`, `sim.ParticleSim`) | chemia i fizyka wspólnie (stałe, jądro, energie); każdy dział ma `audit()` |
| Atlas | zakładki pierwiastka, `atlas_visual.css`, `atlas_rx_list.js` | tylko czyta silnik |
| Runner lekcji | panel Lekcje wg przedmiotów (`hub_przedmioty.js`), pełny ekran z uruchamianiem skryptów lekcji | wspólny dla przedmiotów |
| Biologia | — | osobne dane `data/bio`, ten sam shell; nie rozbudowywać chemii na siłę |
| Języki | — | osobny wynik `jezyki.html`: runner + fiszki/quizy/audio, bez silnika naukowego |

## 6. Oszczędzanie tokenów — co faktycznie działa

- Duże pliki: tylko `grep -o`/`grep -n | cut -c1-200`, wycinki python; źródła lekcji czytam jako wyciągnięty tekst (bez skryptów, SVG, sekcji audytu).
- Edycje: skrypt python z `assert count==1` (zamiast wielu edycji); nowe moduły od razu kompletne.
- Dane do lekcji i md: z silnika (zrzut testem `dump.js` do JSON → generator), nie przepisywane ręcznie.
- Testy: zbiorczo, do rozmowy tylko FAIL/ERR; zrzuty tylko nowych widoków, kilka → jeden kolaż.
- Czat: bez wstępów, bez relacji kroków, bez emoji; zmiany opisane w `ZMIANY.md`.
- Jedna rozmowa może prowadzić kilka zadań, jeśli kontekst jest w `STATE.md`; po dużym etapie — zapis stanu, wtedy przerwanie nic nie psuje.
- Prace > 1 moduł: plan 5–10 linii; czekam na akceptację tylko przy zmianach architektury lub nieodwracalnych (np. rozcięcie pliku, zmiana formatu lekcji). Zwykłe zadania z listy wykonuję od razu.

### Blok „TRYB OSZCZĘDNY” (domyślny)
```
- Bez wstępów, podsumowań i powtarzania kodu; bez emoji.
- Zmiany w plikach, opis w ZMIANY.md; na czacie 2–4 zdania.
- Max 1 pytanie, gdy decyzja należy do użytkownika; inaczej rozsądne założenie zapisane w Decyzjach.
- Nie ruszam niczego poza zakresem; zauważony inny błąd → 1 linia w STATE.md (Znane błędy).
```

### Szablon zlecenia (opcjonalny)
```
ZADANIE: <1 zdanie>
ZAKRES: lekcja / moduł / widok
KRYTERIUM: testy <ID> przechodzą, brak utraty treści
```

## 7. Procedura sesji

**Start:** czytam `STATE.md` (+ ostatnie wpisy `PROGRESS.md` tylko w razie potrzeby) → sprawdzam `ls -lt` i stan builda → lista zadań.
**W trakcie:** build → testy po każdym kroku; co 2–3 kroki wpis do `PROGRESS.md`; zrzuty nowych widoków oglądam sam.
**Koniec etapu:**
- [ ] build bez błędów, testy: `aud.js` (0 FAIL), `CHE.CONSISTENCY` N/N, widoki i lekcje 0 błędów JS, `ts.js` (montowanie wszystkich widoków)
- [ ] wersja +0.01 w `build.py` i testach, poprzednia zostaje w `out/`
- [ ] `STATE.md` (zmienione sekcje) i `PROGRESS.md` → projekt `CHE/`
- [ ] `ZMIANY.md` uzupełniony i wysłany razem z: dużym HTML, nową/zmienioną lekcją, nowym md kanonu, zipem źródeł
- [ ] jeśli odkryto nową zasadę — propozycja aktualizacji skilla

## 8. Ryzyka i zabezpieczenia (z dotychczasowej pracy)

| Ryzyko | Zabezpieczenie |
|---|---|
| Utrata treści przy przebudowie lekcji | diff zdań źródło ↔ wynik po każdym buildzie lekcji |
| Dublowanie modułów (STOICH/STECH, dwa symulatory osadów) | grep przed nową nazwą; używać `ParticleSim`, `GFX.rx`, `GFX.ions` |
| Edycja w złym kawałku / rozjazd kolejności | `docs/INDEX_KODU.md` (generowany przy każdym buildzie), `build.py --check` przy przebudowach porządkowych |
| Stare widoki wracają lub wiszą w lekcjach | `viz_retire.js` + `prune.js` + audyt „przyciski → istniejące widoki” |
| Rozjazd liczb lekcja ↔ silnik | znaczniki `data-*` + audyty `LES-*`, dane generowane z silnika |
| Skrypty lekcji nie działają na pełnym ekranie | runner pełnego ekranu w bazie uruchamia skrypty lekcji przez `(0,eval)`; test `lesl.js` sprawdza liczniki testu/fiszek |
| Błędy merytoryczne z pamięci | wartości z tablic w silniku, `audit()` porównuje z pomiarem (np. pH wody wapiennej) |

## 9. Kolejne kroki

1. (zrobione w v0_52) `STATE.md` + `ZMIANY.md` jako stały element pracy.
2. (zrobione w v0_52) Etap 2 — rozcięcie: `tools/split.py` → `modules/base/` + `manifest.json`, `build.py` skleja bajtowo zgodnie, `tools/index.py` → `docs/INDEX_KODU.md`.
3. (częściowo zrobione w v0_53) Etap 3: N01 i N02 wydzielone (`sources/chemia/lekcje/`, INDEX.md, md_split/md_assemble). Dalej: N03, N04, F00–F09, potem kompilator md → JSON.
3a. Porządkowanie lekcji (v0_53): `lesson/lesson_merge.py` — scalanie sekcji/podsekcji, dedup dosłowny, numeracja z poprawą odwołań §, rysunki SVG → układ HTML, kontrola wiedzy (zdania + etykiety SVG); `tools/md_lesson_layout.py` wpisuje układ lekcji do md. Doświadczenia w lekcji: przycisk `.che-prac-go` otwiera pracownię GFX na danym doświadczeniu.
4. Etap 4: runner lekcji wspólny dla przedmiotów; osobny wynik dla języków.
