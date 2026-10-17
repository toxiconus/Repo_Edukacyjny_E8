/* viz: glukoza-wykres — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],clr=BIO.Lh["C.clr"],btn=BIO.Lh["C.btn"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('glukoza-wykres',{opis:'Wykres stężenia glukozy we krwi po posiłku (dane przykładowe): osoba zdrowa vs osoba z cukrzycą; przełączniki serii, punkty z wartościami, zakres prawidłowy na czczo',
mount:function(el,o){
  var T0=[0,30,60,90,120,180],Z=[85,135,112,98,90,86],C=[130,215,240,225,200,165],pok={z:1,c:1};
  var tl=H('div','bv-tools'),box=H('div'),info=BIO.fx.infoBox('Odczytaj: kiedy glukoza jest najwyższa, jak szybko wraca do normy i czym różnią się krzywe.');el.appendChild(tl);el.appendChild(box);el.appendChild(info);
  function draw(){clr(tl);[['z','osoba zdrowa'],['c','osoba z cukrzycą']].forEach(function(x){var b=btn((pok[x[0]]?'✔ ':'')+x[1],function(){pok[x[0]]=1-pok[x[0]];draw()});if(pok[x[0]])b.classList.add('on');tl.appendChild(b)});
   var W=640,Hh=360,L=64,R=20,Tp=20,B=52,X=function(t){return L+t/180*(W-L-R)},Y=function(g){return Hh-B-(g-40)/(260-40)*(Hh-B-Tp)};
   var sv=svg(W,Hh,'Wykres glukozy we krwi po posiłku',[]);
   sv.appendChild(S('rect',{x:L,y:Y(99),width:W-L-R,height:Y(70)-Y(99),fill:'var(--c-basic-bg)'}));
   sv.appendChild(T(W-R-6,Y(99)-8,'zakres na czczo (orientacyjnie 70–99)',{s:12,w:700,a:'end',f:'var(--viz-mut)'}));
   [40,100,160,220].forEach(function(g){sv.appendChild(S('line',{x1:L,y1:Y(g),x2:W-R,y2:Y(g),stroke:'var(--viz-line)','stroke-opacity':.5}));sv.appendChild(T(L-8,Y(g),String(g),{s:13,a:'end'}))});
   T0.forEach(function(t){sv.appendChild(T(X(t),Hh-B+20,String(t),{s:13}))});
   sv.appendChild(T((L+W)/2,Hh-8,'czas po posiłku [min]',{s:14,w:700}));
   sv.appendChild(S('text',{x:16,y:(Tp+Hh-B)/2,transform:'rotate(-90 16 '+((Tp+Hh-B)/2)+')','text-anchor':'middle','font-size':14,'font-weight':700,fill:'var(--viz-ink)'},['glukoza [mg/dl]']));
   [['z',Z,'var(--c-basic)'],['c',C,'var(--c-error)']].forEach(function(sr){if(!pok[sr[0]])return;var d=sr[1].map(function(g,i){return (i?'L':'M')+X(T0[i])+' '+Y(g)}).join(' ');
    sv.appendChild(S('path',{d:d,fill:'none',stroke:sr[2],'stroke-width':4,'stroke-linejoin':'round'}));
    sr[1].forEach(function(g,i){var c=S('g',{'data-k':sr[0]+i},[S('circle',{cx:X(T0[i]),cy:Y(g),r:8,fill:sr[2],stroke:'#fff','stroke-width':2})]);sv.appendChild(c)})});
   clr(box);box.appendChild(sv);
   var M={};T0.forEach(function(t,i){M['z'+i]=['Osoba zdrowa, '+t+' min: '+Z[i]+' mg/dl',i===1?'Szczyt — glukoza wchłonięta z jelita; trzustka wydziela już insulinę.':i>1?'Insulina działa: komórki pobierają glukozę, wątroba magazynuje glikogen — stężenie spada.':'Na czczo — w zakresie prawidłowym.'];
    M['c'+i]=['Osoba z cukrzycą, '+t+' min: '+C[i]+' mg/dl',i===0?'Już na czczo powyżej zakresu prawidłowego.':i===2?'Szczyt później i wyżej — brak insuliny lub komórki słabo na nią reagują.':'Stężenie spada powoli i długo nie wraca do normy.']});
   BIO.fx.info(sv,info,M)}
  draw()}});
})();
