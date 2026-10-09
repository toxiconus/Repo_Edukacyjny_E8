
 
(function(){
  var live=document.createElement('div');live.className='sr-only';live.id='live-status';
  live.setAttribute('role','status');live.setAttribute('aria-live','polite');live.setAttribute('aria-atomic','true');
  document.body.appendChild(live);
  var t=null;
  function say(){
    var n=document.getElementById('ec-name'),y=document.getElementById('ec-sym'),z=document.getElementById('ec-z');
    var on=document.querySelector('#chsel .on');
    if(!n||!n.textContent.trim()||n.textContent.trim()==='—') return;
    var msg='Wybrano: '+n.textContent.trim()+(y?' ('+y.textContent.trim()+')':'')+(z?', liczba atomowa '+z.textContent.replace(/[^0-9]/g,''):'');
    if(on&&on.textContent.trim()!=='0') msg+=', ładunek jonu '+on.textContent.trim();
    clearTimeout(t);t=setTimeout(function(){live.textContent='';setTimeout(function(){live.textContent=msg},30)},250);
  }
  ['ec-name','chsel'].forEach(function(id){
    var el=document.getElementById(id);if(!el)return;
    new MutationObserver(say).observe(el,{childList:true,characterData:true,subtree:true,attributes:id==='chsel',attributeFilter:id==='chsel'?['class']:undefined});
  });
})();
