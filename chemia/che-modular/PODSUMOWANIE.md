# CHE modular — podsumowanie prac

**Data:** 2026-10-08  
**Źródła wejściowe:** monolit `CHE_lab_wizualizacje_*.html` (~3,5 MB), lekcje telefon (~3 MB każda).

---

## 1. Po co to wszystko

| Problem | Cel |
|---------|-----|
| Jedna lekcja waży tyle co cały lab | **Pack lekcji** tylko z potrzebnymi danymi, GFX i widokami |
| Kopiowanie silnika do każdej lekcji | **Jeden silnik**, lekcje jako kontrakt (manifest / MD) |
| Layout i TOC kopiowane w HTML | **Cegiełki** (`LessonShell`) — zmiana w jednym miejscu = wszystkie lekcje zintegrowane |
| Projektowanie „od HTML” | Najpierw **MD** (treść + makra), potem parity z silnikiem, na końcu HTML |
| Nowe przedmioty / lekcje / efekty | **Rejestr** (subjects, domains, vessels, effects, tables) zamiast „wszystko albo nic” |

**Dokąd dążymy**

1. Autor pisze **MD** (szkielet + `$fiszka`, `$tabela_bledy`, opcjonalnie `$gfx`).  
2. **Parity** mówi, czego brak w silniku (tablice, reakcje, widoki).  
3. Silnik uzupełniamy albo MD ograniczamy do tego, co istnieje.  
4. **HTML standalone** (pack offline) albo **lekcja w labie** — ten sam `meta.json` i te same klocki layoutu.  
5. Lab zostaje pełną bazą; packi chudną (cel orientacyjny: **~1–1,4 MB** na lekcję chemii, dziś N01 build z MD ~27 KB szkieletu + pack silnika ~2 MB i spadają).

---

## 2. Co zrobione (warstwy)

### A. Rozbiór monolitu i packer

- 78 modułów z HTML labu → `modules/` + `catalog.json`
- `_anon_001` (1,2 MB) → **279 sekcji** z tagami (`sections/anon001/`)
- `tools/pack_lesson.py` — wybór modułów, filtr GFX (naczynia/efekty/sceny/rx), filtr VIEW, sekcje anon001
- Packi przykładowe: N01 ~**1,98 MB**, N02 ~**1,74 MB**, FIZ01 ~**1,64 MB** (vs monolit 3,5 MB)

### B. Rejestr silnika (wieloprzedmiotowy)

`engine/registry/`:

| Plik | Rola |
|------|------|
| `subjects.json` | chemia, fizyka (+ plan bio/mat/geo) |
| `domains.json` | oxides, acids, salts, electrostatics… |
| `lessons.json` | N01–N04, FIZ01: domains, visuals, vesselGroups… |
| `assets/vessels.json` | grupy: chem.glassware, phys.electro… + opisy `design` |
| `assets/effects.json` | chem.reaction, common.ui… |
| `assets/scenes.json` | carbonate, titration… |
| `tables/index.json` | kontrakt tablic fizykochemicznych |
| `layout/shell.json` | header + TOC hamburger |

Resolver: `tools/engine_registry.py` — lekcja → allow-listy GFX i tagi sekcji.

### C. Layout wspólny (cegiełki)

- `engine/src/layout/lesson-shell.css` / `.js`
- Pływający **hamburger TOC** (3 kreski, panel, aktywna sekcja, Esc)
- Header: kod, tytuł, badge przedmiotu
- Warianty koloru: chemia / fizyka / default
- **Zintegrowane lekcje** montują `CHE.LessonShell` z silnika → jedna zmiana TOC/header dla wszystkich

### D. Przepływ MD → silnik → HTML

```
MD (projekt) → parity → ujednolicenie DATA → HTML pack / lab
```

- `engine/docs/flow/SILNIK_MD_HTML.md`
- `tools/md_parity.py` — MD ↔ rejestr
- `tools/md_build_lesson.py` — MD → `build/lesson.html` + `meta.json`
- Packer wstrzykuje shell do packów

### E. Szablon lekcji chemii + makra

| Plik | Opis |
|------|------|
| `lessons-md/_TEMPLATE_CHEMIA/LEKCJA.md` | Pełny szkielet E8 |
| `…/LEKCJA_MINI_BEZ_WIZUALI.md` | Mini bez modeli |
| `…/MAKRA.md` | Skrót makr |
| `…/MAKRA_ROZWINIECIE.md` | Zachowanie domyślne i warianty |
| `lessons-md/N01/LEKCJA.md` | **Test:** tlenki na szablonie |

**Makra działające w builderze**

| Makro | Zachowanie |
|-------|------------|
| `$fiszki_panel title="…"` | Panel widoczny; fiszki **domyślnie ukryte**; „Pokaż / Ukryj fiszki” |
| `$fiszka` / `$flip` | Karta; klik = odwrócenie |
| `$fiszka_talia` | Siatka od razu widoczna |
| `$tabela_bledy` | Tylko treść `temat \| ok \| zła`; zieleń/czerwień z CSS |
| `$karta typ=…` | Ramka (exam, core, error…) |
| `$callout typ=bhp\|info\|warn` | Pasek ostrzeżenia |
| `$gfx view=… caption="…"` | Przycisk modelu (gdy planVisuals) |

N01 po buildzie: parity **10/10**, HTML ~27 KB ze shellem i makrami.

---

## 3. Czego szukamy / reguły na przyszłość

1. **MD = intencja i treść** — nie style, nie pełny dump HTML labu.  
2. **Rejestr = prawda o zależnościach** (co lekcja może obiecać).  
3. **Silnik = zachowanie** (chemia, GFX, layout).  
4. Nowa lekcja = wpis w `lessons.json` + MD + ewentualnie nowe id w vessels/effects/tables.  
5. Nowe naczynie/efekt = grupa w rejestrze + `design` (opis pod autorów MD).  
6. Wizuale **opcjonalne** (`planVisuals: false` / puste `visuals`).  
7. Fiszki: autor pisze treść; panel/ukrywanie/flip = klocek.  
8. Tabele błędów: autor pisze komórki; kolory = klocek.

---

## 4. Co dalej (priorytet)

| # | Zadanie | Po co |
|---|---------|--------|
| 1 | `pick(REACTIONS/OXIDES)` w packu wg manifestu | Kolejne −100…300 KB w packu silnika |
| 2 | Węższe tagi „core” w anon001 | Mniej przypadkowych sekcji w packu |
| 3 | `$fiszki_panel open` / `mode=deck` | Talia „strona po stronie” |
| 4 | Packer zawsze z `meta.json` z MD | Jedna ścieżka builda |
| 5 | Wpięcie `lesson-shell` do monolitu labu | Zintegrowane N01–N04 z tym samym TOC |
| 6 | Szablony MD dla fizyki (FIZ01) | Ten sam przepływ, inny variant |
| 7 | Test regresji: każdy `data-rx` / `$gfx` istnieje w silniku | Jakość |

---

## 5. Mapa katalogów (orientacyjna)

```
che-modular/
  PODSUMOWANIE.md          ← ten plik
  AUDYT_I_PLAN.md          ← historia audytu i pomiarów
  README.md                ← packer
  engine/
    registry/              ← kontrakt (przedmioty, domeny, GFX, tablice, lekcje)
    src/layout/            ← lesson-shell (CSS/JS/demo)
    docs/                  ← architektura, flow MD, layout, gfx
  lessons-md/
    _TEMPLATE_CHEMIA/      ← szablony + makra
    N01/                   ← test lekcji + build/
  tools/
    pack_lesson.py
    engine_registry.py
    md_parity.py
    md_build_lesson.py
  sections/anon001/        ← pocięty rdzeń danych
  dist/                    ← packi HTML z silnika
```

---

## 6. Jedno zdanie

**Budujemy fabrykę lekcji: MD projektuje, rejestr pilnuje spójności z silnikiem, klocki layoutu i GFX dają ten sam UX w packu offline i w labie — bez kopiowania monolitu do każdej lekcji.**
