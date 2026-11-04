/* KLOCKI: kwasy (N04) — bufor, kwasy-reszty, kwasy-rozcienczanie.
   Zastępują modele z dużego silnika (ph-indicators-v03, titration-merged, kw-bufor-v01, kw-reszty-v01, kw-wlasciwosci-v01, gfx-scene-dilution, acid-rain-v01).
   HTML/SVG, bez zależności poza ui_klocki.js. Barwy substancji realistyczne; interfejs w zmiennych motywu. */
(function () {
  var U = function () { return window.KLOCKI.ui; };
  function E(tag, css, html) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (html != null) e.innerHTML = html; return e; }
  function fmt(x, n) { return (Math.round(x * Math.pow(10, n)) / Math.pow(10, n)).toString().replace('.', ','); }
  var STOPS = [[0, '#dc2626'], [3, '#ef4444'], [4, '#f97316'], [5, '#facc15'], [6, '#a3e635'], [7, '#16a34a'], [8, '#0d9488'], [9, '#2563eb'], [11, '#4f46e5'], [14, '#7e22ce']];
  function hexRGB(h) { var n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function mixc(a, b, k) { var A = hexRGB(a), B = hexRGB(b); return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(A[i] + (B[i] - A[i]) * k); }).join(',') + ')'; }
  function uni(ph) {   // barwa wskaźnika uniwersalnego
    ph = Math.max(0, Math.min(14, ph));
    for (var i = 1; i < STOPS.length; i++) if (ph <= STOPS[i][0]) { var a = STOPS[i - 1], b = STOPS[i]; return mixc(a[1], b[1], (ph - a[0]) / (b[0] - a[0])); }
    return STOPS[STOPS.length - 1][1];
  }
  function oranz(ph) { return ph <= 3.1 ? '#dc2626' : ph >= 4.4 ? '#facc15' : mixc('#dc2626', '#facc15', (ph - 3.1) / 1.3); }
  function fenol(ph) { return ph <= 8.2 ? 'rgba(224,242,254,.55)' : ph >= 10 ? '#be185d' : mixc('#e0f2fe', '#be185d', (ph - 8.2) / 1.8); }
  var BOX = 'border:1px solid var(--border,#cbd5e1);border-radius:10px;padding:10px 12px;background:var(--surface-soft,#f6f8fa)';

  /* ---------- bufor (port kw-bufor-v01: fizyka z oryginału, pehametry, kropla = 0,05 cm³ 1 M, wykres, wyczerpanie) ---------- */
  function zlewkaSvg(kol, etyk, ph) {
    return '<svg viewBox="0 0 150 150" style="width:100%;max-width:170px;display:block;margin:0 auto">' +
      '<path d="M30 20 L30 128 Q30 136 38 136 L92 136 Q100 136 100 128 L100 20" fill="rgba(186,230,253,.18)" stroke="var(--border-strong,#64748b)" stroke-width="2.5"/>' +
      '<path d="M32 58 L32 128 Q32 134 38 134 L92 134 Q98 134 98 128 L98 58 Z" fill="' + kol + '" opacity=".85"/>' +
      '<line x1="32" y1="58" x2="98" y2="58" stroke="rgba(255,255,255,.7)" stroke-width="1.5"/>' +
      '<g><rect x="108" y="30" width="34" height="62" rx="6" fill="#1e293b"/><rect x="112" y="35" width="26" height="16" rx="2" fill="#a7f3d0"/>' +
      '<text x="125" y="47" text-anchor="middle" font-size="10" font-weight="700" fill="#064e3b">' + fmt(ph, 1) + '</text>' +
      '<text x="125" y="66" text-anchor="middle" font-size="7" fill="#cbd5e1">pH</text><rect x="122" y="92" width="6" height="40" fill="#94a3b8"/></g>' +
      '<line x1="125" y1="132" x2="75" y2="132" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3 2"/>' +
      '<text x="65" y="148" text-anchor="middle" font-size="12" font-weight="700" fill="var(--text,#0f172a)">' + etyk + '</text></svg>';
  }
  KLOCKI.def('bufor', {
    opis: 'Bufor octanowy (CH₃COOH + CH₃COONa) kontra czysta woda: dodawanie kropli HCl lub NaOH, dwa pehametry z barwą wskaźnika uniwersalnego, wykres pH oraz pozostała pojemność buforu; suwaki stężenia i stosunku [A⁻]/[HA].',
    domyslne: {},
    html: function (host) {
      host.style.display = 'block';
      var pKa = 4.756, Vl = 0.1, drop = 5e-5, cb = 0.1, ratio = 1, n = 0, hist = {}, B0 = {};
      function reset() { var nT = cb * Vl; B0.HA = nT / (1 + ratio); B0.A = nT - B0.HA; n = 0; hist = {}; rec(); }
      function pHw() { var c = n * drop / Vl, h = (c + Math.sqrt(c * c + 4e-14)) / 2; return n >= 0 ? -Math.log10(h) : 14 + Math.log10((-c + Math.sqrt(c * c + 4e-14)) / 2); }
      function pHb() {
        var x = n * drop, cT = (B0.HA + B0.A) / Vl, Na = (B0.A + Math.max(0, -x)) / Vl, Cl = Math.max(0, x) / Vl, Ka = Math.pow(10, -pKa), lo = -14.5, hi = 0.5;
        // bilans ładunku: [H+] + [Na+] − [Cl−] − [A−] − [OH−] = 0 (dla NaOH: dodatkowy Na+ kompensuje OH−)
        var NaT = (B0.A + Math.max(0, -x)) / Vl;
        for (var i = 0; i < 60; i++) { var m = (lo + hi) / 2, h = Math.pow(10, m), f = h + NaT - Cl - cT * Ka / (Ka + h) - 1e-14 / h; if (f > 0) hi = m; else lo = m; }
        return -(lo + hi) / 2;
      }
      function rec() { hist[n] = [n, pHw(), pHb()]; }
      var bar = E('div', 'display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px'), zl = E('div', 'display:grid;grid-template-columns:1fr 1fr;gap:8px'),
          sl = E('div', 'display:flex;flex-wrap:wrap;gap:12px;margin:8px 0;font-size:13px'), cv = E('canvas', 'width:100%;height:190px;display:block;border-radius:10px;background:var(--surface-soft,#f6f8fa)'), info = E('div', 'font-size:13.5px;margin-top:8px');
      function dodaj(k) { return function () { for (var i = 0; i < Math.abs(k); i++) { n += k > 0 ? 1 : -1; rec(); } rys(); }; }
      bar.append(U().btn('+ kropla HCl', dodaj(1)), U().btn('+ 10 kropli HCl', dodaj(10)), U().btn('+ kropla NaOH', dodaj(-1)), U().btn('+ 10 kropli NaOH', dodaj(-10)), U().btn('↺ od nowa', function () { reset(); rys(); }));
      var r1 = E('input'), r2 = E('input'), o1 = E('b'), o2 = E('b'), l1 = E('label', '', 'stężenie buforu '), l2 = E('label', '', '[A⁻]/[HA] ');
      r1.type = r2.type = 'range'; r1.min = .01; r1.max = .5; r1.step = .01; r1.value = cb; r2.min = -1; r2.max = 1; r2.step = .1; r2.value = 0;
      l1.append(r1, o1); l2.append(r2, o2); sl.append(l1, l2);
      r1.oninput = function () { cb = +r1.value; reset(); rys(); }; r2.oninput = function () { ratio = Math.pow(10, +r2.value); reset(); rys(); };
      function wykres() {
        var d = Math.min(2, window.devicePixelRatio || 1), W = cv.clientWidth || 500, H = cv.clientHeight || 190; cv.width = W * d; cv.height = H * d;
        var x = cv.getContext('2d'); x.setTransform(d, 0, 0, d, 0, 0);
        var L = 30, B = H - 22, R = W - 10, T = 10, mut = '#64748b', pts = Object.keys(hist).map(function (k) { return hist[k]; }).sort(function (a, b) { return a[0] - b[0]; });
        var ks = pts.map(function (p) { return p[0]; }), kmin = Math.min.apply(null, [-5].concat(ks)), kmax = Math.max.apply(null, [5].concat(ks));
        x.strokeStyle = mut; x.fillStyle = mut; x.font = '600 10px system-ui'; x.beginPath(); x.moveTo(L, T); x.lineTo(L, B); x.lineTo(R, B); x.stroke();
        [0, 7, 14].forEach(function (p) { var y = B - (B - T) * p / 14; x.fillText(p, L - 16, y + 3); x.globalAlpha = .25; x.beginPath(); x.moveTo(L, y); x.lineTo(R, y); x.stroke(); x.globalAlpha = 1; });
        x.textAlign = 'center'; x.fillText('← krople NaOH | krople HCl →', (L + R) / 2, H - 6);
        var X = function (k) { return L + (R - L) * (k - kmin) / (kmax - kmin); }, Y = function (p) { return B - (B - T) * Math.max(0, Math.min(14, p)) / 14; };
        [[1, '#2563eb', 'woda'], [2, '#16a34a', 'bufor']].forEach(function (sr) {
          x.strokeStyle = x.fillStyle = sr[1]; x.lineWidth = 2.5; x.beginPath();
          pts.forEach(function (p, i) { i ? x.lineTo(X(p[0]), Y(p[sr[0]])) : x.moveTo(X(p[0]), Y(p[sr[0]])); }); x.stroke();
          pts.forEach(function (p) { x.beginPath(); x.arc(X(p[0]), Y(p[sr[0]]), 2.2, 0, 7); x.fill(); });
          x.textAlign = 'left'; x.fillText(sr[2], R - 46, sr[0] === 1 ? T + 10 : T + 24);
        });
      }
      function rys() {
        var pw = pHw(), pb = pHb();
        zl.innerHTML = '<div style="' + BOX + '">' + zlewkaSvg(uni(pw), 'woda', pw) + '</div><div style="' + BOX + '">' + zlewkaSvg(uni(pb), 'bufor', pb) + '</div>';
        o1.textContent = fmt(cb, 2) + ' mol/dm³'; o2.textContent = fmt(ratio, 2);
        var xx = n * drop, ha = B0.HA + xx, a = B0.A - xx, cap = Math.min(ha, a) / Math.max(B0.HA, B0.A);
        info.innerHTML = '<b>Woda:</b> pH = ' + fmt(pw, 2) + ' · <b>Bufor:</b> pH = ' + fmt(pb, 2) + ' (pK<sub>a</sub> = ' + fmt(pKa, 2) + ') · pozostała pojemność buforu: <b>' + Math.round(Math.max(0, cap) * 100) + '%</b>' +
          '<br><span style="color:var(--text-muted,#5b6b73)">Kropla = 0,05 cm³ 1 M w 100 cm³ roztworu. H⁺ reaguje z octanem: CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O; OH⁻ z kwasem: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O. Gdy jednego składnika zabraknie, bufor przestaje działać i pH zmienia się gwałtownie.</span>';
        wykres();
      }
      host.append(bar, zl, sl, cv, info); reset(); rys(); setTimeout(rys, 60);
    }
  });

  /* ---------- kwasy-reszty ---------- */
  var KW = [
    ['HCl', 'kwas chlorowodorowy (solny)', 'beztlenowy', 'Cl⁻', '1−', 'HCl → H⁺ + Cl⁻', 'mocny', 'NaCl — chlorek sodu', 'sok żołądkowy, trawienie, oczyszczanie metali'],
    ['H₂SO₄', 'kwas siarkowy(VI)', 'tlenowy', 'SO₄²⁻', '2−', 'I stopień: H₂SO₄ → H⁺ + HSO₄⁻ (praktycznie całkowity); II: HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (częściowy). Szkolny skrót: H₂SO₄ → 2H⁺ + SO₄²⁻', 'mocny', 'Na₂SO₄ — siarczan(VI) sodu', 'akumulatory, nawozy, produkcja kwasów'],
    ['HNO₃', 'kwas azotowy(V)', 'tlenowy', 'NO₃⁻', '1−', 'HNO₃ → H⁺ + NO₃⁻', 'mocny', 'NaNO₃ — azotan(V) sodu', 'nawozy, materiały wybuchowe'],
    ['H₃PO₄', 'kwas fosforowy(V)', 'tlenowy', 'PO₄³⁻', '3−', 'stopniowo: H₃PO₄ ⇌ H⁺ + H₂PO₄⁻ ⇌ 2H⁺ + HPO₄²⁻ ⇌ 3H⁺ + PO₄³⁻. Skrót: H₃PO₄ ⇌ 3H⁺ + PO₄³⁻', 'słaby (mocniejszy niż ocet)', 'Na₃PO₄ — fosforan(V) sodu', 'nawozy, napoje typu cola, odrdzewiacze'],
    ['H₂CO₃', 'kwas węglowy', 'tlenowy', 'CO₃²⁻', '2−', 'H₂CO₃ ⇌ 2H⁺ + CO₃²⁻ (kwas nietrwały: H₂CO₃ ⇌ H₂O + CO₂)', 'słaby', 'Na₂CO₃ — węglan sodu', 'woda gazowana'],
    ['CH₃COOH', 'kwas octowy (etanowy)', 'organiczny', 'CH₃COO⁻', '1−', 'CH₃COOH ⇌ H⁺ + CH₃COO⁻ (kwasowy tylko H z grupy –COOH)', 'słaby', 'CH₃COONa — octan sodu', 'ocet, konserwacja żywności'],
    ['H₂SO₃', 'kwas siarkowy(IV)', 'tlenowy', 'SO₃²⁻', '2−', 'H₂SO₃ ⇌ 2H⁺ + SO₃²⁻', 'słaby', 'Na₂SO₃ — siarczan(IV) sodu', 'konserwant (SO₂), kwaśne deszcze'],
    ['H₂S', 'kwas siarkowodorowy', 'beztlenowy', 'S²⁻', '2−', 'H₂S ⇌ 2H⁺ + S²⁻', 'słaby', 'Na₂S — siarczek sodu', 'zapach zgniłych jaj, woda siarkowodorowa']
  ];
  /* ---------- wskazniki-statyw (zastępuje gfx-scene-indicatorRack): wskaźnik w siedmiu roztworach, tryb „najpierw przewidź” ---------- */
  KLOCKI.def('wskazniki-statyw', {
    opis: 'Statyw siedmiu probówek (HCl, ocet, woda, NaCl, soda oczyszczona, woda amoniakalna, NaOH) i wybór wskaźnika (uniwersalny, fenoloftaleina, oranż metylowy); najpierw przewidujesz barwę, kliknięcie probówki ją odsłania.',
    domyslne: {wskaznik: 'uni'},
    html: function (host, opc) {
      host.style.display = 'block';
      var R = [['HCl 0,1 M', 1], ['ocet', 2.9], ['woda', 7], ['NaCl', 7], ['soda oczyszczona', 8.3], ['NH₃(aq)', 11], ['NaOH 0,1 M', 13]];
      var W = {uni: ['uniwersalny', uni], phph: ['fenoloftaleina', fenol], oranz: ['oranż metylowy', oranz]};
      var wk = W[opc.wskaznik] ? opc.wskaznik : 'uni', odkryte = {}, przewiduj = true, bar = E('div', 'display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px'), sc = E('div', ''), info = E('div', 'font-size:14px;margin-top:6px;' + BOX), chips = {};
      function rys() {
        var f = W[wk][1];
        sc.innerHTML = '<svg viewBox="0 0 350 170" style="width:100%;display:block"><rect x="10" y="118" width="330" height="8" rx="3" fill="#b08154"/>' + R.map(function (r, i) {
          var x = 22 + i * 46, rev = !przewiduj || odkryte[i], kol = rev ? f(r[1]) : 'rgba(226,240,250,.6)';
          return '<g data-i="' + i + '" style="cursor:pointer"><path d="M' + x + ' 30 v78 q0 14 10 14 q10 0 10 -14 v-78" fill="rgba(226,232,240,.25)" stroke="var(--border-strong,#64748b)" stroke-width="2"/>' +
            '<path d="M' + (x + 2) + ' 60 v48 q0 11 8 11 q8 0 8 -11 v-48z" fill="' + kol + '" opacity=".92"/>' +
            (rev ? '' : '<text x="' + (x + 10) + '" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="#64748b">?</text>') +
            '<text x="' + (x + 10) + '" y="140" text-anchor="middle" font-size="9" fill="var(--text,#0f172a)">' + r[0].split(' ')[0] + '</text>' + (r[0].indexOf(' ') > 0 ? '<text x="' + (x + 10) + '" y="150" text-anchor="middle" font-size="9" fill="var(--text,#0f172a)">' + r[0].split(' ').slice(1).join(' ') + '</text>' : '') +
            (rev ? '<text x="' + (x + 10) + '" y="164" text-anchor="middle" font-size="8" font-weight="700" fill="var(--text-muted,#64748b)">pH ' + fmt(r[1], 1) + '</text>' : '') + '</g>';
        }).join('') + '</svg>';
        [].forEach.call(sc.querySelectorAll('g[data-i]'), function (g) { g.onclick = function () { odkryte[g.getAttribute('data-i')] = 1; rys(); }; });
        var n = Object.keys(odkryte).length;
        info.innerHTML = '<b>Wskaźnik: ' + W[wk][0] + '.</b> ' + (przewiduj ? (n < 7 ? 'Najpierw przewidź barwę w każdej probówce, potem kliknij ją (' + n + '/7).' : 'Wszystkie odkryte — porównaj z przewidywaniem.') : 'Barwy wszystkich roztworów.') +
          '<br><span style="color:var(--text-muted,#5b6b73)">' + (wk === 'phph' ? 'Fenoloftaleina jest malinowa tylko w zasadach (pH > 8,2); w kwasach i w roztworach obojętnych — bezbarwna.' : wk === 'oranz' ? 'Oranż metylowy: czerwony poniżej pH 3,1, żółty powyżej 4,4 — odróżnia mocny kwas od reszty.' : 'Wskaźnik uniwersalny: od czerwonego (mocne kwasy) przez zielony (obojętny) do fioletowego (mocne zasady).') + '</span>';
        Object.keys(chips).forEach(function (k) { U().zaznacz(chips[k], k === wk); });
      }
      Object.keys(W).forEach(function (k) { chips[k] = U().chip(W[k][0], k === wk, function () { wk = k; rys(); }); bar.appendChild(chips[k]); });
      bar.append(U().btn('Odkryj wszystkie', function () { przewiduj = false; rys(); }), U().btn('Od nowa (przewiduj)', function () { przewiduj = true; odkryte = {}; rys(); }));
      host.append(bar, sc, info); rys();
    }
  });

  /* tabela soli kwasu z 16 kationami (rozpuszczalność wg szkolnej tabeli, 20 °C — jak w CHE.DATA.SOLUBILITY_TABLE) */
  var KAT = [['Na', 1, 'sodu'], ['K', 1, 'potasu'], ['NH4', 1, 'amonu'], ['Mg', 2, 'magnezu'], ['Ca', 2, 'wapnia'], ['Ba', 2, 'baru'], ['Al', 3, 'glinu'], ['Zn', 2, 'cynku'], ['Mn', 2, 'manganu(II)'],
    ['Fe', 2, 'żelaza(II)'], ['Fe', 3, 'żelaza(III)'], ['Ni', 2, 'niklu(II)'], ['Cu', 2, 'miedzi(II)'], ['Ag', 1, 'srebra'], ['Pb', 2, 'ołowiu(II)'], ['Sn', 2, 'cyny(II)']];
  var ROZ = {Cl: 'RRRRRRRRRRRRRNTR', SO4: 'RRRRTNRRRRRRRTNR', NO3: 'RRRRRRRRRRRRRRR-', PO4: 'RRRNNNNNNNNNNNNN', CO3: 'RRRNNN-NNN-NNNN-', SO3: 'RRRTNN-NNN-N-NN-', S: 'RRR--R-NNN-NNNNN', CH3COO: 'RRRRRRRRRRRRRTR-'};
  var ANI = {Cl: ['Cl', 'chlorek'], SO4: ['SO₄', 'siarczan(VI)'], NO3: ['NO₃', 'azotan(V)'], PO4: ['PO₄', 'fosforan(V)'], CO3: ['CO₃', 'węglan'], SO3: ['SO₃', 'siarczan(IV)'], S: ['S', 'siarczek'], CH3COO: ['CH₃COO', 'octan']};
  var SUBD = '₀₁₂₃₄₅₆₇₈₉';
  function sol(an, q) {
    var a = ANI[an], w = ROZ[an], g = function (x, y) { return y ? g(y, x % y) : x; };
    return '<table style="border-collapse:collapse;font-size:13px;margin-top:8px"><tr><th align="left" style="padding:3px 8px">sól</th><th align="left" style="padding:3px 8px">nazwa</th><th style="padding:3px 8px">rozp.</th></tr>' +
      KAT.map(function (c, i) {
        var d = g(c[1], q), nc = q / d, na = c[1] / d, sym = c[0] === 'NH4' ? 'NH₄' : c[0], r = w.charAt(i), nm = a[0].length > 2 && na > 1;
        var f = (nc > 1 && c[0] === 'NH4' ? '(' + sym + ')' : sym) + (nc > 1 ? SUBD[nc] : '') + (nm ? '(' + a[0] + ')' : a[0]) + (na > 1 ? SUBD[na] : '');
        var col = r === 'R' ? 'var(--c-basic,#2e7d4f)' : r === 'N' ? 'var(--c-error,#b83a45)' : r === 'T' ? 'var(--c-warn,#b06f1c)' : 'var(--text-muted,#64748b)';
        return '<tr><td style="padding:2px 8px"><b>' + f + '</b></td><td style="padding:2px 8px">' + a[1] + ' ' + c[2] + '</td><td align="center" style="padding:2px 8px;color:' + col + ';font-weight:800">' + (r === '-' ? '—' : r) + '</td></tr>';
      }).join('') + '</table><div style="font-size:12px;color:var(--text-muted,#5b6b73);margin-top:4px">R — rozpuszczalna · T — trudno · N — nierozpuszczalna · — nie istnieje w wodzie. Wzór soli: ładunki kationu i reszty muszą się równoważyć.</div>';
  }
  var KLUCZ = ['Cl', 'SO4', 'NO3', 'PO4', 'CO3', 'CH3COO', 'SO3', 'S'], LAD = [1, 2, 1, 3, 2, 1, 2, 2];
  KLOCKI.def('kwasy-reszty', {
    opis: 'Tabela interaktywna: wybierasz wzór kwasu i widzisz jego nazwę, typ, resztę kwasową z ładunkiem, równanie dysocjacji, moc, sól sodową i zastosowanie.',
    domyslne: {},
    html: function (host) {
      host.style.display = 'block';
      var bar = E('div', 'margin-bottom:6px'), card = E('div', BOX + ';font-size:14px;line-height:1.55'), chips = [];
      function pokaz(i) {
        var k = KW[i];
        chips.forEach(function (c, j) { U().zaznacz(c, j === i); });
        var mocny = k[6] === 'mocny';
        card.innerHTML = '<div style="font-size:20px"><b>' + k[0] + '</b> — ' + k[1] + '</div>' +
          '<div><b>Typ:</b> ' + k[2] + ' · <b>Moc:</b> <span style="color:' + (mocny ? 'var(--c-error,#b91c1c)' : 'var(--c-new,#0f766e)') + ';font-weight:700">' + k[6] + '</span></div>' +
          '<div><b>Reszta kwasowa:</b> ' + k[3] + ' <span style="color:var(--text-muted,#5b6b73)">(ładunek ' + k[4] + ' = liczba atomów H oddawanych w skrócie)</span></div>' +
          '<div><b>Dysocjacja:</b> ' + k[5] + '</div><div><b>Sól sodowa:</b> ' + k[7] + '</div><div><b>Zastosowanie:</b> ' + k[8] + '</div>' +
          '<details style="margin-top:6px"><summary style="cursor:pointer;font-weight:700">Sole z 16 kationami: wzór, nazwa, rozpuszczalność</summary>' + sol(KLUCZ[i], LAD[i]) + '</details>';
      }
      KW.forEach(function (k, i) { if (i === 6) bar.appendChild(E('span', 'font-size:12px;color:var(--text-muted,#5b6b73);margin:0 4px 0 8px', 'dodatkowo (rozszerzenie):')); var c = U().chip(k[0], i === 0, function () { pokaz(i); }); chips.push(c); bar.appendChild(c); });
      host.append(bar, card); pokaz(0);
    }
  });

  /* ---------- kwasy-rozcienczanie ---------- */
  KLOCKI.def('kwasy-rozcienczanie', {
    opis: 'Rozcieńczanie stężonego kwasu: kwas wlewany do wody nagrzewa roztwór bezpiecznie, a woda wlewana do kwasu powoduje lokalne wrzenie i pryskanie.',
    domyslne: {},
    html: function (host) {
      host.style.display = 'block';
      var bar = E('div', 'margin-bottom:6px'), sc = E('div', ''), info = E('div', 'font-size:14px;margin-top:6px;' + BOX), chips = [];
      function pokaz(ok) {
        chips.forEach(function (c, j) { U().zaznacz(c, (j === 0) === ok); });
        var tc = ok ? '#f59e0b' : '#dc2626';
        sc.innerHTML = '<svg viewBox="0 0 300 150" style="width:100%;max-width:340px"><path d="M90 25v95q0 14 14 14h92q14 0 14-14V25" fill="rgba(224,242,254,.25)" stroke="var(--border-strong,#64748b)" stroke-width="2.5"/>' +
          '<rect x="93" y="70" width="114" height="62" rx="4" fill="' + (ok ? '#bae6fd' : '#e2e8f0') + '"/>' +
          '<rect x="93" y="' + (ok ? 70 : 100) + '" width="114" height="' + (ok ? 62 : 32) + '" rx="4" fill="' + (ok ? '#bae6fd' : '#fde68a') + '" opacity=".9"/>' +
          '<rect id="kw-t" x="240" y="30" width="14" height="100" rx="7" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
          '<rect id="kw-tt" x="243" y="127" width="8" height="3" rx="3" fill="' + tc + '" style="transition:all 3s ease"/>' +
          '<text x="247" y="22" font-size="10" text-anchor="middle" fill="currentColor">T</text>' +
          (ok ? '<path d="M150 8l0 40" stroke="#b45309" stroke-width="5" stroke-linecap="round" opacity=".7"/><text x="160" y="20" font-size="11" fill="currentColor">kwas</text>' :
            '<path d="M150 8l0 40" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" opacity=".7"/><text x="160" y="20" font-size="11" fill="currentColor">woda</text>' +
            [0, 1, 2, 3].map(function (k) { return '<circle class="kw-p" cx="' + (115 + k * 22) + '" cy="68" r="4" fill="#fde68a" stroke="#b45309" stroke-width=".6" style="transition:all 2.5s ease"/>'; }).join('')) +
          '<text x="150" y="147" font-size="11" text-anchor="middle" fill="currentColor">' + (ok ? 'woda (na dnie, mieszamy)' : 'stężony kwas (na dnie)') + '</text></svg>';
        var t = sc.querySelector('#kw-tt'), ps = sc.querySelectorAll('.kw-p');
        setTimeout(function () {
          var hh = ok ? 55 : 95; t.setAttribute('y', 130 - hh); t.setAttribute('height', hh + 0); t.style.y = (130 - hh) + 'px'; t.style.height = hh + 'px';
          [].forEach.call(ps, function (p, k) { p.setAttribute('cy', 20 - k * 6); p.setAttribute('cx', 105 + k * 30); p.setAttribute('r', 6); });
        }, 60);
        info.innerHTML = ok ? '<b>Kwas do wody ✔</b> — stężony H₂SO₄ jest gęstszy, opada i miesza się z dużą ilością wody, która odbiera ciepło. Wlewamy cienkim strumieniem i mieszamy.' :
          '<b>Woda do kwasu ✘</b> — lżejsza woda zostaje na wierzchu, rozpuszczanie wydziela dużo ciepła dokładnie na powierzchni: woda wrze i pryska kwasem. Dlatego <b>„najpierw woda, potem kwas”</b>.';
      }
      [['Kwas do wody', true], ['Woda do kwasu', false]].forEach(function (a, j) { var c = U().chip(a[0], j === 0, function () { pokaz(a[1]); }); chips.push(c); bar.appendChild(c); });
      host.append(bar, sc, info); pokaz(true);
    }
  });
})();
