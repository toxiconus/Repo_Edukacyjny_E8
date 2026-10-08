/* atlas-gfx.js — grafiki atlasu (_anon_004) jako komponenty wielokrotnego użytku: CHE.LAB.atomBohr, CHE.LAB.orbitalCloud.
   Dodatek (engine/src/dodatki/): lab dostaje go na końcu strony (tools/silnik.py lab_html), lekcje w md2html przed rozszerzeniami.
   Stare źródła silnika bez zmian (test bajt w bajt liczy lab BEZ dodatków). Atlas korzysta z komponentów przez podmianę
   swoich funkcji globalnych (niżej) — tylko gdy atlas jest na stronie. */
(function(){
var C=window.CHE=window.CHE||{},L;try{L=C.LAB=C.LAB||{}}catch(_){L={}}
if(L.atomBohr&&L.orbitalCloud)return;
/* atomBohr — rysunek atomu z atlasu (_anon_004 bohr) jako komponent canvas, bez stanu i DOM atlasu.
   Ten sam wygląd: tło, jądro (kulki p/n złotym kątem, gradient, obręcz „ponad najczęstszy izotop”), powłoki z etykietą „K · 2/2”,
   elektrony wewnętrzne #2f8a55 / walencyjne #b85f00 z poświatą, obrót powłok w czasie.
   atomBohr(canvas, {p, n, e, n0?, cfg?, t?}) — cfg: {'1s':2,'2s':2,'2p':6,…} (jak fill() atlasu); bez cfg → model szkolny 2,8,8,… (powłoki = podpowłoki jednej grupy).
   Pełna wersja z atlasu (2026-10-08): o.zoom (powiększenie, jak kółko myszy w atlasie), o.lupa (wstawka z jądrem przy małym zoomie),
   o.sel (podświetlona powłoka 1..7), o.hl ('3d' — podświetlona podpowłoka + opis u dołu; o.bn, o.chg, o.nl), o.cfgShow (część elektronów — budowanie),
   o.order + o.role (kolejność i role podpowłok jak w atlasie). Zwraca {R0, step, Rn, rings, ns, zNuc, inset, ix, iy, ir}.
   atomBohr.anim(canvas, o) → funkcja stop(). Atlas rysuje bohr tym komponentem (podmiana niżej). */
function atomBohr(cv,o){var x=cv.getContext('2d'),P=cv.width,W=760,cx=380,cy=380,t=(o.t||0)/1000,z=o.p|0,N=Math.max(0,o.n|0),N0=o.n0==null?N:o.n0,ne=Math.max(0,o.e|0),
 zm=o.zoom||1,sel=o.sel||0,hl=o.hl||null,COL=o.col||{c:'#2f8a55',v:'#b85f00',r:'#b0467a'},SH='KLMNOPQ',shells=[],skeys=[],vflag=[],show=o.cfgShow||o.cfg;
 if(o.cfg&&o.order&&o.role){o.order.filter(function(k){return o.cfg[k]}).forEach(function(k){var i=+k[0]-1,ro=o.role(o.cfg,k);shells[i]=shells[i]||[];skeys[i]=skeys[i]||[];if(ro==='v')vflag[i]=true;for(var j=0;j<(show[k]||0);j++){shells[i].push(ro);skeys[i].push(k)}})}
 else if(o.cfg){var ks=Object.keys(o.cfg).filter(function(k){return o.cfg[k]>0}),maxn=0;ks.forEach(function(k){maxn=Math.max(maxn,+k[0])});
  ks.forEach(function(k){var i=+k[0]-1,ro=+k[0]===maxn?'v':'c';shells[i]=shells[i]||[];skeys[i]=skeys[i]||[];if(ro==='v')vflag[i]=true;for(var j=0;j<(show[k]||0);j++){shells[i].push(ro);skeys[i].push(k)}})}
 else{var cap=[2,8,8],left=ne,q=0;while(left>0){var c=q<3?Math.min(cap[q],left):left;shells[q]=[];skeys[q]=[];for(var j=0;j<c;j++){shells[q].push('c');skeys[q].push(String(q+1))}left-=c;q++}
  if(q){vflag[q-1]=true;shells[q-1]=shells[q-1].map(function(){return 'v'})}}
 var ns=shells.filter(Boolean).length,R0=ns<=1?150:ns===2?118:78,step=Math.min(84,(W/2-R0-34)/Math.max(ns-1,1)),tot=z+N,Rn=3.4*Math.sqrt(tot)+4,zNuc=Math.min(70,262/Rn),rings=[],kq=0;
 shells.forEach(function(sh,i){if(!sh)return;rings.push({n:i+1,R:R0+kq*step});kq++});
 var Rlast=rings.length?rings[rings.length-1].R:0,out={R0:R0,step:step,Rn:Rn,rings:rings,ns:ns,zNuc:zNuc,inset:false};
 x.setTransform(P/W,0,0,P/W,0,0);var bg=x.createRadialGradient(W/2,W/2,40,W/2,W/2,W*.72);bg.addColorStop(0,'#fcfdfe');bg.addColorStop(1,'#e6edf2');x.fillStyle=bg;x.fillRect(0,0,W,W);
 x.save();x.translate(cx,cy);x.scale(zm,zm);x.translate(-cx,-cy);
 var sa=zm<2.5?1:Math.max(0,1-(zm-2.5)/4),lw=1/Math.sqrt(zm);
 if(sa>0){x.globalAlpha=sa;x.strokeStyle='rgba(23,33,43,.06)';x.lineWidth=lw;for(var r=90;r<W;r+=90){x.beginPath();x.arc(cx,cy,r,0,7);x.stroke()}
  x.beginPath();x.moveTo(0,cy);x.lineTo(W,cy);x.moveTo(cx,0);x.lineTo(cx,W);x.stroke();x.globalAlpha=1}
 var gl=x.createRadialGradient(cx,cy,2,cx,cy,Rn*2.4);gl.addColorStop(0,'rgba(214,69,43,.25)');gl.addColorStop(1,'rgba(214,69,43,0)');x.fillStyle=gl;x.beginPath();x.arc(cx,cy,Rn*2.4,0,7);x.fill();
 var rn=3.2,sph=rn*zm>7,lab=rn*zm>13,nI=0;
 for(var i=0;i<tot;i++){var rr=tot>1?3.4*Math.sqrt(i+.5):0,a=i*2.39996+t*.15,isP=((i*7919)%tot)<z,px=cx+rr*Math.cos(a)+Math.sin(t*6+i*1.7)*.22,py=cy+rr*Math.sin(a)+Math.cos(t*5+i*2.3)*.22,col=isP?'#d6452b':'#6f7882',ex=!isP&&++nI>N0;
  if(sph){var g=x.createRadialGradient(px-rn*.35,py-rn*.35,rn*.1,px,py,rn);g.addColorStop(0,isP?'#ff9a85':'#c3cad1');g.addColorStop(1,col);x.fillStyle=g}else x.fillStyle=col;
  x.beginPath();x.arc(px,py,rn,0,7);x.fill();if(ex){x.strokeStyle='#b85f00';x.lineWidth=Math.max(.3,1.4/zm);x.stroke()}
  if(lab){x.fillStyle='#fff';x.font='600 2.6px Inter,sans-serif';x.textAlign='center';x.fillText(isP?'p':'n',px,py+.9)}}
 if(sa>0){x.globalAlpha=sa;var k=0;shells.forEach(function(sh,i){if(!sh)return;var R=R0+k*step,dir=k%2?-1:1,w=dir*.9/Math.pow(k+1,.9),isVal=!!vflag[i];
  if(sel===i+1){x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle='rgba(37,99,235,.20)';x.lineWidth=13*lw;x.stroke()}
  if(isVal){x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle='rgba(217,119,6,.12)';x.lineWidth=9*lw;x.stroke()}
  x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle=isVal?'rgba(184,95,0,.7)':'rgba(23,33,43,.18)';x.lineWidth=(isVal?1.8:1.1)*lw;x.stroke();
  var lb=SH[i]+' · '+sh.length+'/'+2*(i+1)*(i+1),lx=cx+R*.707+5,ly=cy-R*.707;x.font='600 12.5px JetBrains Mono, monospace';x.textAlign='left';
  var tw=x.measureText(lb).width+10;x.beginPath();if(x.roundRect)x.roundRect(lx,ly-12,tw,17,8);else x.rect(lx,ly-12,tw,17);
  x.fillStyle='rgba(255,255,255,.9)';x.fill();x.strokeStyle=isVal?'rgba(184,95,0,.55)':'rgba(23,33,43,.18)';x.lineWidth=lw;x.stroke();x.fillStyle=isVal?'#b85f00':'#53616e';x.fillText(lb,lx+5,ly+1);
  var kk=skeys[i],ang=[],gp=[];kk.forEach(function(q,j){if(!j||q!==kk[j-1])gp.push([q,j,j]);else gp[gp.length-1][2]=j});
  var gap=gp.length>1?.17:0,stp=(6.2832-gap*gp.length)/Math.max(sh.length,1),cur=-Math.PI/2;kk.forEach(function(q,j){if(j&&q!==kk[j-1])cur+=gap;ang[j]=cur+stp*.5;cur+=stp});
  if(gp.length>1){x.font='600 9.5px JetBrains Mono, monospace';x.textAlign='center';gp.forEach(function(gq){var am=(ang[gq[1]]+ang[gq[2]])/2+w*t,h=hl===gq[0];x.globalAlpha=sa*(hl&&!h?.35:1);x.fillStyle=h?'#1d4ed8':COL[sh[gq[1]]];x.fillText(gq[0],cx+(R+19)*Math.cos(am),cy+(R+19)*Math.sin(am)+3.2)});x.globalAlpha=sa}
  sh.forEach(function(ro,j){var a=ang[j]+w*t,px=cx+R*Math.cos(a),py=cy+R*Math.sin(a),col=COL[ro],isHl=hl&&kk[j]===hl;x.globalAlpha=sa*(hl&&!isHl?.25:1);
   if(isHl){x.beginPath();x.arc(px,py,12+2.2*Math.sin(t*5),0,7);x.strokeStyle='#2563eb';x.lineWidth=2.2*lw;x.stroke();x.beginPath();x.arc(px,py,17,0,7);x.fillStyle='rgba(37,99,235,.13)';x.fill()}
   x.shadowColor=col;x.shadowBlur=ro==='c'?4:12;x.beginPath();x.arc(px,py,ro==='c'?5.6:7.2,0,7);x.fillStyle=col;x.fill();x.shadowBlur=0;
   x.beginPath();x.arc(px,py,ro==='c'?1.9:2.5,0,7);x.fillStyle='rgba(255,255,255,.9)';x.fill()});
  x.globalAlpha=sa;k++});x.globalAlpha=1}
 x.restore();
 if(o.lupa&&zm<Math.min(2.4,zNuc*.4)&&77*zm/Rn>1.8){var al=Math.min(1,(Math.min(2.4,zNuc*.4)-zm)/.6),ir=62,ix=0,iy=0;
  for(;ir>=38;ir-=2){ix=ir+8;iy=W-ir-68;if(Math.hypot(ix-cx,iy-cy)-Rlast-8>=ir)break}
  ir=Math.max(ir,38);ix=ir+8;iy=W-ir-68;var k2=(ir-7)/Rn,th=Math.atan2(iy-cy,ix-cx),cth=Math.cos(th),sth=Math.sin(th);
  out.inset=al>.3;out.ix=ix;out.iy=iy;out.ir=ir;
  x.save();x.globalAlpha=al;x.strokeStyle='rgba(214,69,43,.5)';x.lineWidth=1.2;x.setLineDash([4,4]);
  x.beginPath();x.moveTo(cx+(Rn*zm+3)*cth,cy+(Rn*zm+3)*sth);x.lineTo(ix-ir*cth,iy-ir*sth);x.stroke();x.setLineDash([]);
  x.beginPath();x.arc(ix,iy,ir,0,7);x.fillStyle='#fff';x.fill();x.lineWidth=1.8;x.strokeStyle='#d6452b';x.stroke();x.clip();
  var nj=0;for(var i2=0;i2<tot;i2++){var r2=(tot>1?3.4*Math.sqrt(i2+.5):0)*k2,a2=i2*2.39996+t*.15,isP2=((i2*7919)%tot)<z,ex2=!isP2&&++nj>N0,rr2=Math.max(1.6,3.2*k2),px2=ix+r2*Math.cos(a2),py2=iy+r2*Math.sin(a2);
   x.fillStyle=isP2?'#d6452b':'#6f7882';x.beginPath();x.arc(px2,py2,rr2,0,7);x.fill();if(ex2){x.strokeStyle='#b85f00';x.lineWidth=1.2;x.stroke()}}
  x.restore();x.save();x.globalAlpha=al;x.font='600 12px Inter,sans-serif';x.textAlign='left';
  var lt='jądro ×'+(k2*zm).toFixed(0)+' · '+z+'p + '+N+'n',lw2=x.measureText(lt).width+12;
  x.fillStyle='rgba(255,255,255,.92)';x.fillRect(6,iy-ir-24,lw2,18);x.fillStyle='#d6452b';x.fillText(lt,12,iy-ir-11);x.restore()}
 if(zm<3){x.globalAlpha=Math.min(1,(3-zm)/1.2);x.fillStyle='#d6452b';x.font='600 12px Inter,sans-serif';x.textAlign='center';x.fillText('jądro',cx,cy+(Rn*zm)+20);x.globalAlpha=1}
 if(zm>zNuc*.45){x.font='600 14px Inter,sans-serif';x.textAlign='left';x.fillStyle='rgba(255,255,255,.88)';x.fillRect(W-232,52,222,86);x.strokeStyle='#d5dee6';x.lineWidth=1;x.strokeRect(W-232,52,222,86);
  [['#d6452b','proton ('+z+')'],['#6f7882','neutron ('+N+')'],['#b85f00','obręcz: ponad najczęstszy izotop']].forEach(function(q,i){x.fillStyle=q[0];x.beginPath();x.arc(W-218,72+i*24,6,0,7);x.fill();x.fillStyle='#17212b';x.font=(i===2?'500 11.5px':'600 14px')+' Inter,sans-serif';x.fillText(q[1],W-205,76+i*24)})}
 if(hl){var hv=(show&&show[hl])||0,sup=function(s){return String(s).replace(/[0-9]/g,function(d){return '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]})};x.save();x.font='600 13px JetBrains Mono, monospace';x.textAlign='left';
  var tx=(o.bn?'e⁻ '+o.bn+'  →  ':'')+hl+sup(hv)+(hv?'  ·  '+hv+' e⁻':'  ·  pusta w tym '+(o.chg?'jonie':'atomie'))+'  ·  n + l = '+(o.nl?o.nl(hl):(+hl[0]+'spdf'.indexOf(hl[1]))),tw2=x.measureText(tx).width+16;
  x.fillStyle='rgba(255,255,255,.94)';x.fillRect(W/2-tw2/2,W-100,tw2,24);x.strokeStyle='#2563eb';x.lineWidth=1.2;x.strokeRect(W/2-tw2/2,W-100,tw2,24);x.fillStyle='#1d4ed8';x.textAlign='center';x.fillText(tx,W/2,W-83);x.restore()}
 return out}
atomBohr.anim=function(cv,o){var on=true,still=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
 function f(ts){if(!on)return;atomBohr(cv,Object.assign({},o,{t:ts}));if(!still)requestAnimationFrame(f)}requestAnimationFrame(f);return function(){on=false}};
L.atomBohr=atomBohr;
/* orbitalCloud — chmura orbitalna z atlasu (_anon_004 cloud) jako komponent canvas, bez stanu i DOM atlasu.
   orbitalCloud(canvas, {sub:'2p', type:'pz'|'s'|'dz2'|'dxy', zoom:1}) → {samples}. Metoda Monte Carlo (stałe ziarno → ten sam obraz), ψ>0 pomarańcz, ψ<0 zieleń. */
var orbitalCloud=(function(){
var ANG = {
  s:() => [1, 1],
  pz:(th) => { const v = Math.cos(th); return [v * v, v]; },
  dz2:(th) => { const v = 3 * Math.cos(th) ** 2 - 1; return [v * v / 4, v]; },
  dxy:(th, ph) => { const v = Math.sin(th) ** 2 * Math.sin(2 * ph); return [v * v, v]; }
};

return function(cv,o){var sub=o.sub||'1s',type=o.type||({s:'s',p:'pz',d:'dz2'}[sub[1]]||'s'),n=+sub[0],zmCloud=o.zoom||1;
  const x = cv.getContext('2d'), W = cv.width;
  x.fillStyle = '#f4f7f9'; x.fillRect(0, 0, W, W);
  x.strokeStyle = 'rgba(23,33,43,.035)'; x.lineWidth = 1;
  for(let i = 1; i <= 3; i++){ const r = W / 6 * i; x.beginPath(); x.arc(W / 2, W / 2, r, 0, 7); x.stroke(); }
  x.strokeStyle = 'rgba(23,33,43,.055)';
  x.beginPath(); x.moveTo(0, W / 2); x.lineTo(W, W / 2); x.moveTo(W / 2, 0); x.lineTo(W / 2, W); x.stroke();
  x.fillStyle = '#6b7886'; x.font = '11px JetBrains Mono, monospace';
  x.fillText('x', W - 20, W / 2 - 8); x.fillText('y', W / 2 + 8, 20);
  const l = sub[1];
  x.setLineDash([6, 5]); x.strokeStyle = 'rgba(201,139,168,.42)'; x.lineWidth = 1.3;
  if(l === 'p'){ x.beginPath(); x.moveTo(W / 2, 0); x.lineTo(W / 2, W); x.stroke(); }
  else if(l === 'd'){
    x.beginPath(); x.moveTo(W / 2, 0); x.lineTo(W / 2, W); x.stroke();
    x.beginPath(); x.moveTo(0, W / 2); x.lineTo(W, W / 2); x.stroke();
  }
  x.setLineDash([]);
  const sc = (W / 2 - 40) / (n * n * 2.4 + 4) * zmCloud, f2 = ANG[type] || ANG.s;
  let g = 0, seed = n * 131 + type.length * 17 + 1;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  x.globalCompositeOperation = 'multiply';
  for(let i = 0; i < 300000 && g < 46000; i++){
    const th = Math.acos(1 - 2 * rnd()), ph = rnd() * 6.2832;
    const [a, s] = f2(th, ph);
    if(rnd() > a) continue;
    const r = -Math.log(rnd() * rnd()) * n * n * .55;
    let X, Y;
    if(type === 'dxy'){ X = r * Math.sin(th) * Math.cos(ph); Y = r * Math.sin(th) * Math.sin(ph); }
    else { X = r * Math.sin(th) * Math.cos(ph); Y = r * Math.cos(th); }
    const px = W / 2 + X * sc, py = W / 2 - Y * sc;
    if(px < -10 || px > W + 10 || py < -10 || py > W + 10) continue;
    x.fillStyle = s >= 0 ? 'rgba(217,119,6,.2)' : 'rgba(47,138,85,.2)';
    x.fillRect(px - 1.3, py - 1.3, 2.6, 2.6);
    g++;
  }
  x.globalCompositeOperation = 'source-over';
  const ng = x.createRadialGradient(W / 2, W / 2, 1, W / 2, W / 2, 14);
  ng.addColorStop(0, 'rgba(224,103,74,.85)'); ng.addColorStop(1, 'rgba(224,103,74,0)');
  x.fillStyle = ng; x.beginPath(); x.arc(W / 2, W / 2, 14, 0, 7); x.fill();
  x.fillStyle = '#e0674a'; x.beginPath(); x.arc(W / 2, W / 2, 4, 0, 7); x.fill();
  const iw = 286, ih = 90, ix = W - iw - 14, iy = 14, nodes = { s:0, p:1, d:2, f:3 }[sub[1]] || 0;
  x.textAlign = 'left';
  x.fillStyle = 'rgba(255,255,255,.93)'; x.strokeStyle = 'rgba(23,33,43,.14)'; x.lineWidth = 1.5;
  x.beginPath(); x.roundRect(ix, iy, iw, ih, 12); x.fill(); x.stroke();
  x.fillStyle = '#17212b'; x.font = '700 25px Inter, sans-serif';
  x.fillText(sub + ' ' + type, ix + 16, iy + 33);
  x.fillStyle = '#53616e'; x.font = '15px JetBrains Mono, monospace';
  x.fillText('n = ' + n + ' · l = ' + sub[1] + ' (' + nodes + ')', ix + 16, iy + 57);
  x.fillText('węzły: ' + nodes + ' kątowe · ' + Math.max(0, n - nodes - 1) + ' radialne', ix + 16, iy + 78);
  const lw = 156, lh = l !== 's' ? 88 : 66, lx = 14, ly = W - lh - 86;
  x.fillStyle = 'rgba(255,255,255,.93)'; x.strokeStyle = 'rgba(23,33,43,.14)';
  x.beginPath(); x.roundRect(lx, ly, lw, lh, 12); x.fill(); x.stroke();
  x.fillStyle = '#b85f00'; x.fillRect(lx + 14, ly + 13, 16, 16);
  x.fillStyle = '#2f8a55'; x.fillRect(lx + 14, ly + 36, 16, 16);
  x.fillStyle = '#17212b'; x.font = '15px JetBrains Mono, monospace';
  x.fillText('ψ > 0', lx + 40, ly + 27); x.fillText('ψ < 0', lx + 40, ly + 50);
  if(l !== 's'){
    x.strokeStyle = 'rgba(176,70,122,.8)'; x.lineWidth = 2; x.setLineDash([5, 4]);
    x.beginPath(); x.moveTo(lx + 14, ly + 69); x.lineTo(lx + 30, ly + 69); x.stroke(); x.setLineDash([]);
    x.fillStyle = '#17212b'; x.fillText('węzły', lx + 40, ly + 74);
  }
  x.fillStyle = '#53616e'; x.font = '14px JetBrains Mono, monospace';
  x.fillText('próbki: ' + g + ' · zoom ' + zmCloud.toFixed(1) + '×', 14, 26);
  return {samples:g}}})();
L.orbitalCloud=orbitalCloud;
/* atlas: chmura orbitalna rysowana komponentem (ten sam kod rysunku; stan i przyciski zostają w atlasie) */
try{if(typeof cloud==='function'&&typeof state==='function'&&typeof ORDER!=='undefined'&&document.getElementById('cloud')){
 cloud=function(){var c=state().c,subs=ORDER.filter(function(k){return c[k]&&'spd'.includes(k[1])});
  if(!orb||!subs.includes(orb.split(':')[0]))orb=(subs[subs.length-1]||'1s')+':'+({s:'s',p:'pz',d:'dz2'}[(subs[subs.length-1]||'s')[1]]);
  var q=orb.split(':'),sub=q[0],type=q[1];orbitalCloud(document.getElementById('cloud'),{sub:sub,type:type,zoom:zmCloud});
  document.getElementById('orbname').textContent=sub+' '+type;
  var opts={s:['s'],p:['pz'],d:['dz2','dxy']},b='';
  subs.forEach(function(k){opts[k[1]].forEach(function(t){b+='<button class="'+(orb===k+':'+t?'on':'')+'" data-o="'+k+':'+t+'">'+k+' '+t+'</button>'})});
  document.getElementById('orbsel').innerHTML=b;
  document.querySelectorAll('#orbsel [data-o]').forEach(function(x){x.onclick=function(){orb=x.dataset.o;cloud()}});
 };L.atlasGfx='cloud';cloud()}}catch(e){console.warn('[atlas-gfx] '+e.message)}
/* atlas: atom Bohra rysowany komponentem atomBohr (stan, zoom, GEO i liczniki zostają w atlasie; widoczność jak w 19_poprawki-ui) */
try{if(typeof bohr==='function'&&typeof state==='function'&&typeof GEO!=='undefined'&&document.getElementById('bohr')){
 bohr=function(ts){if(!still&&(document.hidden||!document.getElementById('stage').offsetParent))return;
  var st=state(),e=st.e,cFull=st.c,c=buildN==null?cFull:truncCfg(cFull,buildN),cv=$('bohr');
  var isotopes=isotopeData(e),top=isotopes.slice().sort(function(a,b){return (b.ab||0)-(a.ab||0)})[0],A0=top?top.A:(e.m?Math.round(e.m):Math.round(e.z*2.3));
  var A=isoA||A0,N=Math.max(0,A-e.z),N0=Math.max(0,A0-e.z),Rn=3.4*Math.sqrt(e.z+N)+4;
  zNuc=Math.min(70,262/Rn);zt=Math.min(Math.max(zt,.6),zNuc);
  zm=Math.exp(Math.log(zm)+(Math.log(zt)-Math.log(zm))*.14);if(Math.abs(Math.log(zm/zt))<.002)zm=zt;
  var g=atomBohr(cv,{p:e.z,n:N,n0:N0,cfg:cFull,cfgShow:c,order:ORDER,role:role,t:ts,zoom:zm,sel:GEO.sel,hl:GEO.hl,bn:GEO.bn,chg:chg,nl:nl,lupa:true});
  Object.assign(GEO,{R0:g.R0,step:g.step,Rn:g.Rn,rings:g.rings,A:A,N:N,inset:false});if(g.ix!=null)Object.assign(GEO,{inset:g.inset,ix:g.ix,iy:g.iy,ir:g.ir});
  $('bohrinfo').innerHTML='<div class="bi"><span><em>Z</em><b>'+e.z+'</b></span><span><em>N</em><b>'+N+'</b>'+(N!==N0?'<small>'+(N>N0?'+':'')+(N-N0)+' vs najczęstszy</small>':'')+'</span><span><em>A</em><b>'+A+'</b></span><span><em>e⁻</em><b>'+(e.z-chg)+'</b></span><span><em>powłok</em><b>'+g.ns+'</b></span></div>';
  $('zr').textContent=(zm<10?zm.toFixed(1):Math.round(zm))+'×';
  var fo=$('focus');if(fo)fo.style.opacity=zm>zNuc*.45?0:1;
  var zs=$('zs');if(document.activeElement!==zs)zs.value=100*Math.log(zm/.6)/Math.log(zNuc/.6)};
 L.atlasGfx='cloud,bohr'}}catch(e){console.warn('[atlas-gfx bohr] '+e.message)}
})();
