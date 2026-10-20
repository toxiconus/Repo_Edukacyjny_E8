/* KLOCEK: haworth — wzór Hawortha cukrów (forma pierścieniowa): α- i β-D-glukopiranoza, β-D-fruktofuranoza.
   Opcje: cukier = alfa-glukoza | beta-glukoza | beta-fruktoza (domyślnie alfa-glukoza); chipy przełączają formę.
   Konwencja: pogrubiona krawędź pierścienia = przód; grupy nad i pod płaszczyzną; tlen czerwony. */
(function () {
  // pierścień: lista węgli i tlenu w kolejności obiegu; kazdy węgiel: {x, y, gora, dol}
  var DANE = {
    'alfa-glukoza': {
      nazwa: 'α-D-glukopiranoza', typ: 'piran', pozycje: ['C1', 'C2', 'C3', 'C4', 'C5'],
      pod: {C1: ['H', 'OH'], C2: ['H', 'OH'], C3: ['OH', 'H'], C4: ['H', 'OH'], C5: ['CH₂OH', 'H']},
      nota: 'Węgiel anomeryczny C1: w formie α grupa –OH jest pod płaszczyzną pierścienia (po przeciwnej stronie niż grupa CH₂OH przy C5).'
    },
    'beta-glukoza': {
      nazwa: 'β-D-glukopiranoza', typ: 'piran', pozycje: ['C1', 'C2', 'C3', 'C4', 'C5'],
      pod: {C1: ['OH', 'H'], C2: ['H', 'OH'], C3: ['OH', 'H'], C4: ['H', 'OH'], C5: ['CH₂OH', 'H']},
      nota: 'Węgiel anomeryczny C1: w formie β grupa –OH jest nad płaszczyzną pierścienia (po tej samej stronie co grupa CH₂OH przy C5). Formy α i β różnią się tylko położeniem –OH przy C1.'
    },
    'beta-fruktoza': {
      nazwa: 'β-D-fruktofuranoza', typ: 'furan', pozycje: ['C2', 'C3', 'C4', 'C5'],
      pod: {C2: ['OH', 'CH₂OH'], C3: ['OH', 'H'], C4: ['H', 'OH'], C5: ['CH₂OH', 'H']},
      nota: 'Fruktoza w pierścieniu pięcioczłonowym (furanoza): węgiel anomeryczny to C2, a przy nim grupa –OH i grupa CH₂OH (C1).'
    }
  };
  var PIR = {O: [170, 60], C1: [215, 105], C2: [170, 150], C3: [95, 150], C4: [50, 105], C5: [95, 60]};
  var FUR = {O: [125, 52], C2: [200, 95], C3: [160, 150], C4: [90, 150], C5: [50, 95]};
  var NUM = {piran: {C1: [8, 4, 'start'], C2: [8, 12, 'start'], C3: [-8, 12, 'end'], C4: [-8, 4, 'end'], C5: [-8, -4, 'end']},
             furan: {C2: [8, 4, 'start'], C3: [8, 12, 'start'], C4: [-8, 12, 'end'], C5: [-8, 4, 'end']}};
  var DL = 24;

  function tekst(x, y, t, kol, rozm, kotwica) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + (rozm || 13) + '" font-weight="600" fill="' + (kol || 'var(--text,#1a2332)') + '" text-anchor="' + (kotwica || 'middle') + '" font-family="system-ui,sans-serif">' + t + '</text>';
  }
  function rys(d) {
    var P = d.typ === 'piran' ? PIR : FUR, kol = d.typ === 'piran' ? ['O', 'C1', 'C2', 'C3', 'C4', 'C5'] : ['O', 'C2', 'C3', 'C4', 'C5'];
    var T = 'var(--text,#1a2332)', R = 'var(--c-error,#b83a45)', A = 'var(--accent,#0d6868)';
    var svg = '<svg viewBox="0 0 270 205" width="100%" style="max-width:360px;display:block;margin:0 auto" role="img" aria-label="Wzór Hawortha: ' + d.nazwa + '">';
    // krawędzie: tylne cienkie, przednia pogrubiona (ostatnia przed C... : C2–C3 dla pirano, C3–C4 dla furano)
    for (var i = 0; i < kol.length; i++) {
      var a = P[kol[i]], b = P[kol[(i + 1) % kol.length]];
      var front = d.typ === 'piran' ? (kol[i] === 'C2' && kol[(i + 1) % kol.length] === 'C3') : (kol[i] === 'C3' && kol[(i + 1) % kol.length] === 'C4');
      svg += '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '" stroke="' + T + '" stroke-width="' + (front ? 4.5 : 2) + '" stroke-linecap="round"/>';
    }
    svg += '<circle cx="' + P.O[0] + '" cy="' + P.O[1] + '" r="10" fill="var(--surface,#fff)"/>' + tekst(P.O[0], P.O[1] + 5, 'O', R, 15);
    d.pozycje.forEach(function (c) {
      var p = P[c], g = d.pod[c][0], dl = d.pod[c][1];
      svg += '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + p[0] + '" y2="' + (p[1] - DL) + '" stroke="' + T + '" stroke-width="1.5"/>';
      svg += '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + p[0] + '" y2="' + (p[1] + DL) + '" stroke="' + T + '" stroke-width="1.5"/>';
      function lab(t, y) {
        var oh = /^(OH|CH₂OH)$/.test(t);
        return tekst(p[0], y, t, t === 'OH' ? R : (t === 'CH₂OH' ? T : 'var(--text-soft,#4a5568)'), oh ? 13 : 12);
      }
      svg += lab(g, p[1] - DL - 5) + lab(dl, p[1] + DL + 13);
      var an = (d.typ === 'piran' && c === 'C1') || (d.typ === 'furan' && c === 'C2'), n = NUM[d.typ][c];
      svg += tekst(p[0] + n[0], p[1] + n[1], c.replace('C', ''), an ? A : 'var(--text-soft,#4a5568)', an ? 13 : 10, n[2]);
    });
    return svg + '</svg>';
  }

  KLOCKI.def('haworth', {
    opis: 'Wzór Hawortha cukrów: formy α i β glukozy oraz fruktoza w pierścieniu.',
    domyslne: {cukier: 'alfa-glukoza'},
    html: function (host, opc) {
      host.style.display = 'block';
      var chipy = document.createElement('div'); chipy.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px;justify-content:center';
      var scena = document.createElement('div'), nota = document.createElement('div');
      nota.style.cssText = 'font-size:14px;margin-top:6px;text-align:center;color:var(--text-soft,#4a5568)';
      host.appendChild(chipy); host.appendChild(scena); host.appendChild(nota);
      var CH = 'border:1px solid var(--accent,#0d6868);border-radius:99px;padding:4px 12px;font:600 13px system-ui,sans-serif;cursor:pointer;min-height:0;height:auto;width:auto;flex:none;line-height:1.3;margin:0;box-shadow:none;';
      var akt = DANE[opc.cukier] ? opc.cukier : 'alfa-glukoza', btn = {};
      Object.keys(DANE).forEach(function (k) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = DANE[k].nazwa;
        b.addEventListener('click', function () { akt = k; pokaz(); }); chipy.appendChild(b); btn[k] = b;
      });
      function pokaz() {
        Object.keys(btn).forEach(function (k) { btn[k].style.cssText = CH + (k === akt ? 'background:var(--accent,#0d6868);color:#fff' : 'background:var(--surface,#fff);color:var(--accent,#0d6868)'); });
        scena.innerHTML = rys(DANE[akt]); nota.textContent = DANE[akt].nota;
      }
      pokaz();
    }
  });
})();
