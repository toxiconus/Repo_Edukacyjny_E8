
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
function notes(){
  const { e, c } = state();
  const L = [], N = Math.max(...Object.keys(c).map(x => +x[0])),
        val = ORDER.filter(k => c[k] && role(c, k) === 'v').reduce((a, k) => a + c[k], 0);
  let u = 0;
  {
    const { c0 } = state(), NG = [[2, 'He'], [10, 'Ne'], [18, 'Ar'], [36, 'Kr'], [54, 'Xe'], [86, 'Rn']], core = NG.filter(q => q[0] < e.z).pop();
    if(core){
      const nc = fill(core[0]), rest = ORDER.filter(k => (c0[k] || 0) - (nc[k] || 0) > 0).sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c0[k] - (nc[k] || 0))).join(' ');
      L.push(`Konfiguracja skrócona: <b>[${core[1]}] ${rest}</b>.`);
    }
  }
  L.push(`Powłoka walencyjna n = ${N} zawiera <b>${val} e⁻</b>.`);
  if(e.b === 's' || e.b === 'p'){
    if(e.g === 18) L.push('Zamknięta powłoka walencyjna: pierwiastek szlachetny, bierny chemicznie.');
    else if(val <= 3) L.push(`Do osiągnięcia konfiguracji gazu szlachetnego łatwiej <b>oddać ${val} e⁻</b> (kation ${e.s}${val > 1 ? sup('' + val) : ''}⁺).`);
    else if(val >= 5) L.push(`Do oktetu brakuje <b>${8 - val} e⁻</b> — typowy anion ${e.s}${8 - val > 1 ? sup('' + (8 - val)) : ''}⁻.`);
    else L.push('Połowa oktetu: tworzy głównie wiązania kowalencyjne (oddanie lub przyjęcie 4 e⁻ jest niekorzystne).');
  }
  ORDER.forEach(k => { if(c[k]){ const nb = CAP[k[1]] / 2; u += c[k] <= nb ? c[k] : 2 * nb - c[k]; } });
  L.push(`Niesparowane elektrony: <b>${u}</b>. ${u ? 'Przewidywany paramagnetyzm (przybliżenie atomowe).' : 'Przewidywany diamagnetyzm.'}`);
  ORDER.forEach(k => {
    if(!c[k] || k[1] === 's') return;
    if(c[k] === CAP[k[1]] / 2) L.push(`${k}${sup(c[k])}: podpowłoka półzapełniona, maksymalna multipletowość (Hund).`);
    else if(c[k] === CAP[k[1]] && role(c, k) !== 'c') L.push(`${k}${sup(c[k])}: podpowłoka zapełniona.`);
  });
  const v = e.ie;
  if(v){
    let m = 0, i = 1;
    for(let q = 1; q < v.length; q++) if(v[q] / v[q-1] > m){ m = v[q] / v[q-1]; i = q; }
    L.push(`Największy skok I${i}→I${i+1} (×${m.toFixed(1)}). ` + (m > 2.5
      ? `Po usunięciu ${i} e⁻ zaczyna się rdzeń, stąd typowy stopień utlenienia +${i}.`
      : 'Wzrost łagodny: kolejne elektrony z podpowłok o zbliżonej energii, stąd wiele stopni utlenienia.'));
  }
  if(e.ion && e.ar){
    const k = Object.entries(e.ion)[0];
    L.push(`Jon ${k[0]} ma promień ${k[1]} pm przy atomowym ${e.ar} pm: ${k[0].endsWith('+') ? 'kation kurczy się po utracie elektronów i słabszym ekranowaniu' : 'anion rośnie przez odpychanie elektronów'}.`);
  }
  return L.map(t => `<div class="nl">${t}</div>`).join('');
}

const rs = (A, B) => {
  const a = [];
  for(let i = 0; i < 3; i++) for(let j = 0; j < 3; j++) for(let k = 0; k < 3; k++) a.push([(i + j + k) % 2 ? B : A, i - 1, j - 1, k - 1]);
  return a;
};
const cup = (() => {
  const a = [];
  for(const x of [0, 4]) for(const y of [0, 4]) for(const z of [0, 4]) a.push(['O', x - 2, y - 2, z - 2]);
  a.push(['O', 0, 0, 0]);
  [[1,1,1],[3,3,1],[3,1,3],[1,3,3]].forEach(p => a.push(['Cu', p[0] - 2, p[1] - 2, p[2] - 2]));
  return a;
})();
const CD = {
  NaCl:{f:'NaCl',n:'chlorek sodu, halit',a:rs('Na','Cl'),b:1.01,k:.55,R:1.9,d:'Jony Na⁺ i Cl⁻ tworzą sieć typu NaCl (dwie przenikające się sieci fcc), liczba koordynacyjna 6:6. Energia sieciowa ok. 787 kJ/mol.'},
  Fe2O3:{f:'Fe₂O₃',n:'tlenek żelaza(III), hematyt',a:[['Fe',0,0,0],['O',1,0,0],['O',-1,0,0],['O',0,1,0],['O',0,-1,0],['O',0,0,1],['O',0,0,-1]],b:1.05,k:.5,R:1.7,d:'Czerwonobrunatna ruda żelaza i pigment. Każdy Fe³⁺ ma sześć sąsiadów O²⁻ w zniekształconym oktaedrze.'},
  FeO:{f:'FeO',n:'tlenek żelaza(II), wüstyt',a:rs('Fe','O'),b:1.01,k:.5,R:1.9,d:'Struktura typu NaCl, lecz niestechiometryczna (Fe₁₋ₓO), bo część żelaza występuje jako Fe³⁺ z lukami w sieci kationów.'},
  Cu2O:{f:'Cu₂O',n:'tlenek miedzi(I), kupryt',a:cup,b:1.8,k:.42,R:3.2,d:'Czerwony tlenek. Cu⁺ ma liniową koordynację 2 (O–Cu–O), a O²⁻ tetraedr czterech Cu⁺.'},
  H2O:{m:1,f:'H₂O',n:'woda',a:[['O',0,-.3,2],['H',-.85,.45,0],['H',.85,.45,0]],bn:[[0,1,1],[0,2,1]],d:'Cząsteczka kątowa (104,5°): dwie pary wolne tlenu odpychają wiązania O–H. Duża różnica χ daje silny dipol i wiązania wodorowe.'},
  CO2:{m:1,f:'CO₂',n:'dwutlenek węgla',a:[['C',0,0,0],['O',-1.3,0,2],['O',1.3,0,2]],bn:[[0,1,2],[0,2,2]],d:'Liniowa (180°), dwa wiązania podwójne C=O. Każde wiązanie jest polarne, ale dipole się znoszą.'},
  HCl:{m:1,f:'HCl',n:'chlorowodór',a:[['H',-.9,0,0],['Cl',.9,0,3]],bn:[[0,1,1]],d:'Dwuatomowa, silnie polarna (Δχ ≈ 0,96). W wodzie dysocjuje całkowicie: mocny kwas.'},
  CH4:{m:1,f:'CH₄',n:'metan',a:[['C',0,0,0],['H',-.9,-.9,0],['H',.9,-.9,0],['H',-.9,.9,0],['H',.9,.9,0]],bn:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],d:'Tetraedr (109,5°). Cztery równocenne wiązania C–H, sp³, symetria znosi dipole.'},
  NH3:{m:1,f:'NH₃',n:'amoniak',a:[['N',0,-.35,1],['H',-.95,.5,0],['H',.95,.5,0],['H',0,.95,0]],bn:[[0,1,1],[0,2,1],[0,3,1]],d:'Piramida trygonalna (ok. 107°) z parą wolną na azocie. Silny dipol, wiązania wodorowe, zasadowość.'},
  N2:{m:1,f:'N₂',n:'azot cząsteczkowy',a:[['N',-.6,0,1],['N',.6,0,1]],bn:[[0,1,3]],d:'Wiązanie potrójne N≡N (ok. 945 kJ/mol) czyni cząsteczkę wyjątkowo trwałą i obojętną.'},
  H2:{m:1,f:'H₂',n:'wodór cząsteczkowy',a:[['H',-.6,0,0],['H',.6,0,0]],bn:[[0,1,1]],d:'Forma pierwiastkowa wodoru: jedno wiązanie σ z nakładania orbitali 1s. Energia wiązania ~436 kJ/mol.'},
  Cl2:{m:1,f:'Cl₂',n:'chlor cząsteczkowy',a:[['Cl',-.8,0,3],['Cl',.8,0,3]],bn:[[0,1,1]],d:'Pojedyncze wiązanie Cl–Cl i trzy pary wolne na atomie. Silny utleniacz (E° = 1,36 V).'},
  CH3COOH:{m:1,f:'CH₃COOH',n:'kwas octowy (etanowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',0,-1.25,2],['O',.87,.25,2],['H',1.74,-.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1]],fg:[{n:'grupa karboksylowa –COOH',at:[1,2,3,4]},{n:'grupa metylowa –CH₃',at:[0,5,6,7]}],d:'Najprostszy kwas karboksylowy. Grupa –COOH łączy karbonyl C=O i hydroksyl –OH; polaryzacja wiązania O–H pozwala odszczepić proton (słaby kwas, pKa 4,76). Tworzy dimery przez wiązania wodorowe.'},
  C2H5OH:{m:1,f:'C₂H₅OH',n:'etanol (alkohol etylowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',.87,.25,2],['H',1.74,-.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0],['H',0,-1.25,0],['H',0,.75,0]],bn:[[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]],fg:[{n:'grupa hydroksylowa –OH',at:[2,3]}],d:'Alkohol z grupą hydroksylową –OH przy węglu sp³. Grupa –OH tworzy wiązania wodorowe (stąd wysoka temperatura wrzenia względem eteru o tej samej masie) i nadaje mieszalność z wodą.'},
  CH3CHO:{m:1,f:'CH₃CHO',n:'etanal (aldehyd octowy)',s:1.55,a:[['C',-.87,.25,0],['C',0,-.25,0],['O',0,-1.25,2],['H',.87,.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1]],fg:[{n:'grupa aldehydowa –CHO',at:[1,2,3]},{n:'grupa metylowa –CH₃',at:[0,4,5,6]}],d:'Aldehyd: grupa karbonylowa C=O na końcu łańcucha, z atomem H przy węglu karbonylowym. Łatwo się utlenia do kwasu (tu: octowego), co odróżnia aldehydy od ketonów.'},
  C3H6O:{m:1,f:'C₃H₆O',n:'propanon (aceton)',s:1.55,a:[['C',-.87,.5,0],['C',0,0,0],['O',0,-1,2],['C',.87,.5,0],['H',-.87,1.5,0],['H',-1.74,0,0],['H',-1.74,1,0],['H',.87,1.5,0],['H',1.74,0,0],['H',1.74,1,0]],bn:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1],[3,7,1],[3,8,1],[3,9,1]],fg:[{n:'grupa karbonylowa (keton) >C=O',at:[1,2]}],d:'Najprostszy keton: grupa karbonylowa C=O między dwoma grupami metylowymi. Polarne wiązanie C=O daje duży dipol; rozpuszczalnik mieszalny z wodą. Trudniej się utlenia niż aldehyd.'},
  CH3NH2:{m:1,f:'CH₃NH₂',n:'metyloamina',s:1.55,a:[['C',-.87,.25,0],['N',0,-.25,1],['H',.87,.25,0],['H',0,-1.25,0],['H',-.87,1.25,0],['H',-1.74,.75,0],['H',-1.74,-.25,0]],bn:[[0,1,1],[1,2,1],[1,3,1],[0,4,1],[0,5,1],[0,6,1]],fg:[{n:'grupa aminowa –NH₂',at:[1,2,3]},{n:'grupa metylowa –CH₃',at:[0,4,5,6]}],d:'Najprostsza amina pierwszorzędowa. Wolna para elektronowa na azocie czyni ją zasadą (akceptor protonu) i nukleofilem; tworzy wiązania wodorowe.'},
  C6H6:{m:1,f:'C₆H₆',n:'benzen',s:1.55,ar:1,a:[['C',0.0,-1.0,0],['C',0.866,-0.5,0],['C',0.866,0.5,0],['C',0.0,1.0,0],['C',-0.866,0.5,0],['C',-0.866,-0.5,0],['H',0.0,-1.95,0],['H',1.689,-0.975,0],['H',1.689,0.975,0],['H',0.0,1.95,0],['H',-1.689,0.975,0],['H',-1.689,-0.975,0]],bn:[[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]],fg:[{n:'pierścień aromatyczny (benzenowy)',at:[0,1,2,3,4,5]}],d:'Płaski sześciokąt z sześciu atomów C sp². Sześć elektronów π jest zdelokalizowanych nad pierścieniem (stąd koło we wzorze), więc wszystkie wiązania C–C mają tę samą długość 139 pm, pośrednią między pojedynczym a podwójnym. Układ aromatyczny jest wyjątkowo trwały.'},
  CaO:{f:'CaO',n:'tlenek wapnia, wapno palone',a:[['Ca',0,0,0],['O',1.4,0,0]],b:1.1,k:.5,R:1.8,d:'Tlenek zasadowy. Z woda daje Ca(OH)2.'},
  CuO:{f:'CuO',n:'tlenek miedzi(II)',a:[['Cu',0,0,0],['O',1.3,0,0]],b:1.05,k:.5,R:1.7,d:'Czarny tlenek. Z kwasem daje sol miedzi(II).'},
  SO2:{f:'SO2',n:'tlenek siarki(IV)',a:[['S',0,0,0],['O',1.2,0.4,0],['O',-1.2,0.4,0]],b:1,k:.45,R:1.6,d:'Bezwodnik kwasu siarkowego(IV).'},
  SO3:{f:'SO3',n:'tlenek siarki(VI)',a:[['S',0,0,0],['O',1.2,0,0],['O',-0.6,1.0,0],['O',-0.6,-1.0,0]],b:1,k:.45,R:1.6,d:'Bezwodnik kwasu siarkowego(VI).'},
  H2SO4:{f:'H₂SO₄',n:'kwas siarkowy(VI)',d:'Kwas tlenowy. Z wodą dysocjuje.'},
  NaOH:{f:'NaOH',n:'wodorotlenek sodu',a:[['Na',0,0,0],['O',1.2,0,0],['H',2.0,0,0]],b:1,k:.5,R:1.7,d:'Mocna zasada. W wodzie jony Na+ i OH-.'},
  CaOH2:{f:'Ca(OH)2',n:'wodorotlenek wapnia',a:[['Ca',0,0,0],['O',1.2,0.4,0],['O',1.2,-0.4,0]],b:1.05,k:.5,R:1.8,d:'Woda wapienna. Z CO2 metnieje.'},
  MgO:{f:'MgO',n:'tlenek magnezu',a:[['Mg',0,0,0],['O',1.3,0,0]],b:1.05,k:.5,R:1.7,d:'Tlenek zasadowy. Z woda reaguje slabo.'},
  Al2O3:{f:'Al2O3',n:'tlenek glinu',a:[['Al',0,0,0],['O',1.2,0,0],['O',-0.6,1,0],['O',-0.6,-1,0]],b:1,k:.45,R:1.6,d:'Tlenek amfoteryczny.'},
  Na2SO4:{f:'Na2SO4',n:'siarczan sodu',a:[['Na',-1.4,0,0],['S',0,0,0],['O',1.1,0,0],['Na',1.8,0.6,0]],b:1,k:.45,R:1.6,d:'Sol kwasu siarkowego(VI).'},
  CaCO3:{f:'CaCO3',n:'weglan wapnia',a:[['Ca',0,0,0],['C',1.3,0,0],['O',2.2,0,0]],b:1.05,k:.5,R:1.7,d:'Kred, wapien. Z kwasem daje CO2.'},
  AgCl:{f:'AgCl',n:'chlorek srebra',a:[['Ag',0,0,0],['Cl',1.4,0,0]],b:1.05,k:.5,R:1.8,d:'Osad bialy, trudno rozpuszczalny.'},
  KCl:{f:'KCl',n:'chlorek potasu',a:[['K',0,0,0],['Cl',1.4,0,0]],b:1.05,k:.5,R:1.8,d:'Sol. W wodzie jony K+ i Cl-.'},
  Na2CO3:{f:'Na2CO3',n:'weglan sodu',a:[['Na',-1.2,0,0],['C',0,0,0],['O',1.1,0,0],['Na',1.6,0.5,0]],b:1,k:.45,R:1.6,d:'Soda. W wodzie odczyn zasadowy.'},
  CuSO4:{f:'CuSO4',n:'siarczan miedzi(II)',a:[['Cu',0,0,0],['S',1.4,0,0],['O',2.3,0,0]],b:1,k:.45,R:1.6,d:'Bezwodny bialy, uwodniony niebieski.'},
  HNO3:{f:'HNO3',n:'kwas azotowy(V)',a:[['N',0,0,0],['O',1.1,0,0],['O',-0.5,1,0],['O',-0.5,-1,0]],b:1,k:.4,R:1.5,d:'Kwas tlenowy, utleniacz.'},
  O2:{m:1,f:'O₂',n:'tlen cząsteczkowy',a:[['O',-.6,0,2],['O',.6,0,2]],bn:[[0,1,2]],d:'Wiązanie podwójne O=O. Tlen jest paramagnetyczny — wyjaśnia to teoria orbitali molekularnych.'}
};
Object.entries(window.CHE?.DATA?.MOLECULES||{}).forEach(([id,m])=>{
  const atoms=m.atoms||[],comp={};
  atoms.forEach(a=>{comp[a.element]=(comp[a.element]||0)+1;});
  if(!atoms.length)return;
  const base=CD[id]||{};
  CD[id]=Object.assign(base,{m:1,f:base.f||m.name,n:base.n||m.label||m.name,
    a:atoms.map(a=>[a.element,a.x,a.y,a.z]),bn:(m.bonds||[]).map(b=>[b.a,b.b,b.order||1]),
    comp,geo:base.geo||m.geometry,d:base.d||m.note||''});
});
const X = {
  NaCl:{comp:{Na:1,Cl:1},geo:'sieć fcc, LK 6:6',mp:1074,bp:1686,rho:2.165},
  Fe2O3:{comp:{Fe:2,O:3},geo:'oktaedr FeO₆',mp:1838,rho:5.24},
  FeO:{comp:{Fe:1,O:1},geo:'sieć typu NaCl, LK 6:6',mp:1650,rho:5.745},
  Cu2O:{comp:{Cu:2,O:1},geo:'Cu liniowo (LK 2), O tetraedrycznie (LK 4)',mp:1508,rho:6.0},
  H2O:{comp:{H:2,O:1},geo:'kątowa, 104,5°',hyb:'sp³',mu:1.85,mp:273.15,bp:373.15,rho:0.997},
  CO2:{comp:{C:1,O:2},geo:'liniowa, 180°',hyb:'sp',mu:0,mp:216.6,bp:194.7,rho:0.00184},
  HCl:{comp:{H:1,Cl:1},geo:'liniowa (dwuatomowa)',mu:1.08,mp:158.9,bp:188.1},
  CH4:{comp:{C:1,H:4},geo:'tetraedr, 109,5°',hyb:'sp³',mu:0,mp:90.7,bp:111.7},
  NH3:{comp:{N:1,H:3},geo:'piramida trygonalna, ~107°',hyb:'sp³',mu:1.47,mp:195.4,bp:239.8},
  N2:{comp:{N:2},geo:'liniowa (N≡N)',hyb:'sp',mu:0,mp:63.15,bp:77.36},
  H2:{comp:{H:2},geo:'liniowa (H–H)',mu:0,mp:13.99,bp:20.28},
  Cl2:{comp:{Cl:2},geo:'liniowa (Cl–Cl)',mu:0,mp:171.6,bp:239.1},
  O2:{comp:{O:2},geo:'liniowa (O=O)',hyb:'sp²',mu:0,mp:54.36,bp:90.2},
  CH3COOH:{comp:{C:2,H:4,O:2},geo:'grupa –COOH płaska (120°)',hyb:'sp³ (CH₃), sp² (C karboksylowy)',mu:1.74,mp:289.8,bp:391.2,rho:1.049},
  C2H5OH:{comp:{C:2,H:6,O:1},geo:'zygzak C–C–O, kątowa przy O',hyb:'sp³',mu:1.69,mp:159.1,bp:351.4,rho:0.789},
  CH3CHO:{comp:{C:2,H:4,O:1},geo:'grupa –CHO płaska (120°)',hyb:'sp³ (CH₃), sp² (C=O)',mu:2.69,mp:150.2,bp:293.3,rho:0.784},
  C3H6O:{comp:{C:3,H:6,O:1},geo:'C–CO–C płaskie, ~116°',hyb:'sp³ (CH₃), sp² (C=O)',mu:2.88,mp:178.5,bp:329.2,rho:0.784},
  CH3NH2:{comp:{C:1,H:5,N:1},geo:'piramidalna przy N',hyb:'sp³',mu:1.31,mp:180.1,bp:266.8,rho:0.656},
  C6H6:{comp:{C:6,H:6},geo:'płaski sześciokąt, 120°',hyb:'sp²',mu:0,mp:278.7,bp:353.2,rho:0.8765}
};
for(const k in X) Object.assign(CD[k], X[k]);
Object.keys(CD).forEach(k=>{CD[k].id=k});
const EC = {N:'#6f8fd0',H:'#c3cdd7',C:'#a8a49a',Na:'#c98ba8',Cl:'#7fd19a',Fe:'#e0674a',O:'#e0524f',Cu:'#e8a33d'};
const ER = {N:.8,H:.5,C:.8,Na:1.05,Cl:1.2,Fe:.9,O:.8,Cu:.95};

function molRows(c){const m=MOL.find(q=>q.f===c.f);if(!m)return '';return `<div class="kv" style="margin-top:6px"><span>wiązanie</span><b>${m.bl}</b><span>kąt</span><b>${m.an}</b></div>`}
function cprops(c){
  const cp = c.comp || {}, els = Object.keys(cp);
  const M = els.reduce((t, k) => t + cp[k] * ((DB[k] || {}).m || 0), 0);
  const en = els.map(k => (DB[k] || {}).en).filter(v => v != null);
  const d = els.length === 1 ? 0 : en.length > 1 ? Math.max(...en) - Math.min(...en) : null;
  const bt = d == null ? '' : !c.m ? (d > 1.7 ? 'jonowe' : 'jonowe z udziałem kowalencyjności') : d > 1.7 ? 'jonowe' : d > .4 ? 'kowalencyjne spolaryzowane' : 'kowalencyjne niespolaryzowane';
  const bar = M ? `<div style="display:flex;height:10px;margin:12px 0 5px;border-radius:5px;overflow:hidden">${els.map(k => `<i title="${k}" style="display:block;width:${cp[k]*DB[k].m/M*100}%;background:${EC[k]}"></i>`).join('')}</div><div class="sub">udział masowy: ${els.map(k => k + ' ' + (cp[k]*DB[k].m/M*100).toFixed(1) + '%').join(' · ')}</div>` : '';
  const rows = [
    ['klasa', spCls(c.id)], ['budowa', c.m ? 'cząsteczkowa' : 'kryształ jonowy (sieć)'],
    ['M', M ? (+M.toFixed(2)) + ' u' : null],
    ['Δχ', d != null ? d.toFixed(2) + (bt ? ' (' + bt + ')' : '') : null],
    ['geometria', c.geo], ['hybrydyzacja', c.hyb], ['μ', c.mu != null ? c.mu + ' D' : null],
    ['T topn.', c.mp ? `${c.mp} K · ${K2C(c.mp)}°C` : null],
    ['T wrz.', c.bp ? `${c.bp} K · ${K2C(c.bp)}°C` : null],
    ['ρ', c.rho ? c.rho + ' g/cm³' : null]
  ].filter(r => r[1]);
  return bar + `<div class="kv">${rows.map(r => `<span>${r[0]}</span><b>${r[1]}</b>`).join('')}</div>`;
}

let cur = null, rx = .5, ry = .6, drag = 0, spc = 0, lab = 1, spn = 1;

function cmpUI(){
  if(curKind!=='sp'||!cur) return;
  const L = related();
  $('clist').innerHTML = `<div class="sub" style="padding:4px 8px">wspólne pierwiastki z ${CD[cur].f}:</div>` + L.map(k => `<button data-k="${k}" class="${k === cur ? 'on' : ''}">${CD[k].f} <span>${CD[k].n.split(',')[0]}</span></button>`).join('');
  const c = cur && CD[cur];
  $('cinfo').innerHTML = c ? `<h2>${c.f}</h2><div class="sub" style="margin-bottom:4px">${c.n}</div>${fgSvg(c)}${cprops(c)}${molRows(c)}<p style="margin:12px 0;line-height:1.6">${c.d}</p><div class="sub" style="margin-bottom:6px">Skład:</div><div style="display:flex;flex-wrap:wrap;gap:4px">${spEls(cur).map(q => `<button data-g="${q}" style="padding:5px 11px;background:var(--panel-2);border:1px solid var(--line);border-radius:6px;color:var(--tx)">${q}${c.comp[q]>1?'<sub>'+c.comp[q]+'</sub>':''}</button>`).join('')}</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:14px"><button id="m1" style="padding:5px 11px;background:${spc?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${spc?'#fff':'var(--tx)'}">rozmiar atomów</button><button id="m2" style="padding:5px 11px;background:${lab?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${lab?'#fff':'var(--tx)'}">etykiety</button><button id="m3" style="padding:5px 11px;background:${spn?'var(--v)':'var(--panel-2)'};border:1px solid var(--line);border-radius:6px;color:${spn?'#fff':'var(--tx)'}">autoobrót</button></div>` : '';
  document.querySelectorAll('#clist [data-k]').forEach(b => b.onclick = () => pick(b.dataset.k, 'sp', 'forms'));
  document.querySelectorAll('#cinfo [data-g]').forEach(b => b.onclick = () => go(b.dataset.g));
  [['m1', () => spc = !spc], ['m2', () => lab = !lab], ['m3', () => spn = !spn]].forEach(([i, f]) => {
    const b = $(i); if(b) b.onclick = () => { f(); cmpUI(); };
  });
}