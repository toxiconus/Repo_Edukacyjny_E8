/* viz: skora-przekroj — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('skora-przekroj',{opis:'Przekrój skóry: naskórek (warstwa rogowa, melanina), skóra właściwa (naczynia, receptory, gruczoł potowy i łojowy, mieszek włosowy, mięsień przywłosowy), tkanka podskórna (tłuszcz); kliknij element',
mount:function(el,o){var W=640,Hh=400,sv=svg(W,Hh,'Przekrój skóry człowieka',[]),info=BIO.fx.infoBox('Kliknij warstwę albo strukturę skóry.');el.appendChild(sv);el.appendChild(info);
 function G(k,kids){return S('g',{'data-k':k},kids)}
 var y1=70,y2=110,y3=270,y4=380;
 sv.appendChild(G('nask',[S('path',{d:'M20 '+y1+' Q120 '+(y1-10)+' 220 '+y1+' T420 '+y1+' T620 '+y1+' L620 '+y2+' L20 '+y2+' Z',fill:'#f3d9c4',stroke:'#b9876a','stroke-width':2}),
  S('path',{d:'M20 '+y1+' Q120 '+(y1-10)+' 220 '+y1+' T420 '+y1+' T620 '+y1+' L620 '+(y1+10)+' Q520 '+y1+' 420 '+(y1+10)+' T220 '+(y1+10)+' T20 '+(y1+10)+' Z',fill:'#e8c2a4'}),T(530,y2-12,'naskórek',{s:16,w:800,f:'#7a4a30'})]));
 for(var i=0;i<9;i++)sv.appendChild(S('circle',{cx:60+i*65,cy:y2-6,r:4,fill:'#7a4a30',opacity:.8}));
 sv.appendChild(G('wlas',[S('rect',{x:20,y:y2,width:600,height:y3-y2,fill:'#f7e3e0',stroke:'#c99a96','stroke-width':1.5}),T(560,y3-14,'skóra właściwa',{s:16,w:800,f:'#8a4b46'})]));
 sv.appendChild(G('pod',[S('rect',{x:20,y:y3,width:600,height:y4-y3,fill:'#fff6d6',stroke:'#d8c27a','stroke-width':1.5})].concat([0,1,2,3,4,5,6,7].map(function(i){return S('ellipse',{cx:60+i*72,cy:y3+55,rx:30,ry:22,fill:'#ffe9a8',stroke:'#d8c27a'})})).concat([T(540,y4-12,'tkanka podskórna',{s:16,w:800,f:'#8a7420'})])));
 // naczynia
 sv.appendChild(G('nacz',[S('path',{d:'M20 230 C150 200 250 250 360 225 S560 210 620 232',fill:'none',stroke:'#d2463c','stroke-width':6}),S('path',{d:'M20 245 C160 220 260 268 370 242 S560 228 620 248',fill:'none',stroke:'#3b6cc4','stroke-width':6}),T(110,215,'naczynia',{s:14,w:700,f:'#a33'})]));
 // włos + mieszek + gruczoł łojowy + mięsień
 sv.appendChild(G('wlos',[S('path',{d:'M150 20 L160 '+y1+' L170 200',fill:'none',stroke:'#3a2a1a','stroke-width':5}),S('ellipse',{cx:170,cy:205,rx:14,ry:10,fill:'#c78b5a'}),T(120,30,'włos',{s:14,w:700})]));
 sv.appendChild(G('mieszek',[S('path',{d:'M150 '+y2+' L158 205 Q170 222 182 205 L176 '+y2,fill:'none',stroke:'#8a5a3a','stroke-width':2.5,'stroke-dasharray':'4 3'})]));
 sv.appendChild(G('loj',[S('ellipse',{cx:195,cy:140,rx:20,ry:13,fill:'#f2c94c',stroke:'#b8901f','stroke-width':2}),T(220,166,'gruczoł łojowy',{s:13,w:700,a:'start'})]));
 sv.appendChild(G('przyw',[S('path',{d:'M180 170 L240 '+(y2+8),stroke:'#a0524d','stroke-width':5,'stroke-linecap':'round'}),T(250,y2+16,'mięsień przywłosowy',{s:13,w:700,a:'start'})]));
 // gruczoł potowy
 sv.appendChild(G('pot',[S('path',{d:'M430 '+(y1-4)+' C426 120 440 160 430 200 C420 240 470 260 450 280 C430 300 470 300 460 280',fill:'none',stroke:'#2f7fa8','stroke-width':3.5}),S('circle',{cx:455,cy:283,r:13,fill:'none',stroke:'#2f7fa8','stroke-width':3}),T(475,175,'gruczoł potowy',{s:13,w:700,a:'start'})]));
 // receptory
 sv.appendChild(G('rec',[S('circle',{cx:320,cy:125,r:9,fill:'#7e57c2'}),S('path',{d:'M320 134 C318 170 330 200 322 250',fill:'none',stroke:'#7e57c2','stroke-width':2.5}),S('ellipse',{cx:560,cy:195,rx:10,ry:16,fill:'none',stroke:'#7e57c2','stroke-width':3}),T(332,150,'receptory i nerwy',{s:13,w:700,a:'start'})]));
 BIO.fx.info(sv,info,{nask:['Naskórek','Wielowarstwowy nabłonek <strong>bez naczyń krwionośnych</strong>. Komórki zewnętrzne rogowacieją (<strong>keratyna</strong>) i złuszczają się, od spodu stale powstają nowe. Brązowe kropki to <strong>melanina</strong> — barwnik pochłaniający część promieniowania UV.'],
  wlas:['Skóra właściwa','Tkanka łączna z włóknami (sprężystość), <strong>naczyniami</strong>, <strong>receptorami</strong>, gruczołami potowymi i łojowymi, mieszkami włosowymi i mięśniami przywłosowymi. Odżywia naskórek, odbiera bodźce, uczestniczy w termoregulacji.'],
  pod:['Tkanka podskórna','Głównie <strong>tkanka tłuszczowa</strong>: izoluje (mniej ucieka ciepła), amortyzuje uderzenia, magazynuje energię; łączy skórę z mięśniami.'],
  nacz:['Naczynia krwionośne','Rozszerzają się, gdy jest za ciepło (skóra czerwienieje, więcej ciepła oddane), zwężają się w zimnie (skóra blednie). Czerwone — krew utlenowana, niebieskie — odtlenowana.'],
  wlos:['Włos','Wytwór naskórka zbudowany z keratyny; łodyga wystaje ponad skórę, korzeń tkwi w mieszku, a u nasady jest cebulka. Ogranicza utratę ciepła, chroni, ma funkcję czuciową.'],
  mieszek:['Mieszek włosowy','Zagłębienie naskórka w skórze właściwej, w którym rośnie włos.'],
  loj:['Gruczoł łojowy','Uchodzi do mieszka włosowego; łój natłuszcza skórę i włosy, chroni przed wysychaniem i częściowo przed drobnoustrojami.'],
  przyw:['Mięsień przywłosowy','Mięsień gładki: w zimnie (lub ze strachu) kurczy się i stawia włos — powstaje „gęsia skórka”.'],
  pot:['Gruczoł potowy','Kłębek w skórze właściwej, przewód wyprowadzający uchodzi na powierzchni naskórka. Pot (woda, sole, trochę mocznika) chłodzi ciało, parując, i usuwa część zbędnych substancji.'],
  rec:['Receptory skóry','Zakończenia nerwowe i ciałka czuciowe odbierają dotyk, ucisk, ból, ciepło, zimno i wibracje; impulsy biegną nerwami do mózgu.']})}});
})();
