# -*- coding: utf-8 -*-
"""docs/INDEX_KODU.md — spis kawałków z manifest.json: plik, linie, KB, id skryptu, API CHE.*, widoki, lekcje, pierwsze funkcje.
Czytaj ten spis zamiast plików; otwieraj tylko moduł, który zmieniasz."""
import os, re, json
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
man = json.load(open(os.path.join(ROOT, 'manifest.json'), encoding='utf-8'))
def rd(p): return open(os.path.join(ROOT, p), encoding='utf-8').read()
rows, api_all, views_all = [], {}, {}
for i, m in enumerate(man['pieces']):
    if m['t'] == 'gfx':
        txt = ''.join(rd('src/' + f) for f in man['gfx_order']); f = 'src/{' + ','.join(x[:-3] for x in man['gfx_order']) + '}'
    elif m['t'] == 'lesson':
        txt = rd(m['f']); f = m['f']
    else:
        txt = rd(m['f']); f = m['f']
    sid = ','.join(re.findall(r'<(?:script|style)[^>]*\bid="([^"]+)"', txt))[:60]
    apis = sorted(set(re.findall(r'\b(?:C|CHE)\.([A-Z][A-Z0-9_]{1,})\s*=(?!=)', txt)))
    views = re.findall(r"""\.define\(\s*['"]([\w:-]{3,})['"]\s*,\s*\{""", txt) + re.findall(r"""defineView\(\s*['"]([\w:-]+)['"]""", txt) + re.findall(r"""define\(\s*['"]([a-z0-9]+-[\w-]+)['"]\s*,\s*\{title""", txt)
    views = sorted(set(views))
    les = sorted(set(re.findall(r"L\.register\('(\w+)'", txt)))
    fns = re.findall(r'\bfunction\s+([A-Za-z_]\w{2,})', txt)[:6]
    for a in apis: api_all.setdefault(a, []).append(i)
    for v in views: views_all.setdefault(v, i)
    rows.append((i, m['t'], f, txt.count('\n') + 1, len(txt.encode('utf-8')) // 1024, sid, apis, views, les, fns))
L = ['# INDEX_KODU — wygenerowany przez tools/index.py (nie edytować ręcznie)', '',
     'Wersja manifestu: %s · kawałków: %d. Typy: **base** = moduł w `modules/base/` (edytuj bezpośrednio), **src** = plik w `src/`, **gfx** = blok GFX z `src/` (kolejność w manifeście), **lesson** = lekcja `lesson/*_new.html` (edytuj builder `lesson/*_build.py`).' % (man['version'], len(rows)), '',
     '## API CHE.* → kawałek', '', ' · '.join('`%s` %s' % (a, ','.join('#%d' % x for x in v)) for a, v in sorted(api_all.items())), '',
     '## Widoki → kawałek', '', ' · '.join('`%s` #%d' % (v, i) for v, i in sorted(views_all.items())), '',
     '## Kawałki (kolejność składania)', '', '| # | typ | plik | linie | KB | id | API | widoki | lekcje | funkcje |', '|---|---|---|---|---|---|---|---|---|---|']
for i, t, f, ln, kb, sid, apis, views, les, fns in rows:
    L.append('| %d | %s | `%s` | %d | %d | %s | %s | %s | %s | %s |' % (i, t, f, ln, kb, sid, ' '.join(apis[:8]) + (' …' if len(apis) > 8 else ''), ' '.join(views[:5]) + (' …+%d' % (len(views) - 5) if len(views) > 5 else ''), ' '.join(les), ' '.join(fns)))
open(os.path.join(ROOT, 'docs', 'INDEX_KODU.md'), 'w', encoding='utf-8').write('\n'.join(L) + '\n')
print('INDEX_KODU.md:', len(rows), 'kawałków,', len(api_all), 'API,', len(views_all), 'widoków')
