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
function ph(){
  const e = E(), svg = $('ph'), W = 420;
  if(!e.mp || !e.bp){ svg.setAttribute('viewBox', '0 0 ' + W + ' 90'); return nodata(W, 90); }
  const C = k => k - 273.15, MN = -273.15, MX = 6000, X0 = 62, XW = W - X0 - 14, X = t => X0 + (t - MN) / (MX - MN) * XW;
  const col = ['#7fb5d6', '#b85f00', '#c98ba8'];
  const refs = [['H₂O', 273.15, 373.15], ['Hg', 234.32, 629.88], ['Ga', 302.91, 2477], ['W', 3695, 5828]];
  const oth = Object.keys(DB).filter(k => k !== sym && DB[k].mp && DB[k].bp).map(k => [k, DB[k].mp, DB[k].bp]);
  const all = [...oth, ...refs.filter(r => r[0] !== sym)].sort((a, b) => a[1] - b[1]);
  const rows = [[sym, e.mp, e.bp, 1], ...all.map(r => [...r, 0])];
  const H = 50 + rows.reduce((a, r) => a + (r[3] ? 88 : 24), 0) + 46;
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  const lab = (x, y, t, st) => x > W - 52 ? `<text x="${W-4}" y="${y}" text-anchor="end" style="${st||''}">${t}</text>` : `<text x="${x}" y="${y}" text-anchor="middle" style="${st||''}">${t}</text>`;
  let y = 50, s = '';
  [0, 1000, 2000, 3000, 4000, 5000, 6000].forEach(t => {
    const x = X(t);
    s += `<line x1="${x}" x2="${x}" y1="38" y2="${H-40}" stroke="#e1e8ee"/><text x="${x}" y="30" text-anchor="middle" style="font-size:10.5px">${t}</text>`;
  });
  s += `<text x="4" y="30" style="font-size:11px">°C</text>`;
  rows.forEach(([n, mp, bp, me]) => {
    const h = me ? 24 : 10, x1 = X(C(mp)), x2 = X(C(bp)), o = me ? 1 : .55;
    if(me) s += `<rect x="0" y="${y-8}" width="${W}" height="${h+76}" rx="8" fill="rgba(217,119,6,.07)"/>`;
    s += `<text x="4" y="${y+h/2+4}" style="font-size:${me?15:11.5}px;fill:${me?'#17212b':'#53616e'};font-weight:${me?700:500}">${n}</text>`;
    s += `<rect x="${X(MN)}" y="${y}" width="${x1-X(MN)}" height="${h}" rx="2" fill="${col[0]}" opacity="${o}"/><rect x="${x1}" y="${y}" width="${Math.max(2, x2-x1)}" height="${h}" fill="${col[1]}" opacity="${o}"/><rect x="${x2}" y="${y}" width="${X(MX)-x2}" height="${h}" rx="2" fill="${col[2]}" opacity="${o*.8}"/>`;
    if(me){
      s += lab(x1, y+h+17, 'topn. ' + C(mp).toFixed(0) + ' °C', 'font-size:12px;fill:#17212b');
      s += lab(x2, y+h+34, 'wrz. ' + C(bp).toFixed(0) + ' °C', 'font-size:12px;fill:#17212b');
      s += `<text x="${Math.min(x1, W-100)}" y="${y+h+51}" style="font-size:12px;fill:#b85f00;font-weight:600">ciecz ${(bp-mp).toFixed(0)} K</text>`;
    }
    y += me ? 88 : 24;
  });
  s += `<path d="M${X(25)} 40V${H-40}" stroke="#17212b" stroke-width="1.6" stroke-dasharray="4 3"/><text x="${X(25)}" y="${H-26}" text-anchor="middle" style="fill:#17212b;font-size:11px;font-weight:600">25 °C</text>`;
  [['ciało stałe', 0], ['ciecz', 1], ['gaz', 2]].forEach(([t, i], k) => {
    const lx = X0 + [0, 92, 150][k];
    s += `<rect x="${lx}" y="${H-16}" width="10" height="10" rx="2" fill="${col[i]}"/><text x="${lx+14}" y="${H-7}" style="font-size:11px">${t}</text>`;
  });
  return s;
}
function iso(){
  const e = E(), v = isotopeData(e);
  if(!v || !v.length) return nodata(300, 300);
  const top = v.slice().sort((a, b) => (b.ab || 0) - (a.ab || 0))[0], sel = isoA || (top ? top.A : 0);
  const bw = 250 / v.length, fs = Math.max(8.5, Math.min(11, bw / 3));
  let s = '<line x1="24" x2="292" y1="230" y2="230" stroke="#9aa8b5"/>';
  v.forEach((q, i) => {
    const h = (q.ab || 0) / 100 * 170, x = 36 + i * bw, w = bw - 8, cx = x + w / 2, st = !q.hl, on = q.A === sel;
    s += `<g data-i="${q.A}" style="cursor:pointer"><title>${q.A}${sym}: ${st ? q.ab + ' %' : 'promieniotwórczy, T½ ' + q.hl}</title>`
       + `<rect x="${x-3}" y="26" width="${w+6}" height="240" rx="6" fill="${on ? 'rgba(217,119,6,.10)' : 'transparent'}"/>`;
    s += st ? `<rect x="${x}" y="${230-Math.max(h,2)}" width="${w}" height="${Math.max(h,2)}" rx="3" fill="${on ? '#b85f00' : '#2f8a55'}" opacity="${on ? 1 : .85}"/>`
            : `<rect x="${x}" y="222" width="${w}" height="8" rx="2" fill="${on ? 'rgba(217,119,6,.25)' : 'none'}" stroke="#b85f00" stroke-dasharray="3 2"/>`;
    if(st ? q.ab >= 2 : true) s += `<text x="${cx}" y="${st ? 224-h : 214}" text-anchor="middle" style="font-size:${fs}px">${st ? q.ab + '%' : q.hl}</text>`;
    s += `<text x="${cx}" y="246" text-anchor="middle" style="fill:#17212b;font-size:12.5px;font-weight:${on ? 700 : 500}">${q.A}</text><text x="${cx}" y="260" text-anchor="middle" style="font-size:10px">N=${q.A - e.z}</text></g>`;
  });
  return s + '<text x="24" y="14" style="font-size:9.5px">pełne = stabilne · kreskowane = promieniotwórcze</text>';
}
function ox(){
  const e = E(), S = new Set(e.ox || []);
  let s = '';
  for(let q = -4; q <= 8; q++){
    const x = 30 + (q + 4) * 72, on = S.has(q), cur = on && q === chg;
    const clk = on && (q > 0 || (q < 0 && e.ion && e.ion[(-q) + '-']));
    s += `<rect x="${x}" y="40" width="64" height="${on?64:18}" rx="5" fill="${on?(q<0?'#2f8a55':q===0?'#53616e':'#b85f00'):'none'}" opacity="${on?.9:1}" stroke="${cur?'#17212b':on?'none':'#b8c5d1'}" stroke-width="${cur?2.5:1}" ${clk?`data-ch="${q}" style="cursor:pointer"`:''}><title>${on?'występuje'+(clk?'. Kliknij: jon '+(q>0?'+'+q:q):''):'nie występuje'}</title></rect><text x="${x+32}" y="${on?124:62}" text-anchor="middle" style="font-size:12.5px;font-weight:${cur?700:500};fill:${on?'#17212b':'#9aa8b5'}">${q>0?'+'+q:q}</text>`;
  }
  return s + '<text x="30" y="24" style="font-size:11px">stopnie utlenienia (wypełnione = występują; obrys = wybrany jon)</text>';
}
function redox(){
  const ks = Object.entries(REDOX), X = v => 30 + (v + 3.2) / 6.3 * 940;
  let s = '<defs><linearGradient id="rxg" x1="0" x2="1"><stop offset="0" stop-color="#2f8a55" stop-opacity=".16"/><stop offset="1" stop-color="#b85f00" stop-opacity=".2"/></linearGradient></defs><rect x="30" y="54" width="940" height="16" rx="8" fill="url(#rxg)"/><line x1="30" x2="970" y1="62" y2="62" stroke="#9aa8b5"/>';
  for(let v = -3; v <= 3; v++) s += `<line x1="${X(v)}" x2="${X(v)}" y1="${v?56:50}" y2="${v?68:74}" stroke="${v?'#9aa8b5':'#17212b'}" stroke-width="${v?1:2}"/><text x="${X(v)}" y="86" text-anchor="middle" style="${v?'':'fill:#17212b;font-weight:700'}">${v ? v : '0 (SHE)'}</text>`;
  const mine = ks.filter(([k]) => k.split('/')[1] === sym || k.split('/')[1] === sym + '-').sort((a, b) => a[1] - b[1]);
  ks.forEach(([k, v]) => {
    if(mine.some(m => m[0] === k)) return;
    s += `<circle cx="${X(v)}" cy="62" r="3" fill="#6b7886" opacity=".7"><title>${k}  ${v} V</title></circle>`;
  });
  mine.forEach(([k, v], i) => {
    const x = X(v), ly = 40 - (i % 2) * 17, an = x > 860 ? 'end' : x < 140 ? 'start' : 'middle', tx = an === 'end' ? x + 8 : an === 'start' ? x - 8 : x;
    if(i % 2) s += `<line x1="${x}" x2="${x}" y1="${ly+4}" y2="58" stroke="#b85f00" stroke-width=".8" opacity=".6"/>`;
    s += `<circle cx="${x}" cy="62" r="6.5" fill="#b85f00" stroke="#fff" stroke-width="1.5"><title>${k}  ${v} V</title></circle><text x="${tx}" y="${ly}" text-anchor="${an}" style="fill:#b85f00;font-size:12.5px;font-weight:600">${k} ${v} V</text>`;
  });
  return s + '<text x="30" y="112" style="font-size:11px">silniejszy reduktor ← → silniejszy utleniacz</text>';
}
function slater(){
  const { e, c } = state(), ks = ORDER.filter(k => c[k]);
  const NS = { 1:1, 2:2, 3:3, 4:3.7, 5:4, 6:4.2, 7:4.5 };
  const W = 360, bx = 50, BW = 150, rh = 26, top = 24;
  let o = `<text x="${bx}" y="12" style="font-size:10px;letter-spacing:.08em">Z* (CZĄSTKA / PEŁNE Z)</text><text x="${W-4}" y="12" text-anchor="end" style="font-size:10px;letter-spacing:.08em">E ≈</text>`;
  ks.forEach((k, i) => {
    const n = +k[0], l = k[1]; let sg = 0;
    ks.forEach(j => {
      const m = +j[0], q = j[1], cnt = c[j] - (j === k ? 1 : 0),
            same = m === n && ((l === 's' || l === 'p') ? (q === 's' || q === 'p') : q === l);
      if(same) sg += cnt * (k === '1s' ? .3 : .35);
      else if(l === 's' || l === 'p'){ if(m === n - 1) sg += cnt * .85; else if(m < n - 1) sg += cnt; }
      else if(m < n || (m === n && 'spdf'.indexOf(q) < 'spdf'.indexOf(l))) sg += cnt;
    });
    const r = role(c, k), zs = e.z - sg, y = top + i * rh, col = COL[r], w = v => Math.max(2, v / e.z * BW);
    if(r === 'v') o += `<rect x="0" y="${y-4}" width="${W}" height="${rh-2}" rx="6" fill="rgba(217,119,6,.08)"/>`;
    o += `<text x="6" y="${y+11}" style="fill:${col};font-size:13px;font-weight:700">${k}${sup(c[k])}</text>`
       + `<rect x="${bx}" y="${y}" width="${BW}" height="14" rx="4" fill="#e3eaf0"/><rect x="${bx}" y="${y}" width="${w(zs)}" height="14" rx="4" fill="${col}" opacity=".92"/>`
       + `<text x="${bx+BW+8}" y="${y+11}" style="font-size:12.5px;font-weight:700;fill:#17212b">${zs.toFixed(2)}</text>`
       + `<text x="${W-4}" y="${y+11}" text-anchor="end" style="font-size:11.5px">${(-13.6*Math.pow(zs/NS[n], 2)).toFixed(1).replace('-', '−')} eV</text>`;
  });
  const H = top + ks.length * rh + 18;
  $('sl').setAttribute('viewBox', `0 0 ${W} ${H}`);
  return o + `<text x="6" y="${H-4}" style="font-size:10.5px">szary pasek = pełne Z=${e.z} · wg Slatera (przybl.)</text>`;
}
