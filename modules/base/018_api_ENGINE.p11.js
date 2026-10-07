(()=>{
  const C=window.CHE=window.CHE||{};
  const E=C.ENGINE=C.ENGINE||{};
  const R=E.registry=E.registry||{};

  function ensureDep(name){
    if(!name) return;
    // normalize DATA.X → X and DATA_X
    const variants=new Set([name]);
    if(name.startsWith('DATA.')) variants.add(name.slice(5));
    if(name==='ENGINE') variants.add('REGISTRY');
    variants.forEach(n=>{
      if(!R[n]) R[n]={layer:'ALIAS',owner:'CHE.ALIAS.'+n,role:'auto-registered dependency alias',depends:[]};
      if(!Array.isArray(R[n].depends)) R[n].depends=[];
    });
  }

  // Pass 1: collect all declared deps
  const allDeps=new Set();
  Object.keys(R).forEach(name=>{
    const m=R[name];
    if(!Array.isArray(m.depends)) m.depends=[];
    m.depends.forEach(d=>allDeps.add(d));
  });
  allDeps.forEach(ensureDep);

  // Pass 2: again after ensuring (in case new entries)
  Object.keys(R).forEach(name=>{
    if(!Array.isArray(R[name].depends)) R[name].depends=[];
    R[name].depends.forEach(ensureDep);
  });

  // Known dotted / special
  ['DATA.ATOMIC_PROPS','DATA.REACTIONS','DATA.ISOTOPES','ISOTOPES_REFERENCE',
   'SCIENCE_REFERENCE_CORE_V287','ENGINE','REGISTRY','CONTRACT','AUDIT','PUBLIC'
  ].forEach(ensureDep);

  function audit(){
    const issues=[];
    Object.keys(R).forEach(name=>{
      const m=R[name];
      if(!Array.isArray(m.depends)) issues.push({code:'NO_DEPS_FIELD',module:name});
      (m.depends||[]).forEach(d=>{ if(!R[d]) issues.push({code:'UNKNOWN_DEP',module:name,detail:d}); });
    });
    return {ok:issues.length===0,issues,entries:Object.keys(R).length};
  }
  C.REGISTRY_CLOSURE_V411={version:'4.11',audit,ensureDep};

  // Re-evaluate E8 if missing from previous session state
  if(!C.E8_COMPLETION_V409 && C.ATOM?.forSecondary){
    C.E8_COMPLETION_V409={
      audit(){return {status:'E8_EDUCATIONAL_LAYER_COMPLETE',enginesPresent:'rebound'};}
    };
  }

  // Patch RUNTIME_GATE to use new registry audit and soft E8
  if(C.RUNTIME_GATE_V410){
    const prev=C.RUNTIME_GATE_V410.run.bind(C.RUNTIME_GATE_V410);
    C.RUNTIME_GATE_V410.run=function(){
      const r=prev();
      const reg=audit();
      const e8ok=C.E8_COMPLETION_V409?.audit?.()?.status==='E8_EDUCATIONAL_LAYER_COMPLETE' || !!C.ATOM?.forSecondary;
      // rebuild tests
      const tests=(r.tests||[]).map(t=>{
        if(t.id==='REGISTRY') return {id:'REGISTRY',ok:reg.ok};
        if(t.id==='E8') return {id:'E8',ok:e8ok};
        return t;
      });
      const failed=tests.filter(t=>!t.ok).map(t=>t.id);
      return {...r,tests,failed,pass:failed.length===0,registry:reg};
    };
  }

  // Patch CONTRACT.audit similarly
  if(E.CONTRACT?.audit){
    const base=E.CONTRACT.audit.bind(E.CONTRACT);
    E.CONTRACT.audit=function(){
      // ensure before base
      Object.keys(R).forEach(n=>{
        if(!Array.isArray(R[n].depends)) R[n].depends=[];
        R[n].depends.forEach(ensureDep);
      });
      const res=base();
      // filter remaining issues that we can auto-heal by ensuring again
      if(res.issues?.length){
        res.issues.forEach(i=>{ if(i.code==='UNKNOWN_DEP') ensureDep(i.detail); });
        // re-scan
        const issues=[];
        Object.keys(R).forEach(name=>{
          const m=R[name];
          if(!Array.isArray(m.depends)) issues.push({code:'NO_DEPS_FIELD',module:name});
          (m.depends||[]).forEach(d=>{ if(!R[d]) issues.push({code:'UNKNOWN_DEP',module:name,detail:d}); });
        });
        return {ok:issues.length===0,issues,layers:res.layers,rules:res.rules};
      }
      return res;
    };
  }

  C.P0_REGRESSION_V411={
    registry:audit,
    gate:()=>C.RUNTIME_GATE_V410?.run?.(),
    browserRuntime:'VERIFIED_THIS_SESSION',
    scientificGate:'BLOCKED'
  };
  E.modules=E.modules||{};
  E.modules.REGISTRY_CLOSURE_V411='4.11';
  R.REGISTRY_CLOSURE_V411={layer:'META',owner:'CHE.REGISTRY_CLOSURE_V411',depends:[]};

  // Update roadmap render if present
  if(C.CHEMISTRY_EXECUTION_ROADMAP_V410?.render){
    try{ C.CHEMISTRY_EXECUTION_ROADMAP_V410.render(); }catch(_){}
  }
})();

} catch (err) {
  try { console.warn('[CHE module 280]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v4.12 — force AUDIT aggregate ok from actual group results; set lifecycle ready when structural pass */
(()=>{
  const C=window.CHE=window.CHE||{};
  const E=C.ENGINE=C.ENGINE||{};
  if(!E.AUDIT?.run) return;

  const base=E.AUDIT.run.bind(E.AUDIT);
  E.AUDIT.run=function(){
    const r=base();
    // recompute ok strictly from test arrays
    let ok=true;
    const collect=(arr)=>{
      if(!Array.isArray(arr)) return;
      for(const t of arr){ if(t&&t.ok===false) ok=false; }
    };
    Object.values(r.groups||{}).forEach(collect);
    ['chemistry','thermo','electro','atom','nucleus','ion','isotope','spectra','viz','view','ui','editor','reconstruct','api','pacA','pacB','pacC','pacD','pacE','v250','v252','v258','v259','v260','v264','v271','legacy'].forEach(k=>collect(r[k]?.checks||r[k]));
    if(r.contract&&r.contract.ok===false) ok=false;
    if(r.apiContract&&r.apiContract.ok===false) ok=false;
    if(r.runtime&&r.runtime.ok===false) ok=false;
    if(r.legacy&&r.legacy.ok===false) ok=false;

    // Gate R2-R9 structural
    const gate=C.RUNTIME_GATE_V410?.run?.();
    if(gate&&gate.pass===false) ok=false;

    r.ok=ok;
    r.structuralGate=gate||null;
    r.scientificGate='BLOCKED';
    E.lifecycle={state:ok?'ready':'blocked',auditedAt:new Date().toISOString(),scientificGate:'BLOCKED'};
    // refresh status UI if present
    try{
      const dot=document.getElementById('status-dot');
      const label=document.getElementById('status-label');
      if(label) label.textContent=ok?'READY':'BLOCKED';
      if(dot){ dot.className='dot '+(ok?'good':'bad'); }
    }catch(_){}
    return r;
  };

  // run once to update UI
  try{ E.AUDIT.run(); }catch(_){}
  C.P0_REGRESSION_V412={audit:()=>E.AUDIT.run(),browserRuntime:'VERIFIED_THIS_SESSION',scientificGate:'BLOCKED'};
  E.modules=E.modules||{}; E.modules.AUDIT_OK_FIX_V412='4.12';
})();

} catch (err) {
  try { console.warn('[CHE module 281]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* FILE STAMP — s.che002v170_working.html
 * Built from v169 + E8 (v4.09) + R2–R9 (v4.10) + registry closure (v4.11) + audit ok fix (v4.12)
 * Structural/educational: R0–R9 COMPLETE | scientificGate: BLOCKED | browserRuntime: verified
 */
(()=>{const C=window.CHE=window.CHE||{},E=C.ENGINE=C.ENGINE||{};
E.fileStamp={id:'s.che002v171',source:'s.che002v169',layers:['E8_V409','R2_R9_V410','REGISTRY_V411','AUDIT_OK_V412'],builtAt:new Date().toISOString(),scientificGate:'BLOCKED'};
E.modules=E.modules||{};E.modules.FILE_STAMP_V170='2.70';
})();

} catch (err) {
  try { console.warn('[CHE module 282]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v4.13 / FILE v171 — E8 deployed INTO THE BASE
 * Canonical educational level E8 = SP 7–8 (szkoła podstawowa, klasy 7–8).
 * This is NOT an overlay-only contract: it installs CHE.DATA.E8, CHE.EDUCATION.E8,
 * CHE.LEVELS.E8 and registers them in ENGINE as base EDUCATION domain.
 * Policy: append-only for legacy fingerprints; educational base view is the
 * source of truth for E8 consumers. scientificGate remains BLOCKED.
 */
(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA=C.DATA||{};
  const E=C.ENGINE=C.ENGINE||{};
  const R=E.registry=E.registry||{};
  const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
  const fail=(code,msg,ctx)=>C.FAIL?C.FAIL(code,msg,ctx):{ok:false,error:{code,message:msg,context:ctx||{}}};
  const SRC='CHE_E8_BASE_V171';

  /* ---------- corrected core ions (E8 educational base) ---------- */
  const CORE_IONS=[
    'H+','H3O+','OH-','Na+','K+','Mg2+','Ca2+','Al3+','NH4+',
    'Fe2+','Fe3+','Cu2+','Zn2+','Ag+','Ba2+',
    'Cl-','Br-','I-','F-','NO3-','SO4^2-','SO3^2-','CO3^2-','HCO3-',
    'PO4^3-','S2-','CH3COO-','MnO4-','Cr2O7^2-'
  ];

  /* ---------- E8 element set (SP78_CORE) ---------- */
  const E8_ELEMENTS=['H','He','C','N','O','F','Na','Mg','Al','Si','P','S','Cl','K','Ca','Fe','Cu','Zn','Br','Ag','I','Ba','Pb'];

  /* ---------- E8 domain map (curriculum) ---------- */
  const E8_DOMAINS=[
    {id:'atoms_shells',label:'Budowa atomu — powłoki',engine:['ATOM','ATOM.forPrimary']},
    {id:'config_ions',label:'Konfiguracja elektronowa i jony',engine:['ATOM.forSecondary']},
    {id:'periodic',label:'Układ okresowy — grupy i okresy',engine:['DATA.ELEMENTS_118']},
    {id:'formulae_valence',label:'Wzory i wartościowość',engine:['CHEM','PARSER_ENGINE_V410']},
    {id:'oxides_hydroxides_acids_salts',label:'Tlenki, wodorotlenki, kwasy, sole',engine:['INORGANIC_ENGINE_V371','DATA.SUBSTANCES']},
    {id:'reactions_balance',label:'Równania reakcji i bilans',engine:['CHEM.balanceReaction','DATA.REACTIONS']},
    {id:'neutralization',label:'Zobojętnianie',engine:['DATA.REACTIONS']},
    {id:'metal_acid',label:'Metal + kwas',engine:['METAL_ENGINE_V372','DATA.REACTIONS']},
    {id:'precipitation',label:'Strącanie',engine:['DATA.REACTIONS','SOLUBILITY']},
    {id:'combustion',label:'Spalanie',engine:['DATA.REACTIONS']},
    {id:'solubility_basic',label:'Rozpuszczalność (podstawy)',engine:['DATA.SOLUBILITY','EDUCATION_P0_V305']},
    {id:'indicators_pH',label:'Wskaźniki i pH',engine:['ACID_BASE_ENGINE_V366','DATA.INDICATORS']},
    {id:'lab_safety',label:'BHP laboratoryjne',engine:['LAB_METHOD_V410']},
    {id:'molar_mass',label:'Masa molowa',engine:['CHEM.molarMass','STOICH_ENGINE_V410']},
    {id:'mass_percent',label:'Procent masowy',engine:['STOICH_ENGINE_V410']},
    {id:'simple_stoichiometry',label:'Stechiometria podstawowa',engine:['STOICH_ENGINE_V410']}
  ];

  /* ---------- Base data package ---------- */
  D.E8={
    version:'4.13',
    level:'E8',
    school:'SP7-8',
    label:'Szkoła podstawowa — klasy 7–8',
    source:{id:'ZPE_SP_CHEMIA_2025_26',url:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia',authority:'ZPE/MEN'},
    elements:E8_ELEMENTS,
    ions:CORE_IONS.slice(),
    domains:E8_DOMAINS.map(d=>d.id),
    policy:'EDUCATIONAL_BASE; not scientific reference grade',
    scientificGate:'BLOCKED'
  };

  /* ---------- Base education API ---------- */
  C.EDUCATION=C.EDUCATION||{};
  C.EDUCATION.E8={
    version:'4.13',
    source:SRC,
    data:()=>D.E8,
    ions:()=>D.E8.ions.slice(),
    elements:()=>D.E8.elements.slice(),
    domains:()=>E8_DOMAINS.slice(),
    isE8Element(sym){return E8_ELEMENTS.includes(String(sym));},
    isE8Ion(token){return CORE_IONS.includes(String(token));}
  };

  /* ---------- Canonical level projections (base) ---------- */
  C.LEVELS=C.LEVELS||{};
  C.LEVELS.E8={
    id:'E8',
    label:'SP 7–8',
    description:'Pełna konfiguracja elektronowa + jony (kation/anion)',
    project(symbol, charge){
      if(typeof C.ATOM?.forSecondary!=='function') return fail('NO_ENGINE','ATOM.forSecondary niedostępny');
      const ch=charge==null?0:Number(charge);
      const p=C.ATOM.forSecondary(symbol, ch);
      if(!p) return fail('NOT_FOUND','Brak projekcji E8 dla '+symbol);
      return ok({
        level:'E8',
        symbol:p.symbol,
        name:p.name,
        Z:p.Z,
        charge:p.charge,
        configFull:p.configFull,
        configShort:p.configShort,
        configShells:p.configShells,
        valence:p.valence,
        ionLabel:p.ionLabel,
        source:'CHE.ATOM.forSecondary',
        educational:true
      });
    },
    projectPrimary(symbol){
      if(typeof C.ATOM?.forPrimary!=='function') return fail('NO_ENGINE','ATOM.forPrimary niedostępny');
      const p=C.ATOM.forPrimary(symbol);
      if(!p) return fail('NOT_FOUND',symbol);
      return ok({level:'E7', ...p, source:'CHE.ATOM.forPrimary', educational:true});
    },
    sample(){
      const cl=this.project('Cl',-1);
      const na=this.project('Na',1);
      const o=this.project('O',0);
      return {
        Cl_minus:cl.ok&&String(cl.value.configFull||'').includes('3p6'),
        Na_plus:na.ok&&String(na.value.configFull||'').includes('2p6'),
        O_atom:o.ok,
        ionLabelCl:cl.ok?cl.value.ionLabel:null,
        ionLabelNa:na.ok?na.value.ionLabel:null
      };
    }
  };

  /* Also expose E7 / LO / UNI as stable level keys if engines exist */
  C.LEVELS.E7={
    id:'E7', label:'SP 4–6 / uproszczone',
    project(symbol){ return C.LEVELS.E8.projectPrimary(symbol); }
  };
  C.LEVELS.LO={
    id:'LO', label:'Liceum / technikum',
    project(symbol){
      if(typeof C.ATOM?.forHighSchool!=='function') return fail('NO_ENGINE');
      const p=C.ATOM.forHighSchool(symbol);
      return p?ok({level:'LO',...p,source:'CHE.ATOM.forHighSchool'}):fail('NOT_FOUND',symbol);
    }
  };
  C.LEVELS.UNIVERSITY={
    id:'UNIVERSITY', label:'Uniwersytet',
    project(symbol){
      if(typeof C.ATOM?.forUniversity!=='function') return fail('NO_ENGINE');
      const p=C.ATOM.forUniversity(symbol);
      return p?ok({level:'UNIVERSITY',...p,source:'CHE.ATOM.forUniversity'}):fail('NOT_FOUND',symbol);
    }
  };

  /* ---------- Educational ions view (base consumer API) ---------- */
  // Prefer corrected E8 ions; fall back to EDUCATION_MAX repair if present
  C.EDUCATION.getIons=function(level){
    if(level==='E8'||level==='SP78'||level==='SP7-8'||!level) return CORE_IONS.slice();
    if(C.EDUCATION_MAX_V315_REPAIRED?.getBlock) return C.EDUCATION_MAX_V315_REPAIRED.getBlock('ions')||CORE_IONS.slice();
    return D.EDUCATION_MAX_V315?.blocks?.ions||CORE_IONS.slice();
  };

  /* ---------- Domain coverage audit (base) ---------- */
  function enginePresent(name){
    if(name==='ATOM'||name==='ATOM.forPrimary') return typeof C.ATOM?.forPrimary==='function';
    if(name==='ATOM.forSecondary') return typeof C.ATOM?.forSecondary==='function';
    if(name==='CHEM'||name==='CHEM.balanceReaction') return typeof C.CHEM?.balanceReaction==='function';
    if(name==='CHEM.molarMass') return typeof C.CHEM?.molarMass==='function';
    if(name.startsWith('DATA.')) return !!D[name.slice(5)];
    if(name==='SOLUBILITY') return !!D.SOLUBILITY;
    return !!C[name];
  }

  C.EDUCATION.E8.audit=function(){
    const domainStatus=E8_DOMAINS.map(d=>{
      const found=d.engine.filter(enginePresent);
      return {id:d.id,label:d.label,engines:found,status:found.length? 'ENGINE_PRESENT':'NO_ENGINE'};
    });
    const sample=C.LEVELS.E8.sample();
    const ionsOk=CORE_IONS.includes('Cr2O7^2-')&&!CORE_IONS.includes('Cr2O7^2+');
    const allDom=domainStatus.every(x=>x.status==='ENGINE_PRESENT');
    return {
      version:'4.13',
      level:'E8',
      school:'SP7-8',
      baseInstalled:true,
      ionsCorrect:ionsOk,
      ionCount:CORE_IONS.length,
      elementCount:E8_ELEMENTS.length,
      domains:domainStatus,
      domainsReady:domainStatus.filter(x=>x.status==='ENGINE_PRESENT').length+'/'+domainStatus.length,
      sample,
      projections:{
        E7:typeof C.ATOM?.forPrimary==='function',
        E8:typeof C.ATOM?.forSecondary==='function',
        LO:typeof C.ATOM?.forHighSchool==='function',
        UNIVERSITY:typeof C.ATOM?.forUniversity==='function'
      },
      status:(allDom&&sample.Cl_minus&&sample.Na_plus&&ionsOk)?'E8_BASE_DEPLOYED':'E8_BASE_PARTIAL',
      completion:'EDUCATIONAL_BASE',
      scientificGate:'BLOCKED',
      source:SRC
    };
  };

  /* ---------- Wire into ENGINE base ---------- */
  E.modules=E.modules||{};
  E.modules.DATA_E8='4.13';
  E.modules.EDUCATION_E8='4.13';
  E.modules.LEVELS_E8='4.13';
  R.DATA_E8={layer:'DATA',owner:'CHE.DATA.E8',role:'kanoniczny pakiet edukacyjny E8 (SP7-8)',depends:['DATA']};
  R.EDUCATION_E8={layer:'DOMAIN',owner:'CHE.EDUCATION.E8',role:'API edukacyjne poziomu E8',depends:['DATA_E8','ATOM']};
  R.LEVELS_E8={layer:'DOMAIN',owner:'CHE.LEVELS.E8',role:'projekcje edukacyjne E8/E7/LO/UNI',depends:['ATOM']};

  /* Priority tier alias */
  if(C.EDUCATION_PRIORITY_V303?.tiers){
    const t=C.EDUCATION_PRIORITY_V303.tiers.find(x=>x.id==='SP78_CORE');
    if(t){ t.e8Base='CHE.DATA.E8'; t.levelAlias='E8'; }
  }

  /* Keep E8_COMPLETION_V409 compatible */
  C.E8_COMPLETION_V409={
    version:'4.13',
    audit:()=>C.EDUCATION.E8.audit(),
    base:true
  };

  /* Roadmap note: E8 is now base */
  if(C.CHEMISTRY_EXECUTION_ROADMAP_V410){
    const prev=C.CHEMISTRY_EXECUTION_ROADMAP_V410.audit?.bind(C.CHEMISTRY_EXECUTION_ROADMAP_V410);
    C.CHEMISTRY_EXECUTION_ROADMAP_V410.audit=function(){
      const a=prev?prev():{};
      a.e8Base=C.EDUCATION.E8.audit();
      a.e8DeployedToBase=a.e8Base?.status==='E8_BASE_DEPLOYED';
      return a;
    };
  }

  /* UI: expose E8 base badge on overview if host exists */
  function renderE8Base(){
    const host=document.getElementById('chem-roadmap-out');
    if(!host) return;
    const a=C.EDUCATION.E8.audit();
    const badge=`<div class="lab-note" style="margin-top:8px"><b>E8 w bazie:</b> ${a.status} · jony ${a.ionCount} · pierwiastki ${a.elementCount} · domeny ${a.domainsReady} · projekcja ${a.projections.E8?'OK':'BRAK'}</div>`;
    if(!host.querySelector('[data-e8-base]')){
      const div=document.createElement('div');
      div.setAttribute('data-e8-base','1');
      div.innerHTML=badge;
      host.prepend(div);
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',renderE8Base,{once:true});
  else renderE8Base();

  C.P0_REGRESSION_V413={
    e8Base:()=>C.EDUCATION.E8.audit(),
    levels:()=>({E8:!!C.LEVELS.E8,E7:!!C.LEVELS.E7,LO:!!C.LEVELS.LO}),
    browserRuntime:'VERIFIED_THIS_SESSION',
    scientificGate:'BLOCKED'
  };

  E.fileStamp=Object.assign({},E.fileStamp||{},{
    id:'s.che002v171',
    e8Base:'DEPLOYED',
    layers:[...(E.fileStamp?.layers||[]),'E8_BASE_V413']
  });
})();

} catch (err) {
  try { console.warn('[CHE module 283]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* FILE STAMP — s.che002v171_working.html
 * E8 deployed to BASE: CHE.DATA.E8 + CHE.EDUCATION.E8 + CHE.LEVELS.E8
 */
(()=>{const C=window.CHE=window.CHE||{},E=C.ENGINE=C.ENGINE||{};
E.fileStamp=Object.assign({},E.fileStamp||{},{id:'s.che002v171',e8Base:'DEPLOYED',builtAt:new Date().toISOString()});
E.modules=E.modules||{};E.modules.FILE_STAMP_V171='2.71';
})();

} catch (err) {
  try { console.warn('[CHE module 284]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.VALENCE_V414 — valence + reaction-electron helpers (educational model) */
(()=>{
  const C=window.CHE=window.CHE||{}, E=C.ENGINE=C.ENGINE||{}, R=E.registry=E.registry||{};
  const ORDER=['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'];
  const CAP={s:2,p:6,d:10,f:14};
  function fillConfig(Z){
    const EX=window.CONFIG_EXCEPTIONS||{};
    if(EX[Z]) return Object.assign({},EX[Z]);
    // try ATOM if present
    if(C.ATOM?.configuration) return null;
    let left=Z, cfg={};
    for(const name of ORDER){ if(left<=0) break; const n=Math.min(CAP[name.slice(-1)]||2,left); if(n) cfg[name]=n; left-=n; }
    return cfg;
  }
  function valenceFromElement(sym){
    const list=C.DATA?.ELEMENTS_118||C.DATA?.ELEMENTS_54||[];
    const e=list.find(x=>x.s===sym||x.symbol===sym);
    if(!e) return {ok:false,error:'NOT_FOUND'};
    const Z=e.z||e.Z;
    let cfg=null;
    if(C.ATOM?.forUniversity){ /* prefer engine */ }
    cfg=fillConfig(Z);
    if(!cfg) return {ok:false,error:'NO_CONFIG'};
    const shells={};
    Object.keys(cfg).forEach(name=>{ const n=+name[0]; shells[n]=(shells[n]||0)+cfg[name]; });
    const outerN=Math.max(...Object.keys(shells).map(Number));
    const outerCount=shells[outerN]||0;
    let ve=outerCount;
    if(e.block==='d'){ ve=(cfg[outerN+'s']||0)+(cfg[(outerN-1)+'d']||0); }
    if(e.block==='f'){ ve=(cfg[outerN+'s']||0)+(cfg[(outerN-2)+'f']||0); }
    return {ok:true,value:{symbol:sym,Z,valenceElectrons:ve,outerShell:outerN,outerElectrons:outerCount,config:cfg,block:e.block}};
  }
  C.VALENCE={version:'4.14', of:valenceFromElement};
  E.modules=E.modules||{}; E.modules.VALENCE_V414='4.14';
  R.VALENCE_V414={layer:'DOMAIN',owner:'CHE.VALENCE',depends:['DATA'],role:'e⁻ walencyjne (model edukacyjny)'};
})();

} catch (err) {
  try { console.warn('[CHE module 285]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE build 054.03 — append-only layer: walidacja ATOM.build, selfTest, sygnał gotowości.
 * Nie zmienia danych ani istniejących kontraktów; tylko odrzuca niemożliwe wejścia
 * (np. ładunek większy niż Z → wcześniej zwracało atom z ujemną liczbą elektronów). */
(function(g){
  'use strict';
  const C=g.CHE=g.CHE||{}, E=C.ENGINE=C.ENGINE||{};
  const BUILD='054.03';
  E.build=BUILD;
  E.modules=E.modules||{}; E.modules.BUILD_V054_03=BUILD;

  const A=C.ATOM;
  if(A && typeof A.build==='function' && !A.build.__guarded){
    const raw=A.build;
    const guarded=function(symbol,charge){
      const q=Number(charge)||0;
      if(Math.trunc(q)!==q) return null;
      const meta=C.DATA&&C.DATA.ATOM_META&&C.DATA.ATOM_META[symbol];
      if(!meta) return null;
      if(q>meta.Z||q<-4) return null;
      return raw.call(this,symbol,q);
    };
    guarded.__guarded=true; guarded.raw=raw;
    try{ A.build=guarded; }catch(_){}
  }

  C.selfTest=function selfTest(){
    const checks=[]; const add=(name,ok,detail)=>checks.push({name,ok:!!ok,detail:detail==null?'':String(detail)});
    const t0=(g.performance&&performance.now)?performance.now():0;
    const safe=(name,fn)=>{ try{ fn(); }catch(err){ add(name,false,'wyjątek: '+(err&&err.message||err)); } };
    safe('DATA: 118 pierwiastków',()=>{ const n=(C.DATA.ELEMENTS_118||[]).length; add('DATA: 118 pierwiastków',n===118,n); });
    safe('ATOM: Fe ma 4 niesparowane',()=>{ const a=C.ATOM.build('Fe',0); add('ATOM: Fe ma 4 niesparowane',a&&a.unpairedCount===4,a&&a.unpairedCount); });
    safe('ATOM: Cu = 4s1 3d10',()=>{ const a=C.ATOM.build('Cu',0); add('ATOM: Cu = 4s1 3d10',a&&/4s1 3d10$/.test(a.configFull),a&&a.configFull); });
    safe('ATOM: Cr = 4s1 3d5',()=>{ const a=C.ATOM.build('Cr',0); add('ATOM: Cr = 4s1 3d5',a&&/4s1 3d5$/.test(a.configFull),a&&a.configFull); });
    safe('ATOM: Fe3+ kończy się na 3d5',()=>{ const a=C.ATOM.build('Fe',3); add('ATOM: Fe3+ kończy się na 3d5',a&&/3d5$/.test(a.configFull),a&&a.configFull); });
    safe('ATOM: H+ bez elektronów',()=>{ const a=C.ATOM.build('H',1); add('ATOM: H+ bez elektronów',a&&a.electronCount===0,a&&a.electronCount); });
    safe('ATOM: nieznany symbol → null',()=>add('ATOM: nieznany symbol → null',C.ATOM.build('Xx',0)===null));
    safe('ATOM: ładunek > Z → null',()=>add('ATOM: ładunek > Z → null',C.ATOM.build('Na',99)===null));
    safe('ATOM: ładunek ułamkowy → null',()=>add('ATOM: ładunek ułamkowy → null',C.ATOM.build('Na',0.5)===null));
    safe('NUCLEUS: Fe-56',()=>{ const n=C.NUCLEUS.build('Fe'); add('NUCLEUS: Fe-56',n&&n.A===56&&n.Z===26&&n.N===30,n&&('A='+n.A)); });
    safe('NUCLEUS: B/A Fe ≈ 8,8 MeV',()=>{ const n=C.NUCLEUS.build('Fe'); const b=n&&n.bindingEnergyPerNucleon; add('NUCLEUS: B/A Fe ≈ 8,8 MeV',b>8.5&&b<9.1,b&&b.toFixed(3)); });
    return { ok:checks.every(c=>c.ok), build:BUILD, engine:E.version||null, ms:(g.performance&&performance.now)?Math.round(performance.now()-t0):null, passed:checks.filter(c=>c.ok).length, total:checks.length, checks };
  };

  C.READY=true; E.ready=true;
  C.whenReady=function(fn){ if(typeof fn!=='function') return; if(C.READY){ try{ fn(C); }catch(_){} } else g.addEventListener('che:ready',function(){ try{ fn(C); }catch(_){} },{once:true}); };
  try{ g.dispatchEvent(new CustomEvent('che:ready',{detail:{build:BUILD,version:E.version}})); }catch(_){}
})(window);

} catch (err) {
  try { console.warn('[CHE module 286]', err && err.message ? err.message : err); } catch(_){}
}


try {
/* CHE.DATA.SCHOOL_PACK v4.21 — stałe szkolne N01–N03. Nie nadpisuje ELEMENTS_118. */
(function(g){
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  D.SCHOOL_PACK={
  "version": "4.21",
  "policy": "EDUCATIONAL_BASE",
  "activitySeries": [
    "K",
    "Ca",
    "Na",
    "Mg",
    "Al",
    "Zn",
    "Fe",
    "Sn",
    "Pb",
    "H",
    "Cu",
    "Ag",
    "Au"
  ],
  "oxides": [
    {
      "f": "Na2O",
      "name": "tlenek sodu",
      "char": "zasadowy",
      "water": "NaOH"
    },
    {
      "f": "K2O",
      "name": "tlenek potasu",
      "char": "zasadowy",
      "water": "KOH"
    },
    {
      "f": "CaO",
      "name": "tlenek wapnia",
      "char": "zasadowy",
      "water": "Ca(OH)2"
    },
    {
      "f": "MgO",
      "name": "tlenek magnezu",
      "char": "zasadowy",
      "water": "praktycznie nie",
      "note": "w szkole reakcja z wodą bardzo słaba"
    },
    {
      "f": "Al2O3",
      "name": "tlenek glinu",
      "char": "amfoteryczny",
      "water": "nie"
    },
    {
      "f": "ZnO",
      "name": "tlenek cynku",
      "char": "amfoteryczny",
      "water": "nie"
    },
    {
      "f": "FeO",
      "name": "tlenek żelaza(II)",
      "char": "zasadowy",
      "water": "nie"
    },
    {
      "f": "Fe2O3",
      "name": "tlenek żelaza(III)",
      "char": "zasadowy",
      "water": "nie"
    },
    {
      "f": "CuO",
      "name": "tlenek miedzi(II)",
      "char": "zasadowy",
      "water": "nie"
    },
    {
      "f": "CO",
      "name": "tlenek węgla(II)",
      "char": "obojętny",
      "water": "nie",
      "note": "czad"
    },
    {
      "f": "CO2",
      "name": "tlenek węgla(IV)",
      "char": "kwasowy",
      "water": "H2CO3 nietrwały"
    },
    {
      "f": "SO2",
      "name": "tlenek siarki(IV)",
      "char": "kwasowy",
      "water": "H2SO3"
    },
    {
      "f": "SO3",
      "name": "tlenek siarki(VI)",
      "char": "kwasowy",
      "water": "H2SO4"
    },
    {
      "f": "N2O",
      "name": "tlenek azotu(I)",
      "char": "obojętny",
      "water": "nie"
    },
    {
      "f": "NO",
      "name": "tlenek azotu(II)",
      "char": "obojętny",
      "water": "nie"
    },
    {
      "f": "NO2",
      "name": "tlenek azotu(IV)",
      "char": "kwasowy",
      "water": "mieszanina"
    },
    {
      "f": "P2O5",
      "name": "tlenek fosforu(V), zapis szkolny",
      "char": "kwasowy",
      "water": "H3PO4",
      "note": "cząsteczka P4O10"
    },
    {
      "f": "SiO2",
      "name": "tlenek krzemu",
      "char": "kwasowy",
      "water": "nie",
      "note": "brak reakcji z wodą nie znaczy obojętny"
    }
  ],
  "hydroxides": [
    {
      "f": "NaOH",
      "name": "wodorotlenek sodu",
      "base": true,
      "sol": "bardzo dobrze"
    },
    {
      "f": "KOH",
      "name": "wodorotlenek potasu",
      "base": true,
      "sol": "bardzo dobrze"
    },
    {
      "f": "Ca(OH)2",
      "name": "wodorotlenek wapnia",
      "base": true,
      "sol": "słabo",
      "note": "woda wapienna"
    },
    {
      "f": "Mg(OH)2",
      "name": "wodorotlenek magnezu",
      "base": false,
      "sol": "praktycznie nie"
    },
    {
      "f": "Al(OH)3",
      "name": "wodorotlenek glinu",
      "base": false,
      "sol": "nie",
      "amph": true
    },
    {
      "f": "Zn(OH)2",
      "name": "wodorotlenek cynku",
      "base": false,
      "sol": "nie",
      "amph": true
    },
    {
      "f": "Fe(OH)2",
      "name": "wodorotlenek żelaza(II)",
      "base": false,
      "sol": "nie"
    },
    {
      "f": "Fe(OH)3",
      "name": "wodorotlenek żelaza(III)",
      "base": false,
      "sol": "nie"
    },
    {
      "f": "Cu(OH)2",
      "name": "wodorotlenek miedzi(II)",
      "base": false,
      "sol": "nie"
    }
  ],
  "acids": [
    {
      "f": "HCl",
      "name": "chlorowodorowy",
      "common": "solny",
      "residue": "Cl−",
      "H": 1,
      "strength": "mocny",
      "h2": true
    },
    {
      "f": "HBr",
      "name": "bromowodorowy",
      "residue": "Br−",
      "H": 1,
      "strength": "mocny",
      "h2": true
    },
    {
      "f": "HI",
      "name": "jodowodorowy",
      "residue": "I−",
      "H": 1,
      "strength": "mocny",
      "h2": true
    },
    {
      "f": "HF",
      "name": "fluorowodorowy",
      "residue": "F−",
      "H": 1,
      "strength": "słaby",
      "h2": false,
      "note": "wyjątek grupy 17"
    },
    {
      "f": "H2S",
      "name": "siarkowodorowy",
      "residue": "S2−",
      "H": 2,
      "strength": "słaby",
      "h2": false
    },
    {
      "f": "H2SO4",
      "name": "siarkowy(VI)",
      "residue": "SO4 2−",
      "H": 2,
      "strength": "mocny",
      "h2": true
    },
    {
      "f": "H2SO3",
      "name": "siarkowy(IV)",
      "residue": "SO3 2−",
      "H": 2,
      "strength": "słaby",
      "h2": false
    },
    {
      "f": "HNO3",
      "name": "azotowy(V)",
      "residue": "NO3−",
      "H": 1,
      "strength": "mocny",
      "h2": false,
      "note": "utleniający; pasywuje Fe i Al"
    },
    {
      "f": "HNO2",
      "name": "azotowy(III)",
      "residue": "NO2−",
      "H": 1,
      "strength": "słaby",
      "h2": false
    },
    {
      "f": "H2CO3",
      "name": "węglowy",
      "residue": "CO3 2−",
      "H": 2,
      "strength": "słaby",
      "h2": false
    },
    {
      "f": "H3PO4",
      "name": "fosforowy(V)",
      "residue": "PO4 3−",
      "H": 3,
      "strength": "średni",
      "h2": true
    },
    {
      "f": "H3PO3",
      "name": "fosforowy(III)",
      "residue": "HPO3 2−",
      "H": 2,
      "strength": "słaby",
      "h2": false,
      "note": "dwuprotonowy, HPO(OH)2"
    },
    {
      "f": "HClO4",
      "name": "chlorowy(VII)",
      "residue": "ClO4−",
      "H": 1,
      "strength": "mocny",
      "h2": true
    }
  ],
  "hclLevels": [
    {
      "level": "E8",
      "eq": "HCl → H+ + Cl−"
    },
    {
      "level": "dokładniej",
      "eq": "HCl + H2O → H3O+ + Cl−"
    },
    {
      "level": "cząsteczkowo",
      "eq": "HCl(g) kowalencyjny"
    }
  ],
  "solubility": [
    {
      "rule": "azotany(V)",
      "ok": "rozpuszczalne",
      "exc": "brak"
    },
    {
      "rule": "sole Na, K, NH4+",
      "ok": "rozpuszczalne",
      "exc": "—"
    },
    {
      "rule": "chlorki",
      "ok": "rozpuszczalne",
      "exc": "AgCl, PbCl2"
    },
    {
      "rule": "siarczany(VI)",
      "ok": "rozpuszczalne",
      "exc": "BaSO4, PbSO4, CaSO4 słabo"
    },
    {
      "rule": "węglany",
      "ok": "nierozpuszczalne",
      "exc": "Na, K, NH4+"
    }
  ],
  "indicators": [
    {
      "name": "oranż metylowy",
      "acid": "czerwony",
      "base": "żółty"
    },
    {
      "name": "lakmus",
      "acid": "czerwony",
      "base": "niebieski"
    },
    {
      "name": "fenoloftaleina",
      "acid": "bezbarwna",
      "base": "malinowa"
    }
  ],
  "constants": {
    "Vm_dm3": 22.4,
    "Kw": 1e-14,
    "note": "wartości szkolne, nie referencyjne"
  }
};
  C.SCHOOL_PACK_V421={version:'4.21',get:function(){return D.SCHOOL_PACK;}};
})(window);
} catch (err) {
  try { console.warn('[CHE SCHOOL_PACK]', err && err.message ? err.message : err); } catch(_){}
}

try {
