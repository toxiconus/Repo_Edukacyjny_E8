---
kod: PROMPT-R-BRAKUJACE
stan: szkic — 2026-10-13
opis: "Prompt dla AI: pięć osobnych lekcji bloku R (R01, R02, R04, R08, R09) z zakresem, sposobem wykonania i wynikiem do oddania. Szkielety w lekcje_md/ — jako lista zakresu, nie jako treść do przepisania."
---

# Prompt: osobne lekcje bloku R (chemia E8)

Zadanie: napisz pięć osobnych lekcji w dialekcie che-modular, po jednym pliku MD na kod. Każda lekcja musi mieć własny zakres i nie może powielać treści innych lekcji — odwołuj się do nich linkiem zamiast kopiować.

## 0. Pliki i ich granice

| Kod | Plik docelowy | Pokrywa się z | Granica (czego NIE pisać) |
|---|---|---|---|
| R01 Woda i roztwory | `che-modular/lessons-md/gotowe/R01_woda_i_roztwory.md` | R03 | bez stężenia procentowego (to R03); skupić na wodzie, polarności, roztworze, zawiesinie, koloidzie |
| R02 Rozpuszczalność | `…/R02_rozpuszczalnosc.md` | R03, LKO-KRZYWE | bez obliczeń stężenia % (R03); krzywe i krystalizacja |
| R04 Mol i masa molowa | `…/R04_mol_masa_molowa.md` | LKO-STECH (zapowiedź) | bez stechiometrii z równań (R07) i bez objętości molowej (R06) |
| R08 Reagent ograniczający | `…/R08_reagent_ograniczajacy.md` | R07 | krótka; procedura trzech kroków, bez powtarzania wykładu z R07 |
| R09 Wydajność reakcji | `…/R09_wydajnosc_reakcji.md` | R07 | krótka; tylko wydajność i jej łączenie z nadmiarem |

Szkielety w `lekcje_md/R/` (R01, R02, `CHE.03.R04+R07-R09.stechiometria.md`) — traktuj jako **listę zakresu**. Nie przepisuj treści wprost; pisz od nowa, korzystając z zakresu.

## 1. Zasady wspólne

1. **Front matter** jak w `gotowe/R07_stechiometria_z_nadmiarem.md`: `kod`, `uid`, `tytul`, `typ`, `dzial`, `poziom`, `wymaga`, `poglebia`, `wlasciciel`, `zrodla`, `opis`, `stan`, `kicker`, `lead`, `plakietki`, `stopka`.
2. **Wykład „od zera”:** sekcja `## N | Wykład — …` po definicjach (limit wymaga słowa „Wykład”, wielkość liter ma znaczenie).
3. **Mini-wykłady** (`W skrócie` / `Mini-wykład — …`) w 1–3 suchych miejscach; **ciekawostki**: 3–5 kart `::: karta extra | tytuł`, fakty sprawdzone.
4. **Karty:** `::: karta understand|extra|error|exam|core | tytuł`, zamykane `:::`.
5. **Opis każdej grafiki** słownie: linia `@opis …` pod `@model`/`@zlewka`/`@viz`/obrazem. Build tego wymaga. Grafiki tylko, gdy pomagają zrozumieć.
6. **Bez znaczników czasu** („5 min”, „ok. 45 min”) i bez planów dziennych — kurs do samodzielnej nauki.
7. **Dane liczbowe sprawdzać.** Masy: H 1, C 12, N 14, O 16, Na 23, Cl 35,5, Ca 40, S 32. Avogadro 6,02·10²³ mol⁻¹. Rozpuszczalność KNO₃ w 60 °C = 110 g/100 g H₂O (wartość ujednolicona z LKO-KRZYWE; odczyt z wykresu tolerancja 108–112 g). Wątpliwe dane oznaczyć „do weryfikacji”.
8. **Stan:** `stan: szkic — 2026-10-13, bez audytu W1`. Nie pisz „W1” ani „✅”.
9. **Ćwiczenia:** każda lekcja ma 8–15 zadań z kluczem i punktacją (zadania z krótkim wynikiem i pełnym zapisem).

## 2. Zadania per lekcja

### R01 — Woda i roztwory
- **Zakres:** budowa cząsteczki wody i jej polarność; „podobne rozpuszcza podobne”; roztwór (substancja rozpuszczona + rozpuszczalnik), zawiesina, koloid (efekt Tyndalla); czynniki szybkości rozpuszczania (rozdrobnienie, mieszanie, temperatura); hydratacja jonów i dipoli; zapisy stanów (s), (l), (g), (aq); most do J01 (dysocjacja soli).
- **Wymaga:** F03, F15. **Poglądza:** R02, J01.
- **Pułapki:** rozpuszczanie to nie reakcja chemiczna (w ogólności); koloid nie „osadza się” jak zawiesina.

### R02 — Rozpuszczalność
- **Zakres:** definicja rozpuszczalności (g/100 g H₂O w danej T); roztwór nasycony, nienasycony, przesycony; krzywe rozpuszczalności (odczyt z wykresu); wpływ T na ciała stałe (rośnie, zwykle) i na gazy (maleje); krystalizacja przez ochłodzenie i odparowanie; osad = S(gorące) − S(zimne) (prosty wariant bez skalowania).
- **Wymaga:** R01. **Poglądza:** R03, J04, J10, LKO-KRZYWE (pogłębienie).
- **Pułapka:** „110%” jako stężenie nasyconego roztworu KNO₃ w 60 °C — stężenie liczymy z masy roztworu (110/210 ≈ 52,4%), nie z masy wody. Nie wprowadzać tu obliczeń % (to R03).

### R04 — Mol i masa molowa
- **Zakres:** mol jako jednostka liczności; liczba Avogadra; masa molowa M (g/mol) z mas atomowych i wzoru; przeliczenia **masa ↔ mol ↔ liczba cząstek**; Mr i M — ta sama liczba, inna jednostka; mol w zapisie równania (zapowiedź stechiometrii molowej).
- **Materiał pomocniczy:** w szkielecie `CHE.03.R04+R07-R09` tylko sekcje o molu i masie molowej (przepisać na nowo, nie kopiować).
- **Wymaga:** F12, F17. **Poglądza:** R05 (stężenie molowe), R07.
- **Pułapki:** mol gramów vs mol cząstek; mol atomów vs cząsteczek (O vs O₂); „1 mol H₂O = 18 g” bez wzoru i jednostki.

### R08 — Reagent ograniczający
- **Zakres:** który substrat się wyczerpie — procedura: (1) masy → mole, (2) porównanie ilości z równania (stosunek stechiometryczny), (3) wniosek: ograniczający i ile produktu powstanie. Przykład z LKO-SYM-A2 zad. 7 (HCl i CaCO₃).
- **Wymaga:** R07, R04. **Poglądza:** LKO-STECH.
- **Granica:** wykład o nadmiarze już jest w R07 — odwołaj się linkiem, nie powtarzaj.

### R09 — Wydajność reakcji
- **Zakres:** wydajność = m(rzeczywista) / m(teoretyczna) · 100%; obliczanie m(teoretycznej) z równania; obliczanie masy rzeczywistej z wydajności; łączenie z nadmiarem (najpierw ograniczający, potem wydajność).
- **Wymaga:** R07. **Poglądza:** R08, LKO-SYM-A2 (zad. 7d, ×0,9).
- **Pułapka:** liczenie wydajności z masy substratu zamiast z masy produktu teoretycznego.

## 3. Procedura

1. Przeczytaj granice (§0) i zakres (§2) dla danej lekcji. Sprawdź w `gotowe/`, czy nie powstał już plik o tym zakresie.
2. Napisz lekcję w dialekcie (§1).
3. Zbuduj HTML: `cd chemia/che-modular && python3 tools/md2html.py lessons-md/gotowe/<plik>.md`.
4. Limity z korzenia repo: `python3 narzedzia/limity_lekcji.py chemia/che-modular/lessons-md/gotowe/<plik>.md` (❌ blokuje).
5. Dopisz wpis w `chemia/plany/narzedzia/gen_f00.py` (sekcja „Uzupełnienia”) i zweryfikuj składnię `python3 -m py_compile`.
6. Commit z trailerami i push na `claude/olimpiada-8-sprint`.

## 4. Wynik do oddania

- Lista plików: nazwa, rozmiar md i html (KB), `stan`.
- Wynik `limity_lekcji.py` dla każdego pliku.
- Lista wątpliwych danych do weryfikacji.
- Tabela: które powiązania w `POWIAZANIA_CHE.md` są teraz domknięte.
