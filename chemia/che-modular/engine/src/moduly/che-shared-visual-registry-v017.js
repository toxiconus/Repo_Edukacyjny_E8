
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const V=C.VISUAL_REGISTRY=C.VISUAL_REGISTRY||{};
V.version='0.17';
V.sourceOfTruth='SHARED_VISUAL_LIBRARY';
V.policy='Atlas and Lessons consume the same visual registry; no copied visual implementations.';
V.atlas=[
 ['atom','Atlas · Atom','Budowa atomu, powłoki i podstawowe parametry'],
 ['ds','Atlas · Karta danych','Karta danych pierwiastka'],
 ['nucleus','Atlas · Jądro i fazy','Jądro, izotopy i fazy'],
 ['orbitals','Atlas · Orbitale','Podpowłoki i obsada elektronowa'],
 ['mat','Atlas · Materiał','Model materiału / stanu skupienia'],
 ['props','Atlas · Właściwości','Właściwości fizykochemiczne'],
 ['chg','Atlas · Jon','Zmiana elektronów i ładunek'],
 ['redox','Atlas · Redoks','Zachowanie redoks'],
 ['mol','Atlas · Związki','Widok cząsteczki / związku'],
 ['forms','Atlas · Struktura i skład','Struktura, geometria i skład'],
 ['reakcja','Atlas · Reakcja','Równanie i warunki reakcji'],
 ['dane','Atlas · Dane','Dane źródłowe / rekord'],
 ['diag','Atlas · Diagnostyka','Diagnostyka danych i modelu']
];
V.library=[
 ['molecule3d-merged','3D · Cząsteczka','Interaktywny model 3D, kąty i rzędy wiązań'],
 ['molecule3d','3D · Cząsteczka klasyczna','Rotacja i model przestrzenny'],
 ['molecule-orbitals','Orbitale','Wizualizacja orbitali'],
 ['molecule-electrons','Elektrony','Obsada i elektrony walencyjne'],
 ['molecule-2d','Cząsteczka 2D','Graf atomów, wiązań i geometrii'],
 ['titration-merged','Miareczkowanie','Przebieg miareczkowania'],
 ['reactor-enhanced','Reaktor','Przebieg doświadczenia reakcyjnego'],
 ['indicator-band','pH · Wskaźniki · BAZA / ORYGINAŁ','Oryginalne pasma barw — bez nadpisywania palety'],
 ['ph-indicators-v03','pH · Panel wskaźników','Skala wszystkich wskaźników, probówki, drabinka kwasów i zasad'],
 ['strong-vs-weak-enhanced-v02','Mocne vs słabe','Porównanie elektrolitów / kwasów'],
 ['diss-hcl-mech-v02','Dysocjacja HCl','Mechanizm dysocjacji'],
 ['metal-reaction-v02','Metale · Reakcja','Model reakcji metalu'],
 ['ion-map-v02','Mapa jonów','Rozmieszczenie / przejścia jonowe'],
 ['flow-egzamin-enhanced','Flow · Egzamin','Interaktywny przebieg zadania'],
 ['vseprStage','VSEPR','Geometria cząsteczek i kąty']
];
V.groups=[
 {id:'atlas',title:'Wizualizacje Atlasu',items:V.atlas,kind:'atlas'},
 {id:'library',title:'Wizualizacje eksperymentalne i lekcyjne',items:V.library,kind:'library'}
];
const existing=new Set(V.library.map(x=>x[0])); if(C.VIEW?.views){Object.keys(C.VIEW.views).forEach(function(id){if(!existing.has(id))V.library.push([id,'CHE VIEW · '+id,'Wspólny widok z biblioteki CHE.VIEW']);});}
V.groups[1].items=V.library;
V.find=function(id){for(const g of V.groups)for(const x of g.items)if(x[0]===id)return {id:x[0],title:x[1],desc:x[2],kind:g.kind};return null};
V.mount=function(id,host){
 const x=V.find(id); if(!x)return false;
 if(x.kind==='atlas'){
  const app=document.querySelector('body > .app');
  if(app)app.style.display='';
  document.querySelectorAll('[data-che-route]').forEach(b=>b.classList.toggle('on',b.dataset.cheRoute==='atlas'));
  ['engine','lessons','atlas','db'].forEach(k=>{const r=document.getElementById('che-route-'+k);if(r)r.classList.toggle('show',k==='atlas')});
  if(typeof window.showTab==='function')window.showTab(id);
  return true;
 }
 if(C.VIEW?.views?.[id]){
  const target=host||document.createElement('div');
  if(!target.isConnected){target.className='che-shared-viz-focus';document.body.appendChild(target)}
  target.innerHTML=''; target.dataset.che=id;
  try{C.VIEW.autoMount?.(target);return true}catch(e){target.textContent='Nie udało się zamontować widoku: '+e.message;return false}
 }
 return false;
};
C.AUDIT?.add?.('v017: wspólny rejestr wizualizacji',true,'Atlas i Lekcje korzystają z jednego rejestru; wizualizacje nie są kopiowane między modułami.');
})();
