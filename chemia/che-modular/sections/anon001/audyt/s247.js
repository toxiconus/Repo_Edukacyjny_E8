

try {

(function(){
  window.CHE=window.CHE||{}; const CHE=window.CHE;
  CHE.DATA=CHE.DATA||{}; CHE.DATA.equilibrium=CHE.DATA.equilibrium||{};
  CHE.DATA.equilibrium.contract={sourceType:'EDUCATIONAL_MODEL',definition:'For aA+bB⇌cC+dD, Kc=[C]^c[D]^d/[A]^a[B]^b; pure solids/liquids omitted.',conditions:['temperature','phase','concentrations'],limitations:['K depends on temperature','catalyst does not change K','Q compares current composition with K']};
  CHE.EQUILIBRIUM_ENGINE_V364={version:'3.64',source:'CHE.EDUCATION_ENGINE',
    kc:function(spec){const r=spec||{}, num=(r.products||[]).reduce((s,x)=>s*Math.pow(Number(x.c),Number(x.nu)),1), den=(r.reactants||[]).reduce((s,x)=>s*Math.pow(Number(x.c),Number(x.nu)),1); if(!Number.isFinite(num)||!Number.isFinite(den)||den===0)return {status:'INCOMPLETE'}; return {status:'READY',Kc:num/den};},
    reactionQuotient:function(spec){return this.kc(spec);},
    direction:function(K,Q,tol=1e-12){if(!Number.isFinite(K)||!Number.isFinite(Q))return 'UNKNOWN'; if(Math.abs(K-Q)<=tol*Math.max(1,Math.abs(K)))return 'EQUILIBRIUM'; return Q<K?'FORWARD':'REVERSE';},
    leChatelier:function(change){const c=String(change||'').toLowerCase(); if(c.includes('reactant')||c.includes('substrate'))return 'TOWARD_PRODUCTS'; if(c.includes('product'))return 'TOWARD_REACTANTS'; if(c.includes('pressure_high')||c.includes('volume_low'))return 'TOWARD_FEWER_GAS_MOLES'; if(c.includes('pressure_low')||c.includes('volume_high'))return 'TOWARD_MORE_GAS_MOLES'; return 'CONTEXT_REQUIRED';},
    test:function(){const k=this.kc({reactants:[{c:2,nu:1}],products:[{c:4,nu:1}]}); return k.Kc===2 && this.direction(2,1)==='FORWARD' && this.leChatelier('add reactant')==='TOWARD_PRODUCTS';}
  };
  CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};
  CHE.PROJECT_REQUIREMENTS_LOCK_V331['LO_CHEM_MAX05_EQUILIBRIUM']={status:'DONE',version:'3.64',fingerprint:'LO-CHEM-MAX05-EQUILIBRIUM-V364',scope:['dynamic equilibrium','Kc','reaction quotient Q','equilibrium direction','Le Chatelier']};
  CHE.P0_REGRESSION_V364=Object.assign({},CHE.P0_REGRESSION_V364||{},{equilibrium:true,equilibriumTest:CHE.EQUILIBRIUM_ENGINE_V364.test(),browserRuntime:'NOT_VERIFIED'});
})();

} catch (err) {
  try { console.warn('[CHE module 253]', err && err.message ? err.message : err); } catch(_){}
}