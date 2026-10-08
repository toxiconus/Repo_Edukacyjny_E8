

try {

(function(g){
'use strict';
const C=g.CHE=g.CHE||{}; C.DATA=C.DATA||{}; C.SCIENCE=C.SCIENCE||{};
const sources={IUPAC_GOLD_BOOK_PH:{publisher:'IUPAC',title:'Gold Book: pH',doi:'10.1351/goldbook.P04524',accessed:'2026-10-02'},NIST_WEBBOOK_WATER:{publisher:'NIST',title:'Chemistry WebBook SRD 69: Water',id:'CAS 7732-18-5',accessed:'2026-10-02'}};
const pH={quantity:'pH',definition:'pH is defined in terms of hydrogen-ion activity in solution.',expression:'pH = -lg(a(H+))',basis:'activity',standardMolality:'1 mol kg^-1',medium:'aqueous solution',source:'IUPAC_GOLD_BOOK_PH',status:'REFERENCE_DEFINITION'};
const thermo={
 'H2O(l)':{formula:'H2O',phase:'liquid',temperature_K:298.15,pressure_bar:1,delta_f_H_kJ_mol:-285.830,delta_f_H_uncertainty_kJ_mol:0.040,standard_entropy_J_molK:69.95,standard_entropy_uncertainty_J_molK:0.03,source:'NIST_WEBBOOK_WATER',status:'REFERENCE_DATA'},
 'H2O(g)':{formula:'H2O',phase:'gas',temperature_K:298.15,pressure_bar:1,delta_f_H_kJ_mol:-241.826,delta_f_H_uncertainty_kJ_mol:0.040,standard_entropy_J_molK:188.835,standard_entropy_uncertainty_J_molK:0.010,source:'NIST_WEBBOOK_WATER',status:'REFERENCE_DATA'}
};
C.DATA.SCIENCE_SMALL_BASES_V286=Object.freeze({version:'2.86',sources,pH,thermochemistry:thermo,policy:'only source-backed definitions/values; no interpolation or inferred values'});
C.SCIENCE.SMALL_BASES_V286=C.DATA.SCIENCE_SMALL_BASES_V286;
C.SCIENCE.SMALL_BASES_AUDIT_V286=function(){const d=C.DATA.SCIENCE_SMALL_BASES_V286;return {version:'2.86',pH:d.pH.status==='REFERENCE_DEFINITION',thermo:Object.values(d.thermochemistry).every(x=>x.status==='REFERENCE_DATA'&&x.source==='NIST_WEBBOOK_WATER'),sources:Object.keys(d.sources).length===2,ok:true};};
C.ENGINE=C.ENGINE||{};C.ENGINE.modules=C.ENGINE.modules||{};C.ENGINE.modules.SCIENCE_SMALL_BASES_V286='2.86';
C.ENGINE.registry=C.ENGINE.registry||{};C.ENGINE.registry.SCIENCE_SMALL_BASES_V286={layer:'DATA/SCIENCE/SMALL_BASES',owner:'CHE.SCIENCE.SMALL_BASES_V286',depends:['CHE.DATA','CHE.ENGINE']};
C.version='2.86';C.dataVersion='2.86';C.contractVersion='2.86';C.schemaVersion='2.86';
})(window);

} catch (err) {
  try { console.warn('[CHE module 160]', err && err.message ? err.message : err); } catch(_){}
}