---
kod: PROMPT-R-BRAKUJACE
stan: szkic — 2026-10-13
opis: "Prompt dla AI / zadanie dla Claude: brakujące lekcje bloku R (R01, R02, R04, R08, R09) z zakresem, decyzją i sposobem wykonania. Szkielety w lekcje_md/ traktować jako zakres, nie jako treść do przepisania."
---

# Prompt: brakujące lekcje bloku R (chemia E8)

## 0. Stan wyjściowy (sprawdzony 2026-10-13)

Powiązania w `plany/POWIAZANIA_CHE.md` wskazują kody, dla których nie ma pliku w `che-modular/lessons-md/gotowe/`. Po sprawdzeniu treści okazało się, że część z nich jest już pokryta przez gotowe lekcje:

| Kod | Gdzie jest treść | Co jest w gotowym pliku | Rekomendacja |
|---|---|---|---|
| **R01** Woda i roztwory | `gotowe/R03_woda_roztwory_stezenie_procentowe.md` (mocno pokrywa) | woda, koloid, rozpuszczalność (68 wystąpień), krystalizacja (25) | **nie pisać osobno**; powiązania R01 → R03 |
| **R02** Rozpuszczalność | `gotowe/R03…` oraz `gotowe/LKO_KRZYWE…` | rozpuszczalność, krzywe (LKO) | **nie pisać osobno** albo: wydzielić z R03 tylko krzywe, jeśli R03 jest za długa |
| **R04** Mol i masa molowa | brak w `gotowe/`; szkielet `lekcje_md/R/CHE.03.R04+R07-R09.stechiometria.md` (42 KB, wspólny dla R04/R07/R08/R09, stary MASTER v1.0 jako „L009”) | — | **pisać nową lekcję** (jedyna prawdziwa luka) |
| **R08** Reagent ograniczający | `gotowe/R07_stechiometria_z_nadmiarem.md` (50 wystąpień „ograniczając”) | pełna procedura nadmiaru | **przekierować** powiązanie R08 → R07; nie pisać osobno |
| **R09** Wydajność reakcji | `gotowe/R07…` (36 wystąpień „wydajno”) | wydajność w R07 | **przekierować** R09 → R07, albo dopisać krótką sekcję do R07 |

Szkielety R01/R02/R04+R07–R09 w `lekcje_md/R/` mają stan `W23 — …, W1 nieprzeprowadzony`. Nie przepisuj ich treści wprost; korzystaj z nich jako listy zakresu, jeśli potrzeba.

## 1. Zasady wspólne (dla każdej napisanej lekcji)

1. **Dialekt che-modular:** front matter (`kod`, `uid`, `tytul`, `typ`, `dzial`, `poziom`, `wymaga`, `poglebia`, `wlasciciel`, `zrodla`, `opis`, `stan`, `kicker`, `lead`, `plakietki`, `stopka`) jak w `gotowe/R07_…md`.
2. **Wykład „od zera”:** sekcja `## N | Wykład — …` po definicjach (limit wymaga słowa „Wykład”, wielkość liter ma znaczenie).
3. **Mini-wykłady** („W skrócie”/„Mini-wykład — …”) w 1–3 suchych miejscach; **ciekawostki** jako `::: karta extra | tytuł` (3–5, sprawdzone fakty).
4. **Karty** `::: karta understand|extra|error|exam|core | tytuł`, zamykane `:::`.
5. **Opis każdej grafiki** słownie w linii `@opis …` pod `@model`/`@zlewka`/`@viz`/obrazem (build tego wymaga).
6. **Bez znaczników czasu** („5 min”, „ok. 45 min”), bez planów dziennych — kurs do samodzielnej nauki.
7. **Dane liczbowe** (masy molowe, rozpuszczalności, stałe) sprawdzać; przy wątpliwości oznaczyć do weryfikacji. Masy: H 1, C 12, N 14, O 16, Na 23, Cl 35,5, Ca 40, S 32. Avogadro 6,02·10²³ mol⁻¹.
8. **Stan:** `stan: szkic — <data>, bez audytu W1` — nie `W1`/`✅`, dopóki nie ma zewnętrznego audytu.
9. **Build i kontrola:** `cd chemia/che-modular && python3 tools/md2html.py lessons-md/gotowe/<plik>.md`; z korzenia repo `python3 narzedzia/limity_lekcji.py <ścieżka-md>` (❌ blokuje). Po dodaniu pliku: wiersz w `chemia/plany/narzedzia/gen_f00.py` (sekcja „Uzupełnienia”) i powiązania w `plany/POWIAZANIA_CHE.md`.
10. **Nazwa pliku:** `R04_mol_masa_molowa.md` w `che-modular/lessons-md/gotowe/`.
11. **Commit** z trailerami, push na `claude/olimpiada-8-sprint`.

## 2. Zadania

### R04 — Mol i masa molowa (NOWA LEKCJA, jedyna luka)

- **Zakres:** mol jako jednostka liczności; liczba Avogadra; masa molowa M (g/mol) z mas atomowych i wzoru; przeliczenia **masa ↔ mol ↔ liczba cząstek**; związek z masą cząsteczkową Mr (ta sama liczba, inna jednostka); mol w równaniach jako przejście do stechiometrii molowej.
- **Co wykorzystać:** szkielet `lekcje_md/R/CHE.03.R04+R07-R09.stechiometria.md` — **tylko część o molu i masie molowej** (sekcje mol / masa molowa); reszta (stechiometria, wydajność) jest już w R07. Treść przepisać na nowo w dialekcie gotowych lekcji, nie kopiować.
- **Wymaga:** F17 (równania), F12 (wzory), R03 (roztwory — tylko jako odniesienie do stężeń).
- **Poglądza:** R05 (stężenie molowe), R07 (stechiometria), LKO-STECH (masy i nadmiar — zapowiedź mola w zał. LKO-STECH → R04).
- **Ćwiczenia:** 15–20 zadań z kluczem (przeliczenia ×3 kierunki, Mr ↔ M, liczba cząstek w 1 g H₂O, mol gazu w 1 dm³ — bez Vm, bo to R06).
- **Pułapki (wykład + karta error):** mylenie mola z gramem; mol atomów vs cząsteczek (O₂ vs O); M z Mr bez jednostki; zapis „1 mol H₂O = 18 g” bez wzoru.

### R01 — Woda i roztwory (DECYZJA: nie pisać osobno)

- **Rekomendacja:** powiązania `R01 → …` przekierować na `R03`. R03 już obejmuje polarność wody, roztwór/zawiesinę/koloid, rozpuszczanie i stężenie procentowe.
- **Jeśli jednak potrzebna osobna lekcja** (decyzja użytkownika): zakres = szkielet R01 (budowa i polarność wody, „podobne rozpuszcza podobne”, roztwór/zawiesina/koloid, czynniki szybkości rozpuszczania, hydratacja, most do J01). Musi **wyraźnie różnić się od R03** — inaczej powiel. Lekcja krótka (ok. 25–35 KB), bez powtórzenia stężeń.

### R02 — Rozpuszczalność (DECYZJA: nie pisać osobno, chyba że R03 jest za długa)

- **Rekomendacja:** powiązania `R02 → …` przekierować na R03 (sekcja rozpuszczalności) lub na `LKO-KRZYWE` dla pogłębienia.
- **Jeśli osobna:** zakres = szkielet R02 (definicja rozpuszczalności, roztwór nasycony / nienasycony / przesycony, krzywe rozpuszczalności, wpływ T na ciała stałe i gazy, krystalizacja, odczyt z wykresu w g/100 g H₂O). Krzywe **z wartościami zgodnymi z LKO-KRZYWE** (KNO₃ 60 °C = 110 g/100 g H₂O; odczyt z wykresu tolerancja 108–112 g).
- **Pułapka:** „110%” jako stężenie nasyconego roztworu KNO₃ w 60 °C — stężenie liczymy z masy roztworu (110/210 ≈ 52,4%), nie z masy wody.

### R08 — Reagent ograniczający (DECYZJA: przekierować na R07)

- **Rekomendacja:** powiązanie `R08 → LKO-STECH` zostawić, a dodać `R08 → R07` (R07 ma pełną procedurę nadmiaru). Nie pisać osobnego pliku.
- **Jeśli chcesz osobną krótką lekcję** (np. do pogłębienia): tylko ćwiczenia w trzech krokach (masy → mole → porównanie w stosunku stechiometrycznym), bez powtarzania wykładu z R07; odwołanie do R07 zamiast kopii.

### R09 — Wydajność reakcji (DECYZJA: przekierować na R07 lub dopisać sekcję)

- **Rekomendacja:** powiązanie `R09 → R07` (R07 ma 36 wystąpień wydajności). Jeśli R07 jest za długa, wydzielić sekcję „Wydajność” do osobnej lekcji krótkiej (ok. 15–20 KB).
- **Zakres (jeśli osobna):** wydajność = m(rzeczywista) / m(teoretyczna) · 100%; zastosowanie w zadaniach; łączenie z nadmiarem (najpierw ograniczający, potem wydajność); pułapka: wydajność liczona z masy substratu zamiast z masy produktu teoretycznego.
- **Źródło:** szkielet `lekcje_md/R/CHE.03.R04+R07-R09.stechiometria.md` — tylko sekcja wydajności, przepisana, nie skopiowana. Wykorzystać przykład z `LKO-SYM-A2` zad. 7d (×0,9).

## 3. Wynik, który przyjmuję

- Lista zmienionych/nowych plików i ich rozmiar (KB) przed i po.
- Wynik `limity_lekcji.py` i `md2html.py` dla każdego pliku.
- Krótka notka: które powiązania przekierowano i dlaczego.
