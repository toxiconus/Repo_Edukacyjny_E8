/* test_lekcje.cjs — test renderu lekcji w Chromium 390 px (lekcje równolegle).
   Użycie: node tools/test_lekcje.cjs [--cicho] [plik.html ...]   (domyślnie dist/jeden_plik/*.html)
   Sprawdza: treść lekcji, błędy konsoli (bez sieci), ostrzeżenia CHE.CONSISTENCY, ekran startowy,
   przewijanie w bok, modele (@model) zarejestrowane i zamontowane, pracownie (@zlewka) zarejestrowane
   i każda otwiera się bez błędu; w każdym modelu klik w 3 przyciski i zmiana selecta. Jedna linia na lekcję; kod wyjścia 1 = FAIL. --cicho: tylko FAIL. */
const path = require('path'), fs = require('fs'), pw = require('playwright');
const args = process.argv.slice(2), cicho = args.includes('--cicho');
const dir = path.join(__dirname, '..', 'dist', 'jeden_plik');
const files = args.filter(a => !a.startsWith('--')).length ? args.filter(a => !a.startsWith('--'))
  : fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => path.join(dir, f));

const zrzut = (args.find(a => a.startsWith('--zrzut=')) || '').slice(8);
const wzorzec = (args.find(a => a.startsWith('--wzorzec=')) || '').slice(10);
const WZ = wzorzec && fs.existsSync(wzorzec) ? JSON.parse(fs.readFileSync(wzorzec, 'utf8')) : null;
const ZR = {};
function porownaj(name, odc) {
  ZR[name] = odc;
  if (!WZ || !WZ[name]) return [];
  // wzorzec = słowa stabilne w pełnym silniku; odchudzony musi pokazać je wszystkie (kolejność i liczby bez znaczenia)
  const roz = [];
  for (const k of Object.keys(WZ[name])) {
    const have = new Set(odc[k] || []);
    const miss = WZ[name][k].filter(x => !have.has(x));
    // sceny GFX mają narrację zależną od czasu animacji — tolerancja 40% słów
    if (/gfx-scene-/.test(k) && miss.length <= 0.4 * WZ[name][k].length) continue;
    if (miss.length) roz.push(k + '[-' + miss.length + ': ' + miss.slice(0, 4).join(' ') + ']');
  }
  return roz.length ? ['inna treść modelu niż w pełnym silniku: ' + roz.join(',')] : [];
}

async function one(b, f) {
  const p = await b.newPage({ viewport: { width: 390, height: 800 } }); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => {
    const t = m.text();
    if (m.type() === 'error' && !/Failed to load resource|ERR_/.test(t)) errs.push(t);
    if (/CONSISTENCY\] rozjazdy/.test(t)) errs.push(t);
  });
  await p.route(/^https?:/, r => r.abort());
  await p.goto('file://' + path.resolve(f)); await p.waitForTimeout(2500);
  const n = await p.evaluate(() => document.querySelectorAll('[data-che-lesson-viz]').length);
  for (let i = 0; i < n; i++) {   // modele montują się leniwie przy przewinięciu
    await p.evaluate(i => document.querySelectorAll('[data-che-lesson-viz]')[i].scrollIntoView(), i);
    await p.waitForTimeout(350);
  }
  await p.waitForTimeout(800);
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
  // interakcja + odcisk: w każdym modelu tekst po wyrenderowaniu, po każdej opcji selectów (≤2×12)
  // i po każdym z ≤6 przycisków; porównanie z wzorcem pełnego silnika wykrywa zgubione dane
  const odcisk = {};
    for (let i = 0; i < n; i++) {
    try {
      const t = await p.evaluate(async i => {
        const w = ms => new Promise(r => setTimeout(r, ms));
        const s = document.querySelectorAll('[data-che-lesson-viz]')[i]; s.scrollIntoView();
        const out = [s.innerText];
        for (const sel of [...s.querySelectorAll('select')].slice(0, 2)) {
          for (let k = 0; k < Math.min(sel.options.length, 12); k++) {
            sel.selectedIndex = k; sel.dispatchEvent(new Event('change', { bubbles: true })); await w(100); out.push(s.innerText);
          }
        }
        for (const x of [...s.querySelectorAll('button')].filter(x => !x.closest('a')).slice(0, 6)) { x.click(); await w(100); out.push(s.innerText); }
        return [s.dataset.cheLessonViz, out];
      }, i);
      odcisk[i + ':' + t[0]] = [...new Set(t[1].join(' ').split(/[^\p{L}\p{N}₀-₉⁰-⁹⁺⁻()]+/u).filter(x => x.length > 2 && !/^[\d.,]+$/.test(x)))].sort();
    } catch (e) { errs.push('model ' + i + ': ' + e.message.split('\n')[0]); }
  }
  const np = r.prac;
  for (let i = 0; i < np; i++) {   // każda pracownia: klik, chwila, Esc
    try {
      await p.evaluate(i => document.querySelectorAll('.che-prac-go')[i].scrollIntoView(), i);
      await p.locator('.che-prac-go').nth(i).click({ timeout: 3000, force: true });
      await p.waitForTimeout(500); await p.keyboard.press('Escape');
    } catch (e) { errs.push('pracownia ' + i + ': ' + e.message.split('\n')[0]); }
  }
  await p.waitForTimeout(300);
  const bl = [];
  if (errs.length) bl.push('konsola: ' + [...new Set(errs)].slice(0, 3).join(' | ').slice(0, 400));
  if (r.txt < 2000) bl.push('brak treści (' + r.txt + ' zn.)');
  if (r.start) bl.push('widoczny ekran startowy');
  if (r.bok) bl.push('przewijanie w bok');
  if (r.vizBrak.length) bl.push('model niezarejestrowany: ' + r.vizBrak.join(','));
  if (r.vizPuste.length) bl.push('model pusty: ' + r.vizPuste.join(','));
  if (r.pracBrak.length) bl.push('pracownia niezarejestrowana: ' + r.pracBrak.join(','));
  await p.close();
  bl.push(...porownaj(path.basename(f), odcisk));
  const kb = Math.round(fs.statSync(f).size / 1024);
  return { f, bl, stat: `${kb} KB, treść ${r.txt}, modele ${r.viz}, pracownie ${r.prac}` };
}

(async () => {
  const b = await pw.chromium.launch();
  const res = await Promise.all(files.map(f => one(b, f).catch(e => ({ f, bl: ['wyjątek: ' + e.message.split('\n')[0]], stat: '' }))));
  let fail = 0;
  for (const x of res) {
    if (x.bl.length) { fail++; console.log('FAIL', path.basename(x.f), '—', x.bl.join('; '), '|', x.stat); }
    else if (!cicho) console.log('OK  ', path.basename(x.f), '|', x.stat);
  }
  if (zrzut) fs.writeFileSync(zrzut, JSON.stringify(ZR));
  console.log(fail ? fail + ' FAIL' : 'OK ' + files.length + ' lekcji');
  await b.close(); process.exit(fail ? 1 : 0);
})();
