/* KLOCEK: doswiadczenie — wspólny układ opisu doświadczenia: cel, sprzęt, karta BHP, scena (inny klocek), równanie, miejsce na obserwacje.
   Opcje: tytul, cel, sprzet (tekst), bhp = "Przed doświadczeniem,Kwasy i zasady" (karty z karta-bhp; puste = bez),
          scena = nazwa klocka (np. probowki-wybor), s_<opcja> = opcje sceny (s_zestaw="metale-hcl" s_wybrane="Mg,Zn"),
          rownanie = "Zn + 2HCl -> ZnCl2 + H2" (cyfry po literach → indeksy, ^2+ → ładunek, -> → strzałka).
   Nie podaje obserwacji ani wniosku — uczeń zapisuje je sam (puste pole „Obserwacje i wniosek”). */
(function () {
  var DOL = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
  var GOR = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻'};
  function wzor(s) {
    return String(s).replace(/\^([0-9]*[+-])/g, function (_, c) { return c.split('').map(function (z) { return GOR[z]; }).join(''); })
      .replace(/([A-Za-z\)])(\d+)/g, function (_, a, d) { return a + d.split('').map(function (z) { return DOL[z]; }).join(''); })
      .replace(/->/g, '→');
  }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); }
  var WIERSZ = 'display:grid;grid-template-columns:130px 1fr;gap:4px 12px;margin:0 0 8px;font-size:14px;align-items:baseline';
  KLOCKI.def('doswiadczenie', {
    opis: 'Opis doświadczenia: cel, sprzęt, BHP, scena z probówkami, równanie, miejsce na obserwacje.',
    domyslne: {},
    html: function (host, opc) {
      host.style.display = 'block'; host.style.width = '100%';
      function wiersz(et, tresc) { return '<div style="' + WIERSZ + '"><div style="font-weight:600;color:var(--accent,#0d6868)">' + et + '</div><div>' + tresc + '</div></div>'; }
      var h = '';
      if (opc.tytul) h += '<div style="font-weight:700;font-size:16px;margin:0 0 8px">' + esc(opc.tytul) + '</div>';
      if (opc.cel) h += wiersz('Cel', esc(opc.cel));
      if (opc.sprzet) h += wiersz('Sprzęt i odczynniki', esc(opc.sprzet));
      h += '<div data-d="bhp"></div><div data-d="scena" style="margin:8px 0"></div>';
      if (opc.rownanie) h += wiersz('Równanie', '<span style="font-family:ui-monospace,monospace;font-size:15px">' + esc(wzor(opc.rownanie)) + '</span>');
      h += wiersz('Obserwacje i wniosek', '<span style="color:var(--text-soft,#64748b)">………………………………………………………………</span>');
      host.innerHTML = h;
      var b = host.querySelector('[data-d=bhp]'), sc = host.querySelector('[data-d=scena]');
      if (opc.bhp) KLOCKI.montuj(b, 'karta-bhp', {karty: opc.bhp, zwiniete: 1});
      if (opc.scena) {
        var so = {};
        Object.keys(opc).forEach(function (k) { if (k.indexOf('s_') === 0) so[k.slice(2)] = opc[k]; });
        KLOCKI.montuj(sc, opc.scena, so);
      }
    }
  });
})();
