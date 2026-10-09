

try {

(()=>{
'use strict';
const C=window.CHE||{}; const D=C.DATA=C.DATA||{}; const E=C.ENGINE=C.ENGINE||{};
const source={type:'EDUCATIONAL_CURRICULUM',authority:'ZPE/ME',scope:'Chemia SP7-8 + LO/technikum',accessed:'2026-10-02'};
const ledger=E.EDUCATION_VERIFICATION_LEDGER_V308=E.EDUCATION_VERIFICATION_LEDGER_V308||{version:'3.08',policy:'introduced-once hard lock',records:{}};
const fp=x=>{const s=JSON.stringify(x,Object.keys(x).sort());let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return ('00000000'+(h>>>0).toString(16)).slice(-8)};
const mark=(id,x)=>{const f=fp(x);if(ledger.records[id]?.fingerprint===f)return {id,status:'SKIP_ALREADY_INTRODUCED',fingerprint:f};ledger.records[id]={id,fingerprint:f,verifiedAt:'2026-10-02',source:'ZPE/ME',sourceVersion:'2025/2026'};return {id,status:'INTRODUCED',fingerprint:f}};
 
const solubilityRules=[
 {id:'SOL_RULE_NITRATES',anion:'NO3-',rule:'all_soluble',exceptions:[]},
 {id:'SOL_RULE_ALKALI',cation:'Li+/Na+/K+/NH4+',rule:'all_soluble',exceptions:[]},
 {id:'SOL_RULE_CHLORIDES',anion:'Cl-',rule:'generally_soluble',exceptions:['Ag+','Pb2+','Hg2^2+']},
 {id:'SOL_RULE_BROMIDES',anion:'Br-',rule:'generally_soluble',exceptions:['Ag+','Pb2+','Hg2^2+']},
 {id:'SOL_RULE_IODIDES',anion:'I-',rule:'generally_soluble',exceptions:['Ag+','Pb2+','Hg2^2+']},
 {id:'SOL_RULE_SULFATES',anion:'SO4^2-',rule:'generally_soluble',exceptions:['Ba2+','Sr2+','Pb2+','Ca2+']},
 {id:'SOL_RULE_CARBONATES',anion:'CO3^2-',rule:'generally_insoluble',exceptions:['Li+','Na+','K+','NH4+']},
 {id:'SOL_RULE_PHOSPHATES',anion:'PO4^3-',rule:'generally_insoluble',exceptions:['Li+','Na+','K+','NH4+']},
 {id:'SOL_RULE_HYDROXIDES',anion:'OH-',rule:'generally_insoluble',exceptions:['Li+','Na+','K+','Ba2+','Sr2+','Ca2+']},
 {id:'SOL_RULE_SULFIDES',anion:'S2-',rule:'generally_insoluble',exceptions:['Li+','Na+','K+','NH4+','Ca2+','Sr2+','Ba2+']}
].map(x=>({...x,source}));
function ionFormula(formula){return String(formula||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(c)]).replace(/²/g,'2').replace(/³/g,'3');}
const ions={H:'+1',Li:'+1',Na:'+1',K:'+1',NH4:'+1',Mg:'+2',Ca:'+2',Ba:'+2',Sr:'+2',Zn:'+2',Fe:'+2',Cu:'+2',Ag:'+1',Al:'+3',Cl:'-1',Br:'-1',I:'-1',NO3:'-1',OH:'-1',SO4:'-2',CO3:'-2',PO4:'-3',S:'-2'};
const oxidationStateRules=[
 {id:'OX_FREE_ELEMENT',rule:'free element has oxidation state 0'},
 {id:'OX_FLUORINE',rule:'F is -1 in compounds'},
 {id:'OX_OXYGEN',rule:'O is usually -2; exceptions must be represented explicitly'},
 {id:'OX_HYDROGEN',rule:'H is usually +1 with nonmetals and -1 in metal hydrides'},
 {id:'OX_SUM',rule:'sum of oxidation states equals total charge'},
 {id:'OX_MONOATOMIC_ION',rule:'monoatomic ion oxidation state equals ion charge'}
].map(x=>({...x,source}));
 
const reactionTeachingMap=Object.entries(D.REACTIONS||{}).map(([id,r])=>({id,classification:(D.REACTION_DATA?.[id]?.type)||'unclassified',reactants:r.reactants||[],products:r.products||[],requires:['CHE.DATA.REACTIONS','CHE.DATA.REACTION_DATA'],status:'MAPPED_EXISTING'}));
 
function formulaAtoms(formula){
 const s=ionFormula(formula).replace(/\([^)]*\)\d*/g,''); const out={}; const re=/([A-Z][a-z]?)(\d*)/g; let m;
 while((m=re.exec(s))){const n=m[1],c=m[2]?+m[2]:1;out[n]=(out[n]||0)+c;} return out;
}
function validateEquation(reaction){
 const balance={}; for(const side of ['reactants','products'])for(const x of reaction?.[side]||[]){for(const [el,n] of Object.entries(formulaAtoms(x.formula))){balance[el]=(balance[el]||0)+(side==='reactants'?1:-1)*n*(Number(x.coef)||0)}}
 const imbalanced=Object.entries(balance).filter(([,n])=>Math.abs(n)>1e-9); return {ok:imbalanced.length===0,imbalanced};
}
 
const STOICH_EDU={
 molFromMass:(mass,molarMass)=>({value:mass/molarMass,unit:'mol'}),
 massFromMol:(mol,molarMass)=>({value:mol*molarMass,unit:'g'}),
 particlesFromMol:(mol)=>({value:mol*6.02214076e23,unit:'entities'}),
 molarConcentration:(mol,volumeL)=>({value:mol/volumeL,unit:'mol/L'}),
 dilution:(c1,v1,c2)=>({value:c1*v1/c2,unit:'same-volume-unit-as-v1'}),
 percentYield:(actual,theoretical)=>({value:100*actual/theoretical,unit:'%'}),
 limitingReagent:(reaction,amounts)=>({status:'REQUIRES_BALANCED_REACTION',reaction,amounts})
};
 
const experimentTemplates=[
 ['EXP_SOLUBILITY','badanie rozpuszczalności','woda + wybrana substancja',['problem','hipoteza','zmienne','obserwacja','wniosek']],
 ['EXP_PH_INDICATOR','badanie pH wskaźnikiem','bezpieczne roztwory szkolne',['próba','barwa','wniosek']],
 ['EXP_MASS_CONSERVATION','porównanie mas substratów i produktów','układ zamknięty / pokaz nauczycielski',['masa_przed','reakcja','masa_po','wniosek']],
 ['EXP_REACTION_RATE','wpływ temperatury/stężenia na szybkość','kontrolowane porównanie',['zmienna_niezależna','czas','obserwacja','wniosek']],
 ['EXP_CATALYST','wpływ katalizatora','porównanie z/bez katalizatora',['kontrola','czas','wniosek']],
 ['EXP_ENERGY','efekt energetyczny','pomiar temperatury przed/po',['T_start','T_end','deltaT','wniosek']],
 ['EXP_CHROMATOGRAPHY','chromatografia barwników','materiał roślinny + faza ruchoma',['próba','rozdział','obserwacja','wniosek']],
 ['EXP_TITRATION','miareczkowanie kwasu/zasady','wskaźnik + roztwory szkolne',['punkt końcowy','objętość','obliczenia','wniosek']],
 ['EXP_GALVANIC_CELL','ogniwo galwaniczne','dwa układy redoks + obwód pomiarowy',['anoda','katoda','napięcie','wniosek']],
 ['EXP_CORROSION','korozja metalu','metal + kontrolowane środowisko',['czas','zmiana','czynniki','wniosek']]
].map(([id,title,materials,fields])=>({id,title,materials,fields,source,safetyMode:'educational-template'}));
const kinetics=[
 {id:'KIN_CONCENTRATION',factor:'stężenie',effect:'często zwiększa częstość zderzeń skutecznych'},
 {id:'KIN_TEMPERATURE',factor:'temperatura',effect:'zwiększa udział cząsteczek przekraczających barierę energetyczną'},
 {id:'KIN_SURFACE',factor:'stopień rozdrobnienia',effect:'zwiększa powierzchnię kontaktu'},
 {id:'KIN_CATALYST',factor:'katalizator',effect:'zmienia drogę reakcji i obniża energię aktywacji; nie zmienia położenia równowagi'},
 {id:'KIN_PRESSURE_GAS',factor:'ciśnienie gazów',effect:'może zmieniać szybkość przez zmianę stężeń/częstości zderzeń'}
].map(x=>({...x,source,level:'LO'}));
const redoxSkills=[
 {id:'REDOX_OXIDATION_NUMBER',skill:'wyznaczanie stopni utlenienia'},
 {id:'REDOX_ELECTRON_TRANSFER',skill:'wskazanie utleniacza i reduktora'},
 {id:'REDOX_HALF_REACTION',skill:'bilans elektronowy półreakcji'},
 {id:'REDOX_METAL_ACTIVITY',skill:'porównanie aktywności metali'},
 {id:'REDOX_CORROSION',skill:'opis korozji jako procesu elektrochemicznego'},
 {id:'REDOX_CELL',skill:'anoda/katoda i znak elektrod w ogniwie galwanicznym'}
].map(x=>({...x,source,level:'P1'}));
const biomolecules=[
 {id:'BIO_GLUKOZA',formula:'C6H12O6',class:'monosacharyd',links:['STRUCTURE','SUBSTANCES']},
 {id:'BIO_FRUKTOZA',formula:'C6H12O6',class:'monosacharyd',links:['STRUCTURE','SUBSTANCES']},
 {id:'BIO_SACHAROZA',formula:'C12H22O11',class:'disacharyd',links:['STRUCTURE','SUBSTANCES']},
 {id:'BIO_SKROBIA',class:'polisacharyd',links:['STRUCTURE']},
 {id:'BIO_CELULOZA',class:'polisacharyd',links:['STRUCTURE']},
 {id:'BIO_GLICYNA',formula:'C2H5NO2',class:'aminokwas',links:['STRUCTURE','SUBSTANCES']},
 {id:'BIO_ALANINA',formula:'C3H7NO2',class:'aminokwas',links:['STRUCTURE']},
 {id:'BIO_PEPTYD',class:'peptyd',links:['STRUCTURE','REACTIONS']},
 {id:'BIO_BIALKO',class:'białko',links:['STRUCTURE','REACTIONS']},
 {id:'BIO_TLUSZCZE',class:'lipidy',links:['STRUCTURE','REACTIONS']}
].map(x=>({...x,source,level:'P0/P1',policy:'structure-first; no invented coordinates'}));
const packageData={version:'3.10',source,priority:'P0_SP7-8_then_P1_LO_biochem',solubilityRules,oxidationStateRules,reactionTeachingMap,experimentTemplates,kinetics,redoxSkills,biomolecules,stoichAPI:Object.keys(STOICH_EDU),policy:'append-only; introduced-once; existing scientific records are not re-researched'};
D.EDUCATION_MASS_V310=Object.freeze(packageData);
C.EDU=C.EDU||{}; C.EDU.STOICH=Object.freeze(STOICH_EDU); C.EDU.validateEquation=validateEquation;
E.EDUCATION_MASS_AUDIT_V310={run(){const checks={rules:solubilityRules.length===10,oxidation:oxidationStateRules.length===6,experiments:experimentTemplates.length===10,kinetics:kinetics.length===5,redox:redoxSkills.length===6,biomolecules:biomolecules.length===10,stoich:Object.keys(STOICH_EDU).length===7};return {version:'3.10',ok:Object.values(checks).every(Boolean),checks,reactionMap:reactionTeachingMap.length,ledger:Object.keys(ledger.records).length}}};
const records=[...solubilityRules,...oxidationStateRules,...experimentTemplates,...kinetics,...redoxSkills,...biomolecules];
E.EDUCATION_MASS_AUDIT_V310.introduced=records.map(x=>mark(x.id,x)).filter(x=>x.status==='INTRODUCED').length;
E.modules=E.modules||{}; E.registry=E.registry||{}; E.modules.EDUCATION_MASS_V310='3.10'; E.registry.EDUCATION_MASS_V310={layer:'EDUCATION',owner:'CHE.DATA.EDUCATION_MASS_V310',depends:['EDUCATION_MASS_V309','ELEMENTS_118','SUBSTANCES','REACTIONS','STRUCTURE','STOICH'],policy:'append-only / introduced-once hard lock'};
})();

} catch (err) {
  try { console.warn('[CHE module 195]', err && err.message ? err.message : err); } catch(_){}
}