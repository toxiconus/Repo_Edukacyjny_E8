---
kod: K12
uid: CHE.07.K12.energia_ukladow_zywych_atp
tytul: Energia układów żywych — ATP i sprzężenie reakcji
opis: energia swobodna Gibbsa ΔG = ΔH − TΔS · samorzutność reakcji · budowa ATP i hydroliza · sprzężenie reakcji endoergicznej z hydrolizą ATP · bilans energetyczny spalania glukozy w organizmie · zadania z kluczem (poziom olimpijski) · LO
kicker: K12 · ENERGETYKA · EXTRA · OLIMPIADA
lead: Organizm nie spala glukozy jak ognisko. Rozkłada ją w wielu małych krokach i zapisuje energię w cząsteczkach ATP. Ta lekcja pokazuje chemiczną stronę tego procesu: skąd wiemy, że reakcja zajdzie, i jak jedna reakcja może „pociągnąć” drugą.
plakietki: [[understand:ROZUMIENIE]][[extra:LO]][[exam:OLIMPIADA]]
uwaga: Lekcja poza podstawą (LO i olimpiada). Wartości ΔG°′ dla biochemii dotyczą pH 7 i stężeń standardowych; w W1 sprawdzić wartości z literatury.
stopka: **CHEMIA K12 v1.0** · Energia układów żywych · 2026
stan: NOWA LEKCJA (2026-10-12) — Claude Haiku 5.5, na prośbę użytkownika (ATP); uzupełnienie wklejki 2026-10-14 (samorzutność a szybkość, zadanie 6, ciekawostka); W1 FULL po przeglądzie linia po linii do wykonania
---

Ta lekcja pokazuje, jak chemia opisuje energię w organizmach. Po jej przejściu policzysz, czy reakcja jest samorzutna, wyjaśnisz budowę ATP i hydrolizę, obliczysz sprzężenie reakcji oraz orientacyjną sprawność zapisu energii glukozy w ATP.

::: minimum | Muszę umieć — 7 punktów
1. **Samorzutność** reakcji określa energia swobodna Gibbsa: **ΔG = ΔH − T·ΔS**. Gdy ΔG < 0, reakcja może przebiegać samorzutnie.
2. **ΔH** to ciepło reakcji przy stałym ciśnieniu, **ΔS** to zmiana entropii, **T** to temperatura bezwzględna w kelwinach.
3. **ATP** to nukleotyd z adeniną, rybozą i trzema resztami fosforanowymi.
4. **Hydroliza ATP:** ATP + H₂O → ADP + Pᵢ; ΔG°′ ≈ −30,5 kJ/mol (warunki biochemiczne, pH 7).
5. **Sprzężenie:** reakcja z ΔG > 0 przebiega, jeśli jest połączona z hydrolizą ATP tak, że suma ΔG < 0.
6. **Energia zapisana w ATP** nie tkwi „w wiązaniu” jak w zbiorniku — wynika z różnicy stabilności reagentów i produktów (rezonans, odpychanie ładunków, wzrost entropii).
7. **Spalanie glukozy** ma ΔH ≈ −2800 kJ/mol. Przy ok. 30 ATP na cząsteczkę zapisane jest ok. 915 kJ/mol, czyli sprawność ok. 1/3.
:::

::: warstwy
- understand | <b>Rozumienie:</b> ΔG jako miara samorzutności; sprzężenie; dlaczego hydroliza ATP jest korzystna
- extra | <b>Ambitne:</b> wpływ stężeń na ΔG (równanie ΔG = ΔG°′ + RT ln Q), bilans energetyczny oddychania
- exam | <b>Olimpiada:</b> rachunki sprzężeń, sprawność, zadania z kluczem
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
1. **[§1](#wyklad)** — wykład „od zera”: skąd organizm bierze energię i po co ATP.
2. **[§2](#termo)** — ΔG, ΔH, ΔS; to podstawa wszystkich rachunków.
3. **[§3](#atp)–[§4](#sprzezenie)** — ATP, hydroliza i sprzężenie.
4. **[§7](#cwiczenia)** — zadania z kluczem.
:::

## 1 | Wykład — energia w organizmie {#wyklad}

::: karta understand | Wykład od zera
Spalanie glukozy w ogniu oddaje całą energię naraz jako ciepło i światło. Organizm zachowuje się inaczej: rozkłada glukozę na dziesiątki małych reakcji, a w każdej z nich część energii zapisuje w cząsteczkach, które mogą ją przekazać tam, gdzie jest potrzebna. Tą walutą jest **ATP**.

Chemik pyta w takiej sytuacji: czy reakcja w ogóle może zajść? Do tego służy energia swobodna Gibbsa **ΔG**. Samo ciepło reakcji (ΔH) nie wystarczy, bo reakcja może oddawać ciepło, a mimo to nie zajść, albo pochłaniać ciepło i zajść samorzutnie, gdy rośnie nieuporządkowanie (entropia).

Dlatego w tej lekcji liczymy z ΔG. Gdy ΔG < 0, reakcja jest samorzutna. Gdy ΔG > 0, potrzebuje dopływu energii z zewnątrz, który organizm dostarcza przez sprzężenie z ATP.
:::

### 1.1 Mini-wykład: po co entropia {#entropia}

::: karta understand | W skrócie: entropia jako „ile sposobów”
Entropia mierzy liczbę sposobów, na jakie można ułożyć cząsteczki i energię. Gdy z jednej cząsteczki powstają dwie niezależne, sposobów przybywa, więc entropia rośnie. Ten wzrost pomaga reakcji przebiegać, nawet gdy ΔH jest mało korzystne. Dlatego hydroliza ATP jest samorzutna także dzięki temu, że z jednej cząsteczki powstają dwie.
:::

## 2 | Termodynamika: ΔG, ΔH, ΔS {#termo}

**ΔG = ΔH − T·ΔS**

| Warunek | Wynik | Interpretacja |
|---|---|---|
| ΔG < 0 | reakcja samorzutna | może przebiegać bez dopływu energii |
| ΔG = 0 | stan równowagi | brak przewagi kierunku |
| ΔG > 0 | reakcja niesamorzutna | wymaga dopływu energii (np. sprzężenia) |

::: karta core | Trzy przypadki dla znaków ΔH i ΔS
1. ΔH < 0, ΔS > 0 — reakcja samorzutna w każdej temperaturze.
2. ΔH > 0, ΔS > 0 — samorzutna w wysokiej temperaturze (T·ΔS większe od ΔH).
3. ΔH < 0, ΔS < 0 — samorzutna w niskiej temperaturze.
4. ΔH > 0, ΔS < 0 — nigdy samorzutna.
:::

::: karta understand | Przykład prowadzony: samorzutność w danej temperaturze
**Dane:** ΔH = +40 kJ/mol, ΔS = +120 J/(mol·K), T = 298 K.

**Krok 1:** zamiana jednostek: ΔS = 0,120 kJ/(mol·K).
**Krok 2:** T·ΔS = 298 · 0,120 = 35,8 kJ/mol.
**Krok 3:** ΔG = 40 − 35,8 = +4,2 kJ/mol > 0.
**Wniosek:** reakcja nie jest samorzutna w 298 K, ale byłaby samorzutna w wyższej temperaturze, gdzie T·ΔS przewyższa ΔH.
:::

::: karta warning | Ważne rozróżnienie: samorzutność a szybkość
Ujemne ΔG mówi o korzystności termodynamicznej, a nie o szybkości. Reakcja z ΔG < 0 może przebiegać bardzo wolno z powodu dużej energii aktywacji. Enzym przyspiesza reakcję, obniżając energię aktywacji, ale nie zmienia znaku ΔG.

Przykład: spalanie glukozy jest termodynamicznie korzystne, a kostka cukru nie zapala się samorzutnie w temperaturze pokojowej.
:::

## 3 | ATP — budowa i hydroliza {#atp}

ATP (trifosforan adenozyny) składa się z adeniny, rybozy i trzech reszt fosforanowych. Najważniejsze są wiązania bezwodnikowe między fosforanami.

**ATP + H₂O → ADP + Pᵢ**   ΔG°′ ≈ −30,5 kJ/mol

Dlaczego ta reakcja jest samorzutna? Produkty są stabilniejsze: ADP i fosforan są stabilizowane rezonansem i solwatacją przez wodę, a trzy ujemnie naładowane reszty fosforanowe w ATP odpychają się. Do tego dochodzi wzrost entropii: z jednej cząsteczki powstają dwie.

::: karta warning | Pułapka: „wiązanie wysokoenergetyczne”
W podręcznikach mówi się o „wiązaniu wysokoenergetycznym”. To skrót myślowy. Energia nie jest magazynowana w wiązaniu jak w sprężynie. Liczy się różnica stabilności substratów i produktów. Olimpijczyk powinien mówić o różnicy ΔG, nie o „zapisanej energii w wiązaniu”.
:::

## 4 | Sprzężenie reakcji {#sprzezenie}

Sprzężenie łączy reakcję endoergiczną (ΔG > 0) z hydrolizą ATP tak, że suma ΔG < 0. Przykład: fosforylacja glukozy.

1. Glukoza + Pᵢ → glukozo-6-fosforan; ΔG°′ ≈ +13,8 kJ/mol.
2. ATP + H₂O → ADP + Pᵢ; ΔG°′ ≈ −30,5 kJ/mol.
3. Suma: ΔG°′ ≈ +13,8 − 30,5 ≈ −16,7 kJ/mol < 0.

::: karta understand | Mini-wykład: dlaczego „przepisuje się” reakcje
Sumujemy reakcje jak w prawie Hessa: ΔG reakcji złożonej jest sumą ΔG reakcji składowych. Dlatego można „przenieść” korzystną energię z ATP na reakcję, która sama by nie zaszła. Enzym łączy oba etapy tak, by produkt jednej reakcji był substratem drugiej.
:::

## 5 | Wpływ stężeń (ambitnie) {#stezenia}

Wartość ΔG°′ dotyczy warunków standardowych. W komórce stężenia reagentów są inne, więc rzeczywiste ΔG różni się od standardowego zgodnie z zależnością:

**ΔG = ΔG°′ + R·T·ln Q**

gdzie R = 8,314 J/(mol·K), a Q to iloraz reakcji. Przy małym stężeniu produktów Q jest mały, ln Q ujemny, więc ΔG staje się bardziej ujemne. Dlatego w komórce hydroliza ATP jest silniej korzystna niż w warunkach standardowych.

::: karta extra | Przykład: wpływ stosunku ADP do ATP
Jeśli komórka ma dużo ATP i mało ADP i Pᵢ, iloraz Q jest bardzo mały. Wtedy ΔG hydrolizy staje się wyraźnie bardziej ujemne niż −30,5 kJ/mol. Dlatego komórka utrzymuje wysoki stosunek ATP/ADP — to napęd przemian.
:::

## 6 | Bilans spalania glukozy w organizmie {#bilans}

Spalanie glukozy: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O; ΔH ≈ −2800 kJ/mol.

Przy ok. 30 cząsteczkach ATP na glukozę (wartość orientacyjna) zapisana energia to 30 · 30,5 ≈ 915 kJ/mol. Sprawność zapisu wynosi więc ok. 33%. Reszta energii to ciepło, które utrzymuje temperaturę ciała.

::: karta understand | Wniosek z bilansu
Organizm nie „oszczędza” energii przez brak ciepła — termodynamika tego nie pozwala. Jego sprawność zapisu 1/3 jest wysoka jak na proces biochemiczny, a większość energii i tak przechodzi w ciepło.
:::

::: karta extra | Ciekawostka — ATP jako waluta energii
W 1941 roku Fritz Lipmann zaproponował, że fosforany o dużej energii przenoszenia grupy są uniwersalnym nośnikiem energii w komórce. Stąd określenie ATP jako „waluty energetycznej”. Lipmann otrzymał za te badania Nagrodę Nobla w 1953 roku wspólnie z Hansem Krebsem.
:::

## 7 | Zadania z kluczem (poziom olimpijski) {#cwiczenia}

::: karta exam | Zadanie 1 (2 pkt) — samorzutność
Reakcja ma ΔH = −50 kJ/mol i ΔS = −0,10 kJ/(mol·K). Czy jest samorzutna w 298 K? Wykonaj rachunek.
::: odp | Pokaż klucz
T·ΔS = 298 · (−0,10) = −29,8 kJ/mol. ΔG = ΔH − T·ΔS = −50 − (−29,8) = −20,2 kJ/mol < 0. Reakcja jest samorzutna. (1 pkt za T·ΔS, 1 pkt za ΔG i wniosek.)
:::
:::

::: karta exam | Zadanie 2 (2 pkt) — sprzężenie
Reakcja X → Y ma ΔG°′ = +15 kJ/mol. Czy może przebiegać, jeśli jest sprzężona z hydrolizą ATP (ΔG°′ = −30,5 kJ/mol)?
::: odp | Pokaż klucz
ΔG = +15 − 30,5 = −15,5 kJ/mol < 0, więc reakcja sprzężona przebiega samorzutnie. (1 pkt za sumę, 1 pkt za wniosek.)
:::
:::

::: karta exam | Zadanie 3 (3 pkt) — wpływ stężeń
Dla hydrolizy ATP przy pH 7 i T = 310 K podano ΔG°′ = −30,5 kJ/mol. Oblicz ΔG, gdy Q = 0,01 (R = 8,314 J/(mol·K)). Czy wynik jest bardziej ujemny?
::: odp | Pokaż klucz
R·T·ln Q = 8,314 · 310 · ln(0,01) ≈ 2577 · (−4,605) ≈ −11 870 J/mol ≈ −11,9 kJ/mol. ΔG = −30,5 + (−11,9) ≈ −42,4 kJ/mol. Wynik jest bardziej ujemny. (1 pkt za R·T·ln Q, 1 pkt za ΔG, 1 pkt za wniosek.)
:::
:::

::: karta exam | Zadanie 4 (3 pkt) — bilans
Spalanie glukozy: ΔH = −2800 kJ/mol. Oblicz orientacyjną sprawność zapisu energii w 30 ATP o ΔG°′ = −30,5 kJ/mol.
::: odp | Pokaż klucz
Zapisana energia: 30 · 30,5 = 915 kJ/mol. Sprawność: 915 / 2800 ≈ 0,33 → ok. 33%. (1 pkt za energię, 1 pkt za iloraz, 1 pkt za wynik.)
:::
:::

::: karta exam | Zadanie 5 (2 pkt) — entropia
Wyjaśnij, dlaczego hydroliza ATP jest samorzutna, mimo że w cząsteczce są ujemnie naładowane reszty fosforanowe.
::: odp | Pokaż klucz
Odpychanie ładunków i stabilizacja produktów sprzyjają reakcji; ponadto z jednej cząsteczki powstają dwie, co zwiększa entropię, a w członie −T·ΔS dodaje ujemny wkład do ΔG. (1 pkt za entalpię/stabilizację, 1 pkt za entropię.)
:::
:::

::: karta exam | Zadanie 6 — pułapka: szybkość a samorzutność
Czy reakcja z ΔG < 0 musi zachodzić natychmiast? Uzasadnij.

::: odp | Pokaż klucz
Nie. Ujemne ΔG mówi o korzystności termodynamicznej, nie o szybkości. Szybkość zależy między innymi od energii aktywacji i obecności enzymu, który jej nie zmienia termodynamicznie.
:::
:::

## 8 | Fiszki {#fiszki}

::: fiszki
ΔG = ΔH − T·ΔS | wzór na samorzutność reakcji | basic:termo
ΔG < 0 | reakcja samorzutna | basic:termo
ATP | nukleotyd z trzema resztami fosforanowymi | basic:atp
Hydroliza ATP | ATP + H₂O → ADP + Pᵢ; ΔG°′ ≈ −30,5 kJ/mol | basic:atp
Sprzężenie | suma ΔG < 0 dzięki hydrolizie ATP | understand:atp
ΔG = ΔG°′ + RT ln Q | wpływ stężeń na ΔG | extra:termo
Samorzutność a szybkość | ΔG < 0 nie oznacza szybkiej reakcji; enzym nie zmienia ΔG | understand:kinetyka
:::

## 9 | Słownik {#slownik}

::: slownik
Energia swobodna Gibbsa :: wielkość ΔG, której znak decyduje o samorzutności reakcji
Entropia :: miara liczby możliwych stanów układu; jej wzrost sprzyja samorzutności
Samorzutność :: zdolność reakcji do przebiegu bez dopływu energii z zewnątrz
Sprzężenie reakcji :: połączenie reakcji niesamorzutnej z samorzutną tak, by suma ΔG była ujemna
Iloraz reakcji Q :: stosunek stężeń produktów do substratów w danej chwili
ΔG°′ :: wartość ΔG w warunkach standardowych dla biochemii (pH 7)
:::

## 10 | Test końcowy {#test}

::: test
? Reakcja jest samorzutna, gdy:
- ΔG > 0
+ ΔG < 0
- ΔH > 0 i ΔS < 0
- ΔS = 0
! Ujemna energia swobodna Gibbsa oznacza samorzutność.
? Sprzężenie reakcji z hydrolizą ATP działa, gdy:
- ΔG reakcji sprzężonej jest dodatnie
+ suma ΔG obu reakcji jest ujemna
- ATP nie jest zużywany
- reakcja zachodzi bez enzymu
! Suma ΔG musi być ujemna.
? Produkt hydrolizy ATP to:
+ ADP i fosforan nieorganiczny
- glukoza i tlen
- CO₂ i H₂O
- adenina i ryboza
! ATP + H₂O → ADP + Pᵢ.
? Wzrost entropii przy hydrolizie ATP wynika z tego, że:
- powstaje gaz
+ z jednej cząsteczki powstają dwie niezależne
- zmniejsza się temperatura
- zanika woda
! Zwiększa się liczba niezależnych cząsteczek, więc ΔS > 0.
:::

## 11 | Co dalej? {#dalej}

Lekcja biologiczna o ATP (**BIO.06.L091**) pokazuje te same procesy od strony komórki: glikoliza, cykl Krebsa, łańcuch oddechowy i ATP-syntaza. Warto je przeczytać razem.

## 12 | Checklista — umiem… {#checklista}

::: checklista
- [ ] obliczam ΔG z ΔH, ΔS i temperatury
- [ ] wyjaśniam, kiedy reakcja jest samorzutna w zależności od znaków ΔH i ΔS
- [ ] liczę ΔG sprzężonej reakcji z hydrolizą ATP
- [ ] tłumaczę, dlaczego „wiązanie wysokoenergetyczne” to skrót myślowy
:::

## Pochodzenie i sprawdzenie treści {#zrodla}

- Lekcja nowa, na prośbę użytkownika. Wartości ΔG°′ (hydroliza ATP ≈ −30,5 kJ/mol; fosforylacja glukozy ≈ +13,8 kJ/mol) i ΔH spalania glukozy (≈ −2800 kJ/mol) są standardowe, do weryfikacji w W1.
- Liczba 30 ATP na glukozę zależy od założeń (wydajność przenoszenia NADH) — orientacyjna.

### AUDYT — wklejka zewnętrzna (2026-10-14)

Surowa odpowiedź: `chemia/plany/audyty/K12_wklejka_2026-10-14.md`.

**Wprowadzono:** karta „Samorzutność a szybkość” (enzym nie zmienia ΔG, energia aktywacji, kostka cukru); zadanie 6 z pułapką kinetyczną i kluczem; fiszka o samorzutności a szybkości; ciekawostka o ATP jako walucie energii (Lipmann 1941, Nagroda Nobla 1953 wspólnie z Krebsem).

**Już w lekcji:** wzory ΔG, przykład z Q = 0,01 (−42,4 kJ/mol), fosforylacja glukozy (+13,8 − 30,5 = −16,7 kJ/mol), sprawność, zadania 1–5.

**Nieprzyjęte:** frontmatter w bloku kodu i fiszki/test w blokach ``` (niezgodne ze składnią repo); pytanie testowe „Dlaczego w komórce rzeczywiste ΔG” — urwane, bez treści i odpowiedzi; stan „W1 FULL — Perplexity” — pełnego przeglądu linia po linii nie wykonano.
