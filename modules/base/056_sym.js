<script>
(function(){
  var TABS=['ds','nucleus','orbitals','mat','props','chg','redox','notes','mol','forms','reakcja','dane'];
  function sym(){var e=document.getElementById('ec-sym');return e?e.textContent.trim():'';}
  function pack(){return (window.CHE&&window.CHE.DATA&&window.CHE.DATA.SCHOOL_PACK)||null;}
  function line(){
    var C=window.CHE,s=sym();
    if(!C||!C.DATA||!s) return 'Brak bazy albo pierwiastka.';
    var p=(C.DATA.ATOMIC_PROPS||{})[s]||{};
    var iso=(C.DATA.ISOTOPES||{})[s]||[];
    var bits=[s];
    if(p.meltingPoint!=null) bits.push('topnienie '+p.meltingPoint+' K');
    if(p.boilingPoint!=null) bits.push('wrzenie '+p.boilingPoint+' K');
    if(p.atomicRadius!=null) bits.push('r atomowy '+p.atomicRadius+' pm');
    if(p.covalentRadius!=null) bits.push('r kowalencyjny '+p.covalentRadius+' pm');
    if(p.vdwRadius!=null) bits.push('r vdW '+p.vdwRadius+' pm');
    if(p.electronegativityPauling!=null) bits.push('chi '+p.electronegativityPauling);
    bits.push('izotopy '+iso.length);
    var sp=pack();
    if(sp&&sp.oxides) bits.push('tlenki szkolne '+sp.oxides.length);
    return bits.join(' · ');
  }
  function mount(){
    TABS.forEach(function(tab){
      var pane=document.querySelector('.tabpane[data-tab="'+tab+'"]');
      if(!pane||pane.querySelector('.che-db-strip')) return;
      var d=document.createElement('div');
      d.className='che-db-strip';
      d.style.cssText='margin-top:10px;padding:8px 10px;border:1px solid var(--line);border-radius:8px;font:12px var(--mono);color:var(--mut)';
      pane.appendChild(d);
    });
    document.querySelectorAll('.che-db-strip').forEach(function(d){d.textContent=line();});
  }
  var name=document.getElementById('ec-sym');
  if(name) new MutationObserver(mount).observe(name,{childList:true,characterData:true,subtree:true});
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
</script>


