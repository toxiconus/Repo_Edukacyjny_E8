/* KLOCEK: krzyzowka-mendla — szachownica Punnetta: rodzice, gamety, pola do odsłonięcia, stosunek genotypów i fenotypów.
   Opcje: krzyzowki = lista po przecinku, np. "AA×aa,Aa×Aa,Aa×aa,AA×Aa" (jedna cecha) albo "AaBb×AaBb" (dihybryda 4×4),
          start = indeks pierwszej krzyżówki (domyślnie 1), cechy = "gładkie:pomarszczone" (dominująca:recesywna dla pierwszego genu).
   Kliknięcie pola odsłania genotyp; „Pokaż wszystkie pola” odsłania całą szachownicę. */
(function () {
  function gamety(g) {
    var par = g.match(/../g) || [], wyn = [''];
    par.forEach(function (p) { var n = []; wyn.forEach(function (w) { n.push(w + p[0]); n.push(w + p[1]); }); wyn = n; });
    var u = {}; return wyn.filter(function (x) { return u[x] ? false : (u[x] = 1); });
  }
  function polacz(a, b) {   // genotyp potomka: dla każdego genu para posortowana (wielka litera pierwsza)
    var s = '';
    for (var i = 0; i < a.length; i++) s += [a[i], b[i]].sort().join('');
    return s;
  }
  KLOCKI.def('krzyzowka-mendla', {
    opis: 'Szachownica Punnetta: gamety rodziców, genotypy potomstwa i stosunek fenotypów.',
    domyslne: {krzyzowki: 'AA×aa,Aa×Aa,Aa×aa,AA×Aa', start: 1, cechy: 'gładkie:pomarszczone'},
    html: function (host, opc) {
      var lista = String(opc.krzyzowki).split(',').map(function (t) { return t.trim().split('×'); }).filter(function (p) { return p.length === 2; });
      var cechy = String(opc.cechy).split(':'), ci = Math.min(Number(opc.start) || 0, lista.length - 1), pokaz = {}, wyb = null;
      host.style.display = 'block';
      var chipy = document.createElement('div'); chipy.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px';
      var scena = document.createElement('div'), wynik = document.createElement('div');
      wynik.style.cssText = 'font-size:14px;margin-top:8px;display:grid;gap:4px';
      host.appendChild(chipy); host.appendChild(scena); host.appendChild(wynik);
      var CH = 'border:1px solid var(--accent,#0d6868);border-radius:99px;padding:4px 12px;font:600 13px system-ui,sans-serif;cursor:pointer;min-height:0;height:auto;width:auto;flex:none;line-height:1.3;margin:0;box-shadow:none;';
      function stylChip(b, on) { b.style.cssText = CH + (on ? 'background:var(--accent,#0d6868);color:#fff' : 'background:var(--surface,#fff);color:var(--accent,#0d6868)'); }
      var przyciski = lista.map(function (p, i) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = p[0] + ' × ' + p[1];
        b.addEventListener('click', function () { ci = i; pokaz = {}; wyb = null; rys(); });
        chipy.appendChild(b); return b;
      });
      var wszystko = document.createElement('button'); wszystko.type = 'button'; wszystko.textContent = 'Pokaż wszystkie pola';
      wszystko.addEventListener('click', function () { pokaz = {all: 1}; rys(); });
      chipy.appendChild(wszystko); stylChip(wszystko, false);
      function kolAl(c) { return c === c.toUpperCase() ? 'var(--accent,#0d6868)' : 'var(--c-warn,#b45309)'; }
      function alleleHtml(g) { return g.split('').map(function (c) { return '<span style="color:' + kolAl(c) + ';font-weight:700">' + c + '</span>'; }).join(''); }
      function rys() {
        przyciski.forEach(function (b, i) { stylChip(b, i === ci); });
        var p1 = lista[ci][0], p2 = lista[ci][1], g1 = gamety(p1), g2 = gamety(p2);
        var th = 'padding:4px 8px;border:1px solid var(--border,#cbd5e1);text-align:center;font-size:14px;background:var(--surface-soft,#f1f5f9)';
        var td = 'padding:6px 8px;border:1px solid var(--border,#cbd5e1);text-align:center;font-size:14px;cursor:pointer;min-width:40px';
        var h = '<div style="font-size:14px;margin:0 0 6px">Rodzic 1 (' + alleleHtml(p1) + '): gamety ' + g1.map(alleleHtml).join(', ') + '<br>Rodzic 2 (' + alleleHtml(p2) + '): gamety ' + g2.map(alleleHtml).join(', ') + '</div>';
        h += '<table style="border-collapse:collapse;margin:0 auto 6px"><tr><th style="' + th + '"></th>' + g1.map(function (g) { return '<th style="' + th + '">' + alleleHtml(g) + '</th>'; }).join('') + '</tr>';
        var gt = {}, fen = {}, liczba = 0;
        g2.forEach(function (b, r) {
          h += '<tr><th style="' + th + '">' + alleleHtml(b) + '</th>';
          g1.forEach(function (a, c) {
            var g = polacz(a, b), k = r + '_' + c, widoczne = pokaz.all || pokaz[k], sel = wyb === k;
            var f = g.match(/../g).map(function (x) { return /[A-Z]/.test(x) ? 'D' : 'r'; }).join('');
            gt[g] = (gt[g] || 0) + 1; fen[f] = (fen[f] || 0) + 1; liczba++;
            h += '<td data-k="' + k + '" style="' + td + (sel ? ';outline:2px solid var(--accent,#0d6868)' : '') + '">' + (widoczne ? alleleHtml(g) : '?') + '</td>';
          });
          h += '</tr>';
        });
        scena.innerHTML = h + '</table>';
        [].forEach.call(scena.querySelectorAll('td'), function (t) { t.addEventListener('click', function () { pokaz[t.dataset.k] = 1; wyb = t.dataset.k; rys(); }); });
        var gtxt = Object.keys(gt).map(function (g) { return gt[g] + ' ' + g; }).join(' : ');
        var fk = Object.keys(fen), ftxt;
        if (p1.length === 2) { var d = fen.D || 0; ftxt = '<b>' + d + ' : ' + (liczba - d) + '</b> (' + cechy[0] + ' : ' + cechy[1] + ')' + (d === liczba ? ' — wszystkie ' + cechy[0] : ''); }
        else { ftxt = '<b>' + fk.sort().map(function (k) { return fen[k]; }).join(' : ') + '</b> (cecha 1 × cecha 2: dominująca/recesywna)'; }
        wynik.innerHTML = '<div>Genotypy: <b>' + gtxt + '</b></div><div>Fenotypy: ' + ftxt + '</div>';
      }
      rys();
    }
  });
})();
