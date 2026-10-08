try {

(function(){
  const CHE=window.CHE=window.CHE||{};
  CHE.PROJECT_POLICY=CHE.PROJECT_POLICY||{};
  CHE.PROJECT_POLICY.ONE_PROMPT_MAX_RUN={
    enabled:true,
    mode:'MAX_COherent_BATCH',
    rule:'One user prompt authorizes the largest sensible coherent batch: important, dependent and smaller maintenance tasks are combined; do not reduce scope merely because the prompt is short.',
    preserveArchitecture:'ONE_ENGINE_ONE_DATA',
    validateBeforeExpand:true,
    repairBeforeNewDuplication:true,
    recordInPlan:true,
    noConfirmationForNextSafeStep:true
  };
  CHE.PROJECT_POLICY.NEXT_MD_MUST_NOT_MINIMIZE_SCOPE=true;

  CHE.EDUCATION=CHE.EDUCATION||{};
  CHE.EDUCATION.CURRICULUM_COVERAGE_V331={
    sourceBasis:['ZPE_SP_IV_VIII_2025_2026','ZPE_LO_TECH_2025_2026'],
    SP7_8:['substances_properties','safety_pictograms_BHP','mixtures_separation','formulae_symbols','mass_density_volume','atomic_structure','valence','molecular_ionic_equations','mass_charge_conservation','exo_endo','catalyst','O2_H2','acids_bases_salts','pH','organic_biomolecules'],
    LO_BIOL_CHEM:['mole_Avogadro','molar_mass','stoichiometry','empirical_real_formula','gas_volume','electron_subshell_configuration','periodic_properties','ionic_equations','Bronsted_pairs','equilibria','redox','organic_nomenclature','biomolecules','experiments_data_credibility'],
    status:'CURRICULUM_MAP_ONLY',
    referenceReady:false
  };

  CHE.ELECTRONIC_MODEL=CHE.ELECTRONIC_MODEL||{};
  const expected={
    1:['1s1'],2:['1s2'],3:['1s2','2s1'],4:['1s2','2s2'],5:['1s2','2s2','2p1'],6:['1s2','2s2','2p2'],7:['1s2','2s2','2p3'],8:['1s2','2s2','2p4'],9:['1s2','2s2','2p5'],10:['1s2','2s2','2p6'],
    11:['1s2','2s2','2p6','3s1'],12:['1s2','2s2','2p6','3s2'],13:['1s2','2s2','2p6','3s2','3p1'],14:['1s2','2s2','2p6','3s2','3p2'],15:['1s2','2s2','2p6','3s2','3p3'],16:['1s2','2s2','2p6','3s2','3p4'],17:['1s2','2s2','2p6','3s2','3p5'],18:['1s2','2s2','2p6','3s2','3p6'],
    19:['1s2','2s2','2p6','3s2','3p6','4s1'],20:['1s2','2s2','2p6','3s2','3p6','4s2']
  };
  CHE.ELECTRONIC_MODEL.CONFIG_AUDIT_V331=function(){
    const out=[];
    for(const z of Object.keys(expected).map(Number)){
      const e=expected[z];
      out.push({Z:z,expected:e,occupancy:e.reduce((s,x)=>s+Number(x.slice(2)),0),status:e.reduce((s,x)=>s+Number(x.slice(2)),0)===z?'PASS':'FAIL'});
    }
    return {scope:'Z=1..20',records:out,pass:out.every(x=>x.status==='PASS'),source:'EDUCATIONAL_REFERENCE_PATTERN',referenceReady:false};
  };

  CHE.STRUCTURE.VIEW_ADAPTER_V331={
    contract:'CHE.STRUCTURE',
    outputs:['2D_bonds','bond_order_labels','angle_labels','3D_geometry'],
    rule:'projection-only: no chemistry mutation and no duplicate molecular database',
    makeProjection:function(graph){
      if(!graph||typeof graph!=='object') return {ok:false,error:'GRAPH_REQUIRED'};
      const atoms=Array.isArray(graph.atoms)?graph.atoms:[];
      const bonds=Array.isArray(graph.bonds)?graph.bonds:[];
      const angles=Array.isArray(graph.angles)?graph.angles:[];
      return {ok:true,atomCount:atoms.length,bondCount:bonds.length,angleCount:angles.length,bonds:bonds.map(b=>({a:b.a??b.from,b:b.b??b.to,order:b.order??1})),angles:angles.map(a=>({center:a.center??a.vertex,value:a.value??a.angleDeg??null,unit:a.unit||'deg'}))};
    }
  };

  CHE.RUNTIME=CHE.RUNTIME||{};
  CHE.RUNTIME.MINIMAL_BROWSER_HARNESS_V331={
    version:'3.31',
    startedAt:null,
    status:'NOT_RUN',
    checks:[],
    run:function(){
      this.startedAt=Date.now();
      const c=[];
      const add=(id,ok,detail)=>c.push({id,ok:!!ok,detail});
      add('CHE_PRESENT',!!window.CHE,'window.CHE');
      add('DATA_PRESENT',!!window.CHE.DATA,'CHE.DATA');
      add('STRUCTURE_PRESENT',!!window.CHE.STRUCTURE,'CHE.STRUCTURE');
      add('EDUCATION_ENGINE_PRESENT',!!window.CHE.EDUCATION_ENGINE,'CHE.EDUCATION_ENGINE');
      add('PROJECT_POLICY_PRESENT',!!window.CHE.PROJECT_POLICY?.ONE_PROMPT_MAX_RUN,'persistent policy');
      add('ELECTRON_AUDIT',!!window.CHE.ELECTRONIC_MODEL?.CONFIG_AUDIT_V331,'electron API');
      if(window.CHE.ELECTRONIC_MODEL?.CONFIG_AUDIT_V331){const a=window.CHE.ELECTRONIC_MODEL.CONFIG_AUDIT_V331(); add('ELECTRON_CONFIG_1_20',a.pass,`${a.records.length} records`);}
      const domReady=document.readyState==='interactive'||document.readyState==='complete';
      add('DOM_READY',domReady,document.readyState);
      this.checks=c; this.status=c.every(x=>x.ok)?'PASS':'PARTIAL';
      return {status:this.status,checks:c,elapsedMs:Date.now()-this.startedAt};
    }
  };

  CHE.REGRESSION=CHE.REGRESSION||{};
  CHE.REGRESSION.V331=function(){
    const e=CHE.ELECTRONIC_MODEL.CONFIG_AUDIT_V331();
    const p=CHE.PROJECT_POLICY.ONE_PROMPT_MAX_RUN.enabled===true;
    const s=!!CHE.STRUCTURE.VIEW_ADAPTER_V331;
    return {version:'3.31',policy:p,electrons:e.pass,structureAdapter:s,pass:p&&e.pass&&s};
  };
})();

} catch (err) {
  try { console.warn('[CHE module 216]', err && err.message ? err.message : err); } catch(_){}
}

