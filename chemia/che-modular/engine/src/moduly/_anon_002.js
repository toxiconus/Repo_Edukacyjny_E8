

(function(g){
  function exportPack(){
    const C = g.CHE;
    if(!C || !C.DATA) return { ok:false, error:"CHE.DATA niedostępne — wbudowany silnik nie został uruchomiony" };
    const D = C.DATA;
    const elements = (D.ELEMENTS_118||[]).map(e=>({
      z:e.z, s:e.s, n:e.n, mass:e.mass, en:e.en, g:e.g, p:e.p, t:e.t, block:e.block
    }));
    const props = {};
    Object.keys(D.ATOMIC_PROPS||{}).forEach(k=>{
      const p = D.ATOMIC_PROPS[k];
      props[k] = {
        ar:p.atomicRadius, cr:p.covalentRadius, vdw:p.vdwRadius,
        en:p.electronegativityPauling, ea:p.electronAffinity,
        ie:p.ionizationEnergies, ox:p.oxidationStates, ion:p.ionicRadius,
        pol:p.polarizability, mp:p.meltingPoint, bp:p.boilingPoint,
        rho:p.density, st:p.stateSTP, cs:p.crystalStructure
      };
    });
    const isotopes = D.ISOTOPES || {};
    const fie = D.FIRST_IONIZATION_ENERGY || {};
    const configs = {};
    const ions = {};
    const nuclei = {};
    let errors = 0;
    if(C.ATOM && C.ATOM.build){
      elements.forEach(e=>{
        try{
          const a = C.ATOM.build(e.s, 0);
          if(a) configs[e.s] = {
            full:a.configFull, short:a.configShort, shells:a.configShells,
            valence:a.valenceSubshells, unpaired:a.unpairedCount
          };
          
          [-1,1,2,3].forEach(ch=>{
            try{
              const ai = C.ATOM.build(e.s, ch);
              if(ai && ai.configFull){
                ions[e.s+(ch>0?'+'+ch:''+ch)] = ai.configFull;
              }
            }catch(_){ errors++; }
          });
        }catch(_){ errors++; }
      });
    }
    if(C.NUCLEUS && C.NUCLEUS.build){
      elements.forEach(e=>{
        try{
          const n = C.NUCLEUS.build(e.s);
          if(n) nuclei[e.s] = {
            A:n.A, Z:n.Z, N:n.N,
            B:n.bindingEnergyMeV, BpA:n.bindingEnergyPerNucleon,
            r:n.radiusFm, stab:n.stability
          };
        }catch(_){ errors++; }
      });
    }
    return {
      ok:true,
      version: (C.ENGINE&&C.ENGINE.version)||null,
      dataVersion: (C.ENGINE&&C.ENGINE.dataVersion)||null,
      build: (C.ENGINE&&C.ENGINE.build)||null,
      exportedAt: new Date().toISOString(),
      errors,
      elements, props, isotopes, fie, configs, ions, nuclei,
      schoolPack: (D.SCHOOL_PACK)||null,
      counts: {
        elements:elements.length,
        props:Object.keys(props).length,
        isotopes:Object.keys(isotopes).length,
        configs:Object.keys(configs).length,
        ions:Object.keys(ions).length,
        nuclei:Object.keys(nuclei).length
      }
    };
  }
  function downloadJSON(filename){
    const pack = exportPack();
    const blob = new Blob([JSON.stringify(pack, null, 2)], {type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename || "che_data_pack.json";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href), 2000);
    return pack;
  }
  g.CHE_DATA_PACK = { export: exportPack, downloadJSON, version: "2.1" };
  try{ console.info("[CHE_DATA_PACK v2.1] CHE_DATA_PACK.export() / .downloadJSON()"); }catch(_){ errors++; }
})(window);

