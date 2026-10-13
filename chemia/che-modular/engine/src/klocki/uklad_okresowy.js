/* Klocek: mini układ okresowy (HTML, nie canvas). Kliknięcie grupy podświetla ją
   i pokazuje krótki opis. Opcja: grupa="1" — grupa podświetlona od razu. */
KLOCKI.def('uklad-okresowy', {
  opis: 'Mini układ okresowy; wybrana grupa podświetlona, po kliknięciu krótki opis.',
  domyslne: {grupa: 1},
  html: function (host, opc) {
    var W = [
      ['H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He'],
      ['Li', 'Be', '', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne'],
      ['Na', 'Mg', '', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
      ['K', 'Ca', '', '', '', '', '', '', '', '', '', '', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
      ['Rb', 'Sr', '', '', '', '', '', '', '', '', '', '', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
      ['Cs', 'Ba', '', '', '', '', '', '', '', '', '', '', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn']
    ];
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
    var wyb = +opc.grupa || 1;
    var box = document.createElement('div'); box.className = 'klocek-ukl';
    box.style.cssText = 'font-family:system-ui,sans-serif;font-size:12px;max-width:520px';
    var tbl = document.createElement('div');
    tbl.style.cssText = 'display:grid;grid-template-columns:repeat(18,1fr);gap:2px';
    var opis = document.createElement('div');
    opis.style.cssText = 'margin-top:8px;min-height:44px;padding:8px;border:1px solid #cbd5e1;border-radius:8px;font-size:13px';
    function kolumna(g) { return g; }   /* w tabeli 18 kolumn kolumna = numer grupy */
    function pokaz(g) {
      var o = OP[g]; if (!o) return;
      opis.innerHTML = '<b>' + o.tytul + '</b><br>' + o.tekst;
      Array.prototype.forEach.call(tbl.querySelectorAll('[data-col]'), function (c) {
        var on = +c.getAttribute('data-col') === kolumna(g);
        c.style.background = on ? (o.blok === 's' ? '#bfdbfe' : '#fde68a') : '';
        c.style.borderColor = on ? '#1e40af' : 'transparent';
      });
    }
    for (var r = 0; r < W.length; r++) {
      for (var c = 0; c < 18; c++) {
        var sym = W[r][c], cell = document.createElement('div');
        cell.setAttribute('data-col', String(c + 1));
        cell.style.cssText = 'text-align:center;padding:3px 0;border:1px solid transparent;border-radius:4px;min-height:22px;' + (sym ? '' : 'visibility:hidden');
        cell.innerHTML = sym ? '<b>' + sym + '</b>' : '';
        tbl.appendChild(cell);
      }
    }
    /* nagłówki grup klikalne */
    var naglow = document.createElement('div');
    naglow.style.cssText = 'display:grid;grid-template-columns:repeat(18,1fr);gap:2px;margin-bottom:4px';
    for (var g = 1; g <= 18; g++) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = g;
      var klik = OP[g] ? '' : 'opacity:.45;';
      b.style.cssText = 'font-size:11px;padding:2px 0;border:1px solid #94a3b8;border-radius:4px;background:#fff;cursor:' + (OP[g] ? 'pointer' : 'default') + ';' + klik;
      if (OP[g]) b.onclick = (function (gg) { return function () { pokaz(gg); }; })(g);
      naglow.appendChild(b);
    }
    box.appendChild(naglow); box.appendChild(tbl); box.appendChild(opis);
    host.appendChild(box);
    pokaz(wyb);
  }
});
