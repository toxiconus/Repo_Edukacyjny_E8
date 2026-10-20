/* viz: droga-zarodka — poziom pliku · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
BIO.define('droga-zarodka',{opis:'Animacja drogi od owulacji do zagnieżdżenia: komórka jajowa w jajowodzie, zapłodnienie, zygota, bruzdkowanie i zagnieżdżenie w macicy.',
mount:function(el,opt){
  var S=BIO.S,T=BIO.T,cx=115,cy=335,cur=Math.max(0,Math.min(9,parseInt(opt&&opt.krok,10)||0));
  var START='Animacja pokazuje 10 etapów. Użyj przycisków „◀ krok” i „krok ▶”, kliknij numer etapu albo narząd.';
  var ST=[['Owulacja','dzień 0'],['Komórka jajowa w jajowodzie','dzień 0 – wędrówka ku macicy'],['Plemniki docierają','zwykle w ciągu doby od owulacji (orientacyjnie)'],['Zapłodnienie','plemnik wnika do komórki jajowej'],['Zygota','jądra się łączą: pierwsza komórka nowego organizmu'],['2 komórki','bruzdkowanie: ok. 1–2 doby po zapłodnieniu (orientacyjnie)'],['4 komórki','ok. 2 doby po zapłodnieniu (orientacyjnie)'],['8 komórek','ok. 3 doby po zapłodnieniu (orientacyjnie)'],['Kulka komórek','wędrówka do macicy trwa ok. 3–4 dni (orientacyjnie)'],['Zagnieżdżenie','w błonie śluzowej macicy, ok. 6–7 dni po zapłodnieniu (orientacyjnie)']];
  var TX=['Dojrzały pęcherzyk w jajniku pęka i uwalnia komórkę jajową. Lejek jajowodu ją wychwytuje.',
   'Komórkę jajową przesuwają ku macicy rzęski i skurcze ścian jajowodu. Sama nie potrafi się poruszać.',
   'Plemniki płyną od pochwy przez macicę do jajowodu. Do komórki jajowej dociera tylko niewielka część z milionów.',
   'Jeden plemnik wnika do komórki jajowej (zwykle w jajowodzie). Po jego wniknięciu kolejne plemniki już się nie dostają.',
   'Jądro plemnika i jądro komórki jajowej łączą się. Powstaje zygota z kompletem chromosomów.',
   'Zygota zaczyna się dzielić (bruzdkowanie). Komórki są coraz mniejsze, a cały zarodek jeszcze nie rośnie. Wędruje w stronę macicy.',
   'Kolejny podział. Zarodek nadal wędruje jajowodem, otoczony osłonką.',
   'Dalsze podziały. Komórki są jeszcze do siebie podobne.',
   'Zarodek jest już kulką komórek. Do macicy dociera po ok. 3–4 dniach wędrówki (orientacyjnie).',
   'Zarodek wnika w błonę śluzową macicy. Od tej chwili zaczyna się ciąża, a zarodek pobiera substancje odżywcze z organizmu matki.'];
  var INFO={jajnik:['Jajnik','Tu dojrzewa komórka jajowa i następuje owulacja.'],jajowod:['Jajowód','Droga komórki jajowej do macicy. Tu zwykle dochodzi do zapłodnienia i zaczyna się bruzdkowanie.'],macica:['Macica','Tu zarodek się zagnieżdża i rozwija. Jej błona śluzowa jest wcześniej przygotowana hormonami.']};
  ST.forEach(function(s,i){INFO['s'+i]=[(i+1)+'. '+s[0],TX[i]]});
  function C(x,y,r,f,s,w){return S('circle',{cx:x,cy:y,r:r,fill:f,stroke:s,'stroke-width':w||2.5})}
  function tx(k,x,y,t){var e=T(x,y,t,{s:13,w:700});e.setAttribute('data-k',k);e.setAttribute('data-lab','1');return e}
  var tube=S('path',{d:'M156 170 C230 88 340 88 440 140 C480 160 505 175 524 184',fill:'none',stroke:'var(--k5)','stroke-width':20,'stroke-linecap':'round'});
  var tube2=S('path',{d:'M156 170 C230 88 340 88 440 140 C480 160 505 175 524 184',fill:'none',stroke:'var(--k5-bg)','stroke-width':15,'stroke-linecap':'round'});
  var scene=[
    S('ellipse',{cx:100,cy:215,rx:48,ry:32,fill:'var(--k1-bg)',stroke:'var(--k1)','stroke-width':2.5,'data-k':'jajnik'}),
    S('g',{'data-k':'jajowod'},[tube,tube2,S('path',{d:'M106 200 Q128 170 160 164 L158 186 Z',fill:'var(--k5-bg)',stroke:'var(--k5)','stroke-width':2})]),
    S('g',{'data-k':'macica'},[S('path',{d:'M520 140 Q600 100 690 140 Q694 210 644 290 L580 290 Q528 210 520 140 Z',fill:'var(--k4-bg)',stroke:'var(--k4)','stroke-width':2.5}),
      S('path',{d:'M545 160 Q600 135 662 160 Q666 215 628 265 L596 265 Q540 215 545 160 Z',fill:'var(--k3-bg)',stroke:'var(--k3)','stroke-width':2}),T(603,222,'błona śluzowa',{s:12})]),
    tx('jajnik',100,259,'jajnik'),tx('jajowod',288,78,'jajowód'),tx('macica',612,310,'macica')];
  var sg=S('g',{}),ring=S('circle',{r:15,fill:'none',stroke:'var(--k4)','stroke-width':3,'stroke-dasharray':'4 3','pointer-events':'none'}),
      mk=C(0,0,7,'var(--k3-bg)','var(--k3)',2.5);mk.setAttribute('pointer-events','none');
  var ins=S('g',{}),frame=C(cx,cy,62,'var(--viz-bg2)','var(--viz-line)',2);
  var tT=T(200,310,'',{a:'start',s:17,w:700}),tS=T(200,334,'',{a:'start',s:13,w:500,f:'var(--viz-mut)'});
  var dots=[],dg=[];
  for(var i=0;i<10;i++)(function(i){var c=C(200+i*34,375,11,'var(--viz-bg)','var(--accent)',2),t=T(200+i*34,375,String(i+1),{s:11,w:700}),g=S('g',{'data-k':'s'+i,'aria-label':'Etap '+(i+1)},[c,t]);
    dots.push([c,t]);dg.push([g,i])})(i);
  var kids=scene.concat([frame,ins,T(cx,407,'powiększenie',{s:11,w:500,f:'var(--viz-mut)'}),sg,ring,mk,tT,tS],dg.map(function(d){return d[0]}));
  var sv=BIO.svg(700,415,'Droga od owulacji do zagnieżdżenia zarodka w macicy',kids),box=BIO.fx.infoBox(START);
  var L=0;
  function pt(f){var p=tube.getPointAtLength(L*f);return[p.x,p.y]}
  function sp(x,y,rot,sc){return S('g',{transform:'translate('+x+','+y+') rotate('+rot+') scale('+sc+')'},[C(0,0,3.5,'var(--viz-ink)','var(--viz-ink)',1),S('path',{d:'M3 0 q5 -5 10 0 t10 0',fill:'none',stroke:'var(--viz-ink)','stroke-width':1.6})])}
  function cell(x,y,r,n){var a=[C(x,y,r,'var(--k3-bg)','var(--k3)',2)];if(n)a.push(C(x,y,n,'var(--k5-bg)','var(--k5)',1.5));return a}
  function rg(n,R,r,nu,ox,oy){var o=[];for(var k=0;k<n;k++){var t=2*Math.PI*k/n-Math.PI/2;o=o.concat(cell(ox+R*Math.cos(t),oy+R*Math.sin(t),r,nu))}return o}
  function drawIns(i){
    var a=[];
    if(i<=1)a=cell(cx,cy,38,11);
    else if(i===2){a=cell(cx,cy,30,9);[180,148,212].forEach(function(d){var t=d*Math.PI/180;a.push(sp(cx+34*Math.cos(t),cy+34*Math.sin(t),d,1.1))})}
    else if(i===3){a=cell(cx,cy,32,9);a.push(S('circle',{cx:cx,cy:cy,r:42,fill:'none',stroke:'var(--k4)','stroke-width':2.5,'stroke-dasharray':'4 3'}),sp(cx-22,cy-8,200,1.1))}
    else if(i===4)a=cell(cx,cy,36,13);
    else if(i===5)a=cell(cx-27,cy,27,8).concat(cell(cx+27,cy,27,8));
    else if(i===6)[[-23,-23],[23,-23],[-23,23],[23,23]].forEach(function(p){a=a.concat(cell(cx+p[0],cy+p[1],23,7))});
    else if(i===7)a=cell(cx,cy,14,5).concat(rg(7,36,15,5,cx,cy));
    else if(i===8)a=cell(cx,cy,12,3).concat(rg(5,24,11,3,cx,cy),rg(10,47,9,3,cx,cy));
    else{a=[S('path',{d:'M'+(cx-52)+' '+(cy+33)+' Q'+cx+' '+(cy+8)+' '+(cx+52)+' '+(cy+33)+' A62 62 0 0 1 '+(cx-52)+' '+(cy+33)+' Z',fill:'var(--k3-bg)',stroke:'var(--k3)','stroke-width':2})];
      a=a.concat(cell(cx,cy+14,9,3),rg(6,17,8.5,3,cx,cy+14))}
    return a}
  var POS=[[128,196],0.1,0.3,0.3,0.3,0.42,0.56,0.7,[562,192],[600,143]];
  function go(i,say){
    cur=i;
    var p=POS[i];p=(typeof p==='number')?pt(p):p;
    mk.setAttribute('cx',p[0]);mk.setAttribute('cy',p[1]);ring.setAttribute('cx',p[0]);ring.setAttribute('cy',p[1]);ring.setAttribute('display',i===3?'inline':'none');
    while(sg.firstChild)sg.removeChild(sg.firstChild);
    var fs=i===2?[.52,.6,.68]:(i===3?[.37,.55,.63]:[]);
    fs.forEach(function(f){var q=pt(f);sg.appendChild(sp(q[0],q[1],0,.9))});
    while(ins.firstChild)ins.removeChild(ins.firstChild);
    drawIns(i).forEach(function(n){ins.appendChild(n)});
    tT.textContent=(i+1)+'. '+ST[i][0];tS.textContent=ST[i][1];
    dots.forEach(function(d,j){var on=j===i;d[0].style.setProperty('fill',on?'var(--accent)':'var(--viz-bg)');d[1].style.setProperty('fill',on?'var(--viz-bg)':'var(--viz-ink)')});
    if(say){box.className='bv-info';box.innerHTML='<b>'+INFO['s'+i][0]+'</b>'+INFO['s'+i][1]}}
  var bP=BIO.btn('◀ krok',function(){go((cur+9)%10,true)}),bN=BIO.btn('krok ▶',function(){go((cur+1)%10,true)});
  var tools=BIO.H('div','bv-tools',null,[bP,bN]);
  el.appendChild(tools);el.appendChild(sv);el.appendChild(box);
  L=tube.getTotalLength();
  BIO.fx.info(el,box,INFO);
  dg.forEach(function(d){d[0].addEventListener('click',function(){go(d[1],true)});d[0].addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')go(d[1],true)})});
  el.querySelectorAll('[data-lab]').forEach(function(x){x.setAttribute('tabindex','-1')});
  go(cur,false);
  BIO.fx.auto(el,function(){go((cur+1)%10,true)},2800);
}});
})();
