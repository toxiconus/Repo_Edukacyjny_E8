/* bio-core.js — rdzeń biblioteki grafik BIO (v0.2): montaż, prymitywy, efekty i pomocnicze.
   Ładowany przed każdą wizualizacją z wizualizacje/<id>.js. Wspólne pomocnicze są w BIO.Lh["<grupa>.<nazwa>"]. */
(function(){ var w=window; w.BIO=w.BIO||{}; w.BIO.Lh=w.BIO.Lh||{}; })();
/* ---- grupa A: rdzeń (dawny blok 1) ---- */
(function(){
'use strict';
var BIO=window.BIO;
var BIO=window.BIO=window.BIO||{};
if(BIO.V)return;
BIO.V='0.1';
var REG={};
BIO.define=function(id,def){REG[id]=def};
BIO.katalog=function(){return Object.keys(REG).map(function(k){return{id:k,opis:REG[k].opis||''}})};
var NS='http://www.w3.org/2000/svg';
function set(e,at){for(var k in at){var v=at[k];if(v==null)continue;
  if((k==='fill'||k==='stroke'||k==='stop-color')&&String(v).indexOf('var(')>=0)e.style.setProperty(k,v);else e.setAttribute(k,v)}}
function add(e,kids){(kids||[]).forEach(function(c){if(c==null||c===false)return;e.appendChild(typeof c==='string'||typeof c==='number'?document.createTextNode(String(c)):c)});return e}
function S(tag,at,kids){var e=document.createElementNS(NS,tag);set(e,at||{});return add(e,kids)}
function H(tag,cls,html,kids){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return add(e,kids)}
function svg(w,h,label,kids){return S('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':label||'',preserveAspectRatio:'xMidYMid meet'},kids)}
function T(x,y,t,o){o=o||{};return S('text',{x:x,y:y,'text-anchor':o.a||'middle','dominant-baseline':o.b||'middle','font-size':o.s||12,'font-weight':o.w||600,fill:o.f||'var(--viz-ink)'},[t])}
function btn(label,on){var b=H('button','bv-btn');b.type='button';b.textContent=label;if(on)b.onclick=on;return b}
BIO.S=S;
BIO.H=H;
BIO.svg=svg;
BIO.T=T;
BIO.btn=btn;
var NT={A:{n:'adenina',t:'puryna'},G:{n:'guanina',t:'puryna'},T:{n:'tymina',t:'pirymidyna'},C:{n:'cytozyna',t:'pirymidyna'},U:{n:'uracyl',t:'pirymidyna'}};
var PAIR={A:'T',T:'A',C:'G',G:'C'};
var PAIR_RNA={A:'U',T:'A',C:'G',G:'C'};
var HB={A:2,T:2,C:3,G:3,U:2};
function col(b){return'var(--nt-'+b+')'}
function bg(b){return'var(--nt-'+b+'-bg)'}
function pur(b){return NT[b]&&NT[b].t==='puryna'}
BIO.NT=NT;
BIO.PAIR=PAIR;
BIO.PAIR_RNA=PAIR_RNA;
BIO.HB=HB;
var g=BIO.g={};
function hexPts(cx,cy,r){var p=[];for(var i=0;i<6;i++){var a=Math.PI/180*(60*i-90);p.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return p}
function pentOn(p1,p2,hx,hy){ /* pięciokąt foremny na krawędzi p1-p2, na zewnątrz od środka (hx,hy) */
  var mx=(p1[0]+p2[0])/2,my=(p1[1]+p2[1])/2,dx=p2[0]-p1[0],dy=p2[1]-p1[1],L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L;
  if((mx+nx-hx)*(mx+nx-hx)+(my+ny-hy)*(my+ny-hy)<(mx-hx)*(mx-hx)+(my-hy)*(my-hy)){nx=-nx;ny=-ny}
  var ap=L/(2*Math.tan(Math.PI/5)),R=L/(2*Math.sin(Math.PI/5)),cx=mx+nx*ap,cy=my+ny*ap,a0=Math.atan2(p1[1]-cy,p1[0]-cx),pts=[];
  for(var i=0;i<5;i++){var a=a0+i*2*Math.PI/5;pts.push([cx+R*Math.cos(a),cy+R*Math.sin(a)])}return pts}
function P(pts){return pts.map(function(p){return p[0].toFixed(1)+','+p[1].toFixed(1)}).join(' ')}
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
g.miniHelix=function(x,y,w,h,turns){var gg=S('g',{}),n=40,a='',b='';for(var i=0;i<=n;i++){var t=i/n,yy=y+t*h,ph=t*turns*2*Math.PI;
  a+=(i?'L':'M')+(x+w/2+w/2*Math.sin(ph)).toFixed(1)+' '+yy.toFixed(1);b+=(i?'L':'M')+(x+w/2-w/2*Math.sin(ph)).toFixed(1)+' '+yy.toFixed(1);
  if(i%4===2)gg.appendChild(S('line',{x1:x+w/2+w/2*Math.sin(ph),y1:yy,x2:x+w/2-w/2*Math.sin(ph),y2:yy,stroke:'var(--hbond)','stroke-width':1.5}))}
  gg.appendChild(S('path',{d:a,fill:'none',stroke:'var(--strand1)','stroke-width':3,'stroke-linecap':'round'}));
  gg.appendChild(S('path',{d:b,fill:'none',stroke:'var(--strand2)','stroke-width':3,'stroke-linecap':'round'}));return gg};
g.squiggle=function(cx,cy,r,seed){var d='',n=120,s=seed||1;for(var i=0;i<=n;i++){var a=i/n*Math.PI*2+s,rr=r*(0.62+0.16*Math.sin(4*a+s)+0.1*Math.sin(9*a+2*s));
  d+=(i?'L':'M')+(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1)}
  return S('path',{d:d,fill:'none',stroke:'var(--dna-ink)','stroke-width':1.8,'stroke-linejoin':'round','stroke-linecap':'round'})};
g.chromosome=function(cx,cy,h,fill){var gg=S('g',{}),w=h*0.26;
  [-18,18].forEach(function(r){gg.appendChild(S('rect',{x:cx-w/2,y:cy-h/2,width:w,height:h,rx:w/2,fill:fill||'var(--nucleus-bg)',stroke:'var(--dna-ink)','stroke-width':2,transform:'rotate('+r+' '+cx+' '+cy+')'}))});
  gg.appendChild(S('circle',{cx:cx,cy:cy,r:w*0.32,fill:'var(--dna-ink)'}));return gg};
var fx=BIO.fx={};
fx.info=function(root,box,map,first){
  function show(k,el){var d=map[k];if(!d)return;root.querySelectorAll('.bv-hit.sel').forEach(function(x){x.classList.remove('sel')});
    if(el)el.classList.add('sel');box.className='bv-info';box.innerHTML='<b>'+d[0]+'</b>'+d[1]}
  root.querySelectorAll('[data-k]').forEach(function(el){el.classList.add('bv-hit');el.setAttribute('tabindex','0');el.setAttribute('role','button');
    el.addEventListener('click',function(){show(el.getAttribute('data-k'),el)});
    el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();show(el.getAttribute('data-k'),el)}})});
  if(first)show(first,root.querySelector('[data-k="'+first+'"]'));return show};
fx.infoBox=function(txt){return H('div','bv-info',txt||'Kliknij element grafiki, aby zobaczyć wyjaśnienie.')};
fx.auto=function(el,step,ms,o){o=o||{};var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches,on=!rm,vis=false,tm=null;
  var bar=H('div','bv-tools bv-auto'),b=H('button','bv-btn');b.type='button';
  function lab(){b.textContent=on?'⏸ zatrzymaj animację':'▶ odtwarzaj automatycznie';b.setAttribute('aria-pressed',on?'true':'false');b.classList.toggle('on',on)}
  function halt(){if(tm){clearInterval(tm);tm=null}}
  function run(){if(tm||!on||!vis||document.hidden)return;if(o.now)step();tm=setInterval(function(){if(document.hidden||!vis){halt();return}step()},ms)}
  b.onclick=function(){on=!on;lab();if(on)run();else halt()};bar.appendChild(b);el.insertBefore(bar,el.firstChild);lab();
  function user(e){if(bar.contains(e.target)||!on)return;on=false;halt();lab()}
  el.addEventListener('pointerdown',user,true);el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')user(e)},true);
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){es.forEach(function(e){vis=e.isIntersecting;if(vis)run();else halt()})},{threshold:.35}).observe(el);else{vis=true;run()}
  document.addEventListener('visibilitychange',function(){if(document.hidden)halt();else run()});
  return {stop:function(){on=false;halt();lab()}}};
fx.toggle=function(btns,i){btns.forEach(function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-pressed',j===i?'true':'false')})};
BIO.mount=function(fig){if(fig.dataset.bioOn)return;fig.dataset.bioOn=1;
  var id=fig.getAttribute('data-bio-viz'),body=fig.querySelector('.bio-fig-body')||fig,opt={};
  try{opt=JSON.parse(fig.getAttribute('data-opt')||'{}')}catch(e){}
  var d=REG[id];if(!d){body.innerHTML='<p class="bio-err">Brak grafiki „'+id+'” w bibliotece bio-viz.js.</p>';return}
  d.mount(body,opt,fig)};
BIO.mountAll=function(root){(root||document).querySelectorAll('[data-bio-viz]').forEach(BIO.mount)};
function chain(el,nodes,opt){var c=H('div','bv-chain'+(opt.pion!=='nie'?' v':''));
  nodes.forEach(function(n,i){if(i)c.appendChild(H('span','bv-arrow','→'));var d=H('div','bv-node'+(n.k?' k':''));
    if(n.ico)d.appendChild(n.ico);d.appendChild(H('b',null,n.b));if(n.s)d.appendChild(H('small',null,n.s));if(n.key)d.setAttribute('data-k',n.key);c.appendChild(d)});
  el.appendChild(c);return c}
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
function mito(cx,cy,rx,ry,rot){var c='';for(var i=0;i<5;i++){var x=cx-rx*0.7+i*rx*0.35;c+='M'+x+' '+(cy+(i%2?-ry*0.75:ry*0.75))+'V'+(cy+(i%2?ry*0.1:-ry*0.1))}
  return S('g',{'data-k':'mito',transform:rot?'rotate('+rot+' '+cx+' '+cy+')':null},[S('ellipse',{cx:cx,cy:cy,rx:rx,ry:ry,fill:'var(--mito-bg)',stroke:'var(--mito)','stroke-width':2}),
   S('path',{d:c,fill:'none',stroke:'var(--mito)','stroke-width':1.4,'stroke-linecap':'round',opacity:0.8}),S('circle',{cx:cx+rx*0.45,cy:cy,r:Math.min(4,ry*0.4),fill:'none',stroke:'var(--dna-ink)','stroke-width':1.6})])}
function nucleus(cx,cy,r,seed){return S('g',{'data-k':'jadro'},[S('circle',{cx:cx,cy:cy,r:r,fill:'var(--nucleus-bg)',stroke:'var(--nucleus)','stroke-width':2.5}),
  S('circle',{cx:cx,cy:cy,r:r-4,fill:'none',stroke:'var(--nucleus)','stroke-width':0.8,opacity:0.6}),g.squiggle(cx,cy,r*0.85,seed),S('circle',{cx:cx+r*0.3,cy:cy-r*0.25,r:r*0.18,fill:'var(--nucleus)',opacity:0.55})])}
function cleanSeq(s,def){s=String(s||def).toUpperCase().replace(/[^ATCG]/g,'');return s||def}
if('IntersectionObserver' in window&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){
  var st=document.createElement('style');st.textContent='.bio-fig.rv{opacity:0;transform:translateY(10px)}.bio-fig.rv.in{opacity:1;transform:none;transition:opacity .5s ease,transform .5s ease}';document.head.appendChild(st);
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -40px 0px'});
  var mA=BIO.mountAll;BIO.mountAll=function(root){mA(root);(root||document).querySelectorAll('.bio-fig:not(.rv)').forEach(function(f){f.classList.add('rv');io.observe(f)})}}
BIO.Lh["A.REG"]=REG;BIO.Lh["A.S"]=S;BIO.Lh["A.H"]=H;BIO.Lh["A.svg"]=svg;BIO.Lh["A.T"]=T;BIO.Lh["A.btn"]=btn;BIO.Lh["A.NT"]=NT;BIO.Lh["A.PAIR"]=PAIR;BIO.Lh["A.PAIR_RNA"]=PAIR_RNA;BIO.Lh["A.HB"]=HB;BIO.Lh["A.g"]=g;BIO.Lh["A.hexPts"]=hexPts;BIO.Lh["A.pur"]=pur;BIO.Lh["A.P"]=P;BIO.Lh["A.pentOn"]=pentOn;BIO.Lh["A.bg"]=bg;BIO.Lh["A.col"]=col;BIO.Lh["A.fx"]=fx;BIO.Lh["A.ICO"]=ICO;BIO.Lh["A.NS"]=NS;BIO.Lh["A.set"]=set;BIO.Lh["A.add"]=add;BIO.Lh["A.chain"]=chain;BIO.Lh["A.ico"]=ico;BIO.Lh["A.mito"]=mito;BIO.Lh["A.nucleus"]=nucleus;BIO.Lh["A.cleanSeq"]=cleanSeq;
})();
/* ---- grupa B: prototypy (dawny blok 2, wzorcownia) ---- */
(function(){
var BIO=window.BIO;
var BIO=window.BIO;
if(!BIO||!BIO.define||BIO.WZOR)return;
BIO.WZOR=1;
var NS='http://www.w3.org/2000/svg';
var UID=0;
var css=document.createElement('style');
css.textContent=
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
BIO.Lh["B.css"]=css;BIO.Lh["B.UID"]=UID;BIO.Lh["B.NS"]=NS;BIO.Lh["B.S"]=S;BIO.Lh["B.H"]=H;BIO.Lh["B.clr"]=clr;BIO.Lh["B.seg"]=seg;BIO.Lh["B.info"]=info;BIO.Lh["B.key"]=key;
BIO.Lh["B.nextUid"]=function(){return ++UID};
})();
/* ---- grupa C: lekcje-przeglądy (dawny blok 3) ---- */
(function(){
var BIO=window.BIO;
var BIO=window.BIO;
if(!BIO||!BIO.define||BIO.REV_VIZ)return;
BIO.REV_VIZ=1;
var S=BIO.S;
var svg=BIO.svg;
var T=BIO.T;
var btn=BIO.btn;
function H(t,c,h,k){var e=BIO.H(t,c,h,k);if(c==='bv-info'){var w=BIO.H('div');e.appendChild(w);Object.defineProperty(e,'innerHTML',{set:function(v){w.innerHTML=String(v).replace(/^<b>([\s\S]*?)<\/b>/,'<strong style="display:block;margin-bottom:2px">$1</strong>').replace(/<(\/?)b(\s|>)/g,'<$1strong$2').replace(/<span>/g,'<span style="display:block;margin-top:3px">')},get:function(){return w.innerHTML}})}return e}
function clr(e){while(e.firstChild)e.removeChild(e.firstChild)}
function seg(box,items,cur,cb){clr(box);items.forEach(function(it){var b=btn(it[1],function(){cb(it[0])});if(it[0]===cur)b.classList.add('on');b.setAttribute('aria-pressed',String(it[0]===cur));box.appendChild(b)})}
BIO.Lh["C.S"]=S;BIO.Lh["C.svg"]=svg;BIO.Lh["C.T"]=T;BIO.Lh["C.btn"]=btn;BIO.Lh["C.H"]=H;BIO.Lh["C.clr"]=clr;BIO.Lh["C.seg"]=seg;
})();
