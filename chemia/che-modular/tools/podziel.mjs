// podziel.mjs — bezstratny podział dużego pliku JS na mniejsze części (do edycji i czytania).
// Użycie: node tools/podziel.mjs <plik.js> <katalog> [cel_KB=24]
// Tnie na granicach instrukcji najwyższego poziomu; gdy jedna instrukcja jest za duża i jest
// IIFE / funkcją / try / blokiem — schodzi do jej wnętrza. Kolejne instrukcje łączy w części ~cel_KB.
// Wynik: <katalog>/NN_nazwa.js + _kolejnosc.txt. Złożenie (tools/scal.py) = plik bajt w bajt.
import * as acorn from './node_modules/acorn/dist/acorn.mjs';
import fs from 'fs';
import path from 'path';

const [file, outDir, celKB = '24'] = process.argv.slice(2);
const CEL = +celKB * 1024;
const src = fs.readFileSync(file, 'utf8');
const ast = acorn.parse(src, { ecmaVersion: 'latest', allowReturnOutsideFunction: true });

function inner(n) {   // lista instrukcji wewnątrz dużej instrukcji (albo null)
  if (n.type === 'TryStatement') return n.block.body;
  if (n.type === 'BlockStatement') return n.body;
  if (n.type === 'FunctionDeclaration') return n.body.body;
  let e = n.type === 'ExpressionStatement' ? n.expression : null;
  if (n.type === 'VariableDeclaration' && n.declarations.length === 1) e = n.declarations[0].init;
  while (e && (e.type === 'UnaryExpression' || e.type === 'ParenthesizedExpression')) e = e.argument || e.expression;
  if (e && e.type === 'CallExpression') e = e.callee;
  while (e && e.type === 'ParenthesizedExpression') e = e.expression;
  if (e && /Function/.test(e.type) && e.body && e.body.type === 'BlockStatement') return e.body.body;
  return null;
}
function name(n) {
  const id = n.id?.name || n.declarations?.[0]?.id?.name || n.expression?.left?.property?.name
    || n.expression?.left?.name || n.expression?.callee?.name || n.expression?.callee?.property?.name || '';
  return String(id).replace(/[^\w-]/g, '').slice(0, 28);
}
// granice cięcia: lista [offset, nazwa] — zawsze cięcie na końcu instrukcji
const cuts = [];
function walk(list) {
  for (const n of list) {
    const sub = n.end - n.start > CEL * 1.5 ? inner(n) : null;
    if (sub && sub.length > 1) { walk(sub); cuts.push([n.end, name(n) + '_koniec']); }
    else cuts.push([n.end, name(n)]);
  }
}
walk(ast.body);
cuts.sort((a, b) => a[0] - b[0]);
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
const parts = [];
let start = 0, acc = 0, first = '';
for (let i = 0; i < cuts.length; i++) {
  const [end, nm] = cuts[i];
  acc = end - start; if (!first && nm) first = nm;
  const last = i === cuts.length - 1;
  if (acc >= CEL || last) {
    const stop = last ? src.length : end;
    const fn = String(parts.length + 1).padStart(2, '0') + '_' + (first || 'czesc') + '.js';
    fs.writeFileSync(path.join(outDir, fn), src.slice(start, stop));
    parts.push(fn); start = stop; first = '';
  }
}
if (start < src.length) {   // ogon bez instrukcji (komentarze, białe znaki)
  const fn = String(parts.length + 1).padStart(2, '0') + '_ogon.js';
  fs.writeFileSync(path.join(outDir, fn), src.slice(start)); parts.push(fn);
}
fs.writeFileSync(path.join(outDir, '_kolejnosc.txt'), parts.join('\n') + '\n');
const sizes = parts.map(p => fs.statSync(path.join(outDir, p)).size);
console.log(path.basename(file), '→', parts.length, 'części, max', Math.round(Math.max(...sizes) / 1024), 'KB');
