/* KLOCEK: profil-energii — wykres energii reakcji: substraty → szczyt Eₐ → produkty; egzo- i endotermiczna, katalizator obniża Eₐ.
   Animacja: kulka „przechodzi” reakcję w pętli, gdy figura jest widoczna. Opcje: typ (egzo | endo). Wymaga ui_klocki.js. */
(function () {
  var PRZ = {
    egzo: {nazwa: 'Reakcja egzotermiczna', przyklad: '2 H₂ + O₂ → 2 H₂O  (ΔH = −572 kJ)', e0: 60, ea: 160, e1: 20, op: 'Produkty mają mniej energii niż substraty: różnica trafia do otoczenia jako ciepło (ΔH < 0).'},
    endo: {nazwa: 'Reakcja endotermiczna', przyklad: 'CaCO₃ → CaO + CO₂  (ΔH = +178 kJ)', e0: 40, ea: 150, e1: 95, op: 'Produkty mają więcej energii niż substraty: reakcja pobiera ciepło z otoczenia (ΔH > 0).'}
  };
  function kr(e0, ep, e1, x) {   // krzywa: gładka gaussowska górka między e0 i e1
    var base = e0 + (e1 - e0) * (1 / (1 + Math.exp(-14 * (x - .5))));
    return base + (ep - Math.max(e0, e1)) * Math.exp(-Math.pow((x - .5) / .17, 2));
  }
  KLOCKI.def('profil-energii', {
    opis: 'Profil energii reakcji: krzywa od substratów przez energię aktywacji do produktów; różnica poziomów to ΔH; katalizator obniża Eₐ.',
    domyslne: {typ: 'egzo'},
    html: function (host, opc) {
      var U = KLOCKI.ui, typ = opc.typ === 'endo' ? 'endo' : 'egzo', kat = false;
      host.style.display = 'block';
      var bar = document.createElement('div'); bar.style.cssText = 'display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px';
      var bE = U.chip('egzotermiczna', typ === 'egzo', function () { typ = 'egzo'; odsw(); }), bN = U.chip('endotermiczna', typ === 'endo', function () { typ = 'endo'; odsw(); });
      var bK = U.chip('katalizator', false, function () { kat = !kat; odsw(); });
      bar.append(bE, bN, bK);
      var svg = document.createElement('div'), info = document.createElement('div'); info.style.cssText = 'font-size:14px;margin-top:6px';
      host.append(bar, svg, info);
      var W = 560, H = 300, L = 60, R = 30, T = 20, B = 40, bx = 0, by = 0;
      function X(x) { return L + x * (W - L - R); } function Y(e) { return H - B - e / 200 * (H - B - T); }
      function odsw() {
        U.zaznacz(bE, typ === 'egzo'); U.zaznacz(bN, typ === 'endo'); U.zaznacz(bK, kat);
        var p = PRZ[typ], ea = kat ? p.e0 + (p.ea - p.e0) * .55 : p.ea, pts = [];
        for (var i = 0; i <= 80; i++) { var x = i / 80; pts.push(X(x).toFixed(1) + ',' + Y(kr(p.e0, ea, p.e1, x)).toFixed(1)); }
        var yp = Y(ea);
        svg.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="max-width:640px;display:block" role="img" aria-label="' + p.nazwa + ': wykres energii od postępu reakcji">' +
          '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) + '" stroke="currentColor"/><line x1="' + L + '" y1="' + (H - B) + '" x2="' + (W - R) + '" y2="' + (H - B) + '" stroke="currentColor"/>' +
          '<text x="14" y="' + (T + 6) + '" font-size="12" fill="currentColor">energia</text><text x="' + (W - R - 110) + '" y="' + (H - 14) + '" font-size="12" fill="currentColor">postęp reakcji →</text>' +
          '<line x1="' + X(0) + '" y1="' + Y(p.e0) + '" x2="' + X(.5) + '" y2="' + Y(p.e0) + '" stroke="#64748b" stroke-dasharray="4 4"/>' +
          '<line x1="' + X(.5) + '" y1="' + Y(p.e1) + '" x2="' + X(1) + '" y2="' + Y(p.e1) + '" stroke="#64748b" stroke-dasharray="4 4"/>' +
          '<polyline points="' + pts.join(' ') + '" fill="none" stroke="' + (kat ? '#16a34a' : '#2563eb') + '" stroke-width="3"/>' +
          '<text x="' + (X(0) + 6) + '" y="' + (Y(p.e0) - 8) + '" font-size="13" fill="currentColor">substraty</text><text x="' + (X(.62)) + '" y="' + (Y(p.e1) - 8) + '" font-size="13" fill="currentColor">produkty</text>' +
          '<line x1="' + X(.5) + '" y1="' + Y(p.e0 > p.e1 ? p.e0 : p.e1) + '" x2="' + X(.5) + '" y2="' + (yp + 2) + '" stroke="#dc2626" stroke-width="2" marker-end="url(#ar)"/>' +
          '<text x="' + (X(.5) + 8) + '" y="' + ((yp + Y(Math.max(p.e0, p.e1))) / 2 + 4) + '" font-size="13" fill="#dc2626">Eₐ' + (kat ? ' (z katalizatorem)' : '') + '</text>' +
          '<line x1="' + (X(.96)) + '" y1="' + Y(p.e0) + '" x2="' + X(.96) + '" y2="' + Y(p.e1) + '" stroke="#16a34a" stroke-width="2"/>' +
          '<text x="' + (X(.96) - 64) + '" y="' + ((Y(p.e0) + Y(p.e1)) / 2 + 4) + '" font-size="13" fill="#16a34a">ΔH ' + (typ === 'egzo' ? '< 0' : '> 0') + '</text>' +
          '<circle class="pe-k" r="7" fill="#f59e0b" stroke="#92400e" stroke-width="1.5"/></svg>';
        info.innerHTML = '<b>' + p.nazwa + '</b> — ' + p.przyklad + '<br>' + p.op + (kat ? '<br>Katalizator obniża energię aktywacji Eₐ, ale <b>nie zmienia ΔH</b> ani położenia substratów i produktów.' : '');
        bx = 0;
      }
      odsw();
      U.anim(host, function (dt) {
        bx = (bx + dt * .2) % 1.15; var x = Math.min(bx, 1), p = PRZ[typ], ea = kat ? p.e0 + (p.ea - p.e0) * .55 : p.ea, k = svg.querySelector('.pe-k');
        if (k) { k.setAttribute('cx', X(x)); k.setAttribute('cy', Y(kr(p.e0, ea, p.e1, x)) - 7); }
      });
    }
  });
})();
