/* KLOCEK: miareczkowanie-biureta — biureta z NaOH nad kolbą z HCl i wskaźnikiem; pH-metr, objętość, barwa wskaźnika (fenoloftaleina / oranż metylowy).
   Doświadczenie startuje klikiem („▶ miareczkuj”), przy punkcie równoważności kroplowanie zwalnia. Opcje: kwas="HCl" (jedyny), wskaznik="phph"|"oranz".
   Zastępuje scenę gfx-scene-titration (duży silnik); krzywa pH(V) jest w osobnym klocku titration-merged. */
(function () {
  var U = function () { return window.KLOCKI.ui; };
  function E(tag, css, html) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (html != null) e.innerHTML = html; return e; }
  function fm(x, n) { return x.toFixed(n).replace('.', ','); }
  var C0 = 0.1, V0 = 25, CB = 0.1, VMAX = 40;
  function pH(v) {   // mocny kwas + mocna zasada, bilans ładunku
    var n = (C0 * V0 - CB * v) / (V0 + v);   // [H+] − [OH-] = n
    var h = (n + Math.sqrt(n * n + 4e-14)) / 2; return -Math.log10(h);
  }
  function mix(a, b, k) { return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(a[i] + (b[i] - a[i]) * k); }).join(',') + ')'; }
  var IND = {
    phph: {n: 'fenoloftaleina', f: function (p) { return p <= 8.2 ? 'rgba(226,240,250,.9)' : mix([226, 240, 250], [190, 24, 93], Math.min(1, (p - 8.2) / 1.8)); }, kon: 'bezbarwna → malinowa przy pH ≈ 8,2–10'},
    oranz: {n: 'oranż metylowy', f: function (p) { return p <= 3.1 ? 'rgb(220,38,38)' : p >= 4.4 ? 'rgb(250,204,21)' : mix([220, 38, 38], [250, 204, 21], (p - 3.1) / 1.3); }, kon: 'czerwony → żółty przy pH ≈ 3,1–4,4'}
  };
  KLOCKI.def('miareczkowanie-biureta', {
    opis: 'Miareczkowanie 25 cm³ HCl o stężeniu 0,1 mol/dm³ roztworem NaOH z biurety: spadają krople, kolba zmienia barwę wskaźnika, pH-metr pokazuje pH i objętość titrantu; w punkcie równoważności (25 cm³) pH skacze od ok. 3 do ok. 11.',
    domyslne: {wskaznik: 'phph'},
    html: function (host, opc) {
      host.style.display = 'block';
      var wk = (opc && opc.wskaznik === 'oranz') ? 'oranz' : 'phph', v = 0, run = false, timer = null;
      var bar = E('div', 'display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px'), sc = E('div', ''), info = E('div', 'font-size:14px;margin-top:6px;border:1px solid var(--border,#cbd5e1);border-radius:10px;padding:8px 12px;background:var(--surface-soft,#f6f8fa)');
      function rys() {
        var p = pH(v), kol = IND[wk].f(p), lev = 1 - v / VMAX, by = 30 + 110 * (1 - lev), fl = 150 + 55 * 0;
        sc.innerHTML = '<svg viewBox="0 0 300 300" style="width:100%;max-width:340px;display:block;margin:0 auto">' +
          // biureta
          '<rect x="60" y="20" width="22" height="150" rx="3" fill="rgba(186,230,253,.25)" stroke="var(--border-strong,#64748b)" stroke-width="2"/>' +
          '<rect x="62" y="' + (20 + 150 * (1 - lev) * 1) + '" width="18" height="' + (150 * lev) + '" fill="rgba(191,219,254,.85)"/>' +
          [0, 10, 20, 30, 40].map(function (m) { var y = 22 + m / VMAX * 146; return '<line x1="60" y1="' + y + '" x2="70" y2="' + y + '" stroke="#475569"/><text x="52" y="' + (y + 3) + '" font-size="8" text-anchor="end" fill="var(--muted,#64748b)">' + m + '</text>'; }).join('') +
          '<rect x="64" y="170" width="14" height="10" fill="#94a3b8"/><rect x="56" y="173" width="30" height="4" rx="2" fill="#475569"/><path d="M68 180 h6 v12 l-3 6 l-3 -6z" fill="#cbd5e1" stroke="#64748b"/>' +
          (run && v < VMAX ? '<circle cx="71" cy="206" r="3" fill="#93c5fd"><animate attributeName="cy" from="196" to="236" dur=".5s" repeatCount="indefinite"/></circle>' : '') +
          '<text x="71" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text,#0f172a)">NaOH 0,1 M</text>' +
          // kolba
          '<path d="M52 240 L52 262 Q52 280 70 280 L112 280 Q130 280 130 262 L130 240 L112 214 L112 200 L70 200 L70 214 Z" fill="rgba(226,232,240,.2)" stroke="var(--border-strong,#64748b)" stroke-width="2.5"/>' +
          '<path d="M55 242 L55 262 Q55 277 70 277 L112 277 Q127 277 127 262 L127 242 Z" fill="' + kol + '" opacity=".92"/>' +
          '<text x="91" y="296" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text,#0f172a)">25 cm³ HCl 0,1 M + ' + IND[wk].n + '</text>' +
          // pH-metr
          '<rect x="190" y="90" width="90" height="120" rx="10" fill="#1e293b"/><rect x="200" y="100" width="70" height="42" rx="4" fill="#a7f3d0"/>' +
          '<text x="235" y="130" text-anchor="middle" font-size="24" font-weight="800" fill="#064e3b">' + fm(p, 2) + '</text>' +
          '<text x="235" y="160" text-anchor="middle" font-size="10" fill="#cbd5e1">pH</text><text x="235" y="185" text-anchor="middle" font-size="13" font-weight="700" fill="#e2e8f0">V = ' + fm(v, 1) + ' cm³</text>' +
          '<path d="M235 210 v30 q0 20 -40 28 h-62" fill="none" stroke="#94a3b8" stroke-width="3"/></svg>';
        var rown = Math.abs(v - V0) < 0.026;
        info.innerHTML = '<b>Dodano:</b> ' + fm(v, 1) + ' cm³ NaOH · <b>pH:</b> ' + fm(p, 2) + ' · <b>' + IND[wk].n + ':</b> ' + IND[wk].kon +
          (rown ? '<br><b>Punkt równoważności:</b> n(NaOH) = n(HCl) = 2,5 mmol → NaCl + H₂O, pH = 7.' : v < V0 ? '<br>Jeszcze nadmiar kwasu: pH rośnie powoli, potem gwałtownie przy 25 cm³.' : '<br>Nadmiar zasady: roztwór zasadowy, wskaźnik w barwie formy zasadowej.');
      }
      function krok() {
        if (!run) return;
        var d = Math.abs(v - V0) < 1.5 ? 0.05 : Math.abs(v - V0) < 4 ? 0.2 : 0.5;
        v = Math.min(VMAX, v + d); rys();
        if (v >= VMAX) { run = false; go.textContent = '▶ miareczkuj'; return; }
        timer = setTimeout(krok, Math.abs(v - V0) < 1.5 ? 90 : 120);
      }
      var go = U().btn('▶ miareczkuj', function () { run = !run; go.textContent = run ? '⏸ pauza' : '▶ miareczkuj'; if (run) { if (v >= VMAX) v = 0; krok(); } else clearTimeout(timer); });
      bar.append(go, U().btn('+ 1 cm³', function () { run = false; clearTimeout(timer); go.textContent = '▶ miareczkuj'; v = Math.min(VMAX, v + 1); rys(); }),
        U().btn('+ kropla', function () { run = false; clearTimeout(timer); go.textContent = '▶ miareczkuj'; v = Math.min(VMAX, v + 0.05); rys(); }),
        U().btn('↺ od nowa', function () { run = false; clearTimeout(timer); go.textContent = '▶ miareczkuj'; v = 0; rys(); }),
        U().btn(IND.phph.n, function () { wk = 'phph'; rys(); }), U().btn(IND.oranz.n, function () { wk = 'oranz'; rys(); }));
      host.append(bar, sc, info); rys();
    }
  });
})();
