const spEls=k=>Object.keys(CD[k].comp||{});
const ELC={H:5,C:7.5,N:7,O:7,Cl:9,Na:10,Fe:9,Cu:9};
function spSvg(k){
 const c=CD[k];let bd=[],P;
 if(c.m){P=c.a.map(q=>[q[0],q[1],q[2]]);bd=(c.bn||[]).map(q=>[q[0],q[1],q[2]||1])}
 else{const cy=Math.cos(.6),sy=Math.sin(.6),cx=Math.cos(.5),sx=Math.sin(.5);
  P=c.a.map(([e,X,Y,Z])=>{const z1=-X*sy+Z*cy;return [e,X*cy+Z*sy,-(Y*cx-z1*sx),Y*sx+z1*cx]});
  c.a.forEach((p,i)=>c.a.forEach((q,j)=>{if(j>i&&Math.hypot(p[1]-q[1],p[2]-q[2],p[3]-q[3])<=c.b)bd.push([i,j,1])}))}
 const xs=P.map(p=>p[1]),ys=P.map(p=>p[2]),w=Math.max(.8,Math.max(...xs)-Math.min(...xs)),h=Math.max(.8,Math.max(...ys)-Math.min(...ys)),sc=Math.min(84/w,44/h),mx=(Math.max(...xs)+Math.min(...xs))/2,my=(Math.max(...ys)+Math.min(...ys))/2,f=P.length>10?.55:1;
 const X=i=>60+(P[i][1]-mx)*sc,Y=i=>40+(P[i][2]-my)*sc;let o='<svg viewBox="0 0 120 80">';
 bd.forEach(([i,j,n])=>{for(let t=0;t<Math.min(3,n);t++){const d=(t-(Math.min(3,n)-1)/2)*3.2;o+=`<line x1="${X(i)}" y1="${Y(i)+d}" x2="${X(j)}" y2="${Y(j)+d}" stroke="#7a8794" stroke-width="2"/>`}});
 P.map((p,i)=>[p,i]).sort((a,b)=>(a[0][3]||0)-(b[0][3]||0)).forEach(([p,i])=>{const r=(ELC[p[0]]||8)*f;o+=`<circle cx="${X(i)}" cy="${Y(i)}" r="${r}" fill="${EC[p[0]]||'#9aa5b1'}" stroke="#6f7882" stroke-width="1"/>`+(f===1?`<text x="${X(i)}" y="${Y(i)+3.5}" text-anchor="middle" style="font:700 9px Inter,sans-serif;fill:#17212b">${p[0]}</text>`:'')});
 return o+'</svg>'}
function related(){
 const E=curKind==='sp'?spEls(cur):[sym];
 return Object.keys(CD).filter(k=>spEls(k).some(e=>E.includes(e)))}
function renderMols(){
 const L=related(),E=curKind==='sp'?spEls(cur):[sym],hd=curKind==='sp'?`Powiązane z <b>${CD[cur].f}</b> — wspólne pierwiastki: ${E.join(', ')}`:`Cząsteczki i związki zawierające <b>${elName(E0(),lang)} (${sym})</b>`;
 const sec=(t,ks)=>ks.length?`<div class="cg">${t}<small>${ks.length}</small></div><div class="scs">`+ks.map(k=>{const c=CD[k],M=spM(k),sh=spEls(k).filter(e=>E.includes(e));
  return `<button class="sc${curKind==='sp'&&k===cur?' on':''}" data-sp="${k}"><span class="st">${spSvg(k)}</span><b>${c.f}</b><span class="sn">${c.n.split(',')[0]}</span><span class="sm">${M?+M.toFixed(2)+' u':''}${c.mu!=null?' · μ '+c.mu+' D':''}</span><span class="se">${spEls(k).map(e=>`<i class="${sh.includes(e)?'sh':''}">${e}${c.comp[e]>1?'<sub>'+c.comp[e]+'</sub>':''}</i>`).join('')}</span></button>`}).join('')+'</div>':'';
 $('mols').innerHTML=`<p class="mhd">${hd}</p>`+(L.length?sec('Cząsteczki pierwiastków',L.filter(k=>CD[k].m&&spEls(k).length===1))+sec('Związki cząsteczkowe',L.filter(k=>CD[k].m&&spEls(k).length>1))+sec('Kryształy jonowe',L.filter(k=>!CD[k].m)):'<div class="sub">W bazie nie ma jeszcze cząsteczek ani związków z tym pierwiastkiem.</div>');
 $('mols').querySelectorAll('[data-sp]').forEach(b=>b.onclick=()=>pick(b.dataset.sp,'sp','forms'))}
const E0=()=>DB[sym]||stub(sym);
function spHud(){
 const c=CD[cur],kd=spKind(cur),M=spM(cur);
 $('hud').innerHTML=`<span class="hic">${IC[kd]}</span><em>${c.f}</em><span>${c.n}</span><span>${KIND[kd]} · ${spCls(cur)}</span>${M?`<span>${+M.toFixed(2)} u</span>`:''}<div class="isos"><small>skład — kliknij, by zobaczyć atom</small>${spEls(cur).map(q=>`<button data-el="${q}">${q}${c.comp[q]>1?'<sub>'+c.comp[q]+'</sub>':''}</button>`).join('')}</div>`;
 $('hud').querySelectorAll('[data-el]').forEach(b=>b.onclick=()=>go(b.dataset.el))}
function spIso(){
 const c=CD[cur];let P=0,N=0;
 const cards=spEls(cur).map(q=>{const e=DB[q]||stub(q),n=c.comp[q],iso=isotopeData(e),top=iso.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A=top?top.A:Math.round(e.m||e.z*2);P+=n*e.z;N+=n*(A-e.z);
  return `<div class="card"><h4>${elName(e,lang)} (${q}) <small>× ${n} w ${c.f}</small></h4>`+(iso.length?iso.map(i=>`<button class="irow" data-q="${q}" data-a="${i.A}"><sup>${i.A}</sup>${q}<span class="ib"><i style="width:${Math.max(i.ab||0,i.ab?2:0)}%"></i></span><em>${i.ab?i.ab+' %':'promieniotwórczy · T½ '+i.hl}</em></button>`).join(''):'<div class="sub">Brak danych o izotopach w bazie.</div>')+'</div>'}).join('');
 $('spiso').innerHTML=`<p class="mhd">Izotopy pierwiastków w <b>${c.f}</b>. Cząsteczka z najpospolitszych izotopów: <b>${P} p⁺ · ${N} n⁰ · ${P} e⁻</b>. Kliknij izotop, by zobaczyć jego jądro.</p><div class="nuc-grid">${cards}</div>`;
 $('spiso').querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{go(b.dataset.q);isoA=+b.dataset.a;hud();zt=zNuc;showTab('atom')})}
function nucMode(){const sp=curKind==='sp';$('spiso').style.display=sp?'':'none';document.querySelector('#spiso+.nuc-grid').style.display=sp?'none':'';if(sp)spIso()}
function showTab(t){
 document.querySelectorAll('.tabnav button').forEach(x=>x.classList.toggle('on',x.dataset.tab===t));
 document.querySelectorAll('.tabpane').forEach(p=>p.classList.toggle('show',p.dataset.tab===t));
 if(t==='forms'){cmpUI();vw()}if(t==='mol')renderMols();if(t==='nucleus')nucMode()}
function applyMode(){
 const sp=curKind==='sp';document.body.classList.toggle('sp-mode',sp);
 document.querySelector('.tabnav [data-tab=nucleus]').textContent=sp?'Izotopy':'Jądro i fazy';
 const on=document.querySelector('.tabnav button.on');
 if(!on||on.offsetParent===null||(!sp&&on.dataset.tab==='forms'))showTab(sp?'forms':'atom');
 else showTab(on.dataset.tab);
 nucMode();renderMols()}
const _hud2=hud;hud=function(){curKind==='sp'?spHud():_hud2()};

function datasheet(){const{e,c}=state(),isoRows=isotopeData(e),x=e.x||{},n=NAMES[sym]||[],V=(v,u)=>v==null?null:`${+(+v).toPrecision(5)} <u>${u}</u>`,
 T=k=>k==null?null:`${+(+k).toFixed(1)} <u>K</u> · ${(k-273.15).toFixed(0)} <u>°C</u> · ${(k*9/5-459.67).toFixed(0)} <u>°F</u>`,
 r=(a,b)=>`<div class="dr${b==null||b===''?' na':''}"><span>${a}</span><b>${b==null||b===''?'—':b}</b></div>`,g=(t,x)=>`<div class="dg"><h5>${t}</h5>${x.join('')}</div>`,sh={};
 ORDER.forEach(k=>{if(c[k])sh[k[0]]=(sh[k[0]]||0)+c[k]});
 const redox=Object.entries(REDOX).filter(([k])=>k.split('/')[1]===sym).map(([k,v])=>k+' '+v+' V').join('<br>'),
 iso=isoRows.map(i=>`<sup>${i.A}</sup>${sym} ${i.ab!=null?i.ab+' %':(i.abundance!=null?(i.abundance*100).toFixed(2)+' %':(i.hl||i.halfLife||(i.halfLife_s!=null?i.halfLife_s+' s':'')))}`).join('<br>'),ie=e.ie||[];
 return g('Identyfikacja',[r('Nazwa (PL)',n[0]||e.n),r('English',n[1]),r('Deutsch',n[2]),r('Latina',n[3]),r('Symbol · Z',sym+' · '+e.z),r('Masa atomowa',V(e.m,'u')),r('Układ',`${gtxt(e)} · okres ${e.p} · blok ${e.b}`),r('Kategoria',e.t)])
 +g('Struktura atomowa',[r(chg?'Konfiguracja jonu':'Konfiguracja',ORDER.filter(k=>c[k]).map(k=>k+sup(c[k])).join(' ')),r('Elektrony / powłoka',Object.values(sh).join(' · ')),r('Elektronoujemność χ',V(e.en,'Pauling')),r('Promień atomowy',V(e.ar,'pm')),r('Promień kowalencyjny',V(e.cr,'pm')),r('Promień vdW',V(e.vdw,'pm')),r('Promienie jonowe',e.ion&&Object.entries(e.ion).map(([k,v])=>k+' '+v+' pm').join('<br>')),r('Powinowactwo e⁻',V(e.ea,'kJ/mol')),r('I₁ · I₂ · I₃',ie.length?ie.slice(0,3).join(' · ')+' <u>kJ/mol</u>':null)])
 +g('Właściwości fizyczne',[r('Stan (25 °C)',e.st),r('Temp. topnienia',T(e.mp)),r('Temp. wrzenia',T(e.bp)),r('Zakres cieczy',e.mp&&e.bp?V(e.bp-e.mp,'K'):null),r('Gęstość',V(e.rho,'g/cm³')),r('Sieć krystaliczna',e.cs),r('Polaryzowalność',V(e.pol,'Å³')),r('Gęstość cieczy (T topn.)',V(x.rhol,'g/cm³')),r('Ciepło topnienia',V(x.hf,'kJ/mol')),r('Ciepło parowania',V(x.hv,'kJ/mol')),r('Molowe ciepło właściwe',V(x.cp,'J/(mol·K)')),r('Przewodność cieplna',V(x.k,'W/(m·K)')),r('Rozszerzalność cieplna',V(x.al,'µm/(m·K)')),r('Opór elektryczny (20 °C)',V(x.res,'nΩ·m')),r('Prędkość dźwięku',V(x.v,'m/s'))])+g('Mechanika i magnetyzm',[r('Moduł Younga',V(x.E,'GPa')),r('Moduł ścinania',V(x.G,'GPa')),r('Moduł objętościowy',V(x.K,'GPa')),r('Liczba Poissona',x.nu),r('Skala Mohsa',x.mohs),r('Twardość Vickersa',V(x.hv2,'MPa')),r('Twardość Brinella',x.br&&x.br+' <u>MPa</u>'),r('Punkt Curie',x.curie&&T(x.curie)),r('Uporządkowanie magnetyczne',x.mag)])+g('Rejestr',[r('Numer CAS',x.cas),r('Odkrycie',x.hist),r('Parametr sieci a',V(x.a,'pm'))])
 +g('Chemia',[r('Stopnie utlenienia',e.ox&&e.ox.map(q=>q>0?'+'+q:q).join(' ')),r('Potencjały E° (SHE)',redox),r('Związki w bazie',Object.keys(CD).filter(k=>spEls(k).includes(sym)).map(k=>CD[k].f).join(', '))])
 +g('Jądro i izotopy',[r('Izotopy',iso),r('Liczba nuklidów w bazie',isoRows.length||null)])}

function ldt(q,sz){const c=fill(SYM.indexOf(q)+1),N=Math.max(...Object.keys(c).map(k=>+k[0])),v=Math.min(8,Object.entries(c).filter(([k])=>+k[0]===N).reduce((a,[,x])=>a+x,0));
 return `<span class="ldt"${sz?` style="--s:${sz}px"`:''}><b>${q}</b>${Array.from({length:v},(_,i)=>`<i style="transform:rotate(${i*360/v}deg) translateY(calc(var(--s)*-.38))"></i>`).join('')}</span>`}
const MC={H:'#b9c4cf',C:'#8f99a5',N:'#6aa7e0',O:'#e0524f',Cl:'#7fd19a',Na:'#b49cf7'},MR={H:9,C:15,N:14,O:14,Cl:17,Na:18};
const MOL=[
{f:'H₂',n:'wodór',g:'liniowa',a:[['H',-.6,0],['H',.6,0]],b:[[0,1,1]],bl:'H–H 74,1 pm',an:'—',mu:0},
{f:'O₂',n:'tlen',g:'liniowa',a:[['O',-.7,0],['O',.7,0]],b:[[0,1,2]],bl:'O=O 120,7 pm',an:'—',mu:0},
{f:'N₂',n:'azot',g:'liniowa',a:[['N',-.65,0],['N',.65,0]],b:[[0,1,3]],bl:'N≡N 109,8 pm',an:'—',mu:0},
{f:'H₂O',n:'woda',g:'kątowa (AX₂E₂)',a:[['O',0,-.35],['H',-.95,.4],['H',.95,.4]],b:[[0,1,1],[0,2,1]],bl:'O–H 95,8 pm',an:'H–O–H 104,5°',mu:1.85},
{f:'CO₂',n:'ditlenek węgla',g:'liniowa (AX₂)',a:[['C',0,0],['O',-1.35,0],['O',1.35,0]],b:[[0,1,2],[0,2,2]],bl:'C=O 116,3 pm',an:'O=C=O 180°',mu:0},
{f:'NH₃',n:'amoniak',g:'piramida trygonalna (AX₃E)',a:[['N',0,-.4],['H',-1,.55],['H',1,.55],['H',0,.95]],b:[[0,1,1],[0,2,1],[0,3,1]],bl:'N–H 101,2 pm',an:'H–N–H 107,8°',mu:1.47},
{f:'CH₄',n:'metan',g:'tetraedr (AX₄), rzut',a:[['C',0,0],['H',-.95,-.7],['H',.95,-.7],['H',-.6,.9],['H',.6,.9]],b:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],bl:'C–H 108,7 pm',an:'H–C–H 109,5°',mu:0},
{f:'HCl',n:'chlorowodór',g:'liniowa',a:[['H',-.85,0],['Cl',.85,0]],b:[[0,1,1]],bl:'H–Cl 127,5 pm',an:'—',mu:1.08},
{f:'NaCl',n:'chlorek sodu (para jonowa, gaz)',g:'liniowa, wiązanie jonowe',a:[['Na',-1,0],['Cl',1,0]],b:[[0,1,0]],bl:'Na–Cl 236 pm',an:'—',mu:9.0}];
DB.Fe.x={hf:13.81,hv:340,cp:25.10,k:80.4,al:11.8,res:96.1,v:5120,rhol:6.98,E:211,G:82,K:170,nu:.29,mohs:4,hv2:608,br:'200–1180',curie:1043,mag:'ferromagnetyk',cas:'7439-89-6',hist:'przed 5000 p.n.e.',a:286.65,
 allo:[{n:'α',s:'bcc',t0:0,t1:912},{n:'γ',s:'fcc',t0:912,t1:1394},{n:'δ',s:'bcc',t0:1394,t1:1538}],
 forms:[['monokryształ czystego Fe',10],['żelazo z węglem',140],['drobnoziarniste',340],['zimnowalcowane',690],['whiskery',11000]]};
function matl(){const{e}=state(),x=e.x||{},C=k=>k-273.15;if(!e.mp||!e.bp)return'<div class="wide sub">Brak danych topnienia i wrzenia dla tego pierwiastka.</div>';
 const mp=C(e.mp),bp=C(e.bp),mx=Math.ceil(bp*1.08/500)*500,W=760,X=t=>16+t/mx*(W-32),CL={'α':'#5f93c9','γ':'#7fb069','δ':'#e8a33d'},sg=[],cu=x.curie?C(x.curie):null;
 if(x.allo)x.allo.forEach(a=>{if(a.n==='α'&&cu&&cu<a.t1){sg.push([a.t0,cu,CL[a.n],a.n+' '+a.s+' · ferro']);sg.push([cu,a.t1,'#86b3dd',a.n+' '+a.s+' · para'])}else sg.push([a.t0,a.t1,CL[a.n]||'#7fb069',a.n+' '+a.s])});else sg.push([0,mp,'#5f93c9','ciało stałe']);
 sg.push([mp,bp,'#e0674a','ciecz']);sg.push([bp,mx,'#c78ca8','gaz']);
 let a='<svg viewBox="0 0 760 178">';
 sg.forEach(([t0,t1,c,l],i)=>{a+=`<rect x="${X(t0)}" y="40" width="${X(t1)-X(t0)}" height="38" fill="${c}"/>`;if(i)a+=`<text x="${X(t0)}" y="32" text-anchor="middle" style="fill:var(--tx)">${t0.toFixed(0)}</text>`;
  const y=104+(i%3)*15;a+=`<path d="M${(X(t0)+X(t1))/2} 78V${y-10}" stroke="#667284"/><text x="${(X(t0)+X(t1))/2}" y="${y}" text-anchor="middle" style="fill:${c}">${l}</text>`});
 for(let t=0;t<=mx;t+=500)a+=`<text x="${X(t)}" y="172" text-anchor="middle">${t}</text>`;
 a+=`<text x="${W-16}" y="20" text-anchor="end">°C</text></svg>`;
 const bar=(rows,max,u)=>`<svg viewBox="0 0 360 ${rows.length*26+4}">`+rows.map(([l,v],i)=>`<text x="0" y="${i*26+16}" style="fill:var(--tx)">${l}</text><rect x="130" y="${i*26+4}" width="${Math.max(2,v/max*170)}" height="16" fill="var(--v)" opacity=".85"/><text x="${134+v/max*170}" y="${i*26+16}">${v} ${u}</text>`).join('')+'</svg>';
 const mech=['E','K','G'].filter(k=>x[k]).map(k=>[{E:'Younga E',K:'objętościowy K',G:'ścinania G'}[k],x[k]]);
 let h=`<div class="wide"><h5>Diagram faz i alotropy · °C</h5>${a}<div class="nt">${x.allo?'Przejścia alotropowe: <b>'+x.allo.slice(1).map(q=>q.t0+' °C ('+q.n+')').join(', ')+'</b>. ':''}${cu?'Punkt Curie <b>'+cu.toFixed(0)+' °C</b> — zmiana domen magnetycznych bez zmiany struktury krystalicznej. ':''}Zakres cieczy: <b>${(bp-mp).toFixed(0)} K</b>.</div></div>`;
 if(mech.length)h+=`<div><h5>Sprężystość · GPa</h5>${bar(mech,300,'GPa')}<div class="nt">${x.nu?'Liczba Poissona <b>'+x.nu+'</b>. ':''}${x.mohs?'Mohs <b>'+x.mohs+'</b>/10. ':''}${x.hv2?'Vickers <b>'+x.hv2+' MPa</b>.':''}</div></div>`;
 if(x.hf&&x.hv)h+=`<div><h5>Bilans energii przemian · kJ/mol</h5>${bar([['topnienie',x.hf],['parowanie',x.hv]],x.hv,'kJ/mol')}<div class="nt">Parowanie kosztuje <b>${(x.hv/x.hf).toFixed(1)}×</b> więcej energii niż topnienie: przy parowaniu zrywane są wszystkie wiązania metaliczne.</div></div>`;
 if(x.forms){const f=x.forms,L=Math.log10;h+=`<div><h5>Wytrzymałość na rozciąganie · MPa (log)</h5><svg viewBox="0 0 360 ${f.length*26+4}">`+f.map(([l,v],i)=>`<text x="0" y="${i*26+16}" style="fill:var(--tx);font-size:11px">${l}</text><rect x="150" y="${i*26+4}" width="${Math.max(2,(L(v)-0)/4.2*150)}" height="16" fill="#7fb069" opacity=".85"/><text x="${154+L(v)/4.2*150}" y="${i*26+16}">${v}</text>`).join('')+`</svg><div class="nt">Ta sama substancja, różne mikrostruktury: rozrzut ponad <b>3 rzędy wielkości</b>. Źródło: Wikipedia (Iron).</div></div>`}
 return h}

