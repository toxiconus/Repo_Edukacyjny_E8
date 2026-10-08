try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.organic.functional=CHE.DATA.organic.functional||{classes:['haloalkanes','alcohols','phenols','aldehydes','ketones','carboxylic_acids','esters','amines']};
  CHE.DATA.organic.functional.records=[{id:'ethanol',formula:'C2H5OH',class:'alcohol'},{id:'ethanal',formula:'CH3CHO',class:'aldehyde'},{id:'propanone',formula:'CH3COCH3',class:'ketone'},{id:'ethanoic_acid',formula:'CH3COOH',class:'carboxylic_acid'},{id:'ethyl_ethanoate',formula:'CH3COOCH2CH3',class:'ester'},{id:'methylamine',formula:'CH3NH2',class:'amine'}];
  CHE.ORGANIC_FUNCTIONAL_ENGINE_V374={version:'3.74',classify:function(id){const r=CHE.DATA.organic.functional.records.find(x=>x.id===id);return r?{status:'READY',class:r.class}: {status:'UNKNOWN'}},esterification:function(alcohol,acid){return{status:'EDUCATIONAL_REACTION',products:[alcohol+' + '+acid+' ⇌ ester + H2O'],condition:'acid catalyst / heat as appropriate'}},test:function(){return this.classify('ethanol').class==='alcohol'}};
  CHE.P0_REGRESSION_V374=Object.assign({},CHE.P0_REGRESSION_V374||{},{organicFunctional:true,test:CHE.ORGANIC_FUNCTIONAL_ENGINE_V374.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX374_ORGANIC_FUNCTIONAL']={status:'DONE',version:'3.74',fingerprint:'LO-CHEM-MAX-374-ORGANIC_FUNCTIONAL',scope:['ORGANIC_FUNCTIONAL']};
})();

} catch (err) {
  try { console.warn('[CHE module 263]', err && err.message ? err.message : err); } catch(_){}
}

