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

