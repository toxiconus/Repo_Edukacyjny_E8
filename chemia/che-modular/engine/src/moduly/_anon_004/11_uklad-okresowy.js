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

