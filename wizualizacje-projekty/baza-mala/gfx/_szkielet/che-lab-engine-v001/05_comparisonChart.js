
P.comparisonChart=(h,lab,o)=>{o=o||{};const kinds=o.kinds||['temperature','pH','gasVolume'];const cv=el('canvas');cv.style.cssText='width:100%;height:210px;display:block';h.appendChild(cv);const r=()=>{const dpr=Math.min(g.devicePixelRatio||1,2),W=cv.clientWidth||320,H=cv.clientHeight||210,c=cv.getContext('2d');cv.width=W*dpr;cv.height=H*dpr;c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,W,H);const L=42,R=12,T=12,B=30;let all=[];kinds.forEach(k=>all=all.concat(lab.series(k).map(x=>+x.value).filter(Number.isFinite)));if(!all.length){c.fillStyle='#64748b';c.font='12px Inter,system-ui';c.fillText('Brak wspólnych pomiarów.',L,28);return}let lo=Math.min(...all),hi=Math.max(...all);if(lo===hi){lo-=1;hi+=1}const trows=lab.measurements.filter(x=>kinds.includes(x.kind));const t0=trows.length?trows[0].t:0,t1=trows.length?trows[trows.length-1].t:t0+1;const X=t=>L+(W-L-R)*(t-t0)/Math.max(1,t1-t0),Y=v=>T+(H-T-B)*(hi-v)/Math.max(1,hi-lo);c.font='10px Inter,system-ui';kinds.forEach((k,ix)=>{const rows=lab.series(k);if(!rows.length)return;c.strokeStyle=['#2563eb','#16a34a','#d97706'][ix%3];c.lineWidth=2;c.beginPath();rows.forEach((q,i)=>{const x=X(q.t),y=Y(+q.value);i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();c.fillStyle=c.strokeStyle;c.fillText(k, L+ix*90, H-7)});};lab.on('measurement',r);lab.on('reset',r);r()};
P.gasAnalysis=(h,lab,o)=>{o=o||{};const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const read=()=>{const x=lab.inputs&&lab.inputs.combustionProducts;const S=lab.S,g=S.gas;let title=x?'Spaliny ze spalania':(g||'Brak gazu');let c=x?x:{CO2:0,CO:0,H2O:0,O2:0,fuel:0,total:0};const total=Math.max(1e-12,Number(c.total||0));const pct=k=>(100*Number(c[k]||0)/total).toFixed(2);const props=x?'Źródło: stanowisko spalania. Skład jest wynikiem bieżącego bilansu masowego.':(g==='CO₂'?'niepalny; modelowa identyfikacja':g==='H₂'?'palny; nie uruchamiaj testu płomieniem w tym module':g==='NO₂'?'toksyczny; analiza tylko jako model dydaktyczny':'brak danych');box.innerHTML='<div style="'+cardSty+'"><b>Próbka:</b> '+title+'<br><b>CO₂:</b> '+pct('CO2')+'% · <b>CO:</b> '+pct('CO')+'% · <b>H₂O:</b> '+pct('H2O')+'%<br><b>O₂:</b> '+pct('O2')+'% · <b>paliwo:</b> '+pct('fuel')+'%</div><div style="'+cardSty+'"><b>Interpretacja:</b> '+props+(x?' <br><b>Przepływ spalin:</b> '+Number(x.massFlow||0).toExponential(3)+' kg/s':'')+'</div>';};lab.on('tick',read);lab.on('input:combustionProducts',read);lab.on('add',read);lab.on('reset',read);read()};
P.measureStation=(h,lab,o)=>{o=o||{};const kinds=[['mass','Masa','g'],['volume','Objętość','u'],['temperature','Temperatura','°C'],['pressure','Ciśnienie','arb']];const grid=el('div');grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px';h.appendChild(grid);kinds.forEach(([k,l,u])=>{const c=el('div');c.style.cssText=cardSty;c.innerHTML='<b>'+l+'</b><div class="v" style="font-size:20px;margin:4px 0">—</div><small>'+u+' · model</small>';grid.appendChild(c);c.dataset.kind=k});const controls=el('div');controls.style.cssText='display:flex;gap:6px;margin-top:7px';controls.innerHTML='<input class="val" type="number" step="0.1" value="1" style="'+sty+'flex:1"><select class="kind" style="'+sty+'flex:1"><option value="mass">Masa</option><option value="volume">Objętość</option><option value="pressure">Ciśnienie</option></select><button class="rec" style="'+sty+'background:var(--accent,#0d6868);color:#fff">Zapisz pomiar</button>';h.appendChild(controls);const msg=el('div');msg.style.cssText='margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)';h.appendChild(msg);controls.querySelector('.rec').onclick=()=>{const k=controls.querySelector('.kind').value,v=+controls.querySelector('.val').value;lab.record(k,v,k==='mass'?'g':k==='volume'?'u':'arb',{manual:true});msg.textContent='Zapisano: '+v+' '+(k==='mass'?'g':k==='volume'?'u':'arb')};const r=()=>kinds.forEach(([k])=>{const rows=lab.series(k),x=grid.querySelector('[data-kind="'+k+'"] .v');if(x)x.textContent=rows.length?Number(rows[rows.length-1].value).toFixed(2):'—'});lab.on('measurement',r);lab.on('reset',r);r()};
P.reactionCatalog=(h,lab)=>{const rows=[['Kwas + metal','Mg + 2 HCl → MgCl₂ + H₂','gaz; reakcja wypierania','kontrola gazu i BHP'],['Węglan + kwas','CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂','gaz; pienienie','CO₂ jako produkt modelu'],['Metal + woda','2 Na + 2 H₂O → 2 NaOH + H₂','gaz; ogrzewanie','tylko pokaz dydaktyczny'],['Tlenek zasadowy + woda','CaO + H₂O → Ca(OH)₂','wydzielanie ciepła','mocne ogrzanie modelowane'],['Kwas + zasada','HCl + NaOH → NaCl + H₂O','neutralizacja','zmiana pH'],['Strącanie','2 AgNO₃ + BaCl₂ → 2 AgCl + Ba(NO₃)₂','osad','obserwacja osadu']];h.innerHTML='<div style="overflow:auto"><table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr><th style="text-align:left;padding:5px;border-bottom:1px solid var(--border)">Typ</th><th style="text-align:left;padding:5px;border-bottom:1px solid var(--border)">Równanie</th><th style="text-align:left;padding:5px;border-bottom:1px solid var(--border)">Efekt</th><th style="text-align:left;padding:5px;border-bottom:1px solid var(--border)">Uwagi</th></tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(x=>'<td style="padding:5px;border-bottom:1px solid var(--border)">'+x+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><small style="display:block;margin-top:6px;color:var(--text-muted)">Katalog jest biblioteką dydaktyczną; szczegóły warunków doświadczeń powinny pochodzić z centralnego CHE.DATA.</small>'};
P.reactionTable=(h,lab)=>{const r=()=>{const rows=[];(lab.S.log||[]).forEach(l=>(l.evs||[]).forEach(e=>rows.push({t:l.id,type:e.type,eq:e.eq,obs:e.obs,warn:e.warn||''})));h.innerHTML=rows.length?'<div style="overflow:auto"><table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">Krok</th><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">Typ</th><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">Równanie</th><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">Obserwacja</th><th style="text-align:left;border-bottom:1px solid var(--border,#e2e8f0);padding:5px">BHP</th></tr></thead><tbody>'+rows.map(x=>'<tr><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0)">'+x.t+'</td><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0)">'+x.type+'</td><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0);font-family:var(--mono,monospace)">'+x.eq+'</td><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0)">'+x.obs+'</td><td style="padding:5px;border-bottom:1px solid var(--border,#e2e8f0)">'+(x.warn||'—')+'</td></tr>').join('')+'</tbody></table></div>':'<small>Tabela zapełni się po zajściu reakcji.</small>'};lab.on('add',r);lab.on('reset',r);r()};

P.gasSample=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px';c.innerHTML='<label>Objętość próbki <input class=sv type=range min=.05 max=10 step=.05 value=1 style=width:100%><output class=svv>1.00</output> L</label><label>Temperatura <input class=st type=range min=-20 max=300 value=25 style=width:100%><output class=stv>25</output> °C</label><label>Ciśnienie <input class=sp type=range min=70 max=120 step=.5 value=101.3 style=width:100%><output class=spv>101.3</output> kPa</label><button class=take>Pobierz próbkę</button>';box.appendChild(c);const out=el('div');box.appendChild(out);const st={V:.001,T:25,p:101325,sample:null};lab.gasSampleState=st;const q=x=>c.querySelector(x);function render(){const sample=st.sample;if(!sample){out.innerHTML='<div style="'+cardSty+'">Brak pobranej próbki.</div>';return}const n=Object.values(sample.moles||{}).reduce((a,v)=>a+Number(v||0),0),keys=['CO2','CO','H2O','O2','fuel'];out.innerHTML='<div style="'+cardSty+'"><b>Próbka:</b> '+(sample.V*1000).toFixed(1)+' mL · '+sample.T.toFixed(1)+' °C · '+(sample.p/1000).toFixed(1)+' kPa · n='+n.toFixed(6)+' mol</div><div style="'+cardSty+'">'+keys.map(k=>k+': '+(100*Number(sample.moles[k]||0)/Math.max(n,1e-15)).toFixed(2)+'%').join(' · ')+'</div>'}q('.sv').oninput=e=>{st.V=+e.target.value/1000;q('.svv').value=(+e.target.value).toFixed(2)};q('.st').oninput=e=>{st.T=+e.target.value;q('.stv').value=st.T};q('.sp').oninput=e=>{st.p=+e.target.value*1000;q('.spv').value=(st.p/1000).toFixed(1)};q('.take').onclick=()=>{const cs=lab.chemistry.substances||{},m={};Object.keys(cs).forEach(k=>{const x=cs[k];if(x.phase==='gas'&&Number(x.amountMol)>0)m[k]=Number(x.amountMol)});st.sample={moles:m,T:st.T,p:st.p,V:st.V,source:'CHE.LAB.chemistry',time:lab.t};lab.receive('gasSample',st.sample);lab.record('gasSampleVolume',st.V*1000,'L',{source:st.sample.source});lab.record('gasSampleMoles',Object.values(m).reduce((a,v)=>a+v,0),'mol',{source:st.sample.source});lab.emit('gasSampleTaken',st.sample);render()};lab.on('chemistry',render);lab.on('reset',()=>{st.sample=null;render()});render()};
P.gasSeparator=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const out=el('div');box.appendChild(out);const render=()=>{const c=lab.chemistry.substances||{},gas=Object.values(c).filter(x=>x.phase==='gas').reduce((a,x)=>a+Number(x.amountMol||0),0),cond=Number(c.H2O_liquid&&c.H2O_liquid.amountMol||0),solid=Number(c.MgO&&c.MgO.amountMol||0),mw=GASPHYS.MW||{};out.innerHTML='<div style="'+cardSty+'"><b>Separacja faz:</b> gaz '+gas.toFixed(6)+' mol · H₂O(g) '+Number(c.H2O&&c.H2O.amountMol||0).toFixed(6)+' mol · H₂O(l) '+cond.toFixed(6)+' mol · MgO(s) '+solid.toFixed(6)+' mol</div><div style="'+cardSty+'">Kondensat H₂O: '+(cond*(mw.H2O||.01801528)*1000).toFixed(3)+' g · MgO(s): '+(solid*(mw.MgO||.0403044)*1000).toFixed(3)+' g</div>'};lab.on('chemistry',render);lab.on('reset',render);render()};
P.gasAbsorber=(h,lab,o)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:7px';c.innerHTML='<label>Składnik <select class=ak><option value=CO2>CO₂</option><option value=CO>CO</option><option value=H2O>H₂O(g)</option></select></label><label>Skuteczność <input class=ae type=range min=0 max=100 value=80><output class=aev>80</output>%</label><button class=abs>Zastosuj absorber</button>';box.appendChild(c);const out=el('div');box.appendChild(out);const st={component:'CO2',eff:.8,absorbed:0};lab.gasAbsorberState=st;const render=()=>{const x=lab.chemistry.substances[st.component],before=Number(x&&x.amountMol||0),removed=before*st.eff;out.innerHTML='<div style="'+cardSty+'"><b>'+st.component+':</b> przed '+before.toFixed(6)+' mol · po '+(before-removed).toFixed(6)+' mol · usunięto '+removed.toFixed(6)+' mol</div>'};c.querySelector('.ak').onchange=e=>{st.component=e.target.value;render()};c.querySelector('.ae').oninput=e=>{st.eff=+e.target.value/100;c.querySelector('.aev').value=e.target.value;render()};c.querySelector('.abs').onclick=()=>{const x=lab.chemistry.substances[st.component];if(!x)return;const old=Number(x.amountMol||0),removed=old*st.eff;x.amountMol=old-removed;x.massKg=x.amountMol*Number(x.molarMass||0);st.absorbed+=removed;lab.record('absorbedGas',removed,'mol',{component:st.component,efficiency:st.eff,source:'CHE.LAB.chemistry'});lab.emit('gasAbsorbed',{component:st.component,removed,remaining:x.amountMol});render()};lab.on('chemistry',render);lab.on('reset',()=>{st.absorbed=0;render()});render()};
P.gasUncertainty=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const c=el('div');c.innerHTML='<label>u(V) [%] <input class=uvv type=number step=.01 value=2></label> <label>u(T) [K] <input class=utt type=number step=.1 value=.5></label> <label>u(p) [%] <input class=upp type=number step=.01 value=.5></label>';box.appendChild(c);const out=el('div');box.appendChild(out);function render(){const g=lab.chemistry.gasSnapshot||{},T=Math.max(Number(g.temperature||25)+273.15,1),uV=+c.querySelector('.uvv').value/100,uT=+c.querySelector('.utt').value/T,uP=+c.querySelector('.upp').value/100,ur=Math.sqrt(uV*uV+uT*uT+uP*uP);lab.inputs.gasUncertainty=ur;out.innerHTML='<div style="'+cardSty+'"><b>Niepewność względna:</b> ±'+(100*ur).toFixed(2)+'% · wspólne V, T i p.</div>'}['uvv','utt','upp'].forEach(k=>c.querySelector('.'+k).oninput=render);lab.on('chemistry',render);render()};
P.gasBalance=(h,lab)=>{const box=el('div');box.style.cssText='display:grid;gap:8px';h.appendChild(box);const out=el('div');box.appendChild(out);const render=()=>{const g=lab.chemistry.gasSnapshot||{},a=lab.chemistry.auditGas(lab.gasTrapState||{}),chem=lab.chemistry.last||null;const gasMol=Object.values(lab.chemistry.substances||{}).filter(x=>x.phase==='gas').reduce((z,x)=>z+Number(x.amountMol||0),0);out.innerHTML='<div style="'+cardSty+'"><b>Wspólny bilans gazu:</b> '+gasMol.toFixed(6)+' mol w fazie gazowej · '+(Number(g.volumeL||0)).toFixed(3)+' L · '+(Number(g.temperature||25)).toFixed(1)+' °C</div><div style="'+cardSty+'"><b>Synchronizacja:</b> '+(a.ok?'PASS':'BLOCK')+(a.issues.length?' · '+a.issues.join('; '):' · gasTrap i CHE.LAB.chemistry są zgodne')+'</div>'+(chem?'<div style="'+cardSty+'">Ostatnia reakcja: '+(chem.equation||chem.id||'—')+'</div>':'')};lab.on('chemistry',render);lab.on('tick',render);lab.on('reset',render);render()};

(function(){
const P={version:'1.1'},R=8.314462618,G=9.81,M_AIR=28.96,P0=101.325;
const cl=(v,a,b)=>Math.max(a,Math.min(b,v)),mix=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*cl(t,0,1)),sstep=(a,b,x)=>{const t=cl((x-a)/(b-a),0,1);return t*t*(3-2*t)};
const hex=h=>{h=String(h||'').replace('#','');if(h.length===3)h=h.split('').map(x=>x+x).join('');const n=parseInt(h,16);return isFinite(n)?[n>>16&255,n>>8&255,n&255]:null};
const COL=(id)=>{const K=C.COLORS;try{if(K&&K.get){const r=K.get(id);if(r&&r.hex)return hex(r.hex)}}catch(_){}return null};
 
const tab=(T,x)=>{if(x<=T[0][0])return T[0][1];for(let i=1;i<T.length;i++)if(x<=T[i][0]){const a=T[i-1],b=T[i];return a[1]+(b[1]-a[1])*(x-a[0])/(b[0]-a[0])}return T[T.length-1][1]};

const MM={H2:2.016,He:4.003,CH4:16.04,NH3:17.03,H2O:18.02,C2H2:26.04,CO:28.01,N2:28.01,C2H4:28.05,NO:30.01,O2:32.00,H2S:34.08,HCl:36.46,Ar:39.95,CO2:44.01,C3H8:44.10,N2O:44.01,NO2:46.01,C2H5OH:46.07,C4H10:58.12,SO2:64.07,Cl2:70.90,O3:48.00,CH3COCH3:58.08};
P.molarMass=f=>{try{const m=C.CHEM&&C.CHEM.molarMass&&C.CHEM.molarMass(f);const v=typeof m==='number'?m:m&&(m.value||m.M||m.molarMass);if(v>0)return v}catch(_){}return MM[f]||null};

P.blackbody=Tk=>{const t=cl(Tk,600,40000)/100;let r,g,b;
 r=t<=66?255:329.698727446*Math.pow(t-60,-.1332047592);
 g=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*Math.pow(t-60,-.0755148492);
 b=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;return[r,g,b].map(v=>Math.round(cl(v,0,255)))};
 
P.glow=Tc=>{const Tk=Tc+273.15,a=sstep(500,1300,Tc);const name=Tc<500?'brak żarzenia':Tc<650?'ciemnowiśniowy':Tc<850?'wiśniowy':Tc<1000?'jasnoczerwony':Tc<1200?'pomarańczowy':Tc<1400?'żółty':'biały';return{rgb:P.blackbody(Tk),a,name}};

const FL_FB={Li:[225,29,72],Na:[255,179,0],K:[179,136,255],Ca:[234,88,12],Sr:[220,38,38],Ba:[163,230,53],Cu:[34,197,94],B:[74,222,128],Rb:[192,132,252],Cs:[129,140,248]};
const FL_NM={Li:'lit — karminowy',Na:'sód — żółty',K:'potas — fioletowy (przez szkło kobaltowe)',Ca:'wapń — ceglastoczerwony',Sr:'stront — karminowoczerwony',Ba:'bar — żółtozielony',Cu:'miedź — zielony / niebieskozielony',B:'bor — zielony',Rb:'rubid — czerwonofioletowy',Cs:'cez — niebieskofioletowy'};
P.flameColor=sym=>{if(!sym)return null;const s=String(sym);return COL('flame-'+s.toLowerCase())||FL_FB[s]||null};
P.flameName=sym=>FL_NM[sym]||sym;
P.flameColors=()=>{const o={};Object.keys(FL_FB).forEach(k=>o[k]=P.flameColor(k));try{(C.COLORS&&C.COLORS.list?C.COLORS.list('flame'):[]).forEach(r=>{const k=r.name;if(k&&!o[k])o[k]=hex(r.hex)})}catch(_){}return o};
P.flameNames=()=>{const o={};Object.keys(P.flameColors()).forEach(k=>o[k]=P.flameName(k));return o};

const FUELS={
 CH4:{name:'metan (gaz ziemny)',C:1,H:4,O:0,Tad:2223,lum:1.3,SL:.37,lhv:50.0,vis:1},
 C3H8:{name:'propan',C:3,H:8,O:0,Tad:2268,lum:1.25,SL:.43,lhv:46.4,vis:1},
 C4H10:{name:'butan (zapalniczka)',C:4,H:10,O:0,Tad:2243,lum:1.2,SL:.41,lhv:45.7,vis:1},
 C2H5OH:{name:'etanol (lampa spirytusowa)',C:2,H:6,O:1,Tad:2193,lum:1.9,SL:.42,lhv:26.8,vis:.8,diffSoot:.15},
 H2:{name:'wodór',C:0,H:2,O:0,Tad:2483,lum:99,SL:2.1,lhv:120,vis:.22,diffSoot:0},
 CO:{name:'tlenek węgla(II)',C:1,H:0,O:1,Tad:2383,lum:99,SL:.45,lhv:10.1,vis:.75,diffSoot:0},
 C2H2:{name:'acetylen',C:2,H:2,O:0,Tad:2500,lum:1.05,SL:1.5,lhv:48.2,vis:1,diffSoot:.95},
 C25H52:{name:'parafina (świeca)',C:25,H:52,O:0,Tad:2200,lum:1.0,SL:.4,lhv:42,vis:1,diff:1,diffSoot:.7}
};
P.fuels=FUELS;
P.o2Need=f=>{const F=FUELS[f]||FUELS.CH4;return F.C+F.H/4-F.O/2};
 
P.phi=(fuel,fuelFlow,airFlow)=>{const need=P.o2Need(fuel)*fuelFlow,av=.2095*airFlow;return av>0?need/av:9};
const BLUE_CORE=[45,95,235],BLUE_OUT=[95,160,255],H2_COL=[175,200,255];
 
P.flame=o=>{o=o||{};const id=FUELS[o.fuel]?o.fuel:'CH4',F=FUELS[id],power=cl(o.power==null?1:o.power,0,1),diff=o.diffusion!=null?!!o.diffusion:!!F.diff;
 let phi=o.phi!=null?o.phi:o.air!=null?1/Math.max(.08,o.air):1;if(diff)phi=Math.max(phi,2.2);
  
 const dT=phi-1.05,eff=Math.max(.35,1-(phi<1.05?.9:.55)*dT*dT);let Tk=diff?.78*F.Tad:300+(F.Tad-300)*eff;Tk*=.9+.1*power;
  
 let soot=diff?(F.diffSoot==null?.6:F.diffSoot):sstep(F.lum-.1,F.lum+.45,phi);if(o.soot!=null)soot=Math.max(soot,o.soot);
 const lumRGB=mix(P.blackbody(Math.min(Tk,2000)),[255,226,140],.6) ,salt=o.salt?P.flameColor(o.salt):null;
 let outer=id==='H2'?H2_COL:mix(BLUE_OUT,lumRGB,soot),core=soot>.65?mix([255,220,140],lumRGB,.4):id==='H2'?[205,220,255]:BLUE_CORE;
 if(salt){outer=mix(outer,salt,.85);core=mix(core,salt,.35)}
 const regime=diff?'dyfuzyjny (świecący)':phi<.75?'mieszanka uboga (nadmiar O₂)':phi<=1.15?'około stechiometrii':'mieszanka bogata (za mało O₂)';
 const products=['CO₂','H₂O'].filter((x,i)=>i?F.H>0:F.C>0);if(F.C>0&&phi>1.1)products.push('CO');if(F.C>0&&soot>.3)products.push('C (sadza)');
  
 const h=power*(diff?1.25:1)*(1+.55*Math.max(0,phi-1)),cone=diff?0:cl(.42*power*(.37/F.SL)*(phi>1?1+.4*(phi-1):1),.08,.8);
 return{fuel:id,fuelName:F.name,phi,lambda:1/phi,T:Tk,Tc:Tk-273.15,soot,outer:outer.map(Math.round),core:core.map(Math.round),alpha:(salt?Math.max(.65,F.vis):F.vis)*(.35+.65*Math.sqrt(power)),
  h,cone,flickerHz:diff?12:8+4*power,regime,products,salt:o.salt||null,saltName:o.salt?P.flameName(o.salt):null,luminous:soot>.3||!!salt,
  label:(diff?'płomień dyfuzyjny':soot>.3?'płomień świecący, kopcący':'płomień nieświecący (niebieski)')+' · ~'+Math.round(Tk-273.15)+' °C'}};

const GASES={
 H2:{name:'wodór',col:null,smell:'bez zapachu',flam:1,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'zapalony – charakterystyczny „pyk” (mieszanina z powietrzem)'},
 O2:{name:'tlen',col:null,smell:'bez zapachu',flam:0,ox:1,tox:0,sol:'słabo',aq:'—',test:'tlące się łuczywko zapala się'},
 N2:{name:'azot',col:null,smell:'bez zapachu',flam:0,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'gasi płomień, nie mętni wody wapiennej'},
 CO2:{name:'tlenek węgla(IV)',col:null,smell:'bez zapachu',flam:0,ox:0,tox:0,sol:'umiarkowanie',aq:'słabo kwasowy',test:'mętnieje woda wapienna; gasi płomień'},
 CO:{name:'tlenek węgla(II)',col:null,smell:'bez zapachu',flam:1,ox:0,tox:3,sol:'bardzo słabo',aq:'—',test:'pali się niebieskim płomieniem (tylko pokaz)'},
 NH3:{name:'amoniak',col:null,smell:'ostry, duszący',flam:0,ox:0,tox:2,sol:'bardzo dobrze',aq:'zasadowy',test:'wilgotny papierek uniwersalny – niebieski'},
 HCl:{name:'chlorowodór',col:null,smell:'ostry, drażniący',flam:0,ox:0,tox:2,sol:'bardzo dobrze',aq:'kwasowy',test:'z NH₃ biały dym NH₄Cl; wilgotny papierek – czerwony'},
 Cl2:{name:'chlor',col:[190,210,80],smell:'duszący',flam:0,ox:1,tox:3,sol:'umiarkowanie',aq:'kwasowy, odbarwia',test:'żółtozielony; odbarwia wilgotny papierek'},
 NO2:{name:'tlenek azotu(IV)',col:'gas-no2',smell:'duszący',flam:0,ox:1,tox:3,sol:'reaguje z wodą',aq:'kwasowy',test:'brunatny gaz (tylko pokaz nauczyciela)'},
 NO:{name:'tlenek azotu(II)',col:null,smell:'—',flam:0,ox:0,tox:2,sol:'słabo',aq:'—',test:'na powietrzu brunatnieje (→ NO₂)'},
 SO2:{name:'tlenek siarki(IV)',col:null,smell:'ostry, duszący (palona siarka)',flam:0,ox:0,tox:2,sol:'dobrze',aq:'kwasowy',test:'odbarwia KMnO₄; wilgotny papierek – czerwony'},
 H2S:{name:'siarkowodór',col:null,smell:'zgniłych jaj',flam:1,ox:0,tox:3,sol:'umiarkowanie',aq:'słabo kwasowy',test:'czernieje papierek z octanem ołowiu'},
 CH4:{name:'metan',col:null,smell:'bez zapachu',flam:1,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'pali się niebieskim płomieniem'},
 C3H8:{name:'propan',col:null,smell:'bez zapachu (nawaniany)',flam:1,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'pali się'},
 C2H2:{name:'acetylen',col:null,smell:'słaby (technicz. czosnkowy)',flam:1,ox:0,tox:0,sol:'słabo',aq:'—',test:'kopcący płomień'},
 He:{name:'hel',col:null,smell:'bez zapachu',flam:0,ox:0,tox:0,sol:'bardzo słabo',aq:'—',test:'—'},
 Ar:{name:'argon',col:null,smell:'bez zapachu',flam:0,ox:0,tox:0,sol:'słabo',aq:'—',test:'—'},
 H2O:{name:'para wodna',col:null,smell:'—',flam:0,ox:0,tox:0,sol:'—',aq:'obojętny',test:'skrapla się; bezwodny CuSO₄ niebieszczeje'},
 O3:{name:'ozon',col:[170,200,255],smell:'ostry, „burzowy”',flam:0,ox:1,tox:2,sol:'słabo',aq:'—',test:'—'}
};
P.gases=GASES;
 
P.gas=(f,Tc,pk)=>{const g=GASES[f]||{name:f},M=P.molarMass(f)||29,T=(Tc==null?20:Tc)+273.15,p=pk||P0,rho=p*M/(R*T),rel=M/M_AIR;
 const col=Array.isArray(g.col)?g.col:g.col?COL(g.col):null;
 return Object.assign({},g,{formula:f,M,rho,rel,buoy:cl((1-rel)*1.4,-1,1),moves:rel<.97?'unosi się (lżejszy od powietrza)':rel>1.03?'opada (cięższy od powietrza)':'miesza się z powietrzem',
  color:col,colorName:col?(g.col==='gas-no2'?'brunatny':'barwny'):'bezbarwny',collect:rel<.97?'nad wodą lub do naczynia odwróconego dnem do góry':rel>1.03?(g.sol==='bardzo dobrze'||g.sol==='dobrze'?'do naczynia ustawionego dnem w dół (wypieranie powietrza)':'nad wodą lub do naczynia dnem w dół'):'nad wodą'})};

const ANT={H2O:{name:'woda',r:[[1,100,8.07131,1730.63,233.426],[99,374,8.14019,1810.94,244.485]]},C2H5OH:{name:'etanol',r:[[-57,80,8.20417,1642.89,230.3],[77,243,7.68117,1332.04,199.2]]},CH3COCH3:{name:'aceton',r:[[-26,77,7.02447,1161.0,224.0]]}};
P.solvents=ANT;
P.vaporPressure=(Tc,sub)=>{const S=ANT[sub]||ANT.H2O;let a=S.r[0];for(const q of S.r)if(Tc>=q[0])a=q;return Math.pow(10,a[2]-a[3]/(a[4]+Tc))*.133322}; 
P.boilingPoint=(pk,sub)=>{const S=ANT[sub]||ANT.H2O,p=(pk||P0)/.133322;let best=null;for(const a of S.r){const T=a[3]/(a[2]-Math.log10(p))-a[4];if(T>=a[0]-2&&T<=a[1]+2){best=T;break}}if(best==null){const a=S.r[S.r.length-1];best=a[3]/(a[2]-Math.log10(p))-a[4]}return best};
 
P.boil=(Tc,o)=>{o=o||{};const sub=o.sub||'H2O',p=o.p||P0,Tb=P.boilingPoint(p,sub),T=Tc==null?25:Tc,pv=P.vaporPressure(Math.min(T,Tb+5),sub),x=pv/p;
 const steam=sstep(.28,1,x),cond=sstep(.12,.45,x),nuc=sstep(Tb-14,Tb-2,T),full=sstep(Tb-1.5,Tb+.5,T);
 const regime=T>=Tb-.5?'wrzenie':nuc>.05?'pęcherzyki pary przy dnie (zanikają w chłodniejszej cieczy)':steam>.05?'intensywne parowanie':'parowanie z powierzchni';
 return{sub,Tb,pv,x,steam,cond,bubbles:Math.max(nuc*.35,full),collapse:1-full,regime,boiling:T>=Tb-.5}};

const RISE=[[.1,.3],[.2,1.2],[.5,6],[1,13],[1.5,18],[2,22],[3,23],[5,22],[8,24],[15,28]];
P.bubbleRise=dmm=>tab(RISE,cl(dmm,.05,20));
 
P.bubbleRate=(o)=>{o=o||{};const T=(o.T==null?25:o.T)+273.15,V=o.V!=null?o.V:(o.n||0)*R*T/(o.p||P0)*1000,d=o.d||2,Vb=Math.PI*Math.pow(d/10,3)/6;return{V,perSec:V/Vb,d,rise:P.bubbleRise(d)}};
 
P.bubbleGrow=(depthCm)=>Math.cbrt((P0+G*1000*depthCm/100/1000)/P0);

const PPT={'ppt-agcl':['serowaty',5.56,60],'ppt-agbr':['serowaty',6.47,50],'ppt-agi':['serowaty',5.68,40],'ppt-baso4':['drobny',4.5,2],'ppt-caco3':['drobny',2.71,5],'ppt-cu-oh-2':['kłaczkowaty',1.15,80],'ppt-fe-oh-3':['kłaczkowaty',1.1,90],'ppt-fe-oh-2':['kłaczkowaty',1.12,80],'ppt-al-oh-3':['kłaczkowaty',1.08,100],'ppt-zn-oh-2':['kłaczkowaty',1.12,70],'ppt-mg-oh-2':['kłaczkowaty',1.15,60],'ppt-ni-oh-2':['kłaczkowaty',1.12,70],'ppt-co-oh-2':['kłaczkowaty',1.12,70],'ppt-mn-oh-2':['kłaczkowaty',1.12,70],'ppt-cr-oh-3':['kłaczkowaty',1.1,80],'ppt-pbi2':['krystaliczny',6.16,30],'ppt-pbcl2':['krystaliczny',5.85,40],'ppt-cus':['drobny',4.6,3],'ppt-pbs':['drobny',7.6,3],'ppt-ag2s':['drobny',7.2,3],'ppt-fes':['drobny',4.8,4],'ppt-zns':['drobny',4.1,3],'ppt-cds':['drobny',4.8,3],'ppt-ag2cro4':['krystaliczny',5.6,20],'ppt-pbcro4':['drobny',6.1,5],'ppt-bacro4':['drobny',4.5,4],'ppt-caso4':['krystaliczny',2.96,25],'ppt-pbso4':['drobny',6.3,4],'ppt-ag3po4':['serowaty',6.37,30]};
 
P.stokes=(dum,rhoP,o)=>{o=o||{};const mu=o.mu||1.0e-3,rl=(o.rhoL||1.0)*1000,d=dum*1e-6;return Math.max(0,(rhoP*1000-rl)*G*d*d/(18*mu))*1000};
P.ppt=(id)=>{const q=PPT[id]||['kłaczkowaty',1.15,60],v=P.stokes(q[2],q[1]);let name=null;try{const r=C.COLORS&&C.COLORS.get&&C.COLORS.get(id);name=r&&r.name}catch(_){}
 return{id,name,habit:q[0],rho:q[1],d:q[2],v,settle10cm:100/Math.max(v,1e-3),haze:q[0]==='drobny'?1:q[0]==='kłaczkowaty'?.55:.25}};

P.vRms=(M,Tc)=>Math.sqrt(3*R*((Tc==null?25:Tc)+273.15)/(M/1000)); 
P.vMean=(M,Tc)=>Math.sqrt(8*R*((Tc==null?25:Tc)+273.15)/(Math.PI*M/1000));
P.vProb=(M,Tc)=>Math.sqrt(2*R*((Tc==null?25:Tc)+273.15)/(M/1000));
 
P.maxwellSample=(M,Tc,rnd)=>{rnd=rnd||Math.random;const s=Math.sqrt(R*((Tc==null?25:Tc)+273.15)/(M/1000)),n=()=>Math.sqrt(-2*Math.log(1-rnd()))*Math.cos(6.2831853*rnd());return Math.hypot(n()*s,n()*s,n()*s)};
 
P.maxwellPDF=(v,M,Tc)=>{const m=M/1000,T=(Tc==null?25:Tc)+273.15,a=m/(2*R*T);return 4*Math.PI*Math.pow(a/Math.PI,1.5)*v*v*Math.exp(-a*v*v)};
 
P.graham=(MA,MB)=>Math.sqrt(MB/MA);
 
P.speedScale=Tc=>Math.sqrt(Math.max(.05,((Tc==null?25:Tc)+273.15)/298.15));

P.audit=()=>{const t=[['Coulomb: 1 µC·1 µC/1 m ≈ 8,99 mN',Math.abs(P.electro.coulomb(1e-6,1e-6,1)-8.99e-3)<1e-4],['elektroskop: indukcja zachowuje ładunek',P.electro.electroscope(0,6,.1,false).Q===0],['wrzenie wody 101,3 kPa ≈ 100 °C',Math.abs(P.boilingPoint(101.325,'H2O')-100)<.5],['wrzenie etanolu ≈ 78 °C',Math.abs(P.boilingPoint(101.325,'C2H5OH')-78.3)<1],['wrzenie wody 70 kPa ≈ 90 °C',Math.abs(P.boilingPoint(70,'H2O')-90)<1.5],
 ['CO₂ cięższy od powietrza',P.gas('CO2').rel>1.4],['H₂ lżejszy',P.gas('H2').rel<.1],['v_rms N₂ 25°C ≈ 515 m/s',Math.abs(P.vRms(28.01,25)-515)<5],['ciało czarne 1500 K czerwonopomarańczowe',P.blackbody(1500)[2]<120],
 ['metan φ=1 ≈ 1950 °C',Math.abs(P.flame({fuel:'CH4',phi:1}).Tc-1950)<120],['metan bogaty świeci',P.flame({fuel:'CH4',phi:1.7}).soot>.6],['barwa Na z CHE.COLORS',!!P.flameColor('Na')]];
 return{ok:t.every(x=>x[1]),tests:t.map(x=>({name:x[0],ok:x[1]}))}};
 
const EC={e:1.602176634e-19,k:8.9875517923e9,eps0:8.8541878128e-12,me:9.1093837015e-31,mp:1.67262192369e-27};
P.electro={CONST:EC,
 coulomb:(q1,q2,r,er)=>EC.k*q1*q2/((er||1)*r*r),           
 field:(q,r,er)=>EC.k*q/((er||1)*r*r),
 fieldAt:(Q,x,y)=>{let ex=0,ey=0;Q.forEach(c=>{const dx=x-c.x,dy=y-c.y,r2=dx*dx+dy*dy+1e-9,r=Math.sqrt(r2),f=EC.k*c.q/r2;ex+=f*dx/r;ey+=f*dy/r});return{x:ex,y:ey}},
 potential:(q,r)=>EC.k*q/r,electrons:q=>q/EC.e,
 share:(q1,q2)=>{const s=(q1+q2)/2;return[s,s]},                 
  
 contact:(qs,Rs)=>{const Q=qs.reduce((a,b)=>a+b,0),R=Rs||qs.map(()=>1),S=R.reduce((a,b)=>a+b,0);return R.map(r=>Q*r/S)},
  
 ground:q=>({after:0,toEarth:q,electrons:Math.abs(q)/EC.e,dir:q<0?'elektrony odpływają z ciała do ziemi':q>0?'elektrony napływają z ziemi do ciała':'brak przepływu'}),
  
 transfer:(qa,qb)=>{const d=qb-qa;return{dq:d,electrons:Math.abs(d)/EC.e,dir:d<0?'ciało przyjęło elektrony':d>0?'ciało oddało elektrony':'bez zmian'}},
  
 electroscope:(Q,qr,d,ground)=>{const s=qr*0.5/(1+Math.pow(Math.max(0,d)/0.18,2));const Qt=ground?-2*s:Q,leaves=Qt/2+s,ball=Qt/2-s;return{Q:Qt,ball,leaves,theta:55*(1-Math.exp(-Math.abs(leaves)/4)),induced:s}},
  
 relax:(rho,L,A,Cap)=>rho*(L||0.3)/(A||1e-4)*(Cap||10e-12)};
C.PHYS=P;
})();