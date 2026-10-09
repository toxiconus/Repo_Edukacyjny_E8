# Wspólny layout lekcji — cegiełki silnika

## Cel

Wszystkie lekcje (chemia, fizyka, …) budujemy z **tych samych cegiełek UI**, żeby:

- wyglądały spójnie,
- dało się **masowo** zmienić header / TOC / typografię w jednym miejscu,
- przedmiot lub typ lekcji tylko **nakładał wariant** (kolor, gęstość sekcji, czy jest lab).

Opis (ten plik + frontmatter MD) → kod w `engine/src/layout/` → użycie w HTML lekcji / packerze.

## Szkielet strony lekcji

```
┌─────────────────────────────────────────────┐
│  [≡]  CHE · N01  Tlenki        [lab] [tema] │  ← che-lesson-header
├─────────────────────────────────────────────┤
│ ┌──┐                                        │
│ │≡ │  ← che-lesson-toc (hamburger, pływający│
│ └──┘     lewy górny róg; po kliknięciu panel│
│                                             │
│   <main class="che-lesson-main">            │
│     <section id="cele" data-toc="…"> …      │
│     <section id="reakcje"> …                │
│   </main>                                   │
│                                             │
│  stopka lekcji (wersja, linki)              │
└─────────────────────────────────────────────┘
```

## Cegiełki (komponenty)

| id | Plik | Opis |
|----|------|------|
| `header` | layout CSS/JS | Pasek: kod lekcji, tytuł, subject badge, opcjonalnie „Otwórz w labie” |
| `toc-float` | **hamburger TOC** | 3 kreski, panel ze spisem, aktywna sekcja przy scrollu |
| `section` | konwencja HTML | `<section id="…" data-toc="Etykieta">` |
| `cards` | wspólne klasy | `.che-card`, `.che-callout`, … (później) |
| `gfx-slot` | mostek do silnika | miejsce na `data-che-open-viz` / scenę GFX |
| `footer` | stopka | wersja layoutu, status parity |

## Warianty przedmiotu (`layout.variant`)

| variant | Subject | Akcent (CSS var) | Uwagi |
|---------|---------|------------------|--------|
| `chemia` | chemia | `--lesson-accent: #0f766e` | domyślne karty doświadczeń |
| `fizyka` | fizyka | `--lesson-accent: #7c3aed` | mniej „zlewki”, więcej modeli |
| `default` | inne | `--lesson-accent: #176b8c` | neutralny |

Wariant ustawia **tokeny**, nie osobny HTML.

## Hamburger TOC — zachowanie

1. Przycisk **stały** (`position: fixed`), lewy górny róg, pod safe-area, z-index nad treścią.  
2. Domyślnie widać tylko **3 kreski** (ikonka).  
3. Po kliknięciu: panel spisu (lista linków `#id`), focus trap lekki, Esc zamyka.  
4. Przy przewijaniu: sekcja w viewport → link `aria-current` / klasa `.is-active`.  
5. Klik w link: smooth scroll + zamknięcie panelu na mobile.  
6. Spis **generowany z DOM** (`section[data-toc]` lub `h2[id]`), żeby nie dublować listy ręcznie — albo z bloku w MD.

Źródło spisu (kolejność priorytetu):

1. `nav#che-lesson-toc-data` z linkami (jeśli autor podał),  
2. inaczej `section[id][data-toc]`,  
3. inaczej `main h2[id]`.

## Header — wspólne pola

- `code` (N01), `title`, `subject` short  
- opcjonalnie: poziom (E8), czas, status (`design` / `ready`)  
- akcje: motyw (jasny/ciemny — jeśli silnik), „W labie”

## Jak masowo zmienić layout

1. Edytujesz **tylko** `engine/src/layout/lesson-shell.css` + `lesson-shell.js`.  
2. Wszystkie lekcje ładujące shell dostają zmianę.  
3. Wariant przedmiotu = nadpisanie kilku zmiennych w `[data-lesson-subject="chemia"]`.

Nie kopiować CSS TOC do każdej lekcji.

## Mapowanie z MD

W `LEKCJA.md`:

```yaml
layout:
  variant: chemia
  toc: float-hamburger   # float-hamburger | inline-details | none
  header: standard
```

Sekcje:

```markdown
## 2. Cele {#cele}
```

albo w HTML:

```html
<section id="cele" data-toc="2. Cele lekcji">…</section>
```

## Stan vs stare lekcje N01

Stary N01 ma **inline** `<details class="toc-item">` ze spisem na górze treści.  
Nowy standard: **pływający hamburger** + opcjonalnie ten sam spis ukryty dla SEO/print (`noscript` / print CSS pokazuje listę).

Migracja: zostawić kotwice `#cele`, podmienić tylko shell.

## Pliki do podpięcia w HTML lekcji

```html
<link rel="stylesheet" href="…/lesson-shell.css"/>
<!-- treść -->
<script src="…/lesson-shell.js" defer></script>
<script>
  CHE.LessonShell.mount({
    code: 'N01',
    title: 'Tlenki',
    subject: 'chemia',
    variant: 'chemia',
    toc: 'float-hamburger'
  });
</script>
```

W packerze / STANDALONE: wstrzyknąć te cegiełki automatycznie.
