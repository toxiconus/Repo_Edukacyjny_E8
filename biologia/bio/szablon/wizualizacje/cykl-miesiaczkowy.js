/* viz: cykl-miesiaczkowy — poziom pliku · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
BIO.define('cykl-miesiaczkowy',{opis:'Model cyklu miesiączkowego z suwakiem dnia 1–28: zmiany w jajniku, błonie śluzowej macicy i poziomie hormonów (dane przykładowe).',
mount:function(el,opt){
  var S=BIO.S,T=BIO.T,W=590/28,day=Math.min(28,Math.max(1,parseInt(opt&&opt.dzien,10)||1));
  var START='Przesuń suwak dnia cyklu (1–28) i obserwuj jajnik, macicę i hormony. Możesz też kliknąć każdy pas, aby go opisać.';
  var box=BIO.fx.infoBox(START);
  var INFO={
    jajnik:['Zmiany w jajniku','Najpierw rośnie pęcherzyk z komórką jajową. Ok. 14. dnia następuje owulacja, a z pękniętego pęcherzyka powstaje ciałko żółte. Jeśli nie ma ciąży, po kilkunastu dniach ciałko żółte zanika.'],
    blona:['Błona śluzowa macicy','W dniach 1–5 jest złuszczana (miesiączka), potem odbudowuje się i grubieje pod wpływem estrogenów. Po owulacji progesteron przygotowuje ją na przyjęcie zarodka.'],
    hormony:['Hormony płciowe (dane przykładowe)','Estrogeny rosną w pierwszej połowie cyklu, a progesteron w drugiej, gdy działa ciałko żółte. Hormony sterują zmianami w jajniku i macicy. Wartości są umowne, pokazują tylko kształt przebiegu.'],
    owulacja:['Owulacja','Pęknięcie pęcherzyka i uwolnienie komórki jajowej do jajowodu, zwykle ok. 14. dnia cyklu 28-dniowego (orientacyjnie). Komórka jajowa jest zdolna do zapłodnienia tylko krótko, ok. doby.']
  };
  function X(d){return 90+(d-0.5)*W}
  function lin(p,x){for(var i=1;i<p.length;i++)if(x<=p[i][0]){var a=p[i-1],b=p[i];return a[1]+(b[1]-a[1])*(x-a[0])/(b[0]-a[0])}return p[p.length-1][1]}
  var EST=[[1,18],[5,20],[9,50],[12,90],[13,100],[14,85],[15,45],[17,35],[21,65],[24,45],[27,20],[28,18]];
  var PRO=[[1,5],[13,5],[14,8],[16,30],[18,60],[21,90],[24,60],[26,25],[28,8]];
  var TH=[4,3,2,1.5,1.5,2,2.5,3,3.5,4,4.5,5,5,5.5,6,6.5,7,7.5,7.5,8,8,8,8,8,7.5,7,6.5,6];
  function yv(p,d){return 398-lin(p,d)*1.2}
  function curve(p){var d='';for(var x=1;x<=28.001;x+=.25){d+=(d?'L':'M')+X(x).toFixed(1)+' '+yv(p,x).toFixed(1)}return d}
  function lab(k,x,y,t,a,s){var ls=t.split('|');return ls.map(function(q,i){var e=T(x,y+(i-(ls.length-1)/2)*15,q,{a:a||'end',s:s||12,w:700});if(k){e.setAttribute('data-k',k);e.setAttribute('data-lab','1')}return e})}
  function C(cx,cy,r,f,s,w){return S('circle',{cx:cx,cy:cy,r:r,fill:f,stroke:s,'stroke-width':w||2.5})}
  function bx(a,b){return 90+(a-1)*W+(b?W*b:0)}
  var kids=[];
  /* pas faz */
  [[1,5,'var(--k4-bg)','var(--k4)','miesiączka'],[6,13,'var(--k1-bg)','var(--k1)','rozwój pęcherzyka'],[15,28,'var(--k5-bg)','var(--k5)','faza ciałka żółtego']].forEach(function(b){
    var x=bx(b[0]),w=(b[1]-b[0]+1)*W;kids.push(S('rect',{x:x,y:22,width:w,height:22,fill:b[2],stroke:b[3],'stroke-width':1.5}),T(x+w/2,33,b[4],{s:12,w:700}))});
  kids.push(S('rect',{x:bx(14),y:22,width:W,height:22,fill:'var(--k3-bg)',stroke:'var(--k3)','stroke-width':2,'data-k':'owulacja'}));
  kids=kids.concat(lab('owulacja',X(14),12,'owulacja','middle'));
  /* jajnik */
  var jg=[S('rect',{x:90,y:52,width:590,height:96,rx:6,fill:'var(--viz-bg2)',stroke:'var(--viz-line)'})];
  [[2,4],[5,6],[8,9],[11,12]].forEach(function(f){jg.push(C(X(f[0]),98,f[1],'var(--k1-bg)','var(--k1)'),C(X(f[0]),98,2,'var(--viz-ink)','var(--viz-ink)',1))});
  jg.push(C(X(14),98,14,'var(--k1-bg)','var(--k1)'));
  [[17,10],[20,14],[23,14],[26,8]].forEach(function(f){jg.push(C(X(f[0]),98,f[1],'var(--k3-bg)','var(--k3)'))});
  jg.push(C(X(28),98,5,'var(--viz-bg2)','var(--viz-mut)',2));
  jg.push(T(X(8),134,'pęcherzyk',{s:12}),T(X(21.5),134,'ciałko żółte',{s:12}),T(680,134,'zanik ciałka',{s:12,a:'end'}));
  kids.push(S('g',{'data-k':'jajnik'},jg));
  kids.push(S('g',{'data-k':'owulacja'},[S('circle',{cx:X(14),cy:98,r:14,fill:'none',stroke:'var(--k3)','stroke-width':3,'stroke-dasharray':'4 3'}),C(X(14),66,4,'var(--k3)','var(--viz-ink)',1),S('path',{d:'M'+X(14)+' 83 L'+X(14)+' 73 M'+(X(14)-5)+' 78 L'+X(14)+' 72 L'+(X(14)+5)+' 78',fill:'none',stroke:'var(--k3)','stroke-width':2})]));
  /* błona śluzowa */
  var bg=[S('rect',{x:90,y:158,width:590,height:96,rx:6,fill:'var(--viz-bg2)',stroke:'var(--viz-line)'})];
  TH.forEach(function(t,i){var h=t*9;bg.push(S('rect',{x:X(i+1)-W/2+.75,y:250-h,width:W-1.5,height:h,fill:'var(--k4-bg)',stroke:'var(--k4)','stroke-width':1}))});
  kids.push(S('g',{'data-k':'blona'},bg));
  /* hormony */
  var hg=[S('rect',{x:90,y:262,width:590,height:140,rx:6,fill:'var(--viz-bg2)',stroke:'var(--viz-line)'}),
    S('path',{d:curve(EST),fill:'none',stroke:'var(--k1)','stroke-width':3.5}),
    S('path',{d:curve(PRO),fill:'none',stroke:'var(--k5)','stroke-width':3.5,'stroke-dasharray':'8 4'}),
    T(X(11),281,'estrogeny',{a:'end',s:13,w:700,f:'var(--k1)'}),T(X(22.5),274,'progesteron (przerywana)',{a:'start',s:12,w:700,f:'var(--k5)'})];
  kids.push(S('g',{'data-k':'hormony'},hg));
  /* etykiety lewe */
  kids=kids.concat(lab('jajnik',84,100,'jajnik'),lab('blona',84,206,'błona|śluzowa|macicy'),lab('hormony',84,332,'hormony|we krwi'));
  /* oś */
  [1,7,14,21,28].forEach(function(d){kids.push(S('line',{x1:X(d),y1:402,x2:X(d),y2:408,stroke:'var(--viz-mut)','stroke-width':1.5}),T(X(d),419,String(d),{s:12}))});
  kids.push(T(385,438,'dzień cyklu (dane przykładowe, cykl średnio ok. 28 dni)',{s:12,w:500,f:'var(--viz-mut)'}));
  /* wskaźnik dnia */
  var ln=S('line',{x1:0,y1:46,x2:0,y2:402,stroke:'var(--accent)','stroke-width':2.5,'pointer-events':'none'}),
      dE=S('circle',{r:5.5,fill:'var(--k1)',stroke:'var(--viz-bg)','stroke-width':2,'pointer-events':'none'}),
      dP=S('circle',{r:5.5,fill:'var(--k5)',stroke:'var(--viz-bg)','stroke-width':2,'pointer-events':'none'});
  kids.push(ln,dE,dP);
  var sv=BIO.svg(700,450,'Model cyklu miesiączkowego: jajnik, błona śluzowa macicy i hormony w dniach 1–28',kids);
  var lbl=BIO.H('div','','');lbl.style.cssText='font-weight:700;margin:0 0 4px';
  var rng=BIO.H('input');rng.type='range';rng.min=1;rng.max=28;rng.value=day;rng.setAttribute('aria-label','Dzień cyklu');
  function ph(d){
    if(d<=5)return['miesiączka','Złuszcza się wierzchnia warstwa błony śluzowej macicy i wypływa z krwią. Poziom hormonów jest niski. W jajniku zaczyna rosnąć kilka pęcherzyków.'];
    if(d<=13)return['rozwój pęcherzyka','W jajniku dojrzewa pęcherzyk (zwykle jeden) i wydziela coraz więcej estrogenów. Estrogeny odbudowują i pogrubiają błonę śluzową macicy.'];
    if(d===14)return['owulacja (orientacyjnie)','Pęcherzyk pęka i uwalnia komórkę jajową do lejka jajowodu. Estrogeny osiągają szczyt tuż przed owulacją, a komórka jajowa jest zdolna do zapłodnienia ok. doby.'];
    if(d<=26)return['ciałko żółte','Z resztek pęcherzyka powstaje ciałko żółte, które wydziela progesteron. Błona śluzowa grubieje i gromadzi substancje odżywcze – jest gotowa na zagnieżdżenie zarodka.'];
    return['zanik ciałka żółtego','Jeśli nie doszło do zapłodnienia, ciałko żółte zanika, hormony spadają i wkrótce zacznie się kolejna miesiączka. Przy ciąży ciałko żółte by się utrzymało.']}
  function upd(d,say){
    var x=X(d);ln.setAttribute('x1',x);ln.setAttribute('x2',x);
    dE.setAttribute('cx',x);dE.setAttribute('cy',yv(EST,d));dP.setAttribute('cx',x);dP.setAttribute('cy',yv(PRO,d));
    lbl.textContent='Dzień cyklu: '+d;
    if(say){var p=ph(d);box.className='bv-info';box.innerHTML='<b>Dzień '+d+' – '+p[0]+'</b>'+p[1]}}
  rng.oninput=function(){upd(parseInt(rng.value,10),true)};
  el.appendChild(lbl);el.appendChild(rng);el.appendChild(sv);el.appendChild(box);
  BIO.fx.info(el,box,INFO);
  el.querySelectorAll('[data-lab]').forEach(function(x){x.setAttribute('tabindex','-1')});
  upd(day,false);
}});
})();
