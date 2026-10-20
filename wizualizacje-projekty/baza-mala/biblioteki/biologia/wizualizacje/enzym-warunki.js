/* viz: enzym-warunki — grupa C · z dawnego bio-viz.js (rozbij.js) */
(function(){
var BIO=window.BIO;
var H=BIO.Lh["C.H"],seg=BIO.Lh["C.seg"],clr=BIO.Lh["C.clr"],svg=BIO.Lh["C.svg"],S=BIO.Lh["C.S"],T=BIO.Lh["C.T"];
BIO.define('enzym-warunki',{opis:'Wykres aktywności enzymów (model szkolny, dane orientacyjne): tryb temperatury (amylaza ślinowa, 0–80 °C, optimum ok. 37 °C, denaturacja powyżej ok. 50 °C) i tryb pH (pepsyna ok. 2, amylaza ślinowa ok. 7, trypsyna ok. 8); suwak, odczyt aktywności i barwa próby z płynem Lugola po inkubacji skrobi z amylazą',
mount:function(el,o){
 var tryb=o.tryb||'T',v={T:37,pH:7},tl=H('div','bv-tools'),tl2=H('div','bv-tools'),box=H('div'),info=H('div','bv-info');el.appendChild(tl);el.appendChild(tl2);el.appendChild(box);el.appendChild(info);
 function aT(t){return t<=37?0.04+0.96*Math.pow(t/37,1.8):Math.max(0,1-Math.pow((t-37)/23,2))}
 function g(p,m,w){return Math.exp(-Math.pow((p-m)/w,2))}
 var EZ=[['pepsyna (żołądek)',function(p){return g(p,2,1.3)},'#c0392b'],['amylaza ślinowa',function(p){return g(p,6.8,1.6)},'#e08a1e'],['trypsyna (jelito)',function(p){return g(p,8,1.5)},'#2f7fa8']];
 function mix(a){var c0=[31,42,107],c1=[201,138,42];return 'rgb('+c0.map(function(x,i){return Math.round(x+(c1[i]-x)*a)}).join(',')+')'}
 var lab=H('label'),r=document.createElement('input');r.type='range';var ov=H('strong');
 function narz(){seg(tl,[['T','temperatura'],['pH','pH']],tryb,function(k){tryb=k;narz();draw()});clr(tl2);
  r.min=tryb==='T'?0:1;r.max=tryb==='T'?80:11;r.step=tryb==='T'?1:0.5;r.value=v[tryb];r.setAttribute('aria-label',tryb==='T'?'Temperatura':'pH');
  clr(lab);lab.appendChild(document.createTextNode(tryb==='T'?'temperatura: ':'pH: '));lab.appendChild(r);lab.appendChild(ov);tl2.appendChild(lab)}
 function draw(){var x0=tryb==='T'?0:1,x1=tryb==='T'?80:11,val=v[tryb];ov.textContent=' '+(tryb==='T'?val+' °C':String(val).replace('.',','));
  var W=640,Hh=360,L=58,Rr=170,Tp=20,B=50,X=function(x){return L+(x-x0)/(x1-x0)*(W-L-Rr)},Y=function(a){return Hh-B-a*(Hh-B-Tp)};
  var sv=svg(W,Hh,tryb==='T'?'Aktywność amylazy a temperatura':'Aktywność enzymów a pH',[]);
  [0,.25,.5,.75,1].forEach(function(a){sv.appendChild(S('line',{x1:L,y1:Y(a),x2:W-Rr,y2:Y(a),stroke:'var(--viz-line)','stroke-opacity':.45}));sv.appendChild(T(L-8,Y(a),Math.round(a*100)+'%',{s:16,a:'end'}))});
  (tryb==='T'?[0,10,20,30,40,50,60,70,80]:[1,2,3,4,5,6,7,8,9,10,11]).forEach(function(x){sv.appendChild(T(X(x),Hh-B+18,String(x),{s:16}))});
  sv.appendChild(T((L+W-Rr)/2,Hh-10,tryb==='T'?'temperatura [°C]':'pH',{s:18,w:700}));
  sv.appendChild(S('text',{x:16,y:(Tp+Hh-B)/2,transform:'rotate(-90 16 '+((Tp+Hh-B)/2)+')','text-anchor':'middle','font-size':16,'font-weight':700,fill:'var(--viz-ink)'},['aktywność enzymu']));
  var ser=tryb==='T'?[['amylaza ślinowa',aT,'#e08a1e']]:EZ,odczyt=[];
  ser.forEach(function(s){var d='';for(var x=x0;x<=x1+1e-9;x+=(x1-x0)/160)d+=(d?'L':'M')+X(x).toFixed(1)+' '+Y(s[1](x)).toFixed(1);
   sv.appendChild(S('path',{d:d,fill:'none',stroke:s[2],'stroke-width':4,'stroke-linejoin':'round'}));var a=s[1](val);odczyt.push([s[0],a,s[2]]);
   sv.appendChild(S('circle',{cx:X(val),cy:Y(a),r:7,fill:s[2],stroke:'#fff','stroke-width':2}))});
  sv.appendChild(S('line',{x1:X(val),y1:Tp,x2:X(val),y2:Hh-B,stroke:'var(--viz-ink)','stroke-width':1.5,'stroke-dasharray':'5 4'}));
  if(tryb==='pH')EZ.forEach(function(s,i){sv.appendChild(S('rect',{x:L+8,y:Tp+4+i*20,width:14,height:6,fill:s[2]}));sv.appendChild(T(L+28,Tp+8+i*20,s[0],{s:16,w:700,a:'start'}))});
  var am=tryb==='T'?aT(val):EZ[1][1](val),tx=W-Rr+60;
  sv.appendChild(T(tx+30,Tp+6,'próba z Lugolem',{s:16,w:800}));sv.appendChild(T(tx+30,Tp+22,'po 15 min',{s:15,f:'var(--viz-mut)'}));
  sv.appendChild(S('path',{d:'M'+tx+' '+(Tp+40)+' L'+tx+' '+(Tp+210)+' A30 30 0 0 0 '+(tx+60)+' '+(Tp+210)+' L'+(tx+60)+' '+(Tp+40),fill:'none',stroke:'var(--viz-ink)','stroke-width':2.5}));
  sv.appendChild(S('path',{d:'M'+(tx+3)+' '+(Tp+90)+' L'+(tx+3)+' '+(Tp+210)+' A27 27 0 0 0 '+(tx+57)+' '+(Tp+210)+' L'+(tx+57)+' '+(Tp+90)+' Z',fill:mix(am),opacity:.92}));
  var opis=am>0.65?['żółtobrązowa','skrobia strawiona']:am>0.3?['fioletowobrązowa','część skrobi została']:['granatowa','skrobia nie strawiona'];
  sv.appendChild(T(tx+30,Tp+262,opis[0],{s:16,w:800}));sv.appendChild(T(tx+30,Tp+278,opis[1],{s:15,f:'var(--viz-mut)'}));
  clr(box);box.appendChild(sv);
  var t='<b>'+odczyt.map(function(o){return o[0]+': '+Math.round(o[1]*100)+'%'}).join(' · ')+'</b>';
  if(tryb==='T')t+=val<15?'Zimno <strong>spowalnia</strong> enzym, ale go nie niszczy — po ogrzaniu do 37 °C amylaza znów działa.':val<=42?'Okolice <strong>temperatury ciała</strong> — optimum dla enzymów człowieka (model szkolny).':val<55?'Powyżej optimum enzym zaczyna się <strong>denaturować</strong> — białko traci kształt, aktywność gwałtownie spada.':'Enzym <strong>zdenaturowany</strong> (jak ugotowana ślina w doświadczeniu) — po ochłodzeniu <strong>nie wraca</strong> do działania. Skrobia zostaje → Lugol granatowy.';
  else t+=val<4?'Środowisko jak w <strong>żołądku</strong>: pepsyna działa najlepiej, amylaza ślinowa prawie stoi — dlatego trawienie skrobi zatrzymuje się po połknięciu kęsa (aż do wymieszania kęsa z kwasem).':val<7.6?'Okolice pH obojętnego — jak w <strong>jamie ustnej</strong>: optimum amylazy ślinowej.':'Lekko zasadowe — jak w <strong>jelicie cienkim</strong> po zobojętnieniu treści przez wodorowęglany z trzustki: optimum trypsyny; pepsyna nie działa.';
  info.className='bv-info';info.innerHTML=t+'<br><small>Kształty krzywych są orientacyjne — każdy enzym ma swoje optimum.</small>'}
 r.oninput=function(){v[tryb]=+r.value;draw()};narz();draw();BIO.fx.auto(el,function(){var mx=tryb==='T'?80:11,mn=tryb==='T'?0:1,d=tryb==='T'?2:0.5;v[tryb]=v[tryb]+d>mx?mn:v[tryb]+d;r.value=v[tryb];draw()},tryb==='T'?160:500)}});
})();
