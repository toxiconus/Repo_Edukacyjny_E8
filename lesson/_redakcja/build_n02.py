# -*- coding: utf-8 -*-
"""Redakcja N02 v9.0: składa nową lekcję z migawki v8.2 (fragmenty wg numerów linii + nowe bloki)."""
import re, sys
SRC = '/home/claude/che/lesson/_snap/n02_v82.html'
DST = '/home/claude/che/lesson/n02_new.html'
lines = open(SRC, encoding='utf-8').read().split('\n')
def L(a, b=None):
    b = b or a
    return '\n'.join(lines[a-1:b])
def rep(s, old, new, cnt=1):
    assert old in s, ('BRAK', old[:80])
    return s.replace(old, new, cnt)
def sec(id_, num, title, badge=''):
    return '<section class="section" id="%s">\n<div class="part-heading"><span class="part-num">%s</span> %s%s</div>' % (id_, num, title, (' ' + badge) if badge else '')
E8 = '<span class="level-badge level-basic">E8</span>'
UND = '<span class="level-badge level-understand">ROZUMIENIE</span>'
EXT = '<span class="level-badge level-extra">AMBITNE</span>'
NADP = '<span class="level-badge level-extra">NADPROGRAMOWE</span>'
def a(id_, t): return '<a href="#%s">%s</a>' % (id_, t)
out = []
P = out.append

# ---------- HEAD + START ----------
P(rep(L(1, 9), 'v8.2 MASTER LAB', 'v9.0 MASTER LAB'))
P(rep(L(10), 'MASTER LAB v8.2', 'MASTER LAB v9.0'))
P(L(11, 23))
TOC_PLACEHOLDER = '@@TOC@@'
P(TOC_PLACEHOLDER)
P(L(25, 30))
P('''<div class="core-path" id="rdzen-lekcji">
<div class="cp-title">Rdzeń lekcji — najpierw to (ok. 30 min)</div>
<ol>
<li><strong>''' + a('budowa', '§5') + '''</strong> — grupa OH⁻, wzór ogólny, nawias, nazwy.</li>
<li><strong>Model „Wzór wodorotlenku”</strong> (''' + a('wzor-ogolny', '§5.2') + ''') — zbuduj wzory dla Na, Ca, Al, Fe(III).</li>
<li><strong>Rozpuszczalność, zasada i odczyn</strong> (''' + a('wlasciwosci', '§6') + ''') — tabela rozpuszczalności, dysocjacja, wskaźniki.</li>
<li><strong>Otrzymywanie + Laboratorium jonowe</strong> (''' + a('otrzymywanie', '§7') + ', ' + a('ion-lab', '§12') + ''') — zobacz, jak powstaje osad.</li>
<li><strong>Zobojętnianie</strong> (''' + a('zobojetnianie', '§8.1') + ''') — animacja i licznik moli.</li>
<li><strong>pH i wskaźniki + Lab</strong> (''' + a('ph-wskazniki', '§6.4') + ''') — przewiduj odczyn.</li>
<li><strong>Klinika błędów + Ćwiczenia + Test</strong> (''' + a('klinika', '§16') + '–' + a('test', '§18') + ''').</li>
</ol>
</div>''')

# 1 Wprowadzenie
P(sec('wprowadzenie', '1', 'Wprowadzenie'))
P(rep(L(44, 48), 'class="card card-new"', 'class="card card-core"'))
P('<p class="mini-note">Trzy fakty na start — OH⁻ ma ładunek −1; liczba grup OH⁻ odpowiada wartości bezwzględnej ładunku kationu; nawias stawiamy tylko przy więcej niż jednej grupie — zebrano w karcie ' + a('minimum', 'Minimum E8') + ', a pełne wyjaśnienie z przykładami jest w ' + a('budowa', '§5') + '.</p>')
P('</section>')

# 2 Cele
c = rep(L(72, 88), '<span class="part-num">4</span>', '<span class="part-num">2</span>')
c = rep(c, '<li><strong>opisuje</strong> odczyn zasadowy i wskaźniki,</li>', '<li><strong>opisuje</strong> odczyn zasadowy i wskaźniki,</li>\n<li><strong>opisuje</strong> właściwości NaOH, KOH i Ca(OH)₂ (higroskopijność, BHP, wapno i woda wapienna),</li>')
P(c)

# 3 Kompas
c = rep(L(89, 98), '<span class="part-num">5</span>', '<span class="part-num">3</span>')
c = rep(c, '<li><strong>Wcześniej:</strong> wartościowość, W–K–S–K, grupa OH⁻, ładunek jonu, nawias.</li>',
        '<li><strong>Wcześniej:</strong> wartościowość, W–K–S–K, grupa OH⁻, ładunek jonu, nawias. Fundamenty F00–F09: jony, ładunek, zapis wzorów.</li>')
c = rep(c, '<li><strong>Tlenki:</strong>', '<li><strong>Tlenki (lekcja N01):</strong>')
c = rep(c, L(95), '<li><strong>Uwaga:</strong> określenie „tlenek zasadowy” nie oznacza automatycznie, że tlenek reaguje z wodą (CuO — nie, MgO — bardzo powoli); szczegóły i lista tlenków reagujących z wodą — ' + a('uwaga-tlenki', '§7.1') + '.</li>')
P(c)

# 4 Pytanie przewodnie + problem
P(sec('pytanie', '4', 'Pytanie przewodnie i problem startowy'))
P(L(68, 70))
P('<div class="card card-warning" id="problem">')
P(L(102, 103))
P('<details class="answer"><summary>Pokaż rozwiązanie — trzy szkolne metody</summary>')
P(L(104, 109))
P('<p>Ca(OH)₂ — z CaO i wody (metoda 1); Fe(OH)₃ — z FeCl₃ i NaOH (metoda 3, strącanie); NaOH — z sodu i wody (metoda 2) albo z Na₂O i wody (metoda 1). Magnez reaguje z wodą dopiero na gorąco, dlatego Mg(OH)₂ wygodniej otrzymać przez strącanie (' + a('stracanie', '§7.2') + ').</p>')
P(L(110))
P('</details>\n</div>\n</section>')

# ---------- 5 Definicja, budowa, nazewnictwo ----------
P(sec('budowa', '5', 'Definicja, budowa i nazewnictwo', E8))
P('<h3 id="definicja">5.1 Definicja i grupa wodorotlenkowa OH⁻</h3>')
P(rep(L(116, 122), 'class="card card-new"', 'class="card card-basic"'))
P('</div>')
c = rep(L(133, 142), '<div class="card card-core">', '<div class="card card-core" id="grupa-oh">')
c = rep(c, 'To zupełnie inna chemia (związek organiczny).</div>', 'To zupełnie inna chemia (związek organiczny). Alkohol zapisujemy ogólnie jako R–OH, gdzie R to fragment węglowy; wodorotlenek to kation metalu (albo NH₄⁺) + OH⁻.</div>')
P(c)
P('</div>')

P('<h3 id="wzor-ogolny">5.2 Wzór ogólny M(OH)ₙ — jak go zbudować?</h3>')
P('<p class="lead"><strong>Cel:</strong> uczeń ma nie tylko znać regułę, ale wiedzieć, co zrobić w następnym kroku i jak sprawdzić wynik.</p>')
P('''<div class="core-path">
<div class="cp-title">Nie zapamiętuj wzorów osobno — odtwórz je z ładunków.</div>
<ol>
<li>Kation metalu ma ładunek dodatni (np. <span class="formula">Ca²⁺</span>).</li>
<li>Grupa OH⁻ ma zawsze ładunek −1.</li>
<li>Związek jako całość jest elektrycznie obojętny.</li>
</ol>
</div>''')
c = L(148, 157)
c = rep(c, '<li>Tyle samo grup OH⁻ musisz przyłączyć.</li>', '<li>Zapisz <span class="formula">OH⁻</span> jako jeden jon (−1). Dobierz liczbę grup OH⁻ tak, aby suma ładunków wynosiła 0. Tyle samo grup OH⁻ musisz przyłączyć.</li>')
c = rep(c, 'indeks za nawiasem mnoży wszystkie atomy w środku.</li>', 'indeks za nawiasem mnoży wszystkie atomy w środku. Sprawdź indeks: ma dotyczyć całej grupy, nie tylko H. Przykład: <span class="formula">(+2) + 2·(−1) = 0</span>.</li>')
P(c)
P(L(158, 175))
P('''<div class="rule-box">
<b>Co naprawdę oznacza indeks n?</b> <strong>n oznacza liczbę całych grup OH⁻.</strong> W typowych prostych wodorotlenkach szkolnych jest ona równa wartości bezwzględnej ładunku kationu.
<div class="equation-box"><strong>Al³⁺ → 3 × OH⁻ → Al(OH)₃ → (+3) + 3·(−1) = 0</strong></div>
<p style="margin-top:8px;">Nie należy utożsamiać indeksu z samym ładunkiem zapisanym ze znakiem „+”. n to liczba grup OH⁻, a nie „ładunek kationu” jako taki.</p>
</div>''')
P('''<div class="mnemonic">
<b>Mnemotechnika:</b> „<span class="hl">OH⁻ to klocek o ładunku −1</span>. Kation metalu mówi, ile klocków potrzebuje." Na⁺ → 1 klocek. Ca²⁺ → 2 klocki. Al³⁺ → 3 klocki. Nie rozbijaj grupy na O i H w zadaniach.
</div>''')
P('<h4 class="merge-h" id="wzorometr">Model interaktywny — bilans ładunków i konstruktor wzorów</h4>')
P(L(561))
P('<p>Dodawaj grupy OH⁻, aż suma ładunków wyniesie zero. Wybierz kation i dodawaj grupy OH⁻, aż powstanie poprawny wzór.</p>')
P(rep(L(564), 'z §9.3', 'z tej podsekcji'))
P(rep(L(567), 'z §9.3', 'z tej podsekcji'))

P('<h3 id="nawias">5.3 Nawias — kiedy i dlaczego?</h3>')
c = L(177, 191)
c = rep(c, '<li><span class="formula">NaOH</span> — bez nawiasu (1 grupa).</li>', '<li><span class="formula">NaOH</span>, <span class="formula">KOH</span> — bez nawiasu (1 grupa, n = 1).</li>')
c = rep(c, '<li><span class="formula">Al(OH)₃</span> — z nawiasem (3 grupy).</li>', '<li><span class="formula">Al(OH)₃</span> — z nawiasem (3 grupy, n &gt; 1).</li>')
c = rep(c, '</div>\n<div class="mnemonic">', '</div>\n' + rep(L(570), 'z §9.3', 'z ' + a('wzor-ogolny', '§5.2')) + '\n<div class="mnemonic">')
P(c)

P('<h3 id="nazwy">5.4 Nazwy wodorotlenków</h3>')
c = L(193, 212)
c = rep(c, '<span class="card-label">CuOH i AgOH — tylko jako ciekawostka</span>', '<span class="card-label">CuOH i AgOH — tylko jako ciekawostka</span> <span class="level-badge level-extra">AMBITNE</span>')
c = rep(c, 'bezpośrednio w reakcjach strąceniowych.</p>', 'bezpośrednio w reakcjach strąceniowych.</p>\n<p><strong>AgOH — wyjaśnienie:</strong> W warunkach doświadczenia szybko przekształca się w Ag₂O, dlatego nie traktuje się go jako trwałego, izolowanego wodorotlenku. Nie używaj sformułowania „nie istnieje” — jest ono zbyt uproszczone.</p>')
P(c)
P('</section>')

# ---------- 6 Właściwości ----------
P(sec('wlasciwosci', '6', 'Właściwości: rozpuszczalność, zasada, dysocjacja i odczyn', E8))
P('<h3 id="higroskopijnosc">6.1 Stan skupienia, higroskopijność i właściwości NaOH / KOH</h3>')
P(rep(L(231, 234), ' style="margin-top:14px;"', ''))
c = L(267, 273)
c = rep(c, L(271), '<p><strong>Przy rozpuszczaniu w wodzie</strong> wydziela się dużo ciepła (rozpuszczanie NaOH w wodzie przebiega z wydzieleniem ciepła) — naczynie może się mocno nagrzać. Zasady bezpiecznej pracy (ochrona, kolejność dodawania, pierwsza pomoc): ' + a('bhp', '§9.2') + '.</p>')
P(c)
P(L(331, 337))

P('<h3 id="rozpuszczalnosc-tabela">6.2 Rozpuszczalność wodorotlenków — tabela (odczyt jak na klasówce)</h3>')
P(L(820, 827))
P(L(315, 330))
P(L(341))
P(rep(L(658), '<p>', '<p id="wodor-grid">'))
P(L(659))

P('<h3 id="wodorotlenek-vs-zasada">6.3 Wodorotlenek a zasada; elektrolit i dysocjacja</h3>')
P('<div class="card card-basic">')
P(L(215, 223))
P('<p class="mini-note">Szkolne rozróżnienie wodorotlenek / zasada / jon OH⁻ i szersze definicje zasad (amoniak, Brønsted): ' + a('zasada-oh', '§10.2') + '.</p>')
P('</div>')
P(rep(L(235, 254), ' style="margin-top:12px;"', ''))
P('<h4 class="merge-h" id="diss-widget">Dysocjacja elektrolityczna zasad</h4>')
P('''<p><strong>Dysocjacja elektrolityczna</strong> to rozpad związku na jony pod wpływem wody. Rozpuszczona część wodorotlenku dysocjuje w szkolnym modelu praktycznie całkowicie, a liczba jonów OH⁻ w równaniu jest równa liczbie grup OH⁻ we wzorze (indeksowi za nawiasem):</p>
<div class="equation-box">NaOH → Na⁺ + OH⁻</div>
<div class="equation-box">KOH → K⁺ + OH⁻</div>
<div class="equation-box">Ca(OH)₂ → Ca²⁺ + 2OH⁻</div>
<div class="equation-box">Ba(OH)₂ → Ba²⁺ + 2OH⁻</div>
<p class="mini-note">Na E8 wystarczy zapis ze strzałką i jonami. Stany skupienia, równowaga dla trudno rozpuszczalnego Ca(OH)₂ i różnica rozpuszczalność / moc: ''' + a('moc-rozpuszczalnosc', '§10.3') + '.</p>')
P(L(652, 653))
P('<h4 class="merge-h">Energia rozpuszczania ' + UND + '</h4>')
P(rep(L(655, 656), 'model z §9.8', 'model z tej podsekcji'))

P('<h3 id="ph-wskazniki">6.4 Odczyn i wskaźniki</h3>')
P('''<p><strong>Skala pH:</strong> pH &lt; 7 — odczyn kwasowy, pH = 7 — obojętny, pH &gt; 7 — zasadowy. Im więcej wolnych jonów OH⁻ w roztworze, tym wyższe pH. Odczyn badamy <strong>wskaźnikami</strong> — substancjami, które zmieniają barwę zależnie od pH.</p>
<div class="table-wrap table-compact">
<table>
<thead><tr><th>Wskaźnik</th><th>Kwasowy</th><th>Obojętny</th><th>Zasadowy</th></tr></thead>
<tbody>
<tr><td>Fenoloftaleina</td><td>bezbarwna</td><td>bezbarwna</td><td>malinowa (zmiana barwy przy pH ≈ 8,2–10)</td></tr>
<tr><td>Oranż metylowy</td><td>czerwony (pomarańczowy przy pH ≈ 3,1–4,4)</td><td>żółty</td><td>żółty</td></tr>
<tr><td>Papierek uniwersalny</td><td>czerwony / pomarańczowy</td><td>żółtozielony</td><td>niebieski / granatowy</td></tr>
<tr><td>Wywar z czerwonej kapusty (domowy)</td><td>czerwony / różowy</td><td>fioletowy</td><td>niebieskozielony, w silnie zasadowym żółty</td></tr>
</tbody>
</table>
</div>''')
P(L(604).split('<div class="card card-core">')[0])
P(L(645, 650))

P('<h3 id="wapno">6.5 Wodorotlenek wapnia — wapno palone, gaszone, mleko i woda wapienna</h3>')
P(L(284, 311))
P('<p class="mini-note">Dlaczego woda wapienna i mleko wapienne to ta sama substancja w różnych układach (równowaga osad ⇌ jony) — ' + a('moc-rozpuszczalnosc', '§10.3') + '. Otrzymywanie CaO + H₂O krok po kroku — ' + a('metody', '§7.1') + '; BHP gaszenia wapna — ' + a('bhp', '§9.2') + '.</p>')
P('</section>')

# ---------- 7 Otrzymywanie ----------
P(sec('otrzymywanie', '7', 'Otrzymywanie wodorotlenków', E8))
P('<h3 id="metody">7.1 Trzy szkolne metody i ich warunki</h3>')
P(L(572))
P('''<div class="rule-box">
<h4 class="merge-h">Otrzymywanie — trzy modele, ale z warunkami</h4>
<ol>
<li><strong>Tlenek zasadowy + woda</strong> — np. Na₂O + H₂O → 2NaOH. Nie każdy tlenek metalu reaguje z wodą w ten sposób.</li>
<li><strong>Aktywny metal + woda</strong> — np. 2Na + 2H₂O → 2NaOH + H₂↑. Reakcja zależy od metalu i warunków. Wapń reaguje z zimną wodą spokojniej niż sód (Ca + 2H₂O → Ca(OH)₂ + H₂↑), magnez — dopiero z gorącą wodą (Mg + 2H₂O → Mg(OH)₂ + H₂↑).</li>
<li><strong>Sól + zasada</strong> — np. FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl, jeśli powstający wodorotlenek jest dostatecznie trudno rozpuszczalny. Ca(OH)₂ wytrąca się w ten sposób tylko z roztworów stężonych, bo jest trudno, ale nie praktycznie nierozpuszczalny.</li>
</ol>
<p class="mini-note">Typowe substraty: Na₂O, K₂O, CaO, BaO (metoda 1); Na, K, Ca (metoda 2); sole Cu²⁺, Fe²⁺, Fe³⁺, Mg²⁺, Al³⁺, Zn²⁺ + NaOH lub KOH (metoda 3).</p>
</div>''')
P(rep(L(343, 348), '<div class="card card-warning">', '<div class="card card-warning" id="uwaga-tlenki">'))
P(L(313))

P('<h3 id="stracanie">7.2 Strącanie wodorotlenków — barwy osadów</h3>')
P('<p>Metoda 3 to <strong>reakcja strąceniowa</strong>: kation metalu z roztworu soli łączy się z jonami OH⁻ z zasady i powstaje trudno rozpuszczalny osad. Barwa osadu pomaga rozpoznać kation.</p>')
P(L(338))
P(rep(L(339), 'Animacja cząsteczkowa: <a href="#ion-lab">§9.5</a>.', 'Animacja cząsteczkowa: <a href="#ion-lab">§12</a>; zapis jonowy: <a href="#rownania-jonowe">§13</a>.'))
P('<div class="equation-box" data-rx="alcl3Naoh">AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl</div><p class="mini-note">biały, galaretowaty osad; w nadmiarze NaOH roztwarza się (amfoteryczność, ' + a('amfoterycznosc', '§14') + ')</p>')
P('<div class="equation-box">MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl</div><p class="mini-note">biały osad — tak w praktyce szkolnej otrzymuje się Mg(OH)₂</p>')
P('<div class="equation-box">FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄</div><p class="mini-note">zielonkawy osad, który na powietrzu brunatnieje (niżej)</p>')
P(rep(L(739, 742), ' style="margin-top:12px;"', ''))
P('</section>')

# ---------- 8 Reakcje ----------
P(sec('reakcje', '8', 'Reakcje wodorotlenków', E8))
P('<h3 id="zobojetnianie">8.1 Zobojętnianie</h3>')
P(L(602, 603))
P('<p>Postęp zobojętniania śledzimy wskaźnikiem: fenoloftaleina odbarwia się, gdy w roztworze znika nadmiar OH⁻ (barwy wskaźników — ' + a('ph-wskazniki', '§6.4') + ').</p>')
P('<div class="card card-core">' + L(604).split('<div class="card card-core">')[1])
P(L(605))
P('<h4 class="merge-h">Licznik moli</h4>')
P(rep(L(629, 630), 'z §9.6', 'z tej podsekcji'))
P('<p class="mini-note">Zapis jonowy zobojętniania (jony widzowe, równanie skrócone H⁺ + OH⁻ → H₂O): ' + a('rownania-jonowe', '§13') + '.</p>')

P('<h3 id="co2-rozklad">8.2 Reakcja z CO₂ i rozkład termiczny</h3>')
P('''<div class="card card-basic">
<p><strong>Zasady reagują z tlenkami kwasowymi</strong>, np. z CO₂ — powstaje sól i woda:</p>
<div class="equation-box" data-rx="caoh2Co2">Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</div>
<div class="equation-box">2NaOH + CO₂ → Na₂CO₃ + H₂O</div>
<p>Pierwsza reakcja to wykrywanie CO₂ wodą wapienną i twardnienie zaprawy (''' + a('wapno', '§6.5') + '''). Druga wyjaśnia, dlaczego NaOH przechowuje się szczelnie: oprócz wilgoci pochłania też CO₂ z powietrza.</p>
</div>
<div class="card card-understand">
<span class="card-label">Rozkład termiczny</span> <span class="level-badge level-understand">ROZUMIENIE</span>
<p>Trudno rozpuszczalne wodorotlenki podczas ogrzewania rozkładają się na tlenek i wodę, np. <span class="formula">Cu(OH)₂ → CuO + H₂O</span> (niebieski osad czernieje), <span class="formula">2Fe(OH)₃ → Fe₂O₃ + 3H₂O</span>, <span class="formula">Mg(OH)₂ → MgO + H₂O</span>. Wodorotlenki litowców (NaOH, KOH) w zwykłych warunkach w ten sposób się nie rozkładają — topią się.</p>
</div>''')

P('<h3 id="mapa-przemian">8.3 Mapa przemian i reaktor</h3>')
P(rep(rep(L(581, 582), '<li><strong>ogrzewanie</strong> wodorotlenku (poza litowcami) → tlenek + woda</li>', '<li><strong>ogrzewanie</strong> wodorotlenku (poza litowcami) → tlenek + woda (' + a('co2-rozklad', '§8.2') + ')</li>'), 'model z §9.4', 'model z ' + a('metody', '§7.1')))
P(rep(L(697), '<p>', '<p id="reactor"><strong>Reaktor:</strong> '))
P(L(698))
P('</section>')

# ---------- 9 Zastosowania, BHP, życie ----------
P(sec('zastosowania', '9', 'Zastosowania, BHP i życie codzienne', E8))
P('<h3 id="zastosowania-lista">9.1 Zastosowania</h3>')
c = L(274, 282)
c = rep(c, '<li><strong>Ca(OH)₂:</strong> budownictwo (zaprawa), rolnictwo (bielenie), uzdatnianie wody, wykrywanie CO₂ (woda wapienna).</li>',
        '<li><strong>Ca(OH)₂:</strong> budownictwo (zaprawa), rolnictwo (odkwaszanie gleby — wapnowanie), bielenie pni drzew i ścian, uzdatnianie wody, wykrywanie CO₂ (woda wapienna).</li>')
c = rep(c, '</li>\n</ul>', '</li>\n<li><strong>Mg(OH)₂:</strong> zawiesina „mleko magnezowe” — środek zobojętniający kwas żołądkowy i przeczyszczający; dodatek ognioodporny do tworzyw.</li>\n</ul>')
P(c)
P('<h3 id="bhp">9.2 BHP — NaOH, KOH, CaO i związki baru</h3>')
P('''<div class="card card-warning">
<span class="card-label">Ochrona</span>
<p><strong>Ochrona:</strong> okulary ochronne i odpowiednie rękawice; substancje są silnie żrące. <strong>NaOH i KOH powodują oparzenia chemiczne skóry i oczu</strong> — nie dotykaj ich gołymi rękami; przechowuj w szczelnych naczyniach.</p>
</div>
<div class="rule-box" style="background:var(--c-warn-bg);border-color:var(--c-warn-line)">
<h4 class="merge-h">Rozpuszczanie stałego NaOH / KOH</h4>
''' + L(705, 713) + '''
</div>
<div class="rule-box" style="background:var(--c-warn-bg);border-color:var(--c-warn-line)">
<h4 class="merge-h">Gaszenie wapna: CaO + H₂O</h4>
<p>Doświadczenie wykonuje nauczyciel lub osoba prowadząca doświadczenie zgodnie z procedurą pracowni. CaO dodaje się ostrożnie, małymi porcjami; reakcja jest silnie egzotermiczna. Nie pochylaj się nad naczyniem i nie dotykaj gorącego układu. Nie dotykaj CaO mokrymi rękami — drobne cząstki Ca(OH)₂ unoszące się z parą są żrące dla oczu.</p>
</div>
<div class="card card-warning">
<span class="card-label">Inne zagrożenia</span>
<ul>
<li><strong>Związki baru:</strong> jony Ba²⁺ są toksyczne — Ba(OH)₂ nie jest stosowany w doświadczeniach uczniowskich.</li>
<li><strong>Sód i potas:</strong> reagują z wodą gwałtownie, wydziela się palny wodór — wyłącznie pokaz nauczyciela, bardzo mała porcja metalu, osłona.</li>
<li><strong>Środki do udrażniania rur</strong> zawierają NaOH — używaj w rękawicach, nie mieszaj z innymi środkami czystości (zwłaszcza kwasowymi).</li>
</ul>
</div>''')
P('<h3 id="zycie">9.3 Z życia codziennego — pytania</h3>')
P(L(1174, 1197))
P(rep(L(1205, 1210), '<strong>5. Dlaczego', '<strong>5. Dlaczego'))
P('<p class="mini-note">Czy woda amoniakalna to wodorotlenek? — ' + a('zasada-oh', '§10.2') + '.</p>')
P('</section>')

# ---------- 10 Model bez skrótów ----------
P(sec('model', '10', 'Model bez skrótów — cztery pytania o wodorotlenek', UND))
P('<p class="lead"><strong>Cel korekty:</strong> oddzielić budowę substancji, jej rozpuszczalność, dysocjację i odczyn. Te cztery rzeczy są powiązane, ale nie są tym samym.</p>')
P('<h3 id="cztery-pytania">10.1 Cztery pytania zamiast jednego hasła „zasada”</h3>')
P('<div class="rule-box">')
P(L(356, 361))
P(L(365, 375))
P(L(362))
P('</div>')
P('<h3 id="zasada-oh">10.2 Wodorotlenek ≠ zasada ≠ OH⁻; amoniak i NH₄OH</h3>')
P('<div class="rule-box" style="background:var(--c-warn-bg);border-color:var(--c-warn-line)">')
P(L(380, 386))
P('</div>')
P(rep(L(224, 226), 'Szczegóły znajdziesz w sekcji 18.', 'Historia pojęcia i teoria Brønsteda: ' + a('ambitny', 'Dodatek B') + '.'))
P('''<div class="card card-extra">
<span class="card-label">Amoniak i zapis NH₄OH — pułapka E8</span>
<p><strong>Amoniak NH₃</strong> i woda amoniakalna dają odczyn zasadowy, ale NH₃ <em>nie jest wodorotlenkiem</em> (brak metalu i grupy OH⁻ we wzorze substancji). To zasada w sensie Brønsteda / odczynu roztworu — szczegóły w ''' + a('ambitny', 'Dodatku B') + '''.</p>
<p><span class="formula">NH₄OH</span> można spotkać jako tradycyjny skrót. Dokładniejszy model wodnego amoniaku:</p>
<div class="equation-box"><strong>NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)</strong></div>
<p>Woda amoniakalna to roztwór <span class="formula">NH₃</span> w wodzie. Część cząsteczek reaguje: <span class="formula">NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</span>. Powstają jony OH⁻, więc odczyn jest zasadowy, ale wzór „NH₄OH” to uproszczenie szkolne — w rzeczywistości nie ma stabilnej cząsteczki NH₄OH jak w NaOH. Na E8 wystarczy: roztwór amoniaku ma odczyn zasadowy i reaguje z kwasami.</p>
</div>''')
P('<h3 id="moc-rozpuszczalnosc">10.3 Rozpuszczalność, dysocjacja i moc — przykład Ca(OH)₂</h3>')
P(L(259, 263).replace('<div class="card card-warning" style="margin-top:12px;">', '<div class="card card-warning">').split('</div><details class="adv">')[0] + '</div>')
P('''<div class="rule-box">
<h4 class="merge-h">Model rozpuszczania Ca(OH)₂ — nie myl osadu z roztworem</h4>
''' + L(390, 392) + '''
</div>
<div class="rule-box">
<h4 class="merge-h">Dysocjacja a zapis wzoru</h4>
''' + L(409, 411) + '''
</div>''')
P('<details class="adv">' + L(263).split('<details class="adv">')[1])
P(L(264).replace('</div></details>', '</div></details>'))
P('</section>')

# ---------- 11 Modele budowy ----------
P(sec('modele-budowy', '11', 'Modele budowy — rysunek szkolny a sieć jonowa', UND))
P('<h3 id="model3d">11.1 Dwa szkolne sposoby rysowania: NaOH, Ca(OH)₂, Al(OH)₃</h3>')
P(L(463))
P(rep(L(464, 488), 'w tej sekcji: modele A, B i jony', 'w ' + a('wzor-ogolny', '§5.2') + ': modele A, B i jony'))
P('</div>')
P(rep(rep(L(501, 507), '<span class="card-label">Model 1 — szkolny, po prawej</span>', '<span class="card-label">Model A — szkolny, po prawej</span>'), '<strong>To jest model szkolny</strong>', '<strong>To jest model szkolny (A)</strong>'))
P(rep(rep(L(508, 514), '<div class="card card-new">', '<div class="card card-understand">'), '<span class="card-label">Model 2 — przestrzenny, bez udawania wzoru strukturalnego</span>', '<span class="card-label">Model B — przestrzenny, bez udawania wzoru strukturalnego</span>'))
P(L(529, 545))
P('''<div class="card card-understand">
<span class="card-label">Jak rysować — krok po kroku</span>
<ol>
<li>Zacznij od wzoru sumarycznego: np. <span class="formula">Al(OH)₃</span>.</li>
<li>Odczytaj ładunek kationu.</li>
<li>Ustal (policz) liczbę grup <span class="formula">OH⁻</span>.</li>
<li>Rysuj każdą grupę <span class="formula">OH⁻</span> jako jeden blok.</li>
<li>Zapisz wzór sumaryczny: <span class="formula">NaOH</span>, <span class="formula">Ca(OH)₂</span>, <span class="formula">Al(OH)₃</span>.</li>
<li>W praktyce szkolnej wybierz <strong>czytelny model A</strong>, jeśli nie ma polecenia o geometrii przestrzennej.</li>
</ol>
<p>Ważne jest, żeby z rysunku było jasne: <strong>ile grup OH⁻ jest przyłączonych</strong>.</p>
</div>''')
P('<h3 id="siec-jonowa">11.2 Model a rzeczywista struktura — sieć jonowa</h3>')
P('''<div class="card card-warning">
<span class="card-label">Kluczowa poprawka</span>
''' + L(491, 492) + '''
<p>Stały wodorotlenek wapnia nie jest pojedynczą cząsteczką typu <span class="formula">H–O–Ca–O–H</span>. Taki rysunek może służyć wyłącznie jako model poglądowy liczby grup OH⁻.</p>
''' + L(499) + '''
<p>Żaden z tych rysunków nie odtwarza dokładnie budowy kryształu w stanie stałym. Dlatego oba wzory to <strong>modele poglądowe</strong> — przydatne w nauce, ale nie całkowicie dokładne.</p>
</div>
<details class="adv"><summary>Jak naprawdę wygląda kryształ Ca(OH)₂ i Mg(OH)₂? <span class="adv-tag">poziom akademicki</span></summary><div class="adv-body"><p>Ca(OH)₂ (portlandyt) i Mg(OH)₂ (brucyt) mają <strong>strukturę warstwową</strong>: płaskie warstwy kationów M²⁺ leżą między dwiema warstwami jonów OH⁻. Każdy kation otacza sześć jonów OH⁻ (koordynacja oktaedryczna), a każdy jon OH⁻ łączy trzy kationy. Wiązania O–H są ustawione prostopadle do warstw, a sąsiednie warstwy trzymają się słabymi oddziaływaniami — dlatego kryształy łatwo się łupią. To wyjaśnia, dlaczego „cząsteczka H–O–Ca–O–H” nie istnieje: każdy Ca²⁺ ma sześciu sąsiadów OH⁻, a nie dwóch.</p></div></details>''')
P('</section>')

# ---------- 12 Strącanie od środka ----------
P(sec('ion-lab', '12', 'Strącanie od środka — laboratorium jonowe', UND))
P(L(584))
c = L(585, 589)
c = rep(c, '</ol>\n', '</ol>\n<p class="widget-hint">Model dydaktyczny: wolne jony → zbliżanie i zderzenia → krótkotrwałe skupiska → zarodki → osad.</p>\n')
c = rep(c, 'tworzenia zarodków osadu.</p>', 'tworzenia zarodków osadu.</p>\n<p>Rzeczywisty proces jest bardziej złożony i może obejmować formy pośrednie oraz kompleksy. Animacja ma pokazać ideę powstawania fazy stałej, a nie pełną kinetykę procesu.</p>')
P(c)
P(L(596))
P('<details class="adv"><summary>Etapy pośrednie strącania — hydroksokompleksy <span class="adv-tag">poziom LO / akademicki</span></summary><div class="adv-body">\n' + L(592, 594) + '\n</div></details>')
P('<p class="mini-note">Równania strąceń i barwy osadów: ' + a('stracanie', '§7.2') + '; zapis jonowy: ' + a('rownania-jonowe', '§13') + '.</p>')
P('</section>')

# ---------- 13 Równania jonowe ----------
P(sec('rownania-jonowe', '13', 'Równania jonowe', EXT))
P('<p>Równanie jonowe pokazuje, które jony naprawdę biorą udział w reakcji. Zapis prowadzimy w trzech krokach: cząsteczkowe → jonowe pełne → jonowe skrócone (bez jonów widzów).</p>')
P('<h3 id="jonowe-zobojetnianie">13.1 Zobojętnianie w zapisie jonowym</h3>')
P(L(632, 643))
P('<h3 id="jonowe-stracanie">13.2 Strącanie i reakcje osadów w zapisie jonowym</h3>')
P('''<div class="jonowe-box">
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
</div>''')
P(L(568))
P(L(606))
P('<p class="mini-note">Oba przyciski otwierają modele równań jonowych silnika (CHE.IONIC): pierwszy — wszystkie reakcje lekcji (strącanie i zobojętnianie), drugi — zobojętnianie na trzech poziomach zapisu.</p>')
P('</section>')

# ---------- 14 Amfoteryczność ----------
P(sec('amfoterycznosc', '14', 'Amfoteryczność', EXT))
P(L(661, 684))
P('''<div class="rule-box">
<h4 class="merge-h">Amfoteryczność — zawsze pytaj „z czym?”</h4>
''' + L(687, 689) + '''
<div class="equation-box"><strong>Zn(OH)₂ + 2OH⁻ → [Zn(OH)₄]²⁻</strong> <span class="level-badge level-extra">LO</span></div>
''' + L(690) + '''
''' + L(695) + '''
</div>''')
P('<p class="mini-note">Doświadczenie z Al(OH)₃ w kwasie i w nadmiarze zasady: ' + a('doswiadczenia', '§15, doświadczenie H') + '. Tlenki amfoteryczne (Al₂O₃, ZnO): lekcja N01.</p>')
P('</section>')

# ---------- 15 Doświadczenia ----------
P(rep(L(700, 702), '<span class="part-num">10</span>', '<span class="part-num">15</span>'))
P('<p class="mini-note">Zasady BHP dla NaOH/KOH i gaszenia wapna: ' + a('bhp', '§9.2') + '.</p>')
c = rep(L(717, 730), '</div><div class="rule-box">', '<div class="rule-box">')
c = rep(c, '<h3>10. Obserwacja → wniosek</h3>', '<h4 class="merge-h">Obserwacja → wniosek — jak zapisać doświadczenie</h4>')
P(c)
P(L(731, 738))
P('</section>')

# ---------- 16 Klinika ----------
P(rep(L(744, 769), '<span class="part-num">11</span>', '<span class="part-num">16</span>'))
P(L(790))
c = L(791, 817)
c = rep(c, '<h3 class="merge-h">Sprawdź się (z modelu)</h3><div class="rule-box">\n<h3>11. Klinika błędów — sprawdź się</h3>', '<h3 class="merge-h">Sprawdź się</h3><div class="rule-box">')
c = rep(c, L(812) + '\n', '')
c = rep(c, L(813) + '\n', '')
P(c)

# ---------- 17 Ćwiczenia ----------
P(rep(L(818, 819), '<span class="part-num">12</span>', '<span class="part-num">17</span>'))
P('<p class="mini-note">Reguły potrzebne do zadań: wzory ' + a('budowa', '§5') + ', rozpuszczalność ' + a('rozpuszczalnosc-tabela', '§6.2') + ', otrzymywanie ' + a('otrzymywanie', '§7') + ', zobojętnianie ' + a('zobojetnianie', '§8.1') + '.</p>')
c = L(828, 972)
c = rep(c, '<h3>9A. Mini-check</h3>', '<h3>17.1 Mini-check</h3>')
c = rep(c, '<h3>9B. Ćwiczenie prowadzone — Ca(OH)₂</h3>', '<h3>17.2 Ćwiczenie prowadzone — Ca(OH)₂</h3>')
c = rep(c, '<h3>9C. Ćwiczenia samodzielne</h3>', '<h3>17.3 Ćwiczenia samodzielne</h3>')
c = rep(c, '<h4>A. Podstawa</h4>', '<h4>A. Podstawa ' + E8 + '</h4>')
c = rep(c, '<h4>B. Trening</h4>', '<h4>B. Trening / egzamin ' + E8 + '</h4>')
c = rep(c, '<h4>C. Ambitne</h4>', '<h4>C. Ambitne ' + UND + '</h4>')
c = rep(c, '<h4>D. Zaawansowane</h4>', '<h4>D. Zaawansowane ' + EXT + '</h4>')
c = rep(c, '<h4>E. Zadania z obserwacją</h4>', '<h4>E. Zadania z obserwacją (typ E8) ' + E8 + '</h4>')
c = rep(c, '<li>Problem → Hipoteza → Sprzęt → Obserwacja (brunatny osad) → Wniosek → Równanie → BHP.</li>',
        '<li>Problem → Hipoteza → Sprzęt → Obserwacja (brunatny osad) → Wniosek → Równanie → BHP. Równanie: FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl. Obserwacja: powstaje rdzawobrunatny osad. Wniosek: z soli żelaza(III) i zasady powstaje praktycznie nierozpuszczalny Fe(OH)₃ (por. doświadczenie D).</li>')
c = rep(c, '<li>Al(OH)₃ jest amfoteryczny.</li>',
        '<li>Al(OH)₃ jest amfoteryczny. Z kwasem reaguje jak zasada (Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O), a z mocną zasadą tworzy rozpuszczalny związek kompleksowy (Al(OH)₃ + NaOH → Na[Al(OH)₄]).</li>')
c = rep(c, '<li>Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP.</li>',
        '<li>Problem → Hipoteza → Sprzęt → Obserwacja → Wniosek → Równanie → BHP. Np.: problem — jaki odczyn ma roztwór KOH? Hipoteza — zasadowy. Sprzęt — roztwór KOH, fenoloftaleina, papierek uniwersalny, probówki. Obserwacja — fenoloftaleina malinowa, papierek niebieski. Wniosek — odczyn zasadowy (jony OH⁻). Równanie: KOH → K⁺ + OH⁻. BHP — okulary, rękawice.</li>')
P(c)

# ---------- 18 Test ----------
P(rep(L(1073, 1091), '<span class="part-num">14</span>', '<span class="part-num">18</span>'))

# ---------- 19 Karta szybkiego powtórzenia ----------
P(sec('karta', '19', 'Karta szybkiego powtórzenia (do druku)', E8))
P('''<div class="card card-basic">
<span class="card-label">Najważniejsze w 8 punktach</span>
<ol>
<li><strong>Wodorotlenek</strong> = kation metalu + n grup OH⁻; wzór M(OH)ₙ, n = wartość bezwzględna ładunku kationu (''' + a('budowa', '§5') + ''').</li>
<li><strong>Nawias</strong> tylko gdy OH⁻ &gt; 1: NaOH, Ca(OH)₂, Al(OH)₃; nazwa: wodorotlenek + metal (+ cyfra rzymska dla Fe, Cu…).</li>
<li><strong>Rozpuszczalne</strong>: NaOH, KOH, LiOH, Ba(OH)₂; Ca(OH)₂ trudno; osady: Cu(OH)₂ (niebieski), Fe(OH)₃ (brunatny), Mg(OH)₂, Al(OH)₃, Zn(OH)₂ (białe) (''' + a('rozpuszczalnosc-tabela', '§6.2') + ''').</li>
<li><strong>Zasada</strong> = wodny roztwór wodorotlenku z jonami OH⁻; dysocjacja Ca(OH)₂ → Ca²⁺ + 2OH⁻ (''' + a('wodorotlenek-vs-zasada', '§6.3') + ''').</li>
<li><strong>Wskaźniki w zasadzie</strong>: fenoloftaleina malinowa, oranż metylowy żółty, papierek niebieski (''' + a('ph-wskazniki', '§6.4') + ''').</li>
<li><strong>Otrzymywanie</strong>: tlenek + woda; metal aktywny + woda (+ H₂↑); sól + zasada → osad (''' + a('otrzymywanie', '§7') + ''').</li>
<li><strong>Zobojętnianie</strong>: wodorotlenek + kwas → sól + woda; H⁺ + OH⁻ → H₂O (''' + a('zobojetnianie', '§8.1') + ''').</li>
<li><strong>Woda wapienna + CO₂</strong> → CaCO₃↓ (mętnienie); NaOH/KOH higroskopijne i żrące (''' + a('wapno', '§6.5') + ', ' + a('bhp', '§9.2') + ''').</li>
</ol>
</div>''')
P(L(770, 789))
P('</section>')

# ---------- 20 Fiszki ----------
c = rep(L(973, 1072), '<span class="part-num">13</span>', '<span class="part-num">20</span>')
c = rep(c, L(1061, 1065) + '\n', '')
c = rep(c, '<span class="back"><strong>Wodorotlenek = substancja. Zasada = wodny roztwór wodorotlenku dostarczający OH⁻.</strong></span>\n<span class="card-tag tag-extra">ambitny</span>',
        '<span class="back"><strong>Wodorotlenek = substancja. Zasada = wodny roztwór wodorotlenku dostarczający OH⁻.</strong></span>\n<span class="card-tag tag-basic">podstawa</span>')
c = rep(c, '<span class="front">Amfoteryczne wodorotlenki</span>', '<span class="front">Amfoteryczne wodorotlenki</span>')
c = rep(c, '\n</div>\n</section>', '''
<button class="flashcard" onclick="toggleFlashcard(this)">
<span class="front">Woda wapienna + CO₂ → ?</span>
<span class="back"><strong>CaCO₃↓ + H₂O — roztwór mętnieje (wykrywanie CO₂)</strong></span>
<span class="card-tag tag-exam">E8</span>
</button>
<button class="flashcard" onclick="toggleFlashcard(this)">
<span class="front">Barwa Cu(OH)₂</span>
<span class="back"><strong>Niebieska (galaretowaty osad)</strong></span>
<span class="card-tag tag-basic">podstawa</span>
</button>
<button class="flashcard" onclick="toggleFlashcard(this)">
<span class="front">Wapno palone, gaszone</span>
<span class="back"><strong>Palone = CaO; gaszone = Ca(OH)₂</strong></span>
<span class="card-tag tag-exam">E8</span>
</button>
</div>
</section>''')
P(c)

# ---------- 21 Mapa pojęć ----------
P(sec('mapa', '21', 'Mapa pojęć'))
P('''<div class="card map-card">
<div class="mmx"><div class="mmx-box" style="--mm:#0d6868"><b>WODOROTLENEK</b><ul><li>kation metalu + aniony OH⁻</li><li>substancja stała (kryształ, osad)</li><li>sieć jonowa, nie cząsteczka H–O–M–O–H</li></ul></div><div class="mmx-box" style="--mm:#b06f1c"><b>M(OH)ₙ — kation + n grup OH⁻</b><ul><li>n = liczba grup OH⁻ (w prostych wodorotlenkach = wartościowość kationu)</li><li>suma ładunków = 0</li></ul></div><div class="mmx-box" style="--mm:#2e7d4f"><b>WZORY I NAZWY</b><ul><li>NaOH, KOH, Ca(OH)₂</li><li>Al(OH)₃, Fe(OH)₃</li><li>Cu(OH)₂, Mg(OH)₂</li><li>nawias gdy OH &gt; 1</li><li>cyfra rzymska: Fe, Cu, Sn, Pb</li></ul></div><div class="mmx-box" style="--mm:#b06f1c"><b>ROZPUSZCZALNOŚĆ</b><ul><li>✓ NaOH, KOH, LiOH, Ba(OH)₂</li><li>~ Ca(OH)₂, Mg(OH)₂</li><li>× Fe(OH)₃, Cu(OH)₂, Al(OH)₃</li><li>Ca(OH)₂ = woda wapienna</li><li>mleko wapienne = zawiesina</li></ul></div><div class="mmx-box" style="--mm:#2b5e9c"><b>ZASADA I DYSOCJACJA</b><ul><li>zasada = wodny roztwór wodorotlenku</li><li>NaOH → Na⁺ + OH⁻</li><li>elektrolit — przewodzi prąd</li><li>rozpuszczalny ≠ mocny</li></ul></div><div class="mmx-box" style="--mm:#6b3fa0"><b>WŁAŚCIWOŚCI</b><ul><li>odczyn zasadowy</li><li>wskaźniki</li><li>zobojętnianie</li><li>tylko rozpuszczalne</li><li>NaOH, KOH: higroskopijne, żrące</li></ul></div><div class="mmx-box" style="--mm:#2b5e9c"><b>OTRZYMYWANIE</b><ul><li>1. tlenek + woda</li><li>2. metal aktywny + woda</li><li>3. sól + zasada</li><li>zależnie od wodorotlenku</li></ul></div><div class="mmx-box" style="--mm:#b83a45"><b>ZOBOJĘTNIANIE</b><ul><li>wodorotlenek + kwas</li><li>→ sól + woda</li><li>H⁺ + OH⁻ → H₂O</li><li>jony widzowe: Na⁺, Cl⁻</li></ul></div><div class="mmx-box" style="--mm:#2e7d4f"><b>INNE REAKCJE</b><ul><li>zasada + CO₂ → sól + woda</li><li>ogrzewanie → tlenek + woda</li><li>strącanie → osad o barwie kationu</li></ul></div><div class="mmx-box" style="--mm:#6b3fa0"><b>AMFOTERYCZNOŚĆ</b><ul><li>Al(OH)₃, Zn(OH)₂</li><li>+ kwasy, + zasady</li><li>poziom rozszerzony</li></ul></div><div class="mmx-box" style="--mm:#b06f1c"><b>Ca(OH)₂ — WAPNO</b><ul><li>palone CaO → gaszone Ca(OH)₂</li><li>mleko (zawiesina) → woda (roztwór)</li><li>wykrywanie CO₂, zaprawa</li></ul></div><div class="mmx-box" style="--mm:#1a2332"><b>MOSTY: tlenki · kwasy · sole</b><ul><li>N01: tlenek zasadowy + woda</li><li>N03: kwas + zasada</li><li>N04: sól + zasada, produkt zobojętniania</li></ul></div></div>
</div>''')
P('</section>')

# ---------- 22 Słownik ----------
c = rep(L(1127, 1148), '<span class="part-num">17</span>', '<span class="part-num">22</span>')
c = rep(c, L(1140) + '\n', '')
c = rep(c, '<div class="def-item"><dt>Teoria Brønsteda</dt>', '''<div class="def-item"><dt>Nieelektrolit</dt><dd>Substancja, której roztwór nie przewodzi prądu, bo nie zawiera swobodnych jonów (np. cukier).</dd></div>
<div class="def-item"><dt>Jony widzowe</dt><dd>Jony, które nie zmieniają się w reakcji (np. Na⁺ i Cl⁻ przy zobojętnianiu NaOH kwasem solnym); pomija się je w równaniu jonowym skróconym.</dd></div>
<div class="def-item"><dt>Odczyn zasadowy</dt><dd>Odczyn roztworu o pH &gt; 7 — nadmiar jonów OH⁻ względem czystej wody.</dd></div>
<div class="def-item"><dt>Wapno palone / gaszone</dt><dd>CaO / Ca(OH)₂.</dd></div>
<div class="def-item"><dt>Teoria Brønsteda</dt>''')
P(c)

# ---------- 23 Checklista ----------
P(sec('checklista', '23', 'Checklista'))
P('''<div class="checklist">
<h4>Sprawdź, czy umiesz:</h4>
<ul>
<li>Zapisać wzór wodorotlenku dla dowolnego kationu.</li>
<li>Potrafię zapisać wzory: NaOH, KOH, Ca(OH)₂, Al(OH)₃, Cu(OH)₂ i podać nazwy</li>
<li>Zastosować nawias, gdy grupa OH⁻ powtarza się więcej niż raz.</li>
<li>Nazwać wodorotlenek (z cyfrą rzymską dla Fe, Cu, Sn, Pb).</li>
<li>Potrafię narysować szkolny model poglądowy Ca(OH)₂ i Al(OH)₃ (O–H ciągła, M···O przerywana) i wiem, że to nie jest wzór strukturalny cząsteczki</li>
<li>Rozróżnić wodorotlenki rozpuszczalne i nierozpuszczalne.</li>
<li>Rozróżnić wodorotlenek (substancja) od zasady (roztwór); znam pojęcie elektrolitu.</li>
<li>Zapisać dysocjację zasady.</li>
<li>Opisać odczyn zasadowy i wskaźniki.</li>
<li>Znam higroskopijność NaOH/KOH i BHP ługów</li>
<li>Rozróżniam wapno palone, gaszone, mleko i wodę wapienną</li>
<li>Zapisać reakcję niektórych tlenków zasadowych metali aktywnych z wodą, np. CaO + H₂O → Ca(OH)₂.</li>
<li>Wyjaśnić, dlaczego nie każdy tlenek reaguje z wodą.</li>
<li>Rozpoznać, że metal aktywny + woda → wodorotlenek + wodór.</li>
<li>Zapisać reakcję strącania z soli i zasady. Podać barwę osadu Cu(OH)₂ i Fe(OH)₃.</li>
<li>Zapisać reakcję zobojętniania.</li>
<li>Zapisać reakcję wody wapiennej z CO₂.</li>
<li>(ambitnie) Wyjaśnić amfoteryczność.</li>
<li>(ambitnie) Zapisać równanie jonowe skrócone.</li>
</ul>
</div>''')
P('</section>')

# ---------- 24 Wskazówki ----------
c = rep(L(1212, 1251), '<span class="part-num">20</span>', '<span class="part-num">24</span>')
c = rep(c, 'wzór wodorotlenku (§9.3), przegląd (§9.9), strącanie (§9.5).', 'wzór wodorotlenku (' + a('wzor-ogolny', '§5.2') + '), przegląd (' + a('rozpuszczalnosc-tabela', '§6.2') + '), strącanie (' + a('ion-lab', '§12') + ').')
P(c)

# ---------- Dodatek A — Historia ----------
c = L(61, 65)
c = rep(c, '<span class="part-num">2</span> Historia odkrycia', '<span class="part-num">A</span> Dodatek A — Historia odkrycia')
c = rep(c, '<span>potas</span>', '<span>potaż</span>')
c = rep(c, 'Pokazał, że „potas” i „soda” to tlenki metali — metale litowców istnieją!', 'Pokazał, że alkalia żrące — „potaż” i „soda” — są związkami nieznanych wcześniej metali: potasu i sodu. Metale litowców istnieją!')
c = rep(c, 'To definicja, której uczysz się na E8.</figcaption>', 'To definicja, której uczysz się na E8. Zob. ' + a('wodorotlenek-vs-zasada', '§6.3') + '.</figcaption>')
c = rep(c, 'na E8 wystarczy Arrhenius.</figcaption>', 'na E8 wystarczy Arrhenius. Zob. ' + a('ambitny', 'Dodatek B') + '.</figcaption>')
P(c)

# ---------- Dodatek B — ambitny ----------
P(sec('ambitny', 'B', 'Dodatek B — teorie kwasów i zasad, hydraty', EXT))
P(L(1151, 1162))
P('''<details class="adv"><summary>Teoria Lewisa — jeszcze szersza definicja <span class="adv-tag">poziom akademicki</span></summary><div class="adv-body"><p>Gilbert N. Lewis (1923): <strong>zasada</strong> to donor pary elektronowej, <strong>kwas</strong> — jej akceptor. Jon OH⁻ i cząsteczka NH₃ są zasadami Lewisa (mają wolną parę elektronową), a np. Al³⁺ czy BF₃ — kwasami Lewisa. Powstawanie jonu [Al(OH)₄]⁻ (''' + a('amfoterycznosc', '§14') + ''') to reakcja kwasu Lewisa Al(OH)₃ z zasadą Lewisa OH⁻.</p></div></details>''')
P(rep(rep(L(227, 230), '<div class="card card-extra" style="margin-top:12px;">', '<div class="card card-extra">'), 'np. <span class="formula">CuSO₄·5H₂O</span>.', 'np. <span class="formula">CuSO₄·5H₂O</span> (sam hydrat soli nie jest wodorotlenkiem).'))
P('''<div class="card card-extra">
<span class="card-label">Pozostałe zagadnienia ambitne — gdzie są w lekcji</span>
<ul>
<li><strong>Amfoteryczność</strong> Al(OH)₃ i Zn(OH)₂ — ''' + a('amfoterycznosc', '§14') + '''.</li>
<li><strong>AgOH, CuOH</strong> — nietrwałe wodorotlenki, równania rozkładu — ''' + a('nazwy', '§5.4') + '''.</li>
<li><strong>Moc a rozpuszczalność</strong>, iloczyn rozpuszczalności — ''' + a('moc-rozpuszczalnosc', '§10.3') + '''.</li>
<li><strong>Równania jonowe</strong> — ''' + a('rownania-jonowe', '§13') + '''; <strong>hydroksokompleksy</strong> — ''' + a('ion-lab', '§12') + '''.</li>
</ul>
</div>''')
P('</section>')

# ---------- Modele silnika ----------
MODELS = [
    ('n02-wzory-v01', 'Wzór wodorotlenku: bilans ładunków, nawias, modele A/B/jony', 'wzor-ogolny', '§5.2'),
    ('tabela-rozpuszczalnosci-v01', 'Tabela rozpuszczalności (kolumna OH⁻)', 'rozpuszczalnosc-tabela', '§6.2'),
    ('n02-przeglad-v01', 'Kafelki wodorotlenków: rozpuszczalność, barwa, odczyn', 'rozpuszczalnosc-tabela', '§6.2'),
    ('n02-dysocjacja-v01', 'Rozpuszczanie, dysocjacja, efekt cieplny', 'wodorotlenek-vs-zasada', '§6.3'),
    ('ph-indicators-v03', 'Panel pH i barwy wskaźników (także doświadczenie E)', 'ph-wskazniki', '§6.4'),
    ('gfx-scene-indicatorRack', 'Wskaźnik w siedmiu roztworach', 'ph-wskazniki', '§6.4'),
    ('n02-otrzymywanie-v01', 'Trzy metody otrzymywania i mapa przemian', 'metody', '§7.1'),
    ('n02-zobojetnianie-v01', 'Zobojętnianie: licznik moli, pH, krzywa', 'zobojetnianie', '§8.1'),
    ('n02-reaktor-v01', 'Reaktor: wodorotlenek + odczynnik', 'mapa-przemian', '§8.3'),
    ('n02-stracanie-v01', 'Laboratorium jonowe — strącanie 13 wodorotlenków', 'ion-lab', '§12'),
    ('rownania-jonowe-v01', 'Równania jonowe — wszystkie reakcje (strącanie, zobojętnianie)', 'rownania-jonowe', '§13'),
    ('neutralization', 'Równania jonowe zobojętniania — trzy poziomy zapisu', 'rownania-jonowe', '§13'),
    ('n02-doswiadczenia-v01', 'Pracownia: 26 doświadczeń z wodorotlenkami', 'doswiadczenia', '§15'),
]
rows = '\n'.join('<tr><td><code>%s</code></td><td>%s</td><td>%s</td></tr>' % (m, d, a(i, s)) for m, d, i, s in MODELS)
P(sec('modele-silnika', '↻', 'Modele silnika w tej lekcji'))
P('<div class="table-wrap table-compact"><table><thead><tr><th>Model</th><th>Co pokazuje</th><th>Gdzie</th></tr></thead><tbody>\n' + rows + '\n</tbody></table></div>')
P('<p class="mini-note">Każdy model ma w lekcji jeden przycisk. Modele <code>rownania-jonowe-v01</code> i <code>neutralization</code> częściowo się pokrywają (oba pokazują zobojętnianie w zapisie jonowym) — zostały obok siebie w §13.</p>')
P('</section>')

# ---------- Audyt ----------
c = L(1252, 1270)
c = rep(c, '<span class="part-num">✓</span> Audyt jakości <span class="level-badge level-new">KONTROLA</span></div>', '''<span class="part-num">✓</span> Audyt jakości</div><div class="card card-new"><span class="card-label">v9.0 (2026-10-07) — redakcja według standardu lekcji</span><ul><li>Nowy układ: start (1–4) → rdzeń E8 (5–9: definicja i budowa, właściwości, otrzymywanie, reakcje, zastosowania i BHP) → rozumienie / ambitne (10–14) → praktyka (15–18) → powtórka (19–24) → dodatki A–B → modele silnika.</li><li>Scalono powtórzenia: Ściąga (dawna §7), Model bez skrótów (§8) i Wyjaśnienie (§9) — każdy temat ma jedno pełne miejsce, w innych tylko odnośnik.</li><li>Uzupełnienia: tabela wskaźników i skala pH, dysocjacja zasad, reakcja z CO₂ i rozkład termiczny, strącanie Mg(OH)₂, Al(OH)₃, Fe(OH)₂, równania jonowe strąceń, struktura warstwowa Ca(OH)₂ (akademickie), teoria Lewisa, karta powtórzenia, tabela modeli silnika.</li><li>Poprawki: Ca(OH)₂ w rolnictwie (wapnowanie, nie „bielenie”), opis odkrycia Davy’ego, „dwa jony OH⁻”, poprawnie zamknięty blok o hydroksokompleksach, odnośniki §.</li></ul></div>''')
P(c)
P('</section>')
P(rep(L(1279, 1282), 'CHEMIA N02 v7.5 POPRAWIONY', 'CHEMIA N02 v9.0'))
P(L(1283, len(lines)))

html = '\n'.join(out)
# ---------- spis treści ----------
from bs4 import BeautifulSoup
b = BeautifulSoup(html, 'html.parser')
links = ['<a class="toc-link" href="#minimum">Minimum E8</a>']
for s in b.select('main > section.section'):
    ph = s.find('div', class_='part-heading')
    num = ph.find('span', class_='part-num').get_text()
    t = ''.join(x if isinstance(x, str) else '' for x in ph.contents).strip()
    links.append('<a class="toc-link" href="#%s">%s. %s</a>' % (s['id'], num, t))
toc = '<details class="toc-item" open><summary class="toc-summary">Spis treści</summary><nav class="toc-links">' + ''.join(links) + '</nav></details>'
html = html.replace(TOC_PLACEHOLDER, toc)
open(DST, 'w', encoding='utf-8').write(html)
print('zapisano', len(html))
