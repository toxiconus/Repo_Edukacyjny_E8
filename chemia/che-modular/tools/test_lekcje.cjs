/* test_lekcje.cjs — test renderu lekcji w Chromium 390 px.
   Użycie: node tools/test_lekcje.cjs [plik.html ...]   (domyślnie dist/jeden_plik/*.html)
   Sprawdza: treść lekcji, błędy konsoli (bez sieci), ekran startowy, przewijanie w bok,
   modele (@model) zarejestrowane i zamontowane, pracownie (@zlewka) zarejestrowane, klik w pierwszą pracownię.
   Wypisuje jedną linię na lekcję; kod wyjścia 1 = FAIL. */
const path = require('path'), fs = require('fs'), pw = require('playwright');
const dir = path.join(__dirname, '..', 'dist', 'jeden_plik');
const files = process.argv.slice(2).length ? process.argv.slice(2)
  : fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));
(async () => {
  const b = await pw.chromium.launch(); let fail = 0;
  for (const f of files) {
    const p = await b.newPage({ viewport: { width: 390, height: 800 } }); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|ERR_/.test(m.text())) errs.push(m.text()); });
    await p.route(/^https?:/, r => r.abort());
    await p.goto('file://' + path.resolve(f)); await p.waitForTimeout(2500);
    // modele montują się leniwie przy przewinięciu — przewiń do każdego
    const n = await p.evaluate(() => document.querySelectorAll('[data-che-lesson-viz]').length);
    for (let i = 0; i < n; i++) {
      await p.evaluate(i => document.querySelectorAll('[data-che-lesson-viz]')[i].scrollIntoView(), i);
      await p.waitForTimeout(400);
    }
    await p.waitForTimeout(600);
    const r = await p.evaluate(() => {
      const V = (window.CHE && CHE.VIEW && CHE.VIEW.views) || {};
      const has = id => (V instanceof Map ? V.has(id) : !!V[id]);
      const l = document.getElementById('che-landing');
      const slots = [...document.querySelectorAll('[data-che-lesson-viz]')];
      const prac = [...document.querySelectorAll('.che-prac-go')];
      return {
        txt: ((document.querySelector('.che-lfs-lesson') || {}).innerText || '').length,
        start: !!l && getComputedStyle(l).display !== 'none',
        bok: document.documentElement.scrollWidth > innerWidth,
        viz: slots.length,
        vizBrak: slots.map(s => s.dataset.cheLessonViz).filter(id => !has(id)),
        vizPuste: slots.filter(s => s.querySelectorAll('canvas,svg,button,input,select,table').length === 0).map(s => s.dataset.cheLessonViz),
        prac: prac.length,
        pracBrak: [...new Set(prac.map(x => x.dataset.prac).filter(id => id && !has(id)))],
      };
    });
    const first = await p.$('.che-prac-go');
    if (first) { try { await first.click({ timeout: 3000 }); await p.waitForTimeout(800); } catch (e) { errs.push('klik pracowni: ' + e.message.split('\n')[0]); } }
    const bl = [];
    if (errs.length) bl.push('konsola: ' + errs.slice(0, 3).join(' | ').slice(0, 300));
    if (r.txt < 2000) bl.push('brak treści (' + r.txt + ' zn.)');
    if (r.start) bl.push('widoczny ekran startowy');
    if (r.bok) bl.push('przewijanie w bok');
    if (r.vizBrak.length) bl.push('model niezarejestrowany: ' + r.vizBrak.join(','));
    if (r.vizPuste.length) bl.push('model pusty: ' + r.vizPuste.join(','));
    if (r.pracBrak.length) bl.push('pracownia niezarejestrowana: ' + r.pracBrak.join(','));
    const kb = Math.round(fs.statSync(f).size / 1024);
    const stat = `${kb} KB, treść ${r.txt}, modele ${r.viz}, pracownie ${r.prac}`;
    if (bl.length) { fail++; console.log('FAIL', path.basename(f), '—', bl.join('; '), '|', stat); }
    else console.log('OK  ', path.basename(f), '|', stat);
    await p.close();
  }
  console.log(fail ? fail + ' FAIL' : 'OK ' + files.length + ' lekcji');
  await b.close(); process.exit(fail ? 1 : 0);
})();
