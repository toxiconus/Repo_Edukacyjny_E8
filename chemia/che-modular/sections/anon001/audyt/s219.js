

try {

(function(){
 const CHE=window.CHE=window.CHE||{};
 const C=CHE.CURRICULUM_REQUIREMENTS_LOCK_V334;
 if(!C)return;
 const steps=[
  {id:'MAX-01',name:'Runtime foundation',mods:['CURR-27','CURR-28'],goal:'stabilny DOM/UI smoke harness, event wiring, visible diagnostics',gate:'browser-runtime',status:'OPEN'},
  {id:'MAX-02',name:'Canonical chemistry core',mods:['CURR-05','CURR-06','CURR-07','CURR-08','CURR-09'],goal:'atom/jon/elektron/wiązania/graf/geometria jako jeden przepływ',gate:'structure-consistency',status:'OPEN'},
  {id:'MAX-03',name:'Reaction execution core',mods:['CURR-10','CURR-11','CURR-12','CURR-15'],goal:'równania, jonowe, redoks, stechiometria, reagent ograniczający, wydajność',gate:'reaction-regression',status:'OPEN'},
  {id:'MAX-04',name:'Solutions and acid-base',mods:['CURR-13','CURR-14'],goal:'stężenia, rozpuszczalność, pH, Ka/Kb/pKa, wskaźniki, bufory',gate:'solution-regression',status:'OPEN'},
  {id:'MAX-05',name:'P0 substances and lab',mods:['CURR-02','CURR-03','CURR-04','CURR-16','CURR-23','CURR-24','CURR-25','CURR-26'],goal:'karty substancji, doświadczenia, BHP, organiczna i biochemia',gate:'education-p0-audit',status:'OPEN'},
  {id:'MAX-06',name:'Scientific provenance closure',mods:['CURR-01','CURR-31'],goal:'źródło→warunki→jednostka→niepewność→fingerprint→status',gate:'science-integrity',status:'OPEN'},
  {id:'MAX-07',name:'P1 quantitative chemistry',mods:['CURR-18','CURR-19','CURR-20','CURR-21','CURR-22'],goal:'kinetyka, energetyka, równowaga, elektrochemia, gazy',gate:'p1-quantitative',status:'OPEN'},
  {id:'MAX-08',name:'Cross-domain projects',mods:['CURR-17','CURR-28','CURR-32'],goal:'zadania przekrojowe chemia-biologia-fizyka-matematyka',gate:'transfer',status:'OPEN'},
  {id:'MAX-09',name:'P2 advanced chemistry',mods:['CURR-29','CURR-30'],goal:'spektroskopia, mechanizmy, stereochemia, koordynacja',gate:'p2-advanced',status:'OPEN'},
  {id:'MAX-10',name:'Final integration',mods:['CURR-01','CURR-02','CURR-05','CURR-06','CURR-07','CURR-08','CURR-09','CURR-10','CURR-11','CURR-12','CURR-13','CURR-14','CURR-15','CURR-18','CURR-19','CURR-20','CURR-21','CURR-22','CURR-23','CURR-24','CURR-25','CURR-26','CURR-27','CURR-28','CURR-31','CURR-32'],goal:'pełna ścieżka od danych do modelu, reakcji, doświadczenia, zadania i raportu',gate:'full-regression',status:'OPEN'}
 ];
 const deps={
  'MAX-02':['MAX-01'],'MAX-03':['MAX-02'],'MAX-04':['MAX-03'],'MAX-05':['MAX-01','MAX-02','MAX-03'],'MAX-06':['MAX-01'],'MAX-07':['MAX-03','MAX-04','MAX-06'],'MAX-08':['MAX-04','MAX-05'],'MAX-09':['MAX-02','MAX-06'],'MAX-10':['MAX-01','MAX-02','MAX-03','MAX-04','MAX-05','MAX-06','MAX-07','MAX-08','MAX-09']
 };
 const criteria={
  DONE:['implementacja','pokrycie danych','integracja UI/API','lokalne regresje'],
  VERIFIED:['DONE','źródła/warunki sprawdzone tam gdzie wymagane','brak znanych blockerów'],
  LOCKED:['VERIFIED','fingerprint/wersja źródła','brak zmiany kontraktu']
 };
 function moduleStatus(id){const m=C.modules.find(x=>x.id===id);return m?m.status:'MISSING';}
 function stepReady(s){return (deps[s.id]||[]).every(d=>{const q=steps.find(x=>x.id===d);return q&&q.status==='DONE';});}
 function audit(){
   const counts={OPEN:0,IN_PROGRESS:0,DONE:0,VERIFIED:0,LOCKED:0,CONDITIONAL:0,MISSING:0};
   C.modules.forEach(m=>counts[m.status]=(counts[m.status]||0)+1);
   return {version:'3.35',curriculumModules:C.modules.length,steps:steps.length,counts,steps:steps.map(s=>({id:s.id,status:s.status,ready:stepReady(s),mods:s.mods.map(moduleStatus)})),criteria,deps};
 }
 CHE.MASTER_EXECUTION_ROADMAP_V335={version:'3.35',permanent:true,rule:'execute largest coherent package; do not re-discover closed requirements',steps,deps,criteria,audit,sourceLock:'CHE.CURRICULUM_REQUIREMENTS_LOCK_V334'};
 CHE.MASTER_EXECUTION_ROADMAP_V335.next=()=>steps.find(s=>s.status==='OPEN'&&stepReady(s))||steps.find(s=>s.status==='OPEN')||null;
})();

} catch (err) {
  try { console.warn('[CHE module 221]', err && err.message ? err.message : err); } catch(_){}
}