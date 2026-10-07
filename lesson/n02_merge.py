# -*- coding: utf-8 -*-
"""N02 Wodorotlenki v8.2 — porządkowanie: §5A (dwie serie korekt) rozdzielone tematycznie, podsekcje §6 scalone wg modelu silnika
(jeden model = jedno miejsce), doświadczenia A–H → pracownia GFX, rysunki SVG → układ HTML CHE, nowa numeracja. Kontrola wiedzy: zdania + etykiety SVG."""
import re
from lesson_merge import Merger, norm, SVGX_CSS
from bs4 import BeautifulSoup

CSS = SVGX_CSS + ('.che-prac-go{margin-top:8px;border:1px solid #0d6868;color:#0d6868;background:#fff;border-radius:8px;padding:5px 12px;font-weight:700;cursor:pointer}'
                  '.che-prac-go:hover{background:#0d6868;color:#fff}')
EXP = {'A': 'naH2o', 'B': 'caoH2o', 'C': 'cuso4Naoh', 'D': 'fecl3Naoh', 'E': ('ph-indicators-v03', ''), 'F': 'hclNaOH+php', 'G': 'caoh2Co2', 'H': 'aloh3Naoh'}

def restructure(h, log):
    m = Merger(h, log); svg_txt = []
    # ---- §5A: dwie serie (Korekty 1–6, Mikrokroki 1–11) → tematycznie ----
    mo = m.S('model'); rb = {}
    serie = 'K'
    for c in mo.children:
        if getattr(c, 'name', None) == 'h3' and 'Mikrokroki' in c.get_text(): serie = 'M'
        if getattr(c, 'name', None) == 'div' and 'rule-box' in (c.get('class') or []):
            n = re.match(r'\s*(\d+)\.', c.get_text()); rb[serie + n.group(1)] = c
    klin = mo.find('details', class_='answer')
    # pary w §5A
    for a, b in (('K1', 'M3'), ('K3', 'M4'), ('K4', 'M1')):
        rb[a].insert_after(rb[b].extract())
    rb['M1'].insert_after(rb['M2'].extract())
    log('§5A: pary tematyczne K1+M3 (cztery pytania/poziomy), K3+M4 (Ca(OH)₂), K4+M1+M2 (wzór i dysocjacja)')
    # poza §5A: amfoteryczność, otrzymywanie, strącanie, BHP, obserwacja, klinika
    m.move_nodes_h3([rb['K5'], rb['M6']], 'wyjasnienie', '6.18')
    m.move_nodes_h3([rb['K6']], 'wyjasnienie', '6.6')
    m.move_nodes_h3([rb['M5']], 'wyjasnienie', '6.7')
    d = m.S('doswiadczenia'); ref = d.find('div', class_='che-lesson-viz-ref')
    for x in (rb['M8'], rb['M9'], rb['M10']): ref.insert_before(x.extract())
    log('§5A: BHP NaOH/KOH i CaO + obserwacja→wniosek → §7 Doświadczenia; amfoteryczność → 6.18; otrzymywanie → 6.6; strącanie → 6.7')
    kl = m.S('klinika'); kl.append(m.sub('Sprawdź się (z modelu)')); kl.append(rb['M11'].extract()); kl.append(klin.extract())
    # nagłówki serii w §5A zbędne po rozdzieleniu: druga seria dołącza do pierwszej
    for c in list(mo.find_all('h3', class_='sub-h')):
        if 'Mikrokroki' in c.get_text():
            lead = c.find_next_sibling('p', class_='lead'); c.decompose()
            if lead: mo.select_one('p.lead').insert_after(lead.extract())
    log('§5A: klinika z modelu → §8; seria „Mikrokroki” scalona z „Korektami”')
    # ---- §6: podsekcje wg modeli silnika ----
    m.merge_h3('wyjasnienie', ['6.2 ', '6.2b'], 'Modele budowy — NaOH, Ca(OH)₂, Al(OH)₃ (dwa szkolne sposoby)')
    m.merge_h3('wyjasnienie', ['6.3', '6.4', '6.5', '6.8'], 'Wzór wodorotlenku: bilans ładunków, nawias, konstruktor')
    m.merge_h3('wyjasnienie', ['6.6', '6.17'], 'Otrzymywanie wodorotlenków i mapa przemian')
    m.merge_h3('wyjasnienie', ['6.9', '6.10', '6.11'], 'Zobojętnianie — model, licznik moli, równania jonowe')
    m.merge_h3('wyjasnienie', ['6.12', '6.13'], 'pH i wskaźniki — model i laboratorium wskaźników')
    m.merge_h3('wyjasnienie', ['6.14', '6.16'], 'Dysocjacja i energia rozpuszczania')
    # ---- rysunki SVG → układ HTML ----
    for sv in m.S('historia').find_all('svg'): svg_txt += m.svg_to_html(sv, 'chips')
    for sv in m.S('wyjasnienie').find_all('svg'):
        svg_txt += m.svg_to_html(sv, 'chips', 'Ten sam układ (kation, grupy OH⁻, nawias) pokazuje interaktywnie model „Wzór wodorotlenku” w tej sekcji: modele A, B i jony.')
    for sv in m.S('mapa').find_all('svg'): svg_txt += m.svg_to_html(sv, 'boxes')
    log('rysunki SVG → układ HTML CHE: %d etykiet zachowanych' % len(svg_txt))
    # ---- doświadczenia A–H → pracownia GFX ----
    n = 0
    for card in m.S('doswiadczenia').find_all('div', class_='exp-card'):
        mm = re.search(r'Doświadczenie ([A-H])\b', card.get_text())
        if not mm: continue
        v = EXP[mm.group(1)]; pid, k = (v if isinstance(v, tuple) else ('n02-doswiadczenia-v01', v))
        b = m.b.new_tag('button'); b['type'] = 'button'; b['class'] = 'che-prac-go'; b['data-prac'] = pid; b['data-k'] = k
        b.string = 'Zobacz w zlewce (pracownia GFX)' if pid == 'n02-doswiadczenia-v01' else 'Zobacz w modelu wskaźników'; card.append(b); n += 1
    log('doświadczenia A–H → przyciski pracowni GFX (%d)' % n)
    for i in ('model', 'wyjasnienie', 'doswiadczenia', 'klinika'): m.dedup(i)
    full = norm(m.b.get_text(' '))
    miss = [t for t in svg_txt if norm(t) not in full]; assert not miss, ('SVG: brak etykiet', miss[:5])
    lost = m.check(); assert not lost, ('UTRATA WIEDZY', lost[:8])
    m.renumber(subs=('sciaga', 'wyjasnienie'))
    return m.html()
