/* KLOCKI fizyki — elektrostatyka: elektryzowanie (tarcie + wahadełko), przewodnik-izolator, kule-ladunek (dotyk, uziemienie, n = q/e),
   elektroskop (dotyk, indukcja w 5 krokach), prawo-coulomba (F(r), ośrodek), linie-pola (dwa ładunki). Stałe: k = 8,99·10⁹ N·m²/C², e = 1,602·10⁻¹⁹ C.
   Wymaga ui_klocki.js. */
(function () {
  var K = 8.99e9, E = 1.602e-19, SUPD = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  function pl(x, d) { return (+x.toPrecision(d || 3)).toString().replace('.', ','); }
  function sci(x) { if (!x) return '0'; var e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e); return pl(m, 3) + ' · 10' + String(e).replace(/[-\d]/g, function (c) { return c === '-' ? '⁻' : SUPD[c]; }); }
  function box(host) { host.style.display = 'block'; var a = document.createElement('div'), b = document.createElement('div'), c = document.createElement('div'); b.style.cssText = 'margin:4px 0'; c.style.cssText = 'font-size:14px;margin-top:6px;line-height:1.5'; host.append(a, b, c); return [a, b, c]; }
  function ch(x, y, q, r) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 9) + '" fill="' + (q > 0 ? '#ef4444' : q < 0 ? '#3b82f6' : '#cbd5e1') + '" stroke="#334155"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" font-size="12" font-weight="700" fill="' + (q ? '#fff' : '#334155') + '">' + (q > 0 ? '+' : q < 0 ? '−' : '0') + '</text>'; }

  /* ---------- elektryzowanie: szereg tryboelektryczny + wahadełko ---------- */
  var TR = ['skóra ludzka', 'szkło', 'futro', 'wełna', 'jedwab', 'papier', 'bawełna', 'drewno', 'bursztyn', 'guma', 'poliester', 'PVC', 'teflon'];
  KLOCKI.def('elektryzowanie', {
    opis: 'Pocieranie dwóch materiałów z szeregu tryboelektrycznego: elektrony przechodzą z materiału wyższego w szeregu do niższego; naładowany pręt przyciąga obojętne wahadełko, a po dotknięciu je odpycha.',
    domyslne: {a: 'szkło', b: 'jedwab'},
    html: function (host, opc) {
      var U = KLOCKI.ui, p = box(host), A = TR.indexOf(opc.a) >= 0 ? TR.indexOf(opc.a) : 1, B = TR.indexOf(opc.b) >= 0 ? TR.indexOf(opc.b) : 4, st = 0, tr = 0, kula = 0;   // st: 0 przed, 1 po tarciu, 2 po dotknięciu
      var sa = document.createElement('select'), sb = document.createElement('select'); [sa, sb].forEach(function (s) { s.style.cssText = 'font:inherit;margin:0 6px'; TR.forEach(function (n, i) { s.add(new Option(n, i)); }); });
      sa.value = A; sb.value = B; p[0].append('Ciało 1: ', sa, ' Ciało 2: ', sb, U.btn('Pocieraj', function () { if (A === B) return; st = 1; tr = 0; kula = 0; rys(); }), U.btn('Wahadełko: zbliż pręt', function () { st = 2; rys(); }), U.btn('Dotknij kulki', function () { st = 3; rys(); }), U.btn('Od nowa', function () { st = 0; rys(); }));
      sa.onchange = function () { A = +sa.value; st = 0; rys(); }; sb.onchange = function () { B = +sb.value; st = 0; rys(); };
      var t = 0;
      function rys() {
        var plus = A < B ? A : B, minus = A < B ? B : A, nap = A === B ? null : TR[plus];
        var qa = st === 0 || A === B ? 0 : (A < B ? 1 : -1), qb = -qa, el = '';
        if (st === 1) for (var i = 0; i < 6; i++) { var f = ((t * .6 + i / 6) % 1), x = (A < B ? 150 + f * 140 : 290 - f * 140); el += '<circle cx="' + x + '" cy="' + (118 - Math.sin(f * 3.14) * 22) + '" r="4" fill="#2563eb"/>'; }
        var rod = qa;   // pręt = ciało 1 (z którego bierzemy znak)
        var kx = st === 2 ? 470 - 40 : st === 3 ? 470 - 8 : 470, kq = st === 3 ? rod : 0, kdx = st === 2 ? -28 : st === 3 ? 26 : 0;
        p[1].innerHTML = '<svg viewBox="0 0 560 250" width="100%" style="max-width:620px;display:block" role="img" aria-label="Elektryzowanie przez tarcie i wahadełko">' +
          '<rect x="80" y="90" width="80" height="55" rx="8" fill="#f1f5f9" stroke="#334155"/><text x="120" y="82" text-anchor="middle" font-size="12" fill="currentColor">' + TR[A] + '</text>' + ch(120, 118, qa, 14) +
          '<rect x="280" y="90" width="80" height="55" rx="8" fill="#f1f5f9" stroke="#334155"/><text x="320" y="82" text-anchor="middle" font-size="12" fill="currentColor">' + TR[B] + '</text>' + ch(320, 118, qb, 14) + el +
          '<line x1="470" y1="20" x2="470" y2="30" stroke="#334155" stroke-width="2"/><line x1="470" y1="30" x2="' + (470 + kdx) + '" y2="130" stroke="#64748b" stroke-width="1.5"/>' + ch(470 + kdx, 140, kq, 11) +
          (st >= 2 ? '<rect x="' + (400 + (st === 3 ? 22 : 0) - 62) + '" y="136" width="62" height="10" rx="5" fill="' + (rod > 0 ? '#ef4444' : '#3b82f6') + '"/><text x="' + (400 + (st === 3 ? 22 : 0) - 31) + '" y="165" text-anchor="middle" font-size="11" fill="currentColor">pręt (' + TR[A] + ')</text>' : '') + '</svg>';
        p[2].innerHTML = A === B ? 'Wybierz dwa różne materiały.' : st === 0 ? 'Oba ciała obojętne. Wyżej w szeregu: <b>' + TR[plus] + '</b> (łatwiej oddaje elektrony), niżej: <b>' + TR[minus] + '</b>. Naciśnij „Pocieraj”.' :
          st === 1 ? '<b>' + TR[plus] + '</b> oddało elektrony → naładowało się <b>dodatnio</b>; <b>' + TR[minus] + '</b> je przyjęło → <b>ujemnie</b>. Przenoszą się wyłącznie elektrony; suma ładunków nadal wynosi zero.' :
          st === 2 ? 'Naładowany pręt przyciąga <b>obojętną</b> kulkę: w kulce ładunki się rozsuwają (indukcja), a bliżej pręta jest ładunek przeciwnego znaku — przyciąganie wygrywa.' :
          'Po dotknięciu kulka dostała ładunek <b>tego samego znaku</b> co pręt, więc teraz się odpycha. Odpychanie dowodzi jednakowego znaku ładunków.';
      }
      KLOCKI.ui.anim(host, function (dt) { t += dt; if (st === 1) rys(); }); rys();
    }
  });

  /* ---------- przewodnik czy izolator ---------- */
  var MAT = [['miedź (przewodnik)', 1, 'ładunek rozpływa się po całym pręcie w ułamku sekundy'], ['stal (przewodnik)', .8, 'ładunek rozpływa się szybko'], ['woda z solą', .35, 'rozpływ wolniejszy — jony poruszają się wolniej niż elektrony'], ['drewno (izolator)', .03, 'ładunek prawie nie wędruje'], ['szkło (izolator)', 0, 'ładunek zostaje w miejscu dotyku'], ['PVC (izolator)', 0, 'ładunek zostaje w miejscu dotyku']];
  KLOCKI.def('przewodnik-izolator', {
    opis: 'Pręt z naładowanym końcem: w przewodniku ładunek rozpływa się po całej długości, w izolatorze pozostaje w miejscu dotyku.',
    domyslne: {},
    html: function (host) {
      var U = KLOCKI.ui, p = box(host), k = 0, t = 0;
      MAT.forEach(function (m, i) { p[0].appendChild(U.btn(m[0], function () { k = i; t = 0; })); });
      var h = U.anim(host, function (dt) { t = Math.min(1, t + dt * .35); rys(); });
      function rys() {
        var m = MAT[k], sp = 1 - Math.pow(1 - t, 3), s = '';
        [].forEach.call(p[0].children, function (b, i) { U.zaznacz(b, i === k); });
        for (var i = 0; i < 14; i++) { var x0 = 60 + i * 30, d = i / 13, kon = d < .12 ? 1 : 0, zasieg = m[1] * sp, ob = Math.max(0, 1 - d / Math.max(.12, zasieg + .12)); var q = d < .12 + zasieg * .88 ? Math.max(0, 1.05 - d / (.12 + zasieg * .9 + .001)) * (m[1] > 0 ? 1 : (d < .12 ? 1 : 0)) : 0; s += '<rect x="' + x0 + '" y="70" width="30" height="34" fill="' + (m[1] > .3 ? '#fcd9a8' : '#e2e8f0') + '" stroke="#94a3b8"/><circle cx="' + (x0 + 15) + '" cy="87" r="' + (3 + 6 * Math.min(1, q)) + '" fill="#3b82f6" fill-opacity="' + (.15 + .8 * Math.min(1, q)) + '"/>'; }
        p[1].innerHTML = '<svg viewBox="0 0 560 150" width="100%" style="max-width:620px;display:block" role="img" aria-label="Rozpływ ładunku w pręcie: ' + m[0] + '"><text x="60" y="50" font-size="12" fill="currentColor">naładowany koniec (tu dotykamy)</text>' + s + '<text x="60" y="130" font-size="13" fill="currentColor">' + m[0] + '</text></svg>';
        p[2].innerHTML = '<b>' + m[0] + ':</b> ' + m[2] + '. Przewodnik ma swobodne nośniki ładunku, izolator ich nie ma.';
      }
      rys();
    }
  });

  /* ---------- kule: dotyk, uziemienie, n = q/e ---------- */
  KLOCKI.def('kule-ladunek', {
    opis: 'Dwie przewodzące kule z ładunkami: po zetknięciu ładunek dzieli się proporcjonalnie do promieni (po równo dla jednakowych kul); uziemienie odprowadza ładunek; liczba elektronów n = q/e.',
    domyslne: {q1: 8, q2: -2, r1: 1, r2: 1},
    html: function (host, opc) {
      var U = KLOCKI.ui, p = box(host), S = {q: [+opc.q1, +opc.q2], r: [+opc.r1, +opc.r2]}, hist = [S.q.slice()], uz = [false, false];
      p[0].append(U.btn('Zetknij kule', function () { var s = S.q[0] + S.q[1], R = S.r[0] + S.r[1]; S.q = [s * S.r[0] / R, s * S.r[1] / R]; hist.push(S.q.slice()); rys(); }),
        U.btn('Uziemij kulę 1', function () { S.q[0] = 0; hist.push(S.q.slice()); rys(); }), U.btn('Uziemij kulę 2', function () { S.q[1] = 0; hist.push(S.q.slice()); rys(); }),
        U.btn('Od nowa', function () { S.q = [+opc.q1, +opc.q2]; hist = [S.q.slice()]; rys(); }));
      p[0].appendChild(U.suwak('Promień kuli 2', 1, 3, .5, S.r[1], function (v, o) { S.r[1] = v; o.textContent = pl(v, 2) + '× kuli 1'; if (hist) rys(); }));
      function rys() {
        var sum = S.q[0] + S.q[1], s = '<svg viewBox="0 0 560 150" width="100%" style="max-width:620px;display:block" role="img" aria-label="Dwie kule z ładunkami">';
        [0, 1].forEach(function (i) { var r = 28 * S.r[i], cx = 140 + i * 280; s += '<circle cx="' + cx + '" cy="75" r="' + r + '" fill="' + (S.q[i] > 0 ? '#fecaca' : S.q[i] < 0 ? '#bfdbfe' : '#e2e8f0') + '" stroke="#334155" stroke-width="2"/><text x="' + cx + '" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">' + pl(S.q[i], 3) + ' nC</text><text x="' + cx + '" y="140" text-anchor="middle" font-size="12" fill="currentColor">kula ' + (i + 1) + '</text>'; });
        p[1].innerHTML = s + '</svg>';
        var n = function (q) { return sci(Math.abs(q) * 1e-9 / E); };
        p[2].innerHTML = '<b>Suma ładunków:</b> ' + pl(S.q[0], 3) + ' + ' + pl(S.q[1], 3) + ' = <b>' + pl(sum, 3) + ' nC</b>' + (hist.length > 1 ? ' (przed: ' + pl(hist[hist.length - 2][0] + hist[hist.length - 2][1], 3) + ' nC)' : '') + '.<br>' + [0, 1].map(function (i) { return 'Kula ' + (i + 1) + ': ' + (S.q[i] ? 'n = |q|/e ≈ <b>' + n(S.q[i]) + '</b> elektronów ' + (S.q[i] < 0 ? 'nadmiarowych' : 'brakujących') : 'obojętna'); }).join('<br>') +
          '<br><span style="opacity:.8">Dotyk: ładunek dzieli się proporcjonalnie do promieni (jednakowe kule — po równo). Uziemienie odprowadza ładunek do Ziemi — wtedy suma się zmienia, bo Ziemia przejmuje różnicę.</span>';
      }
      rys();
    }
  });

  /* ---------- elektroskop: dotyk i indukcja ---------- */
  var KR = [
    ['Elektroskop jest obojętny, listki zwisają. Pręt naładowany ujemnie jest daleko.', 0, 0, 0, 0, false],
    ['Zbliżasz pręt (−) do gałki, <b>bez dotyku</b>. Elektrony w elektroskopie uciekają od pręta: gałka robi się dodatnia, listki ujemne — listki rozchylają się. Ładunek całkowity nadal 0.', 3, -3, 14, 0, true],
    ['Dotykasz gałki palcem (uziemienie): elektrony z listków odpływają do Ziemi. Listki opadają, a elektroskop zostaje z <b>nadmiarem ładunku dodatniego</b> (przy gałce, przyciąganym przez pręt).', 3, 0, 0, 0, true],
    ['Zabierasz palec — uziemienie usunięte. Ładunek dodatni <b>zostaje</b> w elektroskopie; pręt wciąż blisko.', 3, 0, 0, 0, true],
    ['Oddalasz pręt: dodatni ładunek rozkłada się na gałkę i listki, listki się odpychają i rozchylają. Elektroskop ma ładunek <b>przeciwny</b> do pręta — naładowany przez indukcję, bez dotyku.', 1.5, 1.5, 20, 0, false]
  ];
  KLOCKI.def('elektroskop', {
    opis: 'Elektroskop z listkami: naładowanie przez dotyk i przez indukcję w pięciu krokach; kąt listków zależy od wielkości ładunku, nie od jego znaku.',
    domyslne: {tryb: 'indukcja'},
    html: function (host, opc) {
      var U = KLOCKI.ui, p = box(host), tryb = opc.tryb === 'dotyk' ? 'dotyk' : 'indukcja', krok = 0, kdot = 0;
      var bI = U.chip('indukcja (5 kroków)', tryb === 'indukcja', function () { tryb = 'indukcja'; krok = 0; rys(); }), bD = U.chip('dotyk', tryb === 'dotyk', function () { tryb = 'dotyk'; kdot = 0; rys(); });
      var bn = U.btn('Dalej →', function () { if (tryb === 'indukcja') krok = Math.min(4, krok + 1); else kdot = Math.min(2, kdot + 1); rys(); }), bp = U.btn('← Wstecz', function () { if (tryb === 'indukcja') krok = Math.max(0, krok - 1); else kdot = Math.max(0, kdot - 1); rys(); });
      p[0].append(bI, bD, bp, bn);
      function rys() {
        U.zaznacz(bI, tryb === 'indukcja'); U.zaznacz(bD, tryb === 'dotyk');
        var gal, lis, ang, rod, tekst;
        if (tryb === 'indukcja') { var k = KR[krok]; gal = k[1]; lis = k[2]; ang = k[3] || (krok === 1 ? 14 : krok === 4 ? 20 : 0); rod = k[5]; tekst = '<b>Krok ' + (krok + 1) + ' / 5.</b> ' + k[0]; }
        else { var T = [['Elektroskop obojętny; pręt ujemny w dłoni.', 0, 0, 0, false], ['Dotykasz gałki prętem (−): elektrony przechodzą na elektroskop. Ładunek całkowity ≠ 0, listki odpychają się jednoimiennym ładunkiem ujemnym.', -1.5, -1.5, 20, true], ['Pręt zabrany — elektroskop zostaje naładowany <b>ujemnie</b> (tym samym znakiem co pręt). Elektroskop pokazuje <b>że</b> jest ładunek, ale nie jego znak.', -1.5, -1.5, 20, false]][kdot]; gal = T[1]; lis = T[2]; ang = T[3]; rod = T[4]; tekst = '<b>Krok ' + (kdot + 1) + ' / 3.</b> ' + T[0]; }
        var th = ang * Math.PI / 180, lx = Math.sin(th) * 70, ly = Math.cos(th) * 70;
        function z(q, x, y) { var n = Math.round(Math.abs(q)), s = ''; for (var i = 0; i < n; i++) s += '<text x="' + (x + (i - (n - 1) / 2) * 12) + '" y="' + y + '" text-anchor="middle" font-size="14" font-weight="700" fill="' + (q > 0 ? '#ef4444' : '#2563eb') + '">' + (q > 0 ? '+' : '−') + '</text>'; return s; }
        p[1].innerHTML = '<svg viewBox="0 0 560 280" width="100%" style="max-width:560px;display:block" role="img" aria-label="Elektroskop z listkami">' +
          '<circle cx="280" cy="60" r="26" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><line x1="280" y1="86" x2="280" y2="130" stroke="#334155" stroke-width="3"/>' +
          '<rect x="215" y="120" width="130" height="130" rx="12" fill="#bae6fd" fill-opacity=".3" stroke="#64748b" stroke-width="2"/>' +
          '<line x1="280" y1="130" x2="' + (280 - lx) + '" y2="' + (130 + ly) + '" stroke="#b45309" stroke-width="4"/><line x1="280" y1="130" x2="' + (280 + lx) + '" y2="' + (130 + ly) + '" stroke="#b45309" stroke-width="4"/>' +
          z(gal, 280, 66) + z(lis, 280, 186) +
          (rod && tryb === 'indukcja' && krok >= 1 && krok <= 3 ? '<rect x="70" y="42" width="120" height="16" rx="8" fill="#3b82f6"/><text x="130" y="35" text-anchor="middle" font-size="12" fill="currentColor">pręt (−)</text>' : '') +
          (rod && tryb === 'dotyk' && kdot === 1 ? '<rect x="130" y="52" width="120" height="16" rx="8" fill="#3b82f6"/><text x="190" y="45" text-anchor="middle" font-size="12" fill="currentColor">pręt (−)</text>' : '') +
          (tryb === 'indukcja' && krok === 2 ? '<text x="352" y="88" font-size="13" fill="currentColor">palec → Ziemia</text><path d="M335 78 q30 -10 20 10" fill="none" stroke="currentColor"/>' : '') + '</svg>';
        p[2].innerHTML = tekst;
      }
      rys();
    }
  });

  /* ---------- prawo Coulomba ---------- */
  var OSR = [['próżnia', 1], ['powietrze', 1.0006], ['olej', 2.5], ['szkło', 6], ['woda', 80]];
  KLOCKI.def('prawo-coulomba', {
    opis: 'Siła Coulomba F = k·q₁·q₂/(εr·r²): suwaki zmieniają ładunki, odległość i ośrodek; wykres F(r) z zaznaczonym punktem.',
    domyslne: {q1: 2, q2: 3, r: 10},
    html: function (host, opc) {
      var U = KLOCKI.ui, p = box(host), q1 = +opc.q1, q2 = +opc.q2, r = +opc.r, eps = 1, wy = document.createElement('div');
      var set = function () { rys(); };
      p[0].append(U.suwak('Ładunek q₁ [µC]', -10, 10, .5, q1, function (v, o) { q1 = v; o.textContent = pl(v, 2) + ' µC'; if (p[1].innerHTML) set(); }),
        U.suwak('Ładunek q₂ [µC]', -10, 10, .5, q2, function (v, o) { q2 = v; o.textContent = pl(v, 2) + ' µC'; if (p[1].innerHTML) set(); }),
        U.suwak('Odległość r [cm]', 3, 30, 1, r, function (v, o) { r = v; o.textContent = v + ' cm'; if (p[1].innerHTML) set(); }));
      var os = document.createElement('div'); os.style.cssText = 'margin:4px 0'; OSR.forEach(function (o, i) { os.appendChild(U.btn(o[0] + ' (εr=' + pl(o[1], 4) + ')', function () { eps = o[1]; [].forEach.call(os.children, function (b, j) { U.zaznacz(b, j === i); }); rys(); })); }); p[0].appendChild(os); U.zaznacz(os.children[0], true);
      function F(R) { return K * Math.abs(q1 * 1e-6 * q2 * 1e-6) / (eps * Math.pow(R / 100, 2)); }
      function rys() {
        var f = F(r), W = 560, H = 230, L = 56, T = 14, B = 34, Fm = Math.max(F(3), 1e-9);
        var X = function (x) { return L + (x - 3) / 27 * (W - L - 20); }, Y = function (v) { return T + (1 - Math.min(1, v / Fm)) * (H - T - B); };
        var pts = []; for (var R = 3; R <= 30; R += .5) pts.push(X(R).toFixed(1) + ',' + Y(F(R)).toFixed(1));
        var znak = q1 * q2 > 0 ? 'odpychanie' : q1 * q2 < 0 ? 'przyciąganie' : 'brak siły';
        p[1].innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="max-width:620px;display:block" role="img" aria-label="Wykres siły Coulomba w funkcji odległości"><line x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - 20) + '" y2="' + (H - B) + '" stroke="currentColor"/><line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) + '" stroke="currentColor"/>' +
          '<polyline points="' + pts.join(' ') + '" fill="none" stroke="#2563eb" stroke-width="3"/><circle cx="' + X(r) + '" cy="' + Y(f) + '" r="7" fill="#f59e0b" stroke="#92400e"/><text x="' + (W - 120) + '" y="' + (H - 8) + '" font-size="12" fill="currentColor">odległość r [cm] →</text><text x="8" y="' + (T + 8) + '" font-size="12" fill="currentColor">F [N] (skala liniowa)</text></svg>';
        p[2].innerHTML = 'F = k·|q₁·q₂| / (εr·r²) = ' + sci(K) + ' · ' + sci(Math.abs(q1 * q2) * 1e-12) + ' / (' + pl(eps, 4) + ' · (' + pl(r / 100, 3) + ')²) = <b>' + sci(f) + ' N</b> — ' + znak + '.<br>Podwojenie r zmniejsza F czterokrotnie; większy ośrodek εr osłabia oddziaływanie.';
      }
      rys();
    }
  });

  /* ---------- linie pola dwóch ładunków ---------- */
  KLOCKI.def('linie-pola', {
    opis: 'Linie pola dwóch ładunków: wychodzą z ładunku dodatniego i wchodzą do ujemnego; gęstość linii pokazuje siłę pola. Znaki ładunków można zmieniać.',
    domyslne: {q1: 1, q2: -1},
    html: function (host, opc) {
      var U = KLOCKI.ui, p = box(host), q = [+opc.q1 || 1, +opc.q2 || -1];
      var b1 = U.btn('', function () { q[0] = -q[0]; rys(); }), b2 = U.btn('', function () { q[1] = -q[1]; rys(); }); p[0].append(b1, b2);
      var W = 560, H = 260, P = [[170, 130], [390, 130]];
      function E(x, y) { var ex = 0, ey = 0; for (var i = 0; i < 2; i++) { var dx = x - P[i][0], dy = y - P[i][1], d2 = dx * dx + dy * dy + 1, d = Math.sqrt(d2); ex += q[i] * dx / (d2 * d); ey += q[i] * dy / (d2 * d); } return [ex, ey]; }
      function rys() {
        b1.textContent = 'Ładunek 1: ' + (q[0] > 0 ? '+' : '−') + ' (zmień)'; b2.textContent = 'Ładunek 2: ' + (q[1] > 0 ? '+' : '−') + ' (zmień)';
        var s = '', sgn = q[0] > 0 || q[1] > 0 ? 1 : -1;
        for (var i = 0; i < 2; i++) if (q[i] * sgn > 0) for (var a = 0; a < 14; a++) {
          var an = a / 14 * 2 * Math.PI, x = P[i][0] + 12 * Math.cos(an), y = P[i][1] + 12 * Math.sin(an), pts = [x.toFixed(1) + ',' + y.toFixed(1)];
          for (var n = 0; n < 500; n++) { var e = E(x, y), m = Math.hypot(e[0], e[1]) || 1; x += sgn * 4 * e[0] / m; y += sgn * 4 * e[1] / m; pts.push(x.toFixed(1) + ',' + y.toFixed(1)); if (x < 0 || x > W || y < 0 || y > H) break; if (P.some(function (c, j) { return j !== i && q[j] * sgn < 0 && Math.hypot(x - c[0], y - c[1]) < 12; })) break; }
          s += '<polyline points="' + pts.join(' ') + '" fill="none" stroke="#64748b" stroke-width="1.4"/>';
          var k = pts[Math.min(pts.length - 1, 40)].split(','), k2 = pts[Math.min(pts.length - 1, 42)].split(','); s += '<circle cx="' + k[0] + '" cy="' + k[1] + '" r="2.4" fill="#0f172a"/>';
        }
        p[1].innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="max-width:620px;display:block" role="img" aria-label="Linie pola dwóch ładunków">' + s + ch(P[0][0], P[0][1], q[0], 12) + ch(P[1][0], P[1][1], q[1], 12) + '</svg>';
        p[2].innerHTML = q[0] * q[1] < 0 ? 'Ładunki <b>różnoimienne</b>: linie wychodzą z dodatniego i wchodzą do ujemnego — ładunki się przyciągają.' : 'Ładunki <b>jednoimienne</b>: linie odpychają się i nie łączą ładunków — ładunki się odpychają. ' + (q[0] > 0 ? 'Linie rozchodzą się od obu ładunków.' : 'Linie wchodzą do obu ładunków.');
      }
      rys();
    }
  });
})();
