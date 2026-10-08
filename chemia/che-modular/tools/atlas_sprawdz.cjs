// atlas_sprawdz.cjs — atlas poza silnikiem (dist/atlas.html) = atlas w pełnym labie (dist/lab.html)?
// Porównuje tekst wszystkich zakładek atlasu i HUD dla kilku pierwiastków oraz piksele sceny atomu (bez animacji).
// Użycie: node tools/atlas_sprawdz.cjs dist/lab.html dist/atlas.html   (wypisuje tylko różnice i błędy)
let pw; try { pw = require('playwright') } catch (_) { pw = require('/opt/npm-tools/node_modules/playwright') }
const path = require('path');
const SYM = ['H', 'Na', 'Cl', 'Fe', 'U'], POMIN = /^(dane|diag|lekcje|wizual)$/;

async function snap(b, f) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const err = [];
  p.on('pageerror', e => err.push(e.message.slice(0, 120)));
  await p.emulateMedia({ reducedMotion: 'reduce' });
  await p.goto('file://' + path.resolve(f));
  await p.waitForTimeout(1000);
  // pełny lab: wejście do atlasu przez ekran startowy
  await p.evaluate(() => { const G = window.CHE && CHE.HOME_GATE; if (G && G.openPanel) G.openPanel('atlas') });
  await p.waitForTimeout(400);
  const txt = await p.evaluate(async (SYM) => {
    const res = {}, w = ms => new Promise(r => setTimeout(r, ms));
    if (typeof go !== 'function') return { BRAK: 'go()' };
    const tabs = [...document.querySelectorAll('button[data-tab]')].map(x => x.dataset.tab);
    for (const s of SYM) {
      go(s); await w(80);
      for (const t of tabs) {
        const bt = document.querySelector('button[data-tab="' + t + '"]'); bt && bt.click(); await w(25);
        const pane = document.querySelector('.tabpane[data-tab="' + t + '"]');
        if (pane) res[s + ':' + t] = (pane.innerText || '').replace(/\s+/g, ' ');
      }
      const h = document.getElementById('hud'); if (h) res[s + ':hud'] = h.innerText.replace(/\s+/g, ' ');
    }
    const bt = document.querySelector('button[data-tab="atom"]'); bt && bt.click(); go('Fe'); await w(300);
    return res;
  }, SYM);
  const st = await p.$('#stage');
  const png = st && await st.isVisible() ? await st.screenshot() : null;
  await p.close();
  return { txt, err, png };
}

(async () => {
  const [A, B] = process.argv.slice(2);
  const b = await pw.chromium.launch();
  const a = await snap(b, A), x = await snap(b, B);
  await b.close();
  let ok = 0, zle = 0;
  for (const k in a.txt) {
    if (POMIN.test(k.split(':')[1])) continue;
    if (a.txt[k] === x.txt[k]) ok++; else { zle++; if (zle <= 5) { const u = String(a.txt[k]), v = String(x.txt[k]); let i = 0; while (i < u.length && u[i] === v[i]) i++; const o = Math.max(0, i - 40); console.log('RÓŻNICA', k, '@' + i, '\n  lab:  ', u.slice(o, i + 100), '\n  atlas:', v.slice(o, i + 100)); } }
  }
  const pix = a.png && x.png ? (Buffer.compare(a.png, x.png) === 0 ? 'identyczne' : 'RÓŻNE') : 'brak zrzutu';
  if (x.err.length) console.log('BŁĘDY atlasu:', x.err.slice(0, 5).join(' | '));
  console.log((zle || x.err.length || pix !== 'identyczne' ? 'FAIL' : 'OK') + ` atlas: zakładki ${ok} zgodne, ${zle} różne; scena atomu (Fe): ${pix}`);
  process.exit(zle || x.err.length ? 1 : 0);
})();
