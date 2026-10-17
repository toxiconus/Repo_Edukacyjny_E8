/* viz: kosmek-jelitowy — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],seg=BIO.Lh["C.seg"];
BIO.define('kosmek-jelitowy',{opis:'Kosmek jelitowy w przekroju podłużnym: nabłonek jednowarstwowy z mikrokosmkami, sieć naczyń włosowatych (krew dopływająca i odpływająca do żyły wrotnej), centralne naczynie chłonne; wybór substancji (glukoza, aminokwasy, produkty trawienia tłuszczów, woda) pokazuje animowaną drogę do krwi albo limfy',
mount:function(el,o){
 var tl=H('div','bv-tools'),box=H('div'),info=BIO.fx.infoBox('Kliknij element kosmka albo wybierz substancję, aby zobaczyć, dokąd trafia po wchłonięciu.');el.appendChild(tl);el.appendChild(box);el.appendChild(info);
 var W=720,Hh=450,sv=svg(W,Hh,'Kosmek jelitowy — budowa i wchłanianie',[]);
 function G(k,kids){return S('g',{'data-k':k},kids)}
 var red='var(--blood-o2,#d2463c)',blue='var(--blood-co2,#3b6cc4)';
 sv.appendChild(G('swiatlo',[S('rect',{x:10,y:10,width:400,height:390,rx:12,fill:'#fbf3dc',stroke:'#e2cf96','stroke-width':1.5}),T(70,34,'światło jelita',{s:18,w:800,f:'#8a6a10'})]));
 var out='M120 400 L120 120 C120 50 340 50 340 120 L340 400',inn='M140 400 L140 124 C140 74 320 74 320 124 L320 400';
 sv.appendChild(G('nablonek',[S('path',{d:out,fill:'none',stroke:'none'}),S('path',{d:out,fill:'#f6cfc0',stroke:'#b9786a','stroke-width':2}),S('path',{d:inn,fill:'#fde9e2',stroke:'#c99a8a','stroke-width':1.5})]));
 var mk=[];for(var i=0;i<=24;i++){var a=Math.PI*i/24,x=230-110*Math.cos(a),y=120-62*Math.sin(a);mk.push(S('line',{x1:x,y1:y,x2:x-7*Math.cos(a),y2:y-7*Math.sin(a),stroke:'#b9786a','stroke-width':2}))}
 for(var j=0;j<10;j++){var yy=140+j*26;mk.push(S('line',{x1:120,y1:yy,x2:113,y2:yy,stroke:'#b9786a','stroke-width':2}));mk.push(S('line',{x1:340,y1:yy,x2:347,y2:yy,stroke:'#b9786a','stroke-width':2}))}
 sv.appendChild(G('mikro',[S('rect',{x:104,y:50,width:252,height:20,fill:'transparent'})].concat(mk)));
 sv.appendChild(G('krew',[S('path',{d:'M168 410 L168 140 C168 100 292 100 292 140 L292 410',fill:'none',stroke:'url(#kmGrad)','stroke-width':7}),
  S('path',{d:'M168 200 L292 200 M168 260 L292 260 M168 320 L292 320',fill:'none',stroke:'#9a5aa0','stroke-width':3,opacity:.7}),T(168,426,'krew dopływa',{s:16,w:700,f:'#a33'}),T(292,426,'→ żyła wrotna',{s:16,w:700,f:'#2a4a9a'})]));
 var df=S('defs',{},[S('linearGradient',{id:'kmGrad',x1:0,y1:0,x2:1,y2:0},[S('stop',{offset:'0','stop-color':'#d2463c'}),S('stop',{offset:'1','stop-color':'#3b6cc4'})])]);sv.insertBefore(df,sv.firstChild);
 sv.appendChild(G('chlonne',[S('path',{d:'M230 410 L230 150',fill:'none',stroke:'#c8b830','stroke-width':20,'stroke-linecap':'round'}),S('path',{d:'M230 410 L230 150',fill:'none',stroke:'#f3ecb0','stroke-width':14,'stroke-linecap':'round'}),T(230,442,'→ limfa',{s:16,w:700,f:'#7a6a10'})]));
 [['nabłonek z mikrokosmkami',96,'nablonek'],['naczynia włosowate',190,'krew'],['naczynie chłonne',250,'chlonne']].forEach(function(l){sv.appendChild(S('line',{x1:l[2]==='nablonek'?336:l[2]==='krew'?292:236,y1:l[1],x2:430,y2:l[1],stroke:'var(--viz-mut)','stroke-width':1.2,'stroke-dasharray':'3 3'}));sv.appendChild(T(436,l[1],l[0],{s:17,w:700,a:'start'}))});
 sv.appendChild(T(436,320,'cała ściana kosmka:',{s:16,w:600,a:'start',f:'var(--viz-mut)'}));sv.appendChild(T(436,338,'1 warstwa komórek',{s:16,w:600,a:'start',f:'var(--viz-mut)'}));
 var R={glukoza:['Glukoza','#e08a1e','M40 190 L130 190 L168 190 L168 140 C168 100 292 100 292 140 L292 410','krew','Po trawieniu skrobi glukoza przechodzi przez nabłonek (w dużej części <strong>transportem aktywnym</strong> — z nakładem energii) do <strong>naczyń włosowatych</strong>, a dalej <strong>żyłą wrotną do wątroby</strong>, która część zmagazynuje jako glikogen.'],
  amino:['Aminokwasy','#3a9a4a','M40 280 L130 280 L168 280 L168 140 C168 100 292 100 292 140 L292 410','krew','Produkty trawienia białek — <strong>aminokwasy</strong> — są pobierane przez komórki nabłonka (głównie transportem aktywnym) i trafiają do <strong>krwi</strong>, potem żyłą wrotną do wątroby. Komórki ciała budują z nich własne białka.'],
  tluszcz:['Produkty trawienia tłuszczów','#c8a400','M40 240 L130 240 L230 240 L230 410','limfa','Długołańcuchowe kwasy tłuszczowe i monoglicerydy wnikają do komórek nabłonka, gdzie są składane ponownie w tłuszcze i pakowane z białkami w chylomikrony (poziom ambitny). Te cząstki trafiają najpierw do <strong>naczynia chłonnego (limfy)</strong>, a następnie do krwi. Część krótkich kwasów tłuszczowych i glicerol może przechodzić bezpośrednio do krwi.'],
  woda:['Woda i sole mineralne','#3b8fd0','M40 330 L130 330 L168 330 L168 140 C168 100 292 100 292 140 L292 410','krew','Woda przechodzi biernie (osmoza) za wchłanianymi substancjami, jony — biernie i aktywnie. Trafiają do <strong>krwi</strong>. Witaminy rozpuszczalne w wodzie też idą do krwi, a <strong>A, D, E, K</strong> — razem z tłuszczami do limfy.']};
 var dot=S('circle',{r:10,fill:'#e08a1e',stroke:'#fff','stroke-width':2.5,opacity:0}),trasa=S('path',{d:'M0 0',fill:'none',stroke:'none'});dot.style.pointerEvents='none';sv.appendChild(trasa);sv.appendChild(dot);
 box.appendChild(sv);
 var show=BIO.fx.info(sv,info,{swiatlo:['Światło jelita','Wnętrze jelita z treścią pokarmową: tu kończy się trawienie, a produkty — glukoza, aminokwasy, glicerol i kwasy tłuszczowe, woda, sole, witaminy — czekają na wchłonięcie.'],
  nablonek:['Nabłonek kosmka','<strong>Jedna warstwa komórek</strong> — krótka droga do naczyń. Komórki pobierają substancje dyfuzją i <strong>transportem aktywnym</strong> (wymaga energii, działa nawet wbrew różnicy stężeń). Powierzchnię zwiększają trzy „piętra”: fałdy okrężne → kosmki (ok. 1 mm) → <strong>mikrokosmki</strong> na każdej komórce.'],
  mikro:['Mikrokosmki','Mikroskopijne wypustki błony komórek nabłonka („rąbek szczoteczkowy”). Wielokrotnie zwiększają powierzchnię; w ich błonie siedzą też enzymy kończące trawienie (np. maltaza, laktaza, peptydazy).'],
  krew:['Naczynia włosowate','Sieć kapilar w każdym kosmku: krew dopływa tętniczką, odbiera <strong>glukozę, aminokwasy, wodę, sole i witaminy rozpuszczalne w wodzie</strong> i odpływa do <strong>żyły wrotnej → wątroby</strong>.'],
  chlonne:['Naczynie chłonne (limfatyczne)','Ślepo zakończone naczynie w środku kosmka. Odbiera przede wszystkim <strong>chylomikrony</strong> zawierające tłuszcze długołańcuchowe oraz witaminy A, D, E, K. Limfa z jelit płynie do przewodu piersiowego i uchodzi do krwi w żyle podobojczykowej.']});
 var anim=0,red_m=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches,cur=null;
 function jedz(k){var r=R[k];cur=k;seg(tl,Object.keys(R).map(function(x){return[x,R[x][0]]}),k,jedz);cancelAnimationFrame(anim);trasa.setAttribute('d',r[2]);dot.setAttribute('fill',r[1]);dot.setAttribute('opacity',1);
  info.className='bv-info';info.innerHTML='<b>'+r[0]+' → '+r[3]+'</b>'+r[4];var L=trasa.getTotalLength(),t0=null,D=2600;
  function f(ts){if(t0===null)t0=ts;var q=Math.min(1,(ts-t0)/D),p=trasa.getPointAtLength(L*q);dot.setAttribute('cx',p.x);dot.setAttribute('cy',p.y);if(q<1)anim=requestAnimationFrame(f)}
  if(red_m){var p=trasa.getPointAtLength(L);dot.setAttribute('cx',p.x);dot.setAttribute('cy',p.y)}else anim=requestAnimationFrame(f)}
 seg(tl,Object.keys(R).map(function(x){return[x,R[x][0]]}),null,jedz);var ak=Object.keys(R),ai=-1;BIO.fx.auto(el,function(){ai=(ai+1)%ak.length;jedz(ak[ai])},3600,{now:1})}});
})();
