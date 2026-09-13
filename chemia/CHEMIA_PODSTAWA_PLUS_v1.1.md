# CHEMIA: PODSTAWA PLUS

**Pakiet zintegrowany** — system kursu + lekcje w blokach (jak POLSKI: PODSTAWA PLUS)

Wersja zintegrowana **v2.1** · 2026-09-12 (numer = kolejność nauki)  
Źródła: KURS MASTER v1.0 · L000 Indeks v4.1 · L001 MASTER v3.1 · L002 MASTER v2.0 · L003 MASTER v2.0 · L004–L012 MASTER v1.0 · L013 MASTER v1.0

Baza pod HTML · jeden plik do edycji systemowej i treści · lekcje wydzielone separatorami BEGIN/END

**Model międzyprzedmiotowy:** `PODSTAWA_PLUS_MODEL.md` (filozofia, schemat lekcji, warstwy, drabinka, klinika 2.0, powtórki, znaczniki HTML).

## Spis bloków w tym pliku

| # | Blok | Zawartość | Wersja |
|---|------|-----------|--------|
| 0 | SYSTEM_IX | KURS MASTER — filozofia, schemat, mnemotechniki, indeks, wrzesień | v1.0 |
| 1 | L001 | Powtórka fundamentów klasy 7 | MASTER v3.1 |
| 2 | L002 | Tlenki | MASTER v2.0 |
| 3 | L003 | Wodorotlenki | MASTER v2.0 |
| 4 | L004 | Kwasy | MASTER v1.0 |
| 5 | L005 | Sole | MASTER v1.0 |
| 6 | L006 | Węglowodory | MASTER v1.0 |
| 7 | L007 | Biochemia | MASTER v1.0 |
| 8 | L008 | Stężenia | MASTER v1.0 |
| 9 | L009 | Stechiometria | MASTER v1.0 |
| 10 | L010 | Redoks | MASTER v1.0 |
| 11 | L011 | Doświadczenia | MASTER v1.0 |
| 12 | L012 | Powtórka klasy 8 | MASTER v1.0 |
| 13 | L013 | Zaawansowana (most z L001) — w pliku **po L012** | MASTER v1.0 |

**Kolejność nauki:** L001 → L002 → L003 → L004 → L005 → L006 → L007 → L008 → L009 → L010 → L011 → L012 → (opcja) L013.

---

## ALIGN HTML↔MD (2026-09-13)

HTML L001 / L002 / L013 uzupełnione sekcją **PLUS z MD** (BHP/zlewka, W–K–S–K, stany, pary tlenków, P₂O₅/P₄O₁₀, obserwacja≠wniosek, L013 = extra).  
Zasada: md ≈ html na plus — nic nie wycinamy, tylko dokładamy brakujący wykład.


## ZASADA HTML LEKCJI (2026-09-13)

W HTML lekcji **nie** dajemy:
- paska postępu (progress bar),
- checkboxów w spisie treści,
- localStorage postępu / „resetuj postęp”.

Spis treści = zwykłe kotwice. Tempo ucznia jest dowolne. Fiszki i „Pokaż odpowiedzi” zostają.


## STANDARD ZAPISU CHEMICZNEGO (pakiet v2.0)

<!-- KEEP: konwencja dla MD i przyszłego HTML -->

W tym pliku wzory zapisujemy **Unicode z indeksami dolnymi**, nie „CaOH2”.

| Złe / niepełne | Poprawnie | Uwaga |
|----------------|-----------|--------|
| CaOH, CaOH₂ | Ca(OH)₂ | nawias na całą grupę OH |
| FeOH | Fe(OH)₂ albo Fe(OH)₃ | według wartościowości |
| AlOH | Al(OH)₃ | |
| AlO | Al₂O₃ | |
| NaO | Na₂O | |
| SO (gdy chodzi o tlenki szkolne) | SO₂ albo SO₃ | S(IV) vs S(VI) |
| CO (gdy produkt spalania całkowitego) | CO₂ | CO to inny tlenek |
| HSO | H₂SO₄ | |
| NaSO | Na₂SO₄ | |
| FeNO | Fe(NO₃)₃ | grupy NO₃ w nawiasie |

**Strzałka reakcji:** `→`. Osad: `↓`. Gaz: `↑` gdy potrzeba.

**Trzy zapisy, których nie wolno mylić:**
- wartościowość — cyfra rzymska, np. Fe(III);
- ładunek jonu — arabska ze znakiem, np. Fe³⁺;
- stopień utlenienia — rzymska ze znakiem, np. Fe(+3).

**Masy:**
- liczba masowa **A** = p⁺ + n⁰ w **danym izotopie** (całkowita);
- względna masa atomowa **Aᵣ** — średnia izotopów z układu okresowego;
- względna masa cząsteczkowa **Mᵣ** — suma Aᵣ; dla kryształu jonowego lepiej: **masa jednostki wzoru**.

W HTML później: `Ca(OH)<sub>2</sub>`. Znaczniki warstw (`:::layer{.basic}`) — specyfikacja, nie wymuszane w całym MD teraz.

Gdy w klinice widać `CaOH` / `CaOH₂`, to **przykład błędu**, obok stoi poprawny wzór.

---

## UWAGA REDAKCYJNA

Materiał łączy:
- logikę kursu, filozofię, schemat lekcji, mnemotechniki, indeks, blok września (SYSTEM_IX),
- **L001** — fundamenty klasy 7 (MASTER v3.1),
- **L002–L012** — pełne lekcje klasy 8 (MASTER v1.0–v2.0),
- **L013** — lekcja zaawansowana (most z L001, do czytania po L012).

**Zasada:** nie usuwać treści bez uzasadnienia. Rozszerzać i wplatać warstwy basic / train / amb / extra.

**Edycja:**
- filozofia, schemat, BHP globalne, harmonogram → blok SYSTEM_IX (Część A),
- treść chemiczna lekcji → odpowiedni blok L00X,
- HTML generować z bloku lekcji; teksty systemowe z bloku SYSTEM_IX.

**Kolejność czytania:**
1. SYSTEM_IX (Część A — orientacja systemu),
2. L001 → L002 → L003 → L004 → L005 → L006 → L007 → L008 → L009 → L010 → L011 → L012,
3. L013 (zaawansowana) — dla uczniów idących do liceum / na konkurs.

---

## Model międzyprzedmiotowy

Ten pakiet realizuje **PODSTAWA PLUS** (patrz `PODSTAWA_PLUS_MODEL.md`):
- **L001** = BLOK A (powtórka lat wcześniejszych, wzbogacona amb/extra),
- **L002+** = BLOK B (materiał bieżący klasy 8 + pomoc),
- **SYSTEM_IX** = BLOK C (filozofia, schemat, indeks, wrzesień).
- **L013** = extra po L012, nie zamiast E8.

Bez limitu czasu; warstwy basic/train/amb/extra; bloki BEGIN/END.

---

## FILOZOFIA (STAŁA, WSPÓLNA)

```
basic   →  umiem zrobić
train   →  umiem szybko i pewnie
amb     →  rozumiem dlaczego
extra   →  potrafię połączyć, uzasadnić, zakwestionować
```

> Nie ma ścieżki „zaawansowanej” — jest ta sama lekcja czytana na różnej głębokości.

1. Ciekawość przed kolejnością.
2. Punkty wejścia zamiast bramek.
3. Rozszerzenie jako drugie dno, nie osobne piętro.

Tempo: dowolne. Bez paska postępu. Harmonogram = rytm, nie bat.

Oznaczenia reguł (bez emoji): fakt chemiczny · uproszczenie szkolne · wskazówka egzaminacyjna · pułapka.

---

## STAŁE ELEMENTY METODYCZNE

**Format doświadczenia**
```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```
Obserwacja ≠ wniosek.

**Format kliniki błędów**
```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

**Drabinka trudności**
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty

**Schemat lekcji MASTER**
JAK PRACOWAĆ · FILOZOFIA · POZIOMY · CO WARTO WIEDZIEĆ · CEL · ŚCIĄGA · KLINIKA · DOŚWIADCZENIE · ĆWICZENIA · FISZKI · TEST · CHECKLISTA · MAPA · CO DALEJ · SŁOWNIK · DODATKI C/D/E

**HTML:** karty basic/train/trap/hint/amb/extra · odpowiedzi ukryte · fiszki · extra-layer · bez emoji.

---



<!-- ==================== BEGIN SYSTEM_IX ==================== -->

# BLOK SYSTEM + WRZESIEŃ (KURS MASTER)

# CHEMIA: PODSTAWA PLUS — KURS MASTER

**Jeden plik roboczy do edycji logiki kursu, indeksu, schematów i bloku września.**  
Lekcje szczegółowe (L001 pełna, L002…) mogą mieć osobne pliki HTML/MD, ale **zmiany systemowe zapisujesz tutaj**.

Wersja: **v1.0** · 2026-09-12  
Powiązane: L000 Indeks · L001 v3.1 · L002–L003 v2.0 · L004–L012 v1.0 · L013 v1.0 · pakiet v2.0

---

# CZĘŚĆ A — SYSTEM KURSU (nie idzie w całości do lekcji ucznia)

## A1. Filozofia

> **Nie ma ścieżki „zaawansowanej” — jest ta sama lekcja czytana na różnej głębokości. Uczeń wybiera głębokość, nie dział.**

1. **Ciekawość przed kolejnością** — wolno czytać extra przed basic, jeśli to ciągnie.
2. **Punkty wejścia zamiast bramek** — „Co warto wiedzieć wcześniej” = kompas, nie warunek.
3. **Rozszerzenie jako drugie dno** — amb/extra w tej samej lekcji, nie osobny podręcznik na końcu.

| Poziom | Znaczenie |
|--------|-----------|
| **basic** | na lekcji i sprawdzianie |
| **train** | utrwalenie, egzamin |
| **amb** | dlaczego / kontekst |
| **extra** | mechanizmy, matematyka, most do L013 |

Tempo: dowolne. Bez paska postępu. Harmonogram = rytm, nie bat.

**Oznaczenia reguł (bez emoji):** fakt chemiczny · uproszczenie szkolne · wskazówka egzaminacyjna · pułapka.

---

## A2. Schemat lekcji MASTER (obowiązkowy szablon)

Każda lekcja L001–L012 ma ten szkielet (w MD i HTML):

```
JAK PRACOWAĆ
FILOZOFIA (krótko)
POZIOMY + CO WARTO WIEDZIEĆ
1. CEL
2. ŚCIĄGA (basic + wplecione amb/extra)
3. KLINIKA BŁĘDÓW
4. DOŚWIADCZENIE MODEL
5. ĆWICZENIA (basic / train / amb / extra)
6. FISZKI
7. TEST + odpowiedzi
8. CHECKLISTA
9. MAPA MYŚLI
10. CO DALEJ
SŁOWNIK
DODATEK C — format doświadczenia
DODATEK D — format kliniki
DODATEK E — warstwa extra (pełna)
```

**HTML:** karty kolorów basic/train/trap/hint/amb/extra · odpowiedzi ukryte · fiszki klikalne · extra-layer · footer z wersją.

---

## A3. Format doświadczenia (stały)

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: pęcherzyki gazu.  
Wniosek: powstaje substancja gazowa.  
Nie: „Obserwacja: powstał gaz.”

---

## A4. Format kliniki błędów (stały)

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

---



## A4b. BHP globalny (skrót dla wszystkich lekcji)

| Zasada | Treść |
|--------|--------|
| Kwas do wody | zawsze kwas wlewamy do wody (nigdy odwrotnie) |
| Zapach | wachlowanie ręką — nie wąchać bezpośrednio |
| Kontakt | płukać dużą ilością wody, wołać nauczyciela |
| Pipeta | gruszka/pipetor — nigdy ustami |
| Okulary i fartuch | zawsze |
| Ogień | wg instrukcji, nigdy bez opieki |
| Nie smakować | nigdy |
| Nie wracać odczynników | zanieczyszczenie zapasu |

**Uwaga:** pełne BHP + szkło laboratoryjne w L001.

## A5. Mnemotechniki (rdzeń kursu)

| # | Mnemotechnika | Znaczenie |
|---|---------------|-----------|
| 1 | Z = protony; A = p⁺+n⁰ | liczby |
| 2 | Kation oddał, anion przyjął | jony |
| 3 | W–K–S–K | wzory |
| 4 | Współczynniki tak, indeksy nie | bilans |
| 5 | Kwas do wody | BHP |
| 6 | Zapach — wachluj | BHP |
| 7 | Kontakt — płucz wodą | BHP |
| 8 | Nawias = pudełko na grupę | Ca(OH)₂ |
| 9 | Nawias gdy grupa się powtarza | wzory |
| 10 | H–I, O–II, Al–III, C–IV | wartościowość |
| 11 | Kwasy: beztlenowe „-owodorowy”, tlenowe z cyfrą | nazwy kwasów |
| 12 | Reszta kwasowa = kwas minus H⁺ | Cl⁻, SO₄²⁻, NO₃⁻ |
| 13 | Zobojętnianie: kwas + zasada → sól + woda | sole |
| 14 | Rozpuszczalne sole: azotany(V), metale alkaliczne | tabela rozpuszczalności |
| 15 | Spalanie: całkowite → CO₂ + H₂O; niecałkowite → CO + C | węglowodory |
| 16 | UTLENIACZ przyjmuje e⁻; REDUKTOR oddaje e⁻ | redoks |
| 17 | Obserwacja ≠ wniosek | doświadczenia |

Opcjonalne: S A W P S · exo/endo · F>O>N>Cl · metal oddaje / niemetal bierze.

Żarty tylko jako haczyk pamięciowy — nie w odpowiedzi na sprawdzianie.

---

## A6. Zasada 80/20 (wrzesień + dalej)

| Lekcja | 20% = 80% efektu |
|--------|------------------|
| L001 | wartościowość, W–K–S–K, bilans, typy reakcji |
| L002 | nazwa, charakter, reakcja z wodą |
| L003 | nawias OH, z tlenku, zobojętnianie |
| L004 | wzory kwasów, dysocjacja, reakcje z metalami/zasadami |
| L005 | wzory soli, metody, strącanie |
| L006 | wzór ogólny alkanów/alkenów/alkinów, spalanie, woda bromowa |
| L007 | 3 grupy związków, wykrywanie, denaturacja |
| L008 | Cp, Cm, rozcieńczanie |
| L009 | mol, proporcje z równania, nadmiar/niedomiar |
| L010 | stopnie utlenienia, utleniacz vs reduktor |
| L011 | format doświadczenia, obserwacja ≠ wniosek |
| L012 | przekrój działów — uczeń wie, co powtórzyć |
| L013 | extra po opanowaniu L001–L012 — nie zamiast E8 |

---

## A7. Indeks — rejestr i harmonogram

### Numeracja kanoniczna

L000 indeks · L013 zaawansowana (opcjonalna) · L001 fundamenty · L002 tlenki · L003 wodorotlenki · L004 kwasy · L005 sole · L006 organika · L007 biochemia · L008 stężenia · L009 stechiometria · L010 redoks · L011 doświadczenia · L012 powtórka klasy 8.

### Wrzesień (IX) — bloki

| Blok | Treść | Poziomy | Plik szczegółowy |
|------|--------|---------|------------------|
| Start | Organizacja, BHP, diagnoza | basic | **w tym MASTER (Część B)** |
| Fundamenty | **L001** całość | basic+train+amb+extra | `CHEMIA_PODSTAWA_PLUS_L002_v3.1.md` + HTML |
| Mieszaniny | substancja / mieszanina, rozdzielanie | basic | **w tym MASTER (Część B)** + wplecione w L001/L002 |
| Tlenki — start | **L002** wprowadzenie | basic+amb | `CHEMIA_PODSTAWA_PLUS_L003_v1.0.md` + HTML |

### Październik (X) — zapowiedź

L002 cd. (reakcje) · Sprawdzian #1 Tlenki · L003 start.

### Powtórka #1 (koniec IX)

10–15 min: fiszki L001 + mapy ATOM / JON / WZÓR + pierwsze tlenki.

### Pliki kanoniczne (edycja)

| Co | Plik MASTER (edycja systemowa) | Forma HTML |
|----|--------------------------------|------------|
| System + indeks + wrzesień | **ten plik** `CHEMIA_PODSTAWA_PLUS_KURS_MASTER.md` | L000 HTML |
| L001 pełna | `CHEMIA_PODSTAWA_PLUS_L002_v3.1.md` | L001 HTML MASTER |
| L002 | `CHEMIA_PODSTAWA_PLUS_L003_*.md` | L002 HTML |
| L003 | `CHEMIA_PODSTAWA_PLUS_L004_*.md` | L003 HTML |

**Zasada edycji:** zmiany filozofii, schematu, BHP globalnego, mnemotechnik, harmonogramu → **tylko ten plik**. Zmiany treści chemicznej L001 → plik L001. Potem ewentualna synchronizacja HTML.

### Pełna lista lekcji (rejestr)

| ID | Temat | Wersja MD | HTML |
|----|--------|-----------|------|
| L000 | Indeks roku | MASTER (plik HTML L000) | ten projekt: jeden indeks |
| SYSTEM_IX | KURS MASTER (filozofia, wrzesień) | v1.0 | — |
| L001 | Fundamenty | MASTER v3.1 | CHEMIA_L001_FUNDAMENTY.html |
| L002 | Tlenki | MASTER v2.0 | planowany |
| L003 | Wodorotlenki | MASTER v2.0 | planowany |
| L004 | Kwasy | MASTER v1.0 | planowany |
| L005 | Sole | MASTER v1.0 | planowany |
| L006 | Węglowodory | MASTER v1.0 | planowany |
| L007 | Biochemia | MASTER v1.0 | planowany |
| L008 | Stężenia | MASTER v1.0 | planowany |
| L009 | Stechiometria | MASTER v1.0 | planowany |
| L010 | Redoks | MASTER v1.0 | planowany |
| L011 | Doświadczenia | MASTER v1.0 | planowany |
| L012 | Powtórka klasy 8 | MASTER v1.0 | planowany |
| L013 | Extra zaawansowana | MASTER v1.0 | CHEMIA_L013_ZAAWANSOWANA_extra.html |

### Harmonogram (skrót)

- **IX** — SYSTEM_IX: Start, BHP, diagnoza + L001 + mieszaniny + L002 intro + Powtórka #1.
- **X** — L002 cd. (reakcje) + Sprawdzian #1 + start L003.
- **XI–XII** — L003 + L004 (kwasy) + Sprawdzian #2.
- **I** — L005 (sole) + Sprawdzian #3 (semestralny).
- **II–III** — L005 cd. (strącanie) + Sprawdzian #4 (nieorganika).
- **IV** — L006 (organika) + L007 (biochemia wstęp).
- **V** — L008 (stężenia) + L009 (stechiometria) + L010 (redoks) + Sprawdzian #5.
- **VI** — L011 (doświadczenia) + L012 (powtórka) + Sprawdzian #6 + opcjonalnie L013.


---



## A7b. Jak korzystać z fiszek (dla ucznia)

1. Najpierw próbuj odpowiedzieć — dopiero potem sprawdzaj.
2. System powtórek: dziś → +1 dzień → +3 dni → +1 tydzień → +1 miesiąc.
3. Zestawy mieszane (interleaving) — 3 lekcje na raz.
4. Błędną fiszkę odkładaj na koniec talii.
5. Minimum: 10 fiszek dziennie z bieżącej lekcji.

## A7c. Status egzaminacyjny (stan 2026/2027)

- **Rok szkolny:** 2026/2027.
- **Dokument CKE:** informator, komunikat, przykładowe arkusze — sprawdzić aktualne wydania przed użyciem.
- **Zakres chemii na E8:** wybrane treści z klasy 7 i 8 (BHP, wzory, równania, tlenki–sole, stężenia — wg aktualnego informatora).
- Ten pakiet **uzupełnia** podręcznik; nie zastępuje informatora CKE.



## A9. Przypisy merytoryczne (szkoła vs precyzja)

Te skróty zostają w lekcjach jako **język E8**. Obok — warstwa precyzji (nie kasuje zapisu szkolnego).

1. **NH₄OH** — skrót; w roztworze NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, nie cząsteczka NH₄OH.
2. **H₃PO₃** — wzór mylący: struktura HPO(OH)₂, kwas **dwuprotonowy**; H₃PO₂ jednoprotonowy. Na E8 zwykle H₃PO₄.
3. **Powłoki K, L, M** — historyczne; IUPAC: n = 1, 2, 3…
4. **Tlenki „obojętne”** (CO, NO, N₂O) — obojętne **wobec wody w warunkach szkolnych**.
5. **OF₂** — fluorek tlenu, nie tlenek (F bardziej elektroujemny).
6. **„Wartościowość jonu”** — skrót; precyzyjnie: **ładunek jonu**.
7. **Aᵣ** — średnia **ważona abundancją** izotopów, nie „średnia mas” bez wagi.
8. **Woda bromowa** — Br₂ słabo w H₂O; często z KBr (Br₃⁻) — extra.
9. **H₂CO₃** — w roztworze znikome; kwasowość CO₂(aq) + H₂O ⇌ H⁺ + HCO₃⁻.
10. **Fe(OH)₂** — świeży osad bywa biały; zielenieje/brunatnieje przez utlenianie powietrzem.

## A8. Słownik systemowy

| Pojęcie | Definicja |
|---------|-----------|
| MASTER | MD = źródło prawdy |
| basic / train / amb / extra | głębokość, nie osobne podręczniki |
| punkt wejścia | mapa pojęć, nie bramka |
| 80/20 | rdzeń lekcji |
| spaced repetition | powtórki w odstępach |

---

# CZĘŚĆ B — WRZESIEŃ (treść do prowadzenia i do HTML)

## B0. Orientacja miesiąca

**Cel września:** bezpieczna praca + solidne fundamenty klasy 7 + start tlenków.  
**Bez tego nie ma sensu iść w wodorotlenki i kwasy.**

```
Tydz. 1     → Organizacja + BHP + diagnoza
Tydz. 1–2   → L001 (fundamenty)
Tydz. 2–3   → Mieszaniny / rozdzielanie (basic) + domknięcie L001
Tydz. 3–4   → L002 wprowadzenie (tlenki: wzór, nazwa, charakter)
Koniec IX   → Powtórka #1
```

---

## B1. START — Organizacja, BHP, diagnoza

### Cel

- Znać zasady BHP i podstawowy sprzęt.
- Wiedzieć, jak pracować z materiałami kursu (poziomy, fiszki, klinika).
- Zdiagnozować luki z klasy 7 (5–10 min).

### BHP (basic) — ściąga

| Zasada | Treść |
|--------|--------|
| Kwas do wody | zawsze kwas wlewamy do wody, nie odwrotnie |
| Zapach | wachlowanie ręką, nie wąchać z butelki |
| Kontakt | płukać wodą; wołać nauczyciela |
| Pipeta | nie ustami |
| Okulary | ochrona oczu; rękawice nie zastępują mycia rąk |
| Ogień / ogrzewanie | według instrukcji; włosy, odzież |

**Pułapka:** „trochę kwasu do wody to to samo co woda do kwasu” — nie.

### Sprzęt (basic)

Probówka, zlewka, kolba, lejek, bagietka, statyw, palnik (lub płyta), moździerz, parownica — nazwa + jedno zastosowanie.

### Jak korzystać z lekcji (dla ucznia)

1. Najpierw próbuj zadania, potem czytaj odpowiedź.  
2. basic → train → amb/extra według ochoty.  
3. Fiszki i powtórki w odstępach.  
4. Błąd w klinice = nauka, nie wstyd.

### Diagnoza startowa (5–8 min)

1. Z = ? A = ? w atomie.  
2. Jon Al³⁺: ile e⁻ przy Z=13?  
3. Wzór: tlenek glinu / chlorek wapnia.  
4. Bilans: H₂ + O₂ → H₂O (współczynniki).  
5. Co to wartościowość vs ładunek jonu (jednym zdaniem)?

**Interpretacja:** 4–5/5 → L001 szybko jako powtórka. 2–3 → L001 uważnie. 0–1 → L001 od zera + fiszki.

### Doświadczenie (opcjonalnie, format stały)

**Problem:** Czy fenoloftaleina zmienia barwę w NaOH(aq)?  
**Obserwacja:** malinowa.  
**Wniosek:** odczyn zasadowy.  
**BHP:** okulary; NaOH żrący.

---

## B2. L001 — Fundamenty (odsyłacz + 80/20)

**Pełna treść:** plik `CHEMIA_PODSTAWA_PLUS_L002_v3.1.md` + HTML MASTER.  
**Tu tylko mapa robocza września.**

### Co warto wiedzieć wcześniej

Nic — to start. Ewentualnie: ciekawość z diagności.

### 80/20 września z L001

1. Atom: Z, A, p⁺, n⁰, e⁻; atom vs jon.  
2. Wartościowość (model szkolny „rąk”) ≠ ładunek ≠ indeks ≠ współczynnik.  
3. W–K–S–K + nawias przy grupie.  
4. Współczynniki tak, indeksy nie.  
5. Typy wiązań (orientacyjnie) + proste bilansowanie.

### Kolejność w klasie (propozycja)

Atom/jon → układ okresowy (grupy, e⁻ walencyjne) → wartościowość → wzory → wiązania → równania → klinika → fiszki → test L001.

### Warstwy

- **basic:** jak wyżej.  
- **train:** ćwiczenia + test L001.  
- **amb/extra:** izotopy, elektroujemność, VSEPR, hybrydyzacja, redoks wstęp — w L001 DODATEK E; nie wymagane na pierwszym sprawdzianie września.

### Powtórka w trakcie IX

Po L001: fiszki 10 min następnego dnia; mapa ATOM/JON/WZÓR.

---

## B3. Mieszaniny i rozdzielanie (basic, wrzesień)

### Cel

- Odróżnić substancję jednorodną / mieszaninę.  
- Znać: filtracja, destylacja, krystalizacja, chromatografia (idea).  
- Zapisać obserwację ≠ wniosek.

### Ściąga

| Pojęcie | Znaczenie |
|---------|-----------|
| Substancja czysta | jeden rodzaj cząsteczek / jednostek wzoru |
| Mieszanina | co najmniej dwie substancje |
| Homogeniczna | wygląda jednorodnie (roztwór) |
| Heterogeniczna | widać fazy / ziarna |

**Metody:** filtracja (ciało stałe + ciecz) · odparowanie / krystalizacja · destylacja (różne T_wrzenia) · chromatografia (różne powinowactwo).

### Klinika

| Błąd | Poprawnie |
|------|-----------|
| „Woda to mieszanina H i O” | woda to związek (substancja) |
| „Filtracja rozdziela sól od wody w roztworze” | nie — potrzeba odparowania / destylacji |

### Doświadczenie model

**Problem:** Jak oddzielić piasek od wody?  
**Obserwacja:** na sączku zostaje piasek; przesącz klarowny.  
**Wniosek:** filtracja oddziela nierozpuszczalne ciało stałe od cieczy.  
**BHP:** ostrożnie ze szkłem.

### Ćwiczenia (basic)

1. Substancja czy mieszanina: powietrze, CO₂, herbata, żelazo.  
2. Dobierz metodę: piasek+sól+woda; alkohol+woda; kreda+woda.

---

## B4. L002 — Tlenki: wprowadzenie (wrzesień)

**Pełniejsza treść:** `CHEMIA_PODSTAWA_PLUS_L003_v1.0.md`.  
**We wrześniu:** wzór, nazwa, charakter, pierwsza reakcja z wodą — bez pełnego zestawu amfoteryczności extra.

### Co warto wiedzieć wcześniej (kompas)

Z L001: W–K–S–K, O najczęściej II, Fe/Cu z cyfrą w nazwie, metal vs niemetal (orientacyjnie).

### Cel (wrzesień)

- Ułożyć i nazwać proste tlenki.  
- Podać charakter: zasadowy / kwasowy / obojętny.  
- Napisać: tlenek metalu + H₂O → wodorotlenek; tlenek niemetalu + H₂O → kwas (przykłady).

### Ściąga (basic)

**Tlenek** = pierwiastek + tlen.

| Wzór | Nazwa | Charakter (typowe) |
|------|-------|---------------------|
| Na₂O, CaO, MgO | tlenki metali | zasadowy |
| SO₂, SO₃, CO₂, P₂O₅ | tlenki niemetali | kwasowy |
| CO, NO, N₂O | — | obojętny (szkolnie) |
| Fe₂O₃, CuO | z cyfrą rzymską | — |

**Reakcje model:**  
Na₂O + H₂O → 2NaOH  
CaO + H₂O → Ca(OH)₂  
SO₃ + H₂O → H₂SO₄  
CO₂ + H₂O → H₂CO₃  

**P₂O₅:** zapis szkolny; cząsteczka P₄O₁₀ — amb.

### Klinika (wrzesień)

| Błąd | Poprawnie |
|------|-----------|
| FeO₃ | Fe₂O₃ |
| „tlenek żelaza” | tlenek żelaza(II) lub (III) |
| Ca₂O₂ | CaO |
| CO₂ zasadowy | kwasowy |

### Doświadczenie

CaO + H₂O: rozgrzanie, odczyn zasadowy (papierek) → wniosek: powstaje Ca(OH)₂.

### Ćwiczenia (basic + train)

Wzory i nazwy · charakter · dokończ +H₂O · popraw FeO₃ / Ca₂O₂.

### Amb (opcjonalnie we IX)

Amfoteryczność Al₂O₃, ZnO — można wspomnieć; pełne równania w X lub L002 cd.

### Co dalej

Październik: L002 reakcje z kwasami/zasadami · sprawdzian #1 · start L003.

---

## B5. Powtórka #1 (koniec września)

| Czas | Co |
|------|-----|
| 5 min | fiszki L001 (Z/A, jon, W–K–S–K, współczynnik) |
| 5 min | mapa ATOM / JON / WZÓR |
| 5 min | 3 tlenki: wzór + charakter + jedna reakcja z wodą |

**3 pytania:** Co umiem? Co mylę? Co zaskoczyło?

---

# CZĘŚĆ C — CHECKLISTA EDYCJI (dla autora)

Gdy zmieniasz kurs:

- [ ] Zmiana filozofii / schematu / BHP globalnego → **ten plik (Część A)**
- [ ] Zmiana harmonogramu IX → **Część A7 + B0**
- [ ] Zmiana treści L001 → plik L001 v3.1, potem krótka nota tutaj w B2
- [ ] Zmiana L002 pełna → plik L002, skrót września w B4
- [ ] Nowa lekcja → dodaj w A7 rejestr + szkielet z A2
- [ ] HTML generuj z MASTER lekcji; systemowe teksty bierz z Części A

---

# CZĘŚĆ D — CO DALEJ (kolejność pracy)

1. Ten **KURS MASTER** — edycja systemowa i września.  
2. L001 HTML/MD już v3.1 — trzymać zsynchronizowane z DODATEK E.  
3. Podnieść L002/L003 do pełnego standardu A2 (bez usuwania treści).  
4. L004+ według rejestru.  
5. L013 na końcu (extra).

---

**Koniec CHEMIA_PODSTAWA_PLUS_KURS_MASTER v1.0**

Data: 2026-09-12  
Wrzesień: Start + L001 + Mieszaniny + L002 intro + Powtórka #1  
System: filozofia, schemat, mnemotechniki, indeks, 80/20 — w jednym pliku do edycji.

<!-- ==================== END SYSTEM_IX ==================== -->



---

<!-- ==================== BEGIN L001 ==================== -->

# LEKCJA L001 — POWTÓRKA FUNDAMENTÓW Z KLASY 7

# CHEMIA: PODSTAWA PLUS

## L001 — Powtórka fundamentów z klasy 7 (start klasy 8)

**Wartościowość · budowa atomu · jony · układ okresowy · wiązania · wzory · równania**

**MASTER v3.1** · źródło prawdy dla HTML · 2026-09-11  
Wzorzec struktury: POLSKI: PODSTAWA PLUS (GLOBALNY SCHEMAT + warstwy)  
Wizualizacja: HTML bez paska postępu, bez emoji, praca we własnym tempie

**Kolejność logiczna treści:** atom → jon → wartościowość / ładunek → wzór → wiązanie → równanie

**Zasada techniczna:** ten plik MD jest MASTER. HTML L001 jest jego wiernym rozwinięciem. Indeks L000 linkuje do L001 MASTER.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane (VSEPR, hybrydyzacja…) | tylko po opanowaniu podstawy; nie wymagane na sprawdzianach szkolnych | fiolet / osobna sekcja |

**Zmiany w v3.0 (względem 2.7):**
· MASTER: MD = źródło prawdy; HTML = forma
· ujednolicona numeracja lekcji w indeksie L000 (L001 → L002 tlenki → …)
· wartościowość: mocniejsza ramka „model szkolny” + tabela Typowo / Rozszerzenie
· O i H: sformułowania „najczęściej / w modelu szkolnym” zamiast absolutów
· stały format DOŚWIADCZENIE (problem → hipoteza → sprzęt → obserwacja → wniosek → równanie → BHP)
· stały blok: obserwacja ≠ wniosek
· rozbudowany format Kliniki błędów (błąd → reguła → zadanie podobne → pułapka)
· kontrprzykłady jako element stały
· warstwa zaawansowana (VSEPR, hybrydyzacja sp³, moment dipolowy, energia wiązania) przeniesiona z HTML i oznaczona jako „nie musisz teraz”
· słownik definicji jednym zdaniem jako oficjalne źródło terminologii kursu
· zakres: odniesiony do podstawy programowej obowiązującej dla danego rocznika (nie „MEN” ogólnie)
· zachowana cała treść v2.7 bez skracania

**Zmiany w v2.7 (względem 2.6):**
· Cl: I w chlorkach; III/V/VII w związkach tlenowych (rozszerzenie)
· P: III lub V; względem H zwykle III, maks. względem O = V
· wartościowość maksymalna vs numer grupy (stary system A)
· silniejsza ramka P₂O₅ / P₄O₁₀
· wiązanie jonowe = przyciąganie w sieci krystalicznej
· definicja elektronów walencyjnych + prostszy okres
· definicja wzoru sumarycznego przed W–K–S–K
· tabela indeks / współczynnik / nawias w jednym miejscu
· cele w języku ucznia
· idea równowagi „rąk” przed algorytmem krzyżowania
· dwa tryby zapisu wzorów (wartościowość vs ładunki)
· ograniczone mnemoniki rdzeniowe
· etymologie rozszerzone
· poprawki redakcyjne (80/20, szkło, spójność)

**Zmiany w v2.6 (względem 2.5):**
· poprawiony przykład grupy octanowej (CH₃COONa)
· HCl jako kowalencyjne spolaryzowane
· elektroujemność: największa tylko F
· precyzyjniejsze P₂O₅ / P₄O₁₀
· złagodzona definicja spalania
· wzmocnione Ca(OH)₂ vs CaOH₂
· ramka ochronna wartościowości (model szkolny)
· wzór ładunku jonu = p⁺ − e⁻
· kontrprzykład okres/jon (Na vs Na⁺)
· tabela grupa ≠ wartościowość (Cl)
· algorytm rozpoznawania wiązań 1–5
· „współczynnik mnoży wszystko”
· nowe typy zadań (wybierz regułę, P/F, od wzoru do wszystkiego)
· wyraźniejsze warstwy Musisz / Warto / Dla ciekawych

**Zmiany w v2.5:**  
· precyzja: masa cząsteczkowa vs masa jednostki wzoru  
· wyraźne rozdzielenie: wartościowość ≠ stopień utlenienia ≠ ładunek jonu ≠ indeks ≠ współczynnik  
· poprawiona definicja jonu (jedno- i wieloatomowy)  
· algorytm liczenia elektronów w jonie  
· wartościowość jako model „liczby rąk” + test równowagi  
· osłabiona reguła elektroujemności (orientacyjna)  
· powód reguły „kwas do wody”  
· usunięte pytanie o nietrwały SO  
· zadania o siarce oparte na konkretnych związkach  
· nowe 5-minutowe ćwiczenie diagnostyczne fundamentów  
· ulepszone skojarzenia

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

Ta lekcja jest zbudowana tak, żeby **twój mózg sam chciał zapamiętywać**. Zasady:

1. **Nie czytaj biernie.** Po każdym akapicie zatrzymaj się i odpowiedz sobie w myśli: „Co ja z tego zapamiętam?”.
2. **Najpierw próbuj, potem patrz na odpowiedź.** Błąd popełniony przed nauką jest bezcenny — twój mózg zapamiętuje go lepiej niż 10 poprawnych przykładów.
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień. Nawet 5 minut wystarczy.
4. **Mów na głos.** Chemia wchodzi przez usta, nie przez oczy. Czytaj wzory na głos: „Al-dwa-O-trzy”.
5. **Rysuj.** Nawet brzydko. Atom, jon, krzyżowanie — ręka pamięta lepiej niż wzrok.
6. **Łap moment „aha!”** — to sygnał, że mózg właśnie zapisał trwale. Zatrzymaj się wtedy i powiedz sobie, co zrozumiałeś.

**Zasada 80/20:** 20% tej lekcji daje 80% efektu. Te 20% to: **wartościowość, wzory, bilansowanie i typy reakcji**. Reszta to tło.

**Uwaga o mnemonikach:**  
**Rdzeniowe (warto zapamiętać):**  
1. Z = protony; A = protony + neutrony  
2. Kation oddał, anion przyjął  
3. W–K–S–K  
4. Współczynniki tak, indeksy nie  
5. Kwas do wody  

Reszta skojarzeń (w tym żarty) jest **opcjonalna** — nie ucz się ich wszystkich.

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić”
ROZSZERZENIE    →  „rozumiem dlaczego”
DLA AMBITNYCH   →  „potrafię połączyć”
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić”
```

**Tempo pracy:** dowolne. Uczeń sam wybiera, ile czasu poświęca na daną część. Nie narzucamy sztywnych ram czasowych ani paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW”:**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 6.5.)

**Oznaczenia reguł (bez emoji, opis słowny):**  
· fakt chemiczny  
· uproszczenie szkolne  
· wskazówka egzaminacyjna  
· uwaga (pułapka)

---

## GLOBALNY SCHEMAT LEKCJI (CHEMIA)

```text
0. MAPA LEKCJI + ORIENTACJA
0.5. WIELKA MAPA SKOJARZEŃ
1. CEL LEKCJI (czasowniki obserwowalne)
2. ŚCIĄGA Z NOTATEK
3. SPIS TREŚCI
4. DIAGNOZA (test wstępny)
5. TREŚĆ MERYTORYCZNA
   5.1. BHP
   5.2. Budowa atomu, izotopy, jony
   5.3. Układ okresowy + trendy
   5.4. Wartościowość (kluczowy temat)
   5.5. Wzory sumaryczne + grupy atomów + wzory strukturalne
   5.6. Wiązania chemiczne (jonowe, kowalencyjne, metaliczne)
   5.7. Równania reakcji – podstawy + egzo/endotermiczne
   5.8. JAK WYBRAĆ STRATEGIĘ? (ramka decyzyjna)
6. PUŁAPKI + STOP przed oddaniem
6.5. KLINIKA BŁĘDÓW (realna sekcja z ćwiczeniami)
7. ĆWICZENIA (podstawowy / egzaminacyjny / ambitny / interleaving)
8. ROZSZERZENIE
9. DLA AMBITNYCH (ukryte z przyciskiem)
10. ŚCIĄGA PRZED TESTEM
11. FISZKI
12. TEST KOŃCOWY
13. PODSUMOWANIE / CHECKLISTA
14. SYSTEM POWTÓREK
15. MAPY MYŚLI I SKOJARZENIA
16. CO DALEJ? — zapowiedź klasy 8
```

---

## METADANE LEKCJI

| Pole | Wartość |
|------|---------|
| Identyfikator | L001 |
| Temat | Powtórka fundamentów z klasy 7 (start klasy 8) |
| Podtytuł | Wartościowość, budowa atomu, jony, układ okresowy, wiązania, wzory, równania |
| Wersja | 2.7 (ideał egzaminacyjny: Cl/P wartościowości, maks. wartościowość, P₂O₅/P₄O₁₀, wiązanie jonowe, indeks–współczynnik–nawias, cele ucznia, W–K–S–K z ideą) |
| Data | 2026-09-11 |
| Tempo | dowolne (samodzielna praca) |
| Zakres | BHP, atom, izotopy, jony, układ okresowy, wartościowość, wzory, wiązania (jonowe, kowalencyjne, metaliczne), typy i bilansowanie równań, elektroujemność, masa cząsteczkowa, rozpuszczalność |
| Format wyjściowy | markdown → HTML/CSS/JS |

---

## 0. MAPA LEKCJI + ORIENTACJA

**Plan pracy**

1. Przypomnij – atom, jon, układ okresowy.  
2. Opanuj – wartościowość i układanie wzorów (kluczowy temat).  
3. Zastosuj – wiązania, typy reakcji, bilansowanie, ćwiczenia.

**Kluczowy temat:** wartościowość — bez niej nie ułożysz poprawnych wzorów w klasie 8.

**Flow:**  
BHP i atom → Jon → Układ okresowy → Wartościowość → Wzory → Wiązania → Równania → Strategie → Klinika błędów → Ćwiczenia

**Pułapki PODSTAWA:**  
· zmienianie indeksów przy bilansowaniu,  
· Fe / Cu bez podania wartościowości w nazwie,  
· mylenie liczby atomowej z masową (oraz z masą atomową z układu),  
· FeO₃ zamiast Fe₂O₃,  
· brak nawiasu przy powtarzającej się grupie atomów.

**Minimum vs rozszerzenie**

**Trzy warstwy — nie ucz się wszystkiego naraz:**

| Warstwa | Co opanować |
|---------|-------------|
| **Musisz umieć** | BHP, atom i jon, Z i A, wartościowość (H, O, grupy 1–2, Al, C, Fe), wzory, nawiasy, wiązania jonowe/kowalencyjne/metaliczne, bilans równań, typy: synteza/analiza/wymiana/spalanie |
| **Warto umieć** | Izotopy, wzory elektronowe, egzo/endotermiczne, wypieranie vs podwójna wymiana |
| **Dla ciekawych** | Trendy okresowe, elektroujemność i polaryzacja, rozpuszczalność, zapis jonowy, podpowłoki, izobary, P₄O₁₀, Mn/Cr wartościowości, wyjątki od oktetu, alotropia, masa jednostki wzoru |

**PODSTAWA (Musisz umieć):** atom, p⁺/n⁰/e⁻, Z, A, izotopy, jon, grupy i okresy, wartościowość, wzory sumaryczne, wiązanie jonowe i kowalencyjne, bilansowanie prostych równań.

**Dla chętnych / ambitnych:** konfiguracja podpowłokowa, izobary, P₄O₁₀, wyjątki od reguły oktetu, wartościowość a stopień utlenienia, sieci kowalencyjne, wiązanie metaliczne, elektroujemność, alotropia, zapis jonowy równań.

---

## 0.5. WIELKA MAPA SKOJARZEŃ (PRZECZYTAJ RAZ, ZAPAMIĘTASZ NA ZAWSZE)

Ta sekcja to **hak pamięciowy** — przeczytaj ją raz, wróć do niej po tygodniu. Działa jak „folder” w mózgu, do którego wkładasz resztę wiedzy.

**Wyobraź sobie warsztat chemika:**

- **Atom** = pojedyncze narzędzie na stole (protony i neutrony w pudełku — jądrze — a elektrony krążą jak muchy wokół lampy).
- **Jon** = to samo narzędzie, ale naładowane elektrycznie (kation oddał elektron, anion przyjął).
- **Układ okresowy** = tablica narzędzi w warsztacie, ułożona według **rosnącej liczby atomowej Z**. Każdy pierwiastek ma swoje stałe miejsce, a jego izotopy mogą mieć różne liczby masowe A.
- **Wartościowość** = liczba wiązań, którymi atom łączy się z innymi atomami (H ma 1, O ma 2, Al ma 3, C ma 4). Wiązanie podwójne liczymy jako dwa, potrójne jako trzy.
- **Wzór sumaryczny** = „uścisk dłoni” między atomami — liczba wiązań po obu stronach musi się zgadzać.
- **Wzór strukturalny** = rysunek „kto z kim trzyma się za ręce” (kreski zamiast indeksów).
- **Wzór elektronowy** = to samo, ale z kropkami zamiast kresek — widać elektrony walencyjne.
- **Wiązanie jonowe** = atomy tworzą jony dodatnie i ujemne wskutek przekazania elektronu lub elektronów; następnie przeciwne ładunki się przyciągają. Najczęściej dotyczy to połączenia metalu z niemetalem.
- **Wiązanie kowalencyjne** = dwa atomy uwspólniają elektrony (niemetal + niemetal).
- **Wiązanie metaliczne** = dodatnie jony metalu zanurzone w „morzu elektronów”.
- **Równanie reakcji** = przepis kucharski: substraty → produkty; nic nie znika, wszystko się przekształca.

**Zapamiętaj to jedno zdanie:**  
„Atom może tworzyć wiązania. Wartościowość mówi, iloma symbolicznymi «rękami» atom łączy się z innymi atomami; wzór pokazuje, czy liczba tych «rąk» się zgadza.”

---

## 1. CEL LEKCJI

**Po tej lekcji umiesz:**
- policzyć protony, neutrony i elektrony w atomie oraz jonie;
- odróżnić Z, A i masę atomową;
- ułożyć prosty wzór chemiczny z wartościowości;
- zastosować nawias przy grupie atomów;
- rozpoznać podstawowy typ wiązania;
- zbilansować równanie bez zmieniania indeksów.

Po tej lekcji uczeń:

- stosuje podstawowe zasady BHP w pracowni chemicznej,
- opisuje budowę atomu i oblicza liczbę p⁺, n⁰, e⁻,
- rozróżnia atom i jon (kation, anion),
- orientuje się w układzie okresowym (system 1–18) i przewiduje typową wartościowość pierwiastków grup głównych,
- **ustala wartościowość i układa poprawne wzory sumaryczne** (w tym z grupami atomów),
- rozróżnia wiązanie jonowe, kowalencyjne i metaliczne,
- bilansuje proste równania reakcji i rozpoznaje typy: synteza, analiza, wypieranie, podwójna wymiana, spalanie,
- rozróżnia reakcje egzotermiczne i endotermiczne,
- oblicza masę cząsteczkową prostych związków,
- zna pojęcie elektroujemności i potrafi je wykorzystać do przewidywania charakteru wiązania.

---

## 2. ŚCIĄGA Z NOTATEK

### Wartościowości (najważniejsze)

| Pierwiastek | Wartościowość | Uwagi |
|-------------|---------------|--------|
| H | I | w podstawowym modelu szkolnym |
| O | II (najczęściej) | Wyjątki (nadtlenki itd.) — później; na tym etapie nie musisz zapamiętywać |
| Na, K | I | grupa 1 |
| Mg, Ca | II | grupa 2 |
| Al | III | grupa 13 |
| C | IV | grupa 14 |
| N, P | III / V (P: względem H zwykle III, maks. względem O = V) | P względem H zwykle III; maks. względem O = V |
| S | II / IV / VI | zależnie od związku |
| Cl | I (w chlorkach); III, V, VII w związkach tlenowych (rozszerzenie) | wobec H i metali — I; w tlenkach/kwasach tlenowych — wyższe |
| Fe | II / III | **podawać w nazwie** |
| Cu | I / II | **podawać w nazwie** |
| Sn | II / IV | **podawać w nazwie** |
| Pb | II / IV | **podawać w nazwie** |
| Mn | II / IV / VII | **podawać w nazwie** |
| Cr | II / III / VI | **podawać w nazwie** |

**Mnemonic główny:**  
**H–I, O–II, Al–III, C–IV** → „wodór raz, tlen dwa, glin trzy, węgiel cztery”.

**Wzór sumaryczny** pokazuje rodzaje pierwiastków w substancji oraz liczbę atomów każdego z nich.  
Przykład: H₂O oznacza dwa atomy wodoru i jeden atom tlenu.  
Al₂O₃ = dwa atomy glinu i trzy atomy tlenu w jednostce wzoru.

### Krzyżowanie wartościowości — algorytm W–K–S–K

**Najpierw idea równowagi „rąk”:**  
W związku chemicznym liczba „rąk” użytych przez jeden pierwiastek musi zgadzać się z liczbą „rąk” użytych przez drugi.  
Dla Al(III) i O(II): najmniejsza wspólna liczba to 6, więc potrzeba 2 atomów Al i 3 atomów O → Al₂O₃.  
**Krzyżowanie nie jest sztuczką do zapamiętania — to skrót prowadzący do takiej równowagi.**

**W** — Wartościowości (zapisz cyframi rzymskimi nad symbolami).  
**K** — Krzyżuj (wartościowość jednego → indeks drugiego).  
**S** — Skracaj (podziel przez NWD).  
**K** — Kontrola (łączna wartościowość po obu stronach musi być równa).

Przykład kontroli: Alᴵᴵᴵ Oᴵᴵ → Al₂O₃; 2·III = 6 i 3·II = 6.  
Przykład skracania: Caᴵᴵ Oᴵᴵ → Ca₂O₂ → **CaO**.

**Dwa sposoby, ten sam wynik:**  
· wartościowość: Ca(II) i Cl(I) → CaCl₂  
· ładunki jonów: Ca²⁺ i Cl⁻ → suma ładunków 0 → CaCl₂  

**Reguła awaryjna — cały klocek:**  
Najpierw określ, co jest „całym klockiem”. Jeśli występuje jon wieloatomowy (OH⁻, SO₄²⁻, NO₃⁻), traktuj go jak jeden klocek podczas krzyżowania.

Przykład: Al³⁺ + SO₄²⁻ → Al₂(SO₄)₃  
Kontrola ładunku: 2 · (+3) + 3 · (−2) = 0  

Nawias stawiamy, gdy indeks dotyczy całej grupy i jest większy od 1:  
· NaOH — bez nawiasu (jedno OH)  
· Ca(OH)₂ — nawias (dwa OH)  
· Al₂(SO₄)₃ — nawias (trzy SO₄)

**Dwa tryby zapisu wzorów:**

| Sytuacja | Najwygodniejsza metoda | Przykład |
|----------|------------------------|----------|
| Proste tlenki i związki kowalencyjne | Wartościowość | Al(III) i O(II) → Al₂O₃ |
| Sole i wodorotlenki z jonami | Ładunki jonów | Ca²⁺ i 2OH⁻ → Ca(OH)₂ |
| Nazwa zawiera cyfrę rzymską | Informacja z nazwy | chlorek żelaza(III) → FeCl₃ |  

**Wartościowość i ładunek — podobne, ale różne:**

- **Wartościowość** mówi, ile wiązań tworzy atom lub grupa atomów, np. Ca(II), Cl(I).
- **Ładunek jonu** mówi, czy jon ma niedobór albo nadmiar elektronów, np. Ca²⁺ i Cl⁻.
- W prostych związkach jonowych oba sposoby często prowadzą do tego samego wzoru, np. CaCl₂, ale **nie są tym samym pojęciem** — nie utożsamiaj ich.

### Trzy (pięć) rzeczy, których nie wolno mieszać

| Pojęcie | Co opisuje | Przykład |
|---------|------------|----------|
| **Wartościowość** | Ile wiązań tworzy atom w danym związku (model „liczby rąk”) | W CO₂ węgiel ma wartościowość IV, tlen II |
| **Stopień utlenienia** | Umowny ładunek atomu przy założeniu całkowitego przesunięcia elektronów | W CO₂: C ma +IV, O ma −II |
| **Ładunek jonu** | Rzeczywisty ładunek całego atomu lub grupy | Ca²⁺, Cl⁻, SO₄²⁻ |
| **Indeks dolny** | Liczba atomów lub grup w jednej cząsteczce / jednostce wzoru | Ca(OH)₂ zawiera 1 Ca, 2 O i 2 H |
| **Współczynnik** | Liczba cząsteczek albo jednostek wzoru biorących udział w reakcji | 2H₂O oznacza łącznie 4 atomy H i 2 atomy O |

**Zapamiętaj:**  
Wartościowość to **nie** ładunek.  
W CaCl₂ wapń ma wartościowość II, a jon wapnia ma ładunek 2+. Wyniki są tu podobne, lecz opisują różne rzeczy.  
Indeks to część substancji, współczynnik to liczba porcji substancji. Dlatego podczas bilansowania zmieniamy wyłącznie współczynniki.

**Uzupełnienie dla jonów:**  
W przypadku jonów mówimy o **wartościowości jonu** — odpowiada ona wartości bezwzględnej ładunku (np. Ca²⁺ → II, Cl⁻ → I). Nie jest to jednak to samo co ładunek: wartościowość to liczba wiązań, a ładunek to nadmiar/niedobór elektronów.

**Uwaga o związkach jonowych:**  
W związkach jonowych nie wyodrębniamy pojedynczych wiązań — mówimy o **sieci jonowej** i przyciąganiu przeciwnie naładowanych jonów. Wartościowość mówi wtedy, ile ładunków musi się zrównoważyć.

### Grupy atomów (pomost do klasy 8)

| Grupa | Nazwa | Wartościowość / ładunek | Przykład |
|-------|--------|-------------------------|----------|
| OH | grupa wodorotlenkowa | I / OH⁻ | Ca(OH)₂ |
| NO₃ | reszta azotanowa(V) | I / NO₃⁻ | NaNO₃ |
| SO₄ | reszta siarczanowa(VI) | II / SO₄²⁻ | Al₂(SO₄)₃ |
| CO₃ | reszta węglanowa | II / CO₃²⁻ | CaCO₃ |
| PO₄ | reszta fosforanowa(V) | III / PO₄³⁻ | Ca₃(PO₄)₂ |
| NH₄ | grupa amonowa | I / NH₄⁺ | NH₄Cl |
| HCO₃ | wodorowęglanowa | I / HCO₃⁻ | NaHCO₃ |
| CH₃COO | octanowa | I / CH₃COO⁻ | CH₃COONa |
| MnO₄ | manganianowa(VII) | I / MnO₄⁻ | KMnO₄ |
| CrO₄ | chromianowa(VI) | II / CrO₄²⁻ | K₂CrO₄ |
| Cr₂O₇ | dichromianowa(VI) | II / Cr₂O₇²⁻ | K₂Cr₂O₇ |

**Nawias:** stosujemy, gdy grupa powtarza się więcej niż raz. Ca(OH)₂ — nie CaOH₂.  
CaOH₂ sugeruje przypadkowy układ atomów, a nie dwie powtarzające się grupy OH. Nawias pokazuje, że OH jest zachowaną grupą atomową.

**Skojarzenie:** nawias to **pudełko** — obejmuje całą grupę, nie tylko ostatni atom.

### Budowa atomu i jon

- Z = liczba protonów (= liczba elektronów w **atomie obojętnym**)  
- A = p⁺ + n⁰ (liczba całkowita dla danego **izotopu**)  
- n⁰ = A − Z  

**Liczba protonów definiuje pierwiastek.** Każdy atom mający 8 protonów jest atomem tlenu, a każdy atom mający 17 protonów jest atomem chloru. Jon może mieć inną liczbę elektronów, a izotop — inną liczbę neutronów, ale liczba protonów decyduje o tym, jaki to pierwiastek.

**Uwaga:** nie myl liczby masowej A z masą atomową z układu okresowego (ta druga jest zwykle liczbą dziesiętną — uwzględnia mieszaninę izotopów).

**Jon** — atom albo grupa atomów mająca ładunek elektryczny (oddał lub przyjął elektrony).  
· **Kation**: ładunek dodatni (oddał e⁻), np. Na⁺ (11 p, 10 e).  
· **Anion**: ładunek ujemny (przyjął e⁻), np. Cl⁻ (17 p, 18 e), S²⁻ (16 p, 18 e), SO₄²⁻.

Dla jonu liczba elektronów **nie** jest równa liczbie protonów.

**Algorytm:** Z = p⁺; atom obojętny e⁻ = Z; kation: odejmij e⁻; anion: dodaj e⁻.

**Reguła logiczna (główna):**  
**Kation oddał, anion przyjął.**  
· Kation → mniej elektronów niż protonów → ładunek dodatni.  
· Anion → więcej elektronów niż protonów → ładunek ujemny.

### Wiązania — algorytm rozpoznawania

1. Oba pierwiastki to metale → **wiązanie metaliczne**.
2. Jeden metal, drugi niemetal → najczęściej **wiązanie jonowe**.
3. Oba niemetale → **wiązanie kowalencyjne**.
4. Niemetale różne → zwykle **kowalencyjne spolaryzowane** (np. HCl, H₂O).
5. Niemetale takie same → **kowalencyjne niespolaryzowane** (np. H₂, Cl₂, O₂).

**Reguła logiczna:**  
**Metal oddaje, niemetal bierze; niemetale uwspólniają elektrony; metale tworzą morze elektronów.**

**Uwaga o wiązaniu jonowym:** W wiązaniu jonowym powstają dodatnie i ujemne jony, które przyciągają się elektrostatycznie i tworzą **uporządkowaną sieć jonową**. Dlatego NaCl nie jest pojedynczą cząsteczką i przewodzi prąd dopiero po stopieniu lub rozpuszczeniu.

### Typy reakcji

| Typ | Schemat / przykład |
|-----|-------------------|
| Synteza | 2Mg + O₂ → 2MgO |
| Analiza (rozkład) | CaCO₃ → CaO + CO₂ |
| Wypieranie | Zn + CuSO₄ → ZnSO₄ + Cu; Zn + 2HCl → ZnCl₂ + H₂ |
| Podwójna wymiana | AgNO₃ + NaCl → AgCl↓ + NaNO₃  *(↓ = osad — trudno rozpuszczalna substancja stała)* |
| Spalanie | CH₄ + 2O₂ → CO₂ + 2H₂O |

**Bilansowanie:** indeksów nie zmieniamy — tylko współczynniki. Prawo zachowania masy: atomy nie znikają i nie powstają z niczego.

**Skrót do wzorów:** W–K–S–K (wartościowości → krzyżowanie → skracanie → kontrola).

**Mnemonic typów (opcjonalny):**  
**S A W P S** → „Synteza, Analiza, Wypieranie, Podwójna wymiana, Spalanie”.

### Reakcje egzo- i endotermiczne

| Typ | Co robi z ciepłem | Przykład |
|-----|-------------------|----------|
| Egzotermiczna | Wydziela ciepło | spalanie CH₄, reakcja metalu z kwasem |
| Endotermiczna | Pochłania ciepło | rozkład CaCO₃ (wymaga ogrzewania) |

**Mnemonic:**  
**Exo** = „na zewnątrz” (ciepło wychodzi).  
**Endo** = „do wewnątrz” (ciepło wchodzi).

### Masa cząsteczkowa i masa jednostki wzoru

**Uwaga terminologiczna (ważna):**  
Związki **kowalencyjne** tworzą odrębne cząsteczki (H₂O, CO₂, CH₄) — mówimy o **masie cząsteczkowej**.  
Związki **jonowe** tworzą sieć jonową (NaCl, MgO, CaCl₂) — poprawniej mówimy o **masie jednostki wzoru** (suma mas atomowych we wzorze jednostki).  

W szkole często używa się skrótowo „masa cząsteczkowa” także dla soli — pamiętaj jednak o różnicy.

**Definicja:** suma mas atomowych wszystkich atomów we wzorze.  
Np. H₂O: 2·1 u + 16 u = 18 u (masa cząsteczkowa).  
NaCl: 23 u + 35,5 u = 58,5 u (masa jednostki wzoru).  

**Masa atomowa** — średnia ważona mas izotopów (liczba dziesiętna z układu okresowego).  
**Liczba masowa A** — liczba całkowita dla konkretnego izotopu.

**Cztery pojęcia — cztery różne rzeczy:**

| Pojęcie | Co to jest | Przykład |
|---------|------------|----------|
| Liczba masowa A | protony + neutrony (izotop) | ¹⁶O → A = 16 |
| Masa atomowa | średnia ważona izotopów | O → 16,00 u |
| Masa cząsteczkowa | suma mas atomowych (związki kowalencyjne) | H₂O → 18 u |
| Masa jednostki wzoru | suma mas atomowych (związki jonowe) | NaCl → 58,5 u |

---

## 3. SPIS TREŚCI (skrócony)

- Cel i diagnoza  
- BHP  
- Budowa atomu, izotopy, jony  
- Układ okresowy + trendy  
- Wartościowość + wzory + grupy atomów + wzory strukturalne  
- Wiązania (jonowe, kowalencyjne, metaliczne) + elektroujemność  
- Równania + egzo/endotermiczne  
- Jak wybrać strategię?  
- Pułapki + STOP  
- **KLINIKA BŁĘDÓW**  
- Ćwiczenia (3 poziomy + interleaving)  
- Fiszki  
- Test końcowy  
- Checklista  
- System powtórek  
- Mapy myśli i skojarzenia  
- Co dalej?

---

## 4. DIAGNOZA (test wstępny)

Odpowiedz **najpierw sam**, potem sprawdź. Błąd teraz = zysk później.

1. Ile protonów, neutronów i elektronów ma atom ²³Na?  
2. W której grupie (system 1–18) i okresie znajduje się chlor?  
3. Jaka jest wartościowość tlenu i wapnia?  
4. Zapisz wzór chlorku magnezu.  
5. Ile elektronów ma jon Al³⁺?  
6. Dlaczego zapisujemy Ca(OH)₂, a nie CaOH₂?

**Odpowiedzi:**  
1. 11 p, 12 n, 11 e  
2. grupa 17, okres 3  
3. O(II), Ca(II)  
4. MgCl₂  
5. 10 elektronów (13 − 3)  
6. Ponieważ indeks 2 ma dotyczyć **całej grupy OH**, czyli zarówno O, jak i H. Bez nawiasu indeks „2” przykleiłby się tylko do H.

**Jeśli 5/6 lub więcej:** możesz przyspieszyć przez sekcje 5.4–5.7.  
**Jeśli mniej:** przejdź całą lekcję spokojnie, rozdział po rozdziale.

---

## 5. TREŚĆ MERYTORYCZNA

### 5.1. BHP i praca w laboratorium

**Zasady obowiązkowe**

- Nie smakujemy substancji. Zapach sprawdzamy wyłącznie na polecenie nauczyciela, metodą **wachlowania** (dłonią kierujemy pary w stronę nosa — nie przykładamy nosa do naczynia).  
- Stosuj środki ochrony osobistej wskazane przez nauczyciela i wynikające z zagrożeń: okulary, fartuch; rękawice wtedy, gdy są właściwe dla danej substancji.  
- Ogrzewanie w probówce – otwór od siebie i innych.  
- Nie pipetujemy ustami — używamy gruszki lub pipetora.  
- Rozcieńczając kwas: **kwas do wody**, nigdy odwrotnie.  
  **Dlaczego?** Rozcieńczanie kwasu wydziela dużo ciepła. Gdy wlewasz wodę do stężonego kwasu, woda może lokalnie zagotować się i spowodować gwałtowne rozpryski stężonego kwasu. Wlewanie kwasu do wody (małymi porcjami, mieszając) jest bezpieczniejsze.  
- Przed użyciem odczynnika czytamy etykietę i piktogramy zagrożeń.  
- Przy rozlaniu / kontakcie z oczami lub skórą — natychmiast zgłaszamy nauczycielowi i płuczemy dużą ilością wody zgodnie z jego poleceniem.  
- Nie wylewamy do zlewu substancji niebezpiecznych bez konsultacji.  
- Sprzątamy stanowisko po doświadczeniu.

**Dodatkowe zasady bezpieczeństwa:**

- Nie ogrzewaj zamkniętych naczyń.  
- Nie wracaj odczynników do butelki — możesz zanieczyścić cały zapas.  
- Zapoznaj się z kartą charakterystyki substancji (SDS).  
- Nie jedz i nie pij w laboratorium.  
- Umyj ręce po pracy.  
- Nie używaj uszkodzonego szkła.  
- Nie zostawiaj palnika bez opieki.  
- Znasz drogi ewakuacyjne i miejsce apteczki.

**Mnemonic BHP (poprawiony):**  
**Kwas → do wody** (nigdy odwrotnie).  
**Zapach → wachluj** (nie wąchaj bezpośrednio).  
**Kontakt → płucz wodą** (dużą ilością).

**Mnemonic „NIE”:**
- **NIE** smakuj  
- **NIE** pipetuj ustami  
- **NIE** odwracaj probówki w swoją stronę  
- **NIE** wylewaj bez konsultacji  

**Szkło laboratoryjne (podstawowe)**

| Naczynie | Zastosowanie |
|----------|--------------|
| Probówka | małe ilości substancji, ogrzewanie, reakcje |
| Zlewka | mieszanie, ogrzewanie, orientacyjne odmierzanie cieczy |
| Kolba stożkowa (Erlenmeyera) | mieszanie, miareczkowanie |
| Kolba okrągłodenna | ogrzewanie cieczy i reakcje; może być elementem zestawu do destylacji |
| Pipeta | pobieranie / przenoszenie objętości (miarowa = precyzyjna; Pasteura = krople) |
| Biureta | precyzyjne dozowanie cieczy (np. miareczkowanie) |
| Cylinder miarowy | odmierzanie objętości cieczy |
| Parownica | odparowywanie cieczy, prażenie |
| Tygiel | prażenie substancji w wysokiej temperaturze |
| Moździerz | rozdrabnianie substancji stałych |
| Eksykator | przechowywanie substancji w suchym środowisku |
| Chłodnica | skraplanie par w destylacji |

### 5.2. Budowa atomu, izotopy, jony

| Cząstka | Ładunek | Masa (ok.) | Miejsce |
|---------|---------|------------|---------|
| Proton p⁺ | +1 | 1 u | jądro |
| Neutron n⁰ | 0 | 1 u | jądro |
| Elektron e⁻ | −1 | ~1/1836 u | powłoki |

**Wzory:** Z = p⁺; w atomie obojętnym Z = e⁻; A = p⁺ + n⁰; n⁰ = A − Z.

**Liczba protonów definiuje pierwiastek.**  
Każdy atom mający 8 protonów jest atomem tlenu, a każdy atom mający 17 protonów jest atomem chloru. Jon może mieć inną liczbę elektronów, a izotop — inną liczbę neutronów, ale **liczba protonów decyduje o tym, jaki to pierwiastek**.

**Hak pamięciowy:**  
**Z = protony; A = protony + neutrony.**  
n⁰ = A − Z → „z całości odejmij protony, zostaną neutrony”.

**Uwaga (pułapka):** liczba masowa A jest liczbą całkowitą dla konkretnego **izotopu**. Nie należy jej mylić z **masą atomową** z układu okresowego (zwykle liczba dziesiętna — uwzględnia naturalną mieszaninę izotopów).

**Izotopy** — odmiany tego samego pierwiastka o tej samej liczbie protonów, różnej liczbie neutronów (i liczbie masowej).  
Przykłady: ¹H, ²H, ³H; ¹²C, ¹³C, ¹⁴C.

**Izotopy atomów obojętnych** mają też tyle samo elektronów; różnią się wyłącznie liczbą neutronów, a więc liczbą masową. To pomaga odróżnić izotopy od jonów — jon zmienia liczbę elektronów, izotop liczbę neutronów.

**Jon** — atom albo **grupa atomów** mająca ładunek elektryczny, ponieważ oddała lub przyjęła elektrony.  
· **Kation** — ładunek dodatni (oddał elektrony), np. Na⁺: 11 p, 10 e; Al³⁺: 13 p, 10 e.  
· **Anion** — ładunek ujemny (przyjął elektrony), np. Cl⁻: 17 p, 18 e; S²⁻: 16 p, 18 e; SO₄²⁻ (wieloatomowy).  

Dla jonu liczba elektronów **nie** jest równa liczbie protonów.

**Algorytm liczenia elektronów w jonie:**
1. Odczytaj Z — to liczba protonów.
2. Dla atomu obojętnego: e⁻ = Z.
3. Przy ładunku **dodatnim** odejmij elektrony (np. Al³⁺: 13 − 3 = 10 e⁻).
4. Przy ładunku **ujemnym** dodaj elektrony (np. S²⁻: 16 + 2 = 18 e⁻).

**Przykład:** S²⁻ ma Z = 16 → 16 protonów i 16 + 2 = 18 elektronów.

**Kontrola ładunku:**  
ładunek jonu = p⁺ − e⁻  
· Na⁺: 11 − 10 = +1  
· Cl⁻: 17 − 18 = −1  
· O²⁻: 8 − 10 = −2  

**Reguła logiczna (główna):**  
**Kation oddał, anion przyjął.**

**Hak dodatkowy (dla chętnych, żartobliwy, opcjonalny):**  
„Kation = kot ma plusa; anion = anioł ma minus” — **żart, nie reguła**. Główna reguła: kation oddał, anion przyjął.

### 5.3. Układ okresowy

- **Okresy** (wiersze) — numer okresu mówi, ile powłok elektronowych ma atom pierwiastka.  
  Przykład: sód jest w 3. okresie, bo ma elektrony na trzech powłokach: 2, 8, 1.  

  *(Doprecyzowanie: dotyczy atomu obojętnego w stanie podstawowym.)*  
  **Kontrprzykład:** jon Na⁺ ma układ 2, 8 (dwie zajęte powłoki), ale nadal pochodzi od sodu z 3. okresu — numer okresu dotyczy atomu pierwiastka, nie jonu.  
- **Grupy** (kolumny) — system **1–18** jest podstawowy. Dla pierwiastków grup głównych można spotkać starsze oznaczenia IA–VIIIA.

**Kluczowa informacja o układzie:**  
Układ okresowy jest ułożony według **rosnącej liczby atomowej Z**, a nie według liczby masowej A. Liczba masowa dotyczy konkretnego izotopu, a nie miejsca pierwiastka w układzie.

**Elektrony walencyjne** to elektrony znajdujące się na najbardziej zewnętrznej zajętej powłoce atomu. To one przede wszystkim biorą udział w tworzeniu wiązań chemicznych.

W grupach głównych liczba elektronów walencyjnych wynosi: **1, 2**, a następnie **3–8** dla grup **13–18** (numer grupy 13 nie oznacza 13 elektronów walencyjnych).

| Grupa | Elektrony walencyjne | Rodzina | Typowe wartościowości w najczęstszych zadaniach szkolnych |
|-------|----------------------|---------|-----------------------------------------------------------|
| 1 | 1 | Metale alkaliczne | I |
| 2 | 2 | Metale ziem alkalicznych | II |
| 13 | 3 | Grupa borowców | III |
| 14 | 4 | Grupa węglowców | IV |
| 15 | 5 | Grupa azotowców | III lub V |
| 16 | 6 | Chalkogeny | II, IV lub VI |
| 17 | 7 | Fluorowce | I wobec metali i wodoru |
| 18 | 8 (He: 2) | Gazy szlachetne | W zadaniach szkolnych zwykle przyjmujemy jako niewartościowe |

**Uwaga do tabeli:**  
Tabela jest skrótem dla najczęściej spotykanych pierwiastków i związków. Gdy w nazwie związku podano wartościowość, zawsze stosuj informację z nazwy.

**Grupa ≠ wartościowość — przykład chloru:**

| Co odczytujesz | Gdzie | Przykład dla chloru |
|----------------|-------|---------------------|
| Numer grupy | Układ okresowy | grupa 17 |
| Liczba elektronów walencyjnych | Dla grup głównych | 7 |
| Wartościowość | Zależna od związku | I w HCl / wobec metali; w związkach z tlenem możliwe inne |

Nie twórz reguły „grupa 17 = wartościowość XVII”.

**Trendy w układzie okresowym (rozszerzenie):**

| Cecha | Jak zmienia się w układzie |
|-------|---------------------------|
| Promień atomowy | rośnie w dół grupy, maleje w prawo okresu |
| Elektroujemność | rośnie w prawo i w górę |
| Charakter metaliczny | rośnie w lewo i w dół |
| Charakter niemetaliczny | rośnie w prawo i w górę |
| Energia jonizacji | rośnie w prawo i w górę |

To przygotowuje grunt pod rozumienie, dlaczego metale oddają elektrony, a niemetale przyjmują.

**Nazwy rodzin i kluczowe terminy — skąd pochodzą:**

| Termin | Skąd nazwa | Jak pomaga zapamiętać |
|--------|------------|------------------------|
| Atom | gr. *atomos* — „niepodzielny” | Dawniej sądzono, że atomu nie da się podzielić; dziś wiemy, że ma jądro i elektrony |
| Jon | gr. *ion* — „wędrujący” | Jony przemieszczają się w roztworze podczas przepływu prądu |
| Kation | idący ku katodzie | Kation ma ładunek **+** |
| Anion | idący ku anodzie | Anion ma ładunek **−** |
| Alkaliczne | od alkaliów (zasad) | NaOH, KOH — silne zasady |
| Fluorowce | „tworzące sole” | Reagują z metalami → sole, np. NaCl |
| Chalkogeny | „tworzące rudy” | S i O często w minerałach rudnych |
| Gazy szlachetne | dawniej niemal niereaktywne | He, Ne, Ar… |

### 5.4. Wartościowość (kluczowy temat)

**Definicja (uproszczenie szkolne / model dydaktyczny):**  
**Wartościowość** to liczba wiązań, które atom tworzy z innymi atomami, przy czym wiązanie podwójne liczymy jako dwa, a potrójne jako trzy.  
W szkole zapisujemy ją cyfrą rzymską, np. O(II), Al(III), Fe(II) lub Fe(III).

> **Wartościowość — wersja szkolna:** liczba wiązań tworzonych przez atom w konkretnym związku.  
> **Uwaga:** w bardziej zaawansowanej chemii opis wiązań bywa bardziej złożony (IUPAC rozróżnia wartościowość i stopień utlenienia). Na poziomie klasy 7/8 stosuj wartościowość jako narzędzie do układania wzorów i rysowania wiązań.

**Model „liczby rąk” (bardzo użyteczny):**  
Wyobraź sobie, że atom ma określoną liczbę „rąk”, którymi może łączyć się z innymi atomami.
- H(I) ma 1 rękę
- O(II) ma 2 ręce
- Al(III) ma 3 ręce
- C(IV) ma 4 ręce

We wzorze wszystkie „ręce” muszą zostać wykorzystane. Dlatego Ca(II) i O(II) tworzą CaO, a nie Ca₂O₂: stosunek 1 : 1 jest już najprostszy.

**Test równowagi wartościowości:**
- W Al₂O₃: 2 · III = 6 oraz 3 · II = 6 → wzór poprawny.
- W AlO: 1 · III ≠ 1 · II → wzór niepoprawny.
- W Ca₂O₂: wartościowości się równoważą, ale wzór trzeba skrócić do CaO (najprostszy stosunek).

**Ważne doprecyzowanie:**  
Pierwiastek **nie ma jednej wartościowości „na zawsze”**. Wartościowość odczytujemy lub ustalamy w konkretnym związku.  
Przykład: w H₂S siarka tworzy 2 wiązania (wartościowość II), w SO₂ — 4 (IV), w SO₃ — 6 (VI).

**Nie myl pojęć (kluczowe rozróżnienie):**  
· **Wartościowość** — mówi o liczbie wiązań (model szkolny „liczby rąk”).  
· **Stopień utlenienia** — formalny „ładunek umowny” atomu w związku (przy założeniu całkowitego przesunięcia elektronów).  
· **Ładunek jonu** — rzeczywisty ładunek całego atomu lub grupy (np. Ca²⁺, SO₄²⁻).  
W prostych zadaniach szkolnych wyniki często wyglądają podobnie, ale **nie są to pojęcia tożsame**.

**Jak ustalić:**  
1. z układu okresowego (grupy główne),  
2. z znanego wzoru — jeśli znasz wartościowość jednego pierwiastka i wzór, możesz obliczyć wartościowość drugiego tak, aby łączna wartościowość obu składników była taka sama,  
3. z nazwy (np. tlenek żelaza(III)).

**Metale o zmiennej wartościowości:** Fe (II/III), Cu (I/II), Sn (II/IV), Pb (II/IV), Mn (II/IV/VII), Cr (II/III/VI) — zawsze podawać w nazwie.

**Wartościowość maksymalna:**  
Najwyższa wartościowość, jaką pierwiastek może osiągnąć w związku.  
Dla pierwiastków **grup głównych** maksymalna wartościowość względem tlenu jest często równa numerowi grupy w **dawnym zapisie A** (I, II, III, IV, V, VI, VII) — nie numerowi 1–18.  
Przykłady: Al — III, C — IV, P — V, S — VI, Cl — VII (np. HClO₄).

**Hak pamięciowy:**  
Wartościowość to **liczba wiązań**, którymi atom łączy się z innymi atomami.

**Mnemonic główny:**  
**H–I, O–II, Al–III, C–IV** → „wodór raz, tlen dwa, glin trzy, węgiel cztery”.

**Tabela szybkiego dostępu:**

| Pierwiastek | Wartościowość |
|-------------|---------------|
| H | I |
| O | II |
| Na, K | I |
| Mg, Ca | II |
| Al | III |
| C | IV |
| N, P | III / V (P: względem H zwykle III, maks. względem O = V) |
| S | II / IV / VI |
| Cl | I (chlorki); III/V/VII (związki tlenowe, rozszerzenie) |
| Fe | II / III |
| Cu | I / II |
| Sn | II / IV |
| Pb | II / IV |
| Mn | II / IV / VII |
| Cr | II / III / VI |

**Przykład obliczenia wartościowości z wzoru:**  
CO₂ → tlen ma II, dwa atomy tlenu dają łącznie IV. Węgiel ma zatem wartościowość IV.

### 5.5. Wzory sumaryczne + grupy atomów + wzory strukturalne

**Algorytm (krzyżowanie) + kontrola** — patrz ściąga.  
Metoda krzyżowania jest **skrótem**, nie magiczną regułą. Po ułożeniu wzoru zawsze sprawdź równość łącznej wartościowości.

**Przykład krok po kroku (Al + O):**

1. Symbole: Al O  
2. Wartościowości: Alᴵᴵᴵ Oᴵᴵ  
3. Krzyżowanie: Al₂O₃ (3 od O idzie do Al, 2 od Al idzie do O)  
4. Skracanie: 2 i 3 nie mają wspólnego dzielnika → zostaje Al₂O₃  
5. Kontrola: 2·III = 6; 3·II = 6 → OK

**Przykład ze skracaniem (Ca + O):**

1. Caᴵᴵ Oᴵᴵ  
2. Krzyżowanie: Ca₂O₂  
3. Skracanie: dzielimy przez 2 → CaO  
4. Kontrola: 1·II = 2; 1·II = 2 → OK

**Grupy atomów** (OH, NO₃, SO₄, CO₃, PO₄, NH₄, HCO₃, CH₃COO, MnO₄, CrO₄, Cr₂O₇) — patrz ściąga. Nawias przy powtórzeniu grupy.

**Hak pamięciowy:**  
**Nawias to pudełko na grupę.**  
Bez pudełka indeks „2” przykleiłby się tylko do ostatniego atomu — i wzór byłby błędny.

**Przykład z grupą (Ca + OH):**

1. Caᴵᴵ (OH)ᴵ  
2. Krzyżowanie: Ca₁(OH)₂  
3. Indeks 1 pomijamy: Ca(OH)₂  
4. Kontrola: 1·II = 2; 2·I = 2 → OK

**Wzory strukturalne i elektronowe (rozszerzenie):**

**Wzór strukturalny (kreskowy)** — pokazuje, które atomy są połączone i ile wiązań tworzą. Np. H–O–H, O=C=O, H–Cl.

**Wzór elektronowy (kropkowy, Lewisa)** — pokazuje elektrony walencyjne jako kropki. Np. H:H, Cl:Cl, H:Cl.

Te wzory pomagają zrozumieć, **skąd bierze się wartościowość** — widać, ile wiązań tworzy każdy atom.

**Przykłady:**

| Związek | Wzór sumaryczny | Wzór strukturalny | Wzór elektronowy |
|---------|-----------------|-------------------|------------------|
| woda | H₂O | H–O–H | H:O:H (z wolnymi parami na O) |
| dwutlenek węgla | CO₂ | O=C=O | :O::C::O: |
| metan | CH₄ | H–C(–H)(–H)–H | H:C:H z H pod i nad |
| chlor | Cl₂ | Cl–Cl | :Cl:Cl: |
| chlorowodór | HCl | H–Cl | H:Cl: | **kowalencyjne spolaryzowane** |

**Masa cząsteczkowa (rozszerzenie):**

**Masa cząsteczkowa** — suma mas atomowych wszystkich atomów we wzorze.  
Np. H₂O: 2·1 u + 16 u = 18 u.  
**Masa atomowa** — średnia ważona mas izotopów (liczba dziesiętna z układu okresowego).  
**Liczba masowa A** — liczba całkowita dla konkretnego izotopu.

**Przykłady obliczeń:**

| Związek | Obliczenie | Wynik |
|---------|-----------|-------|
| H₂O | 2·1 + 16 | 18 u (masa cząsteczkowa) |
| CO₂ | 12 + 2·16 | 44 u (masa cząsteczkowa) |
| NaCl | 23 + 35,5 | 58,5 u (masa jednostki wzoru) |
| Ca(OH)₂ | 40 + 2·(16+1) | 74 u (masa jednostki wzoru) |
| H₂SO₄ | 2·1 + 32 + 4·16 | 98 u (masa cząsteczkowa) |

### 5.6. Wiązania chemiczne

W szkolnym modelu atomy tworzą wiązania, ponieważ układ elektronów w powstałym związku jest energetycznie korzystniejszy; wiele atomów dąży do **oktetu**, a wodór do **dubletu**. (To model dydaktyczny, nie uniwersalne prawo.)

**Reguła oktetu — uściślenie:**
- **Oktet** dotyczy głównie pierwiastków **grup głównych** (1, 2, 13–18).
- **Wyjątki:** H (dublet), He (dublet), Li, Be (często mniej niż oktet), P, S (mogą mieć powiększony oktet), metale przejściowe (inna reguła).
- **Reguła oktetu nie wyjaśnia** wiązania metalicznego.

| Cecha | Jonowe | Kowalencyjne | Metaliczne |
|-------|--------|--------------|------------|
| Co dzieje się z elektronami? | Elektrony są przekazywane; powstają jony | Atomy uwspólniają parę lub pary elektronowe | Elektrony są zdelokalizowane (morze elektronów) |
| Najczęściej między | metalem a niemetalem | niemetalami | metalami |
| Przykład | Na⁺Cl⁻, MgO, CaF₂ | H₂, HCl, H₂O, CO₂, CH₄ | Fe, Cu, Al, Na |
| Budowa substancji | uporządkowana sieć jonów | najczęściej pojedyncze cząsteczki; wyjątek: sieci kowalencyjne (diament, SiO₂) | sieć dodatnich jonów w morzu elektronów |
| Przewodzenie prądu | po stopieniu lub w roztworze wodnym | zwykle nie przewodzą | przewodzą (elektrony swobodne) |

**Definicja wiązania jonowego:**  
**Wiązanie jonowe** to przyciąganie elektrostatyczne między jonami o przeciwnych ładunkach w **sieci krystalicznej**. Jony powstają zwykle w wyniku przekazania elektronów z atomu metalu do atomu niemetalu.  

Dzięki temu uczeń od razu rozumie:  
· skąd biorą się jony,  
· co je utrzymuje razem,  
· dlaczego nie należy mówić o pojedynczej „cząsteczce NaCl”.

NaCl zapisujemy jako **wzór jednostki sieci jonowej**, nie jako pojedynczą cząsteczkę. Przewodzi prąd dopiero po stopieniu lub rozpuszczeniu.

**Definicja wiązania metalicznego:**  
**Wiązanie metaliczne** — występuje w metalach. Dodatnie jony metalu są zanurzone w „morzu elektronów” (elektrony zdelokalizowane). Dzięki temu metale przewodzą prąd i ciepło, są kowalne i mają połysk. To wyjaśnia, dlaczego metale mają inne właściwości niż związki jonowe i kowalencyjne.

**Reguła logiczna:**  
**Metal oddaje, niemetal bierze; niemetale się dzielą; metale tworzą morze elektronów.**

**Elektroujemność (rozszerzenie):**  
**Elektroujemność** — miara zdolności atomu do przyciągania elektronów w wiązaniu. W układzie okresowym **ogólnie** rośnie w prawo i ku górze; **największą elektroujemność ma fluor (F)**. To trend, nie automat: położenie w układzie nie ustala samo typu wiązania; różnica elektroujemności jest wskazówką.  

**Uwaga dydaktyczna:** Duża różnica elektroujemności **zwykle sprzyja** wiązaniu o silnym charakterze jonowym; mała — kowalencyjnemu. To dobra reguła **orientacyjna**, ale nie test rozstrzygający. W klasie 7/8 najpierw korzystaj z prostszej reguły: metal + niemetal → najczęściej jonowe; niemetal + niemetal → kowalencyjne.

**Polaryzacja (dla chętnych / rozszerzenie):**  
· niespolaryzowane — te same atomy (H₂, Cl₂);  
· spolaryzowane — różne niemetale (HCl, H₂O) — para silniej przyciągana przez jeden z atomów.

### 5.7. Równania reakcji – podstawy

**Prawo zachowania masy:** w reakcji chemicznej atomy nie znikają i nie powstają z niczego — tylko łączą się inaczej. Dlatego liczba atomów każdego pierwiastka przed strzałką i po strzałce musi być taka sama.

**Procedura bilansowania**

1. Zapisz poprawne wzory substratów i produktów.  
2. Policz atomy każdego pierwiastka po obu stronach.  
3. Zacznij od pierwiastka występującego w najmniejszej liczbie wzorów.  
4. Ustaw współczynniki przed wzorami.  
5. Wodór i tlen zwykle na koniec.  
6. Sprawdź wszystkie pierwiastki; skróć współczynniki do najmniejszych liczb całkowitych.  
7. **Nigdy nie zmieniaj indeksów dolnych we wzorach.**

**Hak pamięciowy:**  
**„Współczynniki tak, indeksy nie!”**

**Współczynnik mnoży wszystko:**  
Współczynnik przed wzorem mnoży liczbę **wszystkich** atomów w tym wzorze.  
· 2H₂O oznacza 4 atomy H i 2 atomy O.  
· 3Ca(OH)₂ oznacza 3 Ca, 6 O i 6 H.

**Indeks · współczynnik · nawias — punkt krytyczny**

| Zapis | Co oznacza | Co obejmuje |
|-------|------------|-------------|
| H₂O | Indeks dolny 2 | Dwa atomy H w jednej cząsteczce wody |
| 3H₂O | Współczynnik 3 | Trzy całe cząsteczki H₂O, czyli 6 H i 3 O |
| Ca(OH)₂ | Nawias i indeks 2 | Dwie całe grupy OH |

**Substraty i produkty:**  
Substraty są po lewej stronie strzałki; produkty po prawej.  
Strzałka nie oznacza „równa się”, tylko „powstają z”.

**Kontrprzykład:**  
Błędnie: H₂ + O₂ → H₂O₂ (to inna substancja — nadtlenek wodoru).  
Poprawnie: 2H₂ + O₂ → 2H₂O.

**Przykłady bilansowania krok po kroku:**

**Przykład 1:** Fe + O₂ → Fe₂O₃  
1. Policz: Fe: 1 vs 2; O: 2 vs 3.  
2. Ustaw Fe: 4Fe → 2Fe₂O₃.  
3. Ustaw O: 3O₂ → 2Fe₂O₃.  
4. Sprawdź: 4Fe, 6O po obu stronach.  
**Wynik:** 4Fe + 3O₂ → 2Fe₂O₃.

**Przykład 2:** Al + HCl → AlCl₃ + H₂  
1. Policz: Al: 1 vs 1; H: 1 vs 2; Cl: 1 vs 3.  
2. Ustaw Al: 2Al → 2AlCl₃.  
3. Ustaw Cl: 6HCl → 2AlCl₃.  
4. Ustaw H: 6HCl → 3H₂.  
5. Sprawdź: 2Al, 6H, 6Cl po obu stronach.  
**Wynik:** 2Al + 6HCl → 2AlCl₃ + 3H₂.

**Przykład 3:** C₂H₆ + O₂ → CO₂ + H₂O  
1. Policz: C: 2 vs 1; H: 6 vs 2; O: 2 vs 3.  
2. Ustaw C: C₂H₆ → 2CO₂.  
3. Ustaw H: C₂H₆ → 3H₂O.  
4. Policz O: 2CO₂ + 3H₂O = 4 + 3 = 7 O → 7/2 O₂.  
5. Pomnóż przez 2: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.  
**Wynik:** 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.

**Typy reakcji** — tabela w ściądze.

**Uwaga o spalaniu:**  
Spalanie to szybka reakcja substancji z tlenem, której zwykle towarzyszy wydzielanie energii, często jako ciepło i światło.  
W zadaniach szkolnych spalanie metalu, niemetalu lub związku organicznego w O₂ najczęściej zaliczamy do spalania.

**Pułapka:** obecność tlenu po lewej stronie **nie wystarcza**, aby bez zastanowienia nazwać reakcję spalaniem. Analizuj, co reaguje i jakie powstają produkty. W szkolnych zadaniach spalanie najczęściej rozpoznasz po reakcji substancji z O₂, połączonej z wydzielaniem energii.

**Reakcje egzo- i endotermiczne:**

| Typ | Co robi z ciepłem | Przykład |
|-----|-------------------|----------|
| Egzotermiczna | Wydziela ciepło | spalanie CH₄, reakcja metalu z kwasem |
| Endotermiczna | Pochłania ciepło | rozkład CaCO₃ (wymaga ogrzewania) |

**Mnemonic:**  
**Exo** = „na zewnątrz” (ciepło wychodzi).  
**Endo** = „do wewnątrz” (ciepło wchodzi).

**Uwaga BHP do przykładów:**  
Równanie 2K + 2H₂O → 2KOH + H₂ dotyczy potasu, który reaguje z wodą bardzo gwałtownie. To przykład do analizy równania, a nie doświadczenie do samodzielnego wykonania.

**Zapis warunków reakcji (strzałka z opisem):**  
Nad strzałką można zapisywać warunki reakcji, np. temperaturę, ciśnienie, katalizator.  
Przykład: 2KClO₃ —(Δ, MnO₂)→ 2KCl + 3O₂  
· Δ oznacza ogrzewanie,  
· MnO₂ jest katalizatorem: przyspiesza reakcję, ale nie zużywa się w jej równaniu.

**Uproszczona tabela rozpuszczalności (rozszerzenie):**

- Wszystkie azotany(V) są rozpuszczalne.  
- Wszystkie sole metali alkalicznych (Li, Na, K, Rb, Cs) są rozpuszczalne.  
- Chlorki są rozpuszczalne — **wyjątki:** AgCl, PbCl₂, Hg₂Cl₂.  
- Siarczany są rozpuszczalne — **wyjątki:** BaSO₄, PbSO₄, CaSO₄ (słabo).  
- Węglany są **nierozpuszczalne** — wyjątki: sole metali alkalicznych i NH₄⁺.  
- Wodorotlenki są **nierozpuszczalne** — wyjątki: NaOH, KOH, Ba(OH)₂, Ca(OH)₂ (słabo).

To przygotowuje grunt pod reakcje strąceniowe w klasie 8.

**Zapis jonowy równań (dla ambitnych):**  
**Zapis jonowy** — pokazuje jony rzeczywiście biorące udział w reakcji. Np.  
AgNO₃ + NaCl → AgCl↓ + NaNO₃  
w zapisie jonowym: Ag⁺ + Cl⁻ → AgCl↓  
Jony „widzowe” (Na⁺, NO₃⁻) się nie zmieniają — to **jony widzowe**.

### 5.8. JAK WYBRAĆ STRATEGIĘ? (ramka decyzyjna)

**Masz atom lub jon?**  
1. Odczytaj Z.  
2. Ustal liczbę protonów.  
3. Dla atomu: e⁻ = Z.  
4. Dla jonu: odejmij lub dodaj elektrony zgodnie z ładunkiem.  
5. Liczbę neutronów oblicz: n⁰ = A − Z.

**Masz ułożyć wzór?**  
1. Zapisz symbole lub grupę atomów.  
2. Dopisz wartościowości albo ładunki.  
3. Zastosuj W–K–S–K.  
4. Sprawdź nawias i indeks 1.

**Masz zbilansować równanie?**  
1. Nie zmieniaj indeksów.  
2. Policz atomy.  
3. Ustaw współczynniki.  
4. Sprawdź ponownie wszystkie pierwiastki.

**Masz narysować wzór strukturalny?**  
1. Ustal wartościowość każdego atomu.  
2. Połącz atomy kreskami (wiązania).  
3. Sprawdź, czy każdy atom ma właściwą liczbę wiązań.  
4. Dla wzoru elektronowego zamień kreski na pary kropek.

---

## 6. PUŁAPKI + STOP przed oddaniem

| Błąd | Dlaczego to błąd | Jak poprawić |
|------|------------------|--------------|
| Zmiana indeksów przy bilansowaniu | indeks należy do wzoru | zmieniamy tylko współczynniki |
| FeO₃ zamiast Fe₂O₃ | brak krzyżowania / kontroli | Feᴵᴵᴵ + Oᴵᴵ → Fe₂O₃; 2·3 = 3·2 |
| Brak wartościowości Fe/Cu w nazwie | zmienna wartościowość | tlenek żelaza(III), chlorek miedzi(II) |
| Mylenie Z z A | różne pojęcia | Z = p⁺; A = p⁺+n⁰ |
| Mylenie A z masą atomową z układu | A — izotop (całkowita); masa atomowa — średnia | patrz sekcja atom |
| Brak nawiasu przy grupie | indeks dotyczyłby tylko ostatniego atomu | Ca(OH)₂, nie CaOH₂ |
| „Wartościowość zawsze = nr grupy” | grupy 15–17 mają warianty | sprawdzać kontekst |
| „Wymiana” bez rozróżnienia | wypieranie ≠ podwójna wymiana | nazwać precyzyjnie |
| „Jest O₂ → to spalanie” | nie zawsze wystarcza do klasyfikacji | analizuj substraty i produkty |
| Utożsamianie wartościowości z ładunkiem jonu | to różne pojęcia | patrz ramka „Wartościowość i ładunek — podobne, ale różne” |
| Mylenie masy atomowej z cząsteczkową | masa atomowa — jeden atom; cząsteczkowa — cała cząsteczka | patrz sekcja masa cząsteczkowa |

**STOP — sprawdź przed oddaniem zadania**

- Czy odróżniam Z od A?  
- Czy w atomie obojętnym liczba protonów jest równa liczbie elektronów?  
- Czy zapisałem wzór w najprostszym stosunku atomów?  
- Czy użyłem nawiasu przy powtarzającej się grupie atomów?  
- Czy podczas bilansowania zmieniałem tylko współczynniki, a nie indeksy?  
- Czy po obu stronach równania liczba atomów każdego pierwiastka jest taka sama?  

**Mnemonic STOP (opcjonalny):**  
**„Z–A–N–W–I–A”** → „Zawsze Analizuj Nawiasy Współczynniki Indeksy Atomy”.

---

## 6.5. KLINIKA BŁĘDÓW (realna sekcja z ćwiczeniami)

**Zasada:** Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.

| Błędny zapis | Popraw | Reguła | Dlaczego |
|--------------|--------|--------|----------|
| CaOH₂ | Ca(OH)₂ | Nawias obejmuje całą grupę | Indeks 2 dotyczy całego OH, nie tylko H |
| FeO₃ | Fe₂O₃ | Krzyżowanie + kontrola | Fe(III), O(II) → 2·3 = 3·2. FeO₃ nie odpowiada poprawnemu, prostemu wzorowi tlenku żelaza(III) |
| H₂ + O₂ → H₂O₂ | 2H₂ + O₂ → 2H₂O | Nie zmieniaj indeksów | H₂O₂ to nadtlenek wodoru — inna substancja |
| Al + HCl → AlCl₃ + H₂ | 2Al + 6HCl → 2AlCl₃ + 3H₂ | Bilansuj współczynnikami | Liczba atomów musi się zgadzać |
| Na⁺ ma 11 elektronów | Na⁺ ma 10 elektronów | Kation oddał elektron | 11 − 1 = 10 |
| Cl ma 17 neutronów | Cl ma 18 neutronów (dla ³⁵Cl) | A − Z = n⁰ | 35 − 17 = 18 |
| „Tlenek żelaza” bez wartościowości | „Tlenek żelaza(III)” | Fe ma II/III | Nazwa musi precyzować wartościowość |
| „Wartościowość = numer grupy” | To zależy od grupy | Grupy 15–17 mają warianty | Np. S: II, IV, VI |
| „Jest O₂ → to spalanie” | Analizuj substraty i produkty | Spalanie to reakcja z O₂ + wydzielanie energii | Nie każda reakcja z O₂ to spalanie |
| Mg + O₂ → MgO | 2Mg + O₂ → 2MgO | Bilansuj | Po obu stronach musi być tyle samo atomów |
| „Wartościowość = ładunek jonu” | To pokrewne, ale różne pojęcia | Wartościowość = liczba wiązań; ładunek = nadmiar/niedobór e⁻ | Nie utożsamiaj |
| H₂O ma masę 18 g | H₂O ma masę cząsteczkową 18 u | u to jednostka masy atomowej, nie gram | 1 u ≈ 1,66·10⁻²⁴ g |

### Ćwiczenia KLINIKI BŁĘDÓW

**Znajdź i popraw błąd:**

1. CaOH₂  
2. FeO₃  
3. H₂ + O₂ → H₂O₂  
4. Na⁺ ma 11 elektronów  
5. „Tlenek żelaza”  
6. Mg + O₂ → MgO  
7. Al + HCl → AlCl₃ + H₂  
8. „Wartościowość siarki = 6, bo jest w grupie 16”  
9. „Jest O₂ → to spalanie”  
10. „Wartościowość = ładunek jonu”  
11. „Masa cząsteczkowa H₂O to 18 g”  
12. „Wiązanie metaliczne to to samo co jonowe”  

**Odpowiedzi:**  
1. Ca(OH)₂ — nawias.  
2. Fe₂O₃ — krzyżowanie.  
3. 2H₂ + O₂ → 2H₂O — nie zmieniaj indeksów.  
4. 10 elektronów — kation oddał.  
5. Tlenek żelaza(III) — Fe ma II/III.  
6. 2Mg + O₂ → 2MgO — bilans.  
7. 2Al + 6HCl → 2AlCl₃ + 3H₂ — bilans.  
8. S ma II, IV, VI — nie zawsze numer grupy.  
9. Analizuj substraty i produkty — nie każda reakcja z O₂ to spalanie.  
10. Wartościowość ≠ ładunek — to pokrewne, ale różne pojęcia.  
11. Masa cząsteczkowa H₂O to 18 u — nie gramów.  
12. Wiązanie metaliczne to morze elektronów; jonowe to przekazanie elektronów — to różne wiązania.

---

## 7. ĆWICZENIA

### Diagnostyka fundamentów (5 minut) — zrób przed resztą

Szybki test, czy rozumiesz pięć kluczowych rzeczy:

1. Wybierz poprawny zapis: **CaOH₂** czy **Ca(OH)₂**? Wyjaśnij jednym zdaniem.
2. Wybierz poprawne równanie otrzymywania wody: **H₂ + O₂ → H₂O₂** czy **2H₂ + O₂ → 2H₂O**?
3. Jon Al³⁺ ma 13 protonów. Ile ma elektronów?
4. Czy Ca₂O₂ jest wzorem błędnym? Dlaczego zapisujemy CaO?
5. Podaj typ wiązania w: MgO, Cl₂, Fe.

**Odpowiedzi diagnostyki:**  
1. Ca(OH)₂ — nawias obejmuje całą grupę OH.  
2. 2H₂ + O₂ → 2H₂O — nie zmieniamy indeksów; H₂O₂ to inna substancja.  
3. 10 elektronów (13 − 3).  
4. Wartościowości się równoważą, ale stosunek nie jest najprostszy — skracamy do CaO.  
5. MgO — jonowe; Cl₂ — kowalencyjne; Fe — metaliczne.

### Poziom podstawowy [OBOWIĄZKOWE]

1. Podaj liczbę p⁺, n⁰, e⁻ dla: ¹⁶O, ²⁴Mg, ⁴⁰Ar.  
2. Ustal wartościowość w: H₂S, CO₂, AlCl₃, Na₂O.  
3. Napisz wzory: tlenek wapnia, chlorek glinu, siarczek sodu, tlenek żelaza(III), wodorotlenek wapnia.  
4. Zbilansuj:  
   a) Fe + O₂ → Fe₂O₃  
   b) Al + HCl → AlCl₃ + H₂  

**Odpowiedzi do 1–4:**  
1. 8/8/8; 12/12/12; 18/22/18  
2. Tabela:

| Związek | Wartościowości |
|---------|----------------|
| H₂S | H(I), S(II) |
| CO₂ | C(IV), O(II) |
| AlCl₃ | Al(III), Cl(I) |
| Na₂O | Na(I), O(II) |

3. CaO, AlCl₃, Na₂S, Fe₂O₃, Ca(OH)₂  
4. a) 4Fe + 3O₂ → 2Fe₂O₃ b) 2Al + 6HCl → 2AlCl₃ + 3H₂  

### Poziom egzaminacyjny [DO UTRWALENIA]

5. Atom fosforu P ma 15 protonów i 16 neutronów.  
   a) Podaj symbol pierwiastka oraz liczbę masową.  
   b) Zapisz wzór tlenku tego pierwiastka, zakładając wartościowość V.  
   c) Ustal, ile atomów fosforu i tlenu zawiera wzór P₂O₅.  
   
> **Dwie poprawne perspektywy:**  
> · W zadaniach szkolnych zapisujemy zwykle **P₂O₅** — najprostszy stosunek atomów 2:5, ułatwia obliczanie wartościowości.  
> · Rzeczywista cząsteczka tlenku fosforu(V) ma wzór **P₄O₁₀**.  
> Na sprawdzianie stosuj zapis wymagany przez nauczyciela lub podręcznik.


6. Ułóż wzory sumaryczne i nazwij: a) glin + tlen, b) magnez + chlor, c) węgiel + tlen (tlenek), d) żelazo(II) + siarka.

7. Zbilansuj i określ **typ** reakcji:  
   a) K + H₂O → KOH + H₂  
   b) CaCO₃ → CaO + CO₂  
   c) Zn + CuSO₄ → ZnSO₄ + Cu

**Odpowiedzi do 5–7:**  
5. a) ³¹P b) P₂O₅ c) 2 atomy P, 5 atomów O  
6. a) Al₂O₃ – tlenek glinu b) MgCl₂ – chlorek magnezu c) CO₂ – tlenek węgla(IV) d) FeS – siarczek żelaza(II)  
7. a) **2K + 2H₂O → 2KOH + H₂** — wypieranie.  
   *(Uwaga BHP: potas reaguje z wodą bardzo gwałtownie. To przykład do analizy równania, nie do samodzielnego doświadczenia.)*  
   b) **CaCO₃ → CaO + CO₂** — analiza (rozkład).  
   c) **Zn + CuSO₄ → ZnSO₄ + Cu** — wypieranie.

### Poziom ambitny [DLA CHĘTNYCH]

8. Dlaczego w nazwie tlenku żelaza podajemy wartościowość, a w tlenku wapnia zwykle nie?  
9. Zapisz wzory tlenków siarki odpowiadające wartościowościom, które siarka przyjmuje w H₂S, SO₂ i SO₃. Podaj też nazwy systematyczne tych tlenków.  
10. Zbilansuj:  
    a) C₂H₆ + O₂ → CO₂ + H₂O  
    b) Fe₂O₃ + CO → Fe + CO₂  
11. Atom: 20 e⁻, A = 40. Jaki pierwiastek? Czy izotop wapnia? Podaj liczbę protonów i neutronów.

**Odpowiedzi do 8–11:**  
8. Fe ma II i III; Ca prawie zawsze II.  
9. H₂S → wartościowość S = II → tlenek: SO (tlenek siarki(II)); SO₂ → tlenek siarki(IV); SO₃ → tlenek siarki(VI).  
10. a) 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O  
    b) Fe₂O₃ + 3CO → 2Fe + 3CO₂  
11. Z = 20 → Ca; tak, ⁴⁰Ca; 20 p, 20 n.

### Trening interleaving (przeplatany)

**Zasada:** rozwiązuj zadania z różnych działów na zmianę. To trudniejsze, ale uczy mózg wybierać strategię.

1. Ile neutronów ma ³⁷Cl?  
2. Napisz wzór siarczanu(VI) glinu.  
3. Jaki typ reakcji: 2H₂O₂ → 2H₂O + O₂?  
4. Ustal wartościowość azotu w N₂O₅.  
5. Zbilansuj: Na + Cl₂ → NaCl.  
6. Czy wiązanie w MgO jest jonowe, czy kowalencyjne?  
7. Ile elektronów ma jon Al³⁺?  
8. Napisz wzór wodorotlenku miedzi(II).

**Odpowiedzi:**  
1. 20 n (37 − 17)  
2. Al₂(SO₄)₃  
3. analiza (rozkład)  
4. V  
5. 2Na + Cl₂ → 2NaCl  
6. jonowe (metal + niemetal)  
7. 10 e (13 − 3)  
8. Cu(OH)₂

### Ćwiczenia na elektroujemność (rozszerzenie)

1. Uszereguj od najmniejszej do największej elektroujemności: Na, Cl, O, H, F.  
2. Które wiązanie jest bardziej jonowe: NaCl czy HCl? Dlaczego?  
3. Które wiązanie jest bardziej spolaryzowane: H₂O czy H₂S? Dlaczego?

**Odpowiedzi:**  
1. Na < H < Cl < O < F.  
2. NaCl — większa różnica elektroujemności.  
3. H₂O — większa różnica elektroujemności (O vs H) niż H₂S (S vs H).

### Ćwiczenia na wzory strukturalne (rozszerzenie)

1. Narysuj wzór strukturalny H₂O, CO₂, CH₄.  
2. Narysuj wzór elektronowy Cl₂, HCl, H₂O.  
3. Ile wiązań tworzy każdy atom w CO₂? Jaka jest wartościowość węgla?

**Odpowiedzi:**  
1. H–O–H; O=C=O; H–C(–H)(–H)–H.  
2. Cl:Cl; H:Cl; H:O:H (z dwiema wolnymi parami na O).  
3. C tworzy 4 wiązania (dwa podwójne), O tworzy 2 wiązania (jedno podwójne). Wartościowość C = IV.

### Zadanie „wybierz regułę” (trening strategii)

Dla każdego przykładu najpierw wybierz dział: **atom / jon / wartościowość / wzór / wiązanie / równanie**. Dopiero potem rozwiąż.

1. Ile elektronów ma O²⁻? → …
2. Podaj wzór tlenku glinu. → …
3. 2Mg + O₂ → 2MgO — co sprawdzić? → …
4. Jaki typ wiązania występuje w Cl₂? → …
5. Ile neutronów ma ³⁷Cl? → …

**Odpowiedzi (działy):** 1. jon  2. wartościowość + wzór  3. równanie (bilans)  4. wiązanie  5. atom/izotop

### Zadanie „prawda czy fałsz”

Dla każdego zdania: P / F. Jeśli F — popraw.

1. Liczba atomowa mówi, ile neutronów ma atom.
2. Jon dodatni ma więcej protonów niż elektronów.
3. W równaniu chemicznym wolno zmieniać współczynniki, ale nie indeksy.
4. CaOH₂ i Ca(OH)₂ oznaczają to samo.
5. W związku CO₂ węgiel ma wartościowość IV.
6. NaCl jest zbudowany z sieci jonów, a nie z pojedynczych cząsteczek.

**Odpowiedzi:**  
1. F — Z = liczba protonów.  
2. P (p⁺ > e⁻).  
3. P.  
4. F — CaOH₂ nie pokazuje grupy OH; poprawnie Ca(OH)₂.  
5. P.  
6. P.

### Zadanie „od wzoru do wszystkiego”

Dla **Al₂(SO₄)₃**:

1. Podaj nazwę związku.
2. Wskaż kation i anion.
3. Podaj ich ładunki.
4. Wyjaśnij, dlaczego potrzebne są nawiasy.
5. Sprawdź, czy suma ładunków wynosi zero.

**Odpowiedzi:**  
1. Siarczan(VI) glinu.  
2. Kation: Al³⁺; anion: SO₄²⁻.  
3. +3 i −2.  
4. Nawias, bo grupa SO₄ powtarza się 3 razy.  
5. 2·(+3) + 3·(−2) = 0 — OK.

### Ćwiczenia na masę cząsteczkową (rozszerzenie)

1. Oblicz masę cząsteczkową H₂O, CO₂, NaCl, Ca(OH)₂.  
2. Która cząsteczka jest cięższa: CO₂ czy H₂O? Ile razy?

**Odpowiedzi:**  
1. H₂O: 18 u (masa cząsteczkowa); CO₂: 44 u (masa cząsteczkowa); NaCl: 58,5 u (masa jednostki wzoru); Ca(OH)₂: 74 u (masa jednostki wzoru).  
2. CO₂ jest „cięższy” — 44/18 ≈ 2,44 razy.

---

## 8. ROZSZERZENIE

- Wartościowość a **stopień utlenienia** — różnica pojęć.  
- Elektroujemność a charakter wiązania (uproszczenie szkolne).  
- Konfiguracje elektronowe na powłokach (K, L, M…) jako uzasadnienie wartościowości.  
- Sieci kowalencyjne (diament, SiO₂) jako wyjątek od „cząsteczek”.  
- Wiązanie metaliczne.  
- Alotropia.

**Powłoki elektronowe — ważne rozdzielenie:**  
**Dla pierwszych 20 pierwiastków** stosujemy wygodny zapis powłokowy: **2, 8, 8, 2**.  
Powłoka K mieści maksymalnie 2 elektrony, L — 8, a M **może** mieścić do 18, lecz w atomach pierwszych 20 pierwiastków przed rozpoczęciem jej dalszego zapełniania zaczyna zapełniać się powłoka N.

**Mnemonic (dla pierwszych 20):**  
**„2 – 8 – 8 – 2”**.

**Alotropia:**  
**Alotropia** — występowanie tego samego pierwiastka w różnych postaciach, różniących się budową i właściwościami. Np. tlen (O₂) i ozon (O₃); węgiel: diament, grafit, fullereny; fosfor: biały, czerwony, czarny.

---

## 9. DLA AMBITNYCH

- Konfiguracja podpowłokowa (1s, 2s, 2p…) — dla pierwszych ~20 pierwiastków.  
- Izobary.  
- P₄O₁₀ vs P₂O₅.  
- Wyjątki od reguły oktetu / dubletu.  
- Nietrwały SO.  
- Spalanie niecałkowite (przy niedoborze tlenu mogą powstawać CO i C).  
- Zadania łączące atom + jon + wartościowość + równanie.  
- Zapis jonowy równań.  
- Alotropia.

**Kolejność zapełniania podpowłok:**  
**Dla pierwszych 20 pierwiastków:** 1s → 2s → 2p → 3s → 3p → 4s.  
**Dalej (ambitnie):** 3d → 4p → 5s itd.

**Skojarzenie podpowłok:**  
s — 1 orbital (2 elektrony); p — 3 orbitale (6 elektronów); d — 5 orbitali (10 elektronów); f — 7 orbitali (14 elektronów).

---

## 10. ŚCIĄGA PRZED TESTEM

- H I, O II, Na/K I, Mg/Ca II, Al III, C IV, N/P III·V, S II·IV·VI, Cl I, Fe II/III, Cu I/II, Sn II/IV, Pb II/IV, Mn II/IV/VII, Cr II/III/VI.  
- W–K–S–K; kontrola łącznej wartościowości.  
- Z, A, izotopy; atom ≠ jon; protony definiują pierwiastek.  
- Jonowe vs kowalencyjne vs metaliczne.  
- Typy: synteza, analiza, **wypieranie**, **podwójna wymiana**, spalanie.  
- Bilans: współczynniki, nie indeksy. Prawo zachowania masy.  
- Nawias przy powtarzającej się grupie atomów.  
- **Wartościowość ≠ ładunek jonu.**  
- **A ≠ masa atomowa ≠ masa cząsteczkowa.**  
- Egzo- vs endotermiczne.  
- Elektroujemność rośnie w prawo i w górę.

---

## 11. FISZKI

Format: **przód → tył (+ miniwskazówka)**

| Przód | Tył | Wskazówka |
|-------|-----|-----------|
| Co oznacza liczba atomowa Z? | Liczbę protonów; w atomie obojętnym także liczbę elektronów | „Z jak zamek — protony” |
| Co oznacza liczba masowa A? | Sumę protonów i neutronów (dla danego izotopu) | „A jak całość” |
| Co definiuje pierwiastek? | Liczba protonów w jądrze | „Protony to identyfikator” |
| Jak odróżnić atom od jonu? | Atom: p⁺ = e⁻; jon: p⁺ ≠ e⁻ | „Jon ma nierównowagę” |
| Jaka jest wartościowość H, O, Al? | H(I), O(II), Al(III) | „H–I, O–II, Al–III” |
| Co robisz z indeksem 1? | Nie zapisujesz go | „Jedynka jest niewidzialna” |
| Co robisz z indeksem podczas bilansowania? | Nic — indeksów nie wolno zmieniać | „Współczynniki tak, indeksy nie” |
| Dlaczego Ca(OH)₂ ma nawias? | Bo grupa OH powtarza się dwa razy | „Nawias to pudełko na grupę” |
| Jak rozpoznać wiązanie jonowe? | Najczęściej metal + niemetal; powstają jony | „Metal oddaje, niemetal bierze” |
| Czym różni się wartościowość od ładunku jonu? | Wartościowość = liczba wiązań; ładunek = nadmiar/niedobór elektronów | „To pokrewne, ale różne pojęcia” |
| Co oznacza strzałka w równaniu? | „Reaguje, tworząc” — od substratów do produktów | „Strzałka to kierunek gotowania” |
| Wzór tlenku glinu | Al₂O₃ | „Al-III, O-II → 2·3 = 3·2” |
| Wzór chlorku wapnia | CaCl₂ | „Ca-II, Cl-I → CaCl₂” |
| Wzór tlenku żelaza(III) | Fe₂O₃ | „Fe-III, O-II → 2·3 = 3·2” |
| Typ: Zn + CuSO₄ → ZnSO₄ + Cu | Wypieranie | „Cynk wypycha miedź” |
| Typ: CaCO₃ → CaO + CO₂ | Analiza (rozkład) | „Rozbiórka” |
| Siarka – możliwe wartościowości | II, IV, VI | „Parzyste — 2, 4, 6” |
| Ile elektronów ma jon Na⁺? | 10 | „11 − 1 = 10” |
| Ile neutronów ma ²³Na? | 12 | „23 − 11 = 12” |
| Jaki typ reakcji: CH₄ + 2O₂ → CO₂ + 2H₂O? | Spalanie | „Z tlenem, wydziela ciepło” |
| Jaki typ reakcji: AgNO₃ + NaCl → AgCl↓ + NaNO₃? | Podwójna wymiana | „Zamiana partnerów” |
| Co to izotopy? | Ten sam Z, różny A; ta sama liczba protonów i elektronów | „Rodzeństwo — ten sam rodzic, inna waga” |
| Co to izobary? | Ten sam A, różny Z | „Ta sama waga, inny rodzic” |
| Wzór kwasu siarkowego(VI) | H₂SO₄ | „H-I, SO₄-II → H₂SO₄” |
| Wzór wodorotlenku sodu | NaOH | „Na-I, OH-I → NaOH” |
| Wzór azotanu(V) sodu | NaNO₃ | „Na-I, NO₃-I → NaNO₃” |
| Wzór węglanu wapnia | CaCO₃ | „Ca-II, CO₃-II → CaCO₃” |
| Wzór fosforanu(V) wapnia | Ca₃(PO₄)₂ | „Ca-II, PO₄-III → Ca₃(PO₄)₂” |
| Co to elektroujemność? | Zdolność atomu do przyciągania elektronów w wiązaniu | „Kto silniejszy, ten ciągnie” |
| Co to wiązanie metaliczne? | Dodatnie jony w morzu elektronów | „Metale przewodzą” |
| Co to reakcja egzotermiczna? | Wydziela ciepło | „Exo = na zewnątrz” |
| Co to reakcja endotermiczna? | Pochłania ciepło | „Endo = do wewnątrz” |
| Co to masa cząsteczkowa? | Suma mas atomowych w cząsteczce | „Dodaj wszystkie atomy” |
| Co to alotropia? | Ten sam pierwiastek w różnych postaciach | „O₂ i O₃” |
| Co to jony widzowe? | Jony niebiorące udziału w reakcji | „Na⁺, NO₃⁻” |
| Wzór strukturalny wody | H–O–H | „Kreski zamiast indeksów” |
| Wzór elektronowy HCl | H:Cl | „Kropki zamiast kresek” |
| Co to reguła oktetu? | Dążenie do 8 elektronów walencyjnych | „Oktet = 8” |
| Co to dublet? | Dążenie wodoru do 2 elektronów | „H ma 2” |
| Ile elektronów walencyjnych ma S? | 6 | „Grupa 16 → 6” |
| Ile elektronów walencyjnych ma Al? | 3 | „Grupa 13 → 3” |
| Jaki ładunek ma jon S²⁻? | −2 | „Przyjął 2 elektrony” |
| Ile protonów ma atom ³⁷Cl? | 17 | „Z = 17” |
| Ile neutronów ma ³⁷Cl? | 20 | „37 − 17 = 20” |

---

## 12. TEST KOŃCOWY

1. Zapisz rozmieszczenie elektronów **na powłokach** (K, L, M…): atom P (Z=15) oraz jon S²⁻.  
   *(Dla chętnych: konfiguracja podpowłokowa.)*  
2. Ustal wartościowości i napisz wzory: a) tlenek azotu(V), b) chlorek żelaza(III), c) siarczek wapnia, d) wodorotlenek sodu.  
3. Zbilansuj i określ typ reakcji:  
   a) Mg + N₂ → Mg₃N₂  
   b) 2KClO₃ →(Δ, MnO₂) 2KCl + 3O₂  
   c) Cl₂ + 2KI → 2KCl + I₂  
4. Wskaż, jaką wartościowość ma siarka w każdym z poniższych związków i podaj nazwę systematyczną tlenku (jeśli dotyczy): H₂S, SO₂, SO₃.  
5. Różnica: izotopy vs izobary (jeśli znasz — dla chętnych).  
6. Co to elektroujemność? Który pierwiastek ma największą?  
7. Jakie znasz rodzaje wiązań chemicznych? Podaj po jednym przykładzie.  
8. Co to reakcja egzotermiczna? Podaj przykład.  
9. Oblicz masę cząsteczkową H₂SO₄.  
10. Narysuj wzór strukturalny CO₂.  
11. Co to alotropia? Podaj przykład.  
12. Wyjaśnij różnicę między A, masą atomową a masą cząsteczkową.

**Odpowiedzi:**  
1. P: K2 L8 M5; S²⁻: K2 L8 M8  
2. N₂O₅; FeCl₃; CaS; NaOH  
3. a) 3Mg + N₂ → Mg₃N₂ (synteza);  
   b) 2KClO₃ —(Δ, MnO₂)→ 2KCl + 3O₂ — analiza (rozkład).  
   · Δ oznacza ogrzewanie,  
   · MnO₂ jest katalizatorem: przyspiesza reakcję, ale nie zużywa się w jej równaniu.  
   c) Cl₂ + 2KI → 2KCl + I₂ — wypieranie (lub wymiana jednokrotna).  
4. H₂S — S(II); SO₂ — S(IV), tlenek siarki(IV); SO₃ — S(VI), tlenek siarki(VI).  
5. Izotopy: ten sam Z, różny A; izobary: ten sam A, różny Z.  
6. Zdolność do przyciągania elektronów; F.  
7. Jonowe (NaCl), kowalencyjne (H₂O), metaliczne (Fe).  
8. Wydziela ciepło, np. spalanie CH₄.  
9. 2·1 + 32 + 4·16 = 98 u.  
10. O=C=O.  
11. Ten sam pierwiastek w różnych postaciach, np. O₂ i O₃.  
12. A — liczba całkowita dla izotopu; masa atomowa — średnia ważona (dziesiętna); masa cząsteczkowa — suma mas atomowych.

**Samoocena:**  
- 10–12/12 — jesteś gotowy na klasę 8.  
- 7–9/12 — wróć do sekcji, w których się pomyliłeś.  
- 0–6/12 — przejdź lekcję jeszcze raz, spokojnie, z fiszkami.

---

## 13. PODSUMOWANIE / CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| BHP | zasady (w tym wachlowanie, kwas do wody, nie pipetować ustami) |
| Atom | p⁺, n⁰, e⁻, Z, A, izotopy; A ≠ masa atomowa z układu; protony definiują pierwiastek |
| Jon | kation / anion; p⁺ ≠ e⁻ |
| Układ okresowy | system 1–18, elektrony walencyjne grup głównych, typowe wartościowości; układ według Z, nie A; trendy |
| **Wartościowość** | definicja (z wiązaniami wielokrotnymi), ustalanie w konkretnym związku, krzyżowanie + kontrola, wyjątki Fe/Cu/Sn/Pb/Mn/Cr |
| Wzory | sumaryczne, strukturalne, elektronowe; grupy atomów i nawias; masa cząsteczkowa |
| Wiązania | jonowe, kowalencyjne, metaliczne; elektroujemność |
| Równania | prawo zachowania masy, procedura bilansu, typy (w tym wypieranie i podwójna wymiana), zapis warunków nad strzałką, egzo/endotermiczne |
| Rozpuszczalność | uproszczona tabela — przygotowanie do reakcji strąceniowych |

---

## 14. SYSTEM POWTÓREK

**Zasada:** powtarzaj w odstępach. To najskuteczniejsza metoda zapamiętywania.

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 20–30 min |
| Po 1 dniu | Fiszki + ściąga przed testem | 10 min |
| Po 3 dniach | Ćwiczenia poziom podstawowy + egzaminacyjny | 15 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?  
2. Co jeszcze mylę?  
3. Co mnie zaskoczyło?

---

## 15. MAPY MYŚLI I SKOJARZENIA

### Mapa myśli: ATOM

```
ATOM
├── JĄDRO
│   ├── Protony (p⁺) — Z — dodatnie — definiują pierwiastek
│   └── Neutrony (n⁰) — A − Z — obojętne
└── POWŁOKI
    └── Elektrony (e⁻) — ujemne — w atomie = Z
```

### Mapa myśli: JON

```
JON
├── KATION (ładunek +)
│   ├── Oddał elektrony
│   ├── e⁻ < p⁺
│   └── Przykład: Na⁺ (11 p, 10 e)
└── ANION (ładunek −)
    ├── Przyjął elektrony
    ├── e⁻ > p⁺
    └── Przykład: Cl⁻ (17 p, 18 e)
```

### Mapa myśli: WZÓR SUMARYCZNY

```
WZÓR
├── Wartościowości (cyfry rzymskie)
├── Krzyżowanie
├── Skracanie (NWD)
├── Indeks 1 — pomijamy
├── Nawias — gdy grupa się powtarza
└── Kontrola — łączna wartościowość równa
```

### Mapa myśli: RÓWNANIE

```
RÓWNANIE
├── Substraty → Produkty (warunki nad strzałką, np. Δ, katalizator)
├── Prawo zachowania masy
├── Współczynniki (nie indeksy!)
├── Bilans: policz, porównaj, popraw, sprawdź
└── Typ: S A W P S
```

### Mapa myśli: WIĄZANIA

```
WIĄZANIA
├── JONOWE
│   ├── Metal + niemetal
│   ├── Przekazanie elektronów
│   ├── Powstają jony
│   └── Przykład: NaCl, MgO, CaF₂
├── KOWALENCYJNE
│   ├── Niemetal + niemetal
│   ├── Uwspólnienie elektronów
│   ├── Cząsteczki lub sieci
│   └── Przykład: H₂, HCl, H₂O, CO₂, diament
└── METALICZNE
    ├── Metale
    ├── Morze elektronów
    └── Przewodzą prąd i ciepło
```

### Mapa myśli: TYPY REAKCJI

```
TYPY REAKCJI
├── SYNTEZA (A + B → AB)
├── ANALIZA (AB → A + B)
├── WYPIERANIE (A + BC → AC + B)
├── PODWÓJNA WYMIANA (AB + CD → AD + CB)
└── SPALANIE (substancja + O₂ → tlenki + energia)
```

### Mapa myśli: UKŁAD OKRESOWY

```
UKŁAD OKRESOWY
├── OKRESY (wiersze) — liczba powłok
├── GRUPY (kolumny) — elektrony walencyjne
│   ├── 1 — I
│   ├── 2 — II
│   ├── 13 — III
│   ├── 14 — IV
│   ├── 15 — III/V
│   ├── 16 — II/IV/VI
│   ├── 17 — I
│   └── 18 — niewartościowe
└── UŁOŻONY WEDŁUG Z (nie A)
```

### Mapa myśli: KLINIKA BŁĘDÓW

```
KLINIKA BŁĘDÓW
├── ZNAJDŹ błąd
├── POPRAW
├── NAZWIJ regułę
└── WYJAŚNIJ dlaczego
```

---

## 16. CO DALEJ? — zapowiedź klasy 8

**Co dalej w klasie 8:**

- **Tlenki (L002)** — nazewnictwo, otrzymywanie, właściwości.  
- **Wodorotlenki** — zasady, reakcje z kwasami.  
- **Kwasy** — nazewnictwo, otrzymywanie, właściwości.  
- **Sole** — nazewnictwo, otrzymywanie, reakcje strąceniowe.  
- **Stechiometria** — obliczenia z równań.  
- **Roztwory** — stężenia procentowe i molowe.

To daje uczniowi orientację, po co uczy się podstaw.

---

## ZASADY WIZUALIZACJI HTML

- Bez paska postępu, bez emoji.  
- Nagłówek: kicker + tytuł + podtytuł + opis.  
- Orientacja (flow) + reguła kluczowa.  
- Szybkie panele (Musisz umieć, Ściąga).  
- Karty: ok / rem / trap / hint / amb / gray.  
- Odpowiedzi ukryte — „Pokaż / Ukryj”.  
- Fiszki listowe.  
- Warstwy ambitne — opcjonalnie ukryte.  
- STOP-box przed oddaniem zadania.  
- Sekcja „Wielka mapa skojarzeń” na początku.  
- Trening interleaving w ćwiczeniach.  
- System powtórek (sekcja 14).  
- Mapy myśli (sekcja 15).  
- Ramka decyzyjna „JAK WYBRAĆ STRATEGIĘ?” (sekcja 5.8).  
- Ramka „Wartościowość i ładunek — podobne, ale różne” (sekcja 2 — ŚCIĄGA).  
- Standardowy zapis warunków reakcji nad strzałką (np. Δ, MnO₂).  
- **KLINIKA BŁĘDÓW** jako realna sekcja (6.5) z ćwiczeniami.  
- **Wiązanie metaliczne** w sekcji 5.6.  
- **Elektroujemność** w sekcji 5.6.  
- **Wzory strukturalne i elektronowe** w sekcji 5.5.  
- **Reakcje egzo/endotermiczne** w sekcji 5.7.  
- **Masa cząsteczkowa** w sekcji 5.5.  
- **Tabela rozpuszczalności** w sekcji 5.7.  
- **Trendy w układzie okresowym** w sekcji 5.3.  
- **Alotropia** w sekcji 8.  
- **Zapis jonowy równań** w sekcji 5.7.  
- **Mapy myśli** dla wiązań, typów reakcji, układu okresowego i kliniki błędów.  
- **Sekcja „Co dalej?”** (16).

HTML referencyjny: aktualizowany `L001-CHEMIA-Powtorka-Klasy7.html`.

---

## STATUS

- Wersja 2.7 — ideał egzaminacyjny (trzecia runda: Cl/P, maks. wartościowość, sieć jonowa, indeks–współczynnik–nawias, cele ucznia, W–K–S–K z ideą) (po pełnej korekcie terminologicznej i dydaktycznej):  
  · masa cząsteczkowa vs masa jednostki wzoru  
  · tabela „pięć rzeczy, których nie wolno mieszać”  
  · model wartościowości „liczby rąk” + test równowagi  
  · algorytm liczenia elektronów w jonie  
  · poprawiona definicja jonu (wieloatomowy)  
  · osłabiona reguła elektroujemności  
  · powód „kwas do wody”  
  · usunięte pytanie o nietrwały SO  
  · zadania o siarce oparte na konkretnych związkach  
  · diagnostyka fundamentów (5 min)  
  · ulepszone sformułowania wiązań i NaCl jako jednostka sieci  
- Wersja 2.3 — rozszerzona po analizie redakcyjno-merytorycznej:  
  · **KLINIKA BŁĘDÓW** jako realna sekcja 6.5 z tabelą błędów i ćwiczeniami.  
  · **Wiązanie metaliczne** — trzecie podstawowe wiązanie (sekcja 5.6 + mapa myśli).  
  · **Elektroujemność** — definicja, zastosowanie, ćwiczenia, fiszki.  
  · **Wzory strukturalne i elektronowe** — z przykładami i ćwiczeniami (sekcja 5.5).  
  · **Reakcje egzo/endotermiczne** — tabela, mnemonic, przykłady (sekcja 5.7).  
  · **Masa cząsteczkowa** — definicja, przykłady obliczeń, porównanie z A i masą atomową (sekcja 5.5).  
  · **Tabela rozpuszczalności** — uproszczona (sekcja 5.7).  
  · **Rozszerzone tabele** — Sn, Pb, Mn, Cr; HCO₃, CH₃COO, MnO₄, CrO₄, Cr₂O₇.  
  · **Trendy w układzie okresowym** — promień, elektroujemność, charakter metaliczny (sekcja 5.3).  
  · **Alotropia** — definicja i przykłady (sekcja 8).  
  · **Zapis jonowy równań** — jony widzowe (sekcja 5.7).  
  · **Nowe mapy myśli** — wiązania, typy reakcji, układ okresowy, klinika błędów.  
  · **Sekcja „Co dalej?”** — zapowiedź klasy 8 (sekcja 16).  
  · **Uzupełnione BHP** — dodatkowe zasady bezpieczeństwa.  
  · **Uzupełnione szkło laboratoryjne** — parownica, tygiel, moździerz, eksykator, chłodnica.  
  · **Nowe fiszki** — elektroujemność, wiązanie metaliczne, egzo/endotermiczne, masa cząsteczkowa, alotropia, jony widzowe, wzory strukturalne, reguła oktetu, dublet, elektrony walencyjne.  
  · **Nowe ćwiczenia** — elektroujemność, wzory strukturalne, masa cząsteczkowa, klinika błędów.  
  · **Uściślenia** — wartościowość jonów, reguła oktetu z wyjątkami, definicja wiązania jonowego, okres dla atomu obojętnego.  
  · **Ujednolicone oznaczenia** — `·` w listach, `—` w definicjach.  
- Ten plik MD jest **bazą** pod kolejne lekcje chemii.

**Kolejny naturalny krok:** L002 — Tlenki (pełne rozwinięcie pod program klasy 8).

---

## Definicje jednym zdaniem (do szybkiego powtórzenia)

| Pojęcie | Definicja |
|---------|-----------|
| Atom | Elektrycznie obojętna cząstka pierwiastka złożona z jądra i elektronów. |
| Jon | Atom lub grupa atomów mająca ładunek, ponieważ oddała albo przyjęła elektrony. |
| Izotopy | Atomy tego samego pierwiastka: tyle samo protonów, różna liczba neutronów. |
| Liczba atomowa Z | Liczba protonów; określa, jaki to pierwiastek. |
| Liczba masowa A | Suma protonów i neutronów w konkretnym izotopie. |
| Wartościowość | Szkolna informacja, ile wiązań tworzy atom w danym związku. |
| Indeks dolny | Liczba atomów danego pierwiastka lub grupy w jednym wzorze. |
| Współczynnik | Liczba całych cząsteczek albo jednostek wzoru w równaniu. |
| Substraty | Substancje, które reagują (po lewej stronie strzałki). |
| Produkty | Substancje powstające w reakcji (po prawej stronie strzałki). |

---

## DODATEK A: 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.  
2. **Mów na głos.** Chemia wchodzi przez usta.  
3. **Rysuj.** Nawet brzydko.  
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.  
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.  
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.  
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.  
8. **Łap moment „aha!”.** To sygnał trwałego zapisu.  
9. **Śpij.** Mózg utrwala wiedzę we śnie.  
10. **Bądź ciekawy.** „Dlaczego?” to najlepsze pytanie w chemii.

---

## DODATEK B: SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
WARTOŚCIOWOŚCI:
H I | O II | Na K I | Mg Ca II | Al III | C IV
N P III/V | S II/IV/VI | Cl I | Fe II/III | Cu I/II
Sn II/IV | Pb II/IV | Mn II/IV/VII | Cr II/III/VI

WZORY:
W–K–S–K: Wartościowości → Krzyżowanie → Skracanie → Kontrola
Sumaryczny | Strukturalny | Elektronowy (kropkowy)

ATOM:
Z = p⁺ | A = p⁺ + n⁰ | n⁰ = A − Z
Protony definiują pierwiastek.
Atom: p⁺ = e⁻ | Jon: p⁺ ≠ e⁻

JONY:
Kation oddał (+) | Anion przyjął (−)

WARTOŚCIOWOŚĆ vs ŁADUNEK:
Wartościowość = liczba wiązań (np. Ca(II), Cl(I))
Ładunek = nadmiar/niedobór elektronów (np. Ca²⁺, Cl⁻)
To pokrewne, ale RÓŻNE pojęcia.

WIĄZANIA:
Jonowe | Kowalencyjne | Metaliczne
Metal oddaje, niemetal bierze; niemetale się dzielą;
metale tworzą morze elektronów.

ELEKTROUJEMNOŚĆ:
Rośnie w prawo i ku górze. Największą ma fluor (F); dalej O > N > Cl.

TYPY REAKCJI:
Synteza | Analiza | Wypieranie | Podwójna wymiana | Spalanie

REAKCJE:
Egzotermiczne (wydzielają ciepło) | Endotermiczne (pochłaniają ciepło)

BILANS:
Współczynniki tak, indeksy nie!
Prawo zachowania masy.
Warunki reakcji nad strzałką: Δ (ogrzewanie), katalizator.

MASA:
A (izotop, całkowita) ≠ masa atomowa (średnia, dziesiętna)
≠ masa cząsteczkowa (suma)

ALOTROPIA:
O₂ / O₃; diament / grafit; fosfor biały / czerwony

BHP:
Kwas → do wody.
Zapach → wachluj.
Kontakt → płucz wodą.
```

---


## DODATEK E: WARSTWA ZAAWANSOWANA (EXTRA)

Pełne wyjaśnienia — do czytania po opanowaniu podstawy lub od razu, jeśli cię ciekawi.

### E.1. Izoelektronowość

Jony/atomy o tej samej liczbie elektronów.
- 10 e⁻: Na⁺, Mg²⁺, Al³⁺, F⁻, O²⁻, Ne — konfiguracja neonu (2,8).
- 18 e⁻: K⁺, Ca²⁺, Cl⁻, S²⁻, Ar — konfiguracja argonu.

Dlaczego to ważne:
- Atomy dążą do konfiguracji najbliższego gazu szlachetnego.
- Jony izoelektronowe z gazem szlachetnym są bardzo trwałe.
- Dlatego Na⁺ i Cl⁻ istnieją, a Na²⁺ czy Cl²⁺ praktycznie nie.

### E.2. Masa atomowa jako średnia ważona

Chlor: 35,45 u. Mieszanina izotopów:
- ³⁵Cl — 75,77%, masa 34,969 u
- ³⁷Cl — 24,23%, masa 36,966 u
- M = 0,7577·34,969 + 0,2423·36,966 ≈ 35,45 u

### E.3. Energia jonizacji ilościowo

EI₁ (kJ/mol): Na 496, Mg 738, Al 578, Si 786, P 1012, S 1000, Cl 1251, Ar 1521.

Rośnie w prawo okresu. Metale mają niską EI (oddają e⁻), niemetale wysoką (przyjmują).

### E.4. VSEPR — geometria cząsteczek

Pary elektronowe wokół atomu centralnego odpychają się i układają jak najdalej od siebie.

| Pary wiążące | Wolne pary | Kształt | Przykład | Kąt |
|--------------|------------|---------|----------|-----|
| 2 | 0 | liniowy | CO₂ | 180° |
| 3 | 0 | trygonalny płaski | BF₃ | 120° |
| 4 | 0 | tetraedryczny | CH₄ | 109,5° |
| 3 | 1 | piramidalny | NH₃ | ~107° |
| 2 | 2 | kątowy | H₂O | ~104,5° |

### E.5. Hybrydyzacja sp³

Węgiel w stanie wzbudzonym: 2s¹ 2p³. Cztery orbitale mieszają się w 4 równoważne hybrydy sp³, skierowane tetraedrycznie (109,5°). Dlatego CH₄ to tetraedr, a wszystkie wiązania C–H są identyczne.

### E.6. Moment dipolowy

- CO₂ — liniowy, μ = 0 (polaryzacje się znoszą)
- H₂O — kątowy, μ = 1,85 D (polaryzacje się sumują)
- CCl₄ — tetraedryczny, μ = 0 (symetria)
- NH₃ — piramidalny, μ = 1,47 D

„Spolaryzowane wiązanie” ≠ „polarna cząsteczka”.

### E.7. Energia wiązania

| Wiązanie | Energia (kJ/mol) |
|----------|------------------|
| H–H | 436 |
| Cl–Cl | 243 |
| C–C | 348 |
| C=C | 614 |
| C≡C | 839 |
| N≡N | 946 |
| O=O | 498 |

Wiązanie podwójne jest silniejsze niż pojedyncze, ale nie 2× (π słabsze niż σ).

### E.8. Redoks wstęp

- Utlenianie — oddanie e⁻ (stopień utlenienia rośnie)
- Redukcja — przyjęcie e⁻ (stopień utlenienia maleje)
- Utleniacz — przyjmuje e⁻, sam się redukuje
- Reduktor — oddaje e⁻, sam się utlenia

Przykład: Zn + CuSO₄ → ZnSO₄ + Cu. Zn (0→+2) — reduktor. Cu²⁺ (+2→0) — utleniacz.

Szereg aktywności metali: cynk aktywniejszy od miedzi — dlatego wypiera ją z soli.

### E.9. Most do L013

Kiedy przejść do L013 (zaawansowana): gdy opanujesz podstawę (12/12) i chcesz iść dalej. L013 zawiera:
- Konfiguracja podpowłokowa (1s, 2s, 2p, 3s, 3p, 4s, 3d)
- Zasady Aufbau, Hunda, Pauliego
- Stopnie utlenienia, pełny redoks, bilans elektronowy
- Stechiometria z nadmiarem, wydajnością
- Kinetyka, równowaga, stała K, Le Chatelier

**Ale nie musisz.** L013 jest zawsze dostępna. Ciekawość wystarczy.

---

**Koniec L001 MASTER v3.1**

Data: 2026-09-11  
Poprzednia: L000 Indeks v4.1  
Następna: L002 Tlenki (v2.1 — do podniesienia)



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L001)

Fundamenty — bez tego sypią się L002–L005.

### Ściąga 80/20
- Pierwiastek / związek / mieszanina — nie mylić.
- Atom: Z = protony; w atomie obojętnym elektrony = Z; neutrony = A − Z (jeśli masa atomowa w zadaniu).
- Jon: kation + (mniej e⁻), anion − (więcej e⁻).
- Wartościowość → wzór: **W–K–S–K** (wartościowości, krzyżuj, skróć, kontrola).
- Równanie: współczynniki zmieniaj, **indeksów we wzorze nie**.
- Wiązanie jonowe vs kowalencyjne — hasło + 1 przykład z lekcji.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Na₂O zapisane „NaO₂”, bo tlen jest „2” | krzyżuj wartościowości |
| Dopisuję 3 do O w H₂O | to już inny wzór |
| Jon Na⁺ ma więcej elektronów | ma mniej (11p, 10e) |

### 6 zadań extra
1. Wzór tlenku glinu (W Al 3, O 2).  
2. Uzgodnij: Fe + O₂ → Fe₂O₃.  
3. Ile e⁻ w Ca²⁺ (Z=20)?  
4. Mieszanina vs związek — 1 przykład.  
5. Co wolno zmienić w równaniu: indeks czy współczynnik?  
6. W–K–S–K na Ca i Cl.

Szkic: 1 Al₂O₃. 2 4 Fe + 3 O₂ → 2 Fe₂O₃. 3 18. 5 współczynnik. 6 CaCl₂.

### Status
2026-09-12 · L001 MASTER nietknięty · plik roboczy CHEMIA_PODSTAWA_PLUS_v1.1.md.



---

## UZUPEŁNIENIE wizualne L001 (audyt plus.md — doklejone)

### Diagram atomu (ASCII)

```
        ┌──────────────┐
        │    JĄDRO     │
        │  p⁺  n⁰  n⁰  │
        │  p⁺  n⁰      │
        └──────────────┘
       ╱ ╲    ╱ ╲    ╱ ╲
      e⁻    e⁻     e⁻  ← powłoki (przykład)
```

### Izotopy wodoru

```
¹H — prot, 1p, 0n
²H — deuter, 1p, 1n
³H — tryt, 1p, 2n (promieniotwórczy)
```

### Nawias = pudełko na grupę OH

```
CaOH₂   →  Ca–O–H–H      ← indeks przyklejony do H (źle)
Ca(OH)₂ →  Ca–(O–H)(O–H) ← indeks obejmuje całą grupę OH
```

### Elektroujemność (Pauling) — wartości orientacyjne

| Pierwiastek | χ (Pauling) |
|-------------|-------------|
| F | 3,98 |
| O | 3,44 |
| Cl | 3,16 |
| N | 3,04 |
| Br | 2,96 |
| I | 2,66 |
| C | 2,55 |
| H | 2,20 |
| Mg | 1,31 |
| Ca | 1,00 |
| Na | 0,93 |
| K | 0,82 |

Reguła orientacyjna różnicy: Δχ > 1,7 często jonowe; 0,4–1,7 kowalencyjne spolaryzowane; < 0,4 niespolaryzowane. To wskazówka, nie jedyne kryterium.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L001 (przegląd mer. — doklejone)

**Atom (precyzyjniej):** najmniejsza elektrycznie obojętna cząstka pierwiastka zachowująca jego tożsamość chemiczną. Właściwości chemiczne → głównie elektrony walencyjne.  
**Jon:** atom lub trwała grupa atomów z ładunkiem (oddanie/przyjęcie e⁻).  
**Wartościowość:** model szkolny (ile wiązań / ile H). Ładunek jonu zapisuj jako Fe³⁺, nie „wartościowość 3” bez komentarza.  
**Stopień utlenienia:** ładunek **fikcyjny** — elektrony wiązania przypisane bardziej elektroujemnemu.  
**Izotopy:** ten sam Z, różne A; chemia prawie ta sama, masa i część fizyki inna.  
**Aᵣ:** średnia ważona **częstością (abundancją)** izotopów.  
**Mol (2019):** N_A = 6,02214076·10²³ mol⁻¹; w szkole 6,02·10²³.

### Ciekawostki
- Wiązania wodorowe: woda ciekła w temp. pokojowej (H₂S jest gazem).
- Lód pływa — mniejsza gęstość niż woda ciekła (sieć „pusta”).
- H bywa przy grupie 1 i 17; He ma dublet, nie oktet.
- Model Bohra = planeta to uproszczenie; elektron to chmura/orbital.
- Nukleony = p⁺ + n⁰; siły jądrowe silniejsze niż odpychanie ładunków w jądrze.


## MATERIAŁ Z HTML L001 fundamenty

Plik: `CHEMIA_L001_FUNDAMENTY.html`
Plan: atom → wartościowość → wiązania → równania.
Klucz diagnozy: ²³Na 11p 12n 11e; Ca(OH)₂ nawias na OH; 4Fe+3O₂→2Fe₂O₃.


## KOREKTA DYDAKTYCZNA L001 (2026-09-12 — nic nie usunięto)

Treść MASTER zostaje. Precyzja + extra oznaczone.

**Atom:** najmniejsza elektrycznie obojętna cząstka pierwiastka zachowująca właściwości chemiczne (jądro + elektrony wokół jądra). Szkolnie: elektrony na powłokach. Położenie = prawdopodobieństwo w obszarze.

**Nuklid** = dane Z i liczba neutronów (²³Na). **Izotopy** = to samo Z, inne A.

**e⁻ = Z − q** (q ze znakiem): Al³⁺ → 10; S²⁻ → 18.

**Szkło:** zlewka ≠ dokładne odmierzanie (cylinder / pipeta / biureta). Etykieta + piktogramy przed pracą.

**Wartościowość ≠ numer grupy.** H szkolnie nad grupą 1; grupa 17 tylko ciekawostka.

**Dwie metody:** W–K–S–K dla MgCl₂, Al₂O₃; ładunki (suma 0) dla Ca(OH)₂, Al₂(SO₄)₃.

Jony: OH⁻ wodorotlenkowy; NO₃⁻ azotanowy(V); SO₄²⁻ siarczanowy(VI); CO₃²⁻ węglanowy; PO₄³⁻ fosforanowy(V); NH₄⁺ amonowy; HCO₃⁻ wodorowęglanowy; CH₃COO⁻ octanowy (etanianowy). MnO₄⁻, Cr₂O₇²⁻ — dodatek ambitny.

Wiązanie metal+niemetal na E8 zwykle jonowe (reguła). Kowalencyjne: H₂O, CO₂ (cząsteczki) vs diament, SiO₂ (sieci). Woda: kowalencyjne w cząsteczce, wodorowe między cząsteczkami.

Spalanie całkowite: CH₄ + 2 O₂ → CO₂ + 2 H₂O; niedobór O₂ → CO / C.

Podwójna wymiana w roztworze zwykle gdy osad, gaz lub H₂O.

Wartościowość ≠ stopień utlenienia.

2 Mg + O₂ → 2 MgO · 48 g + 32 g = 80 g.

(s)(l)(g)(aq) ↓ ↑ Δ. Masa cząsteczkowa vs masa wzoru (NaCl).

Klucze: numeracja 5–7 i 8–11. 2 KClO₃ —(Δ, MnO₂)→ 2 KCl + 3 O₂.

Ambitny dodatek (zostaje, nie obowiązek tygodnia 1): Δχ, orbitale, izobary, alotropia, trendy.

HTML: `CHEMIA_L001_FUNDAMENTY.html`.

<!-- ==================== END L001 ==================== -->



---

<!-- ==================== BEGIN L002 ==================== -->

# LEKCJA L002 — TLENKI

# CHEMIA: PODSTAWA PLUS

## L002 — Tlenki

**Nazewnictwo · podział · otrzymywanie · właściwości · reakcje · amfoteryczność**

**MASTER v2.1** · 2026-09-12  
Wzorzec: L001 MASTER v3.1  
Poprzednia lekcja: L001 (fundamenty) · Następna: L003 (wodorotlenki)

**Kolejność:** wzór tlenku (z L001) → nazwa → charakter → reakcje z wodą / kwasami / zasadami → amfoteryczność → doświadczenia

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L002 jest jego wiernym rozwinięciem. Indeks L000 linkuje do L002 MASTER.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

**Zmiany w v2.0 (względem v1.0):**
· dodano pełny schemat MASTER (JAK PRACOWAĆ, FILOZOFIA, POZIOMY, CEL, ŚCIĄGA rozbudowana, KLINIKA 2.0, DOŚWIADCZENIE, ĆWICZENIA A/B/C/D, FISZKI 20+, TEST, CHECKLISTA, MAPA MYŚLI, CO DALEJ, SŁOWNIK, DODATKI C/D/E)
· rozbudowano ściągę (tabela wartościowości, więcej przykładów, tlenki w przyrodzie)
· dodano Klinikę 2.0 (7 kroków)
· dodano Drabinkę trudności
· dodano Interleaving
· dodano DODATEK C (format doświadczenia), D (format kliniki), E (warstwa extra — amfoteryczność, P₄O₁₀, tlenki w przyrodzie)
· rozbudowano fiszki (8 → 22)
· rozbudowano ćwiczenia (11 → 20)
· dodano System powtórek
· dodano Definicje jednym zdaniem
· dodano 10 zasad supernauki
· dodano Szybką ściągę na jednej stronie
· dodano STATUS
· zachowano całą treść v1.0 bez skracania

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

Ta lekcja jest zbudowana tak, żeby **twój mózg sam chciał zapamiętywać**. Zasady:

1. **Nie czytaj biernie.** Po każdym akapicie zatrzymaj się i odpowiedz sobie w myśli: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.** Błąd popełniony przed nauką jest bezcenny — twój mózg zapamiętuje go lepiej niż 10 poprawnych przykładów.
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień. Nawet 5 minut wystarczy.
4. **Mów na głos.** Chemia wchodzi przez usta, nie przez oczy. Czytaj wzory na głos: „Al-dwa-O-trzy".
5. **Rysuj.** Nawet brzydko. Atom, jon, krzyżowanie — ręka pamięta lepiej niż wzrok.
6. **Łap moment „aha!"** — to sygnał, że mózg właśnie zapisał trwale. Zatrzymaj się wtedy i powiedz sobie, co zrozumiałeś.

**Zasada 80/20:** 20% tej lekcji daje 80% efektu. Te 20% to: **nazewnictwo, charakter tlenku, reakcja z wodą**.

**Uwaga o mnemonikach:**  
**Rdzeniowe (warto zapamiętać):**  
1. O najczęściej II — w modelu szkolnym  
2. Metal → zasadowy, niemetal → kwasowy  
3. Tlenek + woda → wodorotlenek (metal) / kwas (niemetal)  
4. Tlenek zasadowy + kwas → sól + woda  
5. Tlenek kwasowy + zasada → sól + woda  

Reszta skojarzeń (w tym żarty) jest **opcjonalna** — nie ucz się ich wszystkich.

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Uczeń sam wybiera, ile czasu poświęca na daną część. Nie narzucamy sztywnych ram czasowych ani paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW":**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 5 — Klinika 2.0.)

**Oznaczenia reguł (bez emoji, opis słowny):**  
· fakt chemiczny  
· uproszczenie szkolne  
· wskazówka egzaminacyjna  
· uwaga (pułapka)

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- W–K–S–K (wartościowości → krzyżowanie → skracanie → kontrola)
- O najczęściej II; H I; Al III; C IV; Fe II/III; Cu I/II
- Metal vs niemetal (orientacyjnie)
- Wzór sumaryczny — najprostszy stosunek atomów

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- ułożyć wzór tlenku z wartościowości (W–K–S–K z L001),
- nazwać tlenek systematycznie (w tym Fe, Cu, Sn, Pb, Mn, Cr z cyfrą rzymską),
- rozróżnić tlenek kwasowy, zasadowy, obojętny i (rozszerzenie) amfoteryczny,
- napisać reakcję tlenku metalu z wodą oraz tlenku niemetalu z wodą,
- powiązać tlenek z kwasem lub zasadą,
- udokumentować proste doświadczenie (obserwacja ≠ wniosek),
- (ambitny) wyjaśnić, dlaczego tlenki amfoteryczne reagują i z kwasami, i z zasadami,
- (zaawansowany) znać most do L013 (redoks, stopnie utlenienia).

---

## 2. ŚCIĄGA

### Definicja

**Tlenek** — związek tlenu z innym pierwiastkiem (metalem lub niemetalem).  
Wzór ogólny: pierwiastek + O (indeksy z wartościowości).

W szkolnym modelu tlen występuje najczęściej na stopniu utlenienia −II, dlatego przyjmujemy jego wartościowość II. Wyjątki (nadtlenki, ponadtlenki, np. H₂O₂, Na₂O₂) omawiamy w warstwie zaawansowanej.

### Nazewnictwo

| Wzór | Nazwa systematyczna | Uwagi |
|------|---------------------|--------|
| Na₂O | tlenek sodu | metal + O |
| K₂O | tlenek potasu | |
| CaO | tlenek wapnia | |
| MgO | tlenek magnezu | |
| Al₂O₃ | tlenek glinu | |
| FeO | tlenek żelaza(II) | **podaj wartościowość** |
| Fe₂O₃ | tlenek żelaza(III) | |
| CuO | tlenek miedzi(II) | |
| Cu₂O | tlenek miedzi(I) | |
| SnO | tlenek cyny(II) | |
| SnO₂ | tlenek cyny(IV) | |
| PbO | tlenek ołowiu(II) | |
| PbO₂ | tlenek ołowiu(IV) | |
| MnO | tlenek manganu(II) | |
| MnO₂ | tlenek manganu(IV) | |
| Mn₂O₇ | tlenek manganu(VII) | |
| Cr₂O₃ | tlenek chromu(III) | |
| CrO₃ | tlenek chromu(VI) | |
| CO₂ | tlenek węgla(IV) / dwutlenek węgla | potocznie OK w szkole |
| CO | tlenek węgla(II) / czad | |
| SO₂ | tlenek siarki(IV) | |
| SO₃ | tlenek siarki(VI) | |
| N₂O | tlenek azotu(I) / podtlenek azotu | |
| NO | tlenek azotu(II) | |
| N₂O₃ | tlenek azotu(III) | |
| NO₂ | tlenek azotu(IV) | |
| N₂O₅ | tlenek azotu(V) | |
| P₂O₅ | tlenek fosforu(V) | zapis szkolny; cząsteczka: P₄O₁₀ |
| P₄O₆ | tlenek fosforu(III) | zapis szkolny: P₂O₃ |
| H₂O | tlenek wodoru / woda | szczególny |

**Reguła:** przy Fe, Cu, Sn, Pb, Mn, Cr, a także innych metalach o zmiennej wartościowości — **zawsze** cyfra rzymska w nazwie.

**Uwaga normatywna (nazewnictwo):** W polskim nazewnictwie chemicznym stosuje się nazwy typu *tlenek żelaza(III)*, a nie *tlenek żelaza trzy*. Cyfra rzymska w nawiasie to standard IUPAC i polskiej nomenklatury szkolnej.

### Charakter tlenków (klucz)

| Charakter | Skąd | Reakcja modelowa | Przykłady |
|-----------|------|------------------|-----------|
| **Zasadowy** | tlenki metali (głównie grup 1–2) | tlenek + H₂O → wodorotlenek | Na₂O, K₂O, CaO, MgO, BaO |
| **Kwasowy** | tlenki niemetali | tlenek + H₂O → kwas | SO₂, SO₃, CO₂, P₂O₅, N₂O₅, N₂O₃ |
| **Obojętny** | nie tworzy kwasu ani zasady z wodą (w warunkach szkolnych) | brak reakcji z wodą | CO, NO, N₂O |
| **Amfoteryczny** (rozszerzenie) | reaguje z kwasami **i** z zasadami | np. Al₂O₃, ZnO, BeO, PbO, SnO | Al₂O₃, ZnO |

**Most z L001:** metal oddaje → tlenek metalu często zasadowy; niemetal bierze → tlenek niemetalu często kwasowy. To reguła **orientacyjna**, nie uniwersalna (np. Mn₂O₇ jest kwasowy, choć to tlenek metalu; Al₂O₃ jest amfoteryczny).

**Uwaga o wyjątkach:**
- Mn₂O₇, CrO₃ — tlenki metali przejściowych o wysokiej wartościowości — mają charakter **kwasowy** (tworzą kwasy: HMnO₄, H₂CrO₄).
- Al₂O₃, ZnO, BeO — amfoteryczne.
- Fe₂O₃, CuO — zasadowe (nie reagują z wodą, ale z kwasami tak).


### Jak rozpoznać charakter tlenku szybko?

1. Tlenek metalu grup 1–2 (Na, K, Ca, Mg, Ba) → zwykle **zasadowy**.
2. Tlenek niemetalu (C, S, N, P, Cl) → zwykle **kwasowy**.
3. Tlenek Al, Zn, Be, Pb, Sn → **amfoteryczny**.
4. CO, NO, N₂O → **obojętny** (wobec wody w warunkach szkolnych).
5. Wyjątki: Mn₂O₇, CrO₃ — tlenki metali na wysokim stopniu → **kwasowe**.

**MgO + H₂O** praktycznie nie zachodzi w typowych warunkach szkolnych; Mg(OH)₂ raczej przez strącanie (np. MgCl₂ + 2 NaOH).

### Otrzymywanie (podstawa)

1. **Spalanie pierwiastka w tlenie:**  
   2Mg + O₂ → 2MgO  
   S + O₂ → SO₂  
   C + O₂ → CO₂ (nadmiar O₂)  
   4P + 5O₂ → 2P₂O₅ (zapis szkolny; rzeczywiście P₄O₁₀)  
   4Na + O₂ → 2Na₂O  
   4Al + 3O₂ → 2Al₂O₃

2. **Rozkład termiczny niektórych soli / wodorotlenków:**  
   CaCO₃ →(Δ) CaO + CO₂  
   2Cu(OH)₂ →(Δ) 2CuO + 2H₂O  
   2Fe(OH)₃ →(Δ) Fe₂O₃ + 3H₂O  
   2KClO₃ →(Δ, MnO₂) 2KCl + 3O₂ (tlen jako produkt, nie tlenek)

3. **Utlenianie niższych tlenków** (rozszerzenie):  
   2SO₂ + O₂ →(kat.) 2SO₃  
   2CO + O₂ → 2CO₂  
   2NO + O₂ → 2NO₂

4. **Reakcja metalu z parą wodną** (dla metali aktywnych, rozszerzenie):  
   2Na + 2H₂O → 2NaOH + H₂ (tu produktem jest wodorotlenek, nie tlenek)  
   3Fe + 4H₂O →(Δ) Fe₃O₄ + 4H₂

### Reakcje kluczowe

**Tlenek zasadowy + woda → wodorotlenek**  
Na₂O + H₂O → 2NaOH  
K₂O + H₂O → 2KOH  
CaO + H₂O → Ca(OH)₂  
BaO + H₂O → Ba(OH)₂  
MgO + H₂O → Mg(OH)₂ (bardzo wolno, praktycznie nie zachodzi w typowych warunkach szkolnych — patrz warstwa zaawansowana)

**Tlenek kwasowy + woda → kwas**  
SO₃ + H₂O → H₂SO₄  
SO₂ + H₂O → H₂SO₃  
CO₂ + H₂O → H₂CO₃ (słaby, nietrwały)  
P₂O₅ + 3H₂O → 2H₃PO₄  
N₂O₅ + H₂O → 2HNO₃  
N₂O₃ + H₂O → 2HNO₂

**Tlenek zasadowy + kwas → sól + woda**  
CaO + 2HCl → CaCl₂ + H₂O  
CuO + H₂SO₄ → CuSO₄ + H₂O  
Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O  
Na₂O + 2HNO₃ → 2NaNO₃ + H₂O

**Tlenek kwasowy + zasada → sól + woda**  
CO₂ + 2NaOH → Na₂CO₃ + H₂O  
CO₂ + NaOH → NaHCO₃ (nadmiar CO₂)  
SO₂ + 2NaOH → Na₂SO₃ + H₂O  
SO₃ + 2KOH → K₂SO₄ + H₂O

**Tlenek amfoteryczny + kwas → sól + woda**  
Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O  
ZnO + 2HCl → ZnCl₂ + H₂O

**Tlenek amfoteryczny + zasada → sól + woda**  
<!-- FIX: w roztworze wodnym standard pakietu = kompleks hydroksoglinianowy; NaAlO₂ = stop / starsza konwencja -->  
Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (w stopie / starszy zapis szkolny)  
Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄] (w roztworze — **zalecane w tym pakiecie**)  
ZnO + 2NaOH → Na₂ZnO₂ + H₂O  
Jonowo (zalecane extra): Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻ · Zn(OH)₂ + 2OH⁻ → [Zn(OH)₄]²⁻

### P₂O₅ / P₄O₁₀ (ramka szkolna)

W zadaniach szkolnych zapisujemy **P₂O₅** (najprostszy stosunek).  
Rzeczywista cząsteczka to **P₄O₁₀**.  
Na sprawdzianie: używaj P₂O₅, chyba że pytanie prosi o wzór cząsteczkowy.

**Dlaczego dwie wersje?**  
Wzór P₂O₅ to zapis empiryczny (najprostszy stosunek P : O = 2 : 5). P₄O₁₀ to wzór rzeczywistej cząsteczki (tetratlenek dekatlenek difosforu). W szkole stosujemy zapis empiryczny, bo jest wygodniejszy do obliczeń stechiometrycznych i pokazuje wartościowość P(V).

---

## 3. WARTOŚCIOWOŚĆ — PRZYPOMNIENIE (z L001)

Przy układaniu wzoru tlenku:

1. Wartościowość pierwiastka i O (II — najczęściej).
2. W–K–S–K + skracanie.
3. Kontrola: łączna wartościowość równa.

Przykłady:  
Fe(III) + O(II) → Fe₂O₃ (2·III = 6; 3·II = 6)  
N(V) + O(II) → N₂O₅ (2·V = 10; 5·II = 10)  
S(IV) + O(II) → SO₂ (1·IV = 4; 2·II = 4)  
S(VI) + O(II) → SO₃ (1·VI = 6; 3·II = 6)

**Szybka tabela wartościowości w tlenkach:**

| Pierwiastek | Wartościowość | Wzór tlenku | Nazwa |
|-------------|---------------|-------------|-------|
| Na | I | Na₂O | tlenek sodu |
| K | I | K₂O | tlenek potasu |
| Mg | II | MgO | tlenek magnezu |
| Ca | II | CaO | tlenek wapnia |
| Ba | II | BaO | tlenek baru |
| Al | III | Al₂O₃ | tlenek glinu |
| Fe | II | FeO | tlenek żelaza(II) |
| Fe | III | Fe₂O₃ | tlenek żelaza(III) |
| Cu | I | Cu₂O | tlenek miedzi(I) |
| Cu | II | CuO | tlenek miedzi(II) |
| Zn | II | ZnO | tlenek cynku |
| C | II | CO | tlenek węgla(II) |
| C | IV | CO₂ | tlenek węgla(IV) |
| N | I | N₂O | tlenek azotu(I) |
| N | II | NO | tlenek azotu(II) |
| N | IV | NO₂ | tlenek azotu(IV) |
| N | V | N₂O₅ | tlenek azotu(V) |
| S | IV | SO₂ | tlenek siarki(IV) |
| S | VI | SO₃ | tlenek siarki(VI) |
| P | III | P₂O₃ (szkolny) | tlenek fosforu(III) |
| P | V | P₂O₅ (szkolny) | tlenek fosforu(V) |

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Tlenek wapnia + woda

**Problem:** Czy tlenek wapnia reaguje z wodą?  
**Hipoteza:** Powstanie wodorotlenek; roztwór będzie zasadowy.  
**Sprzęt:** CaO (wapno palone), woda destylowana, probówka, uniwersalny papierek wskaźnikowy, fenoloftaleina.  
**Obserwacja:** silne rozgrzanie, „syczenie"; papierek uniwersalny niebieski; fenoloftaleina malinowa.  
**Wniosek:** CaO reaguje z wodą; powstaje roztwór o odczynie zasadowym (Ca(OH)₂).  
**Równanie:** CaO + H₂O → Ca(OH)₂  
**BHP:** nie dotykać CaO mokrymi rękami (żrący); okulary ochronne; reakcja silnie egzotermiczna.

### Doświadczenie 2: Spalanie magnezu w tlenie

**Problem:** Czy magnez reaguje z tlenem?  
**Hipoteza:** Powstanie biały proszek — tlenek magnezu.  
**Sprzęt:** wstążka magnezowa, szczypce metalowe, palnik, wata.  
**Obserwacja:** oślepiający biały płomień; biały proszek (MgO).  
**Wniosek:** Magnez spala się w tlenie, tworząc tlenek magnezu.  
**Równanie:** 2Mg + O₂ → 2MgO  
**BHP:** nie patrzeć bezpośrednio na płomień (chronić oczy); pracować w okularach; nie dotykać produktu (gorący).

### Doświadczenie 3: Tlenek węgla(IV) + woda wapienna

**Problem:** Jak wykryć CO₂?  
**Hipoteza:** CO₂ mętni wodę wapienną.  
**Sprzęt:** woda wapienna Ca(OH)₂, rurka do dmuchania, probówka.  
**Obserwacja:** mętnienie wody wapiennej (biały osad CaCO₃).  
**Wniosek:** CO₂ reaguje z Ca(OH)₂ → CaCO₃ + H₂O.  
**Równanie:** CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O  
**BHP:** nie wciągać wody wapiennej do ust.

**Obserwacja ≠ wniosek:**
- Obserwacja: biały osad.
- Wniosek: powstał węglan wapnia (nierozpuszczalny).
- Nie: „Obserwacja: powstał CaCO₃" — to już wniosek, nie obserwacja.

---

## 5. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Format Kliniki 2.0

```
Błąd → Znajdź → Popraw → Nazwij regułę → Wyjaśnij dlaczego → Zadanie podobne → Zadanie z pułapką
```

### Tabela błędów

| Błąd ucznia | Poprawnie | Reguła |
|-------------|-----------|--------|
| FeO₃ | Fe₂O₃ | W–K–S–K: Fe(III), O(II) → 2 i 3 |
| „tlenek żelaza" | tlenek żelaza(II) lub (III) | Fe ma zmienną wartościowość |
| Ca₂O₂ | CaO | skracanie do najprostszego stosunku |
| SO₃ + H₂O → H₂SO₃ | H₂SO₄ | SO₃ to tlenek siarki(VI) → kwas siarkowy(VI) |
| CO₂ to tlenek zasadowy | kwasowy (niemetal) | charakter z rodzaju pierwiastka |
| P₄O₁₀ w każdym zadaniu | P₂O₅ w typowym zadaniu szkolnym | zapis szkolny vs cząsteczka |
| Mn₂O₇ zasadowy | kwasowy | wyjątek: tlenek metalu o wysokiej wartościowości bywa kwasowy |
| Al₂O₃ tylko zasadowy | amfoteryczny | reaguje z kwasami i zasadami |
| „Tlenek + woda zawsze daje kwas" | zależy od charakteru | tylko tlenki kwasowe |
| „MgO + H₂O → Mg(OH)₂ łatwo" | praktycznie nie zachodzi | MgO trudno reaguje z wodą |

### Klinika 2.0 — przykład 1

**Błąd:** FeO₃

- **Znajdź:** Zły wzór tlenku żelaza(III).
- **Popraw:** Fe₂O₃.
- **Reguła:** W–K–S–K (wartościowości → krzyżowanie → skracanie → kontrola).
- **Dlaczego:** Fe(III) i O(II): 2·III = 6 = 3·II. Wzór FeO₃ dawałby 1·III ≠ 3·II.
- **Zadanie podobne:** Zapisz wzór tlenku miedzi(II).
- **Zadanie z pułapką:** Zapisz wzór tlenku miedzi(I). (Odp.: Cu₂O, nie CuO.)

### Klinika 2.0 — przykład 2

**Błąd:** „CO₂ jest tlenkiem zasadowym, bo tworzy kwas węglowy."

- **Znajdź:** Błędny charakter.
- **Popraw:** CO₂ jest tlenkiem kwasowym.
- **Reguła:** Tlenki niemetali są kwasowe; tlenki metali — zasadowe (z wyjątkami).
- **Dlaczego:** Węgiel jest niemetalem, więc jego tlenek ma charakter kwasowy. Tworzy kwas węglowy H₂CO₃ — to potwierdza kwasowy charakter, nie zasadowy.
- **Zadanie podobne:** Określ charakter SO₂, Na₂O, CO.
- **Zadanie z pułapką:** Określ charakter Al₂O₃. (Odp.: amfoteryczny.)

### Klinika 2.0 — przykład 3

**Błąd:** „SO₃ + H₂O → H₂SO₃"

- **Znajdź:** Zły produkt.
- **Popraw:** SO₃ + H₂O → H₂SO₄.
- **Reguła:** Tlenek siarki(VI) → kwas siarkowy(VI).
- **Dlaczego:** SO₃ to tlenek siarki(VI). Wartościowość S = VI. Kwas siarkowy(VI) to H₂SO₄ (S na VI). H₂SO₃ to kwas siarkowy(IV) — powstaje z SO₂.
- **Zadanie podobne:** SO₂ + H₂O → ? (Odp.: H₂SO₃.)
- **Zadanie z pułapką:** Który tlenek siarki daje H₂SO₄? (Odp.: SO₃, nie SO₂.)

### Klinika 2.0 — przykład 4

**Błąd:** „Wszystkie tlenki metali są zasadowe."

- **Znajdź:** Uogólnienie.
- **Popraw:** Większość tlenków metali jest zasadowa, ale są wyjątki: amfoteryczne (Al₂O₃, ZnO) i kwasowe (Mn₂O₇, CrO₃).
- **Reguła:** Charakter zależy od wartościowości i położenia w układzie okresowym.
- **Dlaczego:** Metale przejściowe o wysokiej wartościowości tworzą tlenki kwasowe; niektóre metale (Al, Zn) — amfoteryczne.
- **Zadanie podobne:** Określ charakter CrO₃, ZnO.
- **Zadanie z pułapką:** Czy każdy tlenek metalu reaguje z wodą? (Odp.: Nie — np. Fe₂O₃, CuO nie reagują z wodą.)

---

## 6. ĆWICZENIA

### 6.1. Mini-check (5 pytań)

1. Co to tlenek?
2. Jaki jest charakter tlenku metalu, a jaki niemetalu?
3. Co powstaje z tlenku metalu + wody?
4. Co powstaje z tlenku niemetalu + wody?
5. Co to tlenek obojętny?

### 6.2. Ćwiczenie prowadzone

**Dane:** Na₂O (tlenek sodu).

**Krok 1.** Metal → zasadowy.
**Krok 2.** Tlenek zasadowy + woda → wodorotlenek.
**Krok 3.** Na₂O + H₂O → 2NaOH (pamiętaj o bilansie: 2 Na po lewej, 2 Na po prawej; 1 O + 1 O = 2 O po prawej; 2 H po prawej).

**Odpowiedź:** Na₂O + H₂O → 2NaOH.

**Spróbuj sam:** CaO + H₂O → ?

### 6.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Ułóż wzory: tlenek magnezu, tlenek glinu, tlenek siarki(IV), tlenek azotu(V).
2. Nazwij: Fe₂O₃, CuO, N₂O₅, P₂O₅.
3. Podaj charakter: Na₂O, SO₃, CO, CO₂.
4. Dokończ: Na₂O + H₂O → … ; SO₃ + H₂O → …
5. Zbilansuj: Al + O₂ → Al₂O₃.
6. Zapisz wzory tlenków: sodu, wapnia, potasu, baru.
7. Podaj nazwy: SO₂, SO₃, CO, CO₂, NO, NO₂.

**B. Trening**

8. Napisz równania: a) spalanie siarki, b) CaO + HCl, c) CO₂ + NaOH.
9. Dlaczego CO nazywamy tlenkiem obojętnym, a CO₂ kwasowym?
10. Popraw: FeO₃, „tlenek miedzi", Ca₂O₂.
11. Zapisz reakcje: SO₂ + H₂O, N₂O₅ + H₂O, K₂O + H₂O.
12. Uzupełnij: CaO + H₂SO₄ → ? ; SO₃ + 2NaOH → ?

**C. Ambitne**

13. Al₂O₃ reaguje z HCl i z NaOH. Co to mówi o charakterze?
14. P₂O₅ vs P₄O₁₀ — kiedy który zapis?
15. Zaprojektuj doświadczenie: wpływ wody na CaO (format DOŚWIADCZENIE).
16. Wyjaśnij, dlaczego MgO praktycznie nie reaguje z wodą, a CaO — tak.
17. Określ charakter Mn₂O₇ i CrO₃. Uzasadnij.

**D. Zaawansowane**

18. Dlaczego tlenki metali przejściowych o wysokiej wartościowości mogą być kwasowe?
19. Zapisz równanie reakcji Al₂O₃ z NaOH w roztworze (z utworzeniem jonu kompleksowego).
20. Porównaj charakter tlenków: Na₂O, MgO, Al₂O₃, SiO₂, P₂O₅, SO₃, Cl₂O₇ — jak zmienia się w okresie?

### 6.4. Interleaving (przeplatany)

1. Ile neutronów ma ²³Na? (z L001)
2. Ułóż wzór tlenku glinu. (z L002)
3. Napisz wzór wodorotlenku wapnia. (z L003)
4. Zbilansuj: Fe + O₂ → Fe₂O₃. (z L001 + L002)
5. Jaki charakter ma SO₂? (z L002)
6. Ile elektronów ma jon Al³⁺? (z L001)
7. CO₂ + 2NaOH → ? (z L002)
8. Jaki typ wiązania w MgO? (z L001)

### 6.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to tlenek? |
| ZASTOSUJ | Ułóż wzór tlenku wapnia. |
| WYJAŚNIJ | Dlaczego SO₃ + H₂O → H₂SO₄, a nie H₂SO₃? |
| ODKRYJ | Jaki charakter ma Al₂O₃? |
| POŁĄCZ | Połącz tlenek z kwasem/wodorotlenkiem. |
| ZAKWESTIONUJ | Czy każdy tlenek metalu jest zasadowy? |

---

## 7. ODPOWIEDZI

### Mini-check

1. Związek tlenu z innym pierwiastkiem.
2. Metal → zasadowy; niemetal → kwasowy.
3. Wodorotlenek.
4. Kwas.
5. Tlenek, który nie reaguje z wodą (CO, NO, N₂O).

### Ćwiczenia A

1. MgO, Al₂O₃, SO₂, N₂O₅
2. tlenek żelaza(III), tlenek miedzi(II), tlenek azotu(V), tlenek fosforu(V)
3. zasadowy, kwasowy, obojętny, kwasowy
4. 2NaOH; H₂SO₄
5. 4Al + 3O₂ → 2Al₂O₃
6. Na₂O, CaO, K₂O, BaO
7. tlenek siarki(IV), tlenek siarki(VI), tlenek węgla(II), tlenek węgla(IV), tlenek azotu(II), tlenek azotu(IV)

### Ćwiczenia B

8. a) S + O₂ → SO₂; b) CaO + 2HCl → CaCl₂ + H₂O; c) CO₂ + 2NaOH → Na₂CO₃ + H₂O
9. CO nie daje kwasu z wodą; CO₂ daje H₂CO₃.
10. Fe₂O₃; tlenek miedzi(II); CaO
11. SO₂ + H₂O → H₂SO₃; N₂O₅ + H₂O → 2HNO₃; K₂O + H₂O → 2KOH
12. CaO + H₂SO₄ → CaSO₄ + H₂O; SO₃ + 2NaOH → Na₂SO₄ + H₂O

### Ćwiczenia C

13. Amfoteryczny — reaguje z kwasami i zasadami.
14. Szkolny: P₂O₅; cząsteczkowy: P₄O₁₀.
15. Format DOŚWIADCZENIE (jak wyżej).
16. MgO ma silniejsze wiązanie jonowe i niższą reaktywność z wodą; CaO reaguje gwałtownie, bo Ca(OH)₂ jest słabo rozpuszczalny, co „ciągnie" reakcję.
17. Mn₂O₇ i CrO₃ — kwasowe (metale przejściowe na wysokim stopniu utlenienia).

### Ćwiczenia D

18. Wysoki stopień utlenienia metalu przejściowego → silna polaryzacja wiązania M–O → tlenek zachowuje się jak kwasowy (tworzy anion tlenowy, np. MnO₄⁻).
19. Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄]
20. Na₂O (zasadowy) → MgO (zasadowy) → Al₂O₃ (amfoteryczny) → SiO₂ (kwasowy, słaby) → P₂O₅ (kwasowy) → SO₃ (kwasowy) → Cl₂O₇ (kwasowy, silny).

---

## 8. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to tlenek? | Związek tlenu z innym pierwiastkiem |
| Na₂O + H₂O → ? | 2NaOH |
| K₂O + H₂O → ? | 2KOH |
| CaO + H₂O → ? | Ca(OH)₂ |
| SO₃ + H₂O → ? | H₂SO₄ |
| SO₂ + H₂O → ? | H₂SO₃ |
| CO₂ + H₂O → ? | H₂CO₃ (słaby) |
| N₂O₅ + H₂O → ? | 2HNO₃ |
| Charakter Na₂O | zasadowy |
| Charakter SO₂ | kwasowy |
| Charakter CO | obojętny |
| Charakter Al₂O₃ | amfoteryczny |
| Fe₂O₃ — nazwa | tlenek żelaza(III) |
| Cu₂O — nazwa | tlenek miedzi(I) |
| Dlaczego nie FeO₃? | W–K–S–K: 2·III = 3·II |
| P₂O₅ a P₄O₁₀ | szkolny zapis vs cząsteczka |
| Tlenek zasadowy + kwas → | sól + woda |
| Tlenek kwasowy + zasada → | sól + woda |
| Tlenek zasadowy + woda → | wodorotlenek |
| Tlenek kwasowy + woda → | kwas |
| Tlenki obojętne — przykłady | CO, NO, N₂O |
| Tlenki amfoteryczne — przykłady | Al₂O₃, ZnO, BeO |

---

## 9. TEST KOŃCOWY (L002)

1. Wzory: tlenek wapnia, tlenek żelaza(III), tlenek siarki(VI).
2. Nazwy: Al₂O₃, N₂O₅, CuO, SO₂.
3. Charakter: MgO, CO₂, NO, Al₂O₃.
4. Równania: CaO + H₂O; SO₃ + H₂O; CuO + H₂SO₄.
5. Popraw błędy: FeO₃; „tlenek żelaza"; Ca₂O₂.
6. Zbilansuj: P + O₂ → P₂O₅.
7. (extra) Co oznacza amfoteryczność Al₂O₃?
8. (extra) Dlaczego Mn₂O₇ jest kwasowy, mimo że to tlenek metalu?

---

## 10. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Wzór tlenku | W–K–S–K, skracanie |
| Nazwa | systematyczna + Fe/Cu z cyfrą |
| Charakter | zasadowy / kwasowy / obojętny / amfoteryczny |
| + woda | tlenek metalu → wodorotlenek; niemetalu → kwas |
| + kwas / zasada | sól + woda |
| Amfoteryczność | Al₂O₃, ZnO — reakcja z kwasem i zasadą |
| Doświadczenie | obserwacja ≠ wniosek |

---

## 11. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 20 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 15 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 12. MAPA MYŚLI

```
TLENEK
├── WZÓR (W–K–S–K, O najczęściej II)
├── NAZWA (Fe/Cu/Sn/Pb/Mn/Cr → cyfra rzymska)
├── CHARAKTER
│   ├── zasadowy (metal) → +H₂O → wodorotlenek
│   ├── kwasowy (niemetal) → +H₂O → kwas
│   ├── obojętny (CO, NO, N₂O)
│   └── amfoteryczny (Al₂O₃, ZnO) — rozszerzenie
├── OTRZYMYWANIE (spalanie, rozkład, utlenianie niższych tlenków)
└── REAKCJE
    ├── +H₂O → wodorotlenek / kwas
    ├── +kwas → sól + woda
    └── +zasada → sól + woda
```

---

## 13. CO DALEJ?

**L003 — Wodorotlenki:** wzory, otrzymywanie z tlenków, właściwości, zobojętnianie.

Most: każdy tlenek zasadowy z tej lekcji „przechodzi" w wodorotlenek po reakcji z wodą.

**Most do L004 (Kwasy):** każdy tlenek kwasowy z tej lekcji „przechodzi" w kwas po reakcji z wodą.

---

## 14. SŁOWNIK (uzupełnienie L001)

| Pojęcie | Definicja |
|---------|-----------|
| Tlenek | Związek tlenu z innym pierwiastkiem |
| Tlenek zasadowy | Tlenek metalu tworzący z wodą wodorotlenek (zasadę); reaguje z kwasami |
| Tlenek kwasowy | Tlenek niemetalu tworzący z wodą kwas; reaguje z zasadami |
| Tlenek obojętny | Nie tworzy kwasu ani zasady z wodą (w warunkach szkolnych) |
| Tlenek amfoteryczny | Reaguje zarówno z kwasami, jak i z zasadami |
| Woda wapienna | Roztwór Ca(OH)₂ — służy do wykrywania CO₂ |
| Wapno palone | CaO |
| Wapno gaszone | Ca(OH)₂ |

---

## 15. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: biały osad.  
Wniosek: powstaje nierozpuszczalny węglan wapnia.  
Nie: „Obserwacja: powstał CaCO₃".

---

## 16. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 5 (Klinika 2.0).

---

## 17. DODATEK E — WARSTWA EXTRA

### E.1. Amfoteryczność — co to znaczy „i z kwasem, i z zasadą"?

Tlenek amfoteryczny reaguje zarówno z kwasami (jak tlenek zasadowy), jak i z zasadami (jak tlenek kwasowy).

Przykłady:
- Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O (z kwasem)
- Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (z zasadą, w stopie)
- Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄] (z zasadą, w roztworze)
- ZnO + 2HCl → ZnCl₂ + H₂O
- ZnO + 2NaOH → Na₂ZnO₂ + H₂O

Amfoteryczność to cecha pierwiastków na granicy metali i niemetali (Al, Zn, Be, Pb, Sn).

### E.2. P₄O₁₀ vs P₂O₅ — dlaczego dwie wersje?

- **P₂O₅** — wzór empiryczny (najprostszy stosunek P : O = 2 : 5).
- **P₄O₁₀** — wzór rzeczywistej cząsteczki (tetratlenek dekatlenek difosforu).

W szkole stosujemy P₂O₅, bo:
- pokazuje wartościowość P(V) i O(II),
- jest wygodniejszy do obliczeń stechiometrycznych,
- jest zgodny z konwencją podręcznikową.

### E.3. Tlenki w przyrodzie

- **CO₂** — w atmosferze (0,04%), w obiegu węgla; produkt oddychania i spalania.
- **H₂O** — woda; w atmosferze jako para wodna.
- **SO₂, SO₃, NO, NO₂** — produkty spalania paliw kopalnych; przyczyniają się do kwaśnych deszczy.
- **N₂O** — gaz cieplarniany, „gaz rozweselający" (podtlenek azotu).
- **SiO₂** — piasek, kwarc, szkło; tlenek kwasowy (reaguje z zasadami).
- **Al₂O₃** — korund, szafir, rubin; amfoteryczny.
- **Fe₂O₃** — rdza, hematyt (ruda żelaza).
- **Fe₃O₄** — magnetyt (ruda żelaza).
- **CaO** — wapno palone (budownictwo).
- **TiO₂** — biały pigment (farba, kremy z filtrem UV).
- **ZnO** — biały pigment, składnik maści.

### E.4. Tlenki a środowisko — kwaśne deszcze

SO₂ i NO₂ w atmosferze reagują z wodą i tlenem, tworząc kwasy:
- SO₂ + H₂O → H₂SO₃ (kwas siarkowy(IV))
- 2SO₂ + O₂ → 2SO₃
- SO₃ + H₂O → H₂SO₄ (kwas siarkowy(VI))
- 3NO₂ + H₂O → 2HNO₃ + NO (kwas azotowy(V))

Skutki: zakwaszenie gleb i wód, uszkodzenie lasów, korozja budynków.

### E.5. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L002 na ≥ 80%),
- gdy chcesz zrozumieć redoks w kontekście tlenków,
- gdy interesuje cię stechiometria reakcji spalania.

L013 zawiera: stopnie utlenienia, redoks, bilans elektronowy, stechiometrię z wydajnością.

**Ale nie musisz.** L013 jest zawsze dostępna.

---

## 18. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Tlenek | Związek tlenu z innym pierwiastkiem. |
| Tlenek zasadowy | Tlenek metalu reagujący z kwasem, tworzący z wodą wodorotlenek. |
| Tlenek kwasowy | Tlenek niemetalu reagujący z zasadą, tworzący z wodą kwas. |
| Tlenek obojętny | Tlenek niereagujący z wodą, kwasami ani zasadami w typowych warunkach. |
| Tlenek amfoteryczny | Tlenek reagujący zarówno z kwasami, jak i z zasadami. |
| Woda wapienna | Roztwór wodorotlenku wapnia Ca(OH)₂ używany do wykrywania CO₂. |

---

## 19. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 20. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
TLENKI
Wzór: pierwiastek + O (W–K–S–K)
O najczęściej II.

CHARAKTER:
- metal → zasadowy (Na₂O, CaO, MgO)
- niemetal → kwasowy (SO₂, SO₃, CO₂, P₂O₅)
- obojętny → CO, NO, N₂O
- amfoteryczny → Al₂O₃, ZnO (rozszerzenie)

REAKCJE:
Tlenek zasadowy + H₂O → wodorotlenek
  Na₂O + H₂O → 2NaOH
  CaO + H₂O → Ca(OH)₂

Tlenek kwasowy + H₂O → kwas
  SO₃ + H₂O → H₂SO₄
  CO₂ + H₂O → H₂CO₃

Tlenek zasadowy + kwas → sól + woda
  CaO + 2HCl → CaCl₂ + H₂O

Tlenek kwasowy + zasada → sól + woda
  CO₂ + 2NaOH → Na₂CO₃ + H₂O

NAZEWNICTWO:
Fe, Cu, Sn, Pb, Mn, Cr → cyfra rzymska
  Fe₂O₃ = tlenek żelaza(III)
  CuO = tlenek miedzi(II)

PUŁAPKI:
- FeO₃ → Fe₂O₃
- Ca₂O₂ → CaO
- SO₃ + H₂O → H₂SO₄ (nie H₂SO₃)
- P₂O₅ (szkolny) vs P₄O₁₀ (cząsteczka)
```

---

## 21. STATUS LEKCJI

- Wersja 2.0 (2026-09-12) — pełny MASTER, rozbudowany względem v1.0.
- Zachowano całą treść v1.0.
- Dodano: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, KLINIKA 2.0, DOŚWIADCZENIA (3), ĆWICZENIA A/B/C/D, Interleaving, Drabinka, Fiszki 22, System powtórek, Definicje, 10 zasad, Szybka ściąga, DODATKI C/D/E, STATUS.
- Poprawki merytoryczne: dodano wyjątki (Mn₂O₇, CrO₃ kwasowe; MgO trudno reaguje z wodą), rozszerzono tabelę nazewnictwa (Cu₂O, SnO, PbO, MnO₂, Cr₂O₃), dodano E.4 (kwaśne deszcze).
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L002 MASTER v2.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L002)

Tlenki — wzór, charakter, woda.

### Ściąga 80/20
- Tlenek = pierwiastek + tlen (Na₂O, CO₂, SO₂, CaO, Al₂O₃).
- Metal + O₂ → tlenek metalu; niemetal + O₂ → tlenek niemetalu.
- Charakter: zasadowy (wiele tlenków metali) reaguje z kwasem / często z wodą → wodorotlenek.
- Kwasowy (wiele tlenków niemetali) + woda → kwas; + zasada → sól.
- Amfoteryczne (Al₂O₃, ZnO) — extra: reagują i z kwasem, i z zasadą.
- Wyjątki szkolne (Mn₂O₇, CrO₃ — tlenki metali o charakterze kwasowym) tylko jeśli są w lekcji.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Każdy tlenek metalu + woda = wodorotlenek | nie każdy dobrze reaguje / jest rozpuszczalny |
| CO₂ zasadowy, bo „tlenek” | CO₂ kwasowy |
| Al₂O₃ tylko zasadowy | amfoteryczny (amb) |

### 6 zadań extra
1. Wzór tlenku wapnia i równanie CaO + H₂O.  
2. SO₂ + H₂O → ?  
3. Charakter CO₂ vs Na₂O.  
4. Uzgodnij spalanie Mg.  
5. Al₂O₃ — dlaczego nie wrzucać go tylko do „zasadowych”?  
6. Most L003: produkt CaO + H₂O to wejście w wodorotlenki.

Szkic: 1 Ca(OH)₂. 2 H₂SO₃. 3 kwasowy / zasadowy. 4 2 Mg + O₂ → 2 MgO.

### Status
2026-09-12 · MASTER v2.0 zachowany · plik roboczy.



---

## UZUPEŁNIENIE wizualne L002 (audyt plus.md — doklejone)

### Diagram charakteru tlenków

```
           PIERWIASTEK + TLEN
                    │
        ┌───────────┴───────────┐
      METAL                  NIEMETAL
    ┌───┴───┐
ZASADOWY  AMFOTERYCZNY     często KWASOWY
(Na₂O, CaO) (Al₂O₃, ZnO)    (CO₂, SO₂, SO₃)
```

Nie każdy tlenek metalu + woda → wodorotlenek (MgO wolno; Fe₂O₃ praktycznie nie tą drogą w szkole).

### Test praktyczny charakteru

| Test | Wniosek |
|------|---------|
| Tlenek + H₂O → odczyn zasadowy | tlenek zasadowy |
| Tlenek + H₂O → odczyn kwasowy | tlenek kwasowy |
| Tlenek + H₂O → brak zmiany | obojętny lub słabo reagujący |
| Tlenek + kwas → sól + woda | zasadowy lub amfoteryczny |
| Tlenek + zasada → sól + woda | kwasowy lub amfoteryczny |

### Tlenki w zastosowaniach

| Tlenek | Zastosowanie (hasło) |
|--------|----------------------|
| CaO | wapno palone, cement |
| SiO₂ | szkło |
| Al₂O₃ | aluminium, ścierniwo |
| TiO₂ | farba, filtry UV |
| ZnO | guma, maści |
| Fe₂O₃ | ruda, pigment |
| CO₂ | napoje, suchy lód |

### P₂O₅ vs P₄O₁₀

```
P₂O₅  — wzór empiryczny (stosunek 2 : 5)
P₄O₁₀ — wzór cząsteczkowy rzeczywistej cząsteczki
```

### Dlaczego tlenek zasadowy + woda?

Jon O²⁻ jest silną zasadą: O²⁻ + H₂O → 2OH⁻. Kation metalu + OH⁻ → wodorotlenek — **gdy** tlenek w ogóle reaguje z wodą (Na₂O, K₂O, CaO, BaO).



---

## DOPRECYZOWANIA I CIEKAWOSTKI L002 (przegląd mer. — doklejone)

**Tlenek (precyzyjniej):** związek, w którym tlen jest zwykle na −II. Wyjątki extra: nadtlenki, ponadtlenki, **OF₂** (fluorek tlenu).  
**Obojętne szkolnie** (CO, NO, N₂O): wobec **wody i rozcieńczonych** kwasów/zasad. CO + NaOH pod ciśnieniem → mrówczan (extra). NO — rodnik, utlenia się do NO₂. N₂O bywa utleniaczem.  
**Amfoteryczność:** ten sam stopień metalu; zapis w wodzie vs w stopie — patrz FIX przy [Al(OH)₄]⁻.  
**SiO₂:** tlenek kwasowy, z wodą praktycznie nie reaguje; reaguje z mocnymi zasadami (szkło).

### Ciekawostki
- BaSO₄ w RTG: Ba²⁺ toksyczny, ale sól praktycznie się nie wchłania.
- Suchy lód: CO₂(s), sublimacja ok. −78,5 °C.
- Kwaśne deszcze: SO₂/NOₓ → kwasy, pH deszczu < ~5,6.
- TiO₂ — pigment i filtry UV; Al₂O₃ + domieszki = rubin/szafir.


## 19. SZYBKA ZASADA (v2.1)

| Sytuacja | Charakter |
|----------|-----------|
| Tlenek metalu grup 1–2 | zwykle zasadowy |
| Tlenek niemetalu | zwykle kwasowy |
| Al, Zn, Be, Pb, Sn | amfoteryczny |
| CO, NO, N₂O | obojętny (szkolnie) |
| Mn₂O₇, CrO₃ | kwasowy |

Obserwacja ≠ wniosek. OF₂ to fluorek tlenu. P₂O₅ szkolnie / P₄O₁₀ cząsteczka. Al₂O₃ + NaOH w roztworze → [Al(OH)₄]⁻.


## HTML L002 + korekta recenzji

Plik: `CHEMIA_L002_TLENKI.html`

- TiO₂ na E8: pigment/UV, **nie** wzorcowy amfoteryczny (szkolnie Al₂O₃, ZnO).
- Zapis w roztworze: Na[Al(OH)₄] / [Al(OH)₄]⁻; w stopie NaAlO₂.
- P₂O₅ = zapis szkolny (empiryczny), P₄O₁₀ = cząsteczka — nie „inna nazwa tego samego wzoru”.
- CO₂ + NaOH: niedobór zasady → Na₂CO₃; nadmiar CO₂ → NaHCO₃.
- Obserwacja wody wapiennej: mętnieje / biały osad — nie „szczek” (szczek = próba na H₂).
- MgO + H₂O wyróżnione: w szkole praktycznie nie.
<!-- ==================== END L002 ==================== -->

<!-- ==================== BEGIN L003 ==================== -->

# LEKCJA L003 — WODOROTLENKI

# CHEMIA: PODSTAWA PLUS

## L003 — Wodorotlenki

**Wzory · otrzymywanie · właściwości · zobojętnianie · rozpuszczalność · amfoteryczność**

**MASTER v2.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002 MASTER v2.0  
Poprzednia: L002 (tlenki) · Następna: L004 (kwasy)

**Kolejność:** grupa OH (z L001) → wzór wodorotlenku → otrzymywanie z tlenku → odczyn → zobojętnianie → rozpuszczalność → amfoteryczność

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L003 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

**Zmiany w v2.0 (względem v1.0):**
· dodano pełny schemat MASTER (JAK PRACOWAĆ, FILOZOFIA, POZIOMY, CEL, ŚCIĄGA rozbudowana, KLINIKA 2.0, DOŚWIADCZENIE, ĆWICZENIA A/B/C/D, FISZKI 20+, TEST, CHECKLISTA, MAPA MYŚLI, CO DALEJ, SŁOWNIK, DODATKI C/D/E)
· rozbudowano ściągę (rozpuszczalność, amfoteryczność, więcej przykładów)
· dodano Klinikę 2.0 (7 kroków)
· dodano Drabinkę trudności
· dodano Interleaving
· dodano DODATEK C (format doświadczenia), D (format kliniki), E (warstwa extra — amfoteryczność, hydraty, zasady mocne/słabe, most do L004)
· rozbudowano fiszki (7 → 22)
· rozbudowano ćwiczenia (9 → 20)
· dodano System powtórek
· dodano Definicje jednym zdaniem
· dodano 10 zasad supernauki
· dodano Szybką ściągę na jednej stronie
· dodano STATUS
· zachowano całą treść v1.0 bez skracania

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie zatrzymaj się: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj wzory: „Ca-OH-dwa".
5. **Rysuj.** Nawias, grupa OH, krzyżowanie.
6. **Łap moment „aha!".**

**Zasada 80/20:** wzór z nawiasem OH · otrzymywanie z tlenku metalu + wody · zobojętnianie.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. OH — klocek o ładunku −1  
2. Nawias, gdy OH powtarza się > 1  
3. Zobojętnianie: kwas + zasada → sól + woda  
4. Rozpuszczalne wodorotlenki = zasady  

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- W–K–S–K
- Grupa OH — klocek o wartościowości I / ładunku −1
- Metale grup 1–2, Al, Fe, Cu

Z L002:
- Tlenki zasadowe (Na₂O, K₂O, CaO, BaO) — reagują z wodą → wodorotlenki
- Tlenki amfoteryczne (Al₂O₃, ZnO) — reagują z kwasami i zasadami

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- ułożyć wzór wodorotlenku (OH jako „klocek", nawias gdy trzeba),
- nazwać wodorotlenek (w tym Fe(OH)₂ / Fe(OH)₃),
- napisać otrzymywanie z tlenku metalu + wody (most z L002),
- napisać reakcję zobojętniania (wodorotlenek + kwas → sól + woda),
- rozróżnić odczyn zasadowy (papierek, wskaźnik),
- udokumentować doświadczenie (obserwacja ≠ wniosek),
- (ambitny) rozróżnić wodorotlenki rozpuszczalne (zasady) od nierozpuszczalnych,
- (zaawansowany) znać amfoteryczność wodorotlenków (Al(OH)₃, Zn(OH)₂) i most do L004.

---

## 2. ŚCIĄGA

### Definicja

**Wodorotlenek** — związek zawierający grupę wodorotlenkową OH (jon OH⁻ w związkach jonowych).  
W szkole: wodorotlenki metali; odczyn roztworu zwykle **zasadowy**.

**Grupa wodorotlenkowa OH:**
- wartościowość I,
- ładunek −1 (OH⁻),
- traktowana jako **jeden klocek** przy układaniu wzorów.

### Wzory — reguła z L001

Traktuj **OH** jako jeden klocek (ładunek −1 / wartościowość I).

| Jon metalu | Wodorotlenek | Nazwa |
|------------|--------------|--------|
| Na⁺ | NaOH | wodorotlenek sodu |
| K⁺ | KOH | wodorotlenek potasu |
| Li⁺ | LiOH | wodorotlenek litu |
| Ca²⁺ | Ca(OH)₂ | wodorotlenek wapnia |
| Mg²⁺ | Mg(OH)₂ | wodorotlenek magnezu |
| Ba²⁺ | Ba(OH)₂ | wodorotlenek baru |
| Al³⁺ | Al(OH)₃ | wodorotlenek glinu |
| Fe²⁺ | Fe(OH)₂ | wodorotlenek żelaza(II) |
| Fe³⁺ | Fe(OH)₃ | wodorotlenek żelaza(III) |
| Cu²⁺ | Cu(OH)₂ | wodorotlenek miedzi(II) |
| Zn²⁺ | Zn(OH)₂ | wodorotlenek cynku |
| Pb²⁺ | Pb(OH)₂ | wodorotlenek ołowiu(II) |
| Sn²⁺ | Sn(OH)₂ | wodorotlenek cyny(II) |
| Ag⁺ | AgOH | wodorotlenek srebra(I) |
| NH₄⁺ | NH₄OH | wodorotlenek amonu (roztwór: woda amoniakalna) |

**Nawias:** Ca(OH)₂ — indeks 2 dotyczy **całej** grupy OH.  
**Błąd klasyczny:** CaOH₂ (sugeruje „O i dwa H osobno", nie dwie grupy OH).

**Uwaga o Fe(OH)₂ vs Fe(OH)₃:**  
- Fe(OH)₂ — wodorotlenek żelaza(II); Fe na +II.  
- Fe(OH)₃ — wodorotlenek żelaza(III); Fe na +III.  
Kolor osadu: Fe(OH)₂ — zielonkawo-biały (utlenia się na powietrzu do brunatnego); Fe(OH)₃ — brunatny/rdzawy.

### Otrzymywanie (most z L002)

**Metoda 1: Tlenek metalu + woda → wodorotlenek**  
(dla tlenków zasadowych, które reagują z wodą):

Na₂O + H₂O → 2NaOH  
K₂O + H₂O → 2KOH  
CaO + H₂O → Ca(OH)₂  
BaO + H₂O → Ba(OH)₂  

**Uwaga:** MgO reaguje z wodą bardzo słabo — praktycznie nie otrzymujemy w ten sposób Mg(OH)₂. Mg(OH)₂ otrzymujemy przez strącanie.

**Metoda 2: Metal + woda → wodorotlenek + wodór**  
(dla metali aktywnych — grupy 1 i 2, oraz niektóre inne):

2Na + 2H₂O → 2NaOH + H₂↑  
2K + 2H₂O → 2KOH + H₂↑  
Ca + 2H₂O → Ca(OH)₂ + H₂↑  

**BHP:** reakcja sodu i potasu z wodą jest gwałtowna; nie wykonujemy samodzielnie.

**Metoda 3: Sól + zasada → wodorotlenek nierozpuszczalny + sól**  
(strącanie):

FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl  
FeCl₂ + 2NaOH → Fe(OH)₂↓ + 2NaCl  
CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄  
AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl  
MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl  

**↓** = osad (trudno rozpuszczalna substancja stała).

### Właściwości

- Roztwory rozpuszczalnych wodorotlenków: **odczyn zasadowy** (pH > 7).
- Wskaźniki:
  - fenoloftaleina → malinowa,
  - oranż metylowy → żółta,
  - uniwersalny papierek → niebieski / zielony,
  - papierek lakmusowy → niebieski.
- Reagują z kwasami → **zobojętnianie**.
- Wodorotlenki nierozpuszczalne (Fe(OH)₃, Cu(OH)₂, Al(OH)₃) — nie dają odczynu zasadowego w wodzie (nie rozpuszczają się, więc nie ma jonów OH⁻ w roztworze).
- Reagują z tlenkami kwasowymi → sól + woda (rozszerzenie).

### Rozpuszczalność (uproszczenie szkolne)

| Dobrze rozpuszczalne (zasady) | Słabo / praktycznie nierozpuszczalne |
|-------------------------------|--------------------------------------|
| NaOH, KOH, LiOH | Mg(OH)₂, Al(OH)₃, Fe(OH)₂, Fe(OH)₃, Cu(OH)₂, Zn(OH)₂ |
| Ba(OH)₂ (dobrze) | większość innych |
| Ca(OH)₂ (umiarkowanie — woda wapienna) | Pb(OH)₂, Sn(OH)₂ |
| NH₄OH (roztwór) | AgOH (rozpada się na Ag₂O + H₂O) |

**Reguła szkolna:** Wodorotlenki metali alkalicznych (Li, Na, K, Rb, Cs) i Ba(OH)₂ są dobrze rozpuszczalne. Ca(OH)₂ — umiarkowanie. Reszta — praktycznie nierozpuszczalna.

### Zobojętnianie (klucz)

**Wodorotlenek + kwas → sól + woda**

NaOH + HCl → NaCl + H₂O  
KOH + HNO₃ → KNO₃ + H₂O  
Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O  
2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O  
Ba(OH)₂ + H₂SO₄ → BaSO₄↓ + 2H₂O  
Cu(OH)₂ + H₂SO₄ → CuSO₄ + 2H₂O  
Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O  
Fe(OH)₃ + 3HNO₃ → Fe(NO₃)₃ + 3H₂O  

**Kontrola:** liczba OH⁻ musi zrównoważyć H⁺ z kwasu; woda powstaje z H⁺ + OH⁻.

**Uwaga o solach trudno rozpuszczalnych:**  
Jeżeli sól jest trudno rozpuszczalna (np. BaSO₄), w równaniu zaznaczamy ją jako osad (↓).

### Amfoteryczność wodorotlenków (rozszerzenie)

Niektóre wodorotlenki (Al(OH)₃, Zn(OH)₂, Be(OH)₂, Pb(OH)₂, Sn(OH)₂) reagują **zarówno z kwasami, jak i z zasadami**:

Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O (z kwasem)  
Al(OH)₃ + NaOH → Na[Al(OH)₄] (z zasadą, w roztworze)  
Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (z zasadą, w stopie)  
Zn(OH)₂ + 2HCl → ZnCl₂ + 2H₂O  
Zn(OH)₂ + 2NaOH → Na₂ZnO₂ + 2H₂O  

### Nazewnictwo zasad

W szkole często: **zasada** = rozpuszczalny wodorotlenek (NaOH, KOH, Ca(OH)₂, Ba(OH)₂).  
Wszystkie zasady są wodorotlenkami; nie każdy wodorotlenek jest silną / rozpuszczalną zasadą.

**Zasady mocne (rozpuszczalne, dysocjują całkowicie):**
- NaOH (zasada sodowa)
- KOH (zasada potasowa)
- LiOH
- Ba(OH)₂
- Ca(OH)₂ (umiarkowanie)

**Zasady słabe:**
- NH₄OH (woda amoniakalna)
- Mg(OH)₂ (słabo rozpuszczalny)
- Fe(OH)₃, Cu(OH)₂, Al(OH)₃ (praktycznie nierozpuszczalne)

### Dysocjacja zasad (rozszerzenie)

Wodorotlenki rozpuszczalne dysocjują w wodzie na kation metalu i anion OH⁻:

NaOH → Na⁺ + OH⁻  
KOH → K⁺ + OH⁻  
Ca(OH)₂ → Ca²⁺ + 2OH⁻  
Ba(OH)₂ → Ba²⁺ + 2OH⁻  

To dzięki jonowi OH⁻ roztwór ma odczyn zasadowy.

---

## 3. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Odczyn wodorotlenku sodu

**Problem:** Jaki odczyn ma roztwór wodorotlenku sodu?  
**Hipoteza:** Zasadowy — papierek niebieski, fenoloftaleina malinowa.  
**Sprzęt:** NaOH (rozcieńczony), papierek uniwersalny, fenoloftaleina, probówka.  
**Obserwacja:** papierek uniwersalny niebieski / zielony; fenoloftaleina malinowa.  
**Wniosek:** Roztwór NaOH ma odczyn zasadowy.  
**Równanie (dysocjacja):** NaOH → Na⁺ + OH⁻  
**BHP:** NaOH żrący — rękawice, okulary; nie pipetować ustami.

### Doświadczenie 2: Strącanie wodorotlenku żelaza(III)

**Problem:** Czy z soli żelaza(III) i zasady powstaje wodorotlenek?  
**Hipoteza:** Powstanie brunatny osad Fe(OH)₃.  
**Sprzęt:** FeCl₃, NaOH, probówka.  
**Obserwacja:** brunatny / rdzawy osad.  
**Wniosek:** Powstaje nierozpuszczalny wodorotlenek żelaza(III).  
**Równanie:** FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl  
**BHP:** NaOH żrący; okulary.

### Doświadczenie 3: Zobojętnianie

**Problem:** Co się dzieje, gdy do zasady dodajemy kwas?  
**Hipoteza:** Powstaje sól i woda; odczyn zmienia się z zasadowego na obojętny.  
**Sprzęt:** NaOH, HCl, fenoloftaleina, biureta.  
**Obserwacja:** malinowa barwa fenoloftaleiny zanika po dodaniu kwasu.  
**Wniosek:** NaOH + HCl → NaCl + H₂O.  
**Równanie:** NaOH + HCl → NaCl + H₂O  
**BHP:** okulary; pipetować gruszką.

**Obserwacja ≠ wniosek:**
- Obserwacja: barwa zniknęła.
- Wniosek: zobojętnienie zasady kwasem.

---

## 4. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd | Poprawnie | Reguła |
|------|-----------|--------|
| CaOH₂ | Ca(OH)₂ | nawias na całą grupę OH |
| Fe(OH)₂ bez (II) w nazwie gdy trzeba | wodorotlenek żelaza(II) | Fe ma II i III |
| NaOH + HCl → NaCl (bez wody) | NaCl + H₂O | zobojętnianie zawsze daje wodę |
| CaO + H₂O → CaOH | Ca(OH)₂ | bilans i nawias |
| „wszystkie wodorotlenki silnie zasadowe" | tylko rozpuszczalne dają silny odczyn w roztworze | rozpuszczalność |
| „Fe(OH)₃ rozpuszcza się w wodzie" | nierozpuszczalny | rozpuszczalność |
| „Al(OH)₃ tylko zasadowy" | amfoteryczny | reaguje z kwasem i zasadą |
| „MgO + H₂O → Mg(OH)₂ łatwo" | praktycznie nie zachodzi | MgO trudno reaguje z wodą |

### Klinika 2.0 — przykład 1

**Błąd:** CaOH₂

- **Znajdź:** Brak nawiasu.
- **Popraw:** Ca(OH)₂.
- **Reguła:** Nawias obejmuje całą grupę OH.
- **Dlaczego:** OH jest jednym klockiem (ładunek −1); przy dwóch grupach musimy je „zapakować" w nawias.
- **Zadanie podobne:** Zapisz wzór wodorotlenku baru.
- **Zadanie z pułapką:** Zapisz wzór wodorotlenku sodu. (Odp.: NaOH — bez nawiasu, bo jedna grupa OH.)

### Klinika 2.0 — przykład 2

**Błąd:** „Fe(OH)₃ rozpuszcza się w wodzie i daje odczyn zasadowy."

- **Znajdź:** Błędna rozpuszczalność.
- **Popraw:** Fe(OH)₃ jest praktycznie nierozpuszczalny; nie daje odczynu zasadowego w wodzie.
- **Reguła:** Rozpuszczalne wodorotlenki metali alkalicznych i Ba(OH)₂; reszta — nierozpuszczalne.
- **Dlaczego:** Jeśli wodorotlenek się nie rozpuszcza, nie ma jonów OH⁻ w roztworze → brak odczynu zasadowego.
- **Zadanie podobne:** Które wodorotlenki dają odczyn zasadowy? (Odp.: NaOH, KOH, LiOH, Ba(OH)₂, Ca(OH)₂.)
- **Zadanie z pułapką:** Czy Cu(OH)₂ daje odczyn zasadowy? (Odp.: Nie — nierozpuszczalny.)

### Klinika 2.0 — przykład 3

**Błąd:** „NaOH + HCl → NaCl" (bez wody).

- **Znajdź:** Brak produktu wody.
- **Popraw:** NaOH + HCl → NaCl + H₂O.
- **Reguła:** Zobojętnianie: kwas + zasada → sól + woda.
- **Dlaczego:** H⁺ z kwasu i OH⁻ z zasady łączą się w wodę.
- **Zadanie podobne:** Ca(OH)₂ + 2HNO₃ → ? (Odp.: Ca(NO₃)₂ + 2H₂O.)
- **Zadanie z pułapką:** KOH + H₂SO₄ → ? (Odp.: 2KOH + H₂SO₄ → K₂SO₄ + 2H₂O.)

### Klinika 2.0 — przykład 4

**Błąd:** „Al(OH)₃ jest zasadowy."

- **Znajdź:** Uproszczenie.
- **Popraw:** Al(OH)₃ jest amfoteryczny — reaguje z kwasami i zasadami.
- **Reguła:** Wodorotlenki pierwiastków na granicy metali/niemetali są amfoteryczne.
- **Dlaczego:** Al leży na granicy; jego wodorotlenek może oddawać i przyjmować protony.
- **Zadanie podobne:** Określ charakter Zn(OH)₂. (Odp.: amfoteryczny.)
- **Zadanie z pułapką:** Czy Al(OH)₃ reaguje z NaOH? (Odp.: Tak.)

---

## 5. ĆWICZENIA

### 5.1. Mini-check (5 pytań)

1. Co to wodorotlenek?
2. Jaką wartościowość ma grupa OH?
3. Co powstaje z tlenku metalu + wody?
4. Co to zobojętnianie?
5. Które wodorotlenki są rozpuszczalne?

### 5.2. Ćwiczenie prowadzone

**Dane:** Ca(OH)₂ (wodorotlenek wapnia).

**Krok 1.** Ca²⁺ + 2 OH⁻ → Ca(OH)₂ (nawias, bo dwie grupy OH).
**Krok 2.** Nazwa: wodorotlenek wapnia.
**Krok 3.** Otrzymywanie: CaO + H₂O → Ca(OH)₂.
**Krok 4.** Zobojętnianie: Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O.

**Spróbuj sam:** Fe(OH)₃ — wzór, nazwa, otrzymywanie, zobojętnianie.

### 5.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Wzory: wodorotlenek potasu, wodorotlenek wapnia, wodorotlenek glinu, wodorotlenek żelaza(III).
2. Nazwy: NaOH, Mg(OH)₂, Fe(OH)₂, Cu(OH)₂.
3. Dokończ: CaO + H₂O → … ; NaOH + HCl → …
4. Popraw: CaOH₂ ; NaOH + H₂SO₄ → Na₂SO₄ (bez wody i bilansu).
5. Które wodorotlenki są rozpuszczalne?
6. Jakie wskaźniki potwierdzają odczyn zasadowy?

**B. Trening**

7. Napisz zobojętnianie: KOH + HNO₃ ; Ca(OH)₂ + H₂SO₄ ; Al(OH)₃ + 3HCl.
8. Skąd wziąć Ca(OH)₂, mając CaO? Równanie.
9. Dlaczego zapis Ca(OH)₂, a nie CaOH₂?
10. Zapisz otrzymywanie Mg(OH)₂ z MgCl₂ i NaOH.
11. Uzupełnij: FeCl₃ + 3NaOH → ? ; CuSO₄ + 2NaOH → ?

**C. Ambitne**

12. FeCl₃ + NaOH — równanie + obserwacja + wniosek (format DOŚWIADCZENIE).
13. Które wodorotlenki dają silnie zasadowy roztwór? Dlaczego nie Fe(OH)₃?
14. Wyjaśnij, dlaczego Al(OH)₃ reaguje zarówno z HCl, jak i z NaOH.
15. Zaprojektuj doświadczenie: odczyn roztworu KOH.

**D. Zaawansowane**

16. Zapisz dysocjację: NaOH, Ca(OH)₂, Ba(OH)₂.
17. Porównaj moc zasad: NaOH, NH₄OH, Mg(OH)₂.
18. Zapisz równanie Al(OH)₃ + NaOH → Na[Al(OH)₄].
19. Dlaczego AgOH nie istnieje jako trwały związek? (Rozpada się na Ag₂O + H₂O.)
20. Co to hydraty? Podaj przykład. (np. CuSO₄·5H₂O — siarczan(VI) miedzi(II) pentahydrat.)

### 5.4. Interleaving (przeplatany)

1. Jaki charakter ma Na₂O? (z L002)
2. Zapisz wzór tlenku glinu. (z L002)
3. Zapisz wzór wodorotlenku glinu. (z L003)
4. Zbilansuj: Al + O₂ → Al₂O₃. (z L001 + L002)
5. NaOH + HCl → ? (z L003)
6. Ile elektronów ma jon Al³⁺? (z L001)
7. SO₃ + H₂O → ? (z L002)
8. Fe(OH)₃ + 3HNO₃ → ? (z L003)

### 5.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to wodorotlenek? |
| ZASTOSUJ | Ułóż wzór wodorotlenku wapnia. |
| WYJAŚNIJ | Dlaczego Ca(OH)₂ ma nawias? |
| ODKRYJ | Które wodorotlenki dają odczyn zasadowy? |
| POŁĄCZ | Połącz tlenek metalu z wodorotlenkiem. |
| ZAKWESTIONUJ | Czy każdy wodorotlenek jest zasadą? |

---

## 6. ODPOWIEDZI

### Mini-check

1. Związek zawierający grupę OH.
2. I (jedna).
3. Wodorotlenek.
4. Reakcja kwasu z zasadą → sól + woda.
5. NaOH, KOH, LiOH, Ba(OH)₂, Ca(OH)₂ (umiarkowanie).

### Ćwiczenia A

1. KOH, Ca(OH)₂, Al(OH)₃, Fe(OH)₃
2. wodorotlenek sodu, magnezu, żelaza(II), miedzi(II)
3. Ca(OH)₂ ; NaCl + H₂O
4. Ca(OH)₂ ; 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O
5. NaOH, KOH, LiOH, Ba(OH)₂, Ca(OH)₂
6. fenoloftaleina, oranż metylowy, papierek uniwersalny, lakmus

### Ćwiczenia B

7. KNO₃ + H₂O ; CaSO₄ + 2H₂O ; AlCl₃ + 3H₂O
8. CaO + H₂O → Ca(OH)₂
9. Indeks 2 dotyczy całej grupy OH.
10. MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl
11. Fe(OH)₃↓ + 3NaCl ; Cu(OH)₂↓ + Na₂SO₄

### Ćwiczenia C

12. FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl ; osad brunatny.
13. NaOH, KOH (rozpuszczalne); Fe(OH)₃ nierozpuszczalny.
14. Al(OH)₃ amfoteryczny — reaguje z kwasami i zasadami.
15. Format DOŚWIADCZENIE.

### Ćwiczenia D

16. NaOH → Na⁺ + OH⁻; Ca(OH)₂ → Ca²⁺ + 2OH⁻; Ba(OH)₂ → Ba²⁺ + 2OH⁻
17. NaOH — mocna; NH₄OH — słaba; Mg(OH)₂ — słaba (słabo rozpuszczalny).
18. Al(OH)₃ + NaOH → Na[Al(OH)₄]
19. AgOH rozpada się na Ag₂O + H₂O (nietrwały).
20. Hydraty — związki zawierające cząsteczki wody w sieci krystalicznej, np. CuSO₄·5H₂O.

---

## 7. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to wodorotlenek? | Związek z grupą OH |
| Ca(OH)₂ — dlaczego nawias? | Indeks dotyczy całego OH |
| CaO + H₂O → ? | Ca(OH)₂ |
| Na₂O + H₂O → ? | 2NaOH |
| K₂O + H₂O → ? | 2KOH |
| NaOH + HCl → ? | NaCl + H₂O |
| Ca(OH)₂ + 2HCl → ? | CaCl₂ + 2H₂O |
| 2NaOH + H₂SO₄ → ? | Na₂SO₄ + 2H₂O |
| Al(OH)₃ + 3HCl → ? | AlCl₃ + 3H₂O |
| Odczyn roztworu NaOH | zasadowy |
| Fe(OH)₃ — nazwa | wodorotlenek żelaza(III) |
| Fe(OH)₂ — nazwa | wodorotlenek żelaza(II) |
| Cu(OH)₂ — nazwa | wodorotlenek miedzi(II) |
| Zobojętnianie — produkty | sól + woda |
| Rozpuszczalne wodorotlenki | NaOH, KOH, LiOH, Ba(OH)₂, Ca(OH)₂ |
| Nierozpuszczalne wodorotlenki | Fe(OH)₃, Cu(OH)₂, Al(OH)₃, Mg(OH)₂ |
| Amfoteryczne wodorotlenki | Al(OH)₃, Zn(OH)₂, Be(OH)₂ |
| FeCl₃ + 3NaOH → ? | Fe(OH)₃↓ + 3NaCl |
| CuSO₄ + 2NaOH → ? | Cu(OH)₂↓ + Na₂SO₄ |
| Wskaźnik na zasadowy | fenoloftaleina (malinowa), papierek (niebieski) |
| Dysocjacja NaOH | Na⁺ + OH⁻ |
| Hydrat — przykład | CuSO₄·5H₂O |

---

## 8. TEST KOŃCOWY (L003)

1. Wzory: wodorotlenek sodu, wodorotlenek wapnia, wodorotlenek żelaza(III).
2. Nazwy: KOH, Al(OH)₃, Cu(OH)₂, Fe(OH)₂.
3. Równania: Na₂O + H₂O ; Ca(OH)₂ + 2HCl ; 2NaOH + H₂SO₄.
4. Popraw: CaOH₂ ; NaOH + HCl → NaCl.
5. Odczyn i wskaźnik dla roztworu KOH.
6. (extra) FeCl₃ + 3NaOH — równanie, obserwacja, wniosek.
7. (extra) Dlaczego Al(OH)₃ jest amfoteryczny?
8. (extra) Zapisz dysocjację Ca(OH)₂.

---

## 9. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Wzór | OH jako klocek, nawias |
| Nazwa | Fe/Cu z cyfrą |
| Z tlenku | metalu + H₂O → wodorotlenek |
| Zobojętnianie | sól + woda, bilans |
| Odczyn | zasadowy, wskaźniki |
| Rozpuszczalność | które rozpuszczalne, które nie |
| Amfoteryczność | Al(OH)₃, Zn(OH)₂ |
| Doświadczenie | obserwacja ≠ wniosek |

---

## 10. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 20 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 15 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 11. MAPA MYŚLI

```
WODOROTLENEK
├── GRUPA OH (klocek, ładunek −1)
├── WZÓR (nawias gdy OH > 1)
├── NAZWA (Fe/Cu → cyfra rzymska)
├── OTRZYMYWANIE
│   ├── tlenek metalu + H₂O
│   ├── metal + H₂O (aktywne)
│   └── sól + zasada (strącanie)
├── ODCZYN zasadowy (rozpuszczalne)
├── ROZPUSZCZALNOŚĆ
│   ├── rozpuszczalne → zasady (NaOH, KOH, Ba(OH)₂)
│   └── nierozpuszczalne (Fe(OH)₃, Cu(OH)₂, Al(OH)₃)
├── ZOBOJĘTNIANIE (+ kwas → sól + H₂O)
└── AMFOTERYCZNOŚĆ (Al(OH)₃, Zn(OH)₂) — rozszerzenie
```

---

## 12. CO DALEJ?

**L004 — Kwasy:** nazewnictwo, dysocjacja, pH, reakcje z metalami i wodorotlenkami (domknięcie zobojętniania).

Most: każda reakcja wodorotlenek + kwas z tej lekcji to przygotowanie do pełnego opisu kwasów.

**Most do L002:** każdy tlenek zasadowy z L002 „przechodzi" w wodorotlenek po reakcji z wodą.

---

## 13. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Wodorotlenek | Związek zawierający grupę OH |
| Zasada (szkolnie) | Rozpuszczalny wodorotlenek o odczynie zasadowym |
| Zobojętnianie | Reakcja kwasu z zasadą (wodorotlenkiem) dająca sól i wodę |
| Grupa wodorotlenkowa | OH — w wzorach jako klocek |
| Woda wapienna | Roztwór Ca(OH)₂ |
| Wapno gaszone | Ca(OH)₂ |
| Amfoteryczny wodorotlenek | Reaguje z kwasem i zasadą (Al(OH)₃, Zn(OH)₂) |
| Hydrat | Związek z cząsteczkami wody w sieci krystalicznej |
| Osad | Trudno rozpuszczalna substancja stała (↓) |

---

## 14. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: brunatny osad.  
Wniosek: powstaje Fe(OH)₃.  
Nie: „Obserwacja: powstał Fe(OH)₃".

---

## 15. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 4 (Klinika 2.0).

---

## 16. DODATEK E — WARSTWA EXTRA

### E.1. Amfoteryczność — pełne wyjaśnienie

Wodorotlenki amfoteryczne reagują z kwasami (jak zasady) i z zasadami (jak kwasy):

Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O (z kwasem)  
Al(OH)₃ + NaOH → Na[Al(OH)₄] (z zasadą, w roztworze)  
Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (z zasadą, w stopie)  
Zn(OH)₂ + 2HCl → ZnCl₂ + 2H₂O  
Zn(OH)₂ + 2NaOH → Na₂ZnO₂ + 2H₂O  

### E.2. Zasady mocne i słabe

**Mocne (dysocjują całkowicie):**
- NaOH, KOH, LiOH, Ba(OH)₂, Ca(OH)₂

**Słabe:**
- NH₄OH (woda amoniakalna)
- Mg(OH)₂, Fe(OH)₃, Cu(OH)₂, Al(OH)₃

### E.3. Hydraty

Hydraty — związki zawierające cząsteczki wody w sieci krystalicznej:

- CuSO₄·5H₂O — siarczan(VI) miedzi(II) pentahydrat (niebieski)
- CuSO₄ — siarczan(VI) miedzi(II) bezwodny (biały)
- Na₂CO₃·10H₂O — węglan sodu dekahydrat (soda)
- CaSO₄·2H₂O — gips

**Zastosowanie:** suszenie, wskaźniki wilgotności (CuSO₄), materiały budowlane (gips).

### E.4. Most do L004 (Kwasy)

Wodorotlenki + kwasy → sole. To przygotowanie do L004, gdzie:
- poznasz nazewnictwo kwasów,
- napiszesz reakcje zobojętniania dla wszystkich typów kwasów,
- dowiesz się o pH i wskaźnikach.

### E.5. Wodorotlenki w życiu codziennym

- NaOH — „kret" do udrażniania rur, produkcja mydła.
- KOH — produkcja mydła potasowego, baterie alkaliczne.
- Ca(OH)₂ — woda wapienna (badanie CO₂), zaprawa murarska.
- Mg(OH)₂ — lek na nadkwasotę, środek przeczyszczający.
- Al(OH)₃ — lek na nadkwasotę (leki zobojętniające sok żołądkowy).
- NH₄OH — środki czystości (woda amoniakalna).

### E.6. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L003 na ≥ 80%),
- gdy chcesz zrozumieć równowagę kwasowo-zasadową (pH, pOH),
- gdy interesuje cię iloczyn rozpuszczalności.

L013 zawiera: równowagi jonowe, pH, pOH, iloczyn rozpuszczalności, hydrolizę soli.

---

## 17. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Wodorotlenek | Związek zawierający grupę wodorotlenkową OH. |
| Zasada | Rozpuszczalny wodorotlenek o odczynie zasadowym. |
| Zobojętnianie | Reakcja kwasu z zasadą, dająca sól i wodę. |
| Grupa wodorotlenkowa | OH — jednowartościowa grupa o ładunku −1. |
| Wodorotlenek amfoteryczny | Wodorotlenek reagujący z kwasem i zasadą. |
| Hydrat | Związek z cząsteczkami wody w sieci krystalicznej. |
| Woda wapienna | Roztwór Ca(OH)₂ — do wykrywania CO₂. |

---

## 18. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 19. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
WODOROTLENKI
Wzór: metal + OH (nawias gdy OH > 1)
OH — klocek o ładunku −1.

WZORY:
NaOH, KOH, Ca(OH)₂, Mg(OH)₂, Al(OH)₃,
Fe(OH)₂, Fe(OH)₃, Cu(OH)₂, Zn(OH)₂, Ba(OH)₂

OTRZYMYWANIE:
- tlenek metalu + H₂O → wodorotlenek
  Na₂O + H₂O → 2NaOH
  CaO + H₂O → Ca(OH)₂
- metal aktywny + H₂O → wodorotlenek + H₂
  2Na + 2H₂O → 2NaOH + H₂
- sól + zasada → wodorotlenek↓ + sól
  FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl

ZOBOJĘTNIANIE:
NaOH + HCl → NaCl + H₂O
Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O
2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O

ODCZYN: zasadowy (rozpuszczalne)
Wskaźniki: fenoloftaleina (malinowa), papierek (niebieski)

ROZPUSZCZALNOŚĆ:
- rozpuszczalne: NaOH, KOH, LiOH, Ba(OH)₂, Ca(OH)₂
- nierozpuszczalne: Fe(OH)₃, Cu(OH)₂, Al(OH)₃, Mg(OH)₂

AMFOTERYCZNE (rozszerzenie):
Al(OH)₃, Zn(OH)₂ — reagują z kwasem i zasadą

PUŁAPKI:
- CaOH₂ → Ca(OH)₂
- NaOH + HCl → NaCl + H₂O (nie samo NaCl)
- Fe(OH)₃ nierozpuszczalny
- Al(OH)₃ amfoteryczny
```

---

## 20. STATUS LEKCJI

- Wersja 2.0 (2026-09-12) — pełny MASTER, rozbudowany względem v1.0.
- Zachowano całą treść v1.0.
- Dodano: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, KLINIKA 2.0, DOŚWIADCZENIA (3), ĆWICZENIA A/B/C/D, Interleaving, Drabinka, Fiszki 22, System powtórek, Definicje, 10 zasad, Szybka ściąga, DODATKI C/D/E, STATUS.
- Poprawki merytoryczne: rozszerzono tabelę wodorotlenków (LiOH, Ba(OH)₂, Zn(OH)₂, Pb(OH)₂, AgOH, NH₄OH), dodano sekcję rozpuszczalności, amfoteryczności, dysocjacji, hydratów, zastosowań, mocnych/słabych zasad.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L003 MASTER v2.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L003)

Wodorotlenki — wzór, woda, zobojętnianie.

### Ściąga 80/20
- Wzór: metal + grupy OH (liczba OH = wartościowość metalu): NaOH, Ca(OH)₂, Al(OH)₃.
- Nawias przy OH, gdy grup jest więcej niż jedna.
- Otrzymywanie: tlenek zasadowy + woda (gdy reaguje); metal aktywny + woda (wybrane).
- Dysocjacja zasady: NaOH → Na⁺ + OH⁻.
- pH > 7; fenoloftaleina różowa w zasadzie (model szkolny).
- Zobojętnianie: wodorotlenek + kwas → sól + woda. Most do L004/L005.

### Pułapki
| Błąd | Popraw |
|------|--------|
| CaOH₂ bez nawiasu | Ca(OH)₂ |
| NaOH + HCl → NaClH₂O „sklejone” | NaCl + H₂O |
| Każdy wodorotlenek dobrze rozpuszczalny | Al(OH)₃, Fe(OH)₃ — słabo; osady |
| Wodorotlenek = tlenek | tlenek nie ma grupy OH |

### 6 zadań extra
1. Wzór wodorotlenku glinu.  
2. CaO + H₂O → ?  
3. NaOH + HCl → ?  
4. Barwa fenoloftaleiny w NaOH.  
5. Dlaczego nawias w Fe(OH)₃?  
6. Most L002: skąd się bierze CaO przed reakcją z wodą.

Szkic: 1 Al(OH)₃. 2 Ca(OH)₂. 3 NaCl + H₂O. 4 różowa. 5 trzy grupy OH, wartościowość Fe 3.

### Status
2026-09-12 · MASTER v2.0 zachowany · plik roboczy CHEMIA_PODSTAWA_PLUS_v1.1.md.



---

## UZUPEŁNIENIE wizualne L003 (audyt plus.md — doklejone)

### Skala pH (ASCII)

```
pH:  0        7        14
     kwas   obojętny   zasada
     HCl    woda       NaOH
```

### NaOH przemysłowo (extra)

```
2 NaCl + 2 H₂O →(elektroliza) 2 NaOH + H₂↑ + Cl₂↑
```

Nie wykonywać elektrolizy solanki samodzielnie.

### Sole zasadowe (extra)

Niedobór kwasu względem wodorotlenku, np. Ca(OH)₂ + HCl → Ca(OH)Cl + H₂O. Rzadko na E8.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L003 (przegląd mer. — doklejone)

**Wodorotlenek ≠ alkohol:** metal (lub NH₄⁺) + OH⁻ vs R–OH.  
**NH₄OH\*:** zapis szkolny wody amoniakalnej; w roztworze NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.  
**Zasada Arrheniusa** = rozpuszczalny wodorotlenek dający OH⁻. **Brønsted (extra):** akceptor H⁺ — także NH₃ bez grupy OH w wzorze cząsteczki.  
**Fe(OH)₂:** świeży często jasny/biały; zielenieje i brunatnieje na powietrzu (→ Fe(III)).  
**AgOH** praktycznie nie trwa — rozkład do Ag₂O.  
Amfoteryczne (extra): Al(OH)₃, Zn(OH)₂, Be(OH)₂, Pb(OH)₂, Sn(OH)₂.

### Ciekawostki
- Al(OH)₃ / Mg(OH)₂ — leki na zgagę (neutralizacja HCl).
- „Kret” do rur — NaOH + zmydlanie tłuszczów; BHP!
- Rozpuszczalność: sieć vs hydratacja (NaOH vs Fe(OH)₃).

<!-- ==================== END L003 ==================== -->



---



---

<!-- ==================== BEGIN L004 ==================== -->

# LEKCJA L004 — KWASY

# CHEMIA: PODSTAWA PLUS

## L004 — Kwasy

**Nazewnictwo · budowa · dysocjacja · pH · reakcje z metalami, tlenkami, wodorotlenkami, solami**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002 MASTER v2.0 · L003 MASTER v2.0  
Poprzednia lekcja: L003 (wodorotlenki) · Następna: L005 (sole)

**Kolejność:** definicja kwasu → wzór → nazwa → dysocjacja → pH i wskaźniki → reakcje → otrzymywanie → zastosowania

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L004 jest jego wiernym rozwinięciem. Indeks L000 linkuje do L004 MASTER.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie zatrzymaj się: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj wzory: „H-dwa-S-O-cztery".
5. **Rysuj.** Dysocjacja, strzałki, wskaźniki.
6. **Łap moment „aha!".**

**Zasada 80/20:** wzory kwasów · dysocjacja · reakcje z metalami i wodorotlenkami · pH.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. Kwasy beztlenowe: HCl, HBr, HI, H₂S, HF  
2. Kwasy tlenowe: H + reszta kwasowa (np. HNO₃, H₂SO₄, H₃PO₄, H₂CO₃)  
3. Kwas = H⁺ + reszta kwasowa  
4. Kwas + metal → sól + H₂  
5. Kwas + wodorotlenek → sól + H₂O  
6. Kwas + tlenek metalu → sól + H₂O  
7. Kwas + sól → nowy kwas + nowa sól (jeśli powstaje osad/gaz/słaby elektrolit)

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW":**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 6 — Klinika 2.0.)

**Oznaczenia reguł (bez emoji, opis słowny):**  
· fakt chemiczny  
· uproszczenie szkolne  
· wskazówka egzaminacyjna  
· uwaga (pułapka)

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- W–K–S–K
- Wartościowości: H I, O II, Cl I, S II/IV/VI, N III/V, P III/V, C IV
- Grupy atomów: NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻, Cl⁻, Br⁻, I⁻, S²⁻, F⁻

Z L002:
- Tlenki kwasowe (SO₂, SO₃, CO₂, P₂O₅, N₂O₅) — reagują z wodą → kwasy

Z L003:
- Zobojętnianie: kwas + wodorotlenek → sól + woda
- Wskaźniki: fenoloftaleina, oranż metylowy, papierek uniwersalny

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zdefiniować kwas (według Arrheniusa i Brønsteda — szkolnie),
- ułożyć wzór kwasu beztlenowego i tlenowego,
- nazwać kwasy (beztlenowe: kwas + nazwa pierwiastka; tlenowe: kwas + nazwa + wartościowość),
- zapisać dysocjację jonową kwasu,
- rozróżnić kwasy mocne i słabe,
- zastosować skalę pH i wskaźniki kwasowo-zasadowe,
- napisać reakcje kwasów z metalami, tlenkami metali, wodorotlenkami, solami,
- (ambitny) wyjaśnić, dlaczego kwas + metal daje różne produkty w zależności od aktywności metalu,
- (zaawansowany) znać pojęcie mocnego/słabego elektrolitu i stopnia dysocjacji.

---

## 2. ŚCIĄGA

### Definicja

**Kwas** — związek chemiczny, który w wodzie oddaje jon wodorowy H⁺ (proton) i tworzy jon reszty kwasowej.

**Definicja Arrheniusa (szkolna):** kwas to związek, który w wodzie dysocjuje na kationy wodoru H⁺ i aniony reszty kwasowej.

**Definicja Brønsteda (rozszerzona):** kwas to związek, który oddaje proton H⁺ (donor protonu).

**Wzór ogólny:** HₙR, gdzie R = reszta kwasowa, n = wartościowość reszty.

Przykłady:
- HCl → H⁺ + Cl⁻
- H₂SO₄ → 2H⁺ + SO₄²⁻
- H₃PO₄ → 3H⁺ + PO₄³⁻
- HNO₃ → H⁺ + NO₃⁻

### Podział kwasów

**1. Ze względu na skład:**

| Typ | Definicja | Przykłady |
|-----|-----------|-----------|
| **Beztlenowe** | H + niemetal (bez tlenu) | HCl, HBr, HI, HF, H₂S, HCN |
| **Tlenowe** | H + reszta tlenowa (zawierają tlen) | HNO₃, HNO₂, H₂SO₄, H₂SO₃, H₂CO₃, H₃PO₄, HClO, HClO₄ |

**2. Ze względu na moc (stopień dysocjacji):**

| Typ | Definicja | Przykłady |
|-----|-----------|-----------|
| **Mocne** | dysocjują całkowicie w wodzie | HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ |
| **Słabe** | dysocjują częściowo | HF, H₂S, H₂CO₃, H₂SO₃, HNO₂, H₃PO₄, CH₃COOH |

**3. Ze względu na liczbę atomów wodoru (protonów):**

| Typ | Definicja | Przykłady |
|-----|-----------|-----------|
| **Jednoprotonowe** | 1 atom H | HCl, HNO₃, HF, CH₃COOH |
| **Dwaprotonowe** | 2 atomy H | H₂SO₄, H₂SO₃, H₂CO₃, H₂S |
| **Trójprotonowe** | 3 atomy H | H₃PO₄ |

### Nazewnictwo kwasów

**Kwasy beztlenowe:**

| Wzór | Nazwa |
|------|-------|
| HF | kwas fluorowodorowy |
| HCl | kwas chlorowodorowy (solny) |
| HBr | kwas bromowodorowy |
| HI | kwas jodowodorowy |
| H₂S | kwas siarkowodorowy |
| HCN | kwas cyjanowodorowy |

**Reguła:** kwas + nazwa pierwiastka + „-owodorowy".

**Kwasy tlenowe:**

| Wzór | Nazwa |
|------|-------|
| HNO₂ | kwas azotowy(III) |
| HNO₃ | kwas azotowy(V) |
| H₂SO₃ | kwas siarkowy(IV) |
| H₂SO₄ | kwas siarkowy(VI) |
| H₂CO₃ | kwas węglowy |
| H₃PO₃ | kwas fosforowy(III) |
| H₃PO₄ | kwas fosforowy(V) |
| HClO | kwas chlorowy(I) |
| HClO₂ | kwas chlorowy(III) |
| HClO₃ | kwas chlorowy(V) |
| HClO₄ | kwas chlorowy(VII) |
| H₂SiO₃ | kwas krzemowy |
| HMnO₄ | kwas manganowy(VII) |
| H₂CrO₄ | kwas chromowy(VI) |
| H₂Cr₂O₇ | kwas dichromowy(VI) |

**Reguła:** kwas + nazwa pierwiastka + (wartościowość rzymska).

**Uwaga o kwasie węglowym:** H₂CO₃ — nie ma wartościowości w nazwie (jedyny tlenowy bez cyfry rzymskiej w szkole).

### Reszty kwasowe

| Kwas | Reszta kwasowa | Ładunek |
|------|----------------|---------|
| HCl | Cl⁻ | −1 |
| HBr | Br⁻ | −1 |
| HI | I⁻ | −1 |
| HF | F⁻ | −1 |
| H₂S | S²⁻ | −2 |
| HNO₃ | NO₃⁻ | −1 |
| HNO₂ | NO₂⁻ | −1 |
| H₂SO₄ | SO₄²⁻ | −2 |
| H₂SO₃ | SO₃²⁻ | −2 |
| H₂CO₃ | CO₃²⁻ | −2 |
| H₃PO₄ | PO₄³⁻ | −3 |
| HClO | ClO⁻ | −1 |
| HClO₄ | ClO₄⁻ | −1 |
| CH₃COOH | CH₃COO⁻ | −1 |

### Otrzymywanie kwasów

**1. Tlenek kwasowy + woda → kwas:**

SO₃ + H₂O → H₂SO₄  
SO₂ + H₂O → H₂SO₃  
CO₂ + H₂O → H₂CO₃  
P₂O₅ + 3H₂O → 2H₃PO₄  
N₂O₅ + H₂O → 2HNO₃  
N₂O₃ + H₂O → 2HNO₂  

**2. Niemetal + wodór → kwas beztlenowy:**

H₂ + Cl₂ → 2HCl (nad kat.)  
H₂ + S → H₂S (nad kat.)  
H₂ + Br₂ → 2HBr  
H₂ + I₂ → 2HI  

**3. Sól + kwas (mocniejszy) → nowy kwas + nowa sól:**

NaCl + H₂SO₄ →(Δ) NaHSO₄ + HCl↑  
CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑  

### Dysocjacja jonowa kwasów

**Dysocjacja** — rozpad związku na jony w wodzie.

**Kwasy dysocjują na kation wodoru H⁺ i anion reszty kwasowej:**

HCl → H⁺ + Cl⁻  
HNO₃ → H⁺ + NO₃⁻  
H₂SO₄ → 2H⁺ + SO₄²⁻  
H₃PO₄ → 3H⁺ + PO₄³⁻  
CH₃COOH ⇌ H⁺ + CH₃COO⁻ (dysocjacja częściowa — kwas słaby)

**Uwaga:** H⁺ w wodzie nie istnieje samodzielnie — łączy się z cząsteczką wody, tworząc **jon hydroniowy H₃O⁺**:

H⁺ + H₂O → H₃O⁺

W szkole często piszemy H⁺ (uproszczenie), ale poprawnie: H₃O⁺.

**Uwaga o dwustopniowej dysocjacji kwasów wieloprotonowych (rozszerzenie):**

H₂SO₄ → H⁺ + HSO₄⁻ (I stopień — całkowity)  
HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (II stopień — częściowy)  

To dlatego H₂SO₄ jest kwasem mocnym tylko w I stopniu.

### Skala pH

**pH** — ujemny logarytm stężenia jonów wodorowych: pH = −log[H⁺].

| pH | Odczyn | Przykład |
|----|--------|----------|
| 0–3 | silnie kwasowy | HCl, H₂SO₄ |
| 4–6 | słabo kwasowy | ocet, kawa, deszcz |
| 7 | obojętny | woda destylowana |
| 8–10 | słabo zasadowy | mydło, mleko magnezji |
| 11–14 | silnie zasadowy | NaOH, KOH |

**Wzory (rozszerzenie):**
- pH + pOH = 14 (w temperaturze 25°C)
- pH < 7 → kwasowy
- pH = 7 → obojętny
- pH > 7 → zasadowy

### Wskaźniki kwasowo-zasadowe

| Wskaźnik | Kwas | Obojętny | Zasada |
|----------|------|----------|--------|
| **Fenoloftaleina** | bezbarwna | bezbarwna | malinowa |
| **Oranż metylowy** | czerwony | pomarańczowy | żółty |
| **Papierek uniwersalny** | czerwony | żółty | niebieski |
| **Papierek lakmusowy** | czerwony | — | niebieski |
| **Błękit bromotymolowy** | żółty | zielony | niebieski |

**Zapamiętaj:** fenoloftaleina jest bezbarwna w kwasie i obojętnym, malinowa w zasadzie.

### Reakcje kwasów

**1. Kwas + metal aktywny → sól + wodór:**

2HCl + Zn → ZnCl₂ + H₂↑  
2HCl + Mg → MgCl₂ + H₂↑  
2HCl + Fe → FeCl₂ + H₂↑  
H₂SO₄ + Zn → ZnSO₄ + H₂↑  
6HCl + 2Al → 2AlCl₃ + 3H₂↑  

**Uwaga:** reakcja zachodzi tylko z metalami **aktywniejszymi od wodoru** w szeregu aktywności metali. Miedź, srebro, złoto nie reagują z rozcieńczonymi kwasami.

**Szereg aktywności metali (wybrane):**
K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au

**2. Kwas + tlenek metalu (zasadowy) → sól + woda:**

2HCl + CaO → CaCl₂ + H₂O  
H₂SO₄ + CuO → CuSO₄ + H₂O  
6HCl + Fe₂O₃ → 2FeCl₃ + 3H₂O  
2HNO₃ + Na₂O → 2NaNO₃ + H₂O  

**3. Kwas + wodorotlenek (zasada) → sól + woda (zobojętnianie):**

HCl + NaOH → NaCl + H₂O  
H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O  
2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O  
3HCl + Al(OH)₃ → AlCl₃ + 3H₂O  

**4. Kwas + sól (słabszy kwas lub gaz) → nowy kwas + nowa sól:**

2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂↑  
HCl + NaHCO₃ → NaCl + H₂O + CO₂↑  
H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl  
2HCl + Na₂S → 2NaCl + H₂S↑  

**Warunki:** reakcja zachodzi, gdy powstaje:
- osad (np. BaSO₄, AgCl),
- gaz (np. CO₂, H₂S),
- słaby elektrolit (np. H₂O, CH₃COOH).

### Zastosowania kwasów

| Kwas | Zastosowanie |
|------|--------------|
| HCl (solny) | żołądek, czyszczenie, regulacja pH |
| H₂SO₄ | akumulatory, produkcja nawozów, chemia |
| HNO₃ | nawozy, materiały wybuchowe, chemia |
| H₃PO₄ | nawozy, dodatki do żywności (E338), chemia |
| H₂CO₃ | napoje gazowane |
| CH₃COOH (ocet) | spożywczy, konserwant |
| HF | trawienie szkła |

### Bezpieczeństwo (BHP)

- **Rozcieńczanie kwasu:** zawsze **kwas do wody**, nie odwrotnie! (Reakcja egzotermiczna, ryzyko rozprysku.)
- Nie wąchać kwasów bezpośrednio — wachlować.
- Pracować w okularach i rękawicach.
- Przy kontakcie ze skórą — płukać dużą ilością wody.
- Nie pipetować ustami.

---

## 3. WARTOŚCIOWOŚĆ — PRZYPOMNIENIE (z L001)

Przy układaniu wzoru kwasu tlenowego:

1. Wartościowość pierwiastka centralnego i O (II).
2. H zawsze na początku (I).
3. Ułóż resztę kwasową (np. NO₃, SO₄, CO₃, PO₄).
4. Dopasuj liczbę H do ładunku reszty.

**Przykład: kwas azotowy(V)**
- N(V), O(II) → reszta: N₂O₅ → po odjęciu H₂O → 2HNO₃
- Ładunek NO₃⁻ = −1 → 1 H → HNO₃

**Przykład: kwas siarkowy(VI)**
- S(VI), O(II) → SO₃ → + H₂O → H₂SO₄
- Ładunek SO₄²⁻ = −2 → 2 H → H₂SO₄

**Szybka tabela kwasów i reszt:**

| Kwas | Reszta kwasowa | Ładunek |
|------|----------------|---------|
| HCl | Cl⁻ | −1 |
| HBr | Br⁻ | −1 |
| HI | I⁻ | −1 |
| HF | F⁻ | −1 |
| H₂S | S²⁻ | −2 |
| HNO₃ | NO₃⁻ | −1 |
| HNO₂ | NO₂⁻ | −1 |
| H₂SO₄ | SO₄²⁻ | −2 |
| H₂SO₃ | SO₃²⁻ | −2 |
| H₂CO₃ | CO₃²⁻ | −2 |
| H₃PO₄ | PO₄³⁻ | −3 |
| H₂SiO₃ | SiO₃²⁻ | −2 |
| HClO | ClO⁻ | −1 |
| HClO₄ | ClO₄⁻ | −1 |

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Odczyn kwasu chlorowodorowego

**Problem:** Jaki odczyn ma roztwór HCl?  
**Hipoteza:** Kwasowy — papierek czerwony, oranż metylowy czerwony.  
**Sprzęt:** HCl (rozcieńczony), papierek uniwersalny, oranż metylowy, probówka.  
**Obserwacja:** papierek uniwersalny czerwony; oranż metylowy czerwony; fenoloftaleina bezbarwna.  
**Wniosek:** Roztwór HCl ma odczyn kwasowy (pH < 7).  
**Równanie (dysocjacja):** HCl → H⁺ + Cl⁻  
**BHP:** HCl żrący — okulary, rękawice; nie pipetować ustami.

### Doświadczenie 2: Kwas + metal

**Problem:** Czy cynk reaguje z kwasem solnym?  
**Hipoteza:** Wydzieli się wodór.  
**Sprzęt:** Zn (granulki), HCl (rozcieńczony), probówka, zapalniczka.  
**Obserwacja:** pęcherzyki gazu; po zbliżeniu zapalniczki — charakterystyczny „szczek" (spalanie wodoru).  
**Wniosek:** Cynk reaguje z HCl, wydzielając wodór.  
**Równanie:** Zn + 2HCl → ZnCl₂ + H₂↑  
**BHP:** okulary; wodór łatwopalny — nie zbliżać ognia przed sprawdzeniem obecności wodoru.

### Doświadczenie 3: Kwas + węglan (otrzymywanie CO₂)

**Problem:** Jak otrzymać CO₂ z węglanu?  
**Hipoteza:** Powstanie CO₂ (gaz).  
**Sprzęt:** CaCO₃ (kreda), HCl, probówka, rurka, woda wapienna.  
**Obserwacja:** pęcherzyki gazu; woda wapienna mętnieje.  
**Wniosek:** CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑; CO₂ mętni wodę wapienną.  
**Równanie:** CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑  
**BHP:** okulary; nie wciągać wody wapiennej do ust.

**Obserwacja ≠ wniosek:**
- Obserwacja: pęcherzyki gazu.
- Wniosek: wydziela się CO₂ (potwierdzone mętnieniem wody wapiennej).
- Nie: „Obserwacja: wydziela się CO₂" — to już wniosek.

---

## 5. ZASTOSOWANIA — KWASY W ŻYCIU CODZIENNYM

| Kwas | Gdzie spotykasz |
|------|-----------------|
| HCl | żołądek (trawienie), środki czystości |
| H₂SO₄ | akumulator samochodowy, nawozy |
| HNO₃ | nawozy, chemia |
| H₃PO₄ | napoje typu cola (E338), nawozy |
| H₂CO₃ | napoje gazowane, woda deszczowa |
| CH₃COOH | ocet (5–10%), konserwant |
| cytrynowy (kwas cytrynowy) | cytryny, napoje |
| mlekowy | jogurt, kiszona kapusta |
| jabłkowy | jabłka, wino |

---

## 6. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawnie | Reguła |
|-------------|-----------|--------|
| H₂Cl | HCl | H(I), Cl(I) → HCl |
| HSO₄ | H₂SO₄ | S(VI), O(II) → SO₄²⁻ → 2H⁺ |
| „kwas chlorowodorowy" = HClO | HCl = kwas chlorowodorowy; HClO = kwas chlorowy(I) | różne |
| HNO₃ → H⁺ + NO₃⁻ ≠ HNO₃ → 2H⁺ + NO₃²⁻ | HNO₃ → H⁺ + NO₃⁻ | ładunek reszty = −1 |
| „wszystkie kwasy są mocne" | HF, H₂CO₃, CH₃COOH — słabe | moc zależy od stopnia dysocjacji |
| „kwas + metal zawsze daje H₂" | tylko z metalami aktywniejszymi od H | szereg aktywności |
| H₂SO₄ + Cu → CuSO₄ + H₂↑ | nie zachodzi (Cu poniżej H) | szereg aktywności |
| „fenoloftaleina w kwasie jest czerwona" | bezbarwna | wskaźniki |
| „pH 7 to kwas" | pH 7 = obojętny | skala pH |
| „woda do kwasu" | kwas do wody | BHP |

### Klinika 2.0 — przykład 1

**Błąd:** H₂Cl

- **Znajdź:** Zły wzór kwasu chlorowodorowego.
- **Popraw:** HCl.
- **Reguła:** W–K–S–K: H(I), Cl(I) → HCl.
- **Dlaczego:** H(I) i Cl(I) dają stosunek 1:1. H₂Cl dawałoby 2·I ≠ 1·I.
- **Zadanie podobne:** Zapisz wzór kwasu bromowodorowego.
- **Zadanie z pułapką:** Zapisz wzór kwasu siarkowodorowego. (Odp.: H₂S, bo S(II).)

### Klinika 2.0 — przykład 2

**Błąd:** „H₂SO₄ + Cu → CuSO₄ + H₂↑"

- **Znajdź:** Reakcja nie zachodzi.
- **Popraw:** Reakcja nie zachodzi (miedź jest poniżej wodoru w szeregu aktywności).
- **Reguła:** Kwas + metal → sól + H₂ tylko dla metali aktywniejszych od wodoru.
- **Dlaczego:** Miedź nie wypiera wodoru z kwasu.
- **Zadanie podobne:** Czy Zn reaguje z HCl? (Odp.: Tak.)
- **Zadanie z pułapką:** Czy Ag reaguje z HCl? (Odp.: Nie.)

### Klinika 2.0 — przykład 3

**Błąd:** „Wszystkie kwasy są mocne."

- **Znajdź:** Uogólnienie.
- **Popraw:** Mocne: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄. Słabe: HF, H₂S, H₂CO₃, H₂SO₃, HNO₂, H₃PO₄, CH₃COOH.
- **Reguła:** Moc zależy od stopnia dysocjacji.
- **Dlaczego:** Kwasy słabe dysocjują częściowo (⇌), mocne całkowicie (→).
- **Zadanie podobne:** Które z nich są mocne: HF, HNO₃, CH₃COOH?
- **Zadanie z pułapką:** Czy H₃PO₄ jest mocny? (Odp.: Nie — słaby, choć ma 3 H.)

### Klinika 2.0 — przykład 4

**Błąd:** „Fenoloftaleina w kwasie jest czerwona."

- **Znajdź:** Zły wskaźnik.
- **Popraw:** W kwasie bezbarwna; w zasadzie malinowa.
- **Reguła:** Wskaźniki mają różne barwy w kwasie, obojętnym i zasadzie.
- **Dlaczego:** Fenoloftaleina jest wskaźnikiem na zasady, nie na kwasy.
- **Zadanie podobne:** Jaki wskaźnik na kwas? (Odp.: oranż metylowy — czerwony; papierek uniwersalny — czerwony.)
- **Zadanie z pułapką:** Jaką barwę ma fenoloftaleina w wodzie destylowanej? (Odp.: bezbarwną.)

### Klinika 2.0 — przykład 5

**Błąd:** „Wodę wlewamy do stężonego kwasu."

- **Znajdź:** Błąd BHP.
- **Popraw:** Kwas wlewamy do wody.
- **Reguła:** Zawsze kwas do wody!
- **Dlaczego:** Rozcieńczanie kwasu wydziela dużo ciepła; woda do kwasu może gwałtownie się zagotować i rozpryskać stężony kwas.
- **Zadanie podobne:** Jak bezpiecznie rozcieńczyć H₂SO₄?
- **Zadanie z pułapką:** Czy można wlewać wodę do stężonego H₂SO₄? (Odp.: Nie.)

---

## 7. ĆWICZENIA

### 7.1. Mini-check (5 pytań)

1. Co to kwas?
2. Jak dzielimy kwasy ze względu na skład?
3. Co powstaje z kwasu + metalu aktywnego?
4. Co to pH?
5. Jak zabarwia się fenoloftaleina w kwasie?

### 7.2. Ćwiczenie prowadzone

**Dane:** Kwas siarkowy(VI) H₂SO₄.

**Krok 1.** Wzór: H₂SO₄.
**Krok 2.** Reszta kwasowa: SO₄²⁻.
**Krok 3.** Dysocjacja: H₂SO₄ → 2H⁺ + SO₄²⁻.
**Krok 4.** Reakcja z NaOH: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.
**Krok 5.** Reakcja z Zn: H₂SO₄ + Zn → ZnSO₄ + H₂↑.

**Spróbuj sam:** HNO₃ — wzór, reszta, dysocjacja, reakcja z KOH, reakcja z Mg.

### 7.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Wzory: kwas chlorowodorowy, kwas siarkowy(VI), kwas azotowy(V), kwas węglowy.
2. Nazwy: HCl, H₂SO₃, HNO₂, H₃PO₄.
3. Zapisz dysocjację: HCl, HNO₃, H₂SO₄.
4. Podaj resztę kwasową: HCl, H₂SO₄, HNO₃, H₃PO₄.
5. Co powstaje z: HCl + NaOH? H₂SO₄ + KOH?
6. Jakie pH ma kwas? Zasada? Woda?

**B. Trening**

7. Zapisz reakcje: HCl + Mg; H₂SO₄ + CaO; HNO₃ + NaOH; HCl + CaCO₃.
8. Popraw: H₂Cl; HSO₄; „wszystkie kwasy mocne".
9. Dlaczego Cu nie reaguje z rozcieńczonym HCl?
10. Które kwasy są mocne, a które słabe: HF, HNO₃, CH₃COOH, H₂SO₄?
11. Uzupełnij: Zn + 2HCl → ? ; CaO + 2HNO₃ → ?

**C. Ambitne**

12. Zapisz dwustopniową dysocjację H₂SO₄.
13. Wyjaśnij, dlaczego H⁺ w wodzie tworzy H₃O⁺.
14. Dlaczego H₃PO₄ jest słaby, mimo że ma 3 atomy wodoru?
15. Zaprojektuj doświadczenie: odczyn roztworu HCl (format DOŚWIADCZENIE).
16. Wyjaśnij, dlaczego reakcja HCl + CaCO₃ daje CO₂.

**D. Zaawansowane**

17. Oblicz pH roztworu o [H⁺] = 10⁻³ mol/dm³.
18. Oblicz [H⁺] w roztworze o pH = 2.
19. Wyjaśnij różnicę między stopniem dysocjacji a stałą dysocjacji.
20. Porównaj moc kwasów: HCl, HF, CH₃COOH. Uzasadnij różnice.

### 7.4. Interleaving (przeplatany)

1. Jaki charakter ma SO₃? (z L002)
2. Zapisz wzór wodorotlenku wapnia. (z L003)
3. Zapisz wzór kwasu siarkowego(VI). (z L004)
4. Zbilansuj: Al + O₂ → Al₂O₃. (z L001 + L002)
5. Ca(OH)₂ + 2HCl → ? (z L003 + L004)
6. Ile elektronów ma jon Cl⁻? (z L001)
7. SO₂ + H₂O → ? (z L002 + L004)
8. Fe(OH)₃ + 3HNO₃ → ? (z L003 + L004)

### 7.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to kwas? |
| ZASTOSUJ | Zapisz wzór kwasu azotowego(V). |
| WYJAŚNIJ | Dlaczego Cu nie reaguje z HCl? |
| ODKRYJ | Jaka reszta kwasowa w H₂SO₄? |
| POŁĄCZ | Połącz kwas z wodorotlenkiem. |
| ZAKWESTIONUJ | Czy wszystkie kwasy są mocne? |

---

## 8. ODPOWIEDZI

### Mini-check

1. Związek oddający H⁺ w wodzie; dysocjuje na H⁺ i resztę kwasową.
2. Beztlenowe, tlenowe.
3. Sól + wodór.
4. Ujemny logarytm stężenia H⁺.
5. Bezbarwna.

### Ćwiczenia A

1. HCl, H₂SO₄, HNO₃, H₂CO₃
2. kwas chlorowodorowy, kwas siarkowy(IV), kwas azotowy(III), kwas fosforowy(V)
3. HCl → H⁺ + Cl⁻; HNO₃ → H⁺ + NO₃⁻; H₂SO₄ → 2H⁺ + SO₄²⁻
4. Cl⁻, SO₄²⁻, NO₃⁻, PO₄³⁻
5. NaCl + H₂O; K₂SO₄ + 2H₂O
6. Kwas: < 7; zasada: > 7; woda: 7

### Ćwiczenia B

7. Mg + 2HCl → MgCl₂ + H₂↑; CaO + H₂SO₄ → CaSO₄ + H₂O; HNO₃ + NaOH → NaNO₃ + H₂O; CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑
8. HCl; H₂SO₄; kwasy mają różną moc
9. Cu poniżej H w szeregu aktywności
10. Mocne: HNO₃, H₂SO₄. Słabe: HF, CH₃COOH.
11. ZnCl₂ + H₂↑; Ca(NO₃)₂ + H₂O

### Ćwiczenia C

12. H₂SO₄ → H⁺ + HSO₄⁻; HSO₄⁻ ⇌ H⁺ + SO₄²⁻
13. H⁺ jest protonem; w wodzie łączy się z H₂O → H₃O⁺
14. Stopień dysocjacji H₃PO₄ jest niski — dysocjuje częściowo
15. Format DOŚWIADCZENIE
16. H₂CO₃ jest nietrwały → rozkłada się na H₂O + CO₂

### Ćwiczenia D

17. pH = 3
18. [H⁺] = 10⁻² = 0,01 mol/dm³
19. Stopień dysocjacji α — ułamek; stała dysocjacji Kₐ — stała równowagi
20. HCl mocny (α ≈ 1); HF słaby (α mały); CH₃COOH słaby (α mały, ale większy niż HF w rozcieńczeniu)

---

## 9. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to kwas? | Związek oddający H⁺ w wodzie |
| HCl — nazwa | kwas chlorowodorowy |
| H₂SO₄ — nazwa | kwas siarkowy(VI) |
| HNO₃ — nazwa | kwas azotowy(V) |
| H₂CO₃ — nazwa | kwas węglowy |
| H₃PO₄ — nazwa | kwas fosforowy(V) |
| HCl — dysocjacja | H⁺ + Cl⁻ |
| H₂SO₄ — dysocjacja | 2H⁺ + SO₄²⁻ |
| HNO₃ — dysocjacja | H⁺ + NO₃⁻ |
| Kwasy mocne | HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ |
| Kwasy słabe | HF, H₂S, H₂CO₃, H₂SO₃, HNO₂, H₃PO₄, CH₃COOH |
| Kwas + metal → | sól + H₂ (dla metali aktywnych) |
| Kwas + tlenek metalu → | sól + woda |
| Kwas + wodorotlenek → | sól + woda |
| Kwas + sól (węglan) → | sól + woda + CO₂ |
| pH < 7 | kwasowy |
| pH = 7 | obojętny |
| pH > 7 | zasadowy |
| Fenoloftaleina w kwasie | bezbarwna |
| Oranż metylowy w kwasie | czerwony |
| Szereg aktywności (od H) | K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au |
| BHP rozcieńczanie | kwas do wody |

---

## 10. TEST KOŃCOWY (L004)

1. Wzory: kwas chlorowodorowy, kwas siarkowy(VI), kwas azotowy(V), kwas węglowy.
2. Nazwy: HCl, H₂SO₃, HNO₂, H₃PO₄.
3. Dysocjacja: HCl, H₂SO₄, H₃PO₄.
4. Reakcje: HCl + Zn; H₂SO₄ + CaO; HNO₃ + NaOH; HCl + CaCO₃.
5. Popraw: H₂Cl; HSO₄; „wszystkie kwasy mocne".
6. Które z nich są mocne: HCl, HF, HNO₃, CH₃COOH?
7. Jaki odczyn ma roztwór HCl? Jak to sprawdzić?
8. (extra) Dlaczego Cu nie reaguje z rozcieńczonym HCl?
9. (extra) Zapisz dwustopniową dysocjację H₂SO₄.

---

## 11. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Definicja | kwas = H⁺ + reszta kwasowa |
| Podział | beztlenowe / tlenowe; mocne / słabe |
| Nazwy | beztlenowe + tlenowe (z cyfrą rzymską) |
| Reszty | Cl⁻, SO₄²⁻, NO₃⁻, CO₃²⁻, PO₄³⁻ |
| Dysocjacja | H⁺ + reszta kwasowa |
| pH | < 7 kwas; = 7 obojętny; > 7 zasada |
| Wskaźniki | fenoloftaleina, oranż, papierek |
| Reakcje | metal, tlenek metalu, wodorotlenek, sól |
| BHP | kwas do wody |

---

## 12. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 13. MAPA MYŚLI

```
KWAS
├── DEFINICJA (H⁺ + reszta kwasowa)
├── PODZIAŁ
│   ├── beztlenowe (HCl, HBr, HI, HF, H₂S)
│   ├── tlenowe (HNO₃, H₂SO₄, H₂CO₃, H₃PO₄, HClO₄)
│   ├── mocne (HCl, HNO₃, H₂SO₄, HClO₄)
│   └── słabe (HF, H₂CO₃, CH₃COOH, H₃PO₄)
├── NAZEWNICTWO
│   ├── beztlenowe → „-owodorowy"
│   └── tlenowe → cyfra rzymska
├── DYSCJONACJA → H⁺ + reszta kwasowa
├── pH + WSKAŹNIKI
├── REAKCJE
│   ├── + metal → sól + H₂
│   ├── + tlenek metalu → sól + H₂O
│   ├── + wodorotlenek → sól + H₂O
│   └── + sól → nowy kwas + nowa sól
├── OTRZYMYWANIE
│   ├── tlenek kwasowy + H₂O
│   ├── niemetal + H₂
│   └── sól + kwas
└── ZASTOSOWANIA
```

---

## 14. CO DALEJ?

**L005 — Sole:** nazewnictwo, otrzymywanie, reakcje strąceniowe, zastosowania.

Most: każda reakcja kwasu z wodorotlenkiem (zobojętnianie) daje sól. Sole to produkt wszystkich reakcji kwasów.

**Most do L002/L003:** tlenki kwasowe + woda → kwasy; wodorotlenki + kwasy → sole.

---

## 15. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Kwas | Związek oddający H⁺ w wodzie |
| Reszta kwasowa | Anion powstający z kwasu po odjęciu H⁺ |
| Dysocjacja jonowa | Rozpad związku na jony w wodzie |
| Jon hydroniowy | H₃O⁺ — H⁺ połączony z wodą |
| pH | Ujemny logarytm stężenia H⁺ |
| Wskaźnik | Substancja zmieniająca barwę w zależności od pH |
| Zobojętnianie | Reakcja kwasu z zasadą → sól + woda |
| Szereg aktywności | Uporządkowanie metali wg aktywności chemicznej |
| Kwas mocny | Dysocjuje całkowicie (α ≈ 1) |
| Kwas słaby | Dysocjuje częściowo (α < 1) |

---

## 16. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: pęcherzyki gazu.  
Wniosek: wydziela się wodór (potwierdzony „szczekiem" przy zapaleniu).  
Nie: „Obserwacja: wydziela się H₂".

---

## 17. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 6 (Klinika 2.0).

---

## 18. DODATEK E — WARSTWA EXTRA

### E.1. Teoria Brønsteda-Lowry'ego (rozszerzenie)

**Kwas** — donor protonu (H⁺).
**Zasada** — akceptor protonu (H⁺).

Reakcja kwas-zasada to **przekazanie protonu**:

HCl + H₂O ⇌ H₃O⁺ + Cl⁻

- HCl oddaje H⁺ → kwas
- H₂O przyjmuje H⁺ → zasada
- H₃O⁺ może oddać H⁺ → kwas sprzężony
- Cl⁻ może przyjąć H⁺ → zasada sprzężona

**Pary sprzężone:**
- HCl / Cl⁻
- H₂O / H₃O⁺

### E.2. Stopień dysocjacji i stała dysocjacji

**Stopień dysocjacji α** — ułamek cząsteczek, które uległy dysocjacji:

α = (liczba cząsteczek zdysocjowanych) / (liczba cząsteczek wprowadzonych)

- α = 1 → kwas mocny
- α < 1 → kwas słaby
- α zależy od stężenia (rozcieńczenie zwiększa α)

**Stała dysocjacji Kₐ** — stała równowagi dysocjacji:

Kₐ = [H⁺][A⁻] / [HA]

- Większe Kₐ → mocniejszy kwas
- Kₐ nie zależy od stężenia (w danej temperaturze)

### E.3. Kwasy w życiu codziennym

- **Żołądek:** HCl (pH ~1,5–2)
- **Ocet:** CH₃COOH (5–10%)
- **Cytryna:** kwas cytrynowy
- **Jogurt:** kwas mlekowy
- **Napoje gazowane:** H₂CO₃
- **Cola:** H₃PO₄ (E338)
- **Deszcz:** H₂CO₃ (naturalnie), H₂SO₄/HNO₃ (kwaśne deszcze)

### E.4. Kwaśne deszcze

SO₂ i NO₂ w atmosferze reagują z wodą i tlenem:

SO₂ + H₂O → H₂SO₃  
2SO₂ + O₂ → 2SO₃  
SO₃ + H₂O → H₂SO₄  
3NO₂ + H₂O → 2HNO₃ + NO  

**Skutki:**
- zakwaszenie gleb i wód (pH < 5,6),
- uszkodzenie lasów,
- korozja budynków i metali,
- wymieranie organizmów wodnych.

**Zapobieganie:**
- odsiarczanie paliw,
- filtry przemysłowe,
- energia odnawialna.

### E.5. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L004 na ≥ 80%),
- gdy chcesz zrozumieć równowagę kwasowo-zasadową,
- gdy interesuje cię pH, pOH, Kₐ.

L013 zawiera: pH, pOH, Kₐ, Kb, hydrolizę soli, bufory, miareczkowanie.

---

## 19. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Kwas | Związek, który w wodzie oddaje H⁺. |
| Reszta kwasowa | Anion powstający po odjęciu H⁺ z kwasu. |
| Dysocjacja jonowa | Rozpad cząsteczki na jony w wodzie. |
| Jon hydroniowy | H₃O⁺ — proton połączony z wodą. |
| pH | Ujemny logarytm stężenia molowego H⁺. |
| Zobojętnianie | Reakcja kwasu z zasadą, dająca sól i wodę. |
| Wskaźnik | Substancja zmieniająca barwę zależnie od pH. |
| Kwas mocny | Kwas dysocjujący całkowicie w wodzie. |

---

## 20. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 21. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
KWASY
Definicja: H⁺ + reszta kwasowa

PODZIAŁ:
- beztlenowe: HCl, HBr, HI, HF, H₂S
- tlenowe: HNO₃, H₂SO₄, H₂CO₃, H₃PO₄, HClO₄
- mocne: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄
- słabe: HF, H₂CO₃, H₂S, H₂SO₃, HNO₂, H₃PO₄, CH₃COOH

RESZTY:
Cl⁻, Br⁻, I⁻, F⁻, S²⁻, NO₃⁻, NO₂⁻, SO₄²⁻,
SO₃²⁻, CO₃²⁻, PO₄³⁻, ClO₄⁻

DYSCJONACJA:
HCl → H⁺ + Cl⁻
H₂SO₄ → 2H⁺ + SO₄²⁻
H₃PO₄ → 3H⁺ + PO₄³⁻

pH:
0–3 silnie kwasowy
4–6 słabo kwasowy
7 obojętny
8–10 słabo zasadowy
11–14 silnie zasadowy

WSKAŹNIKI:
- fenoloftaleina: bezbarwna (kwas), malinowa (zasada)
- oranż: czerwony (kwas), żółty (zasada)
- papierek uniwersalny: czerwony (kwas), niebieski (zasada)

REAKCJE:
- kwas + metal → sól + H₂ (metale aktywne)
- kwas + tlenek metalu → sól + H₂O
- kwas + wodorotlenek → sól + H₂O
- kwas + sól (węglan) → sól + H₂O + CO₂

BHP:
- kwas do wody
- okulary, rękawice
- nie pipetować ustami

PUŁAPKI:
- H₂Cl → HCl
- Cu + HCl → nie zachodzi
- „wszystkie kwasy mocne" → fałsz
```

---

## 22. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, ŚCIĄGĘ rozbudowaną, DOŚWIADCZENIA (3), ZASTOSOWANIA, KLINIKĘ 2.0 (5 przykładów), ĆWICZENIA A/B/C/D, Interleaving, Drabinkę, Fiszki 22, System powtórek, Mapę myśli, SŁOWNIK, DODATKI C/D/E, Definicje, 10 zasad, Szybką ściągę, STATUS.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L004 MASTER v1.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L004)

Kwasy — to, co najczęściej pada na sprawdzianie.

### Ściąga 80/20
- Wzór: wodór + reszta kwasowa (HCl, H₂SO₄, HNO₃, H₂CO₃, H₃PO₄).
- Nazwa: chlorowodorowy / siarkowy(VI) / azotowy(V) / węglowy / fosforowy(V) — trzymaj konwencję z lekcji.
- Dysocjacja: HCl → H⁺ + Cl⁻ (zapis szkolny).
- pH < 7 kwas; wskaźnik: oranż, fenoloftaleina, papierek.
- Metal + kwas → sól + H₂ (szereg aktywności — nie każdy metal).
- Węglan + kwas → sól + CO₂ + H₂O.
- BHP: wlewamy kwas do wody, nie odwrotnie (stężone).

### 6 zadań extra
1. Napisz wzór kwasu siarkowego(VI) i równanie dysocjacji (I stopień wystarczy).  
2. Zn + 2 HCl → ?  
3. CaCO₃ + 2 HCl → ?  
4. pH = 2 czy 9 — który roztwór kwasowy?  
5. Dlaczego nie wlewamy wody do stężonego H₂SO₄ jako „pierwszy odruch”?  
6. Wskaźnik w HCl: czego oczekujesz po papierku uniwersalnym?

Szkic: 1 H₂SO₄; H₂SO₄ → H⁺ + HSO₄⁻ (albo pełna wg lekcji). 2 ZnCl₂ + H₂. 3 CaCl₂ + CO₂ + H₂O. 4 pH 2. 5 silnie egzotermowe, pryskające. 6 barwa kwaśna.

### Status doklejki
2026-09-12 · sekcje 1–22 bez zmian.



---

## UZUPEŁNIENIE wizualne L004 (audyt plus.md — doklejone)

### Moc elektrolitów (szkolnie)

```
MOCNE:  HCl, HNO₃, H₂SO₄ (I stopień) — praktycznie pełna dysocjacja
SŁABE:  CH₃COOH, H₂CO₃ — równowaga, mało H⁺
```

„Dlaczego HCl mocniejszy od H₂CO₃” — uproszczenie: łatwość oddania H⁺ i trwałość reszty; pełny model w liceum.

### Kwasy karboksylowe (most do L006/L007)

| Wzór | Nazwa | Gdzie |
|------|-------|-------|
| HCOOH | metanowy (mrówkowy) | jad mrówek |
| CH₃COOH | etanowy (octowy) | ocet |
| C₃H₇COOH | butanowy | jełczenie tłuszczu |

### Przemysł (hasła)

H₂SO₄ — nawozy, akumulatory; HNO₃ — nawozy; HCl — trawienie metali; H₃PO₄ — nawozy, żywność.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L004 (przegląd mer. — doklejone)

**Arrhenius:** kwas w **wodzie** daje H⁺. Beztlenowe (HCl, H₂S) vs tlenowe (HNO₃, H₂SO₄).  
**Moc:** α ≈ 1 u mocnych. H₂SO₄ mocny głównie w **I stopniu** (HSO₄⁻ już słabszy).  
**H₃PO₃:** nie traktować jak trójprotonowego; E8 → H₃PO₄.  
**H₂CO₃:** w wodzie prawie go nie ma; równowaga CO₂(aq).  
**HCl(g)** kowalencyjny; w wodzie dysocjuje.  
Paradoks **HF**: F bardzo elektroujemny, ale H–F bardzo silne → HF słaby w wodzie (szkolnie).

### Ciekawostki
- pH logarytmiczne: różnica 1 jednostki = ×10 [H⁺].
- Żołądek pH ~1,5–2 (HCl); śluz chroni ścianę.
- Aqua regia 3:1 HCl:HNO₃ — złoto (extra, nie doświadczenie ucznia).
- CH₃COOH „lodowaty” krzepnie ok. 16,6 °C.
- HCOOH — jad mrówek; cytrynowy — cytrusy, E330.

<!-- ==================== END L004 ==================== -->

<!-- ==================== BEGIN L005 ==================== -->

# LEKCJA L005 — SOLE

# CHEMIA: PODSTAWA PLUS

## L005 — Sole

**Nazewnictwo · otrzymywanie · reakcje strąceniowe · hydraty · zastosowania**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002 MASTER v2.0 · L003 MASTER v2.0 · L004 MASTER v1.0  
Poprzednia lekcja: L004 (kwasy) · Następna: L006 (węglowodory)

**Kolejność:** definicja soli → wzór → nazwa → otrzymywanie → reakcje strąceniowe → hydraty → zastosowania

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L005 jest jego wiernym rozwinięciem. Indeks L000 linkuje do L005 MASTER.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj wzory: „Ca-CO-trzy".
5. **Rysuj.** Krzyżowanie, strącanie, tabela rozpuszczalności.
6. **Łap moment „aha!".**

**Zasada 80/20:** wzory soli · nazewnictwo (reszta + metal) · reakcje strąceniowe · tabela rozpuszczalności.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. Sól = kation metalu + anion reszty kwasowej  
2. Nazwa: [reszta kwasowa] + [metal z wartościowością]  
3. Kwas + wodorotlenek → sól + woda (zobojętnianie)  
4. Kwas + metal → sól + H₂  
5. Kwas + tlenek metalu → sól + woda  
6. Sól + sól → dwie nowe sole (jeśli powstaje osad)  
7. Sole azotanowe i metali alkalicznych — zawsze rozpuszczalne  

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW":**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 7 — Klinika 2.0.)

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- W–K–S–K
- Wartościowości: Na I, K I, Ca II, Mg II, Al III, Fe II/III, Cu I/II, Zn II, Ag I
- Grupy atomów: OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻, Cl⁻, Br⁻, I⁻, S²⁻, F⁻

Z L002:
- Tlenki kwasowe i zasadowe
- Tlenek kwasowy + woda → kwas
- Tlenek kwasowy + zasada → sól + woda

Z L003:
- Zobojętnianie: kwas + wodorotlenek → sól + woda
- Wodorotlenki: wzory, rozpuszczalność

Z L004:
- Kwasy: wzory, reszty kwasowe, dysocjacja
- Reakcje kwasów z metalami, tlenkami, wodorotlenkami, solami

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zdefiniować sól (kation metalu + anion reszty kwasowej),
- ułożyć wzór soli z wartościowości lub ładunków jonów,
- nazwać sól (nazwa reszty kwasowej + nazwa metalu z wartościowością),
- napisać otrzymywanie soli (5 metod),
- napisać reakcję strąceniową i rozpoznać osad,
- rozróżnić sole rozpuszczalne i nierozpuszczalne (tabela rozpuszczalności),
- (ambitny) rozróżnić sole obojętne, kwaśne, zasadowe, uwodnione,
- (zaawansowany) znać pojęcie hydrolizy soli i most do L013.

---

## 2. ŚCIĄGA

### Definicja

**Sól** — związek chemiczny zbudowany z kationu metalu (lub jonu amonowego NH₄⁺) i anionu reszty kwasowej.

**Wzór ogólny:** MₓRᵧ, gdzie M = kation metalu, R = anion reszty kwasowej.

Przykłady:
- NaCl → Na⁺ + Cl⁻
- CaSO₄ → Ca²⁺ + SO₄²⁻
- Al(NO₃)₃ → Al³⁺ + 3NO₃⁻
- K₃PO₄ → 3K⁺ + PO₄³⁻

### Nazewnictwo soli

**Reguła:** nazwa reszty kwasowej + nazwa metalu (z wartościowością, gdy metal ma zmienną).

**Nazwy reszt kwasowych:**

| Reszta | Nazwa reszty | Przykład soli | Nazwa soli |
|--------|--------------|---------------|------------|
| Cl⁻ | chlorek | NaCl | chlorek sodu |
| Br⁻ | bromek | KBr | bromek potasu |
| I⁻ | jodek | KI | jodek potasu |
| F⁻ | fluorek | CaF₂ | fluorek wapnia |
| S²⁻ | siarczek | Na₂S | siarczek sodu |
| NO₃⁻ | azotan(V) | KNO₃ | azotan(V) potasu |
| NO₂⁻ | azotan(III) | NaNO₂ | azotan(III) sodu |
| SO₄²⁻ | siarczan(VI) | CuSO₄ | siarczan(VI) miedzi(II) |
| SO₃²⁻ | siarczan(IV) | Na₂SO₃ | siarczan(IV) sodu |
| CO₃²⁻ | węglan | CaCO₃ | węglan wapnia |
| PO₄³⁻ | fosforan(V) | Ca₃(PO₄)₂ | fosforan(V) wapnia |
| ClO⁻ | chloran(I) | KClO | chloran(I) potasu |
| ClO₄⁻ | chloran(VII) | KClO₄ | chloran(VII) potasu |
| MnO₄⁻ | manganian(VII) | KMnO₄ | manganian(VII) potasu |
| CrO₄²⁻ | chromian(VI) | K₂CrO₄ | chromian(VI) potasu |
| Cr₂O₇²⁻ | dichromian(VI) | K₂Cr₂O₇ | dichromian(VI) potasu |
| CH₃COO⁻ | octan | CH₃COONa | octan sodu |
| HCO₃⁻ | wodorowęglan | NaHCO₃ | wodorowęglan sodu |
| HSO₄⁻ | wodorosiarczan(VI) | NaHSO₄ | wodorosiarczan(VI) sodu |

**Uwaga:** w nazwie soli reszta kwasowa jest **pierwsza**, metal **drugi**.

**Metale o zmiennej wartościowości — cyfra rzymska:**
- FeCl₂ — chlorek żelaza(II)
- FeCl₃ — chlorek żelaza(III)
- Cu₂O — tlenek miedzi(I) (to tlenek, ale zasada ta sama)
- CuO — tlenek miedzi(II)
- CuCl — chlorek miedzi(I)
- CuCl₂ — chlorek miedzi(II)
- SnCl₂ — chlorek cyny(II)
- SnCl₄ — chlorek cyny(IV)
- Pb(NO₃)₂ — azotan(V) ołowiu(II)
- MnSO₄ — siarczan(VI) manganu(II)
- KMnO₄ — manganian(VII) potasu
- K₂Cr₂O₇ — dichromian(VI) potasu

### Wzory soli — reguła z L001

Traktuj resztę kwasową jako **klocek** (np. NO₃⁻, SO₄²⁻).

**Metoda: krzyżowanie wartościowości lub ładunków.**

Przykład 1: chlorek wapnia
- Ca(II), Cl(I) → CaCl₂
- Kontrola: 1·II = 2·I ✓

Przykład 2: siarczan(VI) glinu
- Al(III), SO₄(II) → Al₂(SO₄)₃
- Kontrola: 2·III = 6; 3·II = 6 ✓
- Nawias, bo grupa SO₄ powtarza się 3 razy.

Przykład 3: fosforan(V) wapnia
- Ca(II), PO₄(III) → Ca₃(PO₄)₂
- Kontrola: 3·II = 6; 2·III = 6 ✓

Przykład 4: azotan(V) ołowiu(II)
- Pb(II), NO₃(I) → Pb(NO₃)₂
- Nawias, bo grupa NO₃ powtarza się 2 razy.

**Nawias:** gdy grupa powtarza się > 1 raz — bierzemy w nawias.
- NaCl — bez nawiasu (1 Cl)
- CaCl₂ — bez nawiasu (Cl nie jest grupą; to pierwiastek)
- Ca(NO₃)₂ — nawias (2 grupy NO₃)
- Al₂(SO₄)₃ — nawias (3 grupy SO₄)
- Al(OH)₃ — nawias (3 grupy OH)

### Otrzymywanie soli (5 metod)

**Metoda 1: Kwas + wodorotlenek → sól + woda (zobojętnianie)**

HCl + NaOH → NaCl + H₂O  
H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O  
2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O  
3HCl + Al(OH)₃ → AlCl₃ + 3H₂O  

**Metoda 2: Kwas + metal aktywny → sól + wodór**

2HCl + Zn → ZnCl₂ + H₂↑  
H₂SO₄ + Mg → MgSO₄ + H₂↑  
6HCl + 2Al → 2AlCl₃ + 3H₂↑  

**Metoda 3: Kwas + tlenek metalu → sól + woda**

2HCl + CaO → CaCl₂ + H₂O  
H₂SO₄ + CuO → CuSO₄ + H₂O  
6HCl + Fe₂O₃ → 2FeCl₃ + 3H₂O  

**Metoda 4: Kwas + sól (słabszy kwas lub gaz) → nowy kwas + nowa sól**

2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂↑  
H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl  
2HCl + Na₂S → 2NaCl + H₂S↑  

**Metoda 5: Sól + zasada → wodorotlenek↓ + sól**

FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl  
CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄  
AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl  

**Metoda 6 (rozszerzenie): Sól + sól → dwie nowe sole (jeśli powstaje osad)**

AgNO₃ + NaCl → AgCl↓ + NaNO₃  
BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl  
Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃  

**Metoda 7 (rozszerzenie): Metal + niemetal → sól**

2Na + Cl₂ → 2NaCl  
Fe + S →(Δ) FeS  
2Fe + 3Cl₂ →(Δ) 2FeCl₃  
Cu + Cl₂ →(Δ) CuCl₂  

### Tabela rozpuszczalności (uproszczenie szkolne)

| Kategoria | Sole | Wyjątki / uwagi |
|-----------|------|-----------------|
| **Zawsze rozpuszczalne** | azotany(V) (NO₃⁻) | wszystkie |
| **Zawsze rozpuszczalne** | sole metali alkalicznych (Li, Na, K, Rb, Cs) i NH₄⁺ | wszystkie |
| **Chlorki (Cl⁻)** | rozpuszczalne | wyjątki: AgCl, PbCl₂, Hg₂Cl₂ |
| **Bromki (Br⁻)** | rozpuszczalne | wyjątki: AgBr, PbBr₂, Hg₂Br₂ |
| **Jodki (I⁻)** | rozpuszczalne | wyjątki: AgI, PbI₂, Hg₂I₂ |
| **Siarczany(VI) (SO₄²⁻)** | rozpuszczalne | wyjątki: BaSO₄, PbSO₄, CaSO₄ (słabo) |
| **Węglany (CO₃²⁻)** | **nierozpuszczalne** | wyjątki: sole metali alkalicznych, NH₄⁺ |
| **Fosforany(V) (PO₄³⁻)** | **nierozpuszczalne** | wyjątki: sole metali alkalicznych, NH₄⁺ |
| **Siarczki (S²⁻)** | **nierozpuszczalne** | wyjątki: sole metali alkalicznych, NH₄⁺ |
| **Wodorotlenki (OH⁻)** | **nierozpuszczalne** | wyjątki: NaOH, KOH, Ba(OH)₂, Ca(OH)₂ (słabo) |

**Mnemonik:** „Azotany i sole metali alkalicznych — zawsze się rozpuszczają". Potem zapamiętaj wyjątki dla chlorków (Ag, Pb), siarczanów (Ba, Pb, Ca) i węglanów (rozpuszczalne tylko sole metali alkalicznych).

### Reakcje strąceniowe

**Reakcja strąceniowa** — reakcja dwóch roztworów soli, w której powstaje trudno rozpuszczalny osad (↓).

**Warunek:** jedna z powstałych soli musi być trudno rozpuszczalna.

Przykłady:
- AgNO₃ + NaCl → AgCl↓ + NaNO₃ (biały osad AgCl)
- BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl (biały osad BaSO₄)
- Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃ (żółty osad PbI₂)
- CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl (biały osad CaCO₃)
- CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄ (niebieski osad Cu(OH)₂)
- FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl (brunatny osad Fe(OH)₃)
- FeCl₂ + 2NaOH → Fe(OH)₂↓ + 2NaCl (zielonkawo-biały osad Fe(OH)₂)

**Zapis jonowy (rozszerzenie):**

AgNO₃ + NaCl → AgCl↓ + NaNO₃  
Zapis jonowy: Ag⁺ + Cl⁻ → AgCl↓

Jony „widzowe" (Na⁺, NO₃⁻) się nie zmieniają.

### Rodzaje soli (rozszerzenie)

| Rodzaj | Definicja | Przykład |
|--------|-----------|----------|
| **Obojętne** | kation metalu + anion reszty kwasowej | NaCl, K₂SO₄, Ca(NO₃)₂ |
| **Kwaśne** | zawierają wodór w reszcie kwasowej | NaHCO₃, NaHSO₄, NaH₂PO₄ |
| **Zasadowe** | zawierają grupę OH w reszcie | Ca(OH)Cl, Mg(OH)Cl |
| **Uwodnione (hydraty)** | zawierają cząsteczki wody w sieci | CuSO₄·5H₂O, Na₂CO₃·10H₂O, CaSO₄·2H₂O |

### Hydraty

**Hydraty** — sole zawierające cząsteczki wody w sieci krystalicznej.

| Wzór | Nazwa zwyczajowa | Kolor |
|------|------------------|-------|
| CuSO₄·5H₂O | siarczan(VI) miedzi(II) pentahydrat | niebieski |
| CuSO₄ | siarczan(VI) miedzi(II) bezwodny | biały |
| Na₂CO₃·10H₂O | węglan sodu dekahydrat (soda) | biały |
| CaSO₄·2H₂O | gips | biały |
| MgSO₄·7H₂O | siarczan(VI) magnezu siedmiohydrat (sól gorzka) | biały |
| FeSO₄·7H₂O | siarczan(VI) żelaza(II) siedmiohydrat | zielony |

**Zastosowanie hydratów:**
- CuSO₄ — wykrywanie wody (z białego → niebieski),
- gips — budownictwo,
- sól gorzka — medycyna.

### Zastosowania soli

| Sól | Zastosowanie |
|-----|--------------|
| NaCl | sól kuchenna, konserwant, przemysł |
| CaCO₃ | kreda, marmur, wapień, budownictwo |
| NaHCO₃ | soda oczyszczona, proszek do pieczenia |
| Na₂CO₃ | soda kalcynowana, produkcja szkła |
| KNO₃ | nawóz, proch czarny |
| AgNO₃ | fotografia, wykrywanie Cl⁻ |
| BaSO₄ | kontrast w RTG |
| CaSO₄·2H₂O | gips |
| CuSO₄ | środek grzybobójczy, wykrywanie wody |
| FeSO₄ | nawóz, leczenie anemii |
| MgSO₄ | sól gorzka, medycyna |
| KMnO₄ | środek dezynfekujący, utleniacz |
| Na₂SO₄ | produkcja szkła, detergentów |

### Sole w życiu codziennym

- **Sól kuchenna (NaCl)** — przyprawa, konserwant.
- **Soda oczyszczona (NaHCO₃)** — proszek do pieczenia, środek na zgagę.
- **Soda kalcynowana (Na₂CO₃)** — pranie, produkcja szkła.
- **Kreda (CaCO₃)** — pisanie, budownictwo.
- **Gips (CaSO₄·2H₂O)** — budownictwo, medycyna (unieruchomienie złamań).
- **Nawóz (KNO₃, NH₄NO₃, superfosfat)** — rolnictwo.
- **Sól gorzka (MgSO₄·7H₂O)** — kąpiele lecznicze, medycyna.

---

## 3. WARTOŚCIOWOŚĆ — PRZYPOMNIENIE (z L001)

**Przy układaniu wzoru soli:**

1. Zapisz symbol metalu i resztę kwasową.
2. Dopisz wartościowości (lub ładunki).
3. Zastosuj W–K–S–K.
4. Pamiętaj o nawiasie, gdy reszta powtarza się > 1 raz.
5. Sprawdź kontrolę ładunków.

**Przykłady:**

| Kation | Anion | Wzór | Nazwa |
|--------|-------|------|-------|
| Na⁺ | Cl⁻ | NaCl | chlorek sodu |
| Ca²⁺ | Cl⁻ | CaCl₂ | chlorek wapnia |
| Al³⁺ | Cl⁻ | AlCl₃ | chlorek glinu |
| Na⁺ | SO₄²⁻ | Na₂SO₄ | siarczan(VI) sodu |
| Al³⁺ | SO₄²⁻ | Al₂(SO₄)₃ | siarczan(VI) glinu |
| Ca²⁺ | NO₃⁻ | Ca(NO₃)₂ | azotan(V) wapnia |
| K⁺ | PO₄³⁻ | K₃PO₄ | fosforan(V) potasu |
| Ca²⁺ | PO₄³⁻ | Ca₃(PO₄)₂ | fosforan(V) wapnia |
| Fe²⁺ | Cl⁻ | FeCl₂ | chlorek żelaza(II) |
| Fe³⁺ | Cl⁻ | FeCl₃ | chlorek żelaza(III) |
| Cu²⁺ | SO₄²⁻ | CuSO₄ | siarczan(VI) miedzi(II) |
| Cu⁺ | Cl⁻ | CuCl | chlorek miedzi(I) |

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Strącanie chlorku srebra

**Problem:** Czy z AgNO₃ i NaCl powstaje osad?  
**Hipoteza:** Powstanie biały osad AgCl.  
**Sprzęt:** AgNO₃, NaCl, probówka.  
**Obserwacja:** biały, serowaty osad.  
**Wniosek:** AgCl jest trudno rozpuszczalny → reakcja strąceniowa.  
**Równanie:** AgNO₃ + NaCl → AgCl↓ + NaNO₃  
**BHP:** AgNO₃ żrący, plami skórę; okulary, rękawice.

### Doświadczenie 2: Strącanie wodorotlenku miedzi(II)

**Problem:** Czy z CuSO₄ i NaOH powstaje osad?  
**Hipoteza:** Powstanie niebieski osad Cu(OH)₂.  
**Sprzęt:** CuSO₄, NaOH, probówka.  
**Obserwacja:** niebieski osad.  
**Wniosek:** Cu(OH)₂ jest trudno rozpuszczalny.  
**Równanie:** CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄  
**BHP:** NaOH żrący; okulary.

### Doświadczenie 3: Reakcja zobojętniania

**Problem:** Co się dzieje, gdy do zasady dodajemy kwas?  
**Hipoteza:** Powstaje sól i woda; odczyn zmienia się z zasadowego na obojętny.  
**Sprzęt:** NaOH, HCl, fenoloftaleina, biureta.  
**Obserwacja:** malinowa barwa fenoloftaleiny zanika po dodaniu kwasu.  
**Wniosek:** NaOH + HCl → NaCl + H₂O.  
**Równanie:** NaOH + HCl → NaCl + H₂O  
**BHP:** okulary; pipetować gruszką.

### Doświadczenie 4: Otrzymywanie CuSO₄ z CuO

**Problem:** Czy CuO reaguje z H₂SO₄?  
**Hipoteza:** Powstanie niebieski roztwór CuSO₄.  
**Sprzęt:** CuO (czarny), H₂SO₄ (rozcieńczony), probówka, palnik.  
**Obserwacja:** czarny CuO znika; powstaje niebieski roztwór.  
**Wniosek:** CuO + H₂SO₄ → CuSO₄ + H₂O.  
**Równanie:** CuO + H₂SO₄ → CuSO₄ + H₂O  
**BHP:** okulary; H₂SO₄ żrący.

**Obserwacja ≠ wniosek:**
- Obserwacja: biały osad.
- Wniosek: powstaje AgCl (trudno rozpuszczalny).
- Nie: „Obserwacja: powstał AgCl" — to już wniosek.

---

## 5. ZASTOSOWANIA — SOLE W ŻYCIU CODZIENNYM

| Sól | Gdzie spotykasz |
|-----|-----------------|
| NaCl | sól kuchenna, konserwant, odladzanie dróg |
| CaCO₃ | kreda, marmur, wapień, skały |
| NaHCO₃ | proszek do pieczenia, środek na zgagę |
| Na₂CO₃ | pranie, produkcja szkła |
| KNO₃ | nawóz, proch czarny |
| AgNO₃ | fotografia, wykrywanie Cl⁻ |
| BaSO₄ | kontrast w RTG |
| CaSO₄·2H₂O | gips (unieruchomienie złamań) |
| CuSO₄ | środek grzybobójczy, wykrywanie wody |
| FeSO₄ | nawóz, leczenie anemii |
| MgSO₄ | sól gorzka, kąpiele lecznicze |
| KMnO₄ | dezynfekcja, utleniacz |
| Na₂SO₄ | produkcja szkła, detergentów |

---

## 6. REAKCJE STRĄCENIOWE — SZCZEGÓŁY

### Kolory osadów (do zapamiętania)

| Osad | Kolor |
|------|-------|
| AgCl | biały |
| BaSO₄ | biały |
| CaCO₃ | biały |
| PbI₂ | żółty |
| PbCl₂ | biały |
| Cu(OH)₂ | niebieski |
| Fe(OH)₃ | brunatny |
| Fe(OH)₂ | zielonkawo-biały |
| Al(OH)₃ | biały, galaretowaty |
| Mg(OH)₂ | biały |
| ZnS | biały |
| CuS | czarny |
| PbS | czarny |

### Zapis jonowy reakcji strąceniowych (rozszerzenie)

**Przykład 1:**
AgNO₃ + NaCl → AgCl↓ + NaNO₃  
Zapis jonowy: Ag⁺ + Cl⁻ → AgCl↓

**Przykład 2:**
BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl  
Zapis jonowy: Ba²⁺ + SO₄²⁻ → BaSO₄↓

**Przykład 3:**
Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃  
Zapis jonowy: Pb²⁺ + 2I⁻ → PbI₂↓

**Jony widzowe** — jony, które nie biorą udziału w reakcji (np. Na⁺, NO₃⁻, K⁺).

---

## 7. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawnie | Reguła |
|-------------|-----------|--------|
| CaCl | CaCl₂ | Ca(II), Cl(I) → CaCl₂ |
| AlSO₄ | Al₂(SO₄)₃ | Al(III), SO₄(II) → Al₂(SO₄)₃ |
| CaNO₃ | Ca(NO₃)₂ | Ca(II), NO₃(I) → Ca(NO₃)₂ |
| „chlorek sodu" = NaCl₂ | NaCl | Na(I), Cl(I) → NaCl |
| „azotan sodu" | azotan(V) sodu | nazwa z wartościowością |
| FeCl₂ = chlorek żelaza(III) | chlorek żelaza(II) | Fe(II) |
| „wszystkie sole rozpuszczalne" | nie — węglany, fosforany, siarczki nierozpuszczalne | tabela rozpuszczalności |
| „AgCl rozpuszczalny" | nierozpuszczalny | wyjątek |
| „BaSO₄ rozpuszczalny" | nierozpuszczalny | wyjątek |
| „Ca(NO₃)₂ → CaNO₃" | Ca(NO₃)₂ | nawias, bo 2 grupy NO₃ |
| „CuSO₄ + NaOH → CuOH + NaSO₄" | Cu(OH)₂↓ + Na₂SO₄ | poprawne wzory |

### Klinika 2.0 — przykład 1

**Błąd:** CaCl

- **Znajdź:** Zły wzór chlorku wapnia.
- **Popraw:** CaCl₂.
- **Reguła:** W–K–S–K: Ca(II), Cl(I) → CaCl₂.
- **Dlaczego:** Ca(II) wymaga dwóch Cl(I) dla zrównoważenia ładunków.
- **Zadanie podobne:** Zapisz wzór chlorku magnezu.
- **Zadanie z pułapką:** Zapisz wzór chlorku glinu. (Odp.: AlCl₃.)

### Klinika 2.0 — przykład 2

**Błąd:** AlSO₄

- **Znajdź:** Zły wzór siarczanu(VI) glinu.
- **Popraw:** Al₂(SO₄)₃.
- **Reguła:** W–K–S–K + nawias, gdy grupa powtarza się > 1.
- **Dlaczego:** Al(III), SO₄(II) → 2 Al i 3 SO₄. Nawias, bo 3 grupy SO₄.
- **Zadanie podobne:** Zapisz wzór siarczanu(VI) wapnia.
- **Zadanie z pułapką:** Zapisz wzór azotanu(V) glinu. (Odp.: Al(NO₃)₃.)

### Klinika 2.0 — przykład 3

**Błąd:** „Wszystkie sole są rozpuszczalne w wodzie."

- **Znajdź:** Uogólnienie.
- **Popraw:** Wiele soli jest nierozpuszczalnych: węglany (poza metalami alkalicznymi), fosforany, siarczki, większość wodorotlenków.
- **Reguła:** Tabela rozpuszczalności.
- **Dlaczego:** Rozpuszczalność zależy od kationu i anionu.
- **Zadanie podobne:** Które sole są zawsze rozpuszczalne?
- **Zadanie z pułapką:** Czy CaCO₃ jest rozpuszczalny? (Odp.: Nie.)

### Klinika 2.0 — przykład 4

**Błąd:** „CuSO₄ + NaOH → CuOH + NaSO₄"

- **Znajdź:** Złe wzory produktów.
- **Popraw:** CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.
- **Reguła:** Wzory z wartościowości (Cu(II) → Cu(OH)₂; Na(I) → Na₂SO₄).
- **Dlaczego:** CuOH nie istnieje jako trwały związek; Cu(II) tworzy Cu(OH)₂.
- **Zadanie podobne:** FeCl₃ + 3NaOH → ?
- **Zadanie z pułapką:** AlCl₃ + 3NaOH → ? (Odp.: Al(OH)₃↓ + 3NaCl.)

### Klinika 2.0 — przykład 5

**Błąd:** „BaSO₄ jest rozpuszczalny, bo siarczany są rozpuszczalne."

- **Znajdź:** Brak wyjątku.
- **Popraw:** BaSO₄ jest nierozpuszczalny (wyjątek od reguły).
- **Reguła:** Siarczany(VI) są rozpuszczalne, ale wyjątki: BaSO₄, PbSO₄, CaSO₄ (słabo).
- **Dlaczego:** Ba²⁺ tworzy z SO₄²⁻ bardzo trudno rozpuszczalny związek.
- **Zadanie podobne:** Które siarczany są nierozpuszczalne?
- **Zadanie z pułapką:** Czy MgSO₄ jest rozpuszczalny? (Odp.: Tak.)

---

## 8. ĆWICZENIA

### 8.1. Mini-check (5 pytań)

1. Co to sól?
2. Jak nazywamy sól NaCl?
3. Co powstaje z kwasu + wodorotlenku?
4. Co to reakcja strąceniowa?
5. Które sole są zawsze rozpuszczalne?

### 8.2. Ćwiczenie prowadzone

**Dane:** siarczan(VI) miedzi(II).

**Krok 1.** Kation: Cu²⁺; anion: SO₄²⁻.
**Krok 2.** Wzór: CuSO₄ (1:1).
**Krok 3.** Nazwa: siarczan(VI) miedzi(II).
**Krok 4.** Otrzymywanie: CuO + H₂SO₄ → CuSO₄ + H₂O.
**Krok 5.** Reakcja strąceniowa: CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.

**Spróbuj sam:** chlorek żelaza(III).

### 8.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Wzory: chlorek sodu, azotan(V) potasu, siarczan(VI) wapnia, węglan sodu.
2. Nazwy: NaCl, K₂SO₄, CaCO₃, Al(NO₃)₃.
3. Jakie jony tworzą: NaCl, CaCl₂, Al₂(SO₄)₃?
4. Które sole są rozpuszczalne: NaCl, CaCO₃, BaSO₄, KNO₃?
5. Co powstaje z: HCl + NaOH? H₂SO₄ + CuO?

**B. Trening**

6. Zapisz reakcje: HCl + Zn; H₂SO₄ + CaO; HNO₃ + KOH; HCl + CaCO₃.
7. Zapisz reakcje strąceniowe: AgNO₃ + NaCl; BaCl₂ + Na₂SO₄; Pb(NO₃)₂ + KI.
8. Popraw: CaCl; AlSO₄; „wszystkie sole rozpuszczalne".
9. Nazwij: FeCl₂, FeCl₃, CuSO₄, KMnO₄.
10. Który osad jest niebieski, a który brunatny?

**C. Ambitne**

11. Zapisz zapis jonowy: AgNO₃ + NaCl.
12. Wyjaśnij, dlaczego AgCl jest nierozpuszczalny.
13. Zaprojektuj doświadczenie: strącanie Cu(OH)₂ (format DOŚWIADCZENIE).
14. Podaj 3 metody otrzymywania NaCl.
15. Wyjaśnij, dlaczego CaCO₃ jest nierozpuszczalny, a Na₂CO₃ — rozpuszczalny.

**D. Zaawansowane**

16. Co to hydroliza soli? Podaj przykład.
17. Dlaczego roztwór CH₃COONa ma odczyn zasadowy?
18. Co to sole kwaśne i zasadowe? Podaj przykłady.
19. Zapisz wzór hydratu siarczanu(VI) miedzi(II) i wyjaśnij, co oznacza „·5H₂O".
20. Porównaj rozpuszczalność: NaCl, AgCl, BaSO₄, CaCO₃.

### 8.4. Interleaving (przeplatany)

1. Jaki charakter ma SO₃? (z L002)
2. Zapisz wzór kwasu siarkowego(VI). (z L004)
3. Zapisz wzór wodorotlenku miedzi(II). (z L003)
4. Zbilansuj: Al + O₂ → Al₂O₃. (z L001 + L002)
5. CuSO₄ + 2NaOH → ? (z L005)
6. Ile elektronów ma jon Cu²⁺? (z L001)
7. SO₃ + H₂O → ? (z L002 + L004)
8. Fe(OH)₃ + 3HNO₃ → ? (z L003 + L004 + L005)

### 8.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to sól? |
| ZASTOSUJ | Zapisz wzór chlorku wapnia. |
| WYJAŚNIJ | Dlaczego Ca(NO₃)₂ ma nawias? |
| ODKRYJ | Jaki osad powstaje z AgNO₃ + NaCl? |
| POŁĄCZ | Połącz kwas z wodorotlenkiem → sól. |
| ZAKWESTIONUJ | Czy wszystkie sole są rozpuszczalne? |

---

## 9. ODPOWIEDZI

### Mini-check

1. Kation metalu + anion reszty kwasowej.
2. Chlorek sodu.
3. Sól + woda.
4. Reakcja, w której powstaje osad.
5. Azotany(V) i sole metali alkalicznych.

### Ćwiczenia A

1. NaCl, KNO₃, CaSO₄, Na₂CO₃
2. chlorek sodu, siarczan(VI) potasu, węglan wapnia, azotan(V) glinu
3. Na⁺ + Cl⁻; Ca²⁺ + 2Cl⁻; 2Al³⁺ + 3SO₄²⁻
4. NaCl, KNO₃ — rozpuszczalne; CaCO₃, BaSO₄ — nierozpuszczalne
5. NaCl + H₂O; CuSO₄ + H₂O

### Ćwiczenia B

6. ZnCl₂ + H₂↑; CaSO₄ + H₂O; KNO₃ + H₂O; CaCl₂ + H₂O + CO₂↑
7. AgCl↓ + NaNO₃; BaSO₄↓ + 2NaCl; PbI₂↓ + 2KNO₃
8. CaCl₂; Al₂(SO₄)₃; nie — węglany, fosforany, siarczki nierozpuszczalne
9. chlorek żelaza(II); chlorek żelaza(III); siarczan(VI) miedzi(II); manganian(VII) potasu
10. Cu(OH)₂ — niebieski; Fe(OH)₃ — brunatny

### Ćwiczenia C

11. Ag⁺ + Cl⁻ → AgCl↓
12. Ma bardzo mały iloczyn rozpuszczalności; sieć krystaliczna jest bardzo trwała.
13. Format DOŚWIADCZENIE
14. HCl + NaOH; 2Na + Cl₂; Na₂CO₃ + 2HCl
15. CaCO₃ ma trudno rozpuszczalną sieć; Na₂CO₃ rozpuszcza się dzięki małemu kationowi Na⁺ i solwatacji.

### Ćwiczenia D

16. Hydroliza soli — reakcja jonów soli z wodą, zmieniająca pH.
17. CH₃COO⁻ jest sprzężoną zasadą słabego kwasu CH₃COOH; reaguje z wodą, tworząc OH⁻.
18. Kwaśne: NaHCO₃, NaHSO₄. Zasadowe: Ca(OH)Cl.
19. CuSO₄·5H₂O — 5 cząsteczek wody w sieci krystalicznej na 1 jednostkę CuSO₄.
20. NaCl — rozpuszczalny; AgCl, BaSO₄, CaCO₃ — nierozpuszczalne.

---

## 10. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to sól? | Kation metalu + anion reszty kwasowej |
| NaCl — nazwa | chlorek sodu |
| K₂SO₄ — nazwa | siarczan(VI) potasu |
| CaCO₃ — nazwa | węglan wapnia |
| Al(NO₃)₃ — nazwa | azotan(V) glinu |
| FeCl₂ — nazwa | chlorek żelaza(II) |
| FeCl₃ — nazwa | chlorek żelaza(III) |
| CuSO₄ — nazwa | siarczan(VI) miedzi(II) |
| KMnO₄ — nazwa | manganian(VII) potasu |
| Metody otrzymywania soli | kwas + wodorotlenek; kwas + metal; kwas + tlenek; sól + kwas; sól + zasada |
| Reakcja strąceniowa | powstaje osad |
| AgCl — kolor | biały |
| BaSO₄ — kolor | biały |
| PbI₂ — kolor | żółty |
| Cu(OH)₂ — kolor | niebieski |
| Fe(OH)₃ — kolor | brunatny |
| Sole zawsze rozpuszczalne | azotany(V), sole metali alkalicznych |
| Chlorki — wyjątki | AgCl, PbCl₂ |
| Siarczany — wyjątki | BaSO₄, PbSO₄, CaSO₄ (słabo) |
| Węglany — rozpuszczalne | tylko sole metali alkalicznych i NH₄⁺ |
| Hydrat CuSO₄ | CuSO₄·5H₂O (niebieski) |
| Zastosowanie NaHCO₃ | proszek do pieczenia, na zgagę |

---

## 11. TEST KOŃCOWY (L005)

1. Wzory: chlorek sodu, azotan(V) potasu, siarczan(VI) wapnia, węglan sodu.
2. Nazwy: NaCl, K₂SO₄, CaCO₃, Al(NO₃)₃.
3. Otrzymywanie NaCl (3 metody).
4. Reakcje strąceniowe: AgNO₃ + NaCl; BaCl₂ + Na₂SO₄; Pb(NO₃)₂ + KI.
5. Popraw: CaCl; AlSO₄; „wszystkie sole rozpuszczalne".
6. Które sole są rozpuszczalne: NaCl, CaCO₃, BaSO₄, KNO₃?
7. Jaki kolor ma osad Cu(OH)₂ i Fe(OH)₃?
8. (extra) Zapisz zapis jonowy AgNO₃ + NaCl.
9. (extra) Co to hydrat? Podaj przykład.

---

## 12. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Definicja | sól = kation metalu + anion reszty kwasowej |
| Nazwy | reszta + metal (z cyfrą rzymską, gdy trzeba) |
| Wzory | W–K–S–K + nawias |
| Otrzymywanie | 5 metod |
| Strącanie | reakcje z osadem |
| Rozpuszczalność | tabela + wyjątki |
| Kolory osadów | AgCl, BaSO₄, Cu(OH)₂, Fe(OH)₃ |
| Hydraty | CuSO₄·5H₂O, CaSO₄·2H₂O |
| Zastosowania | sól kuchenna, soda, gips, nawóz |

---

## 13. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 14. MAPA MYŚLI

```
SÓL
├── DEFINICJA (kation metalu + anion reszty kwasowej)
├── NAZWA (reszta + metal, cyfra rzymska gdy trzeba)
├── WZÓR (W–K–S–K + nawias)
├── OTRZYMYWANIE
│   ├── kwas + wodorotlenek (zobojętnianie)
│   ├── kwas + metal aktywny
│   ├── kwas + tlenek metalu
│   ├── kwas + sól (słabszy kwas/gaz)
│   ├── sól + zasada (strącanie)
│   ├── sól + sól (dwie nowe sole)
│   └── metal + niemetal
├── REAKCJE STRĄCENIOWE
│   ├── AgCl↓ biały
│   ├── BaSO₄↓ biały
│   ├── PbI₂↓ żółty
│   ├── Cu(OH)₂↓ niebieski
│   └── Fe(OH)₃↓ brunatny
├── ROZPUSZCZALNOŚĆ
│   ├── zawsze: azotany, metale alkaliczne
│   ├── chlorki (wyjątki: Ag, Pb)
│   ├── siarczany (wyjątki: Ba, Pb, Ca)
│   ├── węglany (rozpuszczalne: tylko metale alkaliczne)
│   └── wodorotlenki (rozpuszczalne: NaOH, KOH, Ba(OH)₂, Ca(OH)₂)
├── RODZAJE (obojętne, kwaśne, zasadowe, uwodnione)
└── ZASTOSOWANIA
```

---

## 15. CO DALEJ?

**L006 — Organika** : węglowodory, alkany, alkeny, alkiny.

Most: sole to produkt wszystkich reakcji kwasów z wodorotlenkami, metalami, tlenkami. To domknięcie chemii nieorganicznej.

**Most do L002/L003/L004:** tlenki + woda → kwasy/wodorotlenki; kwasy + wodorotlenki → sole.

---

## 16. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Sól | Związek z kationem metalu i anionem reszty kwasowej |
| Reakcja strąceniowa | Reakcja, w której powstaje trudno rozpuszczalny osad |
| Osad | Trudno rozpuszczalna substancja stała (↓) |
| Hydrat | Sól z cząsteczkami wody w sieci krystalicznej |
| Tabela rozpuszczalności | Zestawienie rozpuszczalności soli w wodzie |
| Jony widzowe | Jony niebiorące udziału w reakcji |
| Sól kwaśna | Sól z wodorem w reszcie kwasowej (np. NaHCO₃) |
| Sól zasadowa | Sól z grupą OH (np. Ca(OH)Cl) |

---

## 17. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: biały osad.  
Wniosek: powstaje AgCl (trudno rozpuszczalny).  
Nie: „Obserwacja: powstał AgCl".

---

## 18. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 7 (Klinika 2.0).

---

## 19. DODATEK E — WARSTWA EXTRA

### E.1. Hydroliza soli (rozszerzenie)

**Hydroliza** — reakcja jonów soli z wodą, zmieniająca pH roztworu.

**Sole mocnego kwasu i mocnej zasady** — nie hydrolizują; pH ≈ 7.
- NaCl → Na⁺ + Cl⁻ (jony nie reagują z wodą).

**Sole słabego kwasu i mocnej zasady** — hydroliza anionowa; pH > 7.
- CH₃COONa → CH₃COO⁻ + Na⁺; CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻
- Roztwór octanu sodu ma odczyn zasadowy.

**Sole mocnego kwasu i słabej zasady** — hydroliza kationowa; pH < 7.
- NH₄Cl → NH₄⁺ + Cl⁻; NH₄⁺ + H₂O ⇌ NH₄OH + H⁺
- Roztwór chlorku amonu ma odczyn kwasowy.

**Sole słabego kwasu i słabej zasady** — hydroliza obustronna; pH zależy od Kₐ i Kb.
- CH₃COONH₄ — pH ≈ 7.

### E.2. Iloczyn rozpuszczalności (rozszerzenie)

**Iloczyn rozpuszczalności Ksp** — iloczyn stężeń jonów w roztworze nasyconym (w danej temperaturze).

Dla AgCl: Ksp = [Ag⁺][Cl⁻] ≈ 1,8·10⁻¹⁰.

Im mniejsze Ksp, tym trudniej rozpuszczalny związek.
- AgCl: Ksp = 1,8·10⁻¹⁰
- BaSO₄: Ksp = 1,1·10⁻¹⁰
- CaCO₃: Ksp = 4,8·10⁻⁹

### E.3. Sole w przyrodzie

- **Halit (NaCl)** — sól kamienna.
- **Kalcyt, marmur, kreda (CaCO₃)** — skały wapienne.
- **Gips (CaSO₄·2H₂O)** — skały gipsowe.
- **Dolomit (CaCO₃·MgCO₃)** — skały.
- **Malachit (Cu₂CO₃(OH)₂)** — ruda miedzi.
- **Sól gorzka (MgSO₄·7H₂O)** — minerał.
- **Sól kamienna (NaCl)** — ewaporaty.

### E.4. Sole w organizmach żywych

- **NaCl** — płyny ustrojowe (osocze, płyn międzykomórkowy).
- **CaCO₃** — kości, zęby, muszle, skorupy.
- **Ca₃(PO₄)₂** — kości, zęby.
- **FeSO₄** — hemoglobina (Fe).
- **MgSO₄** — enzymy.
- **KCl** — potas w komórkach.

### E.5. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L005 na ≥ 80%),
- gdy chcesz zrozumieć iloczyn rozpuszczalności i hydrolizę,
- gdy interesuje cię analiza jakościowa.

L013 zawiera: iloczyn rozpuszczalności, hydrolizę, analizę jakościową, miareczkowanie.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Sól | Związek z kationem metalu i anionem reszty kwasowej. |
| Reakcja strąceniowa | Reakcja, w której powstaje osad. |
| Osad | Trudno rozpuszczalna substancja stała. |
| Hydrat | Sól zawierająca cząsteczki wody w sieci krystalicznej. |
| Tabela rozpuszczalności | Zestawienie, które sole są rozpuszczalne. |
| Jony widzowe | Jony niebiorące udziału w reakcji. |
| Hydroliza soli | Reakcja jonów soli z wodą zmieniająca pH. |

---

## 21. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 22. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
SOLE
Definicja: kation metalu + anion reszty kwasowej

WZORY:
NaCl, CaCl₂, AlCl₃, K₂SO₄, Ca(NO₃)₂, Al₂(SO₄)₃,
Ca₃(PO₄)₂, FeCl₂, FeCl₃, CuSO₄, KMnO₄

NAZWY (reszta + metal):
NaCl — chlorek sodu
K₂SO₄ — siarczan(VI) potasu
CaCO₃ — węglan wapnia
FeCl₃ — chlorek żelaza(III)

OTRZYMYWANIE:
- kwas + wodorotlenek → sól + H₂O (zobojętnianie)
- kwas + metal → sól + H₂
- kwas + tlenek metalu → sól + H₂O
- kwas + sól → nowy kwas + nowa sól
- sól + zasada → wodorotlenek↓ + sól
- sól + sól → dwie nowe sole (osad)

REAKCJE STRĄCENIOWE:
AgCl↓ biały
BaSO₄↓ biały
PbI₂↓ żółty
Cu(OH)₂↓ niebieski
Fe(OH)₃↓ brunatny
CaCO₃↓ biały

ROZPUSZCZALNOŚĆ:
- zawsze: azotany(V), metale alkaliczne (Li, Na, K)
- chlorki (wyjątki: AgCl, PbCl₂)
- siarczany (wyjątki: BaSO₄, PbSO₄, CaSO₄)
- węglany (rozpuszczalne: tylko metale alkaliczne)
- wodorotlenki (rozpuszczalne: NaOH, KOH, Ba(OH)₂, Ca(OH)₂)

HYDRATY:
CuSO₄·5H₂O — niebieski
CaSO₄·2H₂O — gips

PUŁAPKI:
- CaCl → CaCl₂
- AlSO₄ → Al₂(SO₄)₃
- CaNO₃ → Ca(NO₃)₂
- „wszystkie sole rozpuszczalne" → fałsz
- BaSO₄, AgCl, CaCO₃ — nierozpuszczalne
```

---

## 23. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, ŚCIĄGĘ rozbudowaną, DOŚWIADCZENIA (4), ZASTOSOWANIA, KLINIKĘ 2.0 (5 przykładów), ĆWICZENIA A/B/C/D, Interleaving, Drabinkę, Fiszki 22, System powtórek, Mapę myśli, SŁOWNIK, DODATKI C/D/E, Definicje, 10 zasad, Szybką ściągę, STATUS.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L005 MASTER v1.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L005)

Sole — nazwa, wzór, strącanie, zobojętnianie.

### Ściąga 80/20
- Sól = metal (lub NH₄⁺) + reszta kwasowa: NaCl, CaCO₃, CuSO₄, NH₄NO₃.
- Zobojętnianie: kwas + wodorotlenek → sól + woda.
- Strącanie: dwie sole rozpuszczalne → osad słabo rozpuszczalnej (tabela szkolna).
- Nie zmieniaj indeksów „na czuja” — najpierw wartościowości z L001.
- Osad ≠ każda sól; wiele soli jest dobrze rozpuszczalnych (NaCl).

### Kolory / osady (przypomnienie, nie nowa teoria)
AgCl — biały; Cu(OH)₂ — niebieski; typowe pary z lekcji.

### 6 zadań extra
1. Nazwij Na₂SO₄ i napisz, z jakiego kwasu reszta.  
2. NaOH + HNO₃ → ?  
3. AgNO₃ + NaCl → ? (osad?)  
4. Wzór chlorku wapnia.  
5. Czy KNO₃ zwykle strącamy jako osad w wodzie (model szkolny)?  
6. Jednym zdaniem: po co tabela rozpuszczalności.

Szkic: 1 siarczan(VI) sodu; H₂SO₄. 2 NaNO₃ + H₂O. 3 AgCl↓ + NaNO₃. 4 CaCl₂. 5 nie — dobrze rozpuszczalny. 6 przewidzieć, czy będzie osad.

### Status doklejki
2026-09-12 · sekcje 1–23 bez zmian.



---

## UZUPEŁNIENIE wizualne L005 (audyt plus.md — doklejone)

### Rozpuszczalność — skrót szkolny

Zawsze rozpuszczalne (model): azotany(V); sole Na⁺, K⁺, NH₄⁺.  
Cl⁻ nierozpuszczalne typowo: AgCl (PbCl₂ słabo).  
SO₄²⁻ nierozpuszczalne typowo: BaSO₄, PbSO₄.  
CO₃²⁻ i wiele OH⁻ — słabo, poza alkalicznymi / Ca(OH)₂, Ba(OH)₂ (szkolna tabela).

### Strącanie (schemat)

AgNO₃ + NaCl → AgCl↓ + NaNO₃  
Osad, gdy jony tworzą sól słabo rozpuszczalną (Ksp — extra).

### Sole w zastosowaniach

NaCl, Na₂CO₃ (szkło), CaCO₃ (cement), CaSO₄·2H₂O (gips), NaHCO₃, KNO₃ (nawozy).



---

## DOPRECYZOWANIA I CIEKAWOSTKI L005 (przegląd mer. — doklejone)

Sól = kation metalu **lub NH₄⁺** + reszta kwasowa. Bywają obojętne, kwaśne (NaHCO₃), zasadowe, hydraty.  
Osad = sól **słabo rozpuszczalna** (Ksp extra).  
Otrzymywanie extra: 2 Na + Cl₂ → 2 NaCl.

### Ciekawostki
- Sól konserwuje — osmoza, odwadnianie drobnoustrojów.
- Sól na drogach — obniżenie T krzepnięcia (działa do ok. −10 °C, nie w dowolny mróz).
- Gips: hydrat i twardnienie zaprawy.
- CuSO₄·5H₂O niebieski, bezwodny prawie biały — woda w sieci zmienia barwę Cu²⁺.
- Srebro ciemnieje: Ag₂S z H₂S.

<!-- ==================== END L005 ==================== -->

<!-- ==================== BEGIN L006 ==================== -->

# LEKCJA L006 — ORGANIKA: WĘGLOWODORY

# CHEMIA: PODSTAWA PLUS

## L006 — Węglowodory

**Alkany · alkeny · alkiny · spalanie · izomeria · nazewnictwo**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002–L005 MASTER  
Poprzednia lekcja: L005 (sole) · Następna: L007 (biochemia)

**Kolejność:** definicja węglowodoru → alkany → alkeny → alkiny → nazewnictwo → izomeria → spalanie → zastosowania

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L006 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj wzory: „C-dwa-H-sześć".
5. **Rysuj.** Wzory strukturalne, łańcuchy, izomery.
6. **Łap moment „aha!".**

**Zasada 80/20:** alkany (metan, etan, propan, butan) · alkeny (eten) · alkiny (etyn) · spalanie · nazewnictwo.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. Węgiel jest czterowartościowy — zawsze 4 wiązania  
2. Alkany: wiązania pojedyncze (−an)  
3. Alkeny: jedno wiązanie podwójne (−en)  
4. Alkiny: jedno wiązanie potrójne (−in)  
5. Spalanie całkowite: + O₂ → CO₂ + H₂O  
6. Spalanie niecałkowite: + O₂ → CO + C + H₂O  

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- Wartościowość węgla = IV
- Wiązania kowalencyjne

Z L002–L005:
- Tlenki (CO₂, CO)
- Woda (H₂O)
- Reakcje spalania

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zdefiniować węglowodór,
- rozpoznać alkany, alkeny, alkiny,
- zapisać wzory sumaryczne, strukturalne i półstrukturalne,
- nazwać pierwsze węglowodory z szeregu homologicznego,
- napisać reakcje spalania całkowitego i niecałkowitego,
- (ambitny) rozpoznać izomery,
- (zaawansowany) znać pojęcie szeregu homologicznego i rzędowości atomu węgla.

---

## 2. ŚCIĄGA

### Definicja

**Węglowodór** — związek organiczny zbudowany wyłącznie z atomów węgla (C) i wodoru (H).

**Węgiel jest czterowartościowy** — zawsze tworzy 4 wiązania.

**Szereg homologiczny** — szereg związków o podobnej budowie, różniących się o grupę CH₂.

### Podział węglowodorów

| Typ | Wiązania | Końcówka | Przykład |
|-----|----------|----------|----------|
| **Alkany** | pojedyncze (nasycone) | -an | metan CH₄ |
| **Alkeny** | jedno podwójne | -en | eten C₂H₄ |
| **Alkiny** | jedno potrójne | -in | etyn C₂H₂ |
| **Areny** | pierścień aromatyczny | — | benzen C₆H₆ |

### Alkany (CₙH₂ₙ₊₂)

| n | Wzór sumaryczny | Nazwa | Wzór strukturalny (skrót) |
|---|-----------------|-------|---------------------------|
| 1 | CH₄ | metan | CH₄ |
| 2 | C₂H₆ | etan | CH₃–CH₃ |
| 3 | C₃H₈ | propan | CH₃–CH₂–CH₃ |
| 4 | C₄H₁₀ | butan | CH₃–CH₂–CH₂–CH₃ |
| 5 | C₅H₁₂ | pentan | CH₃–(CH₂)₃–CH₃ |
| 6 | C₆H₁₄ | heksan | CH₃–(CH₂)₄–CH₃ |
| 7 | C₇H₁₆ | heptan | CH₃–(CH₂)₅–CH₃ |
| 8 | C₈H₁₈ | oktan | CH₃–(CH₂)₆–CH₃ |
| 9 | C₉H₂₀ | nonan | CH₃–(CH₂)₇–CH₃ |
| 10 | C₁₀H₂₂ | dekan | CH₃–(CH₂)₈–CH₃ |

**Reguła:** alkany mają wzór ogólny **CₙH₂ₙ₊₂**.

**Nazwy pierwszych 10 alkanów (mnemotechnika):**
Metan, Etan, Propan, Butan, Pentan, Heksan, Heptan, Oktan, Nonan, Dekan.
(Mnemotechnika: „Me-e-Pi-Bu-Pe-He-He-Ok-No-De".)

### Alkeny (CₙH₂ₙ)

| n | Wzór | Nazwa | Wzór strukturalny |
|---|------|-------|-------------------|
| 2 | C₂H₄ | eten | CH₂=CH₂ |
| 3 | C₃H₆ | propen | CH₂=CH–CH₃ |
| 4 | C₄H₈ | buten | CH₂=CH–CH₂–CH₃ |
| 5 | C₅H₁₀ | penten | CH₂=CH–(CH₂)₂–CH₃ |

**Reguła:** alkeny mają wzór ogólny **CₙH₂ₙ** (n ≥ 2).

### Alkiny (CₙH₂ₙ₋₂)

| n | Wzór | Nazwa | Wzór strukturalny |
|---|------|-------|-------------------|
| 2 | C₂H₂ | etyn (acetylen) | CH≡CH |
| 3 | C₃H₄ | propyn | CH≡C–CH₃ |
| 4 | C₄H₆ | butyn | CH≡C–CH₂–CH₃ |
| 5 | C₅H₈ | pentyn | CH≡C–(CH₂)₂–CH₃ |

**Reguła:** alkiny mają wzór ogólny **CₙH₂ₙ₋₂** (n ≥ 2).

### Nazewnictwo

**Reguła:**
1. Policz atomy węgla w najdłuższym łańcuchu.
2. Wybierz przedrostek liczbowy (met-, et-, prop-, but-, pent-…).
3. Dodaj końcówkę w zależności od typu wiązania:
   - **-an** — alkany
   - **-en** — alkeny
   - **-in** — alkiny

**Przykłady:**
- CH₄ — metan
- C₂H₆ — etan
- C₂H₄ — eten
- C₂H₂ — etyn
- C₃H₈ — propan
- C₃H₆ — propen
- C₃H₄ — propyn

**Uwaga o numeracji:** w alkenach i alkinach numerujemy od końca bliższego wiązaniu wielokrotnemu.
- CH₂=CH–CH₃ — propen (wiązanie między C1 i C2)
- CH₃–CH=CH₂ — propen (wiązanie między C2 i C3; numeracja od C1 — tu wiązanie na końcu)

### Izomeria

**Izomery** — związki o tym samym wzorze sumarycznym, ale różnej budowie.

**Przykład:** C₄H₁₀
- butan: CH₃–CH₂–CH₂–CH₃
- izobutan (2-metylopropan): CH(CH₃)₃

**Przykład:** C₅H₁₂ ma 3 izomery:
- pentan (łańcuch prosty)
- 2-metylobutan (izopentan)
- 2,2-dimetylopropan (neopentan)

**Ważne:** im więcej atomów węgla, tym więcej izomerów.

### Rzędowość atomu węgla (rozszerzenie)

- **I rzędowy** — węgiel połączony z 1 innym węglem.
- **II rzędowy** — połączony z 2.
- **III rzędowy** — połączony z 3.
- **IV rzędowy** — połączony z 4.

**Przykład:**
CH₃–CH₂–CH₂–CH₃ (butan)
- C1 i C4 — I rzędowe
- C2 i C3 — II rzędowe

### Właściwości fizyczne

| n | Stan (25°C) | Przykład |
|---|-------------|----------|
| 1–4 | gaz | metan, etan, propan, butan |
| 5–15 | ciecz | pentan, heksan, oktan, nonan |
| 16+ | ciało stałe | parafina, woski |

**Rozpuszczalność:** węglowodory nie rozpuszczają się w wodzie (hydrofobowe); rozpuszczają się w rozpuszczalnikach organicznych.

### Spalanie

**Spalanie całkowite (nadmiar O₂):**
- Węglowodór + O₂ → CO₂ + H₂O

Przykłady:
- CH₄ + 2O₂ → CO₂ + 2H₂O
- C₂H₆ + 3,5O₂ → 2CO₂ + 3H₂O (lub 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O)
- C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
- C₂H₄ + 3O₂ → 2CO₂ + 2H₂O
- C₂H₂ + 2,5O₂ → 2CO₂ + H₂O (lub 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O)

**Spalanie niecałkowite (niedobór O₂):**
- Węglowodór + O₂ → CO + C + H₂O

Przykłady:
- 2CH₄ + 3O₂ → 2CO + 4H₂O (niedobór O₂)
- CH₄ + O₂ → C + 2H₂O (bardzo mało O₂)

**Uwaga:** spalanie niecałkowite jest niebezpieczne — powstaje czad (CO), który jest trujący.

### Reakcje charakterystyczne

**Alkany:**
- Spalanie
- Substytucja (z Cl₂, Br₂ — pod wpływem światła)
- CH₄ + Cl₂ →(hν) CH₃Cl + HCl

**Alkeny:**
- Spalanie
- Addycja (przyłączenie H₂, Cl₂, Br₂, HCl, H₂O)
- CH₂=CH₂ + H₂ →(kat.) CH₃–CH₃
- CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (odbarwienie wody bromowej — próba na alkeny)
- CH₂=CH₂ + H₂O →(kat.) CH₃CH₂OH (etanol)

**Alkiny:**
- Spalanie
- Addycja (podobnie jak alkeny, ale 2 cząsteczki)
- CH≡CH + 2H₂ →(kat.) CH₃–CH₃
- CH≡CH + 2Br₂ → CHBr₂–CHBr₂

### Zastosowania

| Węglowodór | Zastosowanie |
|------------|--------------|
| Metan CH₄ | gaz ziemny, ogrzewanie, gotowanie |
| Etan C₂H₆ | gaz ziemny, przemysł |
| Propan C₃H₈ | gaz LPG (butla gazowa) |
| Butan C₄H₁₀ | gaz LPG, zapalniczki |
| Eten C₂H₄ | produkcja polietylenu, dojrzewanie owoców |
| Etyn C₂H₂ | spawanie (acetylen), palnik |
| Benzen C₆H₆ | przemysł chemiczny, rozpuszczalnik |
| Oktan C₈H₁₈ | benzyna |

### Węglowodory nasycone vs nienasycone

| Cecha | Nasycone (alkany) | Nienasycone (alkeny, alkiny) |
|-------|--------------------|-------------------------------|
| Wiązania | tylko pojedyncze | zawierają podwójne/potrójne |
| Reaktywność | mało reaktywne | bardziej reaktywne |
| Typowe reakcje | spalanie, substytucja | spalanie, addycja |
| Próba | — | odbarwienie wody bromowej (alkeny) |

**Woda bromowa** — roztwór Br₂ w wodzie; odbarwia się pod wpływem alkenów/alkinów (addycja bromu).

### BHP

- Gaz ziemny i LPG są łatwopalne i wybuchowe.
- W pomieszczeniach z gazem — nie używać otwartego ognia.
- Nie wdychać gazów.
- Spalanie niecałkowite → czad (CO) — czujnik CO w domu.

---

## 3. WZORY — PRZYPOMNIENIE (z L001)

**Wzór sumaryczny:** pokazuje liczbę atomów (np. C₂H₆).
**Wzór strukturalny:** pokazuje połączenia między atomami (np. CH₃–CH₃).
**Wzór półstrukturalny:** skrócona forma strukturalnego (np. CH₃CH₂CH₃).

**Przykład dla propanu C₃H₈:**
- sumaryczny: C₃H₈
- strukturalny: H–C(–H)(–H)–C(–H)(–H)–C(–H)(–H)–H (lub kreskowy)
- półstrukturalny: CH₃–CH₂–CH₃

**Wiązania:**
- pojedyncze: –
- podwójne: =
- potrójne: ≡

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Spalanie metanu

**Problem:** Co powstaje podczas spalania metanu?  
**Hipoteza:** CO₂ i H₂O (spalanie całkowite).  
**Sprzęt:** palnik gazowy, woda wapienna, zimna powierzchnia (szklana).  
**Obserwacja:** na zimnej powierzchni — krople wody; woda wapienna mętnieje.  
**Wniosek:** CH₄ + 2O₂ → CO₂ + 2H₂O.  
**Równanie:** CH₄ + 2O₂ → CO₂ + 2H₂O  
**BHP:** nie zostawiać otwartego ognia; wentylacja.

### Doświadczenie 2: Odbarwienie wody bromowej przez eten

**Problem:** Jak odróżnić alken od alkanu?  
**Hipoteza:** Eten odbarwia wodę bromową.  
**Sprzęt:** eten (lub etylen z dojrzewających owoców), woda bromowa, probówka.  
**Obserwacja:** woda bromowa (pomarańczowa) odbarwia się.  
**Wniosek:** Eten ulega addycji bromu; alkany nie odbarwiają wody bromowej.  
**Równanie:** CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br  
**BHP:** brom jest żrący; okulary, rękawice.

### Doświadczenie 3: Spalanie niecałkowite

**Problem:** Co powstaje przy niedoborze tlenu?  
**Hipoteza:** CO i C (sadza).  
**Sprzęt:** palnik, szklana płytka.  
**Obserwacja:** czarny osad (sadza) na płytce.  
**Wniosek:** Niedobór O₂ → spalanie niecałkowite → CO + C + H₂O.  
**Równanie (przykład):** 2CH₄ + 3O₂ → 2CO + 4H₂O  
**BHP:** czad (CO) jest trujący; wentylacja; czujnik CO.

**Obserwacja ≠ wniosek:**
- Obserwacja: czarny osad.
- Wniosek: powstaje sadza (C) — spalanie niecałkowite.
- Nie: „Obserwacja: powstaje C" — to już wniosek.

---

## 5. ZASTOSOWANIA — WĘGLOWODORY W ŻYCIU CODZIENNYM

| Węglowodór | Gdzie spotykasz |
|------------|-----------------|
| Metan CH₄ | gaz ziemny (kuchenka, ogrzewanie) |
| Propan/butan | gaz LPG (butla gazowa, zapalniczka) |
| Eten C₂H₄ | dojrzewanie owoców, produkcja plastiku |
| Etyn C₂H₂ | spawanie, cięcie metali |
| Benzen C₆H₆ | przemysł chemiczny (rozpuszczalnik) |
| Benzyna (oktan C₈H₁₈) | paliwo samochodowe |
| Nafta | paliwo, przemysł |
| Olej napędowy | paliwo |
| Parafina | świece |
| Asfalt | drogi |

---

## 6. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawnie | Reguła |
|-------------|-----------|--------|
| „metan to C₂H₆" | CH₄ | metan = 1 atom C |
| „propan to C₂H₆" | C₃H₈ | propan = 3 atomy C |
| C₃H₆ → alken? | tak — propen | CₙH₂ₙ → alken |
| C₃H₈ → alken? | nie — propan (alkan) | CₙH₂ₙ₊₂ → alkan |
| „spalanie zawsze daje CO₂" | tylko całkowite; niecałkowite → CO + C | spalanie |
| CH₄ + O₂ → CO₂ + H₂O | CH₄ + 2O₂ → CO₂ + 2H₂O | bilans |
| „alkany i alkeny to samo" | alkany — pojedyncze; alkeny — podwójne | różne |
| „węglowodory rozpuszczają się w wodzie" | nie rozpuszczają się | hydrofobowe |
| „benzen to alken" | benzen to aren (aromatyczny) | inny typ |
| „C₂H₂ to eten" | C₂H₂ to etyn | eten to C₂H₄ |

### Klinika 2.0 — przykład 1

**Błąd:** CH₄ + O₂ → CO₂ + H₂O

- **Znajdź:** Brak bilansu.
- **Popraw:** CH₄ + 2O₂ → CO₂ + 2H₂O.
- **Reguła:** W–K–S–K + bilans.
- **Dlaczego:** 1 C, 4 H po lewej; 1 C, 2 H po prawej → potrzeba 2 H₂O; wtedy 4 O po prawej → 2 O₂ po lewej.
- **Zadanie podobne:** Zbilansuj spalanie etanu.
- **Zadanie z pułapką:** Zbilansuj spalanie propanu. (Odp.: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.)

### Klinika 2.0 — przykład 2

**Błąd:** „C₃H₆ to propan."

- **Znajdź:** Zła nazwa.
- **Popraw:** C₃H₆ to propen (alken).
- **Reguła:** CₙH₂ₙ₊₂ → alkan; CₙH₂ₙ → alken; CₙH₂ₙ₋₂ → alkin.
- **Dlaczego:** C₃H₆ = 3·2 = 6 → CₙH₂ₙ → alken.
- **Zadanie podobne:** C₂H₄ — nazwa? (Odp.: eten.)
- **Zadanie z pułapką:** C₂H₂ — nazwa? (Odp.: etyn.)

### Klinika 2.0 — przykład 3

**Błąd:** „Spalanie zawsze daje CO₂ i H₂O."

- **Znajdź:** Uproszczenie.
- **Popraw:** Spalanie całkowite (nadmiar O₂) → CO₂ + H₂O; spalanie niecałkowite (niedobór) → CO + C + H₂O.
- **Reguła:** Zależy od ilości tlenu.
- **Dlaczego:** Przy niedoborze O₂ węgiel nie utlenia się całkowicie.
- **Zadanie podobne:** Co powstaje przy niedoborze O₂? (Odp.: CO, C, H₂O.)
- **Zadanie z pułapką:** Czy czad (CO) powstaje przy spalaniu całkowitym? (Odp.: Nie.)

### Klinika 2.0 — przykład 4

**Błąd:** „Alkeny odbarwiają wodę wapienną."

- **Znajdź:** Zły odczynnik.
- **Popraw:** Alkeny odbarwiają **wodę bromową** (nie wapienną).
- **Reguła:** Woda bromowa — próba na wiązanie wielokrotne; woda wapienna — próba na CO₂.
- **Dlaczego:** Br₂ przyłącza się do wiązania podwójnego.
- **Zadanie podobne:** Jak odróżnić alken od alkanu? (Odp.: Woda bromowa.)
- **Zadanie z pułapką:** Czy eten odbarwia wodę wapienną? (Odp.: Nie — tylko wodę bromową.)

### Klinika 2.0 — przykład 5

**Błąd:** „Węglowodory rozpuszczają się w wodzie."

- **Znajdź:** Brak informacji o właściwościach.
- **Popraw:** Węglowodory są hydrofobowe — nie rozpuszczają się w wodzie.
- **Reguła:** Węglowodory — niepolarne; woda — polarna; „podobne rozpuszcza się w podobnym".
- **Dlaczego:** Brak oddziaływań między cząsteczkami niepolarnymi a polarnymi wodą.
- **Zadanie podobne:** Czy metan rozpuszcza się w wodzie? (Odp.: Nie.)
- **Zadanie z pułapką:** Czy etanol rozpuszcza się w wodzie? (Odp.: Tak — ma grupę OH.)

---

## 7. ĆWICZENIA

### 7.1. Mini-check (5 pytań)

1. Co to węglowodór?
2. Jaki jest wzór ogólny alkanów?
3. Jaki jest wzór ogólny alkenów?
4. Co powstaje ze spalania całkowitego?
5. Co to izomer?

### 7.2. Ćwiczenie prowadzone

**Dane:** C₃H₈ (propan).

**Krok 1.** 3 atomy C → przedrostek „prop-".
**Krok 2.** Wzór CₙH₂ₙ₊₂ (3·2+2 = 8) → alkan → „-an".
**Krok 3.** Nazwa: propan.
**Krok 4.** Spalanie całkowite: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.

**Spróbuj sam:** C₄H₁₀ — nazwa, typ, spalanie.

### 7.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Wzory sumaryczne: metan, etan, propan, butan.
2. Nazwy: CH₄, C₂H₆, C₃H₈, C₄H₁₀.
3. Wzór alkenu z 2 atomami C?
4. Wzór alkinu z 2 atomami C?
5. Co powstaje ze spalania całkowitego metanu?
6. Podaj 2 zastosowania metanu.

**B. Trening**

7. Zbilansuj spalanie: CH₄, C₂H₆, C₃H₈.
8. Nazwij: C₂H₄, C₂H₂, C₃H₆, C₃H₄.
9. Popraw: „C₃H₆ to propan".
10. Dlaczego alkeny odbarwiają wodę bromową, a alkany nie?
11. Uzupełnij: CH₂=CH₂ + Br₂ → ? ; CH≡CH + 2H₂ → ?

**C. Ambitne**

12. Narysuj izomery C₄H₁₀.
13. Narysuj izomery C₅H₁₂ (3 izomery).
14. Wyjaśnij, dlaczego alkeny są bardziej reaktywne od alkanów.
15. Zaprojektuj doświadczenie: odróżnienie alkanu od alkenu (format DOŚWIADCZENIE).

**D. Zaawansowane**

16. Co to szereg homologiczny? Podaj przykład.
17. Określ rzędowość atomów węgla w 2-metylopropanie.
18. Napisz reakcję addycji wody do etenu (produkt: etanol).
19. Porównaj spalanie całkowite i niecałkowite.
20. Wyjaśnij, dlaczego LPG (propan-butan) jest gazem, a benzyna (oktan) cieczą.

### 7.4. Interleaving (przeplatany)

1. Jaki charakter ma CO₂? (z L002)
2. Zapisz wzór kwasu węglowego. (z L004)
3. Zapisz wzór węglanu wapnia. (z L005)
4. Zbilansuj: C + O₂ → CO₂. (z L002)
5. CH₄ + 2O₂ → ? (z L006)
6. Ile elektronów ma jon C⁴⁻? (z L001)
7. CO₂ + Ca(OH)₂ → ? (z L002 + L005)
8. CH₂=CH₂ + H₂ → ? (z L006)

### 7.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to węglowodór? |
| ZASTOSUJ | Zapisz wzór propanu. |
| WYJAŚNIJ | Dlaczego alkeny są bardziej reaktywne? |
| ODKRYJ | Jaki typ węglowodoru to C₄H₈? |
| POŁĄCZ | Połącz spalanie z tlenkami. |
| ZAKWESTIONUJ | Czy spalanie zawsze daje CO₂? |

---

## 8. ODPOWIEDZI

### Mini-check

1. Związek z C i H.
2. CₙH₂ₙ₊₂.
3. CₙH₂ₙ.
4. CO₂ i H₂O.
5. Związki o tym samym wzorze sumarycznym, różnej budowie.

### Ćwiczenia A

1. CH₄, C₂H₆, C₃H₈, C₄H₁₀
2. metan, etan, propan, butan
3. C₂H₄ (eten)
4. C₂H₂ (etyn)
5. CO₂ + H₂O
6. ogrzewanie, gotowanie

### Ćwiczenia B

7. CH₄ + 2O₂ → CO₂ + 2H₂O; 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O; C₃H₈ + 5O₂ → 3CO₂ + 4H₂O
8. eten, etyn, propen, propyn
9. C₃H₆ to propen
10. Alkeny mają wiązanie podwójne → addycja Br₂; alkany — brak
11. CH₂Br–CH₂Br; CH₃–CH₃

### Ćwiczenia C

12. butan + izobutan
13. pentan, 2-metylobutan, 2,2-dimetylopropan
14. Wiązanie podwójne jest słabsze niż pojedyncze → łatwiej ulega addycji
15. Format DOŚWIADCZENIE

### Ćwiczenia D

16. Szereg związków o podobnej budowie, różniących się o CH₂ (np. CH₄, C₂H₆, C₃H₈)
17. C1, C3 — I rzędowe; C2 — III rzędowy
18. CH₂=CH₂ + H₂O → CH₃CH₂OH
19. Całkowite: CO₂ + H₂O; niecałkowite: CO + C + H₂O
20. Propan/butan — małe cząsteczki, słabe oddziaływania międzycząsteczkowe → gaz; oktan — dłuższy łańcuch, silniejsze oddziaływania → ciecz

---

## 9. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to węglowodór? | Związek z C i H |
| Metan — wzór | CH₄ |
| Etan — wzór | C₂H₆ |
| Propan — wzór | C₃H₈ |
| Butan — wzór | C₄H₁₀ |
| Eten — wzór | C₂H₄ |
| Etyn — wzór | C₂H₂ |
| Wzór ogólny alkanów | CₙH₂ₙ₊₂ |
| Wzór ogólny alkenów | CₙH₂ₙ |
| Wzór ogólny alkinów | CₙH₂ₙ₋₂ |
| Spalanie całkowite | CO₂ + H₂O |
| Spalanie niecałkowite | CO + C + H₂O |
| Próba na alkeny | Woda bromowa (odbarwienie) |
| Izomery | Ten sam wzór sumaryczny, różna budowa |
| Reakcja addycji | Przyłączenie (np. H₂, Br₂) |
| Reakcja substytucji | Wymiana atomu (np. CH₄ + Cl₂) |
| Szereg homologiczny | Różnica CH₂ |
| Węglowodory nasycone | Alkany |
| Węglowodory nienasycone | Alkeny, alkiny |
| Zastosowanie etenu | Produkcja polietylenu |
| Zastosowanie etynu | Spawanie |
| Czad | CO — trujący |

---

## 10. TEST KOŃCOWY (L006)

1. Wzory: metan, etan, propan, butan.
2. Nazwy: CH₄, C₂H₄, C₂H₂, C₃H₈.
3. Wzór ogólny alkanów, alkenów, alkinów.
4. Zbilansuj spalanie: CH₄ + O₂; C₃H₈ + O₂.
5. Popraw: „C₃H₆ to propan"; „spalanie zawsze daje CO₂".
6. Podaj 2 izomery C₄H₁₀.
7. Jak odróżnić alken od alkanu?
8. (extra) Co to szereg homologiczny?
9. (extra) Napisz reakcję addycji H₂ do etenu.

---

## 11. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Definicja | węglowodór = C + H |
| Alkany | CₙH₂ₙ₊₂, końcówka -an |
| Alkeny | CₙH₂ₙ, końcówka -en |
| Alkiny | CₙH₂ₙ₋₂, końcówka -in |
| Nazwy | met-, et-, prop-, but-, pent-… |
| Spalanie | całkowite vs niecałkowite |
| Próba | woda bromowa |
| Izomery | ten sam wzór, różna budowa |
| Zastosowania | gaz ziemny, LPG, spawanie |

---

## 12. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 13. MAPA MYŚLI

```
WĘGLOWODORY
├── ALKANY (CₙH₂ₙ₊₂)
│   ├── metan, etan, propan, butan
│   ├── reakcje: spalanie, substytucja
│   └── zastosowanie: gaz ziemny, LPG
├── ALKENY (CₙH₂ₙ)
│   ├── eten, propen, buten
│   ├── reakcje: spalanie, addycja
│   └── próba: woda bromowa
├── ALKINY (CₙH₂ₙ₋₂)
│   ├── etyn, propyn
│   ├── reakcje: spalanie, addycja (2×)
│   └── zastosowanie: spawanie
├── ARENY
│   └── benzen C₆H₆
├── SPALANIE
│   ├── całkowite: CO₂ + H₂O
│   └── niecałkowite: CO + C + H₂O
├── IZOMERIA
│   └── ten sam wzór, różna budowa
└── ZASTOSOWANIA
```

---

## 14. CO DALEJ?

**L007 — Biochemia** : tłuszcze, cukry, białka.

Most: węglowodory to podstawa chemii organicznej; biochemia to związki organiczne w organizmach.

**Most do L002/L004/L005:** spalanie węglowodorów → CO₂ i H₂O; CO₂ reaguje z wodą wapienną.

---

## 15. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Węglowodór | Związek z C i H |
| Alkan | Węglowodór nasycony (pojedyncze wiązania) |
| Alken | Węglowodór z jednym wiązaniem podwójnym |
| Alkin | Węglowodór z jednym wiązaniem potrójnym |
| Aren | Węglowodór aromatyczny (benzen) |
| Szereg homologiczny | Szereg związków różniących się o CH₂ |
| Izomer | Ten sam wzór sumaryczny, różna budowa |
| Spalanie całkowite | Nadmiar O₂ → CO₂ + H₂O |
| Spalanie niecałkowite | Niedobór O₂ → CO + C + H₂O |
| Woda bromowa | Roztwór Br₂ — próba na wiązanie wielokrotne |
| Addycja | Przyłączenie cząsteczki do wiązania wielokrotnego |
| Substytucja | Wymiana atomu (np. H na Cl) |
| Czad | CO — trujący gaz |

---

## 16. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: czarny osad.  
Wniosek: powstaje sadza (C) — spalanie niecałkowite.  
Nie: „Obserwacja: powstaje C".

---

## 17. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 6 (Klinika 2.0).

---

## 18. DODATEK E — WARSTWA EXTRA

### E.1. Szereg homologiczny i rzędowość

**Szereg homologiczny** — grupa związków o podobnej budowie, różniących się o grupę CH₂.

- Alkany: CH₄, C₂H₆, C₃H₈, C₄H₁₀…
- Alkeny: C₂H₄, C₃H₆, C₄H₈…
- Alkiny: C₂H₂, C₃H₄, C₄H₆…

**Rzędowość atomu węgla:**
- I rzędowy — połączony z 1 C
- II rzędowy — z 2 C
- III rzędowy — z 3 C
- IV rzędowy — z 4 C

### E.2. Izomeria — więcej przykładów

**C₄H₁₀:**
- butan: CH₃–CH₂–CH₂–CH₃
- 2-metylopropan: CH(CH₃)₃

**C₅H₁₂:**
- pentan: CH₃–CH₂–CH₂–CH₂–CH₃
- 2-metylobutan: CH₃–CH(CH₃)–CH₂–CH₃
- 2,2-dimetylopropan: C(CH₃)₄

**C₆H₁₄:** 5 izomerów.

### E.3. Węglowodory nienasycone — addycja

**Addycja wodoru (hydrogenacja):**
- CH₂=CH₂ + H₂ →(kat. Ni) CH₃–CH₃
- CH≡CH + 2H₂ →(kat. Ni) CH₃–CH₃

**Addycja bromu:**
- CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (odbarwienie wody bromowej)

**Addycja wody:**
- CH₂=CH₂ + H₂O →(kat.) CH₃CH₂OH (etanol)

**Addycja chlorowodoru:**
- CH₂=CH₂ + HCl → CH₃CH₂Cl (chloroetan)

### E.4. Węglowodory w przemyśle

- **Ropa naftowa** — mieszanina węglowodorów; destylacja frakcyjna → benzyna, nafta, olej napędowy, mazut, asfalt.
- **Gaz ziemny** — głównie metan.
- **LPG** — propan + butan (skroplone).
- **Polimery** — polietylen (z etenu), polipropylen (z propenu).

### E.5. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L006 na ≥ 80%),
- gdy chcesz zrozumieć mechanizmy reakcji organicznych,
- gdy interesuje cię izomeria geometryczna, rzędowość, nazewnictwo IUPAC.

L013 zawiera: mechanizmy reakcji, izomeria geometryczna, nazewnictwo IUPAC, alkohole, kwasy karboksylowe, estry.

---

## 19. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Węglowodór | Związek organiczny zbudowany z węgla i wodoru. |
| Alkan | Węglowodór nasycony (tylko wiązania pojedyncze). |
| Alken | Węglowodór z jednym wiązaniem podwójnym. |
| Alkin | Węglowodór z jednym wiązaniem potrójnym. |
| Szereg homologiczny | Grupa związków różniących się o CH₂. |
| Izomer | Związek o tym samym wzorze sumarycznym, ale innej budowie. |
| Spalanie całkowite | Reakcja z nadmiarem O₂ → CO₂ + H₂O. |
| Spalanie niecałkowite | Reakcja z niedoborem O₂ → CO + C + H₂O. |
| Woda bromowa | Roztwór Br₂ — odbarwia się pod wpływem alkenów/alkinów. |

---

## 20. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 21. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
WĘGLOWODORY
Definicja: C + H

ALKANY (CₙH₂ₙ₊₂):
CH₄ metan, C₂H₆ etan, C₃H₈ propan, C₄H₁₀ butan

ALKENY (CₙH₂ₙ):
C₂H₄ eten, C₃H₆ propen, C₄H₈ buten

ALKINY (CₙH₂ₙ₋₂):
C₂H₂ etyn, C₃H₄ propyn

ARENY:
C₆H₆ benzen

SPALANIE:
- całkowite: + O₂ → CO₂ + H₂O
- niecałkowite: + O₂ → CO + C + H₂O

PRÓBA NA ALKENY:
woda bromowa (odbarwienie)

REAKCJE:
- alkany: spalanie, substytucja
- alkeny/alkiny: spalanie, addycja

IZOMERIA:
ten sam wzór sumaryczny, różna budowa

ZASTOSOWANIA:
- metan: gaz ziemny
- propan/butan: LPG
- eten: polietylen
- etyn: spawanie
- oktan: benzyna

PUŁAPKI:
- C₃H₆ → propen (nie propan)
- spalanie niecałkowite → CO + C
- węglowodory nie rozpuszczają się w wodzie
- benzen to aren, nie alken
```

---

## 22. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, ŚCIĄGĘ rozbudowaną, DOŚWIADCZENIA (3), ZASTOSOWANIA, KLINIKĘ 2.0 (5 przykładów), ĆWICZENIA A/B/C/D, Interleaving, Drabinkę, Fiszki 22, System powtórek, Mapę myśli, SŁOWNIK, DODATKI C/D/E, Definicje, 10 zasad, Szybką ściągę, STATUS.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L006 MASTER v1.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L006)

Węglowodory — wzór ogólny, spalanie, nasycone vs nienasycone.

### Ściąga 80/20
- Alkany CₙH₂ₙ₊₂ (pojedyncze C–C) — nasycone.
- Alkeny CₙH₂ₙ (C=C). Alkiny CₙH₂ₙ₋₂ (C≡C) — nienasycone.
- Metan CH₄, etan C₂H₆, eten C₂H₄, etyn C₂H₂.
- Spalanie całkowite: CO₂ + H₂O. Niecałkowite: CO / C (sadza) przy niedoborze O₂.
- Woda bromowa / KMnO₄: odbarwienie → sygnał nienasyconego (model szkolny).
- Izomeria: ten sam wzór sumaryczny, inny układ atomów (hasło; przykłady z lekcji).

### Pułapki
| Błąd | Popraw |
|------|--------|
| Eten to alkan, bo „e-” | eten = alken |
| CₙH₂ₙ zawsze alkan | to alkeny (cykloalkany — extra) |
| Spalanie zawsze tylko CO₂ | przy małym O₂ bywa CO |
| Odbarwienie Br₂ = alkan | zwykle nienasycony |

### 6 zadań extra
1. Wzór ogólny alkanów i alkenów.  
2. Napisz spalanie całkowite CH₄.  
3. C₂H₄ — alkan czy alken? Jeden dowód doświadczalny.  
4. C₂H₂ — ile wiązań wielokrotnych (szkolnie)?  
5. Dlaczego w niepełnym spalaniu bywa czarny osad?  
6. Izomeria: jednym zdaniem, bez listy wszystkich izomerów pentanu.

Szkic: 1 CₙH₂ₙ₊₂ / CₙH₂ₙ. 2 CH₄ + 2 O₂ → CO₂ + 2 H₂O. 3 alken; woda bromowa. 4 wiązanie potrójne (etyn). 5 węgiel (sadza). 6 ten sam wzór sumaryczny, inna budowa.

### Status doklejki
2026-09-12 · sekcje 1–22 bez zmian.



---

## UZUPEŁNIENIE wizualne L006 (audyt plus.md — doklejone)

### Alkany — szkic strukturalny

```
METAN     ETAN        PROPAN
  H        H   H       H H H
  |        |   |       | | |
H-C-H    H-C-C-H     H-C-C-C-H
  |        |   |       | | |
  H        H   H       H H H
```

### Addycja vs substytucja

Alken: CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (odbarwienie).  
Alkan: CH₄ + Cl₂ →(światło) CH₃Cl + HCl (model).

### Destylacja ropy (hasła)

gazy → benzyna → nafta → ON → mazut/asfalt (temp. wrzenia rośnie z długością łańcucha).

### Izomery C₄H₁₀

butan (łańcuch prosty) i 2-metylopropan — ten sam wzór sumaryczny, inna budowa.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L006 (przegląd mer. — doklejone)

CₙH₂ₙ to **alkeny albo cykloalkany** — rozróżniaj kontekstem.  
Nasycone = tylko C–C pojedyncze.  
Woda bromowa: Br₂ słabo w H₂O; często z KBr (extra).  
Liczba izomerów rośnie z liczbą C (C₄H₁₀: 2; C₅H₁₂: 3…).  
Polimeryzacja etenu → polietylen (hasło).

### Ciekawostki
- CH₄ bezwonny — dodaje się merkaptany.
- Parafina = *parum affinis* (mało reaktywne).
- Liczba oktanowa — odporność na spalanie stukowe (uproszczenie).
- Etyn — palnik tlenowo-acetylenowy, bardzo wysoka T.
- Cracking / reforming — ropa → krótsze / rozgałęzione łańcuchy.
- Benzen — kancerogen; nie jako rozpuszczalnik szkolny.

<!-- ==================== END L006 ==================== -->

<!-- ==================== BEGIN L007 ==================== -->

# LEKCJA L007 — BIOCHEMIA

# CHEMIA: PODSTAWA PLUS

## L007 — Biochemia

**Tłuszcze · cukry · białka · witaminy · sole mineralne · metabolizm**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002–L006 MASTER  
Poprzednia lekcja: L006 (węglowodory) · Następna: L008 (stężenia)

**Kolejność:** definicja biochemii → tłuszcze → cukry → białka → witaminy → sole mineralne → metabolizm

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L007 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj nazwy: „glukoza", „sacharoza", „tłuszcz".
5. **Rysuj.** Schematy, wzory, reakcje.
6. **Łap moment „aha!".**

**Zasada 80/20:** 3 grupy związków (tłuszcze, cukry, białka) · funkcje · rozpoznawanie · źródła w diecie.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. Cukry: mono-, di-, polisacharydy  
2. Tłuszcze: glicerol + kwasy tłuszczowe  
3. Białka: aminokwasy (20) połączone wiązaniem peptydowym  
4. Reakcja biuretowa — wykrywanie białek  
5. Reakcja Fehlinga — wykrywanie cukrów redukujących  
6. Próba jodowa — wykrywanie skrobi  

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW":**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 6 — Klinika 2.0.)

**Oznaczenia reguł (bez emoji, opis słowny):**  
· fakt chemiczny  
· uproszczenie szkolne  
· wskazówka egzaminacyjna  
· uwaga (pułapka)

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- Wartościowość C = IV
- Wiązania kowalencyjne
- Grupy funkcyjne: OH, COOH, NH₂

Z L006:
- Węglowodory — podstawa chemii organicznej
- Spalanie
- Izomeria

Z biologii (L013–L001):
- Komórka — skład chemiczny
- Trawienie — rozkład związków

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zdefiniować biochemię i związki organiczne w organizmach,
- rozpoznać tłuszcze, cukry, białka (wzory, funkcje),
- rozróżnić mono-, di-, polisacharydy,
- opisać budowę białek (aminokwasy, wiązanie peptydowe),
- wymienić funkcje witamin i soli mineralnych,
- (ambitny) znać reakcje charakterystyczne (biuretowa, Fehlinga, jodowa),
- (zaawansowany) rozumieć metabolizm (katabolizm, anabolizm) i rolę ATP.

---

## 2. ŚCIĄGA

### Definicja

**Biochemia** — nauka o związkach chemicznych i reakcjach zachodzących w organizmach żywych.

**Główne grupy związków organicznych w organizmach:**
1. **Tłuszcze** (lipidy)
2. **Cukry** (sacharydy, węglowodany)
3. **Białka** (proteiny)
4. **Kwasy nukleinowe** (DNA, RNA — omawiane w L010 biologii)
5. **Witaminy** (związki drobnocząsteczkowe)
6. **Sole mineralne** (nieorganiczne)

### Tłuszcze (lipidy)

**Budowa:** glicerol (propano-1,2,3-triol) + kwasy tłuszczowe (estry).

**Wzór ogólny:** triglicerydy (tłuszcze właściwe) = glicerol + 3 kwasy tłuszczowe.

**Podział:**
- **Tłuszcze stałe** — pochodzenia zwierzęcego (masło, smalec).
- **Oleje** — pochodzenia roślinnego (oliwa, olej rzepakowy).

**Właściwości:**
- Nie rozpuszczają się w wodzie (hydrofobowe).
- Rozpuszczają się w rozpuszczalnikach organicznych (benzyna, eter).
- Lżejsze od wody.
- Reakcja zmydlania: tłuszcz + zasada → mydło + glicerol.

**Funkcje w organizmie:**
- źródło energii (1 g = 38 kJ, więcej niż cukry i białka),
- materiał zapasowy,
- izolacja termiczna,
- ochrona narządów,
- transport witamin A, D, E, K.

**Reakcja charakterystyczna:** próba akroleinowa (zapach spalonego tłuszczu).

**Przykłady:**
- Tłuszcze zwierzęce: masło, smalec, łój.
- Tłuszcze roślinne: oliwa, olej słonecznikowy, olej rzepakowy.
- Fosfolipidy — budowa błon komórkowych (rozszerzenie).
- Steroidy — cholesterol, hormony (rozszerzenie).

### Cukry (sacharydy, węglowodany)

**Budowa:** C, H, O — najczęściej stosunek H:O = 2:1 (jak w wodzie).

**Wzór ogólny:** Cₙ(H₂O)ₘ

**Podział:**

| Typ | Przykłady | Wzór | Funkcja |
|-----|-----------|------|---------|
| **Monosacharydy** | glukoza, fruktoza, galaktoza | C₆H₁₂O₆ | energia (glukoza) |
| **Disacharydy** | sacharoza, laktoza, maltoza | C₁₂H₂₂O₁₁ | transport, słodzik |
| **Polisacharydy** | skrobia, celuloza, glikogen | (C₆H₁₀O₅)ₙ | zapas, budulec |

**Monosacharydy:**
- **Glukoza** — C₆H₁₂O₆ — cukier prosty, paliwo komórek.
- **Fruktoza** — C₆H₁₂O₆ — cukier owocowy (izomer glukozy).
- **Galaktoza** — C₆H₁₂O₆ — składnik laktozy.

**Disacharydy:**
- **Sacharoza** (cukier stołowy) = glukoza + fruktoza.
- **Laktoza** (cukier mlekowy) = glukoza + galaktoza.
- **Maltoza** (cukier słodowy) = glukoza + glukoza.

**Polisacharydy:**
- **Skrobia** — zapas u roślin (ziemniaki, zboża).
- **Celuloza** — budulec ścian komórkowych roślin (błonnik).
- **Glikogen** — zapas u zwierząt (wątroba, mięśnie).

**Reakcje charakterystyczne:**
- **Próba Fehlinga** — wykrywanie cukrów redukujących (glukoza, fruktoza, maltoza) → czerwony osad Cu₂O.
- **Próba Trommera** — podobna do Fehlinga (Cu(OH)₂).
- **Próba jodowa** — wykrywanie skrobi → niebiesko-fioletowe zabarwienie.
- **Sacharoza** NIE jest cukrem redukującym (nie daje próby Fehlinga).

**Funkcje w organizmie:**
- źródło energii (1 g = 17 kJ),
- budulec (celuloza, chityna),
- materiał zapasowy (skrobia, glikogen),
- składnik kwasów nukleinowych (ryboza, deoksyryboza).

### Białka (proteiny)

**Budowa:** aminokwasy (20) połączone **wiązaniami peptydowymi** (–CO–NH–).

**Aminokwas** — związek z grupą aminową (–NH₂) i grupą karboksylową (–COOH).

**Wzór ogólny aminokwasu:**
```
     NH₂
      |
R – CH – COOH
```
(gdzie R = reszta charakterystyczna dla danego aminokwasu)

**Wiązanie peptydowe:** –CO–NH– (między grupą COOH jednego aminokwasu a NH₂ drugiego).

**Struktury białka:**
1. **Pierwszorzędowa** — sekwencja aminokwasów.
2. **Drugorzędowa** — α-helisa lub β-harmonijka (wiązania wodorowe).
3. **Trzeciorzędowa** — przestrzenny kształt (mostki disiarczkowe, oddziaływania hydrofobowe).
4. **Czwartorzędowa** — kilka łańcuchów (np. hemoglobina).

**Podział białek:**
- **Proste** — tylko aminokwasy (albuminy, globuliny).
- **Złożone** — aminokwasy + inne składniki (hemoglobina, glikoproteiny).

**Funkcje białek:**
- budulcowa (kolagen, keratyna),
- katalityczna (enzymy),
- transportowa (hemoglobina),
- obronna (przeciwciała),
- hormonalna (insulina),
- ruchowa (aktyna, miozyna),
- zapasowa (białko jaja).

**Reakcje charakterystyczne:**
- **Reakcja biuretowa** — wykrywanie białek → fioletowe zabarwienie.
- **Reakcja ksantoproteinowa** — wykrywanie białek z aminokwasami aromatycznymi → żółte zabarwienie.
- **Ścinanie białka** — denaturacja (pod wpływem temp., kwasów, soli metali ciężkich).

**Przykłady:**
- Białka zwierzęce: mięso, jaja, mleko, ryby.
- Białka roślinne: soja, fasola, groch, orzechy.

**Denaturacja** — nieodwracalna zmiana struktury białka (traci funkcję).
- Czynniki: wysoka temperatura, kwasy, zasady, sole metali ciężkich, alkohol.
- Przykład: gotowanie jajka (białko ścina się).

### Witaminy

**Witaminy** — związki organiczne potrzebne w małych ilościach, których organizm nie syntetyzuje (lub syntetyzuje niewystarczająco).

**Podział:**
- **Rozpuszczalne w tłuszczach:** A, D, E, K.
- **Rozpuszczalne w wodzie:** B, C.

| Witamina | Funkcja | Niedobór |
|----------|---------|----------|
| A | wzrok, skóra | kurza ślepota |
| B₁ | metabolizm | beri-beri |
| B₂ | metabolizm | zmiany skórne |
| B₆ | metabolizm białek | anemia |
| B₁₂ | krwiotwórcza | anemia złośliwa |
| C | odporność, antyoksydant | szkorbut |
| D | kości, wapń | krzywica |
| E | antyoksydant | anemia |
| K | krzepnięcie krwi | krwawienia |

### Sole mineralne

**Makroelementy:** Ca, P, K, Na, Mg, S, Cl.
**Mikroelementy:** Fe, Zn, Cu, I, F, Mn, Se.

| Pierwiastek | Funkcja | Niedobór |
|-------------|---------|----------|
| Ca | kości, zęby | osteoporoza, krzywica |
| P | kości, DNA | osłabienie |
| Fe | hemoglobina | anemia |
| I | hormony tarczycy | wole |
| Mg | enzymy, mięśnie | skurcze |
| Na, K | równowaga wodna | zaburzenia |
| Zn | enzymy, odporność | osłabienie odporności |
| F | szkliwo zębów | próchnica |

### Metabolizm (rozszerzenie)

**Metabolizm** — całokształt reakcji chemicznych w organizmie.

**Podział:**
- **Katabolizm** — rozkład związków (uwalnianie energii), np. oddychanie komórkowe.
- **Anabolizm** — synteza związków (zużycie energii), np. fotosynteza, synteza białek.

**ATP** — adenozynotrifosforan; uniwersalny nośnik energii w komórce.

**Oddychanie komórkowe (uproszczenie):**
- C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia (ATP)
- W mitochondriach.

**Fotosynteza (uproszczenie):**
- 6CO₂ + 6H₂O + światło → C₆H₁₂O₆ + 6O₂
- W chloroplastach.

---

## 3. WZORY — PRZYPOMNIENIE (z L001, L006)

**Grupy funkcyjne:**
- –OH — hydroksylowa (alkohole)
- –COOH — karboksylowa (kwasy karboksylowe)
- –NH₂ — aminowa (aminy, aminokwasy)
- –CO–NH– — peptydowa (białka)
- –CO–O– — estrowa (tłuszcze, estry)

**Wzory cukrów:**
- Glukoza: C₆H₁₂O₆
- Sacharoza: C₁₂H₂₂O₁₁
- Skrobia: (C₆H₁₀O₅)ₙ

**Wzory tłuszczów:**
- Glicerol: C₃H₅(OH)₃
- Kwas tłuszczowy: R–COOH

**Wzory białek:**
- Aminokwas: H₂N–CH(R)–COOH
- Wiązanie peptydowe: –CO–NH–

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Wykrywanie skrobi (próba jodowa)

**Problem:** Jak wykryć skrobię w produkcie?  
**Hipoteza:** Jodyna z skrobią daje niebiesko-fioletowe zabarwienie.  
**Sprzęt:** jodyna (roztwór I₂ w KI), kawałek ziemniaka, kawałek chleba, probówka.  
**Obserwacja:** ziemniak i chleb zabarwiają się na niebiesko-fioletowo.  
**Wniosek:** W ziemniaku i chlebie jest skrobia.  
**Równanie:** (reakcja charakterystyczna — bez równania)  
**BHP:** jodyna plami; okulary.

### Doświadczenie 2: Wykrywanie białka (reakcja biuretowa)

**Problem:** Jak wykryć białko?  
**Hipoteza:** Białko + CuSO₄ + NaOH → fioletowe zabarwienie.  
**Sprzęt:** białko jaja, CuSO₄, NaOH, probówka.  
**Obserwacja:** fioletowe zabarwienie.  
**Wniosek:** W białku jaja jest białko (obecność wiązań peptydowych).  
**Równanie:** (reakcja charakterystyczna)  
**BHP:** NaOH żrący; okulary, rękawice.

### Doświadczenie 3: Wykrywanie glukozy (próba Fehlinga)

**Problem:** Jak wykryć cukier redukujący?  
**Hipoteza:** Glukoza + odczynnik Fehlinga → czerwony osad Cu₂O.  
**Sprzęt:** roztwór glukozy, odczynnik Fehlinga (CuSO₄ + winian sodowo-potasowy + NaOH), probówka, palnik.  
**Obserwacja:** czerwony osad.  
**Wniosek:** Glukoza redukuje Cu²⁺ do Cu⁺ (Cu₂O).  
**Równanie:** (reakcja charakterystyczna)  
**BHP:** ogrzewanie — ostrożnie; okulary.

### Doświadczenie 4: Denaturacja białka

**Problem:** Co się dzieje z białkiem pod wpływem wysokiej temperatury?  
**Hipoteza:** Białko ścina się (denaturacja).  
**Sprzęt:** białko jaja, probówka, palnik.  
**Obserwacja:** białko zmienia konsystencję (ściecie).  
**Wniosek:** Wysoka temperatura denaturuje białko.  
**Równanie:** (bez równania — proces fizykochemiczny)  
**BHP:** ogrzewanie — ostrożnie.

**Obserwacja ≠ wniosek:**
- Obserwacja: fioletowe zabarwienie.
- Wniosek: obecność białka (wiązania peptydowe).
- Nie: „Obserwacja: obecne białko" — to już wniosek.

---

## 5. ZASTOSOWANIA — BIOCHEMIA W ŻYCIU CODZIENNYM

| Związek | Gdzie spotykasz |
|---------|-----------------|
| Tłuszcze | masło, olej, margaryna |
| Cukry | cukier, owoce, miód, pieczywo |
| Białka | mięso, jaja, mleko, soja |
| Witamina C | cytrusy, papryka, czarna porzeczka |
| Witamina D | ryby, jaja, słońce (synteza) |
| Wapń | mleko, sery, jogurt |
| Żelazo | mięso, wątroba, szpinak |

**Znaczenie w diecie:**
- Zbilansowana dieta = wszystkie składniki.
- Niedobór → choroby (szkorbut, krzywica, anemia).
- Nadmiar → otyłość, problemy.

---

## 6. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawnie | Reguła |
|-------------|-----------|--------|
| „cukry = słodycze" | cukry to sacharydy (glukoza, skrobia, celuloza) | definicja |
| „białka to tylko mięso" | białka są w jajach, mleku, roślinach | źródła |
| „tłuszcze są złe" | tłuszcze są potrzebne (energia, witaminy) | funkcje |
| „glukoza i fruktoza to samo" | izomery (C₆H₁₂O₆), ale różne związki | izomeria |
| „sacharoza jest cukrem redukującym" | sacharoza NIE redukuje (nie daje Fehlinga) | właściwości |
| „witamina C = kwas askorbinowy" | tak, ale witamina C to nazwa zwyczajowa | nazewnictwo |
| „denaturacja = odwracalna" | denaturacja jest nieodwracalna | definicja |
| „białka można wykryć jodyną" | jodyna — skrobia; białko — biuretowa | reakcje |
| „tłuszcze rozpuszczają się w wodzie" | nie rozpuszczają się (hydrofobowe) | właściwości |
| „witaminy dostarczają energii" | witaminy nie są źródłem energii | funkcje |

### Klinika 2.0 — przykład 1

**Błąd:** „Sacharoza jest cukrem redukującym."

- **Znajdź:** Zła klasyfikacja.
- **Popraw:** Sacharoza NIE jest cukrem redukującym.
- **Reguła:** Cukry redukujące: glukoza, fruktoza, maltoza, laktoza. Sacharoza — nie.
- **Dlaczego:** Sacharoza nie ma wolnej grupy aldehydowej/ketonowej (połączone oba cukry).
- **Zadanie podobne:** Które cukry dają próbę Fehlinga?
- **Zadanie z pułapką:** Czy laktoza jest cukrem redukującym? (Odp.: Tak.)

### Klinika 2.0 — przykład 2

**Błąd:** „Denaturacja jest odwracalna."

- **Znajdź:** Zła definicja.
- **Popraw:** Denaturacja jest nieodwracalna.
- **Reguła:** Denaturacja = utrata struktury białka (funkcji).
- **Dlaczego:** Zniszczona struktura przestrzenna nie odtwarza się sama.
- **Zadanie podobne:** Co denaturuje białko? (Odp.: temp., kwasy, sole metali ciężkich, alkohol.)
- **Zadanie z pułapką:** Czy ugotowane jajko można „odgotować"? (Odp.: Nie — denaturacja nieodwracalna.)

### Klinika 2.0 — przykład 3

**Błąd:** „Tłuszcze rozpuszczają się w wodzie."

- **Znajdź:** Brak informacji o właściwościach.
- **Popraw:** Tłuszcze są hydrofobowe — nie rozpuszczają się w wodzie.
- **Reguła:** Podobne rozpuszcza się w podobnym.
- **Dlaczego:** Tłuszcze są niepolarne, woda polarna.
- **Zadanie podobne:** W czym rozpuszczają się tłuszcze? (Odp.: w rozpuszczalnikach organicznych.)
- **Zadanie z pułapką:** Czy oliwa rozpuszcza się w wodzie? (Odp.: Nie.)

### Klinika 2.0 — przykład 4

**Błąd:** „Witaminy dostarczają energii."

- **Znajdź:** Zła funkcja.
- **Popraw:** Witaminy nie są źródłem energii — regulują procesy.
- **Reguła:** Energię dostarczają: tłuszcze, cukry, białka.
- **Dlaczego:** Witaminy są potrzebne w małych ilościach jako katalizatory/regulatory.
- **Zadanie podobne:** Co dostarcza energii? (Odp.: tłuszcze, cukry, białka.)
- **Zadanie z pułapką:** Czy witamina C daje energię? (Odp.: Nie.)

### Klinika 2.0 — przykład 5

**Błąd:** „Białko wykrywamy jodyną."

- **Znajdź:** Zły odczynnik.
- **Popraw:** Białko — reakcja biuretowa; jodyna — skrobia.
- **Reguła:** Każda grupa ma swoją reakcję charakterystyczną.
- **Dlaczego:** Jodyna reaguje ze skrobią (nie z białkiem).
- **Zadanie podobne:** Jak wykryć glukozę? (Odp.: próba Fehlinga.)
- **Zadanie z pułapką:** Czy jodyna wykryje białko? (Odp.: Nie.)

---

## 7. ĆWICZENIA

### 7.1. Mini-check (5 pytań)

1. Co to biochemia?
2. Jakie są 3 główne grupy związków organicznych w organizmach?
3. Jak zbudowane są tłuszcze?
4. Jak zbudowane są białka?
5. Co to denaturacja?

### 7.2. Ćwiczenie prowadzone

**Dane:** Glukoza.

**Krok 1.** Wzór: C₆H₁₂O₆.
**Krok 2.** Typ: monosacharyd.
**Krok 3.** Funkcja: energia (paliwo komórek).
**Krok 4.** Wykrywanie: próba Fehlinga (czerwony osad).

**Spróbuj sam:** skrobia.

### 7.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Wymień 3 grupy związków organicznych.
2. Podaj wzór glukozy.
3. Podaj wzór sacharozy.
4. Co to białko?
5. Jak wykryć skrobię?

**B. Trening**

6. Podaj 2 funkcje tłuszczów.
7. Podaj 2 funkcje białek.
8. Popraw: „Tłuszcze rozpuszczają się w wodzie".
9. Czym różni się sacharoza od glukozy?
10. Jak wykryć białko?

**C. Ambitne**

11. Wyjaśnij, dlaczego sacharoza nie jest cukrem redukującym.
12. Zaprojektuj doświadczenie: wykrywanie skrobi (format DOŚWIADCZENIE).
13. Dlaczego denaturacja jest nieodwracalna?
14. Porównaj tłuszcze zwierzęce i roślinne.
15. Wyjaśnij, dlaczego witaminy są potrzebne w małych ilościach.

**D. Zaawansowane**

16. Co to katabolizm i anabolizm? Podaj przykłady.
17. Napisz wzór ogólny aminokwasu.
18. Co to wiązanie peptydowe?
19. Wyjaśnij rolę ATP w komórce.
20. Porównaj struktury białka (I, II, III, IV).

### 7.4. Interleaving (przeplatany)

1. Jaki charakter ma CO₂? (z L002)
2. Zapisz wzór kwasu octowego. (z L004)
3. Zapisz wzór etanolu. (z L006 — alkohol)
4. Zbilansuj: C₆H₁₂O₆ + O₂ → CO₂ + H₂O. (z L006 + L007)
5. Jaka jest różnica między skrobią a celulozą? (z L007)
6. Ile elektronów ma jon Ca²⁺? (z L001)
7. CO₂ + H₂O → ? (z L002 + L004)
8. Jaką grupę funkcyjną ma aminokwas? (z L007)

### 7.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to biochemia? |
| ZASTOSUJ | Podaj wzór glukozy. |
| WYJAŚNIJ | Dlaczego sacharoza nie redukuje? |
| ODKRYJ | Jak wykryć białko? |
| POŁĄCZ | Połącz cukry z funkcjami. |
| ZAKWESTIONUJ | Czy tłuszcze są złe? |

---

## 8. ODPOWIEDZI

### Mini-check

1. Nauka o związkach chemicznych w organizmach żywych.
2. Tłuszcze, cukry, białka.
3. Glicerol + kwasy tłuszczowe.
4. Aminokwasy połączone wiązaniami peptydowymi.
5. Nieodwracalna zmiana struktury białka.

### Ćwiczenia A

1. Tłuszcze, cukry, białka.
2. C₆H₁₂O₆.
3. C₁₂H₂₂O₁₁.
4. Związek z aminokwasów połączonych wiązaniami peptydowymi.
5. Jodyną (niebiesko-fioletowe zabarwienie).

### Ćwiczenia B

6. Energia, izolacja termiczna.
7. Budulcowa, katalityczna (enzymy).
8. Nie rozpuszczają się (hydrofobowe).
9. Sacharoza to disacharyd (glukoza + fruktoza); glukoza to monosacharyd.
10. Reakcją biuretową (fioletowe zabarwienie).

### Ćwiczenia C

11. Brak wolnej grupy aldehydowej/ketonowej.
12. Format DOŚWIADCZENIE.
13. Zniszczona struktura nie odtwarza się sama.
14. Tłuszcze zwierzęce: stałe; roślinne: ciekłe (oleje).
15. Witaminy to katalizatory/regulatory — małe ilości wystarczą.

### Ćwiczenia D

16. Katabolizm — rozkład (oddychanie); anabolizm — synteza (fotosynteza).
17. H₂N–CH(R)–COOH.
18. –CO–NH– (między COOH a NH₂).
19. ATP — nośnik energii; uwalniany przy hydrolizie.
20. I — sekwencja; II — α-helisa/β-harmonijka; III — kształt 3D; IV — kilka łańcuchów.

---

## 9. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Co to biochemia? | Nauka o związkach w organizmach |
| Tłuszcze — budowa | Glicerol + kwasy tłuszczowe |
| Tłuszcze — funkcje | Energia, izolacja, ochrona |
| Glukoza — wzór | C₆H₁₂O₆ |
| Sacharoza — wzór | C₁₂H₂₂O₁₁ |
| Skrobia — wzór | (C₆H₁₀O₅)ₙ |
| Cukry — podział | Mono-, di-, polisacharydy |
| Białka — budowa | Aminokwasy + wiązania peptydowe |
| Wiązanie peptydowe | –CO–NH– |
| Denaturacja | Nieodwracalna zmiana struktury białka |
| Reakcja biuretowa | Wykrywanie białek (fioletowe) |
| Próba Fehlinga | Wykrywanie cukrów redukujących (czerwony osad) |
| Próba jodowa | Wykrywanie skrobi (niebiesko-fioletowe) |
| Witaminy rozpuszczalne w tłuszczach | A, D, E, K |
| Witaminy rozpuszczalne w wodzie | B, C |
| Witamina C — niedobór | Szkorbut |
| Witamina D — niedobór | Krzywica |
| Ca — funkcja | Kości, zęby |
| Fe — funkcja | Hemoglobina |
| I — funkcja | Hormony tarczycy |
| Katabolizm | Rozkład (uwalnianie energii) |
| Anabolizm | Synteza (zużycie energii) |

---

## 10. TEST KOŃCOWY (L007)

1. Wymień 3 grupy związków organicznych.
2. Podaj wzór glukozy i sacharozy.
3. Jak zbudowane są tłuszcze?
4. Jak zbudowane są białka?
5. Jak wykryć skrobię? Białko? Glukozę?
6. Co to denaturacja? Podaj czynnik.
7. Podaj 3 witaminy i ich funkcje.
8. (extra) Co to katabolizm i anabolizm?
9. (extra) Napisz wzór ogólny aminokwasu.

---

## 11. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Definicja | biochemia = związki w organizmach |
| Tłuszcze | budowa, funkcje, właściwości |
| Cukry | mono-, di-, polisacharydy |
| Białka | aminokwasy, wiązanie peptydowe, denaturacja |
| Witaminy | A, D, E, K, B, C — funkcje |
| Sole mineralne | Ca, Fe, I — funkcje |
| Reakcje | biuretowa, Fehlinga, jodowa |
| Metabolizm | katabolizm vs anabolizm |

---

## 12. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 13. MAPA MYŚLI

```
BIOCHEMIA
├── TŁUSZCZE
│   ├── glicerol + kwasy tłuszczowe
│   ├── energia, izolacja
│   └── zmydlanie → mydło
├── CUKRY
│   ├── monosacharydy (glukoza)
│   ├── disacharydy (sacharoza)
│   └── polisacharydy (skrobia, celuloza, glikogen)
├── BIAŁKA
│   ├── aminokwasy + wiązania peptydowe
│   ├── struktury I, II, III, IV
│   ├── funkcje: budulcowa, katalityczna…
│   └── denaturacja
├── WITAMINY
│   ├── A, D, E, K (tłuszcz)
│   └── B, C (woda)
├── SOLE MINERALNE
│   ├── Ca, P, K, Na, Mg
│   └── Fe, Zn, Cu, I, F
└── METABOLIZM
    ├── katabolizm
    └── anabolizm
```

---

## 14. CO DALEJ?

**L008 — Stężenia** : procentowe, molowe, rozpuszczalność.

Most: biochemia to związki organiczne; stężenia to obliczenia ilościowe.

**Most do L004–L006:** białka, tłuszcze, cukry to związki organiczne; reakcje charakterystyczne.

---

## 15. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Biochemia | Nauka o związkach chemicznych w organizmach żywych |
| Tłuszcz | Ester glicerolu i kwasów tłuszczowych |
| Cukier | Sacharyd (mono-, di-, polisacharyd) |
| Białko | Polimer aminokwasów połączonych wiązaniami peptydowymi |
| Aminokwas | Związek z grupą –NH₂ i –COOH |
| Wiązanie peptydowe | –CO–NH– |
| Denaturacja | Nieodwracalna zmiana struktury białka |
| Witamina | Związek organiczny potrzebny w małych ilościach |
| Katabolizm | Rozkład związków (uwalnianie energii) |
| Anabolizm | Synteza związków (zużycie energii) |
| ATP | Adenozynotrifosforan — nośnik energii |

---

## 16. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: fioletowe zabarwienie.  
Wniosek: obecność białka (wiązania peptydowe).  
Nie: „Obserwacja: obecne białko".

---

## 17. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 6 (Klinika 2.0).

---

## 18. DODATEK E — WARSTWA EXTRA

### E.1. Struktury białka — szczegóły

- **I-rzędowa:** sekwencja aminokwasów (kodowana przez DNA).
- **II-rzędowa:** α-helisa (spirala) lub β-harmonijka (położone równolegle) — stabilizowane wiązaniami wodorowymi.
- **III-rzędowa:** przestrzenny kształt łańcucha — mostki disiarczkowe (–S–S–), oddziaływania hydrofobowe, jonowe.
- **IV-rzędowa:** kilka łańcuchów polipeptydowych (np. hemoglobina = 4 łańcuchy).

### E.2. Enzymy

**Enzymy** — białka katalityczne, przyspieszające reakcje.

- **Substrat** — związek, na który działa enzym.
- **Centrum aktywne** — miejsce wiązania substratu.
- **Specyficzność** — enzym działa na konkretny substrat (model „klucz–zamek").
- **Czynniki:** temperatura, pH, stężenie substratu.

**Denaturacja enzymu** → utrata funkcji katalitycznej.

### E.3. Tłuszcze — rozszerzenie

- **Fosfolipidy** — budowa błon komórkowych (grupa fosforanowa + glicerol + 2 kwasy tłuszczowe).
- **Steroidy** — cholesterol, hormony steroidowe (testosteron, estradiol).
- **Woski** — ochronne (kutikula roślin, woskowina uszna).
- **Witaminy A, D, E, K** — rozpuszczalne w tłuszczach.

### E.4. Metabolizm — pełniej

**Oddychanie komórkowe (uproszczenie):**
- C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~38 ATP
- Etapy (szkic): glikoliza → cykl Krebsa → łańcuch oddechowy.
- W mitochondriach.

**Fotosynteza:**
- 6CO₂ + 6H₂O + światło → C₆H₁₂O₆ + 6O₂
- W chloroplastach.

**Fermentacja (beztlenowa):**
- C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (alkoholowa)
- C₆H₁₂O₆ → 2C₃H₆O₃ (mlekowa)

### E.5. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L007 na ≥ 80%),
- gdy chcesz zrozumieć metabolizm na poziomie molekularnym,
- gdy interesuje cię biochemia strukturalna.

L013 zawiera: metabolizm komórkowy, enzymologia, struktury białek, kwasy nukleinowe, biosynteza.

---

## 19. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Biochemia | Nauka o związkach chemicznych i reakcjach w organizmach żywych. |
| Tłuszcz | Ester glicerolu i kwasów tłuszczowych. |
| Cukier | Sacharyd — mono-, di- lub polisacharyd. |
| Białko | Polimer aminokwasów połączonych wiązaniami peptydowymi. |
| Aminokwas | Związek z grupą aminową i karboksylową. |
| Wiązanie peptydowe | Wiązanie –CO–NH– między aminokwasami. |
| Denaturacja | Nieodwracalna zmiana struktury białka. |
| Witamina | Związek organiczny potrzebny w małych ilościach. |
| Katabolizm | Rozkład związków z uwalnianiem energii. |
| Anabolizm | Synteza związków z zużyciem energii. |

---

## 20. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 21. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
BIOCHEMIA
TŁUSZCZE:
- glicerol + kwasy tłuszczowe
- funkcje: energia, izolacja, ochrona
- nie rozpuszczają się w wodzie

CUKRY:
- mono: glukoza C₆H₁₂O₆, fruktoza, galaktoza
- di: sacharoza C₁₂H₂₂O₁₁, laktoza, maltoza
- poli: skrobia, celuloza, glikogen
- funkcje: energia, budulec, zapas

BIAŁKA:
- aminokwasy + wiązania peptydowe
- struktury I, II, III, IV
- funkcje: budulcowa, katalityczna, transportowa...
- denaturacja: nieodwracalna

WITAMINY:
- A, D, E, K (tłuszcz)
- B, C (woda)

SOLE MINERALNE:
- Ca (kości), Fe (hemoglobina), I (tarczyca)

REAKCJE:
- biuretowa: białko (fioletowe)
- Fehlinga: cukry redukujące (czerwony osad)
- jodowa: skrobia (niebiesko-fioletowe)

METABOLIZM:
- katabolizm: rozkład (oddychanie)
- anabolizm: synteza (fotosynteza)

PUŁAPKI:
- sacharoza NIE redukuje
- denaturacja nieodwracalna
- tłuszcze nie rozpuszczają się w wodzie
- witaminy nie dają energii
```

---

## 22. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, ŚCIĄGĘ rozbudowaną, DOŚWIADCZENIA (4), ZASTOSOWANIA, KLINIKĘ 2.0 (5 przykładów), ĆWICZENIA A/B/C/D, Interleaving, Drabinkę, Fiszki 22, System powtórek, Mapę myśli, SŁOWNIK, DODATKI C/D/E, Definicje, 10 zasad, Szybką ściągę, STATUS.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L007 MASTER v1.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L007)

Biochemia kl. 8 — rozpoznawanie grup, nie pełna biochemia liceum.

### Ściąga 80/20
- Tłuszcze: estry glicerolu i kwasów tłuszczowych; energia, zapas.
- Cukry (węglowodany): glukoza, skrobia, celuloza — energia / budulec roślin.
- Białka: aminokwasy, wiązanie peptydowe (hasło); enzymy, budulec.
- Wykrywanie szkolne: skrobia + jod (zsinienie); białko — próby z lekcji (np. biuret, jeśli jest).
- Denaturacja: zmiana struktury białka (temp., kwas) → utrata funkcji enzymu (hasło).
- Nie mylić „cukier w kuchni” z całą klasą węglowodanów.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Tłuszcz = węglowodór z L006 | tłuszcz ma tlen (ester) |
| Wszystkie cukry słodkie | skrobia/celuloza nie są „słodkie jak glukoza” |
| Białko = tylko mięso | też nasiona, jaja, nabiał |
| Denaturacja = zniknięcie atomów | zmiana struktury, nie „wymazanie wzoru” |

### 6 zadań extra
1. Przypisz: skrobia, olej, albumina — do której grupy.  
2. Jod + ziemniak — czego szukasz?  
3. Po co tłuszcz zwierzętom zimą (hasło energetyczne)?  
4. Enzym to zwykle jakie związki?  
5. Smażenie jajka — denaturacja czy spalanie alkanu?  
6. Most do L006: czym tłuszcz różni się od heksanu.

Szkic: 1 cukier / tłuszcz / białko. 2 skrobi. 4 białka. 5 denaturacja. 6 ester vs sam C i H.

### Status doklejki
2026-09-12 · sekcje 1–22 bez zmian.



---

## UZUPEŁNIENIE wizualne L007 (audyt plus.md — doklejone)

### Glukoza — szkic łańcuchowy C₆H₁₂O₆ (uproszczenie)

CHO–(CHOH)₄–CH₂OH; w komórce głównie forma pierścieniowa (extra).

### Katabolizm / anabolizm

Rozkład uwalnia energię (ATP); synteza ją zużywa. Oddychanie vs fotosynteza — most bio.

### Struktura białka (hasła)

I sekwencja · II helisa/harmonijka · III kształt 3D · IV kilka łańcuchów (hemoglobina).

### Witaminy — skrót niedoborów

A wzrok · C szkorbut · D krzywica · K krzepnięcie · B₁₂ anemia złośliwa (nabiał/mięso).



---

## DOPRECYZOWANIA I CIEKAWOSTKI L007 (przegląd mer. — doklejone)

**Denaturacja:** psuje II–IV; **I-rzędowa sekwencja zostaje**. Enzym traci kształt → traci funkcję.  
**Sacharoza** nie redukuje, bo oba węgle anomeryczne w wiązaniu glikozydowym.  
Witaminy B często koenzymy; C, E — antyoksydanty (hasło).  
Wiązanie peptydowe –CO–NH–. Próby: biuret, Fehling/Tollens (redukujące), jod–skrobia.

### Ciekawostki
- Skrobia α vs celuloza β — brak celulazy u człowieka = błonnik.
- Jajko twardnieje = denaturacja, nie „nowe atomy”.
- Mydło: ogon tłuszczowy + głowa hydrofilowa → micele.
- Cholesterol — zwierzęcy; rośliny: fitosterole.
- Krew czerwona — Fe²⁺ w hemoglobinie.
- Szkorbut / krzywica — C / D.

<!-- ==================== END L007 ==================== -->

<!-- ==================== BEGIN L008 ==================== -->

# LEKCJA L008 — STĘŻENIA

# CHEMIA: PODSTAWA PLUS

## L008 — Stężenia

**Stężenie procentowe · stężenie molowe · rozpuszczalność · przeliczanie stężeń · rozcieńczanie i zatężanie**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002–L007 MASTER  
Poprzednia lekcja: L007 (biochemia) · Następna: L009 (stechiometria)

**Kolejność:** definicja stężenia → stężenie procentowe → stężenie molowe → rozpuszczalność → przeliczanie → rozcieńczanie i zatężanie

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L008 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj wzory: „C-p równa się m-s przez m-r".
5. **Rysuj.** Schemat roztworu, przekształcenia wzorów.
6. **Łap moment „aha!".**

**Zasada 80/20:** stężenie procentowe (Cp) · stężenie molowe (Cm) · przeliczanie · rozcieńczanie.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. Cp = (ms/mr)·100%  
2. Cm = n/V (mol/dm³)  
3. n = m/M  
4. mr = ms + mrozp  
5. Rozcieńczanie: C₁V₁ = C₂V₂  
6. Przeliczanie: Cp ↔ Cm wymaga gęstości (d)

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW":**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 7 — Klinika 2.0.)

**Oznaczenia reguł (bez emoji, opis słowny):**  
· fakt chemiczny  
· uproszczenie szkolne  
· wskazówka egzaminacyjna  
· uwaga (pułapka)

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- Masa atomowa, masa cząsteczkowa
- Mol, liczba Avogadra

Z L004–L005:
- Rozpuszczalność soli
- Reakcje w roztworach

Z L006–L007:
- Związki organiczne
- Reakcje spalania

**Wymagane umiejętności:**
- Przeliczanie jednostek (g, mg, kg)
- Procenty
- Przekształcanie wzorów

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zdefiniować stężenie,
- obliczyć stężenie procentowe (Cp),
- obliczyć stężenie molowe (Cm),
- przeliczyć Cp na Cm i odwrotnie (z gęstością),
- obliczyć rozpuszczalność,
- obliczyć stężenie po rozcieńczeniu/zatężeniu,
- (ambitny) rozwiązywać zadania z mieszaniem roztworów,
- (zaawansowany) znać pojęcie ułamka molowego i przeliczeń z molalnością.

---

## 2. ŚCIĄGA

### Definicja

**Stężenie** — miara ilości substancji rozpuszczonej w danej ilości roztworu (lub rozpuszczalnika).

**Rodzaje stężeń:**
- **Stężenie procentowe (Cp)** — masa substancji w 100 g roztworu.
- **Stężenie molowe (Cm)** — liczba moli substancji w 1 dm³ roztworu.
- **Stężenie ppm** — części na milion (dla bardzo małych stężeń).
- **Ułamek molowy** — stosunek moli składnika do sumy moli (rozszerzenie).
- **Molalność** — liczba moli na 1 kg rozpuszczalnika (rozszerzenie).

### Podstawowe pojęcia

| Pojęcie | Symbol | Jednostka | Definicja |
|---------|--------|-----------|-----------|
| Masa substancji | ms | g | masa substancji rozpuszczonej |
| Masa rozpuszczalnika | mrozp | g | masa rozpuszczalnika (np. woda) |
| Masa roztworu | mr | g | mr = ms + mrozp |
| Objętość roztworu | V | dm³ (lub cm³) | objętość roztworu |
| Liczba moli | n | mol | n = m/M |
| Masa molowa | M | g/mol | masa 1 mola substancji |
| Gęstość roztworu | d | g/cm³ | d = mr/V |
| Stężenie procentowe | Cp | % | Cp = (ms/mr)·100% |
| Stężenie molowe | Cm | mol/dm³ | Cm = n/V |

**Uwaga:** 1 dm³ = 1 l = 1000 cm³ = 1000 ml.

### Stężenie procentowe (Cp)

**Wzór:**
```
Cp = (ms / mr) · 100%
```
gdzie:
- ms — masa substancji rozpuszczonej [g]
- mr — masa roztworu [g] = ms + mrozp
- Cp — stężenie procentowe [%]

**Przekształcenia:**
- ms = (Cp · mr) / 100%
- mr = (ms · 100%) / Cp

**Przykład 1:** Rozpuszczono 10 g soli w 90 g wody. Oblicz Cp.
- ms = 10 g; mrozp = 90 g; mr = 100 g
- Cp = (10/100)·100% = 10%

**Przykład 2:** Ile gramów soli potrzeba do przygotowania 200 g roztworu 5%?
- ms = (5% · 200 g) / 100% = 10 g

**Przykład 3:** 25 g cukru rozpuszczono w 175 g wody. Oblicz Cp.
- ms = 25 g; mrozp = 175 g; mr = 200 g
- Cp = (25/200)·100% = 12,5%

### Stężenie molowe (Cm)

**Wzór:**
```
Cm = n / V
```
gdzie:
- n — liczba moli substancji [mol]
- V — objętość roztworu [dm³]
- Cm — stężenie molowe [mol/dm³]

**Powiązanie z masą:**
```
n = m / M
```
gdzie:
- m — masa substancji [g]
- M — masa molowa [g/mol]

**Łączony wzór:**
```
Cm = m / (M · V)
```

**Przykład 1:** 0,5 mola NaCl rozpuszczono w wodzie, uzyskując 2 dm³ roztworu. Oblicz Cm.
- n = 0,5 mol; V = 2 dm³
- Cm = 0,5/2 = 0,25 mol/dm³

**Przykład 2:** 5,85 g NaCl rozpuszczono w wodzie, uzyskując 1 dm³ roztworu. Oblicz Cm. (M NaCl = 58,5 g/mol)
- n = 5,85/58,5 = 0,1 mol
- Cm = 0,1/1 = 0,1 mol/dm³

**Przykład 3:** Ile gramów NaOH potrzeba do przygotowania 500 cm³ roztworu 0,2 mol/dm³? (M NaOH = 40 g/mol)
- V = 0,5 dm³; Cm = 0,2 mol/dm³
- n = Cm · V = 0,2 · 0,5 = 0,1 mol
- m = n · M = 0,1 · 40 = 4 g

### Rozpuszczalność

**Rozpuszczalność (R)** — maksymalna masa substancji, która rozpuszcza się w 100 g rozpuszczalnika w danej temperaturze.

**Jednostka:** g/100 g rozpuszczalnika.

**Przykład:** Rozpuszczalność NaCl w 20°C wynosi 36 g/100 g wody.
- W 100 g wody rozpuszcza się maks. 36 g NaCl.
- Powstaje 136 g roztworu nasyconego.
- Cp = (36/136)·100% ≈ 26,5%

**Zależność od temperatury:**
- Większość soli — rozpuszczalność rośnie z temperaturą.
- Niektóre (np. Ce₂(SO₄)₃) — maleje.
- Gazy — rozpuszczalność maleje z temperaturą.

### Przeliczanie stężeń (Cp ↔ Cm)

**Potrzebna gęstość roztworu (d).**

**Wzór przeliczeniowy:**
```
Cm = (Cp · d) / (100% · M)
```
gdzie:
- Cp — stężenie procentowe [%]
- d — gęstość roztworu [g/cm³]
- M — masa molowa substancji [g/mol]
- Cm — stężenie molowe [mol/dm³]

**Uwaga:** 1 dm³ = 1000 cm³; mr (1 dm³) = 1000·d [g].

**Przykład:** Roztwór HCl o Cp = 36,5% ma gęstość d = 1,18 g/cm³. Oblicz Cm. (M HCl = 36,5 g/mol)
- mr = 1000·1,18 = 1180 g
- ms = 36,5% · 1180 = 430,7 g
- n = 430,7/36,5 = 11,8 mol
- Cm = 11,8/1 = 11,8 mol/dm³

### Rozcieńczanie i zatężanie

**Rozcieńczanie** — dodawanie rozpuszczalnika; stężenie maleje, ilość substancji stała.

**Zasada zachowania ilości substancji:**
```
C₁ · V₁ = C₂ · V₂
```
gdzie:
- C₁, V₁ — stężenie i objętość przed rozcieńczeniem
- C₂, V₂ — stężenie i objętość po rozcieńczeniu

**Przykład:** 100 cm³ roztworu 2 mol/dm³ rozcieńczono do 500 cm³. Jakie Cm?
- C₁ = 2; V₁ = 0,1 dm³; V₂ = 0,5 dm³
- C₂ = (C₁ · V₁) / V₂ = (2 · 0,1) / 0,5 = 0,4 mol/dm³

**Zatężanie (odparowanie rozpuszczalnika)** — stężenie rośnie, ilość substancji stała.

**Mieszanie roztworów o tym samym składniku:**
```
Cp(mieszaniny) = (ms₁ + ms₂) / (mr₁ + mr₂) · 100%
```

### Ułamek molowy (rozszerzenie)

**Ułamek molowy składnika** = n_składnika / n_całkowite.

Suma ułamków molowych = 1.

**Przykład:** Roztwór zawiera 2 mole etanolu i 8 moli wody.
- x(etanol) = 2/(2+8) = 0,2
- x(woda) = 8/10 = 0,8

### Molalność (rozszerzenie)

**Molalność (m)** = liczba moli substancji na 1 kg rozpuszczalnika.

```
m = n / m_rozp [kg]
```

Różnica od Cm: molalność — masa rozpuszczalnika; Cm — objętość roztworu.

---

## 3. WZORY — PRZYPOMNIENIE (z L001)

**Mol:**
- n = m/M
- N = n · N_A (liczba Avogadra: 6,02·10²³)

**Masa molowa:**
- M = suma mas atomowych (np. M(NaCl) = 23 + 35,5 = 58,5 g/mol)
- M(H₂O) = 2·1 + 16 = 18 g/mol
- M(NaOH) = 23 + 16 + 1 = 40 g/mol
- M(H₂SO₄) = 2·1 + 32 + 4·16 = 98 g/mol

**Gęstość:**
- d = m/V [g/cm³]

**Jednostki:**
- 1 dm³ = 1000 cm³
- 1 kg = 1000 g
- 1 mol/dm³ = 1 M (zapis skrócony)

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Sporządzanie roztworu o określonym Cp

**Problem:** Jak przygotować 100 g roztworu NaCl o Cp = 10%?  
**Hipoteza:** Potrzeba 10 g NaCl i 90 g wody.  
**Sprzęt:** waga, zlewka, bagietka, 10 g NaCl, 90 g wody.  
**Obserwacja:** sól rozpuszcza się; powstaje klarowny roztwór.  
**Wniosek:** Cp = (10/100)·100% = 10%.  
**Równanie:** Cp = (ms/mr)·100%  
**BHP:** okulary.

### Doświadczenie 2: Rozcieńczanie roztworu

**Problem:** Jak zmieni się Cp roztworu po dodaniu wody?  
**Hipoteza:** Cp zmaleje proporcjonalnie.  
**Sprzęt:** 50 cm³ roztworu 4% + 50 cm³ wody.  
**Obserwacja:** barwa (jeśli barwny) staje się jaśniejsza.  
**Wniosek:** Cp = (2 g)/(100 g)·100% = 2%.  
**Równanie:** ms₁ = ms₂ (ilość substancji stała)  
**BHP:** okulary.

### Doświadczenie 3: Krystalizacja soli

**Problem:** Jak otrzymać kryształy soli z roztworu?  
**Hipoteza:** Po odparowaniu wody sól krystalizuje.  
**Sprzęt:** roztwór NaCl, parownica, palnik, szkiełko.  
**Obserwacja:** po odparowaniu wody powstają kryształy.  
**Wniosek:** Roztwór nasycony → krystalizacja.  
**Równanie:** (proces fizyczny)  
**BHP:** ogrzewanie — ostrożnie.

**Obserwacja ≠ wniosek:**
- Obserwacja: kryształy na dnie.
- Wniosek: roztwór był nasycony; po odparowaniu wody sól wykrystalizowała.
- Nie: „Obserwacja: roztwór nasycony".

---

## 5. ZASTOSOWANIA — STĘŻENIA W ŻYCIU CODZIENNYM

| Kontekst | Stężenie |
|----------|----------|
| Ocet | 5–10% kwasu octowego |
| Spirytus | 95% etanolu |
| Sól fizjologiczna | 0,9% NaCl |
| Woda utleniona | 3% H₂O₂ |
| Napoje gazowane | CO₂ (stężenie zależne od ciśnienia) |
| Leki | stężenie substancji czynnej |
| Nawozy | stężenie składników |
| Alkohol we krwi | promile (‰) |

---

## 6. PRZYKŁADY OBLICZEŃ (rozwiązane krok po kroku)

### Przykład 1: Cp z ms i mrozp

**Dane:** ms = 20 g; mrozp = 80 g. Oblicz Cp.
- mr = 20 + 80 = 100 g
- Cp = (20/100)·100% = 20%

### Przykład 2: ms z Cp i mr

**Dane:** Cp = 15%; mr = 300 g. Oblicz ms.
- ms = (15% · 300)/100% = 45 g

### Przykład 3: Cm z n i V

**Dane:** n = 0,4 mol; V = 2 dm³. Oblicz Cm.
- Cm = 0,4/2 = 0,2 mol/dm³

### Przykład 4: Cm z m, M, V

**Dane:** m = 4 g NaOH; M = 40 g/mol; V = 500 cm³ = 0,5 dm³. Oblicz Cm.
- n = 4/40 = 0,1 mol
- Cm = 0,1/0,5 = 0,2 mol/dm³

### Przykład 5: m z Cm, V, M

**Dane:** Cm = 0,5 mol/dm³; V = 0,2 dm³; M = 98 g/mol (H₂SO₄). Oblicz m.
- n = 0,5 · 0,2 = 0,1 mol
- m = 0,1 · 98 = 9,8 g

### Przykład 6: Rozcieńczanie

**Dane:** 50 cm³ roztworu 3 mol/dm³ rozcieńczono do 300 cm³. Oblicz Cm.
- C₁ = 3; V₁ = 0,05 dm³; V₂ = 0,3 dm³
- C₂ = (3 · 0,05) / 0,3 = 0,5 mol/dm³

### Przykład 7: Przeliczanie Cp ↔ Cm

**Dane:** Cp = 20%; d = 1,1 g/cm³; M = 40 g/mol. Oblicz Cm.
- mr (1 dm³) = 1000 · 1,1 = 1100 g
- ms = 0,2 · 1100 = 220 g
- n = 220/40 = 5,5 mol
- Cm = 5,5/1 = 5,5 mol/dm³

### Przykład 8: Mieszanie roztworów

**Dane:** 100 g roztworu 10% + 200 g roztworu 20%. Oblicz Cp.
- ms₁ = 10 g; ms₂ = 40 g; suma ms = 50 g
- mr = 100 + 200 = 300 g
- Cp = (50/300)·100% ≈ 16,7%

### Przykład 9: Rozpuszczalność

**Dane:** Rozpuszczalność KNO₃ w 40°C = 64 g/100 g wody. Oblicz Cp roztworu nasyconego.
- ms = 64 g; mrozp = 100 g; mr = 164 g
- Cp = (64/164)·100% ≈ 39%

### Przykład 10: Zadanie odwrotne — ile substancji do roztworu nasyconego

**Dane:** Rozpuszczalność NaCl = 36 g/100 g wody. Ile NaCl rozpuści się w 250 g wody?
- 36 g → 100 g wody
- x → 250 g wody
- x = (36 · 250) / 100 = 90 g

---

## 7. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawie | Reguła |
|-------------|-----------|--------|
| Cp = ms/mrozp | Cp = ms/mr | mr = ms + mrozp |
| Cm = m/V | Cm = n/V | Cm z moli |
| „Cp i Cm to samo" | różne jednostki, różne wzory | różne definicje |
| „stężenie molowe w g/dm³" | mol/dm³ | jednostka |
| „1 dm³ = 100 cm³" | 1 dm³ = 1000 cm³ | jednostka |
| V w cm³ bez przeliczenia | przeliczyć na dm³ | jednostka |
| „rozcieńczanie zmienia ilość substancji" | nie zmienia | ms stałe |
| brak gęstości w przeliczeniu Cp ↔ Cm | wymaga d | przekształcenie |
| ms + mrozp = mr (błąd) | ms + mrozp = mr (poprawnie) | suma mas |
| Cp w ułamku | Cp w % (mnożone przez 100%) | definicja |

### Klinika 2.0 — przykład 1

**Błąd:** Cp = ms/mrozp

- **Znajdź:** Zły mianownik.
- **Popraw:** Cp = ms/mr.
- **Reguła:** mr = ms + mrozp.
- **Dlaczego:** Cp to masa substancji w 100 g **roztworu**, nie rozpuszczalnika.
- **Zadanie podobne:** 10 g cukru w 90 g wody — Cp? (Odp.: 10%.)
- **Zadanie z pułapką:** 10 g cukru w 90 g wody — ile wynosi Cp, jeśli policzysz od rozpuszczalnika? (Odp.: 11,1% — błędnie.)

### Klinika 2.0 — przykład 2

**Błąd:** „Cm = m/V"

- **Znajdź:** Zła definicja.
- **Popraw:** Cm = n/V (liczba moli na dm³).
- **Reguła:** Cm z moli, nie masy.
- **Dlaczego:** Stężenie molowe określa liczbę moli w jednostce objętości.
- **Zadanie podobne:** 0,5 mola w 2 dm³ — Cm? (Odp.: 0,25 mol/dm³.)
- **Zadanie z pułapką:** 5,85 g NaCl w 1 dm³ — Cm? (Odp.: 0,1 mol/dm³; trzeba najpierw n = m/M.)

### Klinika 2.0 — przykład 3

**Błąd:** „Rozcieńczanie zmienia ilość substancji."

- **Znajdź:** Błędne założenie.
- **Popraw:** Rozcieńczanie nie zmienia ilości substancji (tylko objętość i stężenie).
- **Reguła:** C₁V₁ = C₂V₂.
- **Dlaczego:** Dodajemy tylko rozpuszczalnik; ms pozostaje stałe.
- **Zadanie podobne:** 100 cm³ 2 M → 500 cm³. Nowe Cm? (Odp.: 0,4 M.)
- **Zadanie z pułapką:** Czy rozcieńczanie może zwiększyć ilość substancji? (Odp.: Nie.)

### Klinika 2.0 — przykład 4

**Błąd:** „Cp można przeliczyć na Cm bez gęstości."

- **Znajdź:** Brak potrzebnej danej.
- **Popraw:** Przeliczenie Cp ↔ Cm wymaga gęstości (d).
- **Reguła:** Cm = (Cp · d) / (100% · M).
- **Dlaczego:** Cp opisuje masę, Cm — objętość; potrzebne jest powiązanie (gęstość).
- **Zadanie podobne:** Cp = 10%; d = 1,05 g/cm³; M = 40 g/mol — Cm? (Odp.: 2,625 mol/dm³.)
- **Zadanie z pułapką:** Bez d można przeliczyć Cp na Cm? (Odp.: Nie.)

### Klinika 2.0 — przykład 5

**Błąd:** „1 dm³ = 100 cm³"

- **Znajdź:** Błąd jednostki.
- **Popraw:** 1 dm³ = 1000 cm³ = 1000 ml.
- **Reguła:** 1 dm = 10 cm → 1 dm³ = 10³ cm³ = 1000 cm³.
- **Dlaczego:** Objętość skaluje się z sześcianem długości.
- **Zadanie podobne:** 500 cm³ = ? dm³ (Odp.: 0,5 dm³.)
- **Zadanie z pułapką:** 250 ml = ? dm³ (Odp.: 0,25 dm³.)

---

## 8. ĆWICZENIA

### 8.1. Mini-check (5 pytań)

1. Co to stężenie procentowe?
2. Co to stężenie molowe?
3. Jaki jest wzór na Cp?
4. Jaki jest wzór na Cm?
5. Co to rozpuszczalność?

### 8.2. Ćwiczenie prowadzone

**Dane:** 20 g NaCl rozpuszczono w 180 g wody.

**Krok 1.** ms = 20 g; mrozp = 180 g.
**Krok 2.** mr = 20 + 180 = 200 g.
**Krok 3.** Cp = (20/200)·100% = 10%.

**Spróbuj sam:** 10 g cukru w 90 g wody — Cp?

### 8.3. Ćwiczenia samodzielne

**A. Podstawa**

1. 15 g soli w 85 g wody — oblicz Cp.
2. 30 g cukru w 270 g wody — oblicz Cp.
3. Ile gramów soli potrzeba do 200 g roztworu 5%?
4. Ile gramów cukru do 500 g roztworu 20%?
5. 0,5 mola w 2 dm³ — oblicz Cm.
6. 1,5 mola w 3 dm³ — oblicz Cm.

**B. Trening**

7. 5,85 g NaCl w 1 dm³ — oblicz Cm (M = 58,5).
8. 4 g NaOH w 500 cm³ — oblicz Cm (M = 40).
9. Ile gramów H₂SO₄ w 250 cm³ roztworu 0,4 mol/dm³? (M = 98)
10. 100 cm³ roztworu 2 mol/dm³ rozcieńczono do 500 cm³ — nowe Cm?
11. 50 g roztworu 10% zmieszano z 150 g roztworu 30% — Cp mieszaniny?
12. Rozpuszczalność KNO₃ = 60 g/100 g wody. Oblicz Cp roztworu nasyconego.

**C. Ambitne**

13. Roztwór HCl o Cp = 36,5% ma d = 1,18 g/cm³. Oblicz Cm (M = 36,5).
14. Roztwór NaOH o Cm = 2 mol/dm³ ma d = 1,08 g/cm³. Oblicz Cp (M = 40).
15. Ile wody trzeba dodać do 100 cm³ roztworu 4 mol/dm³, aby uzyskać 1 mol/dm³?
16. Rozpuszczalność NaCl = 36 g/100 g wody. Ile NaCl rozpuści się w 250 g wody?
17. Ile gramów KNO₃ wykrystalizuje z 200 g roztworu nasyconego po ochłodzeniu z 60°C (R = 110 g/100 g) do 20°C (R = 32 g/100 g)?

**D. Zaawansowane**

18. Co to ułamek molowy? Podaj wzór.
19. Co to molalność? Czym różni się od Cm?
20. Roztwór zawiera 2 mole etanolu i 8 moli wody. Oblicz ułamki molowe.

### 8.4. Interleaving (przeplatany)

1. Jaki charakter ma NaOH? (z L003)
2. Zapisz wzór kwasu siarkowego(VI). (z L004)
3. Zapisz wzór siarczanu(VI) miedzi(II). (z L005)
4. Zbilansuj: NaOH + HCl → ? (z L003 + L004)
5. Ile wynosi M(H₂O)? (z L001)
6. Ile moli w 10 g NaOH? (z L008)
7. AgNO₃ + NaCl → ? (z L005)
8. 0,1 mola w 500 cm³ — Cm? (z L008)

### 8.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Podaj wzór na Cp. |
| ZASTOSUJ | Oblicz Cp z 10 g soli i 90 g wody. |
| WYJAŚNIJ | Dlaczego Cp to ms/mr, a nie ms/mrozp? |
| ODKRYJ | Ile gramów substancji w 300 g roztworu 15%? |
| POŁĄCZ | Przelicz Cp na Cm (z gęstością). |
| ZAKWESTIONUJ | Czy Cm można obliczyć bez gęstości przy przeliczaniu z Cp? |

---

## 9. ODPOWIEDZI

### Mini-check

1. Masa substancji w 100 g roztworu.
2. Liczba moli substancji w 1 dm³ roztworu.
3. Cp = (ms/mr)·100%.
4. Cm = n/V.
5. Maks. masa substancji w 100 g rozpuszczalnika w danej temp.

### Ćwiczenia A

1. 15%
2. 10%
3. 10 g
4. 100 g
5. 0,25 mol/dm³
6. 0,5 mol/dm³

### Ćwiczenia B

7. 0,1 mol/dm³
8. 0,2 mol/dm³
9. 9,8 g
10. 0,4 mol/dm³
11. ≈25%
12. ≈37,5%

### Ćwiczenia C

13. 11,8 mol/dm³
14. ≈7,4%
15. 300 cm³ wody
16. 90 g
17. ≈70,6 g (do weryfikacji)

### Ćwiczenia D

18. x_A = n_A / n_całk.
19. Molalność = n/kg rozpuszczalnika; Cm = n/dm³ roztworu.
20. x(etanol) = 0,2; x(woda) = 0,8

---

## 10. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Cp — wzór | Cp = (ms/mr)·100% |
| Cm — wzór | Cm = n/V |
| n — wzór | n = m/M |
| mr — wzór | mr = ms + mrozp |
| Cp — jednostka | % |
| Cm — jednostka | mol/dm³ |
| 1 dm³ — ile cm³ | 1000 cm³ |
| Rozpuszczalność — definicja | Maks. masa w 100 g rozpuszczalnika |
| Rozcieńczanie — wzór | C₁V₁ = C₂V₂ |
| Przeliczanie Cp ↔ Cm — wzór | Cm = (Cp · d)/(100% · M) |
| 10 g soli w 90 g wody — Cp? | 10% |
| 30 g cukru w 170 g wody — Cp? | 15% |
| 0,5 mola w 2 dm³ — Cm? | 0,25 mol/dm³ |
| 5,85 g NaCl w 1 dm³ — Cm? | 0,1 mol/dm³ |
| Ile g NaOH do 500 cm³ 0,2 M? | 4 g |
| Rozcieńczanie zmienia ms? | Nie |
| Rozcieńczanie zmienia Cm? | Tak |
| Przeliczanie Cp↔Cm bez d? | Nie można |
| Ułamek molowy | n_A/n_całk. |
| Molalność | n/kg rozpuszczalnika |
| Gęstość — wzór | d = m/V |
| Roztwór nasycony | Maks. stężenie w danej temp. |

---

## 11. TEST KOŃCOWY (L008)

1. 20 g soli w 80 g wody — oblicz Cp.
2. 40 g cukru w 160 g wody — oblicz Cp.
3. Ile gramów soli do 250 g roztworu 8%?
4. 0,4 mola w 2 dm³ — oblicz Cm.
5. 5,85 g NaCl w 1 dm³ — oblicz Cm (M = 58,5).
6. 100 cm³ roztworu 3 M → 600 cm³. Nowe Cm?
7. 50 g roztworu 10% + 100 g roztworu 20% — Cp mieszaniny?
8. (extra) Roztwór HCl o Cp = 20%; d = 1,1 g/cm³; M = 36,5. Oblicz Cm.
9. (extra) Ile NaCl rozpuści się w 300 g wody? (R = 36 g/100 g)

---

## 12. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Cp | wzór, przekształcenia |
| Cm | wzór, przekształcenia |
| n | n = m/M |
| mr | ms + mrozp |
| Rozcieńczanie | C₁V₁ = C₂V₂ |
| Przeliczanie Cp↔Cm | z gęstością |
| Rozpuszczalność | definicja, obliczenia |
| Jednostki | dm³, cm³, g, mol |

---

## 13. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 14. MAPA MYŚLI

```
STĘŻENIA
├── PODSTAWOWE POJĘCIA
│   ├── ms — masa substancji
│   ├── mrozp — masa rozpuszczalnika
│   ├── mr = ms + mrozp — masa roztworu
│   ├── n = m/M — liczba moli
│   ├── V — objętość roztworu
│   └── d = m/V — gęstość
├── STĘŻENIE PROCENTOWE
│   ├── Cp = (ms/mr)·100%
│   └── jednostka: %
├── STĘŻENIE MOLOWE
│   ├── Cm = n/V
│   └── jednostka: mol/dm³
├── ROZPUSZCZALNOŚĆ
│   ├── g/100 g rozpuszczalnika
│   └── zależność od temperatury
├── PRZELICZANIE
│   └── Cm = (Cp · d)/(100% · M)
├── ROZCIEŃCZANIE
│   └── C₁V₁ = C₂V₂
└── ROZSZERZENIA
    ├── ułamek molowy
    ├── molalność
    └── ppm
```

---

## 15. CO DALEJ?

**L009 — Stechiometria** : obliczenia z równań, nadmiar/niedomiar, wydajność.

Most: stężenia to podstawa stechiometrii w roztworach.

---

## 16. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Stężenie | Miara ilości substancji w roztworze |
| Stężenie procentowe | Masa substancji w 100 g roztworu |
| Stężenie molowe | Liczba moli w 1 dm³ roztworu |
| Rozpuszczalność | Maks. masa substancji w 100 g rozpuszczalnika |
| Mol | Jednostka liczności materii |
| Masa molowa | Masa 1 mola substancji (g/mol) |
| Gęstość | Masa jednostki objętości (g/cm³) |
| Rozcieńczanie | Dodawanie rozpuszczalnika |
| Zatężanie | Usuwanie rozpuszczalnika |
| Roztwór nasycony | Maksymalne stężenie w danej temp. |
| Ułamek molowy | n_A/n_całkowite |
| Molalność | n/kg rozpuszczalnika |

---

## 17. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: kryształy na dnie.  
Wniosek: roztwór był nasycony; po odparowaniu wody sól wykrystalizowała.  
Nie: „Obserwacja: roztwór nasycony".

---

## 18. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 7 (Klinika 2.0).

---

## 19. DODATEK E — WARSTWA EXTRA

### E.1. Stężenie ppm

**ppm** — parts per million (części na milion).

1 ppm = 1 mg substancji w 1 kg roztworu ≈ 1 mg/dm³.

**Zastosowanie:** zanieczyszczenia wody, powietrza.

### E.2. Molalność

**Molalność (m)** = n / m_rozp [kg].

Różnica od Cm:
- Cm — mol/dm³ roztworu.
- Molalność — mol/kg rozpuszczalnika.

Molalność nie zależy od temperatury (masa się nie zmienia), Cm — tak (objętość zależy od temperatury).

### E.3. Ułamek molowy

**Ułamek molowy składnika A:** x_A = n_A / (n_A + n_B + ...).

Suma ułamków molowych = 1.

**Przykład:** 2 mole etanolu + 8 moli wody.
- x(etanol) = 0,2
- x(woda) = 0,8

### E.4. Rozpuszczalność gazów

Rozpuszczalność gazów w wodzie **maleje** ze wzrostem temperatury.
- Dlatego ciepła woda zawiera mniej tlenu (ryby w ciepłych wodach).
- Dlatego napoje gazowane są gazowane na zimno.

### E.5. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L008 na ≥ 80%),
- gdy chcesz zrozumieć właściwości koligatywne,
- gdy interesuje cię stężenie jonów i pH.

L013 zawiera: właściwości koligatywne, aktywność jonów, pH, bufory, miareczkowanie.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Stężenie | Miara ilości substancji w roztworze. |
| Stężenie procentowe | Masa substancji w 100 g roztworu. |
| Stężenie molowe | Liczba moli substancji w 1 dm³ roztworu. |
| Rozpuszczalność | Maksymalna masa substancji w 100 g rozpuszczalnika. |
| Mol | Jednostka liczności materii (6,02·10²³ cząstek). |
| Gęstość | Masa jednostki objętości (g/cm³). |
| Rozcieńczanie | Dodawanie rozpuszczalnika bez zmiany ilości substancji. |
| Roztwór nasycony | Roztwór o maksymalnym stężeniu w danej temperaturze. |

---

## 21. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 22. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
STĘŻENIA
PODSTAWOWE:
ms — masa substancji
mrozp — masa rozpuszczalnika
mr = ms + mrozp
n = m/M
V — objętość roztworu
d = m/V

STĘŻENIE PROCENTOWE:
Cp = (ms/mr)·100%

STĘŻENIE MOLOWE:
Cm = n/V

PRZELICZANIE:
Cm = (Cp · d)/(100% · M)

ROZCIEŃCZANIE:
C₁V₁ = C₂V₂

ROZPUSZCZALNOŚĆ:
g/100 g rozpuszczalnika

JEDNOSTKI:
1 dm³ = 1000 cm³
1 kg = 1000 g
Cm: mol/dm³

PUŁAPKI:
- Cp = ms/mr (nie ms/mrozp)
- Cm = n/V (nie m/V)
- rozcieńczanie nie zmienia ms
- przeliczanie Cp↔Cm wymaga d
- 1 dm³ = 1000 cm³
```

---

## 23. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, ŚCIĄGĘ rozbudowaną, DOŚWIADCZENIA (3), ZASTOSOWANIA, 10 rozwiązań krok po kroku, KLINIKĘ 2.0 (5 przykładów), ĆWICZENIA A/B/C/D, Interleaving, Drabinkę, Fiszki 22, System powtórek, Mapę myśli, SŁOWNIK, DODATKI C/D/E, Definicje, 10 zasad, Szybką ściągę, STATUS.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L008 MASTER v1.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L008)

Stężenia — Cp na E8 + ostrożnie Cm.

### Ściąga 80/20
- Cp = (ms / mr) × 100%    mr = ms + mh₂o (dla roztworu wodnego, gdy tak podano).
- „10%” ≠ 10 g/cm³ (to nie gęstość).
- Rozcieńczanie: substancji tyle samo, masy/objętości rozpuszczalnika więcej → Cp spada.
- Cm = n / V  (n w molach, V w dm³) — jeśli w podstawie jest; jeśli nie, zostaw jako train/amb.
- Jednostki: g z g, cm³ z cm³; nie mieszaj ml i dm³ bez przeliczenia.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Cp = ms / mh₂o | dzielimy przez **masę roztworu** |
| 50 g soli + 50 g wody = 50%? | mr = 100 g → tak; ale 50 g + 50 cm³ wody wymaga gęstości |
| Cm w % | inna wielkość |
| Rozcieńczanie „dodaję sól” | to zatężanie |

### 6 zadań extra
1. 15 g substancji w 135 g wody — Cp?  
2. Ile substancji w 200 g roztworu 5%?  
3. Masz 100 g 10%. Dodajesz 100 g wody. Nowe Cp?  
4. Cp vs gęstość — jednym zdaniem.  
5. 0,5 mola w 0,25 dm³ — Cm? (jeśli ćwiczysz Cm)  
6. Co jest stałe przy rozcieńczaniu: ms czy Cp?

Szkic: 1 10%. 2 10 g. 3 5%. 4 Cp to udział masy, gęstość to m/V. 5 2 mol/dm³. 6 ms.

### Status doklejki
2026-09-12 · sekcje 1–23 bez zmian.



---

## UZUPEŁNIENIE wizualne L008 (audyt plus.md — doklejone)

### Flowchart

gramy → Cp = (ms/mr)·100%  
mole i dm³ → Cm = n/V  
rozcieńczanie → substancji tyle samo, Cp spada  
Cp ↔ Cm wymaga gęstości.

### Rozcieńczanie a ms

Dodajesz rozpuszczalnik, nie substancję — ms stałe, mr i V rosną, stężenie maleje.

### Rozpuszczalność vs T

Większość soli: T↑ rozpuszczalność↑ (KNO₃ mocno; NaCl słabo). Niektóre sole (szkolny wyjątek) mogą maleć — extra.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L008 (przegląd mer. — doklejone)

Cp jest **masowe**. Istnieje też stężenie objętościowe, molalność (n/kg rozpuszczalnika), ułamek molowy, ppm — extra.  
Rozpuszczalność zależy od T; **gazy zwykle gorzej** rozpuszczają się przy wyższej T.

### Ciekawostki
- Maks. gęstość wody ok. 4 °C — lód pływa, zamarzanie jeziora od góry.
- 1 ppm ≈ 1 mg/kg (roztwory bardzo rozcieńczone).
- Sól fizjologiczna ~0,9% NaCl — zbliżona osmotycznie do płynów ustrojowych.
- Morze ~3,5% soli.

<!-- ==================== END L008 ==================== -->

<!-- ==================== BEGIN L009 ==================== -->

# LEKCJA L009 — STECHIOMETRIA

# CHEMIA: PODSTAWA PLUS

## L009 — Stechiometria

**Obliczenia z równań · mol · masa molowa · objętość molowa gazów · nadmiar/niedomiar · wydajność**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002–L008 MASTER  
Poprzednia lekcja: L008 (stężenia) · Następna: L010 (redoks)

**Kolejność:** definicja stechiometrii → mol → masa molowa → proporcje z równań → objętość molowa gazów → nadmiar/niedomiar → wydajność

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L009 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj proporcje: „jeden mol do dwóch moli".
5. **Rysuj.** Schemat proporcji, tabelki.
6. **Łap moment „aha!".**

**Zasada 80/20:** mol · masa molowa · proporcje z równań · objętość molowa gazów · nadmiar/niedomiar.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. n = m/M  
2. 1 mol gazu (warunki normalne) = 22,4 dm³  
3. Współczynniki w równaniu = stosunek molowy  
4. Prawo zachowania masy  
5. Wydajność = (m_rzecz / m_teor) · 100%

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW":**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 7 — Klinika 2.0.)

**Oznaczenia reguł (bez emoji, opis słowny):**  
· fakt chemiczny  
· uproszczenie szkolne  
· wskazówka egzaminacyjna  
· uwaga (pułapka)

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- Masa atomowa, masa cząsteczkowa
- Mol, liczba Avogadra
- Bilansowanie równań

Z L002–L005:
- Równania reakcji
- Reakcje strąceniowe
- Reakcje spalania

Z L006–L008:
- Węglowodory, biochemia
- Stężenia (Cp, Cm)

**Wymagane umiejętności:**
- Bilansowanie równań
- Przeliczanie jednostek
- Proporcje

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zdefiniować stechiometrię,
- obliczyć liczbę moli (n = m/M),
- obliczyć masę substancji na podstawie równania,
- obliczyć objętość gazu (warunki normalne: 22,4 dm³/mol),
- rozwiązać zadanie z nadmiarem/niedomiarem,
- obliczyć wydajność reakcji,
- (ambitny) rozwiązać zadania z roztworami (z użyciem Cm),
- (zaawansowany) znać pojęcie reagenta ograniczającego i stechiometrii złożonej.

---

## 2. ŚCIĄGA

### Definicja

**Stechiometria** — dział chemii zajmujący się ilościowymi zależnościami między substratami i produktami reakcji.

**Podstawowa zasada:** współczynniki w równaniu reakcji określają stosunek molowy substratów i produktów.

**Przykład:**
```
2H₂ + O₂ → 2H₂O
```
- 2 mole H₂ reagują z 1 molem O₂ → powstają 2 mole H₂O.
- Stosunek molowy: 2 : 1 : 2.

### Mol i masa molowa

**Mol** — jednostka liczności materii; 1 mol = 6,02·10²³ cząstek (liczba Avogadra N_A).

**Masa molowa (M)** — masa 1 mola substancji [g/mol].

**Wzory:**
```
n = m / M          (liczba moli)
m = n · M          (masa)
M = m / n          (masa molowa)
```

**Przykłady mas molowych:**
- M(H₂) = 2 g/mol
- M(O₂) = 32 g/mol
- M(H₂O) = 18 g/mol
- M(NaCl) = 58,5 g/mol
- M(NaOH) = 40 g/mol
- M(H₂SO₄) = 98 g/mol
- M(CaCO₃) = 100 g/mol

### Objętość molowa gazów

**Warunki normalne (warunki standardowe):**
- Temperatura: 0°C (273,15 K)
- Ciśnienie: 1013,25 hPa (1 atm)

**Objętość molowa gazu w warunkach normalnych:** 22,4 dm³/mol.

**Wzory:**
```
n = V / 22,4       (V w warunkach normalnych)
V = n · 22,4
```

**Uwaga:** 22,4 dm³/mol dotyczy gazów **doskonałych** w warunkach normalnych. W innych warunkach użyj równania Clapeyrona (rozszerzenie):
```
pV = nRT
```
gdzie:
- p — ciśnienie [Pa]
- V — objętość [m³]
- n — liczba moli
- R — stała gazowa (8,314 J/(mol·K))
- T — temperatura [K]

### Obliczenia z równań — schemat

**Schemat postępowania:**
1. Zapisz równanie reakcji (z bilansem).
2. Podkreśl substancje, o których mowa w zadaniu.
3. Ustal stosunek molowy z współczynników.
4. Przelicz dane na mole (n = m/M lub n = V/22,4).
5. Ułóż proporcję i oblicz.
6. Przelicz wynik na żądaną jednostkę.

**Przykład:**
```
2H₂ + O₂ → 2H₂O
```
Ile gramów wody powstanie z 4 g wodoru?

- M(H₂) = 2 g/mol
- n(H₂) = 4/2 = 2 mole
- Stosunek: 2 mole H₂ → 2 mole H₂O
- Więc n(H₂O) = 2 mole
- M(H₂O) = 18 g/mol
- m(H₂O) = 2 · 18 = 36 g

**Odpowiedź:** Powstanie 36 g wody.

### Przykłady obliczeń (różne warianty)

**Wariant 1: masa → masa**

Ile gramów MgO powstanie ze spalenia 6 g magnezu?
```
2Mg + O₂ → 2MgO
```
- M(Mg) = 24 g/mol
- n(Mg) = 6/24 = 0,25 mol
- Stosunek: 2 Mg → 2 MgO (1 : 1)
- n(MgO) = 0,25 mol
- M(MgO) = 40 g/mol
- m(MgO) = 0,25 · 40 = 10 g

**Wariant 2: masa → objętość gazu**

Ile dm³ CO₂ (warunki normalne) powstanie z rozkładu 20 g CaCO₃?
```
CaCO₃ → CaO + CO₂
```
- M(CaCO₃) = 100 g/mol
- n(CaCO₃) = 20/100 = 0,2 mol
- Stosunek: 1 CaCO₃ → 1 CO₂
- n(CO₂) = 0,2 mol
- V = n · 22,4 = 0,2 · 22,4 = 4,48 dm³

**Wariant 3: objętość → masa**

Ile gramów H₂O powstanie ze spalenia 11,2 dm³ H₂ (warunki normalne)?
```
2H₂ + O₂ → 2H₂O
```
- n(H₂) = 11,2/22,4 = 0,5 mol
- Stosunek: 2 H₂ → 2 H₂O
- n(H₂O) = 0,5 mol
- m(H₂O) = 0,5 · 18 = 9 g

**Wariant 4: roztwór → masa**

Ile gramów NaCl potrzeba do zobojętnienia 200 cm³ HCl o Cm = 0,5 mol/dm³?
```
NaOH + HCl → NaCl + H₂O
```
- V = 0,2 dm³; Cm = 0,5 mol/dm³
- n(HCl) = 0,5 · 0,2 = 0,1 mol
- Stosunek: 1 HCl → 1 NaCl (założenie: przez NaOH)
- n(NaCl) = 0,1 mol
- M(NaCl) = 58,5 g/mol
- m(NaCl) = 0,1 · 58,5 = 5,85 g

**Wariant 5: nadmiar/niedomiar**

Dane: 4 g H₂ + 4 g O₂. Ile H₂O powstanie?
```
2H₂ + O₂ → 2H₂O
```
- n(H₂) = 4/2 = 2 mole
- n(O₂) = 4/32 = 0,125 mola
- Stosunek potrzebny: 2 : 1
- Na 2 mole H₂ potrzeba 1 mol O₂ — mamy 0,125 mola O₂ → **O₂ jest reagentem ograniczającym**.
- n(H₂O) = 2 · n(O₂) = 2 · 0,125 = 0,25 mola
- m(H₂O) = 0,25 · 18 = 4,5 g

**Wariant 6: wydajność**

Dane: teoretycznie powinno powstać 10 g produktu, otrzymano 8 g. Wydajność?
- W = (8/10) · 100% = 80%

### Nadmiar/niedomiar — reagent ograniczający

**Reagent ograniczający** — substrat, który zużyje się pierwszy (decyduje o ilości produktu).

**Algorytm:**
1. Oblicz n każdego substratu.
2. Podziel n przez współczynnik stechiometryczny.
3. Mniejszy wynik → reagent ograniczający.
4. Produkt licz z reagenta ograniczającego.

**Przykład:**
```
N₂ + 3H₂ → 2NH₃
```
Dane: 2 mole N₂ + 5 moli H₂.
- N₂: 2/1 = 2
- H₂: 5/3 ≈ 1,67
- Mniejszy → H₂ (reagent ograniczający)
- n(NH₃) = 2 · n(H₂)/3 = 2 · 5/3 ≈ 3,33 mola

### Wydajność reakcji

**Wydajność (W)** — stosunek masy/ilości rzeczywistej do teoretycznej.

```
W = (m_rzecz / m_teor) · 100%
lub
W = (n_rzecz / n_teor) · 100%
```

**Uwaga:** wydajność nie może przekroczyć 100%.

### Prawo zachowania masy

**Prawo zachowania masy (Lavoisier):** masa substratów = masa produktów.

W praktyce: masa substratów = masa produktów + ewentualne straty.

---

## 3. WZORY — PRZYPOMNIENIE (z L001, L008)

**Mol i masa:**
- n = m/M
- m = n·M
- M = m/n

**Objętość gazu (warunki normalne):**
- n = V/22,4
- V = n·22,4

**Stężenie molowe:**
- Cm = n/V
- n = Cm·V

**Stężenie procentowe:**
- Cp = (ms/mr)·100%

**Gęstość:**
- d = m/V

**Liczba Avogadra:**
- N_A = 6,02·10²³ cząstek/mol
- N = n·N_A

**Równanie Clapeyrona (rozszerzenie):**
- pV = nRT
- R = 8,314 J/(mol·K)

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Spalanie magnezu

**Problem:** Ile gramów MgO powstanie ze spalenia 1,2 g Mg?  
**Hipoteza:** Masa produktu jest większa od masy substratu (Mg + O).  
**Sprzęt:** wstążka Mg (1,2 g), palnik, waga.  
**Obserwacja:** biały proszek (MgO).  
**Wniosek:** 2Mg + O₂ → 2MgO; masa MgO = 2 g.  
**Obliczenie:** n(Mg) = 0,05 mol → n(MgO) = 0,05 mol → m(MgO) = 2 g.  
**BHP:** okulary, nie patrzeć na płomień.

### Doświadczenie 2: Reakcja z nadmiarem

**Problem:** Co się dzieje, gdy jeden substrat jest w nadmiarze?  
**Hipoteza:** Produkt tworzy się do wyczerpania reagenta ograniczającego.  
**Sprzęt:** Zn (nadmiar) + HCl (niedomiar).  
**Obserwacja:** Zn pozostaje nieprzereagowany; wydziela się H₂.  
**Wniosek:** HCl jest reagentem ograniczającym.  
**BHP:** okulary.

### Doświadczenie 3: Pomiar objętości gazu

**Problem:** Ile dm³ CO₂ powstanie z 10 g CaCO₃?  
**Hipoteza:** V = n·22,4.  
**Sprzęt:** CaCO₃, HCl, aparat do zbierania gazu.  
**Obserwacja:** gaz wypiera wodę.  
**Wniosek:** V(CO₂) = 2,24 dm³ (warunki normalne).  
**Obliczenie:** n(CaCO₃) = 0,1 mol → n(CO₂) = 0,1 mol → V = 2,24 dm³.  
**BHP:** okulary.

**Obserwacja ≠ wniosek:**
- Obserwacja: gaz wypiera wodę.
- Wniosek: powstaje CO₂ (potwierdzone mętnieniem wody wapiennej).
- Nie: „Obserwacja: CO₂".

---

## 5. ZASTOSOWANIA — STECHIOMETRIA W PRAKTYCE

| Kontekst | Zastosowanie |
|----------|--------------|
| Przemysł | obliczanie ilości substratów |
| Rolnictwo | nawozy (stosunek N:P:K) |
| Medycyna | dawki leków |
| Ochrona środowiska | emisja CO₂ |
| Gospodarstwo domowe | przepisy kulinarne |
| Laboratorium | przygotowywanie roztworów |

---

## 6. PRZYKŁADY OBLICZEŃ (rozwiązane krok po kroku)

### Przykład 1: masa → masa

**Dane:** Ile gramów H₂O powstanie ze spalenia 4 g H₂?
```
2H₂ + O₂ → 2H₂O
```
- n(H₂) = 4/2 = 2 mole
- Stosunek: 2 H₂ → 2 H₂O
- n(H₂O) = 2 mole
- m(H₂O) = 2 · 18 = 36 g

**Odpowiedź:** 36 g wody.

### Przykład 2: masa → objętość

**Dane:** Ile dm³ CO₂ (warunki normalne) powstanie z rozkładu 50 g CaCO₃?
```
CaCO₃ → CaO + CO₂
```
- M(CaCO₃) = 100 g/mol
- n(CaCO₃) = 50/100 = 0,5 mol
- n(CO₂) = 0,5 mol
- V = 0,5 · 22,4 = 11,2 dm³

**Odpowiedź:** 11,2 dm³ CO₂.

### Przykład 3: objętość → masa

**Dane:** Ile gramów wody powstanie ze spalenia 5,6 dm³ H₂ (warunki normalne)?
```
2H₂ + O₂ → 2H₂O
```
- n(H₂) = 5,6/22,4 = 0,25 mol
- Stosunek: 2 H₂ → 2 H₂O
- n(H₂O) = 0,25 mol
- m(H₂O) = 0,25 · 18 = 4,5 g

**Odpowiedź:** 4,5 g wody.

### Przykład 4: roztwór

**Dane:** Ile gramów NaCl powstanie w reakcji 100 cm³ HCl o Cm = 1 mol/dm³ z NaOH?
```
NaOH + HCl → NaCl + H₂O
```
- V = 0,1 dm³
- n(HCl) = 1 · 0,1 = 0,1 mol
- Stosunek: 1 HCl → 1 NaCl
- n(NaCl) = 0,1 mol
- m(NaCl) = 0,1 · 58,5 = 5,85 g

**Odpowiedź:** 5,85 g NaCl.

### Przykład 5: nadmiar/niedomiar

**Dane:** 8 g H₂ + 32 g O₂. Ile H₂O powstanie?
```
2H₂ + O₂ → 2H₂O
```
- n(H₂) = 8/2 = 4 mole
- n(O₂) = 32/32 = 1 mol
- Wymagany stosunek: 2 H₂ : 1 O₂
- Na 4 mole H₂ potrzeba 2 mole O₂; mamy 1 mol → **O₂ reagent ograniczający**.
- n(H₂O) = 2 · n(O₂) = 2 mole
- m(H₂O) = 2 · 18 = 36 g

**Odpowiedź:** 36 g wody. (H₂ w nadmiarze.)

### Przykład 6: wydajność

**Dane:** Teoretycznie powinno powstać 20 g produktu; otrzymano 15 g. Wydajność?
- W = (15/20) · 100% = 75%

**Odpowiedź:** 75%.

### Przykład 7: zadanie odwrotne

**Dane:** Ile gramów CaCO₃ potrzeba do otrzymania 4,4 g CO₂?
```
CaCO₃ → CaO + CO₂
```
- M(CO₂) = 44 g/mol
- n(CO₂) = 4,4/44 = 0,1 mol
- Stosunek: 1 CaCO₃ → 1 CO₂
- n(CaCO₃) = 0,1 mol
- m(CaCO₃) = 0,1 · 100 = 10 g

**Odpowiedź:** 10 g CaCO₃.

### Przykład 8: stechiometria z gazem w innych warunkach

**Dane:** Ile dm³ H₂ (w temp. 25°C i ciśnieniu 1013 hPa) powstanie z 6,5 g Zn + HCl?
```
Zn + 2HCl → ZnCl₂ + H₂
```
- n(Zn) = 6,5/65 = 0,1 mol
- n(H₂) = 0,1 mol
- W warunkach normalnych: V = 0,1 · 22,4 = 2,24 dm³
- W warunkach podanych (25°C = 298 K): 
  - pV = nRT → V = nRT/p = (0,1 · 8,314 · 298) / 101300 ≈ 0,00245 m³ = 2,45 dm³
- (około 2,45 dm³ — nieco więcej niż w warunkach normalnych)

**Odpowiedź:** ≈2,45 dm³ H₂.

### Przykład 9: mieszanina

**Dane:** 10 g mieszaniny CaCO₃ i NaCl. Po dodaniu HCl wydzieliło się 2,24 dm³ CO₂ (warunki normalne). Ile % CaCO₃ w mieszaninie?
- n(CO₂) = 2,24/22,4 = 0,1 mol
- n(CaCO₃) = 0,1 mol (bo 1 CaCO₃ → 1 CO₂)
- m(CaCO₃) = 0,1 · 100 = 10 g
- %CaCO₃ = (10/10) · 100% = 100%

**Odpowiedź:** Mieszanina zawiera 100% CaCO₃. (W tym przypadku NaCl nie reaguje z HCl.)

### Przykład 10: roztwór + stechiometria

**Dane:** Ile cm³ roztworu NaOH o Cm = 2 mol/dm³ potrzeba do zobojętnienia 50 cm³ H₂SO₄ o Cm = 1 mol/dm³?
```
2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O
```
- n(H₂SO₄) = 1 · 0,05 = 0,05 mol
- Stosunek: 1 H₂SO₄ → 2 NaOH
- n(NaOH) = 0,1 mol
- V(NaOH) = n / Cm = 0,1/2 = 0,05 dm³ = 50 cm³

**Odpowiedź:** 50 cm³ roztworu NaOH.

---

## 7. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawie | Reguła |
|-------------|-----------|--------|
| n = M/m | n = m/M | wzór |
| V = n/22,4 | V = n · 22,4 | wzór |
| „stosunek masowy = stosunek molowy" | nie zawsze — zależy od M | definicja |
| „wszystkie substraty reagują całkowicie" | nie — może być nadmiar | nadmiar |
| „wydajność = 100%" | zwykle < 100% | definicja |
| „22,4 dm³/mol w każdej temp." | tylko w warunkach normalnych | warunki |
| „1 mol = 22,4 g" | 1 mol = M gramów | jednostka |
| „Liczba moli taka sama dla wszystkich" | zależy od M | wzór |
| „Mnożę masę przez współczynnik" | mnożę **liczba moli** przez współczynnik | proporcja |
| Brak bilansu przed obliczeniami | najpierw bilansuj | kolejność |

### Klinika 2.0 — przykład 1

**Błąd:** n = M/m

- **Znajdź:** Odwrócony wzór.
- **Popraw:** n = m/M.
- **Reguła:** Liczba moli = masa podzielona przez masę molową.
- **Dlaczego:** M jest w g/mol, m w g → m/M daje mol.
- **Zadanie podobne:** Ile moli w 20 g NaOH? (Odp.: 0,5 mola.)
- **Zadanie z pułapką:** Ile moli w 20 g H₂O? (Odp.: 1,11 mola.)

### Klinika 2.0 — przykład 2

**Błąd:** V = n/22,4

- **Znajdź:** Odwrócony wzór.
- **Popraw:** V = n · 22,4 (warunki normalne).
- **Reguła:** Objętość molowa = 22,4 dm³/mol.
- **Dlaczego:** 1 mol → 22,4 dm³; n moli → n·22,4 dm³.
- **Zadanie podobne:** Ile dm³ w 0,5 mola gazu? (Odp.: 11,2 dm³.)
- **Zadanie z pułapką:** Ile dm³ w 2 molach? (Odp.: 44,8 dm³.)

### Klinika 2.0 — przykład 3

**Błąd:** „Wszystkie substraty reagują całkowicie."

- **Znajdź:** Brak analizy nadmiaru.
- **Popraw:** Jeden substrat może być w nadmiarze. Reagent ograniczający decyduje o produkcie.
- **Reguła:** Algorytm reagentu ograniczającego.
- **Dlaczego:** Reakcja zachodzi do wyczerpania jednego substratu.
- **Zadanie podobne:** 4 g H₂ + 4 g O₂ — który w nadmiarze? (Odp.: H₂.)
- **Zadanie z pułapką:** 2 mole N₂ + 3 mole H₂ — reagent ograniczający? (Odp.: H₂, bo 3/3 = 1 < 2/1.)

### Klinika 2.0 — przykład 4

**Błąd:** „22,4 dm³/mol w każdej temperaturze."

- **Znajdź:** Brak warunków.
- **Popraw:** 22,4 dm³/mol tylko w warunkach normalnych (0°C, 1013 hPa).
- **Reguła:** Objętość molowa zależy od T i p.
- **Dlaczego:** Gazy rozszerzają się przy ogrzewaniu.
- **Zadanie podobne:** Ile dm³ w 0,1 mola w warunkach normalnych? (Odp.: 2,24 dm³.)
- **Zadanie z pułapką:** Ile dm³ w 0,1 mola w 25°C? (Odp.: ~2,45 dm³.)

### Klinika 2.0 — przykład 5

**Błąd:** Mnożenie masy przez współczynnik zamiast liczby moli.

- **Znajdź:** Zła proporcja.
- **Popraw:** Najpierw n, potem proporcja molowa, potem masa.
- **Reguła:** Współczynniki dotyczą moli, nie mas.
- **Dlaczego:** Współczynniki stechiometryczne to stosunek molowy.
- **Zadanie podobne:** 4 g H₂ → ile g H₂O? (Odp.: 36 g.)
- **Zadanie z pułapką:** 4 g H₂ → ile g H₂O bez liczenia moli? (Odp.: nie da się — trzeba najpierw n.)

---

## 8. ĆWICZENIA

### 8.1. Mini-check (5 pytań)

1. Co to stechiometria?
2. Wzór na liczbę moli?
3. Ile dm³ ma 1 mol gazu w warunkach normalnych?
4. Co to reagent ograniczający?
5. Co to wydajność?

### 8.2. Ćwiczenie prowadzone

**Dane:** Ile gramów MgO powstanie ze spalenia 4,8 g Mg?
```
2Mg + O₂ → 2MgO
```
- n(Mg) = 4,8/24 = 0,2 mol
- Stosunek: 2 Mg → 2 MgO
- n(MgO) = 0,2 mol
- m(MgO) = 0,2 · 40 = 8 g

**Spróbuj sam:** Ile gramów H₂O powstanie z 3 g H₂?

### 8.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Ile moli w 36 g H₂O? (M = 18)
2. Ile moli w 80 g NaOH? (M = 40)
3. Ile dm³ w 0,5 mola H₂ (warunki normalne)?
4. Ile dm³ w 2 molach CO₂?
5. Ile gramów w 0,5 mola NaCl? (M = 58,5)
6. Ile gramów w 0,25 mola H₂SO₄? (M = 98)

**B. Trening**

7. Ile gramów H₂O powstanie ze spalenia 4 g H₂?
8. Ile gramów MgO powstanie ze spalenia 6 g Mg?
9. Ile dm³ CO₂ powstanie z rozkładu 20 g CaCO₃?
10. Ile gramów CO₂ powstanie ze spalenia 8 g CH₄? (CH₄ + 2O₂ → CO₂ + 2H₂O)
11. 6 g Mg + 4 g O₂ — reagent ograniczający? Ile MgO?
12. Teoretycznie 40 g, otrzymano 32 g — wydajność?

**C. Ambitne**

13. Ile cm³ HCl o Cm = 2 mol/dm³ potrzeba do zobojętnienia 100 cm³ NaOH o Cm = 1 mol/dm³?
14. 10 g mieszaniny CaCO₃ + NaCl → HCl → 2,24 dm³ CO₂ (n). Ile % CaCO₃?
15. Ile dm³ H₂ (warunki normalne) powstanie z 6,5 g Zn + HCl?
16. Ile gramów Zn potrzeba do otrzymania 4,48 dm³ H₂ (n)?
17. 8 g S + 8 g O₂ → SO₂. Reagent ograniczający? Ile SO₂?

**D. Zaawansowane**

18. Ile dm³ CO₂ (25°C, 1013 hPa) powstanie ze spalenia 1 mola CH₄?
19. Oblicz wydajność, jeśli z 10 g CaCO₃ otrzymano 4 g CaO.
20. Ile gramów Na₂SO₄ powstanie z 50 cm³ H₂SO₄ o Cm = 2 mol/dm³ + NaOH?

### 8.4. Interleaving (przeplatany)

1. Jaki charakter ma MgO? (z L002)
2. Zapisz wzór kwasu siarkowego(VI). (z L004)
3. Zapisz wzór siarczanu(VI) sodu. (z L005)
4. Zbilansuj: 2H₂ + O₂ → ? (z L006)
5. Ile moli w 18 g H₂O? (z L009)
6. Jaką masę ma 0,5 mola NaCl? (z L009)
7. Jaki reagent ograniczający w 4 g H₂ + 32 g O₂? (z L009)
8. Ile dm³ CO₂ z 10 g CaCO₃? (z L009)

### 8.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Podaj wzór na liczbę moli. |
| ZASTOSUJ | Ile moli w 36 g H₂O? |
| WYJAŚNIJ | Dlaczego reagent ograniczający decyduje o produkcie? |
| ODKRYJ | Ile g MgO ze spalenia 6 g Mg? |
| POŁĄCZ | Połącz stechiometrię ze stężeniami. |
| ZAKWESTIONUJ | Czy wydajność może być > 100%? |

---

## 9. ODPOWIEDZI

### Mini-check

1. Dział chemii o ilościowych zależnościach.
2. n = m/M.
3. 22,4 dm³.
4. Substrat, który zużyje się pierwszy.
5. Stosunek ilości rzeczywistej do teoretycznej.

### Ćwiczenia A

1. 2 mole
2. 2 mole
3. 11,2 dm³
4. 44,8 dm³
5. 29,25 g
6. 24,5 g

### Ćwiczenia B

7. 36 g
8. 10 g
9. 4,48 dm³
10. 22 g
11. O₂ ograniczający; m(MgO) = 10 g
12. 80%

### Ćwiczenia C

13. 50 cm³
14. 100% CaCO₃ (10 g)
15. 2,24 dm³
16. 13 g
17. S ograniczający; m(SO₂) = 16 g
18. ~24,5 dm³
19. W = (4/5,6) · 100% ≈ 71,4% (teor. m(CaO) = 5,6 g)
20. 14,2 g Na₂SO₄ (n(H₂SO₄) = 0,1 mol → n(Na₂SO₄) = 0,1 mol → m = 0,1·142 = 14,2 g)

### Ćwiczenia D

18. V = (1·8,314·298)/101300 ≈ 0,02445 m³ ≈ 24,45 dm³
19. ~71,4%
20. 14,2 g Na₂SO₄

---

## 10. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| n — wzór | n = m/M |
| m — wzór | m = n·M |
| M — wzór | M = m/n |
| V gazu (n) — wzór | V = n·22,4 |
| 1 mol gazu (n) | 22,4 dm³ |
| Liczba Avogadra | 6,02·10²³ |
| N — wzór | N = n·N_A |
| Stechiometria — definicja | Ilościowe zależności w reakcjach |
| Współczynniki — co oznaczają | Stosunek molowy |
| Reagent ograniczający | Substrat zużyty pierwszy |
| Wydajność — wzór | W = (rzecz/teor)·100% |
| Prawo zachowania masy | m(substratów) = m(produktów) |
| Ile g H₂O z 4 g H₂? | 36 g |
| Ile g MgO z 6 g Mg? | 10 g |
| Ile dm³ CO₂ z 20 g CaCO₃? | 4,48 dm³ |
| Ile moli w 36 g H₂O? | 2 mole |
| Ile moli w 80 g NaOH? | 2 mole |
| M(H₂O) | 18 g/mol |
| M(NaCl) | 58,5 g/mol |
| M(NaOH) | 40 g/mol |
| M(H₂SO₄) | 98 g/mol |
| M(CaCO₃) | 100 g/mol |

---

## 11. TEST KOŃCOWY (L009)

1. Ile moli w 54 g H₂O?
2. Ile dm³ w 0,25 mola gazu (warunki normalne)?
3. Ile gramów H₂O powstanie ze spalenia 6 g H₂?
4. Ile gramów MgO powstanie ze spalenia 9,6 g Mg?
5. Ile dm³ CO₂ powstanie z rozkładu 30 g CaCO₃?
6. 4 g H₂ + 16 g O₂ — reagent ograniczający? Ile H₂O?
7. Teoretycznie 50 g, otrzymano 40 g — wydajność?
8. (extra) Ile cm³ HCl 2 M potrzeba do zobojętnienia 100 cm³ NaOH 0,5 M?
9. (extra) Ile dm³ CO₂ (25°C, 1013 hPa) powstanie ze spalenia 0,5 mola CH₄?

---

## 12. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Mol | n = m/M |
| Masa molowa | M = suma mas atomowych |
| Objętość molowa | 22,4 dm³/mol (warunki normalne) |
| Proporcje z równań | współczynniki → stosunek molowy |
| Nadmiar/niedomiar | reagent ograniczający |
| Wydajność | (rzecz/teor)·100% |
| Prawo zachowania masy | substraty = produkty |
| Stechiometria z roztworami | Cm·V = n |

---

## 13. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 14. MAPA MYŚLI

```
STECHIOMETRIA
├── MOL
│   ├── n = m/M
│   └── N = n·N_A
├── MASA MOLOWA
│   └── M = suma mas atomowych
├── OBJĘTOŚĆ MOLOWA GAZÓW
│   ├── V = n·22,4 (warunki normalne)
│   └── pV = nRT (inne warunki)
├── OBLICZENIA Z RÓWNAŃ
│   ├── równanie + bilans
│   ├── proporcje molowe
│   └── przeliczanie na masę/objętość
├── NADMIAR/NIEDOMIAR
│   └── reagent ograniczający
├── WYDAJNOŚĆ
│   └── W = (rzecz/teor)·100%
└── PRAWO ZACHOWANIA MASY
    └── substraty = produkty
```

---

## 15. CO DALEJ?

**L010 — Redoks** : utlenianie, redukcja, utleniacz, reduktor, bilans elektronowy.

Most: stechiometria to podstawa redoks (obliczenia z wymianą elektronów).

---

## 16. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Stechiometria | Ilościowe zależności w reakcjach chemicznych |
| Mol | Jednostka liczności materii (6,02·10²³ cząstek) |
| Masa molowa | Masa 1 mola substancji [g/mol] |
| Objętość molowa | Objętość 1 mola gazu (22,4 dm³ w warunkach normalnych) |
| Liczba Avogadra | 6,02·10²³ cząstek/mol |
| Reagent ograniczający | Substrat zużywający się pierwszy |
| Wydajność | Stosunek ilości rzeczywistej do teoretycznej |
| Prawo zachowania masy | Masa substratów = masa produktów |
| Warunki normalne | 0°C, 1013,25 hPa |

---

## 17. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: gaz wypiera wodę.  
Wniosek: powstaje CO₂ (potwierdzone mętnieniem wody wapiennej).  
Nie: „Obserwacja: CO₂".

---

## 18. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 7 (Klinika 2.0).

---

## 19. DODATEK E — WARSTWA EXTRA

### E.1. Równanie Clapeyrona

**pV = nRT**

gdzie:
- p — ciśnienie [Pa]
- V — objętość [m³]
- n — liczba moli
- R — stała gazowa = 8,314 J/(mol·K)
- T — temperatura [K]

**Przeliczanie temperatury:**
- T[K] = T[°C] + 273,15
- 25°C = 298,15 K

**Przykład:** 0,1 mola gazu w 25°C, 101300 Pa.
- V = (0,1 · 8,314 · 298,15) / 101300 ≈ 0,00245 m³ = 2,45 dm³

### E.2. Stechiometria złożona

**Zadania wieloetapowe** — produkt jednej reakcji jest substratem drugiej.

**Przykład:** Ile gramów H₂SO₄ powstanie ze 100 g FeS₂ (pyt albo reakcja wieloetapowa)?
1. 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂
2. 2SO₂ + O₂ → 2SO₃
3. SO₃ + H₂O → H₂SO₄

Stosunek: 4 FeS₂ → 8 SO₂ → 8 SO₃ → 8 H₂SO₄ → 1 FeS₂ → 2 H₂SO₄.

### E.3. Mieszaniny

**Zadania z mieszaninami** — ustal skład mieszaniny na podstawie reakcji.

**Przykład:** 10 g mieszaniny CaCO₃ + NaCl + HCl → 2,24 dm³ CO₂ (n).
- n(CO₂) = 0,1 mol
- n(CaCO₃) = 0,1 mol
- m(CaCO₃) = 10 g
- %CaCO₃ = 100%

### E.4. Stechiometria z roztworami

**Zadania łączone:**
- V(Cm) ↔ n
- n ↔ n (proporcja molowa)
- n ↔ m / V

**Przykład:** Ile cm³ NaOH 2 M potrzeba do zobojętnienia 50 cm³ H₂SO₄ 1 M?
- n(H₂SO₄) = 1·0,05 = 0,05 mol
- n(NaOH) = 0,1 mol
- V = n/Cm = 0,05 dm³ = 50 cm³

### E.5. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L009 na ≥ 80%),
- gdy chcesz zrozumieć stechiometrię złożoną,
- gdy interesuje cię wydajność, nadmiar/niedomiar w przemyśle.

L013 zawiera: stechiometria złożona, wydajność, nadmiar/niedomiar, równania redoks, elektrochemia.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Stechiometria | Ilościowe zależności między substratami i produktami. |
| Mol | Jednostka liczności materii. |
| Masa molowa | Masa 1 mola substancji. |
| Objętość molowa gazu | Objętość 1 mola gazu (22,4 dm³ w warunkach normalnych). |
| Reagent ograniczający | Substrat, który zużywa się pierwszy. |
| Wydajność | Stosunek ilości rzeczywistej do teoretycznej. |

---

## 21. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 22. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
STECHIOMETRIA
PODSTAWOWE WZORY:
n = m/M
m = n·M
M = m/n
N = n·N_A
N_A = 6,02·10²³

GAZY:
V = n·22,4 (warunki normalne: 0°C, 1013 hPa)
pV = nRT (inne warunki)

OBLICZENIA Z RÓWNAŃ:
1. Równanie + bilans
2. n = m/M lub V/22,4
3. Proporcja molowa (współczynniki)
4. Przeliczenie na masę/objętość

REAGENT OGRANICZAJĄCY:
n / współczynnik → mniejszy wynik

WYDAJNOŚĆ:
W = (rzecz/teor)·100%

PRAWO ZACHOWANIA MASY:
m(substratów) = m(produktów)

MASY MOLOWE:
H₂O = 18; NaCl = 58,5; NaOH = 40;
H₂SO₄ = 98; CaCO₃ = 100

PUŁAPKI:
- n = m/M (nie M/m)
- V = n·22,4 (nie n/22,4)
- 22,4 tylko w warunkach normalnych
- reagent ograniczający decyduje o produkcie
```

---

## 23. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, ŚCIĄGĘ rozbudowaną, DOŚWIADCZENIA (3), ZASTOSOWANIA, 10 rozwiązań krok po kroku, KLINIKĘ 2.0 (5 przykładów), ĆWICZENIA A/B/C/D, Interleaving, Drabinkę, Fiszki 22, System powtórek, Mapę myśli, SŁOWNIK, DODATKI C/D/E, Definicje, 10 zasad, Szybką ściągę, STATUS.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L009 MASTER v1.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L009)

Stechiometria szkolna — proporcje z równania.

### Ściąga 80/20
1. Napisz i **uzgodnij** równanie (współczynniki, nie indeksy).
2. Odczytaj stosunek moli z współczynników.
3. Mol: n = m / M.
4. Jeśli dane są masy — przelicz na mole, użyj stosunku, wróć do gramów.
5. Nadmiar / niedomiar: który reagent się kończy, ten ogranicza produkt.
6. Objętość gazu w warunkach normalnych (jeśli w lekcji): 1 mol ≈ 22,4 dm³ — tylko gdy to jest w materiale.

### Pułapki
| Błąd | Popraw |
|------|--------|
| 2 H₂ to „dwa gramy wodoru” | 2 **mole** w równaniu |
| Zmieniam H₂O na HO, bo „nie wychodzi” | ruszasz indeks — zrywasz wzór |
| Ignoruję nadmiar | produkt liczy niedomiar |
| M mieszam z m | M = masa molowa (g/mol), m = masa odważka |

### 6 zadań extra
1. 2 H₂ + O₂ → 2 H₂O — ile moli H₂O z 1 mola O₂?  
2. Ile gramów H₂O z 4 g H₂ (M_H₂=2, M_H₂O=18), O₂ w nadmiarze?  
3. Co jest nadmiarem, gdy masz dużo O₂ i mało H₂?  
4. Dlaczego nie wolno „dopisać 3” do wzoru H₂O?  
5. n = m/M — oblicz n dla 10 g CaCO₃ (M=100).  
6. Jednym zdaniem: po co uzgadniamy równanie przed liczeniem.

Szkic: 1 2 mol. 2 4 g H₂ = 2 mol → 2 mol H₂O = 36 g. 3 H₂ niedomiar. 4 indeks to wzór związku. 5 0,1 mol. 6 współczynniki to stosunek moli.

### Status doklejki
2026-09-12 · wcześniejsze sekcje bez zmian.



---

## UZUPEŁNIENIE wizualne L009 (audyt plus.md — doklejone)

### Flowchart

1 uzgodnij równanie → 2 dane na mole → 3 stosunek współczynników → 4 wynik w żądanej jednostce.

### Nadmiar / niedomiar

n / współczynnik — mniejszy wynik = reagent ograniczający; produkt licz z niego.

Przykład szkolny: 2 H₂ + O₂ → 2 H₂O; mało O₂ → O₂ ogranicza.

### Wieloetapowość (extra, nie E8 obowiązek)

Łańcuch reakcji: śledź mole siarki / H₂SO₄ przez etapy; nie zgaduj mas „na oko”.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L009 (przegląd mer. — doklejone)

N_A (2019) = 6,02214076·10²³ mol⁻¹; szkolnie 6,02·10²³.  
V_m ≈ 22,4 dm³/mol dla **gazu doskonałego w warunkach normalnych** (0 °C, 1013,25 hPa), dokładniej ~22,4 dm³.  
Prawo Avogadra: równe V gazów w tych samych p,T → tyle samo cząsteczek.  
pV = nRT — extra (Clapeyron).  
Wydajność = m_rzecz / m_teor · 100%. Reagent ograniczający = ten, który pierwszy się kończy.

### Ciekawostki
- Liczenie 6·10²³ sztuk po 1/s — miliardy lat.
- Przemysł rzadko ma 100% wydajności.
- Reakcje odwracalne → równowaga (most L013).

<!-- ==================== END L009 ==================== -->

<!-- ==================== BEGIN L010 ==================== -->

# LEKCJA L010 — REDOKS

# CHEMIA: PODSTAWA PLUS

## L010 — Reakcje utleniania i redukcji (redoks)

**Stopnie utlenienia · utlenianie · redukcja · utleniacz · reduktor · bilans elektronowy**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002–L009 MASTER  
Poprzednia lekcja: L009 (stechiometria) · Następna: L011 (doświadczenia)

**Kolejność:** definicja → stopnie utlenienia → utlenianie i redukcja → utleniacz i reduktor → bilans elektronowy → przykłady reakcji redoks

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L010 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj stopnie utlenienia: „mangan na siedem plus".
5. **Rysuj.** Strzałki elektronowe, bilans.
6. **Łap moment „aha!".**

**Zasada 80/20:** stopnie utlenienia · utlenianie vs redukcja · utleniacz vs reduktor · bilans elektronowy.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. UTLENIANIE = oddawanie elektronów (stopień rośnie)  
2. REDUKCJA = przyjmowanie elektronów (stopień maleje)  
3. UTLENIACZ = sam się redukuje (przyjmuje e⁻)  
4. REDUKTOR = sam się utlenia (oddaje e⁻)  
5. Suma stopni utlenienia = 0 (cząsteczka) lub ładunek (jon)  
6. Wodór: +I (z niemetalami), −I (z metalami)  
7. Tlen: −II (wyjątki: nadtlenki −I, OF₂ +II)

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW":**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 7 — Klinika 2.0.)

**Oznaczenia reguł (bez emoji, opis słowny):**  
· fakt chemiczny  
· uproszczenie szkolne  
· wskazówka egzaminacyjna  
· uwaga (pułapka)

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- Wartościowość ≠ stopień utlenienia
- Wzory sumaryczne
- Bilansowanie równań

Z L002–L005:
- Tlenki, wodorotlenki, kwasy, sole
- Reakcje metali z kwasami
- Reakcje strąceniowe

Z L006–L009:
- Spalanie
- Stechiometria

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zdefiniować utlenianie i redukcję (wymiana elektronów),
- wyznaczyć stopnie utlenienia pierwiastków w związku i jonie,
- rozpoznać utleniacz i reduktor,
- napisać bilans elektronowy prostej reakcji redoks,
- rozróżnić reakcje redoks od reakcji wymiany jonowej (bez wymiany elektronów),
- (ambitny) rozpoznać reakcje dysproporcjonowania,
- (zaawansowany) znać szereg aktywności metali i zastosować go w przewidywaniu reakcji.

---

## 2. ŚCIĄGA

### Definicja

**Reakcja redoks** — reakcja, w której następuje wymiana elektronów między pierwiastkami; stopnie utlenienia pierwiastków ulegają zmianie.

**Utlenianie** — oddawanie elektronów (stopień utlenienia rośnie).
**Redukcja** — przyjmowanie elektronów (stopień utlenienia maleje).

**Zasada:** utlenianie i redukcja zachodzą razem — nie ma reakcji, w której tylko jedno z nich występuje.

### Stopnie utlenienia

**Stopień utlenienia** — formalny ładunek, jaki miałby atom, gdyby wszystkie wiązania były jonowe (elektrony przypisane do bardziej elektroujemnego atomu).

**Zapis:** cyfra rzymska z ładunkiem, np. +I, −II, +VII.

**Reguły wyznaczania stopni utlenienia:**

1. **Pierwiastek w stanie wolnym:** 0 (np. O₂, Fe, N₂, Cl₂).
2. **Jon jednoatomowy:** równy ładunkowi (np. Na⁺ = +I; Cl⁻ = −I; Ca²⁺ = +II).
3. **Suma stopni utlenienia w cząsteczce = 0.**
4. **Suma stopni utlenienia w jonie = ładunek jonu.**
5. **Wodór:** +I (z niemetalami, np. HCl, H₂O); −I (z metalami, np. NaH, CaH₂).
6. **Tlen:** −II (wyjątki: nadtlenki −I, np. H₂O₂; ponadtlenki −½, np. KO₂; OF₂: +II; tlenki z fluorem: +I, +II).
7. **Fluor:** zawsze −I.
8. **Metale grup 1–2:** zawsze +I, +II.
9. **Glin:** zawsze +III.

**Przykłady wyznaczania:**

**H₂O:** 2·(+I) + 1·x = 0 → x = −II (O = −II). ✓

**H₂SO₄:** 2·(+I) + 1·x + 4·(−II) = 0 → 2 + x − 8 = 0 → x = +VI (S = +VI).

**HNO₃:** 1·(+I) + 1·x + 3·(−II) = 0 → 1 + x − 6 = 0 → x = +V (N = +V).

**KMnO₄:** 1·(+I) + 1·x + 4·(−II) = 0 → 1 + x − 8 = 0 → x = +VII (Mn = +VII).

**K₂Cr₂O₇:** 2·(+I) + 2·x + 7·(−II) = 0 → 2 + 2x − 14 = 0 → x = +VI (Cr = +VI).

**SO₄²⁻:** 1·x + 4·(−II) = −2 → x − 8 = −2 → x = +VI (S = +VI).

**MnO₄⁻:** 1·x + 4·(−II) = −1 → x − 8 = −1 → x = +VII (Mn = +VII).

**NH₄⁺:** 1·x + 4·(+I) = +1 → x + 4 = +1 → x = −III (N = −III).

### Utlenianie i redukcja — rozpoznawanie

**Utlenianie** — atom oddaje elektrony → stopień utlenienia **rośnie**.
**Redukcja** — atom przyjmuje elektrony → stopień utlenienia **maleje**.

**Przykład:**
```
Zn + Cu²⁺ → Zn²⁺ + Cu
```
- Zn: 0 → +II (utlenianie; oddał 2e⁻).
- Cu²⁺: +II → 0 (redukcja; przyjął 2e⁻).

**Mnemotechnika:**
- **OLO** — **O**ddaje **L**ekko **O**d siebie (utlenianie) — reduktor.
- **RPK** — **R**edukcja **P**rzyjmuje **K**olejne elektrony — utleniacz.

### Utleniacz i reduktor

**Utleniacz** — substancja, która **przyjmuje elektrony** (sama się redukuje).

**Reduktor** — substancja, która **oddaje elektrony** (sama się utlenia).

**Uwaga o nazwach:** utleniacz nazywa się tak, bo powoduje utlenianie drugiej substancji. Sam w tym procesie się redukuje.

| Rola | Co robi z e⁻ | Co się z nim dzieje | Przykład |
|------|--------------|---------------------|----------|
| **Utleniacz** | przyjmuje e⁻ | redukuje się | KMnO₄, K₂Cr₂O₇, O₂, Cl₂, HNO₃ |
| **Reduktor** | oddaje e⁻ | utlenia się | Zn, Mg, Fe, C, H₂, CO |

**Szereg aktywności metali (od najbardziej aktywnych):**

```
K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au
```

**Reguła:** metal **aktywniejszy od wodoru** wypiera wodór z kwasów; metal **aktywniejszy** wypiera mniej aktywny z soli.

### Bilans elektronowy

**Bilans elektronowy** — zapis liczby oddanych i przyjętych elektronów.

**Kroki:**
1. Wyznacz stopnie utlenienia wszystkich pierwiastków.
2. Rozpoznaj, które pierwiastki zmieniają stopień.
3. Zapisz połówkowe reakcje utleniania i redukcji.
4. Dobierz współczynniki, by liczba oddanych e⁻ = liczba przyjętych e⁻.
5. Wstaw współczynniki do równania cząsteczkowego.
6. Zbilansuj pozostałe atomy.
7. Sprawdź bilans atomów i ładunków.

**Przykład 1:**
```
Zn + CuSO₄ → ZnSO₄ + Cu
```

Utlenianie: Zn → Zn²⁺ + 2e⁻ | ·1
Redukcja: Cu²⁺ + 2e⁻ → Cu | ·1

Suma elektronów: 2 = 2 ✓

Wynik:
```
Zn + CuSO₄ → ZnSO₄ + Cu
```

**Przykład 2:**
```
Fe + O₂ → Fe₂O₃
```

Utlenianie: Fe → Fe³⁺ + 3e⁻ | ·4
Redukcja: O₂ + 4e⁻ → 2O²⁻ | ·3

Suma elektronów: 12 = 12 ✓

Wynik:
```
4Fe + 3O₂ → 2Fe₂O₃
```

**Przykład 3:**
```
KMnO₄ + HCl → KCl + MnCl₂ + Cl₂ + H₂O
```

Utlenianie: 2Cl⁻ → Cl₂ + 2e⁻ | ·5
Redukcja: Mn⁺⁷ + 5e⁻ → Mn²⁺ | ·2

Suma elektronów: 10 = 10 ✓

Wynik:
```
2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O
```

### Reakcje redoks a reakcje wymiany jonowej

**Reakcja wymiany jonowej (nie-redoks)** — wymiana jonów; **żaden pierwiastek nie zmienia stopnia utlenienia**.

**Przykład:**
```
AgNO₃ + NaCl → AgCl↓ + NaNO₃
```
- Ag: +I → +I
- Na: +I → +I
- Cl: −I → −I
- N: +V → +V
- O: −II → −II

**Wszystkie stopnie utlenienia bez zmian** → to nie jest redoks.

**Reakcja redoks** — co najmniej jeden pierwiastek zmienia stopień utlenienia.

### Reakcje dysproporcjonowania (rozszerzenie)

**Dysproporcjonowanie** — ten sam pierwiastek jednocześnie się utlenia i redukuje.

**Przykład:**
```
Cl₂ + 2NaOH → NaCl + NaClO + H₂O
```
- Cl₂ (0) → Cl⁻ (−I) — redukcja
- Cl₂ (0) → ClO⁻ (+I) — utlenianie

Chlor w Cl₂ jednocześnie się utlenia i redukuje.

### Przykłady typowych reakcji redoks

1. **Spalanie:** CH₄ + 2O₂ → CO₂ + 2H₂O (C: −IV → +IV; O: 0 → −II).
2. **Metal + kwas:** Zn + 2HCl → ZnCl₂ + H₂ (Zn: 0 → +II; H: +I → 0).
3. **Metal + niemetal:** 2Na + Cl₂ → 2NaCl (Na: 0 → +I; Cl: 0 → −I).
4. **Wypieranie metali:** Fe + CuSO₄ → FeSO₄ + Cu (Fe: 0 → +II; Cu: +II → 0).
5. **Utlenianie tlenków:** 2SO₂ + O₂ → 2SO₃ (S: +IV → +VI; O: 0 → −II).
6. **Redukcja tlenków:** Fe₂O₃ + 3CO → 2Fe + 3CO₂ (Fe: +III → 0; C: +II → +IV).
7. **Dysproporcjonowanie:** 3Cl₂ + 6KOH → 5KCl + KClO₃ + 3H₂O.

### Zastosowania redoks

- **Spalanie paliw** — energia.
- **Korozja metali** — rdza (Fe → Fe₂O₃·nH₂O).
- **Akumulatory** — reakcje redoks (ołów–kwas, litowo-jonowe).
- **Baterie** — reakcje redoks.
- **Elektroliza** — rozkład związków prądem.
- **Metalurgia** — otrzymywanie metali z rud (redukcja tlenków).
- **Biologia** — oddychanie komórkowe, fotosynteza.

### BHP

- Reakcje redoks mogą być egzotermiczne lub wybuchowe (np. metal + kwas).
- KMnO₄, K₂Cr₂O₇ — silne utleniacze, żrące.
- HNO₃ stężony — silny utleniacz (reaguje z Cu).
- Pracować w okularach i rękawicach.

---

## 3. WZORY — PRZYPOMNIENIE (z L001, L009)

**Stopnie utlenienia — najczęstsze:**

| Pierwiastek | Stopień | Uwagi |
|-------------|---------|-------|
| H | +I | z niemetalami |
| H | −I | z metalami (wodorki) |
| O | −II | wyjątki: −I (H₂O₂), +II (OF₂) |
| F | −I | zawsze |
| Na, K | +I | zawsze |
| Mg, Ca, Ba | +II | zawsze |
| Al | +III | zawsze |
| Cl | −I | w chlorkach |
| Cl | +I, +III, +V, +VII | w związkach tlenowych |
| S | −II | w siarczkach |
| S | +IV, +VI | w tlenkach/kwasach |
| N | −III | w azotkach, NH₃ |
| N | +II, +IV, +V | w tlenkach/kwasach |
| C | −IV | w metanie |
| C | +II, +IV | w tlenkach |
| Fe | +II, +III | zależnie od związku |
| Cu | +I, +II | zależnie od związku |
| Mn | +II, +IV, +VII | zależnie od związku |
| Cr | +III, +VI | zależnie od związku |

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Wypieranie miedzi przez cynk

**Problem:** Czy cynk wypiera miedź z roztworu CuSO₄?  
**Hipoteza:** Tak — cynk jest aktywniejszy.  
**Sprzęt:** blaszka Zn, roztwór CuSO₄ (niebieski), probówka.  
**Obserwacja:** niebieski roztwór blednie; na Zn osadza się czerwona miedź.  
**Wniosek:** Zn + CuSO₄ → ZnSO₄ + Cu (redoks).  
**Równanie:** Zn + CuSO₄ → ZnSO₄ + Cu  
**BHP:** CuSO₄ szkodliwy; okulary.

### Doświadczenie 2: Reakcja magnezu z HCl

**Problem:** Czy magnez reaguje z kwasem solnym?  
**Hipoteza:** Wydzieli się wodór.  
**Sprzęt:** Mg (wstążka), HCl, probówka, zapalniczka.  
**Obserwacja:** pęcherzyki gazu; po zbliżeniu ognia — charakterystyczny „szczek".  
**Wniosek:** Mg + 2HCl → MgCl₂ + H₂ (redoks).  
**Równanie:** Mg + 2HCl → MgCl₂ + H₂  
**BHP:** wodór palny; nie zbliżać ognia bez kontroli.

### Doświadczenie 3: Manganian(VII) potasu jako utleniacz

**Problem:** Jak zachowuje się KMnO₄ w środowisku kwasowym?  
**Hipoteza:** KMnO₄ utlenia inne substancje; sam się redukuje (fiolet → bezbarwny).  
**Sprzęt:** KMnO₄ (fioletowy), H₂SO₄, roztwór reduktora (np. FeSO₄), probówka.  
**Obserwacja:** fioletowy roztwór odbarwia się.  
**Wniosek:** Mn⁺⁷ → Mn²⁺ (redukcja); Fe²⁺ → Fe³⁺ (utlenianie).  
**Równanie (uproszczenie):** 2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + 5Fe₂(SO₄)₃ + K₂SO₄ + 8H₂O  
**BHP:** KMnO₄ żrący; okulary.

### Doświadczenie 4: Korozja żelaza

**Problem:** Co się dzieje z żelazem w wilgotnym powietrzu?  
**Hipoteza:** Tworzy się rdza (Fe₂O₃·nH₂O).  
**Sprzęt:** gwóźdź żelazny, woda, powietrze.  
**Obserwacja:** po kilku dniach — rdzawy nalot.  
**Wniosek:** Fe utlenia się (0 → +III); O₂ redukuje się (0 → −II).  
**Równanie:** 4Fe + 3O₂ + nH₂O → 2Fe₂O₃·nH₂O  
**BHP:** brak.

**Obserwacja ≠ wniosek:**
- Obserwacja: rdzawy nalot.
- Wniosek: żelazo utleniło się do Fe(III), tworząc uwodniony tlenek.
- Nie: „Obserwacja: powstała rdza" — to już wniosek.

---

## 5. ZASTOSOWANIA — REDOKS W ŻYCIU CODZIENNYM

| Kontekst | Reakcja redoks |
|----------|----------------|
| Spalanie paliw | C, H → CO₂, H₂O |
| Rdza | Fe → Fe₂O₃·nH₂O |
| Akumulator | Pb, PbO₂, H₂SO₄ |
| Baterie litowe | Li⁺ + e⁻ ↔ Li |
| Elektroliza | rozkład związków prądem |
| Metalurgia | redukcja tlenków węglem |
| Organizm | oddychanie komórkowe |
| Fotosynteza | CO₂ + H₂O → glukoza |
| Wybielanie | utlenianie barwników (H₂O₂, Cl₂) |
| Dezynfekcja | KMnO₄, H₂O₂ |

---

## 6. PRZYKŁADY OBLICZEŃ (rozwiązane krok po kroku)

### Przykład 1: Stopnie utlenienia w H₂SO₄

- H: +I (2·+I = +2)
- O: −II (4·−II = −8)
- S: x
- Suma: +2 + x − 8 = 0 → x = +VI
- S = +VI

### Przykład 2: Stopnie utlenienia w K₂Cr₂O₇

- K: +I (2·+I = +2)
- O: −II (7·−II = −14)
- Cr: x (2x)
- Suma: +2 + 2x − 14 = 0 → 2x = +12 → x = +VI
- Cr = +VI

### Przykład 3: Stopnie utlenienia w jonie MnO₄⁻

- O: −II (4·−II = −8)
- Mn: x
- Suma: x − 8 = −1 → x = +VII
- Mn = +VII

### Przykład 4: Rozpoznanie utleniacza i reduktora

**Reakcja:**
```
Zn + 2HCl → ZnCl₂ + H₂
```
- Zn: 0 → +II (utlenianie) → Zn jest reduktorem.
- H: +I → 0 (redukcja) → HCl (a dokładniej H⁺) jest utleniaczem.

### Przykład 5: Bilans elektronowy

**Reakcja:**
```
Fe + CuSO₄ → FeSO₄ + Cu
```
- Utlenianie: Fe → Fe²⁺ + 2e⁻
- Redukcja: Cu²⁺ + 2e⁻ → Cu
- Suma e⁻: 2 = 2 ✓
- Wynik: Fe + CuSO₄ → FeSO₄ + Cu

### Przykład 6: Bilans z różnymi liczbami elektronów

**Reakcja:**
```
Al + CuSO₄ → Al₂(SO₄)₃ + Cu
```
- Utlenianie: Al → Al³⁺ + 3e⁻ | ·2
- Redukcja: Cu²⁺ + 2e⁻ → Cu | ·3
- Suma: 6 = 6 ✓
- Wynik: 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu

### Przykład 7: Redoks w środowisku kwasowym

**Reakcja:**
```
KMnO₄ + FeSO₄ + H₂SO₄ → MnSO₄ + Fe₂(SO₄)₃ + K₂SO₄ + H₂O
```
- Mn: +VII → +II (redukcja, 5e⁻)
- Fe: +II → +III (utlenianie, 1e⁻)
- Mnożnik: Mn ·2, Fe ·10
- Wynik: 2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + 5Fe₂(SO₄)₃ + K₂SO₄ + 8H₂O

---

## 7. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawie | Reguła |
|-------------|-----------|--------|
| „utlenianie = przyjmowanie e⁻" | utlenianie = oddawanie e⁻ | definicja |
| „redukcja = oddawanie e⁻" | redukcja = przyjmowanie e⁻ | definicja |
| „utleniacz się utlenia" | utleniacz się redukuje | definicja |
| „reduktor się redukuje" | reduktor się utlenia | definicja |
| „stopień utlenienia = wartościowość" | to różne pojęcia | definicja |
| „każda reakcja to redoks" | nie — wymiana jonowa nie jest | rozróżnienie |
| „O zawsze −II" | wyjątki: H₂O₂ (−I), OF₂ (+II) | wyjątki |
| „H zawsze +I" | wyjątki: wodorki metali (−I) | wyjątki |
| „suma stopni w jonie = 0" | suma = ładunek jonu | reguła |
| brak bilansu elektronowego | trzeba wyrównać e⁻ | procedura |

### Klinika 2.0 — przykład 1

**Błąd:** „Utlenianie to przyjmowanie elektronów."

- **Znajdź:** Odwrócona definicja.
- **Popraw:** Utlenianie = oddawanie elektronów (stopień rośnie).
- **Reguła:** OLO — Oddaje Lekko Od siebie.
- **Dlaczego:** Nazwa „utlenianie" historycznie od tlenu, ale definicja elektroniczna: utrata e⁻.
- **Zadanie podobne:** Co robi Zn w reakcji z HCl? (Odp.: Oddaje e⁻, utlenia się.)
- **Zadanie z pułapką:** Czy utlenianie zawsze wymaga tlenu? (Odp.: Nie.)

### Klinika 2.0 — przykład 2

**Błąd:** „Utleniacz się utlenia."

- **Znajdź:** Błędna nazwa.
- **Popraw:** Utleniacz **powoduje utlenianie** innej substancji, a sam się **redukuje**.
- **Reguła:** Utleniacz przyjmuje e⁻.
- **Dlaczego:** Sam przyjmuje elektrony → sam się redukuje.
- **Zadanie podobne:** KMnO₄ w reakcji redoks — utleniacz czy reduktor? (Odp.: Utleniacz.)
- **Zadanie z pułapką:** Czy utleniacz zawsze zawiera tlen? (Odp.: Nie — Cl₂ też jest utleniaczem.)

### Klinika 2.0 — przykład 3

**Błąd:** „Stopień utlenienia = wartościowość."

- **Znajdź:** Mylenie pojęć.
- **Popraw:** Wartościowość = liczba wiązań; stopień utlenienia = formalny ładunek.
- **Reguła:** To różne pojęcia (choć czasem liczbowo podobne).
- **Dlaczego:** W CO₂ węgiel ma wartościowość IV, stopień utlenienia +IV (liczbowo tak samo, ale z różnych definicji).
- **Zadanie podobne:** W CH₄ wartościowość i stopień utlenienia C? (Odp.: wartościowość IV; stopień −IV.)
- **Zadanie z pułapką:** Czy zawsze są takie same? (Odp.: Nie.)

### Klinika 2.0 — przykład 4

**Błąd:** „Każda reakcja to redoks."

- **Znajdź:** Uogólnienie.
- **Popraw:** Tylko reakcje z wymianą elektronów (zmiana stopni utlenienia).
- **Reguła:** Reakcja wymiany jonowej nie jest redoks.
- **Dlaczego:** W AgNO₃ + NaCl — żaden stopień się nie zmienia.
- **Zadanie podobne:** Czy NaOH + HCl → NaCl + H₂O to redoks? (Odp.: Nie.)
- **Zadanie z pułapką:** Czy Zn + 2HCl → ZnCl₂ + H₂ to redoks? (Odp.: Tak.)

### Klinika 2.0 — przykład 5

**Błąd:** „Tlen zawsze ma stopień −II."

- **Znajdź:** Brak wyjątków.
- **Popraw:** −II w większości związków, ale: −I w H₂O₂, +II w OF₂.
- **Reguła:** Tlen ma wyjątki.
- **Dlaczego:** W nadtlenkach wiązanie O–O; w OF₂ fluor jest elektroujemniejszy.
- **Zadanie podobne:** Stopień O w H₂O₂? (Odp.: −I.)
- **Zadanie z pułapką:** Stopień O w OF₂? (Odp.: +II.)

---

## 8. ĆWICZENIA

### 8.1. Mini-check (5 pytań)

1. Co to reakcja redoks?
2. Co to utlenianie?
3. Co to redukcja?
4. Co to utleniacz?
5. Co to reduktor?

### 8.2. Ćwiczenie prowadzone

**Dane:** H₂SO₄ — wyznacz stopnie utlenienia.

**Krok 1.** H: +I (2 atomy → +2).
**Krok 2.** O: −II (4 atomy → −8).
**Krok 3.** S: x.
**Krok 4.** +2 + x − 8 = 0 → x = +VI.

**Odpowiedź:** H = +I; S = +VI; O = −II.

**Spróbuj sam:** HNO₃.

### 8.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Wyznacz stopnie utlenienia w: H₂O, NaCl, CO₂, SO₂.
2. Wyznacz stopnie utlenienia w: H₂SO₄, HNO₃, KMnO₄.
3. Wyznacz stopnie utlenienia w jonie: Na⁺, Cl⁻, SO₄²⁻, NO₃⁻.
4. Czy reakcja jest redoks: 2H₂ + O₂ → 2H₂O?
5. Czy reakcja jest redoks: AgNO₃ + NaCl → AgCl↓ + NaNO₃?
6. Podaj utleniacz i reduktor w: Zn + CuSO₄ → ZnSO₄ + Cu.

**B. Trening**

7. Zbilansuj: Fe + O₂ → Fe₂O₃ (bilans elektronowy).
8. Zbilansuj: Al + HCl → AlCl₃ + H₂.
9. Zbilansuj: Cu + HNO₃(stęż.) → Cu(NO₃)₂ + NO₂ + H₂O.
10. Wypisz połówkowe reakcje utleniania i redukcji dla: Zn + 2HCl → ZnCl₂ + H₂.
11. KMnO₄ + FeSO₄ + H₂SO₄ → zbilansuj.
12. Podaj utleniacz i reduktor w: 2SO₂ + O₂ → 2SO₃.

**C. Ambitne**

13. Wyznacz stopnie utlenienia w: K₂Cr₂O₇, MnO₄⁻, Cr₂O₇²⁻, NH₄⁺.
14. Zbilansuj: K₂Cr₂O₇ + FeSO₄ + H₂SO₄ → Cr₂(SO₄)₃ + Fe₂(SO₄)₃ + K₂SO₄ + H₂O.
15. Wyjaśnij, dlaczego KMnO₄ jest utleniaczem.
16. Zaprojektuj doświadczenie: wypieranie Cu przez Zn (format DOŚWIADCZENIE).
17. Dlaczego reakcje dysproporcjonowania są szczególnym przypadkiem redoks?

**D. Zaawansowane**

18. Szereg aktywności metali — podaj kolejność (od najaktywniejszego).
19. Kiedy reakcja nie zachodzi — podaj 2 przykłady z uzasadnieniem.
20. Zbilansuj: Cl₂ + NaOH → NaCl + NaClO + H₂O (dysproporcjonowanie).

### 8.4. Interleaving (przeplatany)

1. Jaki charakter ma SO₃? (z L002)
2. Zapisz wzór kwasu azotowego(V). (z L004)
3. Zapisz wzór azotanu(V) srebra. (z L005)
4. Zbilansuj: CH₄ + 2O₂ → ? (z L006)
5. Ile moli w 36 g H₂O? (z L009)
6. Wyznacz stopień utlenienia N w HNO₃. (z L010)
7. Zbilansuj redoks: Zn + HCl. (z L010)
8. Podaj utleniacz w: 2SO₂ + O₂ → 2SO₃. (z L010)

### 8.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to utlenianie? |
| ZASTOSUJ | Wyznacz stopnie utlenienia w H₂SO₄. |
| WYJAŚNIJ | Dlaczego utleniacz się redukuje? |
| ODKRYJ | Jaki utleniacz w reakcji Zn + HCl? |
| POŁĄCZ | Połącz redoks ze stechiometrią. |
| ZAKWESTIONUJ | Czy każda reakcja to redoks? |

---

## 9. ODPOWIEDZI

### Mini-check

1. Reakcja z wymianą elektronów (zmiana stopni utlenienia).
2. Oddawanie elektronów (stopień rośnie).
3. Przyjmowanie elektronów (stopień maleje).
4. Substancja przyjmująca elektrony (sama się redukuje).
5. Substancja oddająca elektrony (sama się utlenia).

### Ćwiczenia A

1. H₂O: H = +I, O = −II; NaCl: Na = +I, Cl = −I; CO₂: C = +IV, O = −II; SO₂: S = +IV, O = −II.
2. H₂SO₄: H = +I, S = +VI, O = −II; HNO₃: H = +I, N = +V, O = −II; KMnO₄: K = +I, Mn = +VII, O = −II.
3. Na⁺ = +I; Cl⁻ = −I; SO₄²⁻: S = +VI, O = −II; NO₃⁻: N = +V, O = −II.
4. Tak — zmienia się stopień H (0 → +I) i O (0 → −II).
5. Nie — żaden stopień się nie zmienia.
6. Utleniacz: CuSO₄ (Cu²⁺); reduktor: Zn.

### Ćwiczenia B

7. 4Fe + 3O₂ → 2Fe₂O₃.
8. 2Al + 6HCl → 2AlCl₃ + 3H₂.
9. Cu + 4HNO₃(stęż.) → Cu(NO₃)₂ + 2NO₂ + 2H₂O.
10. Utlenianie: Zn → Zn²⁺ + 2e⁻; redukcja: 2H⁺ + 2e⁻ → H₂.
11. 2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + 5Fe₂(SO₄)₃ + K₂SO₄ + 8H₂O.
12. Utleniacz: O₂; reduktor: SO₂.

### Ćwiczenia C

13. K₂Cr₂O₇: K = +I, Cr = +VI, O = −II; MnO₄⁻: Mn = +VII, O = −II; Cr₂O₇²⁻: Cr = +VI, O = −II; NH₄⁺: N = −III, H = +I.
14. K₂Cr₂O₇ + 6FeSO₄ + 7H₂SO₄ → Cr₂(SO₄)₃ + 3Fe₂(SO₄)₃ + K₂SO₄ + 7H₂O.
15. KMnO₄ — Mn na +VII; w reakcji przechodzi na +II (przyjmuje 5e⁻), więc jest utleniaczem.
16. Format DOŚWIADCZENIE.
17. Dysproporcjonowanie — ten sam pierwiastek jednocześnie się utlenia i redukuje (np. Cl₂ → Cl⁻ + ClO⁻).

### Ćwiczenia D

18. K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au.
19. np. Cu + HCl (Cu poniżej H); Ag + CuSO₄ (Ag mniej aktywny).
20. Cl₂ + 2NaOH → NaCl + NaClO + H₂O.

---

## 10. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Redoks — definicja | Reakcja z wymianą elektronów |
| Utlenianie | Oddawanie e⁻ (stopień rośnie) |
| Redukcja | Przyjmowanie e⁻ (stopień maleje) |
| Utleniacz | Przyjmuje e⁻ (sam się redukuje) |
| Reduktor | Oddaje e⁻ (sam się utlenia) |
| H — stopień | +I (z niemetalami), −I (z metalami) |
| O — stopień | −II (wyjątki: −I, +II) |
| F — stopień | −I (zawsze) |
| Na, K — stopień | +I |
| Mg, Ca — stopień | +II |
| Al — stopień | +III |
| S w H₂SO₄ | +VI |
| N w HNO₃ | +V |
| Mn w KMnO₄ | +VII |
| Cr w K₂Cr₂O₇ | +VI |
| Suma stopni w cząsteczce | 0 |
| Suma stopni w jonie | ładunek jonu |
| Szereg aktywności | K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au |
| Czy AgNO₃ + NaCl to redoks? | Nie |
| Czy Zn + HCl to redoks? | Tak |
| Utlenianie w Zn + HCl | Zn → Zn²⁺ + 2e⁻ |
| Redukcja w Zn + HCl | 2H⁺ + 2e⁻ → H₂ |

---

## 11. TEST KOŃCOWY (L010)

1. Co to reakcja redoks?
2. Wyznacz stopnie utlenienia w: H₂SO₄, KMnO₄, Na₂Cr₂O₇.
3. Podaj utleniacz i reduktor w: 2Mg + O₂ → 2MgO.
4. Zbilansuj: Al + HCl → AlCl₃ + H₂.
5. Zbilansuj: Cu + HNO₃(stęż.) → Cu(NO₃)₂ + NO₂ + H₂O.
6. Czy reakcja: NaOH + HCl → NaCl + H₂O to redoks?
7. (extra) Wyjaśnij, dlaczego utleniacz się redukuje.
8. (extra) Zbilansuj: K₂Cr₂O₇ + FeSO₄ + H₂SO₄ → …
9. (extra) Podaj 5 pierwszych metali w szeregu aktywności.

---

## 12. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Definicja | redoks = wymiana e⁻ |
| Utlenianie | oddawanie e⁻ |
| Redukcja | przyjmowanie e⁻ |
| Utleniacz | przyjmuje e⁻ (redukuje się) |
| Reduktor | oddaje e⁻ (utlenia się) |
| Stopnie utlenienia | reguły, wyjątki |
| Bilans elektronowy | zapis + proporcje |
| Szereg aktywności | kolejność metali |
| Reakcje | rozpoznanie redoks vs wymiana |

---

## 13. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 14. MAPA MYŚLI

```
REDOKS
├── DEFINICJA
│   └── wymiana elektronów
├── STOPNIE UTLENIENIA
│   ├── reguły
│   └── wyjątki
├── UTLENIANIE
│   └── oddawanie e⁻ (stopień rośnie)
├── REDUKCJA
│   └── przyjmowanie e⁻ (stopień maleje)
├── UTLENIACZ
│   └── przyjmuje e⁻
├── REDUKTOR
│   └── oddaje e⁻
├── BILANS ELEKTRONOWY
│   └── zapis + proporcje
├── SZEREG AKTYWNOŚCI
│   └── K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au
└── ZASTOSOWANIA
    ├── spalanie
    ├── korozja
    ├── akumulatory
    └── metalurgia
```

---

## 15. CO DALEJ?

**L011 — Doświadczenia** : dokumentowanie, obserwacje, wnioski, BHP.

Most: redoks to podstawa elektrochemii i metalurgii.

---

## 16. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Redoks | Reakcja z wymianą elektronów |
| Utlenianie | Oddawanie elektronów |
| Redukcja | Przyjmowanie elektronów |
| Utleniacz | Substancja przyjmująca elektrony |
| Reduktor | Substancja oddająca elektrony |
| Stopień utlenienia | Formalny ładunek atomu |
| Bilans elektronowy | Zapis liczby oddanych/przyjętych e⁻ |
| Szereg aktywności | Uporządkowanie metali wg aktywności |
| Dysproporcjonowanie | Ten sam pierwiastek się utlenia i redukuje |

---

## 17. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Obserwacja ≠ wniosek.**  
Obserwacja: rdzawy nalot.  
Wniosek: żelazo utleniło się do Fe(III).  
Nie: „Obserwacja: rdza".

---

## 18. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 7 (Klinika 2.0).

---

## 19. DODATEK E — WARSTWA EXTRA

### E.1. Szereg aktywności metali — pełny

```
K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au
```

- Metale przed H — wypierają wodór z kwasów.
- Metal przed innym — wypiera go z soli.
- Metale po H — nie reagują z rozcieńczonymi kwasami (wyjątki: HNO₃ stężony reaguje z Cu, Ag).

### E.2. Reakcje dysproporcjonowania

Ten sam pierwiastek jednocześnie się utlenia i redukuje.

- Cl₂ + 2NaOH → NaCl + NaClO + H₂O
- 3Cl₂ + 6KOH → 5KCl + KClO₃ + 3H₂O
- 2H₂O₂ → 2H₂O + O₂ (kat. MnO₂)

### E.3. Reakcje redoks w organizmach

- **Oddychanie komórkowe:** C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia (O₂ redukuje się do H₂O).
- **Fotosynteza:** 6CO₂ + 6H₂O + światło → C₆H₁₂O₆ + 6O₂ (woda utlenia się do O₂).
- **Korozja:** 4Fe + 3O₂ + nH₂O → 2Fe₂O₃·nH₂O.
- **Antyoksydanty:** witamina C neutralizuje wolne rodniki (redukuje).

### E.4. Elektrochemia (rozszerzenie)

**Ogniwo galwaniczne** — zamienia energię chemiczną na elektryczną (reakcje redoks).

- **Anoda (−)** — utlenianie (elektrony wypływają).
- **Katoda (+)** — redukcja (elektrony wpływają).
- **Przykład:** ogniwo Daniella (Zn | Zn²⁺ ‖ Cu²⁺ | Cu).

**Elektroliza** — wymuszona reakcja redoks prądem.

- Anoda (+) — utlenianie.
- Katoda (−) — redukcja.

### E.5. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L010 na ≥ 80%),
- gdy chcesz zrozumieć potencjały standardowe,
- gdy interesuje cię elektrochemia i korozja.

L013 zawiera: potencjały standardowe, ogniwa, elektroliza, korozja, ochrona katodowa.

---

## 20. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Redoks | Reakcja z wymianą elektronów między pierwiastkami. |
| Utlenianie | Oddawanie elektronów (stopień utlenienia rośnie). |
| Redukcja | Przyjmowanie elektronów (stopień maleje). |
| Utleniacz | Substancja przyjmująca elektrony (sama się redukuje). |
| Reduktor | Substancja oddająca elektrony (sama się utlenia). |
| Stopień utlenienia | Formalny ładunek atomu. |
| Bilans elektronowy | Zapis liczby oddanych i przyjętych elektronów. |
| Szereg aktywności | Uporządkowanie metali wg aktywności chemicznej. |

---

## 21. 10 ZASAD SUPERNAUKI (PRZECZYTAJ PRZED KAŻDĄ SESJĄ)

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 22. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
REDOKS
DEFINICJA:
Reakcja z wymianą elektronów.

UTLENIANIE: oddawanie e⁻ (stopień rośnie)
REDUKCJA: przyjmowanie e⁻ (stopień maleje)

UTLENIACZ: przyjmuje e⁻ (redukuje się)
REDUKTOR: oddaje e⁻ (utlenia się)

STOPNIE UTLENIENIA:
H: +I (z niemetalami), −I (z metalami)
O: −II (wyjątki: −I, +II)
F: −I (zawsze)
Na, K: +I
Mg, Ca: +II
Al: +III
Suma w cząsteczce = 0
Suma w jonie = ładunek

SZEREG AKTYWNOŚCI:
K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au

PRZYKŁADY:
Zn + CuSO₄ → ZnSO₄ + Cu (redoks)
Zn: 0 → +II (utlenianie)
Cu²⁺: +II → 0 (redukcja)

BILANS ELEKTRONOWY:
1. Stopnie utlenienia
2. Połówkowe reakcje
3. Mnożniki (e⁻ równe)
4. Zapis cząsteczkowy

NIE-REDOKS:
AgNO₃ + NaCl → AgCl + NaNO₃

PUŁAPKI:
- utleniacz się REDUKUJE
- reduktor się UTLENIA
- stopień utlenienia ≠ wartościowość
- O ma wyjątki
```

---

## 23. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, ŚCIĄGĘ rozbudowaną, DOŚWIADCZENIA (4), ZASTOSOWANIA, 7 rozwiązań krok po kroku, KLINIKĘ 2.0 (5 przykładów), ĆWICZENIA A/B/C/D, Interleaving, Drabinkę, Fiszki 22, System powtórek, Mapę myśli, SŁOWNIK, DODATKI C/D/E, Definicje, 10 zasad, Szybką ściągę, STATUS.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją jako gotowy materiał egzaminacyjny.

---

**Koniec L010 MASTER v1.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L010)

Redoks szkolny — stopień utlenienia, utleniacz, reduktor.

### Ściąga 80/20
- Utlenianie = oddawanie elektronów (wzrost stopnia utlenienia).
- Redukcja = przyjmowanie elektronów (spadek stopnia).
- Utleniacz — ten, który się **redukuje** (przyjmuje e⁻).
- Reduktor — ten, który się **utlenia** (oddaje e⁻).
- Stopnie: pierwiastek swobodny 0; H zwykle +1; O zwykle −2; jon jednoatomowy = ładunek.
- Nie każda reakcja na E8 wymaga pełnego bilansu elektronowego — najpierw rozpoznaj, kto oddaje, kto przyjmuje.

### Pułapki
| Błąd | Popraw |
|------|--------|
| Utleniacz = ten, co się utlenia | odwrotnie: utleniacz utlenia **innego**, sam się redukuje |
| O zawsze −2, także w O₂ | w O₂ stopień tlenu = 0 |
| H w metalohydrydach jak w wodzie | wyjątki extra; w H₂O H = +1 |
| Redoks = każda zmiana stanu skupienia | liczy się stopień utlenienia / e⁻ |

### 6 zadań extra
1. W 2 Mg + O₂ → 2 MgO kto jest reduktorem?  
2. Stopień O w O₂ i w MgO.  
3. Zn + 2 HCl → ZnCl₂ + H₂ — co się utlenia?  
4. Jednym zdaniem definicja utleniacza.  
5. Czy rozpuszczanie cukru w wodzie to redoks (szkolnie)?  
6. Most do L002: tlenek — produkt utleniania metalu tlenem.

Szkic: 1 Mg. 2 0 i −2. 3 Zn. 4 przyjmuje elektrony / utlenia inny reagent. 5 nie. 6 tak, metal oddaje e⁻.

### Status doklejki
2026-09-12 · zapis w pliku roboczym CHEMIA_PODSTAWA_PLUS_v1.1.md.



---

## UZUPEŁNIENIE wizualne L010 (audyt plus.md — doklejone)

### Bilans elektronowy (schemat)

Zn → Zn²⁺ + 2e⁻ (utlenianie, Zn reduktor)  
Cu²⁺ + 2e⁻ → Cu (redukcja, Cu²⁺ utleniacz)  
e⁻ oddane = e⁻ przyjęte.

### Ogniwo (extra)

Anoda: utlenianie (np. Zn). Katoda: redukcja (np. Cu²⁺). Most solny zamyka obwód jonowy.

### Szereg — orientacja (szkolnie)

K, Na, Ca, Mg, Al, Zn, Fe, Pb, **H**, Cu, Ag, Au — metal przed H wypiera H₂ z kwasu (z wyjątkami i BHP).

Wartości E° — extra / liceum; na E8 wystarczy kolejność i utleniacz/reduktor.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L010 (przegląd mer. — doklejone)

Utleniacz/reduktor to **role w tej reakcji**. H₂O₂ bywa i tym, i tym.  
Stopień utlenienia — narzędzie do bilansu, nie „prawdziwy ładunek w cząsteczce”.  
Szereg (szkolnie): K Na Ca Mg Al Zn Fe Pb **H** Cu Ag Au.  
Dysproporcjonowanie — extra. Ogniwo: anoda utlenianie, katoda redukcja.

### Ciekawostki
- Rdza: uwodniony Fe₂O₃.
- Au nie „rdzewieje” w powietrzu (szlachetny).
- CO — bezbarwny, bezwonny; silnie wiąże hemoglobinę (nie ćwiczenie).
- Żółty płomień gazu często = niedobór O₂ / sadza.
- H₂O₂ musuje: 2 H₂O₂ → 2 H₂O + O₂.

<!-- ==================== END L010 ==================== -->

<!-- ==================== BEGIN L011 ==================== -->

# LEKCJA L011 — DOŚWIADCZENIA

# CHEMIA: PODSTAWA PLUS

## L011 — Doświadczenia chemiczne

**Dokumentowanie · obserwacja vs wniosek · BHP · sprzęt · typy doświadczeń**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002–L010 MASTER  
Poprzednia lekcja: L010 (redoks) · Następna: L012 (powtórka klasy 8)

**Kolejność:** definicja doświadczenia → format → obserwacja vs wniosek → sprzęt → BHP → typy doświadczeń → dokumentowanie

**Zakres:** odniesiony do podstawy programowej obowiązującej dla danego rocznika.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L011 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj schemat: „Problem, hipoteza, sprzęt…".
5. **Rysuj.** Schematy zestawów, tabele obserwacji.
6. **Łap moment „aha!".**

**Zasada 80/20:** format doświadczenia · obserwacja ≠ wniosek · BHP · dokumentowanie.

**Uwaga o mnemonikach:**
**Rdzeniowe:**  
1. Format: Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP  
2. Obserwacja ≠ wniosek  
3. BHP: kwas do wody; nie pipetować ustami; okulary  
4. Dokumentuj wszystko (także błędy)  

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

**Zasada zwiększania trudności:**  
rozpoznanie → zastosowanie → transformacja → uzasadnienie → analiza → kontrprzykład → problem otwarty.

**Stała warstwa „KLINIKA BŁĘDÓW":**  
Błąd → znajdź → popraw → nazwij regułę → wyjaśnij dlaczego.  
(Realizacja: sekcja 6 — Klinika 2.0.)

**Oznaczenia reguł (bez emoji, opis słowny):**  
· fakt chemiczny  
· uproszczenie szkolne  
· wskazówka egzaminacyjna  
· uwaga (pułapka)

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Z L001:
- Sprzęt laboratoryjny
- BHP

Z L002–L010:
- Reakcje chemiczne
- Obserwacje
- Wnioski

**Wymagane umiejętności:**
- Czytanie instrukcji
- Prowadzenie notatek
- Praca w laboratorium

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zdefiniować doświadczenie chemiczne,
- zastosować format doświadczenia (Problem → … → BHP),
- rozróżnić obserwację od wniosku,
- wymienić podstawowy sprzęt laboratoryjny,
- zastosować podstawowe zasady BHP,
- udokumentować doświadczenie (protokół),
- (ambitny) rozpoznać typowe błędy w doświadczeniach,
- (zaawansowany) zaprojektować proste doświadczenie.

---

## 2. ŚCIĄGA

### Definicja

**Doświadczenie chemiczne** — celowe działanie, w którym badamy właściwości substancji lub przebieg reakcji, prowadzące do obserwacji i wniosków.

**Cel doświadczenia:**
- sprawdzenie hipotezy,
- poznanie właściwości substancji,
- wykrycie substancji,
- otrzymanie produktu.

### Format doświadczenia (stały)

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

**Wyjaśnienie każdego elementu:**

| Element | Co zawiera | Przykład |
|---------|------------|----------|
| **Problem** | pytanie badawcze | „Czy Mg reaguje z HCl?" |
| **Hipoteza** | przewidywany wynik | „Wydzieli się wodór" |
| **Sprzęt** | odczynniki i naczynia | Mg, HCl, probówka, zapalniczka |
| **Obserwacja** | co widzimy/słyszymy/czujemy (bez interpretacji!) | „Pęcherzyki gazu" |
| **Wniosek** | interpretacja obserwacji | „Wydziela się wodór" |
| **Równanie** | zapis reakcji | Mg + 2HCl → MgCl₂ + H₂ |
| **BHP** | bezpieczeństwo | okulary, wodór palny |

**Uwaga kluczowa:** **Obserwacja ≠ wniosek.**

### Obserwacja vs wniosek

**Obserwacja** — fakt zmysłowy, bez interpretacji.

**Wniosek** — interpretacja obserwacji, wynik rozumowania.

**Przykład 1:**
- Obserwacja: biały osad.
- Wniosek: powstaje AgCl (trudno rozpuszczalny).
- ❌ Nie: „Obserwacja: powstał AgCl".

**Przykład 2:**
- Obserwacja: pęcherzyki gazu, gaz palny.
- Wniosek: wydziela się wodór.
- ❌ Nie: „Obserwacja: wydziela się wodór".

**Przykład 3:**
- Obserwacja: roztwór zmienia barwę z niebieskiej na jasnozieloną.
- Wniosek: jony Cu²⁺ przechodzą w Fe²⁺ (reakcja redoks).
- ❌ Nie: „Obserwacja: zachodzi redoks".

### Sprzęt laboratoryjny

| Sprzęt | Zastosowanie |
|--------|--------------|
| Probówka | małe ilości, reakcje, ogrzewanie |
| Zlewka | mieszanie, ogrzewanie |
| Kolba stożkowa | mieszanie, miareczkowanie |
| Kolba okrągłodenna | ogrzewanie cieczy, destylacja |
| Pipeta | przenoszenie objętości |
| Biureta | precyzyjne dozowanie cieczy |
| Cylinder miarowy | odmierzanie objętości |
| Parownica | odparowywanie |
| Tygiel | prażenie |
| Moździerz | rozdrabnianie |
| Eksykator | przechowywanie w suchym środowisku |
| Chłodnica | skraplanie par |
| Statyw | mocowanie |
| Palnik | ogrzewanie |
| Łapa / szczypce | trzymanie |

### Odczynniki — podział

- **Ciała stałe:** kryształy, proszki, granulki.
- **Ciecze:** roztwory, stężone kwasy, zasady.
- **Gazy:** w butlach lub otrzymywane in situ.

### BHP (podstawowe)

| Zasada | Treść |
|--------|--------|
| Kwas do wody | zawsze kwas wlewamy do wody |
| Zapach | wachlowanie ręką (nie wąchać bezpośrednio) |
| Kontakt | płukać wodą; wołać nauczyciela |
| Pipeta | nie pipetować ustami (gruszka!) |
| Okulary | ochrona oczu |
| Rękawice | wtedy, gdy właściwe dla danej substancji |
| Ogień | według instrukcji; włosy, odzież |
| Nie smakować | nigdy |
| Nie wracać odczynników do butelki | zanieczyszczenie |
| Nie ogrzewać zamkniętych naczyń | ryzyko wybuchu |
| Wentylacja | praca z gazami — okap |

### Rodzaje doświadczeń

| Typ | Cel | Przykład |
|-----|-----|----------|
| **Jakościowe** | wykrycie substancji | próba jodowa (skrobia) |
| **Ilościowe** | pomiar (masa, objętość) | miareczkowanie |
| **Otrzymywanie** | synteza produktu | otrzymywanie CuSO₄ |
| **Badanie właściwości** | obserwacja | reakcja Mg z HCl |
| **Rozdział mieszanin** | separacja | destylacja, filtracja |

### Dokumentowanie doświadczenia

**Protokół doświadczenia:**
1. Data, tytuł.
2. Cel (problem).
3. Hipoteza.
4. Sprzęt i odczynniki.
5. Opis wykonania (krok po kroku).
6. Obserwacje (fakty).
7. Wnioski (interpretacja).
8. Równanie reakcji.
9. Uwagi BHP.

**Uwaga:** dokumentuj **wszystko**, także:
- błędy,
- odstępstwa od procedury,
- czynniki zakłócające.

---

## 3. WZORY — PRZYPOMNIENIE (z L001)

**Podstawowe schematy reakcji:**

- Synteza: A + B → AB
- Analiza: AB → A + B
- Wymiana: AB + CD → AD + CB
- Spalanie: + O₂ → CO₂ + H₂O
- Redoks: wymiana e⁻

---

## 4. DOŚWIADCZENIA MODELOWE (5 przykładów)

### Doświadczenie 1: Reakcja Mg z HCl

**Problem:** Czy magnez reaguje z kwasem solnym?  
**Hipoteza:** Wydzieli się wodór.  
**Sprzęt:** Mg (wstążka), HCl (rozcieńczony), probówka, zapalniczka.  
**Opis wykonania:** Wrzucamy wstążkę Mg do probówki, dodajemy HCl, po chwili zbliżamy zapalniczkę do wylotu probówki.  
**Obserwacja:** Pęcherzyki gazu, gaz pali się z charakterystycznym „szczekiem".  
**Wniosek:** Magnez reaguje z HCl, wydziela się wodór.  
**Równanie:** Mg + 2HCl → MgCl₂ + H₂  
**BHP:** okulary, wodór palny — zachować ostrożność.

### Doświadczenie 2: Wykrywanie CO₂

**Problem:** Jak wykryć CO₂?  
**Hipoteza:** CO₂ mętni wodę wapienną.  
**Sprzęt:** woda wapienna Ca(OH)₂, rurka do dmuchania, probówka.  
**Opis wykonania:** Delikatnie dmuchamy przez rurkę do probówki z wodą wapienną.  
**Obserwacja:** Woda wapienna mętnieje (biały osad).  
**Wniosek:** CO₂ reaguje z Ca(OH)₂ → CaCO₃ (trudno rozpuszczalny).  
**Równanie:** CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O  
**BHP:** nie wciągać wody wapiennej do ust.

### Doświadczenie 3: Odczyn roztworu

**Problem:** Jaki odczyn ma roztwór HCl?  
**Hipoteza:** Kwasowy.  
**Sprzęt:** HCl, papierek uniwersalny, probówka.  
**Opis wykonania:** Zanurzamy papierek w roztworze HCl, porównujemy z wzorcem.  
**Obserwacja:** Papierek czerwony (pH ≈ 1).  
**Wniosek:** Roztwór HCl ma odczyn kwasowy.  
**Równanie:** HCl → H⁺ + Cl⁻  
**BHP:** okulary, HCl żrący.

### Doświadczenie 4: Strącanie AgCl

**Problem:** Jak wykryć Cl⁻ w roztworze?  
**Hipoteza:** AgNO₃ daje biały osad z Cl⁻.  
**Sprzęt:** AgNO₃, NaCl, probówka.  
**Opis wykonania:** Do roztworu NaCl dodajemy AgNO₃.  
**Obserwacja:** Biały, serowaty osad.  
**Wniosek:** Powstaje AgCl (trudno rozpuszczalny).  
**Równanie:** AgNO₃ + NaCl → AgCl↓ + NaNO₃  
**BHP:** AgNO₃ plami i żrący — okulary, rękawice.

### Doświadczenie 5: Rozkład CaCO₃

**Problem:** Co powstaje przy prażeniu CaCO₃?  
**Hipoteza:** Powstaje CaO i CO₂.  
**Sprzęt:** CaCO₃ (kreda), parownica, palnik, woda wapienna.  
**Opis wykonania:** Prażymy CaCO₃, wykrywamy CO₂ wodą wapienną.  
**Obserwacja:** Wydziela się gaz mętniący wodę wapienną; pozostaje biały proszek.  
**Wniosek:** CaCO₃ → CaO + CO₂.  
**Równanie:** CaCO₃ →(Δ) CaO + CO₂↑  
**BHP:** ogrzewanie — ostrożnie; okulary.

---

## 5. TYPOWE BŁĘDY W DOŚWIADCZENIACH

1. **Mylenie obserwacji z wnioskiem.**
2. **Brak hipotezy** — brak punktu odniesienia.
3. **Brak BHP** — ryzyko wypadku.
4. **Niekompletny opis wykonania** — trudno powtórzyć.
5. **Brak równania reakcji.**
6. **Ignorowanie czynników zakłócających.**
7. **Wnioski zbyt szerokie** („zawsze", „na pewno").
8. **Nieprecyzyjne obserwacje** („coś się stało").
9. **Brak kontroli** (porównania z próbą kontrolną).
10. **Nieodnotowanie błędu** — powtarzanie go.

---

## 6. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawie | Reguła |
|-------------|-----------|--------|
| „Obserwacja: powstał H₂" | Obserwacja: pęcherzyki gazu; Wniosek: wydziela się H₂ | obserwacja ≠ wniosek |
| brak hipotezy | hipoteza na początku | procedura |
| brak BHP | BHP obowiązkowe | procedura |
| „Zawsze tak jest" | przy konkretnych warunkach | zakres |
| „Roztwór się zmienił" | konkretna obserwacja | precyzja |
| brak równania | równanie w protokole | procedura |
| brak opisu wykonania | opis krok po kroku | procedura |
| „Wszystko działa" | opisz odchylenia | dokumentacja |

### Klinika 2.0 — przykład 1

**Błąd:** „Obserwacja: powstał H₂."

- **Znajdź:** Mylenie obserwacji z wnioskiem.
- **Popraw:** Obserwacja: pęcherzyki gazu; wniosek: wydziela się wodór (potwierdzony „szczekiem").
- **Reguła:** Obserwacja ≠ wniosek.
- **Dlaczego:** „H₂" to interpretacja, nie fakt zmysłowy.
- **Zadanie podobne:** Jak opisać obserwację dla AgCl? (Odp.: biały osad.)
- **Zadanie z pułapką:** Czy „roztwór zmienił barwę na niebieską" to obserwacja? (Odp.: Tak.)

### Klinika 2.0 — przykład 2

**Błąd:** Brak hipotezy.

- **Znajdź:** Pominięty krok.
- **Popraw:** Sformułuj hipotezę przed doświadczeniem.
- **Reguła:** Hipoteza = przewidywany wynik.
- **Dlaczego:** Bez hipotezy nie ma czego weryfikować.
- **Zadanie podobne:** Hipoteza dla reakcji Zn + HCl? (Odp.: wydzieli się wodór.)
- **Zadanie z pułapką:** Czy hipoteza może być fałszywa? (Odp.: Tak — i to jest OK.)

### Klinika 2.0 — przykład 3

**Błąd:** „Wniosek: na pewno zawsze tak jest."

- **Znajdź:** Uogólnienie.
- **Popraw:** Wniosek dotyczy konkretnych warunków.
- **Reguła:** Wnioski formułujemy z zastrzeżeniem zakresu.
- **Dlaczego:** Z jednego doświadczenia nie wynika uniwersalność.
- **Zadanie podobne:** Jaki wniosek z reakcji Mg + HCl? (Odp.: Magnez reaguje z HCl — w tych warunkach.)
- **Zadanie z pułapką:** Czy jeden wynik = prawo? (Odp.: Nie.)

### Klinika 2.0 — przykład 4

**Błąd:** „Pipetowałem usta."

- **Znajdź:** Błąd BHP.
- **Popraw:** Używaj gruszki / pipetora.
- **Reguła:** Nie pipetować ustami.
- **Dlaczego:** Ryzyko zatrucia / poparzenia.
- **Zadanie podobne:** Jak bezpiecznie przenosić ciecze? (Odp.: gruszką, pipetorem.)
- **Zadanie z pułapką:** Czy wolno próbować smak? (Odp.: Nie.)

---

## 7. ĆWICZENIA

### 7.1. Mini-check (5 pytań)

1. Co to doświadczenie chemiczne?
2. Jaki jest format doświadczenia?
3. Co to obserwacja?
4. Co to wniosek?
5. Wymień 3 zasady BHP.

### 7.2. Ćwiczenie prowadzone

**Dane:** Reakcja CaCO₃ z HCl.

- Problem: czy CaCO₃ reaguje z HCl?
- Hipoteza: wydzieli się CO₂.
- Sprzęt: CaCO₃, HCl, probówka, woda wapienna.
- Obserwacja: pęcherzyki gazu, woda wapienna mętnieje.
- Wniosek: CaCO₃ reaguje z HCl, wydziela się CO₂.
- Równanie: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂
- BHP: okulary.

**Spróbuj sam:** Reakcja Zn + HCl.

### 7.3. Ćwiczenia samodzielne

**A. Podstawa**

1. Wymień elementy formatu doświadczenia.
2. Co to obserwacja, a co wniosek?
3. Wymień 5 sprzętów laboratoryjnych.
4. Wymień 3 zasady BHP.
5. Co to protokół doświadczenia?

**B. Trening**

6. Dla reakcji Zn + HCl napisz: problem, hipotezę, obserwację, wniosek, równanie, BHP.
7. Dla reakcji AgNO₃ + NaCl — to samo.
8. Popraw: „Obserwacja: powstał H₂".
9. Popraw: „Wniosek: zawsze tak jest".
10. Wyjaśnij, dlaczego hipoteza może być fałszywa.

**C. Ambitne**

11. Zaprojektuj doświadczenie: wykrycie skrobi w produkcie.
12. Zaprojektuj doświadczenie: odróżnienie alkanu od alkenu.
13. Zaprojektuj doświadczenie: odczyn roztworu mydła.
14. Wymień 5 typowych błędów w doświadczeniach.
15. Wyjaśnij, dlaczego protokół jest ważny.

**D. Zaawansowane**

16. Co to próba kontrolna? Podaj przykład.
17. Co to ślepa próba?
18. Jak dokumentować odchylenia od procedury?
19. Jak ograniczyć błędy pomiarowe?
20. Jakie znaczenie ma powtarzalność doświadczenia?

### 7.4. Interleaving (przeplatany)

1. Jaki charakter ma HCl? (z L004)
2. Zapisz wzór azotanu(V) srebra. (z L005)
3. Zbilansuj: Zn + 2HCl → ? (z L010)
4. Jaki utleniacz w Zn + HCl? (z L010)
5. Ile moli w 4 g NaOH? (z L009)
6. Jak wykryć CO₂? (z L011)
7. Wyznacz stopień utlenienia Zn w ZnCl₂. (z L010)
8. Co to obserwacja? (z L011)

### 7.5. Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to doświadczenie? |
| ZASTOSUJ | Wymień elementy formatu. |
| WYJAŚNIJ | Dlaczego obserwacja ≠ wniosek? |
| ODKRYJ | Jaka hipoteza dla Zn + HCl? |
| POŁĄCZ | Połącz doświadczenie z równaniem. |
| ZAKWESTIONUJ | Czy jeden wynik = pewność? |

---

## 8. ODPOWIEDZI

### Mini-check

1. Celowe działanie badawcze.
2. Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP.
3. Fakt zmysłowy.
4. Interpretacja obserwacji.
5. np. kwas do wody; okulary; nie pipetować ustami.

### Ćwiczenia A

1. Problem, hipoteza, sprzęt, obserwacja, wniosek, równanie, BHP.
2. Obserwacja — fakt zmysłowy; wniosek — interpretacja.
3. Probówka, zlewka, pipeta, cylinder, palnik.
4. Kwas do wody; okulary; nie smakować.
5. Zapis przebiegu doświadczenia.

### Ćwiczenia B

6. Problem: czy Zn reaguje z HCl? Hipoteza: wydzieli się H₂. Obserwacja: pęcherzyki gazu. Wniosek: wydziela się wodór. Równanie: Zn + 2HCl → ZnCl₂ + H₂. BHP: okulary.
7. Problem: czy AgNO₃ reaguje z NaCl? Hipoteza: powstanie osad. Obserwacja: biały osad. Wniosek: powstaje AgCl. Równanie: AgNO₃ + NaCl → AgCl↓ + NaNO₃. BHP: AgNO₃ żrący.
8. Obserwacja: pęcherzyki gazu; wniosek: wydziela się H₂.
9. Wniosek dotyczy konkretnych warunków.
10. Hipoteza to przewidywanie — może być błędna.

### Ćwiczenia C

11. Format doświadczenia (skrobia + jodyna).
12. Format doświadczenia (woda bromowa).
13. Format doświadczenia (papierek uniwersalny).
14. Obserwacja ≠ wniosek; brak hipotezy; brak BHP; niekompletny opis; brak równania.
15. Protokół — dokumentacja, powtarzalność.

### Ćwiczenia D

16. Próba kontrolna — porównanie z warunkami bez zmiennej.
17. Ślepa próba — bez badanej substancji (kontrola odczynnika).
18. Notatka z datą, opis odchylenia, wpływ na wynik.
19. Powtarzanie, kalibracja, precyzyjny sprzęt.
20. Powtarzalność → wiarygodność wyniku.

---

## 9. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Format doświadczenia | Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP |
| Obserwacja — definicja | Fakt zmysłowy |
| Wniosek — definicja | Interpretacja obserwacji |
| Obserwacja ≠ wniosek | Nie mieszaj! |
| BHP — kwas | Kwas do wody |
| BHP — zapach | Wachlowanie |
| BHP — pipeta | Gruszka |
| BHP — ubiór | Okulary, fartuch |
| Sprzęt — probówka | Małe ilości |
| Sprzęt — pipeta | Przenoszenie objętości |
| Sprzęt — cylinder | Odmierzanie |
| Protokół — elementy | Data, cel, hipoteza, sprzęt, wykonanie, obserwacja, wniosek, równanie |
| Wykrywanie CO₂ | Woda wapienna (mętnienie) |
| Wykrywanie Cl⁻ | AgNO₃ (biały osad AgCl) |
| Wykrywanie SO₄²⁻ | BaCl₂ (biały osad BaSO₄) |
| Wykrywanie skrobi | Jodyna (niebiesko-fioletowe) |
| Wykrywanie białka | Biuretowa (fioletowe) |
| Wykrywanie glukozy | Fehlinga (czerwony osad) |
| Próba kontrolna | Bez zmiennej |
| Ślepa próba | Bez badanej substancji |
| Typowe błędy | Brak hipotezy, brak BHP, brak równania |
| Reakcja Mg + HCl | Mg + 2HCl → MgCl₂ + H₂ |

---

## 10. TEST KOŃCOWY (L011)

1. Wymień elementy formatu doświadczenia.
2. Co to obserwacja, a co wniosek?
3. Jak wykryć CO₂? Cl⁻? SO₄²⁻?
4. Wymień 5 zasad BHP.
5. Dla reakcji Zn + HCl napisz pełny protokół.
6. Popraw: „Obserwacja: powstał H₂".
7. (extra) Co to próba kontrolna?
8. (extra) Wymień 5 typowych błędów w doświadczeniach.

---

## 11. CHECKLISTA

| Temat | Musisz umieć |
|-------|--------------|
| Format | 7 elementów |
| Obserwacja vs wniosek | różnica |
| BHP | zasady |
| Sprzęt | nazwy i zastosowania |
| Wykrywanie | CO₂, Cl⁻, SO₄²⁻, skrobia, białko, glukoza |
| Protokół | elementy |
| Typowe błędy | rozpoznawać |

---

## 12. SYSTEM POWTÓREK

| Kiedy | Co powtarzać | Jak długo |
|-------|--------------|-----------|
| Po lekcji | Całą lekcję przeczytaj raz | 25 min |
| Po 1 dniu | Fiszki + ściąga | 10 min |
| Po 3 dniach | Ćwiczenia A + B | 20 min |
| Po 1 tygodniu | Test końcowy + mapa myśli | 20 min |
| Po 2 tygodniach | Tylko fiszki + pułapki | 10 min |
| Po miesiącu | Cała lekcja + test | 30 min |

**Zasada 3 pytań po każdej powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 13. MAPA MYŚLI

```
DOŚWIADCZENIE
├── FORMAT
│   ├── Problem
│   ├── Hipoteza
│   ├── Sprzęt
│   ├── Obserwacja
│   ├── Wniosek
│   ├── Równanie
│   └── BHP
├── OBSERWACJA vs WNIOSEK
├── SPRZĘT
├── BHP
├── WYKRYWANIE
│   ├── CO₂ (woda wapienna)
│   ├── Cl⁻ (AgNO₃)
│   ├── SO₄²⁻ (BaCl₂)
│   ├── skrobia (jodyna)
│   ├── białko (biuretowa)
│   └── glukoza (Fehlinga)
├── PROTOKÓŁ
└── TYPOWE BŁĘDY
```

---

## 14. CO DALEJ?

**L012 — Powtórka klasy 8** : całość materiału chemii.

---

## 15. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Doświadczenie | Celowe działanie badawcze |
| Hipoteza | Przewidywany wynik |
| Obserwacja | Fakt zmysłowy |
| Wniosek | Interpretacja obserwacji |
| Protokół | Dokumentacja doświadczenia |
| Próba kontrolna | Porównanie bez zmiennej |
| Ślepa próba | Bez badanej substancji |
| BHP | Bezpieczeństwo i higiena pracy |

---

## 16. DODATEK C — FORMAT DOŚWIADCZENIA

```
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP
```

---

## 17. DODATEK D — FORMAT KLINIKI

```
Błąd → Co nie tak? → Popraw → Reguła → Dlaczego? → Zadanie podobne → Pułapka
```

Pełna realizacja: sekcja 6 (Klinika 2.0).

---

## 18. DODATEK E — WARSTWA EXTRA

### E.1. Próba kontrolna i ślepa próba

**Próba kontrolna** — doświadczenie bez zmiennej, którą badamy. Pozwala ustalić, czy obserwowany efekt pochodzi od badanej zmiennej.

**Przykład:** Badamy wpływ katalizatora — próba kontrolna bez katalizatora.

**Ślepa próba** — próba bez badanej substancji (kontrola odczynnika). Pozwala wykluczyć wpływ odczynników.

### E.2. Błędy pomiarowe

- **Błąd systematyczny** — powtarzalny (np. niekalibrowana waga).
- **Błąd losowy** — przypadkowy (np. drgania).
- **Błąd gruby** — pomyłka (np. zła jednostka).

Zmniejszanie błędów:
- powtarzanie pomiaru,
- kalibracja sprzętu,
- precyzyjny odczyt.

### E.3. Powtarzalność

Doświadczenie jest **powtarzalne**, jeśli inni uzyskują podobne wyniki przy tych samych warunkach.

To podstawa metody naukowej.

### E.4. Most do L013

Kiedy przejść do L013 (zaawansowana):
- gdy opanujesz podstawę (test L011 na ≥ 80%),
- gdy chcesz zrozumieć metodę naukową,
- gdy interesuje cię planowanie eksperymentów.

L013 zawiera: metodę naukową, planowanie eksperymentów, analiza błędów, statystyka.

---

## 19. DEFINICJE JEDNYM ZDANIEM

| Pojęcie | Definicja |
|---------|-----------|
| Doświadczenie | Celowe działanie badawcze. |
| Hipoteza | Przewidywany wynik doświadczenia. |
| Obserwacja | Fakt zmysłowy bez interpretacji. |
| Wniosek | Interpretacja obserwacji. |
| Protokół | Dokumentacja doświadczenia. |
| Próba kontrolna | Doświadczenie bez badanej zmiennej. |

---

## 20. 10 ZASAD SUPERNAUKI

1. **Najpierw próbuj, potem czytaj.** Błąd to najlepszy nauczyciel.
2. **Mów na głos.** Chemia wchodzi przez usta.
3. **Rysuj.** Nawet brzydko.
4. **Powtarzaj w odstępach.** Dziś → jutro → za 3 dni → za tydzień.
5. **Mieszaj tematy.** Interleaving uczy mózg wybierać strategię.
6. **Testuj się.** Fiszki, pytania, testy — to nie strata czasu, to nauka.
7. **Tłumacz komuś.** Jeśli nie umiesz wytłumaczyć, nie rozumiesz.
8. **Łap moment „aha!".** To sygnał trwałego zapisu.
9. **Śpij.** Mózg utrwala wiedzę we śnie.
10. **Bądź ciekawy.** „Dlaczego?" to najlepsze pytanie w chemii.

---

## 21. SZYBKA ŚCIĄGA NA JEDNEJ STRONIE (DO WYDRUKU)

```
DOŚWIADCZENIE
FORMAT:
Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP

OBSERWACJA ≠ WNIOSEK:
- Obserwacja: fakt zmysłowy
- Wniosek: interpretacja

BHP:
- kwas do wody
- wachlować zapach
- gruszka do pipety
- okulary, fartuch
- nie smakować

WYKRYWANIE:
- CO₂: woda wapienna (mętnienie)
- Cl⁻: AgNO₃ (biały osad)
- SO₄²⁻: BaCl₂ (biały osad)
- skrobia: jodyna (niebiesko-fioletowe)
- białko: biuretowa (fioletowe)
- glukoza: Fehlinga (czerwony osad)

PROTOKÓŁ:
Data, cel, hipoteza, sprzęt, wykonanie,
obserwacja, wniosek, równanie, BHP

TYPOWE BŁĘDY:
- obserwacja ≠ wniosek
- brak hipotezy
- brak BHP
- brak równania
- zbyt szerokie wnioski
- niekompletny opis
```

---

## 22. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: JAK PRACOWAĆ, FILOZOFIA, POZIOMY, KOMPAS, ŚCIĄGĘ rozbudowaną, 5 DOŚWIADCZEŃ MODELOWYCH, TYPOWE BŁĘDY, KLINIKĘ 2.0 (4 przykłady), ĆWICZENIA A/B/C/D, Interleaving, Drabinkę, Fiszki 22, System powtórek, Mapę myśli, SŁOWNIK, DODATKI C/D/E, Definicje, 10 zasad, Szybką ściągę, STATUS.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją.

---

**Koniec L011 MASTER v1.0**




---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L011)

Nie zastępuje formatu z sekcji 2 i dodatku C.

### Karta na sprawdzian (wypełnij puste)

1. Temat / problem: …  
2. Hipoteza: …  
3. Sprzęt i odczynniki: …  
4. BHP (2 punkty): …  
5. Tok (3–5 kroków): …  
6. Obserwacja (zmysły, bez „więc powstał tlenek”): …  
7. Wniosek: …  
8. Równanie (jeśli dotyczy): …  
9. Co mogło pójść nie tak (1 źródło błędu): …

### 4 mini-scenki extra
S1. Mg + HCl — napisz obserwację vs wniosek.  
S2. Woda wapienna + gaz z HCl+CaCO₃ — co widzisz, co wnioskujesz.  
S3. Uniwersalny papierek w soku z cytryny — odczyn.  
S4. Dlaczego nie wolno wąchać „pełną piersią” nad stężonym kwasem?

Szkic: S1 bąbelki / metal znika → powstaje gaz (H₂), reakcja metal + kwas. S2 zmętnienie → CO₂. S3 czerwienienie / kwaśny. S4 opary żrące — wąchanie ruchem wachlującym albo w ogóle nie.

### Status
doklej 2026-09-12 · sekcje 1–22 bez zmian.



---

## UZUPEŁNIENIE wizualne L011 (audyt plus.md — doklejone)

### Sprzęt (ASCII)

Probówka — ogrzewać otworem od siebie. Zlewka — mieszaniny, nie do silnego prażenia. Nigdy pipeta ustami.

### Doświadczenia z innych działów (pomysł, nie nowy protokół pełny)

Stężenia: krystalizacja. Redoks: Zn + CuSO₄ (zmiana barwy). Biochemia: jod + skrobia; biuret — jeśli jest w pracowni.

### Mini-protokół

Data · temat · problem · hipoteza · sprzęt · kroki · obserwacja · wniosek · równanie · BHP · błędy.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L011 (przegląd mer. — doklejone)

Kolejność odczynników bywa częścią BHP i wyniku. Próba kontrolna / ślepa — extra. Błędy: systematyczne, losowe, grube. SDS — karta charakterystyki (hasło). Szkło borokrzemowe lepiej znosi szok T.

### Ciekawostki
- Pipeta ustami = ryzyko połknięcia odczynnika.
- Kwas do wody — ciepło rozcieńczania, ryzyko pryskania.
- Nie zwracać nadmiaru do butelki — zanieczyszczasz zapas.

<!-- ==================== END L011 ==================== -->

<!-- ==================== BEGIN L012 ==================== -->

# LEKCJA L012 — POWTÓRKA KLASY 8

# CHEMIA: PODSTAWA PLUS

## L012 — Powtórka klasy 8

**Wszystko razem: tlenki, wodorotlenki, kwasy, sole, organika, biochemia, stężenia, stechiometria, redoks**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002–L011 MASTER  
Poprzednia lekcja: L011 (doświadczenia) · Następna: L013 (zaawansowana)

**Kolejność:** przekrój całego roku → interleaving → test przekrojowy → klinika → mosty

**Zakres:** cały materiał klasy 8.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L012 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj wzory i reguły.
5. **Rysuj.** Mapy myśli, tabele.
6. **Łap moment „aha!".**

**Zasada 80/20:** przekrój wszystkich działów · interleaving · test mieszany.

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do L013 |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Cały materiał klasy 8:
- L001 — fundamenty
- L002 — tlenki
- L003 — wodorotlenki
- L004 — kwasy
- L005 — sole
- L006 — organika
- L007 — biochemia
- L008 — stężenia
- L009 — stechiometria
- L010 — redoks
- L011 — doświadczenia

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- powtórzyć cały materiał chemii klasy 8,
- wskazać własne luki,
- rozwiązać zadania przekrojowe,
- (ambitny) połączyć działy w zadaniach mieszanych,
- (zaawansowany) rozwiązać problemy otwarte.

---

## 2. MAPA PRZEKROJOWA

```text
CHEMIA KLASY 8
├── FUNDAMENTY (L001)
│   ├── atom, jon, wartościowość
│   ├── W–K–S–K
│   └── równania
├── TLENKI (L002)
│   ├── zasadowe, kwasowe, obojętne, amfoteryczne
│   └── reakcje z wodą, kwasami, zasadami
├── WODOROTLENKI (L003)
│   ├── wzory, otrzymywanie
│   └── zobojętnianie
├── KWASY (L004)
│   ├── beztlenowe, tlenowe
│   └── reakcje z metalami, tlenkami, wodorotlenkami, solami
├── SOLE (L005)
│   ├── nazewnictwo, otrzymywanie
│   └── reakcje strąceniowe
├── ORGANIKA (L006)
│   ├── alkany, alkeny, alkiny
│   └── spalanie
├── BIOCHEMIA (L007)
│   ├── tłuszcze, cukry, białka
│   └── witaminy, sole mineralne
├── STĘŻENIA (L008)
│   ├── Cp, Cm
│   └── rozcieńczanie
├── STECHIOMETRIA (L009)
│   ├── mol, masa molowa
│   ├── proporcje
│   └── nadmiar/niedomiar
├── REDOKS (L010)
│   ├── stopnie utlenienia
│   └── utleniacz/reduktor
└── DOŚWIADCZENIA (L011)
    └── format, BHP
```

---

## 3. INTERLEAVING — ZESTAWY MIESZANE

### Zestaw A — Podstawa (przekrój)

1. Ile elektronów ma jon Na⁺? (L001)
2. Jaki charakter ma SO₃? (L002)
3. Zapisz wzór wodorotlenku wapnia. (L003)
4. Zapisz wzór kwasu siarkowego(VI). (L004)
5. Zapisz wzór siarczanu(VI) miedzi(II). (L005)
6. Zapisz wzór metanu. (L006)
7. Wzór glukozy? (L007)
8. Ile moli w 36 g H₂O? (L009)
9. Co to utlenianie? (L010)
10. Elementy formatu doświadczenia? (L011)

### Zestaw B — Trening (łączenie)

11. Zbilansuj: Al + O₂ → Al₂O₃. (L001)
12. CaO + H₂O → ? (L002+L003)
13. NaOH + HCl → ? (L003+L004)
14. CaCO₃ + 2HCl → ? (L005)
15. CH₄ + 2O₂ → ? (L006)
16. Ile gramów H₂O powstanie z 4 g H₂? (L009)
17. Wyznacz stopnie utlenienia w H₂SO₄. (L010)
18. Zapisz obserwację i wniosek dla reakcji Zn + HCl. (L011)

### Zestaw C — Ambitne (synteza)

19. Ile dm³ CO₂ powstanie z 20 g CaCO₃ (warunki normalne)? (L009)
20. Ile cm³ roztworu NaOH 2 M potrzeba do zobojętnienia 50 cm³ HCl 1 M? (L008+L009)
21. Zbilansuj redoks: KMnO₄ + FeSO₄ + H₂SO₄ → … (L010)
22. 10 g mieszaniny CaCO₃ i NaCl → HCl → 2,24 dm³ CO₂ (n). Ile % CaCO₃? (L005+L009)

### Zestaw D — Zaawansowane (problem otwarty)

23. Zaprojektuj doświadczenie: odróżnienie alkanu od alkenu. (L006+L011)
24. Porównaj spalanie całkowite i niecałkowite. (L006)
25. Czy każda reakcja wymiany jonowej to redoks? Uzasadnij. (L005+L010)
26. Jakie są różnice między Cp a Cm? (L008)

---

## 4. TEST PRZEKROJOWY

### A. Podstawa

1. Z = ? A = ? (L001)
2. Jaki charakter ma Na₂O? SO₃? (L002)
3. Wzór Ca(OH)₂ — dlaczego nawias? (L003)
4. Kwas HCl — dysocjacja? (L004)
5. Nazwa NaCl? (L005)
6. Metan — wzór? (L006)
7. Glukoza — wzór? (L007)
8. Cp = ? (L008)
9. Mol — definicja? (L009)
10. Utleniacz — definicja? (L010)
11. Format doświadczenia? (L011)

### B. Trening

12. Zbilansuj: Fe + O₂ → Fe₂O₃.
13. NaOH + H₂SO₄ → ?
14. 10 g soli w 90 g wody — Cp?
15. Ile moli w 80 g NaOH?
16. Wyznacz stopnie utlenienia w HNO₃.
17. Podaj utleniacz w: Zn + 2HCl → ZnCl₂ + H₂.

### C. Ambitne

18. Ile dm³ CO₂ z rozkładu 50 g CaCO₃?
19. 4 g H₂ + 32 g O₂ — reagent ograniczający? Ile H₂O?
20. Zbilansuj: Cu + HNO₃(stęż.) → Cu(NO₃)₂ + NO₂ + H₂O.

### D. Zaawansowane

21. Ile gramów Na₂SO₄ powstanie z 100 cm³ H₂SO₄ 2 M + NaOH?
22. Zaprojektuj doświadczenie: wykrycie skrobi.
23. Porównaj Cp i Cm. Kiedy potrzebna gęstość?

---

## 5. ODPOWIEDZI

### A

1. Z = protony; A = protony + neutrony.
2. Na₂O: zasadowy; SO₃: kwasowy.
3. Indeks 2 dotyczy całej grupy OH.
4. HCl → H⁺ + Cl⁻.
5. Chlorek sodu.
6. CH₄.
7. C₆H₁₂O₆.
8. Cp = (ms/mr)·100%.
9. Jednostka liczności materii (6,02·10²³ cząstek).
10. Substancja przyjmująca elektrony.
11. Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP.

### B

12. 4Fe + 3O₂ → 2Fe₂O₃.
13. 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.
14. 10%.
15. 2 mole.
16. H = +I; N = +V; O = −II.
17. HCl (H⁺).

### C

18. n(CaCO₃) = 0,5 mol; V = 0,5·22,4 = 11,2 dm³.
19. O₂ reagent ograniczający; m(H₂O) = 36 g.
20. Cu + 4HNO₃(stęż.) → Cu(NO₃)₂ + 2NO₂ + 2H₂O.

### D

21. n(H₂SO₄) = 0,2 mol; n(Na₂SO₄) = 0,2 mol; m = 0,2·142 = 28,4 g.
22. Format doświadczenia (jodyna).
23. Cp — masa; Cm — mole. Gęstość przy przeliczaniu.

---

## 6. KLINIKA 2.0 — PRZEKROJOWA

**Błąd 1:** „Cp = ms/mrozp."

- Znajdź: zły mianownik.
- Popraw: Cp = ms/mr.
- Reguła: mr = ms + mrozp.
- Dlaczego: Cp to masa w 100 g roztworu.
- Podobne: 10 g soli w 90 g wody → 10%.
- Pułapka: 10 g soli w 90 g wody vs 100 g rozpuszczalnika.

**Błąd 2:** „92 chromosomy."

- Znajdź: mylenie chromatyd z chromosomami.
- Popraw: 46 chromosomów, 92 chromatydy.
- Reguła: liczymy centromery.
- Dlaczego: replikacja tworzy kopie, nie rozdziela centromerów.
- Pułapka: analogia zszytej książki.

**Błąd 3:** „Utleniacz się utlenia."

- Znajdź: błędna nazwa.
- Popraw: utleniacz się redukuje.
- Reguła: przyjmuje e⁻.
- Dlaczego: nazwa mówi o działaniu na inną substancję.
- Pułapka: chlor (Cl₂) też jest utleniaczem.

**Błąd 4:** „22,4 dm³ w każdej temperaturze."

- Znajdź: brak warunków.
- Popraw: 22,4 dm³/mol w warunkach normalnych.
- Reguła: objętość molowa zależy od T i p.
- Pułapka: 25°C → ~24,5 dm³.

**Błąd 5:** „Obserwacja: powstał H₂."

- Znajdź: mylenie obserwacji z wnioskiem.
- Popraw: Obserwacja: pęcherzyki gazu; wniosek: wydziela się H₂.
- Reguła: obserwacja ≠ wniosek.
- Pułapka: interpretacja to nie obserwacja.

---

## 7. DRABINKA TRUDNOŚCI

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to mol? |
| ZASTOSUJ | Oblicz Cp z 10 g soli i 90 g wody. |
| WYJAŚNIJ | Dlaczego Ca(OH)₂ ma nawias? |
| ODKRYJ | Jaki utleniacz w Zn + HCl? |
| POŁĄCZ | Połącz redoks ze stechiometrią. |
| ZAKWESTIONUJ | Czy każda reakcja to redoks? |

---

## 8. JAK SIĘ UCZYĆ — powtórka roczna

1. **Mapa (10 min):** narysuj mapę wszystkich lekcji.
2. **Fiszki (15 min):** interleaving z 12 lekcji.
3. **Test przekrojowy (30 min):** sekcja 4.
4. **Powtórka błędów (15 min):** wróć do lekcji, których dotyczą błędy.
5. **Mapa pojęć (10 min):** uzupełnij mapę o to, co pomyliłeś.

**Zasada 3 pytań po powtórce:**
1. Co już umiem?
2. Co jeszcze mylę?
3. Co mnie zaskoczyło?

---

## 9. ZADANIA Z ŻYCIA CODZIENNEGO

1. Jak działa akumulator samochodowy?
2. Dlaczego woda w basenie ma pH ~7,2?
3. Dlaczego mleko ma pH ~6,5?
4. Jak działa proszek do pieczenia?
5. Dlaczego żelazo rdzewieje?
6. Dlaczego na ulicach sypie się sól zimą?
7. Dlaczego mydło ma odczyn zasadowy?

---

## 10. SŁOWNIK PRZEKROJOWY

| Termin | Definicja |
|--------|-----------|
| Atom | Najmniejsza cząstka pierwiastka |
| Jon | Atom lub grupa z ładunkiem |
| Wartościowość | Liczba wiązań |
| Stopień utlenienia | Formalny ładunek |
| Tlenek | Związek z tlenem |
| Wodorotlenek | Związek z OH |
| Kwas | Związek oddający H⁺ |
| Sól | Kation metalu + anion reszty |
| Węglowodór | Związek z C i H |
| Mol | 6,02·10²³ cząstek |
| Cp | Stężenie procentowe |
| Cm | Stężenie molowe |
| Reakcja redoks | Wymiana elektronów |
| Utleniacz | Przyjmuje elektrony |
| Reduktor | Oddaje elektrony |

---

## 11. CHECKLISTA

- [ ] Fundamenty: atom, jon, wartościowość, W–K–S–K.
- [ ] Tlenki: charakter, reakcje.
- [ ] Wodorotlenki: wzory, zobojętnianie.
- [ ] Kwasy: nazwy, dysocjacja, reakcje.
- [ ] Sole: nazwy, otrzymywanie, strącanie.
- [ ] Organika: alkany, alkeny, alkiny, spalanie.
- [ ] Biochemia: tłuszcze, cukry, białka.
- [ ] Stężenia: Cp, Cm, rozcieńczanie.
- [ ] Stechiometria: mol, proporcje, nadmiar/niedomiar.
- [ ] Redoks: stopnie utlenienia, utleniacz/reduktor.
- [ ] Doświadczenia: format, BHP.
- [ ] Wiem, co powtórzyć.

---

## 12. CO DALEJ?

**L013 — Zaawansowana** (dla chętnych).

**KONIEC pakietu chemii PODSTAWA PLUS** (po L013).

---

## 13. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: mapę przekrojową, interleaving (4 zestawy), test przekrojowy, Klinikę 2.0, drabinkę, „Jak się uczyć", słownik przekrojowy, checklistę.

---

**Koniec L012 MASTER v1.0**



---

## UZUPEŁNIENIE egzaminacyjne (doklejone do L012)

Przed E8 / sprawdzianem końcowym: najpierw checklista z sekcji 11, potem ten blok.

### Szybka ściąga przekrojowa

1. Wartościowość → wzór (W–K–S–K) → nazwa.
2. Tlenek / wodorotlenek / kwas / sól — charakter i typowa reakcja z wodą albo z kwasem/zasadą.
3. Równanie: atomy po lewej = po prawej; **współczynniki tak, indeksy nie**.
4. Cp = masa substancji / masa roztworu × 100%.
5. Mol i proporcje z równania.
6. Utleniacz przyjmuje e⁻, reduktor oddaje e⁻.
7. Doświadczenie: obserwacja ≠ wniosek.

### Dodatkowe pułapki (klinika krótka)

| Błąd | Popraw |
|------|--------|
| Zmiana indeksu, żeby „wyszło” | Zmień współczynnik |
| Fe₂O₃ jako „tlenek żelaza(II)” | żelazo(III) |
| pH = 3 to zasada | kwas |
| Osad zawsze = sól rozpuszczalna | osad = zwykle sól **słabo** rozpuszczalna |
| Alken bez wiązania podwójnego | CₙH₂ₙ i wiązanie C=C |
| Cp w g/cm³ | to gęstość, nie Cp |

### Mini-zestaw extra (5 zadań)

E1. Napisz wzór tlenku siarki(IV) i równanie reakcji z wodą.  
E2. Zobojętnij NaOH + HCl — równanie i nazwa soli.  
E3. 10 g soli w 90 g wody — Cp?  
E4. Wskaż utleniacz w: Zn + 2 HCl → ZnCl₂ + H₂ (szkolnie: H⁺ utlenia Zn).  
E5. Jednym zdaniem: po co zapisujemy obserwację osobno od wniosku?

Odpowiedzi: E1 SO₂ + H₂O → H₂SO₃. E2 NaOH + HCl → NaCl + H₂O (chlorek sodu). E3 10%. E4 H⁺ / kwas solny jako źródło H⁺ (uproszczenie). E5 obserwacja to fakt zmysłów, wniosek to interpretacja.

## 15. STATUS UZUPEŁNIENIA L012

- v1.1 (2026-09-12) — doklejono ściągę przekrojową, pułapki, 5 zadań. Sekcje 1–13 bez zmian.
- Backup: `_backup_md_2026-09-12_przed_ulepszeniami/`.



---

## UZUPEŁNIENIE wizualne L012 (audyt plus.md — doklejone)

### Mapa działów

Atom/jon/wzory → tlenki → wodorotlenki → kwasy → sole → organika/biochemia → stężenia → stechiometria → redoks → doświadczenia.

### Karta „co umiem”

| Dział | Umiem | Powtórzyć |
|-------|-------|-----------|
| Atom / jon / W–K–S–K | | |
| Tlenki / wodorotlenki | | |
| Kwasy / sole | | |
| Organika / biochemia | | |
| Stężenia / stechiometria | | |
| Redoks / doświadczenia | | |

Nie rozbudowuję tu testu do 50 pozycji w jednym wklejeniu — lepiej dodać zestawy partiami niż zalać klucz bez redakcji.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L012 (przegląd mer. — doklejone)

Mapa: atom → wzór → tlenek → wodorotlenek → kwas → sól → rachunki / redoks / doświadczenie.

### Z życia (hasła do powtórki)
- Proszek do pieczenia: NaHCO₃ + kwas → CO₂.
- Sól na drodze i w słoiku: T krzepnięcia / osmoza.
- Rdza i akumulator: redoks.
- Mydło: często odczyn lekko zasadowy (hydroliza).
- pH basenu ~7,2 — kompromis dezynfekcja vs skóra (hasło, nie receptura).

<!-- ==================== END L012 ==================== -->

<!-- ==================== BEGIN L013 ==================== -->

## WYKŁAD Z HTML L013

Chemia L013 EXTRA — zaawansowana (po L012, most z L001)

  Numeracja


**L013 to lekcja extra na końcu roku (dawniej myląco numerowana L001).** W pakiecie Podstawa Plus kolejność nauki to L001 → L002 → … → L012, a dopiero potem ta lekcja extra. Indeks roku zostaje plikiem nadrzędnym: `L000-INDEKS-ROKU_MASTER_v1.0 (8).html`.



      L013 EXTRA — Chemia zaawansowana (most z L001)
      Nie jest to pierwsza lekcja roku. Extra po L001–L012 · liceum / konkurs

        Konfiguracje elektronowe · VSEPR · Hybrydyzacja · Redoks zaawansowany · Stechiometria z wydajnością · Kinetyka · Równowaga · Elektrochemia



      0%Zacznij naukę









## Spis treści


    Wprowadzenie i plan pracy

      Cel lekcji
      Plan pracy
      Test wstępny



    1. Konfiguracje elektronowe
    Konfiguracje


    2. VSEPR — geometria cząsteczek
    VSEPR


    3. Hybrydyzacja
    Hybrydyzacja


    4. Redoks zaawansowany
    Redoks


    5. Stechiometria z wydajnością
    Stechiometria


    6. Kinetyka chemiczna
    Kinetyka


    7. Równowaga chemiczna
    Równowaga


    8. Elektrochemia
    Elektrochemia


    Ćwiczenia, fiszki, test

      Ćwiczenia
      Fiszki
      Test końcowy


  Słowa kluczowe: konfiguracje · VSEPR · hybrydyzacja · redoks · stechiometria · kinetyka · równowaga · elektrochemia



## Cel lekcji

    Po tej lekcji umiesz:


- zapisać konfigurację elektronową (podpowłokową) dla pierwszych 20 pierwiastków oraz wybranych jonów,

- zastosować reguły Aufbau, Hunda i Pauliego,

- przewidzieć geometrię cząsteczki na podstawie teorii VSEPR,

- rozpoznać typ hybrydyzacji (sp, sp², sp³),

- rozwiązać zadania stechiometryczne z wydajnością i reagentem ograniczającym,

- wyjaśnić, jak czynniki zewnętrzne wpływają na szybkość reakcji i położenie równowagi,

- obliczyć SEM ogniwa na podstawie potencjałów standardowych.



    Uwaga


L013 **nie jest obowiązkowa** na egzaminie ósmoklasisty. To lekcja dla uczniów, którzy chcą zrozumieć chemię głębiej lub przygotowują się do konkursów. Rób ją **po** opanowaniu L001–L012.




## Plan pracy



- **Dzień 1:** konfiguracje elektronowe + diagram orbitali.

- **Dzień 2:** VSEPR + hybrydyzacja + diagramy geometrii.

- **Dzień 3:** redoks zaawansowany + stechiometria z wydajnością.

- **Dzień 4:** kinetyka + równowaga + elektrochemia.

- **Dzień 5:** ćwiczenia + fiszki + test końcowy.





## Test wstępny



- Ile elektronów walencyjnych ma atom siarki (Z=16)?

- Co to utleniacz, a co reduktor?

- Jaki jest wzór ogólny alkanów?

- Co to mol i ile cząstek zawiera?

- Jaki kształt ma cząsteczka CH₄?

    Pokaż odpowiedzi



**1.** 6 elektronów walencyjnych (konfiguracja 3s² 3p⁴).


**2.** Utleniacz przyjmuje elektrony (sam się redukuje); reduktor oddaje elektrony (sam się utlenia).


**3.** CₙH₂ₙ₊₂.


**4.** Mol to jednostka liczności materii; 1 mol = 6,02·10²³ cząstek.


**5.** Tetraedryczny (kąty ~109,5°).





## 1. Konfiguracje elektronowe



### 1.1. Od atomu Bohra do orbitali




Orbital — obszar przestrzeni wokół jądra, w którym prawdopodobieństwo znalezienia elektronu jest największe (zwykle przyjmuje się 90%). Orbital to nie „tor", po którym krąży elektron, ale chmura prawdopodobieństwa.




Podpowłoka — zbiór orbitali o tej samej energii w obrębie jednej powłoki (oznaczana literami s, p, d, f).




Powłoka (poziom energetyczny) — zbiór podpowłok o zbliżonej energii, oznaczany numerem n = 1, 2, 3, ... (historycznie: K, L, M, N...).












    | Podpowłoka | Liczba orbitali | Maks. liczba e⁻ | Kształt |
| --- | --- | --- | --- |
| s | 1 | 2 | kulisty |
| p | 3 | 6 | hantlowy (dwa płatki) |
| d | 5 | 10 | złożony (4 płatki) |
| f | 7 | 14 | bardzo złożony |





### 1.2. Trzy zasady zapełniania orbitali


    Zasada Aufbau (budowy)


Elektrony zapełniają orbitale **od najniższej energii do najwyższej**. Kolejność energetyczna podpowłok:


1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p



    Reguła Hunda


W obrębie jednej podpowłoki elektrony **najpierw zajmują orbitale pojedynczo** (zgodne spiny), a dopiero potem się parują. Dzięki temu atom ma jak najwięcej niesparowanych elektronów — jest to korzystne energetycznie.



    Zakaz Pauliego


Na jednym orbitalu mogą znajdować się **maksymalnie 2 elektrony** i muszą mieć **przeciwne spiny** (↑↓).






[schemat SVG w HTML]

    Diagram energetyczny orbitali — kolejność zapełniania według zasady Aufbau. Zwróć uwagę: 4s ma niższą energię niż 3d.




### 1.3. Przykłady konfiguracji

















    | Pierwiastek | Z | Konfiguracja podpowłokowa | Skrót | Powłoki |
| --- | --- | --- | --- | --- |
| H | 1 | 1s¹ | — | 1 |
| He | 2 | 1s² | — | 2 |
| Li | 3 | 1s² 2s¹ | [He] 2s¹ | 2, 1 |
| C | 6 | 1s² 2s² 2p² | [He] 2s² 2p² | 2, 4 |
| N | 7 | 1s² 2s² 2p³ | [He] 2s² 2p³ | 2, 5 |
| O | 8 | 1s² 2s² 2p⁴ | [He] 2s² 2p⁴ | 2, 6 |
| Na | 11 | 1s² 2s² 2p⁶ 3s¹ | [Ne] 3s¹ | 2, 8, 1 |
| Ar | 18 | 1s² 2s² 2p⁶ 3s² 3p⁶ | [Ne] 3s² 3p⁶ | 2, 8, 8 |
| K | 19 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ | [Ar] 4s¹ | 2, 8, 8, 1 |
| Ca | 20 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² | [Ar] 4s² | 2, 8, 8, 2 |





### 1.4. Wyjątki: Cr i Cu


    Dlaczego wyjątki?


Układ o **półpełnej** (d⁵) lub **pełnej** (d¹⁰) podpowłoce d jest energetycznie korzystniejszy niż układ z d⁴ lub d⁹. Dlatego elektron z 4s „przeskakuje" na 3d:


- **Chrom (Cr, Z=24):** oczekiwane [Ar] 4s² 3d⁴ → rzeczywiste **[Ar] 4s¹ 3d⁵**

- **Miedź (Cu, Z=29):** oczekiwane [Ar] 4s² 3d⁹ → rzeczywiste **[Ar] 4s¹ 3d¹⁰**





### 1.5. Konfiguracje jonów


    Reguła


Przy tworzeniu kationów elektrony usuwamy **najpierw z orbitalu o najwyższym n** (zazwyczaj 4s), a dopiero potem z 3d.












    | Jon | Liczba e⁻ | Konfiguracja | Uwagi |
| --- | --- | --- | --- |
| Na⁺ | 10 | [Ne] | izoelektronowy z Ne |
| Cl⁻ | 18 | [Ar] | izoelektronowy z Ar |
| Fe²⁺ | 24 | [Ar] 3d⁶ | usuwamy 4s² |
| Fe³⁺ | 23 | [Ar] 3d⁵ | usuwamy 4s² i 1 e⁻ z 3d |
| Cu²⁺ | 27 | [Ar] 3d⁹ | usuwamy 4s¹ |




    Ciekawostka
    Jon Fe³⁺ ma konfigurację [Ar] 3d⁵ — półpełną podpowłokę d. To czyni go wyjątkowo trwałym. Półpełne d⁵ bywa korzystne energetycznie; w wodzie Fe(II) i tak łatwo utlenia się powietrzem. Stabilność Fe(II)/Fe(III) zależy od ligandów i pH — nie jest to „zawsze +III".




## 2. VSEPR — geometria cząsteczek




VSEPR (Valence Shell Electron Pair Repulsion) — teoria odpychania par elektronowych powłoki walencyjnej. Mówi, że pary elektronowe wokół atomu centralnego układają się tak daleko od siebie, jak to możliwe, aby zminimalizować odpychanie.




### 2.1. Zasada


    Klucz


- Pary elektronowe (wiążące i wolne) odpychają się.

- Odpychanie: **wolna–wolna > wolna–wiążąca > wiążąca–wiążąca**.

- Wolne pary „zajmują więcej miejsca" — zmniejszają kąty między wiązaniami.





### 2.2. Tabela geometrii














    | Pary wiążące | Wolne pary | Kształt | Przykład | Kąt |
| --- | --- | --- | --- | --- |
| 2 | 0 | liniowy | CO₂, BeCl₂ | 180° |
| 3 | 0 | trygonalny płaski | BF₃, SO₃ | 120° |
| 4 | 0 | tetraedryczny | CH₄, CCl₄ | 109,5° |
| 3 | 1 | piramidalny | NH₃ | ~107° |
| 2 | 2 | kątowy | H₂O | ~104,5° |
| 5 | 0 | bipiramidowy | PCl₅ | 90°/120° |
| 6 | 0 | oktaedryczny | SF₆ | 90° |







[schemat SVG w HTML]

    Kształty cząsteczek według VSEPR. Czerwone kropki to wolne pary elektronowe — zajmują więcej miejsca i zmniejszają kąty.



    Ciekawostka
    Dlaczego kąt H–O–H w wodzie (104,5°) jest mniejszy niż 109,5°? Bo dwie wolne pary na tlenie „rozpychają się" mocniej niż pary wiążące i ściskają wiązania O–H. To skutek odpychania wolna–wolna.




## 3. Hybrydyzacja




Hybrydyzacja — mieszanie orbitali atomowych o zbliżonej energii w nowe, równoważne orbitale hybrydowe, które mają taki sam kształt i energię. Dzięki temu atom może tworzyć więcej równocennych wiązań.




### 3.1. Typy hybrydyzacji






        ****
        ****
        ****

    | Typ | Orbitale mieszane | Liczba hybryd | Kształt | Przykład |
| --- | --- | --- | --- | --- |
| sp | 1×s + 1×p | 2 | liniowy (180°) | BeCl₂, CO₂, C₂H₂ |
| sp² | 1×s + 2×p | 3 | trygonalny (120°) | BF₃, C₂H₄, benzen |
| sp³ | 1×s + 3×p | 4 | tetraedryczny (109,5°) | CH₄, H₂O, NH₃ |







[schemat SVG w HTML]

    Trzy typy hybrydyzacji. Fioletowe „chmurki" to orbitale hybrydowe.



    Jak rozpoznać typ hybrydyzacji?


- Policz **pary elektronowe** (wiążące + wolne) wokół atomu centralnego.

- 2 pary → sp; 3 pary → sp²; 4 pary → sp³.

- Narysuj geometrię zgodną z VSEPR.




    Ciekawostka
    W cząsteczce wody tlen ma hybrydyzację sp³ (4 pary: 2 wiążące + 2 wolne), ale kształt cząsteczki jest **kątowy**, a nie tetraedryczny. Hybrydyzacja opisuje orbitale atomu centralnego, a VSEPR — geometrię całej cząsteczki. To dwa różne (choć powiązane) poziomy opisu.




## 4. Redoks zaawansowany




W L010 poznałeś podstawy redoks. Tutaj uczysz się **metody jonowo-elektronowej** (połówkowej) — najbardziej uniwersalnej metody bilansowania.




### 4.1. Metoda jonowo-elektronowa — kroki




- Zapisz **szkielet** reakcji (substraty → produkty).

- Wskaż atomy zmieniające stopień utlenienia.

- Zapisz **połówkowe reakcje** utleniania i redukcji.

- Wyrównaj atomy (poza H i O).

- Wyrównaj O, dodając H₂O.

- Wyrównaj H, dodając H⁺ (środowisko kwasowe) lub OH⁻ (zasadowe).

- Wyrównaj ładunki, dodając e⁻.

- Dobierz mnożniki, by liczba e⁻ oddanych = przyjętych.

- Zsumuj połówki i sprawdź bilans.





### 4.2. Przykład — środowisko kwasowe


    Reakcja
    MnO₄⁻ + Fe²⁺ + H⁺ → Mn²⁺ + Fe³⁺ + H₂O




**Redukcja:** MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O


**Utlenianie:** Fe²⁺ → Fe³⁺ + e⁻ | ·5


**Suma:** MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺




### 4.3. Przykład — środowisko zasadowe (dysproporcjonowanie)


    Reakcja
    Cl₂ + OH⁻ → Cl⁻ + ClO₃⁻ + H₂O




**Redukcja:** Cl₂ + 2e⁻ → 2Cl⁻ | ·5


**Utlenianie:** Cl₂ + 12OH⁻ → 2ClO₃⁻ + 6H₂O + 10e⁻ | ·1


**Suma:** 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O



    Ciekawostka
    W reakcjach redoks w środowisku zasadowym zamiast H⁺ używamy OH⁻ i H₂O. Trzeba tylko pamiętać, że po każdej stronie równania liczba atomów i ładunków musi się zgadzać.




## 5. Stechiometria z wydajnością




Wydajność (W) — stosunek ilości produktu rzeczywiście otrzymanego do ilości teoretycznej (obliczonej ze stechiometrii), wyrażony w procentach. W = (m_rzecz / m_teor) · 100%.





Reagent ograniczający — substrat, który zużyje się pierwszy i tym samym decyduje o ilości powstającego produktu. Drugi substrat jest w nadmiarze.




### 5.1. Algorytm




- Zapisz i zbilansuj równanie.

- Przelicz dane na mole.

- Ustal reagent ograniczający: podziel n przez współczynnik stechiometryczny; mniejszy wynik = ograniczający.

- Oblicz n produktu z reagenta ograniczającego.

- Przelicz na masę/objętość.

- Uwzględnij wydajność: pomnóż przez W/100%.




    Przykład
    10 g Mg + 50 g 20% HCl → ? dm³ H₂ (W = 90%)
    Mg + 2HCl → MgCl₂ + H₂




- n(Mg) = 10/24 ≈ 0,417 mol

- m(HCl) = 50 · 0,2 = 10 g → n(HCl) = 10/36,5 ≈ 0,274 mol

- Potrzeba 2 mole HCl na 1 mol Mg → 0,417 mol Mg wymaga 0,833 mol HCl. Mamy 0,274 mol → **HCl jest ograniczający**.

- n(H₂) = 0,274/2 = 0,137 mol (teoretycznie)

- Z wydajnością 90%: n(H₂) = 0,137 · 0,9 = 0,1233 mol

- V = 0,1233 · 22,4 ≈ 2,76 dm³





## 6. Kinetyka chemiczna




Szybkość reakcji — zmiana stężenia substratu (lub produktu) w jednostce czasu. Im większa szybkość, tym szybciej reakcja zachodzi.





Energia aktywacji (Ea) — minimalna energia, jaką muszą mieć cząsteczki, aby zderzenie było skuteczne (doprowadziło do reakcji). Im niższa Ea, tym szybciej zachodzi reakcja.




### 6.1. Czynniki szybkości reakcji












    | Czynnik | Wpływ | Wyjaśnienie |
| --- | --- | --- |
| Stężenie substratów | ↑ stężenie → ↑ szybkość | więcej zderzeń |
| Temperatura | ↑ T → ↑ szybkość | więcej cząsteczek o E ≥ Ea (reguła van't Hoffa: +10°C → 2–4× szybciej) |
| Katalizator | ↑ szybkość | obniża Ea |
| Powierzchnia kontaktu | ↑ powierzchnia → ↑ szybkość | więcej miejsc kontaktu (dla ciał stałych) |
| Ciśnienie (gazy) | ↑ ciśnienie → ↑ szybkość | więcej zderzeń |







[schemat SVG w HTML]

    Wykres energii reakcji. Katalizator obniża energię aktywacji (Ea), ale nie zmienia ΔH ani położenia równowagi.



    Ciekawostka
    Reguła van't Hoffa mówi, że wzrost temperatury o 10°C przyspiesza reakcję 2–4 razy. To dlatego jedzenie w lodówce psuje się wolniej, a reakcje w wysokich temperaturach (np. spalanie) zachodzą gwałtownie.




## 7. Równowaga chemiczna




Równowaga chemiczna — stan, w którym szybkość reakcji w prawo jest równa szybkości reakcji w lewo, a stężenia wszystkich substancji są stałe (choć reakcje nie ustają — zachodzą w obie strony z tą samą szybkością).





Stała równowagi (K) — iloraz iloczynu stężeń produktów (podniesionych do potęg równych współczynnikom) do iloczynu stężeń substratów. Dla reakcji aA + bB ⇌ cC + dD: K = ([C]^c · [D]^d) / ([A]^a · [B]^b).




### 7.1. Reguła Le Chateliera


    Zasada przekory


Jeśli na układ w równowadze podziałamy czynnikiem zewnętrznym (zmiana stężenia, temperatury, ciśnienia), to układ **przeciwdziała** tej zmianie — przesuwa równowagę w kierunku, który ją minimalizuje.












    | Zmiana | Kierunek przesunięcia | Przykład |
| --- | --- | --- |
| ↑ stężenie substratu | w prawo (więcej produktu) | dodanie N₂ do N₂ + 3H₂ ⇌ 2NH₃ |
| ↑ temperatura | w stronę reakcji endotermicznej | dla egzotermicznej syntezy NH₃ → w lewo |
| ↑ ciśnienie (gazy) | w stronę mniejszej liczby moli gazu | N₂ + 3H₂ → 2NH₃ (4 mole → 2 mole) |
| katalizator | nie zmienia położenia K | tylko przyspiesza osiągnięcie równowagi |





### 7.2. Przykład przemysłowy — synteza amoniaku




**N₂ + 3H₂ ⇌ 2NH₃**, ΔH = −92 kJ/mol (egzotermiczna)


- **Wysokie ciśnienie** sprzyja produktom (mniej moli gazu).

- **Niska temperatura** sprzyja produktom (reakcja egzotermiczna), ale spowalnia reakcję.

- W praktyce stosuje się **~450°C i katalizator (Fe)**, by uzyskać kompromis między szybkością a wydajnością.





## 8. Elektrochemia




Potencjał standardowy (E°) — miara zdolności danego układu redoks do przyjmowania elektronów (czyli do redukcji), mierzona względem elektrody wodorowej (E° = 0,00 V). Im większe E°, tym silniejszy utleniacz.




### 8.1. Szereg napięciowy (wybrane)


















    | Układ | E° [V] | Rola |
| --- | --- | --- |
| Li⁺/Li | −3,05 | silny reduktor |
| K⁺/K | −2,93 |  |
| Na⁺/Na | −2,71 |  |
| Mg²⁺/Mg | −2,36 |  |
| Al³⁺/Al | −1,66 |  |
| Zn²⁺/Zn | −0,76 |  |
| Fe²⁺/Fe | −0,44 |  |
| 2H⁺/H₂ | 0,00 | odniesienie |
| Cu²⁺/Cu | +0,34 |  |
| Ag⁺/Ag | +0,80 |  |
| Au³⁺/Au | +1,50 | silny utleniacz |





### 8.2. Siła elektromotoryczna (SEM)


    Wzór


SEM = E°(katoda) − E°(anoda)


Katoda to elektroda, na której zachodzi redukcja (wyższy potencjał). Anoda — utlenianie (niższy potencjał).






[schemat SVG w HTML]

    Ogniwo Daniella. Anoda (−) to Zn (utlenianie), katoda (+) to Cu (redukcja). SEM = 0,34 − (−0,76) = 1,10 V.



    Ciekawostka
    Ogniwo Daniella to klasyczny przykład ogniwa galwanicznego. W praktyce stosuje się ogniwa litowo-jonowe (baterie w telefonach) i ogniwa paliwowe (wodór + tlen → prąd + woda). Wszystkie działają na tej samej zasadzie: reakcja redoks rozdzielona na dwa półogniwa.




## Ćwiczenia



### Poziom podstawowy podstawowy




- Zapisz konfigurację elektronową atomów: C, O, Na, Ar.

- Określ geometrię cząsteczek: CH₄, H₂O, NH₃, CO₂.

- Określ hybrydyzację atomu centralnego: CH₄, C₂H₄, C₂H₂.

- Wymień 3 czynniki szybkości reakcji.

    Pokaż odpowiedzi



- C: 1s² 2s² 2p²; O: 1s² 2s² 2p⁴; Na: [Ne] 3s¹; Ar: [Ne] 3s² 3p⁶.

- CH₄ — tetraedryczna; H₂O — kątowa; NH₃ — piramidalna; CO₂ — liniowa.

- CH₄ — sp³; C₂H₄ — sp²; C₂H₂ — sp.

- Stężenie, temperatura, katalizator (także rozdrobnienie, ciśnienie).






### Poziom rozszerzony ambitny




- Zapisz konfigurację skróconą dla K, Ca, Fe.

- Oblicz SEM ogniwa Zn/Fe (E°Zn = −0,76 V; E°Fe = −0,44 V).

- Zbilansuj metodą jonowo-elektronową: MnO₄⁻ + Fe²⁺ + H⁺ → Mn²⁺ + Fe³⁺ + H₂O.

- Wyjaśnij, dlaczego katalizator nie zmienia stałej równowagi K.

- Oblicz wydajność, jeśli teoretycznie powinno powstać 8 g produktu, a otrzymano 7 g.

    Pokaż odpowiedzi



- K: [Ar] 4s¹; Ca: [Ar] 4s²; Fe: [Ar] 4s² 3d⁶.

- SEM = −0,44 − (−0,76) = 0,32 V.

- MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺.

- Katalizator obniża Ea zarówno reakcji w prawo, jak i w lewo — nie zmienia energii substratów ani produktów, więc nie zmienia położenia równowagi.

- W = (7/8)·100% = 87,5%.






## Fiszki (22)

    Konfiguracja H**1s¹**podstawa
    Konfiguracja C**1s² 2s² 2p²**podstawa
    Konfiguracja Na**[Ne] 3s¹**podstawa
    Konfiguracja Ar**[Ne] 3s² 3p⁶**podstawa
    Kolejność Aufbau**1s 2s 2p 3s 3p 4s 3d**podstawa
    Reguła Hunda**Pojedynczo przed parowaniem**podstawa
    Reguła Pauliego**2 e⁻ w orbitalu, przeciwne spiny**podstawa
    Geometria CH₄**tetraedryczna**podstawa
    Geometria H₂O**kątowa**podstawa
    Geometria NH₃**piramidalna**podstawa
    Geometria CO₂**liniowa**podstawa
    Hybrydyzacja CH₄**sp³**podstawa
    Hybrydyzacja C₂H₄**sp²**podstawa
    Hybrydyzacja C₂H₂**sp**podstawa
    Energia aktywacji**min. energia reakcji**podstawa
    Katalizator**obniża Ea, nie zmienia K**pułapka
    Reguła van't Hoffa**+10°C → 2–4× szybciej**podstawa
    Le Chatelier**układ przeciwdziała zmianom**podstawa
    SEM ogniwa**E°(katoda) − E°(anoda)**podstawa
    E° Zn²⁺/Zn**−0,76 V**podstawa
    E° Cu²⁺/Cu**+0,34 V**podstawa
    Wyjątek Cr**[Ar] 4s¹ 3d⁵**ambitny




## Test końcowy



- Zapisz konfigurację elektronową dla C, O, Na, Ar.

- Określ geometrię i hybrydyzację: CH₄, H₂O, NH₃.

- Wymień 3 czynniki szybkości reakcji.

- Zbilansuj: MnO₄⁻ + Fe²⁺ + H⁺ → …

- Oblicz SEM ogniwa Zn/Cu.

- Co to reguła Le Chateliera?

- (extra) Dlaczego 4s zapełnia się przed 3d?

- (extra) Co to energia aktywacji?

    Pokaż odpowiedzi



- C: 1s² 2s² 2p²; O: 1s² 2s² 2p⁴; Na: [Ne] 3s¹; Ar: [Ne] 3s² 3p⁶.

- CH₄ — tetraedryczna, sp³; H₂O — kątowa, sp³; NH₃ — piramidalna, sp³.

- Stężenie, temperatura, katalizator.

- MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺.

- SEM = 0,34 − (−0,76) = 1,10 V.

- Układ w równowadze przeciwdziała zmianom zewnętrznym.

- 4s ma niższą energię niż 3d dla pierwszych 20 pierwiastków — elektrony zapełniają najpierw niższe energetycznie orbitale.

- Minimalna energia, jaką muszą mieć cząsteczki, aby zderzenie było skuteczne.






## Słownik i ciekawostki
















    | Pojęcie | Definicja |
| --- | --- |
| Orbital | Obszar przestrzeni, gdzie prawdopodobieństwo znalezienia elektronu jest największe. |
| Podpowłoka | Zbiór orbitali o tej samej energii (s, p, d, f). |
| VSEPR | Teoria odpychania par elektronowych — przewiduje geometrię cząsteczki. |
| Hybrydyzacja | Mieszanie orbitali atomowych w równoważne orbitale hybrydowe. |
| Energia aktywacji | Minimalna energia potrzebna do zapoczątkowania reakcji. |
| Katalizator | Substancja obniżająca Ea, niezmieniająca K. |
| Stała równowagi K | Iloraz stężeń produktów i substratów w stanie równowagi. |
| Reguła Le Chateliera | Układ w równowadze przeciwdziała zmianom zewnętrznym. |
| Potencjał standardowy E° | Miara zdolności do przyjmowania elektronów (redukcji). |
| SEM | Siła elektromotoryczna ogniwa: E°(katoda) − E°(anoda). |




    Ciekawostka 1
    Elektron nie „krąży" wokół jądra jak planeta. To chmura prawdopodobieństwa. Model Bohra (orbity) to uproszczenie — w rzeczywistości mówimy o orbitalach.


    Ciekawostka 2
    Liczba Avogadra (6,02·10²³) jest tak ogromna, że gdybyś liczył cząsteczki po jednej na sekundę, policzenie jednego mola zajęłoby Ci około 20 miliardów lat — więcej niż wiek Wszechświata.


    Ciekawostka 3
    W ogniwie paliwowym wodór i tlen łączą się w wodę, dając prąd elektryczny — bez spalania. To najbardziej „czysta" metoda pozyskiwania energii z wodoru.




**CHEMIA L013 EXTRA** · po L012 · most z L001 · nie materiał startowy E8 · 2026


Ucz się świadomie, nie na pamięć.

<details><summary>Wcześniejsza warstwa MD (zachowana, bez kasowania)</summary>

# LEKCJA L013 — ZAAWANSOWANA (most z L001)

# CHEMIA: PODSTAWA PLUS

## L013 — Zaawansowana (most z L001)

**Konfiguracje elektronowe · VSEPR · hybrydyzacja · redoks zaawansowany · stechiometria z wydajnością · kinetyka · równowaga**

**MASTER v1.0** · 2026-09-12  
Wzorzec: L001 MASTER v3.1 · L002–L012 MASTER  
Poprzednia lekcja: L012 (powtórka klasy 8) · Następna: —

**Kolejność:** konfiguracje elektronowe → VSEPR → hybrydyzacja → redoks zaawansowany → stechiometria z wydajnością → kinetyka → równowaga → elektrochemia

**Zakres:** materiał ponad podstawę programową — dla uczniów zainteresowanych chemią.

**Zasada techniczna:** ten plik MD jest MASTER. HTML L013 jest jego wiernym rozwinięciem.

**Warstwy treści (stałe w całym kursie):**
| Warstwa | Znaczenie | Kolor w HTML |
|---------|-----------|--------------|
| Musisz umieć (podstawa) | obowiązek | zielony |
| Warto umieć / trening | utrwalenie, egzamin | niebieski |
| Pułapka / błąd | klinika błędów | czerwony |
| Wskazówka | hint | pomarańczowy |
| Rozszerzenie / ambitne | opcjonalnie | fioletowy |
| Zaawansowane | tylko po opanowaniu podstawy | fiolet / osobna sekcja |

**Uwaga:** L013 nie jest obowiązkowa na egzaminie ósmoklasisty. To lekcja dla uczniów, którzy chcą zrozumieć chemię głębiej lub przygotowują się do konkursów.

---

## JAK PRACOWAĆ Z TĄ LEKCJĄ (INSTRUKCJA OBSŁUGI MÓZGU)

1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?".
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach.**
4. **Mów na głos.**
5. **Rysuj.** Orbitalе, geometrie, wykresy.
6. **Łap moment „aha!".**

**Zasada 80/20:** konfiguracje elektronowe · VSEPR · hybrydyzacja · równowaga chemiczna.

---

## FILOZOFIA (STAŁA)

```
PODSTAWA        →  „umiem zrobić"
ROZSZERZENIE    →  „rozumiem dlaczego"
DLA AMBITNYCH   →  „potrafię połączyć"
ZAAWANSOWANY    →  „potrafię zakwestionować i uzasadnić"
```

**Tempo pracy:** dowolne. Bez paska postępu.

---

## POZIOMY (STAŁE)

| Poziom | Znaczenie |
|--------|-----------|
| **PODSTAWA** | na lekcji i sprawdzianie |
| **ROZSZERZENIE** | utrwalenie, egzamin |
| **DLA AMBITNYCH** | dlaczego / kontekst |
| **ZAAWANSOWANY** | mechanizmy, most do liceum |

---

## CO WARTO WIEDZIEĆ WCZEŚNIEJ (KOMPAS)

Cały materiał chemii klasy 8 (L001–L012):
- Fundamenty: atom, jon, wartościowość.
- Tlenki, wodorotlenki, kwasy, sole.
- Organika, biochemia.
- Stężenia, stechiometria.
- Redoks.
- Doświadczenia.

**Uwaga:** L013 nie powtarza tych treści — buduje na nich.

---

## 1. CEL LEKCJI

Po tej lekcji umiesz:

- zapisać konfigurację elektronową (podpowłokową) dla pierwszych 20 pierwiastków,
- zastosować reguły Aufbau, Hunda, Pauliego,
- przewidzieć geometrię cząsteczki (VSEPR),
- rozpoznać typ hybrydyzacji (sp, sp², sp³),
- rozwiązać zadania stechiometryczne z wydajnością,
- zrozumieć kinetykę i równowagę chemiczną,
- (zaawansowany) znać potencjały standardowe i ogniwa.

---

## 2. ŚCIĄGA

### Konfiguracje elektronowe

**Poziomy i podpowłoki:**
- Poziom 1: podpowłoka 1s (2 e⁻)
- Poziom 2: 2s (2 e⁻), 2p (6 e⁻)
- Poziom 3: 3s (2 e⁻), 3p (6 e⁻), 3d (10 e⁻)
- Poziom 4: 4s (2 e⁻), 4p (6 e⁻), 4d (10 e⁻), 4f (14 e⁻)

**Kolejność zapełniania (reguła Aufbau):**
```
1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p
```

**Reguła Hunda:** elektrony w podpowłoce zapełniają orbitale pojedynczo (zgodne spine) przed parowaniem.

**Reguła Pauliego:** w jednym orbitalu maks. 2 elektrony o przeciwnych spinach.

**Przykłady konfiguracji:**

| Pierwiastek | Z | Konfiguracja podpowłokowa | Konfiguracja powłokowa |
|-------------|---|---------------------------|------------------------|
| H | 1 | 1s¹ | K1 |
| He | 2 | 1s² | K2 |
| Li | 3 | 1s² 2s¹ | K2 L1 |
| C | 6 | 1s² 2s² 2p² | K2 L4 |
| N | 7 | 1s² 2s² 2p³ | K2 L5 |
| O | 8 | 1s² 2s² 2p⁴ | K2 L6 |
| Na | 11 | 1s² 2s² 2p⁶ 3s¹ | K2 L8 M1 |
| Ar | 18 | 1s² 2s² 2p⁶ 3s² 3p⁶ | K2 L8 M8 |
| K | 19 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ | K2 L8 M8 N1 |
| Ca | 20 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² | K2 L8 M8 N2 |

**Uwaga dla pierwszych 20:** 4s zapełnia się przed 3d.

**Skrócony zapis (z gazem szlachetnym):**
- Na: [Ne] 3s¹
- K: [Ar] 4s¹
- Ca: [Ar] 4s²

### VSEPR — geometria cząsteczek

**VSEPR** (Valence Shell Electron Pair Repulsion) — teoria odpychania par elektronowych.

**Zasada:** pary elektronowe wokół atomu centralnego układają się tak daleko od siebie, jak to możliwe.

**Tabela geometrii:**

| Liczba par wiążących | Wolne pary | Kształt | Przykład | Kąt |
|----------------------|------------|---------|----------|-----|
| 2 | 0 | liniowy | CO₂, BeCl₂ | 180° |
| 3 | 0 | trygonalny płaski | BF₃, SO₃ | 120° |
| 4 | 0 | tetraedryczny | CH₄, CCl₄ | 109,5° |
| 3 | 1 | piramidalny | NH₃ | 107° |
| 2 | 2 | kątowy | H₂O | 104,5° |
| 5 | 0 | bipiramidowy | PCl₅ | 90°/120° |
| 6 | 0 | oktaedryczny | SF₆ | 90° |

**Wpływ wolnych par:** wolne pary zajmują więcej miejsca niż pary wiążące, więc zmniejszają kąty (np. NH₃ 107° < 109,5°; H₂O 104,5°).

### Hybrydyzacja

**Hybrydyzacja** — mieszanie orbitali atomowych w równoważne orbitale hybrydowe.

| Typ | Orbitale mieszane | Kształt | Przykład |
|-----|-------------------|---------|----------|
| **sp** | 1s + 1p | liniowy (180°) | BeCl₂, CO₂, C₂H₂ |
| **sp²** | 1s + 2p | trygonalny (120°) | BF₃, C₂H₄, benzen |
| **sp³** | 1s + 3p | tetraedryczny (109,5°) | CH₄, H₂O, NH₃ |

**Uwaga:** wolne pary w H₂O i NH₃ zajmują orbitale hybrydowe sp³, ale geometria cząsteczki jest inna (H₂O — kątowa; NH₃ — piramidalna).

### Redoks zaawansowany

**Bilans elektronowy** — metoda połówkowa (jak w L010).

**Metoda jonowo-elektronowa:**
1. Zapisz połówkowe reakcje utleniania i redukcji.
2. Wyrównaj atomy (poza H i O).
3. Wyrównaj O (dodając H₂O).
4. Wyrównaj H (dodając H⁺).
5. Wyrównaj ładunki (dodając e⁻).
6. Dobierz mnożniki (e⁻ równe).
7. Zsumuj połówki.

**Przykład:**
```
MnO₄⁻ + Fe²⁺ + H⁺ → Mn²⁺ + Fe³⁺ + H₂O
```

- Redukcja: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O | ·1
- Utlenianie: Fe²⁺ → Fe³⁺ + e⁻ | ·5
- Suma: MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺

### Stechiometria z wydajnością

**Wydajność (W)** = (m_rzecz / m_teor) · 100%

**Zadanie:**
1. Oblicz m_teor na podstawie stechiometrii.
2. Znając m_rzecz, oblicz W.

**Uwaga:** wydajność nie może przekroczyć 100% (jeśli > 100% — błąd).

### Kinetyka chemiczna

**Szybkość reakcji** — zmiana stężenia substratu lub produktu w jednostce czasu.

**Czynniki wpływające:**
1. **Stężenie substratów** — większe stężenie → szybsza reakcja.
2. **Temperatura** — wyższa temperatura → szybsza reakcja (reguła van't Hoffa: +10°C → 2–4× szybciej).
3. **Katalizator** — przyspiesza (obniża energię aktywacji).
4. **Powierzchnia kontaktu** — większa → szybsza (ciała stałe).
5. **Ciśnienie** (gazy) — większe ciśnienie → szybsza.

**Energia aktywacji (Ea)** — minimalna energia potrzebna do zapoczątkowania reakcji.

### Równowaga chemiczna

**Reakcja odwracalna:** A + B ⇌ C + D.

**Stan równowagi:** szybkość reakcji w obie strony równa; stężenia stałe.

**Stała równowagi K:**
```
K = ([C]·[D]) / ([A]·[B])
```

**Reguła Le Chateliera (zasada przekory):** układ w równowadze przeciwdziała zmianom.

- **Zwiększenie stężenia substratu** → równowaga przesuwa się w prawo (więcej produktu).
- **Zwiększenie temperatury** → równowaga przesuwa się w stronę reakcji endotermicznej.
- **Zwiększenie ciśnienia** (gazy) → przesuwa w stronę mniejszej liczby moli gazu.
- **Katalizator** — nie zmienia położenia równowagi, tylko przyspiesza jej osiągnięcie.

### Elektrochemia

**Potencjał standardowy (E°)** — miara zdolności do przyjmowania elektronów.

- Większe E° → silniejszy utleniacz.
- Mniejsze E° → silniejszy reduktor.

**Szereg napięciowy** (wybrane):
```
Li⁺/Li: −3,05 V
K⁺/K: −2,93 V
Na⁺/Na: −2,71 V
Mg²⁺/Mg: −2,36 V
Al³⁺/Al: −1,66 V
Zn²⁺/Zn: −0,76 V
Fe²⁺/Fe: −0,44 V
2H⁺/H₂: 0,00 V (odniesienie)
Cu²⁺/Cu: +0,34 V
Ag⁺/Ag: +0,80 V
Au³⁺/Au: +1,50 V
```

**SEM (siła elektromotoryczna) ogniwa:**
```
SEM = E°(katoda) − E°(anoda)
```

**Przykład ogniwa Daniella:**
- Anoda: Zn → Zn²⁺ + 2e⁻ (E° = −0,76 V)
- Katoda: Cu²⁺ + 2e⁻ → Cu (E° = +0,34 V)
- SEM = 0,34 − (−0,76) = 1,10 V

---

## 3. WZORY — PRZYPOMNIENIE

**Kinetyka:**
- Reguła van't Hoffa: v₂ = v₁ · k^(ΔT/10), gdzie k = 2–4.

**Równowaga:**
- K = ([C]·[D]) / ([A]·[B])
- Dla reakcji: aA + bB ⇌ cC + dD: K = ([C]^c · [D]^d) / ([A]^a · [B]^b)

**Elektrochemia:**
- SEM = E°(katoda) − E°(anoda)
- ΔG° = −nFE° (rozszerzenie)

---

## 4. DOŚWIADCZENIE MODEL

### Doświadczenie 1: Wpływ stężenia na szybkość reakcji

**Problem:** Czy większe stężenie HCl przyspiesza reakcję z Mg?  
**Hipoteza:** Większe stężenie → szybsza reakcja.  
**Sprzęt:** Mg, HCl 1 M, HCl 2 M, probówki, stoper.  
**Obserwacja:** W HCl 2 M reakcja zachodzi szybciej (więcej pęcherzyków).  
**Wniosek:** Szybkość reakcji rośnie ze stężeniem.  
**BHP:** okulary.

### Doświadczenie 2: Wpływ temperatury

**Problem:** Czy wyższa temperatura przyspiesza reakcję?  
**Hipoteza:** Tak.  
**Sprzęt:** Mg, HCl, probówki w różnych temperaturach.  
**Obserwacja:** W ciepłej wodzie reakcja szybsza.  
**Wniosek:** Temperatura przyspiesza reakcje (reguła van't Hoffa).  
**BHP:** ostrożnie z gorącą wodą.

### Doświadczenie 3: Katalizator

**Problem:** Czy MnO₂ przyspiesza rozkład H₂O₂?  
**Hipoteza:** Tak.  
**Sprzęt:** H₂O₂, MnO₂, probówki.  
**Obserwacja:** W obecności MnO₂ wydziela się więcej tlenu.  
**Wniosek:** MnO₂ jest katalizatorem (obniża Ea).  
**Równanie:** 2H₂O₂ →(MnO₂) 2H₂O + O₂  
**BHP:** ostrożnie z H₂O₂ (utleniacz).

---

## 5. KLINIKA BŁĘDÓW (KLINIKA 2.0)

### Tabela błędów

| Błąd ucznia | Poprawie | Reguła |
|-------------|-----------|--------|
| „4s zapełnia się po 3d" | 4s przed 3d (dla pierwszych 20) | Aufbau |
| „K = [produktów]/[substratów] bez potęg" | z potęgami = współczynniki | definicja |
| „katalizator zmienia K" | nie zmienia | definicja |
| „wyższa temperatura zawsze → więcej produktu" | zależy od egzo/endo | Le Chatelier |
| „SEM = E°(anoda) − E°(katoda)" | SEM = E°(katoda) − E°(anoda) | definicja |
| „wolne pary nie wpływają na geometrię" | wpływają | VSEPR |

### Klinika 2.0 — przykład 1

**Błąd:** „4s zapełnia się po 3d."

- **Znajdź:** Zła kolejność.
- **Popraw:** 4s przed 3d.
- **Reguła:** Aufbau (kolejność energetyczna).
- **Dlaczego:** 4s ma niższą energię niż 3d dla pierwszych 20 pierwiastków.
- **Zadanie podobne:** Konfiguracja K (Z=19). (Odp.: [Ar] 4s¹.)
- **Zadanie z pułapką:** Konfiguracja Sc (Z=21). (Odp.: [Ar] 3d¹ 4s².)

### Klinika 2.0 — przykład 2

**Błąd:** „Katalizator zmienia stałą równowagi."

- **Znajdź:** Błędne przekonanie.
- **Popraw:** Katalizator nie zmienia K — tylko przyspiesza osiągnięcie równowagi.
- **Reguła:** Katalizator obniża Ea.
- **Dlaczego:** Nie zmienia energii substratów/produktów.
- **Zadanie podobne:** Co robi katalizator? (Odp.: obniża Ea.)
- **Zadanie z pułapką:** Czy katalizator wpływa na wydajność? (Odp.: Nie.)

### Klinika 2.0 — przykład 3

**Błąd:** „SEM = E°(anoda) − E°(katoda)."

- **Znajdź:** Odwrócony wzór.
- **Popraw:** SEM = E°(katoda) − E°(anoda).
- **Reguła:** Katoda (+) ma wyższy potencjał.
- **Dlaczego:** SEM dodatnie.
- **Zadanie podobne:** SEM ogniwa Zn/Cu. (Odp.: 1,10 V.)
- **Zadanie z pułapką:** SEM ogniwa Cu/Ag. (Odp.: 0,46 V.)

---

## 6. ĆWICZENIA

### Mini-check (5 pytań)

1. Co to konfiguracja elektronowa?
2. Co to VSEPR?
3. Co to hybrydyzacja?
4. Co to energia aktywacji?
5. Co to SEM ogniwa?

### Ćwiczenia samodzielne

**A. Podstawa**

1. Zapisz konfigurację elektronową: H, C, O, Na, Ar.
2. Określ geometrię: CH₄, H₂O, NH₃, CO₂.
3. Określ hybrydyzację: CH₄, C₂H₄, C₂H₂.
4. Wymień 3 czynniki szybkości reakcji.
5. Co to reguła Le Chateliera?

**B. Trening**

6. Zapisz konfigurację: K, Ca.
7. Oblicz SEM ogniwa: Zn/Fe (E°Zn = −0,76; E°Fe = −0,44).
8. Zbilansuj: MnO₄⁻ + Fe²⁺ + H⁺ → …
9. Jak zmieni się równowaga przy dodaniu substratu?
10. Dlaczego katalizator nie zmienia K?

**C. Ambitne**

11. Zapisz konfigurację skróconą dla Ca, Sc, Fe.
12. Narysuj hybrydyzację sp³ dla CH₄.
13. Jak wpływa temperatura na K dla reakcji egzotermicznej?
14. Oblicz wydajność, jeśli z 10 g substratu otrzymano 7 g produktu (teor. 8 g).
15. Zaprojektuj doświadczenie: wpływ stężenia na szybkość (format DOŚWIADCZENIE).

**D. Zaawansowane**

16. Wyjaśnij regułę Hunda.
17. Wyjaśnij regułę Pauliego.
18. Podaj wzór na ΔG° i wyjaśnij.
19. Porównaj kinetykę i termodynamikę.
20. Co to ogniwo paliwowe?

### Drabinka trudności

| Poziom | Zadanie |
|--------|---------|
| ODTWÓRZ | Co to konfiguracja elektronowa? |
| ZASTOSUJ | Zapisz konfigurację dla Na. |
| WYJAŚNIJ | Dlaczego 4s przed 3d? |
| ODKRYJ | Jaka geometria CH₄? |
| POŁĄCZ | Połącz VSEPR z hybrydyzacją. |
| ZAKWESTIONUJ | Czy katalizator zmienia K? |

---

## 7. ODPOWIEDZI

### Mini-check

1. Zapis rozmieszczenia elektronów w atomie.
2. Teoria odpychania par elektronowych.
3. Mieszanie orbitali atomowych w hybrydowe.
4. Minimalna energia potrzebna do reakcji.
5. Siła elektromotoryczna ogniwa.

### Ćwiczenia A

1. H: 1s¹; C: 1s² 2s² 2p²; O: 1s² 2s² 2p⁴; Na: [Ne] 3s¹; Ar: [Ne] 3s² 3p⁶.
2. CH₄: tetraedryczna; H₂O: kątowa; NH₃: piramidalna; CO₂: liniowa.
3. CH₄: sp³; C₂H₄: sp²; C₂H₂: sp.
4. Stężenie, temperatura, katalizator.
5. Układ w równowadze przeciwdziała zmianom.

### Ćwiczenia B

6. K: [Ar] 4s¹; Ca: [Ar] 4s².
7. SEM = −0,44 − (−0,76) = 0,32 V.
8. MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺.
9. Przesunie się w prawo.
10. Nie zmienia energii substratów/produktów.

### Ćwiczenia C

11. Ca: [Ar] 4s²; Sc: [Ar] 3d¹ 4s²; Fe: [Ar] 3d⁶ 4s².
12. Schemat: 4 orbitale sp³ skierowane tetraedrycznie.
13. Dla egzotermicznej: wzrost T → K maleje.
14. W = (7/8)·100% = 87,5%.
15. Format DOŚWIADCZENIE.

### Ćwiczenia D

16. Elektrony zapełniają orbitale pojedynczo przed parowaniem.
17. W jednym orbitalu maks. 2 e⁻ o przeciwnych spinach.
18. ΔG° = −nFE° (n = liczba e⁻; F = stała Faradaya).
19. Kinetyka — szybkość; termodynamika — kierunek i równowaga.
20. Ogniwo paliwowe — konwersja energii chemicznej na elektryczną bez spalania.

---

## 8. FISZKI (22)

| Pytanie | Odpowiedź |
|---------|-----------|
| Konfiguracja H | 1s¹ |
| Konfiguracja C | 1s² 2s² 2p² |
| Konfiguracja Na | [Ne] 3s¹ |
| Konfiguracja Ar | [Ne] 3s² 3p⁶ |
| Kolejność Aufbau | 1s 2s 2p 3s 3p 4s 3d |
| Reguła Hunda | Pojedynczo przed parowaniem |
| Reguła Pauliego | 2 e⁻ w orbitalu, przeciwne spiny |
| Geometria CH₄ | tetraedryczna |
| Geometria H₂O | kątowa |
| Geometria NH₃ | piramidalna |
| Geometria CO₂ | liniowa |
| Hybrydyzacja CH₄ | sp³ |
| Hybrydyzacja C₂H₄ | sp² |
| Hybrydyzacja C₂H₂ | sp |
| Energia aktywacji | Min. energia reakcji |
| Katalizator | Obniża Ea, nie zmienia K |
| Reguła van't Hoffa | +10°C → 2–4× szybciej |
| Le Chatelier | Układ przeciwdziała zmianom |
| SEM ogniwa | E°(katoda) − E°(anoda) |
| E° Zn²⁺/Zn | −0,76 V |
| E° Cu²⁺/Cu | +0,34 V |
| E° Ag⁺/Ag | +0,80 V |

---

## 9. TEST KOŃCOWY (L013)

1. Zapisz konfigurację elektronową dla C, O, Na, Ar.
2. Określ geometrię: CH₄, H₂O, NH₃.
3. Określ hybrydyzację: CH₄, C₂H₄.
4. Wymień 3 czynniki szybkości reakcji.
5. Zbilansuj: MnO₄⁻ + Fe²⁺ + H⁺ → …
6. Oblicz SEM ogniwa Zn/Cu.
7. Co to reguła Le Chateliera?
8. (extra) Dlaczego 4s przed 3d?
9. (extra) Co to energia aktywacji?

---

## 10. CHECKLISTA

- [ ] Konfiguracje elektronowe (do 20).
- [ ] Reguły Aufbau, Hunda, Pauliego.
- [ ] VSEPR — geometrie.
- [ ] Hybrydyzacja (sp, sp², sp³).
- [ ] Redoks zaawansowany (metoda jonowo-elektronowa).
- [ ] Stechiometria z wydajnością.
- [ ] Kinetyka (czynniki).
- [ ] Równowaga (K, Le Chatelier).
- [ ] Elektrochemia (SEM).

---

## 11. SŁOWNIK

| Pojęcie | Definicja |
|---------|-----------|
| Konfiguracja elektronowa | Zapis rozmieszczenia elektronów |
| Orbital | Obszar przestrzeni, gdzie prawdopodobieństwo znalezienia e⁻ jest największe |
| Hybrydyzacja | Mieszanie orbitali atomowych |
| VSEPR | Teoria odpychania par elektronowych |
| Energia aktywacji | Minimalna energia reakcji |
| Katalizator | Substancja obniżająca Ea |
| Stała równowagi K | Iloraz stężeń produktów i substratów |
| Reguła Le Chateliera | Układ przeciwdziała zmianom |
| Potencjał standardowy | Miara zdolności do przyjmowania e⁻ |
| SEM | Siła elektromotoryczna ogniwa |

---

## 12. CO DALEJ?

**KONIEC pakietu chemii PODSTAWA PLUS.**

Możliwe kierunki:
- Rozbudowa L013 (więcej tematów).
- Przygotowanie HTML.
- Przygotowanie do konkursu chemicznego.
- Dalsza nauka w liceum.

---

## 13. STATUS LEKCJI

- Wersja 1.0 (2026-09-12) — pełny MASTER.
- Napisana od zera jako brakująca lekcja.
- Zawiera: konfiguracje elektronowe, VSEPR, hybrydyzacja, redoks zaawansowany, stechiometria z wydajnością, kinetyka, równowaga, elektrochemia.
- Nadal wymaga: weryfikacji merytorycznej przed publikacją.

---

**Koniec L013 MASTER v1.0**




---

## UZUPEŁNIENIE — kiedy robić L013 (doklejone)

L013 **nie** wchodzi między L001 a L002 w toku klasy 8.

Rób L013 dopiero gdy:
- L001 (wzory, wartościowość, równania) idzie bez ściągi,
- L002–L005 (tlenki → sole) nie sypią się na nazwach,
- chcesz VSEPR / hybrydyzację / wydajność / kinetykę jako **extra**, nie zamiast E8.

Jeśli L001 jest słabe — wróć do L001, nie tu.

### Status
doklej 2026-09-12.



---

## UZUPEŁNIENIE wizualne L013 (audyt plus.md — doklejone)

### Orbitale (hasło extra)

s — 1 orbital, 2 e⁻; p — 3 orbitale, 6 e⁻. Rysunki 3D — poza MD (SVG później).

### VSEPR (hasła)

2 pary — liniowy 180°; 3 — trygonalny 120°; 4 — tetraedr ~109,5°. Pary wolne ściskają kąt (NH₃, H₂O).

### Ogniwo paliwowe (extra)

H₂ utleniany, O₂ redukowany → H₂O + prąd. Nie mylić ze spalaniem CH₄ na E8.



---

## DOPRECYZOWANIA I CIEKAWOSTKI L013 (przegląd mer. — doklejone)

Hasła extra (nie E8): Hund (orbitale pojedynczo, potem pary); Pauli (max 2 e⁻, spiny przeciwne); VSEPR; hybrydyzacja sp/sp²/sp³; kinetyka; K i Le Chatelier; SEM / E°.  
Nie zastępują L001–L012.


## MATERIAŁ Z HTML extra L013

Plik: `CHEMIA_L013_ZAAWANSOWANA_extra.html`
MnO₄⁻+8H⁺+5Fe²⁺→Mn²⁺+4H₂O+5Fe³⁺; SEM Daniell 1,10 V.

</details>

<!-- ==================== END L013 ==================== -->


---

## STATUS PAKIETU v2.0 (2026-09-12)

**Zawartość:**
- SYSTEM_IX (KURS MASTER) — v1.0
- L001 (fundamenty) — MASTER v3.1
- L002 (tlenki), L003 (wodorotlenki) — MASTER v2.0
- L004–L012 — MASTER v1.0 + uzupełnienia egzaminacyjne
- L013 (zaawansowana) — MASTER v1.0 · w pliku po L012

**Kolejność w pliku:** SYSTEM_IX → L001 → L002 → L003 → L004 → … → L012 → L013.

**Zasada rozbudowy:** nie usuwać treści; dodawać, wyjaśniać i rozszerzać. Trudność przez drabinkę: rozpoznanie → … → problem otwarty.

**HTML lekcji:** na razie brak (jeden indeks roku). Backup MD: `_backup_md_2026-09-12/` oraz `_backup_md_2026-09-12_przed_ulepszeniami/`.

---

**KONIEC PAKIETU CHEMIA: PODSTAWA PLUS v2.0**
(SYSTEM_IX + L001 v3.1 + L002–L003 v2.0 + L004–L012 v1.0 + L013 v1.0)

### Nota merytoryczna (przegląd 2026-09-12)

<!-- FIX: klucz odpowiedzi L006 — nie „2 CH₄ + 2 O₂”, tylko CH₄ + 2 O₂ → CO₂ + 2 H₂O -->
Przejrzane reakcje rdzeniowe (spalanie CH₄/C₂H₆, tlenki + woda, zobojętnianie, strącanie, 2 H₂O₂ → 2 H₂O + O₂, FeS₂→H₂SO₄ 1:2, nadmiar 4 g H₂ + 4 g O₂).  
Błędne wzory w **klinikach** (CaOH₂, FeO₃, H₂ + O₂ → H₂O₂, CuOH) zostają jako antyprzykłady.  
Nie rościmy audytu CKE zadanie-po-zadaniu w L004–L012.

### Nota po audycie zapisu chemicznego (2026-09-12)

Plik roboczy **już zawiera indeksy Unicode** (Ca(OH)₂, Al₂O₃, H₂SO₄…). Diagnoza „CaOH / AlO wszędzie” dotyczyła głównie **okaleczonego eksportu**, nie tego MASTER. W MD zostawiono przykłady błędów w klinikach (CaOH₂) obok poprawnych wzorów. L004–L012 to pełne MASTER v1.0, nie puste zapowiedzi. Warstwy `:::layer` i HTML — etap później, żeby nie utrwalać wzorów przed ustaleniem konwencji (konwencja jest powyżej).
