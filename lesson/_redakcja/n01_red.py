# -*- coding: utf-8 -*-
"""Redakcja N01 (v6.2): składa nowe <main> z migawki n01_v61 + nowe fragmenty. Uruchamiać z /home/claude/che."""
import re, sys
from bs4 import BeautifulSoup
SNAP = 'lesson/_snap/n01_v61.html'
OUT = 'lesson/n01_new.html'
src = open(SNAP, encoding='utf-8').read()
a = src.index('<main'); b = src.index('</main>')
head, tail = src[:a], src[b:]
S = BeautifulSoup(src, 'html.parser')

def V(vid):
    r = S.find(attrs={'data-che-lesson-viz': vid}); assert r, vid; return str(r)
def X(css, i=None):
    r = S.select(css)
    if i is None:
        assert len(r) == 1, (css, len(r)); return str(r[0])
    return str(r[i])
def inner(sid, drop=()):
    s = S.find(id=sid); out = []
    for c in s.children:
        if getattr(c, 'name', None) == 'div' and 'part-heading' in (c.get('class') or []): continue
        out.append(str(c))
    return ''.join(out)
def FT(tag, txt, root=None):
    """element `tag` z tekstem zawierającym txt (dokładnie jeden)"""
    r = [e for e in (root or S).find_all(tag) if txt in e.get_text()]
    r = [e for e in r if not any(txt in c.get_text() for c in e.find_all(tag))]
    assert len(r) == 1, (tag, txt, len(r)); return str(r[0])

E8 = ' <span class="level-badge level-basic">E8</span>'
ROZ = ' <span class="level-badge level-understand">ROZUMIENIE</span>'
AMB = ' <span class="level-badge level-extra">AMBITNE</span>'
EXAM = lambda t: ' <span class="level-badge level-exam">%s</span>' % t

SECS = []   # (id, num_or_None(letter/symbol), title, badge, body)
def sec(sid, title, badge, body, num=None): SECS.append((sid, num, title, badge, body))

# ---------------------------------------------------------------- START
hero = X('section.hero').replace('MASTER LAB v6.1', 'MASTER LAB v6.2')
minimum = X('#minimum')
legend = '''<div class="layer-legend">
<div class="layer-row"><span class="dot e8"></span><span><b>E8:</b> nazewnictwo, charakter, reakcje z wodą, kwasami, zasadami; otrzymywanie, zastosowania, BHP i środowisko</span></div>
<div class="layer-row"><span class="dot understand"></span><span><b>Rozumienie:</b> skąd charakter, dlaczego nie każdy tlenek reaguje z wodą</span></div>
<div class="layer-row"><span class="dot extra"></span><span><b>Ambitne (LO):</b> amfoteryczność, P₄O₁₀, trendy w układzie okresowym, VSEPR, tlenki nietypowe, redoks i metalurgia, stechiometria (mole), korozja</span></div>
<div class="layer-row"><span class="dot contest"></span><span><b>Ponad LO:</b> rozwijane bloki „treści akademickie” — przycisk w nagłówku lekcji</span></div>
</div>'''
rdzen = '''<div class="core-path" id="rdzen">
<div class="cp-title">Rdzeń lekcji — najpierw to (ok. 30 min)</div>
<ol>
<li><strong>Sekcje [[definicja]]–[[oxide-decision-model]]</strong> — definicja, nazewnictwo, wzory, charakter, trzy pytania o tlenek.</li>
<li><strong>Konstruktor wzorów tlenków</strong> ([[builder]]) — zbuduj Fe₂O₃, Al₂O₃, N₂O₅.</li>
<li><strong>Detektor charakteru</strong> ([[charakter]]) — sprawdź Na₂O, SO₂, CO, Al₂O₃.</li>
<li><strong>Reaktor reakcji</strong> ([[reakcje]]) — CaO+H₂O, SO₃+H₂O, CuO+HCl, CO₂+NaOH.</li>
<li><strong>Reakcje kluczowe + Klinika błędów</strong>.</li>
<li><strong>Ćwiczenia + Fiszki + Quiz</strong>.</li>
</ol>
<p class="mini-note">Modele silnika stoją przy sekcjach, których dotyczą (wzór tlenku i stopnie utlenienia — [[builder]], trzy pytania o tlenek — [[charakter]], reakcje — [[reakcje]], doświadczenia — [[doswiadczenia]]); pełna lista: <a href="#wiz-reg-l002">Modele silnika w tej lekcji</a>. Następna lekcja: <strong>N02 Wodorotlenki i zasady</strong> (Lekcje → Chemia).</p>
</div>'''

sec('jak-pracowac', 'Jak pracować z lekcją', '', inner('jak-pracowac'))

sec('cele', 'Cele lekcji i pytanie przewodnie', E8, inner('cele') + '''
<div class="card card-exam">
<span class="card-label">Pytanie przewodnie</span>
<p>Do jednej zlewki z wodą wsypujemy biały CaO, do drugiej czarny CuO, a do trzeciej wprowadzamy CO₂. W pierwszej woda się rozgrzewa, a fenoloftaleina barwi się na malinowo; w drugiej proszek leży na dnie bez zmian; w trzeciej wskaźnik uniwersalny zmienia barwę na żółtopomarańczową (odczyn lekko kwasowy). <strong>Dlaczego trzy tlenki zachowują się tak różnie?</strong></p>
<p class="mini-note">Odpowiedź budujesz w [[charakter]] (charakter), [[oxide-decision-model]] (trzy pytania o tlenek) i [[n01-why-sio2-mgo]] (wyjaśnienia „dlaczego”).</p>
</div>''')

sec('kompas', 'Kompas — co trzeba wiedzieć wcześniej', '', '''
<div class="card card-understand">
<ul>
<li>wartościowość (H–I, O–II, Al–III, C–IV…),</li>
<li><strong>W–K–S–K</strong> (wartościowość → krzyżuj → skróć → kontrola),</li>
<li>współczynniki tak, indeksy nie,</li>
<li>bilans atomów w równaniu,</li>
<li>elektroujemność i rodzaj wiązania (jonowe / kowalencyjne) — potrzebne w [[n01-why-sio2-mgo]],</li>
<li>odczyn roztworu i wskaźniki (fenoloftaleina, wskaźnik uniwersalny) — potrzebne w doświadczeniach [[doswiadczenia]].</li>
</ul>
<p class="mini-note">Lekcje fundamentów F01–F09 (fundamenty): wartościowość, W–K–S–K, bilans. Bez tego konstruktor wzorów tlenków będzie loterią.</p>
</div>''')

# ---------------------------------------------------------------- RDZEŃ E8
defin = '''
<div class="card card-core">
<span class="card-label">Definicja</span>
<p><strong>Tlenek</strong> to związek chemiczny tlenu z innym pierwiastkiem, w którym tlen występuje na stopniu utlenienia −II i nie tworzy charakterystycznej grupy nadtlenkowej O₂²⁻ ani ponadtlenkowej O₂⁻. W szkolnych zadaniach najczęściej rozpatrujemy zwykłe tlenki, np. MgO, CO₂, Fe₂O₃. <strong>H₂O₂ i Na₂O₂ są nadtlenkami, a OF₂ jest fluorkiem tlenu, nie tlenkiem.</strong></p>
<p class="mini-note"><strong>Dlaczego:</strong> w nadtlenkach (H₂O₂, Na₂O₂) tlen ma stopień utlenienia <strong>−I</strong> (wiązanie O–O), a w OF₂ — <strong>+II</strong>, bo fluor jest bardziej elektroujemny niż tlen, więc to tlen „oddaje” elektrony. Tabela wszystkich typów związków tlenu — [[mieszane]].</p>
<p class="mini-note"><strong>Wzór schematyczny:</strong> w wielu prostych zadaniach tlenek zapisujemy jako EₓOᵧ, ale nie jest to uniwersalny wzór wszystkich tlenków.</p>
</div>
''' + FT('div', 'Rozdziel dwa modele') + '''
<h3>Reguła nazewnictwa</h3>
<div class="card card-basic">
<ul>
<li>„tlenek” + nazwa pierwiastka,</li>
<li>jeśli pierwiastek może tworzyć <strong>kilka tlenków</strong>, stopień utlenienia podaje się cyfrą rzymską (np. tlenek żelaza(II)/(III)). Na E8 stosuj systematyczne nazwy z cyfrą, gdy trzeba jednoznacznie wskazać wzór,</li>
<li>np. Fe₂O₃ = tlenek żelaza(III), CuO = tlenek miedzi(II),</li>
<li>pierwiastki o jednej wartościowości w tlenkach (np. Na, K, Ca, Mg, Al, Zn) — cyfry nie podajemy: tlenek sodu, tlenek glinu,</li>
<li>nazwy z przedrostkami liczebnikowymi (dwutlenek węgla, trójtlenek siarki, pięciotlenek fosforu) są potoczne; w zadaniach używaj nazw z cyfrą rzymską.</li>
</ul>
</div>
<div class="table-wrap">
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
<tr><td data-label="Wzór"><code>P₂O₅</code></td><td data-label="Nazwa">tlenek fosforu(V)</td><td data-label="Uwaga">Wzór empiryczny: P₂O₅; wzór cząsteczkowy: P₄O₁₀ (zapis szkolny vs cząsteczka) — [[p4o10]]</td></tr>
<tr><td data-label="Wzór"><code>SiO₂</code></td><td data-label="Nazwa">tlenek krzemu(IV)</td><td data-label="Uwaga">krzemionka; kwasowy, ale z wodą praktycznie nie reaguje — [[n01-why-sio2-mgo]]</td></tr>
<tr><td data-label="Wzór"><code>Cr₂O₃</code></td><td data-label="Nazwa">tlenek chromu(III)</td><td data-label="Uwaga">zielony</td></tr>
<tr><td data-label="Wzór"><code>MnO₂</code></td><td data-label="Nazwa">tlenek manganu(IV)</td><td data-label="Uwaga">czarny; piroluzyt</td></tr>
<tr><td data-label="Wzór"><code>PbO</code></td><td data-label="Nazwa">tlenek ołowiu(II)</td><td data-label="Uwaga">żółty; litargit</td></tr>
</tbody>
</table>
</div>'''
sec('definicja', 'Definicja i nazewnictwo', E8, defin)

builder = '''
<p>Wybierz pierwiastek i jego <strong>stopień utlenienia / wartościowość używaną w tym zadaniu</strong>, następnie dobierz tlen (II). Algorytm <strong>W–K–S–K</strong>.</p>
<div class="card card-understand" style="margin:10px 0">
<span class="card-label">Mikrokroki — zanim klikniesz „Zbuduj”</span>
<p style="margin-bottom:6px"><strong>1.</strong> nazwij stopień utlenienia → <strong>2.</strong> zapisz O²⁻ → <strong>3.</strong> dobierz najmniejsze indeksy dające sumę ładunków 0 → <strong>4.</strong> skróć wspólny dzielnik → <strong>5.</strong> sprawdź ładunek całkowity.</p>
<p class="mini-note" style="margin-bottom:0">W–K–S–K jest procedurą zapisu wzoru, nie dowodem, że każdy taki zapis odpowiada stabilnemu związkowi.</p>
</div>
''' + V('n01-konstruktor-v01') + '''
<div class="card card-core"><span class="card-label">Przykład W–K–S–K</span><p>Fe(III) + O(II) → Fe₂O₃: wartościowości 3 i 2 → krzyżujemy → Fe₂O₃ → kontrola: 2·(+3) + 3·(−2) = 0.</p><p>Drugi przykład: S(VI) + O(II) → SO₃ (kontrola: +6 + 3·(−2) = 0).</p><p class="mini-note">W–K–S–K nie zastępuje kontroli chemicznej. Po skrzyżowaniu sprawdź: (1) skrócenie indeksów, (2) bilans atomów, (3) suma stopni utlenienia = 0, (4) czy wzór jest znanym/możliwym związkiem.</p>
<p class="mini-note">Jak dobrać liczbę jonów O²⁻ do kationu (Na⁺ → Na₂O, Ca²⁺ → CaO, Al³⁺ → Al₂O₃) — w modelu konstruktora powyżej. Przykład: Na⁺ (+1) — dwa kationy na jeden O²⁻ (−2) → Na₂O; kontrola: 2·(+1) + 1·(−2) = 0.</p></div>
<h3 class="merge-h">Stopnie utlenienia w tlenkach</h3>
<div class="card card-understand">
<span class="card-label">Zasada</span>
<ul>
<li>Tlen w tlenkach = <strong>−II</strong>.</li>
<li>Suma stopni utlenienia w cząsteczce = 0.</li>
<li>Wyznaczasz stopień utlenienia drugiego pierwiastka z równania.</li>
<li>Wartościowość zapisujemy bez znaku (Fe — III), stopień utlenienia ze znakiem (Fe: +III); w zwykłych tlenkach mają tę samą wartość liczbową.</li>
</ul>
<p><strong>Przykład:</strong> Fe₂O₃ → 2·x + 3·(−2) = 0 → 2x = +6 → x = +III. Przykład mieszany: Fe₃O₄ można opisać jako FeO·Fe₂O₃ (1×Fe²⁺ + 2×Fe³⁺ + 4×O²⁻) — średni stopień Fe = +8/3 (tlenki mieszane — [[mieszane]]).</p>
<p class="mini-note">Kalkulator stopni utlenienia (także nadtlenki, OF₂, tlenki mieszane) — pole „Sprawdź wzór” w modelu konstruktora na początku tej sekcji. Tlenki jako utleniacze i reduktory — [[redukcja]].</p>
</div>'''
sec('builder', 'Wzór tlenku: W–K–S–K i stopnie utlenienia', E8, builder)

charakter = '''
<div class="card card-understand" style="text-align:center">
<span class="card-label">Trend (nie algorytm)</span>
<p style="font-size:13px;margin:0 0 6px">bardziej metaliczny charakter</p>
<p style="font-family:'JetBrains Mono',monospace;font-weight:800;margin:0;letter-spacing:0.5px">zasadowy ← amfoteryczny ← kwasowy</p>
<p style="font-size:13px;margin:6px 0 0">mniej metaliczny charakter · <em>ogólny trend, nie reguła dla każdego tlenku</em> · wyjaśnienie trendu — [[trend]]</p>
</div>
''' + X('#charCards') + '''
<div aria-live="polite" class="stage-box" id="charCardStage" style="margin-bottom:12px">Szczegóły każdego tlenku (charakter, reakcja z wodą, z kwasem i z zasadą) — model „Tlenek — trzy pytania” poniżej.</div>
<div class="card card-basic">
<span class="card-label">4 typy</span>
''' + X('#charakter .card-basic .table-wrap') + '''
<p class="mini-note">*jeśli tlenek jest wystarczająco reaktywny / rozpuszczalny. SiO₂ praktycznie nie reaguje z wodą; MgO z wodą — bardzo słabo. Tabela „tlenek → woda” — [[oxide-decision-model]].</p>
<p class="mini-note"><strong>„Obojętny”</strong> = klasyfikacja kwasowo-zasadowa w warunkach szkolnych (brak typowego tworzenia kwasu/zasady z wodą). <em>Nie oznacza</em>, że substancja nie uczestniczy w żadnej reakcji chemicznej.</p>
</div>
<h3>Jak rozpoznać w 10 sekund</h3>
<div class="card card-core">
<p>Tlenki <strong>aktywnych metali</strong> mają zwykle charakter zasadowy, tlenki <strong>niemetali</strong> — zwykle kwasowy. <em>Nie bez wyjątków:</em> CrO₃, Mn₂O₇ — kwasowe; Al₂O₃, ZnO, BeO — amfoteryczne. Dlatego najpierw sprawdzaj wyjątki, potem regułę ogólną:</p>
<ol>
<li>Czy to w ogóle zwykły tlenek? H₂O₂, Na₂O₂, KO₂ → nadtlenki/ponadtlenki; OF₂ → fluorek tlenu ([[definicja]]).</li>
<li>CO, NO, N₂O? → <strong>obojętny</strong> (szkolnie).</li>
<li>Al, Zn, Be (a także Cr(III), Pb(II), Sn(II))? → <strong>amfoteryczny</strong>.</li>
<li>Mn₂O₇, CrO₃? → <strong>kwasowy</strong> mimo że metal (wysoki stopień utlenienia — [[trend]]).</li>
<li>Pozostałe tlenki metali (zwłaszcza grup 1–2) → <strong>zasadowy</strong>. MgO zasadowy, ale z wodą bardzo słabo (nie mylić z CaO).</li>
<li>Niemetal? → zwykle <strong>kwasowy</strong>.</li>
</ol>
</div>
<h3 class="merge-h">Sprawdź w układzie okresowym</h3>
<p>Kliknij pierwiastek — zobacz typową wartościowość, wzór tlenku i charakter.</p>
''' + V('periodic-54') + V('n01-tlenki-v01') + '''
<p class="mini-note">CO jest tlenkiem obojętnym, a CO₂ kwasowym, choć oba to tlenki węgla — dlaczego, wyjaśnia [[n01-why-sio2-mgo]].</p>'''
sec('charakter', 'Charakter tlenków', E8, charakter)

dec = '''
<div class="card card-core">
<span class="card-label">E8 — najważniejsze rozróżnienie</span>
<p><strong>Charakter tlenku ≠ reakcja z wodą ≠ rozpuszczalność.</strong> Charakter opisuje typowe zachowanie kwasowo-zasadowe, reakcja z wodą mówi, czy i pod jakimi warunkami zachodzi przemiana z wodą, a rozpuszczalność mówi, ile substancji przechodzi do roztworu.</p>
<p>CuO jest zasadowy, ale nie reaguje z wodą; SiO₂ jest kwasowy, ale z wodą praktycznie nie reaguje; MgO jest zasadowy, ale z wodą reaguje bardzo słabo.</p>
</div><div class="dont-confuse">
<h4>Nie myl tych pojęć</h4>
<div class="confuse-grid">
<div><strong>Charakter tlenku</strong><p>zasadowy, kwasowy, obojętny lub amfoteryczny</p></div>
<div><strong>Reakcja z wodą</strong><p>czy i jak przebiega przemiana z wodą w danych warunkach</p></div>
<div><strong>Rozpuszczalność</strong><p>ile substancji przechodzi do roztworu</p></div>
</div>
</div>
<div class="table-wrap"><table class="mobile-stack"><thead><tr><th>Pytanie</th><th>Nie myl z</th><th>Przykład</th></tr></thead><tbody>
<tr><td data-label="Pytanie">Jaki charakter?</td><td data-label="Nie myl z">czy reaguje z wodą</td><td data-label="Przykład">CuO — zasadowy, ale bez reakcji z wodą</td></tr>
<tr><td data-label="Pytanie">Czy reaguje z wodą?</td><td data-label="Nie myl z">czy jest rozpuszczalny</td><td data-label="Przykład">CaO reaguje; SiO₂ praktycznie nie</td></tr>
<tr><td data-label="Pytanie">Jaki typ wiązania?</td><td data-label="Nie myl z">czy tlenek jest „metalowy”</td><td data-label="Przykład">charakter wiązania jest ciągły, nie binarny</td></tr>
</tbody></table></div>
<div class="card card-core">
<span class="card-label">Co widzę → jaki model → jaka reguła → jak sprawdzę</span>
<ol>
<li><strong>Rozpoznaj wzór:</strong> dwa różne pierwiastki, z których jednym jest O. Sprawdź, czy nie jest to nadtlenek/ponadtlenek ani OF₂.</li>
<li><strong>Ustal zapis:</strong> w zwykłym tlenku szkolnym przyjmij O na −II i policz stopień utlenienia drugiego pierwiastka.</li>
<li><strong>Nie wyciągaj charakteru tylko z układu okresowego:</strong> użyj trendu jako hipotezy, a następnie sprawdź reakcje.</li>
<li><strong>Oddziel trzy pytania:</strong> charakter kwasowo-zasadowy, reakcja z wodą i rozpuszczalność.</li>
<li><strong>Jeżeli zachodzi reakcja:</strong> zapisz produkty → zbilansuj współczynniki → sprawdź atomy → sprawdź sens chemiczny.</li>
</ol>
<div class="microsteps"><strong>1.</strong> Jaki charakter? → <strong>2.</strong> Czy reaguje z wodą? → <strong>3.</strong> Czy reaguje z kwasem lub zasadą?</div>
<div class="mini-note"><strong>Mini-przykład:</strong> CuO → O(−II), więc Cu(+II). Tlenek jest zasadowy, ale <strong>nie reaguje z wodą</strong>; z HCl reaguje: CuO + 2 HCl → CuCl₂ + H₂O.</div>
<div class="microsteps"><strong>SiO₂:</strong> kwasowy → z wodą praktycznie nie → z mocną zasadą, zwykle po ogrzaniu, tak.</div>
</div>
<div class="card card-basic" id="solOxides">
<span class="card-label">Tlenki a woda — tabela (charakter ≠ rozpuszczalność)</span>
<div class="table-wrap table-compact">
<table class="char-table">
<thead><tr><th>Tlenek</th><th>Charakter</th><th>Z wodą (szkolnie)</th><th>Przykład / uwaga</th></tr></thead>
<tbody>
<tr class="ok-row sol-good"><td>Na₂O, K₂O, Li₂O</td><td>zasadowy</td><td><strong>tak</strong> — reagują z wodą</td><td>Na₂O + H₂O → 2 NaOH</td></tr>
<tr class="ok-row sol-good"><td>CaO, BaO, SrO</td><td>zasadowy</td><td><strong>tak</strong> — reagują z wodą</td><td>CaO + H₂O → Ca(OH)₂ (egzo)</td></tr>
<tr><td>MgO</td><td>zasadowy</td><td><strong>bardzo słabo</strong> reaguje z wodą</td><td>szkolnie: praktycznie nie — dlaczego: [[n01-why-sio2-mgo]]</td></tr>
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
</div>
<p class="mini-note">To samo tło kolorystyczne co N02 (rozpuszczalność OH): zielony ≈ wyraźna reakcja z wodą.</p>
</div>
<p>Zobacz, co dzieje się z tlenkiem zasadowym i kwasowym w wodzie.</p>
<p class="mini-note">Co dzieje się z CaO, SO₃, CO₂ i CuO w wodzie — przycisk „Do wody” w modelu z [[charakter]] (zlewka ze wskaźnikiem) oraz pracownia doświadczeń w [[doswiadczenia]].</p>'''
sec('oxide-decision-model', 'Trzy pytania o tlenek: charakter ≠ reakcja z wodą ≠ rozpuszczalność', E8, dec)

kol = S.find(id='kolory')
kol_table = str(kol.find('table'))
kol_grid = str(kol.find('h4')) + str(kol.find(class_='ox-grid')) + str(kol.find(class_='ox-grid').find_next_sibling('p'))
kolory = '''
<div class="card card-basic">
<span class="card-label">Stan skupienia i temperatura topnienia</span>
<p>Tlenki metali są w warunkach pokojowych <strong>ciałami stałymi o wysokich temperaturach topnienia</strong> (MgO ok. 2850 °C, CaO ok. 2600 °C, Al₂O₃ ok. 2050 °C), bo tworzą sieci jonowe lub jonowo-kowalencyjne. Tlenki niemetali zbudowane z małych cząsteczek są często <strong>gazami</strong> (CO, CO₂, SO₂, NO, NO₂, N₂O), cieczami (H₂O, Mn₂O₇ — oleista ciecz) lub łatwo topliwymi ciałami stałymi (SO₃, P₄O₁₀).</p>
<p class="mini-note">Wyjątek: SiO₂ to niemetal, ale tworzy sieć kowalencyjną — ciało stałe o temperaturze topnienia ok. 1700 °C ([[n01-why-sio2-mgo]]).</p>
</div>
<h3 class="merge-h">Barwy i nazwy zwyczajowe</h3>
<div class="table-wrap">
''' + kol_table + kol_grid + '''
</div>
<p class="mini-note">Znajomość kolorów pomaga rozpoznawać tlenki w doświadczeniach i identyfikować osady.</p>'''
sec('kolory', 'Właściwości fizyczne: stan skupienia, barwy, nazwy zwyczajowe', E8, kolory)

otrz = '''
<h3>[[#]].1 Najczęstsza metoda E8</h3>
<div class="card card-basic">
<span class="card-label">Pierwiastek + tlen</span>
<div class="formula-lg" data-rx="mgO2">2 Mg + O₂ → 2 MgO</div>
<div class="formula-lg" data-rx="sO2">S + O₂ → SO₂</div>
<div class="formula-lg" data-rx="alO2">4 Al + 3 O₂ → 2 Al₂O₃</div>
<div class="formula-lg" data-rx="cO2">C + O₂ → CO₂ (nadmiar O₂)</div>
<div class="formula-lg" data-rx="pO2">4 P + 5 O₂ → 2 P₂O₅ (zapis szkolny; rzeczywisty produkt: P₄O₁₀)</div>
<p class="mini-note">Typ reakcji: synteza (łączenie).</p>
<p><strong>Równanie krok po kroku — 2 Mg + O₂:</strong> (1) zapisz substraty i produkt: Mg + O₂ → MgO; (2) tlenu po lewej 2 atomy, po prawej 1 → przed MgO wpisz 2; (3) teraz magnezu po prawej 2 → przed Mg wpisz 2; (4) kontrola.</p>
<p class="mini-note">Bilans: Mg 2 = 2 ✓ · O 2 = 2 ✓. Synteza tlenku; MgO z wodą reaguje bardzo słabo (≠ CaO) — most do N02.</p>
</div>
<div class="card card-basic">
<span class="card-label">Spalanie związków chemicznych</span>
<p>Tlenki powstają też przy spalaniu związków — każdy pierwiastek (poza tlenem) przechodzi w swój tlenek: CH₄ + 2 O₂ → CO₂ + 2 H₂O; 2 H₂S + 3 O₂ → 2 SO₂ + 2 H₂O.</p>
</div>
<h3>[[#]].2 Inne drogi <span class="level-badge level-extra">AMBITNE</span></h3>
<div class="card card-extra">
<ul>
<li><strong>Rozkład węglanów:</strong> CaCO₃ →(Δ) CaO + CO₂↑</li>
<li><strong>Rozkład wodorotlenków:</strong> Cu(OH)₂ →(Δ) CuO + H₂O</li>
<li><strong>Utlenianie niższych tlenków:</strong> 2 SO₂ + O₂ →(kat.) 2 SO₃</li>
<li><strong>Reakcja metalu z parą wodną:</strong> 3 Fe + 4 H₂O →(Δ) Fe₃O₄ + 4 H₂ <span class="mini-note">(Fe₃O₄ = tlenek mieszany Fe(II,III) — magnetyt)</span></li>
</ul>
<p class="mini-note">Katalizator to substancja zwiększająca szybkość reakcji, ale niezużywająca się w niej.</p>
</div>
<h3>[[#]].3 Spalanie całkowite i niecałkowite</h3>
''' + V('n01-spalanie-v01') + '''
<div class="card card-warning"><span class="card-label">Spalanie niecałkowite</span><p>Przy niedoborze tlenu zamiast CO₂ powstaje CO (tlenek węgla(II)) lub sadza (C). CO jest bezbarwny, bezwonny i silnie toksyczny — stąd zagrożenie czadem w zamkniętych pomieszczeniach.</p>
<p>Przykłady: 2 C + O₂ → 2 CO; 2 CH₄ + 3 O₂ → 2 CO + 4 H₂O; CH₄ + O₂ → C + 2 H₂O (sadza). Działanie czadu i profilaktyka — [[bezpieczenstwo]].</p></div>'''
sec('otrzymywanie', 'Otrzymywanie tlenków', E8, otrz)

reak = '''
<h3>[[#]].1 Tlenek zasadowy + woda</h3>
<div class="card card-basic">
<div class="formula-lg" data-rx="na2oH2o">Na₂O + H₂O → 2 NaOH</div>
<div class="formula-lg" data-rx="k2oH2o">K₂O + H₂O → 2 KOH</div>
<div class="formula-lg" data-rx="caoH2o">CaO + H₂O → Ca(OH)₂</div>
<div class="formula-lg" data-rx="baoH2o">BaO + H₂O → Ba(OH)₂</div>
</div>
<div class="card card-error">
<span class="card-label">Pułapka: MgO</span>
<p>MgO reaguje z wodą bardzo powoli i w niewielkim stopniu (szkolnie: praktycznie nie). Nie traktuj jak CaO. Dlaczego — [[n01-why-sio2-mgo]].</p>
</div>
<h3>[[#]].2 Tlenek kwasowy + woda</h3>
<div class="card card-basic">
<div class="formula-lg" data-rx="so3H2o">SO₃ + H₂O → H₂SO₄</div>
<div class="formula-lg" data-rx="so2H2o">SO₂ + H₂O → H₂SO₃</div>
<div class="formula-lg">CO₂ + H₂O ⇌ H₂CO₃</div>
<div class="formula-lg" data-rx="n2o5H2o">N₂O₅ + H₂O → 2 HNO₃</div>
<div class="formula-lg" data-rx="p2o5H2o">P₂O₅ + 3 H₂O → 2 H₃PO₄ (zapis szkolny)</div>
<p class="mini-note">CO₂ + H₂O — reakcja odwracalna (szkolnie czasem zapis →); H₂CO₃ jest kwasem słabym i nietrwałym, w roztworze przeważa rozpuszczony CO₂. Zapis cząsteczkowy dla fosforu (P₄O₁₀ + 6 H₂O → 4 H₃PO₄) — [[p4o10]]. Nie każdy tlenek kwasowy reaguje z wodą: SiO₂ praktycznie nie ([[n01-why-sio2-mgo]]).</p>
</div>
<h3>[[#]].3 Tlenek + kwas lub zasada → sól + woda</h3>
<p>Tlenek zasadowy reaguje z kwasem, tlenek kwasowy — z zasadą; w obu przypadkach powstaje sól i woda. Amfoteryczny reaguje z obydwoma (E8: rozumieć, że reaguje też z zasadą) — [[amfoterycznosc]].</p>
<div class="card card-basic">
<span class="card-label">Tlenek zasadowy + kwas</span>
<div class="formula-lg" data-rx="caoHcl">CaO + 2 HCl → CaCl₂ + H₂O</div>
<div class="formula-lg" data-rx="cuoH2so4">CuO + H₂SO₄ → CuSO₄ + H₂O</div>
<div class="formula-lg" data-rx="fe2o3Hcl">Fe₂O₃ + 6 HCl → 2 FeCl₃ + 3 H₂O</div>
<div class="formula-lg" data-rx="na2oHno3">Na₂O + 2 HNO₃ → 2 NaNO₃ + H₂O</div>
<p class="mini-note"><strong>Dlaczego sól + woda:</strong> tlen tlenku zasadowego (O²⁻) wiąże dwa jony H⁺ kwasu w cząsteczkę H₂O, a kation metalu i reszta kwasowa tworzą sól. Liczba cząsteczek H₂O = liczba atomów O w tlenku (Fe₂O₃ → 3 H₂O).</p>
</div>
<div class="card card-basic">
<span class="card-label">Tlenek kwasowy + zasada</span>
<div class="formula-lg" data-rx="naohCo2">CO₂ + 2 NaOH → Na₂CO₃ + H₂O</div>
<div class="formula-lg">SO₂ + 2 KOH → K₂SO₃ + H₂O</div>
<div class="formula-lg" data-rx="so3Naoh">SO₃ + 2 NaOH → Na₂SO₄ + H₂O</div>
<p class="mini-note">Reszta kwasowa soli pochodzi od kwasu, który tworzy dany tlenek z wodą: CO₂ → H₂CO₃ → węglan; SO₂ → H₂SO₃ → siarczan(IV); SO₃ → H₂SO₄ → siarczan(VI).</p>
</div>
<div class="card card-exam">
<span class="card-label">CO₂ + NaOH — dwa przypadki</span>
<p>Produkty zależą od <strong>stosunku molowego</strong> substratów (nie tylko od tego, „którego więcej wlać”).</p>
<p><strong>Nadmiar zasady / niedobór CO₂:</strong> CO₂ + 2 NaOH → Na₂CO₃ + H₂O (węglan sodu).</p>
<p><strong>Nadmiar CO₂:</strong> CO₂ + NaOH → NaHCO₃ (wodorowęglan sodu).</p>
</div>
<h3>[[#]].4 Tlenek + tlenek → sól (rozszerzenie) <span class="level-badge level-extra">AMBITNE</span></h3>
<div class="card card-extra">
<div class="formula-lg" data-rx="caoCo2">CaO + CO₂ → CaCO₃</div>
<div class="formula-lg">Na₂O + SO₃ → Na₂SO₄ <span class="mini-note">(synteza soli bez wody: tlenek zasadowy + tlenek kwasowy)</span></div>
</div>
''' + V('n01-reaktor-v01') + '''
<h3>[[#]].5 Mapa reakcji — łańcuch przemian</h3>
<p>Kliknij węzeł — zobacz ścieżkę: pierwiastek → tlenek → wodorotlenek/kwas → sól. Most do N02, N03, N04.</p>
''' + V('chain-scn')
sec('reakcje', 'Reakcje tlenków', E8, reak)

zast = S.find(id='dod-c').find('table')
zast_s = str(zast).replace('<td>wapno palone, cement, budownictwo</td>', '<td>wapno palone, cement, budownictwo (zaprawa murarska)</td>').replace(
    '<tr><td>CuO</td>', '<tr><td>MgO</td><td>materiały ogniotrwałe; leki zobojętniające nadmiar kwasu w żołądku</td></tr>\n<tr><td>CuO</td>')
zastos = '''
<div class="card card-basic">
<div class="table-wrap">
''' + zast_s + '''
</div>
<p class="mini-note">Wiele zastosowań wynika wprost z właściwości: CaO wiąże wodę i reaguje z nią egzotermicznie, SiO₂ jest twardy i odporny chemicznie, Fe₂O₃ i TiO₂ są trwałymi barwnikami, P₄O₁₀ silnie pochłania wodę. Wpływ tlenków na środowisko — [[bezpieczenstwo]].</p>
</div>'''
sec('zastosowania', 'Zastosowania tlenków', E8, zastos)

bhp = '''
<div class="card card-error">
<h3>Czad (CO) — bezbarwny, bezwonny, śmiertelny</h3>
<ul>
<li>Bezbarwny, bezwonny — nazywany „cichym zabójcą”. Powstaje przy spalaniu niecałkowitym ([[otrzymywanie]]).</li>
<li>Źródła: wadliwe piece gazowe, kotły, kominki, spaliny samochodowe.</li>
<li><strong>Działanie:</strong> łączy się z hemoglobiną znacznie silniej niż O₂; często podaje się około 200–250× w określonych warunkach. Utrudnia transport tlenu.</li>
<li><strong>Objawy zatrucia:</strong> ból głowy, nudności, senność, utrata przytomności.</li>
<li><strong>Profilaktyka:</strong> czujnik CO w każdym domu z piecem gazowym, regularne przeglądy, wentylacja.</li>
<li><strong>Pierwsza pomoc:</strong> wyprowadzić poszkodowanego na świeże powietrze, otworzyć okna, wezwać pomoc (112) — nie wchodzić samemu do zadymionego pomieszczenia.</li>
</ul>
</div>
<h3 class="merge-h">Tabela BHP tlenków</h3>
<div class="card card-error">
<div class="table-wrap">
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
</div>
</div>
<h3 class="merge-h">Środowisko: smog, kwaśne deszcze, efekt cieplarniany</h3>
<div class="card card-basic">
<h3>Smog</h3>
<p><strong>Smog</strong> — zanieczyszczenie powietrza powstałe z mieszaniny spalin, pyłów i tlenków.</p>
<ul>
<li>Mieszanina SO₂, NO₂, pyłów zawieszonych (PM2.5, PM10).</li>
<li>Szczególnie groźny zimą w miastach — efekt „niskiej emisji”.</li>
</ul>
<p><strong>Typowe składniki / zanieczyszczenia związane ze smogiem:</strong> pyły zawieszone, tlenki azotu, CO, SO₂ oraz — w smogu fotochemicznym — ozon i inne produkty reakcji atmosferycznych. SO₃ występuje zwykle w znacznie mniejszych ilościach niż SO₂. CO₂ jest przede wszystkim gazem cieplarnianym, a nie typowym składnikiem smogu odpowiedzialnym za jego lokalne toksyczne działanie.</p>
<h3>Kwaśne deszcze</h3>
<ul>
<li>Źródła: SO₂ i NO₂ z fabryk, elektrowni, samochodów.</li>
<li>Skutki: zakwaszenie gleb i wód, uszkodzenie lasów, korozja budynków.</li>
</ul>
<ul>
<li>SO₂ + H₂O ⇌ H₂SO₃ (zapis uproszczony; w atmosferze istotne są też kolejne procesy utleniania)</li>
<li>2 SO₂ + O₂ → 2 SO₃</li>
<li>SO₃ + H₂O → H₂SO₄</li>
<li>3 NO₂ + H₂O → 2 HNO₃ + NO</li>
</ul>
<h3>Efekt cieplarniany</h3>
<p><strong>Gazy cieplarniane:</strong> CO₂, CH₄, N₂O, para wodna.</p>
<p class="mini-note">N₂O — silny gaz cieplarniany; porównania rzędu 270–300× wpływu CO₂ na jednostkę masy zależą od przyjętego horyzontu czasowego i źródła danych.</p>
<h3>Jak ograniczać emisję</h3>
<ul>
<li><strong>Odsiarczanie spalin</strong> w elektrowniach: SO₂ wiąże się tlenkiem lub węglanem wapnia (np. CaO + SO₂ → CaSO₃), a produkt utlenia się do gipsu.</li>
<li><strong>Katalizator samochodowy</strong> przekształca CO i NO w mniej szkodliwe gazy: 2 CO + 2 NO → 2 CO₂ + N₂.</li>
<li>Oszczędzanie energii, odnawialne źródła energii, wymiana starych pieców (mniej „niskiej emisji”).</li>
</ul>
</div>'''
sec('bezpieczenstwo', 'Bezpieczeństwo, zdrowie i środowisko', E8, bhp)

# ---------------------------------------------------------------- ROZUMIENIE / AMBITNE
why = '''
<h3 class="merge-h">Metal → zasadowy, niemetal → kwasowy: skąd ta reguła</h3>
<div class="card card-understand">
<p>Dla zrozumienia, dlaczego tlenki metali grup 1–2 są zasadowe.</p>
''' + str(S.find(id='dod-a').find(class_='table-wrap')) + '''
<p class="mini-note">Metale łatwo oddają elektrony → w tlenkach występują jako kationy, a jon O²⁻ z wodą daje OH⁻ → tlenki zasadowe. Niemetale tworzą z tlenem wiązania kowalencyjne; ich tlenki z wodą dają kwasy tlenowe (H⁺ + aniony reszt kwasowych) → tlenki kwasowe.</p>
<div class="formula-lg">O²⁻ + H₂O → 2 OH⁻ &nbsp;·&nbsp; SO₃ + H₂O → H₂SO₄ → 2 H⁺ + SO₄²⁻</div>
<p><strong>Model wiązania:</strong> wiele tlenków metali ma znaczny udział charakteru jonowego, a wiele tlenków niemetali ma charakter kowalencyjny; to trend, nie absolutny podział. Im mniejsza różnica elektroujemności i im wyższy stopień utlenienia pierwiastka, tym bardziej kowalencyjne wiązanie E–O i tym bardziej kwasowy tlenek — stąd amfoteryczny Al₂O₃ i kwasowy Mn₂O₇ ([[trend]]).</p>
</div>
<h3 class="merge-h">CO a CO₂ — dlaczego klasyfikujemy je inaczej</h3>
''' + FT('div', 'jest w szkolnym modelu tlenkiem obojętnym') + '''
<div class="card card-understand">
<h3>SiO₂ — kwasowy, ale praktycznie nie reaguje z wodą</h3>
<p><strong>Co widzę:</strong> SiO₂ klasyfikujemy jako tlenek kwasowy, ale zwykła woda nie daje z nim reakcji analogicznej do SO₃ + H₂O.</p>
<p><strong>Model:</strong> krzemionka ma rozległą, trwałą sieć kowalencyjną. W warunkach szkolnych jej reaktywność z wodą jest bardzo mała.</p>
<p><strong>Kontrola:</strong> z mocną zasadą SiO₂ może reagować, zwykle po ogrzaniu:</p>
<div class="formula-lg">SiO₂ + 2 NaOH →<span class="rxn-cond">Δ</span> Na₂SiO₃ + H₂O</div>
<p class="mini-note">Nie traktuj zapisu „SiO₂ + H₂O → H₂SiO₃” jako zwykłej reakcji przebiegającej w wodzie. To nadmierne uproszczenie szkolnego modelu.</p>
<p class="mini-note">Ta sama sieć (każdy atom Si połączony z 4 atomami O) tłumaczy wysoką temperaturę topnienia SiO₂ (ok. 1700 °C), podczas gdy CO₂ — zbudowany z małych cząsteczek — jest gazem.</p>
</div>
<div class="card card-understand">
<h3>MgO — zasadowy, ale z wodą bardzo słabo</h3>
<p>MgO ma trwałą sieć jonową i małą rozpuszczalność w wodzie. W rezultacie ilość substancji przechodzącej do roztworu jest ograniczona, więc reakcja z wodą jest bardzo słaba.</p>
<p><strong>Dokładniej (porównanie z CaO):</strong> mały jon Mg²⁺ silnie przyciąga O²⁻, więc energia sieciowa MgO jest duża. Powstający Mg(OH)₂ jest praktycznie nierozpuszczalny i pokrywa ziarna tlenku, co dodatkowo hamuje reakcję. Większy jon Ca²⁺ tworzy słabszą sieć, a Ca(OH)₂ jest tylko trudno rozpuszczalny — dlatego gaszenie wapna jest szybkie i silnie egzotermiczne.</p>
<p class="mini-note">Ślad reakcji można jednak wykryć: zawiesina MgO w wodzie z fenoloftaleiną barwi się słabo na różowo.</p>
<p><strong>Wniosek:</strong> charakter tlenku, jego rozpuszczalność i szybkość reakcji z wodą to trzy różne informacje.</p>
<p class="mini-note">Dlatego nie stosuj automatu „tlenek zasadowy → zawsze reaguje z wodą”.</p>
</div>'''
sec('n01-why-sio2-mgo', 'Wyjaśnienia „dlaczego”: budowa a charakter i reakcja z wodą', ROZ, why)

trend = '''
<p>W okresie (od lewej do prawej) charakter tlenków zmienia się od zasadowego, przez amfoteryczny, do kwasowego.</p>
''' + V('n01-trend-v01') + '''
<div class="card card-extra">
<span class="card-label">2. i 3. okres — porównanie</span>
<div class="formula-lg">Li₂O → BeO → B₂O₃ → CO₂ → N₂O₅</div>
<p><strong>Li₂O</strong> — zasadowy; <strong>BeO</strong> — amfoteryczny; <strong>B₂O₃, CO₂, N₂O₅</strong> — kwasowe. To ogólny trend, a nie algorytm bez wyjątków.</p><p class="mini-note">Fluor pomijamy w szeregu tlenków: OF₂ to <strong>fluorek tlenu</strong>, nie tlenek fluoru.</p>
<p><strong>Trend w 3. okresie:</strong></p>
<div class="formula-lg">Na₂O → MgO → Al₂O₃ → SiO₂ → P₄O₁₀ → SO₃ → Cl₂O₇</div>
<div class="formula-lg">zasadowy → zasadowy → amfoteryczny → kwasowy → kwasowy → kwasowy → kwasowy</div>
<p><strong>Wyjaśnienie:</strong> w okresie zwykle rośnie elektroujemność i maleje metaliczność, dlatego charakter tlenków często przesuwa się od zasadowego przez amfoteryczny do kwasowego. To <strong>trend, nie algorytm</strong>; wpływają też stopień utlenienia, budowa, rodzaj wiązań i trwałość struktury. W 3. okresie rośnie przy tym stopień utlenienia pierwiastka w najwyższym tlenku: od +I (Na) do +VII (Cl).</p>
</div>
<h3 class="merge-h">Trend w grupie</h3>
<div class="card card-extra">
<p>W grupie (w dół) rośnie metaliczność, więc rośnie charakter zasadowy tlenków: BeO (amfoteryczny) → MgO → CaO → SrO → BaO (coraz silniej zasadowe). W grupie 15: N₂O₅ i P₄O₁₀ kwasowe, As₄O₆ amfoteryczny, Bi₂O₃ zasadowy.</p>
</div>
<h3 class="merge-h">Ten sam pierwiastek, różne stopnie utlenienia — metale przejściowe</h3>
<div class="card card-extra">
<p>Wyższy stopień utlenienia → silniejszy charakter kwasowy.</p>
<div class="table-wrap"><table class="mobile-stack"><thead><tr><th>Pierwiastek</th><th>Niski stopień</th><th>Pośredni</th><th>Wysoki stopień</th></tr></thead><tbody>
<tr><td data-label="Pierwiastek">Cr</td><td data-label="Niski">CrO (+II) — zasadowy</td><td data-label="Pośredni">Cr₂O₃ (+III) — amfoteryczny</td><td data-label="Wysoki">CrO₃ (+VI) — kwasowy</td></tr>
<tr><td data-label="Pierwiastek">Mn</td><td data-label="Niski">MnO (+II) — zasadowy</td><td data-label="Pośredni">MnO₂ (+IV) — amfoteryczny</td><td data-label="Wysoki">Mn₂O₇ (+VII) — kwasowy</td></tr>
<tr><td data-label="Pierwiastek">S</td><td data-label="Niski">—</td><td data-label="Pośredni">SO₂ (+IV) — kwasowy (H₂SO₃, słaby)</td><td data-label="Wysoki">SO₃ (+VI) — kwasowy (H₂SO₄, mocny)</td></tr>
</tbody></table></div>
<p><strong>Dla metali przejściowych:</strong> Mn₂O₇ (Mn +VII), CrO₃ (Cr +VI) — kwasowe, mimo że to metale.</p>
<p class="mini-note"><strong>Dlaczego:</strong> atom na wysokim stopniu utlenienia silnie przyciąga elektrony tlenu, wiązania E–O stają się kowalencyjne, a tlenek z wodą tworzy kwas tlenowy z anionem reszty kwasowej (Mn₂O₇ → HMnO₄, MnO₄⁻; CrO₃ → H₂CrO₄, CrO₄²⁻).</p>
</div>'''
sec('trend', 'Trend charakteru tlenków: okres, grupa, stopień utlenienia', AMB, trend)

amf = '''
<div class="card card-extra">
<span class="card-label">Definicja i drabina poziomów</span>
<p><strong>Tlenek amfoteryczny</strong> — reaguje zarówno z kwasami (jak zasadowy), jak i z zasadami (jak kwasowy).</p>
<p><strong>Przykłady:</strong> Al₂O₃, ZnO, BeO, PbO, SnO (a także Cr₂O₃, MnO₂ — [[trend]]).</p>
<p><strong>E8:</strong> Al₂O₃ reaguje z kwasem i z mocną zasadą.</p>
<p class="mini-note"><strong>Na E8:</strong> wystarczy wiedzieć, że Al₂O₃ i ZnO reagują <strong>i z kwasami, i z zasadami</strong>. Równania z jonami kompleksowymi są rozszerzeniem.</p>
<p><strong>Wyjaśnienie:</strong> zachowuje się jak tlenek zasadowy wobec kwasu i jak kwasowy wobec mocnej zasady.</p>
<p class="mini-note">Wiązanie Al–O i Zn–O jest pośrednie między jonowym a kowalencyjnym — stąd „podwójna” natura. Amfoteryczne są też odpowiednie wodorotlenki Al(OH)₃ i Zn(OH)₂ — most do N02.</p>
</div>
<div class="card card-extra">
<span class="card-label">Równania (rozszerzenie)</span>
<div class="formula-lg" data-rx="al2o3Hcl">Al₂O₃ + 6 HCl → 2 AlCl₃ + 3 H₂O</div>
<div class="formula-lg" data-rx="al2o3NaohMelt">Al₂O₃ + 2 NaOH →(stapianie) 2 NaAlO₂ + H₂O</div>
<p class="mini-note">Reakcja w stopionej zasadzie (warunki bezwodne).</p>
<div class="formula-lg">Al₂O₃ + 2 NaOH + 3 H₂O → 2 Na[Al(OH)₄] <span class="mini-note">(roztwór wodny)</span></div>
<p class="mini-note">Jonowo w roztworze: Al₂O₃ + 2 OH⁻ + 3 H₂O → 2 [Al(OH)₄]⁻. Zapis NaAlO₂ zostawiamy jako model dla warunków bezwodnych / stopionej zasady.</p>
<div class="formula-lg" data-rx="znoHcl">ZnO + 2 HCl → ZnCl₂ + H₂O</div>
<div class="formula-lg" data-rx="znoNaoh">ZnO + 2 NaOH → Na₂ZnO₂ + H₂O</div><p class="mini-note">Na₂ZnO₂ — zapis dla stopu / warunków bezwodnych; w roztworze wodnym: ZnO + 2 NaOH + H₂O → Na₂[Zn(OH)₄].</p>
</div>'''
sec('amfoterycznosc', 'Amfoteryczność', AMB, amf)

p4 = '''
<div class="card card-extra">
<ul>
<li><strong>P₂O₅</strong> — wzór empiryczny (najprostszy stosunek P : O = 2 : 5).</li>
<li><strong>P₄O₁₀</strong> — wzór rzeczywistej cząsteczki (dekatlenek tetrafosforu).</li>
</ul>
<p><strong>W szkole stosujemy P₂O₅</strong> jako zapis empiryczny i wygodny zapis stechiometryczny.</p>
<p class="mini-note">P₄O₁₀ nie oznacza innej substancji: opisuje rzeczywistą cząsteczkę, natomiast P₂O₅ podaje najprostszy stosunek P:O = 2:5.</p>
<div class="microsteps"><strong>Mikrokroki:</strong> 4:10 → skróć przez 2 → 2:5 → wzór empiryczny P₂O₅.</div>
<p class="mini-note">Budowa: cztery atomy P w narożach czworościanu połączone mostkami tlenowymi, do każdego P dołączony jeszcze jeden atom O. P₄O₁₀ silnie pochłania wodę — stąd zastosowanie jako środek suszący.</p>
</div>
<div class="card card-extra">
<span class="card-label">P₂O₅ ↔ P₄O₁₀ w równaniach</span>
<p>Szkolny zapis:</p>
<div class="formula-lg" data-rx="p2o5H2o">P₂O₅ + 3 H₂O → 2 H₃PO₄</div>
<p>Dokładniejszy zapis cząsteczkowy:</p>
<div class="formula-lg" data-rx="p4o10H2o">P₄O₁₀ + 6 H₂O → 4 H₃PO₄</div>
<p class="mini-note">Analogicznie spalanie fosforu: 4 P + 5 O₂ → 2 P₂O₅ (szkolnie) lub 4 P + 5 O₂ → P₄O₁₀ (cząsteczkowo).</p>
</div>'''
sec('p4o10', 'P₂O₅ i P₄O₁₀ — wzór empiryczny a cząsteczka', AMB, p4)

mies = '''
<div class="card card-extra">
<span class="card-label">Związki tlenu — przegląd</span>
<div class="table-wrap"><table class="mobile-stack"><thead><tr><th>Typ</th><th>Jon / grupa</th><th>Stopień utlenienia O</th><th>Przykłady</th></tr></thead><tbody>
<tr><td data-label="Typ">tlenek (zwykły)</td><td data-label="Jon">O²⁻ / O w wiązaniu kowalencyjnym</td><td data-label="Stopień O">−II</td><td data-label="Przykłady">CaO, CO₂, Fe₂O₃</td></tr>
<tr><td data-label="Typ">nadtlenek</td><td data-label="Jon">O₂²⁻ (wiązanie O–O)</td><td data-label="Stopień O">−I</td><td data-label="Przykłady">H₂O₂, Na₂O₂, BaO₂</td></tr>
<tr><td data-label="Typ">ponadtlenek</td><td data-label="Jon">O₂⁻</td><td data-label="Stopień O">−½</td><td data-label="Przykłady">KO₂, RbO₂</td></tr>
<tr><td data-label="Typ">fluorek tlenu</td><td data-label="Jon">—</td><td data-label="Stopień O">+II</td><td data-label="Przykłady">OF₂</td></tr>
</tbody></table></div>
</div>
<div class="card card-extra">
<h3>Tlenki mieszane</h3>
<p>Zawierają ten sam metal na dwóch różnych stopniach utlenienia.</p>
<ul>
<li><strong>Fe₃O₄</strong> (magnetyt) = FeO·Fe₂O₃ — tlenek żelaza(II,III).</li>
<li><strong>Pb₃O₄</strong> (minia) = 2 PbO·PbO₂ — tlenek ołowiu(II,IV).</li>
<li><strong>Mn₃O₄</strong> = MnO·Mn₂O₃.</li>
</ul>
<p class="mini-note">Średni stopień utlenienia Fe w Fe₃O₄ = +8/3 — obliczenie w [[builder]].</p>
<h3>Nadtlenki</h3>
<p>Zawierają wiązanie O–O; tlen na <strong>−I</strong>.</p>
<p>Grupa nadtlenkowa (grupa O₂²⁻) — to nie „zwykły” tlenek O²⁻.</p>
<ul>
<li><strong>H₂O₂</strong> — woda utleniona; rozkłada się (katalizator MnO₂): 2 H₂O₂ → 2 H₂O + O₂.</li>
<li><strong>Na₂O₂</strong>, <strong>BaO₂</strong> — nadtlenki metali; z wodą wydzielają tlen: 2 Na₂O₂ + 2 H₂O → 4 NaOH + O₂.</li>
</ul>
<h3>Ponadtlenki</h3>
<p>Anion O₂⁻; tlen na <strong>−½</strong>.</p>
<ul>
<li><strong>KO₂</strong>, <strong>RbO₂</strong> — stosowane w aparatach tlenowych (okręty podwodne, stacje kosmiczne) — KO₂ reaguje z CO₂ i H₂O, uwalniając O₂ (systemy podtrzymywania życia).</li>
</ul>
<div class="formula-lg">4 KO₂ + 2 CO₂ → 2 K₂CO₃ + 3 O₂</div>
<details class="adv"><summary>Ozonki <span class="adv-tag">poza programem LO</span></summary><div class="adv-body">
<p>Anion O₃⁻; np. <strong>KO₃</strong>.</p>
</div></details>
<h3>OF₂ — fluorek tlenu</h3>
<p>Tlen na <strong>+II</strong> — to nie tlenek, a fluorek (fluor elektroujemniejszy).</p>
<p class="mini-note">Na E8 wystarczy rozróżnić „zwykły” tlenek (−II) od wzmianki o wyjątkach.</p>
</div>'''
sec('mieszane', 'Tlenki mieszane i nietypowe związki tlenu', AMB, mies)

vs = S.find(id='vsepr')
vsepr = '''
<p>Kształt <strong>cząsteczki</strong> zależy od liczby chmur elektronowych wokół atomu centralnego. VSEPR stosujemy przede wszystkim do cząsteczek/układów molekularnych; nie opisuje bezpośrednio całej sieci jonowej, np. kryształu CaO.</p>
''' + str(vs.find(class_='card-understand')) + V('molecule3d-merged') + '''
<div class="card card-extra">
<span class="card-label">Dlaczego H₂O i SO₂ są kątowe, a CO₂ liniowa?</span>
<p>Tlen w H₂O ma 2 wiązania i <strong>2 wolne pary</strong>. Wolne pary odpychają się silniej niż pary wiążące i „ściskają” kąt H–O–H do 104,5°. W CO₂ węgiel ma tylko 2 wiązania i 0 wolnych par — cząsteczka jest liniowa.</p>
<p>W CO₂ węgiel nie ma wolnych par elektronowych, więc odpychanie jest symetryczne → kąt 180°. W SO₂ siarka ma 2 wiązania i 1 wolną parę (AX₂E) → cząsteczka kątowa (~119°).</p>
<p class="mini-note">Most do L013 (VSEPR pełne, hybrydyzacja sp/sp²/sp³).</p>
</div>
<p class="mini-note"><strong>Ograniczenie:</strong> VSEPR opisuje geometrię cząsteczek / lokalnych układów elektronowych. Nie jest modelem całej sieci krystalicznej Na₂O, CaO ani SiO₂. Dla NO₂, który ma niesparowany elektron, standardowy model zamkniętopowłokowy jest tylko przybliżeniem.</p>
''' + str(vs.find(id='vsepr-steps')).replace('każda wiązanie', 'każde wiązanie') + str(vs.find_all(class_='card-understand')[-1])
sec('vsepr', 'Budowa przestrzenna cząsteczek tlenków (VSEPR)', AMB, vsepr)

red = S.find(id='redukcja').find(class_='card-extra')
red_s = str(red).replace('<p class="mini-note">W wielkim piecu tlenek węgla(II)',
   '<p class="mini-note">Zapis z CO₂: 2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂ — oba zapisy są poprawnie zbilansowane; w wysokiej temperaturze, przy nadmiarze węgla, powstaje głównie CO.</p>\n<p class="mini-note">W wielkim piecu tlenek węgla(II)', 1)
redox_card = str(S.find(id='builder').find(class_='card-extra')).replace('Most do X01–X10 (redoks) (redoks).', 'Most do X01–X10 (redoks).')
redoks = '''
<div class="card card-understand">
<span class="card-label">Pojęcia</span>
<p><strong>Redukcja tlenku</strong> = odebranie mu tlenu; stopień utlenienia metalu maleje (np. Cu: +II → 0). Substancja odbierająca tlen to <strong>reduktor</strong> (H₂, C, CO, aktywny metal — np. Al); sama ulega utlenieniu. <strong>Utlenianie</strong> = przyłączenie tlenu lub wzrost stopnia utlenienia.</p>
</div>
''' + red_s + '''
<h3 class="merge-h">Tlenki jako utleniacze i reduktory</h3>
''' + redox_card + '''
<h3 class="merge-h">Termiczny rozkład tlenków</h3>
''' + str(S.find(id='rozklad').find(class_='card-extra')).replace(
   'Dawna metoda otrzymywania tlenu: prażenie HgO (Scheele, Priestley, XVIII w.).',
   'Dawna metoda otrzymywania tlenu: prażenie HgO (Scheele, Priestley, XVIII w.) — [[historia]].')
sec('redukcja', 'Tlenki w reakcjach redoks: redukcja (metalurgia), utlenianie, rozkład', AMB, redoks)

st = S.find(id='stechio')
cards = st.find_all('div', class_='card', recursive=False)
stech = '''
<div class="card card-understand">
<span class="card-label">Przypomnienie z R05–R08 (stechiometria)</span>
<p><strong>n = m / M</strong> · <strong>V = n × 22,4 dm³</strong> (warunki normalne) · stosunek molowy z współczynników równania.</p>
<p class="mini-note">Na E8 obliczenia prowadzi się na masach (stosunek mas z mas cząsteczkowych, prawo zachowania masy), bez moli — tak rozwiązany jest przykład 2.</p>
</div>
''' + ''.join(str(c) for c in cards[1:]) + '''
<div class="card">
<p><strong>Przykład 4 (stechiometria spalania):</strong> Ile CO₂ powstanie ze spalenia 1 kg węgla? Ile tlenu potrzeba? To typowe zadanie egzaminacyjne.</p>
<details class="answer"><summary>Pokaż rozwiązanie</summary>
<p>Równanie: C + O₂ → CO₂ (stosunek 1 : 1 : 1)</p>
<ul>
<li>n(C) = 1000 g / 12 g/mol ≈ 83,3 mol</li>
<li>m(CO₂) = 83,3 mol × 44 g/mol ≈ <strong>3,67 kg</strong></li>
<li>m(O₂) = 83,3 mol × 32 g/mol ≈ <strong>2,67 kg</strong></li>
<li>Kontrola masy: 1 kg + 2,67 kg = 3,67 kg ✓ (bez moli: 12 g C → 44 g CO₂, więc 1000 g → 1000·44/12 g)</li>
</ul>
</details>
</div>
''' + V('stech-kalkulator-v01') + '''
<p class="mini-note">Spalanie paliw (C, CH₄, C₃H₈, C₈H₁₈) liczysz w tym samym kalkulatorze stechiometrycznym (powyżej): wybierz reakcję spalania, wpisz masę paliwa — dostajesz masy CO₂, H₂O i O₂ z kontrolą masy.</p>'''
sec('stechio', 'Stechiometria tlenków i spalania', AMB, stech)

# ---------------------------------------------------------------- PRAKTYKA
dos = '''
<div class="card card-error">
<span class="card-label">BHP — czego nie robić w domu</span>
<p>Równań z tej lekcji <strong>nie traktuj jako instrukcji domowych</strong>. Nie ogrzewaj HgO, nie otrzymuj CO, SO₂ ani NO₂, nie wykonuj termitu i nie pracuj z P₄O₁₀ bez laboratorium i nadzoru nauczyciela.</p>
<p>Reakcja żelaza z parą wodną wymaga wysokiej temperatury, a wydzielający się wodór jest palny.</p>
</div>
<div class="card card-basic">
<span class="card-label">Format stały</span>
<p>Problem → Hipoteza → Sprzęt → Przebieg → <strong>Obserwacja</strong> → <strong>Wniosek</strong> → Równanie → BHP</p>
<p class="mini-note">Obserwacja = to, co rejestrują zmysły; wniosek = interpretacja (nazwa produktu, typ reakcji). Tabela różnic — na końcu sekcji.</p>
</div>
<h3>Doświadczenie 1: Spalanie magnezu</h3>
<div class="card">
<p><strong>Problem:</strong> Czy magnez reaguje z tlenem?</p>
<p><strong>Hipoteza:</strong> Powstanie biały proszek — tlenek magnezu.</p>
<p><strong>Sprzęt:</strong> wstążka magnezowa, szczypce, palnik.</p>
<p><strong>Przebieg:</strong> wstążkę magnezu trzymaną w szczypcach zapal w płomieniu palnika i trzymaj nad płytką ceramiczną.</p>
<p><strong>Obserwacja:</strong> oślepiający biały płomień; biały proszek.</p>
<p><strong>Wniosek:</strong> Magnez spala się w tlenie, tworząc MgO.</p>
<p><strong>Równanie:</strong> <span class="formula" data-rx="mgO2">2 Mg + O₂ → 2 MgO</span></p>
<p><strong>BHP:</strong> nie patrzeć bezpośrednio na płomień; okulary.</p>
<button class="che-prac-go" data-k="mgO2" data-prac="n01-spalanie-v01" type="button">Zobacz w modelu spalania (GFX)</button></div>
<h3>Doświadczenie 2: CaO + H₂O (gaszenie wapna)</h3>
<div class="card">
<p><strong>Problem:</strong> Czy CaO reaguje z wodą?</p>
<p><strong>Hipoteza:</strong> Powstanie Ca(OH)₂; roztwór zasadowy.</p>
<p><strong>Sprzęt:</strong> CaO, woda, papierek uniwersalny, fenoloftaleina.</p>
<p><strong>Przebieg:</strong> do parownicy z kilkoma grudkami CaO wkraplaj wodę; po reakcji dolej wody, wymieszaj, zbadaj papierkiem uniwersalnym i fenoloftaleiną.</p>
<p><strong>Obserwacja:</strong> silne rozgrzanie, syczenie; papierek niebieski; fenoloftaleina malinowa.</p>
<p><strong>Wniosek:</strong> CaO reaguje z wodą; powstaje Ca(OH)₂.</p>
<p><strong>Równanie:</strong> <span class="formula" data-rx="caoH2o">CaO + H₂O → Ca(OH)₂</span></p>
<p><strong>BHP:</strong> nie dotykać CaO mokrymi rękami; okulary; reakcja egzotermiczna.</p>
<button class="che-prac-go" data-k="caoH2o" data-prac="n01-doswiadczenia-v01" type="button">Zobacz w zlewce (pracownia GFX)</button></div>
<h3>Doświadczenie 3: Woda wapienna + CO₂</h3>
<div class="card">
<p><strong>Problem:</strong> Jak wykryć CO₂?</p>
<p><strong>Hipoteza:</strong> CO₂ mętni wodę wapienną.</p>
<p><strong>Sprzęt:</strong> woda wapienna Ca(OH)₂, rurka, probówka.</p>
<p><strong>Przebieg:</strong> przez rurkę wprowadzaj badany gaz (np. wydychane powietrze albo gaz z reakcji węglanu z kwasem) do probówki z klarowną wodą wapienną.</p>
<p><strong>Obserwacja:</strong> mętnienie wody wapiennej (biały osad).</p>
<p><strong>Wniosek:</strong> CO₂ reaguje z Ca(OH)₂ → CaCO₃.</p>
<p><strong>Równanie:</strong> <span class="formula" data-rx="caoh2Co2">CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O</span>. Osad CaCO₃ jest biały i praktycznie nierozpuszczalny w wodzie. Przy <strong>dużym nadmiarze CO₂</strong> osad może zniknąć: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (roztwór klarowny).</p>
<p><strong>BHP:</strong> nie wciągać wody wapiennej do ust.</p>
<button class="che-prac-go" data-k="caoh2Co2" data-prac="n01-doswiadczenia-v01" type="button">Zobacz w zlewce (pracownia GFX)</button></div>
<h3>Doświadczenie 4: CuO + H₂SO₄ <span class="level-badge level-basic">E8</span></h3>
<div class="card">
<p><strong>Problem:</strong> Czy CuO reaguje z kwasem?</p>
<p><strong>Hipoteza:</strong> Powstanie niebieski roztwór CuSO₄.</p>
<p><strong>Sprzęt:</strong> CuO (czarny), H₂SO₄ (rozcieńczony), probówka.</p>
<p><strong>Przebieg:</strong> do probówki z odrobiną czarnego CuO dodaj rozcieńczony H₂SO₄ i lekko ogrzej (uchwyt, wylot probówki skierowany od siebie i od innych).</p>
<p><strong>Obserwacja:</strong> czarny CuO znika; powstaje niebieski roztwór.</p>
<p><strong>Wniosek:</strong> CuO (tlenek zasadowy) reaguje z kwasem; powstaje sól — siarczan(VI) miedzi(II) — i woda; niebieską barwę nadają jony Cu²⁺.</p>
<p><strong>Równanie:</strong> <span class="formula" data-rx="cuoH2so4">CuO + H₂SO₄ → CuSO₄ + H₂O</span></p>
<p><strong>BHP:</strong> okulary; H₂SO₄ żrący.</p>
<button class="che-prac-go" data-k="cuoH2so4" data-prac="n01-doswiadczenia-v01" type="button">Zobacz w zlewce (pracownia GFX)</button></div>
''' + V('n01-doswiadczenia-v01') + V('gfx-scene-carbonate') + '''
<h3>Obserwacja ≠ wniosek</h3>
''' + str(S.find(id='doswiadczenia').find_all('div', class_='card-error')[-1])
sec('doswiadczenia', 'Doświadczenia modelowe', E8, dos)

kl = S.find(id='klinika').find('table')
new_rows = '''
<tr class="error-row"><td class="col-blad" data-label="Błąd">CO — tlenek kwasowy jak CO₂</td><td class="col-ok" data-label="Poprawnie">obojętny (szkolnie)</td><td data-label="Dlaczego">Nie tworzy kwasu z wodą ani soli z zasadą w warunkach szkolnych.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">SiO₂ + H₂O → H₂SiO₃ (jak SO₃)</td><td class="col-ok" data-label="Poprawnie">SiO₂ z wodą praktycznie nie reaguje</td><td data-label="Dlaczego">Sieć kowalencyjna; reaguje z mocną zasadą po ogrzaniu.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">CO₂ + NaOH zawsze → Na₂CO₃</td><td class="col-ok" data-label="Poprawnie">przy nadmiarze CO₂ → NaHCO₃</td><td data-label="Dlaczego">Produkt zależy od stosunku molowego substratów.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">P₂O₅ i P₄O₁₀ to różne substancje</td><td class="col-ok" data-label="Poprawnie">ta sama substancja</td><td data-label="Dlaczego">Wzór empiryczny vs wzór cząsteczkowy.</td></tr>
<tr class="error-row"><td class="col-blad" data-label="Błąd">Obserwacja: „powstał CaCO₃”</td><td class="col-ok" data-label="Poprawnie">Obserwacja: woda wapienna mętnieje</td><td data-label="Dlaczego">Nazwa produktu to wniosek, nie obserwacja.</td></tr>
'''
kl_s = str(kl).replace('</tbody>', new_rows + '</tbody>')
sec('klinika', 'Klinika błędów', '', '<div class="table-wrap">\n' + kl_s + '\n</div>')

sec('cwiczenia', 'Ćwiczenia', '', inner('cwiczenia').replace('>ZAawansowane<', '>ZAAWANSOWANE<'))

typ = '''
<p>Wzorce zadań z arkuszy egzaminacyjnych. Każdy typ z przykładem i rozwiązaniem (przykłady inne niż w ćwiczeniach i teście).</p>
<div class="card card-exam">
<h5>Typ 1: Ułóż wzór tlenku na podstawie nazwy</h5>
<p><strong>Przykład:</strong> Ułóż wzór tlenku chromu(III).</p>
<details class="answer"><summary>Rozwiązanie</summary><p>Cr(III) + O(II) → W–K–S–K → Cr₂O₃ (kontrola: 2·(+3) + 3·(−2) = 0).</p></details>
</div>
<div class="card card-exam">
<h5>Typ 2: Nazwij tlenek na podstawie wzoru</h5>
<p><strong>Przykład:</strong> Podaj nazwę PbO₂.</p>
<details class="answer"><summary>Rozwiązanie</summary><p>Ołów ma wartościowość IV (1·x = 2·2 → x = 4) → tlenek ołowiu(IV).</p></details>
</div>
<div class="card card-exam">
<h5>Typ 3: Określ charakter tlenku</h5>
<p><strong>Przykład:</strong> Określ charakter: K₂O, N₂O₅, NO, ZnO.</p>
<details class="answer"><summary>Rozwiązanie</summary><p>K₂O — zasadowy; N₂O₅ — kwasowy; NO — obojętny; ZnO — amfoteryczny.</p></details>
</div>
<div class="card card-exam">
<h5>Typ 4: Napisz równanie reakcji</h5>
<p><strong>Przykład:</strong> Napisz równanie reakcji tlenku baru z wodą.</p>
<details class="answer"><summary>Rozwiązanie</summary><p>BaO + H₂O → Ba(OH)₂.</p></details>
</div>
<div class="card card-exam">
<h5>Typ 5: Dokończ równanie</h5>
<p><strong>Przykład:</strong> SO₂ + 2 KOH → ?</p>
<details class="answer"><summary>Rozwiązanie</summary><p>K₂SO₃ + H₂O (siarczan(IV) potasu i woda; nadmiar zasady).</p></details>
</div>
<div class="card card-exam">
<h5>Typ 6: Wskaż obserwację i wniosek</h5>
<p><strong>Przykład:</strong> Podczas doświadczenia woda wapienna zmętniała. Podaj obserwację i wniosek.</p>
<details class="answer"><summary>Rozwiązanie</summary><p><strong>Obserwacja:</strong> woda wapienna zmętniała, powstał biały osad. <strong>Wniosek:</strong> obecny CO₂ — powstał CaCO₃.</p></details>
</div>
<div class="card card-exam">
<h5>Typ 7: Zaprojektuj doświadczenie</h5>
<p><strong>Przykład:</strong> Zaprojektuj doświadczenie wykrywające CO₂.</p>
<details class="answer"><summary>Rozwiązanie</summary>
<p>Problem → Hipoteza → Sprzęt (woda wapienna, rurka) → Przebieg → Obserwacja (mętnienie) → Wniosek → Równanie → BHP.</p>
</details>
</div>
<div class="card card-exam">
<h5>Typ 8: Wyjaśnij związek między budową a właściwościami <span class="level-badge level-extra">AMBITNE</span></h5>
<p><strong>Przykład:</strong> Wyjaśnij, dlaczego tlenek sodu tworzy z wodą zasadę, a tlenek siarki(VI) — kwas.</p>
<details class="answer"><summary>Rozwiązanie</summary><p>Na₂O jest związkiem jonowym: jon O²⁻ reaguje z wodą (O²⁻ + H₂O → 2 OH⁻) → NaOH. SO₃ jest związkiem kowalencyjnym: przyłącza cząsteczkę wody, tworząc kwas tlenowy H₂SO₄, który w wodzie oddaje jony H⁺.</p></details>
</div>
<div class="card card-exam">
<h5>Typ 9: Wskaż zastosowanie tlenku</h5>
<p><strong>Przykład:</strong> Podaj dwa zastosowania tlenku wapnia.</p>
<details class="answer"><summary>Rozwiązanie</summary><p>Cement, budownictwo, wapno palone do gaszenia, produkcja zaprawy.</p></details>
</div>'''
sec('typologia-e8', 'Typologia zadań E8', EXAM('EGZAMIN'), typ)

test = inner('test').replace('<li>Popraw: FeO₃; „tlenek żelaza”; Ca₂O₂.</li>', '<li>Popraw: AlO; SO₂ + H₂O → H₂SO₄; „tlenek ołowiu” dla PbO₂.</li>').replace(
    '<li>Fe₂O₃; tlenek żelaza(II) lub (III); CaO.</li>', '<li>Al₂O₃; SO₂ + H₂O → H₂SO₃ (siarka(IV) daje kwas siarkowy(IV)); tlenek ołowiu(IV).</li>')
assert 'AlO;' in test and 'tlenek ołowiu(IV)' in test
sec('test', 'Sprawdź się: test, test adaptacyjny, quiz', '', test)

# ---------------------------------------------------------------- POWTÓRKA
karta = '''
<p>Jednostronicowa ściąga. Wciśnij <strong>Ctrl+P</strong> (drukuj) — karta jest zoptymalizowana do wydruku.</p>
<div class="print-card">
<h4>Tlenki — ściąga E8</h4>
<div class="pc-grid">
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
</div>
</div>'''
sec('karta', 'Karta szybkiego powtórzenia', EXAM('DO WYDRUKU'), karta)

g = S.find(id='flashGrid'); gs = str(g); idx = gs.rindex('</div>')
fl = gs[:idx] + '''<button class="flashcard" type="button"><span class="front">Charakter tlenku ≠ ?</span><span class="back"><strong>≠ reakcja z wodą ≠ rozpuszczalność (np. CuO)</strong></span><span class="card-tag tag-basic">podstawa</span></button>
<button class="flashcard" type="button"><span class="front">SiO₂ + H₂O?</span><span class="back"><strong>praktycznie nie (sieć kowalencyjna); z NaOH po ogrzaniu tak</strong></span><span class="card-tag tag-error">pułapka</span></button>
<button class="flashcard" type="button"><span class="front">CO₂ + NaOH (nadmiar CO₂) →</span><span class="back"><strong>NaHCO₃</strong></span><span class="card-tag tag-extra">ambitny</span></button>
<button class="flashcard" type="button"><span class="front">KO₂ w aparatach tlenowych</span><span class="back"><strong>4 KO₂ + 2 CO₂ → 2 K₂CO₃ + 3 O₂</strong></span><span class="card-tag tag-extra">zaawansowane</span></button>
''' + gs[idx:]
sec('fiszki', 'Fiszki', '', fl)

mapa = '''
<div class="card map-card">
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
</div>'''
sec('mapa', 'Mapa myśli', '', mapa)

sl = X('#slownik dl')
sl = sl.replace('</dl>', '''<div class="def-item"><dt>Charakter chemiczny tlenku</dt><dd>Typowe zachowanie kwasowo-zasadowe tlenku (zasadowy, kwasowy, obojętny, amfoteryczny) — to nie to samo co reakcja z wodą ani rozpuszczalność.</dd></div>
<div class="def-item"><dt>Ponadtlenek</dt><dd>Związek z anionem O₂⁻; tlen na −½ (KO₂).</dd></div>
<div class="def-item"><dt>Wzór empiryczny</dt><dd>Najprostszy stosunek liczby atomów w związku (P₂O₅); wzór cząsteczkowy podaje rzeczywisty skład cząsteczki (P₄O₁₀).</dd></div>
<div class="def-item"><dt>Redukcja tlenku</dt><dd>Odebranie tlenu tlenkowi (np. przez H₂, C, CO) — stopień utlenienia metalu maleje.</dd></div>
<div class="def-item"><dt>Korozja</dt><dd>Niszczenie metalu w wyniku reakcji chemicznych z otoczeniem (np. rdzewienie żelaza).</dd></div>
<div class="def-item"><dt>Pasywacja</dt><dd>Powstanie szczelnej warstwy tlenku chroniącej metal przed dalszą korozją (Al₂O₃ na aluminium).</dd></div>
</dl>''')
sec('slownik', 'Słownik', '', '<div class="card">\n' + sl + '\n</div>')

chk = X('#checklista .checklist').replace('<li>Wykryć CO₂ wodą wapienną.</li>', '<li>Wykryć CO₂ wodą wapienną.</li>\n<li>Odróżnić charakter tlenku od reakcji z wodą i rozpuszczalności (CuO, SiO₂, MgO).</li>\n<li>Wskazać zagrożenia (CO, CaO, SO₂) i wpływ tlenków na środowisko.</li>')
sec('checklista', 'Checklista', '', chk)

# ---------------------------------------------------------------- DODATKI
org = S.find(id='organizmy').find(class_='card-extra')
for h in org.find_all('h3'):
    if h.get_text().startswith('CO —'):
        ul = h.find_next_sibling('ul'); ul.decompose()
        h.insert_after(BeautifulSoup('<p>Trucizna wiążąca hemoglobinę — źródła, objawy, profilaktyka i pierwsza pomoc w [[bezpieczenstwo]].</p>', 'html.parser'))
    if h.get_text().startswith('N₂O'):
        ul = h.find_next_sibling('ul')
        for li in ul.find_all('li'):
            if 'gaz cieplarniany' in li.get_text():
                li.string = 'Silny gaz cieplarniany — [[bezpieczenstwo]].'
sec('organizmy', 'Dodatek A — tlenki w organizmach', AMB, str(org), num='A')

kor = '''
<div class="card card-extra">
<h3>Korozja żelaza <span class="level-badge level-basic">E8</span></h3>
<p><strong>Korozja</strong> — niszczenie metalu w wyniku reakcji chemicznych z otoczeniem.</p>
<p><strong>Rdza (przybliżenie):</strong></p>
<div class="formula-lg">4 Fe + 3 O₂ + n H₂O → 2 Fe₂O₃·nH₂O</div>
<p class="mini-note"><strong>Ograniczenie modelu:</strong> rdza nie ma jednego, ściśle określonego wzoru; powyższy zapis jest jedynie przybliżeniem jednego z możliwych składników produktów korozji.</p>
<p class="mini-note">Rdza <strong>nie jest czystym Fe₂O₃</strong> — mieszanina uwodnionych tlenków i wodorotlenków żelaza.</p>
<p><strong>Czynniki przyspieszające korozję:</strong> wilgoć, tlen, sole (np. sól drogowa), kwasy.</p>
<p class="mini-note">Rdza jest porowata i odpada płatami, więc nie chroni żelaza — korozja postępuje w głąb metalu.</p>
<h3>Pasywacja</h3>
<p><strong>Pasywacja</strong> — tworzenie się szczelnej warstwy tlenku chroniącej metal przed dalszą korozją. Cienka, szczelna warstwa tlenku chroni metal:</p>
<ul>
<li>Al₂O₃ na powierzchni aluminium,</li>
<li>na cynku: mieszanina produktów korozji, m.in. ZnO, Zn(OH)₂ i zasadowych węglanów cynku — nie sam „czysty ZnO”,</li>
<li>patyna na miedzi (Cu₂(OH)₂CO₃).</li>
</ul>
<p><strong>Metale pasywujące się:</strong> Al, Zn, Cr, Ti.</p>
<h3>Ochrona przed korozją</h3>
<ul>
<li>powłoki malarskie,</li>
<li>powłoki metaliczne (cynkowanie, chromowanie),</li>
<li>inhibitory korozji,</li>
<li>ochrona katodowa.</li>
</ul>
</div>'''
sec('dod-f', 'Dodatek B — korozja i pasywacja', AMB, kor, num='B')

hist = inner('historia').replace(
 '<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1772 — Carl Wilhelm Scheele</strong><br/>Otrzymuje tlen („ogień powietrzny”) przez prażenie HgO.</div>',
 '<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1772 — Carl Wilhelm Scheele</strong><br/>Otrzymuje tlen („ogień powietrzny”) przez prażenie HgO (oraz m.in. KNO₃ i MnO₂ z kwasem siarkowym).</div>').replace(
 '<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1811 — Amedeo Avogadro</strong>',
 '<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1787 — Guyton de Morveau, Lavoisier i współpracownicy</strong><br/>Systematyczne nazewnictwo chemiczne — wprowadzenie nazwy „tlenek” (fr. <em>oxyde</em>) dla związków pierwiastków z tlenem.</div>\n<div style="border-left:3px solid var(--accent);padding-left:14px;"><strong>1811 — Amedeo Avogadro</strong>').replace(
 'Nowoczesne nazewnictwo chemiczne (tlenki metali/niemetali).', 'Nowoczesne symbole pierwiastków i zapis wzorów (także tlenków metali i niemetali).')
assert '1787' in hist and 'symbole pierwiastków' in hist
sec('historia', 'Dodatek C — historia odkrycia tlenków', AMB, hist, num='C')

sec('dod-i', 'Dodatek D — tlenki w technologii XXI w.', AMB, inner('dod-i'), num='D')

mosty = '''
<div class="card card-understand">
<p class="mini-note">Wiadomości wcześniejsze (F01–F09) — [[kompas]].</p>
<h3>N02 — wodorotlenki</h3>
<ul>
<li>CaO + H₂O → Ca(OH)₂.</li>
<li>Tlenki zasadowe + H₂O → wodorotlenki.</li>
<li>Amfoteryczne wodorotlenki Al(OH)₃, Zn(OH)₂ — jak Al₂O₃ i ZnO.</li>
</ul>
<h3>N03 — kwasy</h3>
<ul>
<li>SO₃ + H₂O → H₂SO₄.</li>
<li>Tlenki kwasowe + H₂O → kwasy.</li>
<li>Zobojętnianie kwasu zasadą (H⁺ + OH⁻ → H₂O).</li>
</ul>
<h3>N04 — sole</h3>
<ul>
<li>Tlenek + kwas → sól + woda.</li>
<li>Tlenek + zasada → sól + woda.</li>
<li>Tlenek zasadowy + tlenek kwasowy → sól.</li>
</ul>
<h3>R05–R08 — stechiometria</h3>
<ul>
<li>Obliczenia z równań reakcji tlenków ([[stechio]]).</li>
</ul>
<h3>X01–X10 — redoks</h3>
<ul>
<li>Utlenianie tlenków (2 SO₂ + O₂ → 2 SO₃).</li>
<li>Redukcja tlenków (CuO + H₂ → Cu + H₂O).</li>
<li>Stopnie utlenienia w tlenkach ([[builder]]); redoks z udziałem tlenków ([[redukcja]]).</li>
</ul>
<h3>L013 — zaawansowana</h3>
<ul>
<li>VSEPR pełne, hybrydyzacja sp/sp²/sp³.</li>
</ul>
<p class="mini-note">Lekcje N03 Kwasy i N04 Sole są w panelu Lekcje → Chemia.</p>
</div>'''
sec('dod-h', 'Dodatek E — mosty do kolejnych lekcji', '', mosty, num='E')

# ---------------------------------------------------------------- KONIEC
VIZ = [('charakter', 'n01-tlenki-v01', 'trzy pytania o tlenek, zlewka ze wskaźnikiem'), ('charakter', 'periodic-54', 'pierwiastek → tlenek → charakter'),
       ('builder', 'n01-konstruktor-v01', 'W–K–S–K, stopnie utlenienia, sprawdzanie wzoru'), ('otrzymywanie', 'n01-spalanie-v01', 'spalanie całkowite i niecałkowite'),
       ('reakcje', 'n01-reaktor-v01', 'przewidywanie produktów'), ('reakcje', 'chain-scn', 'łańcuchy przemian'), ('trend', 'n01-trend-v01', 'trend charakteru (okres, stopień utlenienia)'),
       ('vsepr', 'molecule3d-merged', 'geometria cząsteczek (VSEPR)'), ('stechio', 'stech-kalkulator-v01', 'obliczenia stechiometryczne'),
       ('doswiadczenia', 'n01-doswiadczenia-v01', 'pracownia doświadczeń'), ('doswiadczenia', 'gfx-scene-carbonate', 'wykrywanie CO₂')]
wiz_old = S.find(id='wiz-reg-l002')
wiz_note = str(wiz_old.find('p', class_='mini-note'))
wiz = '<div class="table-wrap"><table><thead><tr><th>Sekcja</th><th>Model</th><th>Co pokazuje</th></tr></thead><tbody>' + ''.join(
    '<tr><td>[[%s]]</td><td><code>%s</code></td><td>%s</td></tr>' % v for v in VIZ) + '</tbody></table></div>' + wiz_note
sec('wiz-reg-l002', 'Modele silnika w tej lekcji', '', wiz, num='↻')

aud = inner('audyt').replace('KONTROLA</span>', 'KONTROLA</span>')
aud = aud.replace('<li>Korekta MASTER v5.9 włączona jako §4c (po modelu decyzyjnym).</li>',
  '<li>Korekta MASTER v5.9 włączona jako §4c (po modelu decyzyjnym).</li><li>v6.2 (2026-10-07) — redakcja wg STANDARD_LEKCJI: kolejność rdzeń → rozumienie/ambitne → praktyka → powtórka → dodatki; scalone powtórzenia (trzy pytania, tabele charakteru i wody, MgO/SiO₂, CO/CO₂, BHP/czad, smog, kwaśne deszcze, korozja, nadtlenki, P₄O₁₀, amfoteryczność, obserwacja/wniosek, karty powtórzeniowe); zastosowania przeniesione do rdzenia; uzupełnienia (stan skupienia, trend w grupie i wg stopnia utlenienia, przebieg doświadczeń, ograniczanie emisji, przykład stechiometrii spalania); poprawki (odwołania §, poziom doświadczenia 4, Berzelius/1787).</li>')
assert 'v6.2' in aud
SECS.append(('audyt', '✓', 'Audyt jakości', ' <span class="level-badge level-exam">KONTROLA</span>', aud.replace('<span class="level-badge level-new">KONTROLA</span>', '')))
# audyt: heading badge provided separately; ensure no leftover
footer = X('footer.footer').replace('CHEMIA N01 v6.0 MASTER LAB', 'CHEMIA N01 v6.2 MASTER LAB')

# ---------------------------------------------------------------- NUMERACJA, SPIS, ODNOŚNIKI
num = {}; n = 0
for sid, nn, t, bd, body in SECS:
    if nn is None: n += 1; num[sid] = str(n)
    else: num[sid] = nn
def refs(h, cur=None):
    if cur: h = h.replace('[[#]]', num[cur])
    def r(m):
        i = m.group(1); assert i in num, i
        return '<a href="#%s">§%s</a>' % (i, num[i])
    return re.sub(r'\[\[([\w-]+)\]\]', r, h)
parts = []
for sid, nn, t, bd, body in SECS:
    parts.append('<section id="%s">\n<div class="part-heading"><span class="part-num">%s</span> %s%s</div>\n%s\n</section>' % (sid, num[sid], t, bd, refs(body.strip('\n'), sid)))
toc = '<details class="toc-item" open><summary class="toc-summary">Spis treści</summary><nav class="toc-links"><a class="toc-link" href="#minimum">Minimum E8</a>' + ''.join(
    '<a class="toc-link" href="#%s">%s. %s</a>' % (sid, num[sid], re.sub(r'<[^>]+>', '', t)) for sid, nn, t, bd, body in SECS) + '</nav></details>'
main = '<main class="page" id="main">\n' + hero + '\n' + minimum + toc + '\n\n' + legend + '\n' + refs(rdzen) + '\n' + '\n'.join(parts) + '\n' + footer + '\n'
out = head + main + tail
open(OUT, 'w', encoding='utf-8').write(out)
print('sekcje:', ' · '.join('%s %s' % (num[s], re.sub(r'<[^>]+>', '', t)) for s, nn, t, bd, body in SECS))
