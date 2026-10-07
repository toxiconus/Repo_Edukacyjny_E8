<script id="che-home-gate-v0182">
(function(){
'use strict';
var C=window.CHE=window.CHE||{};
C.HOME_GATE={version:'0.193'};
function $(id){return document.getElementById(id)}
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

function applyTheme(mode){
  var m=(mode==='dark'||mode==='night')?'dark':'light';
  if(m==='dark') document.documentElement.setAttribute('data-theme','dark');
  else document.documentElement.removeAttribute('data-theme');
  lsSet('che.theme',m);
  document.querySelectorAll('[data-theme-opt]').forEach(function(b){
    b.classList.toggle('on', b.dataset.themeOpt===(m==='dark'?'night':'day'));
  });
  var meta=document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', m==='dark'?'#0f1419':'#eef2f6');
  return m;
}

var PANELS={
  lessons:{title:'Lekcje',desc:'Przedmioty i lekcje'},
  atlas:{title:'Atlas',desc:'Pierwiastki, modele atomu, dane'},
  visual:{title:'Wizualizacje',desc:'Wspólna biblioteka widoków i widgetów'},
  engine:{title:'Silnik',desc:'Wersja, audyt, diagnostyka'}
};

function ensureModBar(){
  if($('che-mod-bar')) return $('che-mod-bar');
  var bar=document.createElement('div');
  bar.id='che-mod-bar';
  bar.innerHTML='<button type="button" id="che-mod-back">← Start</button><div id="che-mod-title"></div>';
  document.body.insertBefore(bar, document.body.firstChild);
  $('che-mod-back').onclick=function(){ showLanding(); };
  bar.querySelectorAll('[data-theme-opt]').forEach(function(b){
    b.onclick=function(){ applyTheme(b.dataset.themeOpt==='night'?'dark':'light'); };
  });
  return bar;
}

function ensureVisualRoute(){
  var r=$('che-route-visual');
  if(!r){
    r=document.createElement('div'); r.id='che-route-visual'; r.className='che-route';
    r.innerHTML='<div class="che-route-inner" id="che-visual-host"></div>';
    var lessons=$('che-route-lessons');
    if(lessons&&lessons.parentNode) lessons.parentNode.insertBefore(r, lessons.nextSibling);
    else document.body.appendChild(r);
  }
  var pane=$('pane-wizual'), host=$('che-visual-host');
  if(pane&&host&&pane.parentNode!==host) host.appendChild(pane);
  if(pane){pane.classList.add('show');pane.style.display='block';}
  return r;
}

/* v0.57: strona startowa — skróty do lekcji, „kontynuuj”, liczby z silnika */
var SUBJ_ORDER={chemia:0,fizyka:1};
function fillLanding(){
  var land=$('che-landing');if(!land)return;
  var reg=(C.LESSONS&&C.LESSONS.registry)||{},ids=Object.keys(reg);
  ids.sort(function(a,b){var A=reg[a],B=reg[b],sa=SUBJ_ORDER[A.subject]!=null?SUBJ_ORDER[A.subject]:9,sb=SUBJ_ORDER[B.subject]!=null?SUBJ_ORDER[B.subject]:9;return sa-sb||String(A.code||a).localeCompare(String(B.code||b))});
  var host=$('che-land-lessons');
  if(host){host.innerHTML=ids.length?ids.map(function(id){var m=reg[id],d=String(m.description||'').split(' · ').slice(0,4).join(' · '),n=(m.visuals||[]).length;
    return '<button type="button" class="che-land-les" data-les="'+esc(id)+'"><span class="code s-'+esc(m.subject||'chemia')+'">'+esc(m.code||id)+'</span><b>'+esc(String(m.title||id).replace(/\s*\((fizyka|chemia)\)\s*$/,''))+'</b><small>'+esc(d)+'</small><span class="meta">'+esc(m.subject||'chemia')+(n?' · '+n+' modeli':'')+'</span></button>'}).join(''):'<p class="che-land-empty">Brak zarejestrowanych lekcji.</p>';
    host.querySelectorAll('[data-les]').forEach(function(b){b.onclick=function(){openLessonFullscreen(b.dataset.les)}})}
  var r=$('che-land-resume'),last=lsGet('che.lastLesson'),lm=last&&reg[last];
  if(r){r.innerHTML=lm?'<button type="button" class="che-land-resume" data-les="'+esc(last)+'"><span>Kontynuuj</span><b>'+esc(lm.code||last)+' · '+esc(lm.title||'')+'</b><em>Wróć do lekcji →</em></button>':'';
    var rb=r.querySelector('[data-les]');if(rb)rb.onclick=function(){openLessonFullscreen(rb.dataset.les)}}
  var st=$('che-land-stats');if(st){var nv=0,nr=0,ne=0;try{nv=C.VIEW&&C.VIEW.views?C.VIEW.views.size:0}catch(e){}try{nr=C.REACTION&&C.REACTION.list?C.REACTION.list().length:0}catch(e){}try{var E=(C.DATA||{}).ELEMENTS_118;ne=E?(E.length||Object.keys(E).length):0}catch(e){}
    var it=[[ids.length,'lekcji'],[nv,'modeli i widoków'],[nr,'reakcji w silniku'],[ne,'pierwiastków w atlasie']].filter(function(x){return x[0]});
    st.innerHTML=it.map(function(x){return '<span><b>'+x[0]+'</b> '+x[1]+'</span>'}).join('')}
  if(!C.APP_VERSION&&!/^__/.test('__CHE_APP_VERSION__'))C.APP_VERSION='__CHE_APP_VERSION__';
  var v=$('che-land-ver');if(v&&C.APP_VERSION)v.textContent='wersja '+C.APP_VERSION;
}
function bindLanding(land){
  setTimeout(fillLanding,0);
  land.querySelectorAll('[data-theme-opt]').forEach(function(b){
    b.onclick=function(){ applyTheme(b.dataset.themeOpt==='night'?'dark':'light'); };
  });
  land.querySelectorAll('[data-panel]').forEach(function(b){
    b.onclick=function(){ openPanel(b.dataset.panel); };
  });
}
function buildLanding(){
  if($('che-landing')){ bindLanding($('che-landing')); return; }
  var land=document.createElement('div');
  land.id='che-landing';
  land.innerHTML=[
    '<div class="che-land-top">',
    ' <div class="che-land-brand"><b>CHE · LAB</b><small>Chemia i fizyka od klasy 7 do matury rozszerzonej: lekcje, atlas pierwiastków i modele — wszystko liczone przez jeden silnik.</small><span class="che-land-ver" id="che-land-ver"></span></div>',
    ' <div class="che-theme-switch" role="group" aria-label="Motyw">',
    '  <button type="button" data-theme-opt="day" class="on">Dzień</button>',
    '  <button type="button" data-theme-opt="night">Noc</button>',
    ' </div>',
    '</div>',
    '<div id="che-land-resume"></div>',
    '<div class="che-land-sec"><h3>Lekcje</h3><button type="button" class="che-land-more" data-panel="lessons">Wszystkie przedmioty i lekcje →</button></div>',
    '<div class="che-land-lessons" id="che-land-lessons"></div>',
    '<div class="che-land-sec"><h3>Narzędzia</h3></div>',
    '<div class="che-land-grid">',
    ' <button type="button" class="che-land-card" data-panel="atlas"><span class="che-land-ico">◈</span><h2>Atlas</h2><p>Układ okresowy, budowa atomu, karty danych pierwiastków i katalog reakcji.</p><span class="go">Otwórz →</span></button>',
    ' <button type="button" class="che-land-card" data-panel="visual"><span class="che-land-ico">◉</span><h2>Wizualizacje</h2><p>Wszystkie modele silnika — z informacją, w której lekcji są użyte.</p><span class="go">Otwórz →</span></button>',
    ' <button type="button" class="che-land-card" data-panel="lessons"><span class="che-land-ico">▣</span><h2>Przedmioty</h2><p>Lekcje według przedmiotów i modele z każdej lekcji w jednym miejscu.</p><span class="go">Otwórz →</span></button>',
    ' <button type="button" class="che-land-card" data-panel="engine"><span class="che-land-ico">◎</span><h2>Silnik</h2><p>Wersja silnika, audyt spójności, testy i diagnostyka.</p><span class="go">Otwórz →</span></button>',
    '</div>',
    '<div class="che-land-stats" id="che-land-stats"></div>'
  ].join('');
  // place after shell or at top of body content
  var shell=$('che-project-shell');
  if(shell&&shell.parentNode) shell.parentNode.insertBefore(land, shell.nextSibling);
  else document.body.appendChild(land);

  land.querySelectorAll('[data-theme-opt]').forEach(function(b){
    b.onclick=function(){ applyTheme(b.dataset.themeOpt==='night'?'dark':'light'); };
  });
  land.querySelectorAll('[data-panel]').forEach(function(b){
    b.onclick=function(){ openPanel(b.dataset.panel); };
  });
}

function showLanding(){
  document.body.classList.add('che-landing');
  document.body.classList.remove('che-in-module','che-lesson-fs-open');
  if(window.CHE&&CHE.LESSON_CONTEXT) CHE.LESSON_CONTEXT.clear();
  var fs=$('che-lesson-fs'); if(fs) fs.classList.remove('open');
  ['engine','lessons','atlas','db','visual'].forEach(function(x){
    var r=$('che-route-'+x); if(r) r.classList.remove('show');
  });
  var app=document.querySelector('body > .app');
  if(app) app.style.display='none';
  applyTheme(lsGet('che.theme')||'light');
  fillLanding();
}

C.HOME_GATE.openPanel=function(n){openPanel(n)};function openPanel(name){
  ensureModBar();
  if(name==='visual') ensureVisualRoute();
  document.body.classList.remove('che-landing');
  document.body.classList.add('che-in-module');
  var meta=PANELS[name]||{title:name};
  var t=$('che-mod-title'); if(t) t.textContent=meta.title;
  applyTheme(lsGet('che.theme')||'light');

  ['engine','lessons','atlas','db','visual'].forEach(function(x){
    var r=$('che-route-'+x); if(r) r.classList.toggle('show', x===name);
  });
  var app=document.querySelector('body > .app');
  if(app) app.style.display = name==='atlas' ? '' : 'none';

  if(name==='lessons'){ if(C.HUB&&C.HUB.lessonsPanel){ try{ if(window.CHE_PROJECT&&window.CHE_PROJECT.initLessons) window.CHE_PROJECT.initLessons(); }catch(e){} C.HUB.lessonsPanel($('che-lessons-host')); } else renderLessonsHub(); }
  if(name==='visual'){ ensureVisualRoute(); if(C.HUB&&C.HUB.visuals) C.HUB.visuals($('che-visual-host')); else renderVisualHub(); }
  if(name==='engine' && window.CHE_PROJECT&&window.CHE_PROJECT.fillEngine){
    try{ window.CHE_PROJECT.fillEngine(); }catch(e){}
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

/* —— Lekcje: hub z linkami (lekcje osobno, wizualizacje w lekcjach osobno) —— */
var LESSON_VIZ=C.LESSON_VIZ_LEGACY={
  N03:[
    {id:'obtaining-three',title:'Trzy drogi otrzymywania kwasów',group:'schemat'},
    {id:'obtaining-hcl-steps',title:'Otrzymywanie HCl — etapy',group:'schemat'},
    {id:'flow-naming',title:'Jak nazwać kwas — algorytm',group:'schemat'},
    {id:'naming-table',title:'Wzór → nazwa → reszta',group:'schemat'},
    {id:'reszta-builder',title:'Reszta kwasowa — builder',group:'lab'},
    {id:'diss-hcl-mech-v02',title:'Dysocjacja HCl — mechanizm',group:'lab'},
    {id:'ion-vs-diss',title:'Jonizacja vs dysocjacja',group:'schemat'},
    {id:'diss-three-levels',title:'Trzy poziomy zapisu dysocjacji',group:'schemat'},
    {id:'reactor-enhanced',title:'Reaktor dysocjacji',group:'lab'},
    {id:'acid-table',title:'Tabela mocy kwasów',group:'schemat'},
    {id:'strong-vs-weak-enhanced-v02',title:'Mocne vs słabe',group:'lab'},
    {id:'chart-strength',title:'Wykres α',group:'schemat'},
    {id:'ph-indicators-v03',title:'Panel wskaźników pH',group:'lab'},
    {id:'ind-lab',title:'Lab wskaźników',group:'lab'},
    {id:'metal-reaction-v02',title:'Metal + kwas',group:'lab'},
    {id:'neutralization',title:'Zobojętnianie',group:'lab'},
    {id:'reakcje-kwasu-v03',title:'Reakcje kwasów — przewidź i sprawdź',group:'lab'},
    {id:'lab-beaker-v102',title:'CHE.LAB — uniwersalna zlewka v1.02',group:'lab'},
    {id:'lab-oxides-v102',title:'CHE.LAB — tlenki (L02) v1.02',group:'lab'},
    {id:'beaker-prediction-enhanced',title:'Zlewka — osady i barwy',group:'lab'},
    {id:'acid-rain-v01',title:'Kwaśne deszcze',group:'schemat'},
    {id:'safety',title:'BHP',group:'schemat'},
    {id:'carboxyl',title:'Grupa karboksylowa',group:'schemat'},
    {id:'timeline',title:'Historia pojęcia kwasu',group:'schemat'},
    {id:'titration-merged',title:'Miareczkowanie',group:'lab'},
    {id:'buffer',title:'Bufor',group:'lab'},
    {id:'mind-map',title:'Mapa myśli',group:'schemat'}
  ],
  L001:[{id:'periodicMini',title:'Mini układ okresowy',group:'lab'},{id:'oxideBuilder',title:'Budowa tlenku',group:'lab'},{id:'charSim',title:'Charakter tlenku',group:'lab'}],
  L002:[{id:'charSim',title:'Charakter tlenku',group:'lab'},{id:'oxGallery',title:'Galeria tlenków',group:'lab'},{id:'mapaReakcji',title:'Mapa reakcji',group:'schemat'}]
};

function renderLessonsHub(){
  var host=$('che-lessons-host');
  if(!host) return;
  // keep initLessons for registry if available, but replace hub UI
  try{ if(window.CHE_PROJECT&&window.CHE_PROJECT.initLessons) window.CHE_PROJECT.initLessons(); }catch(e){}

  var L=C.LESSONS||{};
  var reg=L.registry||{};
  var ids=Object.keys(reg);

  host.innerHTML='';
  var hub=document.createElement('div');
  hub.className='che-hub';
  hub.innerHTML='<h1>Lekcje</h1><p class="sub">Wybierz lekcję (pełny ekran) albo przejdź do wizualizacji powiązanych z lekcjami.</p>';

  // Section 1: lesson links
  var s1=document.createElement('div');
  s1.className='che-hub-section';
  s1.innerHTML='<h3>Lekcje — pełna treść</h3>';
  var list=document.createElement('div');
  list.className='che-hub-list';
  if(!ids.length){
    list.innerHTML='<div class="che-viz-placeholder" style="padding:12px;border:1px dashed var(--line);border-radius:10px;color:var(--mut)">Brak zarejestrowanych lekcji w CHE.LESSONS.registry.</div>';
  } else {
    ids.forEach(function(id){
      var m=reg[id];
      var btn=document.createElement('button');
      btn.type='button';
      btn.className='che-hub-link';
      btn.innerHTML='<div><b>'+esc(m.code||id)+' · '+esc(m.title||id)+'</b><span>'+esc(m.description||'Otwórz lekcję na pełnym ekranie')+'</span></div><span class="chev">→</span>';
      btn.onclick=function(){ openLessonFullscreen(id); };
      list.appendChild(btn);
    });
  }
  s1.appendChild(list);
  hub.appendChild(s1);

  // Section 2: visualizations used in lessons
  var s2=document.createElement('div');
  s2.className='che-hub-section';
  s2.innerHTML='<h3>Wizualizacje w lekcjach</h3>';
  var list2=document.createElement('div');
  list2.className='che-hub-list';
  Object.keys(LESSON_VIZ).forEach(function(code){
    var btn=document.createElement('button');
    btn.type='button';
    btn.className='che-hub-link';
    var vids=LESSON_VIZ[code];
    var names=vids.map(function(v){return typeof v==='string'?v:(v.title||v.id)}).slice(0,6).join(' · ');
    if(vids.length>6) names+=' · +'+(vids.length-6)+' więcej';
    btn.innerHTML='<div><b>'+code+' · wizualizacje ('+vids.length+')</b><span>'+esc(names)+'</span></div><span class="chev">→</span>';
    btn.onclick=function(){ openLessonVizStack(code, vids); };
    list2.appendChild(btn);
  });
  // also pull from registry.visuals if present
  Object.keys(reg).forEach(function(id){
    var m=reg[id];
    if(!m||!m.visuals||!m.visuals.length) return;
    if(LESSON_VIZ[m.code||id]) return;
    var btn=document.createElement('button');
    btn.type='button'; btn.className='che-hub-link';
    var vids=m.visuals.map(function(x){return {id:x,title:x}});
    btn.innerHTML='<div><b>'+esc(m.code||id)+' · z rejestru</b><span>'+esc(m.visuals.slice(0,8).join(' · '))+'</span></div><span class="chev">→</span>';
    btn.onclick=function(){ openLessonVizStack(m.code||id, vids); };
    list2.appendChild(btn);
  });
  s2.appendChild(list2);
  hub.appendChild(s2);

  host.appendChild(hub);
}

function openLessonVizStack(code, vids){
  ensureModBar();
  document.body.classList.remove('che-landing');
  document.body.classList.add('che-in-module');
  if(C.LESSON_CONTEXT) C.LESSON_CONTEXT.activate(code);
  var t=$('che-mod-title'); if(t) t.textContent='Wizualizacje · '+code;
  ensureVisualRoute();
  ['engine','lessons','atlas','db','visual'].forEach(function(x){
    var r=$('che-route-'+x); if(r) r.classList.toggle('show', x==='visual');
  });
  var host=$('che-visual-host');
  if(!host) return;
  var schemat=[], lab=[];
  (vids||[]).forEach(function(item){
    var g=(typeof item==='object'&&item.group)||'lab';
    if(g==='schemat') schemat.push(item); else lab.push(item);
  });
  host.innerHTML='<div class="che-hub"><h1>'+esc(code)+' — wizualizacje</h1><p class="sub">Jedno źródło w bibliotece. <b>Schematy i mapy</b> (tablice, algorytmy) oraz <b>lab / modele</b> (interakcja). Dane z silnika.</p>'
    +(schemat.length?'<h3 class="che-hub-section" style="margin-top:18px">Schematy · mapy · tablice</h3><div class="che-viz-stack" id="che-lesson-viz-schemat"></div>':'')
    +(lab.length?'<h3 class="che-hub-section" style="margin-top:18px">Lab · modele interaktywne</h3><div class="che-viz-stack" id="che-lesson-viz-lab"></div>':'')
    +'</div>';
  function mountList(list, stackId){
  var stack=$(stackId); if(!stack) return;
  list.forEach(function(item){
    var vid=typeof item==='string'?item:(item.id||item);
    var title=typeof item==='string'?item:(item.title||item.id||vid);
    var card=document.createElement('article');
    card.className='che-viz-card';
    card.style.cssText='border:1px solid var(--line);border-radius:12px;background:var(--panel);margin-bottom:12px;overflow:hidden';
    card.innerHTML='<header style="padding:10px 14px;border-bottom:1px solid var(--line);background:var(--panel-2)"><b>'+esc(title)+'</b><div style="font:12px system-ui;color:var(--mut)"><code>'+esc(vid)+'</code></div></header><div class="body" style="padding:12px"></div>';
    var body=card.querySelector('.body');
    stack.appendChild(card);
    try{
      if(C.LESSON_CONTEXT&&typeof C.LESSON_CONTEXT.mount==='function'){
        C.LESSON_CONTEXT.mount(vid, body, {lesson:code, badge:true});
      } else {
        var hasView=C.VIEW&&C.VIEW.views&&typeof C.VIEW.views.get==='function'&&C.VIEW.views.get(vid);
        if(hasView&&typeof C.VIEW.mount==='function'){ body.dataset.che=vid; C.VIEW.mount(body); }
        else if(typeof C.mount==='function'&&C.LEGACY_WIDGETS&&C.LEGACY_WIDGETS.has&&C.LEGACY_WIDGETS.has(vid)){
          C.mount(vid, body, {source:'LESSON_VIZ'});
        } else {
          body.innerHTML='<div style="color:var(--mut);font:13px system-ui">Brak rendereru dla <code>'+esc(vid)+'</code>.</div>';
        }
      }
    }catch(e){ body.textContent=String(e.message||e); }
  });
  }
  mountList(schemat,'che-lesson-viz-schemat');
  mountList(lab,'che-lesson-viz-lab');
}

C.HOME_GATE.openLesson=function(i){openLessonFullscreen(i)};function openLessonFullscreen(id){
  var L=C.LESSONS||{};
  var m=(L.registry&&L.registry[id])||null;
  if(!m){ alert('Brak lekcji: '+id); return; }
  lsSet('che.lastLesson',id);
  var ov=$('che-lesson-fs');
  if(!ov){
    ov=document.createElement('div');
    ov.id='che-lesson-fs';
    document.body.appendChild(ov);
  }
  ov.classList.add('open');
  document.body.classList.add('che-lesson-fs-open');
  if(C.LESSON_CONTEXT) C.LESSON_CONTEXT.activate(m.code||id);
  ov.innerHTML='<div class="che-lfs-bar"><button type="button" id="che-lfs-close">\u2190 Wr\u00f3\u0107</button><div class="t">'+esc(m.code||id)+' \u00b7 '+esc(m.title||'')+'</div></div><div class="che-lfs-body" id="che-lfs-mount"></div>';
  $('che-lfs-close').onclick=function(){
    ov.classList.remove('open');
    document.body.classList.remove('che-lesson-fs-open');
    if(C.LESSON_CONTEXT) C.LESSON_CONTEXT.clear();
    fillLanding();
  };
  var body=$('che-lfs-mount');
  var srcEl=m.source?$(m.source):null;
  if(!srcEl){
    body.innerHTML='<div class="che-hub"><p>Brak \u017ar\u00f3d\u0142a lekcji.</p></div>';
    return;
  }
  var html=null, raw=(srcEl.textContent||'').trim();
  try{ html=JSON.parse(raw); }catch(e1){ console.warn('[CHE] parse', e1); html=null; }
  if(typeof html!=='string' || html.indexOf('<')<0){
    body.innerHTML='<div class="che-hub"><p>Nie uda\u0142o si\u0119 wczyta\u0107 tre\u015bci lekcji (<code>'+esc(m.source||'')+'</code>).</p></div>';
    return;
  }
  html=html.replace(/\\n/g,'\n');
  /* Wyci\u0105gnij body lekcji i osad\u017a w rodzicu \u2014 wizualizacje montuj\u0105 si\u0119 same */
  var tmp=document.createElement('div');
  var bodyMatch=html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  var headMatch=html.match(/<head[^>]*>([\s\S]*)<\/head>/i);
  var lessonBody=bodyMatch?bodyMatch[1]:html;
  var lessonHead=headMatch?headMatch[1]:'';
  /* style z head lekcji */
  var styleBits=[];
  lessonHead.replace(/