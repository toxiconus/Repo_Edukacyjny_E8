/* KLOCEK: krzywe-rozpuszczalnosci — krzywe rozpuszczalności (g substancji na 100 g wody) od temperatury.
   Dane: tabele A i B z LKO-KRZYWE (wartości tablicowe). Inne substancje dodawać w słowniku DANE.
   Opcje (w lekcji): subst="KNO3,NaCl"  lista kluczy z DANE (pierwsza = substancja, dla której liczone są strefy)
                     T="60"             temperatura odczytu, 20–80 °C
                     m="120"            (opcjonalnie) masa rozpuszczonej substancji na 100 g wody — punkt (T, m)
                     strefy="0"         wyłącza opisy stref (domyślnie włączone)
   Strefy (zgodnie z lekcją): pod krzywą = nienasycony, na krzywej = nasycony, nad krzywą = nasycony z osadem. */
(function () {
  var DANE = {
    'KNO3':    {nazwa: 'KNO₃',     kolor: '#dc2626', pkt: [[20, 32], [40, 62], [60, 110], [80, 167]]},
    'KNO3-R03': {nazwa: 'KNO₃',   kolor: '#dc2626', pkt: [[0, 13], [20, 32], [40, 64], [60, 110], [80, 169]]},   // wartości jak w tabeli lekcji R03
    'NaCl-R03': {nazwa: 'NaCl',    kolor: '#2563eb', pkt: [[0, 36], [20, 36], [40, 37], [60, 37], [80, 38]]},
    'NaCl':    {nazwa: 'NaCl',     kolor: '#2563eb', pkt: [[20, 36], [40, 36.5], [60, 37], [80, 38]]},
    'NH4Cl':   {nazwa: 'NH₄Cl',    kolor: '#16a34a', pkt: [[20, 37], [40, 46], [60, 55], [80, 66]]},
    'Ca(OH)2': {nazwa: 'Ca(OH)₂',  kolor: '#9333ea', pkt: [[20, 0.16]]}
  };
  var TMAX = 100, MMAX = 200;

  function interp(pkt, T) {
    if (pkt.length === 1) return pkt[0][0] === T ? pkt[0][1] : null;
    if (T < pkt[0][0] || T > pkt[pkt.length - 1][0]) return null;
    for (var i = 0; i < pkt.length - 1; i++) {
      var a = pkt[i], b = pkt[i + 1];
      if (T >= a[0] && T <= b[0]) return a[1] + (b[1] - a[1]) * (T - a[0]) / (b[0] - a[0]);
    }
    return null;
  }

  KLOCKI.def('krzywe-rozpuszczalnosci', {
    opis: 'Krzywe rozpuszczalności od temperatury (g na 100 g wody); przy wybranej T trzy strefy: nienasycony, nasycony, nasycony z osadem; opcjonalny punkt (T, m).',
    domyslne: {subst: 'KNO3,NaCl,NH4Cl', T: 40, m: null, strefy: 1, szer: 480, wys: 300},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var L = 60, R = w - 14, TOP = 14, B = h - 42;
      var px = function (T) { return L + (T / TMAX) * (R - L); };
      var py = function (m) { return B - (m / MMAX) * (B - TOP); };
      var keys = String(opc.subst || 'KNO3').split(',').map(function (k) { return k.trim(); })
        .filter(function (k) { return DANE[k]; });
      var T = Number(opc.T); if (isNaN(T)) T = 40; T = Math.max(20, Math.min(80, T));
      var m = (opc.m === null || opc.m === undefined || opc.m === '' || isNaN(Number(opc.m))) ? null : Number(opc.m);

      x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h);
      x.font = '12px system-ui, sans-serif'; x.textBaseline = 'middle';

      // siatka i podziałka
      x.strokeStyle = '#e5e7eb'; x.lineWidth = 1;
      for (var T0 = 0; T0 <= TMAX; T0 += 20) {
        x.beginPath(); x.moveTo(px(T0), TOP); x.lineTo(px(T0), B); x.stroke();
        x.fillStyle = '#374151'; x.textAlign = 'center'; x.fillText(String(T0), px(T0), B + 14);
      }
      for (var M0 = 0; M0 <= MMAX; M0 += 40) {
        x.beginPath(); x.moveTo(L, py(M0)); x.lineTo(R, py(M0)); x.stroke();
        x.fillStyle = '#374151'; x.textAlign = 'right'; x.fillText(String(M0), L - 6, py(M0));
      }

      // osie z podpisami
      x.strokeStyle = '#111827'; x.lineWidth = 1.5;
      x.beginPath(); x.moveTo(L, TOP); x.lineTo(L, B); x.lineTo(R, B); x.stroke();
      x.fillStyle = '#111827'; x.textAlign = 'center';
      x.fillText('temperatura [°C]', (L + R) / 2, h - 12);
      x.save(); x.translate(14, (TOP + B) / 2); x.rotate(-Math.PI / 2);
      x.fillText('g substancji / 100 g wody', 0, 0); x.restore();

      // pionowa linia dla wybranej temperatury
      x.setLineDash([5, 4]); x.strokeStyle = '#6b7280'; x.lineWidth = 1;
      x.beginPath(); x.moveTo(px(T), TOP); x.lineTo(px(T), B); x.stroke(); x.setLineDash([]);

      // krzywe i punkty z tabeli
      keys.forEach(function (k) {
        var d = DANE[k];
        x.strokeStyle = d.kolor; x.fillStyle = d.kolor; x.lineWidth = 2.5;
        if (d.pkt.length > 1) {
          x.beginPath();
          d.pkt.forEach(function (p, i) { if (i) x.lineTo(px(p[0]), py(p[1])); else x.moveTo(px(p[0]), py(p[1])); });
          x.stroke();
        }
        d.pkt.forEach(function (p) { x.beginPath(); x.arc(px(p[0]), py(p[1]), 3, 0, 2 * Math.PI); x.fill(); });
        var c = interp(d.pkt, T);
        if (c !== null) { x.beginPath(); x.arc(px(T), py(c), 5, 0, 2 * Math.PI); x.fill(); }
      });

      // legenda w lewym górnym rogu
      x.textAlign = 'left';
      keys.forEach(function (k, i) {
        var yy = TOP + 12 + i * 17;
        x.strokeStyle = DANE[k].kolor; x.lineWidth = 2.5;
        x.beginPath(); x.moveTo(L + 10, yy); x.lineTo(L + 30, yy); x.stroke();
        x.fillStyle = '#111827'; x.fillText(DANE[k].nazwa, L + 36, yy);
      });

      // strefy dla pierwszej substancji przy wybranej T — blok pod legendą, aktywna strefa pogrubiona
      var c0 = keys.length ? interp(DANE[keys[0]].pkt, T) : null;
      var aktywna = (c0 === null || m === null) ? -1 : (m < c0 - 0.5 ? 2 : (m > c0 + 0.5 ? 0 : 1));
      if (c0 !== null && Number(opc.strefy) !== 0) {
        var linie = ['nad krzywą: nasycony z osadem', 'na krzywej: nasycony', 'pod krzywą: nienasycony'];
        x.textAlign = 'left';
        linie.forEach(function (tx, i) {
          x.font = (i === aktywna ? 'bold ' : '') + '12px system-ui, sans-serif';
          x.fillStyle = i === aktywna ? '#111827' : '#4b5563';
          x.fillText(tx, L + 10, TOP + 70 + i * 16);
        });
        x.font = '12px system-ui, sans-serif';
      }

      // punkt (T, m) z oceną położenia względem pierwszej krzywej
      if (m !== null && c0 !== null) {
        var stan = aktywna === 0 ? 'nad krzywą' : (aktywna === 2 ? 'pod krzywą' : 'na krzywej');
        x.beginPath(); x.arc(px(T), py(m), 6, 0, 2 * Math.PI);
        x.fillStyle = '#fbbf24'; x.fill(); x.strokeStyle = '#111827'; x.lineWidth = 1.5; x.stroke();
        x.textAlign = 'left'; x.fillStyle = '#111827'; x.font = 'bold 12px system-ui, sans-serif';
        x.fillText('punkt (' + T + ' °C, ' + m + ' g): ' + stan, L + 10, TOP + 70 + 3 * 16 + 8);
        x.font = '12px system-ui, sans-serif';
      }
    }
  });
})();
