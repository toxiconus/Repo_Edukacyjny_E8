/* KLOCEK: wzor-2d — wzór strukturalny 2D z SMILES, z zaznaczonymi grupami funkcyjnymi.
   Opcje w lekcji:
     smiles="CC(=O)O"       dowolny SMILES (C N O S F Cl Br, małe c n o s = aromat, cyfry = pierścienie, ( ) - = #)
     grupa="all"            'all' | 'none' | lista typów po przecinku: COOH,ester,CHO,C=O,OH,eter,NH2,NH,NR,X,CN,C=C,C≡C,Ar
     kulki="0"              1 = model kulkowy zamiast wzoru szkieletowego
     kat="0"                1 = kąty między wiązaniami
     pary="0"               1 = wolne pary elektronowe
     kwas="1"               0 = bez pierścienia przy kwaśnym H
   Zależności (kolejność w manifeście): klocki.js, pomocnicze.js, c2d_core.js, c2d_grupy.js, c2d_wzor.js, c2d_klocek.js */
(function () {
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); }
  KLOCKI.def('wzor-2d', {
    opis: 'Wzór strukturalny 2D z SMILES: wiązania (pojedyncze, podwójne, potrójne), zaznaczone grupy funkcyjne, opcjonalnie model kulkowy, kąty i wolne pary.',
    domyslne: {smiles: 'CC(=O)O', grupa: 'all', kulki: 0, kat: 0, pary: 0, kwas: 1},
    stan0: function () { return {}; },
    html: function (host, opc) {
      var grupy = 'all';
      var g = String(opc.grupa || 'all').trim();
      if (g !== 'all' && g !== 'none') grupy = g.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
      else grupy = g;
      var wynik;
      try {
        wynik = window.C2D.smiles(String(opc.smiles || 'CC(=O)O'), {
          grupy: grupy, kulki: Number(opc.kulki) === 1, kat: Number(opc.kat) === 1,
          pary: Number(opc.pary) === 1, kwas: Number(opc.kwas) !== 0, opis: opc.opis || ''
        });
      } catch (e) {
        host.innerHTML = '<div style="color:#b91c1c;font-size:14px;padding:8px">Nie mogę narysować „' + esc(opc.smiles) + '”: ' + esc(e.message) + '</div>';
        return;
      }
      host.innerHTML = '<div style="background:var(--surface-1,transparent);border-radius:8px;padding:6px 0">' + wynik.svg +
        '<div style="text-align:center;font-size:14px;margin-top:4px">' + esc(wynik.wzor) + ' · M ≈ ' + wynik.masa.toFixed(2).replace('.', ',') + ' g/mol</div></div>';
    }
  });
})();
