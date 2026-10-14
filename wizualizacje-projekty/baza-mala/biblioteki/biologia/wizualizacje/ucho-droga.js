/* viz: ucho-droga — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],btn=BIO.Lh["C.btn"],clr=BIO.Lh["C.clr"];
BIO.define('ucho-droga',{opis:'Schemat ucha: zewnętrzne (małżowina, przewód słuchowy), środkowe (błona bębenkowa, młoteczek, kowadełko, strzemiączko, trąbka słuchowa), wewnętrzne (ślimak, kanały półkoliste, przedsionek), nerw przedsionkowo-ślimakowy; kliknij część, „krok” prowadzi dźwięk od małżowiny do mózgu',
mount:function(el,o){
 var tl=H('div','bv-tools'),box=H('div'),info=BIO.fx.infoBox('Kliknij część ucha albo „krok”, aby prześledzić drogę dźwięku.');el.appendChild(tl);el.appendChild(box);el.appendChild(info);
 var W=700,Hh=380,sv=svg(W,Hh,'Budowa ucha',[]);function G(k,kids){return S('g',{'data-k':k},kids)}
 [['ucho zewnętrzne',20,250,'#fdf2e0'],['ucho środkowe',270,140,'#eef6ea'],['ucho wewnętrzne',410,180,'#eef0fb']].forEach(function(z){sv.appendChild(S('rect',{x:z[1],y:40,width:z[2],height:300,fill:z[3]}));sv.appendChild(T(z[1]+z[2]/2,26,z[0],{s:15,w:800}))});
 sv.appendChild(G('malzowina',[S('path',{d:'M90 70 C30 80 30 190 70 230 C90 252 110 240 112 220 C114 200 96 190 100 170 C104 150 130 130 120 100 C114 82 104 70 90 70 Z',fill:'#f3c9a8',stroke:'#b9876a','stroke-width':2.5}),T(64,262,'małżowina',{s:14,w:700})]));
 sv.appendChild(G('przewod',[S('path',{d:'M110 175 L262 175',fill:'none',stroke:'#d9a888','stroke-width':30,'stroke-linecap':'round'}),T(190,214,'przewód słuchowy',{s:14,w:700})]));
 sv.appendChild(G('blona',[S('ellipse',{cx:268,cy:175,rx:5,ry:30,fill:'#b0c4de',stroke:'#4a6a9a','stroke-width':2}),T(268,124,'błona bębenkowa',{s:13,w:700})]));
 sv.appendChild(G('kosteczki',[S('path',{d:'M276 160 L298 152 L300 172',fill:'none',stroke:'#7a6a50','stroke-width':6,'stroke-linejoin':'round'}),S('path',{d:'M300 152 L322 160 L318 180',fill:'none',stroke:'#7a6a50','stroke-width':6}),S('path',{d:'M318 180 L340 176 M336 166 L342 188',fill:'none',stroke:'#7a6a50','stroke-width':6}),T(312,206,'kosteczki',{s:13,w:700}),T(312,222,'słuchowe',{s:13,w:700})]));
 sv.appendChild(G('trabka',[S('path',{d:'M300 230 C310 270 320 300 360 336',fill:'none',stroke:'#b8a0c8','stroke-width':12,'stroke-linecap':'round'}),T(372,352,'trąbka słuchowa',{s:13,w:700,a:'start'}),T(372,368,'(do gardła)',{s:12,a:'start',f:'var(--viz-mut)'})]));
 sv.appendChild(G('kanaly',[S('ellipse',{cx:450,cy:110,rx:28,ry:34,fill:'none',stroke:'#7e57c2','stroke-width':6}),S('ellipse',{cx:490,cy:100,rx:34,ry:22,fill:'none',stroke:'#7e57c2','stroke-width':6}),S('ellipse',{cx:478,cy:136,rx:20,ry:30,fill:'none',stroke:'#7e57c2','stroke-width':6,transform:'rotate(40 478 136)'}),T(540,70,'kanały półkoliste',{s:13,w:700,a:'start'})]));
 sv.appendChild(G('przedsionek',[S('ellipse',{cx:400,cy:172,rx:28,ry:20,fill:'#d6c8f0',stroke:'#7e57c2','stroke-width':2.5}),T(392,206,'przedsionek',{s:12,w:700,a:'end'})]));
 var sp='';for(var a=0;a<=Math.PI*5;a+=0.12){var r=48-a*2.8;sp+=(sp?'L':'M')+(470+r*Math.cos(a)).toFixed(1)+' '+(240+r*Math.sin(a)).toFixed(1)}
 sv.appendChild(G('slimak',[S('path',{d:'M424 186 C430 210 430 230 422 240 '+sp.replace('M','L'),fill:'none',stroke:'#e67e22','stroke-width':9,'stroke-linecap':'round'}),T(528,296,'ślimak',{s:15,w:800,f:'#b9550a',a:'start'})]));
 sv.appendChild(G('nerw',[S('path',{d:'M500 190 C560 190 600 200 680 200',fill:'none',stroke:'#e2c25a','stroke-width':12,'stroke-linecap':'round'}),T(680,226,'nerw → mózg',{s:13,w:700,a:'end'})]));
 var fala=S('g',{});sv.appendChild(fala);box.appendChild(sv);
 var M={malzowina:['Małżowina uszna','Chrząstka pokryta skórą — <strong>zbiera fale dźwiękowe</strong> i kieruje je do przewodu; pomaga ocenić, skąd dochodzi dźwięk.'],
  przewod:['Przewód słuchowy zewnętrzny','Prowadzi fale do błony bębenkowej. Gruczoły wydzielają <strong>woskowinę</strong>, która zatrzymuje kurz i drobnoustroje (nie należy jej wydłubywać patyczkami głęboko w uchu).'],
  blona:['Błona bębenkowa','Cienka błona oddzielająca ucho zewnętrzne od środkowego — <strong>drga</strong> pod wpływem fal dźwiękowych.'],
  kosteczki:['Kosteczki słuchowe','<strong>Młoteczek, kowadełko, strzemiączko</strong> — najmniejsze kości ciała. Przenoszą drgania z błony bębenkowej na okienko owalne ślimaka i <strong>wzmacniają</strong> je.'],
  trabka:['Trąbka słuchowa (Eustachiusza)','Łączy ucho środkowe z gardłem i <strong>wyrównuje ciśnienie</strong> po obu stronach błony bębenkowej (przełykanie w samolocie „odtyka” uszy). Tą drogą infekcje z gardła mogą przejść do ucha środkowego.'],
  slimak:['Ślimak','Spiralny kanał z płynem; w nim <strong>narząd Cortiego</strong> z komórkami zmysłowymi (rzęsatymi). Drgania płynu poruszają rzęski — powstają <strong>impulsy nerwowe</strong>. Tu, a nie w uchu środkowym, drgania zamieniają się w sygnał nerwowy.'],
  kanaly:['Kanały półkoliste','Trzy kanały w trzech prostopadłych płaszczyznach, wypełnione płynem — wykrywają <strong>ruchy obrotowe głowy</strong>. Część narządu równowagi (aparatu przedsionkowego).'],
  przedsionek:['Przedsionek (łagiewka i woreczek)','Z <strong>kryształkami</strong> (otolitami) na galaretowatej błonie — odbierają <strong>położenie głowy</strong> i przyspieszenia liniowe (winda, hamowanie samochodu).'],
  nerw:['Nerw przedsionkowo-ślimakowy','Przewodzi impulsy ze ślimaka (słuch) i aparatu przedsionkowego (równowaga) do mózgu. Wrażenie dźwięku powstaje w <strong>ośrodku słuchu w płacie skroniowym</strong> kory mózgu.']};
 var show=BIO.fx.info(sv,info,M),DR=['malzowina','przewod','blona','kosteczki','slimak','nerw'],POS={malzowina:[80,150],przewod:[190,175],blona:[268,175],kosteczki:[310,168],slimak:[470,240],nerw:[600,196]},kr=-1;
 tl.appendChild(btn('krok ▶ droga dźwięku',function(){kr=(kr+1)%DR.length;var k=DR[kr],p=POS[k];show(k,sv.querySelector('[data-k="'+k+'"]'));info.querySelector('b').textContent=(kr+1)+'/'+DR.length+' · '+M[k][0];
  clr(fala);[0,1,2].forEach(function(i){fala.appendChild(S('path',{d:'M'+(p[0]-14-i*9)+' '+(p[1]-16-i*4)+' Q'+(p[0]-4-i*9)+' '+p[1]+' '+(p[0]-14-i*9)+' '+(p[1]+16+i*4),fill:'none',stroke:'#e67e22','stroke-width':3,opacity:1-i*.25}))})}));
 tl.appendChild(btn('od początku',function(){kr=-1;clr(fala);info.className='bv-info';info.textContent='Kliknij „krok”, aby prześledzić drogę dźwięku.'}));BIO.fx.auto(el,function(){tl.firstChild.click()},1800,{now:1})}});
})();
