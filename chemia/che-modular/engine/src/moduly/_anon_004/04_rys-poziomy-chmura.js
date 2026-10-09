/* Diagram orbitali: rysunek = komponent CHE_GFX.orbitalDiagram; tu podsumowanie pod diagramem. */
function levels(){
  const st=state(),r=CHE_GFX.orbitalDiagram({c:st.c,c0:st.c0,order:ORDER,role,col:COL});
  if(!r) return nodata(360, 200);
  $('lev').setAttribute('viewBox', `0 0 ${r.W} ${r.H}`);
  const lv = $('levsum');
  if(lv) lv.innerHTML = `<span><em>niesparowane</em><b>${r.unp}</b></span><span><em>pary</em><b>${r.prs}</b></span><span><em>magnetyzm</em><b>${r.unp ? 'para' : 'dia'}</b></span>` + (chg ? `<span><em>jon</em><b>${chg > 0 ? '+' + chg : chg}</b></span>` : '');
  return r.svg;
}

let zmCloud = 1;
/* Chmura orbitalna: rysunek = komponent CHE_GFX.orbitalCloud; tu wybór orbitalu (przyciski #orbsel). */
function cloud(){
  const { c } = state();
  const subs = ORDER.filter(k => c[k] && 'spd'.includes(k[1]));
  if(!orb || !subs.includes(orb.split(':')[0])) orb = (subs[subs.length - 1] || '1s') + ':' + ({ s:'s', p:'pz', d:'dz2' }[(subs[subs.length - 1] || 's')[1]]);
  const [sub, type] = orb.split(':');
  CHE_GFX.orbitalCloud($('cloud'), { sub, type, zoom: zmCloud });
  $('orbname').textContent = sub + ' ' + type;
  const opts = { s:['s'], p:['pz'], d:['dz2', 'dxy'] };
  let b = '';
  subs.forEach(k => opts[k[1]].forEach(t => b += `<button class="${orb === k + ':' + t ? 'on' : ''}" data-o="${k}:${t}">${k} ${t}</button>`));
  $('orbsel').innerHTML = b;
  document.querySelectorAll('#orbsel [data-o]').forEach(q => q.onclick = () => { orb = q.dataset.o; cloud(); });
}

