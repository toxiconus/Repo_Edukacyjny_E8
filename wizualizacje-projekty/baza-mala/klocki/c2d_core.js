/* C2D CORE — parser SMILES, układ 2D, geometria VSEPR, wzór i masa.
   Bez DOM. Eksport: window.C2D. Pochodzi z molekula_silnik_v3 (refaktor). */
(function (window) {
  'use strict';
  var MIN_W = 520, MIN_H = 300;
  var WALENCJA = {C:4, H:1, O:2, N:3, P:3, S:2, F:1, Cl:1, Br:1};
  var MASA = {C:12.011, H:1.008, O:15.999, N:14.007, P:30.974, S:32.06, F:18.998, Cl:35.45, Br:79.904};
  var NAZWA = {C:'węgiel', H:'wodór', O:'tlen', N:'azot', P:'fosfor', S:'siarka', F:'fluor', Cl:'chlor', Br:'brom'};
  var KOLOR = {P:['#fdba74','#ea580c','#431407'], C:['#94a3b8','#475569','#ffffff'], H:['#ffffff','#64748b','#0f172a'], O:['#fca5a5','#dc2626','#ffffff'], N:['#bfdbfe','#2563eb','#ffffff'], S:['#fde047','#ca8a04','#422006'], F:['#bbf7d0','#16a34a','#14532d'], Cl:['#86efac','#15803d','#052e16'], Br:['#fdba74','#c2410c','#431407']};
  var LONE = {O:2, N:1, P:1, S:2, F:3, Cl:3, Br:3};
  var KROTNOSC = {1:'pojedyncze σ', 2:'podwójne σ+π', 3:'potrójne σ+2π'};
  function sub(n) { return String(n).split('').map(function (c) { return '₀₁₂₃₄₅₆₇₈₉'[c]; }).join(''); }
  function sumy(m) {
    var s = m.atoms.map(function () { return 0; });
    m.bonds.forEach(function (b) { s[b[0]] += b[2]; s[b[1]] += b[2]; });
    return s;
  }
  function wzorSumaryczny(m) {
    var c = {}; m.atoms.forEach(function (a) { c[a[0]] = (c[a[0]] || 0) + 1; });
    var k = Object.keys(c).sort(function (a, b) {          // porządek Hilla: C, H, reszta alfabetycznie
      var w = function (x) { return x === 'C' ? 0 : x === 'H' ? 1 : 2; };
      return w(a) - w(b) || (a < b ? -1 : 1);
    });
    var masa = 0; k.forEach(function (e) { masa += (MASA[e] || 0) * c[e]; });
    return {tekst: k.map(function (e) { return e + (c[e] > 1 ? sub(c[e]) : ''); }).join(''), masa: masa};
  }
  function ramka(m, g) {
    var xs = g.ids.map(function (i) { return m.atoms[i][1]; }), ys = g.ids.map(function (i) { return m.atoms[i][2]; });
    var x = Math.min.apply(null, xs) - 40, y = Math.min.apply(null, ys) - 40;
    return {x: x, y: y, w: Math.max.apply(null, xs) + 40 - x, h: Math.max.apply(null, ys) + 40 - y};
  }
  function dopasuj(m, pokazGrupy) {                         // viewBox liczony z geometrii, nie z liczb na sztywno
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    function dod(x, y) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
    m.atoms.forEach(function (a) { dod(a[1] - 48, a[2] - 48); dod(a[1] + 48, a[2] + 48); });
    if (pokazGrupy) m.groups.forEach(function (g) { var r = ramka(m, g); dod(r.x, r.y - 22); dod(r.x + r.w, r.y + r.h); });
    var w = Math.max(MIN_W, x1 - x0), h = Math.max(MIN_H, y1 - y0);
    return [(x0 + x1) / 2 - w / 2, (y0 + y1) / 2 - h / 2, w, h].map(function (v) { return Math.round(v); }).join(' ');
  }
  function pary(m, i, R) {                                  // wolne pary: kierunki najdalej od wiązań i od siebie
    var a = m.atoms[i], zajete = [], pts = [];
    m.bonds.forEach(function (b) {
      var j = b[0] === i ? b[1] : b[1] === i ? b[0] : -1;
      if (j >= 0) zajete.push(Math.atan2(m.atoms[j][2] - a[2], m.atoms[j][1] - a[1]));
    });
    function dist(x, y) { var v = Math.abs(x - y) % (2 * Math.PI); return v > Math.PI ? 2 * Math.PI - v : v; }
    for (var n = 0; n < LONE[a[0]]; n++) {
      var best = 0, bd = -1;
      for (var k = 0; k < 24; k++) {
        var t = k * Math.PI / 12, md = Math.PI;
        zajete.forEach(function (q) { md = Math.min(md, dist(t, q)); });
        if (md > bd + 1e-6) { bd = md; best = t; }
      }
      zajete.push(best);
      var c = Math.cos(best), s = Math.sin(best);
      [-3.6, 3.6].forEach(function (f) { pts.push([a[1] + c * R - s * f, a[2] + s * R + c * f]); });
    }
    return pts;
  }
  function geo(atoms, bonds, i) {                           // geometria wokół atomu wg VSEPR
    var e = atoms[i][0], n = 0, s = 0, dbl = 0, tri = 0, nH = 0;
    bonds.forEach(function (b) {
      var j = b[0] === i ? b[1] : b[1] === i ? b[0] : -1;
      if (j < 0) return;
      n++; s += b[2]; if (b[2] === 2) dbl++; if (b[2] === 3) tri++; if (atoms[j][0] === 'H') nH++;
    });
    if (n < 2) return null;
    var lone = (LONE[e] && s === WALENCJA[e]) ? LONE[e] : 0, st = n + lone;
    if (tri || (dbl >= 2 && n === 2)) return {kat: 180, nazwa: 'liniowa', hyb: 'sp'};
    if (st === 3) return {kat: 120, nazwa: n === 3 ? 'trygonalna płaska' : 'kątowa', hyb: 'sp²'};
    if (st === 4 && n === 4) return {kat: 109.5, nazwa: 'tetraedryczna', hyb: 'sp³', rzut: true};
    if (st === 4 && n === 3) return {kat: 107, nazwa: 'piramidalna', hyb: 'sp³', rzut: true};
    if (st === 4) return {kat: e === 'S' ? (nH === 2 ? 92 : 100) : (nH === 2 ? 104.5 : 109.5), nazwa: 'kątowa', hyb: 'sp³'};
    return {kat: 120, nazwa: 'trygonalna płaska', hyb: 'sp²'};
  }
  var ZNAKI = ['Cl', 'Br', 'C', 'N', 'O', 'P', 'S', 'F', 'c', 'n', 'o', 's'];
  function zSmiles(txt) {                                   // SMILES: łańcuchy, rozgałęzienia, pierścienie, aromaty (c n o s)
    txt = txt.replace(/\s+/g, '');
    if (!txt) throw new Error('wpisz wzór, np. CC(=O)O lub c1ccccc1');
    var at = [], ar = [], bonds = [], stos = [], otw = {}, prev = -1, kr = 0;
    for (var i = 0; i < txt.length; i++) {
      var c = txt[i];
      if (c === '(') { if (prev < 0) throw new Error('nawias bez atomu'); stos.push(prev); }
      else if (c === ')') { if (!stos.length) throw new Error('nadmiarowy nawias )'); prev = stos.pop(); }
      else if (c === '-' || c === '=' || c === '#') kr = c === '-' ? 1 : c === '=' ? 2 : 3;
      else if (/[1-9]/.test(c)) {
        if (prev < 0) throw new Error('cyfra pierścienia bez atomu');
        if (otw[c]) {
          if (otw[c].a === prev) throw new Error('pętla atomu do siebie');
          bonds.push({a: otw[c].a, b: prev, o: kr || otw[c].k}); delete otw[c];
        } else otw[c] = {a: prev, k: kr};
        kr = 0;
      } else {
        var t = /^(Cl|Br)/.test(txt.substr(i, 2)) ? txt.substr(i, 2) : c;
        if (ZNAKI.indexOf(t) < 0) throw new Error('nieobsługiwany znak „' + c + '”');
        i += t.length - 1;
        if (at.length >= 30) throw new Error('najwyżej 30 atomów ciężkich');
        at.push(t[0].toUpperCase() + t.slice(1)); ar.push(t === t.toLowerCase());
        if (prev >= 0) bonds.push({a: prev, b: at.length - 1, o: kr});
        prev = at.length - 1; kr = 0;
      }
    }
    if (stos.length) throw new Error('niedomknięty nawias (');
    if (Object.keys(otw).length) throw new Error('niedomknięty pierścień (cyfra bez pary)');
    bonds.forEach(function (b) { b.arom = !b.o && ar[b.a] && ar[b.b]; if (!b.o) b.o = 1; });
    return {at: at, ar: ar, bonds: bonds};
  }
  function kekule(p) {                                      // wiązania naprzemienne w pierścieniach aromatycznych
    var need = p.at.map(function (e, i) { return p.ar[i] && (e === 'C' || e === 'N'); });
    var ab = p.bonds.filter(function (b) { return b.arom; }), mt = p.at.map(function () { return -1; });
    function rec(i) {
      while (i < p.at.length && (!need[i] || mt[i] >= 0)) i++;
      if (i >= p.at.length) return true;
      for (var k = 0; k < ab.length; k++) {
        var b = ab[k], j = b.a === i ? b.b : b.b === i ? b.a : -1;
        if (j < 0 || !need[j] || mt[j] >= 0) continue;
        mt[i] = j; mt[j] = i;
        if (rec(i + 1)) { b.o = 2; return true; }
        mt[i] = mt[j] = -1;
      }
      return false;
    }
    if (!rec(0)) throw new Error('nie da się ułożyć wiązań naprzemiennych (np. pirol [nH] nie jest obsługiwany)');
  }
  function pierscienie(p) {                                 // najmniejsze pierścienie (SSSR, zachłannie)
    var n = p.at.length, adj = p.at.map(function () { return []; }), cand = {}, lista = [];
    p.bonds.forEach(function (b, k) { adj[b.a].push([b.b, k]); adj[b.b].push([b.a, k]); });
    p.bonds.forEach(function (b, k) {
      var pr = {}, q = [b.a]; pr[b.a] = -1;
      for (var h = 0; h < q.length && q[h] !== b.b; h++)
        adj[q[h]].forEach(function (e) { if (e[1] !== k && !(e[0] in pr)) { pr[e[0]] = q[h]; q.push(e[0]); } });
      if (!(b.b in pr)) return;
      var r = [], x = b.b; while (x !== -1) { r.push(x); x = pr[x]; }
      var key = r.slice().sort(function (u, v) { return u - v; }).join(',');
      if (!cand[key] && r.length <= 12) { cand[key] = 1; lista.push(r); }
    });
    lista.sort(function (u, v) { return u.length - v.length; });
    var ile = p.bonds.length - n + 1, wyb = [], pok = {};
    lista.forEach(function (r) {
      if (wyb.length >= ile) return;
      var nowe = false, kl = r.map(function (a, i) { var c = r[(i + 1) % r.length]; return Math.min(a, c) + '-' + Math.max(a, c); });
      kl.forEach(function (k) { if (!pok[k]) nowe = true; });
      if (nowe) { kl.forEach(function (k) { pok[k] = 1; }); wyb.push(r); }
    });
    return wyb;
  }
  function uklad(p) {                                       // dopisanie H, współrzędne 2D (łańcuchy + wielokąty foremne), grupy
    kekule(p);
    var atoms = p.at.map(function (e) { return [e, 0, 0]; });
    var bonds = p.bonds.map(function (b) { return [b.a, b.b, b.o]; }), arom = p.bonds.map(function (b) { return !!b.arom; });
    var sum = p.at.map(function () { return 0; }), lin = sum.map(function () { return false; }), dbl = sum.map(function () { return 0; });
    bonds.forEach(function (b) { sum[b[0]] += b[2]; sum[b[1]] += b[2]; if (b[2] === 2) { dbl[b[0]]++; dbl[b[1]]++; } if (b[2] === 3) lin[b[0]] = lin[b[1]] = true; });
    dbl.forEach(function (c, i) { if (c >= 2 && bonds.filter(function (b) { return b[0] === i || b[1] === i; }).length === 2) lin[i] = true; });   // O=C=O (dwa sąsiedzi); S(=O)(=O) już nie
    p.at.forEach(function (e, i) {
      for (var h = Math.max(0, (WALENCJA[e] || 0) - sum[i]); h > 0; h--) { atoms.push(['H', 0, 0]); bonds.push([i, atoms.length - 1, 1]); arom.push(false); }
    });
    var nb = atoms.map(function () { return []; }), placed = atoms.map(function () { return false; });
    bonds.forEach(function (b) { nb[b[0]].push(b[1]); nb[b[1]].push(b[0]); });
    var rs = pierscienie(p), cen = [], rpl = [], ringsOf = atoms.map(function () { return []; });
    rs.forEach(function (r, k) { r.forEach(function (i) { ringsOf[i].push(k); }); });
    var T = Math.PI / 3, B = 70;
    function setPos(i, x, y) { atoms[i][1] = x; atoms[i][2] = y; placed[i] = true; }
    function ringPlace(k, cx, cy, i0, a0, dir) {
      var r = rs[k], m = r.length, R = B / (2 * Math.sin(Math.PI / m));
      for (var t = 0; t < m; t++) { var a = a0 + dir * 2 * Math.PI * t / m, id = r[(i0 + t) % m]; if (!placed[id]) setPos(id, cx + R * Math.cos(a), cy + R * Math.sin(a)); }
      cen[k] = [cx, cy]; rpl[k] = true;
    }
    function system(entry, th) {                            // układ pierścieni od atomu wejścia; zwraca nowe pierścienie
      var k0 = ringsOf[entry].filter(function (k) { return !rpl[k]; })[0], nowe = [k0];
      var m0 = rs[k0].length, R0 = B / (2 * Math.sin(Math.PI / m0));
      ringPlace(k0, atoms[entry][1] + R0 * Math.cos(th), atoms[entry][2] + R0 * Math.sin(th), rs[k0].indexOf(entry), th + Math.PI, 1);
      var zm = true;
      while (zm) {
        zm = false;
        rs.forEach(function (r2, k) {
          if (rpl[k]) return;
          for (var i = 0; i < r2.length; i++) {
            var u = r2[i], v = r2[(i + 1) % r2.length];
            if (!placed[u] || !placed[v]) continue;
            var ref = cen.filter(function (c, kk) { return rpl[kk] && rs[kk].indexOf(u) >= 0 && rs[kk].indexOf(v) >= 0; })[0];
            if (!ref) continue;
            var mx = (atoms[u][1] + atoms[v][1]) / 2, my = (atoms[u][2] + atoms[v][2]) / 2;
            var ex = atoms[v][1] - atoms[u][1], ey = atoms[v][2] - atoms[u][2], L = Math.hypot(ex, ey), nx = -ey / L, ny = ex / L;
            var ap = B / (2 * Math.tan(Math.PI / r2.length)), sg = ((ref[0] - mx) * nx + (ref[1] - my) * ny) > 0 ? -1 : 1;
            var cx = mx + sg * nx * ap, cy = my + sg * ny * ap;
            var au = Math.atan2(atoms[u][2] - cy, atoms[u][1] - cx), av = Math.atan2(atoms[v][2] - cy, atoms[v][1] - cx);
            ringPlace(k, cx, cy, i, au, Math.sin(av - au) > 0 ? 1 : -1);
            nowe.push(k); zm = true; break;
          }
        });
      }
      return nowe;
    }
    function put(i, j, d, s) {
      setPos(j, atoms[i][1] + (atoms[j][0] === 'H' ? 62 : 84) * Math.cos(d), atoms[i][2] + (atoms[j][0] === 'H' ? 62 : 84) * Math.sin(d));
      if (ringsOf[j].some(function (k) { return !rpl[k]; })) pierscien(j, d); else lancuch(j, d, -s, false);
    }
    function pierscien(j, d) { system(j, d).forEach(function (k) { rs[k].forEach(podstawniki); }); }
    function podstawniki(i) {                               // podstawniki atomu pierścienia: na zewnątrz od środka
      var rk = ringsOf[i].filter(function (k) { return rpl[k]; }), cx = 0, cy = 0;
      rk.forEach(function (k) { cx += cen[k][0]; cy += cen[k][1]; });
      var o = Math.atan2(atoms[i][2] - cy / rk.length, atoms[i][1] - cx / rk.length);
      var fr = nb[i].filter(function (j) { return !placed[j]; }), off = fr.length === 1 ? [0] : fr.length === 2 ? [0.62, -0.62] : [0, 0.95, -0.95];
      fr.forEach(function (j, q) { if (off[q] !== undefined) put(i, j, o + off[q], 1); });
    }
    function lancuch(i, th, s, root) {
      var fr = nb[i].filter(function (j) { return !placed[j]; }), n = nb[i].length, g = geo(atoms, bonds, i), R = Math.PI / 180, d;
      if (lin[i]) d = root ? [th, th + Math.PI] : [th];
      else if (n === 2 && g) d = root ? [Math.PI / 2 + g.kat * R / 2, Math.PI / 2 - g.kat * R / 2] : [th + s * (Math.PI - g.kat * R)];
      else if (root && n >= 3) d = nb[i].map(function (x, k) { return th + 2 * Math.PI * k / n; });
      else d = [th + s * T, th - s * T, th + 2 * s * T, th - 2 * s * T, th, th + Math.PI];
      fr.forEach(function (j, k) { if (d[k] !== undefined) put(i, j, d[k], s); });
    }
    setPos(0, 0, 0);
    if (ringsOf[0].length) pierscien(0, 0); else lancuch(0, -Math.PI / 6, 1, true);
    if (!placed.every(Boolean)) throw new Error('ten układ pierścieni (spiro/mostkowy) nie jest obsługiwany');
    atoms.forEach(function (a) { a[1] = Math.round(a[1]); a[2] = Math.round(a[2]); });
    var opis = 'Wzór własny (SMILES), współrzędne wyliczone automatycznie.' + (rs.length ? ' Pierścienie: ' + rs.length + (arom.some(Boolean) ? ', aromatyczne zapisane wiązaniami naprzemiennymi (struktura Kekulégo).' : '.') : '');
    return {opis: opis, atoms: atoms, bonds: bonds, ring: ringsOf.map(function (r) { return r.length > 0; }), arom: arom, rings: rs};
  }
  window.C2D = {
    WALENCJA: WALENCJA, MASA: MASA, NAZWA: NAZWA, KOLOR: KOLOR, LONE: LONE,
    parse: zSmiles, kekule: kekule, pierscienie: pierscienie, uklad: uklad,
    geo: geo, pary: pary, sumy: sumy, wzor: wzorSumaryczny, ramka: ramka,
    dopasuj: dopasuj, sub: sub
  };
})(typeof window !== 'undefined' ? window : globalThis);
