/* KLOCEK: lancuch-przemian — schemat przemian: wzory substancji połączone strzałkami z literami reakcji.
   Opcje (w lekcji): wezly="Ca,CaO,Ca(OH)2,CaCO3"  kolejne substancje; cyfry po literach zamieniane na indeksy dolne
                     etyk="A,B,C"                  litery (lub krótkie etykiety) nad strzałkami, w kolejności
                     zamkniety="1"                 obieg: ostatnia substancja wraca do pierwszej (układ kołowy)
   Bez zamknięcia: układ liniowy. Strzałki i etykiety nie zawierają odpowiedzi — uczeń zapisuje równania sam. */
(function () {
  var IND = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
  function indeksy(s) {
    return String(s).replace(/([A-Za-z\)])(\d+)/g, function (_, a, d) {
      return a + d.split('').map(function (c) { return IND[c]; }).join('');
    });
  }
  function przytnij(v) { return Math.max(0, Math.min(1, v)); }

  // strzałka z grotem od (x1,y1) do (x2,y2); skrócona o zadany odstęp przy obu końcach
  function strzalka(x, x1, y1, x2, y2, skr1, skr2) {
    var dx = x2 - x1, dy = y2 - y1, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / d, uy = dy / d;
    var ax = x1 + ux * skr1, ay = y1 + uy * skr1, bx = x2 - ux * skr2, by = y2 - uy * skr2;
    x.beginPath(); x.moveTo(ax, ay); x.lineTo(bx, by); x.stroke();
    var ang = Math.atan2(by - ay, bx - ax), g = 9;
    x.beginPath(); x.moveTo(bx, by);
    x.lineTo(bx - g * Math.cos(ang - 0.4), by - g * Math.sin(ang - 0.4));
    x.lineTo(bx - g * Math.cos(ang + 0.4), by - g * Math.sin(ang + 0.4));
    x.closePath(); x.fill();
  }
  // odstęp od środka prostokąta (bw × bh) do jego krawędzi w kierunku (ux, uy)
  function wyjscie(ux, uy, bw, bh) {
    var sx = Math.abs(ux) > 1e-6 ? (bw / 2) / Math.abs(ux) : Infinity;
    var sy = Math.abs(uy) > 1e-6 ? (bh / 2) / Math.abs(uy) : Infinity;
    return Math.min(sx, sy) + 5;
  }

  KLOCKI.def('lancuch-przemian', {
    opis: 'Schemat przemian: wzory substancji połączone strzałkami z literami reakcji; układ liniowy albo obieg zamknięty.',
    domyslne: {wezly: 'Ca,CaO,Ca(OH)2,CaCO3', etyk: 'A,B,C', zamkniety: 0, szer: 480, wys: 300},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var wezly = String(opc.wezly || '').split(',').map(function (v) { return v.trim(); }).filter(Boolean).slice(0, 8);
      var etyk = String(opc.etyk || '').split(',').map(function (v) { return v.trim(); });
      var n = wezly.length;
      x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h);
      if (n < 2) return;
      var BH = 36, cierne = Number(opc.zamkniety) === 1;
      x.font = '16px system-ui, sans-serif'; x.textBaseline = 'middle'; x.textAlign = 'center';
      var pos = [], bw;

      if (cierne) {
        // obieg: węzły na okręgu, pierwszy na górze
        var cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.34;
        bw = Math.min(118, w * 0.22);
        for (var i = 0; i < n; i++) {
          var a = -Math.PI / 2 + 2 * Math.PI * i / n;
          pos.push({x: cx + R * Math.cos(a) * (w / h > 1.4 ? 1.25 : 1), y: cy + R * Math.sin(a)});
        }
      } else {
        // łańcuch w jednym rzędzie
        var gap = 34, maxBw = 120;
        bw = Math.min(maxBw, (w - 30 - (n - 1) * gap) / n);
        var total = n * bw + (n - 1) * gap, x0 = (w - total) / 2;
        for (var j = 0; j < n; j++) pos.push({x: x0 + bw / 2 + j * (bw + gap), y: h * 0.45});
      }

      // strzałki i etykiety
      var pary = cierne ? n : n - 1;
      x.strokeStyle = '#334155'; x.fillStyle = '#334155'; x.lineWidth = 2;
      for (var k = 0; k < pary; k++) {
        var p1 = pos[k], p2 = pos[(k + 1) % n];
        var dx = p2.x - p1.x, dy = p2.y - p1.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
        var ux = dx / d, uy = dy / d;
        var s1 = wyjscie(ux, uy, bw, BH), s2 = wyjscie(-ux, -uy, bw, BH);
        strzalka(x, p1.x, p1.y, p2.x, p2.y, s1, s2);
        var mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
        var nx = cierne ? (mx - w / 2) : 0, ny = cierne ? (my - h / 2) : -22;
        var nl = Math.sqrt(nx * nx + ny * ny) || 1;
        var off = cierne ? 18 : 0;
        var lx = mx + (nx / nl) * off, ly = my + (ny / nl) * off + (cierne ? 0 : 0);
        if (!cierne) { lx = mx; ly = my - 22; }
        x.fillStyle = '#b45309'; x.font = 'bold 15px system-ui, sans-serif';
        x.fillText(etyk[k] || '', lx, ly);
        x.fillStyle = '#334155'; x.font = '16px system-ui, sans-serif';
      }

      // węzły: prostokąty z wzorem
      for (var q = 0; q < n; q++) {
        var P = pos[q];
        x.fillStyle = '#eef6ff'; x.strokeStyle = '#1e40af'; x.lineWidth = 1.5;
        var bx = P.x - bw / 2, by = P.y - BH / 2;
        x.beginPath();
        if (x.roundRect) x.roundRect(bx, by, bw, BH, 8); else x.rect(bx, by, bw, BH);
        x.fill(); x.stroke();
        x.fillStyle = '#0f172a'; x.fillText(indeksy(wezly[q]), P.x, P.y);
      }
    }
  });
})();
