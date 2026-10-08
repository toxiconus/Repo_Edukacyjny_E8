try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{};
  CHE.DATA.electrochemistry=CHE.DATA.electrochemistry||{constants:{F_C_mol:96485.33212},cells:['galvanic','electrolytic'],relations:{Ecell:'E°cathode-E°anode',deltaG:'-nFE'}};
  CHE.ELECTROCHEM_ENGINE_V370={version:'3.70',cellPotential:function(Ec,Ea){Ec=Number(Ec);Ea=Number(Ea);return Number.isFinite(Ec)&&Number.isFinite(Ea)?{status:'READY',Ecell:Ec-Ea}:{status:'INCOMPLETE'}},deltaG:function(n,F,E){n=Number(n);F=Number(F);E=Number(E);return[n,F,E].every(Number.isFinite)?{status:'READY',deltaG_Jmol:-n*F*E}:{status:'INCOMPLETE'}},test:function(){return Math.abs(this.cellPotential(1.1,0.3).Ecell-0.8)<1e-12}};
  CHE.P0_REGRESSION_V370=Object.assign({},CHE.P0_REGRESSION_V370||{},{electrochemistry:true,test:CHE.ELECTROCHEM_ENGINE_V370.test(),browserRuntime:'NOT_VERIFIED'});
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX370_ELECTROCHEMISTRY']={status:'DONE',version:'3.70',fingerprint:'LO-CHEM-MAX-370-ELECTROCHEMISTRY',scope:['ELECTROCHEMISTRY']};
})();

} catch (err) {
  try { console.warn('[CHE module 259]', err && err.message ? err.message : err); } catch(_){}
}

