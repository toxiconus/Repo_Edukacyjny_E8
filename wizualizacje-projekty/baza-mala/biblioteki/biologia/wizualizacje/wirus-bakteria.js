/* viz: wirus-bakteria — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('wirus-bakteria',{opis:'Wirus (kapsyd + DNA/RNA, ew. osłonka) obok komórki bakterii (ściana, błona, cytoplazma, rybosomy, nukleoid, plazmid, rzęska) w różnej skali; klik = opis; panel porównania (komórka? metabolizm? antybiotyk?)',
mount:function(el,o){var pic=H('div'),out=H('div','bv-info');el.appendChild(pic);el.appendChild(out);
  var s=svg(420,230,'Porównanie budowy wirusa i komórki bakterii');
  function g(k,kids){var e=S('g',{'data-k':k});kids.forEach(function(c){e.appendChild(c)});s.appendChild(e);return e}
  // bakteria (pałeczka) — duża
  g('sciana',[S('rect',{x:150,y:40,width:250,height:130,rx:65,fill:'#e9f1dc',stroke:'#6b8f3a','stroke-width':7})]);
  g('blona',[S('rect',{x:158,y:48,width:234,height:114,rx:57,fill:'#f4f8ec',stroke:'#c7a73a','stroke-width':2.5})]);
  var ryb=[];for(var i=0;i<26;i++){var x=180+(i*53)%195,y=62+(i*37)%88;ryb.push(S('circle',{cx:x,cy:y,r:2.6,fill:'#5d6b7a'}))}g('rybosomy',ryb);
  g('nukleoid',[S('path',{d:'M235 92 q12 -22 26 0 t26 0 t26 0 q-6 22 -22 14 t-28 8 t-26 -4 t-2 -18z',fill:'none',stroke:'#7b3fa0','stroke-width':2.4})]);
  g('plazmid',[S('circle',{cx:350,cy:130,r:9,fill:'none',stroke:'#c0392b','stroke-width':2.2})]);
  g('rzeska',[S('path',{d:'M400 105 q14 -16 10 -2 t12 0 t10 -6',fill:'none',stroke:'#6b8f3a','stroke-width':2.4})]);
  s.appendChild(T(275,190,'bakteria (pałeczka) ≈ 2 µm',{s:12}));
  // wirus — mały
  var vx=62,vy=110,hex=[];for(var k=0;k<6;k++){var a=Math.PI/3*k-Math.PI/6;hex.push((vx+24*Math.cos(a)).toFixed(1)+','+(vy+24*Math.sin(a)).toFixed(1))}
  g('oslonka',[S('circle',{cx:vx,cy:vy,r:33,fill:'none',stroke:'#c7a73a','stroke-width':2,'stroke-dasharray':'3 3'})]);
  g('kapsyd',[S('polygon',{points:hex.join(' '),fill:'#dbe8f6',stroke:'#2a62b5','stroke-width':2.5})]);
  g('kwas',[S('path',{d:'M'+(vx-11)+' '+vy+' q5 -10 10 0 t10 0',fill:'none',stroke:'#7b3fa0','stroke-width':2.2})]);
  s.appendChild(T(vx,160,'wirus ≈ 0,1 µm',{s:12}));s.appendChild(T(vx,176,'(powiększony bardziej!)',{s:10,f:'var(--viz-mut)'}));
  s.appendChild(T(210,214,'Skale nie są równe — bakteria jest ok. 10–100 razy większa od wirusa.',{s:11,f:'var(--viz-mut)'}));
  pic.appendChild(s);
  BIO.fx.info(pic,out,{sciana:['Ściana komórkowa',' Sztywna osłona bakterii (u bakterii z mureiny — nie z celulozy). Na nią działa część antybiotyków.'],
   blona:['Błona komórkowa',' Oddziela wnętrze od otoczenia, selektywnie przepuszczalna — jak u każdej komórki.'],
   rybosomy:['Rybosomy',' Wytwarzają białka. Wirus nie ma rybosomów — używa rybosomów gospodarza.'],
   nukleoid:['Nukleoid',' Kolista cząsteczka DNA leżąca w cytoplazmie, bez otoczki jądrowej — bakteria nie ma jądra (prokariont).'],
   plazmid:['Plazmid',' Mała kolista cząsteczka DNA; może nieść np. geny oporności na antybiotyki.'],
   rzeska:['Rzęska',' Służy do ruchu (nie wszystkie bakterie ją mają).'],
   kapsyd:['Kapsyd',' Białkowy płaszcz wirusa, chroni materiał genetyczny.'],
   kwas:['Materiał genetyczny wirusa',' DNA albo RNA (nigdy oba). To jedyna „instrukcja”, jaką wirus wnosi do komórki.'],
   oslonka:['Osłonka (nie u wszystkich wirusów)',' Błoniasta warstwa pochodząca z komórki gospodarza — ma ją np. wirus grypy i HIV.']});
  out.innerHTML='<b>Wirus a bakteria</b><span>Bakteria to <strong>komórka</strong>: ma własną przemianę materii, rybosomy, rozmnaża się przez podział — antybiotyki mogą ją zniszczyć. Wirus to <strong>cząstka bez budowy komórkowej</strong>: kapsyd + DNA lub RNA; namnaża się tylko w żywej komórce — <strong>antybiotyki na wirusy nie działają</strong>.</span>'}});
})();
