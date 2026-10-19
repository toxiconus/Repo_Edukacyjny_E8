/* KLOCEK: probowki-odczyn — probówki przed i po dodaniu odczynnika (barwa, osad, pęcherzyki gazu).
   Opcja tuby: lista probówek oddzielona przecinkami; w każdej: etykieta:kolor_przed:kolor_po:efekt
     kolory: bezbarwny, pomaranczowy, mleczny, niebieski, szafirowy, bialy, fioletowy, zielony
     efekt:  osad (cząstki opadają), gaz (pęcherzyki unoszą się), brak
   Przykład: tuby="Kontrola:pomaranczowy:pomaranczowy:brak,Eten:pomaranczowy:bezbarwny:brak"
   Opcja kat: pochylenie probówek w stopniach (np. 45 przy ogrzewaniu); poziom cieczy zostaje poziomy.
   Animacja w cyklu 7 s: przed → przejście → po. Klik zatrzymuje/wznawia (montuj). */
(function () {
  var KOL = {
    bezbarwny: '#e0f2fe', pomaranczowy: '#f97316', mleczny: '#cbd5e1', niebieski: '#60a5fa',
    szafirowy: '#1e3a8a', bialy: '#f8fafc', fioletowy: '#7e22ce', zielony: '#16a34a'
  };
  function hex(h) { var n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function mieszaj(a, b, k) {
    var A = hex(a), B = hex(b);
    return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(A[i] + (B[i] - A[i]) * k); }).join(',') + ')';
  }
  function kol(n) { return KOL[n] || KOL.bezbarwny; }
  function probowki(s) {
    return String(s || '').split(',').map(function (t) {
      var p = t.split(':').map(function (v) { return v.trim(); });
      return {etyk: p[0] || '', przed: p[1] || 'bezbarwny', po: p[2] || p[1] || 'bezbarwny', efekt: p[3] || 'brak'};
    }).filter(function (p) { return p.etyk; }).slice(0, 4);
  }
  var IND = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
  function indeksy(s) {
    return String(s).replace(/([A-Za-z\)])(\d+)/g, function (_, a, d) {
      return a + d.split('').map(function (c) { return IND[c]; }).join('');
    });
  }
  function sm(v) { v = Math.max(0, Math.min(1, v)); return v * v * (3 - 2 * v); }

  KLOCKI.def('probowki-odczyn', {
    opis: 'Probówki przed i po dodaniu odczynnika: zmiana barwy, opadający osad lub pęcherzyki gazu.',
    domyslne: {tuby: 'Kontrola:bezbarwny:bezbarwny:brak,Woda wapienna + CO₂:bezbarwny:mleczny:osad', szer: 480, wys: 300, kat: 0},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var tuby = probowki(opc.tuby);
      var n = tuby.length;
      x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h);
      if (!n) return;
      var cykl = t % 7;
      var p = sm((cykl - 2) / 1.5);                 // 0 = przed, 1 = po
      var kz = Math.abs(Number(opc.kat) || 0) * Math.PI / 180;
      var gap = 16 + (kz ? 60 * Math.sin(kz) : 0), tw = Math.min(96, (w - 30 - (n - 1) * gap) / n);
      var top = 30, bot = h - 62, x0 = (w - (n * tw + (n - 1) * gap)) / 2;
      x.textAlign = 'center'; x.textBaseline = 'middle';

      tuby.forEach(function (tb, i) {
        var X = x0 + i * (tw + gap), rr = tw / 2;
        var lvl = bot - (bot - top) * 0.6;
        var barwa = mieszaj(kol(tb.przed), kol(tb.po), p);
        var pozostaje = (tb.efekt === 'osad' && p > 0.6) ? 0.9 : 0.85;
        var ang = (Number(opc.kat) || 0) * Math.PI / 180;   // pochylenie probówki (np. 45 przy ogrzewaniu)
        x.save();
        if (ang) { x.translate(X + rr, (top + bot) / 2); x.rotate(ang); x.translate(-(X + rr), -(top + bot) / 2); }

        // korpus probówki jako ścieżka (używana też do przycięcia cieczy)
        function korpus() {
          x.beginPath();
          x.moveTo(X, top); x.lineTo(X, bot - rr);
          x.arc(X + rr, bot - rr, rr, Math.PI, 0, true);
          x.lineTo(X + tw, top);
        }

        // ciecz przycięta do kształtu probówki
        x.save(); korpus(); x.lineTo(X + tw - 1, top - 2); x.lineTo(X + 1, top - 2); x.closePath(); x.clip();
        x.globalAlpha = pozostaje;
        x.fillStyle = barwa;
        if (ang) { x.save(); x.translate(X + rr, lvl); x.rotate(-ang); x.fillRect(-tw * 2, 0, tw * 4, h); x.restore(); }
        else x.fillRect(X, lvl, tw, bot - lvl);
        x.globalAlpha = 1;
        x.restore();

        // osad opadający na dno (kolor po reakcji)
        if (tb.efekt === 'osad') {
          x.fillStyle = kol(tb.po);
          for (var k = 0; k < 12; k++) {
            var px = X + 8 + ((k * 37 + i * 11) % Math.max(1, tw - 16));
            var fr = Math.min(1, Math.max(0, p * 1.4 - (k % 4) * 0.08));
            var yy = (lvl + 8) + (bot - 12 - (k % 3) * 3 - (lvl + 8)) * fr;
            x.globalAlpha = 0.9;
            x.beginPath(); x.arc(px, yy, 2.2, 0, 2 * Math.PI); x.fill();
          }
          x.globalAlpha = 1;
        }

        // pęcherzyki gazu unoszące się po reakcji
        if (tb.efekt === 'gaz' && p > 0.1) {
          x.fillStyle = 'rgba(255,255,255,.9)';
          for (var b = 0; b < 10; b++) {
            var bx = X + 10 + ((b * 29 + i * 7) % Math.max(1, tw - 20));
            var by = bot - 6 - ((t * 38 + b * 23) % (bot - lvl - 10));
            x.beginPath(); x.arc(bx, by, 2 + (b % 3) * 0.6, 0, 2 * Math.PI); x.fill();
          }
        }

        // korpus probówki (zaokrąglone dno)
        x.strokeStyle = '#64748b'; x.lineWidth = 2;
        korpus(); x.stroke();
        x.restore();

        // podpis
        x.fillStyle = '#0f172a'; x.font = '12px system-ui, sans-serif';
        x.fillText(indeksy(tb.etyk), X + rr, bot + 22);
      });
    }
  });
})();
