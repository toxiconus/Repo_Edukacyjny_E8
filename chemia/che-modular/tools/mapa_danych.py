#!/usr/bin/env python3
"""mapa_danych.py — które sekcje _anon_001 tworzą lub zmieniają które dane silnika.

Buduje lab z sondą między sekcjami (__chePrb(i)), uruchamia go w Chromium i zapisuje
engine/registry/mapa_sekcji.json: {sekcja: {"data": [klucze CHE.DATA], "che": [przestrzenie CHE.*], "bytes": n}}.
Podstawa podziału danych na dziedziny (tools/dziedziny.py).
"""
import json, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
import silnik  # noqa: E402

PROBE = r"""<script>
(function(){
 function sig(v){if(v==null)return String(v);if(typeof v==='function')return 'f'+Object.keys(v).length;
  if(Array.isArray(v))return 'a'+v.length;if(typeof v==='object'){var n=0;for(var k in v)n++;return 'o'+n}return typeof v+':'+String(v).length}
 function snap(){var C=window.CHE||{},D=C.DATA||{},s={c:{},d:{},dd:{}};
  for(var k in C){try{s.c[k]=sig(C[k])}catch(e){}}
  for(var k2 in D){try{s.d[k2]=sig(D[k2]);var v=D[k2];if(v&&typeof v==='object'&&!Array.isArray(v)){var x=0;for(var q in v){var w=v[q];x+=w&&typeof w==='object'?(Array.isArray(w)?w.length:Object.keys(w).length):1}s.dd[k2]=x}}catch(e){}}
  return s}
 var prev=snap();window.__CHE_MAP=[];
 window.__chePrb=function(i){var cur=snap(),d=[],c=[];
  for(var k in cur.d)if(cur.d[k]!==prev.d[k]||cur.dd[k]!==prev.dd[k])d.push(k);
  for(var k2 in cur.c)if(cur.c[k2]!==prev.c[k2])c.push(k2);
  window.__CHE_MAP.push([i,d,c]);prev=cur};
})();
</script>"""


def main():
    cat = json.loads((ROOT / "sections/anon001_catalog.json").read_text(encoding="utf-8"))
    files = [x["file"].split("/", 1)[1] for x in cat]
    orig = silnik.module_body

    def body(c, *a, **k):
        if c["id"] == "_anon_001":
            return "".join((ROOT / "sections/anon001" / f).read_text(encoding="utf-8") + f"\n;window.__chePrb({i});\n"
                           for i, f in enumerate(files))
        return orig(c, *a, **k)

    silnik.module_body = body
    html = silnik.lab_html()
    html = html.replace("<head>", "<head>" + PROBE, 1)
    out = ROOT / "dist/_mapa/mapa.html"
    out.parent.mkdir(exist_ok=True)
    out.write_text(html, encoding="utf-8")
    js = r"""const pw=require('playwright');(async()=>{const b=await pw.chromium.launch();const p=await b.newPage();
await p.route(/^https?:/,r=>r.abort());await p.goto('file://'+process.argv[2]);await p.waitForTimeout(4000);
const m=await p.evaluate(()=>window.__CHE_MAP);require('fs').writeFileSync(process.argv[3],JSON.stringify(m));await b.close()})();"""
    jsf = ROOT / "dist/_mapa/mapa.cjs"
    jsf.write_text(js)
    raw = ROOT / "dist/_mapa/mapa.json"
    subprocess.run(["node", str(jsf), str(out), str(raw)], check=True, cwd=ROOT / "tools")
    m = json.loads(raw.read_text())
    res = {}
    for i, d, c in m:
        res[cat[i]["file"]] = {"data": d, "che": c, "bytes": cat[i]["bytes"]}
    (ROOT / "engine/registry/mapa_sekcji.json").write_text(json.dumps(res, ensure_ascii=False, indent=0), encoding="utf-8")
    print(f"sekcji: {len(res)} / {len(cat)}; z danymi: {sum(1 for v in res.values() if v['data'])}")


if __name__ == "__main__":
    main()
