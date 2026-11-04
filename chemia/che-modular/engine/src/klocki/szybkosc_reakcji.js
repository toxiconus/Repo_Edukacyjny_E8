/* KLOCEK: szybkosc-reakcji — metal + HCl, pomiar objętości H₂ w czasie (port kinetics-v01 z dużego silnika, bez GFX).
   Chipy: metal (Mg/Zn/Fe), postać (granulki/wiórki/proszek), katalizator CuSO₄; suwaki: c(HCl), temperatura, masa metalu.
   „▶ zmierz” (klik) odkręca doświadczenie: kolba z bąbelkami, metal maleje, gaz zbiera się w cylindrze, a krzywa V(t) zostaje na wykresie
   (do 4 przebiegów do porównania). Model poglądowy: v = A·S·c·e^(−Ea/RT), V = nRT/p, reagent limitujący wyznacza Vmax.
   Opcje: metal="Zn". Wymaga ui_klocki.js. Kolory metali = realne; reszta z tokenów motywu. */
(function () {
  var METAL = {Mg: {M: 24.305, Ea: 30, base: 3, col: '#c4c9d1', n: 'magnez'}, Zn: {M: 65.38, Ea: 45, base: 1, col: '#96a0ac', n: 'cynk'}, Fe: {M: 55.845, Ea: 55, base: .3, col: '#6e7076', n: 'żelazo'}};
  var FORM = {granulki: {S: 1, r: 7, k: 3}, wiorki: {S: 3, r: 4, k: 6}, proszek: {S: 8, r: 1.6, k: 16}};
  var R = 8.314, COLS = ['#2563eb', '#dc2626', '#16a34a', '#9333ea'], VAC = 50;
  var U = function () { return window.KLOCKI.ui; };
  function E(tag, css, html) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (html != null) e.innerHTML = html; return e; }
  function fm(x, n) { return Number(x).toFixed(n == null ? 0 : n).replace('.', ','); }
  function model(st) {
    var me = METAL[st.metal], f = FORM[st.form], T = st.T + 273.15;
    var k = me.base * Math.exp(-me.Ea * 1000 / R * (1 / T - 1 / 298.15)) * (st.cat && st.metal === 'Zn' ? 3 : 1);
    var nM = st.m / me.M, nH = st.c * VAC / 1000, nH2 = Math.min(nM, nH / 2), Vm = R * T / 101.325;
    return {v0: k * f.S * st.c * .9, nM: nM, nH: nH, Vmax: nH2 * Vm * 1000, lim: nM <= nH / 2 ? 'metal' : 'kwas', Vm: Vm,
      frac: Math.exp(-me.Ea * 1000 / (R * T)) / Math.exp(-me.Ea * 1000 / (R * 298.15))};
  }
  KLOCKI.def('szybkosc-reakcji', {
    opis: 'Szybkość reakcji metalu z kwasem solnym: wybierasz metal, postać, stężenie HCl, temperaturę, masę i katalizator, klikasz „zmierz” — w kolbie wydzielają się bąbelki H₂, gaz zbiera się w cylindrze, a na wykresie V(t) rośnie krzywa. Kolejne przebiegi zostają na wykresie do porównania; wyższa temperatura, większe stężenie i drobniejszy metal dają stromszą krzywą, a plateau wyznacza reagent limitujący.',
    domyslne: {metal: 'Zn'},
    html: function (host, opc) {
      host.style.display = 'block';
      var st = {metal: METAL[opc && opc.metal] ? opc.metal : 'Zn', form: 'granulki', c: 2, T: 25, m: .33, cat: false};
      var run = null, runs = [], nRun = 0, S = {V: 0, t: 0, on: false, rate: 0}, bubs = [];
      var ctrl = E('div', 'margin-bottom:6px'), chM = E('div'), chF = E('div'), chK = E('div');
      var scene = E('div', 'flex:1 1 260px;min-width:0'), chart = E('div', 'flex:1 1 280px;min-width:0'), row = E('div', 'display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start');
      var note = E('div', 'font-size:13px;margin-top:6px;border:1px solid var(--border,#cbd5e1);border-radius:10px;padding:8px 10px;line-height:1.5'), leg = E('div', 'font-size:12px;margin-top:4px;color:var(--muted,#64748b)');
      var cv = E('canvas', 'width:100%;height:240px;display:block;border-radius:10px;background:var(--surface-soft,#f6f8fa)');
      var sv = E('div'); scene.appendChild(sv); chart.append(cv, leg); row.append(scene, chart);
      function mkM() { chM.innerHTML = ''; Object.keys(METAL).forEach(function (k) { chM.appendChild(U().chip(k + ' · ' + METAL[k].n, st.metal === k, function () { st.metal = k; mkM(); upd(); })); }); }
      function mkF() { chF.innerHTML = ''; Object.keys(FORM).forEach(function (k) { chF.appendChild(U().chip(k, st.form === k, function () { st.form = k; mkF(); upd(); })); }); }
      function mkK() { chK.innerHTML = ''; chK.appendChild(U().chip('katalizator CuSO₄: ' + (st.cat ? 'wł.' : 'wył.'), st.cat, function () { st.cat = !st.cat; mkK(); upd(); })); }
      mkM(); mkF(); mkK();
      ctrl.append(chM, chF, chK,
        U().suwak('c(HCl)', .5, 4, .5, st.c, function (v, o) { st.c = v; o.textContent = fm(v, 1) + ' mol/dm³'; if (note.parentNode) upd(); }),
        U().suwak('Temperatura', 5, 60, 5, st.T, function (v, o) { st.T = v; o.textContent = v + ' °C'; if (note.parentNode) upd(); }),
        U().suwak('Masa metalu', .1, .6, .05, st.m, function (v, o) { st.m = v; o.textContent = fm(v, 2) + ' g'; if (note.parentNode) upd(); }));
      var go = U().btn('▶ zmierz', function () {
        var m = model(st); if (runs.length >= 4) runs.shift();
        run = {m: m, pts: [[0, 0]], last: 0, col: COLS[(nRun++) % 4], f: st.form, metal: st.metal,
          lab: st.metal + ', ' + st.form + ', c = ' + fm(st.c, 1) + ' M, ' + st.T + ' °C' + (st.cat ? ', CuSO₄' : '') + ' → V<sub>max</sub> ≈ ' + Math.round(m.Vmax) + ' cm³ (limituje ' + m.lim + ')'};
        runs.push(run); S.V = 0; S.t = 0; S.on = true; bubs = []; draw(); h.start();
      });
      var clr = U().btn('wyczyść wykres', function () { runs = []; run = null; S.on = false; S.V = 0; S.t = 0; bubs = []; draw(); scena(); });
      var bar = E('div', 'margin:6px 0'); bar.append(go, clr);
      host.append(ctrl, bar, row, note);
      function upd() {
        var m = model(st), me = METAL[st.metal];
        note.innerHTML = 'n(metal) = ' + fm(m.nM, 4) + ' mol · n(HCl) = ' + fm(m.nH, 3) + ' mol → reagent limitujący: <b>' + m.lim + '</b> · V<sub>max</sub>(H₂) ≈ <b>' + Math.round(m.Vmax) + ' cm³</b> (V<sub>m</sub> = ' + fm(m.Vm, 1) + ' dm³/mol w ' + st.T + ' °C)' +
          '<br>Względem 25 °C udział zderzeń skutecznych ×' + fm(m.frac, 2) + ' (E<sub>a</sub> modelowe ' + me.Ea + ' kJ/mol); szybkość początkowa ≈ ' + fm(m.v0, 2) + ' cm³/s.' +
          (st.cat && st.metal !== 'Zn' ? '<br><i>CuSO₄ przyspiesza głównie reakcję cynku (ogniwo Zn|Cu na powierzchni).</i>' : '');
        if (!S.on) scena();
      }
      function scena() {
        var m = run ? run.m : model(st), f = run ? Math.max(0, 1 - S.V / m.Vmax) : 1, me = METAL[run ? run.metal : st.metal], fo = FORM[run ? run.f : st.form];
        var mx = Math.max(100, Math.ceil(m.Vmax / 50) * 50), fill = run ? Math.min(1, S.V / mx) : 0, cy = 70 + 130 * (1 - fill);
        var lim = m.lim === 'metal' ? f : Math.max(.25, f), pcs = '';
        for (var i = 0; i < fo.k; i++) {
          var px = 74 + (i * 37 % 46) + (fo.k > 8 ? (i % 3) * 3 : 0), py = 218 - (i * 11 % 14), rr = fo.r * (.35 + .65 * lim);
          pcs += '<circle cx="' + px + '" cy="' + py + '" r="' + Math.max(.6, rr).toFixed(1) + '" fill="' + me.col + '" stroke="rgba(0,0,0,.25)" stroke-width=".6"/>';
        }
        var bb = bubs.map(function (b) { return '<circle cx="' + b.x.toFixed(1) + '" cy="' + b.y.toFixed(1) + '" r="' + b.r + '" fill="rgba(255,255,255,.55)" stroke="var(--border-strong,#64748b)" stroke-width=".7"/>'; }).join('');
        var ticks = ''; for (var j = 0; j <= 4; j++) { var ty = 70 + 130 * j / 4; ticks += '<line x1="238" y1="' + ty + '" x2="248" y2="' + ty + '" stroke="var(--muted,#64748b)"/><text x="252" y="' + (ty + 3) + '" font-size="9" fill="var(--text,#0f172a)">' + Math.round(mx * (1 - j / 4)) + '</text>'; }
        sv.innerHTML = '<svg viewBox="0 0 300 250" style="width:100%;max-width:380px;display:block;margin:0 auto" role="img" aria-label="Kolba z metalem w HCl i cylinder do zbierania wodoru">' +
          '<path d="M52 120 L52 224 Q52 236 64 236 L128 236 Q140 236 140 224 L140 120 L126 96 L126 80 L66 80 L66 96 Z" fill="none" stroke="var(--border-strong,#64748b)" stroke-width="2.5" stroke-linejoin="round"/>' +
          '<path d="M55 150 L55 224 Q55 233 64 233 L128 233 Q137 233 137 224 L137 150 Z" fill="rgba(147,197,253,.28)"/>' +
          '<rect x="60" y="76" width="72" height="8" rx="3" fill="#a3866a" stroke="rgba(0,0,0,.3)"/>' + pcs + bb +
          '<text x="96" y="248" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text,#0f172a)">HCl ' + fm(st.c, 1) + ' M, ' + st.T + ' °C</text>' +
          '<path d="M96 76 V40 H243 V' + (cy < 70 ? 70 : 70) + '" fill="none" stroke="var(--border-strong,#64748b)" stroke-width="2.5" stroke-linejoin="round"/>' +
          '<rect x="226" y="66" width="34" height="140" rx="3" fill="none" stroke="var(--border-strong,#64748b)" stroke-width="2.5"/>' +
          '<rect x="228" y="' + cy.toFixed(1) + '" width="30" height="' + (204 - cy).toFixed(1) + '" fill="rgba(186,230,253,.55)"/>' +
          '<text x="243" y="30" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text,#0f172a)">V(H₂) = ' + Math.round(S.V) + ' cm³</text>' + ticks + '</svg>';
      }
      function draw() {
        var d = Math.min(2, window.devicePixelRatio || 1), W = cv.clientWidth || 300, H = cv.clientHeight || 240;
        if (!W) return; cv.width = W * d; cv.height = H * d;
        var x = cv.getContext('2d'); x.setTransform(d, 0, 0, d, 0, 0);
        var cs = getComputedStyle(cv), txt = cs.color || '#334155', L = 42, B = H - 28, Rr = W - 10, Tp = 12;
        var tmax = Math.max(30, Math.max.apply(null, runs.map(function (r) { return r.pts[r.pts.length - 1][0]; }).concat([0]))), vmax = Math.max(20, Math.max.apply(null, runs.map(function (r) { return r.m.Vmax; }).concat([0])));
        tmax = Math.ceil(tmax / 10) * 10; vmax = Math.ceil(vmax / 20) * 20;
        x.strokeStyle = txt; x.fillStyle = txt; x.globalAlpha = .75; x.lineWidth = 1; x.font = '600 10px system-ui';
        x.beginPath(); x.moveTo(L, Tp); x.lineTo(L, B); x.lineTo(Rr, B); x.stroke(); x.textAlign = 'center';
        for (var i = 0; i <= 5; i++) x.fillText(Math.round(tmax * i / 5), L + (Rr - L) * i / 5, B + 13);
        x.fillText('t [s]', (L + Rr) / 2, H - 3); x.textAlign = 'right';
        for (i = 0; i <= 4; i++) x.fillText(Math.round(vmax * i / 4), L - 4, B - (B - Tp) * i / 4 + 3);
        x.save(); x.translate(10, (B + Tp) / 2); x.rotate(-Math.PI / 2); x.textAlign = 'center'; x.fillText('V(H₂) [cm³]', 0, 0); x.restore(); x.globalAlpha = 1;
        runs.forEach(function (r) {
          x.strokeStyle = r.col; x.lineWidth = 2.5; x.lineCap = x.lineJoin = 'round'; x.beginPath();
          r.pts.forEach(function (p, k) { var px = L + (Rr - L) * p[0] / tmax, py = B - (B - Tp) * p[1] / vmax; k ? x.lineTo(px, py) : x.moveTo(px, py); }); x.stroke();
          x.setLineDash([4, 4]); x.lineWidth = 1; var y = B - (B - Tp) * r.m.Vmax / vmax; x.beginPath(); x.moveTo(L, y); x.lineTo(Rr, y); x.stroke(); x.setLineDash([]);
        });
        leg.innerHTML = runs.length ? runs.map(function (r) { return '<span style="color:' + r.col + '">■</span> ' + r.lab; }).join('<br>') : 'Wykres pojawi się po pomiarze. Linia przerywana = V<sub>max</sub> z reagenta limitującego.';
      }
      var h = U().anim(host, function (dt) {
        if (!S.on || !run) return;
        var m = run.m, f = Math.max(0, 1 - S.V / m.Vmax), r = m.v0 * Math.pow(f, 2 / 3), step = dt * 4;   // 4× przyspieszenie czasu pomiaru
        S.rate = r; S.V = Math.min(m.Vmax, S.V + r * step); S.t += step;
        if (S.t - run.last > .25) { run.pts.push([S.t, S.V]); run.last = S.t; draw(); }
        if (Math.random() < Math.min(.9, .12 + r * .35)) bubs.push({x: 62 + Math.random() * 68, y: 224, r: 1.5 + Math.random() * 2});
        bubs.forEach(function (b) { b.y -= 60 * dt; b.x += Math.sin(b.y / 7) * .3; }); bubs = bubs.filter(function (b) { return b.y > 150; });
        if (S.V >= m.Vmax - .05 || S.t > 600) { S.on = false; run.pts.push([S.t, S.V]); bubs = []; draw(); }
        scena();
      });
      h.stop(); upd(); scena(); setTimeout(draw, 0);
      if (window.ResizeObserver) new ResizeObserver(draw).observe(cv);
    }
  });
})();
