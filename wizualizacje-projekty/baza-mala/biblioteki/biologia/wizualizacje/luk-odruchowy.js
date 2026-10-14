/* viz: luk-odruchowy — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],clr=BIO.Lh["C.clr"],btn=BIO.Lh["C.btn"],seg=BIO.Lh["C.seg"];
BIO.define('luk-odruchowy',{opis:'Łuk odruchowy cofnięcia ręki od gorącego przedmiotu: receptor w skórze dłoni, neuron czuciowy (ciało w zwoju rdzeniowym), neuron pośredniczący w istocie szarej rdzenia, neuron ruchowy, efektor — mięsień ramienia; „krok” prowadzi impuls etapami, osobna droga do mózgu (czucie bólu); przełącznik uszkodzeń: przecięta droga ruchowa lub czuciowa',
mount:function(el,o){
 var tl=H('div','bv-tools'),tl2=H('div','bv-tools'),box=H('div'),info=BIO.fx.infoBox('Kliknij „krok”, aby poprowadzić impuls, albo kliknij element łuku.');el.appendChild(tl);el.appendChild(tl2);el.appendChild(box);el.appendChild(info);
 var W=700,Hh=430,sv=svg(W,Hh,'Łuk odruchowy',[]),uraz='brak',krok=-1,raf=0,red=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 function G(k,kids){return S('g',{'data-k':k},kids)}
 var P={czuciowy:'M112 300 C200 300 300 120 448 118 C500 116 520 140 538 160',posredni:'M538 160 C550 185 556 200 566 222',ruchowy:'M566 222 C520 290 420 300 330 250 C300 232 270 214 250 204',mozg:'M538 160 C560 120 600 90 610 30'};
 sv.appendChild(G('rdzen',[S('ellipse',{cx:565,cy:195,rx:100,ry:78,fill:'#f3f0fa',stroke:'#8a7ab8','stroke-width':2.5}),
  S('path',{d:'M520 150 C540 160 548 180 556 190 C562 180 572 160 590 150 C600 170 590 190 578 200 C590 214 604 236 596 252 C580 244 570 224 565 214 C560 224 548 244 532 252 C524 236 538 214 550 200 C540 190 512 170 520 150 Z',fill:'#cdbbe6',stroke:'#8a7ab8','stroke-width':1.5}),
  T(565,292,'rdzeń kręgowy (przekrój)',{s:15,w:800,f:'#5a4a8a'}),T(565,310,'istota szara — w środku, biała — na zewnątrz',{s:12,w:600,f:'var(--viz-mut)'})]));
 sv.appendChild(G('skora',[S('rect',{x:30,y:262,width:110,height:76,rx:30,fill:'#f6dcc6',stroke:'#b9876a','stroke-width':2}),T(85,250,'skóra dłoni',{s:14,w:700}),S('path',{d:'M70 400 C60 380 80 372 76 356 C92 368 96 384 90 400 Z',fill:'#f39c12'}),S('path',{d:'M96 400 C90 388 104 380 102 368 C114 380 114 392 110 400 Z',fill:'#e74c3c'}),T(150,392,'gorący przedmiot',{s:13,w:700,a:'start',f:'#b9550a'})]));
 sv.appendChild(G('receptor',[S('circle',{cx:110,cy:300,r:11,fill:'#2f7fa8',stroke:'#fff','stroke-width':2}),T(110,326,'receptor',{s:14,w:800,f:'#1f5f88'})]));
 sv.appendChild(G('miesien',[S('ellipse',{cx:210,cy:190,rx:62,ry:30,fill:'#e08a80',stroke:'#a33','stroke-width':2.5,transform:'rotate(-14 210 190)'}),T(200,146,'mięsień (efektor)',{s:14,w:800,f:'#a33'})]));
 sv.appendChild(G('czuciowy',[S('path',{d:P.czuciowy,fill:'none',stroke:'#2f7fa8','stroke-width':5}),S('circle',{cx:448,cy:118,r:13,fill:'#2f7fa8'}),T(448,92,'zwój rdzeniowy',{s:13,w:700,f:'#1f5f88'}),T(312,196,'neuron czuciowy',{s:14,w:800,f:'#1f5f88',a:'start'})]));
 sv.appendChild(G('posredni',[S('path',{d:P.posredni,fill:'none',stroke:'#7e57c2','stroke-width':6}),T(648,100,'neuron',{s:13,w:700,f:'#5a3a9a'}),T(648,116,'pośredniczący',{s:13,w:700,f:'#5a3a9a'})]));
 sv.appendChild(G('ruchowy',[S('path',{d:P.ruchowy,fill:'none',stroke:'#c0392b','stroke-width':5}),S('circle',{cx:566,cy:222,r:11,fill:'#c0392b'}),T(330,300,'neuron ruchowy',{s:14,w:800,f:'#a33'})]));
 sv.appendChild(G('mozg',[S('path',{d:P.mozg,fill:'none',stroke:'#7e57c2','stroke-width':3,'stroke-dasharray':'6 5'}),T(620,30,'do mózgu → czucie bólu',{s:13,w:700,a:'end',f:'#5a3a9a'})]));
 var X=S('g',{});sv.appendChild(X);
 var tr=S('path',{d:'M0 0',fill:'none',stroke:'none'}),dot=S('circle',{r:9,fill:'#f1c40f',stroke:'#7a5a00','stroke-width':2,opacity:0});dot.style.pointerEvents='none';sv.appendChild(tr);sv.appendChild(dot);
 box.appendChild(sv);
 var M={skora:['Bodziec','Wysoka temperatura działa na skórę dłoni. Bodźcem jest zmiana w środowisku, którą wykrywa receptor.'],
  receptor:['1. Receptor','Zakończenia nerwowe w skórze reagujące na ciepło i ból zamieniają bodziec w <strong>impuls nerwowy</strong>.'],
  czuciowy:['2. Neuron czuciowy (droga dośrodkowa)','Przewodzi impuls <strong>od receptora do rdzenia kręgowego</strong>. Jego ciało leży w <strong>zwoju rdzeniowym</strong> przy rdzeniu; impuls wchodzi do rdzenia od strony grzbietowej (korzeń tylny).'],
  posredni:['3. Ośrodek — neuron pośredniczący','W <strong>istocie szarej rdzenia</strong> impuls przechodzi przez <strong>synapsy</strong> na neuron pośredniczący, a ten — na neuron ruchowy. Ośrodkiem tego odruchu jest rdzeń kręgowy, nie mózg.'],
  ruchowy:['4. Neuron ruchowy (droga odśrodkowa)','Ciało leży w istocie szarej rdzenia (róg przedni), akson wychodzi korzeniem przednim i biegnie w nerwie do mięśnia.'],
  miesien:['5. Efektor','Mięsień zginacz ramienia kurczy się — ręka odskakuje od gorącego przedmiotu. Efektorem może być też gruczoł (np. ślinianka w odruchu wydzielania śliny).'],
  mozg:['Droga do mózgu','Równocześnie impuls biegnie istotą białą rdzenia do mózgu — dopiero wtedy <strong>czujemy ból</strong> i wiemy, co się stało. Dlatego ręka często cofa się, <strong>zanim</strong> poczujemy oparzenie.'],
  rdzen:['Rdzeń kręgowy','Na przekroju: w środku <strong>istota szara</strong> (ciała neuronów, kształt motyla), na zewnątrz <strong>istota biała</strong> (włókna nerwowe przewodzące impulsy do i z mózgu). Chroni go kanał kręgowy, opony i płyn mózgowo-rdzeniowy.']};
 var show=BIO.fx.info(sv,info,M);
 var KR=['receptor','czuciowy','posredni','ruchowy','miesien','mozg'];
 function rysujX(){clr(X);if(uraz==='brak')return;var pe=sv.querySelector('[data-k="'+uraz+'"] path'),pt=pe.getPointAtLength(pe.getTotalLength()*(uraz==='ruchowy'?0.62:0.42)),pos=[pt.x,pt.y];
  X.appendChild(S('path',{d:'M'+(pos[0]-14)+' '+(pos[1]-14)+' L'+(pos[0]+14)+' '+(pos[1]+14)+' M'+(pos[0]+14)+' '+(pos[1]-14)+' L'+(pos[0]-14)+' '+(pos[1]+14),stroke:'#111','stroke-width':6,'stroke-linecap':'round'}))}
 function jedz(d,done){cancelAnimationFrame(raf);tr.setAttribute('d',d);dot.setAttribute('opacity',1);var L=tr.getTotalLength(),t0=null,D=900,stop=1;
  if(uraz==='czuciowy'&&d===P.czuciowy)stop=0.42;if(uraz==='ruchowy'&&d===P.ruchowy)stop=0.62;if(uraz==='czuciowy'&&d===P.mozg)stop=0;
  function f(ts){if(t0===null)t0=ts;var q=Math.min(stop,(ts-t0)/D),p=tr.getPointAtLength(L*q);dot.setAttribute('cx',p.x);dot.setAttribute('cy',p.y);if(q<stop)raf=requestAnimationFrame(f);else if(done)done(stop<1)}
  if(red){var p=tr.getPointAtLength(L*stop);dot.setAttribute('cx',p.x);dot.setAttribute('cy',p.y);if(done)done(stop<1)}else raf=requestAnimationFrame(f)}
 var bk=btn('krok ▶ impuls',function(){krok=(krok+1)%KR.length;var k=KR[krok];show(k,sv.querySelector('[data-k="'+k+'"]'));info.querySelector('b').textContent=M[k][0];
   if(P[k])jedz(P[k],function(br){if(br){info.className='bv-info bad';info.innerHTML='<b>Impuls zatrzymany</b>'+(uraz==='ruchowy'?'Droga ruchowa jest przerwana: impuls nie dotrze do mięśnia — <strong>ręka się nie cofnie</strong>, choć ból będzie odczuwany (droga do mózgu działa). Tak bywa przy urazach nerwów ruchowych.':'Droga czuciowa jest przerwana: impuls nie dotrze do rdzenia ani do mózgu — <strong>brak odruchu i brak czucia</strong> (ryzyko oparzenia bez bólu).');krok=KR.length-1}});
   else{var c=sv.querySelector('[data-k="'+k+'"] circle, [data-k="'+k+'"] ellipse');if(c){dot.setAttribute('cx',c.getAttribute('cx'));dot.setAttribute('cy',c.getAttribute('cy'));dot.setAttribute('opacity',1)}}});
 tl.appendChild(bk);tl.appendChild(btn('od początku',function(){krok=-1;cancelAnimationFrame(raf);dot.setAttribute('opacity',0);info.className='bv-info';info.textContent='Kliknij „krok”, aby poprowadzić impuls od receptora.'}));
 function rysujUraz(){seg(tl2,[['brak','łuk sprawny'],['czuciowy','przerwana droga czuciowa'],['ruchowy','przerwana droga ruchowa']],uraz,function(k){uraz=k;krok=-1;cancelAnimationFrame(raf);dot.setAttribute('opacity',0);rysujUraz();rysujX();
  info.className='bv-info';info.innerHTML=k==='brak'?'<b>Łuk sprawny</b>Wszystkie pięć elementów działa — odruch zachodzi.':'<b>Uszkodzenie: '+(k==='czuciowy'?'neuron czuciowy':'neuron ruchowy')+'</b>Kliknij „krok” i sprawdź, dokąd dotrze impuls.'})}
 rysujUraz();BIO.fx.auto(el,function(){bk.click()},1700,{now:1})}});
})();
