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
   
  host._show=function(k){for(var i=0;i<items.length;i++)if(items[i][2]===k){show(i);return true}if(rxb[k]){rxb[k].click();return true}return false};
  var P=C.PRACOWNIA;if(P){(P.live=P.live||{})['kw-doswiadczenia-v01']=host;var pk=P.pending;P.pending=null;if(pk&&host._show(pk))return}
  show(0)}});