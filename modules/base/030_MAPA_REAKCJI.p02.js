/* ==================== ATOM VIEW ==================== */
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

/* ==================== ELEC DISTRIBUTION ==================== */
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

/* ==================== LEWIS / POS / STATS / COV ==================== */
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

/* ==================== PERIODIC TABLE ==================== */
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

/* ==================== MINI PERIODIC TABLE ==================== */
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

/* ==================== ELEMENT LIST ==================== */
/* ==================== KATALOG: pierwiastki, cząsteczki, związki ==================== */
const IC={
 el:'<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="2.6" fill="currentColor"/><ellipse cx="10" cy="10" rx="8" ry="3.4" fill="none" stroke="currentColor" stroke-width="1.2"/><ellipse cx="10" cy="10" rx="8" ry="3.4" fill="none" stroke="currentColor" stroke-width="1.2" transform="rotate(60 10 10)"/></svg>',
 mo:'<svg viewBox="0 0 20 20"><line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" stroke-width="2"/><circle cx="5.5" cy="10" r="4" fill="currentColor"/><circle cx="14.5" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
 co:'<svg viewBox="0 0 20 20"><g fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="14" height="14" rx="1.5"/><line x1="10" y1="3" x2="10" y2="17"/><line x1="3" y1="10" x2="17" y2="10"/></g><circle cx="6.5" cy="6.5" r="1.8" fill="currentColor"/><circle cx="13.5" cy="13.5" r="1.8" fill="currentColor"/></svg>'};
/* Budowa (rozłączna, wyprowadzana z danych): el = atom, mo = cząsteczka (c.m), co = kryształ jonowy (sieć).
   Substancja (pierwiastek / związek) i klasa są osobnymi osiami grupowania — H₂O jest jednocześnie cząsteczką i związkiem. */
const KIND={el:'pierwiastek (atom)',mo:'cząsteczka',co:'kryształ jonowy'};
const KINDS={el:'Pierwiastki (atomy)',mo:'Cząsteczki',co:'Kryształy jonowe'};
const SPCLS={H2O:'Tlenki obojętne',CO2:'Tlenki kwasowe',FeO:'Tlenki zasadowe',Fe2O3:'Tlenki zasadowe',Cu2O:'Tlenki zasadowe',
 HCl:'Kwasy beztlenowe',NH3:'Wodorki niemetali',CH4:'Węglowodory',CH3COOH:'Kwasy karboksylowe',C2H5OH:'Alkohole',CH3CHO:'Aldehydy',C3H6O:'Ketony',CH3NH2:'Aminy',C6H6:'Węglowodory aromatyczne',NaCl:'Sole'};
const spM=k=>{const cp=CD[k].comp||{};return Object.keys(cp).reduce((t,e)=>t+cp[e]*((DB[e]||{}).m||0),0)||null};
const spDX=k=>{const en=Object.keys(CD[k].comp||{}).map(e=>(DB[e]||{}).en).filter(v=>v!=null);return en.length>1?Math.max(...en)-Math.min(...en):null};
const valE=q=>{const c=fill(SYM.indexOf(q)+1),N=Math.max(...Object.keys(c).map(k=>+k[0]));return Object.entries(c).filter(([k])=>+k[0]===N).reduce((a,[,x])=>a+x,0)};
const reac=e=>{if(e.t==='gaz szlachetny'||(e.g===18))return 0;const i=e.ie&&e.ie[0],m1=i!=null?Math.min(1,Math.max(0,(1000-i)/624)):null,n1=e.en!=null&&e.en>=2?Math.min(1,(e.en-2)/1.98):null;return m1==null&&n1==null?null:Math.max(m1||0,n1||0)};
const stateAt=(mp,bp)=>mp==null?null:298<mp?'Ciało stałe':(bp!=null&&298>=bp)?'Gaz':'Ciecz';
const NA='Nie dotyczy (cząsteczki i kryształy)';
const spKind=k=>CD[k].m?'mo':'co';
const spCls=k=>{const el=spEls(k);return el.length===1?eclass(SYM.indexOf(el[0])+1):(SPCLS[k]||'Inne związki')};
let _IT=null;
function items(){
 if(!_IT){
  _IT=SYM.map((q,i)=>{const z=i+1,e=DB[q]||stub(q);return {id:q,kind:'el',z,sym:q,e,nm:null,
   mass:e.m,en:e.en,dx:null,ie:e.ie?e.ie[0]:null,ox:e.ox?Math.max(...e.ox):null,val:valE(q),reac:reac(e),mp:e.mp,bp:e.bp,rho:e.rho,mu:null,
   sub:'Pierwiastki (atomy)',cls:eclass(z),fam:famOf(z),blk:e.b?'blok '+e.b:null,grp:e.g?gtxt(e):null,per:e.p?'okres '+e.p:null,
   st:stateAt(e.mp,e.bp)||(e.st&&e.st!=='—'?e.st[0].toUpperCase()+e.st.slice(1):null),org:'Nieorganiczne'}});
  Object.keys(CD).forEach(k=>{const c=CD[k];_IT.push({id:k,kind:spKind(k),z:null,sym:c.f,e:null,nm:c.n.split(',')[0],
   mass:spM(k),en:null,dx:spDX(k),ie:null,ox:null,val:null,reac:null,mp:c.mp,bp:c.bp,rho:c.rho,mu:c.mu,
   sub:spEls(k).length===1?'Pierwiastki — postać cząsteczkowa':'Związki chemiczne',cls:spCls(k),fam:null,blk:null,grp:null,per:null,
   st:stateAt(c.mp,c.bp),org:['CH4','CH3COOH','C2H5OH','CH3CHO','C3H6O','CH3NH2','C6H6'].includes(k)?'Organiczne':'Nieorganiczne'})});
 }
 _IT.forEach(x=>{x.name=x.kind==='el'?elName(x.e,lang):x.nm});
 return _IT}
const SORTS={
 'Podstawowe':{name:['nazwa',(a,b)=>a.name.localeCompare(b.name,'pl')],z:['liczba atomowa Z',x=>x.z],mass:['masa (u)',x=>x.mass]},
 'Budowa i wiązania':{val:['elektrony walencyjne (pierwiastki)',x=>x.val],en:['elektroujemność χ (pierwiastki)',x=>x.en],dx:['Δχ — polarność wiązania (cząsteczki, kryształy)',x=>x.dx],mu:['moment dipolowy (cząsteczki)',x=>x.mu]},
 'Reakcje':{reac:['reaktywność (szacunkowa, pierwiastki)',x=>x.reac],ox:['maks. stopień utlenienia',x=>x.ox],ie:['energia jonizacji',x=>x.ie]},
 'Fizyczne':{mp:['temperatura topnienia',x=>x.mp],bp:['temperatura wrzenia',x=>x.bp],rho:['gęstość',x=>x.rho]}};
const GROUPS={none:['bez grupowania',()=>'Wszystko'],
 kind:['budowa (atom / cząsteczka / kryształ)',x=>KINDS[x.kind]],
 sub:['substancja (pierwiastek / związek)',x=>x.sub],
 cls:['klasa (metal, tlenek, kwas, sól…)',x=>x.cls],
 fam:['rodzina (litowce, fluorowce, lantanowce…)',x=>x.fam||NA],
 org:['organiczne / nieorganiczne',x=>x.org],
 blk:['blok (s, p, d, f)',x=>x.blk||NA],
 grp:['grupa układu',x=>x.grp||NA],
 per:['okres',x=>x.per||NA],
 st:['stan skupienia w 25 °C',x=>x.st||'brak danych']};
const ORD={kind:Object.values(KINDS),sub:['Pierwiastki (atomy)','Pierwiastki — postać cząsteczkowa','Związki chemiczne'],
 cls:['Metale','Półmetale','Niemetale','Gazy szlachetne','Tlenki kwasowe','Tlenki zasadowe','Tlenki obojętne','Kwasy beztlenowe','Wodorki niemetali','Sole','Węglowodory','Alkohole','Kwasy karboksylowe','Aldehydy','Ketony','Aminy','Węglowodory aromatyczne'],
 fam:FAMS,blk:['blok s','blok p','blok d','blok f'],st:['Ciało stałe','Ciecz','Gaz','brak danych'],org:['Nieorganiczne','Organiczne']};
const nrm=t=>String(t).toLowerCase().replace(/[₀-₉]/g,d=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(d));
let cSort='z',cGrp='none',cKind='all',cQ='';
function sortFn(){for(const g in SORTS)if(SORTS[g][cSort]){const f=SORTS[g][cSort][1];if(cSort==='name')return f;return (a,b)=>{const x=f(a),y=f(b);if(x==null&&y==null)return (a.z||999)-(b.z||999);if(x==null)return 1;if(y==null)return -1;return x-y||(a.z||999)-(b.z||999)}}}
const sortVal=(it)=>{for(const g in SORTS)if(SORTS[g][cSort]&&cSort!=='name'){const v=SORTS[g][cSort][1](it);return v==null?'—':(+v.toPrecision(4))}return it.z||''};
function curId(){return curKind==='sp'&&cur?cur:sym}
let curKind='el';
let VIS=[];
const isRel=x=>{const E=curKind==='sp'&&cur?spEls(cur):[sym];return x.kind==='el'?E.includes(x.id):spEls(x.id).some(e=>E.includes(e))};
function renderElementList(){
 const box=$('el-list');if(!box)return;
 const A=items(),cnt=k=>A.filter(x=>x.kind===k).length;
 $('kind').innerHTML=[['all','Wszystko',A.length],['rel','Powiązane',A.filter(isRel).length],['el','Pierwiastki',cnt('el')],['mo','Cząsteczki',cnt('mo')],['co','Kryształy jonowe',cnt('co')]].map(([k,t,n])=>`<button data-k="${k}" class="${k===cKind?'on':''}" title="${k==='all'?'cały katalog':k==='rel'?'pierwiastek i wszystkie jego cząsteczki/związki (lub składniki wybranej substancji)':KINDS[k]}">${k==='all'||k==='rel'?'':IC[k]}${t}<small>${n}</small></button>`).join('');
 $('c-sort').innerHTML=Object.keys(SORTS).map(g=>`<optgroup label="${g}">${Object.entries(SORTS[g]).map(([k,v])=>`<option value="${k}"${k===cSort?' selected':''}>${v[0]}</option>`).join('')}</optgroup>`).join('');
 $('c-grp').innerHTML=Object.entries(GROUPS).map(([k,v])=>`<option value="${k}"${k===cGrp?' selected':''}>${v[0]}</option>`).join('');
 const q=nrm(cQ.trim()),on=curId(),G=new Map(),isEl=curKind!=='sp';
 const hay=x=>nrm([x.id,x.sym,x.name,x.e?[x.e.n_en,x.e.n_de,x.e.n_la].join(' '):'',q.length>2?x.cls+' '+(x.fam||''):''].join(' '));
 const L=A.filter(x=>(cKind==='all'||(cKind==='rel'?isRel(x):x.kind===cKind))&&(!q||hay(x).includes(q))).sort(sortFn());
 L.forEach(x=>{const k=GROUPS[cGrp][1](x);if(!G.has(k))G.set(k,[]);G.get(k).push(x)});
 let keys=[...G.keys()];
 if(cGrp==='grp'||cGrp==='per')keys.sort((a,b)=>parseInt(a.replace(/\D/g,'')||999)-parseInt(b.replace(/\D/g,'')||999));
 else if(ORD[cGrp]){const ix=k=>{const i=ORD[cGrp].indexOf(k);return i<0?999:i};keys.sort((a,b)=>ix(a)-ix(b))}
 VIS=[];keys.forEach(k=>G.get(k).forEach(x=>VIS.push({id:x.id,kind:x.kind})));
 box.innerHTML=L.length?keys.map(k=>(cGrp==='none'?'':`<div class="cg">${k}<small>${G.get(k).length}</small></div>`)+G.get(k).map(x=>`<button data-id="${x.id}" data-kind="${x.kind}" class="${x.id===on&&((x.kind==='el')===isEl)?'on':''}" title="${KIND[x.kind]} · ${x.cls}"><span class="ci">${IC[x.kind]}</span><span class="el-sym">${x.sym}</span><span class="el-name">${x.name}</span><span class="cv">${sortVal(x)}</span></button>`).join('')).join(''):'<div class="sub" style="padding:10px">Nic nie pasuje do filtra.</div>';
 box.querySelectorAll('button').forEach(b=>b.onclick=()=>pick(b.dataset.id,b.dataset.kind));
 box.querySelectorAll('.cv').forEach(n=>n.style.display=(cSort==='z'||cSort==='name')?'none':'');
 const onb=box.querySelector('button.on');if(onb&&onb.scrollIntoView&&!box.contains(document.activeElement))onb.scrollIntoView({block:'nearest'});
}
/* Wybór z katalogu zmienia PODMIOT i zostawia aktualną zakładkę (mol / Izotopy) — wejście w szczegóły (tab='forms') robią karty. */
function pick(id,kind,tab){
 if(kind==='el'){go(id);return}
 curKind='sp';cur=id;fi=0;
 hud();applyMode();
 const t=document.querySelector('.tabnav button.on');
 showTab(tab||(t&&(t.dataset.tab==='mol'||t.dataset.tab==='nucleus')?t.dataset.tab:'forms'));
 fact();renderMiniPT();renderElementList();
 document.title=`${CD[cur].f} · ${CD[cur].n.split(',')[0]} · Laboratorium atomu`;
 if($('drawer').classList.contains('open'))mist();
 window.scrollTo({top:0})}
function stepSel(d){
 if(!VIS.length)return;
 const on=curId(),el=curKind!=='sp',i=VIS.findIndex(x=>x.id===on&&((x.kind==='el')===el));
 const j=i<0?(d>0?0:VIS.length-1):(i+d+VIS.length)%VIS.length;
 pick(VIS[j].id,VIS[j].kind)}
$('kind').addEventListener('click',ev=>{const b=ev.target.closest('[data-k]');if(b){cKind=b.dataset.k;renderElementList()}});
$('c-sort').onchange=ev=>{cSort=ev.target.value;renderElementList();renderMiniPT()};
$('c-grp').onchange=ev=>{cGrp=ev.target.value;renderElementList()};
$('search-input').oninput=ev=>{cQ=ev.target.value;renderElementList()};

/* ==================== FACTS ==================== */
let fi = 0;
function fact(){
  const box=$('fact-content'),sp=curKind==='sp';
  const f=sp?spEls(cur).flatMap(q=>((DB[q]||{}).f||[]).map(t=>q+': '+t)):(E().f||[]);
  box.textContent=f.length?f[fi%f.length]:(sp?'Brak ciekawostek o pierwiastkach tej substancji w bazie.':'Brak ciekawostek dla tego pierwiastka w bazie.');
  $('next-fact-btn').style.display=f.length>1?'':'none';
}
$('next-fact-btn').onclick = () => { fi++; fact(); };

/* ==================== NAV / TABS / LANG ==================== */
$('prev-btn').onclick = () => stepSel(-1);
$('next-btn').onclick = () => stepSel(1);

document.querySelectorAll('.tabnav button').forEach(b => { b.onclick = () => showTab(b.dataset.tab); });
$('lgb').onclick = () => { lin = !lin; $('lgb').textContent = lin ? 'lin' : 'log'; $('ie').innerHTML = ie(); };

document.querySelectorAll('#lang button').forEach(b => {
  b.onclick = () => {
    lang = b.dataset.lang;
    document.querySelectorAll('#lang button').forEach(x => x.classList.toggle('on', x === b));
    head(); renderElementList(); renderMiniPT(); fact();
    if($('drawer').classList.contains('open')) mist();
  };
});


/* ==================== TRYB: pierwiastek albo cząsteczka/związek ==================== */
const spEls=k=>Object.keys(CD[k].comp||{});
const ELC={H:5,C:7.5,N:7,O:7,Cl:9,Na:10,Fe:9,Cu:9};
function spSvg(k){
 const c=CD[k];let bd=[],P;
 if(c.m){P=c.a.map(q=>[q[0],q[1],q[2]]);bd=(c.bn||[]).map(q=>[q[0],q[1],q[2]||1])}
 else{const cy=Math.cos(.6),sy=Math.sin(.6),cx=Math.cos(.5),sx=Math.sin(.5);
  P=c.a.map(([e,X,Y,Z])=>{const z1=-X*sy+Z*cy;return [e,X*cy+Z*sy,-(Y*cx-z1*sx),Y*sx+z1*cx]});
  c.a.forEach((p,i)=>c.a.forEach((q,j)=>{if(j>i&&Math.hypot(p[1]-q[1],p[2]-q[2],p[3]-q[3])<=c.b)bd.push([i,j,1])}))}
 const xs=P.map(p=>p[1]),ys=P.map(p=>p[2]),w=Math.max(.8,Math.max(...xs)-Math.min(...xs)),h=Math.max(.8,Math.max(...ys)-Math.min(...ys)),sc=Math.min(84/w,44/h),mx=(Math.max(...xs)+Math.min(...xs))/2,my=(Math.max(...ys)+Math.min(...ys))/2,f=P.length>10?.55:1;
 const X=i=>60+(P[i][1]-mx)*sc,Y=i=>40+(P[i][2]-my)*sc;let o='<svg viewBox="0 0 120 80">';
 bd.forEach(([i,j,n])=>{for(let t=0;t<Math.min(3,n);t++){const d=(t-(Math.min(3,n)-1)/2)*3.2;o+=`<line x1="${X(i)}" y1="${Y(i)+d}" x2="${X(j)}" y2="${Y(j)+d}" stroke="#7a8794" stroke-width="2"/>`}});
 P.map((p,i)=>[p,i]).sort((a,b)=>(a[0][3]||0)-(b[0][3]||0)).forEach(([p,i])=>{const r=(ELC[p[0]]||8)*f;o+=`<circle cx="${X(i)}" cy="${Y(i)}" r="${r}" fill="${EC[p[0]]||'#9aa5b1'}" stroke="#6f7882" stroke-width="1"/>`+(f===1?`<text x="${X(i)}" y="${Y(i)+3.5}" text-anchor="middle" style="font:700 9px Inter,sans-serif;fill:#17212b">${p[0]}</text>`:'')});
 return o+'</svg>'}
function related(){
 const E=curKind==='sp'?spEls(cur):[sym];
 return Object.keys(CD).filter(k=>spEls(k).some(e=>E.includes(e)))}
function renderMols(){
 const L=related(),E=curKind==='sp'?spEls(cur):[sym],hd=curKind==='sp'?`Powiązane z <b>${CD[cur].f}</b> — wspólne pierwiastki: ${E.join(', ')}`:`Cząsteczki i związki zawierające <b>${elName(E0(),lang)} (${sym})</b>`;
 const sec=(t,ks)=>ks.length?`<div class="cg">${t}<small>${ks.length}</small></div><div class="scs">`+ks.map(k=>{const c=CD[k],M=spM(k),sh=spEls(k).filter(e=>E.includes(e));
  return `<button class="sc${curKind==='sp'&&k===cur?' on':''}" data-sp="${k}"><span class="st">${spSvg(k)}</span><b>${c.f}</b><span class="sn">${c.n.split(',')[0]}</span><span class="sm">${M?+M.toFixed(2)+' u':''}${c.mu!=null?' · μ '+c.mu+' D':''}</span><span class="se">${spEls(k).map(e=>`<i class="${sh.includes(e)?'sh':''}">${e}${c.comp[e]>1?'<sub>'+c.comp[e]+'</sub>':''}</i>`).join('')}</span></button>`}).join('')+'</div>':'';
 $('mols').innerHTML=`<p class="mhd">${hd}</p>`+(L.length?sec('Cząsteczki pierwiastków',L.filter(k=>CD[k].m&&spEls(k).length===1))+sec('Związki cząsteczkowe',L.filter(k=>CD[k].m&&spEls(k).length>1))+sec('Kryształy jonowe',L.filter(k=>!CD[k].m)):'<div class="sub">W bazie nie ma jeszcze cząsteczek ani związków z tym pierwiastkiem.</div>');
 $('mols').querySelectorAll('[data-sp]').forEach(b=>b.onclick=()=>pick(b.dataset.sp,'sp','forms'))}
const E0=()=>DB[sym]||stub(sym);
function spHud(){
 const c=CD[cur],kd=spKind(cur),M=spM(cur);
 $('hud').innerHTML=`<span class="hic">${IC[kd]}</span><em>${c.f}</em><span>${c.n}</span><span>${KIND[kd]} · ${spCls(cur)}</span>${M?`<span>${+M.toFixed(2)} u</span>`:''}<div class="isos"><small>skład — kliknij, by zobaczyć atom</small>${spEls(cur).map(q=>`<button data-el="${q}">${q}${c.comp[q]>1?'<sub>'+c.comp[q]+'</sub>':''}</button>`).join('')}</div>`;
 $('hud').querySelectorAll('[data-el]').forEach(b=>b.onclick=()=>go(b.dataset.el))}
function spIso(){
 const c=CD[cur];let P=0,N=0;
 const cards=spEls(cur).map(q=>{const e=DB[q]||stub(q),n=c.comp[q],iso=isotopeData(e),top=iso.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A=top?top.A:Math.round(e.m||e.z*2);P+=n*e.z;N+=n*(A-e.z);
  return `<div class="card"><h4>${elName(e,lang)} (${q}) <small>× ${n} w ${c.f}</small></h4>`+(iso.length?iso.map(i=>`<button class="irow" data-q="${q}" data-a="${i.A}"><sup>${i.A}</sup>${q}<span class="ib"><i style="width:${Math.max(i.ab||0,i.ab?2:0)}%"></i></span><em>${i.ab?i.ab+' %':'promieniotwórczy · T½ '+i.hl}</em></button>`).join(''):'<div class="sub">Brak danych o izotopach w bazie.</div>')+'</div>'}).join('');
 $('spiso').innerHTML=`<p class="mhd">Izotopy pierwiastków w <b>${c.f}</b>. Cząsteczka z najpospolitszych izotopów: <b>${P} p⁺ · ${N} n⁰ · ${P} e⁻</b>. Kliknij izotop, by zobaczyć jego jądro.</p><div class="nuc-grid">${cards}</div>`;
 $('spiso').querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{go(b.dataset.q);isoA=+b.dataset.a;hud();zt=zNuc;showTab('atom')})}
function nucMode(){const sp=curKind==='sp';$('spiso').style.display=sp?'':'none';document.querySelector('#spiso+.nuc-grid').style.display=sp?'none':'';if(sp)spIso()}
function showTab(t){
 document.querySelectorAll('.tabnav button').forEach(x=>x.classList.toggle('on',x.dataset.tab===t));
 document.querySelectorAll('.tabpane').forEach(p=>p.classList.toggle('show',p.dataset.tab===t));
 if(t==='forms'){cmpUI();vw()}if(t==='mol')renderMols();if(t==='nucleus')nucMode()}
function applyMode(){
 const sp=curKind==='sp';document.body.classList.toggle('sp-mode',sp);
 document.querySelector('.tabnav [data-tab=nucleus]').textContent=sp?'Izotopy':'Jądro i fazy';
 const on=document.querySelector('.tabnav button.on');
 if(!on||on.offsetParent===null||(!sp&&on.dataset.tab==='forms'))showTab(sp?'forms':'atom');
 else showTab(on.dataset.tab);
 nucMode();renderMols()}
const _hud2=hud;hud=function(){curKind==='sp'?spHud():_hud2()};
/* ==================== START ==================== */

function datasheet(){const{e,c}=state(),isoRows=isotopeData(e),x=e.x||{},n=NAMES[sym]||[],V=(v,u)=>v==null?null:`${+(+v).toPrecision(5)} <u>${u}</u>`,
 T=k=>k==null?null:`${+(+k).toFixed(1)} <u>K</u> · ${(k-273.15).toFixed(0)} <u>°C</u> · ${(k*9/5-459.67).toFixed(0)} <u>°F</u>`,
 r=(a,b)=>`<div class="dr${b==null||b===''?' na':''}"><span>${a}</span><b>${b==null||b===''?'—':b}</b></div>`,g=(t,x)=>`<div class="dg"><h5>${t}</h5>${x.join('')}</div>`,sh={};
 ORDER.forEach(k=>{if(c[k])sh[k[0]]=(sh[k[0]]||0)+c[k]});
 const redox=Object.entries(REDOX).filter(([k])=>k.split('/')[1]===sym).map(([k,v])=>k+' '+v+' V').join('<br>'),
 iso=isoRows.map(i=>`<sup>${i.A}</sup>${sym} ${i.ab!=null?i.ab+' %':(i.abundance!=null?(i.abundance*100).toFixed(2)+' %':(i.hl||i.halfLife||(i.halfLife_s!=null?i.halfLife_s+' s':'')))}`).join('<br>'),ie=e.ie||[];
 return g('Identyfikacja',[r('Nazwa (PL)',n[0]||e.n),r('English',n[1]),r('Deutsch',n[2]),r('Latina',n[3]),r('Symbol · Z',sym+' · '+e.z),r('Masa atomowa',V(e.m,'u')),r('Układ',`${gtxt(e)} · okres ${e.p} · blok ${e.b}`),r('Kategoria',e.t)])
 +g('Struktura atomowa',[r(chg?'Konfiguracja jonu':'Konfiguracja',ORDER.filter(k=>c[k]).map(k=>k+sup(c[k])).join(' ')),r('Elektrony / powłoka',Object.values(sh).join(' · ')),r('Elektronoujemność χ',V(e.en,'Pauling')),r('Promień atomowy',V(e.ar,'pm')),r('Promień kowalencyjny',V(e.cr,'pm')),r('Promień vdW',V(e.vdw,'pm')),r('Promienie jonowe',e.ion&&Object.entries(e.ion).map(([k,v])=>k+' '+v+' pm').join('<br>')),r('Powinowactwo e⁻',V(e.ea,'kJ/mol')),r('I₁ · I₂ · I₃',ie.length?ie.slice(0,3).join(' · ')+' <u>kJ/mol</u>':null)])
 +g('Właściwości fizyczne',[r('Stan (25 °C)',e.st),r('Temp. topnienia',T(e.mp)),r('Temp. wrzenia',T(e.bp)),r('Zakres cieczy',e.mp&&e.bp?V(e.bp-e.mp,'K'):null),r('Gęstość',V(e.rho,'g/cm³')),r('Sieć krystaliczna',e.cs),r('Polaryzowalność',V(e.pol,'Å³')),r('Gęstość cieczy (T topn.)',V(x.rhol,'g/cm³')),r('Ciepło topnienia',V(x.hf,'kJ/mol')),r('Ciepło parowania',V(x.hv,'kJ/mol')),r('Molowe ciepło właściwe',V(x.cp,'J/(mol·K)')),r('Przewodność cieplna',V(x.k,'W/(m·K)')),r('Rozszerzalność cieplna',V(x.al,'µm/(m·K)')),r('Opór elektryczny (20 °C)',V(x.res,'nΩ·m')),r('Prędkość dźwięku',V(x.v,'m/s'))])+g('Mechanika i magnetyzm',[r('Moduł Younga',V(x.E,'GPa')),r('Moduł ścinania',V(x.G,'GPa')),r('Moduł objętościowy',V(x.K,'GPa')),r('Liczba Poissona',x.nu),r('Skala Mohsa',x.mohs),r('Twardość Vickersa',V(x.hv2,'MPa')),r('Twardość Brinella',x.br&&x.br+' <u>MPa</u>'),r('Punkt Curie',x.curie&&T(x.curie)),r('Uporządkowanie magnetyczne',x.mag)])+g('Rejestr',[r('Numer CAS',x.cas),r('Odkrycie',x.hist),r('Parametr sieci a',V(x.a,'pm'))])
 +g('Chemia',[r('Stopnie utlenienia',e.ox&&e.ox.map(q=>q>0?'+'+q:q).join(' ')),r('Potencjały E° (SHE)',redox),r('Związki w bazie',Object.keys(CD).filter(k=>spEls(k).includes(sym)).map(k=>CD[k].f).join(', '))])
 +g('Jądro i izotopy',[r('Izotopy',iso),r('Liczba nuklidów w bazie',isoRows.length||null)])}

function ldt(q,sz){const c=fill(SYM.indexOf(q)+1),N=Math.max(...Object.keys(c).map(k=>+k[0])),v=Math.min(8,Object.entries(c).filter(([k])=>+k[0]===N).reduce((a,[,x])=>a+x,0));
 return `<span class="ldt"${sz?` style="--s:${sz}px"`:''}><b>${q}</b>${Array.from({length:v},(_,i)=>`<i style="transform:rotate(${i*360/v}deg) translateY(calc(var(--s)*-.38))"></i>`).join('')}</span>`}
const MC={H:'#b9c4cf',C:'#8f99a5',N:'#6aa7e0',O:'#e0524f',Cl:'#7fd19a',Na:'#b49cf7'},MR={H:9,C:15,N:14,O:14,Cl:17,Na:18};
const MOL=[
{f:'H₂',n:'wodór',g:'liniowa',a:[['H',-.6,0],['H',.6,0]],b:[[0,1,1]],bl:'H–H 74,1 pm',an:'—',mu:0},
{f:'O₂',n:'tlen',g:'liniowa',a:[['O',-.7,0],['O',.7,0]],b:[[0,1,2]],bl:'O=O 120,7 pm',an:'—',mu:0},
{f:'N₂',n:'azot',g:'liniowa',a:[['N',-.65,0],['N',.65,0]],b:[[0,1,3]],bl:'N≡N 109,8 pm',an:'—',mu:0},
{f:'H₂O',n:'woda',g:'kątowa (AX₂E₂)',a:[['O',0,-.35],['H',-.95,.4],['H',.95,.4]],b:[[0,1,1],[0,2,1]],bl:'O–H 95,8 pm',an:'H–O–H 104,5°',mu:1.85},
{f:'CO₂',n:'ditlenek węgla',g:'liniowa (AX₂)',a:[['C',0,0],['O',-1.35,0],['O',1.35,0]],b:[[0,1,2],[0,2,2]],bl:'C=O 116,3 pm',an:'O=C=O 180°',mu:0},
{f:'NH₃',n:'amoniak',g:'piramida trygonalna (AX₃E)',a:[['N',0,-.4],['H',-1,.55],['H',1,.55],['H',0,.95]],b:[[0,1,1],[0,2,1],[0,3,1]],bl:'N–H 101,2 pm',an:'H–N–H 107,8°',mu:1.47},
{f:'CH₄',n:'metan',g:'tetraedr (AX₄), rzut',a:[['C',0,0],['H',-.95,-.7],['H',.95,-.7],['H',-.6,.9],['H',.6,.9]],b:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],bl:'C–H 108,7 pm',an:'H–C–H 109,5°',mu:0},
{f:'HCl',n:'chlorowodór',g:'liniowa',a:[['H',-.85,0],['Cl',.85,0]],b:[[0,1,1]],bl:'H–Cl 127,5 pm',an:'—',mu:1.08},
{f:'NaCl',n:'chlorek sodu (para jonowa, gaz)',g:'liniowa, wiązanie jonowe',a:[['Na',-1,0],['Cl',1,0]],b:[[0,1,0]],bl:'Na–Cl 236 pm',an:'—',mu:9.0}];
DB.Fe.x={hf:13.81,hv:340,cp:25.10,k:80.4,al:11.8,res:96.1,v:5120,rhol:6.98,E:211,G:82,K:170,nu:.29,mohs:4,hv2:608,br:'200–1180',curie:1043,mag:'ferromagnetyk',cas:'7439-89-6',hist:'przed 5000 p.n.e.',a:286.65,
 allo:[{n:'α',s:'bcc',t0:0,t1:912},{n:'γ',s:'fcc',t0:912,t1:1394},{n:'δ',s:'bcc',t0:1394,t1:1538}],
 forms:[['monokryształ czystego Fe',10],['żelazo z węglem',140],['drobnoziarniste',340],['zimnowalcowane',690],['whiskery',11000]]};
function matl(){const{e}=state(),x=e.x||{},C=k=>k-273.15;if(!e.mp||!e.bp)return'<div class="wide sub">Brak danych topnienia i wrzenia dla tego pierwiastka.</div>';
 const mp=C(e.mp),bp=C(e.bp),mx=Math.ceil(bp*1.08/500)*500,W=760,X=t=>16+t/mx*(W-32),CL={'α':'#5f93c9','γ':'#7fb069','δ':'#e8a33d'},sg=[],cu=x.curie?C(x.curie):null;
 if(x.allo)x.allo.forEach(a=>{if(a.n==='α'&&cu&&cu<a.t1){sg.push([a.t0,cu,CL[a.n],a.n+' '+a.s+' · ferro']);sg.push([cu,a.t1,'#86b3dd',a.n+' '+a.s+' · para'])}else sg.push([a.t0,a.t1,CL[a.n]||'#7fb069',a.n+' '+a.s])});else sg.push([0,mp,'#5f93c9','ciało stałe']);
 sg.push([mp,bp,'#e0674a','ciecz']);sg.push([bp,mx,'#c78ca8','gaz']);
 let a='<svg viewBox="0 0 760 178">';
 sg.forEach(([t0,t1,c,l],i)=>{a+=`<rect x="${X(t0)}" y="40" width="${X(t1)-X(t0)}" height="38" fill="${c}"/>`;if(i)a+=`<text x="${X(t0)}" y="32" text-anchor="middle" style="fill:var(--tx)">${t0.toFixed(0)}</text>`;
  const y=104+(i%3)*15;a+=`<path d="M${(X(t0)+X(t1))/2} 78V${y-10}" stroke="#667284"/><text x="${(X(t0)+X(t1))/2}" y="${y}" text-anchor="middle" style="fill:${c}">${l}</text>`});
 for(let t=0;t<=mx;t+=500)a+=`<text x="${X(t)}" y="172" text-anchor="middle">${t}</text>`;
 a+=`<text x="${W-16}" y="20" text-anchor="end">°C</text></svg>`;
 const bar=(rows,max,u)=>`<svg viewBox="0 0 360 ${rows.length*26+4}">`+rows.map(([l,v],i)=>`<text x="0" y="${i*26+16}" style="fill:var(--tx)">${l}</text><rect x="130" y="${i*26+4}" width="${Math.max(2,v/max*170)}" height="16" fill="var(--v)" opacity=".85"/><text x="${134+v/max*170}" y="${i*26+16}">${v} ${u}</text>`).join('')+'</svg>';
 const mech=['E','K','G'].filter(k=>x[k]).map(k=>[{E:'Younga E',K:'objętościowy K',G:'ścinania G'}[k],x[k]]);
 let h=`<div class="wide"><h5>Diagram faz i alotropy · °C</h5>${a}<div class="nt">${x.allo?'Przejścia alotropowe: <b>'+x.allo.slice(1).map(q=>q.t0+' °C ('+q.n+')').join(', ')+'</b>. ':''}${cu?'Punkt Curie <b>'+cu.toFixed(0)+' °C</b> — zmiana domen magnetycznych bez zmiany struktury krystalicznej. ':''}Zakres cieczy: <b>${(bp-mp).toFixed(0)} K</b>.</div></div>`;
 if(mech.length)h+=`<div><h5>Sprężystość · GPa</h5>${bar(mech,300,'GPa')}<div class="nt">${x.nu?'Liczba Poissona <b>'+x.nu+'</b>. ':''}${x.mohs?'Mohs <b>'+x.mohs+'</b>/10. ':''}${x.hv2?'Vickers <b>'+x.hv2+' MPa</b>.':''}</div></div>`;
 if(x.hf&&x.hv)h+=`<div><h5>Bilans energii przemian · kJ/mol</h5>${bar([['topnienie',x.hf],['parowanie',x.hv]],x.hv,'kJ/mol')}<div class="nt">Parowanie kosztuje <b>${(x.hv/x.hf).toFixed(1)}×</b> więcej energii niż topnienie: przy parowaniu zrywane są wszystkie wiązania metaliczne.</div></div>`;
 if(x.forms){const f=x.forms,L=Math.log10;h+=`<div><h5>Wytrzymałość na rozciąganie · MPa (log)</h5><svg viewBox="0 0 360 ${f.length*26+4}">`+f.map(([l,v],i)=>`<text x="0" y="${i*26+16}" style="fill:var(--tx);font-size:11px">${l}</text><rect x="150" y="${i*26+4}" width="${Math.max(2,(L(v)-0)/4.2*150)}" height="16" fill="#7fb069" opacity=".85"/><text x="${154+L(v)/4.2*150}" y="${i*26+16}">${v}</text>`).join('')+`</svg><div class="nt">Ta sama substancja, różne mikrostruktury: rozrzut ponad <b>3 rzędy wielkości</b>. Źródło: Wikipedia (Iron).</div></div>`}
 return h}

let isoA=null,lastSym=null;
function hud(){const{e}=state(),n=NAMES[sym]||[];if(lastSym!==sym){isoA=null;lastSym=sym}
 const isotopes=isotopeData(e),top=isotopes.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A=isoA||(top?top.A:Math.round(e.m||e.z*2)),N=A-e.z;
 $('hud').setAttribute('data-fam',famOf(e.z));$('hud').innerHTML=ldt(sym,64)+`<b>${e.z}</b><div class="hx-n"><strong>${n.length?n[0]:e.n}</strong>${n.length>1?`<small>${n.slice(1).join(' · ')}</small>`:''}</div><div class="hx-c"><div class="hx-k"><small>rodzina</small>${famOf(e.z)}</div>${e.m?`<div class="hx-k"><small>masa atomowa</small>${e.m} u</div>`:''}${e.st?`<div class="hx-k"><small>stan w 25 °C</small>${e.st}</div>`:''}<div class="hx-k"><small>nuklid główny</small><span><sup>${A}</sup>${sym}: ${e.z} p⁺ · ${N} n⁰ · N/Z ${(N/e.z).toFixed(2)}</span></div></div>`
 + (isotopes.length?`<div class="isos"><small>izotop</small>${isotopes.map(i=>`<button data-i="${i.A}" class="${i.A===A?'on':''}" title="${i.ab?i.ab+' %':'promieniotwórczy, T½ '+i.hl}${i.abundanceProvenance?' · CIAAW 2024':' · lokalny rekord bez weryfikacji'}"><sup>${i.A}</sup>${sym}${i.ab?'':'*'}</button>`).join('')}<small>* promieniotwórczy</small></div>`:'');
 $('hud').querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{isoA=+b.dataset.i;hud();if(still)bohr(0)})}
function isoBar(){const{e}=state(),isotopes=isotopeData(e),tp=isotopes.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A=isoA||(tp?tp.A:0);$('isobar').innerHTML=isotopes.length?'<span>izotop</span>'+isotopes.map(i=>`<button data-i="${i.A}" class="${i.A===A?'on':''}" title="${i.ab?i.ab+' %':'promieniotwórczy, T½ '+i.hl}${i.abundanceProvenance?' · CIAAW 2024':' · lokalny rekord bez weryfikacji'}"><sup>${i.A}</sup>${sym}${i.ab?'':'*'}</button>`).join(''):'';$('isobar').querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{isoA=+b.dataset.i;hud();zt=zNuc;});}
const _hud=hud;hud=function(){_hud();isoBar();};
$('fs').onclick=()=>{const st=document.querySelector('.atom-stage');(document.fullscreenElement?document.exitFullscreen():st.requestFullscreen&&st.requestFullscreen())};
$('bohr').addEventListener('click',ev=>{
 const cv=$('bohr'),r=cv.getBoundingClientRect(),W=760,mx=(ev.clientX-r.left)*W/r.width,my=(ev.clientY-r.top)*W/r.height,
  G=GEO,fo=$('focus'),{e,c}=state(),d=Math.hypot(mx-W/2,my-W/2)/zm;
 if(!G.rings)return;
 fo.classList.add('pick');
 const inLens=G.inset&&Math.hypot(mx-G.ix,my-G.iy)<=G.ir;
 if(inLens||d<=Math.min(G.Rn+6,G.R0-8)){G.sel=null;
  fo.innerHTML=`<b>Jądro</b>: ${e.z} p⁺ + ${G.N} n⁰ · A = ${G.A} · N/Z = ${(G.N/e.z).toFixed(2)}`;return}
 let best=null,bd=1e9;G.rings.forEach(q=>{const t=Math.abs(d-q.R);if(t<bd){bd=t;best=q}});
 if(best&&bd<=G.step/2+4){const b=best.n,sub=ORDER.filter(k=>c[k]&&+k[0]===b),cnt=sub.reduce((a,k)=>a+c[k],0),last=G.rings[G.rings.length-1].n;
  G.sel=b;
  const rs=new Set(sub.map(k=>role(c,k)));
  fo.innerHTML=`<b>Powłoka ${SH[b-1]}</b> (n=${b}): ${cnt}/${2*b*b} e⁻ · ${sub.map(k=>`<span style="color:${COL[role(c,k)]};font-weight:600">${k}${sup(c[k])}</span>`).join(' ')} · ${rs.has('v')?'walencyjna':rs.has('r')?'rdzeń + aktywne d/f':'rdzeniowa'}`;
 }else{G.sel=null;fo.innerHTML='Kliknij obręcz powłoki, jądro albo lupę jądra.'}
});
function chgHtml(){const{e,c0,c}=state();const cfgStr=q=>ORDER.filter(k=>q[k]).map(k=>k+sup(q[k])).join(' ');if(!chg)return'<div class="wide sub">Wybierz ładunek jonu (przyciski ładunku przy modelu atomu). Tu zobaczysz, które elektrony znikają, ile to kosztuje energii i jak zmienia się spin całkowity.</div>';
 const ks=ORDER.filter(k=>c0[k]||c[k]),unp=q=>{let u=0;ORDER.forEach(k=>{if(q[k]){const nb=CAP[k[1]]/2;u+=q[k]<=nb?q[k]:2*nb-q[k]}});return u},ms=u=>Math.sqrt(u*(u+2)).toFixed(2),u0=unp(c0),u1=unp(c);
 let rows=ks.map(k=>{const a=c0[k]||0,b=c[k]||0,keep=Math.min(a,b);return `<div class="cr"><span>${k}</span><div class="eb">${'<i></i>'.repeat(keep)}${'<i class="l"></i>'.repeat(Math.max(0,a-b))}${'<i class="g"></i>'.repeat(Math.max(0,b-a))}</div><span>${a} → ${b}</span></div>`}).join('');
 let cur=c0,steps='';const ie=e.ie||[];if(chg>0)for(let i=0;i<chg;i++){const k=srt(cur)[0];cur=strip(cur,1);steps+=`<div class="dr"><span>I${i+1}: odrywa z ${k}</span><b>${ie[i]!=null?ie[i]+' <u>kJ/mol</u>':'—'}</b></div>`}
 const tot=chg>0?ie.slice(0,chg).reduce((a,b)=>a+b,0):null,ion=e.ion&&e.ion[Math.abs(chg)+(chg>0?'+':'-')];
 return `<div class="wide"><h5>${sym} → ${sym}${chg>0?sup(chg)+'⁺':sup(-chg)+'⁻'}</h5><div class="nt">atom: <b>${cfgStr(c0)}</b><br>jon: <b>${cfgStr(c)}</b></div></div>
 <div><h5>Elektrony w podpowłokach</h5>${rows}<div class="nt">niebieskie = zostają, <b style="color:#e0674a">puste czerwone = tracone</b>, zielone = dodane. ${chg>0?'Najpierw odrywane są elektrony o największym n, tu '+srt(c0)[0]+(c0[(+srt(c0)[0][0]-1)+'d']&&srt(c0)[0][1]==='s'?', mimo że '+(+srt(c0)[0][0]-1)+'d zapełnia się później niż '+srt(c0)[0]+'.':'.'):''}</div></div>
 <div><h5>Koszt energetyczny i spin</h5>${steps}${tot!=null?`<div class="dr"><span>suma</span><b>${tot.toFixed(1)} <u>kJ/mol</u> · ${(tot/96.485).toFixed(1)} <u>eV</u></b></div>`:''}${chg<0&&e.ea!=null?`<div class="dr"><span>powinowactwo e⁻</span><b>${e.ea} <u>kJ/mol</u></b></div>`:''}
 <div class="dr"><span>niesparowane e⁻</span><b>${u0} → ${u1}</b></div><div class="dr"><span>μ spinowy</span><b>${ms(u0)} → ${ms(u1)} <u>μB</u></b></div>${ion&&e.ar?`<div class="dr"><span>promień</span><b>${e.ar} → ${ion} <u>pm</u> (×${(ion/e.ar).toFixed(2)})</b></div>`:''}
 <div class="nt">${u1===5?'<b>d⁵</b>: podpowłoka półzapełniona, maksymalna liczba niesparowanych spinów, stąd trwałość tego jonu. ':''}Wzór μ = √(n(n+2)) dotyczy samego spinu.</div></div>`}
function extra(){$('chgp').innerHTML=chgHtml();$('mt').innerHTML=matl();hud();$('ds').innerHTML=datasheet();
  mist(); fact(); caps(); elec();
  $('sl').innerHTML = slater();
  $('nt').innerHTML = notes();
  cmpUI();
  if(still) vw();
}
/* ==================== KOLEJNOŚĆ ZAPEŁNIANIA + PODPOWIEDZI (v037) ==================== */
const LSYM = {s:0, p:1, d:2, f:3};
let hintSel = 'rule';
const nl = k => +k[0] + LSYM[k[1]];
const SL = k => `<a class="sl" data-sk="${k}">${k}</a>`;
const orbPl = n => n === 1 ? 'orbital' : n < 5 ? 'orbitale' : 'orbitali';
const cfgS = c => ORDER.filter(k => c[k]).map(k => k + sup(c[k])).join(' ');
const cfgByShell = c => Object.keys(c).sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c[k])).join(' ');
const unpairedN = c => { let u = 0; ORDER.forEach(k => { if(c[k]){ const nb = CAP[k[1]] / 2; u += c[k] <= nb ? c[k] : 2 * nb - c[k]; } }); return u; };
const byRole = c => { const b = {c:0, v:0, r:0}; ORDER.forEach(k => { if(c[k]) b[role(c, k)] += c[k]; }); return b; };
const ionTag = () => chg ? (chg > 0 ? (chg > 1 ? sup(chg) : '') + '⁺' : (chg < -1 ? sup(-chg) : '') + '⁻') : '';
function coreNote(z, c0){
  const ng = [86, 54, 36, 18, 10, 2].find(q => q < z); if(!ng) return '';
  const nc = fill(ng), rest = Object.keys(c0).filter(k => (c0[k] || 0) - (nc[k] || 0) > 0)
    .sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c0[k] - (nc[k] || 0))).join(' ');
  return `[${SYM[ng - 1]}] ${rest}`;
}
function hctx(){
  const x = state(), keys = Object.keys(x.c);
  x.N = keys.length ? Math.max(...keys.map(k => +k[0])) : 0;
  x.b = byRole(x.c); x.u = unpairedN(x.c);
  x.last = [...ORDER].reverse().find(k => x.c[k]) || '';
  return x;
}

const HINTS = [
 {id:'rule', t:'Reguła n + l', f:x =>
  `<b>Skąd wiadomo, co zapełnić jako następne?</b> Każdej podpowłoce przypisz liczbę <b>n + l</b> (l: s = 0, p = 1, d = 2, f = 3). Elektrony zajmują podpowłoki od najmniejszej sumy do największej, a gdy sumy są równe, pierwsza jest ta z mniejszym n. Stąd ${SL('4s')} (4) wchodzi przed ${SL('3d')} (5), a ${SL('6s')} (6) przed ${SL('4f')} (7).`
  + `<br><small>Sposób na zapamiętanie: ułóż podpowłoki w rzędach według n (1s / 2s 2p / 3s 3p 3d / 4s 4p 4d 4f …) i czytaj po skosach. Jeden skos to jedna wartość n + l.</small>`
  + (x.last ? `<br>Dla ${sym}${ionTag()}: ostatnia zapełniana podpowłoka to ${SL(x.last)} (${x.c[x.last]}/${CAP[x.last[1]]}, n + l = ${nl(x.last)}), czyli blok ${x.last[1]}.` : '')},
 {id:'bond', t:'Które e⁻ się wiążą?', f:x => {
  const b = x.b;
  return `<b>Do wiązań mogą posłużyć:</b> <span style="color:${COL.v}">elektrony walencyjne</span> (cała zewnętrzna powłoka, n = ${x.N}) oraz <span style="color:${COL.r}">niedokończone podpowłoki d (n−1) i f (n−2)</span>. <span style="color:${COL.c}">Rdzeń</span> leży głęboko i zwykle pozostaje nietknięty. Na modelu każdy elektron ma kolor z jednej z tych trzech grup.`
  + `<br>Dla ${sym}${ionTag()}: walencyjnych ${b.v}, d/f ${b.r}, rdzeń ${b.c}. <b>Do dyspozycji ${b.v + b.r} z ${b.c + b.v + b.r} e⁻.</b>`
  + `<br><small><b>Konwencja tej aplikacji</b> (nie prawo fizyki): pełne d¹⁰ liczymy jako aktywne w grupie 11 (Cu, Ag, Au tworzą np. Cu²⁺, Au³⁺), a jako rdzeń w grupie 12 (Zn, Cd, Hg).</small>`; }},
 {id:'shells', t:'Jak czytać powłoki', f:x =>
  `Powłoki K, L, M, N… to n = 1, 2, 3, 4… i mieszczą najwyżej <b>2n²</b> elektronów (2, 8, 18, 32…). Podpis „M · 8/18” znaczy: w tej powłoce jest 8 elektronów z 18 możliwych. Pomarańczowa obręcz to powłoka walencyjna. Kliknij dowolną obręcz, a zobaczysz jej podpowłoki.`
  + (x.N ? `<br>${sym}${ionTag()} ma ${x.N} ${x.N === 1 ? 'powłokę' : x.N < 5 ? 'powłoki' : 'powłok'} (dla atomu to numer okresu).` : '')},
 {id:'hund', t:'Pauli i Hund', f:x =>
  `<b>Zakaz Pauliego:</b> w jednym orbitalu są najwyżej 2 elektrony i mają przeciwne spiny. <b>Reguła Hunda:</b> w podpowłoce z kilkoma orbitalami (p, d, f) elektrony najpierw zajmują każdy orbital pojedynczo, z równoległymi spinami, i dopiero potem łączą się w pary. Dlatego azot ma 3 niesparowane elektrony na 2p, a tlen tylko 2.`
  + `<br>Dla ${sym}${ionTag()}: niesparowanych <b>${x.u}</b> → ${x.u ? 'paramagnetyk (wciągany do pola magnetycznego)' : 'diamagnetyk (lekko wypychany z pola)'}.`},
 {id:'exc', t:'⚠ Wyjątek od reguły', when:x => chg === 0 && !!EXC[x.e.z], f:x => {
  const z = x.e.z, raw = cfgByShell(fill(z, true)), real = cfgByShell(x.c0);
  const why = [24, 29, 41, 42, 44, 45, 46, 47, 78, 79].includes(z)
    ? 'Poziomy ns i (n−1)d leżą bardzo blisko siebie, a podpowłoka d zapełniona lub zapełniona do połowy daje niższą energię. Opłaca się więc przenieść elektron z s do d.'
    : z === 103 ? 'Przy tak dużym Z efekty relatywistyczne obniżają energię 7p, więc elektron trafia tam, a nie do 6d.'
    : 'Poziomy 4f/5f i 5d/6d są prawie równe energetycznie, więc elektron ląduje w d, gdy atom ma wtedy niższą energię (np. półzapełnione f⁷ w Gd).';
  return `<b>${x.e.s} nie trzyma się prostej reguły n + l.</b><br>Według reguły: ${raw}<br>W rzeczywistości: <b>${real}</b><br>${why}`; }},
 {id:'ion', t:'Jony', f:x =>
  `<b>Kation:</b> elektrony odchodzą z powłoki o największym n, a nie z podpowłoki zapełnianej jako ostatnia. Dlatego Fe → Fe²⁺ traci 4s², choć 3d zapełnia się później niż 4s. <b>Anion:</b> nowe elektrony zajmują najbliższą wolną podpowłokę według n + l (Cl → Cl⁻ dopełnia 3p).`
  + (chg ? `<br>Teraz: ${sym}${ionTag()} = <b>${cfgByShell(x.c) || 'brak elektronów'}</b>` : '<br><small>Wybierz ładunek jonu przy modelu atomu, a zobaczysz to na żywo.</small>')},
 {id:'write', t:'Jak zapisać konfigurację', f:x =>
  `Zapełniamy według n + l, ale w zapisie zwykle porządkujemy według n (3d przed 4s).`
  + `<br>kolejność zapełniania: <span class="mono">${cfgS(x.c) || '—'}</span>`
  + `<br>kolejność powłok: <span class="mono"><b>${cfgByShell(x.c) || '—'}</b></span>`
  + (chg === 0 && coreNote(x.e.z, x.c0) ? `<br>zapis skrócony: <span class="mono"><b>${coreNote(x.e.z, x.c0)}</b></span>` : '')},
 {id:'pos', t:'Konfiguracja → tablica', f:x =>
  `<b>Okres</b> to największe n w konfiguracji. <b>Blok</b> to typ ostatnio zapełnianej podpowłoki (s, p, d lub f). <b>Grupa:</b> w bloku s liczba e⁻ na ns, w bloku p to 10 + e⁻ na ns i np, w bloku d to e⁻ na ns plus (n−1)d.`
  + `<br>${sym}: okres ${x.e.p || x.N}, blok ${x.e.b}, ${gtxt(x.e)}.${x.e.z === 2 ? ' <small>(hel to wyjątek: blok s, ale grupa 18)</small>' : ''}`},
 {id:'lens', t:'Lupa jądra', f:x =>
  `Jądro jest około 10⁴–10⁵ razy mniejsze od atomu, więc w widoku powłok pokazuje je lupa w lewym dolnym rogu. Kliknij ją, by zobaczyć dane jądra. Czerwone kule to protony (Z = ${x.e.z}), szare to neutrony (N = A − Z). Przyciski izotopów nad sceną zmieniają N, a pomarańczowa obręcz oznacza neutron ponad najczęstszy izotop. Przycisk „do jądra” lub dwuklik przybliża samo jądro.`}
];

function subHint(k, x){
  const n = +k[0], l = LSYM[k[1]], sum = n + l, cap = CAP[k[1]], have = x.c[k] || 0, i = ORDER.indexOf(k);
  const peers = ORDER.filter(q => q !== k && nl(q) === sum);
  let t = `<b>${k}</b>: n + l = ${n} + ${l} = <b>${sum}</b> (dla ${k[1]} l = ${l}). Mieści ${cap} e⁻ (${cap / 2} ${orbPl(cap / 2)}).`;
  t += `<br>W ${sym}${ionTag()}: ${have ? `<b>${have}/${cap}</b> — ${have === cap ? 'zapełniona' : 'częściowo zapełniona'}, rola: ${{c:'rdzeń', v:'walencyjna', r:'d/f aktywna'}[role(x.c, k)]}` : 'pusta'}.`;
  t += `<br>Kolejność: ${i ? SL(ORDER[i - 1]) : '—'} → <b>${k}</b> → ${i < ORDER.length - 1 ? SL(ORDER[i + 1]) : '—'}`;
  t += peers.length
    ? `<br>Tę samą sumę mają: ${peers.map(q => SL(q) + ' (' + (+q[0] < n ? 'wcześniej' : 'później') + ')').join(', ')}. Przy remisie pierwsze jest mniejsze n.`
    : '<br>Żadna inna podpowłoka nie ma takiej sumy.';
  if(l === 2) t += `<br><small>${SL((n + 1) + 's')} zapełnia się przed ${k}, dlatego blok d zaczyna się dopiero w okresie ${n + 1}.</small>`;
  if(l === 3) t += `<br><small>${SL((n + 2) + 's')} zapełnia się przed ${k}, dlatego blok f zaczyna się dopiero w okresie ${n + 2}.</small>`;
  return t;
}

function madel(){
  const { e, c0 } = state(), c = viewC(), x = hctx();
  x.last = buildN == null ? x.last : ([...ORDER].reverse().find(k => c[k]) || '');
  const raw = fill(e.z, true);
  const diff = chg === 0 ? new Set(ORDER.filter(k => (raw[k] || 0) !== (c0[k] || 0))) : new Set();
  $('madrow').innerHTML = ORDER.map((k, i) => {
    const have = c[k] || 0, cap = CAP[k[1]], st = have ? (have === cap ? 'f' : 'p') : 'e', r = have ? role(state().c, k) : '';
    return (i ? '<span class="sba">→</span>' : '')
      + `<button type="button" class="sbc ${st}${k === x.last ? ' last' : ''}${diff.has(k) ? ' x' : ''}${hintSel === 'sub:' + k ? ' sel' : ''}" data-sk="${k}" style="--fr:${have / cap * 100}%${r ? ';--cc:' + COL[r] : ''}" title="${k}: n + l = ${+k[0]} + ${LSYM[k[1]]} = ${nl(k)}${diff.has(k) ? ' · wyjątek od reguły' : ''}"><b>${k}</b><em>${have}/${cap}</em></button>`;
  }).join('');
}

function hints(){
  GEO.hlSel = hintSel.startsWith('sub:') ? hintSel.slice(4) : null; GEO.hl = GEO.hlSel;
  if(typeof still !== 'undefined' && still && sm === 'b') bohr(0);
  madel();
  const x = hctx(), list = HINTS.filter(h => !h.when || h.when(x));
  if(!hintSel.startsWith('sub:') && !list.some(h => h.id === hintSel)) hintSel = 'rule';
  $('hchips').innerHTML = list.map(h => `<button type="button" class="hc${hintSel === h.id ? ' on' : ''}" data-h="${h.id}">${h.t}</button>`).join('');
  $('hbody').innerHTML = hintSel.startsWith('sub:') ? subHint(hintSel.slice(4), x) : list.find(h => h.id === hintSel).f(x);
}
function buildStop(){ if(buildT) clearInterval(buildT); buildT = null; buildN = null; GEO.bn = null; const b = $('bld'); if(b) b.textContent = '▶ zbuduj atom'; }
function buildStep(){
  const { c } = state(), tot = Object.values(c).reduce((a, b) => a + b, 0);
  if(buildN == null) buildN = 0;
  buildN++;
  const cur = truncCfg(c, buildN), key = [...ORDER].reverse().find(k => cur[k]);
  GEO.hl = key; GEO.bn = buildN + '/' + tot;
  madel(); if(still) bohr(0);
  if(buildN >= tot){ clearInterval(buildT); buildT = null; $('bld').textContent = '↺ jeszcze raz';
    setTimeout(() => { if(buildN >= tot && !buildT){ buildN = null; GEO.bn = null; hints(); } }, 1600); }
}
$('bld').addEventListener('click', () => {
  if(sm !== 'b') smode('b');
  if(buildT){ buildStop(); hints(); return; }
  const { c } = state(), tot = Object.values(c).reduce((a, b) => a + b, 0);
  if(!tot) return;
  buildN = 0; $('bld').textContent = '■ stop';
  buildT = setInterval(buildStep, Math.max(110, Math.min(450, 7000 / tot)));
});
$('madrow').addEventListener('mouseover', ev => { const b = ev.target.closest('[data-sk]'); if(b && !buildT){ GEO.hl = b.dataset.sk; if(still) bohr(0); } });
$('madrow').addEventListener('mouseleave', () => { if(buildT) return; GEO.hl = GEO.hlSel || null; if(still) bohr(0); });
$('hintbar').addEventListener('click', ev => {
  const b = ev.target.closest('[data-sk],[data-h]'); if(!b) return;
  hintSel = b.dataset.sk ? (hintSel === 'sub:' + b.dataset.sk && b.closest('#madrow') ? 'rule' : 'sub:' + b.dataset.sk) : b.dataset.h;
  hints();
});

function all(){
  GEO.sel=null; buildStop();
  head();
  $('lev').innerHTML = levels();
  cloud();
  $('ie').innerHTML = ie();
  $('rad').innerHTML = rad();
  $('radar').innerHTML = radar();
  $('ph').innerHTML = ph();
  $('iso').innerHTML = iso();
  $('ox').innerHTML = ox();
  $('redox').innerHTML = redox();
  if(still) bohr(0);
  extra();
  renderElementList();
  renderMiniPT();
  fact();
  hints();
}




/* ============================================================
   CHE ↔ Atom Lab bridge (v052 — pełna integracja)
   - hydratacja 118 pierwiastków z ELEMENTS_118 + ATOMIC_PROPS + ISOTOPES
   - IE z FIRST_IONIZATION_ENERGY / ATOMIC_PROPS
   - konfiguracje atomów i jonów z CHE.ATOM.build (gdy dostępne)
   - jądra: energia wiązania z CHE.NUCLEUS (opcjonalnie w karcie)
   - bez silnika: lab v050 bez zmian
   ============================================================ */
(function(){
  const C = window.CHE;
  if(!C || !C.DATA){
    window.__CHE_LAB_BRIDGE__ = { active:false, reason:'CHE not loaded' };
    return;
  }
  const D = C.DATA;
  const EL = D.ELEMENTS_118 || [];
  const AP = D.ATOMIC_PROPS || {};
  const ISO = D.ISOTOPES || {};
  const FIE = D.FIRST_IONIZATION_ENERGY || {};
  const META = D.ATOM_META || {};
  const bySym = {};
  EL.forEach(e => { bySym[e.s] = e; });

  const TMAP = {
    metal:'metal', nonmetal:'niemetal', metalloid:'półmetal',
    halogen:'fluorowiec', noble:'gaz szlachetny',
    lanthanide:'lantanowiec', actinide:'aktynowiec'
  };
  const STMAP = { gas:'gaz', solid:'ciało stałe', liquid:'ciecz', plasma:'plazma' };

  function pctAb(v){
    if(v == null || v === '') return 0;
    const n = Number(v);
    if(!Number.isFinite(n)) return 0;
    // silnik: często 0–1; lab: 0–100
    return n > 0 && n <= 1.0000001 ? +(n * 100).toPrecision(6) : n;
  }

  function mapIso(rawIso){
    const out = [];
    if(!rawIso) return out;
    if(Array.isArray(rawIso)){
      rawIso.forEach(x=>{
        if(!x) return;
        const A = x.A != null ? x.A : (x.massNumber != null ? x.massNumber : x.a);
        if(A == null) return;
        const ab = pctAb(x.ab != null ? x.ab : x.abundance);
        const hl = x.hl || x.halfLife || x.half_life || undefined;
        const item = { A: +A, ab };
        if(hl) item.hl = hl;
        if(x.decayMode) item.dm = x.decayMode;
        if(x.stable === false && !hl) item.hl = item.hl || '?';
        out.push(item);
      });
    } else if(typeof rawIso === 'object'){
      Object.keys(rawIso).forEach(A=>{
        const x = rawIso[A];
        if(x && typeof x === 'object')
          out.push({ A:+A, ab:pctAb(x.ab != null ? x.ab : x.abundance), hl:x.hl||x.halfLife||undefined });
        else if(typeof x === 'number')
          out.push({ A:+A, ab:pctAb(x) });
      });
    }
    out.sort((a,b)=>a.A-b.A);
    return out;
  }

  function engProps(sym){
    const e = bySym[sym];
    const p = AP[sym] || {};
    const meta = META[sym] || {};
    if(!e && !Object.keys(p).length && !Object.keys(meta).length) return null;

    const ion = {};
    if(p.ionicRadius){
      Object.keys(p.ionicRadius).forEach(k=>{
        const v = p.ionicRadius[k];
        if(v != null) ion[k] = v;
      });
    }

    let ie = Array.isArray(p.ionizationEnergies) ? p.ionizationEnergies.slice() : null;
    if((!ie || !ie.length) && FIE[sym] != null){
      const v = FIE[sym];
      ie = Array.isArray(v) ? v.slice() : (typeof v === 'object' && v.value != null ? [v.value] : [v]);
    }

    const isoList = mapIso(ISO[sym]);

    const stRaw = p.stateSTP || null;
    const st = stRaw ? (STMAP[String(stRaw).toLowerCase()] || stRaw) : undefined;

    return {
      z: e ? e.z : (meta.Z || null),
      s: sym,
      n: e ? e.n : (meta.name || sym),
      m: e && e.mass != null ? e.mass : (meta.mass != null ? meta.mass : null),
      b: e ? e.block : (meta.block || null),
      g: e ? e.g : (meta.group != null ? meta.group : null),
      p: e ? e.p : (meta.period != null ? meta.period : null),
      t: e ? (TMAP[e.t] || e.t) : null,
      en: (e && e.en != null) ? e.en : (p.electronegativityPauling != null ? p.electronegativityPauling : null),
      ar: p.atomicRadius != null ? p.atomicRadius : null,
      cr: p.covalentRadius != null ? p.covalentRadius : null,
      vdw: p.vdwRadius != null ? p.vdwRadius : null,
      ion: Object.keys(ion).length ? ion : undefined,
      ea: p.electronAffinity != null ? p.electronAffinity : null,
      ie: ie && ie.length ? ie.map(Number) : undefined,
      ox: Array.isArray(p.oxidationStates) ? p.oxidationStates.slice() : undefined,
      pol: p.polarizability != null ? p.polarizability : null,
      mp: p.meltingPoint != null ? p.meltingPoint : null,
      bp: p.boilingPoint != null ? p.boilingPoint : null,
      rho: p.density != null ? p.density : null,
      st: st,
      cs: p.crystalStructure || undefined,
      iso: isoList.length ? isoList : undefined,
      _src: 'CHE'
    };
  }

  function mergePreferLocal(local, eng){
    if(!eng) return local;
    if(!local) return Object.assign({}, eng);
    const out = Object.assign({}, eng, local);
    // liczby: lokalne wygrywają gdy istnieją; iso/ie: łącz inteligentnie
    ['m','en','ar','cr','vdw','ea','pol','mp','bp','rho','st','cs','b','g','p','t','n','z'].forEach(k=>{
      if(local[k] == null || local[k] === '') out[k] = eng[k];
      else out[k] = local[k];
    });
    if((!local.ie || !local.ie.length) && eng.ie) out.ie = eng.ie;
    if((!local.ox || !local.ox.length) && eng.ox) out.ox = eng.ox;
    if((!local.ion || !Object.keys(local.ion).length) && eng.ion) out.ion = eng.ion;
    // izotopy: jeśli lokalne puste lub krótsze — silnik
    if((!local.iso || !local.iso.length) && eng.iso) out.iso = eng.iso;
    else if(local.iso && eng.iso && eng.iso.length > local.iso.length) out.iso = eng.iso;
    out.f = local.f; // zawsze lokalne fakty
    out._src = local.f ? 'CHE+local' : 'CHE';
    return out;
  }

  let filled = 0, enrichedDB = 0;

  // ENG (stub layer for all 118)
  if(typeof ENG !== 'undefined'){
    EL.forEach(e=>{
      const props = engProps(e.s);
      if(!props) return;
      ENG[e.s] = mergePreferLocal(ENG[e.s], props);
      filled++;
    });
  }

  // DB (rich local cards)
  if(typeof DB !== 'undefined'){
    // enrich existing
    Object.keys(DB).forEach(sym=>{
      const props = engProps(sym);
      if(!props) return;
      DB[sym] = mergePreferLocal(DB[sym], props);
      enrichedDB++;
    });
    // promote engine-only elements with solid props into DB for full cards when useful
    EL.forEach(e=>{
      if(DB[e.s]) return;
      const props = engProps(e.s);
      if(!props) return;
      // only promote if has meaningful numeric props beyond mass
      const rich = props.ie || props.ar || props.iso || props.mp != null;
      if(rich){
        DB[e.s] = Object.assign({ f: [] }, props);
        enrichedDB++;
      }
    });
  }

  // ---- konfiguracje: fill + state z CHE.ATOM ----
  const _fill = typeof fill === 'function' ? fill : null;
  const cfgFromAtom = (symbol, charge)=>{
    try{
      if(!C.ATOM || !C.ATOM.build) return null;
      const a = C.ATOM.build(symbol, charge || 0);
      if(!a || !a.subshells) return null;
      const cfg = {};
      a.subshells.forEach(ss=>{ if(ss.count) cfg[ss.name] = ss.count; });
      return cfg;
    }catch(_){ return null; }
  };

  if(_fill && C.ATOM && C.ATOM.build){
    window.fill = function(Z, raw){
      if(raw) return _fill(Z, true);
      try{
        const s = (typeof SYM !== 'undefined' && SYM[Z-1]) ? SYM[Z-1] : null;
        if(s){
          const cfg = cfgFromAtom(s, 0);
          if(cfg && Object.keys(cfg).length) return cfg;
        }
      }catch(_){}
      return _fill(Z, raw);
    };
  }

  // state() z jonami z silnika
  if(typeof state === 'function'){
    const _state = state;
    window.state = function(){
      const base = _state();
      try{
        if(!C.ATOM || !C.ATOM.build) return base;
        const s = (base.e && (base.e.s || sym)) || sym;
        const ch = typeof chg !== 'undefined' ? chg : 0;
        const c0 = cfgFromAtom(s, 0) || base.c0;
        let c = c0;
        if(ch !== 0){
          const ci = cfgFromAtom(s, ch);
          if(ci) c = ci;
          else {
            // fallback lokalny strip/add
            if(ch > 0 && typeof strip === 'function') c = strip(c0, ch);
            if(ch < 0 && typeof add === 'function') c = add(c0, -ch);
          }
        }
        return { e: base.e, c0, c };
      }catch(_){ return base; }
    };
  }

  // jądra: cache energii wiązania do wykorzystania w UI
  const nucCache = {};
  function nucleusInfo(symbol, A){
    const key = symbol + ':' + (A || '');
    if(nucCache[key]) return nucCache[key];
    try{
      if(C.NUCLEUS && C.NUCLEUS.build){
        const n = C.NUCLEUS.build(symbol, A);
        if(n){
          nucCache[key] = {
            A: n.A, N: n.N, Z: n.Z,
            B: n.bindingEnergyMeV,
            BpA: n.bindingEnergyPerNucleon,
            r: n.radiusFm,
            stab: n.stability
          };
          return nucCache[key];
        }
      }
    }catch(_){}
    return null;
  }
  window.__CHE_NUCLEUS__ = nucleusInfo;

  // opcjonalnie: dopisz energię wiązania do faktów, gdy brak lokalnych
  if(typeof DB !== 'undefined' && C.NUCLEUS){
    Object.keys(DB).forEach(sym=>{
      const d = DB[sym];
      if(d.f && d.f.length) return;
      const n = nucleusInfo(sym);
      if(n && n.BpA != null){
        d.f = ['Energia wiązania na nukleon (model): ok. ' + Number(n.BpA).toFixed(2) + ' MeV (CHE.NUCLEUS).'];
      }
    });
  }

  // projekcja edukacyjna E8 gdy dostępna
  let e8 = false;
  try{ e8 = !!(C.LEVELS && C.LEVELS.E8 && C.EDUCATION && C.EDUCATION.E8); }catch(_){}

  window.__CHE_LAB_BRIDGE__ = {
    active: true,
    version: (C.ENGINE && C.ENGINE.version) || 'CHE',
    dataVersion: (C.ENGINE && C.ENGINE.dataVersion) || null,
    elements: EL.length,
    atomicProps: Object.keys(AP).length,
    isotopes: Object.keys(ISO).length,
    fie: Object.keys(FIE).length,
    engFilled: filled,
    dbEnriched: enrichedDB,
    atomApi: !!(C.ATOM && C.ATOM.build),
    nucleusApi: !!(C.NUCLEUS && C.NUCLEUS.build),
    e8: e8,
    cfgSample: (function(){
      try{
        const a = C.ATOM && C.ATOM.build && C.ATOM.build('Fe', 0);
        return a && a.configFull;
      }catch(_){ return null; }
    })()
  };
  try{ console.info('[CHE↔Lab bridge v052]', window.__CHE_LAB_BRIDGE__); }catch(_){}
})();


