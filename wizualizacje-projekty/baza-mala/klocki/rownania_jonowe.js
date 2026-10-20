/* KLOCEK: rownania-jonowe — wybór reakcji i trzy zapisy: cząsteczkowy, jonowy pełny, jonowy skrócony; jony obserwatorowe wyróżnione.
   Opcje: reakcja (indeks startowy 0–11). Zapis jonowy liczony z listy jonów każdej substancji (osad, gaz, woda i tlenek zostają cząsteczkowo). */
(function () {
  var J = {
    NaOH: [[1, 'Na⁺'], [1, 'OH⁻']], HCl: [[1, 'H⁺'], [1, 'Cl⁻']], NaCl: [[1, 'Na⁺'], [1, 'Cl⁻']], AgNO3: [[1, 'Ag⁺'], [1, 'NO₃⁻']],
    NaNO3: [[1, 'Na⁺'], [1, 'NO₃⁻']], BaCl2: [[1, 'Ba²⁺'], [2, 'Cl⁻']], Na2SO4: [[2, 'Na⁺'], [1, 'SO₄²⁻']], CuSO4: [[1, 'Cu²⁺'], [1, 'SO₄²⁻']],
    FeCl3: [[1, 'Fe³⁺'], [3, 'Cl⁻']], CaCl2: [[1, 'Ca²⁺'], [2, 'Cl⁻']], Na2CO3: [[2, 'Na⁺'], [1, 'CO₃²⁻']], MgCl2: [[1, 'Mg²⁺'], [2, 'Cl⁻']],
    H2SO4: [[2, 'H⁺'], [1, 'SO₄²⁻']], ZnSO4: [[1, 'Zn²⁺'], [1, 'SO₄²⁻']], CuCl2: [[1, 'Cu²⁺'], [2, 'Cl⁻']], PbNO32: [[1, 'Pb²⁺'], [2, 'NO₃⁻']],
    KI: [[1, 'K⁺'], [1, 'I⁻']], KNO3: [[1, 'K⁺'], [1, 'NO₃⁻']], CaOH2: [[1, 'Ca²⁺'], [2, 'OH⁻']], HNO3: [[1, 'H⁺'], [1, 'NO₃⁻']], CaNO32: [[1, 'Ca²⁺'], [2, 'NO₃⁻']]
  };
  var Z = {  // zapis cząsteczkowy (pretty) substancji nie-jonowych i jonowych
    NaOH: 'NaOH', HCl: 'HCl', NaCl: 'NaCl', AgNO3: 'AgNO₃', NaNO3: 'NaNO₃', BaCl2: 'BaCl₂', Na2SO4: 'Na₂SO₄', CuSO4: 'CuSO₄', FeCl3: 'FeCl₃', CaCl2: 'CaCl₂',
    Na2CO3: 'Na₂CO₃', MgCl2: 'MgCl₂', H2SO4: 'H₂SO₄', ZnSO4: 'ZnSO₄', CuCl2: 'CuCl₂', PbNO32: 'Pb(NO₃)₂', KI: 'KI', KNO3: 'KNO₃', CaOH2: 'Ca(OH)₂', HNO3: 'HNO₃', CaNO32: 'Ca(NO₃)₂',
    AgCl: 'AgCl↓', BaSO4: 'BaSO₄↓', CuOH2: 'Cu(OH)₂↓', FeOH3: 'Fe(OH)₃↓', PbI2: 'PbI₂↓', CaCO3: 'CaCO₃', H2O: 'H₂O', CO2: 'CO₂↑', H2: 'H₂↑', Mg: 'Mg', Zn: 'Zn', CuO: 'CuO'
  };
  var R = [
    ['Zobojętnianie: NaOH + HCl', [[1, 'NaOH'], [1, 'HCl']], [[1, 'NaCl'], [1, 'H2O']]],
    ['Zobojętnianie: Ca(OH)₂ + HNO₃', [[1, 'CaOH2'], [2, 'HNO3']], [[1, 'CaNO32'], [2, 'H2O']]],
    ['Strącanie AgCl: AgNO₃ + NaCl', [[1, 'AgNO3'], [1, 'NaCl']], [[1, 'AgCl'], [1, 'NaNO3']]],
    ['Strącanie BaSO₄: BaCl₂ + Na₂SO₄', [[1, 'BaCl2'], [1, 'Na2SO4']], [[1, 'BaSO4'], [2, 'NaCl']]],
    ['Strącanie Cu(OH)₂: CuSO₄ + NaOH', [[1, 'CuSO4'], [2, 'NaOH']], [[1, 'CuOH2'], [1, 'Na2SO4']]],
    ['Strącanie Fe(OH)₃: FeCl₃ + NaOH', [[1, 'FeCl3'], [3, 'NaOH']], [[1, 'FeOH3'], [3, 'NaCl']]],
    ['Strącanie PbI₂: Pb(NO₃)₂ + KI', [[1, 'PbNO32'], [2, 'KI']], [[1, 'PbI2'], [2, 'KNO3']]],
    ['Węglan + kwas: Na₂CO₃ + HCl', [[1, 'Na2CO3'], [2, 'HCl']], [[2, 'NaCl'], [1, 'H2O'], [1, 'CO2']]],
    ['Węglan + kwas: CaCO₃ + HCl', [[1, 'CaCO3'], [2, 'HCl']], [[1, 'CaCl2'], [1, 'H2O'], [1, 'CO2']]],
    ['Metal + kwas: Mg + HCl', [[1, 'Mg'], [2, 'HCl']], [[1, 'MgCl2'], [1, 'H2']]],
    ['Metal + kwas: Zn + H₂SO₄', [[1, 'Zn'], [1, 'H2SO4']], [[1, 'ZnSO4'], [1, 'H2']]],
    ['Tlenek metalu + kwas: CuO + HCl', [[1, 'CuO'], [2, 'HCl']], [[1, 'CuCl2'], [1, 'H2O']]]
  ];
  function rozloz(lista) {   // → termy {c, t, jon}
    var o = [];
    lista.forEach(function (x) { var j = J[x[1]]; if (j) j.forEach(function (i) { o.push({c: i[0] * x[0], t: i[1], jon: true}); }); else o.push({c: x[0], t: Z[x[1]], jon: false}); });
    return o;
  }
  function txt(ts, cl) { return ts.map(function (t) { return (t.c > 1 ? t.c + ' ' : '') + (cl && t.jon && cl[t.t] ? '<span style="opacity:.55;text-decoration:line-through">' + t.t + '</span>' : t.t); }).join(' + '); }
  function czast(l) { return l.map(function (x) { return (x[0] > 1 ? x[0] + ' ' : '') + Z[x[1]]; }).join(' + '); }
  function licz(r) {
    var L = rozloz(r[1]), P = rozloz(r[2]), mL = {}, mP = {};
    L.forEach(function (t) { if (t.jon) mL[t.t] = (mL[t.t] || 0) + t.c; }); P.forEach(function (t) { if (t.jon) mP[t.t] = (mP[t.t] || 0) + t.c; });
    var obs = {}; Object.keys(mL).forEach(function (k) { if (mP[k]) obs[k] = Math.min(mL[k], mP[k]); });
    function skroc(ts) { var left = {}; Object.keys(obs).forEach(function (k) { left[k] = obs[k]; }); var o = []; ts.forEach(function (t) { if (t.jon && left[t.t]) { var d = Math.min(left[t.t], t.c); left[t.t] -= d; if (t.c - d > 0) o.push({c: t.c - d, t: t.t, jon: true}); } else o.push({c: t.c, t: t.t, jon: t.jon}); }); return o; }
    var sl = skroc(L), sp = skroc(P);
    var g = sl.concat(sp).reduce(function (a, t) { var b = t.c; while (b) { var x = a % b; a = b; b = x; } return a; }, 0) || 1;
    if (g > 1) { sl.forEach(function (t) { t.c /= g; }); sp.forEach(function (t) { t.c /= g; }); }
    return {mol: czast(r[1]) + ' → ' + czast(r[2]), pelne: txt(L, obs) + ' → ' + txt(P, obs), skr: txt(sl) + ' → ' + txt(sp), obs: Object.keys(obs)};
  }
  KLOCKI.def('rownania-jonowe', {
    opis: 'Równania jonowe: po wyborze reakcji pokazuje zapis cząsteczkowy, jonowy pełny z jonami obserwatorowymi i jonowy skrócony.',
    domyslne: {reakcja: 0},
    html: function (host, opc) {
      host.style.display = 'block';
      host.innerHTML = '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">' + R.map(function (r, i) { return '<button type="button" data-i="' + i + '" style="font:inherit;font-size:13px;padding:5px 10px;border:1px solid var(--border-strong,#94a3b8);border-radius:999px;background:var(--surface,#fff);color:inherit;cursor:pointer">' + r[0] + '</button>'; }).join('') + '</div><div class="rj-w" style="display:grid;gap:8px;font-size:15px"></div>';
      var w = host.querySelector('.rj-w');
      function poka(i) {
        var o = licz(R[i]);
        [].forEach.call(host.querySelectorAll('button'), function (b) { b.style.background = (+b.dataset.i === i) ? 'var(--accent-soft,#dbeafe)' : 'var(--surface,#fff)'; });
        w.innerHTML = '<div><b>Cząsteczkowo:</b><br>' + o.mol + '</div><div><b>Jonowo (pełne):</b><br>' + o.pelne + '</div><div><b>Jonowo (skrócone):</b><br>' + o.skr + '</div>' +
          '<div style="font-size:13px;opacity:.8">' + (o.obs.length ? 'Jony obserwatorowe (przekreślone): ' + o.obs.join(', ') + '.' : 'Brak jonów obserwatorowych — wszystkie jony biorą udział w przemianie.') + ' Osad (↓), gaz (↑), woda i tlenki zostają zapisane cząsteczkowo.</div>';
      }
      host.addEventListener('click', function (e) { var b = e.target.closest('button[data-i]'); if (b) poka(+b.dataset.i); });
      poka(+opc.reakcja || 0);
    }
  });
})();
