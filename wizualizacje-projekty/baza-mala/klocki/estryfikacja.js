/* KLOCEK: estryfikacja — animacja estryfikacji (LKO-ORG06): kwas + alkohol ⇄ ester + woda.
   Opcje: ester = octan-etylu | mrowczan-metylu (domyslnie octan-etylu); szer, wys.
   Animacja domyslna: startuje sama, gdy widoczna, i powtarza sie w petli (cykl 9 s).
   Pokazuje, skad sie bierze woda: grupa –OH z kwasu + atom H z grupy –OH alkoholu; reszty lacza sie wiazaniem estrowym. */
(function () {
  var IND = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
  function ind(s) { return String(s).replace(/\d/g, function (d) { return IND[d]; }); }
  function cl(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function ss(v) { v = cl(v, 0, 1); return v * v * (3 - 2 * v); }
  var ZESTAW = {
    'octan-etylu': {kwas: 'kwas octowy', alk: 'etanol', est: 'octan etylu', A1: 'CH' + ind(3) + 'C(=O)–', B2: '–O–C' + ind(2) + 'H' + ind(5)},
    'mrowczan-metylu': {kwas: 'kwas mrówkowy', alk: 'metanol', est: 'mrówczan metylu', A1: 'HC(=O)–', B2: '–O–CH' + ind(3)}
  };
  function paleta() {
    return document.documentElement.hasAttribute('data-ciemny')
      ? {bg: '#0f1b1e', tekst: '#e8eef2', cisza: '#94a3b8', linia: '#2b3d42', akcent: '#5eead4', O: '#f87171', H: '#7dd3fc', tlo: 'rgba(94,234,212,.16)'}
      : {bg: '#ffffff', tekst: '#0f172a', cisza: '#64748b', linia: '#e2e8f0', akcent: '#0d6868', O: '#dc2626', H: '#0369a1', tlo: 'rgba(13,104,104,.12)'};
  }

  KLOCKI.def('estryfikacja', {
    opis: 'Animacja estryfikacji: z grupy –OH kwasu i atomu H alkoholu powstaje woda, a reszty łączą się w ester.',
    domyslne: {ester: 'octan-etylu', szer: 560, wys: 270},
    stan0: function () { return {}; },
    rysuj: function (x, w, h, s, t, opc) {
      var P = paleta(), Z = ZESTAW[opc.ester] || ZESTAW['octan-etylu'];
      var u = RM ? 7.5 : (t % 9), y0 = 112, px = 23;
      x.fillStyle = P.bg; x.fillRect(0, 0, w, h); x.textBaseline = 'middle'; x.textAlign = 'left';
      x.font = '700 ' + px + 'px system-ui, sans-serif';
      var wA1 = x.measureText(Z.A1).width, wA2 = x.measureText('OH').width, wB1 = x.measureText('H').width, wB2 = x.measureText(Z.B2).width;
      var gap = 56, tot = wA1 + wA2 + gap + wB1 + wB2;
      if (tot > w - 20) { px = Math.floor(px * (w - 20) / tot); x.font = '700 ' + px + 'px system-ui, sans-serif'; wA1 = x.measureText(Z.A1).width; wA2 = x.measureText('OH').width; wB1 = x.measureText('H').width; wB2 = x.measureText(Z.B2).width; tot = wA1 + wA2 + gap + wB1 + wB2; }
      var a = (w - tot) / 2, p2 = ss((u - 3.5) / 2), hl = ss((u - 2) / 0.6) * (1 - ss((u - 3.5) / 0.4));
      var xA1 = a, xA2 = a + wA1, xB1 = a + wA1 + wA2 + gap, xB2 = xB1 + wB1;
      var mx = w / 2, my = y0 + 78;
      var cA2x = xA2 + wA2 / 2, cB1x = xB1 + wB1 / 2;
      var A2c = [cA2x + (mx - 12 - cA2x) * p2, y0 + (my - y0) * p2], B1c = [cB1x + (mx + 12 - cB1x) * p2, y0 + (my - y0) * p2];
      var B2x = xB2 + (xA2 - xB2) * p2;

      // nagłówek: warunki reakcji
      x.textAlign = 'center'; x.font = '600 13px system-ui, sans-serif'; x.fillStyle = P.cisza;
      x.fillText('kat. H' + ind(2) + 'SO' + ind(4) + ', ogrzewanie — reakcja odwracalna  ⇄', w / 2, 26);
      x.strokeStyle = P.linia; x.lineWidth = 1; x.beginPath(); x.moveTo(24, 42); x.lineTo(w - 24, 42); x.stroke();
      x.font = '700 ' + px + 'px system-ui, sans-serif';

      // podświetlenie odchodzących części (OH z kwasu, H z alkoholu)
      if (hl > 0.01) {
        x.fillStyle = P.tlo; x.globalAlpha = hl;
        [[xA2 - 4, wA2 + 8], [xB1 - 4, wB1 + 8]].forEach(function (r) { x.beginPath(); x.roundRect(r[0], y0 - px * 0.75, r[1], px * 1.5, 8); x.fill(); });
        x.globalAlpha = 1;
      }
      // + między substratami (znika, gdy substraty się łączą)
      if (u < 4.5) { x.globalAlpha = 1 - ss((u - 3.5) / 1); x.fillStyle = P.cisza; x.textAlign = 'center'; x.fillText('+', xA2 + wA2 + gap / 2, y0); x.globalAlpha = 1; }
      x.textAlign = 'left';
      x.fillStyle = P.tekst; x.fillText(Z.A1, xA1, y0); x.fillText(Z.B2, B2x, y0);
      // odchodzące części / woda
      x.textAlign = 'center';
      if (p2 < 0.999 || u < 5.6) {
        x.fillStyle = P.O; x.fillText('OH', A2c[0], A2c[1]); x.fillStyle = P.H; x.fillText('H', B1c[0], B1c[1]);
      } else {
        x.globalAlpha = ss((u - 5.6) / 0.5); x.fillStyle = P.tekst; x.fillText('H' + ind(2) + 'O', mx, my); x.globalAlpha = 1;
      }

      // podpisy cząsteczek
      x.font = '600 13px system-ui, sans-serif'; x.fillStyle = P.cisza;
      if (u < 3.5) { x.fillText(Z.kwas, xA1 + (wA1 + wA2) / 2, y0 + 38); x.fillText(Z.alk, xB1 + (wB1 + wB2) / 2, y0 + 38); }
      else if (u > 5.6) {
        x.globalAlpha = ss((u - 5.6) / 0.5);
        x.fillText(Z.est, xA1 + (wA1 + wB2) / 2, y0 + 38); x.fillText('woda', mx, my + 30); x.globalAlpha = 1;
      }
      // objaśnienie etapu
      var opis = u < 2 ? 'Substraty: kwas karboksylowy i alkohol.'
        : u < 3.5 ? 'Grupa –OH z kwasu i atom H z alkoholu odchodzą jako woda.'
        : u < 5.6 ? 'Reszty łączą się wiązaniem estrowym –CO–O–.'
        : 'Produkty: ester i woda; reakcja jest odwracalna (hydroliza estru).';
      x.font = '14px system-ui, sans-serif'; x.fillStyle = P.tekst; x.fillText(opis, w / 2, h - 22);
    }
  });
})();
