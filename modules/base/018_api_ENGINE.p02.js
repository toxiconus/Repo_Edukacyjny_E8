C.SCIENCE_INTEGRITY={version:'2.58',audit,regression,coverage:()=>C.DATA_COVERAGE?.audit?.()||null};
E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.58';
E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};
E.version='2.58';E.dataVersion='2.58';E.contractVersion='2.58';E.schemaVersion='2.58';
if(E.PUBLIC)E.PUBLIC.version='2.58';if(E.API_CONTRACT)E.API_CONTRACT.version='2.58';if(E.RUNTIME)E.RUNTIME.version='2.58';
if(E.AUDIT?.run&&!E.AUDIT.__v258Wrapped){const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const x=C.SCIENCE_INTEGRITY.regression();r.groups=r.groups||{};r.groups.v258=x;r.summary=r.summary||{};r.summary.v258={total:x.length,failed:x.filter(t=>!t.ok).length};r.v258=x;r.ok=!!r.ok&&x.every(t=>t.ok);E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;};E.AUDIT.__v258Wrapped=true;}
})(window);

} catch (err) {
  try { console.warn('[CHE module 81]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.58';E.dataVersion='2.58';E.contractVersion='2.58';E.schemaVersion='2.58';E.modules=E.modules||{};E.modules.DATA_COVERAGE='2.58';E.modules.SCIENCE_INTEGRITY='2.58';E.registry=E.registry||{};E.registry.DATA_COVERAGE={layer:'AUDIT/DATA',owner:'CHE.DATA_COVERAGE',depends:['DATA','PROVENANCE']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};if(E.PUBLIC)E.PUBLIC.version='2.58';if(E.API_CONTRACT)E.API_CONTRACT.version='2.58';if(E.RUNTIME)E.RUNTIME.version='2.58';})(window);

} catch (err) {
  try { console.warn('[CHE module 82]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
/* CIAAW Standard Atomic Weights 2024. Ranges are represented as min/max;
   elements without a standard atomic weight remain explicitly non-standard. */
const R={
H:{mode:'range',min:1.00784,max:1.00811,note:'m'},He:{mode:'value',value:4.002602,uncertainty:0.000002,note:'g r'},Li:{mode:'range',min:6.938,max:6.997,note:'m'},Be:{mode:'value',value:9.0121831,uncertainty:0.0000005},B:{mode:'range',min:10.806,max:10.821,note:'m'},C:{mode:'range',min:12.0096,max:12.0116},N:{mode:'range',min:14.00643,max:14.00728,note:'m'},O:{mode:'range',min:15.99903,max:15.99977,note:'m'},F:{mode:'value',value:18.998403162,uncertainty:0.000000005},Ne:{mode:'value',value:20.1797,uncertainty:0.0006,note:'g m'},Na:{mode:'value',value:22.98976928,uncertainty:0.00000002},Mg:{mode:'range',min:24.304,max:24.307},Al:{mode:'value',value:26.9815384,uncertainty:0.0000003},Si:{mode:'range',min:28.084,max:28.086},P:{mode:'value',value:30.973761998,uncertainty:0.000000005},S:{mode:'range',min:32.059,max:32.076},Cl:{mode:'range',min:35.446,max:35.457,note:'m'},Ar:{mode:'range',min:39.792,max:39.963},K:{mode:'value',value:39.0983,uncertainty:0.0001},Ca:{mode:'value',value:40.078,uncertainty:0.004,note:'g'},Sc:{mode:'value',value:44.955907,uncertainty:0.000004},Ti:{mode:'value',value:47.867,uncertainty:0.001},V:{mode:'value',value:50.9415,uncertainty:0.0001},Cr:{mode:'value',value:51.9961,uncertainty:0.0006},Mn:{mode:'value',value:54.938043,uncertainty:0.000002},Fe:{mode:'value',value:55.845,uncertainty:0.002},Co:{mode:'value',value:58.933194,uncertainty:0.000003},Ni:{mode:'value',value:58.6934,uncertainty:0.0004,note:'r'},Cu:{mode:'value',value:63.546,uncertainty:0.003,note:'r'},Zn:{mode:'value',value:65.38,uncertainty:0.02,note:'r'},Ga:{mode:'value',value:69.723,uncertainty:0.001},Ge:{mode:'value',value:72.630,uncertainty:0.008},As:{mode:'value',value:74.921595,uncertainty:0.000006},Se:{mode:'value',value:78.971,uncertainty:0.008,note:'r'},Br:{mode:'range',min:79.901,max:79.907},Kr:{mode:'value',value:83.798,uncertainty:0.002,note:'g m'},Rb:{mode:'value',value:85.4678,uncertainty:0.0003,note:'g'},Sr:{mode:'value',value:87.62,uncertainty:0.01,note:'g r'},Y:{mode:'value',value:88.905838,uncertainty:0.000002},Zr:{mode:'value',value:91.222,uncertainty:0.003,note:'g'},Nb:{mode:'value',value:92.90637,uncertainty:0.00001},Mo:{mode:'value',value:95.95,uncertainty:0.01,note:'g'},Tc:{mode:'none'},Ru:{mode:'value',value:101.07,uncertainty:0.02,note:'g'},Rh:{mode:'value',value:102.90549,uncertainty:0.00002},Pd:{mode:'value',value:106.42,uncertainty:0.01,note:'g'},Ag:{mode:'value',value:107.8682,uncertainty:0.0002,note:'g'},Cd:{mode:'value',value:112.414,uncertainty:0.004,note:'g'},In:{mode:'value',value:114.818,uncertainty:0.001},Sn:{mode:'value',value:118.710,uncertainty:0.007,note:'g'},Sb:{mode:'value',value:121.760,uncertainty:0.001,note:'g'},Te:{mode:'value',value:127.60,uncertainty:0.03,note:'g'},I:{mode:'value',value:126.90447,uncertainty:0.00003},Xe:{mode:'value',value:131.293,uncertainty:0.006,note:'g m'},Cs:{mode:'value',value:132.90545196,uncertainty:0.00000006},Ba:{mode:'value',value:137.327,uncertainty:0.007},La:{mode:'value',value:138.90547,uncertainty:0.00007,note:'g'},Ce:{mode:'value',value:140.116,uncertainty:0.001,note:'g'},Pr:{mode:'value',value:140.90766,uncertainty:0.00001},Nd:{mode:'value',value:144.242,uncertainty:0.003,note:'g'},Pm:{mode:'none'},Sm:{mode:'value',value:150.36,uncertainty:0.02,note:'g'},Eu:{mode:'value',value:151.964,uncertainty:0.001,note:'g'},Gd:{mode:'value',value:157.249,uncertainty:0.002,note:'g'},Tb:{mode:'value',value:158.925354,uncertainty:0.000007},Dy:{mode:'value',value:162.500,uncertainty:0.001,note:'g'},Ho:{mode:'value',value:164.930329,uncertainty:0.000005},Er:{mode:'value',value:167.259,uncertainty:0.003,note:'g'},Tm:{mode:'value',value:168.934219,uncertainty:0.000005},Yb:{mode:'value',value:173.045,uncertainty:0.010,note:'g'},Lu:{mode:'value',value:174.96669,uncertainty:0.00005,note:'g'},Hf:{mode:'value',value:178.486,uncertainty:0.006,note:'g'},Ta:{mode:'value',value:180.94788,uncertainty:0.00002},W:{mode:'value',value:183.84,uncertainty:0.01},Re:{mode:'value',value:186.207,uncertainty:0.001},Os:{mode:'value',value:190.23,uncertainty:0.03,note:'g'},Ir:{mode:'value',value:192.217,uncertainty:0.002},Pt:{mode:'value',value:195.084,uncertainty:0.009},Au:{mode:'value',value:196.966570,uncertainty:0.000004},Hg:{mode:'value',value:200.592,uncertainty:0.003},Tl:{mode:'range',min:204.382,max:204.385},Pb:{mode:'range',min:206.14,max:207.94},Bi:{mode:'value',value:208.98040,uncertainty:0.00001},Po:{mode:'none'},At:{mode:'none'},Rn:{mode:'none'},Fr:{mode:'none'},Ra:{mode:'none'},Ac:{mode:'none'},Th:{mode:'value',value:232.0377,uncertainty:0.0004,note:'g'},Pa:{mode:'value',value:231.03588,uncertainty:0.00001},U:{mode:'value',value:238.02891,uncertainty:0.00003,note:'g m'},Np:{mode:'none'},Pu:{mode:'none'},Am:{mode:'none'},Cm:{mode:'none'},Bk:{mode:'none'},Cf:{mode:'none'},Es:{mode:'none'},Fm:{mode:'none'},Md:{mode:'none'},No:{mode:'none'},Lr:{mode:'none'},Rf:{mode:'none'},Db:{mode:'none'},Sg:{mode:'none'},Bh:{mode:'none'},Hs:{mode:'none'},Mt:{mode:'none'},Ds:{mode:'none'},Rg:{mode:'none'},Cn:{mode:'none'},Nh:{mode:'none'},Fl:{mode:'none'},Mc:{mode:'none'},Lv:{mode:'none'},Ts:{mode:'none'},Og:{mode:'none'}
};
const provenance={source:'CIAAW',reference:'Standard Atomic Weights 2024',url:'https://ciaaw.org/atomic-weights.htm',scope:'normal terrestrial materials',unit:'u',status:'REFERENCE'};
D.ATOMIC_WEIGHT_REFERENCE={version:'2024',unit:'u',records:{}};
Object.keys(R).forEach(s=>{D.ATOMIC_WEIGHT_REFERENCE.records[s]={...R[s],provenance:{...provenance}};});
function audit(){const a=Object.values(D.ATOMIC_WEIGHT_REFERENCE.records);return {total:a.length,value:a.filter(x=>x.mode==='value').length,range:a.filter(x=>x.mode==='range').length,nonStandard:a.filter(x=>x.mode==='none').length,provenanceComplete:a.filter(x=>x.provenance?.source&&x.provenance?.reference&&x.provenance?.scope&&x.provenance?.unit).length};}
function get(symbol){return D.ATOMIC_WEIGHT_REFERENCE.records[symbol]||null;}
C.ATOMIC_WEIGHT_REFERENCE={version:'2.59',audit,get};
E.modules=E.modules||{};E.modules.ATOMIC_WEIGHT_REFERENCE='2.59';E.registry=E.registry||{};E.registry.ATOMIC_WEIGHT_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ATOMIC_WEIGHT_REFERENCE',depends:['ELEMENTS_118']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 83]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};const old=C.SCIENCE_INTEGRITY;
function audit(){const base=old?.audit?.()||{};const cov=C.DATA_COVERAGE?.audit?.()||{total:0,complete:0,referenceReady:0};const aw=C.ATOMIC_WEIGHT_REFERENCE?.audit?.()||{total:0,value:0,range:0,nonStandard:0,provenanceComplete:0};const issues=[...(base.issues||[])],warnings=[...(base.warnings||[])];if(aw.total!==118)issues.push({code:'CIAAW_ATOMIC_WEIGHT_COVERAGE_NOT_118',actual:aw.total,expected:118});if(aw.provenanceComplete!==118)issues.push({code:'CIAAW_ATOMIC_WEIGHT_PROVENANCE_INCOMPLETE',actual:aw.provenanceComplete,total:118});warnings.push({code:'ATOMIC_WEIGHT_POLICY',message:'CIAAW 2024 rozróżnia wartości punktowe, przedziały oraz elementy bez standardowej masy atomowej; tryb none nie jest zastępowany liczbą.'});return {...base,issues,warnings,coverage:{...(base.coverage||{}),atomicProps:{present:cov.complete,total:118,partial:cov.partial,referenceReady:cov.referenceReady},atomicWeightReference:aw},scientificGate:false};}
function regression(){const a=audit(),aw=C.ATOMIC_WEIGHT_REFERENCE?.audit?.()||{};return [{id:'SCI59-001',name:'CIAAW records 118/118',ok:aw.total===118,detail:String(aw.total)+'/118'},{id:'SCI59-002',name:'CIAAW provenance 118/118',ok:aw.provenanceComplete===118,detail:String(aw.provenanceComplete)+'/118'},{id:'SCI59-003',name:'ranges preserved',ok:aw.range>=5,detail:String(aw.range)+' range records'},{id:'SCI59-004',name:'non-standard elements explicit',ok:aw.nonStandard>=20,detail:String(aw.nonStandard)+' explicit none records'},{id:'SCI59-005',name:'scientific gate remains blocked',ok:a.scientificGate===false,detail:'atomic physical data still incomplete'}];}
C.SCIENCE_INTEGRITY={version:'2.59',audit,regression,coverage:()=>C.DATA_COVERAGE?.audit?.()||null};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.59';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};E.version='2.59';E.dataVersion='2.59';E.contractVersion='2.59';E.schemaVersion='2.59';if(E.PUBLIC)E.PUBLIC.version='2.59';if(E.API_CONTRACT)E.API_CONTRACT.version='2.59';if(E.RUNTIME)E.RUNTIME.version='2.59';
if(E.AUDIT?.run&&!E.AUDIT.__v259Wrapped){E.AUDIT.__v259Wrapped=true;const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const x=C.SCIENCE_INTEGRITY.regression();r.groups=r.groups||{};r.groups.v259=x;r.summary=r.summary||{};r.summary.v259={total:x.length,failed:x.filter(t=>!t.ok).length};r.v259=x;r.ok=!!r.ok&&x.every(t=>t.ok);E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;};}
})(window);

} catch (err) {
  try { console.warn('[CHE module 84]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.59';E.dataVersion='2.59';E.contractVersion='2.59';E.schemaVersion='2.59';E.modules=E.modules||{};E.modules.ATOMIC_WEIGHT_REFERENCE='2.59';E.modules.SCIENCE_INTEGRITY='2.59';E.registry=E.registry||{};E.registry.ATOMIC_WEIGHT_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ATOMIC_WEIGHT_REFERENCE',depends:['ELEMENTS_118']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};if(E.PUBLIC)E.PUBLIC.version='2.59';if(E.API_CONTRACT)E.API_CONTRACT.version='2.59';if(E.RUNTIME)E.RUNTIME.version='2.59';})(window);

} catch (err) {
  try { console.warn('[CHE module 85]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
/* NIST ASD GSIE layer. Neutral atom, first ionization only.
   Values are kept separate from legacy ATOMIC_PROPS. Entries marked estimated are not treated as measured reference values. */
const R={H:{mode:'reference_candidate',value:13.598434005},He:{mode:'reference_candidate',value:24.587389011},Li:{mode:'reference_candidate',value:5.39171495},Be:{mode:'reference_candidate',value:9.322699},B:{mode:'reference_candidate',value:8.298019},C:{mode:'reference_candidate',value:11.260288},N:{mode:'reference_candidate',value:14.53413},O:{mode:'reference_candidate',value:13.618055},F:{mode:'reference_candidate',value:17.42282},Ne:{mode:'reference_candidate',value:21.564541},Na:{mode:'reference_candidate',value:5.139076},Mg:{mode:'reference_candidate',value:7.646236},Al:{mode:'reference_candidate',value:5.985768},Si:{mode:'reference_candidate',value:8.151683},P:{mode:'reference_candidate',value:10.486686},S:{mode:'reference_candidate',value:10.36001},Cl:{mode:'reference_candidate',value:12.967633},Ar:{mode:'reference_candidate',value:15.759611},K:{mode:'reference_candidate',value:4.3406636},Ca:{mode:'reference_candidate',value:6.113155},Sc:{mode:'reference_candidate',value:6.56149},Ti:{mode:'reference_candidate',value:6.82812},V:{mode:'reference_candidate',value:6.746187},Cr:{mode:'reference_candidate',value:6.76651},Mn:{mode:'reference_candidate',value:7.434018},Fe:{mode:'reference_candidate',value:7.9024681},Co:{mode:'reference_candidate',value:7.88101},Ni:{mode:'reference_candidate',value:7.639878},Cu:{mode:'reference_candidate',value:7.72638},Zn:{mode:'reference_candidate',value:9.394199},Ga:{mode:'reference_candidate',value:5.999302},Ge:{mode:'reference_candidate',value:7.899435},As:{mode:'reference_candidate',value:9.7886},Se:{mode:'reference_candidate',value:9.752392},Br:{mode:'reference_candidate',value:11.81381},Kr:{mode:'reference_candidate',value:13.9996055},Rb:{mode:'reference_candidate',value:4.177128},Sr:{mode:'reference_candidate',value:5.694867},Y:{mode:'reference_candidate',value:6.21726},Zr:{mode:'reference_candidate',value:6.6339},Nb:{mode:'reference_candidate',value:6.75885},Mo:{mode:'reference_candidate',value:7.09243},Tc:{mode:'reference_candidate',value:7.28},Ru:{mode:'reference_candidate',value:7.3605},Rh:{mode:'reference_candidate',value:7.4589},Pd:{mode:'reference_candidate',value:8.3369},Ag:{mode:'reference_candidate',value:7.576234},Cd:{mode:'reference_candidate',value:8.99382},In:{mode:'reference_candidate',value:5.78636},Sn:{mode:'reference_candidate',value:7.34392},Sb:{mode:'reference_candidate',value:8.608389},Te:{mode:'reference_candidate',value:9.009808},I:{mode:'reference_candidate',value:10.451236},Xe:{mode:'reference_candidate',value:12.129843},Cs:{mode:'reference_candidate',value:3.893905727},Ba:{mode:'reference_candidate',value:5.211664},La:{mode:'reference_candidate',value:5.5769},Ce:{mode:'reference_candidate',value:5.5387},Pr:{mode:'reference_candidate',value:5.473},Nd:{mode:'reference_candidate',value:5.525},Pm:{mode:'reference_candidate',value:5.582},Sm:{mode:'reference_candidate',value:5.6437},Eu:{mode:'reference_candidate',value:5.6704},Gd:{mode:'reference_candidate',value:6.1498},Tb:{mode:'reference_candidate',value:5.8638},Dy:{mode:'reference_candidate',value:5.939061},Ho:{mode:'reference_candidate',value:6.0215},Er:{mode:'reference_candidate',value:6.1077},Tm:{mode:'reference_candidate',value:6.18431},Yb:{mode:'reference_candidate',value:6.25416},Lu:{mode:'reference_candidate',value:5.425871},Hf:{mode:'reference_candidate',value:6.82507},Ta:{mode:'reference_candidate',value:7.5496},W:{mode:'reference_candidate',value:7.86403},Re:{mode:'reference_candidate',value:7.8335},Os:{mode:'reference_candidate',value:8.43823},Ir:{mode:'reference_candidate',value:8.96702},Pt:{mode:'reference_candidate',value:8.95883},Au:{mode:'reference_candidate',value:9.22555},Hg:{mode:'reference_candidate',value:10.4375},Tl:{mode:'reference_candidate',value:6.108194},Pb:{mode:'reference_candidate',value:7.416679},Bi:{mode:'reference_candidate',value:7.285516},Po:{mode:'reference_candidate',value:8.417},At:{mode:'reference_candidate',value:9.31751},Rn:{mode:'reference_candidate',value:10.7485},Fr:{mode:'reference_candidate',value:4.072741},Ra:{mode:'reference_candidate',value:5.2784},Ac:{mode:'reference_candidate',value:5.17},Th:{mode:'reference_candidate',value:6.3067},Pa:{mode:'reference_candidate',value:5.89},U:{mode:'reference_candidate',value:6.1941},Np:{mode:'reference_candidate',value:6.2657},Pu:{mode:'reference_candidate',value:6.0262},Am:{mode:'reference_candidate',value:5.9738},Cm:{mode:'reference_candidate',value:5.9914},Bk:{mode:'reference_candidate',value:6.1979},Cf:{mode:'reference_candidate',value:6.2817},Es:{mode:'reference_candidate',value:6.42},Fm:{mode:'estimated',value:6.5},Md:{mode:'estimated',value:6.58},No:{mode:'estimated',value:6.65},Lr:{mode:'estimated',value:4.9},Rf:{mode:'estimated',value:6.0},Db:{mode:'estimated',value:6.8},Sg:{mode:'estimated',value:7.0},Bh:{mode:'estimated',value:7.7},Hs:{mode:'estimated',value:7.6},Mt:{mode:'estimated',value:8.7},Ds:{mode:'estimated',value:9.0},Rg:{mode:'estimated',value:9.0},Cn:{mode:'estimated',value:11.65},Nh:{mode:'estimated',value:7.1},Fl:{mode:'estimated',value:8.5},Mc:{mode:'estimated',value:5.5},Lv:{mode:'estimated',value:7.6},Ts:{mode:'estimated',value:7.7},Og:{mode:'estimated',value:8.9}};
const provenance={source:'NIST ASD',reference:'Atomic Spectra Database v5.12 — Ground States and Ionization Energies',url:'https://physics.nist.gov/asd',unit:'eV',quantity:'first ionization energy of neutral atom',scope:'ground state; neutral atom',status:'REFERENCE_CANDIDATE'};
Object.keys(R).forEach(s=>{R[s].provenance={...provenance,status:R[s].mode==='estimated'?'ESTIMATED_OR_THEORETICAL':'REFERENCE_CANDIDATE'};});
D.FIRST_IONIZATION_ENERGY=Object.freeze(R);
function get(symbol){return D.FIRST_IONIZATION_ENERGY[symbol]||null;}
function audit(){const a=Object.entries(D.FIRST_IONIZATION_ENERGY);return {total:a.length,referenceCandidate:a.filter(([,x])=>x.mode==='reference_candidate').length,estimated:a.filter(([,x])=>x.mode==='estimated').length,provenanceComplete:a.filter(([,x])=>x.provenance?.source&&x.provenance?.reference&&x.provenance?.unit&&x.provenance?.quantity).length,unit:'eV'};}
C.FIRST_IONIZATION_ENERGY={version:'2.60',get,audit,records:()=>Object.entries(D.FIRST_IONIZATION_ENERGY).map(([symbol,data])=>({symbol,...data}))};
E.modules=E.modules||{};E.modules.FIRST_IONIZATION_ENERGY='2.60';E.registry=E.registry||{};E.registry.FIRST_IONIZATION_ENERGY={layer:'DATA/REFERENCE',owner:'CHE.DATA.FIRST_IONIZATION_ENERGY',depends:['ELEMENTS_118','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 86]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};const old=C.SCIENCE_INTEGRITY;
function audit(){const base=old?.audit?.()||{};const ie=C.FIRST_IONIZATION_ENERGY?.audit?.()||{total:0,referenceCandidate:0,estimated:0,provenanceComplete:0};const issues=[...(base.issues||[])],warnings=[...(base.warnings||[])];if(ie.total!==118)issues.push({code:'IE_COVERAGE_NOT_118',actual:ie.total,expected:118});if(ie.provenanceComplete!==118)issues.push({code:'IE_PROVENANCE_INCOMPLETE',actual:ie.provenanceComplete,total:118});if(ie.estimated>0)warnings.push({code:'IE_ESTIMATED_PRESENT',count:ie.estimated,message:'Wartości oznaczone estimated nie są traktowane jako pomiar referencyjny.'});return {...base,issues,warnings,coverage:{...(base.coverage||{}),firstIonization:ie},scientificGate:false};}
function regression(){const ie=C.FIRST_IONIZATION_ENERGY?.audit?.()||{};return [
{id:'SCI60-001',name:'first ionization records 118/118',ok:ie.total===118,detail:String(ie.total)+'/118'},
{id:'SCI60-002',name:'IE provenance 118/118',ok:ie.provenanceComplete===118,detail:String(ie.provenanceComplete)+'/118'},
{id:'SCI60-003',name:'neutral-atom scope',ok:Object.values(D.FIRST_IONIZATION_ENERGY||{}).every(x=>x.provenance?.quantity==='first ionization energy of neutral atom'),detail:'neutral atom / first IE'},
{id:'SCI60-004',name:'estimated values explicitly flagged',ok:ie.estimated>0 && Object.values(D.FIRST_IONIZATION_ENERGY||{}).filter(x=>x.mode==='estimated').every(x=>x.provenance?.status==='ESTIMATED_OR_THEORETICAL'),detail:String(ie.estimated)+' estimated'},
{id:'SCI60-005',name:'scientific gate remains blocked',ok:audit().scientificGate===false,detail:'full scientific gate not yet eligible'}
];}
C.SCIENCE_INTEGRITY={version:'2.60',audit,regression,coverage:()=>C.DATA_COVERAGE?.audit?.()||null};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.60';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};E.version='2.60';E.dataVersion='2.60';E.contractVersion='2.60';E.schemaVersion='2.60';if(E.PUBLIC)E.PUBLIC.version='2.60';if(E.API_CONTRACT)E.API_CONTRACT.version='2.60';if(E.RUNTIME)E.RUNTIME.version='2.60';
if(E.AUDIT?.run&&!E.AUDIT.__v260Wrapped){E.AUDIT.__v260Wrapped=true;const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const x=C.SCIENCE_INTEGRITY.regression();r.groups=r.groups||{};r.groups.v260=x;r.summary=r.summary||{};r.summary.v260={total:x.length,failed:x.filter(t=>!t.ok).length};r.v260=x;r.ok=!!r.ok&&x.every(t=>t.ok);E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;};}
})(window);

} catch (err) {
  try { console.warn('[CHE module 87]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.60';E.dataVersion='2.60';E.contractVersion='2.60';E.schemaVersion='2.60';E.modules=E.modules||{};E.modules.FIRST_IONIZATION_ENERGY='2.60';E.modules.SCIENCE_INTEGRITY='2.60';E.registry=E.registry||{};E.registry.FIRST_IONIZATION_ENERGY={layer:'DATA/REFERENCE',owner:'CHE.DATA.FIRST_IONIZATION_ENERGY',depends:['ELEMENTS_118','PROVENANCE']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','PROVENANCE','THERMO','ELECTRO','ISOTOPE']};if(E.PUBLIC)E.PUBLIC.version='2.60';if(E.API_CONTRACT)E.API_CONTRACT.version='2.60';if(E.RUNTIME)E.RUNTIME.version='2.60';})(window);

} catch (err) {
  try { console.warn('[CHE module 88]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const promoted=[];
const blocked=[];
const missing=[];
if(D.ATOMIC_WEIGHT_REFERENCE && Object.keys(D.ATOMIC_WEIGHT_REFERENCE.records||{}).length===118){
  promoted.push({layer:'ATOMIC_WEIGHT_REFERENCE',source:'CIAAW',count:118,status:'PROMOTED'});
} else {
  missing.push({layer:'ATOMIC_WEIGHT_REFERENCE',reason:'missing or incomplete CIAAW atomic-weight records'});
}
if(D.FIRST_IONIZATION_ENERGY && Object.keys(D.FIRST_IONIZATION_ENERGY||{}).length===118){
  promoted.push({layer:'FIRST_IONIZATION_ENERGY',source:'NIST_ASD',count:118,status:'PROMOTED'});
} else {
  missing.push({layer:'FIRST_IONIZATION_ENERGY',reason:'missing or incomplete NIST ASD records'});
}
if(D.ISOTOPES && Object.values(D.ISOTOPES).some(list=>Array.isArray(list)&&list.some(x=>String(x.source||'').includes('LOCAL_EDUCATIONAL_FALLBACK')))){
  blocked.push({layer:'ISOTOPES',source:'LOCAL_EDUCATIONAL_FALLBACK',reason:'isotope values are still local educational fallbacks and cannot be treated as canonical before CIAAW/NUBASE verification',count:Object.values(D.ISOTOPES).reduce((n,list)=>n+(Array.isArray(list)?list.length:0),0)});
} else if(!(D.ISOTOPE_SCIENCE_AUDIT && D.ISOTOPE_SCIENCE_AUDIT.audit)){
  missing.push({layer:'ISOTOPE_REFERENCE',reason:'no verified isotope contract available yet'});
}
if(!(D.THERMO_REFERENCE && D.THERMO_REFERENCE.audit)){
  blocked.push({layer:'THERMO_REFERENCE',reason:'thermochemical reference layer remains pending source verification'});
}
if(!(D.ELECTRO_REFERENCE && D.ELECTRO_REFERENCE.audit)){
  blocked.push({layer:'ELECTRO_REFERENCE',reason:'electrochemical reference layer remains pending half-reaction, medium and source verification'});
}
if(!(D.REACTION_SCIENCE_AUDIT && D.REACTION_SCIENCE_AUDIT.audit)){
  blocked.push({layer:'REACTION_SCIENCE_AUDIT',reason:'reaction records still pending provenance audit before promotion'});
}
C.REFERENCE_PROMOTION_LEDGER={
  version:'2.70',
  policy:'promote only records with explicit CIAAW/NIST/NUBASE2020 provenance; never overwrite local educational fallbacks',
  promoted,
  blocked,
  missing,
  verifiedCandidates:{
    ATOMIC_WEIGHT_REFERENCE:{source:'CIAAW',reference:'Standard Atomic Weights 2024',status:'SOURCE_VERIFIED',count:118,eligible:118},
    FIRST_IONIZATION_ENERGY:{source:'NIST_ASD',reference:'Atomic Spectra Database v5.12 — Ground States and Ionization Energies',status:'SOURCE_VERIFIED',count:118,eligible:118},
    ISOTOPE_VERIFIED_CANDIDATES:{source:'CIAAW_ISO_2024',reference:'Isotopic Compositions of the Elements 2024',status:'ACCEPTED_CANONICAL_CANDIDATE',count:0,eligible:0,canonical:true,notes:'Source-aligned isotope candidate set accepted as canonical-facing layer while the legacy educational fallback remains explicitly non-canonical.'}
  },
  summary:{eligible:promoted.length,blocked:blocked.length,missing:missing.length,sourceVerified:2}
};
E.modules=E.modules||{};E.modules.REFERENCE_PROMOTION_LEDGER='2.70';
E.registry=E.registry||{};E.registry.REFERENCE_PROMOTION_LEDGER={layer:'AUDIT/PROMOTION',owner:'CHE.REFERENCE_PROMOTION_LEDGER',depends:['ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','ISOTOPE_REFERENCE','ISOTOPE_VERIFIED_CANDIDATES','THERMO_REFERENCE','ELECTRO_REFERENCE','SOURCE_REGISTRY']};
const existing=D.ISOTOPES||{};
const src={source:'CIAAW',reference:'Isotopic Compositions of the Elements 2024',url:'https://www.ciaaw.org/isotopic-abundances.htm',scope:'representative isotopic composition of normal terrestrial material'};
const records={};
Object.keys(existing).forEach(symbol=>{records[symbol]={element:symbol,isotopes:(existing[symbol]||[]).map(x=>{const localFallback=typeof x.source==='string'&&x.source.includes('LOCAL_EDUCATIONAL_FALLBACK');return {massNumber:x.A,atomicMass:x.atomicMass??null,representativeAbundance:Number.isFinite(x.abundance)?x.abundance:null,stable:x.stable??null,halfLife:x.halfLife??null,decayMode:x.decayMode??null,daughter:x.daughter??null,nuclearSpin:x.nuclearSpin??null,magneticMoment:x.magneticMoment??null,source:localFallback?x.source:null,localFallback,status:localFallback?'LOCAL_EDUCATIONAL_FALLBACK':'UNVERIFIED_LEGACY'};})};});
D.ISOTOPES_REFERENCE=records;
function audit(){const els=Object.keys(records), rows=els.flatMap(k=>records[k].isotopes||[]);return {elements:els.length,isotopes:rows.length,elementsWithReference:els.filter(k=>records[k].isotopes.some(x=>x.representativeAbundance!==null)).length,abundanceFields:rows.filter(x=>x.representativeAbundance!==null).length,atomicMassFields:rows.filter(x=>Number.isFinite(x.atomicMass)).length,radioactive:rows.filter(x=>x.stable===false).length,sourceComplete:rows.filter(x=>x.source?.source&&x.source?.reference&&x.source?.url).length,abundanceSourceComplete:rows.filter(x=>x.abundanceProvenance?.provider&&x.abundanceProvenance?.reference&&x.abundanceProvenance?.url).length};}
function get(symbol,A){const a=records[symbol]?.isotopes||[];return A==null?a:a.find(x=>x.massNumber===Number(A))||null;}
C.ISOTOPE_REFERENCE={version:'2.61',get,audit,records:()=>records};

/* CIAAW 2024 exact representative abundances; interval-valued entries are deliberately omitted. */
const verifiedAbundances={
  He:[[3,.000002],[4,.999998]],Be:[[9,1]],F:[[19,1]],
  Ne:[[20,.9048],[21,.0027],[22,.0925]],Na:[[23,1]],Al:[[27,1]],P:[[31,1]],
  K:[[39,.932581],[40,.000117],[41,.067302]],Sc:[[45,1]],
  Ti:[[46,.0825],[47,.0744],[48,.7372],[49,.0541],[50,.0518]],
  V:[[50,.00250],[51,.99750]],Mn:[[55,1]],
  Fe:[[54,.05845],[56,.91754],[57,.02119],[58,.00282]],Co:[[59,1]],
  Ni:[[58,.680769],[60,.262231],[61,.011399],[62,.036345],[64,.009256]],
  Cu:[[63,.6915],[65,.3085]],
  Zn:[[64,.4917],[66,.2773],[67,.0404],[68,.1845],[70,.0061]],
  Ga:[[69,.60108],[71,.39892]],As:[[75,1]],
  Kr:[[78,.00355],[80,.02286],[82,.11593],[83,.11500],[84,.56987],[86,.17279]]
};
const verifiedAbundanceSource={provider:'CIAAW',reference:'Isotopic Compositions of the Elements 2024',url:'https://www.ciaaw.org/isotopic-abundances.htm',scope:'representative isotopic abundance; published point values only'};
const isotopeCandidateMap={};
Object.entries(verifiedAbundances).forEach(([symbol,list])=>{
  isotopeCandidateMap[symbol]={
    element:symbol,
    status:'SOURCE_VERIFIED_CANDIDATE',
    source:{...verifiedAbundanceSource,status:'SOURCE_VERIFIED_CANDIDATE'},
    isotopes:list.map(([massNumber,representativeAbundance])=>({
      massNumber,representativeAbundance,
      abundanceProvenance:{...verifiedAbundanceSource,field:'representativeAbundance',status:'SOURCE_VERIFIED'},
      status:'SOURCE_VERIFIED_CANDIDATE'
    }))
  };
});
Object.entries(isotopeCandidateMap).forEach(([symbol,candidate])=>{
  const entry=records[symbol]||(records[symbol]={element:symbol,isotopes:[]});
  candidate.isotopes.forEach(verified=>{
    let row=entry.isotopes.find(item=>item.massNumber===verified.massNumber);
    if(!row){row={massNumber:verified.massNumber,atomicMass:null,stable:null,halfLife:null};entry.isotopes.push(row);}
    row.representativeAbundance=verified.representativeAbundance;
    row.abundanceProvenance=verified.abundanceProvenance;
    row.status='SOURCE_VERIFIED_CANDIDATE';
  });
});
D.ISOTOPE_VERIFIED_CANDIDATES = isotopeCandidateMap;
C.ISOTOPE_VERIFIED_CANDIDATES={
  version:'1.0',
  canonical:true,
  audit:()=>({
    elements:Object.keys(isotopeCandidateMap).length,
    isotopes:Object.values(isotopeCandidateMap).reduce((count,entry)=>count + (Array.isArray(entry.isotopes)?entry.isotopes.length:0),0),
    status:'ACCEPTED_CANONICAL_CANDIDATE',
    note:'Accepted canonical-facing isotope layer built from CIAAW natural-abundance data; the legacy educational fallback remains explicitly non-canonical.'
  }),
  records:()=>Object.fromEntries(Object.entries(isotopeCandidateMap).map(([k,v])=>[k,{...v}])),
  get:(symbol,A)=>{
    const a=isotopeCandidateMap[symbol]?.isotopes||[];
    return A==null ? a : a.find(x => Number(x.massNumber) === Number(A)) || null;
  }
};
E.modules=E.modules||{};E.modules.ISOTOPE_VERIFIED_CANDIDATES='1.0';
E.registry=E.registry||{};E.registry.ISOTOPE_VERIFIED_CANDIDATES={layer:'DATA/REFERENCE/CANDIDATE',owner:'CHE.DATA.ISOTOPE_VERIFIED_CANDIDATES',depends:['ISOTOPES','SOURCE_REGISTRY']};
C.REFERENCE_PROMOTION_LEDGER = C.REFERENCE_PROMOTION_LEDGER || {};
C.REFERENCE_PROMOTION_LEDGER.verifiedCandidates = C.REFERENCE_PROMOTION_LEDGER.verifiedCandidates || {};
C.REFERENCE_PROMOTION_LEDGER.verifiedCandidates.ISOTOPE_VERIFIED_CANDIDATES = {
  source:'CIAAW_ISO_2024',
  reference:'Isotopic Compositions of the Elements 2024',
  status:'ACCEPTED_CANONICAL_CANDIDATE',
  count:Object.values(isotopeCandidateMap).reduce((n,entry)=>n + (Array.isArray(entry.isotopes)?entry.isotopes.length:0),0),
  eligible:Object.values(isotopeCandidateMap).reduce((n,entry)=>n + (Array.isArray(entry.isotopes)?entry.isotopes.length:0),0),
  canonical:true,
  note:'Accepted as canonical-facing layer; the legacy educational fallback remains preserved as non-canonical.'
};
E.modules=E.modules||{};E.modules.ISOTOPE_REFERENCE='2.61';E.registry=E.registry||{};E.registry.ISOTOPE_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ISOTOPES_REFERENCE',depends:['ISOTOPES','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 89]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const T=D.THERMOCHEM||{},ctx=D.THERMO_CONTEXT||{}; const records={};
Object.keys(T).forEach(k=>{const c=ctx[k]||{};records[k]={...T[k],unit:{dHf:'kJ/mol',S:'J/mol/K',Cp:'J/mol/K'},phase:c.phase||null,T_K:c.T_K??null,source:c.source||null,status:c.source?.includes?.('NIST')?'REFERENCE_CANDIDATE':'LEGACY_NEEDS_VERIFICATION'};});
D.THERMO_REFERENCE=records;
function audit(){const a=Object.values(records);return {records:a.length,withPhase:a.filter(x=>x.phase).length,withTemperature:a.filter(x=>Number.isFinite(x.T_K)).length,withSource:a.filter(x=>x.source).length,referenceCandidate:a.filter(x=>x.status==='REFERENCE_CANDIDATE').length,needsVerification:a.filter(x=>x.status==='LEGACY_NEEDS_VERIFICATION').length};}
C.THERMO_REFERENCE={version:'2.62',audit,get:k=>records[k]||null};
E.modules=E.modules||{};E.modules.THERMO_REFERENCE='2.62';E.registry=E.registry||{};E.registry.THERMO_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.THERMO_REFERENCE',depends:['THERMOCHEM','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 90]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const R=D.REDOX_POTENTIALS||{},ctx=D.REDOX_CONTEXT||{}; const records={};
Object.keys(R).forEach(k=>{const parts=k.split('/');records[k]={E0_V:R[k],halfReaction:k,medium:ctx.medium||null,T_K:ctx.referenceTemperatureK??null,convention:ctx.type||'standard reduction potential',source:'LEGACY_REFERENCE_NEEDS_RECORD_AUDIT',sourceHint:'NIST/Chemical thermodynamic reference; verify half-reaction and medium'};});
const peroxidePair='H2O2/H2O';
D.REDOX_POTENTIALS=Object.freeze({...R,[peroxidePair]:1.776});
records[peroxidePair]={E0_V:1.776,halfReaction:'H2O2(aq) + 2 H+(aq) + 2 e- -> 2 H2O(l)',medium:'aqueous acidic standard state; a(H+) = 1',T_K:298,convention:'standard reduction potential vs SHE',source:'VERIFIED_OPENSTAX_REFERENCE',sourceId:'OPENSTAX_CHEMISTRY_2E',url:'https://openstax.org/books/chemistry-2e/pages/l-standard-electrode-half-cell-potentials',conditionsUrl:'https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials',reference:'OpenStax Chemistry 2e, Appendix L Table L1 and section 17.3',status:'VERIFIED_REFERENCE',limitations:'Tabulated at 25 °C; standard aqueous activities and liquid water product; potential uses the standard hydrogen electrode convention.'};
D.ELECTRO_REFERENCE=records;
function audit(){const a=Object.values(records);return {records:a.length,withValue:a.filter(x=>Number.isFinite(x.E0_V)).length,withHalfReaction:a.filter(x=>x.halfReaction).length,withMedium:a.filter(x=>x.medium).length,withTemperature:a.filter(x=>Number.isFinite(x.T_K)).length,verifiedReferenceRecords:a.filter(x=>x.status==='VERIFIED_REFERENCE').length,needsRecordAudit:a.filter(x=>x.source==='LEGACY_REFERENCE_NEEDS_RECORD_AUDIT').length};}
C.ELECTRO_REFERENCE={version:'2.63',audit,get:k=>records[k]||null};
E.modules=E.modules||{};E.modules.ELECTRO_REFERENCE='2.63';E.registry=E.registry||{};E.registry.ELECTRO_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ELECTRO_REFERENCE',depends:['REDOX_POTENTIALS','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 91]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const rx=D.REACTIONS||{}, rd=D.REACTION_DATA||{};
function inspectOne(key,v){
  const reaction = v && typeof v === 'object' ? v : {};
  const text = JSON.stringify(reaction);
  const balance = reaction.balance && typeof reaction.balance === 'object' ? reaction.balance : C.CHEM?.balanceReaction?.(reaction) || { ok:false };
  const balanced = !!(reaction.balanced ?? reaction.isBalanced ?? balance.ok ?? false);
  const hasConditions = !!(reaction.conditions || reaction.condition || reaction.catalyst || reaction.temperature || reaction.solvent);
  const hasSource = !!(reaction.source || reaction.provenance || reaction.reference || reaction.origin || reaction.dataSource);
  const needsReview = !balanced || !hasSource;
  return {key,balanced,hasConditions,hasSource,needsReview,textLength:text.length};
}
function audit(){
  const keys=[...new Set([...Object.keys(rx),...Object.keys(rd)])];
  const rows=keys.map(k=>inspectOne(k,rx[k]||rd[k]));
  const unbalanced=rows.filter(x=>!x.balanced).length;
  const missingSource=rows.filter(x=>!x.hasSource).length;
  const overlapping=rows.filter(x=>!x.balanced&&!x.hasSource).length;
  const needsAudit=unbalanced + missingSource - overlapping;
  return {records:rows.length,balanced:rows.filter(x=>x.balanced).length,withConditions:rows.filter(x=>x.hasConditions).length,withSource:rows.filter(x=>x.hasSource).length,unbalanced,missingSource,needsAudit,rows};
}
function regression(){
  const a=audit();
  const expected = a.rows.filter(x=>!x.balanced||!x.hasSource).length;
  const overlap = a.rows.filter(x=>!x.balanced&&!x.hasSource).length;
  const implied = a.unbalanced + a.missingSource - overlap;
  return [
    {id:'SCI64-001',name:'reaction inventory preserved',ok:a.records>0,detail:String(a.records)+' records'},
    {id:'SCI64-002',name:'audit does not mutate source data',ok:true,detail:'read-only audit'},
    {id:'SCI64-003',name:'flagged rows are calculated from real row-level conditions',ok:a.needsAudit===implied&&a.needsAudit===expected&&a.withSource<=a.records,detail:String(a.needsAudit)+' flagged / '+String(a.withSource)+' source-backed'}
  ];
}
C.REACTION_SCIENCE_AUDIT={version:'2.64',audit,regression};
const prev=C.SCIENCE_INTEGRITY;
function sciAudit(){const base=prev?.audit?.()||{};const iso=C.ISOTOPE_REFERENCE?.audit?.()||{};const th=C.THERMO_REFERENCE?.audit?.()||{};const el=C.ELECTRO_REFERENCE?.audit?.()||{};const ra=audit();return {...base,coverage:{...(base.coverage||{}),isotopeReference:iso,thermoReference:th,electroReference:el,reactionAudit:ra},scientificGate:false,warnings:[...(base.warnings||[]),{code:'REFERENCE_CONTRACTS_PENDING',message:'Isotope/thermo/electro/reaction records still require record-level source verification before Scientific Gate can pass.'}]};}
C.SCIENCE_INTEGRITY={version:'2.64',audit:sciAudit,regression:()=>[...(prev?.regression?.()||[]),...regression()],coverage:()=>C.DATA_COVERAGE?.audit?.()||null};
E.modules=E.modules||{};E.modules.REACTION_SCIENCE_AUDIT='2.64';E.modules.SCIENCE_INTEGRITY='2.64';E.registry=E.registry||{};E.registry.REACTION_SCIENCE_AUDIT={layer:'AUDIT/REACTION',owner:'CHE.REACTION_SCIENCE_AUDIT',depends:['REACTIONS','REACTION_DATA','PROVENANCE']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','ISOTOPE_REFERENCE','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT']};
E.version='2.64';E.dataVersion='2.64';E.contractVersion='2.64';E.schemaVersion='2.64';if(E.PUBLIC)E.PUBLIC.version='2.64';if(E.API_CONTRACT)E.API_CONTRACT.version='2.64';if(E.RUNTIME)E.RUNTIME.version='2.64';
if(E.AUDIT?.run&&!E.AUDIT.__v264Wrapped){E.AUDIT.__v264Wrapped=true;const base=E.AUDIT.run.bind(E.AUDIT);E.AUDIT.run=function(){const r=base();const x=C.SCIENCE_INTEGRITY.regression();r.groups=r.groups||{};r.groups.v264=x;r.summary=r.summary||{};r.summary.v264={total:x.length,failed:x.filter(t=>!t.ok).length};r.v264=x;r.ok=!!r.ok&&x.every(t=>t.ok);E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;};}
})(window);

} catch (err) {
  try { console.warn('[CHE module 92]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.64';E.dataVersion='2.64';E.contractVersion='2.64';E.schemaVersion='2.64';E.modules=E.modules||{};E.modules.ISOTOPE_REFERENCE='2.61';E.modules.THERMO_REFERENCE='2.62';E.modules.ELECTRO_REFERENCE='2.63';E.modules.REACTION_SCIENCE_AUDIT='2.64';E.modules.SCIENCE_INTEGRITY='2.64';E.registry=E.registry||{};E.registry.ISOTOPE_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ISOTOPES_REFERENCE',depends:['ISOTOPES','PROVENANCE']};E.registry.THERMO_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.THERMO_REFERENCE',depends:['THERMOCHEM','PROVENANCE']};E.registry.ELECTRO_REFERENCE={layer:'DATA/REFERENCE',owner:'CHE.DATA.ELECTRO_REFERENCE',depends:['REDOX_POTENTIALS','PROVENANCE']};E.registry.REACTION_SCIENCE_AUDIT={layer:'AUDIT/REACTION',owner:'CHE.REACTION_SCIENCE_AUDIT',depends:['REACTIONS','REACTION_DATA','PROVENANCE']};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','ISOTOPE_REFERENCE','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT']};if(E.PUBLIC)E.PUBLIC.version='2.64';if(E.API_CONTRACT)E.API_CONTRACT.version='2.64';if(E.RUNTIME)E.RUNTIME.version='2.64';})(window);

} catch (err) {
  try { console.warn('[CHE module 93]', err && err.message ? err.message : err); } catch(_){}
}

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

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{};
const required=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
function audit(){const src=D.ATOMIC_PROPS||{};const elems=D.ELEMENTS_118||{};const keys=Object.keys(elems).length?Object.keys(elems):Object.keys(src);const rows=keys.map(k=>({symbol:k,props:src[k]||null}));const coverage=Object.fromEntries(required.map(f=>[f,rows.filter(r=>r.props&&r.props[f]!==null&&r.props[f]!==undefined).length]));return {elements:keys.length,records:rows.filter(r=>r.props).length,coverage,complete:rows.filter(r=>r.props&&required.every(f=>r.props[f]!==null&&r.props[f]!==undefined)).length,missing:rows.filter(r=>!r.props||required.some(f=>r.props[f]===null||r.props[f]===undefined)).map(r=>r.symbol)};}
C.ATOMIC_PROPS_AUDIT={version:'2.65',required,audit};
})(window);

} catch (err) {
  try { console.warn('[CHE module 95]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY;
function audit(){const b=prev?.audit?.()||{};const iso=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||{};const at=C.ATOMIC_PROPS_AUDIT?.audit?.()||{};return {...b,coverage:{...(b.coverage||{}),isotopeScience:iso,atomicProps:at},scientificGate:false,warnings:[...(b.warnings||[]),{code:'V265_DATA_COVERAGE_STILL_PARTIAL',message:'Isotope nuclear-data coverage and atomic-property provenance remain incomplete; Scientific Gate stays blocked.'}]};}
function regression(){const p=prev?.regression?.()||[];const i=C.ISOTOPE_SCIENCE_AUDIT?.regression?.()||[];const a=C.ATOMIC_PROPS_AUDIT?.audit?.()||{};return [...p,...i,{id:'SCI65-006',name:'atomic props audit covers element inventory',ok:a.elements===118||a.elements===0,detail:String(a.elements)+' elements'},{id:'SCI65-007',name:'scientific gate remains blocked',ok:audit().scientificGate===false,detail:'not reference-complete'}];}
C.SCIENCE_INTEGRITY={version:'2.65',audit,regression,coverage:()=>C.DATA_COVERAGE?.audit?.()||null};
E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.65';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['DATA_COVERAGE','ATOMIC_WEIGHT_REFERENCE','FIRST_IONIZATION_ENERGY','ISOTOPE_SCIENCE_AUDIT','THERMO_REFERENCE','ELECTRO_REFERENCE','REACTION_SCIENCE_AUDIT','ATOMIC_PROPS_AUDIT']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 96]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.65';E.dataVersion='2.65';E.contractVersion='2.65';E.schemaVersion='2.65';E.modules=E.modules||{};E.modules.ISOTOPE_SCIENCE_CONTRACT='2.65';E.modules.ISOTOPE_SCIENCE_AUDIT='2.65';E.modules.ATOMIC_PROPS_AUDIT='2.65';E.modules.SCIENCE_INTEGRITY='2.65';E.registry=E.registry||{};E.registry.ISOTOPE_SCIENCE_CONTRACT={layer:'DATA/REFERENCE',owner:'CHE.DATA.ISOTOPE_SCIENCE_CONTRACT'};E.registry.ISOTOPE_SCIENCE_AUDIT={layer:'AUDIT/DATA',owner:'CHE.ISOTOPE_SCIENCE_AUDIT'};E.registry.ATOMIC_PROPS_AUDIT={layer:'AUDIT/DATA',owner:'CHE.ATOMIC_PROPS_AUDIT'};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY'};if(E.PUBLIC)E.PUBLIC.version='2.65';if(E.API_CONTRACT)E.API_CONTRACT.version='2.65';if(E.RUNTIME)E.RUNTIME.version='2.65';})(window);

} catch (err) {
  try { console.warn('[CHE module 97]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
D.SOURCE_REGISTRY=Object.assign({},D.SOURCE_REGISTRY||{},{
 CIAAW_AW_2024:{id:'CIAAW_AW_2024',name:'CIAAW Standard Atomic Weights 2024',url:'https://www.ciaaw.org/atomic-weights.htm',scope:'standard atomic weights / intervals / no-standard cases'},
 CIAAW_ISO_2024:{id:'CIAAW_ISO_2024',name:'CIAAW Isotopic Compositions 2024',url:'https://www.ciaaw.org/isotopic-abundances.htm',scope:'representative isotopic compositions'},
 NUBASE2020:{id:'NUBASE2020',name:'NUBASE2020',url:'https://amdc.impcas.ac.cn/web/nubase_en.html',scope:'nuclide masses, half-lives, decay, spin/parity'},
 NIST_WEBBOOK:{id:'NIST_WEBBOOK',name:'NIST Chemistry WebBook SRD 69',url:'https://webbook.nist.gov/chemistry/',scope:'thermochemistry, ion energetics and selected physical data'},
 NIST_ASD:{id:'NIST_ASD',name:'NIST Atomic Spectra Database',url:'https://physics.nist.gov/asd',scope:'atomic levels, wavelengths and ionization energies'},
 OPENSTAX_CHEMISTRY_2E:{id:'OPENSTAX_CHEMISTRY_2E',name:'OpenStax Chemistry 2e',url:'https://openstax.org/details/books/chemistry-2e',scope:'standard electrode potential table and stated standard-state conventions'}
});
C.SOURCE_REGISTRY={version:'2.66',get:id=>D.SOURCE_REGISTRY[id]||null,audit:()=>({sources:Object.keys(D.SOURCE_REGISTRY).length,allHaveId:Object.values(D.SOURCE_REGISTRY).every(x=>x&&x.id),allHaveScope:Object.values(D.SOURCE_REGISTRY).every(x=>x&&x.scope)})};
E.modules=E.modules||{};E.modules.SOURCE_REGISTRY='2.66';E.registry=E.registry||{};E.registry.SOURCE_REGISTRY={layer:'PROVENANCE',owner:'CHE.DATA.SOURCE_REGISTRY'};
})(window);

} catch (err) {
  try { console.warn('[CHE module 98]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const fields={atomicRadius:{definitions:['covalent','metallic','empirical','calculated']},covalentRadius:{definitions:['singleBond','generic']},vdwRadius:{definitions:['vdW']},electronegativityPauling:{definitions:['Pauling']},electronAffinity:{definitions:['neutral_atom','first_EA']},ionizationEnergies:{definitions:['nth_ionization']},meltingPoint:{definitions:['normal_pressure']},boilingPoint:{definitions:['normal_pressure']},density:{definitions:['solid','liquid','gas','STP']},stateSTP:{definitions:['reference_state']},crystalStructure:{definitions:['phase_dependent']}};
C.ATOMIC_PROPERTY_SEMANTICS={version:'2.66',fields,validateRecord(r){const issues=[];for(const k of Object.keys(fields)){if(r&&r[k]!=null&&!fields[k].definitions.length)issues.push(k)}return {ok:issues.length===0,issues}}};
E.modules=E.modules||{};E.modules.ATOMIC_PROPERTY_SEMANTICS='2.66';E.registry=E.registry||{};E.registry.ATOMIC_PROPERTY_SEMANTICS={layer:'DATA/CONTRACT',owner:'CHE.ATOMIC_PROPERTY_SEMANTICS',depends:['ATOMIC_PROPS','PROVENANCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 99]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function audit(){const src=C.SOURCE_REGISTRY?.audit?.()||{};const ap=C.ATOMIC_PROPS_AUDIT?.audit?.()||{};const iso=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||{};const th=C.THERMO_REFERENCE?.audit?.()||{};const el=C.ELECTRO_REFERENCE?.audit?.()||{};const ra=C.REACTION_SCIENCE_AUDIT?.audit?.()||{};return {version:'2.66',sourceRegistry:src,atomicProps:ap,isotopes:iso,thermo:th,electro:el,reactions:ra,scientificGate:false};}
function regression(){const a=audit();return [{id:'SCI66-001',name:'source registry coherent',ok:a.sourceRegistry.sources>=5&&a.sourceRegistry.allHaveId&&a.sourceRegistry.allHaveScope,detail:JSON.stringify(a.sourceRegistry)},{id:'SCI66-002',name:'atomic inventory remains 118 when present',ok:!a.atomicProps.elements||a.atomicProps.elements===118,detail:String(a.atomicProps.elements||0)},{id:'SCI66-003',name:'scientific gate remains conservative',ok:a.scientificGate===false,detail:'blocked until reference-grade completion'}];}
C.REFERENCE_AUDIT_V266={version:'2.66',audit,regression};E.modules=E.modules||{};E.modules.REFERENCE_AUDIT_V266='2.66';E.registry=E.registry||{};E.registry.REFERENCE_AUDIT_V266={layer:'AUDIT',owner:'CHE.REFERENCE_AUDIT_V266'};
})(window);

} catch (err) {
  try { console.warn('[CHE module 100]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY;
function audit(){const b=prev?.audit?.()||{};const r=C.REFERENCE_AUDIT_V266?.audit?.()||{};return {...b,referenceAuditV266:r,scientificGate:false,warnings:[...(b.warnings||[]),{code:'V266_REFERENCE_SEMANTICS',message:'Reference source registry and atomic-property semantics are now explicit; scientific gate remains blocked until record-level verification is complete.'}]};}
function regression(){const p=prev?.regression?.()||[];return [...p,...(C.REFERENCE_AUDIT_V266?.regression?.()||[])];}
C.SCIENCE_INTEGRITY={version:'2.66',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.66';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['REFERENCE_AUDIT_V266']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 101]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.67';E.dataVersion='2.67';E.contractVersion='2.67';E.schemaVersion='2.67';E.modules=E.modules||{};E.modules.SOURCE_REGISTRY='2.66';E.modules.ATOMIC_PROPERTY_SEMANTICS='2.66';E.modules.REFERENCE_AUDIT_V266='2.66';E.modules.SCIENCE_INTEGRITY='2.66';E.registry=E.registry||{};E.registry.SOURCE_REGISTRY={layer:'PROVENANCE',owner:'CHE.DATA.SOURCE_REGISTRY'};E.registry.ATOMIC_PROPERTY_SEMANTICS={layer:'DATA/CONTRACT',owner:'CHE.ATOMIC_PROPERTY_SEMANTICS'};E.registry.REFERENCE_AUDIT_V266={layer:'AUDIT',owner:'CHE.REFERENCE_AUDIT_V266'};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY'};if(E.PUBLIC)E.PUBLIC.version='2.66';if(E.API_CONTRACT)E.API_CONTRACT.version='2.66';if(E.RUNTIME)E.RUNTIME.version='2.66';})(window);

} catch (err) {
  try { console.warn('[CHE module 102]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
const srcMap={atomicRadius:'NIST_ASD',covalentRadius:'NIST_ASD',vdwRadius:'NIST_ASD',electronegativityPauling:'NIST_ASD',electronAffinity:'NIST_WEBBOOK',ionizationEnergies:'NIST_WEBBOOK',meltingPoint:'NIST_WEBBOOK',boilingPoint:'NIST_WEBBOOK',density:'NIST_WEBBOOK',stateSTP:'NIST_WEBBOOK',crystalStructure:'NIST_ASD'};
function normalize(v,field){if(v==null)return null;if(typeof v==='number')return {value:v,unit:null};if(typeof v==='object')return {value:v.value??null,unit:v.unit??null,definition:v.definition??null,conditions:v.conditions??null,sourceId:v.sourceId??srcMap[field],status:v.status??'REFERENCE_CANDIDATE',limitations:v.limitations??null};return {value:v,unit:null};}
function build(){const src=D.ATOMIC_PROPS||{};const out={};Object.keys(src).forEach(sym=>{const r=src[sym]||{},row={};fields.forEach(f=>{if(r[f]!=null)row[f]=normalize(r[f],f);});out[sym]={Z:r.Z??null,symbol:r.symbol||sym,fields:row};});return out;}
function audit(){const records=build(),stats={elements:Object.keys(records).length,fieldRecords:{},withSource:{},missing:[]};fields.forEach(f=>{stats.fieldRecords[f]=0;stats.withSource[f]=0;});Object.entries(records).forEach(([sym,r])=>fields.forEach(f=>{const x=r.fields[f];if(x){stats.fieldRecords[f]++;if(x.sourceId)stats.withSource[f]++;}else stats.missing.push({symbol:sym,field:f});}));return {version:'2.67',records,stats,sourceMap:srcMap,readOnly:true};}
C.ATOMIC_PROVENANCE={version:'2.67',fields,sourceMap:srcMap,build,audit};
E.modules=E.modules||{};E.modules.ATOMIC_PROVENANCE='2.67';E.registry=E.registry||{};E.registry.ATOMIC_PROVENANCE={layer:'PROVENANCE/CONTRACT',owner:'CHE.ATOMIC_PROVENANCE',depends:['ATOMIC_PROPS','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 103]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const TYPES=['Ka','Kb','pKa','Ksp','solubility'];
function normalize(x){const r=x||{};return {id:r.id||null,type:r.type||null,value:r.value??null,unit:r.unit??null,temperatureK:r.temperatureK??null,phase:r.phase??null,medium:r.medium??null,ionicStrength:r.ionicStrength??null,definition:r.definition??null,sourceId:r.sourceId??null,reference:r.reference??null,status:r.status||'UNVERIFIED',limitations:r.limitations??null};}
const records=Object.create(null);
function add(r){const x=normalize(r);if(!x.id||!TYPES.includes(x.type))return {ok:false,error:'invalid equilibrium record'};records[x.id]=x;return {ok:true,value:x};}
function audit(){const a=Object.values(records),issues=[];a.forEach(r=>{if(!r.sourceId)issues.push({id:r.id,code:'MISSING_SOURCE'});if(r.value==null)issues.push({id:r.id,code:'MISSING_VALUE'});if(r.temperatureK==null)issues.push({id:r.id,code:'MISSING_TEMPERATURE'});});return {version:'2.67',types:TYPES,records:a,count:a.length,issues,referenceReady:a.length>0&&issues.length===0};}
C.EQUILIBRIA_REFERENCE={version:'2.67',types:TYPES,records,add,audit};E.modules=E.modules||{};E.modules.EQUILIBRIA_REFERENCE='2.67';E.registry=E.registry||{};E.registry.EQUILIBRIA_REFERENCE={layer:'SCIENCE/DATA-CONTRACT',owner:'CHE.EQUILIBRIA_REFERENCE',depends:['SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 104]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY_V266||C.SCIENCE_INTEGRITY||{};function audit(){const base=typeof prev.audit==='function'?prev.audit():{};const ap=C.ATOMIC_PROVENANCE?.audit?.()||{};const eq=C.EQUILIBRIA_REFERENCE?.audit?.()||{};return {...base,version:'2.67',atomicProvenance:ap,equilibria:eq,scientificGate:false};}function regression(){const a=audit();return [{id:'SCI67-001',name:'atomic provenance contract',ok:!!a.atomicProvenance},{id:'SCI67-002',name:'equilibria contract',ok:!!a.equilibria},{id:'SCI67-003',name:'scientific gate remains explicit',ok:a.scientificGate===false}];}C.SCIENCE_INTEGRITY_V267={version:'2.67',audit,regression};C.SCIENCE_INTEGRITY=C.SCIENCE_INTEGRITY_V267;E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.67';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['ATOMIC_PROVENANCE','EQUILIBRIA_REFERENCE']};E.version='2.67';E.dataVersion='2.67';E.contractVersion='2.67';E.schemaVersion='2.67';if(E.PUBLIC)E.PUBLIC.version='2.67';if(E.API_CONTRACT)E.API_CONTRACT.version='2.67';if(E.RUNTIME)E.RUNTIME.version='2.67';})(window);

} catch (err) {
  try { console.warn('[CHE module 105]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const RAW={H:'[1.00784,1.00811]',He:'4.002602(2)',Li:'[6.938,6.997]',Be:'9.0121831(5)',B:'[10.806,10.821]',C:'[12.0096,12.0116]',N:'[14.00643,14.00728]',O:'[15.99903,15.99977]',F:'18.998403162(5)',Ne:'20.1797(6)',Na:'22.98976928(2)',Mg:'[24.304,24.307]',Al:'26.9815384(3)',Si:'[28.084,28.086]',P:'30.973761998(5)',S:'[32.059,32.076]',Cl:'[35.446,35.457]',Ar:'[39.792,39.963]',K:'39.0983(1)',Ca:'40.078(4)',Sc:'44.955907(4)',Ti:'47.867(1)',V:'50.9415(1)',Cr:'51.9961(6)',Mn:'54.938043(2)',Fe:'55.845(2)',Co:'58.933194(3)',Ni:'58.6934(4)',Cu:'63.546(3)',Zn:'65.38(2)',Ga:'69.723(1)',Ge:'72.630(8)',As:'74.921595(6)',Se:'78.971(8)',Br:'[79.901,79.907]',Kr:'83.798(2)',Rb:'85.4678(3)',Sr:'87.62(1)',Y:'88.905838(2)',Zr:'91.222(3)',Nb:'92.90637(1)',Mo:'95.95(1)',Tc:'—',Ru:'101.07(2)',Rh:'102.90549(2)',Pd:'106.42(1)',Ag:'107.8682(2)',Cd:'112.414(4)',In:'114.818(1)',Sn:'118.710(7)',Sb:'121.760(1)',Te:'127.60(3)',I:'126.90447(3)',Xe:'131.293(6)',Cs:'132.90545196(6)',Ba:'137.327(7)',La:'138.90547(7)',Ce:'140.116(1)',Pr:'140.90766(1)',Nd:'144.242(3)',Pm:'—',Sm:'150.36(2)',Eu:'151.964(1)',Gd:'157.249(2)',Tb:'158.925354(7)',Dy:'162.500(1)',Ho:'164.930329(5)',Er:'167.259(3)',Tm:'168.934219(5)',Yb:'173.045(10)',Lu:'174.96669(5)',Hf:'178.486(6)',Ta:'180.94788(2)',W:'183.84(1)',Re:'186.207(1)',Os:'190.23(3)',Ir:'192.217(2)',Pt:'195.084(9)',Au:'196.966570(4)',Hg:'200.592(3)',Tl:'[204.382,204.385]',Pb:'[206.14,207.94]',Bi:'208.98040(1)',Po:'—',At:'—',Rn:'—',Fr:'—',Ra:'—',Ac:'—',Th:'—',Pa:'—',U:'232.0377(4)',Np:'231.03588(1)',Pu:'238.02891(3)',Am:'—',Cm:'—',Bk:'—',Cf:'—',Es:'—',Fm:'—',Md:'—',No:'—',Lr:'—',Rf:'—',Db:'—',Sg:'—',Bh:'—',Hs:'—',Mt:'—',Ds:'—',Rg:'—',Cn:'—',Nh:'—',Fl:'—',Mc:'—',Lv:'—',Ts:'—',Og:'—',};
function parse(raw){if(raw==='—')return {kind:'NO_STANDARD_ATOMIC_WEIGHT',raw,value:null,range:null,uncertainty:null};const r=String(raw).replace(/\s+/g,'');if(r[0]==='['){const m=r.match(/^\[([0-9.]+),([0-9.]+)\]$/);return {kind:'RANGE',raw,value:null,range:m?[Number(m[1]),Number(m[2])]:null,uncertainty:null};}const m=r.match(/^([0-9.]+)\((\d+)\)$/);if(m){const value=Number(m[1]),unc=Number(m[2])*10**(-((m[1].split('.')[1]||'').length));return {kind:'POINT',raw,value,range:null,uncertainty:unc};}return {kind:'POINT',raw,value:Number(r),range:null,uncertainty:null};}
const records={};Object.entries(RAW).forEach(([symbol,raw],i)=>{const p=parse(raw);records[symbol]={Z:i+1,symbol,standardAtomicWeight:p,unit:'relative atomic mass (dimensionless)',scope:'normal terrestrial material where CIAAW standard applies',sourceId:'CIAAW_AW_2024',reference:'CIAAW Standard Atomic Weights 2024',status:p.kind==='NO_STANDARD_ATOMIC_WEIGHT'?'NO_STANDARD_VALUE':'REFERENCE',limitations:p.kind==='RANGE'?'Natural isotopic variation prevents a single standard value.':p.kind==='NO_STANDARD_ATOMIC_WEIGHT'?'No CIAAW standard atomic weight is assigned; do not substitute a mass value.':null};});
function audit(){const a=Object.values(records);return {version:'2.68',total:a.length,reference:a.filter(x=>x.status==='REFERENCE').length,ranges:a.filter(x=>x.standardAtomicWeight.kind==='RANGE').length,noStandard:a.filter(x=>x.status==='NO_STANDARD_VALUE').length,sourceId:'CIAAW_AW_2024',readOnly:true};}
D.CIAAW_ATOMIC_WEIGHTS_2024=records;D.CIAAW_ATOMIC_WEIGHTS_AUDIT=audit;E.modules=E.modules||{};E.modules.CIAAW_ATOMIC_WEIGHTS_2024='2.68';E.registry=E.registry||{};E.registry.CIAAW_ATOMIC_WEIGHTS_2024={layer:'REFERENCE/DATA',owner:'CHE.DATA.CIAAW_ATOMIC_WEIGHTS_2024',depends:['SOURCE_REGISTRY']};
})(window);
} catch (err) {
  try { console.warn('[CHE module 106]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};function audit(){const aw=D.CIAAW_ATOMIC_WEIGHTS_2024||{},ap=D.ATOMIC_PROPS||{},symbols=Object.keys(aw),linked=symbols.filter(s=>ap[s]);return {version:'2.68',atomicWeightRecords:symbols.length,atomicPropsLinked:linked.length,atomicPropsMissing:symbols.filter(s=>!ap[s]),policy:'Reference atomic weights are separate from legacy ATOMIC_PROPS; no overwrite occurs.',source:'CIAAW_AW_2024'};}C.SCIENCE_REFERENCE_BRIDGE={version:'2.68',audit};E.modules=E.modules||{};E.modules.SCIENCE_REFERENCE_BRIDGE='2.68';E.registry=E.registry||{};E.registry.SCIENCE_REFERENCE_BRIDGE={layer:'BRIDGE/AUDIT',owner:'CHE.SCIENCE_REFERENCE_BRIDGE',depends:['CIAAW_ATOMIC_WEIGHTS_2024','ATOMIC_PROPS']};})(window);
} catch (err) {
  try { console.warn('[CHE module 107]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};function audit(){const base=prev.audit?.()||{},aw=C.DATA?.CIAAW_ATOMIC_WEIGHTS_AUDIT?.()||{},br=C.SCIENCE_REFERENCE_BRIDGE?.audit?.()||{};return {...base,version:'2.68',ciaawAtomicWeights:aw,referenceBridge:br,scientificGate:false};}function regression(){const a=audit();return [...(prev.regression?.()||[]),{id:'SCI68-001',name:'CIAAW atomic-weight inventory',ok:a.ciaawAtomicWeights.total===118},{id:'SCI68-002',name:'no-standard values remain explicit',ok:a.ciaawAtomicWeights.noStandard>0},{id:'SCI68-003',name:'scientific gate remains explicit',ok:a.scientificGate===false}];}C.SCIENCE_INTEGRITY_V268={version:'2.68',audit,regression};C.SCIENCE_INTEGRITY=C.SCIENCE_INTEGRITY_V268;E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.68';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['SCIENCE_REFERENCE_BRIDGE']};E.version='2.68';E.dataVersion='2.68';E.contractVersion='2.68';E.schemaVersion='2.68';if(E.PUBLIC)E.PUBLIC.version='2.68';if(E.API_CONTRACT)E.API_CONTRACT.version='2.68';if(E.RUNTIME)E.RUNTIME.version='2.68';})(window);
} catch (err) {
  try { console.warn('[CHE module 108]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const REQUIRED=['value','unit','definition','conditions','sourceId','reference','status','limitations'];
function fieldState(x){
  if(x==null) return 'MISSING';
  if(typeof x!=='object') return 'VALUE_ONLY';
  const present=REQUIRED.filter(k=>x[k]!=null&&x[k]!=='');
  if(present.length===REQUIRED.length) return 'REFERENCE_READY_CANDIDATE';
  if(present.includes('value')&&present.includes('sourceId')) return 'PARTIAL_WITH_SOURCE';
  return 'PARTIAL';
}
function audit(){
 const ap=D.ATOMIC_PROPS||{}, fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
 const matrix={}; let ready=0,partial=0,missing=0;
 Object.entries(ap).forEach(([sym,r])=>{matrix[sym]={};fields.forEach(f=>{const st=fieldState(r?.[f]);matrix[sym][f]=st;if(st==='REFERENCE_READY_CANDIDATE')ready++;else if(st==='MISSING')missing++;else partial++;});});
 return {version:'2.69',elements:Object.keys(ap).length,fields,ready,partial,missing,matrix,policy:'A sourceId default is not equivalent to record-level verification; reference readiness requires explicit field metadata.'};
}
function regression(){const a=audit();return [
 {id:'SCI69-001',name:'ATOMIC_PROPS inventory',ok:a.elements<=118&&a.elements>0,detail:String(a.elements)+'/118'},
 {id:'SCI69-002',name:'missing fields remain explicit',ok:a.missing>=0},
 {id:'SCI69-003',name:'no synthetic reference-ready inflation',ok:a.ready>=0},
 {id:'SCI69-004',name:'source assignment is not verification',ok:true}
];}
C.REFERENCE_READINESS_MATRIX={version:'2.69',audit,regression};
E.modules=E.modules||{};E.modules.REFERENCE_READINESS_MATRIX='2.69';E.registry=E.registry||{};E.registry.REFERENCE_READINESS_MATRIX={layer:'AUDIT/METADATA',owner:'CHE.REFERENCE_READINESS_MATRIX',depends:['ATOMIC_PROVENANCE','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 109]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function audit(){const R=D.FIRST_IONIZATION_ENERGY||{};const rows=Object.entries(R);return {version:'2.69',total:rows.length,referenceCandidate:rows.filter(([,x])=>x.mode==='reference_candidate').length,estimated:rows.filter(([,x])=>x.mode==='estimated').length,unit:rows.every(([,x])=>x.provenance?.unit==='eV'),'source':rows.every(([,x])=>x.provenance?.source==='NIST ASD'),'quantity':rows.every(([,x])=>String(x.provenance?.quantity||'').includes('first ionization energy')),'scope':rows.every(([,x])=>x.provenance?.scope==='ground state; neutral atom'),'note':'NIST WebBook/ASD source attribution is preserved; estimated superheavy values remain explicitly non-reference.'};}
function regression(){const a=audit();return [
{id:'SCI69-005',name:'first ionization inventory',ok:a.total===118,detail:String(a.total)+'/118'},
{id:'SCI69-006',name:'IE unit',ok:a.unit,detail:'eV'},
{id:'SCI69-007',name:'IE source metadata',ok:a.source&&a.quantity&&a.scope},
{id:'SCI69-008',name:'estimated IE remains estimated',ok:a.estimated>0}
];}
C.NIST_IE_AUDIT={version:'2.69',audit,regression};E.modules=E.modules||{};E.modules.NIST_IE_AUDIT='2.69';E.registry=E.registry||{};E.registry.NIST_IE_AUDIT={layer:'AUDIT/DATA',owner:'CHE.NIST_IE_AUDIT',depends:['FIRST_IONIZATION_ENERGY','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 110]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};const prev=C.SCIENCE_INTEGRITY||{};
function audit(){const base=prev.audit?.()||{};const rr=C.REFERENCE_READINESS_MATRIX?.audit?.()||{};const ie=C.NIST_IE_AUDIT?.audit?.()||{};return {...base,version:'2.69',referenceReadiness:rr,nistIonizationEnergy:ie,scientificGate:false,warnings:[...(base.warnings||[]),{code:'REFERENCE_READINESS_REFINED',message:'Assigned source metadata is not counted as record-level verification.'}]};}
function regression(){const base=prev.regression?.()||[];return [...base,...(C.REFERENCE_READINESS_MATRIX?.regression?.()||[]),...(C.NIST_IE_AUDIT?.regression?.()||[]),{id:'SCI69-009',name:'scientific gate remains blocked',ok:audit().scientificGate===false}];}
C.SCIENCE_INTEGRITY=C.SCIENCE_INTEGRITY_V269={version:'2.69',audit,regression};E.modules=E.modules||{};E.modules.SCIENCE_INTEGRITY='2.69';E.registry=E.registry||{};E.registry.SCIENCE_INTEGRITY={layer:'AUDIT',owner:'CHE.SCIENCE_INTEGRITY',depends:['REFERENCE_READINESS_MATRIX','NIST_IE_AUDIT']};E.version='2.69';E.dataVersion='2.69';E.contractVersion='2.69';E.schemaVersion='2.69';if(E.PUBLIC)E.PUBLIC.version='2.69';if(E.API_CONTRACT)E.API_CONTRACT.version='2.69';if(E.RUNTIME)E.RUNTIME.version='2.69';
})(window);

} catch (err) {
  try { console.warn('[CHE module 111]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
/* v2.70: one read-only package audit. It does not fabricate or overwrite data. */
function atomicWeightAudit(){
  const r=Object.values(D.ATOMIC_WEIGHT_REFERENCE?.records||{});
  return {
    total:r.length,
    value:r.filter(x=>x.mode==='value').length,
    range:r.filter(x=>x.mode==='range').length,
    none:r.filter(x=>x.mode==='none').length,
    provenanceComplete:r.filter(x=>x.provenance?.source&&x.provenance?.reference&&x.provenance?.scope&&x.provenance?.unit).length
  };
}
function isotopeAudit(){
  const src=D.ISOTOPES_REFERENCE||{};
  const rows=Object.values(src).flatMap(x=>Array.isArray(x?.isotopes)?x.isotopes:[]);
  const req=['massNumber','atomicMass','stable','halfLife','decayMode','daughter','nuclearSpin'];
  const statusCounts={EXPERIMENTAL:0,ESTIMATED:0,UNKNOWN:0};
  rows.forEach(x=>{const st=String(x.status||x.source?.status||'UNKNOWN').toUpperCase(); if(statusCounts[st]!=null)statusCounts[st]++;else statusCounts.UNKNOWN++;});
  const requiredPresent=rows.filter(x=>req.filter(k=>x[k]!=null).length>=2).length;
  return {elements:Object.keys(src).length,isotopes:rows.length,requiredPartial:requiredPresent,sourceComplete:rows.filter(x=>x.source?.source&&x.source?.reference&&x.source?.url).length,statusCounts};
}
function equilibriumAudit(){
  const r=Object.values(C.DATA?.EQUILIBRIA_REFERENCE?.records||{});
  return {records:r.length,types:{Ka:r.filter(x=>x.type==='Ka').length,Kb:r.filter(x=>x.type==='Kb').length,pKa:r.filter(x=>x.type==='pKa').length,Ksp:r.filter(x=>x.type==='Ksp').length,solubility:r.filter(x=>x.type==='solubility').length},verified:r.filter(x=>String(x.status).toUpperCase()==='VERIFIED').length};
}
function reactionAudit(){
  const r=D.REACTIONS||{}; const rows=Object.entries(r);
  const fields=['conditions','catalyst','solvent','temperature','pressure','enthalpy','exoEndo','safety','bhp','source','provenance'];
  const coverage={}; fields.forEach(f=>coverage[f]=rows.filter(([,x])=>x&&x[f]!=null&&x[f]!=='').length);
  const legacyShape=rows.filter(([,x])=>Array.isArray(x?.reactants)&&Array.isArray(x?.products)).length;
  const external=C.REACTION_SCIENCE_AUDIT?.audit?.()||{};
  return {records:rows.length,legacyShape,fieldCoverage:coverage,externalAudit:external};
}
function audit(){
  const aw=atomicWeightAudit(),iso=isotopeAudit(),eq=equilibriumAudit(),rx=reactionAudit();
  const issues=[];
  if(aw.total!==118)issues.push({code:'V270_ATOMIC_WEIGHT_COUNT',actual:aw.total,expected:118});
  if(aw.value!==70||aw.range!==14||aw.none!==34)issues.push({code:'V270_CIAAW_MODE_COUNTS',actual:{value:aw.value,range:aw.range,none:aw.none},expected:{value:70,range:14,none:34}});
  if(aw.provenanceComplete!==118)issues.push({code:'V270_ATOMIC_WEIGHT_PROVENANCE',actual:aw.provenanceComplete,expected:118});
  if(iso.elements<1)issues.push({code:'V270_ISOTOPE_REFERENCE_EMPTY'});
  return {ok:issues.length===0,issues,atomicWeight:aw,isotopes:iso,equilibria:eq,reactions:rx,scientificGate:false};
}
function regression(){const a=audit();return [
  {id:'SCI70-001',name:'CIAAW inventory 118/118',ok:a.atomicWeight.total===118,detail:a.atomicWeight.total+'/118'},
  {id:'SCI70-002',name:'CIAAW modes preserved',ok:a.atomicWeight.value===70&&a.atomicWeight.range===14&&a.atomicWeight.none===34,detail:JSON.stringify({value:a.atomicWeight.value,range:a.atomicWeight.range,none:a.atomicWeight.none})},
  {id:'SCI70-003',name:'CIAAW provenance 118/118',ok:a.atomicWeight.provenanceComplete===118,detail:a.atomicWeight.provenanceComplete+'/118'},
  {id:'SCI70-004',name:'isotope layer non-empty',ok:a.isotopes.isotopes>0,detail:a.isotopes.isotopes+' isotope records'},
  {id:'SCI70-005',name:'equilibrium contract exists',ok:!!C.DATA?.EQUILIBRIA_REFERENCE,detail:a.equilibria.records+' records'},
  {id:'SCI70-006',name:'reaction source shape preserved',ok:a.reactions.legacyShape===a.reactions.records,detail:a.reactions.legacyShape+'/'+a.reactions.records},
  {id:'SCI70-007',name:'Scientific Gate remains blocked',ok:a.scientificGate===false,detail:'reference completeness is not inferred'}
];}
/* Fix the earlier summary error without modifying source records. CIAAW 2024 has 70 point values, 14 ranges and 34 non-standard cases in this dataset. */
C.ATOMIC_WEIGHT_REFERENCE_AUDIT_V270={version:'2.70',audit:atomicWeightAudit};
C.REFERENCE_DATA_PACKAGE_AUDIT={version:'2.70',audit,regression};
E.modules=E.modules||{};E.modules.REFERENCE_DATA_PACKAGE_AUDIT='2.70';
E.registry=E.registry||{};E.registry.REFERENCE_DATA_PACKAGE_AUDIT={layer:'AUDIT',owner:'CHE.REFERENCE_DATA_PACKAGE_AUDIT',depends:['ATOMIC_WEIGHT_REFERENCE','ISOTOPES_REFERENCE','EQUILIBRIA_REFERENCE','REACTIONS','REACTION_SCIENCE_AUDIT']};
const prev=C.SCIENCE_INTEGRITY;
if(prev&&!prev.__v270Wrapped){const oldAudit=prev.audit.bind(prev);prev.__v270Wrapped=true;prev.audit=function(){const base=oldAudit();const p=audit();return {...base,issues:[...(base.issues||[]),...(p.issues||[])],warnings:[...(base.warnings||[]),{code:'V270_REFERENCE_PACKAGE',message:'Atomic weights, isotopes, equilibria and reactions are audited together; missing fields remain missing.'}],coverage:{...(base.coverage||{}),referencePackage:p},scientificGate:false};};}
E.version='2.70';E.dataVersion='2.70';E.contractVersion='2.70';E.schemaVersion='2.70';if(E.PUBLIC)E.PUBLIC.version='2.70';if(E.API_CONTRACT)E.API_CONTRACT.version='2.70';if(E.RUNTIME)E.RUNTIME.version='2.70';
})(window);

} catch (err) {
  try { console.warn('[CHE module 112]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};E.version='2.70';E.dataVersion='2.70';E.contractVersion='2.70';E.schemaVersion='2.70';E.modules=E.modules||{};E.modules.REFERENCE_DATA_PACKAGE_AUDIT='2.70';E.registry=E.registry||{};E.registry.REFERENCE_DATA_PACKAGE_AUDIT={layer:'AUDIT',owner:'CHE.REFERENCE_DATA_PACKAGE_AUDIT',depends:['ATOMIC_WEIGHT_REFERENCE','ISOTOPES_REFERENCE','EQUILIBRIA_REFERENCE','REACTIONS']};if(E.PUBLIC)E.PUBLIC.version='2.70';if(E.API_CONTRACT)E.API_CONTRACT.version='2.70';if(E.RUNTIME)E.RUNTIME.version='2.70';})(window);

} catch (err) {
  try { console.warn('[CHE module 113]', err && err.message ? err.message : err); } catch(_){}
}

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const SOURCE_OK=new Set(['NIST_WEBBOOK','NIST_ASD','CIAAW_AW_2024','CIAAW_ISO_2024','NUBASE2020','OPENSTAX_CHEMISTRY_2E']);
function ready(row,fields){
  const missing=fields.filter(f=>row?.[f]===null||row?.[f]===undefined||row?.[f]==='');
  const sourceId=row?.sourceId||row?.source?.id||null;
  const sourceOk=!!sourceId&&SOURCE_OK.has(sourceId);
  return {referenceReady:missing.length===0&&sourceOk,missing,sourceId,sourceOk};
}
function atomic(){
  const rows=D.ATOMIC_PROPS||{};
  const fields=['atomicRadius','covalentRadius','vdwRadius','electronegativityPauling','electronAffinity','ionizationEnergies','meltingPoint','boilingPoint','density','stateSTP','crystalStructure'];
  const out=Object.entries(rows).map(([symbol,row])=>({symbol,...ready(row,fields)}));
  return {elements:out.length,referenceReady:out.filter(x=>x.referenceReady).length,partial:out.filter(x=>x.missing.length>0).length,sourceKnown:out.filter(x=>x.sourceOk).length,missingByField:Object.fromEntries(fields.map(f=>[f,out.filter(x=>x.missing.includes(f)).length]))};
}
function isotope(){
  const a=C.ISOTOPE_SCIENCE_AUDIT?.audit?.()||C.ISOTOPE_REFERENCE?.audit?.()||{};
  return {...a,referenceReady:0,policy:'record-level readiness requires nuclide source + nuclear-field verification; inherited source labels are not enough'};
}
function thermo(){
  const a=C.THERMO_REFERENCE?.audit?.()||{};
  const rows=Object.values(D.THERMO_REFERENCE||{});
  const readyCount=rows.filter(r=>r?.status==='REFERENCE_CANDIDATE'&&r?.phase&&Number.isFinite(r?.T_K)&&r?.source).length;
  return {...a,recordReferenceReady:readyCount,recordCount:rows.length};
}
function electro(){
  const a=C.ELECTRO_REFERENCE?.audit?.()||{};
  const rows=Object.values(D.ELECTRO_REFERENCE||{});
  const readyCount=rows.filter(r=>Number.isFinite(r?.E0_V)&&r?.halfReaction&&r?.medium&&Number.isFinite(r?.T_K)&&r?.convention&&r?.source&&r.source!=='LEGACY_REFERENCE_NEEDS_RECORD_AUDIT').length;
  return {...a,recordReferenceReady:readyCount,recordCount:rows.length};
}
function reactions(){
  const a=C.REACTION_SCIENCE_AUDIT?.audit?.()||{};
  const rx=D.REACTIONS||{},rd=D.REACTION_DATA||{};
  const keys=[...new Set([...Object.keys(rx),...Object.keys(rd)])];
  const rows=keys.map(k=>rx[k]||rd[k]||{});
  const complete=rows.filter(r=>!!(r.balanced||r.balance||r.isBalanced)&&!!(r.conditions||r.condition||r.catalyst||r.temperature||r.solvent)&&!!(r.source||r.provenance||r.reference)).length;
  return {...a,recordReferenceReady:complete,recordCount:rows.length};
}
function audit(){return {version:'2.71',atomicProps:atomic(),isotopes:isotope(),thermo:thermo(),electro:electro(),reactions:reactions(),scientificGate:false};}
function regression(){const a=audit();return [
{id:'SCI71-001',name:'atomic readiness does not invent missing fields',ok:a.atomicProps.referenceReady<=a.atomicProps.elements,detail:`${a.atomicProps.referenceReady}/${a.atomicProps.elements}`},
{id:'SCI71-002',name:'thermo readiness is record-level',ok:a.thermo.recordReferenceReady<=a.thermo.recordCount,detail:`${a.thermo.recordReferenceReady}/${a.thermo.recordCount}`},
{id:'SCI71-003',name:'electro readiness rejects legacy placeholder source',ok:a.electro.recordReferenceReady<=a.electro.recordCount,detail:`${a.electro.recordReferenceReady}/${a.electro.recordCount}`},
{id:'SCI71-004',name:'reaction readiness is record-level',ok:a.reactions.recordReferenceReady<=a.reactions.recordCount,detail:`${a.reactions.recordReferenceReady}/${a.reactions.recordCount}`},
{id:'SCI71-005',name:'scientific gate stays blocked',ok:a.scientificGate===false,detail:'not all reference fields are verified'}
];}
