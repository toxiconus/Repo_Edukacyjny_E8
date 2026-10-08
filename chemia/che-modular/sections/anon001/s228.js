

try {

window.CHE=window.CHE||{};
CHE.EXPERIMENT_OBSERVATION_ENGINE_V344={
 version:'3.44', source:'CHE.EDUCATION_ENGINE',
 normalizeObservation(o){o=o||{};return {phenomenon:String(o.phenomenon||''),visible:String(o.visible||''),temperature:o.temperature??null,ph:o.ph??null,gas:String(o.gas||''),precipitate:String(o.precipitate||''),color:String(o.color||''),notes:String(o.notes||'')};},
 classify(o){const x=this.normalizeObservation(o);return {hasObservation:!!(x.phenomenon||x.visible||x.gas||x.precipitate||x.color||x.notes),hasQuantitative:x.temperature!==null||x.ph!==null,source:'USER_OBSERVATION'};},
 report(input){const obs=this.classify(input.observation);return {problem:String(input.problem||''),hypothesis:String(input.hypothesis||''),procedure:Array.isArray(input.procedure)?input.procedure:[],observation:obs,conclusion:String(input.conclusion||''),equation:String(input.equation||''),safety:Array.isArray(input.safety)?input.safety:[],status:obs.hasObservation&&String(input.conclusion||'').length>0?'READY_FOR_REVIEW':'INCOMPLETE'};}
};
CHE.EXPERIMENT_OBSERVATION_ENGINE_V344.test=(()=>{const r=CHE.EXPERIMENT_OBSERVATION_ENGINE_V344.report({problem:'p',hypothesis:'h',procedure:['x'],observation:{phenomenon:'osad',color:'biały'},conclusion:'c',equation:'Ag+ + Cl- -> AgCl(s)',safety:['BHP']});return r.status==='READY_FOR_REVIEW'&&r.observation.hasObservation;})();
CHE.P0_REGRESSION_V344={experimentObservation:CHE.EXPERIMENT_OBSERVATION_ENGINE_V344.test,source:'ZPE curriculum 2025/2026',browserRuntime:'NOT_VERIFIED'};

} catch (err) {
  try { console.warn('[CHE module 230]', err && err.message ? err.message : err); } catch(_){}
}