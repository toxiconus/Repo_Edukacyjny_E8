---
kod: R08
uid: CHE.03.R08
tytul: "Reagent ograniczający"
typ: lekcja
dzial: "Roztwory i stechiometria (blok R)"
poziom: "E8"
wymaga: "R07; R04"
poglebia: "LKO-STECH"
wlasciciel: "chemia E8 — blok R"
zrodla: "Podstawa programowa chemii, klasa 8 + zakres konkursu kuratoryjnego (etap II)"
opis: "Procedura trzech kroków wyznaczania reagenta ograniczającego i ilości produktu, gdy substraty są w różnych porcjach niż każe równanie."
stan: "pełna struktura — 2026-10-13, bez audytu W1"
kicker: "R08 · reagent ograniczający"
lead: "Dwa substraty, jeden przepis — który skończy się pierwszy i ile produktu naprawdę powstanie?"
plakietki: ["reagent ograniczający", "nadmiar"]
stopka: "R08 · szkic"
---

# R08 — Reagent ograniczający

## 1 | Wykład — kto decyduje: reagent ograniczający

Pełny wykład o nadmiarze substratów masz w R07 — tu ćwiczymy samą **procedurę**, szybko i bez powtórek.

Zacznijmy od życia. Kanapka = 2 kromki chleba + 1 plasterek sera. Masz 8 kromek i 3 plasterki sera. Ile kanapek zrobisz? Przepis każe 2:1. Chleb pozwoliłby na 4 kanapki, ser tylko na 3. Zrobisz **3** — i zostaną 2 kromki. To **ser** zadecydował.

W chemii tak samo: równanie to przepis molowy, a substraty w probówce rzadko bywają w idealnych proporcjach. **Reagent ograniczający** to substrat, który **wyczerpie się pierwszy** — to on wyznacza maksymalną ilość produktu. Drugi substrat jest **w nadmiarze**: część jego zostaje w probówce, nieużyta.

Dlatego w zadaniach z nadmiarem **produktu liczymy zawsze z reagenta ograniczającego** — nigdy z substratu nadmiarowego.

::: karta extra | Reagent ograniczający w kuchni
Przepis: biszkopt z 4 jajek, szklanki mąki i szklanki cukru. Mąki i cukru masz pod dostatkiem, ale tylko 2 jajka zamiast 4. Powstanie połowa porcji ciasta — o wielkości partii decydują jajka, jedyny składnik w niedomiarze. W kuchni reagent ograniczający spotyka cię codziennie: przepis działa jak równanie stechiometryczne, a brak jednego składnika ogranicza całą partię — reszta składników czeka w nadmiarze.
:::

## 2 | Wykład — procedura trzech kroków

**Krok 1: masy → mole.** Zamień masę każdego substratu na mole:
n = m / M
Bez tego kroku nie da się porównywać — równanie mówi o molach, a zadanie daje gramy.

**Krok 2: porównanie ze stosunkiem ze równania.** Weź stosunek molowy substratów ze współczynników (np. 1 : 2) i sprawdź, który substrat „zabraknie":
- ile moli substratu B potrzeba na **cały** substrat A?
- czy tyle B masz? Jeśli nie — B jest ograniczający. Jeśli tak — sprawdź odwrotnie dla A.

**Krok 3: wniosek.** Wyznacz reagenta ograniczającego. Produkt licz **wyłącznie z jego ilości** (stosunek molowy produkt : ograniczający). Jeśli proszą o nadmiar: policz, ile nadmiarowego substratu faktycznie zużyto (przez stosunek molowy z reagentem ograniczającym) i odejmij od startowej masy.

::: karta core | Procedura R08 w trzech krokach
(1) masy → mole (n = m/M). (2) porównaj mole ze stosunkiem ze równania — kto zabraknie? (3) wniosek: ograniczający → ile produktu; nadmiarowy → ile zostanie. Zawsze z równaniem przed oczami i zawsze w molach.
:::

::: karta exam | Wzorcowy zapis na sprawdzianie
Ocena zadania z reagentem ograniczającym: równanie reakcji → obliczenie M i n dla **obu** substratów → jawnie napisane porównanie („na X mol A potrzeba Y mol B, mam Z — więc...") → produkt z reagenta ograniczającego → jednostki. Sam wynik bez porównania w molach to zaliczenie kroku 2 na zero.
:::

::: karta understand | W skrócie — dlaczego najpierw mole, a nie gramy

Współczynniki w równaniu liczą **cząstki**: 1 cząsteczka CaCO₃ reaguje z 2 cząsteczkami HCl. Mol to porcja cząstek, więc stosunek 1 : 2 przenosi się wprost na mole. Gramy nic tu nie mówią — 100 g CaCO₃ i 73 g HCl akurat dają stosunek molowy 1 : 2 (bo 100 g to 1 mol CaCO₃, a 73 g to 2 mole HCl), ale ten „masowy" przelicznik jest inny dla każdej pary substancji i zależy od ich mas molowych. Jednym uniwersalnym językiem równania są mole — dlatego krok 1 zawsze zamienia masy na mole, zanim cokolwiek porównamy.
:::

## 3 | Wykład — przykład krok po kroku: HCl + CaCO₃

**Zadanie.** Do 150 g roztworu kwasu solnego o stężeniu 7,3% dodano 20 g węglanu wapnia CaCO₃. Reakcja: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Który substrat jest ograniczający i ile CO₂ powstanie?

**Krok 0: czysty substrat.** Kwas jest w roztworze — liczymy tylko czysty HCl:
m(HCl) = 150 g · 7,3% = 150 · 0,073 = 10,95 g
(stężenie procentowe omawia R03 — tu wystarczy pomnożenie)

**Krok 1: masy → mole.**
- M(HCl) = 1 + 35,5 = 36,5 g/mol → n(HCl) = 10,95 g / 36,5 g/mol = 0,3 mol
- M(CaCO₃) = 40 + 12 + 3·16 = 100 g/mol → n(CaCO₃) = 20 g / 100 g/mol = 0,2 mol

**Krok 2: porównanie.** Równanie: 1 mol CaCO₃ : 2 mol HCl.
- Na 0,2 mol CaCO₃ potrzeba 2 · 0,2 = 0,4 mol HCl — a mamy tylko 0,3 mol. **Brakuje HCl.**
- Sprawdzenie z drugiej strony: 0,3 mol HCl obsłuży 0,3/2 = 0,15 mol CaCO₃ — a mamy 0,2 mol, czyli CaCO₃ jest w nadmiarze. ✔ (dwa te same wnioski)

**Krok 3: wniosek.** Reagent ograniczający: **HCl**. Produkt liczymy z HCl:
- n(CO₂) = 0,3 mol HCl / 2 = 0,15 mol (stosunek HCl : CO₂ = 2 : 1)
- M(CO₂) = 12 + 2·16 = 44 g/mol → m(CO₂) = 0,15 mol · 44 g/mol = **6,6 g**

Nadmiar CaCO₃: zużyto 0,15 mol = 15 g; zostaje 20 − 15 = **5 g**.

**Sprawdzenie rzędu i bilansu:** substraty ważyły 10,95 + 20 = 30,95 g; gaz uciekł 6,6 g; w zlewce zostaje 24,35 g (roztwór CaCl₂ + woda + 5 g nierozpuszczonego CaCO₃) — nic nie zniknęło. ✔

::: karta understand | Dlaczego produkt liczymy z ograniczającego?
Produkt powstaje tylko z cząstek, które faktycznie zareagowały. Reagent ograniczający zużywa się **w całości** — więc jego mole jednoznacznie wyznaczają maksimum produktu. Mole substratu nadmiarowego reagują tylko częściowo — użycie ich całej masy dałoby wynik z bańką („zrobisz 4 kanapki z 3 plasterków sera").
:::

::: karta error | Porównywanie gramów zamiast moli
Typowy błąd: „HCl 10,95 g, CaCO₃ 20 g, więc CaCO₃ jest w nadmiarze, bo waży więcej". Nie! Stosunek ze równania dotyczy **moli**, a masy molowe są różne (36,5 vs 100 g/mol). Porównuj wyłącznie mole — albo masy przeliczone najpierw na mole. Krok 1 istnieje właśnie po to.
:::

::: karta extra | Dlaczego przemysł płaci za nadmiar
W przemyśle substraty często łączy się w stosunku innym niż z równania — celowo. Tani składnik (powietrze, woda, wapień) dodaje się w nadmiarze, aby drogi substrat zużył się do zera: każda jego niezareagowana część to wyrzucone pieniądze. Nadmiar taniego składnika zwykle łatwo usunąć — gaz ucieka, woda zostaje w roztworze, a ciała stałe odcedza się. To odwrócenie logiki kanapek: tutaj „chleb" jest za darmo, więc lepiej dołożyć go w nadmiarze niż zmarnować choćby plasterek „sera".
:::

::: karta extra | Pipnięcie w probówce: metal + kwas
Do probówki z kwasem wrzucasz kawałek cynku — natychmiast lecą bąbelki wodoru. Koniec reakcji mówi, kto był ograniczający: jeśli cynk rozpuścił się do zera, a bąbelki ucichły — ograniczał metal (kwas był w nadmiarze). Jeśli na dnie został nierozpuszczony metal, a bąbelki ucichły — ograniczający był kwas (metal w nadmiarze). Koniec bąbelków = moment, w którym któryś substrat właśnie się wyczerpał; to fizyczny „znacznik" reagenta ograniczającego, widoczny bez żadnych obliczeń.
:::

::: karta understand | W skrócie — cała procedura w trzech zdaniach

Zamień wszystkie masy substratów na mole (n = m/M). Porównaj dostępne mole ze stosunkiem ze równania i wskaż, który substrat zabraknie — to reagent ograniczający. Produkt (i zużycie nadmiaru) licz z moli reagenta ograniczającego, według stosunku molowego z równania.
:::

## Zadania {#zadania}

::: karta exam | Zadania 1–3 (10 pkt)
**Zadanie 1.** Kanapka = 2 kromki chleba + 1 plaster ser. Masz 10 kromek i 4 plasterki sera. Ile kanapek zrobisz i co zostanie? Który „substrat" jest ograniczający?

**Zadanie 2.** Reakcja: 2H₂ + O₂ → 2H₂O. Spalono 4 g wodoru w 16 g tlenu. (a) Który substrat jest ograniczający? (b) Ile wody powstanie? (c) Ile nadmiarowego substratu zostanie? Pełny zapis.

**Zadanie 3.** Reakcja: Mg + Cl₂ → MgCl₂. Do 12 g magnezu dodano 71 g chloru. (a) Który substrat ogranicza? (b) Ile MgCl₂ powstanie? (c) Ile nadmiaru zostanie?
:::

::: odp | Klucz — zadania 1–3
**Zadanie 1 (2 pkt).** Ser pozwala na 4 kanapki (4 plasterki), chleb na 5 (10 kromek / 2). Zrobisz **4 kanapki**; zostaną 2 kromki chleba. Ograniczający: **ser**.

**Zadanie 2 (4 pkt).** M(H₂) = 2 g/mol → n(H₂) = 4/2 = 2 mol. M(O₂) = 32 g/mol → n(O₂) = 16/32 = 0,5 mol. Stosunek 2 : 1: na 2 mol H₂ potrzeba 1 mol O₂ — mamy 0,5 mol → **O₂ ogranicza** (1 pkt). Produkcja: n(H₂O) = 2 · 0,5 = 1 mol → m = 1 · 18 = **18 g** (2 pkt). Zużyto H₂: 2 · 0,5 = 1 mol = 2 g → zostaje 4 − 2 = **2 g H₂** (1 pkt).

**Zadanie 3 (4 pkt).** n(Mg) = 12/24 = 0,5 mol; n(Cl₂) = 71/71 = 1 mol. Stosunek 1 : 1 → Mg potrzebuje 0,5 mol Cl₂, mamy 1 mol → **Mg ogranicza** (1 pkt). n(MgCl₂) = 0,5 mol; M(MgCl₂) = 24 + 2·35,5 = 95 g/mol → m = 0,5 · 95 = **47,5 g** (2 pkt). Zużyto Cl₂: 0,5 mol → zostaje 1 − 0,5 = 0,5 mol = **35,5 g Cl₂** (1 pkt).
:::

::: karta exam | Zadania 4–6 (13 pkt)
**Zadanie 4.** Reakcja: Zn + 2HCl → ZnCl₂ + H₂. Zadano 6,5 g cynku i 14,6 g HCl. (a) Reagent ograniczający? (b) Masa wydzielonego H₂? (c) Masa ZnCl₂? (d) Ile HCl zostanie?

**Zadanie 5.** Reakcja: CH₄ + 2O₂ → CO₂ + 2H₂O. Spalono 8 g metanu w 24 g tlenu. (a) Który substrat się wyczerpie? (b) Ile CO₂ powstanie? (c) Ile metanu zostanie niespalone?

**Zadanie 6.** Reakcja: Fe + S → FeS. Zmieszano 5,6 g żelaza i 4,8 g siarki. (a) Który substrat ogranicza? (b) Ile FeS powstanie? (c) Ile nadmiaru zostanie?
:::

::: odp | Klucz — zadania 4–6
**Zadanie 4 (4 pkt).** n(Zn) = 6,5/65 = 0,1 mol; n(HCl) = 14,6/36,5 = 0,4 mol. Na 0,1 mol Zn potrzeba 0,2 mol HCl — mamy 0,4 → **Zn ogranicza** (1 pkt). n(H₂) = 0,1 mol → m = 0,1 · 2 = **0,2 g** (1 pkt). m(ZnCl₂) = 0,1 · (65 + 71) = 0,1 · 136 = **13,6 g** (1 pkt). Zostaje HCl: 0,4 − 0,2 = 0,2 mol = **7,3 g** (1 pkt).

**Zadanie 5 (5 pkt).** n(CH₄) = 8/16 = 0,5 mol; n(O₂) = 24/32 = 0,75 mol. Na 0,5 mol CH₄ potrzeba 1 mol O₂ — mamy 0,75 → **O₂ ogranicza** (2 pkt). n(CO₂) = 0,75/2 = 0,375 mol → m = 0,375 · 44 = **16,5 g** (1,5 pkt). Zużyto CH₄: 0,375 mol = 6 g → zostaje 8 − 6 = **2 g CH₄** (1,5 pkt).

**Zadanie 6 (4 pkt).** n(Fe) = 5,6/56 = 0,1 mol; n(S) = 4,8/32 = 0,15 mol. Stosunek 1 : 1 → Fe potrzebuje 0,1 mol S, mamy 0,15 → **Fe ogranicza** (1 pkt). n(FeS) = 0,1 mol; M(FeS) = 56 + 32 = 88 g/mol → m = **8,8 g** (1,5 pkt). Zużyto S: 0,1 mol = 3,2 g → zostaje 4,8 − 3,2 = **1,6 g S** (1,5 pkt).
:::

::: karta exam | Zadania 7–8 (7 pkt)
**Zadanie 7.** Wyjaśnij własnymi słowami (2–3 zdania), dlaczego w zadaniach z nadmiarem ilości produktu wyznacza reagent ograniczający, a nie substrat nadmiarowy.

**Zadanie 8.** Do 100 g roztworu HCl o stężeniu 14,6% dodano 50 g CaCO₃. Reakcja: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. (a) Reagent ograniczający? (b) Masa CO₂? (c) Masa CaCO₃, która zostanie w naczyniu?
:::

::: odp | Klucz — zadania 7–8
**Zadanie 7 (2 pkt).** Produkuje się tylko tyle produktu, ile pozwalają cząstki, które faktycznie zareagowały. Reagent ograniczający zużywa się w całości, więc jego mole wyznaczają maksimum produktu; substrat nadmiarowy reaguje tylko częściowo — liczenie z jego całej ilości dałoby wynik niemożliwy do osiągnięcia.

**Zadanie 8 (5 pkt).** m(HCl) = 100 g · 14,6% = 14,6 g → n(HCl) = 14,6/36,5 = 0,4 mol (1 pkt). n(CaCO₃) = 50/100 = 0,5 mol. Na 0,5 mol CaCO₃ potrzeba 1,0 mol HCl — mamy 0,4 → **HCl ogranicza** (2 pkt). n(CO₂) = 0,4/2 = 0,2 mol → m = 0,2 · 44 = **8,8 g** (1 pkt). Zużyto CaCO₃: 0,2 mol = 20 g → w naczyniu zostaje 50 − 20 = **30 g CaCO₃** (1 pkt).
:::

::: adv | Zadanie dodatkowe A (4 pkt) — Sód i chlor — który substrat ogranicza? | poziom ambitny
Reakcja: 2Na + Cl₂ → 2NaCl. Zmieszano 4,6 g sodu i 10 g chloru. (a) Który substrat jest reagentem ograniczającym? (b) Ile gramów NaCl powstanie?
:::

::: odp | Klucz — zadanie dodatkowe A
n(Na) = 4,6 ÷ 23 = 0,2 mol (1 pkt). n(Cl₂) = 10 ÷ 71 ≈ 0,141 mol; na 0,2 mol Na potrzeba 0,1 mol Cl₂ — chloru jest więcej, więc **Na ogranicza** (1 pkt). Z równania: n(NaCl) = 0,2 mol → m = 0,2 · 58,5 = **11,7 g** (2 pkt: 1 za stosunek 2:1, 1 za wynik).
:::

::: adv | Zadanie dodatkowe B (4 pkt) — Cynk i zapas kwasu | poziom ambitny
Reakcja: Zn + 2HCl → ZnCl₂ + H₂. Zmieszano 13 g cynku i 0,5 mola HCl. (a) Który substrat ogranicza? (b) Ile gramów wodoru powstanie?
:::

::: odp | Klucz — zadanie dodatkowe B
n(Zn) = 13 ÷ 65 = 0,2 mol (1 pkt). Na 0,2 mol Zn potrzeba 0,4 mol HCl, a jest 0,5 mol → **Zn ogranicza** (1 pkt). n(H₂) = 0,2 mol → m = 0,2 · 2 = **0,4 g** (2 pkt: 1 za stosunek molowy, 1 za wynik).
:::

**Razem: 30 pkt (zadania podstawowe „exam”); zadania ambitne „adv” — 8 pkt dodatkowo, poza sumą.**
