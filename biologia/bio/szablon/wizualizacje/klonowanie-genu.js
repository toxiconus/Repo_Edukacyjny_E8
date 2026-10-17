/* viz: klonowanie-genu — poziom pliku · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
BIO.define('klonowanie-genu',{opis:'Animacja klonowania genu w pięciu krokach: enzym restrykcyjny wycina gen, ten sam enzym otwiera plazmid, ligaza wkleja gen, plazmid trafia do bakterii, która produkuje białko.',
mount:function(el,opt){
  var S=BIO.S,T=BIO.T,idx=Math.max(0,Math.min(4,parseInt(opt&&opt.krok,10)||0));
  var TT=['Wytnij gen','Otwórz plazmid','Wklej gen','Wgraj do bakterii','Produkuj białko'];
  var TX=['Enzym restrykcyjny tnie DNA człowieka w konkretnych miejscach i wycina gen insuliny.',
    'Ten sam enzym tnie plazmid. Końce są takie same, więc gen będzie pasował do wektora.',
    'Ligaza skleja końce genu z plazmidem. Powstaje DNA rekombinowane.',
    'Plazmid wprowadza się do bakterii. Przy każdym podziale bakteria kopiuje go razem z genem.',
    'Bakteria odczytuje ludzki gen (wspólny kod genetyczny) i produkuje ludzkie białko, np. insulinę.'];
  var INFO={
    dna:['DNA człowieka','Długa nić DNA. Enzym restrykcyjny tnie ją tylko w określonych sekwencjach.'],
    gen:['Gen insuliny','Fragment DNA z informacją o budowie insuliny. Po wycięciu trafia do plazmidu.'],
    enzym:['Enzym restrykcyjny','Molekularne nożyczki. Tną DNA w konkretnych miejscach; ten sam enzym tnie gen i plazmid.'],
    plazmid:['Plazmid','Mały, kolisty DNA bakterii. Po otwarciu przyjmuje gen i działa jako wektor — kurier.'],
    ligaza:['Ligaza','Molekularny klej. Skleja końce genu i plazmidu w DNA rekombinowane.'],
    bakteria:['Bakteria (np. Escherichia coli)','Plazmid wprowadzony do bakterii. Przy każdym podziale kopiuje się plazmid z genem.'],
    bialko:['Białko','Produkt genu. Bakteria drukuje ludzkie białko, bo kod genetyczny jest wspólny dla wszystkich organizmów.']};
  TT.forEach(function(t,i){INFO['s'+i]=[(i+1)+'. '+t,TX[i]]});
  function C(x,y,r,f,s,w){return S('circle',{cx:x,cy:y,r:r,fill:f,stroke:s,'stroke-width':w})}
  function R(x,y,w,h,f,s){return S('rect',{x:x,y:y,width:w,height:h,rx:4,fill:f,stroke:s,'stroke-width':2})}
  function L(x1,y1,x2,y2){return S('line',{x1:x1,y1:y1,x2:x2,y2:y2,stroke:'var(--viz-ink)','stroke-width':4,'stroke-linecap':'round'})}
  function K(e,k){e.setAttribute('data-k',k);return e}
  var DNA_L=function(){return K(R(40,118,220,10,'var(--k1-bg)','var(--k1)'),'dna')},
      DNA_P=function(){return K(R(340,118,220,10,'var(--k1-bg)','var(--k1)'),'dna')},
      PX=540,PY=250,PL=function(){return K(C(PX,PY,60,'var(--k3-bg)','var(--k3)',4),'plazmid')};
  var sc=[[],[],[],[],[]];
  /* 0: wycinanie genu z DNA */
  sc[0].push(DNA_L(),DNA_P(),K(R(260,112,80,22,'var(--k2-bg)','var(--k2)'),'gen'));
  sc[0].push(K(L(258,100,258,144),'enzym'),K(L(342,100,342,144),'enzym'));
  sc[0].push(T(300,86,'gen insuliny',{s:13,w:700}),T(300,164,'enzym restrykcyjny tnie',{s:12,w:600}));
  sc[0].push(PL(),T(PX,PY,'plazmid',{s:12,w:700}));
  /* 1: gen wycięty, plazmid otwarty tym samym enzymem */
  sc[1].push(DNA_L(),DNA_P(),K(L(258,100,258,144),'enzym'),K(L(342,100,342,144),'enzym'));
  sc[1].push(K(R(160,205,160,22,'var(--k2-bg)','var(--k2)'),'gen'),T(240,246,'wycięty gen',{s:12,w:600}));
  sc[1].push(PL(),K(L(PX,PY-72,PX,PY-44),'enzym'),T(PX,PY,'plazmid',{s:12,w:700}),T(PX,PY-84,'ten sam enzym',{s:12,w:600}));
  /* 2: gen wklejony do plazmidu, ligaza skleja */
  sc[2].push(PL(),K(R(PX-40,PY-11,80,22,'var(--k2-bg)','var(--k2)'),'gen'));
  sc[2].push(K(C(PX,PY-100,10,'var(--k5-bg)','var(--k5)',2),'ligaza'),T(PX,PY-120,'ligaza skleja',{s:12,w:600}));
  sc[2].push(T(300,310,'DNA rekombinowane: gen + plazmid',{s:13,w:700}));
  /* 3: plazmid w bakterii */
  var BX=300,BY=180;
  sc[3].push(K(S('ellipse',{cx:BX,cy:BY,rx:230,ry:105,fill:'var(--viz-bg2)',stroke:'var(--viz-ink)','stroke-width':3}),'bakteria'));
  sc[3].push(K(C(BX,BY,55,'var(--k3-bg)','var(--k3)',3),'plazmid'),T(BX,BY,'plazmid',{s:11,w:700}));
  sc[3].push(T(BX,BY-128,'Escherichia coli (bakteria)',{s:13,w:700}),T(BX,BY+76,'plazmid z genem',{s:12,w:600}));
  /* 4: bakteria produkuje białko */
  sc[4].push(K(S('ellipse',{cx:250,cy:180,rx:190,ry:95,fill:'var(--viz-bg2)',stroke:'var(--viz-ink)','stroke-width':3}),'bakteria'));
  sc[4].push(K(C(250,180,40,'var(--k3-bg)','var(--k3)',3),'plazmid'),T(250,180,'gen',{s:11,w:700}));
  sc[4].push(L(445,180,528,180),S('polygon',{points:'540,180 524,172 524,188',fill:'var(--viz-ink)'}));
  sc[4].push(K(C(572,180,14,'var(--k5-bg)','var(--k5)',2),'bialko'),K(C(608,180,14,'var(--k5-bg)','var(--k5)',2),'bialko'),K(C(644,180,14,'var(--k5-bg)','var(--k5)',2),'bialko'));
  sc[4].push(T(608,128,'białko = ludzka insulina',{s:13,w:700}));
  var grp=sc.map(function(s){return S('g',{},s)});
  var sv=BIO.svg(700,340,'Klonowanie genu w pięciu krokach: wycięcie genu, otwarcie plazmidu, wklejenie genu, wprowadzenie do bakterii, produkcja białka',grp),box=BIO.fx.infoBox(TT[idx]?INFO['s'+idx][0]+'. '+INFO['s'+idx][1]:'');
  function go(i){idx=i;grp.forEach(function(g,j){g.setAttribute('display',j===i?'inline':'none')});box.textContent=INFO['s'+i][0]+'. '+INFO['s'+i][1]}
  var bP=BIO.btn('◀ krok',function(){go((idx+4)%5)}),bN=BIO.btn('krok ▶',function(){go((idx+1)%5)});
  el.appendChild(BIO.H('div','bv-tools',null,[bP,bN]));el.appendChild(sv);el.appendChild(box);
  go(idx);
  BIO.fx.info(el,box,INFO);
  BIO.fx.auto(el,function(){go((idx+1)%5)},2600);
}});
})();
