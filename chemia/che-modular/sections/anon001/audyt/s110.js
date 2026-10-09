

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