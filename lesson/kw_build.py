# -*- coding: utf-8 -*-
"""N03 Kwasy v1.5 — poprawki merytoryczne + uzupełnienia. Wejście: kw_orig.html (z v0_30), wyjście: kw_new.html.
Zasada: nic nie znika — błędne zdania są zastępowane poprawionymi, treści ponad poziom biol-chem trafiają do <details class="adv"> (przełącznik w nagłówku)."""
import os, re
D = os.path.dirname(os.path.abspath(__file__))
h = open(os.path.join(D, 'kw_orig.html'), encoding='utf-8').read()
h = re.sub(r'\bL03\b', 'N03', h)  # kody lekcji: L03 → N03 (kanon: N = nieorganiczna)
LOG = []

def rep(old, new, label, count=1):
    global h
    n = h.count(old)
    assert n >= 1, 'BRAK: ' + label
    if count == 'all':
        h = h.replace(old, new)
    else:
        assert n == count, '%s: oczekiwano %d, jest %d' % (label, count, n)
        h = h.replace(old, new)
    LOG.append(label)

def after(anchor, add, label):
    rep(anchor, anchor + add, label)

def before(anchor, add, label):
    rep(anchor, add + anchor, label)

def viz(vid, title, sub='Doświadczenie w silniku GFX · otwiera się w oknie'):
    return ('<div class="che-lesson-viz-ref" data-che-lesson-viz="%s"><button type="button" data-che-open-viz="%s" '
            'onclick="parent.postMessage({type:\'CHE_LESSON_OPEN_VISUAL\',visualId:\'%s\',lessonId:\'N03\'},\'*\')">'
            '<b>%s</b><span>%s</span></button></div>\n') % (vid, vid, vid, title, sub)

def adv(title, body):
    return ('<details class="adv"><summary>%s <span class="adv-tag">poziom akademicki · poza maturą rozszerzoną</span></summary>'
            '<div class="adv-body">%s</div></details>\n') % (title, body)

# ===================== 0. Wersja, styl, przełącznik =====================
rep('<title>Chemia N03 — Kwasy (v1.4 MASTER LAB + mnemoniki)</title>', '<title>Chemia N03 — Kwasy (v1.6 MASTER LAB · korekta merytoryczna)</title>', 'tytuł v1.5')
rep('<div class="hero-kicker">N03 · MASTER LAB v1.2</div>', '<div class="hero-kicker">N03 · MASTER LAB v1.6</div>', 'kicker v1.5')
CSS = ('<style id="kw-v15-style">details.adv{border:1px dashed var(--c-warn-line,#eed8a8);border-radius:10px;background:var(--surface-soft,#f6f8fa);margin:10px 0;padding:0 12px}'
       'details.adv>summary{cursor:pointer;font-weight:700;color:var(--c-warn,#b06f1c);padding:9px 0;list-style:none}details.adv>summary::-webkit-details-marker{display:none}'
       'details.adv>summary::before{content:"▸ "}details.adv[open]>summary::before{content:"▾ "}.adv-tag{font-weight:600;font-size:11px;opacity:.75;margin-left:6px}'
       '.adv-body{padding:0 0 10px;font-size:13.5px;line-height:1.6}.adv-body table{font-size:12.5px}'
       '.adv-toggle{margin-top:10px;border:1px solid var(--c-warn-line,#eed8a8);background:var(--c-warn-bg,#fcf4e6);color:var(--c-warn,#b06f1c);border-radius:999px;padding:6px 12px;font:700 12px Inter,system-ui,sans-serif;cursor:pointer}'
       '.bio-tag{display:inline-block;font:800 10px Inter,system-ui;letter-spacing:.04em;padding:2px 7px;border-radius:99px;background:rgba(46,125,79,.12);color:#2e7d4f;margin-left:6px;vertical-align:middle}'
       '.v15{display:inline-block;font:800 9.5px Inter,system-ui;padding:1px 6px;border-radius:99px;background:rgba(13,125,125,.12);color:#0d7d7d;margin-left:6px;vertical-align:middle}'
       '@media print{details.adv{display:block}details.adv>.adv-body{display:block}}</style>')
before('</head>', CSS, 'CSS v1.5')
after('<span class="level-badge level-new">NOWE MODELE</span>\n</div>',
      '\n<button type="button" class="adv-toggle" id="advToggle" aria-pressed="false">Pokaż treści akademickie (ukryte)</button>'
      '<p class="mini-note">Treści ponad poziom matury rozszerzonej (biol-chem) są zwinięte w ramkach „poziom akademicki” — nic nie zostało usunięte. Przycisk rozwija lub zwija wszystkie naraz.</p>',
      'przełącznik adv')
JS = ('<script>(function(){var b=document.getElementById("advToggle");if(!b)return;var all=function(){return document.querySelectorAll("details.adv")};'
      'var n=all().length;b.textContent="Pokaż treści akademickie ("+n+")";b.addEventListener("click",function(){var on=b.getAttribute("aria-pressed")!=="true";'
      'all().forEach(function(d){d.open=on});b.setAttribute("aria-pressed",on?"true":"false");b.textContent=(on?"Ukryj":"Pokaż")+" treści akademickie ("+n+")"});'
      'window.addEventListener("beforeprint",function(){all().forEach(function(d){d.open=true})});})();</script>\n')
before('</body>', JS, 'JS przełącznika')

# ===================== Minimum E8: 8 → 10 faktów =====================
rep('<h3>Muszę umieć na E8 — 8 faktów</h3>', '<h3>Muszę umieć na E8 — 10 faktów</h3>', 'minimum 10')
after('<li><strong>BHP:</strong> kwas do wody, nigdy odwrotnie (reakcja egzotermiczna). Okulary, rękawice, nie pipetować ustami, nie wąchać bezpośrednio.</li>',
      '\n<li><strong>Właściwości:</strong> stężony HCl „dymi” i ma ostry zapach; stężony H₂SO₄ jest oleisty, higroskopijny i <em>zwęgla</em> cukier, papier, drewno; HNO₃ żółknie na świetle, a z białkiem daje <em>żółte</em> zabarwienie (reakcja ksantoproteinowa).</li>'
      '\n<li><strong>Roztwory kwasów przewodzą prąd</strong> — są elektrolitami, bo zawierają jony (H₃O⁺ i aniony reszty). Stężenie procentowe: C<sub>p</sub> = m<sub>s</sub>/m<sub>r</sub> · 100%.</li>',
      'minimum +2')

# ===================== 1. Definicje =====================
rep('<p>W tym ujęciu <strong>każdy kwas Arrheniusa jest też kwasem Brønsteda</strong>, ale nie odwrotnie — bo kwasem może być substancja, która nie ma wodoru w klasycznym sensie, o ile tylko oddaje proton.</p>',
    '<p>W tym ujęciu <strong>każdy kwas Arrheniusa jest też kwasem Brønsteda</strong>, ale nie odwrotnie. Kwasem Brønsteda może być także <strong>jon</strong> (np. NH₄⁺, HSO₄⁻, H₃O⁺, H₂PO₄⁻) albo cząsteczka, która oddaje proton innej substancji poza wodą (np. HCl wobec NH₃: HCl + NH₃ → NH₄Cl). '
    'Każdy kwas Brønsteda <strong>musi mieć atom wodoru</strong>, który może odłączyć jako proton. Substancje kwasowe <em>bez wodoru</em> (np. BF₃, AlCl₃, CO₂ wobec OH⁻) opisuje dopiero teoria <strong>Lewisa</strong> (sekcja 13).</p>'
    '\n<p class="mini-note"><span class="v15">v1.5</span> Poprawka: wcześniej napisano, że kwasem Brønsteda może być substancja „bez wodoru” — to nieprawda; dotyczy to kwasów Lewisa.</p>',
    'Brønsted: kwas musi mieć H')

# ===================== 2. Nazewnictwo — H₃PO₃ =====================
rep('<tr><td>H₃PO₃</td><td>kwas fosforowy(III)</td><td>PO₃³⁻</td></tr>',
    '<tr><td>H₃PO₃</td><td>kwas fosforowy(III)</td><td>PO₃³⁻ <small>(szkolny zapis formalny; w rzeczywistości HPO₃²⁻ — zob. 2.3)</small></td></tr>', 'H₃PO₃ reszta')
rep('<tr><td>Trójprotonowy</td><td>3 atomy H</td><td>H₃PO₄, H₃PO₃</td></tr>',
    '<tr><td>Trójprotonowy</td><td>3 atomy H</td><td>H₃PO₄ (H₃PO₃ — tylko formalnie, zob. uwagę)</td></tr>', 'H₃PO₃ protonowość')
after('pozostałe 3 atomy H są związane z węglem i nie dysocjują.</p>',
      '\n<p class="mini-note"><strong>Uwaga 2:</strong> H₃PO₃ ma 3 atomy H, ale jeden jest związany bezpośrednio z fosforem, więc kwas jest w praktyce <strong>dwuprotonowy</strong> (sole: Na₂HPO₃). W tabelach szkolnych zapisuje się go formalnie jako trójprotonowy — na E8 wystarczy wzór i nazwa.</p>\n'
      + adv('Budowa kwasów tlenowych i „ile protonów naprawdę jest kwasowych”',
            '<p>Kwasowe są tylko atomy H związane z <strong>tlenem</strong> (grupy –O–H). W H₃PO₃ struktura to HP(O)(OH)₂ (kwas fosfonowy), a w H₃PO₂ — H₂P(O)OH (kwas fosfinowy, jednoprotonowy). '
                'Moc kwasów tlenowych rośnie z liczbą „wolnych” atomów O przy atomie centralnym (reguła Paulinga: HClO pKa ≈ 7,5; HClO₂ ≈ 2; HClO₃ ≈ −1; HClO₄ ≈ −10) — każdy dodatkowy atom O stabilizuje ładunek anionu (rezonans).</p>'),
      'uwaga H₃PO₃ + adv Pauling')

# ===================== 4. Otrzymywanie =====================
rep('<p class="mini-note">Typ reakcji: synteza (łączenie). Zachodzi dla tlenków kwasowych.</p>',
    '<p class="mini-note">Typ reakcji: synteza (łączenie). Zachodzi dla tlenków kwasowych — z wyjątkiem SiO₂, który z wodą nie reaguje. Zapis P₂O₅ jest uproszczony: rzeczywista cząsteczka to P₄O₁₀ (P₄O₁₀ + 6 H₂O → 4 H₃PO₄). NO₂ nie jest tlenkiem jednego kwasu: z wodą daje HNO₃ i HNO₂ (2 NO₂ + H₂O → HNO₃ + HNO₂).</p>',
    '4.1 uwagi SiO₂/P₄O₁₀/NO₂')
rep('<div class="formula-lg">H₂ + Cl₂ → 2 HCl (nad kat.)</div>', '<div class="formula-lg">H₂ + Cl₂ →(światło lub T) 2 HCl</div>', 'H₂+Cl₂ warunki')
rep('<div class="formula-lg">H₂ + I₂ → 2 HI (nad kat.)</div>', '<div class="formula-lg">H₂ + I₂ ⇌ 2 HI (T, katalizator Pt — reakcja odwracalna)</div>', 'H₂+I₂ warunki')
rep('<p class="mini-note">Wymaga katalizatora lub warunków (temperatura, światło). W laboratorium otrzymuje się najczęściej przez reakcję soli z mocnym kwasem (metoda 4.3).</p>',
    '<p class="mini-note">Reakcje wymagają zapoczątkowania: mieszanina H₂ + Cl₂ <strong>wybucha na świetle</strong> (reakcja łańcuchowa), z Br₂ i S wodór reaguje po ogrzaniu, z I₂ — tylko częściowo (równowaga). Powstają <strong>gazy</strong> (HCl, HBr, HI, H₂S) — kwasy dają dopiero po rozpuszczeniu w wodzie. W laboratorium otrzymuje się je najczęściej przez reakcję soli z kwasem mniej lotnym lub mocniejszym (metoda 4.3).</p>',
    '4.2 warunki')

PROPS = '''
<h3>4.5 Właściwości wybranych kwasów <span class="v15">nowe v1.5</span></h3>
<div class="card card-basic">
<span class="card-label">E8 — właściwości fizyczne i charakterystyczne reakcje</span>
<div class="table-wrap"><table>
<thead><tr><th>Kwas</th><th>Wygląd, zapach</th><th>Stężony (handlowy)</th><th>Cechy szczególne</th></tr></thead>
<tbody>
<tr><td>HCl(aq) — solny</td><td>bezbarwna ciecz (techniczny — żółtawy od Fe³⁺), ostry, duszący zapach</td><td>36–38%, d ≈ 1,18 g/cm³</td><td><strong>„dymi”</strong> na powietrzu: ulatniający się HCl tworzy z parą wodną mgiełkę kropelek kwasu; lotny</td></tr>
<tr><td>H₂SO₄ — siarkowy(VI)</td><td>bezbarwna, <strong>oleista</strong>, bezwonna ciecz</td><td>96–98%, d ≈ 1,84 g/cm³, wrze ok. 337 °C</td><td><strong>higroskopijny</strong> (pochłania wodę — osuszacz), <strong>odwadnia i zwęgla</strong> cukier, papier, drewno, tkanki; rozcieńczanie silnie egzotermiczne; prawie nielotny</td></tr>
<tr><td>HNO₃ — azotowy(V)</td><td>bezbarwna ciecz, ostry zapach</td><td>65–68%, d ≈ 1,40 g/cm³</td><td>na świetle <strong>żółknie</strong>: 4 HNO₃ → 4 NO₂ + O₂ + 2 H₂O (przechowujemy w ciemnych butelkach); z białkiem — <strong>żółte zabarwienie</strong> (reakcja ksantoproteinowa); silny utleniacz</td></tr>
<tr><td>H₃PO₄ — fosforowy(V)</td><td>bezbarwna, syropowata ciecz (czysty — kryształy, topi się ok. 42 °C), bezwonna</td><td>ok. 85%</td><td>nie utlenia, mało lotny; w małych ilościach dodatek do żywności (E338)</td></tr>
<tr><td>H₂CO₃ — węglowy</td><td>istnieje tylko w roztworze (woda gazowana)</td><td>—</td><td><strong>nietrwały</strong>: H₂CO₃ ⇌ H₂O + CO₂ (dlatego „gazowanie” uchodzi po otwarciu butelki)</td></tr>
<tr><td>H₂S(aq) — siarkowodorowy</td><td>bezbarwny roztwór, zapach zgniłych jaj</td><td>—</td><td>H₂S jest silnie <strong>trujący</strong>; wody siarczkowe; czernieje papierek z octanem ołowiu(II)</td></tr>
</tbody></table></div>
<p class="mini-note">Wspólne dla wszystkich roztworów kwasów: kwaśny smak (NIE sprawdzamy w laboratorium!), zmiana barwy wskaźników, przewodzenie prądu, reakcje z metalami aktywnymi, tlenkami metali, wodorotlenkami i węglanami.</p>
</div>
<div class="card card-understand">
<span class="card-label">Dlaczego stężony H₂SO₄ zwęgla cukier?</span>
<p>H₂SO₄ ma ogromne powinowactwo do wody — odbiera z cząsteczek cukru atomy H i O w stosunku 2:1 (jak w wodzie). Zostaje czarny węgiel:</p>
<div class="formula-lg">C₁₂H₂₂O₁₁ →(stęż. H₂SO₄) 12 C + 11 H₂O</div>
<p class="mini-note">Wydziela się dużo ciepła — woda paruje, porowata masa węgla „rośnie”; część węgla utlenia się do CO₂ i SO₂ (ostry zapach). To <strong>pokaz nauczyciela</strong> pod dygestorium.</p>
</div>
''' + viz('kw-wlasciwosci-v01', 'Właściwości stężonych kwasów — pokazy', 'Cukier + H₂SO₄ · białko + HNO₃ · HCl dymi · silnik GFX, otwiera się w oknie')
rep('''nie „biały gaz”.</p>
</div>
</section>''', '''nie „biały gaz”.</p>
</div>
''' + PROPS + '</section>', '4.5 właściwości')
rep('<a class="toc-link" href="#s4">4. Otrzymywanie</a>', '<a class="toc-link" href="#s4">4. Otrzymywanie i właściwości</a>', 'TOC 4')
rep('<div class="part-heading"><span class="part-num">4</span> Otrzymywanie kwasów</div>', '<div class="part-heading"><span class="part-num">4</span> Otrzymywanie i właściwości kwasów</div>', 'nagłówek 4')

# ===================== 5. Dysocjacja — przewodnictwo =====================
COND = '''
<h3>5.6 Przewodzenie prądu — dowód na jony <span class="v15">nowe v1.5</span></h3>
<div class="card card-basic">
<span class="card-label">E8 — elektrolity</span>
<p>Prąd w roztworze przenoszą <strong>jony</strong>. Tester (dwie elektrody + żarówka/dioda) pokazuje, czy w roztworze są jony i jak dużo.</p>
<div class="table-wrap"><table>
<thead><tr><th>Badana substancja</th><th>Żarówka</th><th>Wniosek</th></tr></thead>
<tbody>
<tr><td>HCl(aq), 0,1 mol/dm³</td><td>świeci jasno</td><td>mocny elektrolit — prawie wszystkie cząsteczki dały jony</td></tr>
<tr><td>CH₃COOH(aq), 0,1 mol/dm³</td><td>świeci słabo</td><td>słaby elektrolit — zjonizowało się ok. 1% cząsteczek</td></tr>
<tr><td>woda destylowana</td><td>nie świeci</td><td>bardzo mało jonów (autodysocjacja wody)</td></tr>
<tr><td>roztwór cukru</td><td>nie świeci</td><td>nieelektrolit — cząsteczki nie rozpadają się na jony</td></tr>
<tr><td>HCl(g), bezwodny kwas octowy</td><td>nie świeci / bardzo słabo</td><td>bez wody nie ma jonizacji — jonów brak</td></tr>
</tbody></table></div>
<p class="mini-note">To samo stężenie, różne świecenie → różna <strong>moc</strong> kwasu (sekcja 6). Elektroda ujemna (katoda) przyciąga kationy H₃O⁺, dodatnia (anoda) — aniony reszty kwasowej.</p>
<p class="mini-note"><span class="v15">v1.7</span> Przy prądzie stałym na elektrodach zachodzi <strong>elektroliza</strong> — po chwili widać drobne pęcherzyki gazu: na <strong>katodzie (−)</strong> zawsze <strong>wodór</strong> (2 H⁺ + 2 e⁻ → H₂), na <strong>anodzie (+)</strong> — <strong>chlor</strong> z kwasu solnego (2 Cl⁻ → Cl₂ + 2 e⁻) albo <strong>tlen</strong> z H₂SO₄ i roztworów zasad (utlenia się woda / OH⁻). Przy baterii 4,5 V gazu jest niewiele.</p>
</div>
''' + viz('gfx-scene-conductivity', 'Przewodzenie prądu: tester z żarówką i model jonów')
rep('''visualId:'diss-hcl-mech-v02',lessonId:'N03'},'*')"><b>Dysocjacja HCl – mechanizm cząsteczkowy</b><span>Wizualizacja z biblioteki · otwiera się w oknie</span></button></div>
</section>''', '''visualId:'diss-hcl-mech-v02',lessonId:'N03'},'*')"><b>Dysocjacja HCl – mechanizm cząsteczkowy</b><span>Wizualizacja z biblioteki · otwiera się w oknie</span></button></div>
''' + COND + '</section>', '5.6 przewodnictwo')

# ===================== 6. Moc — liczby, HF, rozcieńczenie, stężenia, Ka =====================
rep('<td>≈ 0,01</td>', '<td>≈ 0,013 (dla c = 0,1 mol/dm³)</td>', 'α CH₃COOH 5.2a')
rep('<td>α ≈ 0,01</td>', '<td>α ≈ 0,013 (c = 0,1 mol/dm³)</td>', 'α CH₃COOH 6.2')
rep('<tr><td>HF</td><td>słaby</td><td>α ≈ 0,1</td>', '<tr><td>HF</td><td>słaby</td><td>α ≈ 0,08 (c = 0,1 mol/dm³)</td>', 'α HF')
rep('<tr><td>H₃PO₄</td><td>słaby</td><td>α &lt;&lt; 1</td>', '<tr><td>H₃PO₄</td><td>słaby (średniej mocy)</td><td>α₁ ≈ 0,23 (c = 0,1 mol/dm³)</td>', 'α H₃PO₄')
rep('<tr><td>H₂SO₃</td><td>słaby</td><td>α &lt; 1</td>', '<tr><td>H₂SO₃</td><td>słaby (średniej mocy)</td><td>α₁ ≈ 0,3 (c = 0,1 mol/dm³)</td>', 'α H₂SO₃')
after('<tr><td>H₂S</td><td>słaby</td><td>α &lt;&lt; 1</td><td>⇌ H⁺ + HS⁻</td></tr>\n</tbody>\n</table>\n</div>',
      '\n<p class="mini-note"><span class="v15">v1.5</span> Stopień dysocjacji słabego kwasu <strong>zależy od stężenia</strong> (i temperatury) — liczby podano dla 0,1 mol/dm³ i 25 °C. Stałą cechą kwasu jest <strong>Ka</strong> (sekcja 6.6). H₃PO₄ i H₂SO₃ nazywa się czasem kwasami „średniej mocy”.</p>',
      'α zależy od c')
rep('<p><strong>Wyjaśnienie:</strong> wiązanie H–F jest bardzo silne (duża różnica elektroujemności → silna polaryzacja, ale też silne przyciąganie protonu przez F). Proton trudno się odrywa. Dodatkowo w wodzie tworzą się wiązania wodorowe F···H–O–H, które stabilizują cząsteczkę HF.</p>',
    '<p><strong>Wyjaśnienie:</strong> wiązanie H–F jest bardzo <strong>krótkie i mocne</strong> (565 kJ/mol; H–Cl 431, H–Br 366, H–I 299 kJ/mol) — proton trudno oderwać. Dodatkowo mały jon F⁻ i H₃O⁺ wiążą się silnymi wiązaniami wodorowymi w <strong>pary jonowe</strong> (H₃O⁺···F⁻), które nie dają „wolnych” jonów H₃O⁺. '
    'W szeregu <strong>HF &lt; HCl &lt; HBr &lt; HI</strong> moc rośnie, bo wraz ze wzrostem promienia atomu fluorowca wiązanie H–X słabnie — ważniejsza jest długość/energia wiązania niż sama elektroujemność.</p>\n'
    + adv('Termodynamika paradoksu HF', '<p>Dla HX(aq) → H⁺(aq) + X⁻(aq) bilans energii obejmuje: zerwanie wiązania H–X, jonizację H, powinowactwo elektronowe X i hydratację obu jonów. Silna hydratacja małego F⁻ nie rekompensuje dużej energii wiązania, a dodatkowo uporządkowanie wody wokół F⁻ daje silnie ujemną entropię (ΔS°), więc ΔG° &gt; 0 (pKa ≈ 3,2). '
        'W stężonym HF kwasowość <em>rośnie</em> dzięki homokoniugacji: HF + F⁻ ⇌ HF₂⁻ (jon wodorodifluorkowy), co wiąże F⁻ i przesuwa równowagę.</p>'),
    'HF wyjaśnienie')
rep('<p>Nie mylić: <strong>α rośnie, pH rośnie</strong> (odczyn słabnie) — mimo że oba mają „rosnąć”.</p>',
    '<p>Nie mylić: przy rozcieńczaniu <strong>α rośnie</strong>, ale <strong>[H₃O⁺] maleje</strong> (kwasu jest mniej w tej samej objętości), więc <strong>pH rośnie</strong> — roztwór jest mniej kwaśny, chociaż „procentowo” zdysocjowanych cząsteczek jest więcej.</p>'
    '<p>Przykład (CH₃COOH): c = 0,1 mol/dm³ → α ≈ 1,3%, pH ≈ 2,9; c = 0,001 mol/dm³ → α ≈ 12%, pH ≈ 3,9.</p>'
    '<p class="mini-note">LO rozszerzone — prawo rozcieńczeń Ostwalda: K<sub>a</sub> = α²·c / (1 − α); dla α &lt; 5%: K<sub>a</sub> ≈ α²·c, czyli α ≈ √(K<sub>a</sub>/c).</p>',
    '6.4 rozcieńczanie')

CONC = '''
<h3>6.5 Stężenie roztworu kwasu — procentowe i molowe <span class="v15">nowe v1.5</span></h3>
<div class="card card-basic">
<span class="card-label">E8 — stężenie procentowe</span>
<div class="formula-lg">C<sub>p</sub> = m<sub>s</sub> / m<sub>r</sub> · 100%</div><div class="formula-lg">m<sub>r</sub> = m<sub>s</sub> + m<sub>wody</sub></div>
<p><strong>Przykład 1.</strong> Ile gramów HCl jest w 200 g roztworu 15%? m<sub>s</sub> = 15% · 200 g / 100% = <strong>30 g</strong>.</p>
<p><strong>Przykład 2 (rozcieńczanie).</strong> Do 50 g 36% kwasu solnego dodano 130 g wody. m<sub>s</sub> = 18 g, m<sub>r</sub> = 180 g → C<sub>p</sub> = <strong>10%</strong>. Masa substancji rozpuszczonej się nie zmienia — rośnie tylko masa roztworu.</p>
<p class="mini-note">Pamiętaj o BHP: przy rozcieńczaniu wlewamy <strong>kwas do wody</strong>, porcjami, mieszając.</p>
</div>
<div class="card card-extra">
<span class="card-label">LO rozszerzone — stężenie molowe i przeliczanie</span>
<div class="formula-lg">c<sub>m</sub> = n / V   [mol/dm³]</div><div class="formula-lg">c<sub>m</sub> = C<sub>p</sub> · d · 10 / M</div><p class="mini-note">d w g/cm³, C<sub>p</sub> w %, M w g/mol.</p>
<p>Stężony HCl (36%, d = 1,18 g/cm³): c<sub>m</sub> = 36 · 1,18 · 10 / 36,46 ≈ <strong>11,7 mol/dm³</strong>.</p>
<p>Stężony H₂SO₄ (96%, d = 1,84 g/cm³): c<sub>m</sub> = 96 · 1,84 · 10 / 98,08 ≈ <strong>18,0 mol/dm³</strong>.</p>
<p class="mini-note">„Stężony” i „mocny” to różne pojęcia: stężony kwas octowy (lodowaty, ~17 mol/dm³) nadal jest kwasem słabym.</p>
</div>

<h3>6.6 Stała dysocjacji K<sub>a</sub> i pK<sub>a</sub> <span class="v15">nowe v1.5</span></h3>
<div class="card card-extra">
<span class="card-label">LO rozszerzone (biol-chem)</span>
<div class="formula-lg">HA + H₂O ⇌ H₃O⁺ + A⁻</div><div class="formula-lg">K<sub>a</sub> = [H₃O⁺]·[A⁻] / [HA]</div><div class="formula-lg">pK<sub>a</sub> = −log K<sub>a</sub></div>
<p><strong>Im mniejsze pK<sub>a</sub> (większe K<sub>a</sub>), tym mocniejszy kwas.</strong> K<sub>a</sub> zależy tylko od temperatury — nie od stężenia (w przeciwieństwie do α).</p>
<div class="table-wrap"><table>
<thead><tr><th>Kwas (25 °C)</th><th>pK<sub>a</sub></th><th>Kwas</th><th>pK<sub>a</sub></th></tr></thead>
<tbody>
<tr><td>HSO₄⁻</td><td>1,99</td><td>CH₃COOH</td><td>4,76</td></tr>
<tr><td>H₂SO₃</td><td>1,85 (I)</td><td>H₂CO₃ (CO₂ aq)</td><td>6,35 (I) · 10,33 (II)</td></tr>
<tr><td>H₃PO₄</td><td>2,16 · 7,21 · 12,32</td><td>H₂S</td><td>7,0 (I)</td></tr>
<tr><td>HF</td><td>3,20</td><td>HCN</td><td>9,2</td></tr>
<tr><td>HNO₂</td><td>3,35</td><td>NH₄⁺</td><td>9,25</td></tr>
<tr><td>HCOOH</td><td>3,75</td><td>kwas mlekowy</td><td>3,86</td></tr>
</tbody></table></div>
<p><strong>pH słabego kwasu</strong> (gdy α &lt; 5%): [H₃O⁺] ≈ √(K<sub>a</sub>·c). Przykład: CH₃COOH 0,1 mol/dm³ → [H₃O⁺] ≈ √(1,75·10⁻⁵ · 0,1) ≈ 1,32·10⁻³ → <strong>pH ≈ 2,88</strong>.</p>
<p class="mini-note">Wartości pK<sub>a</sub> pochodzą z tej samej tabeli silnika (CHE.DATA.ACID_SYSTEMS), z której korzystają wizualizacje i Atlas (25 °C, CRC/IUPAC; CH₃COOH 4,756 — rekord zweryfikowany).</p>
<p class="mini-note">Kolejne stopnie dysocjacji są coraz słabsze (pK<sub>a1</sub> &lt; pK<sub>a2</sub> &lt; pK<sub>a3</sub>) — trudniej oderwać proton od jonu, który już ma ładunek ujemny.</p>
</div>
''' + adv('Mocne kwasy w wodzie: efekt wyrównujący, pK<sub>a</sub> ujemne, dokładne obliczenia',
          '<p>W wodzie najmocniejszym kwasem, jaki może istnieć, jest H₃O⁺ — wszystkie kwasy mocniejsze (HCl, HBr, HI, HClO₄, HNO₃) oddają proton całkowicie i wyglądają „tak samo mocno” (<strong>efekt wyrównujący wody</strong>). Ich pK<sub>a</sub> (HCl ≈ −6, HBr ≈ −9, HI ≈ −10, HClO₄ ≈ −10, HNO₃ ≈ −1,4) wyznacza się pośrednio, w innych rozpuszczalnikach (np. kwasie octowym). Mieszaniny typu HSO₃F·SbF₅ to <strong>superkwasy</strong> (mocniejsze od 100% H₂SO₄).</p>'
          '<p>Dokładnie pH słabego kwasu liczy się z równania kwadratowego x² + K<sub>a</sub>x − K<sub>a</sub>c = 0 (dla bardzo rozcieńczonych roztworów trzeba uwzględnić też autodysocjację wody), a w stężonych roztworach zamiast stężeń stosuje się <strong>aktywności</strong> a = γ·c (współczynniki aktywności z teorii Debye’a–Hückla).</p>')
rep('''visualId:'strong-vs-weak-enhanced-v02',lessonId:'N03'},'*')"><b>Mocne vs słabe – cząstki i α</b><span>Wizualizacja z biblioteki · otwiera się w oknie</span></button></div>
</section>''', '''visualId:'strong-vs-weak-enhanced-v02',lessonId:'N03'},'*')"><b>Mocne vs słabe – cząstki i α</b><span>Wizualizacja z biblioteki · otwiera się w oknie</span></button></div>
''' + CONC + '</section>', '6.5–6.6')

# ===================== 7. pH i wskaźniki =====================
rep('<tr><td>0–3</td><td>silnie kwasowy</td><td>HCl 1 M (pH 0), HCl 0,01 M (pH 2)</td></tr>',
    '<tr><td>0–3</td><td>silnie kwasowy</td><td>HCl 1 M (pH 0), sok żołądkowy (pH ≈ 1,5–2), HCl 0,01 M (pH 2), sok z cytryny (pH ≈ 2,3), ocet (pH ≈ 2,5–3)</td></tr>', 'pH 0–3 przykłady')
rep('<tr><td>4–6</td><td>słabo kwasowy</td><td>ocet (pH 3), kawa (pH 5), deszcz (pH 5,6)</td></tr>',
    '<tr><td>4–6</td><td>słabo kwasowy</td><td>kawa (pH ≈ 5), czysty deszcz (pH ≈ 5,6 — rozpuszczony CO₂), mleko (pH ≈ 6,6)</td></tr>', 'pH 4–6 przykłady (ocet przeniesiony)')
after('<p>pH 2 ma 10× więcej H₃O⁺ niż pH 3 i 100× więcej niż pH 4.</p>\n</div>',
      '\n<div class="card card-extra">\n<span class="card-label">LO rozszerzone — pOH i iloczyn jonowy wody</span>'
      '<div class="formula-lg">K<sub>w</sub> = [H₃O⁺]·[OH⁻] = 1,0·10⁻¹⁴ (25 °C)</div><div class="formula-lg">pH + pOH = 14</div>'
      '<p>Przykład: NaOH 0,01 mol/dm³ → [OH⁻] = 10⁻² → pOH = 2 → pH = 12.</p>'
      '<p class="mini-note">Woda destylowana stojąca na powietrzu ma pH ≈ 5,6–6 (pochłania CO₂). Krew: pH 7,35–7,45 (lekko zasadowy).</p></div>\n'
      + adv('Dlaczego „pH 7 = obojętny” jest prawdą tylko w 25 °C',
            '<p>K<sub>w</sub> rośnie z temperaturą (autodysocjacja wody jest endotermiczna): w 37 °C pK<sub>w</sub> ≈ 13,6, więc roztwór obojętny ma pH ≈ 6,8; w 100 °C pK<sub>w</sub> ≈ 12,3 i obojętne pH ≈ 6,1. Obojętny oznacza [H₃O⁺] = [OH⁻], a nie „pH = 7”. '
                'Skala pH nie kończy się na 0 i 14: stężony HCl może mieć pH &lt; 0, a stężony NaOH pH &gt; 14 (formalnie pH = −log a<sub>H₃O⁺</sub>).</p>'),
      'pOH/Kw + adv T')
rep('<tr><td>Oranż metylowy</td><td>czerwony</td><td>pomarańczowy</td><td>żółty</td><td>3,1–4,4</td></tr>',
    '<tr><td>Oranż metylowy</td><td>czerwony (pH &lt; 3,1)</td><td>żółty</td><td>żółty</td><td>3,1–4,4 (pomarańczowy)</td></tr>', 'oranż w obojętnym = żółty')
rep('<tr><td>Papierek uniwersalny</td><td>czerwony</td><td>żółty</td><td>niebieski</td><td>pełna skala</td></tr>',
    '<tr><td>Papierek uniwersalny</td><td>czerwony / pomarańczowy</td><td>zielony (żółtozielony)</td><td>niebieski / granatowy</td><td>pełna skala</td></tr>\n'
    '<tr><td>Wywar z czerwonej kapusty (naturalny)</td><td>czerwony / różowy</td><td>fioletowy</td><td>niebieski → zielony → żółty</td><td>szeroki (antocyjany)</td></tr>', 'papierek uniw. + kapusta')
rep('<tr><td>Papierek lakmusowy</td><td>czerwony</td><td>—</td><td>niebieski</td><td>5,0–8,0</td></tr>',
    '<tr><td>Papierek lakmusowy</td><td>czerwony</td><td>fioletowy</td><td>niebieski</td><td>ok. 4,5–8,3</td></tr>', 'lakmus')
after('Oranż metylowy jest czerwony w kwasie, żółty w zasadzie.</p>',
      '\n<p class="mini-note"><span class="v15">v1.5</span> Poprawka: oranż metylowy jest pomarańczowy tylko w wąskim zakresie pH 3,1–4,4; w wodzie (pH 7) jest już <strong>żółty</strong> — nie odróżni roztworu obojętnego od zasadowego. Do tego służy fenoloftaleina lub papierek uniwersalny.</p>\n'
      + adv('Wskaźnik jako słaby kwas', '<p>Wskaźnik to słaby kwas HInd, którego forma kwasowa i zasadowa mają różne barwy: HInd ⇌ H⁺ + Ind⁻. Barwa przejściowa pojawia się przy pH ≈ pK<sub>Ind</sub> ± 1. '
          'Fenoloftaleina w bardzo silnie zasadowym środowisku (pH &gt; 12–13) powoli się odbarwia (powstaje bezbarwna forma karbinolowa), a w stężonym H₂SO₄ jest pomarańczowa.</p>'),
      'oranż — wyjaśnienie')

# ===================== 8. Reakcje =====================
rep('<div class="formula-lg">Zn + H₂SO₄ → ZnSO₄ + H₂↑</div>', '<div class="formula-lg">Zn + H₂SO₄ (rozc.) → ZnSO₄ + H₂↑</div>', 'Zn + H₂SO₄ rozc.')
after('<p class="mini-note">Te metale nie wypierają wodoru z rozcieńczonych kwasów nieutleniających.</p>\n</div>',
      '''
<div class="card card-understand">
<span class="card-label">Szybkość i szczegóły reakcji metal + kwas <span class="v15">v1.5</span></span>
<ul>
<li><strong>Szybkość</strong> wydzielania H₂ w tym samym kwasie: Mg (gwałtownie, roztwór się ogrzewa) &gt; Zn &gt; Fe (powoli); Cu — brak reakcji. Rośnie ze stężeniem kwasu, temperaturą i rozdrobnieniem metalu.</li>
<li><strong>Fe + 2 HCl → FeCl₂ + H₂↑</strong> — powstaje sól żelaza(II) (bladozielony roztwór), <em>nie</em> FeCl₃: jony H⁺ są zbyt słabym utleniaczem, by utlenić Fe do +III.</li>
<li><strong>Al</strong> reaguje z opóźnieniem — najpierw kwas musi rozpuścić ochronną warstwę Al₂O₃.</li>
<li><strong>Pb</strong> stoi przed H, ale z HCl i H₂SO₄ reaguje bardzo słabo — na powierzchni powstaje trudno rozpuszczalny PbCl₂ / PbSO₄, który hamuje reakcję.</li>
<li>To reakcja <strong>redoks</strong>: Zn⁰ → Zn²⁺ + 2e⁻ (utlenianie), 2 H⁺ + 2e⁻ → H₂⁰ (redukcja). Jonowo: Zn + 2 H⁺ → Zn²⁺ + H₂↑.</li>
</ul>
</div>
''' + viz('kw-szereg-metali-v01', 'Szereg aktywności na żywo: Mg, Zn, Fe, Cu w HCl', 'Cztery probówki obok siebie · silnik GFX · otwiera się w oknie')
      + viz('gfx-scene-acidMetal', 'Metal + kwas solny → wodór i próba „pyk!”'),
      '8.1 szczegóły + viz')
rep('<p class="mini-note"><strong>Uzasadnienie:</strong> metale aktywne mają mniejszą energię jonizacji i łatwiej oddają elektrony jonom H⁺ z kwasu. Metale szlachetne (Cu, Ag, Au) mają wysoką elektroujemność i wysoką energię jonizacji — nie oddają elektronów jonom H⁺, więc reakcja nie zachodzi.</p>',
    '<p class="mini-note"><strong>Uzasadnienie:</strong> metale aktywne łatwo oddają elektrony i tworzą kationy trwałe w wodzie — oddają elektrony jonom H₃O⁺, które redukują się do H₂. Metale szlachetne (Cu, Ag, Au) trudno się utleniają — jony H⁺ są dla nich zbyt słabym utleniaczem. '
    'Ilościowo decyduje <strong>potencjał standardowy E°</strong> (szereg napięciowy, LO rozszerzone): metal wypiera wodór, gdy E°(Mⁿ⁺/M) &lt; 0 V (np. Zn −0,76 V, Fe −0,44 V, Cu +0,34 V).</p>\n'
    + adv('Dlaczego nie wystarczy energia jonizacji', '<p>E° wynika z całego cyklu: atomizacja metalu + jonizacja + <strong>hydratacja kationu</strong>. Lit ma większą energię jonizacji niż cez, a mimo to najbardziej ujemny potencjał (−3,04 V), bo mały jon Li⁺ jest bardzo silnie hydratowany. '
          'Dlatego szereg aktywności „w wodzie” nie pokrywa się dokładnie z szeregiem energii jonizacji ani elektroujemności.</p>'),
    'uzasadnienie szeregu')
rep('Doświadczenie z HNO₃ wykonuje wyłącznie nauczyciel (toksyczne gazy NO₂, NO).</p>',
    '''Doświadczenie z HNO₃ wykonuje wyłącznie nauczyciel (toksyczne gazy NO₂, NO).</p>
<div class="card card-extra">
<span class="card-label">LO rozszerzone — kwasy utleniające i pasywacja <span class="v15">v1.5</span></span>
<p><strong>Gorący stężony H₂SO₄</strong> też jest utleniaczem: Cu + 2 H₂SO₄(stęż.) →(T) CuSO₄ + SO₂↑ + 2 H₂O.</p>
<p><strong>Pasywacja:</strong> stężony HNO₃ i stężony H₂SO₄ na zimno pokrywają Fe, Al i Cr cienką, szczelną warstwą tlenku — reakcja ustaje. Dlatego stężony H₂SO₄ można przewozić w stalowych cysternach (rozcieńczony kwas żelazo rozpuszcza — w szkole kwasów nie przechowuje się w metalu).</p>
</div>
''' + adv('Woda królewska — jak rozpuścić złoto', '<p>Mieszanina stęż. HNO₃ i HCl (1:3) rozpuszcza Au i Pt: HNO₃ utlenia metal, a jony Cl⁻ wiążą powstały kation w trwały kompleks, co przesuwa równowagę: Au + HNO₃ + 4 HCl → H[AuCl₄] + NO↑ + 2 H₂O.</p>'),
    'kwasy utleniające/pasywacja')
rep('<p class="mini-note">Reakcja zachodzi nawet dla tlenków, które nie reagują z wodą (np. CuO, Fe₂O₃). To ważne — charakter zasadowy nie wymaga reakcji z wodą.</p>',
    '<p class="mini-note">Reakcja zachodzi nawet dla tlenków, które nie reagują z wodą (np. CuO, Fe₂O₃). To ważne — charakter zasadowy nie wymaga reakcji z wodą. '
    'Tlenki <strong>amfoteryczne</strong> (ZnO, Al₂O₃) reagują i z kwasami, i z zasadami: ZnO + 2 HCl → ZnCl₂ + H₂O.</p>', 'amfoteryczne')
rep('<p>Kwas mocniejszy wypiera kwas słabszy z jego soli. HCl (mocny) wypiera H₂CO₃ (słaby) z CaCO₃ → powstaje CO₂ + H₂O.</p>',
    '<p>Kwas mocniejszy wypiera kwas słabszy z jego soli. HCl (mocny) wypiera H₂CO₃ (słaby) z CaCO₃ → H₂CO₃ rozkłada się na CO₂↑ + H₂O.</p>', 'wypieranie H₂CO₃')
rep('<p>H₂SO₄ (mocny) wypiera HCl (gazowy) z NaCl → powstaje HCl↑.</p>',
    '<p><strong>Kwas mniej lotny wypiera kwas bardziej lotny:</strong> stężony H₂SO₄ (prawie nielotny, wrze ok. 337 °C) wypiera gazowy HCl z NaCl, choć HCl jest kwasem <em>mocniejszym</em> — HCl ulatnia się, więc reakcja biegnie do końca.</p>'
    '<p><strong>Osad „wygrywa” z mocą:</strong> HCl + AgNO₃ → AgCl↓ + HNO₃ zachodzi, choć powstaje kwas równie mocny — o kierunku decyduje nierozpuszczalny osad.</p>'
    '<p class="mini-note"><span class="v15">v1.5</span> Poprawka: wcześniej uzasadniano reakcję NaCl + H₂SO₄ tym, że H₂SO₄ jest „mocniejszy” — o przebiegu decyduje lotność HCl.</p>',
    'NaCl + H₂SO₄ — lotność')

# ===================== 10. Zastosowania + organizm =====================
rep('<tr><td>H₂SiO₃</td><td>szkło wodne</td><td>kleje silikatowe, uszczelniacze</td></tr>',
    '<tr><td>H₂SiO₃</td><td>żel krzemionkowy (silikażel), krzemiany</td><td>saszetki pochłaniające wilgoć (silikażel z odwodnionego H₂SiO₃); <em>szkło wodne</em> to roztwór soli Na₂SiO₃ — kleje, uszczelniacze</td></tr>',
    'H₂SiO₃ / szkło wodne')
BIO = '''
<h3>10.1 Kwasy w organizmie <span class="bio-tag">BIOL-CHEM</span> <span class="v15">nowe v1.5</span></h3>
<div class="card card-extra">
<span class="card-label">Kwasy, które działają w Twoim ciele</span>
<ul>
<li><strong>HCl w żołądku</strong> (komórki okładzinowe, pH ≈ 1,5–2): denaturuje białka, aktywuje pepsynę (optimum pH ≈ 2), niszczy bakterie. Leki „na zgagę” to zasady i sole — <em>reakcje zobojętniania</em>: Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O; NaHCO₃ + HCl → NaCl + H₂O + CO₂↑ (stąd odbijanie).</li>
<li><strong>Kwas mlekowy</strong> CH₃CH(OH)COOH (pK<sub>a</sub> 3,86): powstaje w mięśniach przy niedoborze tlenu (glikoliza beztlenowa) i w fermentacji mlekowej (jogurt, kiszonki). W pH komórki występuje jako anion <strong>mleczan</strong>.</li>
<li><strong>Bufor wodorowęglanowy krwi</strong>: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (pierwszy etap przyspiesza enzym anhydraza węglanowa). pH krwi 7,35–7,45; spadek = kwasica, wzrost = zasadowica.</li>
<li><strong>Aminokwasy</strong> mają grupę kwasową –COOH i zasadową –NH₂; w roztworze tworzą jon obojnaczy (np. glicyna H₃N⁺–CH₂–COO⁻) — są amfoteryczne.</li>
<li><strong>Kwasy nukleinowe</strong> (DNA, RNA) zawdzięczają nazwę resztom kwasu fosforowego — w pH organizmu są zdysocjowane, dlatego DNA ma ładunek ujemny (to wykorzystuje elektroforeza).</li>
<li><strong>Kwasy tłuszczowe</strong> (palmitynowy C₁₅H₃₁COOH, stearynowy C₁₇H₃₅COOH, oleinowy C₁₇H₃₃COOH) tworzą z glicerolem tłuszcze; <strong>kwas cytrynowy</strong> to związek centralny cyklu Krebsa; <strong>kwas askorbinowy</strong> to witamina C; nadmiar <strong>kwasu moczowego</strong> powoduje dnę moczanową.</li>
<li><strong>Próchnica</strong>: bakterie w płytce nazębnej fermentują cukry do kwasów; poniżej pH ≈ 5,5 szkliwo (hydroksyapatyt Ca₁₀(PO₄)₆(OH)₂) zaczyna się rozpuszczać. Fluor tworzy odporniejszy fluoroapatyt.</li>
</ul>
</div>
''' + adv('Bufor krwi w liczbach (Henderson–Hasselbalch)', '<p>pK<sub>a</sub>′ układu CO₂/HCO₃⁻ w osoczu ≈ 6,1, a stosunek [HCO₃⁻] : [CO₂(aq)] ≈ 20 : 1, więc pH = 6,1 + log 20 ≈ 7,4. Bufor jest skuteczny mimo pH daleko od pK<sub>a</sub>, bo jest to <strong>układ otwarty</strong>: płuca usuwają CO₂ (regulacja oddechowa w minutach), a nerki wydalają H⁺ i odzyskują HCO₃⁻ (regulacja metaboliczna w godzinach–dniach).</p>')
rep('''<li><strong>Akumulator samochodowy</strong> — H₂SO₄ (30–40%).</li>
</ul>
</div>
</section>''', '''<li><strong>Akumulator samochodowy</strong> — H₂SO₄ (30–40%).</li>
</ul>
</div>
''' + BIO + '</section>', '10.1 kwasy w organizmie')

# ===================== 11. BHP =====================
rep('<li>✗ <strong>Nie próbować neutralizować rozlanego stężonego kwasu</strong> — najpierw rozcieńczyć dużą ilością wody, potem neutralizować.</li>',
    '<li>✗ <strong>Nie zobojętniaj kwasu na skórze ani w oku</strong> (sodą, zasadą) — reakcja wydziela ciepło i opóźnia płukanie; tylko długie płukanie wodą.</li>'
    '\n<li>✓ <strong>Rozlany kwas</strong> zgłoś nauczycielowi; zasypuje się go sorbentem lub wodorowęglanem sodu NaHCO₃ (piana CO₂ = zobojętnianie), potem zbiera i spłukuje dużą ilością wody. Nie zalewaj małą ilością wody stężonego H₂SO₄ (rozpryskuje się).</li>',
    'BHP rozlany kwas')
after('''<div class="part-heading"><span class="part-num">11</span> Bezpieczeństwo (BHP)</div>
''', viz('gfx-scene-dilution', 'Rozcieńczanie: „kwas do wody!” — poprawnie i błędnie'), 'viz rozcieńczanie')

# ===================== 12. Kwasy organiczne =====================
rep('<tr><td>C₆H₅COOH</td><td>kwas benzoesowy</td><td>—</td><td>konserwant E210</td></tr>',
    '<tr><td>C₆H₅COOH</td><td>kwas benzoesowy</td><td>kwas benzenokarboksylowy</td><td>konserwant E210</td></tr>', 'benzoesowy nazwa')
rep('<tr><td>C₆H₈O₇</td><td>kwas cytrynowy</td><td>—</td><td>cytryny, E330</td></tr>',
    '<tr><td>C₆H₈O₇</td><td>kwas cytrynowy</td><td>kwas 2-hydroksypropano-1,2,3-trikarboksylowy</td><td>cytryny, E330, cykl Krebsa</td></tr>', 'cytrynowy nazwa')
rep('<tr><td>C₃H₆O₃</td><td>kwas mlekowy</td><td>—</td><td>jogurt, kiszona kapusta</td></tr>',
    '<tr><td>C₃H₆O₃</td><td>kwas mlekowy</td><td>kwas 2-hydroksypropanowy</td><td>jogurt, kiszona kapusta, mięśnie</td></tr>\n'
    '<tr><td>C₁₅H₃₁COOH</td><td>kwas palmitynowy</td><td>kwas heksadekanowy</td><td>tłuszcze, mydła (palmityniany)</td></tr>\n'
    '<tr><td>C₁₇H₃₅COOH</td><td>kwas stearynowy</td><td>kwas oktadekanowy</td><td>tłuszcze stałe, świece, mydła</td></tr>\n'
    '<tr><td>C₁₇H₃₃COOH</td><td>kwas oleinowy</td><td>kwas (Z)-oktadec-9-enowy</td><td>oliwa — kwas nienasycony (odbarwia wodę bromową)</td></tr>',
    'kwasy tłuszczowe')

# ===================== 13. Historia =====================
rep('<p><strong>Pary sprzężone:</strong> HCl/Cl⁻, H₂O/H₃O⁺, NH₄⁺/NH₃.</p>',
    '<p><strong>Pary sprzężone</strong> (zapis: kwas/sprzężona zasada): HCl/Cl⁻, H₃O⁺/H₂O, NH₄⁺/NH₃, H₂O/OH⁻. Woda jest <strong>amfiprotyczna</strong> — raz kwasem, raz zasadą.</p>', 'pary sprzężone')
rep('<p>Teoria Pearsona (HSAB — twarde/miękkie kwasy i zasady), teoria Usanovicha (najszersza), rozwój chemii supramolekularnej.</p>',
    '<p>Dalsze teorie (Pearson — HSAB, Usanowicz) są poza programem szkolnym — rozwiń ramkę poniżej.</p>\n'
    + adv('Teoria HSAB Pearsona i teoria Usanowicza',
          '<p>Teoria Pearsona (HSAB — twarde/miękkie kwasy i zasady), teoria Usanovicha (najszersza), rozwój chemii supramolekularnej.</p>'
          '<p><strong>HSAB</strong> (1963): kwasy i zasady Lewisa dzieli się na „twarde” (małe, mało polaryzowalne: H⁺, Na⁺, Al³⁺, F⁻, OH⁻) i „miękkie” (duże, polaryzowalne: Ag⁺, Hg²⁺, I⁻, S²⁻). Trwałe połączenia tworzą pary twardy–twardy i miękki–miękki — tłumaczy to np. występowanie Hg i Pb w przyrodzie jako siarczków, a Al i Mg jako tlenków. '
          '<strong>Usanowicz</strong> (1939): kwas to substancja oddająca kation lub przyjmująca anion/elektrony — obejmuje też reakcje redoks.</p>'),
    'HSAB → adv (treść zachowana)')

# ===================== 15. Bufory =====================
rep('<li><strong>Żołądek:</strong> HCl — pH ~2 (trawienie pokarmu, ochrona przed bakteriami).</li>',
    '<li><strong>Żołądek</strong> (dla porównania — to <em>nie</em> jest bufor): HCl — pH ~1,5–2 (trawienie pokarmu, aktywacja pepsyny, ochrona przed bakteriami).</li>', 'żołądek ≠ bufor')
rep('<li><strong>Ślina:</strong> bufor fosforanowy H₂PO₄⁻/HPO₄²⁻ — pH ~6,8.</li>',
    '<li><strong>Ślina:</strong> głównie bufor wodorowęglanowy, a także fosforanowy H₂PO₄⁻/HPO₄²⁻ — pH ~6,5–7,0.</li>', 'ślina bufory')
before('<div class="widget" id="n03-buffer-widget">', adv('Bufor ilościowo: pojemność buforowa i wybór buforu',
       '<p>Pojemność buforowa β = dn/dpH jest największa, gdy [HA] = [A⁻] (pH = pK<sub>a</sub>) i rośnie z całkowitym stężeniem buforu. Dlatego bufor wybiera się tak, by pK<sub>a</sub> leżało blisko żądanego pH (np. fosforanowy H₂PO₄⁻/HPO₄²⁻, pK<sub>a</sub> 7,2 — w biologii komórki; TRIS, HEPES — w laboratoriach biochemicznych).</p>'),
       'adv pojemność buforowa')

# ===================== 16. Doświadczenia =====================
after('<div class="part-heading"><span class="part-num">16</span> Doświadczenia modelowe</div>\n\n',
      viz('kw-doswiadczenia-v01', 'Pracownia: wszystkie doświadczenia z kwasami (GFX)', 'Zestawy, reakcje i pokazy w jednym oknie · silnik GFX'), 'hub doświadczeń')
rep('<b>Sprzęt</b><span>HCl (rozcieńczony), papierek uniwersalny, oranż metylowy, probówka.</span>',
    '<b>Sprzęt</b><span>HCl (rozcieńczony), papierek uniwersalny, oranż metylowy, fenoloftaleina, dwie probówki.</span>', 'dośw1 sprzęt')
rep('<b>BHP</b><span>Okulary; wodór łatwopalny — nie zbliżać ognia przed sprawdzeniem obecności wodoru.</span>',
    '<b>BHP</b><span>Okulary; wodór z powietrzem tworzy mieszaninę wybuchową — próbę „pyk” robimy tylko z małą ilością gazu zebraną w probówce (wylotem od siebie i innych), nigdy przy dużej aparaturze, w której gaz się wydziela.</span>', 'dośw2 BHP')
EXP = '''
<div class="exp-card">
<h5>Doświadczenie 6 — Przewodzenie prądu przez roztwory kwasów <span class="v15">v1.5</span></h5>
<div class="exp-grid">
<b>Problem</b><span>Czy roztwory kwasów przewodzą prąd? Czy wszystkie jednakowo?</span>
<b>Hipoteza</b><span>Przewodzą, bo zawierają jony; mocny kwas przewodzi lepiej niż słaby o tym samym stężeniu.</span>
<b>Sprzęt</b><span>Tester przewodnictwa (elektrody, żarówka/dioda, bateria), zlewki: HCl 0,1 M, CH₃COOH 0,1 M, woda destylowana, roztwór cukru.</span>
<b>Przebieg</b><span>Zanurzamy elektrody kolejno w roztworach, płucząc je wodą destylowaną między pomiarami.</span>
<b>Obserwacja</b><span>HCl — żarówka świeci jasno, po chwili drobne pęcherzyki gazu na obu elektrodach (H₂ na katodzie, Cl₂ — zapach chloru — na anodzie); CH₃COOH — świeci słabo, gazu bardzo mało; woda i cukier — nie świeci, brak pęcherzyków.</span>
<b>Wniosek</b><span>Kwasy są elektrolitami; HCl — mocny (prawie pełna dysocjacja), CH₃COOH — słaby.</span>
<b>Równanie</b><span class="formula">HCl + H₂O → H₃O⁺ + Cl⁻;  CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻</span>
<b>BHP</b><span>Niskie napięcie (bateria); okulary; nie dotykać elektrod mokrymi rękami.</span>
</div>
</div>
''' + viz('gfx-scene-conductivity', 'Przewodzenie prądu — symulacja testera') + '''
<div class="exp-card">
<h5>Doświadczenie 7 — Aktywność metali wobec kwasu solnego <span class="v15">v1.5</span></h5>
<div class="exp-grid">
<b>Problem</b><span>Które metale wypierają wodór z HCl i jak szybko?</span>
<b>Hipoteza</b><span>Reagują metale stojące przed wodorem; najszybciej najaktywniejszy.</span>
<b>Sprzęt</b><span>4 probówki z HCl (ok. 2 mol/dm³), wiórki Mg, granulki Zn, opiłki Fe, blaszka Cu.</span>
<b>Przebieg</b><span>Do każdej probówki wrzucamy inny metal; porównujemy intensywność wydzielania gazu.</span>
<b>Obserwacja</b><span>Mg — gwałtowne pienienie, probówka się ogrzewa; Zn — wyraźne pęcherzyki; Fe — nieliczne pęcherzyki, roztwór bladozielony; Cu — brak zmian.</span>
<b>Wniosek</b><span>Aktywność: Mg &gt; Zn &gt; Fe &gt; (H) &gt; Cu.</span>
<b>Równanie</b><span class="formula">Mg + 2 HCl → MgCl₂ + H₂↑;  Fe + 2 HCl → FeCl₂ + H₂↑;  Cu + HCl → brak reakcji</span>
<b>BHP</b><span>Okulary; wodór łatwopalny — z dala od ognia.</span>
</div>
</div>
''' + viz('kw-szereg-metali-v01', 'Szereg aktywności — cztery probówki') + '''
<div class="exp-card">
<h5>Doświadczenie 8 — Działanie stężonego H₂SO₄ na cukier (pokaz nauczyciela) <span class="v15">v1.5</span></h5>
<div class="exp-grid">
<b>Problem</b><span>Jak stężony kwas siarkowy(VI) działa na substancje organiczne?</span>
<b>Hipoteza</b><span>Odbierze wodę — substancja ulegnie zwęgleniu.</span>
<b>Sprzęt</b><span>Zlewka, cukier (sacharoza), stężony H₂SO₄, bagietka; dygestorium.</span>
<b>Przebieg</b><span>Do cukru w zlewce nauczyciel wlewa niewielką ilość stężonego H₂SO₄ i miesza.</span>
<b>Obserwacja</b><span>Cukier żółknie, brunatnieje i czernieje; czarna porowata masa „rośnie”; zlewka bardzo gorąca, wydziela się para i ostry zapach.</span>
<b>Wniosek</b><span>Stężony H₂SO₄ ma właściwości higroskopijne i odwadniające — zwęgla związki organiczne.</span>
<b>Równanie</b><span class="formula">C₁₂H₂₂O₁₁ →(H₂SO₄ stęż.) 12 C + 11 H₂O</span>
<b>BHP</b><span>Tylko pokaz pod dygestorium; okulary, rękawice; SO₂ drażni drogi oddechowe.</span>
</div>
</div>
<div class="exp-card">
<h5>Doświadczenie 9 — Kwas azotowy(V) i białko (pokaz nauczyciela) <span class="v15">v1.5</span></h5>
<div class="exp-grid">
<b>Problem</b><span>Jak HNO₃ działa na białko?</span>
<b>Hipoteza</b><span>Białko ulegnie ścięciu i zmieni barwę.</span>
<b>Sprzęt</b><span>Probówka z roztworem białka jaja kurzego, stężony HNO₃.</span>
<b>Przebieg</b><span>Do roztworu białka nauczyciel dodaje kilka kropel stężonego HNO₃ (można lekko ogrzać).</span>
<b>Obserwacja</b><span>Wytrąca się biały osad, który <strong>żółknie</strong>; po dodaniu zasady (np. NH₃(aq)) barwa przechodzi w pomarańczową.</span>
<b>Wniosek</b><span>HNO₃ denaturuje białko i nitruje pierścienie aromatyczne aminokwasów — reakcja ksantoproteinowa (wykrywanie białek). Dlatego HNO₃ barwi skórę na żółto.</span>
<b>Równanie</b><span class="formula">białko (reszty aromatyczne) + HNO₃ → żółte nitrozwiązki</span>
<b>BHP</b><span>Stężony HNO₃ — silnie żrący i utleniający; tylko pokaz.</span>
</div>
</div>
''' + viz('kw-wlasciwosci-v01', 'Pokazy: cukier + H₂SO₄, białko + HNO₃') + '''
<div class="exp-card">
<h5>Doświadczenie 10 — Odróżnianie HCl od CH₃COOH <span class="v15">v1.5</span></h5>
<div class="exp-grid">
<b>Problem</b><span>Jak odróżnić roztwory mocnego i słabego kwasu o tym samym stężeniu (0,1 mol/dm³)?</span>
<b>Hipoteza</b><span>Mocny kwas ma niższe pH, lepiej przewodzi prąd i szybciej reaguje z magnezem.</span>
<b>Sprzęt</b><span>pH-metr lub papierek uniwersalny, tester przewodnictwa, wiórki Mg, dwie probówki.</span>
<b>Przebieg</b><span>Mierzymy pH obu roztworów, sprawdzamy przewodnictwo, dodajemy do każdego po kawałku Mg.</span>
<b>Obserwacja</b><span>HCl: pH ≈ 1, żarówka świeci jasno, pęcherzyki wydzielają się szybko. CH₃COOH: pH ≈ 2,9, słabe świecenie, pęcherzyki wolniej.</span>
<b>Wniosek</b><span>HCl jest kwasem mocnym (pełna dysocjacja), CH₃COOH — słabym (ok. 1,3%). Fenoloftaleina tych roztworów nie odróżni (w obu bezbarwna).</span>
<b>Równanie</b><span class="formula">Mg + 2 H₃O⁺ → Mg²⁺ + H₂↑ + 2 H₂O</span>
<b>BHP</b><span>Okulary.</span>
</div>
</div>
'''
before('''<div class="card card-warning">
<span class="card-label">Obserwacja ≠ wniosek</span>''', EXP, 'dośw. 6–10')

# ===================== 17. Klinika + zadanie kliniczne =====================
rep('Porównując pH tych dwóch roztworów, okazuje się, że HCl (mocny, rozcieńczony) może mieć niższe pH niż HF (słaby, stężony).</p>',
    'Wynik może zaskoczyć: liczymy pH obu roztworów. HCl 0,001 mol/dm³ → [H₃O⁺] = 10⁻³ → <strong>pH = 3</strong>. HF 0,1 mol/dm³ (K<sub>a</sub> ≈ 6,3·10⁻⁴) → [H₃O⁺] ≈ 7,6·10⁻³ → <strong>pH ≈ 2,1</strong>. '
    'Roztwór słabego, ale stukrotnie bardziej stężonego HF jest więc <strong>bardziej kwaśny</strong>. Wniosek: o mocy kwasu świadczy α (K<sub>a</sub>), a o kwasowości roztworu — [H₃O⁺], które zależy od mocy <em>i</em> stężenia.</p>'
    '<p class="mini-note"><span class="v15">v1.5</span> Poprawka: poprzednia odpowiedź sugerowała, że rozcieńczony HCl ma niższe pH — dla podanych stężeń jest odwrotnie.</p>',
    'zadanie kliniczne HF/HCl')
KLIN = '''
<tr class="error-row">
<td class="col-blad" data-label="Błąd">Fe + 2 HCl → FeCl₃ + H₂</td>
<td class="col-ok" data-label="Poprawa">Fe + 2 HCl → FeCl₂ + H₂↑</td>
<td data-label="Dlaczego">Jony H⁺ utleniają żelazo tylko do Fe²⁺ (bladozielony roztwór).</td>
</tr>
<tr class="error-row">
<td class="col-blad" data-label="Błąd">„oranż metylowy w wodzie jest pomarańczowy”</td>
<td class="col-ok" data-label="Poprawa">w wodzie (pH 7) jest żółty</td>
<td data-label="Dlaczego">Zmienia barwę w zakresie pH 3,1–4,4; powyżej jest żółty — nie odróżni wody od zasady.</td>
</tr>
<tr class="error-row">
<td class="col-blad" data-label="Błąd">„H₂SO₄ wypiera HCl z NaCl, bo jest mocniejszy”</td>
<td class="col-ok" data-label="Poprawa">bo jest mniej lotny</td>
<td data-label="Dlaczego">HCl jest mocniejszy, ale jako gaz ulatnia się z układu.</td>
</tr>
<tr class="error-row">
<td class="col-blad" data-label="Błąd">„oparzenie kwasem — posyp sodą”</td>
<td class="col-ok" data-label="Poprawa">płucz wodą ok. 15 min</td>
<td data-label="Dlaczego">Zobojętnianie na skórze wydziela ciepło i opóźnia płukanie.</td>
</tr>
<tr class="error-row">
<td class="col-blad" data-label="Błąd">„rozcieńczony słaby kwas jest bardziej kwaśny, bo α rośnie”</td>
<td class="col-ok" data-label="Poprawa">pH rośnie — roztwór mniej kwaśny</td>
<td data-label="Dlaczego">[H₃O⁺] ≈ α·c maleje, bo c spada szybciej, niż rośnie α.</td>
</tr>
<tr class="error-row">
<td class="col-blad" data-label="Błąd">„CH₃COOH jest czteroprotonowy (4 atomy H)”</td>
<td class="col-ok" data-label="Poprawa">jednoprotonowy</td>
<td data-label="Dlaczego">Kwasowy jest tylko H z grupy –COOH; H przy węglu nie dysocjują.</td>
</tr>
'''
i = h.find('<table class="klinika-table">'); j = h.find('</tbody>', i)
assert i > 0 and j > i
h = h[:j] + KLIN + h[j:]; LOG.append('klinika +6')

# ===================== 18. Ćwiczenia =====================
EX = '''
<h3>Poziom B+/C+ — nowe zadania <span class="v15">v1.5</span></h3>
<div class="card">
<ol start="31">
<li>Oblicz masę HCl w 250 g roztworu 10%.</li>
<li>Ile gramów wody trzeba dodać do 100 g 96% H₂SO₄, aby otrzymać roztwór 20%? Jak bezpiecznie to wykonać?</li>
<li>(LO) Oblicz stężenie molowe 36% kwasu solnego o gęstości 1,18 g/cm³.</li>
<li>(LO) Oblicz pH i α roztworu CH₃COOH o stężeniu 0,1 mol/dm³ (K<sub>a</sub> = 1,75·10⁻⁵).</li>
<li>Masz trzy nieopisane probówki: HCl, NaOH i wodę destylowaną — oraz tylko fenoloftaleinę. Jak je rozpoznać?</li>
<li>Uszereguj Mg, Cu, Fe, Zn według szybkości wydzielania wodoru w HCl. Zapisz równania.</li>
<li>Dlaczego stężony HNO₃ przechowuje się w ciemnych butelkach? Zapisz równanie.</li>
</ol>
<details class="answer"><summary>Pokaż odpowiedzi</summary>
<ol start="31">
<li>m<sub>s</sub> = 10% · 250 g / 100% = 25 g.</li>
<li>m<sub>s</sub> = 96 g; m<sub>r</sub>(20%) = 96 / 0,20 = 480 g → wody 380 g. Kwas wlewamy powoli do wody, mieszając i chłodząc.</li>
<li>c<sub>m</sub> = 36 · 1,18 · 10 / 36,46 ≈ 11,7 mol/dm³.</li>
<li>[H₃O⁺] ≈ √(1,75·10⁻⁵ · 0,1) ≈ 1,32·10⁻³ mol/dm³ → pH ≈ 2,88; α ≈ 1,32·10⁻³ / 0,1 ≈ 1,3%.</li>
<li>Fenoloftaleina zabarwi się na malinowo tylko w NaOH. Malinowy roztwór dolewamy do pozostałych dwóch: w probówce z HCl barwa zniknie (zobojętnienie), w wodzie zostanie (tylko się rozcieńczy).</li>
<li>Mg &gt; Zn &gt; Fe, Cu nie reaguje. Mg + 2 HCl → MgCl₂ + H₂↑; Zn + 2 HCl → ZnCl₂ + H₂↑; Fe + 2 HCl → FeCl₂ + H₂↑.</li>
<li>Na świetle rozkłada się: 4 HNO₃ → 4 NO₂ + O₂ + 2 H₂O (brunatny NO₂ barwi kwas na żółto).</li>
</ol>
</details>
</div>
'''
rep('<li>Fe(OH)₃ + 3HNO₃ → ? (z N02 + N03)</li>\n</ol>\n</div>\n</section>',
    '<li>Fe(OH)₃ + 3HNO₃ → ? (z N02 + N03)</li>\n</ol>\n</div>\n' + EX + '</section>', 'ćwiczenia +7')
rep('<li>Stopień dysocjacji α — ułamek cząsteczek zdysocjowanych; stała dysocjacji Ka — stała równowagi (nie zależy od stężenia).</li>',
    '<li>Stopień dysocjacji α — ułamek cząsteczek zdysocjowanych (zależy od stężenia); stała dysocjacji Ka — stała równowagi (nie zależy od stężenia, zależy od temperatury).</li>', 'odp. Ka')
rep('<li>Dodać kroplę fenoloftaleiny — bezbarwna w obu; dodać wskaźnik uniwersalny — oba kwaśne; zbadać pH-metrem — różne wartości; porównać przewodnictwo przy tym samym stężeniu — różne (HCl wyższe).</li>',
    '<li>Dodać kroplę fenoloftaleiny — bezbarwna w obu (nie odróżni); wskaźnik uniwersalny — oba kwaśne; zbadać pH-metrem roztwory o <strong>tym samym stężeniu</strong> — HCl ma niższe pH; porównać przewodnictwo — HCl wyższe; dodać Mg — w HCl pęcherzyki wydzielają się szybciej (doświadczenie 10).</li>', 'odp. HCl vs CH₃COOH')

# ===================== Skrypt: fiszki, test, tekst reaktora =====================
rep("['Jon hydroniowy','H₃O⁺ (H⁺ + H₂O)']\n  ];",
    "['Jon hydroniowy','H₃O⁺ (H⁺ + H₂O)'],\n"
    "    ['Stężony H₂SO₄ + cukier','zwęglenie — H₂SO₄ odwadnia (higroskopijny)'],\n"
    "    ['HNO₃ + białko','żółte zabarwienie (reakcja ksantoproteinowa)'],\n"
    "    ['Dlaczego HNO₃ w ciemnej butelce?','na świetle: 4 HNO₃ → 4 NO₂ + O₂ + 2 H₂O'],\n"
    "    ['Roztwór HCl a prąd','przewodzi — zawiera jony (elektrolit)'],\n"
    "    ['Oranż metylowy w wodzie (pH 7)','żółty'],\n"
    "    ['Stężenie procentowe','Cp = mₛ / mᵣ · 100%'],\n"
    "    ['Mniejsze pKa oznacza…','mocniejszy kwas'],\n"
    "    ['Fe + 2 HCl →','FeCl₂ + H₂↑ (nie FeCl₃)'],\n"
    "    ['Pasywacja','stęż. HNO₃ / H₂SO₄ na zimno pokrywa Fe, Al tlenkiem — reakcja ustaje'],\n"
    "    ['pH krwi','7,35–7,45 (bufor HCO₃⁻ / H₂CO₃)']\n  ];", 'fiszki +10')
rep("['W jakim zakresie pH zmienia barwę fenoloftaleina?',['3,1–4,4','8,2–10,0','5,0–8,0'],1]\n  ];",
    "['W jakim zakresie pH zmienia barwę fenoloftaleina?',['3,1–4,4','8,2–10,0','5,0–8,0'],1],\n"
    "    ['Barwa oranżu metylowego w wodzie destylowanej (pH 7)?',['czerwona','pomarańczowa','żółta'],2],\n"
    "    ['Który kwas żółknie na świetle?',['H₂SO₄','HNO₃','HCl'],1],\n"
    "    ['Ile gramów kwasu jest w 200 g roztworu 15%?',['15 g','30 g','185 g'],1],\n"
    "    ['Co powstaje w reakcji Fe z rozcieńczonym HCl?',['FeCl₃ + H₂','FeCl₂ + H₂','Fe₂O₃ + H₂O'],1],\n"
    "    ['Dlaczego NaCl + stęż. H₂SO₄ daje HCl?',['H₂SO₄ jest mocniejszy od HCl','HCl jest lotny i ulatnia się','powstaje osad'],1],\n"
    "    ['Który roztwór 0,1 M najsłabiej przewodzi prąd?',['HCl','HNO₃','CH₃COOH'],2],\n"
    "    ['pH 0,1 M HF (Ka ≈ 6,3·10⁻⁴) jest…',['niższe niż pH 0,001 M HCl','wyższe niż pH 0,001 M HCl','równe 7'],0]\n  ];", 'test +7')
rep("<small>Gaz napędza reakcję.</small>", "<small>H₂CO₃ rozkłada się na H₂O + CO₂↑ — ulatniający się gaz sprawia, że reakcja biegnie do końca.</small>", 'reaktor: tekst CO₂')

# ===================== Checklista + słownik + audyt =====================
after('<li>Zastosować wskaźniki (fenoloftaleina, oranż, papierek).</li>',
      '\n<li>Opisać właściwości HCl, H₂SO₄, HNO₃ (dymienie, higroskopijność, zwęglanie, reakcja ksantoproteinowa).</li>\n<li>Wyjaśnić, dlaczego roztwory kwasów przewodzą prąd.</li>\n<li>Obliczyć stężenie procentowe i rozcieńczenie roztworu kwasu.</li>\n<li>(LO) Posługiwać się K<sub>a</sub>/pK<sub>a</sub> i obliczyć pH słabego kwasu.</li>',
      'checklista +4')
before('<div class="def-item"><dt>Titracja (miareczkowanie)</dt>', '<div class="def-item"><dt>Stała dysocjacji K<sub>a</sub></dt><dd>Stała równowagi dysocjacji słabego kwasu: K<sub>a</sub> = [H₃O⁺][A⁻]/[HA]; zależy od temperatury, nie od stężenia. pK<sub>a</sub> = −log K<sub>a</sub>.</dd></div>\n<div class="def-item"><dt>Elektrolit</dt><dd>Substancja, której roztwór (lub stop) przewodzi prąd dzięki jonom; mocny — dysocjuje prawie całkowicie, słaby — częściowo.</dd></div>\n<div class="def-item"><dt>Pasywacja</dt><dd>Pokrycie metalu cienką, szczelną warstwą tlenku (np. Fe, Al w stęż. HNO₃), która zatrzymuje dalszą reakcję.</dd></div>\n', 'słownik +3')

AUD = '''
<div class="card card-new">
<span class="card-label">v1.5 — korekta merytoryczna i uzupełnienia (2026-10)</span>
<p><strong>Poprawione błędy:</strong> barwa oranżu metylowego i papierka uniwersalnego w roztworze obojętnym; ocet w złym przedziale pH; kwas Brønsteda „bez wodoru”; H₃PO₃ jako kwas trójprotonowy; warunki H₂ + Cl₂ / I₂; α H₃PO₄, HF, CH₃COOH z podanym stężeniem; błędna odpowiedź w zadaniu klinicznym HF/HCl (0,1 M HF ma pH ≈ 2,1 &lt; 3); uzasadnienie NaCl + H₂SO₄ (lotność, nie moc); para sprzężona H₃O⁺/H₂O; „szkło wodne” to Na₂SiO₃, nie H₂SiO₃; żołądek nie jest buforem, ślina — głównie bufor wodorowęglanowy; BHP przy rozlaniu kwasu i przy próbie wodoru; zdanie o rozcieńczaniu (α↑, [H₃O⁺]↓, pH↑).</p>
<p><strong>Dodane:</strong> 4.5 właściwości kwasów (E8), 5.6 przewodzenie prądu, 6.5 stężenia C<sub>p</sub> i c<sub>m</sub>, 6.6 K<sub>a</sub>/pK<sub>a</sub> i pH słabego kwasu, pOH i K<sub>w</sub>, szczegóły reakcji metal + kwas (Fe → Fe²⁺, Al, Pb, redoks), kwasy utleniające i pasywacja, tlenki amfoteryczne, wywar z kapusty, kwasy tłuszczowe, 10.1 kwasy w organizmie (biol-chem), doświadczenia 6–10, 6 błędów w klinice, 7 zadań, 10 fiszek, 7 pytań testowych, przyciski do doświadczeń w silniku GFX.</p>
<p><strong>Ukryte (nie usunięte):</strong> treści ponad maturę rozszerzoną w ramkach „poziom akademicki” — reguła Paulinga, termodynamika HF, efekt wyrównujący i superkwasy, aktywności, pH obojętne w innej temperaturze, wskaźnik jako słaby kwas, potencjał a energia jonizacji, woda królewska, HSAB/Usanowicz (oryginalne zdanie zachowane w ramce), pojemność buforowa, bufor krwi ilościowo.</p>
</div>
'''
rep('<p><strong>Numer:</strong> N03 (kwasy). Poprzednia: N02 Wodorotlenki i zasady. Następna: N04 Sole.</p>\n</div>\n</section>',
    '<p><strong>Numer:</strong> N03 (kwasy). Poprzednia: N02 Wodorotlenki i zasady. Następna: N04 Sole.</p>\n</div>\n' + AUD + '</section>', 'audyt v1.5')

# viz do istniejących miejsc
after('<h3>7.4 Laboratorium wskaźników</h3>', viz('gfx-scene-indicatorRack', 'Wskaźnik w siedmiu roztworach (statyw probówek)'), 'viz statyw wskaźników')

# ===================== v1.6: równania jonowe i tabela rozpuszczalności (CHE.IONIC) =====================
after('<h3>8.3.1 Równania jonowe zobojętniania</h3>\n', viz('rownania-jonowe-v01', 'Równania jonowe dla wszystkich reakcji z lekcji (generowane przez silnik)', 'Cząsteczkowe → jonowe pełne → skrócone · jony obserwatory · CHE.IONIC'), 'viz równania jonowe')
rep('<p>Reakcja zachodzi, gdy powstaje <strong>osad</strong>, <strong>gaz</strong> lub <strong>słaby elektrolit (np. woda)</strong>.</p>',
    '<p>Reakcja zachodzi, gdy powstaje <strong>osad</strong>, <strong>gaz</strong> lub <strong>słaby elektrolit (np. woda)</strong>.</p>'
    '<p class="mini-note"><span class="v15">v1.6</span> Czy powstanie osad, sprawdzasz w <strong>tabeli rozpuszczalności</strong>: produkt oznaczony N (nierozpuszczalny) lub T (trudno rozpuszczalny) wytrąca się — np. AgCl (N), BaSO₄ (N). Jeśli wszystkie produkty są rozpuszczalne (R) i nie powstaje gaz ani słaby elektrolit — reakcja nie zachodzi (same jony obserwatory).</p>\n'
    + viz('tabela-rozpuszczalnosci-v01', 'Tabela rozpuszczalności (20 °C) — kliknij komórkę', 'Wzór, nazwa, R / T / N, barwa osadu · CHE.DATA.SOLUBILITY_TABLE'), 'viz tabela rozpuszczalności 8.4')
after('<h3>3.1 Nazywanie soli z reszt kwasowych</h3>\n', viz('tabela-rozpuszczalnosci-v01', 'Tabela rozpuszczalności — nazwy i wzory soli', 'Każda komórka podaje wzór i nazwę soli · silnik CHE'), 'viz tabela 3.1')

# ===================== v1.7: równania oznaczone data-rx (audyt LES-RX-N03 ↔ CHE.REACTION) =====================
RXMARK=[('Zn + 2 HCl → ZnCl₂ + H₂↑','znHcl'),('Mg + 2 HCl → MgCl₂ + H₂↑','mgHcl'),('Fe + 2 HCl → FeCl₂ + H₂↑','feHcl'),('2 Al + 6 HCl → 2 AlCl₃ + 3 H₂↑','alHcl'),
 ('CaO + 2 HCl → CaCl₂ + H₂O','caoHcl'),('CuO + H₂SO₄ → CuSO₄ + H₂O','cuoH2so4'),('Fe₂O₃ + 6 HCl → 2 FeCl₃ + 3 H₂O','fe2o3Hcl'),('Na₂O + 2 HNO₃ → 2 NaNO₃ + H₂O','na2oHno3'),('MgO + 2 HCl → MgCl₂ + H₂O','mgoHcl'),
 ('HCl + NaOH → NaCl + H₂O','hclNaOH'),('H₂SO₄ + 2 KOH → K₂SO₄ + 2 H₂O','h2so4Koh'),('2 H₃PO₄ + 3 Ca(OH)₂ → Ca₃(PO₄)₂ + 6 H₂O','h3po4Caoh2'),
 ('SO₃ + H₂O → H₂SO₄','so3H2o'),('SO₂ + H₂O → H₂SO₃','so2H2o'),('N₂O₅ + H₂O → 2 HNO₃','n2o5H2o'),('N₂O₃ + H₂O → 2 HNO₂','n2o3H2o'),('H₂ + Br₂ → 2 HBr','h2Br2'),
 ('NaCl + H₂SO₄ →(Δ) NaHSO₄ + HCl↑','naclH2so4'),('C₁₂H₂₂O₁₁ →(stęż. H₂SO₄) 12 C + 11 H₂O','sugarH2so4')]
nmark=0
for t,k in RXMARK:
    a='<div class="formula-lg">'+t+'</div>'
    if a in h:
        h=h.replace(a,'<div class="formula-lg" data-rx="'+k+'">'+t+'</div>');nmark+=1
LOG.append('data-rx: %d równań'%nmark)
open(os.path.join(D, 'kw_new.html'), 'w', encoding='utf-8').write(h)
print('OK', len(LOG), 'zmian;', 'adv:', h.count('<details class="adv">'), '; viz:', h.count('che-lesson-viz-ref"'), '; dł.', len(h))

# ===================== v1.8: animacje lekcji tylko z własnego silnika (wewnętrzne widgety → widoki CHE) =====================
def cut_div(start_tag):
    """usuwa <div ...> start_tag ... </div> (zbalansowane), zwraca pozycję"""
    global h
    i = h.index(start_tag); j = i; depth = 0
    for m in re.finditer(r'<div\b|</div>', h[i:]):
        depth += 1 if m.group(0) == '<div' else -1
        if depth == 0:
            j = i + m.end(); break
    h = h[:i] + h[j:]
    return i
WREP = [
 ('<div class="widget" id="n03-reszta-converter">', viz('kw-reszty-v01', 'Kwas → reszta kwasowa → sole (13 metali)', 'Dysocjacja, ładunek reszty, wzory i nazwy soli, rozpuszczalność · CHE.IONIC')),
 ('<div class="widget" id="n03-ionization-anim">', viz('kw-dysocjacja-v01', 'Dysocjacja na żywo: H⁺ przeskakuje na wodę (tryb „krok po kroku”)', 'HCl, HNO₃, H₂SO₄, HF, CH₃COOH, H₃PO₄ · α i pH z Ka silnika · wykres α(c)')),
 ('<div class="widget" id="phWskazniki">', viz('ph-indicators-v03', 'Interaktywna skala pH — wskaźniki i barwy', 'Barwy wskaźników z CHE.COLORS · drabinka kwasów i zasad')),
 ('<div class="widget" id="n03-titration-curve">', viz('gfx-scene-titration', 'Miareczkowanie: biureta, kolba, wskaźnik', 'Scena GFX · pH z bilansu, barwa fenoloftaleiny z silnika') + viz('titration-merged', 'Krzywa miareczkowania: mocny/słaby kwas', 'pH(V) z silnika · punkt równoważnikowy')),
 ('<div class="widget" id="n03-buffer-widget">', viz('kw-bufor-v01', 'Bufor octanowy kontra woda — dodawaj HCl i NaOH', 'pH-metry, wskaźnik uniwersalny, wykres · pKa z silnika · wyczerpanie pojemności')),
]
for tag, rep_html in WREP:
    i = cut_div(tag); h = h[:i] + rep_html + h[i:]; LOG.append('widget→silnik: ' + tag[25:-2])
# stare przyciski do widoków spoza silnika → widok kw-dysocjacja-v01
for old in ('diss-hcl-mech-v02', 'strong-vs-weak-enhanced-v02'):
    h, n = re.subn(r'<div class="che-lesson-viz-ref" data-che-lesson-viz="%s">.*?</div>\n' % old,
        viz('kw-dysocjacja-v01', 'Dysocjacja kwasów mocnych i słabych — cząsteczki, α, pH', 'Model z Ka silnika · porównanie α(c) wszystkich kwasów'), h, flags=re.S)
    assert n == 1, old; LOG.append('viz ' + old + ' → kw-dysocjacja-v01')
h = h.replace('(v1.6 MASTER LAB', '(v1.8 MASTER LAB').replace('MASTER LAB v1.6</div>', 'MASTER LAB v1.8</div>')
open(os.path.join(D, 'kw_new.html'), 'w', encoding='utf-8').write(h)
print('v1.8:', len(LOG), 'zmian; viz:', h.count('che-lesson-viz-ref"'), '; widgety:', h.count('class="widget"'))
