

try {

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