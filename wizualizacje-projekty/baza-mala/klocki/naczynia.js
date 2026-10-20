/* NACZYNIA — wspólna geometria i wygląd szkła dla klocków (jedna probówka dla probowki, probowki-odczyn i kolejnych).
   Zgodna z gfx/chemia/naczynia/testTube.js: proste ścianki, półokrągłe dno, szerokość do 70 px (tu dowolna).
   KLOCKI.naczynia.probowkaPath(x, cx, top, dnoY, tw) — ścieżka korpusu (otwarta u góry); dnoY = środek łuku dna.
   KLOCKI.naczynia.szklo(x, cx, top, dnoY, tw)         — obrys, połysk i brzeg (rysować po cieczy). */
(function (g) {
  var N = g.KLOCKI.naczynia = g.KLOCKI.naczynia || {};
  N.probowkaPath = function (x, cx, top, dnoY, tw) {
    var l = cx - tw / 2, r = cx + tw / 2;
    x.beginPath(); x.moveTo(l, top); x.lineTo(l, dnoY); x.arc(cx, dnoY, tw / 2, Math.PI, 0, true); x.lineTo(r, top);
  };
  N.szklo = function (x, cx, top, dnoY, tw) {
    var l = cx - tw / 2, r = cx + tw / 2, kol = '#64748b';
    try { kol = getComputedStyle(x.canvas).getPropertyValue('--text-soft').trim() || kol; } catch (e) { }
    x.save();
    N.probowkaPath(x, cx, top, dnoY, tw);
    x.strokeStyle = kol; x.lineWidth = 2; x.lineJoin = 'round'; x.stroke();
    // połysk po lewej stronie ścianki
    x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 2; x.lineCap = 'round';
    x.beginPath(); x.moveTo(l + 5, top + 14); x.lineTo(l + 5, dnoY - 4); x.stroke();
    // brzeg
    x.strokeStyle = kol; x.lineWidth = 2.5;
    x.beginPath(); x.moveTo(l - 3, top); x.lineTo(r + 3, top); x.stroke();
    x.restore();
  };
})(window);
