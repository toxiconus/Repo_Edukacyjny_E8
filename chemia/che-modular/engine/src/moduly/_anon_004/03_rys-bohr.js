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
