/* KLOCEK: probówki (Li, Na, K, Rb, Cs, Be, Mg, Ca, Sr, Ba, Ra). Trzy i więcej probówek obok siebie w statywie. */
/* ====================================================================
   KLOCEK: probówki
   ==================================================================== */
function Rurka(x, ox, sym, wsk) {
  var P = {cx: 75, tw: 76, top: 54, wl: 152, bot: 326};
  var S = {wsk: wsk};
  var api = {krok: krok, rysuj: rysuj, reset: reset, ustaw: ustaw, wskaznik: function (v) { S.wsk = v; }};

  function reset() {
    S.t = 0; S.b = []; S.dr = []; S.foam = 0; S.acc = 0; S.dacc = 0; S.spl = false;
    S.mx0 = (Math.random() - .5) * 20; S.rel = S.mx0; S.tx = 0; S.tc = 0; S.my = 0; S.mx = P.cx + S.mx0;
    S.zywe = false; S.sc = 1; S.fcap = Math.min(1, S.d.tempo / 50);
  }
  function ustaw(s) { S.sym = s; S.d = PR[s]; reset(); }

  function krok(dt) {
    var d = S.d, t = S.t += dt, t1 = t - .6, fin = d.zyje > 0;
    var sc = 1;
    if (fin) sc = Math.max(0, 1 - t1 / d.zyje); else if (d.kurcz) sc = Math.max(.5, 1 - d.kurcz * Math.max(0, t1));
    S.sc = sc;
    var zywe = t1 >= 0 && (!fin || sc > .06); S.zywe = zywe;
    var R = d.r * (.3 + .7 * sc); S.R = R;
    var surf = P.wl, dno = P.bot + P.tw / 2 - 2;

    if (t < .6) { var u = t / .6, y0 = P.top - 26; S.my = y0 + (surf - y0) * u * u; S.mx = P.cx + S.mx0; }
    else if (d.plywa) {
      S.tc -= dt;
      if (S.tc <= 0) { S.tx = (Math.random() * 2 - 1) * (P.tw / 2 - R - 6); S.tc = .35 + Math.random() * .9 * (1 - Math.min(.8, d.ruch / 80)); }
      S.rel += (S.tx - S.rel) * Math.min(1, dt * d.ruch / 9);
      S.mx = P.cx + S.rel; S.my = surf + 1 + Math.sin(t * 4) * .8;
    } else {
      var u2 = sm(t1 / 1.1); S.my = surf + (dno - R - surf) * u2; S.mx = P.cx + S.mx0 * (1 - u2 * .7);
    }
    if (!S.spl && t >= .6) {
      S.spl = true;
      for (var q = 0; q < 10; q++) S.dr.push({x: S.mx, y: surf, vx: (Math.random() - .5) * 70, vy: -(50 + Math.random() * 110), r: 1 + Math.random() * 1.5});
    }
    if (zywe && d.tempo > 0) {
      S.acc += d.tempo * (fin ? (.35 + .65 * sc) : 1) * dt;
      var n = 0;
      while (S.acc >= 1 && n < 8) {
        S.acc -= 1; n++;
        S.b.push({x: S.mx + (Math.random() - .5) * R * 1.6, y: d.plywa ? S.my + R * .7 : S.my - R * .3, r: 1.1 + Math.random() * 2.3,
          vy: d.plywa ? -(8 + Math.random() * 30) : (10 + Math.random() * 30), ph: Math.random() * 6.3, w: 3 + Math.random() * 4});
      }
    }
    var l = P.cx - P.tw / 2 + 4, r = P.cx + P.tw / 2 - 4;
    for (var i = S.b.length - 1; i >= 0; i--) {
      var b = S.b[i];
      b.vy = Math.min(75, b.vy + 70 * dt); b.y -= b.vy * dt; b.x = clamp(b.x + Math.sin(b.ph + t * 7) * b.w * dt * 3, l + b.r, r - b.r);
      if (b.y <= surf + b.r) { S.b.splice(i, 1); S.foam = Math.min(S.fcap, S.foam + .02); }
    }
    if (S.b.length > 260) S.b.splice(0, S.b.length - 260);
    S.foam = Math.max(0, S.foam - dt * .35);
    var dr = d.plywa ? (d.plomien ? 9 : 0) : (d.wstrzas ? d.wstrzas * 18 : 0);
    if (zywe && dr > 0) {
      S.dacc += dr * dt;
      while (S.dacc >= 1) { S.dacc -= 1; S.dr.push({x: d.plywa ? S.mx : P.cx + (Math.random() - .5) * P.tw * .6, y: surf, vx: (Math.random() - .5) * 60, vy: -(90 + Math.random() * 160), r: 1 + Math.random() * 1.6}); }
    }
    for (var k = S.dr.length - 1; k >= 0; k--) {
      var c = S.dr[k]; c.vy += 420 * dt; c.y += c.vy * dt; c.x += c.vx * dt;
      if (c.y > P.top && (c.x < l - 1 || c.x > r + 1)) { c.vx *= -.6; c.x = clamp(c.x, l, r); }
      if (c.vy > 0 && c.y >= surf) S.dr.splice(k, 1);
    }
  }

  function tubePath() {
    var l = P.cx - P.tw / 2, rr_ = P.cx + P.tw / 2;
    x.beginPath(); x.moveTo(l, P.top); x.lineTo(l, P.bot); x.arc(P.cx, P.bot, P.tw / 2, Math.PI, 0, true); x.lineTo(rr_, P.top);
  }
  function metal(mx, my, R, d, rot) {
    var g = x.createRadialGradient(mx - R * .35, my - R * .35, R * .1, mx, my, R * 1.15);
    g.addColorStop(0, '#ffffff'); g.addColorStop(.4, d.kol); g.addColorStop(1, mixHex(d.kol, '#3d4a56', .6));
    x.fillStyle = g; x.beginPath(); x.ellipse(mx, my, R, R * (d.plywa ? .82 : .72), rot, 0, 6.3); x.fill();
  }
  function miniPlomien(fx, fy, h, w, kol, sw) {
    x.save(); x.globalCompositeOperation = 'lighter';
    var g = x.createLinearGradient(0, fy, 0, fy - h);
    g.addColorStop(0, rgba(kol, .95)); g.addColorStop(.6, rgba(kol, .5)); g.addColorStop(1, rgba(kol, 0));
    x.fillStyle = g; x.beginPath(); x.moveTo(fx - w, fy);
    x.bezierCurveTo(fx - w * 1.2, fy - h * .45, fx - w * .4 + sw, fy - h * .8, fx + sw, fy - h);
    x.bezierCurveTo(fx + w * .4 + sw, fy - h * .8, fx + w * 1.2, fy - h * .45, fx + w, fy); x.fill();
    var gl = x.createRadialGradient(fx, fy - h * .4, 2, fx, fy - h * .4, h * 1.4); gl.addColorStop(0, rgba(kol, .35)); gl.addColorStop(1, rgba(kol, 0));
    x.fillStyle = gl; x.fillRect(fx - h * 1.5, fy - h * 1.9, h * 3, h * 2.6);
    x.restore();
  }
  function rysuj() {
    var d = S.d, t = S.t, l = P.cx - P.tw / 2, r = P.cx + P.tw / 2, bt = P.bot + P.tw / 2;
    x.save(); x.translate(ox, 0);
    var sh = (!RM && S.zywe && d.wstrzas) ? d.wstrzas : 0;
    x.save(); x.translate(sh * (Math.random() - .5) * 2, sh * (Math.random() - .5) * 1.2);

    x.save(); tubePath(); x.clip();
    var gw = x.createLinearGradient(0, P.wl, 0, bt); gw.addColorStop(0, 'rgba(150,205,240,.42)'); gw.addColorStop(1, 'rgba(110,170,215,.34)');
    x.fillStyle = gw; x.fillRect(l - 2, P.wl, P.tw + 4, bt - P.wl + 2);
    var Pk = (S.wsk && d.rozow) ? Math.min(d.rozMax || .85, d.rozow * Math.max(0, t - .6)) : 0;
    if (Pk > 0) {
      var mv = sm((t - .6) / 12), a1 = d.plywa ? Pk : Pk * (.3 + .7 * mv), a2 = d.plywa ? Pk * (.3 + .7 * mv) : Pk;
      var gp = x.createLinearGradient(0, P.wl, 0, bt); gp.addColorStop(0, 'rgba(240,72,155,' + a1.toFixed(3) + ')'); gp.addColorStop(1, 'rgba(240,72,155,' + a2.toFixed(3) + ')');
      x.fillStyle = gp; x.fillRect(l - 2, P.wl, P.tw + 4, bt - P.wl + 2);
    }
    if (d.mut) {
      var cl = d.mut * clamp((t - .6) / 9, 0, 1) * .5;
      var gc = x.createLinearGradient(0, P.wl, 0, bt); gc.addColorStop(0, 'rgba(245,248,252,' + (cl * .6).toFixed(3) + ')'); gc.addColorStop(1, 'rgba(245,248,252,' + cl.toFixed(3) + ')');
      x.fillStyle = gc; x.fillRect(l - 2, P.wl, P.tw + 4, bt - P.wl + 2);
    }
    x.strokeStyle = 'rgba(255,255,255,.6)'; x.lineWidth = 1.4; x.beginPath(); x.moveTo(l, P.wl); x.lineTo(r, P.wl); x.stroke();
    for (var i = 0; i < S.b.length; i++) {
      var b = S.b[i]; x.fillStyle = 'rgba(255,255,255,.22)'; x.strokeStyle = 'rgba(255,255,255,.75)'; x.lineWidth = .8;
      x.beginPath(); x.arc(b.x, b.y, b.r, 0, 6.3); x.fill(); x.stroke();
    }
    var nf = Math.round(S.foam * 16); x.fillStyle = 'rgba(255,255,255,.8)';
    for (var f = 0; f < nf; f++) { x.beginPath(); x.arc(l + 5 + ((f * 37) % (P.tw - 10)), P.wl - 1 + Math.sin(t * 5 + f) * 1, 1.6 + (f % 3) * .7, 0, 6.3); x.fill(); }
    x.restore();

    x.lineJoin = 'round'; x.lineCap = 'round';
    tubePath(); x.strokeStyle = 'rgba(215,238,255,.6)'; x.lineWidth = 2.4; x.stroke();
    x.strokeStyle = 'rgba(255,255,255,.3)'; x.lineWidth = 3; x.beginPath(); x.moveTo(l + 8, P.top + 12); x.lineTo(l + 8, P.bot - 6); x.stroke();
    x.strokeStyle = 'rgba(255,255,255,.12)'; x.lineWidth = 2; x.beginPath(); x.moveTo(r - 8, P.top + 24); x.lineTo(r - 8, P.bot - 20); x.stroke();
    x.strokeStyle = 'rgba(225,242,255,.75)'; x.lineWidth = 3; x.beginPath(); x.moveTo(l - 3, P.top); x.lineTo(r + 3, P.top); x.stroke();

    var vis = !(d.zyje > 0 && S.sc <= .06 && t > .6);
    if (vis && t > 0) {
      metal(S.mx, S.my, S.R || d.r, d, Math.sin(t * 1.3) * .3);
      if (d.plomien && S.zywe) miniPlomien(S.mx, S.my - (S.R || d.r) * .4, 26 + (RM ? 0 : Math.random() * 10), 9, d.plomien, RM ? 0 : Math.sin(t * 20) * 2);
    }
    if (d.ostrz && t >= .6 && t < .95) {
      var fl = 1 - (t - .6) / .35; x.save(); x.globalCompositeOperation = 'lighter';
      var gf = x.createRadialGradient(P.cx, P.wl, 2, P.cx, P.wl, 70 * fl + 10); gf.addColorStop(0, 'rgba(255,255,255,' + (.85 * fl).toFixed(2) + ')'); gf.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = gf; x.fillRect(P.cx - 90, P.wl - 90, 180, 180); x.restore();
    }
    x.fillStyle = 'rgba(255,255,255,.8)';
    for (var k = 0; k < S.dr.length; k++) { x.beginPath(); x.arc(S.dr[k].x, S.dr[k].y, S.dr[k].r, 0, 6.3); x.fill(); }
    x.restore();
    /* szczęka uchwytu statywu */
    rr(x, l - 4, 84, P.tw + 8, 17, 4); var g = x.createLinearGradient(0, 84, 0, 101); g.addColorStop(0, '#8d9ba7'); g.addColorStop(1, '#4b5a67'); x.fillStyle = g; x.fill();
    x.restore();
  }
  S.sym = sym; S.d = PR[sym]; reset();
  return api;
}
function znakPauzy(x, W, H) {
  x.fillStyle = 'rgba(8,16,24,.45)'; x.fillRect(0, 0, W, H);
  x.fillStyle = 'rgba(255,255,255,.92)'; x.beginPath(); x.moveTo(W / 2 - 16, H / 2 - 22); x.lineTo(W / 2 + 22, H / 2); x.lineTo(W / 2 - 16, H / 2 + 22); x.closePath(); x.fill();
}

function opisProbowki(sym) {
  var d = PR[sym], dn = DANE[sym], re = dn.re || 0;
  var plywa = dn.rhoN < 1;
  return '<p class="obs">' + d.obs + '</p><p class="rown">' + d.rown + '</p>' +
    '<div class="meta"><span>Gęstość ' + dn.rho + ' — ' + (plywa ? 'lżejszy od wody, pływa' : 'cięższy od wody, tonie') + '</span>' +
    '<span>Reaktywność <span class="pasek"><i style="width:' + Math.round(re / 6 * 100) + '%"></i></span></span></div>' +
    (d.rad ? zakaz('Tylko animacja — doświadczeń z radem nie wykonuje się w szkołach.') : d.ostrz ? '<p class="ostrz">Tylko animacja — tego doświadczenia nie wykonuje się w szkole.</p>' : '');
}

KLOCKI.def('probowki', {
  domyslne: {metale: 'Li,K,Ca', wskaznik: 1},
  html: function (host, opc) {
    var PITCH = 150, lista = parsujListe(opc.metale, PR, ['Li', 'K', 'Ca']), n = lista.length;
    var W = n * PITCH + 24, H = 400;
    var lab = el('div', 'lab'), pasek = el('div', 'lab-pasek');
    var przel = el('label', 'przel', '<input type="checkbox"><span class="sw-t"></span><span>Fenoloftaleina w wodzie</span>');
    var cb = przel.querySelector('input'); cb.checked = !!+opc.wskaznik;
    var bAll = el('button', 'btn', 'Wrzuć metale ponownie'); bAll.type = 'button';
    pasek.appendChild(przel); pasek.appendChild(bAll); lab.appendChild(pasek);

    var rack = el('div', 'rack'); rack.style.maxWidth = (n * 215) + 'px';
    var wier1 = el('div', 'rack-kol'), wier2 = el('div', 'rack-kol');
    [wier1, wier2].forEach(function (w) { w.style.setProperty('--n', n); w.style.width = (n * PITCH / W * 100) + '%'; });
    var cv = el('canvas'); cv.width = W * 2; cv.height = H * 2; cv.tabIndex = 0; cv.setAttribute('role', 'button');
    rack.appendChild(wier1); rack.appendChild(cv); rack.appendChild(wier2); lab.appendChild(rack); host.appendChild(lab);
    var x = cv.getContext('2d');

    var rurki = [], sts = [], licznik = 0, pauza = false;
    var scena = {
      krok: function (dt) { if (pauza) return; rurki.forEach(function (r) { r.krok(dt); }); scena.rysuj(); },
      rysuj: function () {
        x.setTransform(2, 0, 0, 2, 0, 0); x.clearRect(0, 0, W, H);
        var rx = n * PITCH + 4, gr = x.createLinearGradient(rx, 0, rx + 11, 0);
        gr.addColorStop(0, '#5d6c79'); gr.addColorStop(.5, '#b9c5cf'); gr.addColorStop(1, '#52616e');
        x.fillStyle = gr; x.fillRect(rx, 40, 11, 346);
        rr(x, 6, 380, W - 12, 12, 4); var gb = x.createLinearGradient(0, 380, 0, 392); gb.addColorStop(0, '#6f7f8c'); gb.addColorStop(1, '#34424e'); x.fillStyle = gb; x.fill();
        x.fillStyle = '#3c4a56'; x.fillRect(PITCH / 2, 88, rx - PITCH / 2, 9);
        x.fillStyle = '#2d3943'; x.beginPath(); x.arc(rx + 5.5, 92.5, 7, 0, 6.3); x.fill();
        rurki.forEach(function (r) { r.rysuj(); });
        if (pauza) znakPauzy(x, W, H);
      }
    };
    function przelPauza() { pauza = !pauza; scena.rysuj(); }
    cv.addEventListener('click', przelPauza);
    cv.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); przelPauza(); } });
    cv.setAttribute('aria-label', 'Statyw z probówkami: metale w wodzie. Kliknij, aby zatrzymać lub wznowić.');

    lista.forEach(function (sym, i) {
      var sim = Rurka(x, i * PITCH, sym, cb.checked ? 1 : 0); rurki.push(sim);
      var cell1 = el('div', 'rack-ce'), cell2 = el('div', 'rack-ce st-opis'), br = el('button', 'btn', 'Wrzuć ponownie'); br.type = 'button';
      var wb = wyborSymbole(LISTA_PR, sym, function (s) { zmien(s); }, 'Metal w probówce ' + (i + 1));
      function zmien(s) { sim.ustaw(s); pauza = false; cell2.innerHTML = opisProbowki(s); cell2.appendChild(br); scena.rysuj(); }
      br.addEventListener('click', function () { sim.reset(); pauza = false; });
      cell1.appendChild(wb.el); wier1.appendChild(cell1); wier2.appendChild(cell2);
      cell2.innerHTML = opisProbowki(sym); cell2.appendChild(br);
      sts.push({wb: wb, zmien: zmien});
    });
    podepnij(cv, scena);
    cb.addEventListener('change', function () { rurki.forEach(function (r) { r.wskaznik(cb.checked ? 1 : 0); }); scena.rysuj(); });
    bAll.addEventListener('click', function () { rurki.forEach(function (r) { r.reset(); }); pauza = false; });
    document.addEventListener('klocki:uzyj', function (e) {
      if (e.detail.cel !== 'probowka' || !PR[e.detail.sym]) return;
      var s = sts[licznik++ % sts.length]; s.wb.ustaw(e.detail.sym); s.zmien(e.detail.sym);
      lab.scrollIntoView({behavior: RM ? 'auto' : 'smooth', block: 'center'});
    });
    return {stacje: sts};
  }
});

