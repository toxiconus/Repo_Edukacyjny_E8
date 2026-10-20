/* KLOCEK: probowki-wybor — kilka probówek naraz, uczeń wybiera odczynniki/metale (chipy).
   Opcje: zestaw = metale-hcl | stracanie | kwas-weglan ; wybrane = lista kluczy po przecinku (domyślnie 3 pierwsze);
          kat = pochylenie probówek (np. 45 przy ogrzewaniu). Animacja rusza sama (probowki-odczyn), wybór restartuje cykl.
   Zależy od: klocki.js, pomocnicze.js, probowki_odczyn.js */
(function () {
  var ZESTAWY = {
    'metale-hcl': {
      tytul: 'Metal + kwas solny (HCl)',
      pozycje: {
        Mg: {et: 'Mg + HCl', przed: 'bezbarwny', po: 'bezbarwny', ef: 'gaz', rown: 'Mg + 2 H⁺ → Mg²⁺ + H₂↑'},
        Zn: {et: 'Zn + HCl', przed: 'bezbarwny', po: 'bezbarwny', ef: 'gaz', rown: 'Zn + 2 H⁺ → Zn²⁺ + H₂↑'},
        Fe: {et: 'Fe + HCl', przed: 'bezbarwny', po: 'jasnozielony', ef: 'gaz', rown: 'Fe + 2 H⁺ → Fe²⁺ + H₂↑'},
        Cu: {et: 'Cu + HCl', przed: 'bezbarwny', po: 'bezbarwny', ef: 'brak', rown: 'Cu + HCl → brak reakcji (Cu stoi za wodorem w szeregu aktywności)'}
      }
    },
    'stracanie': {
      tytul: 'Strącanie osadów',
      pozycje: {
        AgCl: {et: 'Ag⁺ + Cl⁻', przed: 'bezbarwny', po: 'bialy', ef: 'osad', rown: 'Ag⁺ + Cl⁻ → AgCl↓ (biały)'},
        BaSO4: {et: 'Ba²⁺ + SO4²⁻', przed: 'bezbarwny', po: 'bialy', ef: 'osad', rown: 'Ba²⁺ + SO₄²⁻ → BaSO₄↓ (biały)'},
        CaCO3: {et: 'Ca²⁺ + CO3²⁻', przed: 'bezbarwny', po: 'bialy', ef: 'osad', rown: 'Ca²⁺ + CO₃²⁻ → CaCO₃↓ (biały)'},
        CuOH2: {et: 'Cu²⁺ + OH⁻', przed: 'blekitny', po: 'niebieski', ef: 'osad', rown: 'Cu²⁺ + 2 OH⁻ → Cu(OH)₂↓ (niebieski)'},
        FeOH3: {et: 'Fe³⁺ + OH⁻', przed: 'zolty', po: 'brazowy', ef: 'osad', rown: 'Fe³⁺ + 3 OH⁻ → Fe(OH)₃↓ (rdzawobrunatny)'}
      }
    },
    'kwas-weglan': {
      tytul: 'Kwas + węglan (wydziela się CO₂)',
      pozycje: {
        Na2CO3: {et: 'Na2CO3 + HCl', przed: 'bezbarwny', po: 'bezbarwny', ef: 'gaz', rown: 'CO₃²⁻ + 2 H⁺ → H₂O + CO₂↑'},
        CaCO3: {et: 'CaCO3 + HCl', przed: 'mleczny', po: 'bezbarwny', ef: 'gaz', rown: 'CaCO₃ + 2 H⁺ → Ca²⁺ + H₂O + CO₂↑ (CaCO₃ nie jest jonem: nierozpuszczalny)'}
      }
    }
  };
  function lista(s) { return String(s || '').split(',').map(function (v) { return v.trim(); }).filter(Boolean); }

  KLOCKI.def('probowki-wybor', {
    opis: 'Kilka probówek naraz; uczeń wybiera metale lub odczynniki, a pod spodem widzi równanie jonowe skrócone.',
    domyslne: {zestaw: 'metale-hcl', wybrane: '', kat: 0, max: 4, szer: 480, wys: 300},
    html: function (host, opc) {
      var Z = ZESTAWY[opc.zestaw] || ZESTAWY['metale-hcl'];
      var klucze = Object.keys(Z.pozycje);
      var wyb = lista(opc.wybrane).filter(function (k) { return Z.pozycje[k]; });
      if (!wyb.length) wyb = klucze.slice(0, 3);
      var max = Number(opc.max) || 4;
      host.style.display = 'block';
      var chipy = document.createElement('div');
      chipy.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px';
      var scena = document.createElement('div');
      var rown = document.createElement('div');
      rown.style.cssText = 'font-size:14px;margin-top:8px;display:grid;gap:4px';
      host.appendChild(chipy); host.appendChild(scena); host.appendChild(rown);
      var przyciski = {};
      klucze.forEach(function (k) {
        var b = document.createElement('button');
        b.type = 'button'; b.textContent = Z.pozycje[k].et.replace(/(\d)/g, function (d) { return '₀₁₂₃₄₅₆₇₈₉'[d]; });
        b.style.cssText = 'border:1px solid var(--accent,#0d6868);border-radius:99px;padding:4px 12px;font:600 13px system-ui,sans-serif;cursor:pointer;background:var(--surface,#fff);color:var(--accent,#0d6868);min-height:0;height:auto;width:auto;min-width:0;flex:none;line-height:1.3;margin:0;box-shadow:none';
        b.addEventListener('click', function () {
          var i = wyb.indexOf(k);
          if (i >= 0) { if (wyb.length > 1) wyb.splice(i, 1); }
          else { if (wyb.length >= max) wyb.shift(); wyb.push(k); }
          odswiez();
        });
        przyciski[k] = b; chipy.appendChild(b);
      });
      function odswiez() {
        klucze.forEach(function (k) {
          var on = wyb.indexOf(k) >= 0, b = przyciski[k];
          b.style.background = on ? 'var(--accent,#0d6868)' : 'var(--surface,#fff)';
          b.style.color = on ? '#fff' : 'var(--accent,#0d6868)';
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        var tuby = wyb.map(function (k) {
          var p = Z.pozycje[k]; return p.et + ':' + p.przed + ':' + p.po + ':' + p.ef;
        }).join(',');
        KLOCKI.montuj(scena, 'probowki-odczyn', {tuby: tuby, kat: opc.kat, szer: opc.szer, wys: opc.wys, opis: Z.tytul + ': ' + wyb.join(', ')});
        rown.innerHTML = '';
        wyb.forEach(function (k) {
          var d = document.createElement('div'); d.textContent = Z.pozycje[k].rown; rown.appendChild(d);
        });
      }
      odswiez();
    }
  });
})();
