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

## Wspólne naczynia

`naczynia.js` — jedna geometria i wygląd szkła (`KLOCKI.naczynia.probowkaPath`, `szklo`), zgodna z `gfx/chemia/naczynia/testTube.js`; używają jej `probowki` i `probowki-odczyn` (w manifeście zaraz po `pomocnicze.js`). Nowe klocki z probówką rysują ją tą funkcją.

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
| `diagram-bohra` | diagram_bohra.js | Model Bohra atomu i jonu: jądro z p, powłoki K–N, kation/anion z animacją elektronu, „do konfiguracji gazu szlachetnego” | `z` (11), `ladunek` (0), `max` (36) |
| `schemat-przemian` | schemat_przemian.js | Kilka dróg do tego samego typu produktu: substraty → strzałka z nazwą drogi → produkty; produkt docelowy wyróżniony, uwaga po kliknięciu, wyróżnienie wędruje po drogach | `tytul`, `drogi` = "etykieta:równanie:uwaga; …" (równanie ASCII, `*` przy produkcie docelowym) |
| `zbieranie-gazu` | zbieranie_gazu.js | Zbieranie gazu: kolba z reakcją, rurka, naczynie wylotem do góry / do dołu / nad wodą; werdykt z d = M/29 i rozpuszczalnością, zły wybór pokazuje ucieczkę lub rozpuszczanie | `gaz` (H2), `metoda` (auto), `gazy` ("H2,O2,CO2,NH3,HCl") |
| `kalkulator-mola` | kalkulator_mola.js | m, n, M, N, V gazu dla wybranej substancji | `subst` (0–4) |
| `krzyzowka-mendla` | krzyzowka_mendla.js | Szachownica Punnetta: jedna cecha i dihybryda 4×4 (9:3:3:1), odsłanianie pól | `krzyzowki` (AA×aa,Aa×Aa,…), `start`, `cechy` |
| `karta-bhp` | karta_bhp.js | Rozwijane karty BHP i pierwszej pomocy | `otwarte` (0) |
| `sklad-procentowy` | sklad_procentowy.js | Masa cząsteczkowa i skład procentowy wg wzoru (masy jak w lekcji) | `wzor`, `przyklady` |
| `bilans-rownania` | bilans_rownania.js | Dobieranie współczynników, tabela bilansu atomów | `rownanie`, `przyklady` (po średniku) |
| `nadmiar-substratu` | nadmiar_substratu.js | Dwa substraty: współczynniki przereagowania, nadmiar, produkty | `reakcja` (mg-hcl, fe-s, zn-h2so4), `mA`, `mB` |
| `haworth` | haworth.js | Wzór Hawortha: α/β-D-glukopiranoza i β-D-fruktofuranoza (chipy) | `cukier` (alfa-glukoza, beta-glukoza, beta-fruktoza) |
| `estryfikacja` | estryfikacja.js | Animacja: –OH kwasu + H alkoholu → woda; reszty → ester (pętla) | `ester` (octan-etylu, mrowczan-metylu) |
| `petla-regulacji` | petla_regulacji.js | Pętla regulacji 5 elementów z impulsem; biologia B2c/B2e/B2g | `zestaw` (temperatura, glukoza, tarczyca, oddech) |
| `doswiadczenie` | doswiadczenie.js | Wspólny układ doświadczenia: cel, sprzęt, karta BHP (wybrane karty), scena z innego klocka, równanie, obserwacje | `tytul`, `cel`, `sprzet`, `bhp`, `scena`, `s_*`, `rownanie` |
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

## Klocki dodane 2026-10-20 (S-S1, przeniesienie modeli z dużego silnika)

| Klocek | Plik | Do czego |
|---|---|---|
| `tabela-rozpuszczalnosci` | tabela_rozpuszczalnosci.js | Tabela R/T/N (20 °C); klik: wzór, nazwa, rozpuszczalność; eksportuje `KLOCKI.rozp` |
| `osady-dwie-sole` | osady_dwie_sole.js | Dwie sole → czy powstaje osad i jaki (wymaga tabeli rozpuszczalności) |
| `rownania-jonowe` | rownania_jonowe.js | 12 reakcji: zapis cząsteczkowy, jonowy pełny i skrócony |
| `izotopy` | izotopy.js | Konstruktor atomu p/n/e, izotop/jon/pierwiastek, masa atomowa jako średnia ważona |
| `regula-krzyzowa` | regula_krzyzowa.js | Mieszanie roztworów: krzyż, huśtawka, bilans |
| `f02-czastki-v01`, `f04-nuklid-v01`, `f02-magnes-fes-v01` | z_*.js + model_widok.js | Modele w starym kontrakcie CHE.VIEW.define (mostek `model_widok.js`) |
| `n05-wodorki-v01`, `n05-trendy-v01` | z_n05_wodorki.js | Mapa wodorków, temperatury wrzenia |
| `profil-energii` | profil_energii.js | Profil energii egzo/endo, katalizator |
| `gra-klasyfikacja` | gra_klasyfikacja.js | Gra: kwas, zasada, sól, tlenek |
| `dysocjacja-vs-jonizacja`, `przeniesienie-protonu`, `tester-przewodnictwa` | jony_w_wodzie.js | Jony w wodzie |
| `elektryzowanie`, `przewodnik-izolator`, `kule-ladunek`, `elektroskop`, `prawo-coulomba`, `linie-pola` | fizyka_elektrostatyka.js | Elektrostatyka (FIZ-01) |
| `lancuch-poziomow`, `zlewka-predykcja`, `mapa-mysli`, `czasteczki-3d`, `destylacja` | chemia_wstep.js | Wstęp do chemii (F01–F03, N02) |
| `uklad-okresowy-54`, `konstruktor-tlenku`, `detektor-tlenku`, `reaktor-tlenku`, `trend-tlenkow` | okresowy_tlenki.js | Układ okresowy 1–54 (tryby) i tlenki |

`ui_klocki.js` — wspólne przyciski, suwaki i autostart animacji (`KLOCKI.ui`); ładować w każdej lekcji używającej klocków HTML/SVG.
