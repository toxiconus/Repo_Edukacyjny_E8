/* --- v1.2 biblioteki: zakładki „Fizyka (CHE.PHYS)” i „Reakcje (GFX.rx)” --- */
const fx1=(x,n)=>(+x).toFixed(n==null?1:n).replace('.',',');
const readout=c=>{const d=ce('div','cl-ro');c.appendChild(d);return d};
const PLOT_CSS='.cl-ro{font-size:12px;margin-top:6px;line-height:1.45;padding:6px 8px;border-radius:8px;background:rgba(100,116,139,.09)}.cl-ro b{font-weight:700}.cl-tbl{width:100%;border-collapse:collapse;font-size:11.5px}.cl-tbl th,.cl-tbl td{padding:3px 5px;border-bottom:1px solid var(--border,#e2e8f0);text-align:left;vertical-align:top}.cl-tblw{overflow-x:auto;max-height:340px}.cl-plot{width:100%;height:170px;display:block;border-radius:10px;background:var(--surface-soft,#f1f5f9)}';
/* mały wykres liniowy na canvasie (theme-aware) */
function plot(c,h,draw){const cv=ce('canvas','cl-plot');cv.style.height=(h||170)+'px';c.appendChild(cv);const redraw=()=>{const d=Math.min(2,window.devicePixelRatio||1),W=cv.clientWidth||300,H=cv.clientHeight||170;cv.width=W*d;cv.height=H*d;const x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,W,H);draw(x,W,H,GF.theme())};if(window.ResizeObserver)new ResizeObserver(redraw).observe(cv);setTimeout(redraw,0);return redraw}
function axes(x,W,H,T,o){const L=38,B=H-22,R=W-8,Tp=10;x.strokeStyle=T.mut;x.fillStyle=T.mut;x.lineWidth=1;x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(R,B);x.stroke();x.font='600 10px system-ui,sans-serif';x.textAlign='center';
 for(let i=0;i<=4;i++){const v=o.x0+(o.x1-o.x0)*i/4,px=L+(R-L)*i/4;x.fillText(o.fx?o.fx(v):Math.round(v),px,B+13)}x.textAlign='right';for(let i=0;i<=3;i++){const v=o.y0+(o.y1-o.y0)*i/3,py=B-(B-Tp)*i/3;x.fillText(o.fy?o.fy(v):Math.round(v),L-4,py+3)}
 x.textAlign='left';x.fillText(o.xl||'',L+4,Tp+9);return{X:v=>L+(R-L)*(v-o.x0)/(o.x1-o.x0),Y:v=>B-(B-Tp)*(v-o.y0)/(o.y1-o.y0)}}
function tabF(g,card,push){const PH=C.PHYS;if(!PH){g.appendChild(ce('p',null,'Brak CHE.PHYS.'));return}
 /* 1. płomień */
 {const c=card(g,'Płomień: paliwo, powietrze, sól','CHE.PHYS.flame({fuel,phi,power,salt})',['fizyka','płomień','spalanie'],'Barwa, sadza, temperatura i produkty liczone z φ (=1/λ). Te same dane biorą palnik, lampa, lekcja spalania i Atlas (próba płomieniowa).','flame',true),
   st={flame:{on:1,power:.8,air:100,fuel:'CH4',salt:''}},ro=readout(c);let n=0;
  push(GF.mount(c,{vessel:'burner',height:260,aspect:1.4,get:()=>{if(++n%20===1){const f=PH.flame({fuel:st.flame.fuel,air:st.flame.air/100,power:st.flame.power,salt:st.flame.salt||null});ro.innerHTML='<b>'+f.fuelName+'</b> · φ = '+fx1(f.phi,2)+' ('+f.regime+')<br>T ≈ <b>'+Math.round(f.Tc)+' °C</b> · sadza '+Math.round(f.soot*100)+'% · '+(f.luminous?'płomień świecący':'płomień nieświecący')+'<br>produkty: '+f.products.join(', ')+(f.salt?'<br>próba płomieniowa: <b>'+f.saltName+'</b>':'')}return st}}));
  sel(c,Object.keys(PH.fuels).map(k=>[k,PH.fuels[k].name]),v=>st.flame.fuel=v,'CH4');sel(c,[['','bez soli']].concat(Object.keys(PH.flameColors()).map(k=>[k,PH.flameName(k)])),v=>st.flame.salt=v,'');
  range(c,'powietrze %',0,160,5,100,v=>st.flame.air=v);range(c,'moc',0,1,.05,.8,v=>{st.flame.power=v;st.flame.on=v>0?1:0})}
 /* 2. wrzenie */
 {const c=card(g,'Parowanie i wrzenie','CHE.PHYS.boil(T,{sub,p})',['fizyka','wrzenie','para'],'Prężność pary (równanie Antoine’a) → para nad cieczą, skraplanie na ściankach, pęcherzyki przy dnie i wrzenie. Temperatura wrzenia zależy od ciśnienia i cieczy.','boil',true),
   st={liquid:[205,228,238],level:.62,T:85,solvent:'H2O',p:101.3,gas:0,heat:2},ro=readout(c);let n=0;
  push(GF.mount(c,{vessel:'beaker',height:240,aspect:1.3,parts:[{id:'beaker',x:.2,y:.2,w:.6,h:.62},{id:'hotplate',x:.12,y:.8,w:.76,h:.2,get:()=>({heat:st.T>40?2.5:0,stir:null})}],get:()=>{if(++n%20===1){const b=PH.boil(st.T,{sub:st.solvent,p:st.p});ro.innerHTML='T<sub>wrz</sub> = <b>'+fx1(b.Tb)+' °C</b> przy '+fx1(st.p)+' kPa · p<sub>pary</sub> = '+fx1(b.pv,1)+' kPa ('+Math.round(b.x*100)+'% p)<br><b>'+b.regime+'</b>'}return st}}));
  sel(c,Object.keys(PH.solvents).map(k=>[k,PH.solvents[k].name]),v=>st.solvent=v,'H2O');range(c,'T °C',20,110,1,85,v=>st.T=v);range(c,'ciśnienie kPa',40,110,1,101.3,v=>st.p=v)}
 /* 3. żarzenie */
 {const c=card(g,'Żarzenie (ciało doskonale czarne)','CHE.PHYS.glow(T) · blackbody(K)',['fizyka','żarzenie','temperatura'],'Barwa rozgrzanego metalu, siatki trójnogu, sadzy w płomieniu. Poniżej ~525 °C (punkt Drapera) żarzenia nie widać.','glow',false),st={T:900},ro=readout(c);
  const rd=plot(c,120,(x,W,H,T)=>{for(let i=0;i<W;i++){const t=400+i/W*2600,gl=PH.glow(t);x.fillStyle='rgba('+gl.rgb.join(',')+','+gl.a+')';x.fillRect(i,0,1,H*.45)}const gl=PH.glow(st.T),cx=W/2;x.fillStyle=T.metal;x.fillRect(cx-70,H*.62,140,14);x.fillStyle='rgba('+gl.rgb.join(',')+','+gl.a+')';x.shadowColor=x.fillStyle;x.shadowBlur=18*gl.a;x.fillRect(cx-70,H*.62,140,14);x.shadowBlur=0;
   const px=(st.T-400)/2600*W;x.strokeStyle=T.text;x.lineWidth=2;x.beginPath();x.moveTo(px,0);x.lineTo(px,H*.45);x.stroke();ro.innerHTML='T = <b>'+st.T+' °C</b> · barwa: <b>'+gl.name+'</b>'});
  range(c,'T °C',300,2500,10,900,v=>{st.T=v;rd()})}
 /* 4. gazy */
 {const c=card(g,'Gazy: gęstość względem powietrza, testy','CHE.PHYS.gas(wzór,T,p)',['fizyka','gazy','Atlas'],'ρ = pM/RT. Gaz lżejszy od powietrza unosi się, cięższy opada (np. NO₂ wylewa się z naczynia). Dane wspólne dla Atlasu i lekcji.','gas',true),
   st={liquid:[205,228,238],level:.35,T:25,fumes:1,fumeGas:'NO2',fumeColor:[146,64,14]},ro=readout(c);
  push(GF.mount(c,{vessel:'beaker',height:240,aspect:1.6,parts:[{id:'beaker',x:.3,y:.36,w:.4,h:.6}],get:()=>st}));
  const show=f=>{const q=PH.gas(f);st.fumeGas=f;st.fumeColor=q.color||[150,160,175];ro.innerHTML='<b>'+f+' — '+q.name+'</b> · M = '+fx1(q.M,2)+' g/mol · ρ = '+fx1(q.rho,2)+' g/dm³ · <b>'+fx1(q.rel,2)+'×</b> powietrze → '+q.moves+'<br>zbieranie: '+q.collect+'<br>test: '+q.test+' · zapach: '+q.smell+' · w wodzie: '+q.sol+(q.aq&&q.aq!=='—'?', odczyn '+q.aq:'')};
  sel(c,Object.keys(PH.gases).map(k=>[k,k+' — '+PH.gases[k].name]),show,'NO2');show('NO2');
  const w=ce('div','cl-tblw'),t=ce('table','cl-tbl');t.innerHTML='<tr><th>wzór</th><th>nazwa</th><th>M</th><th>ρ/ρ<sub>pow</sub></th><th>palny</th><th>test</th></tr>'+Object.keys(PH.gases).map(k=>{const q=PH.gas(k);return'<tr><td>'+k+'</td><td>'+q.name+'</td><td>'+fx1(q.M,1)+'</td><td>'+fx1(q.rel,2)+'</td><td>'+(q.flam?'tak':'—')+'</td><td>'+q.test+'</td></tr>'}).join('');w.appendChild(t);c.appendChild(w)}
 /* 5. pęcherzyki */
 {const c=card(g,'Pęcherzyki: wielkość a szybkość','CHE.PHYS.bubbleRise(d) · bubbleRate',['fizyka','bąbelki','gaz'],'Prędkość wznoszenia w wodzie zależy od średnicy (dane doświadczalne). Efekt „bąbelki” w każdym naczyniu korzysta z tej krzywej.','bubbles',false),
   st={liquid:[205,228,238],level:.7,T:25,gas:.8,bubSize:1,bubFrom:'bottom'};
  plot(c,120,(x,W,H,T)=>{const A=axes(x,W,H,T,{x0:0,x1:8,y0:0,y1:30,xl:'d [mm] → v [cm/s]'});x.strokeStyle='#2563eb';x.lineWidth=2;x.beginPath();for(let d=.1;d<=8;d+=.1){const px=A.X(d),py=A.Y(PH.bubbleRise(d));d<.15?x.moveTo(px,py):x.lineTo(px,py)}x.stroke()});
  push(GF.mount(c,{vessel:'cylinder',height:220,get:()=>st}));range(c,'wielkość',.4,3,.1,1,v=>st.bubSize=v);range(c,'natężenie',0,1,.05,.8,v=>st.gas=v)}
 /* 6. osady */
 {const ids=['ppt-agcl','ppt-cu-oh-2','ppt-fe-oh-3','ppt-baso4','ppt-caco3','ppt-pbi2','ppt-cus','ppt-ag2cro4'].filter(i=>!C.COLORS||C.COLORS.get(i));
  const c=card(g,'Osady: pokrój i opadanie','CHE.PHYS.ppt(id) · stokes(d,ρ)',['fizyka','osad'],'Serowaty (AgCl) opada szybko, kłaczkowate wodorotlenki powoli, drobny (BaSO₄) tworzy mleczną zawiesinę. Barwa: CHE.COLORS.','precipitate',false),
   st={liquid:[205,228,238],level:.7,T:25,pop:.8,ppts:[]},ro=readout(c);
  const set=id=>{const q=PH.ppt(id);st.ppts=[{col:GF.colors.at(id)||[240,240,240],eq:1.3,id}];ro.innerHTML='<b>'+(q.name||id)+'</b> · '+q.habit+' · cząstki ~'+q.d+' µm, ρ '+fx1(q.rho,2)+' g/cm³<br>Stokes: '+fx1(q.v,2)+' mm/s → 10 cm w '+(q.settle10cm<120?Math.round(q.settle10cm)+' s':q.settle10cm<7200?Math.round(q.settle10cm/60)+' min':fx1(q.settle10cm/3600,1)+' h')};
  push(GF.mount(c,{vessel:'beaker',height:210,get:()=>st}));sel(c,ids.map(i=>[i,(C.COLORS&&C.COLORS.get(i)?C.COLORS.get(i).name:i)]),set,ids[0]);set(ids[0])}
 /* 7. cząsteczki: Maxwell + ParticleSim */
 {const c=card(g,'Ruch cząsteczek: rozkład Maxwella','CHE.PHYS.maxwellPDF · vRms',['fizyka','cząsteczki','Atlas'],'Im wyższa T i mniejsza masa molowa, tym szybsze cząsteczki. v_rms = √(3RT/M).','molTank',false),st={T:25},ro=readout(c);
  const gs=[['H2','#2563eb'],['N2','#16a34a'],['CO2','#dc2626']];
  const rd=plot(c,160,(x,W,H,T)=>{const A=axes(x,W,H,T,{x0:0,x1:3000,y0:0,y1:.0025,xl:'v [m/s]',fy:v=>v?'':'0'});gs.forEach(([f,col])=>{const M=PH.molarMass(f);x.strokeStyle=col;x.lineWidth=2;x.beginPath();for(let v=0;v<=3000;v+=20){const px=A.X(v),py=A.Y(Math.min(.0025,PH.maxwellPDF(v,M,st.T)));v?x.lineTo(px,py):x.moveTo(px,py)}x.stroke()});
   ro.innerHTML=gs.map(([f,col])=>'<span style="color:'+col+'">■</span> '+f+': v<sub>rms</sub> = <b>'+Math.round(PH.vRms(PH.molarMass(f),st.T))+' m/s</b>').join(' · ')});
  range(c,'T °C',-100,1000,10,25,v=>{st.T=v;rd()})}
 {const c=card(g,'Strącanie: jony → klaster → osad','CHE.sim.ParticleSim',['fizyka','cząsteczki','osad','jony'],'Ten sam symulator, którego używa widget lekcji (particleSim). Ruch cieplny ∝ √T z CHE.PHYS; cząstka osadu opada.','molTank',true);
  if(C.sim&&C.sim.ParticleSim){const cv=ce('canvas');cv.style.cssText='width:100%;height:240px;display:block;border-radius:10px';c.appendChild(cv);const ro=readout(c);
   const CF={fecl3:['Fe³⁺',3,'#2e7d4f','#7c2d12','ppt-fe-oh-3'],cuso4:['Cu²⁺',2,'#2563eb','#3b82f6','ppt-cu-oh-2'],mgcl2:['Mg²⁺',2,'#b06f1c','#e5e7eb','ppt-mg-oh-2']};let sim=null,key='cuso4',T=25;
   const build=()=>{if(sim)sim.stop();const f=CF[key];sim=new C.sim.ParticleSim({canvas:cv,T,config:{particles:[{type:'cation',count:6,r:14,color:f[2],label:f[0],speed:1},{type:'oh',count:6*f[1],r:10,color:'#b83a45',label:'OH⁻',speed:1.2}],reaction:{cation:'cation',anion:'oh',ratio:f[1],product:f[0],color:(GF.colors.at(f[4])&&'#'+GF.colors.at(f[4]).map(v=>(v|0).toString(16).padStart(2,'0')).join(''))||f[3],pptId:f[4]}},
    onCounters:({particles,clusters})=>{ro.innerHTML='wolne jony: <b>'+sim.particles.filter(p=>!p.bound).length+'</b> · cząstek osadu: <b>'+clusters+'</b>'}});sim.start();push({destroy:()=>sim.stop()})};
   sel(c,[['cuso4','CuSO₄ + NaOH'],['fecl3','FeCl₃ + NaOH'],['mgcl2','MgCl₂ + NaOH']],v=>{key=v;build()},key);range(c,'T °C',0,100,5,25,v=>{T=v;if(sim)sim.setT(v)});btn(c,'Od nowa',build);setTimeout(build,0)}}
 /* elektrostatyka: CHE.PHYS.electro — prawo Coulomba F(r) i elektroskop (wspólne z widokami fiz-* i lekcją FIZ-01) */
 if(PH.electro){const E=PH.electro;{let q1=2,q2=2;const c=card(g,'Prawo Coulomba F(r)','CHE.PHYS.electro.coulomb',['fizyka','elektrostatyka'],'F = k·q₁·q₂/r² — 2× dalej → 4× słabiej. Ten sam model liczy widok fiz-coulomb-v01 i zadania lekcji FIZ-01.',null);
  const red=plot(c,170,(x,W,H,T)=>{const L=38,B=H-22,R=W-8,Tp=10,F=r=>Math.abs(E.coulomb(q1*1e-6,q2*1e-6,r)),Fm=F(.05);x.strokeStyle=T.mut;x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(R,B);x.stroke();x.strokeStyle='#ea580c';x.lineWidth=2;x.beginPath();for(let i=0;i<=100;i++){const r=.05+.95*i/100,X=L+(R-L)*i/100,Y=B-(B-Tp)*F(r)/Fm;i?x.lineTo(X,Y):x.moveTo(X,Y)}x.stroke();x.fillStyle=T.mut;x.font='600 10px system-ui';x.textAlign='left';x.fillText('F(5 cm) = '+Fm.toFixed(2)+' N · r: 5–100 cm',L+6,Tp+10)});
  range(c,'q₁ µC',.5,5,.5,q1,v=>{q1=v;red()});range(c,'q₂ µC',.5,5,.5,q2,v=>{q2=v;red()})}
  {const c=card(g,'Elektroskop — indukcja','GFX.vessels · electroscope',['fizyka','elektrostatyka'],'Pręt (−) zbliża się i oddala: elektrony uciekają do listków, ładunek całkowity = 0 (CHE.PHYS.electro.electroscope).','electroscope');push(GF.mount(c,{vessel:'electroscope',height:240,get:()=>({})}))}}

}
function tabR(g,card,push){const RX=GF.rx;if(!RX){g.appendChild(ce('p',null,'Brak GFX.rx.'));return}
 RX.list().forEach(k=>{const I=RX.info(k),sp=RX.get(k),c=card(g,I.name,'GFX.rx.mount(host,"'+k+'")',['reakcja'].concat(I.out).concat(I.teacher?['pokaz nauczyciela']:[]),I.why||I.obs,k,false);
  const m=RX.mount(c,k,{height:200,dur:6});push(m.api);const ro=readout(c);ro.innerHTML='<b>'+I.eq+'</b>'+(I.gas?'<br>gaz: '+I.gas.formula+' — '+I.gas.moves+'; test: '+I.gas.test:'')+'<br><small>źródło: '+I.src+'</small>';
  btn(c,'▶ wykonaj',()=>m.play());btn(c,'↺',()=>m.reset())})}
