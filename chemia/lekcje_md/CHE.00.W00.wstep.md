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


