/* lekcja.js — zachowanie lekcji BIO: fiszki, test, treści akademickie, tryb dzienny/nocny, montaż grafik. Jedno źródło dla wszystkich lekcji. */
(function(){
function start(){
var root=document;
root.querySelectorAll('.flashcard').forEach(function(b){if(b.dataset.bioFz)return;b.dataset.bioFz=1;b.addEventListener('click',function(){b.classList.toggle('flipped')})});
root.querySelectorAll('.che-quiz').forEach(function(w){var sc=w.nextElementSibling,ok=0,n=0;
 w.querySelectorAll('.quiz-q').forEach(function(d){var good=+d.dataset.ok;d.querySelectorAll('.quiz-opt').forEach(function(b){b.onclick=function(){if(d.dataset.done)return;d.dataset.done=1;n++;if(+b.dataset.a===good)ok++;
  d.querySelectorAll('.quiz-opt').forEach(function(x){x.disabled=true;if(+x.dataset.a===good)x.classList.add('correct');else if(x===b)x.classList.add('wrong')});
  if(d.dataset.fb){var f=document.createElement('div');f.className='quiz-fb';f.innerHTML=d.dataset.fb;d.appendChild(f)}
  if(sc&&sc.classList.contains('quiz-score'))sc.textContent='Wynik: '+ok+' / '+n}})})});
var b=root.querySelector('#advToggle');
if(b){var all=function(){return root.querySelectorAll('details.adv')},k=all().length;
 if(!k)b.style.display='none';
 b.textContent='Pokaż treści akademickie ('+k+')';
 b.onclick=function(){var on=b.getAttribute('aria-pressed')!=='true';all().forEach(function(d){d.open=on});b.setAttribute('aria-pressed',on?'true':'false');b.textContent=(on?'Ukryj':'Pokaż')+' treści akademickie ('+k+')'}}
var t=root.getElementById('bioTheme'),h=document.documentElement;
function lab(){t.textContent=h.getAttribute('data-theme')==='dark'?'Dzień':'Noc'}
if(t){lab();t.onclick=function(){var d=h.getAttribute('data-theme')==='dark'?'light':'dark';h.setAttribute('data-theme',d);try{localStorage.setItem('bio-theme',d)}catch(e){}lab()}}
if(window.BIO&&BIO.mountAll)BIO.mountAll(root);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
