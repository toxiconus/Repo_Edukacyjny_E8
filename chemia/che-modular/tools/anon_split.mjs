// anon_split.mjs — bezstratny podział modules/_anon_001.js na sekcje (instrukcje najwyższego poziomu).
// Użycie: node tools/anon_split.mjs
// Wynik: sections/anon001/sNNN.js (+ poprzedzające białe znaki), sections/anon001_catalog.json z tagami
// przeniesionymi ze starego podziału (dopasowanie po treści) lub z prostej heurystyki słów kluczowych.
// Złożenie wszystkich sekcji po kolei = _anon_001.js bajt w bajt (sprawdza silnik.py).
import * as acorn from './node_modules/acorn/dist/acorn.mjs';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SEC = path.join(ROOT, 'sections');
const src = fs.readFileSync(path.join(ROOT, 'modules/_anon_001.js'), 'utf8');
const ast = acorn.parse(src, { ecmaVersion: 'latest' });
const norm = s => s.replace(/\s+/g, ' ').trim();
const h = s => crypto.createHash('sha1').update(norm(s)).digest('hex');

// stare tagi (stary podział był stratny, ale treść większości bloków się zgadza)
const oldTags = {};
const oldCatPath = path.join(SEC, 'anon001_catalog.json');
if (fs.existsSync(oldCatPath)) {
  for (const s of JSON.parse(fs.readFileSync(oldCatPath, 'utf8'))) {
    const f = path.join(SEC, s.file);
    if (s.file.startsWith('anon001/m') && fs.existsSync(f)) oldTags[h(fs.readFileSync(f, 'utf8'))] = s.tags;
  }
}
const KW = [['data-acids', /ACIDS|kwas/], ['data-hydroxides', /HYDROXIDES/], ['data-oxides', /OXIDES/],
  ['data-salts', /SALTS|IONIC/], ['data-elements', /ELEMENTS/], ['data-reactions', /REACTIONS/],
  ['audit', /AUDIT|audit/], ['education', /EDUCATION/], ['nuclear', /NUCLEAR|decay/], ['organic', /ORGANIC/],
  ['thermo', /THERMO|enthalp/i], ['electrochem', /ELECTROCHEM|redox/i], ['stoich', /STOICH/], ['editor', /EDITOR/]];

for (const f of fs.readdirSync(path.join(SEC, 'anon001'))) fs.unlinkSync(path.join(SEC, 'anon001', f));
const cat = [];
let pos = 0, matched = 0;
ast.body.forEach((st, i) => {
  const end = i === ast.body.length - 1 ? src.length : st.end;
  const piece = src.slice(pos, end);
  const file = `anon001/s${String(i).padStart(3, '0')}.js`;
  fs.writeFileSync(path.join(SEC, file), piece);
  let tags = oldTags[h(piece)];
  if (tags) matched++;
  else { tags = KW.filter(([, re]) => re.test(piece)).map(([t]) => t); if (!tags.length) tags = ['core']; }
  cat.push({ num: i, file, bytes: Buffer.byteLength(piece), tags });
  pos = end;
});
fs.writeFileSync(oldCatPath, JSON.stringify(cat, null, 1));
console.log('sekcji:', cat.length, 'tagi ze starego podziału:', matched, 'heurystyka:', cat.length - matched);
