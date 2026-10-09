#!/usr/bin/env python3
"""Buduje wszystkie lekcje md na wspólnym szablonie (szablon/) → <przedmiot>/html/ + index.html.
Użycie: python3 narzedzia/zbuduj_wszystkie.py [pol ang bio che oli]
Gotowe lekcje chemii z modelami silnika (chemia/che-modular/lessons-md/gotowe) buduje nadal che-modular/tools/md2html.py."""
import os, sys, glob, re, html as H
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import lekcja_html as L
import opis_wizualizacji as OPIS

R = L.REPO
ZRODLA = {
    'pol': ('polski/html', ['polski/lekcje_md/*.md', 'polski/podstawy/*.md', 'polski/do_uzupelnienia/*.md', 'polski/blok_D/lekcje/*.md']),
    'bio': ('biologia/html', ['biologia/md/L*.md', 'biologia/bio/md/*.md']),
    'che': ('chemia/html', ['chemia/lekcje_md/*/*.md']),
    'ang': ('angielski/html', ['angielski/lekcje_md/*.md']),
    'oli': ('olimpiada/html', ['olimpiada/do_uzupelnienia/*_*.md']),
}

def index(p, out, rows):
    karty = ''.join('<a href="%s"><b>%s</b><span>%s</span></a>' % (H.escape(f), H.escape(k), H.escape(t)) for f, k, t in rows)
    css = L.rd(os.path.join(L.SZ, 'motywy', p + '.css'))
    acc = re.search(r'--accent:(#[0-9a-f]{6})', css).group(1)
    doc = ('<!DOCTYPE html><html lang="pl"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>'
           '<title>%s — lekcje</title><style>:root{--bg:#f6f7f9;--card:#fff;--ink:#1a2332;--mut:#5f6b78;--line:#dfe4ea;--c:%s}'
           '@media (prefers-color-scheme:dark){:root{--bg:#11161c;--card:#19212a;--ink:#e6ebf0;--mut:#9aa6b2;--line:#2c3743}}'
           'body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 Inter,system-ui,sans-serif}main{max-width:900px;margin:0 auto;padding:26px 16px}'
           'h1{font-size:24px;margin:0 0 4px}p{color:var(--mut);margin:0 0 18px}.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}'
           'a{display:block;padding:12px 14px;border:1px solid var(--line);border-left:4px solid var(--c);border-radius:10px;background:var(--card);color:inherit;text-decoration:none}'
           'a:hover{border-color:var(--c)}a b{display:block;color:var(--c);font-size:13px}a span{font-weight:600}</style></head>'
           '<body><main><h1>%s</h1><p>%d lekcji · wspólny szablon</p><div class="g">%s</div></main></body></html>') % (
        L.PRZEDMIOTY[p], acc, L.PRZEDMIOTY[p], len(rows), karty)
    open(os.path.join(out, 'index.html'), 'w', encoding='utf-8').write(doc)

def main():
    wyb = sys.argv[1:] or list(ZRODLA)
    zle = 0
    for p in wyb:
        outrel, wz = ZRODLA[p]
        out = os.path.join(R, outrel); os.makedirs(out, exist_ok=True)
        pliki = [f for w in wz for f in sorted(glob.glob(os.path.join(R, w))) if not os.path.basename(f).startswith(('README', 'X01_szablon', 'X99_'))]
        OPIS.egzekwuj(pliki, wyjdz=False)
        rows = []
        for f in pliki:
            try: meta, doc = L.render(f, p)
            except Exception as e:
                zle += 1; print('BŁĄD', os.path.relpath(f, R), '—', e); continue
            fn = os.path.splitext(os.path.basename(f))[0] + '.html'
            open(os.path.join(out, fn), 'w', encoding='utf-8').write(doc)
            rows.append((fn, meta.get('kod', ''), re.sub(r'<[^>]+>', '', L.m.inline(meta.get('tytul', '') or fn))))
        index(p, out, rows)
        print('%s: %d lekcji → %s/' % (p, len(rows), outrel))
    sys.exit(1 if zle else 0)

if __name__ == '__main__':
    main()
