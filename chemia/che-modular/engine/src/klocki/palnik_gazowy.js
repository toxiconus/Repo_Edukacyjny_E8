/* KLOCEK: palnik-gazowy — doświadczenie z płomieniem metanu (LKO-ORG01 §5).
   Opcje (w lekcji): etap="0"  tylko płomień i zlewka odwrócona nad nim (bez kropli)
                     etap="1"  krople H₂O na wewnętrznej stronie kopuły zlewki odwróconej; zlewka kontrolna sucha
                     etap="2"  jak 1 + woda wapienna mętnieje (CO₂ przepuszczony do probówki)
   Rysunek bez odpowiedzi — uczeń wnioskuje sam. Płomień pod krawędzią zlewki (nie w niej). */
(function () {
  function przytnij(v) { return Math.max(0, Math.min(1, v)); }

  KLOCKI.def('palnik-gazowy', {
    opis: 'Palnik gazowy (metan): płomień pod zlewką odwróconą z kroplami H₂O, zlewka kontrolna i woda wapienna mętniejąca od CO₂.',
    domyslne: {etap: 2, szer: 560, wys: 340},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var et = Math.round(przytnij(Number(opc.etap) / 2) * 2);
      var X = function (v) { return v * w; }, Y = function (v) { return v * h; };
      x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h);
      x.textBaseline = 'middle'; x.font = '14px system-ui, sans-serif';

      // palnik: podstawa i korpus; płomień pod krawędzią zlewki (RIM = .60)
      x.fillStyle = '#94a3b8'; x.fillRect(X(.13), Y(.91), X(.24), Y(.03));
      x.fillStyle = '#cbd5e1'; x.fillRect(X(.225), Y(.78), X(.05), Y(.13));
      var f = 1 + 0.04 * Math.sin((t || 0) / 180);
      x.beginPath(); x.moveTo(X(.205), Y(.78)); x.quadraticCurveTo(X(.19), Y(.70), X(.25), Y(.62 - .02 * (f - 1) * 10));
      x.quadraticCurveTo(X(.31), Y(.70), X(.295), Y(.78)); x.closePath();
      x.fillStyle = 'rgba(59,130,246,.85)'; x.fill();
      x.beginPath(); x.moveTo(X(.228), Y(.78)); x.quadraticCurveTo(X(.235), Y(.72), X(.25), Y(.69));
      x.quadraticCurveTo(X(.265), Y(.72), X(.272), Y(.78)); x.closePath();
      x.fillStyle = 'rgba(191,219,254,.9)'; x.fill();
      x.fillStyle = '#334155'; x.textAlign = 'center';
      x.fillText('palnik z metanem (CH₄)', X(.25), Y(.975));

      // zlewka odwrócona (dnem do góry): kopuła u góry, otwór na dole
      var L = X(.09), R = X(.41), TOP = Y(.10), RIM = Y(.60);
      x.beginPath(); x.moveTo(L, RIM); x.lineTo(L, Y(.26));
      x.quadraticCurveTo(L, TOP, X(.25), TOP); x.quadraticCurveTo(R, TOP, R, Y(.26)); x.lineTo(R, RIM);
      x.fillStyle = 'rgba(226,240,255,.45)'; x.fill();
      x.strokeStyle = '#64748b'; x.lineWidth = 2; x.stroke();
      x.beginPath(); x.moveTo(X(.08), RIM); x.lineTo(X(.42), RIM); x.lineWidth = 2.5; x.stroke();
      x.fillStyle = '#334155'; x.textAlign = 'center';
      x.fillText('zlewka odwrócona', X(.25), Y(.50));

      // krople H₂O na wewnętrznej stronie kopuły (etap ≥ 1)
      if (et >= 1) {
        var K = [[.16,.30],[.19,.21],[.25,.16],[.31,.19],[.35,.27],[.22,.34],[.29,.28],[.34,.37],[.14,.42],[.27,.25],[.20,.40],[.31,.44]];
        x.fillStyle = '#5b7fa6';
        K.forEach(function (p) { x.beginPath(); x.arc(X(p[0]), Y(p[1]), 3.2, 0, 7); x.fill(); });
        x.fillStyle = '#b45309'; x.textAlign = 'left';
        x.fillText('← krople H₂O', X(.44), Y(.16));
      }

      // zlewka kontrolna: sucha, woda na dnie, bez kropli
      var cL = X(.56), cR = X(.72), cT = Y(.40), cB = Y(.78);
      x.beginPath(); x.moveTo(cL, cT); x.lineTo(cL, cB - 14); x.quadraticCurveTo(cL, cB, cL + 14, cB);
      x.lineTo(cR - 14, cB); x.quadraticCurveTo(cR, cB, cR, cB - 14); x.lineTo(cR, cT);
      x.fillStyle = 'rgba(226,240,255,.35)'; x.fill(); x.strokeStyle = '#64748b'; x.lineWidth = 2; x.stroke();
      x.fillStyle = '#334155'; x.textAlign = 'center';
      x.fillText('kontrolna (sucha)', X(.64), Y(.34));

      // rurka gazu z kopuły → probówka z wodą wapienną
      x.beginPath(); x.moveTo(X(.25), TOP); x.lineTo(X(.25), Y(.05)); x.lineTo(X(.86), Y(.05)); x.lineTo(X(.86), Y(.46));
      x.strokeStyle = '#475569'; x.lineWidth = 2.5; x.stroke();
      var pL = X(.80), pR = X(.92), pT = Y(.36), pB = Y(.88);
      x.beginPath(); x.moveTo(pL, pT); x.lineTo(pL, pB - 16); x.quadraticCurveTo(pL, pB, (pL + pR) / 2, pB);
      x.quadraticCurveTo(pR, pB, pR, pB - 16); x.lineTo(pR, pT);
      x.fillStyle = 'rgba(255,255,255,.4)'; x.fill(); x.strokeStyle = '#64748b'; x.lineWidth = 2; x.stroke();
      x.fillStyle = et >= 2 ? 'rgba(241,245,249,.98)' : 'rgba(219,234,254,.55)';
      x.fillRect(pL + 2, Y(.52), pR - pL - 4, pB - Y(.52) - 3);
      x.fillStyle = '#334155'; x.textAlign = 'center';
      x.fillText('woda wapienna', X(.86), Y(.975));
      if (et >= 2) {
        x.fillStyle = '#b45309'; x.textAlign = 'left';
        x.fillText('zmętnienie ⇒ CO₂', X(.60), Y(.25));
      }
    }
  });
})();
