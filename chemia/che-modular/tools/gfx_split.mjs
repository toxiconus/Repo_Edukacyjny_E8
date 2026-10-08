// gfx_split.mjs — bezstratny podział GFX/VIEW na pliki per element.
// Użycie: node tools/gfx_split.mjs   (czyta modules/, pisze engine/src/gfx/)
// Wynik: engine/src/gfx/<przedmiot>/<rodzaj>/<id>.js (dokładny tekst instrukcji) +
//        engine/src/gfx/_szkielet/<moduł>.js (reszta kodu z markerami /*@@GFX rodzaj/id@@*/).
// Przedmiot: z grup rejestru (engine/registry/assets); element wielu przedmiotów → wspolne/.
// Rodzaje: naczynia, efekty, sceny, reakcje, widoki. Przeniesienie pliku do innego przedmiotu
// nie wymaga zmian w kodzie (gfx_join szuka po rodzaju i id).
// Złożenie wszystkiego (tools/gfx_join.py) daje plik bajt w bajt = oryginał.
import * as acorn from './node_modules/acorn/dist/acorn.mjs';
import * as walk from './node_modules/acorn-walk/dist/walk.mjs';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = path.join(ROOT, 'engine/src/gfx');
const PLAN = {
  'che-lab-engine-v001': { vessel: 'naczynia', effect: 'efekty', sceneReg: 'sceny', P: 'reakcje' },
  'che-visual-library-v001': { define: 'widoki' },
};
const REG = path.join(ROOT, 'engine/registry/assets');
const subjOf = { naczynia: {}, efekty: {}, sceny: {} };
for (const [f, kind] of [['vessels.json', 'naczynia'], ['effects.json', 'efekty']]) {
  const d = JSON.parse(fs.readFileSync(path.join(REG, f), 'utf8'));
  for (const g of Object.values(d.groups || {}))
    for (const id of g.items || g.ids || [])
      for (const s of g.subjects || []) (subjOf[kind][id] ||= new Set()).add(s);
}
for (const [id, sc] of Object.entries(JSON.parse(fs.readFileSync(path.join(REG, 'scenes.json'), 'utf8')).scenes || {}))
  for (const s of sc.subjects || []) (subjOf.sceny[id] ||= new Set()).add(s);
const unclassified = [];
function subject(kind, id) {
  if (kind === 'widoki') return id.startsWith('fiz-') ? 'fizyka' : id.startsWith('che-test') ? 'wspolne' : 'chemia';
  if (kind === 'reakcje') return 'chemia';
  const s = subjOf[kind] && subjOf[kind][id];
  if (!s) { unclassified.push(kind + '/' + id); return 'chemia'; }
  if (s.has('*') || s.size > 1) return 'wspolne';
  return [...s][0];
}
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
    const subj = subject(h.kind, h.id);
    fs.mkdirSync(path.join(OUT, subj, h.kind), { recursive: true });
    fs.writeFileSync(path.join(OUT, subj, rel + '.js'), src.slice(h.start, h.end));
    skel += src.slice(pos, h.start) + `/*@@GFX ${rel}@@*/`;
    pos = h.end;
    index[mod].push({ kind: h.kind, id: h.id, subject: subj, file: subj + '/' + rel + '.js', bytes: Buffer.byteLength(src.slice(h.start, h.end)) });
  }
  skel += src.slice(pos);
  fs.mkdirSync(path.join(OUT, '_szkielet'), { recursive: true });
  fs.writeFileSync(path.join(OUT, '_szkielet', mod + '.js'), skel);
  console.log(mod, 'elementów:', hits.length, 'szkielet B:', Buffer.byteLength(skel));
}
fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index, null, 1));
if (unclassified.length) console.log('bez grupy w rejestrze (→ chemia):', unclassified.join(' '));
