/* Klocek: zlewka z cieczą i bąbelkami (wodór przy reakcji metal + woda). */
KLOCKI.def('zlewka', {
  opis: 'Zlewka z wodą; po wrzuceniu metalu pojawiają się bąbelki gazu.',
  domyslne: {ciecz: '#dbeafe', bombelki: 0, opis: null},
  stan0: function () { return {}; },
  rysuj: function (x, w, h, s, t, opc) {
    x.clearRect(0, 0, w, h);
    var l = w * .2, r = w * .8, top = h * .18, bot = h * .9, lvl = h * .32;
    x.fillStyle = 'rgba(255,255,255,.4)'; x.strokeStyle = '#64748b'; x.lineWidth = 3;
    x.beginPath(); x.moveTo(l, top); x.lineTo(l, bot - 12); x.quadraticCurveTo(l, bot, l + 12, bot);
    x.lineTo(r - 12, bot); x.quadraticCurveTo(r, bot, r, bot - 12); x.lineTo(r, top); x.stroke();
    x.fillStyle = opc.ciecz; x.globalAlpha = .75;
    x.fillRect(l + 2, lvl, r - l - 4, bot - lvl - 2); x.globalAlpha = 1;
    if (opc.bombelki) {
      x.fillStyle = 'rgba(255,255,255,.9)';
      for (var i = 0; i < 14; i++) {
        var p = ((t * .35 + i * .13) % 1), bx = l + 20 + ((i * 53) % (r - l - 40)), by = bot - p * (bot - lvl);
        x.beginPath(); x.arc(bx, by, 2 + (i % 3), 0, 6.3); x.fill();
      }
    }
  }
});
