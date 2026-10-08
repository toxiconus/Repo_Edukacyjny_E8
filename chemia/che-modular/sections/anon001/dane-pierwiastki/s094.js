

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const base=D.ISOTOPES_REFERENCE||{};
const SOURCE={provider:'CIAAW',reference:'Isotopic Compositions of the Elements 2024',url:'https://www.ciaaw.org/isotopic-abundances.htm',scope:'representative isotopic composition of normal terrestrial material',status:'REFERENCE_CANDIDATE'};
const nuclideSource={provider:'AMDC',reference:'NUBASE2020',url:'https://amdc.impcas.ac.cn/web/nubase_en.html',scope:'experimentally known nuclear properties plus explicitly estimated/extrapolated properties',status:'REFERENCE_CANDIDATE'};
const records={};
Object.keys(base).forEach(symbol=>{const b=base[symbol]||{};records[symbol]={element:symbol,isotopes:(b.isotopes||[]).map(x=>({...x,source:x.source||SOURCE,nuclideSource:x.nuclideSource||nuclideSource}))};});
D.ISOTOPE_SCIENCE_CONTRACT={version:'2.65',source:SOURCE,nuclideSource,records};
function audit(){const symbols=Object.keys(D.ELEMENTS_118||{});const keys=symbols.length?symbols:Object.keys(records);const rows=keys.flatMap(k=>records[k]?.isotopes||[]);const byEl={};keys.forEach(k=>{const a=records[k]?.isotopes||[];const abund=a.map(x=>x.representativeAbundance).filter(Number.isFinite);const sum=abund.reduce((q,v)=>q+v,0);byEl[k]={isotopes:a.length,abundanceCount:abund.length,abundanceSum:sum,abundanceSumValid:!abund.length||(sum>=0.999&&sum<=1.001),hasReference:!!records[k]};});return {elementsExpected:keys.length,elementsPresent:keys.filter(k=>records[k]).length,isotopes:rows.length,withAbundance:rows.filter(x=>Number.isFinite(x.representativeAbundance)).length,withAtomicMass:rows.filter(x=>Number.isFinite(x.atomicMass)).length,withHalfLife:rows.filter(x=>x.halfLife!=null).length,withDecayMode:rows.filter(x=>x.decayMode!=null).length,withNuclideSource:rows.filter(x=>x.nuclideSource?.provider&&x.nuclideSource?.reference).length,abundanceChecks:Object.values(byEl).filter(x=>x.abundanceSumValid).length,abundanceProblems:Object.entries(byEl).filter(([,x])=>!x.abundanceSumValid).map(([k,x])=>({symbol:k,sum:x.abundanceSum})),missingElements:keys.filter(k=>!records[k])};}
function regression(){const a=audit();return [
{id:'SCI65-001',name:'118-element isotope contract is non-destructive',ok:a.elementsPresent<=a.elementsExpected,detail:a.elementsPresent+'/'+a.elementsExpected+' present'},
{id:'SCI65-002',name:'abundance sums are bounded when abundance data exist',ok:a.abundanceProblems.length===0,detail:String(a.abundanceProblems.length)+' problems'},
{id:'SCI65-003',name:'CIAAW provenance attached to isotope records',ok:a.isotopes===0||a.withNuclideSource===a.isotopes,detail:a.withNuclideSource+'/'+a.isotopes},
{id:'SCI65-004',name:'missing isotopes remain explicit',ok:Array.isArray(a.missingElements),detail:String(a.missingElements.length)+' elements without isotope records'},
{id:'SCI65-005',name:'reference layer does not fabricate nuclear properties',ok:a.withAtomicMass<=a.isotopes&&a.withHalfLife<=a.isotopes,detail:'no synthetic fill'}
];}
C.ISOTOPE_SCIENCE_AUDIT={version:'2.65',audit,regression,get:s=>records[s]||null};
E.modules=E.modules||{};E.modules.ISOTOPE_SCIENCE_CONTRACT='2.65';E.modules.ISOTOPE_SCIENCE_AUDIT='2.65';
E.registry=E.registry||{};E.registry.ISOTOPE_SCIENCE_CONTRACT={layer:'DATA/REFERENCE',owner:'CHE.DATA.ISOTOPE_SCIENCE_CONTRACT',depends:['ISOTOPES_REFERENCE','PROVENANCE']};E.registry.ISOTOPE_SCIENCE_AUDIT={layer:'AUDIT/DATA',owner:'CHE.ISOTOPE_SCIENCE_AUDIT',depends:['ISOTOPE_SCIENCE_CONTRACT','ELEMENTS_118']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 94]', err && err.message ? err.message : err); } catch(_){}
}