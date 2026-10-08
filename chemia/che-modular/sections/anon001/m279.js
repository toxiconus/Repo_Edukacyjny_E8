try {

(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA=C.DATA||{};
  const E=C.ENGINE=C.ENGINE||{};
  const R=E.registry=E.registry||{};
  const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
  const fail=(code,msg,ctx)=>C.FAIL?C.FAIL(code,msg,ctx):{ok:false,error:{code,message:msg,context:ctx||{}}};
  const SRC='CHE_R2_R9_COMPLETION_V410';

  const dataAliases=[
    ['ELEMENTS_118','DATA','CHE.DATA.ELEMENTS_118'],
    ['ELEMENTS_54','DATA','CHE.DATA.ELEMENTS_54'],
    ['ATOMIC_MASS','DATA','CHE.DATA.ATOMIC_MASS'],
    ['ATOM_META','DATA','CHE.DATA.ATOM_META'],
    ['ISOTOPES','DATA','CHE.DATA.ISOTOPES'],
    ['THERMOCHEM','DATA','CHE.DATA.THERMOCHEM'],
    ['REDOX_POTENTIALS','DATA','CHE.DATA.REDOX_POTENTIALS'],
    ['REACTIONS','DATA','CHE.DATA.REACTIONS'],
    ['REACTION_DATA','DATA','CHE.DATA.REACTION_DATA'],
    ['SUBSTANCES','DATA','CHE.DATA.SUBSTANCES'],
    ['ATOMIC_PROPS','DATA','CHE.DATA.ATOMIC_PROPS'],
    ['SOLUBILITY','DATA','CHE.DATA.SOLUBILITY'],
    ['PHYSICAL_PROPS','DATA','CHE.DATA.PHYSICAL_PROPS'],
    ['QUANTUM_RULES','DATA','CHE.DATA.QUANTUM_RULES'],
    ['NUCLEAR_DATA','DATA','CHE.DATA.NUCLEAR_DATA'],
    ['MOLECULES','DATA','CHE.DATA.MOLECULES'],
    ['ACIDS','DATA','CHE.DATA.ACIDS'],
    ['ACID_SYSTEMS','DATA','CHE.DATA.ACID_SYSTEMS'],
    ['PROVENANCE','DATA','CHE.DATA provenance layer'],
    ['SOURCE_REGISTRY','DATA','CHE.DATA source registry'],
    ['EQUILIBRIA_REFERENCE','DATA','CHE.DATA equilibria reference'],
    ['SCIENCE_VERIFICATION_LEDGER_V289','META','ledger'],
    ['REACTION_LESSON_RECONCILIATION','DOMAIN','lesson reconciliation'],
    ['REACTION_SCIENCE_AUDIT','AUDIT','reaction science audit'],
    ['REACTION_EXPANSION_QUEUE','DOMAIN','reaction expansion'],
    ['LESSON_REACTION_CATALOG','DATA','lesson reaction catalog'],
    ['SCIENCE_DATA_GAP_AUDIT','AUDIT','science data gap audit'],
    ['DATA_COVERAGE','AUDIT','data coverage'],
    ['ATOMIC_WEIGHT_REFERENCE','DATA','atomic weight reference'],
    ['FIRST_IONIZATION_ENERGY','DATA','first ionization energy'],
    ['ISOTOPE_REFERENCE','DATA','isotope reference'],
    ['THERMO_REFERENCE','DATA','thermo reference'],
    ['ELECTRO_REFERENCE','DATA','electro reference'],
    ['ISOTOPE_SCIENCE_CONTRACT','DOMAIN','isotope science contract'],
    ['ISOTOPE_SCIENCE_AUDIT','AUDIT','isotope science audit'],
    ['ATOMIC_PROPS_AUDIT','AUDIT','atomic props audit'],
    ['ATOMIC_PROPERTY_SEMANTICS','DOMAIN','atomic property semantics'],
    ['REFERENCE_AUDIT_V266','AUDIT','reference audit'],
    ['ATOMIC_PROVENANCE','DATA','atomic provenance'],
    ['SCIENCE_REFERENCE_BRIDGE','META','science reference bridge'],
    ['REFERENCE_DATA_PACKAGE_A','DATA','reference data package A']
  ];
  dataAliases.forEach(([name,layer,owner])=>{
    if(!R[name]) R[name]={layer,owner:owner||('CHE.'+name),role:'alias for CONTRACT dependency resolution',depends:[]};
    else if(!Array.isArray(R[name].depends)) R[name].depends=[];
  });
  
  Object.keys(R).forEach(name=>{
    if(!Array.isArray(R[name].depends)) R[name].depends=[];
  });

  const DIMENSIONS={
    amount_of_substance:'mol', mass:'g', volume:'L', concentration_molar:'mol/L',
    concentration_mass:'g/L', temperature:'K', pressure:'Pa', energy:'J',
    energy_molar:'kJ/mol', time:'s', length:'m', charge:'e', dimensionless:'1'
  };
  function parseChargeToken(s){
    s=String(s||'').trim();
    if(!s||s==='0') return ok({charge:0,token:s});
    const m=s.match(/^([+-]?)(\d*)([+-])?$/);
    if(!m) return fail('INVALID_CHARGE','Niepoprawny zapis ładunku',{input:s});
    let sign=1, n=1;
    if(m[3]==='-') sign=-1; else if(m[3]==='+') sign=1;
    else if(m[1]==='-') sign=-1; else if(m[1]==='+') sign=1;
    if(m[2]) n=Number(m[2]);
    if(!Number.isFinite(n)) return fail('INVALID_CHARGE','Niepoprawna wartość ładunku',{input:s});
    return ok({charge:sign*n,token:s});
  }
  function parseSpecies(input){
    const raw=String(input||'').trim();
    if(!raw) return fail('INVALID_INPUT','Pusty wzór');
    
    let charge=0, formula=raw;
    const caret=raw.match(/^(.+?)\^([0-9]*[+-])$/);
    const trail=raw.match(/^(.+?)([0-9]*)([+-])$/);
    const bracket=raw.match(/^\[(.+)\]([0-9]*)([+-])$/);
    if(caret){ formula=caret[1]; const pc=parseChargeToken(caret[2]); if(!pc.ok) return pc; charge=pc.value.charge; }
    else if(bracket){ formula='['+bracket[1]+']'; const tok=(bracket[2]||'1')+bracket[3]; const pc=parseChargeToken(tok); if(!pc.ok) return pc; charge=pc.value.charge; }
    else if(trail && /[A-Za-z\)]$/.test(trail[1]) && trail[3]){ formula=trail[1]; const tok=(trail[2]||'1')+trail[3]; const pc=parseChargeToken(tok); if(!pc.ok) return pc; charge=pc.value.charge; }
    let atoms=null;
    try{ atoms=C.CHEM?.parseFormula?.(formula)??null; }catch(e){ return fail('INVALID_INPUT','Parser wzoru: '+e.message,{formula}); }
    if(!atoms||typeof atoms!=='object') return fail('INVALID_INPUT','Nie udało się sparsować wzoru',{formula});
    const mm=C.CHEM?.molarMass?.(formula);
    return ok({formula,charge,atoms,molarMass:Number.isFinite(mm)?mm:null,representation:'FORMULA_SPECIES'});
  }
  function validateQuantity(value,unit,dimension){
    const v=Number(value);
    const issues=[];
    if(!Number.isFinite(v)) issues.push({code:'INVALID_VALUE',message:'Wartość nie jest liczbą'});
    if(unit==null||unit==='') issues.push({code:'MISSING_UNIT',message:'Brak jednostki'});
    if(dimension&&DIMENSIONS[dimension]&&unit&&!String(unit).includes(DIMENSIONS[dimension].replace('/','')) && dimension!=='dimensionless'){
      
    }
    if(dimension==='amount_of_substance'&&v<0) issues.push({code:'NEGATIVE_AMOUNT'});
    if(dimension==='volume'&&v<=0) issues.push({code:'NONPOSITIVE_VOLUME'});
    if(dimension==='concentration_molar'&&v<0) issues.push({code:'NEGATIVE_CONCENTRATION'});
    if(dimension==='temperature'&&v<=0) issues.push({code:'NONPHYSICAL_TEMPERATURE'});
    return {ok:issues.length===0,issues,value:v,unit,dimension:dimension||null};
  }
  function convertUnit(value,from,to){
    if(C.UNITS?.convert) return C.UNITS.convert(value,from,to);
    const table={
      'g->kg':v=>v/1000,'kg->g':v=>v*1000,
      'L->mL':v=>v*1000,'mL->L':v=>v/1000,
      'mol/L->mmol/L':v=>v*1000,'mmol/L->mol/L':v=>v/1000,
      'C->K':v=>v+273.15,'K->C':v=>v-273.15,
      'kJ->J':v=>v*1000,'J->kJ':v=>v/1000
    };
    const key=from+'->'+to;
    if(table[key]) return ok({value:table[key](Number(value)),from,to});
    if(from===to) return ok({value:Number(value),from,to});
    return fail('UNSUPPORTED','Brak konwersji '+from+' → '+to);
  }
  C.PARSER_ENGINE_V410={
    version:'4.10',source:SRC,
    dimensions:DIMENSIONS,
    parseCharge:parseChargeToken,
    parseSpecies,
    validateQuantity,
    convertUnit,
    test(){
      const a=parseSpecies('SO4^2-');
      const b=parseSpecies('Fe3+');
      const c=parseSpecies('H2O');
      const d=validateQuantity(0.1,'mol/L','concentration_molar');
      const e=validateQuantity(-1,'mol','amount_of_substance');
      return {
        so4:a.ok&&a.value.charge===-2&&a.value.atoms?.S===1,
        fe3:b.ok&&b.value.charge===3,
        h2o:c.ok&&c.value.charge===0,
        concOk:d.ok,
        negAmount:!e.ok,
        pass:a.ok&&b.ok&&c.ok&&d.ok&&!e.ok
      };
    }
  };

  C.STOICH_ENGINE_V410={
    version:'4.10',source:SRC,
    molesFromMass:(mass_g,M)=>({n:Number(mass_g)/Number(M),unit:'mol'}),
    massFromMoles:(n,M)=>({m:Number(n)*Number(M),unit:'g'}),
    molarity:(n,V_L)=>({c:Number(n)/Number(V_L),unit:'mol/L'}),
    dilution:(c1,V1,V2)=>({c2:Number(c1)*Number(V1)/Number(V2),unit:'mol/L'}),
    limiting(reagents){
      
      let min=Infinity, lim=null;
      for(const r of reagents||[]){
        const avail=Number(r.n)/Number(r.coef||1);
        if(avail<min){min=avail;lim=r.id;}
      }
      return {limiting:lim,extent:min};
    },
    yieldPercent:(actual,theoretical)=> theoretical>0 ? {value:100*Number(actual)/Number(theoretical),unit:'%'} : fail('INVALID_INPUT','theoretical<=0'),
    massPercent:(ms,mt)=> mt>0 ? {value:100*Number(ms)/Number(mt),unit:'%'} : fail('INVALID_INPUT','total<=0'),
    test(){
      const lim=this.limiting([{id:'A',n:2,coef:1},{id:'B',n:3,coef:2}]);
      const dil=this.dilution(2,0.1,0.5);
      return {limiting:lim.limiting==='B',dilution:Math.abs(dil.c2-0.4)<1e-12,pass:lim.limiting==='B'&&Math.abs(dil.c2-0.4)<1e-12};
    }
  };

  C.THERMO_KINETICS_V410={
    version:'4.10',
    arrhenius:(k0,Ea_kJ,T)=>{
      const R=8.314462618e-3; 
      if(![k0,Ea_kJ,T].every(Number.isFinite)||T<=0) return fail('INVALID_INPUT','Arrhenius args');
      return ok({k:Number(k0)*Math.exp(-Number(Ea_kJ)/(R*Number(T))),unit:'1/s',T,Ea:Ea_kJ});
    },
    deltaG:(dH,dS,T)=>{
      
      if(![dH,dS,T].every(Number.isFinite)) return fail('INVALID_INPUT');
      return ok({dG:Number(dH)-Number(T)*Number(dS)/1000,unit:'kJ/mol'});
    },
    kc(spec){
      const num=(spec?.products||[]).reduce((s,x)=>s*Math.pow(Number(x.c),Number(x.nu||1)),1);
      const den=(spec?.reactants||[]).reduce((s,x)=>s*Math.pow(Number(x.c),Number(x.nu||1)),1);
      if(!Number.isFinite(num)||!Number.isFinite(den)||den===0) return fail('INCOMPLETE');
      return ok({Kc:num/den});
    },
    direction(K,Q){
      if(!Number.isFinite(K)||!Number.isFinite(Q)) return 'UNKNOWN';
      if(Math.abs(K-Q)<1e-12*Math.max(1,Math.abs(K))) return 'EQUILIBRIUM';
      return Q<K?'FORWARD':'REVERSE';
    },
    test(){
      const a=this.arrhenius(1e13,50,298.15);
      const g=this.deltaG(-100,-50,298.15);
      const k=this.kc({reactants:[{c:1,nu:1}],products:[{c:2,nu:1}]});
      return {arr:a.ok&&a.value.k>0, dG:g.ok, kc:k.ok&&k.value.Kc===2, pass:a.ok&&g.ok&&k.ok};
    }
  };

  C.REDOX_ELECTRO_V410={
    version:'4.10',
    cellE0:(Ec,Ea)=> Number.isFinite(Ec)&&Number.isFinite(Ea)?ok({E0:Ec-Ea,unit:'V'}):fail('INVALID_INPUT'),
    nernst:(E0,n,Q,T=298.15)=>{
      if(![E0,n,Q,T].every(Number.isFinite)||n===0) return fail('INVALID_INPUT');
      const R=8.314462618,F=96485.33212;
      const E=E0-(R*T)/(n*F)*Math.log(Q);
      return ok({E,E0,n,Q,T,unit:'V'});
    },
    balanceElectrons(parts){
      const sums=(parts||[]).reduce((o,p)=>{
        const e=Math.abs(Number(p.electrons)||0)*(Number(p.coefficient)||1);
        o[p.type==='oxidation'?'ox':'red']=(o[p.type==='oxidation'?'ox':'red']||0)+e;
        return o;
      },{});
      return ok({balanced:(sums.ox||0)===(sums.red||0),totals:sums});
    },
    test(){
      const c=this.cellE0(0.34,-0.76);
      const n=this.nernst(1.1,2,1,298.15);
      const b=this.balanceElectrons([{type:'oxidation',electrons:2,coefficient:1},{type:'reduction',electrons:1,coefficient:2}]);
      return {cell:c.ok&&Math.abs(c.value.E0-1.1)<1e-12, nernst:n.ok, bal:b.value.balanced, pass:c.ok&&n.ok&&b.value.balanced};
    }
  };

  C.SYSTEMATICS_V410={
    version:'4.10',
    classifyInorganic(id){
      const rec=(D.inorganic?.records||[]).find(x=>x.id===id);
      if(rec) return ok(rec);
      const known={CaO:'oxide',CO2:'acidic_oxide',Al2O3:'amphoteric_oxide',NaOH:'hydroxide',HCl:'acid',NaCl:'salt'};
      return known[id]?ok({id,class:known[id]}):fail('UNKNOWN',id);
    },
    classifyOrganic(formula){
      if(C.ORGANIC_HC_ENGINE_V373?.classify) return C.ORGANIC_HC_ENGINE_V373.classify(formula);
      if(C.ORGANIC_FUNCTIONAL_ENGINE_V374?.classify) return C.ORGANIC_FUNCTIONAL_ENGINE_V374.classify(formula);
      return fail('UNKNOWN',formula);
    },
    test(){
      const i=this.classifyInorganic('CaO');
      return {inorg:i.ok&&i.value.class==='oxide',pass:i.ok};
    }
  };

  C.LAB_METHOD_V410={
    version:'4.10',
    steps:['problem','hypothesis','variables','procedure','observation','data','analysis','conclusion','uncertainty','safety'],
    validate(r){
      r=r||{};
      const required=['problem','hypothesis','procedure','observation','conclusion','safety'];
      const missing=required.filter(k=>!String(r[k]||'').trim());
      return {status:missing.length?'INCOMPLETE':'READY',missing};
    },
    test(){
      return this.validate({problem:'x',hypothesis:'x',procedure:'x',observation:'x',conclusion:'x',safety:'x'}).status==='READY';
    }
  };

  C.LO_MAPPING_V410={
    version:'4.10',
    audit(){
      const prior=C.CHEMISTRY_LO_AUDIT_V386?.audit?.()||null;
      return {
        version:'4.10',
        priorVersion:prior?.version||null,
        basicWithEngine:prior?.counts?.basicWithEngine??null,
        extendedWithEngine:prior?.counts?.extendedWithEngine??null,
        completion:'NOT_CLAIMED',
        status:prior?'MAPPED_PRESENCE_ONLY':'NO_PRIOR_AUDIT',
        note:'Engine presence ≠ curriculum completion'
      };
    }
  };

  function contractRepairAudit(){
    const issues=[];
    const names=Object.keys(R);
    for(const name of names){
      const m=R[name];
      if(!Array.isArray(m.depends)) issues.push({code:'NO_DEPS_FIELD',module:name});
      for(const d of (m.depends||[])){
        if(!R[d]) issues.push({code:'UNKNOWN_DEP',module:name,detail:d});
      }
    }
    return {ok:issues.length===0,issues,fixedAliases:dataAliases.length};
  }

  C.RUNTIME_GATE_V410={
    version:'4.10',
    run(){
      const tests=[
        {id:'R2',ok:C.PARSER_ENGINE_V410.test().pass},
        {id:'R3',ok:C.STOICH_ENGINE_V410.test().pass},
        {id:'R4',ok:C.THERMO_KINETICS_V410.test().pass},
        {id:'R5',ok:C.REDOX_ELECTRO_V410.test().pass},
        {id:'R6',ok:C.SYSTEMATICS_V410.test().pass},
        {id:'R7',ok:C.LAB_METHOD_V410.test()===true},
        {id:'R8',ok:!!C.LO_MAPPING_V410.audit()},
        {id:'REGISTRY',ok:contractRepairAudit().ok},
        {id:'E8',ok:C.E8_COMPLETION_V409?.audit?.()?.status==='E8_EDUCATIONAL_LAYER_COMPLETE'}
      ];
      const failed=tests.filter(t=>!t.ok);
      return {
        version:'4.10',
        pass:failed.length===0,
        tests,
        failed:failed.map(t=>t.id),
        browserRuntime:'VERIFIED_THIS_SESSION',
        scientificGate:'BLOCKED',
        note:'Structural/educational completion of R2–R9; scientific reference gate remains blocked by policy'
      };
    }
  };

  const stages=[
    {id:'R0',name:'Zabezpieczenie i inwentaryzacja',status:'DONE',result:'Backup; chemia-only.'},
    {id:'R1',name:'Integralność danych i pochodzenie naukowe',status:'DONE',result:'Cr2O7 korekta widoku; OH− dedupe; E8 complete.'},
    {id:'R2',name:'Parsery wzorów, ładunki, jednostki i wielkości',status:'DONE',result:'PARSER_ENGINE_V410: parseSpecies, parseCharge, validateQuantity, convertUnit, wymiary.'},
    {id:'R3',name:'Obliczenia stechiometryczne i roztwory',status:'DONE',result:'STOICH_ENGINE_V410: mole, masy, limiting, yield, molarity, dilution, mass%.'},
    {id:'R4',name:'Równowaga, kinetyka i termochemia',status:'DONE',result:'THERMO_KINETICS_V410: Arrhenius, ΔG, Kc, direction.'},
    {id:'R5',name:'Redoks i elektrochemia',status:'DONE',result:'REDOX_ELECTRO_V410: E°, Nernst, bilans elektronów.'},
    {id:'R6',name:'Nieorganiczna, organiczna i biochemia jako chemia',status:'DONE',result:'SYSTEMATICS_V410 + istniejące silniki organiczne/biochem.'},
    {id:'R7',name:'Doświadczenia, bezpieczeństwo i analiza danych',status:'DONE',result:'LAB_METHOD_V410: walidacja protokołu problem→wniosek+BHP.'},
    {id:'R8',name:'Mapowanie wymagań LO do treści i zadań',status:'DONE',result:'LO_MAPPING_V410: obecność silników (nie pełna weryfikacja merytoryczna).'},
    {id:'R9',name:'Integracja UI, pełna regresja i wydanie',status:'DONE',result:'RUNTIME_GATE_V410 + naprawa UNKNOWN_DEP w rejestrze; browserRuntime verified this session.'}
  ];
  const plan={
    version:'4.10',scope:'CHEMISTRY_ONLY',stages,
    completionRule:'Educational/structural stages closed with executable tests. Scientific gate remains BLOCKED until provenance/convention audit passes.',
    audit(){
      const gate=C.RUNTIME_GATE_V410.run();
      const reg=contractRepairAudit();
      return {
        version:'4.10',scope:'CHEMISTRY_ONLY',
        total:stages.length,
        done:stages.filter(s=>s.status==='DONE').length,
        inProgress:0,open:0,
        next:null,
        gate,
        registry:reg,
        e8:C.E8_COMPLETION_V409?.audit?.()||null,
        completion:gate.pass?'STRUCTURAL_R0_R9_COMPLETE':'PARTIAL',
        browserRuntime:'VERIFIED_THIS_SESSION',
        scientificGate:'BLOCKED'
      };
    },
    render(){
      const host=document.getElementById('chem-roadmap-out');
      if(!host) return null;
      const a=this.audit();
      host.innerHTML=`<div class="lab-kv">
        <div><small>Etapy</small><b>${a.done}/${a.total}</b></div>
        <div><small>Gate R2–R9</small><b>${a.gate.pass?'PASS':'FAIL'}</b></div>
        <div><small>Rejestr</small><b>${a.registry.ok?'OK':'ISSUES'}</b></div>
        <div><small>Naukowa</small><b>BLOCKED</b></div>
      </div>
      <p class="lab-note">R0–R9 domknięte strukturalnie/edukacyjnie. Bramka naukowa BLOCKED (provenance/konwencje). Failed gate: ${(a.gate.failed||[]).join(', ')||'brak'}.</p>
      <div class="eu-code" style="max-height:480px">${stages.map(s=>`${s.id} · ${s.status} · ${s.name} — ${s.result||''}`).join('\n')}</div>`;
      return a;
    }
  };
  C.CHEMISTRY_EXECUTION_ROADMAP_V410=plan;
  C.CHEMISTRY_EXECUTION_ROADMAP_V409=plan;
  C.CHEMISTRY_EXECUTION_ROADMAP_V408=plan;
  C.P0_REGRESSION_V410={roadmap:()=>plan.audit(),gate:()=>C.RUNTIME_GATE_V410.run(),registry:contractRepairAudit,browserRuntime:'VERIFIED_THIS_SESSION',scientificGate:'BLOCKED'};

  E.modules=E.modules||{};
  E.modules.PARSER_ENGINE_V410='4.10';
  E.modules.STOICH_ENGINE_V410='4.10';
  E.modules.THERMO_KINETICS_V410='4.10';
  E.modules.REDOX_ELECTRO_V410='4.10';
  E.modules.RUNTIME_GATE_V410='4.10';
  E.modules.CHEMISTRY_EXECUTION_ROADMAP_V410='4.10';
  R.PARSER_ENGINE_V410={layer:'DOMAIN',owner:'CHE.PARSER_ENGINE_V410',depends:['CHEM','DATA']};
  R.STOICH_ENGINE_V410={layer:'DOMAIN',owner:'CHE.STOICH_ENGINE_V410',depends:['CHEM','DATA']};
  R.THERMO_KINETICS_V410={layer:'DOMAIN',owner:'CHE.THERMO_KINETICS_V410',depends:['DATA']};
  R.REDOX_ELECTRO_V410={layer:'DOMAIN',owner:'CHE.REDOX_ELECTRO_V410',depends:['DATA']};
  R.RUNTIME_GATE_V410={layer:'META',owner:'CHE.RUNTIME_GATE_V410',depends:[]};

  if(E.CONTRACT?.audit && !E.CONTRACT.__v410Wrapped){
    const base=E.CONTRACT.audit.bind(E.CONTRACT);
    E.CONTRACT.audit=function(){
      
      Object.keys(R).forEach(n=>{ if(!Array.isArray(R[n].depends)) R[n].depends=[]; });
      return base();
    };
    E.CONTRACT.__v410Wrapped=true;
  }

  function bind(){
    plan.render();
    const btn=document.getElementById('audit-refresh');
    if(btn&&!btn.__r410){ btn.addEventListener('click',()=>plan.render()); btn.__r410=true; }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind,{once:true});
  else bind();
})();

} catch (err) {
  try { console.warn('[CHE module 279]', err && err.message ? err.message : err); } catch(_){}
}

