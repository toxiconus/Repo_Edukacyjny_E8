/* bio-viz.js — biblioteka grafik i efektów lekcji BIO (v0.1, 2026-10-07).
   W lekcji (md):  @viz <id> {opcja="wartość"} | Tytuł | podpis
   Nowa grafika:   BIO.define('id', {opis:'…', mount:function(el, opt, fig){…}})  — katalog: biologia/bio/BIO_KATALOG.md
   Zasady: grafika statyczna + kliknięcie = wyjaśnienie; ruch tylko na żądanie ucznia (suwak/przycisk). Kolory z CSS (--nt-A …), działa w trybie nocnym. */
(function(){
'use strict';
var BIO=window.BIO=window.BIO||{};if(BIO.V)return;BIO.V='0.1';
var REG={};
BIO.define=function(id,def){REG[id]=def};
BIO.katalog=function(){return Object.keys(REG).map(function(k){return{id:k,opis:REG[k].opis||''}})};

/* ---------------- pomocnicze: elementy ---------------- */
var NS='http://www.w3.org/2000/svg';
function set(e,at){for(var k in at){var v=at[k];if(v==null)continue;
  if((k==='fill'||k==='stroke'||k==='stop-color')&&String(v).indexOf('var(')>=0)e.style.setProperty(k,v);else e.setAttribute(k,v)}}
function add(e,kids){(kids||[]).forEach(function(c){if(c==null||c===false)return;e.appendChild(typeof c==='string'||typeof c==='number'?document.createTextNode(String(c)):c)});return e}
function S(tag,at,kids){var e=document.createElementNS(NS,tag);set(e,at||{});return add(e,kids)}
function H(tag,cls,html,kids){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return add(e,kids)}
function svg(w,h,label,kids){return S('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':label||'',preserveAspectRatio:'xMidYMid meet'},kids)}
function T(x,y,t,o){o=o||{};return S('text',{x:x,y:y,'text-anchor':o.a||'middle','dominant-baseline':o.b||'middle','font-size':o.s||12,'font-weight':o.w||600,fill:o.f||'var(--viz-ink)'},[t])}
function btn(label,on){var b=H('button','bv-btn');b.type='button';b.textContent=label;if(on)b.onclick=on;return b}
function fmt(n){return n.toLocaleString('pl-PL')}
BIO.S=S;BIO.H=H;BIO.svg=svg;BIO.T=T;BIO.btn=btn;

/* ---------------- dane: nukleotydy ---------------- */
var NT={A:{n:'adenina',t:'puryna'},G:{n:'guanina',t:'puryna'},T:{n:'tymina',t:'pirymidyna'},C:{n:'cytozyna',t:'pirymidyna'},U:{n:'uracyl',t:'pirymidyna'}};
var PAIR={A:'T',T:'A',C:'G',G:'C'},PAIR_RNA={A:'U',T:'A',C:'G',G:'C'},HB={A:2,T:2,C:3,G:3,U:2};
function col(b){return'var(--nt-'+b+')'}function bg(b){return'var(--nt-'+b+'-bg)'}
function pur(b){return NT[b]&&NT[b].t==='puryna'}
BIO.NT=NT;BIO.PAIR=PAIR;BIO.PAIR_RNA=PAIR_RNA;BIO.HB=HB;

/* ---------------- prymitywy graficzne (BIO.g) ---------------- */
var g=BIO.g={};
function hexPts(cx,cy,r){var p=[];for(var i=0;i<6;i++){var a=Math.PI/180*(60*i-90);p.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return p}
function pentOn(p1,p2,hx,hy){ /* pięciokąt foremny na krawędzi p1-p2, na zewnątrz od środka (hx,hy) */
  var mx=(p1[0]+p2[0])/2,my=(p1[1]+p2[1])/2,dx=p2[0]-p1[0],dy=p2[1]-p1[1],L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L;
  if((mx+nx-hx)*(mx+nx-hx)+(my+ny-hy)*(my+ny-hy)<(mx-hx)*(mx-hx)+(my-hy)*(my-hy)){nx=-nx;ny=-ny}
  var ap=L/(2*Math.tan(Math.PI/5)),R=L/(2*Math.sin(Math.PI/5)),cx=mx+nx*ap,cy=my+ny*ap,a0=Math.atan2(p1[1]-cy,p1[0]-cx),pts=[];
  for(var i=0;i<5;i++){var a=a0+i*2*Math.PI/5;pts.push([cx+R*Math.cos(a),cy+R*Math.sin(a)])}return pts}
function P(pts){return pts.map(function(p){return p[0].toFixed(1)+','+p[1].toFixed(1)}).join(' ')}
/* zasada jako pierścienie: puryna = 6+5, pirymidyna = 6. side=+1 → pięciokąt po lewej (zasada po lewej nici) */
g.ring=function(b,cx,cy,r,side,lab){
  var h=hexPts(cx,cy,r),gg=S('g',{});
  if(pur(b)){var e=side>0?[h[4],h[5]]:[h[1],h[2]];gg.appendChild(S('polygon',{points:P(pentOn(e[0],e[1],cx,cy)),fill:bg(b),stroke:col(b),'stroke-width':2,'stroke-linejoin':'round'}))}
  gg.appendChild(S('polygon',{points:P(h),fill:bg(b),stroke:col(b),'stroke-width':2,'stroke-linejoin':'round'}));
  if(lab!==false)gg.appendChild(T(cx,cy+1,b,{s:r*0.95,w:800,f:col(b)}));
  return gg};
g.hbonds=function(x1,x2,yc,n,gap){gap=gap||6;var gg=S('g',{});for(var i=0;i<n;i++){var y=yc+(i-(n-1)/2)*gap;gg.appendChild(S('line',{x1:x1,y1:y,x2:x2,y2:y,stroke:'var(--hbond)','stroke-width':2,'stroke-dasharray':'3 3'}))}return gg};
g.sugar=function(cx,cy,r){var pts=[];for(var i=0;i<5;i++){var a=Math.PI/180*(72*i-90);pts.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}
  return S('polygon',{points:P(pts),fill:'var(--sugar-bg)',stroke:'var(--sugar)','stroke-width':2,'stroke-linejoin':'round'})};
g.phos=function(cx,cy,r){return S('g',{},[S('circle',{cx:cx,cy:cy,r:r,fill:'var(--phos-bg)',stroke:'var(--phos)','stroke-width':2}),T(cx,cy+0.5,'P',{s:r*1.05,w:800,f:'var(--phos)'})])};
/* mała helisa jako ikona */
g.miniHelix=function(x,y,w,h,turns){var gg=S('g',{}),n=40,a='',b='';for(var i=0;i<=n;i++){var t=i/n,yy=y+t*h,ph=t*turns*2*Math.PI;
  a+=(i?'L':'M')+(x+w/2+w/2*Math.sin(ph)).toFixed(1)+' '+yy.toFixed(1);b+=(i?'L':'M')+(x+w/2-w/2*Math.sin(ph)).toFixed(1)+' '+yy.toFixed(1);
  if(i%4===2)gg.appendChild(S('line',{x1:x+w/2+w/2*Math.sin(ph),y1:yy,x2:x+w/2-w/2*Math.sin(ph),y2:yy,stroke:'var(--hbond)','stroke-width':1.5}))}
  gg.appendChild(S('path',{d:a,fill:'none',stroke:'var(--strand1)','stroke-width':3,'stroke-linecap':'round'}));
  gg.appendChild(S('path',{d:b,fill:'none',stroke:'var(--strand2)','stroke-width':3,'stroke-linecap':'round'}));return gg};
/* pętla „chromatyny” w jądrze */
g.squiggle=function(cx,cy,r,seed){var d='',n=120,s=seed||1;for(var i=0;i<=n;i++){var a=i/n*Math.PI*2+s,rr=r*(0.62+0.16*Math.sin(4*a+s)+0.1*Math.sin(9*a+2*s));
  d+=(i?'L':'M')+(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1)}
  return S('path',{d:d,fill:'none',stroke:'var(--dna-ink)','stroke-width':1.8,'stroke-linejoin':'round','stroke-linecap':'round'})};
g.chromosome=function(cx,cy,h,fill){var gg=S('g',{}),w=h*0.26;
  [-18,18].forEach(function(r){gg.appendChild(S('rect',{x:cx-w/2,y:cy-h/2,width:w,height:h,rx:w/2,fill:fill||'var(--nucleus-bg)',stroke:'var(--dna-ink)','stroke-width':2,transform:'rotate('+r+' '+cx+' '+cy+')'}))});
  gg.appendChild(S('circle',{cx:cx,cy:cy,r:w*0.32,fill:'var(--dna-ink)'}));return gg};

/* ---------------- efekty (BIO.fx) ---------------- */
var fx=BIO.fx={};
/* kliknij element z data-k → opis w polu info; klawiatura: Tab + Enter */
fx.info=function(root,box,map,first){
  function show(k,el){var d=map[k];if(!d)return;root.querySelectorAll('.bv-hit.sel').forEach(function(x){x.classList.remove('sel')});
    if(el)el.classList.add('sel');box.className='bv-info';box.innerHTML='<b>'+d[0]+'</b>'+d[1]}
  root.querySelectorAll('[data-k]').forEach(function(el){el.classList.add('bv-hit');el.setAttribute('tabindex','0');el.setAttribute('role','button');
    el.addEventListener('click',function(){show(el.getAttribute('data-k'),el)});
    el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();show(el.getAttribute('data-k'),el)}})});
  if(first)show(first,root.querySelector('[data-k="'+first+'"]'));return show};
fx.infoBox=function(txt){return H('div','bv-info',txt||'Kliknij element grafiki, aby zobaczyć wyjaśnienie.')};
/* przełącznik przycisków (jeden aktywny) */
fx.toggle=function(btns,i){btns.forEach(function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-pressed',j===i?'true':'false')})};

/* ---------------- montaż ---------------- */
BIO.mount=function(fig){if(fig.dataset.bioOn)return;fig.dataset.bioOn=1;
  var id=fig.getAttribute('data-bio-viz'),body=fig.querySelector('.bio-fig-body')||fig,opt={};
  try{opt=JSON.parse(fig.getAttribute('data-opt')||'{}')}catch(e){}
  var d=REG[id];if(!d){body.innerHTML='<p class="bio-err">Brak grafiki „'+id+'” w bibliotece bio-viz.js.</p>';return}
  d.mount(body,opt,fig)};
BIO.mountAll=function(root){(root||document).querySelectorAll('[data-bio-viz]').forEach(BIO.mount)};

/* =====================================================================
   GRAFIKI
   ===================================================================== */

/* ---- łańcuch kroków (ogólny) ---- */
function chain(el,nodes,opt){var c=H('div','bv-chain'+(opt.pion!=='nie'?' v':''));
  nodes.forEach(function(n,i){if(i)c.appendChild(H('span','bv-arrow','→'));var d=H('div','bv-node'+(n.k?' k':''));
    if(n.ico)d.appendChild(n.ico);d.appendChild(H('b',null,n.b));if(n.s)d.appendChild(H('small',null,n.s));if(n.key)d.setAttribute('data-k',n.key);c.appendChild(d)});
  el.appendChild(c);return c}
BIO.define('lancuch',{opis:'Łańcuch kroków A → B → C; opcje: kroki="A|opis > B > C", boki="środowisko; rozwój", wyroznij="nr" (od 1)',
mount:function(el,o){var k=+(o.wyroznij||0);
  chain(el,(o.kroki||'').split('>').map(function(s,i){var p=s.split('|');return{b:p[0].trim(),s:(p[1]||'').trim(),k:k===i+1}}),o);
  if(o.boki){var sd=H('div','bv-side');o.boki.split(';').forEach(function(s){if(s.trim())sd.appendChild(H('span',null,s.trim()))});el.appendChild(sd)}}});

/* ---- od organizmu do genu ---- */
function ico(w,h,kids){var s=svg(w,h,'',kids);s.setAttribute('aria-hidden','true');s.setAttribute('class','bv-ico');return s}
var ICO={
 organizm:function(){return ico(120,80,[S('circle',{cx:60,cy:16,r:10,fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':2}),S('path',{d:'M42 72V44q0-14 18-14t18 14v28',fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':2,'stroke-linejoin':'round'})])},
 komorka:function(){return ico(120,80,[S('ellipse',{cx:60,cy:40,rx:50,ry:32,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':2.5}),S('circle',{cx:64,cy:40,r:15,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2}),S('ellipse',{cx:30,cy:50,rx:9,ry:5,fill:'var(--mito-bg)',stroke:'var(--mito)','stroke-width':1.5})])},
 jadro:function(){return ico(120,80,[S('circle',{cx:60,cy:40,r:34,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2.5}),g.squiggle(60,40,30,1),g.squiggle(58,42,26,3)])},
 chromosom:function(){return ico(120,80,[g.chromosome(60,40,66)])},
 dna:function(){var s=ico(120,80,[]);var gg=g.miniHelix(0,0,60,100,1.6);gg.setAttribute('transform','translate(110 10) rotate(90)');s.appendChild(gg);return s},
 gen:function(){return ico(120,80,[S('rect',{x:6,y:30,width:108,height:20,rx:4,fill:'var(--viz-bg2)',stroke:'var(--viz-line)'}),S('rect',{x:40,y:28,width:46,height:24,rx:4,fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':2}),T(63,40.5,'gen',{s:12,w:800,f:'var(--accent)'})])}};
BIO.ICO=ICO;
BIO.define('od-organizmu-do-genu',{opis:'Powiększenie: organizm → komórka → jądro → chromosom → DNA → gen (kliknij krok)',
mount:function(el,o){var nodes=[
  {key:'org',b:'organizm',s:'człowiek, roślina…',ico:ICO.organizm()},{key:'kom',b:'komórka',s:'ok. 10–100 µm',ico:ICO.komorka()},
  {key:'jad',b:'jądro',s:'główne miejsce DNA',ico:ICO.jadro()},{key:'chr',b:'chromosom',s:'DNA + białka',ico:ICO.chromosom()},
  {key:'dna',b:'DNA',s:'cząsteczka',ico:ICO.dna()},{key:'gen',b:'gen',s:'odcinek DNA',ico:ICO.gen(),k:true}];
  var c=chain(el,nodes,o),box=fx.infoBox();el.appendChild(box);
  fx.info(c,box,{
   org:['Organizm','Zbudowany z komórek. Cechy organizmu (fenotyp) powstają przy współudziale genów, środowiska i rozwoju.'],
   kom:['Komórka','Podstawowa jednostka życia. Niemal każda komórka ciała ma ten sam komplet DNA — ale korzysta z innych jego fragmentów.'],
   jad:['Jądro komórkowe','U eukariontów główne miejsce DNA. Oddzielone błoną jądrową, co pomaga organizować DNA i kontrolować jego odczyt.'],
   chr:['Chromosom','Struktura z jednej długiej cząsteczki DNA związanej z białkami (histonami). Komórka ciała człowieka ma 46 chromosomów (L012).'],
   dna:['DNA','Kwas deoksyrybonukleinowy — cząsteczka, w której kolejność zasad A, T, C, G niesie informację genetyczną.'],
   gen:['Gen','Odcinek DNA z informacją o produkcie — białku albo funkcjonalnym RNA. Nie cały DNA to geny.']},o.start||'gen')}});

/* ---- trzy szuflady cech ---- */
var KAT={d:'dziedziczna',n:'nabyta',w:'wieloczynnikowa'};
var CECHY=[['grupa krwi ABO','d','Zależy od odziedziczonych alleli genu ABO; warunki życia jej nie zmieniają.'],
 ['blizna po upadku','n','Uraz zmienia skórę, nie DNA w gametach — blizna nie przechodzi na dzieci.'],
 ['wzrost','w','Wiele genów + odżywianie, sen, choroby, aktywność w dzieciństwie.'],
 ['opalenizna po wakacjach','n','Reakcja skóry na słońce. Zdolność do opalania ma podłoże genetyczne, ale sama opalenizna jest nabyta.'],
 ['znajomość języka obcego','n','Umiejętność wyuczona — nie ma jej w DNA.'],
 ['kolor oczu','d','W szkolnym modelu cecha dziedziczna (w rzeczywistości zależy od kilku genów).'],
 ['masa ciała','w','Geny + dieta + ruch + zdrowie.'],
 ['daltonizm','d','Allel na chromosomie X (L018).'],
 ['ciśnienie krwi','w','Geny + styl życia + wiek.'],
 ['talent muzyczny','w','Predyspozycje z genów + trening, środowisko, motywacja.']];
BIO.define('szuflady-cech',{opis:'Sortowanie cech: dziedziczna / nabyta / wieloczynnikowa; opcja cechy="nazwa:d|wyjaśnienie; …" (d, n, w)',
mount:function(el,o){var list=CECHY;
  if(o.cechy)list=o.cechy.split(';').map(function(s){var a=s.split('|'),h=a[0].split(':');return[h[0].trim(),(h[1]||'d').trim(),(a[1]||'').trim()]});
  var wrap=H('div','bv-sort'),sc=H('div','bv-score'),ok=0,n=0;
  list.forEach(function(c){var r=H('div','bv-row');r.appendChild(H('b',null,c[0]));
    var bs=['d','n','w'].map(function(k){var b=btn(KAT[k]);b.onclick=function(){if(r.dataset.done)return;r.dataset.done=1;n++;var good=k===c[1];if(good)ok++;
      bs.forEach(function(x){x.disabled=true});b.classList.add('on');r.classList.add(good?'ok':'bad');
      r.appendChild(H('div','why',(good?'Dobrze. ':'To cecha '+KAT[c[1]]+'. ')+c[2]));sc.textContent='Wynik: '+ok+' / '+n+(n===list.length?' — gotowe.':'')};r.appendChild(b);return b});
    wrap.appendChild(r)});
  el.appendChild(wrap);el.appendChild(sc);
  el.appendChild(btn('Od nowa',function(){el.innerHTML='';REG['szuflady-cech'].mount(el,o)}))}});

/* ---- gdzie jest DNA ---- */
function cellTile(title,sub,s,k){var t=H('div','bv-tile');t.appendChild(H('h6',null,title));t.appendChild(s);if(sub)t.appendChild(H('p',null,sub));return t}
BIO.define('gdzie-dna',{opis:'Gdzie jest DNA: komórka zwierzęca, roślinna, bakteria, erytrocyt (kliknij organellum)',
mount:function(el){var grid=H('div','bv-grid');
  var zw=svg(200,140,'Komórka zwierzęca',[S('ellipse',{cx:100,cy:70,rx:92,ry:60,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':3}),
    S('g',{'data-k':'jadro'},[S('circle',{cx:108,cy:66,r:30,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2.5}),g.squiggle(108,66,26,2)]),
    S('g',{'data-k':'mito'},[S('ellipse',{cx:42,cy:86,rx:20,ry:10,fill:'var(--mito-bg)',stroke:'var(--mito)','stroke-width':2}),S('circle',{cx:42,cy:86,r:4,fill:'none',stroke:'var(--dna-ink)','stroke-width':1.6})]),
    S('g',{'data-k':'mito'},[S('ellipse',{cx:160,cy:104,rx:17,ry:9,fill:'var(--mito-bg)',stroke:'var(--mito)','stroke-width':2,transform:'rotate(-20 160 104)'}),S('circle',{cx:160,cy:104,r:3.5,fill:'none',stroke:'var(--dna-ink)','stroke-width':1.6})])]);
  var ro=svg(200,140,'Komórka roślinna',[S('rect',{x:6,y:6,width:188,height:128,rx:10,fill:'none',stroke:'var(--wall)','stroke-width':5}),
    S('rect',{x:13,y:13,width:174,height:114,rx:7,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':2}),
    S('rect',{x:70,y:24,width:104,height:66,rx:22,fill:'var(--viz-bg)',stroke:'var(--viz-line)','stroke-width':1.5}),T(122,57,'wakuola',{s:10,f:'var(--viz-mut)',w:500}),
    S('g',{'data-k':'jadro'},[S('circle',{cx:44,cy:44,r:22,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2.5}),g.squiggle(44,44,18,4)]),
    S('g',{'data-k':'chloro'},[S('ellipse',{cx:96,cy:108,rx:24,ry:11,fill:'var(--chloro-bg)',stroke:'var(--chloro)','stroke-width':2}),S('path',{d:'M80 108h32M84 103h24M84 113h24',stroke:'var(--chloro)','stroke-width':1.5}),S('circle',{cx:106,cy:108,r:3.5,fill:'none',stroke:'var(--dna-ink)','stroke-width':1.6})]),
    S('g',{'data-k':'mito'},[S('ellipse',{cx:156,cy:108,rx:17,ry:8,fill:'var(--mito-bg)',stroke:'var(--mito)','stroke-width':2}),S('circle',{cx:156,cy:108,r:3.2,fill:'none',stroke:'var(--dna-ink)','stroke-width':1.6})])]);
  var ba=svg(200,140,'Bakteria',[S('rect',{x:14,y:30,width:172,height:80,rx:40,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':3}),
    S('g',{'data-k':'nukleoid'},[S('ellipse',{cx:92,cy:70,rx:46,ry:26,fill:'var(--nucleus-bg)',stroke:'none',opacity:0.6}),g.squiggle(92,70,30,5),g.squiggle(96,68,24,7)]),
    S('g',{'data-k':'plazmid'},[S('circle',{cx:154,cy:58,r:9,fill:'none',stroke:'var(--dna-ink)','stroke-width':2.2})])]);
  var er=svg(200,140,'Erytrocyt',[S('g',{'data-k':'erytro'},[S('ellipse',{cx:100,cy:66,rx:62,ry:44,fill:'#f2b8b8',stroke:'#c0504d','stroke-width':3}),S('ellipse',{cx:100,cy:66,rx:30,ry:20,fill:'#f8d3d3',stroke:'none'})]),
    T(100,124,'brak jądra i mitochondriów',{s:11,w:700,f:'var(--c-error)'})]);
  grid.appendChild(cellTile('Komórka zwierzęca','jądro + mitochondria',zw));grid.appendChild(cellTile('Komórka roślinna','jądro + mitochondria + chloroplasty',ro));
  grid.appendChild(cellTile('Bakteria','bez jądra: nukleoid (+ plazmidy)',ba));grid.appendChild(cellTile('Dojrzały erytrocyt','wyjątek: brak DNA',er));
  el.appendChild(grid);var box=fx.infoBox();el.appendChild(box);
  el.appendChild(H('div','bv-legend','<span><i style="background:var(--nucleus-bg);border:2px solid var(--nucleus)"></i>jądro</span><span><i style="background:var(--mito-bg);border:2px solid var(--mito)"></i>mitochondrium</span><span><i style="background:var(--chloro-bg);border:2px solid var(--chloro)"></i>chloroplast</span><span><i style="border:2px solid var(--dna-ink)"></i>DNA</span>'));
  fx.info(grid,box,{
   jadro:['Jądro komórkowe','U eukariontów (zwierzęta, rośliny, grzyby) tu jest większość DNA — w postaci chromosomów.'],
   mito:['Mitochondrium — mtDNA','Mitochondria mają własne, małe, koliste DNA (mtDNA). U człowieka dziedziczy się ono prawie zawsze po matce.'],
   chloro:['Chloroplast — cpDNA','Chloroplasty roślin i glonów też mają własne koliste DNA (cpDNA).'],
   nukleoid:['Nukleoid','Bakterie nie mają jądra. Ich główne, koliste DNA leży w cytoplazmie, w obszarze zwanym nukleoidem.'],
   plazmid:['Plazmid','Mała kolista cząsteczka DNA u wielu bakterii, dodatkowa wobec DNA nukleoidu (np. geny oporności na antybiotyki).'],
   erytro:['Dojrzały erytrocyt człowieka','Nie ma jądra ani mitochondriów, więc nie zawiera DNA. Badanie DNA z krwi korzysta z leukocytów (białych krwinek), które jądro mają.']})}});

/* ---- DNA / gen / chromosom ---- */
BIO.define('poziomy-dna',{opis:'Chromosom → DNA na histonach → odcinek DNA z genem, regionem regulatorowym i niekodującym (kliknij)',
mount:function(el){
  var s1=svg(200,150,'Chromosom',[S('g',{'data-k':'chr'},[g.chromosome(100,70,112)]),S('rect',{x:120,y:26,width:34,height:18,rx:4,fill:'none',stroke:'var(--accent)','stroke-width':2,'stroke-dasharray':'4 3'}),T(100,140,'chromosom',{s:12,w:800})]);
  var nuc=[];for(var i=0;i<4;i++){var x=30+i*46;nuc.push(S('g',{'data-k':'his'},[S('circle',{cx:x,cy:70,r:15,fill:'var(--phos-bg)',stroke:'var(--phos)','stroke-width':2}),
    S('path',{d:'M'+(x-17)+' 66q17 -16 34 0q-17 16 -34 0',fill:'none',stroke:'var(--dna-ink)','stroke-width':2.2})]))}
  var link='M0 70';for(i=0;i<4;i++){var xx=30+i*46;link+=' L'+(xx-17)+' 66 M'+(xx+17)+' 66'}link+=' L200 70';
  var s2=svg(200,150,'DNA nawinięte na histony',[S('path',{d:link,fill:'none',stroke:'var(--dna-ink)','stroke-width':2.2})].concat(nuc).concat([T(100,140,'DNA + histony',{s:12,w:800})]));
  var segs=[['niek',8,46,'var(--viz-bg2)','var(--viz-line)'],['reg',46,80,'var(--phos-bg)','var(--phos)'],['gen',80,152,'var(--accent-soft)','var(--accent)'],['niek',152,192,'var(--viz-bg2)','var(--viz-line)']];
  var k3=[S('line',{x1:8,y1:52,x2:192,y2:52,stroke:'var(--strand1)','stroke-width':3}),S('line',{x1:8,y1:88,x2:192,y2:88,stroke:'var(--strand2)','stroke-width':3})];
  for(i=0;i<16;i++)k3.push(S('line',{x1:14+i*11.5,y1:54,x2:14+i*11.5,y2:86,stroke:'var(--hbond)','stroke-width':1.4}));
  segs.forEach(function(sg){k3.push(S('g',{'data-k':sg[0]},[S('rect',{x:sg[1],y:44,width:sg[2]-sg[1],height:52,rx:5,fill:sg[3],stroke:sg[4],'stroke-width':2,opacity:0.85})]))});
  k3.push(T(116,70,'gen',{s:13,w:800,f:'var(--accent)'}));k3.push(T(63,108,'regulator',{s:9.5,w:700,f:'var(--phos)'}));k3.push(T(27,34,'niekod.',{s:9.5,w:600,f:'var(--viz-mut)'}));
  k3.push(T(100,140,'odcinek DNA',{s:12,w:800}));
  var s3=svg(200,150,'Odcinek DNA z genem',k3);
  var c=H('div','bv-chain v');[s1,s2,s3].forEach(function(s,i){if(i)c.appendChild(H('span','bv-arrow','→'));var d=H('div','bv-node');d.appendChild(s);c.appendChild(d)});
  el.appendChild(c);var box=fx.infoBox();el.appendChild(box);
  fx.info(c,box,{
   chr:['Chromosom','Struktura zbudowana z jednej długiej cząsteczki DNA związanej z białkami. To nie „pudełko z genami”, tylko zwinięta cząsteczka DNA.'],
   his:['Histony','Białka, na które nawija się DNA (jak nić na szpulki). Dzięki nim ok. 2 m DNA mieści się w jądrze (szczegóły: L012).'],
   gen:['Gen','Odcinek DNA z informacją o produkcie — białku albo funkcjonalnym RNA.'],
   reg:['Region regulatorowy','Fragment DNA, który wpływa na to, kiedy, gdzie i jak intensywnie gen jest odczytywany.'],
   niek:['DNA niekodujące','Fragmenty bez przepisu na białko — część ma funkcje regulacyjne lub strukturalne, część to sekwencje powtarzalne. „DNA = zbiór genów” to uproszczenie.']},'gen')}});

/* ---- nukleotyd ---- */
BIO.define('nukleotyd',{opis:'Budowa nukleotydu DNA: reszta fosforanowa + deoksyryboza + zasada; opcja zasada="A|T|C|G"',
mount:function(el,o){var b=(o.zasada||'A').toUpperCase();
  function draw(b){var s=svg(320,190,'Nukleotyd DNA z zasadą '+b,[
    S('line',{x1:62,y1:96,x2:118,y2:96,stroke:'var(--phos)','stroke-width':3}),S('line',{x1:168,y1:104,x2:204,y2:96,stroke:'var(--viz-mut)','stroke-width':3}),
    S('g',{'data-k':'P'},[g.phos(44,96,22)]),
    S('g',{'data-k':'cukier'},[g.sugar(143,102,30),T(143,104,'cukier',{s:11,w:700,f:'var(--sugar)'})]),
    T(112,78,'5′',{s:12,w:800,f:'var(--viz-mut)'}),T(128,145,'3′',{s:12,w:800,f:'var(--viz-mut)'}),T(171,145,'1′',{s:11,w:700,f:'var(--viz-mut)'}),
    S('g',{'data-k':'zasada'},[g.ring(b,236,96,26,1)]),
    T(44,140,'reszta',{s:11,f:'var(--phos)'}),T(44,154,'fosforanowa',{s:11,f:'var(--phos)'}),T(143,162,'deoksyryboza',{s:11,f:'var(--sugar)'}),
    T(244,140,'zasada azotowa',{s:11,f:col(b)}),T(244,154,NT[b].n+' ('+NT[b].t+')',{s:11,w:500,f:col(b)}),
    T(160,22,'nukleotyd = fosforan + cukier + zasada',{s:13,w:800})]);return s}
  var tools=H('div','bv-tools'),bs=['A','T','C','G'].map(function(x,i){return btn(x,function(){fx.toggle(bs,i);holder.innerHTML='';holder.appendChild(draw(x));bind()})});
  bs.forEach(function(x){tools.appendChild(x)});fx.toggle(bs,['A','T','C','G'].indexOf(b));el.appendChild(tools);
  var holder=H('div');holder.appendChild(draw(b));el.appendChild(holder);var box=fx.infoBox();el.appendChild(box);
  function bind(){fx.info(holder,box,{
   P:['Reszta fosforanowa','Łączy cukier jednego nukleotydu z cukrem następnego — razem tworzą szkielet nici (szkielet cukrowo-fosforanowy).'],
   cukier:['Deoksyryboza','Cukier pięciowęglowy (deoksy- = „bez jednego tlenu” w porównaniu z rybozą w RNA). Węgle numeruje się 1′–5′: zasada przy 1′, fosforan przy 5′, następny nukleotyd przy 3′.'],
   zasada:['Zasada azotowa','Jedna z czterech: A, T, C, G. To ona „niesie literę” informacji. Puryny (A, G) mają dwa pierścienie, pirymidyny (T, C) — jeden.']})}bind()}});

/* ---- pary zasad: dlaczego A–T i C–G ---- */
var PARY=[['A','T','Para A–T',true,'Puryna + pirymidyna: szerokość pasuje do szkieletu. Układ grup pozwala na 2 wiązania wodorowe.'],
 ['G','C','Para G–C',true,'Puryna + pirymidyna: ta sama szerokość co A–T. Tu powstają 3 wiązania wodorowe — para jest trwalsza.'],
 ['A','G','A–G (błąd)',false,'Dwie puryny: para jest za szeroka i nie mieści się między nićmi.'],
 ['C','T','C–T (błąd)',false,'Dwie pirymidyny: para jest za wąska — zasady nie sięgają do siebie.'],
 ['A','C','A–C (błąd)',false,'Szerokość pasuje (puryna + pirymidyna), ale grupy chemiczne nie tworzą prawidłowych wiązań wodorowych. Szerokość to nie wszystko.']];
BIO.define('pary-zasad',{opis:'Pary komplementarne A–T, G–C i błędne pary (A–G, C–T, A–C) — szerokość + wiązania',
mount:function(el,o){var tools=H('div','bv-tools'),holder=H('div'),box=H('div','bv-info');
  function draw(i){var p=PARY[i],L=40,R=280,r=22,a=p[0],b=p[1];
    var wa=pur(a)?3.27*r:1.73*r,wb=pur(b)?3.27*r:1.73*r,tot=5*r+18,x0=160-tot/2,gap=tot-wa-wb,ca=x0+wa-0.866*r,cb=x0+wa+gap+0.866*r;
    var kids=[S('rect',{x:L-14,y:20,width:14,height:120,rx:5,fill:'var(--sugar-bg)',stroke:'var(--sugar)','stroke-width':2}),S('rect',{x:R,y:20,width:14,height:120,rx:5,fill:'var(--sugar-bg)',stroke:'var(--sugar)','stroke-width':2}),
      S('line',{x1:L,y1:80,x2:x0,y2:80,stroke:'var(--viz-mut)','stroke-width':2.5}),S('line',{x1:x0+tot,y1:80,x2:R,y2:80,stroke:'var(--viz-mut)','stroke-width':2.5}),
      g.ring(a,ca,80,r,1),g.ring(b,cb,80,r,-1)];
    if(p[3])kids.push(g.hbonds(x0+wa+1,x0+wa+gap-1,80,HB[a],7));
    else if(a==='A'&&b==='C'){kids.push(T(x0+wa+gap/2,80,'✕',{s:16,w:800,f:'var(--c-error)'}))}
    var ok=p[3],w=Math.round(tot);
    kids.push(S('line',{x1:L,y1:150,x2:R,y2:150,stroke:'var(--viz-line)','stroke-width':1.5,'stroke-dasharray':'4 4'}));
    kids.push(T(160,166,ok||(a==='A'&&b==='C')?'szerokość pasuje do odstępu między nićmi':(gap<0?'za szeroka — nie mieści się':'za wąska — zasady się nie stykają'),{s:11.5,w:700,f:ok?'var(--c-basic)':'var(--c-error)'}));
    kids.push(T(160,10,p[2]+(ok?' · '+HB[a]+' wiązania wodorowe':''),{s:13,w:800,f:ok?'var(--viz-ink)':'var(--c-error)'}));
    holder.innerHTML='';holder.appendChild(svg(320,176,p[2],kids));box.className='bv-info '+(ok?'ok':'bad');box.innerHTML='<b>'+p[2]+'</b>'+p[4]}
  var bs=PARY.map(function(p,i){return btn(p[0]+'–'+p[1],function(){fx.toggle(bs,i);draw(i)})});bs.forEach(function(b){tools.appendChild(b)});
  el.appendChild(tools);el.appendChild(holder);el.appendChild(box);
  el.appendChild(H('div','bv-legend','<span>puryny (2 pierścienie): <b style="color:var(--nt-A)">A</b>, <b style="color:var(--nt-G)">G</b></span><span>pirymidyny (1 pierścień): <b style="color:var(--nt-T)">T</b>, <b style="color:var(--nt-C)">C</b></span><span>- - - wiązanie wodorowe</span>'));
  fx.toggle(bs,0);draw(0)}});

/* ---- drabina DNA ---- */
function cleanSeq(s,def){s=String(s||def).toUpperCase().replace(/[^ATCG]/g,'');return s||def}
BIO.define('drabina',{opis:'Model drabiny: dwie antyrównoległe nici, szkielet cukrowo-fosforanowy, pary zasad i wiązania wodorowe; opcja seq="ATGCCA"',
mount:function(el,o){var seq=cleanSeq(o.seq,'ATGCCA'),n=seq.length,dy=38,top=46,Hh=top+n*dy+30,xl=60,xr=260,ca=xl+44,cb=xr-44,r=15;
  var kids=[T(xl,22,'5′',{s:14,w:800,f:'var(--strand1)'}),T(xr,22,'3′',{s:14,w:800,f:'var(--strand2)'}),T(xl,Hh-10,'3′',{s:14,w:800,f:'var(--strand1)'}),T(xr,Hh-10,'5′',{s:14,w:800,f:'var(--strand2)'}),
    S('line',{x1:xl,y1:34,x2:xl,y2:Hh-24,stroke:'var(--strand1)','stroke-width':4,'stroke-linecap':'round'}),S('line',{x1:xr,y1:34,x2:xr,y2:Hh-24,stroke:'var(--strand2)','stroke-width':4,'stroke-linecap':'round'})];
  for(var i=0;i<n;i++){var y=top+i*dy+dy/2,a=seq[i],b=PAIR[a];
    if(i<n-1){kids.push(S('g',{'data-k':'P'},[g.phos(xl,y+dy/2,7)]));kids.push(S('g',{'data-k':'P'},[g.phos(xr,y+dy/2,7)]))}
    kids.push(S('g',{'data-k':'S'},[g.sugar(xl,y,10)]));kids.push(S('g',{'data-k':'S'},[g.sugar(xr,y,10)]));
    var wa=pur(a)?62:44,wb=pur(b)?62:44;
    kids.push(S('g',{'data-k':'p'+a},[S('rect',{x:xl+10,y:y-12,width:wa,height:24,rx:6,fill:bg(a),stroke:col(a),'stroke-width':2}),
      S('rect',{x:xr-10-wb,y:y-12,width:wb,height:24,rx:6,fill:bg(b),stroke:col(b),'stroke-width':2}),
      g.hbonds(xl+10+wa+2,xr-10-wb-2,y,HB[a],6),T(xl+10+wa/2,y+1,a,{s:14,w:800,f:col(a)}),T(xr-10-wb/2,y+1,b,{s:14,w:800,f:col(b)})]))}
  var s=svg(320,Hh,'Drabina DNA: '+seq,kids);el.appendChild(s);var box=fx.infoBox();el.appendChild(box);
  el.appendChild(H('div','bv-legend','<span><i style="background:var(--sugar-bg);border:2px solid var(--sugar)"></i>deoksyryboza</span><span><i style="background:var(--phos-bg);border:2px solid var(--phos)"></i>fosforan</span><span>- - - wiązania wodorowe</span>'));
  var pa=['Para A–T','Adenina (puryna, dłuższa płytka) + tymina (pirymidyna, krótsza). 2 wiązania wodorowe.'],pc=['Para C–G','Cytozyna (pirymidyna) + guanina (puryna). 3 wiązania wodorowe — trwalsza para.'];
  fx.info(s,box,{pA:pa,pT:['Para T–A','Ta sama para co A–T, tylko odczytana od drugiej nici. 2 wiązania wodorowe.'],pC:pc,pG:['Para G–C','Ta sama para co C–G, odczytana od drugiej nici. 3 wiązania wodorowe.'],
   P:['Reszta fosforanowa','Łączy kolejne cukry w nici — razem z nimi tworzy „boki drabiny”.'],S:['Deoksyryboza','Cukier w szkielecie nici; do niego przyłączona jest zasada.']})}});

/* ---- helisa: od drabiny do helisy (suwak) ---- */
BIO.define('helisa',{opis:'Podwójna helisa z suwakiem „skręcenie” (drabina ↔ helisa), wymiary 2 nm i 3,4 nm / 10 par; opcja seq',
mount:function(el,o){var seq=cleanSeq(o.seq,'ATGCGTACGATTGCAC'),n=seq.length,dy=22,top=34,R=88,cx=160,Hh=top+(n-1)*dy+44,t=o.skret!=null?+o.skret/100:1;
  var tools=H('div','bv-tools'),lab=H('span','bv-score'),rng=document.createElement('input');rng.type='range';rng.min=0;rng.max=100;rng.value=Math.round(t*100);rng.setAttribute('aria-label','Skręcenie');rng.style.flex='1 1 140px';
  var b0=btn('Drabina',function(){rng.value=0;draw()}),b1=btn('Helisa',function(){rng.value=100;draw()});
  tools.appendChild(b0);tools.appendChild(rng);tools.appendChild(b1);el.appendChild(tools);var holder=H('div');el.appendChild(holder);el.appendChild(lab);
  function draw(){var t=rng.value/100,pts=[],back=[],front=[],rungs=[];
    for(var i=0;i<n;i++){var ph=t*2*Math.PI*i/10+0.0001,c=Math.cos(ph),sn=Math.sin(ph),y=top+i*dy;pts.push({y:y,x1:cx-R*c,x2:cx+R*c,z1:-sn,z2:sn,c:c})}
    for(i=0;i<n-1;i++){[[1,'var(--strand1)'],[2,'var(--strand2)']].forEach(function(s){var a=pts[i],b=pts[i+1],z=(a['z'+s[0]]+b['z'+s[0]])/2;
      var seg=S('line',{x1:a['x'+s[0]],y1:a.y,x2:b['x'+s[0]],y2:b.y,stroke:s[1],'stroke-width':z<-0.05?6:9,'stroke-linecap':'round',opacity:z<-0.05?0.35:1});(z<-0.05?back:front).push(seg)})}
    pts.forEach(function(p,i){var a=seq[i],b=PAIR[a],xm=(p.x1+p.x2)/2,op=0.45+0.55*Math.abs(p.c);
      rungs.push(S('line',{x1:p.x1,y1:p.y,x2:xm,y2:p.y,stroke:col(a),'stroke-width':5,opacity:op}));rungs.push(S('line',{x1:xm,y1:p.y,x2:p.x2,y2:p.y,stroke:col(b),'stroke-width':5,opacity:op}));
      if(Math.abs(p.c)>0.55){rungs.push(T((p.x1+xm)/2,p.y-0.5,a,{s:10,w:800,f:'var(--viz-bg)'}));rungs.push(T((xm+p.x2)/2,p.y-0.5,b,{s:10,w:800,f:'var(--viz-bg)'}))}});
    var k=[].concat(back,rungs,front);
    k.push(T(pts[0].x1,14,'5′',{s:13,w:800,f:'var(--strand1)'}),T(pts[0].x2,14,'3′',{s:13,w:800,f:'var(--strand2)'}),T(pts[n-1].x1,Hh-18,'3′',{s:13,w:800,f:'var(--strand1)'}),T(pts[n-1].x2,Hh-18,'5′',{s:13,w:800,f:'var(--strand2)'}));
    if(t>0.95&&n>10){var y0=pts[0].y,y1=pts[10].y;k.push(S('path',{d:'M300 '+y0+'h8V'+y1+'h-8',fill:'none',stroke:'var(--viz-mut)','stroke-width':1.5}),T(296,(y0+y1)/2-8,'1 skręt',{s:10,a:'end',f:'var(--viz-mut)'}),T(296,(y0+y1)/2+6,'≈ 3,4 nm',{s:10,a:'end',f:'var(--viz-mut)'}),T(296,(y0+y1)/2+20,'10 par',{s:10,a:'end',f:'var(--viz-mut)'}));
      k.push(S('path',{d:'M'+(cx-R)+' '+(Hh-6)+'v-6H'+(cx+R)+'v6',fill:'none',stroke:'var(--viz-mut)','stroke-width':1.5}),T(cx,Hh-4,'średnica ≈ 2 nm',{s:10,f:'var(--viz-mut)'}))}
    holder.innerHTML='';holder.appendChild(svg(320,Hh+4,'Podwójna helisa DNA',k));
    lab.textContent=t<0.05?'Model drabiny: nici proste, pary zasad jak szczeble.':t>0.95?'Podwójna helisa: nici owinięte wokół wspólnej osi; szkielet na zewnątrz, zasady w środku.':'Skręcanie drabiny w helisę: '+Math.round(t*100)+'%.';
    fx.toggle([b0,b1],t<0.05?0:t>0.95?1:-1)}
  rng.oninput=draw;draw()}});

/* ---- dwie sekwencje: informacja = kolejność ---- */
BIO.define('sekwencje',{opis:'Porównanie dwóch sekwencji, zaznaczone różnice; opcje a="ATGCC" b="ATGGC"',
mount:function(el,o){var a=cleanSeq(o.a,'ATGCC'),b=cleanSeq(o.b,'ATGGC'),d=0;
  function row(lbl,s,other){var r=H('div','bv-seq');r.appendChild(H('span','bv-end',lbl));s.split('').forEach(function(x,i){var c=H('span','bv-nt '+x+(other[i]!==x?' diff':''),x);r.appendChild(c)});return r}
  for(var i=0;i<Math.max(a.length,b.length);i++)if(a[i]!==b[i])d++;
  var w=H('div');w.style.display='grid';w.style.gap='8px';w.appendChild(row('1',a,b));w.appendChild(row('2',b,a));el.appendChild(w);
  el.appendChild(H('div','bv-info',d?'<b>'+(d===1?'Różnica na 1 pozycji':'Różnice na '+d+' pozycjach')+'</b>Te same litery, inna kolejność = inny zapis informacji. Czy zmieni się białko lub cecha — zależy od miejsca zmiany (gen, region regulatorowy, kodon synonimiczny; L011, L020).':'<b>Sekwencje identyczne</b>Ten sam zapis informacji.'))}});

/* ---- trener nici komplementarnej ---- */
BIO.define('trener-nici',{opis:'Trener: dopisz nić komplementarną (DNA→DNA lub DNA→RNA), pokazuje liczbę wiązań; opcje seq, tryb="rna"',
mount:function(el,o){var rna=o.tryb==='rna',seq=[],idx=0;
  var tools=H('div','bv-tools'),mode=btn(''),nowa=btn('Nowa sekwencja'),box=H('div','bv-scroll'),pick=H('div','bv-pick'),info=fx.infoBox('Kliknij literę, która pasuje do zasady nad znakiem „?”.');
  tools.appendChild(mode);tools.appendChild(nowa);el.appendChild(tools);el.appendChild(box);el.appendChild(pick);el.appendChild(info);
  function gen(first){seq=[];var s=first&&o.seq?cleanSeq(o.seq,'ATGC'):'';if(s)seq=s.split('');else{var L=6+Math.floor(Math.random()*4);for(var i=0;i<L;i++)seq.push('ATCG'[Math.floor(Math.random()*4)])}idx=0;render()}
  function partner(x){return(rna?PAIR_RNA:PAIR)[x]}
  function render(){mode.textContent='Tryb: '+(rna?'DNA → RNA':'DNA → DNA');box.innerHTML='';
    var r1=H('div','bv-seq'),r2=H('div','bv-seq'),r3=H('div','bv-seq');r1.appendChild(H('span','bv-end','5′'));r2.appendChild(H('span','bv-end',''));r3.appendChild(H('span','bv-end','3′'));
    seq.forEach(function(x,i){r1.appendChild(H('span','bv-nt '+x,x));var hb=H('span','bv-hb');if(i<idx)for(var k=0;k<HB[x];k++)hb.appendChild(document.createElement('i'));r2.appendChild(hb);
      r3.appendChild(i<idx?H('span','bv-nt '+partner(x),partner(x)):H('span','bv-nt '+(i===idx?'q':'e'),i===idx?'?':'·'))});
    r1.appendChild(H('span','bv-end','3′'));r3.appendChild(H('span','bv-end','5′'));[r1,r2,r3].forEach(function(r){r.style.flexWrap='nowrap';box.appendChild(r)});
    pick.innerHTML='';(rna?['A','U','C','G']:['A','T','C','G']).forEach(function(x){var b=H('button','bv-nt '+x,x);b.type='button';b.disabled=idx>=seq.length;b.onclick=function(){answer(x)};pick.appendChild(b)})}
  function answer(x){var cur=seq[idx],good=partner(cur);
    if(x===good){idx++;info.className='bv-info ok';info.innerHTML=idx>=seq.length?'<b>Sekwencja ukończona</b>Czy umiesz wyjaśnić wynik bez patrzenia do tabeli?':'<b>Dobrze</b>'+cur+' → '+good+(rna?(cur==='A'?' (w RNA zamiast T jest U).':'.'):' ('+HB[cur]+' wiązania wodorowe).');render()}
    else{info.className='bv-info bad';info.innerHTML='<b>Nie</b>Do '+cur+' pasuje '+good+'. Reguła: '+(rna?'A→U, T→A, C→G, G→C.':'A–T, C–G.')+(x==='U'&&!rna?' W DNA nie ma U.':'')}}
  mode.onclick=function(){rna=!rna;idx=0;info.className='bv-info';info.textContent='Tryb zmieniony. Zacznij od pierwszej zasady.';render()};nowa.onclick=function(){info.className='bv-info';info.textContent='Nowa sekwencja.';gen(false)};
  gen(true)}});

/* ---- pojemność zapisu: 4ⁿ vs 3ⁿ ---- */
BIO.define('pojemnosc',{opis:'Ile różnych sekwencji długości n: 4ⁿ (4 zasady) vs 3ⁿ; suwak n',
mount:function(el,o){var tools=H('div','bv-tools'),rng=document.createElement('input');rng.type='range';rng.min=1;rng.max=20;rng.value=o.n||10;rng.setAttribute('aria-label','Długość sekwencji');rng.style.flex='1 1 160px';
  var out=H('div','bv-grid');tools.appendChild(H('span','bv-score','długość n:'));tools.appendChild(rng);el.appendChild(tools);el.appendChild(out);
  function tile(t,v,s){var d=H('div','bv-tile');d.appendChild(H('h6',null,t));d.appendChild(H('div',null,'<span style="font:800 20px ui-monospace,Consolas,monospace;color:var(--accent);overflow-wrap:anywhere">'+v+'</span>'));if(s)d.appendChild(H('p',null,s));return d}
  function draw(){var n=+rng.value,a=Math.pow(4,n),b=Math.pow(3,n);out.innerHTML='';
    out.appendChild(tile('4 zasady: 4^'+n,fmt(a),'tyle różnych sekwencji o długości '+n));out.appendChild(tile('3 zasady: 3^'+n,fmt(b),'gdyby były tylko trzy „litery”'));
    out.appendChild(tile('stosunek',fmt(Math.round(a/b*10)/10)+'×','tyle razy więcej możliwości daje czwarta zasada'))}
  rng.oninput=draw;draw()}});

/* ---------------- odsłanianie grafik przy przewijaniu (delikatne) ---------------- */
if('IntersectionObserver' in window&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){
  var st=document.createElement('style');st.textContent='.bio-fig.rv{opacity:0;transform:translateY(10px)}.bio-fig.rv.in{opacity:1;transform:none;transition:opacity .5s ease,transform .5s ease}';document.head.appendChild(st);
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -40px 0px'});
  var mA=BIO.mountAll;BIO.mountAll=function(root){mA(root);(root||document).querySelectorAll('.bio-fig:not(.rv)').forEach(function(f){f.classList.add('rv');io.observe(f)})}}
})();
