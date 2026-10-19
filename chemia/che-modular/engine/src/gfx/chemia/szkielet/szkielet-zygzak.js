/* szkielet-zygzak — wzór kreskowy łańcucha węgla (zygzak C–C) z opcjonalną grupą na końcu.
   Komponent wielokrotnego użytku. Użycie:
     CHE.GFX.szkieletSVG({ n: 4 })                    → butan (C₄H₁₀ w zapisie kreskowym)
     CHE.GFX.szkieletSVG({ n: 2, koniec: 'OH' })      → etanol
     CHE.GFX.szkieletSVG({ n: 2, koniec: 'COOH' })    → kwas etanowy (bez wiązania C=O na rysunku)
   n = liczba atomów C (≥ 1). Atomy C nie są opisane (konwencja wzoru kreskowego),
   grupa na końcu jest opisana tekstem. Kolor z currentColor, więc działa w jasnym i ciemnym motywie. */
(function (root) {
  function szkieletSVG(o) {
    o = o || {};
    var n = Math.max(1, o.n | 0), dx = 34, dy = 16, pad = 10, r = 3;
    var pts = [];
    for (var i = 0; i < n; i++) pts.push([pad + i * dx, pad + (i % 2 === 0 ? dy : 0) + r]);
    var last = pts[n - 1], koniec = o.koniec ? String(o.koniec) : '';
    var labelW = koniec ? 12 + koniec.length * 9 : 0;
    var W = Math.ceil(last[0] + pad + labelW), H = pad * 2 + dy + r * 2 + 4;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="max-width:' + W + 'px" role="img" ' +
      'aria-label="Wzór kreskowy: ' + n + ' atomów węgla w łańcuchu' + (koniec ? ', na końcu grupa ' + koniec : '') + '">' +
      '<g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none">';
    for (var j = 0; j + 1 < n; j++) {
      s += '<line x1="' + pts[j][0] + '" y1="' + pts[j][1] + '" x2="' + pts[j + 1][0] + '" y2="' + pts[j + 1][1] + '"/>';
    }
    s += '</g>';
    if (koniec) {
      var ex = last[0] + 6, ey = last[1];
      s += '<line x1="' + last[0] + '" y1="' + last[1] + '" x2="' + ex + '" y2="' + ey + '" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
        '<text x="' + (ex + 2) + '" y="' + (ey + 5) + '" font-size="14" fill="currentColor" font-family="system-ui,sans-serif">' + koniec + '</text>';
    }
    return s + '</svg>';
  }
  var api = { szkieletSVG: szkieletSVG };
  root.CHE = root.CHE || {};
  root.CHE.GFX = Object.assign(root.CHE.GFX || {}, api);
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
