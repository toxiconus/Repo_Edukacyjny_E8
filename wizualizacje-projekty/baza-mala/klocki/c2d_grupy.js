/* C2D GRUPY — wykrywanie grup funkcyjnych w grafie cząsteczki (po wykonaniu C2D.uklad).
   Wynik: {groups:[{typ, ids, l, c}], acid:[indeksy kwaśnych H]}.
   typ: COOH, ester, CHO, C=O, OH, eter, NH2, NH, NR, X, CN, C=C, C≡C, Ar.
   Dodanie grupy: wpisz nową regułę w tym pliku i dopisz typ do listy w opisie klocka. */
(function (window) {
  'use strict';
  var C2D = window.C2D;
  var KOL = {
    COOH: '#7c3aed', ester: '#9333ea', CHO: '#b45309', 'C=O': '#b45309', OH: '#0e7490',
    eter: '#0f766e', NH2: '#2563eb', NH: '#2563eb', NR: '#2563eb', X: '#15803d',
    CN: '#2563eb', 'C=C': '#0e7490', 'C≡C': '#0e7490', Ar: '#64748b'
  };
  var ETYK = {
    COOH: '–COOH', ester: '–COO–', CHO: '–CHO', 'C=O': 'C=O', OH: '–OH', eter: '–O–',
    NH2: '–NH₂', NH: '–NH–', NR: '–N<', X: '–X', CN: '–C≡N', 'C=C': 'C=C', 'C≡C': 'C≡C', Ar: 'Ar'
  };

  function grupy(m) {
    var E = function (i) { return m.atoms[i][0]; };
    var N = m.atoms.map(function () { return []; });
    m.bonds.forEach(function (b) { N[b[0]].push([b[1], b[2]]); N[b[1]].push([b[0], b[2]]); });
    var wH = function (i) { return N[i].filter(function (x) { return E(x[0]) === 'H'; }).map(function (x) { return x[0]; }); };
    var zaj = {}, g = [], acid = [];
    function dodaj(typ, ids) {
      ids.forEach(function (x) { zaj[x] = 1; });
      g.push({typ: typ, ids: ids, l: ETYK[typ], c: KOL[typ]});
    }

    // grupa karbonylowa C=O (kwas, ester, aldehyd, keton)
    m.atoms.forEach(function (a, i) {
      if (a[0] !== 'C' || zaj[i]) return;
      var dO = N[i].filter(function (x) { return x[1] === 2 && E(x[0]) === 'O'; })[0];
      if (!dO) return;
      var sO = N[i].filter(function (x) { return x[1] === 1 && E(x[0]) === 'O'; })[0];
      var h = wH(i);
      if (sO && wH(sO[0]).length === 1) {
        var hh = wH(sO[0])[0]; acid.push(hh);
        dodaj('COOH', [i, dO[0], sO[0], hh]);
      } else if (sO && N[sO[0]].some(function (y) { return y[0] !== i && E(y[0]) === 'C'; })) {
        dodaj('ester', [i, dO[0], sO[0]]);
      } else if (h.length) {
        dodaj('CHO', [i, dO[0], h[0]]);
      } else {
        dodaj('C=O', [i, dO[0]]);
      }
    });

    // grupy jednowartościowe: OH, eter, aminy, halogeny
    m.atoms.forEach(function (a, i) {
      if (zaj[i]) return;
      var e = a[0], h = wH(i), nC = N[i].filter(function (x) { return E(x[0]) === 'C'; }).length;
      if (e === 'O' && h.length === 1 && N[i].length === 2) dodaj('OH', [i, h[0]]);
      else if (e === 'O' && nC === 2 && N[i].length === 2 && N[i].every(function (x) { return x[1] === 1; })) dodaj('eter', [i]);
      else if (e === 'N' && !N[i].some(function (x) { return x[1] > 1; }) && !m.ring[i]) {
        if (h.length === 2) dodaj('NH2', [i].concat(h));
        else if (h.length === 1 && nC === 2) dodaj('NH', [i, h[0]]);
        else if (h.length === 0 && nC === 3) dodaj('NR', [i]);
      }
      else if ((e === 'F' || e === 'Cl' || e === 'Br') && N[i].length === 1) dodaj('X', [i]);
    });

    // wiązania wielokrotne między atomami węgla i C≡N
    m.bonds.forEach(function (b) {
      var ea = E(b[0]), eb = E(b[1]);
      if (ea === 'C' && eb === 'C' && !m.arom[m.bonds.indexOf(b)] && b[2] === 2 && !zaj[b[0]] && !zaj[b[1]]) dodaj('C=C', [b[0], b[1]]);
      if (ea === 'C' && eb === 'C' && b[2] === 3 && !zaj[b[0]] && !zaj[b[1]]) dodaj('C≡C', [b[0], b[1]]);
      if (((ea === 'C' && eb === 'N') || (ea === 'N' && eb === 'C')) && b[2] === 3 && !zaj[b[0]] && !zaj[b[1]]) dodaj('CN', [b[0], b[1]]);
    });

    // pierścienie aromatyczne (ramka)
    // pierścienie aromatyczne; sklejone (wspólny bok) tworzą jeden układ i jedną ramkę
    var arRings = (m.rings || []).filter(function (r) {
      return m.bonds.some(function (b, k) { return m.arom[k] && r.indexOf(b[0]) >= 0 && r.indexOf(b[1]) >= 0; });
    });
    var uklady = [];
    arRings.forEach(function (r) {
      var zl = uklady.filter(function (u) { return u.some(function (i) { return r.indexOf(i) >= 0; }); });
      var nowy = r.slice();
      zl.forEach(function (u) { nowy = nowy.concat(u); uklady.splice(uklady.indexOf(u), 1); });
      nowy = nowy.filter(function (x, k, a) { return a.indexOf(x) === k; });
      uklady.push(nowy);
    });
    uklady.forEach(function (u) { g.push({typ: 'Ar', ids: u, l: ETYK.Ar, c: KOL.Ar}); });

    return {groups: g, acid: acid};
  }

  window.C2D = window.C2D || {};
  window.C2D.grupy = grupy;
  window.C2D.KOL_GRUP = KOL;
  window.C2D.ETYK_GRUP = ETYK;
})(typeof window !== 'undefined' ? window : globalThis);
