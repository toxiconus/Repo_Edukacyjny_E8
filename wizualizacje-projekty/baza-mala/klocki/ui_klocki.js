/* ui_klocki.js — wspólne drobiazgi interfejsu dla klocków HTML/SVG (przyciski-chipy, suwak, autostart animacji w widoku).
   KLOCKI.ui.btn(tekst, akcja) · .chip(tekst, aktywny, akcja) · .suwak(etykieta, min, max, krok, wartosc, akcja) · .anim(host, krok(dt, t)) → uchwyt {start, stop}. */
(function () {
  var BTN = 'font:inherit;font-size:13px;padding:5px 11px;border:1px solid var(--border-strong,#94a3b8);border-radius:999px;background:var(--surface,#fff);color:inherit;cursor:pointer;margin:2px';
  var ui = {
    BTN: BTN,
    btn: function (t, f, tytul) { var b = document.createElement('button'); b.type = 'button'; b.style.cssText = BTN; b.innerHTML = t; if (tytul) b.title = tytul; b.addEventListener('click', f); return b; },
    chip: function (t, on, f) { var b = ui.btn(t, f); ui.zaznacz(b, on); return b; },
    zaznacz: function (b, on) { b.style.background = on ? 'var(--accent,#0d6868)' : 'var(--surface,#fff)'; b.style.color = on ? '#fff' : 'inherit'; b.style.borderColor = on ? 'var(--accent,#0d6868)' : 'var(--border-strong,#94a3b8)'; },
    suwak: function (et, mn, mx, st, w, f) {
      var l = document.createElement('label'); l.style.cssText = 'display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:14px;margin:4px 0';
      l.innerHTML = '<span style="min-width:120px">' + et + '</span><input type="range" min="' + mn + '" max="' + mx + '" step="' + st + '" value="' + w + '" style="flex:1;min-width:140px;accent-color:var(--accent,#0d6868)"><b class="sv" style="min-width:64px"></b>';
      var i = l.querySelector('input'), v = l.querySelector('.sv');
      i.addEventListener('input', function () { f(+i.value, v); }); f(+i.value, v); return l;
    },
    /* animacja startująca, gdy host jest widoczny; krok(dt_s, t_s). Reduced motion: jedna klatka. */
    anim: function (host, krok) {
      var raf = 0, t = 0, last = 0, on = false;
      function p(now) { var dt = Math.min(.05, (now - last) / 1000); last = now; t += dt; krok(dt, t); raf = requestAnimationFrame(p); }
      var h = {
        start: function () { if (on) return; on = true; last = performance.now(); raf = requestAnimationFrame(p); },
        stop: function () { on = false; cancelAnimationFrame(raf); },
        t: function () { return t; }
      };
      if (typeof RM !== 'undefined' && RM) { krok(0, 0); return h; }
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting ? h.start() : h.stop(); }); }, {threshold: .05}).observe(host);
      else h.start();
      return h;
    }
  };
  window.KLOCKI.ui = ui;
})();
