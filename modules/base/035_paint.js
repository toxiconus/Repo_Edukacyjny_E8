<script>
(function(){
  function paint(){
    let el = document.getElementById('che-bridge-badge');
    if(!el){
      el = document.createElement('div');
      el.id = 'che-bridge-badge';
      el.setAttribute('role','button');
      el.setAttribute('tabindex','0');
      el.title = 'Kliknij: szczegóły mostka CHE';
      document.body.appendChild(el);
      const show = function(){
        const b = window.__CHE_LAB_BRIDGE__;
        if(!b){ alert('Brak mostka CHE'); return; }
        const lines = Object.keys(b).map(k => k + ': ' + JSON.stringify(b[k]));
        lines.push('wariant pliku: ' + (window.__N03_BUILD__||'?'));
        alert('CHE ↔ Lab bridge\n\n' + lines.join('\n'));
      };
      el.addEventListener('click', show);
      el.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); show(); } });
    }
    const b = window.__CHE_LAB_BRIDGE__;
    let txt;
    if(b && b.active){
      el.className = 'on';
      txt = 'CHE v' + (b.version||'?') + ' · ' + (b.elements||'?') + ' el · props ' + (b.atomicProps||0) + ' · iso ' + (b.isotopes||0) + (b.atomApi?' · ATOM':'') + (b.nucleusApi?' · NUC':'');
    } else {
      el.className = 'off';
      txt = (window.__CHE_MISSING__ ? 'tryb lekki · bez silnika' : 'CHE offline') + ' · dane lokalne lab';
      el.title = b ? (b.reason||'') : 'brak CHE';
    }
    el.innerHTML = '<i class="cb-dot" aria-hidden="true"></i><span class="cb-txt"></span>';
    el.querySelector('.cb-txt').textContent = txt;
    el.setAttribute('aria-label', txt + ' — szczegóły');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', paint);
  else paint();
  setTimeout(paint, 400);
  setTimeout(paint, 1200);
})();
</script>