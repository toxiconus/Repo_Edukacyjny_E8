/* lekcja.js — wspólne zachowanie lekcji wszystkich przedmiotów: fiszki, test, treści akademickie,
   postęp czytania, podświetlenie spisu, tryb ciemny, montaż grafik przedmiotu (window.BIO / window.LEKCJA_VIZ). Edytuj tylko tutaj. */
(function(){
var html=document.documentElement;
function ciemny(){var t=html.getAttribute('data-theme');return t?t==='dark':!!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)}
function oznacz(){if(ciemny())html.setAttribute('data-ciemny','');else html.removeAttribute('data-ciemny')}
try{var z=localStorage.getItem('lekcja-motyw');if(z)html.setAttribute('data-theme',z)}catch(e){}
oznacz();if(window.matchMedia)try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',oznacz)}catch(e){}

function start(){
var root=document;
root.querySelectorAll('.flashcard').forEach(function(b){if(b.dataset.lkFz)return;b.dataset.lkFz=1;b.removeAttribute('onclick');b.setAttribute('aria-pressed','false');
 b.addEventListener('click',function(){var on=b.classList.toggle('flipped');b.setAttribute('aria-pressed',on?'true':'false')})});
root.querySelectorAll('.che-quiz').forEach(function(w){var sc=w.nextElementSibling,ok=0,n=0,all=w.querySelectorAll('.quiz-q').length;
 if(sc&&sc.classList.contains('quiz-score'))sc.setAttribute('aria-live','polite');
 w.querySelectorAll('.quiz-q').forEach(function(d){var good=+d.dataset.ok;d.querySelectorAll('.quiz-opt').forEach(function(b){b.onclick=function(){if(d.dataset.done)return;d.dataset.done=1;n++;if(+b.dataset.a===good)ok++;
  d.querySelectorAll('.quiz-opt').forEach(function(x){x.disabled=true;if(+x.dataset.a===good)x.classList.add('correct');else if(x===b)x.classList.add('wrong')});
  if(d.dataset.fb){var f=document.createElement('div');f.className='quiz-fb';f.innerHTML=d.dataset.fb;d.appendChild(f)}
  if(sc&&sc.classList.contains('quiz-score'))sc.textContent='Wynik: '+ok+' / '+n+(n===all?' — test ukończony':'')}})})});
var b=root.querySelector('#advToggle');
if(b){var adv=function(){return root.querySelectorAll('details.adv')},k=adv().length;
 if(!k)b.style.display='none';
 b.textContent='Pokaż treści akademickie ('+k+')';
 b.onclick=function(){var on=b.getAttribute('aria-pressed')!=='true';adv().forEach(function(d){d.open=on});b.setAttribute('aria-pressed',on?'true':'false');b.textContent=(on?'Ukryj':'Pokaż')+' treści akademickie ('+k+')'}}
// spis zwinięty na telefonie
var sp=root.querySelector('#spis');if(sp&&window.innerWidth<700)sp.removeAttribute('open');
// przełącznik jasny/ciemny
var tb=root.querySelector('#lkMotyw');
if(tb)tb.onclick=function(){var t=ciemny()?'light':'dark';html.setAttribute('data-theme',t);try{localStorage.setItem('lekcja-motyw',t)}catch(e){}oznacz()};
// postęp czytania + aktywna sekcja w spisie
var bar=root.querySelector('.lk-prog'),links={},secs=[];
root.querySelectorAll('.toc-link[href^="#"]').forEach(function(a){var s=document.getElementById(a.getAttribute('href').slice(1));if(s){links[s.id]=a;secs.push(s)}});
var tick=false;function upd(){tick=false;var h=document.documentElement,max=h.scrollHeight-h.clientHeight;
 if(bar)bar.style.transform='scaleX('+(max>0?Math.min(1,h.scrollTop/max):0)+')';
 var cur=null,lim=(parseInt(getComputedStyle(h).getPropertyValue('--header-h'))||52)+40;
 for(var i=0;i<secs.length;i++){if(secs[i].getBoundingClientRect().top<=lim)cur=secs[i];else break}
 for(var id in links)links[id].classList.toggle('on',!!cur&&cur.id===id)}
window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();
// grafiki przedmiotu
if(window.BIO&&BIO.mountAll)BIO.mountAll(root);
if(window.LEKCJA_VIZ&&LEKCJA_VIZ.mountAll)LEKCJA_VIZ.mountAll(root);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
