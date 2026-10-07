<script[\s\S]*?<\/script>/gi,'');
  body.innerHTML='<div class="che-lfs-lesson" data-che-lesson="'+(m.code||id)+'">'+lessonBody+'</div>';
  lsJs.forEach(function(js){try{(0,eval)(js)}catch(err){console.warn('[CHE lekcja] skrypt: '+err.message)}});

  /* Spis treści: hamburger + panel (skrypty lekcji są usuwane — wiążemy tu) */
  (function bindLessonToc(){
    var root=body.querySelector('.che-lfs-lesson')||body;
    var tocToggle=root.querySelector('#tocToggle')||root.querySelector('.fab-left');
    var tocWrap=root.querySelector('#tocWrapper')||root.querySelector('.toc-wrapper');
    var tocOverlay=root.querySelector('#tocOverlay')||root.querySelector('.toc-overlay');
    if(!tocToggle||!tocWrap)return;
    /* wymuś widoczność nad paskiem fullscreen */
    tocToggle.style.cssText=(tocToggle.getAttribute('style')||'')+';display:flex!important;position:fixed;left:12px;top:64px;z-index:1400;width:48px;height:48px;align-items:center;justify-content:center;border-radius:999px;border:1px solid var(--line,#d5dee6);background:var(--panel,#fff);box-shadow:0 8px 24px rgba(0,0,0,.12);cursor:pointer;';
    tocWrap.style.zIndex='1390';
    if(tocOverlay)tocOverlay.style.zIndex='1380';
    function open(){
      tocWrap.classList.add('is-open');
      tocToggle.classList.add('is-open');
      tocToggle.setAttribute('aria-expanded','true');
      if(tocOverlay)tocOverlay.classList.add('is-open');
      tocWrap.setAttribute('aria-hidden','false');
    }
    function close(){
      tocWrap.classList.remove('is-open');
      tocToggle.classList.remove('is-open');
      tocToggle.setAttribute('aria-expanded','false');
      if(tocOverlay)tocOverlay.classList.remove('is-open');
      tocWrap.setAttribute('aria-hidden','true');
    }
    tocToggle.onclick=function(e){e.preventDefault();e.stopPropagation();tocWrap.classList.contains('is-open')?close():open();};
    if(tocOverlay)tocOverlay.onclick=function(){close();};
    root.querySelectorAll('.toc-link').forEach(function(a){
      a.addEventListener('click',function(){ setTimeout(close, 80); });
    });
    close();
  })();

  /* Zamie\u0144 przyciski-refy na sloty i auto-montuj */
  var refs=body.querySelectorAll('[data-che-lesson-viz]'),seenViz={};
  refs.forEach(function(el){
    var vid=el.getAttribute('data-che-lesson-viz');
    if(!vid) return;
    if(seenViz[vid]){var bt=el.querySelector('b'),tt=bt?bt.textContent:vid,a=document.createElement('div');a.className='che-lesson-viz-again';a.setAttribute('data-che-viz-again',vid);a.innerHTML='<span>Model: <b>'+esc(tt)+'</b></span><button type="button" data-go>↑ pokaż wyżej (ten sam model)</button><button type="button" data-win>↗ w oknie</button>';a.querySelector('[data-go]').onclick=function(){var f=body.querySelector('.che-lesson-viz-slot[data-che-lesson-viz="'+vid+'"]');if(f)f.scrollIntoView({behavior:'smooth',block:'start'})};a.querySelector('[data-win]').onclick=function(){window.postMessage({type:'CHE_LESSON_OPEN_VISUAL',visualId:vid,lessonId:m.code||id},'*')};el.parentNode.replaceChild(a,el);return}
    seenViz[vid]=1;
    var slot=document.createElement('article');
    slot.className='che-lesson-viz-slot';
    slot.setAttribute('data-che-lesson-viz', vid);
    var title=vid;
    try{
      var spec=C.VIEW&&C.VIEW.views&&C.VIEW.views.get&&C.VIEW.views.get(vid);
      if(spec&&spec.title) title=spec.title;
    }catch(e){}
    var btn=el.querySelector('b');
    if(btn&&btn.textContent) title=btn.textContent;
    slot.innerHTML='<header>'+esc(title)+' <span style="font-weight:500;color:var(--mut);font-size:12px">\u00b7 auto</span></header><div class="che-lesson-viz-host"></div>';
    var host=slot.querySelector('.che-lesson-viz-host');
    el.parentNode.replaceChild(slot, el);
    function doMount(){
      if(host.dataset.mounted) return;
      host.dataset.mounted='1';
      try{
        if(C.LESSON_CONTEXT&&typeof C.LESSON_CONTEXT.mount==='function'){
          C.LESSON_CONTEXT.mount(vid, host, {lesson:m.code||id, badge:false});
        } else if(C.VIEW&&C.VIEW.views&&C.VIEW.views.get&&C.VIEW.views.get(vid)&&C.VIEW.mount){
          host.dataset.che=vid; C.VIEW.mount(host);
        } else {
          host.innerHTML='<div class="note">Brak widoku <code>'+esc(vid)+'</code></div>';
        }
      }catch(err){ host.innerHTML='<div class="note">'+esc(String(err.message||err))+'</div>'; }
    }
    /* montuj gdy slot wchodzi w viewport \u2014 albo od razu je\u015bli blisko g\u00f3ry */
    if(typeof IntersectionObserver!=='undefined'){
      var io=new IntersectionObserver(function(ents){
        ents.forEach(function(en){ if(en.isIntersecting){ doMount(); io.unobserve(en.target); } });
      }, {root:body, rootMargin:'120px', threshold:0.01});
      io.observe(slot);
    } else {
      doMount();
    }
  });
  /* od razu zamontuj pierwsze 3 widoczne */
  var first=body.querySelectorAll('.che-lesson-viz-slot');
  for(var i=0;i<Math.min(3,first.length);i++){
    var h=first[i].querySelector('.che-lesson-viz-host');
    if(h&&!h.dataset.mounted){
      h.dataset.mounted=''; // allow doMount via click path - force
      try{
        var vid2=first[i].getAttribute('data-che-lesson-viz');
        if(C.LESSON_CONTEXT&&C.LESSON_CONTEXT.mount) C.LESSON_CONTEXT.mount(vid2, h, {lesson:m.code||id, badge:false});
        else if(C.VIEW&&C.VIEW.mount){ h.dataset.che=vid2; C.VIEW.mount(h); }
        h.dataset.mounted='1';
      }catch(e){}
    }
  }
  body.scrollTop=0;
}

C.HOME_GATE.legacyVisual=function(){renderVisualHub()};function renderVisualHub(){
  ensureVisualRoute();
  var pane=$('pane-wizual'); if(!pane) return;
  pane.classList.add('show'); pane.style.display='block';
  var list=$('visual-list');
  if(!list){list=document.createElement('div');list.id='visual-list';list.className='lesson-visual-list';pane.appendChild(list);}
  list.innerHTML='';
  var items=[],seen={};
  var reg=C.VISUAL_REGISTRY;
  if(reg&&Array.isArray(reg.groups)) reg.groups.forEach(function(g){(g.items||[]).forEach(function(x){var id=x[0];if(!id||seen[id])return;seen[id]=1;items.push({id:id,title:x[1]||id,desc:x[2]||'',kind:g.kind||'library'});});});
  if(C.VIEW&&C.VIEW.views&&typeof C.VIEW.views.forEach==='function') C.VIEW.views.forEach(function(spec,id){if(!id||seen[id])return;seen[id]=1;items.push({id:id,title:(spec&&spec.title)||id,desc:(spec&&spec.hint)||((spec&&spec.tag)||'CHE VIEW'),kind:'view'});});
  var host2=list.parentNode;
  if(!document.getElementById('che-vs-css')){var st=document.createElement('style');st.id='che-vs-css';st.textContent='#che-vmode-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0 0 12px}#che-vmode-bar input{flex:1 1 200px;min-width:0;padding:9px 12px;border:1px solid var(--line,#d5dee6);border-radius:10px;background:var(--panel,#fff);color:var(--tx,inherit);font:14px system-ui}#che-vmode-bar button{padding:8px 12px;border:1px solid var(--line,#d5dee6);border-radius:10px;background:var(--panel,#fff);color:var(--tx,inherit);font:600 13px system-ui;cursor:pointer}#che-vmode-bar button.on{background:var(--v,#176b8c);color:#fff;border-color:transparent}#che-vmode-bar small{opacity:.65}.che-vs-wrap{grid-column:1/-1;display:flex;flex-direction:column;gap:16px}.che-vs-wrap h3{margin:18px 0 0;font-size:15px}.che-vs-item{border:1px solid var(--line,#d5dee6);border-radius:14px;background:var(--panel,#fff);overflow:hidden;scroll-margin-top:70px}.che-vs-item>header{display:flex;flex-wrap:wrap;gap:2px 12px;align-items:baseline;padding:9px 14px;border-bottom:1px solid var(--line,#d5dee6);background:var(--panel-2,transparent);font-size:13px}.che-vs-item>header small{opacity:.65}.che-vs-item>header code{margin-left:auto;font:600 11px ui-monospace,monospace;opacity:.7}.che-vs-body{padding:12px 14px;min-height:110px}.che-vs-wait{opacity:.5;text-align:center;padding:30px 0}.che-vs-jump{grid-column:1/-1}.che-vs-jump summary{cursor:pointer;font-weight:700;padding:6px 0}.che-vs-jump div{display:flex;flex-wrap:wrap;gap:6px;padding:6px 0}.che-vs-jump a{padding:4px 10px;border:1px solid var(--line,#d5dee6);border-radius:999px;font-size:12px;color:var(--tx,inherit);text-decoration:none}';document.head.appendChild(st)}
  var mode=lsGet('che.vmode')==='cards'?'cards':'stack';
  var bar=$('che-vmode-bar');
  if(!bar){bar=document.createElement('div');bar.id='che-vmode-bar';bar.innerHTML='<input type="search" id="che-vs-search" placeholder="Szukaj wizualizacji…" aria-label="Szukaj wizualizacji"><button type="button" data-vm="stack">Wszystkie pod sobą</button><button type="button" data-vm="cards">Katalog kart</button><small id="che-vs-status"></small>';list.parentNode.insertBefore(bar,list);
    bar.querySelectorAll('[data-vm]').forEach(function(b){b.onclick=function(){lsSet('che.vmode',b.dataset.vm);var f=$('che-visual-focus');if(f)f.remove();renderVisualHub()}});
    $('che-vs-search').addEventListener('input',function(){filterStack(this.value)});}
  bar.querySelectorAll('[data-vm]').forEach(function(b){b.classList.toggle('on',b.dataset.vm===mode)});
  var sInp=$('che-vs-search');
  function filterStack(q){q=(q||'').trim().toLowerCase();var vis=0,tot=0;list.querySelectorAll('.che-vs-item').forEach(function(it){tot++;var ok=!q||it.dataset.s.indexOf(q)>=0;it.style.display=ok?'':'none';if(ok)vis++});list.querySelectorAll('.che-vs-wrap h3').forEach(function(h){var n=h.nextElementSibling,any=false;while(n&&n.tagName!=='H3'){if(n.style.display!=='none')any=true;n=n.nextElementSibling}h.style.display=any?'':'none'});var s2=$('che-vs-status');if(s2)s2.textContent=vis+' / '+tot}
  if(mode==='stack'){
    list.style.setProperty('display','block','important');
    var labelsS={atlas:'Atlas — modele źródłowe',library:'Biblioteka wizualizacji',view:'Pozostałe CHE VIEW'};
    var WMAP={'ionization':'ionization','bracketAnim':'bracket','dwStage':'dwstage','dissWidget':'diss','timelineAnim':'timeline','particleSim':'ionlab','acidReactor':'rx','titration':'titr','burnRun':'burn','co2':'co2','neutralSim':'nsim','buffer':'buf','phWskazniki':'ph','indLab':'indlab','stoichSolver':'stechio','oxideBuilder':'oxideb','balansatorEl':'balans','builderEl':'build','reszta':'reszta','ionAssemblyO':'ionassem','charSim':'char','wodorGrid':'wg','trendBars':'trend','oxGallery':'gallery','periodicMini':'permini','obsInferenceLab':'obs','metodaWidgetEl':'metoda','mapaReakcji':'mapa','adaptQuiz':'adapt','quiz':'quiz','flashcards':'flash'};
    var bank=$('che-wiz-widget-bank');
    function rescueW(){if(!bank)return;list.querySelectorAll('article[id^="c-"]').forEach(function(a){a.hidden=true;bank.appendChild(a)})}
    rescueW();
    items=items.filter(function(x){return String(x.id).indexOf('legacy:')!==0});
    Object.keys(WMAP).forEach(function(n){if(C.LEGACY_WIDGETS&&C.LEGACY_WIDGETS.has&&C.LEGACY_WIDGETS.has(n)&&(bank&&bank.querySelector('#c-'+WMAP[n])||document.getElementById('c-'+WMAP[n])))items.push({id:'w:'+n,title:n,desc:'Widget interaktywny (v00.30)',kind:'widget',w:n})});
    labelsS.widget='Widgety i laboratoria (interaktywne)';
    var gS={atlas:[],library:[],view:[],widget:[]}; items.forEach(function(x){(gS[x.kind]||gS.view).push(x);});
    var wrap=document.createElement('div');wrap.className='che-vs-wrap';
    var jump=document.createElement('details');jump.className='che-vs-jump';jump.innerHTML='<summary>Skocz do wizualizacji ('+items.length+')</summary><div></div>';var jd=jump.querySelector('div');
    var bodies=[];
    function safe(id){return 'che-vs-'+String(id).replace(/[^\w-]/g,'_')}
    Object.keys(gS).forEach(function(kind){
      if(!gS[kind].length)return;
      var h=document.createElement('h3');h.textContent=labelsS[kind]+' ('+gS[kind].length+')';wrap.appendChild(h);
      gS[kind].forEach(function(meta){
        var it=document.createElement('article');it.className='che-vs-item';it.id=safe(meta.id);it.dataset.s=(meta.title+' '+meta.id+' '+(meta.desc||'')).toLowerCase();
        var hd=document.createElement('header');var t=document.createElement('b');t.textContent=meta.title;var d=document.createElement('small');d.textContent=meta.desc||'';var c=document.createElement('code');c.textContent=meta.id;hd.appendChild(t);hd.appendChild(d);hd.appendChild(c);
        var bd=document.createElement('div');bd.className='che-vs-body';bd.dataset.vid=meta.id;bd.innerHTML='<div class="che-vs-wait">Wczytywanie…</div>';
        it.appendChild(hd);it.appendChild(bd);wrap.appendChild(it);bodies.push(bd);
        var a2=document.createElement('a');a2.href='#'+it.id;a2.textContent=meta.title;a2.onclick=function(e){e.preventDefault();it.scrollIntoView({behavior:'smooth',block:'start'});mountOne(bd)};jd.appendChild(a2);
      });
    });
    list.innerHTML='';list.appendChild(jump);list.appendChild(wrap);
    function mountOne(bd){
      if(bd.dataset.mounted)return;bd.dataset.mounted='1';var id=bd.dataset.vid;bd.innerHTML='';
      if(id.indexOf('w:')===0){var wn=id.slice(2),art=document.getElementById('c-'+WMAP[wn]);if(!art){bd.innerHTML='<div class="note">Brak widgetu '+esc(wn)+'.</div>';return}
        art.hidden=false;bd.appendChild(art);try{C.mount(wn,art,{source:'CHE.stack',engine:'FULL_ENGINE'})}catch(e){bd.insertAdjacentHTML('beforeend','<div class="note">Błąd: '+esc(e.message||e)+'</div>')}return}
      try{
        if(C.VIEW&&C.VIEW.views&&C.VIEW.views.get&&C.VIEW.views.get(id)&&C.VIEW.mount){bd.dataset.che=id;C.VIEW.mount(bd);}
        else if(C.VISUAL_REGISTRY&&C.VISUAL_REGISTRY.mount){C.VISUAL_REGISTRY.mount(id,bd);}
        else bd.innerHTML='<div class="note">Brak lokalnego renderera dla <code>'+esc(id)+'</code>.</div>';
        if(!bd.firstChild)bd.innerHTML='<div class="note">Ten widok nie ma osobnego renderera — otwiera się w Atlasie.</div>';
      }catch(e){bd.innerHTML='<div class="note">Błąd montażu: '+esc(e.message||e)+'</div>';}
    }
    if(typeof IntersectionObserver!=='undefined'){
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);mountOne(e.target)}})},{rootMargin:'600px 0px'});
      bodies.forEach(function(b){io.observe(b)});
    } else bodies.forEach(mountOne);
    filterStack(sInp?sInp.value:'');
    return;
  }
  list.style.removeProperty('display');
  var st0=$('che-vs-status');if(st0)st0.textContent=items.length+' dostępnych';
  var groups={atlas:[],library:[],view:[]}; items.forEach(function(x){(groups[x.kind]||groups.view).push(x);});
  var labels={atlas:'Atlas — modele źródłowe',library:'Biblioteka wizualizacji',view:'Pozostałe CHE VIEW'};
  Object.keys(groups).forEach(function(kind){
    if(!groups[kind].length)return;
    var h=document.createElement('div');h.style.cssText='grid-column:1/-1;margin:14px 0 2px;font-weight:800;color:var(--tx)';h.textContent=labels[kind];list.appendChild(h);
    groups[kind].forEach(function(meta){
      var b=document.createElement('button');b.type='button';b.className='che-viz-pick';b.dataset.che=meta.id;
      b.innerHTML='<b>'+esc(meta.title)+'</b><small>'+esc(meta.desc||meta.kind)+'</small><small style="opacity:.65">ID: '+esc(meta.id)+'</small>';
      b.onclick=function(){
        var target=document.getElementById('che-visual-focus');if(target)target.remove();
        target=document.createElement('section');target.id='che-visual-focus';target.className='che-viz-focus';
        var close=document.createElement('button');close.type='button';close.className='che-viz-close';close.textContent='× Zamknij';close.onclick=function(){target.remove();};target.appendChild(close);
        var title=document.createElement('h3');title.textContent=meta.title;title.style.margin='0 0 12px';target.appendChild(title);
        var body=document.createElement('div');body.className='che-viz-focus-body';target.appendChild(body);pane.appendChild(target);
        try{
          if(C.VIEW&&C.VIEW.views&&C.VIEW.views.get&&C.VIEW.views.get(meta.id)&&C.VIEW.mount){body.dataset.che=meta.id;C.VIEW.mount(body);}
          else if(C.VISUAL_REGISTRY&&C.VISUAL_REGISTRY.mount) C.VISUAL_REGISTRY.mount(meta.id,body);
          else body.innerHTML='<div class="note">Brak lokalnego renderera dla <code>'+esc(meta.id)+'</code>.</div>';
        }catch(e){body.innerHTML='<div class="note">Błąd montażu: '+esc(e.message||e)+'</div>';}
        target.scrollIntoView({behavior:'smooth',block:'start'});
      };
      list.appendChild(b);
    });
  });
  if(!items.length)list.innerHTML='<div class="note">Rejestr wizualizacji nie został jeszcze załadowany.</div>';
}
function boot(){
  var saved=lsGet('che.theme')||'light';
  applyTheme(saved);
  buildLanding();
  ensureModBar();
  showLanding();
  document.documentElement.setAttribute('data-che-ui','ready');
  // neutralize old shell auto-atlas
  var app=document.querySelector('body > .app');
  if(app) app.style.display='none';
  var atlas=$('che-route-atlas'); if(atlas) atlas.classList.remove('show');

  window.CHE_PROJECT=Object.assign(window.CHE_PROJECT||{},{
    version:'0.193',
    route:openPanel,
    applyTheme:applyTheme,
    showLanding:showLanding,
    openLessonFullscreen:openLessonFullscreen
  });
  setTimeout(function(){
    if(document.body.classList.contains('che-landing')){
      ['engine','lessons','atlas','db','visual'].forEach(function(x){
        var r=$('che-route-'+x); if(r) r.classList.remove('show');
      });
      if(app) app.style.display='none';
    }
  },100);
  try{ console.info('[CHE landing v0.193]'); }catch(e){}
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
else boot();
})();

</script>
