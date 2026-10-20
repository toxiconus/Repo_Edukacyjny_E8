/* viz: lozysko-wymiana — poziom pliku · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
BIO.define('lozysko-wymiana',{opis:'Schemat łożyska: krew matki opływa kosmki z naczyniami płodu; strzałki pokazują, co płynie do płodu, a co do matki. Pępowina ma dwie tętnice i jedną żyłę.',
mount:function(el,opt){
  var S=BIO.S,T=BIO.T,box=BIO.fx.infoBox('Kliknij element schematu (łożysko, kosmki, pępowinę, strzałki…), aby zobaczyć, co robi.');
  var INFO={
    sciana:['Ściana macicy','Mięśniowa ściana macicy zawiera naczynia krwionośne matki. Do niej przyrasta łożysko.'],
    krewmatki:['Krew matki','Opływa kosmki łożyska, ale nie wpływa do naczyń płodu. Dostarcza tlen i składniki odżywcze, a odbiera dwutlenek węgla i produkty przemiany materii.'],
    lozysko:['Łożysko','Narząd przyrośnięty do ściany macicy, wytworzony przez zarodek i organizm matki. Krew matki i krew płodu się w nim nie miesza: substancje przechodzą przez cienką barierę.'],
    kosmki:['Kosmki łożyska','Palczaste wypustki z naczyniami włosowatymi płodu. Mają cienką ścianę i ogromną powierzchnię, więc wymiana substancji jest sprawna.'],
    tlen:['Od matki do płodu','Przez cienką barierę przechodzą do krwi płodu tlen i składniki odżywcze (np. glukoza, aminokwasy) oraz niektóre przeciwciała matki.'],
    co2:['Od płodu do matki','Z krwi płodu do krwi matki przechodzą dwutlenek węgla i produkty przemiany materii (np. mocznik). Matka usuwa je ze swojego organizmu.'],
    pepowina:['Pępowina','Łączy płód z łożyskiem. Biegną w niej trzy naczynia: dwie tętnice i jedna żyła.'],
    tetnice:['Dwie tętnice pępowinowe','Prowadzą od płodu do łożyska krew uboższą w tlen i bogatą w CO₂. To tętnice, bo odchodzą od serca płodu, choć krew w nich jest odtlenowana.'],
    zyla:['Żyła pępowinowa','Niesie z łożyska do płodu krew bogatą w tlen i składniki odżywcze.'],
    plod:['Płód','Przed urodzeniem nie oddycha płucami i nie je jak po urodzeniu: tlen i pokarm dostaje przez łożysko i pępowinę.'],
    owodnia:['Worek owodniowy','Wypełniony płynem (wodami płodowymi), który chroni płód przed wstrząsami i pomaga utrzymać stałą temperaturę.']};
  function R(x,y,w,h,r,f,s,sw,k){var o={x:x,y:y,width:w,height:h,rx:r,fill:f,stroke:s,'stroke-width':sw};if(k)o['data-k']=k;return S('rect',o)}
  function C(x,y,r,f,s,w,k){var o={cx:x,cy:y,r:r,fill:f,stroke:s,'stroke-width':w};if(k)o['data-k']=k;return S('circle',o)}
  function lab(k,x,y,t,s){var ls=t.split('|');return ls.map(function(q,i){var e=T(x,y+(i-(ls.length-1)/2)*15,q,{s:s||12,w:700});if(k){e.setAttribute('data-k',k);e.setAttribute('data-lab','1')}return e})}
  function arr(x1,x2,y,col){var d=x2>x1?1:-1;return[S('line',{x1:x1,y1:y,x2:x2-d*7,y2:y,stroke:col,'stroke-width':3.5}),S('polygon',{points:x2+','+y+' '+(x2-d*9)+','+(y-5.5)+' '+(x2-d*9)+','+(y+5.5),fill:col})]}
  var O='var(--blood-o2)',B='var(--blood-co2)',FY=[150,220,290],kids=[];
  kids.push(T(350,20,'Krew matki i płodu się nie miesza – wymiana odbywa się przez cienką barierę',{s:13,w:700}));
  kids.push(R(10,40,680,400,40,'var(--k4-bg)','var(--k4)',2.5,'sciana'),R(100,68,570,344,28,'var(--viz-bg)','var(--k4)',1.5));
  kids=kids.concat(lab('sciana',55,225,'ściana|macicy'));
  kids.push(S('g',{'data-k':'krewmatki'},[S('line',{x1:22,y1:130,x2:114,y2:130,stroke:O,'stroke-width':9}),S('line',{x1:114,y1:310,x2:22,y2:310,stroke:B,'stroke-width':9})]));
  kids=kids.concat(lab('krewmatki',55,105,'tętnica|matki'),lab('krewmatki',55,345,'żyła|matki'));
  kids.push(R(100,100,200,240,18,'var(--k3-bg)','var(--k3)',2.5,'lozysko'));
  kids=kids.concat(lab('lozysko',200,88,'łożysko',13));
  kids.push(S('g',{'data-k':'krewmatki'},[R(112,112,96,216,10,'var(--blood-o2-bg)',O,1.5)]));
  kids=kids.concat(lab('krewmatki',158,122,'krew matki'));
  var fg=[];FY.forEach(function(y){fg.push(R(190,y-18,110,36,18,'var(--k3-bg)','var(--k3)',2.5),S('line',{x1:208,y1:y,x2:286,y2:y,stroke:B,'stroke-width':5,'stroke-linecap':'round'}))});
  kids.push(S('g',{'data-k':'kosmki'},fg));
  kids=kids.concat(lab('kosmki',255,185,'kosmki'),lab('kosmki',255,255,'płodu'));
  var tg=[],cg=[];FY.forEach(function(y){tg=tg.concat(arr(128,188,y-9,O));cg=cg.concat(arr(188,128,y+9,B))});
  kids.push(S('g',{'data-k':'tlen'},tg),S('g',{'data-k':'co2'},cg));
  /* płód i pępowina */
  kids.push(S('ellipse',{cx:560,cy:240,rx:105,ry:135,fill:'var(--k1-bg)',stroke:'var(--k1)','stroke-width':2,'stroke-dasharray':'6 4','data-k':'owodnia'}));
  kids=kids.concat(lab('owodnia',560,122,'wody|płodowe'));
  var cd='M300 222 C350 170 420 300 516 252';
  kids.push(S('g',{'data-k':'pepowina'},[S('path',{d:cd,fill:'none',stroke:'var(--k3)','stroke-width':22,'stroke-linecap':'round'}),S('path',{d:cd,fill:'none',stroke:'var(--k3-bg)','stroke-width':16,'stroke-linecap':'round'})]));
  kids=kids.concat(lab('pepowina',400,190,'pępowina'));
  kids.push(S('g',{'data-k':'plod'},[C(575,165,28,'var(--skin)','var(--viz-mut)',2),S('ellipse',{cx:552,cy:255,rx:40,ry:56,fill:'var(--skin)',stroke:'var(--viz-mut)','stroke-width':2}),S('ellipse',{cx:598,cy:240,rx:10,ry:26,fill:'var(--skin)',stroke:'var(--viz-mut)','stroke-width':2}),S('ellipse',{cx:545,cy:330,rx:14,ry:28,fill:'var(--skin)',stroke:'var(--viz-mut)','stroke-width':2}),S('ellipse',{cx:575,cy:325,rx:13,ry:26,fill:'var(--skin)',stroke:'var(--viz-mut)','stroke-width':2})]));
  kids=kids.concat(lab('plod',641,285,'płód'));
  /* przekrój pępowiny */
  kids.push(T(350,257,'przekrój pępowiny',{s:12,w:600,f:'var(--viz-mut)'}),C(350,305,36,'var(--k3-bg)','var(--k3)',3,'pepowina'),
    C(338,296,8,'var(--blood-co2-bg)',B,3,'tetnice'),C(362,296,8,'var(--blood-co2-bg)',B,3,'tetnice'),C(350,318,10,'var(--blood-o2-bg)',O,3,'zyla'),
    S('line',{x1:372,y1:296,x2:394,y2:297,stroke:'var(--viz-mut)','stroke-width':1.2}),S('line',{x1:362,y1:319,x2:394,y2:320,stroke:'var(--viz-mut)','stroke-width':1.2}));
  kids=kids.concat(lab('tetnice',398,297,'tętnice (2)').map(function(e){e.setAttribute('text-anchor','start');return e}),lab('zyla',398,320,'żyła (1)').map(function(e){e.setAttribute('text-anchor','start');return e}));
  /* legenda */
  kids.push(S('g',{'data-k':'tlen'},arr(112,150,372,O)),S('g',{'data-k':'co2'},arr(150,112,394,B)));
  kids=kids.concat(lab('tlen',160,372,'O₂ i składniki odżywcze: krew matki → płód',13).map(function(e){e.setAttribute('text-anchor','start');return e}),
    lab('co2',160,394,'CO₂ i produkty przemiany: płód → krew matki',13).map(function(e){e.setAttribute('text-anchor','start');return e}));
  var sv=BIO.svg(700,450,'Schemat łożyska: wymiana substancji między krwią matki a krwią płodu',kids);
  el.appendChild(sv);el.appendChild(box);
  BIO.fx.info(el,box,INFO);
  el.querySelectorAll('[data-lab]').forEach(function(x){x.setAttribute('tabindex','-1')});
}});
})();
