# WARSTWA B — MASTER / PROBLEM / THINK (genetyka)

Dodatek do L010–L021. **Nie zastępuje** lekcji — pogłębia.

---

## B1. Ekspresja genu (amb — most)

```
DNA (gen) → TRANSKRYPCJA → RNA (mRNA) → TRANSLAACJA → białko
→ funkcja → FENOTYP (+ środowisko, rozwój)
```

**Po co?** Mutacja w DNA nie zawsze zmienia białko (kod zdegenerowany).  
**THINK:** Dlaczego zamiana jednej zasady może być „cicha"?

---

## B2. Od mutacji do cechy

```
DNA → mutacja? → nie (neutralna) / tak → zmiana RNA/białka?
→ nie (często bez fenotypu) / tak → zmiana funkcji → możliwa zmiana fenotypu
```

---

## B3. Nondysjunkcja

```
błąd mejozy → gameta n+1 lub n−1 → zapłodnienie z n
→ zygota 2n+1 lub 2n−1 → aneuploidia
```

---

## B4. Mejoza I vs II

| | Mejoza I | Mejoza II |
|---|----------|-----------|
| Co się rozchodzi? | homologi | chromatydy |
| Crossing-over | tak | nie |
| Redukcja | tak | utrzymanie |

---

## B5. Rodowody — algorytm

1. Cecha u obu płci?
2. Zdrowi rodzice → chore dziecko? (sugestia recesywności)
3. Przeskoki pokoleń?
4. Ojciec → syn? (przy X-linked recesywnym zwykle nie)
5. Wykluczaj modele.

---

## B6. Prawdopodobieństwo ≠ przeznaczenie

- 25% przy każdym dziecku.
- Iloczyn: P(A i B) = P₁ × P₂.
- Suma: P(A lub B) = P₁ + P₂.

---

## B7. Bank PROBLEM / THINK

1. Rodzice dominujący, dziecko recesywne → genotypy?
2. Fenotyp dominujący w 3 pokoleniach → czy AA?
3. ABO: matka 0, dziecko AB?
4. Krzyżówka testowa — po co?
5. Mutacja w genie enzymu — kiedy fenotyp widać?
6. Nondysjunkcja → 2n±1?

---

## B8. Obserwacja vs model

| Typ | Przykład |
|-----|----------|
| Obserwacja | izolacja DNA, preparat mitozy |
| Model | Punnett, schemat mejozy, rodowód |

---

## B9. Klinika 2.0 — szablon

```
Błąd → Znajdź → Popraw → Reguła → Dlaczego → Podobne → Pułapka
```

---

## B10. L021 — Test A/B/C

**A (E8):** pary zasad · 46 · mitoza≠mejoza · allel/homo/hetero · Punnett 3:1 · XX/XY · ABO · mutacja/mutagen.

**B (MASTER):** Punnett z luką · krótki rodowód · 25% ≠ gwarancja.

**C (AMBITNY):** rodowód · krzyżówka z nieznanym genotypem · ABO · mutacja → fenotyp · nondysjunkcja.

---

## Grafiki o wysokiej wartości (kolejność)

1. DNA (nukleotyd → helisa)
2. Upakowanie → chromosom
3. Replikacja
4. Mitoza vs mejoza
5. DNA → gen → białko → cecha
6. Punnett
7. Rodowód
8. Mutacja → fenotyp
9. Nondysjunkcja

<!-- ==================== END WARSTWA_B_MASTER ==================== -->

<!-- ==================== BEGIN WARSTWA_C_GRAFIKA ==================== -->

# WARSTWA C — GRAFIKA O WYSOKIEJ WARTOŚCI

**Zasada:** schemat własny > `assets/` lokalne > zewnętrzne tylko gdy konieczne.  
Te plansze **zastępują** część tekstu — nie ozdabiają.

---

## C1. DNA — nukleotyd → nić → helisa

```
NUKLEOTYD (cukier + fosforan + zasada) → NIĆ DNA → PODWÓJNA HELISA
Pary: A–T (2 wiązania) · C–G (3 wiązania)
Nici antyrównoległe (5'→3' i 3'→5')
```

## C2. Upakowanie DNA → chromosom

```
DNA → (+ histony) chromatyna → CHROMOSOM (widoczny przy podziale)
Po replikacji: 2 chromatydy + 1 centromer
```

## C3. Replikacja (semikonserwatywna)

```
matryca 5'─ A T G C ─3'
nowa    3'─ T A C G ─5'
Wynik: 2 cząsteczki, każda = stara + nowa
```

## C4. Mitoza vs mejoza

```
MITOZA                      MEJOZA
1 podział                   2 podziały
2 komórki                   4 produkty
liczba stała                redukcja 2n → n
identyczne                  zróżnicowane
```

## C5. DNA → gen → białko → cecha

```
DNA → GEN → RNA → BIAŁKO → funkcja → FENOTYP
(+ środowisko + rozwój)
```

## C6. Kwadrat Punnetta

```
        A     a
   A   AA    Aa
   a   Aa    aa
Genotypy 1:2:1 · Fenotyp 3:1
```

## C7. Rodowód (symbole)

```
□ mężczyzna zdrowy     ■ mężczyzna chory
○ kobieta zdrowa       ● kobieta chora
═ partnerzy            │ potomstwo
```

## C8. Mutacja → fenotyp

```
DNA → mutacja → brak wpływu (neutralna)
              → zmiana RNA/białka → funkcja OK (bez fenotypu)
                                   → funkcja zaburzona (możliwy fenotyp)
```

## C9. Nondysjunkcja

```
mejoza → błąd → gameta n+1 lub n−1 → zygota 2n+1 lub 2n−1 → aneuploidia
```

---

## C — checklista wdrożenia w HTML

| # | Plansza | ASCII w MD | SVG opcjonalny | Lekcja |
|---|---------|------------|----------------|--------|
| 1 | DNA | tak | dna-helisa.svg | L011 |
| 2 | Upakowanie | tak | chromosom.svg | L012 |
| 3 | Replikacja | tak | replikacja.svg | L013 |
| 4 | Mitoza/mejoza | tak | mitoza-mejoza.svg | L014–L015 |
| 5 | Gen→cecha | tak | gen-do-cechy.svg | L011/L020 |
| 6 | Punnett | tak | punett.svg | L017 |
| 7 | Rodowód | tak | rodowod.svg | L018 |
| 8 | Mutacja | tak | mutacje.svg | L020 |
| 9 | Nondysjunkcja | tak | nondysjunkcja.svg | L015/L020 |

<!-- ==================== END WARSTWA_C_GRAFIKA ==================== -->

<!-- ==================== BEGIN SVG_ASSETS ==================== -->

# SVG — pliki do `assets/`

**Zasada:** każdy plik samodzielny, `<svg xmlns=...>`, viewBox, kolory inline, brak zależności zewnętrznych.

## 1. `L011/assets/dna-helisa.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" font-family="Arial, sans-serif">
  <rect width="320" height="200" fill="#fafafa" stroke="#ccc"/>
  <text x="160" y="20" text-anchor="middle" font-size="13" font-weight="bold">DNA — podwójna helisa</text>
  <path d="M40,60 Q160,30 280,60" fill="none" stroke="#1e88e5" stroke-width="2"/>
  <path d="M40,140 Q160,170 280,140" fill="none" stroke="#43a047" stroke-width="2"/>
  <line x1="70" y1="52" x2="70" y2="148" stroke="#c62828" stroke-width="1.5"/>
  <text x="76" y="102" font-size="11" fill="#c62828">A–T</text>
  <line x1="140" y1="42" x2="140" y2="158" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="146" y="102" font-size="11" fill="#6a1b9a">C–G</text>
  <line x1="210" y1="42" x2="210" y2="158" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="216" y="102" font-size="11" fill="#6a1b9a">C–G</text>
  <line x1="270" y1="52" x2="270" y2="148" stroke="#c62828" stroke-width="1.5"/>
  <text x="240" y="180" font-size="11" fill="#333">A–T: 2 wiązania · C–G: 3 wiązania</text>
</svg>
```

## 2. `L012/assets/chromosom.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240" font-family="Arial, sans-serif">
  <rect width="300" height="240" fill="#fafafa" stroke="#ccc"/>
  <text x="150" y="20" text-anchor="middle" font-size="13" font-weight="bold">Chromosom po replikacji</text>
  <path d="M100,40 Q80,90 100,120 L100,200 Q80,200 80,180 L80,60 Q80,40 100,40 Z" fill="#bbdefb" stroke="#1e88e5" stroke-width="1.5"/>
  <path d="M200,40 Q220,90 200,120 L200,200 Q220,200 220,180 L220,60 Q220,40 200,40 Z" fill="#bbdefb" stroke="#1e88e5" stroke-width="1.5"/>
  <circle cx="150" cy="120" r="8" fill="#c62828"/>
  <text x="150" y="145" text-anchor="middle" font-size="11" fill="#c62828">centromer</text>
  <text x="60" y="220" font-size="11" fill="#1e88e5">chromatyda</text>
  <text x="220" y="220" font-size="11" fill="#1e88e5">chromatyda</text>
</svg>
```

## 3. `L013/assets/replikacja.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220" font-family="Arial, sans-serif">
  <rect width="360" height="220" fill="#fafafa" stroke="#ccc"/>
  <text x="180" y="20" text-anchor="middle" font-size="13" font-weight="bold">Replikacja semikonserwatywna</text>
  <text x="20" y="70" font-size="12">matryca:</text>
  <text x="90" y="70" font-size="13" font-family="monospace" fill="#1e88e5">5'─A T G C─3'</text>
  <text x="20" y="100" font-size="12">nowa:</text>
  <text x="90" y="100" font-size="13" font-family="monospace" fill="#43a047">3'─T A C G─5'</text>
  <text x="20" y="150" font-size="12">wynik: dwie cząsteczki, każda = stara + nowa nić</text>
  <text x="20" y="175" font-size="12" fill="#333">A–T, C–G — komplementarność</text>
</svg>
```

## 4. `L014_L015/assets/mitoza-mejoza.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 260" font-family="Arial, sans-serif">
  <rect width="460" height="260" fill="#fafafa" stroke="#ccc"/>
  <text x="230" y="20" text-anchor="middle" font-size="13" font-weight="bold">Mitoza vs mejoza</text>
  <text x="100" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e88e5">MITOZA</text>
  <circle cx="100" cy="90" r="18" fill="#bbdefb" stroke="#1e88e5"/>
  <text x="100" y="94" text-anchor="middle" font-size="10">2n</text>
  <circle cx="70" cy="170" r="18" fill="#bbdefb" stroke="#1e88e5"/>
  <circle cx="130" cy="170" r="18" fill="#bbdefb" stroke="#1e88e5"/>
  <text x="100" y="215" text-anchor="middle" font-size="11">2 komórki · ta sama liczba zestawów</text>
  <text x="360" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="#6a1b9a">MEJOZA</text>
  <circle cx="360" cy="90" r="18" fill="#e1bee7" stroke="#6a1b9a"/>
  <circle cx="300" cy="180" r="14" fill="#e1bee7" stroke="#6a1b9a"/>
  <circle cx="335" cy="180" r="14" fill="#e1bee7" stroke="#6a1b9a"/>
  <circle cx="370" cy="180" r="14" fill="#e1bee7" stroke="#6a1b9a"/>
  <circle cx="405" cy="180" r="14" fill="#e1bee7" stroke="#6a1b9a"/>
  <text x="360" y="215" text-anchor="middle" font-size="11">4 komórki haploidalne</text>
</svg>
```

## 5. `L011_L020/assets/gen-do-cechy.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" font-family="Arial, sans-serif">
  <rect width="420" height="140" fill="#fafafa" stroke="#ccc"/>
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold">Od DNA do cechy</text>
  <text x="20" y="70" font-size="13" fill="#1e88e5">DNA</text>
  <text x="70" y="70" font-size="13">→</text>
  <text x="90" y="70" font-size="13" fill="#6a1b9a">GEN</text>
  <text x="140" y="70" font-size="13">→</text>
  <text x="160" y="70" font-size="13" fill="#43a047">RNA</text>
  <text x="200" y="70" font-size="13">→</text>
  <text x="220" y="70" font-size="13" fill="#c62828">BIAŁKO</text>
  <text x="290" y="70" font-size="13">→</text>
  <text x="310" y="70" font-size="13" fill="#333">FENOTYP</text>
  <text x="210" y="110" text-anchor="middle" font-size="11" fill="#555">+ środowisko i rozwój</text>
</svg>
```

## 6. `L017/assets/punett.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" font-family="Arial, sans-serif">
  <rect width="260" height="260" fill="#fafafa" stroke="#ccc"/>
  <text x="130" y="20" text-anchor="middle" font-size="13" font-weight="bold">Krzyżówka Aa × Aa</text>
  <text x="120" y="60" text-anchor="middle" font-size="14" fill="#c62828">A</text>
  <text x="180" y="60" text-anchor="middle" font-size="14" fill="#c62828">a</text>
  <text x="60" y="110" text-anchor="middle" font-size="14" fill="#c62828">A</text>
  <text x="60" y="170" text-anchor="middle" font-size="14" fill="#c62828">a</text>
  <rect x="90" y="80" width="60" height="60" fill="#e8f5e9" stroke="#2e7d32"/>
  <text x="120" y="115" text-anchor="middle" font-size="13">AA</text>
  <rect x="150" y="80" width="60" height="60" fill="#fff3e0" stroke="#ef6c00"/>
  <text x="180" y="115" text-anchor="middle" font-size="13">Aa</text>
  <rect x="90" y="140" width="60" height="60" fill="#fff3e0" stroke="#ef6c00"/>
  <text x="120" y="175" text-anchor="middle" font-size="13">Aa</text>
  <rect x="150" y="140" width="60" height="60" fill="#ffebee" stroke="#c62828"/>
  <text x="180" y="175" text-anchor="middle" font-size="13">aa</text>
  <text x="130" y="230" text-anchor="middle" font-size="12">Genotyp 1:2:1 · Fenotyp 3:1</text>
</svg>
```

## 7. `L018/assets/rodowod.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260" font-family="Arial, sans-serif">
  <rect width="360" height="260" fill="#fafafa" stroke="#ccc"/>
  <text x="180" y="20" text-anchor="middle" font-size="13" font-weight="bold">Rodowód — symbole</text>
  <rect x="30" y="50" width="30" height="30" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="70" font-size="11">mężczyzna zdrowy</text>
  <rect x="30" y="100" width="30" height="30" fill="#c62828" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="120" font-size="11">mężczyzna chory</text>
  <circle cx="45" cy="170" r="16" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="175" font-size="11">kobieta zdrowa</text>
  <circle cx="45" cy="220" r="16" fill="#c62828" stroke="#333" stroke-width="1.5"/>
  <text x="90" y="225" font-size="11">kobieta chora</text>
</svg>
```

## 8. `L020/assets/mutacje.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220" font-family="Arial, sans-serif">
  <rect width="420" height="220" fill="#fafafa" stroke="#ccc"/>
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold">Mutacja → fenotyp</text>
  <text x="30" y="70" font-size="13" fill="#1e88e5">DNA</text>
  <text x="80" y="70" font-size="13">→</text>
  <text x="100" y="70" font-size="13" fill="#c62828">mutacja</text>
  <text x="180" y="70" font-size="13">→</text>
  <text x="200" y="70" font-size="13">zmiana sekwencji</text>
  <rect x="20" y="140" width="120" height="50" fill="#e8f5e9" stroke="#2e7d32"/>
  <text x="80" y="160" text-anchor="middle" font-size="11">brak wpływu</text>
  <text x="80" y="178" text-anchor="middle" font-size="11">(neutralna)</text>
  <rect x="280" y="140" width="120" height="50" fill="#ffebee" stroke="#c62828"/>
  <text x="340" y="160" text-anchor="middle" font-size="11">zmiana białka</text>
  <text x="340" y="178" text-anchor="middle" font-size="11">→ możliwa choroba</text>
</svg>
```

## 9. `L015_L020/assets/nondysjunkcja.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 200" font-family="Arial, sans-serif">
  <rect width="420" height="200" fill="#fafafa" stroke="#ccc"/>
  <text x="210" y="20" text-anchor="middle" font-size="13" font-weight="bold">Nondysjunkcja → aneuploidia</text>
  <text x="30" y="60" font-size="12">mejoza → błąd → nondysjunkcja</text>
  <text x="30" y="100" font-size="12">gameta: n+1 lub n−1</text>
  <text x="30" y="140" font-size="12">+ gameta n → zygota: 2n+1 lub 2n−1</text>
  <text x="30" y="180" font-size="12">→ aneuploidia (np. trisomia 21)</text>
</svg>
```

<!-- ==================== END SVG_ASSETS ==================== -->

<!-- ==================== BEGIN BACKLOG_SWIADOMY ==================== -->

# BACKLOG — świadomie odłożone

**Status:** zapisane, nierozwijane na razie.

## 1. Ekspresja genu — pełna lekcja
- [ ] Transkrypcja (matryca, mRNA)
- [ ] Translacja (kodony, tRNA)
- [ ] Cechy kodu genetycznego
- [ ] Dlaczego mutacja może być „cicha"
- [ ] Regulacja ekspresji / epigenetyka

## 2. Hardy–Weinberg
- [ ] Założenia
- [ ] p + q = 1, p² + 2pq + q² = 1
- [ ] Częstość alleli vs genotypów
- [ ] Kiedy model nie działa

## 3. Mapowanie genów
- [ ] Frekwencja rekombinacji
- [ ] cM
- [ ] Mapowanie trzech punktów
- [ ] Sprzężenie autosomalne

## 4. Bank rodowodów konkursowych
- [ ] 20–30 rodowodów z kluczami
- [ ] Modele: AD, AR, XR, XD
- [ ] Pułapki: niepełna penetracja

## 5. Pliki SVG w `assets/`
- [ ] Wszystkie pliki SVG (patrz SVG_ASSETS)

## 6. Inne haki
- [ ] Krzyżówki dwugenowe
- [ ] Dominacja niepełna, allele wielokrotne poza ABO
- [ ] Y-linked
- [ ] Mutacje: frameshift, nonsense, missense
- [ ] Protoonkogen → onkogen
- [ ] Telomery
- [ ] mtDNA

**Ostatnia aktualizacja:** 2026-09-12

<!-- ==================== END BACKLOG_SWIADOMY ==================== -->

<!-- ==================== BEGIN WARSTWA_WIZUALNA ==================== -->

# WARSTWA WIZUALNA

**Priorytet:**
1. Schemat własny (ASCII / map-box / inline SVG).
2. Plik lokalny `assets/`.
3. Zewnętrzny tylko gdy konieczne.

## Znaczniki BIO

```
[BIO: CARD: OK|TRAP|HINT|AMB|REM|STOP]
[BIO: DIAGRAM type=CELL|DNA|BONE|SYSTEM|CYCLE|MAP|TREE]
[BIO: HOTSPOT id=… label=…]
[BIO: LABEL]…[/BIO: LABEL]
[BIO: SVG src=assets/…]
[BIO: IMG src=assets/… alt="…" caption="…"]
[BIO: IMG-REMOTE url=… save=assets/…]
```

## Struktura folderów

```
repo/
├── biologia/
│ ├── L011_DNA/
│ │ ├── L011.md
│ │ └── assets/dna-helisa.svg
│ ├── L012_chromosom/
│ └── ...
└── shared/css/bio.css
```

## Fallback

1. Inline SVG.
2. Lokalny plik.
3. ASCII / map-box.

## Przykład użycia

```markdown
[BIO: DIAGRAM type=DNA variant=HELIX]
[BIO: SVG src=assets/dna-helisa.svg]
[BIO: HOTSPOT id=pair label="Para zasad"]A–T, C–G.[/BIO: HOTSPOT]
[/BIO: SVG]
[/BIO: DIAGRAM]
```

<!-- ==================== END WARSTWA_WIZUALNA ==================== -->

<!-- ==================== BEGIN STATUS ==================== -->

# STATUS v3.9

## Źródła scalone (2026-09-12)

| Źródło | Co wniesiono |
|--------|--------------|
| v2.3c | Treści L010–L021, warstwy |
| v3.3 | L030–L044, SVG, WARSTWA_B/C |
| v3.4 | Warstwa dydaktyczna (6A–6C) w L011, L013, L015, L017, L020 |
| v3.5 | Pełny pakiet scalony |
| v3.6 | 80/20 per lekcja, mnemotechniki, Klinika 2.0, drabinka trudności, sekcje „Jak się uczyć" itd. |
| **v3.7** | **Pełna warstwa dydaktyczna do L001–L003, L014, L016, L030–L044, L050, L090** — drabinka trudności, Klinika 2.0, „Jak się uczyć", „Połączenia międzyprzedmiotowe", „Zadania z życia codziennego" w każdej lekcji |

## Zasada no-content-loss

1. Żadnej treści nie usunięto.
2. Plik wynikowy większy niż każdy źródłowy.
3. Duplikaty SYSTEM / SYSTEM_GENETYKA zachowane świadomie.
4. v3.7 dodaje pełną warstwę dydaktyczną do wszystkich wcześniej słabszych lekcji.

## Co zawiera pakiet

- SYSTEM (filozofia, schemat, 80/20, mnemotechniki, słownik, indeks)
- L001–L003 (pełne warstwy dydaktyczne)
- L010–L021 (genetyka — pełne)
- L030–L044 (ewolucja + ekologia — pełne, rozbudowane w v3.7)
- L050, L090 (rozbudowane)
- WARSTWA_B_MASTER (B1–B10)
- WARSTWA_C_GRAFIKA (C1–C9)
- SVG_ASSETS (9 plików)
- BACKLOG_SWIADOMY
- WARSTWA_WIZUALNA
- STATUS

## Kolejne kroki (opcjonalne)

- Dopisać pełne wersje L050 i L090 (obecnie rozszerzone szkice).
- Przygotować HTML (puste pola testów).
- Dopisać więcej przykładów do L030–L044.

---

**KONIEC PAKIETU BIOLOGIA: PODSTAWA PLUS v3.9 FULL**  
**Bez obcinania treści.** Wszystkie warstwy zachowane i scalone.  
**v3.7 dodaje:** pełną warstwę dydaktyczną do L001–L003, L014, L016, L030–L044, L050, L090.
**v3.9:** L050 i L090 podniesione do pełnego MASTER v4.0 (z poprawione.md) — mapa lekcji, mosty, Klinika 2.0 rozbudowana, drabinka, zadania z życia, STATUS.

<!-- ==================== END STATUS ==================== -->

---

## STATUS po scaleniu z poprawione.md (2026-09-12)

- Podmieniono na wersje MASTER z poprawione.md: L021, L030, L031, L032, L040, L041, L042, L043, L044, L050, L090.
- Backup: `_backup_md_2026-09-12/`.
- L001–L020 (poza L021) bez zmian, o ile nie było bloku w poprawione.
