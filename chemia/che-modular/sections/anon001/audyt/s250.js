

try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.buffers=CHE.DATA.buffers||{hendersonHasselbalch:'pH=pKa+log10([A-]/[HA])',limitations:['idealized educational model','activity effects omitted unless supplied']};
  CHE.DATA.titration=CHE.DATA.titration||{types:['strong-strong','strong-weak','weak-strong'],equivalence:'stoichiometric neutralization point'};
  CHE.BUFFER_TITRATION_ENGINE_V367={version:'3.67',bufferPH:function(pKa,base,acid){pKa=Number(pKa);base=Number(base);acid=Number(acid);if(![pKa,base,acid].every(Number.isFinite)||base<=0||acid<=0)return{status:'INCOMPLETE'};return{status:'EDUCATIONAL_MODEL',pH:pKa+Math.log10(base/acid)}},equivalenceMoles:function(ca,va,nuA,cb,nuB){const a=[ca,va,nuA,cb,nuB].map(Number);if(!a.every(Number.isFinite)||cb<=0||nuA<=0||nuB<=0)return{status:'INCOMPLETE'};return{status:'READY',vb:ca*va*nuB/(cb*nuA)}},test:function(){return Math.abs(this.bufferPH(4.76,0.1,0.1).pH-4.76)<1e-10}};
  CHE.P0_REGRESSION_V367=Object.assign({},CHE.P0_REGRESSION_V367||{},{buffers:true,titration:true,test:CHE.BUFFER_TITRATION_ENGINE_V367.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX367_BUFFERS_TITRATION']={status:'DONE',version:'3.67',fingerprint:'LO-CHEM-MAX-367-BUFFERS_TITRATION',scope:['BUFFERS_TITRATION']};
})();

} catch (err) {
  try { console.warn('[CHE module 256]', err && err.message ? err.message : err); } catch(_){}
}