---
kod: N02
uid: 
tytul: Wodorotlenki i zasady
opis: 
kicker: N02 · CHEMIA · MASTER LAB v9.0
lead: Kation metalu + OH⁻ → wzór M(OH)ₙ, nawias i nazwy; rozpuszczalność, wodorotlenek a zasada, dysocjacja i odczyn; trzy metody otrzymywania, strącanie, zobojętnianie, wskaźniki, amfoteryczność. Modele, liczby i równania z silnika CHE.HYDROXIDES.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNIE / LO]]
stopka: **CHEMIA N02 v9.0** · Wodorotlenki · 2026
---
::: minimum | Muszę umieć na E8 — 8 kluczowych faktów
1. **Wodorotlenek** to związek zbudowany z kationu metalu i anionu wodorotlenkowego <span class="hl">OH⁻</span>.
2. **Wzór ogólny: <span class="formula">M(OH)ₙ</span>**, gdzie <span class="hl">n</span> oznacza liczbę grup wodorotlenkowych. W **typowych wodorotlenkach metali na poziomie klasy 8** liczba ta jest równa wartości bezwzględnej ładunku kationu, np. Ca²⁺ tworzy Ca(OH)₂. **Nie utożsamiaj indeksu z samym ładunkiem zapisanym ze znakiem „+”**.
3. **Nawias** stosujemy, gdy grupa OH⁻ występuje więcej niż raz: <span class="formula">NaOH</span> vs <span class="formula">Ca(OH)₂</span>.
4. **Zobojętnianie:** <span class="hl-warn">wodorotlenek + kwas → sól + woda</span>.
5. **Odczyn:** roztwór dobrze rozpuszczalnego wodorotlenku ma <span class="hl">odczyn zasadowy</span>. Wodorotlenki trudno rozpuszczalne dają bardzo mało jonów OH⁻.
6. **Trzy typowe szkolne sposoby otrzymywania wybranych wodorotlenków:** tlenek + woda, metal aktywny + woda, sól + zasada (strącanie).
7. **NaOH/KOH** są higroskopijne i żrące; roztwór to elektrolit o odczynie zasadowym.
8. **Woda wapienna** to nasycony roztwór Ca(OH)₂ — mętnieje po przepuszczeniu odpowiedniej ilości CO₂.
:::

::: warstwy
- e8 | <b>E8 — obowiązkowo:</b> grupa OH⁻, wzory, zobojętnianie, rozpuszczalność szkolna
- understand | <b>Rozumienie:</b> skąd nawias, wodorotlenek vs zasada, dlaczego nie każdy tlenek reaguje z wodą
- extra | <b>Nadprogramowo:</b> amfoteryczność, równania jonowe, hydraty
- contest | <b>Konkurs / liceum:</b> moc zasad, AgOH, CuOH, teorie kwasów i zasad
:::

::: rdzen {#rdzen-lekcji} | Rdzeń lekcji — najpierw to (ok. 30 min)
1. **[§5](#budowa)** — grupa OH⁻, wzór ogólny, nawias, nazwy.
2. **Model „Wzór wodorotlenku”** ([§5.2](#wzor-ogolny)) — zbuduj wzory dla Na, Ca, Al, Fe(III).
3. **Rozpuszczalność, zasada i odczyn** ([§6](#wlasciwosci)) — tabela rozpuszczalności, dysocjacja, wskaźniki.
4. **Otrzymywanie + Laboratorium jonowe** ([§7](#otrzymywanie), [§12](#ion-lab)) — zobacz, jak powstaje osad.
5. **Zobojętnianie** ([§8.1](#zobojetnianie)) — animacja i licznik moli.
6. **pH i wskaźniki + Lab** ([§6.4](#ph-wskazniki)) — przewiduj odczyn.
7. **Klinika błędów + Ćwiczenia + Test** ([§16](#klinika)–[§18](#test)).
:::

## 1 | Wprowadzenie {#wprowadzenie .section}

::: karta core | O co tu właściwie chodzi?
W poprzedniej lekcji poznałeś **tlenki**. Wiesz już, że <span class="hl">część tlenków zasadowych</span> — zwłaszcza tlenki metali aktywnych — reaguje z wodą, tworząc **wodorotlenki**. Ale co to właściwie jest? Jak wygląda wzór? Jak nazwać taki związek? I dlaczego jedne wodorotlenki rozpuszczają się w wodzie, a inne nie?

Odpowiedzi prowadzą przez <span class="hl">grupę wodorotlenkową OH⁻</span> — jeden mały klocek, który decyduje o właściwościach całej grupy związków.
:::

> Trzy fakty na start — OH⁻ ma ładunek −1; liczba grup OH⁻ odpowiada wartości bezwzględnej ładunku kationu; nawias stawiamy tylko przy więcej niż jednej grupie — zebrano w karcie [Minimum E8](#minimum), a pełne wyjaśnienie z przykładami jest w [§5](#budowa).

## 2 | Cele lekcji [[basic:E8]] {#cele .section}

::: karta basic | Po tej lekcji uczeń:
- **zapisuje** wzór wodorotlenku na podstawie kationu metalu,
- **stosuje** nawias, gdy grupa OH⁻ powtarza się więcej niż raz,
- **nazywa** wodorotlenki (w tym z cyfrą rzymską dla Fe, Cu, Sn, Pb),
- **zapisuje** otrzymywanie wodorotlenku trzema typowymi metodami szkolnymi,
- **zapisuje** reakcję zobojętniania,
- **rozróżnia** wodorotlenki rozpuszczalne i nierozpuszczalne,
- **rozróżnia** substancję (wodorotlenek) od roztworu (zasada),
- **opisuje** odczyn zasadowy i wskaźniki,
- **opisuje** właściwości NaOH, KOH i Ca(OH)₂ (higroskopijność, BHP, wapno i woda wapienna),
- (ambitnie) **wyjaśnia** amfoteryczność i równania jonowe.
:::

## 3 | Kompas — co trzeba wiedzieć wcześniej {#kompas .section}

::: karta understand
- **Wcześniej:** wartościowość, W–K–S–K, grupa OH⁻, ładunek jonu, nawias. Fundamenty F00–F09: jony, ładunek, zapis wzorów.
- **Tlenki (lekcja N01):** tlenki zasadowe (<span class="formula">Na₂O</span>, <span class="formula">K₂O</span>, <span class="formula">CaO</span>, <span class="formula">BaO</span>) reagują z wodą → wodorotlenki. Tlenki amfoteryczne (<span class="formula">Al₂O₃</span>, <span class="formula">ZnO</span>) reagują z kwasami i zasadami.
- **Uwaga:** określenie „tlenek zasadowy” nie oznacza automatycznie, że tlenek reaguje z wodą (CuO — nie, MgO — bardzo powoli); szczegóły i lista tlenków reagujących z wodą — [§7.1](#uwaga-tlenki).
:::

## 4 | Pytanie przewodnie i problem startowy {#pytanie .section}

::: karta core
<p style="font-size:17px;font-weight:700;line-height:1.6;">Jak zbudowany jest wodorotlenek i dlaczego jedne rozpuszczają się w wodzie, a inne nie?</p>
:::

::: karta warning {#problem}
**Masz do dyspozycji:** tlenek wapnia <span class="formula">CaO</span>, tlenek sodu <span class="formula">Na₂O</span>, metaliczny sód <span class="formula">Na</span>, metaliczny magnez <span class="formula">Mg</span>, wodorotlenek sodu <span class="formula">NaOH</span>, chlorek żelaza(III) <span class="formula">FeCl₃</span>.

**Pytanie:** Jak otrzymać <span class="formula">Ca(OH)₂</span>? Jak otrzymać <span class="formula">Fe(OH)₃</span>? Jak otrzymać <span class="formula">NaOH</span>?

::: odp | Pokaż rozwiązanie — trzy szkolne metody
**W szkolnych zadaniach spotkasz trzy typowe sposoby otrzymywania wybranych wodorotlenków:**

- **Tlenek metalu aktywnego + woda → wodorotlenek** (<span class="formula" data-rx="caoH2o">CaO + H₂O → Ca(OH)₂</span>).
- **Metal aktywny + woda → wodorotlenek + wodór↑** (<span class="formula" data-rx="naH2o">2Na + 2H₂O → 2NaOH + H₂↑</span>).
- **Sól metalu + zasada → wodorotlenek↓ + sól** (<span class="formula" data-rx="fecl3Naoh">FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl</span>).

Ca(OH)₂ — z CaO i wody (metoda 1); Fe(OH)₃ — z FeCl₃ i NaOH (metoda 3, strącanie); NaOH — z sodu i wody (metoda 2) albo z Na₂O i wody (metoda 1). Magnez reaguje z wodą dopiero na gorąco, dlatego Mg(OH)₂ wygodniej otrzymać przez strącanie ([§7.2](#stracanie)).

<p class="mini-note" style="margin-top:10px;">To nie są uniwersalne metody dla każdego wodorotlenku — dotyczą wybranych związków i warunków szkolnych.</p>
:::
:::

## 5 | Definicja, budowa i nazewnictwo [[basic:E8]] {#budowa .section}

### 5.1 Definicja i grupa wodorotlenkowa OH⁻ {#definicja}

::: karta basic
**Wodorotlenki** to związki chemiczne zbudowane z:

- **kationów metalu** (lub jonu amonowego <span class="formula">NH₄⁺</span>),
- **anionów wodorotlenkowych <span class="hl">OH⁻</span>**.

<p style="margin-top:10px;">Wzór ogólny: <span class="formula-lg">M(OH)ₙ</span>, gdzie <strong>M</strong> = metal, <strong>OH⁻</strong> = grupa wodorotlenkowa o ładunku −1, <strong>n</strong> = liczba grup OH⁻. W <strong>typowych wodorotlenkach metali na poziomie klasy 8</strong> liczba grup OH⁻ jest równa wartości bezwzględnej ładunku kationu, np. Ca²⁺ tworzy Ca(OH)₂. W bardziej złożonych przypadkach (np. jony kompleksowe, hydraty) reguła ta nie obowiązuje.</p>
:::

::: karta core {#grupa-oh}
::: slownik {.def-list}
Nazwa :: Grupa wodorotlenkowa (anion wodorotlenkowy).
Wzór :: <span class="formula">OH⁻</span>
Ładunek :: **−1**
Skład :: 1 atom tlenu + 1 atom wodoru, jako całość ma ładunek −1.
Traktowanie w zadaniach :: Jeden klocek (całość), nie osobne O i H.
:::

<div class="rule-box"><b>Zapamiętaj:</b> OH⁻ to <strong>jedna grupa</strong>. Nawet jeśli składa się z dwóch atomów, traktujemy ją jak jeden element.</div>

<div class="rule-box" style="background:var(--c-warn-bg);border-color:var(--c-warn-line);"><b>Wodorotlenek ≠ alkohol:</b> w <span class="formula">OH⁻</span> mamy jon wodorotlenkowy. W alkoholu występuje <strong>grupa hydroksylowa <span class="formula">−OH</span> połączona kowalencyjnie z atomem węgla</strong>, ale <strong>nie jest ona osobnym jonem OH⁻</strong>. To zupełnie inna chemia (związek organiczny). Alkohol zapisujemy ogólnie jako R–OH, gdzie R to fragment węglowy; wodorotlenek to kation metalu (albo NH₄⁺) + OH⁻.</div>
:::

### 5.2 Wzór ogólny M(OH)ₙ — jak go zbudować? {#wzor-ogolny}

**Cel:** uczeń ma nie tylko znać regułę, ale wiedzieć, co zrobić w następnym kroku i jak sprawdzić wynik. {.lead}

::: rdzen | Nie zapamiętuj wzorów osobno — odtwórz je z ładunków.
1. Kation metalu ma ładunek dodatni (np. <span class="formula">Ca²⁺</span>).
2. Grupa OH⁻ ma zawsze ładunek −1.
3. Związek jako całość jest elektrycznie obojętny.
:::

::: karta core
**Krok po kroku:**

1. Zapisz kation metalu (np. <span class="formula">Ca²⁺</span>).
2. Odczytaj jego ładunek (np. **+2**).
3. Zapisz <span class="formula">OH⁻</span> jako jeden jon (−1). Dobierz liczbę grup OH⁻ tak, aby suma ładunków wynosiła 0. Tyle samo grup OH⁻ musisz przyłączyć.
4. Zapisz wzór: <span class="formula">Ca(OH)₂</span>.
5. **Kontrola:** suma ładunków = 0; nawias, gdy grup OH⁻ jest więcej niż jedna; indeks za nawiasem mnoży wszystkie atomy w środku. Sprawdź indeks: ma dotyczyć całej grupy, nie tylko H. Przykład: <span class="formula">(+2) + 2·(−1) = 0</span>.

<p class="mini-note" style="margin-bottom:8px;">Liczba grup OH⁻ = wartość bezwzględna ładunku kationu (w prostych wodorotlenkach). W tabeli jest jedna kolumna <b>n</b> oznaczająca właśnie liczbę grup OH⁻.</p>

::: div.table-wrap.table-compact
<table>
<thead><tr><th>Kation</th><th>n (liczba OH⁻)</th><th>Wzór</th><th>Nazwa</th></tr></thead>
<tbody>
<tr><td>Na⁺</td><td>1</td><td><strong>NaOH</strong></td><td>wodorotlenek sodu</td></tr>
<tr><td>K⁺</td><td>1</td><td><strong>KOH</strong></td><td>wodorotlenek potasu</td></tr>
<tr><td>Ca²⁺</td><td>2</td><td><strong>Ca(OH)₂</strong></td><td>wodorotlenek wapnia</td></tr>
<tr><td>Mg²⁺</td><td>2</td><td><strong>Mg(OH)₂</strong></td><td>wodorotlenek magnezu</td></tr>
<tr><td>Ba²⁺</td><td>2</td><td><strong>Ba(OH)₂</strong></td><td>wodorotlenek baru</td></tr>
<tr><td>Al³⁺</td><td>3</td><td><strong>Al(OH)₃</strong></td><td>wodorotlenek glinu</td></tr>
<tr><td>Fe²⁺</td><td>2</td><td><strong>Fe(OH)₂</strong></td><td>wodorotlenek żelaza(II)</td></tr>
<tr><td>Fe³⁺</td><td>3</td><td><strong>Fe(OH)₃</strong></td><td>wodorotlenek żelaza(III)</td></tr>
<tr><td>Cu²⁺</td><td>2</td><td><strong>Cu(OH)₂</strong></td><td>wodorotlenek miedzi(II)</td></tr>
<tr><td>Zn²⁺</td><td>2</td><td><strong>Zn(OH)₂</strong></td><td>wodorotlenek cynku</td></tr>
</tbody>
</table>
:::
:::

<div class="rule-box">
<b>Co naprawdę oznacza indeks n?</b> <strong>n oznacza liczbę całych grup OH⁻.</strong> W typowych prostych wodorotlenkach szkolnych jest ona równa wartości bezwzględnej ładunku kationu.
<div class="equation-box"><strong>Al³⁺ → 3 × OH⁻ → Al(OH)₃ → (+3) + 3·(−1) = 0</strong></div>
<p style="margin-top:8px;">Nie należy utożsamiać indeksu z samym ładunkiem zapisanym ze znakiem „+”. n to liczba grup OH⁻, a nie „ładunek kationu” jako taki.</p>
</div>

<div class="mnemonic">
<b>Mnemotechnika:</b> „<span class="hl">OH⁻ to klocek o ładunku −1</span>. Kation metalu mówi, ile klocków potrzebuje." Na⁺ → 1 klocek. Ca²⁺ → 2 klocki. Al³⁺ → 3 klocki. Nie rozbijaj grupy na O i H w zadaniach.
</div>

#### Model interaktywny — bilans ładunków i konstruktor wzorów {#wzorometr .merge-h}

@model n02-wzory-v01 | Wzór wodorotlenku: kation + OH⁻ — bilans ładunków, nawias, modele A/B/jony, sprawdzanie wzoru | Zastępuje Wzórometr, Bilansator, Konstruktor i animację nawiasu · CHE.HYDROXIDES.build / check
@opis Konstruktor wzoru wodorotlenku: kation metalu łączy się z odpowiednią liczbą anionów OH⁻, aż ładunki się zrównoważą; model pokazuje zapis z nawiasem (np. Ca(OH)₂, Al(OH)₃) w trzech ujęciach — wzór, model kulkowy i jony — i sprawdza wpisany wzór. Wniosek: liczba grup OH⁻ równa się ładunkowi (wartościowości) metalu, a nawias obejmuje całą grupę.

Dodawaj grupy OH⁻, aż suma ładunków wyniesie zero. Wybierz kation i dodawaj grupy OH⁻, aż powstanie poprawny wzór.

> Bilans ładunków jest częścią modelu z tej podsekcji: pasek „+” (kation) i „−” (grupy OH⁻), suma ładunków i przycisk „dobierz automatycznie”.

> Konstruktor = ten sam model z tej podsekcji: pole „Sprawdź swój wzór” rozpoznaje brak nawiasu (CaOH₂), zbędny nawias (Na(OH)) i złą liczbę grup OH⁻.

### 5.3 Nawias — kiedy i dlaczego? {#nawias}

::: karta warning
**Nawias stosujemy, gdy grupa OH⁻ występuje więcej niż raz.**

**Przykłady:**

- <span class="formula">NaOH</span>, <span class="formula">KOH</span> — bez nawiasu (1 grupa, n = 1).
- <span class="formula">Ca(OH)₂</span> — z nawiasem (2 grupy).
- <span class="formula">Al(OH)₃</span> — z nawiasem (3 grupy, n > 1).

<div class="rule-box">
<b>Dlaczego to ważne?</b> <span class="hl-warn">CaOH₂</span> sugeruje, że indeks 2 dotyczy tylko wodoru — to błąd. <span class="formula">Ca(OH)₂</span> mówi jasno: dwie całe grupy OH⁻. <strong>Ca(OH)₂ = Ca₁O₂H₂</strong>.
      </div>

> Cztery kroki „CaOH₂ → Ca(OH)₂” (błędny zapis → co jest nie tak → poprawa → co to znaczy) pokazuje model z [§5.2](#wzor-ogolny) w części „Dlaczego nawias?” dla każdego kationu.

<div class="mnemonic">
<b>Mnemotechnika:</b> „<span class="hl">Nawias to pudełko na grupę</span>." Wszystko, co w pudełku, powtarza się tyle razy, ile mówi indeks za nawiasem.
      </div>
:::

### 5.4 Nazwy wodorotlenków {#nazwy}

::: karta core
**Reguła:** „wodorotlenek" + nazwa metalu. Jeżeli metal może tworzyć kationy o różnych ładunkach, w nazwie podaje się stopień utlenienia cyfrą rzymską.

::: slownik {.def-list}
<span class="formula">NaOH</span> :: wodorotlenek sodu
<span class="formula">Ca(OH)₂</span> :: wodorotlenek wapnia
<span class="formula">Al(OH)₃</span> :: wodorotlenek glinu
<span class="formula">Fe(OH)₂</span> :: wodorotlenek żelaza(II)
<span class="formula">Fe(OH)₃</span> :: wodorotlenek żelaza(III)
<span class="formula">Cu(OH)₂</span> :: wodorotlenek miedzi(II)
:::

Metale ze zmiennym stopniem utlenienia (np. Fe, Cu, Sn, Pb, Mn, Cr) — wymagają cyfry rzymskiej.

::: karta extra | CuOH i AgOH — tylko jako ciekawostka
<span class="level-badge level-extra">AMBITNE</span>

\<span class="formula">CuOH</span> (formalny wodorotlenek miedzi(I)) jest nietrwały — w typowych warunkach szkolnego doświadczenia przechodzi w tlenek miedzi(I):

<p style="margin-top:8px;"><span class="formula-lg">2CuOH → Cu₂O + H₂O</span></p>

\<span class="formula">AgOH</span> (wodorotlenek srebra(I)) również jest nietrwały i rozpada się do tlenku srebra(I):

<p style="margin-top:8px;"><span class="formula-lg">2AgOH → Ag₂O + H₂O</span></p>

Dlatego w zadaniach szkolnych najczęściej stosuje się **Cu(OH)₂** oraz sole srebra(I) bezpośrednio w reakcjach strąceniowych.

**AgOH — wyjaśnienie:** W warunkach doświadczenia szybko przekształca się w Ag₂O, dlatego nie traktuje się go jako trwałego, izolowanego wodorotlenku. Nie używaj sformułowania „nie istnieje” — jest ono zbyt uproszczone.
:::
:::

## 6 | Właściwości: rozpuszczalność, zasada, dysocjacja i odczyn [[basic:E8]] {#wlasciwosci .section}

### 6.1 Stan skupienia, higroskopijność i właściwości NaOH / KOH {#higroskopijnosc}

::: karta basic | Stan skupienia
W temperaturze pokojowej **wodorotlenki są ciałami stałymi** (kryształy, proszki, osady). „Zasada sodowa w butelce” to już *wodny roztwór wodorotlenku sodu*, nazywany ługiem sodowym, a nie czysty wodorotlenek.
:::

::: karta warning | Higroskopijność
**Higroskopijność** — zdolność substancji do pochłaniania wilgoci z powietrza.

\<span class="formula">NaOH</span> i <span class="formula">KOH</span> są substancjami silnie higroskopijnymi i żrącymi: pozostawione na powietrzu „rozpływają się”, bo wchłaniają wodę i tworzą stężony roztwór. Dlatego przechowuje się je w szczelnych naczyniach.

**Przy rozpuszczaniu w wodzie** wydziela się dużo ciepła (rozpuszczanie NaOH w wodzie przebiega z wydzieleniem ciepła) — naczynie może się mocno nagrzać. Zasady bezpiecznej pracy (ochrona, kolejność dodawania, pierwsza pomoc): [§9.2](#bhp).

**Porównanie:** KOH jest jeszcze lepiej rozpuszczalny w wodzie niż NaOH, ale oba są silnie żrące i higroskopijne.
:::

::: div.hygro-box#hygroBox
<div aria-hidden="true" class="hygro-crystal"><span class="w"></span><span class="w"></span><span class="w"></span><span class="w"></span></div>

<div style="flex:1;min-width:200px">
<strong>Higroskopijność NaOH / KOH</strong>
<p style="margin:6px 0 0;font-size:13.5px;color:var(--text-soft)">Stały NaOH „ciągnie” parę wodną z powietrza → powierzchnia robi się mokra / roztwór. Dlatego trzymamy w szczelnym naczyniu i nie zostawiamy otwartego na stole.</p>
</div>
:::

### 6.2 Rozpuszczalność wodorotlenków — tabela (odczyt jak na klasówce) {#rozpuszczalnosc-tabela}

::: karta basic | Szybka reguła rozpuszczalności (E8)
- **Dobrze rozpuszczalne** (dają zasadę): wodorotlenki metali 1. grupy (NaOH, KOH, LiOH) oraz Ba(OH)₂; Ca(OH)₂ — trudno, ale tworzy wodę wapienną.
- **Trudno rozpuszczalne / praktycznie nierozpuszczalne** (osady): Fe(OH)₂, Fe(OH)₃, Cu(OH)₂, Al(OH)₃, Zn(OH)₂, Mg(OH)₂.
- **Odczyn zasadowy** ma tylko roztwór, w którym jest wystarczająco dużo wolnych OH⁻ — więc głównie dobrze rozpuszczalne wodorotlenki.
:::

::: div.table-wrap.table-compact
<table>
<thead><tr><th>Wodorotlenek</th><th>W wodzie</th><th>ok. g/100 mL (20 °C)</th><th>Odczyn</th><th>Uwagi E8</th></tr></thead>
<tbody>
<tr class="sol-good" data-hy="NaOH" data-hy-sol="R"><td>NaOH</td><td><strong>dobrze</strong><div class="sol-bar"><div class="track"><div class="fill-sol good"></div></div></div></td><td>~109</td><td>silnie zasadowy</td><td>zasada; <strong>higroskopijny</strong></td></tr>
<tr class="sol-good" data-hy="KOH" data-hy-sol="R"><td>KOH</td><td><strong>dobrze</strong><div class="sol-bar"><div class="track"><div class="fill-sol good"></div></div></div></td><td>~112</td><td>silnie zasadowy</td><td>zasada; higroskopijny</td></tr>
<tr class="sol-good" data-hy="Ba(OH)2" data-hy-sol="R"><td>Ba(OH)₂</td><td><strong>rozpuszczalny</strong><div class="sol-bar"><div class="track"><div class="fill-sol good"></div></div></div></td><td>~3,9 (8H₂O)</td><td>zasadowy</td><td>Ba²⁺ toksyczny — nie w doświadczeniach uczniowskich</td></tr>
<tr class="sol-mid" data-hy="Ca(OH)2" data-hy-sol="T"><td>Ca(OH)₂</td><td><strong>trudno</strong><div class="sol-bar"><div class="track"><div class="fill-sol mid"></div></div></div></td><td>~0,17</td><td>zasadowy (woda wapienna)</td><td>nasycony roztwór do CO₂; mleko wapienne = zawiesina</td></tr>
<tr class="sol-mid" data-hy="Mg(OH)2" data-hy-sol="N"><td>Mg(OH)₂</td><td><strong>praktycznie nierozp.</strong> (szkolnie: „trudno”)<div class="sol-bar"><div class="track"><div class="fill-sol mid"></div></div></div></td><td>~0,001</td><td>słabo zasadowy</td><td>mleko magnezowe; mało OH⁻</td></tr>
<tr class="sol-bad" data-hy="Cu(OH)2" data-hy-sol="N"><td>Cu(OH)₂</td><td><strong>nierozp.</strong><div class="sol-bar"><div class="track"><div class="fill-sol bad"></div></div></div></td><td>~0</td><td>brak wyraźnego</td><td>niebieski osad ↓</td></tr>
<tr class="sol-bad" data-hy="Fe(OH)3" data-hy-sol="N"><td>Fe(OH)₃</td><td><strong>nierozp.</strong><div class="sol-bar"><div class="track"><div class="fill-sol bad"></div></div></div></td><td>~0</td><td>brak wyraźnego</td><td>brunatny osad ↓ · vs NaOH: prawie „neutralny” osad</td></tr>
<tr class="sol-bad" data-hy="Al(OH)3,Zn(OH)2" data-hy-sol="N"><td>Al(OH)₃, Zn(OH)₂</td><td><strong>nierozp.</strong><div class="sol-bar"><div class="track"><div class="fill-sol bad"></div></div></div></td><td>~0</td><td>brak wyraźnego</td><td>amfoteryczne (amb)</td></tr>
</tbody>
</table>
:::

> **Reguła E8:** rozpuszczalność ↔ siła odczynu w roztworze. Dużo wolnych OH⁻ (NaOH) = mocno zasadowy; osad Cu(OH)₂/Fe(OH)₃ ≈ brak typowego odczynu zasadowego w wodzie. Wartości g/100 mL — orientacyjne (podręcznik / tablice).

@model tabela-rozpuszczalnosci-v01 | Tabela rozpuszczalności (20 °C) — kolumna OH⁻ i wszystkie sole | To samo źródło danych co ta lekcja · CHE.DATA.SOLUBILITY_TABLE
@opis Tabela rozpuszczalności w temperaturze 20 °C: wiersze kationów, kolumny anionów (w tym OH⁻), komórki oznaczone jako substancja rozpuszczalna, trudno rozpuszczalna lub praktycznie nierozpuszczalna. Wniosek: z tabeli odczytuje się, który wodorotlenek lub sól wytrąci się jako osad.

Jeden widok pokazuje pierwiastek, wartościowość, wzór wodorotlenku, rozpuszczalność i barwę osadu. Kliknij kafelek — szczegóły pojawią się na stałe pod spodem. {#wodor-grid}

@model n02-przeglad-v01 | Wodorotlenki — kafelki: rozpuszczalność, barwa osadu, odczyn, dysocjacja, metody otrzymywania | CHE.DATA.HYDROXIDES + D.SOLUBILITY_TABLE
@opis Kafelki wodorotlenków: dla każdego podany jest wzór, rozpuszczalność, barwa osadu (np. Cu(OH)₂ niebieski, Fe(OH)₃ brunatnoczerwony), odczyn roztworu, równanie dysocjacji i metody otrzymywania. Wniosek: tylko wodorotlenki rozpuszczalne tworzą zasady; nierozpuszczalne poznaje się po barwie osadu.

### 6.3 Wodorotlenek a zasada; elektrolit i dysocjacja {#wodorotlenek-vs-zasada}

::: karta basic
**Wodorotlenek** to związek chemiczny zawierający kation metalu i aniony OH⁻. Może być substancją stałą (stały NaOH) lub osadem (Cu(OH)₂).

**Zasadą** w szkolnym ujęciu nazywamy *wodny roztwór niektórych wodorotlenków*, który zawiera jony OH⁻ i ma odczyn zasadowy. Dobrze rozpuszczalne wodorotlenki tworzą roztwory o wyraźnie zasadowym odczynie, natomiast trudno rozpuszczalne tworzą bardzo mało jonów OH⁻. To praktyczne uproszczenie szkolne; w szerszym ujęciu chemicznym zasadą może być także substancja niezawierająca grup OH⁻, np. amoniak NH₃.

::: slownik {.def-list}
NaOH(s) :: Wodorotlenek sodu — substancja stała. Odczyn: —
NaOH(aq) :: Roztwór, czyli zasada sodowa. Odczyn: silnie zasadowy.
Ba(OH)₂(aq) :: Roztwór wodorotlenku baru. Odczyn: zasadowy.
Ca(OH)₂(aq) :: Woda wapienna — nasycony roztwór. Odczyn: zasadowy.
Cu(OH)₂(s) :: Osad wodorotlenku miedzi(II). Jest praktycznie nierozpuszczalny, dlatego jego zawiesina nie daje wyraźnego zasadowego odczynu.
:::

> Szkolne rozróżnienie wodorotlenek / zasada / jon OH⁻ i szersze definicje zasad (amoniak, Brønsted): [§10.2](#zasada-oh).
:::

::: karta understand | Elektrolit i nieelektrolit (PP)
**Elektrolit** — substancja, której wodny roztwór (lub stop) przewodzi prąd elektryczny, bo zawiera swobodne jony.

**Nieelektrolit** — substancja, która w roztworze nie daje swobodnych jonów (np. cukier, alkohol) — roztwór nie przewodzi.

Roztwór <span class="formula">NaOH</span> jest **elektrolitem** (Na⁺ i OH⁻). Czysta woda destylowana praktycznie nie przewodzi; dodatek zasady silnie zwiększa przewodnictwo.

<div class="rule-box" style="margin-top:10px;"><b>Zapamiętaj:</b> zasada = wodny roztwór wodorotlenku → jony OH⁻ → odczyn zasadowy + przewodnictwo (elektrolit).</div>

::: div.cond-viz {aria-label="Porównanie przewodnictwa" role="img"}
::: div.cond-box.ok
<div class="cond-title">Roztwór NaOH</div>

<div class="cond-icons"></div>

<div class="cond-note">Jony Na⁺ i OH⁻ → <strong>elektrolit</strong><br/>żarówka świeci / przewodnictwo wysokie</div>
:::

::: div.cond-box.bad
<div class="cond-title">Roztwór cukru (sacharoza)</div>

<div class="cond-icons">○ ○ ○</div>

<div class="cond-note">Cząsteczki, brak swobodnych jonów → <strong>nieelektrolit</strong><br/>żarówka nie świeci</div>
:::
:::

> Woda destylowana prawie nie przewodzi; po dodaniu NaOH przewodnictwo gwałtownie rośnie. To klasyczne doświadczenie z listy proponowanej w podstawie.
:::

#### Dysocjacja elektrolityczna zasad {#diss-widget .merge-h}

**Dysocjacja elektrolityczna** to rozpad związku na jony pod wpływem wody. Rozpuszczona część wodorotlenku dysocjuje w szkolnym modelu praktycznie całkowicie, a liczba jonów OH⁻ w równaniu jest równa liczbie grup OH⁻ we wzorze (indeksowi za nawiasem):

<div class="equation-box">NaOH → Na⁺ + OH⁻</div>

<div class="equation-box">KOH → K⁺ + OH⁻</div>

<div class="equation-box">Ca(OH)₂ → Ca²⁺ + 2OH⁻</div>

<div class="equation-box">Ba(OH)₂ → Ba²⁺ + 2OH⁻</div>

> Na E8 wystarczy zapis ze strzałką i jonami. Stany skupienia, równowaga dla trudno rozpuszczalnego Ca(OH)₂ i różnica rozpuszczalność / moc: [§10.3](#moc-rozpuszczalnosc).

Zobacz, jak kryształ NaOH rozpada się na jony, a jony otaczają się cząsteczkami wody.

@model n02-dysocjacja-v01 | Rozpuszczanie i dysocjacja: NaOH, KOH, Ca(OH)₂, Mg(OH)₂, Cu(OH)₂, Fe(OH)₃ — jony, hydratacja, efekt cieplny | GFX.ions · CHE.HYDROXIDES.dissociation / heat
@opis Animacja rozpuszczania i dysocjacji wodorotlenków (NaOH, KOH, Ca(OH)₂, Mg(OH)₂, Cu(OH)₂, Fe(OH)₃): kryształ rozpada się na jony otoczone cząsteczkami wody, widać efekt cieplny (rozpuszczanie NaOH silnie ogrzewa roztwór), a wodorotlenki trudno rozpuszczalne pozostają głównie osadem. Wniosek: zasada to roztwór z jonami OH⁻ powstałymi w dysocjacji.

#### Energia rozpuszczania [[understand:ROZUMIENIE]] {.merge-h}

Nie każdy wodorotlenek rozpuszcza się tak samo. NaOH wydziela ciepło (egzo), NH₄NO₃ pochłania (endo).

::: div.table-wrap.table-compact
<table><thead><tr><th>Substancja</th><th>ΔH rozpuszczania (kJ/mol)</th><th>Efekt</th></tr></thead><tbody><tr data-hy-heat="NaOH"><td>NaOH</td><td>−44,5</td><td>egzotermiczny — temperatura rośnie</td></tr><tr data-hy-heat="KOH"><td>KOH</td><td>−57,6</td><td>egzotermiczny — temperatura rośnie</td></tr><tr data-hy-heat="LiOH"><td>LiOH</td><td>−23,6</td><td>egzotermiczny — temperatura rośnie</td></tr><tr data-hy-heat="Ca(OH)2"><td>Ca(OH)₂</td><td>−16,7</td><td>egzotermiczny — temperatura rośnie</td></tr><tr data-hy-heat="NH4NO3"><td>NH₄NO₃</td><td>+25,7</td><td>endotermiczny — temperatura spada</td></tr><tr data-hy-heat="NaCl"><td>NaCl</td><td>+3,9</td><td>endotermiczny — temperatura spada</td></tr></tbody></table>
:::

> Wartości z silnika (CHE.HYDROXIDES.SOLHEAT). Ile stopni? 4 g NaOH (0,1 mol) w 100 g wody → ok. +10 °C. Symulacja z termometrem: model z tej podsekcji, część „Efekt cieplny”.

### 6.4 Odczyn i wskaźniki {#ph-wskazniki}

**Skala pH:** pH < 7 — odczyn kwasowy, pH = 7 — obojętny, pH > 7 — zasadowy. Im więcej wolnych jonów OH⁻ w roztworze, tym wyższe pH. Odczyn badamy **wskaźnikami** — substancjami, które zmieniają barwę zależnie od pH.

::: div.table-wrap.table-compact
<table>
<thead><tr><th>Wskaźnik</th><th>Kwasowy</th><th>Obojętny</th><th>Zasadowy</th></tr></thead>
<tbody>
<tr><td>Fenoloftaleina</td><td>bezbarwna</td><td>bezbarwna</td><td>malinowa (zmiana barwy przy pH ≈ 8,2–10)</td></tr>
<tr><td>Oranż metylowy</td><td>czerwony (pomarańczowy przy pH ≈ 3,1–4,4)</td><td>żółty</td><td>żółty</td></tr>
<tr><td>Papierek uniwersalny</td><td>czerwony / pomarańczowy</td><td>żółtozielony</td><td>niebieski / granatowy</td></tr>
<tr><td>Wywar z czerwonej kapusty (domowy)</td><td>czerwony / różowy</td><td>fioletowy</td><td>niebieskozielony, w silnie zasadowym żółty</td></tr>
</tbody>
</table>
:::

Przy **fenoloftaleinie** zasada jest malinowa; po zobojętnieniu roztwór odbarwia się. **Oranż metylowy**: czerwony w środowisku silnie kwasowym, pomarańczowy w zakresie zmiany barwy (pH ≈ 3,1–4,4), żółty powyżej.

Przesuwaj suwak lub klikaj wartości na skali. Zobaczysz jednocześnie kolor roztworu, barwy trzech wskaźników i przykłady substancji.

@model ph-indicators-v03 | Panel pH — skala, barwy wskaźników, przykłady roztworów | Barwy z CHE.COLORS
@opis Panel pH: skala od 0 do 14 z zaznaczonym odczynem kwasowym, obojętnym i zasadowym, barwy wskaźników (uniwersalny, fenoloftaleina, oranż metylowy, wywar z czerwonej kapusty) przy różnych pH oraz przykłady codziennych roztworów. Wniosek: odczyn rozpoznaje się wskaźnikiem — fenoloftaleina barwi się na malinowo tylko w odczynie zasadowym.

> Woda czysta ma w przybliżeniu pH 7. Woda destylowana przechowywana na powietrzu pochłania CO₂, dlatego jej pH bywa nieco niższe od 7. Zakres zmiany barwy oranżu metylowego: pH ≈ 3,1–4,4.

#### Laboratorium wskaźników — przewidź i sprawdź {.merge-h}

@model gfx-scene-indicatorRack | Wskaźnik w siedmiu roztworach — przewidź barwę, potem sprawdź | Scena GFX · barwy wskaźników z CHE.COLORS
@opis Siedem probówek z różnymi roztworami i wskaźnikiem: najpierw przewidujesz barwę, potem animacja pokazuje rzeczywiste barwy zależne od odczynu każdego roztworu. Wniosek: barwa wskaźnika zależy od odczynu roztworu, nie od jego wyglądu.

> **Uwaga:** Cu(OH)₂ w wodzie to zawiesina, nie jednorodny roztwór. Znikoma rozpuszczona część może wpływać na odczyn, ale nie traktuj zawiesiny jak roztworu NaOH.

### 6.5 Wodorotlenek wapnia — wapno palone, gaszone, mleko i woda wapienna {#wapno}

::: karta core | Schemat — nie myl nazw
::: div.lime-flow
<div class="lime-box"><strong>Wapno palone</strong>CaO<br/><span style="font-size:12px;color:var(--text-muted)">tlenek wapnia</span></div>

<div class="lime-arrow">+ H₂O →</div>

<div class="lime-box"><strong>Wapno gaszone</strong>Ca(OH)₂(s)<br/><span style="font-size:12px;color:var(--text-muted)">wodorotlenek stały</span></div>

<div class="lime-arrow">+ H₂O →</div>

<div class="lime-box"><strong>Mleko wapienne</strong><br/><span style="font-size:12px;color:var(--text-muted)">zawiesina Ca(OH)₂</span></div>

<div class="lime-arrow">po odstaniu i zlaniu cieczy →</div>

<div class="lime-box"><strong>Woda wapienna</strong><br/><span style="font-size:12px;color:var(--text-muted)">klarowny roztwór Ca(OH)₂</span></div>
:::

- **Mleko wapienne** — mętna zawiesina Ca(OH)₂ w wodzie (dużo nierozpuszczonego osadu).
- **Woda wapienna** — klarowny, nasycony roztwór Ca(OH)₂ (po odstaniu i zlaniu znad osadu). Jej pH wynosi około **12,4**.
- **Wykrywanie CO₂ (E8):** <span class="formula" data-rx="caoh2Co2">Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</span>. Woda wapienna mętnieje po przepuszczeniu przez nią odpowiedniej ilości CO₂, ponieważ powstaje osad CaCO₃. [[extra:ROZSZERZENIE]] Przy dużym nadmiarze CO₂ osad może się ponownie rozpuszczać, tworząc rozpuszczalny wodorowęglan wapnia: <span class="formula" data-rx="caco3Co2H2o">CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂</span>.
- **Zaprawa wapienna:** twardnieje na powietrzu: <span class="formula" data-rx="caoh2Co2">Ca(OH)₂ + CO₂ → CaCO₃ + H₂O</span>.

::: div.table-wrap.table-compact {style="margin-top:12px;"}
<table>
<thead><tr><th>Cecha</th><th>Mleko wapienne</th><th>Woda wapienna</th></tr></thead>
<tbody>
<tr><td>Stan</td><td>zawiesina (mętna)</td><td>roztwór (klarowny)</td></tr>
<tr><td>Skład</td><td>dużo nierozpuszczonego Ca(OH)₂</td><td>nasycony roztwór Ca(OH)₂</td></tr>
<tr><td>Zastosowanie</td><td>bielenie, zaprawa</td><td>wykrywanie CO₂</td></tr>
</tbody>
</table>
:::
:::

> Dlaczego woda wapienna i mleko wapienne to ta sama substancja w różnych układach (równowaga osad ⇌ jony) — [§10.3](#moc-rozpuszczalnosc). Otrzymywanie CaO + H₂O krok po kroku — [§7.1](#metody); BHP gaszenia wapna — [§9.2](#bhp).

## 7 | Otrzymywanie wodorotlenków [[basic:E8]] {#otrzymywanie .section}

### 7.1 Trzy szkolne metody i ich warunki {#metody}

@model n02-otrzymywanie-v01 | Otrzymywanie wodorotlenków — trzy metody, „Jak otrzymać…?” i mapa przemian | Zlewka GFX.rx · reguły CHE.HYDROXIDES.obtain (kiedy metoda działa, a kiedy nie)
@opis Otrzymywanie wodorotlenków trzema metodami w zlewce: metal aktywny z wodą, tlenek metalu z wodą, strącanie z soli roztworem zasady; model mówi, kiedy dana metoda działa, a kiedy nie (np. CuO nie reaguje z wodą), i pokazuje mapę przemian. Wniosek: metodę dobiera się do aktywności metalu i rozpuszczalności produktu.

::: div.rule-box
#### Otrzymywanie — trzy modele, ale z warunkami {.merge-h}

1. **Tlenek zasadowy + woda** — np. Na₂O + H₂O → 2NaOH. Nie każdy tlenek metalu reaguje z wodą w ten sposób.
2. **Aktywny metal + woda** — np. 2Na + 2H₂O → 2NaOH + H₂↑. Reakcja zależy od metalu i warunków. Wapń reaguje z zimną wodą spokojniej niż sód (Ca + 2H₂O → Ca(OH)₂ + H₂↑), magnez — dopiero z gorącą wodą (Mg + 2H₂O → Mg(OH)₂ + H₂↑).
3. **Sól + zasada** — np. FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl, jeśli powstający wodorotlenek jest dostatecznie trudno rozpuszczalny. Ca(OH)₂ wytrąca się w ten sposób tylko z roztworów stężonych, bo jest trudno, ale nie praktycznie nierozpuszczalny.

> Typowe substraty: Na₂O, K₂O, CaO, BaO (metoda 1); Na, K, Ca (metoda 2); sole Cu²⁺, Fe²⁺, Fe³⁺, Mg²⁺, Al³⁺, Zn²⁺ + NaOH lub KOH (metoda 3).
:::

::: karta warning {#uwaga-tlenki} | Ważne rozróżnienie
**Określenie „tlenek zasadowy” nie oznacza automatycznie, że tlenek reaguje z wodą.**

Przykładowo <span class="formula">CuO</span> reaguje z kwasami, ale nie reaguje z wodą. <span class="formula">MgO</span> reaguje z wodą bardzo powoli, dlatego w zadaniach należy korzystać z podanej tabeli lub znanych przykładów.

W szkole najczęściej spotkasz reakcje z wodą dla tlenków metali aktywnych: <span class="formula">Na₂O</span>, <span class="formula">K₂O</span>, <span class="formula">CaO</span>, <span class="formula">BaO</span>.
:::

<h4 style="margin:14px 0 6px">Równanie krok po kroku — CaO + H₂O</h4>

<div class="equation-box" data-rx="caoH2o">CaO + H₂O → Ca(OH)₂</div>

> Bilans atomów: Ca 1 = 1 · O 1 + 1 = 2 · H 2 = 2 ✓. Most N01 → N02: tlenek zasadowy + woda = wodorotlenek (gdy tlenek z wodą reaguje).

### 7.2 Strącanie wodorotlenków — barwy osadów {#stracanie}

Metoda 3 to **reakcja strąceniowa**: kation metalu z roztworu soli łączy się z jonami OH⁻ z zasady i powstaje trudno rozpuszczalny osad. Barwa osadu pomaga rozpoznać kation.

<div class="equation-box" data-rx="cuso4Naoh">CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</div>

> niebieski, galaretowaty osad — praktycznie nierozpuszczalny

<div class="equation-box" data-rx="fecl3Naoh">FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl</div>

> rdzawobrunatny osad — w roztworze nad osadem prawie nie ma OH⁻, więc odczyn nie jest „jak po NaOH”. Animacja cząsteczkowa: [§12](#ion-lab); zapis jonowy: [§13](#rownania-jonowe).

<div class="equation-box" data-rx="alcl3Naoh">AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl</div>

> biały, galaretowaty osad; w nadmiarze NaOH roztwarza się (amfoteryczność, [§14](#amfoterycznosc))

<div class="equation-box">MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl</div>

> biały osad — tak w praktyce szkolnej otrzymuje się Mg(OH)₂

<div class="equation-box">FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄</div>

> zielonkawy osad, który na powietrzu brunatnieje (niżej)

::: karta extra | Ciekawostka — Fe(OH)₂
\<span class="formula">Fe(OH)₂</span> jest zwykle opisywany jako osad zielonkawy, który w obecności tlenu z powietrza może utleniać się do brunatnego <span class="formula">Fe(OH)₃</span>. Nie jest to wymagane na E8 — traktuj jako ciekawostkę.
:::

## 8 | Reakcje wodorotlenków [[basic:E8]] {#reakcje .section}

### 8.1 Zobojętnianie {#zobojetnianie}

Zobojętnianie: kwas + zasada → sól + woda. Jony H⁺ i OH⁻ łączą się w wodę.

@model n02-zobojetnianie-v01 | Zobojętnianie — licznik moli, pH, wskaźniki, jony H⁺ + OH⁻ → H₂O i krzywa pH | Zastępuje animację i symulator zobojętniania · CHE.HYDROXIDES.neutral (Kw), GFX.ions
@opis Zobojętnianie: do zasady dodaje się porcjami kwas; licznik moli pokazuje ubywanie jonów OH⁻ i przybywanie H₂O, zmienia się pH i barwa wskaźnika, a krzywa pH opada gwałtownie w punkcie zobojętnienia. Wniosek: H⁺ + OH⁻ → H₂O — w punkcie zobojętnienia ilości kwasu i zasady są równoważne.

Postęp zobojętniania śledzimy wskaźnikiem: fenoloftaleina odbarwia się, gdy w roztworze znika nadmiar OH⁻ (barwy wskaźników — [§6.4](#ph-wskazniki)).

::: karta core | Równania zobojętniania
<div class="equation-box" data-rx="hclNaOH">NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)</div>

<div class="equation-box" data-rx="kohHno3">KOH(aq) + HNO₃(aq) → KNO₃(aq) + H₂O(l)</div>

<div class="equation-box" data-rx="caoh2Hcl">Ca(OH)₂(aq) + 2HCl(aq) → CaCl₂(aq) + 2H₂O(l)</div>

<div class="equation-box" data-rx="h2so4Naoh">2NaOH(aq) + H₂SO₄(aq) → Na₂SO₄(aq) + 2H₂O(l)</div>

<div class="equation-box" data-rx="baoh2H2so4">Ba(OH)₂(aq) + H₂SO₄(aq) → BaSO₄↓ + 2H₂O(l)</div>

<div class="equation-box" data-rx="cuoh2H2so4">Cu(OH)₂(s) + H₂SO₄(aq) → CuSO₄(aq) + 2H₂O(l)</div>

<div class="equation-box" data-rx="aloh3Hcl">Al(OH)₃(s) + 3HCl(aq) → AlCl₃(aq) + 3H₂O(l)</div>

> Kontrola: liczba OH⁻ z zasady = liczba H⁺ z kwasu.
:::

::: karta warning | Uwaga o Ba(OH)₂ + H₂SO₄
Zachodzą **dwa procesy naraz**: H⁺ + OH⁻ → H₂O (zobojętnianie) oraz Ba²⁺ + SO₄²⁻ → BaSO₄↓ (strącanie). Dlatego roztwór mętnieje.
:::

#### Licznik moli {.merge-h}

Dolewaj kwas do zasady i obserwuj, kiedy nastąpi zobojętnienie. To stechiometria w praktyce.

> Licznik moli jest w modelu z tej podsekcji: n(OH⁻) na początku, n(H⁺) dodane, nadmiar, pH i objętość w punkcie równoważnikowym. <b>Założenia:</b> mocny kwas + mocna zasada, pełna dysocjacja, pH z iloczynu jonowego wody K<sub>w</sub> = 10⁻¹⁴, bez aktywności jonów i zmian temperatury. Objętość nie zmienia bilansu moli — zmienia stężenia i pH.

> Zapis jonowy zobojętniania (jony widzowe, równanie skrócone H⁺ + OH⁻ → H₂O): [§13](#rownania-jonowe).

### 8.2 Reakcja z CO₂ i rozkład termiczny {#co2-rozklad}

::: karta basic
**Zasady reagują z tlenkami kwasowymi**, np. z CO₂ — powstaje sól i woda:

<div class="equation-box" data-rx="caoh2Co2">Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</div>

<div class="equation-box">2NaOH + CO₂ → Na₂CO₃ + H₂O</div>

Pierwsza reakcja to wykrywanie CO₂ wodą wapienną i twardnienie zaprawy ([§6.5](#wapno)). Druga wyjaśnia, dlaczego NaOH przechowuje się szczelnie: oprócz wilgoci pochłania też CO₂ z powietrza.
:::

::: karta understand | Rozkład termiczny
<span class="level-badge level-understand">ROZUMIENIE</span>

Trudno rozpuszczalne wodorotlenki podczas ogrzewania rozkładają się na tlenek i wodę, np. <span class="formula">Cu(OH)₂ → CuO + H₂O</span> (niebieski osad czernieje), <span class="formula">2Fe(OH)₃ → Fe₂O₃ + 3H₂O</span>, <span class="formula">Mg(OH)₂ → MgO + H₂O</span>. Wodorotlenki litowców (NaOH, KOH) w zwykłych warunkach w ten sposób się nie rozkładają — topią się.
:::

### 8.3 Mapa przemian i reaktor {#mapa-przemian}

::: karta core | Mapa przemian
- **tlenek zasadowy + woda** → wodorotlenek (tylko tlenki metali aktywnych)
- **metal aktywny + woda** → wodorotlenek + H₂↑
- **sól metalu + zasada** → wodorotlenek↓ + sól (gdy wodorotlenek trudno rozpuszczalny)
- **wodorotlenek rozpuszczalny + woda** → zasada (roztwór, jony OH⁻)
- **kwas + zasada** → sól + woda
- **ogrzewanie** wodorotlenku (poza litowcami) → tlenek + woda ([§8.2](#co2-rozklad))

> Interaktywna mapa dla wybranego wodorotlenku (z równaniami z silnika): model z [§7.1](#metody), zakładka „Mapa przemian”.
:::

**Reaktor:** Wybierz dwa substraty — sprawdź, czy zachodzi reakcja i jaka. {#reactor}

@model n02-reaktor-v01 | Reaktor: wodorotlenek + odczynnik — przewiduj, potem sprawdź | CHE.HYDROXIDES.predict · H₂O, HCl, HNO₃, H₂SO₄, NaOH, CO₂, ogrzewanie, powietrze
@opis Reaktor przewidywania: wybierasz wodorotlenek i odczynnik (woda, HCl, HNO₃, H₂SO₄, NaOH, CO₂, ogrzewanie, powietrze), zapisujesz przewidywanie, potem model pokazuje wynik, produkty i równanie. Wniosek: reakcje wodorotlenków da się przewidzieć z ich rozpuszczalności i charakteru.

## 9 | Zastosowania, BHP i życie codzienne [[basic:E8]] {#zastosowania .section}

### 9.1 Zastosowania {#zastosowania-lista}

::: karta basic | Zastosowania (PP)
- **NaOH:** produkcja mydła, udrażnianie rur, przemysł papierniczy i chemiczny, oczyszczanie spalin.
- **KOH:** mydła potasowe (płynne), baterie alkaliczne, laboratoryjnie.
- **Ca(OH)₂:** budownictwo (zaprawa), rolnictwo (odkwaszanie gleby — wapnowanie), bielenie pni drzew i ścian, uzdatnianie wody, wykrywanie CO₂ (woda wapienna).
- **Al(OH)₃:** leki na zgagę — neutralizuje nadmiar kwasu solnego w żołądku (Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O).
- **Mg(OH)₂:** zawiesina „mleko magnezowe” — środek zobojętniający kwas żołądkowy i przeczyszczający; dodatek ognioodporny do tworzyw.
:::

### 9.2 BHP — NaOH, KOH, CaO i związki baru {#bhp}

::: karta warning | Ochrona
**Ochrona:** okulary ochronne i odpowiednie rękawice; substancje są silnie żrące. **NaOH i KOH powodują oparzenia chemiczne skóry i oczu** — nie dotykaj ich gołymi rękami; przechowuj w szczelnych naczyniach.
:::

::: div.rule-box {style="background:var(--c-warn-bg);border-color:var(--c-warn-line)"}
#### Rozpuszczanie stałego NaOH / KOH {.merge-h}

**Okulary ochronne:** stały NaOH/KOH oraz ich stężone roztwory są żrące.

1. Przygotuj wodę.
2. Dodawaj stały NaOH/KOH **małymi porcjami do wody**.
3. Mieszaj i kontroluj temperaturę.
4. Nie dodawaj wody do dużej porcji stałego NaOH/KOH.
5. Po kontakcie ze skórą lub oczami natychmiast płucz dużą ilością wody i zgłoś zdarzenie nauczycielowi/opiekunowi, zgodnie z procedurą pracowni.

> Powód: rozpuszczanie jest silnie egzotermiczne i może powodować gwałtowne nagrzanie oraz rozprysk.
:::

::: div.rule-box {style="background:var(--c-warn-bg);border-color:var(--c-warn-line)"}
#### Gaszenie wapna: CaO + H₂O {.merge-h}

Doświadczenie wykonuje nauczyciel lub osoba prowadząca doświadczenie zgodnie z procedurą pracowni. CaO dodaje się ostrożnie, małymi porcjami; reakcja jest silnie egzotermiczna. Nie pochylaj się nad naczyniem i nie dotykaj gorącego układu. Nie dotykaj CaO mokrymi rękami — drobne cząstki Ca(OH)₂ unoszące się z parą są żrące dla oczu.
:::

::: karta warning | Inne zagrożenia
- **Związki baru:** jony Ba²⁺ są toksyczne — Ba(OH)₂ nie jest stosowany w doświadczeniach uczniowskich.
- **Sód i potas:** reagują z wodą gwałtownie, wydziela się palny wodór — wyłącznie pokaz nauczyciela, bardzo mała porcja metalu, osłona.
- **Środki do udrażniania rur** zawierają NaOH — używaj w rękawicach, nie mieszaj z innymi środkami czystości (zwłaszcza kwasowymi).
:::

### 9.3 Z życia codziennego — pytania {#zycie}

::: karta -
**1. Dlaczego NaOH jest w środkach do udrażniania rur?**

::: odp | Model odpowiedzi
NaOH jest silnie żrący i rozkłada tłuszcze oraz białka (zmydlanie). **BHP:** bardzo niebezpieczny.
:::
:::

::: karta -
**2. Dlaczego woda wapienna mętnieje przy dmuchaniu?**

::: odp | Model odpowiedzi
\<span class="formula" data-rx="caoh2Co2">Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</span>. Trudno rozpuszczalny CaCO₃ tworzy osad. Przy dużym nadmiarze CO₂ osad może się ponownie rozpuszczać (powstaje Ca(HCO₃)₂).
:::
:::

::: karta -
**3. Dlaczego mydło ma odczyn lekko zasadowy?**

::: odp | Model odpowiedzi
Mydło to sól słabego kwasu i mocnej zasady. W wodzie ulega hydrolizie — powstają jony OH⁻.
:::
:::

::: karta -
**4. Dlaczego preparaty na zgagę zawierają Al(OH)₃ lub Mg(OH)₂?**

::: odp | Model odpowiedzi
Neutralizują HCl w żołądku: <span class="formula" data-rx="aloh3Hcl">Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O</span>. Nie są tak żrące jak NaOH.
:::
:::

::: karta -
**5. Dlaczego wapno palone gaśnie po zalaniu wodą?**

::: odp | Model odpowiedzi
\<span class="formula">CaO + H₂O → Ca(OH)₂ + ciepło</span>. Reakcja egzotermiczna. **BHP:** nie dotykać mokrymi rękami.
:::
:::

> Czy woda amoniakalna to wodorotlenek? — [§10.2](#zasada-oh).

## 10 | Model bez skrótów — cztery pytania o wodorotlenek [[understand:ROZUMIENIE]] {#model .section}

**Cel korekty:** oddzielić budowę substancji, jej rozpuszczalność, dysocjację i odczyn. Te cztery rzeczy są powiązane, ale nie są tym samym. {.lead}

### 10.1 Cztery pytania zamiast jednego hasła „zasada” {#cztery-pytania}

::: div.rule-box
1. **Co to jest?** Wodorotlenek metalu to związek zawierający kation metalu i aniony OH⁻; szkolny wzór zapisu składu ma postać M(OH)<sub>n</sub>.
2. **Czy rozpuszcza się w wodzie?** To pytanie o ilość substancji, która przechodzi do roztworu.
3. **Co dzieje się z częścią rozpuszczoną?** Dla typowych dobrze rozpuszczalnych wodorotlenków szkolny model zakłada praktycznie całkowitą dysocjację: NaOH → Na⁺ + OH⁻.
4. **Jaki jest odczyn roztworu?** Jeśli w roztworze jest zwiększone stężenie OH⁻, roztwór ma odczyn zasadowy.

::: div.table-wrap.table-compact
<table>
<thead><tr><th>Pytanie</th><th>Co sprawdzamy?</th><th>Przykład</th></tr></thead>
<tbody>
<tr><td>Co to jest?</td><td>budowa związku</td><td>Ca(OH)₂</td></tr>
<tr><td>Czy się rozpuszcza?</td><td>ile substancji przechodzi do roztworu</td><td>Ca(OH)₂ — ograniczenie rozpuszczalności</td></tr>
<tr><td>Co jest w roztworze?</td><td>jony rozpuszczonej części</td><td>Ca²⁺ i OH⁻</td></tr>
<tr><td>Jaki jest odczyn?</td><td>związany ze stężeniem jonów w roztworze</td><td>woda wapienna ma odczyn zasadowy</td></tr>
</tbody>
</table>
:::

**Wniosek:** „trudno rozpuszczalny” nie znaczy „słaba zasada” w tym samym sensie co przy kwasach. Najpierw trzeba ustalić, ile substancji jest w roztworze, a dopiero potem rozpatrywać zachowanie rozpuszczonej części.
:::

### 10.2 Wodorotlenek ≠ zasada ≠ OH⁻; amoniak i NH₄OH {#zasada-oh}

::: div.rule-box {style="background:var(--c-warn-bg);border-color:var(--c-warn-line)"}
- **OH⁻** jest konkretnym anionem wodorotlenkowym.
- **Wodorotlenek** jest związkiem chemicznym, np. NaOH(s), Ca(OH)₂(s), Cu(OH)₂(s).
- **Roztwór zasadowy** zawiera nadmiar jonów OH⁻ względem czystej wody.
- W szerszym ujęciu **zasada nie musi być wodorotlenkiem**: NH₃ jest zasadą Brønsteda, bo może przyjąć proton, tworząc NH₄⁺.

Szkolny skrót „zasada = rozpuszczalny wodorotlenek” jest użyteczny na poziomie E8, ale nie jest pełną definicją chemiczną.
:::

<div class="rule-box">
<b>Uwaga o definicji szkolnej:</b> powyższe rozróżnienie to <strong>definicja szkolna</strong> (Arrheniusa). W szerszym ujęciu chemicznym (liceum, teoria Brønsteda) zasadami są także inne substancje zdolne do przyjmowania protonów (H⁺) — np. amoniak NH₃. Historia pojęcia i teoria Brønsteda: <a href="#ambitny">Dodatek B</a>.
      </div>

::: karta extra | Amoniak i zapis NH₄OH — pułapka E8
**Amoniak NH₃** i woda amoniakalna dają odczyn zasadowy, ale NH₃ *nie jest wodorotlenkiem* (brak metalu i grupy OH⁻ we wzorze substancji). To zasada w sensie Brønsteda / odczynu roztworu — szczegóły w [Dodatku B](#ambitny).

\<span class="formula">NH₄OH</span> można spotkać jako tradycyjny skrót. Dokładniejszy model wodnego amoniaku:

<div class="equation-box"><strong>NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)</strong></div>

Woda amoniakalna to roztwór <span class="formula">NH₃</span> w wodzie. Część cząsteczek reaguje: <span class="formula">NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</span>. Powstają jony OH⁻, więc odczyn jest zasadowy, ale wzór „NH₄OH” to uproszczenie szkolne — w rzeczywistości nie ma stabilnej cząsteczki NH₄OH jak w NaOH. Na E8 wystarczy: roztwór amoniaku ma odczyn zasadowy i reaguje z kwasami.
:::

### 10.3 Rozpuszczalność, dysocjacja i moc — przykład Ca(OH)₂ {#moc-rozpuszczalnosc}

::: karta warning | Rozpuszczalny ≠ mocny
**Rozpuszczalność** mówi, ile substancji przechodzi do wody. **Moc zasady** mówi, jak duża część rozpuszczonej substancji tworzy jony. To różne pojęcia.

Na poziomie klasy 8 najważniejsze jest, że dobrze rozpuszczalne wodorotlenki dają roztwory zawierające dużo jonów OH⁻. Ca(OH)₂ jest słabo rozpuszczalny, ale jego rozpuszczona część dysocjuje praktycznie całkowicie — dlatego woda wapienna ma wyraźny odczyn zasadowy.
:::

::: div.rule-box
#### Model rozpuszczania Ca(OH)₂ — nie myl osadu z roztworem {.merge-h}

Ca(OH)₂ jest trudno rozpuszczalny. Ustala się równowaga między fazą stałą a jonami w roztworze:

<div class="equation-box"><strong>Ca(OH)₂(s) ⇌ Ca²⁺(aq) + 2OH⁻(aq)</strong></div>

**Woda wapienna** to klarowny, nasycony roztwór zawierający rozpuszczoną część Ca(OH)₂. **Mleko wapienne** to zawiesina, w której pozostaje dużo fazy stałej. Nie są to dwie różne substancje.
:::

::: div.rule-box
#### Dysocjacja a zapis wzoru {.merge-h}

Nawias w **Ca(OH)₂** oznacza, że jednostka składu zawiera dwa aniony OH⁻. Po rozpuszczeniu zapisujemy:

<div class="equation-box"><strong>Ca(OH)₂(aq) → Ca²⁺(aq) + 2OH⁻(aq)</strong></div>

To nie oznacza, że w wodzie pływają „cząsteczki Ca(OH)₂” w takim samym sensie jak pojedyncze cząsteczki substancji kowalencyjnej. W szkolnym modelu dla rozpuszczonej soli/wodorotlenku śledzimy przede wszystkim jony.
:::

::: adv | Iloczyn rozpuszczalności — skąd pH 12,4 wody wapiennej? | poziom LO / akademicki
Dla osadu M(OH)ₙ(s) ⇌ Mⁿ⁺ + n OH⁻: K<sub>sp</sub> = [Mⁿ⁺]·[OH⁻]ⁿ. Rozpuszczalność molowa s = (K<sub>sp</sub>/nⁿ)<sup>1/(n+1)</sup>, [OH⁻] = n·s, pH = 14 + log[OH⁻].

::: div.table-wrap.table-compact
<table><thead><tr><th>Wodorotlenek</th><th>K<sub>sp</sub> (25 °C)</th><th>s (mol/dm³)</th><th>pH nasyconego</th></tr></thead><tbody><tr><td>Ca(OH)₂</td><td>5,5e-06</td><td>1,1e-02</td><td>12,3</td></tr><tr><td>Mg(OH)₂</td><td>5,6e-12</td><td>1,1e-04</td><td>10,3</td></tr><tr><td>Fe(OH)₂</td><td>4,9e-17</td><td>2,3e-06</td><td>8,7</td></tr><tr><td>Fe(OH)₃</td><td>2,8e-39</td><td>1,0e-10</td><td>7,0 (≈ obojętny)</td></tr><tr><td>Cu(OH)₂</td><td>2,2e-20</td><td>1,8e-07</td><td>7,5 (≈ obojętny)</td></tr><tr><td>Zn(OH)₂</td><td>3,0e-17</td><td>2,0e-06</td><td>8,6</td></tr><tr><td>Al(OH)₃</td><td>1,3e-33</td><td>2,6e-09</td><td>7,0 (≈ obojętny)</td></tr><tr><td>Ni(OH)₂</td><td>5,5e-16</td><td>5,2e-06</td><td>9,0</td></tr><tr><td>Mn(OH)₂</td><td>2,0e-13</td><td>3,7e-05</td><td>9,9</td></tr></tbody></table>
:::

> Ca(OH)₂: s ≈ 0,011 mol/dm³ → pH ≈ 12,35 (pomiar ≈ 12,4); Mg(OH)₂: pH ≈ 10,4 (mleko magnezowe). Dla Fe(OH)₃ czy Cu(OH)₂ jonów OH⁻ z osadu jest mniej niż w czystej wodzie — dlatego zawiesina nie zmienia odczynu. Wartości: CHE.HYDROXIDES.KSP / satpH.
:::

## 11 | Modele budowy — rysunek szkolny a sieć jonowa [[understand:ROZUMIENIE]] {#modele-budowy .section}

### 11.1 Dwa szkolne sposoby rysowania: NaOH, Ca(OH)₂, Al(OH)₃ {#model3d}

W polskich podręcznikach kl. 8 wodorotlenki rysuje się jak poniżej: **ciągła kreska** = wiązanie kowalencyjne spolaryzowane O–H w grupie OH⁻, **przerywana** = oddziaływanie elektrostatyczne o charakterze jonowym między kationem metalu a jonami OH⁻. Rysunek jest modelem poglądowym, a nie dokładną geometrią struktury krystalicznej.

::: div.widget
#### Porównanie struktury (styl podręcznikowy)

NaOH: jedna grupa OH⁻. Ca(OH)₂: dwie grupy OH⁻ — zapis składu związku, nie wzór strukturalny H–O–Ca–O–H. {.widget-hint}

::: div {style="display:grid;grid-template-columns:1fr;gap:14px;"}
::: div {style="background:var(--surface-soft);border:1px solid var(--border);border-radius:var(--r-md);padding:14px;text-align:center;"}
<div style="font-size:12px;font-weight:800;color:var(--text-muted);margin-bottom:8px;">NaOH — wodorotlenek sodu</div>

<div class="svgx"><span>Na</span><span>O</span><span>H</span><span>Na⁺</span><span>OH⁻</span><span>- - - oddziaływanie jonowe —— kowalencyjne O–H</span></div>

> Ten sam układ (kation, grupy OH⁻, nawias) pokazuje interaktywnie model „Wzór wodorotlenku” w [§5.2](#wzor-ogolny): modele A, B i jony.
:::

::: div {style="background:var(--surface-soft);border:1px solid var(--border);border-radius:var(--r-md);padding:14px;text-align:center;"}
<div style="font-size:12px;font-weight:800;color:var(--text-muted);margin-bottom:8px;">Ca(OH)₂ — wodorotlenek wapnia (model poglądowy)</div>

<div class="svgx"><span>H</span><span>O</span><span>Ca</span><span>OH⁻</span><span>Ca²⁺</span><span>zapis poglądowy: H–O–Ca–O–H</span></div>
:::

::: div {style="background:var(--surface-soft);border:1px solid var(--border);border-radius:var(--r-md);padding:14px;text-align:center;grid-column:1/-1;"}
<div style="font-size:12px;font-weight:800;color:var(--text-muted);margin-bottom:8px;">Widok poglądowy składu — Ca(OH)₂ i Al(OH)₃ (nie przedstawia rzeczywistej geometrii kryształu)</div>

::: div {style="display:grid;grid-template-columns:1fr;gap:10px;"}
<div id="modelBrCa"></div>

<div id="modelBrAl"></div>
:::

<p class="mini-note" style="margin-top:8px;">Ramiona M···O mogą iść pod kątem; <strong>grupa O–H zawsze w poziomie</strong> (jak w podręczniku). To <strong>model szkolny</strong> (ZPE / podręczniki kl. 8). W ciele stałym wodorotlenek to <strong>sieć jonów</strong>, a nie pojedyncza „cząsteczka” HO–M–OH.</p>
:::
:::

<div class="bond-legend">
<span><i class="bl-solid"></i> wiązanie kowalencyjne O–H wewnątrz grupy OH⁻</span>
<span><i class="bl-dash"></i> oddziaływanie elektrostatyczne (jonowe) kation···OH⁻</span>
</div>
:::

::: karta basic | Model A — szkolny, po prawej
Najczęściej spotykany w podręcznikach. Grupy <span class="formula">OH⁻</span> rysuje się **po jednej stronie** kationu, zwykle po prawej. **Linia od metalu do O** jest przerywana, a **linia od O do H** jest ciągła.

$$ Al(OH)₃

<div class="svgx"><span>O</span><span>H</span><span>Al</span></div>

**To jest model szkolny (A)** — dobry do zrozumienia, ile jest grup OH⁻. Nie jest dokładną geometrią kryształu.
:::

::: karta understand | Model B — przestrzenny, bez udawania wzoru strukturalnego
Jeżeli pokazujemy grupy <span class="formula">OH⁻</span> po obu stronach metalu, **nie zmieniamy ich orientacji w napis „HO”**. Każda grupa pozostaje jednym blokiem <span class="formula">OH⁻</span>. Schemat pokazuje relację przestrzenną, a nie rzeczywistą geometrię kryształu.

$$ Al(OH)₃

<div class="svgx"><span>OH⁻</span><span>Al³⁺</span><span>centrum</span></div>

**Nie czytaj tego jako „Al–O–H” w jednej osi.** Linie przerywane są tylko znakiem relacji/modelu. Nie są wiązaniami strukturalnymi. Najważniejsze: <span class="formula">Al³⁺ + 3 OH⁻ → Al(OH)₃</span> oraz suma ładunków <span class="formula">+3 + 3·(−1) = 0</span>.
:::

::: karta understand | Dlaczego obie konwencje są poprawne?
W obu wariantach widać to samo: atom metalu jest połączony z **n grupami OH⁻** i związek ma ten sam wzór sumaryczny <span class="formula">M(OH)ₙ</span>.

Różnica nie dotyczy **składu chemicznego**, tylko **sposobu przedstawienia**.

::: div.table-wrap
<table>
<thead>
<tr><th>Poziom</th><th>Preferowana konwencja</th></tr>
</thead>
<tbody>
<tr><td>Szkoła podstawowa</td><td>Wariant A — czytelność i prostota</td></tr>
<tr><td>Liceum / rozszerzenie</td><td>Wariant B — większy realizm przestrzenny</td></tr>
<tr><td>Olimpiada / chemia zaawansowana</td><td>Wariant B lub bardziej złożone zapisy polimeryczne</td></tr>
</tbody>
</table>
:::
:::

::: karta understand | Jak rysować — krok po kroku
1. Zacznij od wzoru sumarycznego: np. <span class="formula">Al(OH)₃</span>.
2. Odczytaj ładunek kationu.
3. Ustal (policz) liczbę grup <span class="formula">OH⁻</span>.
4. Rysuj każdą grupę <span class="formula">OH⁻</span> jako jeden blok.
5. Zapisz wzór sumaryczny: <span class="formula">NaOH</span>, <span class="formula">Ca(OH)₂</span>, <span class="formula">Al(OH)₃</span>.
6. W praktyce szkolnej wybierz **czytelny model A**, jeśli nie ma polecenia o geometrii przestrzennej.

Ważne jest, żeby z rysunku było jasne: **ile grup OH⁻ jest przyłączonych**.
:::

### 11.2 Model a rzeczywista struktura — sieć jonowa {#siec-jonowa}

::: karta warning | Kluczowa poprawka
Zapis <span class="formula">Ca(OH)₂</span> jest zapisem **składu związku**, a nie wzorem strukturalnym pojedynczej cząsteczki. W uproszczonym modelu pokazujemy jon <span class="formula">Ca²⁺</span> oraz dwa jony <span class="formula">OH⁻</span>.

W krysztale <span class="formula">Ca(OH)₂</span> występuje uporządkowana **sieć jonów**, a nie pojedyncza cząsteczka <span class="formula">H–O–Ca–O–H</span>. Rysunek <span class="formula">H–O–Ca–O–H</span> jest tylko **modelem poglądowym rozmieszczenia jonów** — nie wzorem strukturalnym cząsteczki.

Stały wodorotlenek wapnia nie jest pojedynczą cząsteczką typu <span class="formula">H–O–Ca–O–H</span>. Taki rysunek może służyć wyłącznie jako model poglądowy liczby grup OH⁻.

Najważniejsze jest, aby z rysunku było jasne: **ile grup <span class="formula">OH⁻</span> przyłącza się do kationu** i że każda grupa <span class="formula">OH</span> jest traktowana jako **jedna całość**.

Żaden z tych rysunków nie odtwarza dokładnie budowy kryształu w stanie stałym. Dlatego oba wzory to **modele poglądowe** — przydatne w nauce, ale nie całkowicie dokładne.
:::

::: adv | Jak naprawdę wygląda kryształ Ca(OH)₂ i Mg(OH)₂? | poziom akademicki
Ca(OH)₂ (portlandyt) i Mg(OH)₂ (brucyt) mają **strukturę warstwową**: płaskie warstwy kationów M²⁺ leżą między dwiema warstwami jonów OH⁻. Każdy kation otacza sześć jonów OH⁻ (koordynacja oktaedryczna), a każdy jon OH⁻ łączy trzy kationy. Wiązania O–H są ustawione prostopadle do warstw, a sąsiednie warstwy trzymają się słabymi oddziaływaniami — dlatego kryształy łatwo się łupią. To wyjaśnia, dlaczego „cząsteczka H–O–Ca–O–H” nie istnieje: każdy Ca²⁺ ma sześciu sąsiadów OH⁻, a nie dwóch.
:::

## 12 | Strącanie od środka — laboratorium jonowe [[understand:ROZUMIENIE]] {#ion-lab .section}

Zobacz, jak swobodne jony poruszają się w roztworze, zbliżają się dzięki oddziaływaniom elektrostatycznym, a następnie mogą tworzyć skupiska i osad. To jest **model strącania od środka**, a nie film dosłownej trajektorii każdego jonu.

::: karta understand {#n02-ion-model-rules}
<div class="card-label">Co naprawdę pokazuje animacja?</div>

1. **Co widzę?** — swobodne jony poruszają się w roztworze.
2. **Co robię?** — obserwuję zbliżanie się kationu i jonów <span class="formula">OH⁻</span>.
3. **Dlaczego?** — ładunki przeciwne przyciągają się elektrostatycznie; samo przyciąganie nie oznacza jednak, że każdy kontakt od razu tworzy trwały osad.
4. **Jak sprawdzam?** — sprawdzam proporcję jonów, rozpuszczalność produktu i zapis równania jonowego.

Model dydaktyczny: wolne jony → zbliżanie i zderzenia → krótkotrwałe skupiska → zarodki → osad. {.widget-hint}

**Ważne:** w modelu animacji mogą pojawiać się krótkotrwałe, niepełne skupiska lub etapy pośrednie. Nie przedstawiamy ich jako „gotowych cząsteczek po kolei”, lecz jako uproszczony model zbliżania, reorganizacji i tworzenia zarodków osadu.

Rzeczywisty proces jest bardziej złożony i może obejmować formy pośrednie oraz kompleksy. Animacja ma pokazać ideę powstawania fazy stałej, a nie pełną kinetykę procesu.
:::

@model n02-stracanie-v01 | Laboratorium jonowe — strącanie 13 wodorotlenków (model cząsteczkowy) | CHE.sim.ParticleSim · barwy osadów CHE.COLORS · równania jonowe CHE.IONIC
@opis Laboratorium jonowe: model cząsteczkowy strącania 13 wodorotlenków — jony metalu i jony OH⁻ łączą się w osad o charakterystycznej barwie, a jony obce pozostają w roztworze; obok równanie jonowe skrócone. Wniosek: osad powstaje, gdy kation tworzy z OH⁻ substancję trudno rozpuszczalną.

::: adv | Etapy pośrednie strącania — hydroksokompleksy | poziom LO / akademicki
Ta animacja przedstawia **uproszczony moment pojawienia się osadu**. W rzeczywistości proces przebiega stopniowo: najpierw powstają hydroksokompleksy, np. <span class="formula">Fe(OH)²⁺</span> i <span class="formula">Fe(OH)₂⁺</span>, a dopiero później tworzy się <span class="formula">Fe(OH)₃↓</span>.

**Uproszczony ciąg:** <span class="formula">Fe³⁺ → Fe(OH)²⁺ → Fe(OH)₂⁺ → Fe(OH)₃⁰ → Fe(OH)₃↓</span>.

Dla miedzi wygląda podobnie: <span class="formula">[Cu(H₂O)₆]²⁺ → [Cu(H₂O)₅(OH)]⁺ → [Cu(H₂O)₄(OH)₂]⁰ → Cu(OH)₂↓</span>. To jest **dobry model dydaktyczny**, ale nie pełny opis mechanizmu chemicznego w roztworze.
:::

> Równania strąceń i barwy osadów: [§7.2](#stracanie); zapis jonowy: [§13](#rownania-jonowe).

## 13 | Równania jonowe [[extra:AMBITNE]] {#rownania-jonowe .section}

Równanie jonowe pokazuje, które jony naprawdę biorą udział w reakcji. Zapis prowadzimy w trzech krokach: cząsteczkowe → jonowe pełne → jonowe skrócone (bez jonów widzów).

### 13.1 Zobojętnianie w zapisie jonowym {#jonowe-zobojetnianie}

<div class="jonowe-box">
<span class="jb-level">Liceum / konkurs</span>
<p>Reakcja <span class="formula">NaOH + HCl</span> na trzech poziomach:</p>
<div class="jb-label">1. Równanie cząsteczkowe (szkolne)</div>
<div class="jb-eq">NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)</div>
<div class="jb-label">2. Równanie jonowe pełne</div>
<div class="jb-eq">Na⁺ + OH⁻ + H⁺ + Cl⁻ → Na⁺ + Cl⁻ + H₂O</div>
<div class="jb-label">3. Równanie jonowe skrócone (istota reakcji)</div>
<div class="jb-eq">H⁺ + OH⁻ → H₂O</div>
<p style="margin-top:12px;font-size:13.5px;">Jony Na⁺ i Cl⁻ nie zmieniają się — to <strong>jony widzowe</strong>.</p>
<p style="margin-top:10px;font-size:13px;"><strong>Ważne:</strong> równania jonowe dotyczą <strong>roztworów wodnych</strong>. Nie należy rozpisywać na jony substancji stałych ani czystych cieczy. HCl, NaOH i NaCl zapisuje się jako jony tylko wtedy, gdy są w roztworze wodnym.</p>
</div>

### 13.2 Strącanie i reakcje osadów w zapisie jonowym {#jonowe-stracanie}

<div class="jonowe-box">
<span class="jb-level">Liceum / konkurs</span>
<div class="jb-label">CuSO₄ + 2NaOH — jonowe pełne</div>
<div class="jb-eq">Cu²⁺ + SO₄²⁻ + 2Na⁺ + 2OH⁻ → Cu(OH)₂↓ + 2Na⁺ + SO₄²⁻</div>
<div class="jb-label">Jonowe skrócone</div>
<div class="jb-eq">Cu²⁺ + 2OH⁻ → Cu(OH)₂↓</div>
<div class="jb-eq">Fe³⁺ + 3OH⁻ → Fe(OH)₃↓</div>
<div class="jb-eq">Al³⁺ + 3OH⁻ → Al(OH)₃↓</div>
<div class="jb-label">Osad jako substrat — nie rozpisujemy go na jony</div>
<div class="jb-eq">Cu(OH)₂(s) + 2H⁺ → Cu²⁺ + 2H₂O</div>
<div class="jb-label">Ba(OH)₂ + H₂SO₄ — nic się nie skraca</div>
<div class="jb-eq">Ba²⁺ + 2OH⁻ + 2H⁺ + SO₄²⁻ → BaSO₄↓ + 2H₂O</div>
<p style="margin-top:10px;font-size:13px;">W ostatniej reakcji wszystkie jony biorą udział w przemianie — powstaje osad i woda, dlatego nie ma jonów widzów.</p>
</div>

@model rownania-jonowe-v01 | Równania jonowe — wszystkie reakcje z silnika (strącanie OH⁻, zobojętnianie) | Zapis cząsteczkowy, jonowy pełny i skrócony · CHE.IONIC
@opis Zestaw równań reakcji strącania wodorotlenków i zobojętniania w trzech zapisach: cząsteczkowym, jonowym pełnym i jonowym skróconym, z wyróżnieniem jonów, które nie biorą udziału w reakcji. Wniosek: zapis jonowy skrócony pokazuje tylko jony, które naprawdę reagują.

> Zapis zobojętniania: cząsteczkowy, jonowy pełny i jonowy skrócony — w modelu „Równania jonowe” wyżej wybierz reakcję HCl + NaOH (jeden model dla wszystkich równań jonowych lekcji).

## 14 | Amfoteryczność [[extra:AMBITNE]] {#amfoterycznosc .section}

::: karta extra | Rozumienie rozszerzone
**Amfoteryczny** = reaguje z kwasami i z mocnymi zasadami. Najważniejsze: <span class="formula">Al(OH)₃</span> i <span class="formula">Zn(OH)₂</span>.

::: div.table-wrap.table-compact.table-amph-desktop
<table>
<thead><tr><th>Wodorotlenek</th><th>Z kwasem</th><th>Z mocną zasadą</th></tr></thead>
<tbody>
<tr><td>Al(OH)₃</td><td>Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O</td><td>Al(OH)₃ + NaOH → Na[Al(OH)₄]</td></tr>
<tr><td>Zn(OH)₂</td><td>Zn(OH)₂ + 2HCl → ZnCl₂ + 2H₂O</td><td>Zn(OH)₂ + 2NaOH → Na₂[Zn(OH)₄]</td></tr>
</tbody>
</table>
:::

::: div.amph-cards {aria-label="Amfoteryczność — widok kart"}
<div class="amph-card"><strong>Al(OH)₃</strong>
<div>Z kwasem: <span class="formula" data-rx="aloh3Hcl">Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O</span></div>
<div style="margin-top:6px;">Z mocną zasadą: <span class="formula">Al(OH)₃ + NaOH → Na[Al(OH)₄]</span></div>
</div>

<div class="amph-card"><strong>Zn(OH)₂</strong>
<div>Z kwasem: <span class="formula" data-rx="znoh2Hcl">Zn(OH)₂ + 2HCl → ZnCl₂ + 2H₂O</span></div>
<div style="margin-top:6px;">Z mocną zasadą: <span class="formula">Zn(OH)₂ + 2NaOH → Na₂[Zn(OH)₄]</span></div>
</div>
:::

> Na poziomie E8 wystarczy wiedzieć, że **Al(OH)₃ i Zn(OH)₂ reagują i z kwasami, i z mocnymi zasadami**. Równania z jonami kompleksowymi (<span class="formula">Na[Al(OH)₄]</span>, <span class="formula">Na₂[Zn(OH)₄]</span>) są rozszerzeniem i nie są wymagane na egzaminie ósmoklasisty.
:::

::: div.rule-box
#### Amfoteryczność — zawsze pytaj „z czym?” {.merge-h}

Al(OH)₃ i Zn(OH)₂ są klasycznymi przykładami wodorotlenków amfoterycznych. Reagują zarówno z kwasami, jak i z mocnymi zasadami, ale **produkt i zapis zależą od środowiska**.

<div class="equation-box"><strong>Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O</strong></div>

<div class="equation-box"><strong>Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻</strong> <span class="level-badge level-extra">LO</span></div>

<div class="equation-box"><strong>Zn(OH)₂ + 2OH⁻ → [Zn(OH)₄]²⁻</strong> <span class="level-badge level-extra">LO</span></div>

Nie używamy skrótu „amfoteryczny = reaguje ze wszystkim”.

> Reakcje z mocnymi zasadami prowadzą do jonów kompleksowych; szczegółowy zapis należy do warstwy rozszerzonej.
:::

> Doświadczenie z Al(OH)₃ w kwasie i w nadmiarze zasady: [§15, doświadczenie H](#doswiadczenia). Tlenki amfoteryczne (Al₂O₃, ZnO): lekcja N01.

## 15 | Doświadczenia modelowe [[basic:E8]] {#doswiadczenia .section}

Format egzaminacyjny: problem → hipoteza → sprzęt → przebieg → obserwacje → wniosek → równanie → BHP. Wykonuj tylko pod nadzorem nauczyciela. Każde doświadczenie obejrzysz w pracowni silnika (animacja, równania jonowe, warunki).

> Zasady BHP dla NaOH/KOH i gaszenia wapna: [§9.2](#bhp).

::: div.rule-box
#### Obserwacja → wniosek — jak zapisać doświadczenie {.merge-h}

::: div.table-wrap.table-compact
<table>
<thead><tr><th>Warstwa</th><th>Przykład dla CaO + H₂O</th></tr></thead>
<tbody>
<tr><td>Obserwacja</td><td>układ wyraźnie się nagrzewa</td></tr>
<tr><td>Wniosek</td><td>zaszła reakcja z wydzieleniem ciepła; powstaje Ca(OH)₂</td></tr>
<tr><td>Równanie</td><td><span class="formula" data-rx="caoH2o">CaO + H₂O → Ca(OH)₂</span></td></tr>
<tr><td>Ograniczenie</td><td>obserwacja nie pokazuje mikroskopowego mechanizmu reakcji</td></tr>
</tbody>
</table>
:::
:::

@model n02-doswiadczenia-v01 | Pracownia: 26 doświadczeń z wodorotlenkami — zlewka, równania, obserwacje, BHP | GFX.rx · D.REACTIONS · CHE.IONIC
@opis Pracownia 26 doświadczeń z wodorotlenkami: zlewki w animacji z obserwacjami, równaniami i zasadami BHP — m.in. sód z wodą, CaO z wodą, strącanie Cu(OH)₂ i Fe(OH)₃, zobojętnianie z fenoloftaleiną, Al(OH)₃ z nadmiarem NaOH. Wniosek: właściwości wodorotlenków potwierdza się doświadczeniem.

::: dosw | Doświadczenie A — Otrzymywanie NaOH: sód + woda [[basic:E8]]
Problem: Co powstaje w reakcji sodu z wodą?
Hipoteza: Powstaje zasada i gaz.
Sprzęt i odczynniki: krystalizator z wodą i fenoloftaleiną, kawałek sodu wielkości ziarna grochu, szczypce, osłona
Przebieg: Nauczyciel wrzuca mały kawałek Na do wody z fenoloftaleiną.
Obserwacje: Sód topi się w kulkę i „biega” po powierzchni, słychać syczenie, wydziela się gaz; roztwór barwi się na malinowo.
Równanie: <span class="formula" data-rx="naH2o">2Na + 2H₂O → 2NaOH + H₂↑</span>
Wniosek: Metal aktywny + woda → wodorotlenek + wodór; roztwór ma odczyn zasadowy.
BHP: Wyłącznie pokaz nauczyciela: okulary, osłona, bardzo mała porcja sodu (wodór może się zapalić).

@zlewka n02-doswiadczenia-v01 naH2o | Zobacz w zlewce (pracownia GFX)
@opis Kawałek sodu w wodzie z dodatkiem wskaźnika: sód topi się w srebrzystą kulkę, porusza się po powierzchni i wydziela gaz, a roztwór zmienia barwę na charakterystyczną dla odczynu zasadowego. Wniosek: 2 Na + 2 H₂O → 2 NaOH + H₂↑ — metal aktywny z wodą daje zasadę i wodór.
:::

::: dosw | Doświadczenie B — Gaszenie wapna: CaO + H₂O [[basic:E8]]
Problem: Co się dzieje, gdy do CaO dodamy wody?
Hipoteza: Powstanie wodorotlenek wapnia, wydzieli się ciepło.
Sprzęt i odczynniki: CaO, woda, parownica odporna na ciepło, fenoloftaleina, papierek uniwersalny
Przebieg: Do niewielkiej ilości CaO dodaje się wodę ostrożnie, małymi porcjami. Po ochłodzeniu bada się klarowny roztwór znad osadu.
Obserwacje: Silne rozgrzanie, często syk; powstaje biała papka (mleko wapienne); roztwór nad osadem: fenoloftaleina malinowa, papierek — barwa zasadowa.
Równanie: <span class="formula" data-rx="caoH2o">CaO + H₂O → Ca(OH)₂</span>
Wniosek: Tlenek zasadowy + woda → wodorotlenek. Część Ca(OH)₂ rozpuszcza się (woda wapienna), nadmiar zostaje jako zawiesina (mleko wapienne).
BHP: Wykonuje nauczyciel. Reakcja silnie egzotermiczna — nie dotykaj CaO mokrymi rękami, nie pochylaj się nad naczyniem (aerozol Ca(OH)₂ jest żrący). Nie badaj wskaźnikiem gorącej, gęstej zawiesiny.

@zlewka n02-doswiadczenia-v01 caoH2o | Zobacz w zlewce (pracownia GFX)
@opis Tlenek wapnia (wapno palone) zalany wodą: mieszanina silnie się ogrzewa, powstaje białe „mleko wapienne”, a wskaźnik wskazuje odczyn zasadowy. Wniosek: CaO + H₂O → Ca(OH)₂ — tlenek metalu aktywnego tworzy z wodą wodorotlenek.
:::

::: dosw | Doświadczenie C — Strącanie Cu(OH)₂ [[basic:E8]]
Problem: Czy z soli miedzi(II) i zasady powstanie wodorotlenek?
Hipoteza: Powstanie osad wodorotlenku miedzi(II).
Sprzęt i odczynniki: roztwór CuSO₄, roztwór NaOH, probówka, pipeta
Przebieg: Do roztworu CuSO₄ dodaje się kroplami roztwór NaOH.
Obserwacje: Niebieski, galaretowaty osad; roztwór nad osadem traci niebieską barwę.
Równanie: <span class="formula" data-rx="cuso4Naoh">CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</span>
Wniosek: Sól + zasada → wodorotlenek↓ + sól (metoda strąceniowa) — działa, bo Cu(OH)₂ jest praktycznie nierozpuszczalny.
BHP: NaOH żrący — okulary, rękawice.

@zlewka n02-doswiadczenia-v01 cuso4Naoh | Zobacz w zlewce (pracownia GFX)
@opis Do niebieskiego roztworu siarczanu(VI) miedzi(II) dodano roztwór NaOH: wytrąca się niebieski, galaretowaty osad. Wniosek: CuSO₄ + 2 NaOH → Cu(OH)₂↓ + Na₂SO₄ — wodorotlenek trudno rozpuszczalny otrzymuje się strącaniem.
:::

::: dosw | Doświadczenie D — Strącanie Fe(OH)₃ [[basic:E8]]
Problem: Czy z soli żelaza(III) i zasady powstaje wodorotlenek?
Hipoteza: Powstanie brunatny osad.
Sprzęt i odczynniki: roztwór FeCl₃, roztwór NaOH, probówka
Przebieg: Do roztworu FeCl₃ dodaje się roztwór NaOH.
Obserwacje: Rdzawobrunatny osad.
Równanie: <span class="formula" data-rx="fecl3Naoh">FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl</span>
Wniosek: Powstał praktycznie nierozpuszczalny wodorotlenek żelaza(III); Fe³⁺ potrzebuje trzech OH⁻ — stąd współczynnik 3.
BHP: NaOH żrący — okulary, rękawice.

@zlewka n02-doswiadczenia-v01 fecl3Naoh | Zobacz w zlewce (pracownia GFX)
@opis Do żółtobrunatnego roztworu chlorku żelaza(III) dodano roztwór NaOH: wytrąca się brunatnoczerwony, galaretowaty osad. Wniosek: FeCl₃ + 3 NaOH → Fe(OH)₃↓ + 3 NaCl — barwa osadu pozwala rozpoznać jon Fe³⁺.
:::

::: dosw | Doświadczenie E — Odczyn roztworu NaOH — trzy wskaźniki [[basic:E8]]
Problem: Jaki odczyn ma roztwór NaOH?
Hipoteza: Zasadowy.
Sprzęt i odczynniki: roztwór NaOH przygotowany przez nauczyciela, papierek uniwersalny, fenoloftaleina, oranż metylowy, 3 probówki
Przebieg: Do trzech porcji roztworu dodaje się kolejno wskaźniki.
Obserwacje: Papierek uniwersalny — niebieski / fioletowy (zależnie od pH i papierka), fenoloftaleina — malinowa, oranż metylowy — żółty.
Równanie: <span class="formula">NaOH → Na⁺ + OH⁻</span>
Wniosek: Roztwór NaOH ma odczyn zasadowy (dla stężonego — silnie zasadowy): zawiera jony OH⁻.
BHP: NaOH żrący. Roztwór przygotowuje nauczyciel — rozpuszczanie stałego NaOH jest silnie egzotermiczne.

@zlewka ph-indicators-v03 - | Zobacz w modelu wskaźników
@opis Model wskaźników: skala pH z barwami wskaźnika uniwersalnego, fenoloftaleiny i oranżu metylowego w roztworach kwasowych, obojętnych i zasadowych. Wniosek: barwa wskaźnika pokazuje odczyn roztworu.
:::

::: dosw | Doświadczenie F — Zobojętnianie NaOH kwasem solnym [[basic:E8]]
Problem: Co się dzieje, gdy do zasady dodajemy kwas?
Hipoteza: Powstaje sól i woda; odczyn się zmienia.
Sprzęt i odczynniki: roztwór NaOH z fenoloftaleiną, rozcieńczony HCl, pipeta, zlewka
Przebieg: Do zasady z fenoloftaleiną dodaje się kroplami HCl, mieszając.
Obserwacje: Malinowa barwa stopniowo zanika — w punkcie zobojętnienia roztwór jest bezbarwny; zlewka lekko się ogrzewa.
Równanie: <span class="formula" data-rx="hclNaOH">NaOH + HCl → NaCl + H₂O</span>
Wniosek: Zaszło zobojętnianie: H⁺ + OH⁻ → H₂O. Zanik barwy fenoloftaleiny oznacza, że nie ma już nadmiaru OH⁻.
BHP: Roztwory żrące — okulary.

@zlewka n02-doswiadczenia-v01 hclNaOH+php | Zobacz w zlewce (pracownia GFX)
@opis Do malinowego roztworu NaOH z fenoloftaleiną dodaje się porcjami kwas solny: barwa słabnie i w punkcie zobojętnienia roztwór staje się bezbarwny. Wniosek: HCl + NaOH → NaCl + H₂O (H⁺ + OH⁻ → H₂O) — kwas i zasada się zobojętniają.
:::

::: dosw | Doświadczenie G — Woda wapienna i CO₂ [[basic:E8]]
Problem: Czy w wydychanym powietrzu jest CO₂?
Hipoteza: Woda wapienna zmętnieje.
Sprzęt i odczynniki: woda wapienna (klarowny roztwór nasycony), rurka, probówka
Przebieg: Przez rurkę wdmuchuje się powietrze do wody wapiennej.
Obserwacje: Roztwór mętnieje (biały osad); przy bardzo długim dmuchaniu znów się klaruje.
Równanie: <span class="formula" data-rx="caoh2Co2">Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</span>
Wniosek: Wydychane powietrze zawiera CO₂ — woda wapienna służy do jego wykrywania. Klarowanie: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (rozszerzenie).
BHP: Nie zasysaj roztworu przez rurkę.

@zlewka n02-doswiadczenia-v01 caoh2Co2 | Zobacz w zlewce (pracownia GFX)
@opis Tlenek węgla(IV) wprowadzany do klarownej wody wapiennej: woda mętnieje, pojawia się biała zawiesina. Wniosek: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O — test wykrywający CO₂ i dowód kwasowego charakteru tego tlenku.
:::

::: dosw | Doświadczenie H — Amfoteryczność Al(OH)₃ [[extra:AMB]]
Problem: Czy Al(OH)₃ reaguje z kwasem i z zasadą?
Hipoteza: Reaguje z obydwoma.
Sprzęt i odczynniki: roztwór AlCl₃, roztwór NaOH, rozcieńczony HCl, 2 probówki
Przebieg: Strąca się Al(OH)₃ (NaOH kroplami), osad dzieli na dwie probówki; do jednej dodaje się HCl, do drugiej nadmiar NaOH.
Obserwacje: Biały, galaretowaty osad; w obu probówkach osad znika.
Równanie: <span class="formula" data-rx="alcl3Naoh">AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl</span>
Wniosek: Al(OH)₃ jest amfoteryczny: Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O oraz Al(OH)₃ + NaOH → Na[Al(OH)₄] (zapis LO).
BHP: NaOH żrący — okulary, rękawice.

@zlewka n02-doswiadczenia-v01 aloh3Naoh | Zobacz w zlewce (pracownia GFX)
@opis Do roztworu soli glinu dodaje się roztwór NaOH: najpierw wytrąca się biały galaretowaty osad Al(OH)₃, który w nadmiarze NaOH roztwarza się i roztwór znów jest klarowny. Wniosek: wodorotlenek glinu jest amfoteryczny — reaguje także z mocną zasadą.
:::

## 16 | Klinika błędów {#klinika .section}

::: div.table-wrap.table-compact
<table class="klinika-table" id="klinikaTable">
<thead><tr><th>Błąd</th><th>Poprawnie</th><th>Dlaczego?</th><th>Przykład z życia</th></tr></thead>
<tbody>
<tr class="error-row"><td class="col-blad">Ca<span class="hl-index">OH₂</span> <span style="font-size:11px;color:var(--c-error)">(indeks „przyklejony” tylko do H)</span></td><td class="col-ok">Ca(<span class="hl-index">OH</span>)₂ <span style="font-size:11px;color:var(--c-basic)">(indeks przy całej grupie)</span></td><td>Nawias obejmuje całą grupę OH⁻, nie tylko H. Indeks 2 dotyczy dwóch całych grup OH⁻.</td><td>Uczeń zapomniał nawiasu — wzór sugeruje, że indeks 2 dotyczy tylko wodoru, a nie dwóch całych grup OH⁻.</td></tr>
<tr class="error-row"><td class="col-blad">AlOH₃</td><td class="col-ok">Al(OH)₃</td><td>Nawias — 3 grupy OH⁻. Indeks 3 dotyczy całych grup, nie tylko wodoru.</td><td>Jak wyżej: bez nawiasu indeks 3 dotyczyłby tylko wodoru.</td></tr>
<tr class="error-row"><td class="col-blad">NaOH + HCl → NaCl</td><td class="col-ok">NaOH + HCl → NaCl + H₂O</td><td>Zobojętnianie daje sól i wodę. Woda jest produktem reakcji i nie może być pominięta.</td><td>Zapomniano o wodzie — najczęstszy błąd przy przepisywaniu równania zobojętniania.</td></tr>
<tr class="error-row"><td class="col-blad">CaO + H₂O → CaOH</td><td class="col-ok">CaO + H₂O → Ca(OH)₂</td><td>Brak bilansu atomów wodoru (po lewej 2 H, po prawej 1 H) oraz brak nawiasu dla grupy OH⁻. Poprawny zapis wymaga dwóch grup OH⁻ przy wapniu.</td><td>Uczeń zapomina, że w reakcji tlenku z wodą powstaje wodorotlenek, a nie tlenek wodorotlenku. Dodatkowo myli zapis z nawiasem.</td></tr>
<tr class="error-row"><td class="col-blad">Wszystkie wodorotlenki są silnie zasadowe</td><td class="col-ok">Tylko dobrze rozpuszczalne dają silny odczyn</td><td>Rozpuszczalność decyduje o stężeniu OH⁻. Trudno rozpuszczalne wodorotlenki dają bardzo mało jonów OH⁻ w roztworze.</td><td>Ktoś miesza zawiesinę Fe(OH)₃ i spodziewa się odczynu jak po NaOH — a odczynu praktycznie nie ma.</td></tr>
<tr class="error-row"><td class="col-blad">Fe(OH)₃ rozpuszcza się w wodzie</td><td class="col-ok">Fe(OH)₃ jest praktycznie nierozpuszczalny</td><td>Większość wodorotlenków metali przejściowych jest nierozpuszczalna.</td><td>Po dodaniu NaOH do FeCl₃ powstaje brunatny osad, nie klarowny roztwór.</td></tr>
<tr class="error-row"><td class="col-blad">MgO nie reaguje z wodą</td><td class="col-ok">MgO reaguje bardzo wolno; powstaje trudno rozpuszczalny Mg(OH)₂</td><td>Mg(OH)₂ otrzymuje się wygodniej przez strącanie, ale reakcja zachodzi.</td><td>W praktyce szkolnej Mg(OH)₂ robi się z MgCl₂ + NaOH, bo reakcja MgO z wodą jest zbyt wolna.</td></tr>
<tr class="error-row"><td class="col-blad">Każdy tlenek metalu reaguje z wodą</td><td class="col-ok">Tylko niektóre tlenki zasadowe (metali aktywnych)</td><td>CuO, Fe₂O₃ i Al₂O₃ praktycznie nie reagują z wodą.</td><td>Wsypanie CuO do wody nie da niebieskiego roztworu — to nie zadziała.</td></tr>
<tr class="error-row"><td class="col-blad">Zasada = wodorotlenek</td><td class="col-ok">Wodorotlenek = substancja; zasada = jej wodny roztwór</td><td>Stały NaOH to wodorotlenek; jego wodny roztwór jest zasadą (ługiem sodowym).</td><td>Butelka z NaOH to wodorotlenek; zlewka z roztworem NaOH to zasada — wodny roztwór wodorotlenku.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„Sprawdzę zasadowość na języku albo palcem.”</td><td class="col-ok" data-label="Poprawnie">Odczyn bada się **wskaźnikiem** (fenoloftaleina, uniwersalny papierek); odczynników nie dotykamy i nie smakujemy.</td><td data-label="Dlaczego">BHP — zasady są żrące dla skóry i oczu.</td><td>—</td><td>—</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„Odczyn zasadowy = żrący.”</td><td class="col-ok" data-label="Poprawnie">Roztwór może mieć odczyn zasadowy i nie być żrący (np. woda z mydłem, rozcieńczony roztwór amoniaku); żrące są stężone roztwory mocnych zasad.</td><td data-label="Dlaczego">Zasadowość i żrącość to różne cechy.</td><td>—</td><td>—</td></tr>
</tbody>
</table>
:::

::: karta exam | Zadanie — popraw zdanie
**Polecenie:** Uczeń napisał w zeszycie: „Fe(OH)₃ rozpuszcza się w wodzie i daje odczyn zasadowy." Popraw to zdanie i wyjaśnij, dlaczego jest błędne.

::: odp | Pokaż odpowiedź
**Poprawnie:** Fe(OH)₃ jest praktycznie nierozpuszczalny w wodzie. Nie tworzy roztworu o wyraźnym odczynie zasadowym, bo stężenie jonów OH⁻ w roztworze jest zbyt małe.

**Wyjaśnienie:** O odczynie roztworu decyduje stężenie wolnych jonów OH⁻. Jeśli wodorotlenek prawie nie przechodzi do roztworu (jak Fe(OH)₃), to do roztworu trafia znikoma liczba jonów OH⁻ — odczyn praktycznie obojętny.
:::
:::

::: odp | Przełącznik błędu — ile grup OH⁻ jest w Ca(OH)₂? (1 / 2 / 3)
**2.** Indeks za nawiasem mnoży całą grupę OH: Ca(OH)₂ = 1 Ca, 2 O, 2 H. Zapis CaOH₂ oznaczałby 1 grupę OH i dodatkowy atom H.
:::

### Sprawdź się {.merge-h}

::: div.rule-box
1. Popraw: <span class="formula">CaOH₂</span> → ?
2. Czy <span class="formula">OH⁻</span> jest związkiem chemicznym czy jonem?
3. Czy trudno rozpuszczalny wodorotlenek automatycznie oznacza „słabą zasadę”?
4. Co różni wodę wapienną od mleka wapiennego?
5. Dlaczego <span class="formula">H–O–Ca–O–H</span> nie powinno być podpisane jako rzeczywista cząsteczka Ca(OH)₂?

::: odp | Pokaż odpowiedzi
1. <span class="formula">Ca(OH)₂</span>.
2. Jest anionem wodorotlenkowym.
3. Nie. Rozpuszczalność i moc elektrolitu to różne pojęcia.
4. Woda wapienna jest klarownym nasyconym roztworem; mleko wapienne jest zawiesiną z fazą stałą.
5. Stały Ca(OH)₂ opisujemy jako układ jonowy; rysunek jest tylko modelem poglądowym składu.
:::
:::

::: odp | Mini-klinika błędów
1. **„Ca(OH)₂ jest zasadą, bo ma OH w wzorze.”** — Nie wystarczy sam wzór. Trzeba mówić o roztworze i obecności OH⁻.
2. **„Amfoteryczny reaguje ze wszystkim.”** — Nie. Wskazujemy konkretny reagent i środowisko.
3. **„NH₄OH to zwykła cząsteczka w każdym roztworze amoniaku.”** — To tradycyjny zapis szkolny; dokładniejszy model wodnego amoniaku używa NH₃(aq) ⇌ NH₄⁺ + OH⁻.
:::

## 17 | Ćwiczenia {#cwiczenia .section}

> Reguły potrzebne do zadań: wzory [§5](#budowa), rozpuszczalność [§6.2](#rozpuszczalnosc-tabela), otrzymywanie [§7](#otrzymywanie), zobojętnianie [§8.1](#zobojetnianie).

### 17.1 Mini-check

::: karta -
1. Co to wodorotlenek?
2. Jaki ładunek ma grupa OH⁻?
3. Kiedy stosujemy nawias?
4. Trzy typowe szkolne metody otrzymywania wodorotlenków?
5. Co to zobojętnianie?

::: odp | Pokaż odpowiedzi
**1.** Związek z kationu metalu i anionu OH⁻.

**2.** −1.

**3.** Gdy grupa OH⁻ powtarza się więcej niż raz.

**4.** Tlenek metalu aktywnego + woda; metal aktywny + woda; sól + zasada.

**5.** Reakcja kwasu z zasadą → sól + woda.
:::
:::

### 17.2 Ćwiczenie prowadzone — Ca(OH)₂

::: karta -
**Polecenie:** Mając dany kation wapnia Ca²⁺, wykonaj kolejne polecenia:

1. Zapisz wzór wodorotlenku.
2. Podaj jego nazwę.
3. Zapisz trzy metody otrzymywania tego wodorotlenku.
4. Zapisz równanie zobojętniania tego wodorotlenku kwasem solnym HCl.

::: odp | Pokaż odpowiedź
**1. Wzór:** Ca(OH)₂ (wapń +2, więc 2 grupy OH⁻, nawias obowiązkowy).

**2. Nazwa:** wodorotlenek wapnia.

**3. Trzy metody:**

• tlenek + woda: CaO + H₂O → Ca(OH)₂

• metal + woda: Ca + 2H₂O → Ca(OH)₂ + H₂↑ <span class="mini-note">(przykład szkolny; przebieg zależy od warunków, np. temperatury i stanu powierzchni metalu)</span>

• sól + zasada: CaCl₂ + 2NaOH → Ca(OH)₂↓ + 2NaCl <span class="mini-note">(tylko z roztworów stężonych — Ca(OH)₂ jest trudno, ale nie praktycznie nierozpuszczalny)</span>

**4. Zobojętnianie:** Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O.
:::
:::

### 17.3 Ćwiczenia samodzielne

#### A. Podstawa [[basic:E8]]

::: karta -
1. Wzory: wodorotlenek potasu, wodorotlenek wapnia, wodorotlenek glinu, wodorotlenek żelaza(III).
2. Nazwy: NaOH, Mg(OH)₂, Fe(OH)₂, Cu(OH)₂.
3. Dokończ: CaO + H₂O → … ; NaOH + HCl → …
4. Popraw: CaOH₂; NaOH + H₂SO₄ → Na₂SO₄.
5. Które wodorotlenki są dobrze rozpuszczalne?
6. Jakie wskaźniki potwierdzają odczyn zasadowy?

::: odp | Pokaż odpowiedzi
1. KOH, Ca(OH)₂, Al(OH)₃, Fe(OH)₃.
2. wodorotlenek sodu, magnezu, żelaza(II), miedzi(II).
3. Ca(OH)₂ ; NaCl + H₂O.
4. Ca(OH)₂ ; 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.
5. NaOH, KOH, LiOH, Ba(OH)₂ (dobrze); Ca(OH)₂ (trudno, ale tworzy wodę wapienną).
6. fenoloftaleina (malinowa), oranż metylowy (żółty), papierek uniwersalny (niebieski).
:::
:::

#### B. Trening / egzamin [[basic:E8]]

::: karta -
::: ol {start="7"}
<li>Zobojętnianie: KOH + HNO₃; Ca(OH)₂ + H₂SO₄; Al(OH)₃ + 3HCl.</li>

<li>Skąd Ca(OH)₂, mając CaO?</li>

<li>Dlaczego Ca(OH)₂, a nie CaOH₂?</li>

<li>Otrzymywanie Mg(OH)₂ z MgCl₂ i NaOH.</li>

<li>Uzupełnij: FeCl₃ + 3NaOH → ? ; CuSO₄ + 2NaOH → ?</li>
:::

::: odp | Pokaż odpowiedzi
::: ol {start="7"}
<li>KNO₃ + H₂O ; CaSO₄ + 2H₂O ; AlCl₃ + 3H₂O.</li>

<li>CaO + H₂O → Ca(OH)₂.</li>

<li>Indeks 2 dotyczy całej grupy OH⁻.</li>

<li>MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl.</li>

<li>Fe(OH)₃↓ + 3NaCl ; Cu(OH)₂↓ + Na₂SO₄.</li>
:::
:::
:::

#### C. Ambitne [[understand:ROZUMIENIE]]

::: karta -
::: ol {start="12"}
<li>FeCl₃ + NaOH — równanie + obserwacja + wniosek.</li>

<li>Które wodorotlenki dają silnie zasadowy roztwór?</li>

<li>Dlaczego Al(OH)₃ reaguje z HCl i NaOH?</li>

<li>Zaprojektuj doświadczenie: odczyn KOH.</li>

<li>Trzy poziomy zapisu NaOH + HCl.</li>
:::

::: odp | Pokaż odpowiedzi
::: ol {start="12"}
<li>Problem → Hipoteza → Sprzęt → Obserwacja (brunatny osad) → Wniosek → Równanie → BHP. Równanie: FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl. Obserwacja: powstaje rdzawobrunatny osad. Wniosek: z soli żelaza(III) i zasady powstaje praktycznie nierozpuszczalny Fe(OH)₃ (por. doświadczenie D).</li>

<li>NaOH, KOH i Ba(OH)₂ są dobrze rozpuszczalne i tworzą roztwory wyraźnie zasadowe. Fe(OH)₃ jest praktycznie nierozpuszczalny, więc nie tworzy w wodzie takiego roztworu.</li>

<li>Al(OH)₃ jest amfoteryczny. Z kwasem reaguje jak zasada (Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O), a z mocną zasadą tworzy rozpuszczalny związek kompleksowy (Al(OH)₃ + NaOH → Na[Al(OH)₄]).</li>

<li>Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP. Np.: problem — jaki odczyn ma roztwór KOH? Hipoteza — zasadowy. Sprzęt — roztwór KOH, fenoloftaleina, papierek uniwersalny, probówki. Obserwacja — fenoloftaleina malinowa, papierek niebieski. Wniosek — odczyn zasadowy (jony OH⁻). Równanie: KOH → K⁺ + OH⁻. BHP — okulary, rękawice.</li>

<li>Cząsteczkowe: NaOH + HCl → NaCl + H₂O. Jonowe pełne: Na⁺ + OH⁻ + H⁺ + Cl⁻ → Na⁺ + Cl⁻ + H₂O. Skrócone: H⁺ + OH⁻ → H₂O.</li>
:::
:::
:::

#### D. Zaawansowane [[extra:AMBITNE]]

::: karta -
::: ol {start="17"}
<li>Dysocjacja: NaOH, Ca(OH)₂, Ba(OH)₂.</li>

<li>Co to hydrat? Przykład.</li>

<li>Dlaczego AgOH jest nietrwały?</li>

<li>Różnica rozpuszczalny vs mocny.</li>

<li>Dlaczego Ba(OH)₂ + H₂SO₄ daje wodę i osad?</li>
:::

::: odp | Pokaż odpowiedzi
::: ol {start="17"}
<li>NaOH → Na⁺ + OH⁻ ; Ca(OH)₂ → Ca²⁺ + 2OH⁻ ; Ba(OH)₂ → Ba²⁺ + 2OH⁻.</li>

<li>Związek z cząsteczkami wody w sieci, np. CuSO₄·5H₂O.</li>

<li>2AgOH → Ag₂O + H₂O. Wodorotlenek srebra(I) szybko przekształca się w tlenek srebra(I).</li>

<li>Rozpuszczalny = ile przechodzi do roztworu. Mocny = stopień dysocjacji cząstek w roztworze. Ca(OH)₂ jest słabiej rozpuszczalny niż NaOH, ale rozpuszczona część dysocjuje praktycznie całkowicie.</li>

<li>Dwa procesy: H⁺ + OH⁻ → H₂O oraz Ba²⁺ + SO₄²⁻ → BaSO₄↓.</li>
:::
:::
:::

#### E. Zadania z obserwacją (typ E8) [[basic:E8]]

::: karta exam
**Zadanie 1.** Fenoloftaleina w probówkach A, B, C. A — malinowa, B — bezbarwna. Do A dodawano HCl, aż barwa znikła.

1. Odczyn A?
2. Jony odpowiedzialne?
3. Nazwa reakcji po dodaniu HCl?
4. Równanie jonowe skrócone.

::: odp | Pokaż odpowiedzi
**1.** Zasadowy.

**2.** OH⁻.

**3.** Zobojętnianie.

**4.** H⁺ + OH⁻ → H₂O.
:::
:::

::: karta exam
**Zadanie 2.** Do roztworu soli Fe(III) dodano kilka kropli NaOH bez nadmiaru. Powstał brunatny osad.

1. Równanie cząsteczkowe.
2. Typ reakcji.
3. Jeżeli NaOH dodano bez nadmiaru, dlaczego po wytrąceniu Fe(OH)₃ nie obserwuje się wyraźnie zasadowego odczynu?

::: odp | Pokaż odpowiedzi
**1.** FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl.

**2.** Reakcja strąceniowa.

**3.** Bez nadmiaru NaOH jony OH⁻ zostały praktycznie w całości zużyte na wytrącenie Fe(OH)₃. Sam osad jest praktycznie nierozpuszczalny, więc nie uwalnia jonów OH⁻ do roztworu — stężenie OH⁻ jest zbyt małe, aby odczyn był wyraźnie zasadowy.
:::
:::

::: karta basic | Utrwalenie — wodorotlenki i zasady (W1)
1. Czym różni się wodorotlenek od zasady?
2. Zapisz wzór wodorotlenku żelaza(III).
3. Zapisz reakcję KOH z HNO₃.
4. Zapisz dysocjację Ba(OH)₂.
5. Dlaczego Al(OH)₃ nie zalicza się do zasad?
6. Zapisz otrzymywanie Cu(OH)₂ z CuSO₄ i NaOH.

::: odp | Pokaż odpowiedzi
1. Wodorotlenek to związek z kationem metalu i anionami OH⁻; zasada to wodny roztwór wodorotlenku rozpuszczalnego (lub substancja dająca w wodzie jony OH⁻, np. NH₃).
2. Fe(OH)₃.
3. KOH + HNO₃ → KNO₃ + H₂O.
4. Ba(OH)₂ → Ba²⁺ + 2 OH⁻.
5. Jest praktycznie nierozpuszczalny w wodzie, więc nie daje roztworu zasadowego (jest amfoteryczny).
6. CuSO₄ + 2 NaOH → Cu(OH)₂↓ + Na₂SO₄ (niebieski galaretowaty osad).
:::
:::

## 18 | Test końcowy {#test .section}

Kliknij odpowiedź — od razu zobaczysz, czy jest poprawna. Bez limitu czasu.

<div class="quiz-wrap" id="quizWrap"></div>

<div class="quiz-score" id="quizScore"></div>

::: karta understand {style="margin-top:18px;"} | Ćwiczenie — współczynniki (bez limitu czasu)
Uzupełnij i sprawdź w odpowiedzi poniżej.

<pre class="step-flow">FeCl₃ + ___ NaOH → Fe(OH)₃↓ + ___ NaCl
CuSO₄ + ___ NaOH → Cu(OH)₂↓ + ___ Na₂SO₄
AlCl₃ + ___ NaOH → Al(OH)₃↓ + ___ NaCl</pre>

::: odp | Pokaż współczynniki
\<span class="formula" data-rx="fecl3Naoh">FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl</span>

\<span class="formula" data-rx="cuso4Naoh">CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</span>

\<span class="formula" data-rx="alcl3Naoh">AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl</span>

> Liczba OH⁻ = wartość bezwzględna ładunku kationu metalu. Potem domknij bilans atomów Cl / SO₄.
:::
:::

## 19 | Karta szybkiego powtórzenia (do druku) [[basic:E8]] {#karta .section}

::: karta basic | Najważniejsze w 8 punktach
1. **Wodorotlenek** = kation metalu + n grup OH⁻; wzór M(OH)ₙ, n = wartość bezwzględna ładunku kationu ([§5](#budowa)).
2. **Nawias** tylko gdy OH⁻ > 1: NaOH, Ca(OH)₂, Al(OH)₃; nazwa: wodorotlenek + metal (+ cyfra rzymska dla Fe, Cu…).
3. **Rozpuszczalne**: NaOH, KOH, LiOH, Ba(OH)₂; Ca(OH)₂ trudno; osady: Cu(OH)₂ (niebieski), Fe(OH)₃ (brunatny), Mg(OH)₂, Al(OH)₃, Zn(OH)₂ (białe) ([§6.2](#rozpuszczalnosc-tabela)).
4. **Zasada** = wodny roztwór wodorotlenku z jonami OH⁻; dysocjacja Ca(OH)₂ → Ca²⁺ + 2OH⁻ ([§6.3](#wodorotlenek-vs-zasada)).
5. **Wskaźniki w zasadzie**: fenoloftaleina malinowa, oranż metylowy żółty, papierek niebieski ([§6.4](#ph-wskazniki)).
6. **Otrzymywanie**: tlenek + woda; metal aktywny + woda (+ H₂↑); sól + zasada → osad ([§7](#otrzymywanie)).
7. **Zobojętnianie**: wodorotlenek + kwas → sól + woda; H⁺ + OH⁻ → H₂O ([§8.1](#zobojetnianie)).
8. **Woda wapienna + CO₂** → CaCO₃↓ (mętnienie); NaOH/KOH higroskopijne i żrące ([§6.5](#wapno), [§9.2](#bhp)).
:::

::: karta exam | Strategia na E8 — 4 kroki przy wzorze
1. **Kation** — jaki metal i jaki ładunek? (Na⁺ / Ca²⁺ / Al³⁺ / Fe³⁺…)
2. **Liczba OH⁻** = wartość bezwzględna ładunku kationu.
3. **Nawias?** tylko gdy OH⁻ więcej niż 1.
4. **Kontrola** — suma ładunków = 0; indeks za nawiasem mnoży całą grupę.

> Na kartce egzaminacyjnej zapisz najpierw ładunek, potem dopiero wzór. To zmniejsza liczbę błędów typu CaOH₂.
:::

::: karta understand | Schemat W–K–S–K a wodorotlenki
Wodorotlenek łączy się z **kwasem** (zobojętnianie) i powstaje z **tlenku** (lub metalu / soli). Na mapie przemian:

<p style="text-align:center;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:13px;line-height:1.9;">
<strong>Tlenek zasadowy</strong> + H₂O → <strong>Wodorotlenek</strong><br/>
<strong>Wodorotlenek</strong> + kwas → <strong>Sól</strong> + H₂O<br/>
<strong>Sól</strong> + zasada → <strong>Wodorotlenek↓</strong> + sól
      </p>

Zapamiętaj: wodorotlenek stoi między tlenkiem a solą w łańcuchu przemian.
:::

## 20 | Fiszki {#fiszki .section}

::: fiszki
Co to wodorotlenek? | **Związek z kationu metalu i anionu OH⁻.** | basic:podstawa
Wzór ogólny | **M(OH)ₙ, n = liczba grup OH⁻. W typowych wodorotlenkach kl. 8 równa wartości bezwzględnej ładunku kationu.** | basic:podstawa
Kiedy nawias? | **Gdy OH⁻ powtarza się więcej niż raz.** | basic:podstawa
Wiązania w modelu OH⁻ | **O–H ciągłe (kowalencyjne spolaryzowane); M···O przerywane (oddziaływanie jonowe). Model szkolny, nie sieć kryształu.** | basic:podstawa
Dlaczego nie CaOH₂? | **Indeks 2 dotyczyłby tylko H. Poprawnie: Ca(OH)₂ — dwie całe grupy OH⁻ (= Ca₁O₂H₂).** | error:błąd E8
Elektrolit a zasada | **Roztwór NaOH ma jony Na⁺ i OH⁻ → przewodzi prąd (elektrolit) i ma odczyn zasadowy.** | basic:podstawa
Higroskopijność | **NaOH i KOH pochłaniają wilgoć z powietrza i „rozpływają się”. Szczelne naczynia!** | exam:E8
Woda wapienna vs mleko | **Woda wapienna = klarowny nasycony roztwór Ca(OH)₂. Mleko = mętna zawiesina.** | exam:E8
Zobojętnianie — produkty | **sól + woda** | basic:podstawa
NaOH + HCl → ? | **NaCl + H₂O** | basic:podstawa
Ca(OH)₂ + 2HCl → ? | **CaCl₂ + 2H₂O** | basic:podstawa
Fenoloftaleina w zasadzie | **Malinowa** | basic:podstawa
Dobrze rozpuszczalne wodorotlenki | **NaOH, KOH, LiOH, Ba(OH)₂; Ca(OH)₂ trudno, ale tworzy wodę wapienną** | basic:podstawa
Dysocjacja NaOH | **NaOH → Na⁺ + OH⁻** | basic:podstawa
Barwa Fe(OH)₃ | **Brunatna (rdzawa)** | basic:podstawa
Amfoteryczne wodorotlenki | **Al(OH)₃, Zn(OH)₂** | extra:ambitny
Wodorotlenek vs zasada | **Wodorotlenek = substancja. Zasada = wodny roztwór wodorotlenku dostarczający OH⁻.** | basic:podstawa
Równanie jonowe skrócone zobojętniania | **H⁺ + OH⁻ → H₂O** | extra:ambitny
Woda wapienna + CO₂ → ? | **CaCO₃↓ + H₂O — roztwór mętnieje (wykrywanie CO₂)** | exam:E8
Barwa Cu(OH)₂ | **Niebieska (galaretowaty osad)** | basic:podstawa
Wapno palone, gaszone | **Palone = CaO; gaszone = Ca(OH)₂** | exam:E8
:::

## 21 | Mapa pojęć {#mapa .section}

::: div.card.map-card
::: div.mmx
<div class="mmx-box" style="--mm:#0d6868"><b>WODOROTLENEK</b><ul><li>kation metalu + aniony OH⁻</li><li>substancja stała (kryształ, osad)</li><li>sieć jonowa, nie cząsteczka H–O–M–O–H</li></ul></div>

<div class="mmx-box" style="--mm:#b06f1c"><b>M(OH)ₙ — kation + n grup OH⁻</b><ul><li>n = liczba grup OH⁻ (w prostych wodorotlenkach = wartościowość kationu)</li><li>suma ładunków = 0</li></ul></div>

<div class="mmx-box" style="--mm:#2e7d4f"><b>WZORY I NAZWY</b><ul><li>NaOH, KOH, Ca(OH)₂</li><li>Al(OH)₃, Fe(OH)₃</li><li>Cu(OH)₂, Mg(OH)₂</li><li>nawias gdy OH &gt; 1</li><li>cyfra rzymska: Fe, Cu, Sn, Pb</li></ul></div>

<div class="mmx-box" style="--mm:#b06f1c"><b>ROZPUSZCZALNOŚĆ</b><ul><li>✓ NaOH, KOH, LiOH, Ba(OH)₂</li><li>~ Ca(OH)₂, Mg(OH)₂</li><li>× Fe(OH)₃, Cu(OH)₂, Al(OH)₃</li><li>Ca(OH)₂ = woda wapienna</li><li>mleko wapienne = zawiesina</li></ul></div>

<div class="mmx-box" style="--mm:#2b5e9c"><b>ZASADA I DYSOCJACJA</b><ul><li>zasada = wodny roztwór wodorotlenku</li><li>NaOH → Na⁺ + OH⁻</li><li>elektrolit — przewodzi prąd</li><li>rozpuszczalny ≠ mocny</li></ul></div>

<div class="mmx-box" style="--mm:#6b3fa0"><b>WŁAŚCIWOŚCI</b><ul><li>odczyn zasadowy</li><li>wskaźniki</li><li>zobojętnianie</li><li>tylko rozpuszczalne</li><li>NaOH, KOH: higroskopijne, żrące</li></ul></div>

<div class="mmx-box" style="--mm:#2b5e9c"><b>OTRZYMYWANIE</b><ul><li>1. tlenek + woda</li><li>2. metal aktywny + woda</li><li>3. sól + zasada</li><li>zależnie od wodorotlenku</li></ul></div>

<div class="mmx-box" style="--mm:#b83a45"><b>ZOBOJĘTNIANIE</b><ul><li>wodorotlenek + kwas</li><li>→ sól + woda</li><li>H⁺ + OH⁻ → H₂O</li><li>jony widzowe: Na⁺, Cl⁻</li></ul></div>

<div class="mmx-box" style="--mm:#2e7d4f"><b>INNE REAKCJE</b><ul><li>zasada + CO₂ → sól + woda</li><li>ogrzewanie → tlenek + woda</li><li>strącanie → osad o barwie kationu</li></ul></div>

<div class="mmx-box" style="--mm:#6b3fa0"><b>AMFOTERYCZNOŚĆ</b><ul><li>Al(OH)₃, Zn(OH)₂</li><li>+ kwasy, + zasady</li><li>poziom rozszerzony</li></ul></div>

<div class="mmx-box" style="--mm:#b06f1c"><b>Ca(OH)₂ — WAPNO</b><ul><li>palone CaO → gaszone Ca(OH)₂</li><li>mleko (zawiesina) → woda (roztwór)</li><li>wykrywanie CO₂, zaprawa</li></ul></div>

<div class="mmx-box" style="--mm:#1a2332"><b>MOSTY: tlenki · kwasy · sole</b><ul><li>N01: tlenek zasadowy + woda</li><li>N03: kwas + zasada</li><li>N04: sól + zasada, produkt zobojętniania</li></ul></div>
:::
:::

## 22 | Słownik {#slownik .section}

::: karta -
::: slownik {.def-list}
Higroskopijność :: Zdolność substancji do pochłaniania wilgoci z powietrza (np. NaOH, KOH).
Elektrolit :: Substancja, której roztwór wodny przewodzi prąd dzięki jonom.
Woda wapienna :: Klarowny, nasycony roztwór Ca(OH)₂; mętnieje z CO₂.
Wodorotlenek :: Związek zawierający kation metalu i anion OH⁻. W zapisie szkolnym spotyka się NH₄OH, ale roztwór amoniaku opisujemy dokładniej przez równowagę NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.
Grupa wodorotlenkowa OH⁻ :: Anion o ładunku −1, składający się z tlenu i wodoru.
Zasada (szkolnie) :: Wodny roztwór niektórych wodorotlenków, który zawiera jony OH⁻ i ma odczyn zasadowy. W szerszym ujęciu zasadą może być także substancja niezawierająca grup OH⁻, np. amoniak NH₃.
Zobojętnianie :: Reakcja kwasu z zasadą → sól + woda.
Wskaźnik :: Substancja zmieniająca barwę zależnie od pH.
Strącanie :: Reakcja, w której powstaje trudno rozpuszczalny osad.
Mleko wapienne :: Zawiesina nierozpuszczonego Ca(OH)₂ w wodzie.
Hydrat :: Związek z cząsteczkami wody w sieci, np. CuSO₄·5H₂O.
Amfoteryczny :: Reagujący i z kwasami, i z zasadami.
Dysocjacja elektrolityczna :: Rozpad związku na jony w wodzie (Arrhenius).
Nieelektrolit :: Substancja, której roztwór nie przewodzi prądu, bo nie zawiera swobodnych jonów (np. cukier).
Jony widzowe :: Jony, które nie zmieniają się w reakcji (np. Na⁺ i Cl⁻ przy zobojętnianiu NaOH kwasem solnym); pomija się je w równaniu jonowym skróconym.
Odczyn zasadowy :: Odczyn roztworu o pH > 7 — nadmiar jonów OH⁻ względem czystej wody.
Wapno palone / gaszone :: CaO / Ca(OH)₂.
Teoria Brønsteda :: Kwas = donor protonu H⁺, zasada = akceptor H⁺.
:::
:::

## 23 | Checklista {#checklista .section}

::: div.checklist
#### Sprawdź, czy umiesz:

- Zapisać wzór wodorotlenku dla dowolnego kationu.
- Potrafię zapisać wzory: NaOH, KOH, Ca(OH)₂, Al(OH)₃, Cu(OH)₂ i podać nazwy
- Zastosować nawias, gdy grupa OH⁻ powtarza się więcej niż raz.
- Nazwać wodorotlenek (z cyfrą rzymską dla Fe, Cu, Sn, Pb).
- Potrafię narysować szkolny model poglądowy Ca(OH)₂ i Al(OH)₃ (O–H ciągła, M···O przerywana) i wiem, że to nie jest wzór strukturalny cząsteczki
- Rozróżnić wodorotlenki rozpuszczalne i nierozpuszczalne.
- Rozróżnić wodorotlenek (substancja) od zasady (roztwór); znam pojęcie elektrolitu.
- Zapisać dysocjację zasady.
- Opisać odczyn zasadowy i wskaźniki.
- Znam higroskopijność NaOH/KOH i BHP ługów
- Rozróżniam wapno palone, gaszone, mleko i wodę wapienną
- Zapisać reakcję niektórych tlenków zasadowych metali aktywnych z wodą, np. CaO + H₂O → Ca(OH)₂.
- Wyjaśnić, dlaczego nie każdy tlenek reaguje z wodą.
- Rozpoznać, że metal aktywny + woda → wodorotlenek + wodór.
- Zapisać reakcję strącania z soli i zasady. Podać barwę osadu Cu(OH)₂ i Fe(OH)₃.
- Zapisać reakcję zobojętniania.
- Zapisać reakcję wody wapiennej z CO₂.
- (ambitnie) Wyjaśnić amfoteryczność.
- (ambitnie) Zapisać równanie jonowe skrócone.
:::

## 24 | Wskazówki do nauki {#wskazowki .section}

::: div.tips-box
#### Jak uczyć się skuteczniej — nie plan, tylko porady

<p style="margin-bottom:14px;font-size:13.5px;color:var(--text-soft);">Każdy uczy się inaczej i w swoim tempie. Poniżej zbiór wskazówek, które możesz wykorzystać w dowolnej kolejności.</p>

::: div.tips-list
<div class="tip-card">
<b>Odtwarzaj, nie zapamiętuj</b>
          Nie ucz się wzorów na pamięć. Zawsze zaczynaj od ładunku kationu i policz, ile grup OH⁻ potrzebujesz. Wzór sam się zbuduje.
        </div>

<div class="tip-card">
<b>Używaj modeli naprzemiennie</b> Po przeczytaniu teorii od razu otwórz model: wzór wodorotlenku (<a href="#wzor-ogolny">§5.2</a>), przegląd (<a href="#rozpuszczalnosc-tabela">§6.2</a>), strącanie (<a href="#ion-lab">§12</a>). Wzrokowiec zapamiętuje szybciej, gdy widzi i robi.
        </div>

<div class="tip-card">
<b>Fiszki w krótkich sesjach</b>
          Lepiej 5 minut dziennie niż 30 minut raz w tygodniu. Fiszki są do szybkiego przypominania — nie czytaj ich jak podręcznika.
        </div>

<div class="tip-card">
<b>Sprawdzaj się po każdej sekcji</b>
          Po każdej sekcji teoretycznej otwórz ćwiczenia i spróbuj rozwiązać 2–3 zadania. To pokaże, czy naprawdę rozumiesz, czy tylko rozpoznajesz.
        </div>

<div class="tip-card">
<b>Rysuj wzory ręcznie</b>
          Narysuj na kartce Ca(OH)₂ z kationem i dwiema grupami OH⁻. Ręczne rysowanie utrwala strukturę lepiej niż czytanie.
        </div>

<div class="tip-card">
<b>Łącz z życiem codziennym</b>
          Zauważ, gdzie w domu spotykasz wodorotlenki (środki czystości, leki na zgagę, wapno budowlane). Konkret zapamiętuje się łatwiej niż abstrakcja.
        </div>

<div class="tip-card">
<b>Powtarzaj błędy, nie tylko sukcesy</b>
          Wróć do „Kliniki błędów" i zapisz sobie trzy najczęstsze pułapki. Świadomość błędów chroni przed ich powtarzaniem.
        </div>

<div class="tip-card">
<b>Wracaj do mapy pojęć</b>
          Na końcu nauki otwórz mapę pojęć i spróbuj samodzielnie odtworzyć połączenia. To test globalnego zrozumienia.
        </div>
:::
:::

## A | Dodatek A — Historia odkrycia [[extra:NADPROGRAMOWE]] {#historia .section}

Skąd wiemy to, co wiemy? Poznanie wodorotlenków to ponad 200 lat obserwacji. Pięć momentów, które doprowadziły do dzisiejszej definicji.

::: div.hist-grid
::: figure.hist-card
<div class="hist-year">1754</div>

<div class="hist-who">Joseph Black</div>

::: div.hist-ill
<div class="svgx"><span>alkalia — substancje „mydlące”</span><span>wapno</span><span>potaż</span><span>soda</span></div>
:::

<figcaption>Badał substancje alkaliczne (wapno, potaż, sodę). Pokazał, że „powietrze stałe” (CO₂) wiąże się z alkaliami — początek chemii zasad.</figcaption>
:::

::: figure.hist-card
<div class="hist-year">1807–08</div>

<div class="hist-who">Humphry Davy</div>

::: div.hist-ill
<div class="svgx"><span>K / Na</span><span>O₂</span><span>+ −</span><span>elektroliza stopionych alkaliów</span></div>
:::

<figcaption>Przez elektrolizę otrzymał potas i sód z alkaliów. Pokazał, że alkalia żrące — „potaż” i „soda” — są związkami nieznanych wcześniej metali: potasu i sodu. Metale litowców istnieją!</figcaption>
:::

::: figure.hist-card
<div class="hist-year">1810–20</div>

<div class="hist-who">Gay-Lussac i Thenard</div>

::: div.hist-ill
<div class="svgx"><span>skład alkaliów = metal + tlen + wodór</span><span>Na</span><span>O</span><span>H</span><span>Na + O + H → NaOH</span></div>
:::

<figcaption>Ustalili, że alkalia to połączenia metalu, tlenu i wodoru — droga do wzoru NaOH i pojęcia wodorotlenku.</figcaption>
:::

::: figure.hist-card
<div class="hist-year">1887</div>

<div class="hist-who">Svante Arrhenius</div>

::: div.hist-ill
<div class="svgx"><span>dysocjacja w wodzie</span><span>Na⁺</span><span>OH⁻</span><span>H₂O</span><span>zasada → jony OH⁻ (definicja szkolna)</span></div>
:::

<figcaption>Teoria dysocjacji elektrolitycznej: zasada to substancja, która w wodzie daje jony OH⁻. To definicja, której uczysz się na E8. Zob. <a href="#wodorotlenek-vs-zasada">§6.3</a>.</figcaption>
:::

::: figure.hist-card
<div class="hist-year">1923</div>

<div class="hist-who">Brønsted i Lowry</div>

::: div.hist-ill
<div class="svgx"><span>teoria protonowa (liceum)</span><span>H⁺</span><span>NH₃</span><span>donor</span><span>akceptor protonu</span><span>NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</span></div>
:::

<figcaption>Zasada = akceptor protonu H⁺. NH₃ jest zasadą mimo braku OH⁻ we wzorze — to poziom liceum, na E8 wystarczy Arrhenius. Zob. <a href="#ambitny">Dodatek B</a>.</figcaption>
:::
:::

## B | Dodatek B — teorie kwasów i zasad, hydraty [[extra:AMBITNE]] {#ambitny .section}

::: karta extra | Teoria Brønsteda i Lowry'ego — kim byli?
**Johannes Nicolaus Brønsted** (1879–1947) — duński chemik fizyczny. **Thomas Martin Lowry** (1874–1936) — angielski chemik. W 1923 roku niezależnie od siebie zaproponowali nową definicję kwasów i zasad.

**Ich definicja (teoria protonowa):**

- **Kwas** = substancja, która oddaje proton H⁺ (donor protonu).
- **Zasada** = substancja, która przyjmuje proton H⁺ (akceptor protonu).

**Dlaczego to ważne?** Teoria Arrheniusa (szkolna) mówi, że zasada to substancja dająca jony OH⁻ w wodzie. Ale w teorii Brønsteda **amoniak NH₃** jest zasadą, bo przyjmuje proton H⁺ od wody:

<div class="jb-eq" style="background:var(--c-extra-bg);border:1px solid var(--c-extra-line);color:var(--c-extra);padding:10px;border-radius:6px;font-family:'JetBrains Mono',monospace;font-weight:700;margin:10px 0;">NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</div>

NH₃ nie ma w cząsteczce grupy OH⁻ — a jednak jest zasadą, bo przyjmuje H⁺ od wody. To rozszerza pojęcie zasady na substancje bez grupy OH⁻. Na poziomie szkoły podstawowej (E8) wystarczy definicja Arrheniusa, ale warto wiedzieć, że w liceum zobaczysz definicję Brønsteda.
:::

::: adv | Teoria Lewisa — jeszcze szersza definicja | poziom akademicki
Gilbert N. Lewis (1923): **zasada** to donor pary elektronowej, **kwas** — jej akceptor. Jon OH⁻ i cząsteczka NH₃ są zasadami Lewisa (mają wolną parę elektronową), a np. Al³⁺ czy BF₃ — kwasami Lewisa. Powstawanie jonu [Al(OH)₄]⁻ ([§14](#amfoterycznosc)) to reakcja kwasu Lewisa Al(OH)₃ z zasadą Lewisa OH⁻.
:::

::: karta extra | Hydraty — poza E8
**Hydraty** to związki z cząsteczkami wody wbudowanymi w sieć krystaliczną. Jest to osobne zagadnienie, omawiane przede wszystkim przy solach, np. <span class="formula">CuSO₄·5H₂O</span> (sam hydrat soli nie jest wodorotlenkiem). Na poziomie E8 nie jest wymagane tworzenie wzorów hydratów ani przypisywanie hydratu do konkretnego wodorotlenku. Niektóre wodorotlenki tworzą hydraty (np. <span class="formula">Ba(OH)₂·8H₂O</span> — dlatego tablice podają jego rozpuszczalność dla hydratu), ale na E8 nie wymaga się ich wzorów.
:::

::: karta extra | Pozostałe zagadnienia ambitne — gdzie są w lekcji
- **Amfoteryczność** Al(OH)₃ i Zn(OH)₂ — [§14](#amfoterycznosc).
- **AgOH, CuOH** — nietrwałe wodorotlenki, równania rozkładu — [§5.4](#nazwy).
- **Moc a rozpuszczalność**, iloczyn rozpuszczalności — [§10.3](#moc-rozpuszczalnosc).
- **Równania jonowe** — [§13](#rownania-jonowe); **hydroksokompleksy** — [§12](#ion-lab).
:::

## ↻ | Modele silnika w tej lekcji {#modele-silnika .section}

::: div.table-wrap.table-compact
<table><thead><tr><th>Model</th><th>Co pokazuje</th><th>Gdzie</th></tr></thead><tbody>
<tr><td><code>n02-wzory-v01</code></td><td>Wzór wodorotlenku: bilans ładunków, nawias, modele A/B/jony</td><td><a href="#wzor-ogolny">§5.2</a></td></tr>
<tr><td><code>tabela-rozpuszczalnosci-v01</code></td><td>Tabela rozpuszczalności (kolumna OH⁻)</td><td><a href="#rozpuszczalnosc-tabela">§6.2</a></td></tr>
<tr><td><code>n02-przeglad-v01</code></td><td>Kafelki wodorotlenków: rozpuszczalność, barwa, odczyn</td><td><a href="#rozpuszczalnosc-tabela">§6.2</a></td></tr>
<tr><td><code>n02-dysocjacja-v01</code></td><td>Rozpuszczanie, dysocjacja, efekt cieplny</td><td><a href="#wodorotlenek-vs-zasada">§6.3</a></td></tr>
<tr><td><code>ph-indicators-v03</code></td><td>Panel pH i barwy wskaźników (także doświadczenie E)</td><td><a href="#ph-wskazniki">§6.4</a></td></tr>
<tr><td><code>gfx-scene-indicatorRack</code></td><td>Wskaźnik w siedmiu roztworach</td><td><a href="#ph-wskazniki">§6.4</a></td></tr>
<tr><td><code>n02-otrzymywanie-v01</code></td><td>Trzy metody otrzymywania i mapa przemian</td><td><a href="#metody">§7.1</a></td></tr>
<tr><td><code>n02-zobojetnianie-v01</code></td><td>Zobojętnianie: licznik moli, pH, krzywa</td><td><a href="#zobojetnianie">§8.1</a></td></tr>
<tr><td><code>n02-reaktor-v01</code></td><td>Reaktor: wodorotlenek + odczynnik</td><td><a href="#mapa-przemian">§8.3</a></td></tr>
<tr><td><code>n02-stracanie-v01</code></td><td>Laboratorium jonowe — strącanie 13 wodorotlenków</td><td><a href="#ion-lab">§12</a></td></tr>
<tr><td><code>rownania-jonowe-v01</code></td><td>Równania jonowe — wszystkie reakcje (strącanie, zobojętnianie)</td><td><a href="#rownania-jonowe">§13</a></td></tr>
<tr><td><code>n02-doswiadczenia-v01</code></td><td>Pracownia: 26 doświadczeń z wodorotlenkami</td><td><a href="#doswiadczenia">§15</a></td></tr>
</tbody></table>
:::

> Każdy model ma w lekcji jeden przycisk. Zobojętnianie w trzech poziomach zapisu pokazuje model „Równania jonowe” (reakcja HCl + NaOH).

## ✓ | Audyt jakości {#audyt .section}

::: karta new | v9.0 (2026-10-07) — redakcja według standardu lekcji
- Nowy układ: start (1–4) → rdzeń E8 (5–9: definicja i budowa, właściwości, otrzymywanie, reakcje, zastosowania i BHP) → rozumienie / ambitne (10–14) → praktyka (15–18) → powtórka (19–24) → dodatki A–B → modele silnika.
- Scalono powtórzenia: Ściąga (dawna §7), Model bez skrótów (§8) i Wyjaśnienie (§9) — każdy temat ma jedno pełne miejsce, w innych tylko odnośnik.
- Uzupełnienia: tabela wskaźników i skala pH, dysocjacja zasad, reakcja z CO₂ i rozkład termiczny, strącanie Mg(OH)₂, Al(OH)₃, Fe(OH)₂, równania jonowe strąceń, struktura warstwowa Ca(OH)₂ (akademickie), teoria Lewisa, karta powtórzenia, tabela modeli silnika.
- Poprawki: Ca(OH)₂ w rolnictwie (wapnowanie, nie „bielenie”), opis odkrycia Davy’ego, „dwa jony OH⁻”, poprawnie zamknięty blok o hydroksokompleksach, odnośniki §.
:::

::: karta new | v8.1 CHE (2026-10) — integracja z silnikiem
- Widgety wbudowane zastąpione modelami silnika: n02-wzory, n02-przeglad, n02-otrzymywanie, n02-stracanie, n02-zobojetnianie, n02-dysocjacja, n02-reaktor, n02-doswiadczenia (CHE.HYDROXIDES, GFX.rx, GFX.ions, CHE.sim.ParticleSim).
- Rozpuszczalność czytana z tabeli rozpuszczalności silnika; tabela 5.9 i równania oznaczone (audyt LES-N02).
- Poprawki: mnemotechnika OH⁻, hydraty (Ba(OH)₂·8H₂O), Mg(OH)₂ = praktycznie nierozpuszczalny (zgodnie z tabelą), warunek strącania Ca(OH)₂, model poglądowy w checkliście.
- Doświadczenia: jedna lista A–H w formacie egzaminacyjnym (usunięte dublujące się karty 1–4). Korekty v8.03/v8.04 włączone jako §8.
- Nowe treści: tabela ΔH rozpuszczania, iloczyn rozpuszczalności → pH nasyconego roztworu (poziom LO).
:::

::: div.audit-panel
#### Audyt merytoryczny i funkcjonalny v7.5

::: div.audit-grid
<div class="audit-item"><strong>v7.8 LAB — spójność z Konstruktor Uniwersalny:</strong> dodano bezpośrednie przejście do stanowiska LAB i odwrotny link z konstruktora; usunięto nieużywany zewnętrzny font ikon; doprecyzowano „wodorotlenek vs zasada”, opis roztworu NaOH i status zapisu NH₄OH; uporządkowano wzmiankę o hydratach, aby nie przedstawiać Ca(OH)₂·xH₂O jako typowego przykładu wymaganego na E8.</div>

<div class="audit-item"><strong>v7.7 SYNC N02↔Konstruktor (2026-09-26):</strong> mosty dwukierunkowe (nawias, rozpuszczalność OH⁻, strącanie, zobojętnianie); kanoniczna lista wodorotlenków E8; reguła OH⁻ ujednolicona; w konstruktorze: feedback nawiasu OH, dodatkowe równania jonowe (Fe/Al/Ca), poprawione linki do CHEMIA_N02_WODOROTLENKI.html. Bez usuwania treści lekcji.</div>

<div class="audit-item"><strong>v7.5 — poprawki na podstawie recenzji:</strong> poprawiono opis błędu CaO + H₂O → CaOH w Klinice błędów (dodano precyzyjne wyjaśnienie bilansu atomów wodoru i konieczności nawiasu); uzupełniono opis doświadczenia B o ostrzeżenie przed aerozolem Ca(OH)₂; dodano równania rozkładu AgOH i CuOH w sekcji ciekawostek; doprecyzowano definicję zasady w fiszkach (roztwór wodorotlenku); poprawiono wzmiankę o hydratach wodorotlenków w audycie (usunięto nieścisłość); ujednolicono terminologię w całym dokumencie.</div>

<div class="audit-item"><strong>v7.4 — poprawki na podstawie recenzji:</strong> doprecyzowano definicję n we wzorze M(OH)ₙ (dodano zastrzeżenie „na poziomie klasy 8”); ujednolicono klasyfikację Mg(OH)₂ na „trudno rozpuszczalny”; uporządkowano rozróżnienie wodorotlenków i hydratów; wzmocniono BHP NaOH/KOH o ostrzeżenie przed oparzeniami chemicznymi; dodano porównanie rozpuszczalności KOH vs NaOH; dopisano pH wody wapiennej (≈12,4) oraz równanie rozpuszczania osadu CaCO₃ w nadmiarze CO₂ do Ca(HCO₃)₂; dodano tabelę „mleko wapienne vs woda wapienna”; uzupełniono ostrzeżenie o toksyczności Ba²⁺ (nie stosować w doświadczeniach uczniowskich); uzupełniono zastosowanie Al(OH)₃ w lekach na zgagę; dodano w klinice błędów kolumnę „Przykład z życia”; uzupełniono równania zobojętniania o stany skupienia (aq)/(l); doprecyzowano w amfoteryczności, że równania z jonami kompleksowymi nie są wymagane na E8; poprawiono opis doświadczenia B (nie pochylać się nad naczyniem — para może zawierać drobne cząstki Ca(OH)₂).</div>

<div class="audit-item"><strong>v7.3 — poprawki merytoryczne:</strong> doprecyzowano definicję n we wzorze M(OH)ₙ; uściślono opis zasady i roztworów trudno rozpuszczalnych wodorotlenków; skorygowano klasyfikację Mg(OH)₂ i Ba(OH)₂; dodano równania rozkładu AgOH i CuOH; poprawiono opis modelu H–O–Ca–O–H jako modelu poglądowego; ujednolicono tabelę przeglądu wodorotlenków; wzmocniono BHP przy sodzie i CaO; doprecyzowano oznaczenie przykładowych wartości pH; poprawiono zakres działania oranżu metylowego (pH 3,1–4,4); zaktualizowano opis doświadczeń.</div>

<div class="audit-item"><strong>v7.1 / v7.2 — wcześniejsze rozszerzenia:</strong> Bogatsze SVG w historii odkryć (5 scen); interaktywny quiz klikany (12 pytań + wynik); ćwiczenie współczynników zachowane.</div>

<div class="audit-item"><strong>v6.9 / v7.0 — baza:</strong> Domknięta podstawa programowa (wzory, otrzymywanie, dysocjacja, wskaźniki, odczyn, zastosowania, elektrolit, higroskopijność, postacie wapna). Modele podręcznikowe (liniowy + rozgałęziony, legenda wiązań). Widgety: Wzórometr, Bilansator, Konstruktor, lab jonowe, Reaktor, pH, dysocjacja, zobojętnianie. Karty doświadczeń E8, fiszki, test + współczynniki, checklista. Responsywność mobile (pełna szerokość, karty kliniki/amfoteryczności).</div>

<div class="audit-item"><strong>Świadomie poza zakresem tej lekcji:</strong> pełny dział kwasów i soli (osobne lekcje); tryb limitu czasu; wersja do druku.</div>
:::

<p style="margin-top:14px;"><strong>Zachowana cała treść merytoryczna + wszystkie poprawki audytowe + rozbudowane wizualizacje interaktywne.</strong></p>

**Tryby nauki:** Muszę umieć na E8 · Chcę zrozumieć · Idę dalej.

**Wizualizacje:** modele silnika CHE (lista w karcie v8.1 powyżej).

**Numer:** to jest **N02** (wodorotlenki).
:::

::: skrypt
function checkError(ans){
  const el=document.getElementById('errFeedback');
  el.style.display='block';
  if(ans==='2'){
    el.style.background='var(--c-basic-bg)';
    el.style.color='var(--c-basic)';
    el.style.borderLeft='4px solid var(--c-basic)';
    el.innerHTML='<b>Dobrze.</b> Ca(OH)₂ zawiera 2 grupy OH⁻. Wapń ma ładunek +2, więc potrzebuje 2 anionów OH⁻.';
  }else if(ans==='1'){
    el.style.background='var(--c-error-bg)';
    el.style.color='var(--c-error)';
    el.style.borderLeft='4px solid var(--c-error)';
    el.innerHTML='<b>Nie.</b> 1 grupa byłaby w NaOH. W Ca(OH)₂ są 2 grupy.';
  }else{
    el.style.background='var(--c-error-bg)';
    el.style.color='var(--c-error)';
    el.style.borderLeft='4px solid var(--c-error)';
    el.innerHTML='<b>Nie.</b> 3 grupy byłyby w Al(OH)₃. W Ca(OH)₂ są 2.';
  }
}
:::

::: skrypt
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    const targetId=this.getAttribute('href');
    if(targetId==='#') return;
    const target=document.querySelector(targetId);
    if(target){
      e.preventDefault();
      const offset=80;
      const elementPosition=target.getBoundingClientRect().top+window.pageYOffset;
      window.scrollTo({top:elementPosition-offset,behavior:'smooth'});
    }
  });
});
:::

::: skrypt
(function(){
  function setupTableHints(){
    document.querySelectorAll('.table-wrap').forEach(wrap=>{
      let hint=wrap.previousElementSibling;
      if(!hint||!hint.classList.contains('table-scroll-hint')){
        hint=document.createElement('div');
        hint.className='table-scroll-hint';
        hint.innerHTML='<span>Przesuń tabelę w bok, aby zobaczyć całość</span><span class="scroll-arrow">← ↔ →</span>';
        wrap.parentNode.insertBefore(hint,wrap);
      }
      const update=()=>wrap.classList.toggle('is-scrollable',wrap.scrollWidth>wrap.clientWidth+4);
      update();
      wrap.addEventListener('scroll',()=>{
        if(wrap.scrollLeft>8) hint.style.opacity='.45';
        else hint.style.opacity='1';
      },{passive:true});
      if(window.ResizeObserver) new ResizeObserver(update).observe(wrap);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setupTableHints);
  else setupTableHints();
})();
:::

::: skrypt
(function(){
  const wrap=document.getElementById('quizWrap');
  const scoreEl=document.getElementById('quizScore');
  if(!wrap) return;
  const questions=[
    {tag:'P',q:'Co to wodorotlenek?',opts:['Związek z kationu metalu i anionu OH⁻','Każda substancja o odczynie zasadowym','Tlenek metalu rozpuszczony w wodzie','Jon OH⁻ w roztworze'],ok:0,fb:'Wodorotlenek = kation metalu + grupy OH⁻ (np. NaOH, Ca(OH)₂).'},
    {tag:'P',q:'Kiedy w zapisie wodorotlenku stawiamy nawias?',opts:['Zawsze','Gdy grupa OH⁻ powtarza się więcej niż raz','Tylko dla metali 2. grupy','Nigdy — to błąd'],ok:1,fb:'NaOH bez nawiasu; Ca(OH)₂, Al(OH)₃ — nawias, bo OH⁻ × n.'},
    {tag:'P',q:'Który zapis jest poprawny dla wodorotlenku wapnia?',opts:['CaOH₂','Ca(OH)₂','Ca₂OH','CaO₂H₂'],ok:1,fb:'CaOH₂ sugeruje, że 2 dotyczy tylko H. Poprawnie: Ca(OH)₂ (= Ca₁O₂H₂).'},
    {tag:'P',q:'Roztwór NaOH jest elektrolitem, bo:',opts:['Jest żrący','Zawiera swobodne jony Na⁺ i OH⁻','Ma wysoką temperaturę wrzenia','Jest higroskopijny'],ok:1,fb:'Elektrolit = roztwór z jonami, które przewodzą prąd.'},
    {tag:'T',q:'CaO + H₂O → ?',opts:['CaO₂ + H₂','Ca(OH)₂','Ca + H₂O₂','2CaOH'],ok:1,fb:'Tlenek metalu aktywnego + woda → wodorotlenek.'},
    {tag:'T',q:'Uzupełnij: FeCl₃ + □ NaOH → Fe(OH)₃↓ + □ NaCl',opts:['1 i 1','2 i 2','3 i 3','6 i 3'],ok:2,fb:'Fe³⁺ wymaga 3× OH⁻ → współczynnik 3.'},
    {tag:'T',q:'Co obserwujesz po dodaniu NaOH do CuSO₄?',opts:['Brunatny osad','Niebieski osad','Gaz H₂','Nic — reakcja nie zachodzi'],ok:1,fb:'Cu(OH)₂↓ — niebieski, galaretowaty osad.'},
    {tag:'A',q:'Dlaczego Fe(OH)₃ nie daje wyraźnego odczynu zasadowego?',opts:['Nie zawiera OH⁻','Jest praktycznie nierozpuszczalny — mało OH⁻ w roztworze','Jest kwasem','Reaguje tylko z NaOH'],ok:1,fb:'Odczyn zależy od wolnych OH⁻ w roztworze. Nierozpuszczalny ≈ brak odczynu.'},
    {tag:'A',q:'Czym różni się wodorotlenek od zasady (definicja szkolna)?',opts:['Niczym — to synonimy','Wodorotlenek = związek; zasada = jego wodny roztwór z OH⁻','Zasada to zawsze gaz','Wodorotlenek to tylko NaOH'],ok:1,fb:'NaOH(s) to wodorotlenek; NaOH(aq) to zasada sodowa.'},
    {tag:'P',q:'Woda wapienna to:',opts:['Czysty CaO','Mętna zawiesina Ca(OH)₂','Klarowny, nasycony roztwór Ca(OH)₂','Roztwór NaOH z wapniem'],ok:2,fb:'Woda wapienna = klarowny nasycony roztwór; mleko wapienne = zawiesina.'},
    {tag:'P',q:'Higroskopijność NaOH oznacza, że:',opts:['Reaguje z kwasami','Pochłania wilgoć z powietrza','Świeci w ciemności','Nie rozpuszcza się w wodzie'],ok:1,fb:'NaOH i KOH „rozpływają się” na powietrzu — trzymaj w szczelnym naczyniu.'},
    {tag:'Z',q:'Równanie jonowe skrócone zobojętniania mocnego kwasu i mocnej zasady:',opts:['Na⁺ + Cl⁻ → NaCl','H⁺ + OH⁻ → H₂O','NaOH + HCl → NaCl + H₂O','2H₂ + O₂ → 2H₂O'],ok:1,fb:'Istota zobojętniania: proton z kwasu + OH⁻ z zasady → woda.'}
  ];
  let answered=0, correct=0;
  function render(){
    wrap.innerHTML='';
    questions.forEach((item,qi)=>{
      const div=document.createElement('div');
      div.className='quiz-q';
      div.dataset.qi=qi;
      let optsHtml=item.opts.map((o,oi)=>
        `<button type="button" class="quiz-opt" data-oi="${oi}">${o}</button>`
      ).join('');
      div.innerHTML=`<span class="q-tag">${item.tag}</span><h5>${qi+1}. ${item.q}</h5><div class="quiz-opts">${optsHtml}</div><div class="quiz-fb" id="qfb${qi}"></div>`;
      wrap.appendChild(div);
      div.querySelectorAll('.quiz-opt').forEach(btn=>{
        btn.addEventListener('click',()=>{
          if(div.dataset.done) return;
          div.dataset.done='1';
          answered++;
          const oi=+btn.dataset.oi;
          const fb=document.getElementById('qfb'+qi);
          div.querySelectorAll('.quiz-opt').forEach(b=>{
            b.disabled=true;
            if(+b.dataset.oi===item.ok) b.classList.add('correct');
          });
          if(oi===item.ok){
            correct++;
            btn.classList.add('correct');
            fb.className='quiz-fb show ok';
            fb.textContent='✓ '+item.fb;
          }else{
            btn.classList.add('wrong');
            fb.className='quiz-fb show bad';
            fb.textContent='✕ '+item.fb;
          }
          if(answered===questions.length){
            scoreEl.className='quiz-score show';
            const pct=Math.round(100*correct/questions.length);
            scoreEl.textContent=`Wynik: ${correct} / ${questions.length} (${pct}%) — bez presji, możesz wrócić do sekcji i poprawić.`;
          }
        });
      });
    });
  }
  render();
})();
:::

::: styl
.jonowe-box{background:var(--c-extra-bg);border:2px solid var(--c-extra-line);border-radius:var(--r-md);padding:16px 18px;margin:14px 0;}
.jonowe-box .jb-level{display:inline-block;background:var(--c-extra);color:#fff;padding:3px 12px;border-radius:12px;font-size:10px;text-transform:uppercase;font-weight:800;letter-spacing:0.7px;margin-bottom:10px;}
.jonowe-box .jb-eq{font-family:'JetBrains Mono',monospace;font-weight:700;color:var(--c-extra);padding:6px 0;font-size:13px;letter-spacing:0.3px;overflow-x:auto;}
.jonowe-box .jb-label{font-size:11px;font-weight:800;color:var(--c-extra);text-transform:uppercase;letter-spacing:0.5px;margin-top:10px;}
.bond-legend{display:flex;flex-wrap:wrap;gap:10px 18px;justify-content:center;font-size:12px;color:var(--text-soft);margin:8px 0 4px;padding:8px 10px;background:var(--surface-soft);border-radius:var(--r-sm);border:1px solid var(--border);}
.bond-legend span{display:inline-flex;align-items:center;gap:6px;}
.bond-legend .bl-solid{display:inline-block;width:28px;height:3px;background:#1a2332;border-radius:1px;}
.bond-legend .bl-dash{display:inline-block;width:28px;height:0;border-top:3px dashed #64748b;}
.lime-flow{display:grid;grid-template-columns:1fr;gap:8px;margin:12px 0;}
@media(min-width:600px){.lime-flow{grid-template-columns:1fr auto 1fr auto 1fr;align-items:center;}}
.lime-box{background:var(--surface-soft);border:1px solid var(--border);border-radius:var(--r-md);padding:12px;text-align:center;font-size:13px;}
.lime-box strong{display:block;color:var(--accent);margin-bottom:4px;}
.lime-arrow{text-align:center;font-weight:800;color:var(--accent);font-size:1.2rem;}
.tips-box{background:linear-gradient(135deg,var(--c-understand-bg) 0%,#dbe8f5 100%);border:2px solid var(--c-understand);border-radius:var(--r-lg);padding:18px 20px;margin:16px 0;}
.tips-box h4{color:var(--c-understand);margin:0 0 12px;font-size:15px;display:flex;align-items:center;gap:8px;}
.tips-box h4::before{content:'';font-size:16px;}
.tips-list{display:grid;grid-template-columns:1fr;gap:10px;}
@media(min-width:600px){.tips-list{grid-template-columns:repeat(2,1fr);}}
.tip-card{background:#fff;border-radius:var(--r-md);padding:12px 14px;border:1px solid var(--c-understand-line);font-size:13px;line-height:1.55;}
.tip-card b{color:var(--c-understand);display:block;margin-bottom:4px;font-size:12px;text-transform:uppercase;letter-spacing:0.4px;}
@media(max-width:599px){.amph-cards{display:grid;gap:10px;}.amph-cards .amph-card{background:var(--surface-soft);border:1px solid var(--border);border-radius:var(--r-md);padding:12px;}.amph-cards .amph-card strong{display:block;margin-bottom:6px;color:var(--accent);}.table-amph-desktop{display:none;}}
@media(min-width:600px){.amph-cards{display:none;}.table-amph-desktop{display:block;}}
.cond-viz{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0;}
@media(max-width:480px){.cond-viz{grid-template-columns:1fr;}}
.cond-box{border:1px solid var(--border);border-radius:var(--r-md);padding:12px;text-align:center;background:#fff;}
.cond-box.ok{border-color:var(--c-basic);background:var(--c-basic-bg);}
.cond-box.bad{border-color:var(--border);background:var(--surface-soft);}
.cond-box .cond-title{font-weight:800;font-size:13px;margin-bottom:6px;}
.cond-box .cond-icons{font-size:1.4rem;letter-spacing:4px;margin:8px 0;}
.cond-box .cond-note{font-size:12px;color:var(--text-soft);line-height:1.45;}
.sol-bar{display:flex;align-items:center;gap:8px;margin:4px 0;}
.sol-bar .track{flex:1;height:10px;background:#e2e8f0;border-radius:6px;overflow:hidden;}
.sol-bar .fill-sol{height:100%;border-radius:6px;}
.sol-bar .fill-sol.good{background:linear-gradient(90deg,#4ade80,#16a34a);width:92%;}
.sol-bar .fill-sol.mid{background:linear-gradient(90deg,#fbbf24,#d97706);width:28%;}
.sol-bar .fill-sol.bad{background:linear-gradient(90deg,#94a3b8,#64748b);width:6%;}
.hygro-box{display:flex;flex-wrap:wrap;gap:14px;align-items:center;padding:14px;background:#fff7ed;border:1px solid #fdba74;border-radius:var(--r-md);margin:12px 0;}
.hygro-crystal{width:64px;height:64px;background:linear-gradient(135deg,#f8fafc,#cbd5e1);border:2px solid #94a3b8;border-radius:8px;position:relative;flex-shrink:0;}
.hygro-crystal .w{position:absolute;width:10px;height:10px;border-radius:50%;background:#38bdf8;opacity:0;}
.hygro-crystal .w:nth-child(1){top:6px;left:12px;animation-delay:.1s;}
.hygro-crystal .w:nth-child(2){top:20px;right:8px;animation-delay:.35s;}
.hygro-crystal .w:nth-child(3){bottom:10px;left:20px;animation-delay:.55s;}
.hygro-crystal .w:nth-child(4){top:28px;left:28px;animation-delay:.75s;}
.hl-index{background:#fef3c7;color:#92400e;padding:1px 4px;border-radius:3px;font-weight:800;}
.table-wrap tr.sol-good{background:#f0fdf4;}
.table-wrap tr.sol-mid{background:#fffbeb;}
.table-wrap tr.sol-bad{background:#f8fafc;}
.svgx{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:8px 0}
.svgx span{border:1px solid #cbd5e1;border-radius:8px;padding:3px 9px;background:#f8fafc;font-size:13px}
.mmx{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px}
.mmx-box{border:2px solid var(--mm);border-radius:10px;padding:8px 12px;background:#fff;font-family:Inter,system-ui,sans-serif;text-align:left}
.mmx-box b{color:var(--mm);font-size:12.5px;letter-spacing:.04em}
.mmx-box ul{margin:6px 0 0 16px;padding:0;font-size:13px}
.mmx-loose{grid-column:1/-1;font-size:13px;color:#475569}
.merge-h{margin:16px 0 6px}
.hist-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:12px;margin:10px 0}
.hist-card{margin:0;border:1px solid var(--border,#e5e9ee);border-radius:12px;padding:10px;background:var(--surface,#fff)}
.hist-year{font:800 18px/1.1 inherit;color:var(--accent,#0d6868)}
.hist-who{font-weight:700;margin:2px 0 6px}
.hist-ill svg{width:100%;height:auto;display:block;border-radius:8px}
.hist-card figcaption{font-size:13.5px;margin-top:6px;color:var(--text-soft,#4a5568)}
h3.sub-h{margin-top:18px}
:::
