/* KLOCEK: schemat-przemian — kilka dróg do jednego typu produktu: w każdym wierszu substraty → strzałka z nazwą drogi → produkty,
   produkt docelowy wyróżniony. Wiersz można kliknąć (lub wybrać Tab/Enter) — pod schematem pojawia się uwaga do tej drogi.
   Bez kliknięcia wyróżnienie wędruje po drogach i się powtarza (tylko gdy figura jest widoczna; przy prefers-reduced-motion — bez ruchu).
   Opcje: tytul; drogi = "etykieta:równanie[:uwaga]; etykieta:równanie[:uwaga]" — równanie ASCII: "2 Na + 2 H2O -> 2 NaOH* + H2↑",
          gwiazdka * przy produkcie oznacza produkt docelowy (znika z napisu); cyfry po literach i ")" → indeksy dolne, -> → strzałka.
   W etykiecie i uwadze nie używać średnika ani dwukropka (rozdzielają pola). */
(function () {
  var DOL = {'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'};
  function wzor(s) {
    return String(s).replace(/([A-Za-z\)])(\d+)/g, function (_, a, d) { return a + d.split('').map(function (z) { return DOL[z]; }).join(''); });
  }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); }
  function czesc(txt, cel) {
    return txt.split(' + ').map(function (x) {
      var t = x.trim(), jest = t.indexOf('*') >= 0; t = t.replace(/\*/g, '');
      var st = 'display:inline-block;padding:3px 9px;border-radius:8px;font-family:ui-monospace,monospace;font-size:14px;';
      st += cel && jest ? 'border:2px solid var(--accent,#0d6868);font-weight:700;color:var(--accent,#0d6868);background:var(--surface,#fff)'
                       : cel ? 'border:1px dashed var(--border-strong,#94a3b8);color:var(--text-soft,#64748b);background:var(--surface,#fff)'
                             : 'border:1px solid var(--border,#cbd5e1);background:var(--surface,#fff)';
      return '<span style="' + st + '">' + esc(wzor(t)) + '</span>';
    }).join('<span style="color:var(--text-soft,#64748b);margin:0 2px">+</span>');
  }
  var STRZALKA = '<svg width="64" height="10" viewBox="0 0 64 10" aria-hidden="true"><line x1="2" y1="5" x2="56" y2="5" stroke="currentColor" stroke-width="1.6"/><polygon points="56,1 63,5 56,9" fill="currentColor"/></svg>';

  KLOCKI.def('schemat-przemian', {
    opis: 'Schemat dróg: kilka sposobów otrzymania tego samego typu substancji, każdy jako substraty → strzałka → produkty.',
    domyslne: {},
    html: function (host, opc) {
      host.style.display = 'block'; host.style.width = '100%';
      var drogi = String(opc.drogi || '').split(';').map(function (x) { return x.trim(); }).filter(Boolean).map(function (x) {
        var p = x.split(':'); return {et: p[0].trim(), rown: (p[1] || '').trim(), uw: (p.slice(2).join(':') || '').trim()};
      });
      var h = opc.tytul ? '<div style="font-weight:700;font-size:15px;margin:0 0 8px">' + esc(opc.tytul) + '</div>' : '';
      h += '<div class="sp-w" role="list">' + drogi.map(function (d, i) {
        var lr = d.rown.split('->'), l = (lr[0] || '').trim(), r = (lr[1] || '').trim();
        return '<div class="sp-r" role="listitem" tabindex="0" data-i="' + i + '" style="display:flex;flex-wrap:wrap;gap:6px 8px;align-items:center;padding:8px 10px;margin:0 0 6px;border:1.5px solid var(--border,#cbd5e1);border-radius:10px;cursor:pointer;background:var(--surface,#fff)">' +
          czesc(l, false) +
          '<span style="display:inline-flex;flex-direction:column;align-items:center;min-width:110px;color:var(--accent,#0d6868)"><small style="font-size:11px;color:var(--text-soft,#64748b);text-align:center">' + esc(d.et) + '</small>' + STRZALKA + '</span>' +
          czesc(r, true) + '</div>';
      }).join('') + '</div><div class="sp-u" aria-live="polite" style="font-size:13px;color:var(--text-soft,#64748b);min-height:20px;margin:2px 2px 0"></div>';
      host.innerHTML = h;
      var wiersze = [].slice.call(host.querySelectorAll('.sp-r')), uw = host.querySelector('.sp-u'), akt = -1, reczny = false, timer = null;
      function wybierz(i) {
        akt = i;
        wiersze.forEach(function (w, k) {
          w.style.borderColor = k === i ? 'var(--accent,#0d6868)' : 'var(--border,#cbd5e1)';
          w.style.boxShadow = k === i ? '0 0 0 2px rgba(13,104,104,.18)' : 'none';
        });
        uw.textContent = i >= 0 && drogi[i].uw ? wzor(drogi[i].et.charAt(0).toUpperCase() + drogi[i].et.slice(1) + ': ' + drogi[i].uw) : '';
      }
      function reka(i) { reczny = true; if (timer) { clearInterval(timer); timer = null; } wybierz(i); }
      wiersze.forEach(function (w, i) {
        w.addEventListener('click', function () { reka(i); });
        w.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); reka(i); } });
      });
      wybierz(drogi.length ? 0 : -1);
      var RMon = typeof RM !== 'undefined' && RM;
      function start() { if (!timer && !reczny && !RMon && drogi.length > 1) timer = setInterval(function () { wybierz((akt + 1) % drogi.length); }, 3200); }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) start(); else stop(); }); }, {threshold: .3}).observe(host);
      } else start();
    }
  });
})();
