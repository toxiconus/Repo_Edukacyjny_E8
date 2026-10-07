# ZMIANY — ARCHIWUM (pełne wpisy; nie wczytywane domyślnie)

## v0_53 — 2026-10-07
- Kody: N03 Kwasy, N04 Sole, FIZ-01 Elektrostatyka; uid np. CHE.02.N01.tlenki.
- Etap 3 md: N01, N02 w `sources/chemia/lekcje/`, kanon składany (`tools/md_assemble.py`).
- Atlas etap 2: panel „W lekcjach”, znaczniki lekcji w Związkach i na liście pierwiastków.
- md v19.89/90: sekcja SYNC N01 z silnika; pierwsze scalanie N01 v6.1 / N02 v8.2, przyciski pracowni GFX w doświadczeniach.

## v0_53 — 2026-10-07

**Kanon md v19.89 — sekcja „N01 — SYNC HTML v6.0 + silnik CHE.OXIDES”** (przed treścią źródłową L002 / N01)
- Lista poprawek HTML v6.0 obowiązujących też w md (nazwa P₄O₁₀, MgO a CaO, model wiązania, YBCO, modele silnika zamiast widgetów).
- Tabela 38 tlenków z silnika: stopień utlenienia, charakter, wiązanie, reakcja z wodą / kwasem / zasadą, barwa i stan, masa molowa, poziom; uwagi do tlenków.
- Równania „trzech pytań”, 57 reakcji N01 według typu (warunki, obserwacje, BHP), kroki konstruktora W–K–S–K, stopnie utlenienia ze wzoru (Fe₃O₄, nadtlenki, OF₂), trend charakteru w okresach 2 i 3 z elektroujemnością, lista doświadczeń pracowni, mapa modeli ↔ sekcje.
- Liczby są generowane z silnika skryptem, nie przepisywane ręcznie.

**Atlas etap 2 — pierwiastki i związki połączone z lekcjami**
- Karta danych: nowy panel „W lekcjach” — dla wybranego pierwiastka lekcje N01–N04 z liczbą związków i reakcji oraz wzorami; klik otwiera lekcję.
- Związki: na kafelkach „… w silniku” znaczniki N01 / N02 / N03 / N04 (klik otwiera lekcję).
- Lista pierwiastków: liczba atomowa Z i znaczniki lekcji przy każdym pierwiastku; lista wyższa (więcej pozycji naraz).

**Kody lekcji uporządkowane według kanonu**
- Chemia nieorganiczna: N01 Tlenki, N02 Wodorotlenki, **N03 Kwasy** (było L03), **N04 Sole** (było L04). F00–F09 to fundamenty chemii (powtórka klasy 7).
- Fizyka: **FIZ-01** Elektrostatyka (było F01, kolidowało z fundamentami chemii).
- Pełny identyfikator lekcji: PRZEDMIOT.GRUPA.KOD.temat, np. CHE.02.N01.tlenki, CHE.02.N04.sole, FIZ.01.01.elektrostatyka (grupy chemii: 01 F, 02 N, 03 R, 04 J, 05 O, 06 X, 07 E, 08 K, 09 A, 10 P).

**Kanon md podzielony (etap 3, start)**
- N01 i N02 są osobnymi plikami: `sources/chemia/lekcje/CHE.02.N01.tlenki.md` (12 części zebranych z całego kanonu) i `CHE.02.N02.wodorotlenki.md` (15 części); spis w `lekcje/INDEX.md`.
- Reszta kanonu: `CHE.core.md`. Pełny kanon składa się automatycznie: CHE.all.v19.90.md (sprawdzone: złożenie daje dokładnie poprzedni plik).
- Do każdej z dwóch lekcji md dopisany „Układ lekcji HTML” — aktualne sekcje, podsekcje, modele silnika z numerami i dziennik scaleń.

**N01 Tlenki v6.1 — mniej powtórzeń, jedno miejsce na temat (34 sekcje zamiast 50)**
- Scalone: trend (§ trend + Dodatek B), korozja (ramka + Dodatek F), BHP i środowisko (§ bezpieczeństwo + Dodatki D i G), stechiometria (§24 + §25 + Dodatek E), test + test adaptacyjny + quiz, dwie ściągi do druku, mosty do lekcji, model decyzyjny „trzy pytania” (most + korekta v5.9).
- Korekta v5.9 rozdzielona tematycznie: P₂O₅/P₄O₁₀ do swojej sekcji, Al₂O₃ do amfoteryczności, BHP i obserwacja→wniosek do doświadczeń; CO/CO₂ i „tlenek w wodzie” do charakteru; stopnie utlenienia do konstruktora wzorów; nadtlenki do tlenków nietypowych.
- Obce elementy: zewnętrzna symulacja PhET zastąpiona zadaniem z naszym modelem 3D; model 3D w N01 pokazuje teraz tlenki (CO₂, SO₂, SO₃, H₂O, CO, N₂O, NO₂, H₂O₂, CH₄) zamiast kwasów, nowe modele SO₃, N₂O, NO₂ w silniku; poprawiony podpis „undefined” w modelu 3D.
- Ręcznie rysowana mapa myśli (SVG) zastąpiona mapą w układzie CHE (te same treści, pola klikane do sekcji).
- Doświadczenia 1–4: przycisk „Zobacz w zlewce” otwiera pracownię GFX od razu na tym doświadczeniu (spalanie Mg — model spalania).
- Stare kody L001/L009/L010 w tekście → F01–F09, R05–R08, X01–X10. Numeracja sekcji ciągła, odwołania § poprawione.

**N02 Wodorotlenki v8.2**
- §5A „Model bez skrótów”: dwie serie korekt (1–6 i 1–11) połączone tematycznie; amfoteryczność, otrzymywanie i strącanie przeniesione do odpowiednich podsekcji wyjaśnienia; BHP NaOH/KOH, BHP CaO i obserwacja→wniosek do doświadczeń; klinika z modelu do kliniki błędów.
- Wyjaśnienie: 19 podsekcji → 13, według modeli silnika (wzór: bilans + nawias + konstruktor; otrzymywanie + mapa przemian; zobojętnianie + licznik moli + równania jonowe; pH + laboratorium wskaźników; dysocjacja + energia rozpuszczania; modele budowy).
- Rysunki SVG (historia, modele budowy, mapa pojęć) → układ HTML CHE; wszystkie 88 etykiet zachowane, przy modelach budowy odesłanie do interaktywnego modelu „Wzór wodorotlenku”.
- Doświadczenia A–H: przycisk otwiera pracownię GFX na danym doświadczeniu (E — model wskaźników).

**Kontrola wiedzy:** każde zdanie sprzed scalenia istnieje po scaleniu (sprawdzane automatycznie przy każdej przebudowie); usunięte tylko dosłowne powtórzenia i instrukcje zewnętrznej symulacji.

**Sprawdź ręcznie:** Lekcje → N01 (mapa myśli, VSEPR, doświadczenia → „Zobacz w zlewce”), N02 (historia, wyjaśnienie, mapa pojęć); Atlas → Fe → Karta danych i Związki.


**Pliki:** CHE_lab_wizualizacje_v0_53_GFX16.html, CHE.all.v19.90.md, CHE.02.N01.tlenki.md, CHE.02.N02.wodorotlenki.md, ZMIANY.md, CHE_zrodla_v0_53.zip.

## v0_52 — 2026-10-07

**Fizyka F01 Elektrostatyka (v1.4) — nowy wykład §5a „Zasada zachowania ładunku, obliczenia w kulombach i uziemienie”**
- Nazwa prawa: zasada zachowania **ładunku**. „Zasady zachowania potencjału” nie ma — opisana jest pokrewna reguła: przy zetknięciu przewodników potencjały się wyrównują (rozszerzenie LO).
- Ładunek jako liczba ze znakiem: przedrostki mC, µC, nC, pC z przeliczeniami; wzory q = n·e, n = |q|/e.
- Dodawanie ładunków z nawiasami: 0 C + (−4 C) = −4 C, (+6 nC) + (−2 nC) = +4 nC; metoda graficzna — kafelki „+” i „−”, pary znoszą się.
- 4 przykłady dotyku krok po kroku (przed → suma → podział → kontrola → przepływ elektronów i ich liczba), m.in. A = 0 C, B = −4 C → −2 C i −2 C, z B na A przeszło 1,25·10¹⁹ elektronów; trzy kule po kolei i naraz; zobojętnienie +3 µC i −3 µC.
- Uziemienie: tabela przykładów (−5 nC, +8 µC, −4 C), kierunek przepływu elektronów, układ ciało + Ziemia; ładowanie elektroskopu przez indukcję z uziemieniem (ładunek przeciwny do pręta); zastosowania.
- Rozszerzenie LO: kule różnej wielkości q₁′ = Q·R₁/(R₁+R₂), przykład 1 cm i 2 cm, dlaczego Ziemia „zabiera” ładunek.
- Typowe błędy i 5 zadań z ukrytymi odpowiedziami.

**Model „Bilans ładunku” (fiz-ladunek-v01, przebudowany)**
- Jednostki do wyboru: C, mC, µC, nC, e. Dotyk parami i trzech kul naraz, uziemienie z animacją przepływu elektronów.
- Panel „Bilans” jak w zeszycie: przed / po z nawiasami, podział, przepływ i liczba elektronów, kafelki + i − przed i po.
- Opcja LO: kule różnej wielkości (wyrównanie potencjałów).

**Silnik:** `CHE.PHYS.electro.contact` (rozkład ładunku przy równych potencjałach), `ground`, `transfer`; 4 nowe testy w audycie fizyki; audyt lekcji LES-F01-05 sprawdza wszystkie przykłady liczbowe z wykładu.

**Porządek w kodzie (etap 2):** duży plik rozcięty na 212 kawałków (`modules/base/` + `src/` + lekcje) składanych według `manifest.json`; nowy `build.py` daje plik identyczny bajt w bajt z poprzednim. Nie trzeba już pliku bazowego v0_30 ani skryptu łatek. Spis kodu: `docs/INDEX_KODU.md`.

**Zasady pracy:** `docs/ZASADY_PRACY_CHE_LAB.md` (v2, dopracowane do faktycznego stanu projektu), `docs/STATE.md` (stan), ten plik `ZMIANY.md` (opis zmian zamiast długich odpowiedzi na czacie).

**Testy:** audyty silnika bez błędów, spójność OK (w tym nowe LES-F01-05), lekcja F01 i widoki bez błędów JS.

**Sprawdź ręcznie:** Lekcje → Fizyka → F01 → §5a; Wizualizacje → „Bilans ładunku”.

**Pliki:** CHE_lab_wizualizacje_v0_52_GFX16.html, fiz_elektro_new.html, ZASADY_PRACY_CHE_LAB.md, ZMIANY.md, CHE_zrodla_v0_52.zip.

## v0_51 — 2026-10-07
- Lekcja N01 Tlenki v6.0 (modele silnika zamiast widgetów, barwy z danych silnika, poprawki merytoryczne), kanon md v19.88 (sekcja N02), wspólna pracownia doświadczeń N01/N02.

## v0_50 — 2026-10-07
- Atlas etap 1 (nagłówek pierwiastka, wykres faz, katalog reakcji), usunięte emoji.

## v0_49 — 2026-10-07
- Lekcja N02 Wodorotlenki w silniku (CHE.HYDROXIDES, 8 widoków), test silnika w zakładce Wizualizacje, skrypty lekcji działają na pełnym ekranie.
