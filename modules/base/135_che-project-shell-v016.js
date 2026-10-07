<script id="che-project-shell-v016">
(function(){
'use strict';
function $(id){return document.getElementById(id)}
function route(name){
 document.querySelectorAll('[data-che-route]').forEach(function(b){b.classList.toggle('on',b.dataset.cheRoute===name)});
 ['engine','lessons','atlas','db','visual'].forEach(function(x){var r=$('che-route-'+x);if(r)r.classList.toggle('show',x===name)});
 var app=document.querySelector('body > .app'); if(app) app.style.display=(name==='atlas')?'':'none';
 if(name==='lessons') initLessons(); if(name==='engine') fillEngine(); if(name==='db') fillDB();
 if(name==='visual'){ ensureVisualRoute(); renderVisualHub(); }
 window.scrollTo({top:0,behavior:'smooth'});
}
function initLessons(){
 var host=$('che-lessons-host'); if(!host)return;
 ['pane-lekcje','pane-wizual'].forEach(function(id){var p=$(id);if(p&&p.parentElement!==host)host.appendChild(p)});
 var sub=host.querySelector('#che-lessons-subnav');
 if(!sub){
  sub=document.createElement('div');sub.id='che-lessons-subnav';
  sub.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin:0 0 10px;padding:6px;background:var(--panel);border:1px solid var(--line);border-radius:10px';
  sub.innerHTML='<button data-lsub="lekcje" style="padding:7px 12px;border:1px solid var(--line);border-radius:8px;background:var(--ui,#1f5fa8);color:#fff;font:700 12px var(--sans)">Lekcje</button><button data-lsub="wizual" style="padding:7px 12px;border:1px solid var(--line);border-radius:8px;background:var(--panel-2);color:var(--tx);font:700 12px var(--sans)">Wizualizacje · wszystkie działające</button>';
  host.insertBefore(sub,host.firstChild);
  sub.querySelectorAll('[data-lsub]').forEach(function(b){b.onclick=function(){var isV=b.dataset.lsub==='wizual';var l=$('pane-lekcje'),v=$('pane-wizual');if(l)l.classList.toggle('show',!isV);if(v)v.classList.toggle('show',isV);sub.querySelectorAll('[data-lsub]').forEach(function(x){x.style.background=x===b?'var(--ui,#1f5fa8)':'var(--panel-2)';x.style.color=x===b?'#fff':'var(--tx)'});};});
 }
 if(!host.querySelector('#che-shared-visuals')){
  var sv=document.createElement('section');sv.id='che-shared-visuals';sv.style.cssText='margin-top:14px';
  sv.innerHTML='<div style="padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--panel)"><h3 style="margin:0 0 6px">Wspólna biblioteka wizualizacji</h3><p style="margin:0 0 12px;color:var(--muted)">Te same widoki mogą być używane przez Atlas i przez dowolną lekcję — bez kopiowania implementacji.</p><div id="che-shared-visual-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:8px"></div></div>';
  host.appendChild(sv);
  var grid=sv.querySelector('#che-shared-visual-grid');
  (C.VISUAL_REGISTRY?.groups||[]).forEach(function(g){g.items.forEach(function(x){var b=document.createElement('button');b.type='button';b.style.cssText='padding:10px;text-align:left;border:1px solid var(--line);border-radius:9px;background:var(--panel-2);color:var(--tx);cursor:pointer';b.innerHTML='<b>'+x[1]+'</b><small style="display:block;color:var(--muted);margin-top:3px">'+x[2]+'</small>';b.onclick=function(){if(g.kind==='atlas'){C.VISUAL_REGISTRY.mount(x[0]);}else{var pane=document.getElementById('pane-wizual');if(pane){pane.classList.add('show');pane.scrollIntoView({behavior:'smooth',block:'start'});setTimeout(function(){var q=pane.querySelector('[data-che="'+x[0]+'"]');if(q)q.scrollIntoView({behavior:'smooth',block:'center'});},100);}}};grid.appendChild(b)})});
 }
 var l=$('pane-lekcje'),v=$('pane-wizual'); if(l)l.classList.add('show'); if(v)v.classList.remove('show');
 var nav=document.querySelector('.tabnav'); if(nav)nav.style.display='none';
}
function fillEngine(){
 var C=window.CHE||{},E=C.ENGINE||{},A=C.AUDIT||{},EA=C.ENGINE_AUDIT||{};
 $('che-eng-version').textContent=E.version||C.version||'aktywny';
 var ok=true, auditParts=[];
 try{if(typeof A.run==='function'){var r=A.run();ok=!!(r&&r.ok!==false);auditParts.push('AUDIT.run: '+(ok?'OK':'UWAGI'))}}catch(e){ok=false;auditParts.push('AUDIT.run: błąd')}
 if(EA.widgetMigration)auditParts.push('widget migration'); if(EA.localDataAudit)auditParts.push('local-data audit'); if(EA.experiments)auditParts.push('experiments audit');
 $('che-audit-status').textContent=ok?'OK':'UWAGA'; $('che-audit-status').className='che-kpi '+(ok?'che-ok':''); $('che-audit-text').textContent=auditParts.length?auditParts.join(' · '):'Rejestr audytów jest dostępny, ale nie zgłosił jeszcze wyniku.';
 var n=0; try{n=(A.tests&&Object.keys(A.tests).length)||Object.keys(EA).length||0}catch(e){} $('che-test-count').textContent=String(n);
}
function fillDB(){
 var C=window.CHE||{},D=C.DATA||{};
 var count=function(x){return x&&typeof x==='object'?Object.keys(x).length:0};
 var elems=D.ELEMENTS||D.elements||C.ELEMENTS||{}; var rx=D.REACTIONS||D.REACTION_DATA||D.reactions||{}; var mol=C.MOLECULE?.DATA||D.MOLECULES||D.molecules||{};
 $('che-db-elements').textContent=count(elems)||'118+'; $('che-db-reactions').textContent=count(rx)||'central'; $('che-db-molecules').textContent=count(mol)||'central';
 $('che-db-detail').textContent='Źródła aktywne: '+['DATA','ATOM','CHEM','REACTION','MOLECULE','PROFILE','SUBSTANCE'].filter(function(k){return !!(C[k]||D[k])}).join(' · ')+' . Szczegółowe rekordy pozostają w centralnej bazie — ten ekran jest tylko jej indeksem.';
}
function bind(){document.querySelectorAll('[data-che-route]').forEach(function(b){b.addEventListener('click',function(){if(window.CHE_PROJECT&&Number(window.CHE_PROJECT.version)>=0.182){window.CHE_PROJECT.route(b.dataset.cheRoute);return;}route(b.dataset.cheRoute);})}); /* home gate owns first paint */}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();
window.CHE_PROJECT={version:'0.17',route:route,fillEngine:fillEngine,fillDB:fillDB,initLessons:initLessons};
})();
</script>

