# PROMPT: pięć lekcji chemii E8 — blok R (roztwory i stechiometria)

Jesteś autorem lekcji chemii dla ucznia klasy 8 szkoły podstawowej (poziom E8, podstawa programowa; dodatkowo przygotowanie do konkursu kuratoryjnego). Napisz **pięć osobnych lekcji** w języku polskim. Wszystkie dane potrzebne do pracy są w tym pliku — nie potrzebujesz żadnych innych materiałów ani linków.

## 1. Co dokładnie napisać

Pięć lekcji, po jednej na kod:

| Kod | Tytuł | Długość (orientacyjnie) |
|---|---|---|
| R01 | Woda i roztwory | średnia (ok. 25–35 KB md) |
| R02 | Rozpuszczalność | średnia (ok. 25–35 KB md) |
| R04 | Mol i masa molowa | pełna (ok. 35–45 KB md) |
| R08 | Reagent ograniczający | krótka (ok. 15–20 KB md) |
| R09 | Wydajność reakcji | krótka (ok. 15–20 KB md) |

Każda lekcja to osobny plik md. Nie wolno powielać treści między lekcjami — jeśli temat należy do innej lekcji, napisz jedno zdanie i odwołaj się do jej kodu (np. „patrz R07”), bez kopiowania.

### Granice zakresu (czego NIE pisać)

- **R01** — nie zawiera obliczeń stężenia procentowego (to lekcja o stężeniu; nie pisz jej tu). Skupienie: woda, polarność, roztwór, zawiesina, koloid.
- **R02** — nie zawiera obliczeń stężenia procentowego. Skupienie: rozpuszczalność, krzywe, krystalizacja.
- **R04** — nie zawiera stechiometrii z równań reakcji (to R07) ani objętości molowej gazów (to R06).
- **R08** — krótka. Wykład o nadmiarze już istnieje w R07 — tutaj tylko procedura, odwołanie do R07.
- **R09** — krótka. Tylko wydajność i jej łączenie z nadmiarem.

### Zakres merytoryczny

**R01 — Woda i roztwory**
- budowa cząsteczki wody i jej polarność (wiązania O–H są spolaryzowane, cząsteczka jest kątowa);
- zasada „podobne rozpuszcza podobne”;
- roztwór = substancja rozpuszczona + rozpuszczalnik; zawiesina; koloid (efekt Tyndalla);
- czynniki szybkości rozpuszczania: rozdrobnienie, mieszanie, temperatura (dla większości ciał stałych);
- hydratacja jonów i dipoli;
- zapisy stanów skupienia: (s), (l), (g), (aq);
- most do dysocjacji jonowej (sole w wodzie dają jony).
- Pułapki: rozpuszczanie nie jest zwykle reakcją chemiczną; koloid nie osadza się tak jak zawiesina.

**R02 — Rozpuszczalność**
- definicja: maksymalna masa substancji rozpuszczalna w 100 g wody w danej temperaturze;
- roztwór nasycony, nienasycony, przesycony (nietrwały);
- krzywe rozpuszczalności i odczyt z wykresu;
- wpływ temperatury: dla większości ciał stałych rozpuszczalność rośnie, dla gazów maleje;
- krystalizacja przez ochłodzenie roztworu nasyconego i przez odparowanie;
- obliczenie osadu jako różnicy rozpuszczalności w dwóch temperaturach (prosty wariant, bez przeliczeń procentowych).
- Pułapka: „110%” jako stężenie nasyconego roztworu KNO₃ — stężenie liczy się z masy **roztworu**, nie wody (110/210 ≈ 52,4%). W tej lekcji nie wprowadzaj obliczeń % — tylko wskaż pułapkę.

**R04 — Mol i masa molowa**
- mol jako jednostka liczności cząstek;
- liczba Avogadra: 6,02·10²³ mol⁻¹;
- masa molowa M (g/mol) z mas atomowych i wzoru; Mr i M to ta sama liczba, inna jednostka;
- przeliczenia: **masa ↔ mol ↔ liczba cząstek** (każdy kierunek, z wzorem i przykładem);
- zapowiedź stechiometrii molowej (bez pełnego jej rozwijania).
- Pułapki: mol gramów vs mol cząstek; atomy vs cząsteczki (O vs O₂); „1 mol H₂O = 18 g” bez wzoru i jednostki.

**R08 — Reagent ograniczający**
- procedura w trzech krokach: (1) masy → mole; (2) porównanie ilości substratów ze stosunkiem ze współczynników równania; (3) wniosek: który substrat się wyczerpie i ile produktu powstanie;
- przykład: 150 g roztworu HCl 7,3% + 20 g CaCO₃ → ogranicza HCl (zużycie CaCO₃ = 15 g, zostaje 5 g); CO₂ = 6,6 g.
- Odwołanie do R07 (tam jest pełny wykład nadmiaru).

**R09 — Wydajność reakcji**
- wydajność = m(rzeczywista) / m(teoretyczna) · 100%;
- obliczanie masy teoretycznej z równania;
- obliczanie masy rzeczywistej z podanej wydajności (np. 90% z 6,6 g = 5,94 g);
- łączenie z nadmiarem: najpierw reagent ograniczający, potem wydajność.
- Pułapka: liczenie wydajności z masy substratu zamiast z masy produktu teoretycznego.

## 2. Dane liczbowe (używaj tylko tych wartości)

- Masy atomowe: H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27, S 32, Cl 35,5, K 39, Ca 40, Fe 56, Cu 64, Zn 65, Ag 108, Ba 137.
- Mr: H₂O 18, CO₂ 44, CaCO₃ 100, HCl 36,5, NH₃ 17, H₂S 34, NaCl 58,5, KNO₃ 101.
- Avogadro: 6,02·10²³ mol⁻¹.
- Rozpuszczalność KNO₃ (g/100 g H₂O): 20 °C — 32; 60 °C — 110; 70 °C — 138. Odczyt z wykresu: tolerancja 108–112 g w 60 °C.
- Rozpuszczalność NaCl: ok. 36–37 g/100 g H₂O w zakresie 0–100 °C (krzywa prawie płaska).
- Wartości, których nie jesteś pewien: oznacz w tekście „(do weryfikacji)”. Nie zgaduj.

## 3. Format dialektu (obowiązkowy)

**Front matter** na początku pliku, dokładnie w tej postaci (wartości zmień):

```
---
kod: R04
uid: CHE.03.R04
tytul: "Mol i masa molowa"
typ: lekcja
dzial: "Roztwory i stechiometria (blok R)"
poziom: "E8"
wymaga: "F12; F17"
poglebia: "R05; R07"
wlasciciel: "chemia E8 — blok R"
zrodla: "Podstawa programowa chemii, klasa 8 + zakres konkursu kuratoryjnego (etap II)"
opis: "Jedno zdanie streszczające lekcję."
stan: "szkic — 2026-10-13, bez audytu W1"
kicker: "R04 · mol"
lead: "Jedno zdanie wprowadzenia."
plakietki: ["mol", "masa molowa"]
stopka: "R04 · szkic"
---
```

**Struktura treści:**
- nagłówek `# R04 — Mol i masa molowa` (tytuł lekcji);
- `## 1 | Wykład — …` — **pełny wykład „od zera”** (uczeń ma zrozumieć temat bez innych lekcji), obowiązkowe słowo „Wykład” w nagłówku;
- kolejne sekcje numerowane (`## 2 | …`, `## 3 | …`);
- **mini-wykłady** (1–3 w suchych miejscach), każdy jako sekcja z tytułem zaczynającym się od „W skrócie — ”;
- **karty** — składnia (zamykana trzema dwukropkami):
  ```
  ::: karta understand | Tytuł karty
  treść
  :::
  ```
  Rodzaje: `understand` (zrozumienie), `error` (pułapka), `exam` (wzór egzaminacyjny), `core` (rdzeń), `extra` (ciekawostka).
- **ciekawostki:** 3–5 kart `extra`, każda z faktem, który jest prawdziwy i sprawdzony.
- **zadania:** 8–15 zadań, w sekcji `## Zadania`, z pełnym zapisem; na końcu sekcja `## Klucz i punktacja` z odpowiedziami i punktami.
- **zakaz:** żadnych znaczników czasu („5 min”, „ok. 45 min”), żadnych planów dziennych, żadnych limitów czasu — kurs jest do samodzielnej nauki we własnym tempie.
- **grafiki:** tylko gdy są potrzebne do zrozumienia (np. wykres krzywej rozpuszczalności). Każda grafika ma pod sobą linię `@opis …` z opisem słownym: co widać, jakie są oznaczenia, liczby i wniosek. Bez opisu grafika jest błędem.

Przykład wzoru dla R04 (zwięźle):
```
## 3 | Wykład — przeliczenia masa ↔ mol ↔ liczba cząstek
Mol to porcja o liczbie cząstek równej liczbie Avogadra …
```

## 4. Jak pracować

1. Dla każdej lekcji najpierw zapisz krótki plan sekcji (w myślach), potem treść.
2. Napisz wykład tak, żeby uczeń bez wcześniejszej wiedzy zrozumiał temat — definicje, przykłady, wzory z wyjaśnieniem jednostek.
3. Każde obliczenie pokazuj w kolejności: równanie → masy molowe pod wzorami → proporcja → wynik z jednostką → sprawdzenie rzędu wielkości.
4. Sprawdź każdą liczbę w zadaniach i kluczu dwa razy. W przypadku niepewności — oznacz „(do weryfikacji)”.
5. Pilnuj granic zakresu z sekcji 1: nie wchodź w tematy innych lekcji.

## 5. Co oddać

Pięć bloków, po jednym na lekcję, w kolejności R01, R02, R04, R08, R09. Każdy blok:
- nazwa pliku: `R01_woda_i_roztwory.md`, `R02_rozpuszczalnosc.md`, `R04_mol_masa_molowa.md`, `R08_reagent_ograniczajacy.md`, `R09_wydajnosc_reakcji.md`;
- treść w jednym bloku kodu ` ```markdown `, bez komentarzy poza blokiem.

Na końcu jedna sekcja **„Do weryfikacji”**: lista liczb i faktów, których nie jesteś pewien, z numerem lekcji. Bez innych komentarzy.
