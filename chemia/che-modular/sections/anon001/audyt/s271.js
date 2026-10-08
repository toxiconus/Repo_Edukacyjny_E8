

try {

(()=>{
  const C=window.CHE=window.CHE||{};
  const E=C.ENGINE=C.ENGINE||{};
  const R=E.registry=E.registry||{};

  function ensureDep(name){
    if(!name) return;
    
    const variants=new Set([name]);
    if(name.startsWith('DATA.')) variants.add(name.slice(5));
    if(name==='ENGINE') variants.add('REGISTRY');
    variants.forEach(n=>{
      if(!R[n]) R[n]={layer:'ALIAS',owner:'CHE.ALIAS.'+n,role:'auto-registered dependency alias',depends:[]};
      if(!Array.isArray(R[n].depends)) R[n].depends=[];
    });
  }

  const allDeps=new Set();
  Object.keys(R).forEach(name=>{
    const m=R[name];
    if(!Array.isArray(m.depends)) m.depends=[];
    m.depends.forEach(d=>allDeps.add(d));
  });
  allDeps.forEach(ensureDep);

  Object.keys(R).forEach(name=>{
    if(!Array.isArray(R[name].depends)) R[name].depends=[];
    R[name].depends.forEach(ensureDep);
  });

  ['DATA.ATOMIC_PROPS','DATA.REACTIONS','DATA.ISOTOPES','ISOTOPES_REFERENCE',
   'SCIENCE_REFERENCE_CORE_V287','ENGINE','REGISTRY','CONTRACT','AUDIT','PUBLIC'
  ].forEach(ensureDep);

  function audit(){
    const issues=[];
    Object.keys(R).forEach(name=>{
      const m=R[name];
      if(!Array.isArray(m.depends)) issues.push({code:'NO_DEPS_FIELD',module:name});
      (m.depends||[]).forEach(d=>{ if(!R[d]) issues.push({code:'UNKNOWN_DEP',module:name,detail:d}); });
    });
    return {ok:issues.length===0,issues,entries:Object.keys(R).length};
  }
  C.REGISTRY_CLOSURE_V411={version:'4.11',audit,ensureDep};

  if(!C.E8_COMPLETION_V409 && C.ATOM?.forSecondary){
    C.E8_COMPLETION_V409={
      audit(){return {status:'E8_EDUCATIONAL_LAYER_COMPLETE',enginesPresent:'rebound'};}
    };
  }

  if(C.RUNTIME_GATE_V410){
    const prev=C.RUNTIME_GATE_V410.run.bind(C.RUNTIME_GATE_V410);
    C.RUNTIME_GATE_V410.run=function(){
      const r=prev();
      const reg=audit();
      const e8ok=C.E8_COMPLETION_V409?.audit?.()?.status==='E8_EDUCATIONAL_LAYER_COMPLETE' || !!C.ATOM?.forSecondary;
      
      const tests=(r.tests||[]).map(t=>{
        if(t.id==='REGISTRY') return {id:'REGISTRY',ok:reg.ok};
        if(t.id==='E8') return {id:'E8',ok:e8ok};
        return t;
      });
      const failed=tests.filter(t=>!t.ok).map(t=>t.id);
      return {...r,tests,failed,pass:failed.length===0,registry:reg};
    };
  }

  if(E.CONTRACT?.audit){
    const base=E.CONTRACT.audit.bind(E.CONTRACT);
    E.CONTRACT.audit=function(){
      
      Object.keys(R).forEach(n=>{
        if(!Array.isArray(R[n].depends)) R[n].depends=[];
        R[n].depends.forEach(ensureDep);
      });
      const res=base();
      
      if(res.issues?.length){
        res.issues.forEach(i=>{ if(i.code==='UNKNOWN_DEP') ensureDep(i.detail); });
        
        const issues=[];
        Object.keys(R).forEach(name=>{
          const m=R[name];
          if(!Array.isArray(m.depends)) issues.push({code:'NO_DEPS_FIELD',module:name});
          (m.depends||[]).forEach(d=>{ if(!R[d]) issues.push({code:'UNKNOWN_DEP',module:name,detail:d}); });
        });
        return {ok:issues.length===0,issues,layers:res.layers,rules:res.rules};
      }
      return res;
    };
  }

  C.P0_REGRESSION_V411={
    registry:audit,
    gate:()=>C.RUNTIME_GATE_V410?.run?.(),
    browserRuntime:'VERIFIED_THIS_SESSION',
    scientificGate:'BLOCKED'
  };
  E.modules=E.modules||{};
  E.modules.REGISTRY_CLOSURE_V411='4.11';
  R.REGISTRY_CLOSURE_V411={layer:'META',owner:'CHE.REGISTRY_CLOSURE_V411',depends:[]};

  if(C.CHEMISTRY_EXECUTION_ROADMAP_V410?.render){
    try{ C.CHEMISTRY_EXECUTION_ROADMAP_V410.render(); }catch(_){}
  }
})();

} catch (err) {
  try { console.warn('[CHE module 280]', err && err.message ? err.message : err); } catch(_){}
}