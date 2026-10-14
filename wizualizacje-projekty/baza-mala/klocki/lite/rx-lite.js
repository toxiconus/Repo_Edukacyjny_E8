/* rx-lite.js — mały silnik naczyń laboratoryjnych dla lekkich lekcji chemii (SVG, bez che-viz.js), 2026-10-11.
   Czyta te same specyfikacje zlewek co GFX.rx z rozszerzenia.js (n, vessel, l0/l1, solid, ppt, gas, bubN, foam, turb, heat, T,
   fumes, eq, why, teacher) — dane wyciąga tools/lab_dane.cjs do lab-dane.json, builder dokleja tylko potrzebne klucze.
   API: CHE.RXL.data(dane) · get(k) · info(k) · mount(host, k, {dur}) → {play()} · pracownia(id) (rejestruje model w CHE.VIEW).
   Naczynia: zlewka (beaker), probówka w łapie statywu (testTube), tygiel na trójkącie i trójnogu (crucible); palnik przy heat. */
(function(){
var C=window.CHE=window.CHE||{};if(C.RXL)return;
var NS='http://www.w3.org/2000/svg',D={specs:{},pracownie:{},reakcje:{}},UID=0;
function S(t,a,k){var e=document.createElementNS(NS,t);for(var x in a)if(a[x]!=null)e.setAttribute(x,a[x]);(k||[]).forEach(function(c){e.appendChild(typeof c==='string'?document.createTextNode(c):c)});return e}
function H(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
/* ---- barwy: wskaźniki (z pH), jony, osady ---- */
var KOL={'ion-cu2':[90,160,225],'ion-fe2':[196,222,170],'ion-fe3':[214,170,90],'ion-ni2':[120,200,140],'ion-cr3':[90,140,110],'ion-mn2':[240,214,220],
 'sol-water':[214,234,248],'sol-i2':[150,90,40],'ppt-caco3':[246,246,242],'ppt-agcl':[244,244,240],'ppt-baso4':[248,248,248],'ppt-pbs':[40,40,42],'ppt-cus':[34,30,30],
 'ppt-cu-oh-2':[80,150,220],'ppt-fe-oh-3':[160,82,40],'ppt-fe-oh-2':[110,140,100]};
var WODA=[214,234,248];
function pHkol(w,pH){
 if(w==='ind-fenoloftaleina')return pH<8.2?WODA:pH<10?[240,150,200]:[214,40,140];
 if(w==='ind-oranz-metylowy')return pH<3.1?[214,40,40]:pH<4.4?[236,120,40]:[240,200,40];
 if(w==='ind-lakmus')return pH<5?[210,50,60]:pH<8?[150,90,170]:[60,90,200];
 if(w==='ind-uniwersalny'||w==='ind-bbt'||w==='ind-kapusta'){var T=[[0,[200,20,30]],[3,[240,90,40]],[5,[245,170,40]],[7,[110,180,60]],[9,[40,140,150]],[11,[40,70,170]],[14,[90,30,130]]];
  for(var i=0;i<T.length-1;i++)if(pH<=T[i+1][0]){var f=(pH-T[i][0])/(T[i+1][0]-T[i][0]);return mix(T[i][1],T[i+1][1],f)}return T[T.length-1][1]}
 return WODA}
function kol(c){if(!c)return WODA;if(Array.isArray(c)){if(typeof c[0]==='number')return c;return pHkol(c[0],c[1])}
 if(c[0]==='#'){var n=parseInt(c.slice(1),16);return[n>>16&255,n>>8&255,n&255]}return KOL[c]||[200,200,200]}
function mix(a,b,f){return[0,1,2].map(function(i){return Math.round(a[i]+(b[i]-a[i])*f)})}
function rgb(c,a){return'rgba('+c[0]+','+c[1]+','+c[2]+','+(a==null?1:a)+')'}
var GAZY={CO2:['tlenek węgla(IV)','zmętnienie wody wapiennej'],H2:['wodór','charakterystyczne „pyk” przy zbliżeniu płomienia'],O2:['tlen','rozżarzenie tlącego się łuczywka'],
 NH3:['amoniak','ostry zapach; wilgotny papierek uniwersalny zabarwia się na niebiesko'],H2S:['siarkowodór','zapach zgniłych jaj; bibułka z octanem ołowiu(II) czernieje'],
 HCl:['chlorowodór','biały dym przy bagietce zwilżonej amoniakiem'],Cl2:['chlor','żółtozielony gaz, odbarwia wilgotny papierek wskaźnikowy'],SO2:['tlenek siarki(IV)','ostry zapach, odbarwia roztwór manganianu(VII) potasu']};
var CSS='.rxl{font:14px/1.5 Inter,system-ui,sans-serif}.rxl svg{display:block;width:100%;max-width:340px;margin:0 auto}.rxl .bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0}'+
 '.rxl button.o{border:1px solid rgba(100,116,139,.45);background:transparent;color:inherit;border-radius:8px;padding:5px 10px;font:600 12.5px Inter,system-ui;cursor:pointer}.rxl button.o.on{background:#0d6868;color:#fff;border-color:#0d6868}'+
 '.rxl .two{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px;align-items:start}.rxl .eq{font:700 15px ui-monospace,Consolas,monospace;margin:4px 0 8px;overflow-wrap:anywhere}'+
 '.rxl .nt{border-left:3px solid #0d6868;background:rgba(13,104,104,.06);padding:8px 10px;border-radius:6px;font-size:13.5px}.rxl .tch{color:#b83a45;font-weight:700}.rxl .cap{text-align:center;font-weight:700;font-size:13px;margin-top:2px}';
function css(){if(document.getElementById('rxl-css'))return;var s=document.createElement('style');s.id='rxl-css';s.textContent=CSS;document.head.appendChild(s)}

/* ---- rysowanie sceny ---- */
function palnik(g,x,y){g.appendChild(S('rect',{x:x-14,y:y-6,width:28,height:52,rx:3,fill:'#7b8794'}));g.appendChild(S('rect',{x:x-26,y:y+44,width:52,height:10,rx:3,fill:'#56606b'}));
 var pl=S('path',{d:'M'+x+' '+(y-56)+' C'+(x+14)+' '+(y-30)+' '+(x+12)+' '+(y-8)+' '+x+' '+(y-6)+' C'+(x-12)+' '+(y-8)+' '+(x-14)+' '+(y-30)+' '+x+' '+(y-56)+'z',fill:'rgba(90,140,255,.75)'});
 var in_=S('path',{d:'M'+x+' '+(y-34)+' C'+(x+6)+' '+(y-22)+' '+(x+5)+' '+(y-9)+' '+x+' '+(y-8)+' C'+(x-5)+' '+(y-9)+' '+(x-6)+' '+(y-22)+' '+x+' '+(y-34)+'z',fill:'rgba(170,230,255,.9)'});
 g.appendChild(pl);g.appendChild(in_);return pl}
function scena(sp){var v=sp.vessel==='tube'?'testTube':sp.vessel||'beaker',heat=!!sp.heat,s=S('svg',{viewBox:'0 0 300 250',role:'img','aria-label':sp.n||'doświadczenie'}),id='rxl'+(++UID);
 var defs=S('defs',{},[S('clipPath',{id:id+'c'},[])]);s.appendChild(defs);var cp=defs.firstChild,g=S('g'),L={};s.appendChild(g);
 g.appendChild(S('rect',{x:0,y:236,width:300,height:14,fill:'rgba(100,116,139,.18)'}));
 var obrys,dno,top,lewa,prawa,flame=null;
 if(v==='crucible'){
  if(heat){flame=palnik(g,150,196);g.appendChild(S('path',{d:'M92 132 L92 236 M208 132 L208 236 M86 132 H214',stroke:'#4b5563','stroke-width':5,fill:'none'}))}
  g.appendChild(S('path',{d:'M112 126 L188 126 L150 140 Z',fill:'none',stroke:'#c7b9a5','stroke-width':4}));
  obrys='M112 82 L188 82 L178 128 Q150 136 122 128 Z';top=82;dno=130;lewa=114;prawa=186;
 }else if(v==='testTube'){
  g.appendChild(S('path',{d:'M40 236 V40 M40 60 H112',stroke:'#4b5563','stroke-width':5,fill:'none'}));g.appendChild(S('rect',{x:108,y:50,width:26,height:20,rx:4,fill:'#6b7280'}));
  if(heat)flame=palnik(g,190,206);
  obrys='M124 40 L124 168 Q124 190 142 190 Q160 190 160 168 L160 40';top=56;dno=188;lewa=126;prawa=158;
  if(heat){g.setAttribute('transform','');}
 }else{
  if(heat){flame=palnik(g,150,206);g.appendChild(S('path',{d:'M86 150 L86 236 M214 150 L214 236 M78 150 H222',stroke:'#4b5563','stroke-width':5,fill:'none'}));g.appendChild(S('rect',{x:84,y:144,width:132,height:6,fill:'#9ca3af'}))}
  var b0=heat?144:232;obrys='M92 '+(b0-130)+' L92 '+(b0-6)+' Q92 '+b0+' 100 '+b0+' L200 '+b0+' Q208 '+b0+' 208 '+(b0-6)+' L208 '+(b0-130);top=b0-118;dno=b0-2;lewa=94;prawa=206;
 }
 cp.appendChild(S('path',{d:obrys+(v==='crucible'?'':' Z')}));
 var poz=v==='crucible'?dno-6:dno-(dno-top)*(sp.level!=null&&sp.level<0.2?0.12:0.55);
 var ciecz=S('rect',{x:0,y:poz,width:300,height:250,'clip-path':'url(#'+id+'c)',fill:rgb(kol(sp.l0||'sol-water'),.85)});
 if(!(v==='crucible'))g.appendChild(ciecz);else{ciecz=null;g.appendChild(S('path',{d:obrys,fill:'#f6f3ec'}))}
 var warstwa=S('g',{'clip-path':'url(#'+id+'c)'});g.appendChild(warstwa);
 g.appendChild(S('path',{d:obrys,fill:'none',stroke:'#64748b','stroke-width':3,'stroke-linejoin':'round'}));
 if(v!=='crucible')g.appendChild(S('path',{d:'M'+(lewa+4)+' '+(top+8)+' L'+(lewa+4)+' '+(dno-16),stroke:'rgba(255,255,255,.7)','stroke-width':4,'stroke-linecap':'round'}));
 return {svg:s,g:g,warstwa:warstwa,ciecz:ciecz,flame:flame,v:v,poz:poz,dno:dno,top:top,lewa:lewa,prawa:prawa}}

function anim(sc,sp,dur){var T0=null,raf=null,R=sc.warstwa,parts=[],bub=[],osad=[],dym=[];
 function czysc(){while(R.firstChild)R.removeChild(R.firstChild);parts=[];bub=[];osad=[];dym=[]}
 function start(){czysc();var so=sp.solid;if(so){var n=Math.round(6+(so.eq||3)*4),c=kol(so.col||[220,220,220]);for(var i=0;i<n;i++){var x=sc.lewa+10+Math.random()*(sc.prawa-sc.lewa-20),y=sc.dno-6-Math.random()*8,r=so.shape==='chips'?3+Math.random()*3:2+Math.random()*1.5;
   var e=so.shape==='chips'?S('rect',{x:x,y:y,width:r*2.2,height:r,rx:1,fill:rgb(c)}):S('circle',{cx:x,cy:y,r:r,fill:rgb(c)});R.appendChild(e);parts.push({e:e,r:r,x:x,y:y})}}
  if(sp.ppt){var pc=kol(sp.ppt);for(var j=0;j<40;j++){var o=S('circle',{cx:sc.lewa+6+Math.random()*(sc.prawa-sc.lewa-12),cy:sc.poz+Math.random()*(sc.dno-sc.poz),r:1.6+Math.random(),fill:rgb(pc),opacity:0});R.appendChild(o);osad.push({e:o,y0:+o.getAttribute('cy'),d:Math.random()})}}
  if(sp.turb){var tb=S('rect',{x:0,y:sc.poz,width:300,height:250,fill:'rgba(255,255,255,0)'});R.appendChild(tb);sc.tb=tb}else sc.tb=null;
  if(sp.foam){var fm=S('rect',{x:0,y:sc.poz-4,width:300,height:0,fill:'rgba(250,250,245,.9)'});R.appendChild(fm);sc.fm=fm}else sc.fm=null}
 function krok(ts){if(T0==null)T0=ts;var t=Math.min(1,(ts-T0)/(dur*1000)),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  if(sc.ciecz&&(sp.l0||sp.l1))sc.ciecz.setAttribute('fill',rgb(mix(kol(sp.l0||'sol-water'),kol(sp.l1||sp.l0||'sol-water'),e),.85));
  var so=sp.solid;if(so){var end=so.end==null?1:so.end;parts.forEach(function(p){var k=1-(1-end)*e;if(p.e.tagName==='circle')p.e.setAttribute('r',Math.max(0,p.r*k));else{p.e.setAttribute('width',Math.max(0,p.r*2.2*k));}
    if(sp.heat&&so.col2&&e>.15)p.e.setAttribute('fill',rgb(mix(kol(so.col),kol(so.col2),Math.min(1,(e-.15)/.5))))})}
  if(sp.heat&&(sp.T||0)>=700&&sc.v==='crucible'){var b=Math.max(0,Math.sin(Math.PI*Math.min(1,e*1.4)));sc.blask=sc.blask||(function(){var x=S('circle',{cx:150,cy:118,r:30,fill:'rgba(255,255,255,0)'});sc.g.appendChild(x);return x})();sc.blask.setAttribute('fill','rgba(255,255,240,'+(.9*b).toFixed(2)+')');sc.blask.setAttribute('r',20+30*b)}
  osad.forEach(function(o){var a=Math.max(0,Math.min(1,(e-.15)*1.6)),y=o.y0+(sc.dno-4-o.y0)*Math.max(0,e-.3-o.d*.3)/0.7;o.e.setAttribute('opacity',a.toFixed(2));o.e.setAttribute('cy',Math.min(sc.dno-3,y))});
  if(sc.tb)sc.tb.setAttribute('fill','rgba(255,255,255,'+(0.55*Math.sin(Math.PI*Math.min(1,e*1.2))).toFixed(2)+')');
  if(sc.fm)sc.fm.setAttribute('height',Math.max(0,22*(sp.foam||0)*Math.sin(Math.PI*e)));
  if(sp.gas&&t<1&&Math.random()<(sp.bubN||1)*0.12*Math.sin(Math.PI*e)+0.02){var x0=sc.lewa+8+Math.random()*(sc.prawa-sc.lewa-16),c=S('circle',{cx:x0,cy:sc.dno-6,r:1.5+Math.random()*2.5,fill:'rgba(255,255,255,.75)',stroke:'rgba(100,116,139,.6)'});R.appendChild(c);bub.push({e:c,y:sc.dno-6,v:1+Math.random()*1.5})}
  bub=bub.filter(function(b){b.y-=b.v;b.e.setAttribute('cy',b.y);if(b.y<sc.poz){R.removeChild(b.e);return false}return true});
  if(sp.fumes&&Math.random()<.08*Math.sin(Math.PI*e)){var w=S('circle',{cx:sc.lewa+20+Math.random()*(sc.prawa-sc.lewa-40),cy:sc.top,r:4,fill:'rgba(220,220,220,.5)'});sc.g.appendChild(w);dym.push({e:w,y:sc.top,r:4})}
  dym=dym.filter(function(d){d.y-=.8;d.r+=.25;d.e.setAttribute('cy',d.y);d.e.setAttribute('r',d.r);d.e.setAttribute('opacity',Math.max(0,1-(sc.top-d.y)/60));if(sc.top-d.y>60){sc.g.removeChild(d.e);return false}return true});
  if(sc.flame)sc.flame.setAttribute('transform','translate(0,'+(Math.sin(ts/90)*1.5).toFixed(1)+')');
  if(t<1||bub.length||dym.length)raf=requestAnimationFrame(krok);else raf=null}
 return {play:function(){if(raf)cancelAnimationFrame(raf);T0=null;start();raf=requestAnimationFrame(krok)}}}

var RXL=C.RXL={
 data:function(d){['specs','pracownie','reakcje'].forEach(function(k){if(d&&d[k])Object.keys(d[k]).forEach(function(x){D[k][x]=d[k][x]})})},
 get:function(k){return D.specs[k]},
 info:function(k){var s=D.specs[k]||{},g=s.gas&&GAZY[s.gas];return{eq:s.eq,obs:s.why,gas:g?{name:g[0],test:g[1]}:null}},
 mount:function(host,k,o){css();o=o||{};var sp=D.specs[k];if(!sp){host.textContent='Brak doświadczenia „'+k+'”.';return{play:function(){}}}
  var w=H('div','rxl'),sc=scena(sp);w.appendChild(sc.svg);w.appendChild(H('div','cap',sp.n||k));host.appendChild(w);var a=anim(sc,sp,o.dur||6);if(o.auto!==false)setTimeout(a.play,200);return a},
 panel:function(k,d){var sp=D.specs[k]||{},I=RXL.info(k);d=d||{};
  return '<div class="eq">'+(d.eq||sp.eq||'')+'</div><div class="nt"><b>Warunki:</b> '+(d.war||'—')+'<br><b>Obserwacja:</b> '+(d.obs||sp.why||'—')+(I.gas&&!sp.noRx?'<br><b>Gaz:</b> '+I.gas.name+' — '+I.gas.test:'')+'<br><b>Wniosek:</b> '+(d.wn||'—')+'<br><b>BHP:</b> '+(d.bhp||'—')+(sp.teacher?'<br><span class="tch">Tylko pokaz nauczyciela.</span>':'')+'</div>'},
 /* zlewka w tekście lekcji (@zlewka pracownia klucz) */
 zlewka:function(host,prac,k){css();var P=D.pracownie[prac]||{},d=(P.notes||{})[k]||{},w=H('div','rxl'),g=H('div','two'),l=H('div'),r=H('div');g.appendChild(l);g.appendChild(r);w.appendChild(g);host.appendChild(w);
  var m=RXL.mount(l,k,{dur:6});var bb=H('div','bar'),x=H('button','o','▶ powtórz');x.type='button';x.onclick=function(){m.play()};bb.appendChild(x);l.appendChild(bb);r.innerHTML=RXL.panel(k,d)},
 /* pracownia jako model (@model id) */
 pracownia:function(id){var P=D.pracownie[id];if(!P||!C.VIEW)return;C.VIEW.define(id,{title:P.title,hint:P.hint,build:function(host){css();host.classList.add('rxl');var bars=H('div'),area=H('div');host.appendChild(bars);host.appendChild(area);var all=[];
   (P.groups||[]).forEach(function(gr){var row=H('div','bar','<b>'+gr[0]+':</b>'),n=0;gr[1].forEach(function(k){if(!D.specs[k])return;n++;var b=H('button','o',((P.notes||{})[k]||{}).btn||(D.specs[k].n||k).split(' (')[0]);b.type='button';b._k=k;b.onclick=function(){all.forEach(function(x){x.classList.toggle('on',x===b)});area.innerHTML='';RXL.zlewka(area,id,k)};row.appendChild(b);all.push(b)});if(n)bars.appendChild(row)});
   if(all[0])all[0].click()}})}
};
})();
