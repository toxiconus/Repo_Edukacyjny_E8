function famOf(z){
  if(z===1)return FAMS[0];
  if(z>=57&&z<=71)return 'Lantanowce';
  if(z>=89&&z<=103)return 'Aktynowce';
  if(z>=104&&z<=112)return 'Transaktynowce';
  const c=pos(z)[1];
  return c===1?'Litowce':c===2?'Berylowce':c<=12?'Metale przejściowe (blok d)':['Borowce','Węglowce','Azotowce','Tlenowce','Fluorowce','Helowce'][c-13];
}
const gtxt=e=>e.g==='f'?'bez numeru grupy (f-blok)':'grupa '+e.g;
const E = () => DB[sym] || stub(sym);
const isotopeData=e=>{
  const legacy=e?.iso||[],candidate=window.CHE?.ISOTOPE_VERIFIED_CANDIDATES?.get?.(e?.s);
  if(!candidate?.length)return legacy;
  const rows=new Map(legacy.map(item=>[item.A,{...item}]));
  candidate.forEach(item=>{
    const row=rows.get(item.massNumber)||{A:item.massNumber};
    row.ab=Number((item.representativeAbundance*100).toFixed(6));
    row.abundanceProvenance=item.abundanceProvenance;
    rows.set(item.massNumber,row);
  });
  return [...rows.values()].sort((a,b)=>a.A-b.A);
};
const state = () => { const e = E(), c0 = fill(e.z); let c = c0; if(chg > 0) c = strip(c0, chg); if(chg < 0) c = add(c0, -chg); return { e, c0, c }; };
const elName = (e, lg) => { if(lg === 'en') return e.n_en || e.n; if(lg === 'de') return e.n_de || e.n; if(lg === 'la') return e.n_la || e.n; return e.n; };

function head(){
  const { e, c } = state();
  $('hmeta').textContent = `${gtxt(e)} · okres ${e.p} · blok ${e.b} · ${eclass(e.z)}${e.en != null ? ', χ = ' + e.en : ''}`;
  $('hcfg').innerHTML = (chg ? 'jon ' : 'atom ') + ORDER.filter(k => c[k]).map(k => `<span style="color:${COL[role(c, k)]}">${k}${sup(c[k])}</span>`).join(' ');
  $('pos').innerHTML = posviz();
  $('stats').innerHTML = statsHtml();
  $('lew').innerHTML = lewis();
  $('cov').innerHTML = cov();
  $('ec-z').textContent = e.z;
  $('ec-mass').textContent = e.m ? (+e.m).toFixed(3).replace(/\.?0+$/, '') : '—';
  $('ec-sym').textContent = e.s || sym;
  $('ec-name').textContent = elName(e, lang);
  $('ec-ions').textContent = chg ? (chg > 0 ? '+' + chg : chg) : '';
  const opts = [0];
  if(chg > 3) opts.push(chg);
  for(let i = 1; i <= 3; i++) opts.push(i);
  if(e.ion) for(const k in e.ion) if(k.endsWith('-')) opts.push(-parseInt(k));
  $('chsel').innerHTML = [...new Set(opts)].sort((a, b) => a - b)
    .map(v => `<button class="${v === chg ? 'on' : ''}" data-c="${v}">${v > 0 ? '+' + v : v}</button>`).join('');
  document.querySelectorAll('#chsel [data-c]').forEach(b => b.onclick = () => { chg = +b.dataset.c; orb = ''; all(); });
  document.title = `${e.s || sym} · ${elName(e, lang)} · Laboratorium atomu`;
}

let zt=1,zNuc=10,tA=0,lastTs=0,GEO={},buildN=null,buildT=null;
function truncCfg(c,n){const o={};let r=n;for(const k of ORDER){if(!c[k])continue;const t=Math.min(c[k],r);if(t>0)o[k]=t;r-=t;if(r<=0)break;}return o}
const viewC=()=>{const c=state().c;return buildN==null?c:truncCfg(c,buildN)};
