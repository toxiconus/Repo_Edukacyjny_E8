# -*- coding: utf-8 -*-
"""md ↔ HTML: wpisuje do pliku lekcji md (sources/chemia/lekcje/<uid>.md) sekcję „Układ lekcji HTML” — spis sekcji i podsekcji
z aktualnej lekcji HTML oraz dziennik scaleń z buildera. Idempotentne (blok między znacznikami @layout).
Użycie: python3 tools/md_lesson_layout.py KOD lesson/xxx_new.html log.txt 'kotwica w pliku md' 'wersja HTML'"""
import sys, re, glob, os, html as H
code, src, logf, anchor, ver = sys.argv[1:6]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
md_path = glob.glob(os.path.join(ROOT, 'sources', 'chemia', 'lekcje', '*.%s.*.md' % code))[0]
h = open(os.path.join(ROOT, src), encoding='utf-8').read()
L = ['<!-- @layout %s -->' % code, '### Układ lekcji HTML %s (po scaleniu powtórzeń, 2026-10-07)' % ver, '',
     'Kolejność i numeracja sekcji jak w lekcji HTML. Treści nie usunięto: powtórzenia scalono w jednym miejscu, a kontrola zdań przed/po scaleniu nie wykazała utraty wiedzy.', '',
     '| Nr | Sekcja | Podsekcje |', '|---|---|---|']
for m in re.finditer(r'<section[^>]*\sid="([\w-]+)"[^>]*>\s*<div class="part-heading"><span class="part-num">([^<]+)</span>\s*(.*?)</div>', h, re.S):
    sid, num, title = m.group(1), m.group(2).strip(), re.sub(r'<[^>]+>', ' ', m.group(3))
    end = h.find('</section>', m.end()); body = h[m.end():end]
    subs = [re.sub(r'\s+', ' ', H.unescape(re.sub(r'<[^>]+>', '', x))).strip() for x in re.findall(r'<h3[^>]*>(.*?)</h3>', body, re.S)]
    subs = [s for s in subs if re.match(r'^\d+\.\d+', s)]
    A = re.sub(r'\s+', ' ', H.unescape(title)).strip()
    L.append('| %s | %s | %s |' % (num, A, '; '.join(subs) if subs else '—'))
# modele silnika ↔ aktualne numery
MOD = []
for m in re.finditer(r'<section[^>]*\sid="([\w-]+)"[^>]*>\s*<div class="part-heading"><span class="part-num">([^<]+)</span>', h):
    end = h.find('</section>', m.end()); body = h[m.end():end]; cur = m.group(2).strip()
    for x in re.finditer(r'<h3[^>]*>\s*(\d+\.\d+)|data-che-lesson-viz="([\w-]+)"[^>]*>(.*?)</div>', body, re.S):
        if x.group(1): cur = x.group(1)
        elif x.group(2) and not any(r[1] == x.group(2) for r in MOD):
            t = re.sub(r'\s+', ' ', H.unescape(re.sub(r'<[^>]+>', ' ', x.group(3)))).strip()
            MOD.append(('§' + cur, x.group(2), t[:110]))
L += ['', '**Modele silnika ↔ sekcje (numeracja aktualna):**', '', '| Sekcja | Model | Opis przycisku |', '|---|---|---|'] + ['| %s | `%s` | %s |' % r for r in MOD]
log = [l.strip()[2:] for l in open(logf, encoding='utf-8') if l.strip().startswith('- ')]
k0 = next(i for i, x in enumerate(log) if re.search(r'scalono|§5A', x)); log = log[k0:]
L += ['', '**Dziennik scaleń (builder):**', ''] + ['- ' + x for x in log] + ['<!-- @end-layout %s -->' % code, '']
blk = '\n'.join(L)
md = open(md_path, encoding='utf-8').read()
md = re.sub(r'<!-- @layout %s -->.*?<!-- @end-layout %s -->\n' % (code, code), '', md, flags=re.S)
assert md.count(anchor) == 1, ('kotwica', anchor, md.count(anchor))
md = md.replace(anchor, blk + '\n' + anchor)
md = re.sub(r'(### \d+\. Modele silnika ↔ sekcje lekcji %s)(?! \()' % code, r'\1 (numeracja sprzed scalenia — aktualna w „Układ lekcji HTML”)', md)
open(md_path, 'w', encoding='utf-8').write(md); print(os.path.basename(md_path), len(L), 'wierszy układu')
