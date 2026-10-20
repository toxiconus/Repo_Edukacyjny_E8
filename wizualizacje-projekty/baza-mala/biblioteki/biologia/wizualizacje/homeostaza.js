/* viz: homeostaza — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],btn=BIO.Lh["C.btn"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('homeostaza',{opis:'Homeostaza i ujemne sprzężenie zwrotne: poziom glukozy we krwi (posiłek → insulina, głód/wysiłek → glukagon, tryb cukrzycy typu 1) albo temperatura ciała (upał → pocenie i rozszerzenie naczyń, zimno → dreszcze i zwężenie naczyń); wykres w czasie z pasem normy i schemat pętli regulacji',
mount:function(el,o){
  var M={glu:{n:'glukoza we krwi',j:'mg/dl',b:90,lo:60,hi:200,pas:[70,140],
      z:[['🍞 posiłek',60,'Po posiłku glukoza z jelita trafia do krwi. <strong>Trzustka</strong> wykrywa wzrost i wydziela <strong>insulinę</strong> → komórki (mięśnie, wątroba) pobierają glukozę, wątroba magazynuje ją jako glikogen → poziom wraca do normy.'],
         ['🏃 głód / wysiłek',-28,'Glukoza jest zużywana, poziom spada. <strong>Trzustka</strong> wydziela <strong>glukagon</strong> → wątroba rozkłada glikogen do glukozy i oddaje ją do krwi → poziom wraca do normy.']]},
    tem:{n:'temperatura ciała',j:'°C',b:36.6,lo:35.4,hi:38.2,pas:[36,37],
      z:[['☀ upał / wysiłek',.9,'Ciało się nagrzewa. Czujniki w skórze i krwi → <strong>podwzgórze</strong> (ośrodek termoregulacji) → <strong>pocenie</strong> (parowanie potu chłodzi) i <strong>rozszerzenie naczyń skóry</strong> (skóra czerwienieje, oddaje ciepło) → temperatura spada do normy.'],
         ['❄ zimno',-.7,'Ciało traci ciepło. <strong>Podwzgórze</strong> uruchamia <strong>dreszcze</strong> (skurcze mięśni wytwarzają ciepło), <strong>zwężenie naczyń skóry</strong> (blada skóra, mniej ciepła ucieka) i „gęsią skórkę” → temperatura rośnie do normy.']]}};
  var tryb=o.start==='temperatura'?'tem':'glu',cuk=false,H1=[],tools=H('div','bv-tools'),t2=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');[tools,t2,pic,out].forEach(function(x){el.appendChild(x)});
  var bG=btn('glukoza',function(){ustaw('glu')}),bT=btn('temperatura',function(){ustaw('tem')}),bC=btn('cukrzyca typu 1: nie',function(){cuk=!cuk;bC.textContent='cukrzyca typu 1: '+(cuk?'tak':'nie');bC.classList.toggle('on',cuk);ustaw('glu')});
  tools.appendChild(bG);tools.appendChild(bT);tools.appendChild(bC);
  function ustaw(t){tryb=t;BIO.fx.toggle([bG,bT],t==='glu'?0:1);bC.style.display=t==='glu'?'':'none';var m=M[t];H1=[];for(var i=0;i<6;i++)H1.push(cuk&&t==='glu'?160:m.b);
    t2.innerHTML='';m.z.forEach(function(z){t2.appendChild(btn(z[0],function(){zdarz(z)}))});rys(null)}
  function zdarz(z){var m=M[tryb],v=H1[H1.length-1],cel=m.b;
    for(var i=1;i<=3;i++)H1.push(v+z[1]*i/3);v=H1[H1.length-1];
    var k=(tryb==='glu'&&cuk)?(z[1]>0?.97:.6):.62,dol=(tryb==='glu'&&cuk)?(z[1]>0?170:110):cel;
    for(var j=0;j<10;j++){v=dol+(v-dol)*k;H1.push(v)}while(H1.length>40)H1.shift();rys(z)}
  function rys(z){var m=M[tryb];pic.innerHTML='';var s=svg(440,190,'Wykres: '+m.n+' w czasie');pic.appendChild(s);
    var X0=46,X1=430,Y0=20,Y1=170,y=function(v){return Y1-(Math.max(m.lo,Math.min(m.hi,v))-m.lo)/(m.hi-m.lo)*(Y1-Y0)},x=function(i){return X0+i*(X1-X0)/39};
    s.appendChild(S('rect',{x:X0,y:y(m.pas[1]),width:X1-X0,height:y(m.pas[0])-y(m.pas[1]),fill:'#dff1e3'}));s.appendChild(T(X1-4,y(m.pas[1])+11,'norma (orientacyjnie)',{s:10,a:'end',f:'#2e7d4f'}));
    s.appendChild(S('line',{x1:X0,y1:Y1,x2:X1,y2:Y1,stroke:'#8c959f'}));s.appendChild(S('line',{x1:X0,y1:Y0,x2:X0,y2:Y1,stroke:'#8c959f'}));
    [m.lo,m.pas[0],m.pas[1],m.hi].forEach(function(v){s.appendChild(T(X0-5,y(v),tryb==='tem'?v.toFixed(1).replace('.',','):v,{s:10,a:'end',w:600}))});
    s.appendChild(T(X0,Y0-9,m.n+' ['+m.j+']',{s:11,a:'start'}));s.appendChild(T(X1,Y1+14,'czas →',{s:10,a:'end'}));
    var d=H1.map(function(v,i){return(i?'L':'M')+x(i).toFixed(1)+' '+y(v).toFixed(1)}).join(' ');s.appendChild(S('path',{d:d,fill:'none',stroke:'#c0392b','stroke-width':2.5}));
    var kroki=tryb==='glu'?['bodziec','trzustka (czujnik + ośrodek)',z&&z[1]<0?'glukagon → wątroba':'insulina → komórki, wątroba','poziom wraca']:['bodziec','czujniki → podwzgórze',z&&z[1]<0?'dreszcze, zwężenie naczyń':'pot, rozszerzenie naczyń','temperatura wraca'];
    var rz=H('div','',null);rz.style.cssText='display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin-top:6px;font:700 12px/1.35 Inter,system-ui,sans-serif';
    kroki.forEach(function(t,i){var k=H('span','',t);k.style.cssText='flex:1 1 90px;padding:6px 8px;border:1px solid #8c959f;border-radius:8px;text-align:center;background:'+(z?'#eef3fb':'#f3f4f6')+';color:#1a2332';rz.appendChild(k);
      if(i<3){var st=H('span','','→');st.style.cssText='color:#8c959f';rz.appendChild(st)}});
    var pw=H('span','','↺ ujemne sprzężenie zwrotne: skutek wyłącza bodziec');pw.style.cssText='flex:1 1 100%;color:#2e7d4f;font-weight:600;text-align:center';rz.appendChild(pw);pic.appendChild(rz);
    out.className='bv-info'+(cuk&&tryb==='glu'&&H1[H1.length-1]>140?' bad':'');
    out.innerHTML=z?'<b>'+z[0].replace(/^\S+ /,'')+'</b>'+(cuk&&tryb==='glu'?(z[1]>0?'Przy cukrzycy typu 1 trzustka nie wytwarza insuliny — glukoza po posiłku zostaje we krwi (hiperglikemia). Dlatego chorzy podają sobie insulinę.':'Glukagon nadal działa, ale bez insuliny poziom i tak zostaje wysoki.'):z[2])+' <em>To ujemne sprzężenie zwrotne: skutek działania hamuje jego przyczynę.</em>'
      :'<b>Homeostaza = utrzymywanie stałych warunków</b>Wybierz zdarzenie i obserwuj wykres: odchylenie od normy uruchamia pętlę regulacji (schemat pod wykresem), która przywraca wartość do pasa normy. Kliknięcie kolejnego zdarzenia dopisuje dalszy ciąg wykresu.'}
  ustaw(tryb)}});
})();
