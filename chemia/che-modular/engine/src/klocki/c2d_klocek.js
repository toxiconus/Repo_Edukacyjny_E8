/* KLOCEK: wzor-2d — wzór strukturalny 2D z SMILES, z zaznaczonymi grupami funkcyjnymi.
   Opcje w lekcji:
     smiles="CC(=O)O"       dowolny SMILES (C N O S F Cl Br, małe c n o s = aromat, cyfry = pierścienie, ( ) - = #)
     grupa="all"            'all' | 'none' | lista typów po przecinku: COOH,ester,CHO,C=O,OH,eter,NH2,NH,NR,X,CN,C=C,C≡C,Ar
     kulki="0"              1 = model kulkowy zamiast wzoru szkieletowego
     kat="0"                1 = kąty między wiązaniami
     pary="0"               1 = wolne pary elektronowe
     kwas="1"               0 = bez pierścienia przy kwaśnym H
     walencja="0"           1 = czerwona kropka przy atomie o niezgodnej walencji
     interaktywny="0"       1 = klik/Enter na atom: opis (sąsiedzi, σ/π, geometria), Esc czyści
   Zależności (kolejność w manifeście): klocki.js, pomocnicze.js, c2d_core.js, c2d_grupy.js, c2d_wzor.js, c2d_klocek.js */
(function () {
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); }
  var KROTNOSC = {1: 'pojedyncze σ', 2: 'podwójne σ+π', 3: 'potrójne σ+2π'};
  function opcjaWlaczona(v) { return Number(v) === 1; }
  KLOCKI.def('wzor-2d', {
    opis: 'Wzór strukturalny 2D z SMILES: wiązania (pojedyncze, podwójne, potrójne), zaznaczone grupy funkcyjne; opcjonalnie model kulkowy, kąty, wolne pary, znaczniki walencji i klik na atom z opisem.',
    domyslne: {smiles: 'CC(=O)O', grupa: 'all', kulki: 0, kat: 0, pary: 0, kwas: 1, walencja: 0, interaktywny: 0},
    stan0: function () { return {}; },
    html: function (host, opc) {
      var g = String(opc.grupa || 'all').trim(), grupy = g;
      if (g !== 'all' && g !== 'none') grupy = g.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
      var inter = opcjaWlaczona(opc.interaktywny), m, base;
      try {
        m = window.C2D.uklad(window.C2D.parse(String(opc.smiles || 'CC(=O)O')));
      } catch (e) {
        host.innerHTML = '<div style="color:#b91c1c;font-size:14px;padding:8px">Nie mogę narysować „' + esc(opc.smiles) + '”: ' + esc(e.message) + '</div>';
        return;
      }
      base = {grupy: grupy, kulki: opcjaWlaczona(opc.kulki), kat: opcjaWlaczona(opc.kat), pary: opcjaWlaczona(opc.pary),
              kwas: Number(opc.kwas) !== 0, opis: opc.opis || '', walencja: opcjaWlaczona(opc.walencja), interaktywny: inter};
      var sel = -1;
      function info(box) {                                  // panel opisu (tylko w trybie interaktywnym)
        var w = window.C2D.wzor(m), suma = window.C2D.sumy(m), pi = 0;
        m.bonds.forEach(function (b) { pi += b[2] - 1; });
        var t = '<b>' + esc(w.tekst) + '</b> · M ≈ ' + w.masa.toFixed(2).replace('.', ',') + ' g/mol · wiązania σ: ' + m.bonds.length + ', π: ' + pi;
        var zle = [];
        m.atoms.forEach(function (a, i) { if (window.C2D.WALENCJA[a[0]] && suma[i] !== window.C2D.WALENCJA[a[0]]) zle.push(a[0] + (i + 1) + ': ' + suma[i] + ' z ' + window.C2D.WALENCJA[a[0]]); });
        t += '<div style="margin-top:6px;color:' + (zle.length ? '#b91c1c' : '#15803d') + '">' +
             (zle.length ? 'Walencja niezgodna: ' + esc(zle.join(', ')) : 'Walencja zgodna dla wszystkich atomów.') + '</div>';
        if (sel >= 0) {
          var a = m.atoms[sel], sas = [], pis = 0;
          m.bonds.forEach(function (b) {
            var j = b[0] === sel ? b[1] : b[1] === sel ? b[0] : -1;
            if (j >= 0) { sas.push(m.atoms[j][0] + (j + 1) + ' (' + KROTNOSC[b[2]] + ')'); pis += b[2] - 1; }
          });
          t += '<div style="margin-top:6px;color:#475569">Atom ' + esc(a[0] + (sel + 1)) + ' – ' + esc(window.C2D.NAZWA[a[0]] || a[0]) +
               '. Wiązań: ' + suma[sel] + (window.C2D.WALENCJA[a[0]] ? ' z ' + window.C2D.WALENCJA[a[0]] : '') +
               '. σ: ' + sas.length + ', π: ' + pis + '. Sąsiedzi: ' + esc(sas.join(', ')) + '.</div>';
          var gg = window.C2D.geo(m.atoms, m.bonds, sel);
          if (gg) t += '<div style="color:#475569">Geometria: ' + esc(gg.nazwa) + ', hybrydyzacja ' + esc(gg.hyb) + ', kąt ' + String(gg.kat).replace('.', ',') + '°' + (gg.rzut ? ' (w rzucie 2D płasko)' : '') + '.</div>';
        }
        box.innerHTML = t;
      }
      function rysuj() {
        var w = window.C2D.rysuj(m, Object.assign({}, base, {sel: sel}));
        var zawartosc = '<div style="background:var(--surface-1,transparent);border-radius:8px;padding:6px 0">' + w.svg +
          '<div style="text-align:center;font-size:14px;margin-top:4px">' + esc(w.wzor) + ' · M ≈ ' + w.masa.toFixed(2).replace('.', ',') + ' g/mol</div>' +
          (inter ? '<div class="c2d-info" aria-live="polite" style="font-size:14px;line-height:1.5;margin-top:8px;padding:8px 10px;border-radius:8px;background:rgba(148,163,184,.12)"></div>' : '') +
          '</div>';
        host.innerHTML = zawartosc;
        if (inter) info(host.querySelector('.c2d-info'));
      }
      rysuj();
      if (inter) {                                          // klik / Enter na atom zaznacza go; Esc czyści zaznaczenie
        host.addEventListener('click', function (e) {
          var t = e.target.closest && e.target.closest('[data-i]');
          if (!t) return;
          var i = Number(t.getAttribute('data-i'));
          sel = (sel === i) ? -1 : i; rysuj();
          var na = host.querySelector('[data-i="' + i + '"]'); if (na && sel >= 0) na.focus();
        });
        host.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') { sel = -1; rysuj(); return; }
          var t = e.target.closest && e.target.closest('[data-i]');
          if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); var i = Number(t.getAttribute('data-i')); sel = (sel === i) ? -1 : i; rysuj(); }
        });
      }
    }
  });
})();
