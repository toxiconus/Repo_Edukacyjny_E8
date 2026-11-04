/* KLOCEK: przewodnictwo — tester przewodnictwa z elektrolizą: bateria, żarówka, elektrody, pęcherzyki gazów na katodzie i anodzie
   + model cząsteczkowy roztworu (jony z ładunkami wędrują do elektrod). Port sceny GFX „conductivity” (07_tubeRack.js / 08_padOf.js) na canvas, bez dużego silnika.
   Opcje: roztwor = dist | sugar | HCl | H2SO4 | CH3COOH | NaOH | NaCl (HCl). Doświadczenie startuje kliknięciem „Włącz prąd”. Wymaga ui_klocki.js. */
(function () {
  var SOL = {
    dist:   {n: 'woda destylowana', f: 'H₂O', cond: .02, mol: [['H2O', 16]], t: 'nieelektrolit (prawie nie przewodzi)'},
    sugar:  {n: 'roztwór cukru', f: 'C₆H₁₂O₆', cond: .02, mol: [['SUG', 3], ['H2O', 12]], t: 'nieelektrolit — cząsteczki nie rozpadają się na jony'},
    EtOH:   {n: 'etanol', f: 'C₂H₅OH', cond: .02, mol: [['EtOH', 5], ['H2O', 8]], t: 'nieelektrolit — cząsteczki etanolu nie dysocjują na jony'},
    HCl:    {n: 'kwas solny', f: 'HCl(aq)', cond: 1, el: {cat: {f: 'H₂', n: 1}, an: {f: 'Cl₂', n: .6, col: [214, 232, 140]}, eq: 'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 Cl⁻ → Cl₂↑ + 2 e⁻'}, mol: [['H3O+', 6], ['Cl-', 6], ['H2O', 8]], t: 'elektrolit mocny — HCl całkowicie zdysocjowany: H₃O⁺ + Cl⁻'},
    H2SO4:  {n: 'kwas siarkowy(VI)', f: 'H₂SO₄(aq)', cond: 1, el: {cat: {f: 'H₂', n: 1}, an: {f: 'O₂', n: .5}, eq: 'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻ (jony SO₄²⁻ nie utleniają się)'}, mol: [['H3O+', 6], ['SO42-', 3], ['H2O', 8]], t: 'elektrolit mocny: 2 H₃O⁺ + SO₄²⁻'},
    CH3COOH: {n: 'kwas octowy', f: 'CH₃COOH(aq)', cond: .3, el: {cat: {f: 'H₂', n: .5}, an: {f: 'O₂', n: .25}, eq: 'katoda (−): 2 H⁺ + 2 e⁻ → H₂↑ · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻ — mało jonów, więc gazu niewiele'}, mol: [['CH3COOH', 5], ['H3O+', 1], ['CH3COO-', 1], ['H2O', 9]], t: 'elektrolit słaby — zdysocjowana tylko niewielka część cząsteczek'},
    NaOH:   {n: 'zasada sodowa', f: 'NaOH(aq)', cond: .95, el: {cat: {f: 'H₂', n: 1}, an: {f: 'O₂', n: .5}, eq: 'katoda (−): 2 H₂O + 2 e⁻ → H₂↑ + 2 OH⁻ (Na⁺ się nie redukuje) · anoda (+): 4 OH⁻ → O₂↑ + 2 H₂O + 4 e⁻'}, mol: [['Na+', 6], ['OH-', 6], ['H2O', 8]], t: 'elektrolit mocny: Na⁺ + OH⁻'},
    CuSO4:  {n: 'siarczan(VI) miedzi(II)', f: 'CuSO₄(aq)', cond: .9, el: {cat: {f: 'Cu (osad)', n: 0, col: [184, 115, 51]}, an: {f: 'O₂', n: .5}, eq: 'katoda (−): Cu²⁺ + 2 e⁻ → Cu (czerwonobrunatny osad) · anoda (+): 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻'}, mol: [['Cu2+', 4], ['SO42-', 4], ['H2O', 8]], t: 'sól — elektrolit mocny: Cu²⁺ + SO₄²⁻'},
    NaCl:   {n: 'roztwór soli kuchennej', f: 'NaCl(aq)', cond: .9, el: {cat: {f: 'H₂', n: 1}, an: {f: 'Cl₂', n: .6, col: [214, 232, 140]}, eq: 'katoda (−): 2 H₂O + 2 e⁻ → H₂↑ + 2 OH⁻ · anoda (+): 2 Cl⁻ → Cl₂↑ + 2 e⁻ (w roztworze stężonym)'}, mol: [['Na+', 6], ['Cl-', 6], ['H2O', 8]], t: 'elektrolit mocny: Na⁺ + Cl⁻'}
  };
  /* gatunki: r = promień, col, lab = napis, q = ładunek (+1/−1/0) */
  var SP = {
    'H2O': {r: 9, col: '#ef4444', lab: '', q: 0, wodory: 2},
    'H3O+': {r: 10, col: '#f97316', lab: 'H₃O', q: 1}, 'Cl-': {r: 10, col: '#22c55e', lab: 'Cl', q: -1},
    'SO42-': {r: 13, col: '#eab308', lab: 'SO₄', q: -2}, 'Na+': {r: 9, col: '#8b5cf6', lab: 'Na', q: 1},
    'OH-': {r: 9, col: '#dc2626', lab: 'OH', q: -1}, 'CH3COO-': {r: 12, col: '#94a3b8', lab: 'AcO', q: -1},
    'Cu2+': {r: 10, col: '#2563eb', lab: 'Cu', q: 2}, 'EtOH': {r: 13, col: '#a1a1aa', lab: 'C₂H₅OH', q: 0},
    'CH3COOH': {r: 14, col: '#a1a1aa', lab: 'CH₃COOH', q: 0}, 'SUG': {r: 15, col: '#d6b98c', lab: 'C₆H₁₂O₆', q: 0}
  };
  var ORDER = ['dist', 'sugar', 'EtOH', 'HCl', 'H2SO4', 'CH3COOH', 'NaOH', 'NaCl', 'CuSO4'];

  function ciemny() { return document.documentElement.hasAttribute('data-ciemny'); }
  function rr(c, x, y, w, h, r) { c.beginPath(); if (c.roundRect) c.roundRect(x, y, w, h, r); else c.rect(x, y, w, h); }
  function sr(i) { var v = Math.sin(i * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); }

  KLOCKI.def('przewodnictwo', {
    opis: 'Tester przewodnictwa i elektroliza: wybierasz roztwór, włączasz prąd; żarówka świeci tylko dla elektrolitów, na elektrodach pojawiają się gazy, a w modelu jony wędrują do elektrod.',
    domyslne: {roztwor: 'HCl'},
    html: function (host, opc) {
      var U = KLOCKI.ui, key = SOL[opc.roztwor] ? opc.roztwor : 'HCl', on = false, k = 0, t = 0, parts = [];
      host.style.display = 'block';
      var bar = document.createElement('div'), row = document.createElement('div'), note = document.createElement('div'), eq = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start';
      bar.style.cssText = 'margin-bottom:6px'; note.style.cssText = 'font-size:14px;margin-top:8px'; eq.style.cssText = 'font-size:13px;margin-top:4px;color:var(--muted,#5b6b73)';
      function mk(w, h, flex) { var cv = document.createElement('canvas'); cv.style.cssText = 'flex:' + flex + ' 1 ' + w * .7 + 'px;min-width:0;width:' + (flex ? '' : '') + '100%;max-width:' + w * 1.3 + 'px;height:auto;aspect-ratio:' + w + '/' + h + ';border-radius:10px;background:var(--surface-soft,#f6f8fa)'; return cv; }
      var W1 = 340, H1 = 300, W2 = 280, H2 = 300, c1 = mk(W1, H1, 3), c2 = mk(W2, H2, 2), d = Math.min(2, window.devicePixelRatio || 1);
      [[c1, W1, H1], [c2, W2, H2]].forEach(function (a) { a[0].width = a[1] * d; a[0].height = a[2] * d; });
      row.append(c1, c2);
      var btnOn = U.btn('▶ Włącz prąd', function () { on = !on; btnOn.innerHTML = on ? '⏸ Wyłącz prąd' : '▶ Włącz prąd'; });
      var chips = ORDER.map(function (id) { var b = U.chip(SOL[id].n, id === key, function () { key = id; zaznacz(); rebuild(); }); return b; });
      function zaznacz() { chips.forEach(function (b, i) { U.zaznacz(b, ORDER[i] === key); }); }
      bar.append.apply(bar, chips); bar.append(btnOn);
      host.append(bar, row, note, eq);

      function rebuild() {
        parts = []; var S = SOL[key];
        S.mol.forEach(function (m) { for (var i = 0; i < m[1]; i++) parts.push({id: m[0], x: 20 + Math.random() * (W2 - 40), y: 40 + Math.random() * (H2 - 80), vx: (Math.random() - .5) * 40, vy: (Math.random() - .5) * 40, a: Math.random() * 6.28}); });
        var E = S.el;
        note.innerHTML = '<b>' + S.n + ' ' + S.f + '.</b> ' + S.t + '. Prąd w roztworze przenoszą <b>jony</b>: kationy wędrują do <b>katody (−)</b>, aniony do <b>anody (+)</b>; im więcej jonów, tym jaśniej świeci żarówka.';
        eq.innerHTML = E ? '<b>Elektroliza:</b> ' + E.eq : 'Brak jonów — prąd nie płynie, na elektrodach nic się nie dzieje.';
      }

      function rysujTester(c) {
        var S = SOL[key], E = S.el, dk = ciemny(), glass = dk ? '#94a3b8' : '#64748b', txt = dk ? '#e2e8f0' : '#0f172a', mut = dk ? '#94a3b8' : '#64748b';
        c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, W1, H1);
        var bx = 56, bw = 230, by = 150, bh = 140, lv = .62, ltop = by + bh - bh * lv, e1 = bx + bw * .32, e2 = bx + bw * .68, ey0 = by - 30, ey1 = by + bh - 16, wy = 80;
        var bat = {x: 28, y: 20, w: 48, h: 20}, bl = {x: 270, y: 44};
        /* zlewka z cieczą */
        c.fillStyle = S.id === 'sugar' ? 'rgba(226,232,236,.7)' : 'rgba(186,230,253,.55)'; c.fillRect(bx + 2, ltop, bw - 4, by + bh - ltop - 2);
        c.strokeStyle = glass; c.lineWidth = 3; c.lineJoin = 'round'; c.beginPath(); c.moveTo(bx, by); c.lineTo(bx, by + bh - 10); c.quadraticCurveTo(bx, by + bh, bx + 10, by + bh); c.lineTo(bx + bw - 10, by + bh); c.quadraticCurveTo(bx + bw, by + bh, bx + bw, by + bh - 10); c.lineTo(bx + bw, by); c.stroke();
        /* przewody */
        var czynny = k > .12;
        function wire(pts) {
          c.lineJoin = c.lineCap = 'round'; c.beginPath(); pts.forEach(function (q, i) { i ? c.lineTo(q[0], q[1]) : c.moveTo(q[0], q[1]); }); c.strokeStyle = dk ? '#94a3b8' : '#334155'; c.lineWidth = 2.2; c.stroke();
          if (czynny) { c.setLineDash([3, 7]); c.lineDashOffset = -t * 40 * k; c.strokeStyle = 'rgba(250,204,21,.95)'; c.lineWidth = 2; c.stroke(); c.setLineDash([]); }
        }
        wire([[e1, ey0], [e1, wy], [bat.x + 8, wy], [bat.x + 8, bat.y + bat.h]]);
        wire([[bat.x + bat.w, bat.y + bat.h / 2], [bl.x - 5, bat.y + bat.h / 2], [bl.x - 5, bl.y + 24]]);
        wire([[bl.x + 5, bl.y + 26], [bl.x + 5, wy], [e2, wy], [e2, ey0]]);
        /* elektrody + pęcherzyki + podpisy */
        [e1, e2].forEach(function (x, i) {
          c.fillStyle = '#3f3f46'; rr(c, x - 4, ey0, 8, ey1 - ey0, 2); c.fill(); c.fillStyle = '#71717a'; c.fillRect(x - 4, ey0, 8, 5);
          var g = E ? (i ? E.an : E.cat) : null;
          if (g && czynny) {
            var nb = g.n ? Math.round(3 + 5 * g.n * k) : 0, col = g.col || [255, 255, 255];
            for (var j = 0; j < nb; j++) {
              var u = (t / 1.4 * (.6 + k) + sr(j + i * 9)) % 1, y = ey1 - (ey1 - ltop) * u;
              if (y > ltop + 3) { c.beginPath(); c.arc(x + (j % 2 ? 6 : -6), y, 1.4 + sr(j) * 1.5, 0, 7); c.fillStyle = 'rgba(' + col.join(',') + ',' + (.75 * k) + ')'; c.fill(); c.strokeStyle = 'rgba(80,100,120,' + (.5 * k) + ')'; c.lineWidth = .6; c.stroke(); }
            }
          }
          var lab = (i ? '(+) ' : '(−) ') + (g && czynny ? g.f : (i ? 'anoda' : 'katoda')); c.font = '800 10px system-ui,sans-serif'; var lw = c.measureText(lab).width + 8, lx = Math.max(2, Math.min(W1 - lw - 2, x - lw / 2)), ly = ey1 + 6;
          c.fillStyle = dk ? 'rgba(30,41,59,.9)' : 'rgba(255,255,255,.9)'; rr(c, lx, ly, lw, 14, 3); c.fill(); c.fillStyle = i ? '#b91c1c' : '#1d4ed8'; c.textAlign = 'center'; c.fillText(lab, lx + lw / 2, ly + 11);
        });
        /* bateria */
        c.fillStyle = dk ? '#475569' : '#1f2937'; rr(c, bat.x, bat.y, bat.w, bat.h, 3); c.fill(); c.fillStyle = '#f59e0b'; c.fillRect(bat.x + bat.w - 12, bat.y, 12, bat.h);
        c.font = '800 12px system-ui,sans-serif'; c.textAlign = 'center'; c.fillStyle = '#fff'; c.fillText('−', bat.x + 8, bat.y + 15); c.fillStyle = '#1f2937'; c.fillText('+', bat.x + bat.w - 6, bat.y + 15);
        c.font = '600 10px system-ui,sans-serif'; c.fillStyle = mut; c.fillText('4,5 V', bat.x + bat.w / 2 - 4, bat.y + bat.h + 13);
        /* żarówka */
        if (k > 0) { var R = 18 + 55 * k, g1 = c.createRadialGradient(bl.x, bl.y, 2, bl.x, bl.y, R); g1.addColorStop(0, 'rgba(255,226,120,' + .85 * k + ')'); g1.addColorStop(1, 'rgba(255,200,60,0)'); c.fillStyle = g1; c.beginPath(); c.arc(bl.x, bl.y, R, 0, 7); c.fill(); }
        c.fillStyle = 'rgba(255,250,225,' + (.18 + .75 * k) + ')'; c.strokeStyle = glass; c.lineWidth = 2; c.beginPath(); c.arc(bl.x, bl.y, 15, 0, 7); c.fill(); c.stroke();
        c.strokeStyle = k > .08 ? '#f59e0b' : '#78716c'; c.lineWidth = 1.4; c.beginPath(); c.moveTo(bl.x - 5, bl.y + 12); c.lineTo(bl.x - 4, bl.y); for (var q = 0; q < 5; q++) c.lineTo(bl.x - 4 + q * 2, bl.y + (q % 2 ? -3 : 0)); c.lineTo(bl.x + 5, bl.y + 12); c.stroke();
        c.fillStyle = dk ? '#64748b' : '#78716c'; c.fillRect(bl.x - 7, bl.y + 14, 14, 12);
        c.font = '800 12px system-ui,sans-serif'; c.fillStyle = txt; c.textAlign = 'center'; c.fillText(!on ? 'prąd wyłączony' : k > .6 ? 'świeci jasno' : k > .15 ? 'świeci słabo' : 'nie świeci', 150, 66);
        /* etykieta roztworu */
        c.font = '800 12px system-ui,sans-serif'; var lt = S.f, lw2 = c.measureText(lt).width + 14; c.fillStyle = dk ? 'rgba(30,41,59,.92)' : 'rgba(255,255,255,.93)'; rr(c, bx + bw / 2 - lw2 / 2, ltop + 6, lw2, 20, 4); c.fill(); c.fillStyle = txt; c.fillText(lt, bx + bw / 2, ltop + 20);
      }

      function rysujModel(c, dt) {
        var S = SOL[key], dk = ciemny(), glass = dk ? '#94a3b8' : '#64748b', mut = dk ? '#94a3b8' : '#64748b', czynny = k > .12, zl = 18, zr = W2 - 18, top = 34, bot = H2 - 34;
        c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, W2, H2);
        c.fillStyle = 'rgba(186,230,253,.28)'; c.fillRect(zl, top, zr - zl, bot - top);
        /* elektrody modelu */
        c.fillStyle = '#3f3f46'; c.fillRect(6, top - 6, 8, bot - top + 6); c.fillRect(W2 - 14, top - 6, 8, bot - top + 6);
        c.font = '800 11px system-ui,sans-serif'; c.textAlign = 'center'; c.fillStyle = '#1d4ed8'; c.fillText('katoda (−)', 40, 18); c.fillStyle = '#b91c1c'; c.fillText('anoda (+)', W2 - 42, 18);
        parts.forEach(function (p) {
          var sp = SP[p.id], v0 = 26;
          p.vx += (Math.random() - .5) * v0 * dt * 8; p.vy += (Math.random() - .5) * v0 * dt * 8;
          if (czynny && sp.q) p.vx += -Math.sign(sp.q) * 0 + (sp.q > 0 ? -1 : 1) * 60 * k * dt;     // kationy → katoda (lewa), aniony → anoda (prawa)
          var v = Math.hypot(p.vx, p.vy), mx = 40 + (czynny && sp.q ? 30 * k : 0); if (v > mx) { p.vx *= mx / v; p.vy *= mx / v; }
          p.x += p.vx * dt; p.y += p.vy * dt; p.a += dt * .5; var m = sp.r + 2;
          if (p.x < zl + m) { p.x = zl + m; p.vx = Math.abs(p.vx); } if (p.x > zr - m) { p.x = zr - m; p.vx = -Math.abs(p.vx); }
          if (p.y < top + m) { p.y = top + m; p.vy = Math.abs(p.vy); } if (p.y > bot - m) { p.y = bot - m; p.vy = -Math.abs(p.vy); }
          c.lineWidth = 1; c.strokeStyle = 'rgba(0,0,0,.3)';
          if (sp.wodory) {   // H₂O: O z dwoma H
            c.fillStyle = sp.col; c.beginPath(); c.arc(p.x, p.y, sp.r * .8, 0, 7); c.fill(); c.stroke();
            [-1, 1].forEach(function (s) { var ax = p.x + Math.cos(p.a + s * .9) * sp.r * 1.1, ay = p.y + Math.sin(p.a + s * .9) * sp.r * 1.1; c.fillStyle = '#e5e7eb'; c.beginPath(); c.arc(ax, ay, sp.r * .45, 0, 7); c.fill(); c.stroke(); });
          } else {
            c.fillStyle = sp.col; c.beginPath(); c.arc(p.x, p.y, sp.r, 0, 7); c.fill(); c.stroke();
            c.fillStyle = '#fff'; c.font = '700 ' + Math.max(7, Math.round(sp.r * (sp.lab.length > 3 ? .5 : .75))) + 'px system-ui,sans-serif'; c.textAlign = 'center'; c.fillText(sp.lab, p.x, p.y + sp.r * .22);
            if (sp.q) { var bx = p.x + sp.r * .85, by = p.y - sp.r * .85; c.fillStyle = sp.q > 0 ? '#ea580c' : '#2563eb'; c.beginPath(); c.arc(bx, by, 6, 0, 7); c.fill(); c.fillStyle = '#fff'; c.font = '800 9px system-ui,sans-serif'; c.fillText(Math.abs(sp.q) > 1 ? '2' + (sp.q > 0 ? '+' : '−') : (sp.q > 0 ? '+' : '−'), bx, by + 3); }
          }
        });
        c.strokeStyle = glass; c.lineWidth = 3; c.beginPath(); c.moveTo(zl, top); c.lineTo(zl, bot); c.lineTo(zr, bot); c.lineTo(zr, top); c.stroke();
        c.fillStyle = mut; c.font = '600 10px system-ui,sans-serif'; c.textAlign = 'center'; c.fillText('model roztworu: ' + S.f, W2 / 2, H2 - 10);
      }

      SOL.dist.id = 'dist'; Object.keys(SOL).forEach(function (i) { SOL[i].id = i; });
      rebuild();
      var h = U.anim(host, function (dt) {
        t += dt; var cel = on ? SOL[key].cond : 0; k += (cel - k) * Math.min(1, dt * 3);
        rysujTester(c1.getContext('2d')); rysujModel(c2.getContext('2d'), dt);
      });
    }
  });
})();
