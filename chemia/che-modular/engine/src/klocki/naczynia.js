/* NACZYNIA — wspólna geometria i wygląd szkła dla klocków (jedna probówka dla probowki, probowki-odczyn i kolejnych).
   Zgodna z gfx/chemia/naczynia/testTube.js: proste ścianki, półokrągłe dno, szerokość do 70 px (tu dowolna).
   KLOCKI.naczynia.probowkaPath(x, cx, top, dnoY, tw) — ścieżka korpusu (otwarta u góry); dnoY = środek łuku dna.
   KLOCKI.naczynia.szklo(x, cx, top, dnoY, tw, poziom) — cieniowanie szkła, obrys, połysk, brzeg i (gdy podano poziom y cieczy) menisk; rysować po cieczy. */
(function (g) {
  var N = g.KLOCKI.naczynia = g.KLOCKI.naczynia || {};
  N.probowkaPath = function (x, cx, top, dnoY, tw) {
    var l = cx - tw / 2, r = cx + tw / 2;
    x.beginPath(); x.moveTo(l, top); x.lineTo(l, dnoY); x.arc(cx, dnoY, tw / 2, Math.PI, 0, true); x.lineTo(r, top);
  };
  N.szklo = function (x, cx, top, dnoY, tw, poziom) {
    var l = cx - tw / 2, r = cx + tw / 2, kol = '#64748b';
    try { kol = getComputedStyle(x.canvas).getPropertyValue('--text-soft').trim() || kol; } catch (e) { }
    x.save();
    // cieniowanie szkła: jasny pas z lewej, delikatny cień z prawej (jak w rx-lite); przycięte do wnętrza probówki
    x.save(); N.probowkaPath(x, cx, top, dnoY, tw); x.closePath(); x.clip();
    var gr = x.createLinearGradient(l, 0, r, 0);
    gr.addColorStop(0, 'rgba(255,255,255,.26)'); gr.addColorStop(.22, 'rgba(255,255,255,0)'); gr.addColorStop(.86, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,.16)');
    x.fillStyle = gr; x.fillRect(l, top, tw, dnoY + tw / 2 - top);
    if (poziom != null && poziom > top && poziom < dnoY) { x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 1.6; x.lineCap = 'round'; x.beginPath(); x.moveTo(l + 1, poziom); x.lineTo(r - 1, poziom); x.stroke(); }
    x.restore();
    N.probowkaPath(x, cx, top, dnoY, tw);
    x.strokeStyle = kol; x.lineWidth = 2.5; x.lineJoin = 'round'; x.lineCap = 'round'; x.stroke();
    // połysk po lewej stronie ścianki
    x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 2; x.lineCap = 'round';
    x.beginPath(); x.moveTo(l + 5, top + 14); x.lineTo(l + 5, dnoY - 4); x.stroke();
    // brzeg
    x.strokeStyle = kol; x.lineWidth = 2.5;
    x.beginPath(); x.moveTo(l - 3, top); x.lineTo(r + 3, top); x.stroke();
    x.restore();
  };
})(window);
