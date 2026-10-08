// gfx_split.mjs — bezstratny podział GFX/VIEW na pliki per element.
// Użycie: node tools/gfx_split.mjs   (czyta modules/, pisze engine/src/gfx/)
// Wynik: engine/src/gfx/<rodzaj>/<id>.js (dokładny tekst instrukcji) +
//        engine/src/gfx/_szkielet/<moduł>.js (reszta kodu z markerami /*@@GFX rodzaj/id@@*/).
// Złożenie wszystkiego (tools/gfx_join.py) daje plik bajt w bajt = oryginał.
import * as acorn from './node_modules/acorn/dist/acorn.mjs';
import * as walk from './node_modules/acorn-walk/dist/walk.mjs';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = path.join(ROOT, 'engine/src/gfx');
const PLAN = {
  'che-lab-engine-v001': { vessel: 'vessels', effect: 'effects', sceneReg: 'scenes', P: 'rx' },
  'che-visual-library-v001': { define: 'views' },
};
const index = {};
for (const [mod, kinds] of Object.entries(PLAN)) {
  const src = fs.readFileSync(path.join(ROOT, 'modules', mod + '.js'), 'utf8');
  const ast = acorn.parse(src, { ecmaVersion: 'latest' });
  const hits = [];
  walk.ancestor(ast, {
    CallExpression(n, anc) {
      const c = n.callee;
      const nm = c.type === 'Identifier' ? c.name : c.type === 'MemberExpression' ? c.property.name : null;
      if (!kinds[nm] || !(n.arguments[0] && n.arguments[0].type === 'Literal')) return;
      const st = anc[anc.length - 2];
      if (st.type !== 'ExpressionStatement' || st.expression !== n) return;
      hits.push({ kind: kinds[nm], id: String(n.arguments[0].value), start: st.start, end: st.end });
    },
  });
  hits.sort((a, b) => a.start - b.start);
  let skel = '', pos = 0;
  const seen = {};
  index[mod] = [];
  for (const h of hits) {
    let id = h.id.replace(/[^\w.-]/g, '_');
    const key = h.kind + '/' + id;
    seen[key] = (seen[key] || 0) + 1;
    if (seen[key] > 1) id += '__' + seen[key];
    const rel = h.kind + '/' + id;
    fs.mkdirSync(path.join(OUT, h.kind), { recursive: true });
    fs.writeFileSync(path.join(OUT, rel + '.js'), src.slice(h.start, h.end));
    skel += src.slice(pos, h.start) + `/*@@GFX ${rel}@@*/`;
    pos = h.end;
    index[mod].push({ kind: h.kind, id: h.id, file: rel + '.js', bytes: Buffer.byteLength(src.slice(h.start, h.end)) });
  }
  skel += src.slice(pos);
  fs.mkdirSync(path.join(OUT, '_szkielet'), { recursive: true });
  fs.writeFileSync(path.join(OUT, '_szkielet', mod + '.js'), skel);
  console.log(mod, 'elementów:', hits.length, 'szkielet B:', Buffer.byteLength(skel));
}
fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index, null, 1));
