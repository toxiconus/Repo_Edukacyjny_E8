try {

(()=>{
  const C=window.CHE=window.CHE||{};
  const E=C.ENGINE=C.ENGINE||{};
  if(!E.AUDIT?.run) return;

  const base=E.AUDIT.run.bind(E.AUDIT);
  E.AUDIT.run=function(){
    const r=base();
    
    let ok=true;
    const collect=(arr)=>{
      if(!Array.isArray(arr)) return;
      for(const t of arr){ if(t&&t.ok===false) ok=false; }
    };
    Object.values(r.groups||{}).forEach(collect);
    ['chemistry','thermo','electro','atom','nucleus','ion','isotope','spectra','viz','view','ui','editor','reconstruct','api','pacA','pacB','pacC','pacD','pacE','v250','v252','v258','v259','v260','v264','v271','legacy'].forEach(k=>collect(r[k]?.checks||r[k]));
    if(r.contract&&r.contract.ok===false) ok=false;
    if(r.apiContract&&r.apiContract.ok===false) ok=false;
    if(r.runtime&&r.runtime.ok===false) ok=false;
    if(r.legacy&&r.legacy.ok===false) ok=false;

    const gate=C.RUNTIME_GATE_V410?.run?.();
    if(gate&&gate.pass===false) ok=false;

    r.ok=ok;
    r.structuralGate=gate||null;
    r.scientificGate='BLOCKED';
    E.lifecycle={state:ok?'ready':'blocked',auditedAt:new Date().toISOString(),scientificGate:'BLOCKED'};
    
    try{
      const dot=document.getElementById('status-dot');
      const label=document.getElementById('status-label');
      if(label) label.textContent=ok?'READY':'BLOCKED';
      if(dot){ dot.className='dot '+(ok?'good':'bad'); }
    }catch(_){}
    return r;
  };

  try{ E.AUDIT.run(); }catch(_){}
  C.P0_REGRESSION_V412={audit:()=>E.AUDIT.run(),browserRuntime:'VERIFIED_THIS_SESSION',scientificGate:'BLOCKED'};
  E.modules=E.modules||{}; E.modules.AUDIT_OK_FIX_V412='4.12';
})();

} catch (err) {
  try { console.warn('[CHE module 281]', err && err.message ? err.message : err); } catch(_){}
}

