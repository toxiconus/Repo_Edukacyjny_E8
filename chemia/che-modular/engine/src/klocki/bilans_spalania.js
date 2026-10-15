/* KLOCEK: bilans-spalania — spalanie całkowite alkanu CₙH₂ₙ₊₂ (LKO-ORG01 §2).
   Opcje (w lekcji): n="3"  liczba atomów węgla w alkanie (1–10)
   Rysunek liczy współczynniki z n: O₂ = n + (2n+2)/4, CO₂ = n, H₂O = n+1, i pokazuje bilans atomów
   po obu stronach równania (C, H, O). Bez odpowiedzi — uczeń porównuje słupki sam. */
(function () {
  var IND = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
  function ind(s) { return String(s).replace(/\d/g, function (d) { return IND[d]; }); }
  function ulamek(v) { return Math.round(v * 100) / 100; }

  KLOCKI.def('bilans-spalania', {
    opis: 'Bilans spalania całkowitego alkanu: współczynniki z n i liczba atomów C, H, O po obu stronach równania.',
    domyslne: {n: 3, szer: 560, wys: 300},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var n = Math.max(1, Math.min(10, Math.round(Number(opc.n) || 3)));
      var tlen = n + (2 * n + 2) / 4;             // mole O₂ na mol alkanu
      var ws = [1, tlen, n, n + 1];                 // współczynniki: paliwo, O₂, CO₂, H₂O
      var wsTxt = function (k) { return (ws[k] === 1 ? '' : (Number.isInteger(ws[k]) ? String(ws[k]) : ulamek(ws[k]).toString().replace('.', ','))); };
      x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h);
      x.textAlign = 'center'; x.textBaseline = 'middle';

      // równanie
      x.font = 'bold 17px system-ui, sans-serif'; x.fillStyle = '#0f172a';
      var eq = (ws[0] === 1 ? '' : '') + 'C' + ind(n) + 'H' + ind(2 * n + 2) + '  +  ' + wsTxt(1) + ' O₂  →  ' +
               wsTxt(2) + ' CO₂  +  ' + wsTxt(3) + ' H₂O';
      x.fillText(eq, w / 2, h * .14);

      // bilans atomów: wiersz na pierwiastek, kółka lewo i prawo
      var wier = [
        {el: 'C', col: '#475569', l: n, p: n},
        {el: 'H', col: '#94a3b8', l: 2 * n + 2, p: 2 * (n + 1)},
        {el: 'O', col: '#dc2626', l: 2 * tlen, p: 2 * n + (n + 1)}
      ];
      x.font = '15px system-ui, sans-serif';
      wier.forEach(function (r, i) {
        var y = h * (.38 + i * .2);
        x.fillStyle = '#334155'; x.textAlign = 'right'; x.fillText(r.el, w * .12, y);
        var kolo = function (x0, count) {
          for (var k = 0; k < count && k < 24; k++) {
            x.beginPath(); x.fillStyle = r.col; x.arc(x0 + k * 13, y, 5, 0, 7); x.fill();
          }
          x.fillStyle = '#0f172a'; x.textAlign = 'left'; x.fillText(String(count), x0 + Math.min(count, 24) * 13 + 8, y);
        };
        kolo(w * .2, r.l);
        x.fillStyle = '#64748b'; x.textAlign = 'center'; x.fillText('=', w * .66, y);
        kolo(w * .72, r.p);
      });
      x.fillStyle = '#64748b'; x.font = '13px system-ui, sans-serif'; x.textAlign = 'center';
      x.fillText('lewa strona: substraty', w * .3, h * .92);
      x.fillText('prawa strona: produkty', w * .8, h * .92);
    }
  });
})();
