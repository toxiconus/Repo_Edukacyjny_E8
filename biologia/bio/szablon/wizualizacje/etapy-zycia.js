/* viz: etapy-zycia — poziom pliku · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
BIO.define('etapy-zycia',{opis:'Pionowa oś czasu z dziesięcioma etapami życia człowieka, od okresu zarodkowego do starości; kliknięcie etapu pokazuje orientacyjny wiek i cechy.',
mount:function(el,opt){
  var S=BIO.S,T=BIO.T,box=BIO.fx.infoBox('Kliknij etap życia na osi czasu, aby zobaczyć jego wiek i najważniejsze cechy.');
  /* klucz, nazwa, wiek, kolor, grupa, wysokość ikony, opis */
  var ST=[
    ['zarodkowy','Okres zarodkowy','od zapłodnienia do ok. 8. tygodnia ciąży','k5','prenatalny',8,'Od zapłodnienia do ok. 8. tygodnia ciąży (orientacyjnie). Zarodek zagnieżdża się w macicy i powstają zawiązki wszystkich narządów. To czas największej wrażliwości na szkodliwe czynniki.'],
    ['plodowy','Okres płodowy','od ok. 9. tygodnia ciąży do porodu','k5','prenatalny',18,'Od ok. 9. tygodnia ciąży do porodu (orientacyjnie). Płód rośnie, a narządy dojrzewają i zaczynają działać. Tlen i pokarm dostaje przez łożysko.'],
    ['noworodkowy','Okres noworodkowy','do ok. 4 tygodni po urodzeniu','k1','dzieciństwo',22,'Pierwsze ok. 4 tygodnie po urodzeniu (orientacyjnie). Dziecko przystosowuje się do życia poza macicą: zaczyna oddychać płucami i ssie pokarm (odruch ssania).'],
    ['niemowlecy','Okres niemowlęcy','do ok. 1 roku życia','k1','dzieciństwo',26,'Do ok. 1. roku życia. Bardzo szybki wzrost i przyrost masy ciała. Pojawiają się pierwsze ząbki, dziecko uczy się siadać i raczkować.'],
    ['poniemowlecy','Okres poniemowlęcy','ok. 1–3 lata','k1','dzieciństwo',30,'Ok. 1–3 lata. Dziecko zaczyna samodzielnie chodzić i szybko uczy się mówić: od pojedynczych słów do prostych zdań.'],
    ['przedszkolny','Okres przedszkolny','ok. 3–6 lat','k1','dzieciństwo',34,'Ok. 3–6 lat. Dziecko dużo się bawi, rozwija mowę i uczy się samodzielności (ubieranie się, jedzenie). Rośnie wolniej niż niemowlę.'],
    ['szkolny','Okres szkolny','ok. 7–12 lat','k1','dzieciństwo',40,'Ok. 7–12 lat (orientacyjnie). Dziecko uczy się czytać, pisać i liczyć, a wzrost jest dość równomierny. Zęby mleczne wymieniają się na stałe.'],
    ['dojrzewanie','Okres dojrzewania','ok. 12–18 lat','k3','dorastanie',46,'Ok. 12–18 lat (orientacyjnie); u dziewcząt zwykle zaczyna się wcześniej niż u chłopców. Pod wpływem hormonów następuje skok wzrostu, rozwijają się drugorzędowe cechy płciowe i organizm osiąga zdolność do rozrodu.'],
    ['dojrzalosc','Okres dojrzałości','ok. 18–60 lat','k2','dorosłość',50,'Od ok. 18 do ok. 60 lat (orientacyjnie). Organizm ma pełną sprawność. Człowiek zwykle pracuje i zakłada rodzinę, a z czasem procesy życiowe zaczynają się powoli spowalniać.'],
    ['starosc','Starość','po ok. 60–65 latach','k6','starość',46,'Po ok. 60–65 latach (orientacyjnie). Maleje masa mięśniowa i gęstość kości, pogarszają się wzrok i słuch, a regeneracja organizmu trwa dłużej.']];
  var INFO={};ST.forEach(function(s){INFO[s[0]]=[s[1]+' ('+s[2]+')',s[6]]});
  function C(x,y,r,f,s,w){return S('circle',{cx:x,cy:y,r:r,fill:f,stroke:s,'stroke-width':w})}
  function man(x,y,H,i){
    if(i===0)return[C(x,y,4,'var(--skin)','var(--viz-mut)',1.2)];
    var r=H*.17,top=y-H/2;
    return[C(x,top+r,r,'var(--skin)','var(--viz-mut)',1.2),S('rect',{x:x-H*.15,y:top+2*r+1,width:H*.3,height:H*.55,rx:3,fill:'var(--skin)',stroke:'var(--viz-mut)','stroke-width':1.2})]}
  var kids=[S('line',{x1:90,y1:36,x2:90,y2:36+9*52,stroke:'var(--viz-line)','stroke-width':4})];
  ST.forEach(function(s,i){
    var y=36+i*52,c='var(--'+s[3]+')',cb='var(--'+s[3]+'-bg)';
    kids.push(S('g',{'data-k':s[0],'aria-label':s[1]+', '+s[2]},[
      S('rect',{x:110,y:y-21,width:360,height:42,rx:8,fill:cb,stroke:c,'stroke-width':2}),
      C(90,y,8,c,'var(--viz-bg)',2)].concat(man(40,y,s[5],i),[
      T(126,y-8,s[1],{a:'start',s:14,w:700}),
      T(126,y+10,s[2],{a:'start',s:12,w:500,f:'var(--viz-mut)'}),
      T(462,y-8,s[4],{a:'end',s:11,w:600,f:'var(--viz-mut)'})])))});
  kids.push(T(240,528,'Wiek jest orientacyjny; granice okresów bywają podawane nieco inaczej.',{s:11,w:500,f:'var(--viz-mut)'}));
  var sv=BIO.svg(480,540,'Oś czasu: etapy życia człowieka od okresu zarodkowego do starości',kids);
  el.appendChild(sv);el.appendChild(box);
  BIO.fx.info(el,box,INFO,opt&&INFO[opt.start]?opt.start:null);
}});
})();
