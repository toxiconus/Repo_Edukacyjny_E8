

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const old=E.AUDIT?.run;
if(typeof old==='function'&&!E.AUDIT.__v250Wrapped){
 const base=old.bind(E.AUDIT);
 E.AUDIT.run=function(){
  const r=base(), extra=[];
  const add=(id,name,good,detail)=>extra.push({id,group:'v250',name,ok:!!good,detail:detail||''});
  const dl=C.DATA_LINEAGE?.run?.(); add('V250-001','legacy/data lineage',!!dl?.value?.ok,dl?.value?.orphans?.issues?.length?JSON.stringify(dl.value.orphans.issues):'');
  const sp=C.SPECTRA_CONTRACT; add('V250-002','spectra valid IR',sp?.validate?.({type:'IR',peaks:[{axis:1700,unit:'cm-1',uncertainty:5}],provenance:[{source:'test',confidence:'HIGH'}]})?.value?.ok===true);
  add('V250-003','spectra rejects wrong unit',sp?.normalizePeak?.({type:'IR',axis:1700,unit:'ppm'})?.ok===false);
  add('V250-004','spectra rejects negative uncertainty',sp?.normalizePeak?.({type:'MS',axis:18,unit:'m/z',uncertainty:-1})?.ok===false);
  const mg=C.MECHANISM_GRAPH; const mr=mg?.validateReaction?.({id:'v250-rx',reactants:[{formula:'H2'}],products:[{formula:'H2'}]}); add('V250-005','mechanism graph from reaction',!!mr?.value?.validation?.ok);
  const bad=mg?.validate?.({nodes:[{id:'a',type:'state',moleculeIds:[]}],edges:[{id:'x',type:'transform',from:'a',to:'missing'}]}); add('V250-006','mechanism graph rejects broken edge',bad?.value?.ok===false);
  const er=C.ELECTRONIC_REGRESSION?.audit?.(); add('V250-007','neutral configuration exceptions',!!er?.value?.ok,JSON.stringify(er?.value?.rows||[]));
  const ei=C.ELECTRONIC_REGRESSION?.auditIons?.(); add('V250-008','transition-metal ion removal',!!ei?.value?.ok,JSON.stringify(ei?.value?.rows||[]));
  const pr=C.PROVENANCE?.create?.({source:'COMPUTED',method:'unit-test',confidence:0.9}); add('V250-009','provenance accepts explicit source/method',!!pr?.ok);
  const contract=E.CONTRACT?.audit?.(); add('V250-010','registry/contract after v250',!!contract?.ok,contract?.issues?.length?JSON.stringify(contract.issues):'');
  r.groups=r.groups||{};r.groups.v250=extra;r.summary=r.summary||{};r.summary.v250={total:extra.length,failed:extra.filter(x=>!x.ok).length};r.v250=extra;const sa=C.SCIENCE_AUDIT?.audit?.(); extra.push({id:'V254-001',group:'v254',name:'scientific data audit',ok:!!sa?.value?.ok,detail:JSON.stringify(sa?.value||{})}); r.ok=!!r.ok&&extra.every(x=>x.ok);r.version=E.version;r.contractVersion=E.contractVersion;r.schemaVersion=E.schemaVersion;E.lifecycle={state:r.ok?'ready':'blocked',auditedAt:new Date().toISOString()};return r;
 };
 E.AUDIT.__v250Wrapped=true;
}
if(E.registry){E.registry.DATA_LINEAGE={layer:'META',owner:'CHE.DATA_LINEAGE',role:'ciągłość danych, legacy baseline i orphan scan',depends:['DATA','REACTION']};E.registry.ELECTRONIC_REGRESSION={layer:'META',owner:'CHE.ELECTRONIC_REGRESSION',role:'regresje konfiguracji wyjątkowych i jonów',depends:['ATOM','ELECTRONIC_MODEL']};}
if(E.modules){E.modules.DATA_LINEAGE='2.50';E.modules.ELECTRONIC_REGRESSION='2.50';}
E.version='2.54';E.contractVersion='2.54';E.schemaVersion='2.54';
if(E.PUBLIC)E.PUBLIC.version='2.54';
if(E.API_CONTRACT)E.API_CONTRACT.version='2.54';
if(E.RUNTIME)E.RUNTIME.version='2.54';
if(E.REGRESSION)E.REGRESSION.version='2.54';
})(window);

} catch (err) {
  try { console.warn('[CHE module 71]', err && err.message ? err.message : err); } catch(_){}
}