/* Klocek: tablica Mendelejewa z kafelkami litowców i berylowców.
   Góra: kafelki grupy 1 i 2 — klik pokazuje opis i dane pierwiastka pod kafelkami,
   z przyciskami „Wypróbuj w probówce” / „Wypróbuj w płomieniu” (zdarzenie klocki:uzyj).
   Dół: pełny układ okresowy (przełącznik Obie grupy / Litowce / Berylowce). */
KLOCKI.def('uklad-okresowy', {
  opis: 'Tablica Mendelejewa: kafelki litowców i berylowców z opisem i przyciskami prób; pełny układ z przełącznikiem grup.',
  domyslne: {grupa: 'oba', wybrany: 'Na'},
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
    var PROMIEN = {Fr: 1, Ra: 1};
    var NAZW = {Li: 'lit', Na: 'sód', K: 'potas', Rb: 'rubid', Cs: 'cez', Fr: 'frans', Be: 'beryl', Mg: 'magnez', Ca: 'wapń', Sr: 'stront', Ba: 'bar', Ra: 'rad'};
    var wybr = String(opc.wybrany || 'Na');
    var tryb = String(opc.grupa || 'oba'), wyb = (tryb === '1' || tryb === '2') ? +tryb : 1;

    var box = document.createElement('div'); box.className = 'klocek-ukl';
    box.style.cssText = 'font-family:var(--tekst,Inter,system-ui,sans-serif);font-size:14px;color:var(--text,#1a2332);display:grid;gap:14px';

    /* ---- kafelki litowców i berylowców ---- */
    var kafelki = document.createElement('div'); kafelki.style.cssText = 'display:grid;gap:10px';
    var detal = document.createElement('div'); detal.setAttribute('aria-live', 'polite');
    detal.style.cssText = 'border:1px solid var(--border,#e5e9ee);border-radius:var(--r-md,10px);background:var(--surface-soft,#f6f8fa);padding:12px 14px;min-height:120px';
    var kaf = {};
    [[1, 'Litowce (grupa 1)', ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']], [2, 'Berylowce (grupa 2)', ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra']]].forEach(function (g) {
      var wiersz = document.createElement('div');
      var etyk = document.createElement('div'); etyk.textContent = g[1];
      etyk.style.cssText = 'font:700 13px var(--naglowek,Inter,sans-serif);color:var(--text-soft,#4a5568);margin-bottom:6px';
      var rzad = document.createElement('div'); rzad.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px';
      g[2].forEach(function (s) {
        var b = document.createElement('button'); b.type = 'button'; b.setAttribute('data-kafelek', s);
        b.setAttribute('aria-label', NAZW[s] + ' (' + s + ')');
        b.style.cssText = 'position:relative;min-width:58px;padding:8px 10px;border-radius:var(--r-md,10px);border:1px solid var(--border-strong,#cdd5dd);background:var(--surface,#fff);color:var(--text,#1a2332);font:700 18px var(--naglowek,Inter,sans-serif);cursor:pointer';
        b.innerHTML = s + (PROMIEN[s] ? '<span style="position:absolute;right:3px;top:3px;display:flex">' + KLOCKI.znak.tref(11) + '</span>' : '');
        b.addEventListener('click', function () { pokazDetal(s); });
        rzad.appendChild(b); kaf[s] = b;
      });
      wiersz.appendChild(etyk); wiersz.appendChild(rzad); kafelki.appendChild(wiersz);
    });
    box.appendChild(kafelki); box.appendChild(detal);

    function pokazDetal(s) {
      var d = (typeof DANE !== 'undefined' && DANE[s]) || {};
      var og = OP[grupaSym(s)] || {};
      var opisTxt = d.opis || (og.tekst || '');
      var zak = PROMIEN[s] && KLOCKI.znak ? KLOCKI.znak.zakaz(d.nie ? 'Bez doświadczenia — pierwiastek zbyt rzadki i promieniotwórczy.' : 'Tylko animacja — doświadczeń z radem nie wykonuje się w szkołach.') : '';
      var sprobuj = d.nie ? '' :
        '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">' +
        '<button type="button" class="btn" data-uzyj="probowka" data-sym="' + s + '">Wypróbuj w probówce z wodą</button>' +
        '<button type="button" class="btn jasny" data-uzyj="palnik" data-sym="' + s + '">Wypróbuj w płomieniu</button></div>';
      detal.innerHTML = '<div style="font:700 20px var(--naglowek,Inter,sans-serif)">' + s + ' — ' + (NAZW[s] || '') + '</div>' +
        '<p style="margin:6px 0;color:var(--text-soft,#4a5568)">' + opisTxt + '</p>' +
        (d.kon ? '<p style="margin:4px 0;font-size:13px;color:var(--text-muted,#8892a0)">Konfiguracja: ' + d.kon + (d.rho ? ' · gęstość ' + d.rho : '') + (d.mp ? ' · t. topnienia ' + d.mp : '') + '</p>' : '') +
        zak + sprobuj;
      Object.keys(kaf).forEach(function (k) {
        var on = k === s;
        kaf[k].style.background = on ? 'var(--accent,#0d6868)' : 'var(--surface,#fff)';
        kaf[k].style.color = on ? '#fff' : 'var(--text,#1a2332)';
        kaf[k].setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      Array.prototype.forEach.call(detal.querySelectorAll('[data-uzyj]'), function (b) {
        b.addEventListener('click', function () {
          document.dispatchEvent(new CustomEvent('klocki:uzyj', {detail: {cel: b.getAttribute('data-uzyj'), sym: b.getAttribute('data-sym')}}));
        });
      });
    }
    function grupaSym(s) { return G1.indexOf(s) >= 0 ? 1 : G2.indexOf(s) >= 0 ? 2 : 0; }

    /* ---- pełny układ okresowy ---- */
    var pelny = document.createElement('div'); pelny.style.cssText = 'display:grid;gap:8px';
    var przel = document.createElement('div'); przel.setAttribute('role', 'group'); przel.setAttribute('aria-label', 'Wybór grupy');
    przel.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px';
    var tryby = [['oba', 'Obie grupy'], ['1', 'Litowce (1)'], ['2', 'Berylowce (2)']], btnTr = {};
    tryby.forEach(function (t) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = t[1]; b.setAttribute('data-tryb', t[0]);
      b.style.cssText = 'font:600 13px Inter,system-ui,sans-serif;padding:6px 12px;border-radius:999px;border:1px solid var(--border-strong,#cdd5dd);background:var(--surface,#fff);color:var(--text,#1a2332);cursor:pointer';
      b.addEventListener('click', function () { ustaw(t[0]); });
      przel.appendChild(b); btnTr[t[0]] = b;
    });
    var opis = document.createElement('div'); opis.setAttribute('aria-live', 'polite');
    opis.style.cssText = 'min-height:44px;padding:8px 10px;border:1px solid var(--border,#e5e9ee);border-radius:var(--r-md,10px);background:var(--surface-soft,#f6f8fa);color:var(--text,#1a2332);font-size:14px';
    var naglow = document.createElement('div'), tbl = document.createElement('div');
    pelny.appendChild(przel); pelny.appendChild(opis); pelny.appendChild(naglow); pelny.appendChild(tbl);
    box.appendChild(pelny);
    host.appendChild(box);

    function rysuj() {
      var cols = tryb === 'oba' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] : [wyb];
      var n = cols.length;
      naglow.innerHTML = ''; naglow.style.cssText = 'display:grid;grid-template-columns:repeat(' + n + ',1fr);gap:2px';
      cols.forEach(function (g) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = g;
        var ma = !!OP[g];
        b.style.cssText = 'font-size:11px;padding:3px 0;border:1px solid var(--border-strong,#cdd5dd);border-radius:4px;background:var(--surface,#fff);color:var(--text,#1a2332);cursor:' + (ma ? 'pointer' : 'default') + ';opacity:' + (ma ? 1 : .45);
        if (ma) b.addEventListener('click', function () { ustaw(g === 1 || g === 2 ? String(g) : 'oba'); });
        naglow.appendChild(b);
      });
      tbl.innerHTML = ''; tbl.style.cssText = 'display:grid;grid-template-columns:repeat(' + n + ',1fr);gap:2px';
      W.forEach(function (wiersz) {
        cols.forEach(function (g) {
          var sym = wiersz[g - 1], cell = document.createElement('div');
          cell.setAttribute('data-col', String(g));
          cell.style.cssText = 'text-align:center;padding:3px 0;border:1px solid transparent;border-radius:4px;min-height:22px;color:var(--text,#1a2332);' + (sym ? '' : 'visibility:hidden');
          cell.innerHTML = sym ? '<b>' + sym + '</b>' + (PROMIEN[sym] && KLOCKI.znak ? '<span style="display:block;margin:0 auto;width:10px">' + KLOCKI.znak.tref(10) + '</span>' : '') : '';
          tbl.appendChild(cell);
        });
      });
      var o = OP[wyb];
      opis.innerHTML = (tryb !== 'oba' && o) ? '<b>' + o.tytul + '</b><br>' + o.tekst : '<span style="color:var(--text-soft,#4a5568)">Wybierz grupę 1 (litowce) lub 2 (berylowce) — opis pojawi się tutaj.</span>';
      Array.prototype.forEach.call(tbl.querySelectorAll('[data-col]'), function (c) {
        var on = +c.getAttribute('data-col') === wyb;
        c.style.background = on ? (o && o.blok === 's' ? 'var(--accent-soft,#e6f2f1)' : 'var(--c-warn-bg,#fcf4e6)') : '';
        c.style.borderColor = on ? 'var(--accent,#0d6868)' : 'transparent';
      });
      Object.keys(btnTr).forEach(function (k) {
        var on = k === tryb;
        btnTr[k].style.background = on ? 'var(--accent,#0d6868)' : 'var(--surface,#fff)';
        btnTr[k].style.color = on ? '#fff' : 'var(--text,#1a2332)';
        btnTr[k].setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    function ustaw(t) { if (t === 'oba') tryb = 'oba'; else { tryb = t; wyb = +t; } rysuj(); }

    rysuj();
    if (wybr) pokazDetal(wybr);
  }
});
