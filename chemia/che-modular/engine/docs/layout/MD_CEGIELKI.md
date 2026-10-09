# MD → cegiełki silnika (header, TOC, sekcje)

## Zasada

**MD podaje treść i strukturę.**  
**Silnik (klocki layoutu) wie, jak to złożyć do HTML** — zewnętrznego packa i lekcji **zintegrowanej** w labie.

Gdy lekcja jest zespolona z silnikiem, ładuje `CHE.LessonShell` z labu.  
Zmiana `lesson-shell.js` / `.css` w silniku = **wszystkie** zintegrowane lekcje dostają nowy spis, header, zachowanie TOC.

```
MD:  @header / @toc / ## sekcje {#id}
        ↓  tools/md_build_lesson.py
HTML: shell + <section> + CHE.LessonShell.mount({ tocItems: [...] })
        ↓
  [standalone pack]     [lab zintegrowany — ten sam mount]
```

## Dyrektywy w MD

### `@header` … `@end`

```markdown
@header
code: N01
title: Tlenki
subject: chemia
badge: E8
@end
```

Builder → `CHE.LessonShell.mount({ code, title, subject, … })` + pasek `.che-lesson-header`.

Jeśli brak bloku — bierze frontmatter YAML (`code`, `title`, `subject`).

### `@toc` … `@end`

Jawna kolejność spisu (opcjonalnie):

```markdown
@toc
- minimum | Minimum E8
- cele | 2. Cele lekcji
- reakcje | 10. Reakcje tlenków
@end
```

Format linii: `- id | Etykieta` albo `- id` (etykieta = id).

Bez `@toc` spis powstaje z nagłówków `## … {#id}` / `section data-toc`.

### Sekcje treści

```markdown
## 2. Cele lekcji {#cele}

Akapit dla ucznia…

### GFX
```gfx
view: n01-reaktor-v01
caption: "…"
```
```

Kotwica `{#cele}` = `id="cele"` w HTML = link w hamburgerze.

### Placeholdery (krótka forma)

W treści można pisać:

| W MD | Znaczenie |
|------|-----------|
| `{{header}}` | Wstaw header shell (zwykle i tak auto) |
| `{{toc}}` | Jawny punkt montażu TOC (fab i tak fixed) |
| `{{gfx:view-id}}` | Przycisk / slot wizualizacji silnika |
| `{{caption:tekst}}` | Podpis pod grafiką |

Builder zamienia je na HTML zgodny z klockami.

## Dwa tryby HTML

| Tryb | Skąd shell | Efekt zmiany klocka |
|------|------------|---------------------|
| **Zewnętrzny (pack)** | CSS/JS **wstrzyknięte** w plik (offline) | Trzeba przebudować pack **albo** pack ładuje shell z CDN/lab path |
| **Zintegrowany (lab)** | `CHE.LessonShell` z monolitu / modułów labu | **Jedna zmiana w silniku → wszystkie lekcje** |

Dla zintegrowanych zalecane:

```html
<script>
  // shell już w labie
  CHE.LessonShell.mount(window.__LESSON_META__);
</script>
```

`__LESSON_META__` generuje builder z MD (code, title, tocItems, variant).

## Meta export (JSON obok MD)

`md_build_lesson.py` zapisuje też:

```json
{
  "code": "N01",
  "title": "Tlenki",
  "subject": "chemia",
  "layout": { "toc": "float-hamburger", "variant": "chemia" },
  "tocItems": [{ "id": "cele", "label": "2. Cele lekcji" }, …],
  "sections": [{ "id": "cele", "heading": "2. Cele lekcji", "html": "…" }]
}
```

Lab i packer czytają ten sam JSON — jedna prawda z MD.

## Masowa ulepszanie TOC / headera

1. Poprawiasz `engine/src/layout/lesson-shell.js` (np. animacja, aria, mobile).  
2. Lekcje **zintegrowane** — odświeżenie labu.  
3. Packi offline — `pack_lesson.py` / `md_build_lesson.py` ponownie wstrzykuje shell.

Treści MD **nie ruszasz**.

## Checklist autora MD

- [ ] Frontmatter: `code`, `title`, `subject`, `layout.toc`  
- [ ] Każda ważna sekcja ma `{#kotwica}`  
- [ ] Opcjonalnie `@toc` jeśli kolejność ≠ kolejność nagłówków  
- [ ] `python3 tools/md_parity.py KOD`  
- [ ] `python3 tools/md_build_lesson.py KOD` → podgląd HTML  
