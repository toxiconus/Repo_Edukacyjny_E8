

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
 
const thermo={
 H2O_g:{id:'NIST-H2O-G-29815',species:'H2O',formula:'H2O',phase:'gas',T_K:298.15,P_bar:1,
   dHf_kJ_mol:-241.826,uncertainty_kJ_mol:0.040,S_J_molK:188.835,uncertainty_S_J_molK:0.010,
   sourceId:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED',basis:'NIST SRD 69'},
 HCl_g:{id:'NIST-HCL-G-29815',species:'HCl',formula:'HCl',phase:'gas',T_K:298.15,P_bar:1,
   dHf_kJ_mol:-92.31,uncertainty_kJ_mol:0.10,S_J_molK:186.902,uncertainty_S_J_molK:0.005,
   sourceId:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED',basis:'NIST SRD 69'},
 CO2_g:{id:'NIST-CO2-G-29815',species:'CO2',formula:'CO2',phase:'gas',T_K:298.15,P_bar:1,
   dHf_kJ_mol:-393.51,uncertainty_kJ_mol:0.13,S_J_molK:213.785,uncertainty_S_J_molK:0.010,
   sourceId:'NIST_WEBBOOK',reference:'Cox, Wagman et al. 1984; CODATA review',status:'VERIFIED',basis:'NIST SRD 69'}
};
const equilibria=[
 {id:'PUBCHEM-ACETIC-PKA-25C',type:'pKa',species:'CH3COOH',conjugateBase:'CH3COO-',value:4.756,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'Serjeant & Dempsey, 1979; IUPAC Chemical Data Series 23',status:'VERIFIED',limitations:'pKa is medium/temperature dependent'},
 {id:'PUBCHEM-AMMONIA-PKB-25C',type:'Kb',species:'NH3',conjugateAcid:'NH4+',value:1.774e-5,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'Weast, Handbook of Chemistry and Physics, 68th ed.',status:'VERIFIED',limitations:'Kb is medium/temperature dependent'},
 {id:'PUBCHEM-CACO3-KSP-25C',type:'Ksp',species:'CaCO3',value:3.36e-9,unit:'dimensionless',temperatureK:298.15,phase:'aqueous',medium:'water',sourceId:'PUBCHEM',reference:'CRC Handbook of Chemistry and Physics, 91st ed.',status:'VERIFIED',limitations:'value is temperature/solid-phase dependent'}
];
function audit(){return {version:'2.73',thermo:Object.values(thermo),equilibria,evidence:{thermoSource:'NIST SRD 69',equilibriumSource:'PubChem records with cited underlying references'},policy:'verified reference layer does not overwrite legacy data'};}
C.REFERENCE_EXPANSION_V273={version:'2.73',thermo,equilibria,audit};
D.REFERENCE_THERMO_V273=thermo;
D.REFERENCE_EQUILIBRIA_V273=equilibria;
E.modules=E.modules||{};E.modules.REFERENCE_EXPANSION_V273='2.73';
E.registry=E.registry||{};E.registry.REFERENCE_EXPANSION_V273={layer:'DATA/REFERENCE',owner:'CHE.DATA.REFERENCE_EXPANSION_V273',depends:['SOURCE_REGISTRY','THERMO_REFERENCE','EQUILIBRIA_REFERENCE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 117]', err && err.message ? err.message : err); } catch(_){}
}