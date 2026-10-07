;/* ===== PRACOWNIE DOŚWIADCZEŃ — jeden model dla wszystkich lekcji chemii (zlewka GFX.rx + równania CHE.REACTION/CHE.IONIC + warunki, obserwacje, BHP z REACTION_DATA).
   C.PRACOWNIA.define(id,{title,hint,groups:[[nazwa,[klucze]]]}) — klucz = klucz CHE.REACTION albo spec GFX.rx (np. 'hclNaOH+php'). Widoki: n01-doswiadczenia-v01, n02-doswiadczenia-v01. ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function G(){return C.LAB&&C.LAB.GFX}function D(){return C.DATA||{}}
function specFor(k){var g=G();if(!g||!g.rx)return null;if(g.rx.get(k))return k;var l=g.rx.list(function(sp){return sp.rxKey===k});return l[0]||null}
function rxKey(k){var g=G(),sp=g&&g.rx&&g.rx.get(k);return sp&&sp.rxKey||k}
function eq(k){var R=C.REACTION,kk=rxKey(k),SUB='₀₁₂₃₄₅₆₇₈₉';try{if(R&&R.equation&&R.get(kk))return R.equation(kk).replace(/([A-Za-z\)\]])(\d+)/g,function(m,a,n){return a+n.replace(/\d/g,function(c){return SUB[c]})}).replace(/->/g,'→')}catch(_){}return k}
function card(k){var kk=rxKey(k),d=(D().REACTION_DATA||{})[kk]||{},g=G(),I=g&&g.rx&&specFor(k)?g.rx.info(specFor(k)):null,J=null;try{J=C.IONIC&&C.IONIC.equations(kk)}catch(_){}
 return '<div style="font:700 15px ui-monospace,Consolas,monospace;margin:4px 0;overflow-wrap:anywhere">'+(I?I.eq:eq(k))+'</div>'+(J&&J.ionic&&J.net?'<div><b>Jonowo skrócone:</b> '+J.net+'</div>':'')
  +'<div class="note" style="margin-top:6px"><b>Warunki:</b> '+(d.conditions||'—')+'<br><b>Obserwacja:</b> '+(d.observation||(I&&I.why)||'—')+(d.safety&&d.safety.length?'<br><b>BHP:</b> '+d.safety.join(' '):'')+(I&&I.teacher?'<br><b>Tylko pokaz nauczyciela.</b>':'')+(d.note?'<br><small>'+d.note+'</small>':'')+'<br><small>poziom: '+(d.level||'E8')+' · klucz silnika: '+kk+'</small></div>'}
function define(id,o){V.define(id,{title:o.title,tag:'GFX',hint:o.hint||'Wybierz doświadczenie: animacja w zlewce, równanie cząsteczkowe i jonowe, warunki, obserwacja i BHP — wszystko z silnika.',
 foot:'GFX.rx (barwy CHE.COLORS) · CHE.REACTION / REACTION_DATA · CHE.IONIC',
 build:function(host){host.innerHTML='';var bars=el('div'),area=el('div');host.append(bars,area);var all=[],first=null,R=D().REACTIONS||{};
  o.groups.forEach(function(gr){var ks=gr[1].filter(function(k){return R[rxKey(k)]||R[k.replace('+php','')]});if(!ks.length)return;var r=el('div','r','<b style="min-width:150px">'+gr[0]+':</b> ');
   ks.forEach(function(k){first=first||k;var b=el('button',null,eq(k).split(' → ')[0]+(/\+php$/.test(k)?' + fenoloftaleina':''));b.type='button';b.onclick=function(){all.forEach(function(x){x.classList.toggle('on',x===b)});show(k)};r.appendChild(b);all.push(b)});bars.appendChild(r)});
  function show(k){area.innerHTML='';var g=el('div');g.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px;align-items:start';area.appendChild(g);var l=el('div'),r=el('div');g.append(l,r);
   var s=specFor(k),GX=G();if(s&&GX){var m=GX.rx.mount(l,s,{height:240,dur:6,auto:true});var bb=el('div','r');var x=el('button',null,'▶ powtórz');x.type='button';x.onclick=function(){m.play()};bb.appendChild(x);l.appendChild(bb)}else l.innerHTML='<div class="note">Brak animacji w zlewce dla tej reakcji — opis i równanie obok.</div>';
   r.innerHTML=card(k)}
  var keys=[];all.forEach(function(b,i){b._k=null});o.groups.forEach(function(gr){gr[1].forEach(function(k){if(R[rxKey(k)]||R[k.replace('+php','')])keys.push(k)})});keys.forEach(function(k,i){if(all[i])all[i]._k=k});
  host._show=function(k){var b=all.filter(function(x){return x._k===k})[0];if(b){b.click();return true}return false};(C.PRACOWNIA.live=C.PRACOWNIA.live||{})[id]=host;
  var p=C.PRACOWNIA.pending;C.PRACOWNIA.pending=null;if(p&&host._show(p))return;
  if(first){all[0].classList.add('on');show(first)}}})}
/* przycisk w lekcji: <button class="che-prac-go" data-prac="ID widoku pracowni" data-k="klucz reakcji"> — otwiera pracownię na tym doświadczeniu */
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.che-prac-go');if(!b)return;e.preventDefault();var id=b.getAttribute('data-prac'),k=b.getAttribute('data-k'),P=C.PRACOWNIA,doc=b.ownerDocument;
 var h=(P.live||{})[id];if(h&&h.isConnected&&doc.contains(h)&&h._show(k)){h.scrollIntoView({behavior:'smooth',block:'center'});return}
 P.pending=k;var ref=doc.querySelector('.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]')||doc.querySelector('[data-che-lesson-viz="'+id+'"]');if(!ref)return;ref.scrollIntoView({behavior:'auto',block:'center'});var t=ref.querySelector('button[data-che-open-viz]');if(t)t.click();
 var n=0,iv=setInterval(function(){var hh=(P.live||{})[id];if(hh&&hh.isConnected&&doc.contains(hh)){clearInterval(iv);if(P.pending)hh._show(P.pending);P.pending=null;hh.scrollIntoView({behavior:'smooth',block:'center'})}else if(++n>40)clearInterval(iv)},100)});
C.PRACOWNIA={version:'1.0',define:define,card:card};
define('n01-doswiadczenia-v01',{title:'Pracownia: doświadczenia z tlenkami',groups:[
 ['Tlenek zasadowy + woda',['na2oH2o','k2oH2o','caoH2o','mgoH2o']],['Tlenek kwasowy + woda',['so2H2o','so3H2o','co2H2o','p4o10H2o']],
 ['Tlenek + kwas',['caoHcl','mgoHcl','cuoHcl','cuoH2so4','fe2o3Hcl','znoHcl','al2o3Hcl']],['Tlenek + zasada',['naohCo2','so2Naoh','so3Naoh','al2o3NaohAq','znoNaohAq','sio2Naoh']],
 ['Wykrywanie CO₂',['caoh2Co2']]]});
define('n02-doswiadczenia-v01',{title:'Pracownia: doświadczenia z wodorotlenkami',groups:[
 ['Metal / tlenek + woda',['naH2o','kH2o','caH2o','mgH2oHot','na2oH2o','caoH2o']],['Strącanie',['cuso4Naoh','fecl3Naoh','mgcl2Naoh','feso4Naoh','niso4Naoh','agno3Naoh']],
 ['Zobojętnianie',['hclNaOH+php','kohHno3','caoh2Hcl','baoh2H2so4','cuoh2H2so4','feoh3Hcl']],['Amfoteryczność, CO₂, ogrzewanie',['alcl3Naoh','aloh3Naoh','znso4Naoh','znoh2Naoh','caoh2Co2','cuoh2Heat','feoh2O2','nh4clNaoh']]]});
})();
