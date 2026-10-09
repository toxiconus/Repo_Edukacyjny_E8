
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const W=C.WIDGET_API||{};
const reaction=(f)=>{
  try{
    const R=C.REACTION;
    if(R){ if(typeof R.byFormula==='function') return R.byFormula(f); if(typeof R.get==='function') return R.get(f); }
  }catch(_){ }
  try{
    const ds=C.DATA||{};
    const maps=[ds.REACTIONS,ds.REACTION_DATA,ds.reactions];
    for(const m of maps){if(!m)continue; if(m[f])return m[f];}
  }catch(_){ }
  return null;
};
const molar=(f)=>{try{if(W.molarMass)return +W.molarMass(f)||0;}catch(_){}return 0;};
const pack=C.EXPERIMENT_MIGRATION=C.EXPERIMENT_MIGRATION||{version:'0.07',sourceOfTruth:'FULL_ENGINE'};
pack.reaction=(f)=>reaction(f); pack.molarMass=molar;

(function(){
 const old=C.LEGACY_WIDGETS&&C.LEGACY_WIDGETS.get&&C.LEGACY_WIDGETS.get('co2');
 if(!old)return;
 const orig=old.mount;
 old.mount=function(root){
   const liquid=root.querySelector('.tube-liquid'),bubbles=root.querySelector('.co2-bubbles'),status=root.querySelector('.sim-status'),fb=root.querySelector('.result-card');
   const R=reaction('CO2 + Ca(OH)2');
   const eq=(R&&(R.equation||R.eq||R.formula||R.display))||'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O';
   root.querySelector('[data-act="blow"]')?.addEventListener('click',()=>{
     liquid?.classList.add('turbid'); if(status){status.className='sim-status warn';status.textContent='Woda wapienna zmętniała (biały osad CaCO₃).';}
     if(fb){fb.className='result-card ok';fb.innerHTML='<b>Obserwacja:</b> woda wapienna zmętniała, powstał biały osad.<br><b>Wniosek:</b> obecny CO₂ — powstał CaCO₃.<br><b>Równanie:</b> '+eq;}
     if(bubbles){bubbles.innerHTML='';for(let i=0;i<10;i++){const b=document.createElement('div');b.className='co2-bubble';b.style.left=(20+Math.random()*60)+'%';b.style.animationDelay=(Math.random()*1.5)+'s';bubbles.appendChild(b);}}
   });
   root.querySelector('[data-act="reset"]')?.addEventListener('click',()=>{liquid?.classList.remove('turbid');if(bubbles)bubbles.innerHTML='';if(status){status.className='sim-status';status.textContent='Woda wapienna — klarowna.';}if(fb){fb.className='result-card info';fb.textContent='Równanie: '+eq;}});
 };
})();

(function(){
 const old=C.LEGACY_WIDGETS&&C.LEGACY_WIDGETS.get&&C.LEGACY_WIDGETS.get('stoichSolver'); if(!old)return;
 const orig=old.mount;
 old.mount=function(root){
  const sel=root.querySelector('.st-eq'),mass=root.querySelector('.st-mass'),out=root.querySelector('.result-card');
  const scenarios={mg:{eq:'2 Mg + O₂ → 2 MgO',sub:'Mg',subCoef:2,prod:'MgO',prodCoef:2},caco3:{eq:'CaCO₃ → CaO + CO₂',sub:'CaCO₃',subCoef:1,prod:'CO₂',prodCoef:1},zn:{eq:'Zn + 2 HCl → ZnCl₂ + H₂',sub:'Zn',subCoef:1,prod:'H₂',prodCoef:1},cuo:{eq:'CuO + H₂SO₄ → CuSO₄ + H₂O',sub:'CuO',subCoef:1,prod:'CuSO₄',prodCoef:1}};
  function calc(){const r=scenarios[sel.value];const m=parseFloat(mass.value);if(!r||!(m>0)){out.className='result-card bad';out.textContent='Podaj poprawną masę > 0.';return;}const ms=molar(r.sub),mp=molar(r.prod);if(!(ms>0&&mp>0)){out.className='result-card bad';out.textContent='Brak masy molowej w centralnym silniku dla '+r.sub+' lub '+r.prod+'.';return;}const ns=m/ms,np=ns*r.prodCoef/r.subCoef,mpm=np*mp;out.className='result-card ok';out.innerHTML='<div style="font-family:JetBrains Mono,monospace;font-weight:700;margin-bottom:6px;">'+r.eq+'</div><div>1. M('+r.sub+') = '+ms.toFixed(2)+' g/mol</div><div>2. n('+r.sub+') = '+m+' / '+ms.toFixed(2)+' = <b>'+ns.toFixed(4)+' mol</b></div><div>3. Stosunek '+r.subCoef+':'+r.prodCoef+' → n('+r.prod+') = '+np.toFixed(4)+' mol</div><div>4. M('+r.prod+') = '+mp.toFixed(2)+' g/mol</div><div>5. m('+r.prod+') = '+np.toFixed(4)+' × '+mp.toFixed(2)+' = <b>'+mpm.toFixed(3)+' g</b></div>';}
  sel?.addEventListener('change',calc);mass?.addEventListener('input',calc);root.querySelector('[data-act="calc"]')?.addEventListener('click',calc);calc();
 };
})();

(function(){
 const old=C.LEGACY_WIDGETS&&C.LEGACY_WIDGETS.get&&C.LEGACY_WIDGETS.get('indLab'); if(!old)return;
 const orig=old.mount;
 old.mount=function(root){
  let sol=null,ind=null,pred=null;
  const ids={hcl:'HCl',water:'H2O',naoh:'NaOH',caoh:'Ca(OH)2',cuoh:'Cu(OH)2'};
  const base={hcl:'acid',water:'neutral',naoh:'base',caoh:'base',cuoh:'neutral'};
  const comment={hcl:'HCl to kwas chlorowodorowy — odczyn kwasowy.',water:'Woda ma odczyn bliski obojętnemu.',naoh:'NaOH to mocna zasada — odczyn zasadowy.',caoh:'Roztwór Ca(OH)₂ ma odczyn zasadowy.',cuoh:'Cu(OH)₂ jest przede wszystkim trudno rozpuszczalnym osadem.'};
  const central=(f)=>{try{return W.substance?W.substance(f):null}catch(_){return null}};
  root.querySelectorAll('[data-sol]').forEach(b=>b.addEventListener('click',()=>{root.querySelectorAll('[data-sol]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');sol=b.dataset.sol;}));
  root.querySelectorAll('[data-ind]').forEach(b=>b.addEventListener('click',()=>{root.querySelectorAll('[data-ind]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');ind=b.dataset.ind;}));
  root.querySelectorAll('[data-pred]').forEach(b=>b.addEventListener('click',()=>{root.querySelectorAll('[data-pred]').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');pred=b.dataset.pred;}));
  root.querySelector('[data-act="check"]')?.addEventListener('click',()=>{const result=root.querySelector('.lab-result');if(!sol||!ind||!pred){result.className='lab-result info';result.textContent='Uzupełnij wszystkie kroki.';return;}const d=central(ids[sol]);const good=pred===base[sol];result.className='lab-result '+(good?'ok':'bad');result.innerHTML='<b>'+(good?'Dobrze.':'Nie do końca.')+'</b> '+(comment[sol]||'')+(d?' <small>Źródło: CHE.DATA / CHE.WIDGET_API.</small>':'');});
 };
})();

pack.widgets={burnRun:'ENGINE_ADAPTER',co2:'MIGRATED_REACTION_DATA',neutralSim:'ENGINE_ADAPTER',buffer:'MODEL_UI',indLab:'MIGRATED_SUBSTANCE_DATA',stoichSolver:'MIGRATED_MOLAR_MASS'};
C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};C.ENGINE_AUDIT.experiments=pack;
try{console.info('[CHE experiment migration v0.07]',pack)}catch(_){ }
})();
