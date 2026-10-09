

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