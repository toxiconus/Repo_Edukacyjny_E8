/* Klocek: trzy probówki z różnymi metalami obok siebie (Li, Na, K) — porównanie tempa reakcji.
   Ten sam mechanizm co zlewka: metal na dnie, pęcherzyki H₂, barwa tylko przy wskaźniku. */
KLOCKI.def('probowki', {
  opis: 'Trzy probówki z wodą i różnymi metalami obok siebie; porównanie tempa wydzielania H₂.',
  domyslne: {metale: 'Li,Na,K', wskaznik: 1, ciecz: '#dbeafe', szer: 480, wys: 300},
  stan0: function () { return {}; },
  rysuj: function (x, w, h, s, t, opc) {
    var MET = {
      Li: {kolor: '#cbd5e1', rozm: .55, predk: .45, nazwa: 'lit'},
      Na: {kolor: '#e5e7eb', rozm: .75, predk: 1.0, nazwa: 'sód'},
      K:  {kolor: '#f3f4f6', rozm: .95, predk: 2.1, nazwa: 'potas'},
      Mg: {kolor: '#d1d5db', rozm: .6, predk: .2, nazwa: 'magnez'},
      Ca: {kolor: '#e5e7eb', rozm: .7, predk: .5, nazwa: 'wapń'}
    };
    var lista = String(opc.metale).split(',');
    x.clearRect(0, 0, w, h);
    var top = h * .2, bot = h * .9, tw = w / (lista.length * 1.6);
    for (var k = 0; k < lista.length; k++) {
      var m = MET[lista[k]] || MET.Na, cx = w * (k + .5) / lista.length, l = cx - tw / 2, r = cx + tw / 2;
      var pr = +opc.wskaznik ? Math.min(1, t / 4) : 0;
      x.fillStyle = 'rgba(255,255,255,.4)'; x.strokeStyle = '#64748b'; x.lineWidth = 2.5;
      x.beginPath(); x.moveTo(l, top); x.lineTo(l, bot - 10); x.quadraticCurveTo(l, bot, l + 10, bot);
      x.lineTo(r - 10, bot); x.quadraticCurveTo(r, bot, r, bot - 10); x.lineTo(r, top); x.stroke();
      var lvl = h * .42;
      x.fillStyle = pr > 0 ? 'rgba(236,72,153,' + (pr * .8).toFixed(2) + ')' : opc.ciecz;
      x.globalAlpha = .8; x.fillRect(l + 2, lvl, r - l - 4, bot - lvl - 2); x.globalAlpha = 1;
      var my = bot - 14, ms = 22 * m.rozm * Math.max(.45, 1 - t * .04 * m.predk);
      x.fillStyle = m.kolor; x.strokeStyle = '#475569'; x.lineWidth = 1.2;
      x.beginPath(); x.ellipse(cx, my, ms, ms * .45, 0, 0, 6.3); x.fill(); x.stroke();
      x.fillStyle = '#0f172a'; x.font = '600 11px sans-serif'; x.textAlign = 'center';
      x.fillText(lista[k], cx, my + 3);
      x.fillStyle = 'rgba(255,255,255,.95)';
      for (var i = 0; i < 8; i++) {
        var p = (t * .5 * m.predk + i / 8) % 1, bx = cx + Math.sin(i * 2.3 + k) * 8, by = my - 10 - p * (my - 10 - top);
        x.globalAlpha = 1 - p * .6; x.beginPath(); x.arc(bx, by, 1.6 + (i % 3) * .5, 0, 6.3); x.fill();
      }
      x.globalAlpha = 1;
      x.fillStyle = '#0f172a'; x.font = '600 13px sans-serif';
      x.fillText(m.nazwa, cx, top - 8);
    }
    x.fillStyle = '#0f172a'; x.font = '600 14px sans-serif'; x.textAlign = 'center';
    x.fillText('Metal + woda' + (+opc.wskaznik ? ' + fenoloftaleina' : ''), w / 2, h * .08);
  }
});
