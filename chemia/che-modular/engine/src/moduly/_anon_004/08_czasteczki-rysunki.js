const FGC = ['#d6452b', '#2f8a55', '#b0467a'], ATC = { O:'#c0392b', N:'#2563eb', Cl:'#1e8a4c', H:'#53616e' };
function fgSvg(c){
  if(!c.m || !c.bn) return '';
  const hasDepth=c.a.some(p=>Math.abs(p[3]||0)>1e-9);
  const cy=Math.cos(.6),sy=Math.sin(.6),cx=Math.cos(.5),sx=Math.sin(.5);
  const P=hasDepth?c.a.map(([e,X,Y,Z])=>{const z1=-X*sy+Z*cy;return [e,X*cy+Z*sy,-(Y*cx-z1*sx)];}):c.a;
  const xs = P.map(p => p[1]), ys = P.map(p => p[2]);
  const w = Math.max(.8, Math.max(...xs) - Math.min(...xs)), h = Math.max(.8, Math.max(...ys) - Math.min(...ys));
  const sc = Math.min(180 / w, (c.ar ? 150 : 100) / h, 60), mx = (Math.max(...xs) + Math.min(...xs)) / 2, my = (Math.max(...ys) + Math.min(...ys)) / 2;
  const X = i => 150 + (P[i][1] - mx) * sc, Y = i => 105 + (P[i][2] - my) * sc;
  let o = '<svg class="fgsvg" viewBox="0 0 300 210" role="img" aria-label="wzór strukturalny">';
  (c.fg || []).forEach((g, k) => {
    const x = g.at.map(X), y = g.at.map(Y), pd = 19, col = FGC[k % 3], x0 = Math.min(...x) - pd, y0 = Math.min(...y) - pd;
    o += `<rect x="${x0}" y="${y0}" width="${Math.max(...x) - Math.min(...x) + 2*pd}" height="${Math.max(...y) - Math.min(...y) + 2*pd}" rx="16" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-dasharray="4 3"/>`
      + `<text x="${(Math.min(...x) + Math.max(...x)) / 2}" y="${(k || c.ar) ? 204 : y0 - 6}" text-anchor="middle" font-size="11" font-weight="600" fill="${col}">${g.n}</text>`;
  });
  c.bn.forEach(([i, j, n0]) => {
    const n = c.ar && i < 6 && j < 6 ? 1 : n0;
    const dx = X(j) - X(i), dy = Y(j) - Y(i), L = Math.hypot(dx, dy) || 1, nx = -dy / L * 2.6, ny = dx / L * 2.6;
    for(let t = 0; t < n; t++){ const k = t - (n - 1) / 2;
      o += `<line x1="${X(i) + nx*k}" y1="${Y(i) + ny*k}" x2="${X(j) + nx*k}" y2="${Y(j) + ny*k}" stroke="#17212b" stroke-width="1.8"/>`; }
  });
  if(c.ar){ const cx = [0,1,2,3,4,5].reduce((t, i) => t + X(i), 0) / 6, cy = [0,1,2,3,4,5].reduce((t, i) => t + Y(i), 0) / 6, r = Math.hypot(X(0) - cx, Y(0) - cy) * .58;
    o += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#d6452b" stroke-width="1.8"/>`; }
  P.forEach((p, i) => { o += `<circle cx="${X(i)}" cy="${Y(i)}" r="${p[0] === 'H' ? 7.5 : 9.5}" fill="#f1f5f8"/><text x="${X(i)}" y="${Y(i) + 4.5}" text-anchor="middle" font-size="${p[0] === 'H' ? 12 : 14}" font-weight="700" fill="${ATC[p[0]] || '#17212b'}">${p[0]}</text>`; });
  return o + '</svg>';
}
const shade = (h, f) => { const n = parseInt(h.slice(1), 16); return `rgb(${(n >> 16 & 255) * f | 0},${(n >> 8 & 255) * f | 0},${(n & 255) * f | 0})`; };
function mol2d(c, x, W){
  const sc = W / (2.9 * (c.s || 1)), en = q => (DB[q] || {}).en || 2.5;
  const P = c.a.map(q => ({ e:q[0], x:W/2+q[1]*sc, y:W/2+q[2]*sc, l:q[3], q:0, m:0, ang:[] }));
  c.bn.forEach(([i, j, o]) => {
    const a = P[i], b = P[j], dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy), nx = -dy/L*6, ny = dx/L*6;
    x.strokeStyle = '#9aa8b5'; x.lineWidth = 3.5;
    for(let k = 0; k < o; k++){ const t = k - (o-1)/2; x.beginPath(); x.moveTo(a.x + nx*t, a.y + ny*t); x.lineTo(b.x + nx*t, b.y + ny*t); x.stroke(); }
    const d = en(b.e) - en(a.e);
    a.q += d; b.q -= d; a.m = Math.max(a.m, Math.abs(d)); b.m = a.m = Math.max(a.m, b.m);
    a.ang.push(Math.atan2(dy, dx)); b.ang.push(Math.atan2(-dy, -dx));
  });
  x.textAlign = 'center'; let vx = 0, vy = 0;
  const cx0 = P.reduce((t, p) => t + p.x, 0) / P.length, cy0 = P.reduce((t, p) => t + p.y, 0) / P.length;
  P.forEach(p => {
    const r = p.e === 'H' ? 20 : 28;
    if(p.e === sym){ x.strokeStyle = '#b85f00'; x.lineWidth = 3; x.beginPath(); x.arc(p.x, p.y, r + 5, 0, 7); x.stroke(); }
    let ax = 0, ay = 0; p.ang.forEach(a => { ax += Math.cos(a); ay += Math.sin(a); });
    const aw = Math.hypot(ax, ay) < .01 ? -Math.PI / 2 : Math.atan2(-ay, -ax);
    const g = x.createRadialGradient(p.x - r*.3, p.y - r*.3, r*.1, p.x, p.y, r);
    const ec = EC[p.e] || '#9aa8b5'; g.addColorStop(0, '#fff'); g.addColorStop(.35, ec); g.addColorStop(1, shade(ec, .62));
    x.shadowColor = 'rgba(23,33,43,.28)'; x.shadowBlur = 10; x.shadowOffsetY = 3;
    x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, r, 0, 7); x.fill(); x.shadowColor = 'transparent'; x.shadowBlur = 0; x.shadowOffsetY = 0;
    x.fillStyle = '#17212b'; x.font = '700 20px Inter, sans-serif'; x.fillText(p.e, p.x, p.y + 6);
    for(let k = 0; k < p.l; k++){
      const a = aw + (k - (p.l - 1) / 2) * (p.l > 2 ? 1.1 : 1.3), px = p.x + (r + 13) * Math.cos(a), py = p.y + (r + 13) * Math.sin(a);
      x.fillStyle = '#b85f00';
      [-1, 1].forEach(t => { x.beginPath(); x.arc(px - Math.sin(a)*3.6*t, py + Math.cos(a)*3.6*t, 2.7, 0, 7); x.fill(); });
    }
    if(p.m > .4){ x.fillStyle = p.q > 0 ? '#e0674a' : '#2f8a55'; x.font = '600 17px JetBrains Mono, monospace'; x.fillText(p.q > 0 ? 'δ⁺' : 'δ⁻', p.x + (r + 20) * Math.cos(aw + 1.57), p.y + (r + 20) * Math.sin(aw + 1.57) + 5); }
    vx -= p.q * (p.x - cx0); vy -= p.q * (p.y - cy0);
  });
  const mg = Math.hypot(vx, vy) / sc, u = [vx / (mg * sc || 1), vy / (mg * sc || 1)], Ln = Math.min(84, 28 + mg * 28);
  x.font = '17px JetBrains Mono, monospace'; x.fillStyle = '#53616e';
  if(mg > .3){
    const x0 = W/2 - u[0]*Ln/2, y0 = W - 78 - u[1]*Ln/2, x1 = x0 + u[0]*Ln, y1 = y0 + u[1]*Ln, a = Math.atan2(u[1], u[0]);
    x.strokeStyle = x.fillStyle = '#17212b'; x.lineWidth = 2.5;
    x.beginPath(); x.moveTo(x0, y0); x.lineTo(x1, y1); x.stroke();
    x.beginPath(); x.moveTo(x1, y1); x.lineTo(x1 - 12 * Math.cos(a - .4), y1 - 12 * Math.sin(a - .4)); x.lineTo(x1 - 12 * Math.cos(a + .4), y1 - 12 * Math.sin(a + .4)); x.fill();
    x.fillStyle = '#53616e'; x.fillText('wypadkowy dipol: cząsteczka polarna', W/2, W - 14);
  } else { x.fillText('dipole wiązań znoszą się: cząsteczka niepolarna', W/2, W - 42); x.fillText('kropki = wolne pary elektronowe', W/2, W - 18); }
}

function mol3d(c,x,W){
  const A=c.a||[],n=A.length;if(!n)return;
  if(spn&&!drag&&!still)ry+=.007;
  const xs=A.map(p=>p[1]),ys=A.map(p=>p[2]),zs=A.map(p=>p[3]||0);
  const mid=(q)=>(Math.min(...q)+Math.max(...q))/2, cx0=mid(xs),cy0=mid(ys),cz0=mid(zs);
  const span=Math.max(1,...xs.map(q=>Math.abs(q-cx0)),...ys.map(q=>Math.abs(q-cy0)),...zs.map(q=>Math.abs(q-cz0)))*2;
  const scale=W/(span*1.8),ca=Math.cos(rx),sa=Math.sin(rx),cb=Math.cos(ry),sb=Math.sin(ry),camera=span*4;
  const P=A.map(([e,X,Y,Z0])=>{const X0=X-cx0,Y0=Y-cy0,Z=(Z0||0)-cz0,x1=X0*cb+Z*sb,z1=-X0*sb+Z*cb,y1=Y0*ca-z1*sa,z2=Y0*sa+z1*ca,persp=camera/(camera+z2);return {e,x:W/2+x1*scale*persp,y:W/2-y1*scale*persp,z:z2,persp};});
  (c.bn||[]).map(([a,b,order])=>({a:P[a],b:P[b],order:Number(order)||1})).filter(q=>q.a&&q.b).sort((a,b)=>(a.a.z+a.b.z)-(b.a.z+b.b.z)).forEach(q=>{
    const dx=q.b.x-q.a.x,dy=q.b.y-q.a.y,L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L,offs=q.order>=3?[-4,0,4]:q.order===2?[-3,3]:[0];
    x.strokeStyle=q.order>1?'#806018':'#71818a';x.lineWidth=3;x.lineCap='round';
    offs.forEach(off=>{x.beginPath();x.moveTo(q.a.x+nx*off,q.a.y+ny*off);x.lineTo(q.b.x+nx*off,q.b.y+ny*off);x.stroke();});
  });
  P.slice().sort((a,b)=>a.z-b.z).forEach(p=>{
    const radius=Math.max(9,Math.min(30,(p.e==='H'?12:18)*p.persp*(spc?1.3:1)));
    const color=EC[p.e]||'#8b98a5',grad=x.createRadialGradient(p.x-radius*.32,p.y-radius*.36,radius*.08,p.x,p.y,radius);
    grad.addColorStop(0,'#ffffff');grad.addColorStop(.28,color);grad.addColorStop(1,shade(color,.62));
    x.fillStyle=grad;x.beginPath();x.arc(p.x,p.y,radius,0,Math.PI*2);x.fill();
    if(lab){x.fillStyle=p.e==='H'?'#26363d':'#ffffff';x.font=`700 ${p.e==='H'?13:15}px Inter,sans-serif`;x.textAlign='center';x.textBaseline='middle';x.fillText(p.e,p.x,p.y);}
  });
  x.fillStyle='#53616e';x.font='12px Inter,sans-serif';x.textAlign='left';x.fillText('MODEL 3D · obrót',12,W-12);
}

function vw(){
  const c = cur && CD[cur], cv = $('cmpv'), x = cv.getContext('2d'), W = cv.width;
  x.fillStyle = '#f4f7f9'; x.fillRect(0, 0, W, W);
  if(!c) return;
  if(c.m) return mol3d(c,x,W);
  if(!c.bd){ c.bd = []; c.a.forEach((p, i) => c.a.forEach((q, j) => { if(j > i && Math.hypot(p[1] - q[1], p[2] - q[2], p[3] - q[3]) <= c.b) c.bd.push([i, j]); })); }
  if(spn && !drag && !still) ry += .007;
  const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx), sc = W / (2 * c.R);
  const P = c.a.map(([e, X, Y, Z]) => {
    const x1 = X * cy + Z * sy, z1 = -X * sy + Z * cy;
    return { e, x:W/2 + x1*sc, y:W/2 - (Y*cx - z1*sx)*sc, z:Y*sx + z1*cx };
  });
  x.strokeStyle = '#9aa8b5'; x.lineWidth = 3;
  c.bd.forEach(([i, j]) => { x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke(); });
  P.slice().sort((a, b) => a.z - b.z).forEach(p => {
    const r = ER[p.e] * c.k * sc * (spc ? 1.7 : .6) * (1 + p.z * .04);
    const g = x.createRadialGradient(p.x - r*.3, p.y - r*.3, r*.1, p.x, p.y, r);
    const ec = EC[p.e] || '#9aa8b5'; g.addColorStop(0, '#fff'); g.addColorStop(.3, ec); g.addColorStop(1, shade(ec, .62));
    x.shadowColor = 'rgba(23,33,43,.25)'; x.shadowBlur = 8; x.shadowOffsetY = 2;
    x.fillStyle = g; x.beginPath(); x.arc(p.x, p.y, r, 0, 7); x.fill(); x.shadowColor = 'transparent'; x.shadowBlur = 0; x.shadowOffsetY = 0;
    if(lab){ x.fillStyle = '#17212b'; x.font = '700 15px Inter, sans-serif'; x.textAlign = 'center'; x.fillText(p.e, p.x, p.y + 5); }
  });
  x.fillStyle = '#6b7886'; x.font = '15px JetBrains Mono, monospace'; x.textAlign = 'left'; x.fillText('przeciągnij, aby obracać', 12, W - 12);
}
{
  const cv = $('cmpv'); let lx, ly;
  cv.onpointerdown = e => { drag = 1; lx = e.clientX; ly = e.clientY; cv.setPointerCapture(e.pointerId); };
  cv.onpointerup = cv.onpointercancel = () => drag = 0;
  cv.onpointermove = e => {
    if(!drag) return;
    ry += (e.clientX - lx) * .01; rx += (e.clientY - ly) * .01;
    lx = e.clientX; ly = e.clientY;
    if(still) vw();
  };
}

