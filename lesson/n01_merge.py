# -*- coding: utf-8 -*-
"""N01 Tlenki v6.1 — porządkowanie: scalenie powtórzeń (dodatki B/D/E/F/G, ściągi, testy, korekta 4c, most), obce elementy
(symulacja PhET, ręczna mapa SVG) → modele i układ CHE, nowa kolejność i numeracja. Wiedza: kontrola zdań przed/po."""
import re
from lesson_merge import Merger, svg_texts, norm

def mindmap(m):
    """Mapa myśli z ręcznego SVG → nasz układ HTML (te same treści, kolory charakteru z CHE.DATA.CHAR_COLORS, odnośniki do sekcji)."""
    s = m.b.find(id='mapSvg'); txt = svg_texts(str(s)); raw = [t.get_text() for t in s.find_all('text')]
    groups, cur = [], None
    for t in raw:
        if t in ('TLENEK', 'CHARAKTER', 'OTRZYMYWANIE', 'REAKCJE', 'PRZYKŁADY', 'PUŁAPKI', 'MOSTY'): cur = [t, []]; groups.append(cur)
        elif cur: cur[1].append(t)
        else: groups.append([None, [t]])
    head = [[None, g[1]] for g in groups if g[0] == 'TLENEK']; boxes = [g for g in groups if g[0] and g[0] != 'TLENEK']
    tail = boxes[-1][1].pop() if boxes and boxes[-1][1] and boxes[-1][1][-1].startswith('Zastosowania') else None
    link = {'CHARAKTER': 'charakter', 'OTRZYMYWANIE': 'otrzymywanie', 'REAKCJE': 'reakcje', 'PRZYKŁADY': 'kolory', 'PUŁAPKI': 'klinika', 'MOSTY': 'dod-h'}
    col = {'CHARAKTER': '#2e7d4f', 'OTRZYMYWANIE': '#2b5e9c', 'REAKCJE': '#6b3fa0', 'PRZYKŁADY': '#b06f1c', 'PUŁAPKI': '#b83a45', 'MOSTY': '#6b3fa0'}
    H = '<div class="mm"><div class="mm-root">TLENEK</div><div class="mm-formula">' + '<br>'.join(head[0][1] if head else []) + '</div><div class="mm-grid">'
    for name, items in boxes:
        H += '<a class="mm-box" href="#%s" style="--mm:%s"><b>%s</b><ul>%s</ul></a>' % (link.get(name, ''), col.get(name, '#0d6868'), name, ''.join('<li>%s</li>' % i for i in items))
    H += '</div>' + ('<div class="mm-foot">%s</div>' % tail if tail else '') + '</div>'
    new = m.b.new_tag('div'); new.append(m.b.new_string('')); s.replace_with(new); new.replace_with(__import__('bs4').BeautifulSoup(H, 'html.parser'))
    out = norm(m.b.find(class_='mm').get_text(' ')); miss = [t for t in txt if t not in out]
    assert not miss, ('mapa: brak', miss)
    m.log('mapa myśli: SVG → układ HTML CHE (%d pól, odnośniki do sekcji)' % len(boxes))

MM_CSS = ('.mm{font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;gap:10px}.mm-root{background:#0d6868;color:#fff;font-weight:800;border-radius:12px;padding:10px 28px;letter-spacing:.06em}'
          '.mm-formula{font-family:inherit;border:2px solid #b06f1c;background:#fcf4e6;color:#7a4510;border-radius:10px;padding:8px 16px;text-align:center;font-weight:700;font-size:13px}'
          '.mm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;width:100%}.mm-box{display:block;text-align:left;font-family:inherit;border:2px solid var(--mm);border-radius:10px;padding:8px 12px;text-decoration:none;color:inherit;background:#fff}'
          '.mm-box:hover{background:#f8fafc}.mm-box b{color:var(--mm);font-size:12px;letter-spacing:.08em}.mm-box ul{margin:6px 0 0 16px;padding:0;font-size:13px}'
          '.mm-foot{font-family:inherit;background:#1a2332;color:#fff;border-radius:10px;padding:8px 16px;font-size:13px}.merge-h{margin:18px 0 8px}.che-prac-go{margin-top:8px;border:1px solid #0d6868;color:#0d6868;background:#fff;border-radius:8px;padding:5px 12px;font-weight:700;cursor:pointer}.che-prac-go:hover{background:#0d6868;color:#fff}')

ORDER = ['jak-pracowac', 'cele', 'kompas', 'definicja', 'charakter', 'oxide-decision-model', 'builder', 'vsepr', 'okres-mini', 'otrzymywanie', 'reakcje', 'mapa-reakcji',
         'amfoterycznosc', 'p4o10', 'n01-why-sio2-mgo', 'redukcja', 'rozklad', 'trend', 'kolory', 'mieszane', 'organizmy', 'bezpieczenstwo', 'historia', 'doswiadczenia',
         'klinika', 'cwiczenia', 'stechio', 'typologia-e8', 'fiszki', 'test', 'karta', 'mapa', 'slownik',
         'dod-a', 'dod-c', 'dod-f', 'dod-h', 'dod-i', 'checklista', 'wiz-reg-l002', 'audyt']
CODES = [('L001', 'F01–F09', 'fundamenty'), ('L009', 'R05–R08', 'stechiometria'), ('L010', 'X01–X10', 'redoks')]

def restructure(h, log):
    m = Merger(h, log)
    # 4: CO / CO2 i „tlenek w wodzie” przy charakterze
    m.into('charakter', 'n01-co-co2-model', 'CO a CO₂ — dlaczego klasyfikujemy je inaczej')
    m.into('charakter', 'tlenek-woda', 'Tlenek w wodzie — co obserwujemy')
    # 4a: jeden model decyzyjny = most „trzy różne rzeczy” + korekta 4c (rozróżnienia), reszta 4c tam, gdzie temat
    c = m.S('n01-correction-v59'); cards = m.body(c)
    blocks = [x for x in cards if getattr(x, 'name', None)]
    m.into('oxide-decision-model', 'oxide-decision-bridge', None, at=m.S('oxide-decision-model').select_one('.part-heading'))
    m.into('oxide-decision-model', None, 'Charakter ≠ reakcja z wodą ≠ rozpuszczalność', nodes=blocks[0:3])
    m.into('p4o10', None, None, nodes=[blocks[3]])
    m.into('amfoterycznosc', None, None, nodes=[blocks[4]])
    bhp = blocks[5]; obs = blocks[6]
    d = m.S('doswiadczenia'); first = d.select_one('.card.card-error'); first.insert_after(bhp.extract())
    m.into('doswiadczenia', None, 'Obserwacja czy wniosek? (krótko)', nodes=[obs], at=[x for x in d.find_all('div', class_='card-error')][-1])
    m.S('n01-correction-v59').decompose(); log('korekta 4c rozdzielona: rozróżnienia → model decyzyjny, P₂O₅/P₄O₁₀ → §10, Al₂O₃ → §9, BHP i obserwacja → §21')
    # 4b: konstruktor + stopnie utlenienia (jedno miejsce kalkulatora)
    m.into('builder', 'stopnie-ox', 'Stopnie utlenienia w tlenkach')
    # 5: VSEPR — kroki z „rozszerzeń”, symulacja zewnętrzna → zadanie z naszym modelem 3D
    ext = m.S('l002-extensions')
    steps = ext.find(id='vsepr-steps'); phet = ext.find(id='ext-phet-vsepr'); nad = ext.find(id='nadtlenki-box'); trening = ext.find('details', class_='interleaving'); sci = ext.find(id='sciaga-print-ox')
    m.into('vsepr', None, None, nodes=[steps])
    task = m.b.new_tag('div'); task['class'] = 'card card-understand'
    task.append(__import__('bs4').BeautifulSoup('<span class="card-label">Zadanie z modelem 3D</span><p>W modelu „Model 3D cząsteczek” (przycisk wyżej w tej sekcji) obejrzyj CO₂, H₂O, SO₂ i CH₄ (tetraedr) <span>(CO₂ liniowa, H₂O kątowa, SO₂ kątowa).</span></p><p><b>Pytanie:</b> <span>Dlaczego H₂O i SO₂ są kątowe, a CO₂ liniowa?</span></p><p>Most: kształty H₂O wrócą przy wodorotlenkach — N02 VSEPR.</p><p class="mini-note">Model uproszczony; kroki VSEPR jak wyżej. Wcześniej to zadanie wymagało zewnętrznej symulacji (PhET Molecule Shapes) — zastąpione modelem silnika CHE.MOLECULE.</p>', 'html.parser'))
    m.S('vsepr').append(task); phet.decompose(); log('symulacja zewnętrzna PhET → zadanie z modelem molecule3d-merged')
    m.into('mieszane', None, None, nodes=[nad])
    m.into('cwiczenia', None, None, nodes=[trening], at=m.S('cwiczenia').select_one('.part-heading'))
    m.into('karta', None, 'Szybkie powtórzenie E8 (wersja skrócona)', nodes=m.body(sci))
    sci.decompose(); ext.decompose()
    # trend, korozja, BHP i środowisko, stechiometria, testy, mosty
    m.into('trend', 'dod-b', 'Trend w 3. okresie i metale przejściowe')
    m.into('dod-f', 'korozja-lite', 'W skrócie (E8)', at=m.S('dod-f').select_one('.part-heading'))
    m.into('bezpieczenstwo', 'dod-d', 'Tabela BHP tlenków')
    m.into('bezpieczenstwo', 'dod-g', 'Środowisko: smog, efekt cieplarniany, kwaśne deszcze')
    m.into('stechio', 'stechio-spal', 'Stechiometria spalania')
    m.drop('dod-e', 'tylko odsyłacz do sekcji stechiometrii')
    m.into('test', 'test-adapt', 'Test adaptacyjny (poziomy A, B, C)')
    m.into('test', 'quiz', 'Quiz klikany')
    m.into('dod-h', 'most-l004', 'Dalej w kursie')
    for t, i in (('Bezpieczeństwo, BHP i środowisko', 'bezpieczenstwo'), ('Sprawdź się: test, test adaptacyjny, quiz', 'test'), ('Stechiometria tlenków i spalania', 'stechio'),
                 ('Trzy pytania o tlenek — model decyzyjny', 'oxide-decision-model'), ('Konstruktor wzorów i stopnie utlenienia', 'builder'), ('Dodatek F — korozja i pasywacja', 'dod-f')):
        ph = m.S(i).select_one('.part-heading'); num = ph.select_one('.part-num'); badges = ph.select('.level-badge')
        ph.clear(); ph.append(num); ph.append(' ' + t + ' ')
        for b in badges: ph.append(b)
    # doświadczenia 1–4: każde otwiera pracownię GFX na tym samym doświadczeniu (jeden model = jedno miejsce)
    EXP = {'1': ('n01-spalanie-v01', 'mgO2'), '2': 'caoH2o', '3': 'caoh2Co2', '4': 'cuoH2so4'}
    EXP = {k: (v if isinstance(v, tuple) else ('n01-doswiadczenia-v01', v)) for k, v in EXP.items()}; n = 0
    for h3 in m.S('doswiadczenia').find_all('h3'):
        mm = re.match(r'Doświadczenie (\d)', h3.get_text().strip())
        if mm and mm.group(1) in EXP:
            card = h3.find_next_sibling('div'); b = m.b.new_tag('button'); b['type'] = 'button'; b['class'] = 'che-prac-go'; b['data-prac'] = EXP[mm.group(1)][0]; b['data-k'] = EXP[mm.group(1)][1]
            b.string = 'Zobacz w modelu spalania (GFX)' if EXP[mm.group(1)][0] == 'n01-spalanie-v01' else 'Zobacz w zlewce (pracownia GFX)'; card.append(b); n += 1
    log('doświadczenia 1–4 → przyciski pracowni GFX (%d)' % n)
    for i in ('charakter', 'oxide-decision-model', 'doswiadczenia', 'bezpieczenstwo', 'karta', 'dod-f', 'stechio', 'mieszane'): m.dedup(i)
    mindmap(m)
    m.order(ORDER)
    lost = m.check(allowed=('zobacz sekcję 24', 'podaj źródło przy udostępnianiu', 'wersja pl (jeśli dostępna)', 'phet', 'symulacja zewnętrzna', 'uzupełnienie offline', 'colorado', 'cc by'))
    assert not lost, ('UTRATA WIEDZY', lost[:8])
    m.renumber()
    h = m.html()
    for a, b, t in CODES:
        h = re.sub(r'(?<![\w-])%s(?=\s*[—–])' % a, b, h); h = re.sub(r'(?<![\w-])%s(?![\w-])' % a, '%s (%s)' % (b, t), h)
    log('kody starych lekcji: L001/L009/L010 → F01–F09 / R05–R08 / X01–X10')
    return h
