/* KLOCKI — wspólne narzędzia (kolejność: pierwsze w manifeście). Wyciągnięte z animacji P01. */
/* ---------------------------- narzędzia ---------------------------- */
var RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function sm(v) { v = clamp(v, 0, 1); return v * v * (3 - 2 * v); }
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function hex2rgb(h) { var n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
function rgba(h, a) { var c = hex2rgb(h); return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
function mixHex(a, b, k) {
  var A = hex2rgb(a), B = hex2rgb(b);
  return '#' + [0, 1, 2].map(function (i) { return ('0' + Math.round(A[i] + (B[i] - A[i]) * k).toString(16)).slice(-2); }).join('');
}
function rr(x, a, b, w, h, r) {
  x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r);
  x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath();
}


/* ---------------------------- pętla animacji ---------------------------- */
// jeden zegar: KLOCKI.zegar (klocki.js); uchwyt h ma metodę krok(dt)
function wlacz(h) { if (!h._z) h._z = function (now, dt) { h.krok(dt); }; KLOCKI.zegar.dodaj(h._z); }
function wylacz(h) { if (h._z) KLOCKI.zegar.usun(h._z); }
function podepnij(canvas, h) {
  h.rysuj();
  if ('IntersectionObserver' in window && !RM) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting ? wlacz(h) : wylacz(h); }); }, {threshold: .05}).observe(canvas);
  } else if (!RM) wlacz(h);
}


function parsujListe(txt, dozwolone, domyslne) {
  var l = String(txt || '').split(',').map(function (s) { return s.trim(); }).filter(function (s) { return dozwolone[s]; });
  return (l.length ? l : domyslne).slice(0, 3);
}


/* Wybór pierwiastka: tylko symbole, a znacznik ▸ pokazuje, że lista się rozwija (bez pełnych nazw obok). */
function wyborSymbole(grupy, start, onChange, etykieta) {
  var box = el('details', 'wyb-sym'), sum = el('summary', null), cur = el('span', 'wyb-cur', start);
  sum.appendChild(cur); sum.appendChild(el('span', 'wyb-tri', '▸')); box.appendChild(sum);
  var lst = el('div', 'wyb-lista'), btns = [];
  lst.setAttribute('role', 'listbox'); lst.setAttribute('aria-label', etykieta || 'Wybór pierwiastka');
  var NAG = {1: 'Litowce', 2: 'Berylowce', 3: 'Tlenki berylowców'};
  Object.keys(grupy).forEach(function (g) {
    var w = el('div', 'wyb-grupa'); w.appendChild(el('span', 'wyb-g', NAG[g] || ('grupa ' + g)));
    grupy[g].forEach(function (s) {
      var b = el('button', 'wyb-sy', s); b.type = 'button'; b.setAttribute('data-sym', s);
      b.setAttribute('title', cap(NAZ[SYM.indexOf(s)] || s));
      b.addEventListener('click', function () { ustaw(s); box.open = false; onChange(s); });
      w.appendChild(b); btns.push(b);
    });
    lst.appendChild(w);
  });
  box.appendChild(lst);
  function ustaw(s) { cur.textContent = s; btns.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-sym') === s ? 'true' : 'false'); }); }
  ustaw(start);
  return {el: box, ustaw: ustaw};
}
