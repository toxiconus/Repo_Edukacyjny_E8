/* KLOCEK: osady-dwie-sole — dwie probówki z solami; model łączy jony „na krzyż”, sprawdza tabelę rozpuszczalności i pokazuje, czy powstaje osad.
   Wymaga: tabela_rozpuszczalnosci.js (KLOCKI.rozp). Opcje: brak. */
(function () {
  var BARWY = {AgCl: ['#f4f4f0', 'biały, serowaty'], AgBr: ['#f1e9b8', 'kremowy'], AgI: ['#f2e04a', 'żółty'], BaSO4: ['#f6f6f6', 'biały, drobnokrystaliczny'], CaCO3: ['#f2f2ee', 'biały'],
    Cu2OH: ['#4a90d9', 'niebieski, galaretowaty'], CuOH2: ['#4a90d9', 'niebieski, galaretowaty'], Fe2OH: ['#9aae8f', 'zielonkawy'], FeOH3: ['#a0522d', 'rdzawobrunatny'], PbI2: ['#f0d21e', 'żółty'], PbCl2: ['#f4f4f0', 'biały'],
    PbSO4: ['#f6f6f6', 'biały'], ZnOH2: ['#f4f4f0', 'biały'], MgOH2: ['#f4f4f0', 'biały'], AlOH3: ['#f4f4f0', 'biały, galaretowaty'], CaSO4: ['#f6f6f6', 'biały'], Ag2S: ['#2b2b2b', 'czarny'], CuS: ['#222', 'czarny'], PbS: ['#222', 'czarny'], FeS: ['#222', 'czarny']};
  function klucz(pretty) { return pretty.replace(/[₀-₉]/g, function (c) { return '₀₁₂₃₄₅₆₇₈₉'.indexOf(c); }).replace(/[()]/g, ''); }
  KLOCKI.def('osady-dwie-sole', {
    opis: 'Dwie probówki z rozpuszczalnymi solami: model łączy jony na krzyż i sprawdza w tabeli, czy powstaje osad i jakiej barwy.',
    domyslne: {},
    html: function (host) {
      var Rz = KLOCKI.rozp, D = Rz.D, sols = [];
      D.cations.forEach(function (c) { D.anions.forEach(function (a) { var k = Rz.zwiazek(c.id, a.id); if (k && k.sol === 'R') sols.push({c: c, a: a, k: k}); }); });
      var opt = sols.map(function (s, i) { return '<option value="' + i + '">' + s.k.pretty + ' — ' + s.k.name + '</option>'; }).join('');
      host.style.display = 'block';
      host.innerHTML = '<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:8px"><b>Probówka A:</b><select class="oa" style="font:inherit">' + opt + '</select><b>Probówka B:</b><select class="ob" style="font:inherit">' + opt + '</select></div><div class="ow"></div>';
      var A = host.querySelector('.oa'), B = host.querySelector('.ob'), W = host.querySelector('.ow'); function idx(f) { for (var i = 0; i < sols.length; i++) if (sols[i].k.pretty === f) return i; return 0; }
      A.value = idx('AgNO₃'); B.value = idx('NaCl');
      function rura(h, kol) { return '<span style="display:inline-block;width:46px;height:120px;border:2px solid #94a3b8;border-radius:0 0 23px 23px;position:relative;overflow:hidden;vertical-align:bottom;background:#e0f2fe">' + (kol ? '<span style="position:absolute;left:0;right:0;bottom:0;height:' + h + 'px;background:' + kol + '"></span>' : '') + '</span>'; }
      function draw() {
        var a = sols[+A.value], b = sols[+B.value], p1 = Rz.zwiazek(a.c.id, b.a.id), p2 = Rz.zwiazek(b.c.id, a.a.id);
        var osad = [p1, p2].filter(function (p) { return p.sol === 'N' || p.sol === 'T'; });
        var eq = a.k.pretty + ' + ' + b.k.pretty + ' → ' + [p1, p2].map(function (p) { return p.pretty + ((p.sol === 'N' || p.sol === 'T') ? '↓' : ''); }).join(' + ');
        var kol = osad.length ? (BARWY[klucz(osad[0].pretty)] || ['#e8e8e8'])[0] : null;
        var wynik = osad.length ? '<b>Powstaje osad:</b> ' + osad.map(function (p) { var br = BARWY[klucz(p.pretty)]; return p.pretty + (br ? ' — ' + br[1] : '') + ' (' + p.name + ')' + (p.sol === 'T' ? ' — trudno rozpuszczalny' : ''); }).join('; ') + '.'
          : '<b>Brak osadu.</b> Oba możliwe produkty są rozpuszczalne, więc wszystkie jony zostają w roztworze (obserwatorowe). Reakcja strącania nie zachodzi.';
        W.innerHTML = '<div style="display:flex;gap:18px;align-items:flex-end;margin:10px 0"><div>' + rura(70) + '<div style="font-size:13px">A: ' + a.k.pretty + '</div></div><div>' + rura(70) + '<div style="font-size:13px">B: ' + b.k.pretty + '</div></div><div style="font-size:22px;align-self:center">→</div><div>' + rura(80, kol) + '<div style="font-size:13px">po zmieszaniu</div></div></div><div style="font-size:14px;margin-bottom:4px"><b>Równanie cząsteczkowe:</b> ' + eq + '</div><div style="font-size:14px">' + wynik + '</div>';
      }
      A.addEventListener('change', draw); B.addEventListener('change', draw); draw();
    }
  });
})();
