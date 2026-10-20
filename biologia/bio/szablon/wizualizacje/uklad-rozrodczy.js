/* viz: uklad-rozrodczy — poziom pliku · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
BIO.define('uklad-rozrodczy',{opis:'Schemat męskiego i żeńskiego układu rozrodczego z przełącznikiem; kliknięcie narządu pokazuje jego funkcję, zaznaczone jest miejsce zapłodnienia.',
mount:function(el,opt){
  var S=BIO.S,T=BIO.T,cur=(opt&&opt.start==='zenski')?1:0;
  var START='Kliknij narząd na schemacie (lub jego podpis), aby zobaczyć, co robi. Przyciskami przełączysz układ męski i żeński.';
  var box=BIO.fx.infoBox(START),g=S('g',{});
  var INFO={
    jadra:['Jądra','Wytwarzają plemniki (w kanalikach nasiennych) oraz hormon płciowy testosteron. Leżą w mosznie.'],
    moszna:['Moszna','Worek skórny z jądrami. Utrzymuje w nich temperaturę niższą niż w reszcie ciała (o kilka stopni, orientacyjnie), co sprzyja powstawaniu plemników.'],
    najadrze:['Najądrze','Przylega do jądra. Plemniki dojrzewają tu, zyskują zdolność ruchu i są magazynowane.'],
    nasieniowod:['Nasieniowód','Mięśniowy przewód, który podczas wytrysku przesuwa plemniki z najądrza w stronę cewki moczowej. Biegnie przez kanał pachwinowy do jamy brzusznej (na schemacie uproszczony).'],
    pecherzyki:['Pęcherzyki nasienne','Gruczoły, których wydzielina zawiera m.in. cukier fruktozę – źródło energii dla plemników. Wydzielina jest częścią nasienia.'],
    prostata:['Gruczoł krokowy (prostata)','Leży tuż pod pęcherzem moczowym i otacza początek cewki. Jego wydzielina jest częścią nasienia i wspomaga ruch plemników.'],
    cewka:['Cewka moczowa','U mężczyzny jest wspólną drogą moczu i nasienia (nigdy w tej samej chwili). Biegnie przez gruczoł krokowy i prącie.'],
    penis:['Prącie','Narząd kopulacyjny: wprowadza nasienie do dróg rodnych kobiety. Wypełnienie ciał jamistych krwią powoduje wzwód.'],
    pecherz:['Pęcherz moczowy (dla orientacji)','Magazynuje mocz i nie jest narządem rozrodczym, ale od niego zaczyna się cewka moczowa.'],
    jajnik:['Jajniki','Parzyste gruczoły. Dojrzewają w nich komórki jajowe, a także powstają hormony płciowe: estrogeny i progesteron.'],
    jajowod:['Jajowód','Kanał prowadzący od jajnika do macicy. Komórkę jajową przesuwają rzęski i skurcze ścian. Tu zwykle dochodzi do zapłodnienia.'],
    lejek:['Lejek jajowodu','Rozszerzony koniec jajowodu ze strzępkami. Po owulacji wychwytuje komórkę jajową uwolnioną z jajnika.'],
    macica:['Macica','Mięsień w kształcie odwróconej gruszki. W niej zagnieżdża się zarodek i rozwija płód; skurcze mięśni macicy pomagają w porodzie.'],
    blona:['Błona śluzowa macicy','Wewnętrzna warstwa macicy. W cyklu grubieje, przygotowując miejsce dla zarodka. Gdy nie ma ciąży, jest częściowo złuszczana – to miesiączka.'],
    szyjka:['Szyjka macicy','Dolna, zwężona część macicy, łącząca ją z pochwą. W ciąży wąski kanał szyjki jest zamknięty czopem śluzowym.'],
    pochwa:['Pochwa','Mięśniowo-błoniasty kanał. Trafia do niej nasienie, a podczas porodu stanowi część drogi rodnej.'],
    zaplodnienie:['Miejsce zapłodnienia','Plemnik łączy się z komórką jajową zwykle w jajowodzie. Powstaje zygota, która wędruje do macicy i tam się zagnieżdża.']
  };
  function A(o,k){if(k)o['data-k']=k;return o}
  function E(cx,cy,rx,ry,f,s,k){return S('ellipse',A({cx:cx,cy:cy,rx:rx,ry:ry,fill:f,stroke:s,'stroke-width':2.5},k))}
  function P(d,f,s,w,k,r){var o={d:d,fill:f,stroke:s,'stroke-width':w};if(r)o['stroke-linecap']='round';return S('path',A(o,k))}
  function mir(kids){return S('g',{transform:'translate(560,0) scale(-1,1)'},kids)}
  function lab(k,x,y,t,a){var ls=t.split('|');return ls.map(function(s,i){var e=T(x,y+(i-(ls.length-1)/2)*15,s,{a:a,s:13,w:700});e.setAttribute('data-k',k);e.setAttribute('data-lab','1');return e})}
  function ld(out,x1,y1,x2,y2){out.push(S('line',{x1:x1,y1:y1,x2:x2,y2:y2,stroke:'var(--viz-mut)','stroke-width':1.2,'pointer-events':'none'}),S('circle',{cx:x2,cy:y2,r:2.5,fill:'var(--viz-ink)','pointer-events':'none'}))}
  var cap=T(280,428,'Schemat uproszczony: kształty i proporcje orientacyjne',{s:12,w:500,f:'var(--viz-mut)'});

  function male(){
    var ls=[],lb=[];
    function half(){return[
      E(230,128,22,12,'var(--k5-bg)','var(--k5)','pecherzyki'),
      P('M250 311 C214 290 208 215 228 185 C238 168 246 158 254 150','none','var(--k6)',4,'nasieniowod',1),
      E(247,340,18,30,'var(--k1-bg)','var(--k1)','jadra'),
      P('M250 311 C232 318 228 350 238 368','none','var(--k2)',8,'najadrze',1)]}
    var n=[E(280,335,75,65,'var(--viz-bg2)','var(--viz-mut)','moszna'),S('g',{},half()),mir(half()),
      E(280,70,55,40,'var(--viz-bg2)','var(--viz-mut)','pecherz'),
      S('rect',{x:268,y:176,width:24,height:180,rx:12,fill:'var(--skin)',stroke:'var(--viz-mut)','stroke-width':2,'data-k':'penis'}),
      E(280,152,32,22,'var(--k3-bg)','var(--k3)','prostata'),
      P('M280 108 L280 350','none','var(--k4)',5,'cewka',1)];
    ld(ls,368,70,335,70);ld(ls,368,152,312,152);ld(ls,368,235,280,235);ld(ls,368,290,292,290);ld(ls,368,328,320,328);ld(ls,368,392,316,392);
    ld(ls,190,128,208,128);ld(ls,190,215,210,215);ld(ls,190,353,233,353);
    [['pecherz',70,'pęcherz moczowy'],['prostata',152,'gruczoł krokowy'],['cewka',235,'cewka moczowa'],['penis',290,'prącie'],['jadra',328,'jądro'],['moszna',392,'moszna']].forEach(function(r){lb=lb.concat(lab(r[0],372,r[1],r[2],'start'))});
    [['pecherzyki',128,'pęcherzyk nasienny'],['nasieniowod',215,'nasieniowód'],['najadrze',353,'najądrze']].forEach(function(r){lb=lb.concat(lab(r[0],186,r[1],r[2],'end'))});
    return n.concat(ls,lb,[cap])}

  function female(){
    var ls=[],lb=[];
    function half(){return[
      P('M232 126 C196 100 140 104 116 148 C108 166 114 180 128 186','none','var(--k5)',9,'jajowod',1),
      S('g',{'data-k':'lejek'},[P('M104 198 Q116 180 128 178 Q142 180 152 198 Z','var(--k5-bg)','var(--k5)',2)].concat([108,118,128,138,148].map(function(x){return S('line',{x1:x,y1:198,x2:x,y2:207,stroke:'var(--k5)','stroke-width':2.5,'stroke-linecap':'round'})}))),
      E(130,224,26,18,'var(--k1-bg)','var(--k1)','jajnik')]}
    var n=[S('g',{},half()),mir(half()),
      P('M262 236 Q256 320 248 400 L312 400 Q304 320 298 236 Z','var(--k2-bg)','var(--k2)',2.5,'pochwa'),
      P('M230 122 Q280 88 330 122 Q338 160 302 206 L258 206 Q222 160 230 122 Z','var(--k4-bg)','var(--k4)',2.5,'macica'),
      P('M250 132 Q280 114 310 132 Q314 160 294 192 L266 192 Q246 160 250 132 Z','var(--k3-bg)','var(--k3)',2,'blona'),
      S('rect',{x:260,y:206,width:40,height:30,rx:6,fill:'var(--k6-bg)',stroke:'var(--k6)','stroke-width':2.5,'data-k':'szyjka'}),
      S('line',{x1:280,y1:208,x2:280,y2:234,stroke:'var(--k6)','stroke-width':2,'stroke-dasharray':'3 3','pointer-events':'none'}),
      S('circle',{cx:447,cy:158,r:11,fill:'none',stroke:'var(--k4)','stroke-width':3,'pointer-events':'all','data-k':'zaplodnienie'})];
    ld(ls,98,142,116,148);ld(ls,98,191,107,196);ld(ls,98,232,105,226);
    ld(ls,368,268,331,146);ld(ls,368,308,308,161);ld(ls,368,348,300,221);ld(ls,368,388,304,319);
    [['jajowod',142,'jajowód'],['lejek',191,'lejek|jajowodu'],['jajnik',232,'jajnik']].forEach(function(r){lb=lb.concat(lab(r[0],94,r[1],r[2],'end'))});
    [['macica',268,'macica'],['blona',308,'błona śluzowa|macicy'],['szyjka',348,'szyjka macicy'],['pochwa',388,'pochwa']].forEach(function(r){lb=lb.concat(lab(r[0],372,r[1],r[2],'start'))});
    lb=lb.concat(lab('zaplodnienie',464,158,'zapłodnienie|zwykle tu','start'));
    return n.concat(ls,lb,[cap])}

  var bM=BIO.btn('♂ Układ męski',function(){go(0)}),bZ=BIO.btn('♀ Układ żeński',function(){go(1)});
  var tools=BIO.H('div','bv-tools',null,[bM,bZ]),sv=BIO.svg(560,440,'Schemat układu rozrodczego',[g]);
  el.appendChild(tools);el.appendChild(sv);el.appendChild(box);
  function go(i){
    cur=i;while(g.firstChild)g.removeChild(g.firstChild);
    (i?female():male()).forEach(function(x){g.appendChild(x)});
    sv.setAttribute('aria-label',i?'Schemat żeńskiego układu rozrodczego':'Schemat męskiego układu rozrodczego');
    BIO.fx.toggle([bM,bZ],i);box.className='bv-info';box.innerHTML=START;
    BIO.fx.info(el,box,INFO);
    el.querySelectorAll('[data-lab]').forEach(function(x){x.setAttribute('tabindex','-1')});
  }
  go(cur);
}});
})();
