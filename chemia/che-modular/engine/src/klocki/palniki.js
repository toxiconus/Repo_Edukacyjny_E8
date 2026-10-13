/* KLOCEK: palniki — próba płomieniowa, stojaki obok siebie. Barwy z dane/pierwiastki.js. */
/* ====================================================================
   KLOCEK: palniki
   ==================================================================== */
function Palnik(canvas, sym) {
  var W = 240, H = 400, cx = 120, topY = 252, BL = '#6bb6ff';
  var x = canvas.getContext('2d'), S = {};
  var api = {pauza: false, krok: krok, rysuj: rysuj, reset: reset, ustaw: ustaw};
  function reset() { S.t = 0; S.sp = []; S.sm = []; S.acc = 0; S.acs = 0; }
  function ustaw(s) { S.sym = s; S.d = PL[s]; reset(); rysuj(); }

  function stan() {
    var t = S.t, d = S.d, p = sm((t - .6) / 1.1);
    var tx = cx + 82 + (cx + 4 - (cx + 82)) * p, ty = 118 + (190 - 118) * p;
    var k = d.c ? Math.min(1, sm((t - 1.9) / 3) * (1 + .04 * Math.sin(t * 3))) : 0;
    var mg = 0, burn = 0;
    if (d.tryb === 'mg') { mg = sm((t - 1.5) / .25) * (1 - sm((t - 7.8) / 1.2)); burn = clamp((t - 1.6) / 6.4, 0, 1); }
    return {tx: tx, ty: ty, k: k, mg: mg, burn: burn};
  }
  function krok(dt) {
    if (api.pauza) return;
    S.t += dt;
    var st = stan(), i;
    if (S.d.tryb === 'mg' && st.mg > .2 && S.t < 8) {
      S.acc += 46 * dt;
      while (S.acc >= 1) { S.acc -= 1; S.sp.push({x: st.tx, y: st.ty, vx: (Math.random() - .5) * 170, vy: -(20 + Math.random() * 130), life: .5 + Math.random() * .6, l0: 1}); }
      S.acs += 7 * dt;
      while (S.acs >= 1) { S.acs -= 1; S.sm.push({x: st.tx + (Math.random() - .5) * 8, y: st.ty - 8, vy: -(18 + Math.random() * 14), r: 3, life: 2.6}); }
    }
    for (i = S.sp.length - 1; i >= 0; i--) { var a = S.sp[i]; a.vy += 380 * dt; a.x += a.vx * dt; a.y += a.vy * dt; a.life -= dt; if (a.life <= 0) S.sp.splice(i, 1); }
    for (i = S.sm.length - 1; i >= 0; i--) { var b = S.sm[i]; b.y += b.vy * dt; b.r += 6 * dt; b.life -= dt; if (b.life <= 0) S.sm.splice(i, 1); }
    rysuj();
  }
  function mantle(by, h, w, sw) {
    x.beginPath(); x.moveTo(cx - w, by);
    x.bezierCurveTo(cx - w * 1.25, by - h * .45, cx - w * .55 + sw * .5, by - h * .82, cx + sw, by - h);
    x.bezierCurveTo(cx + w * .55 + sw * .5, by - h * .82, cx + w * 1.25, by - h * .45, cx + w, by);
    x.closePath();
  }
  function korpus() {
    var g;
    /* wąż gazowy */
    x.strokeStyle = '#27303a'; x.lineWidth = 7; x.lineCap = 'round'; x.beginPath(); x.moveTo(78, 372); x.bezierCurveTo(40, 372, 30, 350, 0, 346); x.stroke();
    /* podstawa */
    g = x.createLinearGradient(0, 362, 0, 386); g.addColorStop(0, '#6b7b89'); g.addColorStop(1, '#2b3743');
    x.fillStyle = g; x.beginPath(); x.ellipse(cx, 376, 60, 12, 0, 0, 6.3); x.fill();
    x.fillStyle = '#566472'; x.beginPath(); x.ellipse(cx, 369, 52, 8, 0, 0, 6.3); x.fill();
    /* lufa */
    g = x.createLinearGradient(cx - 9, 0, cx + 9, 0); g.addColorStop(0, '#5c6a77'); g.addColorStop(.45, '#c9d3dc'); g.addColorStop(1, '#55636f');
    x.fillStyle = g; x.fillRect(cx - 9, topY, 18, 120);
    /* regulator powietrza */
    g = x.createLinearGradient(cx - 15, 0, cx + 15, 0); g.addColorStop(0, '#46535f'); g.addColorStop(.5, '#9fadb9'); g.addColorStop(1, '#3f4b57');
    rr(x, cx - 15, 318, 30, 22, 4); x.fillStyle = g; x.fill();
    x.fillStyle = '#1e2832'; for (var i = 0; i < 3; i++) { x.beginPath(); x.ellipse(cx - 8 + i * 8, 329, 2.2, 6, 0, 0, 6.3); x.fill(); }
    /* wylot */
    x.fillStyle = '#26323d'; x.beginPath(); x.ellipse(cx, topY, 10, 3.5, 0, 0, 6.3); x.fill();
    x.strokeStyle = '#b4c0ca'; x.lineWidth = 1.5; x.stroke();
  }
  function rysuj() {
    var t = S.t, d = S.d, st = stan(), k = st.k, ec = d.c ? mixHex(BL, d.c, k) : BL;
    x.setTransform(2, 0, 0, 2, 0, 0); x.clearRect(0, 0, W, H);
    var sw = RM ? 0 : Math.sin(t * 9) * 2.2 + Math.sin(t * 5.3 + 1) * 1.6;
    var fl = RM ? 0 : Math.sin(t * 13) * 3;

    x.save(); x.globalCompositeOperation = 'lighter';
    if (d.c && k > 0) {
      var gl = x.createRadialGradient(cx, topY - 90, 10, cx, topY - 90, 116);
      gl.addColorStop(0, rgba(d.c, .4 * k)); gl.addColorStop(1, rgba(d.c, 0)); x.fillStyle = gl; x.fillRect(0, 0, W, H);
    }
    var hh = 138 + fl, ww = 17;
    var halo = x.createLinearGradient(0, topY, 0, topY - hh * 1.05);
    halo.addColorStop(0, rgba(BL, .12)); halo.addColorStop(.6, rgba(ec, .1 + .22 * k)); halo.addColorStop(1, rgba(ec, 0));
    x.fillStyle = halo; mantle(topY, hh * 1.05, ww * 1.7, sw); x.fill();
    var gr = x.createLinearGradient(0, topY, 0, topY - hh);
    gr.addColorStop(0, rgba(BL, .6)); gr.addColorStop(.3, rgba(mixHex(BL, ec, k * .85), .5 + .3 * k));
    gr.addColorStop(.7, rgba(ec, .2 + .5 * k)); gr.addColorStop(1, rgba(ec, 0));
    x.fillStyle = gr; mantle(topY, hh, ww, sw); x.fill();
    var gi = x.createLinearGradient(0, topY, 0, topY - 54);
    gi.addColorStop(0, 'rgba(210,235,255,.95)'); gi.addColorStop(.5, 'rgba(80,160,255,.8)'); gi.addColorStop(1, 'rgba(60,130,255,.1)');
    x.fillStyle = gi; mantle(topY, 54, 7.5, sw * .3); x.fill();
    x.restore();

    korpus();

    /* drut z próbką */
    var dx = W - 6 - st.tx, dy = 8 - st.ty, len = Math.sqrt(dx * dx + dy * dy), ux = dx / len, uy = dy / len;
    x.lineCap = 'round';
    x.strokeStyle = '#b3beca'; x.lineWidth = 1.8; x.beginPath(); x.moveTo(st.tx, st.ty); x.lineTo(W - 6, 8); x.stroke();
    x.strokeStyle = '#2f3a45'; x.lineWidth = 6; x.beginPath(); x.moveTo(W - 6, 8); x.lineTo(W - 6 - ux * 42, 8 - uy * 42); x.stroke();

    if (d.tryb === 'mg') {
      var L = 28 * (1 - st.burn * .92);
      if (S.t > 8) { x.fillStyle = '#eef0f2'; x.beginPath(); x.arc(st.tx, st.ty, 3, 0, 6.3); x.fill(); }
      else {
        x.strokeStyle = st.mg > .1 ? '#ffffff' : '#cfd6dc'; x.lineWidth = 3.2;
        x.beginPath(); x.moveTo(st.tx + L * .5, st.ty - L * .14); x.lineTo(st.tx - L * .5, st.ty + L * .14); x.stroke();
      }
    } else if (d.tryb !== 'brak') {
      x.fillStyle = '#eef2f5'; x.strokeStyle = '#8f9ca8'; x.lineWidth = 1.2;
      x.beginPath(); x.arc(st.tx, st.ty, 4.6, 0, 6.3); x.fill(); x.stroke();
      if (k > 0) { x.save(); x.globalCompositeOperation = 'lighter'; var gb = x.createRadialGradient(st.tx, st.ty, 1, st.tx, st.ty, 12); gb.addColorStop(0, rgba(ec, .9 * k)); gb.addColorStop(1, rgba(ec, 0)); x.fillStyle = gb; x.fillRect(st.tx - 14, st.ty - 14, 28, 28); x.restore(); }
    } else {
      x.fillStyle = '#eef2f5'; x.strokeStyle = '#8f9ca8'; x.lineWidth = 1.2; x.beginPath(); x.arc(st.tx, st.ty, 4.6, 0, 6.3); x.fill(); x.stroke();
    }

    /* dym i iskry magnezu */
    for (var i = 0; i < S.sm.length; i++) { var s = S.sm[i]; x.fillStyle = 'rgba(232,238,244,' + (.2 * s.life / 2.6).toFixed(3) + ')'; x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.3); x.fill(); }
    if (st.mg > 0) {
      x.save(); x.globalCompositeOperation = 'lighter';
      var jitter = RM ? 1 : (1 + .12 * Math.random()), rad = 95 * st.mg * jitter;
      var gf = x.createRadialGradient(st.tx, st.ty, 2, st.tx, st.ty, rad);
      gf.addColorStop(0, 'rgba(255,255,255,1)'); gf.addColorStop(.18, 'rgba(235,245,255,.85)'); gf.addColorStop(.5, 'rgba(160,200,255,.28)'); gf.addColorStop(1, 'rgba(120,170,255,0)');
      x.fillStyle = gf; x.fillRect(st.tx - rad, st.ty - rad, rad * 2, rad * 2);
      if (!RM) {
        x.strokeStyle = 'rgba(255,255,255,' + (.55 * st.mg).toFixed(2) + ')'; x.lineWidth = 1;
        for (var q = 0; q < 12; q++) { var an = q * .5236 + t * .8, ln = (22 + Math.random() * 38) * st.mg; x.beginPath(); x.moveTo(st.tx, st.ty); x.lineTo(st.tx + Math.cos(an) * ln, st.ty + Math.sin(an) * ln); x.stroke(); }
      }
      x.restore();
    }
    x.strokeStyle = '#fff'; x.lineWidth = 1.5;
    for (var j = 0; j < S.sp.length; j++) { var p = S.sp[j]; x.globalAlpha = clamp(p.life * 2, 0, 1); x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(p.x - p.vx * .03, p.y - p.vy * .03); x.stroke(); }
    x.globalAlpha = 1;
    if (api.pauza) znakPauzy(x, W, H);
  }
  S.sym = sym; S.d = PL[sym]; reset();
  return api;
}
function opisPalnika(sym) {
  var d = PL[sym];
  var sw = d.c ? '<span class="sw" style="background:' + d.c + ';--glow:' + d.c + '"></span>'
    : d.tryb === 'mg' ? '<span class="sw" style="background:#fff;--glow:#cfe3ff"></span>' : '<span class="sw pusty"></span>';
  return '<p class="kol">' + sw + '<b>' + cap(d.nz) + '</b></p><p class="obs">' + d.op + '</p>' + (d.rad ? zakaz('Tylko animacja — doświadczeń z radem nie wykonuje się w szkołach.') : '');
}

/* sekwencje palników: w lekcji zawsze widać najwyżej trzy palniki naraz (jedna sekwencja na raz) */
var SERIE = {
  plomien: {nazwa: 'Próba płomieniowa', metale: ['Na', 'K', 'Ca'],
    opis: 'Tu interesuje nas barwa, bo wskazuje metal. Sód przysłania inne barwy, więc potas ogląda się przez szkło kobaltowe.'},
  utlenianie: {nazwa: 'Spalanie i utlenianie', metale: ['Li', 'Mg', 'Sr'],
    opis: 'Tu interesuje nas produkt, a nie barwa. Płomień pokazuje tylko przebieg reakcji. Pod każdym palnikiem podano powstały związek.'},
  model: {nazwa: 'Model teoretyczny: Rb, Cs, Ra', metale: ['Rb', 'Cs', 'Ra'],
    opis: 'Model teoretyczny i reakcje niemożliwe w szkole. Ra jest promieniotwórczy, więc pokazujemy go wyłącznie jako animację.'}
};
var PRODUKT = {Li: '4Li + O₂ → 2Li₂O', Na: '2Na + O₂ → Na₂O₂ (w nadmiarze tlenu); 4Na + O₂ → 2Na₂O (przy ograniczonym tlenie)', K: 'K + O₂ → KO₂', Ca: '2Ca + O₂ → 2CaO', Mg: '2Mg + O₂ → 2MgO', Sr: '2Sr + O₂ → 2SrO (z domieszką SrO₂)'};

KLOCKI.def('palniki', {
  domyslne: {seria: 'plomien'},
  html: function (host, opc) {
    var lab = el('div', 'lab'), pasek = el('div', 'lab-pasek'), przyciski = el('div', 'seria-przyciski');
    var intro = el('p', 'seria-opis'), stacje = el('div', 'stacje');
    var info = el('span', 'lab-cisza', 'Kliknij palnik, aby zatrzymać obraz.'); info.style.cssText = 'font-size:14px;color:var(--lab-cisza)';
    var bAll = el('button', 'btn', 'Powtórz wszystkie próby'); bAll.type = 'button';
    var przyc = {};
    Object.keys(SERIE).forEach(function (k) {
      var b = el('button', 'btn seria-btn', SERIE[k].nazwa); b.type = 'button'; b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () { ustaw(k); });
      przyciski.appendChild(b); przyc[k] = b;
    });
    pasek.appendChild(info); pasek.appendChild(bAll); lab.appendChild(pasek); lab.appendChild(przyciski);
    lab.appendChild(intro); lab.appendChild(stacje); host.appendChild(lab);

    var aktywna = null, sts = [], licznik = 0;

    function opisStacji(s) {
      return opisPalnika(s) + (aktywna === 'utlenianie' && PRODUKT[s] ? '<p class="rown">Produkt: ' + PRODUKT[s] + '</p>' : '');
    }

    function stacja(sym) {
      var art = el('article', 'st'), cv = el('canvas'), op = el('div', 'st-opis'), br = el('button', 'btn', 'Powtórz próbę'); br.type = 'button';
      cv.width = 480; cv.height = 800; cv.tabIndex = 0; cv.setAttribute('role', 'button');
      var sim = Palnik(cv, sym);
      var wb = wyborSymbole({1: ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'], 2: ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra']}, sym, function (s) { zmien(s); }, 'Pierwiastek w palniku');
      var st = {sim: sim, wb: wb, sym: sym};
      function zmien(s) {
        st.sym = s; sim.ustaw(s); sim.pauza = false; op.innerHTML = opisStacji(s); op.appendChild(br);
        cv.setAttribute('aria-label', 'Palnik z próbką: ' + NAZ[SYM.indexOf(s)] + '. Barwa płomienia: ' + PL[s].nz + '. Kliknij, aby zatrzymać lub wznowić.');
      }
      function przel_() { sim.pauza = !sim.pauza; sim.rysuj(); }
      cv.addEventListener('click', przel_);
      cv.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); przel_(); } });
      br.addEventListener('click', function () { sim.reset(); sim.pauza = false; });
      art.appendChild(wb.el); art.appendChild(cv); art.appendChild(op); stacje.appendChild(art);
      zmien(sym); podepnij(cv, sim);
      st.zmien = zmien; return st;
    }

    function ustaw(klucz) {
      if (klucz === aktywna) return;
      sts.forEach(function (s) { wylacz(s.sim); });
      stacje.innerHTML = ''; sts = []; aktywna = klucz;
      stacje.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))';
      intro.textContent = SERIE[klucz].opis;
      SERIE[klucz].metale.forEach(function (sym) { sts.push(stacja(sym)); });
      Object.keys(przyc).forEach(function (k) { przyc[k].setAttribute('aria-pressed', k === klucz ? 'true' : 'false'); });
    }

    bAll.addEventListener('click', function () { sts.forEach(function (s) { s.sim.reset(); s.sim.pauza = false; }); });
    document.addEventListener('klocki:uzyj', function (e) {
      if (e.detail.cel !== 'palnik' || !PL[e.detail.sym]) return;
      var sym = e.detail.sym, k = Object.keys(SERIE).filter(function (q) { return SERIE[q].metale.indexOf(sym) >= 0; })[0] || 'plomien';
      if (k !== aktywna) ustaw(k);
      var idx = -1;
      sts.forEach(function (s, i) { if (s.sym === sym) idx = i; });
      if (idx < 0) idx = licznik++ % sts.length;
      sts[idx].wb.ustaw(sym); sts[idx].zmien(sym);
      lab.scrollIntoView({behavior: RM ? 'auto' : 'smooth', block: 'center'});
    });
    ustaw(SERIE[opc.seria] ? opc.seria : 'plomien');
    return {seria: aktywna};
  }
});
