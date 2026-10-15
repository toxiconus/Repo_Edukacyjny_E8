/* KLOCEK: molekula-2d — model cząsteczki 2D w SVG (bez zależności), z opcjonalnie wyróżnioną grupą i kwaśnym H.
   Renderer: mini-silnik-2d.js (MiniSilnik2D.molekula) — włączony w ten plik bez zmian.
   Opcje (w lekcji): mol="kwas-octowy"  klucz z DANE (dodawać kolejne cząsteczki w tym samym formacie)
                     grupa="1"  pokaż przerywaną ramkę grupy (domyślnie 1; 0 = wyłączona)
                     kwas="1"   pokaż czerwony pierścień wokół kwaśnego H (domyślnie 1; 0 = wyłączony)
   Tryb html: klocek wstawia SVG bezpośrednio (bez canvas), więc działa w lekkiej lekcji. */

/* ---- renderer (mini-silnik-2d.js, bez zmian) ---- */
/* mini-silnik-2d.js — lekki rysownik cząsteczek 2D (SVG), bez zależności.
 * Użycie: const svg = MiniSilnik2D.molekula(dane, {vb:[520,300]}); host.innerHTML = svg;
 * dane = { atoms:[[pierwiastek, x, y], ...], bonds:[[i, j, krotność], ...],
 *          groups:[{ids:[...], l:'–COOH', c:'#kolor'}], acid:[indeks atomu kwaśnego] }
 */
(function (global) {
  'use strict';
  var ELEM = {
    C: { c1: '#94a3b8', c2: '#475569', s: '#1e293b', t: '#ffffff', r: 24 },
    H: { c1: '#ffffff', c2: '#e2e8f0', s: '#64748b', t: '#0f172a', r: 15 },
    O: { c1: '#fca5a5', c2: '#dc2626', s: '#991b1b', t: '#ffffff', r: 24 }
  };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function molekula(mol, opt) {
    opt = opt || {};
    var vb = opt.vb || [520, 300];
    var out = [];
    out.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + vb[0] + ' ' + vb[1] + '" role="img" aria-label="' + esc(opt.opis || 'Model cząsteczki 2D') + '">');
    // gradienty atomów
    var seen = {};
    out.push('<defs>');
    (mol.atoms || []).forEach(function (a) {
      var E = ELEM[a[0]]; if (!E || seen[a[0]]) return; seen[a[0]] = true;
      out.push('<radialGradient id="mg-' + a[0] + '" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="' + E.c1 + '"/><stop offset="1" stop-color="' + E.c2 + '"/></radialGradient>');
    });
    out.push('</defs>');
    // podświetlone grupy
    (mol.groups || []).forEach(function (g) {
      var xs = g.ids.map(function (i) { return mol.atoms[i][1]; });
      var ys = g.ids.map(function (i) { return mol.atoms[i][2]; });
      var x = Math.min.apply(null, xs) - 42, y = Math.min.apply(null, ys) - 42;
      var w = Math.max.apply(null, xs) + 42 - x, h = Math.max.apply(null, ys) + 42 - y;
      out.push('<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="14" fill="' + g.c + '" fill-opacity=".09" stroke="' + g.c + '" stroke-width="2" stroke-dasharray="7 5"/>');
      out.push('<text x="' + (x + w / 2) + '" y="' + (y - 8) + '" text-anchor="middle" font-size="13" font-weight="800" fill="' + g.c + '">' + esc(g.l) + '</text>');
    });
    // wiązania (podwójne jako dwie linie)
    (mol.bonds || []).forEach(function (b) {
      var p = mol.atoms[b[0]], q = mol.atoms[b[1]], o = b[2];
      var dx = q[1] - p[1], dy = q[2] - p[2], L = Math.hypot(dx, dy);
      var nx = -dy / L, ny = dx / L;
      var offs = o === 2 ? [-4.5, 4.5] : [0];
      offs.forEach(function (f) {
        out.push('<line x1="' + (p[1] + nx * f) + '" y1="' + (p[2] + ny * f) + '" x2="' + (q[1] + nx * f) + '" y2="' + (q[2] + ny * f) + '" stroke="#5c6c73" stroke-width="6" stroke-linecap="round"/>');
      });
    });
    // atomy
    (mol.atoms || []).forEach(function (a, i) {
      var E = ELEM[a[0]] || { r: 20, s: '#64748b', t: '#0f172a' };
      out.push('<circle cx="' + a[1] + '" cy="' + a[2] + '" r="' + E.r + '" fill="url(#mg-' + a[0] + ')" stroke="' + E.s + '" stroke-width="2.5"/>');
      out.push('<text x="' + a[1] + '" y="' + a[2] + '" text-anchor="middle" dominant-baseline="central" font-size="' + (a[0] === 'H' ? 14 : 17) + '" font-weight="800" fill="' + E.t + '">' + esc(a[0]) + '</text>');
      if (mol.acid && mol.acid.indexOf(i) >= 0) {
        out.push('<circle cx="' + a[1] + '" cy="' + a[2] + '" r="' + (E.r + 9) + '" fill="none" stroke="#b83a45" stroke-width="3"/>');
      }
    });
    out.push('</svg>');
    return out.join('');
  }
  var api = { molekula: molekula, ELEM: ELEM };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.MiniSilnik2D = api;
})(typeof window !== 'undefined' ? window : globalThis);


/* ---- dane cząsteczek (format: atoms, bonds, groups, acid) ---- */
(function () {
  var DANE = {
    'kwas-octowy': {
      opis: 'Kwas octowy CH₃COOH: fioletowa ramka obejmuje grupę –COOH; czerwony pierścień wskazuje kwaśny H.',
      atoms: [['C',150,145],['H',95,80],['H',65,150],['H',95,215],['C',270,145],['O',335,215],['O',335,75],['H',430,65]],
      bonds: [[0,1,1],[0,2,1],[0,3,1],[0,4,1],[4,5,2],[4,6,1],[6,7,1]],
      groups: [{ ids:[4,5,6,7], l:'–COOH', c:'#6b3fa0' }],
      acid: [7]
    },
    'eten': {
      opis: 'Eten C₂H₄: podwójne wiązanie C=C (dwie linie) łączy dwa atomy węgla; każdy węgiel ma po dwa wodory.',
      atoms: [['C',200,150],['C',320,150],['H',140,100],['H',140,200],['H',380,100],['H',380,200]],
      bonds: [[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]],
      groups: [{ ids:[0,1], l:'C=C', c:'#0e7490' }],
      acid: []
    },
    'etanol': {
      opis: 'Etanol C₂H₅OH: grupa –OH (tlen i wodór) przy drugim atomie węgla; ramka wskazuje grupę hydroksylową.',
      atoms: [['C',110,150],['C',230,150],['O',330,150],['H',390,110],['H',60,100],['H',60,200],['H',110,235],['H',190,95],['H',265,235]],
      bonds: [[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]],
      groups: [{ ids:[2,3], l:'–OH', c:'#0e7490' }],
      acid: []
    }
  };

  KLOCKI.def('molekula-2d', {
    opis: 'Model cząsteczki 2D: atomy i wiązania, opcjonalnie wyróżniona grupa funkcyjna i kwaśny atom H.',
    domyslne: {mol: 'kwas-octowy', grupa: 1, kwas: 1},
    stan0: function () { return {}; },
    html: function (host, opc) {
      var base = DANE[opc.mol] || DANE['kwas-octowy'];
      var mol = {
        atoms: base.atoms, bonds: base.bonds,
        groups: Number(opc.grupa) !== 0 ? base.groups : [],
        acid: Number(opc.kwas) !== 0 ? base.acid : []
      };
      var svg = MiniSilnik2D.molekula(mol, {vb: [520, 300], opis: base.opis});
      svg = svg.replace('<svg ', '<svg width="100%" style="max-width:520px;height:auto;display:block;margin:0 auto" ');
      host.innerHTML = svg;
    }
  });
})();
