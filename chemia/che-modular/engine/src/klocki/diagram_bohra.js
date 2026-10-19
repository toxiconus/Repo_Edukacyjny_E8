/* KLOCEK: diagram-bohra — model Bohra atomu i jonu: jądro (p = Z) i powłoki K–N z kropkami-elektronami.
   Suwak Z (1…max), przyciski ładunku (kation / anion), przycisk „do konfiguracji gazu szlachetnego”.
   Oddanie lub przyjęcie elektronu pokazuje krótka animacja (przy prefers-reduced-motion — bez animacji).
   Opcje: z (11), ladunek (0), max (36). Grupy 3–12 (Z = 21–30) poza zakresem LKO 2026/27 — oznaczone. */
(function () {
  var SYM = 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr'.split(' ');
  var ORD = [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2], ['3d', 10], ['4p', 6]];
  var SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  function sup(n) { return String(n).split('').map(function (c) { return SUP[+c]; }).join(''); }
  function znak(q) { return q === 0 ? '' : (Math.abs(q) > 1 ? sup(Math.abs(q)) : '') + (q > 0 ? '⁺' : '⁻'); }

  /* liczba elektronów na powłokach K, L, M, N dla atomu o Z (z wyjątkami Cr i Cu jak w klocku „konfiguracje”) */
  function powloki(e) {
    var r = e, o = ORD.map(function (p) { var x = Math.min(p[1], r); r -= x; return [p[0], x]; });
    if (e === 24) { o[5][1] = 1; o[6][1] = 5; }
    if (e === 29) { o[5][1] = 1; o[6][1] = 10; }
    var n = [0, 0, 0, 0];
    o.forEach(function (s) { n[+s[0][0] - 1] += s[1]; });
    return n;
  }
  /* powłoki jonu: kation traci elektrony od powłoki zewnętrznej, anion — wypełnia jak atom o większej liczbie elektronów */
  function powlokiJonu(z, q) {
    if (q === 0) return powloki(z);
    if (q < 0) return powloki(z - q);
    var n = powloki(z), d = q;
    for (var i = 3; i >= 0 && d > 0; i--) { var x = Math.min(n[i], d); n[i] -= x; d -= x; }
    return n;
  }
  function ostatnia(n) { for (var i = 3; i >= 0; i--) if (n[i] > 0) return i; return 0; }
  /* ładunek, przy którym atom osiąga konfigurację gazu szlachetnego (grupy główne); null — brak takiego prostego przypadku */
  function doOktetu(z) {
    if (z < 3 && z !== 1) return null;                 /* He */
    if (z >= 21 && z <= 30) return null;               /* grupy 3–12 */
    if (z === 1) return 1;
    var n = powloki(z), v = n[ostatnia(n)];
    if (z === 18 || z === 36 || z === 10) return null; /* gazy szlachetne */
    if (v <= 3) return v;
    if (v >= 5) return v - 8;
    return null;                                       /* grupa 14 — zwykle wiązania kowalencyjne */
  }

  KLOCKI.def('diagram-bohra', {
    opis: 'Model Bohra atomu i jonu: jądro z liczbą protonów i powłoki K–N z elektronami; suwak Z i ładunek jonu.',
    domyslne: {z: 11, ladunek: 0, max: 36},
    html: function (host, opc) {
      var max = Math.min(36, Number(opc.max) || 36), z0 = Math.max(1, Math.min(max, Number(opc.z) || 11));
      var q0 = Number(opc.ladunek) || 0;
      host.style.display = 'block';
      host.innerHTML =
        '<label style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:14px;margin:0 0 8px">' +
        '<span>Liczba atomowa Z</span><input type="range" min="1" max="' + max + '" value="' + z0 + '" aria-label="Liczba atomowa Z" style="flex:1;min-width:140px;accent-color:var(--accent,#0d6868)">' +
        '<b class="bhz" style="min-width:150px"></b></label>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:0 0 8px">' +
        '<button type="button" class="bhk" style="padding:4px 10px;border:1.5px solid var(--border-strong,#94a3b8);border-radius:8px;background:var(--surface,#fff);cursor:pointer;font:inherit;font-size:13px">− elektron (kation)</button>' +
        '<button type="button" class="bhn" style="padding:4px 10px;border:1.5px solid var(--border-strong,#94a3b8);border-radius:8px;background:var(--surface,#fff);cursor:pointer;font:inherit;font-size:13px">+ elektron (anion)</button>' +
        '<button type="button" class="bho" style="padding:4px 10px;border:1.5px solid var(--accent,#0d6868);border-radius:8px;background:var(--surface,#fff);cursor:pointer;font:inherit;font-size:13px;color:var(--accent,#0d6868)">Do konfiguracji gazu szlachetnego</button>' +
        '<button type="button" class="bha" style="padding:4px 10px;border:1.5px solid var(--border,#cbd5e1);border-radius:8px;background:var(--surface,#fff);cursor:pointer;font:inherit;font-size:13px">Atom</button></div>' +
        '<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start">' +
        '<svg class="bhs" viewBox="0 0 220 220" width="220" height="220" style="max-width:100%" role="img"></svg>' +
        '<div class="bhi" style="flex:1;min-width:200px;font-size:14px;display:grid;grid-template-columns:1fr;gap:4px"></div></div>';
      var inp = host.querySelector('input'), bz = host.querySelector('.bhz'), bs = host.querySelector('.bhs'), bi = host.querySelector('.bhi');
      var bk = host.querySelector('.bhk'), bn = host.querySelector('.bhn'), bo = host.querySelector('.bho'), ba = host.querySelector('.bha');
      var q = q0, R = [26, 52, 78, 102], CX = 110, CY = 110, anim = null;

      /* zakres ładunków jak w szkolnej chemii: metale grup 1, 2, 13 (i przejściowe) — kationy; niemetale grup 15–17 i wodór — aniony */
      function granice(z) {
        var n = powloki(z), v = n[ostatnia(n)];
        if (z === 1) return [-1, 1];
        if (z >= 21 && z <= 30) return [0, 3];
        if (z === 2 || z === 10 || z === 18 || z === 36) return [0, 0];
        if (v <= 3) return [0, v];
        if (v >= 5) return [-(8 - v), 0];
        return [0, 0];
      }
      function dymek(n) { return n.map(function (x, i) { return 'KLMN'[i] + ' ' + x; }).join(', '); }

      function rys(ruch) {
        var z = +inp.value, g = granice(z);
        q = Math.max(g[0], Math.min(g[1], q));
        var n = powlokiJonu(z, q), w = ostatnia(n), e = z - q, nazwa = SYM[z - 1] + znak(q);
        bz.innerHTML = SYM[z - 1] + ' (Z = ' + z + ')';
        bk.disabled = q >= g[1]; bn.disabled = q <= g[0];
        bk.style.opacity = bk.disabled ? .4 : 1; bn.style.opacity = bn.disabled ? .4 : 1;
        var oq = doOktetu(z); bo.style.display = oq == null ? 'none' : ''; ba.style.display = q === 0 ? 'none' : '';
        var s = '';
        for (var i = 0; i < 4; i++) {
          if (n[i] === 0 && !(ruch && ruch.powloka === i)) continue;
          s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + R[i] + '" fill="none" stroke="var(--border,#cbd5e1)" stroke-dasharray="3 3"/>' +
               '<text x="' + (CX + R[i] * 0.3827) + '" y="' + (CY - R[i] * 0.9239) + '" text-anchor="middle" style="font:600 10px system-ui;fill:var(--text-soft,#64748b);stroke:var(--surface,#fff);stroke-width:3px;paint-order:stroke">' + 'KLMN'[i] + '</text>';
          var k = n[i];
          for (var j = 0; j < k; j++) {
            var a = j / k * 6.2832 - 1.5708;
            s += '<circle cx="' + (CX + R[i] * Math.cos(a)) + '" cy="' + (CY + R[i] * Math.sin(a)) + '" r="3.6" fill="' + (i === w ? 'var(--accent,#0d6868)' : 'var(--text-soft,#64748b)') + '"/>';
          }
        }
        s += '<circle cx="' + CX + '" cy="' + CY + '" r="15" fill="var(--c-error,#dc2626)"/>' +
             '<text x="' + CX + '" y="' + (CY + 4) + '" text-anchor="middle" style="font:700 11px system-ui;fill:#fff">' + z + 'p</text>';
        s += '<text x="8" y="18" style="font:700 16px system-ui;fill:var(--text,#0f172a)">' + nazwa + '</text>';
        if (ruch) s += '<circle class="bhm" cx="' + CX + '" cy="' + (CY - R[ruch.powloka]) + '" r="3.6" fill="var(--c-warn,#b45309)"/>';
        bs.innerHTML = s;
        bs.setAttribute('aria-label', 'Model Bohra: ' + nazwa + ', p = ' + z + ', e = ' + e + ', elektrony na powłokach: ' + dymek(n));
        var t = '<div>Protony: <b>' + z + '</b>, elektrony: <b>' + e + '</b>, ładunek: <b>' + (q === 0 ? '0 (atom)' : (q > 0 ? '+' : '−') + Math.abs(q)) + '</b></div>' +
                '<div>Elektrony na powłokach K, L, M, N: <b>' + n.slice(0, w + 1).join(', ') + '</b></div>' +
                '<div>Elektrony na powłoce zewnętrznej (' + 'KLMN'[w] + '): <b>' + n[w] + '</b></div>';
        if (q > 0) t += '<div style="color:var(--c-basic,#15803d)">Kation: ' + q + ' ' + (q === 1 ? 'elektron oddany' : 'elektrony oddane') + ' z powłoki zewnętrznej; p > e.</div>';
        if (q < 0) t += '<div style="color:var(--c-basic,#15803d)">Anion: ' + (-q) + ' ' + (q === -1 ? 'elektron przyjęty' : 'elektrony przyjęte') + '; e > p.</div>';
        if (q === 0 && oq != null) t += '<div style="color:var(--text-soft,#64748b)">Ten atom dąży do ' + (oq > 0 ? 'oddania ' + oq : 'przyjęcia ' + (-oq)) + ' el. — kliknij „Do konfiguracji gazu szlachetnego”.</div>';
        if (z >= 21 && z <= 30) t += '<div style="color:var(--c-warn,#b45309)">Poza zakresem LKO 2026/27 (grupy 3–12).</div>';
        if (g[0] === 0 && g[1] === 0) t += '<div style="color:var(--text-soft,#64748b)">' + (z === 2 || z === 10 || z === 18 || z === 36 ? 'Gaz szlachetny: powłoka zewnętrzna jest zapełniona, więc nie tworzy jonów prostych.' : 'Grupa 14: zwykle tworzy wiązania kowalencyjne, a nie jony proste.') + '</div>';
        bi.innerHTML = t;
        if (ruch) animuj(ruch);
      }

      function animuj(r) {
        var m = bs.querySelector('.bhm'); if (!m) return;
        if (typeof RM !== 'undefined' && RM) { m.parentNode.removeChild(m); return; }
        var R0 = R[r.powloka], R1 = 104, t0 = null, czas = 700;
        function krok(ts) {
          if (!m.parentNode) return;
          if (t0 === null) t0 = ts;
          var p = Math.min(1, (ts - t0) / czas), x = r.wyj ? R0 + (R1 - R0) * p : R1 + (R0 - R1) * p;
          m.setAttribute('cy', CY - x);
          m.setAttribute('opacity', r.wyj ? 1 - p * .6 : .4 + p * .6);
          if (p < 1) anim = requestAnimationFrame(krok); else if (m.parentNode) m.parentNode.removeChild(m);
        }
        anim = requestAnimationFrame(krok);
      }

      function zmien(dq) {
        var z = +inp.value, g = granice(z), nq = Math.max(g[0], Math.min(g[1], q + dq));
        if (nq === q) return;
        var stare = powlokiJonu(z, q), nowe = powlokiJonu(z, nq), wyj = dq > 0;
        var p = wyj ? ostatnia(stare) : ostatnia(nowe);
        q = nq; rys({powloka: p, wyj: wyj});
      }
      bk.addEventListener('click', function () { zmien(1); });
      bn.addEventListener('click', function () { zmien(-1); });
      ba.addEventListener('click', function () { q = 0; rys(); });
      bo.addEventListener('click', function () {
        var z = +inp.value, oq = doOktetu(z); if (oq == null) return;
        q = 0; rys();
        var krokow = Math.abs(oq), dq = oq > 0 ? 1 : -1, i = 0;
        (function nast() {
          zmien(dq); i++;
          if (i < krokow) setTimeout(nast, (typeof RM !== 'undefined' && RM) ? 0 : 800);
        })();
      });
      inp.addEventListener('input', function () { q = 0; rys(); });
      rys();
    }
  });
})();
