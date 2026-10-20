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
    sel=-1;intro();refresh()}
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
})();
