<script>
(function(){
  function sym(){
    var e=document.getElementById('ec-sym');
    return e?e.textContent.trim():'';
  }
  function box(){
    var host=document.querySelector('.tabpane[data-tab="atom"]')||document.querySelector('.content');
    if(!host) return null;
    var el=document.getElementById('che-live-iso');
    if(!el){
      el=document.createElement('section');
      el.id='che-live-iso';
      el.className='panel';
      el.innerHTML='<h3>Temperatura i izotopy <span>z bazy</span></h3><div class="body" id="che-live-iso-body"></div>';
      host.appendChild(el);
    }
    return document.getElementById('che-live-iso-body');
  }
  function draw(){
    var b=box(); if(!b) return;
    var C=window.CHE, s=sym();
    if(!C||!C.DATA||!s){ b.textContent='Wybierz pierwiastek.'; return; }
    var p=(C.DATA.ATOMIC_PROPS||{})[s]||{};
    var iso=(C.DATA.ISOTOPES||{})[s]||[];
    var mp=p.meltingPoint!=null?p.meltingPoint+' K':'brak';
    var bp=p.boilingPoint!=null?p.boilingPoint+' K':'brak';
    var rows=iso.slice(0,8).map(function(x){
      var ab=x.abundance!=null?(x.abundance*100).toFixed(2)+' %':'brak abundancji';
      var hl=x.halfLife_s!=null?(' T1/2 '+x.halfLife_s+' s'):(x.halfLife||'');
      var src=(x.source||'').toString();
      return '<div>'+s+'-'+x.A+' · '+ab+(hl?' · '+hl:'')+(src?(' · '+src):'')+'</div>';
    }).join('')||'<div>Dane lokalne edukacyjne, nie kanoniczne: brak potwierdzonego wpisu dla '+s+'. Weryfikacja wg CIAAW/NIST wymagana.</div>';
    b.innerHTML='<div><b>'+s+'</b> · topnienie '+mp+' · wrzenie '+bp+'</div>'+rows;
  }
  var name=document.getElementById('ec-sym');
  if(name) new MutationObserver(draw).observe(name,{childList:true,characterData:true,subtree:true});
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', draw);
  else draw();
})();
</script>


