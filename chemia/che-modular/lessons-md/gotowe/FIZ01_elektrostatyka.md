---
kod: FIZ-01
uid: 
tytul: Elektrostatyka
opis: Ładunek i jego budowa atomowa · elektryzowanie przez tarcie, dotyk i indukcję · przewodniki i izolatory · elektroskop i uziemienie · prawo Coulomba i pole elektryczne · warstwa konkursowa
stan: W1 FULL — Claude Haiku 5.5, 2026-10-14 (pełny przegląd linia po linii; poprawki w AUDYCIE W1 FULL na końcu; audyt W2 zewnętrzny — poprawki 2026-10-14)
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
- <b>„Szkło w jedwabiu — plus, ebonit z suknem — minus”</b>: szkło + jedwab → szkło (+); ebonit + sukno → ebonit (−).
- <b>„Dwa razy dalej — cztery razy słabiej”</b> (siła ∝ 1/r²): 3× dalej → 9× słabiej.
- <b>„Listki mówią ILE, nie JAKI”</b> — elektroskop pokazuje wielkość ładunku, nie znak.
- <b>Indukcja — 4 kroki „ZUZO”</b>: <b>Z</b>bliż pręt → <b>U</b>ziem → <b>Z</b>abierz palec → <b>O</b>ddal pręt ⇒ ładunek przeciwny do pręta.
- <b>„Ostrze zbiera”</b> — na ostrzach przewodnika gromadzi się najwięcej ładunku (piorunochron).
- <b>„Kto stoi wcześniej, ten oddaje”</b> — w szeregu tryboelektrycznym materiał bliżej „+” oddaje elektrony i sam zostaje dodatni.
- <b>„Dotyk dzieli, indukcja rozsuwa”</b> — przy dotyku ładunek przechodzi na drugie ciało (ten sam znak); przy indukcji tylko się rozsuwa, a trwały ładunek przeciwny daje dopiero uziemienie.
- <b>„Przed = po”</b> — przy każdym zadaniu z kulami sprawdź na końcu: suma ładunków przed zetknięciem równa się sumie po zetknięciu.
- <b>„Mikro to milionowa, nano to miliardowa”</b> — 1 µC = 10⁻⁶ C, 1 nC = 10⁻⁹ C; zamień na kulomby, zanim policzysz elektrony.
:::

## 0b | Wykład — elektrostatyka od zera [[basic:E8]] {#s0b}

::: karta core | Część 1 — czym jest ładunek elektryczny
Wszystko wokół ciebie — powietrze, szkło, plastik, twoje ciało — składa się z atomów. W środku atomu jest maleńkie **jądro** z **protonami** i **neutronami**, a dookoła jądra poruszają się **elektrony**. Proton i elektron mają cechę, której nie ma neutron: **ładunek elektryczny**. Ładunek to właściwość cząstki, przez którą cząstka oddziałuje z innymi naładowanymi cząstkami — odpycha je albo przyciąga, nawet jeśli się nie dotykają.

Są dwa rodzaje ładunku. Benjamin Franklin w XVIII wieku nazwał jeden rodzaj ładunku dodatnim, a drugi ujemnym (chodziło o naelektryzowane szkło i żywicę). Dopiero później, gdy odkryto cząstki, przypisano tę konwencję: proton ma ładunek **dodatni (+)**, a elektron **ujemny (−)**. Wartości są równe: proton ma +e, elektron −e, gdzie e ≈ 1,6·10⁻¹⁹ C to **ładunek elementarny**. Neutron ma ładunek 0. Zwykły atom ma tyle samo protonów co elektronów, więc ładunki się znoszą i atom jest **obojętny**.

Ciało obojętne **nie jest ciałem bez ładunków** — ma ich ogromnie dużo, ale dodatnie i ujemne dokładnie się równoważą, jak wpłaty i wypłaty, które dają saldo zero. „Naelektryzować ciało” znaczy zaburzyć tę równowagę, czyli zmienić saldo.
:::

::: karta core | Część 2 — co się przemieszcza i skąd bierze się „plus”
Protony siedzą głęboko w jądrach i trzymają je siły jądrowe — zwykłe doświadczenia ich nie ruszą. Elektrony na zewnątrz atomu trzymają się słabiej i mogą przejść z jednego ciała na drugie. Dlatego **przy elektryzowaniu przemieszczają się wyłącznie elektrony**.

- Ciało, które **przyjęło** elektrony, ma ich więcej niż protonów → ładunek **ujemny**.
- Ciało, które **oddało** elektrony, ma więcej protonów niż elektronów → ładunek **dodatni**, choć nie dostało żadnego protonu.

Wielkość ładunku wynika z liczby nadmiarowych albo brakujących elektronów: q = n · e. W szkolnym opisie ciało zyskuje lub traci całkowitą liczbę elektronów, dlatego jego ładunek jest całkowitą wielokrotnością e. Jednostką jest **kulomb (1 C)** — to ładunek ok. 6,24·10¹⁸ elektronów, więc w doświadczeniach szkolnych mamy do czynienia z nanokulombami (10⁻⁹ C) i mikrokulombami (10⁻⁶ C).
:::

::: karta core | Część 3 — trzy sposoby elektryzowania i jedna ważna zasada
**Tarcie.** Gdy pocierasz o siebie dwa różne materiały, część elektronów przechodzi z materiału, który trzyma je słabiej, na ten, który trzyma je mocniej. Powstają dwa ładunki o **przeciwnych znakach i równych wartościach**: jedno ciało ma „plus”, drugie „minus”. Który materiał oddaje elektrony, mówi **szereg tryboelektryczny** (sekcja 2).

**Dotyk.** Gdy naelektryzowany przewodnik dotknie obojętnego przewodnika, elektrony przechodzą z jednego na drugi i oba mają potem ładunek **tego samego znaku**. Dwie identyczne kule dzielą ładunek po równo.

**Indukcja (wpływ).** Naelektryzowane ciało można tylko **zbliżyć**, nie dotykając. W przewodniku swobodne elektrony przesuwają się: ładunek na bliższym końcu jest przeciwny do ładunku zbliżonego ciała, na dalszym — taki sam. Po oddaleniu ciała wszystko wraca. Trwałe naelektryzowanie otrzymujemy dopiero, gdy na chwilę połączymy przewodnik z ziemią (uziemienie) — metoda „ZUZO” z sekcji 7.

We wszystkich trzech sposobach działa **zasada zachowania ładunku**: w układzie izolowanym suma ładunków (ze znakami!) nie zmienia się. Ładunek nie powstaje z niczego i nie znika — tylko przechodzi z ciała na ciało. Dlatego zadania o ładunkach rozwiązujesz zawsze tak samo: zapisz ładunki ze znakami, dodaj, sprawdź, czy suma po jest równa sumie przed.
:::

::: karta core | Część 4 — jak ładunki na siebie działają
Ładunki **jednoimienne** się odpychają, **różnoimienne** przyciągają, i dzieje się to na odległość. Siła jest tym większa, im większe są ładunki, a maleje z **kwadratem odległości**: dwa razy dalej — cztery razy słabiej. Siły są wzajemne i równe co do wartości (III zasada dynamiki).

Naelektryzowane ciało przyciąga też ciała **obojętne** (skrawki papieru, strumień wody). Jego ładunek przesuwa ładunki w obojętnym ciele — w przewodniku swobodne elektrony (indukcja), w izolatorze ładunki wewnątrz cząsteczek (polaryzacja). Bliższy koniec dostaje ładunek przeciwny, więc przyciąganie (bliżej, więc silniej) wygrywa z odpychaniem (dalej, więc słabiej).

To, jak łatwo ładunek się przemieszcza, zależy od materiału. W **przewodniku** (metale, grafit, roztwory soli, ciało człowieka) są swobodne nośniki ładunku i w stanie równowagi nadmiarowy ładunek rozmieszcza się na powierzchni przewodnika. W **izolatorze** (szkło, guma, plastik, suche powietrze) nośników swobodnych nie ma i ładunek zostaje tam, gdzie powstał — dlatego izolatory elektryzuje się łatwo przez tarcie.

**Elektroskop** to przyrząd, w którym dwa metalowe listki dostają ładunek tego samego znaku i odpychają się — im większy ładunek, tym większe rozchylenie. Pokazuje *ile*, ale nie *jaki* znak; znak ustala się przez porównanie z ciałem o znanym ładunku. **Uziemienie** to połączenie z ziemią: Ziemia jest tak wielkim zbiornikiem ładunku, że może oddać ciału elektrony albo je przyjąć, a ciało po uziemieniu zostaje praktycznie rozładowane (ma potencjał Ziemi).
:::

::: karta understand | Część 5 — dla chętnych: pole elektryczne
Skoro ładunki działają na siebie na odległość, fizycy mówią, że każdy ładunek wytwarza wokół siebie **pole elektryczne**: w każdym punkcie przestrzeni można ustalić, jaka siła działałaby na jednostkowy dodatni ładunek próbny. Ta siła na jednostkę ładunku to **natężenie pola** E = F/q (jednostka N/C). Dla ładunku punktowego |E| = k·|Q|/r². Prawo Coulomba i natężenie pola opisują to samo zjawisko: pierwsze mówi, co dzieje się między dwoma ładunkami, drugie — co każdy z nich robi z przestrzenią wokół siebie.
:::

::: karta basic | Jak pracować z lekcją
1. Zrób diagnozę startową (sekcja 0a) i przeczytaj ten wykład.
2. Przejdź sekcje 1–7 po kolei — każda ma krótkie „W skrócie”.
3. Po każdej sekcji rozwiąż odpowiednie ćwiczenia (sekcja 12) i zajrzyj do kliniki błędów (sekcja 11).
4. Sekcje 8–9 są dla E8+ i LO. Warstwa konkursowa to sekcje 11b, 12b i 12c.
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
**Ładunek elementarny** jest podstawową jednostką kwantowania ładunku: ładunki swobodnych cząstek są całkowitymi wielokrotnościami e, a nie „najmniejszym swobodnym ładunkiem” w każdym kontekście: e = <span data-fiz="e">1,602·10⁻¹⁹ C</span>. Elektron ma ładunek −e, proton +e. Każdy ładunek ciała jest jego wielokrotnością:

$$ q = n · e

1 kulomb to ładunek ok. **6,24·10¹⁸** elektronów. To dużo — przy pocieraniu balonu przenosimy zwykle nanokulomby (10⁻⁹ C), czyli miliardy elektronów.

> Masa elektronu: m<sub>e</sub> = <span data-fiz="me">9,11·10⁻³¹ kg</span> — ok. 1836 razy mniej niż protonu.
:::

::: karta new | Most do chemii
**Jon** to atom (lub grupa atomów), który oddał lub przyjął elektrony: Na → Na⁺ + e⁻, Cl + e⁻ → Cl⁻. Ten sam mechanizm co przy elektryzowaniu — tylko na poziomie pojedynczych atomów. Atomy pierwiastków o dużej **elektroujemności** (Cl, O, F) chętnie przyjmują elektrony.
:::

@klocek przeniesienie-protonu | Chemia: jony w roztworze — przeniesienie protonu H⁺
@opis Schemat cząsteczki kwasu w wodzie: po kliknięciu widać, jak jon H⁺ (proton) przeskakuje z cząsteczki kwasu na cząsteczkę wody, tworząc jon H₃O⁺ i jon reszty kwasowej. Wniosek: kwas oddaje proton, a woda go przyjmuje; to ten sam ruch ładunku dodatniego, który w elektrostatyce nie jest przenoszeniem elektronów.

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
@opis Dwa ciała pocierane o siebie: strzałki pokazują, które ciało oddaje elektrony, a które je przyjmuje, oraz przy wahadełku widać, jak naładowany przedmiot przyciąga lekką kulkę. Wniosek: tarcie przenosi elektrony, a ciało, które je traci, staje się dodatnie.

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
@opis Wahadełko elektrostatyczne: naładowany pręt przyciąga obojętną kulkę, po dotknięciu kulka odchyla się od pręta (odpycha się). Wniosek: po zetknięciu kulka ma ładunek tego samego znaku co pręt, a odpychanie dowodzi jednakowego znaku ładunków.

## 4 | Przewodniki i izolatory {#s4}

::: karta core | Różnica
**Przewodnik** zawiera swobodne nośniki ładunku: w metalach i graficie — **elektrony swobodne**, w roztworach i w ciele człowieka — **jony**. W stanie równowagi nadmiarowy ładunek przewodnika znajduje się na jego powierzchni; największa gęstość jest przy ostrzach.

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
@opis Pręt przewodnika i pręt izolatora z naładowanym końcem: na przewodniku ładunek szybko rozpływa się po całej długości, na izolatorze pozostaje w miejscu dotyku. Wykres pokazuje czas rozpływu. Wniosek: przewodnik szybko przewodzi ładunek, izolator go nie przewodzi.

@klocek tester-przewodnictwa | Chemia: przewodzenie prądu przez roztwory (elektrolity)
@opis Model z lekcji o kwasach: tester przewodnictwa (bateria, żarówka, dwie elektrody) zanurzany w różnych roztworach — żarówka świeci w roztworach elektrolitów, a w wodzie destylowanej czy roztworze cukru nie. Wniosek: w roztworach ładunek przenoszą jony, więc przewodzą tylko roztwory, w których są jony.

::: karta understand | W skrócie — przewodnik czy izolator?
Pytanie rozstrzygające: **czy w materiale są swobodne nośniki ładunku?** Tak (elektrony swobodne w metalach i graficie, jony w roztworach i w ciele człowieka) — to przewodnik, a nadmiarowy ładunek rozmieszcza się na powierzchni ciała. Nie — to izolator i ładunek zostaje w miejscu. Różnica jest ogromna: opór właściwy miedzi i teflonu dzieli ok. 30 rzędów wielkości. Półprzewodniki (krzem) są pośrodku, a ich przewodnictwo można kształtować domieszkami.
:::

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
@opis Dwie kule z ładunkami: po dotknięciu ładunek dzieli się między nimi. Przy identycznych kulach dzieli się po równo; przy różnych proporcjonalnie do promienia. Pokazano też uziemienie i liczbę elektronów (n = q / e). Wniosek: w każdym zdarzeniu ładunek jest zachowany, zmienia się tylko jego rozkład.
:::

::: karta extra | Uziemienie
Ziemia to ogromny przewodnik. Połączenie z nią (przewód, dotknięcie ręką) praktycznie **rozładowuje** ciało: nadmiar elektronów odpływa do ziemi albo brakujące z niej napływają.
:::

## 5a | Wykład: zasada zachowania ładunku, obliczenia w kulombach i uziemienie [[basic:E8]] [[extra:LO]] {#s5a}

::: karta core | Najpierw nazwa: zasada zachowania ładunku
Prawo, które tu stosujemy, to **zasada zachowania ładunku elektrycznego**: w układzie izolowanym (bez wymiany ładunku z otoczeniem) **suma ładunków jest stała**. Ładunku nie tworzymy ani nie niszczymy — elektrony tylko przechodzą z ciała na ciało.

$$ q₁ + q₂ + … = q₁′ + q₂′ + … = const

> Przy zetknięciu przewodników elektrony płyną tak długo, aż **potencjały się wyrównają** (rozszerzenie LO poniżej). To ona wyjaśnia, dlaczego identyczne kule dzielą się ładunkiem po równo, a uziemienie rozładowuje ciało.
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
@opis Bilans ładunku dla dwóch kul: stan „przed” i „po” pokazany kafelkami + i − oraz liczbą elektronów, która przeszła z jednej kuli na drugą (dotyk, uziemienie). Wniosek: suma ładunków przed i po jest taka sama, a zmienia się tylko ich rozmieszczenie.
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
@opis Elektroskop z listkami: po naładowaniu listki odchylają się od siebie, a przy dotknięciu uziemionego przewodnika opadają. Wykres i wskazania pokazują rozkład ładunku. Wniosek: odchylenie listków świadczy o obecności ładunku, ale nie pokazuje jego znaku.

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
<table><thead><tr><th>Gdzie</th><th>Co się dzieje</th></tr></thead><tbody><tr><td>piorunochron</td><td>chmura indukuje ładunek w ostrzu; wyładowanie trafia w piorunochron i spływa przewodem do ziemi — to kontrolowana droga prądu; piorunochron nie gwarantuje trafienia w każde wyładowanie, a instalację projektuje się zgodnie z normami</td></tr><tr><td>burza</td><td>ładunki rozdzielają się w chmurze (zderzenia kryształków lodu); piorun przenosi zwykle kilka–kilkadziesiąt kulombów (orientacyjnie) w ułamku sekundy</td></tr><tr><td>kserograf, drukarka laserowa</td><td>naelektryzowany bęben przyciąga toner tylko w miejscach obrazu</td></tr><tr><td>filtry elektrostatyczne</td><td>pył w kominie elektrowni zostaje naładowany i osiada na elektrodach</td></tr><tr><td>malowanie proszkowe / natryskowe</td><td>naładowane krople farby lecą do uziemionego elementu i pokrywają go równo, także od tyłu</td></tr><tr><td>stacja paliw, cysterna</td><td>iskra może zapalić opary — cysterny i dystrybutory się uziemia</td></tr><tr><td>elektronika</td><td>wyładowanie z ciała (kilka tysięcy woltów — orientacyjnie!) niszczy układy scalone — opaska antystatyczna, uziemione stanowisko</td></tr><tr><td>klatka Faradaya</td><td>wewnątrz zamkniętego przewodnika pole elektryczne jest zerowe — samochód chroni przed piorunem, mikrofalówka zatrzymuje fale</td></tr></tbody></table>
:::
:::

@model fiz-elektroskop-v01 | Scenariusz: elektryzowanie przez indukcję w 5 krokach | Silnik CHE · fizyka · otwiera się w oknie
@opis Pięć kroków elektryzowania przez indukcję: naładowany pręt zbliża się do elektroskopu, uziemienie odprowadza ładunek jednego znaku, uziemienie zostaje usunięte i pręt oddalony. Na końcu elektroskop ma ładunek przeciwnego znaku niż pręt. Wniosek: indukcja pozwala naładować ciało bez dotyku, a elektrony przechodzą tylko przez uziemienie.

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

::: karta extra | Jak czytać wzór Coulomba?

Wzór F = k·|q₁·q₂|/r² podaje wartość siły. Moduły ładunków są w wartości bezwzględnej, więc wynik F jest zawsze dodatni. Rodzaj oddziaływania określa znak iloczynu q₁·q₂: dodatni — odpychanie, ujemny — przyciąganie. Nie wpisuj ujemnej wartości siły tylko dlatego, że ładunki się przyciągają.
:::

@model fiz-coulomb-v01 | Prawo Coulomba: siły, linie pola, ośrodek, wykres F(r) | k i εr z silnika
@opis Wykres siły Coulomba F(r) dla dwóch ładunków: siła maleje z kwadratem odległości, a zmiana ośrodka (εr) osłabia oddziaływanie. Suwaki zmieniają wartości ładunków i odległość. Wniosek: F = k·q₁·q₂ / (εr·r²) i siła rośnie, gdy ładunki rosną, a maleje, gdy odległość rośnie.

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

Dla ładunku punktowego |E| = k·|Q| / r²; zwrot pola: od ładunku dodatniego, ku ujemnemu. **Linie pola** zaczynają się na ładunkach dodatnich i kończą na ujemnych; gęstsze linie — silniejsze pole.
:::

::: karta basic | Rodzaje pól
- **centralne** — wokół ładunku punktowego (linie radialne),
- **jednorodne** — między dwiema równoległymi płytami o przeciwnych ładunkach (linie równoległe, E = U/d),
- wewnątrz przewodnika w równowadze E = 0 (klatka Faradaya); ładunek siedzi na powierzchni, najgęściej na **ostrzach**.
:::

@model fiz-coulomb-v01 | Linie pola dwóch ładunków (włącz/wyłącz) | Silnik CHE · fizyka · otwiera się w oknie
@opis Linie pola dwóch ładunków, które można włączać i wyłączać: linie wychodzą z ładunku dodatniego i wchodzą do ujemnego, a ich gęstość pokazuje siłę pola. Wniosek: linie pola pokazują kierunek i względną wartość siły działającej na ładunek próbny.

::: adv | Potencjał, napięcie, kondensator, elektronowolt | poziom akademicki · poza maturą rozszerzoną
**Potencjał** V = k·Q/r [V = J/C]; **napięcie** U = V<sub>A</sub> − V<sub>B</sub> = W/q. **Kondensator**: C = Q/U [F]; płaski: C = ε₀ε<sub>r</sub>S/d, energia W = ½CU². **Elektronowolt**: 1 eV = 1,602·10⁻¹⁹ J — energia elektronu przyspieszonego napięciem 1 V. Prawo Gaussa: strumień E przez powierzchnię zamkniętą = Q<sub>wewn</sub>/ε₀.
:::

::: karta understand | W skrócie — pole elektryczne
Pole to sposób opisu: zamiast pytać, jak ładunek A działa na B, pytamy, jakie pole wytwarza A i co to pole zrobi z dowolnym ładunkiem. Natężenie pola E = F/q mówi, jaka siła działa na 1 C ładunku próbnego (N/C). Linie pola wychodzą z „+”, wchodzą w „−”; im gęstsze, tym silniejsze pole. Siła na ładunek q w polu E wynosi F = q·E (zwrot zgodny z E dla q > 0, przeciwny dla q < 0).
:::

::: karta extra | Ciekawostka — kropla oleju i ładunek elementarny
W 1909 roku Robert Millikan obserwował naładowane kropelki oleju w polu elektrycznym: dobierał takie natężenie pola, przy którym kropla wisiała w miejscu (siła elektryczna równoważyła ciężar). Ładunki kropel okazywały się **całkowitymi wielokrotnościami** tej samej, najmniejszej wartości — ładunku elementarnego e. Za badania nad ładunkiem elementarnym dostał Nagrodę Nobla w 1923 roku.
:::

> **BHP ogólne:** nie wykonuj doświadczeń z wysokim napięciem, iskrami, paliwami i rozpuszczalnikami bez nadzoru dorosłego i odpowiedniego wyposażenia. Nie zbliżaj naładowanych przedmiotów do instalacji elektrycznej, urządzeń medycznych ani łatwopalnych oparów.

::: karta understand | Gdzie gromadzi się ładunek?

W stanie równowagi elektrostatycznej nadmiar ładunku przewodnika leży na jego powierzchni, a wewnątrz pole jest zerowe. Na ostrzach i w miejscach o małym promieniu krzywizny gęstość ładunku jest większa niż na płaskich powierzchniach, dlatego ostre końcówki łatwo jonizują powietrze.

Nie oznacza to, że cały ładunek zawsze skupia się na samym ostrzu. Rozkład zależy od kształtu przewodnika i od obecności innych ładunków.
:::

## 10 | Doświadczenia {#s10}

@model fiz-elektryzowanie-v01 | Pracownia: tarcie i wahadełko | Silnik CHE · fizyka · otwiera się w oknie
@opis Pracownia tarcia i wahadełka: wybierz materiały, pocieraj je i sprawdzaj, które ciało się naładowało i jak zachowuje się wahadełko. Wniosek: znak ładunku zależy od pary materiałów, a przenoszą się elektrony.

@model fiz-elektroskop-v01 | Pracownia: elektroskop | Silnik CHE · fizyka · otwiera się w oknie
@opis Pracownia elektroskopu: można naładować elektroskop dotykiem lub indukcją, uziemić go i obserwować odchylenie listków. Wniosek: odchylenie listków zależy od ilości i rozmieszczenia ładunku, a nie od jego znaku.

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
| „Przy pocieraniu przechodzą protony.” | Przechodzą tylko elektrony. | Protony są uwięzione w jądrach atomów. |
| „Ciało dodatnie ma nadmiar protonów, które dostało.” | Ciało dodatnie ma niedobór elektronów. | Liczba protonów się nie zmienia — ciało oddało elektrony. |
| „Tarcie wytwarza ładunek.” | Tarcie rozdziela ładunek. | Zasada zachowania ładunku: ile jedno ciało ma +, tyle drugie −. |
| „Skoro ciała się przyciągają, oba są naelektryzowane.” | Przyciąganie może zachodzić między ciałem naładowanym i obojętnym. | Polaryzacja / indukcja. Pewnym dowodem jest tylko odpychanie. |
| „Elektroskop pokazuje, czy ładunek jest + czy −.” | Elektroskop pokazuje tylko, czy (i ile) ładunku jest. | Znak ustala się ciałem o znanym ładunku. |
| „2× większa odległość → siła 2× mniejsza.” | 2× większa odległość → siła 4× mniejsza. | F ∝ 1/r² (prawo Coulomba). |
| „Metalu nie da się naelektryzować przez tarcie.” | Da się, jeśli jest odizolowany (trzymany za izolującą rączkę). | W ręce ładunek natychmiast spływa przez ciało do ziemi. |
| „Piorunochron przyciąga pioruny, więc jest niebezpieczny.” | Piorunochron chroni budynek. | Bezpiecznie odprowadza ładunek wyładowania przewodem do ziemi. |
| „Przy indukcji przewodnik zyskuje ładunek.” | Przy indukcji ładunek tylko się rozsuwa (suma = 0). | Trwały ładunek pojawia się dopiero po uziemieniu i jego odłączeniu. |
| „Ciało obojętne nie ma żadnych ładunków.” | Ma tyle samo ładunku dodatniego i ujemnego, a ich suma wynosi 0. | Atomy zawierają cząstki naładowane; obojętność to bilans, nie brak ładunków. |
| „Przy dotyku dwóch kul ładunek zawsze dzieli się po równo.” | Po równo — tylko dla kul identycznych (ta sama wielkość i materiał). | Podział zależy od rozmiarów przewodników: większa kula bierze więcej ładunku (sekcja 5a). |
| „Izolatora nie da się naelektryzować.” | Izolatory elektryzują się najłatwiej, tyle że ładunek nie rozpływa się po nich. | Brak swobodnych nośników zatrzymuje ładunek tam, gdzie powstał. |
| „Większy ładunek działa na mniejszy większą siłą.” | Obie siły mają tę samą wartość. | III zasada dynamiki; we wzorze Coulomba występuje iloczyn q₁·q₂, symetryczny względem obu ładunków. |
| „Ładunek elementarny e jest ujemny, bo to ładunek elektronu.” | e ≈ 1,6·10⁻¹⁹ C jest dodatnie; ładunek elektronu to −e. | e to wartość najmniejszego ładunku, a znak dopisujemy osobno. |
| „1 nC = 10⁻⁶ C.” | 1 nC = 10⁻⁹ C, a 10⁻⁶ C to 1 µC. | Nano to miliardowa część, mikro — milionowa; zamień na kulomby przed liczeniem elektronów. |
| „W przewodniku ładunek zbiera się w środku.” | W równowadze ładunek siedzi na powierzchni, najgęściej na ostrzach. | Ładunki jednoimienne się odpychają i oddalają się od siebie tak daleko, jak się da. |
| „Wewnątrz każdego przewodnika zawsze nie ma pola.” | W przewodniku w stanie równowagi elektrostatycznej pole wewnątrz jest zerowe, ale tylko w równowadze. | Swobodne ładunki przesuwają się, aż zrównoważą pole wewnątrz. |
| „Uziemienie zawsze zabiera elektrony.” | Elektrony mogą odpływać do Ziemi albo napływać z Ziemi. | Kierunek zależy od znaku ciała (metoda ZUZO). |
| „Ujemna wartość siły oznacza przyciąganie.” | Wartość siły jest dodatnia; rodzaj oddziaływania wynika ze znaku iloczynu q₁·q₂. | Wzór Coulomba podaje moduł siły. |
| „Listki opadły po zbliżeniu pręta, więc pręt jest ujemny.” | Opadnięcie listków oznacza ładunek różnoimienny względem elektroskopu — o znaku pręta decyduje znak ładunku elektroskopu. | Znak pręta trzeba wywnioskować ze znaku ładunku elektroskopu i z zachowania listków. |
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
@opis Model kul dla przykładu 2: uczeń ustawia kule, dotyka ich i porównuje ładunki przed i po. Wniosek: w każdym kroku ładunek całkowity jest zachowany.

@model fiz-coulomb-v01 | Sprawdź przykłady 3–5 w modelu Coulomba | Silnik CHE · fizyka · otwiera się w oknie
@opis Model Coulomba do przykładów 3–5: ustawiając ładunki i odległość z treści, odczytuje się siłę i sprawdza wpływ zmiany r i ośrodka na wykresie F(r). Wniosek: rachunek z prawa Coulomba i odczyt z modelu mają dać ten sam wynik.

## 11b | Pary do odróżniania [[exam:KONKURS]] {#s11b}

::: nie-myl | Pojęcia z poziomu E8
- Ciało obojętne ≠ ciało bez ładunków — obojętne ma ładunki, ale ich suma wynosi 0; test rozstrzygający: policz protony i elektrony (jest ich tyle samo) albo zsumuj ładunki ze znakami.
- Elektryzowanie przez dotyk ≠ elektryzowanie przez indukcję — przy dotyku ciała się stykają i końcowy znak jest taki sam jak znak ciała naładowanego, przy indukcji nie ma styku, a po uziemieniu znak jest przeciwny; test rozstrzygający: czy ciała się dotykały i jaki jest znak końcowy względem pręta?
- Przewodnik ≠ izolator — przewodnik ma swobodne nośniki, więc ładunek rozpływa się po przewodniku i w równowadze gromadzi się na jego powierzchni, a izolator trzyma ładunek w miejscu; test rozstrzygający: czy elektroskop rozładuje się po dotknięciu go tym przedmiotem trzymanym w ręce?
- Polaryzacja ≠ indukcja — polaryzacja to przesunięcie ładunków wewnątrz cząsteczek izolatora, indukcja to ruch swobodnych elektronów po przewodniku; test rozstrzygający: czy materiał ma swobodne nośniki ładunku?
- Dowód odpychaniem ≠ dowód przyciąganiem — odpychanie dowodzi ładunków tego samego znaku, a przyciąganie zachodzi też z ciałem obojętnym; test rozstrzygający: czy ciała odpychają się po zetknięciu lub przy zbliżeniu drugim ciałem o znanym znaku?
- Uziemienie ≠ odizolowanie — uziemienie to połączenie przewodzące z ziemią, które pozwala ładunkowi odpłynąć lub napłynąć; test rozstrzygający: czy istnieje ścieżka przewodząca do ziemi?
- Elektroskop ≠ przyrząd do ustalania znaku — pokazuje, ile ładunku jest na nim, nie jaki ma znak; test rozstrzygający: czy na podstawie samego kąta listków da się odróżnić + od −? (Nie.)
:::

::: nie-myl | Pojęcia z poziomu olimpijskiego
- Ładunek elementarny e ≠ ładunek elektronu — e jest dodatnie (≈ 1,6·10⁻¹⁹ C), elektron ma −e; test rozstrzygający: sprawdź znak.
- Natężenie pola E ≠ siła F — E = F/q nie zależy od ładunku próbnego, F tak; test rozstrzygający: jednostka (N/C a N) i zmiana wyniku po zastąpieniu q przez 2q (F podwaja się, E nie zmienia się).
- Potencjał V ≠ napięcie U ≠ natężenie E — V opisuje jeden punkt (J/C), U to różnica potencjałów dwóch punktów, E to zmiana potencjału na odległość (V/m); test rozstrzygający: czy mowa o jednym punkcie, o dwóch punktach, czy o zmianie na metr?
- Zasada zachowania ładunku ≠ kwantyzacja ładunku — pierwsza mówi, że suma jest stała, druga, że swobodny ładunek jest wielokrotnością e; test rozstrzygający: czy zdanie dotyczy sumy przed i po, czy dozwolonych wartości ładunku?
- Siła Coulomba ≠ siła grawitacji — obie maleją jak 1/r², ale elektryczna może odpychać i dla pary proton–elektron jest ok. 10³⁹ razy większa; test rozstrzygający: czy siła może być odpychająca?
- Kontakt przewodnika z przewodnikiem ≠ kontakt przewodnika z naładowanym izolatorem — przewodniki wyrównują potencjały i dzielą ładunek, izolator oddaje tylko ładunek z miejsca styku; test rozstrzygający: czy ładunek może swobodnie przepływać po obu ciałach?
- Klatka Faradaya ≠ osłona od każdego pola — osłania od pól elektrycznych i od fal elektromagnetycznych, ale nie od stałego pola magnetycznego; test rozstrzygający: czy pole zmienia się w czasie albo jest elektryczne?
:::

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

<li>Siła przyciągania Na⁺ i Cl⁻ maleje εr razy; w wodzie ~80× — energia cieplna i hydratacja wystarczają, by rozdzielić jony; w benzynie (εr ≈ 2) siła spada tylko ok. 2 razy, a cząsteczki benzyny nie są polarne i nie otaczają jonów, więc sól się nie rozpuszcza.</li>
:::
:::
:::

### Dodatkowe zadania — trzy ładunki, przyciąganie, jednostki (W1, 2026-10-14)

1. Ładunki leżą na prostej: q₁ = +2 µC w punkcie 0, q₂ = +2 µC w punkcie 0,3 m, q₃ = −2 µC w punkcie 0,6 m. Oblicz siłę wypadkową na ładunek q₂. **Klucz:** od q₁ odpychanie w prawo, F₁₂ = 8,99·10⁹·(2·10⁻⁶)²/0,3² ≈ 0,40 N; od q₃ przyciąganie w prawo, też ≈ 0,40 N. Wypadkowa ≈ 0,80 N, w prawo.
2. Naelektryzowana pałeczka przyciąga kawałek papieru. Czy papier jest naelektryzowany? **Klucz:** nie wiadomo. Przyciąganie wystarcza, by wykryć obcy ładunek lub polaryzację obojętnego ciała, ale nie dowodzi naelektryzowania papieru.
3. Zamień na kulomby: 3 µC, 250 nC, 4 pC. **Klucz:** 3·10⁻⁶ C; 2,5·10⁻⁷ C; 4·10⁻¹² C.

---

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

**Zadania z kluczem i punktacją**

::: karta exam | Zadanie 1 (3 pkt) — Szkło, jedwab, ebonit
Fragment szeregu tryboelektrycznego (od materiału, który najłatwiej oddaje elektrony): szkło — wełna — jedwab — bawełna — ebonit — PVC. Szklaną pałeczkę potarto jedwabiem, a ebonitową — wełną.

a) Podaj znak ładunku szkła i jedwabiu po potarciu. (1 pkt)
b) Wskaż, który materiał przyjął elektrony: wełna czy ebonit. (1 pkt)
c) Uzasadnij, że po potarciu suma ładunków szkła i jedwabiu jest równa zero. (1 pkt)

::: odp | Pokaż klucz
a) Szkło +, jedwab − (1 pkt) — szkło stoi wcześniej w szeregu, więc oddaje elektrony.
b) Ebonit (1 pkt) — stoi dalej w szeregu niż wełna, więc przyjmuje elektrony, a wełna je oddaje.
c) Elektrony tylko przeszły ze szkła na jedwab: tyle ładunku ujemnego, ile przybyło jedwabiowi, tyle ubyło szkłu; ładunki są równe co do wartości i przeciwne co do znaku, więc suma wynosi 0 (zasada zachowania ładunku). (1 pkt)
:::
:::

::: karta exam | Zadanie 2 (3 pkt) — Dotyk dwóch kul
Dwie identyczne metalowe kule mają ładunki: A = +10 µC, B = −4 µC. Zetknięto je i rozsunięto.

a) Oblicz ładunek każdej kuli po zetknięciu. (1 pkt)
b) Podaj, która kula przyjęła, a która oddała elektrony. (1 pkt)
c) Oblicz, ile elektronów przeszło (e = 1,6·10⁻¹⁹ C). (1 pkt)

::: odp | Pokaż klucz
a) q′ = (10 + (−4))/2 = +3 µC każda (1 pkt).
b) A: +10 → +3 µC, ładunek dodatni zmalał, więc A przyjęła elektrony; B: −4 → +3 µC, ładunek ujemny zniknął i został dodatni, więc B oddała elektrony (1 pkt).
c) Przeszedł ładunek 7 µC: n = 7·10⁻⁶ / 1,6·10⁻¹⁹ ≈ 4,4·10¹³ elektronów (1 pkt).
:::
:::

::: karta exam | Zadanie 3 (4 pkt) — Elektroskop i dwa pręty
Elektroskop jest naładowany dodatnio — listki są rozchylone. Do jego kulki (bez dotykania) powoli zbliżono pręt naładowany ujemnie.

a) Opisz, co dzieje się z listkami. (1 pkt)
b) Wyjaśnij to, wskazując, które cząstki i w którą stronę się przesunęły. (1 pkt)
c) Co by się stało, gdyby zbliżono pręt naładowany dodatnio? (1 pkt)
d) Do tego samego elektroskopu zbliżono pręt o nieznanym znaku ładunku i listki rozchyliły się bardziej. Podaj znak ładunku pręta i uzasadnij. (1 pkt)

::: odp | Pokaż klucz
a) Listki opadają (kąt maleje) (1 pkt).
b) Ujemny pręt odpycha elektrony swobodne w elektroskopie: przesuwają się z kulki w dół, na listki, i zobojętniają część ich ładunku dodatniego, więc listki się odpychają słabiej (1 pkt).
c) Listki rozchylają się bardziej (1 pkt) — dodatni pręt przyciąga elektrony w górę, na kulkę, więc na listkach przybywa ładunku dodatniego.
d) Dodatni (1 pkt) — rozchylenie rośnie tylko przy ładunku jednoimiennym z ładunkiem elektroskopu.
:::
:::

::: karta exam | Zadanie 4 (4 pkt) — Prawda czy fałsz?
Oceń zdania: napisz P (prawda) albo F (fałsz).

1. Podczas pocierania szklanej pałeczki jedwabiem elektrony przechodzą ze szkła na jedwab. (1 pkt)
2. Ciało naelektryzowane dodatnio przyjęło dodatkowe protony. (1 pkt)
3. Samo rozchylenie listków elektroskopu pokazuje znak ładunku ciała. (1 pkt)
4. Gdy odległość między dwoma ładunkami wzrośnie 2 razy, siła ich oddziaływania zmaleje 4 razy. (1 pkt)

::: odp | Pokaż klucz
1. P (1 pkt) — szkło stoi wcześniej w szeregu i oddaje elektrony.
2. F (1 pkt) — przemieszczają się tylko elektrony; ciało dodatnie ma niedobór elektronów.
3. F (1 pkt) — listki pokazują tylko, ile ładunku jest na elektroskopie, nie jaki ma znak.
4. P (1 pkt) — F ∝ 1/r², więc 2× dalej → 4× mniejsza siła.
:::
:::

::: karta exam | Zadanie 5 (3 pkt) — Siła Coulomba
Dwa małe ładunki: q₁ = 4 µC i q₂ = 5 µC znajdują się w powietrzu w odległości 60 cm (k = 8,99·10⁹ N·m²/C²).

a) Oblicz wartość siły oddziaływania i podaj, czy to odpychanie, czy przyciąganie. (2 pkt)
b) O ile razy zmieni się siła, gdy odległość zmaleje 3 razy? (1 pkt)

::: odp | Pokaż klucz
a) F = k·q₁·q₂/r² = 8,99·10⁹ · 4·10⁻⁶ · 5·10⁻⁶ / 0,6² = 8,99·10⁹ · 2·10⁻¹¹ / 0,36 ≈ 0,5 N (1 pkt za wzór i podstawienie w jednostkach SI, 1 pkt za wynik wraz z określeniem: odpychanie, bo ładunki są jednoimienne).
b) Siła wzrośnie 9 razy (1 pkt), bo F ∝ 1/r², a (1/3)⁻² = 9.
:::
:::

::: karta exam | Zadanie 6 (4 pkt) — Zaplanuj doświadczenie
Uczeń chce sprawdzić, czy rodzaj materiału, którym pociera się balon, wpływa na to, ile skrawków papieru balon przyciągnie.

a) Sformułuj problem badawczy. (1 pkt)
b) Wskaż zmienną niezależną i zmienną zależną. (1 pkt)
c) Podaj dwa warunki, które należy utrzymać stałe. (1 pkt)
d) Opisz próbę kontrolną. (1 pkt)

::: odp | Pokaż klucz
a) Np.: „Czy rodzaj materiału użytego do pocierania balonu wpływa na liczbę przyciągniętych skrawków papieru?” (1 pkt).
b) Niezależna: rodzaj materiału (włosy, wełna, bawełna); zależna: liczba przyciągniętych skrawków (1 pkt).
c) Np. ten sam balon, taka sama liczba i siła potarć, taka sama odległość balonu od skrawków, takie same skrawki papieru, podobna wilgotność powietrza — dowolne dwa (1 pkt).
d) Zbliżenie do skrawków balonu nienaelektryzowanego (przed potarciem): jeśli skrawki leżą nieruchomo, efekt wynika z naelektryzowania (1 pkt).
:::
:::

## 12b | Dla olimpijczyka — wykład pogłębiony i trudne przypadki [[exam:KONKURS]] {#s12b}

::: karta understand | Dla olimpijczyka — kwantyzacja i zachowanie ładunku
Swobodne cząstki mają ładunek będący całkowitą wielokrotnością e. Kwarki mają ładunki ±⅓e i ±⅔e, ale nie występują swobodnie — łączą się w cząstki o ładunku całkowitym: proton (dwa kwarki górne i jeden dolny: ⅔ + ⅔ − ⅓ = +1) i neutron (jeden górny i dwa dolne: ⅔ − ⅓ − ⅓ = 0). Zasada zachowania ładunku dotyczy **sumy**: w zderzeniach cząstek mogą powstawać pary cząstka–antycząstka (np. elektron i pozyton o ładunkach −e i +e), ale suma ładunków pozostaje taka, jak przed zderzeniem. Ładunek jest też niezmienniczy — nie zależy od prędkości ciała, w przeciwieństwie do pędu czy energii. (Poziom ponadpodręcznikowy; do weryfikacji w razie cytowania w pracy.)
:::

::: karta understand | Dla olimpijczyka — siła na ciało obojętne
W polu **jednorodnym** ciało obojętne, które się spolaryzuje, dostaje dwa równe ładunki przeciwnych znaków i siły na nie się znoszą (pozostaje tylko moment obrotowy). Siła przyciągająca pojawia się dopiero w polu **niejednorodnym**, silniejszym bliżej źródła. Dla ciała o polaryzowalności α indukowany moment dipolowy wynosi p = α·E, a siła F = p·dE/dx = α·E·dE/dx — zawsze skierowana w stronę silniejszego pola, niezależnie od znaku ładunku źródła. Dlatego naelektryzowany grzebień przyciąga papier niezależnie od tego, czy jego ładunek jest dodatni, czy ujemny.
:::

::: karta understand | Dla olimpijczyka — kule, powierzchnia i ostrza
Pole na zewnątrz równomiernie naładowanej kuli lub cienkiej powłoki jest takie samo jak pole ładunku punktowego w jej środku, a wewnątrz naładowanej powłoki pole jest zerowe. Dla dwóch połączonych kul ładunki dzielą się tak, że q ∝ R (wyrównanie potencjałów, sekcja 5a). Gęstość powierzchniowa σ = q/(4πR²) jest więc proporcjonalna do 1/R: na mniejszej kuli (a tym bardziej na ostrzu) jest większa, a pole przy powierzchni E = σ/ε₀ — silniejsze. Stąd wyładowania „uciekają” z ostrzy i stąd działa piorunochron.
:::

::: karta understand | Dla olimpijczyka — konwencje i zapisy
**Konwencja szkolna (SI):** e > 0, elektron ma ładunek −e, a stała k = 1/(4π·ε₀) ≈ 8,99·10⁹ N·m²/C². W wielu zadaniach przyjmuje się k ≈ 9·10⁹ N·m²/C² — różnica jest mniejsza niż 0,2%, więc wynik na dwie cyfry znaczące jest ten sam; sprawdź polecenie. **Konwencja alternatywna (CGS):** prawo Coulomba ma postać F = q₁·q₂/r² bez stałej k, a jednostką ładunku jest statkulomb (1 C ≈ 3·10⁹ statkulomba). **Kierunek prądu:** umowny kierunek prądu przyjmuje od „+” do „−”, choć w metalach płyną elektrony w przeciwną stronę — ta umowa pochodzi od Franklina, który nie wiedział, że nośnikami są elektrony.
:::

::: karta understand | Dla olimpijczyka — skąd się bierze elektryzowanie przez tarcie
Mechanizm tryboelektryzacji nie jest do końca wyjaśniony: zależnie od materiałów przenoszone mogą być elektrony, jony, a nawet drobiny materiału. Szereg tryboelektryczny jest regułą doświadczalną, nie prawem fizyki — kolejność zależy od wilgotności, czystości powierzchni, siły nacisku i rodzaju kontaktu. Dlatego różne tabele podają różną kolejność, a w zadaniach należy trzymać się szeregu podanego w poleceniu. (Do weryfikacji: aktualny stan badań.)
:::

::: karta warning | Trudny przypadek 1 — elektroskop i pręt o dużym ładunku
Elektroskop ma ładunek dodatni; zbliżasz pręt o dużym ładunku ujemnym. Najpierw listki opadają, ale gdy pręt jest bardzo blisko, ujemny ładunek pręta spycha do listków więcej elektronów, niż trzeba do zobojętnienia, i listki rozchylają się znowu — tym razem z ładunkiem ujemnym, choć **całkowity ładunek elektroskopu się nie zmienił, zmienił się tylko jego rozkład**. Jak rozstrzygnąć krok po kroku: 1) zbliżaj pręt powoli z daleka; 2) o znaku decyduje to, co dzieje się na początku zbliżania: opadanie → ładunek różnoimienny, rozchylanie → jednoimienny; 3) nie wyciągaj wniosków z pozycji listków przy pręcie bardzo bliskim kulce.
:::

::: karta warning | Trudny przypadek 2 — dotyk przewodnika z naładowanym izolatorem
Ebonitowa pałeczka z ładunkiem −Q dotyka kulki elektroskopu. Czy ładunek podzieli się po równo? Nie. Izolator nie ma swobodnych nośników, więc oddaje tylko ładunek z niewielkiego miejsca styku, a reszta zostaje na pałeczce; wzór (q₁ + q₂)/2 dotyczy wyłącznie identycznych **przewodników**. Rozstrzygnięcie: zapytaj, czy ładunek może swobodnie przepływać po obu ciałach; jeśli nie — wzoru na połowę nie stosuj.
:::

::: karta warning | Trudny przypadek 3 — ten sam algorytm, dwa kierunki przepływu
Indukcja z uziemieniem (ZUZO) działa dla pręta ujemnego i dodatniego, ale elektrony płyną w przeciwne strony. Pręt (−): elektrony **odpływają** do ziemi, elektroskop zostaje (+). Pręt (+): elektrony **napływają** z ziemi, elektroskop zostaje (−). Rozstrzygnięcie: 1) zapisz znak pręta; 2) w przewodniku bliższy koniec ma ładunek przeciwny do pręta, a dalszy — taki sam jak pręt; 3) uziemienie usuwa ten dalszy ładunek: dla pręta (−) elektrony odpływają, dla pręta (+) elektrony napływają i uzupełniają niedobór; 4) po zabraniu uziemienia i oddaleniu pręta zostaje ładunek przeciwny do pręta.
:::

::: karta warning | Trudny przypadek 4 — wniosek z przyciągania i odpychania
Kulka A odpycha naelektryzowany pręt (−), a kulka B go przyciąga. Wniosek pewny: A ma ładunek ujemny (odpychanie dowodzi ładunku jednoimiennego). O B wiadomo tylko tyle, że jest dodatnia albo obojętna. Rozstrzygnięcie: zbliż do B pręt dodatni — jeśli B odpycha, jest dodatnia; jeśli przyciąga, jest obojętna (ujemną wykluczyło już pierwsze zbliżenie).
:::

::: karta warning | Trudny przypadek 5 — ile naprawdę wynosi k?
W jednym zadaniu klucz może używać k = 9·10⁹, w innym 8,99·10⁹, w jeszcze innym 1/(4πε₀). To ta sama stała; różnica liczbowa jest mniejsza niż 0,2%. Rozstrzygnięcie: licz z wartością podaną w poleceniu i podawaj wynik z liczbą cyfr znaczących zgodną z danymi (zwykle 2–3).
:::

## 12c | Zadania konkursowe [[exam:KONKURS]] {#s12c}

::: adv | Zadanie 7 (5 pkt) — Dotyk zmienia siłę | poziom ambitny
Dwie identyczne metalowe kulki o ładunkach +Q i −3Q umieszczono w odległości r = 10 cm; przyciągają się siłą F₀ = 0,27 N. Zetknięto je i ponownie rozsunięto na tę samą odległość r (k = 8,99·10⁹ N·m²/C²).

a) Zapisz F₀ jako funkcję Q, r i k. (1 pkt)
b) Podaj ładunki kulek po zetknięciu i charakter oddziaływania. (1 pkt)
c) Oblicz stosunek F/F₀ i wartość siły F po zetknięciu. (1 pkt)
d) Wyznacz Q (wzór i wartość). (2 pkt)

::: odp | Pokaż klucz
a) F₀ = k·|Q·3Q|/r² = 3kQ²/r² (1 pkt).
b) Suma ładunków: Q + (−3Q) = −2Q, po równo: −Q na każdej kulce; kulki odpychają się, bo ładunki są jednoimienne (1 pkt).
c) F = kQ²/r², więc F/F₀ = 1/3 i F = 0,27/3 = 0,09 N (1 pkt).
d) Z a): Q² = F₀·r²/(3k), czyli Q = r·√(F₀/(3k)) (1 pkt); Q = 0,1 · √(0,27/(3 · 8,99·10⁹)) = 0,1 · √(1,0·10⁻¹¹) ≈ 0,1 · 3,16·10⁻⁶ ≈ 3,2·10⁻⁷ C (1 pkt).
Uzasadnienie: po zetknięciu suma ładunków się zachowuje, a dla identycznych kul dzieli się po równo; iloczyn ładunków spada z 3Q² do Q², więc siła maleje 3 razy, a przyciąganie zmienia się w odpychanie.
:::
:::

::: adv | Zadanie 8 (4 pkt) — Uzasadnij: zawsze przyciąganie | poziom ambitny
Uzasadnij, że naelektryzowane ciało przyciąga obojętną kulkę przewodzącą niezależnie od znaku swojego ładunku. Uwzględnij: rozdzielenie ładunków w kulce, wartości obu ładunków, zależność siły od odległości i rolę znaku ładunku.

::: odp | Pokaż klucz
Po 1 pkt za każdy element:
1. Pod wpływem ładunku ciała swobodne elektrony w kulce się przesuwają (indukcja): po bliższej stronie kulki powstaje ładunek przeciwnego znaku niż ładunek ciała, po dalszej — tego samego znaku.
2. Kulka pozostaje obojętna jako całość, więc ładunki po obu stronach mają równe wartości.
3. Siła maleje z kwadratem odległości, więc na bliższy ładunek (przeciwnoimienny) działa siła przyciągania większa niż siła odpychania na dalszy.
4. Wypadkowa jest przyciągająca; zmiana znaku ładunku ciała odwraca znaki obu ładunków w kulce, więc obie siły zmieniają zwrot, a wypadkowa nadal jest przyciągająca.
Uzasadnienie: wniosek nie zależy od znaku ładunku ciała, bo znak wpływa jednocześnie na obie siły.
:::
:::

::: adv | Zadanie 9 (3 pkt) — Znajdź błąd | poziom ambitny
Uczeń rozwiązał zadanie: „Kula A o promieniu 1 cm ma ładunek +6 nC, kula B o promieniu 3 cm jest obojętna. Kule połączono cienkim przewodem. Ładunki po połączeniu: q′ = (6 + 0)/2 = +3 nC każda.”

a) Wskaż błąd w rozumowaniu ucznia. (1 pkt)
b) Podaj poprawny warunek, który decyduje o podziale ładunku. (1 pkt)
c) Oblicz poprawne ładunki obu kul. (1 pkt)

::: odp | Pokaż klucz
a) Wzór (q₁ + q₂)/2 wolno stosować tylko do identycznych kul; tu promienie są różne (1 pkt).
b) Po połączeniu potencjały kul są równe: q_A/R_A = q_B/R_B, a suma ładunków jest zachowana: q_A + q_B = 6 nC (1 pkt).
c) q_A = 6 · 1/(1 + 3) = +1,5 nC, q_B = 6 · 3/(1 + 3) = +4,5 nC (1 pkt).
Uzasadnienie: potencjał kuli to V = k·q/R, więc równe potencjały oznaczają ładunki proporcjonalne do promieni; większa kula bierze więcej ładunku.
:::
:::

::: adv | Zadanie 10 (4 pkt) — Analiza tekstu: malowanie proszkowe | poziom ambitny
Tekst: „W lakierni felgę zawieszono na uziemionym haku. Pistolet natryskowy nadaje drobinom farby ładunek ujemny. Naładowane drobiny lecą ku felgi i osiadają na niej, a po podgrzaniu topią się i tworzą gładką powłokę. Farba pokrywa także tylną stronę felgi, choć pistolet jest po drugiej stronie.”

a) Wyjaśnij, dlaczego drobiny farby rozpraszają się w chmurę, zamiast lecieć jednym wąskim strumieniem. (1 pkt)
b) Wyjaśnij, po co felga jest uziemiona. (1 pkt)
c) Wyjaśnij, dlaczego farba osiada także z tyłu felgi. (1 pkt)
d) Co stałoby się z powłoką, gdyby felga była odizolowana i naładowana ujemnie? (1 pkt)

::: odp | Pokaż klucz
a) Drobiny mają ładunki jednoimienne, więc odpychają się nawzajem i rozchodzą się na boki (1 pkt).
b) Uziemienie odprowadza ładunek osiadających drobin, więc felga nie gromadzi ładunku ujemnego, który odpychałby kolejne drobiny; ponadto w uziemionym metalu pod wpływem drobin indukuje się ładunek dodatni, który je przyciąga (1 pkt).
c) Linie pola prowadzą od naładowanych drobin do całej powierzchni uziemionego metalu, także do tyłu; drobiny, odpychając się nawzajem, nie lecą tylko prosto i część omija felgę wzdłuż linii pola (1 pkt).
d) Drobiny byłyby odpychane przez ujemną felgę, więc powłoka byłaby cienka lub nie powstałaby wcale (1 pkt).
Uzasadnienie: wszystko wynika z odpychania ładunków jednoimiennych i przyciągania do przewodnika uziemionego.
:::
:::

::: adv | Zadanie 11 (4 pkt) — Zadanie z pułapką: który ładunek „silniejszy”? | poziom ambitny
Dwa małe ładunki: q₁ = +2 µC i q₂ = +8 µC znajdują się w odległości 30 cm (k = 8,99·10⁹ N·m²/C²).

a) Oblicz wartość siły, jaką q₂ działa na q₁. (1 pkt)
b) Uczeń twierdzi: „Większy ładunek działa większą siłą”. Oceń to zdanie. (1 pkt)
c) Ładunki umieszczono na identycznych metalowych kulkach, zetknięto i znów rozsunięto na 30 cm. Podaj ładunki kulek. (1 pkt)
d) Oblicz nową siłę i wyjaśnij, dlaczego jest większa, mimo że suma ładunków się nie zmieniła. (1 pkt)

::: odp | Pokaż klucz
a) F = 8,99·10⁹ · 2·10⁻⁶ · 8·10⁻⁶ / 0,09 ≈ 1,6 N (1 pkt).
b) Zdanie jest fałszywe: siły są równe co do wartości (III zasada dynamiki), zawsze po 1,6 N (1 pkt).
c) Suma +10 µC, po równo: +5 µC na każdej kulce (1 pkt).
d) F′ = 8,99·10⁹ · 5·10⁻⁶ · 5·10⁻⁶ / 0,09 ≈ 2,5 N (siła wzrosła); przy stałej sumie ładunków iloczyn q₁·q₂ jest największy, gdy ładunki są równe: 16 µC² → 25 µC² (1 pkt).
Uzasadnienie: siła zależy od iloczynu ładunków, nie od ich sumy; wyrównanie ładunków zwiększa iloczyn.
:::
:::

::: adv | Zadanie 12 (4 pkt) — Gdzie pole jest zerowe? | poziom ambitny
Ładunek +4Q umieszczono w punkcie x = 0, a ładunek +Q w punkcie x = 3a (na jednej prostej). Szukamy punktu, w którym natężenie pola wypadkowego wynosi zero.

a) Zapisz natężenia pól obu ładunków w punkcie leżącym w odległości x od pierwszego ładunku, między ładunkami. (1 pkt)
b) Zapisz warunek zerowego pola wypadkowego. (1 pkt)
c) Wyznacz x. (1 pkt)
d) Uzasadnij, dlaczego takiego punktu nie ma na zewnątrz odcinka łączącego ładunki. (1 pkt)

::: odp | Pokaż klucz
a) E₁ = k·4Q/x² (zwrot w prawo), E₂ = k·Q/(3a − x)² (zwrot w lewo) (1 pkt).
b) Pola mają przeciwne zwroty, więc zerowanie wymaga równych wartości: 4Q/x² = Q/(3a − x)² (1 pkt).
c) 2/x = 1/(3a − x) → 6a − 2x = x → x = 2a (od ładunku +4Q) (1 pkt).
d) Poza odcinkiem oba pola mają ten sam zwrot (oba ładunki są dodatnie, więc odpychają ładunek próbny „na zewnątrz”), więc nie mogą się znieść (1 pkt).
Uzasadnienie: wynik x = 2a jest bliższy mniejszemu ładunkowi, zgodnie z oczekiwaniem — punkt zerowy leży bliżej słabszego źródła.
:::
:::

::: adv | Zadanie 13 (4 pkt) — Kropla w stylu Millikana | poziom ambitny
Naładowana kropla oleju o masie m = 4,8·10⁻¹⁵ kg „wisi” w jednorodnym polu elektrycznym o natężeniu E = 1,5·10⁵ N/C skierowanym pionowo w dół (przyjmij g = 10 m/s², e = 1,6·10⁻¹⁹ C).

a) Zapisz warunek równowagi. (1 pkt)
b) Oblicz ładunek kropli. (2 pkt)
c) Ile elektronów nadmiarowych lub brakujących ma kropla? (1 pkt)

::: odp | Pokaż klucz
a) Siła elektryczna równoważy ciężar: |q|·E = m·g (1 pkt).
b) |q| = m·g/E (1 pkt) = 4,8·10⁻¹⁵ · 10 / 1,5·10⁵ = 3,2·10⁻¹⁹ C (1 pkt).
c) n = |q|/e = 2 (1 pkt); ponieważ pole skierowane jest w dół, a siła elektryczna działa w górę, ładunek kropli jest ujemny — kropla ma 2 nadmiarowe elektrony.
Uzasadnienie: wynik jest całkowitą wielokrotnością e, co potwierdza kwantyzację ładunku.
:::
:::

## 14a | Mapa myśli, checklista i kolejność powtórek {#s14a}

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
Ładunek elementarny e :: wartość bezwzględna ładunku elektronu, ≈ 1,6·10⁻¹⁹ C; ładunki swobodnych cząstek są jej całkowitymi wielokrotnościami
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

::: karta understand | Mosty do innych przedmiotów i przykłady z życia
- **Matematyka:** notacja naukowa i potęgi o ujemnym wykładniku (10⁻⁹), proporcjonalność prosta (F ∝ q) i odwrotna do kwadratu (F ∝ 1/r²).
- **Chemia:** jony, wiązanie jonowe, elektroujemność, dysocjacja soli w wodzie (εr ≈ 80).
- **Biologia:** impulsy nerwowe wiążą się z przepływem jonów przez błony komórek.
- **Geografia:** burze i wyładowania atmosferyczne; piorunochron i bezpieczne zachowanie podczas burzy.
- **Technika:** drukarka laserowa i kserokopiarka, filtry elektrostatyczne w kominach, malowanie proszkowe, ekrany pojemnościowe w telefonach, opaski antystatyczne.
- **Życie codzienne:** iskra z klamki zimą, „trzaskający” sweter po zdjęciu, folia spożywcza przyklejona do miski, kurz osiadający na ekranie.
:::

::: karta basic | Historia odkryć w skrócie
- **ok. VI w. p.n.e.** — według tradycji Tales z Miletu opisuje przyciąganie lekkich ciał przez potarty bursztyn.
- **1600** — William Gilbert upowszechnia termin „elektryczność”.
- **ok. 1729** — Stephen Gray odkrywa, że ładunek można przesyłać przez niektóre materiały (początek podziału na przewodniki i izolatory).
- **ok. 1733** — Charles du Fay opisuje dwa rodzaje ładunku.
- **połowa XVIII w.** — Benjamin Franklin ustala znaki „+” i „−” i opisuje piorunochron.
- **1785** — Charles Coulomb mierzy siłę między ładunkami wagą skręceń.
- **1836** — Michael Faraday pokazuje, że wnętrze zamkniętej przewodzącej klatki jest osłonięte od pola (klatka Faradaya).
- **1897** — J. J. Thomson odkrywa elektron.
- **1909** — Robert Millikan mierzy ładunek elementarny doświadczeniem z kroplami oleju.
(Daty z „ok.” są orientacyjne; w literaturze bywają podawane z różnicą kilku lat.)
:::

### AUDYT — Claude Sonnet 5.5, 2026-10-12 {#audyt-ulepsz}

**Poprawione:**
- §11a (Przykład 2): „dotyk trzech kul” → „dotyk dwóch kul” — w przykładzie dotykają się dwie kule (A i B).
- §14 (test, pyt. 2): błędna opcja „nadmiar protonów” → „dodatkowe protony, które otrzymało przy elektryzowaniu” — dawne sformułowanie było dwuznaczne, bo ciało dodatnie ma więcej protonów niż elektronów.
- §13 (fiszka „Prawo Coulomba”): „F = k·|q₁q₂| / r²” → „F = k·q₁·q₂ / r² (moduły ładunków)” — znak | jest separatorem pól fiszki.
- §7: „(= 0)” → „(= 0, jeśli przewodnik był obojętny)”; liczby dla pioruna i wyładowania z ciała oznaczone „orientacyjnie”.
- §10 BHP: „tylko pod okiem nauczyciela” → „tylko w pracowni lub pod opieką osoby dorosłej” — kurs jest do samodzielnej nauki.
- §14a: „Plan powtórek (krzywa zapominania)” z dniami i minutami → „Co powtórzyć i w jakiej kolejności” (bez dni i czasu); tytuł sekcji „…i plan powtórek” → „…i kolejność powtórek”.
- §14a: mapa myśli (`<pre>`) i checklista (`<li>` z ☐) przepisane na składnię `::: drzewo` i `::: checklista`; cała treść zachowana i rozszerzona.
- §0 Mnemotechniki: lista ujęta w `::: wskazowki`, dopisano 4 pozycje.
- §10 doświadczenia 1–7: ujednolicono pola (Problem, Hipoteza, Sprzęt, Przebieg z próbą kontrolną, Obserwacja, Wniosek, BHP); dawne pola „Wykonanie”, „Test”, „Sprawdzenie znaku” włączono do Przebiegu i Obserwacji.
- §11 klinika: pierwsza kolumna ujęta w polskie cudzysłowy.
- §13 fiszki: do każdej dopisano poziom i temat; §14 test: do każdego z 10 pytań dopisano trzecią błędną odpowiedź i wyjaśnienie.
- Frontmatter: uzupełniono `opis`, `uid`, `stopka`; dodano linię `stan`; dodano plakietkę `[[exam:KONKURS]]`.

**Dodane:**
- §0b: wykład „od zera” w 5 częściach i karta „Jak pracować z lekcją”.
- §1, §2, §4, §6, §7, §8, §9: siedem mini-wykładów „W skrócie”.
- §1, §7, §8, §9: cztery ciekawostki (bursztyn, dwaj wynalazcy piorunochronu, waga skręceń Coulomba, kropla oleju Millikana).
- §0 ściąga: ε₀ i k = 1/(4π·ε₀); 4 mnemotechniki.
- §10: próba kontrolna i hipoteza w każdym doświadczeniu.
- §11: 8 nowych wierszy kliniki (łącznie 17) i blok mitów (6).
- §11b: pary do odróżniania — 7 z poziomu E8, 7 z poziomu olimpijskiego.
- §12a: zadania egzaminacyjne E8 z kluczem i punktacją (Zadania 1–6).
- §12b: 5 mini-wykładów „Dla olimpijczyka” i 5 trudnych przypadków z rozstrzygnięciem krok po kroku.
- §12c: 7 zadań ambitnych (Zadania 7–13) z kluczem i uzasadnieniem: przekształcanie, uzasadnianie, znajdź błąd, analiza tekstu, zadanie z pułapką, superpozycja, ładunek elementarny.
- §13: 20 nowych fiszek, w tym 8 olimpijskich; §14: 10 nowych pytań, w tym 5 olimpijskich.
- §14a: rozszerzona mapa pojęć i checklista (14 pozycji).
- §15: 14 nowych haseł słownika, karta mostów do innych przedmiotów, historia odkryć.

**Niepewne / do weryfikacji:**
- `uid: CHE.FIZ.01.elektrostatyka` — format wzorowany na kodach innych lekcji; sprawdź zgodność z repozytorium.
- Typ karty `karta new` (§1, §8, §15) i `karta -` (§12, §15) występują w oryginale, ale nie ma ich na liście typów w poleceniu — zostawione bez zmian.
- Wiersze wzorów z prefiksem podwójnego znaku dolara (oryginał) zostawione bez zmian; nowe wzory zapisane zwykłym tekstem w Unicode.
- Daty historyczne (Tales, Gilbert, Gray, du Fay, Franklin, Diviš) są tradycyjne i orientacyjne.
- Ładunek pioruna („kilka–kilkadziesiąt kulombów”) i napięcie wyładowania z ciała — orientacyjne.
- Szereg tryboelektryczny jest orientacyjny; mechanizm tryboelektryzacji nie jest do końca wyjaśniony (§12b).
- Wartości εr i ρ materiałów (§4, §8) przepisane z oryginału; ρ grafitu i wody z kranu zależą od odmiany i składu.
- Wniosek „klatka Faradaya nie osłania od stałego pola magnetycznego” (§11b) — do sprawdzenia z podręcznikiem LO.

**Proponuję usunąć:**
- Duplikaty haseł słownika: „Ładunek elektryczny”, „Indukcja elektrostatyczna” i „Uziemienie” występują w §0 i w §15 — wystarczy jeden zestaw.
- Krótka karta „Uziemienie” w §5 pokrywa się z kartą „Uziemienie — gdzie znika ładunek?” w §5a.
- Zdanie „Zasady zachowania potencjału nie ma” w §5a — odpowiada na pytanie, którego w lekcji nie ma.

**Źródła:**
- Podstawa programowa fizyki w szkole podstawowej; informatory i arkusze CKE (egzamin ósmoklasisty).
- Halliday, Resnick, Walker — „Podstawy fizyki”; OpenStax University Physics (elektrostatyka).
- NIST (stałe fizyczne: e, k, ε₀).
- Khan Academy, BBC Bitesize — przegląd zakresu i typowych błędów.

**Grafiki do zrobienia:**

| Gdzie | Rodzaj | Co pokazuje | Wniosek | @opis |
|---|---|---|---|---|
| §0b, po części 1 | schemat z podpisami do klikania | atom z jądrem (protony, neutrony) i elektronami w trzech stanach: obojętnym, z niedoborem elektronu i z nadmiarem elektronu | O znaku ładunku decyduje różnica liczby elektronów i protonów. | Schemat atomu z podpisami do klikania: jądro z protonami i neutronami, wokół elektrony; trzy wersje — obojętna, z jednym elektronem mniej (ładunek dodatni), z jednym elektronem więcej (ładunek ujemny). Wniosek: ładunek ciała wynika z bilansu elektronów i protonów. |
| §3, po karcie o przyciąganiu skrawków papieru | animacja „tam i z powrotem” | cząsteczki izolatora ustawiające się w polu naelektryzowanego pręta: przy zbliżeniu rozsuwają ładunki, przy oddaleniu wracają | Polaryzacja jest odwracalna i prowadzi do przyciągania ciała obojętnego. | Pręt zbliżany do izolatora: ładunki w cząsteczkach przesuwają się tak, że bliższa strona ma znak przeciwny do pręta; po oddaleniu pręta wracają na miejsce. Wniosek: przyciąganie ciała obojętnego wynika z przesunięcia ładunków. |
| §4, po tabeli oporu właściwego | wykres słupkowy | opór właściwy wybranych materiałów od srebra do teflonu w skali logarytmicznej | Przewodniki i izolatory dzieli ok. 30 rzędów wielkości. | Wykres słupkowy w skali logarytmicznej z opornościami właściwymi materiałów, od srebra po teflon. Wniosek: różnice między przewodnikami a izolatorami są ogromne i nie da się ich zobaczyć w skali liniowej. |
| §5a, adv „Wyrównanie potencjałów” | model interaktywny z suwakiem | dwie połączone kule; suwaki promieni i ładunku całkowitego; wartości ładunków i potencjałów | Większa kula bierze proporcjonalnie więcej ładunku, a potencjały są równe. | Dwie kule połączone przewodem z suwakami promieni i ładunku; wyświetlane są ładunki na kulach i potencjały. Wniosek: ładunki dzielą się proporcjonalnie do promieni, a potencjały się wyrównują. |
| §12b, trudny przypadek 1 | animacja „do przodu i od początku” | naładowany elektroskop i powoli zbliżany pręt o dużym ładunku jednoimiennym przeciwnym; zmiana rozkładu ładunków i kąta listków | Najpierw listki opadają, potem rozchylają się ponownie, choć całkowity ładunek się nie zmienia. | Pręt ujemny zbliżany do elektroskopu naładowanego dodatnio: listki opadają, a potem znowu się rozchylają, przy czym znaki ładunków na listkach się zmieniają. Wniosek: o znaku pręta wnioskujemy z początku zbliżania, nie z końca. |
| §9 lub §12b | schemat z podpisami do klikania | przewodząca powłoka w polu zewnętrznym: ładunki indukowane na powierzchni, wnętrze bez pola | Wewnątrz przewodnika w równowadze pole jest zerowe. | Zamknięta metalowa powłoka w jednorodnym polu: linie pola kończą się na ładunkach indukowanych na powierzchni, a wnętrze jest bez linii. Wniosek: klatka Faradaya osłania wnętrze od pola elektrycznego. |
| §15, historia odkryć | oś czasu | daty i postacie od Talesa do Millikana | Kolejne odkrycia budowały obraz ładunku jako wielkości o dwóch znakach i najmniejszej porcji. | Oś czasu z wydarzeniami: bursztyn Talesa, Gilbert, Gray, du Fay, Franklin, Coulomb, Faraday, Thomson, Millikan. Wniosek: elektrostatyka rozwijała się od jakościowych obserwacji do pomiarów ładunku. |

### AUDYT W1 — zewnętrzny, weryfikacja 2026-10-14 (Claude Haiku 5.5)

Surowa odpowiedź i tabela weryfikacji: `chemia/plany/audyty/FIZ01_audyt_W1_2026-10-14.md`.

**Wprowadzono:** ładunek elementarny (zdanie o „najmniejszym swobodnym ładunku”); rozmieszczenie ładunku w przewodniku na powierzchni (dwa miejsca); zwrot i wartość natężenia pola; piorunochron (bez gwarancji); usunięto zdanie polemiczne „Zasady zachowania potencjału nie ma”; blok BHP ogólny; dodatkowe zadania z kluczem (trzy ładunki, przyciąganie, jednostki).

**Nieprzyjęte:** cytaty „Jon to atom…”, „Czas rozpływu…”, „Im większy ładunek…”, „Ziemia przejmuje…”, „Wewnątrz zamkniętego przewodnika…”, „Samochód chroni…”, „Wyładowanie trafia…” nie występują w tym pliku (audyt dotyczył innej wersji); definicja jonu już poprawna; dysocjacja kwasu już podaje H₃O⁺; `$$` i `:::` są poprawną składnią silnika; tabela oporu już podaje 20 °C.

**Odłożone:** zadanie „elektroskop z ciałem wzorcowym” i „listki opadają i rozchylają się” — w lekcji są przykłady (§10, §6), wymagają osobnej weryfikacji; sekcja „obserwacja ≠ wniosek” — do dopisania w następnej turze.

## Luki, poszerzenie i własne przykłady (W1 FULL, 2026-10-14)

**Obserwacja ≠ wniosek (brak w lekcji, dodano):** listki elektroskopu się rozchyliły. Obserwacja to fakt: listki się odsunęły. Wniosek, który wymaga sprawdzenia: ciało jest naelektryzowane. Rozchylenie nie mówi jeszcze, jakim ładunkiem — do tego potrzebny jest ładunek wzorcowy (sekcja 6).

**Typowe błędy uczniów (poza lekcją):** utożsamienie „nadmiaru ładunku” z „nadmiarem protonów” (w elektryzowaniu przemieszczają się wyłącznie elektrony); przyjęcie, że przyciąganie = naelektryzowanie (patrz przykład W1-3); mnożenie ładunku przez odległość zamiast kwadratu odległości w prawie Coulomba.

**Horyzont — mosty międzyprzedmiotowe:**
- biologia: impulsy nerwowe to ruch jonów przez błonę komórkową — to elektryczność w organizmie (bez tego nerw nie przewodziłby sygnału);
- chemia: roztwory elektrolitów przewodzą prąd, bo zawierają jony (dysocjacja — lekcja o kwasach);
- technika i bezpieczeństwo: uziemienie instalacji i opaska antystatyczna przy elektronice (ten sam mechanizm, który poznałeś w sekcji 5).

**Dla ambitnych:** prawo Coulomba w zadaniach — iloczyn ładunków w liczniku, kwadrat odległości w mianowniku; zawsze licz wartość bezwzględną, a zwrot siły określaj jakościowo (jednoimienne odpychają, różnoimienne przyciągają).

::: karta exam | Przykład W1-1 (E8) — zetknięcie dwóch identycznych kul
Kula A ma ładunek +6 µC, kula B ma −2 µC. Kule zetknięto, a potem rozdzielono. Oblicz ładunek każdej kuli po rozdzieleniu.
:::

::: odp | Pokaż klucz
Całkowity ładunek układu: (+6 µC) + (−2 µC) = +4 µC (zasada zachowania ładunku). Kule identyczne, więc dzielą ładunek po równo: q′ = +4 µC / 2 = **+2 µC** każda (3 pkt: suma, zachowanie, podział).
:::

::: karta exam | Przykład W1-2 (ambitny) — ile elektronów w ciele
Ciało ma nadmiarowy ładunek −3,2 nC. Ile nadmiarowych elektronów ma to ciało? (e = 1,6·10⁻¹⁹ C)
:::

::: odp | Pokaż klucz
n = q / e = 3,2·10⁻⁹ C / 1,6·10⁻¹⁹ C = **2,0·10¹⁰ elektronów** (2 pkt: wzór n = q/e, wynik z jednostką). Zauważ: wynik jest całkowity, co potwierdza kwantowanie ładunku.
:::

::: karta exam | Przykład W1-3 (pułapka) — przyciąganie a naelektryzowanie
Naelektryzowana pałeczka przyciąga kawałek papieru. Czy można stąd wnioskować, że papier jest naelektryzowany? Uzasadnij.
:::

::: odp | Pokaż klucz
Nie. Obojętne ciało przyciąga się do naelektryzowanego przez indukcję lub polaryzację: bliższy koniec dostaje ładunek przeciwny, więc przyciąganie jest silniejsze niż odpychanie dalszego końca. Naelektryzowanie papieru wymagałoby sprawdzenia ładunkiem wzorcowym (2 pkt).
:::

::: karta exam | Przykład W1-4 (ambitny) — siła między dwiema kulami
Dwie małe kule o ładunkach +4 µC i −4 µC znajdują się w odległości 0,20 m. Oblicz wartość siły oddziaływania i określ, czy kule się przyciągają, czy odpychają. (k = 8,99·10⁹ N·m²/C²)
:::

::: odp | Pokaż klucz
F = k·|q₁q₂|/r² = 8,99·10⁹ · (4·10⁻⁶)² / (0,20)² = 8,99·10⁹ · 1,6·10⁻¹¹ / 0,04 ≈ **3,6 N**. Ładunki różnoimienne, więc kule się **przyciągają** (3 pkt: wzór, wynik, zwrot).
:::

**Bez uwag:** pozostałe rachunki (0,60 N w przykładzie Coulomba, 6,24·10¹⁸ elektronów w 1 C) sprawdzone — poprawne.

### AUDYT W1 FULL — Claude Haiku 5.5, 2026-10-14

**Błędy poprawione:** konwencja znaków przypisana Franklinowi (poprawiono: Franklin nazwał ładunki, przypisanie do protonu i elektronu jest późniejsze); E = k·Q/r² bez modułu (poprawiono na |E| = k·|Q|/r²); uziemienie jako „przejmuje ładunek” (doprecyzowano: Ziemia jako zbiornik ładunku, ciało ma potencjał Ziemi).

**Luki:** obserwacja ≠ wniosek (dodano), typowe błędy uczniów (opisane), wiedza wstępna — polaryzacja i prawo Coulomba z zadań, uzupełniono w 0b.

**Poszerzenie:** mosty do biologii (impulsy nerwowe), chemii (elektrolity, dysocjacja) i techniki (uziemienie); wykład 0b i 5a, 9 mini-wykładów „W skrócie” i 4 ciekawostki — zostawione.

**Własne przykłady:** 4 nowe (zetknięcie kul, elektrony w ciele, przyciąganie a naelektryzowanie, siła Coulomba) z kluczem.

**Bez uwag:** pozostałe fragmenty przeglądano sekcjami (0b, 1–5 ćwiczenia, 9–12 klucze, ZUZO) — brak dodatkowych błędów merytorycznych. Pełny przegląd linia po linii wykonano 2026-10-14 (§0–§15 i „Luki”). Poprawki: „ebonit z suknem” (ściąga), „potrze balon” → „pociera się balon” (zadanie 6), benzyna (εr ≈ 2: siła spada ok. 2×, sól się nie rozpuszcza), definicja ładunku elementarnego w słowniku. Sprawdzone bez zmian: rachunki w §5a, §8–§12c, klucze, test, fiszki, mosty, historia. Zapisy „$$ wzór” w jednej linii są poprawnym formatem md2html (nie wymagają zamknięcia).

### AUDYT W2 — zewnętrzny, weryfikacja 2026-10-14 (Claude Haiku 5.5)

Surowa odpowiedź: `chemia/plany/audyty/FIZ01_audyt_W2_2026-10-14.md`.

**Wprowadzono:** zdanie o ładunku wielokrotności e bez „pół elektronu” (uczciwiej dla szkoły); „pokazuje ile, nie jaki” z porównaniem do ciała o znanym ładunku; przewodnik — ładunek na powierzchni w równowadze zamiast „po całym ciele”; karta „Gdzie gromadzi się ładunek?” (ostrza, zastrzeżenie o kształcie); karta „Jak czytać wzór Coulomba?” (moduły, znak iloczynu); trzy pozycje do kliniki (pole wewnątrz w równowadze, uziemienie a kierunek, ujemna wartość siły).

**Już w lekcji (zarzut nieaktualny):** „najmniejszy swobodny ładunek”, „Ziemia przejmuje ładunek” (jest „zbiornik ładunku”), równe dzielenie kul (klinika i zadanie 9), zmiana odległości ×3 (test i zadanie 5b).

**Nieprzyjęte jako dubel:** karta „Klatka Faradaya” z przykładami — treść i ograniczenie do pola magnetycznego są już w §11b i w słowniku; karta „Nie myl pojęć: indukcja/polaryzacja” — jest w §11b.
