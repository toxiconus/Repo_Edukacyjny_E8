#!/usr/bin/env python3
"""Kontrola: treść lekcji po md→HTML = treść oryginału (DOM po normalizacji). Użycie: porownaj.py oryginal.html nowy_tresc.html
Pomija: spis treści (generowany), skrypty, przycisk adv (tekst), skip-link, stopkę; fiszki/test porównuje tekstem."""
import re, sys
from bs4 import BeautifulSoup, NavigableString, Comment, Tag

def norm_ws(s): return re.sub(r'\s+', ' ', s)

def canon(t, out, depth=0):
    for c in t.children:
        if isinstance(c, Comment): continue
        if isinstance(c, NavigableString):
            s = norm_ws(str(c))
            if s.strip(): out.append(('T', s.strip()))
            continue
        if c.name in ('script', 'style'): continue
        a = []
        for k, v in sorted(c.attrs.items()):
            if k == 'class': v = ' '.join(v)
            a.append('%s=%s' % (k, v))
        out.append(('<', c.name + ' ' + ' '.join(a)))
        canon(c, out, depth + 1)
        out.append(('>', c.name))

def prep(path):
    soup = BeautifulSoup(open(path, encoding='utf-8').read(), 'html.parser')
    main = soup.find('main')
    for sel in ['details.toc-item', 'a.skip-link', 'footer', '#advToggle', 'script', 'style']:
        for x in main.select(sel): x.decompose()
    for x in main.select('.minimum-card'): x.name = 'section'
    fl = [norm_ws(x.get_text(' ')).strip() for x in main.select('.flashcard')]
    qz = [norm_ws(x.get_text(' ')).strip() for x in main.select('.quiz-q')]
    for x in main.select('#flashcards, #quizWrap, #quizScore'): x.clear()
    for x in main.select('#quizWrap'): x.attrs = {'id': 'quizWrap'}
    for x in main.select('#flashcards'): x.attrs = {'id': 'flashcards', 'class': ['flashcard-grid']}
    out = []; canon(main, out)
    # scal sąsiednie teksty
    m = []
    for t in out:
        if m and t[0] == 'T' and m[-1][0] == 'T': m[-1] = ('T', m[-1][1] + ' ' + t[1])
        else: m.append(t)
    return m, fl, qz

a, fa, qa = prep(sys.argv[1]); b, fb, qb = prep(sys.argv[2])
bad = 0
import difflib
sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
for op, i1, i2, j1, j2 in sm.get_opcodes():
    if op == 'equal': continue
    bad += 1
    if bad <= int(sys.argv[3]) if len(sys.argv) > 3 else 12:
        print('---', op); print('  A:', a[i1:i2][:6]); print('  B:', b[j1:j2][:6])
print('ROZNICE', bad, '| elementy', len(a), len(b), '| fiszki', len(fa), len(fb), 'tekst=' + str([x.replace(' ', '') for x in fa] == [x.replace(' ', '') for x in fb] if fa else '—'), '| test', len(qa), len(qb))
