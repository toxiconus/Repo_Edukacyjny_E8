#!/usr/bin/env python3
"""Wydziela z zbudowanej aplikacji v0_57 wspólny pakiet wizualizacji i samodzielne lekcje.
Wejście: out/CHE_lab_wizualizacje_*.html (python3 build.py). Wyjście: dist/
  che-viz.js      — silnik + dane + GFX + widoki + style (zamrożone; bez treści lekcji)
  <KOD>_<nazwa>.html — lekcja: treść (JSON jak w aplikacji) + <script src="che-viz.js"> + start
  index.html      — spis lekcji
Lekcja otwiera się tym samym kodem co w aplikacji (CHE.HOME_GATE.openLesson), więc wygląd i modele są identyczne."""
import os, re, sys, json, glob, html as H
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = sorted(glob.glob(os.path.join(ROOT, 'out', 'CHE_lab_wizualizacje_*.html')))[-1]
s = open(src, encoding='utf-8').read()
DIST = os.path.join(ROOT, 'dist'); os.makedirs(DIST, exist_ok=True)

# lekcje: id rejestru -> (id źródła JSON, nazwa pliku)
LESSONS = [('N01', 'che-n01-src', 'N01_tlenki'), ('N02', 'che-n02-src', 'N02_wodorotlenki'),
           ('N03', 'che-kw-src', 'N03_kwasy'), ('N04', 'che-sole-src', 'N04_sole'),
           ('FIZ-01', 'fiz-elektro-src', 'FIZ01_elektrostatyka')]

head = re.search(r'<head>(.*?)</head>', s, re.S).group(1)
body = re.search(r'<body[^>]*>(.*)</body>', s, re.S).group(1)
body_cls = re.search(r'<body([^>]*)>', s).group(1)
head = re.sub(r'<meta[^>]*>\s*', '', head)
head = re.sub(r'<title>.*?</title>\s*', '', head, flags=re.S)

srcs = {}
for lid, sid, fn in LESSONS:
    m = re.search(r'<script type="application/json" id="%s">.*?</script>' % re.escape(sid), body, re.S)
    if not m: sys.exit('brak źródła ' + sid)
    srcs[lid] = m.group(0); body = body.replace(m.group(0), '')

STANDALONE = r'''<style id="che-standalone-css">
html.che-standalone #che-landing,html.che-standalone #che-project-shell{display:none!important}
</style>
<script id="che-standalone-v001">
(function(){var C=window.CHE=window.CHE||{};
C.STANDALONE={version:'1.1',open:function(id,o){o=o||{};var back=o.back||'index.html';
 function go(){document.documentElement.setAttribute('data-che-ui','ready');
  var L=C.LESSONS=C.LESSONS||{};L.registry=L.registry||{};
  if(o.source){var m=L.registry[id]||{id:id,code:id,status:'active',visuals:[],dataScope:[],subject:'chemia'};m.source=o.source;if(o.title)m.title=o.title;if(o.uid)m.uid=o.uid;L.registry[id]=m}
  if(!C.HOME_GATE||!C.HOME_GATE.openLesson){document.body.insertAdjacentHTML('afterbegin','<p style="padding:20px">Brak silnika lekcji (che-viz.js).</p>');return}
  C.HOME_GATE.openLesson(id);
  var b=document.getElementById('che-lfs-close');
  if(b){b.textContent='← Spis lekcji';b.onclick=function(){location.href=back}}}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(go,0)});else setTimeout(go,0);}};
})();
</script>
'''
payload = head + body + STANDALONE
js = ('/* che-viz.js — wspólny pakiet CHE (silnik, dane, GFX, widoki, style) z %s. ZAMROŻONY: nie edytować ręcznie.\n'
      '   Źródła: gałąź claude/che-lab-archiwum-v0_57; odtworzenie: python3 build.py && python3 tools/split_viz.py */\n'
      'document.documentElement.classList.add("che-standalone");\ndocument.write(%s);\n') % (os.path.basename(src), json.dumps(payload, ensure_ascii=False))
open(os.path.join(DIST, 'che-viz.js'), 'w', encoding='utf-8').write(js)

ver = json.load(open(os.path.join(ROOT, 'manifest.json')))['version']
reg = {}
m = re.findall(r"L\.register\('([^']+)',\{code:'[^']*',uid:'[^']*',title:'([^']*)'.*?description:'([^']*)'", s)
for lid, t, d in m: reg[lid] = (t, d)
rows = []
for lid, sid, fn in LESSONS:
    t, d = reg.get(lid, (lid, ''))
    page = ('<!DOCTYPE html>\n<html lang="pl">\n<head>\n<meta charset="utf-8"/>\n'
            '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>\n'
            '<title>%s · %s</title>\n</head>\n<body%s>\n%s\n<script src="che-viz.js"></script>\n'
            '<script>CHE.STANDALONE.open(%s)</script>\n</body>\n</html>\n') % (lid, H.escape(t), body_cls, srcs[lid], json.dumps(lid))
    open(os.path.join(DIST, fn + '.html'), 'w', encoding='utf-8').write(page)
    rows.append('<a class="k" href="%s.html"><b>%s</b><span>%s</span><small>%s</small></a>' % (fn, lid, H.escape(t), H.escape(d)))
idx = '''<!DOCTYPE html><html lang="pl"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>CHE · lekcje</title><style>
:root{--bg:#f4f6f8;--card:#fff;--ink:#18212b;--mut:#5f6b78;--line:#dbe2e8;--acc:#0d6868}
@media (prefers-color-scheme:dark){:root{--bg:#11161b;--card:#1a2129;--ink:#e6ebf0;--mut:#9aa6b2;--line:#2c3640;--acc:#5cc2c2}}
body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 system-ui,sans-serif}
main{max-width:860px;margin:0 auto;padding:24px 16px}h1{font-size:22px;margin:0 0 4px}p{color:var(--mut);margin:0 0 18px}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.k{display:flex;flex-direction:column;gap:4px;padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--card);color:inherit;text-decoration:none}
.k:hover{border-color:var(--acc)}.k b{color:var(--acc);font-size:13px}.k span{font-weight:700}.k small{color:var(--mut)}
</style></head><body><main><h1>CHE · lekcje</h1><p>Silnik v%s (zamrożony) · wspólne wizualizacje <code>che-viz.js</code></p>
<div class="g">%s</div></main></body></html>
''' % (ver, '\n'.join(rows))
open(os.path.join(DIST, 'index.html'), 'w', encoding='utf-8').write(idx)
for f in sorted(os.listdir(DIST)): print(f, os.path.getsize(os.path.join(DIST, f)))
