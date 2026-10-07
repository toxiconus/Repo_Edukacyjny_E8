<script>
/* v054.01: ARIA zakładek + nawigacja strzałkami, auto-ukrywanie FAB przy przewijaniu w dół */
(function(){
  var nav=document.getElementById('tabnav'); if(!nav) return;
  nav.setAttribute('role','tablist'); nav.setAttribute('aria-label','Sekcje laboratorium');
  nav.querySelectorAll('.tg').forEach(function(t){t.setAttribute('role','presentation')});
  var btns=[].slice.call(nav.querySelectorAll('button[data-tab]'));
  btns.forEach(function(b){
    b.setAttribute('role','tab'); b.id=b.id||('tab-'+b.dataset.tab);
    var p=document.querySelector('.tabpane[data-tab="'+b.dataset.tab+'"]');
    if(p){ p.setAttribute('role','tabpanel'); p.setAttribute('aria-labelledby',b.id); b.setAttribute('aria-controls',p.id=p.id||('pane-'+b.dataset.tab)); }
  });
  function sync(){
    btns.forEach(function(b){var on=b.classList.contains('on');b.setAttribute('aria-selected',on?'true':'false');b.tabIndex=on?0:-1});
  }
  sync();
  var mo=new MutationObserver(sync);
  btns.forEach(function(b){mo.observe(b,{attributes:true,attributeFilter:['class']})});
  nav.addEventListener('keydown',function(e){
    var k=e.key; if(['ArrowLeft','ArrowRight','Home','End'].indexOf(k)<0) return;
    var vis=btns.filter(function(b){return b.offsetParent!==null}); if(!vis.length) return;
    var i=vis.indexOf(document.activeElement); if(i<0) i=Math.max(0,vis.findIndex(function(b){return b.classList.contains('on')}));
    if(k==='ArrowRight') i=(i+1)%vis.length; else if(k==='ArrowLeft') i=(i-1+vis.length)%vis.length; else if(k==='Home') i=0; else i=vis.length-1;
    e.preventDefault(); vis[i].focus(); vis[i].click();
  });
  /* FAB: chowaj przy przewijaniu w dół, pokaż przy przewijaniu w górę lub po chwili bezruchu */
  var last=window.scrollY,t=null;
  window.addEventListener('scroll',function(){
    var y=window.scrollY,d=y-last; last=y;
    if(Math.abs(d)<6) return;
    if(d>0&&y>120) document.body.classList.add('fab-away'); else document.body.classList.remove('fab-away');
    clearTimeout(t); t=setTimeout(function(){document.body.classList.remove('fab-away')},1600);
  },{passive:true});
})();
</script>
