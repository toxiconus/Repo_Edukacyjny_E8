# Przepływ: MD → silnik → HTML

## Po co

Projektujemy lekcję **najpierw w Markdown** (tekst, struktura, wygląd, opisy obrazów i GFX).  
Silnik i rejestr mówią, **co już mamy** (tablice, reakcje, naczynia, efekty, widoki).  
HTML powstaje na końcu jako:

1. **standalone** (jeden plik offline), albo  
2. **zintegrowany** wpis w labie (`LESSONS.registry` + source).

```
  [ MD projekt lekcji ]  ←—— audyt luk ——→  [ rejestr silnika ]
           │                                      │
           │  ujednolicenie danych / tablic       │
           ▼                                      ▼
     [ MD v2 „gotowe” ]  ──────────►  [ HTML pack / lekcja w labie ]
```

## Role plików

| Artefakt | Rola |
|----------|------|
| `lessons-md/<KOD>/LEKCJA.md` | Tekst sekcji, cele, doświadczenia, **bloki GFX**, braki |
| `lessons-md/<KOD>/DANE.md` | Tablice i reakcje: jest w silniku / brak / do dopisania |
| `lessons-md/<KOD>/GFX.md` | Które sceny, naczynia, efekty, widoki — i po co |
| `engine/registry/*` | Kontrakt: domeny, assety, tablice, lekcje |
| `engine/docs/gfx/*.md` | Słownik wizualny (co robi `bubbles`, jak wygląda `testTube`) |
| `dist/<KOD>_pack.html` | HTML samodzielny z packera |
| monolit lab | Pełna baza; lekcja wpięta przez registry + source |

## Frontmatter MD (kontrakt)

Na początku `LEKCJA.md`:

```yaml
---
code: N01
title: Tlenki
subject: chemia
status: design   # design | parity | ready | integrated
domains: [atom, oxides, stoich, reactions, colors, lab-chem]
visuals: [n01-reaktor-v01, n01-tlenki-v01, gfx-scene-carbonate]
vesselGroups: [chem.glassware, chem.heat, chem.setup]
effectGroups: [chem.phase, chem.reaction, chem.heat]
scenes: [carbonate, heating, acidMetal]
tables: [oxide-types, oxide-colors, periodic-basic]
---
```

Zgodne z `engine/registry/lessons.json` — po akceptacji projektu frontmatter **jest** źródłem do aktualizacji rejestru.

## Bloki w treści MD

### Sekcja dydaktyczna

```markdown
## 3. Reakcja tlenku zasadowego z wodą

Tekst dla ucznia…

### Doświadczenie
- **Cel:** …
- **Obserwacja:** …
- **Wniosek:** …

### GFX
```gfx
scene: carbonate
vessels: [testTube, beaker]
effects: [bubbles, liquid, turbidity]
caption: "CaCO₃ + HCl → CO₂ — burzenie, zmętnienie wody wapiennej"
view: gfx-scene-carbonate
```
```

### Tablica

```markdown
### Tablica: typy tlenków
```table
id: oxide-types
columns: [formula, type, note]
rows:
  - [CaO, zasadowy, z wodą → zasada]
  - [SO₃, kwasowy, z wodą → kwas]
  - [Al₂O₃, amfoteryczny, z kwasem i zasadą]
engine: CHE.OXIDES / CHE.DATA.OXIDES
status: partial   # ok | partial | missing
```
```

### Braki (świadome)

```markdown
### TODO silnik
- [ ] brak reakcji `pbo2Decomp` w LAB.GFX.rx
- [ ] brak barwy Mn₂O₇ w COLORS
```

## Kolejność pracy

1. **MD v0** — spis treści, cele, szkic doświadczeń, puste bloki GFX/table.  
2. **`parity` tool** — porównanie frontmatter + bloków z rejestrem i skanem silnika → `DANE.md` / raport luk.  
3. **Ujednolicenie** — dopisanie brakujących kluczy do DATA **albo** skreślenie z MD (nie obiecujemy czego nie ma).  
4. **MD v1** — docelowy tekst + opisy obrazów (`caption`, `alt`).  
5. **HTML** — pack standalone; potem opcjonalnie integracja w lab (`source` + `LESSONS.register`).

## Opisy grafik (jakość dydaktyczna)

Każdy blok GFX powinien mieć:

- **co widać** (naczynie, kolor, gaz, osad),
- **co to oznacza chemicznie/fizycznie**,
- **podpis pod ilustracją** (`caption`) do HTML,
- **id widoku** silnika, jeśli już istnieje (`view:`).

Słownik: `engine/docs/gfx/VESSELS.md`, `EFFECTS.md`, `SCENES.md`.

## Integracja z labem

Gdy MD ma `status: ready`:

1. Zaktualizuj `engine/registry/lessons.json` z frontmatter.  
2. Zbuduj / wstaw source HTML lekcji.  
3. `pack_lesson.py KOD` → standalone.  
4. W labie: ten sam `code` + `visuals` + `domains` → lekcja zintegrowana bez drugiej kopii prawdy.

## Zasada

> **MD projektuje intencję. Rejestr i silnik ograniczają obietnice. HTML realizuje to, co przeszło parity.**
