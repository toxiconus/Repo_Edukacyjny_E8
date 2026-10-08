
function famOf(z){
  if(z===1)return FAMS[0];
  if(z>=57&&z<=71)return 'Lantanowce';
  if(z>=89&&z<=103)return 'Aktynowce';
  if(z>=104&&z<=112)return 'Transaktynowce';
  const c=pos(z)[1];
  return c===1?'Litowce':c===2?'Berylowce':c<=12?'Metale przejściowe (blok d)':['Borowce','Węglowce','Azotowce','Tlenowce','Fluorowce','Helowce'][c-13];
}
const gtxt=e=>e.g==='f'?'bez numeru grupy (f-blok)':'grupa '+e.g;
const E = () => DB[sym] || stub(sym);
const isotopeData=e=>{
  const legacy=e?.iso||[],candidate=window.CHE?.ISOTOPE_VERIFIED_CANDIDATES?.get?.(e?.s);
  if(!candidate?.length)return legacy;
  const rows=new Map(legacy.map(item=>[item.A,{...item}]));
  candidate.forEach(item=>{
    const row=rows.get(item.massNumber)||{A:item.massNumber};
    row.ab=Number((item.representativeAbundance*100).toFixed(6));
    row.abundanceProvenance=item.abundanceProvenance;
    rows.set(item.massNumber,row);
  });
  return [...rows.values()].sort((a,b)=>a.A-b.A);
};
const state = () => { const e = E(), c0 = fill(e.z); let c = c0; if(chg > 0) c = strip(c0, chg); if(chg < 0) c = add(c0, -chg); return { e, c0, c }; };
const elName = (e, lg) => { if(lg === 'en') return e.n_en || e.n; if(lg === 'de') return e.n_de || e.n; if(lg === 'la') return e.n_la || e.n; return e.n; };

function head(){
  const { e, c } = state();
  $('hmeta').textContent = `${gtxt(e)} · okres ${e.p} · blok ${e.b} · ${eclass(e.z)}${e.en != null ? ', χ = ' + e.en : ''}`;
  $('hcfg').innerHTML = (chg ? 'jon ' : 'atom ') + ORDER.filter(k => c[k]).map(k => `<span style="color:${COL[role(c, k)]}">${k}${sup(c[k])}</span>`).join(' ');
  $('pos').innerHTML = posviz();
  $('stats').innerHTML = statsHtml();
  $('lew').innerHTML = lewis();
  $('cov').innerHTML = cov();
  $('ec-z').textContent = e.z;
  $('ec-mass').textContent = e.m ? (+e.m).toFixed(3).replace(/\.?0+$/, '') : '—';
  $('ec-sym').textContent = e.s || sym;
  $('ec-name').textContent = elName(e, lang);
  $('ec-ions').textContent = chg ? (chg > 0 ? '+' + chg : chg) : '';
  const opts = [0];
  if(chg > 3) opts.push(chg);
  for(let i = 1; i <= 3; i++) opts.push(i);
  if(e.ion) for(const k in e.ion) if(k.endsWith('-')) opts.push(-parseInt(k));
  $('chsel').innerHTML = [...new Set(opts)].sort((a, b) => a - b)
    .map(v => `<button class="${v === chg ? 'on' : ''}" data-c="${v}">${v > 0 ? '+' + v : v}</button>`).join('');
  document.querySelectorAll('#chsel [data-c]').forEach(b => b.onclick = () => { chg = +b.dataset.c; orb = ''; all(); });
  document.title = `${e.s || sym} · ${elName(e, lang)} · Laboratorium atomu`;
}

let zt=1,zNuc=10,tA=0,lastTs=0,GEO={},buildN=null,buildT=null;
function truncCfg(c,n){const o={};let r=n;for(const k of ORDER){if(!c[k])continue;const t=Math.min(c[k],r);if(t>0)o[k]=t;r-=t;if(r<=0)break;}return o}
const viewC=()=>{const c=state().c;return buildN==null?c:truncCfg(c,buildN)};
function bohr(ts){
  const {e,c:cFull}=state(),c=buildN==null?cFull:truncCfg(cFull,buildN),cv=$('bohr'),x=cv.getContext('2d'),P=cv.width,W=760,cx=380,cy=380,t=(ts||0)/1000;
  const shells=[],skeys=[],vflag=[];
  ORDER.filter(k=>cFull[k]).forEach(k=>{const i=+k[0]-1;(shells[i]=shells[i]||[]);(skeys[i]=skeys[i]||[]);if(role(cFull,k)==='v')vflag[i]=true;for(let j=0;j<(c[k]||0);j++){shells[i].push(role(cFull,k));skeys[i].push(k);}});
  const ns=shells.filter(Boolean).length,R0=ns<=1?150:ns===2?118:78,step=Math.min(84,(W/2-R0-34)/Math.max(ns-1,1));
  const isotopes=isotopeData(e),top=isotopes.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A0=top?top.A:(e.m?Math.round(e.m):Math.round(e.z*2.3));
  const A=isoA||A0,N=Math.max(0,A-e.z),N0=Math.max(0,A0-e.z),tot=e.z+N,Rn=3.4*Math.sqrt(tot)+4;
  zNuc=Math.min(70,262/Rn);zt=Math.min(Math.max(zt,.6),zNuc);
  const rings=[];{let k=0;shells.forEach((sh,i)=>{if(!sh)return;rings.push({n:i+1,R:R0+k*step});k++;});}
  const Rlast=rings.length?rings[rings.length-1].R:0;
  Object.assign(GEO,{R0,step,Rn,rings,A,N,inset:false});
  zm=Math.exp(Math.log(zm)+(Math.log(zt)-Math.log(zm))*.14);if(Math.abs(Math.log(zm/zt))<.002)zm=zt;
  x.setTransform(P/W,0,0,P/W,0,0);{const bg=x.createRadialGradient(W/2,W/2,40,W/2,W/2,W*.72);bg.addColorStop(0,'#fcfdfe');bg.addColorStop(1,'#e6edf2');x.fillStyle=bg;x.fillRect(0,0,W,W);}
  x.save();x.translate(cx,cy);x.scale(zm,zm);x.translate(-cx,-cy);
  const sa=zm<2.5?1:Math.max(0,1-(zm-2.5)/4),lw=1/Math.sqrt(zm);
  if(sa>0){x.globalAlpha=sa;x.strokeStyle='rgba(23,33,43,.06)';x.lineWidth=lw;
    for(let r=90;r<W;r+=90){x.beginPath();x.arc(cx,cy,r,0,7);x.stroke();}
    x.beginPath();x.moveTo(0,cy);x.lineTo(W,cy);x.moveTo(cx,0);x.lineTo(cx,W);x.stroke();x.globalAlpha=1;}
  const gl=x.createRadialGradient(cx,cy,2,cx,cy,Rn*2.4);gl.addColorStop(0,'rgba(214,69,43,.25)');gl.addColorStop(1,'rgba(214,69,43,0)');
  x.fillStyle=gl;x.beginPath();x.arc(cx,cy,Rn*2.4,0,7);x.fill();
  const rn=3.2,sph=rn*zm>7,lab=rn*zm>13;let nI=0;
  for(let i=0;i<tot;i++){
    const r=tot>1?3.4*Math.sqrt(i+.5):0,a=i*2.39996+t*.15,isP=((i*7919)%tot)<e.z;
    const px=cx+r*Math.cos(a)+Math.sin(t*6+i*1.7)*.22,py=cy+r*Math.sin(a)+Math.cos(t*5+i*2.3)*.22;
    const col=isP?'#d6452b':'#6f7882',ex=!isP&&++nI>N0;
    if(sph){const g=x.createRadialGradient(px-rn*.35,py-rn*.35,rn*.1,px,py,rn);g.addColorStop(0,isP?'#ff9a85':'#c3cad1');g.addColorStop(1,col);x.fillStyle=g;}else x.fillStyle=col;
    x.beginPath();x.arc(px,py,rn,0,7);x.fill();
    if(ex){x.strokeStyle='#b85f00';x.lineWidth=Math.max(.3,1.4/zm);x.stroke();}
    if(lab){x.fillStyle='#fff';x.font='600 2.6px Inter,sans-serif';x.textAlign='center';x.fillText(isP?'p':'n',px,py+.9);}
  }
  if(sa>0){x.globalAlpha=sa;let k=0;
    shells.forEach((sh,i)=>{if(!sh)return;
      const R=R0+k*step,dir=k%2?-1:1,w=dir*.9/Math.pow(k+1,.9),isVal=!!vflag[i];
      if(GEO.sel===i+1){x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle='rgba(37,99,235,.20)';x.lineWidth=13*lw;x.stroke();}
      if(isVal){x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle='rgba(217,119,6,.12)';x.lineWidth=9*lw;x.stroke();}
      x.beginPath();x.arc(cx,cy,R,0,7);x.strokeStyle=isVal?'rgba(184,95,0,.7)':'rgba(23,33,43,.18)';x.lineWidth=(isVal?1.8:1.1)*lw;x.stroke();
      {const lb=SH[i]+' · '+sh.length+'/'+2*(i+1)*(i+1),lx=cx+R*.707+5,ly=cy-R*.707;x.font='600 12.5px JetBrains Mono, monospace';x.textAlign='left';
        const tw=x.measureText(lb).width+10;x.beginPath();if(x.roundRect)x.roundRect(lx,ly-12,tw,17,8);else x.rect(lx,ly-12,tw,17);
        x.fillStyle='rgba(255,255,255,.9)';x.fill();x.strokeStyle=isVal?'rgba(184,95,0,.55)':'rgba(23,33,43,.18)';x.lineWidth=lw;x.stroke();
        x.fillStyle=isVal?'#b85f00':'#53616e';x.fillText(lb,lx+5,ly+1);}
      const ks=skeys[i],ang=[],gp=[];
      ks.forEach((q,j)=>{if(!j||q!==ks[j-1])gp.push([q,j,j]);else gp[gp.length-1][2]=j;});
      {const gap=gp.length>1?.17:0,stp=(6.2832-gap*gp.length)/Math.max(sh.length,1);let cur=-Math.PI/2;ks.forEach((q,j)=>{if(j&&q!==ks[j-1])cur+=gap;ang[j]=cur+stp*.5;cur+=stp;});}
      if(gp.length>1){x.font='600 '+(9.5)+'px JetBrains Mono, monospace';x.textAlign='center';
        gp.forEach(([q,j0,j1])=>{const am=(ang[j0]+ang[j1])/2+w*t,hl=GEO.hl===q;x.globalAlpha=sa*(GEO.hl&&!hl?.35:1);x.fillStyle=hl?'#1d4ed8':COL[sh[j0]];x.fillText(q,cx+(R+19)*Math.cos(am),cy+(R+19)*Math.sin(am)+3.2);});x.globalAlpha=sa;}
      sh.forEach((ro,j)=>{const a=ang[j]+w*t,px=cx+R*Math.cos(a),py=cy+R*Math.sin(a),col=COL[ro],isHl=GEO.hl&&skeys[i][j]===GEO.hl;
        x.globalAlpha=sa*(GEO.hl&&!isHl?.25:1);
        if(isHl){x.beginPath();x.arc(px,py,12+2.2*Math.sin(t*5),0,7);x.strokeStyle='#2563eb';x.lineWidth=2.2*lw;x.stroke();x.beginPath();x.arc(px,py,17,0,7);x.fillStyle='rgba(37,99,235,.13)';x.fill();}
        x.shadowColor=col;x.shadowBlur=ro==='c'?4:12;x.beginPath();x.arc(px,py,ro==='c'?5.6:7.2,0,7);x.fillStyle=col;x.fill();x.shadowBlur=0;
        x.beginPath();x.arc(px,py,ro==='c'?1.9:2.5,0,7);x.fillStyle='rgba(255,255,255,.9)';x.fill();});
      x.globalAlpha=sa;k++;});
    x.globalAlpha=1;}
  x.restore();
  if(zm < Math.min(2.4, zNuc * .4) && 77 * zm / Rn > 1.8){
    const al = Math.min(1, (Math.min(2.4, zNuc * .4) - zm) / .6);
    let ir = 62, ix = 0, iy = 0;
    for(; ir >= 38; ir -= 2){ ix = ir + 8; iy = W - ir - 68; if(Math.hypot(ix - cx, iy - cy) - Rlast - 8 >= ir) break; }
    ir = Math.max(ir, 38); ix = ir + 8; iy = W - ir - 68;
    const kk = (ir - 7) / Rn, th = Math.atan2(iy - cy, ix - cx), cth = Math.cos(th), sth = Math.sin(th);
    Object.assign(GEO, {inset: al > .3, ix, iy, ir});
    x.save(); x.globalAlpha = al;
    x.strokeStyle = 'rgba(214,69,43,.5)'; x.lineWidth = 1.2; x.setLineDash([4, 4]);
    x.beginPath(); x.moveTo(cx + (Rn * zm + 3) * cth, cy + (Rn * zm + 3) * sth); x.lineTo(ix - ir * cth, iy - ir * sth); x.stroke(); x.setLineDash([]);
    x.beginPath(); x.arc(ix, iy, ir, 0, 7); x.fillStyle = '#fff'; x.fill(); x.lineWidth = 1.8; x.strokeStyle = '#d6452b'; x.stroke(); x.clip();
    let nj = 0;
    for(let i = 0; i < tot; i++){
      const r = (tot > 1 ? 3.4 * Math.sqrt(i + .5) : 0) * kk, a = i * 2.39996 + t * .15, isP = ((i * 7919) % tot) < e.z, ex = !isP && ++nj > N0, rr = Math.max(1.6, 3.2 * kk);
      const px = ix + r * Math.cos(a), py = iy + r * Math.sin(a);
      x.fillStyle = isP ? '#d6452b' : '#6f7882'; x.beginPath(); x.arc(px, py, rr, 0, 7); x.fill();
      if(ex){ x.strokeStyle = '#b85f00'; x.lineWidth = 1.2; x.stroke(); }
    }
    x.restore();
    x.save(); x.globalAlpha = al; x.font = '600 12px Inter,sans-serif'; x.textAlign = 'left';
    const lt = 'jądro ×' + (kk * zm).toFixed(0) + ' · ' + e.z + 'p + ' + N + 'n', lw2 = x.measureText(lt).width + 12;
    x.fillStyle = 'rgba(255,255,255,.92)'; x.fillRect(6, iy - ir - 24, lw2, 18); x.fillStyle = '#d6452b'; x.fillText(lt, 12, iy - ir - 11); x.restore();
  }
  if(zm<3){x.globalAlpha=Math.min(1,(3-zm)/1.2);x.fillStyle='#d6452b';x.font='600 12px Inter,sans-serif';x.textAlign='center';x.fillText('jądro',cx,cy+(Rn*zm)+20);x.globalAlpha=1;}
  if(zm>zNuc*.45){x.font='600 14px Inter,sans-serif';x.textAlign='left';x.fillStyle='rgba(255,255,255,.88)';x.fillRect(W-232,52,222,86);x.strokeStyle='#d5dee6';x.lineWidth=1;x.strokeRect(W-232,52,222,86);
    [['#d6452b','proton ('+e.z+')'],['#6f7882','neutron ('+N+')'],['#b85f00','obręcz: ponad najczęstszy izotop']].forEach(([cl,tx],i)=>{x.fillStyle=cl;x.beginPath();x.arc(W-218,72+i*24,6,0,7);x.fill();x.fillStyle='#17212b';x.font=(i===2?'500 11.5px':'600 14px')+' Inter,sans-serif';x.fillText(tx,W-205,76+i*24);});}
  if(GEO.hl){const q=GEO.hl,hv=c[q]||0;x.save();x.font='600 13px JetBrains Mono, monospace';x.textAlign='left';const tx=(GEO.bn?'e⁻ '+GEO.bn+'  →  ':'')+q+sup(hv)+(hv?'  ·  '+hv+' e⁻':'  ·  pusta w tym '+(chg?'jonie':'atomie'))+'  ·  n + l = '+nl(q),tw=x.measureText(tx).width+16;
   x.fillStyle='rgba(255,255,255,.94)';x.fillRect(W/2-tw/2,W-100,tw,24);x.strokeStyle='#2563eb';x.lineWidth=1.2;x.strokeRect(W/2-tw/2,W-100,tw,24);x.fillStyle='#1d4ed8';x.textAlign='center';x.fillText(tx,W/2,W-83);x.restore();}
  $('bohrinfo').innerHTML=`<div class="bi"><span><em>Z</em><b>${e.z}</b></span><span><em>N</em><b>${N}</b>${N!==N0?`<small>${N>N0?'+':''}${N-N0} vs najczęstszy</small>`:''}</span><span><em>A</em><b>${A}</b></span><span><em>e⁻</em><b>${e.z-chg}</b></span><span><em>powłok</em><b>${ns}</b></span></div>`;
  $('zr').textContent=(zm<10?zm.toFixed(1):Math.round(zm))+'×';
  {const fo=$('focus');if(fo)fo.style.opacity=zm>zNuc*.45?0:1;}
  const zs=$('zs');if(document.activeElement!==zs)zs.value=100*Math.log(zm/.6)/Math.log(zNuc/.6);
}

function arrowSVG(x, y, col, down){
  const h = 11;
  if(!down) return `<line x1="${x}" y1="${y+h/2}" x2="${x}" y2="${y-h/2}" stroke="${col}" stroke-width="1.7" stroke-linecap="round"/><path d="M${x-2.6} ${y-h/2+3.2}L${x} ${y-h/2}L${x+2.6} ${y-h/2+3.2}" stroke="${col}" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`;
  return `<line x1="${x}" y1="${y-h/2}" x2="${x}" y2="${y+h/2}" stroke="${col}" stroke-width="1.7" stroke-linecap="round"/><path d="M${x-2.6} ${y+h/2-3.2}L${x} ${y+h/2}L${x+2.6} ${y+h/2-3.2}" stroke="${col}" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function levels(){
  const { c0, c } = state();
  const ks = ORDER.filter(k => (c0[k] || c[k]));
  if(!ks.length) return nodata(360, 200);
  const W = 360, left = 58, right = 50;
  const en = k => +k[0] + 'spdf'.indexOf(k[1]) + .06 * k[0];
  const sorted = [...ks].sort((a, b) => en(a) - en(b));
  const maxOrb = Math.max(...sorted.map(k => CAP[k[1]] / 2));
  const gap = 4, availW = W - left - right;
  const boxW = Math.min(30, Math.floor((availW - (maxOrb - 1) * gap) / maxOrb));
  const rowH = boxW + 12, top = 26, H = top + sorted.length * rowH + 8;
  const fillOcc = (n, nb) => { const o = Array(nb).fill(0); let r = n; for(let i = 0; i < nb && r > 0; i++){ o[i] = 1; r--; } for(let i = 0; i < nb && r > 0; i++){ o[i] = 2; r--; } return o; };
  let s = '', unp = 0, prs = 0;
   
  s += `<line x1="9" x2="9" y1="${H-4}" y2="14" stroke="#9aa8b5" stroke-width="1.4"/><path d="M5 19L9 13L13 19" fill="none" stroke="#9aa8b5" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><text x="19" y="12" style="font-size:10.5px;letter-spacing:.08em">ENERGIA</text>`;
  sorted.forEach((k, i) => {
    const y = top + i * rowH, n = c[k] || 0, nb = CAP[k[1]] / 2, r = role(c, k), col = COL[r];
    const lost = (c0[k] || 0) > n, occ = fillOcc(n, nb), occ0 = fillOcc(c0[k] || 0, nb);
    if(r === 'v' && n) s += `<rect x="16" y="${y-4}" width="${W-20}" height="${boxW+8}" rx="7" fill="rgba(217,119,6,.08)"/>`;
    s += `<text x="22" y="${y+boxW*.68}" style="font-size:14px;font-weight:700;fill:${n?col:'#6b7886'};cursor:pointer" data-sub="${k}">${k}</text>`;
    for(let j = 0; j < nb; j++){
      const bx = left + j * (boxW + gap), o = occ[j];
      s += `<rect x="${bx}" y="${y}" width="${boxW}" height="${boxW}" rx="4" fill="${o?col:'none'}" fill-opacity="${o?.09:0}" stroke="${o?col:lost?'#c98ba8':'#b8c5d1'}" stroke-width="${o?1.4:1}" stroke-dasharray="${o?0:3}"/>`;
      const ghost = occ0[j] - o;
      if(ghost > 0){
        s += `<g opacity=".4">`;
        if(o === 0) s += arrowSVG(bx + boxW * (occ0[j] === 2 ? .34 : .5), y + boxW / 2, '#b0467a', false);
        if(occ0[j] === 2) s += arrowSVG(bx + boxW * .66, y + boxW / 2, '#b0467a', true);
        s += `</g>`;
      }
      if(o >= 1) s += arrowSVG(bx + boxW * (o === 2 ? .34 : .5), y + boxW / 2, col, false);
      if(o === 2) s += arrowSVG(bx + boxW * .66, y + boxW / 2, col, true);
      if(o === 1) unp++; else if(o === 2) prs++;
    }
    s += `<text x="${W-4}" y="${y+boxW*.68}" text-anchor="end" style="font-size:12.5px;font-weight:600;fill:${n?'#17212b':'#9aa8b5'}">${n} e⁻</text>`;
  });
  $('lev').setAttribute('viewBox', `0 0 ${W} ${H}`);
  const lv = $('levsum');
  if(lv) lv.innerHTML = `<span><em>niesparowane</em><b>${unp}</b></span><span><em>pary</em><b>${prs}</b></span><span><em>magnetyzm</em><b>${unp ? 'para' : 'dia'}</b></span>` + (chg ? `<span><em>jon</em><b>${chg > 0 ? '+' + chg : chg}</b></span>` : '');
  return s;
}

const ANG = {
  s:() => [1, 1],
  pz:(th) => { const v = Math.cos(th); return [v * v, v]; },
  dz2:(th) => { const v = 3 * Math.cos(th) ** 2 - 1; return [v * v / 4, v]; },
  dxy:(th, ph) => { const v = Math.sin(th) ** 2 * Math.sin(2 * ph); return [v * v, v]; }
};
let zmCloud = 1;
function cloud(){
  const { c } = state();
  const subs = ORDER.filter(k => c[k] && 'spd'.includes(k[1]));
  if(!orb || !subs.includes(orb.split(':')[0])) orb = (subs[subs.length - 1] || '1s') + ':' + ({ s:'s', p:'pz', d:'dz2' }[(subs[subs.length - 1] || 's')[1]]);
  const [sub, type] = orb.split(':'), n = +sub[0];
  const cv = $('cloud'), x = cv.getContext('2d'), W = cv.width;
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
  $('orbname').textContent = sub + ' ' + type;
  const opts = { s:['s'], p:['pz'], d:['dz2', 'dxy'] };
  let b = '';
  subs.forEach(k => opts[k[1]].forEach(t => b += `<button class="${orb === k + ':' + t ? 'on' : ''}" data-o="${k}:${t}">${k} ${t}</button>`));
  $('orbsel').innerHTML = b;
  document.querySelectorAll('#orbsel [data-o]').forEach(q => q.onclick = () => { orb = q.dataset.o; cloud(); });
}

let lin = 0;
function ie(){
  const { e, c0 } = state(), v = e.ie;
  if(!v) return nodata(640, 260);
  const L = lin ? (x => x) : Math.log10, lo = lin ? 0 : L(Math.min(...v) * .6), hi = L(Math.max(...v) * 1.15);
  const W = 640, H = 260, bw = (W - 70) / v.length;
  let s = '<text x="4" y="12" style="font-size:10px">kJ/mol</text>', cur = c0, mj = 0, mi = 0;
  for(let i = 1; i < v.length; i++) if(v[i] / v[i-1] > mj){ mj = v[i] / v[i-1]; mi = i; }
  [1e2, 1e3, 1e4, 1e5].forEach(t => {
    if(L(t) > lo && L(t) < hi){
      const y = H - 46 - (L(t) - lo) / (hi - lo) * (H - 78);
      s += `<line x1="46" x2="${W}" y1="${y}" y2="${y}" stroke="#cfd9e1"/><text x="40" y="${y+3.5}" text-anchor="end">${t >= 1e3 ? t / 1e3 + 'k' : t}</text>`;
    }
  });
  v.forEach((q, i) => {
    const nm = srt(cur)[0]; cur = strip(cur, 1);
    const r = role({ ...cur, [nm]:(cur[nm] || 0) + 1 }, nm);
    const h = (L(q) - lo) / (hi - lo) * (H - 78), x = 52 + i * bw, y = H - 46 - h;
    s += `<rect x="${x}" y="${y}" width="${bw-8}" height="${h}" rx="3" fill="${COL[r]}" opacity="${chg === i+1 ? 1 : .8}" data-ch="${i+1}" style="cursor:pointer;${chg === i+1 ? 'stroke:#17212b;stroke-width:1.5' : ''}"><title>I${i+1} = ${q} kJ/mol, usuwa ${nm}. Kliknij: jon +${i+1}</title></rect><text x="${x+(bw-8)/2}" y="${y-5}" text-anchor="middle">${q >= 1e4 ? (q/1e3).toFixed(1)+'k' : q}</text><text x="${x+(bw-8)/2}" y="${H-30}" text-anchor="middle">I${i+1}</text><text x="${x+(bw-8)/2}" y="${H-18}" text-anchor="middle" style="fill:${COL[r]}">${nm}</text>`;
  });
  const peers = Object.keys(DB).filter(q => q !== sym && DB[q].g && DB[q].g === e.g && DB[q].ie && DB[q].ie[0]);
  peers.forEach(q => { const cx = 52 + (bw - 8) / 2, y = H - 46 - Math.min(1, Math.max(0, (L(DB[q].ie[0]) - lo) / (hi - lo))) * (H - 78);
    s += `<circle cx="${cx}" cy="${y}" r="3.4" fill="#fff" stroke="#17212b" stroke-width="1.3"><title>${q}: I1 = ${DB[q].ie[0]} kJ/mol</title></circle><text x="${cx + 9}" y="${y + 3.5}" style="font-size:9px;fill:#53616e">${q}</text>`; });
  if(peers.length) s += `<text x="${W - 4}" y="${H - 4}" text-anchor="end" style="font-size:10px;fill:#53616e">○ I₁ pozostałych pierwiastków grupy ${e.g} (odniesienie)</text>`;
  const xr = 52 + mi * bw - 4;
  s += `<path d="M${xr} 16V${H-50}" stroke="#17212b" stroke-dasharray="3 3"/><text x="${xr+6}" y="24" style="fill:#17212b">największy skok ×${mj.toFixed(2)} (I${mi}→I${mi+1})</text>`;
  return s;
}
function rad(){
  const e = E();
  const it = [['vdW', e.vdw, '#9aa8b5'], ['atomowy', e.ar, '#2f8a55'], ['kowalencyjny', e.cr, '#b85f00']].filter(q => q[1]);
  if(!it.length) return nodata(300, 300);
  const mx = Math.max(...it.map(q => q[1]), ...Object.values(e.ion || {})), k = 125 / mx;
  let s = '<g transform="translate(110 150)">';
  it.forEach(q => s += `<circle r="${q[1]*k}" fill="${q[0] === 'vdW' ? '#e6edf2' : 'none'}" stroke="${q[2]}" stroke-width="1.6"/>`);
  if(e.ion) Object.entries(e.ion).forEach(([a, b]) => { s += `<circle r="${b*k}" fill="none" stroke="#c98ba8" stroke-dasharray="4 3"/>`; });
  s += '<circle r="2" fill="#17212b"/></g>';
  let y = 36;
  const items = [...it, ...Object.entries(e.ion || {}).map(([a, b]) => [e.s + sup(a.replace(/[+-]/, '')) + a.slice(-1) + ' jon', b, '#c98ba8'])];
  items.forEach(q => {
    s += `<line x1="226" x2="238" y1="${y-3}" y2="${y-3}" stroke="${q[2]}" stroke-width="2"/><text x="242" y="${y}" style="fill:#17212b">${q[1]}</text><text x="242" y="${y+10}">${q[0]}</text>`;
    y += 34;
  });
  return s;
}
function radar(){
  const e = E(), L = Math.log10;
  const ax = [
    ['r at.', e.ar, v => v / 260], ['IE1', e.ie && e.ie[0], v => v / 2400], ['χ', e.en, v => v / 4],
    ['EA', e.ea, v => Math.max(0, v) / 350], ['T top.', e.mp, v => (L(v) - L(1)) / (L(3900) - L(1))],
    ['ρ', e.rho, v => (L(v) - L(1e-4)) / (L(23) - L(1e-4))], ['α', e.pol, v => v / 45]
  ];
  const n = ax.length, cx = 170, cy = 150, R = 88;
  let s = '';
  [.25, .5, .75, 1].forEach(k => {
    s += `<polygon points="${ax.map((_, i) => [cx + R * k * Math.sin(i / n * 6.2832), cy - R * k * Math.cos(i / n * 6.2832)].join(',')).join(' ')}" fill="none" stroke="${k === 1 ? '#b8c5d1' : '#e1e8ee'}"/>`;
  });
  ax.forEach((a, i) => {
    const X = Math.sin(i / n * 6.2832), Y = -Math.cos(i / n * 6.2832), lx = cx + (R + 12) * X, ly = cy + (R + 12) * Y + 3;
    const an = X > .35 ? 'start' : X < -.35 ? 'end' : 'middle', val = a[1] == null ? '—' : +(+a[1]).toPrecision(3);
    s += `<line x1="${cx}" y1="${cy}" x2="${cx+R*X}" y2="${cy+R*Y}" stroke="#e1e8ee"/><text x="${lx}" y="${ly}" text-anchor="${an}">${a[0]}<tspan dx="4" style="fill:#17212b;font-weight:600">${val}</tspan></text>`;
  });
  const pts = ax.map((a, i) => {
    const k = a[1] == null ? 0 : Math.min(1, Math.max(0, a[2](a[1])));
    return [cx + R * k * Math.sin(i / n * 6.2832), cy - R * k * Math.cos(i / n * 6.2832)];
  });
  return s + `<polygon points="${pts.join(' ')}" fill="rgba(47,138,85,.2)" stroke="#2f8a55" stroke-width="1.8" stroke-linejoin="round"/>` + pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#b85f00" stroke="#fff" stroke-width="1"/>`).join('');
}