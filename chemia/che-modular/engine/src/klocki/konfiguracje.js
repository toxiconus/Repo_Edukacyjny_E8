/* KLOCEK: konfiguracje — konfiguracja elektronowa Z ≤ 36: suwak, kolejność podpowłok, pudełka orbitali (zakaz Pauliego, reguła Hunda),
   powłoki K–N, zapis pełny i skrócony. Opcje: z (19), max (36). Wyjątki Cr (24) i Cu (29) oznaczone; grupy 3–12 poza zakresem LKO 2025/26. */
(function () {
  var SYM = 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr'.split(' ');
  var ORD = [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2], ['3d', 10], ['4p', 6]];
  var SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  function sup(n) { return String(n).split('').map(function (c) { return SUP[+c]; }).join(''); }
  function cfg(z) {
    var r = z, o = ORD.map(function (p) { var e = Math.min(p[1], r); r -= e; return [p[0], e, p[1]]; });
    if (z === 24) { o[5][1] = 1; o[6][1] = 5; }
    if (z === 29) { o[5][1] = 1; o[6][1] = 10; }
    return o;
  }
  function zapis(o) { return o.filter(function (s) { return s[1] > 0; }).map(function (s) { return s[0] + sup(s[1]); }).join(' '); }

  KLOCKI.def('konfiguracje', {
    opis: 'Konfiguracja elektronowa pierwiastków Z ≤ 36: kolejność podpowłok, pudełka orbitali, powłoki K–N.',
    domyslne: {z: 19, max: 36},
    html: function (host, opc) {
      var max = Math.min(36, Number(opc.max) || 36);
      host.style.display = 'block';
      host.innerHTML =
        '<label style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:14px;margin:0 0 8px">' +
        '<span>Liczba atomowa Z</span><input type="range" min="1" max="' + max + '" value="' + (Number(opc.z) || 19) + '" aria-label="Liczba atomowa Z" style="flex:1;min-width:140px;accent-color:var(--accent,#0d6868)">' +
        '<b class="kz" style="min-width:90px"></b></label>' +
        '<div class="ko" style="font-size:14px;margin:0 0 8px;line-height:1.8"></div>' +
        '<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start">' +
        '<div class="kb" style="flex:1;min-width:200px;font-size:14px"></div>' +
        '<svg class="ks" viewBox="0 0 200 200" width="200" height="200" style="max-width:100%" role="img" aria-label="Powłoki K–N"></svg></div>' +
        '<div class="ki" style="font-size:14px;margin-top:8px;display:grid;gap:4px"></div>';
      var inp = host.querySelector('input'), kz = host.querySelector('.kz'), ko = host.querySelector('.ko'),
          kb = host.querySelector('.kb'), ks = host.querySelector('.ks'), ki = host.querySelector('.ki');
      function rys() {
        var z = +inp.value, o = cfg(z);
        kz.textContent = SYM[z - 1] + ' (Z = ' + z + ')';
        var last = o.map(function (s) { return s[1] > 0; }).lastIndexOf(true);
        ko.innerHTML = o.map(function (s, i) {
          var st = i === last ? 'font-weight:700;color:var(--accent,#0d6868)' : s[1] > 0 ? 'font-weight:600' : 'opacity:.35';
          return '<span style="' + st + '">' + s[0] + '</span>';
        }).join(' → ');
        kb.innerHTML = o.filter(function (s) { return s[1] > 0; }).map(function (s) {
          var nb = s[2] / 2, h = '';
          for (var i = 0; i < nb; i++) {
            var u = i < s[1], d = i < s[1] - nb;
            h += '<span style="display:inline-block;width:26px;height:24px;border:1.5px solid var(--border-strong,#94a3b8);margin-right:3px;text-align:center;line-height:22px;color:var(--accent,#0d6868);font-weight:700">' + (u ? '↑' : '') + (d ? '↓' : '') + '</span>';
          }
          return '<div style="display:flex;gap:8px;align-items:center;margin:2px 0"><b style="width:26px">' + s[0] + '</b><span>' + h + '</span></div>';
        }).join('');
        var cnt = {}; o.forEach(function (s) { cnt[s[0][0]] = (cnt[s[0][0]] || 0) + s[1]; });
        var R = [22, 46, 70, 92], g = '';
        [1, 2, 3, 4].forEach(function (n, i) {
          var k = cnt[n] || 0;
          g += '<circle cx="100" cy="100" r="' + R[i] + '" fill="none" stroke="var(--border,#cbd5e1)" stroke-dasharray="3 3"/>' +
               '<text x="' + (100 + R[i] * 0.72 + 3) + '" y="' + (100 - R[i] * 0.72 - 3) + '" font-size="10" fill="var(--text-soft,#64748b)">' + 'KLMN'[i] + '</text>';
          for (var j = 0; j < k; j++) {
            var a = j / k * 6.2832 - 1.5708;
            g += '<circle cx="' + (100 + R[i] * Math.cos(a)) + '" cy="' + (100 + R[i] * Math.sin(a)) + '" r="3.4" fill="var(--accent,#0d6868)"/>';
          }
        });
        ks.innerHTML = g + '<circle cx="100" cy="100" r="7" fill="var(--c-error,#dc2626)"/>';
        var nz = [[36, 'Kr'], [18, 'Ar'], [10, 'Ne'], [2, 'He']].filter(function (x) { return x[0] < z; })[0];
        var rest;
        if (nz) { var oc = cfg(nz[0]); rest = o.map(function (s, i) { return [s[0], s[1] - oc[i][1], s[2]]; }); } else rest = o;
        var t = '<div>Zapis pełny: <b>' + zapis(o) + '</b></div>' +
                '<div>Zapis skrócony: <b>' + (nz ? '[' + nz[1] + '] ' : '') + zapis(rest) + '</b></div>' +
                '<div>Elektrony na powłokach K, L, M, N: <b>' + [1, 2, 3, 4].map(function (n) { return cnt[n] || 0; }).join(', ') + '</b></div>';
        if (z >= 19) t += '<div style="color:var(--c-basic,#15803d)">4s zapełnia się przed 3d: powłoka M ma ' + cnt[3] + ' z 18 elektronów, a N już ' + cnt[4] + '.</div>';
        if (z >= 21 && z <= 30) t += '<div style="color:var(--c-warn,#b45309)">Poza zakresem LKO 2025/26 (grupy 3–12)' + (z === 24 || z === 29 ? '; wyjątek od kolejności wypełniania' : '') + '.</div>';
        ki.innerHTML = t;
      }
      inp.addEventListener('input', rys); rys();
    }
  });
})();
