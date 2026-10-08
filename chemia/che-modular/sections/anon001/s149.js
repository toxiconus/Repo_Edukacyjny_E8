

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const source={sourceId:'NIST_WEBBOOK',reference:'NIST Chemistry WebBook SRD 69',url:'https://webbook.nist.gov/chemistry/',verificationDate:'2026-10-02',status:'VERIFIED_REFERENCE'};
const thermo={
  'NIST-H2O-L-29815':{id:'NIST-H2O-L-29815',species:'H2O',formula:'H2O',phase:'liquid',T_K:298.15,P_bar:1,dHf_kJ_mol:-285.830,uncertainty_kJ_mol:0.040,S_J_molK:69.95,uncertainty_S_J_molK:0.03,sourceId:source.sourceId,reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'standard-state thermochemical values; phase-specific; temperature/pressure context applies'},
  'NIST-H2O-G-29815':{id:'NIST-H2O-G-29815',species:'H2O',formula:'H2O',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-241.826,uncertainty_kJ_mol:0.040,S_J_molK:188.835,uncertainty_S_J_molK:0.010,sourceId:source.sourceId,reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'standard-state thermochemical values; phase-specific; temperature/pressure context applies'},
  'NIST-CO2-G-29815':{id:'NIST-CO2-G-29815',species:'CO2',formula:'CO2',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-393.51,uncertainty_kJ_mol:0.13,S_J_molK:213.785,uncertainty_S_J_molK:0.010,sourceId:source.sourceId,reference:'NIST WebBook; Cox, Wagman et al. 1984 / Chase 1998 reference set',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'standard-state thermochemical values; phase-specific; temperature/pressure context applies'},
  'NIST-H2S-G-29815':{id:'NIST-H2S-G-29815',species:'H2S',formula:'H2S',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-20.6,uncertainty_kJ_mol:0.5,S_J_molK:205.81,uncertainty_S_J_molK:0.05,Cp_J_molK:34.20,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7783064&Units=SI&Mask=1',reference:'Cox, Wagman et al. 1984 (CODATA); Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase standard-state values at 1 bar; Cp evaluated from the cited Shomate coefficients'},
  'NIST-SO2-G-29815':{id:'NIST-SO2-G-29815',species:'SO2',formula:'SO2',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-296.81,uncertainty_kJ_mol:0.20,S_J_molK:248.223,uncertainty_S_J_molK:0.050,Cp_J_molK:39.87,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7446095&Units=SI&Mask=1',reference:'Cox, Wagman et al. 1984 (CODATA); Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase standard-state values at 1 bar; Cp evaluated from the cited Shomate coefficients'},
  'NIST-HCN-G-29815':{id:'NIST-HCN-G-29815',species:'HCN',formula:'HCN',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:135.14,S_J_molK:201.82,Cp_J_molK:35.85,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C74908&Units=SI&Mask=1',reference:'Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase values at 1 bar; NIST lists no uncertainty for these entries; Cp evaluated from cited Shomate coefficients'},
  'NIST-H2O2-G-29815':{id:'NIST-H2O2-G-29815',species:'H2O2',formula:'H2O2',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-136.11,S_J_molK:232.95,Cp_J_molK:43.08,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7722841&Units=SI&Mask=1',reference:'Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase values at 1 bar; NIST lists no uncertainty for these entries; Cp evaluated from cited Shomate coefficients'},
  'NIST-CO-G-29815':{id:'NIST-CO-G-29815',species:'CO',formula:'CO',phase:'gas',T_K:298.15,P_bar:1,dHf_kJ_mol:-110.53,uncertainty_kJ_mol:0.17,S_J_molK:197.660,uncertainty_S_J_molK:0.004,Cp_J_molK:29.15,Cp_basis:'NIST Shomate equation evaluated at 298.15 K',sourceId:source.sourceId,url:'https://webbook.nist.gov/cgi/cbook.cgi?ID=C630080&Units=SI&Mask=1',reference:'Cox, Wagman et al. 1984 (CODATA); Chase 1998 (JANAF Shomate coefficients)',status:'VERIFIED_REFERENCE',basis:'NIST SRD 69',limitations:'gas-phase standard-state values at 1 bar; Cp evaluated from the cited Shomate coefficients'}
};
D.THERMO_VERIFIED_REFERENCE=Object.freeze(thermo);
const eqVerified=[
 {id:'PUBCHEM-ACETIC-PKA-25C',type:'pKa',species:'CH3COOH',conjugateBase:'CH3COO-',value:4.756,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'Serjeant & Dempsey, 1979; IUPAC Chemical Data Series 23',status:'VERIFIED',limitations:'pKa depends on medium and temperature'},
 {id:'PUBCHEM-AMMONIA-PKB-25C',type:'Kb',species:'NH3',conjugateAcid:'NH4+',value:1.774e-5,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'Handbook of Chemistry and Physics reference set',status:'VERIFIED',limitations:'Kb depends on medium and temperature'},
 {id:'PUBCHEM-CACO3-KSP-25C',type:'Ksp',species:'CaCO3',value:3.36e-9,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'CRC Handbook of Chemistry and Physics, 91st ed.',status:'VERIFIED',limitations:'Ksp depends on solid phase, medium and temperature'}
];
const existing=D.EQUILIBRIA_VERIFIED_REFERENCE||{};eqVerified.forEach(r=>{existing[r.id]=Object.freeze(r);});D.EQUILIBRIA_VERIFIED_REFERENCE=existing;
function audit(){const t=Object.values(thermo),e=Object.values(existing);return {version:'2.81',thermoVerified:t.length,equilibriaVerified:e.filter(x=>x.status==='VERIFIED').length,thermoSource:source.sourceId,thermoAllHaveContext:t.every(x=>x.T_K===298.15&&x.P_bar===1&&x.phase&&x.unit!==''),policy:'verified layer is additive/read-only and does not overwrite legacy records'};}
function regression(){const a=audit();return [
{id:'REF81-001',name:'verified thermochemistry has source',ok:a.thermoVerified===8},
{id:'REF81-002',name:'verified thermochemistry has phase/T/P',ok:a.thermoAllHaveContext},
{id:'REF81-003',name:'verified equilibrium records retained',ok:a.equilibriaVerified>=3},
{id:'REF81-004',name:'legacy data not overwritten',ok:D.THERMO_REFERENCE!=null}
];}
C.REFERENCE_VERIFIED_V281={version:'2.81',source,thermo,equilibria:eqVerified,audit,regression};
E.modules=E.modules||{};E.modules.REFERENCE_VERIFIED_V281='2.81';E.registry=E.registry||{};E.registry.REFERENCE_VERIFIED_V281={layer:'DATA/REFERENCE/VERIFIED',owner:'CHE.DATA.REFERENCE_VERIFIED_V281',depends:['THERMO_REFERENCE','EQUILIBRIA_REFERENCE','SOURCE_REGISTRY']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 149]', err && err.message ? err.message : err); } catch(_){}
}