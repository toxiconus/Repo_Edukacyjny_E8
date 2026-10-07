<script id="che-wiz-v0030-hub">
(function(){
'use strict'; const C=window.CHE=window.CHE||{};
const bank=document.getElementById('che-wiz-widget-bank'); if(!bank)return;
const groups={
'Mechanizmy':['ionization','bracketAnim','dwStage','dissWidget','timelineAnim'],
'Laboratorium':['particleSim','acidReactor','titration','burnRun','co2'],
'Symulatory':['neutralSim','buffer','phWskazniki','indLab','stoichSolver'],
'Konstruktory':['oxideBuilder','balansatorEl','builderEl','reszta','ionAssemblyO'],
'Detektory':['charSim','wodorGrid','trendBars','oxGallery','periodicMini'],
'Geometria':['vseprStage'],
'Myślenie':['obsInferenceLab','metodaWidgetEl','mapaReakcji'],
'Testy':['adaptQuiz','quiz','flashcards']
};
const pane=document.getElementById('pane-wizual'); if(!pane)return;
let shell=pane.querySelector('.che-wiz30-hub'); if(!shell){shell=document.createElement('section');shell.className='che-wiz30-hub che-wiz-scope';shell.innerHTML='<div class="che-wiz30-head"><h3>Widgety v00.30 — na pełnym silniku</h3><span>34 moduły</span></div><div class="che-wiz30-list"></div><div class="che-wiz30-focus"></div>';pane.prepend(shell);}
const list=shell.querySelector('.che-wiz30-list'),focus=shell.querySelector('.che-wiz30-focus');
function close(name,article){article.hidden=true;bank.appendChild(article);}
function mount(name){const article=bank.querySelector('#c-'+({'ionization':'ionization','bracketAnim':'bracket','dwStage':'dwstage','dissWidget':'diss','timelineAnim':'timeline','particleSim':'ionlab','acidReactor':'rx','titration':'titr','burnRun':'burn','co2':'co2','neutralSim':'nsim','buffer':'buf','phWskazniki':'ph','indLab':'indlab','stoichSolver':'stechio','oxideBuilder':'oxideb','balansatorEl':'balans','builderEl':'build','reszta':'reszta','ionAssemblyO':'ionassem','charSim':'char','wodorGrid':'wg','trendBars':'trend','oxGallery':'gallery','periodicMini':'permini','vseprStage':'vsepr','obsInferenceLab':'obs','metodaWidgetEl':'metoda','mapaReakcji':'mapa','adaptQuiz':'adapt','quiz':'quiz','flashcards':'flash'})[name]); if(!article)return;
focus.innerHTML=''; const top=document.createElement('div');top.className='che-wiz30-actions';const b=document.createElement('button');b.type='button';b.textContent='× Zamknij widget';b.onclick=()=>close(name,article);top.appendChild(b);focus.appendChild(top);article.hidden=false;focus.appendChild(article);
try{C.mount(name,article,{source:'CHE.wiz.v00.30',engine:'FULL_ENGINE'});}catch(e){console.warn('[CHE v00.30 mount]',name,e);} article.scrollIntoView({behavior:'smooth',block:'start'});}
Object.entries(groups).forEach(([g,names])=>{const box=document.createElement('div');box.className='che-wiz30-group';box.innerHTML='<h4>'+g+'</h4>';names.forEach(name=>{if(!C.LEGACY_WIDGETS?.has(name))return;const b=document.createElement('button');b.type='button';b.className='che-wiz30-pick';b.textContent=name;b.onclick=()=>mount(name);box.appendChild(b);});list.appendChild(box);});
})();
</script>
