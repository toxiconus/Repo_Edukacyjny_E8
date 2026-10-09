# Rozwinięcie makr — nazwy, domyślne zachowanie, warianty

## `$fiszki_panel` — sekcja widoczna, karty schowane

**Po co:** Autor pisze tylko treść fiszek. Layout pokazuje **panel** (tytuł + przycisk); siatka kart jest **domyślnie ukryta**.

```markdown
$fiszki_panel title="Powtórka: tlenki"
$fiszka "przód" | "tył" tag=basic
$fiszka "…" | "…" tag=exam
$end
```

| Element | Domyślnie | Wariant |
|---------|-----------|---------|
| Panel | widoczny | zawsze |
| Przycisk | „Pokaż fiszki” | po otwarciu: „Ukryj fiszki” |
| Karty | ukryte | `open` w opcjach panelu → od razu widoczne (plan) |
| Klik w kartę | flip przód/tył | — |

**Opcje (planowane):** `title="…"`, `open`, `mode=grid` \| `mode=deck` (deck = jedna karta „na stronę”).

**Zasada:** w MD **nie** opisujesz CSS ani „ukryj”. Tylko treść `$fiszka`.

## `$fiszka` / `$flip`

```markdown
$fiszka "Pytanie" | "Odpowiedź" tag=basic
$flip "Obserwacja?" | "Wniosek" tag=exam
```

Tagi: `basic` \| `exam` \| `extra` \| `error` \| `understand` \| `warning`  
`$flip` = alias `$fiszka`.

## `$fiszka_talia`

Siatka **od razu widoczna** (bez przycisku) — mini-lekcje.

## `$tabela_bledy` — tylko treść komórek

Kolumny Poprawnie (zielone) / Błąd (czerwone) są w klocku. Autor:

```markdown
$tabela_bledy
Temat | tekst poprawny | tekst błędny
Nazewnictwo | tlenek żelaza(III) | trójtlenek żelaza
$end
```

Format: `temat | ok | zła`. Bez HTML i kolorów.

**Plan:** `cols=2`, `$tabela_ok` (sama zieleń).

## `$karta` / `$callout` / `$gfx`

| Makro | Treść MD | UI |
|-------|----------|-----|
| `$karta typ=exam` … `$end` | akapit / lista | ramka |
| `$callout typ=bhp` … `$end` | ostrzeżenie | pasek BHP |
| `$gfx view=id caption="…"` | jedna linia | przycisk modelu |

## Czego nie robić w MD

- Nie stylować fiszek — to shell.
- Nie pisać „kliknij aby odkryć” — jest przycisk panelu.
- Nie dublować spisu w HTML — `@toc` + `{#id}`.

## Backlog makr

- [ ] `$fiszki_panel open` / `mode=deck`
- [ ] `$quiz`
- [ ] `$kroki` (procedura doświadczenia)
- [ ] `$wzór` (ładny zapis chemiczny)
