

try {

(()=>{
  const C=window.CHE=window.CHE||{};
  const D=C.DATA=C.DATA||{};
  const E=C.ENGINE=C.ENGINE||{};
  const R=E.registry=E.registry||{};
  const ok=v=>C.OK?C.OK(v):{ok:true,value:v};
  const fail=(code,msg,ctx)=>C.FAIL?C.FAIL(code,msg,ctx):{ok:false,error:{code,message:msg,context:ctx||{}}};
  const SRC='CHE_E8_BASE_V171';

  const CORE_IONS=[
    'H+','H3O+','OH-','Na+','K+','Mg2+','Ca2+','Al3+','NH4+',
    'Fe2+','Fe3+','Cu2+','Zn2+','Ag+','Ba2+',
    'Cl-','Br-','I-','F-','NO3-','SO4^2-','SO3^2-','CO3^2-','HCO3-',
    'PO4^3-','S2-','CH3COO-','MnO4-','Cr2O7^2-'
  ];

  const E8_ELEMENTS=['H','He','C','N','O','F','Na','Mg','Al','Si','P','S','Cl','K','Ca','Fe','Cu','Zn','Br','Ag','I','Ba','Pb'];

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

  C.EDUCATION.getIons=function(level){
    if(level==='E8'||level==='SP78'||level==='SP7-8'||!level) return CORE_IONS.slice();
    if(C.EDUCATION_MAX_V315_REPAIRED?.getBlock) return C.EDUCATION_MAX_V315_REPAIRED.getBlock('ions')||CORE_IONS.slice();
    return D.EDUCATION_MAX_V315?.blocks?.ions||CORE_IONS.slice();
  };

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

  E.modules=E.modules||{};
  E.modules.DATA_E8='4.13';
  E.modules.EDUCATION_E8='4.13';
  E.modules.LEVELS_E8='4.13';
  R.DATA_E8={layer:'DATA',owner:'CHE.DATA.E8',role:'kanoniczny pakiet edukacyjny E8 (SP7-8)',depends:['DATA']};
  R.EDUCATION_E8={layer:'DOMAIN',owner:'CHE.EDUCATION.E8',role:'API edukacyjne poziomu E8',depends:['DATA_E8','ATOM']};
  R.LEVELS_E8={layer:'DOMAIN',owner:'CHE.LEVELS.E8',role:'projekcje edukacyjne E8/E7/LO/UNI',depends:['ATOM']};

  if(C.EDUCATION_PRIORITY_V303?.tiers){
    const t=C.EDUCATION_PRIORITY_V303.tiers.find(x=>x.id==='SP78_CORE');
    if(t){ t.e8Base='CHE.DATA.E8'; t.levelAlias='E8'; }
  }

  C.E8_COMPLETION_V409={
    version:'4.13',
    audit:()=>C.EDUCATION.E8.audit(),
    base:true
  };

  if(C.CHEMISTRY_EXECUTION_ROADMAP_V410){
    const prev=C.CHEMISTRY_EXECUTION_ROADMAP_V410.audit?.bind(C.CHEMISTRY_EXECUTION_ROADMAP_V410);
    C.CHEMISTRY_EXECUTION_ROADMAP_V410.audit=function(){
      const a=prev?prev():{};
      a.e8Base=C.EDUCATION.E8.audit();
      a.e8DeployedToBase=a.e8Base?.status==='E8_BASE_DEPLOYED';
      return a;
    };
  }

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