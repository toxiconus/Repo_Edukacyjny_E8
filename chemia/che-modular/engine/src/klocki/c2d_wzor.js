/* C2D WZOR — rysunek cząsteczki w SVG (bez DOM poza zwracanym napisem).
   Domyślnie: wzór strukturalny 2D (szkielet): wiązania kreskami, C bez podpisu (poza końcowymi CH₃),
   heteroatomy z podpisem i wodorami (OH, NH₂), typ wiązania przez liczbę kresek (C=O, C≡C).
   Opcje (wszystkie opcjonalne):
     kulki   true  — model kulkowy (wszystkie atomy z kulkami i symbolami)
     grupy   'all' | 'none' | ['COOH','OH',...]  — które ramki grup funkcyjnych
     kwas    true  — czerwony pierścień wokół kwaśnego H (domyślnie true)
     kat     true  — łuki i wartości kątów (VSEPR) przy atomach z dwoma wiązaniami
     pary    true  — wolne pary elektronowe (O, N, halogeny)
   Zwraca: {svg: string, wzor: string, masa: number}. */
(function (window) {
  'use strict';
  var C2D = window.C2D;
  var PROMIEN_C = 9, PROMIEN_LBL = 11;

  function rysuj(m, opt) {
    opt = opt || {};
    var kulki = !!opt.kulki;
    var inter = !!opt.interaktywny, wal = !!opt.walencja;   // opcje dodatkowe: domyślnie wyłączone
    var sel = (typeof opt.sel === 'number') ? opt.sel : -1;
    var E = function (i) { return m.atoms[i][0]; };
    var N = m.atoms.map(function () { return []; });
    m.bonds.forEach(function (b, k) { N[b[0]].push([b[1], b[2], k]); N[b[1]].push([b[0], b[2], k]); });
    var gr = C2D.grupy(m);
    var grupy = opt.grupy === undefined ? 'all' : opt.grupy;
    var widoczneGrupy = gr.groups.filter(function (g) {
      if (grupy === 'none') return false;
      if (grupy === 'all') return true;
      return Array.isArray(grupy) && grupy.indexOf(g.typ) >= 0;
    });
    // które atomy są widoczne
    var widoczny = m.atoms.map(function (a, i) {
      if (kulki) return true;
      if (a[0] !== 'H') return true;
      var przy = N[i][0] ? E(N[i][0][0]) : '';
      return przy !== 'C';           // H przy C ukryte w szkielecie
    });
    function etykieta(i) {
      var e = E(i), nH = N[i].filter(function (x) { return E(x[0]) === 'H'; }).length;
      var heavy = N[i].filter(function (x) { return E(x[0]) !== 'H'; }).length;
      if (kulki) return e;
      if (e === 'C') {
        if (heavy <= 1 && nH > 0) return 'CH' + (nH > 1 ? C2D.sub(nH) : '') + (nH === 3 ? '' : '');
        return null;
      }
      if (e === 'H') return null;
      var hTxt = nH ? 'H' + (nH > 1 ? C2D.sub(nH) : '') : '';
      return heavy === 0 ? hTxt + e : e + hTxt;
    }
    var lbl = m.atoms.map(function (a, i) { return widoczny[i] ? etykieta(i) : null; });
    function promien(i) { return kulki ? (E(i) === 'H' ? 14 : 22) : 0; }
    function skroc(i, dx, dy, len) {
      var r = kulki ? promien(i) + 2 : (lbl[i] ? PROMIEN_LBL : 0);
      return r;
    }
    var out = [];
    m.groups = widoczneGrupy;
    var dop = C2D.dopasuj(m, widoczneGrupy.length > 0);
    var vb = dop.split(' ');
    out.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + dop + '" role="img" aria-label="' + (opt.opis || 'Wzór strukturalny cząsteczki') + '" style="display:block;width:100%;height:auto;max-width:560px;margin:0 auto">');

    // ramki grup
    widoczneGrupy.forEach(function (g) {
      var r = C2D.ramka(m, g);
      out.push('<rect x="' + r.x + '" y="' + r.y + '" width="' + r.w + '" height="' + r.h + '" rx="14" fill="' + g.c + '" fill-opacity=".09" stroke="' + g.c + '" stroke-width="2" stroke-dasharray="7 5"/>');
      out.push('<text x="' + (r.x + r.w / 2) + '" y="' + (r.y - 7) + '" text-anchor="middle" font-size="13" font-weight="500" fill="' + g.c + '">' + g.l + '</text>');
    });

    // wiązania
    m.bonds.forEach(function (b) {
      var i = b[0], j = b[1], o = b[2];
      if (!widoczny[i] || !widoczny[j]) return;
      var p = m.atoms[i], q = m.atoms[j];
      var dx = q[1] - p[1], dy = q[2] - p[2], L = Math.hypot(dx, dy) || 1;
      var ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
      var ri = kulki ? promien(i) + 2 : (lbl[i] ? PROMIEN_LBL : 0);
      var rj = kulki ? promien(j) + 2 : (lbl[j] ? PROMIEN_LBL : 0);
      var x1 = p[1] + ux * ri, y1 = p[2] + uy * ri, x2 = q[1] - ux * rj, y2 = q[2] - uy * rj;
      var offs = o === 3 ? [-6, 0, 6] : (o === 2 ? [-4, 4] : [0]);
      if (o === 2 && !kulki && m.rings) {
        var pier = m.rings.filter(function (r) { return r.indexOf(i) >= 0 && r.indexOf(j) >= 0; })[0];
        if (pier) {
          var cx = 0, cy = 0;
          pier.forEach(function (k) { cx += m.atoms[k][1]; cy += m.atoms[k][2]; });
          cx /= pier.length; cy /= pier.length;
          var mx = (p[1] + q[1]) / 2, my = (p[2] + q[2]) / 2;
          var sg = ((cx - mx) * nx + (cy - my) * ny) > 0 ? 1 : -1;
          offs = [0, sg * 6];
        }
      }
      var st = kulki ? 'stroke-width:6' : 'stroke-width:2.2';
      offs.forEach(function (f) {
        out.push('<line x1="' + (x1 + nx * f).toFixed(1) + '" y1="' + (y1 + ny * f).toFixed(1) + '" x2="' + (x2 + nx * f).toFixed(1) + '" y2="' + (y2 + ny * f).toFixed(1) + '" stroke="#334155" stroke-linecap="round" style="' + st + '"/>');
      });
    });

    // atomy
    m.atoms.forEach(function (a, i) {
      if (!widoczny[i]) return;
      var K = C2D.KOLOR[a[0]] || ['#e2e8f0', '#64748b', '#0f172a'];
      if (kulki) {
        var r = promien(i);
        out.push('<circle cx="' + a[1] + '" cy="' + a[2] + '" r="' + r + '" fill="' + K[0] + '" stroke="' + K[1] + '" stroke-width="2.5"/>');
        out.push('<text x="' + a[1] + '" y="' + a[2] + '" text-anchor="middle" dominant-baseline="central" font-size="' + (a[0] === 'H' ? 14 : 17) + '" font-weight="500" fill="' + K[2] + '">' + a[0] + '</text>');
      } else if (lbl[i]) {
        out.push('<text x="' + a[1] + '" y="' + a[2] + '" text-anchor="middle" dominant-baseline="central" font-size="17" font-weight="500" fill="#0f172a" style="stroke:var(--bg,#ffffff);stroke-width:5px;paint-order:stroke">' + lbl[i] + '</text>');
      }
    });

    // kwaśny H
    if (opt.kwas !== false) m.atoms.forEach(function (a, i) {
      if (widoczny[i] && (gr.acid || []).indexOf(i) >= 0) {
        out.push('<circle cx="' + a[1] + '" cy="' + a[2] + '" r="' + (promien(i) + 9 || 17) + '" fill="none" stroke="#b83a45" stroke-width="3"/>');
      }
    });

    // wolne pary
    if (opt.pary) m.atoms.forEach(function (a, i) {
      if (!C2D.LONE[a[0]] || !widoczny[i]) return;
      C2D.pary(m, i, kulki ? 30 : 24).forEach(function (pt) {
        out.push('<circle cx="' + pt[0].toFixed(1) + '" cy="' + pt[1].toFixed(1) + '" r="2.4" fill="#334155"/>');
      });
    });

    // kąty
    if (opt.kat) m.atoms.forEach(function (a, i) {
      if (!widoczny[i] || E(i) === 'H') return;
      var vis = N[i].filter(function (x) { return widoczny[x[0]]; });
      if (vis.length !== 2) return;
      var g = C2D.geo(m.atoms, m.bonds, i);
      if (!g) return;
      var ang = vis.map(function (x) { return Math.atan2(m.atoms[x[0]][2] - a[2], m.atoms[x[0]][1] - a[1]); });
      var a1 = Math.min(ang[0], ang[1]), a2 = Math.max(ang[0], ang[1]);
      var R = 30, am = (a1 + a2) / 2;
      var big = (a2 - a1) > Math.PI;
      if (big) { var t = a1; a1 = a2; a2 = t + 2 * Math.PI; am = (a1 + a2) / 2; }
      out.push('<path d="M' + (a[1] + R * Math.cos(a1)).toFixed(1) + ' ' + (a[2] + R * Math.sin(a1)).toFixed(1) + ' A' + R + ' ' + R + ' 0 ' + (Math.abs(a2 - a1) > Math.PI ? 1 : 0) + ' 1 ' + (a[1] + R * Math.cos(a2)).toFixed(1) + ' ' + (a[2] + R * Math.sin(a2)).toFixed(1) + '" fill="none" stroke="#64748b" stroke-width="1"/>');
      out.push('<text x="' + (a[1] + (R + 14) * Math.cos(am)).toFixed(1) + '" y="' + (a[2] + (R + 14) * Math.sin(am)).toFixed(1) + '" text-anchor="middle" dominant-baseline="central" font-size="12" fill="#475569">' + String(g.kat).replace('.', ',') + '°</text>');
    });

    // opcje dodatkowe (v3.1): trafienia kliknięcia, zaznaczony atom, znaczniki walencji
    if (inter) m.atoms.forEach(function (a, i) {
      if (!widoczny[i]) return;
      out.push('<circle class="c2d-hit" data-i="' + i + '" tabindex="0" role="button" aria-label="' + (C2D.NAZWA[a[0]] || a[0]) + ' ' + a[0] + (i + 1) + '" cx="' + a[1] + '" cy="' + a[2] + '" r="' + (kulki ? promien(i) + 10 : 22) + '" fill="transparent" style="cursor:pointer"/>');
    });
    if (sel >= 0 && widoczny[sel]) out.push('<circle cx="' + m.atoms[sel][1] + '" cy="' + m.atoms[sel][2] + '" r="' + (kulki ? promien(sel) + 13 : 26) + '" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="4 3"/>');
    if (wal) {
      var sumy = C2D.sumy(m);
      m.atoms.forEach(function (a, i) {
        if (!widoczny[i] || !C2D.WALENCJA[a[0]] || sumy[i] === C2D.WALENCJA[a[0]]) return;
        out.push('<circle cx="' + (a[1] + 15) + '" cy="' + (a[2] - 15) + '" r="5" fill="#b91c1c"/>');
      });
    }
    out.push('</svg>');
    var w = C2D.wzor(m);
    return {svg: out.join(''), wzor: w.tekst, masa: w.masa};
  }

  function zSmiles(smiles, opt) {
    var p = C2D.parse(smiles);
    var m = C2D.uklad(p);
    return rysuj(m, opt);
  }

  window.C2D = window.C2D || {};
  window.C2D.rysuj = rysuj;
  window.C2D.smiles = zSmiles;
})(typeof window !== 'undefined' ? window : globalThis);
