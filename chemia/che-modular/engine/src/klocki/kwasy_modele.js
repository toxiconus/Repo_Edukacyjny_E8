/* KLOCKI: kwasy (N04) — ph-skala, miareczkowanie, bufor, kwasy-reszty, kwasy-wlasciwosci, kwasy-rozcienczanie, kwasne-deszcze.
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

  /* ---------- ph-skala ---------- */
  var SUBST = [[1.5, 'sok żołądkowy'], [2.3, 'sok z cytryny'], [2.9, 'ocet'], [4.5, 'sok pomidorowy'], [5.6, 'deszcz'], [7, 'woda destylowana'], [8.3, 'soda oczyszczona'], [10, 'mydło'], [11.5, 'amoniak (woda)'], [13, 'NaOH 0,1 M']];
  KLOCKI.def('ph-skala', {
    opis: 'Skala pH 0–14: suwak pokazuje odczyn, stężenie H₃O⁺, barwę papierka uniwersalnego, oranżu metylowego i fenoloftaleiny oraz najbliższą substancję z życia.',
    domyslne: {ph: 3},
    html: function (host, opc) {
      host.style.display = 'block';
      var grad = 'linear-gradient(90deg,' + STOPS.map(function (s) { return s[1] + ' ' + (s[0] / 14 * 100) + '%'; }).join(',') + ')';
      var bar = E('div', 'height:22px;border-radius:6px;border:1px solid var(--border-strong,#94a3b8);background:' + grad + ';position:relative;margin:4px 0 2px');
      var ticks = E('div', 'display:flex;justify-content:space-between;font-size:11px;color:var(--muted,#5b6b73);padding:0 2px');
      for (var i = 0; i <= 14; i += 2) ticks.appendChild(E('span', '', i));
      var mark = E('div', 'position:absolute;top:-5px;width:3px;height:32px;background:#0f172a;border:1px solid #fff;border-radius:2px;transform:translateX(-50%)'); bar.appendChild(mark);
      var out = E('div', 'display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin-top:8px');
      var info = E('div', 'font-size:14px;margin-top:8px');
      var sl = U().suwak('pH roztworu', 0, 14, 0.1, opc.ph, function (v, o) {
        mark.style.left = (v / 14 * 100) + '%';
        var h = Math.pow(10, -v), odc = v < 6.95 ? 'kwasowy' : v > 7.05 ? 'zasadowy' : 'obojętny';
        var best = SUBST.reduce(function (a, s) { return Math.abs(s[0] - v) < Math.abs(a[0] - v) ? s : a; });
        function sw(n, c) { return '<div style="text-align:center;font-size:12px"><div style="height:30px;border-radius:6px;border:1px solid var(--border-strong,#94a3b8);background:' + c + '"></div>' + n + '</div>'; }
        out.innerHTML = sw('papierek uniwersalny', uni(v)) + sw('oranż metylowy', oranz(v)) + sw('fenoloftaleina', fenol(v));
        info.innerHTML = '<b>Odczyn ' + odc + '</b> · [H₃O⁺] = 10<sup>−' + fmt(v, 1) + '</sup> mol/dm³ ≈ ' + h.toExponential(1).replace('e-', ' · 10⁻').replace('.', ',') +
          '<br><span style="color:var(--muted,#5b6b73)">Najbliżej: ' + best[1] + ' (pH ≈ ' + fmt(best[0], 1) + '). Zmiana pH o 1 = 10× inne stężenie H₃O⁺.</span>';
        if (o) o.textContent = fmt(v, 1);
      });
      host.append(sl, bar, ticks, out, info);
    }
  });

  /* ---------- miareczkowanie ---------- */
  function phTytr(slaby, V) {   // 25 cm³ 0,1 M kwasu + V cm³ 0,1 M NaOH
    var Vk = 25, c = .1, Kw = 1e-14, Ka = 1.8e-5, ca = Vk * c / (Vk + V), cn = V * c / (Vk + V);
    if (!slaby) {
      var d = (Vk - V) * c / (Vk + V);
      if (Math.abs(d) < 1e-9) return 7;
      return d > 0 ? -Math.log10(d) : 14 + Math.log10(-d);
    }
    var lo = -14, hi = 0;   // log10 h
    for (var i = 0; i < 80; i++) {
      var m = (lo + hi) / 2, h = Math.pow(10, m), f = h + cn - ca * Ka / (Ka + h) - Kw / h;
      if (f > 0) lo = m; else hi = m;
    }
    return -(lo + hi) / 2;
  }
  KLOCKI.def('miareczkowanie', {
    opis: 'Miareczkowanie 25 cm³ kwasu 0,1 M roztworem NaOH 0,1 M: suwak dodaje zasadę, kolba z fenoloftaleiną zmienia barwę, a punkt biegnie po krzywej pH(V); wybór kwasu mocnego lub słabego.',
    domyslne: {kwas: 'HCl'},
    html: function (host, opc) {
      host.style.display = 'block';
      var slaby = String(opc.kwas).indexOf('CH3') === 0 || opc.kwas === 'slaby';
      var bar = E('div', 'margin-bottom:6px'), W = 300, H = 170, pad = 30;
      var svgNS = 'http://www.w3.org/2000/svg';
      var wrap = E('div', 'display:flex;flex-wrap:wrap;gap:14px;align-items:center');
      var kolba = E('div', 'width:150px;text-align:center;font-size:13px');
      var cv = E('div', 'flex:1;min-width:240px');
      var info = E('div', 'font-size:14px;margin-top:8px;' + BOX);
      var V = 0, kw = slaby ? 'slaby' : 'mocny';
      function krzywa(sl) {
        var pts = []; for (var v = 0; v <= 50; v += .5) pts.push([pad + v / 50 * (W - pad - 8), 8 + (1 - phTytr(sl, v) / 14) * (H - 8 - pad)]);
        return pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ');
      }
      function rys() {
        var ph = phTytr(slaby, V), px = pad + V / 50 * (W - pad - 8), py = 8 + (1 - ph / 14) * (H - 8 - pad), eq = pad + .5 * (W - pad - 8);
        var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:420px" role="img" aria-label="Krzywa miareczkowania">' +
          '<line x1="' + pad + '" y1="' + (H - pad) + '" x2="' + (W - 6) + '" y2="' + (H - pad) + '" stroke="currentColor" stroke-width="1"/>' +
          '<line x1="' + pad + '" y1="8" x2="' + pad + '" y2="' + (H - pad) + '" stroke="currentColor" stroke-width="1"/>' +
          '<line x1="' + pad + '" y1="' + (8 + (1 - 7 / 14) * (H - 8 - pad)) + '" x2="' + (W - 6) + '" y2="' + (8 + (1 - 7 / 14) * (H - 8 - pad)) + '" stroke="currentColor" stroke-dasharray="3 3" opacity=".35"/>' +
          '<line x1="' + eq + '" y1="8" x2="' + eq + '" y2="' + (H - pad) + '" stroke="currentColor" stroke-dasharray="3 3" opacity=".35"/>' +
          '<path d="' + krzywa(slaby) + '" fill="none" stroke="#2563eb" stroke-width="2.5"/>' +
          '<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="5.5" fill="#dc2626" stroke="#fff" stroke-width="1.5"/>' +
          '<text x="' + (pad - 4) + '" y="14" font-size="10" text-anchor="end" fill="currentColor">14</text><text x="' + (pad - 4) + '" y="' + (H - pad) + '" font-size="10" text-anchor="end" fill="currentColor">0</text>' +
          '<text x="' + (pad - 4) + '" y="' + (8 + (1 - 7 / 14) * (H - 8 - pad) + 3) + '" font-size="10" text-anchor="end" fill="currentColor">7</text>' +
          '<text x="' + pad + '" y="' + (H - 12) + '" font-size="10" fill="currentColor">0</text><text x="' + eq + '" y="' + (H - 12) + '" font-size="10" text-anchor="middle" fill="currentColor">25</text><text x="' + (W - 8) + '" y="' + (H - 12) + '" font-size="10" text-anchor="end" fill="currentColor">50</text>' +
          '<text x="' + (W / 2 + 10) + '" y="' + (H - 1) + '" font-size="10" text-anchor="middle" fill="currentColor">V NaOH [cm³]</text></svg>';
        cv.innerHTML = s;
        kolba.innerHTML = '<svg viewBox="0 0 120 130" style="width:120px"><path d="M45 8h30v32l30 62q5 14-10 14H25q-15 0-10-14L45 40z" fill="rgba(224,242,254,.35)" stroke="var(--border-strong,#64748b)" stroke-width="2"/>' +
          '<path d="M38 66h44l23 36q5 12-9 12H24q-14 0-9-12z" fill="' + fenol(ph) + '" opacity=".95"/></svg><div>fenoloftaleina: <b>' + (ph < 8.2 ? 'bezbarwna' : ph < 9.9 ? 'różowieje' : 'malinowa') + '</b></div>';
        var stan = V < 24.95 ? 'kwas w nadmiarze' : V > 25.05 ? 'zasada w nadmiarze' : '<b>punkt równoważnikowy</b>';
        info.innerHTML = 'V NaOH = <b>' + fmt(V, 1) + ' cm³</b> · pH = <b>' + fmt(ph, 2) + '</b> · ' + stan +
          '<br><span style="color:var(--muted,#5b6b73)">' + (slaby ? 'Kwas słaby (CH₃COOH): start przy pH ≈ 2,9, punkt równoważnikowy przy pH ≈ 8,7 (>7), bo octan sodu hydrolizuje.' : 'Kwas mocny (HCl): start przy pH = 1, punkt równoważnikowy przy pH = 7, a skok pH jest gwałtowny.') + ' Reakcja: ' + (slaby ? 'CH₃COOH + NaOH → CH₃COONa + H₂O' : 'HCl + NaOH → NaCl + H₂O') + '.</span>';
      }
      var chips = [U().chip('Kwas mocny: HCl', !slaby, function () { slaby = false; zazn(); rys(); }), U().chip('Kwas słaby: CH₃COOH', slaby, function () { slaby = true; zazn(); rys(); })];
      function zazn() { U().zaznacz(chips[0], !slaby); U().zaznacz(chips[1], slaby); }
      bar.append(chips[0], chips[1]);
      var sl = U().suwak('Dodano NaOH [cm³]', 0, 50, 0.5, 0, function (v, o) { V = v; if (o) o.textContent = fmt(v, 1); if (cv.firstChild || true) rys(); });
      wrap.append(kolba, cv);
      host.append(bar, sl, wrap, info);
    }
  });

  /* ---------- bufor ---------- */
  KLOCKI.def('bufor', {
    opis: 'Bufor octanowy (CH₃COOH + CH₃COONa) i czysta woda: dodawanie porcji HCl lub NaOH i odczyt pH na dwóch pehametrach — bufor prawie nie zmienia pH, woda zmienia się gwałtownie.',
    domyslne: {},
    html: function (host) {
      host.style.display = 'block';
      var pKa = 4.76, nHA = 10, nA = 10, x = 0;   // mmol; x = dodane mmol H+ (dodatnie) lub OH- (ujemne); 100 cm³ każdego roztworu
      var bar = E('div', 'margin-bottom:6px'), out = E('div', 'display:grid;grid-template-columns:1fr 1fr;gap:10px'), info = E('div', 'font-size:14px;margin-top:8px');
      function phB() {
        var a = nA - x, ha = nHA + x;
        if (x >= 0) { if (a > .05) return pKa + Math.log10(a / ha); return -Math.log10(Math.max(x - nA, 1e-6) / 100 * 1000 * 1e-3 * 1000 / 1000 / 1); }
        if (ha > .05) return pKa + Math.log10(a / ha);
        return 14 + Math.log10(Math.max(-x - nHA, 1e-6) / 100);
      }
      function phW() { var e = Math.abs(x) / (100 + 1); return x === 0 ? 7 : x > 0 ? -Math.log10(e / 1) + 0 - 0 : 14 + Math.log10(e); }
      function pomiar(nazwa, ph, opis) {
        return '<div style="' + BOX + ';text-align:center"><b>' + nazwa + '</b><div style="font-size:11px;color:var(--muted,#5b6b73)">' + opis + '</div>' +
          '<div style="height:34px;border-radius:6px;margin:8px 0;border:1px solid var(--border-strong,#94a3b8);background:' + uni(ph) + '"></div>' +
          '<div style="font-size:26px;font-weight:700">pH ' + fmt(ph, 2) + '</div></div>';
      }
      function rys() {
        // x w mmol na 100 cm³ roztworu: stężenie H⁺ w wodzie = x mmol / ~100 cm³ → x·10 mmol/dm³ → x/100 mol/dm³
        var pw = x === 0 ? 7 : x > 0 ? -Math.log10(x / 100) : 14 + Math.log10(-x / 100);
        var pb = phB();
        if (x > nA) pb = -Math.log10((x - nA) / 100);
        out.innerHTML = pomiar('Woda', pw, '100 cm³ H₂O') + pomiar('Bufor', pb, '100 cm³: 0,1 M CH₃COOH + 0,1 M CH₃COONa');
        info.innerHTML = 'Dodano: <b>' + (x === 0 ? 'nic' : x > 0 ? fmt(x, 0) + ' mmol HCl (' + fmt(x, 0) + ' cm³ 1 M)' : fmt(-x, 0) + ' mmol NaOH (' + fmt(-x, 0) + ' cm³ 1 M)') + '</b>' +
          '<br><span style="color:var(--muted,#5b6b73)">Bufor: CH₃COO⁻ wiąże dodane H⁺ (→ CH₃COOH), a CH₃COOH neutralizuje dodane OH⁻ (→ CH₃COO⁻ + H₂O). pH = pK<sub>a</sub> + log([sól]/[kwas]), więc zmienia się tylko o ułamek. Gdy bufor się wyczerpie (po ~10 mmol), pH spada lub rośnie gwałtownie.</span>';
      }
      function dodaj(d) { return function () { x = Math.max(-12, Math.min(12, x + d)); rys(); }; }
      bar.append(U().btn('+ 1 mmol HCl', dodaj(1)), U().btn('+ 1 mmol NaOH', dodaj(-1)), U().btn('Od nowa', function () { x = 0; rys(); }));
      host.append(bar, out, info); rys();
    }
  });

  /* ---------- kwasy-reszty ---------- */
  var KW = [
    ['HCl', 'kwas chlorowodorowy (solny)', 'beztlenowy', 'Cl⁻', '1−', 'HCl → H⁺ + Cl⁻', 'mocny', 'NaCl — chlorek sodu', 'sok żołądkowy, trawienie, oczyszczanie metali'],
    ['H₂SO₄', 'kwas siarkowy(VI)', 'tlenowy', 'SO₄²⁻', '2−', 'I stopień: H₂SO₄ → H⁺ + HSO₄⁻ (praktycznie całkowity); II: HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (częściowy). Szkolny skrót: H₂SO₄ → 2H⁺ + SO₄²⁻', 'mocny', 'Na₂SO₄ — siarczan(VI) sodu', 'akumulatory, nawozy, produkcja kwasów'],
    ['HNO₃', 'kwas azotowy(V)', 'tlenowy', 'NO₃⁻', '1−', 'HNO₃ → H⁺ + NO₃⁻', 'mocny', 'NaNO₃ — azotan(V) sodu', 'nawozy, materiały wybuchowe'],
    ['H₃PO₄', 'kwas fosforowy(V)', 'tlenowy', 'PO₄³⁻', '3−', 'stopniowo: H₃PO₄ ⇌ H⁺ + H₂PO₄⁻ ⇌ 2H⁺ + HPO₄²⁻ ⇌ 3H⁺ + PO₄³⁻. Skrót: H₃PO₄ ⇌ 3H⁺ + PO₄³⁻', 'słaby (średniej mocy)', 'Na₃PO₄ — fosforan(V) sodu', 'nawozy, napoje typu cola, odrdzewiacze'],
    ['H₂CO₃', 'kwas węglowy', 'tlenowy', 'CO₃²⁻', '2−', 'H₂CO₃ ⇌ 2H⁺ + CO₃²⁻ (kwas nietrwały: H₂CO₃ ⇌ H₂O + CO₂)', 'słaby', 'Na₂CO₃ — węglan sodu', 'woda gazowana'],
    ['H₂SO₃', 'kwas siarkowy(IV)', 'tlenowy', 'SO₃²⁻', '2−', 'H₂SO₃ ⇌ 2H⁺ + SO₃²⁻', 'słaby', 'Na₂SO₃ — siarczan(IV) sodu', 'konserwant (SO₂), kwaśne deszcze'],
    ['H₂S', 'kwas siarkowodorowy', 'beztlenowy', 'S²⁻', '2−', 'H₂S ⇌ 2H⁺ + S²⁻', 'słaby', 'Na₂S — siarczek sodu', 'zapach zgniłych jaj, woda siarkowodorowa'],
    ['CH₃COOH', 'kwas octowy (etanowy)', 'organiczny', 'CH₃COO⁻', '1−', 'CH₃COOH ⇌ H⁺ + CH₃COO⁻ (kwasowy tylko H z grupy –COOH)', 'słaby', 'CH₃COONa — octan sodu', 'ocet, konserwacja żywności']
  ];
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
          '<div><b>Typ:</b> ' + k[2] + ' · <b>Moc:</b> <span style="color:' + (mocny ? '#b91c1c' : '#0f766e') + ';font-weight:700">' + k[6] + '</span></div>' +
          '<div><b>Reszta kwasowa:</b> ' + k[3] + ' <span style="color:var(--muted,#5b6b73)">(ładunek ' + k[4] + ' = liczba atomów H oddawanych w skrócie)</span></div>' +
          '<div><b>Dysocjacja:</b> ' + k[5] + '</div><div><b>Sól sodowa:</b> ' + k[7] + '</div><div><b>Zastosowanie:</b> ' + k[8] + '</div>';
      }
      KW.forEach(function (k, i) { var c = U().chip(k[0], i === 0, function () { pokaz(i); }); chips.push(c); bar.appendChild(c); });
      host.append(bar, card); pokaz(0);
    }
  });

  /* ---------- kwasy-wlasciwosci ---------- */
  KLOCKI.def('kwasy-wlasciwosci', {
    opis: 'Pokazy z wybranymi stężonymi kwasami: H₂SO₄ zwęgla cukier, HNO₃ żółci białko (próba ksantoproteinowa), stężony HCl dymi. Kliknięcie przycisku uruchamia pokaz.',
    domyslne: {},
    html: function (host) {
      host.style.display = 'block';
      var bar = E('div', 'margin-bottom:6px'), sc = E('div', ''), info = E('div', 'font-size:14px;margin-top:6px;' + BOX), chips = [];
      var P = [
        ['H₂SO₄ + cukier', 'Stężony H₂SO₄ odwadnia cukier: C₁₂H₂₂O₁₁ → 12 C + 11 H₂O. Biały cukier brązowieje i czernieje, rośnie porowata masa węgla, mieszanina się mocno nagrzewa. Pokaz wykonuje nauczyciel.', '#f8fafc', '#171717'],
        ['HNO₃ + białko', 'Stężony HNO₃ nitruje pierścienie aromatyczne w białku — powstaje żółte zabarwienie (reakcja ksantoproteinowa). Na skórze zostawia żółte plamy. Pokaz wykonuje nauczyciel.', '#f8fafc', '#facc15'],
        ['Stężony HCl (dymi)', 'Stężony kwas solny wydziela gazowy HCl, który z parą wodną z powietrza tworzy białą mgiełkę kropelek kwasu — „dymi”. Pracujemy pod wyciągiem.', '#e0f2fe', '#e0f2fe']
      ];
      function pokaz(i) {
        chips.forEach(function (c, j) { U().zaznacz(c, j === i); });
        var p = P[i], dym = i === 2, h = i === 0 ? 70 : 38;
        sc.innerHTML = '<svg viewBox="0 0 260 150" style="width:100%;max-width:300px"><path d="M60 20v100q0 14 14 14h112q14 0 14-14V20" fill="rgba(224,242,254,.25)" stroke="var(--border-strong,#64748b)" stroke-width="2.5"/>' +
          '<rect id="kw-sub" x="63" y="' + (132 - 38) + '" width="134" height="38" rx="4" fill="' + p[2] + '" style="transition:fill 4s ease,height 4s ease,y 4s ease"/>' +
          (dym ? [0, 1, 2, 3, 4].map(function (k) { return '<circle class="kw-d" cx="' + (90 + k * 20) + '" cy="90" r="6" fill="#fff" opacity="0" stroke="#94a3b8" stroke-width=".5" style="transition:all 4s ease"/>'; }).join('') : '') +
          '</svg>';
        var r = sc.querySelector('#kw-sub'), ds = sc.querySelectorAll('.kw-d');
        setTimeout(function () {
          r.setAttribute('fill', p[3]); r.style.fill = p[3];
          if (i === 0) { r.style.height = h + 'px'; r.style.y = (132 - h) + 'px'; r.setAttribute('height', h); r.setAttribute('y', 132 - h); }
          [].forEach.call(ds, function (d, k) { d.setAttribute('opacity', '.85'); d.setAttribute('cy', 20 - k * 3); d.setAttribute('r', 14); });
        }, 60);
        info.innerHTML = '<b>' + p[0] + ':</b> ' + p[1];
      }
      P.forEach(function (p, i) { var c = U().chip(p[0], false, function () { pokaz(i); }); chips.push(c); bar.appendChild(c); });
      host.append(bar, sc, info); pokaz(0);
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

  /* ---------- kwasne-deszcze ---------- */
  KLOCKI.def('kwasne-deszcze', {
    opis: 'Obieg kwaśnego deszczu: komin emituje SO₂ i NOₓ, w chmurze powstają H₂SO₄ i HNO₃, deszcz o pH poniżej 5,6 niszczy marmur, las i jezioro. Animacja w pętli.',
    domyslne: {szer: 640, wys: 320},
    rysuj: function (x, w, h, st, t) {
      var ciemny = document.documentElement.hasAttribute('data-ciemny'), tx = ciemny ? '#e2e8f0' : '#1f2937';
      x.clearRect(0, 0, w, h); x.fillStyle = ciemny ? '#0f172a' : '#eef6fb'; x.fillRect(0, 0, w, h);
      x.fillStyle = ciemny ? '#1e293b' : '#cbd5e1'; x.fillRect(0, h - 50, w, 50);
      x.fillStyle = '#475569'; x.fillRect(50, h - 140, 46, 90); x.fillRect(62, h - 185, 12, 45);   // fabryka i komin
      x.fillStyle = tx; x.font = '12px system-ui,sans-serif'; x.fillText('Spalanie paliw', 28, h - 30);
      var cyc = (t % 8) / 8;
      for (var i = 0; i < 12; i++) {   // dym: SO₂, NOₓ
        var p = ((cyc * 1.2 + i / 12) % 1), px = 68 + p * (w * .38), py = h - 190 - p * 60 + Math.sin(i + t) * 3;
        x.fillStyle = 'rgba(100,116,139,' + (.7 - p * .4) + ')'; x.beginPath(); x.arc(px, py, 6 + p * 6, 0, 6.3); x.fill();
      }
      x.fillStyle = tx; x.fillText('SO₂, NOₓ', 68, h - 205);
      x.fillStyle = ciemny ? '#334155' : '#94a3b8';   // chmura
      [[w * .55, 70, 38], [w * .63, 60, 46], [w * .72, 72, 36], [w * .6, 82, 30]].forEach(function (c) { x.beginPath(); x.arc(c[0], c[1], c[2], 0, 6.3); x.fill(); });
      x.fillStyle = tx; x.font = '11px system-ui,sans-serif';
      x.fillText('SO₂ + H₂O → H₂SO₃;  2SO₂ + O₂ → 2SO₃;  SO₃ + H₂O → H₂SO₄', w * .38, 22);
      x.fillText('2NO₂ + H₂O → HNO₃ + HNO₂', w * .38, 38);
      x.fillStyle = '#2563eb';   // deszcz
      for (var d = 0; d < 26; d++) { var q = ((t * .9 + d * .137) % 1), dx = w * .45 + (d % 13) * 18 + (d > 12 ? 9 : 0); x.fillRect(dx, 110 + q * (h - 160), 2, 9); }
      x.fillStyle = '#dc2626'; x.font = 'bold 13px system-ui,sans-serif'; x.fillText('deszcz pH < 5,6', w * .5, 115);
      x.fillStyle = tx; x.font = '11px system-ui,sans-serif'; x.fillText('(czysty deszcz ≈ 5,6 — rozpuszczony CO₂)', w * .5, 130);
      // skutki
      x.fillStyle = '#f1f5f9'; x.fillRect(w * .43, h - 105, 26, 55); x.fillStyle = '#94a3b8'; x.fillRect(w * .43 - 4, h - 108, 34, 6);
      x.fillStyle = tx; x.fillText('marmur', w * .41, h - 33); x.fillText('CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂', w * .33, h - 15);
      x.fillStyle = '#166534'; for (var k = 0; k < 4; k++) { x.beginPath(); x.moveTo(w * .62 + k * 22, h - 50); x.lineTo(w * .62 + k * 22 + 10, h - 100 + (k % 2) * 8); x.lineTo(w * .62 + k * 22 + 20, h - 50); x.fill(); }
      x.fillStyle = tx; x.fillText('las', w * .68, h - 33);
      x.fillStyle = '#38bdf8'; x.fillRect(w * .84, h - 62, w * .14, 12); x.fillStyle = tx; x.fillText('jezioro', w * .86, h - 33);
    }
  });
})();
