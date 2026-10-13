/* Klocek: reakcja metal + woda — zlewka, pęcherzyki H₂, wynik wodorotlenku w zlewce. */
KLOCKI.def('metal-woda', {
  opis: 'Metal wrzucony do wody: pęcherzyki wodoru, roztwór zasady (fenoloftaleina różowieje).',
  domyslne: {metal: 'Na', szybkosc: 1, ciecz: '#dbeafe'},
  stan0: function () { return {}; },
  rysuj: function (x, w, h, s, t, opc) {
    x.clearRect(0, 0, w, h);
    var l = w * .2, r = w * .8, top = h * .18, bot = h * .9, lvl = h * .32;
    var pr = Math.min(1, t / 4) ;
    x.fillStyle = 'rgba(255,255,255,.4)'; x.strokeStyle = '#64748b'; x.lineWidth = 3;
    x.beginPath(); x.moveTo(l, top); x.lineTo(l, bot - 12); x.quadraticCurveTo(l, bot, l + 12, bot);
    x.lineTo(r - 12, bot); x.quadraticCurveTo(r, bot, r, bot - 12); x.lineTo(r, top); x.stroke();
    var rozowy = pr > .6 ? 'rgba(236,72,153,' + ((pr - .6) * 2.5).toFixed(2) + ')' : null;
    x.fillStyle = rozowy ? rozowy : opc.ciecz; x.globalAlpha = .8;
    x.fillRect(l + 2, lvl, r - l - 4, bot - lvl - 2); x.globalAlpha = 1;
    x.fillStyle = '#0f172a'; x.font = '600 15px sans-serif'; x.textAlign = 'center';
    x.fillText(opc.metal + ' + H₂O', w / 2, h * .08 + 12);
    x.fillStyle = 'rgba(255,255,255,.95)';
    for (var i = 0; i < 16; i++) {
      var p = ((t * .4 * opc.szybkosc + i * .11) % 1), bx = l + 18 + ((i * 47) % (r - l - 36)), by = bot - p * (bot - lvl);
      x.beginPath(); x.arc(bx, by, 2 + (i % 3), 0, 6.3); x.fill();
    }
  }
});
