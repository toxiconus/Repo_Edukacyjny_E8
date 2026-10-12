/* viz: zrodla-zmiennosci — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],btn=BIO.Lh["C.btn"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"],svg=BIO.Lh["C.svg"];
BIO.define('zrodla-zmiennosci',{opis:'Źródła zmienności rekombinacyjnej na modelu 3 par chromosomów: losowanie gamet matki i ojca (niezależna segregacja, 2³ = 8 rodzajów gamet), losowe zapłodnienie (64 kombinacje), opcjonalny crossing-over (mieszane odcinki); licznik różnych dzieci; dla człowieka 2²³ ≈ 8,4 mln gamet i ok. 70 bln kombinacji',
mount:function(el,o){
  var tools=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  var co=false,widz={},ile=0,dz=null;
  var bL=btn('losuj dziecko',function(){losuj(1)}),b10=btn('+10 dzieci',function(){losuj(10)}),bC=btn('crossing-over: wył.',function(){co=!co;bC.textContent='crossing-over: '+(co?'wł.':'wył.');bC.classList.toggle('on',co);widz={};ile=0;losuj(1)}),bR=btn('od nowa',function(){widz={};ile=0;dz=null;rys()});
  [bL,b10,bC,bR].forEach(function(x){tools.appendChild(x)});
  var LEN=[40,30,20],KM=['#9e1f1f','#f08a8a'],KO=['#1f4f9e','#8ab0f0'];
  function chrom(s,x,y,c,L){var kol=c.kol,gg=S('g',{});gg.appendChild(S('rect',{x:x-4,y:y,width:8,height:L,rx:4,fill:kol[c.b]}));if(c.f)gg.appendChild(S('rect',{x:x-4,y:y+L*(1-c.f),width:8,height:L*c.f,rx:4,fill:kol[1-c.b]}));s.appendChild(gg)}
  function gameta(kol){return LEN.map(function(L,i){var b=Math.random()<.5?0:1,f=co&&Math.random()<.7?+(0.25+Math.random()*.45).toFixed(2):0;return{b:b,f:f,kol:kol}})}
  function komorka(s,x,y,w,h,t,par){s.appendChild(S('rect',{x:x,y:y,width:w,height:h,rx:16,fill:'#f4f8f1',stroke:'#7aa66a','stroke-width':2}));s.appendChild(T(x+w/2,y-9,t,{s:12,w:800}));
    par.forEach(function(p,i){var cx=x+w*(i+1)/4;p.forEach(function(c,j){chrom(s,cx+(j?7:-7),y+12,c,LEN[i])})})}
  function rys(){pic.innerHTML='';var s=svg(440,320,'Losowanie gamet z trzema parami chromosomów i dziecko');pic.appendChild(s);
    var mama=LEN.map(function(){return[{b:0,f:0,kol:KM},{b:1,f:0,kol:KM}]}),tata=LEN.map(function(){return[{b:0,f:0,kol:KO},{b:1,f:0,kol:KO}]});
    komorka(s,12,26,130,62,'matka (2n = 6)',mama);komorka(s,298,26,130,62,'ojciec (2n = 6)',tata);
    if(dz){var gm=S('g',{'data-k':'gm'}),go=S('g',{'data-k':'go'});s.appendChild(gm);s.appendChild(go);
      gm.appendChild(S('circle',{cx:110,cy:150,r:34,fill:'#fdf0f0',stroke:'#c06a6a'}));dz.m.forEach(function(c,i){chrom(gm,92+i*18,132,c,LEN[i])});s.appendChild(T(110,196,'jajo (n = 3)',{s:11}));
      go.appendChild(S('circle',{cx:330,cy:150,r:34,fill:'#eef3fd',stroke:'#6a86c0'}));dz.o.forEach(function(c,i){chrom(go,312+i*18,132,c,LEN[i])});s.appendChild(T(330,196,'plemnik (n = 3)',{s:11}));
      s.appendChild(T(220,150,'+',{s:26,w:800,f:'#6b7480'}));s.appendChild(T(220,214,'↓ zapłodnienie',{s:11,f:'#6b7480'}));
      var gd=S('g',{'data-k':'dz'});s.appendChild(gd);komorka(gd,145,250,150,60,'',dz.m.map(function(c,i){return[c,dz.o[i]]}));s.appendChild(T(220,238,'zygota → dziecko (2n = 6)',{s:12,w:800}))}
    else s.appendChild(T(220,170,'Kliknij „losuj dziecko”',{s:14,f:'var(--text-soft)'}));
    [[150,'start'],[290,'end']].forEach(function(z){s.appendChild(T(z[0],106,'↓ mejoza',{s:11,f:'#6b7480',a:z[1]}))});
    BIO.fx.info(pic,out,{gm:['Gameta matki',' Z każdej pary trafia do niej <strong>jeden</strong> chromosom — który, decyduje przypadek w mejozie (niezależna segregacja). Przy 3 parach: 2³ = 8 rodzajów gamet.'],
      go:['Gameta ojca',' To samo losowanie u ojca: znów 8 możliwości (bez crossing-over).'],
      dz:['Zygota',' Połączenie dwóch losowych gamet: 8 × 8 = 64 różne zestawy chromosomów. U człowieka (23 pary) każdy rodzic ma 2²³ ≈ 8,4 mln rodzajów gamet, a para — ok. 70 bilionów (2⁴⁶) kombinacji, zanim policzymy crossing-over.']});
    var r=Object.keys(widz).length;out.className='bv-info';
    out.innerHTML='<b>Różnych dzieci: '+r+(co?'':' z 64 możliwych')+' (wylosowano '+ile+')</b>'+(co?'Crossing-over wymienia odcinki między chromosomami jednej pary (mieszane kolory), więc liczba możliwych gamet rośnie praktycznie bez końca — prawie każde dziecko jest inne.':'Bez crossing-over chromosomy przechodzą w całości. Losuj dalej: ile prób trzeba, by zobaczyć wszystkie 64 zestawy? Potem włącz crossing-over.')+' <em>Mutacje dokładają nowe allele, a środowisko — zmienność niedziedziczną.</em>'}
  function losuj(n){for(var i=0;i<n;i++){dz={m:gameta(KM),o:gameta(KO)};ile++;widz[JSON.stringify([dz.m,dz.o].map(function(g){return g.map(function(c){return c.b+'/'+c.f})}))]=1}rys()}
  rys()}});
})();
