# -*- coding: utf-8 -*-
"""Kontrola redakcji lekcji (ręczna edycja lesson/*_new.html): wiedza nie może ubyć.
Użycie: python3 tools/lesson_check.py lesson/_snap/n01_v61.html lesson/n01_new.html [lesson/edits_N01.md]
Sprawdza: (1) każde zdanie migawki istnieje w nowej wersji (dokładnie lub jako fragment pełnego tekstu) albo jest wpisane
w pliku edycji jako linia zaczynająca się od '- OLD: ' (świadoma zmiana: treść przeniesiona/przeredagowana — linia '  NEW: ' mówi gdzie/jak);
(2) przyciski modeli (data-che-lesson-viz), znaczniki data-rx/data-ox/data-hy*/data-fiz*; (3) poprawność HTML (zamknięte sekcje, unikalne id);
(4) spis treści: każdy link #id ma cel; (5) brak emoji. Kod wyjścia 1 przy błędach."""
import sys, re, collections
from bs4 import BeautifulSoup
sys.path.insert(0, 'lesson')
from lesson_merge import sentences, norm
old, new = open(sys.argv[1], encoding='utf-8').read(), open(sys.argv[2], encoding='utf-8').read()
allowed = set()
if len(sys.argv) > 3:
    try:
        for l in open(sys.argv[3], encoding='utf-8'):
            if l.startswith('- OLD: '): allowed.add(norm(l[7:]))
    except FileNotFoundError: pass
def body(h):
    a = h.find('<main'); b = h.find('</main>'); return h[a:b] if a >= 0 else h
so, sn = sentences(body(old)), sentences(body(new))
t = BeautifulSoup(body(new), 'html.parser')
for x in t(['script', 'style', 'svg']): x.decompose()
full = norm(t.get_text(' '))
lost = [s for s in so if s not in sn and s not in full and not any(s in a or a in s for a in allowed)]
err = []
if lost: err.append('ZDANIA BEZ POKRYCIA (%d) — przywróć albo dopisz do pliku edycji jako „- OLD: …”:\n  ' % len(lost) + '\n  '.join(sorted(lost)[:60]))
def attrs(h, a): return collections.Counter(re.findall(r'%s="([^"]*)"' % a, h))
for a in ('data-che-lesson-viz', 'data-rx', 'data-ox', 'data-hy', 'data-hy-sol', 'data-hy-heat', 'data-ox-col'):
    o, n = attrs(body(old), a), attrs(body(new), a)
    miss = [k for k in o if k not in n]
    if miss: err.append('%s: zniknęły wartości %s' % (a, miss[:10]))
B = BeautifulSoup(new, 'html.parser')
ids = collections.Counter(x.get('id') for x in B.find_all(id=True)); d = [k for k, v in ids.items() if v > 1]
if d: err.append('powtórzone id: %s' % d[:10])
for a in B.select('a[href^="#"]'):
    if a['href'] != '#' and not B.find(id=a['href'][1:]): err.append('link bez celu: %s' % a['href'])
if re.search(r'[\U0001F300-\U0001FAFF✅❌⭐]', new): err.append('emoji w lekcji')
if new.count('<section') != new.count('</section>'): err.append('niedomknięte <section>')
print('zdania migawki: %d, nowe: %d, znaki tekstu: %d → %d' % (len(so), len(sn), len(norm(BeautifulSoup(body(old), 'html.parser').get_text(' '))), len(full)))
print('\n'.join(err) if err else 'OK — wiedza zachowana, znaczniki i linki w porządku')
sys.exit(1 if err else 0)
