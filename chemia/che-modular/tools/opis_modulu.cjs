// opis_modulu.cjs — mapa modułu z częściami (_kolejnosc.txt): co każda część definiuje, czego używa z innych części,
// z silnika (window.CHE…) i z DOM. Wynik: <katalog>/OPIS.md. Użycie: node tools/opis_modulu.cjs engine/src/moduly/_anon_004
const acorn = require('./node_modules/acorn'), walk = require('./node_modules/acorn-walk'), fs = require('fs'), path = require('path');
const dir = process.argv[2], files = fs.readFileSync(dir + '/_kolejnosc.txt', 'utf8').split(/\s+/).filter(Boolean);
const role = {}; try { fs.readFileSync(dir + '/_role.txt', 'utf8').split('\n').forEach(l => { const i = l.indexOf(':'); if (i > 0) role[l.slice(0, i).trim()] = l.slice(i + 1).trim() }) } catch (_) {}
const texts = files.map(f => fs.readFileSync(dir + '/' + f, 'utf8')), src = texts.join('');
const off = []; let o = 0; texts.forEach((t, i) => { off.push(o); o += t.length });
const fileAt = p => { let r = 0; off.forEach((s, i) => { if (p >= s) r = i }); return r };
const ast = acorn.parse(src, { ecmaVersion: 'latest', locations: true });
const def = {}, owner = {};
ast.body.forEach(n => { const i = fileAt(n.start), add = id => { (def[i] = def[i] || []).push(id); owner[id] = owner[id] ?? i };
  if (n.type === 'FunctionDeclaration') add(n.id.name);
  else if (n.type === 'VariableDeclaration') n.declarations.forEach(d => d.id.type === 'Identifier' && add(d.id.name)) });
const uses = files.map(() => new Map()), che = files.map(() => new Set()), dom = files.map(() => new Set());
walk.fullAncestor(ast, (n, anc) => {
  const i = fileAt(n.start);
  if (n.type === 'Identifier' && owner[n.name] != null && owner[n.name] !== i) {
    const p = anc[anc.length - 2];
    if (!(p && p.type === 'MemberExpression' && p.property === n && !p.computed) && !(p && p.type === 'Property' && p.key === n && !p.computed)) {
      const j = owner[n.name]; if (!uses[i].has(j)) uses[i].set(j, new Set()); uses[i].get(j).add(n.name) }
  }
  if (n.type === 'MemberExpression' && !n.computed) { const s = src.slice(n.start, n.end).replace(/\s+/g, ''); const m = s.match(/^(?:window\.)?CHE\??\.([A-Za-z_]+)(?:\??\.([A-Za-z_0-9]+))?/); if (m) che[i].add(m[1] + (m[2] && m[1] === 'DATA' ? '.' + m[2] : '')) }
  if (n.type === 'CallExpression' && n.arguments[0] && n.arguments[0].type === 'Literal' && typeof n.arguments[0].value === 'string') {
    const c = src.slice(n.callee.start, n.callee.end); if (/^\$$|getElementById$/.test(c)) dom[i].add(n.arguments[0].value) }
});
const kb = t => (t.length / 1024).toFixed(1) + ' KB';
let md = `# ${path.basename(dir)} — mapa części (generowana: \`node tools/opis_modulu.cjs ${dir}\`)\n\n`;
md += 'Części składają się (w kolejności `_kolejnosc.txt`) w moduł bajt w bajt — zmiana podziału nie zmienia silnika. Role: `_role.txt`.\n\n';
md += '| część | rola | rozmiar |\n|---|---|---|\n' + files.map((f, i) => `| \`${f}\` | ${role[f] || ''} | ${kb(texts[i])} |`).join('\n') + '\n\n';
md += '## Zależności części\n\n';
files.forEach((f, i) => {
  md += `### ${f}\n- definiuje: ${(def[i] || []).map(x => '`' + x + '`').join(' ') || '—'}\n`;
  const u = [...uses[i]].sort((a, b) => a[0] - b[0]).map(([j, s]) => `${files[j].replace('.js', '')} (${[...s].slice(0, 12).join(', ')}${s.size > 12 ? ', …' : ''})`);
  md += `- używa z innych części: ${u.join('; ') || '—'}\n`;
  if (che[i].size) md += `- z silnika (CHE): ${[...che[i]].join(', ')}\n`;
  if (dom[i].size) md += `- DOM (id): ${[...dom[i]].slice(0, 30).join(' ')}${dom[i].size > 30 ? ' …' : ''}\n`;
  md += '\n';
});
fs.writeFileSync(dir + '/OPIS.md', md);
console.log('→ ' + dir + '/OPIS.md (' + files.length + ' części, ' + Object.keys(owner).length + ' nazw)');
