try {
 (()=>{const SRC='CHE_SP78_CURRICULUM_V348';const modules=[
['I','Substancje i ich właściwości',['właściwości substancji','BHP/piktogramy','stany skupienia','dyfuzja','rozpuszczanie','mieszaniny','rozdzielanie','metale/niemetale','symbole','masa-gęstość-objętość']],
['II','Wewnętrzna budowa materii',['Z','układ okresowy','powłoki','elektrony zewnętrzne','protony/neutrony/elektrony','izotopy','atom/cząsteczka','wiązania','elektroujemność','jony','wartościowość','tlenki']],
['III','Reakcje chemiczne',['zjawisko fizyczne/reakcja','równania cząsteczkowe','równania jonowe','bilans masy','bilans ładunku','egzo/endo','katalizator']],
['IV','Tlen, wodór i powietrze',['O2','tlenki','CO2','H2','wodorki','powietrze','gazy szlachetne','zanieczyszczenia','korozja']],
['V','Woda i roztwory wodne',['budowa H2O','rozpuszczalność','szybkość rozpuszczania','nasycenie','wykresy rozpuszczalności','stężenie procentowe','gęstość roztworu']],
['VI','Wodorotlenki i kwasy',['wzory/nazwy','otrzymywanie','dysocjacja','elektrolit','wskaźniki','odczyn','pH','kwaśne opady']],
['VII','Sole',['zobojętnianie','nazewnictwo soli','otrzymywanie soli','dysocjacja soli','strącanie','tablica rozpuszczalności','zastosowania']],
['VIII','Węglowodory',['alkany','alkeny','alkiny','szeregi homologiczne','spalanie','addycja bromu','polimeryzacja','ropa naftowa','wpływ na środowisko']],
['IX','Pochodne węglowodorów',['alkohole','metanol/etanol','glicerol','kwasy karboksylowe','kwas etanowy','estry','nazewnictwo i otrzymywanie estrów']],
['X','Substancje o znaczeniu biologicznym',['kwasy tłuszczowe','tłuszcze','aminokwasy','białka','denaturacja/koagulacja','cukry','wykrywanie skrobi']]
];
const requirements=modules.flatMap(([id,title,items])=>items.map((topic,i)=>({id:`SP78-${id}-${String(i+1).padStart(2,'0')}`,module:id,title,topic,status:'OPEN'})));
function audit(){return {version:'3.48',modules:modules.length,requirements:requirements.length,open:requirements.filter(x=>x.status==='OPEN').length,source:SRC};}
CHE.SP78=CHE.SP78||{};CHE.SP78.CURRICULUM_V348={version:'3.48',source:SRC,modules,requirements,audit};CHE.PROJECT_REQUIREMENTS_LOCK_V331=CHE.PROJECT_REQUIREMENTS_LOCK_V331||{};CHE.PROJECT_REQUIREMENTS_LOCK_V331.SP78_CURRICULUM_V348=CHE.SP78.CURRICULUM_V348;
CHE.P0_REGRESSION_V348={version:'3.48',pass:modules.length===10&&requirements.length>0,browserRuntime:'NOT_VERIFIED',scientificGate:'BLOCKED',source:SRC};})();
} catch (err) {
  try { console.warn('[CHE module 238]', err && err.message ? err.message : err); } catch(_){}
}

