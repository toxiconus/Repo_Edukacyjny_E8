---
kod: J09
tytul: Bufory
opis: bufor · pojemność buforu · bufor kwasowy · bufor zasadowy · para sprzężona · mechanizm działania buforu · bufor octanowy · bufor amoniakalny · bufor wodorowęglanowy · pH · pKa · równanie Hendersona-Hasselbalcha
uid: CHE.04.J09.bufory
kicker: J09 · CHEMIA · Jony w roztworach · POZIOM ROZSZERZONY / KONKURS
lead: Krew ma pH bliskie 7,4 i utrzymuje je mimo ciągłego napływu kwasów i zasad z pożywienia oraz przemiany materii. Odpowiedzią są bufory — układy, które ograniczają zmiany pH.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:LO]]
uwaga: Plakietka E8 oznacza podstawową warstwę kursu, nie zakres egzaminu ósmoklasisty z chemii. Bufory należą do poziomu rozszerzonego. Bufor nie utrzymuje pH absolutnie stałego, lecz ogranicza jego zmianę po dodaniu niewielkiej ilości kwasu lub zasady. Równanie Hendersona-Hasselbalcha stosuje się dla układów zawierających sprzężoną parę kwas–zasada.
stopka: CHEMIA J09 · Bufory · Materiał do samodzielnej nauki · 2026
stan: ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia
---


::: minimum | Muszę umieć — 10 punktów
1. Wyjaśniam, że bufor to układ ograniczający zmianę pH po dodaniu niewielkiej ilości mocnego kwasu lub mocnej zasady.
2. Rozpoznaję typowy bufor kwasowy jako słaby kwas i jego sprzężoną zasadę w porównywalnych ilościach, na przykład CH₃COOH/CH₃COO⁻.
3. Rozpoznaję typowy bufor zasadowy jako słabą zasadę i jej sprzężony kwas, na przykład NH₃/NH₄⁺.
4. Wyjaśniam, że dodany H₃O⁺ jest wiązany przez zasadowy składnik buforu.
5. Wyjaśniam, że dodane OH⁻ jest wiązane przez kwasowy składnik buforu.
6. Zapisuję reakcje bufora octanowego: H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O oraz OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O.
7. Wyjaśniam, że pojemność buforu jest ograniczona: po zużyciu jednego ze składników bufor przestaje skutecznie stabilizować pH.
8. Wskazuję, że największa skuteczność buforu występuje, gdy stężenia kwasu i sprzężonej zasady są zbliżone, czyli gdy pH jest bliskie pKa.
9. Zapisuję równanie Hendersona-Hasselbalcha: pH = pKa + log([zasada sprzężona]/[kwas]).
10. Podaję przykłady buforów w organizmie: wodorowęglanowy we krwi, fosforanowy oraz związany z białkami.
:::

::: warstwy
- e8 | <b>Podstawa:</b> pojęcie bufora jako układu stabilizującego pH, przykłady bufora octanowego i amoniakalnego oraz mechanizm wiązania dodanego H₃O⁺ lub OH⁻.
- understand | <b>Rozumienie:</b> dlaczego bufor musi zawierać parę sprzężoną, dlaczego nie wystarczy sam słaby kwas albo sama sól, dlaczego pojemność jest ograniczona i kiedy bufor działa najlepiej.
- extra | <b>Poziom rozszerzony:</b> równanie Hendersona-Hasselbalcha, obliczanie pH buforu, stosunek stężeń składników oraz związek buforu z pKa.
- contest | <b>Konkurs:</b> projektowanie bufora o zadanym pH, analiza działania po dodaniu kwasu lub zasady, rozpoznawanie układów, które nie są buforami, oraz granice działania bufora.
- extra | <b>Ambitne:</b> bufor wodorowęglanowy krwi, bufor fosforanowy, wpływ rozcieńczenia na pojemność buforu oraz ograniczenia równania Hendersona-Hasselbalcha.
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to
- [§1](#wyklad) — Wykład od zera: bufor jako magazyn protonów.
- [§2](#mechanizm) — Mechanizm działania buforu.
- [§3](#sklad) — Skład buforu i warunek pary sprzężonej.
- [§4](#przyklady) — Przykłady prowadzone.
- [§5](#klinika) — Klinika błędów.
- [§6](#cwiczenia) — Ćwiczenia z kluczem.
- [§7](#slownik) — Słownik.
- [§8](#test) — Test końcowy.
- [§9](#checklista) — Checklista.
:::

## 0.1 | Jak pracować z lekcją {#jak-pracowac}

Po tej lekcji potrafisz:

- wskazać skład buforu;
- opisać, co dzieje się po dodaniu kwasu i po dodaniu zasady;
- wyjaśnić, dlaczego pH zmienia się tylko nieznacznie;
- rozpoznać układ, który nie jest buforem;
- obliczyć pH buforu równaniem Hendersona-Hasselbalcha.

Kolejność pracy:

1. Zacznij od diagnozy w [§0.3](#diagnoza).
2. Przeczytaj wykład w [§1](#wyklad). Obraz przewodni to bufor jako magazyn dwóch składników: jednego wiążącego nadmiar kwasu i drugiego wiążącego nadmiar zasady.
3. W [§2](#mechanizm) zapisz obie reakcje bufora octanowego. Zwróć uwagę, który składnik zużywa się po dodaniu H₃O⁺, a który po dodaniu OH⁻.
4. W [§3](#sklad) sprawdź, dlaczego para sprzężona jest konieczna.
5. Przykłady w [§4](#przyklady) rozwiązuj samodzielnie przed sprawdzeniem klucza.
6. Równanie Hendersona-Hasselbalcha traktuj jako poziom rozszerzony. Najpierw opanuj mechanizm, potem obliczenia.

Przydatne wcześniej: mocne i słabe elektrolity z J01, pH z J02, pary sprzężone z J06, Ka, Kb i Kw z J07 oraz hydroliza soli z J08.

## 0.2 | Cele i pytanie przewodnie {#cele}

Pytanie przewodnie: **Jak utrzymać pH prawie stałe mimo dodawania kwasu lub zasady?**

Po tej lekcji potrafisz:

- wskazać skład buforu;
- opisać mechanizm działania buforu;
- wyjaśnić pojęcie pojemności buforu;
- zaprojektować bufor o pH bliskim pKa;
- obliczyć pH buforu równaniem Hendersona-Hasselbalcha.

## 0.2a | Kompas — co trzeba wiedzieć wcześniej {#kompas}

- słabe kwasy, pary sprzężone, równowagi (J06); pKa i Ka (J07); hydroliza soli (J08).

## 0.3 | Diagnoza startowa {#diagnoza}

Odpowiedz najpierw samodzielnie.

1. Co to jest bufor?
2. Podaj przykład bufora octanowego.
3. Co się dzieje po dodaniu HCl do buforu CH₃COOH/CH₃COO⁻?
4. Czy bufor ma nieograniczoną pojemność?
5. Gdzie w organizmie działa ważny bufor?

::: odp | Klucz diagnozy i interpretacja
1. (1 pkt) Bufor to układ ograniczający zmianę pH po dodaniu niewielkiej ilości mocnego kwasu lub mocnej zasady.

2. (1 pkt) CH₃COOH/CH₃COONa, czyli kwas octowy i octan sodu.

3. (1 pkt) H₃O⁺ reaguje z CH₃COO⁻ i powstaje CH₃COOH oraz H₂O. pH zmienia się niewiele.

4. (1 pkt) Nie. Po zużyciu jednego ze składników bufor przestaje skutecznie działać.

5. (1 pkt) We krwi działa bufor wodorowęglanowy, utrzymujący pH bliskie 7,4.

Interpretacja wyniku: 5 pkt — przejdź do mechanizmu; 3–4 pkt — przeczytaj punkt 2; 0–2 pkt — zacznij od rdzenia.
:::

## 1 | Wykład — bufor jako magazyn protonów {#wyklad} [[basic:E8]]

Wyobraź sobie zbiornik z dwoma składnikami. Jeden potrafi związać nadmiar kwasu, drugi — nadmiar zasady. Dopóki oba składniki są dostępne, pH roztworu zmienia się tylko nieznacznie. Gdy jeden z nich się wyczerpie, ochrona znika. Taki układ nazywamy buforem.

**Bufor** to roztwór zawierający sprzężoną parę kwas–zasada w porównywalnych ilościach. Jego zadaniem nie jest utrzymanie pH dokładnie stałego, lecz ograniczenie zmiany pH po dodaniu niewielkiej ilości mocnego kwasu lub mocnej zasady.

Typowy bufor kwasowy składa się ze słabego kwasu HA oraz jego sprzężonej zasady A⁻. Przykładem jest bufor octanowy:

CH₃COOH/CH₃COO⁻

W praktyce laboratoryjnej można go przygotować z kwasu octowego CH₃COOH i octanu sodu CH₃COONa. Sól dostarcza jonów CH₃COO⁻.

Typowy bufor zasadowy składa się ze słabej zasady B oraz jej sprzężonego kwasu BH⁺. Przykładem jest bufor amoniakalny:

NH₃/NH₄⁺

Można go przygotować z amoniaku NH₃ i chlorku amonu NH₄Cl. Sól dostarcza jonów NH₄⁺.

Bufor działa, ponieważ zawiera dwa składniki o przeciwnych właściwościach:

- kwasowy składnik HA może oddać proton i związać OH⁻;
- zasadowy składnik A⁻ może przyjąć proton i związać H₃O⁺.

Po dodaniu mocnego kwasu do bufora octanowego jony H₃O⁺ są wiązane przez CH₃COO⁻:

H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O

Stężenie H₃O⁺ rośnie tylko nieznacznie, ponieważ większość dodanego kwasu zostaje przekształcona w słaby kwas CH₃COOH.

Po dodaniu mocnej zasady jony OH⁻ są wiązane przez CH₃COOH:

OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O

Stężenie OH⁻ rośnie tylko nieznacznie, ponieważ większość dodanej zasady zostaje przekształcona w CH₃COO⁻.

Bufor nie usuwa kwasu ani zasady z układu. Przekształca je w mniej reaktywną postać pary sprzężonej. Dlatego pH zmienia się, ale znacznie mniej niż w czystej wodzie.

Pojemność buforu określa, ile kwasu lub zasady bufor może związać, zanim jego działanie stanie się nieskuteczne. Pojemność rośnie wraz z ilością obu składników buforu. Zmniejsza się, gdy jeden ze składników zostaje zużyty.

Bufor działa najlepiej, gdy stężenia kwasu i sprzężonej zasady są zbliżone:

[HA] ≈ [A⁻]

Wtedy ma podobną zdolność wiązania zarówno dodanego kwasu, jak i dodanej zasady. Dla buforu octanowego pKa wynosi około 4,76, dlatego najlepiej działa w okolicy pH 4–5.

::: karta understand | W skrócie — bufor jako magazyn
Bufor działa jak zbiornik z dwoma składnikami: jednym wiążącym nadmiar kwasu i drugim wiążącym nadmiar zasady. Dopóki oba składniki są dostępne, pH zmienia się niewiele. Gdy jeden się wyczerpie, bufor przestaje działać.
:::

::: karta core | Najważniejsze — bufor to para sprzężona
Bufor musi zawierać słaby kwas i jego sprzężoną zasadę albo słabą zasadę i jej sprzężony kwas. Sam słaby kwas albo sama sól nie tworzą buforu.
:::

::: karta warning | Uwaga — bufor nie utrzymuje pH idealnie stałego
Po dodaniu kwasu lub zasady pH bufora zmienia się, choć mniej niż w roztworze niezbuforowanym. Bufor ogranicza zmianę, ale nie eliminuje jej całkowicie.
:::

## 1a | Skład buforu — reguła {#sklad-regula} [[basic:E8]]

Bufor musi zawierać parę sprzężoną, czyli kwas i jego sprzężoną zasadę w porównywalnych ilościach:

- **kwasowy:** CH₃COOH (kwas) + CH₃COONa (sól, źródło CH₃COO⁻);
- **zasadowy:** NH₃ (zasada) + NH₄Cl (sól, źródło NH₄⁺).

::: regula
**Bufor = słaby elektrolit + jego sól z tym samym jonem wspólnym.** Sól dostarcza zapas sprzężonej zasady lub kwasu.
:::

## 2 | Mechanizm działania buforu {#mechanizm} [[understand:ROZUMIENIE]]

Rozpatrz bufor octanowy:

CH₃COOH/CH₃COO⁻

W roztworze ustala się równowaga:

CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻

Kwas octowy jest słabym kwasem, więc dysocjuje tylko częściowo. Octan sodu dostarcza dodatkowe jony CH₃COO⁻. W roztworze znajdują się więc oba składniki pary sprzężonej.

Po dodaniu mocnego kwasu, na przykład HCl, zwiększa się ilość H₃O⁺. Jon CH₃COO⁻ wiąże go:

H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O

Zasadowy składnik buforu zostaje częściowo zużyty, a kwasowy składnik — CH₃COOH — przybywa. pH rośnie tylko nieznacznie.

Po dodaniu mocnej zasady, na przykład NaOH, zwiększa się ilość OH⁻. Kwas octowy wiąże ją:

OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O

Kwasowy składnik buforu zostaje częściowo zużyty, a zasadowy składnik — CH₃COO⁻ — przybywa. pH rośnie tylko nieznacznie.

W obu przypadkach bufor przekształca mocny elektrolit w składnik pary sprzężonej. Nie usuwa go całkowicie z układu, lecz ogranicza jego wpływ na pH.

| Dodany składnik | Reakcja w buforze octanowym | Zużyty składnik | Powstający składnik | Skutek |
|---|---|---|---|---|
| H₃O⁺ | H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O | CH₃COO⁻ | CH₃COOH | niewielki spadek pH |
| OH⁻ | OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O | CH₃COOH | CH₃COO⁻ | niewielki wzrost pH |

Analogicznie dla bufora amoniakalnego NH₃/NH₄⁺:

Po dodaniu H₃O⁺:

H₃O⁺ + NH₃ → NH₄⁺ + H₂O

Po dodaniu OH⁻:

OH⁻ + NH₄⁺ → NH₃ + H₂O

W pierwszym przypadku zużywa się NH₃, a przybywa NH₄⁺. W drugim zużywa się NH₄⁺, a przybywa NH₃.

::: karta understand | W skrócie — dwa kierunki obrony
Dodany kwas wiąże zasadowy składnik buforu. Dodana zasada wiąże kwasowy składnik buforu. Bufor działa, dopóki oba składniki są dostępne.
:::

::: nie-myl | Bufor, hydroliza i neutralizacja
- Bufor ≠ hydroliza — bufor zawiera parę sprzężoną i stabilizuje pH, hydroliza to reakcja jonu soli z wodą; test rozstrzygający: sprawdź, czy w układzie występują oba składniki pary sprzężonej.
- Bufor ≠ neutralizacja do końca — bufor częściowo wiąże dodany kwas lub zasadę, ale nie musi prowadzić do całkowitej neutralizacji; test rozstrzygający: sprawdź, czy pH pozostaje w pobliżu wartości wyjściowej.
- Pojemność buforu ≠ wartość pH — pojemność opisuje ilość kwasu lub zasady, którą bufor może związać; test rozstrzygający: pH opisuje aktualny stan roztworu, pojemność jego odporność na zmiany.
:::

## 2a | Mechanizm — karty skrócone {#mechanizm-karty} [[basic:E8]]

::: karta core | Dodatek mocnego kwasu
H₃O⁺ + A⁻ → HA + H₂O. Jony H₃O⁺ zostają związane przez zasadę buforu (A⁻) i zamienione w słaby kwas. Stężenie H₃O⁺ rośnie tylko nieznacznie.
:::

::: karta core | Dodatek mocnej zasady
OH⁻ + HA → A⁻ + H₂O. Jony OH⁻ zostają związane przez kwas buforu (HA). Stężenie OH⁻ rośnie tylko nieznacznie.
:::

::: karta understand | W skrócie — bufor jako magazyn
Bufor działa jak zbiornik z dwoma składnikami, które „zjadają” nadmiar kwasu lub zasady. Dopóki składniki są, pH się trzyma. Gdy któryś się wyczerpie, bufor przestaje działać.
:::

## 3 | Skład buforu i warunek pary sprzężonej {#sklad} [[understand:ROZUMIENIE]]

Bufor musi zawierać parę sprzężoną kwas–zasada. Nie wystarczy dodać do wody dowolnej soli albo dowolnego kwasu.

**Bufor kwasowy:**

słaby kwas HA + sól zawierająca A⁻

Przykład:

CH₃COOH + CH₃COONa

**Bufor zasadowy:**

słaba zasada B + sól zawierająca BH⁺

Przykład:

NH₃ + NH₄Cl

Dlaczego sól jest potrzebna? W przypadku bufora octanowego CH₃COONa dostarcza jonów CH₃COO⁻. Bez nich roztwór zawierałby głównie CH₃COOH, a nie parę sprzężoną w porównywalnych ilościach.

Dlaczego słaby kwas jest potrzebny? Gdyby użyć mocnego kwasu HCl i NaCl, nie powstałaby sprzężona zasada zdolna wiązać H₃O⁺. HCl dysocjuje praktycznie całkowicie, a Cl⁻ jest bardzo słabą zasadą. Układ HCl/NaCl nie jest buforem.

Dlaczego słaba zasada jest potrzebna? W buforze amoniakalnym NH₃ wiąże H₃O⁺, tworząc NH₄⁺. Gdyby użyć mocnej zasady NaOH i NaCl, nie powstałby sprzężony kwas zdolny wiązać OH⁻. Układ NaOH/NaCl nie jest buforem.

Największa skuteczność buforu występuje, gdy:

[zasada sprzężona] ≈ [kwas]

Wtedy pH jest bliskie pKa kwasu. Dla buforu octanowego pKa(CH₃COOH) ≈ 4,76, więc bufor działa najlepiej wokół pH 4–5. Dla bufora amoniakalnego pKa(NH₄⁺) ≈ 9,26, więc działa najlepiej wokół pH 9–10.

::: karta understand | W skrócie — dlaczego potrzebna jest sól?
Sól dostarcza sprzężonej zasady lub sprzężonego kwasu. W buforze octanowym CH₃COONa dostarcza CH₃COO⁻, a w buforze amoniakalnym NH₄Cl dostarcza NH₄⁺.
:::

::: karta warning | Pułapka — nie każda para to bufor
Dowolna sól z dowolnym kwasem nie tworzy buforu. Potrzebna jest para sprzężona. Mocny kwas i jego sól, na przykład HCl i NaCl, nie tworzą buforu, ponieważ brakuje sprzężonej zasady wiążącej H₃O⁺.
:::

## 4a | Przykłady — bufor octanowy, amoniakalny i krwi {#przyklady-skrot} [[basic:E8]]

::: odp | Przykład 1: bufor octanowy
CH₃COOH / CH₃COO⁻ ma pKa ≈ 4,76, więc działa najlepiej wokół pH 4–5.
Po dodaniu HCl: CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O. Po dodaniu NaOH: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O.
:::

::: odp | Przykład 2: bufor amoniakalny
NH₃ / NH₄⁺ ma pKa(NH₄⁺) ≈ 9,26, więc działa wokół pH 9–10.
:::

::: odp | Przykład 3: bufor wodorowęglanowy (krew)
H₂CO₃ / HCO₃⁻ utrzymuje pH krwi ok. 7,4. Dzięki temu enzymy i transport tlenu działają prawidłowo.
:::

::: karta warning | Pułapka: nie każda para to bufor
Dowolna sól z dowolnym kwasem nie tworzy buforu. Potrzebna jest para sprzężona. Mocny kwas i jego sól (np. HCl + NaCl) nie tworzą buforu — brak sprzężonej zasady, która wiąże H₃O⁺.
:::

## 4 | Przykłady prowadzone {#przyklady} [[extra:LO]]

**Przykład 1 — zaprojektuj bufor o pH około 5.**

Wybierz słaby kwas o pKa bliskim 5. Kwas octowy ma pKa ≈ 4,76, więc pasuje.

Bufor:

CH₃COOH/CH₃COONa

Aby pH było bliskie 5, stężenia CH₃COOH i CH₃COO⁻ powinny być zbliżone.

**Przykład 2 — dodatek NaOH do bufora octanowego.**

Po dodaniu NaOH jony OH⁻ reagują z CH₃COOH:

OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O

Zużywa się kwasowy składnik buforu, a przybywa zasadowy. pH rośnie tylko nieznacznie, dopóki dostępny jest CH₃COOH.

**Przykład 3 — bufor wodorowęglanowy krwi.**

Ważny układ we krwi to:

H₂CO₃/HCO₃⁻

Pomaga utrzymywać pH krwi bliskie 7,4. Nadmiar H₃O⁺ jest wiązany przez HCO₃⁻, a nadmiar OH⁻ może być wiązany przez H₂CO₃. Dzięki temu enzymy i transport tlenu mogą działać prawidłowo.

**Przykład 4 — pH buforu.**

Oblicz pH buforu, w którym:

[CH₃COO⁻] = 0,2 mol/dm³

[CH₃COOH] = 0,02 mol/dm³

pKa(CH₃COOH) = 4,76

Równanie Hendersona-Hasselbalcha:

pH = pKa + log([CH₃COO⁻]/[CH₃COOH])

pH = 4,76 + log(0,2/0,02)

pH = 4,76 + log 10

pH = 4,76 + 1

pH = 5,76

::: karta basic | Po tej lekcji potrafisz
- wskazać skład buforu;
- opisać działanie po dodaniu kwasu i zasady;
- wyjaśnić, dlaczego bufor ma ograniczoną pojemność;
- podać przykład buforu w organizmie;
- obliczyć pH buforu równaniem Hendersona-Hasselbalcha.
:::

::: karta exam | Zadanie 1 (3 pkt) — Zaprojektuj bufor
Zaprojektuj bufor o pH około 5.

a) Podaj słaby kwas i jego sprzężoną zasadę. (1 pkt)

b) Zapisz równanie reakcji po dodaniu H₃O⁺. (1 pkt)

c) Zapisz równanie reakcji po dodaniu OH⁻. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) CH₃COOH/CH₃COONa. Kwas octowy ma pKa około 4,76, bliskie pH 5.

b) (1 pkt) H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O.

c) (1 pkt) OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O.
:::
:::

::: adv | Zadanie 2 (4 pkt) — pH buforu | poziom ambitny
Bufor zawiera CH₃COOH i CH₃COO⁻. pKa kwasu octowego wynosi 4,76.

a) Zapisz równanie Hendersona-Hasselbalcha. (1 pkt)

b) Oblicz pH, gdy [CH₃COO⁻] = 0,2 mol/dm³, a [CH₃COOH] = 0,02 mol/dm³. (1 pkt)

c) Wyjaśnij, dlaczego pH jest większe od pKa. (1 pkt)

d) Wyjaśnij, co stanie się po dodaniu bardzo dużej ilości NaOH. (1 pkt)

::: odp | Pokaż klucz
a) (1 pkt) pH = pKa + log([CH₃COO⁻]/[CH₃COOH]).

b) (1 pkt) pH = 4,76 + log(0,2/0,02) = 4,76 + log 10 = 5,76.

c) (1 pkt) Stężenie zasady sprzężonej jest dziesięć razy większe niż stężenie kwasu, więc logarytm stosunku wynosi 1. Dodaje się go do pKa.

d) (1 pkt) Bardzo duża ilość NaOH zużyje kwasowy składnik buforu. Po jego wyczerpaniu bufor przestanie skutecznie ograniczać wzrost pH.
:::
:::

## 4b | LO — wzór Hendersona-Hasselbalcha {#hh} [[extra:LO]]

::: adv | Wzór | poziom rozszerzony
Dla buforu słaby kwas / sól: pH ≈ pKa + log([A⁻] / [HA]).

Gdy [A⁻] = [HA], logarytm wynosi 0 i pH = pKa. Gdy stosunek zmienia się o 10 razy, pH zmienia się o 1 jednostkę.
:::

::: adv | Przykład obliczenia | poziom rozszerzony
Bufor octanowy: [CH₃COO⁻] = 0,1 mol/dm³, [CH₃COOH] = 0,1 mol/dm³, pKa = 4,76.
pH = 4,76 + log(0,1 / 0,1) = 4,76 + 0 = 4,76.
:::

## 5 | Klinika błędów {#klinika} [[understand:ROZUMIENIE]]

::: klinika | Błąd | Poprawnie | Dlaczego?
| „Bufor utrzymuje pH dokładnie stałe.” | Bufor ogranicza zmianę pH. | Po dodaniu kwasu lub zasady pH zmienia się, ale mniej niż w roztworze niezbuforowanym. |
| „Każda sól z kwasem tworzy bufor.” | Bufor tworzy sprzężona para kwas–zasada. | Potrzebne są oba składniki pary sprzężonej w porównywalnych ilościach. |
| „HCl i NaCl tworzą bufor.” | HCl i NaCl nie tworzą buforu. | Cl⁻ jest bardzo słabą zasadą i nie wiąże istotnie H₃O⁺. |
| „Bufor octanowy to sama sól CH₃COONa.” | Bufor octanowy to CH₃COOH/CH₃COO⁻. | Potrzebny jest zarówno kwas, jak i jego sprzężona zasada. |
| „Po dodaniu NaOH do bufora octanowego zużywa się CH₃COO⁻.” | Zużywa się CH₃COOH. | OH⁻ reaguje z kwasowym składnikiem buforu: OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O. |
| „Po dodaniu HCl do bufora octanowego zużywa się CH₃COOH.” | Zużywa się CH₃COO⁻. | H₃O⁺ reaguje z zasadowym składnikiem buforu: H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O. |
| „Bufor ma nieograniczoną pojemność.” | Pojemność buforu jest ograniczona. | Po zużyciu jednego ze składników bufor przestaje skutecznie stabilizować pH. |
| „Bufor działa najlepiej, gdy pH jest dowolne.” | Bufor działa najlepiej, gdy pH jest bliskie pKa. | Wtedy stężenia kwasu i sprzężonej zasady są zbliżone. |
| „Równanie Hendersona-Hasselbalcha stosuje się do każdego roztworu.” | Stosuje się je do układów zawierających sprzężoną parę kwas–zasada. | Bez pary sprzężonej nie ma sensownego stosunku [zasada]/[kwas]. |
| „Bufor wodorowęglanowy utrzymuje pH krwi dokładnie 7,4.” | Bufor pomaga utrzymywać pH krwi bliskie 7,4. | Organizm reguluje pH wieloma mechanizmami; bufor jest jednym z nich. |
:::

::: mity
„Bufor to po prostu mocna zasada dodana do mocnego kwasu.” || Bufor zawiera słaby kwas i jego sprzężoną zasadę albo słabą zasadę i jej sprzężony kwas. Mocny kwas z mocną zasadą tworzy sól i wodę, a nie bufor.

„Bufor eliminuje dodany kwas lub zasadę.” || Bufor przekształca je w składniki pary sprzężonej. Nie usuwa ich całkowicie z układu.

„Im więcej soli, tym zawsze lepszy bufor.” | Zbyt duża ilość jednego składnika bez odpowiedniej ilości drugiego nie zwiększa skuteczności buforowania. | Najlepiej działa układ o zbliżonych stężeniach obu składników.

„Bufor działa tak samo dobrze przy każdym pH.” || Skuteczność buforu jest największa w okolicy pKa jego kwasu.

„Bufor wodorowęglanowy działa tylko w laboratorium.” || Jest ważnym układem regulującym pH krwi.

„Po dodaniu zasady do bufora pH nie rośnie wcale.” || pH rośnie, ale zmiana jest ograniczona, dopóki bufor ma dostępny kwasowy składnik.
:::

## 6 | Ćwiczenia z kluczem {#cwiczenia} [[extra:LO]]

**Ćwiczenie 1.** Podaj skład bufora amoniakalnego.

::: odp | Klucz
NH₃/NH₄⁺. W praktyce można go przygotować z NH₃ i NH₄Cl.
:::

**Ćwiczenie 2.** Co się stanie po dodaniu NaOH do bufora octanowego?

::: odp | Klucz
OH⁻ reaguje z CH₃COOH: OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O. Zużywa się kwasowy składnik buforu, a pH rośnie tylko nieznacznie.
:::

**Ćwiczenie 3.** Dlaczego krew ma bufor?

::: odp | Klucz
Ponieważ enzymy i transport tlenu działają prawidłowo tylko w wąskim zakresie pH. Bufor wodorowęglanowy pomaga utrzymywać pH krwi bliskie 7,4.
:::

**Ćwiczenie 4.** Oblicz pH buforu o [CH₃COO⁻] = 0,2 mol/dm³, [CH₃COOH] = 0,02 mol/dm³ i pKa = 4,76.

::: odp | Klucz
pH = 4,76 + log(0,2/0,02) = 4,76 + 1 = 5,76.
:::

**Ćwiczenie 5 — mini-test samodzielny.** Odpowiedz bez zaglądania do lekcji: 1) Co to jest bufor? 2) Podaj przykład bufora octanowego. 3) Co się dzieje po dodaniu HCl do bufora CH₃COOH/CH₃COO⁻? 4) Czy bufor ma nieograniczoną pojemność? 5) Gdzie w organizmie działa ważny bufor? Potem sprawdź odpowiedzi w diagnozie.

## 7 | Słownik {#slownik} [[understand:ROZUMIENIE]]

::: slownik
Bufor :: układ ograniczający zmianę pH po dodaniu niewielkiej ilości mocnego kwasu lub mocnej zasady.
Bufor kwasowy :: układ słabego kwasu i jego sprzężonej zasady.
Bufor zasadowy :: układ słabej zasady i jej sprzężonego kwasu.
Pojemność buforu :: ilość kwasu lub zasady, którą bufor może związać, zanim przestanie skutecznie działać.
Para sprzężona :: kwas i zasada różniące się jednym protonem.
Składnik kwasowy bufora :: słaby kwas HA wiążący OH⁻.
Składnik zasadowy bufora :: sprzężona zasada A⁻ wiążąca H₃O⁺.
Równanie Hendersona-Hasselbalcha :: pH = pKa + log([zasada sprzężona]/[kwas]).
Bufor octanowy :: układ CH₃COOH/CH₃COO⁻.
Bufor amoniakalny :: układ NH₃/NH₄⁺.
Bufor wodorowęglanowy :: układ H₂CO₃/HCO₃⁻ ważny dla pH krwi.
Bufor fosforanowy :: układ związany z jonami fosforanowymi(V), ważny między innymi w organizmie.
pKa :: ujemny logarytm stałej dysocjacji kwasu Ka.
pH :: ujemny logarytm stężenia jonów H₃O⁺.
Zasada Brønsteda :: substancja zdolna przyjmować proton.
Kwas Brønsteda :: substancja zdolna oddawać proton.
Pojemność buforowa :: ilość kwasu lub zasady, jaką bufor może zneutralizować bez dużej zmiany pH.
:::

## 8 | Test {#test} [[extra:LO]]

::: test
? Co to jest bufor?
+ układ ograniczający zmianę pH po dodaniu niewielkiej ilości mocnego kwasu lub zasady
- roztwór o pH dokładnie równym 7
- każda sól rozpuszczona w wodzie
- mocny kwas zmieszany z mocną zasadą
! Bufor zawiera sprzężoną parę kwas–zasada i stabilizuje pH.

? Który układ jest buforem octanowym?
+ CH₃COOH/CH₃COO⁻
- HCl/NaCl
- NaOH/NaCl
- H₂O/NaCl
! Bufor octanowy zawiera słaby kwas octowy i jego sprzężoną zasadę CH₃COO⁻.

? Co się dzieje po dodaniu H₃O⁺ do bufora octanowego?
+ H₃O⁺ reaguje z CH₃COO⁻, tworząc CH₃COOH i H₂O
- H₃O⁺ reaguje z CH₃COOH, tworząc CH₃COO⁻
- CH₃COO⁻ znika całkowicie
- pH rośnie bardzo gwałtownie
! Zasadowy składnik buforu wiąże dodany H₃O⁺.

? Co się dzieje po dodaniu OH⁻ do bufora octanowego?
+ OH⁻ reaguje z CH₃COOH, tworząc CH₃COO⁻ i H₂O
- OH⁻ reaguje z CH₃COO⁻, tworząc CH₃COOH
- CH₃COOH znika całkowicie
- pH spada bardzo gwałtownie
! Kwasowy składnik buforu wiąże dodane OH⁻.

? Kiedy bufor działa najlepiej?
+ gdy stężenia kwasu i sprzężonej zasady są zbliżone
- gdy kwasowy składnik został całkowicie zużyty
- gdy pH jest bardzo odległe od pKa
- gdy bufor zawiera tylko sól
! Największa skuteczność występuje przy pH bliskim pKa, gdy oba składniki są dostępne w zbliżonych ilościach.

? Które równanie opisuje pH buforu?
+ pH = pKa + log([zasada sprzężona]/[kwas])
- pH = pKa − log([zasada sprzężona]/[kwas])
- pH = pKa + [zasada sprzężona]/[kwas]
- pH = pKa · [zasada sprzężona]/[kwas]
! Równanie Hendersona-Hasselbalcha łączy pH bufora z pKa i stosunkiem stężeń składników pary sprzężonej.
:::

## 8a | Fiszki {#fiszki}

::: fiszki
Co to bufor? | układ ograniczający zmianę pH po dodaniu kwasu lub zasady | basic:podstawa
Podaj skład buforu octanowego. | CH₃COOH i CH₃COONa | basic:podstawa
Co wiąże dodany H₃O⁺ w buforze? | sprzężona zasada (np. CH₃COO⁻) | understand:rozumienie
Kiedy pojemność buforu jest największa? | gdy [HA] ≈ [A⁻] | understand:rozumienie
Wzór Henderson-Hasselbalcha? | pH ≈ pKa + log([A⁻]/[HA]) | extra:LO
Jaki bufor działa we krwi? | wodorowęglanowy | basic:podstawa
:::

## 8b | Test — pytania uzupełniające {#test-uzupelnienie} [[extra:LO]]

::: test
? Który roztwór jest buforem?
- NaCl w wodzie
+ CH₃COOH z CH₃COONa
- HCl z NaCl
- sama woda
! Słaby kwas i jego sól tworzą bufor.

? Po dodaniu HCl do buforu octanowego zachodzi reakcja:
- H₃O⁺ + Cl⁻ → HCl + H₂O
+ H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O
- H₃O⁺ + Na⁺ → NaOH
- nie zachodzi żadna reakcja
! Anion CH₃COO⁻ wiąże dodany H₃O⁺.

? Najlepsza pojemność buforu występuje, gdy:
- [HA] = 0
+ [HA] ≈ [A⁻]
- [A⁻] = 0
- pH = 14
! Wtedy pH ≈ pKa.

? Który bufor działa we krwi?
- chlorkowy
+ wodorowęglanowy
- siarczanowy
- azotanowy
! Układ H₂CO₃ / HCO₃⁻ utrzymuje pH krwi.

? Które zdanie jest prawdziwe?
- Bufor utrzymuje pH absolutnie stałe.
+ Bufor ogranicza zmianę pH, a jego pojemność jest ograniczona.
- Bufor nie reaguje z kwasami.
- Każda sól z kwasem tworzy bufor.
! Bufor działa do wyczerpania składników.
:::

## 9 | Checklista {#checklista} [[understand:ROZUMIENIE]]

::: checklista
- [ ] umiem wyjaśnić, czym jest bufor
- [ ] umiem wskazać skład buforu kwasowego
- [ ] umiem wskazać skład buforu zasadowego
- [ ] umiem opisać działanie bufora po dodaniu kwasu
- [ ] umiem opisać działanie bufora po dodaniu zasady
- [ ] umiem wyjaśnić pojęcie pojemności buforu
- [ ] umiem wskazać, kiedy bufor działa najlepiej
- [ ] umiem rozpoznać układ, który nie jest buforem
- [ ] umiem zapisać równanie Hendersona-Hasselbalcha
- [ ] umiem obliczyć pH buforu
:::

### AUDYT — Perplexity, 2026-10-13 {#audyt-ulepsz}

**Poprawione:**
- Frontmatter: dodano uid, uzupełniono kicker, opis, plakietki i stopkę; zmieniono stan na „ULEPSZONA — Perplexity, 2026-10-13; do sprawdzenia”.
- Minimum: „bufor utrzymuje pH” → „bufor ogranicza zmianę pH” — bufor nie utrzymuje pH absolutnie stałego.
- Minimum: „bufor kwasowy to słaby kwas + sól” → doprecyzowano, że sól musi dostarczać sprzężoną zasadę.
- Minimum: „bufor zasadowy to słaba zasada + sól” → doprecyzowano, że sól musi dostarczać sprzężony kwas.
- Mechanizm: „H₃O⁺ zostaje związany” → doprecyzowano reakcję z CH₃COO⁻ i powstanie CH₃COOH oraz H₂O.
- Mechanizm: „OH⁻ zostaje związany” → doprecyzowano reakcję z CH₃COOH i powstanie CH₃COO⁻ oraz H₂O.
- Równanie Hendersona-Hasselbalcha: „pH = pKa + log A/HA” → pełny zapis pH = pKa + log([zasada sprzężona]/[kwas]).
- Przykład pH bufora: poprawiono zapis logarytmu i wyjaśniono wynik 5,76.
- Test i ćwiczenia: poprawiono sformułowania o „znikaniu” składników — składniki są zużywane, a nie usuwane całkowicie z układu.

**Dodane:**
- §0.1–§0.3: cel, kompas, diagnoza z kluczem i interpretacją wyniku.
- §1: pełny wykład od zera, obraz bufora jako magazynu protonów, definicja pojemności i warunek największej skuteczności.
- §2: tabela reakcji bufora octanowego oraz analogiczne reakcje bufora amoniakalnego.
- §3: wyjaśnienie roli soli, słabego kwasu i słabej zasady oraz przykłady niewłaściwych układów.
- §4: cztery przykłady prowadzone, w tym obliczenie pH buforu.
- §5: klinika 10 błędów i 6 mitów.
- §6: ćwiczenia z kluczem i mini-test samodzielny.
- §7: słownik 16 haseł.
- §8: test 6 pytań.
- §9: checklista.

**Niepewne / do weryfikacji:**
- Zakres konkretnego konkursu chemicznego nie został określony w paczce, dlatego wymagania konkursowe opisano ogólnie.
- Wartość pKa kwasu octowego około 4,76 oraz pKa jonu NH₄⁺ około 9,26 dotyczą warunków wodnych w temperaturze zbliżonej do pokojowej; w zadaniach należy używać danych podanych w poleceniu.
- Opis buforu wodorowęglanowego krwi jest uproszczeniem; pełny opis uwzględnia również układ oddechowy i nerki.

**Proponuję usunąć:**
- Brak.

**Źródła:**
- Dostarczona paczka: lekcja J09.
- Zintegrowana Platforma Edukacyjna — materiały o równowagach kwasowo-zasadowych, pH i układach buforowych.

**Grafiki do zrobienia:**

| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |
|---|---|---|---|---|
| §1, po definicji bufora | schemat statyczny | zbiornik z dwoma składnikami: HA wiążącym OH⁻ i A⁻ wiążącym H₃O⁺ | Bufor ma dwa składniki o przeciwnych funkcjach | Po lewej stronie znajduje się kwas HA ze strzałką do OH⁻, po prawej sprzężona zasada A⁻ ze strzałką do H₃O⁺. W środku znajduje się wskaźnik pH, który zmienia się tylko nieznacznie. |
| §2, po tabeli reakcji bufora | animacja „do przodu i od początku” | dodanie H₃O⁺ lub OH⁻ do bufora octanowego i reakcja z odpowiednim składnikiem | Bufor przekształca dodany kwas lub zasadę w składnik pary sprzężonej | Animacja pokazuje dwie ścieżki: H₃O⁺ + CH₃COO⁻ → CH₃COOH + H₂O oraz OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O. Po zakończeniu można odtworzyć sekwencję od początku. |
| §3, po warunku [HA] ≈ [A⁻] | wykres liniowy | zależność skuteczności buforu od odległości pH od pKa | Bufor działa najlepiej, gdy pH jest bliskie pKa | Oś pozioma przedstawia pH, oś pionowa względną skuteczność buforowania. Maksimum znajduje się przy pH równym pKa, a po obu stronach krzywa opada. |
| §4, przy buforze wodorowęglanowym | schemat statyczny | układ H₂CO₃/HCO₃⁻ wiążący H₃O⁺ lub OH⁻ | Bufor pomaga stabilizować pH krwi | Schemat pokazuje H₂CO₃ wiążące OH⁻ oraz HCO₃⁻ wiążące H₃O⁺. W centrum znajduje się wartość pH krwi bliska 7,4. |

## 10 | Ciekawostki {#ciekawostki}

::: karta extra | Dlaczego pH krwi nie może się bardzo zmienić?
Prawidłowe pH krwi mieści się w wąskim zakresie ok. 7,35–7,45. Odchylenia poza ten zakres są groźne dla zdrowia, dlatego organizm ma kilka buforów oraz płuca, które usuwają nadmiar CO₂.
:::

::: karta extra | Bufory w akwarium i basenie
Akwaryści i baseniarze dodają preparaty buforujące, by pH wody nie skakało po dodaniu nawozów lub środków dezynfekcyjnych. Działają one na tej samej zasadzie co bufor w laboratorium.
:::

## 11 | Wykład — stabilność, która ma swoją granicę {#wyklad}

::: karta understand | Wykład — od zera: dlaczego bufor „amortyzuje”
Wyobraź sobie sprężynę w samochodzie: przyjmuje uderzenia i nie pozwala, by wstrząs przeszedł na pasażera. Bufor robi coś podobnego z pH. Dodawany kwas nie od razu zmienia pH, bo najpierw reaguje z zasadą buforu. Podobnie z zasadą.

Ta amortyzacja ma jednak limit. Sprężyna może się ugiąć tylko do pewnego punktu, a bufor ma tylko określoną ilość składników. Po ich wyczerpaniu pH zaczyna gwałtownie się zmieniać.

**Mini-wykład: dlaczego połowa na połowę.** Najlepiej amortyzuje bufor, który ma tyle samo kwasu i jego soli. Wtedy zarówno zasada, jak i kwas buforu są w zapasie, więc można „zjeść” dodany kwas albo zasadę w podobnym stopniu. Stąd warunek pH ≈ pKa.

**Mini-wykład: bufor a woda.** Woda nie jest buforem. Dodany kwas czy zasada zmieni w niej pH znacznie bardziej, bo nie ma składnika wiążącego jony H₃O⁺ lub OH⁻.
:::

::: karta core | W skrócie — bufor w jednym zdaniu
Bufor to para sprzężona kwasu i zasady, która zużywa dodany kwas lub zasadę, dzięki czemu pH zmienia się mało, dopóki składniki nie zostaną zużyte.
:::

## 12 | Checklista — umiem… {#checklista}

::: checklista
- [ ] wskazać skład buforu (słaby kwas + sól lub słaba zasada + sól);
- [ ] opisać, co dzieje się po dodaniu kwasu i po dodaniu zasady;
- [ ] wyjaśnić, dlaczego pojemność buforu jest ograniczona;
- [ ] podać przykład buforu w organizmie;
- [ ] (LO) obliczyć pH buforu z równania Henderson-Hasselbalcha.
:::
