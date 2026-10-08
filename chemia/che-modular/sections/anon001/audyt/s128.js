

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
const REQUIRED=['equation','balanced','conditions','catalyst','solvent','temperature','pressure','exoEndo','safety','bhp','source','provenance'];
function validate(r){const missing=REQUIRED.filter(k=>r?.[k]==null||r[k]==='');return {ok:missing.length===0,missing};}
function audit(){const a=C.REACTION_AUDIT_V273?.audit?.()||{};return {version:'2.74',records:a.records||0,fieldCoverage:a.fieldCoverage||{},required:REQUIRED,fullyDocumented:(a.records||0)>0?Math.min(...REQUIRED.map(k=>a.fieldCoverage?.[k]??0)):0};}
C.REACTION_SCIENCE_CONTRACT_V274={version:'2.74',required:REQUIRED,validate,audit,policy:'audit first; no mutation of reaction records'};E.modules=E.modules||{};E.modules.REACTION_SCIENCE_CONTRACT_V274='2.74';E.registry=E.registry||{};E.registry.REACTION_SCIENCE_CONTRACT_V274={layer:'CONTRACT/AUDIT',owner:'CHE.REACTION_SCIENCE_CONTRACT_V274',depends:['REACTION_AUDIT_V273','REACTION_SCIENCE_AUDIT']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 128]', err && err.message ? err.message : err); } catch(_){}
}