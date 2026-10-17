/* viz: hardy-weinberg — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],btn=BIO.Lh["C.btn"],svg=BIO.Lh["C.svg"],T=BIO.Lh["C.T"],S=BIO.Lh["C.S"];
var fmt=function(n){return n.toLocaleString('pl-PL')};
BIO.define('hardy-weinberg',{opis:'Prawo Hardy’ego–Weinberga: suwak częstości allelu recesywnego q (albo częstości chorych q²), obliczenia p = 1 − q, p², 2pq, q² krok po kroku, słupki genotypów AA, Aa, aa w populacji 10 000 osób; przykład choroby recesywnej (np. 1 chory na 2500 → ok. 1 nosiciel na 25)',
mount:function(el,o){
  var tryb='q',tools=H('div','bv-tools'),t2=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');[tools,t2,pic,out].forEach(function(x){el.appendChild(x)});
  var bQ=btn('znam q (allel a)',function(){tryb='q';ust()}),bC=btn('znam częstość chorych (aa)',function(){tryb='c';ust()});tools.appendChild(bQ);tools.appendChild(bC);
  var rng=document.createElement('input');rng.type='range';rng.style.flex='1 1 180px';var lab=H('span','bv-score','');t2.appendChild(rng);t2.appendChild(lab);
  var CH=[[1,4],[9,100],[1,25],[1,100],[1,400],[1,2500],[1,10000]];
  function ust(){BIO.fx.toggle([bQ,bC],tryb==='q'?0:1);if(tryb==='q'){rng.min=0;rng.max=100;rng.value=30;rng.setAttribute('aria-label','Częstość allelu a (q)')}else{rng.min=0;rng.max=CH.length-1;rng.value=5;rng.setAttribute('aria-label','Częstość chorych aa')}rys()}
  function f(x,d){return x.toFixed(d).replace('.',',')}
  function rys(){var q,kroki;if(tryb==='q'){q=rng.value/100;lab.textContent='q = '+f(q,2);kroki='q = '+f(q,2)+' → p = 1 − q = '+f(1-q,2)}
    else{var c=CH[+rng.value],q2=c[0]/c[1];q=Math.sqrt(q2);lab.textContent='chorych (aa): '+c[0]+' na '+fmt(c[1]);kroki='q² = '+c[0]+'/'+fmt(c[1])+' = '+String(+q2.toFixed(4)).replace('.',',')+' → q = √q² = '+f(q,3)+' → p = 1 − q = '+f(1-q,3)}
    var p=1-q,G=[['AA (p²)',p*p,'#3f7a28'],['Aa (2pq) — nosiciele',2*p*q,'#e09b3d'],['aa (q²)',q*q,'#c0392b']];
    pic.innerHTML='';var s=svg(360,150,'Częstości genotypów w populacji');pic.appendChild(s);
    G.forEach(function(g,i){var y=14+i*44,w=Math.max(1,g[1]*190);s.appendChild(T(4,y+10,g[0],{s:12.5,a:'start',w:700}));s.appendChild(S('rect',{x:4,y:y+18,width:190,height:16,rx:4,fill:'#e3e7ec'}));s.appendChild(S('rect',{x:4,y:y+18,width:w,height:16,rx:4,fill:g[2]}));
      s.appendChild(T(202,y+26,f(g[1]*100,g[1]<.01?2:1)+'% · ok. '+fmt(Math.round(g[1]*10000))+' os.',{s:12,a:'start'}))});
    var nos=2*p*q;out.className='bv-info';out.innerHTML='<b>'+kroki+'</b>p² + 2pq + q² = '+f(p*p,3)+' + '+f(nos,3)+' + '+f(q*q,q*q<.001?4:3)+' = 1. W populacji 10 000 osób: nosicieli (Aa) ok. '+fmt(Math.round(nos*10000))+(nos>0&&q*q>0?' — to <strong>'+(nos/(q*q)>=1.5?'ok. '+fmt(Math.round(nos/(q*q)))+' razy więcej':'mniej więcej tyle samo')+'</strong> niż chorych; '+(nos>0?'nosicielem jest średnio 1 osoba na '+fmt(Math.round(1/nos)):'')+'.':'.')+
      ' <em>Model działa przy dużej populacji, bez doboru, mutacji i migracji oraz przy losowym kojarzeniu.</em>'}
  rng.addEventListener('input',rys);ust()}});
})();
