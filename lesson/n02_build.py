# -*- coding: utf-8 -*-
"""N02 Wodorotlenki i zasady v8.1 — przebudowa lekcji źródłowej (sources/chemia/CHE.N02.v08.05.html) do standardu CHE.
Zasady: treść zostaje (poprawiona), widgety wbudowane → widoki silnika (n02-*, CHE.HYDROXIDES), dwa bloki korekt v8.03/v8.04 włączone jako §5A,
notatki techniczne (rejestry zasobów, dane stałe) usunięte, równania oznaczone data-rx (klucze D.REACTIONS), tabela rozpuszczalności — data-hy (audyt LES-N02-*).
Wejście: test/rx_norm.json (mapa równań silnika, odświeżana testem dump). Wyjście: lesson/n02_new.html."""
import os, re
import n02_merge, json, html as HT
D = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(D)
src = open(os.path.join(ROOT, 'sources', 'chemia', 'CHE.N02.v08.05.html'), encoding='utf-8').read()
kw = open(os.path.join(D, 'kw_new.html'), encoding='utf-8').read()
VIZ_CSS = re.search(r'<style id="che-lesson-viz-ref-style">.*?</style>', kw, re.S).group(0)
V15_CSS = re.search(r'<style id="kw-v15-style">.*?</style>', kw, re.S).group(0)
ADV_JS = re.search(r'<script>\(function\(\)\{var b=document\.getElementById\("advToggle"\).*?</script>', kw, re.S).group(0)
RXN = json.load(open(os.path.join(ROOT, 'test', 'rx_norm.json'), encoding='utf-8'))
ENG = open(os.path.join(ROOT, 'src', 'hydroxides.js'), encoding='utf-8').read()
LOG = []

def viz(vid, title, sub='Model silnika CHE · otwiera się w oknie'):
    return ('<div class="che-lesson-viz-ref" data-che-lesson-viz="%s"><button type="button" data-che-open-viz="%s" '
            'onclick="parent.postMessage({type:\'CHE_LESSON_OPEN_VISUAL\',visualId:\'%s\',lessonId:\'N02\'},\'*\')"><b>%s</b><span>%s</span></button></div>\n') % (vid, vid, vid, title, sub)
def adv(title, body):
    return '<details class="adv"><summary>%s <span class="adv-tag">poziom LO / akademicki</span></summary><div class="adv-body">%s</div></details>\n' % (title, body)
def note(t): return '<p class="mini-note">%s</p>\n' % t
def card(cls, label, body): return '<div class="card %s"><span class="card-label">%s</span>%s</div>\n' % (cls, label, body)
def end_of(s, i):
    """koniec zbalansowanego elementu zaczynającego się w s[i] ('<tag ...')"""
    tag = re.match(r'<(\w+)', s[i:]).group(1); depth = 0
    for m in re.finditer(r'<(/?)%s\b[^>]*?(/?)>' % tag, s[i:]):
        if m.group(2): continue
        depth += -1 if m.group(1) else 1
        if depth == 0: return i + m.end()
    raise ValueError('niezbalansowany ' + tag)
def start_of_attr(s, attr):
    k = s.index(attr); return s.rindex('<', 0, k)
def cut(s, attr, new, label):
    assert s.count(attr) == 1, ('brak/dubel', attr, s.count(attr))
    i = start_of_attr(s, attr); j = end_of(s, i); LOG.append(label); return s[:i] + new + s[j:]
def rep(s, old, new, label, n=1):
    if s.count(old) == 0:  # tolerancja na łamanie wierszy / wcięcia w źródle
        rx = re.compile(r'\s+'.join(re.escape(x) for x in old.split()))
        hits = rx.findall(s); assert len(hits) == n, (label, len(hits)); LOG.append(label); return rx.sub(lambda m: new, s)
    assert s.count(old) == n, (label, s.count(old)); LOG.append(label); return s.replace(old, new)
def element_by_text(s, text, tag='div'):
    k = s.index(text); i = s.rindex('<' + tag, 0, k)
    while end_of(s, i) < k: i = s.rindex('<' + tag, 0, i)
    return i, end_of(s, i)

body = src[src.index('<body'):]
m0 = body.index('<main class="container">'); m1 = body.index('</main>', m0)
h = body[m0 + len('<main class="container">'):m1]
def section_inner(sid):
    i = body.index('<section id="%s"' % sid) if ('<section id="%s"' % sid) in body else start_of_attr(body, 'id="%s"' % sid)
    j = end_of(body, i); s = body[i:j]; return s[s.index('>') + 1:s.rindex('</section>')]
v803 = section_inner('n02-correction-v803'); v804 = section_inner('n02-correction-v804')

# ---------- 0. historia: animowany timeline → statyczne karty (ilustracje z oryginału) ----------
scr = re.findall(r'<script>(.*?)</script>', src, re.S)
tl = [x for x in scr if 'const scenes=[' in x and 'year:' in x][0]
SC = re.findall(r"year:'([^']+)',who:'([^']+)',\s*svg:`(.*?)`,\s*desc:'([^']+)'", tl, re.S)
assert len(SC) == 5
HIST = '<div class="hist-grid">' + ''.join('<figure class="hist-card"><div class="hist-year">%s</div><div class="hist-who">%s</div><div class="hist-ill">%s</div><figcaption>%s</figcaption></figure>' % (y, w, svg.strip(), d) for y, w, svg, d in SC) + '</div>\n'
h = cut(h, 'id="timelineAnim"', HIST, 'historia: timeline → 5 kart statycznych')
h = rep(h, 'Przewijaj animowaną historię.', 'Pięć momentów, które doprowadziły do dzisiejszej definicji.', 'historia: opis')

# ---------- 5. ściąga ----------
h = cut(h, 'id="ionAssembly"', note('Jak dobrać liczbę grup OH⁻ do kationu — interaktywny model z bilansem ładunków jest w <a href="#wzorometr">§6.3</a>.'), 'ionAssembly → odnośnik do n02-wzory')
h = cut(h, 'id="eqPlayer"', '<h4 style="margin:14px 0 6px">Równanie krok po kroku — CaO + H₂O</h4><div class="equation-box">CaO + H₂O → Ca(OH)₂</div>' + note('Bilans atomów: Ca 1 = 1 · O 1 + 1 = 2 · H 2 = 2 ✓. Most N01 → N02: tlenek zasadowy + woda = wodorotlenek (gdy tlenek z wodą reaguje).'), 'eqPlayer → równanie statyczne')
h = rep(h, ' Kliknij, by zobaczyć schemat.</p>', '</p>', 'hygro: bez przycisku')
i = start_of_attr(h, 'id="hygroPlay"'); h = h[:i] + h[end_of(h, i):]
h = cut(h, 'id="precipLab"', '<div class="equation-box">CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄</div>' + note('niebieski, galaretowaty osad — praktycznie nierozpuszczalny') + '<div class="equation-box">FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl</div>' + note('rdzawobrunatny osad — w roztworze nad osadem prawie nie ma OH⁻, więc odczyn nie jest „jak po NaOH”. Animacja cząsteczkowa: <a href="#ion-lab">§6.7</a>.'), 'precipLab → równania + odnośnik')
i, j = element_by_text(h, 'SYNC z Konstruktorem'); h = h[:i] + viz('tabela-rozpuszczalnosci-v01', 'Tabela rozpuszczalności (20 °C) — kolumna OH⁻ i wszystkie sole', 'To samo źródło danych co ta lekcja · CHE.DATA.SOLUBILITY_TABLE') + h[j:]; LOG.append('SYNC Konstruktor → tabela rozpuszczalności z silnika')
i, j = element_by_text(h, 'Sprawdź w Konstruktorze', 'p'); h = h[:i] + h[j:]; LOG.append('link do zewn. konstruktora usunięty')
h = rep(h, '<b>Mnemotechnika:</b> „<span class="hl">O</span>d <span class="hl">H</span>ydratacji" — OH to jeden klocek o ładunku −1. Nie rozbijaj go na O i H w zadaniach.',
        '<b>Mnemotechnika:</b> „<span class="hl">OH⁻ — jeden klocek, minus jeden</span>”. Nie rozbijaj grupy na O i H w zadaniach.', 'mnemotechnika OH⁻ (zamiast mylącej „Od Hydratacji”)')
h = rep(h, 'Wodorotlenki metali generalnie nie tworzą typowych hydratów o ustalonym składzie stechiometrycznym, dla wodorotlenków na poziomie E8 nie wprowadzamy osobnej klasy typowych hydratów o ustalonym wzorze.',
        'Niektóre wodorotlenki tworzą hydraty (np. <span class="formula">Ba(OH)₂·8H₂O</span> — dlatego tablice podają jego rozpuszczalność dla hydratu), ale na E8 nie wymaga się ich wzorów.', 'hydraty: korekta (Ba(OH)₂·8H₂O istnieje)')
# 5.9 tabela → data-hy (audyt LES-N02-01)
SOLW = {'NaOH': 'R', 'KOH': 'R', 'Ba(OH)₂': 'R', 'Ca(OH)₂': 'T', 'Mg(OH)₂': 'N', 'Cu(OH)₂': 'N', 'Fe(OH)₃': 'N', 'Al(OH)₃, Zn(OH)₂': 'N'}
def plain(f): return f.translate(str.maketrans('₀₁₂₃₄₅₆₇₈₉', '0123456789'))
for f, sv in SOLW.items():
    old = '<td>%s</td>' % f; k = h.index(old); tr = h.rindex('<tr', 0, k)
    fs = ','.join(plain(x.strip()) for x in f.split(','))
    h = h[:tr] + '<tr data-hy="%s" data-hy-sol="%s"' % (fs, sv) + h[tr + 3:]
LOG.append('tabela 5.9: data-hy (%d wierszy)' % len(SOLW))
h = rep(h, 'Mg(OH)₂</td><td><strong>trudno</strong>', 'Mg(OH)₂</td><td><strong>praktycznie nierozp.</strong> (szkolnie: „trudno”)', 'Mg(OH)₂: zgodnie z tabelą rozpuszczalności (N)')

# ---------- 6. wyjaśnienie: widgety → widoki silnika ----------
h = cut(h, 'id="wzorometrEl"', viz('n02-wzory-v01', 'Wzór wodorotlenku: kation + OH⁻ — bilans ładunków, nawias, modele A/B/jony, sprawdzanie wzoru', 'Zastępuje Wzórometr, Bilansator, Konstruktor i animację nawiasu · CHE.HYDROXIDES.build / check'), 'Wzórometr → n02-wzory-v01')
h = cut(h, 'id="balansatorEl"', note('Bilans ładunków jest częścią modelu z §6.3: pasek „+” (kation) i „−” (grupy OH⁻), suma ładunków i przycisk „dobierz automatycznie”.'), 'Bilansator → część n02-wzory')
h = cut(h, 'id="builderEl"', note('Konstruktor = ten sam model z §6.3: pole „Sprawdź swój wzór” rozpoznaje brak nawiasu (CaOH₂), zbędny nawias (Na(OH)) i złą liczbę grup OH⁻.'), 'Konstruktor → część n02-wzory')
h = cut(h, 'id="lab-bridge-builder"', viz('rownania-jonowe-v01', 'Równania jonowe — wszystkie reakcje z silnika (strącanie OH⁻, zobojętnianie)', 'Zapis cząsteczkowy, jonowy pełny i skrócony · CHE.IONIC'), 'most do zewn. konstruktora → równania jonowe z silnika')
h = cut(h, 'id="metodaWidgetEl"', viz('n02-otrzymywanie-v01', 'Otrzymywanie wodorotlenków — trzy metody, „Jak otrzymać…?” i mapa przemian', 'Zlewka GFX.rx · reguły CHE.HYDROXIDES.obtain (kiedy metoda działa, a kiedy nie)'), 'metody → n02-otrzymywanie-v01')
i, j = element_by_text(h, 'Baza techniczna:', 'p'); h = h[:i] + h[j:]; LOG.append('notatka techniczna usunięta')
i, j = element_by_text(h, 'Uwaga: etapy pośrednie'); blk = h[i:j]; h = h[:i] + adv('Etapy pośrednie strącania — hydroksokompleksy', blk) + h[j:]; LOG.append('etapy pośrednie → adv')
h = cut(h, 'id="ionLab"', viz('n02-stracanie-v01', 'Laboratorium jonowe — strącanie 13 wodorotlenków (model cząsteczkowy)', 'CHE.sim.ParticleSim · barwy osadów CHE.COLORS · równania jonowe CHE.IONIC'), 'ionLab → n02-stracanie-v01')
h = cut(h, 'id="bracketAnimEl"', note('Cztery kroki „CaOH₂ → Ca(OH)₂” (błędny zapis → co jest nie tak → poprawa → co to znaczy) pokazuje model z §6.3 w części „Dlaczego nawias?” dla każdego kationu.'), 'animacja nawiasu → część n02-wzory')
NEU = (viz('n02-zobojetnianie-v01', 'Zobojętnianie — licznik moli, pH, wskaźniki, jony H⁺ + OH⁻ → H₂O i krzywa pH', 'Zastępuje animację i symulator zobojętniania · CHE.HYDROXIDES.neutral (Kw), GFX.ions')
       + '<p>Przy <strong>fenoloftaleinie</strong> zasada jest malinowa; po zobojętnieniu roztwór odbarwia się. <strong>Oranż metylowy</strong>: czerwony w środowisku silnie kwasowym, pomarańczowy w zakresie zmiany barwy (pH ≈ 3,1–4,4), żółty powyżej.</p>'
       + '<div class="card card-core"><span class="card-label">Równania zobojętniania</span>'
       + ''.join('<div class="equation-box">%s</div>' % e for e in ['NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)', 'KOH(aq) + HNO₃(aq) → KNO₃(aq) + H₂O(l)', 'Ca(OH)₂(aq) + 2HCl(aq) → CaCl₂(aq) + 2H₂O(l)', '2NaOH(aq) + H₂SO₄(aq) → Na₂SO₄(aq) + 2H₂O(l)', 'Ba(OH)₂(aq) + H₂SO₄(aq) → BaSO₄↓ + 2H₂O(l)', 'Cu(OH)₂(s) + H₂SO₄(aq) → CuSO₄(aq) + 2H₂O(l)', 'Al(OH)₃(s) + 3HCl(aq) → AlCl₃(aq) + 3H₂O(l)'])
       + note('Kontrola: liczba OH⁻ z zasady = liczba H⁺ z kwasu.') + '</div>'
       + card('card-warning', 'Uwaga o Ba(OH)₂ + H₂SO₄', '<p>Zachodzą <strong>dwa procesy naraz</strong>: H⁺ + OH⁻ → H₂O (zobojętnianie) oraz Ba²⁺ + SO₄²⁻ → BaSO₄↓ (strącanie). Dlatego roztwór mętnieje.</p>')
       + viz('neutralization', 'Równania jonowe zobojętniania — cząsteczkowe, jonowe pełne, jonowe skrócone', 'Model CHE.IONIC'))
h = cut(h, 'id="neutralWidgetEl"', NEU, 'zobojętnianie → n02-zobojetnianie-v01 + równania data-rx')
i, j = element_by_text(h, 'Ćwicz równania jonowe'); h = h[:i] + h[j:]; LOG.append('most „Ćwicz w Konstruktorze” → model neutralization (wyżej)')
h = cut(h, 'id="neutralSim"', note('Licznik moli jest w modelu z §6.9: n(OH⁻) na początku, n(H⁺) dodane, nadmiar, pH i objętość w punkcie równoważnikowym. <b>Założenia:</b> mocny kwas + mocna zasada, pełna dysocjacja, pH z iloczynu jonowego wody K<sub>w</sub> = 10⁻¹⁴, bez aktywności jonów i zmian temperatury. Objętość nie zmienia bilansu moli — zmienia stężenia i pH.'), 'symulator → część n02-zobojetnianie')
h = cut(h, 'id="phWskazniki"', viz('ph-indicators-v03', 'Panel pH — skala, barwy wskaźników, przykłady roztworów', 'Barwy z CHE.COLORS') + note('Woda czysta ma w przybliżeniu pH 7. Woda destylowana przechowywana na powietrzu pochłania CO₂, dlatego jej pH bywa nieco niższe od 7. Zakres zmiany barwy oranżu metylowego: pH ≈ 3,1–4,4.'), 'pH → ph-indicators-v03')
h = cut(h, 'id="indLab"', viz('gfx-scene-indicatorRack', 'Wskaźnik w siedmiu roztworach — przewidź barwę, potem sprawdź', 'Scena GFX · barwy wskaźników z CHE.COLORS') + note('<strong>Uwaga:</strong> Cu(OH)₂ w wodzie to zawiesina, nie jednorodny roztwór. Znikoma rozpuszczona część może wpływać na odczyn, ale nie traktuj zawiesiny jak roztworu NaOH.'), 'ind-lab → gfx-scene-indicatorRack')
h = cut(h, 'id="dissWidget"', viz('n02-dysocjacja-v01', 'Rozpuszczanie i dysocjacja: NaOH, KOH, Ca(OH)₂, Mg(OH)₂, Cu(OH)₂, Fe(OH)₃ — jony, hydratacja, efekt cieplny', 'GFX.ions · CHE.HYDROXIDES.dissociation / heat'), 'dysocjacja → n02-dysocjacja-v01')
h = cut(h, 'id="wodorGrid"', viz('n02-przeglad-v01', 'Wodorotlenki — kafelki: rozpuszczalność, barwa osadu, odczyn, dysocjacja, metody otrzymywania', 'CHE.DATA.HYDROXIDES + D.SOLUBILITY_TABLE'), 'przegląd → n02-przeglad-v01')
SH = dict((k, float(v)) for k, v in re.findall(r"'?([\w()]+)'?:\{dH:(-?[\d.]+)", ENG[ENG.index('const SOLHEAT'):ENG.index('const ACIDS')]))
ENE = ('<div class="table-wrap table-compact"><table><thead><tr><th>Substancja</th><th>ΔH rozpuszczania (kJ/mol)</th><th>Efekt</th></tr></thead><tbody>'
       + ''.join('<tr data-hy-heat="%s"><td>%s</td><td>%s</td><td>%s</td></tr>' % (k, k.translate(str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')), ('%+.1f' % v).replace('.', ',').replace('-', '−'), 'egzotermiczny — temperatura rośnie' if v < 0 else 'endotermiczny — temperatura spada') for k, v in SH.items())
       + '</tbody></table></div>' + note('Wartości z silnika (CHE.HYDROXIDES.SOLHEAT). Ile stopni? 4 g NaOH (0,1 mol) w 100 g wody → ok. +10 °C. Symulacja z termometrem: model z §6.14, część „Efekt cieplny”.'))
h = cut(h, 'id="energyWidget"', ENE, 'energia rozpuszczania → tabela z silnika + odnośnik')
MAPA = ('<div class="card card-core"><span class="card-label">Mapa przemian</span><ul>'
        '<li><strong>tlenek zasadowy + woda</strong> → wodorotlenek (tylko tlenki metali aktywnych)</li><li><strong>metal aktywny + woda</strong> → wodorotlenek + H₂↑</li>'
        '<li><strong>sól metalu + zasada</strong> → wodorotlenek↓ + sól (gdy wodorotlenek trudno rozpuszczalny)</li><li><strong>wodorotlenek rozpuszczalny + woda</strong> → zasada (roztwór, jony OH⁻)</li>'
        '<li><strong>kwas + zasada</strong> → sól + woda</li><li><strong>ogrzewanie</strong> wodorotlenku (poza litowcami) → tlenek + woda</li></ul>'
        + note('Interaktywna mapa dla wybranego wodorotlenku (z równaniami z silnika): model z §6.6, zakładka „Mapa przemian”.') + '</div>')
h = cut(h, 'id="mapPrzemianEl"', MAPA, 'mapa przemian → statyczna + odnośnik')
h = cut(h, 'id="reactorEl"', viz('n02-reaktor-v01', 'Reaktor: wodorotlenek + odczynnik — przewiduj, potem sprawdź', 'CHE.HYDROXIDES.predict · H₂O, HCl, HNO₃, H₂SO₄, NaOH, CO₂, ogrzewanie, powietrze'), 'reaktor → n02-reaktor-v01')
# Ksp — akademickie
KS = re.findall(r"'([\w()]+)':([\d.e-]+)", ENG[ENG.index('const KSP='):ENG.index('function satpH')])
import math
rows = []
for f, k in KS:
    q = int(re.search(r'\)(\d)$', f).group(1)) if ')' in f else 1; K = float(k); s = (K / q ** q) ** (1 / (q + 1)); oh = q * s; pH = max(7, 14 + math.log10(max(oh, 1e-7)))
    rows.append('<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>' % (f.translate(str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')), ('%.1e' % K).replace('.', ','), ('%.1e' % s).replace('.', ','), ('%.1f' % pH).replace('.', ',') + ('' if oh >= 1e-6 else ' (≈ obojętny)')))
KSP = adv('Iloczyn rozpuszczalności — skąd pH 12,4 wody wapiennej?', '<p>Dla osadu M(OH)ₙ(s) ⇌ Mⁿ⁺ + n OH⁻: K<sub>sp</sub> = [Mⁿ⁺]·[OH⁻]ⁿ. Rozpuszczalność molowa s = (K<sub>sp</sub>/nⁿ)<sup>1/(n+1)</sup>, [OH⁻] = n·s, pH = 14 + log[OH⁻].</p>'
          '<div class="table-wrap table-compact"><table><thead><tr><th>Wodorotlenek</th><th>K<sub>sp</sub> (25 °C)</th><th>s (mol/dm³)</th><th>pH nasyconego</th></tr></thead><tbody>' + ''.join(rows) + '</tbody></table></div>'
          + note('Ca(OH)₂: s ≈ 0,011 mol/dm³ → pH ≈ 12,35 (pomiar ≈ 12,4); Mg(OH)₂: pH ≈ 10,4 (mleko magnezowe). Dla Fe(OH)₃ czy Cu(OH)₂ jonów OH⁻ z osadu jest mniej niż w czystej wodzie — dlatego zawiesina nie zmienia odczynu. Wartości: CHE.HYDROXIDES.KSP / satpH.'))
i, j = element_by_text(h, 'Rozpuszczalny ≠ mocny'); h = h[:j] + KSP + h[j:]; LOG.append('adv: Ksp → pH nasyconego (z silnika)')
h = rep(h, '• sól + zasada: CaCl₂ + 2NaOH → Ca(OH)₂↓ + 2NaCl</p>', '• sól + zasada: CaCl₂ + 2NaOH → Ca(OH)₂↓ + 2NaCl <span class="mini-note">(tylko z roztworów stężonych — Ca(OH)₂ jest trudno, ale nie praktycznie nierozpuszczalny)</span></p>', 'CaCl₂ + NaOH: warunek')

# ---------- 7. doświadczenia: jedna lista (A–H), bez dubli ----------
k = h.index('id="doswiadczenia"'); s0 = h.rindex('<section', 0, k); s1 = end_of(h, s0); sec = h[s0:s1]
i, j = element_by_text(sec, 'Ciekawostka — Fe(OH)₂'); FE2 = sec[i:j]
EXPS = [
 ('A', 'Otrzymywanie NaOH: sód + woda', 'E8', 'Co powstaje w reakcji sodu z wodą?', 'Powstaje zasada i gaz.', 'krystalizator z wodą i fenoloftaleiną, kawałek sodu wielkości ziarna grochu, szczypce, osłona', 'Nauczyciel wrzuca mały kawałek Na do wody z fenoloftaleiną.', 'Sód topi się w kulkę i „biega” po powierzchni, słychać syczenie, wydziela się gaz; roztwór barwi się na malinowo.', '2Na + 2H₂O → 2NaOH + H₂↑', 'Metal aktywny + woda → wodorotlenek + wodór; roztwór ma odczyn zasadowy.', 'Wyłącznie pokaz nauczyciela: okulary, osłona, bardzo mała porcja sodu (wodór może się zapalić).'),
 ('B', 'Gaszenie wapna: CaO + H₂O', 'E8', 'Co się dzieje, gdy do CaO dodamy wody?', 'Powstanie wodorotlenek wapnia, wydzieli się ciepło.', 'CaO, woda, parownica odporna na ciepło, fenoloftaleina, papierek uniwersalny', 'Do niewielkiej ilości CaO dodaje się wodę ostrożnie, małymi porcjami. Po ochłodzeniu bada się klarowny roztwór znad osadu.', 'Silne rozgrzanie, często syk; powstaje biała papka (mleko wapienne); roztwór nad osadem: fenoloftaleina malinowa, papierek — barwa zasadowa.', 'CaO + H₂O → Ca(OH)₂', 'Tlenek zasadowy + woda → wodorotlenek. Część Ca(OH)₂ rozpuszcza się (woda wapienna), nadmiar zostaje jako zawiesina (mleko wapienne).', 'Wykonuje nauczyciel. Reakcja silnie egzotermiczna — nie dotykaj CaO mokrymi rękami, nie pochylaj się nad naczyniem (aerozol Ca(OH)₂ jest żrący). Nie badaj wskaźnikiem gorącej, gęstej zawiesiny.'),
 ('C', 'Strącanie Cu(OH)₂', 'E8', 'Czy z soli miedzi(II) i zasady powstanie wodorotlenek?', 'Powstanie osad wodorotlenku miedzi(II).', 'roztwór CuSO₄, roztwór NaOH, probówka, pipeta', 'Do roztworu CuSO₄ dodaje się kroplami roztwór NaOH.', 'Niebieski, galaretowaty osad; roztwór nad osadem traci niebieską barwę.', 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄', 'Sól + zasada → wodorotlenek↓ + sól (metoda strąceniowa) — działa, bo Cu(OH)₂ jest praktycznie nierozpuszczalny.', 'NaOH żrący — okulary, rękawice.'),
 ('D', 'Strącanie Fe(OH)₃', 'E8', 'Czy z soli żelaza(III) i zasady powstaje wodorotlenek?', 'Powstanie brunatny osad.', 'roztwór FeCl₃, roztwór NaOH, probówka', 'Do roztworu FeCl₃ dodaje się roztwór NaOH.', 'Rdzawobrunatny osad.', 'FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl', 'Powstał praktycznie nierozpuszczalny wodorotlenek żelaza(III); Fe³⁺ potrzebuje trzech OH⁻ — stąd współczynnik 3.', 'NaOH żrący — okulary, rękawice.'),
 ('E', 'Odczyn roztworu NaOH — trzy wskaźniki', 'E8', 'Jaki odczyn ma roztwór NaOH?', 'Zasadowy.', 'roztwór NaOH przygotowany przez nauczyciela, papierek uniwersalny, fenoloftaleina, oranż metylowy, 3 probówki', 'Do trzech porcji roztworu dodaje się kolejno wskaźniki.', 'Papierek uniwersalny — niebieski / fioletowy (zależnie od pH i papierka), fenoloftaleina — malinowa, oranż metylowy — żółty.', 'NaOH → Na⁺ + OH⁻', 'Roztwór NaOH ma odczyn zasadowy (dla stężonego — silnie zasadowy): zawiera jony OH⁻.', 'NaOH żrący. Roztwór przygotowuje nauczyciel — rozpuszczanie stałego NaOH jest silnie egzotermiczne.'),
 ('F', 'Zobojętnianie NaOH kwasem solnym', 'E8', 'Co się dzieje, gdy do zasady dodajemy kwas?', 'Powstaje sól i woda; odczyn się zmienia.', 'roztwór NaOH z fenoloftaleiną, rozcieńczony HCl, pipeta, zlewka', 'Do zasady z fenoloftaleiną dodaje się kroplami HCl, mieszając.', 'Malinowa barwa stopniowo zanika — w punkcie zobojętnienia roztwór jest bezbarwny; zlewka lekko się ogrzewa.', 'NaOH + HCl → NaCl + H₂O', 'Zaszło zobojętnianie: H⁺ + OH⁻ → H₂O. Zanik barwy fenoloftaleiny oznacza, że nie ma już nadmiaru OH⁻.', 'Roztwory żrące — okulary.'),
 ('G', 'Woda wapienna i CO₂', 'E8', 'Czy w wydychanym powietrzu jest CO₂?', 'Woda wapienna zmętnieje.', 'woda wapienna (klarowny roztwór nasycony), rurka, probówka', 'Przez rurkę wdmuchuje się powietrze do wody wapiennej.', 'Roztwór mętnieje (biały osad); przy bardzo długim dmuchaniu znów się klaruje.', 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O', 'Wydychane powietrze zawiera CO₂ — woda wapienna służy do jego wykrywania. Klarowanie: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (rozszerzenie).', 'Nie zasysaj roztworu przez rurkę.'),
 ('H', 'Amfoteryczność Al(OH)₃', 'AMB', 'Czy Al(OH)₃ reaguje z kwasem i z zasadą?', 'Reaguje z obydwoma.', 'roztwór AlCl₃, roztwór NaOH, rozcieńczony HCl, 2 probówki', 'Strąca się Al(OH)₃ (NaOH kroplami), osad dzieli na dwie probówki; do jednej dodaje się HCl, do drugiej nadmiar NaOH.', 'Biały, galaretowaty osad; w obu probówkach osad znika.', 'AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl', 'Al(OH)₃ jest amfoteryczny: Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O oraz Al(OH)₃ + NaOH → Na[Al(OH)₄] (zapis LO).', 'NaOH żrący — okulary, rękawice.'),
]
def expcard(e):
    L, t, lv, prob, hip, spr, prz, obs, eq, wn, bhp = e
    return ('<div class="exp-card"><h5>Doświadczenie %s — %s <span class="level-badge level-%s">%s</span></h5><div class="exp-grid">' % (L, t, 'basic' if lv == 'E8' else 'extra', lv)
            + ''.join('<b>%s</b><span>%s</span>' % kv for kv in [('Problem', prob), ('Hipoteza', hip), ('Sprzęt i odczynniki', spr), ('Przebieg', prz), ('Obserwacje', obs), ('Równanie', '<span class="formula">%s</span>' % eq), ('Wniosek', wn), ('BHP', bhp)])
            + '</div></div>\n')
SEC7 = ('<section class="section" id="doswiadczenia">\n<div class="part-heading"><span class="part-num">7</span> Doświadczenia modelowe <span class="level-badge level-basic">E8</span></div>\n'
        '<p>Format egzaminacyjny: problem → hipoteza → sprzęt → przebieg → obserwacje → wniosek → równanie → BHP. Wykonuj tylko pod nadzorem nauczyciela. Każde doświadczenie obejrzysz w pracowni silnika (animacja, równania jonowe, warunki).</p>\n'
        + viz('n02-doswiadczenia-v01', 'Pracownia: 26 doświadczeń z wodorotlenkami — zlewka, równania, obserwacje, BHP', 'GFX.rx · D.REACTIONS · CHE.IONIC') + ''.join(expcard(e) for e in EXPS) + FE2 + '\n</section>')
h = h[:s0] + SEC7 + h[s1:]; LOG.append('§7: 8 doświadczeń w jednym formacie (bez dubli 1–4) + pracownia n02-doswiadczenia-v01')

# ---------- 8–17 ----------
i, j = element_by_text(h, 'Przełącznik błędu'); h = h[:i] + '<details class="answer"><summary>Przełącznik błędu — ile grup OH⁻ jest w Ca(OH)₂? (1 / 2 / 3)</summary><p><strong>2.</strong> Indeks za nawiasem mnoży całą grupę OH: Ca(OH)₂ = 1 Ca, 2 O, 2 H. Zapis CaOH₂ oznaczałby 1 grupę OH i dodatkowy atom H.</p></details>' + h[j:]; LOG.append('przełącznik błędu → pytanie z odpowiedzią')
i = start_of_attr(h, 'id="mapExpand"'); h = h[:i] + h[end_of(h, i):]; LOG.append('mapa: bez nakładki „Powiększ”')
h = rep(h, '<li>Potrafię narysować model H–O–Ca–O–H oraz rozgałęziony Al(OH)₃ (O–H / M···O)</li>', '<li>Potrafię narysować szkolny model poglądowy Ca(OH)₂ i Al(OH)₃ (O–H ciągła, M···O przerywana) i wiem, że to nie jest wzór strukturalny cząsteczki</li>', 'checklista: model poglądowy')
h = rep(h, '<b>Używaj widgetów naprzemiennie</b> Po przeczytaniu teorii od razu kliknij odpowiedni widget (Wzórometr, Bilansator, Konstruktor).', '<b>Używaj modeli naprzemiennie</b> Po przeczytaniu teorii od razu otwórz model: wzór wodorotlenku (§6.3), przegląd (§6.15), strącanie (§6.7).', 'wskazówki: modele silnika')
# core-path (rdzeń lekcji) — nazwy modeli
for old, new in [('<strong>Wzórometr + Bilansator + Konstruktor</strong>', '<strong>Model „Wzór wodorotlenku”</strong> (§6.3)'), ('<strong>3 metody otrzymywania + Laboratorium jonowe</strong>', '<strong>Otrzymywanie + Laboratorium jonowe</strong> (§6.6–6.7)'), ('<strong>Zobojętnianie + Symulator</strong>', '<strong>Zobojętnianie</strong> (§6.9)')]:
    if old in h: h = rep(h, old, new, 'rdzeń: ' + new[8:30])
# audyt
k = h.index('id="audyt"'); s0 = h.rindex('<section', 0, k); ph = h.index('</div>', h.index('part-heading', s0)) + 6
AUD = card('card-new', 'v8.1 CHE (2026-10) — integracja z silnikiem', '<ul><li>Widgety wbudowane zastąpione modelami silnika: n02-wzory, n02-przeglad, n02-otrzymywanie, n02-stracanie, n02-zobojetnianie, n02-dysocjacja, n02-reaktor, n02-doswiadczenia (CHE.HYDROXIDES, GFX.rx, GFX.ions, CHE.sim.ParticleSim).</li>'
           '<li>Rozpuszczalność czytana z tabeli rozpuszczalności silnika; tabela 5.9 i równania oznaczone (audyt LES-N02).</li><li>Poprawki: mnemotechnika OH⁻, hydraty (Ba(OH)₂·8H₂O), Mg(OH)₂ = praktycznie nierozpuszczalny (zgodnie z tabelą), warunek strącania Ca(OH)₂, model poglądowy w checkliście.</li>'
           '<li>Doświadczenia: jedna lista A–H w formacie egzaminacyjnym (usunięte dublujące się karty 1–4). Korekty v8.03/v8.04 włączone jako §5A.</li><li>Nowe treści: tabela ΔH rozpuszczania, iloczyn rozpuszczalności → pH nasyconego roztworu (poziom LO).</li></ul>')
h = h[:ph] + AUD + h[ph:]
h = rep(h, '<p><strong>Wizualizacje:</strong> Laboratorium jonowe, Dysocjacja, pH i wskaźniki, Symulator zobojętniania, Konstruktor, Wodorotlenki — przegląd, Energia rozpuszczania, Reaktor, Modele 3D, Animowany timeline.</p>', '<p><strong>Wizualizacje:</strong> modele silnika CHE (lista w karcie v8.1 powyżej).</p>', 'audyt: lista wizualizacji')

# ---------- 5A: korekty v8.03 + v8.04 jako jedna sekcja ----------
def drop_box(s, text):
    i, j = element_by_text(s, text); return s[:i] + s[j:]
v804 = drop_box(v804, '0. Osiem faktów E8')
v803 = drop_box(v803, '7. BHP — korekta języka')
v803 = re.sub(r'<div class="section-kicker">.*?</div>', '', v803, flags=re.S); v804 = re.sub(r'<div class="section-kicker">.*?</div>', '', v804, flags=re.S)
v803 = v803.replace('<h2>', '<h3 class="sub-h">').replace('</h2>', '</h3>'); v804 = v804.replace('<h2>', '<h3 class="sub-h">').replace('</h2>', '</h3>')
S5A = ('<section class="section" id="model">\n<div class="part-heading"><span class="part-num">5A</span> Model bez skrótów — cztery pytania, mikrokroki, kontrprzykłady <span class="level-badge level-understand">ROZUMIENIE</span></div>\n'
       + v803 + v804 + '</section>\n')
k = h.index('id="wyjasnienie"'); s0 = h.rindex('<section', 0, k); h = h[:s0] + S5A + h[s0:]; LOG.append('§5A: korekty v8.03 + v8.04 (bez dubli)')

# ---------- data-rx: równania → klucze silnika ----------
SUBT = str.maketrans('₀₁₂₃₄₅₆₇₈₉', '0123456789')
def norm(t):
    t = re.sub(r'<[^>]+>', '', HT.unescape(t)).translate(SUBT); t = re.sub(r'\((aq|l|s|g)\)', '', t); t = t.replace('↓', '').replace('↑', '').replace(' ', '').replace(' ', '')
    if '→' not in t: return None
    L, P = t.split('→', 1)
    def side(x):
        out = []
        for term in x.split('+'):
            m = re.match(r'^(\d*)(.+)$', term)
            if not m or not m.group(2): return None
            out.append((m.group(1) if m.group(1) not in ('', '1') else '') + m.group(2))
        return '+'.join(sorted(out))
    a, b = side(L), side(P)
    return a and b and a + '>' + b
h = re.sub(r'<(div|span) class="(?P<c>equation-box|formula)"()>([^<]*→[^<]*)</\1>', lambda mo: (lambda k: ('<%s class="%s" data-rx="%s">%s</%s>' % (mo.group(1), mo.group('c'), k, mo.group(4), mo.group(1))) if k else mo.group(0))(RXN.get(norm(mo.group(4)) or '')), h)
n_rx = h.count('data-rx="'); LOG.append('data-rx: %d równań' % n_rx)

# ---------- CSS: tylko reguły N02 nieobecne we wspólnym arkuszu lekcji i używane w wyniku ----------
CSS = ''.join(re.findall(r'<style>(.*?)</style>', src, re.S))
CSS = re.sub(r'/\*.*?\*/', '', CSS, flags=re.S)
def blocks(c):
    out, i, n = [], 0, len(c)
    while i < n:
        j = c.find('{', i)
        if j < 0: break
        sel = c[i:j].strip(); d, k = 1, j + 1
        while d and k < n:
            d += 1 if c[k] == '{' else -1 if c[k] == '}' else 0; k += 1
        out.append((sel, c[j + 1:k - 1])); i = k
    return out
used_cls = set(x for c in re.findall(r'class="([^"]+)"', h + HIST) for x in c.split()); used_id = set(re.findall(r'id="([^"]+)"', h))
SKIP = {':root', '*,*::before,*::after', 'body', 'html'}
def keep(sel):
    if sel in SKIP: return False
    cls = re.findall(r'\.([\w-]+)', sel); ids = re.findall(r'#([\w-]+)', sel)
    if not cls and not ids: return False
    return all(c in used_cls for c in cls) and all(i in used_id for i in ids)
out = []
for sel, body_ in blocks(CSS):
    if sel.startswith('@media') or sel.startswith('@supports'):
        inner = [s + '{' + b + '}' for s, b in blocks(body_) if any(keep(x.strip()) for x in s.split(','))]
        if inner: out.append(sel + '{' + ''.join(inner) + '}')
    elif sel.startswith('@keyframes'):
        name = sel.split()[-1]
        if name in h or name in ''.join(out): out.append(sel + '{' + body_ + '}')
    elif any(keep(x.strip()) for x in sel.split(',')):
        out.append(sel + '{' + body_ + '}')
N02_CSS = '<style id="n02-style">' + re.sub(r'\s+', ' ', ''.join(out)) + n02_merge.CSS + '.hist-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:12px;margin:10px 0}.hist-card{margin:0;border:1px solid var(--border,#e5e9ee);border-radius:12px;padding:10px;background:var(--surface,#fff)}.hist-year{font:800 18px/1.1 inherit;color:var(--accent,#0d6868)}.hist-who{font-weight:700;margin:2px 0 6px}.hist-ill svg{width:100%;height:auto;display:block;border-radius:8px}.hist-card figcaption{font-size:13.5px;margin-top:6px;color:var(--text-soft,#4a5568)}h3.sub-h{margin-top:18px}</style>'
LOG.append('CSS N02: %d reguł (z %d)' % (len(out), len(blocks(CSS))))

# ---------- skrypty: zostają tylko ogólne (fiszki, kotwice, tabele, test) ----------
KEEP_JS = [x for x in scr if re.search(r'function toggleFlashcard|a\[href\^="#"\]|setupTableHints|getElementById\(\'quizWrap\'\)', x)]
assert len(KEEP_JS) == 4, len(KEEP_JS)
JS = ''.join('<script>%s</script>\n' % x for x in KEEP_JS) + ADV_JS

# ---------- v8.2: porządkowanie (n02_merge) ----------
import n02_merge
LOG_ = []
h = n02_merge.restructure(h, LOG_.append); LOG.extend(LOG_)
# ---------- spis treści + nagłówek ----------
secs = re.findall(r'<section class="section" id="([\w-]+)">\s*<div class="part-heading"><span class="part-num">([^<]+)</span>\s*([^<]+)', h)
TOC = '<details class="toc-item" open><summary class="toc-summary">Spis treści</summary><nav class="toc-links">' + '<a class="toc-link" href="#minimum">Minimum E8</a>' + ''.join('<a class="toc-link" href="#%s">%s. %s</a>' % (i, n, t.strip()) for i, n, t in secs) + '</nav></details>\n'
HERO = ('<section class="hero card"><div class="hero-kicker">N02 · CHEMIA · MASTER LAB v8.2</div><h1>Wodorotlenki i zasady</h1>'
        '<p class="lead">Kation metalu + OH⁻ → wzór M(OH)ₙ, nawias i nazwy; rozpuszczalność, wodorotlenek a zasada, dysocjacja i odczyn; trzy metody otrzymywania, strącanie, zobojętnianie, wskaźniki, amfoteryczność. Modele, liczby i równania z silnika CHE.HYDROXIDES.</p>'
        '<div class="tag-row"><span class="level-badge level-basic">E8</span><span class="level-badge level-understand">ROZUMIENIE</span><span class="level-badge level-extra">AMBITNIE / LO</span></div>'
        '<button type="button" class="adv-toggle" id="advToggle" aria-pressed="false">Pokaż treści akademickie</button></section>\n')
k = h.index('<div class="layer-legend">'); h = h[:k] + TOC + h[k:]
HTML = ('<!DOCTYPE html>\n<html lang="pl">\n<head>\n<meta charset="utf-8"/>\n<meta content="width=device-width,initial-scale=1.0" name="viewport"/>\n<title>Chemia N02 — Wodorotlenki i zasady (v8.2 MASTER LAB)</title>\n'
        + VIZ_CSS + V15_CSS + N02_CSS + '</head>\n<body>\n<main class="page" id="main">\n' + HERO + h.strip() + '\n</main>\n' + JS + '\n</body>\n</html>\n')
HTML = re.sub(r'[\U0001F300-\U0001FAFF\u26A0\u26A1]\uFE0F?\s*', '', HTML)  # bez emoji (prośba użytkownika); ostrzeżenia mają słowo „BHP”/„Uwaga”
for bad in ('CHEMIA_KONSTRUKTOR_LAB.html', 'id="ilCanvas"', 'id="wzView"'):
    assert bad not in HTML, bad
open(os.path.join(D, 'n02_new.html'), 'w', encoding='utf-8').write(HTML)
print('OK N02', len(HTML), 'zmian:', len(LOG), '| viz:', HTML.count('che-lesson-viz-ref"'), '| adv:', HTML.count('class="adv"'), '| data-rx:', n_rx, '| data-hy:', HTML.count('data-hy="'))
for x in LOG: print(' -', x)
