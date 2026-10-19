/* KLOCEK: karta-bhp — zasady pracy w pracowni i krótkie kroki pierwszej pomocy (karty do rozwinięcia).
   Treść ogólna, szkolna; przy poważnym urazie wezwać nauczyciela i pogotowie 112/999. Opcja: otwarte = "1" rozwija wszystkie. */
(function () {
  var KARTY = [
    ['Przed doświadczeniem', ['Okulary ochronne i fartuch, długie włosy związane.', 'Czytaj opis do końca; nic nie próbuj, nie wąchaj bezpośrednio znad naczynia.', 'Odczynniki bierz w najmniejszej potrzebnej ilości, naczynia podpisuj.']],
    ['Kwasy i zasady', ['Kwas wlewaj do wody (nie odwrotnie), cienkim strumieniem, mieszając.', 'Kontakt ze skórą lub oczami: płucz dużą ilością bieżącej wody przez co najmniej 15 minut i zawołaj nauczyciela.', 'Rozlany odczynnik zgłoś nauczycielowi, nie wycieraj go gołą ręką.']],
    ['Ogrzewanie', ['Probówkę ogrzewaj ukośnie (ok. 45°), otworem od siebie i od innych osób, poruszając nią w płomieniu.', 'Nie zaglądaj do ogrzewanej probówki od góry.', 'Gorące naczynia chwytaj szczypcami lub łapaczem, stawiaj na podkładce.']],
    ['Oparzenie i zranienie', ['Oparzenie: chłodź zimną wodą kilkanaście minut, nie smaruj tłuszczem, powiadom nauczyciela.', 'Skaleczenie szkłem: nie usuwaj odłamków z rany, zawołaj nauczyciela.', 'Wdychanie gazu: wyjdź na świeże powietrze i zgłoś to nauczycielowi.']]
  ];
  KLOCKI.def('karta-bhp', {
    opis: 'Karta BHP: zasady pracy w pracowni i pierwsza pomoc.',
    domyslne: {otwarte: 0},
    html: function (host, opc) {
      host.style.display = 'block';
      host.innerHTML = KARTY.map(function (k, i) {
        return '<details' + (Number(opc.otwarte) || i === 0 ? ' open' : '') + ' style="border:1px solid var(--border,#cbd5e1);border-radius:8px;padding:6px 12px;margin:0 0 6px;background:var(--surface,#fff)">' +
          '<summary style="cursor:pointer;font-weight:600;color:var(--accent,#0d6868)">' + k[0] + '</summary><ul style="margin:6px 0 4px;padding-left:20px;font-size:14px">' +
          k[1].map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></details>';
      }).join('');
    }
  });
})();
