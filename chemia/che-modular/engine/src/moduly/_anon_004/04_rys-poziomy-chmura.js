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

