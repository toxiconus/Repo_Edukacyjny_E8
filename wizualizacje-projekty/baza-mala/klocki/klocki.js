/* KLOCKI — lekkie komponenty wielokrotnego użytku dla lekcji (bez silnika).
   Każdy klocek: KLOCKI.def(nazwa, {opis, dane, rysuj(canvas, stan, t)}) — rejestr,
   KLOCKI.montuj(host, nazwa, opcje) — tworzy canvas, autostart gdy widoczny,
   klik zatrzymuje/wznawia. Lekcja wymienia klocki w manifeście (klocki/manifest). */
(function (g) {
  var reg = {};
  /* JEDEN zegar animacji dla wszystkich klocków: jedna pętla rAF, funkcje fn(now, dt); pętla stoi, gdy nikt nie gra. */
  var zegar = (function () {
    var fns = [], id = 0, ost = 0;
    function petla(now) {
      var dt = Math.min(0.05, (now - ost) / 1000); ost = now;
      fns.slice().forEach(function (f) { try { f(now, dt); } catch (e) { } });
      id = fns.length ? requestAnimationFrame(petla) : 0;
    }
    return {
      dodaj: function (f) { if (fns.indexOf(f) < 0) fns.push(f); if (!id) { ost = performance.now(); id = requestAnimationFrame(petla); } },
      usun: function (f) { var i = fns.indexOf(f); if (i >= 0) fns.splice(i, 1); },
      liczba: function () { return fns.length; }
    };
  })();
  var RM_ = !!(g.matchMedia && g.matchMedia('(prefers-reduced-motion: reduce)').matches);   // użytkownik prosi o brak animacji: bez autostartu
  function def(nazwa, k) { reg[nazwa] = k; }
  function montuj(host, nazwa, opc) {
    var k = reg[nazwa];
    if (!k) { host.textContent = 'Brak klocka: ' + nazwa; return null; }
    opc = Object.assign({}, k.domyslne || {}, opc || {});
    if (k.html) { host.innerHTML = ''; k.html(host, opc); return null; }
    var c = document.createElement('canvas');
    c.width = opc.szer || 480; c.height = opc.wys || 300;
    c.style.width = '100%'; c.style.maxWidth = c.width + 'px'; c.style.height = 'auto';
    c.setAttribute('role', 'img');
    c.setAttribute('aria-label', (opc.opis || k.opis || nazwa));
    host.innerHTML = ''; host.appendChild(c);
    var stan = Object.assign({}, k.stan0 ? k.stan0(opc) : {}, {opc: opc});
    var ctx = c.getContext('2d'), t0 = performance.now(), grane = false;   // start() dodaje klocek do wspólnego zegara (IO albo od razu)
    function klatka(now) {
      try { k.rysuj(ctx, c.width, c.height, stan, (now - t0) / 1000, opc); } catch (e) { }
    }
    function start() { if (!grane) { grane = true; t0 = performance.now() - (stan._t || 0) * 1000; zegar.dodaj(klatka); } }
    function stop() { if (grane) { stan._t = (performance.now() - t0) / 1000; } grane = false; zegar.usun(klatka); }
    c.addEventListener('click', function () { grane ? stop() : start(); });
    if ('IntersectionObserver' in g && !RM_) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting ? start() : stop(); }); });
      io.observe(c);
    } else if (!RM_) { start(); }
    k.rysuj(ctx, c.width, c.height, stan, 0, opc);
    return {stop: stop, start: start, stan: stan, canvas: c};
  }
  g.KLOCKI = {def: def, montuj: montuj, zegar: zegar, nazwy: function () { return Object.keys(reg); }};
})(window);
