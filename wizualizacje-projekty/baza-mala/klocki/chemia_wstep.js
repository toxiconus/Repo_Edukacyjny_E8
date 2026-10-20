/* KLOCKI wstępu do chemii (F01–F03, N02): lancuch-poziomow (atom → cząsteczka → substancja → reakcja), zlewka-predykcja (hipoteza przed doświadczeniem),
   mapa-mysli (odsłanianie gałęzi), czasteczki-3d (obrotowy model kulkowy z kątami), destylacja (kolba, chłodnica, odbieralnik). Wymaga ui_klocki.js. */
(function () {
  var CPK = {H: ['#f8fafc', 9], C: ['#475569', 14], O: ['#ef4444', 14], N: ['#3b82f6', 14], S: ['#eab308', 17], Cl: ['#22c55e', 16]};
  function box(host) { host.style.display = 'block'; var a = document.createElement('div'), b = document.createElement('div'), c = document.createElement('div'); a.style.cssText = 'margin-bottom:4px'; c.style.cssText = 'font-size:14px;margin-top:6px;line-height:1.5'; host.append(a, b, c); return [a, b, c]; }
  function at(x, y, s, r) { var a = CPK[s] || ['#94a3b8', 12]; return '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (r || a[1]) + '" fill="' + a[0] + '" stroke="#334155" stroke-width="1.2"/>' + (r && r < 8 ? '' : '<text x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="middle" font-size="' + ((r || a[1]) > 11 ? 12 : 9) + '" font-weight="700" fill="' + (a[0] === '#f8fafc' ? '#0f172a' : '#fff') + '">' + s + '</text>'); }

  /* ---------- łańcuch poziomów opisu ---------- */
  KLOCKI.def('lancuch-poziomow', {
    opis: 'Cztery poziomy opisu tego samego obiektu: atom, cząsteczka, próbka substancji, reakcja — przełączane przyciskami lub automatycznie.',
    domyslne: {},
    html: function (host) {
      var U = KLOCKI.ui, p = box(host), k = 0, t = 0;
      var N = ['1. Atom', '2. Cząsteczka', '3. Substancja', '4. Reakcja'];
      N.forEach(function (n, i) { p[0].appendChild(U.btn(n, function () { k = i; t = 0; })); });
      var TX = ['<b>Atom</b> tlenu O: najmniejsza cząstka pierwiastka zachowująca jego właściwości chemiczne.', '<b>Cząsteczka</b> wody H₂O: atomy połączone wiązaniami; wzór mówi, ile atomów jakiego pierwiastka.', '<b>Substancja</b> (próbka wody): ogromna liczba jednakowych cząsteczek — to widać w zlewce, ma właściwości fizyczne (gęstość, temperaturę wrzenia).', '<b>Reakcja</b>: 2 H₂ + O₂ → 2 H₂O — atomy łączą się inaczej, powstaje nowa substancja. Liczba atomów każdego pierwiastka się nie zmienia.'];
      function rys() {
        [].forEach.call(p[0].children, function (b, i) { U.zaznacz(b, i === k); });
        var s = '<svg viewBox="0 0 560 220" width="100%" style="max-width:620px;display:block" role="img" aria-label="Poziomy opisu: ' + N[k] + '">';
        if (k === 0) s += at(280, 110, 'O', 30 + Math.sin(t * 2) * 1.5);
        else if (k === 1) { var d = Math.sin(t * 1.5) * 2; s += '<line x1="280" y1="100" x2="236" y2="136" stroke="#334155" stroke-width="4"/><line x1="280" y1="100" x2="324" y2="136" stroke="#334155" stroke-width="4"/>' + at(236 + d, 136, 'H') + at(324 - d, 136, 'H') + at(280, 100, 'O'); }
        else if (k === 2) { s += '<path d="M200 40 V170 Q200 190 220 190 H340 Q360 190 360 170 V40" fill="#bae6fd" fill-opacity=".45" stroke="#64748b" stroke-width="2"/>'; for (var i = 0; i < 18; i++) { var x = 222 + (i % 6) * 22 + Math.sin(t * 1.3 + i) * 3, y = 80 + Math.floor(i / 6) * 34 + Math.cos(t * 1.1 + i * 2) * 3; s += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="6" fill="#ef4444"/><circle cx="' + (x - 6).toFixed(1) + '" cy="' + (y + 6).toFixed(1) + '" r="3.5" fill="#f8fafc" stroke="#334155" stroke-width=".6"/><circle cx="' + (x + 6).toFixed(1) + '" cy="' + (y + 6).toFixed(1) + '" r="3.5" fill="#f8fafc" stroke="#334155" stroke-width=".6"/>'; } }
        else {
          var ph = (t % 7) / 7, a = ph < .25 ? 0 : ph < .6 ? (ph - .25) / .35 : 1, e = a * a * (3 - 2 * a);
          var A = [['H', 70, 90, 360, 130], ['H', 96, 90, 400, 130], ['H', 70, 150, 450, 130], ['H', 96, 150, 490, 130], ['O', 170, 120, 380, 100], ['O', 204, 120, 470, 100]];
          s += '<text x="40" y="40" font-size="13" fill="currentColor">substraty: 2 H₂ + O₂</text><text x="340" y="40" font-size="13" fill="currentColor">produkty: 2 H₂O</text>';
          var Pp = A.map(function (q) { return [q[1] + (q[3] - q[1]) * e, q[2] + (q[4] - q[2]) * e]; });
          function bd(i, j, o) { return '<line x1="' + Pp[i][0].toFixed(1) + '" y1="' + Pp[i][1].toFixed(1) + '" x2="' + Pp[j][0].toFixed(1) + '" y2="' + Pp[j][1].toFixed(1) + '" stroke="#334155" stroke-width="4" opacity="' + o.toFixed(2) + '"/>'; }
          s += bd(0, 1, 1 - e) + bd(2, 3, 1 - e) + bd(4, 5, 1 - e) + bd(4, 0, e) + bd(4, 1, e) + bd(5, 2, e) + bd(5, 3, e);
          A.forEach(function (q) { s += at(q[1] + (q[3] - q[1]) * e, q[2] + (q[4] - q[2]) * e, q[0], q[0] === 'O' ? 13 : 9); });
          s += '<text x="280" y="200" text-anchor="middle" font-size="16" fill="currentColor">2 H₂ + O₂ → 2 H₂O</text>';
        }
        p[1].innerHTML = s + '</svg>'; p[2].innerHTML = TX[k];
      }
      rys(); U.anim(host, function (dt) { t += dt; rys(); });
    }
  });

  /* ---------- zlewka z predykcją ---------- */
  var SC = [
    ['Cynk + kwas solny', 'gaz', 'Zn + 2 HCl → ZnCl₂ + H₂↑', 'Wydzielają się pęcherzyki wodoru; metal powoli się roztwarza.', '#e0f2fe', 0],
    ['AgNO₃ + NaCl', 'osad', 'AgNO₃ + NaCl → AgCl↓ + NaNO₃', 'Powstaje biały, serowaty osad AgCl.', '#e0f2fe', '#f4f4f0'],
    ['CuSO₄ + NaOH', 'osad', 'CuSO₄ + 2 NaOH → Cu(OH)₂↓ + Na₂SO₄', 'Powstaje niebieski, galaretowaty osad Cu(OH)₂.', '#bfe3f7', '#4a90d9'],
    ['Soda + ocet', 'gaz', 'NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂↑', 'Burzliwe pienienie — wydziela się CO₂.', '#e8f6fb', 0],
    ['NaOH + fenoloftaleina', 'barwa', 'NaOH(aq) + fenoloftaleina → roztwór malinowy', 'Roztwór zasadowy zabarwia fenoloftaleinę na malinowo.', '#f4c6e8', 0],
    ['NaCl + woda', 'nic', 'NaCl(s) → Na⁺(aq) + Cl⁻(aq)', 'Nic nie widać prócz rozpuszczania; nie powstała nowa substancja.', '#e0f2fe', 0]
  ];
  var OBS = [['gaz', 'pęcherzyki gazu'], ['osad', 'osad (ciało stałe opada na dno)'], ['barwa', 'zmiana barwy roztworu'], ['nic', 'żadna widoczna zmiana']];
  KLOCKI.def('zlewka-predykcja', {
    opis: 'Najpierw wybierasz, czego spodziewasz się w zlewce, potem animacja pokazuje wynik i porównuje go z przewidywaniem.',
    domyslne: {},
    html: function (host) {
      var U = KLOCKI.ui, p = box(host), i = 0, wyb = null, pokaz = false, t = 0;
      function nast() { i = (i + 1) % SC.length; wyb = null; pokaz = false; t = 0; ui(); }
      function ui() {
        p[0].innerHTML = '<div style="font-weight:700;margin-bottom:6px">Doświadczenie: ' + SC[i][0] + '</div><div style="margin-bottom:4px">Czego się spodziewasz?</div>';
        OBS.forEach(function (o) { var b = U.chip(o[1], wyb === o[0], function () { if (pokaz) return; wyb = o[0]; ui(); }); p[0].appendChild(b); });
        p[0].appendChild(U.btn('Sprawdź →', function () { if (!wyb) { p[2].innerHTML = 'Najpierw wybierz hipotezę — dopiero potem doświadczenie.'; return; } pokaz = true; t = 0; ui(); }));
        p[0].appendChild(U.btn('Następne doświadczenie', nast));
        rys();
      }
      function rys() {
        var s = SC[i], kol = s[4], ps = s[5], bub = '', os = '';
        if (pokaz) { if (s[1] === 'gaz') for (var q = 0; q < 14; q++) { var f = ((t * .5 + q / 14) % 1); bub += '<circle cx="' + (170 + (q * 37) % 100) + '" cy="' + (190 - f * 120) + '" r="' + (2 + (q % 3)) + '" fill="#fff" stroke="#64748b" stroke-width=".8"/>'; } if (s[1] === 'osad') os = '<path d="M130 188 Q220 ' + (188 - 22 * Math.min(1, t / 3)) + ' 310 188 Z" fill="' + ps + '" stroke="#94a3b8"/>'; if (s[1] === 'osad') kol = mixc(kol, '#ffffff', .35); }
        p[1].innerHTML = '<svg viewBox="0 0 440 230" width="100%" style="max-width:440px;display:block;margin:auto" role="img" aria-label="Zlewka: ' + s[0] + '"><path d="M110 30 V190 Q110 205 125 205 H315 Q330 205 330 190 V30" fill="' + kol + '" fill-opacity=".7" stroke="#64748b" stroke-width="3"/><rect x="112" y="30" width="216" height="20" fill="var(--surface,#fff)"/>' + os + bub + '</svg>';
        if (pokaz) { var ok = wyb === s[1]; p[2].innerHTML = (ok ? '<b style="color:#16a34a">Hipoteza potwierdzona.</b> ' : '<b style="color:#dc2626">Hipoteza obalona</b> (oczekiwano: ' + OBS.filter(function (o) { return o[0] === wyb; })[0][1] + '). ') + s[3] + '<br><i>' + s[2] + '</i><br>Hipotezę formułuje się <b>przed</b> doświadczeniem; wynik ją wspiera albo obala.'; }
        else if (!p[2].innerHTML || p[2].innerHTML.indexOf('Najpierw') < 0) p[2].innerHTML = 'Wybierz przewidywanie i naciśnij „Sprawdź”.';
      }
      function mixc(a, b, k) { return a; }
      ui(); U.anim(host, function (dt) { t += dt; if (pokaz) rys(); });
    }
  });

  /* ---------- mapa myśli ---------- */
  KLOCKI.def('mapa-mysli', {
    opis: 'Mapa myśli: centralne hasło i gałęzie; kliknięcie gałęzi odsłania jej pojęcia (do samodzielnego uzupełniania w pamięci przed odsłonięciem).',
    domyslne: {centrum: 'CHEMIA', galezie: 'skład:pierwiastki,wzory;budowa:atomy,wiązania,kształt;właściwości:fizyczne,chemiczne;przemiany:zjawisko fizyczne,reakcja chemiczna;poziomy opisu:makro,cząsteczkowy,symboliczny,ilościowy;metoda:obserwacja,hipoteza,doświadczenie,wniosek'},
    html: function (host, opc) {
      var U = KLOCKI.ui, p = box(host), G = String(opc.galezie).split(';').map(function (x) { var a = x.split(':'); return [a[0], (a[1] || '').split(',')]; }), otw = {};
      p[0].appendChild(U.btn('Pokaż wszystko', function () { G.forEach(function (g, i) { otw[i] = 1; }); rys(); })); p[0].appendChild(U.btn('Ukryj wszystko', function () { otw = {}; rys(); }));
      function rys() {
        var W = 560, H = 400, cx = 280, cy = 200, s = '<svg viewBox="0 0 560 400" width="100%" style="max-width:620px;display:block" role="img" aria-label="Mapa myśli: ' + opc.centrum + '">';
        G.forEach(function (g, i) {
          var a = i / G.length * 2 * Math.PI - Math.PI / 2, gx = cx + Math.cos(a) * 110, gy = cy + Math.sin(a) * 82;
          s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + gx.toFixed(1) + '" y2="' + gy.toFixed(1) + '" stroke="#94a3b8" stroke-width="2"/>';
          g[1].forEach(function (c, j) { var b = a + (j - (g[1].length - 1) / 2) * (g[1].length > 2 ? .4 : .55), rr = 215, x = cx + Math.cos(b) * rr, y = cy + Math.sin(b) * rr * .78, wd = Math.max(80, 7 * (otw[i] ? c.length : 1) + 22); s += '<line x1="' + gx.toFixed(1) + '" y1="' + gy.toFixed(1) + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="#cbd5e1"/><rect x="' + (x - wd / 2).toFixed(1) + '" y="' + (y - 11).toFixed(1) + '" width="' + wd + '" height="22" rx="11" fill="' + (otw[i] ? 'var(--accent-soft,#dbeafe)' : 'var(--surface,#fff)') + '" stroke="#94a3b8"/><text x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="middle" font-size="10.5" fill="currentColor">' + (otw[i] ? c : '?') + '</text>'; });
          s += '<g data-i="' + i + '" style="cursor:pointer"><rect x="' + (gx - 48).toFixed(1) + '" y="' + (gy - 14).toFixed(1) + '" width="96" height="28" rx="14" fill="' + (otw[i] ? '#0d6868' : '#475569') + '"/><text x="' + gx.toFixed(1) + '" y="' + (gy + 5).toFixed(1) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">' + g[0] + '</text></g>';
        });
        s += '<circle cx="280" cy="200" r="44" fill="#f59e0b" stroke="#92400e"/><text x="280" y="205" text-anchor="middle" font-size="14" font-weight="800" fill="#1c1917">' + opc.centrum + '</text>';
        p[1].innerHTML = s + '</svg>'; p[2].innerHTML = 'Kliknij gałąź, aby odsłonić jej pojęcia. Zanim klikniesz — spróbuj je wymienić z pamięci.';
        [].forEach.call(p[1].querySelectorAll('g[data-i]'), function (g) { g.addEventListener('click', function () { var i = +g.dataset.i; if (otw[i]) delete otw[i]; else otw[i] = 1; rys(); }); });
      }
      rys();
    }
  });

  /* ---------- cząsteczki 3D ---------- */
  var MOL = {
    'O₂': {a: [['O', -.6, 0, 0], ['O', .6, 0, 0]], b: [[0, 1, 2]], k: 'liniowa (2 atomy), wiązanie podwójne', ang: null},
    'O₃': {a: [['O', 0, 0, 0], ['O', -1.09, -.67, 0], ['O', 1.09, -.67, 0]], b: [[0, 1, 1], [0, 2, 1]], k: 'kątowa', ang: '117°'},
    'H₂O': {a: [['O', 0, 0, 0], ['H', -.76, -.59, 0], ['H', .76, -.59, 0]], b: [[0, 1, 1], [0, 2, 1]], k: 'kątowa (2 wolne pary na O)', ang: '104,5°'},
    'CO₂': {a: [['C', 0, 0, 0], ['O', -1.16, 0, 0], ['O', 1.16, 0, 0]], b: [[0, 1, 2], [0, 2, 2]], k: 'liniowa', ang: '180°'},
    'SO₂': {a: [['S', 0, 0, 0], ['O', -1.23, -.72, 0], ['O', 1.23, -.72, 0]], b: [[0, 1, 2], [0, 2, 1]], k: 'kątowa (1 wolna para na S)', ang: '119°'},
    'SO₃': {a: [['S', 0, 0, 0], ['O', 1.42, 0, 0], ['O', -.71, 1.23, 0], ['O', -.71, -1.23, 0]], b: [[0, 1, 2], [0, 2, 1], [0, 3, 1]], k: 'płaska trójkątna', ang: '120°'},
    'NH₃': {a: [['N', 0, .38, 0], ['H', .94, -.12, 0], ['H', -.47, -.12, .81], ['H', -.47, -.12, -.81]], b: [[0, 1, 1], [0, 2, 1], [0, 3, 1]], k: 'piramidalna (1 wolna para na N)', ang: '107°'},
    'CH₄': {a: [['C', 0, 0, 0], ['H', .63, .63, .63], ['H', -.63, -.63, .63], ['H', -.63, .63, -.63], ['H', .63, -.63, -.63]], b: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]], k: 'czworościenna (tetraedr)', ang: '109,5°'}
  };
  KLOCKI.def('czasteczki-3d', {
    opis: 'Obrotowy model kulkowy cząsteczki (przeciągnij, aby obrócić): O₂, O₃, H₂O, CO₂, SO₂, SO₃, NH₃, CH₄ z kątami między wiązaniami.',
    domyslne: {mol: 'O₂,O₃,H₂O,CO₂'},
    html: function (host, opc) {
      var U = KLOCKI.ui, p = box(host), lista = String(opc.mol).split(',').filter(function (x) { return MOL[x]; }), k = 0, ay = .6, ax = .35, drag = null, auto = true;
      var cv = document.createElement('canvas'); cv.width = 520; cv.height = 300; cv.style.cssText = 'width:100%;max-width:520px;display:block;margin:auto;touch-action:none;cursor:grab'; cv.setAttribute('role', 'img'); p[1].appendChild(cv);
      lista.forEach(function (n, i) { p[0].appendChild(U.btn(n, function () { k = i; rys(); })); });
      p[0].appendChild(U.btn('Obrót: włącz/wyłącz', function () { auto = !auto; }));
      cv.addEventListener('pointerdown', function (e) { drag = [e.clientX, e.clientY]; auto = false; cv.setPointerCapture(e.pointerId); });
      cv.addEventListener('pointermove', function (e) { if (!drag) return; ay += (e.clientX - drag[0]) * .01; ax += (e.clientY - drag[1]) * .01; drag = [e.clientX, e.clientY]; rys(); });
      cv.addEventListener('pointerup', function () { drag = null; });
      function rys() {
        [].forEach.call(p[0].children, function (b, i) { if (i < lista.length) U.zaznacz(b, i === k); });
        var m = MOL[lista[k]], c = cv.getContext('2d'), W = cv.width, H = cv.height, sc = 105, cy_ = Math.cos(ay), sy = Math.sin(ay), cx_ = Math.cos(ax), sx = Math.sin(ax);
        c.clearRect(0, 0, W, H);
        var P = m.a.map(function (a) { var x = a[1], y = a[2], z = a[3], x1 = x * cy_ + z * sy, z1 = -x * sy + z * cy_, y1 = y * cx_ - z1 * sx, z2 = y * sx + z1 * cx_; return {s: a[0], x: W / 2 + x1 * sc, y: H / 2 - y1 * sc, z: z2}; });
        var ob = [];
        m.b.forEach(function (b) { ob.push({z: (P[b[0]].z + P[b[1]].z) / 2 - .01, f: function () { var A = P[b[0]], B = P[b[1]], dx = B.x - A.x, dy = B.y - A.y, L = Math.hypot(dx, dy) || 1, nx = -dy / L * 4, ny = dx / L * 4; c.strokeStyle = '#475569'; c.lineWidth = 6; for (var q = 0; q < b[2]; q++) { var o = (q - (b[2] - 1) / 2) * 1.6; c.beginPath(); c.moveTo(A.x + nx * o, A.y + ny * o); c.lineTo(B.x + nx * o, B.y + ny * o); c.lineWidth = b[2] > 1 ? 4 : 6; c.stroke(); } }}); });
        P.forEach(function (a) { ob.push({z: a.z, f: function () { var r = (CPK[a.s] || [0, 12])[1] * 1.5 * (1 + a.z * .05), g = c.createRadialGradient(a.x - r * .3, a.y - r * .3, r * .1, a.x, a.y, r); g.addColorStop(0, '#ffffff'); g.addColorStop(.35, CPK[a.s][0]); g.addColorStop(1, shade(CPK[a.s][0])); c.fillStyle = g; c.beginPath(); c.arc(a.x, a.y, r, 0, 6.2832); c.fill(); c.strokeStyle = '#334155'; c.lineWidth = 1; c.stroke(); c.fillStyle = a.s === 'H' ? '#0f172a' : '#fff'; c.font = '700 ' + (r > 11 ? 12 : 10) + 'px sans-serif'; c.textAlign = 'center'; c.fillText(a.s, a.x, a.y + 4); }}); });
        ob.sort(function (u, v) { return u.z - v.z; }).forEach(function (o) { o.f(); });
        cv.setAttribute('aria-label', 'Model 3D cząsteczki ' + lista[k]);
        p[2].innerHTML = '<b>' + lista[k] + '</b> — ' + m.k + (m.ang ? ', kąt między wiązaniami ' + m.ang : '') + '. Liczba rodzajów atomów: <b>' + (new Set(m.a.map(function (a) { return a[0]; }))).size + '</b>; liczba atomów: <b>' + m.a.length + '</b>. Przeciągnij model, aby go obrócić.';
      }
      function shade(h) { var n = parseInt(h.slice(1), 16), r = (n >> 16 & 255) * .6, g = (n >> 8 & 255) * .6, b = (n & 255) * .6; return 'rgb(' + r + ',' + g + ',' + b + ')'; }
      rys(); U.anim(host, function (dt) { if (auto) { ay += dt * .8; rys(); } });
    }
  });

  /* ---------- destylacja ---------- */
  KLOCKI.def('destylacja', {
    opis: 'Zestaw do destylacji: kolba z cieczą ogrzewana palnikiem, chłodnica Liebiga (para się skrapla) i odbieralnik; destylat zbiera się w odbieralniku.',
    domyslne: {},
    html: function (host) {
      var U = KLOCKI.ui, p = box(host), on = false, t = 0, ile = 0, temp = 20;
      var b = U.btn('Włącz palnik', function () { on = !on; b.innerHTML = on ? 'Wyłącz palnik' : 'Włącz palnik'; }); p[0].append(b, U.btn('Od nowa', function () { ile = 0; temp = 20; on = false; b.innerHTML = 'Włącz palnik'; }));
      function rys() {
        var p2 = ile, par = temp > 76, kr = '';
        if (par) for (var q = 0; q < 5; q++) { var f = ((t * .5 + q / 5) % 1); kr += '<circle cx="' + (190 + f * 140) + '" cy="84" r="3" fill="#bae6fd"/>'; }
        if (par) for (var d = 0; d < 3; d++) { var g = ((t * .9 + d / 3) % 1); kr += '<circle cx="472" cy="' + (176 + g * 60) + '" r="3" fill="#38bdf8"/>'; }
        p[1].innerHTML = '<svg viewBox="0 0 560 280" width="100%" style="max-width:620px;display:block" role="img" aria-label="Zestaw do destylacji">' +
          '<path d="M150 110 L120 200 Q112 230 140 230 H210 Q238 230 230 200 L200 110 Z" fill="#fde68a" fill-opacity=".55" stroke="#64748b" stroke-width="2.5"/><rect x="166" y="74" width="18" height="40" fill="none" stroke="#64748b" stroke-width="2.5"/>' +
          '<path d="M184 84 L330 84 L470 170" fill="none" stroke="#64748b" stroke-width="2.5"/><rect x="322" y="105" width="160" height="44" rx="6" fill="#bae6fd" fill-opacity=".4" stroke="#64748b" stroke-width="2" transform="rotate(31.6 402 127)"/>' +
          '<path d="M450 205 H500 V262 H450 Z" fill="#e0f2fe" fill-opacity=".6" stroke="#64748b" stroke-width="2.5"/><rect x="450" y="' + (262 - Math.min(55, p2 * 55)) + '" width="50" height="' + Math.min(55, p2 * 55) + '" fill="#38bdf8" fill-opacity=".7"/>' +
          '<text x="365" y="40" text-anchor="middle" font-size="12" fill="currentColor">chłodnica (woda chłodząca)</text><text x="175" y="258" text-anchor="middle" font-size="12" fill="currentColor">kolba z mieszaniną</text><text x="475" y="276" text-anchor="middle" font-size="12" fill="currentColor">odbieralnik</text>' +
          '<path d="M165 244 q10 -22 20 0 q-10 -4 -20 0" fill="' + (on ? '#f97316' : '#cbd5e1') + '"/><rect x="140" y="244" width="70" height="8" rx="2" fill="#475569"/>' + kr +
          '<text x="30" y="40" font-size="13" fill="currentColor">termometr: <tspan font-weight="700">' + Math.round(temp) + ' °C</tspan></text></svg>';
        p[2].innerHTML = temp < 76 ? 'Mieszanina ogrzewa się. Składnik o <b>niższej temperaturze wrzenia</b> (np. etanol ≈ 78 °C) zacznie wrzeć pierwszy.' : 'Para składnika o niższej t. wrzenia przechodzi do chłodnicy, tam się <b>skrapla</b> i spływa do odbieralnika jako destylat. Destylacja = odparowanie + skroplenie.';
      }
      rys(); U.anim(host, function (dt) { t += dt; if (on) { temp = Math.min(82, temp + dt * 9); if (temp > 76) ile = Math.min(1, ile + dt * .06); } else temp = Math.max(20, temp - dt * 4); rys(); });
    }
  });
})();
