V.define('fiz-elektroskop-v01',{title:'Elektroskop — dotyk, indukcja i uziemienie',tag:'FIZ',
 hint:'Zbliżaj naładowany pręt (suwak), dotykaj nim kulki, uziemiaj palcem. Obserwuj, gdzie przesuwają się elektrony i jak rozchylają się listki. Przycisk „scenariusz” pokazuje elektryzowanie przez indukcję krok po kroku.',
 foot:'Model: CHE.FIZ.ELEKTRO.electroscope (ładunek całkowity, rozkład kulka/listki, kąt listków) · ładunki w jednostkach umownych.',
 build:function(host){host.innerHTML='';var E=EL(),bar=el('div','r');host.appendChild(bar);
  var sS=sel(bar,'Pręt',[['-1','ebonit potarty suknem (−)'],['1','szkło potarte jedwabiem (+)']],'-1');
  var D=rng(bar,'odległość',0,1,.01,1);
  var bar2=el('div','r');host.appendChild(bar2);var bT=btn(bar2,'● dotknij kulki',function(){touch()}),bG=btn(bar2,'uziemienie: wył.',function(){st.ground=!st.ground;bG.textContent='uziemienie: '+(st.ground?'WŁ.':'wył.')}),bP=btn(bar2,'▶ scenariusz: elektryzowanie przez indukcję',function(){scen()}),bZ=btn(bar2,'↺ od nowa',function(){reset()});
  var cv=cnv(host,360),note=el('div','note');host.appendChild(note);
  var st;function reset(){st={Q:0,qr:8*+sS.value,d:1,ground:false,th:0,cap:'',sc:null};D.r.value=1;bG.textContent='uziemienie: wył.'}reset();sS.onchange=reset;
  D.r.oninput=function(){st.d=+D.r.value};
  function touch(){st.anim={from:st.d,t:0}}
  function scen(){reset();var S=[[0,function(){st.cap='1. Elektroskop obojętny, listki opadnięte.'}],[1500,function(){st.anim2=.25;st.cap='2. Zbliżamy pręt (bez dotykania): indukcja — elektrony przesuwają się, listki się rozchylają. Ładunek całkowity = 0.'}],[4200,function(){st.ground=true;bG.textContent='uziemienie: WŁ.';st.cap='3. Dotykamy kulki palcem (uziemienie): ładunek jednoimienny z prętem „ucieka” do ziemi (lub z ziemi napływają elektrony). Listki opadają.'}],[7200,function(){st.ground=false;bG.textContent='uziemienie: wył.';st.cap='4. Zabieramy palec, pręt nadal blisko — ładunek przewodnika jest już różny od zera.'}],[9700,function(){st.anim2=1;st.cap='5. Oddalamy pręt: elektroskop zostaje naładowany ładunkiem PRZECIWNYM do ładunku pręta — listki rozchylone na stałe.'}]];
   S.forEach(function(s){setTimeout(s[1],s[0])})}
  var last=0;function frame(t){if(!cv.isConnected)return;var dt=Math.min(.05,(t-last)/1000||0);last=t;
   if(st.anim){st.anim.t+=dt;var a=st.anim,u=a.t/0.6;if(u<1)st.d=a.from*(1-u);else if(!a.done){a.done=1;st.d=0;var tr=st.qr*0.3;tr=Math.round(tr);st.Q+=tr;st.qr-=tr;st.cap='Dotyk: część ładunku pręta przeszła na elektroskop ('+(tr>0?'+':'')+tr+'). To elektryzowanie przez DOTYK — ładunek tego samego znaku co pręt.'}else if(u<2.2)st.d=Math.min(.6,(u-1.6)*1.0>0?(u-1.6):0);else{st.anim=null;st.d=.6}D.r.value=st.d}
   if(st.anim2!=null){st.d+=(st.anim2-st.d)*Math.min(1,dt*2);D.r.value=st.d;if(Math.abs(st.anim2-st.d)<.005)st.anim2=null}
   var R=E.electroscope(st.Q,st.qr,st.d,st.ground);if(st.ground)st.Q=R.Q;st.th+=(R.theta-st.th)*Math.min(1,dt*4);D.o.textContent=st.d<.01?'dotyk':fmt(st.d*30,0)+' cm';
   var g=ctx(cv),x=g.x,w=g.w,h=g.h,th=TH();GE().electroscope(x,{x:0,y:0,w:w,h:h},{ball:R.ball,leaves:R.leaves,theta:st.th,ground:st.ground,rod:{q:st.qr,d:st.d,col:+sS.value<0?'#1f2937':'#bae6fd'}},{th:th});
    x.fillStyle=th.text;x.font='700 12px system-ui';x.textAlign='left';x.fillText('ładunek elektroskopu: '+(R.Q>0?'+':'')+fmt(R.Q,0)+'   (kulka '+(R.ball>0?'+':'')+fmt(R.ball,0)+', listki '+(R.leaves>0?'+':'')+fmt(R.leaves,0)+')',12,20);x.fillText('kąt listków ≈ '+fmt(st.th,0)+'°',12,38);
   note.innerHTML=(st.cap?'<b>'+st.cap+'</b><br>':'')+(Math.abs(R.induced)>.3&&st.d>0?'Indukcja: pręt '+(st.qr<0?'ujemny odpycha':'dodatni przyciąga')+' elektrony swobodne metalu — '+(st.qr<0?'uciekają do listków':'gromadzą się w kulce')+'. ':'')+
    'Listki rozchylają się, bo mają ładunek <b>tego samego znaku</b> i się odpychają. Kąt mówi, ile ładunku jest w listkach — nie jaki to znak (znak sprawdzasz prętem o znanym ładunku).';
   requestAnimationFrame(frame)}
  requestAnimationFrame(frame)}});