/* KLOCKI — lekkie komponenty wielokrotnego użytku dla lekcji (bez silnika).
   Każdy klocek: KLOCKI.def(nazwa, {opis, dane, rysuj(canvas, stan, t)}) — rejestr,
   KLOCKI.montuj(host, nazwa, opcje) — tworzy canvas, autostart gdy widoczny,
   klik zatrzymuje/wznawia. Lekcja wymienia klocki w manifeście (klocki/manifest). */
(function (g) {
  var reg = {};
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
    var ctx = c.getContext('2d'), t0 = performance.now(), grane = true, id = null;
    function klatka(now) {
      try { k.rysuj(ctx, c.width, c.height, stan, (now - t0) / 1000, opc); } catch (e) { }
      if (grane) id = requestAnimationFrame(klatka);
    }
    function start() { if (!grane) { grane = true; t0 = performance.now() - (stan._t || 0) * 1000; id = requestAnimationFrame(klatka); } }
    function stop() { grane = false; if (id) cancelAnimationFrame(id); }
    c.addEventListener('click', function () { grane ? stop() : start(); });
    if ('IntersectionObserver' in g) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting ? start() : stop(); }); });
      io.observe(c);
    } else { start(); }
    k.rysuj(ctx, c.width, c.height, stan, 0, opc);
    return {stop: stop, start: start, stan: stan, canvas: c};
  }
  g.KLOCKI = {def: def, montuj: montuj, nazwy: function () { return Object.keys(reg); }};
})(window);
