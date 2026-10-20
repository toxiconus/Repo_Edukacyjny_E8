/* KLOCEK: gra-klasyfikacja — kwas, zasada, sól czy tlenek? 10 losowych wzorów, po odpowiedzi wyjaśnienie. Opcje: rund (10). Wymaga ui_klocki.js. */
(function () {
  var Q = [
    ['HCl', 'kwas', 'Cząsteczka z H na początku wzoru i resztą kwasową Cl — w wodzie daje H⁺ (H₃O⁺).'], ['H₂SO₄', 'kwas', 'H₂ + reszta kwasowa SO₄ — kwas tlenowy.'], ['HNO₃', 'kwas', 'H + reszta NO₃ — kwas tlenowy.'],
    ['H₃PO₄', 'kwas', 'Trzy atomy H + reszta PO₄ — kwas trójprotonowy.'], ['H₂S', 'kwas', 'H₂ + reszta S — kwas beztlenowy (siarkowodorowy).'], ['CH₃COOH', 'kwas', 'Kwas octowy: H z grupy –COOH odszczepia się jako H⁺.'],
    ['NaOH', 'zasada', 'Metal + grupa OH — wodorotlenek rozpuszczalny w wodzie, daje jony OH⁻.'], ['KOH', 'zasada', 'Metal + OH — wodorotlenek potasu.'], ['Ca(OH)₂', 'zasada', 'Metal + dwie grupy OH — wodorotlenek wapnia.'],
    ['Ba(OH)₂', 'zasada', 'Metal + dwie grupy OH — wodorotlenek baru.'], ['Cu(OH)₂', 'zasada', 'Wodorotlenek metalu (nierozpuszczalny): wzór M(OH)ₙ.'], ['Al(OH)₃', 'zasada', 'Wodorotlenek metalu; amfoteryczny, ale wzór M(OH)ₙ.'],
    ['NaCl', 'sól', 'Kation metalu + anion reszty kwasowej (Cl⁻).'], ['CaCO₃', 'sól', 'Kation Ca²⁺ + reszta CO₃ — węglan wapnia.'], ['K₂SO₄', 'sól', 'Dwa kationy K⁺ + reszta SO₄.'], ['CuSO₄', 'sól', 'Kation Cu²⁺ + reszta SO₄.'],
    ['NH₄NO₃', 'sól', 'Kation amonowy NH₄⁺ + reszta NO₃ — sól bez metalu.'], ['FeCl₃', 'sól', 'Kation Fe³⁺ + trzy aniony Cl⁻.'], ['Na₃PO₄', 'sól', 'Trzy kationy Na⁺ + reszta PO₄.'], ['MgCl₂', 'sól', 'Kation Mg²⁺ + dwa aniony Cl⁻.'],
    ['CO₂', 'tlenek', 'Dwa pierwiastki, jeden to tlen — tlenek węgla(IV).'], ['CaO', 'tlenek', 'Metal + tlen — tlenek wapnia.'], ['Fe₂O₃', 'tlenek', 'Żelazo + tlen — tlenek żelaza(III).'], ['SO₂', 'tlenek', 'Siarka + tlen — tlenek siarki(IV).'],
    ['Na₂O', 'tlenek', 'Sód + tlen — tlenek sodu.'], ['H₂O', 'tlenek', 'Wodór + tlen — tlenek wodoru (woda).'], ['P₄O₁₀', 'tlenek', 'Fosfor + tlen — tlenek fosforu(V).'], ['CuO', 'tlenek', 'Miedź + tlen — tlenek miedzi(II).']
  ];
  var KAT = [['kwas', 'kwas'], ['zasada', 'zasada (wodorotlenek)'], ['sól', 'sól'], ['tlenek', 'tlenek']];
  KLOCKI.def('gra-klasyfikacja', {
    opis: 'Gra: pojawia się wzór substancji, a uczeń wybiera, czy to kwas, zasada, sól czy tlenek; po odpowiedzi widać uzasadnienie.',
    domyslne: {rund: 10},
    html: function (host, opc) {
      var U = KLOCKI.ui, N = +opc.rund || 10, ord, i, ok, odp;
      host.style.display = 'block';
      host.innerHTML = '<div class="gk-t" style="display:flex;justify-content:space-between;font-size:14px"></div><div class="gk-w" style="font-size:44px;text-align:center;margin:10px 0;font-weight:700"></div><div class="gk-b" style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center"></div><div class="gk-o" style="margin:10px auto;max-width:560px;font-size:14px;min-height:44px"></div>';
      var t = host.querySelector('.gk-t'), w = host.querySelector('.gk-w'), b = host.querySelector('.gk-b'), o = host.querySelector('.gk-o');
      function start() { ord = Q.map(function (_, k) { return k; }).sort(function () { return Math.random() - .5; }).slice(0, N); i = 0; ok = 0; nast(); }
      function nast() {
        if (i >= ord.length) { w.textContent = ok + ' / ' + N; t.innerHTML = '<span>Koniec gry</span>'; b.innerHTML = ''; o.innerHTML = ok >= N * .8 ? 'Świetnie — klasyfikację masz opanowaną.' : 'Wróć do wskazówek: kwas zaczyna się od H, zasada kończy na OH, sól to metal (lub NH₄) + reszta kwasowa, tlenek to pierwiastek + O.'; b.appendChild(U.btn('Zagraj jeszcze raz', start)); return; }
        var q = Q[ord[i]]; odp = false; w.innerHTML = q[0]; t.innerHTML = '<span>Pytanie ' + (i + 1) + ' / ' + N + '</span><span>Punkty: <b>' + ok + '</b></span>'; o.innerHTML = 'Wybierz kategorię.'; b.innerHTML = '';
        KAT.forEach(function (k) { b.appendChild(U.btn(k[1], function () { if (odp) return; odp = true; var dob = k[0] === q[1]; if (dob) ok++; o.innerHTML = (dob ? '<b style="color:#16a34a">Dobrze.</b> ' : '<b style="color:#dc2626">To ' + (q[1] === 'zasada' ? 'zasada' : q[1] === 'sól' ? 'sól' : q[1]) + '.</b> ') + q[2]; t.innerHTML = '<span>Pytanie ' + (i + 1) + ' / ' + N + '</span><span>Punkty: <b>' + ok + '</b></span>'; b.appendChild(U.btn('Dalej →', function () { i++; nast(); })); })); });
      }
      start();
    }
  });
})();
