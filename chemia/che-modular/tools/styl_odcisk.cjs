/* Odcisk wyglądu lekcji: computed style każdego elementu (+ ::before/::after, także w shadow DOM) po zamontowaniu modeli.
   Użycie: node tools/styl_odcisk.cjs --zapisz=odcisk.json [--szer=390] [plik.html ...]   (domyślnie dist/jeden_plik/*.html)
           node tools/styl_odcisk.cjs --porownaj=odcisk.json [...]   → różnice (exit 1, jeśli są)
   Do odchudzania CSS: odcisk przed i po zmianie musi być identyczny (pomijane: właściwości animowane). */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const args = process.argv.slice(2);
const opt = k => (args.find(a => a.startsWith('--' + k + '=')) || '').slice(k.length + 3);
const szer = +(opt('szer') || 390), zap = opt('zapisz'), por = opt('porownaj');
let pliki = args.filter(a => !a.startsWith('--'));
if (!pliki.length) pliki = fs.readdirSync('dist/jeden_plik').filter(f => f.endsWith('.html')).map(f => 'dist/jeden_plik/' + f);
const ZBIERZ = () => {
  const POMIN = /^(transform|opacity|transition|animation|offset|d$|cx|cy|r$|x$|y$|width|height|inline-size|block-size|perspective-origin|transform-origin|stroke-dashoffset|caret|will-change|top|left|right|bottom|inset)/;
  const out = {}; let licz = {};
  const opis = cs => { const a = []; for (let i = 0; i < cs.length; i++) { const k = cs[i]; if (!POMIN.test(k)) a.push(k + ':' + cs.getPropertyValue(k)); } return a.sort().join(';'); };
  const sciezka = (el, pref) => { const t = el.tagName.toLowerCase(); const c = (el.getAttribute('class') || '').trim().split(/\s+/).filter(x => x && !/^(is-|on$|active|open|show|anim|hov)/.test(x)).sort().slice(0, 3).join('.'); return pref + '>' + t + (el.id ? '#' + el.id : '') + (c ? '.' + c : ''); };
  const chodz = (root, pref) => {
    for (const el of root.querySelectorAll('*')) {
      if (el.closest && el.closest('svg') && el.tagName.toLowerCase() !== 'svg') continue;   // wnętrze SVG = rysunek, nie CSS
      let k = sciezka(el, pref); licz[k] = (licz[k] || 0) + 1; k += '#' + licz[k];
      out[k] = opis(getComputedStyle(el)) + '|B' + opis(getComputedStyle(el, '::before')) + '|A' + opis(getComputedStyle(el, '::after'));
      if (el.shadowRoot) chodz(el.shadowRoot, k);
    }
  };
  chodz(document, '');
  return out;
};
(async () => {
  const b = await chromium.launch(); const wyn = {};
  const kolejka = pliki.slice();
  const pracownik = async () => { let f; while ((f = kolejka.shift())) {
    const p = await b.newPage({ viewport: { width: szer, height: 800 } });
    await p.route(/^https?:/, r => r.abort());
    await p.emulateMedia({ reducedMotion: 'reduce' });
    await p.goto('file://' + path.resolve(f)); await p.waitForTimeout(2500);
    const n = await p.evaluate(() => document.querySelectorAll('[data-che-lesson-viz]').length);
    for (let i = 0; i < n; i++) { await p.evaluate(i => document.querySelectorAll('[data-che-lesson-viz]')[i].scrollIntoView(), i); await p.waitForTimeout(350); }
    await p.waitForTimeout(800);
    const o = await p.evaluate(ZBIERZ);
    const h = {}; for (const [k, v] of Object.entries(o)) h[k] = args.includes('--surowe') ? v : crypto.createHash('sha1').update(v).digest('hex').slice(0, 10);
    wyn[path.basename(f)] = h; await p.close();
  } };
  await Promise.all(Array.from({ length: +(opt('rown') || 4) }, pracownik));
  await b.close();
  if (zap) { fs.writeFileSync(zap, JSON.stringify(wyn)); console.log('zapisano', Object.keys(wyn).length, 'lekcji'); }
  if (por) {
    const W = JSON.parse(fs.readFileSync(por, 'utf8')); let zle = 0;
    for (const [l, h] of Object.entries(wyn)) {
      const w = W[l] || {}; const r = [];
      for (const k of new Set([...Object.keys(w), ...Object.keys(h)])) if (w[k] !== h[k]) r.push(k + (k in h ? '' : ' [brak]') + (k in w ? '' : ' [nowy]'));
      if (r.length) { zle++; console.log('RÓŻNICA', l, r.length, r.slice(0, 5).join(' | ')); }
    }
    console.log(zle ? `różnice w ${zle} lekcjach` : 'odcisk identyczny'); process.exit(zle ? 1 : 0);
  }
})();
