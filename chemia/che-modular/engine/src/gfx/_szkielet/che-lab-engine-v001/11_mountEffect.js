
function mountEffect(id,host,opt){opt=opt||{};const wrap=el('div');wrap.dataset.effect=id;wrap.style.cssText='position:relative;min-height:'+(opt.height||170)+'px;border:1px solid var(--border,#e2e8f0);border-radius:12px;overflow:hidden;background:var(--surface-soft,#f1f5f9)';host.appendChild(wrap);const cv=el('canvas');cv.style.cssText='width:100%;height:100%;display:block';wrap.appendChild(cv);const ctx=cv.getContext('2d');let raf=0,t0=performance.now();function size(){const d=Math.min(g.devicePixelRatio||1,2),W=wrap.clientWidth||300,H=opt.height||170;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);return[W,H]}function frame(t){if(!cv.isConnected){cancelAnimationFrame(raf);return}const[W,H]=size();ctx.clearRect(0,0,W,H);const q=(t-t0)/1000;if(id==='heatGlow'){const pulse=.5+.5*Math.sin(q*3);ctx.fillStyle='rgba(240,120,30,'+(0.08+0.12*pulse)+')';ctx.beginPath();ctx.arc(W/2,H/2,25+28*pulse,0,7);ctx.fill()}else if(id==='bubbles'){for(let i=0;i<18;i++){const x=20+(i*37)%Math.max(40,W-40),y=H-((q*28+i*17)%(H-20));ctx.strokeStyle='rgba(70,150,190,.55)';ctx.beginPath();ctx.arc(x,y,2+(i%3),0,7);ctx.stroke()}}else if(id==='fumes'){for(let i=0;i<14;i++){const x=W/2+Math.sin(q*.7+i)*28+(i-7)*4,y=H-((q*20+i*13)%(H-20));ctx.fillStyle='rgba(120,120,120,.16)';ctx.beginPath();ctx.arc(x,y,6+(i%4),0,7);ctx.fill()}}else if(id==='ripples'){for(let i=0;i<5;i++){const f=((q*.6+i*.2)%1);ctx.strokeStyle='rgba(50,130,170,'+(1-f)*.5+')';ctx.beginPath();ctx.ellipse(W/2,H/2,20+f*W*.3,7+f*25,0,0,7);ctx.stroke()}}else if(id==='splash'){const f=q%1;ctx.fillStyle='rgba(40,130,180,.65)';for(let i=0;i<12;i++){const a=i/12*6.28,rr=f*(25+i%4*10);ctx.beginPath();ctx.arc(W/2+Math.cos(a)*rr,H*.52+Math.sin(a)*rr,2+(i%3),0,7);ctx.fill()}}raf=requestAnimationFrame(frame)}raf=requestAnimationFrame(frame);return{host:wrap,destroy:()=>cancelAnimationFrame(raf)}}
C.LAB.VISUALS={effects:EFFECTS,effectRegistry:EFFECT_REGISTRY,vessels:VESSELS,registry:VISUALS,panelSchema:PANEL_SCHEMA,register:registerVisual,get:id=>VISUALS[id]||null,effect:id=>EFFECT_REGISTRY[id]||null,mountEffect,defaults:{beaker:Object.keys(EFFECTS).reduce((a,k)=>(a[k]=1,a),{})},configure:(id,opt)=>Object.assign({},(VISUALS[id]&&VISUALS[id].effects)||{},opt||{})};
C.LAB.VISUALS.mountEffect=GFX.mountEffect;C.LAB.VISUALS.gfx=GFX;registerVisual('pHmeter',{kind:'instrument',parts:['body','lcd','scale','electrode'],data:['pH','temperature']});registerVisual('thermometer',{kind:'instrument',parts:['tube','column','scale'],data:['temperature']});registerVisual('burette',{kind:'instrument',parts:['tube','scale','tap','drop'],data:['titrantVolume']});registerVisual('burner',{kind:'vessel',parts:['base','tube','collar','flame'],data:['fuel','phi','power','soot']});registerVisual('cylinder',{kind:'vessel',parts:['body','foot'],data:['gas','volume']});
PANEL_SCHEMA.gasCoreAudit={id:'gasCoreAudit',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['gasSubstances'],outputs:[],subscriptions:['tick','chemistry','reset'],portable:true};PANEL_SCHEMA.chemistryAudit={id:'chemistryAudit',enabled:true,mode:['LIVE','SNAPSHOT','ISOLATED'],inputs:['chemistry'],outputs:[],subscriptions:['reaction','chemistry','reset'],portable:true};PANEL_SCHEMA.reactionCore={id:'reactionCore',enabled:true,mode:['LIVE','SNAPSHOT','LINKED','ISOLATED'],inputs:['reaction'],outputs:['reactionResult'],subscriptions:['reaction','reset'],portable:true};PANEL_SCHEMA.precipitation={id:'precipitation',enabled:true,mode:['INTERACTIVE','LINKED','ISOLATED'],inputs:['AgNO3','NaCl'],outputs:['AgCl','reaction'],subscriptions:['reset'],portable:true};
C.LAB.STATIONS=STATIONS;C.LAB.PANELS={names:PNAMES,titles:TITLES,portable:['scenarios','chemistryAudit','coreConsistencyAudit','gasCoreAudit','gasParallelAudit','reactionCore','precipitation','beaker','flask','testTube','cooler','gasLine','pHmeter','thermometer','effectLab','library','paper','pipette','balance','molTank','roundFlask','volFlask','funnel','petri','evapDish','gasTrap','combustion','thermal','splash','titration','gasAnalysis','gasMeasurement','gasCompare','gasSample','gasSeparator','gasAbsorber','gasUncertainty','gasBalance','measureStation','reactionCatalog','workflow','ph','temp','steps','reactionTable','measureChart','comparisonChart','eq','obs','log'],planned:[]};
const cardSty='border:1px solid var(--border,#e2e8f0);border-radius:14px;padding:12px 14px 14px;background:var(--surface,#fff);min-width:0';
function panel(name,host,o){o=o||{};const own=!o.session,lab=session(o.session,o);if(!P[name])return null;const w=el('div');w.dataset.panel=name;lab.hosts.push(w);host.appendChild(w);P[name](w,lab,o);const api={host:w,lab,name,destroy(){if(api.destroyed)return false;api.destroyed=true;if(w.parentNode)w.parentNode.removeChild(w);const i=lab.hosts.indexOf(w);if(i>=0)lab.hosts.splice(i,1);if(own)lab.destroy();return true}};return api}
function mount(host,opt){opt=opt||{};if(opt.preset&&C.LABVIEW.presets[opt.preset])opt=Object.assign({},C.LABVIEW.presets[opt.preset],opt);host.innerHTML='';
 const lab=session(opt.session||('m'+Date.now()+Math.random()),opt); if(C.LAB.REACTION_LINKS&&C.LAB.REACTION_LINKS.bind)C.LAB.REACTION_LINKS.bind(lab); const names=(opt.panels||PNAMES).filter(n=>P[n]&&!(opt.off||[]).includes(n)),box=el('div');
 box.style.cssText='display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))';host.appendChild(box);const wr={},panelApis=[];
 names.forEach(n=>{const c=el('div');c.style.cssText=cardSty+(FULL[n]?';grid-column:1/-1':'');if(opt.titles!==false)c.appendChild(el('div','lb-h',TITLES[n]));
  const b=el('div');b.style.marginTop='6px';c.appendChild(b);box.appendChild(c);wr[n]=c;lab.hosts.push(b);P[n](b,lab,opt);panelApis.push({name:n,host:b,container:c})});
 if(opt.toggle!==false&&names.length>2){const d=el('details',null,'<summary style="cursor:pointer;font-size:13px;font-weight:700">Panele (pokaż / ukryj)</summary>');const row=el('div');row.style.cssText='display:flex;flex-wrap:wrap;gap:6px 14px;padding:6px 0';
  names.forEach(n=>{const l=el('label',null,'<input type="checkbox" checked> '+TITLES[n]);l.style.cssText='font-size:13px;display:flex;gap:5px;align-items:center';l.firstChild.onchange=e=>{wr[n].style.display=e.target.checked?'':'none'};row.appendChild(l)});d.appendChild(row);host.insertBefore(d,box)}
 const api={host,lab,names,panelApis,destroy(){if(api.destroyed)return false;api.destroyed=true;if(box.parentNode)box.parentNode.removeChild(box);return lab.destroy()}};return api}

C.LAB.REACTION_ENGINE={version:'0.91',
 create:function(spec){
  spec=spec||{}; return {id:spec.id||'reaction',equation:spec.equation||'',reactants:spec.reactants||[],products:spec.products||[],conditions:spec.conditions||{},energy:spec.energy||null};
 },
 limit:function(reaction,amounts){
  var best=Infinity,lim=null;
  (reaction.reactants||[]).forEach(function(r){var n=Number(amounts&&amounts[r.id]||0),nu=Math.max(1,Number(r.coeff||1)),q=n/nu;if(q<best){best=q;lim=r.id;}});
  return {extent:isFinite(best)?best:0,limiting:lim};
 },
 run:function(reaction,amounts){
  var x=this.limit(reaction,amounts),out={extent:x.extent,limiting:x.limiting,consumed:{},formed:{}};
  (reaction.reactants||[]).forEach(function(r){out.consumed[r.id]=x.extent*Number(r.coeff||1);});
  (reaction.products||[]).forEach(function(r){out.formed[r.id]=x.extent*Number(r.coeff||1);});
  return out;
 }
};
C.LABVIEW={mount,panel,session,panels:PNAMES,panelSchema:PANEL_SCHEMA,linker:LINKER,embed:(host,opt)=>mount(host,Object.assign({mode:'LESSON'},opt||{})),graphSchema:STATIONS,exportSession:id=>{const l=SESS[id];return l?l.snapshot():null},importSession:(id,snap)=>{const l=session(id||snap&&snap.session);return l.restore(snap)?l:null},manifest:()=>({version:C.LAB.version,api:'0.95',stations:STATIONS,panels:PANEL_SCHEMA,visuals:VISUALS,effects:EFFECT_REGISTRY,vessels:VESSELS,workflow:true}),presets:{acids:{exclude:['Na','K','Ca'],panels:['controls','beaker','obs','eq','ph','bhp','seq','log']},oxides:{groups:['water','acid','base','oxide','carb','ind'],exclude:['Na','K'],panels:['controls','beaker','obs','eq','ph','bhp','seq','log']},l02:{groups:['water','acid','base','oxide','carb','ind'],exclude:['Na','K','Ag'],panels:['controls','beaker','obs','eq','ph','bhp','seq','log']},all:{},minimal:{panels:['beaker','ph','obs']},titration:{panels:['titration','reactionCore','measureChart','comparisonChart']},gas:{panels:['beaker','gasTrap','gasAnalysis','gasMeasurement','gasCompare','measureChart','obs']},gasFlow:{panels:['stationBoard','beaker','gasLine','gasTrap','gasAnalysis','gasMeasurement','gasCompare','gasSample','gasSeparator','gasAbsorber','gasUncertainty','gasBalance','measureChart','workflow']},thermal:{panels:['stationBoard','flask','cooler','thermal','temp','measureChart']},precipitation:{panels:['stationBoard','precipitation','reactionCore','beaker','obs','reactionTable','steps']},combustion:{panels:['stationBoard','combustion','reactionCore','measureChart','comparisonChart']},stations:{panels:['flask','gasLine','gasTrap','cooler','gasAnalysis','combustion','thermal','splash','titration','measureStation','workflow','measureChart']},catalog:{panels:['reactionCatalog','reactionTable','eq','bhp']}},visuals:VISUALS,effects:EFFECTS,vessels:VESSELS};

C.LAB.REACTION_CATALOG=C.LAB.REACTION_CATALOG||{
  version:'0.90',
  items:[
    {id:'comb-h2',eq:'2 H2 + O2 -> 2 H2O',reactants:[['H2',2],['O2',1]],products:[['H2O',2]],conditions:{ignition:true},energy:{type:'exothermic'}},
    {id:'comb-ch4',eq:'CH4 + 2 O2 -> CO2 + 2 H2O',reactants:[['CH4',1],['O2',2]],products:[['CO2',1],['H2O',2]],conditions:{ignition:true},energy:{type:'exothermic'}},
    {id:'mg-o2',eq:'2 Mg + O2 -> 2 MgO',reactants:[['Mg',2],['O2',1]],products:[['MgO',2]],conditions:{ignition:true},energy:{type:'exothermic'}},
    {id:'prec-agcl',eq:'AgNO3 + NaCl -> AgCl + NaNO3',reactants:[['AgNO3',1],['NaCl',1]],products:[['AgCl',1],['NaNO3',1]],conditions:{aqueous:true},energy:{type:'neutral'}}
  ]
};
C.LAB.BALANCER=C.LAB.BALANCER||{version:'0.91',balanceSimple:function(formulas){
  if(!Array.isArray(formulas)||!formulas.length)return {ok:false,reason:'empty'};
   
  return {ok:true,coefficients:formulas.map(x=>x.coeff||1),mode:'simple-preserve'};
}};
C.LAB.OBSERVATIONS=C.LAB.OBSERVATIONS||{version:'0.91',events:[],record:function(o){this.events.push(Object.assign({t:Date.now()},o));return o},clear:function(){this.events=[]},list:function(){return this.events.slice()}};
if(C.LAB.REACTION_ENGINE){
  const _run=C.LAB.REACTION_ENGINE.run;
  C.LAB.REACTION_ENGINE.run=function(r,opt){
    const out=_run? _run.call(this,r,opt||{}):null;
    if(out && C.LAB.OBSERVATIONS) C.LAB.OBSERVATIONS.record({kind:'reaction',reaction:r.id||r.eq||'unknown',result:out});
    return out;
  };
}

C.LAB.REACTION_API=C.LAB.REACTION_API||{
  version:'0.91',
  get:function(id){return (C.LAB.REACTION_CATALOG.items||[]).find(function(x){return x.id===id})||null},
  list:function(){return (C.LAB.REACTION_CATALOG.items||[]).slice()},
  observe:function(kind,data){return C.LAB.OBSERVATIONS.record({kind:kind,data:data})}
};
 
(function(C){
  const gcd=(a,b)=>{a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b){const t=a%b;a=b;b=t}return a||1};
  const lcm=(a,b)=>Math.abs(a*b)/gcd(a,b)||1;
  function parseFormula(f){
    const out={}; if(!f||typeof f!=='string')return out;
    const re=/([A-Z][a-z]?)(\d*(?:\.\d+)?)|\(([^)]+)\)(\d+(?:\.\d+)?)/g; let m;
    while((m=re.exec(f))){
      if(m[1]) out[m[1]]=(out[m[1]]||0)+(m[2]?Number(m[2]):1);
      else if(m[3]){
        const mult=Number(m[4]||1), sub=parseFormula(m[3]);
        Object.keys(sub).forEach(k=>out[k]=(out[k]||0)+sub[k]*mult);
      }
    }
    return out;
  }
  function rref(A){
    A=A.map(r=>r.slice()); const rows=A.length, cols=A[0]?.length||0; let lead=0;
    for(let r=0;r<rows&&lead<cols;r++){
      let i=r; while(i<rows&&Math.abs(A[i][lead])<1e-10)i++;
      if(i===rows){lead++;r--;continue}
      [A[i],A[r]]=[A[r],A[i]]; const d=A[r][lead]; A[r]=A[r].map(x=>x/d);
      for(let j=0;j<rows;j++) if(j!==r){const q=A[j][lead]; if(Math.abs(q)>1e-10) A[j]=A[j].map((x,k)=>x-q*A[r][k])}
      lead++;
    } return A;
  }
  function balance(reactants,products){
    const all=[...reactants,...products], els=[...new Set(all.flatMap(x=>Object.keys(parseFormula(x.formula))))];
    const n=all.length, A=els.map(e=>all.map((x,i)=>(i<reactants.length?-1:1)*(parseFormula(x.formula)[e]||0)));
    if(!n)return {ok:false,error:'Brak wzorów'};
    
    const M=A.map(row=>row.slice(0,n-1).concat([-row[n-1]]));
    const R=rref(M), x=new Array(n-1).fill(0);
    let piv=0; for(let i=0;i<R.length;i++){let p=R[i].findIndex(v=>Math.abs(v)>1e-9); if(p>=0&&p<n-1){x[p]=R[i][n-1];piv++}}
    x.push(1);
    if(x.some(v=>!Number.isFinite(v)))return {ok:false,error:'Układ nieoznaczony lub osobliwy'};
    let den=1; x.forEach(v=>{const d=(String(v).split('.')[1]||'').length; den=lcm(den,10**Math.min(d,6))});
    let ints=x.map(v=>Math.round(v*den)); const g=ints.reduce(gcd); ints=ints.map(v=>v/g);
    if(ints.some(v=>v<=0))return {ok:false,error:'Brak dodatnich współczynników dla zadanego układu'};
    const left=reactants.map((x,i)=>ints[i]+x.formula).join(' + '), right=products.map((x,i)=>ints[reactants.length+i]+x.formula).join(' + ');
    const balanceCheck=els.map(e=>{const L=reactants.reduce((q,x,i)=>q+ints[i]*(parseFormula(x.formula)[e]||0),0),R=products.reduce((q,x,i)=>q+ints[reactants.length+i]*(parseFormula(x.formula)[e]||0),0);return {element:e,left:L,right:R,ok:Math.abs(L-R)<1e-8}});
    return {ok:true,coefficients:ints,elements:els,balance:balanceCheck,equation:left+' → '+right};
  }
  C.LAB.STOICH={version:'0.91',parseFormula,balance};
})(window.CHE=window.CHE||{});
 
(function(C){
  const RE=C.LAB.REACTION_ENGINE;
  const CAT=C.LAB.REACTION_CATALOG;
  const OBS=C.LAB.OBSERVATIONS;
  function catReaction(id){
    const x=(CAT&&CAT.items||[]).find(r=>r.id===id); if(!x)return null;
    return {id:x.id,equation:x.eq,reactants:(x.reactants||[]).map(a=>({id:a[0],coeff:a[1]})),products:(x.products||[]).map(a=>({id:a[0],coeff:a[1]})),conditions:x.conditions||{},energy:x.energy||null};
  }
  function run(id,amounts,yieldFrac){
    const r=catReaction(id); if(!r||!RE)return {ok:false,error:'Brak reakcji '+id};
    const raw=RE.run(r,amounts||{}), y=Math.max(0,Math.min(1,Number(yieldFrac==null?1:yieldFrac)));
    const formed={};Object.keys(raw.formed||{}).forEach(k=>formed[k]=raw.formed[k]*y);
    const consumed=raw.consumed||{};
    const mm=this.molarMass;
    const massOf=(map)=>Object.keys(map||{}).reduce((q,k)=>q+Number(map[k]||0)*Number(mm(k)||0),0);
    const theoreticalMass=massOf(raw.formed||{}), consumedMass=massOf(consumed), actualMass=massOf(formed);
    const result=Object.assign({},raw,{yield:y,theoretical:raw.formed||{},actual:formed,consumed,theoreticalMassKg:theoreticalMass,consumedMassKg:consumedMass,actualMassKg:actualMass,massBalanceTheoreticalKg:consumedMass-theoreticalMass,massBalanceActualKg:consumedMass-actualMass,ledger:{status:Math.abs(consumedMass-theoreticalMass)<1e-9?'PASS':'CHECK'}});
    OBS&&OBS.record({kind:'reactionRun',reaction:id,result:result});
    C.LAB.lastReaction=result; return result;
  }
  function molarMass(id){const M={H2:0.002016,O2:0.031998,CH4:0.016043,C3H8:0.044097,Mg:0.024305,H2O:0.01801528,CO2:0.0440095,CO:0.0280101,MgO:0.0403044,AgNO3:0.1698731,NaCl:0.05844,AgCl:0.1433212,NaNO3:0.0849947,HCl:0.03646,NaOH:0.04};return M[id]||0;}
  C.LAB.REACTION_LINKS={version:'0.91',run:run,catalog:catReaction,molarMass:molarMass,
    combustion:{H2:'comb-h2',CH4:'comb-ch4',C3H8:'comb-c3h8',Mg:'mg-o2'},
    precipitation:'prec-agcl',titration:'acid-base-neutralization'};
   
  if(CAT&&!CAT.items.some(x=>x.id==='acid-base-neutralization'))CAT.items.push({id:'acid-base-neutralization',eq:'HCl + NaOH → NaCl + H₂O',reactants:[['HCl',1],['NaOH',1]],products:[['NaCl',1],['H2O',1]],conditions:{aqueous:true},energy:{type:'exothermic'}});
  if(CAT&&!CAT.items.some(x=>x.id==='comb-c3h8'))CAT.items.push({id:'comb-c3h8',eq:'C3H8 + 5 O2 → 3 CO2 + 4 H2O',reactants:[['C3H8',1],['O2',5]],products:[['CO2',3],['H2O',4]],conditions:{ignition:true},energy:{type:'exothermic'}});
  P.chemistryAudit=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const render=()=>{const c=lab.chemistry||{},rows=Object.values(c.substances||{}),r=c.last;const flags=[{n:'REAKCJA',v:r?'wspólny REACTION_ENGINE':'brak przebiegu'},{n:'STECHIOMETRIA',v:r?'STOICH / katalog':'oczekuje'},{n:'POMIARY',v:'wspólne lab.measurements'},{n:'TEMPERATURA',v:'wspólny model cieplny'},{n:'pH',v:'model stanu zlewki — wizualizacja/obliczenie pomocnicze'},{n:'GAZ',v:'SUBSTANCE + model gazowy'}];box.innerHTML='<div style="'+cardSty+'"><b>Audyt źródeł danych</b>'+flags.map(x=>'<div style="margin-top:4px"><b>'+x.n+':</b> '+x.v+'</div>').join('')+'</div><div style="'+cardSty+'"><b>Substancje w rdzeniu</b><br>'+(rows.length?rows.map(x=>x.id+' · '+Number(x.amountMol||0).toFixed(6)+' mol · '+(x.phase||'—')).join('<br>'):'brak zapisanych substancji')+'</div><div style="'+cardSty+'"><b>Ostatni bilans:</b> '+(r?(r.equation||r.id)+' · '+(r.ledger&&r.ledger.status||'CHECK'):'brak reakcji')+'</div>'};lab.on('reaction',render);lab.on('chemistry',render);lab.on('reset',render);render()};
  P.gasCoreAudit=(h,lab)=>{const render=()=>{const c=lab.chemistry||{},s=c.substances||{},g=lab.gasTrapState||{},keys=['CO2','CO','H2O','O2','fuel','MgO','H2O_liquid'];const rows=keys.filter(k=>s[k]).map(k=>{const x=s[k];return '<tr><td>'+k+'</td><td>'+Number(x.amountMol||0).toFixed(6)+'</td><td>'+Number(x.massKg||0).toFixed(6)+'</td><td>'+x.phase+'</td><td>'+((x.source||'')||'—')+'</td></tr>'}).join('');h.innerHTML='<div style="'+cardSty+'"><b>Audyt wspólnego modelu gazu</b><br><small>Odbiornik gazu jest źródłem stanu, a ilości molowe są synchronizowane z CHE.LAB chemistry.substances.</small></div><div style="'+cardSty+';overflow:auto"><table style="width:100%;border-collapse:collapse"><tr><th>Substancja</th><th>mol</th><th>kg</th><th>faza</th><th>źródło</th></tr>'+(rows||'<tr><td colspan="5">Brak zarejestrowanych substancji gazowych</td></tr>')+'</table></div><div style="'+cardSty+'">Źródło objętości: <b>gasTrap</b> · V = '+Number(g.volume||0).toFixed(4)+' L · p = '+Number(g.pressure||0).toFixed(0)+' Pa · T = '+Number(g.temp||25).toFixed(1)+' °C</div>'};lab.on('tick',render);lab.on('chemistry',render);lab.on('reset',render);render()};
P.coreConsistencyAudit=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const render=()=>{const c=lab.chemistry||{},m=lab.measurementSchema||{},issues=[],checks=[];const add=(name,ok,detail)=>{checks.push({name,ok,detail});if(!ok)issues.push(name+': '+detail)};add('CHE.LAB.version',!!C.LAB.version,'wersja '+C.LAB.version);add('REACTION_ENGINE',!!(C.LAB.REACTION_ENGINE||C.LAB.REACTION_LINKS),'rdzeń reakcji dostępny');add('STOICH',!!C.LAB.STOICH,'solver stechiometryczny dostępny');add('SUBSTANCE',!!c.substances,'centralny magazyn substancji dostępny');add('AMOUNT',Object.values(c.substances||{}).every(x=>Number.isFinite(Number(x.amountMol))&&Number(x.amountMol)>=0),'ilości molowe są nieujemne i liczbowe');add('MEASUREMENT',!!lab.record&&!!lab.measurements,'wspólny dziennik pomiarów dostępny');add('pH',!!m.pH&&m.pH.source==='pH(state)','pH ma jawne źródło');add('TEMPERATURE',!!m.thermalTemperature&&m.thermalTemperature.source==='thermalState.T','temperatura ma jawne źródło wspólnego modelu cieplnego');add('GAS',!!m.gasVolume&&!!m.exhaustMoles,'gaz ma objętość i ilość molową');add('MASS',Object.keys(m).filter(k=>k==='mass').length===1,'brak zduplikowanego klucza mass w schema');const r=c.last;add('REACTION_RESULT',!r||!!(r.equation||r.id),'ostatni wynik reakcji ma identyfikator');const status=issues.length?'BLOCK':'PASS';box.innerHTML='<div style="'+cardSty+'"><b>'+status+'</b> · końcowy audyt wspólnego modelu</div>'+checks.map(x=>'<div style="'+cardSty+'"><b>'+(x.ok?'PASS':'BLOCK')+'</b> · '+x.name+' — '+x.detail+'</div>').join('')};lab.on('reaction',render);lab.on('chemistry',render);lab.on('measurement',render);lab.on('reset',render);render()};
  P.gasParallelAudit=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:6px';h.appendChild(box);const render=()=>{const d=lab.gasTrapState||{},a=lab.chemistry.auditGas(d),items=[['gasTrap.moles','lokalne ilości'],['chemistry.substances','wspólne substancje'],['gasSample','próbka'],['gasSeparator','fazy'],['gasAbsorber','absorpcja'],['gasMeasurement','pomiar']];box.innerHTML='<div style="'+cardSty+'"><b>'+(a.ok?'PASS':'BLOCK')+'</b> · zgodność lokalnego odbiornika ze wspólnym modelem'+(a.issues.length?'<br>'+a.issues.join('<br>'):'')+'</div>'+items.map(x=>'<div style="'+cardSty+'"><b>'+x[0]+'</b> · '+x[1]+'</div>').join('')};lab.on('chemistry',render);lab.on('reset',render);render()};
P.reactionCore=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const out=el('div');box.appendChild(out);function render(){const r=C.LAB.lastReaction;if(!r){out.innerHTML='<div style="'+cardSty+'">Brak wykonanej reakcji.</div>';return}out.innerHTML='<div style="'+cardSty+'"><b>Reakcja:</b> '+(r.equation||r.id)+'<br><b>Reagent ograniczający:</b> '+(r.limiting||'—')+' · <b>postęp:</b> '+Number(r.extent||0).toFixed(6)+' mol · <b>wydajność:</b> '+(100*Number(r.yield==null?1:r.yield)).toFixed(1)+'%</div><div style="'+cardSty+'"><b>Produkty rzeczywiste:</b> '+Object.entries(r.actual||{}).map(([k,v])=>k+' '+Number(v).toFixed(6)+' mol').join(' · ')+'<br><b>Bilans masy teoretyczny:</b> '+(Number(r.massBalanceTheoreticalKg||0)*1000).toFixed(6)+' g · '+(r.ledger&&r.ledger.status||'CHECK')+'</div>'}lab.on('tick',render);lab.on('reset',render);lab.on('reaction',render);render()};
  P.precipitation=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:7px';h.appendChild(box);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:7px';c.innerHTML='<label>AgNO₃ [mol]<input class="a" type="number" min="0" step="0.0001" value="0.001" style="width:100%"></label><label>NaCl [mol]<input class="b" type="number" min="0" step="0.0001" value="0.001" style="width:100%"></label><label>Wydajność [%]<input class="y" type="number" min="0" max="100" value="100" style="width:100%"></label><button class="run" style="padding:7px 10px">Wykonaj strącanie</button>';box.appendChild(c);const out=el('div');box.appendChild(out);c.querySelector('.run').onclick=()=>{const r=C.LAB.REACTION_LINKS.run('prec-agcl',{AgNO3:+c.querySelector('.a').value,NaCl:+c.querySelector('.b').value},+c.querySelector('.y').value/100);lab.emit('reaction',r);out.innerHTML='<div style="'+cardSty+'"><b>AgCl:</b> '+Number((r.actual||{}).AgCl||0).toFixed(6)+' mol · '+(Number((r.actual||{}).AgCl||0)*0.1433212*1000).toFixed(3)+' g</div><div style="'+cardSty+'">Reagent ograniczający: '+(r.limiting||'—')+'</div>'};};
   
  C.LAB._reactionAccum={combustion:0,titration:0};
   
  const bindCombustion=(lab)=>{
    if(lab.__reactionCombustion)return;lab.__reactionCombustion=true;
    lab.on('combustion',function(d){
      const id=C.LAB.REACTION_LINKS.combustion[d.fuel]; if(!id)return;
      const M=C.LAB.REACTION_LINKS.molarMass(d.fuel)||0;
      if(!M)return;
      const dt=(window.CHE&&CHE.LAB&&CHE.LAB.HEAT&&CHE.LAB.HEAT.step)||0.5;
      const fuelMol=Math.max(0,Number(d.massFlow||0))*dt/M;
      const o2Mol=Math.max(0,Number(d.o2Available||0))*dt/0.031998;
      const y=Math.max(0,Math.min(1,Number(d.efficiency==null?1:d.efficiency)));
      const rr=C.LAB.REACTION_LINKS.run(id,Object.assign({},{[d.fuel]:fuelMol,O2:o2Mol}),y);
      rr.source='combustion';rr.mode='theoretical-common-reaction';
      lab.emit('reaction',rr);
    });
  };
  const bindTitration=(lab)=>{
    if(lab.__reactionTitration)return;lab.__reactionTitration=true;
    lab.on('measurement',function(m){
      if(m.kind!=='titrantVolume')return;
      const V_L=Math.max(0,Number(m.value||0))*0.001;
      const c=0.1, hcl=0.0008, naoh=V_L*c;
      const rr=C.LAB.REACTION_LINKS.run('acid-base-neutralization',{HCl:hcl,NaOH:naoh},1);
      rr.source='titration';rr.volume=m.value;rr.titrantConcentration=c;
      lab.emit('reaction',rr);
    });
  };
  const bindPrecipitation=(lab)=>{if(lab.__reactionPrecip)return;lab.__reactionPrecip=true;lab.on('reaction',function(r){if(r&&r.source==='precipitation')lab.record('precipitateAmount',Number(r.actual&&r.actual.AgCl||0),'mol',{reaction:r.id})})};
   
  const syncReaction=(lab,r)=>{if(!r||!r.id)return;r._central=true;const c=lab.chemistry;c.last=r;c.reactions.push({t:lab.t,id:r.id,limiting:r.limiting,extent:r.extent,yield:r.yield,theoretical:r.theoretical,actual:r.actual,consumed:r.consumed,mass:r.ledger});Object.keys(r.consumed||{}).forEach(k=>c.upsert(k,-Number(r.consumed[k]||0),'consumed',{source:'reaction'}));Object.keys(r.actual||{}).forEach(k=>c.upsert(k,Number(r.actual[k]||0),'product',{source:'reaction'}));lab.record('reactionExtent',Number(r.extent||0),'mol',{reaction:r.id,limiting:r.limiting,yield:r.yield,massBalance:r.ledger});lab.emit('chemistry',c.snapshot())};
  C.LAB.REACTION_LINKS.bind=function(lab){bindCombustion(lab);bindTitration(lab);bindPrecipitation(lab);lab.on('reaction',r=>syncReaction(lab,r));return true};

  if(C.LAB._reactionBound!==true){
    C.LAB._reactionBound=true;
    C.LAB._reactionTickUnsub=C.LAB.session?null:null;
  }
})(window.CHE=window.CHE||{});