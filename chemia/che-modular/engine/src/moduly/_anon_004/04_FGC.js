

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

let sm = 'b', zm = 1, paused = 0;
function smode(m){
  sm = m;
  $('bohr').style.display = m === 'b' ? '' : 'none';
  $('cloud').style.display = m === 'o' ? 'block' : 'none';
  $('orbbox').style.display = m === 'o' ? '' : 'none';
  $('stage').classList.toggle('om', m === 'o');
  document.querySelectorAll('[data-sm]').forEach(b => b.classList.toggle('on', b.dataset.sm === m));
  if(m === 'o') cloud();
  else if(still) bohr(0);
}
document.querySelectorAll('[data-sm]').forEach(b => b.onclick = () => smode(b.dataset.sm));
const zin=f=>{if(sm==='o'){zmCloud=Math.min(3,Math.max(.4,zmCloud*f));cloud();}else zt=Math.min(zNuc,Math.max(.6,zt*f));};
$('zi').onclick=()=>zin(1.4);$('zo').onclick=()=>zin(1/1.4);
$('zr').onclick=()=>{if(sm==='o'){zmCloud=1;cloud();}else zt=1;};
$('zn').onclick=()=>{if(sm==='b')zt=zNuc;};
$('zs').oninput=ev=>{zt=.6*Math.pow(zNuc/.6,ev.target.value/100);};
$('bohr').addEventListener('wheel',ev=>{ev.preventDefault();zin(ev.deltaY<0?1.15:1/1.15);},{passive:false});
$('bohr').addEventListener('dblclick',()=>{zt=zt>1.5?1:zNuc;});
$('pz').onclick = () => { paused = !paused; $('pz').textContent = paused ? 'wznów' : 'pauza'; };

function elec(){
  const { c } = state();
  const by = { c:0, v:0, r:0 }, nm = { c:'rdzeń', v:'walencyjne', r:'d/f aktywne' };
  ORDER.forEach(k => { if(c[k]) by[role(c, k)] += c[k]; });
  const tot = by.c + by.v + by.r;
  $('rb').innerHTML = ['c', 'v', 'r'].filter(k => by[k]).map(k => `<i style="flex:${by[k]};background:${COL[k]}"><b>${by[k]}</b></i>`).join('');
  $('roleskey').innerHTML = ['c', 'v', 'r'].map(k => `<span><i style="background:${COL[k]}"></i>${nm[k]} ${by[k]}</span>`).join('') + `<span style="color:var(--tx)">razem ${tot} e⁻</span>`;
  const sh = {};
  ORDER.forEach(k => { if(c[k]) (sh[+k[0]] = sh[+k[0]] || []).push(...Array(c[k]).fill(role(c, k))); });
  $('shl').innerHTML = Object.keys(sh).map(n => `<div class="shr"><span>${SH[n-1]} <small>n=${n}</small></span><div>${sh[n].map(r => `<i style="background:${COL[r]}"></i>`).join('')}</div><em>${sh[n].length}/${2*n*n}</em></div>`).join('');
  const e = E();
  $('bdg').innerHTML = [eclass(e.z), famOf(e.z), 'blok ' + e.b, e.st, e.cs && 'sieć ' + e.cs].filter(q => q && q !== '—').map(t => `<span>${t}</span>`).join('');
}

function lewis(){
  const { c } = state();
  const N = Math.max(...Object.keys(c).map(x => +x[0]));
  let v = 0;
  ORDER.forEach(k => { if(c[k] && +k[0] === N) v += c[k]; });
  v = Math.min(v, 8);
  const S = [[-7, -27], [7, -27], [27, -7], [27, 7], [7, 27], [-7, 27], [-27, 7], [-27, -7]];
  const ord = [0, 2, 4, 6, 1, 3, 5, 7];
  let o = '';
  for(let i = 0; i < v; i++) o += `<circle cx="${S[ord[i]][0]}" cy="${S[ord[i]][1]}" r="3.3" fill="#b85f00"/>`;
  if(chg) o += `<path d="M-40 -42H-46V42H-40M40 -42H46V42H40" stroke="#53616e" fill="none"/><text x="50" y="-30" style="font-size:13px;fill:#17212b">${chg > 0 ? chg + '+' : -chg + '−'}</text>`;
  return o + `<text x="0" y="9" text-anchor="middle" style="font:700 34px Inter, sans-serif;fill:#17212b">${sym}</text><text x="0" y="46" text-anchor="middle">${v} e⁻ walencyjne</text>`;
}
function posviz(){
  const e = E(), pr = +e.p || 0, gr = +e.g, [R, C] = pos(e.z);
  let o = '';
  const bx = (x, y, w, h, on, t) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${on ? '#b85f00' : 'none'}" stroke="${on ? '#b85f00' : '#b8c5d1'}"/><text x="${x + w/2}" y="${y + h/2 + 3.5}" text-anchor="middle" style="font-size:11px;fill:${on ? '#fff' : '#53616e'}">${t}</text>`;
  o += '<text x="0" y="10" style="font-size:11px">OKRES = liczba powłok</text>';
  for(let i = 1; i <= 7; i++) o += bx((i - 1) * 26, 16, 22, 22, i === pr, i);
  o += `<text x="195" y="31" style="fill:#17212b;font-size:12.5px">powłoki: ${pr ? SH.slice(0, pr).split('').join(' ') : '—'}</text>`;
  o += '<text x="0" y="60" style="font-size:11px">GRUPA = kolumna układu</text>';
  for(let i = 1; i <= 18; i++) o += bx((i - 1) * 20, 66, 18, 22, i === gr, i);
  o += '<text x="0" y="110" style="font-size:11px">BLOK = ostatnia zapełniana podpowłoka</text>';
  ['s', 'p', 'd', 'f'].forEach((q, i) => o += bx(i * 30, 116, 26, 22, q === e.b, q));
  return o + `<text x="140" y="131" style="fill:#17212b;font-size:12.5px">rząd ${R} · kolumna ${C}</text>`;
}
const LG = (v, a, b) => (Math.log10(v) - Math.log10(a)) / (Math.log10(b) - Math.log10(a));
const STATS = [
  ['M', 'u', e => e.m, v => v / 300], ['χ', 'Pauling', e => e.en, v => v / 4],
  ['I₁', 'kJ/mol', e => e.ie && e.ie[0], v => v / 2400], ['EA', 'kJ/mol', e => e.ea, v => (v + 50) / 400],
  ['r at.', 'pm', e => e.ar, v => v / 260], ['r kow.', 'pm', e => e.cr, v => v / 260],
  ['r vdW', 'pm', e => e.vdw, v => v / 260],
  ['T topn.', 'K', e => e.mp, v => LG(v, 1, 3900), 'C'], ['T wrz.', 'K', e => e.bp, v => LG(v, 1, 6000), 'C'],
  ['ρ', 'g/cm³', e => e.rho, v => LG(v, 1e-4, 23)], ['α', 'Å³', e => e.pol, v => v / 45]
];
function statsHtml(){
  const e = E();
  const o = STATS.map(([l, u, g, n, cFlag]) => {
    const v = g(e), ok = v != null;
    const bVal = ok ? +(+v).toPrecision(5) : '—';
    const sub = (cFlag && ok) ? `${u} · ${K2C(v)}°C` : u;
    return `<div class="st${ok ? '' : ' na'}"><span>${l}</span><b>${bVal}</b><u>${sub}</u>${ok ? `<i style="width:${Math.round(Math.min(1, Math.max(0, n(v))) * 100)}%"></i>` : ''}</div>`;
  }).join('');
  const tx = (l, v) => `<div class="st wd${v ? '' : ' na'}"><span>${l}</span><b style="font-size:12.5px">${v || '—'}</b></div>`;
  return o + tx('stan (25°C)', e.st) + tx('sieć kryst.', e.cs) + tx('stopnie utlenienia', e.ox && e.ox.map(q => q > 0 ? '+' + q : q).join(' '));
}
function cov(){
  const e = DB[sym];
  if(!e) return '<span class="sub">Dane szczegółowe niedostępne</span>';
  const FIELDS = ['m','b','g','p','t','en','ar','cr','vdw','ion','ea','ie','ox','pol','mp','bp','rho','st','cs','iso','f'];
  const mi = FIELDS.filter(k => e[k] == null || (Array.isArray(e[k]) && !e[k].length));
  const n = FIELDS.length - mi.length;
  return `<div class="sub">Kompletność danych ${n}/${FIELDS.length}${mi.length ? ' · brak: ' + mi.join(', ') : ''}</div><div class="bar"><div style="width:${n / FIELDS.length * 100}%"></div></div>`;
}
function caps(){
  const { e } = state();
  const set = (i, t) => { const n = $(i); if(n) n.innerHTML = t || '<span class="sub">brak danych</span>'; };
  const v = e.ie;
  let t = '';
  if(v){
    let m = 0, i = 1;
    for(let q = 1; q < v.length; q++) if(v[q] / v[q-1] > m){ m = v[q] / v[q-1]; i = q; }
    t = `I₁ = ${v[0]} kJ/mol. ${m > 2.5 ? `Skok ×${m.toFixed(1)} po I${i}: tyle elektronów jest łatwo dostępnych, dalej zaczyna się rdzeń.` : 'Brak ostrego skoku: elektrony usuwane z sąsiednich podpowłok.'} <b>Kliknij słupek</b>, aby zobaczyć jon.`;
  }
  set('cp-ie', t);
  set('cp-rad', e.ion && e.ar ? 'Jony vs atom: ' + Object.entries(e.ion).map(([k, r]) => `${e.s}${sup(k.replace(/[+-]/, ''))}${k.slice(-1)} ${r} pm (${(r / e.ar).toFixed(2)}× r at.)`).join(' · ') : '');
  set('cp-ph', e.mp && e.bp ? `W 25°C (298 K): ${298 < e.mp ? 'ciało stałe' : 298 < e.bp ? 'ciecz' : 'gaz'}. Zakres cieczy: ${(e.bp - e.mp).toFixed(0)} K (${K2C(e.mp)} → ${K2C(e.bp)}°C).` : '');
  const I = isotopeData(e);
  if(I && I.length){
    const top = I.reduce((a, b) => b.ab > a.ab ? b : a);
    set('cp-iso', `Najliczniejszy: ${top.A}${e.s} (${top.ab}%), N = ${top.A - e.z}, N/Z = ${((top.A - e.z) / e.z).toFixed(2)}. Promieniotwórczych w bazie: ${I.filter(q => q.hl).length}.`);
  } else set('cp-iso', '');
  const o = e.ox;
  set('cp-ox', o && o.length ? `Zakres ${Math.min(...o)}…${Math.max(...o)} (${o.length} wartości). <b>Kliknij dodatni stopień</b>, aby zobaczyć jon.` : '');
}

document.addEventListener('click', ev => {
  const a = ev.target.closest && ev.target.closest('[data-ch]');
  if(a){ chg = +a.dataset.ch; orb = ''; all(); return; }
  const b = ev.target.closest && ev.target.closest('[data-sub]');
  if(b){
    const k = b.dataset.sub;
    if(k[1] !== 'f' && state().c[k]){
      orb = k + ':' + ({ s:'s', p:'pz', d:'dz2' }[k[1]]);
      smode('o');
    }
  }
});

let hm = 'blk';
const HM = {
  blk:{ l:'blok' },
  en:{ l:'χ', k:'en', n:v => (v - .7) / 3.3 },
  ar:{ l:'promień at.', k:'ar', n:v => (v - 30) / 270 },
  ie:{ l:'I₁', f:e => e.ie && e.ie[0], n:v => (v - 370) / 2030 },
  mp:{ l:'T topn.', k:'mp', n:v => Math.log10(v) / Math.log10(3900) },
  rho:{ l:'gęstość', k:'rho', n:v => (Math.log10(v) + 4) / 5.4 },
  ea:{ l:'EA', k:'ea', n:v => (v + 50) / 400 }
};
const go = q => { curKind='el'; fi = 0; sym = q; chg = 0; orb = ''; all(); applyMode(); };

function buildPT(){
  const g = $('pt');
  if(g.children.length) return;
  SYM.forEach((q, i) => {
    const [r, c] = pos(i + 1), d = document.createElement('button');
    d.style.gridRow = r; d.style.gridColumn = c;
    d.dataset.s = q; d.dataset.z = i + 1;
    d.onclick = () => { go(q); closeDrawer(); };
    d.addEventListener('mouseenter', () => showPtInfo(q, i + 1));
    d.innerHTML = `<i>${i + 1}</i>${q}`;
    g.appendChild(d);
  });
}
function mist(){
  buildPT();
  $('ptb').innerHTML = Object.entries(HM).map(([k, v]) => `<button data-hm="${k}" class="${k === hm ? 'on' : ''}">${v.l}</button>`).join('');
  document.querySelectorAll('[data-hm]').forEach(b => b.onclick = () => { hm = b.dataset.hm; mist(); });
  const M = HM[hm], [R0, C0] = pos(SYM.indexOf(sym) + 1);
  const rl = z => { const [a, b] = pos(z); return a === R0 || b === C0; };
  let n = 0;
  $('pt').querySelectorAll('button').forEach(d => {
    const q = d.dataset.s, z = +d.dataset.z, e = DB[q];
    const v = e && (M.f ? M.f(e) : e[M.k]);
    if(e) n++;
    d.className = (hm === 'blk' ? blk(z) : '') + (e ? ' has' : '') + (q === sym ? ' sel' : '') + (rl(z) ? ' rel' : '') + (hm !== 'blk' && v == null ? ' nd' : '');
    d.style.background = (hm !== 'blk' && v != null)
      ? (t => `hsl(${110 - 105 * t},50%,${30 + 12 * t}%)`)(Math.min(1, Math.max(0, M.n(v))))
      : '';
    d.title = (e ? elName(e, lang) : q) + ', Z=' + z + (v != null ? ' · ' + M.l + ' = ' + v : '');
  });
  $('ptc').textContent = `w bazie: ${n}/118`;
  $('ptl').innerHTML = hm === 'blk'
    ? `<span><i style="background:rgba(127,176,105,.5)"></i>s</span><span><i style="background:rgba(184,95,0,.5)"></i>p</span><span><i style="background:rgba(199,140,168,.5)"></i>d</span><span><i style="background:rgba(224,103,74,.5)"></i>f</span><span><i style="background:var(--v)"></i>wybrany</span>`
    : `niska<i style="width:40px;height:8px;background:linear-gradient(90deg,hsl(110,50%,30%),hsl(5,50%,42%));border-radius:4px"></i>wysoka · ${M.l} · szare = brak w DB`;
}
function showPtInfo(q, z){
  const e = DB[q] || stub(q);
  const [r, c] = pos(z);
  const grp = r > 8 ? (r === 9 ? 'lantanowiec' : 'aktynowiec') : `grupa ${e.g}, okres ${e.p}`;
  const blkTxt = { bs:'blok s', bp:'blok p', bd:'blok d', bf:'blok f' }[blk(z)] || '';
  const cfg = (() => { const cc = fill(z); return ORDER.filter(k => cc[k]).map(k => k + sup(cc[k])).join(' '); })();
  $('pt-info').innerHTML =
    `<b>${q} · ${elName(e, lang)}</b>` +
    `<span class="tag">Z = ${z}</span>` +
    `<span class="tag">rząd ${r}, kol. ${c}</span>` +
    `<div style="margin-top:5px">${grp} · ${blkTxt} · ${eclass(z)} · ${famOf(z)}</div>` +
    `<div class="cfg">${cfg}</div>`;
}
function openDrawer(){ $('drawer').classList.add('open'); $('drawer-bg').classList.add('open'); mist(); }
function closeDrawer(){ $('drawer').classList.remove('open'); $('drawer-bg').classList.remove('open'); }
$('pt-btn').onclick = () => {
  if($('drawer').classList.contains('open')) closeDrawer();
  else openDrawer();
};
$('close-drawer').onclick = closeDrawer;
$('drawer-bg').onclick = closeDrawer;
addEventListener('keydown', e => {
  if(e.key === 'Escape' && $('drawer').classList.contains('open')) closeDrawer();
});
addEventListener('keydown', e => {
  const d = { ArrowLeft:[0, -1], ArrowRight:[0, 1], ArrowUp:[-1, 0], ArrowDown:[1, 0] }[e.key];
  if(!d || /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
  if($('drawer').classList.contains('open')) return;
  e.preventDefault();
  let [r, c] = pos(SYM.indexOf(sym) + 1);
  for(let i = 0; i < 20; i++){
    r += d[0]; c += d[1];
    const q = PM[r * 100 + c];
    if(q){ go(q); return; }
  }
});

const heatGet = () => { for(const g in SORTS) if(SORTS[g][cSort] && cSort !== 'name' && cSort !== 'z') return SORTS[g][cSort]; return null; };
function renderMiniPT(){
  const container = $('mini-pt');
  if(!container) return;
  let html = '', heat = null;
  const H = heatGet();
  if(H){ const IT = items().filter(x => x.kind === 'el'), vals = IT.map(x => H[1](x)), ok = vals.filter(v => v != null).sort((a, b) => a - b);
    if(ok.length > 2){ heat = {}; IT.forEach((x, i) => { heat[x.sym] = vals[i] == null ? null : ok.indexOf(vals[i]) / (ok.length - 1); }); } }
  const part = curKind === 'sp' ? spEls(cur) : null;
  const [selR, selC] = pos(SYM.indexOf(sym) + 1);
  SYM.forEach((q, i) => {
    const [r, c] = pos(i + 1), z = i + 1;
    const hasData = !!(DB[q] || STUB[q]);
    const isLn = z >= 57 && z <= 71, isAn = z >= 89 && z <= 103;
    let cls = 'mc';
    if(isLn) cls += ' ln';
    else if(isAn) cls += ' an';
    else { cls += ' has ' + ({'Metale':'k-m','Półmetale':'k-s','Niemetale':'k-n','Gazy szlachetne':'k-g'}[eclass(z)] || 'k-m'); }
    const isSel = part ? part.includes(q) : q === sym;
    if(isSel) cls += part ? ' part' : ' sel';
    else {
      if(!part && (r === selR || (c === selC && !isLn && !isAn))) cls += ' rel';
      if(!DB[q]) cls += ' dim';
    }
    const title = q + (hasData ? ' · ' + elName(DB[q] || stub(q), lang) : '') + ` (rz. ${r}, kol. ${c})`;
    const hv = heat ? heat[q] : undefined, hs = heat ? (hv == null ? ';background:repeating-linear-gradient(45deg,#eef2f6,#eef2f6 3px,#dde4ea 3px,#dde4ea 4px);color:#9aa8b5' : `;background:hsl(32 88% ${95 - hv * 54}%);color:${hv > .6 ? '#fff' : '#5a3a00'}`) : '';
    html += `<div class="${cls}" style="grid-row:${r};grid-column:${c}${hs}" data-sym="${q}" title="${title}">${q}</div>`;
  });
  container.innerHTML = html;
  const cap = $('mini-cap');
  if(cap){
    if(part) cap.innerHTML = `<b>${CD[cur].f}</b> · skład: ${part.join(', ')}`;
    else { const e = E0(), z = SYM.indexOf(sym) + 1;
      cap.innerHTML = `<b>${sym}</b> ${elName(e, lang)} · Z = ${z}<br>${e.p ? 'okres ' + e.p + ' · ' : ''}${e.g ? 'grupa ' + e.g + ' · ' : ''}${e.b ? 'blok ' + e.b + ' · ' : ''}${famOf(z)}`; }
  }
  if(cap && H) cap.innerHTML += heat ? `<div class="heatleg"><b>mapa: ${H[0]}</b><i></i><span><small>niska</small><small>wysoka</small></span></div>` : `<div class="heatleg"><b>mapa: ${H[0]}</b><small> — brak wartości dla pierwiastków</small></div>`;
  container.querySelectorAll('.mc.has, .mc.sel, .mc.ln, .mc.an').forEach(d => {
    d.onclick = () => { const m = d.dataset.sym; if(m && SYM.includes(m)) go(m); };
  });
}