/* KLOCEK: palnik-gazowy — doświadczenie z płomieniem metanu (LKO-ORG01 §5).
   Opcje (w lekcji): etap="0"  tylko płomień i zlewka odwrócona nad nim (bez kropli)
                     etap="1"  krople H₂O na wewnętrznej stronie kopuły; zlewka kontrolna sucha
                     etap="2"  jak 1 + woda wapienna mętnieje (CO₂ przepuszczony do probówki)
                     anim="0"  stan końcowy bez animacji (domyślnie animacja; przy prefers-reduced-motion statycznie)
   Rysunek bez odpowiedzi — uczeń wnioskuje sam. Płomień pod krawędzią zlewki (nie w niej). Scena ciemna (--lab). */
(function () {
  function cl(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function ss(v) { v = cl(v, 0, 1); return v * v * (3 - 2 * v); }
  function ha(i) { var q = Math.sin(i * 127.1 + 311.7) * 43758.5453; return q - Math.floor(q); }
  function lerp(a, b, k) { return a + (b - a) * k; }

  KLOCKI.def('palnik-gazowy', {
    opis: 'Palnik gazowy (metan): płomień pod zlewką odwróconą z kroplami H₂O, zlewka kontrolna i woda wapienna mętniejąca od CO₂.',
    domyslne: {etap: 2, szer: 560, wys: 340, anim: 1},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var et = Math.round(cl(Number(opc.etap) / 2, 0, 1) * 2);
      var ruch = !RM && Number(opc.anim) !== 0, tf = RM ? 0 : (t || 0), tr = ruch ? t : 99;   // tf: migotanie, tr: oś czasu zjawisk
      var X = function (v) { return v * w; }, Y = function (v) { return v * h; };
      var JAS = '#cbd5e1', AMB = '#fbbf24';

      // tło sceny i blat
      var bg = x.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#0e2326'); bg.addColorStop(1, '#0a1a1d');
      x.fillStyle = bg; x.fillRect(0, 0, w, h);
      x.fillStyle = '#16343a'; x.fillRect(0, Y(.93), w, h - Y(.93));
      x.fillStyle = '#25505a'; x.fillRect(0, Y(.93), w, 2);
      x.textBaseline = 'middle'; x.font = '14px system-ui, sans-serif'; x.textAlign = 'center';

      // --- statyw: pręt i uchwyt przy zlewce
      var L = X(.09), R = X(.41), TOP = Y(.10), RIM = Y(.60), YM = Y(.26), cx = X(.25);
      x.fillStyle = '#64748b'; x.fillRect(X(.035), Y(.12), 5, Y(.81));
      x.fillRect(X(.035), Y(.22), L - X(.035) + 2, 5);
      x.fillStyle = '#475569'; x.fillRect(L - 3, Y(.205), 6, 14);
      x.fillStyle = '#94a3b8'; x.fillRect(X(.02), Y(.925), X(.05), 5);

      // --- palnik Bunsena
      var bx = X(.25), yb = Y(.80);
      x.strokeStyle = '#475569'; x.lineWidth = 6; x.lineCap = 'round';
      x.beginPath(); x.moveTo(bx - 8, Y(.91)); x.bezierCurveTo(X(.16), Y(.93), X(.10), Y(.88), -4, Y(.90)); x.stroke(); x.lineCap = 'butt';
      var gm = x.createLinearGradient(bx - 12, 0, bx + 12, 0); gm.addColorStop(0, '#64748b'); gm.addColorStop(.35, '#e2e8f0'); gm.addColorStop(1, '#475569');
      x.fillStyle = gm; x.fillRect(bx - 7, yb, 14, Y(.90) - yb);
      x.fillStyle = '#334155'; x.fillRect(bx - 10, Y(.835), 20, Y(.04));
      x.fillStyle = '#0a1a1d'; x.fillRect(bx - 4, Y(.845), 3, 5); x.fillRect(bx + 2, Y(.845), 3, 5);
      var bm = x.createLinearGradient(bx - 24, 0, bx + 24, 0); bm.addColorStop(0, '#475569'); bm.addColorStop(.4, '#94a3b8'); bm.addColorStop(1, '#334155');
      x.fillStyle = bm; x.fillRect(bx - 24, Y(.895), 48, Y(.035));
      x.fillStyle = JAS; x.fillText('palnik z metanem (CH₄)', bx, Y(.975));

      // --- płomień: poświata, płaszcz zewnętrzny i stożek wewnętrzny (migotanie)
      var fl = 1 + 0.05 * Math.sin(tf * 11) + 0.03 * Math.sin(tf * 17.3), dx = Math.sin(tf * 9) * 1.6 + Math.sin(tf * 5.3);
      var tip = yb - (yb - Y(.645)) * fl;
      x.globalCompositeOperation = 'lighter';
      var gl = x.createRadialGradient(bx, yb - 20, 4, bx, yb - 20, 62); gl.addColorStop(0, 'rgba(96,165,250,.28)'); gl.addColorStop(1, 'rgba(96,165,250,0)');
      x.fillStyle = gl; x.fillRect(bx - 70, yb - 90, 140, 120);
      x.globalCompositeOperation = 'source-over';
      var fg = x.createLinearGradient(0, yb, 0, tip); fg.addColorStop(0, 'rgba(37,99,235,.95)'); fg.addColorStop(.55, 'rgba(96,165,250,.9)'); fg.addColorStop(1, 'rgba(191,219,254,.25)');
      x.beginPath(); x.moveTo(bx - 9, yb); x.bezierCurveTo(bx - 12, yb - 18, bx - 4 + dx, tip + 12, bx + dx, tip);
      x.bezierCurveTo(bx + 4 + dx, tip + 12, bx + 12, yb - 18, bx + 9, yb); x.closePath(); x.fillStyle = fg; x.fill();
      var ic = x.createLinearGradient(0, yb, 0, tip + 14); ic.addColorStop(0, 'rgba(224,242,254,.95)'); ic.addColorStop(1, 'rgba(147,197,253,.4)');
      x.beginPath(); x.moveTo(bx - 4.5, yb); x.quadraticCurveTo(bx - 4, yb - 12, bx + dx * .6, yb - (yb - tip) * .52); x.quadraticCurveTo(bx + 4, yb - 12, bx + 4.5, yb); x.closePath();
      x.fillStyle = ic; x.fill();

      // --- zlewka odwrócona (dnem do góry): szkło, odblask, krawędź
      function kopula() { x.beginPath(); x.moveTo(L, RIM); x.lineTo(L, YM); x.quadraticCurveTo(L, TOP, cx, TOP); x.quadraticCurveTo(R, TOP, R, YM); x.lineTo(R, RIM); }
      var sg = x.createLinearGradient(L, 0, R, 0); sg.addColorStop(0, 'rgba(186,230,253,.20)'); sg.addColorStop(.5, 'rgba(186,230,253,.06)'); sg.addColorStop(1, 'rgba(186,230,253,.16)');
      kopula(); x.fillStyle = sg; x.fill(); x.strokeStyle = 'rgba(203,213,225,.85)'; x.lineWidth = 2; x.stroke();
      x.strokeStyle = 'rgba(255,255,255,.28)'; x.lineWidth = 3; x.lineCap = 'round'; x.beginPath(); x.moveTo(L + 8, Y(.30)); x.lineTo(L + 8, Y(.52)); x.stroke(); x.lineCap = 'butt';
      x.strokeStyle = 'rgba(203,213,225,.95)'; x.lineWidth = 3; x.beginPath(); x.moveTo(L - 3, RIM); x.lineTo(R + 3, RIM); x.stroke();

      // spaliny unoszące się pod kopułą (etap ≥ 1) i krople H₂O
      if (et >= 1) {
        for (var i = 0; i < 14; i++) {
          var ph = (tf * .12 + ha(i)) % 1, py = RIM - 6 - ph * (RIM - TOP - 22), pxx = cx + (ha(i + 7) - .5) * (R - L) * (.35 + .5 * ph);
          x.beginPath(); x.arc(pxx, py, 1.6 + ha(i + 3) * 1.6, 0, 7); x.fillStyle = 'rgba(203,213,225,' + (0.16 * (1 - ph)).toFixed(3) + ')'; x.fill();
        }
        for (var d = 0; d < 28; d++) {
          var gx = L + 10 + ha(d) * (R - L - 20), u = Math.abs((gx - cx) / ((R - L) / 2)), yt = TOP + (YM - TOP) * Math.pow(u, 3);
          var gy = yt + 9 + ha(d + 50) * (RIM - 44 - yt), gr = (2 + ha(d + 20) * 2.6) * ss((tr - .2 - ha(d + 90) * 1.6) / 1.8);
          if (gr <= .2) continue;
          x.beginPath(); x.ellipse(gx, gy + gr * .15, gr * .9, gr * 1.1, 0, 0, 7);
          x.fillStyle = 'rgba(147,197,253,.55)'; x.fill(); x.strokeStyle = 'rgba(219,234,254,.9)'; x.lineWidth = .8; x.stroke();
          x.beginPath(); x.arc(gx - gr * .3, gy - gr * .3, gr * .25, 0, 7); x.fillStyle = 'rgba(255,255,255,.85)'; x.fill();
        }
        if (ruch) for (var k = 0; k < 2; k++) {                       // spływające krople przy ściankach
          var q = (tf * .16 + k * .5) % 1, yy = Y(.30) + q * (RIM - 14 - Y(.30)), xx = k ? R - 7 : L + 7;
          x.strokeStyle = 'rgba(147,197,253,' + (0.35 * Math.sin(q * Math.PI)).toFixed(3) + ')'; x.lineWidth = 1.5;
          x.beginPath(); x.moveTo(xx, yy - 12); x.lineTo(xx, yy); x.stroke();
          x.beginPath(); x.arc(xx, yy, 2.6, 0, 7); x.fillStyle = 'rgba(147,197,253,' + (0.8 * Math.sin(q * Math.PI)).toFixed(3) + ')'; x.fill();
        }
        x.fillStyle = AMB; x.textAlign = 'left'; x.fillText('← krople H₂O', X(.44), Y(.16)); x.textAlign = 'center';
      }
      x.fillStyle = JAS; x.fillText('zlewka odwrócona', cx, Y(.555));

      // --- zlewka kontrolna: stoi na blacie, sucha
      var cL = X(.56), cR = X(.72), cT = Y(.55), cB = Y(.93);
      x.beginPath(); x.moveTo(cL, cT); x.lineTo(cL, cB - 12); x.quadraticCurveTo(cL, cB, cL + 12, cB); x.lineTo(cR - 12, cB); x.quadraticCurveTo(cR, cB, cR, cB - 12); x.lineTo(cR, cT);
      var cg = x.createLinearGradient(cL, 0, cR, 0); cg.addColorStop(0, 'rgba(186,230,253,.20)'); cg.addColorStop(.5, 'rgba(186,230,253,.05)'); cg.addColorStop(1, 'rgba(186,230,253,.15)');
      x.fillStyle = cg; x.fill(); x.strokeStyle = 'rgba(203,213,225,.85)'; x.lineWidth = 2; x.stroke();
      x.strokeStyle = 'rgba(255,255,255,.25)'; x.lineWidth = 3; x.lineCap = 'round'; x.beginPath(); x.moveTo(cL + 7, cT + 14); x.lineTo(cL + 7, cB - 26); x.stroke(); x.lineCap = 'butt';
      x.fillStyle = JAS; x.fillText('kontrolna (sucha)', (cL + cR) / 2, Y(.50));

      // --- rurka gazu: kopuła → probówka z wodą wapienną
      var tx = X(.86), pL = X(.80), pR = X(.92), pT = Y(.36), pB = Y(.88), yl = Y(.52), te = Y(.72);
      x.lineJoin = 'round';
      [['rgba(148,163,184,.95)', 5], ['rgba(255,255,255,.22)', 2]].forEach(function (st) {
        x.strokeStyle = st[0]; x.lineWidth = st[1]; x.beginPath(); x.moveTo(cx, TOP - 4); x.lineTo(cx, Y(.05)); x.lineTo(tx, Y(.05)); x.lineTo(tx, te); x.stroke();
      });
      x.fillStyle = '#7c3f1d'; x.beginPath(); x.roundRect ? x.roundRect(cx - 11, TOP - 6, 22, 10, 3) : x.rect(cx - 11, TOP - 6, 22, 10); x.fill();
      function probowka() { x.beginPath(); x.moveTo(pL, pT); x.lineTo(pL, pB - 16); x.quadraticCurveTo(pL, pB, (pL + pR) / 2, pB); x.quadraticCurveTo(pR, pB, pR, pB - 16); x.lineTo(pR, pT); }
      var mm = et >= 2 ? ss((tr - 1.2) / 3.2) : 0;                       // stopień zmętnienia
      x.save(); probowka(); x.clip();
      x.fillStyle = 'rgba(' + [lerp(147, 241, mm), lerp(197, 245, mm), lerp(253, 249, mm)].map(Math.round).join(',') + ',' + lerp(.32, .96, mm).toFixed(2) + ')';
      x.fillRect(pL, yl, pR - pL, pB - yl); x.restore();
      x.strokeStyle = 'rgba(255,255,255,' + lerp(.25, .5, mm).toFixed(2) + ')'; x.lineWidth = 1.5; x.beginPath(); x.moveTo(pL + 2, yl); x.lineTo(pR - 2, yl); x.stroke();
      if (et >= 2 && ruch) for (var b = 0; b < 7; b++) {                  // pęcherzyki gazu z końca rurki
        var bp = (tf * .55 + ha(b)) % 1, by = te - bp * (te - yl), bxx = tx + Math.sin(tf * 6 + b) * 3 + (ha(b + 3) - .5) * 9 * bp, br = 1.4 + ha(b + 9) * 2;
        x.beginPath(); x.arc(bxx, by, br, 0, 7); x.fillStyle = 'rgba(255,255,255,.14)'; x.fill(); x.strokeStyle = 'rgba(255,255,255,.6)'; x.lineWidth = 1; x.stroke();
      }
      probowka(); x.strokeStyle = 'rgba(203,213,225,.85)'; x.lineWidth = 2; x.stroke();
      x.strokeStyle = 'rgba(255,255,255,.25)'; x.lineWidth = 2.5; x.lineCap = 'round'; x.beginPath(); x.moveTo(pL + 5, pT + 10); x.lineTo(pL + 5, pB - 28); x.stroke(); x.lineCap = 'butt';
      x.fillStyle = JAS; x.fillText('woda wapienna', tx, Y(.975));
      if (et >= 2) { x.fillStyle = AMB; x.textAlign = 'left'; x.fillText('zmętnienie ⇒ CO₂', X(.60), Y(.30)); x.textAlign = 'center'; }
    }
  });
})();
