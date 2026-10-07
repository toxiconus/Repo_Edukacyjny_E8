# -*- coding: utf-8 -*-
"""Narzędzia porządkowania lekcji (v6.1): scalanie sekcji, usuwanie dokładnych powtórzeń, nowa kolejność i numeracja,
kontrola wiedzy (każde zdanie sprzed scalenia musi istnieć po scaleniu, poza listą świadomych wyjątków)."""
import re
from bs4 import BeautifulSoup, NavigableString

def soup(h): return BeautifulSoup('<div id="__root">' + h + '</div>', 'html.parser')
def html_of(b): return b.find(id='__root').decode_contents()
def norm(t): return re.sub(r'\s+', ' ', t or '').strip().lower()
def sentences(h):
    t = BeautifulSoup(h, 'html.parser')
    for x in t(['script', 'style', 'svg']): x.decompose()
    for x in t.select('.part-heading, .merge-h, h3, h4'): x.decompose()
    t = t.get_text('\n')
    return {norm(s) for s in re.split(r'(?<=[.!?])\s+|\s[·•]\s|\n', t) if len(norm(s)) > 25}
def svg_texts(h):
    return [norm(x.get_text()) for x in BeautifulSoup(h, 'html.parser').select('svg text')]

class Merger:
    def __init__(self, h, log):
        self.b = soup(h); self.log = log; self.before = sentences(h)
    def S(self, i):
        s = self.b.find(id=i); assert s is not None, 'brak sekcji ' + i; return s
    def body(self, s):
        return [c for c in list(s.children) if not (getattr(c, 'name', None) == 'div' and 'part-heading' in (c.get('class') or []))]
    def sub(self, title, lvl='h3'):
        t = self.b.new_tag(lvl); t['class'] = 'merge-h'; t.string = title; return t
    def into(self, dst, src, title=None, nodes=None, at=None):
        """Przenieś treść sekcji src (albo wskazane węzły) do sekcji dst; src znika, gdy pusta."""
        d = self.S(dst); s = self.S(src) if src else None
        ns = nodes if nodes is not None else self.body(s)
        anchor = at
        def put(x):
            nonlocal anchor
            if anchor is None: d.append(x)
            else: anchor.insert_after(x); anchor = x
        if title: put(self.sub(title))
        for n in list(ns): put(n.extract())
        if s is not None and not [c for c in self.body(s) if (getattr(c, 'name', None) or str(c).strip())]:
            s.decompose()
        self.log('scalono: %s → %s%s' % (src or 'węzły', dst, (' („%s”)' % title) if title else ''))
    def drop(self, i, why):
        self.S(i).decompose(); self.log('usunięto %s: %s' % (i, why))
    def dedup(self, i):
        """Usuń w sekcji elementy-liście (p, li, tr, mini-note) powtórzone dosłownie wcześniej w tej samej sekcji."""
        s = self.S(i); seen = set(); n = 0
        for e in s.find_all(['p', 'li', 'tr']):
            if e.find(['p', 'li', 'tr', 'table', 'div']): continue
            k = norm(e.get_text(' '))
            if len(k) < 12: continue
            if k in seen: e.decompose(); n += 1
            else: seen.add(k)
        if n: self.log('%s: usunięto %d powtórzeń dosłownych' % (i, n))
    def order(self, ids):
        root = self.b.find(id='__root'); secs = [self.S(i) for i in ids]
        first = [c for c in root.find_all('section', recursive=False) if c.get('id')][0]
        ph = self.b.new_tag('span'); first.insert_before(ph)
        rest = [c for c in root.find_all('section', recursive=False) if c.get('id') and c.get('id') not in ids]
        assert not rest, 'sekcje poza kolejnością: ' + ', '.join(c['id'] for c in rest)
        for s in secs: ph.insert_before(s.extract())
        ph.decompose()
    def renumber(self, keep=(), subs=()):
        """Kolejne numery 1..n sekcji z numerem (np. 4, 4b, 5A, 0.2); litery dodatków i znaki specjalne bez zmian.
        subs: sekcje, w których podsekcje h3 „X.k” dostają numer nowej sekcji. Poprawia odwołania §X, §X.k i „sekcja X”."""
        mp, sub, k = {}, {}, 0
        for s in self.b.find(id='__root').find_all('section', recursive=False):
            pn = s.select_one('.part-heading .part-num')
            if not pn: continue
            old = pn.get_text().strip()
            if not re.match(r'^\d+(\.\d+)?[a-zA-Z]?$', old) or s.get('id') in keep: continue
            k += 1; mp[old] = str(k); pn.string = str(k)
            if s.get('id'): self.renumber_h3(s['id'], sub, old)
        def fix(t):
            t = re.sub(r'§\s?(\d+[A-Za-z]?(?:\.\d+[a-z]?)?)', lambda m: '§' + (sub.get(m.group(1)) or (mp.get(m.group(1).split('.')[0], m.group(1).split('.')[0]) + ('.' + m.group(1).split('.')[1] if '.' in m.group(1) else ''))), t)
            return re.sub(r'\b(sekcj[aięy]|sekcji)\s+(\d+[a-zA-Z]?)\b', lambda m: m.group(1) + ' ' + mp.get(m.group(2), m.group(2)), t)
        for x in self.b.find_all(string=True):
            if isinstance(x, NavigableString) and x.parent.name not in ('script', 'style') and ('§' in x or 'sekcj' in x):
                y = fix(str(x))
                if y != str(x): x.replace_with(y)
        self.log('numeracja: %d sekcji, %d podsekcji' % (k, len(sub))); self.secmap, self.submap = mp, sub; return mp
    def html(self): return html_of(self.b)
    def check(self, allowed=()):
        after = sentences(self.html()); t = BeautifulSoup(self.html(), 'html.parser')
        for x in t(['script', 'style', 'svg']): x.decompose()
        full = norm(t.get_text(' '))
        lost = [s for s in self.before if s not in after and s not in full and not any(a in s for a in allowed)]
        return lost

# ---------- v6.1/N02: podsekcje h3, rysunki SVG → układ HTML CHE ----------
import bs4 as _bs4
H3NUM = re.compile(r'^\s*(\d+[A-Z]?)\.(\d+[a-z]?)\b')
def _h3groups(sec):
    out, cur = [], None
    for c in list(sec.children):
        if getattr(c, 'name', None) == 'h3' and H3NUM.match(c.get_text()):
            cur = [c]; out.append(cur)
        elif cur is not None and not (getattr(c, 'name', None) == 'h3'):
            cur.append(c)
        elif getattr(c, 'name', None) == 'h3': cur = None
    return out
def _find(sec, pref):
    pref = pref.strip(); g = [x for x in _h3groups(sec) if (lambda mm: mm and '%s.%s' % (mm.group(1), mm.group(2)) == pref)(H3NUM.match(x[0].get_text()))]
    assert len(g) == 1, ('podsekcja', pref, len(g)); return g[0]
def merge_h3(self, sid, prefs, title):
    """Scal podsekcje h3 (wg początku tytułu, np. '6.3') w jedną; pierwsza dostaje nowy tytuł, pozostałe stają się h4."""
    s = self.S(sid); first = _find(s, prefs[0]); num = H3NUM.match(first[0].get_text())
    first[0].string = '%s.%s %s' % (num.group(1), num.group(2), title); anchor = first[-1]
    for p in prefs[1:]:
        g = _find(s, p); h4 = self.b.new_tag('h4'); h4['class'] = 'merge-h'; h4.string = H3NUM.sub('', g[0].get_text()).strip()
        g[0].replace_with(h4); g[0] = h4
        for n in g: anchor.insert_after(n.extract()); anchor = n
    self.log('%s: scalono podsekcje %s → „%s”' % (sid, ', '.join(prefs), title))
def move_nodes_h3(self, nodes, sid, pref, title=None):
    """Dołącz węzły na koniec podsekcji h3 (pref) w sekcji sid."""
    g = _find(self.S(sid), pref); anchor = g[-1]
    if title: t = self.sub(title, 'h4'); anchor.insert_after(t); anchor = t
    for n in nodes: anchor.insert_after(n.extract()); anchor = n
def renumber_h3(self, sid, mp, old_sec=None):
    s = self.S(sid); pn = s.select_one('.part-heading .part-num').get_text().strip(); k = 0
    for g in _h3groups(s):
        m = H3NUM.match(g[0].get_text())
        if old_sec is not None and m.group(1) != old_sec: continue
        k += 1; old = '%s.%s' % (m.group(1), m.group(2)); new = '%s.%d' % (pn, k)
        mp[old] = new; g[0].string = H3NUM.sub(new, g[0].get_text(), count=1)
def svg_to_html(self, svg, mode='chips', caption=None):
    """Rysunek SVG → układ HTML CHE: 'chips' (etykiety w kolejności czytania) albo 'boxes' (pola wg prostokątów). Zwraca listę tekstów do kontroli."""
    T = []
    for t in svg.find_all('text'):
        try: x, y = float(t.get('x', 0)), float(t.get('y', 0))
        except ValueError: x, y = 0, 0
        s = re.sub(r'\s+', ' ', t.get_text()).strip()
        if s: T.append((y, x, s))
    texts = [s for *_, s in T]
    if mode == 'boxes':
        R = []
        for r in svg.find_all('rect'):
            try: R.append((float(r.get('x', 0)), float(r.get('y', 0)), float(r.get('width', 0)), float(r.get('height', 0)), r.get('stroke') or r.get('fill') or '#0d6868', []))
            except ValueError: pass
        loose = []
        for y, x, s in sorted(T):
            box = [b for b in R if b[0] - 2 <= x <= b[0] + b[2] + 2 and b[1] - 2 <= y <= b[1] + b[3] + 2]
            (min(box, key=lambda b: b[2] * b[3])[5] if box else loose).append(s)
        R = [b for b in R if b[5]]; R.sort(key=lambda b: (b[1], b[0]))
        H = '<div class="mmx">' + ''.join('<div class="mmx-box" style="--mm:%s"><b>%s</b>%s</div>' % (b[4] if b[4].startswith('#') and b[4].lower() not in ('#fff', '#ffffff') else '#0d6868', b[5][0], ('<ul>%s</ul>' % ''.join('<li>%s</li>' % i for i in b[5][1:])) if len(b[5]) > 1 else '') for b in R)
        H += ('<div class="mmx-loose">%s</div>' % ' · '.join(loose) if loose else '') + '</div>'
    else:
        seen = []
        for y, x, s in sorted(T, key=lambda a: (round(a[0] / 14), a[1])):
            if s not in seen: seen.append(s)
        H = '<div class="svgx">' + ''.join('<span>%s</span>' % s for s in seen) + '</div>'
    if caption: H += '<p class="mini-note">%s</p>' % caption
    new = _bs4.BeautifulSoup(H, 'html.parser'); svg.replace_with(new)
    return texts
SVGX_CSS = ('.svgx{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:8px 0}.svgx span{border:1px solid #cbd5e1;border-radius:8px;padding:3px 9px;background:#f8fafc;font-size:13px}'
            '.mmx{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px}.mmx-box{border:2px solid var(--mm);border-radius:10px;padding:8px 12px;background:#fff;font-family:Inter,system-ui,sans-serif;text-align:left}'
            '.mmx-box b{color:var(--mm);font-size:12.5px;letter-spacing:.04em}.mmx-box ul{margin:6px 0 0 16px;padding:0;font-size:13px}.mmx-loose{grid-column:1/-1;font-size:13px;color:#475569}.merge-h{margin:16px 0 6px}')
Merger.merge_h3 = merge_h3; Merger.move_nodes_h3 = move_nodes_h3; Merger.renumber_h3 = renumber_h3; Merger.svg_to_html = svg_to_html
