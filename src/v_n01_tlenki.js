;/* ===== v0.44: N01 TLENKI — widoki silnika (zastępują widgety wbudowane w HTML lekcji N01):
   n01-tlenki-v01 (trzy pytania: charakter ≠ woda ≠ rozpuszczalność; zlewka GFX + wskaźnik z CHE.COLORS),
   n01-konstruktor-v01 (W–K–S–K krok po kroku + sprawdzanie wzoru: stopień utlenienia, nadtlenki, OF₂),
   n01-reaktor-v01 („co powstanie?” — najpierw przewidywanie, potem procedura 7 kroków z CHE.OXIDES.predict),
   n01-trend-v01 (trend charakteru w okresie i wg stopnia utlenienia: Cr, Mn),
   n01-spalanie-v01 (otrzymywanie tlenków: spalanie pierwiastków i paliw, dopływ O₂ → CO₂ / CO / sadza). ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function OXA(){return C.OXIDES}function D(){return C.DATA||{}}function G(){return C.LAB.GFX}
function btn(bar,t,f,cls){var b=el('button',cls||null,t);b.type='button';b.onclick=f;bar.appendChild(b);return b}
function rgb(h){h=String(h||'#e2e8f0').replace('#','');var n=parseInt(h,16);return[n>>16&255,n>>8&255,n&255]}
function CC(c){return(D().CHAR_COLORS||{})[c]||'#64748b'}
function chip(o,on){return'<span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:'+CC(o.char)+';margin-right:5px;vertical-align:-1px"></span>'}
function eqHtml(e){return e?'<div style="font:700 15px ui-monospace,Consolas,monospace;margin:4px 0">'+e+'</div>':''}
var LV={E8:1,AMB:2,ZA:3};
/* pH roztworu po zetknięciu tlenku z wodą (model szkolny — do barwy wskaźnika) */
var PHW={Li2O:13,Na2O:13,K2O:13,BaO:12.8,CaO:12.4,MgO:10.3,SO3:1,SO2:2.3,CO2:5.6,N2O5:1,N2O3:3,NO2:1.5,P2O5:1.5,P4O10:1.5,Cl2O7:1,Mn2O7:1.5,CrO3:1.5,B2O3:5.2};
function phAfter(f){return PHW[f]!=null?PHW[f]:7}
function uni(p){try{return G().colors.at('ind-uniwersalny',Math.max(0,Math.min(14,p)))||[210,230,240]}catch(_){return[210,230,240]}}

/* ---------- 1. TRZY PYTANIA ---------- */
V.define('n01-tlenki-v01',{title:'Tlenek — trzy pytania: charakter, woda, kwas / zasada',tag:'CHE',
 hint:'Kliknij tlenek. Odpowiedzi na trzy pytania pochodzą z silnika (CHE.OXIDES): jaki charakter, czy reaguje z wodą, czy reaguje z kwasem / zasadą. Wybrany tlenek od razu trafia do zlewki z wodą i wskaźnikiem uniwersalnym („Powtórz” — jeszcze raz).',
 foot:'Dane: CHE.DATA.OXIDES · równania: CHE.REACTION · barwa wskaźnika: CHE.COLORS (ind-uniwersalny) · pH po reakcji z wodą — wartości orientacyjne.',
 build:function(host){host.innerHTML='';var A=OXA(),OX=D().OXIDES,st={f:'CaO',lv:1,inW:0};
  var bar=el('div','r');host.appendChild(bar);var lvB=[];[['E8',1],['+ ambitne',2],['+ zaawansowane',3]].forEach(function(x){var b=btn(bar,x[0],function(){st.lv=x[1];lvB.forEach(function(q){q.classList.toggle('on',q===b)});chips()});lvB.push(b);if(x[1]===1)b.classList.add('on')});
  var leg=el('span',null,'');leg.style.cssText='margin-left:auto;font:600 12px system-ui';leg.innerHTML=['zasadowy','kwasowy','amfoteryczny','obojętny','mieszany'].map(function(c){return'<span style="white-space:nowrap;margin-left:10px"><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:'+CC(c)+'"></span> '+c+'</span>'}).join('');bar.appendChild(leg);
  var cg=el('div');cg.style.cssText='display:flex;flex-wrap:wrap;gap:6px;margin:8px 0';host.appendChild(cg);
  var row=el('div');row.style.cssText='display:grid;grid-template-columns:minmax(220px,1fr) 2fr;gap:12px;align-items:start';host.appendChild(row);
  var left=el('div'),right=el('div');row.append(left,right);
  var b2=el('div','r');left.appendChild(b2);var bw=btn(b2,'Powtórz',function(){st.inW=1;t0=performance.now()},'on');var t0=performance.now();st.inW=1;
  var m=G().mount(left,{height:250,parts:[{id:'beaker',x:.05,y:.05,w:.9,h:.92,get:function(){var o=OX[st.f]||{},k=st.inW?Math.min(1,(performance.now()-t0)/1500):0,p=7+(phAfter(st.f)-7)*k,dis=st.inW&&o.water&&o.water.rx&&st.f!=='MgO';
     var sol=o.state==='s'?[{col:rgb(o.color||'#f1f5f9'),eq:st.inW?(dis?3*(1-k):2.4):0,shape:'powder'}]:[];
     return{liquid:st.inW?uni(p):[226,236,244],level:.55,T:st.inW&&(st.f==='CaO'||st.f==='Na2O'||st.f==='SO3'||st.f==='P2O5')?25+40*k:25,heat:st.inW&&st.f==='CaO'?k*2:0,gas:st.inW&&o.state==='g'?.6*(1-k*.5):0,solids:sol,label:st.inW?'pH ≈ '+String(Math.round(p*10)/10).replace('.',','):'woda + wskaźnik'}}}]});
  var card=el('div');right.appendChild(card);
  function chips(){cg.innerHTML='';Object.keys(OX).forEach(function(f){var o=OX[f];if((LV[o.level]||1)>st.lv)return;var b=el('button',null,'<b>'+A.pretty(f)+'</b>');b.type='button';b.style.cssText='border:2px solid '+CC(o.char)+';border-radius:10px;padding:5px 9px;background:'+(f===st.f?CC(o.char):'var(--panel,#fff)')+';color:'+(f===st.f?'#fff':'inherit')+';cursor:pointer;font:600 14px system-ui';b.onclick=function(){st.f=f;st.inW=1;t0=performance.now();chips();show()};cg.appendChild(b)})}
  function show(){var o=OX[st.f];if(!o)return;var q=A.threeQuestions(st.f)||[];
   card.innerHTML='<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span style="font:800 26px Inter,system-ui">'+A.pretty(st.f)+'</span><span style="font:600 15px system-ui">'+o.name+'</span><span style="background:'+CC(o.char)+';color:#fff;border-radius:999px;padding:3px 10px;font:700 12px system-ui">'+o.char+'</span><span style="display:inline-flex;align-items:center;gap:5px;font:12px system-ui;opacity:.8"><span style="width:16px;height:16px;border-radius:4px;border:1px solid #94a3b8;background:'+(o.color||'transparent')+'"></span>'+(o.colorName||'')+'</span></div>'+
    '<div style="font:12px system-ui;opacity:.75;margin:4px 0 8px">wiązanie / budowa: '+o.bond+' · stan: '+({s:'stały',l:'ciekły',g:'gaz'}[o.state]||o.state)+' · poziom: '+o.level+'</div>'+
    q.map(function(x,i){return'<div style="border:1px solid var(--line,#d5dee6);border-radius:10px;padding:8px 10px;margin:6px 0"><b>'+(i+1)+'. '+x.q+'</b> <span style="margin-left:6px">'+x.a+'</span>'+eqHtml(x.eq)+'</div>'}).join('')+
    ((o.notes||[]).length?'<div class="note">'+o.notes.join('<br>')+'</div>':'')+
    '<div class="note" style="opacity:.85">Charakter sprawdzamy reakcją z <b>kwasem</b> (zasadowy) lub z <b>zasadą</b> (kwasowy). Reakcja z wodą to osobne pytanie: CuO jest zasadowy, a z wodą nie reaguje; SiO₂ jest kwasowy, a z wodą praktycznie nie reaguje.</div>'}
  chips();show()}});

/* ---------- 2. KONSTRUKTOR W–K–S–K ---------- */
V.define('n01-konstruktor-v01',{title:'Konstruktor wzoru tlenku (W–K–S–K) i sprawdzanie wzoru',tag:'E8',
 hint:'Wybierz pierwiastek i jego stopień utlenienia. Animacja pokazuje: wartościowości → krzyżowanie → skracanie → kontrola ładunku. Niżej sprawdzisz dowolny wzór: stopień utlenienia, nadtlenki, OF₂, tlenki mieszane.',
 foot:'CHE.OXIDES.build / oxState · stopnie utlenienia: CHE.DATA.OXIDE_STATES · charakter: CHE.DATA.OXIDES.',
 build:function(host){host.innerHTML='';var A=OXA(),S=D().OXIDE_STATES||{},st={el:'Fe',ox:3,t0:performance.now()};
  var bar=el('div','r');host.appendChild(bar);var eB=[];Object.keys(S).filter(function(e){return e!=='H'}).forEach(function(e){var b=btn(bar,e,function(){st.el=e;st.ox=S[e][S[e].length-1];st.t0=performance.now();eB.forEach(function(q){q.classList.toggle('on',q===b)});oxBar();upd()});eB.push(b);if(e===st.el)b.classList.add('on')});
  var ob=el('div','r');host.appendChild(ob);
  function oxBar(){ob.innerHTML='<span style="font:600 13px system-ui;margin-right:6px">stopień utlenienia:</span>';(S[st.el]||[]).forEach(function(x){var b=btn(ob,'+'+['','I','II','III','IV','V','VI','VII'][x],function(){st.ox=x;st.t0=performance.now();oxBar();upd()});if(x===st.ox)b.classList.add('on')})}
  var cv=el('canvas');cv.style.cssText='width:100%;height:220px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9)';host.appendChild(cv);var info=el('div','note');host.appendChild(info);
  var chk=el('div');chk.style.cssText='margin-top:10px;border:1px solid var(--line,#d5dee6);border-radius:12px;padding:10px';host.appendChild(chk);
  chk.innerHTML='<b>Sprawdź wzór</b> — czy to tlenek i jaki stopień utlenienia? <div class="r" style="margin-top:6px"><input id="n01f" value="Mn2O7" style="padding:7px 10px;border:1px solid #cbd5e1;border-radius:8px;font:600 15px ui-monospace,monospace;width:140px"></div><div id="n01r" class="note"></div>';
  var inp=chk.querySelector('#n01f'),res=chk.querySelector('#n01r'),qb=chk.querySelector('.r');
  ['Fe2O3','Fe3O4','Na2O2','H2O2','OF2','KO2','Mn2O7','P4O10','CO'].forEach(function(f){btn(qb,A.pretty(f),function(){inp.value=f;check()})});btn(qb,'Sprawdź',check,'on');inp.oninput=check;
  function check(){var f=inp.value.trim(),r=A.oxState(f);if(!r){res.innerHTML='—';return}if(r.error){res.innerHTML='<b style="color:#b91c1c">'+r.error+'</b>';return}
   var o=(D().OXIDES||{})[f];res.innerHTML='<b>'+A.pretty(f)+'</b>: tlen −II → '+r.el+' na stopniu <b>'+(r.integer?(r.ox>0?'+':'')+r.ox:'+'+String(Math.round(r.ox*100)/100).replace('.',','))+'</b> · kontrola: '+r.check+(r.note?'<br><i>'+r.note+'</i>':'')+(o?'<br>W silniku: <b>'+o.name+'</b> — charakter <b style="color:'+CC(o.char)+'">'+o.char+'</b>':'<br><span style="opacity:.75">Brak w bazie tlenków silnika — wzór poprawny formalnie, ale sprawdź, czy taki związek istnieje.</span>')}
  function upd(){var b=A.build(st.el,st.ox),o=b&&(D().OXIDES||{})[b.formula];info.innerHTML=b?'<b>'+b.pretty+'</b> — '+b.name+' · '+b.steps.join(' → ')+(o?'<br>Charakter: <b style="color:'+CC(o.char)+'">'+o.char+'</b> · z wodą: '+o.water.text:'<br><span style="opacity:.75">Ten tlenek nie jest opisany w bazie silnika (rzadki / nietrwały).</span>'):''}
  var ROM=['','I','II','III','IV','V','VI','VII'],SUB='₀₁₂₃₄₅₆₇₈₉';
  function frame(t){if(!cv.isConnected)return;var d=Math.min(2,window.devicePixelRatio||1),w=cv.clientWidth||600,h=cv.clientHeight||220;if(cv.width!==Math.round(w*d)){cv.width=w*d;cv.height=h*d}var x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,w,h);var T=G().theme(),b=A.build(st.el,st.ox);if(!b){requestAnimationFrame(frame);return}
   var k=Math.min(4,(t-st.t0)/900),cx=w/2;x.textAlign='center';x.textBaseline='middle';
   /* 1. symbole z wartościowościami */
   var xE=cx-90,xO=cx+90,y=60;x.font='800 40px Inter,system-ui';x.fillStyle=T.text;x.fillText(st.el,xE,y);x.fillText('O',xO,y);
   x.font='800 18px system-ui';x.fillStyle='#ea580c';x.fillText(ROM[st.ox],xE+34,y-26);x.fillStyle='#2563eb';x.fillText('II',xO+28,y-26);
   /* 2. krzyżowanie */
   if(k>1){var a=Math.min(1,k-1);x.strokeStyle='#ea580c';x.lineWidth=2.5;x.setLineDash([6,4]);x.beginPath();x.moveTo(xE+34,y-14);x.lineTo(xE+34+(xO+22-(xE+34))*a,y-14+(y+52-(y-14))*a);x.stroke();x.strokeStyle='#2563eb';x.beginPath();x.moveTo(xO+28,y-14);x.lineTo(xO+28+(xE+20-(xO+28))*a,y-14+(y+52-(y-14))*a);x.stroke();x.setLineDash([]);x.font='800 40px Inter,system-ui';x.fillStyle=T.text;x.fillText(st.el,xE,y);x.fillText('O',xO,y)/* symbole nad liniami — czytelne */}
   /* 3. wzór surowy → skrócony */
   if(k>2){x.font='800 30px Inter,system-ui';x.fillStyle=T.text;var raw=b.raw.replace(/\d/g,function(c){return SUB[c]}),fin=b.pretty;x.globalAlpha=b.reduced&&k>3?.35:1;x.fillText(raw,cx,y+70);x.globalAlpha=1;if(b.reduced&&k>3){x.fillStyle='#16a34a';x.fillText('→ '+fin,cx+(raw.length*9)+50,y+70)}}
   if(k>3.3){x.font='600 14px system-ui';x.fillStyle=T.mut;x.fillText('kontrola: '+b.nEl+'·(+'+st.ox+') + '+b.nO+'·(−2) = '+(b.nEl*st.ox-2*b.nO)+' ✓',cx,y+120)}
   requestAnimationFrame(frame)}
  oxBar();upd();check();requestAnimationFrame(frame)}});

/* ---------- 3. REAKTOR „CO POWSTANIE?” ---------- */
var CATCOL={Cu:[96,150,220],Fe:[205,160,70],Cr:[110,170,110],Mn:[235,205,215],Ni:[140,200,140]};
V.define('n01-reaktor-v01',{title:'Co powstanie? Tlenek + woda / kwas / zasada — przewiduj, potem sprawdź',tag:'CHE',
 hint:'Wybierz tlenek i drugi reagent. Najpierw zaznacz swoje przewidywanie, dopiero potem „Sprawdź”: silnik przejdzie procedurę 7 kroków (rozpoznaj → stopień utlenienia → charakter → reagent → schemat → produkt → równanie z bilansem).',
 foot:'CHE.OXIDES.predict (procedura MD 0A) · równania z CHE.REACTION albo bilans liczony przez silnik · wygląd: GFX.',
 build:function(host){host.innerHTML='';var A=OXA(),OX=D().OXIDES,st={f:'CuO',r:'HCl',guess:null,res:null,t0:0};
  var bar=el('div','r');host.appendChild(bar);var sel=el('select');Object.keys(OX).forEach(function(f){if(f==='H2O')return;var o=OX[f];var op=el('option',null,A.pretty(f)+' — '+o.name);op.value=f;sel.appendChild(op)});sel.value=st.f;var l=el('label',null,'Tlenek ');l.appendChild(sel);bar.appendChild(l);
  var rb=el('div','r');host.appendChild(rb);var rB=[];Object.keys(A.reagents).forEach(function(k){var b=btn(rb,A.pretty(k)+' <small style="opacity:.7">'+A.reagents[k].kind+'</small>',function(){st.r=k;reset();rB.forEach(function(q){q.classList.toggle('on',q===b)})});rB.push(b);if(k===st.r)b.classList.add('on')});
  var gb=el('div','r');host.appendChild(gb);gb.innerHTML='<span style="font:700 13px system-ui;margin-right:6px">Twoje przewidywanie:</span>';var G1=[['nie','nie zachodzi'],['wod','wodorotlenek'],['kw','kwas'],['sol','sól + woda'],['kpx','sól kompleksowa (LO)']],gB=[];
  G1.forEach(function(g){var b=btn(gb,g[1],function(){st.guess=g[0];gB.forEach(function(q){q.classList.toggle('on',q===b)})});gB.push(b)});btn(gb,'Sprawdź ▶',function(){run()},'on');
  var row=el('div');row.style.cssText='display:grid;grid-template-columns:minmax(220px,1fr) 2fr;gap:12px;align-items:start;margin-top:6px';host.appendChild(row);var left=el('div'),out=el('div');row.append(left,out);
  sel.onchange=function(){st.f=sel.value;reset()};
  function cat(r){if(!r.occurs)return'nie';if(r.kind==='woda')return r.char==='kwasowy'?'kw':'wod';return/kompleks/.test(r.schema)?'kpx':'sol'}
  function reset(){st.res=null;st.guess=null;gB.forEach(function(q){q.classList.remove('on')});out.innerHTML='<div class="note">Zaznacz przewidywanie i kliknij „Sprawdź”. Wskazówka: najpierw ustal charakter tlenku.</div>'}
  function run(){var r=A.predict(st.f,st.r);st.res=r;st.t0=performance.now();var c=cat(r),ok=st.guess?st.guess===c:null;
   out.innerHTML=(ok===null?'<div class="note">Bez przewidywania — następnym razem spróbuj najpierw sam.</div>':'<div class="note" style="border-color:'+(ok?'#16a34a':'#dc2626')+'"><b style="color:'+(ok?'#16a34a':'#dc2626')+'">'+(ok?'Dobrze przewidziane.':'Inaczej niż przewidziałeś — prześledź kroki.')+'</b></div>')+
    '<ol style="margin:6px 0 6px 18px;padding:0;font:14px/1.5 system-ui">'+r.steps.map(function(s){return'<li style="list-style:none;margin-left:-18px">'+s+'</li>'}).join('')+'</ol>'+(r.occurs?eqHtml(r.equation)+(r.rx?'<div style="font:12px system-ui;opacity:.7">reakcja z bazy silnika: '+r.rx+((D().REACTION_DATA||{})[r.rx]&&D().REACTION_DATA[r.rx].observation?' · obserwacja: '+D().REACTION_DATA[r.rx].observation:'')+'</div>':'<div style="font:12px system-ui;opacity:.7">równanie zbudowane i zbilansowane przez silnik (CHE.OXIDES.predict)</div>'):'<div class="note">'+(r.note||'')+'</div>')}
  G().mount(left,{height:250,parts:[{id:'beaker',x:.05,y:.05,w:.9,h:.92,get:function(){var o=OX[st.f]||{},r=st.res,k=r?Math.min(1,(performance.now()-st.t0)/1800):0,go=r&&r.occurs;var base=st.r==='H2O'?[226,236,244]:[232,236,240],end=base;
     if(go){if(st.r==='H2O')end=uni(phAfter(st.f));else{var cc=CATCOL[o.el];if(cc&&r.kind==='kwas')end=cc}}var liq=base.map(function(v,i){return Math.round(v+(end[i]-v)*k)});
     var sol=o.state==='s'?[{col:rgb(o.color||'#f1f5f9'),eq:go?2.6*(1-k):2.6,shape:'powder'}]:[];
     return{liquid:liq,level:.55,solids:sol,gas:o.state==='g'&&!(go&&k>.6)?.5:0,heat:go&&(st.f==='CaO'||st.f==='SO3'||st.f==='Na2O')?k*1.5:0,T:25,label:A.pretty(st.f)+' + '+A.pretty(st.r)}}}]});
  reset()}});

/* ---------- 4. TREND CHARAKTERU ---------- */
V.define('n01-trend-v01',{title:'Trend charakteru tlenków: w okresie i wg stopnia utlenienia',tag:'AMB',
 hint:'Okres 2 i 3: tlenki na najwyższym stopniu utlenienia — od zasadowych przez amfoteryczne do kwasowych; linia = elektroujemność pierwiastka. Zakładka „ten sam metal”: Cr i Mn — im wyższy stopień utlenienia, tym bardziej kwasowy tlenek.',
 foot:'CHE.OXIDES.trend · elektroujemność: CHE.DATA.ELEMENTS_118 · to trend (model), nie algorytm bez wyjątków.',
 build:function(host){host.innerHTML='';var A=OXA(),OX=D().OXIDES,st={m:3};var bar=el('div','r');host.appendChild(bar);var bs=[];
  [['okres 2',2],['okres 3',3],['ten sam metal: Cr',"Cr"],['ten sam metal: Mn',"Mn"]].forEach(function(x){var b=btn(bar,x[0],function(){st.m=x[1];bs.forEach(function(q){q.classList.toggle('on',q===b)});draw()});bs.push(b);if(x[1]===3)b.classList.add('on')});
  var cv=el('canvas');cv.style.cssText='width:100%;height:300px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9)';host.appendChild(cv);var note=el('div','note');host.appendChild(note);
  function items(){if(typeof st.m==='number')return A.trend(st.m);var L=st.m==='Cr'?['CrO','Cr2O3','CrO3']:['MnO','MnO2','Mn2O7'];return L.map(function(f){var o=OX[f];return{f:f,el:o.el,ox:o.ox,char:o.char,water:o.water.text}})}
  function draw(){var d=Math.min(2,window.devicePixelRatio||1),w=cv.clientWidth||600,h=cv.clientHeight||300;cv.width=w*d;cv.height=h*d;var x=cv.getContext('2d');x.setTransform(d,0,0,d,0,0);var T=G().theme(),I=items(),n=I.length,L=40,R=w-20,B=h-60,Tp=20,bw=(R-L)/n;
   x.strokeStyle=T.mut;x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(R,B);x.stroke();var byOx=typeof st.m!=='number';
   I.forEach(function(it,i){var v=byOx?it.ox/7:(it.ox||0)/7,hh=(B-Tp)*v,xx=L+i*bw+bw*.18,ww=bw*.64;x.fillStyle=CC(it.char);x.globalAlpha=.85;x.fillRect(xx,B-hh,ww,hh);x.globalAlpha=1;
    x.fillStyle=T.text;x.textAlign='center';x.font='800 15px system-ui';x.fillText(A.pretty(it.f),xx+ww/2,B+18);x.font='600 11px system-ui';x.fillStyle=CC(it.char);x.fillText(it.char,xx+ww/2,B+34);x.fillStyle=T.mut;x.fillText('+'+['','I','II','III','IV','V','VI','VII'][it.ox]||it.ox,xx+ww/2,B-hh-8)});
   if(!byOx){var en=I.map(function(it){return it.en||0}),mx=4;x.strokeStyle='#0f172a';x.lineWidth=2;x.setLineDash([5,4]);x.beginPath();I.forEach(function(it,i){var px=L+i*bw+bw/2,py=B-(B-Tp)*(it.en||0)/mx;i?x.lineTo(px,py):x.moveTo(px,py)});x.stroke();x.setLineDash([]);
    I.forEach(function(it,i){var px=L+i*bw+bw/2,py=B-(B-Tp)*(it.en||0)/mx;x.fillStyle='#0f172a';x.beginPath();x.arc(px,py,4,0,7);x.fill();x.font='600 10px system-ui';x.fillText('EN '+String(it.en).replace('.',','),px,py-10)})}
   x.fillStyle=T.mut;x.font='600 11px system-ui';x.textAlign='left';x.fillText(byOx?'wysokość słupka = stopień utlenienia metalu':'słupek = stopień utlenienia (najwyższy) · linia = elektroujemność',L+4,12);
   note.innerHTML=byOx?'<b>'+st.m+'</b>: '+I.map(function(it){return A.pretty(it.f)+' (+'+it.ox+') — <b style="color:'+CC(it.char)+'">'+it.char+'</b>'}).join(' → ')+'. Ten sam pierwiastek może tworzyć tlenki o różnym charakterze — decyduje stopień utlenienia (im wyższy, tym bardziej kwasowy). Dlatego reguła „metal = zasadowy” jest tylko przybliżeniem.':
    'W okresie rośnie elektroujemność i stopień utlenienia pierwiastka w najwyższym tlenku → charakter przesuwa się od zasadowego, przez amfoteryczny, do kwasowego. '+(st.m===2?'Fluor pomijamy: OF₂ to fluorek tlenu, nie tlenek.':'SiO₂ — kwasowy, ale z wodą praktycznie nie reaguje (sieć kowalencyjna).')}
  draw()}});

/* ---------- 5. SPALANIE — OTRZYMYWANIE TLENKÓW ---------- */
var BURN={Mg:{rx:'mgO2',fx:'metal',metal:'Mg',prod:'MgO'},Fe:{rx:'feO2',fx:'metal',metal:'Fe',prod:'Fe3O4'},Na:{rx:'naO2',fx:'metal',metal:'Na',prod:'Na2O'},Cu:{rx:'cuO2',fx:'metal',metal:'Cu',prod:'CuO'},
 S:{rx:'sO2',fx:'flame',color:[70,100,255],prod:'SO2'},P:{rx:'pO2',fx:'flame',color:[255,250,235],smoke:1,prod:'P2O5'},H2:{rx:'h2O2',fx:'flame',fuel:'H2',prod:'H2O'},
 C:{rx:'cO2',inc:'cO2Inc',fx:'flame',color:[255,140,60],prod:'CO2',o2:1},CH4:{rx:'ch4O2',inc:'ch4O2Inc',soot:'ch4O2Soot',fx:'flame',fuel:'CH4',prod:'CO2',o2:1}};
V.define('n01-spalanie-v01',{title:'Otrzymywanie tlenków: spalanie pierwiastków i paliw',tag:'E8',
 hint:'Kliknij substancję — od razu spala się w tlenie („Powtórz” uruchamia spalanie jeszcze raz). Równanie i obserwacja pochodzą z bazy reakcji silnika. Dla węgla i metanu zmieniaj dopływ tlenu: pełny → CO₂, niedobór → CO (czad), duży niedobór → sadza.',
 foot:'Płomień i spalanie metali: GFX (CHE.PHYS.flame) · równania i obserwacje: CHE.REACTION / REACTION_DATA · próg dopływu O₂ — model jakościowy.',
 build:function(host){host.innerHTML='';var A=OXA(),st={s:'Mg',o2:100,on:1,t0:performance.now()};var bar=el('div','r');host.appendChild(bar);var bs=[];
  function fire(){st.on=1;st.t0=performance.now();ui()}
  Object.keys(BURN).forEach(function(k){var b=btn(bar,A.pretty(k),function(){st.s=k;bs.forEach(function(q){q.classList.toggle('on',q===b)});fire()});bs.push(b);if(k===st.s)b.classList.add('on')});
  var b2=el('div','r');host.appendChild(b2);var go=btn(b2,'Powtórz',fire,'on');btn(b2,'Zgaś',function(){st.on=0;ui()});
  var rl=el('label',null,'dopływ O₂ ');var r=el('input');r.type='range';r.min=20;r.max=120;r.step=5;r.value=100;var ro=el('b');rl.append(r,ro);b2.appendChild(rl);r.oninput=function(){st.o2=+r.value;if(!st.on){st.on=1;st.t0=performance.now()}ui()};
  function cur(){var B=BURN[st.s];if(!B.o2)return B.rx;return st.o2>=100?B.rx:st.o2>=60?(B.inc||B.rx):(B.soot||B.inc||B.rx)}
  var m=G().mount(host,{height:280,parts:[{id:'stage',x:0,y:0,w:1,h:1}],fx:{metalBurn:true,flame:true,sparks:true},get:function(){var B=BURN[st.s],on=st.on,k=on?Math.min(1,(performance.now()-st.t0)/600):0,fx={};
    fx.flame={power:0};fx.metalBurn={power:0};
    if(on&&B.fx==='metal')fx.metalBurn={metal:B.metal,power:1.1*k+.01,sparks:B.metal==='Fe'?2.5:1,smoke:B.metal==='Mg'?1.5:.8,glow:B.metal==='Mg'?1.8:1};
    if(on&&B.fx==='flame'){var phi=B.o2?Math.max(.6,Math.min(2,100/st.o2)):1;fx.flame={power:.9*k,fuel:B.fuel||'CH4',phi:phi,soot:B.o2&&st.o2<60?.8:0,color:B.color||null,size:1.1}}
    return{fx:fx}}});
  var note=el('div','note');host.appendChild(note);
  function ui(){var B=BURN[st.s];rl.style.display=B.o2?'':'none';ro.textContent=st.o2+'%';var k=cur(),RD=(D().REACTION_DATA||{})[k]||{},e=null;try{e=A.prettyEq(C.REACTION.equation(k))}catch(_){}
   note.innerHTML=(st.on?'<b>'+(e||k)+'</b><br>Obserwacja: '+(RD.observation||'—')+(RD.conditions?'<br>Warunki: '+RD.conditions:'')+(RD.safety&&RD.safety.length?'<br><span style="color:#b91c1c">BHP: '+RD.safety.join('; ')+'</span>':'')+
    (B.o2&&st.o2<100?'<br><b style="color:#b91c1c">Niedobór tlenu → spalanie niecałkowite'+(st.o2<60?' (sadza C)':' (CO — czad: bezbarwny, bezwonny, trujący)')+'.</b>':''):'Płomień zgaszony — kliknij substancję lub „Powtórz”. Produkt: '+A.pretty(B.prod)+(st.s==='P'?' (zapis szkolny P₂O₅; cząsteczka P₄O₁₀)':'')+(st.s==='Na'?' (zapis szkolny; przy spalaniu sodu w nadmiarze tlenu powstaje głównie nadtlenek Na₂O₂)':''))}
  ui()}});
})();
