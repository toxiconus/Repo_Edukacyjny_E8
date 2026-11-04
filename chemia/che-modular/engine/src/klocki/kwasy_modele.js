/* KLOCKI: kwasy (N04) — bufor, kwasy-reszty, kwasy-wlasciwosci, kwasy-rozcienczanie.
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
    ['H₃PO₄', 'kwas fosforowy(V)', 'tlenowy', 'PO₄³⁻', '3−', 'stopniowo: H₃PO₄ ⇌ H⁺ + H₂PO₄⁻ ⇌ 2H⁺ + HPO₄²⁻ ⇌ 3H⁺ + PO₄³⁻. Skrót: H₃PO₄ ⇌ 3H⁺ + PO₄³⁻', 'słaby (mocniejszy niż ocet)', 'Na₃PO₄ — fosforan(V) sodu', 'nawozy, napoje typu cola, odrdzewiacze'],
    ['H₂CO₃', 'kwas węglowy', 'tlenowy', 'CO₃²⁻', '2−', 'H₂CO₃ ⇌ 2H⁺ + CO₃²⁻ (kwas nietrwały: H₂CO₃ ⇌ H₂O + CO₂)', 'słaby', 'Na₂CO₃ — węglan sodu', 'woda gazowana'],
    ['CH₃COOH', 'kwas octowy (etanowy)', 'organiczny', 'CH₃COO⁻', '1−', 'CH₃COOH ⇌ H⁺ + CH₃COO⁻ (kwasowy tylko H z grupy –COOH)', 'słaby', 'CH₃COONa — octan sodu', 'ocet, konserwacja żywności'],
    ['H₂SO₃', 'kwas siarkowy(IV)', 'tlenowy', 'SO₃²⁻', '2−', 'H₂SO₃ ⇌ 2H⁺ + SO₃²⁻', 'słaby', 'Na₂SO₃ — siarczan(IV) sodu', 'konserwant (SO₂), kwaśne deszcze'],
    ['H₂S', 'kwas siarkowodorowy', 'beztlenowy', 'S²⁻', '2−', 'H₂S ⇌ 2H⁺ + S²⁻', 'słaby', 'Na₂S — siarczek sodu', 'zapach zgniłych jaj, woda siarkowodorowa']
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
      KW.forEach(function (k, i) { if (i === 6) bar.appendChild(E('span', 'font-size:12px;color:var(--muted,#5b6b73);margin:0 4px 0 8px', 'dodatkowo (rozszerzenie):')); var c = U().chip(k[0], i === 0, function () { pokaz(i); }); chips.push(c); bar.appendChild(c); });
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
})();
