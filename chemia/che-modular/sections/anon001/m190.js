try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const sol={
 rules:[
  {id:'NITRATES',rule:'NO3−',behavior:'rozpuszczalne',exception:'brak typowych wyjątków szkolnych'},
  {id:'ALKALI_NH4',rule:'sole Li+, Na+, K+, NH4+',behavior:'rozpuszczalne'},
  {id:'CHLORIDES',rule:'Cl−',behavior:'zwykle rozpuszczalne',exceptions:['AgCl','PbCl2']},
  {id:'SULFATES',rule:'SO4^2−',behavior:'zwykle rozpuszczalne',exceptions:['BaSO4','PbSO4','CaSO4']},
  {id:'CARBONATES',rule:'CO3^2−',behavior:'zwykle nierozpuszczalne',exceptions:['sole metali alkalicznych','(NH4)2CO3']},
  {id:'PHOSPHATES',rule:'PO4^3−',behavior:'zwykle nierozpuszczalne',exceptions:['sole metali alkalicznych','(NH4)3PO4']},
  {id:'HYDROXIDES',rule:'OH−',behavior:'zwykle nierozpuszczalne',exceptions:['LiOH','NaOH','KOH','Ba(OH)2','Ca(OH)2 umiarkowanie rozpuszczalny']}
 ],
 examples:[['NaCl','rozpuszczalna'],['AgCl','nierozpuszczalna'],['BaSO4','nierozpuszczalna'],['KNO3','rozpuszczalna'],['CaCO3','nierozpuszczalna'],['NaOH','rozpuszczalna'],['Cu(OH)2','nierozpuszczalna']]
};
const ions=[
 ['H+','wodoru',1],['Na+','sodu',1],['K+','potasu',1],['Ag+','srebra(I)',1],['NH4+','amonowy',1],['Mg2+','magnezu',2],['Ca2+','wapnia',2],['Ba2+','baru',2],['Zn2+','cynku',2],['Cu2+','miedzi(II)',2],['Fe2+','żelaza(II)',2],['Fe3+','żelaza(III)',3],['Al3+','glinu',3],['Cl−','chlorkowy',-1],['OH−','wodorotlenkowy',-1],['NO3−','azotanowy(V)',-1],['SO4^2−','siarczanowy(VI)',-2],['CO3^2−','węglanowy',-2],['HCO3−','wodorowęglanowy',-1],['PO4^3−','fosforanowy(V)',-3],['S2−','siarczkowy',-2],['O2−','tlenkowy',-2]
].map(x=>({formula:x[0],name:x[1],charge:x[2]}));
const naming=[
 ['NaCl','chlorek sodu','sól'],['KOH','wodorotlenek potasu','wodorotlenek'],['Ca(OH)2','wodorotlenek wapnia','wodorotlenek'],['HCl','kwas chlorowodorowy','kwas beztlenowy'],['H2SO4','kwas siarkowy(VI)','kwas tlenowy'],['HNO3','kwas azotowy(V)','kwas tlenowy'],['CaCO3','węglan wapnia','sól'],['Na2CO3','węglan sodu','sól'],['CuSO4','siarczan(VI) miedzi(II)','sól'],['FeCl3','chlorek żelaza(III)','sól']
].map(x=>({formula:x[0],name:x[1],class:x[2]}));
const calc={constants:{NA:6.02214076e23,VM_NTP_L_PER_MOL:22.414},formulas:['n=m/M','m=nM','c=n/V','w%=100*m_s/m_r','rho=m/V'],notes:['NA jest dokładną wartością SI','objętość molowa zależy od przyjętych warunków','dla zadań szkolnych warunki gazowe muszą być jawnie podane']};
D.EDUCATION_P0_V305={version:'3.05',solubility:sol,ions,naming,calculations:calc,source:{id:'PL_CURRICULUM_ZPE_SP78',basis:'ZPE materiały i podstawa programowa',accessed:'2026-10-02'},policy:'educational layer over common data; no overwrite; no scientific reference upgrade'};
E.modules=E.modules||{};E.modules.EDUCATION_P0_V305='3.05';
E.EDUCATION_P0_AUDIT_V305={run(){const d=D.EDUCATION_P0_V305;const checks=[['rules>=7',d.solubility.rules.length>=7],['ions>=20',d.ions.length>=20],['naming>=10',d.naming.length>=10],['calc formulas>=5',d.calculations.formulas.length>=5],['single source',d.source?.id==='PL_CURRICULUM_ZPE_SP78']];return {version:'3.05',ok:checks.every(x=>x[1]),checks,counts:{rules:d.solubility.rules.length,ions:d.ions.length,naming:d.naming.length}};}};
})(window);

} catch (err) {
  try { console.warn('[CHE module 190]', err && err.message ? err.message : err); } catch(_){}
}

