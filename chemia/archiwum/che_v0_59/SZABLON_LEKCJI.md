# Szablon lekcji CHE (md → HTML) — v1, 2026-10-07

Lekcję piszemy **tylko w md** (`md/<KOD>_<nazwa>.md`). HTML robi skrypt: `python3 narzedzia/md2html.py` → `dist/`.
Wygląd i zachowanie są wspólne: `szablon/lekcja.css`, `szablon/lekcja.js`, silnik i modele `dist/che-viz.js` (zamrożony).
Nowe modele, zlewki GFX i pracownie dopisujemy w `szablon/rozszerzenia.js` (instrukcja w KATALOG_MODELI.md) — silnika nie ruszamy.
Kolejność części i zasady treści — jak w `STANDARD_LEKCJI.md` (start → rdzeń E8 → ambitne → praktyka → powtórka → dodatki).

## Nagłówek pliku
```
---
kod: N05
uid: CHE.02.N05.wodorki
tytul: Wodorki
opis: krótki opis na kafelek spisu lekcji
kicker: N05 · MASTER LAB v1.0
lead: jedno zdanie o zakresie (można kilka linii lead:)
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNE (LO)]]
uwaga: (opcjonalnie) notka pod przyciskiem treści akademickich
stopka: **CHEMIA N05 v1.0 MASTER LAB** · Wodorki · 2026
---
```
Spis treści, przycisk „Pokaż treści akademickie”, stopka i link „Przejdź do treści” robią się same.

## Tekst (wewnątrz akapitu)
| md | wynik |
|---|---|
| `**ważne**`, `*kursywa*`, `` `kod` `` | pogrubienie, kursywa, kod |
| `[§3](#nazewnictwo)` | odnośnik |
| `[[basic:E8]]` `[[understand:ROZUMIENIE]]` `[[extra:AMBITNE]]` `[[exam:E8 EGZAMIN]]` `[[new:NOWE]]` | plakietka poziomu |
| `H<sub>2</sub>O`, `<span class="hl">…</span>` | dowolny HTML w tekście jest dozwolony |
Wzory pisz znakami Unicode (H₂SO₄, Fe³⁺, →, ⇌, ↓, ↑). Dosłowną gwiazdkę pisz jako `\*`.

## Bloki
```
## 4 | Dysocjacja soli [[basic:E8]] {#dysocjacja}      ← sekcja: numer | tytuł {#id}; zamyka się przy następnej ##
### Podtytuł                                           ← h3 (#### h4, ##### h5); można dodać {#id .klasa}
Zwykły akapit.
> Notka (mała, szara — mini-note).
- lista punktowana
1. lista numerowana (zaczyna się od pierwszego numeru, np. 6. → 6, 7, 8…)
$$ Al₂(SO₄)₃ → 2 Al³⁺ + 3 SO₄²⁻                        ← wzór/równanie w ramce
| Kolumna | Kolumna |                                  ← tabela
|---|---|
| a | b |
@model kw-reszty-v01 | Tytuł przycisku | co pokazuje    ← model silnika (id z KATALOG_MODELI.md); jeden model = jedno miejsce
@zlewka sole-doswiadczenia-v01 rx-cu-naoh | Zobacz w zlewce (pracownia GFX)
@opis Zlewka z niebieskim CuSO₄(aq); po dodaniu NaOH wypada niebieski galaretowaty osad Cu(OH)₂↓.   ← OBOWIĄZKOWO pod każdym @model/@zlewka/obrazem
```
**Opis wizualizacji (zasada stała):** pod każdym `@model`, `@zlewka`, wykresem i obrazem linia `@opis …` — co widać (elementy, kolory, liczby, co się zmienia) i jaki wniosek. W md jest jawna, w HTML staje się ukrytym komentarzem `<!-- OPIS: … -->`. Obraz w surowym HTML ma też `alt` z tym samym sensem. Build ostrzega o brakach.
Pusta linia kończy akapit, listę i tabelę.

## Kontenery (`::: nazwa` … `:::`, można zagnieżdżać)
```
::: minimum | Muszę umieć na E8 — 10 faktów            ← karta minimum (trafia przed spis treści)
1. …
:::
::: warstwy                                            ← legenda poziomów
- e8 | <b>E8:</b> …
- understand | …    - extra | …    - contest | …
:::
::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to (ok. 30 min)
1. …
:::
::: karta basic | Etykieta                             ← karta; typ: basic core understand extra exam warning error new, albo - (zwykła)
treść (akapity, listy, wzory, inne kontenery)
:::
::: odp | Pokaż odpowiedzi                             ← rozwijana odpowiedź
:::
::: adv | Tytuł | poziom akademicki                    ← treść ponad LO (rozwijana, przycisk w nagłówku)
:::
::: dosw | Doświadczenie 1 — Strącanie Cu(OH)₂          ← doświadczenie (format egzaminacyjny)
Problem: Czy CuSO₄ reaguje z NaOH?
Hipoteza: …
Sprzęt: …
Przebieg: …
Obserwacja: …
Wniosek: …
Równanie:: CuSO₄ + 2 NaOH → Cu(OH)₂↓ + Na₂SO₄      ← „::” = wzór
BHP: …

@zlewka sole-doswiadczenia-v01 rx-cu-naoh | Zobacz w zlewce (pracownia GFX)
:::
::: klinika | Błąd | Poprawnie | Dlaczego?             ← klinika błędów
| CaCl | CaCl₂ | Ca²⁺ i dwa Cl⁻ — suma ładunków 0. |
:::
::: slownik                                            ← słownik / definicje
Sól :: związek z kationów metalu i anionów reszty kwasowej
:::
::: fiszki                                             ← fiszki: przód | tył | (opcjonalnie) poziom:etykieta
Co to sól? | kation metalu + anion reszty kwasowej | basic:podstawa
:::
::: test                                               ← test jednokrotnego wyboru: + poprawna, ! wyjaśnienie (opcjonalnie)
? Wzór azotanu(V) wapnia:
- CaNO₃
+ Ca(NO₃)₂
- Ca₂NO₃
! Ca²⁺ i dwa NO₃⁻.
:::
::: div.table-wrap                                     ← dowolny element: tag.klasa#id {atrybut="…"}
:::
::: html                                               ← surowy HTML (rzadko: własne widżety)
:::
::: styl                                               ← CSS tylko tej lekcji (dla własnych widżetów)
:::
::: skrypt                                             ← JS tylko tej lekcji (stare widżety N01–N03)
:::
```

## Zasady pracy
- Jedna lekcja = jeden plik md. Merytoryka najpierw w md (można sprawdzać w innych LLM), potem `md2html.py`.
- Nie edytujemy HTML w `dist/` ani `che-viz.js` — wszystko powstaje ze skryptów.
- Wygląd zmieniamy tylko w `szablon/lekcja.css` / `lekcja.js` → działa we wszystkich lekcjach naraz.
- Nowa lekcja pojawia się w `dist/index.html` sama.
