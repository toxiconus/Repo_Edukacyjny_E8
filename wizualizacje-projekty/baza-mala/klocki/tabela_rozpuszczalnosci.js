/* KLOCEK: tabela-rozpuszczalnosci — tabela R/T/N soli i wodorotlenków (20 °C); klik w komórkę: wzór, nazwa, rozpuszczalność.
   Dane: engine/src/dane/rozpuszczalnosc.json (SOLUBILITY_TABLE). Opcje: brak. */
(function () {
  var D = {"legend":{"R":"dobrze rozpuszczalny (> 1 g / 100 g H₂O)","T":"trudno rozpuszczalny (0,1–1 g)","N":"praktycznie nierozpuszczalny (< 0,1 g)","—":"nie istnieje w roztworze wodnym / rozkłada się"},"cations":[{"id":"Na","ion":"Na⁺"},{"id":"K","ion":"K⁺"},{"id":"NH4","ion":"NH₄⁺"},{"id":"Mg","ion":"Mg²⁺"},{"id":"Ca","ion":"Ca²⁺"},{"id":"Ba","ion":"Ba²⁺"},{"id":"Al","ion":"Al³⁺"},{"id":"Zn","ion":"Zn²⁺"},{"id":"Mn","ion":"Mn²⁺"},{"id":"Fe2","ion":"Fe²⁺"},{"id":"Fe3","ion":"Fe³⁺"},{"id":"Ni","ion":"Ni²⁺"},{"id":"Cu","ion":"Cu²⁺"},{"id":"Ag","ion":"Ag⁺"},{"id":"Pb","ion":"Pb²⁺"},{"id":"Sn","ion":"Sn²⁺"}],"anions":[{"id":"OH","ion":"OH⁻","name":"wodorotlenek","q":1},{"id":"Cl","ion":"Cl⁻","name":"chlorek","q":1},{"id":"Br","ion":"Br⁻","name":"bromek","q":1},{"id":"I","ion":"I⁻","name":"jodek","q":1},{"id":"NO3","ion":"NO₃⁻","name":"azotan(V)","q":1},{"id":"CH3COO","ion":"CH₃COO⁻","name":"octan","q":1},{"id":"SO4","ion":"SO₄²⁻","name":"siarczan(VI)","q":2},{"id":"SO3","ion":"SO₃²⁻","name":"siarczan(IV)","q":2},{"id":"CO3","ion":"CO₃²⁻","name":"węglan","q":2},{"id":"PO4","ion":"PO₄³⁻","name":"fosforan(V)","q":3},{"id":"S","ion":"S²⁻","name":"siarczek","q":2},{"id":"SiO3","ion":"SiO₃²⁻","name":"krzemian","q":2},{"id":"F","ion":"F⁻","name":"fluorek","q":1},{"id":"HCO3","ion":"HCO₃⁻","name":"wodorowęglan","q":1}],"table":{"OH":{"Na":"R","K":"R","NH4":"R","Mg":"N","Ca":"T","Ba":"R","Al":"N","Zn":"N","Mn":"N","Fe2":"N","Fe3":"N","Ni":"N","Cu":"N","Ag":"—","Pb":"N","Sn":"N"},"Cl":{"Na":"R","K":"R","NH4":"R","Mg":"R","Ca":"R","Ba":"R","Al":"R","Zn":"R","Mn":"R","Fe2":"R","Fe3":"R","Ni":"R","Cu":"R","Ag":"N","Pb":"T","Sn":"R"},"Br":{"Na":"R","K":"R","NH4":"R","Mg":"R","Ca":"R","Ba":"R","Al":"R","Zn":"R","Mn":"R","Fe2":"R","Fe3":"R","Ni":"R","Cu":"R","Ag":"N","Pb":"T","Sn":"R"},"I":{"Na":"R","K":"R","NH4":"R","Mg":"R","Ca":"R","Ba":"R","Al":"R","Zn":"R","Mn":"R","Fe2":"R","Fe3":"—","Ni":"R","Cu":"—","Ag":"N","Pb":"N","Sn":"R"},"NO3":{"Na":"R","K":"R","NH4":"R","Mg":"R","Ca":"R","Ba":"R","Al":"R","Zn":"R","Mn":"R","Fe2":"R","Fe3":"R","Ni":"R","Cu":"R","Ag":"R","Pb":"R","Sn":"—"},"CH3COO":{"Na":"R","K":"R","NH4":"R","Mg":"R","Ca":"R","Ba":"R","Al":"R","Zn":"R","Mn":"R","Fe2":"R","Fe3":"R","Ni":"R","Cu":"R","Ag":"T","Pb":"R","Sn":"—"},"SO4":{"Na":"R","K":"R","NH4":"R","Mg":"R","Ca":"T","Ba":"N","Al":"R","Zn":"R","Mn":"R","Fe2":"R","Fe3":"R","Ni":"R","Cu":"R","Ag":"T","Pb":"N","Sn":"R"},"SO3":{"Na":"R","K":"R","NH4":"R","Mg":"T","Ca":"N","Ba":"N","Al":"—","Zn":"N","Mn":"N","Fe2":"N","Fe3":"—","Ni":"N","Cu":"—","Ag":"N","Pb":"N","Sn":"—"},"CO3":{"Na":"R","K":"R","NH4":"R","Mg":"N","Ca":"N","Ba":"N","Al":"—","Zn":"N","Mn":"N","Fe2":"N","Fe3":"—","Ni":"N","Cu":"N","Ag":"N","Pb":"N","Sn":"—"},"PO4":{"Na":"R","K":"R","NH4":"R","Mg":"N","Ca":"N","Ba":"N","Al":"N","Zn":"N","Mn":"N","Fe2":"N","Fe3":"N","Ni":"N","Cu":"N","Ag":"N","Pb":"N","Sn":"N"},"S":{"Na":"R","K":"R","NH4":"R","Mg":"—","Ca":"—","Ba":"R","Al":"—","Zn":"N","Mn":"N","Fe2":"N","Fe3":"—","Ni":"N","Cu":"N","Ag":"N","Pb":"N","Sn":"N"},"SiO3":{"Na":"R","K":"R","NH4":"—","Mg":"N","Ca":"N","Ba":"N","Al":"N","Zn":"N","Mn":"N","Fe2":"N","Fe3":"—","Ni":"N","Cu":"N","Ag":"N","Pb":"N","Sn":"—"},"F":{"Na":"R","K":"R","NH4":"R","Mg":"N","Ca":"N","Ba":"T","Al":"T","Zn":"T","Mn":"T","Fe2":"T","Fe3":"T","Ni":"T","Cu":"T","Ag":"R","Pb":"T","Sn":"R"},"HCO3":{"Na":"R","K":"R","NH4":"R","Mg":"R","Ca":"R","Ba":"R","Al":"—","Zn":"—","Mn":"—","Fe2":"R","Fe3":"—","Ni":"—","Cu":"—","Ag":"—","Pb":"—","Sn":"—"}},"qc":{"Na":1,"K":1,"NH4":1,"Mg":2,"Ca":2,"Ba":2,"Al":3,"Zn":2,"Mn":2,"Fe2":2,"Fe3":3,"Ni":2,"Cu":2,"Ag":1,"Pb":2,"Sn":2},"gen":{"Na":"sodu","K":"potasu","NH4":"amonu","Mg":"magnezu","Ca":"wapnia","Ba":"baru","Al":"glinu","Zn":"cynku","Mn":"manganu(II)","Fe2":"żelaza(II)","Fe3":"żelaza(III)","Ni":"niklu(II)","Cu":"miedzi(II)","Ag":"srebra","Pb":"ołowiu(II)","Sn":"cyny(II)"}};
  var SUB = '₀₁₂₃₄₅₆₇₈₉';
  function pf(f) { return f.replace(/\d/g, function (c) { return SUB[+c]; }); }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function zwiazek(cid, an) {
    var A = D.anions.filter(function (a) { return a.id === an; })[0], qc = D.qc[cid], qa = A.q, k = gcd(qc, qa), nc = qa / k, na = qc / k;
    var sym = /^Fe[23]$/.test(cid) ? 'Fe' : cid, mono = /^(Cl|Br|I|F|S)$/.test(an), f;
    if (an === 'CH3COO') f = na > 1 ? '(CH3COO)' + na + sym : 'CH3COO' + sym;
    else f = (sym === 'NH4' && nc > 1 ? '(NH4)' : sym) + (nc > 1 ? nc : '') + ((na > 1 && !mono) ? '(' + an + ')' + na : an + (na > 1 ? na : ''));
    return {pretty: pf(f), name: A.name + ' ' + D.gen[cid], sol: D.table[an][cid]};
  }
  var PPT = {"Cu(OH)2": ["#4fa3e0", "galaretowaty, niebieski"], "Fe(OH)2": ["#9db79a", "zielonkawy, szybko brunatnieje"], "Fe(OH)3": ["#a0522d", "rdzawobrunatny"], "Al(OH)3": ["#f5f5f5", "biały, galaretowaty"], "Zn(OH)2": ["#f5f5f5", "biały"], "AgCl": ["#f8fafc", "biały, serowaty"], "AgBr": ["#f3ecc0", "kremowy"], "AgI": ["#f2e04a", "żółty"], "BaSO4": ["#f8fafc", "biały"], "CaCO3": ["#f8fafc", "biały"], "PbI2": ["#f5d90a", "żółty"], "CuS": ["#1f1f1f", "czarny"], "Ag2CrO4": ["#a3341f", "ceglastoczerwony"]};   // barwy osadów (z CHE.COLORS 'precipitate'), klucz = wzór bez indeksów
  function barwa(k) { var f = k.pretty.replace(/[₀-₉]/g, function (c) { return SUB.indexOf(c); }); return PPT[f] || null; }
  window.KLOCKI.rozp = {D: D, zwiazek: zwiazek};
  var COL = {R: 'rgba(46,125,79,.16)', T: 'rgba(176,111,28,.2)', N: 'rgba(184,58,69,.18)', '—': 'rgba(100,116,139,.12)'};
  KLOCKI.def('tabela-rozpuszczalnosci', {
    opis: 'Tabela rozpuszczalności soli i wodorotlenków w 20 °C; kliknięcie komórki pokazuje wzór, nazwę i rozpuszczalność.',
    domyslne: {},
    html: function (host) {
      var t = '<table style="border-collapse:collapse;font-size:12.5px;min-width:720px"><tr><th></th>' + D.cations.map(function (c) { return '<th style="padding:4px 5px">' + c.ion + '</th>'; }).join('') + '</tr>';
      D.anions.forEach(function (a) {
        t += '<tr><th style="padding:4px 6px;text-align:left;white-space:nowrap">' + a.ion + '</th>' + D.cations.map(function (c) {
          var s = D.table[a.id][c.id] || '', k = zwiazek(c.id, a.id);
          return '<td data-c="' + c.id + '" data-a="' + a.id + '" title="' + k.pretty + ' — ' + k.name + '" style="cursor:pointer;text-align:center;font-weight:800;padding:5px 4px;border:1px solid var(--border,#e2e8f0);background:' + (COL[s] || '') + '">' + s + '</td>';
        }).join('') + '</tr>';
      });
      host.style.display = 'block';
      host.innerHTML = '<div style="overflow-x:auto">' + t + '</table></div><div class="tr-info" style="margin-top:8px;font-size:14px">Kliknij komórkę tabeli.</div>' +
        '<div style="margin-top:6px;font-size:13px"><b>R</b> — rozpuszczalny · <b>T</b> — trudno rozpuszczalny · <b>N</b> — praktycznie nierozpuszczalny (wytrąca się jako osad) · <b>—</b> — nie istnieje w wodzie lub rozkłada się. Wiersze F⁻ i SiO₃²⁻ — orientacyjnie.</div>';
      var info = host.querySelector('.tr-info');
      host.addEventListener('click', function (e) {
        var td = e.target.closest('td[data-c]'); if (!td) return;
        var k = zwiazek(td.dataset.c, td.dataset.a);
        var b = barwa(k);
        info.innerHTML = '<b style="font-size:16px">' + k.pretty + '</b> — ' + k.name + '<br>' + k.sol + ': ' + (D.legend[k.sol] || '') + (b ? '<br>Barwa osadu: <span style="display:inline-block;width:14px;height:14px;border-radius:3px;vertical-align:-2px;border:1px solid #9aa;background:' + b[0] + '"></span> ' + b[1] : '') + ((k.sol === 'N' || k.sol === 'T') ? '<br><i>Powstaje jako osad w reakcji strącania.</i>' : '');
      });
    }
  });

  /* KLOCEK: mapa-jonow — kliknij jon: ładunek, pochodzenie, wykrywanie i partnerzy dający osad (z tabeli rozpuszczalności). Zastępuje ion-map-v02. */
  var DET = {Ag: 'Cl⁻ → biały AgCl↓; I⁻ → żółty AgI↓', Ba: 'SO₄²⁻ → biały BaSO₄↓ (nierozpuszczalny w kwasach)', Ca: 'CO₃²⁻ → biały CaCO₃↓; woda wapienna + CO₂ mętnieje', Cu: 'NaOH → niebieski Cu(OH)₂↓; roztwór niebieski', Fe3: 'NaOH → rdzawy Fe(OH)₃↓', Fe2: 'NaOH → zielonkawy Fe(OH)₂↓', Pb: 'I⁻ → żółty PbI₂↓', NH4: 'NaOH + ogrzanie → amoniak NH₃ (zapach, papierek niebieszczeje)', Al: 'NaOH → biały Al(OH)₃↓, rozpuszcza się w nadmiarze', Zn: 'NaOH → biały Zn(OH)₂↓, rozpuszcza się w nadmiarze', Na: 'barwa płomienia: żółta', K: 'barwa płomienia: fioletowa',
    Cl: 'AgNO₃ → biały, serowaty AgCl↓', SO4: 'BaCl₂ → biały BaSO₄↓', CO3: 'kwas → bąbelki CO₂ (woda wapienna mętnieje)', PO4: 'AgNO₃ → żółty Ag₃PO₄↓', S: 'kwas → H₂S (zapach zgniłych jaj); Pb²⁺ → czarny PbS↓', NO3: 'brak typowych osadów — wszystkie azotany rozpuszczalne', OH: 'fenoloftaleina → malinowa; pH > 7', I: 'AgNO₃ → żółty AgI↓', Br: 'AgNO₃ → kremowy AgBr↓', F: 'Ca²⁺ → biały CaF₂↓', CH3COO: 'prawie wszystkie octany rozpuszczalne', SO3: 'kwas → SO₂ (ostry zapach)', SiO3: 'kwas → galaretowaty H₂SiO₃↓'};
  var POCH = {Na: 'z NaOH i soli sodu', K: 'z KOH i soli potasu', NH4: 'z amoniaku i soli amonowych', Mg: 'z Mg(OH)₂ i soli magnezu', Ca: 'z Ca(OH)₂ (woda wapienna) i soli wapnia', Ba: 'z Ba(OH)₂ i soli baru', Al: 'z Al(OH)₃ i soli glinu', Zn: 'z Zn(OH)₂ i soli cynku', Cu: 'z Cu(OH)₂ i soli miedzi', Ag: 'z soli srebra (AgNO₃)', Pb: 'z soli ołowiu', Fe2: 'z soli żelaza(II)', Fe3: 'z soli żelaza(III)', Ni: 'z soli niklu', Mn: 'z soli manganu', Sn: 'z soli cyny',
    OH: 'z wodorotlenków (NaOH, KOH, Ca(OH)₂…)', Cl: 'z kwasu solnego HCl', Br: 'z HBr', I: 'z HI', F: 'z HF', NO3: 'z kwasu azotowego(V) HNO₃', SO4: 'z kwasu siarkowego(VI) H₂SO₄', SO3: 'z kwasu siarkowego(IV) H₂SO₃', CO3: 'z kwasu węglowego H₂CO₃', PO4: 'z kwasu fosforowego(V) H₃PO₄', S: 'z kwasu siarkowodorowego H₂S', SiO3: 'z kwasu krzemowego H₂SiO₃', CH3COO: 'z kwasu octowego CH₃COOH', HCO3: 'z kwasu węglowego (sole kwaśne)'};
  KLOCKI.def('mapa-jonow', {
    opis: 'Mapa jonów: wybierasz kation lub anion i widzisz jego ładunek, pochodzenie (z jakiego kwasu lub wodorotlenku), sposób wykrywania oraz jony, z którymi tworzy osad (z tabeli rozpuszczalności).',
    domyslne: {},
    html: function (host) {
      host.style.display = 'block';
      var U = window.KLOCKI.ui, cur = ['a', 'Cl'], cats = {}, ani = {}, chips = [];
      D.cations.forEach(function (c) { cats[c.id] = c; }); D.anions.forEach(function (a) { ani[a.id] = a; });
      var bar = document.createElement('div'), bar2 = document.createElement('div'), card = document.createElement('div');
      bar.style.cssText = bar2.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px;margin-bottom:6px'; card.style.cssText = 'border:1px solid var(--border,#cbd5e1);border-radius:10px;padding:10px 12px;background:var(--surface-soft,#f6f8fa);font-size:14px;line-height:1.55';
      function pokaz() {
        chips.forEach(function (c) { U.zaznacz(c.el, c.t === cur[0] && c.id === cur[1]); });
        var kat = cur[0] === 'c', id = cur[1], ion = (kat ? cats : ani)[id].ion, q = kat ? D.qc[id] : ani[id].q, par = [];
        (kat ? D.anions : D.cations).forEach(function (x) { var s = kat ? D.table[x.id][id] : D.table[id][x.id]; if (s === 'N' || s === 'T') par.push('<b>' + x.ion + '</b> (' + (s === 'N' ? 'osad' : 'trudno rozp.') + ')'); });
        card.innerHTML = '<div style="font-size:22px"><b>' + ion + '</b> <span style="font-size:14px;color:var(--muted,#5b6b73)">' + (kat ? 'kation' : 'anion') + ' · ładunek ' + (kat ? '+' + q : q) + '</span></div>' +
          '<div><b>Pochodzenie:</b> ' + (POCH[id] || '—') + '</div><div><b>Wykrywanie:</b> ' + (DET[id] || '—') + '</div>' +
          '<div><b>Tworzy osad z:</b> ' + (par.length ? par.join(', ') : 'prawie nic — jego sole są rozpuszczalne') + '</div>' +
          '<div style="color:var(--muted,#5b6b73);font-size:13px;margin-top:4px">Bilans: aby powstała obojętna sól, ładunki kationu i anionu muszą się równoważyć (np. Ca²⁺ + 2 Cl⁻ → CaCl₂).</div>';
      }
      function mk(host2, list, t, lab) { var l = document.createElement('span'); l.style.cssText = 'font-size:12px;color:var(--muted,#5b6b73);align-self:center'; l.textContent = lab; host2.appendChild(l); list.forEach(function (x) { var c = U.chip(x.ion, false, function () { cur = [t, x.id]; pokaz(); }); chips.push({el: c, t: t, id: x.id}); host2.appendChild(c); }); }
      mk(bar, D.cations, 'c', 'kationy:'); mk(bar2, D.anions, 'a', 'aniony:');
      host.append(bar, bar2, card); pokaz();
    }
  });
})();
