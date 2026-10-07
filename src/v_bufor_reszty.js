;/* ===== v0.40: 'kw-bufor-v01' (bufor vs woda, GFX + pKa z silnika) i 'kw-reszty-v01' (kwas → reszta → sole, CHE.IONIC) ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var SUB='₀₁₂₃₄₅₆₇₈₉',pf=function(s){return String(s).replace(/([A-Za-z\)])(\d+)/g,function(m,a,n){return a+n.replace(/\d/g,function(d){return SUB[d]})})};
/* ---------- BUFOR ---------- */
V.define('kw-bufor-v01',{title:'Bufor octanowy kontra czysta woda — dodawaj kwas i zasadę',tag:'CHE',
 hint:'Ta sama kropla HCl lub NaOH trafia do wody i do buforu CH₃COOH / CH₃COONa. Porównaj zmiany pH (pH-metr, wskaźnik uniwersalny, wykres).',
 foot:'pKa(CH₃COOH) z CHE.DATA.ACID_SYSTEMS · pH buforu: Henderson–Hasselbalch (z wyczerpaniem pojemności) · barwa: CHE.COLORS ind-uniwersalny · 100 cm³ roztworu, kropla = 0,05 cm³ 1 M (5·10⁻⁵ mol)',
 build:function(host){host.innerHTML='';var G=C.LAB.GFX,A=(C.DATA.ACID_SYSTEMS||{}).CH3COOH||{pKa:[4.756]},pKa=A.pKa[0],Vl=0.1,drop=5e-5;
  var st={cb:0.1,ratio:1},S={n:0,hist:{}},B0={};
  /* stan = funkcja netto dodanych moli H⁺ (n>0) lub OH⁻ (n<0) — wykres jednoznaczny */
  function reset(){var nT=st.cb*Vl;B0.HA=nT/(1+st.ratio);B0.A=nT-B0.HA;S.n=0;S.hist={};rec()}
  function rec(){S.hist[S.n]=[S.n,pHw(),pHb()]}
  function pHstrong(n){var c=n/Vl,h=(c+Math.sqrt(c*c+4e-14))/2;return -Math.log10(h)}
  function pHw(){return pHstrong(S.n*drop)}
  function comp(){var x=S.n*drop;return{HA:B0.HA+x,A:B0.A-x}}
  /* dokładny bilans ładunku: h + Na⁺ = CH₃COO⁻ + Cl⁻ + OH⁻ (bisekcja po log h) */
  function pHb(){var x=S.n*drop,cT=(B0.HA+B0.A)/Vl,Na=(B0.A+Math.max(0,-x))/Vl,Cl=Math.max(0,x)/Vl,Ka=Math.pow(10,-pKa),lo=-14.5,hi=0.5;
   for(var i=0;i<60;i++){var m=(lo+hi)/2,h=Math.pow(10,m),f=h+Na-Cl-cT*Ka/(Ka+h)-1e-14/h;if(f>0)hi=m;else lo=m}return -(lo+hi)/2}
  function addH(sign){S.n+=sign;rec();draw()}
  var bar=el('div','r');host.appendChild(bar);
  function btn(t,f){var b=el('button',null,t);b.type='button';b.onclick=f;bar.appendChild(b);return b}
  btn('+ kropla HCl',function(){m.trigger('dropMix',{color:[240,240,240]},0);m.trigger('dropMix',{color:[240,240,240]},2);addH(1)});btn('+ 10 kropli HCl',function(){for(var i=0;i<10;i++)addH(1)});
  btn('+ kropla NaOH',function(){m.trigger('dropMix',{color:[240,240,240]},0);m.trigger('dropMix',{color:[240,240,240]},2);addH(-1)});btn('+ 10 kropli NaOH',function(){for(var i=0;i<10;i++)addH(-1)});
  btn('↺ od nowa',function(){reset();draw()});
  var bar2=el('div','r');host.appendChild(bar2);var r1=el('input');r1.type='range';r1.min=.01;r1.max=.5;r1.step=.01;r1.value=st.cb;var o1=el('b');var l1=el('label',null,'stężenie buforu ');l1.append(r1,o1);bar2.appendChild(l1);
  var r2=el('input');r2.type='range';r2.min=-1;r2.max=1;r2.step=.1;r2.value=0;var o2=el('b');var l2=el('label',null,' [A⁻]/[HA] ');l2.append(r2,o2);bar2.appendChild(l2);
  r1.oninput=function(){st.cb=+r1.value;reset();draw()};r2.oninput=function(){st.ratio=Math.pow(10,+r2.value);reset();draw()};
  var col=function(p){return G.colors.at('ind-uniwersalny',Math.max(0,Math.min(14,p)))||[200,200,200]};
  var m=G.mount(host,{height:250,parts:[{id:'beaker',x:.02,y:.12,w:.28,h:.84,get:function(){return{liquid:col(pHw()),level:.62,label:'woda',T:25}}},{id:'pHmeter',x:.3,y:.1,w:.18,h:.86,get:function(){return{pH:pHw()}}},
   {id:'beaker',x:.52,y:.12,w:.28,h:.84,get:function(){return{liquid:col(pHb()),level:.62,label:'bufor',T:25}}},{id:'pHmeter',x:.8,y:.1,w:.18,h:.86,get:function(){return{pH:pHb()}}}]});
  var ch=el('canvas');ch.style.cssText='width:100%;height:200px;display:block;border-radius:10px;background:var(--surface-soft,#f1f5f9);margin-top:8px';host.appendChild(ch);var note=el('div','note');host.appendChild(note);
  function draw(){o1.textContent=st.cb.toFixed(2).replace('.',',')+' mol/dm³';o2.textContent=st.ratio.toFixed(2).replace('.',',');
   var d=Math.min(2,window.devicePixelRatio||1),W=ch.clientWidth||500,H=ch.clientHeight||200;ch.width=W*d;ch.height=H*d;var x=ch.getContext('2d');x.setTransform(d,0,0,d,0,0);var T=G.theme(),L=34,B=H-22,R=W-10,Tp=10;
   var HL=Object.keys(S.hist).map(function(k){return S.hist[k]});var ks=HL.map(function(h){return h[0]}),kmin=Math.min(-5,...ks),kmax=Math.max(5,...ks);x.strokeStyle=T.mut;x.fillStyle=T.mut;x.font='600 10px system-ui';x.beginPath();x.moveTo(L,Tp);x.lineTo(L,B);x.lineTo(R,B);x.stroke();
   [0,7,14].forEach(function(p){var y=B-(B-Tp)*p/14;x.fillText(p,L-18,y+3);x.globalAlpha=.25;x.beginPath();x.moveTo(L,y);x.lineTo(R,y);x.stroke();x.globalAlpha=1});x.textAlign='center';x.fillText('← krople NaOH | krople HCl →',(L+R)/2,H-4);
   var X=function(k){return L+(R-L)*(k-kmin)/(kmax-kmin)},Y=function(p){return B-(B-Tp)*Math.max(0,Math.min(14,p))/14};
   var pts=HL.sort(function(a,b){return a[0]-b[0]});[[1,'#2563eb','woda'],[2,'#16a34a','bufor']].forEach(function(sr){x.strokeStyle=sr[1];x.lineWidth=2.5;x.beginPath();pts.forEach(function(p,i){i?x.lineTo(X(p[0]),Y(p[sr[0]])):x.moveTo(X(p[0]),Y(p[sr[0]]))});x.stroke();x.fillStyle=sr[1];pts.forEach(function(p){x.beginPath();x.arc(X(p[0]),Y(p[sr[0]]),2.5,0,7);x.fill()});x.textAlign='left';x.fillText(sr[2],R-50,sr[0]===1?Tp+10:Tp+24)});
   var q=comp(),cap=Math.min(q.HA,q.A)/Math.max(B0.HA,B0.A);note.innerHTML='<b>Woda:</b> pH = '+pHw().toFixed(2).replace('.',',')+' · <b>Bufor:</b> pH = '+pHb().toFixed(2).replace('.',',')+' (pKa = '+String(pKa).replace('.',',')+') · pozostała pojemność buforu: <b>'+Math.round(Math.max(0,cap)*100)+'%</b>'+
    '<br>Dodane H⁺ reaguje z octanem: CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O; dodane OH⁻ — z kwasem: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O. Gdy jednego składnika zabraknie, bufor przestaje działać i pH zmienia się gwałtownie.'}
  reset();setTimeout(draw,0)}});
/* ---------- KWAS → RESZTA → SOLE ---------- */
var RM={HCl:'Cl',HBr:'Br',HI:'I',HF:'F',HNO3:'NO3',H2SO4:'SO4',H2SO3:'SO3',H2CO3:'CO3',H3PO4:'PO4',H2S:'S',CH3COOH:'CH3COO'};
var CATS=['Na','K','NH4','Mg','Ca','Ba','Al','Zn','Fe2','Fe3','Cu','Ag','Pb'];
V.define('kw-reszty-v01',{title:'Kwas → reszta kwasowa → sole',tag:'E8',hint:'Wybierz kwas: zobaczysz jego dysocjację, resztę kwasową (ładunek = liczba atomów H) i sole z różnymi metalami — wzór, nazwę i rozpuszczalność.',foot:'CHE.DATA.ACID_SYSTEMS · CHE.IONIC.compound / SOLUBILITY_TABLE',
 build:function(host){host.innerHTML='';var I=C.IONIC,A=C.DATA.ACID_SYSTEMS||{},S=C.DATA.SUBSTANCES||{},bar=el('div','r'),out=el('div');host.append(bar,out);var cur='H2SO4';
  Object.keys(RM).filter(function(k){return A[k]||S[k]}).forEach(function(k){var b=el('button',null,pf(k));b.type='button';b.dataset.k=k;b.onclick=function(){cur=k;show()};bar.appendChild(b)});
  function show(){[].forEach.call(bar.children,function(b){b.classList.toggle('on',b.dataset.k===cur)});var an=RM[cur],nH=(cur.match(/^H(\d?)/)||[])[1]||'1',a=A[cur]||{},sub=S[cur]||{},tab=I.table,ai=tab.anions.find(function(x){return x.id===an});
   var dis=pf(cur)+(a.strong||a.strongFirst?' → ':' ⇌ ')+(nH>1?nH+' ':'')+'H⁺ + '+ai.ion;
   var rows=CATS.map(function(c){var k=I.compound(c,an);if(!k)return '';var s=k.sol||'',clr=s==='R'?'#2e7d4f':s==='N'?'#b83a45':s==='T'?'#b06f1c':'#64748b';return '<tr><td style="padding:4px 8px"><b>'+k.pretty+'</b></td><td style="padding:4px 8px">'+k.name+'</td><td style="padding:4px 8px;color:'+clr+';font-weight:800">'+s+'</td></tr>'}).join('');
   out.innerHTML='<div style="font:700 18px Inter,system-ui;margin:8px 0">'+pf(cur)+' — '+(sub.aqName||sub.name||'')+'</div><div class="note"><b>Dysocjacja (szkolnie):</b> '+dis+'<br><b>Reszta kwasowa:</b> '+ai.ion+' — ładunek '+(nH>1?'−'+nH:'−1')+' (tyle, ile atomów H oddaje kwas) · nazwa soli: <b>'+ai.name+'</b> …'+(a.strong||a.strongFirst?' · kwas mocny':' · kwas słaby')+(a.note?'<br><i>'+a.note+'</i>':'')+'</div>'+
    '<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:13.5px;margin-top:6px"><tr><th align="left" style="padding:4px 8px">sól</th><th align="left" style="padding:4px 8px">nazwa</th><th align="left" style="padding:4px 8px">rozp.</th></tr>'+rows+'</table></div><div class="note">R — rozpuszczalna · T — trudno · N — nierozpuszczalna · — nie istnieje w wodzie. Wzór soli: ładunki kationu i reszty muszą się równoważyć (krzyżowanie wartościowości).</div>'}
  show()}});
})();
