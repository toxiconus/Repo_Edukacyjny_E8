/* ruch_che.js — mały zamiennik CHE.MOTION dla klocków portowanych z visual-library: CHE.MOTION.add(canvas, (ctx,w,h,t)=>…) + wake().
   Pętla rAF działa tylko, gdy canvas jest widoczny; rozmiar = szerokość elementu × data-h; t w sekundach od startu. */
(function () {
  var C = window.CHE = window.CHE || {};
  if (C.MOTION && C.MOTION.add) return;
  var L = [], raf = 0, last = 0;
  function krok(now) {
    raf = 0; var any = false;
    L.forEach(function (o) {
      if (!o.vis || !o.cv.isConnected) return; any = true;
      var cv = o.cv, d = Math.min(2, window.devicePixelRatio || 1), w = cv.clientWidth || 600, h = +cv.dataset.h || 300;
      if (cv.width !== Math.round(w * d) || cv.height !== Math.round(h * d)) { cv.width = Math.round(w * d); cv.height = Math.round(h * d); cv.style.height = h + 'px'; cv.style.width = '100%'; }
      var x = cv.getContext('2d'); x.setTransform(d, 0, 0, d, 0, 0); x.clearRect(0, 0, w, h);
      o.t += Math.min(.05, (now - last) / 1000); o.fn(x, w, h, o.t);
    });
    last = now; if (any) raf = requestAnimationFrame(krok);
  }
  function wake() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(krok); } }
  C.MOTION = {
    add: function (cv, fn) {
      var o = {cv: cv, fn: fn, t: 0, vis: false}; L.push(o);
      if (window.IntersectionObserver) new IntersectionObserver(function (e) { o.vis = e[0].isIntersecting; if (o.vis) wake(); }).observe(cv); else { o.vis = true; wake(); }
    },
    wake: wake
  };
})();
