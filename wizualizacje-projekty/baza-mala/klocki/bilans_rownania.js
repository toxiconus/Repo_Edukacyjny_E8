/* KLOCEK: bilans-rownania — dobieranie współczynników: przyciski − / + przy każdej substancji, tabela liczby atomów po obu stronach.
   Opcje: rownanie ("H2 + O2 -> H2O"), przyklady (lista rówań oddzielona średnikami; chipy).
   Zbilansowane równanie: wszystkie pierwiastki mają tyle samo atomów po lewej i po prawej (znak ✓), inaczej ✗ i różnica. */
(function () {
  var IND = '₀₁₂₃₄₅₆₇₈₉';
  function ind(s) { return String(s).replace(/(\d+)/g, function (d) { return d.split('').map(function (c) { return IND[+c]; }).join(''); }); }
  function parse(f) {
    var i = 0;
    function grupa() {
      var w = {};
      while (i < f.length && f[i] !== ')') {
        var m;
        if (f[i] === '(') {
          i++; var g = grupa(); if (f[i] !== ')') throw 0; i++;
          var d = /^\d+/.exec(f.slice(i)); var n = d ? +d[0] : 1; if (d) i += d[0].length;
          for (var k in g) w[k] = (w[k] || 0) + g[k] * n;
        } else if ((m = /^[A-Z][a-z]?/.exec(f.slice(i)))) {
          i += m[0].length; var d2 = /^\d+/.exec(f.slice(i)); var c = d2 ? +d2[0] : 1; if (d2) i += d2[0].length;
          w[m[0]] = (w[m[0]] || 0) + c;
        } else throw 0;
      }
      return w;
    }
    var r = grupa(); if (i !== f.length) throw 0; return r;
  }
  KLOCKI.def('bilans-rownania', {
    opis: 'Dobieranie współczynników w równaniu reakcji z tabelą bilansu atomów.',
    domyslne: {rownanie: 'H2 + O2 -> H2O', przyklady: 'H2 + O2 -> H2O; Mg + O2 -> MgO; Al + O2 -> Al2O3; CaCO3 -> CaO + CO2; Mg + HCl -> MgCl2 + H2'},
    html: function (host, opc) {
      host.style.display = 'block';
      host.innerHTML = '<div class="br-ch" style="display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px"></div><div class="br-r" style="font-size:18px;margin:6px 0 10px;display:flex;flex-wrap:wrap;align-items:center;gap:4px 6px"></div><div class="br-t" style="font-size:14px"></div>';
      var ch = host.querySelector('.br-ch'), rr = host.querySelector('.br-r'), tt = host.querySelector('.br-t');
      var BTN = 'border:1px solid var(--accent,#0d6868);border-radius:99px;padding:4px 12px;font:600 13px system-ui,sans-serif;cursor:pointer;min-height:0;height:auto;width:auto;flex:none;line-height:1.3;margin:0;box-shadow:none;background:var(--surface,#fff);color:var(--accent,#0d6868)';
      var SM = 'border:1px solid var(--border-strong,#94a3b8);border-radius:6px;width:24px;height:24px;min-height:0;min-width:0;padding:0;margin:0;font:600 14px system-ui;cursor:pointer;background:var(--surface,#fff);color:inherit;line-height:1;box-shadow:none';
      var st = null;
      function laduj(r) {
        var p = r.split(/->|→/); if (p.length !== 2) return;
        function side(s) { return s.split('+').map(function (x) { return x.trim(); }).filter(Boolean); }
        var L = side(p[0]), R = side(p[1]);
        st = {L: L.map(function (f) { return {f: f, n: 1, a: parse(f)}; }), R: R.map(function (f) { return {f: f, n: 1, a: parse(f)}; })};
        rys();
      }
      function strona(S, key) {
        var h = '';
        S.forEach(function (x, i) {
          if (i) h += '<span>+</span>';
          h += '<span style="display:inline-flex;align-items:center;gap:4px"><button type="button" data-s="' + key + '" data-i="' + i + '" data-d="-1" style="' + SM + '" aria-label="Zmniejsz współczynnik">−</button>' +
               '<b style="color:var(--accent,#0d6868);min-width:14px;text-align:center">' + (x.n === 1 ? '' : x.n) + '</b>' + ind(x.f) +
               '<button type="button" data-s="' + key + '" data-i="' + i + '" data-d="1" style="' + SM + '" aria-label="Zwiększ współczynnik">+</button></span>';
        });
        return h;
      }
      function rys() {
        rr.innerHTML = strona(st.L, 'L') + '<span style="margin:0 6px">→</span>' + strona(st.R, 'R');
        [].forEach.call(rr.querySelectorAll('button'), function (b) {
          b.addEventListener('click', function () {
            var x = st[b.dataset.s][+b.dataset.i]; x.n = Math.max(1, Math.min(12, x.n + (+b.dataset.d))); rys();
          });
        });
        var el = {}; function dod(S, k) { S.forEach(function (x) { for (var e in x.a) { el[e] = el[e] || {L: 0, R: 0}; el[e][k] += x.n * x.a[e]; } }); }
        dod(st.L, 'L'); dod(st.R, 'R');
        var ok = true, h = '<table style="border-collapse:collapse;margin:0 auto"><tr><th style="padding:4px 12px;text-align:left">Atomy</th><th style="padding:4px 12px">lewa</th><th style="padding:4px 12px">prawa</th><th></th></tr>';
        Object.keys(el).forEach(function (e) {
          var r = el[e], eq = r.L === r.R; if (!eq) ok = false;
          h += '<tr><td style="padding:3px 12px"><b>' + e + '</b></td><td style="text-align:center">' + r.L + '</td><td style="text-align:center">' + r.R + '</td><td style="padding:3px 12px;color:' + (eq ? 'var(--c-basic,#15803d)' : 'var(--c-error,#dc2626)') + ';font-weight:700">' + (eq ? '✓' : '✗ różnica ' + Math.abs(r.L - r.R)) + '</td></tr>';
        });
        tt.innerHTML = h + '</table><div style="text-align:center;margin-top:8px;font-weight:600;color:' + (ok ? 'var(--c-basic,#15803d)' : 'var(--text-soft,#64748b)') + '">' + (ok ? 'Równanie zbilansowane: tyle samo atomów po obu stronach.' : 'Zmieniaj współczynniki tak, aby liczby atomów po obu stronach były równe.') + '</div>';
      }
      String(opc.przyklady).split(';').forEach(function (r) {
        r = r.trim(); if (!r) return;
        var b = document.createElement('button'); b.type = 'button'; b.style.cssText = BTN; b.textContent = ind(r.replace('->', '→'));
        b.addEventListener('click', function () { laduj(r); }); ch.appendChild(b);
      });
      laduj(opc.rownanie);
    }
  });
})();
