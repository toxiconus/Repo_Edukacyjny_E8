/* viz: dobor-naturalny — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],seg=BIO.Lh["C.seg"],clr=BIO.Lh["C.clr"],btn=BIO.Lh["C.btn"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('dobor-naturalny',{opis:'Symulacja doboru naturalnego: ćmy jasne i ciemne na jasnej lub ciemnej korze (drapieżnik zjada lepiej widoczne) albo bakterie wrażliwe i oporne + antybiotyk; pokolenia, wykres udziału cechy',
mount:function(el,o){var sc=o.start==='bakterie'?'bakterie':'cmy',tlo='ciemne',N=40,pop=[],hist=[],gen=0,seed=7;
  function R(){seed=(seed*16807)%2147483647;return(seed-1)/2147483646}
  var sg=H('div','bv-tools'),t2=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(t2);el.appendChild(pic);el.appendChild(out);
  function reset(){seed=7;gen=0;pop=[];for(var i=0;i<N;i++)pop.push(i<4?1:0);hist=[udz()];draw()}   // 1 = cecha „rzadka na starcie” (ciemna ćma / oporna bakteria): 10%
  function udz(){return pop.filter(function(x){return x}).length/pop.length}
  function pokolenie(){var korzystna=sc==='bakterie'?1:(tlo==='ciemne'?1:0),zyje=pop.filter(function(x){var p=x===korzystna?.85:(sc==='bakterie'?.12:.45);return R()<p});
   if(!zyje.length)zyje=[korzystna];var nowa=[];while(nowa.length<N){var r=zyje[Math.floor(R()*zyje.length)];if(R()<.02)r=1-r;nowa.push(r)}pop=nowa;gen++;hist.push(udz())}
  function draw(){seg(sg,[['cmy','ćmy na korze drzew'],['bakterie','bakterie i antybiotyk']],sc,function(m){sc=m;reset()});
   clr(t2);t2.appendChild(btn('następne pokolenie ▶',function(){pokolenie();draw()}));t2.appendChild(btn('+5 pokoleń',function(){for(var i=0;i<5;i++)pokolenie();draw()}));t2.appendChild(btn('od nowa',reset));
   if(sc==='cmy'){var bt=btn(tlo==='ciemne'?'kora: ciemna (zanieczyszczenia)':'kora: jasna (porosty)',function(){tlo=tlo==='ciemne'?'jasne':'ciemne';draw()});t2.appendChild(bt)}
   var s=svg(440,210,'Populacja i wykres udziału cechy w kolejnych pokoleniach'),bg=sc==='bakterie'?'#f3f6fb':(tlo==='ciemne'?'#4a4038':'#d9d4c4');
   s.appendChild(S('rect',{x:4,y:4,width:200,height:200,rx:10,fill:bg,stroke:'#c9d2cf'}));
   if(sc==='bakterie')s.appendChild(S('rect',{x:4,y:4,width:200,height:200,rx:10,fill:'#e6f0ff',opacity:.6}));
   var r2=(function(){var q=gen*31+3;return function(){q=(q*16807)%2147483647;return(q-1)/2147483646}})();
   pop.forEach(function(x,i){var cx=18+(i%8)*24+r2()*6,cy=22+Math.floor(i/8)*38+r2()*8;
    if(sc==='cmy'){var c=x?'#2b2622':'#efeadf';s.appendChild(S('path',{d:'M'+cx+' '+cy+' q-12 -8 -12 4 q0 8 12 2 q12 6 12 -2 q0 -12 -12 -4z',fill:c,stroke:x?'#000':'#b7ad97','stroke-width':.8}));s.appendChild(S('rect',{x:cx-1.2,y:cy-6,width:2.4,height:11,rx:1.2,fill:'#3a3028'}))}
    else s.appendChild(S('rect',{x:cx-9,y:cy-4,width:18,height:9,rx:4.5,fill:x?'#c0392b':'#7fb069',stroke:x?'#7b1f17':'#3d6b2c'}))});
   // wykres
   var gx=226,gy=16,gw=200,gh=160;s.appendChild(S('rect',{x:gx,y:gy,width:gw,height:gh,fill:'#fff',stroke:'#c9d2cf'}));
   [0,50,100].forEach(function(v){var y=gy+gh-v/100*gh;s.appendChild(S('line',{x1:gx,y1:y,x2:gx+gw,y2:y,stroke:'#eef1f0'}));s.appendChild(T(gx-4,y,v+'%',{s:10,a:'end',f:'var(--viz-mut)'}))});
   var maxg=Math.max(10,hist.length-1),pts=hist.map(function(v,i){return(gx+i/maxg*gw).toFixed(1)+','+(gy+gh-v*gh).toFixed(1)}).join(' ');
   s.appendChild(S('polyline',{points:pts,fill:'none',stroke:sc==='bakterie'?'#c0392b':'#2b2622','stroke-width':2.5}));var lp=pts.split(' ').pop().split(',');s.appendChild(S('circle',{cx:lp[0],cy:lp[1],r:4.5,fill:sc==='bakterie'?'#c0392b':'#2b2622',stroke:'#fff','stroke-width':1.5}));if(hist.length===1)s.appendChild(T(+lp[0]+8,+lp[1]-8,'start: '+Math.round(hist[0]*100)+'%',{s:10.5,a:'start',w:700,f:'var(--viz-mut)'}));
   s.appendChild(T(gx+gw/2,gy+gh+16,'pokolenie (0–'+maxg+')',{s:10.5,f:'var(--viz-mut)'}));s.appendChild(T(gx+gw/2,10,sc==='bakterie'?'udział bakterii opornych':'udział ciemnych ciem',{s:10.5,w:700}));
   clr(pic);pic.appendChild(s);var u=Math.round(udz()*100);
   out.innerHTML='<b>Pokolenie '+gen+': '+(sc==='bakterie'?'oporne':'ciemne')+' — '+u+'%</b><span>'+(sc==='bakterie'?
    'Antybiotyk zabija większość bakterii wrażliwych (zielone); przeżywają głównie <strong>oporne</strong> (czerwone), które miały tę cechę <strong>już wcześniej</strong>. Ich potomstwo dziedziczy oporność — z każdym pokoleniem jest ich więcej. Antybiotyk nie tworzy oporności, tylko ją <strong>wybiera</strong>.':
    (tlo==='ciemne'?'Na ciemnej korze jasne ćmy są dobrze widoczne i częściej zjadane przez ptaki; ciemne częściej przeżywają i mają potomstwo — ich udział rośnie.':'Na jasnej korze lepiej widoczne są ciemne ćmy — dobór działa w drugą stronę i ich udział maleje. Zmień korę, aby to zobaczyć.'))+
    '</span><span>Warunki doboru: <strong>zmienność</strong> w populacji (już na starcie) → <strong>różna przeżywalność</strong> w danym środowisku → <strong>dziedziczenie</strong> cechy → zmiana populacji po wielu pokoleniach. Wynik jest losowy — powtórz symulację.</span>'}
  reset()}});
})();
