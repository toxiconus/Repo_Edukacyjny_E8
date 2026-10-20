

(function(){
  if(C.LAB._addWrapped)return;
  const _add=C.LAB.add;
  if(typeof _add!=='function')return;
  C.LAB.add=function(S,id,amt,conc){
    const evs=_add(S,id,amt,conc);
    try{C.LAB.enrichEvents(S,evs)}catch(_){}
    return evs;
  };
  C.LAB._addWrapped=true;
})();

C.LAB.phAPI={
  version:'1.02',
  source:()=> (C.EQUILIBRIUM&&C.EQUILIBRIUM.weakAcidPH)?'CHE.EQUILIBRIUM+LAB.state':'LAB.internal',
  fromState:function(S){return (C.LAB.pH||function(){return 7})(S)},
  weakAcid:function(c,Ka){const Eq=C.EQUILIBRIUM;if(Eq&&Eq.weakAcidPH)return Eq.weakAcidPH(c,Ka==null?1.8e-5:Ka);c=Number(c);Ka=Number(Ka==null?1.8e-5:Ka);return (c>0&&Ka>0)?-Math.log10(Math.sqrt(Ka*c)):7},
  buffer:function(pKa,base,acid){const Eq=C.EQUILIBRIUM;if(Eq&&Eq.bufferPH)return Eq.bufferPH(pKa,base,acid);return Number(pKa)+Math.log10(Number(base)/Number(acid))},
  titration:function(opt){const Eq=C.EQUILIBRIUM;if(Eq&&Eq.titrationPH)return Eq.titrationPH(opt||{});return NaN},
  strongNeutralization:function(aM,aV,bM,bV){const Eq=C.EQUILIBRIUM;if(Eq&&Eq.strongNeutralizationPH)return Eq.strongNeutralizationPH(aM,aV,bM,bV);return NaN}
};
if(C.EQUILIBRIUM&&!C.EQUILIBRIUM.fromLabState){
  C.EQUILIBRIUM.fromLabState=function(S){return C.LAB.phAPI.fromState(S)};
}

(function(){
  const _pH=pH;
  C.LAB.pH=function(S){
    try{
      const Eq=C.EQUILIBRIUM; if(!Eq)return _pH(S);
      const k=0.1/Math.max(S.V,.3), OHn=S.OH+0.01*S.carbSol, Hn=S.H;
      const HA=Math.min(S.weakH||0,Math.max(Hn,0)), sH=Math.max(0,Hn-HA), A=S.weakA||0;
      if(OHn>Hn+1e-3){const p=14+Math.log10(k*(OHn-Hn));const cap=S.bases.length&&S.bases.every(b=>b==='Ca(OH)2')?12.6:14;return Math.min(cap,p)}
      if(sH>1e-4)return Math.max(-1,-Math.log10(k*sH));
      if(HA>1e-4&&A>1e-4&&typeof Eq.bufferPH==='function'){
        const v=Eq.bufferPH(4.745, k*A, k*HA); if(isFinite(v))return v;
      }
      if(HA>1e-4&&A<=1e-4&&typeof Eq.weakAcidPH==='function'){
        const v=Eq.weakAcidPH(k*HA,1.8e-5); if(isFinite(v))return v;
      }
      if(A>1e-4&&HA<=1e-4&&typeof Eq.bufferPH==='function'){
         
        return 7+.5*(4.745+Math.log10(k*A));
      }
    }catch(_){}
    return _pH(S);
  };
   
})();

const HEAT={version:'0.74',ambient:25,defaultLoss:0.018,clampMin:-50,clampMax:2400,step:0.5,
  SI:{power:'W',energy:'J',mass:'kg',cp:'J/(kg·K)',flow:'kg/s',area:'m²',U:'W/(m²·K)',temperature:'°C'},
  transfer:function(q,mass,cp){return mass>0&&cp>0?q/(mass*cp):0},
  loss:function(U,A,T,ambient){return Math.max(0,(U||0)*(A||0)*(T-ambient))},
  exchanger:function(Tin,Tload,flow,UA,cp){const m=Math.max(0,flow||0),c=cp||4180,cap=m*c;if(cap<=0||UA<=0)return{q:0,Tout:Tin,NTU:0,eps:0};const NTU=UA/cap,eps=1-Math.exp(-NTU);const q=Math.max(0,cap*eps*(Tload-Tin));return{q:q,Tout:Tin+(q/cap),NTU:NTU,eps:eps,capacityRate:cap}},
  net:function(source,cooling,loss,T,ambient){return (source||0)-(cooling||0)-((T-ambient)*(loss||0))}
};
const GASPHYS={version:'0.74',R:8.314462618,standardT:273.15+25,standardP:101325,MW:{CO2:.04401,CO:.02801,H2O:.01801528,O2:.0319988,H2:.002016,CH4:.01604,C3H8:.04410,Mg:.024305,MgO:.040304,fuel:.044},
  saturationWaterPa(Tc){const T=Math.max(1,Math.min(100,Number(Tc)||25));const A=8.07131,B=1730.63,C=233.426;return Math.pow(10,A-B/(C+T))*133.322368;},
  waterPhase(Tc,pPa,waterMol){const ps=Math.min(Math.max(0,Number(pPa)||101325),101325),sat=this.saturationWaterPa(Tc);const maxVap=Math.max(0,ps>0?waterMol*Math.min(1,sat/ps):waterMol);return {vaporMol:maxVap,liquidMol:Math.max(0,waterMol-maxVap),vaporFraction:waterMol>0?maxVap/waterMol:0};},
  mixtureMolMass(moles){let n=0,m=0;Object.keys(moles||{}).forEach(k=>{const x=Math.max(0,Number(moles[k])||0),mw=this.MW[k]||this.MW.fuel;n+=x;m+=x*mw});return n?m/n:0;},
  idealVolume(nMol,Tc,pPa){return Math.max(0,nMol)*this.R*(Math.max(-273.14,Number(Tc)||25)+273.15)/Math.max(1000,Number(pPa)||101325);}};
const SCENARIOS={gasCapture:{id:'gasCapture',title:'Zbieranie gazu',station:'gas',start:'w',panels:['controls','beaker','gasLine','gasTrap','gasAnalysis','measureChart','workflow','stationBoard']},titration:{id:'titration',title:'Miareczkowanie modelowe',station:'titration',start:'w',panels:['titration','measureChart','comparisonChart','workflow']},thermal:{id:'thermal',title:'Ogrzewanie i chłodzenie',station:'thermal',start:'w',panels:['stationBoard','flask','cooler','thermal','temp','measureChart','workflow']},precipitation:{id:'precipitation',title:'Strącanie osadu',station:'precipitation',start:'w',panels:['controls','beaker','obs','reactionTable','measureChart','workflow']},combustion:{id:'combustion',title:'Spalanie dydaktyczne',station:'combustion',start:'w',panels:['combustion','measureChart','comparisonChart','workflow']}};
const STATIONS={
 gas:{id:'gas',title:'Zbieranie i analiza gazu',nodes:[
  ['source','Źródło reakcji','reaction',[],['reaction']],['line','Przewód gazowy','gasFlow',['gasFlow'],['gasFlow']],['receiver','Odbiornik gazu','gasVolume',['gasVolume'],['gasVolume']],['analysis','Analiza gazu','interpretation',['gas'],['interpretation']],['chart','Wykres','measurement',['measurement'],['measurement']]
 ],edges:[['source','reaction','line','gasFlow'],['line','gasFlow','receiver','gasVolume'],['receiver','gasVolume','analysis','gas'],['receiver','gasVolume','chart','measurement']]},
 titration:{id:'titration',title:'Miareczkowanie',nodes:[
  ['sample','Próbka','pH',[],['pH']],['titrant','Titrant','titrant',[],['titrant']],['station','Stacja miareczkowania','titrationPH',['titrant'],['titrationPH']],['chart','Krzywa pH(V)','measurement',['measurement'],['measurement']]
 ],edges:[['titrant','titrant','station','titrant'],['station','titrationPH','chart','measurement'],['sample','pH','chart','measurement']]},
 thermal:{id:'thermal',title:'Ogrzewanie i chłodzenie',nodes:[
  ['source','Źródło ciepła','heatSource',[],['heatSource']],
  ['vessel','Naczynie','temperature',['heatSource','coolingPower'],['temperature']],
  ['cooler','Chłodnica / wymiennik','coolingPower',['temperature'],['coolingPower','coolantOutletTemperature']],
  ['chart','Wykres T(t)','measurement',['temperature','coolantOutletTemperature'],['measurement']]
 ],edges:[['source','heatSource','vessel','heatSource'],['vessel','temperature','cooler','temperature'],['cooler','coolingPower','vessel','coolingPower'],['vessel','temperature','chart','temperature'],['cooler','coolantOutletTemperature','chart','coolantOutletTemperature']]},
 precipitation:{id:'precipitation',title:'Reakcja strącania',nodes:[
  ['reactants','Odczynniki','reaction',[],['reaction']],['vessel','Naczynie','reaction',['reaction'],['reaction']],['solid','Osad','observation',['observation'],['observation']],['chart','Dziennik obserwacji','measurement',['measurement'],['measurement']]
 ],edges:[['reactants','reaction','vessel','reaction'],['vessel','reaction','solid','observation'],['solid','observation','chart','measurement']]},
 combustion:{id:'combustion',title:'Spalanie — dopływ gazu, powietrza i skład paliwa',nodes:[
  ['fuel','Paliwo','fuel',[],['fuel']],
  ['air','Dopływ powietrza','air',[],['air']],
  ['composition','Skład C/H/O','composition',[],['composition']],
  ['mixer','Mieszanie w palniku','mixture',['fuel','air','composition'],['mixture']],
  ['flame','Płomień / spalanie','energy',['mixture'],['energy','products','temperature']],
  ['products','Produkty spalania','products',['products'],['products']],
  ['chart','Temperatura i energia','measurement',['measurement'],['measurement']]
 ],edges:[['fuel','fuel','mixer','fuel'],['air','air','mixer','air'],['composition','composition','mixer','composition'],['mixer','mixture','flame','mixture'],['flame','products','products','products'],['flame','energy','chart','measurement']]}
};
function createWorkflow(lab){
 const wf={version:'0.74',nodes:[],edges:[],bindings:{},subscriptions:[],active:false,
  addNode(id,type,label,ports){if(!id)return null;const old=wf.nodes.find(n=>n.id===id);if(old)return old;const p=ports||{};const n={id,type:type||id,label:label||id,ports:{input:Array.isArray(p.input)?p.input.slice():[],output:Array.isArray(p.output)?p.output.slice():[]}};wf.nodes.push(n);return n},
  removeNode(id){wf.disconnectNode(id);delete wf.bindings[id];wf.nodes=wf.nodes.filter(n=>n.id!==id);return true},
  connect(from,fromPort,to,toPort){if(!wf.nodes.some(n=>n.id===from)||!wf.nodes.some(n=>n.id===to))return null;const a=wf.nodes.find(n=>n.id===from),b=wf.nodes.find(n=>n.id===to);if(!a.ports.output.includes(fromPort)||!b.ports.input.includes(toPort))return null;const e={from,fromPort,to,toPort};if(!wf.edges.some(x=>x.from===from&&x.to===to&&x.fromPort===fromPort&&x.toPort===toPort))wf.edges.push(e);return e},
  disconnectNode(id){wf.edges=wf.edges.filter(e=>e.from!==id&&e.to!==id)},
  clear(){wf.deactivate();wf.nodes=[];wf.edges=[];wf.bindings={}},
  bind(id,module){if(!wf.nodes.some(n=>n.id===id)||!module)return false;wf.bindings[id]=module;return true},
  loadPreset(name){const d=STATIONS[name];if(!d)return false;wf.clear();d.nodes.forEach(n=>wf.addNode(n[0],n[0],n[1],{input:n[3],output:n[4]}));d.edges.forEach(e=>wf.connect(e[0],e[1],e[2],e[3]));const v=wf.validate();if(!v.ok)return false;wf.activate();lab.emit('workflow',wf.snapshot());return true},
  validate(){const errors=[];const connectedIn=new Set(),connectedOut=new Set();wf.edges.forEach(e=>{const a=wf.nodes.find(n=>n.id===e.from),b=wf.nodes.find(n=>n.id===e.to);if(!a)errors.push('brak źródła '+e.from);if(!b)errors.push('brak celu '+e.to);if(a&&!a.ports.output.includes(e.fromPort))errors.push('brak wyjścia '+e.from+'.'+e.fromPort);if(b&&!b.ports.input.includes(e.toPort))errors.push('brak wejścia '+e.to+'.'+e.toPort);connectedOut.add(e.from+'|'+e.fromPort);connectedIn.add(e.to+'|'+e.toPort)});wf.nodes.forEach(n=>{if(!n.ports.input.length&&!n.ports.output.length)errors.push('węzeł bez portów '+n.id)});return{ok:!errors.length,errors,nodes:wf.nodes.length,edges:wf.edges.length,closed:!errors.length}},
  routeValue(port){const S=lab.S||{};const cb=lab.combustionState||{};const pHnow=pH(S);if(port==='reaction'||port==='observation')return {state:S,last:lab.last};if(port==='gasFlow')return {t:lab.t,gas:S.gas,gasT:S.gasT,volume:S.V};if(port==='gasVolume')return {gas:S.gas,volume:Number(S.gasT||0)};if(port==='temperature')return {t:lab.t,value:S.T,unit:'°C'};if(port==='cooledTemperature')return {t:lab.t,value:25+(S.T-25)*.35,unit:'°C'};if(port==='pH')return {t:lab.t,value:pHnow,unit:'pH'};if(port==='titrationPH')return {t:lab.t,value:pHnow,unit:'pH'};if(port==='fuel')return {fuel:cb.fuel||lab.inputs.fuel||'CH4',gasFlow:Number(cb.gasFlow??55)};if(port==='air')return {airFlow:Number(cb.airFlow??100),oxygenFraction:.21};if(port==='composition')return {C:Number(cb.C??75),H:Number(cb.H??25),O:Number(cb.O??0)};if(port==='mixture')return {fuel:cb.fuel||'CH4',gasFlow:Number(cb.gasFlow??0),airFlow:Number(cb.airFlow??0),composition:{C:Number(cb.C??75),H:Number(cb.H??25),O:Number(cb.O??0)}};if(port==='energy')return {value:Number(cb.powerW??0),unit:'W',temperature:Number(cb.temperature??25),energy:Number(cb.energyJ??0),energyUnit:'J'};if(port==='products')return {products:Array.isArray(cb.products)?cb.products.slice():[]};if(port==='measurement')return lab.measurements[lab.measurements.length-1]||null;return lab.inputs[port]??null},
  run(data){let delivered=0;wf.edges.forEach(e=>{const target=wf.bindings[e.to]||lab;if(target&&typeof target.receive==='function'){target.receive(e.toPort,data);delivered++}});lab.emit('workflowRun',{value:data,delivered,graph:wf.snapshot()});return{value:data,delivered}},
  activate(){wf.deactivate();if(!wf.validate().ok)return false;const events={reaction:'add',observation:'add',gasFlow:'tick',gasVolume:'tick',temperature:'tick',cooledTemperature:'tick',pH:'tick',titrationPH:'tick',measurement:'measurement',fuel:'combustion',oxidant:'combustion',air:'combustion',composition:'combustion',mixture:'combustion',energy:'combustion',products:'combustion'};wf.edges.forEach(e=>{const ev=events[e.fromPort];if(!ev)return;const off=lab.on(ev,()=>{const data=wf.routeValue(e.fromPort);const target=wf.bindings[e.to]||lab;if(target&&typeof target.receive==='function')target.receive(e.toPort,data);lab.emit('route',{edge:e,data})});wf.subscriptions.push(off)});wf.active=true;return true},
  deactivate(){wf.subscriptions.splice(0).forEach(f=>{try{f()}catch(_){}});wf.active=false},
  snapshot(){return JSON.parse(JSON.stringify({version:wf.version,nodes:wf.nodes,edges:wf.edges,active:wf.active}))},
  restore(x){if(!x||!Array.isArray(x.nodes)||!Array.isArray(x.edges))return false;wf.deactivate();wf.nodes=JSON.parse(JSON.stringify(x.nodes));wf.edges=JSON.parse(JSON.stringify(x.edges));wf.bindings={};if(x.active)wf.activate();return wf.validate().ok}
 };return wf
}
const SESS={},STARTS={w:['z wodą'],e:['pusta zlewka'],hs:['stężony H₂SO₄ w zlewce','H2SO4','stęż. H₂SO₄'],hc:['stężony HCl w zlewce','HCl','stęż. HCl'],nb:['stężony NaOH w zlewce','NaOH','stęż. NaOH']};
const PNAMES=['selfTest','chemistryAudit','coreConsistencyAudit','gasCoreAudit','gasParallelAudit','reactionCore','precipitation','graphAudit','scenarios','stationBoard','experimentIO','controls','beaker','gasTrap','flask','testTube','cooler','gasLine','pHmeter','thermometer','effectLab','library','paper','pipette','balance','molTank','roundFlask','volFlask','funnel','petri','evapDish','bhp','seq','obs','eq','ph','temp','steps','log','reactionTable','measureChart','comparisonChart','titration','combustion','thermal','splash','gasAnalysis','gasMeasurement','gasCompare','gasSample','gasSeparator','gasAbsorber','gasUncertainty','gasBalance','measureStation','reactionCatalog','linkView','workflow']; 
const TITLES={selfTest:'Autodiagnostyka modułu',graphAudit:'Audyt grafów',scenarios:'Scenariusze doświadczeń',experimentIO:'Zapis i odtworzenie eksperymentu',stationBoard:'Stanowiska Multi-Lab',workflow:'Przepływ stanowiska',src:'Źródła danych modułu',flask:'Kolba reakcyjna',testTube:'Probówka',cooler:'Chłodnica',pHmeter:'pH-metr cyfrowy',library:'Biblioteka elementów',paper:'Papierki wskaźnikowe',pipette:'Pipeta',balance:'Waga',molTank:'Zbiornik cząsteczek',roundFlask:'Kolba okrągłodenna',volFlask:'Kolba miarowa',funnel:'Lejek',petri:'Szalka Petriego',evapDish:'Parownica',effectLab:'Laboratorium efektów',thermometer:'Termometr',gasLine:'Przewód gazowy',linkView:'Przepływ między modułami',controls:'Odczynniki',beaker:'Zlewka',bhp:'BHP',seq:'Kolejność dodawania',obs:'Obserwacja',eq:'Równanie reakcji',ph:'pH i wskaźniki',temp:'Temperatura w czasie',steps:'pH w kolejnych krokach',log:'Dziennik',reactionTable:'Tabela reakcji',measureChart:'Wykres pomiaru',gasTrap:'Odbiornik gazu',combustion:'Stanowisko spalania',thermal:'Stanowisko cieplne',splash:'Zdarzenie: rozprysk',titration:'Miareczkowanie',gasAnalysis:'Analiza gazu',gasMeasurement:'Pomiar próbki gazu',gasCompare:'Porównanie gazu przed i po kondensacji',gasSample:'Pobieranie próbki gazu',gasSeparator:'Separacja gazu i kondensatu',gasAbsorber:'Absorber składnika gazowego',gasUncertainty:'Niepewność pomiaru gazu',gasBalance:'Bilans gazowy doświadczenia',measureStation:'Stacja pomiarowa',reactionCatalog:'Katalog reakcji',comparisonChart:'Porównanie pomiarów',reactionCore:'Wspólny rdzeń reakcji',chemistryAudit:'Audyt wspólnego rdzenia',coreConsistencyAudit:'Końcowy audyt wspólnego modelu',gasCoreAudit:'Audyt wspólnego modelu gazu',gasParallelAudit:'Audyt równoległych modeli gazu',precipitation:'Stanowisko strącania'};
const FULL={controls:1,bhp:1,seq:1,eq:1,log:1};
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const sty='padding:10px 8px;border-radius:10px;border:1px solid var(--border,#cbd5e1);background:var(--surface,#fff);color:var(--text,#0f172a);font:600 14px Inter,system-ui;min-height:44px;';
const css=(c,a)=>'rgba('+Math.round(c[0])+','+Math.round(c[1])+','+Math.round(c[2])+','+(a==null?1:a)+')';
const LBCSS=`
/* CHE.LAB bridge → tokeny silnika głównego */
:root{
  --surface:var(--panel,#ffffff);
  --surface-soft:var(--panel-2,#f1f5f8);
  --border:var(--line,#d5dee6);
  --border-strong:var(--line-2,#b8c5d1);
  --text:var(--tx,#17212b);
  --text-muted:var(--mut,#53616e);
  --accent:var(--v,#b85f00);
  --accent-soft:rgba(184,95,0,.12);
  --sans:var(--sans,'Inter',system-ui,sans-serif);
}
html[data-theme="dark"]{
  --surface:var(--panel,#1e293b);
  --surface-soft:var(--panel-2,#0f172a);
  --border:var(--line,#334155);
  --text:var(--tx,#e2e8f0);
  --text-muted:var(--mut,#94a3b8);
  --accent:var(--c,#2dd4bf);
  --accent-soft:rgba(45,212,191,.12);
}

.lb-h{margin:0 0 8px;font:800 11px var(--mono,ui-monospace,Menlo,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted,#64748b)}
.lb-sub{margin:12px 0 5px;font:700 11px var(--mono,ui-monospace,Menlo,monospace);letter-spacing:.05em;text-transform:uppercase;color:var(--text-muted,#64748b)}
.lb-chips{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.lb-chip,.lb-btn{appearance:none;-webkit-appearance:none;box-sizing:border-box;min-height:36px;padding:6px 13px;border:1px solid var(--border-strong,#cbd5e1);background:var(--surface,#fff);color:var(--text,#0f172a);font:600 13px/1.2 var(--sans,Inter,system-ui,sans-serif);cursor:pointer;transition:background .15s,border-color .15s}
.lb-chip{border-radius:999px}.lb-btn{border-radius:10px}
.lb-chip.sm{min-height:30px;padding:3px 11px;font-size:12px}
.lb-chip:hover,.lb-btn:hover{border-color:var(--accent,#0d6868)}
.lb-chip[aria-pressed=true],.lb-btn.pri{background:var(--accent,#0d6868);border-color:var(--accent,#0d6868);color:#fff}
.lb-chip:focus-visible,.lb-btn:focus-visible,.lb-sels select:focus-visible{outline:2px solid var(--accent,#0d6868);outline-offset:2px}
.lb-act{display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-top:12px}.lb-act .lb-btn{min-height:44px;font-size:14px;font-weight:700}
.lb-sels{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.lb-sels label{display:block;margin-bottom:3px;font:700 11px var(--sans,system-ui);color:var(--text-muted,#64748b)}
.lb-sels select{width:100%;box-sizing:border-box;min-height:42px;padding:6px 8px;border-radius:10px;border:1px solid var(--border-strong,#cbd5e1);background:var(--surface,#fff);color:var(--text,#0f172a);font:600 14px var(--sans,system-ui)}
.lb-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(128px,1fr));gap:8px}
.lb-tile{min-width:0;padding:9px 11px;border:1px solid var(--border,#e2e8f0);border-radius:12px;background:var(--surface-soft,#f1f5f9)}
.lb-tile small{display:block;margin-bottom:2px;font:700 10px var(--mono,ui-monospace,Menlo,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted,#64748b)}
.lb-tile b{display:flex;align-items:center;flex-wrap:wrap;gap:3px 6px;font:700 13.5px/1.3 var(--sans,system-ui);overflow-wrap:anywhere}
.lb-sw{flex:0 0 16px;width:16px;height:16px;border-radius:5px;border:1px solid rgba(0,0,0,.28);display:inline-block}
.lb-call{margin-top:8px;padding:9px 12px;border-left:4px solid var(--accent,#0d6868);border-radius:4px 12px 12px 4px;background:var(--accent-soft,#e6f2f1);font-size:13px;line-height:1.5;color:var(--text,#0f172a)}
.lb-call:first-child{margin-top:0}.lb-call b{margin-right:4px}
.lb-call.bad{border-color:#b91c1c;background:rgba(185,28,28,.09)}.lb-call.bad b{color:#b91c1c}
.lb-call.warn{border-color:#b45309;background:rgba(180,83,9,.10)}.lb-call.warn b{color:#b45309}
.lb-call.ok{border-color:#15803d;background:rgba(21,128,61,.09)}.lb-call.ok b{color:#15803d}
.lb-note{margin-top:6px;font-size:12px;line-height:1.45;color:var(--text-muted,#64748b)}
.lb-eqbox{margin-top:6px;padding:10px 12px;border:1px solid var(--border,#e2e8f0);border-radius:12px;background:var(--surface-soft,#f1f5f9)}.lb-eqbox:first-child{margin-top:0}
.lb-eq{font:700 15px/1.4 var(--mono,ui-monospace,Menlo,monospace);color:var(--text,#0f172a);overflow-wrap:anywhere}
.lb-pill{display:inline-block;padding:3px 10px;border-radius:999px;background:var(--accent-soft,#e6f2f1);font:600 13px var(--sans,system-ui)}
.lb-arr{color:var(--text-muted,#64748b)}
.lb-phv{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px}.lb-phv b{font:800 26px var(--mono,ui-monospace,Menlo,monospace)}.lb-phv span{font-size:13px;font-weight:700;color:var(--text-muted,#64748b)}
.lb-scale{position:relative;margin:34px 0 4px}
.lb-bar{height:16px;border-radius:8px;border:1px solid var(--border-strong,#94a3b8)}
.lb-cur{position:absolute;top:-6px;height:28px;width:0;border-left:2px solid var(--text,#0f172a);transition:left .35s ease;pointer-events:none}
.lb-cur b{position:absolute;top:-24px;left:0;transform:translateX(-50%);padding:2px 7px;border-radius:6px;background:var(--text,#0f172a);color:var(--surface,#fff);font:800 11px var(--mono,ui-monospace,Menlo,monospace);white-space:nowrap}
.lb-ax{position:relative;height:14px;margin-top:8px;font:700 10px var(--mono,ui-monospace,Menlo,monospace);color:var(--text-muted,#64748b)}.lb-ax span{position:absolute;transform:translateX(-50%)}
.lb-read{display:flex;flex-wrap:wrap;gap:4px 14px;margin:8px 0;font:700 12.5px var(--mono,ui-monospace,Menlo,monospace)}
.lb-tubes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:8px}
.lb-tube{text-align:center;font-size:11.5px;line-height:1.25;min-width:0}
.lb-tube svg{display:block;width:min(100%,54px);height:auto;margin:0 auto 3px;overflow:visible;color:var(--border-strong,#94a3b8)}
.lb-tube .liq{transition:fill .8s ease}
.lb-tube b{display:block;color:var(--text,#0f172a);overflow-wrap:anywhere}.lb-tube span{color:var(--text-muted,#64748b)}
@media(max-width:340px){.lb-tubes{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(prefers-reduced-motion:reduce){.lb-cur,.lb-tube .liq{transition:none}}
`;
function injectCss(){if(typeof document==='undefined'||document.getElementById('che-lab-css'))return;const st=document.createElement('style');st.id='che-lab-css';st.textContent=LBCSS;document.head.appendChild(st)}
const f1=v=>v.toFixed(1).replace('.',','),SUPD={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻'};
const sci=x=>{if(!(x>0))return '0';let e=Math.floor(Math.log10(x)+1e-9),m=x/Math.pow(10,e);if(m.toFixed(1)==='10.0'){m=1;e++}return m.toFixed(1).replace('.',',')+'·10'+String(e).split('').map(ch=>SUPD[ch]).join('')};
const UNIN=['czerwony','czerwony','pomarańczowy','żółty','żółtozielony','zielony','turkusowy','niebieski','granatowy','fioletowy'];
function indName(ind,p){if(ind==='phph')return p<8.2?'bezbarwny':p<10?'różowy':'malinowy';if(ind==='mo')return p<3.1?'czerwony':p<4.4?'pomarańczowy':'żółty';if(ind==='btb')return p<6?'żółty':p<7.6?'zielony':'niebieski';return UNIN[clamp(Math.floor(p/14*9.999),0,9)]}
function liqName(S){if(S.ind)return indName(S.ind,pH(S));if(S.ions.some(i=>i.k==='Cu'&&i.eq>.05))return 'niebieski (Cu²⁺)';if(S.ions.some(i=>i.k==='Fe'&&i.ch===3&&i.eq>.05))return 'żółtobrązowy (Fe³⁺)';if(S.ions.some(i=>i.k==='Fe'&&i.ch===2&&i.eq>.05))return 'bladozielony (Fe²⁺)';return 'bezbarwny'}
const phWord=p=>p<3?'kwasowy (silnie)':p<6.9?'kwasowy':p<=7.1?'obojętny':p<11?'zasadowy':'zasadowy (silnie)';

function session(id,opt){injectCss();id=id||('s'+Math.random());if(SESS[id])return SESS[id];
 const lab=SESS[id]={id,opt:opt||{},S:null,subs:{},hist:[],measurements:[],marks:[],steps:[],seq:[],last:null,incidents:0,t:0,tmr:null,start:'w',hosts:[]};
 lab.workflow=createWorkflow(lab);lab.record=(kind,value,unit,meta)=>{const row={t:lab.t,kind,value,unit:unit||'',meta:meta||{}};lab.measurements.push(row);if(lab.measurements.length>2000)lab.measurements.shift();lab.emit('measurement',row);return row};
 lab.series=(kind)=>lab.measurements.filter(x=>x.kind===kind);lab.measurementSchema={temperature:{unit:'°C',domain:'thermal',source:'thermalState.T',model:true},thermalTemperature:{unit:'°C',domain:'thermal',source:'thermalState.T',model:true},heatPower:{unit:'W',domain:'thermal',source:'heatSource.powerW',model:true},combustionPower:{unit:'W',domain:'combustion',source:'combustionState.powerW',model:true},combustionEnergy:{unit:'J',domain:'combustion',source:'combustionState.energyJ',model:true},combustionFuelFlow:{unit:'kg/s',domain:'combustion',source:'combustionState.massFlow',model:true},combustionO2Flow:{unit:'kg/s',domain:'combustion',source:'combustionState.o2Available',model:true},exhaustMassFlow:{unit:'kg/s',domain:'combustion',source:'combustionState.productMass.total',model:true},energy:{unit:'J',domain:'thermal',source:'thermal.integratedPower',model:true},mass:{unit:'kg',domain:'mass',source:'thermalState.mass',model:true},heatCapacity:{unit:'J/(kg·K)',domain:'thermal',source:'thermalState.cp',model:true},coolantFlow:{unit:'kg/s',domain:'thermal',source:'cooler.flow',model:true},heatTransfer:{unit:'W',domain:'thermal',source:'cooler.heatTransfer',model:true},pressure:{unit:'arb',domain:'pressure',source:'manual/model',model:true},pH:{unit:'pH',domain:'chemical',source:'pH(state)',model:true},volume:{unit:'u',domain:'quantity',source:'state.V',model:true},gasVolume:{unit:'L',domain:'gas',source:'gasTrap.volume',model:true},exhaustMoles:{unit:'mol',domain:'gas',source:'gasTrap.gasMoles',model:true},condensedWater:{unit:'kg',domain:'gas',source:'gasTrap.liquidWater',model:true},pressure:{unit:'arb',domain:'pressure',source:'manual/model',model:true},mass:{unit:'g',domain:'mass',source:'manual/model',model:false}};;lab.measurementSchema.gasSampleVolume={unit:'L',domain:'gas',source:'gasSample.volume',model:true};
lab.measurementSchema.gasSampleMoles={unit:'mol',domain:'gas',source:'gasSample.moles',model:true};
lab.measurementSchema.gasComposition={unit:'mol%',domain:'gas',source:'gasSample.composition',model:true};
lab.measurementSchema.gasUncertainty={unit:'relative',domain:'measurement',source:'gasUncertainty',model:true};
lab.measurementSchema.absorbedGas={unit:'mol',domain:'gas',source:'gasAbsorber.absorbed',model:true};
lab.measurementSchema.condensate={unit:'kg',domain:'gas',source:'gasSeparator.condensate',model:true}
 lab.on=(e,f)=>{(lab.subs[e]=lab.subs[e]||[]).push(f);return ()=>{const a=lab.subs[e]||[],i=a.indexOf(f);if(i>=0)a.splice(i,1)}};lab.emit=(e,d)=>(lab.subs[e]||[]).slice().forEach(f=>{try{f(d)}catch(x){console.warn('CHE.LAB panel',x)}});lab.inputs={};lab.receive=(port,data)=>{lab.inputs[port]=data;lab.emit('input:'+port,data);return data};
 lab.chemistry={version:'0.95',substances:{},reactions:[],last:null,reset:function(){this.substances={};this.reactions=[];this.last=null},upsert:function(id,n,phase,meta){if(!id)return null;const x=this.substances[id]||{id:id,amountMol:0,massKg:0,phase:phase||'unknown'};if(Number.isFinite(n))x.amountMol=Math.max(0,x.amountMol+n);if(phase)x.phase=phase;Object.assign(x,meta||{});this.substances[id]=x;return x},snapshot:function(){return JSON.parse(JSON.stringify({version:this.version,substances:this.substances,reactions:this.reactions.slice(-200),last:this.last}))},
 syncSubstance:function(id,nMol,phase,meta){const mw=Number(meta&&meta.molarMass)||0;let x=this.substances[id]||{id:id,amountMol:0,massKg:0,phase:phase||'unknown'};x.amountMol=Math.max(0,Number(nMol)||0);if(mw>0)x.massKg=x.amountMol*mw;if(phase)x.phase=phase;Object.assign(x,meta||{});this.substances[id]=x;return x},
 syncGas:function(g){if(!g)return null;const defs={CO2:['CO₂',.04401,'gas'],CO:['CO',.02801,'gas'],H2O:['H₂O',.01801528,'gas'],O2:['O₂',.0319988,'gas'],fuel:['paliwo resztkowe',.044,'gas'],MgO:['MgO',.040304,'solid'],H2O_liquid:['H₂O',.01801528,'liquid']};const out={};Object.keys(defs).forEach(k=>{const d=defs[k];const n=k==='H2O_liquid'?Number(g.liquidWaterMoles||0):k==='H2O'?Number(g.vaporMoles!=null?g.vaporMoles:(g.moles&&g.moles[k]||0)):Number(g.moles&&g.moles[k]||0);out[k]=this.syncSubstance(k,n,d[2],{name:d[0],formula:d[0],molarMass:d[1],source:'gasTrap'});});this.gasSnapshot={time:lab.t,pressure:Number(g.pressure||0),temperature:Number(g.temp||25),volumeL:Number(g.volume||0),substances:JSON.parse(JSON.stringify(out))};return out},gasAmount:function(id,phase){const x=this.substances[id];return x&&(!phase||x.phase===phase)?Number(x.amountMol||0):0},auditGas:function(g){const issues=[];const defs=['CO2','CO','H2O','O2','fuel'];defs.forEach(k=>{const local=k==='H2O'?Number(g&&g.vaporMoles||0):Number(g&&g.moles&&g.moles[k]||0),central=this.gasAmount(k,'gas');if(Math.abs(local-central)>1e-10*Math.max(1,Math.abs(local),Math.abs(central)))issues.push(k+': lokal '+local+' != central '+central)});return {ok:!issues.length,issues}}};
 lab.tick=()=>{if(!lab.hosts.some(h=>h.isConnected)){clearInterval(lab.tmr);lab.tmr=null;return}lab.t+=.5;const S=lab.S;S.T+=(25-S.T)*.04;const phv=pH(S);lab.hist.push({t:lab.t,T:S.T,pH:phv,V:S.V,gasT:S.gasT});if(lab.hist.length>800)lab.hist.shift();lab.record('temperature',S.T,'°C');lab.record('pH',phv,'pH',{source:'CHE.LAB.pH(state)',central:true});lab.record('volume',S.V,'u');if(Number.isFinite(S.gasT))lab.record('gasSignal',S.gasT,'arb');lab.emit('tick')};
 lab.reset=st=>{lab.start=st||lab.start||'w';const S=newState(lab.start!=='w');lab.seq=[];
  const d=STARTS[lab.start];if(d&&d[1]){add(S,d[1],4,true);S.bhp=[];S.log=[];S.heat=0;S.T=25;S.banner=null;S.splash=0;lab.seq.push('(start) '+d[2])}
  lab.S=S;lab.chemistry.reset();lab.hist=[{t:lab.t,T:25,pH:pH(S),V:S.V,gasT:S.gasT}];lab.measurements=[];lab.marks=[];lab.steps=[{l:'start',pH:pH(S),T:25}];lab.last=null;lab.incidents=0;lab.emit('reset');
  if(!lab.tmr&&typeof setInterval==='function')lab.tmr=setInterval(lab.tick,500)};
 lab.add=(rid,amt,conc,pred,label)=>{const S=lab.S,before=liquidColor(S),res=add(S,rid,amt,conc),after=liquidColor(S),ph=new Set();
  res.forEach(e=>{if(e.gas)ph.add('gaz');if(e.ppt)ph.add('osad');if(e.type==='reakcja wypierania'||e.type==='metal + woda')ph.add('barwa')});
  if(Math.hypot(after[0]-before[0],after[1]-before[1],after[2]-before[2])>30||res.some(e=>/barw/.test(e.obs)&&!/wskaźnik|brak reakcji/.test(e.type)))ph.add('barwa');
  let msg='';if(pred){const ok=pred==='nic'?!ph.size:ph.has(pred);msg=(ok?'Predykcja trafna. ':'Inaczej niż przewidywano. ')+'Zaobserwowano: '+([...ph].join(', ')||'brak zmian')+'.'}
  if(S.bhp.some(b=>b[0]==='bad'))lab.incidents++;
  lab.seq.push(((conc&&/^(acid|base)$/.test(KIND[rid]))?'stęż. ':'')+(label||rid).replace(/ –.*/,''));lab.marks.push(lab.t);
  lab.steps.push({l:String(lab.steps.length),pH:pH(S),T:S.T});lab.hist.push({t:lab.t,T:S.T});lab.last={id:rid,res,ph:[...ph],msg};lab.emit('add');return res};
 lab.snapshot=()=>({version:C.LAB.version,session:lab.id,start:lab.start,t:lab.t,state:JSON.parse(JSON.stringify(lab.S||{})),hist:lab.hist.slice(-800),measurements:lab.measurements.slice(-2000),marks:lab.marks.slice(),steps:lab.steps.slice(),seq:lab.seq.slice(),last:lab.last?JSON.parse(JSON.stringify(lab.last)):null,incidents:lab.incidents,inputs:JSON.parse(JSON.stringify(lab.inputs||{})),workflow:lab.workflow?lab.workflow.snapshot():null,chemistry:lab.chemistry.snapshot()});
 lab.restore=snap=>{if(!snap||!snap.state)return false;lab.start=snap.start||lab.start;lab.t=Number(snap.t)||0;lab.S=JSON.parse(JSON.stringify(snap.state));lab.hist=Array.isArray(snap.hist)?snap.hist.slice(-800):[];lab.measurements=Array.isArray(snap.measurements)?snap.measurements.slice(-2000):[];lab.marks=Array.isArray(snap.marks)?snap.marks.slice():[];lab.steps=Array.isArray(snap.steps)?snap.steps.slice():[];lab.seq=Array.isArray(snap.seq)?snap.seq.slice():[];lab.last=snap.last?JSON.parse(JSON.stringify(snap.last)):null;lab.incidents=Number(snap.incidents)||0;lab.inputs=JSON.parse(JSON.stringify(snap.inputs||{}));if(snap.workflow)lab.workflow.restore(snap.workflow);if(snap.chemistry){lab.chemistry.substances=JSON.parse(JSON.stringify(snap.chemistry.substances||{}));lab.chemistry.reactions=(snap.chemistry.reactions||[]).slice();lab.chemistry.last=snap.chemistry.last||null}lab.emit('restore',snap);lab.emit('reset');return true};
 lab.exportJSON=()=>JSON.stringify(lab.snapshot(),null,2);
 lab.importJSON=text=>{try{return lab.restore(JSON.parse(text))}catch(e){return false}};
 lab.bindPanel=(nodeId,module)=>lab.workflow.bind(nodeId,module);
 lab.destroy=()=>{if(lab.tmr){clearInterval(lab.tmr);lab.tmr=null}LINKER.connections.slice().filter(x=>x.source===lab||x.target===lab).forEach(x=>LINKER.disconnect(x));Object.keys(lab.subs).forEach(k=>lab.subs[k].splice(0));lab.hosts.slice().forEach(h=>{if(h&&h.parentNode)h.parentNode.removeChild(h)});lab.hosts=[];lab.destroyed=true;delete SESS[lab.id];return true};
 lab.release=()=>{if(lab.hosts.every(h=>!h||!h.isConnected))return lab.destroy();return false};
 lab.reset(opt&&opt.start);return lab}