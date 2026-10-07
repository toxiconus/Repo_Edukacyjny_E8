# ZMIANY — CHE_lab (2–3 ostatnie wydania; starsze: ZMIANY_ARCHIWUM.md)

## v0_57 — 2026-10-07
- Nowa strona startowa: krótki opis, numer wersji, kafelki wszystkich lekcji (N01–N04, FIZ-01: kod, tytuł, zakres, liczba modeli) otwierające lekcję jednym kliknięciem, pasek „Kontynuuj” z ostatnio otwartą lekcją, cztery narzędzia (Atlas, Wizualizacje, Przedmioty, Silnik) w jednym rzędzie, liczby z silnika (lekcje, modele, reakcje, pierwiastki). Telefon: jedna kolumna, bez przewijania w bok.
- Naprawiony tryb Noc na stronie startowej: wcześniej tło robiło się jasnoszare, a tytuły kart znikały (ciemna paleta nakładała się na filtr odwracający kolory).
- Bez emoji: ikony ☀ ☾ ⚙ zastąpione tekstem i symbolami typograficznymi.
- N04: tytuł karty przeglądarki v1.1.
- Testy: spójność 47/47, aud.js 0 FAIL, lekcje 0 błędów JS, hub 100/100.
- Sprawdź ręcznie: strona startowa w dzień i w nocy, „Kontynuuj” po zamknięciu lekcji; tryb Noc w Atlasie i lekcjach (możliwy ten sam problem — w TODO).

## v0_56 — 2026-10-07
- N04 Sole v1.1 zredagowane wg `docs/STANDARD_LEKCJI.md`: start (minimum, spis, cele, pytanie przewodnie o rozróżnianie NaCl / Na₂SO₄ / Na₂CO₃, kompas) → rdzeń E8 §1–11 (budowa, wzory i bilans ładunku, nazwy, dysocjacja, tabela rozpuszczalności, 10 metod otrzymywania, strącanie i zapis jonowy, wypieranie, hydraty, ważne sole, BHP) → ambitne §12–15 (rodzaje soli, hydroliza, iloczyn rozpuszczalności, sole w przyrodzie i organizmie) → praktyka §16–20 → powtórka §21–24 → dodatek A (mosty).
- Wiedzy przybyło: 18,4 → 55,3 tys. znaków, wszystko z kanonu md N04 (L005, 118, 123.4, 148.5, LAB08): tabela reszt kwasowych (18), przykłady prowadzone wzorów, „indeks ≠ współczynnik”, procedura reakcji wymiany i czynnik napędzający, barwy 15 osadów, hydraty, klinika 2.0 (5 rozbiorów), mini-check, ćwiczenie prowadzone, 23 ćwiczenia A–D + przeplatanie z odpowiedziami, typologia zadań E8, sprawdzenie diagnostyczne, karta powtórzenia, mapa myśli, system powtórek, słownik (13 haseł), checklista. Fiszki 16 → 34, test 10 → 16 pytań.
- Doświadczenia 6 → 10 (nowe: CuO + H₂SO₄, rozróżnianie trzech soli, hydrat CuSO₄ — wykrywanie wody, zmiękczanie wody sodą); każde ma „Zobacz w zlewce” — pracownia `sole-doswiadczenia-v01` otwiera się na właściwej reakcji. Nowe zlewki GFX: BaCl₂ + Na₂SO₄, CaCl₂ + Na₂CO₃, Na₂CO₃ + HCl, CuSO₄ + H₂O (hydrat), odczyn roztworów NaCl / Na₂CO₃ / NH₄Cl / CuSO₄.
- Jeden model = jedno miejsce: 9 przycisków = 9 modeli (w v1.0 cztery modele po dwa razy); nowe w N04: kw-reszty-v01, gfx-scene-conductivity, chain-scn, stech-kalkulator-v01.
- Dane z silnika, nowe audyty: wzory i nazwy (LES-N04-01), litery R/T/N (02), odczyn i równania hydrolizy (03), barwy osadów (04), modele i przyciski pracowni (05). 38 równań data-rx = CHE.REACTION.
- Poprawki (lekcja i kanon md): NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ zamiast „NH₄OH”; hydroliza soli → J07 (było J09); kości i zęby — hydroksyapatyt, CaCO₃ — muszle i skorupy; Mg²⁺ kofaktor enzymów, Fe²⁺ w hemoglobinie; AgNO₃ dawniej w fotografii przez AgBr; Ksp CaCO₃ 3,4·10⁻⁹ i porównanie Ksp tylko dla soli tego samego typu; wyjaśnienie rozpuszczalności CaCO₃ / Na₂CO₃ (energia sieci i hydratacji); heptahydrat zamiast „siedmiohydrat”; „sól kwaśna” ≠ odczyn kwasowy (NaHCO₃ słabo zasadowy).
- N03: przycisk „Zobacz w zlewce” ma teraz styl (był niewidoczny jako zwykły przycisk).
- Kanon md v19.93 (`CHE.all.v19.93.md`): N04 wydzielone do `lekcje/CHE.02.N04.sole.md` (10 części; podział bajt w bajt), blok „Układ lekcji HTML N04 v1.1” + SYNC nowych treści, poprawki jw.
- Testy: lesson_check N04 i N03 OK; spójność 47/47; aud.js 0 FAIL; lekcje N01–N04 i wszystkie widoki 0 błędów JS; pracownia otwiera właściwe zestawy.
- Sprawdź ręcznie: N04 — spis treści, §16 (dośw. 8 ma przyciski trzech kroków), §13 (odczyn w zlewce), czytelność tabel §2, §5, §7.

## v0_55 — 2026-10-07
- N03 Kwasy v1.9 zredagowane wg `docs/STANDARD_LEKCJI.md`: start (minimum, spis treści w lekcji, cele, pytanie przewodnie, kompas) → rdzeń E8 §1–12 (definicja, nazwy, reszty, właściwości, dysocjacja, moc, pH, otrzymywanie, reakcje, deszcze, zastosowania, BHP) → ambitne §13–15 (kwasy organiczne, miareczkowanie, bufory) → praktyka §16–19 → powtórka §20–23 → dodatki A (historia i teorie), B (mosty). Plakietki E8 / ROZUMIENIE / AMBITNE przy podsekcjach.
- Scalone powtórzenia: „kwas + sól” (otrzymywanie ↔ reakcje), mgła HCl, CH₃COOH jednoprotonowy, bufor krwi, oranż metylowy, „mocny ≠ stężony”, „kwas do wody”. Wiedzy przybyło: 68,5 → 73,5 tys. znaków; rejestr zdań `lesson/edits_N03.md`, skrypt `lesson/_redakcja/n03_red.py`.
- Jeden model = jedno miejsce: 24 → 17 przycisków (dysocjacja ×3, panel pH ×2, tabela rozpuszczalności ×2 i dublety w doświadczeniach usunięte); doświadczenia 1–10 mają „Zobacz w zlewce” — pracownia `kw-doswiadczenia-v01` otwiera się na właściwym zestawie (`src/v_kwasy_views.js`: `host._show`).
- Poprawki: α(HF, 0,1 mol/dm³) ≈ 0,08 w klinice i ćwiczeniach (było 0,1); mosty: N04 Sole, X01–X10 Redoks (było L005, L010); usunięta zewnętrzna nawigacja z linkami do nieistniejących plików HTML (spis w treści jak N01/N02).
- Kanon md v19.92: blok „Układ lekcji HTML N03 v1.9” + nowe treści w `# N03 — Kwasy` (CHE.core.md).
- Testy: lesson_check OK; aud.js bez zmian względem v0_54; spójność LES-01..06 i LES-RX-N03 ok; lekcja N03 0 błędów JS, 0 powtórzonych modeli; „Zobacz w zlewce” — 8 zestawów sprawdzonych.
- Sprawdź ręcznie: N03 (spis, kolejność, karta powtórki), przyciski „Zobacz w zlewce” w §16.
- Etap 3 md (bez zmiany wyniku): N03 wydzielone do `sources/chemia/lekcje/CHE.02.N03.kwasy.md` (13 części, 2068 wierszy; `tools/md_split.py … N03`); kanon złożony po podziale = v19.92 bajt w bajt; INDEX.md uzupełniony.

## v0_54 — 2026-10-07
- N01 Tlenki v6.2 i N02 Wodorotlenki v8.3 zredagowane wg `docs/STANDARD_LEKCJI.md`: powtórzenia kontekstowe scalone (jeden temat = jedno pełne wyjaśnienie + odnośniki §), logiczna kolejność (rdzeń E8 → rozumienie → praktyka → powtórka → dodatki), plakietki E8 / ROZUMIENIE / AMBITNE, treść ponad LO w „adv”.
- Wiedzy przybyło: N01 55,6 → 67,5 tys. znaków, N02 68,6 → 76,4 tys.; poprawione błędy (m.in. Davy, „bielenie” → wapnowanie, Berzelius, złe odwołania §). Rejestr zmian zdań: `lesson/edits_N01.md`, `edits_N02.md`.
- Wizualizacje: naprawiony układ okresowy (periodic-54); spalanie startuje po kliknięciu pierwiastka; modele reagują od razu na wybór (tlenki, strącanie, szereg metali, pracownie); brak „jonowo skrócone” dla reakcji niejonowych; wskaźnik SO₂ + H₂O czerwono-pomarańczowy; poprawki czytelności (przegląd wodorotlenków, model 3D, konstruktor, łańcuch przemian).
- N02: usunięty zdublowany przycisk `neutralization` (ten sam widok co „Równania jonowe”).
- Lekcje N01, N02 edytowane od teraz ręcznie (buildery zamrożone); kontrola: `tools/lesson_check.py`. Kanon md v19.91.
- Sprawdź ręcznie: N01 i N02 (spis treści, mapa, doświadczenia → „Zobacz w zlewce”), N01 §5–6 modele.
