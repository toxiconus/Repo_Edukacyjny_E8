/* bio-rysunki.js — rysunki z podpisami do lekcji i arkuszy LKO (v0.1, 2026-10-20).
   Wspólny silnik lab(): 3 tryby — „poznaj części” (klik = opis), „znajdź część” (klik w rysunek), „podpisz część” (numer → wybierz nazwę).
   Plan: biologia/plany/PLAN_RYSUNKOW_BIO.md. Kolory tylko neutralne + zmienne CSS. Doklejany po bio-viz.js. */
(function(){
var BIO=window.BIO;if(!BIO||!BIO.define||BIO.RYS)return;BIO.RYS=1;
var S0=BIO.S,H=BIO.H,ST='#51606e';
function S(t,a,k){return S0(t,a,k==null?[]:Array.isArray(k)?k:[k])}

/* ---------- pomocnicze kształty ---------- */
function clr(e){while(e.firstChild)e.removeChild(e.firstChild)}
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function P(d,f,s,w,x){var a={d:d,fill:f||'none',stroke:s||ST,'stroke-width':w||1.5,'stroke-linejoin':'round','stroke-linecap':'round'};for(var k in x||{})a[k]=x[k];return S('path',a)}
function E(cx,cy,rx,ry,f,s,w,rot){var a={cx:cx,cy:cy,rx:rx,ry:ry,fill:f||'none',stroke:s||ST,'stroke-width':w||1.5};if(rot)a.transform='rotate('+rot+' '+cx+' '+cy+')';return S('ellipse',a)}
function C(cx,cy,r,f,s,w){return S('circle',{cx:cx,cy:cy,r:r,fill:f||'none',stroke:s||ST,'stroke-width':w==null?1.5:w})}
function R(x,y,w,h,rx,f,s,sw){return S('rect',{x:x,y:y,width:w,height:h,rx:rx||0,fill:f||'none',stroke:s||ST,'stroke-width':sw==null?1.5:sw})}
function L(x1,y1,x2,y2,s,w,x){var a={x1:x1,y1:y1,x2:x2,y2:y2,stroke:s||ST,'stroke-width':w||1.5,'stroke-linecap':'round'};for(var k in x||{})a[k]=x[k];return S('line',a)}
function PL(pts,s,w){return S('polygon',{points:pts,fill:'none',stroke:s||ST,'stroke-width':w||1.5})}
function mir(d){return d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g,function(_,x,y){return (360-parseFloat(x))+','+y})}
function hit(g,w){g.insertBefore(S('rect',{x:0,y:0,width:0,height:0,fill:'none'}),null)}

/* ---------- silnik: rysunek z częściami ----------
   sp = {vars:[[k,etykieta]…]|null, start, get(k)→{w,h,label,base(svg),parts:[{n,d,m:[x,y],z,draw(g)}]}, after(k)→element|null} */
function lab(el,sp){
  var vars=sp.vars||null,vk=vars?(sp.start&&vars.some(function(v){return v[0]===sp.start})?sp.start:vars[0][0]):null;
  var mode='poznaj',sel=-1,q=-1,done={},tries=0,ok=0,D,gs=[],mk=[];
  var vbar=vars?H('div','bw-seg bv-tools'):null,mbar=H('div','bw-seg bv-tools'),holder=H('div'),leg=H('div','bw-seg'),out=H('div','bv-info bw-out'),extra=H('div');
  out.setAttribute('aria-live','polite');leg.style.marginTop='8px';
  [vbar,mbar,holder,leg,out,extra].forEach(function(e){if(e)el.appendChild(e)});
  function seg2(box,items,cur,cb){clr(box);items.forEach(function(it){var b=H('button','bv-btn'+(it[0]===cur?' on':''));b.type='button';b.setAttribute('aria-pressed',String(it[0]===cur));b.textContent=it[1];b.onclick=function(){cb(it[0])};box.appendChild(b)})}
  function say(h,cls){out.className='bv-info bw-out'+(cls?' '+cls:'');out.innerHTML=h}
  function btnIn(txt,fn){var b=H('button','bv-btn');b.type='button';b.textContent=txt;b.style.marginTop='6px';b.onclick=fn;out.appendChild(b);return b}
  function draw(){
    D=sp.get(vk);clr(holder);var svg=BIO.svg(D.w,D.h,D.label);svg.setAttribute('class','bw-svg');holder.appendChild(svg);
    if(D.base)D.base(svg);gs=[];mk=[];
    var order=D.parts.map(function(p,i){return i}).sort(function(a,b){return (D.parts[a].z||0)-(D.parts[b].z||0)||a-b});
    order.forEach(function(i){var p=D.parts[i],g=S('g',{'class':'bv-hit',role:'button',tabindex:'0','aria-label':'część '+(i+1)});p.draw(g);
      g.addEventListener('click',function(){click(i)});g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();click(i)}});
      gs[i]=g;svg.appendChild(g)});
    D.parts.forEach(function(p,i){var m=S('g',{'pointer-events':'none'},[S('circle',{cx:p.m[0],cy:p.m[1],r:9,fill:'var(--accent,#3f7a28)',stroke:'#fff','stroke-width':1.5}),BIO.T(p.m[0],p.m[1]+.5,String(i+1),{s:10,w:800,f:'#fff'})]);mk[i]=m;svg.appendChild(m)});
    clr(extra);if(sp.after){var a=sp.after(vk);if(a)extra.appendChild(a)}
    sel=-1;intro();refresh();place(svg,0)}
  /* automatyczne ustawienie numerów: środek obrysu części (małe części), z unikaniem nakładania; duże tła zostają na ręcznym m */
  function place(svg,n){
    if(!svg.isConnected||!D){if(n<12)setTimeout(function(){place(svg,n+1)},250);return}
    var pos=[],ok=true;
    D.parts.forEach(function(p,i){
      var b;try{b=gs[i].getBBox()}catch(e){ok=false;return}
      if(!b||(!b.width&&!b.height)){ok=false;return}
      var x=p.m[0],y=p.m[1];
      if(!p.fix&&b.width<=200&&b.height<=140){x=b.x+b.width/2;y=b.y+b.height/2}
      else if(!p.fix){x=Math.min(Math.max(p.m[0],b.x+10),b.x+b.width-10);y=Math.min(Math.max(p.m[1],b.y+10),b.y+b.height-10)}
      for(var t=0;t<14;t++){var hit=pos.some(function(q){return Math.abs(q[0]-x)<20&&Math.abs(q[1]-y)<20});if(!hit)break;var a=t*2.4;x=x+Math.cos(a)*9;y=y+Math.sin(a)*9}
      x=Math.min(Math.max(x,10),D.w-10);y=Math.min(Math.max(y,10),D.h-10);pos[i]=[x,y]});
    if(!ok){if(n<12)setTimeout(function(){place(svg,n+1)},250);return}
    pos.forEach(function(q,i){var m=mk[i];if(!m)return;var c=m.querySelector('circle'),t=m.querySelector('text');c.setAttribute('cx',q[0]);c.setAttribute('cy',q[1]);if(t){t.setAttribute('x',q[0]);t.setAttribute('y',q[1]+.5)}})}
  function intro(){if(mode==='poznaj')say('<b>Kliknij część rysunku lub numer pod nim</b><span>Zobaczysz nazwę i do czego służy. Potem sprawdź się w trybach „znajdź” i „podpisz”.</span>')}
  function refresh(){
    gs.forEach(function(g,i){g.classList.toggle('sel',i===sel&&mode==='poznaj')});
    mk.forEach(function(m,i){m.style.display=(mode==='poznaj'||(mode==='podpisz'&&i===q))?'':'none'});
    clr(leg);if(mode==='poznaj')D.parts.forEach(function(p,i){var b=H('button','bv-btn'+(i===sel?' on':''));b.type='button';b.textContent=(i+1)+'. '+p.n;b.onclick=function(){click(i)};leg.appendChild(b)});
    seg2(mbar,[['poznaj','poznaj części'],['znajdz','znajdź część'],['podpisz','podpisz część']],mode,setMode);
    if(vbar)seg2(vbar,vars,vk,function(k){vk=k;mode='poznaj';draw()})}
  function setMode(m){mode=m;sel=-1;done={};ok=0;q=-1;if(m==='poznaj'){intro();refresh()}else next()}
  function next(){
    var rem=D.parts.map(function(p,i){return i}).filter(function(i){return !done[i]});
    if(!rem.length){q=-1;refresh();say('<b>Koniec: '+ok+' / '+D.parts.length+' bez pomyłki</b><span>'+(ok===D.parts.length?'Wszystko opanowane.':'Wróć do trybu „poznaj części” i powtórz te, w których się pomyliłeś.')+'</span>',ok===D.parts.length?'ok':'');btnIn('Jeszcze raz',function(){setMode(mode)});return}
    q=rem[Math.floor(Math.random()*rem.length)];tries=0;refresh();
    if(mode==='znajdz'){say('<b>Kliknij na rysunku: '+D.parts[q].n+'</b><span>Pozostało: '+rem.length+' z '+D.parts.length+'.</span>')}
    else{say('<b>Jak nazywa się część nr '+(q+1)+'?</b>');var names=D.parts.map(function(p){return p.n}),ans=D.parts[q].n,opts=names.length>7?shuf(names.filter(function(n){return n!==ans})).slice(0,4).concat([ans]):names;
      var box=H('div','bw-seg');box.style.marginTop='6px';shuf(opts).forEach(function(n){var b=H('button','bv-btn');b.type='button';b.textContent=n;b.onclick=function(){check(n===ans,D.parts[q].n,n)};box.appendChild(b)});out.appendChild(box)}}
  function check(good,right,gave){
    if(good){if(!tries)ok++;done[q]=1;say('<b>Dobrze: '+right+'</b><span>'+D.parts[q].d+'</span>','ok');btnIn('Dalej →',next)}
    else{tries++;say('<b>Nie: '+gave+'</b><span>Spróbuj jeszcze raz'+(mode==='znajdz'?' — szukasz: '+D.parts[q].n:' — numer '+(q+1))+'.</span>','bad');if(mode==='podpisz'){var b=out.querySelector('.bw-seg');if(b)out.removeChild(b);var names=D.parts.map(function(p){return p.n}),ans=D.parts[q].n,opts=names.length>7?shuf(names.filter(function(n){return n!==ans})).slice(0,4).concat([ans]):names,box=H('div','bw-seg');box.style.marginTop='6px';shuf(opts).forEach(function(n){var bb=H('button','bv-btn');bb.type='button';bb.textContent=n;bb.onclick=function(){check(n===ans,ans,n)};box.appendChild(bb)});out.appendChild(box)}}}
  function click(i){
    if(mode==='poznaj'){sel=i;refresh();say('<b>'+(i+1)+'. '+D.parts[i].n+'</b><span>'+D.parts[i].d+'</span>')}
    else if(mode==='znajdz'&&q>=0&&!done[q])check(i===q,D.parts[q].n,D.parts[i].n)}
  draw()}
BIO.lab=lab;

/* =====================================================================
   1. RYBA — budowa zewnętrzna i wewnętrzna (ryba kostnoszkieletowa)
   ===================================================================== */
BIO.define('ryba-budowa',{opis:'Ryba kostnoszkieletowa: płetwy (parzyste i nieparzyste), pokrywa skrzelowa, linia boczna, pęcherz pławny, łuski; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:230,label:'Ryba kostnoszkieletowa z oznaczonymi częściami',parts:[
    {n:'ciało z łuskami',m:[232,134],d:'Łuski zachodzą na siebie jak dachówki, chronią ciało i zmniejszają opór wody; skóra wydziela śluz. Ciało opływowe, spłaszczone bocznie.',draw:function(g){g.appendChild(P('M40,120 C70,72 190,62 285,108 C190,172 70,168 40,120Z','#dbe9f3'));for(var r=0;r<3;r++)for(var c=0;c<7;c++)g.appendChild(P('M'+(150+c*17+(r%2)*8)+','+(120+r*12)+' q6,8 12,0',null,'#8aa4b6',1))}},
    {n:'płetwa ogonowa',m:[326,114],d:'Nieparzysta. Główny „napęd”: ruchy ogona na boki pchają rybę do przodu.',draw:function(g){g.appendChild(P('M276,104 L336,66 Q320,114 336,162 L276,120Z','#c6dcec'))}},
    {n:'płetwa grzbietowa',m:[160,52],d:'Nieparzysta. Stabilizuje ciało — chroni rybę przed przewracaniem się na bok.',draw:function(g){g.appendChild(P('M118,80 Q150,34 205,84Z','#c6dcec'))}},
    {n:'płetwa odbytowa',m:[240,164],d:'Nieparzysta, na brzusznej stronie przy końcu ciała. Razem z grzbietową stabilizuje ruch.',draw:function(g){g.appendChild(P('M205,142 Q232,176 262,122Z','#c6dcec'))}},
    {n:'płetwa piersiowa',m:[88,162],d:'Parzysta (jedna z pary). Służy do sterowania, hamowania i zmiany głębokości.',draw:function(g){g.appendChild(E(104,138,7,20,'#c6dcec',ST,1.5,-35))}},
    {n:'płetwa brzuszna',m:[150,186],d:'Parzysta. Pomaga utrzymać równowagę i sterować.',draw:function(g){g.appendChild(E(146,164,6,15,'#c6dcec',ST,1.5,25))}},
    {n:'pokrywa skrzelowa',m:[78,86],d:'Kostna płytka osłaniająca skrzela. Jej ruchy pompują wodę przez skrzela, w których zachodzi wymiana gazowa: tlen z wody do krwi, CO₂ z krwi do wody.',draw:function(g){g.appendChild(P('M82,88 Q108,118 84,152 Q74,120 82,88Z','#a9c7dc'))}},
    {n:'linia boczna',m:[230,95],d:'Narząd zmysłu. Wykrywa drgania i ruch wody (prądy, zbliżającą się rybę lub drapieżnika).',draw:function(g){g.appendChild(P('M92,116 Q190,100 276,112',null,'#2a6f97',2.5,{'stroke-dasharray':'5 3'}));g.insertBefore(P('M92,116 Q190,100 276,112',null,'transparent',14),g.firstChild)}},
    {n:'pęcherz pławny',m:[170,122],d:'Zbiornik wypełniony gazem. Zmiana ilości gazu reguluje wyporność — ryba utrzymuje się na danej głębokości bez wysiłku. Nie służy do oddychania (ryby oddychają skrzelami).',draw:function(g){g.appendChild(E(170,122,38,11,'#f4fafd','#2a6f97',1.5))}},
    {n:'oko',m:[50,96],d:'Ryby widzą pod wodą; soczewka jest prawie kulista, zwykle brak powiek.',draw:function(g){g.appendChild(C(60,112,8,'#fff'));g.appendChild(C(60,112,3.5,'#1a2332','#1a2332',1))}}
  ]}}})}});

/* =====================================================================
   2. MIKROSKOP ŚWIETLNY
   ===================================================================== */
BIO.define('mikroskop-budowa',{opis:'Mikroskop świetlny: okular, tubus, rewolwer, obiektyw, stolik, preparat, kondensor, źródło światła, śruby, statyw; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:250,label:'Mikroskop świetlny z oznaczonymi częściami',parts:[
    {n:'okular',m:[208,24],d:'Soczewka, przez którą patrzysz. Zwykle powiększa 10×.',draw:function(g){g.appendChild(R(155,12,30,24,3,'#cfd8dc'));g.appendChild(R(150,10,40,5,2,'#90a4ae'))}},
    {n:'tubus',m:[208,72],d:'Rura łącząca okular z obiektywem; osłania drogę światła przed światłem z boku.',draw:function(g){g.appendChild(R(158,36,24,70,2,'#b0bec5'))}},
    {n:'rewolwer',m:[212,114],d:'Obrotowa tarcza z obiektywami — obracając ją, zmieniasz powiększenie. Zawsze zaczynamy od obiektywu o najmniejszym powiększeniu.',draw:function(g){g.appendChild(PL('148,106 192,106 186,122 154,122'));g.lastChild.setAttribute('fill','#90a4ae')}},
    {n:'obiektyw',m:[128,140],d:'Soczewki tuż nad preparatem (np. 4×, 10×, 40×). Powiększenie całkowite = powiększenie okularu × powiększenie obiektywu (np. 10 × 40 = 400×).',draw:function(g){g.appendChild(R(153,122,12,30,2,'#607d8b'));g.appendChild(R(175,122,12,22,2,'#607d8b'))}},
    {n:'stolik',m:[96,174],d:'Płytka, na której kładziemy preparat; ma otwór, przez który przechodzi światło.',draw:function(g){g.appendChild(R(100,170,140,9,2,'#b0bec5'))}},
    {n:'preparat',m:[250,150],d:'Szkiełko podstawowe z obiektem, przykryte szkiełkiem nakrywkowym; zaciski trzymają je na stoliku. Obiekt musi być cienki i przezroczysty.',draw:function(g){g.appendChild(R(140,163,60,7,1,'#e8f4fb'));g.appendChild(R(160,160,20,3,0,'#cfe8f5','#51606e',1));g.appendChild(C(170,158,2,'#7a3fbf','none',0))}},
    {n:'kondensor i diafragma',m:[212,196],d:'Kondensor skupia światło na preparacie; przysłona (diafragma) reguluje ilość światła i kontrast obrazu.',draw:function(g){g.appendChild(PL('152,184 188,184 180,200 160,200'));g.lastChild.setAttribute('fill','#cfd8dc')}},
    {n:'źródło światła',m:[128,222],d:'Lampka (dawniej lusterko) oświetlająca preparat od dołu — to mikroskop świetlny.',draw:function(g){g.appendChild(C(170,220,10,'#ffe082','#f9a825',2));[-30,0,30].forEach(function(a){var r=a*Math.PI/180;g.appendChild(L(170+14*Math.sin(r),220-14*Math.cos(r),170+22*Math.sin(r),220-22*Math.cos(r),'#f9a825',2))})}},
    {n:'śruba makrometryczna',m:[292,118],d:'Duża śruba — szybkie, zgrubne ustawienie ostrości (tylko przy małym powiększeniu!).',draw:function(g){g.appendChild(C(262,120,13,'#78909c'));g.appendChild(L(256,120,268,120,'#fff',2))}},
    {n:'śruba mikrometryczna',m:[292,152],d:'Mała śruba — dokładne, powolne dopasowanie ostrości, zwłaszcza przy dużym powiększeniu.',draw:function(g){g.appendChild(C(262,150,7,'#78909c'));g.appendChild(L(258,150,266,150,'#fff',1.5))}},
    {n:'ramię statywu',m:[236,66],z:-1,d:'Łączy podstawę z tubusem. Mikroskop nosimy, trzymając za ramię i podstawę.',draw:function(g){g.appendChild(P('M190,60 Q268,60 268,150 L268,226',null,'#90a4ae',14))}},
    {n:'podstawa',m:[300,236],z:-1,d:'Ciężka podstawa stabilizuje cały mikroskop.',draw:function(g){g.appendChild(R(95,226,190,14,4,'#78909c'))}}
  ]}}})}});

/* =====================================================================
   3. JAJO PTAKA
   ===================================================================== */
var EGG='M180,16 C238,16 272,84 272,142 C272,204 232,244 180,244 C128,244 88,204 88,142 C88,84 122,16 180,16Z';
function eggP(s,f,st,w){return P(EGG,f,st,w,{transform:'translate(180 130) scale('+s+') translate(-180 -130)'})}
BIO.define('jajo-ptaka',{opis:'Jajo ptaka w przekroju: skorupa, błony, komora powietrzna, białko, żółtko, tarczka zarodkowa, chalazy; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:260,label:'Przekrój jaja ptaka',parts:[
    {n:'skorupa',m:[262,60],z:-2,d:'Zbudowana głównie z węglanu wapnia (CaCO₃). Chroni zarodek mechanicznie, a mikroskopijne pory przepuszczają O₂ i CO₂ — to wymiana gazowa zarodka.',draw:function(g){g.appendChild(eggP(1,'none','#8d7b68',7))}},
    {n:'błony podskorupowe',m:[104,60],z:-1,d:'Dwie cienkie błony pod skorupą chronią przed bakteriami i parowaniem wody. Na tępym końcu rozchodzą się, tworząc komorę powietrzną.',draw:function(g){g.appendChild(eggP(0.96,'none','#d9c9b5',4))}},
    {n:'komora powietrzna',m:[222,224],d:'Pęcherzyk powietrza na tępym końcu jaja; z wiekiem jaja powiększa się (woda paruje). Zapas powietrza dla pisklęcia tuż przed wykluciem.',draw:function(g){g.appendChild(E(180,231,36,8,'#f4fafd','#9fb7c4',1.5))}},
    {n:'białko',m:[236,100],z:-3,d:'Woda i białka. Amortyzuje wstrząsy, chroni przed drobnoustrojami, jest zapasem wody i białka dla zarodka.',draw:function(g){g.appendChild(eggP(0.94,'#fbf7e4','#e0d6a8',1.5))}},
    {n:'żółtko',m:[222,150],d:'Główny zapas pokarmu zarodka: tłuszcze, białka, witaminy. Duże żółtko = pisklę wykluwa się dobrze rozwinięte (rozwój prosty).',draw:function(g){g.appendChild(C(180,130,42,'#f6b93b','#d99a1c',1.5))}},
    {n:'błona żółtkowa',m:[140,170],z:1,d:'Cienka błona otaczająca żółtko; utrzymuje jego kształt i oddziela je od białka.',draw:function(g){g.appendChild(C(180,130,44,'none','#c98a10',2.5))}},
    {n:'tarczka zarodkowa',m:[214,78],z:2,d:'Mała jasna plamka na żółtku — tu leży zarodek (zapłodniona komórka jajowa zaczyna się dzielić). Dzięki chalazom tarczka jest zwrócona do góry, ku ciepłu ciała kwoki.',draw:function(g){g.appendChild(E(180,91,14,4.5,'#fffdf0','#c98a10',1))}},
    {n:'chalazy',m:[148,44],z:1,d:'Skręcone, białe sznureczki z gęstego białka. Utrzymują żółtko pośrodku jaja i pozwalają mu się obracać tak, by tarczka była u góry.',draw:function(g){g.appendChild(P('M180,88 C168,72 192,58 180,38',null,'#b9b39a',4));g.appendChild(P('M180,172 C168,188 192,204 180,224',null,'#b9b39a',4))}}
  ]}}})}});

/* =====================================================================
   4. TKANKI ZWIERZĘCE — 4 podstawowe
   ===================================================================== */
BIO.define('tkanki-zwierzece',{opis:'Cztery tkanki zwierzęce (nabłonkowa, łączna, mięśniowa, nerwowa) — rozpoznawanie po budowie; tryby poznaj / znajdź / podpisz',
mount:function(el){
  function panel(g,x,y,f){g.appendChild(R(x,y,170,116,8,f,'#9fb0bd',1.5))}
  lab(el,{get:function(){return{w:360,h:250,label:'Cztery tkanki zwierzęce w kwadratach',parts:[
    {n:'tkanka nabłonkowa',m:[22,22],d:'Ściśle przylegające komórki, prawie bez substancji międzykomórkowej. Wyściela powierzchnie (skóra, jelito, pęcherzyki płucne) i tworzy gruczoły: ochrona, wchłanianie, wydzielanie. Leży na błonie podstawnej i nie ma naczyń krwionośnych.',draw:function(g){panel(g,6,6,'#fdf1f4');for(var i=0;i<7;i++){g.appendChild(R(16+i*20,48,20,40,2,'#f7c9d5','#b05a72',1.3));g.appendChild(E(26+i*20,76,5,7,'#8e3b57','none',0))}
      g.appendChild(R(14,92,144,6,2,'#c9a3b0','none',0));}},
    {n:'tkanka łączna',m:[200,22],d:'Komórki rozproszone w dużej ilości substancji międzykomórkowej (włókna kolagenowe + istota podstawowa). Łączy, podpiera, wypełnia, transportuje. Do łącznych należą też kość, chrząstka, krew i tkanka tłuszczowa.',draw:function(g){panel(g,184,6,'#fff6e8');for(var i=0;i<9;i++)g.appendChild(P('M'+(194+i*2)+','+(20+i*10)+' q30,-10 60,2 t60,0 t40,-4',null,'#d9a85b',1.4));[[220,50],[290,82],[236,98],[320,40]].forEach(function(c){g.appendChild(E(c[0],c[1],12,7,'#f2cf91','#a87423',1.3,c[0]%40-10));g.appendChild(E(c[0],c[1],4,2.5,'#6b4a12','none',0,c[0]%40-10))});}},
    {n:'tkanka mięśniowa',m:[22,144],d:'Wydłużone komórki (włókna) kurczące się dzięki białkom: aktynie i miozynie. Rodzaje: szkieletowa (prążkowana, zależna od woli), gładka (narządy wewnętrzne) i mięsień sercowy. Na rysunku: szkieletowa — prążki poprzeczne i wiele jąder przy brzegu włókna.',draw:function(g){panel(g,6,128,'#fdeeee');[0,1,2].forEach(function(r){var y=142+r*32;g.appendChild(R(14,y,154,22,10,'#f0a5a5','#b34040',1.3));for(var x=22;x<160;x+=8)g.appendChild(L(x,y+3,x,y+19,'#c96b6b',2));[40,95,140].forEach(function(nx){g.appendChild(E(nx+r*6,y+3.5,5,2.5,'#6d1f1f','none',0))})});}},
    {n:'tkanka nerwowa',m:[200,144],d:'Neurony: ciało komórki z jądrem, dendryty (odbierają sygnały) i akson (przewodzi impuls dalej, często w osłonce mielinowej). Odbiera, przewodzi i przetwarza informacje.',draw:function(g){panel(g,184,128,'#eef2fb');
      g.appendChild(C(222,186,15,'#c4d0f2','#3f5aa8',1.5));g.appendChild(C(222,186,6,'#2a3d7a','none',0));
      ['M210,176 L196,152','M208,190 L192,198 L190,214','M216,200 L212,222','M230,174 L240,152','M206,182 L190,172 L192,158'].forEach(function(d){g.appendChild(P(d,null,'#3f5aa8',1.6))});
      g.appendChild(P('M237,188 C270,190 290,178 316,190',null,'#3f5aa8',2));for(var i=0;i<4;i++)g.appendChild(R(250+i*16,182+(i%2?1:0),12,9,4,'#f3f0d0','#8a8450',1));
      ['M316,190 L336,176','M316,190 L338,192','M316,190 L334,208'].forEach(function(d){g.appendChild(P(d,null,'#3f5aa8',1.6))});}}
  ]}}})}});

/* =====================================================================
   5. STAWONOGI — owad / pajęczak / skorupiak
   ===================================================================== */
function legs(g,arr,col,w){arr.forEach(function(d){g.appendChild(P(d,null,col||ST,w||2));g.appendChild(P(mir(d),null,col||ST,w||2))})}
function mp(d){return mir(d)}
BIO.define('stawonogi-budowa',{opis:'Stawonogi: owad, pajęczak (pająk), skorupiak (rak) — tagmy, odnóża, czułki, skrzydła, oddychanie; tryby poznaj / znajdź / podpisz + tabela porównawcza',
mount:function(el,o){
  var TAB={owad:['3 (głowa, tułów, odwłok)','3 pary (6)','1 para','tchawki (przetchlinki)','zwykle 2 pary'],pajak:['2 (głowotułów, odwłok)','4 pary (8)','brak (są szczękoczułki i nogogłaszczki)','płucotchawki i/lub tchawki','brak'],rak:['2 (głowotułów, odwłok)','5 par (10) — pierwsza z kleszczami','2 pary','skrzela','brak']};
  var NM={owad:'owad',pajak:'pajęczak (pająk)',rak:'skorupiak (rak)'};
  lab(el,{vars:[['owad','owad'],['pajak','pajęczak (pająk)'],['rak','skorupiak (rak)']],start:o.typ,
  after:function(k){var d=H('div','bw-tbl'),t=H('table'),hr=H('tr');['Cecha','Owad','Pajęczak','Skorupiak'].forEach(function(x){hr.appendChild(H('th',null,x))});t.appendChild(hr);
    ['Liczba tagm','Odnóża kroczne','Czułki','Narządy oddechowe','Skrzydła'].forEach(function(c,i){var tr=H('tr');tr.appendChild(H('td',null,'<b>'+c+'</b>'));['owad','pajak','rak'].forEach(function(v){tr.appendChild(H('td',v===k?'bv-cur':null,TAB[v][i]))});t.appendChild(tr)});
    d.appendChild(H('p',null,'<b>Wspólne cechy stawonogów:</b> ciało podzielone na tagmy, odnóża członowane, zewnętrzny szkielet chitynowy (trzeba go zrzucać przy wzroście — linienie).'));d.appendChild(t);return d},
  get:function(k){
    if(k==='owad')return{w:360,h:250,label:'Owad widziany z góry',parts:[
      {n:'głowa',m:[218,48],d:'Pierwsza tagma: oczy, czułki i narządy gębowe.',draw:function(g){g.appendChild(C(180,50,21,'#d7e3c4','#5c7a3a',1.8))}},
      {n:'tułów',m:[222,110],d:'Druga tagma: przyczepione są 3 pary odnóży i (zwykle) skrzydła — to centrum ruchu.',draw:function(g){g.appendChild(E(180,110,25,30,'#c9d9ae','#5c7a3a',1.8))}},
      {n:'odwłok',m:[222,190],d:'Trzecia tagma, składa się z segmentów. Zawiera narządy trawienne i rozrodcze; po bokach przetchlinki.',draw:function(g){g.appendChild(E(180,190,27,50,'#d7e3c4','#5c7a3a',1.8));[160,175,190,205,220].forEach(function(y){g.appendChild(P('M'+(180-26+((y-190)*(y-190))/110)+','+y+' L'+(180+26-((y-190)*(y-190))/110)+','+y,null,'#5c7a3a',1))})}},
      {n:'czułki',m:[132,12],d:'Narządy węchu, dotyku i smaku. Owady mają jedną parę (pajęczaki — żadnej).',draw:function(g){g.appendChild(P('M170,32 Q150,12 128,8',null,'#5c7a3a',2));g.appendChild(P(mp('M170,32 Q150,12 128,8'),null,'#5c7a3a',2))}},
      {n:'oko złożone',m:[150,44],d:'Zbudowane z wielu małych oczek (omatidiów). Daje obraz mozaikowy, świetnie wykrywa ruch.',draw:function(g){g.appendChild(E(165,48,7,10,'#37474f','#1a2332',1.2));g.appendChild(E(195,48,7,10,'#37474f','#1a2332',1.2))}},
      {n:'odnóża kroczne (3 pary)',m:[96,86],z:-1,d:'Trzy pary odnóży (6) przyczepione do tułowia — cecha wszystkich owadów. Odnóża są członowane.',draw:function(g){legs(g,['M158,96 L125,86 L102,100','M156,110 L118,112 L96,135','M158,124 L128,140 L110,172'],'#5c7a3a',2.5)}},
      {n:'skrzydła',m:[110,142],z:-2,d:'Zwykle dwie pary, wyrastają z tułowia (nie z odwłoku). Tylko owady wśród bezkręgowców potrafią latać aktywnie.',draw:function(g){g.appendChild(E(132,100,44,13,'#e8f2f9','#7aa0b8',1.4,-22));g.appendChild(E(228,100,44,13,'#e8f2f9','#7aa0b8',1.4,22));g.appendChild(E(138,124,34,10,'#e8f2f9','#7aa0b8',1.4,-8));g.appendChild(E(222,124,34,10,'#e8f2f9','#7aa0b8',1.4,8))}},
      {n:'przetchlinki',m:[140,212],d:'Otwory po bokach ciała prowadzące do tchawek — rurek, którymi powietrze dochodzi bezpośrednio do tkanek. Owady oddychają tchawkami (krew nie przenosi tlenu).',draw:function(g){[170,188,206,224].forEach(function(y){g.appendChild(C(156+((y-190)*(y-190))/150,y,2.2,'#1a2332','none',0));g.appendChild(C(204-((y-190)*(y-190))/150,y,2.2,'#1a2332','none',0))})}}
    ]};
    if(k==='pajak')return{w:360,h:250,label:'Pająk widziany z góry',parts:[
      {n:'głowotułów',m:[224,64],d:'Pierwsza tagma, zrośnięta głowa z tułowiem. Są na niej oczy, szczękoczułki, nogogłaszczki i 4 pary odnóży.',draw:function(g){g.appendChild(E(180,80,34,34,'#e2d5c3','#6f5a3f',1.8))}},
      {n:'odwłok',m:[232,170],d:'Druga tagma, duża i miękka. Mieszczą się w niej serce, jelito, płucotchawki, gruczoły przędne.',draw:function(g){g.appendChild(E(180,172,40,52,'#e9dccb','#6f5a3f',1.8))}},
      {n:'odnóża kroczne (4 pary)',m:[70,56],z:-1,d:'Cztery pary odnóży (8) — cecha pajęczaków, przyczepione do głowotułowia. Owady mają tylko 3 pary.',draw:function(g){legs(g,['M152,60 L112,36 L80,52','M148,74 L100,64 L64,90','M148,88 L100,100 L66,132','M152,100 L112,132 L90,176'],'#6f5a3f',2.5)}},
      {n:'nogogłaszczki',m:[200,32],d:'Dwie krótkie wyrostki przy otworze gębowym — czuciowe; u samców służą też do przekazania nasienia.',draw:function(g){g.appendChild(P('M170,48 L162,30 L158,22',null,'#6f5a3f',3));g.appendChild(P(mp('M170,48 L162,30 L158,22'),null,'#6f5a3f',3))}},
      {n:'oczy proste',m:[148,70],d:'Zwykle 6–8 małych oczu prostych (nie złożonych). Pająki nie mają czułków — czują głównie dotykiem i drganiami.',draw:function(g){[[170,62],[178,58],[186,58],[194,62],[174,70],[186,70]].forEach(function(p){g.appendChild(C(p[0]-4,p[1]-4,2.4,'#1a2332','none',0))})}},
      {n:'szczękoczułki',m:[178,34],d:'Para chwytników z gruczołami jadowymi przy otworze gębowym; służą do chwytania i zabijania zdobyczy.',draw:function(g){g.appendChild(P('M172,50 L170,36',null,'#6f5a3f',4));g.appendChild(P('M188,50 L190,36',null,'#6f5a3f',4))}},
      {n:'kądziołki przędne',m:[230,226],d:'Na końcu odwłoku; wydzielają nić pajęczą (białko jedwabiu), z której pająk buduje sieć lub kokon.',draw:function(g){g.appendChild(E(172,224,5,7,'#a58f6f','#6f5a3f',1.2));g.appendChild(E(188,224,5,7,'#a58f6f','#6f5a3f',1.2))}}
    ]};
    return{w:360,h:250,label:'Rak widziany z góry',parts:[
      {n:'głowotułów (karapaks)',m:[236,80],d:'Zrośnięta głowa i tułów okryte twardą tarczą (karapaksem). Na nim są oczy, czułki, kleszcze i odnóża. Pod tarczą znajdują się skrzela.',draw:function(g){g.appendChild(E(180,90,36,54,'#e8b4a0','#a0573b',1.8))}},
      {n:'odwłok',m:[236,168],d:'Segmentowana tagma zakończona wachlarzem ogonowym; mięśnie odwłoka pozwalają rakowi uciekać do tyłu.',draw:function(g){for(var i=0;i<6;i++)g.appendChild(R(168+i*0-0,143+i*15,24-i*0,12,4,'#edc2b0','#a0573b',1.4));}},
      {n:'czułki (2 pary)',m:[236,16],d:'Skorupiaki mają DWIE pary czułków (owady jedną, pajęczaki żadnej). Długie — czuciowe, krótkie — węchowe.',draw:function(g){g.appendChild(P('M170,38 L140,6',null,'#a0573b',2));g.appendChild(P('M190,38 L220,6',null,'#a0573b',2));g.appendChild(P('M174,36 L160,20',null,'#a0573b',2.5));g.appendChild(P('M186,36 L200,20',null,'#a0573b',2.5))}},
      {n:'kleszcze',m:[84,24],z:-1,d:'Pierwsza para odnóży przekształcona w chwytne kleszcze (szczypce) — do chwytania pokarmu i obrony.',draw:function(g){g.appendChild(P('M150,62 L112,44 L96,26',null,'#a0573b',4));g.appendChild(P(mp('M150,62 L112,44 L96,26'),null,'#a0573b',4));g.appendChild(E(92,22,10,6,'#d99578','#a0573b',1.4,-40));g.appendChild(E(268,22,10,6,'#d99578','#a0573b',1.4,40))}},
      {n:'odnóża kroczne',m:[82,110],z:-1,d:'Kolejne cztery pary odnóży do chodzenia (razem z kleszczami: 5 par, rak jest dziesięcionogiem).',draw:function(g){legs(g,['M148,78 L108,74 L84,98','M146,94 L104,100 L78,128','M148,108 L108,122 L90,152','M152,120 L120,140 L106,172'],'#a0573b',2.5)}},
      {n:'wachlarz ogonowy',m:[236,230],d:'Płetwa ogonowa z rozszerzonych odnóży ostatniego segmentu; szybkie podwinięcie odwłoka cofa raka.',draw:function(g){g.appendChild(P('M180,234 L146,244 Q140,226 160,218 L180,230 L200,218 Q220,226 214,244Z','#d99578','#a0573b',1.5))}},
      {n:'oko złożone na szypułce',m:[130,48],d:'Złożone oko osadzone na ruchomej szypułce — obraz mozaikowy, widzenie we wszystkich kierunkach.',draw:function(g){g.appendChild(L(166,44,160,32,'#a0573b',2.5));g.appendChild(L(194,44,200,32,'#a0573b',2.5));g.appendChild(C(160,30,4.5,'#37474f','#1a2332',1));g.appendChild(C(200,30,4.5,'#37474f','#1a2332',1))}}
    ]}}})}});

/* =====================================================================
   6. KOMÓRKI — zwierzęca / roślinna / grzyb / bakteria
   ===================================================================== */
function chloro(g,cx,cy,rot){g.appendChild(E(cx,cy,22,11,'#bfe5bf','#2e7d32',1.6,rot||0));for(var i=-1;i<=1;i++)g.appendChild(E(cx+i*9,cy,2.8,6,'#4caf50','none',0,rot||0))}
function mito(g,cx,cy,rot){g.appendChild(E(cx,cy,16,8,'var(--mito-bg,#fde9dc)','var(--mito,#e58b5a)',1.8,rot||0));g.appendChild(P('M'+(cx-9)+','+cy+' q3,-5 6,0 t6,0 t6,0',null,'var(--mito,#e58b5a)',1.2,{transform:'rotate('+(rot||0)+' '+cx+' '+cy+')'}))}
function nucl(g,cx,cy,r){g.appendChild(C(cx,cy,r,'var(--nucleus-bg,#f3ecfb)','var(--nucleus,#9b6bd1)',2.2));g.appendChild(C(cx+r*.25,cy-r*.15,r*.3,'var(--dna-ink,#7a3fbf)','none',0))}
BIO.define('komorki-porownanie',{opis:'Komórka zwierzęca, roślinna, grzyba (drożdże) i bakterii — organelle i różnice; tryby poznaj / znajdź / podpisz + tabela porównawcza',
mount:function(el,o){
  var Y='✓',N='✗',TB=[['jądro komórkowe',Y,Y,Y,N+' (nukleoid)'],['ściana komórkowa',N,Y+' (celuloza)',Y+' (chityna)',Y+' (mureina)'],['chloroplasty',N,Y,N,N],['duża wakuola',N,Y,Y+' (często)',N],['mitochondria',Y,Y,Y,N],['rybosomy',Y,Y,Y,Y+' (mniejsze)']];
  lab(el,{vars:[['zw','zwierzęca'],['ro','roślinna'],['gr','grzyb (drożdże)'],['ba','bakteria']],start:o.typ,
  after:function(k){var d=H('div','bw-tbl'),t=H('table'),hr=H('tr'),idx={zw:1,ro:2,gr:3,ba:4};['Cecha','zwierzęca','roślinna','grzyb','bakteria'].forEach(function(x,i){var th=H('th',null,x);hr.appendChild(th)});t.appendChild(hr);
    TB.forEach(function(r){var tr=H('tr');r.forEach(function(x,i){var td=H('td',null,i?x:'<b>'+x+'</b>');if(i===idx[k])td.style.background='var(--accent-soft,#e8f3e0)';tr.appendChild(td)});t.appendChild(tr)});d.appendChild(t);return d},
  get:function(k){
    var mem='var(--cell-mem,#5c8a3a)',cy='var(--cell-cyto,#f4f9ef)';
    if(k==='zw')return{w:360,h:250,label:'Komórka zwierzęca',parts:[
      {n:'błona komórkowa',m:[34,125],d:'Cienka błona otaczająca komórkę; reguluje, co wchodzi i wychodzi (przepuszczalność wybiórcza). Zwierzęca komórka nie ma ściany komórkowej.',draw:function(g){g.appendChild(E(180,125,150,105,cy,mem,4))}},
      {n:'jądro komórkowe',m:[150,76],d:'Zawiera DNA (informację genetyczną) i steruje pracą komórki. Otoczone otoczką jądrową; w środku jąderko.',draw:function(g){nucl(g,170,115,38)}},
      {n:'mitochondrium',m:[268,160],d:'„Elektrownia komórki” — tu zachodzi oddychanie komórkowe, które uwalnia energię (ATP).',draw:function(g){mito(g,255,150,-20);mito(g,110,170,30);mito(g,258,76,10)}},
      {n:'siateczka śródplazmatyczna',m:[102,100],d:'Sieć błon: transport i produkcja białek (szorstka z rybosomami) i lipidów (gładka).',draw:function(g){g.appendChild(P('M215,100 q12,-8 24,0 t24,0 t24,8 M215,112 q12,-8 24,0 t24,0 t24,8 M215,124 q12,-8 24,0 t24,0',null,'#3f5aa8',2.2))}},
      {n:'aparat Golgiego',m:[236,198],d:'Stos spłaszczonych woreczków: przetwarza, sortuje i pakuje białka do pęcherzyków, które wysyła dalej lub poza komórkę.',draw:function(g){[0,1,2,3].forEach(function(i){g.appendChild(P('M'+(160+i*3)+','+(188+i*7)+' q22,-8 44,0',null,'#c0602c',3))})}},
      {n:'lizosom',m:[100,138],d:'Pęcherzyk z enzymami trawiennymi — rozkłada zużyte organelle i pokarm.',draw:function(g){g.appendChild(C(80,148,9,'#ffe0b2','#e65100',1.6));g.appendChild(C(78,146,1.8,'#e65100','none',0));g.appendChild(C(83,150,1.8,'#e65100','none',0))}}
    ]};
    if(k==='ro')return{w:360,h:250,label:'Komórka roślinna',parts:[
      {n:'ściana komórkowa',m:[22,125],d:'Sztywna warstwa z celulozy na zewnątrz błony; nadaje kształt i chroni. Jest tylko w komórkach roślin, grzybów i bakterii.',draw:function(g){g.appendChild(R(24,18,312,214,16,'var(--wall,#9bbd6a)','#5b7a2e',2));}},
      {n:'błona komórkowa',m:[336,125],d:'Cienka błona tuż pod ścianą; reguluje wymianę substancji.',draw:function(g){g.appendChild(R(34,28,292,194,12,cy,mem,3))}},
      {n:'wakuola',m:[200,150],d:'Duży zbiornik soku komórkowego; magazynuje wodę i związki, utrzymuje turgor (jędrność) komórki. Zajmuje większą część objętości.',draw:function(g){g.appendChild(R(150,58,150,120,34,'#e3f1fc','#5b8bc9',2))}},
      {n:'jądro komórkowe',m:[88,84],d:'Zawiera DNA i steruje komórką. W dojrzałej komórce roślinnej jest odsunięte do brzegu przez wakuolę.',draw:function(g){nucl(g,92,110,26)}},
      {n:'chloroplast',m:[330,86],d:'Miejsce fotosyntezy — zawiera zielony barwnik chlorofil. Tylko komórki roślin i glonów.',draw:function(g){chloro(g,130,56,0);chloro(g,255,205,0);chloro(g,70,190,-25)}},
      {n:'mitochondrium',m:[110,200],d:'Oddychanie komórkowe — rośliny też je mają (oddychają całą dobę).',draw:function(g){mito(g,120,170,20);mito(g,310,100,-60)}}
    ]};
    if(k==='gr')return{w:360,h:250,label:'Komórka drożdży',parts:[
      {n:'ściana komórkowa',m:[34,125],d:'Ściana zbudowana z chityny i glukanów (u roślin celuloza, u bakterii mureina).',draw:function(g){g.appendChild(E(150,125,112,92,cy,'#8d6e63',5))}},
      {n:'jądro komórkowe',m:[104,84],d:'Drożdże są eukariontami: mają prawdziwe jądro z DNA.',draw:function(g){nucl(g,130,110,28)}},
      {n:'wakuola',m:[190,160],d:'Zbiornik magazynowy i trawienny.',draw:function(g){g.appendChild(C(190,150,32,'#e3f1fc','#5b8bc9',2))}},
      {n:'mitochondrium',m:[88,190],d:'Oddychanie tlenowe. Bez tlenu drożdże przechodzą na fermentację alkoholową (CO₂ + etanol).',draw:function(g){mito(g,120,180,20);mito(g,200,80,-20)}},
      {n:'pączek',m:[298,100],d:'Drożdże rozmnażają się przez pączkowanie — z komórki macierzystej wyrasta mniejsza komórka potomna.',draw:function(g){g.appendChild(E(296,118,38,32,cy,'#8d6e63',4));g.appendChild(C(296,118,8,'var(--nucleus-bg,#f3ecfb)','var(--nucleus,#9b6bd1)',1.6))}}
    ]};
    return{w:360,h:250,label:'Komórka bakterii',parts:[
      {n:'otoczka śluzowa',m:[44,70],z:-3,d:'Śluzowa warstwa na zewnątrz ściany; chroni i pomaga przylegać do powierzchni. Nie wszystkie bakterie ją mają.',draw:function(g){g.appendChild(R(46,66,264,120,60,'#f6f3e6','#c9bf8b',3,{}))}},
      {n:'ściana komórkowa',m:[322,126],z:-2,d:'Sztywna ściana z mureiny (peptydoglikanu) utrzymuje kształt; jest celem działania penicyliny.',draw:function(g){g.appendChild(R(56,76,244,100,50,'none','#8d6e63',4))}},
      {n:'błona komórkowa',m:[56,126],z:-1,d:'Cienka błona pod ścianą, kontroluje wymianę z otoczeniem. Tu zachodzą też reakcje oddychania (bakterie nie mają mitochondriów).',draw:function(g){g.appendChild(R(63,83,230,86,43,cy,mem,2.5))}},
      {n:'nukleoid (DNA)',m:[196,98],d:'Kolisty DNA swobodnie w cytoplazmie — bakterie są prokariontami: NIE mają jądra otoczonego błoną.',draw:function(g){g.appendChild(P('M150,126 q10,-30 30,-18 t30,16 q4,26 -24,24 t-36,-22 q8,-16 24,-6',null,'var(--dna-ink,#7a3fbf)',2.4))}},
      {n:'rybosomy',m:[250,108],d:'Drobne ziarnistości, na których powstają białka (mniejsze niż u eukariontów).',draw:function(g){[[90,110],[100,140],[240,118],[246,144],[120,152],[220,98],[258,130]].forEach(function(p){g.appendChild(C(p[0],p[1],2.6,'#3f5aa8','none',0))})}},
      {n:'plazmid',m:[130,100],d:'Mały, dodatkowy, kolisty DNA; często zawiera geny oporności na antybiotyki i może być przekazywany innym bakteriom.',draw:function(g){g.appendChild(C(112,112,9,'none','var(--dna-ink,#7a3fbf)',2))}},
      {n:'wić',m:[330,160],d:'Długi włókienkowaty wyrostek; obraca się jak śruba i napędza bakterię.',draw:function(g){g.appendChild(P('M300,126 q18,-18 30,0 t30,0',null,'#6d4c41',3))}}
    ]}}})}});

/* =====================================================================
   7. WYKRES Z DANYCH — jak czytać i rysować wykres w zadaniu doświadczalnym
   ===================================================================== */
var DS={
  amy:{t:'linia',tit:'Aktywność amylazy w różnych temperaturach',x:'temperatura [°C]',y:'aktywność enzymu [jedn. umowne]',xs:[0,10,20,30,40,50,60,70],ys:[5,12,30,60,95,40,6,0],xn:'temperatura',yn:'aktywność',n:'amylaza'},
  osm:{t:'linia',tit:'Zmiana masy kawałków ziemniaka po 30 min',x:'stężenie NaCl w roztworze [%]',y:'zmiana masy [%]',xs:[0,0.5,1,1.5,2],ys:[18,8,0,-8,-15],xn:'stężenie NaCl',yn:'zmiana masy',n:'osmoza'},
  kie:{t:'slupki',tit:'Kiełkowanie nasion po 7 dniach',x:'warunki',y:'nasiona, które wykiełkowały [%]',cats:['sucha wata','wilgotna wata','zalane wodą'],ys:[0,92,30],xn:'warunki',yn:'kiełkowanie',n:'kiełkowanie'}
};
function nice(max){var p=Math.pow(10,Math.floor(Math.log(max)/Math.LN10)),f=max/p;return (f<=1?1:f<=2?2:f<=5?5:10)*p}
BIO.define('wykres-dane',{opis:'Czytanie i rysowanie wykresu w zadaniu doświadczalnym: oś X = zmienna niezależna, oś Y = zależna, tytuł, jednostki, skala, punkty; 3 zestawy danych + suwak odczytu i opis trendu; opcja zestaw="amy|osm|kie"',
mount:function(el,o){
  var cur=DS[o.zestaw]?o.zestaw:'amy',idx=0,bar=H('div','bw-seg bv-tools'),holder=H('div'),rd=H('div','bv-info bw-out'),sl=H('input'),box=H('div','bv-info bw-out');
  sl.type='range';sl.min=0;sl.step=1;sl.style.width='100%';sl.setAttribute('aria-label','Wybierz punkt pomiarowy');
  [bar,holder,sl,rd,box].forEach(function(e){el.appendChild(e)});box.style.marginTop='10px';
  var W=360,Hh=240,mL=52,mR=14,mT=30,mB=52;
  function trend(d){var ys=d.ys,mx=0,mn=0;ys.forEach(function(v,i){if(v>ys[mx])mx=i;if(v<ys[mn])mn=i});var xl=d.t==='linia'?d.xs:d.cats;
    if(d.t==='slupki')return 'Najwięcej: '+xl[mx]+' ('+ys[mx]+'%), najmniej: '+xl[mn]+' ('+ys[mn]+'%).';
    var s='';if(mx>0&&mx<ys.length-1)s='Wartość rośnie do maksimum ('+ys[mx]+') przy '+d.xs[mx]+', a potem maleje.';
    else if(ys[ys.length-1]>ys[0])s='Wartość rośnie wraz ze wzrostem '+d.xn+'.';else s='Wartość maleje wraz ze wzrostem '+d.xn+'.';
    for(var i=1;i<ys.length;i++)if(ys[i-1]*ys[i]<0||ys[i]===0&&ys[i-1]!==0&&ys[0]*ys[ys.length-1]<0){var x0=d.xs[i-1],x1=d.xs[i],z=x0+(0-ys[i-1])*(x1-x0)/(ys[i]-ys[i-1]);s+=' Zmiana znaku (y = 0) przy x ≈ '+(Math.round(z*100)/100)+' — tam nie ma zmiany masy (roztwór izotoniczny).';break}
    if(ys[ys.length-1]===0&&ys[0]>0&&ys.indexOf(0)===ys.length-1&&d.n==='amylaza')s+=' W 70°C enzym jest zdenaturowany — aktywność 0.';
    return s}
  function draw(){var d=DS[cur],cat=d.t==='slupki',n=d.ys.length;sl.max=n-1;idx=Math.min(idx,n-1);sl.value=idx;
    var ymin=Math.min(0,Math.min.apply(null,d.ys)),ymax=Math.max.apply(null,d.ys),st=nice((ymax-ymin)/5||1),top=Math.ceil(ymax/st)*st,bot=Math.floor(ymin/st)*st;
    var pw=W-mL-mR,ph=Hh-mT-mB;function X(i){return cat?mL+pw*(i+.5)/n:mL+pw*(d.xs[i]-d.xs[0])/(d.xs[n-1]-d.xs[0])}function Y(v){return mT+ph*(1-(v-bot)/(top-bot))}
    clr(holder);var svg=BIO.svg(W,Hh,'Wykres: '+d.tit);svg.setAttribute('class','bw-svg');holder.appendChild(svg);
    function grp(k,kids){var g=S('g',{'data-k':k},[S('rect',{x:0,y:0,width:0,height:0,fill:'none'})].concat(kids));return g}
    for(var v=bot;v<=top+1e-9;v+=st)svg.appendChild(L(mL,Y(v),W-mR,Y(v),'#e3e8ec',1));
    if(bot<0)svg.appendChild(L(mL,Y(0),W-mR,Y(0),'#8a97a6',1.2));
    svg.appendChild(L(mL,mT,mL,mT+ph,'#1a2332',1.6));svg.appendChild(L(mL,Y(bot),W-mR,Y(bot),'#1a2332',1.6));
    var sk=[];for(var v2=bot;v2<=top+1e-9;v2+=st)sk.push(BIO.T(mL-6,Y(v2),String(Math.round(v2*100)/100),{a:'end',s:9.5,w:500}));
    for(var i=0;i<n;i++)sk.push(BIO.T(X(i),mT+ph+11,cat?d.cats[i]:String(d.xs[i]),{s:9.5,w:500}));
    svg.appendChild(grp('skala',sk));
    svg.appendChild(grp('tytul',[BIO.T(W/2,14,d.tit,{s:11.5,w:700})]));
    svg.appendChild(grp('osx',[BIO.T(mL+pw/2,Hh-8,d.x,{s:10.5,w:600})]));
    var ty=S('g',{'data-k':'osy'},[S('rect',{x:0,y:0,width:0,height:0,fill:'none'}),S('text',{x:12,y:mT+ph/2,'text-anchor':'middle','dominant-baseline':'middle','font-size':10.5,'font-weight':600,transform:'rotate(-90 12 '+(mT+ph/2)+')'},[d.y])]);svg.appendChild(ty);
    var dk=[];
    if(cat){for(var j=0;j<n;j++)dk.push(R(X(j)-22,Math.min(Y(d.ys[j]),Y(0)),44,Math.abs(Y(d.ys[j])-Y(0))||1,2,j===idx?'var(--accent,#3f7a28)':'#8fb4d4','#51606e',1.2))}
    else{var pth='';d.ys.forEach(function(v,j){pth+=(j?'L':'M')+X(j)+','+Y(v)});dk.push(P(pth,null,'#2a6f97',2.2));d.ys.forEach(function(v,j){dk.push(C(X(j),Y(v),j===idx?6:4,j===idx?'var(--accent,#3f7a28)':'#2a6f97','#fff',1.5))})}
    svg.appendChild(grp('dane',dk));
    seg3();show(null);
    var hl=cat?d.cats[idx]:d.xs[idx];rd.innerHTML='<b>Odczyt: '+d.xn+' = '+hl+(cat?'':' ')+' → '+d.yn+' = '+d.ys[idx]+'</b><span>'+trend(d)+'</span>';
    BIO.fx.info(svg,box,{tytul:['Tytuł wykresu','Mówi, co i w jakich warunkach zmierzono. Bez tytułu nie wiadomo, czego dotyczą dane.'],
      osx:['Oś pozioma (X) — zmienna niezależna','Tu zapisujemy czynnik, który ZMIENIAMY w doświadczeniu (tu: '+d.xn+'). Podpis zawsze z nazwą wielkości i jednostką w nawiasie [ ].'],
      osy:['Oś pionowa (Y) — zmienna zależna','To, co MIERZYMY — zależy od zmienianego czynnika (tu: '+d.yn+'). Też z jednostką.'],
      skala:['Skala osi','Równe odstępy na osi = równe różnice wartości. Skala zaczyna się od 0 (albo od najmniejszej wartości) i nie może być „ściśnięta” w jednym miejscu.'],
      dane:['Punkty lub słupki','Każdy pomiar to jeden punkt (wykres liniowy, gdy zmienna jest ciągła, np. temperatura) lub słupek (kategorie, np. rodzaje podłoża). Punkty łączymy linią tylko wtedy, gdy pośrednie wartości mają sens.']},null)}
  function seg3(){clr(bar);[['amy','amylaza i temperatura'],['osm','osmoza w ziemniaku'],['kie','kiełkowanie nasion']].forEach(function(it){var b=H('button','bv-btn'+(it[0]===cur?' on':''));b.type='button';b.textContent=it[1];b.onclick=function(){cur=it[0];idx=0;draw()};bar.appendChild(b)})}
  function show(){box.className='bv-info bw-out';box.innerHTML='<b>Kliknij element wykresu</b><span>Tytuł, osie, skalę albo punkty — zobaczysz, co powinno się w nim znaleźć. Suwak niżej odczytuje kolejne pomiary.</span>'}
  sl.oninput=function(){idx=+sl.value;draw()};
  draw()}});

/* =====================================================================
   8. JAJO — porównanie u różnych zwierząt + wynikanie ewolucyjne
   ===================================================================== */
BIO.define('jajo-porownanie',{opis:'Jajo i komórka jajowa u ryb/płazów, owadów, gadów, ptaków i ssaków łożyskowych: tabela cech + ścieżka ewolucyjna (co z czego wynika); klik w grupę podświetla kolumnę',
mount:function(el,o){
  var G=[['rp','ryby i płazy'],['ow','owady'],['ga','gady'],['pt','ptaki'],['ss','ssaki łożyskowe']];
  var ROW=[['Środowisko rozwoju','woda','ląd (ziemia, rośliny, ciało gospodarza)','ląd (ziemia, piasek)','ląd (gniazdo)','wnętrze matki (macica)'],
   ['Zapłodnienie','zwykle zewnętrzne (w wodzie)','wewnętrzne','wewnętrzne','wewnętrzne','wewnętrzne'],
   ['Żółtko (zapas pokarmu)','mało lub średnio','dużo','dużo','bardzo dużo','prawie brak (mała komórka)'],
   ['Osłonki jaja','galaretowata osłonka, bez skorupy','twardy chorion, często z woskiem i mikropyle','skorupa pergaminowa lub wapienna','twarda skorupa z CaCO₃ + błony podskorupowe','przejrzysta osłonka, bez skorupy'],
   ['Błony płodowe','brak','własne, powstałe niezależnie (nie to samo co u kręgowców)','owodnia, kosmówka, omocznia, pęcherzyk żółtkowy','owodnia, kosmówka, omocznia, pęcherzyk żółtkowy','owodnia, kosmówka (tworzy łożysko), omocznia → naczynia pępowiny'],
   ['Skąd zarodek ma pokarm','z żółtka','z żółtka','z żółtka','z żółtka','z krwi matki przez łożysko'],
   ['Opieka nad jajami','zwykle brak','zwykle brak (wyjątki, np. pszczoły)','zwykle brak (wyjątek: krokodyle)','wysiadywanie i karmienie piskląt','ciąża, karmienie mlekiem']];
  var NOTE={rp:'Najstarszy typ: jajo bez skorupy musi być w wodzie, bo wyschłoby na lądzie. Dlatego płazy wracają do wody, by się rozmnażać.',
   ow:'Owady zdobyły ląd niezależnie od kręgowców. Twardy chorion i wosk chronią przed wyschnięciem — to PRZYSTOSOWANIE PODOBNE (analogia), a nie pokrewieństwo z jajem gadów.',
   ga:'Jajo owodniowe: błony płodowe tworzą „własny staw” zarodka (owodnia z płynem), omocznia zbiera odpady, a skorupa chroni i przepuszcza gazy. Dzięki temu gady rozmnażają się z dala od wody.',
   pt:'Ptaki wywodzą się od gadów (dinozaurów), dlatego mają to samo jajo owodniowe. Twarda skorupa i bardzo duże żółtko pozwalają wykluć dobrze rozwinięte pisklę.',
   ss:'Przodkowie ssaków też mieli jajo owodniowe (dziś składają je stekowce: dziobak, kolczatka). U ssaków łożyskowych żółtko zanikło wtórnie, bo pokarm zapewnia łożysko, ale błony płodowe zostały: owodnia otacza płód, kosmówka tworzy łożysko, omocznia daje naczynia pępowiny.'};
  var cur=G.some(function(g){return g[0]===o.grupa})?o.grupa:'ga',bar=H('div','bw-seg bv-tools'),box=H('div','bv-info bw-out'),tw=H('div','bw-tbl'),ev=H('div');
  [bar,box,tw,ev].forEach(function(e){el.appendChild(e)});
  var STEPS=[['jajo w wodzie','ryby, płazy: bez skorupy, rozwój w wodzie'],['jajo owodniowe','pierwsze kręgowce w pełni lądowe (gady): skorupa + owodnia + omocznia → niezależność od wody'],['ptaki','twarda skorupa, bardzo duże żółtko, wysiadywanie'],['ssaki','owodnia i kosmówka zostają, żółtko zanika, rozwój w macicy (łożysko)']];
  function draw(){clr(bar);G.forEach(function(g){var b=H('button','bv-btn'+(g[0]===cur?' on':''));b.type='button';b.textContent=g[1];b.onclick=function(){cur=g[0];draw()};bar.appendChild(b)});
    var ix=G.map(function(g){return g[0]}).indexOf(cur)+1;box.innerHTML='<b>'+G[ix-1][1]+'</b><span>'+NOTE[cur]+'</span>';
    clr(tw);var t=H('table'),hr=H('tr');hr.appendChild(H('th',null,'Cecha'));G.forEach(function(g){hr.appendChild(H('th',null,g[1]))});t.appendChild(hr);
    ROW.forEach(function(r){var tr=H('tr');r.forEach(function(x,i){var td=H('td',null,i?x:'<b>'+x+'</b>');if(i===ix)td.style.background='var(--accent-soft,#e8f3e0)';tr.appendChild(td)});t.appendChild(tr)});tw.appendChild(t);
    clr(ev);ev.appendChild(H('p',null,'<b>Co z czego wynika (ewolucja):</b>'));var c=H('div','bv-chain v');STEPS.forEach(function(s,i){if(i)c.appendChild(H('span','bv-arrow','↓'));var d=H('div','bv-node');d.appendChild(H('b',null,s[0]));d.appendChild(H('small',null,s[1]));c.appendChild(d)});ev.appendChild(c);
    ev.appendChild(H('p',null,'<b>Uwaga na pojęcia:</b> komórka jajowa to tylko komórka (u ptaka cała żółtkowa kula z tarczką); jajo to komórka razem z osłonkami, białkiem i skorupą. Owady nie są na tej ścieżce — ich jajo to osobne, równoległe rozwiązanie tego samego problemu (suchy ląd).'))}
  draw()}});

/* =====================================================================
   9. CYKLE ŻYCIOWE — pierścień etapów, autostart w widoku, „do przodu i od początku”
   ===================================================================== */
var CY={
 zaba:{t:'Rozwój żaby (płazy)',st:[['jaja (skrzek)','w wodzie','Samica składa w wodzie dużo jaj w galaretowatej osłonce (bez skorupy); zapłodnienie zewnętrzne.'],['kijanka','skrzela, ogon','Larwa żyje w wodzie, oddycha skrzelami, ma ogon i płetwę, odżywia się roślinnie.'],['kijanka z odnóżami','płuca, przeobrażenie','Wyrastają tylne, potem przednie odnóża; skrzela zanikają, rozwijają się płuca.'],['młoda żaba','ogon zanika','Ogon się wchłania, zwierzę wychodzi na ląd i staje się drapieżnikiem.'],['dorosła żaba','oddycha płucami i skórą','Dojrzała płciowo wraca do wody na gody. Rozwój z przeobrażeniem to cecha płazów.']]},
 tasiemiec:{t:'Tasiemiec uzbrojony (pasożyt)',st:[['dorosły tasiemiec','jelito człowieka','Żywiciel OSTATECZNY: człowiek. Tasiemiec żyje w jelicie cienkim, ma haczyki i przyssawki na główce.'],['człony z jajami','wydalane z kałem','Dojrzałe człony wypełnione jajami wydostają się z kałem na zewnątrz.'],['jaja zjadane','przez świnię','Żywiciel POŚREDNI: świnia zjada jaja wraz z paszą lub wodą.'],['larwa (onkosfera)','wnika do mięśni','W jelicie świni z jaja wychodzi larwa, przebija ścianę jelita i krwią trafia do mięśni.'],['wągier (finka)','w mięsie świni','W mięśniach powstaje pęcherzyk z zawiązkiem główki — wągier. Człowiek zje go w surowym lub niedogotowanym mięsie.']]},
 mech:{t:'Cykl rozwojowy mchu (przemiana pokoleń)',st:[['gametofit','n — roślina mchu','Zielona „roślinka” (liście, łodyżka) to pokolenie płciowe, haploidalne (n) i DOMINUJĄCE.'],['gamety','n — plemnie i rodnie','Na wierzchołkach powstają plemniki i komórka jajowa. Plemniki płyną do rodni w kropli wody.'],['zygota','2n','Po zapłodnieniu powstaje zygota (2n), początek pokolenia bezpłciowego.'],['sporofit','2n — sporogon na nóżce','Sporofit (2n) tkwi na gametofitie i od niego zależy; to „puszka” na szczycie nóżki.'],['zarodniki','n — po mejozie','W puszce zachodzi MEJOZA: powstają haploidalne zarodniki. Po wykiełkowaniu dają nowy gametofit.']]},
 paproc:{t:'Cykl rozwojowy paproci (przemiana pokoleń)',st:[['sporofit','2n — roślina z liśćmi','Duża paproć z kłączem i liśćmi to pokolenie bezpłciowe (2n), DOMINUJĄCE — odwrotnie niż u mchów.'],['zarodnie','na spodzie liści','Na spodzie liści w kupkach zarodni zachodzi MEJOZA i powstają zarodniki (n).'],['zarodnik','n','Zarodnik wydostaje się i kiełkuje na wilgotnej glebie.'],['przedrośle','n — gametofit','Mała, sercowata, zielona płytka: samodzielne pokolenie płciowe (n) z plemniami i rodniami.'],['zygota → młody sporofit','2n','Po zapłodnieniu (potrzebna woda) zygota (2n) rozwija się w nową paproć na przedroślu.']]},
 kwiat:{t:'Cykl rozwojowy okrytonasiennych',st:[['roślina z kwiatem','2n — sporofit','Dominujące pokolenie bezpłciowe (2n). Kwiat ma pręciki (pylniki) i słupek (zalążnia z zalążkami).'],['mejoza w kwiecie','powstają zarodniki','W pylnikach: ziarna pyłku (n). W zalążku: woreczek zalążkowy (n) z komórką jajową.'],['zapylenie','pyłek na znamię','Pyłek (męski gametofit) trafia na znamię słupka (wiatr, owady).'],['podwójne zapłodnienie','2n + 3n','Jedno jądro plemnikowe łączy się z komórką jajową → zygota (2n); drugie z komórką centralną → bielmo (3n).'],['nasiono i owoc','zarodek 2n','Zalążek → nasiono (zarodek + bielmo + łupina), zalążnia → owoc. Kiełkowanie daje nowy sporofit.']]},
 pokarm:{lin:1,t:'Droga pokarmu w przewodzie pokarmowym',st:[['jama ustna','amylaza ślinowa','Pokarm jest rozdrabniany (zęby) i zwilżany śliną. Amylaza ślinowa zaczyna rozkład skrobi do maltozy.'],['przełyk','perystaltyka','Fale skurczów mięśni gładkich przepychają kęs do żołądka. W przełyku nie ma trawienia.'],['żołądek','HCl + pepsyna','Kwas solny (pH ok. 2) zabija drobnoustroje i uaktywnia pepsynę, która rozpoczyna trawienie białek. Śluz chroni ścianę przed samostrawieniem.'],['jelito cienkie','żółć, sok trzustkowy, wchłanianie','Do dwunastnicy wpływają sok trzustkowy (amylaza, lipaza, trypsyna) i żółć (emulguje tłuszcze). Trawienie kończy się tu, a kosmki wchłaniają produkty do krwi i limfy.'],['jelito grube','woda, bakterie','Wchłania wodę i sole mineralne, bakterie jelitowe wytwarzają m.in. witaminę K; tworzy się kał.'],['odbytnica i odbyt','defekacja','Kał gromadzi się w odbytnicy i jest usuwany przez odbyt. Błonnik nie jest wchłaniany do krwi.']]},
 odruch:{lin:1,t:'Łuk odruchowy (odruch kolanowy)',st:[['receptor','rozciągnięcie ścięgna','Receptor (zakończenie czuciowe) w ścięgnie reaguje na uderzenie — powstaje impuls nerwowy.'],['neuron czuciowy','dośrodkowy','Przewodzi impuls od receptora DO rdzenia kręgowego (korzeń grzbietowy).'],['ośrodek nerwowy','rdzeń kręgowy','Impuls przełączany jest w rdzeniu na neuron ruchowy — bez udziału mózgu, dlatego odruch jest szybki. Mózg dowiaduje się równolegle.'],['neuron ruchowy','odśrodkowy','Przewodzi impuls Z rdzenia do mięśnia (korzeń brzuszny).'],['efektor','mięsień czworogłowy','Mięsień kurczy się i prostuje kolano. Odruch jest wrodzony i niezależny od woli.']]},
 faga:{t:'Bakteriofag — cykl lityczny',st:[['adsorpcja','faga przyczepia się','Faga przyczepia się białkami ogonka do receptorów na ścianie bakterii.'],['wstrzyknięcie DNA','otoczka zostaje na zewnątrz','Do komórki wnika tylko kwas nukleinowy faga; białkowa otoczka pozostaje na zewnątrz.'],['replikacja i synteza','bakteria pracuje dla faga','Maszyneria komórki gospodarza powiela DNA faga i produkuje jego białka.'],['składanie wirionów','powstają nowe fagi','Z DNA i białek składają się nowe cząstki wirusa.'],['liza','komórka pęka','Bakteria pęka i uwalnia dziesiątki nowych fagów. W cyklu LIZOGENICZNYM DNA faga najpierw włącza się w DNA bakterii (profag) i czeka.']]}
};
var CYUID=0;
BIO.define('cykl',{opis:'Cykl życiowy jako pierścień etapów z autostartem w widoku (do przodu i od początku); klik = wyjaśnienie i pauza; opcja cykl="zaba|tasiemiec|mech|paproc|kwiat|faga|odruch|pokarm"',
mount:function(el,o){
  var k=CY[o.cykl]?o.cykl:'zaba',uid='cy'+(++CYUID),cur=0,paused=false,vis=false,tm=null,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var svg=BIO.svg(360,310,'Cykl: '+CY[k].t),out=H('div','bv-info bw-out'),bar=H('div','bw-seg bv-tools'),btnP=H('button','bv-btn');btnP.type='button';
  svg.setAttribute('class','bw-svg');out.setAttribute('aria-live','polite');[svg,bar,out].forEach(function(e){el.appendChild(e)});bar.appendChild(btnP);
  var st=CY[k].st,n=st.length,cx=180,cy=158,rx=122,ry=112,ND=[],AR=[];
  svg.appendChild(S('defs',{},[S('marker',{id:uid,viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:7,markerHeight:7,orient:'auto'},[S('path',{d:'M0,0L10,5L0,10z',fill:'#6b7a88'})])]));
  function pt(a){return [cx+rx*Math.cos(a),cy+ry*Math.sin(a)]}
  var step=2*Math.PI/n,gap=0.36;
  for(var i=0;i<n;i++){if(CY[k].lin&&i===n-1)continue;var a1=-Math.PI/2+i*step+gap*0.5*(n>5?0.7:1)+0.06,a2=-Math.PI/2+(i+1)*step-gap*0.5*(n>5?0.7:1)-0.06,p1=pt(a1),p2=pt(a2);
    var ar=P('M'+p1[0].toFixed(1)+','+p1[1].toFixed(1)+' A'+rx+','+ry+' 0 0 1 '+p2[0].toFixed(1)+','+p2[1].toFixed(1),'none','#9aa8b4',2,{'marker-end':'url(#'+uid+')'});svg.appendChild(ar);AR[i]=ar}
  st.forEach(function(s,i){var p=pt(-Math.PI/2+i*step),g=S('g',{'class':'bv-hit',role:'button',tabindex:'0','aria-label':s[0]});
    g.appendChild(R(p[0]-50,p[1]-19,100,38,10,'var(--surface,#fff)','#9aa8b4',1.8));
    g.appendChild(BIO.T(p[0],p[1]-5,s[0],{s:s[0].length>18?9.2:10.5,w:700}));g.appendChild(BIO.T(p[0],p[1]+9,s[1],{s:8.6,w:500,f:'var(--viz-mut,#5d6b7a)'}));
    g.addEventListener('click',function(){paused=true;go(i);lab()});g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();paused=true;go(i);lab()}});ND[i]=g;svg.appendChild(g)});
  svg.appendChild(BIO.T(cx,cy-6,CY[k].t,{s:11,w:700}));svg.appendChild(BIO.T(cx,cy+10,'kliknij etap',{s:9,w:500,f:'var(--viz-mut,#5d6b7a)'}));
  function go(i){cur=i;ND.forEach(function(g,j){var r=g.firstChild;r.setAttribute('stroke',j===i?'var(--accent,#3f7a28)':'#9aa8b4');r.setAttribute('stroke-width',j===i?3.2:1.8);r.style.fill=j===i?'var(--accent-soft,#e8f3e0)':'var(--surface,#fff)'});AR.forEach(function(a,j){if(!a)return;a.setAttribute('stroke',j===i?'var(--accent,#3f7a28)':'#9aa8b4');a.setAttribute('stroke-width',j===i?3.2:2)});
    out.innerHTML='<b>'+(i+1)+'. '+st[i][0]+'</b><span>'+st[i][2]+'</span>'}
  function lab(){btnP.textContent=paused?'▶ wznów animację':'❚❚ pauza';btnP.setAttribute('aria-pressed',String(paused))}
  btnP.onclick=function(){paused=!paused;lab()};
  function tick(){if(vis&&!paused)go((cur+1)%n)}
  go(0);lab();
  if(reduce){paused=true;lab();return}
  if('IntersectionObserver'in window){new IntersectionObserver(function(es){vis=es[0].isIntersecting},{threshold:0.4}).observe(el)}else vis=true;
  tm=setInterval(function(){if(!document.body.contains(el)){clearInterval(tm);return}tick()},2800)}});

/* =====================================================================
   10. SERCE — budowa (lab) i obieg krwi (animowany pierścień)
   ===================================================================== */
var BL='#cfe3f7',BLs='#2a6fb0',RD='#f6cccc',RDs='#b23b3b';
BIO.define('serce-budowa',{opis:'Serce człowieka w przekroju: przedsionki, komory, przegroda, zastawki, naczynia (niebieskie = krew odtlenowana, czerwone = utlenowana); tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:270,label:'Serce w przekroju z oznaczonymi częściami',parts:[
    {n:'prawy przedsionek',m:[102,106],d:'Odbiera krew ODTLENOWANĄ z całego ciała żyłami głównymi. Ściana cienka. Krew przechodzi przez zastawkę trójdzielną do prawej komory.',draw:function(g){g.appendChild(R(98,90,62,60,20,BL,BLs,2))}},
    {n:'lewy przedsionek',m:[258,106],d:'Odbiera krew UTLENOWANĄ z płuc żyłami płucnymi. Krew przechodzi przez zastawkę dwudzielną do lewej komory.',draw:function(g){g.appendChild(R(202,90,62,60,20,RD,RDs,2))}},
    {n:'prawa komora',m:[104,226],d:'Pompuje krew odtlenowaną do płuc (krążenie małe). Ściana cieńsza niż po lewej — droga krótka, opór mały.',draw:function(g){g.appendChild(R(98,158,74,80,28,BL,BLs,2))}},
    {n:'lewa komora',m:[268,236],d:'Pompuje krew utlenowaną do całego ciała (krążenie duże). Ściana najgrubsza — długa droga i duży opór.',draw:function(g){g.appendChild(R(188,158,88,90,34,'#e79a9a',RDs,2));g.appendChild(R(204,170,56,66,22,RD,RDs,1.2))}},
    {n:'przegroda międzykomorowa',m:[181,214],d:'Mięsień oddzielający prawą (odtlenowaną) od lewej (utlenowanej) strony serca; krew się nie miesza.',draw:function(g){g.appendChild(R(172,158,16,86,3,'#b9b0a4','#6f665a',1.5))}},
    {n:'zastawka trójdzielna',m:[126,172],d:'Między prawym przedsionkiem a prawą komorą; trzy płatki. Zamyka się przy skurczu komory i zapobiega cofaniu krwi do przedsionka.',draw:function(g){g.appendChild(P('M104,152 L128,170 L156,152','none','#51606e',3))}},
    {n:'zastawka dwudzielna (mitralna)',m:[232,172],d:'Między lewym przedsionkiem a lewą komorą; dwa płatki. Zapobiega cofaniu krwi do lewego przedsionka.',draw:function(g){g.appendChild(P('M208,152 L234,170 L260,152','none','#51606e',3))}},
    {n:'tętnica płucna (pień płucny)',m:[150,34],d:'Wyprowadza krew z prawej komory do płuc. To tętnica, która niesie krew ODTLENOWANĄ.',draw:function(g){g.appendChild(P('M170,158 L170,64 Q170,40 130,38',null,BLs,13))}},
    {n:'aorta',m:[316,38],d:'Największa tętnica. Wyprowadza krew UTLENOWANĄ z lewej komory do całego ciała; zaraz za zastawką odchodzą od niej tętnice wieńcowe zasilające serce.',draw:function(g){g.appendChild(P('M190,158 L190,64 Q190,34 232,34 L300,38',null,RDs,13))}},
    {n:'żyły główne',m:[96,50],d:'Górna i dolna doprowadzają krew odtlenowaną z ciała do prawego przedsionka.',draw:function(g){g.appendChild(P('M118,92 L118,24',null,BLs,13))}},
    {n:'żyły płucne',m:[316,116],d:'Doprowadzają krew utlenowaną z płuc do lewego przedsionka. To żyły, które niosą krew UTLENOWANĄ.',draw:function(g){g.appendChild(P('M264,118 L326,118',null,RDs,13))}},
    {n:'zastawki półksiężycowate',m:[181,142],z:2,d:'Przy wyjściu z komór do tętnic (pień płucny i aorta). Zapobiegają cofaniu się krwi do komór w czasie rozkurczu.',draw:function(g){g.appendChild(P('M165,162 q5,-10 10,0',null,'#51606e',3));g.appendChild(P('M185,162 q5,-10 10,0',null,'#51606e',3))}}
  ]}}})}});

var KR={n:[['prawy przedsionek','krew odtlenowana',0],['prawa komora','krew odtlenowana',0],['płuca','wymiana gazowa',2],['lewy przedsionek','krew utlenowana',1],['lewa komora','krew utlenowana',1],['ciało','tkanki: oddają O₂',2]],
 d:['Krew ODTLENOWANA spływa z prawego przedsionka do prawej komory przez zastawkę trójdzielną.','Prawa komora pompuje krew odtlenowaną pniem płucnym (zastawka półksiężycowata) do płuc — POCZĄTEK krążenia małego (płucnego).','W płucach krew oddaje CO₂ i pobiera O₂. Żyłami płucnymi wraca UTLENOWANA do lewego przedsionka — KONIEC krążenia małego.','Krew utlenowana przechodzi przez zastawkę dwudzielną do lewej komory.','Lewa komora pompuje krew utlenowaną aortą (zastawka półksiężycowata) do całego ciała — POCZĄTEK krążenia dużego.','W tkankach krew oddaje O₂ i pobiera CO₂. Żyłami głównymi wraca ODTLENOWANA do prawego przedsionka — KONIEC krążenia dużego.'],
 col:['#cfe3f7','#cfe3f7','#e6dcf3','#f6cccc','#f6cccc','#e6dcf3']};
var KUID=0;
BIO.define('krazenie',{opis:'Obieg krwi: prawy przedsionek → prawa komora → płuca → lewy przedsionek → lewa komora → ciało → …; kropla krwi krąży sama (niebieska = odtlenowana, czerwona = utlenowana); filtr: oba krążenia / małe / duże; klik = wyjaśnienie',
mount:function(el){
  var uid='kr'+(++KUID),n=6,cx=180,cy=160,rx=118,ry=108,cur=0,paused=false,vis=false,filt='oba',ang=0,last=0,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var svg=BIO.svg(360,320,'Obieg krwi w sercu i krążeniach'),fb=H('div','bw-seg bv-tools'),bar=H('div','bw-seg bv-tools'),out=H('div','bv-info bw-out'),pb=H('button','bv-btn');pb.type='button';svg.setAttribute('class','bw-svg');out.setAttribute('aria-live','polite');
  [fb,svg,bar,out].forEach(function(e){el.appendChild(e)});bar.appendChild(pb);
  svg.appendChild(S('defs',{},[['b',BLs],['r',RDs]].map(function(m){return S('marker',{id:uid+m[0],viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:7,markerHeight:7,orient:'auto'},[S('path',{d:'M0,0L10,5L0,10z',fill:m[1]})])})));
  var step=2*Math.PI/n;function pt(a){return [cx+rx*Math.cos(a),cy+ry*Math.sin(a)]}
  var AR=[],ND=[],circ=['m','m','m','d','d','d'];  // segment i: od węzła i do i+1; krążenie małe: RV→płuca→LA (1,2), duże: LV→ciało→RA (4,5)
  var CIR=[null,'m','m',null,'d','d'];
  for(var i=0;i<n;i++){var a1=-Math.PI/2+i*step+0.3,a2=-Math.PI/2+(i+1)*step-0.3,p1=pt(a1),p2=pt(a2),blue=(i===0||i===1||i===5),ar=P('M'+p1[0].toFixed(1)+','+p1[1].toFixed(1)+' A'+rx+','+ry+' 0 0 1 '+p2[0].toFixed(1)+','+p2[1].toFixed(1),'none',blue?BLs:RDs,3.2,{'marker-end':'url(#'+uid+(blue?'b':'r')+')'});svg.appendChild(ar);AR[i]=ar}
  var lbl=[['zastawka trójdzielna',0],['pień płucny',1],['żyły płucne',2],['zastawka dwudzielna',3],['aorta',4],['żyły główne',5]];
  lbl.forEach(function(l,i){var a=-Math.PI/2+(i+0.5)*step,p=[cx+(rx+0)*Math.cos(a),cy+(ry+0)*Math.sin(a)],ox=Math.cos(a)*14,oy=Math.sin(a)*12;svg.appendChild(BIO.T(p[0]+ox*1.0,p[1]+oy*1.0,l[0],{s:8.4,w:600,a:Math.cos(a)>0.3?'start':Math.cos(a)<-0.3?'end':'middle',f:'var(--viz-mut,#5d6b7a)'}))});
  KR.n.forEach(function(nn,i){var p=pt(-Math.PI/2+i*step),g=S('g',{'class':'bv-hit',role:'button',tabindex:'0','aria-label':nn[0]});var fill=KR.col[i];
    g.appendChild(R(p[0]-46,p[1]-19,92,38,10,fill,nn[2]===0?BLs:nn[2]===1?RDs:'#7a5fa0',1.8));g.appendChild(BIO.T(p[0],p[1]-5,nn[0],{s:10,w:700}));g.appendChild(BIO.T(p[0],p[1]+9,nn[1],{s:8.4,w:500,f:'var(--viz-mut,#5d6b7a)'}));
    function pick(){paused=true;show(i);lab()}g.addEventListener('click',pick);g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick()}});ND[i]=g;svg.appendChild(g)});
  svg.appendChild(BIO.T(cx,cy-6,'Krążenie krwi',{s:12,w:700}));svg.appendChild(BIO.T(cx,cy+9,'mniejsze = serce → płuca → serce',{s:8.4,w:500,f:'var(--viz-mut,#5d6b7a)'}));svg.appendChild(BIO.T(cx,cy+21,'duże = serce → ciało → serce',{s:8.4,w:500,f:'var(--viz-mut,#5d6b7a)'}));
  var dot=C(0,0,6.5,'#fff',BLs,3);svg.appendChild(dot);
  function show(i){cur=i;ND.forEach(function(g,j){g.firstChild.setAttribute('stroke-width',j===i?3.6:1.8)});AR.forEach(function(a,j){a.setAttribute('stroke-width',j===i?5.2:3.2)});
    out.innerHTML='<b>'+(i+1)+'. '+KR.n[i][0]+' → '+KR.n[(i+1)%n][0]+'</b><span>'+KR.d[i]+'</span>'}
  function applyF(){AR.forEach(function(a,j){a.style.opacity=filt==='oba'||CIR[j]===filt?1:0.18});ND.forEach(function(g,j){var c=CIR[j],c2=CIR[(j+n-1)%n];g.style.opacity=filt==='oba'||c===filt||c2===filt||(filt==='m'&&(j===2||j===3||j===1))||(filt==='d'&&(j===4||j===5||j===0))?1:0.3});
    clr(fb);[['oba','oba krążenia'],['m','małe (płucne)'],['d','duże']].forEach(function(f){var b=H('button','bv-btn'+(f[0]===filt?' on':''));b.type='button';b.textContent=f[1];b.onclick=function(){filt=f[0];applyF()};fb.appendChild(b)})}
  function lab(){pb.textContent=paused?'▶ wznów krążenie':'❚❚ pauza'}
  pb.onclick=function(){paused=!paused;lab()};
  function place(){var seg=((ang%(2*Math.PI))+2*Math.PI)%(2*Math.PI),i=Math.floor(seg/step)%n,a=-Math.PI/2+seg,p=pt(a),blue=(i===0||i===1||i===5);dot.setAttribute('cx',p[0]);dot.setAttribute('cy',p[1]);dot.setAttribute('stroke',blue?BLs:RDs);dot.setAttribute('fill',blue?'#7fb2e6':'#e57373');if(!paused&&i!==cur)show(i)}
  function loop(t){if(!document.body.contains(el))return;if(vis&&!paused&&!reduce){ang+=(t-(last||t))/1000*(2*Math.PI/14);place()}last=t;requestAnimationFrame(loop)}
  show(0);lab();applyF();ang=0.35;place();
  if('IntersectionObserver'in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting},{threshold:0.4}).observe(el);else vis=true;
  if(reduce){paused=true;lab()}requestAnimationFrame(loop)}});

/* =====================================================================
   11. NEURON, NEFRON (lab) i MECHANIKA ODDYCHANIA (animacja tam i z powrotem)
   ===================================================================== */
BIO.define('neuron-budowa',{opis:'Neuron: dendryty, ciało komórki, jądro, akson, osłonka mielinowa, przewężenia Ranviera, zakończenia aksonu (synapsa); tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:200,label:'Neuron z oznaczonymi częściami',parts:[
    {n:'dendryty',m:[24,46],d:'Krótkie, rozgałęzione wypustki; odbierają sygnały od innych komórek i przewodzą impuls DO ciała komórki.',draw:function(g){['M54,88 L22,68 L8,58','M52,100 L16,102 L4,108','M56,114 L28,134 L14,152','M64,78 L46,50 L40,36'].forEach(function(d){g.appendChild(P(d,null,'#3f5aa8',3))})}},
    {n:'ciało komórki',m:[96,138],d:'Zawiera jądro i większość organelli; tu prowadzony jest metabolizm neuronu.',draw:function(g){g.appendChild(C(80,100,26,'#c4d0f2','#3f5aa8',2))}},
    {n:'jądro komórkowe',m:[100,82],z:1,d:'Zawiera DNA i steruje pracą komórki. Dojrzałe neurony nie dzielą się.',draw:function(g){g.appendChild(C(84,100,10,'#2a3d7a','none',0))}},
    {n:'akson (neuryt)',m:[114,124],z:-2,d:'Długa wypustka (może mieć ponad metr); przewodzi impuls OD ciała komórki do kolejnej komórki. Jeden na neuron.',draw:function(g){g.appendChild(P('M104,100 L300,100',null,'#3f5aa8',4))}},
    {n:'osłonka mielinowa',m:[144,76],z:-1,d:'Tłuszczowa osłonka z komórek glejowych (Schwanna); izoluje akson i przyspiesza przewodzenie impulsu — impuls „przeskakuje” między przewężeniami.',draw:function(g){[0,1,2,3].forEach(function(i){g.appendChild(R(126+i*42,88,34,24,10,'#f3f0d0','#8a8450',1.6))})}},
    {n:'przewężenie Ranviera',m:[164,128],d:'Odsłonięty fragment aksonu między sąsiednimi odcinkami osłonki; tu powstaje impuls, który „skacze” do następnego przewężenia (przewodzenie skokowe).',draw:function(g){[160,202,244].forEach(function(x){g.appendChild(R(x,91,8,18,2,'#ffcdd2','#c62828',1.5))})}},
    {n:'zakończenia aksonu (synapsa)',m:[340,70],d:'Rozgałęzienia z kolbkami; tu impuls zamienia się na sygnał chemiczny — neuroprzekaźnik uwalniany w szczelinę synaptyczną do następnej komórki.',draw:function(g){['M300,100 L322,80','M300,100 L326,100','M300,100 L322,120'].forEach(function(d){g.appendChild(P(d,null,'#3f5aa8',3))});[[326,77],[331,100],[326,123]].forEach(function(p){g.appendChild(C(p[0],p[1],5,'#fff','#3f5aa8',2.5))})}}
  ]}}})}});

BIO.define('nefron-budowa',{opis:'Nefron: kłębuszek, torebka Bowmana, kanalik bliższy, pętla Henlego, kanalik dalszy, kanalik zbiorczy, tętniczki, naczynia okołokanalikowe; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:290,label:'Nefron z oznaczonymi częściami',parts:[
    {n:'torebka Bowmana',m:[50,60],z:-1,d:'Obejmuje kłębuszek; zbiera przesącz (mocz pierwotny) i kieruje do kanalika. Kłębuszek + torebka = ciałko nerkowe (w korze nerki).',draw:function(g){g.appendChild(C(82,70,32,'#fff7d6','#b8860b',2.5))}},
    {n:'kłębuszek naczyń włosowatych',m:[110,96],d:'Sieć naczyń włosowatych. Ciśnienie krwi wyciska osocze przez cienką ścianę (ultrafiltracja) — powstaje mocz pierwotny. Białka i komórki krwi zostają we krwi.',draw:function(g){g.appendChild(C(82,70,19,'#f2a0a0','#b23b3b',1.8));g.appendChild(P('M70,62 q8,-8 14,0 t10,8 q-4,10 -14,8 t-14,-6',null,'#b23b3b',1.5))}},
    {n:'tętniczka doprowadzająca',m:[22,34],d:'Doprowadza krew do kłębuszka. Jest szersza niż odprowadzająca — to utrzymuje wysokie ciśnienie w kłębuszku, potrzebne do filtracji.',draw:function(g){g.appendChild(P('M10,40 L64,56',null,'#b23b3b',9))}},
    {n:'tętniczka odprowadzająca',m:[150,30],d:'Odprowadza krew z kłębuszka (jest węższa) i rozpada się na naczynia włosowate oplatające kanaliki.',draw:function(g){g.appendChild(P('M98,52 L138,22',null,'#b23b3b',6))}},
    {n:'kanalik bliższy',m:[42,150],d:'Kręty kanalik tuż za torebką. Wchłanianie zwrotne: cała glukoza i aminokwasy oraz większość wody i jonów wracają do krwi.',draw:function(g){g.appendChild(P('M82,102 q-16,10 0,20 t0,20 q-16,10 0,20 t0,20 L82,184',null,'#2a6f97',6))}},
    {n:'pętla Henlego',m:[96,262],d:'Ramię zstępujące i wstępujące; tworzy w rdzeniu nerki gradient stężeń, dzięki któremu można odzyskać wodę i wytworzyć mocz zagęszczony.',draw:function(g){g.appendChild(P('M82,184 L112,262 Q135,284 158,262 L186,184',null,'#1d4e73',6))}},
    {n:'kanalik dalszy',m:[208,128],d:'Kręty kanalik za pętlą; reguluje skład jonów (Na⁺, K⁺) i pH przez wydzielanie H⁺ — pod wpływem hormonów.',draw:function(g){g.appendChild(P('M186,184 q12,-14 22,-4 t22,-4 q12,-14 20,-26 L262,106',null,'#5b9bd5',6))}},
    {n:'kanalik zbiorczy',m:[318,120],d:'Zbiera mocz z wielu nefronów. Pod wpływem ADH wchłania zwrotnie wodę (mocz bardziej zagęszczony); mocz ostateczny odpływa do miedniczki nerkowej.',draw:function(g){g.appendChild(P('M262,106 L290,106 L290,278',null,'#8a6bbf',8))}},
    {n:'naczynia okołokanalikowe',m:[16,196],z:-2,d:'Sieć naczyń włosowatych oplatająca kanaliki; przejmuje z nich wchłaniane zwrotnie substancje (woda, glukoza, jony).',draw:function(g){g.appendChild(P('M138,24 Q150,110 120,150 Q60,190 56,150 Q40,200 90,230 Q126,270 140,246 Q180,200 200,160',null,'#e57373',2.4,{'stroke-dasharray':'5 3'}));g.insertBefore(P('M138,24 Q150,110 120,150 Q60,190 56,150 Q40,200 90,230 Q126,270 140,246 Q180,200 200,160',null,'transparent',12),g.firstChild)}}
  ]}}})}});

BIO.define('nablonki-rodzaje',{opis:'Cztery rodzaje nabłonka na błonie podstawnej: płaski, sześcienny, walcowaty (z mikrokosmkami), urzęsiony; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:200,label:'Rodzaje nabłonka jednowarstwowego',parts:[
    {n:'błona podstawna',m:[180,184],z:-2,d:'Cienka warstwa, na której leży nabłonek; oddziela go od tkanki łącznej, z której nabłonek jest odżywiany (nie ma własnych naczyń krwionośnych).',draw:function(g){g.appendChild(L(8,160,352,160,'#8a8450',4))}},
    {n:'nabłonek płaski',m:[44,126],d:'Cienkie, spłaszczone komórki. Krótka droga dla gazów i substancji: pęcherzyki płucne, ściany naczyń włosowatych.',draw:function(g){for(var i=0;i<3;i++)g.appendChild(R(10+i*26,148,26,10,4,'#f6d9c8','#b5694a',1.6))}},
    {n:'nabłonek sześcienny',m:[132,126],d:'Komórki o podobnej wysokości i szerokości. Wydzielanie i wchłanianie: kanaliki nerkowe, gruczoły.',draw:function(g){for(var i=0;i<3;i++){g.appendChild(R(98+i*26,134,26,26,3,'#d7e4f7','#3f5aa8',1.6));g.appendChild(C(111+i*26,147,4,'#3f5aa8','none',0))}}},
    {n:'nabłonek walcowaty',m:[224,86],d:'Wysokie, wąskie komórki, często z mikrokosmkami na szczycie, które zwiększają powierzchnię wchłaniania: jelito cienkie.',draw:function(g){for(var i=0;i<3;i++){var x=190+i*20;g.appendChild(R(x,98,20,62,3,'#dff0d8','#2e7d32',1.6));g.appendChild(C(x+10,140,4,'#2e7d32','none',0));for(var k=0;k<4;k++)g.appendChild(L(x+3+k*4.5,98,x+3+k*4.5,90,'#2e7d32',1.4))}}},
    {n:'mikrokosmki',m:[246,66],z:1,d:'Drobne wypustki błony komórkowej na szczycie komórek jelita; zwiększają powierzchnię wchłaniania pokarmu.',draw:function(g){g.appendChild(L(190,84,250,84,'#2e7d32',1,{'stroke-dasharray':'2 3'}))}},
    {n:'nabłonek urzęsiony',m:[318,72],d:'Komórki z rzęskami, które poruszają się rytmicznie i przesuwają śluz wraz z zanieczyszczeniami: drogi oddechowe.',draw:function(g){for(var i=0;i<3;i++){var x=268+i*26;g.appendChild(R(x,108,26,52,3,'#f3e1ef','#8e3f86',1.6));g.appendChild(C(x+13,140,4,'#8e3f86','none',0));for(var k=0;k<3;k++)g.appendChild(P('M'+(x+5+k*8)+',108 q-3,-8 2,-16',null,'#8e3f86',1.4))}}}
  ]}}})}});

BIO.define('krew-skladniki',{opis:'Składniki krwi: osocze, erytrocyty (bez jądra, dwuwklęsłe), leukocyty (z jądrem), płytki krwi; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:200,label:'Rozmaz krwi i jego składniki',parts:[
    {n:'osocze',m:[330,176],z:-2,d:'Płynna część krwi (ok. 55%): woda z białkami, solami, glukozą i hormonami. Transportuje substancje i ciepło.',draw:function(g){g.appendChild(R(6,10,348,180,14,'#fff4d6','#d9b24c',1.5))}},
    {n:'erytrocyty',m:[60,40],d:'Krwinki czerwone: bez jądra, dwuwklęsłe, wypełnione hemoglobiną. Przenoszą tlen (i część CO₂). Najliczniejsze komórki krwi.',draw:function(g){[[50,60],[110,120],[70,150],[170,50],[250,150],[300,60],[210,110]].forEach(function(p){g.appendChild(C(p[0],p[1],18,'#e57373','#b23b3b',1.8));g.appendChild(C(p[0],p[1],7,'#f4a6a6','none',0))})}},
    {n:'leukocyt',m:[190,172],d:'Krwinka biała: duża, z jądrem (często płatowym). Broni organizm przed bakteriami, wirusami i obcymi komórkami. Jest ich znacznie mniej niż erytrocytów.',draw:function(g){g.appendChild(C(150,100,26,'#e8eaf6','#3f5aa8',2));g.appendChild(C(142,96,10,'#5c4fa8','none',0));g.appendChild(C(160,104,10,'#5c4fa8','none',0));g.appendChild(C(150,112,8,'#5c4fa8','none',0))}},
    {n:'płytki krwi',m:[290,100],d:'Trombocyty: małe fragmenty komórek, bez jądra. Biorą udział w krzepnięciu krwi i zatrzymaniu krwawienia.',draw:function(g){[[260,100],[275,88],[318,118],[236,56],[100,86]].forEach(function(p){g.appendChild(E(p[0],p[1],7,4,'#c9a0dc','#7a3fbf',1.4,30))})}}
  ]}}})}});

BIO.define('miesnie-trzy',{opis:'Trzy rodzaje tkanki mięśniowej: szkieletowa (prążkowana, wielojądrowa), gładka (wrzecionowate komórki), sercowa (prążkowana, rozgałęziona, wstawki); tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:200,label:'Trzy rodzaje tkanki mięśniowej',parts:[
    {n:'mięsień szkieletowy',m:[60,40],d:'Długie, wielojądrowe włókna z poprzecznym prążkowaniem; jądra przy brzegu. Praca zależna od woli; przyczepiony do kości.',draw:function(g){[34,60,86].forEach(function(y){g.appendChild(R(8,y-10,110,20,9,'#f4c7c0','#b5483a',1.6));for(var x=18;x<112;x+=9)g.appendChild(L(x,y-8,x,y+8,'#b5483a',1.1));[28,60,92].forEach(function(x){g.appendChild(E(x,y-7,4,2.4,'#7a2a20','none',0))})})}},
    {n:'mięsień gładki',m:[180,40],d:'Wrzecionowate komórki z jednym jądrem, bez prążkowania. Praca niezależna od woli, wolna i długotrwała: ściany jelit, żołądka, naczyń.',draw:function(g){[[150,48],[196,40],[168,86],[214,82],[152,124],[200,128]].forEach(function(p){g.appendChild(E(p[0],p[1],34,8,'#e1d3f0','#7a3fbf',1.6,-12));g.appendChild(E(p[0],p[1],6,3,'#4a2a7a','none',0,-12))})}},
    {n:'mięsień sercowy',m:[270,66],d:'Prążkowane, rozgałęzione komórki połączone wstawkami (łącznikami); jedno-, dwujądrowe. Praca niezależna od woli, rytmiczna, bez zmęczenia.',draw:function(g){g.appendChild(P('M262,40 L300,40 L318,70 L346,70',null,'#b5483a',14));g.appendChild(P('M300,40 L318,12 L346,12',null,'#b5483a',14));g.appendChild(P('M318,70 L330,110 L346,120',null,'#b5483a',14));[[274,40],[330,70],[332,12],[330,100]].forEach(function(p){g.appendChild(E(p[0],p[1],3.5,2.6,'#f4c7c0','none',0))});for(var x=268;x<296;x+=7)g.appendChild(L(x,33,x,47,'#f4c7c0',1.2))}},
    {n:'wstawki',m:[345,130],z:1,d:'Połączenia między komórkami mięśnia sercowego: przekazują pobudzenie, dzięki czemu komórki kurczą się zgodnie.',draw:function(g){[[290,40],[326,70],[320,100],[322,12]].forEach(function(p){g.appendChild(L(p[0],p[1]-8,p[0],p[1]+8,'#222',2.4))})}}
  ]}}})}});

BIO.define('kwiat-budowa',{opis:'Budowa kwiatu okrytonasiennego: działki kielicha, płatki korony, pręcik (nitka, pylnik), słupek (znamię, szyjka, zalążnia z zalążkiem), dno kwiatowe; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:260,label:'Przekrój podłużny przez kwiat',parts:[
    {n:'dno kwiatowe',m:[180,246],z:-2,d:'Rozszerzony koniec szypułki, do którego przyczepione są wszystkie części kwiatu.',draw:function(g){g.appendChild(E(180,214,34,10,'#cfe3b4','#4f7a2a',2));g.appendChild(P('M180,224 L180,258',null,'#4f7a2a',5))}},
    {n:'działki kielicha',m:[100,222],d:'Zielone listki na zewnątrz kwiatu; chronią pąk, a po rozwinięciu podtrzymują koronę.',draw:function(g){g.appendChild(P('M150,212 Q116,214 104,186 Q132,196 156,208',"#8fcf7a",'#2e7d32',2));g.appendChild(P('M210,212 Q244,214 256,186 Q228,196 204,208',"#8fcf7a",'#2e7d32',2))}},
    {n:'płatki korony',m:[84,150],d:'Barwne płatki; zwabiają owady zapylające (u roślin owadopylnych). Razem tworzą koronę.',draw:function(g){g.appendChild(P('M150,206 Q92,196 96,120 Q132,140 156,196',"#f6a9c6",'#b83f78',2));g.appendChild(P('M210,206 Q268,196 264,120 Q228,140 204,196',"#f6a9c6",'#b83f78',2))}},
    {n:'nitka pręcika',m:[128,176],d:'Cienka „szypułka” pręcika, na której osadzony jest pylnik.',draw:function(g){g.appendChild(P('M146,206 L134,130',null,'#8a7a20',4));g.appendChild(P('M214,206 L226,130',null,'#8a7a20',4))}},
    {n:'pylnik',m:[112,112],d:'Zgrubienie na końcu pręcika; w nim powstaje pyłek (męskie gametofity). Nitka + pylnik = pręcik, męski organ kwiatu.',draw:function(g){g.appendChild(E(134,122,11,16,'#ffe066','#b38f00',2,-10));g.appendChild(E(226,122,11,16,'#ffe066','#b38f00',2,10))}},
    {n:'znamię słupka',m:[210,52],d:'Lepka powierzchnia na szczycie słupka; tu osiada pyłek podczas zapylenia.',draw:function(g){g.appendChild(E(180,60,17,9,'#f0a45a','#a85a10',2))}},
    {n:'szyjka słupka',m:[218,100],d:'Cienki odcinek między znamieniem a zalążnią; przez nią rośnie łagiewka pyłkowa.',draw:function(g){g.appendChild(P('M180,68 L180,160',null,'#7aa63a',9))}},
    {n:'zalążnia',m:[236,176],d:'Rozszerzona dolna część słupka; w środku są zalążki. Po zapłodnieniu z zalążni powstaje owoc, a z zalążków nasiona.',draw:function(g){g.appendChild(E(180,184,32,30,'#e3f0c8','#4f7a2a',2.4))}},
    {n:'zalążek',m:[180,200],z:1,d:'Mały, owalny twór w zalążni; zawiera komórkę jajową. Po zapłodnieniu rozwija się w nasiono.',draw:function(g){g.appendChild(E(172,184,8,11,'#fff','#7a3fbf',2));g.appendChild(E(188,190,8,11,'#fff','#7a3fbf',2))}}
  ]}}})}});

BIO.define('polip-meduza',{opis:'Dwie formy parzydełkowców: polip (osiadły, otworem gębowym do góry) i meduza (pływająca, otworem gębowym w dół); elementy: czułki, otwór gębowy, jama chłonąco-trawiąca, stopa, parasol; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:240,label:'Polip i meduza',parts:[
    {n:'polip',m:[40,224],z:-2,d:'Forma osiadła, walcowata; przytwierdzona stopą do podłoża, otwór gębowy z czułkami skierowany do góry (np. stułbia).',draw:function(g){g.appendChild(R(52,70,32,120,12,'#d7ecd0','#4f7a2a',2.2))}},
    {n:'czułki z parzydełkami',m:[24,60],d:'Otaczają otwór gębowy; mają komórki parzydełkowe, którymi zwierzę paraliżuje zdobycz i się broni.',draw:function(g){[[52,70,30,34],[60,70,52,22],[76,70,84,22],[84,70,106,34]].forEach(function(p){g.appendChild(P('M'+p[0]+','+p[1]+' L'+p[2]+','+p[3],null,'#4f7a2a',3.4))})}},
    {n:'otwór gębowy',m:[68,102],d:'Jedyny otwór prowadzący do jamy chłonąco-trawiącej; służy do pobierania pokarmu i usuwania resztek (brak odbytu).',draw:function(g){g.appendChild(E(68,72,9,5,'#8a3b3b','#5c1f1f',1.6))}},
    {n:'jama chłonąco-trawiąca',m:[68,136],z:1,d:'Wnętrze ciała; pokarm trawiony jest w niej i wewnątrz komórek. Ściana ciała ma dwie warstwy: ektodermę i endodermę.',draw:function(g){g.appendChild(R(60,80,16,100,8,'#fff4d6','#b8860b',1.6))}},
    {n:'stopa',m:[68,206],d:'Rozszerzone dolne zakończenie polipa; przytwierdza go do podłoża.',draw:function(g){g.appendChild(E(68,194,28,7,'#b9d4a8','#4f7a2a',2))}},
    {n:'parasol (dzwon) meduzy',m:[260,34],d:'Galaretowaty dzwon meduzy; skurcze parasola napędzają pływanie. Meduza ma otwór gębowy skierowany w dół.',draw:function(g){g.appendChild(P('M200,100 Q260,20 320,100 Q260,86 200,100Z',"#cfe6f7",'#2a6f97',2.4))}},
    {n:'ramiona gębowe meduzy',m:[320,170],d:'Zwisają w środku dolnej strony parasola wokół otworu gębowego; doprowadzają pokarm do ust.',draw:function(g){g.appendChild(P('M260,98 L260,150',null,'#8a3b3b',5))}},
    {n:'czułki meduzy',m:[200,150],d:'Cienkie wypustki na brzegu parasola z komórkami parzydełkowymi; służą do chwytania i unieszkodliwiania zdobyczy.',draw:function(g){[214,236,284,306].forEach(function(x){g.appendChild(P('M'+x+',98 Q'+(x+8)+',130 '+x+',160',null,'#2a6f97',2.6))})}}
  ]}}})}});

BIO.define('bezkregowce-sylwetki',{opis:'Sylwetki bezkręgowców do rozpoznawania grup: gąbka, parzydełkowiec (polip), płaziniec, nicień, pierścienica, mięczak (ślimak), stawonóg; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:200,label:'Sylwetki bezkręgowców',parts:[
    {n:'gąbka',m:[40,70],d:'Osiadła, asymetryczna, bez tkanek i narządów; w ścianie ciała pory i komórki z wiciami.',draw:function(g){g.appendChild(P('M24,100 Q20,50 36,44 Q52,52 56,44 Q70,50 66,100Z',"#e8d9a8",'#8a7a30',2));[[38,70],[52,78],[44,90]].forEach(function(p){g.appendChild(C(p[0],p[1],2.4,'#8a7a30','none',0))})}},
    {n:'parzydełkowiec',m:[130,70],d:'Symetria promienista, dwie warstwy ciała, czułki z parzydełkami, jeden otwór gębowy.',draw:function(g){g.appendChild(R(112,50,22,50,8,'#d7ecd0','#4f7a2a',2));[[112,50,102,36],[120,50,116,34],[130,50,134,34],[134,50,146,36]].forEach(function(p){g.appendChild(P('M'+p[0]+','+p[1]+' L'+p[2]+','+p[3],null,'#4f7a2a',2.6))})}},
    {n:'płaziniec',m:[230,56],d:'Ciało spłaszczone grzbietobrzusznie, niesegmentowane, bez jamy ciała; jeden otwór gębowy (np. wypławek, tasiemiec).',draw:function(g){g.appendChild(P('M190,60 Q230,46 270,60 Q240,80 190,60Z',"#d9c3e8",'#7a3fbf',2))}},
    {n:'nicień',m:[320,56],d:'Walcowate, nitkowate ciało, niesegmentowane, zwężone na końcach; jama ciała pierwotna, układ pokarmowy z otworem gębowym i odbytem (glista ludzka).',draw:function(g){g.appendChild(P('M284,60 Q304,46 324,60 Q344,74 354,58',null,'#c98b5c',7))}},
    {n:'pierścienica',m:[60,168],d:'Ciało podzielone na jednakowe pierścienie (segmenty); jama ciała wtórna, zamknięty układ krwionośny (dżdżownica, pijawka).',draw:function(g){g.appendChild(R(20,150,100,20,10,'#f0b8b0','#b5483a',2));for(var x=34;x<116;x+=11)g.appendChild(L(x,151,x,169,'#b5483a',1.4));g.appendChild(R(38,146,28,28,0,'none','none',0))}},
    {n:'mięczak (ślimak)',m:[180,168],d:'Ciało miękkie, niesegmentowane: głowa, noga i worek trzewiowy; często muszla (ślimaki, małże, głowonogi).',draw:function(g){g.appendChild(P('M150,176 L210,176 Q214,168 204,166 L168,166Z',"#d9c8a8",'#8a6a30',2));g.appendChild(C(176,150,18,'#e8c898','#8a6a30',2));g.appendChild(P('M176,150 m-10,0 a10,10 0 1,1 10,10',null,'#8a6a30',1.4));g.appendChild(P('M150,170 L146,152',null,'#8a6a30',2))}},
    {n:'stawonóg',m:[300,168],d:'Ciało okryte chitynowym pancerzem, podzielone na odcinki, odnóża stawowe (owady, pajęczaki, skorupiaki).',draw:function(g){g.appendChild(E(300,160,26,10,'#c9b38c','#6a5430',2));g.appendChild(C(268,158,8,'#c9b38c','#6a5430',2));[[290,170,284,190],[300,170,300,190],[312,170,318,190]].forEach(function(p){g.appendChild(P('M'+p[0]+','+p[1]+' L'+p[2]+','+p[3],null,'#6a5430',2))})}}
  ]}}})}});

BIO.define('szyszki-iglaste',{opis:'Szyszki i igły rodzimych roślin iglastych: sosna (igły po 2, szyszki zwisające), świerk (igły pojedyncze, szyszki zwisają), jodła (szyszki stoją), modrzew (igły w pęczkach, małe szyszki), jałowiec; tryby poznaj / znajdź / podpisz',
mount:function(el){
  function cone(g,x,y,w,h,f,s,up){g.appendChild(E(x,y,w,h,f,s,2));for(var k=-1;k<=1;k++)g.appendChild(P('M'+(x-w)+','+(y+k*h*.5)+' Q'+x+','+(y+k*h*.5+(up?-5:5))+' '+(x+w)+','+(y+k*h*.5),null,s,1.2))}
  lab(el,{get:function(){return{w:360,h:200,label:'Szyszki roślin iglastych',parts:[
    {n:'sosna zwyczajna',m:[40,170],d:'Igły po dwie w krótkopędzie; szyszki jajowate, zwisające, drewniejące. Jedyny rodzimy gatunek z igłami po 2.',draw:function(g){cone(g,40,86,16,28,'#c9a06a','#6a4a20');g.appendChild(P('M40,58 L40,30',null,'#6a4a20',3));g.appendChild(P('M40,30 L24,8',null,'#2e7d32',1.8));g.appendChild(P('M42,30 L58,8',null,'#2e7d32',1.8))}},
    {n:'świerk pospolity',m:[120,170],d:'Igły pojedyncze, kłujące, czworokanciaste; szyszki długie, walcowate, zwisają i opadają w całości.',draw:function(g){cone(g,120,92,14,38,'#b98856','#5a3a18');g.appendChild(P('M120,54 L120,26',null,'#5a3a18',3));[[-12,0],[12,0],[0,-10]].forEach(function(o){g.appendChild(P('M120,28 L'+(120+o[0]*2)+','+(10+o[1]),null,'#2e7d32',1.8))})}},
    {n:'jodła pospolita',m:[200,170],d:'Igły płaskie z dwoma jasnymi paskami od spodu; szyszki stoją na gałęzi (pionowo) i rozpadają się na drzewie.',draw:function(g){cone(g,200,86,12,30,'#a99070','#4a3a28',true);g.appendChild(P('M200,116 L200,140',null,'#4a3a28',3));g.appendChild(P('M170,140 L230,140',null,'#2e7d32',4))}},
    {n:'modrzew europejski',m:[274,170],d:'Igły miękkie, w pęczkach; opadają na zimę. Szyszki małe, jajowate, stoją.',draw:function(g){cone(g,274,98,10,16,'#c4a77a','#6a5030',true);[[250,60],[270,52],[290,60]].forEach(function(p){for(var a=-2;a<=2;a++)g.appendChild(P('M'+p[0]+','+p[1]+' L'+(p[0]+a*4)+','+(p[1]-18),null,'#7aa63a',1.4))})}},
    {n:'jałowiec pospolity',m:[336,170],d:'Igły kłujące po 3 w okółkach; „szyszkojagody” — mięsiste, niebieskawe, bez łusek.',draw:function(g){g.appendChild(C(338,92,13,'#4a5a8a','#2a3a6a',2));g.appendChild(P('M338,106 L338,128',null,'#2e7d32',3));[[-12,-12],[12,-12],[-14,6],[14,6]].forEach(function(o){g.appendChild(P('M338,70 L'+(338+o[0]*1.5)+','+(50+o[1]),null,'#2e7d32',1.8))})}}
  ]}}})}});

BIO.define('neurony-mielina',{opis:'Dwa typy neuronów: z osłonką mielinową (impuls szybki, ok. 40 m/s i więcej, przewodzenie skokowe) i bez osłonki (wolniejszy, ok. 8 m/s); tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:220,label:'Neuron bez osłonki i z osłonką mielinową',parts:[
    {n:'neuron A — bez osłonki',m:[24,100],d:'Akson bez mieliny; impuls przesuwa się ciągle, krok po kroku — wolniej (rząd 1–10 m/s).',draw:function(g){g.appendChild(C(40,50,16,'#c4d0f2','#3f5aa8',2));g.appendChild(P('M56,50 L340,50',null,'#3f5aa8',4));g.appendChild(P('M24,40 L8,26',null,'#3f5aa8',3));g.appendChild(P('M24,60 L8,74',null,'#3f5aa8',3))}},
    {n:'neuron B — z osłonką mielinową',m:[24,190],d:'Akson otoczony mieliną (komórki Schwanna); impuls „przeskakuje” między przewężeniami Ranviera — kilkanaście razy szybciej (np. 40–120 m/s).',draw:function(g){g.appendChild(C(40,150,16,'#c4d0f2','#3f5aa8',2));g.appendChild(P('M56,150 L340,150',null,'#3f5aa8',4));g.appendChild(P('M24,140 L8,126',null,'#3f5aa8',3));g.appendChild(P('M24,160 L8,174',null,'#3f5aa8',3))}},
    {n:'osłonka mielinowa',m:[160,130],z:1,d:'Tłuszczowa „izolacja” aksonu — to ona umożliwia szybsze przewodzenie impulsu. Nazwa substancji: mielina.',draw:function(g){[0,1,2,3,4].forEach(function(i){g.appendChild(R(74+i*52,138,44,24,10,'#f3f0d0','#8a8450',1.8))})}},
    {n:'przewężenie Ranviera',m:[236,176],d:'Odsłonięty fragment aksonu między odcinkami mieliny; w nim powstaje impuls, który przeskakuje do następnego przewężenia.',draw:function(g){[118,170,222,274].forEach(function(x){g.appendChild(R(x-3,142,6,16,2,'#ffcdd2','#c62828',1.6))})}}
  ]}}})}});

BIO.define('drzewa-krzewy',{opis:'Sylwetki roślin drzewiastych: drzewo liściaste (jeden pień, korona), drzewo iglaste (stożkowata korona), krzew (wiele pędów od ziemi), pnącze; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:220,label:'Pokrój drzew i krzewów',parts:[
    {n:'drzewo liściaste',m:[44,206],d:'Jeden wyraźny pień i szeroka, kulista lub owalna korona z liśćmi (dąb, lipa, brzoza). Pień ma kilka metrów i więcej.',draw:function(g){g.appendChild(R(40,120,10,70,2,'#8a6a40','#5a3a18',2));g.appendChild(C(45,84,38,'#8fcf7a','#2e7d32',2.4))}},
    {n:'drzewo iglaste',m:[134,206],d:'Prosty pień i korona stożkowata (świerk, jodła) lub parasolowata (sosna); igły zamiast liści.',draw:function(g){g.appendChild(R(130,160,8,30,2,'#8a6a40','#5a3a18',2));g.appendChild(P('M134,24 L170,100 L98,100Z',"#5c9a5c",'#2e5a2e',2.2));g.appendChild(P('M134,60 L180,150 L88,150Z',"#5c9a5c",'#2e5a2e',2.2))}},
    {n:'krzew',m:[226,206],d:'Wiele równorzędnych pędów wyrastających od ziemi, niski (zwykle poniżej kilku metrów): leszczyna, bez, dzika róża, jałowiec.',draw:function(g){[[-30,70],[-14,50],[0,44],[14,50],[30,70]].forEach(function(o){g.appendChild(P('M226,190 L'+(226+o[0])+','+(190-o[1]*1.3),null,'#6a4a28',3))});g.appendChild(E(226,126,42,30,'#9fd27a','#3f7a2a',2.2));g.appendChild(P('M226,190 L226,150',null,'#6a4a28',3))}},
    {n:'pnącze',m:[318,206],d:'Cienkie pędy, które wspinają się po podporze (wąsy, korzenie przybyszowe, owijanie): bluszcz, chmiel, dzikie wino.',draw:function(g){g.appendChild(R(306,40,8,150,1,'#b9b9b9','#777',1.6));g.appendChild(P('M310,190 Q336,160 312,130 Q290,100 314,70 Q334,50 312,30',null,'#3f7a2a',3));[[330,164],[294,116],[330,88],[300,56]].forEach(function(p){g.appendChild(E(p[0],p[1],9,6,'#8fcf7a','#2e7d32',1.6,30))})}}
  ]}}})}});

BIO.define('mapa-narzadow',{opis:'Sylwetka człowieka z narządami układów: mózg, tchawica i płuca, serce, wątroba, żołądek, trzustka, nerki, jelito cienkie, jelito grube, pęcherz moczowy; tryby poznaj / znajdź / podpisz (przypisz układ)',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:300,label:'Narządy człowieka',parts:[
    {n:'sylwetka ciała',m:[336,286],z:-3,d:'Kontur ciała człowieka, na którym zaznaczono położenie narządów.',draw:function(g){g.appendChild(C(180,30,22,'#f3e6d6','#b09070',2));g.appendChild(P('M150,60 Q130,70 130,120 L130,200 Q132,240 150,286 L174,286 L180,230 L186,286 L210,286 Q228,240 230,200 L230,120 Q230,70 210,60Z',"#f3e6d6",'#b09070',2))}},
    {n:'mózg',m:[216,22],z:1,d:'Układ nerwowy. Ośrodek sterowania: przetwarza informacje i wydaje polecenia.',draw:function(g){g.appendChild(E(180,26,15,12,'#f4a6c6','#b83f78',1.8))}},
    {n:'płuca',m:[132,98],z:1,d:'Układ oddechowy. Wymiana gazowa: pobranie O₂ i oddanie CO₂ w pęcherzykach płucnych.',draw:function(g){g.appendChild(E(162,96,16,28,'#9ecbf0','#2a6f97',2));g.appendChild(E(198,96,16,28,'#9ecbf0','#2a6f97',2));g.appendChild(P('M180,62 L180,86',null,'#2a6f97',3))}},
    {n:'serce',m:[216,114],z:2,d:'Układ krążenia. Pompuje krew do płuc i do całego ciała.',draw:function(g){g.appendChild(P('M184,98 Q196,88 202,100 Q206,114 184,128 Q170,114 172,102 Q176,92 184,98Z',"#e57373",'#b23b3b',2))}},
    {n:'wątroba',m:[134,138],z:1,d:'Układ pokarmowy (gruczoł). Wytwarza żółć, magazynuje glikogen, odtruwa krew.',draw:function(g){g.appendChild(P('M140,132 Q170,124 190,134 L186,152 Q160,158 142,150Z',"#a8643c",'#6a3a18',2))}},
    {n:'żołądek',m:[222,142],z:2,d:'Układ pokarmowy. Wstępne trawienie białek (sok żołądkowy z kwasem solnym i pepsyną).',draw:function(g){g.appendChild(P('M190,138 Q214,132 214,152 Q210,168 192,160 Q184,150 190,138Z',"#f0b878",'#b5701a',2))}},
    {n:'trzustka',m:[132,166],z:1,d:'Układ pokarmowy (gruczoł) i dokrewny. Wytwarza sok trzustkowy (enzymy) oraz insulinę i glukagon.',draw:function(g){g.appendChild(P('M150,164 Q176,158 200,166 Q178,174 152,172Z',"#e6d36a",'#a8941a',2))}},
    {n:'nerki',m:[236,176],z:1,d:'Układ wydalniczy. Filtrują krew i wytwarzają mocz.',draw:function(g){g.appendChild(E(152,184,7,13,'#c46a6a','#7a2a2a',2));g.appendChild(E(208,184,7,13,'#c46a6a','#7a2a2a',2))}},
    {n:'jelito cienkie',m:[132,206],z:1,d:'Układ pokarmowy. Dokończenie trawienia i wchłanianie substancji odżywczych (kosmki jelitowe).',draw:function(g){g.appendChild(P('M160,200 Q200,196 200,208 Q160,212 162,222 Q202,222 198,234 Q160,236 168,244',null,'#e09a5a',7))}},
    {n:'jelito grube',m:[232,214],z:0,d:'Układ pokarmowy. Wchłanianie wody i soli mineralnych, formowanie kału.',draw:function(g){g.appendChild(P('M146,244 L146,198 L214,198 L214,244',null,'#8a6a40',6))}},
    {n:'pęcherz moczowy',m:[132,262],z:1,d:'Układ wydalniczy. Gromadzi mocz przed wydaleniem.',draw:function(g){g.appendChild(E(180,262,10,12,'#f0e08a','#a8941a',2))}}
  ]}}})}});

BIO.define('preparat-mikroskopowy',{opis:'Preparat mikroskopowy ze skórki liścia cebuli w przekroju bocznym: szkiełko podstawowe, kropla wody, skórka cebuli, szkiełko nakrywkowe, zakraplacz; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:220,label:'Preparat mikroskopowy — elementy',parts:[
    {n:'szkiełko podstawowe',m:[40,196],d:'Większe, prostokątne szkiełko, na którym kładzie się obiekt (etap 3) i kroplę wody (etap 2). Stanowi podstawę preparatu.',draw:function(g){g.appendChild(R(40,150,280,16,2,'#e4f1f8','#5a8aa8',2.4))}},
    {n:'kropla wody',m:[90,136],d:'Nanosi się ją zakraplaczem na szkiełko podstawowe, aby obiekt nie wysechł i dobrze przylegał do szkiełka.',draw:function(g){g.appendChild(E(180,146,76,8,'#bfe4f7','#2a7fb0',1.8))}},
    {n:'skórka liścia cebuli',m:[180,184],z:1,d:'Cienki fragment (jedna warstwa komórek) położony w kropli wody; po rozprostowaniu bez fałd jest przezroczysty i nadaje się do obserwacji.',draw:function(g){g.appendChild(R(130,142,100,6,1,'#e9c9a0','#a8722a',1.6))}},
    {n:'szkiełko nakrywkowe',m:[300,100],d:'Małe, cienkie szkiełko, które przykłada się pod kątem (żeby nie powstały pęcherzyki powietrza) i opuszcza na kroplę z obiektem (etap 6).',draw:function(g){g.appendChild(R(120,126,120,8,1,'#f6fbff','#5a8aa8',2.2))}},
    {n:'zakraplacz',m:[300,50],d:'Służy do nanoszenia kropli wody na szkiełko podstawowe.',draw:function(g){g.appendChild(P('M250,24 L250,72',null,'#777',9));g.appendChild(P('M250,72 L250,96',null,'#2a7fb0',4));g.appendChild(E(250,16,12,12,'#d8d8d8','#777',2))}}
  ]}}})}});

BIO.define('przeksztalcenia-organow',{opis:'Przekształcenia organów roślin: korzeń spichrzowy (marchew), bulwa pędowa (ziemniak z oczkami), kłącze, cebula, rozłogi truskawki, wąsy czepne grochu i ciernie berberysu; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:250,label:'Przekształcone organy roślin',parts:[
    {n:'korzeń spichrzowy (marchew)',m:[34,116],d:'Przekształcony KORZEŃ: gruby, mięsisty, gromadzi substancje zapasowe (cukry). Roślina dwuletnia zużywa je w drugim roku do kwitnienia.',draw:function(g){g.appendChild(P('M20,24 L60,24 L44,110 L36,110Z',"#f0a45a",'#b5701a',2.4));g.appendChild(P('M40,24 L30,6 M40,24 L40,4 M40,24 L50,6',null,'#2e7d32',2.4))}},
    {n:'bulwa pędowa (ziemniak)',m:[130,116],d:'Przekształcona ŁODYGA (pęd): rozrasta się pod ziemią i gromadzi skrobię. Ma „oczka” — pąki, z których wyrastają nowe pędy, dlatego służy do rozmnażania wegetatywnego.',draw:function(g){g.appendChild(E(112,70,32,22,'#d9b97a','#8a6a30',2.4,-15));[[100,64],[118,76],[126,62]].forEach(function(p){g.appendChild(C(p[0],p[1],2.6,'#6a4a20','none',0))})}},
    {n:'kłącze',m:[210,116],d:'Podziemna ŁODYGA płożąca się poziomo, z łuskowatymi liśćmi i korzeniami przybyszowymi; zimuje i rozmnaża roślinę wegetatywnie (konwalia, perz, paproć).',draw:function(g){g.appendChild(P('M170,70 Q200,60 226,72 Q250,84 270,70',null,'#a8793a',9));[[186,66],[216,72],[246,80]].forEach(function(p){g.appendChild(P('M'+p[0]+','+p[1]+' L'+p[0]+','+(p[1]-24),null,'#2e7d32',2.6));g.appendChild(P('M'+p[0]+','+(p[1]+4)+' L'+(p[0]-4)+','+(p[1]+22),null,'#8a6a40',1.6))})}},
    {n:'cebula',m:[320,116],d:'Skrócona, podziemna ŁODYGA (piętka) z mięsistymi liśćmi spichrzowymi (łuskami), które gromadzą wodę i cukry (cebula, tulipan).',draw:function(g){g.appendChild(E(318,66,24,30,'#f1dcc0','#a8722a',2.4));g.appendChild(P('M306,44 Q318,100 330,44',null,'#a8722a',1.4));g.appendChild(P('M318,36 L318,10',null,'#2e7d32',3));g.appendChild(P('M308,92 L304,112 M318,96 L318,114 M328,92 L332,112',null,'#8a6a40',1.6))}},
    {n:'rozłogi (truskawka)',m:[70,226],d:'Cienkie, płożące się nadziemne ŁODYGI; w węzłach wyrastają korzenie i nowe rośliny — rozmnażanie wegetatywne.',draw:function(g){g.appendChild(P('M20,190 Q70,160 120,190 Q150,204 180,184',null,'#c46a6a',2.6));[[20,190],[120,190],[180,184]].forEach(function(p){g.appendChild(C(p[0],p[1],7,'#8fcf7a','#2e7d32',2));g.appendChild(P('M'+p[0]+','+(p[1]+6)+' L'+p[0]+','+(p[1]+18),null,'#8a6a40',1.8))})}},
    {n:'wąsy czepne (groch)',m:[190,226],d:'Przekształcone LIŚCIE (części liścia): cienkie, skręcone, owijają się wokół podpory i podtrzymują roślinę.',draw:function(g){g.appendChild(P('M230,214 L230,168',null,'#2e7d32',3));g.appendChild(P('M230,180 Q258,170 258,188 Q256,204 244,198 Q236,192 244,186',null,'#2e7d32',2));g.appendChild(P('M230,196 Q204,190 206,174 Q210,162 222,168',null,'#2e7d32',2))}},
    {n:'ciernie (berberys)',m:[320,226],d:'Przekształcone LIŚCIE (lub ich części): twarde, ostre, chronią przed zjadaniem. Uwaga: kolce róży to wytwory skórki, nie przekształcone liście.',draw:function(g){g.appendChild(P('M280,210 L350,210',null,'#6a4a28',5));[[292,210],[312,210],[334,210]].forEach(function(p){g.appendChild(P('M'+(p[0]-5)+',208 L'+p[0]+',178 L'+(p[0]+5)+',208Z',"#9a7a4a",'#6a4a28',1.8))})}}
  ]}}})}});

BIO.define('nasiono-ziarniak',{opis:'Budowa nasienia fasoli (łupina, dwa liścienie, zarodek: korzeń zarodkowy i pączek) i ziarniaka zboża (owocnia zrośnięta z łupiną, bielmo, tarczka, zarodek); tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:210,label:'Nasiono fasoli i ziarniak pszenicy',parts:[
    {n:'łupina nasienna fasoli',m:[40,196],z:-2,d:'Zewnętrzna osłona nasiona (powstaje z osłonek zalążka); chroni zarodek przed wysychaniem i uszkodzeniem.',draw:function(g){g.appendChild(P('M24,100 Q24,30 100,30 Q160,34 156,100 Q150,170 90,174 Q28,170 24,100Z',"#d9a3a3",'#8a3b3b',3))}},
    {n:'liścienie fasoli',m:[88,196],z:-1,d:'Dwie mięsiste części zarodka; zawierają materiał zapasowy (skrobię, białko), z którego zarodek korzysta przy kiełkowaniu. Fasola jest dwuliścienna.',draw:function(g){g.appendChild(P('M36,100 Q36,44 96,44 Q146,48 144,100 Q140,160 92,162 Q40,160 36,100Z',"#f3e6c4",'#a8893a',2));g.appendChild(P('M90,48 Q96,100 90,160',null,'#a8893a',1.6))}},
    {n:'korzeń zarodkowy',m:[136,196],z:1,d:'Najmłodszy korzeń zarodka; wyrasta jako pierwszy i wnika w podłoże.',draw:function(g){g.appendChild(P('M70,134 Q60,150 66,166',null,'#c08040',7))}},
    {n:'pączek (zaczątek pędu)',m:[10,150],z:1,d:'Zaczątek pędu z liśćmi zarodkowymi; po wykiełkowaniu daje część nadziemną rośliny.',draw:function(g){g.appendChild(P('M96,110 Q104,86 112,70',null,'#4caf50',7))}},
    {n:'owocnia i łupina ziarniaka',m:[250,196],z:-2,d:'U zbóż ziarniak to OWOC, w którym cienka owocnia jest zrośnięta z łupiną nasienną — dlatego nie da się ich rozdzielić (np. ziarno pszenicy).',draw:function(g){g.appendChild(P('M214,100 Q214,34 262,30 Q316,34 316,100 Q312,174 264,176 Q216,172 214,100Z',"#e2c07a",'#8a6a20',3))}},
    {n:'bielmo',m:[330,150],z:-1,d:'Duża część ziarniaka wypełniona skrobią (mąka) i białkiem; zapas dla zarodka. Zboża są jednoliścienne: jeden liścień przekształcony w tarczkę.',draw:function(g){g.appendChild(P('M224,100 Q224,44 264,40 Q308,44 308,100 Q304,166 264,168 Q226,164 224,100Z',"#fbf3dc",'#b09a50',1.8))}},
    {n:'zarodek zboża',m:[330,60],z:1,d:'Mały, u podstawy ziarniaka; ma korzeń zarodkowy, pączek i tarczkę (liścień), która przekazuje zapas z bielma.',draw:function(g){g.appendChild(E(240,150,12,16,'#a8d08a','#3f7a2a',2.2,20));g.appendChild(P('M236,162 L232,176',null,'#c08040',4))}}
  ]}}})}});

BIO.define('zboza-klosy',{opis:'Rozpoznawanie zbóż po kwiatostanie: pszenica (kłos zwarty, krótkie ości lub bez), żyto (kłos wąski z długimi ościami), jęczmień (kłos gęsty z bardzo długimi ościami), owies (wiecha); tryby poznaj / znajdź / podpisz',
mount:function(el){
  function klos(g,x,top,len,w,aw,col){g.appendChild(P('M'+x+','+(top+len)+' L'+x+','+(top+len+70),null,'#c4a85a',3));for(var i=0;i<len/12;i++){var y=top+i*12;g.appendChild(E(x-w/2,y+6,w/2,6,col,'#8a6a20',1.4,-30));g.appendChild(E(x+w/2,y+6,w/2,6,col,'#8a6a20',1.4,30));if(aw){g.appendChild(P('M'+(x-w)+','+(y+4)+' L'+(x-w-aw*.4)+','+(y-aw),null,'#8a6a20',1));g.appendChild(P('M'+(x+w)+','+(y+4)+' L'+(x+w+aw*.4)+','+(y-aw),null,'#8a6a20',1))}}}
  lab(el,{get:function(){return{w:360,h:230,label:'Kwiatostany zbóż',parts:[
    {n:'pszenica',m:[44,222],d:'Kłos zwarty, jajowaty lub podłużny; ości krótkie albo ich brak. Ziarniaki do mąki i pieczywa.',draw:function(g){klos(g,52,24,110,10,6,'#e8cf78')}},
    {n:'żyto',m:[134,222],d:'Kłos długi i wąski z długimi, cienkimi ościami; ziarno do chleba żytniego. Roślina o dużej tolerancji na ubogie gleby.',draw:function(g){klos(g,136,18,130,8,14,'#c9b46a')}},
    {n:'jęczmień',m:[224,222],d:'Kłos gęsty, kwadratowy w przekroju, z bardzo długimi, sztywnymi ościami; ziarno na kasze, pasze i słód do piwa.',draw:function(g){klos(g,224,24,100,10,22,'#d6c070')}},
    {n:'owies',m:[316,222],d:'Nie kłos, lecz WIECHA — luźny kwiatostan z zwisającymi kłoskami; ziarno na płatki i kasze.',draw:function(g){g.appendChild(P('M316,160 L316,60',null,'#c4a85a',3));[[316,70,290,90],[316,80,342,100],[316,100,290,124],[316,110,342,134]].forEach(function(p){g.appendChild(P('M'+p[0]+','+p[1]+' Q'+((p[0]+p[2])/2)+','+(p[1]-10)+' '+p[2]+','+p[3],null,'#c4a85a',1.6));g.appendChild(E(p[2],p[3]+8,5,10,'#e6dc9a','#8a6a20',1.4))})}}
  ]}}})}});

BIO.define('liscie-rodzaje',{opis:'Liść: blaszka i ogonek, liść pojedynczy i złożony (pierzasty, dłoniasty), użyłkowanie siatkowate, równoległe; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:230,label:'Budowa i rodzaje liści',parts:[
    {n:'blaszka liściowa',m:[46,98],d:'Płaska, zielona część liścia; tu zachodzi fotosynteza i wymiana gazowa (aparaty szparkowe).',draw:function(g){g.appendChild(P('M50,16 Q100,40 96,90 Q60,100 40,70 Q34,36 50,16Z',"#8fcf7a",'#2e7d32',2.4))}},
    {n:'ogonek liściowy',m:[46,126],d:'Cienki odcinek łączący blaszkę z łodygą; ustawia liść względem światła.',draw:function(g){g.appendChild(P('M44,74 Q40,100 46,118',null,'#2e7d32',4))}},
    {n:'nerwacja siatkowata',m:[100,126],d:'Sieć rozgałęziających się nerwów (wiązek przewodzących); typowa dla roślin dwuliściennych (dąb, lipa).',draw:function(g){g.appendChild(P('M50,24 L60,86',null,'#256a28',2));[[54,40,76,50],[56,54,38,62],[58,68,80,76],[58,78,40,84]].forEach(function(p){g.appendChild(P('M'+p[0]+','+p[1]+' L'+p[2]+','+p[3],null,'#256a28',1.4))})}},
    {n:'liść pojedynczy',m:[150,126],d:'Jedna blaszka na ogonku, pąk w kącie ogonka: np. dąb, lipa, brzoza.',draw:function(g){g.appendChild(P('M150,30 Q190,50 176,96 Q146,104 126,70 Q124,46 150,30Z',"#a8d08a",'#2e7d32',2.2));g.appendChild(P('M148,96 L150,120',null,'#2e7d32',3))}},
    {n:'liść złożony pierzasty',m:[236,126],d:'Wiele listków na jednej osi (osadce): np. jesion, robinia, róża. Pąk jest tylko w kącie całego liścia, nie każdego listka.',draw:function(g){g.appendChild(P('M236,28 L236,116',null,'#2e7d32',3));[[40,-1],[60,1],[76,-1],[92,1]].forEach(function(o){g.appendChild(E(236+o[1]*16,o[0]+8,12,6,'#a8d08a','#2e7d32',1.6,o[1]*-20))});g.appendChild(E(236,22,6,10,'#a8d08a','#2e7d32',1.6))}},
    {n:'liść złożony dłoniasty',m:[316,126],d:'Listki wychodzą z jednego punktu jak palce dłoni: np. kasztanowiec, łubin.',draw:function(g){[-60,-30,0,30,60].forEach(function(a){var r=a*Math.PI/180;g.appendChild(E(316+Math.sin(r)*28,70-Math.cos(r)*28,7,16,'#a8d08a','#2e7d32',1.6,a))});g.appendChild(P('M316,72 L316,118',null,'#2e7d32',3))}},
    {n:'nerwacja równoległa',m:[200,206],d:'Nerwy biegną równolegle wzdłuż blaszki; typowa dla jednoliściennych (trawy, zboża, tulipan).',draw:function(g){g.appendChild(P('M60,170 Q150,150 240,170 Q150,200 60,170Z',"#c9e6a8",'#2e7d32',2));[164,170,176].forEach(function(y){g.appendChild(P('M96,'+y+' L206,'+y,null,'#256a28',1.4))})}}
  ]}}})}});

BIO.define('owoce-rozsiewanie',{opis:'Rozsiewanie owoców i nasion: wiatr (skrzydlak klonu, puch mniszka), zwierzęta (owoc przyczepny łopianu, mięsisty owoc jarzębiny), woda, samorzutnie (strąk grochu, niecierpek); tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:210,label:'Sposoby rozsiewania owoców',parts:[
    {n:'skrzydlak klonu (wiatr)',m:[40,190],d:'Owoc z „skrzydłem”: wiruje podczas opadania i leci daleko od rośliny (anemochoria).',draw:function(g){g.appendChild(C(30,70,10,'#c9a06a','#6a4a20',2));g.appendChild(P('M36,64 Q90,24 100,48 Q80,70 38,76Z',"#e6d6a8",'#8a7a40',2))}},
    {n:'puch mniszka (wiatr)',m:[120,190],d:'Owoc z puchem (puchem kielichowym) unoszony przez wiatr; bardzo lekki (anemochoria).',draw:function(g){g.appendChild(P('M130,110 L130,70',null,'#8a7a40',2));g.appendChild(E(130,114,3,6,'#c9a06a','#6a4a20',1.4));for(var a=-70;a<=70;a+=20){var r=a*Math.PI/180;g.appendChild(P('M130,70 L'+(130+Math.sin(r)*28)+','+(70-Math.cos(r)*28),null,'#bbb',1.2))}}},
    {n:'owoc przyczepny (łopian)',m:[210,190],d:'Okrywa z haczykami przyczepia się do sierści zwierząt i ubrań (epizoochoria).',draw:function(g){g.appendChild(C(210,80,18,'#8a8a50','#4a4a20',2));for(var a=0;a<360;a+=30){var r=a*Math.PI/180;g.appendChild(P('M'+(210+Math.cos(r)*18)+','+(80+Math.sin(r)*18)+' l'+(Math.cos(r)*8)+','+(Math.sin(r)*8),null,'#4a4a20',1.6))}}},
    {n:'owoc mięsisty (jarzębina)',m:[286,190],d:'Barwny, soczysty owoc zwabia ptaki; nasiona przechodzą przez przewód pokarmowy i trafiają daleko (endozoochoria).',draw:function(g){[[276,70],[294,78],[284,90],[302,62]].forEach(function(p){g.appendChild(C(p[0],p[1],8,'#e55a4a','#8a2a20',1.8))});g.appendChild(P('M286,100 L286,130',null,'#6a4a28',3))}},
    {n:'strąk grochu (samorzutnie)',m:[336,190],d:'Wysychający strąk pęka i skręca się, wyrzucając nasiona (autochoria); podobnie niecierpek.',draw:function(g){g.appendChild(P('M308,100 Q328,64 348,100 Q328,124 308,100Z',"#9fd27a",'#3f7a2a',2));[[318,98],[328,94],[338,98]].forEach(function(p){g.appendChild(C(p[0],p[1],3,'#4f7a2a','none',0))})}}
  ]}}})}});

BIO.define('osmoza-komorka',{opis:'Osmoza: komórka roślinna i erytrocyt w wodzie destylowanej (roztwór hipotoniczny), w 0,9% NaCl (izotoniczny) i w stężonym roztworze soli (hipertoniczny); turgor, plazmoliza, hemoliza, pomarszczenie; przełączniki roztworu i komórki',
mount:function(el){
  var sol='hipo',cell='roslina';
  var svg=BIO.svg(360,220,'Komórka w roztworze o różnym stężeniu'),b1=H('div','bw-seg bv-tools'),b2=H('div','bw-seg bv-tools'),out=H('div','bv-info bw-out');
  svg.setAttribute('class','bw-svg');out.setAttribute('aria-live','polite');[b1,b2,svg,out].forEach(function(e){el.appendChild(e)});
  function seg(box,items,cur,cb){clr(box);items.forEach(function(it){var b=H('button','bv-btn'+(it[0]===cur?' on':''));b.type='button';b.setAttribute('aria-pressed',String(it[0]===cur));b.textContent=it[1];b.onclick=function(){cb(it[0])};box.appendChild(b)})}
  function draw(){clr(svg);var g=S('g',{});svg.appendChild(g);
    var bg={hipo:'#e3f2fb',izo:'#eef4f7',hiper:'#d6e4ee'}[sol];g.appendChild(R(4,4,352,212,10,bg,'#9fb8c8',1.5));
    var cx=180,cy=112,txt,inw=sol==='hipo',none=sol==='izo';
    if(cell==='roslina'){
      g.appendChild(R(120,52,120,120,10,'none','#4f7a2a',5));
      var k={hipo:50,izo:44,hiper:30}[sol];
      g.appendChild(R(cx-k,cy-k,2*k,2*k,10,'#d7efc4','#3f7a2a',2));
      g.appendChild(R(cx-k*0.62,cy-k*0.62,k*1.24,k*1.24,8,'#bfe0f5','#2a7fb0',1.6));
      g.appendChild(C(cx+k*0.7,cy-k*0.7,4,'#4caf50','none',0));
      txt={hipo:'<b>Roztwór hipotoniczny (np. woda destylowana)</b><span>Stężenie substancji w roztworze jest mniejsze niż w komórce, więc woda wnika do komórki (osmoza). Komórka roślinna pęcznieje, wakuola rośnie i protoplast przyciska się do ściany: <i>turgor</i>. Ściana zapobiega pęknięciu.</span>',izo:'<b>Roztwór izotoniczny</b><span>Stężenia są zbliżone, więc woda wnika i wychodzi w podobnym tempie. Objętość komórki nie zmienia się istotnie.</span>',hiper:'<b>Roztwór hipertoniczny (stężony roztwór soli lub cukru)</b><span>Stężenie w roztworze jest większe niż w komórce, więc woda wychodzi z komórki. Protoplast kurczy się i odstaje od ściany: <i>plazmoliza</i>. Roślina więdnie. W czystej wodzie plazmoliza jest odwracalna (deplazmoliza).</span>'}[sol]
    }else{
      var r={hipo:52,izo:42,hiper:34}[sol];
      if(sol==='hiper'){var pts=[];for(var i=0;i<16;i++){var a=i*Math.PI/8,rr=i%2?r:r+10;pts.push((cx+Math.cos(a)*rr).toFixed(1)+','+(cy+Math.sin(a)*rr).toFixed(1))}g.appendChild(PL(pts.join(' '),'#b23b3b',2.2));g.lastChild.setAttribute('fill','#e57373')}
      else{g.appendChild(C(cx,cy,r,'#e57373','#b23b3b',2.4));if(sol==='izo'){g.appendChild(E(cx,cy,r*0.5,r*0.28,'#f4a6a6','none',0))}else{g.appendChild(P('M'+(cx+r*0.6)+','+(cy-r*0.8)+' l10,-10 M'+(cx+r*0.85)+','+(cy-r*0.4)+' l12,-4',null,'#b23b3b',2));g.appendChild(P('M'+(cx-r*0.9)+','+(cy+r*0.3)+' l-12,4',null,'#b23b3b',2))}}
      txt={hipo:'<b>Roztwór hipotoniczny</b><span>Woda wnika do erytrocytu, bo w komórce jest więcej substancji rozpuszczonych. Erytrocyt nie ma ściany komórkowej, więc pęcznieje i może pęknąć: <i>hemoliza</i>.</span>',izo:'<b>Roztwór izotoniczny (0,9% NaCl — „sól fizjologiczna”)</b><span>Stężenie jak w osoczu: erytrocyt zachowuje kształt dwuwklęsły. Dlatego krople dożylne przygotowuje się na soli fizjologicznej.</span>',hiper:'<b>Roztwór hipertoniczny</b><span>Woda wychodzi z erytrocytu; komórka się kurczy i marszczy (<i>krenacja</i>).</span>'}[sol]
    }
    var ar=sol==='hipo'?1:sol==='hiper'?-1:0;
    if(ar){[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(function(o){var xo=cx+o[0]*110,yo=cy+o[1]*62,xi=cx+o[0]*76,yi=cy+o[1]*42;var a=ar>0?[xo,yo,xi,yi]:[xi,yi,xo,yo];g.appendChild(L(a[0],a[1],a[2],a[3],'#2a7fb0',2.6));var dx=a[2]-a[0],dy=a[3]-a[1],l=Math.sqrt(dx*dx+dy*dy);dx/=l;dy/=l;g.appendChild(P('M'+a[2]+','+a[3]+' l'+(-dx*8+dy*4)+','+(-dy*8-dx*4)+' M'+a[2]+','+a[3]+' l'+(-dx*8-dy*4)+','+(-dy*8+dx*4),null,'#2a7fb0',2.6))})}
    g.appendChild(BIO.T(180,206,{hipo:'woda wnika do komórki',izo:'bez wypadkowego przepływu wody',hiper:'woda wychodzi z komórki'}[sol],{s:11,w:700,f:'#2a6f97'}));
    out.innerHTML=txt}
  function ui(){seg(b1,[['hipo','hipotoniczny'],['izo','izotoniczny'],['hiper','hipertoniczny']],sol,function(v){sol=v;ui()});seg(b2,[['roslina','komórka roślinna'],['krwinka','erytrocyt']],cell,function(v){cell=v;ui()});draw()}
  ui()}});

BIO.define('mutacje-punktowe',{opis:'Mutacje punktowe na krótkim mRNA: cicha, zmiany sensu, nonsensowna, wstawienie i delecja z przesunięciem ramki odczytu; porównanie łańcucha aminokwasów przed i po zmianie',
mount:function(el){
  var CT='UUU F UUC F UUA L UUG L CUU L CUC L CUA L CUG L AUU I AUC I AUA I AUG M GUU V GUC V GUA V GUG V UCU S UCC S UCA S UCG S CCU P CCC P CCA P CCG P ACU T ACC T ACA T ACG T GCU A GCC A GCA A GCG A UAU Y UAC Y UAA * UAG * CAU H CAC H CAA Q CAG Q AAU N AAC N AAA K AAG K GAU D GAC D GAA E GAG E UGU C UGC C UGA * UGG W CGU R CGC R CGA R CGG R AGU S AGC S AGA R AGG R GGU G GGC G GGA G GGG G'.split(' '),T={};for(var i=0;i<CT.length;i+=2)T[CT[i]]=CT[i+1];
  var NM={F:'Phe',L:'Leu',I:'Ile',M:'Met',V:'Val',S:'Ser',P:'Pro',T:'Thr',A:'Ala',Y:'Tyr',H:'His',Q:'Gln',N:'Asn',K:'Lys',D:'Asp',E:'Glu',C:'Cys',W:'Trp',R:'Arg',G:'Gly','*':'STOP'};
  var ORG='AUGGAACUCAAAUGA',types={
    cicha:{n:'substytucja cicha',s:ORG.slice(0,5)+'G'+ORG.slice(6),d:'Zmiana jednej zasady (GAA → GAG) nie zmienia aminokwasu (nadal Glu), bo kod genetyczny jest zdegenerowany. Białko bez zmian.'},
    sens:{n:'substytucja zmiany sensu',s:ORG.slice(0,4)+'U'+ORG.slice(5),d:'GAA → GUA: zamiast Glu pojawia się Val. Jeden aminokwas się zmienia; skutek zależy od jego roli w białku (np. anemia sierpowata).'},
    nonsens:{n:'substytucja nonsensowna',s:ORG.slice(0,3)+'U'+ORG.slice(4),d:'GAA → UAA: powstaje kodon STOP w środku genu, więc synteza białka kończy się za wcześnie (białko skrócone).'},
    ins:{n:'insercja (wstawienie nukleotydu)',s:ORG.slice(0,3)+'A'+ORG.slice(3),d:'Dodanie jednej zasady przesuwa ramkę odczytu: wszystkie kodony za miejscem mutacji są odczytane inaczej (mutacja zmiany ramki).'},
    del:{n:'delecja (utrata nukleotydu)',s:ORG.slice(0,3)+ORG.slice(4),d:'Utrata jednej zasady także przesuwa ramkę odczytu i zwykle zmienia całe białko za miejscem mutacji.'}
  },cur='cicha';
  var bar=H('div','bw-seg bv-tools'),box=H('div','bw-mut'),out=H('div','bv-info bw-out');box.style.cssText='font:600 14px/1.9 ui-monospace,Menlo,monospace;overflow-x:auto';out.setAttribute('aria-live','polite');[bar,box,out].forEach(function(e){el.appendChild(e)});
  function chips(seq,ref){var h='',aa='',stop=false;for(var i=0;i+3<=seq.length;i+=3){var c=seq.substr(i,3),a=T[c]||'?',rc=ref&&ref.substr(i,3),ch=ref&&rc!==c;h+='<span style="padding:1px 6px;margin:1px;border-radius:6px;border:1px solid '+(ch?'#c62828':'#9fb0bd')+';background:'+(ch?'#ffe3e3':'transparent')+'">'+c+'</span>';aa+='<span style="display:inline-block;min-width:50px;text-align:center;margin:1px;padding:1px 4px;border-radius:6px;background:'+(a==='*'?'#ffd0d0':'#e6f1ea')+'">'+NM[a]+'</span>';if(a==='*')break}
    var rest=seq.length%3?' <span style="color:#888">+'+(seq.length%3)+' nt</span>':'';return '<div>'+h+rest+'</div><div style="font-size:12px;font-weight:500">'+aa+'</div>'}
  function draw(){var t=types[cur];box.innerHTML='<div style="font:700 12px system-ui;color:#51606e">mRNA przed zmianą</div>'+chips(ORG)+'<div style="font:700 12px system-ui;color:#c62828;margin-top:6px">po mutacji: '+t.n+'</div>'+chips(t.s,ORG);out.innerHTML='<b>'+t.n+'</b><span>'+t.d+'</span>';clr(bar);Object.keys(types).forEach(function(k){var b=H('button','bv-btn'+(k===cur?' on':''));b.type='button';b.setAttribute('aria-pressed',String(k===cur));b.textContent=types[k].n;b.onclick=function(){cur=k;draw()};bar.appendChild(b)})}
  draw()}});

var OD=0;
BIO.define('wentylacja',{opis:'Mechanika oddychania: przepona, żebra, objętość klatki i płuc; animacja wdech ↔ wydech tam i z powrotem (autostart w widoku), suwak do ręcznego sterowania, opis fazy',
mount:function(el){
  var t=0,dir=1,paused=false,vis=false,last=0,man=false,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var svg=BIO.svg(360,290,'Przekrój klatki piersiowej: przepona, płuca, żebra'),sl=H('input'),bar=H('div','bw-seg bv-tools'),pb=H('button','bv-btn'),out=H('div','bv-info bw-out');
  svg.setAttribute('class','bw-svg');sl.type='range';sl.min=0;sl.max=100;sl.value=0;sl.style.width='100%';sl.setAttribute('aria-label','Faza oddechu: wydech do wdechu');pb.type='button';out.setAttribute('aria-live','polite');
  [svg,sl,bar,out].forEach(function(e){el.appendChild(e)});bar.appendChild(pb);
  var cage=S('g',{}),ribs=P('M180,34 C80,34 52,120 60,190 L300,190 C308,120 280,34 180,34Z','none','#b9b0a4',3,{'stroke-dasharray':'8 5'}),
   lL=E(128,122,50,76,'#f9c9c9','#b23b3b',2),lR=E(232,122,50,76,'#f9c9c9','#b23b3b',2),
   dia=P('M56,224 Q180,140 304,224',null,'#c0602c',8),abd=R(56,226,248,46,6,'#f3ece2','#c9bfae',1.5),
   tr=R(172,4,16,56,3,'#cfd8dc','#6a7b86',1.5),
   ar=P('M180,0 L180,24 M172,16 L180,26 L188,16',null,'#2a6f97',3),st=BIO.T(180,284,'',{s:12,w:800});
  cage.appendChild(ribs);cage.appendChild(lL);cage.appendChild(lR);
  [abd,tr,cage,P('M180,58 L128,86 M180,58 L232,86',null,'#6a7b86',3),dia,ar,st,BIO.T(180,254,'jama brzuszna',{s:9.5,w:500,f:'var(--viz-mut,#5d6b7a)'}),BIO.T(180,126,'płuca',{s:11,w:700,f:'#7a2b2b'}),BIO.T(352,124,'żebra',{s:9.5,w:500,a:'end',f:'var(--viz-mut,#5d6b7a)'}),BIO.T(60,206,'przepona',{s:10,w:700,a:'start',f:'#8a3f12'})].forEach(function(e){svg.appendChild(e)});
  function draw(){var k=t;cage.setAttribute('transform','translate(180 120) scale('+(1+0.07*k)+' '+(1+0.05*k)+') translate(-180 -120)');
    dia.setAttribute('d','M56,224 Q180,'+(138+56*k).toFixed(1)+' 304,224');
    ar.setAttribute('transform',dir>0?'translate(0 0)':'translate(0 56) scale(1 -1) translate(0 -2)');ar.setAttribute('stroke',dir>0?'#2a6f97':'#c0602c');ar.style.opacity=man?0.2:1;
    var ins=dir>0;st.textContent=ins?'WDECH':'WYDECH';st.setAttribute('fill',ins?'#2a6f97':'#c0602c');
    out.innerHTML=ins?'<b>Wdech (czynny)</b><span>Mięśnie międzyżebrowe zewnętrzne unoszą żebra, a przepona kurczy się i spłaszcza (obniża się). Objętość klatki rośnie, ciśnienie w płucach spada poniżej atmosferycznego i powietrze wpływa.</span>':'<b>Wydech (spokojny — bierny)</b><span>Mięśnie rozkurczają się: przepona wraca do kształtu kopuły, żebra opadają. Objętość klatki maleje, ciśnienie rośnie i powietrze wypływa. Wydech wymuszony angażuje mięśnie międzyżebrowe wewnętrzne i mięśnie brzucha.</span>'}
  function lab2(){pb.textContent=paused?'▶ wznów oddychanie':'❚❚ pauza';}
  pb.onclick=function(){paused=!paused;man=false;lab2()};
  sl.oninput=function(){paused=true;man=true;var nv=sl.value/100;dir=nv>=t?1:-1;if(nv===t)dir=dir;t=nv;lab2();draw()};
  function loop(ts){if(!document.body.contains(el))return;if(vis&&!paused&&!reduce){var dt=(ts-(last||ts))/1000;t+=dir*dt/2.6;if(t>=1){t=1;dir=-1}if(t<=0){t=0;dir=1}sl.value=Math.round(t*100);draw()}last=ts;requestAnimationFrame(loop)}
  lab2();draw();
  if('IntersectionObserver'in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting},{threshold:0.4}).observe(el);else vis=true;
  if(reduce){paused=true;lab2()}requestAnimationFrame(loop)}});

/* =====================================================================
   12. FOTOSYNTEZA ↔ ODDYCHANIE (krążenie materii) i PODZIAŁ KOMÓRKI (mitoza / mejoza)
   ===================================================================== */
var FUID=0;
BIO.define('fotosynteza-oddychanie-krazenie',{opis:'Chloroplast i mitochondrium: krążenie materii (glukoza, O₂, CO₂, H₂O) i przepływ energii (światło → ATP/ciepło); kropki płyną w pętli; tryby fotosynteza / oddychanie / oba + tabela porównawcza',
mount:function(el,o){
  var mode=['fot','odd','oba'].indexOf(o.tryb)>=0?o.tryb:'oba',vis=false,last=0,paused=false,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bar=H('div','bw-seg bv-tools'),svg=BIO.svg(360,290,'Fotosynteza w chloroplaście i oddychanie w mitochondrium'),out=H('div','bv-info bw-out'),tw=H('div','bw-tbl'),pb=H('button','bv-btn');
  svg.setAttribute('class','bw-svg');pb.type='button';[bar,svg,out,tw].forEach(function(e){el.appendChild(e)});bar.appendChild(pb);
  /* organelle */
  svg.appendChild(E(88,150,64,40,'var(--chloro-bg,#e3f4e3)','var(--chloro,#4caf50)',3));[-30,-10,10,30].forEach(function(dx){svg.appendChild(R(88+dx-7,134,14,30,3,'#8bc98f','#2e7d32',1.2))});
  svg.appendChild(BIO.T(88,194,'chloroplast',{s:11,w:700}));svg.appendChild(BIO.T(88,206,'fotosynteza',{s:9.5,w:500,f:'var(--viz-mut,#5d6b7a)'}));
  svg.appendChild(E(272,150,58,36,'var(--mito-bg,#fde9dc)','var(--mito,#e58b5a)',3));svg.appendChild(P('M232,150 q9,-18 18,0 t18,0 t18,0 t18,0',null,'var(--mito,#e58b5a)',2));
  svg.appendChild(BIO.T(272,194,'mitochondrium',{s:11,w:700}));svg.appendChild(BIO.T(272,206,'oddychanie tlenowe',{s:9.5,w:500,f:'var(--viz-mut,#5d6b7a)'}));
  svg.appendChild(C(26,32,12,'#ffe082','#f9a825',2));[0,1,2,3,4,5,6,7].forEach(function(i){var a=i*Math.PI/4;svg.appendChild(L(26+16*Math.cos(a),32+16*Math.sin(a),26+22*Math.cos(a),32+22*Math.sin(a),'#f9a825',2))});
  var PS=[ /* [path, kolor, etykieta, [tryby podświetlone], pozycja etykiety] */
   ['M40,50 L72,114','#f9a825','światło',{fot:1,oba:1},[10,82]],
   ['M30,262 Q44,200 66,176','#6a7b86','CO₂ + H₂O',{fot:1,oba:1},[2,270]],
   ['M132,128 Q180,62 232,128','#e07b2a','glukoza',{fot:1,odd:1,oba:1},[150,76]],
   ['M132,142 Q180,90 232,142','#4aa3c9','O₂',{fot:1,odd:1,oba:1},[172,134]],
   ['M232,176 Q180,252 132,176','#6a7b86','CO₂ + H₂O',{odd:1,oba:1},[160,244]],
   ['M300,176 L336,232','#43a047','ATP (energia)',{odd:1,oba:1},[262,262]]];
  var paths=[],dots=[];
  PS.forEach(function(p,i){var pa=P(p[0],'none',p[1],2.4,{'stroke-dasharray':'3 5'});svg.appendChild(pa);paths[i]=pa;
    svg.appendChild(BIO.T(p[4][0],p[4][1],p[2],{s:9.5,w:700,a:'start',f:p[1]==='#f9a825'?'#b07a00':p[1]}));
    var ds=[];for(var j=0;j<4;j++){var d=C(0,0,3.8,p[1],'#fff',1);svg.appendChild(d);ds.push(d)}dots[i]=ds});
  var TXT={fot:'<b>Fotosynteza</b><span>6CO₂ + 6H₂O + energia światła → C₆H₁₂O₆ + 6O₂. Zachodzi w chloroplastach (chlorofil), tylko w zielonych komórkach roślin, glonów i sinic, w świetle. Energia świetlna zamienia się w energię wiązań chemicznych glukozy.</span>',
   odd:'<b>Oddychanie komórkowe (tlenowe)</b><span>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia (ATP + ciepło). Zachodzi w mitochondriach, we WSZYSTKICH komórkach eukariotycznych, dzień i noc. Bez tlenu: fermentacja w cytoplazmie, znacznie mniej ATP.</span>',
   oba:'<b>Krążenie materii, przepływ energii</b><span>Produkty jednego procesu są substratami drugiego (glukoza, O₂ ↔ CO₂, H₂O) — materia krąży. Energia nie krąży: światło wchodzi, a ATP i ciepło wychodzą. Roślina robi oba procesy; zwierzę tylko oddychanie.</span>'};
  function setMode(m){mode=m;clr(bar);[['fot','fotosynteza'],['odd','oddychanie'],['oba','oba procesy']].forEach(function(f){var b=H('button','bv-btn'+(f[0]===mode?' on':''));b.type='button';b.textContent=f[1];b.onclick=function(){setMode(f[0])};bar.appendChild(b)});bar.appendChild(pb);
    PS.forEach(function(p,i){var on=!!p[3][mode];paths[i].style.opacity=on?1:0.12;dots[i].forEach(function(d){d.style.opacity=on?1:0})});out.innerHTML=TXT[mode]}
  function lab3(){pb.textContent=paused?'▶ wznów':'❚❚ pauza'}pb.onclick=function(){paused=!paused;lab3()};
  var t=0;function frame(){PS.forEach(function(p,i){var L0=paths[i].getTotalLength();dots[i].forEach(function(d,j){var u=((t*0.25+j/4)%1),q=paths[i].getPointAtLength(u*L0);d.setAttribute('cx',q.x);d.setAttribute('cy',q.y)})})}
  function loop(ts){if(!document.body.contains(el))return;if(vis&&!paused&&!reduce){t+=(ts-(last||ts))/1000;frame()}last=ts;requestAnimationFrame(loop)}
  var h=['Cecha','Fotosynteza','Oddychanie komórkowe'],rows=[['Gdzie','chloroplasty (zielone komórki)','mitochondria (cytoplazma — glikoliza); wszystkie komórki eukariotyczne'],['Kiedy','tylko w świetle','stale, dzień i noc'],['Substraty','CO₂, H₂O, światło','glukoza, O₂'],['Produkty','glukoza, O₂','CO₂, H₂O, ATP, ciepło'],['Energia','pochłaniana (światło → wiązania)','uwalniana (wiązania → ATP)'],['Typ przemiany','synteza (anabolizm)','rozkład (katabolizm)']];
  var t2=H('table'),hr=H('tr');h.forEach(function(x){hr.appendChild(H('th',null,x))});t2.appendChild(hr);rows.forEach(function(r){var tr=H('tr');r.forEach(function(x,i){tr.appendChild(H('td',null,i?x:'<b>'+x+'</b>'))});t2.appendChild(tr)});tw.appendChild(t2);
  setMode(mode);lab3();frame();
  if('IntersectionObserver'in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting},{threshold:0.4}).observe(el);else vis=true;
  if(reduce){paused=true;lab3()}requestAnimationFrame(loop)}});

/* ---- podział komórki: mitoza i mejoza (2n = 4), autostart „do przodu i od początku” ---- */
var CA='#2a6fb0',CB='#4fb3c9',CC='#c0392b',CD='#e8833a';
function chr(g,x,y,len,col,type,rot,half){ /* type: X (2 chromatydy) | I (1) ; half: kolor drugiej chromatydy (crossing-over) */
  var gg=S('g',{transform:'rotate('+(rot||0)+' '+x+' '+y+')'});
  if(type==='X'){gg.appendChild(L(x-5,y-len/2,x+5,y+len/2,col,6));gg.appendChild(L(x+5,y-len/2,x-5,y+len/2,half||col,6))}
  else gg.appendChild(L(x,y-len/2,x,y+len/2,col,6));
  gg.appendChild(C(x,y,3,'#fff',col,1.5));g.appendChild(gg)}
function cellO(g,x,y,rx,ry){g.appendChild(E(x,y,rx,ry,'var(--cell-cyto,#f4f9ef)','var(--cell-mem,#5c8a3a)',3))}
function spindle(g,pts){g.appendChild(C(26,130,4,'#9aa8b4','none',0));pts.forEach(function(p){g.appendChild(L(26,130,p[0],p[1],'#c7d0d6',1));g.appendChild(L(334,130,p[0],p[1],'#c7d0d6',1))})}
var DZ={
 mit:{t:'Mitoza',st:[
  ['interfaza (replikacja DNA)','2n = 4','Przed podziałem DNA się podwaja. Chromatyna jest rozluźniona, chromosomów jeszcze nie widać. Każdy chromosom będzie miał dwie identyczne chromatydy.',function(g){cellO(g,180,130,150,100);g.appendChild(C(180,130,52,'var(--nucleus-bg,#f3ecfb)','var(--nucleus,#9b6bd1)',2.5));g.appendChild(BIO.g.squiggle(180,130,52,1))}],
  ['profaza','2n = 4 (każdy chromosom z 2 chromatyd)','Chromatyna kondensuje do widocznych chromosomów (każdy = 2 chromatydy połączone w centromerze). Zanika otoczka jądrowa, tworzy się wrzeciono podziałowe.',function(g){cellO(g,180,130,150,100);[[130,100,44,CA,20],[225,105,44,CB,-30],[145,160,30,CC,-15],[215,165,30,CD,40]].forEach(function(c){chr(g,c[0],c[1],c[2],c[3],'X',c[4])})}],
  ['metafaza','2n = 4','Chromosomy ustawiają się w płaszczyźnie równikowej, włókna wrzeciona łączą się z centromerami. To najlepszy moment do policzenia chromosomów (kariotyp).',function(g){cellO(g,180,130,150,100);spindle(g,[[180,80],[180,108],[180,150],[180,178]]);[[180,80,44,CA],[180,108,44,CB],[180,150,30,CC],[180,178,30,CD]].forEach(function(c){chr(g,c[0],c[1],c[2],c[3],'X',90)})}],
  ['anafaza','2n = 4 + 4 (8 chromosomów)','Chromatydy rozdzielają się i wędrują do biegunów — teraz każda to osobny chromosom. Przy każdym biegunie jest pełny komplet (4).',function(g){cellO(g,180,130,150,100);spindle(g,[[110,80],[110,108],[110,150],[110,178],[250,80],[250,108],[250,150],[250,178]]);[80,108,150,178].forEach(function(y,i){var c=[CA,CB,CC,CD][i],l=i<2?44:30;chr(g,110,y,l,c,'I',90);chr(g,250,y,l,c,'I',90)})}],
  ['telofaza i cytokineza','2 komórki 2n = 4','Wokół chromosomów powstają jądra, cytoplazma się dzieli. Powstają DWIE komórki identyczne z komórką wyjściową (wzrost, regeneracja, rozmnażanie bezpłciowe).',function(g){[[105,130],[255,130]].forEach(function(p){cellO(g,p[0],p[1],78,88);g.appendChild(C(p[0],p[1],46,'var(--nucleus-bg,#f3ecfb)','var(--nucleus,#9b6bd1)',2));[[-14,-18,CA,36],[12,-14,CB,36],[-14,16,CC,26],[12,18,CD,26]].forEach(function(c){chr(g,p[0]+c[0],p[1]+c[1],c[3],c[2],'I',0)})})}]]},
 mej:{t:'Mejoza',st:[
  ['interfaza (replikacja DNA)','2n = 4','Jak w mitozie: DNA się podwaja, chromosomy mają po 2 chromatydy. Mejoza zachodzi tylko w komórkach linii płciowej i prowadzi do gamet.',function(g){cellO(g,180,130,150,100);g.appendChild(C(180,130,52,'var(--nucleus-bg,#f3ecfb)','var(--nucleus,#9b6bd1)',2.5));g.appendChild(BIO.g.squiggle(180,130,52,2))}],
  ['profaza I (crossing-over)','2n = 4','Chromosomy homologiczne (od matki i od ojca) łączą się w pary — biwalenty. Chromatydy wymieniają fragmenty (crossing-over), co tworzy nowe kombinacje alleli.',function(g){cellO(g,180,130,150,100);chr(g,130,100,44,CA,'X',0,CB);chr(g,148,100,44,CB,'X',0,CA);chr(g,205,158,30,CC,'X',0,CD);chr(g,223,158,30,CD,'X',0,CC)}],
  ['metafaza I','2n = 4','Pary homologów ustawiają się na równiku — każdy homolog z jednej strony. Ich ułożenie jest losowe (to druga przyczyna zmienności).',function(g){cellO(g,180,130,150,100);spindle(g,[[180,95],[180,165]]);chr(g,166,95,44,CA,'X',90,CB);chr(g,194,95,44,CB,'X',90,CA);chr(g,166,165,30,CC,'X',90,CD);chr(g,194,165,30,CD,'X',90,CC)}],
  ['anafaza I','2n = 4 (rozdzielają się homologi)','Rozdzielają się CAŁE chromosomy homologiczne (nie chromatydy) i wędrują do biegunów. Liczba chromosomów przy biegunie spada o połowę.',function(g){cellO(g,180,130,150,100);spindle(g,[[110,95],[110,165],[250,95],[250,165]]);chr(g,110,95,44,CA,'X',90,CB);chr(g,250,95,44,CB,'X',90,CA);chr(g,110,165,30,CC,'X',90,CD);chr(g,250,165,30,CD,'X',90,CC)}],
  ['koniec I','2 komórki n = 2 (X)','Powstają dwie komórki haploidalne (n = 2), ale chromosomy nadal mają po 2 chromatydy.',function(g){[[105,130],[255,130]].forEach(function(p,k){cellO(g,p[0],p[1],78,88);chr(g,p[0],p[1]-22,44,k?CB:CA,'X',0,k?CA:CB);chr(g,p[0],p[1]+26,30,k?CD:CC,'X',0,k?CC:CD)})}],
  ['anafaza II','n = 2 → rozdzielają się chromatydy','W obu komórkach rozdzielają się chromatydy (jak w mitozie) i wędrują do biegunów.',function(g){[[105,130],[255,130]].forEach(function(p,k){cellO(g,p[0],p[1],78,88);[[-16,-30,44],[-16,30,30],[16,-30,44],[16,30,30]].forEach(function(c,j){chr(g,p[0]+c[0],p[1]+c[1],c[2],(j%2?(k?CD:CC):(k?CB:CA)),'I',0)})})}],
  ['koniec II — gamety','4 komórki n = 2','Powstają CZTERY komórki haploidalne (n = 2), różniące się od siebie i od komórki wyjściowej. To gamety (u zwierząt plemniki/komórki jajowe) lub zarodniki (u roślin).',function(g){[[105,75],[255,75],[105,190],[255,190]].forEach(function(p,k){cellO(g,p[0],p[1],64,58);chr(g,p[0]-10,p[1],30,[CA,CB,CA,CB][k],'I',0);chr(g,p[0]+10,p[1],22,[CC,CD,CD,CC][k],'I',0)})}]]}
};
BIO.define('podzial-komorki-skrot',{opis:'Mitoza i mejoza (2n = 4) etap po etapie: chromosomy, chromatydy, liczba komórek; autostart w widoku (do przodu i od początku), strzałki ◀ ▶, przełącznik mitoza/mejoza; opcja typ="mit|mej"',
mount:function(el,o){
  var k=DZ[o.typ]?o.typ:'mit',i=0,paused=false,vis=false,last=0,acc=0,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tb=H('div','bw-seg bv-tools'),holder=H('div'),nb=H('div','bw-seg bv-tools'),out=H('div','bv-info bw-out');[tb,holder,nb,out].forEach(function(e){el.appendChild(e)});
  function draw(){var d=DZ[k],st=d.st[i];clr(holder);var svg=BIO.svg(360,260,d.t+': '+st[0]);svg.setAttribute('class','bw-svg');holder.appendChild(svg);var g=S('g',{});st[3](g);svg.appendChild(g);
    svg.appendChild(BIO.T(180,14,st[0]+'  ·  '+st[1],{s:11,w:700}));
    clr(tb);[['mit','mitoza'],['mej','mejoza']].forEach(function(f){var b=H('button','bv-btn'+(f[0]===k?' on':''));b.type='button';b.textContent=f[1];b.onclick=function(){k=f[0];i=0;acc=0;draw()};tb.appendChild(b)});
    clr(nb);var pv=H('button','bv-btn');pv.type='button';pv.textContent='◀';pv.setAttribute('aria-label','poprzedni etap');pv.onclick=function(){paused=true;i=(i+d.st.length-1)%d.st.length;draw()};
    var nx=H('button','bv-btn');nx.type='button';nx.textContent='▶';nx.setAttribute('aria-label','następny etap');nx.onclick=function(){paused=true;i=(i+1)%d.st.length;draw()};
    var pp=H('button','bv-btn');pp.type='button';pp.textContent=paused?'▶ wznów animację':'❚❚ pauza';pp.onclick=function(){paused=!paused;draw()};[pv,nx,pp].forEach(function(b){nb.appendChild(b)});
    var dots=d.st.map(function(_,j){return j===i?'●':'○'}).join(' ');
    out.innerHTML='<b>'+(i+1)+'/'+d.st.length+'. '+st[0]+' <span style="font-weight:500;opacity:.7">'+dots+'</span></b><span>'+st[2]+'</span>'}
  function loop(ts){if(!document.body.contains(el))return;if(vis&&!paused&&!reduce){acc+=(ts-(last||ts));if(acc>3200){acc=0;i=(i+1)%DZ[k].st.length;draw()}}last=ts;requestAnimationFrame(loop)}
  draw();
  if('IntersectionObserver'in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting},{threshold:0.4}).observe(el);else vis=true;
  if(reduce)paused=true;requestAnimationFrame(loop)}});

/* =====================================================================
   13. PRZEWÓD POKARMOWY (lab) i NACZYNIA KRWIONOŚNE (lab z wariantami)
   ===================================================================== */
BIO.define('przewod-pokarmowy',{opis:'Układ pokarmowy człowieka: jama ustna, ślinianki, przełyk, żołądek, wątroba, pęcherzyk żółciowy, trzustka, jelita, wyrostek, odbytnica — enzymy i funkcje; tryby poznaj / znajdź / podpisz',
mount:function(el){
  lab(el,{get:function(){return{w:360,h:300,label:'Układ pokarmowy człowieka',parts:[
    {n:'jama ustna',m:[148,18],d:'Mechaniczne rozdrabnianie pokarmu (zęby, język) i początek trawienia chemicznego: amylaza ślinowa rozkłada skrobię do maltozy.',draw:function(g){g.appendChild(E(180,20,26,13,'#f4b6b6','#b23b3b',2));g.appendChild(L(160,20,200,20,'#fff',2))}},
    {n:'ślinianki',m:[236,40],d:'Wydzielają ślinę: woda, śluz (mucyna), lizozym i amylaza. Ślina zwilża pokarm i zaczyna trawienie skrobi.',draw:function(g){g.appendChild(C(150,40,8,'#ffe0b2','#e65100',1.8));g.appendChild(C(210,40,8,'#ffe0b2','#e65100',1.8))}},
    {n:'przełyk',m:[160,76],d:'Mięsista rura; fale skurczów (perystaltyka) przesuwają pokarm do żołądka. Nie zachodzi tu trawienie.',draw:function(g){g.appendChild(P('M180,34 L180,100',null,'#e08a8a',9))}},
    {n:'żołądek',m:[236,116],d:'Kwas solny (pH ≈ 2) zabija drobnoustroje i aktywuje pepsynę, która rozpoczyna trawienie białek. Śluz chroni ścianę przed samostrawieniem.',draw:function(g){g.appendChild(E(204,122,40,24,'#f4a7a7','#b23b3b',2,28))}},
    {n:'wątroba',m:[110,100],z:-1,d:'Największy gruczoł. Wytwarza żółć (nie jest enzymem — emulguje tłuszcze), magazynuje glikogen, neutralizuje trucizny, produkuje białka krwi.',draw:function(g){g.appendChild(P('M80,100 Q100,76 168,96 L168,138 Q120,150 88,132Z','#b5651d','#6d3c0e',2))}},
    {n:'pęcherzyk żółciowy',m:[150,154],d:'Magazynuje i zagęszcza żółć; podczas posiłku wydziela ją do dwunastnicy.',draw:function(g){g.appendChild(E(150,140,7,11,'#8bc34a','#33691e',1.8))}},
    {n:'trzustka',m:[240,156],d:'Gruczoł wydzielający sok trzustkowy z enzymami (amylaza, lipaza, trypsyna) do dwunastnicy; produkuje też insulinę i glukagon.',draw:function(g){g.appendChild(E(190,152,44,8,'#ffe082','#f9a825',1.8,-6))}},
    {n:'jelito cienkie',m:[180,262],d:'Najdłuższy odcinek (kilka metrów). Tu kończy się trawienie i zachodzi wchłanianie produktów do krwi i limfy — dzięki kosmkom i mikrokosmkom.',draw:function(g){g.appendChild(P('M130,180 L230,180 L230,194 L130,194 L130,208 L230,208 L230,222 L130,222 L130,236 L230,236',null,'#f48fb1',9))}},
    {n:'jelito grube',m:[268,196],d:'Wchłania wodę i sole mineralne; bakterie jelitowe wytwarzają m.in. witaminę K. Tworzy się tu kał.',z:-1,draw:function(g){g.appendChild(P('M120,262 L104,262 L104,170 Q104,164 112,164 L248,164 Q256,164 256,172 L256,262 L246,262',null,'#a1887f',11))}},
    {n:'wyrostek robaczkowy',m:[78,270],d:'Mały wyrostek jelita ślepego, bogaty w tkankę limfatyczną; nie bierze istotnego udziału w trawieniu.',draw:function(g){g.appendChild(P('M120,262 q-18,10 -22,22',null,'#795548',5))}},
    {n:'odbytnica i odbyt',m:[290,280],d:'Odbytnica gromadzi kał, który jest usuwany przez odbyt. Błonnik nie zostaje wchłonięty, ale ułatwia pracę jelit.',draw:function(g){g.appendChild(P('M246,262 L246,286',null,'#6d4c41',10))}}
  ]}}})}});

function vessel(g,H0,layers,cx0,x1,y0){ /* warstwy od zewnątrz do światła: [kolor, grubość] — rysowane jako pasy górny i dolny */
  var y=0;layers.forEach(function(l){var h=l[1];g.appendChild(R(x1[0],y0-H0+y,x1[1]-x1[0],h,0,l[0],'#51606e',1));g.appendChild(R(x1[0],y0+H0-y-h,x1[1]-x1[0],h,0,l[0],'#51606e',1));y+=h})}
function rbc(g,x,y,sc){g.appendChild(E(x,y,9*sc,5*sc,'#d32f2f','#8e1b1b',1));g.appendChild(E(x,y,3.5*sc,2*sc,'#ef9a9a','none',0))}
BIO.define('naczynia-krwionosne',{opis:'Tętnica, żyła i naczynie włosowate w przekroju podłużnym: warstwy ściany, światło, zastawka żylna, kierunek krwi; przełącznik wariantu, tryby poznaj / znajdź / podpisz + tabela porównawcza',
mount:function(el,o){
  var TB=[['Kierunek krwi','od serca','do serca','między tętniczkami a żyłkami'],['Ściana','gruba, mięśniowa i sprężysta','cienka, mało mięśni','jedna warstwa komórek (śródbłonek)'],['Światło','wąskie','szerokie','bardzo wąskie (jeden erytrocyt)'],['Ciśnienie krwi','wysokie, tętno','niskie','niskie, krew płynie wolno'],['Zastawki','brak (poza wyjściem z serca)','są (kieszonkowate)','brak'],['Funkcja','szybki transport krwi z serca','powrót krwi; pompa mięśni szkieletowych','wymiana gazów i substancji z tkankami']];
  lab(el,{vars:[['te','tętnica'],['zy','żyła'],['wl','naczynie włosowate']],start:o.typ,
  after:function(k){var d=H('div','bw-tbl'),t=H('table'),hr=H('tr'),ix={te:1,zy:2,wl:3};['Cecha','tętnica','żyła','włosowate'].forEach(function(x){hr.appendChild(H('th',null,x))});t.appendChild(hr);TB.forEach(function(r){var tr=H('tr');r.forEach(function(x,i){var td=H('td',null,i?x:'<b>'+x+'</b>');if(i===ix[k])td.style.background='var(--accent-soft,#e8f3e0)';tr.appendChild(td)});t.appendChild(tr)});d.appendChild(t);return d},
  get:function(k){
    var arrow=function(g,x1,x2,y,c,txt){g.appendChild(L(x1,y,x2,y,c,3,{'marker-end':''}));g.appendChild(P('M'+(x2-8)+','+(y-5)+' L'+x2+','+y+' L'+(x2-8)+','+(y+5),null,c,3));if(txt)g.appendChild(BIO.T((x1+x2)/2,y-9,txt,{s:9.5,w:700,f:c}))};
    if(k==='te')return{w:360,h:260,label:'Tętnica w przekroju podłużnym',parts:[
      {n:'przydanka',m:[24,60],d:'Zewnętrzna warstwa z tkanki łącznej włóknistej; chroni i zakotwicza naczynie w otoczeniu.',draw:function(g){g.appendChild(R(30,60,300,6,0,'#e8d5c0','#51606e',1));g.appendChild(R(30,194,300,6,0,'#e8d5c0','#51606e',1))}},
      {n:'warstwa mięśni gładkich i włókien sprężystych',m:[24,84],d:'Gruba, sprężysta ściana wytrzymuje wysokie ciśnienie krwi wyrzucanej przez serce i wyrównuje jego skoki (to czujemy jako tętno).',draw:function(g){g.appendChild(R(30,66,300,22,0,'#e57373','#51606e',1));g.appendChild(R(30,172,300,22,0,'#e57373','#51606e',1))}},
      {n:'śródbłonek',m:[24,104],d:'Gładka, jednowarstwowa wyściółka światła z komórek nabłonkowych; zmniejsza tarcie i zapobiega krzepnięciu krwi.',draw:function(g){g.appendChild(R(30,88,300,4,0,'#ffcdd2','#b23b3b',1));g.appendChild(R(30,168,300,4,0,'#ffcdd2','#b23b3b',1))}},
      {n:'światło (wąskie)',m:[300,130],z:-1,d:'Wąskie światło, krew płynie pod wysokim ciśnieniem i szybko. W tętnicach (poza płucną) krew jest utlenowana.',draw:function(g){g.appendChild(R(30,92,300,76,0,'#fff5f5','none',0));[[70,120],[130,142],[200,116],[260,140]].forEach(function(p){rbc(g,p[0],p[1],1)})}},
      {n:'kierunek: od serca',m:[100,225],d:'Tętnice prowadzą krew OD serca do narządów.',draw:function(g){arrow(g,60,230,226,'#b23b3b','od serca')}}
    ]};
    if(k==='zy')return{w:360,h:260,label:'Żyła w przekroju podłużnym',parts:[
      {n:'przydanka',m:[24,50],d:'Zewnętrzna warstwa z tkanki łącznej.',draw:function(g){g.appendChild(R(30,50,300,8,0,'#e8d5c0','#51606e',1));g.appendChild(R(30,202,300,8,0,'#e8d5c0','#51606e',1))}},
      {n:'cienka warstwa mięśniowa',m:[24,68],d:'Ściana żyły jest cieńsza i mniej elastyczna niż tętnicy, bo ciśnienie krwi jest niskie.',draw:function(g){g.appendChild(R(30,58,300,8,0,'#90caf9','#51606e',1));g.appendChild(R(30,194,300,8,0,'#90caf9','#51606e',1))}},
      {n:'śródbłonek',m:[24,82],d:'Wyściółka z jednej warstwy komórek; z niej powstają zastawki.',draw:function(g){g.appendChild(R(30,66,300,4,0,'#bbdefb','#1565c0',1));g.appendChild(R(30,190,300,4,0,'#bbdefb','#1565c0',1))}},
      {n:'światło (szerokie)',m:[300,130],z:-1,d:'Szersze światło niż w tętnicy; krew płynie wolno i pod niskim ciśnieniem. Większość żył niesie krew odtlenowaną (wyjątek: żyły płucne).',draw:function(g){g.appendChild(R(30,70,300,120,0,'#f0f6ff','none',0));[[60,100],[120,150],[250,110],[300,160]].forEach(function(p){rbc(g,p[0],p[1],1)})}},
      {n:'zastawka żylna',m:[178,168],d:'Kieszonkowate fałdy śródbłonka; przepuszczają krew tylko w stronę serca i zapobiegają jej cofaniu. Pomaga w tym pompa mięśniowa (skurcze mięśni szkieletowych uciskają żyły).',draw:function(g){g.appendChild(PL('170,70 220,70 195,110'));g.lastChild.setAttribute('fill','#7fb2e6');g.appendChild(PL('170,190 220,190 195,150'));g.lastChild.setAttribute('fill','#7fb2e6')}},
      {n:'kierunek: do serca',m:[100,235],d:'Żyły prowadzą krew DO serca.',draw:function(g){arrow(g,230,60,232,'#1565c0','do serca')}}
    ]};
    return{w:360,h:260,label:'Naczynie włosowate w przekroju podłużnym',parts:[
      {n:'ściana z jednej warstwy komórek',m:[24,100],d:'Ściana to tylko śródbłonek (jedna warstwa komórek) — cienka, więc substancje łatwo przez nią przenikają. Brak mięśni.',draw:function(g){g.appendChild(R(30,106,300,6,0,'#ffcdd2','#b23b3b',1));g.appendChild(R(30,148,300,6,0,'#ffcdd2','#b23b3b',1))}},
      {n:'światło z erytrocytami',m:[300,130],z:-1,d:'Bardzo wąskie światło: erytrocyty przepływają pojedynczo i wolno, co daje czas na wymianę.',draw:function(g){g.appendChild(R(30,112,300,36,0,'#fff5f5','none',0));[[70,130],[130,130],[200,130],[260,130]].forEach(function(p){rbc(g,p[0],p[1],1.1)})}},
      {n:'wymiana z tkankami',m:[200,84],d:'Przez ścianę dyfundują: O₂ i substancje odżywcze → do tkanek; CO₂ i produkty przemiany materii → do krwi.',draw:function(g){g.appendChild(P('M150,100 L150,64 M144,72 L150,64 L156,72',null,'#2a6f97',3));g.appendChild(P('M210,64 L210,100 M204,92 L210,100 L216,92',null,'#8d6e63',3));g.appendChild(BIO.T(150,52,'O₂, glukoza',{s:9.5,w:700,f:'#2a6f97'}));g.appendChild(BIO.T(215,52,'CO₂',{s:9.5,w:700,f:'#8d6e63'}))}},
      {n:'tkanka',m:[24,190],z:-2,d:'Komórki otaczające naczynie pobierają z krwi tlen i składniki odżywcze, a oddają CO₂ i produkty przemiany materii.',draw:function(g){[[60,190],[150,196],[240,190],[310,196]].forEach(function(p){g.appendChild(E(p[0],p[1],26,16,'#fff3d6','#c9a227',1.5));g.appendChild(C(p[0],p[1],4,'#b8860b','none',0))})}}
    ]}}})}});
})();
