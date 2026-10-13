/* Klocek: próba płomieniowa — barwa płomienia zależy od metalu (P01). */
KLOCKI.def('plomien', {
  opis: 'Płomień palnika z barwą charakterystyczną dla metalu.',
  domyslne: {metal: 'Na', barwa: '#f59e0b', nazwa: 'sód — żółty'},
  stan0: function () { return {}; },
  rysuj: function (x, w, h, s, t, opc) {
    x.clearRect(0, 0, w, h);
    var cx = w / 2, base = h * .85, H = h * .55, fl = Math.sin(t * 6) * 4;
    var g = x.createRadialGradient(cx, base - H * .4, 4, cx, base - H * .4, H * .7);
    g.addColorStop(0, opc.barwa); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.beginPath(); x.ellipse(cx, base - H * .4, H * .45, H * .7, 0, 0, 6.3); x.fill();
    x.fillStyle = '#334155'; x.fillRect(cx - 14, base, 28, h * .08);
    x.fillStyle = opc.barwa; x.beginPath(); x.moveTo(cx - 14, base);
    x.quadraticCurveTo(cx - 20 + fl, base - H * .6, cx + fl, base - H);
    x.quadraticCurveTo(cx + 20 - fl, base - H * .6, cx + 14, base); x.fill();
    x.fillStyle = '#0f172a'; x.font = '600 16px sans-serif'; x.textAlign = 'center';
    x.fillText(opc.nazwa, cx, h * .08 + 14);
  }
});
