/* KLOCKI: jony w wodzie — dysocjacja-vs-jonizacja (NaCl: jony już są; HCl: jony powstają), przeniesienie-protonu (kwas + woda → H₃O⁺),
   Wymaga ui_klocki.js. */
(function () {
  function anim01(host, cel, f) {   // płynnie dąży do cel (0/1); f(t) rysuje; zwraca ustawianie celu
    var t = 0, c = cel, ZZ = window.KLOCKI.ui;
    var h = ZZ.anim(host, function (dt) { var d = c - t; if (Math.abs(d) > .001) { t += Math.sign(d) * Math.min(Math.abs(d), dt * .6); f(t); } });
    f(t); return function (v) { c = v; if (typeof RM !== 'undefined' && RM) { t = v; f(t); } };
  }
  function O(x, y, r, fill, tx, tc) { return '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r + '" fill="' + fill + '" stroke="#334155" stroke-width="1"/>' + (tx ? '<text x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="middle" font-size="' + (r > 10 ? 12 : 10) + '" font-weight="700" fill="' + (tc || '#0f172a') + '">' + tx + '</text>' : ''); }
  function mix(a, b, t) { return a + (b - a) * t; }
  function woda(x, y, a) {   // cząsteczka H₂O: O + dwa H
    var c = Math.cos(a), s = Math.sin(a), r = function (dx, dy) { return [x + dx * c - dy * s, y + dx * s + dy * c]; }, h1 = r(-11, 8), h2 = r(11, 8);
    return O(h1[0], h1[1], 5, '#f8fafc') + O(h2[0], h2[1], 5, '#f8fafc') + O(x, y, 9, '#ef4444', 'O', '#fff');
  }

  KLOCKI.def('dysocjacja-vs-jonizacja', {
    opis: 'Porównanie: kryształ NaCl dysocjuje (jony Na⁺ i Cl⁻ już istnieją), a cząsteczka HCl ulega jonizacji (jony H₃O⁺ i Cl⁻ powstają w reakcji z wodą).',
    domyslne: {},
    html: function (host) {
      var U = KLOCKI.ui, set;
      host.style.display = 'block';
      var bar = document.createElement('div'); bar.style.cssText = 'margin-bottom:6px';
      var b = U.btn('Dodaj wodę', function () { w = !w; b.innerHTML = w ? 'Odwróć (bez wody)' : 'Dodaj wodę'; set(w ? 1 : 0); }); var w = false; bar.appendChild(b);
      var box = document.createElement('div'), txt = document.createElement('div'); txt.style.cssText = 'font-size:14px;display:grid;gap:6px;margin-top:6px';
      host.append(bar, box, txt);
      txt.innerHTML = '<div><b>NaCl — dysocjacja:</b> w krysztale są już jony Na⁺ i Cl⁻; woda je tylko oddziela i otacza. NaCl(s) → Na⁺(aq) + Cl⁻(aq)</div><div><b>HCl — jonizacja:</b> w cząsteczce H–Cl wiązanie jest kowalencyjne spolaryzowane; jony powstają dopiero w reakcji z wodą. HCl + H₂O → H₃O⁺ + Cl⁻</div>';
      var Na = [[0, 0], [1, 0], [0, 1], [1, 1]], pos = [[1, 0], [0, 0], [1, 1], [0, 1]];
      set = anim01(host, 0, function (t) {
        var s = '<svg viewBox="0 0 560 230" width="100%" style="max-width:640px;display:block" role="img" aria-label="Dysocjacja NaCl i jonizacja HCl w wodzie"><text x="130" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">NaCl → dysocjacja</text><text x="420" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">HCl → jonizacja</text>';
        // kryształ 2×2 rozsuwa się
        var k = 0;
        for (var i = 0; i < 2; i++) for (var j = 0; j < 2; j++) {
          var na = (i + j) % 2 === 0, bx = 105 + i * 26, by = 90 + j * 26, dir = [[-1, -1], [1, -1], [-1, 1], [1, 1]][k++], ex = (na ? -1 : 1) * (20 + 30 * (i + 1)), ey = (j ? 1 : -1) * 40;
          s += O(mix(bx, bx + dir[0] * 55 + (na ? -15 : 15), t), mix(by, by + dir[1] * 45, t), na ? 10 : 13, na ? '#a855f7' : '#22c55e', na ? '+' : '−', '#fff');
        }
        for (var q = 0; q < 6; q++) { var a = q * 1.05 + t * 1.2, px = 130 + Math.cos(q * 2.1) * 95, py = 130 + Math.sin(q * 1.7) * 62 + (q > 2 ? 12 : 0); s += (t > .15 ? woda(px, py, a + t * 3) : ''); }
        // HCl: H–Cl + H2O → H3O+ + Cl-
        var clx = mix(410, 500, t), cly = mix(100, 75, t), ox = 440, oy = mix(160, 140, t), hx = mix(388, 424, t), hy = mix(100, 128, t);
        if (t < .5) s += '<line x1="388" y1="100" x2="410" y2="100" stroke="#334155" stroke-width="3"/>';
        s += O(clx, cly, 13, '#22c55e', 'Cl', '#fff') + O(hx, hy, 5, '#f8fafc');
        s += woda(ox, oy, 0);
        s += (t > .6 ? '<text x="440" y="200" text-anchor="middle" font-size="13" fill="#2563eb">H₃O⁺</text><text x="500" y="52" text-anchor="middle" font-size="13" fill="#16a34a">Cl⁻</text>' : '<text x="420" y="200" text-anchor="middle" font-size="13" fill="currentColor">H–Cl + H₂O</text>');
        box.innerHTML = s + '</svg>';
      });
    }
  });

  KLOCKI.def('przeniesienie-protonu', {
    opis: 'Kwas w wodzie: jon H⁺ (proton) przeskakuje z cząsteczki kwasu na cząsteczkę wody, tworząc H₃O⁺ i resztę kwasową.',
    domyslne: {kwas: 'HCl'},
    html: function (host, opc) {
      var U = KLOCKI.ui, KW = {HCl: ['Cl', '#22c55e', 'Cl⁻'], HNO3: ['NO₃', '#3b82f6', 'NO₃⁻'], CH3COOH: ['CH₃COO', '#f59e0b', 'CH₃COO⁻']}, kw = KW[opc.kwas] ? opc.kwas : 'HCl', set;
      host.style.display = 'block';
      var bar = document.createElement('div'); bar.style.cssText = 'margin-bottom:6px';
      var b = U.btn('Przenieś proton', function () { w = !w; b.innerHTML = w ? 'Cofnij' : 'Przenieś proton'; set(w ? 1 : 0); }); var w = false; bar.appendChild(b);
      Object.keys(KW).forEach(function (k) { bar.appendChild(U.chip(k.replace('3', '₃').replace('2', '₂'), k === kw, function () { kw = k; [].forEach.call(bar.querySelectorAll('button'), function (x, ix) { if (ix) U.zaznacz(x, x.dataset.k === k); }); set(w ? 1 : 0); })); });
      [].forEach.call(bar.querySelectorAll('button'), function (x, ix) { if (ix) x.dataset.k = Object.keys(KW)[ix - 1]; });
      var box = document.createElement('div'), txt = document.createElement('div'); txt.style.cssText = 'font-size:14px;margin-top:6px';
      host.append(bar, box, txt);
      set = anim01(host, 0, function (t) {
        var A = KW[kw];
        var s = '<svg viewBox="0 0 520 150" width="100%" style="max-width:600px;display:block" role="img" aria-label="Przeniesienie protonu z kwasu na wodę">';
        s += O(120, 75, 24, A[1], A[0], '#fff');
        s += O(mix(160, 330, t), mix(75, 70, t), 8, '#f8fafc', 'H⁺', '#0f172a');
        s += woda(360, 90, 0) + O(360 + 0, 90, 0.01, 'none');
        s += '<text x="120" y="130" text-anchor="middle" font-size="13" fill="currentColor">' + (t < .5 ? 'cząsteczka kwasu H–' + A[0] : 'reszta ' + A[2]) + '</text><text x="360" y="130" text-anchor="middle" font-size="13" fill="currentColor">' + (t < .5 ? 'H₂O' : 'H₃O⁺') + '</text>';
        box.innerHTML = s + '</svg>';
        txt.innerHTML = t < .5 ? '<b>Przed:</b> kwas H–' + A[0] + ' i cząsteczka wody. Wiązanie H–' + A[0] + ' jest spolaryzowane.' : '<b>Po:</b> proton H⁺ przeszedł na wodę (H₃O⁺); reszta kwasowa jest teraz jonem <b>' + A[2] + '</b>. Kwas <b>oddaje proton</b>, woda go <b>przyjmuje</b>.';
      });
    }
  });
})();
