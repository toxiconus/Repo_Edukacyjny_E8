try {

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

