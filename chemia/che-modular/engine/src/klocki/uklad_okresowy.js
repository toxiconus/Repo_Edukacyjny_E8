/* Klocek: mini układ okresowy (HTML). Przełącznik „Obie grupy / Litowce / Berylowce”;
   opis wybranej grupy tuż pod przełącznikiem (widoczny bez przewijania na telefonie);
   dla jednej grupy tabela pokazuje tylko jej kolumnę (mieści się na telefonie). */
KLOCKI.def('uklad-okresowy', {
  opis: 'Mini układ okresowy: przełącznik grup, opis wybranej grupy przy przełączniku, klik w numer grupy.',
  domyslne: {grupa: 'oba'},
  html: function (host, opc) {
    var W = [
      ['H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He'],
      ['Li', 'Be', '', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne'],
      ['Na', 'Mg', '', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
      ['K', 'Ca', '', '', '', '', '', '', '', '', '', '', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
      ['Rb', 'Sr', '', '', '', '', '', '', '', '', '', '', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
      ['Cs', 'Ba', '', '', '', '', '', '', '', '', '', '', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
      ['Fr', 'Ra', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ];
    var PROMIEN = {Fr: 1, Ra: 1};
    var OP = {
      1: {blok: 's', tytul: 'Grupa 1 — litowce', tekst: 'Jeden elektron walencyjny (wartościowość I). Bardzo reaktywne; reaktywność rośnie w dół grupy.'},
      2: {blok: 's', tytul: 'Grupa 2 — berylowce', tekst: 'Dwa elektrony walencyjne (wartościowość II). Mniej reaktywne niż litowce; beryl prawie nie reaguje z wodą.'},
      13: {blok: 'p', tytul: 'Grupa 13 — borowce', tekst: 'Trzy elektrony walencyjne. Glin tworzy tlenek amfoteryczny.'},
      14: {blok: 'p', tytul: 'Grupa 14 — węglowce', tekst: 'Cztery elektrony walencyjne. Węgiel tworzy setki tysięcy związków organicznych.'},
      15: {blok: 'p', tytul: 'Grupa 15 — azotowce', tekst: 'Pięć elektronów walencyjnych. Azot w powietrzu (ok. 78%).'},
      16: {blok: 'p', tytul: 'Grupa 16 — tlenowce', tekst: 'Sześć elektronów walencyjnych. Tlen w powietrzu (ok. 21%).'},
      17: {blok: 'p', tytul: 'Grupa 17 — fluorowce (halogeny)', tekst: 'Siedem elektronów walencyjnych. Reaktywność maleje w dół: F₂ najbardziej, I₂ najmniej.'},
      18: {blok: 'p', tytul: 'Grupa 18 — gazy szlachetne', tekst: 'Osiem elektronów walencyjnych (dublet w He). Prawie nie reagują.'}
    };
    var tryb = String(opc.grupa || 'oba'), wyb = (tryb === '1' || tryb === '2') ? +tryb : 1;
    var box = document.createElement('div'); box.className = 'klocek-ukl';
    box.style.cssText = 'font-family:system-ui,sans-serif;font-size:13px;max-width:560px;margin:0 auto';

    /* przełącznik trybu */
    var przel = document.createElement('div'); przel.setAttribute('role', 'group'); przel.setAttribute('aria-label', 'Wybór grupy');
    przel.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px';
    var tryby = [['oba', 'Obie grupy'], ['1', 'Litowce (1)'], ['2', 'Berylowce (2)']], btnTr = {};
    tryby.forEach(function (t) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = t[1]; b.setAttribute('data-tryb', t[0]);
      b.style.cssText = 'font:600 13px system-ui,sans-serif;padding:6px 12px;border-radius:999px;border:1px solid #94a3b8;background:#fff;color:#0f172a;cursor:pointer';
      b.addEventListener('click', function () { ustaw(t[0]); });
      przel.appendChild(b); btnTr[t[0]] = b;
    });

    /* opis tuż pod przełącznikiem */
    var opis = document.createElement('div');
    opis.setAttribute('aria-live', 'polite');
    opis.style.cssText = 'min-height:56px;padding:8px 10px;border:1px solid #cbd5e1;border-radius:8px;background:#fff;color:#0f172a;font-size:13px';

    var tbl = document.createElement('div');
    var naglow = document.createElement('div');
    box.appendChild(przel); box.appendChild(opis); box.appendChild(naglow); box.appendChild(tbl);
    host.appendChild(box);

    function rysuj() {
      var cols = tryb === 'oba' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] : [wyb];
      var n = cols.length;
      /* nagłówki grup (klik = wybór grupy) */
      naglow.innerHTML = ''; naglow.style.cssText = 'display:grid;grid-template-columns:repeat(' + n + ',1fr);gap:2px;margin-bottom:4px';
      cols.forEach(function (g) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = g;
        var ma = !!OP[g];
        b.style.cssText = 'font-size:11px;padding:3px 0;border:1px solid #94a3b8;border-radius:4px;background:#fff;color:#0f172a;cursor:' + (ma ? 'pointer' : 'default') + ';opacity:' + (ma ? 1 : .45);
        if (ma) b.addEventListener('click', function () { ustaw(g === 1 || g === 2 ? String(g) : 'oba'); });
        naglow.appendChild(b);
      });
      /* tabela */
      tbl.innerHTML = ''; tbl.style.cssText = 'display:grid;grid-template-columns:repeat(' + n + ',1fr);gap:2px';
      for (var r = 0; r < W.length; r++) {
        cols.forEach(function (g) {
          var sym = W[r][g - 1], cell = document.createElement('div');
          cell.setAttribute('data-col', String(g));
          cell.style.cssText = 'text-align:center;padding:3px 0;border:1px solid transparent;border-radius:4px;min-height:22px;' + (sym ? '' : 'visibility:hidden');
          cell.innerHTML = sym ? '<b>' + sym + '</b>' + (PROMIEN[sym] && KLOCKI.znak ? '<span style="display:block;margin:0 auto;width:10px">' + KLOCKI.znak.tref(10) + '</span>' : '') : '';
          tbl.appendChild(cell);
        });
      }
      /* podświetlenie: tylko w trybie pojedynczej grupy wszystkie komórki; w „oba” — wybrana kolumna */
      var o = OP[wyb];
      opis.innerHTML = (tryb !== 'oba' && o) ? '<b>' + o.tytul + '</b><br>' + o.tekst : '<span style="color:#475569">Wybierz grupę 1 (litowce) lub 2 (berylowce) — opis pojawi się tutaj.</span>';
      Array.prototype.forEach.call(tbl.querySelectorAll('[data-col]'), function (c) {
        var on = +c.getAttribute('data-col') === wyb;
        c.style.background = on ? (o && o.blok === 's' ? '#bfdbfe' : '#fde68a') : '';
        c.style.borderColor = on ? '#1e40af' : 'transparent';
      });
      Object.keys(btnTr).forEach(function (k) {
        var on = k === tryb;
        btnTr[k].style.background = on ? '#0f172a' : '#fff';
        btnTr[k].style.color = on ? '#fff' : '#0f172a';
        btnTr[k].setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }

    function ustaw(t) {
      if (t === 'oba') { tryb = 'oba'; }
      else { tryb = t; wyb = +t; }
      rysuj();
      if (tryb !== 'oba') box.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    }
    rysuj();
  }
});
