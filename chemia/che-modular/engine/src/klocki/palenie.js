/* Klocek: palenie metalu w powietrzu. Każdy metal ma inną barwę płomienia i inne iskry:
   magnez — jasny biały błysk i iskry, sód — żółty płomień, potas — fioletowy. */
KLOCKI.def('palenie', {
  opis: 'Palenie metalu: płomień i iskry w barwie zależnej od metalu.',
  domyslne: {metal: 'Mg', szer: 480, wys: 300},
  stan0: function () { return {}; },
  rysuj: function (x, w, h, s, t, opc) {
    var M = {
      Mg: {nazwa: 'magnez — biały błysk', barwa: '#ffffff', otoczka: '#fde68a', iskry: 24, predk: 2.5},
      Na: {nazwa: 'sód — żółty płomień', barwa: '#fde047', otoczka: '#f59e0b', iskry: 6, predk: 1},
      K:  {nazwa: 'potas — fioletowy płomień', barwa: '#c4b5fd', otoczka: '#a78bfa', iskry: 4, predk: 1.2}
    }[opc.metal] || {nazwa: opc.metal, barwa: '#fde047', otoczka: '#f59e0b', iskry: 6, predk: 1};
    x.clearRect(0, 0, w, h);
    var cx = w / 2, base = h * .85, H = h * .5;
    var pulse = 1 + .08 * Math.sin(t * 9 * M.predk);
    var g = x.createRadialGradient(cx, base - H * .5, 6, cx, base - H * .5, H * .9 * pulse);
    g.addColorStop(0, M.barwa); g.addColorStop(.35, M.otoczka); g.addColorStop(1, M.otoczka.replace('#','').length==6 ? 'rgba(' + parseInt(M.otoczka.slice(1,3),16)+','+parseInt(M.otoczka.slice(3,5),16)+','+parseInt(M.otoczka.slice(5,7),16)+',0)' : 'rgba(0,0,0,0)');
    x.globalAlpha = .9; x.fillStyle = g;
    x.beginPath(); x.ellipse(cx, base - H * .5, H * .4 * pulse, H * .75 * pulse, 0, 0, 6.3); x.fill();
    x.globalAlpha = 1;
    x.fillStyle = '#334155'; x.fillRect(cx - 40, base, 80, h * .05);
    x.fillStyle = '#e5e7eb'; x.strokeStyle = '#475569'; x.lineWidth = 1.5;
    x.beginPath(); x.rect(cx - 16, base - 14, 32, 14); x.fill(); x.stroke();
    for (var i = 0; i < M.iskry; i++) {
      var p = (t * .7 * M.predk + i / M.iskry) % 1, sx = cx + Math.sin(i * 3.1) * 40 * p, sy = base - 14 - p * H * .95;
      x.globalAlpha = 1 - p; x.fillStyle = i % 2 ? M.barwa : M.otoczka;
      x.beginPath(); x.arc(sx, sy, 1.5 + (i % 3) * .5, 0, 6.3); x.fill();
    }
    x.globalAlpha = 1;
    x.fillStyle = '#0f172a'; x.font = '600 15px sans-serif'; x.textAlign = 'center';
    x.fillText(M.nazwa, cx, h * .08 + 12);
  }
});
