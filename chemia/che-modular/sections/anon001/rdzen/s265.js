

try {

(()=>{
  const C=window.CHE=window.CHE||{};
  const RV=C.REACTION_VALIDATOR;
  if(!RV?.validate||!C.CHEM?.balanceReaction) return;
  const prior={validate:RV.validate,transform:RV.transform,validateTransformation:RV.validateTransformation};
  const ok=value=>C.OK?C.OK(value):{ok:true,value};
  const formulaOnly=side=>Array.isArray(side)&&side.length>0&&side.every(x=>
    typeof x?.formula==='string'&&x.formula.trim()&&(!Array.isArray(x.atoms)||x.atoms.length===0));
  function validate(reaction,options){
    const r=reaction||{};
    if(!(formulaOnly(r.reactants)&&formulaOnly(r.products))) return prior.validate(reaction,options);
    const balance=C.CHEM.balanceReaction(r);
    const errors=[],warnings=[];
    if(!balance.ok) errors.push({code:'REACTION_UNBALANCED_OR_INVALID',balance});
    if(options?.requireDeclaredChanges&&!(r.changes&&(r.changes.bondsBroken?.length||r.changes.bondsFormed?.length||r.changes.bondOrderChanges?.length))) warnings.push({code:'CHANGES_NOT_APPLICABLE_TO_FORMULA_RECORD'});
    const conditions=r.conditions||{};
    if(options?.requireConditions&&!Object.values(conditions).some(v=>v!=null&&v!==''&&(Array.isArray(v)?v.length:true))) warnings.push({code:'NO_REACTION_CONDITIONS'});
    const result={ok:errors.length===0,status:errors.length?'INVALID':warnings.length?'VALID_WITH_WARNING':'VALID',errors,warnings,
      balance,mapping:{complete:true,mapping:{},method:'FORMULA_LEVEL_NO_ATOM_MAPPING'},
      changes:{bondsBroken:[],bondsFormed:[],bondOrderChanges:[]},source:'COMPUTED',representation:'FORMULA_SPECIES'};
    return ok(result);
  }
  function transform(reaction,options){
    const result=validate(reaction,options);
    if(!result?.value?.ok)return result;
    if(result.value.representation!=='FORMULA_SPECIES')return prior.transform(reaction,options);
    return ok({...reaction,validation:result.value,status:result.value.status});
  }
  function validateTransformation(before,after,options){
    if(formulaOnly([before])&&formulaOnly([after])) return validate({reactants:[before],products:[after]},options);
    return prior.validateTransformation(before,after,options);
  }
  C.REACTION_VALIDATOR={...RV,validate,transform,validateTransformation};
  C.FORMULA_REACTION_VALIDATOR_V385={version:'3.85',representation:'formula species + stoichiometric coefficients',graphPathPreserved:true,
    test(){
      const balanced=validate({reactants:[{formula:'H2',coef:2},{formula:'O2',coef:1}],products:[{formula:'H2O',coef:2}]});
      const unbalanced=validate({reactants:[{formula:'H2',coef:1},{formula:'O2',coef:1}],products:[{formula:'H2O',coef:1}]});
      return {balanced:!!balanced.value?.ok,unbalanced:unbalanced.value?.ok===false,pass:!!balanced.value?.ok&&unbalanced.value?.ok===false};
    }};
  C.P0_REGRESSION_V385={formulaReaction:C.FORMULA_REACTION_VALIDATOR_V385.test(),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};
})();

} catch (err) {
  try { console.warn('[CHE module 274]', err && err.message ? err.message : err); } catch(_){}
}