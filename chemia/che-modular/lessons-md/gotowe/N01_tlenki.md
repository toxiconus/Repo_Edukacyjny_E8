---
kod: N01
uid: 
tytul: Tlenki
opis: 
kicker: N01 · CHEMIA · MASTER LAB v6.2
lead: Definicja i nazewnictwo, W–K–S–K, charakter (zasadowy, kwasowy, obojętny, amfoteryczny) ≠ reakcja z wodą ≠ rozpuszczalność, reakcje z wodą, kwasami i zasadami, otrzymywanie, redukcja, trendy, barwy, BHP i środowisko. Modele i dane z silnika CHE.OXIDES.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:AMBITNIE / LO]]
stopka: **CHEMIA N01 v6.2 MASTER LAB** · Tlenki · 2026
---
::: minimum | Muszę umieć na E8 — 7 kluczowych faktów
1. **Tlenek** = związek tlenu z innym pierwiastkiem (metalem lub niemetalem). Wzór ogólny: EₓOᵧ.
2. **Nazwa ↔ wzór ↔ wartościowość** (W–K–S–K): np. Fe(III) + O(II) → Fe₂O₃.
3. **Charakter:** aktywny metal 1–2 → często <span class="hl">zasadowy</span>; niemetal → często <span class="hl">kwasowy</span>; CO, NO, N₂O → <span class="hl">obojętny (szkolnie)</span>; Al₂O₃, ZnO → <span class="hl">amfoteryczny</span>. To heurystyka — sprawdź konkretny tlenek i wyjątki.
4. **Tlenek zasadowy + H₂O** → wodorotlenek (np. CaO + H₂O → Ca(OH)₂). **MgO + H₂O** praktycznie nie zachodzi.
5. **Tlenek kwasowy + H₂O** → kwas (SO₃ → H₂SO₄; CO₂ → H₂CO₃).
6. **Tlenek + kwas / zasada** → sól + woda (gdy charakter pasuje).
7. **Obserwacja ≠ wniosek** (mętnienie wody wapiennej ≠ „powstał CaCO₃” w zapisie obserwacji).
:::

::: warstwy
- e8 | <b>E8:</b> nazewnictwo, charakter, reakcje z wodą, kwasami, zasadami; otrzymywanie, zastosowania, BHP i środowisko
- understand | <b>Rozumienie:</b> skąd charakter, dlaczego nie każdy tlenek reaguje z wodą
- extra | <b>Ambitne (LO):</b> amfoteryczność, P₄O₁₀, trendy w układzie okresowym, VSEPR, tlenki nietypowe, redoks i metalurgia, stechiometria (mole), korozja
- contest | <b>Ponad LO:</b> rozwijane bloki „treści akademickie” — przycisk w nagłówku lekcji
:::

::: rdzen {#rdzen} | Rdzeń lekcji — najpierw to (ok. 30 min)
1. **Sekcje [§4](#definicja)–[§7](#oxide-decision-model)** — definicja, nazewnictwo, wzory, charakter, trzy pytania o tlenek.
2. **Konstruktor wzorów tlenków** ([§5](#builder)) — zbuduj Fe₂O₃, Al₂O₃, N₂O₅.
3. **Detektor charakteru** ([§6](#charakter)) — sprawdź Na₂O, SO₂, CO, Al₂O₃.
4. **Reaktor reakcji** ([§10](#reakcje)) — CaO+H₂O, SO₃+H₂O, CuO+HCl, CO₂+NaOH.
5. **Reakcje kluczowe + Klinika błędów**.
6. **Ćwiczenia + Fiszki + Quiz**.

> Modele silnika stoją przy sekcjach, których dotyczą (wzór tlenku i stopnie utlenienia — [§5](#builder), trzy pytania o tlenek — [§6](#charakter), reakcje — [§10](#reakcje), doświadczenia — [§21](#doswiadczenia)); pełna lista: [Modele silnika w tej lekcji](#wiz-reg-l002). Następna lekcja: **N02 Wodorotlenki i zasady** (Lekcje → Chemia).
:::

## 1 | Jak pracować z lekcją {#jak-pracowac}

::: karta understand
1. **Nie czytaj biernie.** Po każdym akapicie: „Co ja z tego zapamiętam?”.
2. **Najpierw próbuj, potem patrz na odpowiedź.**
3. **Powtarzaj w odstępach:** dziś → jutro → za 3 dni → za tydzień.
4. **Mów na głos.** Czytaj wzory: „Al-dwa-O-trzy”.
5. **Rysuj.** Krzyżowanie, tabele, mapy myśli.
6. **Łap moment „aha!”.**

> Zasada 80/20: nazewnictwo, charakter tlenku, reakcja z wodą.
:::

<div class="mnemonic">
<b>Mnemotechniki rdzeniowe:</b>
<ol>
<li>O najczęściej II — w modelu szkolnym.</li>
<li>Metal → zasadowy, niemetal → kwasowy.</li>
<li>Tlenek + woda → wodorotlenek (metal) / kwas (niemetal).</li>
<li>Tlenek zasadowy + kwas → sól + woda.</li>
<li>Tlenek kwasowy + zasada → sól + woda.</li>
</ol>
</div>

## 2 | Cele lekcji i pytanie przewodnie [[basic:E8]] {#cele}

::: karta basic | Po tej lekcji uczeń
- definiuje tlenek i ustala **nazwę ↔ wzór ↔ wartościowość**,
- klasyfikuje charakter: zasadowy / kwasowy / obojętny / amfoteryczny,
- zapisuje równania: pierwiastek + O₂; tlenek + H₂O; tlenek + kwas / zasada,
- rozróżnia obserwację i wniosek (woda wapienna + CO₂),
- podaje zastosowania: CaO, SiO₂, Fe₂O₃, CO₂,
- (ambitnie) wyjaśnia amfoteryczność i trendy w układzie okresowym,
- (ambitnie) rozpoznaje tlenki mieszane i nietypowe,
- (zaawansowanie) zna most do redoks, stechiometrii i metalurgii.

> **Podstawa programowa:** chemia w szkole podstawowej (Dz.U. 2017 poz. 356), dział „Tlen, wodór i ich związki chemiczne. Powietrze”. Punkty oznaczone „ambitnie” i „zaawansowanie” wykraczają poza wymagania egzaminu ósmoklasisty.
:::

::: karta exam | Pytanie przewodnie
Do jednej zlewki z wodą wsypujemy biały CaO, do drugiej czarny CuO, a do trzeciej wprowadzamy CO₂. W pierwszej woda się rozgrzewa, a fenoloftaleina barwi się na malinowo; w drugiej proszek leży na dnie bez zmian; w trzeciej wskaźnik uniwersalny zmienia barwę na żółtopomarańczową (odczyn lekko kwasowy). **Dlaczego trzy tlenki zachowują się tak różnie?**

> Odpowiedź budujesz w [§6](#charakter) (charakter), [§7](#oxide-decision-model) (trzy pytania o tlenek) i [§13](#n01-why-sio2-mgo) (wyjaśnienia „dlaczego”).
:::

## 3 | Kompas — co trzeba wiedzieć wcześniej {#kompas}

::: karta understand
- wartościowość (H–I, O–II, Al–III, C–IV…),
- **W–K–S–K** (wartościowość → krzyżuj → skróć → kontrola),
- współczynniki tak, indeksy nie,
- bilans atomów w równaniu,
- elektroujemność i rodzaj wiązania (jonowe / kowalencyjne) — potrzebne w [§13](#n01-why-sio2-mgo),
- odczyn roztworu i wskaźniki (fenoloftaleina, wskaźnik uniwersalny) — potrzebne w doświadczeniach [§21](#doswiadczenia).

> Lekcje fundamentów F01–F09 (fundamenty): wartościowość, W–K–S–K, bilans. Bez tego konstruktor wzorów tlenków będzie loterią.
:::

## 4 | Definicja i nazewnictwo [[basic:E8]] {#definicja}

::: karta core | Definicja
**Tlenek** to związek chemiczny tlenu z innym pierwiastkiem, w którym tlen występuje na stopniu utlenienia −II i nie tworzy charakterystycznej grupy nadtlenkowej O₂²⁻ ani ponadtlenkowej O₂⁻. W szkolnych zadaniach najczęściej rozpatrujemy zwykłe tlenki, np. MgO, CO₂, Fe₂O₃. **H₂O₂ i Na₂O₂ są nadtlenkami, a OF₂ jest fluorkiem tlenu, nie tlenkiem.**

> **Dlaczego:** w nadtlenkach (H₂O₂, Na₂O₂) tlen ma stopień utlenienia **−I** (wiązanie O–O), a w OF₂ — **+II**, bo fluor jest bardziej elektroujemny niż tlen, więc to tlen „oddaje” elektrony. Tabela wszystkich typów związków tlenu — [§17](#mieszane).

> **Wzór schematyczny:** w wielu prostych zadaniach tlenek zapisujemy jako EₓOᵧ, ale nie jest to uniwersalny wzór wszystkich tlenków.
:::

::: karta understand | Uwaga szkolna
**Rozdziel dwa modele:** w tlenkach jonowych, np. Na₂O i CaO, można opisywać tlen jako jon tlenkowy O²⁻. W tlenkach kowalencyjnych, np. CO₂, SO₂ i SiO₂, nie należy wyobrażać sobie swobodnych jonów O²⁻ — używamy przede wszystkim pojęcia **stopnia utlenienia tlenu −II**.
:::

### Reguła nazewnictwa

::: karta basic
- „tlenek” + nazwa pierwiastka,
- jeśli pierwiastek może tworzyć **kilka tlenków**, stopień utlenienia podaje się cyfrą rzymską (np. tlenek żelaza(II)/(III)). Na E8 stosuj systematyczne nazwy z cyfrą, gdy trzeba jednoznacznie wskazać wzór,
- np. Fe₂O₃ = tlenek żelaza(III), CuO = tlenek miedzi(II),
- pierwiastki o jednej wartościowości w tlenkach (np. Na, K, Ca, Mg, Al, Zn) — cyfry nie podajemy: tlenek sodu, tlenek glinu,
- nazwy z przedrostkami liczebnikowymi (dwutlenek węgla, trójtlenek siarki, pięciotlenek fosforu) są potoczne; w zadaniach używaj nazw z cyfrą rzymską.
:::

::: div.table-wrap
<table class="mobile-stack">
<thead><tr><th>Wzór</th><th>Nazwa</th><th>Uwaga</th></tr></thead>
<tbody>
<tr><td data-label="Wzór"><code>Na₂O</code></td><td data-label="Nazwa">tlenek sodu</td><td data-label="Uwaga">metal grupy 1</td></tr>
<tr><td data-label="Wzór"><code>K₂O</code></td><td data-label="Nazwa">tlenek potasu</td><td data-label="Uwaga"></td></tr>
<tr><td data-label="Wzór"><code>CaO</code></td><td data-label="Nazwa">tlenek wapnia</td><td data-label="Uwaga">wapno palone</td></tr>
<tr><td data-label="Wzór"><code>MgO</code></td><td data-label="Nazwa">tlenek magnezu</td><td data-label="Uwaga"></td></tr>
<tr><td data-label="Wzór"><code>Al₂O₃</code></td><td data-label="Nazwa">tlenek glinu</td><td data-label="Uwaga"></td></tr>
<tr><td data-label="Wzór"><code>FeO</code></td><td data-label="Nazwa">tlenek żelaza(II)</td><td data-label="Uwaga">cyfra obowiązkowa</td></tr>
<tr><td data-label="Wzór"><code>Fe₂O₃</code></td><td data-label="Nazwa">tlenek żelaza(III)</td><td data-label="Uwaga">cyfra obowiązkowa</td></tr>
<tr><td data-label="Wzór"><code>Cu₂O</code></td><td data-label="Nazwa">tlenek miedzi(I)</td><td data-label="Uwaga">cyfra obowiązkowa</td></tr>
<tr><td data-label="Wzór"><code>CuO</code></td><td data-label="Nazwa">tlenek miedzi(II)</td><td data-label="Uwaga">cyfra obowiązkowa</td></tr>
<tr><td data-label="Wzór"><code>CO</code></td><td data-label="Nazwa">tlenek węgla(II) / czad</td><td data-label="Uwaga"></td></tr>
<tr><td data-label="Wzór"><code>CO₂</code></td><td data-label="Nazwa">tlenek węgla(IV)</td><td data-label="Uwaga">potocznie: dwutlenek węgla</td></tr>
<tr><td data-label="Wzór"><code>SO₂</code></td><td data-label="Nazwa">tlenek siarki(IV)</td><td data-label="Uwaga"></td></tr>
<tr><td data-label="Wzór"><code>SO₃</code></td><td data-label="Nazwa">tlenek siarki(VI)</td><td data-label="Uwaga"></td></tr>
<tr><td data-label="Wzór"><code>N₂O₅</code></td><td data-label="Nazwa">tlenek azotu(V)</td><td data-label="Uwaga"></td></tr>
<tr><td data-label="Wzór"><code>P₂O₅</code></td><td data-label="Nazwa">tlenek fosforu(V)</td><td data-label="Uwaga">Wzór empiryczny: P₂O₅; wzór cząsteczkowy: P₄O₁₀ (zapis szkolny vs cząsteczka) — <a href="#p4o10">§16</a></td></tr>
<tr><td data-label="Wzór"><code>SiO₂</code></td><td data-label="Nazwa">tlenek krzemu(IV)</td><td data-label="Uwaga">krzemionka; kwasowy, ale z wodą praktycznie nie reaguje — <a href="#n01-why-sio2-mgo">§13</a></td></tr>
<tr><td data-label="Wzór"><code>Cr₂O₃</code></td><td data-label="Nazwa">tlenek chromu(III)</td><td data-label="Uwaga">zielony</td></tr>
<tr><td data-label="Wzór"><code>MnO₂</code></td><td data-label="Nazwa">tlenek manganu(IV)</td><td data-label="Uwaga">czarny; piroluzyt</td></tr>
<tr><td data-label="Wzór"><code>PbO</code></td><td data-label="Nazwa">tlenek ołowiu(II)</td><td data-label="Uwaga">żółty; litargit</td></tr>
</tbody>
</table>
:::

## 5 | Wzór tlenku: W–K–S–K i stopnie utlenienia [[basic:E8]] {#builder}

Wybierz pierwiastek i jego **stopień utlenienia / wartościowość używaną w tym zadaniu**, następnie dobierz tlen (II). Algorytm **W–K–S–K**.

::: karta understand {style="margin:10px 0"} | Mikrokroki — zanim klikniesz „Zbuduj”
<p style="margin-bottom:6px"><strong>1.</strong> nazwij stopień utlenienia → <strong>2.</strong> zapisz O²⁻ → <strong>3.</strong> dobierz najmniejsze indeksy dające sumę ładunków 0 → <strong>4.</strong> skróć wspólny dzielnik → <strong>5.</strong> sprawdź ładunek całkowity.</p>

<p class="mini-note" style="margin-bottom:0">W–K–S–K jest procedurą zapisu wzoru, nie dowodem, że każdy taki zapis odpowiada stabilnemu związkowi.</p>
:::

@model n01-konstruktor-v01 | Konstruktor wzoru tlenku (W–K–S–K) i sprawdzanie wzoru — stopnie utlenienia, nadtlenki, OF₂ | CHE.OXIDES.build / oxState
@opis Konstruktor wzoru tlenku: wybierasz pierwiastek i jego wartościowość (stopień utlenienia), a model prowadzi przez metodę W–K–S–K (wartościowość — krzyżowanie — skracanie — kontrola) i sprawdza wpisany wzór; osobno oznacza przypadki szczególne: nadtlenki (tlen −I) i OF₂ (fluorek tlenu). Wniosek: wzór tlenku wynika z wartościowości pierwiastka i tlenu (II).

::: karta core | Przykład W–K–S–K
Fe(III) + O(II) → Fe₂O₃: wartościowości 3 i 2 → krzyżujemy → Fe₂O₃ → kontrola: 2·(+3) + 3·(−2) = 0.

Drugi przykład: S(VI) + O(II) → SO₃ (kontrola: +6 + 3·(−2) = 0).

> W–K–S–K nie zastępuje kontroli chemicznej. Po skrzyżowaniu sprawdź: (1) skrócenie indeksów, (2) bilans atomów, (3) suma stopni utlenienia = 0, (4) czy wzór jest znanym/możliwym związkiem.

> Jak dobrać liczbę jonów O²⁻ do kationu (Na⁺ → Na₂O, Ca²⁺ → CaO, Al³⁺ → Al₂O₃) — w modelu konstruktora powyżej. Przykład: Na⁺ (+1) — dwa kationy na jeden O²⁻ (−2) → Na₂O; kontrola: 2·(+1) + 1·(−2) = 0.
:::

### Stopnie utlenienia w tlenkach {.merge-h}

::: karta understand | Zasada
- Tlen w tlenkach = **−II**.
- Suma stopni utlenienia w cząsteczce = 0.
- Wyznaczasz stopień utlenienia drugiego pierwiastka z równania.
- Wartościowość zapisujemy bez znaku (Fe — III), stopień utlenienia ze znakiem (Fe: +III); w zwykłych tlenkach mają tę samą wartość liczbową.

**Przykład:** Fe₂O₃ → 2·x + 3·(−2) = 0 → 2x = +6 → x = +III. Przykład mieszany: Fe₃O₄ można opisać jako FeO·Fe₂O₃ (1×Fe²⁺ + 2×Fe³⁺ + 4×O²⁻) — średni stopień Fe = +8/3 (tlenki mieszane — [§17](#mieszane)).

> Kalkulator stopni utlenienia (także nadtlenki, OF₂, tlenki mieszane) — pole „Sprawdź wzór” w modelu konstruktora na początku tej sekcji. Tlenki jako utleniacze i reduktory — [§19](#redukcja).
:::

## 6 | Charakter tlenków [[basic:E8]] {#charakter}

::: karta understand {style="text-align:center"} | Trend (nie algorytm)
<p style="font-size:13px;margin:0 0 6px">bardziej metaliczny charakter</p>

<p style="font-family:'JetBrains Mono',monospace;font-weight:800;margin:0;letter-spacing:0.5px">zasadowy ← amfoteryczny ← kwasowy</p>

<p style="font-size:13px;margin:6px 0 0">mniej metaliczny charakter · <em>ogólny trend, nie reguła dla każdego tlenku</em> · wyjaśnienie trendu — <a href="#trend">§14</a></p>
:::

::: div.char-type-grid#charCards {style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:14px 0"}
<button class="char-type-card" data-ch="zas" style="text-align:left;padding:12px;border-radius:12px;border:2px solid #86efac;background:#f0fdf4;cursor:pointer;font:inherit" type="button">
<strong style="color:#166534">Zasadowy</strong>
<div style="font-size:12px;margin-top:4px">Na₂O, CaO, MgO*</div>
</button>

<button class="char-type-card" data-ch="kwas" style="text-align:left;padding:12px;border-radius:12px;border:2px solid #93c5fd;background:#eff6ff;cursor:pointer;font:inherit" type="button">
<strong style="color:#1e40af">Kwasowy</strong>
<div style="font-size:12px;margin-top:4px">CO₂, SO₂, SO₃, P₂O₅</div>
</button>

<button class="char-type-card" data-ch="oboj" style="text-align:left;padding:12px;border-radius:12px;border:2px solid #cbd5e1;background:#f8fafc;cursor:pointer;font:inherit" type="button">
<strong style="color:#475569">Obojętny</strong>
<div style="font-size:12px;margin-top:4px">CO, NO, N₂O</div>
</button>

<button class="char-type-card" data-ch="amph" style="text-align:left;padding:12px;border-radius:12px;border:2px solid #c4b5fd;background:#f5f3ff;cursor:pointer;font:inherit" type="button">
<strong style="color:#5b21b6">Amfoteryczny</strong>
<div style="font-size:12px;margin-top:4px">Al₂O₃, ZnO</div>
</button>
:::

<div aria-live="polite" class="stage-box" id="charCardStage" style="margin-bottom:12px">Szczegóły każdego tlenku (charakter, reakcja z wodą, z kwasem i z zasadą) — model „Tlenek — trzy pytania” poniżej.</div>

::: karta basic | 4 typy
::: div.table-wrap {style="margin-top:8px"}
<table class="mobile-stack">
<thead><tr><th>Charakter</th><th>Typowo</th><th>Z wodą</th><th>Z kwasem</th><th>Z zasadą</th></tr></thead>
<tbody>
<tr class="ok-row"><td data-label="Charakter"><strong>Zasadowy</strong></td><td data-label="Typowo">często aktywne metale</td><td data-label="Z wodą">czasem → wodorotlenek*</td><td data-label="Z kwasem">typowo → sól + H₂O</td><td data-label="Z zasadą">brak typowej reakcji kwas–zasada w modelu E8</td></tr>
<tr class="ok-row"><td data-label="Charakter"><strong>Kwasowy</strong></td><td data-label="Typowo">często niemetale</td><td data-label="Z wodą">czasem → kwas*</td><td data-label="Z kwasem">brak typowej reakcji kwas–zasada w modelu E8</td><td data-label="Z zasadą">typowo → sól + H₂O</td></tr>
<tr><td data-label="Charakter"><strong>Obojętny</strong></td><td data-label="Typowo">CO, NO, N₂O</td><td data-label="Z wodą">brak typowej reakcji kwas–zasada</td><td data-label="Z kwasem">brak typowej reakcji kwas–zasada</td><td data-label="Z zasadą">brak typowej reakcji kwas–zasada</td></tr>
<tr><td data-label="Charakter"><strong>Amfoteryczny</strong></td><td data-label="Typowo">Al₂O₃, ZnO, BeO</td><td data-label="Z wodą">zwykle nie</td><td data-label="Z kwasem">tak</td><td data-label="Z zasadą">tak</td></tr>
</tbody>
</table>
:::

> \*jeśli tlenek jest wystarczająco reaktywny / rozpuszczalny. SiO₂ praktycznie nie reaguje z wodą; MgO z wodą — bardzo słabo. Tabela „tlenek → woda” — [§7](#oxide-decision-model).

> **„Obojętny”** = klasyfikacja kwasowo-zasadowa w warunkach szkolnych (brak typowego tworzenia kwasu/zasady z wodą). *Nie oznacza*, że substancja nie uczestniczy w żadnej reakcji chemicznej.
:::

### Jak rozpoznać w 10 sekund

::: karta core
Tlenki **aktywnych metali** mają zwykle charakter zasadowy, tlenki **niemetali** — zwykle kwasowy. *Nie bez wyjątków:* CrO₃, Mn₂O₇ — kwasowe; Al₂O₃, ZnO, BeO — amfoteryczne. Dlatego najpierw sprawdzaj wyjątki, potem regułę ogólną:

1. Czy to w ogóle zwykły tlenek? H₂O₂, Na₂O₂, KO₂ → nadtlenki/ponadtlenki; OF₂ → fluorek tlenu ([§4](#definicja)).
2. CO, NO, N₂O? → **obojętny** (szkolnie).
3. Al, Zn, Be (a także Cr(III), Pb(II), Sn(II))? → **amfoteryczny**.
4. Mn₂O₇, CrO₃? → **kwasowy** mimo że metal (wysoki stopień utlenienia — [§14](#trend)).
5. Pozostałe tlenki metali (zwłaszcza grup 1–2) → **zasadowy**. MgO zasadowy, ale z wodą bardzo słabo (nie mylić z CaO).
6. Niemetal? → zwykle **kwasowy**.
:::

### Sprawdź w układzie okresowym {.merge-h}

Kliknij pierwiastek — zobacz typową wartościowość, wzór tlenku i charakter.

@model periodic-54 | Układ okresowy 1–54 — pierwiastek, wartościowość, tlenek i jego charakter | CHE.DATA.ELEMENTS + CHE.OXIDES
@opis Układ okresowy 1–54: po wybraniu pierwiastka widać jego wartościowość w tlenkach, wzór tlenku i jego charakter (zasadowy, kwasowy, amfoteryczny, obojętny), zaznaczony kolorem. Wniosek: tlenki metali są zwykle zasadowe, niemetali — kwasowe, a charakter zmienia się regularnie w układzie okresowym.

@model n01-tlenki-v01 | Tlenek — trzy pytania: charakter, woda, kwas / zasada (detektor charakteru) | CHE.OXIDES · 39 tlenków · zlewka z wskaźnikiem uniwersalnym
@opis Detektor charakteru tlenku: dla wybranego tlenku (z 39 w bazie) model odpowiada na trzy pytania — jaki ma charakter, czy reaguje z wodą, czy reaguje z kwasem i z zasadą — i pokazuje zlewkę ze wskaźnikiem uniwersalnym, którego barwa odpowiada odczynowi. Wniosek: charakter tlenku, reakcja z wodą i rozpuszczalność to trzy różne sprawy.

> CO jest tlenkiem obojętnym, a CO₂ kwasowym, choć oba to tlenki węgla — dlaczego, wyjaśnia [§13](#n01-why-sio2-mgo).

## 7 | Trzy pytania o tlenek: charakter ≠ reakcja z wodą ≠ rozpuszczalność [[basic:E8]] {#oxide-decision-model}

::: karta core | E8 — najważniejsze rozróżnienie
**Charakter tlenku ≠ reakcja z wodą ≠ rozpuszczalność.** Charakter opisuje typowe zachowanie kwasowo-zasadowe, reakcja z wodą mówi, czy i pod jakimi warunkami zachodzi przemiana z wodą, a rozpuszczalność mówi, ile substancji przechodzi do roztworu.

CuO jest zasadowy, ale nie reaguje z wodą; SiO₂ jest kwasowy, ale z wodą praktycznie nie reaguje; MgO jest zasadowy, ale z wodą reaguje bardzo słabo.
:::

::: div.dont-confuse
#### Nie myl tych pojęć

::: div.confuse-grid
<div><strong>Charakter tlenku</strong><p>zasadowy, kwasowy, obojętny lub amfoteryczny</p></div>

<div><strong>Reakcja z wodą</strong><p>czy i jak przebiega przemiana z wodą w danych warunkach</p></div>

<div><strong>Rozpuszczalność</strong><p>ile substancji przechodzi do roztworu</p></div>
:::
:::

::: div.table-wrap
<table class="mobile-stack"><thead><tr><th>Pytanie</th><th>Nie myl z</th><th>Przykład</th></tr></thead><tbody>
<tr><td data-label="Pytanie">Jaki charakter?</td><td data-label="Nie myl z">czy reaguje z wodą</td><td data-label="Przykład">CuO — zasadowy, ale bez reakcji z wodą</td></tr>
<tr><td data-label="Pytanie">Czy reaguje z wodą?</td><td data-label="Nie myl z">czy jest rozpuszczalny</td><td data-label="Przykład">CaO reaguje; SiO₂ praktycznie nie</td></tr>
<tr><td data-label="Pytanie">Jaki typ wiązania?</td><td data-label="Nie myl z">czy tlenek jest „metalowy”</td><td data-label="Przykład">charakter wiązania jest ciągły, nie binarny</td></tr>
</tbody></table>
:::

::: karta core | Co widzę → jaki model → jaka reguła → jak sprawdzę
1. **Rozpoznaj wzór:** dwa różne pierwiastki, z których jednym jest O. Sprawdź, czy nie jest to nadtlenek/ponadtlenek ani OF₂.
2. **Ustal zapis:** w zwykłym tlenku szkolnym przyjmij O na −II i policz stopień utlenienia drugiego pierwiastka.
3. **Nie wyciągaj charakteru tylko z układu okresowego:** użyj trendu jako hipotezy, a następnie sprawdź reakcje.
4. **Oddziel trzy pytania:** charakter kwasowo-zasadowy, reakcja z wodą i rozpuszczalność.
5. **Jeżeli zachodzi reakcja:** zapisz produkty → zbilansuj współczynniki → sprawdź atomy → sprawdź sens chemiczny.

<div class="microsteps"><strong>1.</strong> Jaki charakter? → <strong>2.</strong> Czy reaguje z wodą? → <strong>3.</strong> Czy reaguje z kwasem lub zasadą?</div>

<div class="mini-note"><strong>Mini-przykład:</strong> CuO → O(−II), więc Cu(+II). Tlenek jest zasadowy, ale <strong>nie reaguje z wodą</strong>; z HCl reaguje: CuO + 2 HCl → CuCl₂ + H₂O.</div>

<div class="microsteps"><strong>SiO₂:</strong> kwasowy → z wodą praktycznie nie → z mocną zasadą, zwykle po ogrzaniu, tak.</div>
:::

::: karta basic {#solOxides} | Tlenki a woda — tabela (charakter ≠ rozpuszczalność)
::: div.table-wrap.table-compact
<table class="char-table">
<thead><tr><th>Tlenek</th><th>Charakter</th><th>Z wodą (szkolnie)</th><th>Przykład / uwaga</th></tr></thead>
<tbody>
<tr class="ok-row sol-good"><td>Na₂O, K₂O, Li₂O</td><td>zasadowy</td><td><strong>tak</strong> — reagują z wodą</td><td>Na₂O + H₂O → 2 NaOH</td></tr>
<tr class="ok-row sol-good"><td>CaO, BaO, SrO</td><td>zasadowy</td><td><strong>tak</strong> — reagują z wodą</td><td>CaO + H₂O → Ca(OH)₂ (egzo)</td></tr>
<tr><td>MgO</td><td>zasadowy</td><td><strong>bardzo słabo</strong> reaguje z wodą</td><td>szkolnie: praktycznie nie — dlaczego: <a href="#n01-why-sio2-mgo">§13</a></td></tr>
<tr><td>CuO, FeO, Fe₂O₃</td><td>zasadowy</td><td><strong>nie</strong></td><td>nie reagują z wodą; z kwasami tak</td></tr>
<tr><td>Al₂O₃, ZnO, BeO</td><td>amfoteryczny</td><td>zwykle nie</td><td>z kwasem i zasadą</td></tr>
<tr class="ok-row sol-good"><td>SO₂, SO₃</td><td>kwasowy</td><td><strong>tak</strong> — reagują z wodą</td><td>→ kwas: H₂SO₃, H₂SO₄</td></tr>
<tr class="ok-row sol-good"><td>N₂O₅, P₂O₅</td><td>kwasowy</td><td><strong>tak</strong> — reagują z wodą</td><td>→ kwas: HNO₃, H₃PO₄</td></tr>
<tr><td>CO₂</td><td>kwasowy</td><td>częściowo (⇌)</td><td>CO₂ + H₂O ⇌ H₂CO₃</td></tr>
<tr><td>SiO₂</td><td>kwasowy</td><td><strong>nie</strong></td><td>praktycznie nie reaguje z wodą; z mocnymi zasadami tak (sieć; z mocną zasadą (Δ))</td></tr>
<tr class="ok-row sol-good"><td>Cl₂O₇, Mn₂O₇, CrO₃</td><td>kwasowy</td><td><strong>tak</strong></td><td>metal na wysokim stopniu utlenienia (Mn, Cr) — mimo to tlenek kwasowy</td></tr>
<tr class="error-row"><td>CO, NO, N₂O</td><td>obojętny (szkolnie)</td><td>nie</td><td>brak typowej reakcji kwas–zasada w modelu szkolnym; nie oznacza to chemicznej bierności</td></tr>
</tbody>
</table>
:::

> To samo tło kolorystyczne co N02 (rozpuszczalność OH): zielony ≈ wyraźna reakcja z wodą.
:::

Zobacz, co dzieje się z tlenkiem zasadowym i kwasowym w wodzie.

> Co dzieje się z CaO, SO₃, CO₂ i CuO w wodzie — przycisk „Do wody” w modelu z [§6](#charakter) (zlewka ze wskaźnikiem) oraz pracownia doświadczeń w [§21](#doswiadczenia).

## 8 | Właściwości fizyczne: stan skupienia, barwy, nazwy zwyczajowe [[basic:E8]] {#kolory}

::: karta basic | Stan skupienia i temperatura topnienia
Tlenki metali są w warunkach pokojowych **ciałami stałymi o wysokich temperaturach topnienia** (MgO ok. 2850 °C, CaO ok. 2600 °C, Al₂O₃ ok. 2050 °C), bo tworzą sieci jonowe lub jonowo-kowalencyjne. Tlenki niemetali zbudowane z małych cząsteczek są często **gazami** (CO, CO₂, SO₂, NO, NO₂, N₂O), cieczami (H₂O, Mn₂O₇ — oleista ciecz) lub łatwo topliwymi ciałami stałymi (SO₃, P₄O₁₀).

> Wyjątek: SiO₂ to niemetal, ale tworzy sieć kowalencyjną — ciało stałe o temperaturze topnienia ok. 1700 °C ([§13](#n01-why-sio2-mgo)).
:::

### Barwy i nazwy zwyczajowe {.merge-h}

::: div.table-wrap
<table>
<thead><tr><th>Wzór</th><th>Kolor</th><th>Nazwa zwyczajowa</th><th>Występowanie</th></tr></thead>
<tbody>
<tr><td><code>CuO</code></td><td>czarny</td><td>—</td><td>produkt utleniania miedzi</td></tr>
<tr><td><code>Cu₂O</code></td><td>czerwony</td><td>kupryt</td><td>ruda miedzi</td></tr>
<tr><td><code>Fe₂O₃</code></td><td>rdzawy (czerwono-brunatny)</td><td>hematyt</td><td>hematyt; składnik produktów korozji; pigment</td></tr>
<tr><td><code>Fe₃O₄</code></td><td>czarny</td><td>magnetyt</td><td>ruda żelaza, magnetyt</td></tr>
<tr><td><code>PbO</code></td><td>żółty</td><td>litargit</td><td>pigment, szkło ołowiowe</td></tr>
<tr><td><code>Pb₃O₄</code></td><td>czerwony</td><td>minia</td><td>pigment, dawne farby</td></tr>
<tr><td><code>ZnO</code></td><td>biały</td><td>—</td><td>maści, guma, pigment</td></tr>
<tr><td><code>Al₂O₃</code></td><td>biały</td><td>korund</td><td>z domieszkami: rubin, szafir</td></tr>
<tr><td><code>TiO₂</code></td><td>biały</td><td>rutyl</td><td>pigment, filtry UV</td></tr>
<tr><td><code>Cr₂O₃</code></td><td>zielony</td><td>eskolait (minerał)</td><td>pigment</td></tr>
<tr><td><code>MnO₂</code></td><td>czarny</td><td>piroluzyt</td><td>ruda manganu</td></tr>
<tr><td><code>HgO</code></td><td>czerwony / żółty</td><td>—</td><td>historyczna metoda otrzymywania O₂</td></tr>
<tr><td><code>Ag₂O</code></td><td>brunatny / czarny</td><td>—</td><td>rozkład</td></tr>
<tr><td><code>SiO₂</code></td><td>bezbarwny</td><td>kwarc, krzemionka</td><td>piasek, szkło</td></tr>
</tbody>
</table>

<h4 style="margin:14px 0 6px">Barwy tlenków — dane silnika</h4>

::: div.ox-grid
<div class="ox-tile" data-ox="Li2O" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>Li₂O</b><small>biały · zasadowy</small></div>

<div class="ox-tile" data-ox="Na2O" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>Na₂O</b><small>biały · zasadowy</small></div>

<div class="ox-tile" data-ox="K2O" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>K₂O</b><small>biały / jasnożółty · zasadowy</small></div>

<div class="ox-tile" data-ox="MgO" data-ox-col="#f1f5f9"><span class="ox-sw" style="background:#f1f5f9"></span><b>MgO</b><small>biały · zasadowy</small></div>

<div class="ox-tile" data-ox="CaO" data-ox-col="#e2e8f0"><span class="ox-sw" style="background:#e2e8f0"></span><b>CaO</b><small>biały · zasadowy</small></div>

<div class="ox-tile" data-ox="BeO" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>BeO</b><small>biały · amfoteryczny</small></div>

<div class="ox-tile" data-ox="Al2O3" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>Al₂O₃</b><small>biały · amfoteryczny</small></div>

<div class="ox-tile" data-ox="ZnO" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>ZnO</b><small>biały (na gorąco żółty) · amfoteryczny</small></div>

<div class="ox-tile" data-ox="FeO" data-ox-col="#1f2937"><span class="ox-sw" style="background:#1f2937"></span><b>FeO</b><small>czarny · zasadowy</small></div>

<div class="ox-tile" data-ox="Fe2O3" data-ox-col="#9a3412"><span class="ox-sw" style="background:#9a3412"></span><b>Fe₂O₃</b><small>czerwonobrunatny (hematyt) · zasadowy</small></div>

<div class="ox-tile" data-ox="Cu2O" data-ox-col="#b91c1c"><span class="ox-sw" style="background:#b91c1c"></span><b>Cu₂O</b><small>czerwony (kupryt) · zasadowy</small></div>

<div class="ox-tile" data-ox="CuO" data-ox-col="#1e293b"><span class="ox-sw" style="background:#1e293b"></span><b>CuO</b><small>czarny · zasadowy</small></div>

<div class="ox-tile" data-ox="HgO" data-ox-col="#dc2626"><span class="ox-sw" style="background:#dc2626"></span><b>HgO</b><small>czerwony lub żółty (zależnie od otrzymywania) · zasadowy</small></div>

<div class="ox-tile" data-ox="MnO2" data-ox-col="#3f3f46"><span class="ox-sw" style="background:#3f3f46"></span><b>MnO₂</b><small>brunatnoczarny · amfoteryczny</small></div>

<div class="ox-tile" data-ox="CrO3" data-ox-col="#b91c1c"><span class="ox-sw" style="background:#b91c1c"></span><b>CrO₃</b><small>ciemnoczerwony · kwasowy</small></div>

<div class="ox-tile" data-ox="Mn2O7" data-ox-col="#4c1d95"><span class="ox-sw" style="background:#4c1d95"></span><b>Mn₂O₇</b><small>ciemnozielona oleista ciecz · kwasowy</small></div>

<div class="ox-tile" data-ox="B2O3" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>B₂O₃</b><small>bezbarwny / biały · kwasowy</small></div>

<div class="ox-tile" data-ox="SiO2" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>SiO₂</b><small>bezbarwny (kwarc), biały (piasek) · kwasowy</small></div>

<div class="ox-tile" data-ox="NO2" data-ox-col="#b45309"><span class="ox-sw" style="background:#b45309"></span><b>NO₂</b><small>brunatny gaz · kwasowy</small></div>

<div class="ox-tile" data-ox="N2O5" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>N₂O₅</b><small>bezbarwne kryształy · kwasowy</small></div>

<div class="ox-tile" data-ox="P2O5" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>P₂O₅</b><small>biały · kwasowy</small></div>

<div class="ox-tile" data-ox="P4O10" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>P₄O₁₀</b><small>biały · kwasowy</small></div>

<div class="ox-tile" data-ox="SO3" data-ox-col="#f8fafc"><span class="ox-sw" style="background:#f8fafc"></span><b>SO₃</b><small>biały (ciało stałe) / bezbarwna ciecz · kwasowy</small></div>
:::

> Kolor próbki ≈ barwa substancji (poglądowo), z CHE.DATA.OXIDES — ten sam rekord czytają Atlas i modele. Rdza nie jest czystym Fe₂O₃ — to mieszanina uwodnionych tlenków i wodorotlenków żelaza (przybliżenie Fe₂O₃·nH₂O).
:::

> Znajomość kolorów pomaga rozpoznawać tlenki w doświadczeniach i identyfikować osady.

## 9 | Otrzymywanie tlenków [[basic:E8]] {#otrzymywanie}

### 9.1 Najczęstsza metoda E8

::: karta basic | Pierwiastek + tlen
<div class="formula-lg" data-rx="mgO2">2 Mg + O₂ → 2 MgO</div>

<div class="formula-lg" data-rx="sO2">S + O₂ → SO₂</div>

<div class="formula-lg" data-rx="alO2">4 Al + 3 O₂ → 2 Al₂O₃</div>

<div class="formula-lg" data-rx="cO2">C + O₂ → CO₂ (nadmiar O₂)</div>

<div class="formula-lg" data-rx="pO2">4 P + 5 O₂ → 2 P₂O₅ (zapis szkolny; rzeczywisty produkt: P₄O₁₀)</div>

> Typ reakcji: synteza (łączenie).

**Równanie krok po kroku — 2 Mg + O₂:** (1) zapisz substraty i produkt: Mg + O₂ → MgO; (2) tlenu po lewej 2 atomy, po prawej 1 → przed MgO wpisz 2; (3) teraz magnezu po prawej 2 → przed Mg wpisz 2; (4) kontrola.

> Bilans: Mg 2 = 2 ✓ · O 2 = 2 ✓. Synteza tlenku; MgO z wodą reaguje bardzo słabo (≠ CaO) — most do N02.
:::

::: karta basic | Spalanie związków chemicznych
Tlenki powstają też przy spalaniu związków — każdy pierwiastek (poza tlenem) przechodzi w swój tlenek: CH₄ + 2 O₂ → CO₂ + 2 H₂O; 2 H₂S + 3 O₂ → 2 SO₂ + 2 H₂O.
:::

### 9.2 Inne drogi [[extra:AMBITNE]]

::: karta extra
- **Rozkład węglanów:** CaCO₃ →(Δ) CaO + CO₂↑
- **Rozkład wodorotlenków:** Cu(OH)₂ →(Δ) CuO + H₂O
- **Utlenianie niższych tlenków:** 2 SO₂ + O₂ →(kat.) 2 SO₃
- **Reakcja metalu z parą wodną:** 3 Fe + 4 H₂O →(Δ) Fe₃O₄ + 4 H₂ <span class="mini-note">(Fe₃O₄ = tlenek mieszany Fe(II,III) — magnetyt)</span>

> Katalizator to substancja zwiększająca szybkość reakcji, ale niezużywająca się w niej.
:::

### 9.3 Spalanie całkowite i niecałkowite

@model n01-spalanie-v01 | Otrzymywanie tlenków: spalanie pierwiastków i paliw — dopływ O₂ → CO₂ / CO / sadza | CHE.REACTION (spalanie całkowite i niecałkowite)
@opis Model spalania: wybierasz pierwiastek lub paliwo i ilość tlenu; przy pełnym dopływie O₂ powstaje CO₂ (spalanie całkowite), przy ograniczonym — CO lub sadza (spalanie niecałkowite); widać płomień, produkt i równanie. Wniosek: tlenki otrzymuje się spalaniem, a produkt zależy od ilości tlenu.

::: karta warning | Spalanie niecałkowite
Przy niedoborze tlenu zamiast CO₂ powstaje CO (tlenek węgla(II)) lub sadza (C). CO jest bezbarwny, bezwonny i silnie toksyczny — stąd zagrożenie czadem w zamkniętych pomieszczeniach.

Przykłady: 2 C + O₂ → 2 CO; 2 CH₄ + 3 O₂ → 2 CO + 4 H₂O; CH₄ + O₂ → C + 2 H₂O (sadza). Działanie czadu i profilaktyka — [§12](#bezpieczenstwo).
:::

## 10 | Reakcje tlenków [[basic:E8]] {#reakcje}

### 10.1 Tlenek zasadowy + woda

::: karta basic
<div class="formula-lg" data-rx="na2oH2o">Na₂O + H₂O → 2 NaOH</div>

<div class="formula-lg" data-rx="k2oH2o">K₂O + H₂O → 2 KOH</div>

<div class="formula-lg" data-rx="caoH2o">CaO + H₂O → Ca(OH)₂</div>

<div class="formula-lg" data-rx="baoH2o">BaO + H₂O → Ba(OH)₂</div>
:::

::: karta error | Pułapka: MgO
MgO reaguje z wodą bardzo powoli i w niewielkim stopniu (szkolnie: praktycznie nie). Nie traktuj jak CaO. Dlaczego — [§13](#n01-why-sio2-mgo).
:::

### 10.2 Tlenek kwasowy + woda

::: karta basic
<div class="formula-lg" data-rx="so3H2o">SO₃ + H₂O → H₂SO₄</div>

<div class="formula-lg" data-rx="so2H2o">SO₂ + H₂O → H₂SO₃</div>

$$ CO₂ + H₂O ⇌ H₂CO₃

<div class="formula-lg" data-rx="n2o5H2o">N₂O₅ + H₂O → 2 HNO₃</div>

<div class="formula-lg" data-rx="p2o5H2o">P₂O₅ + 3 H₂O → 2 H₃PO₄ (zapis szkolny)</div>

> CO₂ + H₂O — reakcja odwracalna (szkolnie czasem zapis →); H₂CO₃ jest kwasem słabym i nietrwałym, w roztworze przeważa rozpuszczony CO₂. Zapis cząsteczkowy dla fosforu (P₄O₁₀ + 6 H₂O → 4 H₃PO₄) — [§16](#p4o10). Nie każdy tlenek kwasowy reaguje z wodą: SiO₂ praktycznie nie ([§13](#n01-why-sio2-mgo)).
:::

### 10.3 Tlenek + kwas lub zasada → sól + woda

Tlenek zasadowy reaguje z kwasem, tlenek kwasowy — z zasadą; w obu przypadkach powstaje sól i woda. Amfoteryczny reaguje z obydwoma (E8: rozumieć, że reaguje też z zasadą) — [§15](#amfoterycznosc).

::: karta basic | Tlenek zasadowy + kwas
<div class="formula-lg" data-rx="caoHcl">CaO + 2 HCl → CaCl₂ + H₂O</div>

<div class="formula-lg" data-rx="cuoH2so4">CuO + H₂SO₄ → CuSO₄ + H₂O</div>

<div class="formula-lg" data-rx="fe2o3Hcl">Fe₂O₃ + 6 HCl → 2 FeCl₃ + 3 H₂O</div>

<div class="formula-lg" data-rx="na2oHno3">Na₂O + 2 HNO₃ → 2 NaNO₃ + H₂O</div>

> **Dlaczego sól + woda:** tlen tlenku zasadowego (O²⁻) wiąże dwa jony H⁺ kwasu w cząsteczkę H₂O, a kation metalu i reszta kwasowa tworzą sól. Liczba cząsteczek H₂O = liczba atomów O w tlenku (Fe₂O₃ → 3 H₂O).
:::

::: karta basic | Tlenek kwasowy + zasada
<div class="formula-lg" data-rx="naohCo2">CO₂ + 2 NaOH → Na₂CO₃ + H₂O</div>

$$ SO₂ + 2 KOH → K₂SO₃ + H₂O

<div class="formula-lg" data-rx="so3Naoh">SO₃ + 2 NaOH → Na₂SO₄ + H₂O</div>

> Reszta kwasowa soli pochodzi od kwasu, który tworzy dany tlenek z wodą: CO₂ → H₂CO₃ → węglan; SO₂ → H₂SO₃ → siarczan(IV); SO₃ → H₂SO₄ → siarczan(VI).
:::

::: karta exam | CO₂ + NaOH — dwa przypadki
Produkty zależą od **stosunku molowego** substratów (nie tylko od tego, „którego więcej wlać”).

**Nadmiar zasady / niedobór CO₂:** CO₂ + 2 NaOH → Na₂CO₃ + H₂O (węglan sodu).

**Nadmiar CO₂:** CO₂ + NaOH → NaHCO₃ (wodorowęglan sodu).
:::

### 10.4 Tlenek + tlenek → sól (rozszerzenie) [[extra:AMBITNE]]

::: karta extra
<div class="formula-lg" data-rx="caoCo2">CaO + CO₂ → CaCO₃</div>

$$ Na₂O + SO₃ → Na₂SO₄ <span class="mini-note">(synteza soli bez wody: tlenek zasadowy + tlenek kwasowy)</span>
:::

@model n01-reaktor-v01 | Co powstanie? Tlenek + woda / kwas / zasada — przewiduj, potem sprawdź | CHE.OXIDES.predict · procedura 7 kroków
@opis Reaktor przewidywania: wybierasz tlenek i odczynnik (woda, kwas lub zasada), zapisujesz przewidywanie, potem model pokazuje, czy reakcja zachodzi, jakie są produkty i równanie, według procedury 7 kroków. Wniosek: wynik reakcji tlenku da się przewidzieć z jego charakteru.

### 10.5 Mapa reakcji — łańcuch przemian

Kliknij węzeł — zobacz ścieżkę: pierwiastek → tlenek → wodorotlenek/kwas → sól. Most do N02, N03, N04.

@model chain-scn | Łańcuch przemian: pierwiastek → tlenek → wodorotlenek / kwas → sól | Na → Na₂O → NaOH → NaCl · S → SO₃ → H₂SO₄ → Na₂SO₄ · C → CO₂ → H₂CO₃ → Na₂CO₃
@opis Łańcuchy przemian przedstawione jako kolejne ogniwa: Na → Na₂O → NaOH → NaCl, S → SO₃ → H₂SO₄ → Na₂SO₄, C → CO₂ → H₂CO₃ i podobne, z równaniem każdego kroku. Wniosek: od pierwiastka przez tlenek do wodorotlenku lub kwasu i dalej do soli prowadzi ciąg typowych reakcji.

## 11 | Zastosowania tlenków [[basic:E8]] {#zastosowania}

::: karta basic
::: div.table-wrap
<table>
<thead><tr><th>Tlenek</th><th>Zastosowanie</th></tr></thead>
<tbody>
<tr><td>CaO</td><td>wapno palone, cement, budownictwo (zaprawa murarska)</td></tr>
<tr><td>SiO₂</td><td>szkło, piasek, kwarc, elektronika</td></tr>
<tr><td>Al₂O₃</td><td>aluminium, ścierniwo, korund</td></tr>
<tr><td>Fe₂O₃</td><td>ruda żelaza, pigment (hematyt)</td></tr>
<tr><td>Fe₃O₄</td><td>magnetyt (ruda żelaza)</td></tr>
<tr><td>CO₂</td><td>napoje gazowane, suchy lód, gaśnice</td></tr>
<tr><td>SO₂</td><td>produkcja H₂SO₄, konserwant (wino)</td></tr>
<tr><td>SO₃</td><td>produkcja H₂SO₄</td></tr>
<tr><td>P₄O₁₀</td><td>środek suszący, produkcja H₃PO₄</td></tr>
<tr><td>TiO₂</td><td>pigment (farba biała), filtry UV, fotokataliza</td></tr>
<tr><td>ZnO</td><td>maści, guma, pigment, elektronika</td></tr>
<tr><td>MgO</td><td>materiały ogniotrwałe; leki zobojętniające nadmiar kwasu w żołądku</td></tr>
<tr><td>CuO</td><td>pigment ceramiczny, ogniwa</td></tr>
</tbody>
</table>
:::

> Wiele zastosowań wynika wprost z właściwości: CaO wiąże wodę i reaguje z nią egzotermicznie, SiO₂ jest twardy i odporny chemicznie, Fe₂O₃ i TiO₂ są trwałymi barwnikami, P₄O₁₀ silnie pochłania wodę. Wpływ tlenków na środowisko — [§12](#bezpieczenstwo).
:::

## 12 | Bezpieczeństwo, zdrowie i środowisko [[basic:E8]] {#bezpieczenstwo}

::: karta error
### Czad (CO) — bezbarwny, bezwonny, śmiertelny

- Bezbarwny, bezwonny — nazywany „cichym zabójcą”. Powstaje przy spalaniu niecałkowitym ([§9](#otrzymywanie)).
- Źródła: wadliwe piece gazowe, kotły, kominki, spaliny samochodowe.
- **Działanie:** łączy się z hemoglobiną znacznie silniej niż O₂; często podaje się około 200–250× w określonych warunkach. Utrudnia transport tlenu.
- **Objawy zatrucia:** ból głowy, nudności, senność, utrata przytomności.
- **Profilaktyka:** czujnik CO w każdym domu z piecem gazowym, regularne przeglądy, wentylacja.
- **Pierwsza pomoc:** wyprowadzić poszkodowanego na świeże powietrze, otworzyć okna, wezwać pomoc (112) — nie wchodzić samemu do zadymionego pomieszczenia.
:::

### Tabela BHP tlenków {.merge-h}

::: karta error
::: div.table-wrap
<table>
<thead><tr><th>Tlenek</th><th>Zagrożenie</th><th>Środki ostrożności</th></tr></thead>
<tbody>
<tr><td>CaO (wapno palone)</td><td>żrący, egzotermiczny z wodą. Nie dotykać mokrymi rękami — silne oparzenia (reakcja egzotermiczna).</td><td>okulary, nie dotykać mokrymi rękami</td></tr>
<tr><td>CO₂ (suchy lód)</td><td>Temperatura sublimacji: −78,5 °C. W zamkniętym pomieszczeniu gromadzi się przy podłodze (cięższy od powietrza).</td><td>Nie dotykać gołymi rękami (odmrożenia). Używać w wentylowanym pomieszczeniu (sublimacja uwalnia CO₂).</td></tr>
<tr><td>SO₂ (konserwant E220)</td><td>drażniący, toksyczny. Drażni drogi oddechowe. Stosowany w winie, suszonych owocach. U osób wrażliwych może wywołać reakcję alergiczną.</td><td>okap, nie wdychać</td></tr>
<tr><td>SO₃</td><td>silnie żrący</td><td>okap, okulary</td></tr>
<tr><td>P₄O₁₀</td><td>silnie higroskopijny, żrący</td><td>rękawice, okulary, szczelne naczynie</td></tr>
<tr><td>NO₂</td><td>toksyczny, brązowy gaz</td><td>okap, nie wdychać</td></tr>
<tr><td>CO</td><td>silnie toksyczny, bezbarwny, bezwonny</td><td>wentylacja, czujnik CO</td></tr>
</tbody>
</table>
:::
:::

### Środowisko: smog, kwaśne deszcze, efekt cieplarniany {.merge-h}

::: karta basic
### Smog

**Smog** — zanieczyszczenie powietrza powstałe z mieszaniny spalin, pyłów i tlenków.

- Mieszanina SO₂, NO₂, pyłów zawieszonych (PM2.5, PM10).
- Szczególnie groźny zimą w miastach — efekt „niskiej emisji”.

**Typowe składniki / zanieczyszczenia związane ze smogiem:** pyły zawieszone, tlenki azotu, CO, SO₂ oraz — w smogu fotochemicznym — ozon i inne produkty reakcji atmosferycznych. SO₃ występuje zwykle w znacznie mniejszych ilościach niż SO₂. CO₂ jest przede wszystkim gazem cieplarnianym, a nie typowym składnikiem smogu odpowiedzialnym za jego lokalne toksyczne działanie.

### Kwaśne deszcze

- Źródła: SO₂ i NO₂ z fabryk, elektrowni, samochodów.
- Skutki: zakwaszenie gleb i wód, uszkodzenie lasów, korozja budynków.

- SO₂ + H₂O ⇌ H₂SO₃ (zapis uproszczony; w atmosferze istotne są też kolejne procesy utleniania)
- 2 SO₂ + O₂ → 2 SO₃
- SO₃ + H₂O → H₂SO₄
- 3 NO₂ + H₂O → 2 HNO₃ + NO

### Efekt cieplarniany

**Gazy cieplarniane:** CO₂, CH₄, N₂O, para wodna.

> N₂O — silny gaz cieplarniany; porównania rzędu 270–300× wpływu CO₂ na jednostkę masy zależą od przyjętego horyzontu czasowego i źródła danych.

### Jak ograniczać emisję

- **Odsiarczanie spalin** w elektrowniach: SO₂ wiąże się tlenkiem lub węglanem wapnia (np. CaO + SO₂ → CaSO₃), a produkt utlenia się do gipsu.
- **Katalizator samochodowy** przekształca CO i NO w mniej szkodliwe gazy: 2 CO + 2 NO → 2 CO₂ + N₂.
- Oszczędzanie energii, odnawialne źródła energii, wymiana starych pieców (mniej „niskiej emisji”).
:::

## 13 | Wyjaśnienia „dlaczego”: budowa a charakter i reakcja z wodą [[understand:ROZUMIENIE]] {#n01-why-sio2-mgo}

### Metal → zasadowy, niemetal → kwasowy: skąd ta reguła {.merge-h}

::: karta understand
Dla zrozumienia, dlaczego tlenki metali grup 1–2 są zasadowe.

::: div.table-wrap
<table>
<thead><tr><th>Pierwiastek</th><th>Z</th><th>Konfiguracja</th><th>Elektrony walencyjne</th></tr></thead>
<tbody>
<tr><td>Na</td><td>11</td><td>[Ne] 3s¹</td><td>1</td></tr>
<tr><td>Mg</td><td>12</td><td>[Ne] 3s²</td><td>2</td></tr>
<tr><td>Ca</td><td>20</td><td>[Ar] 4s²</td><td>2</td></tr>
<tr><td>Al</td><td>13</td><td>[Ne] 3s² 3p¹</td><td>3</td></tr>
<tr><td>C</td><td>6</td><td>[He] 2s² 2p²</td><td>4</td></tr>
<tr><td>S</td><td>16</td><td>[Ne] 3s² 3p⁴</td><td>6</td></tr>
<tr><td>P</td><td>15</td><td>[Ne] 3s² 3p³</td><td>5</td></tr>
<tr><td>Cl</td><td>17</td><td>[Ne] 3s² 3p⁵</td><td>7</td></tr>
</tbody>
</table>
:::

> Metale łatwo oddają elektrony → w tlenkach występują jako kationy, a jon O²⁻ z wodą daje OH⁻ → tlenki zasadowe. Niemetale tworzą z tlenem wiązania kowalencyjne; ich tlenki z wodą dają kwasy tlenowe (H⁺ + aniony reszt kwasowych) → tlenki kwasowe.

$$ O²⁻ + H₂O → 2 OH⁻  ·  SO₃ + H₂O → H₂SO₄ → 2 H⁺ + SO₄²⁻

**Model wiązania:** wiele tlenków metali ma znaczny udział charakteru jonowego, a wiele tlenków niemetali ma charakter kowalencyjny; to trend, nie absolutny podział. Im mniejsza różnica elektroujemności i im wyższy stopień utlenienia pierwiastka, tym bardziej kowalencyjne wiązanie E–O i tym bardziej kwasowy tlenek — stąd amfoteryczny Al₂O₃ i kwasowy Mn₂O₇ ([§14](#trend)).
:::

### CO a CO₂ — dlaczego klasyfikujemy je inaczej {.merge-h}

::: karta understand
**CO** jest w szkolnym modelu tlenkiem obojętnym: z wodą nie tworzy typowego kwasu ani zasady.

**CO₂** jest tlenkiem kwasowym: w wodzie tworzy układ równowagowy związany z H₂CO₃, a z zasadami reaguje z wytworzeniem węglanów lub wodorowęglanów zależnie od warunków.

> Różnicy nie należy tłumaczyć wyłącznie „liczbą wiązań C=O”. Znaczenie mają budowa, stopień utlenienia węgla i całkowita reaktywność układu.
:::

::: karta understand
### SiO₂ — kwasowy, ale praktycznie nie reaguje z wodą

**Co widzę:** SiO₂ klasyfikujemy jako tlenek kwasowy, ale zwykła woda nie daje z nim reakcji analogicznej do SO₃ + H₂O.

**Model:** krzemionka ma rozległą, trwałą sieć kowalencyjną. W warunkach szkolnych jej reaktywność z wodą jest bardzo mała.

**Kontrola:** z mocną zasadą SiO₂ może reagować, zwykle po ogrzaniu:

$$ SiO₂ + 2 NaOH →<span class="rxn-cond">Δ</span> Na₂SiO₃ + H₂O

> Nie traktuj zapisu „SiO₂ + H₂O → H₂SiO₃” jako zwykłej reakcji przebiegającej w wodzie. To nadmierne uproszczenie szkolnego modelu.

> Ta sama sieć (każdy atom Si połączony z 4 atomami O) tłumaczy wysoką temperaturę topnienia SiO₂ (ok. 1700 °C), podczas gdy CO₂ — zbudowany z małych cząsteczek — jest gazem.
:::

::: karta understand
### MgO — zasadowy, ale z wodą bardzo słabo

MgO ma trwałą sieć jonową i małą rozpuszczalność w wodzie. W rezultacie ilość substancji przechodzącej do roztworu jest ograniczona, więc reakcja z wodą jest bardzo słaba.

**Dokładniej (porównanie z CaO):** mały jon Mg²⁺ silnie przyciąga O²⁻, więc energia sieciowa MgO jest duża. Powstający Mg(OH)₂ jest praktycznie nierozpuszczalny i pokrywa ziarna tlenku, co dodatkowo hamuje reakcję. Większy jon Ca²⁺ tworzy słabszą sieć, a Ca(OH)₂ jest tylko trudno rozpuszczalny — dlatego gaszenie wapna jest szybkie i silnie egzotermiczne.

> Ślad reakcji można jednak wykryć: zawiesina MgO w wodzie z fenoloftaleiną barwi się słabo na różowo.

**Wniosek:** charakter tlenku, jego rozpuszczalność i szybkość reakcji z wodą to trzy różne informacje.

> Dlatego nie stosuj automatu „tlenek zasadowy → zawsze reaguje z wodą”.
:::

## 14 | Trend charakteru tlenków: okres, grupa, stopień utlenienia [[extra:AMBITNE]] {#trend}

W okresie (od lewej do prawej) charakter tlenków zmienia się od zasadowego, przez amfoteryczny, do kwasowego.

@model n01-trend-v01 | Trend charakteru tlenków: w okresie i według stopnia utlenienia (Cr, Mn) | CHE.OXIDES.trend
@opis Wykres trendu charakteru tlenków: w okresie od lewej do prawej tlenki zmieniają się od zasadowych przez amfoteryczne do kwasowych, a dla jednego metalu (Cr, Mn) charakter staje się bardziej kwasowy wraz ze wzrostem stopnia utlenienia (np. CrO zasadowy, Cr₂O₃ amfoteryczny, CrO₃ kwasowy). Wniosek: charakter tlenku zależy od położenia pierwiastka i jego stopnia utlenienia.

::: karta extra | 2. i 3. okres — porównanie
$$ Li₂O → BeO → B₂O₃ → CO₂ → N₂O₅

**Li₂O** — zasadowy; **BeO** — amfoteryczny; **B₂O₃, CO₂, N₂O₅** — kwasowe. To ogólny trend, a nie algorytm bez wyjątków.

> Fluor pomijamy w szeregu tlenków: OF₂ to **fluorek tlenu**, nie tlenek fluoru.

**Trend w 3. okresie:**

$$ Na₂O → MgO → Al₂O₃ → SiO₂ → P₄O₁₀ → SO₃ → Cl₂O₇

$$ zasadowy → zasadowy → amfoteryczny → kwasowy → kwasowy → kwasowy → kwasowy

**Wyjaśnienie:** w okresie zwykle rośnie elektroujemność i maleje metaliczność, dlatego charakter tlenków często przesuwa się od zasadowego przez amfoteryczny do kwasowego. To **trend, nie algorytm**; wpływają też stopień utlenienia, budowa, rodzaj wiązań i trwałość struktury. W 3. okresie rośnie przy tym stopień utlenienia pierwiastka w najwyższym tlenku: od +I (Na) do +VII (Cl).
:::

### Trend w grupie {.merge-h}

::: karta extra
W grupie (w dół) rośnie metaliczność, więc rośnie charakter zasadowy tlenków: BeO (amfoteryczny) → MgO → CaO → SrO → BaO (coraz silniej zasadowe). W grupie 15: N₂O₅ i P₄O₁₀ kwasowe, As₄O₆ amfoteryczny, Bi₂O₃ zasadowy.

> **Dlaczego:** w dół grupy rośnie promień atomu i maleje elektroujemność, więc wiązanie E–O staje się bardziej jonowe, a tlenek bardziej zasadowy. W okresie w prawo elektroujemność rośnie, wiązanie E–O jest bardziej kowalencyjne, a tlenek bardziej kwasowy.

**Charakter tlenków w układzie okresowym** (tlenki na najwyższym typowym stopniu utlenienia; zas. = zasadowy, amf. = amfoteryczny, kw. = kwasowy):

::: div.table-wrap
<table><thead><tr><th>Okres</th><th>gr. 1</th><th>gr. 2</th><th>gr. 13</th><th>gr. 14</th><th>gr. 15</th><th>gr. 16</th><th>gr. 17</th></tr></thead><tbody>
<tr><td><b>2</b></td><td>Li₂O zas.</td><td>BeO amf.</td><td>B₂O₃ kw.</td><td>CO₂ kw.</td><td>N₂O₅ kw.</td><td>—</td><td>—</td></tr>
<tr><td><b>3</b></td><td>Na₂O zas.</td><td>MgO zas.</td><td>Al₂O₃ amf.</td><td>SiO₂ kw.</td><td>P₄O₁₀ kw.</td><td>SO₃ kw.</td><td>Cl₂O₇ kw.</td></tr>
<tr><td><b>4</b></td><td>K₂O zas.</td><td>CaO zas.</td><td>Ga₂O₃ amf.</td><td>GeO₂ amf.</td><td>As₂O₅ kw.</td><td>SeO₃ kw.</td><td>—</td></tr>
</tbody></table>
:::

> „—”: tlen nie tworzy tlenku sam ze sobą, OF₂ to fluorek tlenu, a trwały Br₂O₇ nie istnieje.
:::

### Ten sam pierwiastek, różne stopnie utlenienia — metale przejściowe {.merge-h}

::: karta extra
Wyższy stopień utlenienia → silniejszy charakter kwasowy.

::: div.table-wrap
<table class="mobile-stack"><thead><tr><th>Pierwiastek</th><th>Niski stopień</th><th>Pośredni</th><th>Wysoki stopień</th></tr></thead><tbody>
<tr><td data-label="Pierwiastek">Cr</td><td data-label="Niski">CrO (+II) — zasadowy</td><td data-label="Pośredni">Cr₂O₃ (+III) — amfoteryczny</td><td data-label="Wysoki">CrO₃ (+VI) — kwasowy</td></tr>
<tr><td data-label="Pierwiastek">Mn</td><td data-label="Niski">MnO (+II) — zasadowy</td><td data-label="Pośredni">MnO₂ (+IV) — amfoteryczny</td><td data-label="Wysoki">Mn₂O₇ (+VII) — kwasowy</td></tr>
<tr><td data-label="Pierwiastek">S</td><td data-label="Niski">—</td><td data-label="Pośredni">SO₂ (+IV) — kwasowy (H₂SO₃, słaby)</td><td data-label="Wysoki">SO₃ (+VI) — kwasowy (H₂SO₄, mocny)</td></tr>
</tbody></table>
:::

**Dla metali przejściowych:** Mn₂O₇ (Mn +VII), CrO₃ (Cr +VI) — kwasowe, mimo że to metale.

> **Dlaczego:** atom na wysokim stopniu utlenienia silnie przyciąga elektrony tlenu, wiązania E–O stają się kowalencyjne, a tlenek z wodą tworzy kwas tlenowy z anionem reszty kwasowej (Mn₂O₇ → HMnO₄, MnO₄⁻; CrO₃ → H₂CrO₄, CrO₄²⁻).
:::

## 15 | Amfoteryczność [[extra:AMBITNE]] {#amfoterycznosc}

::: karta extra | Definicja i drabina poziomów
**Tlenek amfoteryczny** — reaguje zarówno z kwasami (jak zasadowy), jak i z zasadami (jak kwasowy).

**Przykłady:** Al₂O₃, ZnO, BeO, PbO, SnO (a także Cr₂O₃, MnO₂ — [§14](#trend)).

**E8:** Al₂O₃ reaguje z kwasem i z mocną zasadą.

> **Na E8:** wystarczy wiedzieć, że Al₂O₃ i ZnO reagują **i z kwasami, i z zasadami**. Równania z jonami kompleksowymi są rozszerzeniem.

**Wyjaśnienie:** zachowuje się jak tlenek zasadowy wobec kwasu i jak kwasowy wobec mocnej zasady.

> Wiązanie Al–O i Zn–O jest pośrednie między jonowym a kowalencyjnym — stąd „podwójna” natura. Amfoteryczne są też odpowiednie wodorotlenki Al(OH)₃ i Zn(OH)₂ — most do N02.
:::

::: karta extra | Równania (rozszerzenie)
<div class="formula-lg" data-rx="al2o3Hcl">Al₂O₃ + 6 HCl → 2 AlCl₃ + 3 H₂O</div>

<div class="formula-lg" data-rx="al2o3NaohMelt">Al₂O₃ + 2 NaOH →(stapianie) 2 NaAlO₂ + H₂O</div>

> Reakcja w stopionej zasadzie (warunki bezwodne).

$$ Al₂O₃ + 2 NaOH + 3 H₂O → 2 Na[Al(OH)₄] <span class="mini-note">(roztwór wodny)</span>

> Jonowo w roztworze: Al₂O₃ + 2 OH⁻ + 3 H₂O → 2 [Al(OH)₄]⁻. Zapis NaAlO₂ zostawiamy jako model dla warunków bezwodnych / stopionej zasady.

<div class="formula-lg" data-rx="znoHcl">ZnO + 2 HCl → ZnCl₂ + H₂O</div>

<div class="formula-lg" data-rx="znoNaoh">ZnO + 2 NaOH → Na₂ZnO₂ + H₂O</div>

> Na₂ZnO₂ — zapis dla stopu / warunków bezwodnych; w roztworze wodnym: ZnO + 2 NaOH + H₂O → Na₂[Zn(OH)₄].
:::

::: adv | Amfoteryczność w języku kwasów i zasad Lewisa | poziom akademicki
**Kwas Lewisa** przyjmuje parę elektronową, **zasada Lewisa** ją oddaje. Mały, silnie naładowany kation Al³⁺ ma wolne orbitale i jest kwasem Lewisa: wobec mocnej zasady przyłącza jony OH⁻ (zasady Lewisa) i tworzy jon kompleksowy [Al(OH)₄]⁻, a w stopionej zasadzie wiąże O²⁻ w anion AlO₂⁻. Wobec kwasu ten sam tlenek dostarcza jonów O²⁻, które przyłączają H⁺ — zachowuje się jak zasada. Amfoteryczność to więc zdolność do działania jako akceptor lub donor, zależnie od partnera reakcji. Tak samo zachowują się Zn²⁺ ([Zn(OH)₄]²⁻) i Be²⁺.
:::

## 16 | P₂O₅ i P₄O₁₀ — wzór empiryczny a cząsteczka [[extra:AMBITNE]] {#p4o10}

::: karta extra
- **P₂O₅** — wzór empiryczny (najprostszy stosunek P : O = 2 : 5).
- **P₄O₁₀** — wzór rzeczywistej cząsteczki (dekatlenek tetrafosforu).

**W szkole stosujemy P₂O₅** jako zapis empiryczny i wygodny zapis stechiometryczny.

> P₄O₁₀ nie oznacza innej substancji: opisuje rzeczywistą cząsteczkę, natomiast P₂O₅ podaje najprostszy stosunek P:O = 2:5.

<div class="microsteps"><strong>Mikrokroki:</strong> 4:10 → skróć przez 2 → 2:5 → wzór empiryczny P₂O₅.</div>

> Budowa: cztery atomy P w narożach czworościanu połączone mostkami tlenowymi, do każdego P dołączony jeszcze jeden atom O. P₄O₁₀ silnie pochłania wodę — stąd zastosowanie jako środek suszący.
:::

::: karta extra | P₂O₅ ↔ P₄O₁₀ w równaniach
Szkolny zapis:

<div class="formula-lg" data-rx="p2o5H2o">P₂O₅ + 3 H₂O → 2 H₃PO₄</div>

Dokładniejszy zapis cząsteczkowy:

<div class="formula-lg" data-rx="p4o10H2o">P₄O₁₀ + 6 H₂O → 4 H₃PO₄</div>

> Analogicznie spalanie fosforu: 4 P + 5 O₂ → 2 P₂O₅ (szkolnie) lub 4 P + 5 O₂ → P₄O₁₀ (cząsteczkowo).
:::

## 17 | Tlenki mieszane i nietypowe związki tlenu [[extra:AMBITNE]] {#mieszane}

::: karta extra | Związki tlenu — przegląd
::: div.table-wrap
<table class="mobile-stack"><thead><tr><th>Typ</th><th>Jon / grupa</th><th>Stopień utlenienia O</th><th>Przykłady</th></tr></thead><tbody>
<tr><td data-label="Typ">tlenek (zwykły)</td><td data-label="Jon">O²⁻ / O w wiązaniu kowalencyjnym</td><td data-label="Stopień O">−II</td><td data-label="Przykłady">CaO, CO₂, Fe₂O₃</td></tr>
<tr><td data-label="Typ">nadtlenek</td><td data-label="Jon">O₂²⁻ (wiązanie O–O)</td><td data-label="Stopień O">−I</td><td data-label="Przykłady">H₂O₂, Na₂O₂, BaO₂</td></tr>
<tr><td data-label="Typ">ponadtlenek</td><td data-label="Jon">O₂⁻</td><td data-label="Stopień O">−½</td><td data-label="Przykłady">KO₂, RbO₂</td></tr>
<tr><td data-label="Typ">fluorek tlenu</td><td data-label="Jon">—</td><td data-label="Stopień O">+II</td><td data-label="Przykłady">OF₂</td></tr>
</tbody></table>
:::
:::

::: karta extra
### Tlenki mieszane

Zawierają ten sam metal na dwóch różnych stopniach utlenienia.

- **Fe₃O₄** (magnetyt) = FeO·Fe₂O₃ — tlenek żelaza(II,III).
- **Pb₃O₄** (minia) = 2 PbO·PbO₂ — tlenek ołowiu(II,IV).
- **Mn₃O₄** = MnO·Mn₂O₃.

> Średni stopień utlenienia Fe w Fe₃O₄ = +8/3 — obliczenie w [§5](#builder).

### Nadtlenki

Zawierają wiązanie O–O; tlen na **−I**.

Grupa nadtlenkowa (grupa O₂²⁻) — to nie „zwykły” tlenek O²⁻.

- **H₂O₂** — woda utleniona; rozkłada się (katalizator MnO₂): 2 H₂O₂ → 2 H₂O + O₂.
- **Na₂O₂**, **BaO₂** — nadtlenki metali; z wodą wydzielają tlen: 2 Na₂O₂ + 2 H₂O → 4 NaOH + O₂.

### Ponadtlenki

Anion O₂⁻; tlen na **−½**.

- **KO₂**, **RbO₂** — stosowane w aparatach tlenowych (okręty podwodne, stacje kosmiczne) — KO₂ reaguje z CO₂ i H₂O, uwalniając O₂ (systemy podtrzymywania życia).

$$ 4 KO₂ + 2 CO₂ → 2 K₂CO₃ + 3 O₂

::: adv | Ozonki | poza programem LO
Anion O₃⁻; np. **KO₃**.
:::

### OF₂ — fluorek tlenu

Tlen na **+II** — to nie tlenek, a fluorek (fluor elektroujemniejszy).

> Na E8 wystarczy rozróżnić „zwykły” tlenek (−II) od wzmianki o wyjątkach.
:::

## 18 | Budowa przestrzenna cząsteczek tlenków (VSEPR) [[extra:AMBITNE]] {#vsepr}

Kształt **cząsteczki** zależy od liczby chmur elektronowych wokół atomu centralnego. VSEPR stosujemy przede wszystkim do cząsteczek/układów molekularnych; nie opisuje bezpośrednio całej sieci jonowej, np. kryształu CaO.

::: karta understand | Reguła VSEPR
Pary elektronowe (wiążące i wolne) odpychają się. Pary wolne zajmują więcej miejsca niż pary wiążące — zmniejszają kąty.

::: div.table-wrap {style="margin-top:10px"}
<table>
<thead><tr><th>Cząsteczka</th><th>Typ</th><th>Geometria</th><th>Kąt</th><th>Hybrydyzacja</th></tr></thead>
<tbody>
<tr><td>CO₂</td><td>AX₂</td><td>liniowa</td><td>180°</td><td>sp</td></tr>
<tr><td>SO₂</td><td>AX₂E</td><td>kątowa</td><td>~119°</td><td>sp²</td></tr>
<tr><td>SO₃</td><td>AX₃</td><td>trygonalna płaska</td><td>120°</td><td>sp²</td></tr>
<tr><td>H₂O</td><td>AX₂E₂</td><td>kątowa</td><td>104,5°</td><td>sp³</td></tr>
<tr><td>N₂O</td><td>AX₂</td><td>liniowa</td><td>180°</td><td>sp</td></tr>
<tr><td>NO₂</td><td>AX₂E</td><td>kątowa</td><td>~134° (wartość przybliżona; zależy od warunków)</td><td>sp²</td></tr>
</tbody>
</table>
:::
:::

@model molecule3d-merged | Model 3D cząsteczek — CO₂, SO₂, SO₃, H₂O: geometria i kąty | CHE.MOLECULE · VSEPR
@opis Trójwymiarowe modele cząsteczek CO₂, SO₂, SO₃ i H₂O z zaznaczonymi kątami między wiązaniami: CO₂ liniowa (180°), SO₂ i H₂O kątowe, SO₃ płaska trójkątna (120°). Wniosek: kształt cząsteczki wynika z rozmieszczenia par elektronowych wokół atomu centralnego (model VSEPR).

::: karta extra | Dlaczego H₂O i SO₂ są kątowe, a CO₂ liniowa?
Tlen w H₂O ma 2 wiązania i **2 wolne pary**. Wolne pary odpychają się silniej niż pary wiążące i „ściskają” kąt H–O–H do 104,5°. W CO₂ węgiel ma tylko 2 wiązania i 0 wolnych par — cząsteczka jest liniowa.

W CO₂ węgiel nie ma wolnych par elektronowych, więc odpychanie jest symetryczne → kąt 180°. W SO₂ siarka ma 2 wiązania i 1 wolną parę (AX₂E) → cząsteczka kątowa (~119°).

> Most do L013 (VSEPR pełne, hybrydyzacja sp/sp²/sp³).
:::

> **Ograniczenie:** VSEPR opisuje geometrię cząsteczek / lokalnych układów elektronowych. Nie jest modelem całej sieci krystalicznej Na₂O, CaO ani SiO₂. Dla NO₂, który ma niesparowany elektron, standardowy model zamkniętopowłokowy jest tylko przybliżeniem.

::: details.answer.step-by-step#vsepr-steps | VSEPR krok po kroku (wzorzec szkolny)
**Cel:** przewidzieć kształt z liczby chmur elektronowych wokół atomu centralnego.

1. **Policz elektrony walencyjne** atomu centralnego i ligandów (szkolnie: z grupy / wzoru).
2. **Ułóż strukturę** (wiązania + wolne pary na centralnym).
3. **Policz chmury:** każde wiązanie (pojedyncze/podwójne/potrójne = 1 chmura) + każda wolna para = 1 chmura.
4. **Geometria chmur** (2 liniowa, 3 trójkąt, 4 tetraedr…).
5. **Odetnij wolne pary wzrokiem** → geometria cząsteczki (np. H₂O: 4 chmury, 2 wolne pary → kątowa).

**Przykłady E8:** CO₂ — 2 chmury, liniowa · H₂O — kątowa · SO₂ — kątowa · CH₄ — tetraedryczna.

> Model uproszczony. Struktura kroków inspirowana Khan Academy (VSEPR); przykłady i poziom — pakiet E8. Amb: 6 chmur (np. SF₆) → poza typowym E8.
:::

::: karta understand | Zadanie z modelem 3D
W modelu „Model 3D cząsteczek” (przycisk wyżej w tej sekcji) obejrzyj CO₂, H₂O, SO₂ i CH₄ (tetraedr) <span>(CO₂ liniowa, H₂O kątowa, SO₂ kątowa).</span>

\<b>Pytanie:</b> <span>Dlaczego H₂O i SO₂ są kątowe, a CO₂ liniowa?</span>

Most: kształty H₂O wrócą przy wodorotlenkach — N02 VSEPR.

> Model uproszczony; kroki VSEPR jak wyżej. Wcześniej to zadanie wymagało zewnętrznej symulacji (PhET Molecule Shapes) — zastąpione modelem silnika CHE.MOLECULE.
:::

## 19 | Tlenki w reakcjach redoks: redukcja (metalurgia), utlenianie, rozkład [[extra:AMBITNE]] {#redukcja}

::: karta understand | Pojęcia
**Redukcja tlenku** = odebranie mu tlenu; stopień utlenienia metalu maleje (np. Cu: +II → 0). Substancja odbierająca tlen to **reduktor** (H₂, C, CO, aktywny metal — np. Al); sama ulega utlenieniu. **Utlenianie** = przyłączenie tlenu lub wzrost stopnia utlenienia.
:::

::: karta extra
W metalurgii tlenki metali redukuje się, aby otrzymać metal.

### Redukcja wodorem

<div class="formula-lg" data-rx="cuoH2">CuO + H₂ →(Δ) Cu + H₂O</div>

$$ Fe₂O₃ + 3 H₂ →(Δ) 2 Fe + 3 H₂O

$$ WO₃ + 3 H₂ →(Δ) W + 3 H₂O

### Redukcja węglem

<div class="formula-lg" data-rx="cuoC">2 CuO + C → 2 Cu + CO₂</div>

$$ Fe₂O₃ + 3 C → 2 Fe + 3 CO <span class="mini-note">(uproszczenie; w wielkim piecu głównym reduktorem jest CO z C + O₂/CO₂)</span>

### Redukcja tlenkiem węgla(II) — wielki piec

<div class="formula-lg" data-rx="fe2o3Co">Fe₂O₃ + 3 CO →(Δ) 2 Fe + 3 CO₂</div>

> **Stopnie utlenienia:** Fe: +III → 0 (redukcja), C: +II → +IV (utlenianie). **Utleniacz:** Fe₂O₃ · **reduktor:** CO.

> Zapis z CO₂: 2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂ — oba zapisy są poprawnie zbilansowane; w wysokiej temperaturze, przy nadmiarze węgla, powstaje głównie CO.

> W wielkim piecu tlenek węgla(II) redukuje tlenek żelaza(III) do żelaza metalicznego. Klasyczny proces metalurgiczny.

### Termit (redukcja aluminium)

<div class="formula-lg" data-rx="termit">Fe₂O₃ + 2 Al → 2 Fe + Al₂O₃</div>

> **Stopnie utlenienia:** Fe: +III → 0 (redukcja), Al: 0 → +III (utlenianie). **Utleniacz:** Fe₂O₃ · **reduktor:** Al (oddaje elektrony).

> Reakcja silnie egzotermiczna. Lokalna temperatura może osiągać około 2500°C lub więcej, zależnie od warunków i miejsca pomiaru. Stosowana m.in. w spawaniu szyn kolejowych.

::: karta error | BHP — termit
**Nie wykonuj tej reakcji samodzielnie.** Termit osiąga bardzo wysoką temperaturę, może stopić metal, spowodować pożar i oparzenia. W lekcji analizujemy wyłącznie równanie i zastosowanie przemysłowe.
:::
:::

### Tlenki jako utleniacze i reduktory {.merge-h}

::: karta extra | Tlenki jako utleniacze / reduktory
**SO₂ może być reduktorem:** 2 SO₂ + O₂ → 2 SO₃ (S: +IV → +VI).

**SO₂ może być utleniaczem:** SO₂ + 2 H₂S → 3 S + 2 H₂O (S: +IV → 0 i −II → 0).

> Most do X01–X10 (redoks).
:::

### Termiczny rozkład tlenków {.merge-h}

::: karta extra
Niektóre mało trwałe tlenki rozkładają się pod wpływem temperatury. Nie należy zapamiętywać reguły „każdy tlenek metalu szlachetnego rozkłada się podczas ogrzewania” — zachowanie zależy od konkretnego związku i warunków.

<div class="formula-lg" data-rx="hgoDecomp">2 HgO →(Δ) 2 Hg + O₂</div>

<div class="formula-lg" data-rx="pbo2Decomp">2 PbO₂ →(Δ) 2 PbO + O₂</div>

<div class="formula-lg" data-rx="ag2oDecomp">2 Ag₂O →(Δ) 4 Ag + O₂</div>

> Tlenki metali aktywnych (Na₂O, CaO) są trwałe termicznie.

> Dawna metoda otrzymywania tlenu: prażenie HgO (Scheele, Priestley, XVIII w.) — [§C](#historia).
:::

## 20 | Stechiometria tlenków i spalania [[extra:AMBITNE]] {#stechio}

::: karta understand | Przypomnienie z R05–R08 (stechiometria)
**n = m / M** · **V = n × 22,4 dm³** (warunki normalne) · stosunek molowy z współczynników równania.

> Na E8 obliczenia prowadzi się na masach (stosunek mas z mas cząsteczkowych, prawo zachowania masy), bez moli — tak rozwiązany jest przykład 2.
:::

::: karta -
**Przykład 1:** Ile gramów MgO powstanie ze spalenia 4,8 g Mg?

::: odp | Pokaż rozwiązanie
Równanie: 2 Mg + O₂ → 2 MgO

- M(Mg) = 24 g/mol
- n(Mg) = 4,8 / 24 = 0,2 mol
- Stosunek: 2 Mg → 2 MgO (1:1)
- n(MgO) = 0,2 mol; M(MgO) = 40 g/mol
- m(MgO) = 0,2 × 40 = **8 g**
:::
:::

::: karta -
**Przykład 2:** Ile gramów CuO potrzeba do otrzymania 150 g CuSO₄?

::: odp | Pokaż rozwiązanie
Równanie: CuO + H₂SO₄ → CuSO₄ + H₂O

- M(CuO) = 80 g/mol, M(CuSO₄) = 160 g/mol
- Z 80 g CuO powstaje 160 g CuSO₄
- x g CuO → 150 g CuSO₄ → x = (80 × 150) / 160 = **75 g**
:::
:::

::: karta -
**Przykład 3:** Ile dm³ CO₂ (warunki normalne) powstanie z rozkładu 50 g CaCO₃?

::: odp | Pokaż rozwiązanie
Równanie: CaCO₃ → CaO + CO₂

- M(CaCO₃) = 100 g/mol → n = 0,5 mol
- Stosunek 1:1 → n(CO₂) = 0,5 mol
- V = 0,5 × 22,4 = **11,2 dm³**
:::
:::

::: karta -
**Przykład 4 (stechiometria spalania):** Ile CO₂ powstanie ze spalenia 1 kg węgla? Ile tlenu potrzeba? To typowe zadanie egzaminacyjne.

::: odp | Pokaż rozwiązanie
Równanie: C + O₂ → CO₂ (stosunek 1 : 1 : 1)

- n(C) = 1000 g / 12 g/mol ≈ 83,3 mol
- m(CO₂) = 83,3 mol × 44 g/mol ≈ **3,67 kg**
- m(O₂) = 83,3 mol × 32 g/mol ≈ **2,67 kg**
- Kontrola masy: 1 kg + 2,67 kg = 3,67 kg ✓ (bez moli: 12 g C → 44 g CO₂, więc 1000 g → 1000·44/12 g)
:::
:::

::: karta extra
**Przykład 5 (odczynnik limitujący):** Spalono 2,4 g magnezu w 2,4 g tlenu. Który substrat przereaguje całkowicie? Ile gramów MgO powstanie i ile substratu zostanie?

::: odp | Pokaż rozwiązanie
Równanie: 2 Mg + O₂ → 2 MgO

- n(Mg) = 2,4 / 24 = 0,1 mol; n(O₂) = 2,4 / 32 = 0,075 mol
- Do 0,1 mol Mg potrzeba 0,1 / 2 = 0,05 mol O₂, a jest 0,075 mol → **tlen w nadmiarze, magnez jest odczynnikiem limitującym**
- n(MgO) = n(Mg) = 0,1 mol → m(MgO) = 0,1 × 40 = **4,0 g**
- Zostaje 0,075 − 0,05 = 0,025 mol O₂ = **0,8 g O₂**
- Kontrola masy: 2,4 g + 2,4 g = 4,0 g + 0,8 g ✓

> Zasada: wynik liczysz zawsze z substratu, którego jest za mało w stosunku do równania. Ten sam typ zadania policzysz w kalkulatorze poniżej.
:::
:::

@model stech-kalkulator-v01 | Kalkulator stechiometryczny — masa, mole, objętość gazu, odczynnik limitujący | CHE.STECH na reakcjach silnika (spalanie, rozkład CaCO₃, CuO + H₂SO₄…)
@opis Kalkulator stechiometryczny: dla wybranej reakcji (np. spalanie, rozkład CaCO₃, CuO z H₂SO₄) wpisujesz masę lub objętość jednego reagenta, a model przelicza mole, masy i objętości gazów pozostałych substancji i wskazuje odczynnik w niedomiarze. Wniosek: ilości substancji w reakcji wynikają ze współczynników równania.

> Spalanie paliw (C, CH₄, C₃H₈, C₈H₁₈) liczysz w tym samym kalkulatorze stechiometrycznym (powyżej): wybierz reakcję spalania, wpisz masę paliwa — dostajesz masy CO₂, H₂O i O₂ z kontrolą masy.

## 21 | Doświadczenia modelowe [[basic:E8]] {#doswiadczenia}

::: karta error | BHP — czego nie robić w domu
Równań z tej lekcji **nie traktuj jako instrukcji domowych**. Nie ogrzewaj HgO, nie otrzymuj CO, SO₂ ani NO₂, nie wykonuj termitu i nie pracuj z P₄O₁₀ bez laboratorium i nadzoru nauczyciela.

Reakcja żelaza z parą wodną wymaga wysokiej temperatury, a wydzielający się wodór jest palny.
:::

::: karta basic | Format stały
Problem → Hipoteza → Sprzęt → Przebieg → **Obserwacja** → **Wniosek** → Równanie → BHP

> Obserwacja = to, co rejestrują zmysły; wniosek = interpretacja (nazwa produktu, typ reakcji). Tabela różnic — na końcu sekcji.
:::

### Doświadczenie 1: Spalanie magnezu

::: karta -
**Problem:** Czy magnez reaguje z tlenem?

**Hipoteza:** Powstanie biały proszek — tlenek magnezu.

**Sprzęt:** wstążka magnezowa, szczypce, palnik.

**Przebieg:** wstążkę magnezu trzymaną w szczypcach zapal w płomieniu palnika i trzymaj nad płytką ceramiczną.

**Obserwacja:** oślepiający biały płomień; biały proszek.

**Wniosek:** Magnez spala się w tlenie, tworząc MgO.

**Równanie:** <span class="formula" data-rx="mgO2">2 Mg + O₂ → 2 MgO</span>

**BHP:** nie patrzeć bezpośrednio na płomień; okulary.

@zlewka n01-spalanie-v01 mgO2 | Zobacz w modelu spalania (GFX)
@opis Spalanie magnezu w tlenie: oślepiająco jasny, biały płomień, po spaleniu zostaje biały proszek tlenku magnezu. Wniosek: 2 Mg + O₂ → 2 MgO — tlenek metalu otrzymuje się syntezą z tlenem.
:::

### Doświadczenie 2: CaO + H₂O (gaszenie wapna)

::: karta -
**Problem:** Czy CaO reaguje z wodą?

**Hipoteza:** Powstanie Ca(OH)₂; roztwór zasadowy.

**Sprzęt:** CaO, woda, papierek uniwersalny, fenoloftaleina.

**Przebieg:** do parownicy z kilkoma grudkami CaO wkraplaj wodę; po reakcji dolej wody, wymieszaj, zbadaj papierkiem uniwersalnym i fenoloftaleiną.

**Obserwacja:** silne rozgrzanie, syczenie; papierek niebieski; fenoloftaleina malinowa.

**Wniosek:** CaO reaguje z wodą; powstaje Ca(OH)₂.

**Równanie:** <span class="formula" data-rx="caoH2o">CaO + H₂O → Ca(OH)₂</span>

**BHP:** nie dotykać CaO mokrymi rękami; okulary; reakcja egzotermiczna.

@zlewka n01-doswiadczenia-v01 caoH2o | Zobacz w zlewce (pracownia GFX)
@opis Tlenek wapnia (wapno palone) zalany wodą: mieszanina silnie się ogrzewa, powstaje białe „mleko wapienne”, a wskaźnik wskazuje odczyn zasadowy. Wniosek: CaO + H₂O → Ca(OH)₂ — tlenek metalu aktywnego tworzy z wodą wodorotlenek.
:::

### Doświadczenie 3: Woda wapienna + CO₂

::: karta -
**Problem:** Jak wykryć CO₂?

**Hipoteza:** CO₂ mętni wodę wapienną.

**Sprzęt:** woda wapienna Ca(OH)₂, rurka, probówka.

**Przebieg:** przez rurkę wprowadzaj badany gaz (np. wydychane powietrze albo gaz z reakcji węglanu z kwasem) do probówki z klarowną wodą wapienną.

**Obserwacja:** mętnienie wody wapiennej (biały osad).

**Wniosek:** CO₂ reaguje z Ca(OH)₂ → CaCO₃.

**Równanie:** <span class="formula" data-rx="caoh2Co2">CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O</span>. Osad CaCO₃ jest biały i praktycznie nierozpuszczalny w wodzie. Przy **dużym nadmiarze CO₂** osad może zniknąć: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (roztwór klarowny).

**BHP:** nie wciągać wody wapiennej do ust.

@zlewka n01-doswiadczenia-v01 caoh2Co2 | Zobacz w zlewce (pracownia GFX)
@opis Tlenek węgla(IV) wprowadzany do klarownej wody wapiennej: woda mętnieje, pojawia się biała zawiesina. Wniosek: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O — test wykrywający CO₂ i dowód kwasowego charakteru tego tlenku.
:::

### Doświadczenie 4: CuO + H₂SO₄ [[basic:E8]]

::: karta -
**Problem:** Czy CuO reaguje z kwasem?

**Hipoteza:** Powstanie niebieski roztwór CuSO₄.

**Sprzęt:** CuO (czarny), H₂SO₄ (rozcieńczony), probówka.

**Przebieg:** do probówki z odrobiną czarnego CuO dodaj rozcieńczony H₂SO₄ i lekko ogrzej (uchwyt, wylot probówki skierowany od siebie i od innych).

**Obserwacja:** czarny CuO znika; powstaje niebieski roztwór.

**Wniosek:** CuO (tlenek zasadowy) reaguje z kwasem; powstaje sól — siarczan(VI) miedzi(II) — i woda; niebieską barwę nadają jony Cu²⁺.

**Równanie:** <span class="formula" data-rx="cuoH2so4">CuO + H₂SO₄ → CuSO₄ + H₂O</span>

**BHP:** okulary; H₂SO₄ żrący.

@zlewka n01-doswiadczenia-v01 cuoH2so4 | Zobacz w zlewce (pracownia GFX)
@opis Czarny tlenek miedzi(II) w roztworze kwasu siarkowego(VI), lekko ogrzewanym: proszek znika, a roztwór barwi się na niebiesko. Wniosek: CuO + H₂SO₄ → CuSO₄ + H₂O — tlenek zasadowy reaguje z kwasem, tworząc sól i wodę.
:::

@model n01-doswiadczenia-v01 | Pracownia: doświadczenia z tlenkami — zlewka, równania, obserwacje, BHP | GFX.rx · CHE.REACTION · CHE.IONIC · 22 doświadczenia
@opis Pracownia doświadczeń z tlenkami (22 doświadczenia): zlewki i probówki w animacji, przy każdym obserwacje, równanie reakcji i zasady BHP — m.in. spalanie magnezu, CaO z wodą, CO₂ z wodą wapienną, CuO z kwasem siarkowym(VI). Wniosek: właściwości tlenków potwierdza się doświadczeniem i obserwacją produktów.

@model gfx-scene-carbonate | Wykrywanie CO₂: węglan + kwas → gaz → woda wapienna mętnieje | Scena GFX
@opis Scena doświadczenia: na węglan wapnia działa kwas — wydzielają się pęcherzyki gazu, który przepuszczony przez klarowną wodę wapienną powoduje jej zmętnienie (biały osad CaCO₃). Wniosek: powstaje tlenek węgla(IV), a zmętnienie wody wapiennej to jego próba identyfikacyjna.

### Obserwacja ≠ wniosek

::: karta error
::: div.table-wrap
<table>
<thead><tr><th>Obserwacja (zmysły)</th><th>Wniosek (interpretacja)</th></tr></thead>
<tbody>
<tr><td>Roztwór mętnieje</td><td>Powstaje osad CaCO₃; obecny CO₂</td></tr>
<tr><td>Naczynie jest gorące</td><td>Reakcja egzotermiczna</td></tr>
<tr><td>Pojawiają się pęcherzyki</td><td>Wydziela się gaz</td></tr>
<tr><td>Roztwór zmienia barwę na niebieską</td><td>Powstał jon Cu²⁺ (np. CuSO₄)</td></tr>
<tr><td>Czarny osad znika</td><td>CuO przereagował; powstał CuSO₄</td></tr>
</tbody>
</table>
:::

**Nie pisz w obserwacji:** „powstał CaCO₃”, „zachodzi redoks”, „wydziela się H₂” — to wnioski, dopóki nie zidentyfikujesz substancji.
:::

## 22 | Klinika błędów {#klinika}

::: div.table-wrap
<table class="klinika-table">
<thead><tr><th>Błąd</th><th>Poprawnie</th><th>Dlaczego</th></tr></thead>
<tbody>
<tr class="error-row"><td class="col-blad" data-label="Błąd">FeO₃</td><td class="col-ok" data-label="Poprawnie">Fe₂O₃ — tlenek żelaza(III)</td><td data-label="Dlaczego">Dla Fe(III) i O(II) W–K–S–K daje Fe₂O₃. W typowych zadaniach szkolnych żelazo występuje głównie na +II i +III.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„tlenek żelaza” bez cyfry</td><td class="col-ok" data-label="Poprawnie">tlenek żelaza(II) lub (III)</td><td data-label="Dlaczego">Fe ma zmienną wartościowość.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">Ca₂O₂</td><td class="col-ok" data-label="Poprawnie">CaO</td><td data-label="Dlaczego">Skróć do najprostszego stosunku.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">SO₃ + H₂O → H₂SO₃</td><td class="col-ok" data-label="Poprawnie">SO₃ + H₂O → H₂SO₄</td><td data-label="Dlaczego">SO₃ to tlenek siarki(VI).</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">CO₂ zasadowy</td><td class="col-ok" data-label="Poprawnie">CO₂ kwasowy</td><td data-label="Dlaczego">Niemetal → zwykle kwasowy.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">MgO + H₂O „łatwo”</td><td class="col-ok" data-label="Poprawnie">praktycznie nie</td><td data-label="Dlaczego">Nie mylić z CaO.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">Al₂O₃ tylko zasadowy</td><td class="col-ok" data-label="Poprawnie">amfoteryczny</td><td data-label="Dlaczego">Reaguje z kwasem i zasadą.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">Mn₂O₇ zasadowy</td><td class="col-ok" data-label="Poprawnie">kwasowy</td><td data-label="Dlaczego">Wysoki stopień utlenienia metalu.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„Każdy tlenek metalu reaguje z wodą”</td><td class="col-ok" data-label="Poprawnie">tylko niektóre tlenki zasadowe</td><td data-label="Dlaczego">CuO, Fe₂O₃, Al₂O₃ praktycznie nie.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„OF₂ to tlenek”</td><td class="col-ok" data-label="Poprawnie">fluorek tlenu</td><td data-label="Dlaczego">Fluor elektroujemniejszy niż tlen.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„H₂O₂ — tlen na −II”</td><td class="col-ok" data-label="Poprawnie">tlen na −I</td><td data-label="Dlaczego">Nadtlenek — wiązanie O–O.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„Fe₃O₄ — Fe na +II”</td><td class="col-ok" data-label="Poprawnie">tlenek mieszany Fe(II,III)</td><td data-label="Dlaczego">Średni stopień +8/3.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">CO — tlenek kwasowy jak CO₂</td><td class="col-ok" data-label="Poprawnie">obojętny (szkolnie)</td><td data-label="Dlaczego">Nie tworzy kwasu z wodą ani soli z zasadą w warunkach szkolnych.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">SiO₂ + H₂O → H₂SiO₃ (jak SO₃)</td><td class="col-ok" data-label="Poprawnie">SiO₂ z wodą praktycznie nie reaguje</td><td data-label="Dlaczego">Sieć kowalencyjna; reaguje z mocną zasadą po ogrzaniu.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">CO₂ + NaOH zawsze → Na₂CO₃</td><td class="col-ok" data-label="Poprawnie">przy nadmiarze CO₂ → NaHCO₃</td><td data-label="Dlaczego">Produkt zależy od stosunku molowego substratów.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">P₂O₅ i P₄O₁₀ to różne substancje</td><td class="col-ok" data-label="Poprawnie">ta sama substancja</td><td data-label="Dlaczego">Wzór empiryczny vs wzór cząsteczkowy.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">Obserwacja: „powstał CaCO₃”</td><td class="col-ok" data-label="Poprawnie">Obserwacja: woda wapienna mętnieje</td><td data-label="Dlaczego">Nazwa produktu to wniosek, nie obserwacja.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„Każdy tlenek zasadowy daje z wodą zasadę.”</td><td class="col-ok" data-label="Poprawnie">Tylko tlenki metali aktywnych (Na₂O, K₂O, CaO, BaO); CuO, Fe₂O₃ z wodą nie reagują, choć są zasadowe.</td><td data-label="Dlaczego">Charakter ≠ reakcja z wodą.</td><td>—</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">„Tlenek obojętny w ogóle nie reaguje.”</td><td class="col-ok" data-label="Poprawnie">CO i NO nie wykazują charakteru kwasowego ani zasadowego, ale reagują (CO się pali, NO utlenia się do NO₂).</td><td data-label="Dlaczego">„Obojętny” dotyczy kwasowości/zasadowości, nie reaktywności.</td><td>—</td></tr>
</tbody>
</table>
:::

## 23 | Ćwiczenia {#cwiczenia}

::: details.answer.interleaving | Trening mieszany (3 min) — tlenki + fundamenty
1. Ile elektronów walencyjnych ma O? *(F01–F09 (fundamenty))*
2. Jaki charakter ma zwykle SO₂? *(N01)*
3. Zapisz wzór tlenku glinu (W–K–S–K). *(N01)*
4. CaO + H₂O → ? *(most N02)*
5. Czy MgO silnie reaguje z wodą jak CaO? *(N01)*

> Sprawdź w sekcjach wyżej / F01–F09 — nie kasuj odpowiedzi w głowie, wróć do karty.
:::

### Poziom A — podstawa [[basic:E8]]

::: karta -
1. Ułóż wzory: tlenek magnezu, tlenek glinu, tlenek siarki(IV), tlenek azotu(V).
2. Nazwij: Fe₂O₃, CuO, N₂O₅, P₂O₅.
3. Podaj charakter: Na₂O, SO₃, CO, CO₂.
4. Dokończ: Na₂O + H₂O → … ; SO₃ + H₂O → …
5. Zbilansuj: Al + O₂ → Al₂O₃.

::: odp | Pokaż odpowiedzi
1. MgO; Al₂O₃; SO₂; N₂O₅.
2. tlenek żelaza(III); tlenek miedzi(II); tlenek azotu(V); tlenek fosforu(V).
3. Na₂O — zasadowy; SO₃ — kwasowy; CO — obojętny; CO₂ — kwasowy.
4. 2 NaOH; H₂SO₄.
5. 4 Al + 3 O₂ → 2 Al₂O₃.
:::
:::

### Poziom B — trening [[exam:EGZAMIN]]

::: karta -
::: ol {start="6"}
<li>Równania: a) spalanie siarki, b) CaO + HCl, c) CO₂ + NaOH (nadmiar zasady).</li>

<li>Dlaczego CO jest obojętny, a CO₂ kwasowy (szkolnie)?</li>

<li>Popraw: FeO₃; „tlenek miedzi”; Ca₂O₂.</li>

<li>SO₂ + H₂O; N₂O₅ + H₂O; K₂O + H₂O.</li>

<li>CaO + H₂SO₄ → ? ; SO₃ + 2 NaOH → ?</li>
:::

::: odp | Pokaż odpowiedzi
::: ol {start="6"}
<li>a) S + O₂ → SO₂; b) CaO + 2 HCl → CaCl₂ + H₂O; c) CO₂ + 2 NaOH → Na₂CO₃ + H₂O.</li>

<li>CO nie tworzy kwasu z wodą (szkolnie); CO₂ daje H₂CO₃.</li>

<li>Fe₂O₃; tlenek miedzi(II) [lub (I)]; CaO.</li>

<li>H₂SO₃; 2 HNO₃; 2 KOH.</li>

<li>CaSO₄ + H₂O; Na₂SO₄ + H₂O.</li>
:::
:::
:::

### Poziom C — ambitny [[extra:AMBITNE]]

::: karta extra
::: ol {start="11"}
<li>Al₂O₃ + HCl i Al₂O₃ + NaOH — co to mówi o charakterze?</li>

<li>P₂O₅ vs P₄O₁₀ — kiedy który zapis?</li>

<li>Dlaczego MgO praktycznie nie reaguje z wodą jak CaO?</li>

<li>Charakter Mn₂O₇ i CrO₃ — uzasadnij.</li>

<li>Trend w okresie: Na₂O → Cl₂O₇.</li>

<li>Wskaż kolory: CuO, Fe₂O₃, ZnO, PbO.</li>

<li>Dlaczego Fe₃O₄ to tlenek mieszany?</li>
:::

::: odp | Pokaż odpowiedzi
::: ol {start="11"}
<li>Amfoteryczny — reaguje z kwasami i zasadami; produkty zależą od środowiska.</li>

<li>Szkolny empiryczny P₂O₅; cząsteczkowy P₄O₁₀.</li>

<li>MgO ma bardzo trwałą sieć jonową (mały jon Mg²⁺ — duża energia sieciowa), a powstający Mg(OH)₂ jest praktycznie nierozpuszczalny i pokrywa ziarna tlenku — reakcja biegnie bardzo wolno. CaO ma słabszą sieć, a Ca(OH)₂ jest tylko trudno rozpuszczalny — reakcja jest szybka i silnie egzotermiczna.</li>

<li>Kwasowe — wysoki stopień utlenienia, aniony tlenowe (MnO₄⁻, CrO₄²⁻).</li>

<li>Zasadowy → amfoteryczny → kwasowy (coraz silniejszy w prawo okresu).</li>

<li>CuO — czarny; Fe₂O₃ — rdzawy; ZnO — biały; PbO — żółty (litargit).</li>

<li>Fe₃O₄ = FeO·Fe₂O₃ — zawiera Fe na dwóch stopniach utlenienia (+II i +III).</li>
:::
:::
:::

### Poziom D — zaawansowany [[extra:ZAAWANSOWANE]]

::: karta extra
::: ol {start="18"}
<li>Porównaj budowę elektronową SO₂ (VSEPR) — dlaczego jest kątowa?</li>

<li>Wyjaśnij, dlaczego SiO₂ ma wysoką temperaturę topnienia mimo prostego wzoru.</li>

<li>Napisz równanie reakcji P₄O₁₀ z wodą (produkt: H₃PO₄).</li>

<li>Dlaczego OF₂ nie jest tlenkiem, a fluorkiem tlenu?</li>

<li>Napisz równanie redukcji Fe₂O₃ węglem.</li>

<li>Napisz równanie termicznego rozkładu HgO.</li>
:::

::: odp | Pokaż odpowiedzi
::: ol {start="18"}
<li>SO₂ — AX₂E (2 ligandy + 1 wolna para) → geometria kątowa.</li>

<li>SiO₂ tworzy sieć kowalencyjną (każdy atom Si połączony z 4 atomami O).</li>

<li>P₄O₁₀ + 6 H₂O → 4 H₃PO₄.</li>

<li>W OF₂ fluor jest bardziej elektroujemny niż tlen; tlen ma +II.</li>

<li>2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂.</li>

<li>2 HgO →(Δ) 2 Hg + O₂.</li>
:::
:::
:::

::: karta basic | Utrwalenie — tlenki (W1)
1. Podaj nazwy: CO, CO₂, SO₂, SO₃.
2. Zapisz wzór tlenku glinu.
3. Zapisz równanie spalania wapnia.
4. Zapisz reakcję tlenku wapnia z wodą.
5. Czym różni się CO od CO₂?
6. Określ charakter chemiczny: CaO, SO₃, Al₂O₃.

::: odp | Pokaż odpowiedzi
1. Tlenek węgla(II), tlenek węgla(IV), tlenek siarki(IV), tlenek siarki(VI).
2. Al₂O₃.
3. 2 Ca + O₂ → 2 CaO.
4. CaO + H₂O → Ca(OH)₂.
5. Inny skład i stopień utlenienia węgla (+II i +IV); CO jest silnie trujący i obojętny, CO₂ nie podtrzymuje spalania, jest kwasowy i z wodą tworzy kwas węglowy (CO₂ + H₂O ⇌ H₂CO₃).
6. CaO — zasadowy, SO₃ — kwasowy, Al₂O₃ — amfoteryczny.
:::
:::

## 24 | Typologia zadań E8 [[exam:EGZAMIN]] {#typologia-e8}

Wzorce zadań z arkuszy egzaminacyjnych. Każdy typ z przykładem i rozwiązaniem (przykłady inne niż w ćwiczeniach i teście).

::: karta exam
##### Typ 1: Ułóż wzór tlenku na podstawie nazwy

**Przykład:** Ułóż wzór tlenku chromu(III).

::: odp | Rozwiązanie
Cr(III) + O(II) → W–K–S–K → Cr₂O₃ (kontrola: 2·(+3) + 3·(−2) = 0).
:::
:::

::: karta exam
##### Typ 2: Nazwij tlenek na podstawie wzoru

**Przykład:** Podaj nazwę PbO₂.

::: odp | Rozwiązanie
Ołów ma wartościowość IV (1·x = 2·2 → x = 4) → tlenek ołowiu(IV).
:::
:::

::: karta exam
##### Typ 3: Określ charakter tlenku

**Przykład:** Określ charakter: K₂O, N₂O₅, NO, ZnO.

::: odp | Rozwiązanie
K₂O — zasadowy; N₂O₅ — kwasowy; NO — obojętny; ZnO — amfoteryczny.
:::
:::

::: karta exam
##### Typ 4: Napisz równanie reakcji

**Przykład:** Napisz równanie reakcji tlenku baru z wodą.

::: odp | Rozwiązanie
BaO + H₂O → Ba(OH)₂.
:::
:::

::: karta exam
##### Typ 5: Dokończ równanie

**Przykład:** SO₂ + 2 KOH → ?

::: odp | Rozwiązanie
K₂SO₃ + H₂O (siarczan(IV) potasu i woda; nadmiar zasady).
:::
:::

::: karta exam
##### Typ 6: Wskaż obserwację i wniosek

**Przykład:** Podczas doświadczenia woda wapienna zmętniała. Podaj obserwację i wniosek.

::: odp | Rozwiązanie
**Obserwacja:** woda wapienna zmętniała, powstał biały osad. **Wniosek:** obecny CO₂ — powstał CaCO₃.
:::
:::

::: karta exam
##### Typ 7: Zaprojektuj doświadczenie

**Przykład:** Zaprojektuj doświadczenie wykrywające CO₂.

::: odp | Rozwiązanie
Problem → Hipoteza → Sprzęt (woda wapienna, rurka) → Przebieg → Obserwacja (mętnienie) → Wniosek → Równanie → BHP.
:::
:::

::: karta exam
##### Typ 8: Wyjaśnij związek między budową a właściwościami [[extra:AMBITNE]]

**Przykład:** Wyjaśnij, dlaczego tlenek sodu tworzy z wodą zasadę, a tlenek siarki(VI) — kwas.

::: odp | Rozwiązanie
Na₂O jest związkiem jonowym: jon O²⁻ reaguje z wodą (O²⁻ + H₂O → 2 OH⁻) → NaOH. SO₃ jest związkiem kowalencyjnym: przyłącza cząsteczkę wody, tworząc kwas tlenowy H₂SO₄, który w wodzie oddaje jony H⁺.
:::
:::

::: karta exam
##### Typ 9: Wskaż zastosowanie tlenku

**Przykład:** Podaj dwa zastosowania tlenku wapnia.

::: odp | Rozwiązanie
Cement, budownictwo, wapno palone do gaszenia, produkcja zaprawy.
:::
:::

## 25 | Sprawdź się: test, test adaptacyjny, quiz {#test}

::: karta -
1. Wzory: tlenek wapnia, tlenek żelaza(III), tlenek siarki(VI).
2. Nazwy: Al₂O₃, N₂O₅, CuO, SO₂.
3. Charakter: MgO, CO₂, NO, Al₂O₃.
4. Równania: CaO + H₂O; SO₃ + H₂O; CuO + H₂SO₄.
5. Popraw: AlO; SO₂ + H₂O → H₂SO₄; „tlenek ołowiu” dla PbO₂.
6. Zbilansuj: P + O₂ → P₂O₅.
7. (extra) Co oznacza amfoteryczność Al₂O₃?
8. (extra) Dlaczego Mn₂O₇ jest kwasowy, mimo że to tlenek metalu?
9. (extra) Napisz równanie P₄O₁₀ + H₂O → H₃PO₄.
10. (extra) Porównaj CO₂ i SiO₂ — dlaczego jeden reaguje z wodą, a drugi nie?

::: odp | Pokaż odpowiedzi
1. CaO; Fe₂O₃; SO₃.
2. tlenek glinu; tlenek azotu(V); tlenek miedzi(II); tlenek siarki(IV).
3. MgO — zasadowy; CO₂ — kwasowy; NO — obojętny; Al₂O₃ — amfoteryczny.
4. Ca(OH)₂; H₂SO₄; CuSO₄ + H₂O.
5. Al₂O₃; SO₂ + H₂O → H₂SO₃ (siarka(IV) daje kwas siarkowy(IV)); tlenek ołowiu(IV).
6. 4 P + 5 O₂ → 2 P₂O₅.
7. Reaguje z kwasami i zasadami; produkty zależą od środowiska.
8. Wysoki stopień Mn(+VII) — zachowanie kwasowe (MnO₄⁻).
9. P₄O₁₀ + 6 H₂O → 4 H₃PO₄.
10. CO₂ to mała cząsteczka (reaguje); SiO₂ to sieć kowalencyjna (praktycznie nie reaguje z wodą).
:::
:::

### Test adaptacyjny (poziomy A, B, C) {.merge-h}

Wybierz poziom — 5 pytań dopasowanych do twojej wiedzy.

::: div.widget
#### Test adaptacyjny

Kliknij poziom A (podstawa), B (trening), C (ambitny). {.widget-hint}

<div class="bld-pool" id="adaptPool">
<button class="active" data-lvl="A" type="button">Poziom A — podstawa</button>
<button data-lvl="B" type="button">Poziom B — trening</button>
<button data-lvl="C" type="button">Poziom C — ambitny</button>
</div>

<div id="adaptQuiz"></div>
:::

### Quiz klikany {.merge-h}

<div id="quizWrap"></div>

<div class="quiz-score" id="quizScore"></div>

## 26 | Karta szybkiego powtórzenia [[exam:DO WYDRUKU]] {#karta}

Jednostronicowa ściąga. Wciśnij **Ctrl+P** (drukuj) — karta jest zoptymalizowana do wydruku.

::: div.print-card
#### Tlenki — ściąga E8

::: div.pc-grid
<div class="pc-box">
<b>Definicja</b>
          Tlenek = związek tlenu z innym pierwiastkiem (EₓOᵧ). O zwykle −II · OF₂ = fluorek, nie tlenek · H₂O₂ — nadtlenek, tlen na −I.
        </div>

<div class="pc-box">
<b>Wzory — W–K–S–K</b>
          krzyż wartościowości + kontrola ładunku: Fe(III) + O(II) → Fe₂O₃ · Cu(II) + O(II) → CuO · S(VI) + O(II) → SO₃.
        </div>

<div class="pc-box">
<b>Charakter</b>
          Metale 1–2 zwykle zasadowe (wyjątki osobno) · Niemetal → kwasowy · CO, NO, N₂O → obojętny · Al₂O₃, ZnO → amfoteryczny. Charakter ≠ woda ≠ rozpuszczalność.
        </div>

<div class="pc-box">
<b>Przykłady i wyjątki</b>
          Zasadowe: Na₂O, CaO (+ woda → OH) · MgO słabo. Kwasowe: SO₂, SO₃, CO₂, P₂O₅/P₄O₁₀ · SiO₂ sieć · Mn₂O₇, CrO₃. Amfoteryczne: Al₂O₃, ZnO · z kwasem i zasadą. Obojętne: CO, NO, N₂O — brak typowej reakcji kwas–zasada.
        </div>

<div class="pc-box">
<b>Tlenek + woda</b>
          Na₂O + H₂O → 2 NaOH · CaO + H₂O → Ca(OH)₂ · SO₃ + H₂O → H₂SO₄ · CO₂ + H₂O → H₂CO₃.
        </div>

<div class="pc-box">
<b>Tlenek + kwas</b>
          CaO + 2 HCl → CaCl₂ + H₂O · CuO + H₂SO₄ → CuSO₄ + H₂O.
        </div>

<div class="pc-box">
<b>Tlenek + zasada</b>
          CO₂ + 2 NaOH → Na₂CO₃ + H₂O · SO₃ + 2 NaOH → Na₂SO₄ + H₂O.
        </div>

<div class="pc-box">
<b>Pułapki</b>
          FeO₃ → Fe₂O₃ · Ca₂O₂ → CaO · MgO + H₂O praktycznie nie · OF₂ to fluorek tlenu · H₂O₂ — tlen na −I.
        </div>

<div class="pc-box">
<b>Kolory</b>
          CuO — czarny · Fe₂O₃ — rdzawy · ZnO — biały · PbO — żółty · Cr₂O₃ — zielony.
        </div>

<div class="pc-box">
<b>Obserwacja ≠ wniosek</b>
          Obserwacja: woda wapienna mętnieje. Wniosek: obecny CO₂ — powstał CaCO₃.
        </div>

<div class="pc-box">
<b>BHP i środowisko</b>
          CO — czad, czujnik CO · CaO — żrący, egzotermiczny z wodą · SO₂, NO₂ → kwaśne deszcze · CO₂, N₂O → efekt cieplarniany.
        </div>

<div class="pc-box">
<b>Most</b>
          Tlenek zasadowy → wodorotlenek (N02). Tlenek kwasowy → kwas (N03). Tlenek + kwas/zasada → sól (N04).
        </div>
:::
:::

## 27 | Fiszki {#fiszki}

::: fiszki {#flashGrid}
Co to tlenek? | **Związek tlenu z innym pierwiastkiem** | basic:podstawa
Na₂O + H₂O → ? | **2 NaOH** | basic:podstawa
CaO + H₂O → ? | **Ca(OH)₂** | basic:podstawa
SO₃ + H₂O → ? | **H₂SO₄** | basic:podstawa
SO₂ + H₂O → ? | **H₂SO₃** | basic:podstawa
CO₂ + H₂O → ? | **H₂CO₃ (słaby)** | basic:podstawa
N₂O₅ + H₂O → ? | **2 HNO₃** | basic:podstawa
Charakter Na₂O | **zasadowy** | basic:podstawa
Charakter SO₂ | **kwasowy** | basic:podstawa
Charakter CO | **obojętny (szkolnie)** | basic:podstawa
Charakter Al₂O₃ | **amfoteryczny** | extra:ambitny
Fe₂O₃ — nazwa | **tlenek żelaza(III)** | basic:podstawa
Cu₂O — nazwa | **tlenek miedzi(I)** | basic:podstawa
Dlaczego nie FeO₃? | **W–K–S–K: 2·III = 3·II → Fe₂O₃** | error:pułapka
P₂O₅ a P₄O₁₀ | **szkolny zapis vs cząsteczka** | extra:ambitny
Tlenek zasadowy + kwas → | **sól + woda** | basic:podstawa
Tlenek kwasowy + zasada → | **sól + woda** | basic:podstawa
Tlenki obojętne | **CO, NO, N₂O** | basic:podstawa
MgO + H₂O? | **praktycznie nie (szkolnie)** | error:pułapka
CO₂ + 2 NaOH → | **Na₂CO₃ + H₂O** | basic:podstawa
Wykrywanie CO₂ | **woda wapienna (mętnienie)** | basic:podstawa
Mn₂O₇ — charakter | **kwasowy (wyjątek!)** | extra:ambitny
CaO — potocznie | **wapno palone** | basic:podstawa
4 Al + 3 O₂ → | **2 Al₂O₃** | basic:podstawa
Kolor CuO | **czarny** | basic:podstawa
Kolor Fe₂O₃ | **rdzawy (czerwono-brunatny)** | basic:podstawa
Kolor ZnO | **biały** | basic:podstawa
Redukcja Fe₂O₃ węglem | **2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂** | extra:zaawansowane
Rozkład HgO | **2 HgO → 2 Hg + O₂ (Δ)** | extra:zaawansowane
Czad — wzór | **CO — bezbarwny, bezwonny, śmiertelny** | basic:podstawa
Fe₃O₄ — typ | **tlenek mieszany Fe(II,III)** | extra:zaawansowane
OF₂ — nazwa | **fluorek tlenu (nie tlenek!)** | error:pułapka
Trend w okresie | **zasadowy → amfoteryczny → kwasowy** | extra:ambitny
VSEPR CO₂ | **AX₂, liniowa, 180°** | extra:ambitny
VSEPR SO₂ | **AX₂E, kątowa, ~119°** | extra:ambitny
Charakter tlenku ≠ ? | **≠ reakcja z wodą ≠ rozpuszczalność (np. CuO)** | basic:podstawa
SiO₂ + H₂O? | **praktycznie nie (sieć kowalencyjna); z NaOH po ogrzaniu tak** | error:pułapka
CO₂ + NaOH (nadmiar CO₂) → | **NaHCO₃** | extra:ambitny
KO₂ w aparatach tlenowych | **4 KO₂ + 2 CO₂ → 2 K₂CO₃ + 3 O₂** | extra:zaawansowane
:::

## 28 | Mapa myśli {#mapa}

::: div.card.map-card
<div class="mm"><div class="mm-root">TLENEK</div><div class="mm-formula">Wzór EₓOᵧ — W–K–S–K, O najczęściej II<br/>nazwa: Fe/Cu/Sn/Pb/Mn/Cr → cyfra rzymska</div><div class="mm-grid">
<a class="mm-box" href="#definicja" style="--mm:#0d6868"><b>DEFINICJA I WZÓR</b><ul><li>tlen na −II, drugi pierwiastek dowolny</li><li>W–K–S–K + kontrola sumy stopni = 0</li><li>nie tlenki: H₂O₂, Na₂O₂ (−I), KO₂, OF₂ (+II)</li><li>P₂O₅ (empiryczny) = P₄O₁₀ (cząsteczka)</li></ul></a>
<a class="mm-box" href="#charakter" style="--mm:#2e7d4f"><b>CHARAKTER</b><ul><li>zasadowy (metal 1–2)</li><li>kwasowy (niemetal)</li><li>obojętny (CO, NO, N₂O)</li><li>amfoteryczny (Al₂O₃, ZnO)</li><li>wyjątki: Mn₂O₇, CrO₃ (kwasowe)</li><li>trend: zasadowy → kwasowy w prawo</li></ul></a>
<a class="mm-box" href="#oxide-decision-model" style="--mm:#2e7d4f"><b>TRZY PYTANIA</b><ul><li>charakter ≠ reakcja z wodą ≠ rozpuszczalność</li><li>CuO: zasadowy, z wodą nie</li><li>SiO₂: kwasowy, z wodą nie</li><li>MgO: z wodą bardzo słabo</li></ul></a>
<a class="mm-box" href="#kolory" style="--mm:#b06f1c"><b>WŁAŚCIWOŚCI</b><ul><li>tlenki metali: ciała stałe, wysoka t. topnienia</li><li>tlenki niemetali: często gazy (CO₂, SO₂)</li><li>barwy: CuO czarny, Fe₂O₃ rdzawy, Cr₂O₃ zielony</li></ul></a>
<a class="mm-box" href="#otrzymywanie" style="--mm:#2b5e9c"><b>OTRZYMYWANIE</b><ul><li>pierwiastek + O₂</li><li>spalanie związków; niecałkowite → CO, sadza</li><li>rozkład węglanów</li><li>rozkład wodorotlenków</li><li>utlenianie niższych tlenków</li><li>metoda przemysłowa: SO₂ + O₂ → SO₃</li></ul></a>
<a class="mm-box" href="#reakcje" style="--mm:#6b3fa0"><b>REAKCJE</b><ul><li>+ H₂O → wodorotlenek / kwas</li><li>+ kwas → sól + woda</li><li>+ zasada → sól + woda</li><li>+ tlenek → sól</li><li>+ H₂ / C → metal (redukcja)</li></ul></a>
<a class="mm-box" href="#oxide-decision-model" style="--mm:#b06f1c"><b>PRZYKŁADY</b><ul><li>Na₂O, CaO — zasadowy</li><li>CO₂, SO₃ — kwasowy</li><li>Al₂O₃, ZnO — amfoteryczny</li><li>CO, NO, N₂O — obojętny</li><li>Fe₂O₃, CuO — z kwasami tak</li></ul></a>
<a class="mm-box" href="#n01-why-sio2-mgo" style="--mm:#2b5e9c"><b>DLACZEGO?</b><ul><li>jonowy: O²⁻ + H₂O → 2 OH⁻ (zasadowy)</li><li>kowalencyjny + H₂O → kwas tlenowy</li><li>wyższy stopień utlenienia → bardziej kwasowy</li><li>sieć SiO₂, energia sieci MgO</li></ul></a>
<a class="mm-box" href="#bezpieczenstwo" style="--mm:#b83a45"><b>BHP I ŚRODOWISKO</b><ul><li>CO — czad, czujnik CO</li><li>CaO — żrący, egzotermiczny z wodą</li><li>SO₂, NO₂ → kwaśne deszcze</li><li>CO₂, N₂O → efekt cieplarniany</li></ul></a>
<a class="mm-box" href="#klinika" style="--mm:#b83a45"><b>PUŁAPKI</b><ul><li>FeO₃ → Fe₂O₃</li><li>MgO + H₂O praktycznie nie</li><li>SO₃ + H₂O → H₂SO₄</li><li>obserwacja ≠ wniosek</li><li>OF₂ ≠ tlenek · H₂O₂ tlen na −I</li></ul></a>
<a class="mm-box" href="#dod-h" style="--mm:#6b3fa0"><b>MOSTY</b><ul><li>F01–F09 — W–K–S–K</li><li>N02 — wodorotlenki</li><li>N03 — kwasy</li><li>N04 — sole</li><li>R05–R08 — stechiometria · X01–X10 — redoks</li></ul></a>
</div><a class="mm-foot" href="#zastosowania" style="text-decoration:none">Zastosowania: CaO, SiO₂, Fe₂O₃, CO₂, TiO₂, ZnO, Al₂O₃</a></div>
:::

## 29 | Słownik {#slownik}

::: karta -
::: slownik {.def-list}
Tlenek :: Związek tlenu z innym pierwiastkiem.
Tlenek zasadowy :: Tlenek metalu reagujący z kwasem, tworzący z wodą wodorotlenek.
Tlenek kwasowy :: Tlenek niemetalu reagujący z zasadą, tworzący z wodą kwas.
Tlenek obojętny :: Nie tworzy kwasu ani zasady z wodą (w warunkach szkolnych).
Tlenek amfoteryczny :: Reaguje zarówno z kwasami, jak i z zasadami.
Tlenek mieszany :: Zawiera ten sam metal na dwóch stopniach utlenienia, np. Fe₃O₄ = FeO·Fe₂O₃.
Nadtlenek :: Związek z wiązaniem O–O; tlen na −I (H₂O₂, Na₂O₂).
Woda wapienna :: Roztwór Ca(OH)₂ — służy do wykrywania CO₂.
Wapno palone :: CaO.
Wapno gaszone :: Ca(OH)₂.
P₂O₅ :: Zapis empiryczny tlenku fosforu(V).
P₄O₁₀ :: Rzeczywista cząsteczka tlenku fosforu(V).
OF₂ :: Fluorek tlenu (nie tlenek).
VSEPR :: Teoria odpychania par elektronowych — przewiduje kształt cząsteczki.
Reakcja charakterystyczna :: Reakcja pozwalająca wykryć substancję.
Katalizator :: Substancja zwiększająca szybkość reakcji, niezużywająca się.
Termit :: Mieszanina tlenku metalu i aluminium — silnie egzotermiczna redukcja.
Charakter chemiczny tlenku :: Typowe zachowanie kwasowo-zasadowe tlenku (zasadowy, kwasowy, obojętny, amfoteryczny) — to nie to samo co reakcja z wodą ani rozpuszczalność.
Ponadtlenek :: Związek z anionem O₂⁻; tlen na −½ (KO₂).
Wzór empiryczny :: Najprostszy stosunek liczby atomów w związku (P₂O₅); wzór cząsteczkowy podaje rzeczywisty skład cząsteczki (P₄O₁₀).
Redukcja tlenku :: Odebranie tlenu tlenkowi (np. przez H₂, C, CO) — stopień utlenienia metalu maleje.
Korozja :: Niszczenie metalu w wyniku reakcji chemicznych z otoczeniem (np. rdzewienie żelaza).
Pasywacja :: Powstanie szczelnej warstwy tlenku chroniącej metal przed dalszą korozją (Al₂O₃ na aluminium).
:::
:::

## 30 | Checklista {#checklista}

::: div.checklist
#### Sprawdź, czy umiesz:

- Zapisać wzór tlenku na podstawie nazwy i wartościowości.
- Nazwać tlenek (z cyfrą rzymską dla Fe, Cu, Sn, Pb, Mn, Cr).
- Określić charakter tlenku (zasadowy / kwasowy / obojętny / amfoteryczny).
- Zapisać reakcję tlenku z wodą (dla tlenków aktywnych).
- Zapisać reakcję tlenku z kwasem i zasadą.
- Rozróżnić obserwację od wniosku.
- Podzielić tlenki na rozpuszczalne i nierozpuszczalne w wodzie.
- Wykryć CO₂ wodą wapienną.
- Odróżnić charakter tlenku od reakcji z wodą i rozpuszczalności (CuO, SiO₂, MgO).
- Wskazać zagrożenia (CO, CaO, SO₂) i wpływ tlenków na środowisko.
- (ambitnie) Wyjaśnić amfoteryczność Al₂O₃ i ZnO.
- (ambitnie) Wyjaśnić P₂O₅ vs P₄O₁₀.
- (ambitnie) Rozpoznać tlenki mieszane (Fe₃O₄).
- (ambitnie) Wyjaśnić geometrię cząsteczek (VSEPR).
- (zaawansowanie) Rozwiązać zadanie stechiometryczne z tlenkiem.
- (zaawansowanie) Wyjaśnić korozję i pasywację.
- (zaawansowanie) Zapisać reakcję redukcji tlenku wodorem / węglem.
- (zaawansowanie) Znać rolę tlenków w organizmach (CO, CO₂, NO).
:::

## A | Dodatek A — tlenki w organizmach [[extra:AMBITNE]] {#organizmy}

::: karta extra
### CO₂ — dwutlenek węgla

- Produkt oddychania komórkowego: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O.
- Transport w krwi głównie jako jon HCO₃⁻ (wodorowęglan).
- Reguluje pH krwi — układ buforowy H₂CO₃/HCO₃⁻.

### H₂O — woda

- Produkt oddychania komórkowego.
- Substrat fotosyntezy: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.

### CO — tlenek węgla(II) — trucizna

Trucizna wiążąca hemoglobinę — źródła, objawy, profilaktyka i pierwsza pomoc w [§12](#bezpieczenstwo).

### NO — tlenek azotu(II) — sygnał biologiczny

- **Biologiczny czynnik sygnałowy** — bierze udział m.in. w rozszerzaniu naczyń krwionośnych. W szkolnym uproszczeniu bywa nazywany neuroprzekaźnikiem.
- Nitrogliceryna działa przez uwolnienie NO.
- W 1998 r. Nagroda Nobla za odkrycie roli NO w organizmie.

### N₂O — tlenek azotu(I)

- „Gaz rozweselający” — stosowany w znieczuleniu.
- Silny gaz cieplarniany — [§12](#bezpieczenstwo).
:::

## B | Dodatek B — korozja i pasywacja [[extra:AMBITNE]] {#dod-f}

::: karta extra
### Korozja żelaza [[basic:E8]]

**Korozja** — niszczenie metalu w wyniku reakcji chemicznych z otoczeniem.

**Rdza (przybliżenie):**

$$ 4 Fe + 3 O₂ + n H₂O → 2 Fe₂O₃·nH₂O

> **Ograniczenie modelu:** rdza nie ma jednego, ściśle określonego wzoru; powyższy zapis jest jedynie przybliżeniem jednego z możliwych składników produktów korozji.

> Rdza **nie jest czystym Fe₂O₃** — mieszanina uwodnionych tlenków i wodorotlenków żelaza.

**Czynniki przyspieszające korozję:** wilgoć, tlen, sole (np. sól drogowa), kwasy.

> Rdza jest porowata i odpada płatami, więc nie chroni żelaza — korozja postępuje w głąb metalu.

### Pasywacja

**Pasywacja** — tworzenie się szczelnej warstwy tlenku chroniącej metal przed dalszą korozją. Cienka, szczelna warstwa tlenku chroni metal:

- Al₂O₃ na powierzchni aluminium,
- na cynku: mieszanina produktów korozji, m.in. ZnO, Zn(OH)₂ i zasadowych węglanów cynku — nie sam „czysty ZnO”,
- patyna na miedzi (Cu₂(OH)₂CO₃).

**Metale pasywujące się:** Al, Zn, Cr, Ti.

### Ochrona przed korozją

- powłoki malarskie,
- powłoki metaliczne (cynkowanie, chromowanie),
- inhibitory korozji,
- ochrona katodowa.
:::

## C | Dodatek C — historia odkrycia tlenków [[extra:AMBITNE]] {#historia}

::: karta understand
::: div {style="display:grid;gap:10px;"}
<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1772 — Carl Wilhelm Scheele</strong><br/>Otrzymuje tlen („ogień powietrzny”) przez prażenie HgO (oraz m.in. KNO₃ i MnO₂ z kwasem siarkowym).</div>

<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1774 — Joseph Priestley</strong><br/>Niezależnie otrzymuje tlen przez rozkład HgO.</div>

<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1777 — Antoine Lavoisier</strong><br/>Teoria spalania: substancje łączą się z tlenem, tworząc tlenki. Obala teorię flogistonu.</div>

<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1787 — Guyton de Morveau, Lavoisier i współpracownicy</strong><br/>Systematyczne nazewnictwo chemiczne — wprowadzenie nazwy „tlenek” (fr. <em>oxyde</em>) dla związków pierwiastków z tlenem.</div>

<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1811 — Amedeo Avogadro</strong><br/>Teoria cząsteczek — wyjaśnia wzory tlenków (H₂O, CO₂).</div>

<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1813 — Jöns Jacob Berzelius</strong><br/>Nowoczesne symbole pierwiastków i zapis wzorów (także tlenków metali i niemetali).</div>

<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>XIX w.</strong><br/>Metalurgia: tlenki jako rudy metali (hematyt, magnetyt).</div>

<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>XX w.</strong><br/>Tlenki w technologii: TiO₂ (pigment), ZnO (elektronika), Al₂O₃ (aluminium).</div>

<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>XXI w.</strong><br/>Tlenki w nanotechnologii, fotokatalizie, ogniwach paliwowych.</div>
:::
:::

## D | Dodatek D — tlenki w technologii XXI w. [[extra:AMBITNE]] {#dod-i}

::: adv | Tlenki w technologii XXI w. — fotokataliza, elektronika, nadprzewodniki, ogniwa SOFC, nanocząstki | poza programem szkoły — ciekawostka akademicka
::: karta extra
### TiO₂ — fotokataliza

Dwutlenek tytanu pod wpływem światła UV rozkłada zanieczyszczenia organiczne. Stosowany w samoczyszczących się powierzchniach, farbach, cementach.

### ZnO — elektronika

Półprzewodnik szerokopasmowy — stosowany w diodach, sensorach gazów, przezroczystych elektrodach.

### Al₂O₃ — ceramika techniczna

Aluminium, ścierniwo, ceramika ogniotrwała, podłoża układów scalonych.

### YBa₂Cu₃O₇ — nadprzewodnik wysokotemperaturowy

Tlenek itru, baru i miedzi — pierwszy nadprzewodnik powyżej temperatury wrzenia ciekłego azotu (77 K) — odkryty w 1987 r. Nagrodę Nobla 1987 otrzymali Bednorz i Müller za odkrycie nadprzewodnictwa w ceramice tlenkowej La–Ba–Cu–O (1986).

### Ogniwa paliwowe

Tlenki ceramiczne (np. ZrO₂ domieszkowany Y₂O₃) jako elektrolity w ogniwach paliwowych SOFC.

### Tlenki w nanotechnologii

Nanocząstki tlenków (TiO₂, ZnO, SiO₂) — katalizatory, sensory, nośniki leków.
:::
:::

## E | Dodatek E — mosty do kolejnych lekcji {#dod-h}

::: karta understand
> Wiadomości wcześniejsze (F01–F09) — [§3](#kompas).

### N02 — wodorotlenki

- CaO + H₂O → Ca(OH)₂.
- Tlenki zasadowe + H₂O → wodorotlenki.
- Amfoteryczne wodorotlenki Al(OH)₃, Zn(OH)₂ — jak Al₂O₃ i ZnO.

### N03 — kwasy

- SO₃ + H₂O → H₂SO₄.
- Tlenki kwasowe + H₂O → kwasy.
- Zobojętnianie kwasu zasadą (H⁺ + OH⁻ → H₂O).

### N04 — sole

- Tlenek + kwas → sól + woda.
- Tlenek + zasada → sól + woda.
- Tlenek zasadowy + tlenek kwasowy → sól.

### R05–R08 — stechiometria

- Obliczenia z równań reakcji tlenków ([§20](#stechio)).

### X01–X10 — redoks

- Utlenianie tlenków (2 SO₂ + O₂ → 2 SO₃).
- Redukcja tlenków (CuO + H₂ → Cu + H₂O).
- Stopnie utlenienia w tlenkach ([§5](#builder)); redoks z udziałem tlenków ([§19](#redukcja)).

### L013 — zaawansowana

- VSEPR pełne, hybrydyzacja sp/sp²/sp³.

> Lekcje N03 Kwasy i N04 Sole są w panelu Lekcje → Chemia.
:::

## ↻ | Modele silnika w tej lekcji {#wiz-reg-l002}

::: div.table-wrap
<table><thead><tr><th>Sekcja</th><th>Model</th><th>Co pokazuje</th></tr></thead><tbody><tr><td><a href="#charakter">§6</a></td><td><code>n01-tlenki-v01</code></td><td>trzy pytania o tlenek, zlewka ze wskaźnikiem</td></tr><tr><td><a href="#charakter">§6</a></td><td><code>periodic-54</code></td><td>pierwiastek → tlenek → charakter</td></tr><tr><td><a href="#builder">§5</a></td><td><code>n01-konstruktor-v01</code></td><td>W–K–S–K, stopnie utlenienia, sprawdzanie wzoru</td></tr><tr><td><a href="#otrzymywanie">§9</a></td><td><code>n01-spalanie-v01</code></td><td>spalanie całkowite i niecałkowite</td></tr><tr><td><a href="#reakcje">§10</a></td><td><code>n01-reaktor-v01</code></td><td>przewidywanie produktów</td></tr><tr><td><a href="#reakcje">§10</a></td><td><code>chain-scn</code></td><td>łańcuchy przemian</td></tr><tr><td><a href="#trend">§14</a></td><td><code>n01-trend-v01</code></td><td>trend charakteru (okres, stopień utlenienia)</td></tr><tr><td><a href="#vsepr">§18</a></td><td><code>molecule3d-merged</code></td><td>geometria cząsteczek (VSEPR)</td></tr><tr><td><a href="#stechio">§20</a></td><td><code>stech-kalkulator-v01</code></td><td>obliczenia stechiometryczne</td></tr><tr><td><a href="#doswiadczenia">§21</a></td><td><code>n01-doswiadczenia-v01</code></td><td>pracownia doświadczeń</td></tr><tr><td><a href="#doswiadczenia">§21</a></td><td><code>gfx-scene-carbonate</code></td><td>wykrywanie CO₂</td></tr></tbody></table>
:::

> Stare widgety wbudowane w HTML (Detektor, Konstruktor, VSEPR, mini-układ, symulatory, galeria, kalkulatory) zastąpiono modelami silnika — jedno źródło danych dla lekcji, Atlasu i katalogu wizualizacji.

## ✓ | Audyt jakości [[exam:KONTROLA]] {#audyt}

::: karta new | v6.0 CHE (2026-10) — integracja z silnikiem
- Widgety → modele silnika (tabela powyżej); galeria barw z CHE.DATA.OXIDES (audyt LES-N01).
- Poprawki: nazwa P₄O₁₀ (dekatlenek tetrafosforu), MgO vs CaO (energia sieci, warstwa Mg(OH)₂), model wiązania w dodatku A, ZnO + NaOH w roztworze → Na₂[Zn(OH)₄], Nobel 1987 (La–Ba–Cu–O), eskolait, kody lekcji (N01, N02, N03, N04).
- Korekta MASTER v5.9 włączona jako §4c (po modelu decyzyjnym).
- v6.2 (2026-10-07) — redakcja wg STANDARD_LEKCJI: kolejność rdzeń → rozumienie/ambitne → praktyka → powtórka → dodatki; scalone powtórzenia (trzy pytania, tabele charakteru i wody, MgO/SiO₂, CO/CO₂, BHP/czad, smog, kwaśne deszcze, korozja, nadtlenki, P₄O₁₀, amfoteryczność, obserwacja/wniosek, karty powtórzeniowe); zastosowania przeniesione do rdzenia; uzupełnienia (stan skupienia, trend w grupie i wg stopnia utlenienia, przebieg doświadczeń, ograniczanie emisji, przykład stechiometrii spalania); poprawki (odwołania §, poziom doświadczenia 4, Berzelius/1787).
:::

::: details | Wcześniejsze wersje i audyty (dla autora)
::: div.audit-panel
#### Audyt merytoryczny i funkcjonalny v5.9 MASTER LAB

::: div.audit-grid
<div class="audit-item"><strong>Spójność z N02:</strong> ten sam layout, te same karty (basic / understand / warning / error / extra / new / exam), te same oznaczenia warstw, ta sama nawigacja (TOC, FAB, bottom-nav), te same fiszki i quiz.</div>

<div class="audit-item"><strong>Widgety:</strong> Konstruktor wzorów tlenków, Detektor charakteru (18 tlenków), Miniaturowy układ okresowy, Modele VSEPR (6 cząsteczek), Symulator spalania (3 paliwa), Reaktor reakcji (~35 par), Mapa reakcji (3 ścieżki), Animacja „Tlenek w wodzie” (4 tryby), Wykrywacz CO₂, Wykres trendu charakteru, Kalkulator stopni utlenienia, Kalkulator stechiometrii, Stechiometria spalania, Test adaptacyjny.</div>

<div class="audit-item"><strong>Mosty dwukierunkowe:</strong> linki do Konstruktora Uniwersalnego, F01–F09 (fundamenty), N02. Bridge sekcja w treści.</div>

<div class="audit-item"><strong>Dodatki A–I:</strong> konfiguracje elektronowe, trend w okresie, przemysł, BHP, stechiometria, korozja, środowisko, mosty, technologia XXI wieku.</div>

<div class="audit-item"><strong>Sekcje nowe v4.0:</strong> VSEPR, Miniaturowy układ okresowy, Mapa reakcji, Trend charakteru, Kolory i nazwy zwyczajowe, Tlenki mieszane, Stopnie utlenienia, Tlenki w organizmach, Bezpieczeństwo, Historia, Redukcja tlenków, Termiczny rozkład, Typologia zadań E8, Test adaptacyjny, Karta szybkiego powtórzenia.</div>

<div class="audit-item"><strong>Tryb ciemny:</strong> przycisk w nagłówku, localStorage. <strong>Skip link, ARIA, focus states, print CSS.</strong></div>

<div class="audit-item"><strong>v5.7 — korekta modelu:</strong> uszczelniono rozróżnienie charakteru tlenku, reakcji z wodą i rozpuszczalności oraz złagodzono skrót „metal = jonowy / niemetal = kowalencyjny”.</div>

<div class="audit-item"><strong>v5.7 — procedura:</strong> dodano model decyzyjny i mikrokroki W–K–S–K: dane → stopień utlenienia → O²⁻ → indeksy → skrócenie → kontrola ładunku → kontrola chemiczna.</div>

<div class="audit-item"><strong>v5.7 — struktura:</strong> naprawiono uszkodzone znaczniki sekcji/div z wcześniejszych przebiegów bez usuwania treści merytorycznej.</div>

<div class="audit-item"><strong>v5.7 — reuse:</strong> dodano trwały rejestr istniejących wizualizacji, animacji i kalkulatorów z ID, funkcją, poziomem i oceną ponownego użycia.</div>

<div class="audit-item"><strong>v5.9 — N01 korekta:</strong> doprecyzowano nadtlenki, ponadtlenki, P₂O₅/P₄O₁₀, SiO₂, MgO, ograniczenia VSEPR, NO₂, Al₂O₃ w roztworze oraz model CO/CO₂.</div>

<div class="audit-item"><strong>v5.9 — LAB:</strong> dodano interaktywny komponent <code>obsInferenceLab</code> do rozdzielania obserwacji, wniosku i równania.</div>
:::

<p style="margin-top:14px;"><strong>Zachowana cała treść merytoryczna v3.3 + 15 nowych sekcji merytorycznych + 6 nowych widgetów.</strong></p>

**Numer:** to jest **N01** (tlenki). Następna: N02 Wodorotlenki i zasady.
:::
:::

::: skrypt
/* ==== Test adaptacyjny ==== */
(function(){
  const pool=document.getElementById('adaptPool'),wrap=document.getElementById('adaptQuiz');
  const BANKS={
    A:[
      {q:'Wzór tlenku sodu?',opts:['NaO','Na₂O','NaO₂','Na₂O₂'],ok:1,fb:'Na(I) + O(II) → Na₂O.'},
      {q:'CaO + H₂O → ?',opts:['CaO₂','Ca(OH)₂','CaH₂','Ca + H₂O₂'],ok:1,fb:'Tlenek zasadowy + woda → wodorotlenek.'},
      {q:'Charakter CO₂?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:1,fb:'Niemetal → kwasowy.'},
      {q:'Nazwa Fe₂O₃?',opts:['tlenek żelaza','tlenek żelaza(II)','tlenek żelaza(III)','tlenek żelazowy'],ok:2,fb:'Fe na +III.'},
      {q:'Wykrywanie CO₂?',opts:['woda bromowa','woda wapienna','fenoloftaleina','papierek'],ok:1,fb:'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O.'}
    ],
    B:[
      {q:'SO₃ + H₂O → ?',opts:['H₂SO₃','H₂SO₄','H₂S','SO₂'],ok:1,fb:'SO₃ to S(VI).'},
      {q:'MgO + H₂O w szkole:',opts:['gwałtownie','praktycznie nie','daje MgO₂','wybucha'],ok:1,fb:'Bardzo słabo.'},
      {q:'Nazwa Cu₂O?',opts:['tlenek miedzi','tlenek miedzi(II)','tlenek miedzi(I)','tlenek dwumiedzi'],ok:2,fb:'Cyfra rzymska obowiązkowa.'},
      {q:'Popraw FeO₃.',opts:['Fe₃O₂','Fe₂O₃','FeO','Fe₂O'],ok:1,fb:'W–K–S–K: 2·III = 3·II.'},
      {q:'Kolor CuO?',opts:['biały','czerwony','czarny','zielony'],ok:2,fb:'CuO — czarny.'}
    ],
    C:[
      {q:'Charakter Al₂O₃?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:3,fb:'Amfoteryczny.'},
      {q:'P₂O₅ — jaka jest cząsteczka?',opts:['PO₂','P₂O₃','P₄O₁₀','P₄O₆'],ok:2,fb:'Empiryczny P₂O₅; cząsteczka P₄O₁₀.'},
      {q:'SO₂ — geometria?',opts:['liniowa','kątowa','trygonalna','tetraedryczna'],ok:1,fb:'AX₂E — kątowa.'},
      {q:'Redukcja Fe₂O₃ węglem?',opts:['Fe₂O₃ + C → Fe + CO','2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂','Fe₂O₃ + 3 C → 2 Fe + 3 CO','4 Fe₂O₃ + 3 C → 8 Fe + 3 CO₂'],ok:1,fb:'Klasyczna redukcja metalurgiczna.'},
      {q:'Fe₃O₄ — co to?',opts:['tlenek żelaza(III)','tlenek mieszany Fe(II,III)','tlenek żelaza(II)','wodorotlenek żelaza'],ok:1,fb:'FeO·Fe₂O₃.'}
    ]
  };
  function renderBank(lvl){
    const qs=BANKS[lvl];let answered=0,correct=0;
    wrap.innerHTML='';
    qs.forEach((item,qi)=>{
      const d=document.createElement('div');d.className='quiz-q';
      d.innerHTML='<h5>'+(qi+1)+'. '+item.q+'</h5><div class="quiz-opts"></div><div class="quiz-fb" id="aq'+lvl+qi+'"></div>';
      const opts=d.querySelector('.quiz-opts');
      item.opts.forEach((o,oi)=>{
        const b=document.createElement('button');b.type='button';b.className='quiz-opt';b.textContent=o;
        b.addEventListener('click',()=>{
          if(d.dataset.done)return;d.dataset.done='1';answered++;
          opts.querySelectorAll('.quiz-opt').forEach((x,j)=>{x.disabled=true;if(j===item.ok)x.classList.add('correct');});
          const fb=document.getElementById('aq'+lvl+qi);
          if(oi===item.ok){correct++;b.classList.add('correct');fb.className='quiz-fb show ok';fb.textContent='✓ '+item.fb;}
          else{b.classList.add('wrong');fb.className='quiz-fb show bad';fb.textContent='✕ '+item.fb;}
          if(answered===qs.length){
            const sc=document.createElement('div');sc.style='text-align:center;padding:14px;background:var(--surface-soft);border-radius:var(--r-md);margin-top:12px;font-weight:800;color:var(--accent);';
            sc.textContent='Wynik poziomu '+lvl+': '+correct+' / '+qs.length+' ('+Math.round(100*correct/qs.length)+'%)';
            wrap.appendChild(sc);
          }
        });
        opts.appendChild(b);
      });
      wrap.appendChild(d);
    });
  }
  pool.querySelectorAll('button').forEach(b=>{
    b.addEventListener('click',()=>{
      pool.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');renderBank(b.dataset.lvl);
    });
  });
  renderBank('A');
})();
:::

::: skrypt
/* ==== Quiz główny ==== */
(function(){
  const wrap=document.getElementById('quizWrap'),scoreEl=document.getElementById('quizScore');
  const Q=[
    {q:'Wzór tlenku żelaza(III)?',opts:['FeO₃','Fe₂O₃','FeO','Fe₃O₂'],ok:1,fb:'W–K–S–K: Fe(III), O(II) → Fe₂O₃.'},
    {q:'Charakter CO₂?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:1,fb:'Niemetal → kwasowy.'},
    {q:'CaO + H₂O → ?',opts:['CaO₂','Ca(OH)₂','2 CaOH','Ca + H₂O₂'],ok:1,fb:'Tlenek zasadowy + woda → wodorotlenek.'},
    {q:'CO (szkolnie) to tlenek:',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:2,fb:'CO, NO, N₂O — obojętne.'},
    {q:'SO₃ + H₂O → ?',opts:['H₂SO₃','H₂SO₄','SO₂ + H₂','H₂S'],ok:1,fb:'SO₃ to S(VI) → H₂SO₄.'},
    {q:'MgO + H₂O w szkole:',opts:['gwałtownie jak CaO','praktycznie nie','daje MgO₂','wybucha'],ok:1,fb:'MgO reaguje z wodą bardzo słabo.'},
    {q:'Nazwa Cu₂O?',opts:['tlenek miedzi','tlenek miedzi(II)','tlenek miedzi(I)','tlenek dwumiedzi'],ok:2,fb:'Cyfra rzymska obowiązkowa.'},
    {q:'Al₂O₃ reaguje z HCl i NaOH. Charakter?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:3,fb:'Amfoteryczny.'},
    {q:'Mn₂O₇ — charakter?',opts:['zasadowy','kwasowy','obojętny','amfoteryczny'],ok:1,fb:'Wyjątek: metal na +VII → kwasowy.'},
    {q:'P₂O₅ — rzeczywista cząsteczka?',opts:['PO₂','P₂O₃','P₄O₁₀','P₄O₆'],ok:2,fb:'P₂O₅ empiryczny; P₄O₁₀ cząsteczka.'},
    {q:'Wykrywanie CO₂?',opts:['woda bromowa','woda wapienna (mętnienie)','papierek uniwersalny','fenoloftaleina'],ok:1,fb:'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O.'},
    {q:'CO₂ + NaOH (nadmiar zasady) → ?',opts:['NaHCO₃','Na₂CO₃ + H₂O','Na₂O + C','CO + NaOH'],ok:1,fb:'Nadmiar zasady → węglan.'},
    {q:'Kolor Fe₂O₃?',opts:['biały','czarny','rdzawy','zielony'],ok:2,fb:'Rdzawy (czerwono-brunatny).'},
    {q:'OF₂ — to:',opts:['tlenek','fluorek tlenu','wodorek','nadtlenek'],ok:1,fb:'Fluor elektroujemniejszy niż tlen.'},
    {q:'Redukcja CuO wodorem?',opts:['CuO + H₂ → Cu + H₂O','CuO + H₂ → CuH₂ + O','CuO + H₂ → Cu₂O','nie zachodzi'],ok:0,fb:'Klasyczna redukcja wodorem.'}
  ];
  let answered=0,correct=0;
  Q.forEach((item,qi)=>{
    const d=document.createElement('div');d.className='quiz-q';
    d.innerHTML='<h5>'+(qi+1)+'. '+item.q+'</h5><div class="quiz-opts"></div><div class="quiz-fb" id="qfb'+qi+'"></div>';
    const opts=d.querySelector('.quiz-opts');
    item.opts.forEach((o,oi)=>{
      const b=document.createElement('button');b.type='button';b.className='quiz-opt';b.textContent=o;
      b.addEventListener('click',()=>{
        if(d.dataset.done)return;d.dataset.done='1';answered++;
        opts.querySelectorAll('.quiz-opt').forEach((x,j)=>{x.disabled=true;if(j===item.ok)x.classList.add('correct');});
        const fb=document.getElementById('qfb'+qi);
        if(oi===item.ok){correct++;b.classList.add('correct');fb.className='quiz-fb show ok';fb.textContent='✓ '+item.fb;}
        else{b.classList.add('wrong');fb.className='quiz-fb show bad';fb.textContent='✕ '+item.fb;}
        if(answered===Q.length){scoreEl.className='quiz-score show';scoreEl.textContent='Wynik: '+correct+' / '+Q.length+' ('+Math.round(100*correct/Q.length)+'%).';}
      });
      opts.appendChild(b);
    });
    wrap.appendChild(d);
  });
})();
:::

::: styl
button:focus-visible,a:focus-visible,.cation-btn:focus-visible,.bld-pool button:focus-visible{outline:3px solid var(--accent);outline-offset:2px;}
.stage-box{background:var(--surface-soft);border:1px solid var(--border);border-radius:var(--r-md);padding:14px;min-height:140px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;}
.char-table td:first-child{font-family:'JetBrains Mono',monospace;font-weight:800;color:var(--accent-dark);}
} .print-card{background:#fff;border:1px solid var(--border);border-radius:var(--r-md);padding:18px;margin:14px 0;}
.print-card h4{margin:0 0 10px;color:var(--accent);}
.print-card .pc-grid{display:grid;grid-template-columns:1fr;gap:10px;}
@media(min-width:600px){.print-card .pc-grid{grid-template-columns:1fr 1fr;}}
.print-card .pc-box{background:var(--surface-soft);border-radius:var(--r-sm);padding:10px 12px;font-size:12.5px;line-height:1.55;}
.print-card .pc-box b{display:block;color:var(--accent);margin-bottom:4px;font-size:11px;text-transform:uppercase;letter-spacing:0.4px;}
.ox-tile{border-radius:12px;padding:14px 10px;text-align:center;cursor:pointer;border:2px solid rgba(0,0,0,0.08);font:inherit;transition:transform .15s,box-shadow .15s;min-height:88px;}
.ox-tile:hover{transform:translateY(-2px);box-shadow:var(--sh-md);}
.ox-tile.active{outline:2px solid var(--accent);outline-offset:2px;}
.sol-good{background:#dcfce7!important;}
details.answer.interleaving{margin:12px 0;border:1px dashed var(--border-strong);border-radius:10px;padding:4px 10px;background:var(--surface-soft);}
details.answer.interleaving summary{cursor:pointer;font-weight:700;color:var(--accent);}
@media (max-width:600px){.table-wrap table.mobile-stack thead{display:none}.table-wrap table.mobile-stack tr{display:block;margin-bottom:10px;border:1px solid var(--border);border-radius:8px;padding:8px}.table-wrap table.mobile-stack td{display:block;border:none;padding:4px 8px}.table-wrap table.mobile-stack td::before{content:attr(data-label) ": ";font-weight:700;color:var(--text-muted);font-size:11px}}
.dont-confuse{border:1px solid #cbd5e1;border-radius:14px;padding:14px;margin:12px 0;background:#f8fafc}
.dont-confuse h4{margin:0 0 10px}
.confuse-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}
.confuse-grid>div{border:1px solid #dbe3ec;border-radius:10px;padding:10px;background:#fff}
.confuse-grid p{margin:5px 0 0;font-size:.92em}
.rxn-cond{font-weight:800;padding:0 3px}
.mm{font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;gap:10px}
.mm-root{background:#0d6868;color:#fff;font-weight:800;border-radius:12px;padding:10px 28px;letter-spacing:.06em}
.mm-formula{font-family:inherit;border:2px solid #b06f1c;background:#fcf4e6;color:#7a4510;border-radius:10px;padding:8px 16px;text-align:center;font-weight:700;font-size:13px}
.mm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;width:100%}
.mm-box{display:block;text-align:left;font-family:inherit;border:2px solid var(--mm);border-radius:10px;padding:8px 12px;text-decoration:none;color:inherit;background:#fff}
.mm-box:hover{background:#f8fafc}
.mm-box b{color:var(--mm);font-size:12px;letter-spacing:.08em}
.mm-box ul{margin:6px 0 0 16px;padding:0;font-size:13px}
.mm-foot{font-family:inherit;background:#1a2332;color:#fff;border-radius:10px;padding:8px 16px;font-size:13px}
.merge-h{margin:18px 0 8px}
.ox-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:8px 0}
.ox-tile{display:flex;flex-direction:column;gap:2px;padding:8px 10px;border:1px solid var(--border,#e5e9ee);border-radius:10px;background:var(--surface,#fff)}
.ox-tile b{font:800 15px/1.2 inherit}
.ox-tile small{color:var(--text-soft,#4a5568);font-size:12px}
.ox-sw{display:block;height:22px;border-radius:6px;border:1px solid rgba(0,0,0,.15);margin-bottom:4px}
:::
