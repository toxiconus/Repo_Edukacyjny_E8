/* KLOCEK: zbieranie-gazu — jak zbieramy gaz: wylotem do góry, wylotem do dołu albo nad wodą.
   Animowana scena: kolba z reakcją → rurka → naczynie. Chipy wybierają gaz (H₂, O₂, CO₂, NH₃, HCl) i metodę; pod sceną werdykt
   z gęstością względną d = M / 29 i rozpuszczalnością. Zły wybór pokazuje, jak gaz ucieka albo się rozpuszcza.
   Opcje: gaz (H2), metoda (auto = pierwsza poprawna), gazy = "H2,O2,CO2,NH3,HCl" (które chipy pokazać).
   Gazy są bezbarwne — na rysunku zaznaczone kropkami (powietrze: szare). Animacja startuje, gdy figura jest widoczna; prefers-reduced-motion: stan końcowy. */
(function () {
  var GAZY = {
    H2:  {n: 'H₂',  M: 2,    roz: 'slabo',  r: 'Zn + 2 HCl → ZnCl₂ + H₂↑ (cynk w kwasie solnym)'},
    O2:  {n: 'O₂',  M: 32,   roz: 'slabo',  r: '2 H₂O₂ → 2 H₂O + O₂↑ (katalizator MnO₂)'},
    CO2: {n: 'CO₂', M: 44,   roz: 'czesc',  r: 'CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑ (marmur w kwasie)'},
    NH3: {n: 'NH₃', M: 17,   roz: 'bardzo', r: '2 NH₄Cl + Ca(OH)₂ → CaCl₂ + 2 NH₃↑ + 2 H₂O (ogrzewanie)'},
    HCl: {n: 'HCl', M: 36.5, roz: 'bardzo', r: 'NaCl + H₂SO₄ → NaHSO₄ + HCl↑ (ogrzewanie, dygestorium)'}
  };
  var METODY = {gora: 'wylotem do góry', dol: 'wylotem do dołu', woda: 'nad wodą'};
  var DOWOD = 29;
  function fm(x) { return String(Math.round(x * 100) / 100).replace('.', ','); }
  function ocena(g, m) {
    var G = GAZY[g], d = G.M / DOWOD, ds = 'd = ' + fm(d);
    if (m === 'gora') return d > 1
      ? {ok: true, t: G.n + ' jest cięższy od powietrza (' + ds + '): opada na dno i wypycha powietrze ku górze. Zbieramy naczyniem wylotem do góry.'}
      : {ok: false, t: G.n + ' jest lżejszy od powietrza (' + ds + '): ulatuje z naczynia ustawionego wylotem do góry.'};
    if (m === 'dol') return d < 1
      ? {ok: true, t: G.n + ' jest lżejszy od powietrza (' + ds + '): unosi się i gromadzi pod dnem odwróconego naczynia. Zbieramy wylotem do dołu.'}
      : {ok: false, t: G.n + ' jest cięższy od powietrza (' + ds + '): opada i wypływa przez otwór naczynia wylotem do dołu.'};
    return G.roz === 'slabo'
      ? {ok: true, t: G.n + ' słabo rozpuszcza się w wodzie: zbiera się nad wodą i wypiera ją z naczynia (można też odczytać objętość).'}
      : {ok: false, t: G.n + (G.roz === 'bardzo' ? ' bardzo dobrze' : ' częściowo') + ' rozpuszcza się w wodzie, więc nie zbieramy go nad wodą.'};
  }
  function los(n, z) { var v = Math.sin(n * 12.9898 + z * 78.233) * 43758.5453; return v - Math.floor(v); }
  function dobra(g) { var d = GAZY[g].M / DOWOD; return d > 1 ? 'gora' : 'dol'; }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); }

  /* geometria: naczynie {x,y,w,h}, rurka (łamana), poziom wody w kuwecie */
  var W = 520, H = 300;
  function geom(m) {
    if (m === 'gora') return {j: {x: 330, y: 100, w: 90, h: 150}, rur: [[82, 118], [82, 70], [375, 70], [375, 235]], wejscie: [375, 235], dir: 1};
    if (m === 'dol') return {j: {x: 330, y: 100, w: 90, h: 150}, rur: [[82, 118], [82, 70], [215, 70], [215, 284], [375, 284], [375, 135]], wejscie: [375, 135], dir: -1};
    return {j: {x: 330, y: 105, w: 90, h: 140}, rur: [[82, 118], [82, 70], [215, 70], [215, 284], [375, 284], [375, 240]], wejscie: [375, 240], dir: -1, woda: 232};
  }

  KLOCKI.def('zbieranie-gazu', {
    opis: 'Zbieranie gazu: kolba z reakcją, rurka i naczynie ustawione wylotem do góry, do dołu albo nad wodą; werdykt zależy od gęstości i rozpuszczalności gazu.',
    domyslne: {gaz: 'H2', metoda: 'auto', gazy: 'H2,O2,CO2,NH3,HCl'},
    html: function (host, opc) {
      host.style.display = 'block'; host.style.width = '100%';
      var lista = String(opc.gazy || '').split(',').map(function (s) { return s.trim(); }).filter(function (s) { return GAZY[s]; });
      if (!lista.length) lista = ['H2'];
      var gaz = GAZY[opc.gaz] ? opc.gaz : lista[0];
      if (lista.indexOf(gaz) < 0) lista.unshift(gaz);
      var metoda = METODY[opc.metoda] ? opc.metoda : dobra(gaz);
      var chipSt = 'padding:3px 10px;border:1.5px solid var(--border-strong,#94a3b8);border-radius:999px;background:var(--surface,#fff);cursor:pointer;font:inherit;font-size:13px';
      host.innerHTML =
        '<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin:0 0 6px"><span style="font-size:13px;color:var(--text-soft,#64748b)">Gaz:</span>' +
        lista.map(function (g) { return '<button type="button" data-g="' + g + '" style="' + chipSt + '">' + GAZY[g].n + '</button>'; }).join('') + '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin:0 0 8px"><span style="font-size:13px;color:var(--text-soft,#64748b)">Zbieramy:</span>' +
        Object.keys(METODY).map(function (m) { return '<button type="button" data-m="' + m + '" style="' + chipSt + '">' + METODY[m] + '</button>'; }).join('') + '</div>' +
        '<canvas width="' + W + '" height="' + H + '" style="width:100%;max-width:' + W + 'px;height:auto;display:block;margin:0 auto" role="img"></canvas>' +
        '<div class="zg-r" style="font-size:13px;text-align:center;color:var(--text-soft,#64748b);margin:4px 0 0"></div>' +
        '<div class="zg-w" aria-live="polite" style="font-size:14px;margin:6px 2px 0;font-weight:600"></div>';
      var cv = host.querySelector('canvas'), x = cv.getContext('2d'), rEl = host.querySelector('.zg-r'), wEl = host.querySelector('.zg-w');
      var gB = [].slice.call(host.querySelectorAll('[data-g]')), mB = [].slice.call(host.querySelectorAll('[data-m]'));
      var S = {t: 0, cykl: 0}, ruch = typeof RM !== 'undefined' && RM;

      function ustaw() {
        var o = ocena(gaz, metoda);
        gB.forEach(function (b) { var a = b.getAttribute('data-g') === gaz; b.style.background = a ? 'var(--accent,#0d6868)' : 'var(--surface,#fff)'; b.style.color = a ? '#fff' : 'inherit'; });
        mB.forEach(function (b) { var a = b.getAttribute('data-m') === metoda; b.style.background = a ? 'var(--accent,#0d6868)' : 'var(--surface,#fff)'; b.style.color = a ? '#fff' : 'inherit'; });
        rEl.innerHTML = esc(GAZY[gaz].r);
        wEl.style.color = o.ok ? 'var(--c-basic,#15803d)' : 'var(--c-error,#dc2626)';
        wEl.textContent = (o.ok ? '✓ ' : '✗ ') + o.t;
        cv.setAttribute('aria-label', 'Zbieranie gazu ' + GAZY[gaz].n + ' ' + METODY[metoda] + ': ' + (o.ok ? 'poprawnie' : 'błędnie') + '. ' + o.t);
        S.t = 0; S.cykl = 0; rysuj();
      }
      gB.forEach(function (b) { b.addEventListener('click', function () { gaz = b.getAttribute('data-g'); ustaw(); }); });
      mB.forEach(function (b) { b.addEventListener('click', function () { metoda = b.getAttribute('data-m'); ustaw(); }); });

      /* ---- rysowanie ---- */
      function kropka(px, py, r, kol) { x.beginPath(); x.arc(px, py, r, 0, 6.2832); x.fillStyle = kol; x.fill(); }
      function linia(p, szer, kol) {
        x.beginPath(); x.moveTo(p[0][0], p[0][1]); for (var i = 1; i < p.length; i++) x.lineTo(p[i][0], p[i][1]);
        x.lineWidth = szer; x.strokeStyle = kol; x.lineJoin = 'round'; x.lineCap = 'round'; x.stroke();
      }
      function rysuj() {
        var o = ocena(gaz, metoda), g = geom(metoda), j = g.j, t = S.t, GK = 'rgba(13,104,104,.85)', PK = 'rgba(100,116,139,.55)';
        x.clearRect(0, 0, W, H);
        /* postęp zbierania 0..1 (cykl: 7 s napełniania + 1,5 s pauzy), przy błędnym wyborze — brak gromadzenia */
        var cyk = 8.5, ph = ruch ? 7 : (t % cyk), pr = o.ok ? Math.min(1, ph / 7) : 0;
        /* kolba z reakcją */
        x.fillStyle = 'rgba(148,163,184,.12)'; x.strokeStyle = '#94a3b8'; x.lineWidth = 2;
        x.beginPath(); x.moveTo(66, 118); x.lineTo(66, 160); x.lineTo(30, 236); x.arcTo(24, 262, 50, 262, 14); x.lineTo(114, 262);
        x.arcTo(140, 262, 134, 236, 14); x.lineTo(98, 160); x.lineTo(98, 118); x.stroke();
        x.fillStyle = 'rgba(142,201,232,.35)'; x.beginPath(); x.moveTo(36, 222); x.lineTo(128, 222); x.lineTo(134, 236); x.arcTo(140, 262, 114, 262, 14); x.lineTo(50, 262); x.arcTo(24, 262, 30, 236, 14); x.closePath(); x.fill();
        for (var b = 0; b < 7; b++) { var bt = ((t * .9 + b * .37) % 1), bx = 52 + ((b * 29) % 60) + Math.sin(t * 3 + b) * 3; kropka(bx, 255 - bt * 36, 2 + (b % 3) * .6, 'rgba(255,255,255,.8)'); }
        x.fillStyle = '#b45309'; x.fillRect(62, 112, 40, 8);
        /* naczynie */
        if (g.woda) {
          x.fillStyle = 'rgba(142,201,232,.3)'; x.fillRect(260, g.woda, 230, 284 - g.woda + 12); x.strokeStyle = '#94a3b8'; x.lineWidth = 2; x.strokeRect(260, g.woda - 8, 230, 296 - g.woda + 4);
          var poz = j.y + (j.h) * pr;   /* poziom wody w naczyniu: z wodą do góry, gaz wypiera ją w dół */
          x.fillStyle = 'rgba(142,201,232,.55)'; x.fillRect(j.x, Math.max(j.y, Math.min(g.woda, j.y + (g.woda - j.y) * pr)), j.w, g.woda - Math.max(j.y, Math.min(g.woda, j.y + (g.woda - j.y) * pr)));
        }
        /* gaz w naczyniu (kropki w pseudolosowych, ale stałych miejscach — bez „smug”) */
        var szer = j.w - 6, lw = j.x + 3, ng = o.ok ? Math.round(34 * pr) : 0, i, drg = function (n) { return Math.sin(t * 1.7 + n * 2.3) * 2; };
        var ox = function (n, z) { return lw + 6 + los(n, z) * (szer - 12) + drg(n); };
        if (metoda === 'gora') {
          var h = j.h * pr; x.fillStyle = 'rgba(13,104,104,.10)'; x.fillRect(lw, j.y + j.h - h, szer, h);
          for (i = 0; i < ng; i++) kropka(ox(i, 1), j.y + j.h - 6 - los(i, 2) * Math.max(10, h - 8), 2.1, GK);
          for (i = 0; i < 22; i++) { var yy = j.y + 6 + los(i, 4) * (j.h - 12); if (yy < j.y + j.h - h) kropka(ox(i, 3), yy, 2.1, PK); }
        } else {
          var hh = (metoda === 'woda' ? (g.woda - j.y) : j.h) * pr;
          x.fillStyle = 'rgba(13,104,104,.10)'; x.fillRect(lw, j.y, szer, Math.max(0, hh));
          for (i = 0; i < ng; i++) kropka(ox(i, 1), j.y + 6 + los(i, 2) * Math.max(10, hh - 8), 2.1, GK);
          if (metoda === 'dol') for (i = 0; i < 22; i++) { var y2 = j.y + 6 + los(i, 4) * (j.h - 12); if (y2 > j.y + hh) kropka(ox(i, 3), y2, 2.1, PK); }
        }
        /* szkło naczynia: dla „do góry” otwarte u góry, dla „do dołu” i wody — otwarte u dołu */
        x.strokeStyle = '#94a3b8'; x.lineWidth = 2.5; x.beginPath();
        if (metoda === 'gora') { x.moveTo(j.x, j.y); x.lineTo(j.x, j.y + j.h - 8); x.arcTo(j.x, j.y + j.h, j.x + 10, j.y + j.h, 8); x.lineTo(j.x + j.w - 10, j.y + j.h); x.arcTo(j.x + j.w, j.y + j.h, j.x + j.w, j.y + j.h - 8, 8); x.lineTo(j.x + j.w, j.y); }
        else { x.moveTo(j.x, j.y + j.h); x.lineTo(j.x, j.y + 8); x.arcTo(j.x, j.y, j.x + 10, j.y, 8); x.lineTo(j.x + j.w - 10, j.y); x.arcTo(j.x + j.w, j.y, j.x + j.w, j.y + 8, 8); x.lineTo(j.x + j.w, j.y + j.h); }
        x.stroke();
        /* rurka odprowadzająca */
        linia(g.rur, 5, 'rgba(100,116,139,.35)'); linia(g.rur, 2, '#94a3b8');
        /* gaz w rurce i uciekający / rozpuszczający się */
        if (!ruch || true) {
          var len = 0, seg = [], k;
          for (k = 1; k < g.rur.length; k++) { var dl = Math.hypot(g.rur[k][0] - g.rur[k - 1][0], g.rur[k][1] - g.rur[k - 1][1]); seg.push(dl); len += dl; }
          for (var m = 0; m < 9; m++) {
            var u = ((t * .22 + m / 9) % 1) * len, s = 0; for (k = 0; k < seg.length && u > s + seg[k]; k++) s += seg[k];
            var f = seg[k] ? (u - s) / seg[k] : 0; kropka(g.rur[k][0] + (g.rur[k + 1][0] - g.rur[k][0]) * f, g.rur[k][1] + (g.rur[k + 1][1] - g.rur[k][1]) * f, 2.4, GK);
          }
        }
        var ex = g.wejscie[0], ey = g.wejscie[1];
        if (!o.ok) {
          /* gaz opuszcza naczynie: do góry (lekki w naczyniu „do góry”) albo w dół (ciężki w „do dołu”) */
          var wyp = metoda === 'gora' ? -1 : (metoda === 'dol' ? 1 : 0);
          if (metoda === 'woda') {
            for (var bb = 0; bb < 7; bb++) { var bt2 = (t * .6 + bb * .21) % 1; kropka(ex + Math.sin(bb * 2 + t * 3) * 6, ey - bt2 * 60, 3.2 * (1 - bt2), 'rgba(13,104,104,' + (.8 - bt2 * .8) + ')'); }
            x.fillStyle = 'rgba(100,116,139,.8)'; x.font = '12px system-ui'; x.fillText('gaz rozpuszcza się w wodzie', 262, 62);
          } else for (var e = 0; e < 10; e++) { var te = (t * .5 + e * .1) % 1; kropka(ex + Math.sin(e * 2.1 + t * 2) * 12, (wyp < 0 ? j.y + 8 - te * 55 : j.y + j.h - 8 + te * 55), 2.2, 'rgba(13,104,104,' + (.9 - te * .8) + ')'); }
        } else if (metoda === 'woda' && pr < 1) {
          for (var bu = 0; bu < 5; bu++) { var bt3 = (t * .7 + bu * .2) % 1; kropka(ex + Math.sin(bu * 2 + t * 3) * 5, ey - bt3 * (ey - Math.max(j.y + 6, g.woda - 6 - (g.woda - j.y) * pr + 6)), 2.8, 'rgba(255,255,255,.9)'); }
        }
        x.fillStyle = 'rgba(100,116,139,.9)'; x.font = '12px system-ui'; x.textAlign = 'left';
        x.fillStyle = GK; x.beginPath(); x.arc(24, 24, 3, 0, 6.2832); x.fill(); x.fillStyle = 'rgba(100,116,139,.9)'; x.fillText('gaz (bezbarwny, zaznaczony kropkami)', 34, 28);
        x.fillStyle = PK; x.beginPath(); x.arc(24, 44, 3, 0, 6.2832); x.fill(); x.fillStyle = 'rgba(100,116,139,.9)'; x.fillText('powietrze', 34, 48);
        if (!o.ok) { x.fillStyle = 'rgba(220,38,38,.9)'; x.font = '700 13px system-ui'; x.textAlign = 'center'; x.fillText('naczynie się nie napełnia', j.x + j.w / 2, j.y + j.h + 22); x.textAlign = 'left'; }
        else if (pr >= 1) { x.fillStyle = 'rgba(21,128,61,.95)'; x.font = '700 13px system-ui'; x.textAlign = 'center'; x.fillText('naczynie pełne gazu', j.x + j.w / 2, j.y + j.h + 22); x.textAlign = 'left'; }
      }
      var h = {rysuj: rysuj, krok: function (dt) { S.t += dt; rysuj(); }};
      ustaw();
      if (typeof podepnij === 'function') podepnij(cv, h);
    }
  });
})();
