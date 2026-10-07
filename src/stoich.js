<script id="che-stoich-v001">
/* ===== CHE.STECH v1.0 (obok istniejącego CHE.STOICH 2.17 — wzory ogólne) — obliczenia stechiometryczne na reakcjach silnika (CHE.REACTION / D.REACTIONS).
   Jedno źródło dla: kalkulatora stech-kalkulator-v01, zadań w lekcjach (N01, R06…), audytu. Masy molowe: CHE.CHEM.molarMass (z ELEMENTS_118).
   Procedura szkolna: m → n = m/M → stosunek współczynników → n → m = n·M (gaz: V = n·22,4 dm³ w warunkach normalnych). ===== */
(function(){
const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
const VM=22.4,SUB='₀₁₂₃₄₅₆₇₈₉',pf=s=>String(s).replace(/\d/g,d=>SUB[d]);
const fmt=(v,d)=>(Math.round(v*Math.pow(10,d==null?3:d))/Math.pow(10,d==null?3:d)).toString().replace('.',',');
function M(f){try{const m=C.CHEM.molarMass(f);if(m>0)return m}catch(_){}const s=(D.SUBSTANCES||{})[f];return s&&s.molarMass||NaN}
function gas(f){const s=(D.SUBSTANCES||{})[f];return !!(s&&s.state==='g')}
function species(k){const r=(D.REACTIONS||{})[k];if(!r)return null;return r.reactants.map(x=>({f:x.formula,c:x.coef,side:'s'})).concat(r.products.map(x=>({f:x.formula,c:x.coef,side:'p'})))}
const S={version:'1.0',VM,molarMass:M,isGas:gas,
 /* given: {f, m|n|V} → wszystkie reagenty i produkty */
 compute(k,given){const sp=species(k);if(!sp)return null;const g=sp.find(x=>x.f===given.f);if(!g)return null;const Mg=M(g.f);
  const n0=given.n!=null?given.n:given.m!=null?given.m/Mg:given.V!=null?given.V/VM:NaN,steps=[];
  steps.push(given.m!=null?'n('+pf(g.f)+') = m / M = '+fmt(given.m)+' g / '+fmt(Mg,2)+' g/mol = '+fmt(n0,4)+' mol':given.V!=null?'n('+pf(g.f)+') = V / 22,4 = '+fmt(given.V)+' / 22,4 = '+fmt(n0,4)+' mol':'n('+pf(g.f)+') = '+fmt(n0,4)+' mol');
  const rows=sp.map(x=>{const n=n0*x.c/g.c,Mx=M(x.f),o={f:x.f,coef:x.c,side:x.side,n,M:Mx,m:n*Mx,V:gas(x.f)?n*VM:null};return o});
  rows.forEach(r=>{if(r.f!==g.f)steps.push(pf(r.f)+': n = '+fmt(n0,4)+' · '+r.coef+'/'+g.c+' = '+fmt(r.n,4)+' mol → m = '+fmt(r.n,4)+' · '+fmt(r.M,2)+' = '+fmt(r.m,2)+' g'+(r.V!=null?' (V = '+fmt(r.V,2)+' dm³)':''))});
  const ms=rows.filter(r=>r.side==='s').reduce((a,r)=>a+r.m,0),mp=rows.filter(r=>r.side==='p').reduce((a,r)=>a+r.m,0);
  steps.push('kontrola (prawo zachowania masy): substraty '+fmt(ms,2)+' g = produkty '+fmt(mp,2)+' g');
  return{k,rows,steps,massS:ms,massP:mp}},
 /* odczynnik limitujący: amounts {f: masa w g} dla substratów */
 limiting(k,amounts){const sp=species(k);if(!sp)return null;const re=sp.filter(x=>x.side==='s'&&amounts[x.f]!=null);if(!re.length)return null;
  const q=re.map(x=>({f:x.f,c:x.c,n:amounts[x.f]/M(x.f)})).map(x=>Object.assign(x,{ratio:x.n/x.c}));const lim=q.reduce((a,b)=>b.ratio<a.ratio?b:a);
  const res=S.compute(k,{f:lim.f,n:lim.n});const left=q.filter(x=>x!==lim).map(x=>{const used=lim.ratio*x.c;return{f:x.f,n:x.n-used,m:(x.n-used)*M(x.f)}});
  return{limiting:lim.f,table:q,result:res,excess:left}},
 audit(){const t=[],ok=(n,v,d)=>t.push([n,!!v,d||'']);const g=(k,o,f)=>{const r=S.compute(k,o);return r&&r.rows.find(x=>x.f===f)};
  const a=g('mgO2',{f:'Mg',m:4.8},'MgO');ok('4,8 g Mg → ≈ 8,0 g MgO',a&&Math.abs(a.m-7.96)<0.1,a&&a.m.toFixed(2));
  const b=g('caco3Decomp',{f:'CaCO3',m:50},'CO2');ok('50 g CaCO₃ → ≈ 11,2 dm³ CO₂',b&&Math.abs(b.V-11.19)<0.1,b&&b.V&&b.V.toFixed(2));
  const c=S.compute('cuoH2so4',{f:'CuO',m:79.55});ok('masa zachowana (CuO + H₂SO₄)',c&&Math.abs(c.massS-c.massP)<1e-6);
  const l=S.limiting('mgO2',{Mg:24.3,O2:8});ok('limitujący: 24,3 g Mg + 8 g O₂ → O₂',l&&l.limiting==='O2');
  return{ok:t.every(x=>x[1]),tests:t}}};
C.STECH=S;
})();
</script>
