---
kod: FIZ-01
uid: 
tytul: Elektrostatyka
opis: 
kicker: FIZ-01 · FIZYKA · MASTER LAB v1.4
lead: Ładunek i jego budowa atomowa, elektryzowanie (tarcie, dotyk, indukcja), oddziaływanie ładunków, przewodniki i izolatory, elektroskop, uziemienie i zastosowania; dla chętnych i LO: prawo Coulomba, pole elektryczne. Animacje i liczby z silnika CHE.FIZ.ELEKTRO.
plakietki: [[basic:E8]][[understand:ROZUMIENIE]][[extra:E8+ / LO]]
stopka: 
---
::: minimum | Muszę umieć na E8 — 10 faktów
1. Atom ma **protony (+)** w jądrze i **elektrony (−)** wokół jądra. Ciało **obojętne** ma ich tyle samo.
2. Ciało **naelektryzowane ujemnie** ma **nadmiar elektronów**, dodatnio — **niedobór elektronów**. Przemieszczają się tylko elektrony.
3. Ładunek jest wielokrotnością **ładunku elementarnego** e ≈ <span data-fiz="e">1,6·10⁻¹⁹ C</span>; jednostka ładunku — **kulomb (1 C)**.
4. Elektryzowanie: przez **tarcie**, przez **dotyk**, przez **indukcję (wpływ)**.
5. **Zasada zachowania ładunku**: w układzie izolowanym suma ładunków się nie zmienia — ładunek tylko się przemieszcza.
6. Ładunki **jednoimienne się odpychają**, **różnoimienne przyciągają**; ciało naelektryzowane przyciąga też lekkie ciała obojętne.
7. Siła oddziaływania rośnie z ładunkami, maleje z odległością (2× dalej → 4× słabiej).
8. **Przewodniki** (metale, grafit, roztwory jonów, ciało człowieka) mają swobodne nośniki ładunku; **izolatory** (szkło, guma, plastik, suche powietrze) — nie.
9. **Elektroskop**: listki naładowane jednoimiennie odpychają się — im większy ładunek, tym większe wychylenie. Nie pokazuje znaku ładunku.
10. **Uziemienie** odprowadza ładunek do ziemi; zastosowania: piorunochron, uziemienie cystern i stacji paliw, opaska antystatyczna.
:::

## 0a | Diagnoza startowa — sprawdź się, zanim zaczniesz {#s0a}

::: karta basic | 5 pytań (odpowiedzi ukryte)
1. Z jakich cząstek zbudowany jest atom i jaki mają ładunek?
2. Co się dzieje z włosami po zdjęciu wełnianej czapki zimą — i dlaczego?
3. Czy metalowa łyżka przewodzi prąd? A plastikowa?
4. Dlaczego pracownik stacji paliw nie powinien chodzić w syntetycznym polarze?
5. Magnes przyciąga żelazo. Czy to oddziaływanie elektrostatyczne?

::: odp | Pokaż odpowiedzi
1. Protony (+) i neutrony (0) w jądrze, elektrony (−) wokół jądra.
2. Włosy elektryzują się przez tarcie jednoimiennie i odpychają — „stają dęba”.
3. Metalowa — tak (elektrony swobodne); plastikowa — nie (izolator).
4. Tarcie elektryzuje ubranie; iskra wyładowania może zapalić opary paliwa.
5. Nie — to magnetyzm (inna lekcja fizyki); żelazo nie musi być naelektryzowane.
:::

> Jeśli pomyliłeś 1 lub 3 — zacznij od rozdziałów 1 i 4. Pytanie 5 to częsta pułapka: magnetyzm ≠ elektrostatyka.
:::

## 0 | Wzory, definicje i mnemotechniki — ściąga [[basic:E8]] [[extra:LO]] {#s0}

::: karta core | Wzory (z jednostkami)
::: div.table-wrap
<table><thead><tr><th>Wielkość</th><th>Wzór</th><th>Jednostka</th><th>Kiedy używać</th></tr></thead><tbody><tr><td>ładunek ciała</td><td>q = n · e</td><td>C (kulomb)</td><td>n — liczba nadmiarowych (−) lub brakujących (+) elektronów</td></tr><tr><td>liczba elektronów</td><td>n = q / e</td><td>—</td><td>ile elektronów przeszło</td></tr><tr><td>dotyk 2 identycznych kul</td><td>q′ = (q₁ + q₂) / 2</td><td>C</td><td>zasada zachowania ładunku</td></tr><tr><td>prawo Coulomba (E8+)</td><td>F = k · |q₁ · q₂| / r²</td><td>N</td><td>siła między ładunkami punktowymi</td></tr><tr><td>w ośrodku (LO)</td><td>F = k · |q₁q₂| / (εr · r²)</td><td>N</td><td>woda: εr ≈ 80</td></tr><tr><td>natężenie pola (LO)</td><td>E = F / q ;  E = k · Q / r²</td><td>N/C = V/m</td><td>pole ładunku punktowego</td></tr><tr><td>napięcie (LO)</td><td>U = W / q</td><td>V = J/C</td><td>praca przy przenoszeniu ładunku</td></tr><tr><td>pojemność (LO)</td><td>C = Q / U</td><td>F (farad)</td><td>kondensator</td></tr></tbody></table>
:::

> Stałe z silnika: e = <span data-fiz="e">1,602·10⁻¹⁹ C</span> · k = <span data-fiz="k">8,99·10⁹ N·m²/C²</span> · 1 C ≈ 6,24·10¹⁸ e · przedrostki: 1 mC = 10⁻³ C, 1 µC = 10⁻⁶ C, 1 nC = 10⁻⁹ C.
:::

::: karta basic | Definicje jednym zdaniem
::: slownik
Ładunek elektryczny :: właściwość cząstek (protonów +, elektronów −) odpowiedzialna za oddziaływania elektryczne; jednostka 1 C.
Elektryzowanie :: nadawanie ciału ładunku przez przemieszczenie elektronów (tarcie, dotyk, indukcja).
Przewodnik :: ciało, w którym ładunki mogą się swobodnie przemieszczać (elektrony swobodne lub jony).
Izolator :: ciało, w którym ładunki praktycznie nie mogą się przemieszczać.
Zasada zachowania ładunku :: w układzie izolowanym całkowity ładunek nie zmienia się.
Indukcja elektrostatyczna :: rozdzielenie ładunków w przewodniku pod wpływem zbliżonego (niedotykającego) ciała naelektryzowanego.
Uziemienie :: połączenie ciała z ziemią przewodnikiem — umożliwia odpływ lub dopływ elektronów.
Pole elektryczne :: przestrzeń wokół ładunku, w której na inne ładunki działa siła elektryczna.
:::
:::

::: karta understand | Mnemotechniki
- <b>„Plus to brak”</b> — ciało dodatnie <b>nie dostało protonów</b>, tylko <b>straciło elektrony</b>. Przemieszczają się tylko elektrony.
- <b>„Jednakowi się nie lubią”</b> — ładunki jednoimienne się odpychają, różnoimienne przyciągają.
- <b>„Szkło w jedwabiu — plus, ebonit w suknie — minus”</b>: szkło + jedwab → szkło (+); ebonit + sukno → ebonit (−).
- <b>„Dwa razy dalej — cztery razy słabiej”</b> (siła ∝ 1/r²): 3× dalej → 9× słabiej.
- <b>„Listki mówią ILE, nie JAKI”</b> — elektroskop pokazuje wielkość ładunku, nie znak.
- <b>Indukcja — 4 kroki „ZUZO”</b>: <b>Z</b>bliż pręt → <b>U</b>ziem → <b>Z</b>abierz palec → <b>O</b>ddal pręt ⇒ ładunek przeciwny do pręta.
- <b>„Ostrze zbiera”</b> — na ostrzach przewodnika gromadzi się najwięcej ładunku (piorunochron).
:::

## 1 | Ładunek elektryczny — skąd się bierze {#s1}

::: karta core | Budowa atomu a ładunek
Każdy atom zawiera dodatnie **protony** (w jądrze) i ujemne **elektrony** (w chmurze elektronowej). Ich ładunki są równe co do wartości i przeciwne co do znaku. Atom ma tyle samo protonów i elektronów — jest **obojętny**.

Protony są w jądrze uwięzione, elektrony zewnętrzne łatwo się odrywają. Dlatego **przy elektryzowaniu przemieszczają się wyłącznie elektrony**.

::: div.table-wrap
<table><thead><tr><th>Ciało</th><th>Elektrony vs protony</th><th>Ładunek</th></tr></thead><tbody><tr><td>obojętne</td><td>tyle samo</td><td>0</td></tr><tr><td>naelektryzowane ujemnie</td><td>nadmiar elektronów</td><td>−</td></tr><tr><td>naelektryzowane dodatnio</td><td>niedobór elektronów</td><td>+</td></tr></tbody></table>
:::
:::

::: karta basic | Ładunek elementarny i kulomb
Najmniejszy swobodny ładunek to **ładunek elementarny**: e = <span data-fiz="e">1,602·10⁻¹⁹ C</span>. Elektron ma ładunek −e, proton +e. Każdy ładunek ciała jest jego wielokrotnością:

$$ q = n · e

1 kulomb to ładunek ok. **6,24·10¹⁸** elektronów. To dużo — przy pocieraniu balonu przenosimy zwykle nanokulomby (10⁻⁹ C), czyli miliardy elektronów.

> Masa elektronu: m<sub>e</sub> = <span data-fiz="me">9,11·10⁻³¹ kg</span> — ok. 1836 razy mniej niż protonu.
:::

::: karta new | Most do chemii
**Jon** to atom (lub grupa atomów), który oddał lub przyjął elektrony: Na → Na⁺ + e⁻, Cl + e⁻ → Cl⁻. Ten sam mechanizm co przy elektryzowaniu — tylko na poziomie pojedynczych atomów. Atomy pierwiastków o dużej **elektroujemności** (Cl, O, F) chętnie przyjmują elektrony.
:::

@model kw-dysocjacja-v01 | Chemia: jony w roztworze — przeniesienie protonu H⁺ | Lekcja Kwasy · ten sam silnik

## 2 | Elektryzowanie przez tarcie {#s2}

::: karta core | Na czym polega
Przy pocieraniu dwóch ciał z różnych materiałów elektrony przechodzą z jednego na drugie. Ciało, które **oddało** elektrony, ładuje się **dodatnio**, ciało, które je **przyjęło** — **ujemnie**. Oba ładunki są równe co do wartości (zasada zachowania ładunku).

::: ul
<li data-fiz-tribo="szklo&gt;jedwab">szkło pocierane <strong>jedwabiem</strong> → szkło <strong>+</strong>, jedwab −</li>

<li data-fiz-tribo="welna&gt;ebonit">ebonit (twarda guma) pocierany <strong>suknem</strong> → ebonit <strong>−</strong>, sukno +</li>

<li data-fiz-tribo="wlosy&gt;balon">balon pocierany o <strong>włosy</strong> → balon <strong>−</strong>, włosy + (dlatego się „stawiają” — odpychają się jednoimiennie)</li>
:::
:::

::: karta understand | Szereg tryboelektryczny (z silnika CHE.FIZ.ELEKTRO)
Materiał stojący **wcześniej** oddaje elektrony materiałowi stojącemu **dalej**:

<p style="line-height:1.9">(+) <span>skóra (sucha)</span> &gt; <span>futro / sierść</span> &gt; <span>szkło</span> &gt; <span>włosy</span> &gt; <span>nylon</span> &gt; <span>wełna (sukno)</span> &gt; <span>jedwab</span> &gt; <span style="color:#b45309;font-weight:700">aluminium</span> &gt; <span>papier</span> &gt; <span>bawełna</span> &gt; <span style="color:#b45309;font-weight:700">stal</span> &gt; <span>drewno (suche)</span> &gt; <span>bursztyn</span> &gt; <span>ebonit / twarda guma</span> &gt; <span style="color:#b45309;font-weight:700">miedź</span> &gt; <span>poliester</span> &gt; <span>styropian</span> &gt; <span>folia PE (reklamówka)</span> &gt; <span>balon (lateks)</span> &gt; <span>PVC (rurka)</span> &gt; <span>teflon (PTFE)</span> (−)</p>

> Kolejność orientacyjna — zależy od wilgotności i czystości powierzchni. Metale (pomarańczowe) trzymane w ręce od razu się rozładowują — trzeba je trzymać za izolującą rączkę.
:::

@model fiz-elektryzowanie-v01 | Pocieraj i sprawdź: kto oddaje elektrony + wahadełko elektrostatyczne | Szereg tryboelektryczny z silnika · animacja przepływu elektronów

## 3 | Oddziaływanie ładunków {#s3}

::: karta core | Reguła
Ładunki **jednoimienne** (+ i +, − i −) się **odpychają**, **różnoimienne** się **przyciągają**. Siły działają na odległość, bez dotykania, i są wzajemne (III zasada dynamiki — obie siły mają tę samą wartość).
:::

::: karta understand | Dlaczego naelektryzowany grzebień przyciąga obojętne skrawki papieru?
Ładunek grzebienia przesuwa ładunki w skrawku (w izolatorze — w obrębie cząsteczek: **polaryzacja**; w przewodniku — elektrony swobodne: **indukcja**). Bliżej grzebienia gromadzi się ładunek przeciwnego znaku, dalej — tego samego. Przyciąganie bliższego ładunku jest silniejsze niż odpychanie dalszego, więc wypadkowo skrawek jest **przyciągany**.

**Wniosek do zadań:** przyciąganie *nie dowodzi*, że oba ciała są naelektryzowane. **Odpychanie** — tak (oba mają ładunek tego samego znaku).
:::

::: karta basic | Od czego zależy siła (jakościowo — E8)
- im **większe ładunki**, tym większa siła;
- im **większa odległość**, tym siła mniejsza — 2× dalej → 4× słabiej, 3× dalej → 9× słabiej;
- w wodzie i innych ośrodkach siła jest słabsza niż w powietrzu.
:::

@model fiz-elektryzowanie-v01 | Wahadełko: przyciąganie obojętnej kulki, dotyk, odpychanie | Silnik CHE · fizyka · otwiera się w oknie

## 4 | Przewodniki i izolatory {#s4}

::: karta core | Różnica
**Przewodnik** zawiera swobodne nośniki ładunku: w metalach i graficie — **elektrony swobodne**, w roztworach i w ciele człowieka — **jony**. Ładunek rozpływa się po całym przewodniku.

**Izolator** (dielektryk) nie ma swobodnych nośników — ładunek zostaje tam, gdzie go umieszczono (dlatego tarciem łatwo elektryzować izolatory).

**Półprzewodniki** (krzem, german) przewodzą słabo, ale lepiej w wyższej temperaturze i po domieszkowaniu — podstawa elektroniki.
:::

::: karta understand | Opór właściwy ρ — dane z silnika
::: div.table-wrap
<table><thead><tr><th>Materiał</th><th>ρ [Ω·m] (20 °C)</th><th>Rodzaj</th></tr></thead><tbody><tr><td>srebro</td><td data-fiz-rho="srebro">1,59·10⁻⁸</td><td>przewodnik</td></tr><tr><td>miedź</td><td data-fiz-rho="miedz">1,68·10⁻⁸</td><td>przewodnik</td></tr><tr><td>aluminium</td><td data-fiz-rho="aluminium">2,65·10⁻⁸</td><td>przewodnik</td></tr><tr><td>żelazo</td><td data-fiz-rho="zelazo">9,7·10⁻⁸</td><td>przewodnik</td></tr><tr><td>grafit</td><td data-fiz-rho="grafit">1·10⁻⁵</td><td>przewodnik</td></tr><tr><td>woda morska</td><td data-fiz-rho="morska">0,2</td><td>elektrolit</td></tr><tr><td>woda z kranu</td><td data-fiz-rho="kran">50</td><td>elektrolit</td></tr><tr><td>krzem (czysty)</td><td data-fiz-rho="krzem">2300</td><td>półprzewodnik</td></tr><tr><td>woda destylowana</td><td data-fiz-rho="destylowana">1,8·10⁵</td><td>słaby przewodnik</td></tr><tr><td>szkło</td><td data-fiz-rho="szklo">1·10¹²</td><td>izolator</td></tr><tr><td>guma</td><td data-fiz-rho="guma">1·10¹³</td><td>izolator</td></tr><tr><td>drewno suche</td><td data-fiz-rho="drewno">1·10¹⁴</td><td>izolator</td></tr><tr><td>powietrze suche</td><td data-fiz-rho="powietrze">2·10¹⁶</td><td>izolator</td></tr><tr><td>teflon</td><td data-fiz-rho="teflon">1·10²³</td><td>izolator</td></tr></tbody></table>
:::

> Różnica między miedzią a teflonem to ok. 30 rzędów wielkości! Woda z kranu przewodzi dzięki rozpuszczonym jonom (chemia: dysocjacja soli).
:::

@model fiz-przewodniki-v01 | Przewodnik czy izolator? Rozpływ ładunku w pręcie | ρ z silnika · czas rozpływu ładunku

@model gfx-scene-conductivity | Chemia: przewodzenie prądu przez roztwory (elektrolity) | Lekcja Kwasy · tester przewodnictwa

## 5 | Elektryzowanie przez dotyk. Zasada zachowania ładunku {#s5}

::: karta core | Elektryzowanie przez dotyk
Gdy ciało naelektryzowane dotknie ciała obojętnego (najlepiej przewodnika), część elektronów przechodzi z jednego na drugie. Oba ciała mają potem ładunek **tego samego znaku**.
:::

::: karta basic | Zasada zachowania ładunku
W układzie izolowanym (bez wymiany ładunku z otoczeniem) **suma ładunków jest stała**. Ładunku nie można stworzyć ani zniszczyć — można go tylko przemieścić.

$$ q₁ + q₂ = q₁′ + q₂′

**Dwie identyczne kulki przewodzące** po zetknięciu mają równe ładunki:

$$ q′ = (q₁ + q₂) / 2

Przykład: +6 nC i −2 nC → po zetknięciu każda ma +2 nC (suma +4 nC przed i po).

@model fiz-ladunek-v01 | Kule: dotyk, uziemienie, zasada zachowania, liczba elektronów | CHE.PHYS.electro.share · n = q/e
:::

::: karta extra | Uziemienie
Ziemia to ogromny przewodnik. Połączenie z nią (przewód, dotknięcie ręką) praktycznie **rozładowuje** ciało: nadmiar elektronów odpływa do ziemi albo brakujące z niej napływają.
:::

## 5a | Wykład: zasada zachowania ładunku, obliczenia w kulombach i uziemienie [[basic:E8]] [[extra:LO]] {#s5a}

::: karta core | Najpierw nazwa: zasada zachowania ładunku
Prawo, które tu stosujemy, to **zasada zachowania ładunku elektrycznego**: w układzie izolowanym (bez wymiany ładunku z otoczeniem) **suma ładunków jest stała**. Ładunku nie tworzymy ani nie niszczymy — elektrony tylko przechodzą z ciała na ciało.

$$ q₁ + q₂ + … = q₁′ + q₂′ + … = const

> „Zasady zachowania potencjału” nie ma. Z potencjałem wiąże się inna reguła: gdy zetkniesz przewodniki, elektrony płyną tak długo, aż **potencjały się wyrównają** (rozszerzenie LO poniżej). To ona wyjaśnia, dlaczego identyczne kule dzielą się ładunkiem po równo, a uziemienie rozładowuje ciało.
:::

::: karta basic | Ładunek to liczba ze znakiem i jednostką
Ładunek zapisujemy jak liczbę względną: **+** = niedobór elektronów, **−** = nadmiar elektronów, **0** = ciało obojętne. Jednostka: **kulomb (C)**. Każdy ładunek jest wielokrotnością ładunku elementarnego e ≈ <span data-fiz="e">1,6·10⁻¹⁹ C</span>.

::: div.table-wrap
<table><thead><tr><th>Przedrostek</th><th>Zapis</th><th>W kulombach</th><th>Przykład</th></tr></thead><tbody><tr><td>mili</td><td>1 mC</td><td>10⁻³ C</td><td>3 mC = 0,003 C</td></tr><tr><td>mikro</td><td>1 µC</td><td>10⁻⁶ C</td><td>−4 µC = −0,000004 C</td></tr><tr><td>nano</td><td>1 nC</td><td>10⁻⁹ C</td><td>+6 nC = 6·10⁻⁹ C</td></tr><tr><td>piko</td><td>1 pC</td><td>10⁻¹² C</td><td>2 pC = 2·10⁻¹² C</td></tr></tbody></table>
:::

<p>Wzory: <div class="formula-lg">q = n · e</div><div class="formula-lg">n = |q| / e</div></p>

> 1 C to bardzo dużo: ok. 6,24·10¹⁸ elektronów. W doświadczeniach szkolnych ładunki mają rząd nC–µC. W zadaniach rachunkowych często pojawiają się „okrągłe” wartości w C — metoda liczenia jest ta sama.
:::

::: karta understand | Dodawanie ładunków — zawsze ze znakiem i w nawiasie
Ładunki ujemne piszemy w nawiasie, żeby nie zgubić znaku:

$$ 0 C + (−4 C) = −4 C

$$ (+6 nC) + (−2 nC) = +4 nC

$$ (+3 µC) + (−3 µC) = 0

**Graficznie:** każdy „+” znosi się z jednym „−” (para = 0). Zostają niesparowane znaki — to wynik.

::: div.bil
<div class="bil-t"><span>+6: <span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span></span><span>−2: <span class="chg-t" style="background:#2563eb">−</span><span class="chg-t" style="background:#2563eb">−</span></span></div>

<div>2 pary „+ −” znikają → zostaje <span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span> = <b>+4</b></div>
:::
:::

::: karta core | Dotyk identycznych kul przewodzących — przykłady krok po kroku
Procedura: 1) zapisz ładunki ze znakiem, 2) dodaj je (suma), 3) podziel sumę po równo między identyczne kule, 4) sprawdź, czy suma po = suma przed, 5) ustal, kto oddał, a kto przyjął elektrony.

##### Przykład 1: A = 0 C, B = −4 C

::: div.bil
<div><b>Przed:</b> q<sub>A</sub> + q<sub>B</sub> = 0 C + (−4 C) = <b>−4 C</b></div>

<div class="bil-t"><span>A: <span class="chg-0">0</span></span><span>B: <span class="chg-t" style="background:#2563eb">−</span><span class="chg-t" style="background:#2563eb">−</span><span class="chg-t" style="background:#2563eb">−</span><span class="chg-t" style="background:#2563eb">−</span></span></div>

<div><b>Dotyk identycznych kul:</b> q′ = (q<sub>A</sub> + q<sub>B</sub>) / 2 = <span data-fiz-res="-2.0" data-fiz-share="0,-4">−4 C / 2 = −2 C</span></div>

<div class="bil-t"><span>A′: <span class="chg-t" style="background:#2563eb">−</span><span class="chg-t" style="background:#2563eb">−</span></span><span>B′: <span class="chg-t" style="background:#2563eb">−</span><span class="chg-t" style="background:#2563eb">−</span></span></div>

<div><b>Kontrola:</b> (−2 C) + (−2 C) = −4 C ✓</div>
:::

\<b>Przepływ:</b> B zmieniła ładunek z −4 C na −2 C, czyli oddała ładunek −2 C — **elektrony przeszły z B na A**. Ich liczba: n = 2 C / 1,6·10⁻¹⁹ C ≈ <b>1,25·10¹⁹</b>. Protony się nie ruszają.

##### Przykład 2: A = +6 nC, B = −2 nC

::: div.bil
<div><b>Przed:</b> q<sub>A</sub> + q<sub>B</sub> = +6 nC + (−2 nC) = <b>+4 nC</b></div>

<div class="bil-t"><span>A: <span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span></span><span>B: <span class="chg-t" style="background:#2563eb">−</span><span class="chg-t" style="background:#2563eb">−</span></span></div>

<div><b>Dotyk identycznych kul:</b> q′ = (q<sub>A</sub> + q<sub>B</sub>) / 2 = <span data-fiz-res="2.0" data-fiz-share="6,-2">+4 nC / 2 = +2 nC</span></div>

<div class="bil-t"><span>A′: <span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span></span><span>B′: <span class="chg-t" style="background:#dc2626">+</span><span class="chg-t" style="background:#dc2626">+</span></span></div>

<div><b>Kontrola:</b> +2 nC + +2 nC = +4 nC ✓</div>
:::

\<b>Przepływ:</b> A: +6 → +2 nC (ładunek zmalał o 4 nC, więc A *przyjęła* elektrony); B: −2 → +2 nC (B *oddała* elektrony). Elektrony płynęły z B do A: n = 4·10⁻⁹ C / e ≈ 2,5·10¹⁰.

##### Przykład 3: trzy kule A = +8 µC, B = 0, C = 0

::: div.bil
<div>A dotyka B: (+8 µC + 0) / 2 = <span data-fiz-res="4" data-fiz-share="8,0">+4 µC</span> → A = +4 µC, B = +4 µC</div>

<div>B dotyka C: (+4 µC + 0) / 2 = <span data-fiz-res="2" data-fiz-share="4,0">+2 µC</span> → B = +2 µC, C = +2 µC</div>

<div><b>Kontrola:</b> 4 + 2 + 2 = 8 µC = ładunek na początku ✓</div>

<div>Gdyby dotknąć wszystkie trzy naraz: q′ = (+8 µC) / 3 ≈ +2,67 µC każda — kolejność i sposób dotykania zmieniają wynik, ale nie sumę.</div>
:::

##### Przykład 4: A = +3 µC, B = −3 µC

::: div.bil
<div>(+3 µC) + (−3 µC) = 0 → po zetknięciu obie kule są <b>obojętne</b> (<span data-fiz-res="0" data-fiz-share="3,-3">0 µC</span>). Ładunki się zobojętniły, ale nie zniknęły: nadmiarowe elektrony B uzupełniły braki A.</div>
:::

@model fiz-ladunek-v01 | Bilans ładunku: dotyk, uziemienie, zapis „przed → po”, kafelki + i −, liczba elektronów | CHE.PHYS.electro.contact · ground · transfer · jednostki C, mC, µC, nC, e
:::

::: karta extra | Uziemienie — gdzie znika ładunek?
Ziemia jest ogromnym przewodnikiem. Gdy połączysz z nią naelektryzowane ciało (przewód, dotknięcie ręką, metalowa rura), ładunek rozkłada się na układ **ciało + Ziemia**; na małym ciele zostaje praktycznie **0**. Ładunek nie znika — jest w Ziemi, więc zasada zachowania obowiązuje dla układu ciało + Ziemia.

::: div.table-wrap
<table><thead><tr><th>Ładunek ciała przed</th><th>Po uziemieniu</th><th>Co płynie</th><th>Ile elektronów</th></tr></thead><tbody><tr><td>−5 nC</td><td>0</td><td>elektrony z ciała do ziemi</td><td>3,12·10¹⁰</td></tr><tr><td>+8 µC</td><td>0</td><td>elektrony z ziemi do ciała</td><td>4,99·10¹³</td></tr><tr><td>−4 C</td><td>0</td><td>elektrony z ciała do ziemi</td><td>2,5·10¹⁹</td></tr><tr><td>0</td><td>0</td><td>nic — ciało obojętne</td><td>0</td></tr></tbody></table>
:::

> Uwaga na język: przy uziemieniu ciała dodatniego nie „odpływają protony” — to **elektrony napływają z ziemi** i uzupełniają niedobór.

##### Uziemienie a indukcja — ładowanie elektroskopu „na odwrót”

1. Zbliżasz pręt naelektryzowany ujemnie (nie dotykasz). W elektroskopie elektrony uciekają w dół, na kulce przewagę ma „+”.
2. Dotykasz kulkę palcem (uziemienie): odpychane elektrony odpływają do ziemi.
3. Zabierasz palec, potem pręt. Elektroskop ma **niedobór elektronów → ładunek dodatni**, przeciwny do ładunku pręta.

Zastosowania uziemienia: piorunochron, uziemienie obudów urządzeń i cystern z paliwem, opaska antystatyczna przy elektronice, łańcuch lub pasek przewodzący przy cysternach.
:::

::: adv | Wyrównanie potencjałów — kule różnej wielkości i dlaczego Ziemia „zabiera” ładunek | poziom akademicki · poza maturą rozszerzoną
Potencjał naładowanej kuli o promieniu R: V = k·q / R. Po zetknięciu przewodników elektrony płyną, aż potencjały się zrównają: q₁/R₁ = q₂/R₂. Stąd przy zachowanej sumie Q:

$$ q₁′ = Q · R₁ / (R₁ + R₂),   q₂′ = Q · R₂ / (R₁ + R₂)

\<b>Przykład:</b> kula 1 cm ma +6 nC, kula 2 cm jest obojętna. Po zetknięciu: q₁′ = 6 · 1/3 = <span data-fiz-res="2,4" data-fiz-sharer="6,0|1,2">+2 nC</span>, q₂′ = +4 nC. Większa kula bierze więcej ładunku, a potencjały są równe: V = k·(2 nC)/(0,01 m) ≈ 1798 V.

Ziemia ma promień ok. 6400 km, więc przy „zetknięciu” z małym ciałem prawie cały ładunek trafia do Ziemi — to właśnie uziemienie. Identyczne kule (R₁ = R₂) dzielą się po równo — szkolny wzór q′ = (q₁ + q₂)/2 jest szczególnym przypadkiem tej reguły.
:::

::: karta warning | Typowe błędy w zadaniach
- Dodawanie bez znaku: „0 C i −4 C → 2 C każda” — źle, wynik to −2 C.
- Dzielenie po równo kul różnej wielkości (to tylko dla identycznych).
- „Przepłynęły protony” — w metalach przemieszczają się wyłącznie elektrony.
- Po uziemieniu „ładunek zniknął” — jest w Ziemi; suma w układzie ciało + Ziemia stała.
- Zapominanie o przeliczeniu nC, µC na C przed liczeniem elektronów.
:::

::: karta basic | Sprawdź się (odpowiedzi ukryte)
1. A = −6 nC, B = +2 nC, identyczne, zetknięte. Ładunek każdej po zetknięciu?
2. Ile elektronów przeszło w zadaniu 1 i w którą stronę?
3. Kula ma −3,2·10⁻¹⁸ C. Ile ma nadmiarowych elektronów?
4. Kulę +5 µC uziemiono. Co płynie i ile?
5. Trzy identyczne kule: +9 C, −3 C, 0 C dotknięte naraz. Wynik?

::: odp | Odpowiedzi
1. (−6 + 2)/2 = <b>−2 nC</b> każda.
2. A: −6 → −2 nC (oddała elektrony), B: +2 → −2 nC (przyjęła). Z A do B przeszło 4 nC, czyli 2,5·10¹⁰ elektronów.
3. n = 3,2·10⁻¹⁸ / 1,6·10⁻¹⁹ = <b>20</b> elektronów.
4. Elektrony z ziemi do kuli: 5·10⁻⁶ / 1,6·10⁻¹⁹ ≈ 3,12·10¹³; kula po uziemieniu ma 0.
5. (9 − 3 + 0)/3 = <b>+2 C</b> każda.
:::
:::

## 6 | Elektroskop {#s6}

::: karta core | Budowa
- metalowy pręt zakończony u góry kulką lub płytką,
- dwa lekkie metalowe listki (lub wskazówka) na dole pręta,
- szklana obudowa z **izolatorem** (korek, guma), przez który przechodzi pręt.
:::

::: karta basic | Działanie
Ładunek rozpływa się po pręcie i listkach. Listki mają ładunek **tego samego znaku**, więc się **odpychają** i rozchylają. Większy ładunek → większy kąt.

**Elektroskop nie pokazuje znaku ładunku.** Znak sprawdzamy, zbliżając ciało o znanym ładunku: jeśli listki rozchylają się bardziej — ładunek jednoimienny, jeśli opadają — różnoimienny.
:::

@model fiz-elektroskop-v01 | Elektroskop: dotyk, indukcja, uziemienie (scenariusz krok po kroku) | Model rozkładu ładunku z silnika

## 7 | Indukcja elektrostatyczna (elektryzowanie przez wpływ) {#s7}

::: karta core | Zjawisko
Po **zbliżeniu** (bez dotykania) naładowanego ciała do przewodnika elektrony swobodne w przewodniku przesuwają się: ujemny pręt je odpycha, dodatni — przyciąga. Na bliższym końcu powstaje ładunek **przeciwnego** znaku, na dalszym — **tego samego**. Ładunek całkowity przewodnika się nie zmienia (= 0). Po oddaleniu pręta wszystko wraca do stanu początkowego.
:::

::: karta basic | Trwałe naelektryzowanie przez indukcję — 4 kroki
1. Zbliż naładowany pręt (np. ujemny) do kulki elektroskopu — listki się rozchylają.
2. Nie odsuwając pręta, dotknij kulki palcem (uziemienie) — elektrony uciekają do ziemi, listki opadają.
3. Zabierz palec (pręt nadal blisko).
4. Oddal pręt — elektroskop zostaje naładowany **przeciwnie** do pręta (tu: dodatnio), listki się rozchylają.
:::

::: karta extra | Zastosowania i skutki
::: div.table-wrap
<table><thead><tr><th>Gdzie</th><th>Co się dzieje</th></tr></thead><tbody><tr><td>piorunochron</td><td>chmura indukuje ładunek w ostrzu; wyładowanie trafia w piorunochron i spływa przewodem do ziemi — budynek jest chroniony</td></tr><tr><td>burza</td><td>ładunki rozdzielają się w chmurze (zderzenia kryształków lodu); piorun przenosi kilka–kilkadziesiąt kulombów w ułamku sekundy</td></tr><tr><td>kserograf, drukarka laserowa</td><td>naelektryzowany bęben przyciąga toner tylko w miejscach obrazu</td></tr><tr><td>filtry elektrostatyczne</td><td>pył w kominie elektrowni zostaje naładowany i osiada na elektrodach</td></tr><tr><td>malowanie proszkowe / natryskowe</td><td>naładowane krople farby lecą do uziemionego elementu i pokrywają go równo, także od tyłu</td></tr><tr><td>stacja paliw, cysterna</td><td>iskra może zapalić opary — cysterny i dystrybutory się uziemia</td></tr><tr><td>elektronika</td><td>wyładowanie z ciała (kilka tysięcy woltów!) niszczy układy scalone — opaska antystatyczna, uziemione stanowisko</td></tr><tr><td>klatka Faradaya</td><td>wewnątrz zamkniętego przewodnika pole elektryczne jest zerowe — samochód chroni przed piorunem, mikrofalówka zatrzymuje fale</td></tr></tbody></table>
:::
:::

@model fiz-elektroskop-v01 | Scenariusz: elektryzowanie przez indukcję w 5 krokach | Silnik CHE · fizyka · otwiera się w oknie

## 8 | Prawo Coulomba [[extra:E8+ / LO]] {#s8}

::: karta core | Wzór
$$ F = k · |q₁ · q₂| / r²

k = <span data-fiz="k">8,99·10⁹ N·m²/C²</span> (w próżni i — praktycznie — w powietrzu). F w niutonach, q w kulombach, r w metrach.

- siła jest wprost proporcjonalna do iloczynu ładunków,
- odwrotnie proporcjonalna do **kwadratu** odległości,
- działa wzdłuż prostej łączącej ładunki (siły wzajemne, równe co do wartości).
:::

::: karta basic | Przykład
Dwa ładunki po 2 µC i 3 µC w odległości 30 cm (powietrze):

$$ F = 8,99·10⁹ · 2·10⁻⁶ · 3·10⁻⁶ / 0,3² ≈ 0,6 N

Ładunki jednoimienne → odpychanie. To tyle, ile waży ciało o masie ok. 60 g.
:::

::: karta new | Ośrodek — most do chemii
W ośrodku o przenikalności względnej ε<sub>r</sub> siła maleje ε<sub>r</sub> razy: F = k·|q₁q₂| / (ε<sub>r</sub>·r²). Dla wody ε<sub>r</sub> ≈ <span data-fiz="epsr-woda">80</span> — dlatego woda tak skutecznie **rozdziela jony** kryształu soli (dysocjacja, lekcja Sole).
:::

@model fiz-coulomb-v01 | Prawo Coulomba: siły, linie pola, ośrodek, wykres F(r) | k i εr z silnika

::: adv | Elektryczność kontra grawitacja | poziom akademicki · poza maturą rozszerzoną
Dla protonu i elektronu stosunek siły elektrycznej do grawitacyjnej F<sub>e</sub>/F<sub>g</sub> = k·e² / (G·m<sub>e</sub>·m<sub>p</sub>) ≈ 2,3·10³⁹ — niezależnie od odległości (obie siły ∝ 1/r²). W atomie wodoru (r ≈ 5,3·10⁻¹¹ m) F<sub>e</sub> ≈ 8,2·10⁻⁸ N. Grawitacja dominuje w kosmosie tylko dlatego, że ciała są prawie idealnie obojętne.
:::

::: adv | Wektorowo i zasada superpozycji | poziom akademicki · poza maturą rozszerzoną
F⃗₁₂ = k·q₁q₂/r² · r̂₁₂. Siła od kilku ładunków jest **sumą wektorową** sił od każdego z osobna. Przykład: ładunek w połowie odległości między dwoma identycznymi ładunkami — siła wypadkowa 0.
:::

## 9 | Pole elektryczne [[extra:LO]] {#s9}

::: karta core | Natężenie pola
Ładunek wytwarza wokół siebie **pole elektryczne** — każdy inny ładunek odczuwa w nim siłę. **Natężenie pola** to siła działająca na jednostkowy, dodatni ładunek próbny:

$$ E = F / q   [N/C = V/m]

Dla ładunku punktowego: E = k·Q / r². **Linie pola** zaczynają się na ładunkach dodatnich i kończą na ujemnych; gęstsze linie — silniejsze pole.
:::

::: karta basic | Rodzaje pól
- **centralne** — wokół ładunku punktowego (linie radialne),
- **jednorodne** — między dwiema równoległymi płytami o przeciwnych ładunkach (linie równoległe, E = U/d),
- wewnątrz przewodnika w równowadze E = 0 (klatka Faradaya); ładunek siedzi na powierzchni, najgęściej na **ostrzach**.
:::

@model fiz-coulomb-v01 | Linie pola dwóch ładunków (włącz/wyłącz) | Silnik CHE · fizyka · otwiera się w oknie

::: adv | Potencjał, napięcie, kondensator, elektronowolt | poziom akademicki · poza maturą rozszerzoną
**Potencjał** V = k·Q/r [V = J/C]; **napięcie** U = V<sub>A</sub> − V<sub>B</sub> = W/q. **Kondensator**: C = Q/U [F]; płaski: C = ε₀ε<sub>r</sub>S/d, energia W = ½CU². **Elektronowolt**: 1 eV = 1,602·10⁻¹⁹ J — energia elektronu przyspieszonego napięciem 1 V. Prawo Gaussa: strumień E przez powierzchnię zamkniętą = Q<sub>wewn</sub>/ε₀.
:::

## 10 | Doświadczenia {#s10}

@model fiz-elektryzowanie-v01 | Pracownia: tarcie i wahadełko | Silnik CHE · fizyka · otwiera się w oknie

@model fiz-elektroskop-v01 | Pracownia: elektroskop | Silnik CHE · fizyka · otwiera się w oknie

::: dosw | Doświadczenie 1 — Balon i skrawki papieru
Problem: Czy naelektryzowany balon przyciąga lekkie ciała?
Sprzęt: balon, wełniany sweter lub suche włosy, skrawki papieru
Przebieg: Pocieraj balon o włosy, zbliż do skrawków.
Obserwacja: Skrawki podskakują i przyklejają się do balonu, po chwili część odpada.
Wniosek: Balon naelektryzował się (−); skrawki są przyciągane przez polaryzację. Po dotyku przejmują ładunek i odpadają (odpychanie).
:::

::: dosw | Doświadczenie 2 — Grzebień i strumień wody
Problem: Czy ładunek działa na ciecz?
Przebieg: Naelektryzowany grzebień zbliż do cienkiego strumienia wody z kranu.
Obserwacja: Strumień wyraźnie się wygina w stronę grzebienia.
Wniosek: Ładunek grzebienia przesuwa ładunki w wodzie (cząsteczki H₂O są polarne, woda z kranu zawiera jony) — strumień jest przyciągany.
:::

::: dosw | Doświadczenie 3 — Elektroskop ze słoika
Sprzęt: słoik, plastikowa pokrywka (izolator), drut miedziany, folia aluminiowa
Wykonanie: Drut przebij przez pokrywkę, u góry kulka z folii, na dole zagięty haczyk z dwoma paskami cienkiej folii.
Test: Zbliż naelektryzowany balon — paski się rozchylają (indukcja); dotknij — zostają rozchylone (dotyk).
:::

::: dosw | Doświadczenie 4 — Wahadełko elektrostatyczne
Sprzęt: kulka z folii aluminiowej na nitce, naelektryzowany pręt (ebonit, PVC, balon)
Obserwacja: Kulka najpierw jest przyciągana, po dotknięciu — gwałtownie odpychana.
Wniosek: Przyciąganie obojętnej kulki → indukcja; po dotyku kulka ma ładunek tego samego znaku → odpychanie.
:::

::: dosw | Doświadczenie 5 — Puszka toczona balonem
Przebieg: Pustą puszkę aluminiową połóż na stole, zbliż naelektryzowany balon (bez dotykania).
Obserwacja: Puszka toczy się za balonem.
Wniosek: Indukcja w metalu: bliższa strona puszki ma ładunek przeciwny do balonu.
:::

::: dosw | Doświadczenie 6 — Przewodnik czy izolator?
Przebieg: Naładuj elektroskop, a następnie dotykaj kulki: drutem trzymanym w ręce, plastikową linijką, ołówkiem (grafit), suchym i wilgotnym sznurkiem.
Obserwacja: Drut, grafit i wilgotny sznurek rozładowują elektroskop (listki opadają), linijka i suchy sznurek — nie.
Wniosek: Przewodniki odprowadzają ładunek do ziemi przez nasze ciało; woda w sznurku przewodzi dzięki jonom.
:::

::: dosw | Doświadczenie 7 — Elektryzowanie elektroskopu przez indukcję
Przebieg: 4 kroki z rozdziału 7.
Obserwacja: Na końcu listki rozchylone, mimo że pręt nigdy nie dotknął elektroskopu.
Sprawdzenie znaku: Zbliż ponownie ten sam pręt — listki opadają, więc ładunek elektroskopu jest przeciwny do ładunku pręta.
:::

::: karta extra | BHP i praktyka
- Doświadczenia elektrostatyczne wychodzą w **suchym** powietrzu (zimą) — wilgoć rozładowuje ciała.
- Nie wykonuj doświadczeń przy otwartych oparach paliw i rozpuszczalników.
- Maszyna elektrostatyczna i generator Van de Graaffa — tylko pod okiem nauczyciela (wyładowania są bezpieczne dla zdrowej osoby, ale bolesne; niebezpieczne dla osób z rozrusznikiem).
- Podczas burzy: nie stój pod samotnym drzewem, nie kąp się, w samochodzie jesteś bezpieczny (klatka Faradaya).
:::

## 11 | Klinika błędów {#s11}

::: div.table-wrap
::: klinika | Błąd | Poprawnie | Dlaczego?
| Przy pocieraniu przechodzą protony. | Przechodzą tylko elektrony. | Protony są uwięzione w jądrach atomów. |
| Ciało dodatnie ma nadmiar protonów, które dostało. | Ciało dodatnie ma niedobór elektronów. | Liczba protonów się nie zmienia — ciało oddało elektrony. |
| Tarcie wytwarza ładunek. | Tarcie rozdziela ładunek. | Zasada zachowania ładunku: ile jedno ciało ma +, tyle drugie −. |
| Skoro ciała się przyciągają, oba są naelektryzowane. | Przyciąganie może zachodzić między ciałem naładowanym i obojętnym. | Polaryzacja / indukcja. Pewnym dowodem jest tylko odpychanie. |
| Elektroskop pokazuje, czy ładunek jest + czy −. | Elektroskop pokazuje tylko, czy (i ile) ładunku jest. | Znak ustala się ciałem o znanym ładunku. |
| 2× większa odległość → siła 2× mniejsza. | 2× większa odległość → siła 4× mniejsza. | F ∝ 1/r² (prawo Coulomba). |
| Metalu nie da się naelektryzować przez tarcie. | Da się, jeśli jest odizolowany (trzymany za izolującą rączkę). | W ręce ładunek natychmiast spływa przez ciało do ziemi. |
| Piorunochron przyciąga pioruny, więc jest niebezpieczny. | Piorunochron chroni budynek. | Bezpiecznie odprowadza ładunek wyładowania przewodem do ziemi. |
| Przy indukcji przewodnik zyskuje ładunek. | Przy indukcji ładunek tylko się rozsuwa (suma = 0). | Trwały ładunek pojawia się dopiero po uziemieniu i jego odłączeniu. |
:::
:::

## 11a | Przykłady prowadzone krok po kroku {#s11a}

::: karta core | Jak rozwiązywać zadania — schemat
1. <b>Wypisz dane</b> z jednostkami; zamień nC, µC na C, cm na m.
2. <b>Nazwij zjawisko</b>: tarcie / dotyk / indukcja / Coulomb.
3. <b>Wybierz wzór</b> z ściągi (sekcja 0).
4. <b>Podstaw i policz</b> — potęgi dziesiątki osobno: 10⁻⁶ · 10⁻⁶ = 10⁻¹².
5. <b>Sprawdź sens</b>: znak ładunku, czy siła rośnie/maleje zgodnie z intuicją, czy suma ładunków się zgadza.
:::

::: karta basic | Przykład 1 (E8) — ile elektronów?
1. Dane: q = −4,8·10⁻¹⁹ C; szukane: n.
2. Wzór: n = |q| / e.
3. n = 4,8·10⁻¹⁹ / 1,6·10⁻¹⁹ = 3.
4. Odpowiedź: 3 nadmiarowe elektrony (ładunek ujemny = nadmiar).
:::

::: karta basic | Przykład 2 (E8) — dotyk trzech kul
1. Kule identyczne: A = +9 nC, B = −3 nC. Dotykamy A z B.
2. Suma: +9 + (−3) = +6 nC → po zetknięciu po +3 nC.
3. Kontrola: przed 6 nC, po 3 + 3 = 6 nC ✓ (zasada zachowania).
:::

::: karta basic | Przykład 3 (E8+) — prawo Coulomba
1. Dane: q₁ = 3 µC = 3·10⁻⁶ C, q₂ = −2 µC, r = 20 cm = 0,2 m.
2. F = k·|q₁q₂|/r² = 8,99·10⁹ · 6·10⁻¹² / 0,04.
3. F = 8,99·10⁹ · 1,5·10⁻¹⁰ ≈ 1,35 N.
4. Znaki różne → przyciąganie.
:::

::: karta basic | Przykład 4 (E8+) — co, jeśli…
1. Odległość zmalała 2 razy: F rośnie 2² = 4 razy.
2. Jeden ładunek wzrósł 3 razy, odległość wzrosła 3 razy: F · 3 / 9 = F/3.
3. Wskazówka: najpierw zapisz F ∝ q₁q₂/r², potem podstaw zmiany.
:::

::: karta basic | Przykład 5 (LO) — natężenie pola
1. Q = 2 nC, r = 30 cm: E = k·Q/r² = 8,99·10⁹ · 2·10⁻⁹ / 0,09 ≈ 200 N/C.
2. Siła na elektron w tym miejscu: F = eE ≈ 1,6·10⁻¹⁹ · 200 = 3,2·10⁻¹⁷ N.
:::

@model fiz-ladunek-v01 | Sprawdź przykład 2 na modelu kul | Silnik CHE · fizyka · otwiera się w oknie

@model fiz-coulomb-v01 | Sprawdź przykłady 3–5 w modelu Coulomba | Silnik CHE · fizyka · otwiera się w oknie

## 12 | Ćwiczenia {#s12}

### Poziom A — podstawa (E8)

::: karta -
::: ol {start="1"}
<li>Kulka ma ładunek −3,2·10⁻¹⁹ C. Ile ma nadmiarowych elektronów?</li>

<li>Ciało ma 5·10⁹ nadmiarowych elektronów. Oblicz jego ładunek.</li>

<li>Szklaną pałeczkę potarto jedwabiem. Jaki znak ładunku ma każde z ciał i dlaczego?</li>

<li>Dwie identyczne metalowe kulki: +6 nC i −2 nC. Jaki ładunek ma każda po zetknięciu?</li>

<li>Wymień trzy przewodniki i trzy izolatory.</li>
:::

::: odp | Pokaż podpowiedzi
::: ol {start="1"}
<li>n = |q|/e</li>

<li>q = n·e, znak: nadmiar e → minus</li>

<li>kto stoi wcześniej w szeregu tryboelektrycznym, oddaje elektrony</li>

<li>zsumuj i podziel na 2</li>

<li>czy są swobodne nośniki ładunku?</li>
:::
:::

::: odp | Pokaż odpowiedzi
::: ol {start="1"}
<li>n = q/e = 3,2·10⁻¹⁹ / 1,6·10⁻¹⁹ = 2 elektrony.</li>

<li>q = n·e = 5·10⁹ · 1,6·10⁻¹⁹ C = 8·10⁻¹⁰ C, znak ujemny: q = −8·10⁻¹⁰ C (−0,8 nC).</li>

<li>Szkło +, jedwab −: szkło oddało elektrony jedwabiowi (stoi wcześniej w szeregu tryboelektrycznym).</li>

<li>(+6 − 2)/2 = +2 nC każda.</li>

<li>Przewodniki: miedź, aluminium, grafit, woda z solą, ciało człowieka. Izolatory: szkło, guma, plastik, suche drewno, suche powietrze.</li>
:::
:::
:::

### Poziom B — trening (E8)

::: karta -
::: ol {start="6"}
<li>Do kulki naładowanego elektroskopu zbliżono pręt naładowany ujemnie — listki rozchyliły się bardziej. Jaki znak ma ładunek elektroskopu?</li>

<li>Dlaczego naelektryzowany balon przykleja się do ściany?</li>

<li>Jak zmieni się siła oddziaływania dwóch ładunków, gdy odległość wzrośnie 3 razy? A gdy oba ładunki wzrosną 2 razy?</li>

<li>Opisz, jak naelektryzować elektroskop dodatnio, mając tylko pręt naładowany ujemnie.</li>
:::

::: odp | Pokaż podpowiedzi
::: ol {start="6"}
<li>zbliżenie jednoimiennego ładunku spycha elektrony do listków</li>

<li>polaryzacja / indukcja w ścianie</li>

<li>F ∝ q₁q₂/r²</li>

<li>ZUZO: zbliż, uziem, zabierz palec, oddal</li>
:::
:::

::: odp | Pokaż odpowiedzi
::: ol {start="6"}
<li>Ujemny — zbliżenie ładunku jednoimiennego spycha więcej elektronów do listków.</li>

<li>Balon (−) indukuje w ścianie ładunek dodatni na powierzchni (polaryzacja) — przyciąganie.</li>

<li>9 razy mniejsza; 4 razy większa.</li>

<li>Indukcja: zbliż pręt, uziem kulkę palcem, zabierz palec, oddal pręt — elektroskop ma ładunek dodatni.</li>
:::
:::
:::

### Poziom C — ambitny

::: karta -
::: ol {start="10"}
<li>Balon ma ładunek −0,5 µC. Ile elektronów przeszło na niego z włosów?</li>

<li>Oblicz siłę między ładunkami 2 µC i 3 µC odległymi o 30 cm. Czy to przyciąganie, czy odpychanie?</li>

<li>Trzy identyczne kulki: A = +8 nC, B = 0, C = 0. Dotykamy A do B, potem B do C. Jakie są ładunki końcowe?</li>
:::

::: odp | Pokaż podpowiedzi
::: ol {start="10"}
<li>0,5 µC = 5·10⁻⁷ C; n = q/e</li>

<li>zamień µC na C i cm na m</li>

<li>dotykaj po kolei; suma się nie zmienia</li>
:::
:::

::: odp | Pokaż odpowiedzi
::: ol {start="10"}
<li>n = 0,5·10⁻⁶ / 1,602·10⁻¹⁹ ≈ 3,1·10¹² elektronów.</li>

<li>F = 8,99·10⁹ · 6·10⁻¹² / 0,09 ≈ 0,6 N — odpychanie (ładunki jednoimienne).</li>

<li>A–B: po +4 nC. B–C: po +2 nC. Wynik: A = +4 nC, B = +2 nC, C = +2 nC (suma 8 nC — zachowana).</li>
:::
:::
:::

### Poziom D — LO rozszerzone

::: karta -
::: ol {start="13"}
<li>Oblicz natężenie pola ładunku 1 nC w odległości 10 cm oraz przyspieszenie elektronu w tym miejscu.</li>

<li>Dwa ładunki +q w odległości 2a. Ile wynosi natężenie pola w połowie odległości? Uzasadnij.</li>

<li>Dlaczego w wodzie (εr ≈ 80) kryształ NaCl rozpada się na jony, a w benzynie (εr ≈ 2) — nie?</li>
:::

::: odp | Pokaż podpowiedzi
::: ol {start="13"}
<li>E = kQ/r², a = eE/mₑ</li>

<li>wektory od obu ładunków znoszą się</li>

<li>siła maleje εr razy</li>
:::
:::

::: odp | Pokaż odpowiedzi
::: ol {start="13"}
<li>E = k·Q/r² = 8,99·10⁹ · 10⁻⁹ / 0,01 ≈ 900 N/C; F = eE ≈ 1,44·10⁻¹⁶ N; a = F/m<sub>e</sub> ≈ 1,6·10¹⁴ m/s².</li>

<li>E = 0 — wektory natężeń od obu ładunków mają równe wartości i przeciwne zwroty (superpozycja).</li>

<li>Siła przyciągania Na⁺ i Cl⁻ maleje εr razy; w wodzie ~80× — energia cieplna i hydratacja wystarczają, by rozdzielić jony; w benzynie siła prawie się nie zmienia.</li>
:::
:::
:::

## 12a | Zadania egzaminacyjne E8 — typy i wzorcowe odpowiedzi {#s12a}

::: karta core | Typowe zadania E8 — jak je rozpoznać
::: div.table-wrap
<table><thead><tr><th>Typ zadania</th><th>Co sprawdza</th><th>Klucz do odpowiedzi</th></tr></thead><tbody><tr><td>„Wyjaśnij, dlaczego balon przyczepił się do ściany”</td><td>indukcja / polaryzacja</td><td>balon naelektryzowany → w ścianie przesunięcie ładunków → bliżej ładunek przeciwny → przyciąganie</td></tr><tr><td>„Jaki ładunek uzyska pałeczka…” (szereg podany w zadaniu)</td><td>tarcie</td><td>oddaje elektrony materiał stojący wcześniej → +; przyjmuje → −</td></tr><tr><td>„Kulki zetknięto — jaki mają ładunek?”</td><td>zasada zachowania ładunku</td><td>q′ = (q₁ + q₂)/2 dla identycznych kul</td></tr><tr><td>„Uzupełnij zdania: listki elektroskopu…”</td><td>budowa i działanie elektroskopu</td><td>listki mają ładunek jednoimienny → odpychają się</td></tr><tr><td>„Wybierz przewodniki / izolatory”</td><td>klasyfikacja materiałów</td><td>metale, grafit, woda z solą — przewodniki; szkło, guma, plastik, suche drewno — izolatory</td></tr><tr><td>„Zaplanuj doświadczenie…”</td><td>metoda naukowa</td><td>problem → hipoteza → zestaw → przebieg → obserwacja → wniosek; zmieniaj jedną zmienną</td></tr><tr><td>„Oblicz, ile elektronów…” (E8+)</td><td>q = n·e</td><td>n = q/e; uważaj na przedrostki nC, µC</td></tr><tr><td>„Jak zmieni się siła…” (E8+)</td><td>F ∝ q₁q₂/r²</td><td>2× dalej → ¼; 2× większy ładunek → 2×</td></tr></tbody></table>
:::
:::

::: karta extra | Zadanie egzaminacyjne z rozwiązaniem (otwarte)
\<b>Treść:</b> Ania potarła plastikową linijkę o włosy i zbliżyła ją do strumienia wody z kranu. Strumień się wygiął. Wyjaśnij zjawisko i podaj, jak zmieni się efekt, gdy linijkę odsunie dalej.

::: odp | Wzorcowa odpowiedź
Linijka naelektryzowała się przez tarcie (przejęła elektrony z włosów — ładunek ujemny). Jej ładunek przesuwa ładunki w wodzie (polaryzacja cząsteczek H₂O, jony w wodzie z kranu) — bliżej linijki gromadzi się ładunek przeciwnego znaku, więc woda jest przyciągana i strumień się wygina. Po odsunięciu linijki siła maleje (szybko, bo zależy od odległości), więc strumień wygina się słabiej.

> Punktowane elementy: elektryzowanie przez tarcie · przesunięcie ładunków w wodzie · przyciąganie · zależność od odległości.
:::
:::

## 14a | Mapa myśli, checklista i plan powtórek {#s14a}

::: karta basic | Mapa myśli
<pre style="font:13px/1.5 ui-monospace,Consolas,monospace;white-space:pre-wrap;background:var(--surface-soft,#f6f8fa);padding:12px;border-radius:10px">ELEKTROSTATYKA
├── ŁADUNEK: proton +e, elektron −e · q = n·e · 1 C
├── ELEKTRYZOWANIE
│   ├── tarcie → szereg tryboelektryczny (ładunki przeciwne)
│   ├── dotyk → ładunek tego samego znaku · (q₁+q₂)/2
│   └── indukcja → ZUZO → ładunek przeciwny
├── ODDZIAŁYWANIE: jednoimienne ↔ odpychanie, różnoimienne ↔ przyciąganie
│   └── F = k·|q₁q₂|/r² (E8+) · 2× dalej → ¼
├── MATERIAŁY: przewodniki (e⁻ swobodne, jony) · izolatory · półprzewodniki
├── PRZYRZĄDY: elektroskop (ILE, nie JAKI) · uziemienie
├── ZASTOSOWANIA: piorunochron · ksero · filtry · malowanie · klatka Faradaya
└── LO: pole E = F/q · linie pola · potencjał · napięcie · kondensator</pre>
:::

::: karta core | Checklista — umiem…
::: ul {style="list-style:none;padding:0"}
<li>☐ wyjaśniam, skąd ciało ma ładunek (nadmiar / niedobór elektronów)</li>

<li>☐ liczę q = n·e i n = q/e</li>

<li>☐ przewiduję znaki ładunków po tarciu (szereg)</li>

<li>☐ stosuję zasadę zachowania ładunku przy dotyku</li>

<li>☐ opisuję budowę i działanie elektroskopu</li>

<li>☐ wyjaśniam przyciąganie ciała obojętnego (polaryzacja/indukcja)</li>

<li>☐ opisuję 4 kroki elektryzowania przez indukcję</li>

<li>☐ podaję 3 przewodniki i 3 izolatory oraz przykłady zastosowań i zagrożeń</li>

<li>☐ (E8+) obliczam siłę z prawa Coulomba i jej zmianę</li>

<li>☐ (LO) obliczam natężenie pola ładunku punktowego</li>
:::
:::

::: karta understand | Plan powtórek (krzywa zapominania)
::: div.table-wrap
<table><thead><tr><th>Kiedy</th><th>Co</th><th>Ile</th></tr></thead><tbody><tr><td>dziś</td><td>sekcja 0 + mnemotechniki</td><td>10 min</td></tr><tr><td>jutro</td><td>fiszki + diagnoza startowa</td><td>5 min</td></tr><tr><td>za 3 dni</td><td>przykłady prowadzone (bez patrzenia)</td><td>15 min</td></tr><tr><td>za tydzień</td><td>ćwiczenia A–B + test</td><td>20 min</td></tr><tr><td>za 3 tygodnie</td><td>zadania egzaminacyjne 12a</td><td>20 min</td></tr></tbody></table>
:::
:::

## 13 | Fiszki {#s13}

::: fiszki
Ładunek elementarny | e ≈ 1,6·10⁻¹⁹ C
1 C to ile elektronów? | ok. 6,24·10¹⁸
Ciało naelektryzowane ujemnie | nadmiar elektronów
Ciało naelektryzowane dodatnio | niedobór elektronów
Co się przemieszcza przy elektryzowaniu? | tylko elektrony
3 sposoby elektryzowania | tarcie, dotyk, indukcja (wpływ)
Zasada zachowania ładunku | w układzie izolowanym suma ładunków jest stała
Szkło + jedwab | szkło +, jedwab −
Ebonit + sukno | ebonit −, sukno +
Przewodnik | ma swobodne nośniki ładunku (elektrony lub jony)
Izolator | brak swobodnych nośników; ładunek zostaje w miejscu
Elektroskop | wykrywa ładunek; listki odpychają się jednoimiennie; nie pokazuje znaku
Uziemienie | połączenie z ziemią — rozładowuje ciało
Prawo Coulomba | F = k·|q₁q₂| / r², k ≈ 9·10⁹ N·m²/C²
2× większa odległość | siła 4× mniejsza
Natężenie pola | E = F/q [N/C]
Klatka Faradaya | wewnątrz przewodnika pole = 0
:::

## 14 | Test {#s14}

::: test
? Co przemieszcza się przy elektryzowaniu przez tarcie?
- protony
+ elektrony
- neutrony

? Ciało naelektryzowane dodatnio ma…
- nadmiar protonów
+ niedobór elektronów
- nadmiar elektronów

? Ebonit pocierany suknem ładuje się…
- dodatnio
+ ujemnie
- nie elektryzuje się

? Który materiał jest przewodnikiem?
- guma
+ grafit
- szkło

? Dwie identyczne kulki: +4 nC i 0. Po zetknięciu każda ma…
- +4 nC
+ +2 nC
- 0

? Listki elektroskopu się rozchylają, bo…
- mają ładunki różnoimienne
+ mają ładunki jednoimienne
- są obojętne

? Odległość między ładunkami wzrosła 2 razy. Siła…
- zmalała 2 razy
+ zmalała 4 razy
- wzrosła 4 razy

? Naelektryzowany grzebień przyciąga skrawki papieru, bo…
- papier jest naelektryzowany ujemnie
+ w papierze następuje polaryzacja ładunków
- działa grawitacja

? Ładunek 1 C to ok.…
+ 6,24·10¹⁸ elektronów
- 1,6·10⁻¹⁹ elektronów
- 1000 elektronów

? Piorunochron…
- przyciąga burzę
+ odprowadza ładunek wyładowania do ziemi
- izoluje dach
:::

## 15 | Słownik i mosty {#s15}

::: karta -
::: slownik
Ładunek elektryczny q :: wielkość opisująca oddziaływania elektryczne; jednostka 1 C
Ładunek elementarny e :: najmniejszy swobodny ładunek, ≈ 1,6·10⁻¹⁹ C
Indukcja elektrostatyczna :: przesunięcie ładunków w przewodniku pod wpływem zewnętrznego ładunku
Polaryzacja :: przesunięcie ładunków w cząsteczkach izolatora
Uziemienie :: połączenie ciała z ziemią przewodnikiem
Elektroskop :: przyrząd do wykrywania ładunku
Szereg tryboelektryczny :: kolejność materiałów wg skłonności do oddawania elektronów
:::
:::

::: karta new | Mosty
- **Chemia N03 Kwasy** — jony, dysocjacja, przewodzenie prądu przez roztwory, elektroliza.
- **Chemia N04 Sole** — kryształy jonowe, rola wody (ε<sub>r</sub> ≈ 80).
- **Fizyka — dalej**: prąd elektryczny (ruch ładunków), napięcie, prawo Ohma (opór właściwy ρ z tej lekcji), magnetyzm.
:::
