/* Klocek: próba płomieniowa. Płomień palnika najpierw ma barwę gazu (pomarańczową),
   potem powoli przechodzi w barwę metalu (wzbudzone atomy wracają do stanu podstawowego). */
function mieszajHex(a, b, k) {
  var A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16), o = '#';
  for (var sh = 16; sh >= 0; sh -= 8) {
    var ca = (A >> sh) & 255, cb = (B >> sh) & 255;
    o += ('0' + Math.round(ca + (cb - ca) * k).toString(16)).slice(-2);
  }
  return o;
}
KLOCKI.def('plomien', {
  opis: 'Płomień palnika: barwa powoli zmienia się z pomarańczowej w barwę metalu.',
  domyslne: {metal: 'Na', barwa: '#f59e0b', nazwa: 'Na — żółty', szer: 480, wys: 300},
  stan0: function () { return {}; },
  rysuj: function (x, w, h, s, t, opc) {
    x.clearRect(0, 0, w, h);
    var k = Math.min(1, t / 3), kol = mieszajHex('#fb923c', opc.barwa, k);
    var cx = w / 2, base = h * .85, H = h * .55, fl = Math.sin(t * 6) * 4;
    var g = x.createRadialGradient(cx, base - H * .4, 4, cx, base - H * .4, H * .7);
    g.addColorStop(0, kol); g.addColorStop(1, 'rgba(' + parseInt(kol.slice(1,3),16)+','+parseInt(kol.slice(3,5),16)+','+parseInt(kol.slice(5,7),16)+',0)');
    x.fillStyle = g; x.beginPath(); x.ellipse(cx, base - H * .4, H * .45, H * .7, 0, 0, 6.3); x.fill();
    x.fillStyle = '#334155'; x.fillRect(cx - 14, base, 28, h * .08);
    x.fillStyle = kol; x.beginPath(); x.moveTo(cx - 14, base);
    x.quadraticCurveTo(cx - 20 + fl, base - H * .6, cx + fl, base - H);
    x.quadraticCurveTo(cx + 20 - fl, base - H * .6, cx + 14, base); x.fill();
    x.fillStyle = '#0f172a'; x.font = '600 16px sans-serif'; x.textAlign = 'center';
    x.fillText(opc.nazwa, cx, h * .08 + 14);
  }
});
