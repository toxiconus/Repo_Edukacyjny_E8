/* KLOCEK: nadmiar-substratu — dwa substraty, dwie masy: który się wyczerpie? Algorytm z lekcji R07 (bez mola):
   współczynnik przereagowania = podana masa ÷ masa odniesienia; mniejszy = substrat ograniczający.
   Opcje: reakcja = mg-hcl | fe-s | zn-h2so4; mA, mB — masy startowe (g). Suwaki zmieniają masy; paski: przereagowało / zostaje. */
(function () {
  var R = {
    'mg-hcl':   {rown: 'Mg + 2 HCl → MgCl₂ + H₂', A: ['Mg', 24, 1], B: ['HCl', 36.5, 2], P: [['MgCl₂', 95], ['H₂', 2]], mA: 12, mB: 40, maxA: 30, maxB: 100},
    'fe-s':     {rown: 'Fe + S → FeS', A: ['Fe', 56, 1], B: ['S', 32, 1], P: [['FeS', 88]], mA: 10, mB: 8, maxA: 30, maxB: 30},
    'zn-h2so4': {rown: 'Zn + H₂SO₄ → ZnSO₄ + H₂', A: ['Zn', 65, 1], B: ['H₂SO₄', 98, 1], P: [['ZnSO₄', 161], ['H₂', 2]], mA: 13, mB: 20, maxA: 40, maxB: 60}
  };
  function f1(x) { return (+x.toFixed(1)).toLocaleString('pl', {maximumFractionDigits: 1}); }
  function f2(x) { return (+x.toFixed(2)).toLocaleString('pl', {maximumFractionDigits: 2}); }
  KLOCKI.def('nadmiar-substratu', {
    opis: 'Dwa substraty o podanych masach: który jest ograniczający, ile powstaje produktu i ile nadmiaru zostaje.',
    domyslne: {reakcja: 'mg-hcl', mA: 0, mB: 0},
    html: function (host, opc) {
      var D = R[opc.reakcja] || R['mg-hcl'];
      var mA = Number(opc.mA) || D.mA, mB = Number(opc.mB) || D.mB;
      host.style.display = 'block';
      host.innerHTML = '<div style="font-size:17px;margin:0 0 8px"><b>' + D.rown + '</b></div>' +
        [['a', D.A, D.maxA], ['b', D.B, D.maxB]].map(function (x) {
          return '<label style="display:flex;gap:10px;align-items:center;font-size:14px;margin:0 0 4px"><span style="width:110px">Masa ' + x[1][0] + '</span>' +
            '<input class="ns-' + x[0] + '" type="range" min="0" max="' + x[2] + '" step="0.5" style="flex:1;min-width:120px;accent-color:var(--accent,#0d6868)"><b class="ns-v' + x[0] + '" style="min-width:60px"></b></label>';
        }).join('') + '<div class="ns-w" style="margin-top:8px;font-size:14px"></div>';
      var ia = host.querySelector('.ns-a'), ib = host.querySelector('.ns-b'), w = host.querySelector('.ns-w');
      ia.value = mA; ib.value = mB;
      function pasek(nazwa, podana, reag, kol) {
        var max = Math.max(podana, 0.0001), r = Math.min(reag, podana), pr = r / max * 100;
        return '<div style="margin:6px 0"><div>' + nazwa + ': podano ' + f1(podana) + ' g, przereagowało <b>' + f1(r) + ' g</b>, zostaje <b>' + f1(podana - r) + ' g</b></div>' +
          '<div style="display:flex;height:16px;border-radius:5px;overflow:hidden;background:var(--border,#e2e8f0)"><div style="width:' + pr + '%;background:' + kol + '"></div>' +
          '<div style="width:' + (100 - pr) + '%;background:repeating-linear-gradient(45deg,#fcd34d,#fcd34d 6px,#fde68a 6px,#fde68a 12px)"></div></div></div>';
      }
      function licz() {
        var a = +ia.value, b = +ib.value;
        host.querySelector('.ns-va').textContent = f1(a) + ' g'; host.querySelector('.ns-vb').textContent = f1(b) + ' g';
        var refA = D.A[1] * D.A[2], refB = D.B[1] * D.B[2];
        var ka = a / refA, kb = b / refB, lim = ka <= kb ? 'A' : 'B';
        var reagA = lim === 'A' ? a : b * refA / refB, reagB = lim === 'B' ? b : a * refB / refA;
        var base = lim === 'A' ? a / refA : b / refB;
        var h = '<div>Masa odniesienia z równania: ' + D.A[0] + ' = ' + f1(refA) + ' g, ' + D.B[0] + ' = ' + f1(refB) + ' g</div>' +
          '<div>Współczynniki przereagowania: ' + D.A[0] + ' = ' + f1(a) + ' ÷ ' + f1(refA) + ' = <b>' + f2(ka) + '</b>, ' + D.B[0] + ' = ' + f1(b) + ' ÷ ' + f1(refB) + ' = <b>' + f2(kb) + '</b></div>';
        if (a === 0 || b === 0) h += '<div style="color:var(--text-soft,#64748b)">Ustaw masy obu substratów większe od zera.</div>';
        else if (Math.abs(ka - kb) < 1e-9) h += '<div style="color:var(--c-basic,#15803d);font-weight:600">Idealna proporcja: oba substraty przereagują całkowicie.</div>';
        else h += '<div style="font-weight:600">Substrat ograniczający: ' + (lim === 'A' ? D.A[0] : D.B[0]) + ' (mniejszy współczynnik). W nadmiarze: ' + (lim === 'A' ? D.B[0] : D.A[0]) + '.</div>';
        h += pasek(D.A[0], a, reagA, 'var(--accent,#0d6868)') + pasek(D.B[0], b, reagB, 'var(--c-warn,#b45309)');
        if (a > 0 && b > 0) h += '<div>Produkty: ' + D.P.map(function (p) { return p[0] + ' ' + f1(base * p[1]) + ' g'; }).join(', ') + '</div>';
        w.innerHTML = h;
      }
      ia.addEventListener('input', licz); ib.addEventListener('input', licz); licz();
    }
  });
})();
