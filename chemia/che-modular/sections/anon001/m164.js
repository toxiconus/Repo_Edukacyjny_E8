try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{}, E=C.ENGINE=C.ENGINE||{};
D.SCIENCE_CORE_V288=D.SCIENCE_CORE_V288||{};
const SRC={
 NIST_WEBBOOK:{name:'NIST Chemistry WebBook SRD 69',url:'https://webbook.nist.gov/chemistry/',accessed:'2026-10-02'},
 IUPAC_GOLD_BOOK:{name:'IUPAC Compendium of Chemical Terminology / Gold Book',url:'https://goldbook.iupac.org/',accessed:'2026-10-02'}
};
const ctx={temperature:{value:298.15,unit:'K',type:'fixed_reference'},pressure:{value:1,unit:'bar',type:'standard_pressure'},phaseRequired:true,uncertaintyRequired:true,sourceRequired:true};
const thermo={
 'H2O(l)':{cas:'7732-18-5',phase:'liquid',T:298.15,P:1,dHf:{value:-285.830,uncertainty:0.040,unit:'kJ/mol'},S:{value:69.95,uncertainty:0.03,unit:'J/mol/K'},source:'NIST_WEBBOOK',status:'REFERENCE_DATA',basis:'CODATA Review value'},
 'H2O(g)':{cas:'7732-18-5',phase:'gas',T:298.15,P:1,dHf:{value:-241.826,uncertainty:0.040,unit:'kJ/mol'},S:{value:188.835,uncertainty:0.010,unit:'J/mol/K'},source:'NIST_WEBBOOK',status:'REFERENCE_DATA',basis:'CODATA Review value'},
 'CO2(g)':{cas:'124-38-9',phase:'gas',T:298.15,P:1,dHf:{value:-393.51,uncertainty:0.13,unit:'kJ/mol'},S:{value:213.785,uncertainty:0.010,unit:'J/mol/K'},source:'NIST_WEBBOOK',status:'REFERENCE_DATA',basis:'CODATA Review value'},
 'HCl(g)':{cas:'7647-01-0',phase:'gas',T:298.15,P:1,dHf:{value:-92.31,uncertainty:0.10,unit:'kJ/mol'},S:{value:186.902,uncertainty:0.005,unit:'J/mol/K'},source:'NIST_WEBBOOK',status:'REFERENCE_DATA',basis:'CODATA Review value'}
};
const shomate={
 'H2O(l)':{ranges:[{T:[298,500],A:-203.6060,B:1523.290,C:-3196.413,D:2474.455,E:3.855326,F:-256.5478,G:-488.7163,H:-285.8304}],units:{Cp:'J/mol/K',H:'kJ/mol',S:'J/mol/K'},source:'NIST_WEBBOOK'},
 'H2O(g)':{ranges:[{T:[500,1700],A:30.09200,B:6.832514,C:6.793435,D:-2.534480,E:0.082139,F:-250.8810,G:223.3967,H:-241.8264},{T:[1700,6000],A:41.96426,B:8.622053,C:-1.499780,D:0.098119,E:-11.15764,F:-272.1797,G:219.7809,H:-241.8264}],units:{Cp:'J/mol/K',H:'kJ/mol',S:'J/mol/K'},source:'NIST_WEBBOOK'},
 'CO2(g)':{ranges:[{T:[298,1200],A:24.99735,B:55.18696,C:-33.69137,D:7.948387,E:-0.136638,F:-403.6075,G:228.2431,H:-393.5224},{T:[1200,6000],A:58.16639,B:2.720074,C:-0.492289,D:0.038844,E:-6.447293,F:-425.9186,G:263.6125,H:-393.5224}],units:{Cp:'J/mol/K',H:'kJ/mol',S:'J/mol/K'},source:'NIST_WEBBOOK'},
 'HCl(g)':{ranges:[{T:[298,1200],A:32.12392,B:-13.45805,C:19.86852,D:-6.853936,E:-0.049672,F:-101.6206,G:228.6866,H:-92.31201},{T:[1200,6000],A:31.91923,B:3.203184,C:-0.541539,D:0.035925,E:-3.438525,F:-108.0150,G:218.2768,H:-92.31201}],units:{Cp:'J/mol/K',H:'kJ/mol',S:'J/mol/K'},source:'NIST_WEBBOOK'}
};
function validRecord(r){return !!(r&&r.source&&r.phase&&Number.isFinite(r.T)&&Number.isFinite(r.P)&&r.dHf&&r.S&&Number.isFinite(r.dHf.value)&&Number.isFinite(r.S.value)&&r.dHf.uncertainty>=0&&r.S.uncertainty>=0);}
function cp(id,T){const s=shomate[id]; if(!s||!Number.isFinite(T))return null; const r=s.ranges.find(x=>T>=x.T[0]&&T<=x.T[1]); if(!r)return null; const t=T/1000; return r.A+r.B*t+r.C*t*t+r.D*t*t*t+r.E/(t*t);}
function readiness(){const rows=Object.entries(thermo).map(([id,r])=>({id,ready:validRecord(r),sourceKnown:!!SRC[r.source],cpModel:!!shomate[id]}));return {total:rows.length,ready:rows.filter(x=>x.ready).length,cpReady:rows.filter(x=>x.cpModel).length,rows};}
function audit(){const a=readiness();return {version:'2.88',ok:a.ready===a.total&&a.cpReady===a.total,context:ctx,sourceRegistry:SRC,records:a};}
D.SCIENCE_CORE_V288={version:'2.88',context:ctx,sources:SRC,thermochemistry:thermo,shomate,cp,readiness,audit};
E.modules=E.modules||{};E.modules.SCIENCE_CORE_V288='2.88';E.registry=E.registry||{};E.registry.SCIENCE_CORE_V288={layer:'SCIENCE/REFERENCE',owner:'CHE.DATA.SCIENCE_CORE_V288',depends:['SCIENCE_REFERENCE_CORE_V287','SOURCE_REGISTRY']};
C.version='2.88';C.dataVersion='2.88';C.contractVersion='2.88';C.schemaVersion='2.88';E.version='2.88';E.dataVersion='2.88';E.contractVersion='2.88';E.schemaVersion='2.88';if(E.PUBLIC)E.PUBLIC.version='2.88';
})(window);

} catch (err) {
  try { console.warn('[CHE module 164]', err && err.message ? err.message : err); } catch(_){}
}

