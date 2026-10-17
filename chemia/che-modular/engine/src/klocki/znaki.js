/* Klocek-znaki: promieniowanie (trójlistek ISO 361) i zakaz w szkole. Używane przez każdy klocek z pierwiastkiem promieniotwórczym. */
/* znaki: trójlistek promieniowania (ISO 361) i zakaz (kolba w czerwonym kole) */
function tref(sz) {
  function sek(a) {
    var r1 = 14, r2 = 40, a1 = (a - 30) * Math.PI / 180, a2 = (a + 30) * Math.PI / 180;
    function P(r, t) { return (r * Math.cos(t)).toFixed(1) + ' ' + (-r * Math.sin(t)).toFixed(1); }
    return '<path fill="#111" d="M' + P(r1, a1) + ' L' + P(r2, a1) + ' A' + r2 + ' ' + r2 + ' 0 0 0 ' + P(r2, a2) + ' L' + P(r1, a2) + ' A' + r1 + ' ' + r1 + ' 0 0 1 ' + P(r1, a1) + 'Z"/>';
  }
  return '<svg width="' + sz + '" height="' + sz + '" viewBox="-50 -50 100 100" role="img" aria-label="Znak promieniowania jonizującego"><circle r="48" fill="#f6c300" stroke="#111" stroke-width="3"/>' + sek(90) + sek(210) + sek(330) + '<circle r="8" fill="#111"/></svg>';
}
function zabron(sz) {
  return '<svg width="' + sz + '" height="' + sz + '" viewBox="-50 -50 100 100" role="img" aria-label="Zakaz wykonywania w szkole"><path d="M-14 -26h28M-8 -26v18l-20 34a7 7 0 0 0 6 10h44a7 7 0 0 0 6-10l-20-34v-18" fill="none" stroke="#222" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle r="43" fill="none" stroke="#e5383b" stroke-width="9"/><path d="M-30 -30L30 30" stroke="#e5383b" stroke-width="9" stroke-linecap="round"/></svg>';
}
function zakaz(txt) {
  return '<div class="zak"><span class="zak-ik">' + tref(28) + zabron(28) + '</span><span><b>Promieniotwórczy.</b> ' + txt + '</span></div>';
}

KLOCKI.znak = {tref: tref, zabron: zabron, zakaz: zakaz};
