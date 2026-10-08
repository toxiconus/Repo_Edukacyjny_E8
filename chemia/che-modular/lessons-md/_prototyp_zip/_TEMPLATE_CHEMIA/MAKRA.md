# Makra MD — lekcja chemii

Builder: `tools/md_build_lesson.py` (rozszerzany).  
HTML docelowo mapuje na klasy z lekcji N01 (`flashcard`, `card`, …).

## Fiszki

| Makro | Znaczenie |
|-------|-----------|
| `$fiszka "przód" \| "tył" tag=basic` | Jedna karta (front/back) |
| `$flip "przód" \| "tył"` | Alias `$fiszka` (odwracana) |
| `$fiszka_talia` … `$end` | Siatka wielu fiszek („kilka stron”) |

Tagi (jak w HTML): `basic` | `exam` | `extra` | `error` | `understand` | `warning`

Przykład:

```markdown
$fiszka "Tlenek kwasowy + woda" | "Kwas tlenowy (np. SO₃ → H₂SO₄)" tag=exam

$fiszka_talia
$fiszka "MgO" | "tlenek zasadowy" tag=basic
$fiszka "SO₂" | "tlenek kwasowy" tag=basic
$end
```

W HTML: `.flashcard` / `.flashcard-grid` (styl z lekcji lub shell).

## Karty treści

```markdown
$karta typ=understand
Wyjaśnienie „dlaczego”…
$end
```

Typy: `basic` | `core` | `exam` | `extra` | `error` | `warning` | `understand`

## Callout / BHP

```markdown
$callout typ=bhp
Nie zaglądać nad palnik…
$end
```

`info` | `warn` | `bhp`

## Wizualizacje (opcjonalne)

Włączane, gdy `planVisuals: true` lub niepusta lista `visuals:`.

```markdown
$gfx view=n01-reaktor-v01 caption="Reaktor tlenków"
$gfx scene=carbonate vessels=testTube,beaker effects=bubbles,turbidity caption="…"
```

Bez planowania wizuali: **nie używaj** `$gfx` i usuń sekcję `{#plan-wizuali}` / `planVisuals: false`.

## Tabele ↔ silnik

````markdown
$tabela id=oxide-types
```table
id: oxide-types
columns: [formula, type]
rows:
  - [CaO, zasadowy]
engine: CHE.OXIDES
status: partial
```
````

Albo sam blok ` ```table ` (jak dotąd) — parity i tak go zbiera.

## Placeholdery globalne

| Token | Podstawiane |
|-------|-------------|
| `{{title}}` | tytuł z frontmatter / @header |
| `{{code}}` | kod lekcji |
| `{{header}}` | (shell montuje sam) |
| `{{toc}}` | (hamburger z meta.tocItems) |

## Warianty szkieletu

| Wariant | Frontmatter | Sekcje |
|---------|-------------|--------|
| Pełna lekcja E8 | jak szablon | minimum → checklista + plan wizuali |
| Tylko treść + fiszki | `planVisuals: false`, `visuals: []` | bez doświadczeń GFX i bez `#plan-wizuali` |
| Mini (kartkówka) | krótki `@toc` | cele + fiszki + checklista |
| Lab-heavy | dużo `visuals` + `$gfx` | doświadczenia z modelami |

Szkielet kopiuj z `_TEMPLATE_CHEMIA/LEKCJA.md` i wyrzuć sekcje, których nie potrzebujesz — TOC w `@toc` trzymaj w sync z `{#id}`.
