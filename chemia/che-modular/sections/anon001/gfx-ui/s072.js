

try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{}, ok=v=>C.OK?C.OK(v):{ok:true,value:v};
const VAL={C:4,N:3,O:2,S:2,P:3,F:1,Cl:1,Br:1,I:1,H:1}, EC={O:'#c0392b',N:'#2563eb',S:'#a16207',Cl:'#1e8a4c',F:'#1e8a4c',Br:'#9a3412',I:'#6d28d9',P:'#c2410c'};
const GC={carboxyl:'#d6452b',aldehyde:'#e07b00',ketone:'#b0467a',ester:'#2f8a55',ether:'#0e7490',hydroxyl:'#2563eb',amine:'#6d28d9',amide:'#be185d',nitro:'#a16207',halogen:'#1e8a4c',sulfhydryl:'#a16207',phosphate:'#c2410c',alkene:'#475569',alkyne:'#475569',aromatic:'#d6452b',carbonyl:'#d6452b'};
const RANK={carboxyl:9,ester:9,amide:9,aldehyde:8,ketone:8,nitro:8,phosphate:8,amine:6,hydroxyl:5,ether:5,sulfhydryl:5,halogen:4,alkene:3,alkyne:3,aromatic:4,carbonyl:1};
const sub=n=>String(n).replace(/\d/g,d=>'₀₁₂₃₄₅₆₇₈₉'[d]), esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function model(s){
  const atoms=(s.atoms||[]).map(a=>({id:String(a.id),el:a.element})), by=new Map(atoms.map(a=>[a.id,a]));
  const bonds=(s.bonds||[]).map(b=>({a:String(b.atomA),b:String(b.atomB),o:+b.order||1})).filter(b=>by.has(b.a)&&by.has(b.b));
  const used={},hn={};
  bonds.forEach(b=>{[[b.a,b.b],[b.b,b.a]].forEach(([x,y])=>{used[x]=(used[x]||0)+Math.ceil(b.o);if(by.get(y).el==='H')hn[x]=(hn[x]||0)+1;});});
  atoms.forEach(a=>{a.h=a.el==='H'?0:(hn[a.id]||0)+Math.max(0,(VAL[a.el]||0)-(used[a.id]||0));});
  const heavy=atoms.filter(a=>a.el!=='H'),hid=new Set(heavy.map(a=>a.id)),adj={},hb=bonds.filter(b=>hid.has(b.a)&&hid.has(b.b));
  heavy.forEach(a=>adj[a.id]=[]);hb.forEach(b=>{adj[b.a].push(b.b);adj[b.b].push(b.a);});
  return {by,heavy,hb,adj};
}
function rings(M){const seen=new Set(),out=[];
  for(const e of M.hb){const u=e.a,v=e.b,prev=new Map([[u,null]]),q=[u];
    while(q.length){const x=q.shift();if(x===v)break;for(const y of M.adj[x]){if(x===u&&y===v)continue;if(!prev.has(y)){prev.set(y,x);q.push(y);}}}
    if(!prev.has(v))continue;const cyc=[];for(let x=v;x!=null;x=prev.get(x))cyc.push(x);
    if(cyc.length>8||cyc.length<3)continue;const k=[...cyc].sort().join('|');if(!seen.has(k)){seen.add(k);out.push(cyc);}}
  return out.sort((a,b)=>a.length-b.length);}
function aromRings(M){const o=new Map(M.hb.map(b=>[b.a+'|'+b.b,b.o])),g=(x,y)=>o.get(x+'|'+y)||o.get(y+'|'+x)||1;
  return rings(M).filter(r=>{if(r.length!==6||!r.every(x=>/^[CN]$/.test(M.by.get(x).el)))return false;
    const w=r.map((x,i)=>g(x,r[(i+1)%6]));return w.every(v=>v===1.5)||w.every((v,i)=>v+w[(i+1)%6]===3);});}
function layout(s){
  const M=model(s),RG=rings(M),P={},sg={},ord=new Map(M.hb.map(b=>[b.a+'|'+b.b,b.o]));
  const bo=(x,y)=>ord.get(x+'|'+y)||ord.get(y+'|'+x)||1,PI=Math.PI;
  function ringAt(id,dir){const r=RG.find(r=>r.includes(id)&&r.some(n=>!P[n]));if(!r)return false;
    const n=r.length,R=.5/Math.sin(PI/n),i0=r.indexOf(id),o=r.slice(i0).concat(r.slice(0,i0)),st=2*PI/n,ids=[];
    const pl=o.filter(x=>P[x]);let cx,cy,f0,sgn=1,k0=0;
    if(pl.length>=2){const u=pl[0],v=pl.find(x=>x!==u&&bo(u,x)&&M.adj[u].includes(x))||pl[1],pu=P[u],pv=P[v],mx=(pu.x+pv.x)/2,my=(pu.y+pv.y)/2,dx=pv.x-pu.x,dy=pv.y-pu.y,L=Math.hypot(dx,dy)||1,ap=R*Math.cos(PI/n);
      const all=Object.values(P),gx=all.reduce((t,p)=>t+p.x,0)/all.length,gy=all.reduce((t,p)=>t+p.y,0)/all.length;let nx=-dy/L,ny=dx/L;if((mx-gx)*nx+(my-gy)*ny<0){nx=-nx;ny=-ny;}
      cx=mx+nx*ap;cy=my+ny*ap;f0=Math.atan2(pu.y-cy,pu.x-cx);const t=Math.atan2(pv.y-cy,pv.x-cx)-f0;sgn=Math.sin(t)>0?1:-1;k0=o.indexOf(u);}
    else{const d=dir==null?0:dir;cx=P[id].x+R*Math.cos(d);cy=P[id].y+R*Math.sin(d);f0=d+PI;}
    o.forEach((x,k)=>{if(!P[x]){P[x]={x:cx+R*Math.cos(f0+sgn*(k-k0)*st),y:cy+R*Math.sin(f0+sgn*(k-k0)*st)};ids.push(x);}});
    ids.concat(pl.length>=2?[]:[id]).forEach(x=>expand(x,Math.atan2(P[x].y-cy,P[x].x-cx),true));return true;}
  function expand(id,inDir,inRing){
    if(!inRing&&ringAt(id,inDir))return;
    const kids=M.adj[id].filter(n=>!P[n]);if(!kids.length)return;const s0=sg[id]||1,n=kids.length;let A;
    if(inDir==null)inDir=-PI/6;
    if(n===1)A=[kids[0]&&(bo(id,kids[0])===3||inRing&&false)?inDir:inDir+s0*PI/3];
    else if(n===2)A=[inDir-PI/3,inDir+PI/3];else if(n===3)A=[inDir-PI/2,inDir,inDir+PI/2];else A=kids.map((_,i)=>inDir-PI/2+i*PI/(n-1));
    if(inRing&&n===1)A=[inDir];
    kids.forEach((k,i)=>{P[k]={x:P[id].x+Math.cos(A[i]),y:P[id].y+Math.sin(A[i])};sg[k]=-s0;});
    kids.forEach((k,i)=>expand(k,A[i],false));}
  let ox=0;const left=()=>M.heavy.find(a=>!P[a.id]);
  for(let a=left();a;a=left()){const st=M.heavy.find(x=>!P[x.id]&&M.adj[x.id].length<=1)||a;P[st.id]={x:ox,y:0};expand(st.id,null,false);
    const xs=Object.values(P).map(p=>p.x);ox=Math.max(...xs)+2;}
  return {M,P,RG};
}
function groups(s){let gs=[];try{gs=(C.STRUCTURE.detectFunctionalGroups(s).value||[]).slice();}catch(e){}
  const ar=aromRings(model(s));if(ar.length){gs=gs.filter(q=>q.type!=='aromatic');ar.forEach((r,i)=>gs.push({id:'fg-aromatic-r'+i,type:'aromatic',atoms:r.slice(),name:{pl:'układ aromatyczny (pierścień benzenowy)'},pattern:'6 elektronów π zdelokalizowanych nad pierścieniem'}));}
  return gs.filter(a=>!gs.some(b=>b!==a&&(RANK[b.type]||0)>(RANK[a.type]||0)&&a.atoms.every(x=>b.atoms.includes(x))));}
function svg(s,opt){
  opt=opt||{};const {M,P,RG}=layout(s),ids=Object.keys(P);if(!ids.length)return '';
  const S=opt.scale||56,xs=ids.map(i=>P[i].x),ys=ids.map(i=>P[i].y),mx=Math.min(...xs),my=Math.min(...ys),W=(Math.max(...xs)-mx)*S+110,H=(Math.max(...ys)-my)*S+110;
  const X=i=>(P[i].x-mx)*S+55,Y=i=>(P[i].y-my)*S+55,lab={};
  M.heavy.forEach(a=>{const d=M.adj[a.id].length;lab[a.id]=a.el==='C'?(d<=1?'CH'+(a.h>1?sub(a.h):''):''):a.el+(a.h?'H'+(a.h>1?sub(a.h):''):'');if(a.el==='C'&&d<=1&&a.h===0)lab[a.id]='C';if(a.el==='C'&&d<=1&&a.h===1)lab[a.id]='CH';});
  const AR=aromRings(M),inAr=(a,b)=>AR.some(r=>r.includes(a)&&r.includes(b)),gl=opt.groups===false?[]:groups(s);let o=`<svg class="r2-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="wzór strukturalny">`;
  const KEEP={hydroxyl:/^O$/,amine:/^N$/,sulfhydryl:/^S$/,halogen:/^(F|Cl|Br|I)$/};
  gl.forEach((q,k)=>{let at=q.atoms.filter(x=>P[x]);const kp=KEEP[q.type];if(kp){const t=at.filter(x=>kp.test(M.by.get(x).el));if(t.length)at=t;}if(!at.length)return;const px=at.map(X),py=at.map(Y),c=GC[q.type]||'#475569',p=at.length>1?14:17;
    const x0=Math.min(...px)-p,y0=Math.min(...py)-p,w=Math.max(...px)-Math.min(...px)+2*p,h=Math.max(...py)-Math.min(...py)+2*p;
    o+=`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="${Math.min(18,h/2)}" fill="${c}" fill-opacity=".11" stroke="${c}" stroke-dasharray="4 3"/><circle cx="${x0}" cy="${y0}" r="8.5" fill="${c}" stroke="#fff" stroke-width="1.5"/><text x="${x0}" y="${y0+3.6}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">${k+1}</text>`;});
  M.hb.forEach(b=>{const x1=X(b.a),y1=Y(b.a),x2=X(b.b),y2=Y(b.b),L=Math.hypot(x2-x1,y2-y1)||1,ux=(x2-x1)/L,uy=(y2-y1)/L,ta=lab[b.a]?12:0,tb=lab[b.b]?12:0;
    const ax=x1+ux*ta,ay=y1+uy*ta,bx=x2-ux*tb,by=y2-uy*tb,n=inAr(b.a,b.b)?1:Math.round(b.o)||1,arom=b.o===1.5&&!inAr(b.a,b.b);
    const ln=(d,dash)=>`<line x1="${ax-uy*d}" y1="${ay+ux*d}" x2="${bx-uy*d}" y2="${by+ux*d}" stroke="#17212b" stroke-width="1.8" stroke-linecap="round"${dash?' stroke-dasharray="4 3"':''}/>`;
    if(arom)o+=ln(-2.5)+ln(2.5,1);else for(let t=0;t<n;t++)o+=ln((t-(n-1)/2)*4.6);});
  AR.forEach(r=>{const cx=r.reduce((t,i)=>t+X(i),0)/6,cy=r.reduce((t,i)=>t+Y(i),0)/6,ap=Math.hypot(X(r[0])-cx,Y(r[0])-cy)*Math.cos(Math.PI/6);o+=`<circle cx="${cx}" cy="${cy}" r="${ap*.62}" fill="none" stroke="#17212b" stroke-width="1.6"/>`;});
  M.heavy.forEach(a=>{if(!lab[a.id])return;o+=`<circle cx="${X(a.id)}" cy="${Y(a.id)}" r="11" fill="#fff" fill-opacity=".9"/><text x="${X(a.id)}" y="${Y(a.id)+5}" text-anchor="middle" font-size="15" font-weight="700" font-family="Inter,sans-serif" fill="${EC[a.el]||'#17212b'}">${lab[a.id]}</text>`;});
  return o+'</svg>';
}
function panel(s,opt){
  opt=opt||{};const gl=groups(s),css='<style>.r2{display:grid;grid-template-columns:minmax(260px,1.4fr) minmax(220px,1fr);gap:16px;align-items:start}.r2-box{background:var(--panel2,#f7f9fa);border:1px solid var(--line2,#d7dfe4);border-radius:10px;padding:8px}.r2-svg{width:100%;max-height:360px}.r2-leg{list-style:none;margin:0;padding:0;display:grid;gap:8px}.r2-leg li{display:flex;gap:9px;align-items:flex-start;padding:8px 10px;border:1px solid var(--line2,#d7dfe4);border-radius:8px;background:var(--panel,#fff)}.r2-leg i{flex:none;width:20px;height:20px;border-radius:50%;color:#fff;font:700 11px/20px var(--mono,monospace);text-align:center;font-style:normal}.r2-leg b{display:block;font-size:13px}.r2-leg small{color:var(--soft,#5e707a);font:11px var(--mono,monospace)}@media(max-width:760px){.r2{grid-template-columns:1fr}}</style>';
  const li=gl.map((q,k)=>`<li><i style="background:${GC[q.type]||'#475569'}">${k+1}</i><span><b>${esc(q.name&&q.name.pl||q.type)}</b><small>${esc(q.pattern||q.type)}</small></span></li>`).join('');
  return css+`<div class="r2"><div class="r2-box">${svg(s,opt)}</div><div><div class="eu-label" style="margin-bottom:8px">GRUPY FUNKCYJNE · ${gl.length}</div>${gl.length?`<ol class="r2-leg">${li}</ol>`:'<div class="lab-note">Nie wykryto grup funkcyjnych (cząsteczka nieorganiczna lub węglowodór nasycony).</div>'}<p class="lab-note" style="margin-top:10px">Wzór szkieletowy zbudowany automatycznie z grafu: atomy H przy węglu są pominięte, a przy heteroatomach i końcach łańcucha opisane (OH, NH₂, CH₃).</p></div></div>`;
}
C.RENDER2D={version:'2.72',layout:s=>ok(layout(s)),groups:s=>ok(groups(s)),svg,panel};
const E=C.ENGINE=C.ENGINE||{};E.modules=E.modules||{};E.modules.RENDER2D='2.72';
if(E.registry)E.registry.RENDER2D={layer:'SERVICE',owner:'CHE.RENDER2D',role:'automatyczny wzór strukturalny 2D z grupami funkcyjnymi',depends:['STRUCTURE']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 72]', err && err.message ? err.message : err); } catch(_){}
}