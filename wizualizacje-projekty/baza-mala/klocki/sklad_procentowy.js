/* KLOCEK: sklad-procentowy — masa cząsteczkowa i skład procentowy wg wzoru (masy atomowe zaokrąglone jak w lekcji C1c masy).
   Opcje: wzor (H2SO4) — wpisz wzór (nawiasy dozwolone, np. Ca(OH)2); chipy: przykłady (lista po przecinku).
   Każdy pierwiastek: n · A / M · 100 %, pasek kolorowy proporcjonalny do masy. */
(function () {
  var A = {H: 1, C: 12, N: 14, O: 16, Na: 23, Mg: 24, Al: 27, P: 31, S: 32, Cl: 35.5, K: 39, Ca: 40, Fe: 56, Cu: 64, Zn: 65, Ag: 108};
  var KOL = ['#0d6868', '#b45309', '#2563eb', '#9333ea', '#dc2626', '#16a34a'];
  var IND = '₀₁₂₃₄₅₆₇₈₉';
  function ind(s) { return String(s).replace(/(\d+)/g, function (d) { return d.split('').map(function (c) { return IND[+c]; }).join(''); }); }
  function parse(f) {   // zwraca {pierwiastek: liczba atomów} albo null
    var i = 0;
    function grupa() {
      var w = {};
      while (i < f.length && f[i] !== ')') {
        var m;
        if (f[i] === '(') {
          i++; var g = grupa(); if (f[i] !== ')') throw 0; i++;
          var n = /^\d+/.exec(f.slice(i)); n = n ? +n[0] : 1; if (n) i += String(n).length === (/^\d+/.exec(f.slice(i)) || [''])[0].length ? String(n).length : 0;
          for (var k in g) w[k] = (w[k] || 0) + g[k] * n;
        } else if ((m = /^[A-Z][a-z]?/.exec(f.slice(i)))) {
          i += m[0].length; var d = /^\d+/.exec(f.slice(i)); var c = d ? +d[0] : 1; if (d) i += d[0].length;
          if (!(m[0] in A)) throw m[0];
          w[m[0]] = (w[m[0]] || 0) + c;
        } else throw 0;
      }
      return w;
    }
    var r = grupa(); if (i !== f.length) throw 0; return r;
  }
  function fmt(x, d) { return (+x.toFixed(d)).toLocaleString('pl', {maximumFractionDigits: d}); }

  KLOCKI.def('sklad-procentowy', {
    opis: 'Masa cząsteczkowa i skład procentowy związku wg wzoru; pasek proporcjonalny do mas pierwiastków.',
    domyslne: {wzor: 'H2SO4', przyklady: 'H2O,CO2,H2SO4,Fe2O3,Ca(OH)2'},
    html: function (host, opc) {
      host.style.display = 'block';
      host.innerHTML = '<div class="sp-ch" style="display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px"></div>' +
        '<label style="font-size:14px;display:flex;gap:8px;align-items:center;margin:0 0 8px"><span>Wzór</span>' +
        '<input class="sp-in" type="text" spellcheck="false" style="font:inherit;padding:4px 8px;width:150px;border:1px solid var(--border-strong,#94a3b8);border-radius:6px;background:var(--surface,#fff);color:inherit"></label>' +
        '<div class="sp-w" style="font-size:14px"></div>';
      var inp = host.querySelector('.sp-in'), w = host.querySelector('.sp-w'), ch = host.querySelector('.sp-ch');
      var CH = 'border:1px solid var(--accent,#0d6868);border-radius:99px;padding:4px 12px;font:600 13px system-ui,sans-serif;cursor:pointer;min-height:0;height:auto;width:auto;flex:none;line-height:1.3;margin:0;box-shadow:none;background:var(--surface,#fff);color:var(--accent,#0d6868)';
      String(opc.przyklady).split(',').forEach(function (f) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = ind(f); b.style.cssText = CH;
        b.addEventListener('click', function () { inp.value = f; licz(); }); ch.appendChild(b);
      });
      inp.value = opc.wzor;
      function licz() {
        var f = inp.value.replace(/\s+/g, ''), s;
        try { s = parse(f); } catch (e) { w.textContent = typeof e === 'string' ? 'Brak pierwiastka ' + e + ' w tabeli lekcji.' : 'Wpisz wzór, np. H2SO4 albo Ca(OH)2.'; return; }
        var el = Object.keys(s); if (!el.length) { w.textContent = ''; return; }
        var M = el.reduce(function (a, k) { return a + s[k] * A[k]; }, 0), sum = 0;
        var bar = '<div style="display:flex;height:26px;border-radius:6px;overflow:hidden;margin:6px 0 10px">';
        var lines = '';
        el.forEach(function (k, i) {
          var p = s[k] * A[k] / M * 100; sum += p;
          bar += '<div title="' + k + '" style="width:' + p + '%;background:' + KOL[i % KOL.length] + ';color:#fff;font:600 12px system-ui;display:flex;align-items:center;justify-content:center">' + (p > 8 ? k : '') + '</div>';
          lines += '<div><span style="color:' + KOL[i % KOL.length] + ';font-weight:700">' + k + '</span>: %' + k + ' = ' + s[k] + ' · ' + String(A[k]).replace('.', ',') + ' / ' + fmt(M, 1) + ' · 100% ≈ <b>' + fmt(p, 1) + '%</b></div>';
        });
        w.innerHTML = '<div>Masa cząsteczkowa ' + ind(f) + ': M = ' + el.map(function (k) { return s[k] + ' · ' + String(A[k]).replace('.', ','); }).join(' + ') + ' = <b>' + fmt(M, 1) + ' u</b></div>' + bar + '</div><div style="display:grid;gap:3px">' + lines + '</div><div style="margin-top:4px;color:var(--text-soft,#64748b)">Suma: ' + fmt(sum, 1) + '% ✓</div>';
      }
      inp.addEventListener('input', licz); licz();
    }
  });
})();
