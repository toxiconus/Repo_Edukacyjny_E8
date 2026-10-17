/* viz: synapsa — poziom pliku · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
BIO.define('synapsa',{opis:'Animacja przekazania impulsu na synapsie chemicznej w pięciu krokach: impuls, uwolnienie neuroprzekaźnika, szczelina, receptory, nowy impuls.',
mount:function(el,opt){
  var S=BIO.S,T=BIO.T,cur=Math.max(0,Math.min(4,parseInt(opt&&opt.krok,10)||0));
  var START='Animacja pokazuje 5 kroków przekazania impulsu. Użyj przycisków „◀ krok” i „krok ▶” albo kliknij element schematu.';
  var TT=['Impuls dochodzi do zakończenia aksonu','Pęcherzyki uwalniają neuroprzekaźnik','Neuroprzekaźnik w szczelinie synaptycznej','Łączenie z receptorami','Nowy impuls w następnej komórce'];
  var TX=['Impuls nerwowy biegnie wzdłuż aksonu i dociera do jego zakończenia.',
    'Impuls sprawia, że pęcherzyki synaptyczne łączą się z błoną zakończenia aksonu i wylewają neuroprzekaźnik do szczeliny synaptycznej.',
    'Cząsteczki neuroprzekaźnika przemieszczają się przez wąską szczelinę. Zajmuje to chwilę, dlatego przekazanie na synapsie jest wolniejsze niż bieg impulsu w aksonie.',
    'Neuroprzekaźnik łączy się z receptorami w błonie następnej komórki, jak klucz z zamkiem. Pasuje tylko do swoich receptorów.',
    'Po pobudzeniu receptorów w następnej komórce powstaje nowy impuls. Przekazanie jest jednokierunkowe: pęcherzyki są tylko w zakończeniu aksonu, a receptory po drugiej stronie szczeliny.'];
  var INFO={
    akson:['Zakończenie aksonu','Tu kończy się akson komórki nadającej sygnał. W środku są pęcherzyki z neuroprzekaźnikiem.'],
    pecherzyki:['Pęcherzyki synaptyczne','Małe pęcherzyki wypełnione neuroprzekaźnikiem – substancją chemiczną, która przenosi sygnał.'],
    szczelina:['Szczelina synaptyczna','Wąska przestrzeń między komórkami. Impuls elektryczny nie przeskakuje przez nią – sygnał przenosi neuroprzekaźnik.'],
    receptory:['Receptory','Białka w błonie następnej komórki. Pasują do określonego neuroprzekaźnika i po jego związaniu pobudzają komórkę.'],
    nastepna:['Następna komórka','Komórka odbierająca sygnał (np. kolejny neuron lub komórka mięśniowa). Powstaje w niej nowy impuls.']};
  TT.forEach(function(t,i){INFO['s'+i]=[(i+1)+'. '+t,TX[i]]});
  function lab(k,x,y,t){var ls=t.split('|');return ls.map(function(q,i){var e=T(x,y+(i-(ls.length-1)/2)*15,q,{s:13,w:700});e.setAttribute('data-k',k);e.setAttribute('data-lab','1');return e})}
  function C(x,y,r,f,s,w){return S('circle',{cx:x,cy:y,r:r,fill:f,stroke:s,'stroke-width':w})}
  function ln(x1,y1,x2,y2){return S('line',{x1:x1,y1:y1,x2:x2,y2:y2,stroke:'var(--viz-mut)','stroke-width':1.2,'pointer-events':'none'})}
  var RY=[130,175,220,265],kids=[];
  kids.push(T(350,22,'kierunek przekazywania impulsu',{s:13,w:700}),S('line',{x1:60,y1:44,x2:632,y2:44,stroke:'var(--viz-ink)','stroke-width':3}),S('polygon',{points:'650,44 630,36 630,52',fill:'var(--viz-ink)'}));
  kids.push(S('rect',{x:345,y:105,width:50,height:190,fill:'var(--viz-bg2)','data-k':'szczelina'}));
  kids.push(S('path',{d:'M20 170 L220 170 Q232 120 270 105 L330 105 Q345 105 345 120 L345 280 Q345 295 330 295 L270 295 Q232 280 220 230 L20 230 Z',fill:'var(--k1-bg)',stroke:'var(--k1)','stroke-width':3,'data-k':'akson'}));
  kids.push(S('path',{d:'M395 105 L670 105 Q690 105 690 125 L690 275 Q690 295 670 295 L395 295 Z',fill:'var(--k2-bg)',stroke:'var(--k2)','stroke-width':3,'data-k':'nastepna'}));
  var rec=RY.map(function(y){return S('rect',{x:395,y:y-12,width:14,height:24,rx:3,fill:'var(--k5-bg)',stroke:'var(--k5)','stroke-width':2,'data-k':'receptory'})});
  kids=kids.concat(rec);
  /* pęcherzyki: spoczynek / połączone z błoną */
  var V=[[270,150,0],[312,135,332],[318,190,332],[272,245,0],[314,240,332],[318,272,332]];
  var ves=V.map(function(v){var d=S('g',{},[C(-4,-3,2.5,'var(--k3)','var(--k3)',1),C(4,-3,2.5,'var(--k3)','var(--k3)',1),C(0,4,2.5,'var(--k3)','var(--k3)',1)]);
    var c=C(0,0,13,'var(--k3-bg)','var(--k3)',2.5);return{g:S('g',{'data-k':'pecherzyki'},[c,d]),c:c,d:d,v:v}});
  ves.forEach(function(o){kids.push(o.g)});
  /* cząsteczki */
  var M=[[],[[354,130],[358,141],[354,185],[358,196],[354,235],[358,246],[354,267],[358,278]],
    [[368,125],[378,150],[366,175],[380,200],[370,225],[378,250],[366,270],[376,285]],
    [[391,130],[391,175],[391,220],[391,265],[374,152],[372,198],[374,246],[372,282]],
    [[391,130],[391,175],[391,220],[391,265]]];
  var mol=[0,1,2,3,4,5,6,7].map(function(){var c=C(0,0,4.5,'var(--k3)','var(--viz-ink)',1);c.setAttribute('pointer-events','none');kids.push(c);return c});
  /* błysk impulsu */
  var bt=T(0,24,'impuls',{s:12,w:700}),bolt=S('g',{'pointer-events':'none'},[S('path',{d:'M0 -13 L-7 2 L0 2 L-4 13 L8 -4 L1 -4 Z',fill:'var(--nerve)',stroke:'var(--viz-ink)','stroke-width':1.2}),bt]);
  kids.push(bolt);
  /* podpisy */
  kids=kids.concat(lab('pecherzyki',285,78,'pęcherzyki z|neuroprzekaźnikiem'),lab('receptory',455,82,'receptory'),
    lab('akson',270,345,'zakończenie|aksonu'),lab('szczelina',370,345,'szczelina|synaptyczna'),lab('nastepna',540,345,'następna|komórka'));
  kids.push(ln(280,95,272,136),ln(442,92,404,118),ln(270,326,270,298),ln(370,326,370,298),ln(540,326,540,298));
  var cap=T(350,398,'',{s:15,w:700});kids.push(cap);
  var sv=BIO.svg(700,415,'Synapsa chemiczna: przekazanie impulsu od zakończenia aksonu do następnej komórki',kids),box=BIO.fx.infoBox(START);
  function go(i,say){
    cur=i;
    ves.forEach(function(o){var f=i>=1&&o.v[2]>0,x=f?o.v[2]:o.v[0];o.g.setAttribute('transform','translate('+x+','+o.v[1]+')');o.c.setAttribute('stroke-dasharray',f?'4 3':'none');o.d.setAttribute('display',f?'none':'inline')});
    mol.forEach(function(c,j){var p=M[i][j];if(p){c.setAttribute('cx',p[0]);c.setAttribute('cy',p[1]);c.setAttribute('display','inline')}else c.setAttribute('display','none')});
    rec.forEach(function(r){var on=i>=3;r.style.setProperty('fill',on?'var(--k5)':'var(--k5-bg)');r.setAttribute('stroke-width',on?3.5:2)});
    var bp=i===0?[190,200]:(i===1?[285,195]:(i===4?[560,200]:null));
    if(bp){bolt.setAttribute('transform','translate('+bp[0]+','+bp[1]+')');bolt.setAttribute('display','inline');bt.textContent=i===4?'nowy impuls':'impuls'}else bolt.setAttribute('display','none');
    cap.textContent='Krok '+(i+1)+'/5: '+TT[i];
    if(say){box.className='bv-info';box.innerHTML='<b>'+INFO['s'+i][0]+'</b>'+INFO['s'+i][1]}}
  var bP=BIO.btn('◀ krok',function(){go((cur+4)%5,true)}),bN=BIO.btn('krok ▶',function(){go((cur+1)%5,true)});
  el.appendChild(BIO.H('div','bv-tools',null,[bP,bN]));el.appendChild(sv);el.appendChild(box);
  BIO.fx.info(el,box,INFO);
  el.querySelectorAll('[data-lab]').forEach(function(x){x.setAttribute('tabindex','-1')});
  go(cur,false);
  BIO.fx.auto(el,function(){go((cur+1)%5,true)},2600);
}});
})();
