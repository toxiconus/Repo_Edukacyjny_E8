try {

(()=>{
  const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
  const getLegacy=()=>D.EDUCATION_MAX_V315?.blocks||{};
  const correctionMap={'Cr2O7^2+':'Cr2O7^2-'};
  const repair={version:'4.08',scope:'CHEMISTRY_ONLY',policy:'append-only correction view; legacy fingerprints and blocks remain unchanged',correctionMap,
    getBlock(id){const value=getLegacy()[id];if(!Array.isArray(value))return value??null;const normalized=value.map(x=>typeof x==='string'?(correctionMap[x]||x):x);return id==='coreIons'?[...new Set(normalized)]:normalized;},
    audit(){const raw=Array.isArray(getLegacy().coreIons)?getLegacy().coreIons:[];const corrected=this.getBlock('coreIons')||[];const duplicates=raw.filter((x,i)=>raw.indexOf(x)!==i);return {version:'4.08',block:'coreIons',legacyTokenPresent:raw.includes('Cr2O7^2+'),correctedTokenPresent:corrected.includes('Cr2O7^2-'),duplicateLegacyTokens:[...new Set(duplicates)],duplicateCount:duplicates.length,legacyTokenPreserved:raw.includes('Cr2O7^2+'),legacyMutation:false,correctedCount:corrected.length,status:raw.includes('Cr2O7^2+')&&corrected.includes('Cr2O7^2-')&&!corrected.includes('Cr2O7^2+')?'CORRECTION_VIEW_READY':'SOURCE_BLOCK_NOT_FOUND'};}};
  C.CHEMISTRY_REPAIR_V408=repair;
  C.EDUCATION_MAX_V315_REPAIRED={version:'4.08',sourceOfTruth:'CHE.DATA.EDUCATION_MAX_V315',getBlock:id=>repair.getBlock(id),correctionAudit:()=>repair.audit()};
  const stages=[
    {id:'R0',name:'Zabezpieczenie i inwentaryzacja',status:'DONE',result:'Backup v169 utworzony; plan bazowy przejrzany; zakres chemia-only.'},
    {id:'R1',name:'Integralność danych i pochodzenie naukowe',status:'IN_PROGRESS',result:'Zidentyfikowano błędny znak ładunku Cr2O7 oraz duplikaty OH−; adapter poprawionego widoku dodany, audyt źródeł stałych trwa.'},
    {id:'R2',name:'Parsery wzorów, ładunki, jednostki i wielkości',status:'OPEN',gate:'Jawne wymiary, konwencje i błędy wejściowe.'},
    {id:'R3',name:'Obliczenia stechiometryczne i roztwory',status:'OPEN',gate:'Mole, masy, reagent ograniczający, wydajność, stężenia, gazy, pH i Ksp.'},
    {id:'R4',name:'Równowaga, kinetyka i termochemia',status:'OPEN',gate:'Jednostki, warunki, granice modelu i zgodność równań.'},
    {id:'R5',name:'Redoks i elektrochemia',status:'OPEN',gate:'Bilans masy/ładunku/elektronów i warunki potencjałów.'},
    {id:'R6',name:'Nieorganiczna, organiczna i biochemia jako chemia',status:'OPEN',gate:'Reakcje, nomenklatura, produkty, warunki i stereochemia w deklarowanym zakresie.'},
    {id:'R7',name:'Doświadczenia, bezpieczeństwo i analiza danych',status:'OPEN',gate:'Problem–hipoteza–procedura–obserwacja–wniosek, ryzyko i odpady.'},
    {id:'R8',name:'Mapowanie wymagań LO do treści i zadań',status:'OPEN',gate:'Punkty podstawy, ćwiczenia, doświadczenia i jawne luki.'},
    {id:'R9',name:'Integracja UI, pełna regresja i wydanie',status:'OPEN',gate:'DOM/browser runtime, regresja, brak błędów krytycznych; bez fałszywego PASS.'}
  ];
  const plan={version:'4.08',scope:'CHEMISTRY_ONLY',sourcePlan:'plan_silnika_che_v169.md',stages,
    completionRule:'Release only when every stage gate is evidenced; never infer reference readiness or browser PASS from structural presence.',
    invariants:['preserve locked VERIFIED/DONE fingerprints','do not create a parallel chemistry engine or duplicate data source','keep biology as a separate subject out of scope; retain biomolecular chemistry only','record unresolved items explicitly','work in this HTML; create only safety backups when needed'],
    audit(){return {version:this.version,scope:this.scope,total:stages.length,done:stages.filter(x=>x.status==='DONE').length,inProgress:stages.filter(x=>x.status==='IN_PROGRESS').length,open:stages.filter(x=>x.status==='OPEN').length,next:stages.find(x=>x.status==='IN_PROGRESS')?.name,repair:repair.audit(),completion:'NOT_CLAIMED',browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};},
    render(){const host=document.getElementById('chem-roadmap-out');if(!host)return null;const a=this.audit();host.innerHTML=`<div class="lab-kv"><div><small>Etapy wykonane</small><b>${a.done}/${a.total}</b></div><div><small>W toku</small><b>${a.inProgress}</b></div><div><small>Otwarte</small><b>${a.open}</b></div></div><p class="lab-note">Następny blok: ${a.next}. Korekta coreIons: ${a.repair.status}; błędny token zachowany w legacy: ${a.repair.legacyTokenPreserved}; duplikaty usuwane w widoku: ${a.repair.duplicateLegacyTokens?.join(', ')||'brak'}. To nie jest deklaracja kompletności ani wynik testu przeglądarkowego.</p><div class="eu-code" style="max-height:480px">${stages.map(s=>`${s.id} · ${s.status} · ${s.name}${s.result?' — '+s.result:''}${s.gate?' — bramka: '+s.gate:''}`).join('\n')}</div>`;return a;}};
  C.CHEMISTRY_EXECUTION_ROADMAP_V408=plan;
  C.P0_REGRESSION_V408={roadmap:()=>plan.audit(),browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>plan.render(),{once:true});else plan.render();
})();

} catch (err) {
  try { console.warn('[CHE module 1]', err && err.message ? err.message : err); } catch(_){}
}

