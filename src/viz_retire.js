<script id="che-viz-retire-v001">
/* ===== CHE.VIZ_RETIRED v1.0 — wycofane wizualizacje (zastąpione lepszymi widokami silnika lub lepiej omówione w lekcji).
   Działanie: usuwa z CHE.VIEW.views i CHE.VISUAL_REGISTRY, podmienia w listach lekcji, przekierowuje stare odnośniki na następcę.
   Kod źródłowy starych widoków jeszcze jest w pliku (odwracalne): wystarczy usunąć wpis z mapy. ===== */
(function(){
var C=window.CHE=window.CHE||{};
var R={'reszta-builder':'kw-reszty-v01','legacy:reszta':'kw-reszty-v01',
 'diss-hcl-mech-v02':'kw-dysocjacja-v01','strong-vs-weak-enhanced':'kw-dysocjacja-v01','strong-vs-weak-enhanced-v02':'kw-dysocjacja-v01','alpha-slider':'kw-dysocjacja-v01','chart-strength':'kw-dysocjacja-v01','moc-vs-c':'kw-dysocjacja-v01','hydronium':'kw-dysocjacja-v01','diss-stepwise':'kw-dysocjacja-v01','reactor-enhanced':'kw-dysocjacja-v01',
 'legacy:ionization':'kw-dysocjacja-v01','legacy:dissWidget':'n02-dysocjacja-v01','legacy:dwStage':'n02-dysocjacja-v01',
 'buffer':'kw-bufor-v01','legacy:buffer':'kw-bufor-v01',
 'reactor':'reakcje-kwasu-v03','four-reactions':'reakcje-kwasu-v03','legacy:acidReactor':'reakcje-kwasu-v03','beaker-prediction':'beaker-prediction-enhanced',
 'metal-series':'kw-szereg-metali-v01','reaction-decision':'kw-szereg-metali-v01','metal-reaction-v02':'kw-szereg-metali-v01',
 'ph-table':'ph-indicators-v03','indicator-band':'ph-indicators-v03','legacy:phWskazniki':'ph-indicators-v03','ind-lab':'gfx-scene-indicatorRack','legacy:indLab':'gfx-scene-indicatorRack',
 'legacy:titration':'titration-merged','legacy:neutralSim':'n02-zobojetnianie-v01',
 'step-eq':'n01-reaktor-v01','lab-oxides-v102':'n01-reaktor-v01','legacy:charSim':'n01-tlenki-v01','legacy:oxGallery':'n01-tlenki-v01','legacy:oxideBuilder':'n01-konstruktor-v01','legacy:trendBars':'n01-trend-v01','legacy:burnRun':'n01-spalanie-v01','legacy:co2':'gfx-scene-carbonate','legacy:mapaReakcji':'chain-scn','legacy:periodicMini':'periodic-54','legacy:stoichSolver':'stech-kalkulator-v01',
 'molecule3d':'molecule3d-merged','molecule-3d':'molecule3d-merged','vseprStage':'molecule3d-merged','legacy:vseprStage':'molecule3d-merged',
 'legacy:quiz':'flashcards-deck','legacy:adaptQuiz':'flashcards-deck','legacy:flashcards':'flashcards-deck',
 'legacy:bracketAnim':'n02-wzory-v01','legacy:balansatorEl':'n02-wzory-v01','legacy:builderEl':'n02-wzory-v01','legacy:wzorometrEl':'n02-wzory-v01',
 'legacy:wodorGrid':'n02-przeglad-v01','legacy:metodaWidgetEl':'n02-otrzymywanie-v01','legacy:mapPrzemianEl':'n02-otrzymywanie-v01','legacy:particleSim':'n02-stracanie-v01','legacy:ionLab':'n02-stracanie-v01',
 'legacy:neutralWidgetEl':'n02-zobojetnianie-v01','legacy:energyWidget':'n02-dysocjacja-v01','legacy:reactorEl':'n02-reaktor-v01',
 'legacy:ionAssemblyO':'n01-konstruktor-v01','legacy:obsInferenceLab':'n01-doswiadczenia-v01','legacy:oxTimeline':'n01-tlenki-v01'};
C.VIZ_RETIRED=R;
function to(id){if(!R[id]&&R['legacy:'+id])id='legacy:'+id;var n=0;while(R[id]&&n++<5)id=R[id];return id}
function run(){
 var V=C.VIEW&&C.VIEW.views;if(V&&V.delete)Object.keys(R).forEach(function(k){V.delete(k)});
 var G=C.VISUAL_REGISTRY;if(G&&Array.isArray(G.groups))G.groups.forEach(function(g){if(Array.isArray(g.items))g.items=g.items.filter(function(x){return !R[x[0]]})});
 var L=C.LESSONS&&C.LESSONS.registry;if(L)Object.keys(L).forEach(function(id){var m=L[id];if(Array.isArray(m.visuals)){var s=[];m.visuals.forEach(function(v){v=to(v);if(s.indexOf(v)<0)s.push(v)});m.visuals=s}});
 var LV=C.LESSON_VIZ_LEGACY;if(LV)Object.keys(LV).forEach(function(k){var s=[],seen={};LV[k].forEach(function(v){var id=to(typeof v==='string'?v:v.id);if(seen[id])return;seen[id]=1;s.push(typeof v==='string'?id:Object.assign({},v,{id:id}))});LV[k]=s});
}
/* V.mount dla wycofanych id (np. przyciski wewnątrz innych widoków) → następca */
if(C.VIEW&&C.VIEW.mount&&!C.VIEW.mount._ret){var om=C.VIEW.mount;C.VIEW.mount=function(el){try{if(el&&el.dataset&&R[el.dataset.che])el.dataset.che=to(el.dataset.che)}catch(_){}return om.apply(this,arguments)};C.VIEW.mount._ret=1}
run();if(document.readyState!=='complete')window.addEventListener('load',run);
/* stare odnośniki (przyciski w lekcjach, zakładki) → następca */
window.addEventListener('message',function(e){var d=e.data||{};if(d.type==='CHE_LESSON_OPEN_VISUAL'&&d.visualId&&R[d.visualId]){e.stopImmediatePropagation();window.postMessage(Object.assign({},d,{visualId:to(d.visualId),retiredFrom:d.visualId}),'*')}},true);
})();
</script>
