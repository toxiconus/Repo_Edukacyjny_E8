;/* ===== v0.37: 'kinetics-v01' zastąpiony (stary widok rzucał błąd) — szybkość reakcji metal + HCl z pomiarem objętości H₂.
   Wygląd: GFX (zlewka + rurka + zbieranie gazu); fizyka: Arrhenius (CHE.THERMO), objętość molowa gazu z RT/p, reagent limitujący; równania: CHE.REACTION. ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var METAL={Mg:{M:24.305,Ea:30,base:3.0,col:'metal-mg',rx:'mgHcl'},Zn:{M:65.38,Ea:45,base:1.0,col:'metal-zn',rx:'znHcl'},Fe:{M:55.845,Ea:55,base:.3,col:'metal-fe',rx:'feHcl'}};
var FORM={granulka:{S:1,shape:'granule',n:'granulki'},wiorki:{S:3,shape:'chips',n:'wiórki'},proszek:{S:8,shape:'powder',n:'proszek'}};
var R=8.314,COLS=['#2563eb','#dc2626','#16a34a','#9333ea'];
V.define('kinetics-v01',{title:'Szybkość reakcji: metal + kwas solny (pomiar objętości H₂)',tag:'GFX',
 hint:'Ustaw metal, stężenie HCl, temperaturę i rozdrobnienie, uruchom pomiar. Każdy przebieg zostaje na wykresie V(H₂) od czasu — porównaj je.',
 foot:'Model poglądowy: v = A·S·c·e^(−Ea/RT) (Arrhenius, CHE.THERMO), malejąca powierzchnia metalu i zużycie kwasu; V(H₂) = n·RT/p. Reagent limitujący wyznacza końcową objętość.',
 build:function(host){host.innerHTML='';var G=C.LAB.GFX,P=C.PHYS;
  var nRun=0;var st={metal:'Zn',form:'granulka',c:2,T:25,cat:false,m:0.33,Vacid:50};var run=null,runs=[];
  var bar=el('div','r'),bar2=el('div','r');host.append(bar,bar2);
  function sel(par,label,opts,key){var s=el('select');opts.forEach(function(o){var x=el('option',null,o[1]);x.value=o[0];s.appendChild(x)});s.value=st[key];s.onchange=function(){st[key]=s.value;info()};var l=el('label',null,label+' ');l.appendChild(s);par.appendChild(l)}
  function rng(par,label,min,max,step,key,fmt){var l=el('label',null,label+' '),i=el('input'),o=el('b');i.type='range';i.min=min;i.max=max;i.step=step;i.value=st[key];o.textContent=fmt(st[key]);i.oninput=function(){st[key]=+i.value;o.textContent=fmt(st[key]);info()};l.append(i,o);par.appendChild(l)}
  sel(bar,'Metal',[['Mg','magnez'],['Zn','cynk'],['Fe','żelazo']],'metal');sel(bar,'Postać',[['granulka','granulki'],['wiorki','wiórki'],['proszek','proszek']],'form');
  rng(bar,'c(HCl)',0.5,4,0.5,'c',function(v){return String(v).replace('.',',')+' mol/dm³'});rng(bar2,'T',5,60,5,'T',function(v){return v+' °C'});rng(bar2,'masa metalu',0.1,0.6,0.05,'m',function(v){return v.toFixed(2).replace('.',',')+' g'});
  var cat=el('button',null,'Katalizator CuSO₄: wył.');cat.type='button';cat.onclick=function(){st.cat=!st.cat;cat.textContent='Katalizator CuSO₄: '+(st.cat?'wł.':'wył.');info()};bar2.appendChild(cat);
  var bar3=el('div','r');host.appendChild(bar3);var go=el('button',null,'▶ zmierz');go.type='button';var clr=el('button',null,'wyczyść wykres');clr.type='button';bar3.append(go,clr);
  var grid=el('div');grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:10px;align-items:start';host.appendChild(grid);
  var left=el('div'),right=el('div');grid.append(left,right);
  var ch=el('canvas');ch.style.cssText='width:100%;height:260px;display:block;border-radius:10px;background:var(--surface-soft,#f1f5f9)';right.appendChild(ch);var leg=el('div','note');right.appendChild(leg);var note=el('div','note');host.appendChild(note);
  function model(){var me=METAL[st.metal],f=FORM[st.form],T=st.T+273.15,k=me.base*Math.exp(-me.Ea*1000/R*(1/T-1/298.15))*(st.cat&&st.metal==='Zn'?3:1);
   var nM=st.m/me.M,nH=st.c*st.Vacid/1000,nH2=Math.min(nM,nH/2),Vm=R*T/101.325,Vmax=nH2*Vm*1000;return{k:k,v0:k*f.S*st.c*0.9,nM:nM,nH:nH,Vmax:Vmax,lim:nM<=nH/2?'metal':'kwas',Vm:Vm,frac:Math.exp(-me.Ea*1000/(R*T))/Math.exp(-me.Ea*1000/(R*298.15))}}
  function info(){var m=model(),me=METAL[st.metal],eq='';try{eq=C.LAB.GFX.rx.info(me.rx).eq}catch(_){}
   note.innerHTML='<b>'+eq+'</b><br>n(metal) = '+m.nM.toFixed(4).replace('.',',')+' mol · n(HCl) = '+m.nH.toFixed(3).replace('.',',')+' mol → reagent limitujący: <b>'+m.lim+'</b> · V<sub>max</sub>(H₂) ≈ <b>'+Math.round(m.Vmax)+' cm³</b> (V<sub>m</sub> = '+m.Vm.toFixed(1).replace('.',',')+' dm³/mol w '+st.T+' °C)'+
   '<br>Względem 25 °C udział zderzeń skutecznych ×'+m.frac.toFixed(2).replace('.',',')+' (E<sub>a</sub> modelowe '+me.Ea+' kJ/mol); szybkość początkowa ≈ '+m.v0.toFixed(2).replace('.',',')+' cm³/s.'+(st.cat&&st.metal!=='Zn'?'<br><i>CuSO₄ przyspiesza głównie reakcję cynku (ogniwo Zn|Cu na powierzchni).</i>':'')}
  var S={V:0,t:0,on:false,rate:0};
  var api=G.mount(left,{height:260,state:S,tick:function(s,dt){if(!run||!s.on)return;var m=run.m,sp=4;for(var i=0;i<sp;i++){var f=Math.max(0,1-s.V/m.Vmax),r=m.v0*Math.pow(f,2/3);s.rate=r;s.V=Math.min(m.Vmax,s.V+r*dt);s.t+=dt;}
    if(s.t-(run.lastT||0)>.25){run.pts.push([s.t,s.V]);run.lastT=s.t;draw()}if(s.V>=m.Vmax-0.05||s.t>600){s.on=false;run.pts.push([s.t,s.V]);draw()}},
   parts:[{id:'flask',x:.02,y:.25,w:.42,h:.72,get:function(){var me=METAL[st.metal],m=run?run.m:model(),f=run?Math.max(0,1-S.V/m.Vmax):1,lim=run?run.lim:'';var sol={col:me.col,eq:4,end:0,t:'metal',shape:FORM[st.form].shape};
     var b=G.fromReaction({solid:sol,out:['gaz'],level:.55},0);b.solids=[{col:G.colors.at(me.col)||[180,180,180],eq:4*(lim==='metal'?f:Math.max(.25,f)),t:'metal',shape:FORM[st.form].shape}];b.gas=S.on?Math.min(1,S.rate/2+.15):0;b.bubN=1+Math.min(3,S.rate);b.T=st.T;b.stopper='tube';return b}},
    {id:'gasCollect',x:.48,y:.05,w:.5,h:.92,get:function(){var m=run?run.m:model();var mx=Math.max(100,Math.ceil(m.Vmax/50)*50);return{gas:S.on?Math.min(1,S.rate/2+.2):0,gasMax:mx,gasV:run?Math.min(1,S.V/mx):0}}}],
   links:[{pts:[[.23,.18],[.23,.1],[.52,.1],[.52,.55]],flow:function(){return S.on?Math.min(1,S.rate/2+.2):0}}]});
  function draw(){var d=Math.min(2,window.devicePixelRatio||1),W=ch.clientWidth||400,H=ch.clientHeight||260;ch.width=W*d;ch.height=H*d;var x=ch.getContext('2d');x.setTransform(d,0,0,d,0,0);var T=G.theme(),L=44,B=H-28,Rr=W-10,Tp=12;
   var tmax=Math.max(30,...runs.map(function(r){return r.pts.length?r.pts[r.pts.length-1][0]:0})),vmax=Math.max(20,...runs.map(function(r){return r.m.Vmax}));tmax=Math.ceil(tmax/10)*10;vmax=Math.ceil(vmax/20)*20;
   x.strokeStyle=T.mut;x.fillStyle=T.mut;x.lineWidth=1;x.font='600 10px system-ui';x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(Rr,B);x.stroke();x.textAlign='center';for(var i=0;i<=5;i++){x.fillText(Math.round(tmax*i/5),L+(Rr-L)*i/5,B+13)}x.fillText('t [s]',(L+Rr)/2,H-3);x.textAlign='right';for(i=0;i<=4;i++){x.fillText(Math.round(vmax*i/4),L-4,B-(B-Tp)*i/4+3)}x.save();x.translate(10,(B+Tp)/2);x.rotate(-Math.PI/2);x.textAlign='center';x.fillText('V(H₂) [cm³]',0,0);x.restore();
   runs.forEach(function(r){x.strokeStyle=r.col;x.lineWidth=2.5;x.beginPath();r.pts.forEach(function(p,i){var px=L+(Rr-L)*p[0]/tmax,py=B-(B-Tp)*p[1]/vmax;i?x.lineTo(px,py):x.moveTo(px,py)});x.stroke();x.setLineDash([4,4]);x.lineWidth=1;var y=B-(B-Tp)*r.m.Vmax/vmax;x.beginPath();x.moveTo(L,y);x.lineTo(Rr,y);x.stroke();x.setLineDash([])});
   leg.innerHTML=runs.length?runs.map(function(r){return '<span style="color:'+r.col+'">■</span> '+r.lab}).join('<br>'):'Wykres pojawi się po pomiarze. Linia przerywana = V<sub>max</sub> z reagenta limitującego.'}
  go.onclick=function(){var m=model();if(runs.length>=4)runs.shift();run={m:m,lim:m.lim,pts:[[0,0]],col:COLS[(nRun++)%4],lab:st.metal+', '+FORM[st.form].n+', c = '+String(st.c).replace('.',',')+' M, '+st.T+' °C'+(st.cat?', CuSO₄':'')+' → V<sub>max</sub> ≈ '+Math.round(m.Vmax)+' cm³ (limituje '+m.lim+')'};runs.push(run);S.V=0;S.t=0;S.on=true;api.reset();draw()};
  clr.onclick=function(){runs=[];run=null;S.on=false;S.V=0;S.t=0;api.reset();draw()};
  info();setTimeout(draw,0);if(window.ResizeObserver)new ResizeObserver(draw).observe(ch)}});
})();
