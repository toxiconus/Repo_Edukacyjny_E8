/* che-lite.js — minimalny rejestr modeli dla lekkich lekcji chemii (bez silnika che-viz.js, 2026-10-11).
   Model to obiekt z build(host) zarejestrowany przez CHE.VIEW.define(id, def) — ten sam kontrakt co w rozszerzenia.js,
   więc samodzielne bloki z rozszerzenia.js działają bez zmian. Builder: tools/lite.py dokleja tylko bloki użyte w lekcji. */
window.CHE=window.CHE||{};(function(C){var R={};
C.VIEW=C.VIEW||{define:function(id,d){R[id]=d},get:function(id){return R[id]},list:function(){return Object.keys(R)}};C.LITE=1;
C.LITE_MOUNT=function(){[].forEach.call(document.querySelectorAll('[data-che-viz]'),function(f){if(f.getAttribute('data-on'))return;f.setAttribute('data-on','1');
  var id=f.getAttribute('data-che-viz'),d=C.VIEW.get(id),b=f.querySelector('.lk-fig-body');
  if(!d){b.innerHTML='<p class="lk-err">Model „'+id+'” nie jest dostępny w wersji lekkiej.</p>';return}
  if(d.hint){var h=document.createElement('p');h.className='lk-hint';h.textContent=d.hint;b.appendChild(h)}
  var host=document.createElement('div');host.className='che-lite-host';b.appendChild(host);
  try{d.build(host)}catch(e){host.innerHTML='<p class="lk-err">Błąd modelu: '+e.message+'</p>';if(window.console)console.error(e)}})};
})(window.CHE);
