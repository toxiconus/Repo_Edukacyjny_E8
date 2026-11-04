/* KLOCEK: stechiometria — kalkulator stechiometryczny: wybierasz reakcję i substancję, podajesz masę / mole / objętość gazu, a tabela pokazuje n, m i V
   wszystkich reagentów oraz tok rozumowania (n = m/M → stosunek współczynników → m = n·M); tryb „limitujący”: masy dwóch substratów → odczynnik w niedomiarze.
   Zastępuje stech-kalkulator-v01 z dużego silnika. Masy molowe szkolne (zaokrąglone), V gazu w war. normalnych 22,4 dm³/mol. Wymaga ui_klocki.js. */
(function () {
  var U = function () { return window.KLOCKI.ui; };
  function E(tag, css, html) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (html != null) e.innerHTML = html; return e; }
  function f(x, n) { return (+x.toFixed(n)).toString().replace('.', ','); }
  // [wzór, współczynnik, M, gaz?]
  var R = [
    {n: '2 Mg + O₂ → 2 MgO', s: [['Mg', 2, 24], ['O₂', 1, 32, 1]], p: [['MgO', 2, 40]]},
    {n: 'CaCO₃ → CaO + CO₂↑ (prażenie)', s: [['CaCO₃', 1, 100]], p: [['CaO', 1, 56], ['CO₂', 1, 44, 1]]},
    {n: 'Zn + 2 HCl → ZnCl₂ + H₂↑', s: [['Zn', 1, 65], ['HCl', 2, 36.5]], p: [['ZnCl₂', 1, 136], ['H₂', 1, 2, 1]]},
    {n: 'Mg + 2 HCl → MgCl₂ + H₂↑', s: [['Mg', 1, 24], ['HCl', 2, 36.5]], p: [['MgCl₂', 1, 95], ['H₂', 1, 2, 1]]},
    {n: 'CuO + H₂SO₄ → CuSO₄ + H₂O', s: [['CuO', 1, 80], ['H₂SO₄', 1, 98]], p: [['CuSO₄', 1, 160], ['H₂O', 1, 18]]},
    {n: 'CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑', s: [['CaCO₃', 1, 100], ['HCl', 2, 36.5]], p: [['CaCl₂', 1, 111], ['H₂O', 1, 18], ['CO₂', 1, 44, 1]]},
    {n: 'NaOH + HCl → NaCl + H₂O', s: [['NaOH', 1, 40], ['HCl', 1, 36.5]], p: [['NaCl', 1, 58.5], ['H₂O', 1, 18]]},
    {n: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃', s: [['AgNO₃', 1, 170], ['NaCl', 1, 58.5]], p: [['AgCl', 1, 143.5], ['NaNO₃', 1, 85]]},
    {n: 'BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2 NaCl', s: [['BaCl₂', 1, 208], ['Na₂SO₄', 1, 142]], p: [['BaSO₄', 1, 233], ['NaCl', 2, 58.5]]},
    {n: 'CuSO₄ + 2 NaOH → Cu(OH)₂↓ + Na₂SO₄', s: [['CuSO₄', 1, 160], ['NaOH', 2, 40]], p: [['Cu(OH)₂', 1, 98], ['Na₂SO₄', 1, 142]]},
    {n: '2 Na + 2 H₂O → 2 NaOH + H₂↑', s: [['Na', 2, 23], ['H₂O', 2, 18]], p: [['NaOH', 2, 40], ['H₂', 1, 2, 1]]}
  ];
  var TH = 'padding:4px 8px;text-align:left;border-bottom:1px solid var(--border,#cbd5e1)', TD = 'padding:4px 8px';
  KLOCKI.def('stechiometria', {
    opis: 'Kalkulator stechiometryczny: dla wybranej reakcji podajesz masę, liczbę moli lub objętość gazu jednej substancji, a tabela pokazuje mole, masy i objętości wszystkich reagentów oraz tok obliczeń; tryb limitujący wskazuje substrat w niedomiarze.',
    domyslne: {reakcja: 0},
    html: function (host, opc) {
      host.style.display = 'block';
      var cur = Math.min(R.length - 1, Math.max(0, +opc.reakcja || 0)), mode = 'calc', idx = 0, jed = 'm', q = 10, masy = [10, 10];
      var bar = E('div', 'display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px'), sel = E('select', 'max-width:100%;font:inherit;padding:4px'), inp = E('div', 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:6px 0;font-size:14px'), out = E('div', 'font-size:14px');
      R.forEach(function (r, i) { var o = E('option', '', r.n); o.value = i; sel.appendChild(o); }); sel.value = cur;
      var mb = U().btn('tryb: obliczenia', function () { mode = mode === 'calc' ? 'lim' : 'calc'; mb.textContent = mode === 'calc' ? 'tryb: obliczenia' : 'tryb: odczynnik limitujący'; form(); });
      sel.onchange = function () { cur = +sel.value; idx = 0; form(); };
      bar.append(sel, mb);
      function all() { return R[cur].s.concat(R[cur].p); }
      function tab(rows, k) {   // rows: [[wzór, side, coef, M, n, gaz]]
        return '<div style="overflow-x:auto"><table style="border-collapse:collapse;margin:6px 0"><tr>' + ['substancja', 'współcz.', 'M [g/mol]', 'n [mol]', 'm [g]', 'V [dm³]'].map(function (h) { return '<th style="' + TH + '">' + h + '</th>'; }).join('') + '</tr>' +
          rows.map(function (x) { return '<tr><td style="' + TD + '">' + x[0] + ' <small>(' + (x[1] === 's' ? 'substrat' : 'produkt') + ')</small></td><td style="' + TD + '">' + x[2] + '</td><td style="' + TD + '">' + f(x[3], 1) + '</td><td style="' + TD + '">' + f(x[4], 4) + '</td><td style="' + TD + '"><b>' + f(x[4] * x[3], 2) + '</b></td><td style="' + TD + '">' + (x[5] ? f(x[4] * 22.4, 2) : '') + '</td></tr>'; }).join('') + '</table></div>';
      }
      function licz() {
        var r = R[cur], A = all(), a = A[idx], n0 = jed === 'm' ? q / a[2] : jed === 'n' ? q : q / 22.4, k = n0 / a[1];
        var rows = A.map(function (x, i) { return [x[0], i < r.s.length ? 's' : 'p', x[1], x[2], k * x[1], x[3]]; });
        var ms = rows.reduce(function (t, x) { return t + (x[1] === 's' ? x[3] * x[4] : 0); }, 0), mp = rows.reduce(function (t, x) { return t + (x[1] === 'p' ? x[3] * x[4] : 0); }, 0);
        out.innerHTML = '<div style="font-weight:700;margin:6px 0">' + r.n + '</div>' + tab(rows) +
          '<div style="color:var(--text-muted,#5b6b73)"><b>Tok rozumowania:</b><br>1) n(' + a[0] + ') = ' + (jed === 'm' ? 'm/M = ' + f(q, 2) + ' g ÷ ' + f(a[2], 1) + ' g/mol = ' + f(n0, 4) + ' mol' : jed === 'n' ? f(n0, 4) + ' mol' : 'V/22,4 = ' + f(q, 2) + ' ÷ 22,4 = ' + f(n0, 4) + ' mol') +
          '<br>2) z współczynników: n(inna) = n(' + a[0] + ') · (współcz. innej ÷ ' + a[1] + ')<br>3) m = n · M<br>4) kontrola: masa substratów ' + f(ms, 2) + ' g = masa produktów ' + f(mp, 2) + ' g (prawo zachowania masy).</div>';
      }
      function lim() {
        var r = R[cur], S = r.s.slice(0, 2), t = S.map(function (x, i) { return {f: x[0], n: masy[i] / x[2], c: x[1], rat: masy[i] / x[2] / x[1], M: x[2]}; }), l = t[0].rat <= t[1].rat ? 0 : 1, k = t[l].rat;
        var rows = all().map(function (x, i) { return [x[0], i < r.s.length ? 's' : 'p', x[1], x[2], k * x[1], x[3]]; });
        var o = 1 - l, nad = t[o].n - k * t[o].c;
        out.innerHTML = '<div style="font-weight:700;margin:6px 0">' + r.n + '</div><div style="border:1px solid var(--border,#cbd5e1);border-radius:10px;padding:8px 12px;background:var(--surface-soft,#f6f8fa)"><b>Odczynnik limitujący: ' + t[l].f + '</b> (n ÷ współcz.: ' + t.map(function (x) { return x.f + ' ' + f(x.n, 4) + '/' + x.c + ' = ' + f(x.rat, 4); }).join(' · ') + ')<br>W nadmiarze zostaje: ' + t[o].f + ' ' + f(nad * t[o].M, 2) + ' g</div>' + tab(rows);
      }
      function form() {
        inp.innerHTML = ''; var r = R[cur];
        if (mode === 'calc') {
          var s1 = E('select', 'font:inherit;padding:4px'), q1 = E('input', 'width:90px;font:inherit;padding:4px'), u = E('select', 'font:inherit;padding:4px');
          all().forEach(function (x, i) { var o = E('option', '', x[0]); o.value = i; s1.appendChild(o); }); s1.value = idx;
          [['m', 'g'], ['n', 'mol']].concat(all()[idx][3] ? [['V', 'dm³ (gaz)']] : []).forEach(function (x) { var o = E('option', '', x[1]); o.value = x[0]; u.appendChild(o); });
          if (!all()[idx][3] && jed === 'V') jed = 'm'; u.value = jed; q1.type = 'number'; q1.step = 'any'; q1.value = q;
          var go = function () { idx = +s1.value; jed = u.value; q = Math.max(0, +q1.value || 0); licz(); };
          s1.onchange = function () { idx = +s1.value; form(); }; u.onchange = go; q1.oninput = go;
          inp.append(E('span', '', 'dane:'), s1, q1, u); licz();
        } else {
          r.s.slice(0, 2).forEach(function (x, i) { var q2 = E('input', 'width:80px;font:inherit;padding:4px'); q2.type = 'number'; q2.step = 'any'; q2.value = masy[i]; q2.oninput = function () { masy[i] = Math.max(0, +q2.value || 0); lim(); }; var l = E('label', '', 'm(' + x[0] + ') [g] '); l.appendChild(q2); inp.appendChild(l); });
          lim();
        }
      }
      host.append(bar, inp, out); form();
    }
  });
})();
