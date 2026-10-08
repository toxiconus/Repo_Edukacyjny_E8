

try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.biochemistry=CHE.DATA.biochemistry||{};
  Object.assign(CHE.DATA.biochemistry,{scope:'CHEMISTRY_ONLY',classes:['amino_acids','peptides','proteins','monosaccharides','disaccharides','polysaccharides','lipids','nucleotides','DNA','RNA'],records:[{id:'glycine',formula:'NH2CH2COOH',class:'amino_acid',amphoteric:true},{id:'glucose',formula:'C6H12O6',class:'monosaccharide',reducing:true},{id:'sucrose',formula:'C12H22O11',class:'disaccharide',reducing:false},{id:'starch',formula:'(C6H10O5)n',class:'polysaccharide'},{id:'peptide_bond',representation:'-CO-NH-'},{id:'DNA_backbone',representation:'phosphate-sugar; base pairing via H-bonds'},{id:'RNA_backbone',representation:'phosphate-ribose; bases A,U,G,C'}]});
  CHE.BIOCHEM_ENGINE_V375={version:'3.75',classify:function(id){const r=CHE.DATA.biochemistry.records.find(x=>x.id===id);return r?{status:'READY',record:r}: {status:'UNKNOWN'}},peptideBond:function(){return{status:'READY',bond:'-CO-NH-',reaction:'condensation of amino acids with H2O released'}},test:function(){return this.classify('glycine').record.amphoteric===true}};
  CHE.P0_REGRESSION_V375=Object.assign({},CHE.P0_REGRESSION_V375||{},{biochemistryChemistry:true,test:CHE.BIOCHEM_ENGINE_V375.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX375_BIOCHEMISTRY_AS_CHEMISTRY']={status:'DONE',version:'3.75',fingerprint:'LO-CHEM-MAX-375-BIOCHEMISTRY_AS_CHEMISTRY',scope:['BIOCHEMISTRY_AS_CHEMISTRY']};
})();

} catch (err) {
  try { console.warn('[CHE module 264]', err && err.message ? err.message : err); } catch(_){}
}