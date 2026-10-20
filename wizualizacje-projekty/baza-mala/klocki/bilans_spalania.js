/* KLOCEK: bilans-spalania — spalanie całkowite alkanu CₙH₂ₙ₊₂ (LKO-ORG01 §2).
   Opcje (w lekcji): n="3"  liczba atomów węgla w alkanie (1–10)
   Współczynniki z n: O₂ = n + (2n+2)/4, CO₂ = n, H₂O = n+1. Gdy O₂ wychodzi ułamkowe (n parzyste),
   wszystkie współczynniki są podwojone — zapis bez ułamków (np. 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O).
   Bilans: wiersz na pierwiastek, każde kółko = 1 atom, siatka dopasowana do liczby atomów (bez ucinania).
   Wiersze pojawiają się po kolei; jasny i ciemny motyw (html[data-ciemny]). Bez odpowiedzi — uczeń porównuje sam. */
(function () {
  var IND = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
  function ind(s) { return String(s).replace(/\d/g, function (d) { return IND[d]; }); }
  function cl(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function ss(v) { v = cl(v, 0, 1); return v * v * (3 - 2 * v); }
  function paleta() {
    return document.documentElement.hasAttribute('data-ciemny')
      ? {bg:'#0f1b1e', tekst:'#e8eef2', cisza:'#94a3b8', linia:'#2b3d42', akcent:'#5eead4', ok:'#4ade80',
         C:['#94a3b8', '#cbd5e1', '#0f172a'], H:['#e2e8f0', '#94a3b8', '#0c4a6e'], O:['#f87171', '#fecaca', '#ffffff']}
      : {bg:'#ffffff', tekst:'#0f172a', cisza:'#64748b', linia:'#e2e8f0', akcent:'#0d6868', ok:'#15803d',
         C:['#475569', '#1e293b', '#ffffff'], H:['#e0f2fe', '#38bdf8', '#0c4a6e'], O:['#ef4444', '#991b1b', '#ffffff']};
  }
  function siatka(m, W, H) {                 // najgęstsze ułożenie m kółek w polu W×H
    var best = null;
    for (var c = 1; c <= 30; c++) {
      var rows = Math.ceil(m / c), r = Math.min(8, W / (c * 2.4), H / (rows * 2.4));
      if (!best || r >= best.r - 1e-6) best = {c: c, r: r};
    }
    return best;
  }

  KLOCKI.def('bilans-spalania', {
    opis: 'Bilans spalania całkowitego alkanu: współczynniki z n i liczba atomów C, H, O po obu stronach równania.',
    domyslne: {n: 3, szer: 560, wys: 330},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var P = paleta(), tr = RM ? 99 : t;
      var n = cl(Math.round(Number(opc.n) || 3), 1, 10);
      var tlen = (3 * n + 1) / 2, mul = Number.isInteger(tlen) ? 1 : 2;      // mol O₂ na mol alkanu; podwojenie gdy ułamek
      var wsp = [mul, tlen * mul, n * mul, (n + 1) * mul];
      x.fillStyle = P.bg; x.fillRect(0, 0, w, h);
      x.textBaseline = 'middle';

      // --- równanie ze współczynnikami wyróżnionymi kolorem
      var tok = [
        {c: wsp[0], f: 'C' + ind(n) + 'H' + ind(2 * n + 2)}, {s: '+'}, {c: wsp[1], f: 'O' + ind(2)}, {s: '→'},
        {c: wsp[2], f: 'CO' + ind(2)}, {s: '+'}, {c: wsp[3], f: 'H' + ind(2) + 'O'}
      ];
      var px = 21;
      function mier() { x.font = '700 ' + px + 'px system-ui, sans-serif'; var sum = 0; tok.forEach(function (k) { k.w = k.s ? x.measureText(k.s).width + 22 : (k.c > 1 ? x.measureText(String(k.c)).width + 3 : 0) + x.measureText(k.f).width; sum += k.w; }); return sum; }
      var tot = mier(); if (tot > w - 24) { px = Math.floor(px * (w - 24) / tot); tot = mier(); }
      var cx = (w - tot) / 2; x.textAlign = 'left';
      tok.forEach(function (k) {
        if (k.s) { x.fillStyle = P.cisza; x.fillText(k.s, cx + 11, 34); }
        else {
          var o = 0;
          if (k.c > 1) { x.fillStyle = P.akcent; var cs = String(k.c); x.fillText(cs, cx, 34); o = x.measureText(cs).width + 3; }
          x.fillStyle = P.tekst; x.fillText(k.f, cx + o, 34);
        }
        cx += k.w;
      });
      x.font = '12.5px system-ui, sans-serif'; x.textAlign = 'center'; x.fillStyle = P.cisza;
      if (mul === 2) x.fillText('współczynniki podwojone — bez ułamków (1 mol paliwa potrzebuje ' + String(tlen).replace('.', ',') + ' mol O₂)', w / 2, 60);

      // --- nagłówki i oś układu
      var L0 = 70, LW = 180, R0 = 330, RW = 180;
      x.font = '600 13px system-ui, sans-serif'; x.fillStyle = P.cisza;
      x.fillText('przed reakcją (substraty)', L0 + LW / 2, 86); x.fillText('po reakcji (produkty)', R0 + RW / 2, 86);
      x.strokeStyle = P.linia; x.lineWidth = 1; x.beginPath(); x.moveTo(24, 98); x.lineTo(w - 24, 98); x.stroke();

      // --- wiersze: C, H, O
      var wier = [
        {el: 'C', l: n * mul, p: n * mul},
        {el: 'H', l: (2 * n + 2) * mul, p: 2 * (n + 1) * mul},
        {el: 'O', l: 2 * wsp[1], p: 2 * wsp[2] + wsp[3]}
      ];
      wier.forEach(function (r, i) {
        var y = 132 + i * 66, t0 = 0.3 + i * 0.8, kol = P[r.el];
        var g = siatka(Math.max(r.l, r.p), LW, 56), dt = Math.min(0.03, 0.8 / Math.max(r.l, r.p));
        // znacznik pierwiastka
        x.beginPath(); x.arc(34, y, 16, 0, 7); x.fillStyle = kol[0]; x.fill(); x.strokeStyle = kol[1]; x.lineWidth = 1.5; x.stroke();
        x.fillStyle = kol[2]; x.font = '700 16px system-ui, sans-serif'; x.textAlign = 'center'; x.fillText(r.el, 34, y + 1);
        [[L0, r.l, 0], [R0, r.p, 1]].forEach(function (b) {
          var rows = Math.ceil(b[1] / g.c), top = y - rows * 2.4 * g.r / 2 + 1.2 * g.r;
          for (var k = 0; k < b[1]; k++) {
            var sc = ss((tr - t0 - k * dt) / 0.25); if (sc <= 0) continue;
            var cxk = b[0] + g.r * 1.2 + (k % g.c) * 2.4 * g.r, cyk = top + Math.floor(k / g.c) * 2.4 * g.r;
            x.beginPath(); x.arc(cxk, cyk, g.r * sc, 0, 7); x.fillStyle = kol[0]; x.fill();
            x.strokeStyle = kol[1]; x.lineWidth = 1; x.stroke();
          }
        });
        var ap = ss((tr - t0 - Math.max(r.l, r.p) * dt - 0.1) / 0.3);
        x.globalAlpha = ap; x.textAlign = 'left'; x.fillStyle = P.tekst; x.font = '700 19px system-ui, sans-serif';
        x.fillText(String(r.l), 262, y); x.fillText(String(r.p), 520, y);
        x.textAlign = 'center'; x.fillStyle = P.ok; x.font = '700 24px system-ui, sans-serif'; x.fillText('=', 300, y);
        x.globalAlpha = 1;
      });
      x.font = '12.5px system-ui, sans-serif'; x.textAlign = 'center'; x.fillStyle = P.cisza;
      x.fillText('każde kółko = 1 atom · po obu stronach strzałki liczby atomów są równe', w / 2, 318);
    }
  });
})();
