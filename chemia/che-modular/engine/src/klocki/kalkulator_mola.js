/* KLOCEK: kalkulator-mola — m, n, M, N i V gazu dla dowolnej substancji; zmiana jednej wartości przelicza pozostałe, wzór stoi przed wynikiem.
   Opcje: subst (indeks 0–4 w liście) — H₂O, CO₂, O₂, CH₄, NaCl; warunki normalne 0 °C, 1013 hPa, Vm = 22,4 dm³/mol. */
(function () {
  var PRE = [['H₂O', 18.02, 0], ['CO₂', 44.01, 1], ['O₂', 32.00, 1], ['CH₄', 16.04, 1], ['NaCl', 58.44, 0]];
  var SUPM = '⁻⁰¹²³⁴⁵⁶⁷⁸⁹';
  function sup(s) { return String(s).replace(/[-\d]/g, function (c) { return SUPM['-0123456789'.indexOf(c)]; }); }
  function fmt(x, d) { d = d || 4; return isFinite(x) ? (+x.toPrecision(d)).toLocaleString('pl', {maximumFractionDigits: 8}) : '—'; }
  function num(v) { return parseFloat(String(v).replace(',', '.')); }
  function sci(x) { if (!x) return '0'; var e = Math.floor(Math.log10(x)); return fmt(x / Math.pow(10, e), 4) + ' · 10' + sup(e); }

  KLOCKI.def('kalkulator-mola', {
    opis: 'Kalkulator mola: z masy, liczby moli, masy molowej lub objętości gazu oblicza pozostałe wielkości.',
    domyslne: {subst: 0},
    html: function (host, opc) {
      var stan = {M: PRE[opc.subst || 0][1], n: 2};
      var rows = [['iM', 'Masa molowa M', 'g/mol'], ['im', 'Masa m', 'g'], ['in', 'Liczba moli n', 'mol'], ['iV', 'Objętość gazu V', 'dm³']];
      host.style.display = 'block';
      host.innerHTML = '<label style="display:flex;gap:10px;align-items:center;margin:0 0 6px;font-size:14px"><span style="width:130px">Substancja</span>' +
        '<select class="kp" style="font:inherit;padding:4px 8px">' + PRE.map(function (p, i) { return '<option value="' + i + '"' + (i === (opc.subst || 0) ? ' selected' : '') + '>' + p[0] + (p[2] ? ' (gaz)' : '') + '</option>'; }).join('') + '</select></label>' +
        rows.map(function (r) {
          return '<label style="display:flex;gap:10px;align-items:center;margin:0 0 6px;font-size:14px"><span style="width:130px">' + r[1] + '</span>' +
            '<input class="' + r[0] + '" type="text" inputmode="decimal" style="font:inherit;padding:4px 8px;width:120px;border:1px solid var(--border-strong,#94a3b8);border-radius:6px;background:var(--surface,#fff);color:inherit"><span>' + r[2] + '</span></label>';
        }).join('') +
        '<div class="kf" style="font-size:14px;display:grid;gap:4px;margin-top:8px"></div>';
      var q = function (c) { return host.querySelector('.' + c); }, pre = q('kp'), f = q('kf');
      function licz(zrodlo) {
        var M = stan.M, n = stan.n, m = n * M, V = n * 22.4;
        function w(id, v) { if (id !== zrodlo) q(id).value = fmt(v, 5); }
        w('iM', M); w('im', m); w('in', n); w('iV', V);
        f.innerHTML = '<div>n = m / M = ' + fmt(m) + ' g / ' + fmt(M) + ' g/mol = ' + fmt(n) + ' mol</div>' +
          '<div>N = n · N<sub>A</sub> = ' + fmt(n) + ' mol · 6,022 · 10²³ 1/mol = ' + sci(n * 6.022e23) + '</div>' +
          '<div>V = n · 22,4 dm³/mol = ' + fmt(n) + ' mol · 22,4 dm³/mol = ' + fmt(V) + ' dm³' + (PRE[pre.value][2] ? '' : ' (tylko dla gazu)') + '</div>';
      }
      pre.addEventListener('change', function () { stan.M = PRE[pre.value][1]; licz(); });
      q('iM').addEventListener('input', function (e) { var m = num(q('im').value), v = num(e.target.value); if (v > 0) { stan.M = v; if (m >= 0) stan.n = m / v; } licz('iM'); });
      q('im').addEventListener('input', function (e) { var v = num(e.target.value); if (v >= 0) stan.n = v / stan.M; licz('im'); });
      q('in').addEventListener('input', function (e) { var v = num(e.target.value); if (v >= 0) stan.n = v; licz('in'); });
      q('iV').addEventListener('input', function (e) { var v = num(e.target.value); if (v >= 0) stan.n = v / 22.4; licz('iV'); });
      licz();
    }
  });
})();
