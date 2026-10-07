#!/usr/bin/env python3
"""Jednorazowo: z własnych stylów starej lekcji zostawia tylko reguły dla jej własnych komponentów
(reguły zmieniające wspólne klasy — .card, .part-heading, .flashcard… — odpadają, bo wygląd daje szablon).
Użycie: styl_wlasny.py stara.html id_stylu lekcja.md"""
import re, sys
src, sid, md = sys.argv[1:4]
s = open(src, encoding='utf-8').read()
css = re.search(r'<style id="%s">(.*?)</style>' % re.escape(sid), s, re.S).group(1)
css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
app = open('/home/claude/che/out/' + [f for f in __import__('os').listdir('/home/claude/che/out') if f.startswith('CHE_lab')][0], encoding='utf-8').read()
shared = re.search(r'<style id="che-lesson-shared-css">(.*?)</style>', app, re.S).group(1)
base = set(re.findall(r'\.([a-zA-Z][\w-]*)', shared + open('szablon/lekcja.css', encoding='utf-8').read()))
base |= set(re.findall(r'class="([^"]+)"', open('dist/_tresc/N04_sole.html', encoding='utf-8').read())) and {c for x in re.findall(r'class="([^"]+)"', open('dist/_tresc/N04_sole.html', encoding='utf-8').read()) for c in x.split()}
def rules(css):
    out = []; i = 0; n = len(css)
    while i < n:
        j = css.find('{', i)
        if j < 0: break
        sel = css[i:j].strip(); d = 1; k = j + 1
        while k < n and d:
            if css[k] == '{': d += 1
            elif css[k] == '}': d -= 1
            k += 1
        out.append((sel, css[j + 1:k - 1])); i = k
    return out
def own(sel):
    for one in sel.split(','):
        cl = set(re.findall(r'\.([a-zA-Z][\w-]*)', one)); tags = re.sub(r'[.#:\[][^\s>+~]*', '', one).split()
        if cl - base: return True
        if not cl and not re.search(r'#', one): pass
    return False
keep = []; drop = 0
for sel, body in rules(css):
    if sel.startswith('@media') or sel.startswith('@supports'):
        inner = [(a, b) for a, b in rules(body) if own(a)]; drop += len(rules(body)) - len(inner)
        if inner: keep.append('%s{%s}' % (sel, ''.join('%s{%s}' % ab for ab in inner)))
    elif sel.startswith('@'): keep.append('%s{%s}' % (sel, body))
    elif own(sel): keep.append('%s{%s}' % (sel, body))
    else: drop += 1
txt = '\n'.join(keep)
m = open(md, encoding='utf-8').read()
m = re.sub(r'\n::: styl\n.*?\n:::\n', '\n', m, flags=re.S)
open(md, 'w', encoding='utf-8').write(m.rstrip('\n') + '\n\n::: styl\n%s\n:::\n' % txt)
print('zostaje', len(keep), 'reguł', len(txt), 'B; odpada', drop)
