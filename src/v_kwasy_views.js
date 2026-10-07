;/* ===== v0.34: widoki doświadczeń z kwasami (GFX) — otwierane z lekcji N03 przyciskami „che-lesson-viz-ref” ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var G=function(){return C.LAB&&C.LAB.GFX};
var el=function(t,cls,html){var e=document.createElement(t);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
function btn(bar,txt,fn){var b=el('button',null,txt);b.type='button';b.onclick=fn;bar.appendChild(b);return b}
/* 1. każda scena GFX jako osobny widok: gfx-scene-<id> */
var g0=G();
if(g0&&g0.scenes)g0.scenes.list().forEach(function(id){var D=g0.scenes.get(id);V.define('gfx-scene-'+id,{title:D.label,tag:'GFX',hint:D.desc||'',foot:'Silnik CHE.LAB.GFX · zestaw „'+id+'” · ten sam w bibliotece i lekcji',build:function(host){host.innerHTML='';G().scene(host,id)}})});
/* 2. szereg aktywności: cztery probówki z HCl */
V.define('kw-szereg-metali-v01',{title:'Szereg aktywności: Mg, Zn, Fe, Cu w kwasie solnym',tag:'GFX',
 hint:'Metale trafiają do kwasu od razu — ten sam kwas, cztery metale. Porównaj szybkość wydzielania wodoru.',
 foot:'Wygląd reakcji: GFX.rx (mgHcl, znHcl, feHcl, cuHcl) · fizyka pęcherzyków: CHE.PHYS · równania: CHE.REACTION',
 build:function(host){host.innerHTML='';var g=G(),K=['mgHcl','znHcl','feHcl','cuHcl'],L=['Mg','Zn','Fe','Cu'],run=true,p=0;
  var bar=el('div','r');host.appendChild(bar);
  var api=g.mount(host,{height:300,state:{},tick:function(S,dt){if(run)p=Math.min(1,p+dt/8)},
   parts:K.map(function(k,i){return{id:'testTube',x:.03+i*.245,y:.06,w:.2,h:.9,get:function(){var s=g.rx.state(k,p);s.label=L[i];s.level=.6;return s}}})});
  var note=el('div','note');host.appendChild(note);
  var pz;btn(bar,'↺ powtórz',function(){run=true;p=0;api.reset();pz.textContent='⏸ pauza'});pz=btn(bar,'⏸ pauza',function(){run=!run;pz.textContent=run?'⏸ pauza':'▶ wznów'});
  note.innerHTML=K.map(function(k){var I=g.rx.info(k);return '<b>'+I.name+'</b>: '+I.eq}).join('<br>')+'<br><b>Wniosek:</b> aktywność Mg &gt; Zn &gt; Fe &gt; (H) &gt; Cu — Cu nie wypiera wodoru z HCl; Fe daje FeCl₂ (bladozielony roztwór).'}});
/* 3. właściwości stężonych kwasów — pokazy */
function rxCards(host,keys,height){var g=G(),grid=el('div');grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:10px';host.appendChild(grid);
 keys.forEach(function(k){var I=g.rx.info(k);if(!I)return;var c=el('div');c.style.cssText='border:1px solid var(--border,#d5dee6);border-radius:12px;padding:8px;min-width:0';c.appendChild(el('b',null,I.name));grid.appendChild(c);
  var m=g.rx.mount(c,k,{height:height||210,dur:6,auto:true});var bar=el('div','r');bar.style.marginTop='6px';c.appendChild(bar);btn(bar,'▶ powtórz',function(){m.play()});
  c.appendChild(el('div','note','<b>'+I.eq+'</b><br>'+(I.why||I.obs)+(I.teacher?'<br><b>Tylko pokaz nauczyciela.</b>':'')))})}
V.define('kw-wlasciwosci-v01',{title:'Właściwości stężonych kwasów — pokazy',tag:'GFX',
 hint:'Cztery pokazy nauczycielskie: zwęglanie cukru, reakcja ksantoproteinowa, rozkład HNO₃ na świetle, „dymienie” HCl.',
 foot:'GFX.rx: h2so4Sugar, hno3Protein, hno3Light, hclFume · kierunek oparów z gęstości gazu (CHE.PHYS.gas)',
 build:function(host){host.innerHTML='';rxCards(host,['h2so4Sugar','hno3Protein','hno3Light','hclFume'])}});
/* 4. pracownia: wszystkie doświadczenia z kwasami */
V.define('kw-doswiadczenia-v01',{title:'Pracownia: doświadczenia z kwasami',tag:'GFX',
 hint:'Wybierz doświadczenie. Zestawy i reakcje pochodzą z jednego silnika — tego samego w lekcji, bibliotece i atlasie.',
 foot:'Zestawy: GFX.scenes (lesson: kwasy) · reakcje: GFX.rx · fizyka: CHE.PHYS',
 build:function(host){host.innerHTML='';var g=G(),bar=el('div','r'),bar2=el('div','r'),area=el('div');host.append(bar,bar2,area);
  var items=[];g.scenes.list().forEach(function(id){var D=g.scenes.get(id);if(D.lesson==='kwasy')items.push([D.label,function(a){g.scene(a,id)},id])});
  items.push(['Szereg aktywności (4 probówki)',function(a){a.dataset.che='kw-szereg-metali-v01';V.mount(a)},'szereg']);
  items.push(['Właściwości stężonych kwasów',function(a){a.dataset.che='kw-wlasciwosci-v01';V.mount(a)},'wlasciwosci']);
  items.push(['Reakcje kwasów: przewidź i sprawdź',function(a){a.dataset.che='four-reactions';V.mount(a)},'przewidz']);
  var rx=['agno3Hcl','rx-ba-so4','cuoH2so4','caco3Hcl','hclNaOH+php','cuHno3','h2so4Dil'].filter(function(k){return g.rx.get(k)});
  var show=function(i){area.innerHTML='';delete area.dataset.che;[].forEach.call(bar.children,function(b,j){b.classList.toggle('on',j===i)});[].forEach.call(bar2.children,function(b){b.classList.remove('on')});items[i][1](area)};
  items.forEach(function(it,i){btn(bar,it[0],function(){show(i)})});
  bar2.appendChild(el('b',null,'Reakcje w zlewce: '));
  var rxb={};rx.forEach(function(k){var b=rxb[k]=btn(bar2,g.rx.get(k).n,function(){area.innerHTML='';delete area.dataset.che;[].forEach.call(bar.children,function(x){x.classList.remove('on')});[].forEach.call(bar2.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b)});rxCards(area,[k],280)})});
  /* przycisk lekcji .che-prac-go (data-prac="kw-doswiadczenia-v01", data-k = id zestawu GFX | szereg | wlasciwosci | przewidz | klucz GFX.rx) */
  host._show=function(k){for(var i=0;i<items.length;i++)if(items[i][2]===k){show(i);return true}if(rxb[k]){rxb[k].click();return true}return false};
  var P=C.PRACOWNIA;if(P){(P.live=P.live||{})['kw-doswiadczenia-v01']=host;var pk=P.pending;P.pending=null;if(pk&&host._show(pk))return}
  show(0)}});
})();
