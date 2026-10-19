# Klocki — komponenty do ponownego użycia w lekcjach

Klocek to samodzielny moduł rysujący jedną figurę (canvas albo HTML/SVG) w lekcji.
W md wstawia się go linią `@klocek nazwa {opcja="wartość"} | Podpis`, a pod nią obowiązkowo `@opis …` (opis słowny — build to wymusza).

## Rejestr i montowanie

- `klocki.js` — `KLOCKI.def(nazwa, {opis, domyslne, stan0, rysuj(...) | html(host, opc)})` i `KLOCKI.montuj(host, nazwa, opcje)`.
  - Canvas: `rysuj(x, w, h, stan, t, opc)`; `t` to czas od startu (animacje).
  - HTML/SVG: `html(host, opc)` (np. `wzor-2d`).
  - `montuj` tworzy canvas, uruchamia pętlę rAF; start/stop przez IntersectionObserver (animacja tylko gdy widoczna), klik przełącza.
- `pomocnicze.js` — wspólne funkcje globalne (ładowane pierwsze): `RM` (prefers-reduced-motion), `el`, `clamp`, `sm` (smoothstep), `cap`, `hex2rgb`, `rgba`, `mixHex`.
- `manifest.json` — `klocki` (plik → opis), `lekcje` (kod lekcji → lista plików JS w kolejności zależności), `css` (wspólne style, np. `lab.css`).
- `cl`, `ss`, `paleta`, `siatka` są **lokalne** w IIFE klocków (`bilans_spalania.js`, `palnik_gazowy.js`). Nie są współdzielone; przy kopiowaniu do nowego klocka skopiuj je albo przenieś do `pomocnicze.js`.

## Dodanie nowego klocka

1. Plik `klocki/moj_klocek.js` z `KLOCKI.def('moj-klocek', {...})` w IIFE.
2. Wpis w `manifest.json` → `klocki`, a w `lekcje` każdej lekcji, która go użyje — przed plikami, od których zależy.
3. W md: `@klocek moj-klocek {opcja="1"} | Podpis` i `@opis …`.
4. Zbuduj lekcję (`python3 narzedzia/lekcja_html.py -p <przedmiot> plik.md`) i sprawdź w headless Chromium.

## Katalog klocków (nazwy i opcje z kodu)

| Klocek | Plik | Do czego | Opcje (domyślne) |
|---|---|---|---|
| `bilans-spalania` | bilans_spalania.js | Bilans atomów C, H, O przy spalaniu; współczynniki kolorowe | `n` (3), `szer` (560), `wys` (330) |
| `palnik-gazowy` | palnik_gazowy.js | Palnik gazowy, zlewka odwrócona z kroplami wody, próba z wodą wapienną | `etap` 0–2, `anim` ("0" = statycznie) |
| `wzor-2d` | c2d_klocek.js | Wzór strukturalny z SMILES; domyślnie prosty renderer | `smiles` (CC(=O)O), `grupa` (all), `kwas` (1); v3: `kulki`, `kat`, `pary`, `walencja`, `interaktywny` (0) |
| `molekula-2d` | molekula_2d.js | Model 2D kilku gotowych cząsteczek (SVG) | `mol`, `grupa`, `kwas` |
| `lancuch-przemian` | lancuch_przemian.js | Schemat przemian: wzory połączone strzałkami z literami reakcji | `wezly` (Ca,CaO,Ca(OH)2,CaCO3), `etyk` (A,B,C), `zamkniety` (0) |
| `trojkat-przeliczen` | trojkat_przeliczen.js | Trójkąt konwersji m–n–N / m–n–V ze strzałkami ÷/× | `wzor` (mol) |
| `probowki-odczyn` | probowki_odczyn.js | Probówki przed/po odczynniku (barwa, osad, gaz) | `tuby` (format: `nazwa:kolor_przed:kolor_po:efekt`, po przecinku), `kat` (pochylenie, np. 45 przy ogrzewaniu) |
| `probowki-wybor` | probowki_wybor.js | Kilka probówek naraz + chipy wyboru metalu/odczynnika, równania pod spodem (autostart) | `zestaw` (metale-hcl, stracanie, kwas-weglan), `wybrane` (lista kluczy), `kat`, `max` (4) |
| `konfiguracje` | konfiguracje.js | Konfiguracja elektronowa Z ≤ 36: suwak, pudełka orbitali, powłoki K–N, zapis pełny/skrócony | `z` (19), `max` (36) |
| `kalkulator-mola` | kalkulator_mola.js | m, n, M, N, V gazu dla wybranej substancji | `subst` (0–4) |
| `krzywe-rozpuszczalnosci` | krzywe_rozpuszczalnosci.js | Krzywe rozpuszczalności g/100 g wody od T; strefy nasycenia | `subst` (KNO3,NaCl,NH4Cl), `T` (40), `m` (null), `strefy` (1) |
| `palenie`, `palniki`, `plomien`, `probowki`, `zlewka`, `metal-woda`, `uklad-okresowy`, `znaki` | odpowiednie pliki | Chemia nieorganiczna | zob. nagłówek pliku |

## Moduły 2D (wzory cząsteczek)

- `c2d_core.js` — parser SMILES, pierścienie, układ 2D; eksport `window.C2D`.
- `c2d_grupy.js` — rozpoznawanie grup funkcyjnych (dołącza do `window.C2D`).
- `c2d_wzor.js` — renderer v3 z opcjami: kulki, kąty, wolne pary, walencja, klik na atom (dołącza do `window.C2D`).
- `c2d_prosta.js` — prosty renderer z `molekula_prosta`: `window.C2DP.rysuj(host)` czyta `data-wzor`; wstrzykuje CSS z zakresem `.mol`.
- `c2d_klocek.js` — klocek `wzor-2d`: bez opcji v3 używa `C2DP`, z nimi `C2D`.

## Wzorce do powtórzenia

- Motyw: `document.documentElement.hasAttribute('data-ciemny')` (ustawiane przez szablon lekcji).
- Animacja etapowa: `ss((t - t0 - k*dt)/czas)`; przy `RM` pokaż stan końcowy.
- Siatka kółek: `siatka(m, W, H)` wybiera największe ułożenie m kółek w polu W×H.
- Stan początkowy nie zakłada, że pętla już działa — `montuj` ją uruchamia sam (błąd `grane=true` naprawiony w `24c0083`).
