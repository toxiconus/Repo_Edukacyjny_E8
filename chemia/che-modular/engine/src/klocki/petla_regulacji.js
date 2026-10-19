/* KLOCEK: petla-regulacji — pętla sprzężenia ujemnego z 5 elementów (bodziec → receptor → ośrodek → efektor → efekt → z powrotem).
   Opcje: zestaw = temperatura | glukoza | tarczyca | oddech (domyślnie temperatura); szer, wys.
   Animacja domyślna: autostart gdy widoczna, impuls krąży po pętli (cykl 10 s); reduced-motion = obraz statyczny z numerami.
   Użycie: biologia B2g (homeostaza), B2e (sprzężenie zwrotne hormonów), B2c (regulacja oddychania). */
(function () {
  function cl(v, a, b) { return Math.max(a, Math.min(b, v)); }
  var ZESTAWY = {
    temperatura: {t: 'Regulacja temperatury ciała',
      w: ['Temperatura ciała rośnie ponad normę', 'Termoreceptory w skórze i podwzgórzu', 'Ośrodek termoregulacji w podwzgórzu', 'Gruczoły potowe i naczynia skórne', 'Oddawanie ciepła — temperatura spada']},
    glukoza: {t: 'Regulacja stężenia glukozy',
      w: ['Glukoza we krwi rośnie po posiłku', 'Komórki β wysp trzustkowych', 'Trzustka wydziela insulinę', 'Wątroba, mięśnie, tkanka tłuszczowa', 'Glukoza wchodzi do komórek — glikemia spada']},
    tarczyca: {t: 'Sprzężenie zwrotne: tarczyca',
      w: ['Tyroksyna we krwi rośnie', 'Podwzgórze i przysadka wykrywają T₄', 'Przysadka wydziela mniej TSH', 'Tarczyca produkuje mniej hormonu', 'Poziom tyroksyny wraca do normy']},
    oddech: {t: 'Regulacja oddychania',
      w: ['CO₂ we krwi rośnie', 'Chemoreceptory w rdzeniu i tętnicach', 'Ośrodek oddechowy w rdzeniu przedłużonym', 'Przepona i mięśnie międzyżebrowe', 'Oddech przyspiesza — CO₂ spada']}
  };
  var ETYK = ['bodziec', 'receptor', 'ośrodek', 'efektor', 'efekt'];
  function paleta() {
    return document.documentElement.hasAttribute('data-ciemny')
      ? {bg: '#0f1b1e', tekst: '#e8eef2', cisza: '#94a3b8', linia: '#2b3d42', akcent: '#5eead4', pole: '#16272b', tlo: 'rgba(94,234,212,.2)'}
      : {bg: '#ffffff', tekst: '#0f172a', cisza: '#64748b', linia: '#cbd5e1', akcent: '#0d6868', pole: '#f8fafc', tlo: 'rgba(13,104,104,.14)'};
  }
  function zawin(x, tekst, maxw) {
    var sl = tekst.split(' '), lin = [], cur = '';
    sl.forEach(function (s) { var p = cur ? cur + ' ' + s : s; if (x.measureText(p).width > maxw && cur) { lin.push(cur); cur = s; } else cur = p; });
    lin.push(cur); return lin;
  }
  function strzalka(x, x1, y1, x2, y2) {
    var ang = Math.atan2(y2 - y1, x2 - x1), g = 8;
    x.beginPath(); x.moveTo(x1, y1); x.lineTo(x2, y2); x.stroke();
    x.beginPath(); x.moveTo(x2, y2); x.lineTo(x2 - g * Math.cos(ang - 0.4), y2 - g * Math.sin(ang - 0.4)); x.lineTo(x2 - g * Math.cos(ang + 0.4), y2 - g * Math.sin(ang + 0.4)); x.closePath(); x.fill();
  }

  KLOCKI.def('petla-regulacji', {
    opis: 'Pętla regulacji z pięciu elementów (bodziec, receptor, ośrodek, efektor, efekt) z krążącym impulsem.',
    domyslne: {zestaw: 'temperatura', szer: 560, wys: 340},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var P = paleta(), Z = ZESTAWY[opc.zestaw] || ZESTAWY.temperatura;
      var u = RM ? -1 : (t % 10) / 2, akt = Math.floor(u), faza = u - akt;
      x.fillStyle = P.bg; x.fillRect(0, 0, w, h); x.textBaseline = 'middle'; x.textAlign = 'center';
      var cx = w / 2, cy = h / 2 + 14, rx = Math.min(190, w / 2 - 90), ry = Math.min(112, h / 2 - 50), bw = 148, bh = 56;
      var poz = Z.w.map(function (_, k) { var a = (-90 + 72 * k) * Math.PI / 180; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
      x.font = '700 14px system-ui, sans-serif'; x.fillStyle = P.tekst; x.fillText(Z.t, cx, 20);
      // strzałki między elementami (po krawędziach prostokątów)
      x.strokeStyle = P.cisza; x.fillStyle = P.cisza; x.lineWidth = 2;
      function kraniec(p, q, od) {
        var dx = q[0] - p[0], dy = q[1] - p[1], d = Math.sqrt(dx * dx + dy * dy), ux = dx / d, uy = dy / d;
        var sx = Math.abs(ux) > 1e-6 ? (bw / 2 + 4) / Math.abs(ux) : 1e9, sy = Math.abs(uy) > 1e-6 ? (bh / 2 + 4) / Math.abs(uy) : 1e9, o = Math.min(sx, sy);
        return [p[0] + ux * o, p[1] + uy * o];
      }
      var odc = [];
      for (var k = 0; k < 5; k++) {
        var p = poz[k], q = poz[(k + 1) % 5], a1 = kraniec(p, q), a2 = kraniec(q, p);
        odc.push([a1, a2]); strzalka(x, a1[0], a1[1], a2[0], a2[1]);
      }
      // środek: znaczenie pętli
      x.font = '600 12.5px system-ui, sans-serif'; x.fillStyle = P.akcent;
      x.fillText('sprzężenie ujemne', cx, cy - 8); x.fillStyle = P.cisza; x.font = '12px system-ui, sans-serif';
      x.fillText('efekt cofa odchylenie', cx, cy + 10);
      // impuls na strzałce
      if (akt >= 0 && faza > 0.55) {
        var o = odc[akt], f = (faza - 0.55) / 0.45;
        x.fillStyle = P.akcent; x.beginPath(); x.arc(o[0][0] + (o[1][0] - o[0][0]) * f, o[0][1] + (o[1][1] - o[0][1]) * f, 5, 0, 7); x.fill();
      }
      // pola
      for (k = 0; k < 5; k++) {
        var on = k === akt || (RM && true), bx = poz[k][0] - bw / 2, by = poz[k][1] - bh / 2;
        x.fillStyle = k === akt ? P.tlo : P.pole; x.strokeStyle = k === akt ? P.akcent : P.linia; x.lineWidth = k === akt ? 2.2 : 1.4;
        x.beginPath(); x.roundRect(bx, by, bw, bh, 10); x.fill(); x.stroke();
        x.font = '600 12px system-ui, sans-serif'; x.fillStyle = P.tekst;
        var lin = zawin(x, Z.w[k], bw - 14), y1 = poz[k][1] - (lin.length - 1) * 7.5 + 4;
        lin.forEach(function (l, i) { x.fillText(l, poz[k][0], y1 + i * 15); });
        // numer i rola
        x.font = '700 10.5px system-ui, sans-serif'; x.fillStyle = P.akcent; x.textAlign = 'left';
        x.fillText((k + 1) + ' · ' + ETYK[k], bx + 6, by - 8); x.textAlign = 'center';
      }
    }
  });
})();
