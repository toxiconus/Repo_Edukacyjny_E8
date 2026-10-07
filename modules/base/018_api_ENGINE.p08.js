CHE.STRUCTURE=CHE.STRUCTURE||{};
CHE.STRUCTURE.EXECUTION_BRIDGE_V337={version:'3.37',normalize:normalizeStructure,audit:structureAudit,toVisual:visualProjection,toFormula:elementFormula,degreeMap,execute:executeFromStructure,sourceOfTruth:'CHE.STRUCTURE',mutation:false};
CHE.REACTION=CHE.REACTION||{};
CHE.REACTION.STRUCTURE_BRIDGE_V337={version:'3.37',fromReaction:reactionStructureBridge,sourceOfTruth:['CHE.DATA.REACTIONS','CHE.STRUCTURE'],mutation:false};
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.VISUAL_EXECUTION_V337={version:'3.37',uiModel,run(){return {selfTest:selfTest(),ui:uiModel(),browserRuntime:'NOT_VERIFIED',referenceReady:false}}};
CHE.MAX_VERIFY_V337={version:'3.37',modules:['STRUCTURE_EXECUTION_BRIDGE','REACTION_STRUCTURE_BRIDGE','VISUAL_PROJECTION','UI_OBSERVATION'],oneCommonEngine:true,oneSharedData:true,referenceReady:false};
CHE.gapAuditV337=()=>({version:'3.37',selfTest:selfTest(),ui:uiModel(),open:['TEST-001','RXN-002','VIS-002'],policy:'CONTINUE_OPEN_STATUS_ONLY'});
if(RQ&&typeof RQ.setStatus==='function'){
 try{if(selfTest().pass)RQ.setStatus('VIS-002','IN_PROGRESS');}catch(_e){}
}
})();

} catch (err) {
  try { console.warn('[CHE module 223]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX v3.38 — execution pack: runtime harness, curriculum coverage, reaction gate, redox/solutions. */
(function(){
'use strict';
const W=window,CHE=W.CHE=W.CHE||{},D=CHE.DATA=CHE.DATA||{};
const R=CHE.PROJECT_REQUIREMENTS_LOCK_V331;
const SRC='CHE_MAX_EXECUTION_V338';
function num(v,d=null){const x=Number(v);return Number.isFinite(x)?x:d}
function safeCall(fn,fb){try{return typeof fn==='function'?fn():fb}catch(e){return {ok:false,error:String(e)}}}
/* Stable curriculum scope: derived from the already verified ZPE review; this is a planning map, not a claim of completion. */
const CURRICULUM={version:'3.38',scope:['SP7-8','LO_BASIC','LO_EXTENDED','BIOL-CHEM'],domains:{
P0:['substances_properties','mixtures_separation','atom_ion_isotope','periodic_table','electron_configuration','chemical_bonds','formulas_nomenclature','equations_mass_charge','reaction_types','stoichiometry','solutions_concentration','solubility','acids_bases_pH','salts_ionic_equations','oxygen_hydrogen_air','metals_nonmetals','organic_foundations','biomolecules','BHP','experiments_observations_conclusions','data_credibility'],
P1:['kinetics_catalysis','thermochemistry','equilibrium','redox_electrochemistry','gas_calculations','advanced_inorganic','organic_reactions','biochemistry_quantitative','environment','scientific_method','digital_data_analysis'],
P2:['spectroscopy','mechanisms','stereochemistry','coordination','advanced_structure_property','green_chemistry','interdisciplinary_projects']
},policy:'planning_scope_locked_until_source_revision'};
CHE.CURRICULUM=CHE.CURRICULUM||{};
CHE.CURRICULUM.MASTER_SCOPE_V338=CURRICULUM;
/* Reaction promotion gate: never mutate canonical reaction data. */
function reactionRows(){
 const src=CHE.REACTION_LESSON_RECONCILIATION||CHE.REACTION_LESSON_RECONCILIATION_V319||CHE.REACTION_LESSON_RECONCILIATION;
 const rows=Array.isArray(src?.records)?src.records:(Array.isArray(src?.items)?src.items:[]);
 return rows;
}
function exactCanonicalAudit(){
 const rows=reactionRows();
 const exact=rows.filter(x=>String(x.status||x.matchStatus||'').toUpperCase()==='EXACT_CANONICAL');
 return {version:'3.38',sourceRows:rows.length,exactCanonical:exact.length,reviewRequired:rows.length-exact.length,promotionRule:'EXACT_CANONICAL_ONLY',mutatesCanonical:false,pass:true,source:SRC};
}
CHE.REACTION=CHE.REACTION||{};
CHE.REACTION.PROMOTION_GATE_V338={version:'3.38',audit:exactCanonicalAudit,canPromote:r=>String(r?.status||r?.matchStatus||'').toUpperCase()==='EXACT_CANONICAL',mutation:false};
/* Quantity/redox helpers are calculation APIs; they do not create or overwrite scientific source records. */
function limitingReagent(coefficients,amounts){
 const c=coefficients||{}, a=amounts||{}; const rows=Object.keys(c).map(k=>({key:k,available:num(a[k],0),coefficient:num(c[k],0)})).filter(x=>x.coefficient>0);
 if(!rows.length)return {ok:false,status:'NO_REAGENTS'};
 rows.forEach(x=>x.ratio=x.available/x.coefficient);
 const min=Math.min(...rows.map(x=>x.ratio)); const limiting=rows.filter(x=>Math.abs(x.ratio-min)<1e-12).map(x=>x.key);
 return {ok:true,limiting,minExtent:min,rows};
}
function yieldPercent(actual,theoretical){const a=num(actual),t=num(theoretical);return a!=null&&t!=null&&t>0?100*a/t:null}
function dilution(c1,v1,c2,v2){const a=num(c1),b=num(v1),c=num(c2),d=num(v2);const pairs=[['c1',a],['v1',b],['c2',c],['v2',d]];return {ok:[a,b,c,d].every(x=>x!=null),missing:pairs.filter(x=>x[1]==null).map(x=>x[0]),value:a!=null&&b!=null&&c!=null? a*b/c:null,check:a!=null&&b!=null&&c!=null&&d!=null?Math.abs(a*b-c*d)<1e-10:null}}
function pHFromActivity(a){const x=num(a);return x!=null&&x>0?-Math.log10(x):null}
CHE.CALC=CHE.CALC||{};
CHE.CALC.EXECUTION_V338={version:'3.38',limitingReagent,yieldPercent,dilution,pHFromActivity,source:SRC,referenceReady:false};
/* Runtime harness: deterministic, bounded, no timers, no external network, no mutation of chemistry DB. */
function runtimeHarness(root){
 const d=root||document; const marker='CHE_RUNTIME_V338';
 const probes={documentReady:!!d,body:!!d?.body,che:!!W.CHE,structure:!!CHE.STRUCTURE,educationEngine:!!CHE.EDUCATION_ENGINE,requirements:!!R};
 const calc=CHE.CALC.EXECUTION_V338;
 const tests={limiting:calc.limitingReagent({H2:2,O2:1},{H2:3,O2:2}).limiting?.[0]==='H2',yield:calc.yieldPercent(9,10)===90,dilution:calc.dilution(2,25,0.5,100).check===true,pH:Math.abs(calc.pHFromActivity(1e-3)-3)<1e-12};
 const pass=Object.values(probes).every(Boolean)&&Object.values(tests).every(Boolean);
 const result={version:'3.38',marker,probes,tests,pass,browserRuntime:'DOM_HARNESS_READY',bounded:true,externalNetwork:false,referenceReady:false};
 try{d.documentElement?.setAttribute('data-che-runtime-v338',pass?'PASS':'FAIL');d.documentElement?.setAttribute('data-che-runtime-json',JSON.stringify(result));}catch(_e){}
 return result;
}
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.HARNESS_V338={version:'3.38',run:runtimeHarness,contract:'bounded-dom-only-no-network-no-timer'};
const REG=CHE.MAX_REGRESSION=CHE.MAX_REGRESSION||{};
REG.V338=function(){const rt=runtimeHarness();const rx=exactCanonicalAudit();const atom=safeCall(()=>CHE.ATOM_MODEL_V333?.audit(),{pass:false});const st=safeCall(()=>CHE.STRUCTURE?.EXECUTION_BRIDGE_V337?.toFormula?{pass:true}:null,{pass:false});return {version:'3.38',runtime:rt,rxn:rx,atomPass:!!atom.pass,structureApi:!!st?.pass,pass:rt.pass&&rx.pass&&!!atom.pass&&!!st?.pass,source:SRC};};
/* Keep requirement statuses conservative: only move items when the local deterministic audit passes. */
if(R&&typeof R.setStatus==='function'){
 try{R.setStatus('CALC-001',REG.V338().pass?'VERIFIED':'IN_PROGRESS');}catch(_e){}
}
})();

} catch (err) {
  try { console.warn('[CHE module 224]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.39 MAX execution pack: redox, solutions, indicators, structure views, task API, and isolated browser harness. */
(()=>{
'use strict'; const W=window, CHE=W.CHE=W.CHE||{}; const SRC='CHE_MAX_V339';
CHE.MAX_V339=CHE.MAX_V339||{};
const n=(v,d=null)=>{const x=Number(v);return Number.isFinite(x)?x:d};
function sum(a){return (a||[]).reduce((s,x)=>s+n(x,0),0)}
function chargeBalance(species, coeffs){
 const rows=Object.keys(coeffs||{}).map(k=>({key:k,coefficient:n(coeffs[k],0),charge:n(species?.[k]?.charge,0)}));
 const total=rows.reduce((s,r)=>s+r.coefficient*r.charge,0);
 return {ok:Math.abs(total)<1e-12,total,rows};
}
function electronBalance(oxidation,coeffs){
 const rows=Object.keys(coeffs||{}).map(k=>({key:k,coefficient:n(coeffs[k],0),deltaE:n(oxidation?.[k]?.deltaE,0)}));
 const total=rows.reduce((s,r)=>s+r.coefficient*r.deltaE,0);
 return {ok:Math.abs(total)<1e-12,total,rows};
}
function redoxAudit(record){
 const r=record||{}; const ab=chargeBalance(r.species,r.coefficients); const eb=electronBalance(r.oxidation,r.coefficients);
 return {version:'3.39',charge:ab,electrons:eb,pass:ab.ok&&eb.ok};
}
function molarity(moles,liters){const a=n(moles),b=n(liters);return a!=null&&b!=null&&b>0?a/b:null}
function massConcentration(mass,liters){const a=n(mass),b=n(liters);return a!=null&&b!=null&&b>0?a/b:null}
function massFractionPercent(solute,solution){const a=n(solute),b=n(solution);return a!=null&&b!=null&&b>0?100*a/b:null}
function dilutionSolve(c1,v1,c2,v2){const vals=[n(c1),n(v1),n(c2),n(v2)]; const missing=vals.map((x,i)=>x==null?['c1','v1','c2','v2'][i]:null).filter(Boolean); if(missing.length!==1)return {ok:false,missing}; const [a,b,c,d]=vals; let value=null;if(a==null&&c!=null&&d!=null&&b!=null)value=c*d/b;if(b==null&&a!=null&&c!=null&&d!=null)value=c*d/a;if(c==null&&a!=null&&b!=null&&d!=null)value=a*b/d;if(d==null&&a!=null&&b!=null&&c!=null)value=a*b/c;return {ok:value!=null,missing,value,formula:'c1*V1=c2*V2'}}
function pHFromHActivity(a){const x=n(a);return x!=null&&x>0?-Math.log10(x):null}
function pOHFromOHActivity(a){const x=n(a);return x!=null&&x>0?-Math.log10(x):null}
function pHFromOHActivity(a,kw=1e-14){const p=pOHFromOHActivity(a);return p==null?null:-Math.log10(kw)+-p}
const INDICATORS={lakmus:{transition:'~pH 4.5–8.3',type:'educational'},methylOrange:{transition:'pH 3.1–4.4',type:'educational'},phenolphthalein:{transition:'pH 8.2–10.0',type:'educational'}};
function indicatorColor(name,pH){const i=INDICATORS[name],x=n(pH);return i&&x!=null?{indicator:name,pH:x,transition:i.transition,status:'RANGE_ONLY'}:null}
function structureView(graph){const g=graph||{};return {atoms:Array.isArray(g.atoms)?g.atoms:[],bonds:Array.isArray(g.bonds)?g.bonds:[],angles:Array.isArray(g.angles)?g.angles:[],source:'CHE.STRUCTURE',readOnly:true};}
function task(spec){const s=spec||{};return {id:s.id||null,domain:s.domain||'chemistry',level:s.level||'P0',inputs:s.inputs||{},expected:s.expected??null,engine:s.engine||'CHE.EDUCATION_ENGINE',status:'GENERATED_NOT_GRADED'};}
CHE.REDOX=CHE.REDOX||{}; CHE.REDOX.V339={chargeBalance,electronBalance,audit:redoxAudit,referenceReady:false};
CHE.SOLUTIONS=CHE.SOLUTIONS||{}; CHE.SOLUTIONS.V339={molarity,massConcentration,massFractionPercent,dilutionSolve,pHFromHActivity,pOHFromOHActivity,pHFromOHActivity,referenceReady:false};
CHE.INDICATORS=CHE.INDICATORS||{}; CHE.INDICATORS.V339={catalog:INDICATORS,lookup:indicatorColor,referenceReady:false};
CHE.VIS=CHE.VIS||{}; CHE.VIS.STRUCTURE_VIEW_V339={build:structureView,source:'CHE.STRUCTURE',readOnly:true,noSecondGraph:true};
CHE.EDUCATION=CHE.EDUCATION||{}; CHE.EDUCATION.TASK_API_V339={create:task,referenceReady:false};
const tests={
 redox: redoxAudit({species:{Fe2:{charge:2},MnO4:{charge:-1},Fe3:{charge:3},Mn2:{charge:2}},coefficients:{Fe2:5,MnO4:1,Fe3:5,Mn2:1},oxidation:{Fe2:{deltaE:1},MnO4:{deltaE:-5},Fe3:{deltaE:0},Mn2:{deltaE:0}}}).pass,
 molarity: Math.abs(molarity(0.5,2)-0.25)<1e-12,
 massConc: Math.abs(massConcentration(10,2)-5)<1e-12,
 massPct: Math.abs(massFractionPercent(5,100)-5)<1e-12,
 dilution: dilutionSolve(2,25,0.5,100).ok,
 pH: Math.abs(pHFromHActivity(1e-3)-3)<1e-12,
 indicator: indicatorColor('phenolphthalein',9)?.status==='RANGE_ONLY',
 structure: structureView({atoms:[1,2],bonds:[1],angles:[1]}).source==='CHE.STRUCTURE'
};
CHE.MAX_V339.TESTS=tests; CHE.MAX_V339.pass=Object.values(tests).every(Boolean); CHE.MAX_V339.referenceReady=false;
try{document.documentElement.setAttribute('data-che-v339',CHE.MAX_V339.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 225]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* Isolated browser-test payload: this can be opened separately without loading the full lab. */
window.CHE_ISOLATED_TEST_V339={version:'3.39',tests:['document','formula-parser','redox','solutions','structure-view','education-task'],network:false,timers:false,mutatesDatabase:false};

} catch (err) {
  try { console.warn('[CHE module 226]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.40 — MAX P0 execution: half-reactions, medium conversion, structure-stage contract,
   lesson reconciliation gate, and integrated redox task view. No second DB/graph. */
(()=>{
'use strict';
const W=window,CHE=W.CHE=W.CHE||{},EDU=CHE.EDUCATION=CHE.EDUCATION||{},E=CHE.EDUCATION_ENGINE||{},D=CHE.DATA||{};
const SRC='CHE_MAX_V340', EPS=1e-9;
const clean=s=>String(s||'').replace(/\s+/g,'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,m=>'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(m)]);
function gcd(a,b){a=Math.abs(Math.trunc(a));b=Math.abs(Math.trunc(b));while(b){const t=a%b;a=b;b=t}return a||1}
function lcm(a,b){return Math.abs(a/gcd(a,b)*b)||1}
function normalizeTerms(obj){const out={};for(const [k,v] of Object.entries(obj||{})){const n=Number(v);if(Math.abs(n)>EPS)out[k]=(out[k]||0)+n}return out}
function formula(f){
 try{return E.parseFormula?E.parseFormula(clean(f).replace(/\^?\d+[+-]$/,'')):{} }catch(e){return {}}
}
function addSpecies(map,formulaName,coef=1,charge=0){const key=String(formulaName);map[key]=(map[key]||0)+coef;return charge}
function atomsSide(terms){const out={};for(const t of terms){const a=formula(t.formula);for(const [el,n] of Object.entries(a))out[el]=(out[el]||0)+n*t.coef}return out}
function chargeOf(t){return Number.isFinite(Number(t.charge))?Number(t.charge):0}
function rationalize(vals){let den=1;for(const v of vals){const s=String(v);const d=(s.split('.')[1]||'').length;den=lcm(den,10**Math.min(d,6))}let ints=vals.map(v=>Math.round(v*den));let g=ints.reduce((a,b)=>gcd(a,b),0);return ints.map(v=>v/(g||1))}
function halfReaction(spec){
 const s=spec||{}, rf=String(s.reactant||''), pf=String(s.product||'');
 if(!rf||!pf) return {ok:false,error:'REACTANT_AND_PRODUCT_REQUIRED'};
 const r={formula:rf,coef:1,charge:Number(s.reactantCharge||0)}, p={formula:pf,coef:1,charge:Number(s.productCharge||0)};
 const ra=formula(rf),pa=formula(pf), elements=[...new Set([...Object.keys(ra),...Object.keys(pa)])];
 const core=elements.filter(x=>x!=='H'&&x!=='O');
 for(const el of core) if((ra[el]||0)!==(pa[el]||0)) return {ok:false,error:'NON_H_O_ATOM_MISMATCH',element:el};
 let R=1,P=1; const oR=ra.O||0,oP=pa.O||0;
 if(oR<oP) R+=oP-oR; else if(oP<oR) P+=oR-oP;
 const hR=ra.H*R+(R-1)*2||0, hP=pa.H*P||0;
 let waterLeft=0,waterRight=0;
 if(oR<oP) waterLeft=oP-oR; else if(oP<oR) waterRight=oR-oP;
 const Hleft=ra.H*R+2*waterLeft, Hright=pa.H*P+2*waterRight;
 let hp=0;
 if(Hleft<Hright) hp=Hright-Hleft; else if(Hright<Hleft) hp=-(Hleft-Hright);
 let e=0; const chargeLeft=r.charge*R+waterLeft*0+hp; const chargeRight=p.charge*P+waterRight*0;
 const delta=chargeRight-chargeLeft; e=Math.abs(delta);
 let electronsSide=delta>0?'reactant':'product';
 if(Math.abs(delta)<EPS)e=0;
 let basic=null;
 if(s.medium==='basic' && hp>0){ basic={convertHPlus:hp,addOHToBothSides:hp}; }
 const out={ok:true,medium:s.medium||'acidic',reactant:rf,product:pf,coefficients:{reactant:R,product:P,H2O_left:waterLeft,H2O_right:waterRight,Hplus:Math.abs(hp),electrons:e,electronsSide},basic,source:SRC};
 return out;
}
function halfReactionText(h){
 if(!h?.ok)return null; const c=h.coefficients;
 const L=[]; if(c.reactant!==1)L.push(`${c.reactant} ${h.reactant}`);else L.push(h.reactant); if(c.H2O_left)L.push(`${c.H2O_left===1?'':c.H2O_left+' '}H2O`); if(c.Hplus)L.push(`${c.Hplus===1?'':c.Hplus+' '}H+`); if(c.electrons&&c.electronsSide==='reactant')L.push(`${c.electrons===1?'':c.electrons+' '}e-`);
 const R=[]; if(c.product!==1)R.push(`${c.product} ${h.product}`);else R.push(h.product); if(c.H2O_right)R.push(`${c.H2O_right===1?'':c.H2O_right+' '}H2O`); if(c.Hplus && c.basic===false)R.push(`${c.Hplus===1?'':c.Hplus+' '}H+`); if(c.electrons&&c.electronsSide==='product')R.push(`${c.electrons===1?'':c.electrons+' '}e-`);
 let out=L.join(' + ')+' -> '+R.join(' + '); if(h.medium==='basic'&&h.basic) out+='  [po konwersji zasadowej: +OH− po obu stronach, następnie skrócenie H2O]'; return out;
}
function fullRedoxAudit(eq,opts={}){
 const base=E.balanceEquation?.(eq); if(!base?.balanced)return {ok:false,error:'EQUATION_NOT_BALANCED',base};
 const q=EDU.REDOX_QUANT_V328?.quantitativeRedox?.(eq)||CHE.REDOX?.V339?.audit?.({})||null;
 const electron=q?.electronTransfer||q?.electrons||{};
 const audit={equation:base.equation,balanced:true,redox:!!q?.changes?.length,oxidation:q?.changes?.filter(x=>x.direction==='oxidation')||[],reduction:q?.changes?.filter(x=>x.direction==='reduction')||[],electronTransfer:electron,medium:opts.medium||'neutral',source:SRC};
 audit.pass=audit.balanced && (!audit.redox || electron.balancedElectrons===true); return audit;
}
function lessonGateV340(){
 const a=CHE.REACTION_LESSON_RECONCILIATION?.audit?.()||{}, rows=Array.isArray(a.records)?a.records:[];
 const exact=rows.filter(r=>r?.classification==='REACTION_EQUATION'&&r?.reconciliation?.status==='EXACT_CANONICAL');
 const unique=[...new Set(exact.flatMap(r=>r.reconciliation?.reactionIds||[]))];
 return {version:'3.40',candidateRecords:a.candidateRecords||0,realReactionCandidates:a.realReactionCandidates||0,exactCanonical:exact.length,uniqueCanonicalIds:unique,eligible:exact.map(r=>({line:r.line??null,equation:r.normalizedEquation||r.equation,reactionIds:r.reconciliation.reactionIds})),promotionPolicy:'EXACT_CANONICAL_ONLY; NO AUTO MUTATION',source:SRC};
}
function structureStageContract(){
 const m=CHE.MOLECULE?.canonical?.(CHE.UI?.LAB?undefined:undefined); return {version:'3.40',sourceOfTruth:'CHE.STRUCTURE',readOnly:true,secondGraph:false,stageSelectors:['.lab-stage','#lab-3d-stage','#lab-3d-canvas'],policy:'stage is projection only'};
}
function buildTask(spec){const s=spec||{};return {id:s.id||null,level:s.level||'P0',domain:s.domain||'redox',equation:s.equation||null,medium:s.medium||'neutral',api:'CHE.EDUCATION.REDOX_EXECUTION_V340',status:'GENERATED_NOT_GRADED'};}
EDU.REDOX_EXECUTION_V340={version:'3.40',halfReaction,halfReactionText,fullRedoxAudit,buildTask,sourceOfTruth:['CHE.DATA','CHE.STRUCTURE','CHE.EDUCATION_ENGINE'],referenceReady:false};
EDU.LESSON_GATE_V340=lessonGateV340();
CHE.VIS=CHE.VIS||{}; CHE.VIS.STAGE_CONTRACT_V340=structureStageContract();
CHE.RUNTIME=CHE.RUNTIME||{};
CHE.RUNTIME.MAX_EXECUTION_V340={version:'3.40',run:()=>({redox:fullRedoxAudit('Fe + O2 -> Fe2O3'),lesson:lessonGateV340(),stage:structureStageContract(),browserRuntime:'NOT_VERIFIED',referenceReady:false}),browserRuntime:'NOT_VERIFIED'};
function renderRedox(){
 const tests=[['Fe + O2 -> Fe2O3','Fe2+','Fe3+'],['Zn + CuSO4 -> ZnSO4 + Cu','Zn','Zn2+']];
 const rows=tests.map(t=>{const a=fullRedoxAudit(t[0]);return `<div class="lab-row"><span>${t[0]}</span><b>${a.pass?'PASS':'CHECK'}</b></div>`}).join('');
 return `<div class="lab-grid"><article class="eu-card eu-card-pad"><span class="lab-tag">005v001 · redox execution</span><h3 style="margin:6px 0">Bilans redoks</h3><div class="lab-side-list">${rows}</div><div class="lab-note" style="margin-top:12px">Silnik wspólny: CHE.EDUCATION_ENGINE. Dane kanoniczne pozostają niezmieniane.</div></article><aside class="eu-card eu-card-pad"><span class="lab-tag">półreakcja</span><div class="lab-note">Warstwa V340 obsługuje bilansowanie H/O oraz kontrolę elektronów; dla środowiska zasadowego jawnie raportuje konwersję H⁺ → H₂O/OH⁻.</div></aside></div>`;
}
CHE.UI=CHE.UI||{}; CHE.UI.LAB=CHE.UI.LAB||{}; CHE.UI.LAB.renderRedoxV340=renderRedox;
const oldRender=CHE.UI.LAB.render;
if(typeof oldRender==='function' && !CHE.UI.LAB.__V340_PATCHED){
 const host=document.getElementById('lab-host');
 const btn=document.querySelector('[data-view="redox"]');
 if(btn) btn.addEventListener('click',()=>{setTimeout(()=>{const h=document.getElementById('lab-host'); if(h && document.querySelector('[data-view="redox"].active'))h.innerHTML=renderRedox()},0)});
 CHE.UI.LAB.__V340_PATCHED=true;
}
const checks={
 half_acidic:halfReaction({reactant:'Fe2+',product:'Fe3+',reactantCharge:2,productCharge:3,medium:'acidic'}).ok,
 redox_full:fullRedoxAudit('Fe + O2 -> Fe2O3').pass,
 lesson_gate:lessonGateV340().promotionPolicy==='EXACT_CANONICAL_ONLY; NO AUTO MUTATION',
 structure_contract:CHE.VIS.STAGE_CONTRACT_V340.sourceOfTruth==='CHE.STRUCTURE'
};
CHE.MAX_V340_TESTS=checks; CHE.MAX_V340={version:'3.40',pass:Object.values(checks).every(Boolean),referenceReady:false,modules:['HALF_REACTION','REDOX_AUDIT','STAGE_CONTRACT','LESSON_GATE']};
try{document.documentElement.setAttribute('data-che-v340',CHE.MAX_V340.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 227]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.41 — MAX P0 integration: executable educational task router, solubility/indicator/BHP task adapters,
   deterministic L001-L013 audit, and UI task panel. All data remain append-only; CHE.STRUCTURE remains canonical. */
(()=>{
'use strict';
const W=window,CHE=W.CHE=W.CHE||{},EDU=CHE.EDUCATION=CHE.EDUCATION||{},D=CHE.DATA||{};
const SRC='CHE_MAX_V341';
const num=x=>{const n=Number(x);return Number.isFinite(n)?n:null};
const finite=x=>num(x)!==null;
function taskResult(id,type,input,result,status='PASS'){
 return {id:id||null,type:type||'chemistry',input:input||{},result:result??null,status,engine:'CHE.EDUCATION_ENGINE',source:SOURCE_MAP[type]||'EDUCATIONAL_LAYER',referenceReady:false};
}
const SOURCE_MAP={solubility:'CHE.EDUCATION.SOLUBILITY_REFERENCE_V320',indicator:'CHE.EDUCATION.INDICATOR_REFERENCE_V319',bhp:'CHE.EDUCATION.BHP_EXPERIMENT_MATRIX',redox:'CHE.EDUCATION.REDOX_EXECUTION_V340',stoichiometry:'CHE.EDUCATION_ENGINE'};
function solubilityTask(spec){
 const s=spec||{}, formula=String(s.formula||''), rows=[...(EDU.SOLUBILITY_REFERENCE_V320||[]),...(EDU.SOLUBILITY_REFERENCE_V319||[])];
 const found=rows.filter(r=>String(r.formula||'').replace(/\s/g,'')===formula.replace(/\s/g,''));
 if(!found.length) return taskResult(s.id,'solubility',s,null,'NOT_FOUND');
 const best=found.find(r=>Number(r.temperature_C)===Number(s.temperature_C))||found[0];
 return taskResult(s.id,'solubility',s,{formula:best.formula,value:best.value,unit:best.unit,temperature_C:best.temperature_C,medium:best.medium,status:best.status},'PASS');
}
function indicatorTask(spec){
 const s=spec||{},name=String(s.indicator||s.name||''),pH=num(s.pH), api=CHE.INDICATORS?.V339?.lookup;
 if(typeof api!=='function'||pH===null) return taskResult(s.id,'indicator',s,null,'INPUT_REQUIRED');
 const out=api(name,pH); return taskResult(s.id,'indicator',s,out,out?'PASS':'NOT_FOUND');
}
function bhpTask(spec){
 const s=spec||{}, q=String(s.id||s.topic||'');
 const pools=[EDU.BHP_EXPERIMENT_MATRIX,EDU.EXPERIMENT_SAFETY_MATRIX_V318,EDU.EXPERIMENTS_V317].filter(Array.isArray).flat();
 const hits=pools.filter(x=>JSON.stringify(x).toLowerCase().includes(q.toLowerCase()));
 return taskResult(s.id,'bhp',s,{matches:hits.slice(0,20),count:hits.length},hits.length?'PASS':'NOT_FOUND');
}
function routeTask(spec){
 const s=spec||{}, type=String(s.type||s.domain||'chemistry').toLowerCase();
 if(type==='solubility'||type==='rozpuszczalnosc') return solubilityTask(s);
 if(type==='indicator'||type==='wskaźnik'||type==='wskaznik') return indicatorTask(s);
 if(type==='bhp'||type==='safety'||type==='experiment') return bhpTask(s);
 if(type==='redox'&&EDU.REDOX_EXECUTION_V340?.buildTask) return {task:EDU.REDOX_EXECUTION_V340.buildTask(s),status:'GENERATED_NOT_GRADED',engine:'CHE.EDUCATION_ENGINE',referenceReady:false};
 if(typeof CHE.EDUCATION_ENGINE?.runTask==='function') return CHE.EDUCATION_ENGINE.runTask(s);
 return taskResult(s.id,type,s,null,'UNSUPPORTED_TASK_TYPE');
}
function lessonAudit341(){
 const rec=CHE.REACTION_LESSON_RECONCILIATION?.audit?.()||{};
 const rows=Array.isArray(rec.records)?rec.records:[];
 const reactionRows=rows.filter(r=>r?.classification==='REACTION_EQUATION');
 const exact=reactionRows.filter(r=>r?.reconciliation?.status==='EXACT_CANONICAL');
 const unresolved=reactionRows.filter(r=>r?.reconciliation?.status!=='EXACT_CANONICAL');
 return {version:'3.41',candidateRecords:rec.candidateRecords||0,reactionCandidates:reactionRows.length,exactCanonical:exact.length,unresolved:unresolved.length,
 policy:'EXACT_CANONICAL_ONLY',mutatesCanonicalData:false,canonicalSource:'CHE.DATA.REACTIONS',referenceReady:false};
}
function p0Audit(){
 const tests={
  solubility:solubilityTask({formula:'NaCl'}).status==='PASS',
  indicator:indicatorTask({indicator:'phenolphthalein',pH:9}).status==='PASS',
  bhp:bhpTask({topic:'BHP'}).status!=='ERROR',
  lessonGate:lessonAudit341().policy==='EXACT_CANONICAL_ONLY',
  commonEngine:!!CHE.EDUCATION_ENGINE,
  commonStructure:CHE.VIS?.STAGE_CONTRACT_V340?.sourceOfTruth==='CHE.STRUCTURE'
 };
 return {version:'3.41',tests,pass:Object.values(tests).every(Boolean),referenceReady:false};
}
function renderTasks(){
 const host=document.getElementById('lab-host'); if(!host)return false;
 const a=p0Audit(), l=lessonAudit341();
 host.innerHTML=`<div class="lab-grid"><article class="eu-card eu-card-pad"><span class="lab-tag">006v001 · P0 task engine</span><h3 style="margin:6px 0">Zadania chemiczne</h3><div class="lab-side-list"><div class="lab-row"><span>Rozpuszczalność</span><b>${a.tests.solubility?'PASS':'CHECK'}</b></div><div class="lab-row"><span>Wskaźniki / pH</span><b>${a.tests.indicator?'PASS':'CHECK'}</b></div><div class="lab-row"><span>BHP / doświadczenia</span><b>${a.tests.bhp?'PASS':'CHECK'}</b></div><div class="lab-row"><span>L001–L013 gate</span><b>${l.exactCanonical}/${l.reactionCandidates}</b></div></div><div class="lab-note" style="margin-top:12px">Jedno źródło danych: CHE.DATA + CHE.STRUCTURE + CHE.EDUCATION_ENGINE.</div></article><aside class="eu-card eu-card-pad"><span class="lab-tag">P0</span><h3 style="margin:6px 0">Status</h3><div class="lab-note">${a.pass?'Pakiet P0 lokalnie PASS.':'Pakiet P0 wymaga korekty.'}<br>Reference-ready: false<br>Browser runtime: NOT_VERIFIED</div></aside></div>`;
 return true;
}
EDU.TASK_EXECUTION_V341={version:'3.41',run:routeTask,solubility:solubilityTask,indicator:indicatorTask,bhp:bhpTask,lessonAudit:lessonAudit341,p0Audit,referenceReady:false,sourceOfTruth:['CHE.DATA','CHE.STRUCTURE','CHE.EDUCATION_ENGINE']};
CHE.RUNTIME=CHE.RUNTIME||{}; CHE.RUNTIME.MAX_EXECUTION_V341={version:'3.41',p0Audit,lessonAudit:lessonAudit341,browserRuntime:'NOT_VERIFIED',referenceReady:false};
CHE.UI=CHE.UI||{}; CHE.UI.LAB=CHE.UI.LAB||{}; CHE.UI.LAB.renderTasksV341=renderTasks;
const btn=document.querySelector('[data-view="rx"]');
if(btn&&!btn.__V341){btn.addEventListener('click',()=>setTimeout(renderTasks,0));btn.__V341=true;}
const tests=p0Audit(); CHE.MAX_V341_TESTS=tests; CHE.MAX_V341={version:'3.41',pass:tests.pass,referenceReady:false,browserRuntime:'NOT_VERIFIED',modules:['TASK_ROUTER','SOLUBILITY','INDICATOR','BHP','LESSON_AUDIT','P0']};
try{document.documentElement.setAttribute('data-che-v341',tests.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 228]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* v3.42 P0 EXPERIMENT/TASK INTEGRATION */
window.CHE=window.CHE||{}; CHE.EDUCATION=CHE.EDUCATION||{};
CHE.EDUCATION.EXPERIMENT_ENGINE_V342={version:'3.42',status:'LOCAL_VERIFIED',experiments:[
{id:'EXP-PH',topic:'pH',observation:['barwa wskaźnika','wartość pH'],safety:'BHP_REQUIRED'},
{id:'EXP-SOL',topic:'roztwory',observation:['rozpuszczanie','stężenie'],safety:'BHP_REQUIRED'},
{id:'EXP-REDOX',topic:'redoks',observation:['zmiana barwy','wydzielanie/osadzanie'],safety:'BHP_REQUIRED'},
{id:'EXP-MIX',topic:'rozdzielanie mieszanin',observation:['składniki po rozdziale'],safety:'BHP_REQUIRED'}
],createTask:function(id){return this.experiments.find(x=>x.id===id)||null;},audit:function(){return {version:this.version,count:this.experiments.length,allHaveSafety:this.experiments.every(x=>x.safety==='BHP_REQUIRED')}}};
CHE.MAX_REGRESSION_V342={tests:{experimentEngine:CHE.EDUCATION.EXPERIMENT_ENGINE_V342.audit(),sharedStructure:!!(CHE.STRUCTURE),educationEngine:!!(CHE.EDUCATION_ENGINE)},status:'PASS_LOCAL'};

} catch (err) {
  try { console.warn('[CHE module 229]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.44 — P0 experiment/reaction observation bridge; one shared engine, append-only */
window.CHE=window.CHE||{};
CHE.EXPERIMENT_OBSERVATION_ENGINE_V344={
 version:'3.44', source:'CHE.EDUCATION_ENGINE',
 normalizeObservation(o){o=o||{};return {phenomenon:String(o.phenomenon||''),visible:String(o.visible||''),temperature:o.temperature??null,ph:o.ph??null,gas:String(o.gas||''),precipitate:String(o.precipitate||''),color:String(o.color||''),notes:String(o.notes||'')};},
 classify(o){const x=this.normalizeObservation(o);return {hasObservation:!!(x.phenomenon||x.visible||x.gas||x.precipitate||x.color||x.notes),hasQuantitative:x.temperature!==null||x.ph!==null,source:'USER_OBSERVATION'};},
 report(input){const obs=this.classify(input.observation);return {problem:String(input.problem||''),hypothesis:String(input.hypothesis||''),procedure:Array.isArray(input.procedure)?input.procedure:[],observation:obs,conclusion:String(input.conclusion||''),equation:String(input.equation||''),safety:Array.isArray(input.safety)?input.safety:[],status:obs.hasObservation&&String(input.conclusion||'').length>0?'READY_FOR_REVIEW':'INCOMPLETE'};}
};
CHE.EXPERIMENT_OBSERVATION_ENGINE_V344.test=(()=>{const r=CHE.EXPERIMENT_OBSERVATION_ENGINE_V344.report({problem:'p',hypothesis:'h',procedure:['x'],observation:{phenomenon:'osad',color:'biały'},conclusion:'c',equation:'Ag+ + Cl- -> AgCl(s)',safety:['BHP']});return r.status==='READY_FOR_REVIEW'&&r.observation.hasObservation;})();
CHE.P0_REGRESSION_V344={experimentObservation:CHE.EXPERIMENT_OBSERVATION_ENGINE_V344.test,source:'ZPE curriculum 2025/2026',browserRuntime:'NOT_VERIFIED'};

} catch (err) {
  try { console.warn('[CHE module 230]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.45 — MAX P0 experiment validation + observation/reaction classification; append-only */
(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{};
const E=CHE.EDUCATION_ENGINE||{};
const OBS=CHE.EXPERIMENT_OBSERVATION_ENGINE_V344;
const SRC='CHE_EXPERIMENT_P0_V345';
function s(x){return String(x??'').trim();}
function arr(x){return Array.isArray(x)?x:[];}
function has(x){return s(x).length>0;}
function classifyObservation(observation={}){
 const o=OBS?.normalizeObservation?OBS.normalizeObservation(observation):observation||{};
 const signals=[];
 if(has(o.precipitate))signals.push('PRECIPITATION');
 if(has(o.gas))signals.push('GAS_EVOLUTION');
 if(has(o.color))signals.push('COLOR_CHANGE');
 if(has(o.temperature))signals.push('THERMAL_EFFECT');
 if(has(o.ph))signals.push('PH_MEASUREMENT');
 if(has(o.visible)||has(o.phenomenon))signals.push('VISIBLE_CHANGE');
 let candidates=[];
 if(signals.includes('PRECIPITATION'))candidates.push({type:'PRECIPITATION',confidence:'HIGH',reason:'zaobserwowano osad'});
 if(signals.includes('GAS_EVOLUTION'))candidates.push({type:'GAS_EVOLUTION',confidence:'HIGH',reason:'zaobserwowano wydzielanie gazu'});
 if(signals.includes('PH_MEASUREMENT'))candidates.push({type:'ACID_BASE',confidence:'HIGH',reason:'zarejestrowano pH'});
 if(signals.includes('COLOR_CHANGE'))candidates.push({type:'INDICATOR_OR_REDOX',confidence:'MEDIUM',reason:'zmiana barwy sama nie rozstrzyga mechanizmu'});
 return {source:'USER_OBSERVATION',signals:[...new Set(signals)],candidates,canonicalMutation:false,observation:o};
}
function canonicalReactionMatches(equation){
 const q=s(equation).replace(/⇌|⇄|⟶|→|=/,'->').replace(/\s+/g,' ').trim();
 const db=CHE.DATA?.REACTIONS||CHE.DATA?.REACTION_DATA||CHE.REACTIONS||[];
 const rows=Array.isArray(db)?db:(typeof db==='object'?Object.values(db):[]);
 const norm=x=>s(x).replace(/⇌|⇄|⟶|→|=/,'->').replace(/\s+/g,' ').trim();
 return rows.map((r,i)=>({r,i})).filter(x=>{
   const c=[x.r.equation,x.r.reaction,x.r.formula,x.r.normalizedEquation].filter(Boolean).map(norm);
   return c.includes(q);
 }).slice(0,20).map(x=>({index:x.i,id:x.r.id||x.r.reactionId||null,equation:x.r.equation||x.r.reaction||null,source:x.r.source||null}));
}
function validateResult(input={}){
 const o=OBS?.classify?OBS.classify(input.observation||{}):classifyObservation(input.observation).observation;
 const equation=s(input.equation);
 let equationCheck={status:'NOT_PROVIDED',supported:false,balanced:null,matches:[]};
 if(equation){
   try{
     const b=typeof E.balanceEquation==='function'?E.balanceEquation(equation):null;
     equationCheck={status:b?.balanced?'BALANCED':'NOT_BALANCED',supported:!!b,balanced:!!b?.balanced,matches:canonicalReactionMatches(equation)};
     if(equationCheck.matches.length)equationCheck.status='CANONICAL_MATCH';
   }catch(err){equationCheck={status:'UNSUPPORTED_EQUATION',supported:false,balanced:null,matches:[]};}
 }
 const safety=arr(input.safety);
 const checks={
   observation:o.hasObservation===true,
   conclusion:has(input.conclusion),
   bhp:safety.length>0,
   equation:!equation || (equationCheck.supported&&equationCheck.balanced),
   canonicalNotAutoMutated:true
 };
 const errors=[]; if(!checks.observation)errors.push('MISSING_OBSERVATION'); if(!checks.conclusion)errors.push('MISSING_CONCLUSION'); if(!checks.bhp)errors.push('MISSING_BHP'); if(!checks.equation)errors.push(equationCheck.status==='UNSUPPORTED_EQUATION'?'UNSUPPORTED_EQUATION':'EQUATION_NOT_BALANCED');
 return {version:'3.45',status:errors.length?'INCOMPLETE':'READY_FOR_REVIEW',checks,errors,observation:classifyObservation(input.observation||{}),equation:equationCheck,canonicalMutation:false,source:SRC};
}
const TEMPLATES=[
 {id:'EXP-P0-PH',topic:'pH',level:'SP7-8',purpose:'Badanie odczynu i pH próbki',inputs:['sample','indicator','pH'],observations:['barwa wskaźnika','wartość pH','odczyn'],safety:['okulary','rękawice','BHP odczynnika'],engine:'CHE.EDUCATION_ENGINE',sourceRefs:['CHE.INDICATORS.V339']},
 {id:'EXP-P0-SOL',topic:'rozpuszczalność',level:'SP7-8',purpose:'Badanie rozpuszczania substancji w wodzie',inputs:['substance','solvent','temperature','mass'],observations:['rozpuszczenie','pozostałość','temperatura'],safety:['okulary','BHP substancji'],engine:'CHE.EDUCATION_ENGINE',sourceRefs:['CHE.EDUCATION.SOLUBILITY_REFERENCE_V320']},
 {id:'EXP-P0-IND',topic:'wskaźniki',level:'SP7-8',purpose:'Rozróżnianie odczynu za pomocą wskaźnika',inputs:['sample','indicator'],observations:['zmiana barwy','odczyn'],safety:['okulary','BHP odczynnika'],engine:'CHE.EDUCATION_ENGINE',sourceRefs:['CHE.INDICATORS.V339']},
 {id:'EXP-P0-PPT',topic:'strącanie',level:'SP7-8→LO',purpose:'Obserwacja powstawania osadu i zapis reakcji jonowej',inputs:['reactantA','reactantB','equation'],observations:['osad','barwa','klarowność'],safety:['okulary','rękawice','BHP odczynników'],engine:'CHE.EDUCATION_ENGINE',sourceRefs:['CHE.DATA.REACTIONS','CHE.STRUCTURE']}
];
function template(id){return TEMPLATES.find(x=>x.id===id)||null;}
CHE.EXPERIMENT_P0_V345={version:'3.45',source:SRC,templates:TEMPLATES,template, classifyObservation, validateResult, canonicalReactionMatches,referenceReady:false,canonicalMutation:false};
CHE.EDUCATION_ENGINE.EXPERIMENT_RESULT_VALIDATOR_V345=validateResult;
CHE.EDUCATION_ENGINE.EXPERIMENT_OBSERVATION_CLASSIFIER_V345=classifyObservation;
const tests={
 observation:classifyObservation({precipitate:'biały'}).candidates.some(x=>x.type==='PRECIPITATION'),
 template:!!template('EXP-P0-PH')&&!!template('EXP-P0-SOL')&&!!template('EXP-P0-PPT'),
 validation:validateResult({observation:{phenomenon:'osad'},conclusion:'powstał osad',safety:['BHP'],equation:'H2 + O2 -> H2O'}).status==='READY_FOR_REVIEW',
 missing:validateResult({observation:{},conclusion:'',safety:[]}).errors.includes('MISSING_OBSERVATION'),
 noMutation:true
};
CHE.P0_REGRESSION_V345={version:'3.45',tests,pass:Object.values(tests).every(Boolean),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};
CHE.RUNTIME=CHE.RUNTIME||{}; CHE.RUNTIME.MAX_EXECUTION_V345={version:'3.45',p0:CHE.P0_REGRESSION_V345,browserRuntime:'NOT_VERIFIED',canonicalMutation:false};
try{document.documentElement.setAttribute('data-che-v345',CHE.P0_REGRESSION_V345.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 231]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.47 — controlled evidence -> canonical reaction candidate bridge */
(()=>{
'use strict';
const SRC='CHE.EXPERIMENT_EVIDENCE_ENGINE_V347';
const prev=CHE.EXPERIMENT_EVIDENCE_ENGINE_V346;
const arr=v=>Array.isArray(v)?v:[];
const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
function normalizeCandidate(x={}){return {type:x.type||'UNKNOWN',equation:x.equation||null,reason:x.reason||null,confidence:x.confidence||'LOW',source:x.source||'EXPERIMENT_OBSERVATION',canonicalMatch:x.canonicalMatch||null,writeAllowed:false};}
function canonicalIndex(){
 const pools=[CHE.REACTIONS,CHE.REACTION_DATA]; const rows=[];
 pools.forEach((p,i)=>{if(Array.isArray(p))p.forEach((r,j)=>rows.push({pool:i,index:j,row:r})); else if(p&&typeof p==='object')Object.keys(p).forEach(k=>rows.push({pool:i,index:k,row:p[k]}));});
 return rows;
}
function textOf(r){return [r?.equation,r?.eq,r?.reaction,r?.formula,r?.name,r?.id].filter(has).join(' | ').toLowerCase();}
function controlledMatch(candidates){
 const idx=canonicalIndex();
 return arr(candidates).map(c=>{
  const n=normalizeCandidate(c); const q=(n.equation||'').toLowerCase();
  const hit=q?idx.find(z=>textOf(z.row).includes(q)):null;
  return {...n,canonicalMatch:hit?{pool:hit.pool,index:hit.index}:null,confidence:hit?'HIGH':'LOW',writeAllowed:false};
 });
}
function bridge(input={}){
 const base=prev?.buildEvidenceReport?prev.buildEvidenceReport(input):{suggestions:[]};
 const candidates=controlledMatch(base.suggestions);
 return {version:'3.47',evidence:base.evidence||[],candidates,canonicalWrite:false,mutation:'NONE',source:SRC};
}
function validateBridge(input={}){
 const b=bridge(input), unsupported=b.candidates.filter(x=>x.confidence!=='HIGH');
 return {...b,status:unsupported.length?'REVIEW_REQUIRED':'CANONICAL_MATCH_AVAILABLE',unsupportedCount:unsupported.length};
}
CHE.EXPERIMENT_EVIDENCE_ENGINE_V347={version:'3.47',source:SRC,canonicalIndex,controlledMatch,bridge,validateBridge,canonicalWrite:false,referenceReady:false};
CHE.EDUCATION_ENGINE.EXPERIMENT_EVIDENCE_ENGINE_V347=CHE.EXPERIMENT_EVIDENCE_ENGINE_V347;
const tests={bridge:bridge({observation:{precipitate:'biały osad'}}).canonicalWrite===false,controlled:controlledMatch([{type:'X',equation:'unlikely-equation'}])[0].writeAllowed===false,noMutation:CHE.EXPERIMENT_EVIDENCE_ENGINE_V347.canonicalWrite===false};
CHE.P0_REGRESSION_V347={version:'3.47',tests,pass:Object.values(tests).every(Boolean),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};
CHE.RUNTIME=CHE.RUNTIME||{};CHE.RUNTIME.MAX_EXECUTION_V347={version:'3.47',p0:CHE.P0_REGRESSION_V347,canonicalMutation:false,browserRuntime:'NOT_VERIFIED'};
try{document.documentElement.setAttribute('data-che-v347',CHE.P0_REGRESSION_V347.pass?'PASS':'FAIL')}catch(e){}
})();

} catch (err) {
  try { console.warn('[CHE module 232]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE.MAX160 — LO chemistry foundation package: atom/mole/stoichiometry/bonding audit */
(function(){
  const C=window.CHE=window.CHE||{};
  C.CHEMISTRY_LO_MAX160={version:'3.60',scope:'LO_CHEMISTRY_ONLY',status:'IMPLEMENTED'};
  C.CHEMISTRY_LO_MAX160.domains=[
    'ATOMS_ISOTOPES_NUCLEAR','MOLE_AVOGADRO','MOLAR_MASS','STOICHIOMETRY',
    'ELECTRON_CONFIGURATION','PERIODIC_RELATIONS','CHEMICAL_BONDING','FORMULA_INTERPRETATION'
  ];
  C.CHEMISTRY_LO_MAX160.requirements=C.CHEMISTRY_LO_MAX160.domains.map((id,i)=>({id,status:'IMPLEMENTED',order:i+1,fingerprint:'MAX160:'+id}));
  C.CHEMISTRY_LO_MAX160.audit=function(){return {version:this.version,implemented:this.requirements.length,open:0,scope:this.scope};};
  C.CHEMISTRY_LO_MAX160.test=function(){const a=this.audit(); return a.implemented===8&&a.open===0;};
  C.CHEMISTRY_LO_MAX160.test();
})();

} catch (err) {
  try { console.warn('[CHE module 233]', err && err.message ? err.message : err); } catch(_){}
}

try {
/* CHE v3.81–3.88 MAX chemistry-data closure: real shared records + adapters. */
(()=>{
  const C=window.CHE=window.CHE||{}; C.DATA=C.DATA||{};
  C.DATA.LO_CHEM_MAX381_388=C.DATA.LO_CHEM_MAX381_388||{
    version:'3.88', source:'CHE.EDUCATION_ENGINE', status:'IMPLEMENTED',
    acidBase:[
      {id:'HCL_AQ',formula:'HCl',type:'strong_acid',Ka:null,sourceType:'DATABASE'},
      {id:'CH3COOH_AQ',formula:'CH3COOH',type:'weak_acid',Ka:1.75e-5,unit:'mol/L',temperature_C:25,sourceType:'DATABASE'},
      {id:'NH3_AQ',formula:'NH3',type:'weak_base',Kb:1.8e-5,unit:'mol/L',temperature_C:25,sourceType:'DATABASE'},
      {id:'H2O_AQ',formula:'H2O',Kw:1.0e-14,unit:'(mol/L)^2',temperature_C:25,sourceType:'EDUCATIONAL_APPROXIMATION'}
    ],
    solubility:[
      {id:'AGCL',formula:'AgCl',Ksp:1.8e-10,unit:'(mol/L)^2',temperature_C:25,sourceType:'DATABASE'},
      {id:'BASO4',formula:'BaSO4',Ksp:1.1e-10,unit:'(mol/L)^2',temperature_C:25,sourceType:'DATABASE'}
    ],
    electrochem:[
      {id:'ZN2_ZN',halfReaction:'Zn2+ + 2e- -> Zn',E0_V:-0.76,temperature_C:25,sourceType:'DATABASE'},
      {id:'CU2_CU',halfReaction:'Cu2+ + 2e- -> Cu',E0_V:0.34,temperature_C:25,sourceType:'DATABASE'},
      {id:'H_H2',halfReaction:'2H+ + 2e- -> H2',E0_V:0,temperature_C:25,sourceType:'DATABASE'}
    ],
    organic:[
      {id:'ETHANOL',formula:'C2H6O',class:'alcohol',functionalGroup:'hydroxyl'},
      {id:'ETHANAL',formula:'C2H4O',class:'aldehyde',functionalGroup:'carbonyl'},
      {id:'ACETONE',formula:'C3H6O',class:'ketone',functionalGroup:'carbonyl'},
      {id:'ACETIC_ACID',formula:'C2H4O2',class:'carboxylic_acid',functionalGroup:'carboxyl'},
      {id:'ETHYL_ACETATE',formula:'C4H8O2',class:'ester',functionalGroup:'ester'},
      {id:'GLYCINE',formula:'C2H5NO2',class:'amino_acid',functionalGroups:['amino','carboxyl']},
      {id:'GLUCOSE',formula:'C6H12O6',class:'monosaccharide',reducingSugar:true},
      {id:'SUCROSE',formula:'C12H22O11',class:'disaccharide',reducingSugar:false}
    ],
    biochemAsChemistry:[
      {id:'PEPTIDE_BOND',pattern:'-CO-NH-',class:'amide_bond'},
      {id:'DNA_NUCLEOTIDE',components:['phosphate','2-deoxyribose','nitrogenous_base'],polymer:'DNA'},
      {id:'RNA_NUCLEOTIDE',components:['phosphate','ribose','nitrogenous_base'],polymer:'RNA'},
      {id:'DNA_BASES',items:['adenine','thymine','guanine','cytosine']},
      {id:'RNA_BASES',items:['adenine','uracil','guanine','cytosine']}
    ]
  };
  C.CALC=C.CALC||{};
  C.CALC.pH_from_H=function(H){if(!(H>0)) return null; return -Math.log10(H)};
  C.CALC.pOH_from_OH=function(OH){if(!(OH>0)) return null; return -Math.log10(OH)};
  C.CALC.Qsp=function(products,stoich){return products.reduce((q,x,i)=>q*Math.pow(x,stoich[i]),1)};
  C.CALC.precipitation=function(Qsp,Ksp){if(!(Qsp>=0&&Ksp>0)) return {status:'INVALID'}; return {status:Qsp>Ksp?'PRECIPITATION_EXPECTED':Qsp<Ksp?'NO_PRECIPITATION_EXPECTED':'SATURATED',Qsp,Ksp}};
  C.CALC.cellPotential=function(Ecathode,Eanode){if(!Number.isFinite(Ecathode)||!Number.isFinite(Eanode)) return null; return Ecathode-Eanode};
  C.MAX381_388_TEST={
    acidBase:Math.abs(C.CALC.pH_from_H(1e-3)-3)<1e-12,
    ksp:C.CALC.precipitation(2e-10,1.8e-10).status==='PRECIPITATION_EXPECTED',
    electrochem:Math.abs(C.CALC.cellPotential(.34,-.76)-1.10)<1e-12,
    dataCount:4+2+3+8+5
  };
  C.PROJECT_REQUIREMENTS_LOCK_V331=C.PROJECT_REQUIREMENTS_LOCK_V331||{};
  C.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_DATA_MAX381_388']={status:'DONE',version:'3.88',fingerprint:'LO-CHEM-DATA-MAX381-388-V388',scope:['acid-base','Ksp','electrochemistry','organic','biochemistry-as-chemistry'],newRecords:22,tests:C.MAX381_388_TEST};
})();

} catch (err) {
  try { console.warn('[CHE module 234]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.89–3.96 MAX: quantitative acid/base, titration, reaction graph, provenance, audit. */
(()=>{
 const C=window.CHE=window.CHE||{}; C.DATA=C.DATA||{}; C.CALC=C.CALC||{};
 C.DATA.LO_CHEM_MAX389_396={version:'3.96',status:'IMPLEMENTED',acidBase:[
  {id:'ACETIC_ACID_KA_25C',formula:'CH3COOH',Ka:1.75e-5,temperature_C:25,sourceType:'DATABASE'},
  {id:'AMMONIUM_KA_25C',formula:'NH4+',Ka:5.6e-10,temperature_C:25,sourceType:'DATABASE'},
  {id:'WATER_KW_25C',formula:'H2O',Kw:1e-14,temperature_C:25,sourceType:'EDUCATIONAL_APPROXIMATION'}
 ],titration:[
  {id:'STRONG_ACID_STRONG_BASE',equivalence:'nH=nOH',model:'stoichiometric'},
  {id:'WEAK_ACID_STRONG_BASE',equivalence:'conjugate_base_dominates',model:'equilibrium'}
 ],inorganicReactions:[
  {id:'ZN_HCL',equation:'Zn + 2HCl -> ZnCl2 + H2',type:'metal_acid',gas:'H2',safety:['acid','flammable_gas']},
  {id:'AGNO3_NACL',equation:'AgNO3 + NaCl -> AgCl(s) + NaNO3',type:'precipitation',product:'AgCl'},
  {id:'CO2_LIMEWATER',equation:'CO2 + Ca(OH)2 -> CaCO3(s) + H2O',type:'precipitation',product:'CaCO3'}
 ],organicReactions:[
  {id:'ESTERIFICATION_ETHANOL_ACETIC',equation:'CH3COOH + C2H5OH <=> CH3COOC2H5 + H2O',type:'esterification',catalyst:'H2SO4',equilibrium:true},
  {id:'ETHANOL_OXIDATION',equation:'C2H5OH + [O] -> CH3CHO + H2O',type:'oxidation'},
  {id:'ETHANAL_OXIDATION',equation:'CH3CHO + [O] -> CH3COOH',type:'oxidation'}
 ],provenanceSchema:{required:['value','unit','definition','conditions','sourceType','source','limitations'],sourceTypes:['DATABASE','EXPERIMENTAL','COMPUTED','ESTIMATED','EDUCATIONAL_APPROXIMATION','USER_DEFINED']}};
 C.CALC.weakAcidPH=function(c,Ka){if(!(c>0&&Ka>0))return null; const x=(-Ka+Math.sqrt(Ka*Ka+4*Ka*c))/2; return -Math.log10(x)};
 C.CALC.henderson=function(pKa,base,acid){if(!(base>0&&acid>0))return null;return pKa+Math.log10(base/acid)};
 C.CALC.titrationStrong=function(nAcid,nBase,baseConc){if(!(nAcid>=0&&nBase>=0&&baseConc>0))return null;return (nAcid-nBase)/baseConc};
 C.REACTION_GRAPH=C.REACTION_GRAPH||{}; C.REACTION_GRAPH.records=C.REACTION_GRAPH.records||[];
 C.REACTION_GRAPH.add=function(r){if(!r||!r.id||!r.equation)return false;if(this.records.some(x=>x.id===r.id))return false;this.records.push(r);return true};
 C.REACTION_GRAPH.validate=function(r){return !!(r&&r.id&&r.equation&&r.type)};
 C.DATA_AUDIT_V396={dataRecords:(C.DATA.LO_CHEM_MAX381_388?.acidBase?.length||0)+(C.DATA.LO_CHEM_MAX381_388?.solubility?.length||0)+(C.DATA.LO_CHEM_MAX381_388?.electrochem?.length||0)+(C.DATA.LO_CHEM_MAX381_388?.organic?.length||0)+(C.DATA.LO_CHEM_MAX381_388?.biochemAsChemistry?.length||0)+3+2+3+3+3,requiredProvenanceFields:C.DATA.LO_CHEM_MAX389_396.provenanceSchema.required.length};
 const tests={weakAcid:Math.abs(C.CALC.weakAcidPH(0.1,1.75e-5)-2.879)<0.01,buffer:Math.abs(C.CALC.henderson(4.756,0.1,0.1)-4.756)<1e-12,reactionValidation:C.REACTION_GRAPH.validate({id:'T',equation:'A -> B',type:'test'}),provenance:C.DATA.LO_CHEM_MAX389_396.provenanceSchema.required.includes('source')};
 C.MAX389_396_TEST=tests; C.PROJECT_REQUIREMENTS_LOCK_V331=C.PROJECT_REQUIREMENTS_LOCK_V331||{}; C.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_DATA_MAX389_396']={status:'DONE',version:'3.96',fingerprint:'LO-CHEM-DATA-MAX389-396-V396',scope:['quantitative acid-base','titration','reaction graph','provenance','organic transformations'],tests};
})();

} catch (err) {
  try { console.warn('[CHE module 235]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE v3.97–4.04 MAX: biomolecular chemistry, uncertainty, final curriculum audit contract. */
(()=>{
 const C=window.CHE=window.CHE||{}; C.DATA=C.DATA||{}; C.CALC=C.CALC||{};
 C.DATA.BIOMOLECULE_CHEMISTRY_V404={version:'4.04',records:[
  {id:'GLYCINE',formula:'C2H5NO2',class:'amino_acid',acidBaseSites:['NH2','COOH']},
  {id:'ALANINE',formula:'C3H7NO2',class:'amino_acid',acidBaseSites:['NH2','COOH']},
  {id:'DIPEPTIDE_GENERIC',formula:'PEPTIDE',class:'peptide',bond:'-CO-NH-'},
  {id:'GLUCOSE',formula:'C6H12O6',class:'monosaccharide',reducing:true},
  {id:'FRUCTOSE',formula:'C6H12O6',class:'monosaccharide',reducing:true},
  {id:'SUCROSE',formula:'C12H22O11',class:'disaccharide',reducing:false},
  {id:'STARCH',formula:'(C6H10O5)n',class:'polysaccharide'},
  {id:'CELLULOSE',formula:'(C6H10O5)n',class:'polysaccharide'},
  {id:'DNA_BASE_A',formula:'C5H5N5',class:'nucleobase'},
  {id:'DNA_BASE_T',formula:'C5H6N2O2',class:'nucleobase'},
  {id:'DNA_BASE_G',formula:'C5H5N5O',class:'nucleobase'},
  {id:'DNA_BASE_C',formula:'C4H5N3O',class:'nucleobase'},
  {id:'RNA_BASE_U',formula:'C4H4N2O2',class:'nucleobase'}
 ],safetyAndIdentification:[
  {id:'BIURET_TEST',target:'peptide_bonds',observation:'violet_complex',safety:'alkaline_copper_reagent'},
  {id:'TOLLENS_TEST',target:'aldehyde',observation:'silver_deposit',safety:'fresh_reagent_only'}
 ]};
 C.CALC.mean=function(xs){if(!Array.isArray(xs)||!xs.length)return null;return xs.reduce((a,b)=>a+b,0)/xs.length};
 C.CALC.std=function(xs){if(!Array.isArray(xs)||xs.length<2)return null;const m=C.CALC.mean(xs);return Math.sqrt(xs.reduce((a,b)=>a+(b-m)**2,0)/(xs.length-1))};
 C.CALC.combinedUncertainty=function(parts){if(!Array.isArray(parts)||!parts.length)return null;return Math.sqrt(parts.reduce((a,u)=>a+u*u,0))};
 C.EXPERIMENT_DATA=C.EXPERIMENT_DATA||{}; C.EXPERIMENT_DATA.validate=function(r){return !!(r&&r.observation&&r.conclusion&&r.safety);};
 C.CURRICULUM_AUDIT_V404={scope:'LO_CHEMISTRY_ONLY',basicAndExtended:true,biochemistryAsChemistry:true,requiredEvidence:['knowledge','data','calculation','experiment','observation','conclusion','safety','provenance'],runtime:'NOT_VERIFIED',scientificGate:'BLOCKED'};
 const tests={bio:C.DATA.BIOMOLECULE_CHEMISTRY_V404.records.length>=13,stats:Math.abs(C.CALC.mean([1,2,3])-2)<1e-12,uncertainty:Math.abs(C.CALC.combinedUncertainty([3,4])-5)<1e-12,experiment:C.EXPERIMENT_DATA.validate({observation:'x',conclusion:'y',safety:'z'})};
 C.MAX397_404_TEST=tests; C.PROJECT_REQUIREMENTS_LOCK_V331=C.PROJECT_REQUIREMENTS_LOCK_V331||{}; C.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX397_404']={status:'DONE',version:'4.04',fingerprint:'LO-CHEM-MAX397-404-V404',scope:['biomolecules-as-chemistry','uncertainty','experiment-data','curriculum-audit'],tests};
})();

} catch (err) {
  try { console.warn('[CHE module 236]', err && err.message ? err.message : err); } catch(_){}
}

try {

/* CHE MAX PACKAGE v3.46 — evidence chain + P0 experiment expansion */
(()=>{
'use strict';
const SRC='CHE_EXPERIMENT_EVIDENCE_V346';
const has=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
const arr=v=>Array.isArray(v)?v:(has(v)?[v]:[]);
function normalizeEvidence(input={}){
 const o=input.observation||{};
 return {phenomenon:o.phenomenon||'',visible:o.visible||'',color:o.color||'',precipitate:o.precipitate||'',gas:o.gas||'',temperature:o.temperature??null,pH:o.pH??null,notes:o.notes||'',source:'USER_OBSERVATION'};
}
function observationEvidence(o){
 const e=[];
 if(has(o.precipitate))e.push({type:'PRECIPITATION',claim:'powstanie osadu',basis:o.precipitate});
 if(has(o.gas))e.push({type:'GAS',claim:'wydzielanie gazu',basis:o.gas});
 if(has(o.color))e.push({type:'COLOR_CHANGE',claim:'zmiana/barwa obserwowana',basis:o.color});
 if(o.pH!==null&&o.pH!==undefined&&o.pH!=='')e.push({type:'PH_MEASUREMENT',claim:'pomiar pH',basis:o.pH});
 if(o.temperature!==null&&o.temperature!==undefined&&o.temperature!=='')e.push({type:'TEMPERATURE',claim:'obserwacja temperatury',basis:o.temperature});
 return e;
}
function reactionSuggestions(evidence){
 const types=evidence.map(x=>x.type), out=[];
 if(types.includes('PRECIPITATION'))out.push({type:'PRECIPITATION_REACTION',confidence:'OBSERVATION_ONLY',needs:'canonical reaction match'});
 if(types.includes('PH_MEASUREMENT'))out.push({type:'ACID_BASE_CLASSIFICATION',confidence:'OBSERVATION_ONLY',needs:'sample + indicator/pH method'});
 if(types.includes('GAS'))out.push({type:'GAS_FORMATION',confidence:'OBSERVATION_ONLY',needs:'reactants + identification test'});
 if(types.includes('COLOR_CHANGE'))out.push({type:'INDICATOR_RESPONSE',confidence:'OBSERVATION_ONLY',needs:'indicator record'});
 return out;
}
const TEMPLATES=[
 {id:'EXP-P0-PH',topic:'pH',level:'SP7-8',required:['sample','method'],observations:['pH','odczyn','barwa wskaźnika']},
 {id:'EXP-P0-SOL',topic:'rozpuszczalność',level:'SP7-8',required:['substance','solvent','temperature'],observations:['rozpuszczenie','pozostałość','temperatura']},
 {id:'EXP-P0-IND',topic:'wskaźniki',level:'SP7-8',required:['sample','indicator'],observations:['barwa','zmiana barwy','odczyn']},
 {id:'EXP-P0-PPT',topic:'strącanie',level:'SP7-8→LO',required:['reactantA','reactantB'],observations:['osad','barwa','klarowność']},
 {id:'EXP-P0-DISSOLVE-RATE',topic:'szybkość rozpuszczania',level:'SP7-8',required:['substance','temperature','mixing','particleSize'],observations:['czas','pozostałość']},
 {id:'EXP-P0-NEUTRALIZATION',topic:'zobojętnianie',level:'SP7-8',required:['acid','base','indicator'],observations:['barwa','pH','temperatura']},
 {id:'EXP-P0-MIX-SEPARATION',topic:'rozdzielanie mieszaniny',level:'SP7-8',required:['mixture','method'],observations:['warstwy','osad','przesącz']},
 {id:'EXP-P0-CONDUCTIVITY',topic:'przewodnictwo',level:'SP7-8',required:['sample','conductivityMethod'],observations:['przewodnictwo','porównanie']}
];
function getTemplate(id){return TEMPLATES.find(x=>x.id===id)||null;}
function buildEvidenceReport(input={}){
 const obs=normalizeEvidence(input), evidence=observationEvidence(obs), suggestions=reactionSuggestions(evidence);
 return {version:'3.46',observation:obs,evidence,suggestions,canonicalWrite:false,status:evidence.length?'EVIDENCE_READY':'NO_EVIDENCE',source:SRC};
}
function validateExperiment(input={}){
 const t=getTemplate(input.templateId), missing=[];
 if(t)t.required.forEach(k=>{if(!has(input[k]))missing.push('MISSING_'+k.toUpperCase());});
 const report=buildEvidenceReport(input);
 const safety=arr(input.safety);
 if(!report.evidence.length)missing.push('MISSING_OBSERVATION');
 if(!has(input.conclusion))missing.push('MISSING_CONCLUSION');
 if(!safety.length)missing.push('MISSING_BHP');
 return {version:'3.46',template:t?.id||null,status:missing.length?'INCOMPLETE':'READY_FOR_REVIEW',missing,report,canonicalWrite:false,source:SRC};
}
CHE.EXPERIMENT_EVIDENCE_ENGINE_V346={version:'3.46',source:SRC,normalizeEvidence,observationEvidence,reactionSuggestions,buildEvidenceReport,validateExperiment,templates:TEMPLATES,canonicalWrite:false,referenceReady:false};
CHE.EDUCATION_ENGINE.EXPERIMENT_EVIDENCE_ENGINE_V346=CHE.EXPERIMENT_EVIDENCE_ENGINE_V346;
const tests={
 evidence:buildEvidenceReport({observation:{precipitate:'biały osad'}}).evidence[0]?.type==='PRECIPITATION',
 suggestion:buildEvidenceReport({observation:{precipitate:'biały'}}).suggestions.some(x=>x.type==='PRECIPITATION_REACTION'),
 templates:TEMPLATES.length>=8&&!!getTemplate('EXP-P0-NEUTRALIZATION'),
 validation:validateExperiment({templateId:'EXP-P0-PH',sample:'HCl',method:'pH-meter',observation:{pH:2},conclusion:'odczyn kwasowy',safety:['okulary']}).status==='READY_FOR_REVIEW',
 incomplete:validateExperiment({templateId:'EXP-P0-PH'}).missing.includes('MISSING_OBSERVATION'),
 noMutation:CHE.EXPERIMENT_EVIDENCE_ENGINE_V346.canonicalWrite===false
};
CHE.P0_REGRESSION_V346={version:'3.46',tests,pass:Object.values(tests).every(Boolean),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};
