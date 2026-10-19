/* KLOCEK: trojkat-przeliczen — trójkąt konwersji masa ↔ liczba moli ↔ cząstki lub objętość gazu.
   Opcje (w lekcji): wzor="mol"  (domyślnie) — wierzchołki: m [g], n [mol], N [cząstki]; N = n · N_A
                     wzor="gaz"  — wierzchołki: m [g], n [mol], V [dm³]; V = n · Vₘ (22,4 dm³/mol)
   Strzałki: góra → lewo ÷ M, lewo → góra × M; lewo ↔ prawo: × / ÷ N_A (lub Vₘ). Bok góra–prawo nie ma operacji.
   Wzory konwersji są wypisane w rogu. Klik zatrzymuje/wznawia (zachowanie montuj). */
(function () {
  var SZABLON = {
    mol: {R: 'N [cząstki]', kR: 'N_A', wzory: ['m = n · M', 'n = m / M', 'N = n · N_A']},
    gaz: {R: 'V [dm³]', kR: 'Vₘ', wzory: ['m = n · M', 'n = m / M', 'V = n · Vₘ']}
  };

  // odcinek A→B przesunięty o off wzdłuż normalnej, skrócony przy węzłach; grot na końcu
  function strzalka(x, A, B, off, skrA, skrB) {
    var dx = B.x - A.x, dy = B.y - A.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / d, uy = dy / d, px = -uy, py = ux;
    var ax = A.x + px * off + ux * skrA, ay = A.y + py * off + uy * skrA;
    var bx = B.x + px * off - ux * skrB, by = B.y + py * off - uy * skrB;
    x.beginPath(); x.moveTo(ax, ay); x.lineTo(bx, by); x.stroke();
    var ang = Math.atan2(by - ay, bx - ax), g = 9;
    x.beginPath(); x.moveTo(bx, by);
    x.lineTo(bx - g * Math.cos(ang - 0.4), by - g * Math.sin(ang - 0.4));
    x.lineTo(bx - g * Math.cos(ang + 0.4), by - g * Math.sin(ang + 0.4));
    x.closePath(); x.fill();
    return {x: (A.x + B.x) / 2 + px * off, y: (A.y + B.y) / 2 + py * off, px: px, py: py};
  }
  function wyjscie(ux, uy, bw, bh) {
    var sx = Math.abs(ux) > 1e-6 ? (bw / 2) / Math.abs(ux) : Infinity;
    var sy = Math.abs(uy) > 1e-6 ? (bh / 2) / Math.abs(uy) : Infinity;
    return Math.min(sx, sy) + 5;
  }
  function skrot(A, B, bw, bh) {
    var dx = B.x - A.x, dy = B.y - A.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / d, uy = dy / d;
    return [wyjscie(ux, uy, bw, bh), wyjscie(-ux, -uy, bw, bh)];
  }

  KLOCKI.def('trojkat-przeliczen', {
    opis: 'Trójkąt konwersji: masa, liczba moli i cząstki (lub objętość gazu) ze strzałkami operacji ÷/× M, N_A lub Vₘ.',
    domyslne: {wzor: 'mol', szer: 480, wys: 300},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var sz = SZABLON[opc.wzor] || SZABLON.mol;
      var T = {x: w / 2, y: 46}, Lw = {x: w / 2 - 160, y: h - 64}, Rw = {x: w / 2 + 160, y: h - 64};
      var BW = 124, BH = 34;
      x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h);
      x.font = '14px system-ui, sans-serif'; x.textBaseline = 'middle'; x.textAlign = 'center';

      // krawędzie trójkąta
      x.strokeStyle = '#94a3b8'; x.lineWidth = 2;
      [[T, Lw], [Lw, Rw], [Rw, T]].forEach(function (e) {
        x.beginPath(); x.moveTo(e[0].x, e[0].y); x.lineTo(e[1].x, e[1].y); x.stroke();
      });

      // strzałki operacji: dwie na każdym boku z operacją
      x.strokeStyle = '#334155'; x.fillStyle = '#334155'; x.lineWidth = 2;
      var etyk = [];
      function para(A, B, opA, opB, bokA, bokB) {
        var sk1 = skrot(A, B, BW, BH);
        var a1 = strzalka(x, A, B, 9, sk1[0], sk1[1]);
        etyk.push({x: a1.x + a1.px * 16, y: a1.y + a1.py * 16, t: opA});
        var sk2 = skrot(B, A, BW, BH);
        var a2 = strzalka(x, B, A, 9, sk2[0], sk2[1]);
        etyk.push({x: a2.x + a2.px * 16, y: a2.y + a2.py * 16, t: opB});
      }
      para(T, Lw, '÷ M ↓', '× M ↑');
      para(Lw, Rw, '× ' + sz.kR + ' →', '← ÷ ' + sz.kR);

      // etykiety operacji
      x.fillStyle = '#b45309'; x.font = 'bold 13px system-ui, sans-serif';
      etyk.forEach(function (e) { x.fillText(e.t, e.x, e.y); });

      // węzły
      var wez = [[T, 'm [g]'], [Lw, 'n [mol]'], [Rw, sz.R]];
      wez.forEach(function (p) {
        x.fillStyle = '#eef6ff'; x.strokeStyle = '#1e40af'; x.lineWidth = 1.5;
        x.beginPath();
        if (x.roundRect) x.roundRect(p[0].x - BW / 2, p[0].y - BH / 2, BW, BH, 8); else x.rect(p[0].x - BW / 2, p[0].y - BH / 2, BW, BH);
        x.fill(); x.stroke();
        x.fillStyle = '#0f172a'; x.font = '15px system-ui, sans-serif';
        x.fillText(p[1], p[0].x, p[0].y);
      });

      // wzory konwersji w prawym górnym rogu
      x.textAlign = 'right'; x.textBaseline = 'top'; x.fillStyle = '#111827'; x.font = '13px system-ui, sans-serif';
      sz.wzory.forEach(function (f, i) { x.fillText(f, w - 10, 12 + i * 17); });
    }
  });
})();
