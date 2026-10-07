;/* ===== v0.39: pracownia doświadczeń z solami (N04) — GFX.rx + CHE.REACTION + CHE.IONIC ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var GROUPS=[['Otrzymywanie soli',['hclNaOH+php','cuoH2so4','znHcl']],
 ['Strącanie osadów',['rx-ag-cl','bacl2Na2so4','rx-ba-so4','cacl2Na2co3','rx-cu-naoh','rx-fe3-naoh','rx-pb-i','rx-ag-i','rx-ni-naoh','rx-zn-naoh','rx-pb-cro4','rx-cu-s']],
 ['Wypieranie metali',['rx-zn-cuso4','rx-fe-cuso4','rx-cu-agno3']],
 ['Węglany i cykl wapienny',['caco3Hcl','na2co3Hcl','caoH2o','caOH2Co2']],
 ['Hydrat i odczyn soli',['cuso4Hydrate','hyd-nacl','hyd-na2co3','hyd-nh4cl','hyd-cuso4']]];
function card(host,k){var G=C.LAB.GFX,I=G.rx.info(k),sp=G.rx.get(k);if(!I)return;host.innerHTML='';var c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px;align-items:start';host.appendChild(c);
 var l=el('div'),r=el('div');c.append(l,r);var m=G.rx.mount(l,k,{height:260,dur:6,auto:true});var bar=el('div','r');l.appendChild(bar);var b=el('button',null,'▶ powtórz');b.type='button';b.onclick=function(){m.play()};bar.appendChild(b);
 var key=sp.rxKey||k,NOION={cuso4Hydrate:1,caoH2o:1},J=!NOION[key]&&C.IONIC&&C.REACTION.get(key)?C.IONIC.equations(key):null;if(J&&J.ionic===false)J=null;
 r.innerHTML='<p style="font:700 16px Inter,system-ui">'+(J?J.molecular:I.eq)+'</p>'+(J?'<p><b>Jonowo pełne:</b> '+J.full+'</p><p><b>Jonowo skrócone:</b> '+J.net+'</p><p><b>Obserwatory:</b> '+(J.spectators.join(', ')||'—')+'</p>':'')+'<div class="note"><b>Obserwacja:</b> '+(I.obs||I.why)+(I.safety?'<br><b>BHP:</b> '+I.safety:'')+'<br><small>źródło: '+I.src+(sp.rxKey?' · '+sp.rxKey:'')+'</small></div>'}
V.define('sole-doswiadczenia-v01',{title:'Pracownia: doświadczenia z solami',tag:'GFX',hint:'Otrzymywanie soli, strącanie osadów, wypieranie metali, węglany, hydrat i odczyn roztworów soli — animacja, równanie cząsteczkowe i jonowe z silnika.',foot:'GFX.rx (barwy CHE.COLORS) · CHE.REACTION · CHE.IONIC',
 build:function(host){host.innerHTML='';var G=C.LAB&&C.LAB.GFX;if(!G||!G.rx){host.textContent='Brak GFX.rx';return}var bars=el('div'),area=el('div');host.append(bars,area);var first=null;
  GROUPS.forEach(function(g){var ks=g[1].filter(function(k){return G.rx.get(k)});if(!ks.length)return;var r=el('div','r','<b style="min-width:150px">'+g[0]+':</b> ');ks.forEach(function(k){first=first||k;var b=el('button',null,G.rx.get(k).n);b.type='button';b.dataset.k=k;b.onclick=function(){[].forEach.call(bars.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b)});card(area,k)};r.appendChild(b)});bars.appendChild(r)});
  /* przycisk lekcji .che-prac-go (data-prac="sole-doswiadczenia-v01", data-k = klucz GFX.rx) otwiera pracownię na tym doświadczeniu */
  host._show=function(k){var b=bars.querySelector('button[data-k="'+k+'"]');if(b){b.click();return true}return false};
  var P=C.PRACOWNIA;if(P){(P.live=P.live||{})['sole-doswiadczenia-v01']=host;var pk=P.pending;P.pending=null;if(pk&&host._show(pk))return}
  if(first){bars.querySelector('button').classList.add('on');card(area,first)}}});
})();
