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