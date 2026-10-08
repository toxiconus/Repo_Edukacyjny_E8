// atlas_sprawdz.cjs — atlas poza silnikiem (dist/atlas.html) = atlas w pełnym labie (dist/lab.html)?
// Porównuje tekst wszystkich zakładek atlasu i HUD dla kilku pierwiastków oraz piksele rysunków canvas (bohr, cloud) — bez animacji.
// Użycie: node tools/atlas_sprawdz.cjs dist/lab.html dist/atlas.html   (wypisuje tylko różnice i błędy)
//        node tools/atlas_sprawdz.cjs dist/lab.html --zapisz wz.json ; node tools/atlas_sprawdz.cjs --wzorzec wz.json dist/atlas.html
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
    // rysunki atlasu (canvas): porównanie pikseli, bez zależności od ramki strony
    for (const id of ['bohr', 'cloud']) { const c = document.getElementById(id); if (c && c.toDataURL) res['canvas:' + id] = c.toDataURL(); }
    // scenariusze atomu Bohra: zoom (jądro + lupa), podświetlenie powłoki/podpowłoki, różne pierwiastki
    const cv = document.getElementById('bohr');
    if (cv && typeof bohr === 'function' && typeof GEO !== 'undefined') {
      for (const s of ['H', 'Na', 'Fe', 'U']) {
        go(s); await w(60); bohr(0); res['canvas:bohr-' + s] = cv.toDataURL();
        GEO.sel = 2; GEO.hl = '2p'; bohr(0); res['canvas:bohr-hl-' + s] = cv.toDataURL(); GEO.sel = 0; GEO.hl = null;
        zt = 0.7; for (let i = 0; i < 80; i++) bohr(0); res['canvas:bohr-z07-' + s] = cv.toDataURL();
        zt = zNuc * 0.6; for (let i = 0; i < 120; i++) bohr(0); res['canvas:bohr-zjadro-' + s] = cv.toDataURL();
        zt = 1; for (let i = 0; i < 120; i++) bohr(0);
      }
      res['txt:geo'] = JSON.stringify(GEO);
      // diagram orbitali (SVG #lev): atomy i jony (duchy usuniętych elektronów)
      if (typeof levels === 'function') for (const s of ['O', 'Fe', 'Cu', 'Pd', 'Gd']) { go(s); await w(40); res['txt:lev-' + s] = levels(); for (const q of [2, -1]) { if (typeof chg !== 'undefined') { chg = q; try { res['txt:lev-' + s + q] = levels() + (document.getElementById('levsum') || {}).innerHTML } catch (e) { res['txt:lev-' + s + q] = 'ERR ' + e.message } chg = 0 } } }
      // pasek izotopów: HTML dla kilku pierwiastków i klik w drugi izotop
      for (const s of ['H', 'C', 'Cl', 'U']) { go(s); await w(40); const ib = document.getElementById('isobar'); if (!ib) break; res['txt:isobar-' + s] = ib.innerHTML;
        const b2 = ib.querySelectorAll('[data-i]')[1]; if (b2) { b2.click(); await w(30); res['txt:isobar-klik-' + s] = ib.innerHTML + '|' + isoA + '|' + (document.getElementById('bohrinfo') || {}).innerHTML; isoA = null; } }
    }
    return res;
  }, SYM);
  const png = null;
  await p.close();
  return { txt, err, png };
}

(async () => {
  // --wzorzec plik.json: A to zapisany wynik (szybciej, np. w odchudzaniu); --zapisz plik.json: zapisz wynik A
  const arg = process.argv.slice(2), opt = n => { const i = arg.indexOf(n); return i < 0 ? null : arg.splice(i, 2)[1] };
  const wz = opt('--wzorzec'), zap = opt('--zapisz'), fs = require('fs');
  const [A, B] = arg;
  const b = await pw.chromium.launch();
  const a = wz ? { txt: JSON.parse(fs.readFileSync(wz, 'utf8')), err: [] } : await snap(b, A);
  if (zap) { fs.writeFileSync(zap, JSON.stringify(a.txt)); if (!B) { await b.close(); console.log('zapisano ' + zap); return } }
  const x = await snap(b, wz ? A : B);
  await b.close();
  let ok = 0, zle = 0, pz = 0, pzle = [];
  for (const k in a.txt) {
    if (POMIN.test(k.split(':')[1])) continue;
    if (k.startsWith('canvas:')) { if (a.txt[k] === x.txt[k]) pz++; else pzle.push(k.slice(7)); continue; }
    if (a.txt[k] === x.txt[k]) ok++; else { zle++; if (zle <= 5) { const u = String(a.txt[k]), v = String(x.txt[k]); let i = 0; while (i < u.length && u[i] === v[i]) i++; const o = Math.max(0, i - 40); console.log('RÓŻNICA', k, '@' + i, '\n  lab:  ', u.slice(o, i + 100), '\n  atlas:', v.slice(o, i + 100)); } }
  }
  if (x.err.length) console.log('BŁĘDY atlasu:', x.err.slice(0, 5).join(' | '));
  console.log((zle || pzle.length || x.err.length ? 'FAIL' : 'OK') + ` atlas: zakładki ${ok} zgodne, ${zle} różne; rysunki canvas: ${pz} identyczne (różnych obrazów: ${new Set(Object.keys(x.txt).filter(k => k.startsWith('canvas:')).map(k => x.txt[k])).size})` + (pzle.length ? ', RÓŻNE: ' + pzle.join(',') : ''));
  process.exit(zle || pzle.length || x.err.length ? 1 : 0);
})();
