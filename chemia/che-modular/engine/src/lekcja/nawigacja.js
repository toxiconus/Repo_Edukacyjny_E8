/* nawigacja.js — hamburger ze spisem treści + zakładka czytania (wspólne: lekcje CHE z silnikiem i lekcje „lite”). */
/* pływający hamburger (lewy górny róg): wysuwany spis treści z linków .toc-links lekcji, podświetla bieżącą sekcję (2026-10-11) */
(function(){
function init(){var root=document.querySelector('.che-lfs-lesson')||document,src=root.querySelector('.toc-links');if(!src||document.getElementById('che-toc-fab'))return;
 var fab=document.createElement('button');fab.id='che-toc-fab';fab.type='button';fab.className='che-toc-fab';fab.setAttribute('aria-label','Spis treści');fab.setAttribute('aria-expanded','false');fab.setAttribute('aria-controls','che-toc-drawer');fab.innerHTML='<span></span><span></span><span></span>';
 var ov=document.createElement('div');ov.className='che-toc-ov';
 var dr=document.createElement('aside');dr.id='che-toc-drawer';dr.className='che-toc-drawer';dr.setAttribute('aria-label','Spis treści');dr.setAttribute('aria-hidden','true');
 var h=document.createElement('div');h.className='che-toc-head';h.textContent='Spis treści';var nav=src.cloneNode(true);nav.removeAttribute('id');dr.appendChild(h);dr.appendChild(nav);
 document.body.appendChild(ov);document.body.appendChild(dr);document.body.appendChild(fab);
 function set(on){dr.classList.toggle('on',on);ov.classList.toggle('on',on);fab.classList.toggle('on',on);fab.setAttribute('aria-expanded',on?'true':'false');dr.setAttribute('aria-hidden',on?'false':'true');if(on){var c=nav.querySelector('.cur');if(c&&c.scrollIntoView)c.scrollIntoView({block:'center'})}}
 fab.onclick=function(){set(!dr.classList.contains('on'))};ov.onclick=function(){set(false)};
 document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
 nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
 var links=[].slice.call(nav.querySelectorAll('a[href^="#"]')),secs=links.map(function(a){return root.querySelector?root.querySelector(a.getAttribute('href'))||document.getElementById(a.getAttribute('href').slice(1)):null});
 function spy(){var y=120,k=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<y)k=i});links.forEach(function(a,i){a.classList.toggle('cur',i===k)})}
 window.addEventListener('scroll',spy,{passive:true});document.addEventListener('scroll',spy,{passive:true,capture:true});spy()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();setTimeout(init,600);setTimeout(init,2000)})();
/* zakładka jak w książce (prawy brzeg): wysuwany języczek — zaznacz miejsce, wróć, usuń; pamięć w przeglądarce (localStorage) (2026-10-11) */
(function(){
var KEY='che-zakladka:'+(document.title||location.pathname),SEL='h2,h3,h4,p,li,table,details,.card,.karta,figure';
function store(){try{return window.localStorage}catch(e){return null}}
function get(){var s=store();if(!s)return null;try{return JSON.parse(s.getItem(KEY)||'null')}catch(e){return null}}
function put(v){var s=store();if(!s)return false;try{v?s.setItem(KEY,JSON.stringify(v)):s.removeItem(KEY);return true}catch(e){return false}}
function init(){var root=document.querySelector('.che-lfs-lesson')||document.querySelector('main')||document.body;if(!root||document.getElementById('che-zakl'))return;
 var T=[].slice.call(root.querySelectorAll('.toc-links a[href^="#"]')).map(function(a){return {t:a.textContent.trim(),e:document.getElementById(a.getAttribute('href').slice(1))}}).filter(function(x){return x.e});if(!T.length)return;
 function els(){return [].slice.call(root.querySelectorAll(SEL)).filter(function(e){return e.offsetParent!==null&&!e.closest('#che-toc-drawer,#che-zakl')})}
 function secOf(e){var s='';if(!e)return s;T.forEach(function(x){if(x.e===e||x.e.contains(e)||(x.e.compareDocumentPosition(e)&4))s=x.t});return s}
 var w=document.createElement('div');w.id='che-zakl';w.className='che-zakl';
 w.innerHTML='<button type="button" class="che-zakl-tab" aria-expanded="false" aria-label="Zakładka — zapisz miejsce czytania"><span class="che-zakl-ico"></span></button>'+
  '<div class="che-zakl-panel" role="dialog" aria-label="Zakładka"><b>Zakładka</b><p class="che-zakl-info"></p>'+
  '<button type="button" data-a="set">Zaznacz to miejsce</button><button type="button" data-a="go">Wróć do zakładki</button><button type="button" data-a="del">Usuń zakładkę</button><button type="button" data-a="hide" class="che-zakl-x">Schowaj</button></div>';
 document.body.appendChild(w);var tab=w.querySelector('.che-zakl-tab'),info=w.querySelector('.che-zakl-info');
 var mark=null;function paint(){var z=get();if(mark){mark.classList.remove('che-zakl-mark');mark=null}
  w.classList.toggle('ma',!!z);w.querySelector('[data-a=go]').disabled=!z;w.querySelector('[data-a=del]').disabled=!z;
  if(z){var e=els()[z.i];if(e){mark=e;e.classList.add('che-zakl-mark')}info.textContent='Zapisana: '+(z.s||'początek lekcji')+' · '+z.d}else info.textContent=store()?'Brak zakładki. Przewiń do miejsca, w którym kończysz, i kliknij „Zaznacz”.':'Przeglądarka nie pozwala zapisać zakładki (tryb prywatny?).'}
 function open(on){w.classList.toggle('on',on);tab.setAttribute('aria-expanded',on?'true':'false')}
 function here(){var L=els(),y=Math.min(140,window.innerHeight*.25),k=0;for(var i=0;i<L.length;i++){var r=L[i].getBoundingClientRect();if(r.bottom>y){k=i;break}}return k}
 function go(){var z=get();if(!z)return;var e=els()[z.i];if(e){e.scrollIntoView({block:'start',behavior:'smooth'});e.classList.add('che-zakl-blink');setTimeout(function(){e.classList.remove('che-zakl-blink')},1600)}}
 tab.onclick=function(){paint();open(!w.classList.contains('on'))};
 w.querySelector('.che-zakl-panel').onclick=function(ev){var a=ev.target.getAttribute&&ev.target.getAttribute('data-a');if(!a)return;
  if(a==='set'){var i=here(),e=els()[i],d=new Date();put({i:i,s:secOf(e),d:d.toLocaleDateString('pl-PL')+' '+d.toLocaleTimeString('pl-PL',{hour:'2-digit',minute:'2-digit'})});paint();open(false)}
  else if(a==='go'){open(false);go()}else if(a==='del'){put(null);paint()}else open(false)};
 document.addEventListener('keydown',function(e){if(e.key==='Escape')open(false)});
 /* języczek chowa się przy przewijaniu w dół, wraca przy przewijaniu w górę albo po zatrzymaniu */
 var last=null,t=null;function sc(){var y=(document.scrollingElement||document.documentElement).scrollTop+(root.scrollTop||0);var sEl=document.querySelector('.che-lfs-lesson');
  if(last!=null&&!w.classList.contains('on')){if(y>last+8)w.classList.add('schowany');else if(y<last-8)w.classList.remove('schowany')}last=y;clearTimeout(t);t=setTimeout(function(){w.classList.remove('schowany')},1400)}
 window.addEventListener('scroll',sc,{passive:true});document.addEventListener('scroll',sc,{passive:true,capture:true});
 paint();var z=get();if(z){var n=document.createElement('div');n.className='che-zakl-toast';n.innerHTML='Masz zakładkę: <b></b> <button type="button">Wróć</button><button type="button" aria-label="Zamknij">×</button>';n.querySelector('b').textContent=z.s||'początek lekcji';
  var bs=n.querySelectorAll('button');bs[0].onclick=function(){n.remove();go()};bs[1].onclick=function(){n.remove()};document.body.appendChild(n);setTimeout(function(){if(n.parentNode)n.remove()},9000)}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();setTimeout(init,700);setTimeout(init,2100)})();
