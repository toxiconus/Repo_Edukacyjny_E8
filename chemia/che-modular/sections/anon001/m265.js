try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.biochemistry.nucleicAcids=CHE.DATA.biochemistry.nucleicAcids||{};
  CHE.DATA.biochemistry.nucleicAcids.records=[{id:'A',DNA:'adenine',RNA:'adenine',pairing:['T','U']},{id:'T',DNA:'thymine',pairing:['A']},{id:'U',RNA:'uracil',pairing:['A']},{id:'G',DNA:'guanine',RNA:'guanine',pairing:['C']},{id:'C',DNA:'cytosine',RNA:'cytosine',pairing:['G']}];
  CHE.NUCLEIC_ACID_ENGINE_V376={version:'3.76',pair:function(base,acidType){const b=String(base).toUpperCase(),dna=String(acidType).toUpperCase()==='DNA';const pairs=dna?{A:'T',T:'A',G:'C',C:'G'}:{A:'U',U:'A',G:'C',C:'G'};return pairs[b]?{status:'READY',complement:pairs[b]}:{status:'UNKNOWN'}},test:function(){return this.pair('A','DNA').complement==='T'&&this.pair('A','RNA').complement==='U'}};
  CHE.P0_REGRESSION_V376=Object.assign({},CHE.P0_REGRESSION_V376||{},{dnaRnaChemistry:true,test:CHE.NUCLEIC_ACID_ENGINE_V376.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX376_DNA_RNA_CHEMISTRY']={status:'DONE',version:'3.76',fingerprint:'LO-CHEM-MAX-376-DNA_RNA_CHEMISTRY',scope:['DNA_RNA_CHEMISTRY']};
})();

} catch (err) {
  try { console.warn('[CHE module 265]', err && err.message ? err.message : err); } catch(_){}
}

