# -*- coding: utf-8 -*-
"""Wspólne narzędzia przebudowy lekcji źródłowych (MASTER LAB) do standardu CHE: wycinanie widgetów, przyciski modeli silnika,
oznaczanie równań data-rx, przycinanie CSS do użytych klas, wybór skryptów, nagłówek i spis treści. Używa: n01_build.py (n02_build.py — wersja wcześniejsza, samodzielna)."""
import os, re, json, html as HT
D = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(D)
_kw = open(os.path.join(D, 'kw_new.html'), encoding='utf-8').read()
VIZ_CSS = re.search(r'<style id="che-lesson-viz-ref-style">.*?</style>', _kw, re.S).group(0)
V15_CSS = re.search(r'<style id="kw-v15-style">.*?</style>', _kw, re.S).group(0)
ADV_JS = re.search(r'<script>\(function\(\)\{var b=document\.getElementById\("advToggle"\).*?</script>', _kw, re.S).group(0)
RXN = json.load(open(os.path.join(ROOT, 'test', 'rx_norm.json'), encoding='utf-8'))
SUBT = str.maketrans('₀₁₂₃₄₅₆₇₈₉', '0123456789'); TOSUB = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
EMOJI = re.compile('[\U0001F300-\U0001FAFF⚠⚡⭐⏱-⏺]️?\\s*')

class Lesson:
    def __init__(self, code):
        self.code = code; self.log = []
    def viz(self, vid, title, sub='Model silnika CHE · otwiera się w oknie'):
        return ('<div class="che-lesson-viz-ref" data-che-lesson-viz="%s"><button type="button" data-che-open-viz="%s" '
                'onclick="parent.postMessage({type:\'CHE_LESSON_OPEN_VISUAL\',visualId:\'%s\',lessonId:\'%s\'},\'*\')"><b>%s</b><span>%s</span></button></div>\n') % (vid, vid, vid, self.code, title, sub)
    def L(self, x): self.log.append(x)

def adv(title, body, tag='poziom LO / akademicki'):
    return '<details class="adv"><summary>%s <span class="adv-tag">%s</span></summary><div class="adv-body">%s</div></details>\n' % (title, tag, body)
def note(t): return '<p class="mini-note">%s</p>\n' % t
def card(cls, label, body): return '<div class="card %s"><span class="card-label">%s</span>%s</div>\n' % (cls, label, body)
def end_of(s, i):
    tag = re.match(r'<(\w+)', s[i:]).group(1); depth = 0
    for m in re.finditer(r'<(/?)%s\b[^>]*?(/?)>' % tag, s[i:]):
        if m.group(2): continue
        depth += -1 if m.group(1) else 1
        if depth == 0: return i + m.end()
    raise ValueError('niezbalansowany ' + tag)
def start_of_attr(s, attr):
    k = s.index(attr); return s.rindex('<', 0, k)
def enclosing(s, k, tag='div', cls=None):
    """najbliższy element <tag> (opcjonalnie z klasą zaczynającą się od cls) zawierający pozycję k"""
    i = k
    while True:
        i = s.rindex('<' + tag, 0, i)
        head = s[i:s.index('>', i)]
        if end_of(s, i) > k and (cls is None or re.search(r'class="%s' % cls, head)): return i, end_of(s, i)
def cut(lz, s, attr, new, label, widget=False):
    assert s.count(attr) == 1, ('brak/dubel', attr, s.count(attr))
    if widget: i, j = enclosing(s, s.index(attr), 'div', 'widget')
    else: i = start_of_attr(s, attr); j = end_of(s, i)
    lz.L(label); return s[:i] + new + s[j:]
def rep(lz, s, old, new, label, n=1):
    if s.count(old) == 0:
        rx = re.compile(r'\s+'.join(re.escape(x) for x in old.split()))
        hits = rx.findall(s); assert len(hits) == n, (label, len(hits)); lz.L(label); return rx.sub(lambda m: new, s)
    assert s.count(old) == n, (label, s.count(old)); lz.L(label); return s.replace(old, new)
def by_text(s, text, tag='div', cls=None):
    k = s.index(text); return enclosing(s, k, tag, cls)
def section(s, sid):
    i = start_of_attr(s, 'id="%s"' % sid); return i, end_of(s, i)
def norm_eq(t):
    t = re.sub(r'<[^>]+>', '', HT.unescape(t)).translate(SUBT); t = re.sub(r'\((aq|l|s|g)\)', '', t); t = re.sub(r'\([^)]*(stop|nadmiar|szkoln|odwracaln|słaby|roztw|uproszcz|Δ|kat)[^)]*\)', '', t)
    t = t.replace('↓', '').replace('↑', '').replace(' ', '').replace(' ', '').replace('⇌', '→')
    t = re.sub(r'→\([^)]*\)', '→', t); t = t.replace('→Δ', '→')
    if '→' not in t: return None
    Lh, P = t.split('→', 1)
    def side(x):
        out = []
        for term in x.split('+'):
            m = re.match(r'^(\d*)(.+)$', term)
            if not m or not m.group(2): return None
            out.append((m.group(1) if m.group(1) not in ('', '1') else '') + m.group(2))
        return '+'.join(sorted(out))
    a, b = side(Lh), side(P)
    return a and b and a + '>' + b
def mark_rx(h):
    def f(mo):
        k = RXN.get(norm_eq(mo.group(4)) or '')
        return ('<%s class="%s" data-rx="%s">%s</%s>' % (mo.group(1), mo.group(2), k, mo.group(4), mo.group(1))) if k else mo.group(0)
    return re.sub(r'<(div|span) class="(formula-lg|equation-box|formula)"()>([^<]*→[^<]*)</\1>', f, h)
def css_blocks(c):
    out, i, n = [], 0, len(c)
    while i < n:
        j = c.find('{', i)
        if j < 0: break
        sel = c[i:j].strip(); d, k = 1, j + 1
        while d and k < n:
            d += 1 if c[k] == '{' else -1 if c[k] == '}' else 0; k += 1
        out.append((sel, c[j + 1:k - 1])); i = k
    return out
def prune_css(src, h, extra=''):
    CSS = re.sub(r'/\*.*?\*/', '', ''.join(re.findall(r'<style>(.*?)</style>', src, re.S)), flags=re.S)
    used_cls = set(x for c in re.findall(r'class="([^"]+)"', h) for x in c.split()); used_id = set(re.findall(r'id="([^"]+)"', h))
    def keep(sel):
        if sel in (':root', '*,*::before,*::after', 'body', 'html'): return False
        cls = re.findall(r'\.([\w-]+)', sel); ids = re.findall(r'#([\w-]+)', sel)
        if not cls and not ids: return False
        return all(c in used_cls for c in cls) and all(i in used_id for i in ids)
    out = []
    for sel, b in css_blocks(CSS):
        if sel.startswith('@media') or sel.startswith('@supports'):
            inner = [s + '{' + bb + '}' for s, bb in css_blocks(b) if any(keep(x.strip()) for x in s.split(','))]
            if inner: out.append(sel + '{' + ''.join(inner) + '}')
        elif sel.startswith('@keyframes'):
            if sel.split()[-1] in h: out.append(sel + '{' + b + '}')
        elif any(keep(x.strip()) for x in sel.split(',')): out.append(sel + '{' + b + '}')
    return re.sub(r'\s+', ' ', ''.join(out)) + extra, len(out)
def toc(h, first=('minimum', 'Minimum E8')):
    secs = re.findall(r'<section[^>]*\sid="([\w-]+)"[^>]*>\s*<div class="part-heading"><span class="part-num">([^<]+)</span>\s*([^<]+)', h)
    return ('<details class="toc-item" open><summary class="toc-summary">Spis treści</summary><nav class="toc-links">' + '<a class="toc-link" href="#%s">%s</a>' % first
            + ''.join('<a class="toc-link" href="#%s">%s. %s</a>' % (i, n.strip(), t.strip()) for i, n, t in secs) + '</nav></details>\n'), len(secs)
def hero(kicker, title, lead, badges):
    return ('<section class="hero card"><div class="hero-kicker">%s</div><h1>%s</h1><p class="lead">%s</p><div class="tag-row">%s</div>'
            '<button type="button" class="adv-toggle" id="advToggle" aria-pressed="false">Pokaż treści akademickie</button></section>\n') % (kicker, title, lead, ''.join('<span class="level-badge level-%s">%s</span>' % b for b in badges))
def page(title, css, body, js):
    return ('<!DOCTYPE html>\n<html lang="pl">\n<head>\n<meta charset="utf-8"/>\n<meta content="width=device-width,initial-scale=1.0" name="viewport"/>\n<title>%s</title>\n' % title
            + VIZ_CSS + V15_CSS + css + '</head>\n<body>\n<main class="page" id="main">\n' + body + '\n</main>\n' + js + '\n</body>\n</html>\n')
