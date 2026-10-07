<script id="che-lesson-open-viz-v001">
(function(){
'use strict';
var C=window.CHE=window.CHE||{};
function ensureOverlay(){
  var ov=document.getElementById('che-viz-overlay');
  if(ov) return ov;
  ov=document.createElement('div');
  ov.id='che-viz-overlay';
  ov.innerHTML='<div class="che-viz-ov-panel"><div class="che-viz-ov-bar"><button type="button" id="che-viz-ov-close">\u00d7 Zamknij</button><div class="che-viz-ov-title" id="che-viz-ov-title">Wizualizacja</div></div><div class="che-viz-ov-body" id="che-viz-ov-body"></div></div>';
  document.body.appendChild(ov);
  document.getElementById('che-viz-ov-close').onclick=function(){ closeVizOverlay(); };
  ov.addEventListener('click', function(e){ if(e.target===ov) closeVizOverlay(); });
  return ov;
}
function closeVizOverlay(){
  var ov=document.getElementById('che-viz-overlay');
  if(ov) ov.classList.remove('open');
  var body=document.getElementById('che-viz-ov-body');
  if(body) body.innerHTML='';
}
function openVisualFromLesson(id, lesson){
  if(!id) return;
  lesson=lesson||'N03';
  if(C.LESSON_CONTEXT) C.LESSON_CONTEXT.activate(lesson);
  var ov=ensureOverlay();
  var title=document.getElementById('che-viz-ov-title');
  var body=document.getElementById('che-viz-ov-body');
  if(title) title.textContent=id;
  if(body) body.innerHTML='';
  ov.classList.add('open');
  var host=document.createElement('div');
  host.style.cssText='padding:8px 4px 16px';
  body.appendChild(host);
  var ok=false;
  try{
    if(C.LESSON_CONTEXT && typeof C.LESSON_CONTEXT.mount==='function'){
      ok=!!C.LESSON_CONTEXT.mount(id, host, {lesson:lesson, badge:true});
    }
    if(!ok && C.VIEW && C.VIEW.views && C.VIEW.views.get && C.VIEW.views.get(id) && C.VIEW.mount){
      host.dataset.che=id; C.VIEW.mount(host); ok=true;
    }
    if(!ok && typeof C.mount==='function' && C.LEGACY_WIDGETS && C.LEGACY_WIDGETS.has && C.LEGACY_WIDGETS.has(id)){
      C.mount(id, host, {source:'LESSON_OPEN'}); ok=true;
    }
  }catch(e){
    host.innerHTML='<div class="note">Blad montazu: '+(e.message||e)+'</div>'; ok=true;
  }
  if(!ok) host.innerHTML='<div class="note">Brak widoku <code>'+id+'</code>.</div>';
  try{
    var spec=C.VIEW&&C.VIEW.views&&C.VIEW.views.get&&C.VIEW.views.get(id);
    if(spec&&spec.title&&title) title.textContent=spec.title;
  }catch(e){}
}
window.addEventListener('message', function(ev){
  var d=ev.data;
  if(!d||d.type!=='CHE_LESSON_OPEN_VISUAL') return;
  openVisualFromLesson(d.visualId, d.lessonId||'N03');
});
C.openVisualFromLesson=openVisualFromLesson;
C.closeVizOverlay=closeVizOverlay;
try{ console.info('[CHE lesson-open-viz v001]'); }catch(e){}
})();
</script>
