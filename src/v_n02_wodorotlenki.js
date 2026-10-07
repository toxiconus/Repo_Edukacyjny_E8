;/* ===== N02 WODOROTLENKI — widoki silnika (zastępują widgety wbudowane w HTML lekcji N02 i stare widoki legacy):
   n02-wzory-v01 (kation + OH⁻: bilans ładunków, nawias, modele A/B/jony, sprawdzanie wzoru — dawniej Wzórometr, Bilansator, Konstruktor, animacja nawiasu),
   n02-przeglad-v01 (kafelki: rozpuszczalność z D.SOLUBILITY_TABLE, barwa, odczyn, dysocjacja, metody otrzymywania),
   n02-otrzymywanie-v01 (trzy metody + mapa przemian; zlewka GFX.rx), n02-stracanie-v01 (laboratorium jonowe: CHE.sim.ParticleSim + równania jonowe CHE.IONIC),
   n02-zobojetnianie-v01 (bilans moli, pH z Kw, wskaźniki z CHE.COLORS, jony GFX.ions, krzywa pH), n02-dysocjacja-v01 (rozpuszczanie, hydratacja, cztery pytania, efekt cieplny),
   n02-reaktor-v01 (wodorotlenek + odczynnik: przewiduj → sprawdź → animacja). Model: CHE.HYDROXIDES. ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function HY(){return C.HYDROXIDES}function G(){return C.LAB&&C.LAB.GFX}function D(){return C.DATA||{}}
function btn(bar,t,f,cls){var b=el('button',cls||null,t);b.type='button';b.onclick=f;bar.appendChild(b);return b}
function seg(bar,items,cur,f){var bs=[];items.forEach(function(it){var b=btn(bar,it[1],function(){bs.forEach(function(q){q.classList.toggle('on',q===b)});f(it[0])});if(it[0]===cur)b.classList.add('on');bs.push(b)});return bs}
function hex(a){return'#'+a.slice(0,3).map(function(v){return(Math.max(0,Math.min(255,v|0))).toString(16).padStart(2,'0')}).join('')}
function rgbCss(a){return a?'rgb('+a.map(function(v){return v|0}).join(',')+')':'#e2e8f0'}
function ind(id,pH){try{return G().colors.at(id,Math.max(0,Math.min(14,pH)))}catch(_){return null}}
function fmt(v,d){if(!isFinite(v))return'—';return(Math.round(v*Math.pow(10,d))/Math.pow(10,d)).toString().replace('.',',')}
function card(t,b,col){return'<div style="border:1px solid var(--border,#e2e8f0);border-left:4px solid '+(col||'var(--accent,#0d6868)')+';border-radius:10px;padding:8px 12px;margin:6px 0;background:var(--panel,#fff)"><b>'+t+'</b><div style="margin-top:3px">'+b+'</div></div>'}
function eqHtml(e){return e?'<div style="font:700 15px ui-monospace,Consolas,monospace;margin:4px 0;overflow-wrap:anywhere">'+e+'</div>':''}
function grid(host,min){var g=el('div');g.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,'+(min||300)+'px),1fr));gap:12px;align-items:start';host.appendChild(g);return g}
var SOLC={R:'#16a34a',T:'#d97706',N:'#dc2626','—':'#64748b'};var SOLS={R:'✓',T:'~',N:'×','—':'!'};
var LVN={E8:1,AMB:2,LO:3};
function pptId(r){return'ppt-'+r.metal.toLowerCase()+'-oh-'+r.q}
function catCol(r){var k={Cu:'ion-cu2',Fe:r.q===3?'ion-fe3':'ion-fe2',Ni:'ion-ni2',Mn:'ion-mn2',Cr:'ion-cr3'}[r.metal];var a=null;try{a=k&&G()&&G().colors.at(k)}catch(_){}return a?hex(a):'#64748b'}

/* ---------- 1. WZÓR: kation + OH⁻ ---------- */
function modelSVG(r,n,mode){var W=420,H=Math.max(150,60+n*44),cx=70,cy=H/2,M=r.metal,s='<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;max-width:460px;height:auto;display:block;margin:auto" role="img" aria-label="model wodorotlenku">';
 var txt=function(x,y,t,sz,col,w){return'<text x="'+x+'" y="'+y+'" font-size="'+(sz||18)+'" font-weight="'+(w||800)+'" text-anchor="middle" dominant-baseline="middle" fill="'+(col||'currentColor')+'">'+t+'</text>'};
 if(mode==='A'){s+=txt(cx,cy,M,24);for(var i=0;i<n;i++){var y=n===1?cy:30+i*(H-60)/Math.max(1,n-1);s+='<line x1="'+(cx+18)+'" y1="'+cy+'" x2="'+(cx+118)+'" y2="'+y+'" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>'+txt(cx+135,y,'O',20,'#dc2626')+'<line x1="'+(cx+150)+'" y1="'+y+'" x2="'+(cx+196)+'" y2="'+y+'" stroke="currentColor" stroke-width="2.5"/>'+txt(cx+210,y,'H',20,'#0f766e')}
  s+='<text x="8" y="'+(H-8)+'" font-size="11" font-weight="600" fill="#64748b">- - - oddziaływanie jonowe M···O    —— wiązanie O–H</text>'}
 else if(mode==='B'){cx=W/2-40;s+=txt(cx,cy,M+'<tspan font-size="12" dy="-8">'+(r.q>1?r.q:'')+'+</tspan>',24);for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/Math.max(1,n)+(n===2?Math.PI/2:0),R=Math.min(H/2-22,110),x=cx+Math.cos(a)*R,yy=cy+Math.sin(a)*R;
   s+='<line x1="'+(cx+Math.cos(a)*24)+'" y1="'+(cy+Math.sin(a)*24)+'" x2="'+(x-Math.cos(a)*26)+'" y2="'+(yy-Math.sin(a)*14)+'" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/><rect x="'+(x-26)+'" y="'+(yy-14)+'" width="52" height="28" rx="8" fill="#dbeafe" stroke="#2563eb"/>'+txt(x,yy,'OH⁻',14,'#1e3a8a')}
  s+=txt(W-70,H-14,'blok OH⁻ = jedna całość',11,'#64748b',600)}
 else{s+='<circle cx="'+cx+'" cy="'+cy+'" r="28" fill="#94a3b8"/>'+txt(cx,cy,r.cation,15,'#fff');for(var k=0;k<n;k++){var x2=170+(k%4)*58,y2=n<=4?cy:cy-24+Math.floor(k/4)*48;s+='<circle cx="'+x2+'" cy="'+y2+'" r="21" fill="#2563eb"/>'+txt(x2,y2,'OH⁻',13,'#fff')}
  var sum=r.q-n;s+=txt(W/2,H-14,'(+'+r.q+') + '+n+'·(−1) = '+(sum>0?'+':'')+sum+(sum===0?'  ✓ obojętny':'  ✗'),13,sum===0?'#16a34a':'#dc2626',800)}
 return s+'</svg>'}
V.define('n02-wzory-v01',{title:'Wzór wodorotlenku: kation + OH⁻ — bilans ładunków, nawias, modele',tag:'E8',
 hint:'Wybierz kation i dokładaj grupy OH⁻, aż suma ładunków wyniesie zero. Przełączaj model: szkolny (A), przestrzenny (B) lub jony. Wpisz wzór — silnik sprawdzi, czy nawias i liczba grup są poprawne.',
 foot:'Model: CHE.HYDROXIDES.build / check (zapis składu M(OH)n — to nie wzór strukturalny cząsteczki; w krysztale jest sieć jonów).',
 build:function(host){host.innerHTML='';var H=HY(),cats=H.cations(),st={r:H.get('Ca(OH)2'),n:1,mode:'A'};
  var bar=el('div','r','<b>Kation:</b> ');host.appendChild(bar);var cb=[];cats.forEach(function(c){var b=btn(bar,c.ion,function(){st.r=H.get(c.f);st.n=1;cb.forEach(function(q){q.classList.toggle('on',q===b)});draw()});if(c.f===st.r.f)b.classList.add('on');cb.push(b)});
  var b2=el('div','r');host.appendChild(b2);btn(b2,'− OH⁻',function(){if(st.n>1){st.n--;draw()}});btn(b2,'+ OH⁻',function(){if(st.n<6){st.n++;draw()}});btn(b2,'dobierz automatycznie',function(){st.n=st.r.q;draw()});
  var sp=el('span',null,' <b style="margin-left:12px">Model:</b> ');b2.appendChild(sp);seg(b2,[['A','A — szkolny'],['B','B — przestrzenny'],['ions','jony']],'A',function(m){st.mode=m;draw()});
  var g=grid(host,300),L=el('div'),R=el('div');g.append(L,R);
  var inp=el('div','r','<b>Sprawdź swój wzór:</b> ');var ii=el('input');ii.placeholder='np. CaOH2 albo Ca(OH)2';ii.style.cssText='font:600 15px ui-monospace,Consolas,monospace;padding:5px 8px;border-radius:8px;border:1px solid var(--border,#cbd5e1);min-width:160px';inp.appendChild(ii);var out=el('div');
  btn(inp,'Sprawdź',function(){var c=H.check(ii.value,st.r.metal,st.r.q);out.innerHTML=card(c.ok?'✓ Dobrze':'✗ Popraw',c.msg,c.ok?'#16a34a':'#dc2626')});host.append(inp,out);
  var br=el('div');host.appendChild(br);
  function bracketDemo(){var b=H.build(st.r.metal,st.r.q);if(!b.bracket){br.innerHTML=card('Nawias','Jedna grupa OH⁻ → bez nawiasu: <b>'+b.pretty+'</b>.','#64748b');return}
   var wrong=st.r.metal+'OH'+st.r.q,wa=H.atoms(wrong),ra=H.atoms(b.f),f=function(a){return Object.keys(a).map(function(k){return a[k]+' '+k}).join(', ')};
   br.innerHTML=card('Dlaczego nawias? (4 kroki)','<ol style="margin:4px 0 0 18px"><li>Błędny zapis: <b style="color:#dc2626">'+H.pretty(wrong)+'</b> — indeks '+st.r.q+' stoi tylko przy H.</li><li>Skład zapisu błędnego: '+f(wa)+' → tylko 1 grupa OH i nadmiar H.</li><li>Poprawnie: <b style="color:#16a34a">'+b.pretty+'</b> — nawias = „pudełko” na grupę.</li><li>Skład: '+f(ra)+' → '+st.r.q+' całe grupy OH⁻, ładunki: '+b.charge+'.</li></ol>','#d97706')}
  function draw(){var r=st.r,n=st.n,ok=n===r.q,f=r.metal+(n>1?'(OH)'+n:'OH');
   var bars='<div style="display:flex;gap:4px;flex-wrap:wrap;margin:6px 0">'+Array(r.q+1).join('<span style="width:26px;height:26px;border-radius:6px;background:#dc2626;color:#fff;font:800 16px system-ui;display:inline-flex;align-items:center;justify-content:center">+</span>')+'<span style="width:14px"></span>'+Array(n+1).join('<span style="width:26px;height:26px;border-radius:6px;background:#2563eb;color:#fff;font:800 16px system-ui;display:inline-flex;align-items:center;justify-content:center">−</span>')+'</div>';
   L.innerHTML=modelSVG(r,n,st.mode)+'<div style="text-align:center;font:800 28px ui-monospace,Consolas,monospace;margin-top:4px;color:'+(ok?'#16a34a':'#dc2626')+'">'+H.pretty(f)+'</div>';
   var b=H.build(r.metal,r.q);R.innerHTML=card('Bilans ładunków',bars+'(+'+r.q+') + '+n+'·(−1) = <b>'+(r.q-n>0?'+':'')+(r.q-n)+'</b> '+(ok?'✓ związek obojętny':r.q>n?'→ dołóż OH⁻':'→ za dużo OH⁻'),ok?'#16a34a':'#dc2626')
    +(ok?card(b.pretty+' — '+b.name,'<ol style="margin:4px 0 0 18px">'+b.steps.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ol>'):card('Wskazówka','Kation '+r.cation+' potrzebuje tylu grup OH⁻, ile wynosi wartość jego ładunku.','#64748b'));bracketDemo()}
  draw()}});

/* ---------- 2. PRZEGLĄD ---------- */
V.define('n02-przeglad-v01',{title:'Wodorotlenki — rozpuszczalność, barwa osadu, odczyn i otrzymywanie',tag:'E8',
 hint:'Kolor ramki = rozpuszczalność (z tabeli rozpuszczalności silnika), kropka = barwa substancji / osadu. Kliknij kafelek: cztery pytania (co to jest, czy się rozpuszcza, co jest w roztworze, jaki odczyn) i które metody otrzymywania działają.',
 foot:'Dane: CHE.DATA.HYDROXIDES + D.SOLUBILITY_TABLE (OH⁻) · równania: D.REACTIONS · rozpuszczalności g/100 g — orientacyjne (20 °C).',
 build:function(host){host.innerHTML='';var H=HY(),st={lv:1,f:'NaOH'};
  var bar=el('div','r');host.appendChild(bar);seg(bar,[[1,'E8'],[2,'+ ambitne'],[3,'+ liceum']],1,function(v){st.lv=v;tiles()});
  bar.appendChild(el('span',null,'<span style="margin-left:12px;font:600 12px system-ui">'+['R','T','N'].map(function(s){return'<span style="color:'+SOLC[s]+';margin-right:10px">'+SOLS[s]+' '+{R:'dobrze rozpuszczalny',T:'trudno',N:'praktycznie nierozpuszczalny (osad ↓)'}[s]+'</span>'}).join('')+'</span>'));
  var tg=el('div');tg.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(124px,1fr));gap:8px;margin:8px 0';host.appendChild(tg);var det=el('div');host.appendChild(det);
  function tiles(){tg.innerHTML='';H.list(function(r){return(LVN[r.level]||1)<=st.lv}).forEach(function(r){var s=H.solubility(r.f),b=el('button');b.type='button';
   b.style.cssText='display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;white-space:normal;height:auto;min-height:0;overflow:hidden;text-align:left;padding:8px;border-radius:10px;border:2px solid '+(SOLC[s.s]||'#64748b')+';background:var(--panel,#fff);cursor:pointer;color:inherit;font:inherit'+(r.f===st.f?';box-shadow:0 0 0 3px var(--accent-soft,#99f6e4)':'');
   b.innerHTML='<b style="display:block;font:800 16px Inter,system-ui,sans-serif;white-space:nowrap">'+r.pretty+'</b><small style="display:flex;align-items:center;gap:5px;margin-top:3px;white-space:nowrap"><span style="flex:none;width:12px;height:12px;border-radius:50%;background:'+r.hex+';border:1px solid #94a3b8"></span>'+r.cation+' · <b style="color:'+(SOLC[s.s]||'')+'">'+(SOLS[s.s]||'?')+'</b>'+(r.amph?' · amf.':'')+'</small>';
   b.onclick=function(){st.f=r.f;tiles()};tg.appendChild(b)});show()}
  function show(){var r=H.get(st.f),s=H.solubility(r.f),d=H.dissociation(r.f),ob=H.obtain(r.f);
   det.innerHTML='<h3 style="margin:6px 0">'+r.pretty+' — '+r.name+'</h3>'+'<div class="table-wrap"><table><tbody>'
    +'<tr><th>Co to jest?</th><td>kation '+r.cation+' + '+r.q+' × OH⁻ → '+r.pretty+(r.amph?' · <b>amfoteryczny</b> (reaguje z kwasami i z mocnymi zasadami)':'')+'</td></tr>'
    +'<tr><th>Czy się rozpuszcza?</th><td><b style="color:'+(SOLC[s.s]||'')+'">'+s.label+'</b>'+(s.g100!=null?' (ok. '+fmt(s.g100,s.g100<0.01?4:s.g100<1?3:1)+' g / 100 g wody)':'')+' <small>źródło: '+s.source+'</small></td></tr>'
    +'<tr><th>Co jest w roztworze?</th><td>'+d.eq+'<br><small>'+d.note+'</small></td></tr>'
    +'<tr><th>Jaki odczyn?</th><td>'+s.odczyn+(s.ph?' (pH ≈ '+fmt(s.ph,1)+')':'')+(s.base?' — to <b>zasada</b> (roztwór)':'')+'</td></tr>'
    +'<tr><th>Barwa</th><td><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:'+r.hex+';border:1px solid #94a3b8;vertical-align:-2px"></span> '+r.color+'</td></tr>'
    +'</tbody></table></div>'+'<h4 style="margin:10px 0 4px">Jak go otrzymać?</h4>'+ob.map(function(o){return card((o.ok?'✓ ':'✗ ')+o.title,o.ok?eqHtml(o.eq)+'<small>'+o.cond+(o.obs?' · obserwacja: '+o.obs:'')+(o.safety?' · BHP: '+o.safety:'')+'</small>':'<small>'+o.why+'</small>',o.ok?'#16a34a':'#94a3b8')}).join('')
    +(r.notes.length?card('Warto wiedzieć','<ul style="margin:2px 0 0 18px">'+r.notes.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul>','#64748b'):'')}
  tiles()}});

/* ---------- 3. OTRZYMYWANIE ---------- */
var MTYPES=[['tlenek zasadowy + woda','1. tlenek + woda'],['metal + woda','2. metal aktywny + woda'],['strącanie wodorotlenku','3. sól + zasada (strącanie)']];
function rxOfType(t){var RD=D().REACTION_DATA||{},R=D().REACTIONS||{},H=HY();return Object.keys(RD).filter(function(k){if(!R[k])return false;var ty=RD[k].type;if(ty===t)return R[k].products.some(function(p){return H.get(p.formula)||p.formula==='Ag2O'});if(t==='metal + woda'&&k==='naH2o')return true;if(t==='strącanie wodorotlenku'&&/^(cuso4Naoh|fecl3Naoh)$/.test(k))return true;return false})}
function specFor(k){var g=G();if(!g||!g.rx)return null;if(g.rx.get(k))return k;var l=g.rx.list(function(sp){return sp.rxKey===k});return l[0]||null}
function beaker(box,k,h){box.innerHTML='';var g=G();k=specFor(k)||k;if(!g||!g.rx||!g.rx.get(k)){box.innerHTML='<div class="note">Brak animacji dla tej reakcji — opis i równanie poniżej.</div>';return null}var m=g.rx.mount(box,k,{height:h||240,dur:6,auto:true});var b=el('div','r');var x=btn(b,'▶ powtórz',function(){m.play()});box.appendChild(b);return m}
function rxCard(k){var H=HY(),d=(D().REACTION_DATA||{})[k]||{},J=null;try{J=C.IONIC&&C.IONIC.equations(k)}catch(_){}
 return eqHtml(H.eq(k))+(J&&J.ionic&&J.net?'<div><b>Jonowo skrócone:</b> '+J.net+'</div>':'')+'<div class="note" style="margin-top:6px"><b>Warunki:</b> '+(d.conditions||'—')+'<br><b>Obserwacja:</b> '+(d.observation||'—')+(d.safety&&d.safety.length?'<br><b>BHP:</b> '+d.safety.join(' '):'')+(d.note?'<br><small>'+d.note+'</small>':'')+'<br><small>poziom: '+(d.level||'E8')+' · klucz silnika: '+k+'</small></div>'}
V.define('n02-otrzymywanie-v01',{title:'Otrzymywanie wodorotlenków — trzy metody i mapa przemian',tag:'E8',
 hint:'Wybierz metodę i reakcję — zobaczysz doświadczenie w zlewce, równanie i warunki. W trybie „Jak otrzymać…?” silnik sprawdza dla wybranego wodorotlenku, które metody działają, a które nie — i dlaczego.',
 foot:'Równania: D.REACTIONS (gen_hydroxides.py / gen_oxides.py) · animacja: GFX.rx · reguły: CHE.HYDROXIDES.obtain.',
 build:function(host){host.innerHTML='';var H=HY(),st={mode:'m',t:MTYPES[0][0],k:null,f:'Ca(OH)2'};
  var top=el('div','r');host.appendChild(top);seg(top,[['m','Metody'],['f','Jak otrzymać…?'],['map','Mapa przemian']],'m',function(v){st.mode=v;render()});
  var bar=el('div');host.appendChild(bar);var area=el('div');host.appendChild(area);
  function render(){bar.innerHTML='';area.innerHTML='';
   if(st.mode==='m'){var b1=el('div','r');bar.appendChild(b1);seg(b1,MTYPES,st.t,function(t){st.t=t;st.k=null;render()});var ks=rxOfType(st.t);if(!st.k||ks.indexOf(st.k)<0)st.k=ks[0];var b2=el('div','r');bar.appendChild(b2);
    var bs=[];ks.forEach(function(k){var x=btn(b2,H.eq(k).split(' → ')[0],function(){st.k=k;bs.forEach(function(q){q.classList.toggle('on',q===x)});show()});if(k===st.k)x.classList.add('on');bs.push(x)});show()}
   else if(st.mode==='f'){var b3=el('div','r','<b>Wodorotlenek:</b> ');bar.appendChild(b3);var bb=[];H.list(function(r){return r.level!=='LO'&&r.metal!=='NH4'}).forEach(function(r){var x=btn(b3,r.pretty,function(){st.f=r.f;bb.forEach(function(q){q.classList.toggle('on',q===x)});how()});if(r.f===st.f)x.classList.add('on');bb.push(x)});how()}
   else mapa()}
  function show(){area.innerHTML='';var g=grid(area,280),l=el('div'),r=el('div');g.append(l,r);beaker(l,st.k);r.innerHTML=rxCard(st.k)+(st.t==='tlenek zasadowy + woda'?card('Uwaga','„Tlenek zasadowy” nie znaczy „reaguje z wodą”: CuO, FeO, Fe₂O₃ praktycznie nie reagują; MgO — bardzo powoli.','#d97706'):st.t==='metal + woda'?card('Uwaga','Tylko metale aktywne (litowce, Ca, Ba; Mg z gorącą wodą). Pokazy z Na, K — wyłącznie nauczyciel.','#d97706'):card('Kiedy działa?','Gdy powstający wodorotlenek jest trudno rozpuszczalny. NaOH czy KOH tak nie otrzymasz — są dobrze rozpuszczalne.','#d97706'))}
  function how(){var ob=H.obtain(st.f);area.innerHTML=ob.map(function(o){return card((o.ok?'✓ ':'✗ ')+o.title,o.ok?eqHtml(o.eq)+'<small>'+o.cond+'</small>':'<small>'+o.why+'</small>',o.ok?'#16a34a':'#94a3b8')}).join('');var ok=ob.filter(function(o){return o.ok});if(ok.length){var bx=el('div');bx.style.maxWidth='420px';area.appendChild(bx);beaker(bx,ok[0].rx,220)}}
  function mapa(){var r=H.get(st.f)||H.get('Ca(OH)2'),M=r.metal,OXD=D().OXIDES||{},ox=Object.values(OXD).find(function(o){return o&&o.water&&o.water.rx===r.rx.oxide});
   /* tlenek metalu na tym samym stopniu utlenienia (CHE.OXIDES.build) i reakcja metal + O₂ z bazy reakcji */
   if(!ox&&C.OXIDES&&r.q){var bo=C.OXIDES.build(M,r.q);ox=bo&&OXD[bo.formula]||null}
   var oxF=ox?(ox.f||ox.formula):null,RR=D().REACTIONS||{},kO2=oxF?Object.keys(RR).find(function(k){try{var x=C.REACTION.get(k),re=x.reactants.map(function(a){return a.formula}),pr=x.products.map(function(a){return a.formula});return re.length===2&&re.indexOf(M)>=0&&re.indexOf('O2')>=0&&pr.length===1&&pr[0]===oxF}catch(_){return false}}):null,
   oxWater=ox&&ox.water&&!ox.water.rx?'(z wodą: '+ox.water.text+' — wodorotlenek otrzymuje się z soli)':null,
   step=function(a,b,lab,k,why){return'<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0"><span class="chip" style="padding:4px 10px;border-radius:999px;border:1px solid var(--border,#cbd5e1);font-weight:800">'+a+'</span><span style="font:700 12px system-ui;color:'+(k?'#16a34a':'#94a3b8')+'">— '+lab+' →</span><span class="chip" style="padding:4px 10px;border-radius:999px;border:1px solid var(--border,#cbd5e1);font-weight:800">'+b+'</span>'+(k?'<small style="font-family:ui-monospace,monospace">'+H.eq(k)+'</small>':'<small>'+(why||'(nie zachodzi w warunkach szkolnych)')+'</small>')+'</div>'};
   var b3=el('div','r','<b>Dla:</b> ');bar.appendChild(b3);var bb=[];['NaOH','Ca(OH)2','Mg(OH)2','Cu(OH)2','Fe(OH)3','Al(OH)3'].forEach(function(f){var x=btn(b3,H.pretty(f),function(){st.f=f;render()});if(f===st.f)x.classList.add('on')});
   var neu=H.neutralEq(r.f,'HCl');area.innerHTML=card('Mapa przemian: '+r.pretty,step(M,oxF?H.pretty(oxF):'tlenek','+ O₂',kO2)+step(oxF?H.pretty(oxF):'tlenek',r.pretty,'+ H₂O',r.rx.oxide,oxWater)+step(M,r.pretty,'+ H₂O',r.rx.metal)+step('sól '+M,r.pretty+'↓','+ NaOH',r.rx.precip)+step(r.pretty,'sól + H₂O','+ kwas',neu&&neu.rx)+(neu&&!neu.rx?'<small style="font-family:ui-monospace,monospace">'+neu.eq+'</small>':'')+step(r.pretty,'tlenek + H₂O','ogrzewanie',r.rx.heat)+(r.amph?step(r.pretty,'jon kompleksowy','+ NaOH (nadmiar)',r.rx.base):''))+card('Zapamiętaj','wodorotlenek stoi między tlenkiem a solą: tlenek zasadowy + woda → wodorotlenek; wodorotlenek + kwas → sól + woda; sól + zasada → wodorotlenek↓ + sól.','#64748b')}
  render()}});

/* ---------- 4. STRĄCANIE — laboratorium jonowe ---------- */
V.define('n02-stracanie-v01',{title:'Laboratorium jonowe — strącanie wodorotlenków (model cząsteczkowy)',tag:'E8',
 hint:'Kliknij sól — symulacja rusza od razu: wolne jony → zbliżanie (przyciąganie ładunków) → skupiska → zarodki → osad. Liczniki pokazują wolne jony i cząstki osadu. Po prawej: równanie cząsteczkowe i jonowe z silnika.',
 foot:'Ruch jonów: CHE.sim.ParticleSim (ruch cieplny, zderzenia, opadanie wg CHE.PHYS) · barwy osadów: CHE.COLORS · równania jonowe: CHE.IONIC · model dydaktyczny — rzeczywisty proces obejmuje formy pośrednie (hydroksokompleksy).',
 build:function(host){host.innerHTML='';var H=HY(),ks=H.precipitations(),st={k:ks.indexOf('fecl3Naoh')>=0?'fecl3Naoh':ks[0],T:25},sim=null;
  var bar=el('div','r');host.appendChild(bar);var bs=[];ks.forEach(function(k){var x=btn(bar,H.eq(k).split(' → ')[0],function(){st.k=k;bs.forEach(function(q){q.classList.toggle('on',q===x)});build()});if(k===st.k)x.classList.add('on');bs.push(x)});
  var g=grid(host,300),l=el('div'),r=el('div');g.append(l,r);var cv=el('canvas');cv.style.cssText='width:100%;height:300px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9)';l.appendChild(cv);
  var cnt=el('div','r');l.appendChild(cnt);var ctl=el('div','r');l.appendChild(ctl);var pl=btn(ctl,'▶ start',function(){if(!sim)return;if(sim.running){sim.stop();pl.textContent='▶ start'}else{sim.start();pl.textContent='⏸ pauza'}});btn(ctl,'↺ od nowa',function(){build()});
  var tl=el('label',null,' T: ');var ts=el('input');ts.type='range';ts.min=5;ts.max=80;ts.value=25;ts.oninput=function(){st.T=+ts.value;tv.textContent=ts.value+' °C';if(sim&&sim.setT)sim.setT(st.T)};var tv=el('span',null,'25 °C');tl.append(ts,tv);ctl.appendChild(tl);
  function prodRow(k){var R=D().REACTIONS[k];var p=R.products.map(function(x){return H.get(x.formula)}).filter(Boolean)[0];return p||H.get('AgOH')}
  function build(){if(sim){try{sim.stop()}catch(_){}}var p=prodRow(st.k),col=null;try{var a=p.metal==='Ag'?[74,52,38]:G().colors.at(pptId(p));col=a?hex(a):p.hex}catch(_){col=p.hex}
   try{sim=new C.sim.ParticleSim({canvas:cv,T:st.T,config:{particles:[{type:'cation',count:6,r:14,color:catCol(p),label:p.cation,speed:1},{type:'oh',count:6*p.q,r:10,color:'#2563eb',label:'OH⁻',speed:1.2}],reaction:{cation:'cation',anion:'oh',ratio:p.q,product:p.f==='AgOH'?'Ag2O':p.f,color:col,pptId:pptId(p)}},
    onCounters:function(o){cnt.innerHTML='<b>wolne jony:</b> '+o.particles+' · <b>cząstki osadu:</b> '+o.clusters}})}catch(e){cnt.textContent='Symulacja niedostępna: '+e.message}
   /* wybór soli od razu uruchamia symulację; przycisk = pauza / wznów */
   pl.textContent='▶ start';var s0=sim;setTimeout(function(){if(sim===s0&&sim&&sim.start&&!sim.running){sim.start();pl.textContent=sim.running?'⏸ pauza':'▶ start'}},60);var J=null;try{J=C.IONIC.equations(st.k)}catch(_){}
   r.innerHTML=card('Równanie cząsteczkowe',eqHtml(H.eq(st.k)))+(J&&J.ionic?card('Równanie jonowe','<div><b>pełne:</b> '+J.full+'</div><div><b>skrócone:</b> '+J.net+'</div><div><small>jony widzowe: '+(J.spectators.join(', ')||'—')+'</small></div>','#2563eb'):'')
    +card('Co pokazuje model?','<ol style="margin:2px 0 0 18px"><li>Co widzę? — swobodne jony poruszają się w roztworze.</li><li>Co się dzieje? — '+p.cation+' przyciąga '+p.q+' × OH⁻ (ładunki przeciwne).</li><li>Skupiska rosną w zarodki, zarodki opadają jako osad ↓ (barwa: '+(p.metal==='Ag'?'brunatna — AgOH od razu rozkłada się do Ag₂O':p.color)+').</li><li>Sprawdzam: proporcja jonów 1 : '+p.q+', rozpuszczalność produktu (tabela), zapis jonowy.</li></ol>','#64748b')
    +card('Etapy pośrednie (rozszerzenie)','W rzeczywistości powstają najpierw formy pośrednie, np. Fe³⁺ → Fe(OH)²⁺ → Fe(OH)₂⁺ → Fe(OH)₃↓. Animacja jest modelem dydaktycznym, nie filmem trajektorii.','#94a3b8')}
  build()}});

/* ---------- 5. ZOBOJĘTNIANIE ---------- */
V.define('n02-zobojetnianie-v01',{title:'Zobojętnianie — licznik moli, pH, wskaźniki i jony H⁺ + OH⁻ → H₂O',tag:'E8',
 hint:'Ustaw zasadę i kwas, potem dolewaj kwas porcjami. Widzisz mole OH⁻ i H⁺, nadmiar, pH, barwę fenoloftaleiny i oranżu metylowego oraz jony w zlewce. Krzywa pH(V) pokazuje punkt równoważnikowy.',
 foot:'Bilans moli i pH: CHE.HYDROXIDES.neutral (mocna zasada + mocny kwas, Kw = 10⁻¹⁴, bez aktywności) · barwy: CHE.COLORS · jony: GFX.ions · równania: D.REACTIONS / CHE.IONIC.',
 build:function(host){host.innerHTML='';var H=HY(),o={base:'NaOH',acid:'HCl',cB:.1,VB:50,cA:.1,VA:0,step:5},ions=null,scale=1;
  var f1=el('div','r','<b>Zasada:</b> ');host.appendChild(f1);seg(f1,[['NaOH','NaOH'],['KOH','KOH'],['Ca(OH)2','Ca(OH)₂'],['Ba(OH)2','Ba(OH)₂']],o.base,function(v){o.base=v;if(v==='Ca(OH)2'&&o.cB>.02)o.cB=.02;reset()});
  f1.appendChild(el('b',null,' Kwas: '));seg(f1,[['HCl','HCl'],['HNO3','HNO₃'],['H2SO4','H₂SO₄']],o.acid,function(v){o.acid=v;reset()});
  var f2=el('div','r');host.appendChild(f2);function num(lab,key,min,max,stp){var w=el('label',null,lab+' ');var i=el('input');i.type='number';i.min=min;i.max=max;i.step=stp;i.value=o[key];i.style.width='72px';i.onchange=function(){o[key]=Math.max(min,Math.min(max,+i.value||min));i.value=o[key];reset()};w.appendChild(i);f2.appendChild(w);return i}
  var iB=num('c zasady (mol/dm³)','cB',.001,1,.01);num('V zasady (cm³)','VB',5,100,5);num('c kwasu (mol/dm³)','cA',.01,1,.01);num('porcja kwasu (cm³)','step',.5,20,.5);
  var g=grid(host,300),l=el('div'),r=el('div');g.append(l,r);var ib=el('div');l.appendChild(ib);var ctl=el('div','r');l.appendChild(ctl);
  btn(ctl,'+ dodaj porcję kwasu',function(){var before=H.neutral(o);o.VA=Math.round((o.VA+o.step)*100)/100;var after=H.neutral(o);if(ions)ions.add(Math.max(0,Math.round((after.nH-before.nH)*scale)));upd()});btn(ctl,'↺ od nowa',function(){reset()});
  var plot=el('div');l.appendChild(plot);
  function reset(){o.VA=0;iB.value=o.cB;var n0=H.neutral(o);scale=12/Math.max(1e-12,n0.nOH0);var r0=H.get(o.base);ib.innerHTML='';
   try{ions=G().ions.mount(ib,{mode:'neutral',height:240,nOH:12,cation:r0.cation,anion:H.ACIDS[o.acid].ion,auto:true})}catch(e){ib.textContent='GFX.ions: '+e.message;ions=null}upd()}
  function upd(){var n=H.neutral(o),php=ind('ind-fenoloftaleina',n.pH),om=ind('ind-oranz-metylowy',n.pH),un=ind('ind-uniwersalny',n.pH);if(ions&&un)ions.bg('rgba('+un.map(function(v){return v|0}).join(',')+',.18)');
   var neq=H.neutralEq(o.base,o.acid),J=null;try{J=neq.rx&&C.IONIC.equations(neq.rx)}catch(_){}
   r.innerHTML=card('Stan po dodaniu '+fmt(o.VA,2)+' cm³ kwasu','<div class="table-wrap"><table><tbody><tr><th>n(OH⁻) na początku</th><td>'+fmt(n.nOH0*1000,3)+' mmol</td></tr><tr><th>n(H⁺) dodane</th><td>'+fmt(n.nH*1000,3)+' mmol</td></tr><tr><th>powstało H₂O</th><td>'+fmt(n.water*1000,3)+' mmol</td></tr><tr><th>nadmiar</th><td>'+(n.excessOH>0?fmt(n.excessOH*1000,3)+' mmol OH⁻':n.excessH>0?fmt(n.excessH*1000,3)+' mmol H⁺':'0 — równoważnik')+'</td></tr><tr><th>pH</th><td><b>'+fmt(n.pH,2)+'</b> — '+n.state+'</td></tr><tr><th>V w punkcie równoważnikowym</th><td>'+fmt(n.Veq,2)+' cm³</td></tr></tbody></table></div>'
     +'<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px"><span><span style="display:inline-block;width:22px;height:22px;border-radius:6px;border:1px solid #94a3b8;vertical-align:-6px;background:'+rgbCss(php)+'"></span> fenoloftaleina</span><span><span style="display:inline-block;width:22px;height:22px;border-radius:6px;border:1px solid #94a3b8;vertical-align:-6px;background:'+rgbCss(om)+'"></span> oranż metylowy</span><span><span style="display:inline-block;width:22px;height:22px;border-radius:6px;border:1px solid #94a3b8;vertical-align:-6px;background:'+rgbCss(un)+'"></span> wskaźnik uniwersalny</span></div>'+(n.warn?'<div class="note" style="margin-top:6px">Uwaga: '+n.warn+'</div>':''),n.excessOH>0?'#2563eb':n.excessH>0?'#dc2626':'#16a34a')
    +card('Równania',eqHtml(neq.eq)+(J&&J.ionic?'<div><b>jonowo pełne:</b> '+J.full+'</div><div><b>skrócone:</b> '+J.net+'</div>':'<div><b>skrócone:</b> H⁺ + OH⁻ → H₂O</div>')+(n.ppt?'<div class="note">Jednocześnie strącanie: '+H.pretty(n.ppt)+'↓ — roztwór mętnieje.</div>':''),'#64748b');
   var pts=H.curve(Object.assign({},o,{Vmax:Math.max(2*n.Veq,o.VA+o.step)}),90),Vm=pts[pts.length-1].V,W=420,Hh=170,X=function(v){return 34+v/Vm*(W-44)},Y=function(p){return 10+(14-p)/14*(Hh-34)};
   plot.innerHTML='<svg viewBox="0 0 '+W+' '+Hh+'" style="width:100%;max-width:520px;height:auto;display:block;margin-top:8px"><rect x="34" y="10" width="'+(W-44)+'" height="'+(Hh-34)+'" fill="none" stroke="#94a3b8"/>'+[0,7,14].map(function(p){return'<text x="28" y="'+(Y(p)+4)+'" font-size="10" text-anchor="end" fill="#64748b">'+p+'</text><line x1="34" x2="'+(W-10)+'" y1="'+Y(p)+'" y2="'+Y(p)+'" stroke="#e2e8f0"/>'}).join('')
    +'<line x1="'+X(n.Veq)+'" x2="'+X(n.Veq)+'" y1="10" y2="'+(Hh-24)+'" stroke="#16a34a" stroke-dasharray="4 4"/><polyline fill="none" stroke="#2563eb" stroke-width="2.5" points="'+pts.map(function(p){return X(p.V).toFixed(1)+','+Y(p.pH).toFixed(1)}).join(' ')+'"/><circle cx="'+X(o.VA)+'" cy="'+Y(n.pH)+'" r="5" fill="#dc2626"/><text x="'+(W/2)+'" y="'+(Hh-6)+'" font-size="10" text-anchor="middle" fill="#64748b">V kwasu (cm³) · pH · zielona linia — punkt równoważnikowy</text></svg>'}
  reset()}});

/* ---------- 6. DYSOCJACJA + efekt cieplny ---------- */
V.define('n02-dysocjacja-v01',{title:'Rozpuszczanie i dysocjacja wodorotlenków — jony, hydratacja, efekt cieplny',tag:'E8',
 hint:'Porównaj NaOH, Ca(OH)₂ i Cu(OH)₂: ile kryształu przechodzi do wody, jakie jony powstają i jak otaczają je cząsteczki wody. W drugiej części zobacz, jak zmienia się temperatura przy rozpuszczaniu.',
 foot:'Rozpuszczalność: D.SOLUBILITY_TABLE · dysocjacja: CHE.HYDROXIDES.dissociation · ΔH rozpuszczania (kJ/mol) — CHE.HYDROXIDES.SOLHEAT, c(wody) = 4,18 J/(g·K), bez strat ciepła · rysunek: GFX.ions.',
 build:function(host){host.innerHTML='';var H=HY(),st={f:'NaOH',hf:'NaOH',m:4,mw:100},ions=null;
  var bar=el('div','r','<b>Substancja:</b> ');host.appendChild(bar);seg(bar,[['NaOH','NaOH'],['KOH','KOH'],['Ca(OH)2','Ca(OH)₂'],['Mg(OH)2','Mg(OH)₂'],['Cu(OH)2','Cu(OH)₂'],['Fe(OH)3','Fe(OH)₃']],st.f,function(v){st.f=v;show()});
  var g=grid(host,300),l=el('div'),r=el('div');g.append(l,r);var cb=el('div');l.appendChild(cb);var ctl=el('div','r');l.appendChild(ctl);btn(ctl,'↺ jeszcze raz',function(){show()});
  var th=el('div');host.appendChild(th);
  function show(){var row=H.get(st.f),s=H.solubility(st.f),d=H.dissociation(st.f);cb.innerHTML='';
   try{ions=G().ions.mount(cb,{mode:'dissolve',height:280,nOH:row.q,cation:row.cation,catCol:catCol(row),sol:s.s,solidCol:row.hex,dur:7})}catch(e){cb.textContent='GFX.ions: '+e.message}
   r.innerHTML='<div class="table-wrap"><table><tbody><tr><th>1. Co to jest?</th><td>'+row.pretty+' — '+row.name+'</td></tr><tr><th>2. Czy się rozpuszcza?</th><td style="color:'+SOLC[s.s]+'"><b>'+s.label+'</b></td></tr><tr><th>3. Co jest w roztworze?</th><td>'+d.eq+'</td></tr><tr><th>4. Jaki odczyn?</th><td>'+s.odczyn+(s.ph?' (pH ≈ '+fmt(s.ph,1)+')':'')+'</td></tr></tbody></table></div>'
    +card('Wniosek',d.note,'#64748b')+card('Hydratacja','Jony w wodzie otaczają się cząsteczkami wody: do kationu zwrócony jest tlen (biegun −), do OH⁻ — wodory (biegun +). Dlatego jony „rozchodzą się” w roztworze.','#2563eb')
    +card('Rozpuszczalny ≠ mocny','Rozpuszczalność mówi, ile substancji przejdzie do wody; moc — jaka część rozpuszczonej substancji jest w postaci jonów. Ca(OH)₂: mało się rozpuszcza, ale to, co się rozpuści, dysocjuje całkowicie.','#d97706')}
  function heat(){th.innerHTML='';var bx=el('div');bx.innerHTML='<h4 style="margin:12px 0 4px">Efekt cieplny rozpuszczania</h4>';th.appendChild(bx);var b=el('div','r');th.appendChild(b);
   seg(b,Object.keys(H.SOLHEAT).map(function(k){return[k,H.SOLHEAT[k].name]}),st.hf,function(v){st.hf=v;calc()});var w=el('label',null,' masa (g): ');var i=el('input');i.type='range';i.min=1;i.max=20;i.value=st.m;var iv=el('b',null,st.m+' g');i.oninput=function(){st.m=+i.value;iv.textContent=st.m+' g';calc()};w.append(i,iv);b.appendChild(w);
   var out=el('div');th.appendChild(out);
   function calc(){var h=H.heat(st.hf,st.m,st.mw,20),T=h.T,pct=Math.max(0,Math.min(1,(T-0)/60));
    out.innerHTML='<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><svg viewBox="0 0 60 200" width="50" height="170"><rect x="22" y="10" width="16" height="160" rx="8" fill="#e2e8f0" stroke="#94a3b8"/><rect x="25" y="'+(10+155*(1-pct))+'" width="10" height="'+(155*pct+5)+'" rx="5" fill="'+(h.dT>=0?'#dc2626':'#2563eb')+'"/><circle cx="30" cy="180" r="14" fill="'+(h.dT>=0?'#dc2626':'#2563eb')+'"/><text x="44" y="'+(10+155*(1-1/3))+'" font-size="9" fill="#64748b">20°</text></svg>'
     +'<div>'+card(h.name+' — '+h.kind,'n = '+fmt(h.n,3)+' mol · ΔH = '+fmt(h.dH,1)+' kJ/mol → Q = '+fmt(h.Q/1000,2)+' kJ<br>ΔT ≈ <b>'+(h.dT>0?'+':'')+fmt(h.dT,1)+' K</b> → temperatura końcowa ok. <b>'+fmt(h.T,1)+' °C</b> ('+st.m+' g w 100 g wody)'+(h.limit&&st.m/100>h.limit/100?'<div class="note">Uwaga: Ca(OH)₂ rozpuści się tylko ok. 0,17 g — reszta zostanie jako zawiesina; efekt będzie znikomy.</div>':'')+(st.hf==='NaOH'||st.hf==='KOH'?'<div class="note">Uwaga: BHP: stały NaOH/KOH dodawaj małymi porcjami do wody (nie odwrotnie), mieszaj, okulary i rękawice.</div>':''),h.dT>=0?'#dc2626':'#2563eb')+'</div></div>'}
   calc()}
  show();heat()}});

/* ---------- 7. REAKTOR ---------- */
V.define('n02-reaktor-v01',{title:'Reaktor: wodorotlenek + odczynnik — przewiduj, potem sprawdź',tag:'E8',
 hint:'Wybierz wodorotlenek i odczynnik. Najpierw zaznacz przewidywanie (zachodzi / nie zachodzi), potem „Sprawdź” — silnik podaje równanie, typ reakcji, obserwację i uzasadnienie; jeśli jest animacja, zobaczysz zlewkę.',
 foot:'Reguły: CHE.HYDROXIDES.predict (zobojętnianie — także dla par bez rekordu: równanie z reguły H⁺ = OH⁻) · animacja: GFX.rx.',
 build:function(host){host.innerHTML='';var H=HY(),st={f:'Al(OH)3',g:'NaOH',guess:null};
  var b1=el('div','r','<b>Wodorotlenek:</b> ');host.appendChild(b1);seg(b1,H.list(function(r){return r.level!=='LO'&&r.metal!=='NH4'}).map(function(r){return[r.f,r.pretty]}),st.f,function(v){st.f=v;clr()});
  var b2=el('div','r','<b>Odczynnik:</b> ');host.appendChild(b2);seg(b2,H.REAGENTS.map(function(x){return[x,x==='ogrzewanie'||x==='powietrze'?x:H.pretty(x)]}),st.g,function(v){st.g=v;clr()});
  var b3=el('div','r','<b>Twoje przewidywanie:</b> ');host.appendChild(b3);var gb=seg(b3,[['tak','zachodzi reakcja'],['nie','nie zachodzi']],null,function(v){st.guess=v});btn(b3,'Sprawdź',check,'on');
  var g=grid(host,280),l=el('div'),r=el('div');g.append(l,r);
  function clr(){st.guess=null;gb.forEach(function(q){q.classList.remove('on')});l.innerHTML='';r.innerHTML='<div class="note">'+H.pretty(st.f)+' + '+(H.pretty(st.g))+' — co się stanie? Zaznacz przewidywanie i kliknij „Sprawdź”.</div>'}
  function check(){var p=H.predict(st.f,st.g);if(!p){r.innerHTML='—';return}var ok=p.ok&&!p.physical,hit=st.guess==null?null:((st.guess==='tak')===ok);
   r.innerHTML=(hit==null?'':card(hit?'✓ Trafione przewidywanie':'✗ Przewidywanie nietrafione','',hit?'#16a34a':'#dc2626'))+card(ok?'Zachodzi: '+(p.type||'reakcja'):p.physical?'Rozpuszczanie (proces fizyczny + dysocjacja)':'Brak reakcji',(p.eq?eqHtml(p.eq):'')+'<div>'+(p.why||'')+'</div>'+(p.obs?'<div><b>Obserwacja:</b> '+p.obs+'</div>':'')+(p.cond?'<div><b>Warunki:</b> '+p.cond+'</div>':'')+(p.note?'<div><small>'+p.note+'</small></div>':'')+(p.level&&p.level!=='E8'?'<div><small>poziom: '+p.level+'</small></div>':''),ok?'#16a34a':'#94a3b8');
   l.innerHTML='';if(p.rx)beaker(l,p.rx,240)}
  clr()}});
})();
