try {

(()=>{
  const C=window.CHE=window.CHE||{};
  const frame=C.CURRICULUM?.LO_V357?.chemistry||{};
  const basicEngines={
    I:['CHEM','EDUCATION_ENGINE'],II:['ATOM','ELECTRONIC_MODEL'],III:['STRUCTURE','GEOMETRY_CONTRACT'],
    IV:['THERMOKINETICS_ENGINE_V363'],V:['GAS_SOLUTION_ENGINE_V362'],VI:['ACID_BASE_ENGINE_V366','BUFFER_TITRATION_ENGINE_V367'],
    VII:['INORGANIC_ENGINE_V371'],VIII:['REDOX_ENGINE_V369'],IX:['ELECTROCHEM_ENGINE_V370'],
    X:['METAL_ENGINE_V372'],XI:['INORGANIC_ENGINE_V371'],XII:['ORGANIC_FUNCTIONAL_ENGINE_V374'],
    XIII:['ORGANIC_HC_ENGINE_V373'],XIV:['ORGANIC_FUNCTIONAL_ENGINE_V374'],XV:['ORGANIC_FUNCTIONAL_ENGINE_V374'],
    XVI:['ORGANIC_FUNCTIONAL_ENGINE_V374'],XVII:['ORGANIC_FUNCTIONAL_ENGINE_V374','BIOCHEM_ENGINE_V375'],
    XVIII:['BIOCHEM_ENGINE_V375'],XIX:['BIOCHEM_ENGINE_V375'],XX:['BIOCHEM_ENGINE_V375']
  };
  const extendedEngines={
    0:['ELECTRONIC_MODEL','ATOM'],1:['ELECTRONIC_MODEL','ATOM'],2:['CHEM','EDUCATION_ENGINE'],
    3:['THERMOKINETICS_ENGINE_V363'],4:['KINETICS_ENGINE'],5:['EQUILIBRIUM_ENGINE_V364'],
    6:['ACID_BASE_ENGINE_V366'],7:['SOLUBILITY_ENGINE_V368'],8:['ELECTROCHEM_ENGINE_V370'],
    9:['REDOX_ENGINE_V369'],10:['INORGANIC_ENGINE_V371'],11:['COORDINATION_ENGINE'],
    12:['ORGANIC_FUNCTIONAL_ENGINE_V374'],13:['MECHANISM_GRAPH'],14:['STEREO_CONTRACT'],
    15:['ORGANIC_FUNCTIONAL_ENGINE_V374'],16:['BIOCHEM_ENGINE_V375'],
    17:['DATA_QUALITY_ENGINE_V378','LAB_METHOD_ENGINE_V377']
  };
  const basicCriterionCounts=[5,3,6,5,5,5,11,4,5,5,6,5,8,5,4,6,5,11,3,5];
  const extendedChapterRefs=['II','II','I','IV','IV','IV','VI','VI','IX','VIII','VII','VII','XII-XVIII','XII-XVIII','XII-XVIII','XIII/XVII','XVIII-XX','I-XX + cele III'];
  const present=name=>{
    if(name==='CHEM')return !!C.CHEM;
    if(name==='EDUCATION_ENGINE')return !!C.EDUCATION_ENGINE;
    if(name==='ATOM')return !!C.ATOM?.build;
    if(name==='ELECTRONIC_MODEL')return !!C.ELECTRONIC_MODEL;
    if(name==='STRUCTURE')return !!C.STRUCTURE?.geometry3D;
    if(name==='KINETICS_ENGINE')return !!C.THERMOKINETICS_ENGINE_V363?.rateFactors;
    if(name==='COORDINATION_ENGINE')return !!C.STRUCTURE?.createMolecule;
    return !!C[name];
  };
  function audit(){
    const basic=(frame.basic||[]).map((row,index)=>{const id=String(row[0]),required=basicEngines[id]||[],found=required.filter(present);return {id,title:row[1],officialCriteria:Array.from({length:basicCriterionCounts[index]||0},(_,n)=>`${id}.${n+1}`),engineEvidence:found,unlinked:required.filter(x=>!found.includes(x)),status:found.length?'ENGINE_PRESENT_REVIEW':'NO_ENGINE_LINK',completion:'NOT_CLAIMED'};});
    const extended=(frame.extended||[]).map((title,index)=>{const required=extendedEngines[index]||[],found=required.filter(present);return {id:`EXT-${String(index+1).padStart(2,'0')}`,title,chapterRef:extendedChapterRefs[index]||null,criteriaMapping:'SUMMARY_ONLY_REQUIRES_ITEM_LEVEL_REVIEW',engineEvidence:found,unlinked:required.filter(x=>!found.includes(x)),status:found.length?'ENGINE_PRESENT_REVIEW':required.length?'NO_ENGINE_LINK':'MAPPING_REQUIRED',completion:'NOT_CLAIMED'};});
    return {version:'3.86',scope:'LO_CHEMISTRY_ONLY',source:{title:'Chemia — LO i technikum, podstawa programowa 2025/2026',url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia',authority:'ZPE/MEN'},
      amendmentReview:{act:'Dz.U. 2026 poz. 947',url:'https://eli.gov.pl/eli/DU/2026/947/ogl',checked:true,result:'NO_CHEMISTRY_AMENDMENT_FOUND_IN_TEXT',note:'The inspected act amends health education; it contains no chemistry provisions.'},
      basic,extended,counts:{basicRequirements:basic.length,extendedOutlineItems:extended.length,basicWithEngine:basic.filter(x=>x.engineEvidence.length).length,basicWithoutEngine:basic.filter(x=>!x.engineEvidence.length).length,extendedWithEngine:extended.filter(x=>x.engineEvidence.length).length,extendedWithoutEngine:extended.filter(x=>!x.engineEvidence.length).length},
      policy:'engine presence is not curriculum completion; missing evidence remains open',completion:'NOT_CLAIMED',browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED'};
  }
  function render(){
    const host=document.getElementById('chem-curriculum-audit-out');if(!host)return null;
    const a=audit();
    const rows=[...a.basic.map(x=>({...x,level:'Podstawowy'})),...a.extended.map(x=>({...x,level:'Rozszerzony'}))];
    host.innerHTML=`<div class="lab-kv"><div><small>Podstawowy: silnik wskazany</small><b>${a.counts.basicWithEngine}/${a.counts.basicRequirements}</b></div><div><small>Rozszerzony: silnik wskazany</small><b>${a.counts.extendedWithEngine}/${a.counts.extendedOutlineItems}</b></div><div><small>Pełna realizacja</small><b>NIEZALICZONA</b></div></div><p class="lab-note">Wskazanie silnika oznacza tylko możliwy punkt pokrycia. Wymagania, poprawność treści i zadania trzeba jeszcze zweryfikować. Mapa podstawy rozszerzonej jest skrótowa; wymagane jest mapowanie do szczegółowych punktów ZPE.</p><div class="eu-code" style="max-height:420px">${rows.map(x=>`${x.level} · ${x.id} · ${x.status} — ${x.title}${x.engineEvidence.length?` [${x.engineEvidence.join(', ')}]`:''}`).join('\n')}</div>`;
    return a;
  }
  C.CHEMISTRY_LO_AUDIT_V386={version:'3.86',audit,render};
  C.P0_REGRESSION_V386={chemistryScope:true,amendmentReviewed:true,completion:'NOT_CLAIMED',browserRuntime:'NOT_VERIFIED'};
  function bind(){const button=document.getElementById('audit-refresh');button?.addEventListener('click',render);render();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();

} catch (err) {
  try { console.warn('[CHE module 275]', err && err.message ? err.message : err); } catch(_){}
}

