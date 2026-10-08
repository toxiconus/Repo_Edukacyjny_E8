function notes(){
  const { e, c } = state();
  const L = [], N = Math.max(...Object.keys(c).map(x => +x[0])),
        val = ORDER.filter(k => c[k] && role(c, k) === 'v').reduce((a, k) => a + c[k], 0);
  let u = 0;
  {
    const { c0 } = state(), NG = [[2, 'He'], [10, 'Ne'], [18, 'Ar'], [36, 'Kr'], [54, 'Xe'], [86, 'Rn']], core = NG.filter(q => q[0] < e.z).pop();
    if(core){
      const nc = fill(core[0]), rest = ORDER.filter(k => (c0[k] || 0) - (nc[k] || 0) > 0).sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c0[k] - (nc[k] || 0))).join(' ');
      L.push(`Konfiguracja skrócona: <b>[${core[1]}] ${rest}</b>.`);
    }
  }
  L.push(`Powłoka walencyjna n = ${N} zawiera <b>${val} e⁻</b>.`);
  if(e.b === 's' || e.b === 'p'){
    if(e.g === 18) L.push('Zamknięta powłoka walencyjna: pierwiastek szlachetny, bierny chemicznie.');
    else if(val <= 3) L.push(`Do osiągnięcia konfiguracji gazu szlachetnego łatwiej <b>oddać ${val} e⁻</b> (kation ${e.s}${val > 1 ? sup('' + val) : ''}⁺).`);
    else if(val >= 5) L.push(`Do oktetu brakuje <b>${8 - val} e⁻</b> — typowy anion ${e.s}${8 - val > 1 ? sup('' + (8 - val)) : ''}⁻.`);
    else L.push('Połowa oktetu: tworzy głównie wiązania kowalencyjne (oddanie lub przyjęcie 4 e⁻ jest niekorzystne).');
  }
  ORDER.forEach(k => { if(c[k]){ const nb = CAP[k[1]] / 2; u += c[k] <= nb ? c[k] : 2 * nb - c[k]; } });
  L.push(`Niesparowane elektrony: <b>${u}</b>. ${u ? 'Przewidywany paramagnetyzm (przybliżenie atomowe).' : 'Przewidywany diamagnetyzm.'}`);
  ORDER.forEach(k => {
    if(!c[k] || k[1] === 's') return;
    if(c[k] === CAP[k[1]] / 2) L.push(`${k}${sup(c[k])}: podpowłoka półzapełniona, maksymalna multipletowość (Hund).`);
    else if(c[k] === CAP[k[1]] && role(c, k) !== 'c') L.push(`${k}${sup(c[k])}: podpowłoka zapełniona.`);
  });
  const v = e.ie;
  if(v){
    let m = 0, i = 1;
    for(let q = 1; q < v.length; q++) if(v[q] / v[q-1] > m){ m = v[q] / v[q-1]; i = q; }
    L.push(`Największy skok I${i}→I${i+1} (×${m.toFixed(1)}). ` + (m > 2.5
      ? `Po usunięciu ${i} e⁻ zaczyna się rdzeń, stąd typowy stopień utlenienia +${i}.`
      : 'Wzrost łagodny: kolejne elektrony z podpowłok o zbliżonej energii, stąd wiele stopni utlenienia.'));
  }
  if(e.ion && e.ar){
    const k = Object.entries(e.ion)[0];
    L.push(`Jon ${k[0]} ma promień ${k[1]} pm przy atomowym ${e.ar} pm: ${k[0].endsWith('+') ? 'kation kurczy się po utracie elektronów i słabszym ekranowaniu' : 'anion rośnie przez odpychanie elektronów'}.`);
  }
  return L.map(t => `<div class="nl">${t}</div>`).join('');
}

