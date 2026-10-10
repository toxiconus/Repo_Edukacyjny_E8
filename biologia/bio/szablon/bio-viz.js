/* bio-viz.js — biblioteka grafik i efektów lekcji BIO (v0.1, 2026-10-07).
   W lekcji (md):  @viz <id> {opcja="wartość"} | Tytuł | podpis
   Nowa grafika:   BIO.define('id', {opis:'…', mount:function(el, opt, fig){…}})  — katalog: biologia/bio/BIO_KATALOG.md
   Zasady: grafika statyczna + kliknięcie = wyjaśnienie; ruch tylko na żądanie ucznia (suwak/przycisk). Kolory tylko ze zmiennych CSS (--nt-A …). */
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
  function pick(t){t=t.toLowerCase();return/rna/.test(t)?ICO.rna():/dna|gen\b/.test(t)?ICO.dna():/białk/.test(t)?ICO.bialko():/funkc|enzym/.test(t)?ICO.funkcja():/cech|cesz|fenotyp|organizm/.test(t)?ICO.organizm():null}
  chain(el,(o.kroki||'').split('>').map(function(s,i){var p=s.split('|');return{b:p[0].trim(),s:(p[1]||'').trim(),k:k===i+1,ico:o.ikony==='nie'?null:pick(p[0])}}),o);
  if(o.boki){var sd=H('div','bv-side');o.boki.split(';').forEach(function(s){if(s.trim())sd.appendChild(H('span',null,s.trim()))});el.appendChild(sd)}}});

/* ---- od organizmu do genu ---- */
function ico(w,h,kids){var s=svg(w,h,'',kids);s.setAttribute('aria-hidden','true');s.setAttribute('class','bv-ico');return s}
var ICO={
 organizm:function(){return ico(120,80,[S('circle',{cx:60,cy:16,r:10,fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':2}),S('path',{d:'M42 72V44q0-14 18-14t18 14v28',fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':2,'stroke-linejoin':'round'})])},
 komorka:function(){return ico(120,80,[S('ellipse',{cx:60,cy:40,rx:50,ry:32,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':2.5}),S('circle',{cx:64,cy:40,r:15,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2}),S('ellipse',{cx:30,cy:50,rx:9,ry:5,fill:'var(--mito-bg)',stroke:'var(--mito)','stroke-width':1.5})])},
 jadro:function(){return ico(120,80,[S('circle',{cx:60,cy:40,r:34,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2.5}),g.squiggle(60,40,30,1),g.squiggle(58,42,26,3)])},
 chromosom:function(){return ico(120,80,[g.chromosome(60,40,66)])},
 dna:function(){var s=ico(120,80,[]);var gg=g.miniHelix(0,0,60,100,1.6);gg.setAttribute('transform','translate(110 10) rotate(90)');s.appendChild(gg);return s},
 rna:function(){var d='M8 46',t=[];for(var i=0;i<=10;i++){var x=8+i*10.4,y=46+8*Math.sin(i*0.9);d+='L'+x.toFixed(1)+' '+y.toFixed(1);if(i<10)t.push(S('line',{x1:x,y1:y,x2:x,y2:y-14,stroke:['var(--nt-A)','var(--nt-U)','var(--nt-C)','var(--nt-G)'][i%4],'stroke-width':3,'stroke-linecap':'round'}))}
   return ico(120,80,t.concat([S('path',{d:d,fill:'none',stroke:'var(--strand1)','stroke-width':3.5,'stroke-linecap':'round','stroke-linejoin':'round'})]))},
 bialko:function(){var pts=[[14,60],[26,48],[22,32],[36,24],[50,32],[46,48],[58,58],[72,50],[70,34],[84,26],[98,34],[96,50],[106,62]],k=[S('path',{d:'M'+pts.map(function(p){return p.join(' ')}).join('L'),fill:'none',stroke:'var(--viz-mut)','stroke-width':2.5})];
   pts.forEach(function(p,i){k.push(S('circle',{cx:p[0],cy:p[1],r:6,fill:['#ffd8a8','#c5f6fa','#d3f9d8','#e5dbff','#ffe3e3'][i%5],stroke:'var(--viz-mut)','stroke-width':1.2}))});return ico(120,80,k)},
 funkcja:function(){return ico(120,80,[S('path',{d:'M60 40L92 22A36 36 0 1 0 92 58Z',fill:'var(--accent-soft)',stroke:'var(--accent)','stroke-width':2.5,'stroke-linejoin':'round',transform:'translate(-14 0)'}),
   S('circle',{cx:96,cy:40,r:9,fill:'var(--phos-bg)',stroke:'var(--phos)','stroke-width':2}),S('path',{d:'M104 28l8-6M104 52l8 6',stroke:'var(--phos)','stroke-width':2,'stroke-linecap':'round'})])},
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
function cellTile(title,sub,s){var t=H('div','bv-tile');t.appendChild(H('h6',null,title));t.appendChild(s);if(sub)t.appendChild(H('p',null,sub));return t}
function mito(cx,cy,rx,ry,rot){var c='';for(var i=0;i<5;i++){var x=cx-rx*0.7+i*rx*0.35;c+='M'+x+' '+(cy+(i%2?-ry*0.75:ry*0.75))+'V'+(cy+(i%2?ry*0.1:-ry*0.1))}
  return S('g',{'data-k':'mito',transform:rot?'rotate('+rot+' '+cx+' '+cy+')':null},[S('ellipse',{cx:cx,cy:cy,rx:rx,ry:ry,fill:'var(--mito-bg)',stroke:'var(--mito)','stroke-width':2}),
   S('path',{d:c,fill:'none',stroke:'var(--mito)','stroke-width':1.4,'stroke-linecap':'round',opacity:0.8}),S('circle',{cx:cx+rx*0.45,cy:cy,r:Math.min(4,ry*0.4),fill:'none',stroke:'var(--dna-ink)','stroke-width':1.6})])}
function nucleus(cx,cy,r,seed){return S('g',{'data-k':'jadro'},[S('circle',{cx:cx,cy:cy,r:r,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2.5}),
  S('circle',{cx:cx,cy:cy,r:r-4,fill:'none',stroke:'var(--nucleus)','stroke-width':0.8,opacity:0.6}),g.squiggle(cx,cy,r*0.85,seed),S('circle',{cx:cx+r*0.3,cy:cy-r*0.25,r:r*0.18,fill:'var(--nucleus)',opacity:0.55})])}
BIO.define('gdzie-dna',{opis:'Gdzie jest DNA: komórka zwierzęca, roślinna, bakteria, krew (erytrocyt bez DNA, leukocyt z DNA) — kliknij element',
mount:function(el){var grid=H('div','bv-grid c2');
  var zw=svg(200,140,'Komórka zwierzęca',[S('ellipse',{cx:100,cy:70,rx:92,ry:60,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':3}),
    S('path',{d:'M40 40q12-8 24 0t24 0M126 104q10-7 20 0t20 0',fill:'none',stroke:'var(--viz-line)','stroke-width':2}),
    nucleus(106,64,30,2),mito(44,88,20,10),mito(158,104,18,9,-20)]);
  var ro=svg(200,140,'Komórka roślinna',[S('rect',{x:6,y:6,width:188,height:128,rx:10,fill:'none',stroke:'var(--wall)','stroke-width':5}),
    S('rect',{x:13,y:13,width:174,height:114,rx:7,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':2}),
    S('rect',{x:74,y:22,width:104,height:66,rx:22,fill:'#ffffff',stroke:'var(--viz-line)','stroke-width':1.5}),T(126,55,'wakuola',{s:10,f:'var(--viz-mut)',w:500}),
    nucleus(42,46,23,4),
    S('g',{'data-k':'chloro'},[S('ellipse',{cx:96,cy:108,rx:24,ry:11,fill:'var(--chloro-bg)',stroke:'var(--chloro)','stroke-width':2}),S('path',{d:'M80 104h10M80 108h10M80 112h10M96 104h10M96 108h10M96 112h10',stroke:'var(--chloro)','stroke-width':2}),S('circle',{cx:112,cy:108,r:3.5,fill:'none',stroke:'var(--dna-ink)','stroke-width':1.6})]),
    mito(156,108,17,8)]);
  var ba=svg(200,140,'Bakteria',[S('path',{d:'M186 70q8 -14 12 -30',fill:'none',stroke:'var(--cell-mem)','stroke-width':1.6}),S('rect',{x:14,y:30,width:172,height:80,rx:40,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':3}),
    S('g',{'data-k':'nukleoid'},[S('ellipse',{cx:92,cy:70,rx:46,ry:26,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':1,'stroke-dasharray':'3 3'}),g.squiggle(92,70,28,5),g.squiggle(94,69,22,8)]),
    S('g',{'data-k':'plazmid'},[S('circle',{cx:154,cy:56,r:9,fill:'none',stroke:'var(--dna-ink)','stroke-width':2.2}),S('circle',{cx:160,cy:88,r:6,fill:'none',stroke:'var(--dna-ink)','stroke-width':2})]),
    S('g',{'data-k':'rybosom'},[S('circle',{cx:40,cy:62,r:2.5,fill:'var(--viz-mut)'}),S('circle',{cx:48,cy:84,r:2.5,fill:'var(--viz-mut)'}),S('circle',{cx:140,cy:98,r:2.5,fill:'var(--viz-mut)'})])]);
  var kr=svg(200,140,'Krew: erytrocyt i leukocyt',[
    S('g',{'data-k':'erytro'},[S('circle',{cx:58,cy:52,r:40,fill:'#f2b0ae',stroke:'#c0504d','stroke-width':2.5}),S('circle',{cx:58,cy:52,r:19,fill:'#f8d2d0'}),
      S('path',{d:'M22 112q0-10 12-10q12 0 24 6q12-6 24-6q12 0 12 10t-12 10q-12 0-24-6q-12 6-24 6q-12 0-12-10z',fill:'#f2b0ae',stroke:'#c0504d','stroke-width':2}),T(58,134,'bez DNA',{s:12,w:800,f:'#b83a45'})]),
    S('g',{'data-k':'leuko'},[S('circle',{cx:150,cy:62,r:38,fill:'#f1ecf7',stroke:'var(--nucleus)','stroke-width':2.5}),
      S('path',{d:'M128 58q-6-18 10-20q8-14 22-4q16-2 16 14q10 12-4 22q-6 14-22 6q-18 6-22-18z',fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2}),g.squiggle(150,60,16,6),T(150,116,'ma DNA',{s:12,w:800,f:'var(--dna-ink)'})])]);
  grid.appendChild(cellTile('Komórka zwierzęca','jądro + mitochondria',zw));grid.appendChild(cellTile('Komórka roślinna','jądro + mitochondria + chloroplasty',ro));
  grid.appendChild(cellTile('Bakteria','bez jądra: nukleoid + plazmidy',ba));grid.appendChild(cellTile('Krew człowieka','erytrocyt bez DNA, leukocyt z DNA',kr));
  el.appendChild(grid);var box=fx.infoBox();el.appendChild(box);
  el.appendChild(H('div','bv-legend','<span><i style="background:var(--nucleus-bg);border:2px solid var(--nucleus)"></i>jądro</span><span><i style="background:var(--mito-bg);border:2px solid var(--mito)"></i>mitochondrium</span><span><i style="background:var(--chloro-bg);border:2px solid var(--chloro)"></i>chloroplast</span><span><i style="border:2px solid var(--dna-ink)"></i>DNA</span>'));
  fx.info(grid,box,{
   jadro:['Jądro komórkowe','U eukariontów (zwierzęta, rośliny, grzyby) tu jest większość DNA — w postaci chromosomów. Ciemniejsza plamka to jąderko.'],
   mito:['Mitochondrium — mtDNA','Mitochondria mają własne, małe, koliste DNA (mtDNA). U człowieka dziedziczy się ono prawie zawsze po matce.'],
   chloro:['Chloroplast — cpDNA','Chloroplasty roślin i glonów też mają własne koliste DNA (cpDNA).'],
   nukleoid:['Nukleoid','Bakterie nie mają jądra. Ich główne, koliste DNA leży w cytoplazmie, w obszarze zwanym nukleoidem (bez błony).'],
   plazmid:['Plazmidy','Małe koliste cząsteczki DNA u wielu bakterii, dodatkowe wobec DNA nukleoidu (np. geny oporności na antybiotyki).'],
   rybosom:['Rybosomy','Na nich powstają białka według informacji z DNA (przez RNA). Same nie zawierają DNA.'],
   erytro:['Dojrzały erytrocyt człowieka','Krążek wklęsły z obu stron (widok z góry i z boku). Nie ma jądra ani mitochondriów, więc nie zawiera DNA.'],
   leuko:['Leukocyt (biała krwinka)','Ma jądro (często płatowate) z pełnym DNA. To z leukocytów pochodzi DNA w badaniach krwi.']},'jadro')}});

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

/* ---- komórka: wspólny rdzeń + nakładki typów (L001) ---- */
var KN_WARSTWY=[['jadro','jądro'],['mito','mitochondria'],['chloro','chloroplasty'],['wakuola','duża wakuola'],['sciana','ściana komórkowa'],['plazmid','plazmid']];
var KN_TYPY=[
 {k:'rdzen',n:'tylko rdzeń',w:[],opis:'Błona komórkowa, cytoplazma, rybosomy i materiał genetyczny (DNA) — to ma każda komórka.'},
 {k:'bakteria',n:'bakteria',w:['sciana','plazmid'],sc:'mureina',opis:'Komórka prokariotyczna: DNA leży w cytoplazmie (nukleoid), brak jądra i organelli błoniastych; ściana z mureiny, często plazmidy.'},
 {k:'zwierzeca',n:'zwierzęca',w:['jadro','mito'],opis:'Jądro i mitochondria, brak ściany komórkowej, chloroplastów i dużej wakuoli.'},
 {k:'roslinna',n:'roślinna',w:['jadro','mito','chloro','wakuola','sciana'],sc:'celuloza',opis:'Jądro, mitochondria, chloroplasty, duża wakuola i ściana z celulozy.'},
 {k:'grzyb',n:'grzyb',w:['jadro','mito','wakuola','sciana'],sc:'chityna',opis:'Jądro, mitochondria, wakuola i ściana z chityny; brak chloroplastów — grzyb jest cudzożywny.'}];
BIO.define('komorka-nakladki',{opis:'Komórka z warstwami: wspólny rdzeń (błona, cytoplazma, rybosomy, DNA) + nakładki — jądro, mitochondria, chloroplasty, wakuola, ściana, plazmid; przyciski typów (bakteria, zwierzęca, roślinna, grzyb) i pojedynczych warstw; opcja start="rdzen|bakteria|zwierzeca|roslinna|grzyb"',
mount:function(el,o){var on={},typ=null,typy=H('div','bv-tools'),warstwy=H('div','bv-tools'),hold=H('div'),box=H('div','bv-info');
  [typy,warstwy,hold,box].forEach(function(e){el.appendChild(e)});
  function ustaw(t){on={};t.w.forEach(function(w){on[w]=1})}
  function rozpoznaj(){var k=KN_WARSTWY.map(function(w){return on[w[0]]?1:0}).join('');
    return KN_TYPY.filter(function(t){return KN_WARSTWY.map(function(w){return t.w.indexOf(w[0])>=0?1:0}).join('')===k})[0]||null}
  function rys(){var t=rozpoznaj(),sc=t&&t.sc?t.sc:null,R=[];
    var s=svg(460,240,'Komórka: '+(t?t.n:'zestaw własny'),R);
    if(on.sciana){s.appendChild(S('rect',{x:8,y:8,width:444,height:224,rx:on.jadro?14:70,fill:'var(--wall)','fill-opacity':0.15,stroke:'var(--wall)','stroke-width':7}));
      s.appendChild(T(230,22,'ściana komórkowa'+(sc?' ('+sc+')':''),{s:10.5,f:'var(--viz-mut)'}))}
    s.appendChild(S('rect',{x:20,y:30,width:420,height:190,rx:on.jadro?10:64,fill:'var(--cell-cyto)',stroke:'var(--cell-mem)','stroke-width':3}));
    s.appendChild(T(110,212,'błona komórkowa',{s:10,f:'var(--cell-mem)'}));
    if(on.wakuola){s.appendChild(S('rect',{x:196,y:48,width:on.chloro?150:120,height:92,rx:30,fill:'#ffffff',stroke:'var(--viz-line)','stroke-width':1.6}));s.appendChild(T(on.chloro?271:256,94,'wakuola',{s:11,f:'var(--viz-mut)',w:500}))}
    for(var i=0;i<26;i++){var x=40+((i*67)%380),y=46+((i*41)%160);if(on.wakuola&&x>190&&x<352&&y>44&&y<144)continue;s.appendChild(S('circle',{cx:x,cy:y,r:2.2,fill:'var(--viz-mut)',opacity:0.7}))}
    s.appendChild(T(230,212,'rybosomy (kropki)',{s:9.5,f:'var(--viz-mut)',w:500}));
    if(on.jadro){s.appendChild(nucleus(110,104,38,3));s.appendChild(T(110,156,'jądro (DNA)',{s:10.5}))}
    else{s.appendChild(S('g',{},[S('ellipse',{cx:150,cy:118,rx:62,ry:34,fill:'none',stroke:'var(--nucleus)','stroke-width':1.2,'stroke-dasharray':'4 3'}),g.squiggle(150,118,40,5),g.squiggle(152,116,30,9)]));
      s.appendChild(T(150,164,'DNA w cytoplazmie (nukleoid)',{s:10.5}))}
    if(on.mito){s.appendChild(mito(330,188,22,10,-12));s.appendChild(mito(62,186,17,8,20));s.appendChild(T(330,210,'mitochondrium',{s:10}))}
    if(on.chloro){[[392,80,-20],[388,136,15],[178,190,0]].forEach(function(c){s.appendChild(S('g',{transform:'rotate('+c[2]+' '+c[0]+' '+c[1]+')'},[S('ellipse',{cx:c[0],cy:c[1],rx:24,ry:11,fill:'var(--chloro-bg)',stroke:'var(--chloro)','stroke-width':2}),S('path',{d:'M'+(c[0]-14)+' '+(c[1]-4)+'h10M'+(c[0]-14)+' '+c[1]+'h10M'+(c[0]-14)+' '+(c[1]+4)+'h10M'+(c[0]+2)+' '+(c[1]-4)+'h10M'+(c[0]+2)+' '+c[1]+'h10M'+(c[0]+2)+' '+(c[1]+4)+'h10',stroke:'var(--chloro)','stroke-width':2})]))});
      s.appendChild(T(392,60,'chloroplasty',{s:10,f:'var(--chloro)'}))}
    if(on.plazmid){var px=on.wakuola?236:280,py=on.wakuola?176:90;s.appendChild(S('circle',{cx:px,cy:py,r:11,fill:'none',stroke:'var(--dna-ink)','stroke-width':2}));s.appendChild(on.wakuola?T(px+16,py,'plazmid',{s:10,a:'start'}):T(px,py+22,'plazmid',{s:10}))}
    return{s:s,t:t}}
  function opis(t){var lista=['błona','cytoplazma','rybosomy',on.jadro?'jądro z DNA':'DNA w cytoplazmie'].concat(KN_WARSTWY.filter(function(w){return w[0]!=='jadro'&&on[w[0]]}).map(function(w){return w[1]}));
    var h='<b>'+(t&&t.k==='rdzen'?'Wspólny rdzeń każdej komórki':t?'To pasuje do komórki: '+t.n:'Zestaw własny — nie pasuje do żadnego z czterech typów')+'</b><span>'+(t?t.opis:'')+'</span><span>Na rysunku: '+lista.join(', ')+'.</span>';
    if(!t&&!on.jadro&&(on.mito||on.chloro))h+='<span>Uwaga: mitochondria i chloroplasty mają tylko komórki z jądrem (eukariotyczne). Bakteria ich nie ma.</span>';
    else if(!t&&on.chloro&&!on.sciana)h+='<span>Chloroplasty bez ściany: tak bywa u niektórych protistów (np. euglena), ale nie u typowej rośliny.</span>';
    else if(!t&&on.plazmid&&on.jadro)h+='<span>Plazmidy są typowe dla bakterii; w komórkach z jądrem zdarzają się rzadko (np. u drożdży).</span>';
    else if(!t)h+='<span>Porównaj z przyciskami typów u góry: czego brakuje, a co jest za dużo?</span>';
    return h}
  function przyciski(){typy.innerHTML='';warstwy.innerHTML='';
    KN_TYPY.forEach(function(t){var b=btn(t.n,function(){ustaw(t);typ=t.k;draw()});if(typ===t.k)b.className+=' on';b.setAttribute('aria-pressed',String(typ===t.k));typy.appendChild(b)});
    KN_WARSTWY.forEach(function(w){var b=btn((on[w[0]]?'− ':'+ ')+w[1],function(){if(on[w[0]])delete on[w[0]];else on[w[0]]=1;typ=null;draw()});if(on[w[0]])b.className+=' on';b.setAttribute('aria-pressed',String(!!on[w[0]]));warstwy.appendChild(b)})}
  function draw(){var r=rys();hold.innerHTML='';hold.appendChild(r.s);box.innerHTML=opis(r.t);przyciski()}
  var st=KN_TYPY.filter(function(t){return t.k===(o&&o.start)})[0]||KN_TYPY[0];ustaw(st);typ=st.k;draw()}});

/* ---- „nie wszystko widać”: mikroskop świetlny vs model szkolny (L001) ---- */
BIO.define('mikroskop-model',{opis:'Ta sama komórka liścia moczarki w dwóch widokach: obraz z mikroskopu świetlnego (rozmyty, widać ścianę, chloroplasty, wakuolę; jądro po barwieniu) i model szkolny ze wszystkimi strukturami podpisanymi; przełącznik barwienia; opcja start="mikroskop|model"',
mount:function(el,o){var uid='bm'+Math.random().toString(36).slice(2,7),widok=(o&&o.start==='model')?'model':'mikroskop',barw=false,tools=H('div','bv-tools'),hold=H('div'),box=H('div','bv-info');
  [tools,hold,box].forEach(function(e){el.appendChild(e)});
  var CH=[[150,52],[196,48],[248,56],[300,54],[96,90],[104,140],[314,104],[322,152],[140,182],[204,186],[262,180]];
  function rys(){var mik=widok==='mikroskop',s=svg(440,220,mik?'Obraz komórki w mikroskopie świetlnym':'Model szkolny komórki roślinnej',[]);
    var d=S('defs',{},[S('filter',{id:uid+'b'},[S('feGaussianBlur',{stdDeviation:mik?1.6:0})]),S('clipPath',{id:uid+'c'},[S('circle',{cx:220,cy:110,r:150})]),S('radialGradient',{id:uid+'p'},[S('stop',{offset:'60%','stop-color':'#fbfbf2'}),S('stop',{offset:'100%','stop-color':'#d9d9c9'})])]);s.appendChild(d);
    if(mik){s.appendChild(S('circle',{cx:220,cy:110,r:150,fill:'url(#'+uid+'p)'}));}
    var k=S('g',mik?{filter:'url(#'+uid+'b)','clip-path':'url(#'+uid+'c)'}:{});s.appendChild(k);
    if(mik){[[-150,0],[150,0]].forEach(function(p){k.appendChild(S('rect',{x:70+p[0],y:24+p[1],width:280,height:172,rx:8,fill:'#eef2df',stroke:'#7d8a5c','stroke-width':4}))})}
    k.appendChild(S('rect',{x:70,y:24,width:280,height:172,rx:8,fill:mik?'#eef2df':'var(--cell-cyto)',stroke:mik?'#7d8a5c':'var(--wall)','stroke-width':mik?4:6}));
    if(!mik)k.appendChild(S('rect',{x:76,y:30,width:268,height:160,rx:5,fill:'none',stroke:'var(--cell-mem)','stroke-width':1.6}));
    k.appendChild(S('rect',{x:130,y:72,width:170,height:84,rx:26,fill:mik?'#f7f8ee':'#ffffff',stroke:mik?'#c9cdb4':'var(--viz-line)','stroke-width':1.2}));
    CH.forEach(function(c){k.appendChild(S('ellipse',{cx:c[0],cy:c[1],rx:mik?9:11,ry:mik?6:6,fill:mik?'#5f9a3a':'var(--chloro-bg)',stroke:mik?'none':'var(--chloro)','stroke-width':1.6}))});
    if(mik){if(barw){k.appendChild(S('circle',{cx:108,cy:60,r:15,fill:'#6d5aa8',opacity:0.75}));}else{k.appendChild(S('circle',{cx:108,cy:60,r:15,fill:'#e6e8d6',stroke:'#cfd2bb','stroke-width':1}))}}
    else{k.appendChild(nucleus(108,60,16,6));[[232,168,0],[96,172,20]].forEach(function(m){k.appendChild(mito(m[0],m[1],13,6,m[2]))});
      [[100,110],[90,40],[170,40],[226,40],[276,36],[330,80],[330,130],[120,160],[180,165],[290,166],[86,190],[340,186]].forEach(function(p){k.appendChild(S('circle',{cx:p[0],cy:p[1],r:1.8,fill:'var(--viz-mut)',opacity:0.8}))})}
    if(mik){s.appendChild(T(220,212,'×400 · '+(barw?'po barwieniu':'bez barwienia'),{s:11,f:'var(--viz-mut)'}))}
    else{[[356,34,350,34,'ściana'],[356,52,345,52,'błona'],[356,104,325,104,'chloroplast'],[356,130,300,130,'wakuola'],[356,168,245,168,'mitochondrium'],[64,60,92,60,'jądro'],[64,110,98,110,'rybosom']].forEach(function(l){var L=l[0]<l[2];s.appendChild(S('line',{x1:L?l[0]+3:l[0]-3,y1:l[1],x2:l[2],y2:l[3],stroke:'var(--viz-mut)','stroke-width':1}));s.appendChild(T(l[0],l[1],l[4],{s:10.5,a:L?'end':'start'}))})}
    return s}
  function opis(){if(widok==='model')return'<b>Model szkolny</b><span>Narysowane i podpisane są wszystkie struktury: ściana, błona, jądro, wakuola, chloroplasty, mitochondria, rybosomy. To uproszczenie — kształty i proporcje są umowne, a zwykle nie da się zobaczyć ich wszystkich jednocześnie.</span>';
    return'<b>Mikroskop świetlny (ok. ×400)</b><span>Wyraźnie widać: ścianę komórkową (granice komórek) i zielone chloroplasty; wakuolę rozpoznajemy po pustym, jasnym środku. '+(barw?'Po barwieniu (np. płynem Lugola) jądro staje się widoczne jako ciemniejsza plamka.':'Jądro jest słabo widoczne — trzeba zabarwić preparat.')+'</span><span>Nie widać: rybosomów (ok. 25 nm) ani szczegółów mitochondriów — są mniejsze niż zdolność rozdzielcza mikroskopu świetlnego (ok. 0,2 µm). Błony komórkowej nie odróżnisz od ściany.</span>'}
  function draw(){hold.innerHTML='';hold.appendChild(rys());box.innerHTML=opis();tools.innerHTML='';
    [['mikroskop','widok w mikroskopie'],['model','model szkolny']].forEach(function(v){var b=btn(v[1],function(){widok=v[0];draw()});if(widok===v[0])b.className+=' on';b.setAttribute('aria-pressed',String(widok===v[0]));tools.appendChild(b)});
    if(widok==='mikroskop'){var b=btn(barw?'usuń barwienie':'zabarw preparat',function(){barw=!barw;draw()});if(barw)b.className+=' on';tools.appendChild(b)}}
  draw()}});
})();

/* ---------- Wzorcownia → biblioteka (2026-10-09): kod genetyczny, Punnett, transport przez błonę, sieć troficzna ----------
   Prototypy z wizualizacje-projekty/wzorcownia.html. Rysują się w swoim elemencie (bez globalnych id). */
(function(){
var BIO=window.BIO;if(!BIO||!BIO.define||BIO.WZOR)return;BIO.WZOR=1;
var NS='http://www.w3.org/2000/svg',UID=0;
var css=document.createElement('style');css.textContent=
'.bw-seg{display:flex;flex-wrap:wrap;gap:4px}.bw-out{display:grid;gap:4px}.bw-tbl{overflow-x:auto;margin-top:8px}.bw-tbl table{border-collapse:collapse;width:100%;font-size:13px}.bw-tbl th,.bw-tbl td{padding:4px 6px;border-bottom:1px solid var(--border,#dde4e8);text-align:left;vertical-align:top}'+
'.bw-mono{font-family:ui-monospace,Consolas,monospace}.bw-svg{width:100%;max-width:520px;display:block;background:var(--surface,#fff);border:1px solid var(--border,#dde4e8);border-radius:8px}'+
'.bw-codons{display:flex;flex-wrap:wrap;gap:6px}.bw-cod{border:1px solid var(--border,#dde4e8);border-radius:7px;padding:4px;display:grid;gap:2px;font:14px ui-monospace,Consolas,monospace;text-align:center;min-width:76px}'+
'.bw-cod .r{display:flex;justify-content:center;gap:1px}.bw-cod .r span{width:22px;display:inline-block}.bw-cod .r.k span{cursor:pointer;border-radius:4px;background:var(--surface-soft,#eef3f1)}.bw-cod .r.k span.mut{background:#b8860b;color:#fff}'+
'.bw-cod .r.m{color:var(--accent,#3f7a28);font-weight:700}.bw-cod .aa{font-weight:700;border-top:1px solid var(--border,#dde4e8);padding-top:2px}.bw-cod.chg{border-color:#b8860b}.bw-cod.stop .aa{color:#b23b2a}.bw-cod.off{opacity:.45}'+
'.bw-key{display:grid;grid-template-columns:auto 1fr;gap:2px 8px;font-size:12.5px;margin-bottom:6px}.bw-key b{font-family:ui-monospace,monospace}'+
'.bw-pun table{max-width:420px}.bw-pun td,.bw-pun th{text-align:center!important;border:1px solid var(--border,#dde4e8)}.bw-pun td{font:600 14px ui-monospace,monospace;padding:8px 4px}.bw-pun td small{display:block;font:400 11.5px Inter,system-ui;opacity:.8}'+
'.bw-bars{display:grid;gap:4px}.bw-bar{display:grid;grid-template-columns:minmax(0,9.5em) 1fr 3.2em;gap:8px;align-items:center;font-size:13px}.bw-bar .t{height:12px;background:var(--surface-soft,#eef3f1);border-radius:3px;overflow:hidden}.bw-bar .t i{display:block;height:100%;background:var(--accent,#3f7a28)}.bw-bar .v{text-align:right;font-variant-numeric:tabular-nums}'+
'.bw-svg text{font-family:system-ui,sans-serif}.bw-sel{font:600 12.5px Inter,system-ui;border:1px solid var(--border-strong,#c7d0d6);border-radius:7px;padding:5px 8px;background:var(--surface,#fff);color:inherit}';
document.head.appendChild(css);
function S(t,a,x){var e=document.createElementNS(NS,t);if(a)for(var k in a)e.setAttribute(k,a[k]);if(x!=null)e.textContent=x;return e}
function H(t,a,h){var e=document.createElement(t);if(a)for(var k in a){if(k==='text')e.textContent=a[k];else e.setAttribute(k,a[k])}if(h!=null)e.innerHTML=h;return e}
function clr(e){while(e.firstChild)e.removeChild(e.firstChild)}
function seg(box,items,cur,cb){clr(box);items.forEach(function(it){var b=H('button',{type:'button','class':'bv-btn'+(it[0]===cur?' on':''),'aria-pressed':String(it[0]===cur)});b.textContent=it[1];b.onclick=function(){cb(it[0])};box.appendChild(b)})}
function info(){return H('div',{'class':'bv-info bw-out','aria-live':'polite'})}
function key(el,fn){el.setAttribute('role','button');el.setAttribute('tabindex','0');el.onclick=fn;el.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fn()}}}

/* ---- kod genetyczny: DNA → mRNA → białko, mutacje punktowe ---- */
var TT='FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG',IX={T:0,C:1,A:2,G:3};
var AA3={F:'Phe',L:'Leu',S:'Ser',Y:'Tyr',C:'Cys',W:'Trp',P:'Pro',H:'His',Q:'Gln',R:'Arg',I:'Ile',M:'Met',T:'Thr',N:'Asn',K:'Lys',V:'Val',A:'Ala',D:'Asp',E:'Glu',G:'Gly','*':'STOP'};
var PLN={Phe:'fenyloalanina',Leu:'leucyna',Ser:'seryna',Tyr:'tyrozyna',Cys:'cysteina',Trp:'tryptofan',Pro:'prolina',His:'histydyna',Gln:'glutamina',Arg:'arginina',Ile:'izoleucyna',Met:'metionina (START)',Thr:'treonina',Asn:'asparagina',Lys:'lizyna',Val:'walina',Ala:'alanina',Asp:'kwas asparaginowy',Glu:'kwas glutaminowy',Gly:'glicyna',STOP:'koniec translacji'};
var COMP={A:'T',T:'A',G:'C',C:'G'},NEXT={A:'C',C:'G',G:'T',T:'A'};
function trc(c){return TT[16*IX[c[0]]+4*IX[c[1]]+IX[c[2]]]}
function prot(s){var o=[],on=true;for(var i=0;i+2<s.length;i+=3){var a=AA3[trc(s.slice(i,i+3))];o.push({a:a,on:on});if(a==='STOP')on=false}return o}
BIO.define('kod-genetyczny',{opis:'DNA (nić kodująca i matrycowa) → mRNA → aminokwasy; klik w zasadę = mutacja punktowa (cicha, zmiany sensu, nonsensowna, utrata START); opcja seq="ATG…" (wielokrotność 3)',
mount:function(el,o){var ORIG=String(o.seq||'ATGTTTGGCTGGAAATGCTAA').toUpperCase().replace(/[^ACGT]/g,'');ORIG=ORIG.slice(0,ORIG.length-ORIG.length%3)||'ATGTAA';var seq=ORIG.split('');
  var kb=H('div',{'class':'bw-key'},'<b>1</b><span>nić kodująca DNA 5′→3′ (kliknij zasadę)</span><b>2</b><span>nić matrycowa DNA 3′→5′</span><b>3</b><span>mRNA 5′→3′ (U zamiast T)</span><b>4</b><span>aminokwas</span>'),
   box=H('div',{'class':'bw-codons'}),tools=H('div',{'class':'bv-tools'}),out=info();[kb,box,tools,out].forEach(function(e){el.appendChild(e)});
  var rb=H('button',{type:'button','class':'bv-btn'},'Przywróć sekwencję');rb.onclick=function(){seq=ORIG.split('');draw()};tools.appendChild(rb);
  function chain(P){var r=[];for(var k=0;k<P.length;k++){if(P[k].a==='STOP')break;r.push(P[k].a)}return r.join('–')}
  function draw(){clr(box);var P0=prot(ORIG),P1=prot(seq.join('')),lost=seq.slice(0,3).join('')!=='ATG';
   for(var i=0;i<seq.length;i+=3){var ci=i/3,c=H('div'),r1=H('div',{'class':'r k'}),r2=H('div',{'class':'r'}),r3=H('div',{'class':'r m'});
    for(var j=0;j<3;j++)(function(p){var s=H('span',{text:seq[p],'aria-label':'zasada '+(p+1)+': '+seq[p]});if(seq[p]!==ORIG[p])s.className='mut';key(s,function(){seq[p]=NEXT[seq[p]];draw()});r1.appendChild(s);r2.appendChild(H('span',{text:COMP[seq[p]]}));r3.appendChild(H('span',{text:seq[p]==='T'?'U':seq[p]}))})(i+j);
    var a=P1[ci],cl='bw-cod';if(a.a!==P0[ci].a)cl+=' chg';if(a.a==='STOP')cl+=' stop';if(!a.on||lost)cl+=' off';c.className=cl;[r1,r2,r3].forEach(function(r){c.appendChild(r)});c.appendChild(H('div',{'class':'aa',text:a.a,title:PLN[a.a]}));box.appendChild(c)}
   var mu=[];seq.forEach(function(b,p){if(b!==ORIG[p])mu.push(p)});var h;
   if(!mu.length)h='<b>Sekwencja wyjściowa</b><span>Białko: '+chain(P0)+' (potem STOP). Kliknij literę w górnym wierszu.</span>';
   else if(lost)h='<b>Utracony kodon START</b><span>Pierwszy kodon nie jest już AUG: w tym modelu translacja nie rusza i białko nie powstaje.</span>';
   else{var ks=[],seen={};mu.forEach(function(p){var ci=Math.floor(p/3);if(seen[ci])return;seen[ci]=1;var a0=P0[ci].a,a1=P1[ci].a;
     ks.push(a0===a1?'cicha (kodon '+(ci+1)+': nadal '+a0+')':a1==='STOP'?'nonsensowna (kodon '+(ci+1)+': '+a0+' → STOP, białko skrócone)':a0==='STOP'?'utrata kodonu STOP (białko wydłużone)':'zmiany sensu (kodon '+(ci+1)+': '+a0+' → '+a1+')')});
    h='<b>Mutacja '+ks.join('; ')+'</b><span>Było: '+chain(P0)+'</span><span>Jest: '+(chain(P1)||'brak aminokwasów')+'</span>'}
   out.innerHTML=h}
  draw()}});

/* ---- krzyżówka genetyczna (szachownica Punnetta) ---- */
var MODES={
 A:{n:'jedna cecha (A/a)',rank:{A:0,a:1},m:[['A','A'],['A','a'],['a','a']],f:[['A','A'],['A','a'],['a','a']],dm:1,df:1,ph:function(g){return g.indexOf('A')>=0?'kwiat purpurowy':'kwiat biały'},
  note:'Przykład Mendla: groch, allel A — barwa purpurowa (dominujący), a — biała (recesywny). Aa × Aa daje 3 : 1 w fenotypach i 1 : 2 : 1 w genotypach.'},
 K:{n:'grupy krwi AB0',rank:{'Iᴬ':0,'Iᴮ':1,'i':2},m:[['Iᴬ','Iᴬ'],['Iᴬ','i'],['Iᴮ','Iᴮ'],['Iᴮ','i'],['Iᴬ','Iᴮ'],['i','i']],f:[['Iᴬ','Iᴬ'],['Iᴬ','i'],['Iᴮ','Iᴮ'],['Iᴮ','i'],['Iᴬ','Iᴮ'],['i','i']],dm:1,df:3,
  ph:function(g){var a=g.indexOf('Iᴬ')>=0,b=g.indexOf('Iᴮ')>=0;return a&&b?'grupa AB':a?'grupa A':b?'grupa B':'grupa 0'},
  note:'Allele Iᴬ i Iᴮ są kodominujące (oba się ujawniają: grupa AB), allel i jest recesywny. Rodzice z grupami A i B mogą mieć dziecko z każdą z czterech grup.'},
 X:{n:'sprzężona z płcią (hemofilia)',rank:{'Xᴴ':0,'Xʰ':1,'Y':2},m:[['Xᴴ','Xᴴ'],['Xᴴ','Xʰ'],['Xʰ','Xʰ']],f:[['Xᴴ','Y'],['Xʰ','Y']],dm:1,df:0,
  ph:function(g){var y=g.indexOf('Y')>=0,h=g.filter(function(x){return x==='Xʰ'}).length;if(y)return h?'syn chory':'syn zdrowy';return h===2?'córka chora':h===1?'córka nosicielka':'córka zdrowa'},
  note:'Gen leży na chromosomie X. Syn dostaje X od matki, a Y od ojca, więc chorobę dziedziczy po matce. Córka nosicielka jest zdrowa, ale może przekazać allel h.'}};
BIO.define('punnett',{opis:'Krzyżówka genetyczna: jedna cecha A/a, grupy krwi AB0, cecha sprzężona z płcią (hemofilia); fenotypy i genotypy w %; opcja tryb="A|K|X"',
mount:function(el,o){var mode=MODES[o.tryb]?o.tryb:'A',sg=H('div',{'class':'bw-seg bv-tools'}),tl=H('div',{'class':'bv-tools'}),sm=H('select',{'class':'bw-sel','aria-label':'Genotyp matki'}),sf=H('select',{'class':'bw-sel','aria-label':'Genotyp ojca'}),
   tw=H('div',{'class':'bw-tbl bw-pun'}),t=H('table'),out=info(),nt=H('p',{style:'font-size:12.5px;margin:6px 0 0'});
  tl.appendChild(H('span',{'class':'bv-score'},'matka'));tl.appendChild(sm);tl.appendChild(H('span',{'class':'bv-score'},'ojciec'));tl.appendChild(sf);tw.appendChild(t);[sg,tl,tw,out,nt].forEach(function(e){el.appendChild(e)});
  function gs(g,r){return g.slice().sort(function(a,b){return r[a]-r[b]}).join('')}
  function fill(s,list,def,r){clr(s);list.forEach(function(g,i){var op=H('option',{value:i});op.textContent=gs(g,r);s.appendChild(op)});s.value=def}
  function setMode(m){mode=m;var M=MODES[m];fill(sm,M.m,M.dm,M.rank);fill(sf,M.f,M.df,M.rank);draw()}
  function bars(ob){return '<div class="bw-bars">'+Object.keys(ob).map(function(k){var v=ob[k]/4*100;return '<div class="bw-bar"><span>'+k+'</span><span class="t"><i style="width:'+v+'%"></i></span><span class="v">'+v+'%</span></div>'}).join('')+'</div>'}
  function draw(){var M=MODES[mode],gm=M.m[+sm.value],gf=M.f[+sf.value];clr(t);var hr=H('tr');hr.appendChild(H('th',{'class':'bw-mono'},'♀ \\ ♂'));gf.forEach(function(a){hr.appendChild(H('th',{'class':'bw-mono',text:a}))});t.appendChild(hr);var G={},F={};
   gm.forEach(function(am){var tr=H('tr');tr.appendChild(H('th',{'class':'bw-mono',text:am}));gf.forEach(function(af){var g=[am,af],s=gs(g,M.rank),p=M.ph(g);G[s]=(G[s]||0)+1;F[p]=(F[p]||0)+1;tr.appendChild(H('td',null,s+'<small>'+p+'</small>'))});t.appendChild(tr)});
   out.innerHTML='<b>Fenotypy potomstwa</b>'+bars(F)+'<b>Genotypy</b>'+bars(G)+'<span style="font-size:12.5px">To prawdopodobieństwo dla każdego dziecka, a nie dokładna liczba dzieci.</span>';nt.textContent=M.note;
   seg(sg,Object.keys(MODES).map(function(k){return [k,MODES[k].n]}),mode,setMode)}
  sm.onchange=draw;sf.onchange=draw;setMode(mode)}});

/* ---- transport przez błonę ---- */
var TZ=[
 {k:'dp',n:'Dyfuzja prosta',co:'małe, niepolarne: O₂, CO₂',bialko:'nie',atp:'nie',kier:'zgodnie z gradientem',opis:'Cząsteczki przechodzą wprost przez warstwę lipidów, z miejsca o wyższym stężeniu do niższego.'},
 {k:'du',n:'Dyfuzja ułatwiona',co:'glukoza, jony',bialko:'tak (kanał, nośnik)',atp:'nie',kier:'zgodnie z gradientem',opis:'Białko kanałowe lub nośnikowe przepuszcza cząsteczki, które nie przejdą przez lipidy. Energia nie jest potrzebna.'},
 {k:'ta',n:'Transport aktywny',co:'jony, np. Na⁺, K⁺',bialko:'tak (pompa)',atp:'tak',kier:'wbrew gradientowi',opis:'Pompa białkowa przenosi cząsteczki tam, gdzie jest ich już więcej. Zużywa energię z rozkładu ATP.'},
 {k:'os',n:'Osmoza',co:'woda',bialko:'często (akwaporyny)',atp:'nie',kier:'do roztworu o wyższym stężeniu substancji rozpuszczonej',opis:'Woda przechodzi przez błonę półprzepuszczalną w stronę, gdzie jest więcej substancji rozpuszczonej (mniej „wolnej” wody).'}];
function rnd(seed){return function(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}}
function dots(g,x0,y0,w,h,n,sh,col,seed){var r=rnd(seed);for(var i=0;i<n;i++){var x=x0+6+r()*(w-12),y=y0+6+r()*(h-12);
 if(sh==='hex'){var p='';for(var k=0;k<6;k++){var a=k*Math.PI/3;p+=(k?'L':'M')+(x+5*Math.cos(a)).toFixed(1)+','+(y+5*Math.sin(a)).toFixed(1)}g.appendChild(S('path',{d:p+'z',fill:col,stroke:'#1a2528','stroke-width':'.6'}))}
 else if(sh==='big')g.appendChild(S('circle',{cx:x,cy:y,r:5.5,fill:col,stroke:'#1a2528','stroke-width':'.6'}));else g.appendChild(S('circle',{cx:x,cy:y,r:3,fill:col}))}}
BIO.define('transport-blona',{opis:'Przekrój błony: dyfuzja prosta, ułatwiona, transport aktywny (ATP), osmoza; kropki = stężenie; klik = opis + tabela porównawcza; opcja start="dp|du|ta|os"',
mount:function(el,o){var id='bw'+(++UID),cur=TZ.some(function(z){return z.k===o.start})?o.start:'dp',svg=S('svg',{viewBox:'0 0 360 270',role:'img','aria-label':'Przekrój błony komórkowej z czterema sposobami transportu','class':'bw-svg'}),out=info(),tw=H('div',{'class':'bw-tbl'}),t=H('table');tw.appendChild(t);[svg,out,tw].forEach(function(e){el.appendChild(e)});
  function draw(){clr(svg);var d=S('defs'),mk=S('marker',{id:id+'a',viewBox:'0 0 10 10',refX:'8',refY:'5',markerWidth:'6',markerHeight:'6',orient:'auto'});mk.appendChild(S('path',{d:'M0,0L10,5L0,10z',fill:'#1a2528'}));d.appendChild(mk);svg.appendChild(d);
   svg.appendChild(S('text',{x:6,y:14,'font-size':'10',fill:'#5a6a6d'},'zewnątrz komórki'));svg.appendChild(S('text',{x:6,y:264,'font-size':'10',fill:'#5a6a6d'},'wnętrze komórki'));
   TZ.forEach(function(z,i){var x0=i*90,g=S('g',{'aria-label':z.n,style:'cursor:pointer'}),cx=x0+45,AR=function(y1,y2){g.appendChild(S('line',{x1:cx,y1:y1,x2:cx,y2:y2,stroke:'#1a2528','stroke-width':'1.8','marker-end':'url(#'+id+'a)'}))};
    g.appendChild(S('rect',{x:x0+1,y:20,width:88,height:232,rx:6,fill:z.k===cur?'#e7f1e1':'#ffffff',stroke:z.k===cur?'#3f7a28':'#e8efed'}));
    for(var x=x0+5;x<x0+88;x+=9)[118,152].forEach(function(y,j){g.appendChild(S('line',{x1:x,y1:y+(j?-5:5),x2:x,y2:y+(j?-16:16),stroke:'#d6b04a','stroke-width':'1.4'}));g.appendChild(S('circle',{cx:x,cy:y,r:4,fill:'#e4a83a'}))});
    if(z.k==='dp'){dots(g,x0,24,88,88,14,'o','#2a62b5',11);dots(g,x0,158,88,88,3,'o','#2a62b5',12);AR(96,178)}
    if(z.k==='du'){g.appendChild(S('rect',{x:cx-14,y:104,width:10,height:62,rx:4,fill:'#7aa66a'}));g.appendChild(S('rect',{x:cx+4,y:104,width:10,height:62,rx:4,fill:'#7aa66a'}));dots(g,x0,24,88,80,8,'hex','#f2c14e',21);dots(g,x0,166,88,80,2,'hex','#f2c14e',22);AR(90,182)}
    if(z.k==='ta'){g.appendChild(S('rect',{x:cx-16,y:102,width:32,height:66,rx:10,fill:'#5b8bc9'}));g.appendChild(S('text',{x:cx,y:140,'text-anchor':'middle','font-size':'9',fill:'#fff','font-weight':'700'},'pompa'));dots(g,x0,24,88,80,3,'big','#c03d2c',31);dots(g,x0,170,88,76,10,'big','#c03d2c',32);AR(92,184);g.appendChild(S('text',{x:cx+16,y:192,'font-size':'10','font-weight':'700',fill:'#b07610'},'ATP'));g.appendChild(S('text',{x:cx+16,y:203,'font-size':'9',fill:'#b07610'},'→ADP'))}
    if(z.k==='os'){g.appendChild(S('rect',{x:cx-5,y:104,width:10,height:62,rx:4,fill:'#8fc1d6'}));dots(g,x0,24,88,80,10,'o','#4aa3c9',41);dots(g,x0,24,88,80,2,'big','#a07cc5',42);dots(g,x0,170,88,76,6,'o','#4aa3c9',43);dots(g,x0,170,88,76,7,'big','#a07cc5',44);AR(92,184)}
    var w=z.n.split(' ');g.appendChild(S('text',{x:cx,y:36,'text-anchor':'middle','font-size':'9.5','font-weight':'700',fill:'#1a2528'},w[0]));g.appendChild(S('text',{x:cx,y:47,'text-anchor':'middle','font-size':'9.5','font-weight':'700',fill:'#1a2528'},w[1]||''));
    key(g,function(){cur=z.k;draw()});svg.appendChild(g)});
   var z=TZ.filter(function(q){return q.k===cur})[0];out.innerHTML='<b>'+z.n+'</b><span>'+z.opis+'</span><span style="font-size:12.5px">Kropki: więcej kropek po jednej stronie = wyższe stężenie.</span>'}
  var hr=H('tr');['Sposób','Co przechodzi','Białko','ATP','Kierunek'].forEach(function(x){hr.appendChild(H('th',{text:x}))});t.appendChild(hr);
  TZ.forEach(function(z){var tr=H('tr');[z.n,z.co,z.bialko,z.atp,z.kier].forEach(function(x){tr.appendChild(H('td',{text:x}))});t.appendChild(tr)});draw()}});

/* ---- sieć troficzna lasu: poziomy, łańcuchy, usuwanie gatunku ---- */
var SN={trawa:[60,300,'trawa'],dab:[270,300,'dąb'],zajac:[34,215,'zając'],mysz:[118,215,'mysz'],sarna:[204,215,'sarna'],gasienica:[312,215,'gąsienica'],lis:[80,128,'lis'],wilk:[190,128,'wilk'],sikora:[300,128,'sikora'],puszczyk:[220,48,'puszczyk']};
var SE=[['trawa','zajac'],['trawa','mysz'],['trawa','sarna'],['dab','mysz'],['dab','sarna'],['dab','gasienica'],['gasienica','sikora'],['mysz','lis'],['zajac','lis'],['sarna','wilk'],['mysz','puszczyk'],['sikora','puszczyk']];
var LV=['producent','konsument I rzędu','konsument II rzędu','konsument III rzędu'];
BIO.define('siec-troficzna',{opis:'Sieć troficzna lasu (10 gatunków + destruenci): kliknij gatunek — co je, kto go je, poziomy i łańcuchy; tryb „usuń gatunek” pokazuje, kto zostaje bez pokarmu',
mount:function(el){var id='bw'+(++UID),mode='info',sel=null,removed={},sg=H('div',{'class':'bw-seg bv-tools'}),svg=S('svg',{viewBox:'0 0 360 350',role:'img','aria-label':'Sieć troficzna lasu','class':'bw-svg'}),out=info();[sg,svg,out].forEach(function(e){el.appendChild(e)});
  function eats(n){return SE.filter(function(e){return e[1]===n&&!removed[e[0]]}).map(function(e){return e[0]})}
  function eaten(n){return SE.filter(function(e){return e[0]===n&&!removed[e[1]]}).map(function(e){return e[1]})}
  function isProd(n){return !SE.some(function(e){return e[1]===n})}
  function chains(){var r=[];function go(n,p){var nx=eaten(n);if(!nx.length){r.push(p);return}nx.forEach(function(m){go(m,p.concat(m))})}Object.keys(SN).filter(function(n){return isProd(n)&&!removed[n]}).forEach(function(p){go(p,[p])});return r}
  function starving(){var st={},ch=true;while(ch){ch=false;Object.keys(SN).forEach(function(n){if(removed[n]||st[n]||isProd(n))return;var f=SE.filter(function(e){return e[1]===n}).map(function(e){return e[0]}).filter(function(x){return !removed[x]&&!st[x]});if(!f.length){st[n]=1;ch=true}})}return st}
  var ALL=chains().length;
  function click(n){if(mode==='usun')removed[n]=!removed[n];else sel=sel===n?null:n;draw()}
  function draw(){clr(svg);var d=S('defs');['#9aa8a6','#3f7a28','#c0602c'].forEach(function(c,i){var mk=S('marker',{id:id+'a'+i,viewBox:'0 0 10 10',refX:'9',refY:'5',markerWidth:'6',markerHeight:'6',orient:'auto'});mk.appendChild(S('path',{d:'M0,0L10,5L0,10z',fill:c}));d.appendChild(mk)});svg.appendChild(d);
   [['producenci',300],['roślinożercy',215],['drapieżniki',128],['drapieżnik szczytowy',48]].forEach(function(r){svg.appendChild(S('text',{x:356,y:r[1]-26,'text-anchor':'end','font-size':'9',fill:'#7f8d8b'},r[0]))});
   svg.appendChild(S('rect',{x:6,y:326,width:348,height:20,rx:5,fill:'#efe9de'}));svg.appendChild(S('text',{x:180,y:340,'text-anchor':'middle','font-size':'10',fill:'#6b5a3c'},'destruenci: grzyby, bakterie — rozkładają szczątki wszystkich'));
   var st=starving();
   SE.forEach(function(e){if(removed[e[0]]||removed[e[1]])return;var a=SN[e[0]],b=SN[e[1]],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy),k=0,c='#9aa8a6',w=1.3;
    if(sel&&mode==='info'){if(e[1]===sel){k=1;c='#3f7a28';w=2.6}else if(e[0]===sel){k=2;c='#c0602c';w=2.6}}
    svg.appendChild(S('line',{x1:a[0]+dx/l*22,y1:a[1]+dy/l*22,x2:b[0]-dx/l*23,y2:b[1]-dy/l*23,stroke:c,'stroke-width':w,'marker-end':'url(#'+id+'a'+k+')'}))});
   Object.keys(SN).forEach(function(n){var p=SN[n],g=S('g',{'aria-label':p[2],style:'cursor:pointer'}),fl=isProd(n)?'#dcefd2':'#ffffff',sk='#1a2528',da='';
    if(removed[n]){fl='#f2f2f2';sk='#bbb';da='4 3'}else if(st[n]){fl='#f6dfda';sk='#b23b2a';da='4 3'}else if(n===sel)fl='#3f7a28';
    g.appendChild(S('circle',{cx:p[0],cy:p[1],r:21,fill:fl,stroke:sk,'stroke-width':n===sel?'2.4':'1.3','stroke-dasharray':da}));
    g.appendChild(S('text',{x:p[0],y:p[1]+4,'text-anchor':'middle','font-size':p[2].length>7?'8.5':'10','font-weight':'700',fill:n===sel&&!removed[n]?'#fff':removed[n]?'#aaa':'#1a2528'},p[2]));key(g,function(){click(n)});svg.appendChild(g)});
   var h;
   if(mode==='usun'){var rm=Object.keys(removed).filter(function(n){return removed[n]}).map(function(n){return SN[n][2]}),sv=Object.keys(st).map(function(n){return SN[n][2]});
    h=rm.length?'<b>Usunięto: '+rm.join(', ')+'</b><span>'+(sv.length?'Bez pokarmu zostają: '+sv.join(', ')+' (czerwone, przerywane).':'Każdy gatunek ma jeszcze inny pokarm — sieć jest odporniejsza niż pojedynczy łańcuch.')+'</span><span>Łańcuchów w sieci: '+chains().length+' (było '+ALL+').</span>':'<b>Tryb usuwania</b><span>Kliknij gatunek, aby go usunąć z sieci.</span>'}
   else if(sel){var ch=chains().filter(function(c){return c.indexOf(sel)>=0}),lv={};ch.forEach(function(c){lv[c.indexOf(sel)]=1});var lvs=Object.keys(lv).map(Number).sort(),a=eats(sel).map(function(n){return SN[n][2]}),b=eaten(sel).map(function(n){return SN[n][2]});
    h='<b>'+SN[sel][2]+': '+lvs.map(function(i){return LV[i]}).join(' i ')+'</b><span>Je: '+(a.length?a.join(', '):'— (wytwarza materię w fotosyntezie)')+' · zjadany przez: '+(b.length?b.join(', '):'nikogo w tej sieci')+'</span><span>Łańcuchy przez ten gatunek ('+ch.length+'): '+ch.map(function(c){return c.map(function(n){return SN[n][2]}).join(' → ')}).join('; ')+'</span>'}
   else h='<b>Kliknij gatunek</b><span>Strzałka biegnie od zjadanego do zjadającego (kierunek przepływu materii i energii). Zielone: co je; pomarańczowe: kto go zjada. W sieci jest '+ALL+' łańcuchów pokarmowych.</span>';
   out.innerHTML=h;seg(sg,[['info','co je i kto go je'],['usun','usuń gatunek'],['reset','przywróć sieć']],mode,function(m){if(m==='reset'){removed={};sel=null}else{mode=m;sel=null}draw()})}
  draw()}});
})();
(function(){
var BIO=window.BIO;if(!BIO||!BIO.define||BIO.REV_VIZ)return;BIO.REV_VIZ=1;
var S=BIO.S,svg=BIO.svg,T=BIO.T,btn=BIO.btn;
function H(t,c,h,k){var e=BIO.H(t,c,h,k);if(c==='bv-info'){var w=BIO.H('div');e.appendChild(w);Object.defineProperty(e,'innerHTML',{set:function(v){w.innerHTML=String(v).replace(/^<b>([\s\S]*?)<\/b>/,'<strong style="display:block;margin-bottom:2px">$1</strong>').replace(/<(\/?)b(\s|>)/g,'<$1strong$2').replace(/<span>/g,'<span style="display:block;margin-top:3px">')},get:function(){return w.innerHTML}})}return e}  // tekst w środku jednego div — <b> nie łamie wiersza
function clr(e){while(e.firstChild)e.removeChild(e.firstChild)}
function seg(box,items,cur,cb){clr(box);items.forEach(function(it){var b=btn(it[1],function(){cb(it[0])});if(it[0]===cur)b.classList.add('on');b.setAttribute('aria-pressed',String(it[0]===cur));box.appendChild(b)})}

/* ---------------- REV01/REV02: fotosynteza ↔ oddychanie, energia z glukozy, próba kontrolna, klucz do kręgowców (2026-10-09) ---------------- */
BIO.define('fotosynteza-oddychanie',{opis:'Komórka liścia: chloroplast (fotosynteza) i mitochondrium (oddychanie) z wymianą substancji; suwak światła → bilans gazów liścia (oddychanie stale, fotosynteza zależna od światła)',
mount:function(el,o){var tools=H('div','bv-tools'),rng=document.createElement('input');rng.type='range';rng.min=0;rng.max=100;rng.value=o.swiatlo||70;rng.setAttribute('aria-label','Natężenie światła');rng.style.flex='1 1 160px';
  tools.appendChild(H('span','bv-score','światło:'));tools.appendChild(rng);var lab=H('b',null,'');tools.appendChild(lab);
  var pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  function strz(g,x1,y1,x2,y2,c,w){g.appendChild(S('line',{x1:x1,y1:y1,x2:x2,y2:y2,stroke:c,'stroke-width':w||2,'stroke-linecap':'round','marker-end':'url(#fo-a'+c.replace('#','')+')'}))}
  function draw(){var L=+rng.value,F=Math.min(1,L/60),R=.25,net=F-R;lab.textContent=L===0?'noc (ciemność)':L<20?'słabe':L<60?'średnie':'silne';
   var s=svg(420,230,'Komórka liścia: chloroplast i mitochondrium, wymiana CO₂, O₂, wody i glukozy'),d=S('defs');
   ['2e7d32','c0392b','1565c0','8d6e00','5d6b7a'].forEach(function(c){var m=S('marker',{id:'fo-a'+c,viewBox:'0 0 10 10',refX:'8',refY:'5',markerWidth:'6',markerHeight:'6',orient:'auto'});m.appendChild(S('path',{d:'M0,0L10,5L0,10z',fill:'#'+c}));d.appendChild(m)});s.appendChild(d);
   s.appendChild(S('rect',{x:70,y:30,width:280,height:170,rx:26,fill:'#eef7e9',stroke:'#7aa66a','stroke-width':3}));s.appendChild(T(210,20,'komórka liścia',{s:13,f:'var(--viz-mut)'}));
   var sun=S('g',{opacity:.25+.75*L/100});sun.appendChild(S('circle',{cx:32,cy:40,r:16,fill:'#f6c343'}));for(var i=0;i<8;i++){var a=i*Math.PI/4;sun.appendChild(S('line',{x1:32+20*Math.cos(a),y1:40+20*Math.sin(a),x2:32+27*Math.cos(a),y2:40+27*Math.sin(a),stroke:'#f6c343','stroke-width':2.5}))}s.appendChild(sun);
   var ch=S('g',{'data-k':'ch'});ch.appendChild(S('ellipse',{cx:150,cy:115,rx:52,ry:30,fill:'#5fae4e',stroke:'#2e7d32','stroke-width':2,opacity:.35+.65*F}));for(var j=0;j<4;j++)ch.appendChild(S('rect',{x:116+j*18,y:104,width:12,height:22,rx:3,fill:'#2e7d32',opacity:.8}));ch.appendChild(T(150,155,'chloroplast',{s:13}));s.appendChild(ch);
   var mi=S('g',{'data-k':'mi'});mi.appendChild(S('ellipse',{cx:290,cy:115,rx:46,ry:26,fill:'#f2b8a0',stroke:'#c0392b','stroke-width':2}));mi.appendChild(S('path',{d:'M254 115 q8 -16 16 0 t16 0 t16 0 t16 0 t8 0',fill:'none',stroke:'#c0392b','stroke-width':1.6}));mi.appendChild(T(290,152,'mitochondrium',{s:13}));s.appendChild(mi);
   if(L>0){strz(s,32,70,108,100,'#8d6e00',2);}
   if(F>0){strz(s,200,105,240,105,'#8d6e00',2.5);s.appendChild(T(220,96,'glukoza',{s:12,f:'#8d6e00'}))}
   if(F>0){strz(s,202,128,240,128,'#1565c0',1.6);s.appendChild(T(221,140,'O₂',{s:12,f:'#1565c0'}))}
   
   // wymiana z otoczeniem: wypadkowa
   var gO=net>0?'O₂':'CO₂',gI=net>0?'CO₂':'O₂',k=Math.min(1,Math.abs(net)/(1-R)),w=1.5+4*k;
   if(Math.abs(net)>.02){strz(s,395,60,355,90,net>0?'#5d6b7a':'#1565c0',w);s.appendChild(T(400,52,gI+' do liścia',{s:12,a:'end',f:'var(--viz-mut)'}));strz(s,355,150,395,180,net>0?'#1565c0':'#5d6b7a',w);s.appendChild(T(410,196,gO+' z liścia',{s:12,a:'end',f:'var(--viz-mut)'}))}
   else s.appendChild(T(395,115,'bilans ≈ 0',{s:13,a:'end',f:'var(--viz-mut)'}));
   s.appendChild(T(150,62,'fotosynteza: '+Math.round(F*100)+'%',{s:12,f:'#2e7d32'}));s.appendChild(T(290,72,'oddychanie: stałe',{s:12,f:'#c0392b'}));
   clr(pic);pic.appendChild(s);
   BIO.fx.info(pic,out,{ch:['Chloroplast — fotosynteza',' 6CO₂ + 6H₂O —(światło, chlorofil)→ C₆H₁₂O₆ + 6O₂. Intensywność rośnie ze światłem (do pewnej granicy); w ciemności fotosynteza nie zachodzi.'],
     mi:['Mitochondrium — oddychanie tlenowe',' C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia (ATP). Zachodzi stale, w dzień i w nocy.']});
   out.innerHTML=L===0?'<b>Noc:</b> fotosynteza nie zachodzi, oddychanie trwa — liść <b>pobiera O₂ i oddaje CO₂</b>.':net<-.02?'<b>Przewaga oddychania:</b> fotosynteza słabsza niż oddychanie — liść nadal netto <b>oddaje CO₂</b>.':net<=.02?'<b>Punkt równowagi:</b> ile O₂ powstaje w fotosyntezie, tyle zużywa oddychanie — wymiana gazów z otoczeniem ≈ 0.':'<b>Przewaga fotosyntezy:</b> fotosynteza intensywniejsza niż oddychanie — liść netto <b>pobiera CO₂ i oddaje O₂</b>. Oddychanie nadal trwa (część O₂ zużywa mitochondrium).'}
  rng.oninput=draw;draw()}});

BIO.define('energia-glukozy',{opis:'Oddychanie tlenowe vs fermentacja alkoholowa vs mlekowa: warunki, miejsce, produkty i ilość ATP z jednej cząsteczki glukozy (słupki)',
mount:function(el,o){var P=[['tl','oddychanie tlenowe','z tlenem','cytoplazma + mitochondria','CO₂ + H₂O',38,'#c0392b','prawie wszystkie organizmy'],
   ['al','fermentacja alkoholowa','bez tlenu','cytoplazma','alkohol etylowy + CO₂',2,'#8d6e00','drożdże — chleb (CO₂ spulchnia ciasto), wino'],
   ['ml','fermentacja mlekowa','bez tlenu','cytoplazma','kwas mlekowy',2,'#1565c0','bakterie mlekowe (jogurt, kiszonki); mięśnie przy intensywnym wysiłku']],cur=o.start||'tl';
  var sg=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(pic);el.appendChild(out);
  function draw(){seg(sg,P.map(function(p){return[p[0],p[1]]}),cur,function(k){cur=k;draw()});
   var s=svg(340,214,'Ilość ATP z jednej cząsteczki glukozy w oddychaniu tlenowym i fermentacjach');
   P.forEach(function(p,i){var y=8+i*62,w=p[5]/38*230,on=p[0]===cur;s.appendChild(T(6,y+9,p[1],{s:13,a:'start',w:on?800:600}));
    s.appendChild(S('rect',{x:6,y:y+20,width:Math.max(8,w),height:24,rx:6,fill:p[6],opacity:on?1:.45}));s.appendChild(T(14+Math.max(8,w),y+32,'ok. '+p[5]+' ATP',{s:13,a:'start',w:700,f:p[6]}))});
   s.appendChild(T(170,206,'ATP z 1 cząsteczki glukozy (wartości szkolne, orientacyjne)',{s:10.5,f:'var(--viz-mut)'}));clr(pic);pic.appendChild(s);
   var p=P.filter(function(x){return x[0]===cur})[0];
   out.innerHTML='<b>'+p[1][0].toUpperCase()+p[1].slice(1)+'</b> — '+p[2]+', '+p[3]+'.<br>Glukoza → <b>'+p[4]+'</b> + energia (ATP). Kto: '+p[7]+'.'+(cur==='tl'?'<br>Glukoza rozkładana do końca (do CO₂ i H₂O) — energii jest <b>wielokrotnie więcej</b> niż w fermentacji.':'<br>Glukoza rozkładana <b>niecałkowicie</b> — w produkcie (alkohol, kwas mlekowy) zostaje dużo energii, dlatego ATP jest niewiele.')}
  draw()}});

BIO.define('proba-kontrolna',{opis:'Planowanie doświadczenia: próba badawcza i kontrolna różnią się tylko jednym czynnikiem; przełączniki warunków, ocena planu (zmienna niezależna, zależna, stałe)',
mount:function(el,o){var D={mocz:{n:'Moczarka a światło',bad:'światło',zal:'liczba pęcherzyków O₂ w 5 min',cz:[['swiatlo','światło',['silne','słabe'],'światło'],['temp','temperatura wody',['20 °C','30 °C']],['nahco3','NaHCO₃ w wodzie',['tak','nie']],['galaz','gałązka moczarki',['jednakowa','dłuższa']]]},
   drozdze:{n:'Drożdże a CO₂',bad:'drożdże',zal:'zmętnienie wody wapiennej',cz:[['drozdze','drożdże',['są','brak'],'drożdże'],['cukier','roztwór cukru',['tak','nie']],['temp','temperatura',['ok. 35 °C','ok. 5 °C']],['objetosc','objętość roztworu',['200 cm³','100 cm³']]]}};
  var cur=o.start||'mocz',A={},B={};function reset(){var d=D[cur];A={};B={};d.cz.forEach(function(c){A[c[0]]=0;B[c[0]]=c[3]?1:0})}reset();
  var sg=H('div','bv-tools'),tab=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(tab);el.appendChild(out);
  function draw(){var d=D[cur];seg(sg,Object.keys(D).map(function(k){return[k,D[k].n]}),cur,function(k){cur=k;reset();draw()});
   var h='<table style="width:100%;border-collapse:collapse;font-size:13.5px;margin-top:6px"><tr><th align="left" style="padding:4px">czynnik</th><th style="padding:4px">próba badawcza</th><th style="padding:4px">próba kontrolna</th></tr>';
   d.cz.forEach(function(c){var r=A[c[0]]!==B[c[0]];h+='<tr style="background:'+(r?'#fff4e5':'transparent')+'"><td style="padding:4px">'+c[1]+(c[3]?' <small>(badany)</small>':'')+'</td>'+['A','B'].map(function(s){var v=(s==='A'?A:B)[c[0]];return '<td align="center" style="padding:4px"><button type="button" class="bv-btn'+(r?' on':'')+'" data-s="'+s+'" data-c="'+c[0]+'">'+c[2][v]+'</button></td>'}).join('')+'</tr>'});
   tab.innerHTML=h+'</table>';[].forEach.call(tab.querySelectorAll('button'),function(b){b.onclick=function(){var X=b.dataset.s==='A'?A:B;X[b.dataset.c]=1-X[b.dataset.c];draw()}});
   var rozne=d.cz.filter(function(c){return A[c[0]]!==B[c[0]]}),badany=d.cz.filter(function(c){return c[3]})[0];
   out.innerHTML=!rozne.length?'<b>Próby są identyczne</b> — nie da się niczego wykazać. Zmień w jednej próbie badany czynnik: <b>'+badany[1]+'</b>.':
    rozne.length>1?'<b>Błąd planu:</b> próby różnią się '+rozne.length+' czynnikami ('+rozne.map(function(c){return c[1]}).join(', ')+'). Nie wiadomo, który spowodował wynik — zostaw różnicę tylko w czynniku <b>'+badany[1]+'</b>.':
    rozne[0][3]?'<b>Dobry plan.</b> Zmienna niezależna (badana): <b>'+d.bad+'</b>. Zmienna zależna (mierzona): <b>'+d.zal+'</b>. Pozostałe warunki stałe — tylko wtedy wynik można przypisać badanemu czynnikowi. Wiarygodność zwiększą <b>powtórzenia</b>.':
    '<b>Błąd planu:</b> próby różnią się czynnikiem „'+rozne[0][1]+'”, a badamy <b>'+badany[1]+'</b>. Zmieniaj tylko badany czynnik.'}
  draw()}});

BIO.define('klucz-kregowce',{opis:'Klucz dwudzielny do gromad kręgowców (ryby, płazy, gady, ptaki, ssaki): pytania tak/nie, ścieżka; tryb „rozpoznaj zwierzę” z przykładami',
mount:function(el,o){var K={q1:['Czy ciało pokrywają pióra?','PTAKI','q2'],q2:['Czy ma sierść i karmi młode mlekiem?','SSAKI','q3'],q3:['Czy przez całe życie oddycha skrzelami i ma płetwy?','RYBY','q4'],q4:['Czy skóra jest naga, wilgotna, śluzowata?','PŁAZY','q5'],q5:['Czy skórę pokrywają suche, rogowe łuski lub tarczki?','GADY','?']};
  var Z=[['wróbel','PTAKI',[1]],['pingwin','PTAKI',[1]],['nietoperz','SSAKI',[0,1]],['delfin','SSAKI',[0,1]],['wieloryb','SSAKI',[0,1]],['karp','RYBY',[0,0,1]],['konik morski','RYBY',[0,0,1]],['żaba','PŁAZY',[0,0,0,1]],['traszka','PŁAZY',[0,0,0,1]],['żółw','GADY',[0,0,0,0,1]],['jaszczurka','GADY',[0,0,0,0,1]],['wąż','GADY',[0,0,0,0,1]]];
  var path=[],zw=null,sg=H('div','bv-tools'),box=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(box);el.appendChild(out);
  function nowy(){zw=Z[Math.floor(Math.random()*Z.length)];path=[];draw()}
  function draw(){clr(sg);sg.appendChild(btn('▶ rozpoznaj zwierzę',nowy));sg.appendChild(btn('od początku',function(){zw=null;path=[];draw()}));
   var h='<div style="font-size:14px">'+(zw?'Zwierzę: <b style="font-size:17px">'+zw[0]+'</b>':'Przejdź klucz dla wybranego zwierzęcia albo kliknij „rozpoznaj zwierzę”.')+'</div><ol style="margin:8px 0;padding-left:22px">';
   var k='q1',end=null;path.forEach(function(a,i){var q=K[k];h+='<li>'+q[0]+' — <b>'+(a?'tak':'nie')+'</b></li>';if(a){end=q[1]}else k=q[2]});
   h+='</ol>';if(!end&&K[k]){h+='<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b>'+(path.length+1)+'. '+K[k][0]+'</b></div>'}
   box.innerHTML=h;if(!end&&K[k]){var r=H('div','bv-tools');r.appendChild(btn('tak',function(){path.push(1);draw()}));r.appendChild(btn('nie',function(){path.push(0);draw()}));box.appendChild(r)}
   if(end){var good=!zw||zw[1]===end,wz=zw?zw[2]:null,ok=!wz||wz.join()===path.join();
    out.innerHTML='Wynik klucza: <b>'+end+'</b>.'+(zw?(good&&ok?' <b style="color:#2e7d32">Dobrze!</b>':' <b style="color:#c0392b">Sprawdź jeszcze raz</b> — '+zw[0]+' to '+{PTAKI:'ptak',SSAKI:'ssak',RYBY:'ryba','PŁAZY':'płaz',GADY:'gad'}[zw[1]]+'.'):'')+
     (zw&&/delfin|wieloryb/.test(zw[0])?' Delfin i wieloryb mają płetwy, ale oddychają <b>płucami</b> i karmią młode mlekiem — to ssaki.':zw&&zw[0]==='nietoperz'?' Nietoperz lata, ale ma sierść, nie pióra — to ssak.':zw&&zw[0]==='pingwin'?' Pingwin nie lata, ale ma pióra — to ptak.':zw&&zw[0]==='konik morski'?' Konik morski nie przypomina ryby, ale ma skrzela i płetwy — to ryba.':'')}
   else out.innerHTML='Klucz dwudzielny: na każde pytanie odpowiadasz <b>tak</b> albo <b>nie</b>; kolejność pytań prowadzi od cech najbardziej wyróżniających (pióra, sierść).'}
  draw()}});

BIO.define('wirus-bakteria',{opis:'Wirus (kapsyd + DNA/RNA, ew. osłonka) obok komórki bakterii (ściana, błona, cytoplazma, rybosomy, nukleoid, plazmid, rzęska) w różnej skali; klik = opis; panel porównania (komórka? metabolizm? antybiotyk?)',
mount:function(el,o){var pic=H('div'),out=H('div','bv-info');el.appendChild(pic);el.appendChild(out);
  var s=svg(420,230,'Porównanie budowy wirusa i komórki bakterii');
  function g(k,kids){var e=S('g',{'data-k':k});kids.forEach(function(c){e.appendChild(c)});s.appendChild(e);return e}
  // bakteria (pałeczka) — duża
  g('sciana',[S('rect',{x:150,y:40,width:250,height:130,rx:65,fill:'#e9f1dc',stroke:'#6b8f3a','stroke-width':7})]);
  g('blona',[S('rect',{x:158,y:48,width:234,height:114,rx:57,fill:'#f4f8ec',stroke:'#c7a73a','stroke-width':2.5})]);
  var ryb=[];for(var i=0;i<26;i++){var x=180+(i*53)%195,y=62+(i*37)%88;ryb.push(S('circle',{cx:x,cy:y,r:2.6,fill:'#5d6b7a'}))}g('rybosomy',ryb);
  g('nukleoid',[S('path',{d:'M235 92 q12 -22 26 0 t26 0 t26 0 q-6 22 -22 14 t-28 8 t-26 -4 t-2 -18z',fill:'none',stroke:'#7b3fa0','stroke-width':2.4})]);
  g('plazmid',[S('circle',{cx:350,cy:130,r:9,fill:'none',stroke:'#c0392b','stroke-width':2.2})]);
  g('rzeska',[S('path',{d:'M400 105 q14 -16 10 -2 t12 0 t10 -6',fill:'none',stroke:'#6b8f3a','stroke-width':2.4})]);
  s.appendChild(T(275,190,'bakteria (pałeczka) ≈ 2 µm',{s:12}));
  // wirus — mały
  var vx=62,vy=110,hex=[];for(var k=0;k<6;k++){var a=Math.PI/3*k-Math.PI/6;hex.push((vx+24*Math.cos(a)).toFixed(1)+','+(vy+24*Math.sin(a)).toFixed(1))}
  g('oslonka',[S('circle',{cx:vx,cy:vy,r:33,fill:'none',stroke:'#c7a73a','stroke-width':2,'stroke-dasharray':'3 3'})]);
  g('kapsyd',[S('polygon',{points:hex.join(' '),fill:'#dbe8f6',stroke:'#2a62b5','stroke-width':2.5})]);
  g('kwas',[S('path',{d:'M'+(vx-11)+' '+vy+' q5 -10 10 0 t10 0',fill:'none',stroke:'#7b3fa0','stroke-width':2.2})]);
  s.appendChild(T(vx,160,'wirus ≈ 0,1 µm',{s:12}));s.appendChild(T(vx,176,'(powiększony bardziej!)',{s:10,f:'var(--viz-mut)'}));
  s.appendChild(T(210,214,'Skale nie są równe — bakteria jest ok. 10–100 razy większa od wirusa.',{s:11,f:'var(--viz-mut)'}));
  pic.appendChild(s);
  BIO.fx.info(pic,out,{sciana:['Ściana komórkowa',' Sztywna osłona bakterii (u bakterii z mureiny — nie z celulozy). Na nią działa część antybiotyków.'],
   blona:['Błona komórkowa',' Oddziela wnętrze od otoczenia, selektywnie przepuszczalna — jak u każdej komórki.'],
   rybosomy:['Rybosomy',' Wytwarzają białka. Wirus nie ma rybosomów — używa rybosomów gospodarza.'],
   nukleoid:['Nukleoid',' Kolista cząsteczka DNA leżąca w cytoplazmie, bez otoczki jądrowej — bakteria nie ma jądra (prokariont).'],
   plazmid:['Plazmid',' Mała kolista cząsteczka DNA; może nieść np. geny oporności na antybiotyki.'],
   rzeska:['Rzęska',' Służy do ruchu (nie wszystkie bakterie ją mają).'],
   kapsyd:['Kapsyd',' Białkowy płaszcz wirusa, chroni materiał genetyczny.'],
   kwas:['Materiał genetyczny wirusa',' DNA albo RNA (nigdy oba). To jedyna „instrukcja”, jaką wirus wnosi do komórki.'],
   oslonka:['Osłonka (nie u wszystkich wirusów)',' Błoniasta warstwa pochodząca z komórki gospodarza — ma ją np. wirus grypy i HIV.']});
  out.innerHTML='<b>Wirus a bakteria</b><span>Bakteria to <strong>komórka</strong>: ma własną przemianę materii, rybosomy, rozmnaża się przez podział — antybiotyki mogą ją zniszczyć. Wirus to <strong>cząstka bez budowy komórkowej</strong>: kapsyd + DNA lub RNA; namnaża się tylko w żywej komórce — <strong>antybiotyki na wirusy nie działają</strong>.</span>'}});

BIO.define('przeobrazenie-plaza',{opis:'Rozwój złożony żaby: skrzek → kijanka (skrzela zewnętrzne) → kijanka z kończynami → młoda żaba (zanik ogona) → żaba; suwak etapów, oddychanie i środowisko na każdym etapie',
mount:function(el,o){var E=[['skrzek','jaja w galaretowatej osłonce, w wodzie','—','woda'],['kijanka','ogon, skrzela zewnętrzne, odżywia się roślinami (glonami)','skrzela','woda'],['kijanka z kończynami','najpierw tylne, potem przednie kończyny; skrzela wewnętrzne, rozwijają się płuca','skrzela → płuca','woda'],['młoda żaba','zanika ogon, cztery kończyny, wychodzi na ląd','płuca + skóra','woda i ląd'],['żaba (dorosła)','drapieżnik (owady); rozmnaża się w wodzie — zapłodnienie zewnętrzne','płuca + skóra','ląd i woda']];
  var tools=H('div','bv-tools'),rng=document.createElement('input');rng.type='range';rng.min=0;rng.max=4;rng.value=o.etap||1;rng.setAttribute('aria-label','Etap rozwoju');rng.style.flex='1 1 160px';
  tools.appendChild(H('span','bv-score','etap:'));tools.appendChild(rng);var pic=H('div'),out=H('div','bv-info');el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  function zaba(e,x,y,k){var G=S('g'),c='#4f8a3c',d='#2f5e22';
   if(e===0){for(var i=0;i<9;i++){var a=i*0.7,r=8+i*2.2;G.appendChild(S('circle',{cx:x+r*Math.cos(a),cy:y+r*Math.sin(a),r:7,fill:'#e7f1f7',stroke:'#9bb7c7'}));G.appendChild(S('circle',{cx:x+r*Math.cos(a),cy:y+r*Math.sin(a),r:2.6,fill:'#1a2332'}))}return G}
   var ogon=e<=2?1:e===3?.4:0,body=e>=3?[26,18]:[16,12];
   if(ogon)G.appendChild(S('path',{d:'M'+(x-body[0]+4)+' '+y+' q-'+(30*ogon)+' -14 -'+(46*ogon)+' 0 q'+(16*ogon)+' 14 '+(46*ogon)+' 0z',fill:c,opacity:.85}));
   if(e>=2){G.appendChild(S('path',{d:'M'+(x-8)+' '+(y+10)+' l-12 14 l-8 0',fill:'none',stroke:d,'stroke-width':3,'stroke-linecap':'round'}))}
   if(e>=3){G.appendChild(S('path',{d:'M'+(x+12)+' '+(y+10)+' l6 12 l6 0',fill:'none',stroke:d,'stroke-width':3,'stroke-linecap':'round'}))}
   G.appendChild(S('ellipse',{cx:x,cy:y,rx:body[0],ry:body[1],fill:c}));
   G.appendChild(S('circle',{cx:x+body[0]*.5,cy:y-body[1]*.55,r:3.4,fill:'#fff',stroke:d}));G.appendChild(S('circle',{cx:x+body[0]*.5,cy:y-body[1]*.55,r:1.6,fill:'#1a2332'}));
   if(e===1){[-1,1].forEach(function(z){G.appendChild(S('path',{d:'M'+(x+2)+' '+(y+z*10)+' q4 '+(z*8)+' 10 '+(z*6),fill:'none',stroke:'#c0392b','stroke-width':2}))})}
   return G}
  function draw(){var e=+rng.value,s=svg(420,200,'Przeobrażenie żaby, etap: '+E[e][0]);
   s.appendChild(S('rect',{x:0,y:0,width:420,height:200,fill:'#f1f7fb'}));
   s.appendChild(S('path',{d:'M0 60 Q105 52 210 60 T420 60 L420 200 L0 200z',fill:'#d6ebf6'}));
   s.appendChild(S('path',{d:'M0 60 Q105 52 210 60 T420 60',fill:'none',stroke:'#7fb6d6','stroke-width':2}));if(e>=3)s.appendChild(S('path',{d:'M0 200 L0 78 Q50 52 120 56 Q185 60 215 92 Q238 130 246 200z',fill:'#cfe3b8',stroke:'#8fb36a','stroke-width':2}));s.appendChild(T(410,48,'powierzchnia wody',{s:10,a:'end',f:'#4b86a8'}));
   E.forEach(function(q,i){var cx=44+i*83,on=i===e;s.appendChild(S('circle',{cx:cx,cy:182,r:on?9:6,fill:on?'var(--accent)':'#c9d6dd'}));if(i<4)s.appendChild(S('line',{x1:cx+10,y1:182,x2:cx+73,y2:182,stroke:'#c9d6dd','stroke-width':2}))});
   s.appendChild(zaba(e,e>=3?112:210,e>=3?34:118,1));
   s.appendChild(T(e>=3?330:210,24,E[e][0],{s:16,w:800}));clr(pic);pic.appendChild(s);
   out.innerHTML='<b>'+(e+1)+'. '+E[e][0]+'</b><span>'+E[e][1]+'.</span><span>Oddychanie: <strong>'+E[e][2]+'</strong> · środowisko: <strong>'+E[e][3]+'</strong></span>'+(e===4?'<span>To <strong>rozwój złożony (z przeobrażeniem)</strong>: larwa (kijanka) różni się od dorosłej żaby budową, oddychaniem, pokarmem i środowiskiem.</span>':'')}
  rng.oninput=draw;draw()}});

BIO.define('przeobrazenie-owadow',{opis:'Przeobrażenie zupełne (motyl: jajo → gąsienica → poczwarka → motyl) i niezupełne (konik polny: jajo → larwa podobna do dorosłego → owad dorosły); klik = opis etapu; różnica: poczwarka',
mount:function(el,o){var pic=H('div'),out=H('div','bv-info');el.appendChild(pic);el.appendChild(out);
  var s=svg(440,262,'Przeobrażenie zupełne motyla i niezupełne konika polnego');
  function arrow(x1,y,x2){s.appendChild(S('line',{x1:x1,y1:y,x2:x2-6,y2:y,stroke:'#8c959f','stroke-width':2}));s.appendChild(S('path',{d:'M'+(x2-8)+' '+(y-4)+' L'+x2+' '+y+' L'+(x2-8)+' '+(y+4)+'z',fill:'#8c959f'}))}
  function g(k){var e=S('g',{'data-k':k});s.appendChild(e);return e}
  s.appendChild(T(8,16,'przeobrażenie zupełne (motyl)',{s:14,a:'start',w:800}));s.appendChild(T(8,146,'przeobrażenie niezupełne (konik polny)',{s:14,a:'start',w:800}));
  var y1=70,y2=200;
  // zupełne
  var a=g('jajo1');[[0,0],[9,3],[4,9]].forEach(function(p){a.appendChild(S('ellipse',{cx:46+p[0],cy:y1+p[1],rx:5,ry:6.5,fill:'#f6e7b0',stroke:'#c9a94a'}))});a.appendChild(T(50,y1+38,'jajo',{s:13}));
  arrow(72,y1,104);
  var b=g('gasienica');for(var i=0;i<7;i++)b.appendChild(S('circle',{cx:118+i*9,cy:y1+(i%2?2:-2),r:6.5,fill:'#6aa84f',stroke:'#3d6b2c'}));b.appendChild(S('circle',{cx:118+6*9+3,cy:y1-4,r:2,fill:'#1a2332'}));b.appendChild(T(146,y1+38,'larwa',{s:13}));
  arrow(184,y1,214);
  var c=g('poczwarka');c.appendChild(S('line',{x1:240,y1:y1-30,x2:240,y2:y1-20,stroke:'#8c959f'}));c.appendChild(S('path',{d:'M240 '+(y1-20)+' q14 10 8 32 q-8 14 -16 0 q-6 -22 8 -32z',fill:'#b7a36a',stroke:'#7a6a3a'}));c.appendChild(S('rect',{x:204,y:y1+28,width:74,height:20,rx:10,fill:'#fff4e5',stroke:'#e09b3d'}));c.appendChild(T(241,y1+38,'poczwarka',{s:11,w:800,f:'#b45f06'}));
  arrow(276,y1,306);
  var d=g('motyl');[[-1,1],[1,1]].forEach(function(q){d.appendChild(S('path',{d:'M352 '+y1+' q'+(q[0]*34)+' -34 '+(q[0]*36)+' -6 q'+(q[0]*-6)+' 14 '+(q[0]*-36)+' 6z',fill:'#e8833a',stroke:'#9a4c12'}));d.appendChild(S('path',{d:'M352 '+(y1+2)+' q'+(q[0]*26)+' 8 '+(q[0]*22)+' 24 q'+(q[0]*-12)+' 2 '+(q[0]*-22)+' -20z',fill:'#f2b46d',stroke:'#9a4c12'}))});d.appendChild(S('rect',{x:349,y:y1-14,width:6,height:34,rx:3,fill:'#3a2a1a'}));d.appendChild(T(352,y1+38,'owad dorosły',{s:13}));
  // niezupełne
  var e=g('jajo2');[[0,0],[8,2],[3,8],[11,9]].forEach(function(p){e.appendChild(S('ellipse',{cx:46+p[0],cy:y2-8+p[1],rx:3.5,ry:6,fill:'#e4d3a8',stroke:'#a88d4b'}))});e.appendChild(T(50,y2+30,'jajo',{s:13}));
  arrow(72,y2,128);
  function konik(gr,x,sk){gr.appendChild(S('ellipse',{cx:x,cy:y2,rx:26*sk,ry:8*sk,fill:'#7fb069',stroke:'#3d6b2c'}));gr.appendChild(S('circle',{cx:x+26*sk,cy:y2-3*sk,r:6*sk,fill:'#7fb069',stroke:'#3d6b2c'}));gr.appendChild(S('path',{d:'M'+(x-4*sk)+' '+(y2+2*sk)+' l-14 '+(-18*sk)+' l-10 '+(22*sk),fill:'none',stroke:'#3d6b2c','stroke-width':2.4}));gr.appendChild(S('line',{x1:x+28*sk,y1:y2-8*sk,x2:x+44*sk,y2:y2-22*sk,stroke:'#3d6b2c','stroke-width':1.4}))}
  var f=g('nimfa');konik(f,160,.7);f.appendChild(T(150,y2+30,'larwa',{s:13}));
  arrow(204,y2,268);
  var h=g('konik');konik(h,326,1);h.appendChild(S('path',{d:'M304 '+(y2-6)+' q20 -10 42 -2 q-20 6 -42 2z',fill:'#a8cf8e',stroke:'#3d6b2c',opacity:.9}));h.appendChild(T(330,y2+30,'owad dorosły',{s:13}));
  s.appendChild(S('rect',{x:198,y:y2+8,width:84,height:36,rx:7,fill:'#fff',stroke:'#c0392b','stroke-dasharray':'4 3'}));s.appendChild(T(240,y2+20,'brak',{s:12,f:'#c0392b'}));s.appendChild(T(240,y2+34,'poczwarki',{s:12,f:'#c0392b'}));
  pic.appendChild(s);
  BIO.fx.info(pic,out,{jajo1:['Jajo (motyl)',' Samica składa jaja na roślinie, którą będzie jadła larwa.'],
   gasienica:['Larwa — gąsienica',' Zupełnie niepodobna do dorosłego: nie ma skrzydeł, ma gryzący aparat gębowy, je liście i szybko rośnie, kilka razy linieje.'],
   poczwarka:['Poczwarka',' Etap spoczynku — nie je i prawie się nie rusza, ale w środku zachodzi całkowita przebudowa ciała larwy w owada dorosłego. Poczwarka występuje <strong>tylko</strong> w przeobrażeniu zupełnym (motyle, chrząszcze, muchy, pszczoły).'],
   motyl:['Owad dorosły (imago)',' Ma skrzydła i ssący aparat gębowy (pije nektar) — inny pokarm niż larwa, więc larwy i dorosłe nie konkurują o pokarm.'],
   jajo2:['Jajo (konik polny)',' Jaja składane do gleby.'],
   nimfa:['Larwa podobna do dorosłego',' Wygląda jak mały owad dorosły, ale nie ma skrzydeł (są tylko zawiązki); rośnie i linieje, z każdym linieniem coraz bardziej przypomina dorosłego. Nie ma poczwarki.'],
   konik:['Owad dorosły',' Ma w pełni rozwinięte skrzydła i jest zdolny do rozmnażania. Przeobrażenie niezupełne: konik polny, ważka, pluskwiaki.']});
  out.innerHTML='<b>Zupełne czy niezupełne?</b><span>Rozstrzyga <strong>poczwarka</strong>: jajo → larwa → <strong>poczwarka</strong> → owad dorosły to przeobrażenie zupełne; jajo → larwa podobna do dorosłego → owad dorosły (bez poczwarki) — niezupełne. Kliknij etap, aby zobaczyć opis.</span>'}});

BIO.define('podzial-komorki',{opis:'Mitoza i mejoza krok po kroku na modelu 2n = 4 (dwie pary homologów: matczyne czerwone, ojcowskie niebieskie, długie i krótkie); chromatydy, crossing-over, liczby chromosomów i chromatyd w każdej fazie (model i człowiek)',
mount:function(el,o){var tryb=o.start==='mejoza'?'mejoza':'mitoza',k=0,M='#d64545',Oj='#3b6fd6';
  var sg=H('div','bv-tools'),tools=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(tools);el.appendChild(pic);el.appendChild(out);
  var prev=btn('◀ wstecz',function(){if(k>0){k--;draw()}}),next=btn('dalej ▶',function(){if(k<ST[tryb].length-1){k++;draw()}}),lab=H('span','bv-score','');tools.appendChild(prev);tools.appendChild(next);tools.appendChild(lab);
  // chromatydy: [kolor, kolor końcówki (crossing-over) | null, długość]
  var A1=[M,null,34],A2=[M,Oj,34],A3=[Oj,M,34],A4=[Oj,null,34],B1=[M,null,22],B2=[M,null,22],B3=[Oj,null,22],B4=[Oj,null,22];
  var Am=[A1,A1],Ao=[A4,A4],Bm=[B1,B1],Bo=[B3,B3],AmX=[A1,A2],AoX=[A3,A4];
  function rod(g,x,y,c){var L=c[2],w=6;g.appendChild(S('rect',{x:x-w/2,y:y-L/2,width:w,height:L,rx:3,fill:c[0]}));if(c[1])g.appendChild(S('rect',{x:x-w/2,y:y-L/2,width:w,height:L*.36,rx:3,fill:c[1]}))}
  function X(g,x,y,ch){rod(g,x-3.6,y,ch[0]);rod(g,x+3.6,y,ch[1]);g.appendChild(S('circle',{cx:x,cy:y,r:3,fill:'#1a2332'}))}
  function kom(g,cx,cy,rx,ry,jadro){g.appendChild(S('ellipse',{cx:cx,cy:cy,rx:rx,ry:ry,fill:'#f4f8f1',stroke:'#7aa66a','stroke-width':2.5}));if(jadro)g.appendChild(S('ellipse',{cx:cx,cy:cy,rx:rx*.55,ry:ry*.62,fill:jadro==='z'?'none':'#ece4f6',stroke:'#9a7fc0','stroke-width':1.6,'stroke-dasharray':jadro==='z'?'5 4':null}))}
  function polow(g,cx,cy,rx,L,P){L.forEach(function(p){g.appendChild(S('line',{x1:cx-rx+12,y1:cy,x2:p[0],y2:p[1],stroke:'#b9c4bd','stroke-width':1}))});P.forEach(function(p){g.appendChild(S('line',{x1:cx+rx-12,y1:cy,x2:p[0],y2:p[1],stroke:'#b9c4bd','stroke-width':1}))})}
  function wrz(g,cx,cy,rx,pts){pts.forEach(function(p){[cx-rx+12,cx+rx-12].forEach(function(px){g.appendChild(S('line',{x1:px,y1:cy,x2:p[0],y2:p[1],stroke:'#b9c4bd','stroke-width':1}))})})}
  var ST={mitoza:[
   ['Interfaza (G1)','Chromosomy są rozluźnione w jądrze; każdy ma <strong>jedną chromatydę</strong>.',4,4,'2n',function(g){kom(g,220,130,150,100,1);rod(g,180,110,A1);rod(g,262,100,A4);rod(g,200,160,B1);rod(g,248,158,B3)}],
   ['Interfaza — po replikacji DNA','DNA zostało skopiowane: każdy chromosom ma teraz <strong>dwie chromatydy siostrzane</strong> połączone centromerem. Liczba chromosomów się <strong>nie zmieniła</strong>.',4,8,'2n',function(g){kom(g,220,130,150,100,1);X(g,180,110,Am);X(g,262,100,Ao);X(g,200,160,Bm);X(g,248,158,Bo)}],
   ['Profaza','Chromosomy kondensują się (stają się widoczne), otoczka jądrowa zanika, tworzy się wrzeciono podziałowe.',4,8,'2n',function(g){kom(g,220,130,150,100,'z');X(g,185,105,Am);X(g,255,100,Ao);X(g,200,165,Bm);X(g,245,160,Bo)}],
   ['Metafaza','Chromosomy ustawiają się <strong>pojedynczo</strong> w płaszczyźnie środkowej komórki; włókna wrzeciona łączą się z centromerami.',4,8,'2n',function(g){kom(g,220,130,150,100);var P=[[220,62],[220,104],[220,150],[220,190]];wrz(g,220,130,150,P);X(g,220,62,Am);X(g,220,104,Ao);X(g,220,150,Bm);X(g,220,190,Bo)}],
   ['Anafaza','<strong>Chromatydy siostrzane</strong> rozdzielają się i wędrują do przeciwnych biegunów — od tej chwili każda jest osobnym chromosomem.',8,8,'2n + 2n',function(g){kom(g,220,130,150,100);var Y=[62,104,150,190],C=[A1,A4,B1,B3];polow(g,220,130,150,Y.map(function(y){return[140,y]}),Y.map(function(y){return[300,y]}));Y.forEach(function(y,i){rod(g,140,y,C[i]);rod(g,300,y,C[i])})}],
   ['Telofaza i cytokineza','Odtwarzają się jądra, cytoplazma dzieli się: powstają <strong>2 komórki potomne</strong>, każda z takim samym zestawem chromosomów jak komórka macierzysta (2n).',4,4,'2n i 2n',function(g){[110,330].forEach(function(cx){kom(g,cx,130,96,90,1);rod(g,cx-22,110,A1);rod(g,cx+22,104,A4);rod(g,cx-12,158,B1);rod(g,cx+14,156,B3)})}]],
  mejoza:[
   ['Interfaza (G1)','Komórka diploidalna (2n): dwie pary chromosomów homologicznych — w każdej parze jeden od matki (czerwony) i jeden od ojca (niebieski).',4,4,'2n',function(g){kom(g,220,130,150,100,1);rod(g,180,110,A1);rod(g,262,100,A4);rod(g,200,160,B1);rod(g,248,158,B3)}],
   ['Interfaza — po replikacji DNA','Jedna replikacja przed mejozą: każdy chromosom ma dwie chromatydy.',4,8,'2n',function(g){kom(g,220,130,150,100,1);X(g,180,110,Am);X(g,262,100,Ao);X(g,200,160,Bm);X(g,248,158,Bo)}],
   ['Profaza I — pary i crossing-over','Chromosomy <strong>homologiczne łączą się w pary</strong>. Może zajść <strong>crossing-over</strong>: wymiana odcinków między chromatydami homologów (kolorowe końcówki).',4,8,'2n',function(g){kom(g,220,130,150,100,'z');X(g,196,100,AmX);X(g,214,100,AoX);X(g,226,165,Bm);X(g,244,165,Bo);g.appendChild(T(300,72,'crossing-over',{s:11,w:700,f:'#7b3fa0'}));g.appendChild(S('line',{x1:262,y1:76,x2:222,y2:92,stroke:'#7b3fa0','stroke-width':1.2}))}],
   ['Metafaza I','<strong>Pary</strong> homologów ustawiają się w płaszczyźnie środkowej. Ustawienie każdej pary jest losowe (tu: para długich — czerwony po lewej, para krótkich — niebieski po lewej).',4,8,'2n',function(g){kom(g,220,130,150,100);wrz(g,220,130,150,[[206,90],[234,90],[206,168],[234,168]]);X(g,206,90,AmX);X(g,234,90,AoX);X(g,206,168,Bo);X(g,234,168,Bm)}],
   ['Anafaza I','Do biegunów wędrują <strong>całe chromosomy</strong> (z dwiema chromatydami) — homologi się rozdzielają. To zmniejsza liczbę zestawów z 2n do n.',4,8,'n + n',function(g){kom(g,220,130,150,100);polow(g,220,130,150,[[128,92],[128,168]],[[312,92],[312,168]]);X(g,128,92,AmX);X(g,128,168,Bo);X(g,312,92,AoX);X(g,312,168,Bm)}],
   ['Telofaza I','Powstają <strong>2 komórki haploidalne</strong> (n): po jednym chromosomie z każdej pary, ale chromosomy nadal mają po 2 chromatydy.',2,4,'n i n',function(g){kom(g,115,130,96,92,1);kom(g,325,130,96,92,1);X(g,98,108,AmX);X(g,134,156,Bo);X(g,308,108,AoX);X(g,344,156,Bm)}],
   ['Metafaza II','W każdej komórce chromosomy ustawiają się <strong>pojedynczo</strong> w płaszczyźnie środkowej — jak w mitozie.',2,4,'n i n',function(g){[[115,AmX,Bo],[325,AoX,Bm]].forEach(function(q){kom(g,q[0],130,96,92);wrz(g,q[0],130,96,[[q[0],96],[q[0],166]]);X(g,q[0],96,q[1]);X(g,q[0],166,q[2])})}],
   ['Anafaza II','Rozdzielają się <strong>chromatydy siostrzane</strong>. Przez crossing-over chromatydy jednego chromosomu nie są już identyczne.',4,4,'n + n (w każdej komórce)',function(g){[[115,AmX,Bo],[325,AoX,Bm]].forEach(function(q){kom(g,q[0],130,96,92);polow(g,q[0],130,96,[[q[0]-42,96],[q[0]-42,166]],[[q[0]+42,96],[q[0]+42,166]]);rod(g,q[0]-42,96,q[1][0]);rod(g,q[0]+42,96,q[1][1]);rod(g,q[0]-42,166,q[2][0]);rod(g,q[0]+42,166,q[2][1])})}],
   ['Telofaza II','Powstają <strong>4 komórki haploidalne</strong> (n) — każda z innym zestawem chromosomów. U człowieka mejoza prowadzi do powstania gamet.',2,2,'4 × n',function(g){[[56,A1,B3],[164,A2,B3],[276,A3,B1],[384,A4,B1]].forEach(function(q){kom(g,q[0],130,50,70,1);rod(g,q[0]-11,112,q[1]);rod(g,q[0]+11,150,q[2])})}]]};
  function draw(){seg(sg,[['mitoza','mitoza'],['mejoza','mejoza']],tryb,function(m){tryb=m;k=0;draw()});
   var L=ST[tryb],e=L[k],s=svg(440,262,'Podział komórki ('+tryb+'), faza: '+e[0]);var g=S('g');s.appendChild(g);e[5](g);
   s.appendChild(T(220,252,'model: 2n = 4 · czerwone — od matki, niebieskie — od ojca',{s:11,f:'var(--viz-mut)'}));clr(pic);pic.appendChild(s);
   lab.innerHTML='krok '+(k+1)+' / '+L.length;prev.disabled=k===0;next.disabled=k===L.length-1;
   var cz=function(n){return n===4?46:n===8?92:n===2?23:n};
   out.innerHTML='<b>'+e[0]+'</b><span>'+e[1]+'</span><span>W jednej komórce: <strong>'+e[2]+'</strong> chromosomy, <strong>'+e[3]+'</strong> chromatyd · ploidia: <strong>'+e[4]+'</strong>. U człowieka: '+cz(e[2])+' chromosomów, '+cz(e[3])+' chromatyd.</span>'}
  draw()}});

BIO.define('dobor-naturalny',{opis:'Symulacja doboru naturalnego: ćmy jasne i ciemne na jasnej lub ciemnej korze (drapieżnik zjada lepiej widoczne) albo bakterie wrażliwe i oporne + antybiotyk; pokolenia, wykres udziału cechy',
mount:function(el,o){var sc=o.start==='bakterie'?'bakterie':'cmy',tlo='ciemne',N=40,pop=[],hist=[],gen=0,seed=7;
  function R(){seed=(seed*16807)%2147483647;return(seed-1)/2147483646}
  var sg=H('div','bv-tools'),t2=H('div','bv-tools'),pic=H('div'),out=H('div','bv-info');el.appendChild(sg);el.appendChild(t2);el.appendChild(pic);el.appendChild(out);
  function reset(){seed=7;gen=0;pop=[];for(var i=0;i<N;i++)pop.push(i<4?1:0);hist=[udz()];draw()}   // 1 = cecha „rzadka na starcie” (ciemna ćma / oporna bakteria): 10%
  function udz(){return pop.filter(function(x){return x}).length/pop.length}
  function pokolenie(){var korzystna=sc==='bakterie'?1:(tlo==='ciemne'?1:0),zyje=pop.filter(function(x){var p=x===korzystna?.85:(sc==='bakterie'?.12:.45);return R()<p});
   if(!zyje.length)zyje=[korzystna];var nowa=[];while(nowa.length<N){var r=zyje[Math.floor(R()*zyje.length)];if(R()<.02)r=1-r;nowa.push(r)}pop=nowa;gen++;hist.push(udz())}
  function draw(){seg(sg,[['cmy','ćmy na korze drzew'],['bakterie','bakterie i antybiotyk']],sc,function(m){sc=m;reset()});
   clr(t2);t2.appendChild(btn('następne pokolenie ▶',function(){pokolenie();draw()}));t2.appendChild(btn('+5 pokoleń',function(){for(var i=0;i<5;i++)pokolenie();draw()}));t2.appendChild(btn('od nowa',reset));
   if(sc==='cmy'){var bt=btn(tlo==='ciemne'?'kora: ciemna (zanieczyszczenia)':'kora: jasna (porosty)',function(){tlo=tlo==='ciemne'?'jasne':'ciemne';draw()});t2.appendChild(bt)}
   var s=svg(440,210,'Populacja i wykres udziału cechy w kolejnych pokoleniach'),bg=sc==='bakterie'?'#f3f6fb':(tlo==='ciemne'?'#4a4038':'#d9d4c4');
   s.appendChild(S('rect',{x:4,y:4,width:200,height:200,rx:10,fill:bg,stroke:'#c9d2cf'}));
   if(sc==='bakterie')s.appendChild(S('rect',{x:4,y:4,width:200,height:200,rx:10,fill:'#e6f0ff',opacity:.6}));
   var r2=(function(){var q=gen*31+3;return function(){q=(q*16807)%2147483647;return(q-1)/2147483646}})();
   pop.forEach(function(x,i){var cx=18+(i%8)*24+r2()*6,cy=22+Math.floor(i/8)*38+r2()*8;
    if(sc==='cmy'){var c=x?'#2b2622':'#efeadf';s.appendChild(S('path',{d:'M'+cx+' '+cy+' q-12 -8 -12 4 q0 8 12 2 q12 6 12 -2 q0 -12 -12 -4z',fill:c,stroke:x?'#000':'#b7ad97','stroke-width':.8}));s.appendChild(S('rect',{x:cx-1.2,y:cy-6,width:2.4,height:11,rx:1.2,fill:'#3a3028'}))}
    else s.appendChild(S('rect',{x:cx-9,y:cy-4,width:18,height:9,rx:4.5,fill:x?'#c0392b':'#7fb069',stroke:x?'#7b1f17':'#3d6b2c'}))});
   // wykres
   var gx=226,gy=16,gw=200,gh=160;s.appendChild(S('rect',{x:gx,y:gy,width:gw,height:gh,fill:'#fff',stroke:'#c9d2cf'}));
   [0,50,100].forEach(function(v){var y=gy+gh-v/100*gh;s.appendChild(S('line',{x1:gx,y1:y,x2:gx+gw,y2:y,stroke:'#eef1f0'}));s.appendChild(T(gx-4,y,v+'%',{s:10,a:'end',f:'var(--viz-mut)'}))});
   var maxg=Math.max(10,hist.length-1),pts=hist.map(function(v,i){return(gx+i/maxg*gw).toFixed(1)+','+(gy+gh-v*gh).toFixed(1)}).join(' ');
   s.appendChild(S('polyline',{points:pts,fill:'none',stroke:sc==='bakterie'?'#c0392b':'#2b2622','stroke-width':2.5}));
   s.appendChild(T(gx+gw/2,gy+gh+16,'pokolenie (0–'+maxg+')',{s:10.5,f:'var(--viz-mut)'}));s.appendChild(T(gx+gw/2,10,sc==='bakterie'?'udział bakterii opornych':'udział ciemnych ciem',{s:10.5,w:700}));
   clr(pic);pic.appendChild(s);var u=Math.round(udz()*100);
   out.innerHTML='<b>Pokolenie '+gen+': '+(sc==='bakterie'?'oporne':'ciemne')+' — '+u+'%</b><span>'+(sc==='bakterie'?
    'Antybiotyk zabija większość bakterii wrażliwych (zielone); przeżywają głównie <strong>oporne</strong> (czerwone), które miały tę cechę <strong>już wcześniej</strong>. Ich potomstwo dziedziczy oporność — z każdym pokoleniem jest ich więcej. Antybiotyk nie tworzy oporności, tylko ją <strong>wybiera</strong>.':
    (tlo==='ciemne'?'Na ciemnej korze jasne ćmy są dobrze widoczne i częściej zjadane przez ptaki; ciemne częściej przeżywają i mają potomstwo — ich udział rośnie.':'Na jasnej korze lepiej widoczne są ciemne ćmy — dobór działa w drugą stronę i ich udział maleje. Zmień korę, aby to zobaczyć.'))+
    '</span><span>Warunki doboru: <strong>zmienność</strong> w populacji (już na starcie) → <strong>różna przeżywalność</strong> w danym środowisku → <strong>dziedziczenie</strong> cechy → zmiana populacji po wielu pokoleniach. Wynik jest losowy — powtórz symulację.</span>'}
  reset()}});
})();
