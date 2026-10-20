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
        info.innerHTML = '<b style="font-size:16px">' + k.pretty + '</b> — ' + k.name + '<br>' + k.sol + ': ' + (D.legend[k.sol] || '') + ((k.sol === 'N' || k.sol === 'T') ? '<br><i>Powstaje jako osad w reakcji strącania.</i>' : '');
      });
    }
  });
})();
