

try {

(()=>{
  const E=window.CHE_ENGINE||window.CHE||{}; const D=E.DATA=E.DATA||{}; E.registry=E.registry||{};
  const prev=D.EDUCATION_MASS_V307||{};
  const stable=v=>JSON.stringify(v,Object.keys(v||{}).sort());
  const fp=s=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}return ('00000000'+h.toString(16)).slice(-8)};
  const ledger=E.EDUCATION_VERIFICATION_LEDGER_V308=E.EDUCATION_VERIFICATION_LEDGER_V308||{version:'3.08',policy:'introduced-once hard lock',records:{}};
  const mark=(id,record)=>{const f=fp(stable(record));const old=ledger.records[id];if(old&&old.fingerprint===f)return {status:'SKIP_ALREADY_INTRODUCED',id,fingerprint:f};ledger.records[id]={id,fingerprint:f,status:'INTRODUCED',introducedAt:'2026-10-02',source:record.source||'EDUCATIONAL_PACKAGE'};return {status:'INTRODUCED',id,fingerprint:f}};
  const source='EDUCATION_CORE_SP78_LO_BIOCHEM_V308';
  const indicators=[
    {id:'IND_LAKMUS',name:'lakmus',type:'acid-base',schoolUse:'orientacyjna identyfikacja odczynu',source},
    {id:'IND_PHENOLPHTHALEIN',name:'fenoloftaleina',type:'acid-base',schoolUse:'wskaźnik do demonstracji zmiany odczynu',source},
    {id:'IND_METHYL_ORANGE',name:'oranż metylowy',type:'acid-base',schoolUse:'wskaźnik kwasowo-zasadowy',source},
    {id:'IND_UNIVERSAL',name:'wskaźnik uniwersalny',type:'acid-base',schoolUse:'przybliżona ocena pH',source},
    {id:'IND_RED_CABBAGE',name:'ekstrakt z czerwonej kapusty',type:'natural',schoolUse:'demonstracja zmiany barwy wraz z odczynem',source}
  ];
  const safety=[
    {id:'BHP_ACID',topic:'kwasy',rules:['okulary ochronne','unikać kontaktu ze skórą','kwas dodawać do wody zgodnie z procedurą laboratoryjną'],source},
    {id:'BHP_BASE',topic:'zasady',rules:['okulary ochronne','unikać kontaktu ze skórą i oczami','pracować zgodnie z instrukcją'],source},
    {id:'BHP_FLAMMABLE',topic:'substancje palne',rules:['usunąć źródła zapłonu','nie ogrzewać niekontrolowanie','pracować przy odpowiedniej wentylacji'],source},
    {id:'BHP_OXIDIZER',topic:'utleniacze',rules:['trzymać z dala od materiałów palnych','stosować ochronę oczu','nie mieszać bez procedury'],source},
    {id:'BHP_GAS',topic:'gazy',rules:['kontrolować szczelność układu','nie kierować wylotu na osoby','uwzględniać palność/toksyczność'],source}
  ];
  const reactionMap=(prev.reactions||[]).map(r=>({id:r.id,equation:r.equation,name:r.name,educationStatus:'INTRODUCED_V307',canonicalMapping:'PENDING',source}));
  const stoich=[
    {id:'STOICH_LIMITING',name:'reagent ograniczający',formula:'wyznacz reagent o najmniejszej ilości względem współczynnika stechiometrycznego',source},
    {id:'STOICH_YIELD',name:'wydajność reakcji',formula:'Î· = m_rzecz / m_teor × 100%',source},
    {id:'STOICH_MOLAR_RATIO',name:'stosunek molowy',formula:'n(A)/Î˝(A) = n(B)/Î˝(B)',source},
    {id:'STOICH_GAS_MOLAR',name:'objętość molowa gazu',formula:'używaj wartości zależnej od T i p; nie zakładaj jednej uniwersalnej liczby',source},
    {id:'STOICH_CONC',name:'stężenie molowe',formula:'c=n/V',source},
    {id:'STOICH_DILUTION',name:'rozcieńczanie',formula:'c1V1=c2V2',source}
  ];
  const learning=[
    {id:'L7_ATOM_ION',topic:'atom i jon',requires:['ELEMENTS_118'],source},
    {id:'L7_FORMULA',topic:'wzór sumaryczny i jonowy',requires:['SUBSTANCES','ELEMENTS_118'],source},
    {id:'L7_REACTION',topic:'równanie reakcji i bilansowanie',requires:['REACTIONS'],source},
    {id:'L7_ACIDS_BASES',topic:'kwasy, zasady, pH',requires:['SUBSTANCES','EDUCATION_MASS_V307'],source},
    {id:'L7_SALTS',topic:'sole i reakcje strąceniowe',requires:['SUBSTANCES','EDUCATION_MASS_V307'],source},
    {id:'L8_ORGANIC',topic:'węglowodory i grupy funkcyjne',requires:['STRUCTURE','EDUCATION_MASS_V307'],source},
    {id:'LO_STOICH',topic:'mol i stechiometria',requires:['STOICH','EDUCATION_MASS_V307'],source},
    {id:'LO_REDOX',topic:'redoks i stopnie utlenienia',requires:['REACTIONS','ELEMENTS_118'],source},
    {id:'LO_ORGANIC',topic:'reakcje organiczne',requires:['STRUCTURE','REACTIONS'],source},
    {id:'LO_BIOCHEM',topic:'biomolekuły',requires:['STRUCTURE','EDUCATION_MASS_V307'],source}
  ];
  const added=[]; for(const x of [...indicators,...safety,...stoich,...learning,...reactionMap]) added.push(mark(x.id,x));
  D.EDUCATION_MASS_V308=Object.freeze({version:'3.08',source,indicators,safety,stoich,learning,reactionMap,policy:'educational layer; append-only; no overwrite; existing records are not re-researched'});
  E.EDUCATION_MASS_AUDIT_V308={run(){return {version:'3.08',ok:true,counts:{indicators:indicators.length,safety:safety.length,stoich:stoich.length,learning:learning.length,reactionMap:reactionMap.length,ledger:Object.keys(ledger.records).length},added:added.filter(x=>x.status==='INTRODUCED').length,skipped:added.filter(x=>x.status==='SKIP_ALREADY_INTRODUCED').length}}};
  E.modules=E.modules||{}; E.modules.EDUCATION_MASS_V308='3.08'; E.registry.EDUCATION_MASS_V308={layer:'EDUCATION',owner:'CHE.DATA.EDUCATION_MASS_V308',depends:['EDUCATION_MASS_V307','ELEMENTS_118','SUBSTANCES','REACTIONS','STRUCTURE','STOICH'],policy:'append-only / introduced-once hard lock'};
})();
} catch (err) {
  try { console.warn('[CHE module 193]', err && err.message ? err.message : err); } catch(_){}
}