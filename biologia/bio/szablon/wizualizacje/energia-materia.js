/* viz: energia-materia — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],btn=BIO.Lh["C.btn"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('energia-materia',{opis:'Ekosystem: przepływ energii (jednokierunkowy, od Słońca przez producentów i konsumentów, z ciepłem traconym na każdym poziomie, ok. 10% przechodzi dalej) i obieg materii (zamknięty: producenci → konsumenci → destruenci → związki mineralne → producenci); przełącznik energia / materia',
mount:function(el,o){
  var tools=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  var b=[btn('przepływ energii',function(){tryb(0)}),btn('obieg materii',function(){tryb(1)}),btn('oba naraz',function(){tryb(2)})];b.forEach(function(x){tools.appendChild(x)});
  var s=svg(440,300,'Przepływ energii i obieg materii w ekosystemie');pic.appendChild(s);
  var E='#e08a1e',M='#2e8b57',warstwy={e:[],m:[]};
  function strz(x1,y1,x2,y2,c,k,przes){var dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,nx=-uy*(przes||0),ny=ux*(przes||0);x1+=nx;x2+=nx;y1+=ny;y2+=ny;
    var gg=S('g',{});gg.appendChild(S('line',{x1:x1,y1:y1,x2:x2-ux*7,y2:y2-uy*7,stroke:c,'stroke-width':3}));
    gg.appendChild(S('path',{d:'M'+x2+' '+y2+' L'+(x2-ux*10-uy*5)+' '+(y2-uy*10+ux*5)+' L'+(x2-ux*10+uy*5)+' '+(y2-uy*10-ux*5)+'z',fill:c}));s.appendChild(gg);warstwy[k].push(gg);return gg}
  function wezel(x,y,w,t1,t2,k,kol){var gg=S('g',{'data-k':k});gg.appendChild(S('rect',{x:x-w/2,y:y-22,width:w,height:44,rx:9,fill:kol,stroke:'#5b6672'}));gg.appendChild(T(x,y-8,t1,{s:11.5,w:800}));gg.appendChild(T(x,y+9,t2,{s:10.5,w:600}));return gg}
  var N={slonce:[40,40],P:[70,134],K1:[220,134],K2:[370,134],D:[300,250],Mn:[96,250]};
  // strzałki (pod węzłami)
  strz(58,60,70,110,E,'e');
  strz(127,134,159,134,E,'e',-5);strz(281,134,309,134,E,'e',-5);
  strz(127,134,159,134,M,'m',5);strz(281,134,309,134,M,'m',5);
  [[N.P,-5],[N.K1,0],[N.K2,5]].forEach(function(q){strz(q[0][0],156,N.D[0]+q[1]*6-4,228,E,'e',-4);strz(q[0][0],156,N.D[0]+q[1]*6+4,228,M,'m',4)});
  strz(248,250,153,250,M,'m');strz(84,228,72,157,M,'m');
  var cieplo=[];[N.P,N.K1,N.K2,[N.D[0]+40,N.D[1]]].forEach(function(q){var gg=S('g',{});gg.appendChild(S('path',{d:'M'+(q[0]+40)+' '+(q[1]-22)+' q6 -8 0 -16 q-6 -8 0 -16',fill:'none',stroke:'#c0392b','stroke-width':2}));gg.appendChild(T(q[0]+40,q[1]-62,'ciepło',{s:10.5,f:'#c0392b'}));s.appendChild(gg);warstwy.e.push(gg)});
  var sl=S('g',{'data-k':'slonce'});sl.appendChild(S('circle',{cx:40,cy:40,r:18,fill:'#ffd34d',stroke:'#e0a400'}));for(var i=0;i<8;i++){var a=i*Math.PI/4;sl.appendChild(S('line',{x1:40+Math.cos(a)*22,y1:40+Math.sin(a)*22,x2:40+Math.cos(a)*28,y2:40+Math.sin(a)*28,stroke:'#e0a400','stroke-width':2}))}s.appendChild(sl);
  [wezel(70,134,112,'producenci','rośliny, glony','P','#e3f1dc'),wezel(220,134,120,'konsumenci I rz.','roślinożercy','K1','#f3ead6'),wezel(370,134,120,'konsumenci II rz.','drapieżniki','K2','#f6dfd9'),
   wezel(300,250,104,'destruenci','bakterie, grzyby','D','#e9e3f2'),wezel(96,250,114,'związki mineralne','CO₂, woda, sole','Mn','#dfeef5')].forEach(function(x){s.appendChild(x)});
  var liczby=[];[['10 000 kJ',70],['ok. 1000 kJ',220],['ok. 100 kJ',370]].forEach(function(z){var t=T(z[1]-(z[1]===70?52:56),100,z[0],{s:11,w:800,f:E,a:'start'});s.appendChild(t);liczby.push(t);warstwy.e.push(t)});
  var leg=S('g',{});leg.appendChild(S('rect',{x:150,y:22,width:12,height:5,fill:E}));leg.appendChild(T(168,25,'energia',{s:11,a:'start'}));leg.appendChild(S('rect',{x:150,y:40,width:12,height:5,fill:M}));leg.appendChild(T(168,43,'materia (pierwiastki)',{s:11,a:'start'}));s.appendChild(leg);
  BIO.fx.info(pic,out,{slonce:['Słońce',' Jedyne źródło energii dla większości ekosystemów. Producenci zamieniają energię światła na energię chemiczną związków organicznych (fotosynteza).'],
    P:['Producenci',' Z CO₂, wody i soli mineralnych wytwarzają związki organiczne — „wpuszczają” energię i materię do łańcucha pokarmowego.'],
    K1:['Konsumenci I rzędu',' Zjadają producentów. Większość zjedzonej energii zużywają na oddychanie i ruch — ucieka jako ciepło; do ich ciała trafia tylko mała część (ok. 10%).'],
    K2:['Konsumenci II rzędu',' Zjadają roślinożerców. Dostaje się do nich znów tylko ok. 10% energii poprzedniego poziomu — dlatego drapieżników jest mało, a łańcuchy rzadko mają więcej niż 4–5 ogniw.'],
    D:['Destruenci',' Rozkładają martwe szczątki i odchody na związki mineralne (mineralizacja). Sami też oddychają i oddają ciepło. Bez nich materia nie wracałaby do obiegu.'],
    Mn:['Związki mineralne',' CO₂, woda, azotany, fosforany… Te same atomy węgla, azotu czy fosforu krążą w kółko: pobiera je producent, przechodzą przez konsumentów i destruentów i wracają do gleby, wody i powietrza.']});
  function tryb(k){BIO.fx.toggle(b,k);warstwy.e.forEach(function(x){x.style.opacity=k===1?.12:1});warstwy.m.forEach(function(x){x.style.opacity=k===0?.12:1});
    out.className='bv-info';out.innerHTML=[
     '<b>Energia płynie w jedną stronę</b>Słońce → producenci → konsumenci; na każdym poziomie większość energii ucieka jako <strong>ciepło</strong> (oddychanie, ruch), dalej przechodzi tylko ok. 10% (orientacyjnie; zwykle 5–20%). Energia <strong>nie wraca</strong> do producentów — ekosystem potrzebuje stałego dopływu światła.',
     '<b>Materia krąży</b>Producenci → konsumenci → destruenci → związki mineralne → znów producenci. Atomy węgla czy azotu są używane wielokrotnie — obieg jest <strong>zamknięty</strong>, a kluczowi są destruenci.',
     '<b>Porównaj</b>Pomarańczowe strzałki (energia) kończą się ciepłem — to <strong>przepływ</strong>. Zielone (materia) tworzą pętlę — to <strong>obieg</strong>. Zdanie „energia krąży w ekosystemie” jest błędne.'][k]}
  tryb(o.start==='materia'?1:o.start==='oba'?2:0)}});
})();
