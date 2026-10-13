/* Klocek: metal wrzucony do wody. Metal (Li, Na, K) jest widoczny na dnie zlewki,
   pęcherzyki H₂ tworzą się w tempie zależnym od metalu, kawałek się zmniejsza.
   Barwa roztworu zmienia się tylko przy wskaźniku (fenoloftaleina → różowo). */
KLOCKI.def('metal-woda', {
  opis: 'Kawałek metalu w zlewce z wodą; pęcherzyki wodoru, tempo zależne od metalu; przy fenoloftaleinie roztwór różowieje.',
  domyslne: {metal: 'Na', wskaznik: 0, ciecz: '#dbeafe', szer: 480, wys: 300},
  stan0: function () { return {}; },
  rysuj: function (x, w, h, s, t, opc) {
    var MET = {
      Li: {kolor: '#cbd5e1', rozm: .55, predk: .45, nazwa: 'lit'},
      Na: {kolor: '#e5e7eb', rozm: .75, predk: 1.0, nazwa: 'sód'},
      K:  {kolor: '#f3f4f6', rozm: .95, predk: 2.1, nazwa: 'potas'}
    };
    var m = MET[opc.metal] || MET.Na;
    x.clearRect(0, 0, w, h);
    var l = w * .2, r = w * .8, top = h * .18, bot = h * .9, lvl = h * .32;
    var pr = opc.wskaznik ? Math.min(1, t / 4) : 0;
    x.fillStyle = 'rgba(255,255,255,.4)'; x.strokeStyle = '#64748b'; x.lineWidth = 3;
    x.beginPath(); x.moveTo(l, top); x.lineTo(l, bot - 12); x.quadraticCurveTo(l, bot, l + 12, bot);
    x.lineTo(r - 12, bot); x.quadraticCurveTo(r, bot, r, bot - 12); x.lineTo(r, top); x.stroke();
    var rozowy = pr > 0 ? 'rgba(236,72,153,' + (pr * .8).toFixed(2) + ')' : null;
    x.fillStyle = rozowy || opc.ciecz; x.globalAlpha = .8;
    x.fillRect(l + 2, lvl, r - l - 4, bot - lvl - 2); x.globalAlpha = 1;
    /* metal na dnie — zmniejsza się w trakcie reakcji */
    var mx = w / 2, my = bot - 16, ms = 34 * m.rozm * Math.max(.45, 1 - t * .04 * m.predk);
    x.fillStyle = m.kolor; x.strokeStyle = '#475569'; x.lineWidth = 1.5;
    x.beginPath(); x.ellipse(mx, my, ms, ms * .45, 0, 0, 6.3); x.fill(); x.stroke();
    x.fillStyle = '#0f172a'; x.font = '600 13px sans-serif'; x.textAlign = 'center';
    x.fillText(opc.metal, mx, my + 4);
    /* pęcherzyki H₂ z powierzchni metalu */
    x.fillStyle = 'rgba(255,255,255,.95)';
    for (var i = 0; i < 14; i++) {
      var p = (t * .5 * m.predk + i / 14) % 1, bx = mx + Math.sin(i * 2.3) * 14, by = my - 12 - p * (my - 12 - top);
      x.globalAlpha = 1 - p * .6;
      x.beginPath(); x.arc(bx, by, 2 + (i % 3) * .6, 0, 6.3); x.fill();
    }
    x.globalAlpha = 1;
    x.fillStyle = '#0f172a'; x.font = '600 15px sans-serif'; x.textAlign = 'center';
    x.fillText(m.nazwa + ' + H₂O' + (opc.wskaznik ? ' + fenoloftaleina' : ''), w / 2, h * .08 + 12);
  }
});
