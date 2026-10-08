try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const clone = o => { try { return JSON.parse(JSON.stringify(o)); } catch(_) { return o; } };
const orbitals = [['1s',2],['2s',2],['2p',6],['3s',2],['3p',6],['4s',2],['3d',10],['4p',6],['5s',2],['4d',10],['5p',6]];
function atom(symbol, charge){
  charge = Number(charge)||0;
  const m = C.DATA?.ATOM_META?.[symbol] || {};
  return {
    symbol,
    Z: m.Z || 0,
    mass: m.mass ?? null,
    massNumber: m.massNumber ?? null,
    neutrons: m.neutrons ?? null,
    electrons: Math.max(0, (m.Z||0) - charge),
    shells: m.shells || [],
    subshells: electronConfiguration(symbol, charge),
    valence: m.valence ?? ({H:1,C:4,N:5,O:6,F:7,P:5,S:6,Cl:7,Br:7,I:7,Na:1,K:1,Li:1,Mg:2,Ca:2,Zn:2,Al:3,Si:4}[symbol] ?? null),
    charge
  };
}
function electronConfiguration(symbol, charge){
  charge = Number(charge)||0;
  const meta = C.DATA?.ATOM_META?.[symbol];
  if(charge === 0 && meta?.subshells) return clone(meta.subshells);
  const neutral = meta?.subshells ? clone(meta.subshells) : (()=>{
    let left = Number(meta?.Z || 0), out = {};
    orbitals.forEach(([name,cap])=>{ if(left<=0) return; const n = Math.min(cap,left); if(n) out[name]=n; left -= n; });
    return out;
  })();
  if(!charge) return neutral;
  if(charge < 0){
    let add = -charge;
    for(const [name,cap] of orbitals){
      if(add<=0) break;
      const have = Number(neutral[name]||0), room = cap - have;
      if(room > 0){ const n = Math.min(room, add); neutral[name] = have + n; add -= n; }
    }
    return neutral;
  }
  let remove = charge;
  const order = Object.keys(neutral).sort((a,b)=>{
    const pa = /^(\d+)([spdf])$/.exec(a), pb = /^(\d+)([spdf])$/.exec(b);
    const l = {s:0,p:1,d:2,f:3};
    return (Number(pb?.[1]||0) - Number(pa?.[1]||0)) || (l[pb?.[2]||'s'] - l[pa?.[2]||'s']);
  });
  for(const name of order){
    if(remove<=0) break;
    const have = Number(neutral[name]||0);
    const n = Math.min(have, remove);
    if(n){ neutral[name] = have - n; remove -= n; }
  }
  Object.keys(neutral).forEach(k=>{ if(!neutral[k]) delete neutral[k]; });
  return neutral;
}
function orbitalSummary(symbol, charge){
  const cfg = electronConfiguration(symbol, charge);
  return Object.entries(cfg).map(([o,n])=>`${o}${n}`).join(' ');
}
function lonePairsForAtom(m, a){
  const v = Number(a.valence);
  if(!Number.isFinite(v)) return null;
  const bonds = m.bondOrderSum?.[a.id] || 0;
  const explicit = Number.isFinite(Number(a.formalCharge)) ? Number(a.formalCharge) : (Number.isFinite(Number(a.charge)) ? Number(a.charge) : 0);
  let q = explicit;
  if(q===0 && Number(m?.charge||0)!==0 && a.element!=='H'){
    const carrier=(m.atoms||[]).filter(x=>x.element!=='H').sort((u,z)=>({N:5,O:5,S:4,P:4,C:3,Cl:2,Br:2,I:2,F:2}[z.element]||1)-({N:5,O:5,S:4,P:4,C:3,Cl:2,Br:2,I:2,F:2}[u.element]||1))[0];
    if(carrier && String(carrier.id)===String(a.id)) q=Number(m.charge);
  }
  return Math.max(0, Math.round((v - q - bonds)/2));
}
function angleBetween(a,b,c){
  const u = [a.x-b.x, a.y-b.y, a.z-b.z], v = [c.x-b.x, c.y-b.y, c.z-b.z];
  const nu = Math.hypot(...u), nv = Math.hypot(...v);
  if(!nu || !nv) return NaN;
  const cos = Math.max(-1, Math.min(1, (u[0]*v[0]+u[1]*v[1]+u[2]*v[2])/(nu*nv)));
  return Math.acos(cos) * 180/Math.PI;
}
function derivedAngles(m){
  const out = [];
  const by = new Map();
  m.bonds.forEach(b=>{
    const a=b.atomA, z=b.atomB;
    if(!by.has(a)) by.set(a, []);
    if(!by.has(z)) by.set(z, []);
    by.get(a).push(z);
    by.get(z).push(a);
  });
  const atomsById=new Map((m.atoms||[]).map(a=>[String(a.id),a]));
  by.forEach((neighbors, center)=>{
    for(let i=0;i<neighbors.length;i++)
      for(let j=i+1;j<neighbors.length;j++){
        const A=atomsById.get(String(neighbors[i])), B=atomsById.get(String(center)), Z=atomsById.get(String(neighbors[j]));
        if(!A||!B||!Z) continue;
        const deg = angleBetween(A, B, Z);
        if(Number.isFinite(deg)) out.push({atoms:[neighbors[i],center,neighbors[j]], deg: Math.round(deg*10)/10});
      }
  });
  return out;
}
function bondLabel(order){ return ({1:'pojedyncze',2:'podwójne',3:'potrójne'})[Number(order)] || 'inne'; }
function formulaFromAtoms(atoms){
  const c = {};
  atoms.forEach(a=>{ c[a.element] = (c[a.element]||0)+1; });
  const keys = Object.keys(c).sort((a,b)=>{
    if(a==='C') return -1; if(b==='C') return 1;
    if(a==='H') return -1; if(b==='H') return 1;
    return a.localeCompare(b);
  });
  return keys.map(e=>e + (c[e]===1?'':c[e])).join('');
}
function centralAtom(m){
  if(!m?.atoms?.length) return null;
  return m.atoms.reduce((best, a)=>{
    const degree = (m.bonds||[]).filter(b=> b.a===a.id || b.b===a.id).length;
    const score = degree*10 - (a.element==='H'?5:0);
    if(!best || score > best.score) return {atom:a, score};
    return best;
  }, null)?.atom || null;
}
function electronDomains(m, centerId){
  const a = m?.atoms?.find(x=>x.id === centerId);
  if(!a) return null;
  const bonds = (m.bonds||[]).filter(b=> b.a===centerId || b.b===centerId).length;
  const bondOrders = m.bondOrderSum?.[centerId] || 0;
  const lp = Number.isFinite(a.lonePairs) ? a.lonePairs : 0;
  return { center:centerId, bonds, bondOrders, lonePairs:lp, domains: bonds+lp };
}
function inferGeometry(m){
  const c = centralAtom(m);
  if(!c) return 'nieokreślona';
  const d = electronDomains(m, c.id);
  if(!d) return 'nieokreślona';
  if(d.domains === 2) return 'liniowa';
  if(d.domains === 3) return d.lonePairs === 1 ? 'kątowa' : 'trygonalna płaska';
  if(d.domains === 4){
    if(d.bonds === 2 && d.lonePairs === 2) return 'kątowa';
    if(d.bonds === 3 && d.lonePairs === 1) return 'piramidalna';
    return 'tetraedryczna';
  }
  if(d.domains === 5) return 'trygonalna bipiramidalna';
  if(d.domains === 6) return 'oktaedryczna';
  return 'modelowo nieustalona';
}
function get(id){
  const m = C.DATA?.MOLECULES?.[id];
  if(!m) return null;
  const r = clone(m);
  r.atoms = r.atoms.map(a => ({...a, ...atom(a.element, 0)}));
  r.bondOrderSum = {};
  r.atoms.forEach(a=> r.bondOrderSum[a.id] = 0);
  r.bonds = r.bonds.map(b => ({ a:b.a, b:b.b, order: Number(b.order)||1, label: bondLabel(b.order) }));
  r.bonds.forEach(b => {
    r.bondOrderSum[b.a] = (r.bondOrderSum[b.a]||0) + b.order;
    r.bondOrderSum[b.b] = (r.bondOrderSum[b.b]||0) + b.order;
  });
  r.atoms.forEach(a => a.lonePairs = lonePairsForAtom(r, a));
  const derived = derivedAngles(r);
  const supplied = Array.isArray(r.angles) ? r.angles : [];
  const keyOf = a => Array.isArray(a?.atoms) ? a.atoms.join('-') : '';
  const merged = []; const seen = new Set();
  [...supplied, ...derived].forEach(a=>{
    const k = keyOf(a);
    if(k && !seen.has(k)){ seen.add(k); merged.push({atoms:[...a.atoms], deg: Number(a.deg)}); }
  });
  r.angles = merged;
  r.formula = formulaFromAtoms(r.atoms);
  r.totalElectrons = r.atoms.reduce((s,a)=> s + a.electrons, 0) - Number(r.charge||0);
  r.geometry = r.geometry || inferGeometry(r);
  r.bondSummary = r.bonds.map(b => `${r.atoms[b.a].element}–${r.atoms[b.b].element}: ${bondLabel(b.order)}`);
  return r;
}
function canonical(id){ return get(id); }
function list(){ return Object.keys(C.DATA?.MOLECULES||{}).map(get).filter(Boolean); }
function valenceElectrons(id){
  const m = get(id);
  if(!m) return NaN;
  const atomVE = m.atoms.reduce((s,a)=> s + Number(a.valence||0), 0);
  const charge = Number(m.charge||0);
  return atomVE - charge;
}
function geometry(id){ return get(id)?.geometry || 'nieokreślona'; }
function formula(id){ return get(id)?.formula || ''; }
function geometrySummary(id){
  const m = get(id);
  if(!m) return null;
  const centers = {};
  (m.atoms||[]).forEach(a=>{ const d = electronDomains(m, a.id); if(d && d.domains > 1) centers[a.id] = d; });
  return { id, formula: m.formula, geometry: m.geometry, angles: m.angles, centers };
}
function lewisData(id){
  const m = get(id);
  if(!m) return null;
  return {
    formula: m.formula,
    totalElectrons: m.totalElectrons,
    atoms: m.atoms.map(a=>({id:a.id,element:a.element,valence:a.valence,lonePairs:a.lonePairs,bondOrderSum:m.bondOrderSum[a.id]})),
    bonds: m.bonds.map(b=>({a:b.a,b:b.b,order:b.order,label:bondLabel(b.order)}))
  };
}
function atomCard(id, atomId){
  const m = get(id);
  if(!m) return null;
  const a = m.atoms.find(x=>x.id === atomId);
  if(!a) return null;
  return {...a, orbitalSummary: orbitalSummary(a.element, a.charge), electronConfiguration: electronConfiguration(a.element, a.charge), domain: electronDomains(m, atomId)};
}
function validate(id){
  const m = canonical(id);
  if(!m) return { id, ok:false, errors:['brak modelu'] };
  const errors = [];
  if(!m.atoms.length) errors.push('brak atomów');
  m.bonds.forEach(b=>{
    if(!m.atoms[b.a] || !m.atoms[b.b]) errors.push('wiązanie wskazuje nieistniejący atom');
    if(![1,2,3].includes(Number(b.order))) errors.push('nieznany rząd wiązania');
  });
  m.atoms.forEach(a=>{ if(!C.DATA?.ATOM_META?.[a.element]) errors.push('brak ATOM_META: '+a.element); });
  return { id, ok:errors.length===0, errors, formula:m.formula, geometry:m.geometry, angles:m.angles.length, bonds:m.bonds.length };
}
function auditAll(){
  const ids = Object.keys(C.DATA?.MOLECULES || {});
  const rows = ids.map(validate);
  return { count:rows.length, ok:rows.filter(x=>x.ok).length, bad:rows.filter(x=>!x.ok), rows };
}
C.MOLECULE = {
  version:'2.17', current:'H2O',
  atom, get, list, canonical, validate, auditAll,
  formula, valenceElectrons, bondLabel, geometry,
  electronConfiguration, orbitalSummary,
  angleBetween, derivedAngles, formulaFromAtoms,
  electronDomains, geometrySummary, lewisData, atomCard,
  centralAtom, inferGeometry,
  select(id, opts){
    if(!get(id)) return false;
    this.current = id;
    if(document && typeof document.dispatchEvent === 'function'){
      document.dispatchEvent(new CustomEvent('che:molecule-select', { detail:{ id, source: opts?.source || 'api' } }));
    }
    return true;
  },
  getCurrent(){ return this.current || 'H2O'; }
};
})(window);

} catch (err) {
  try { console.warn('[CHE module 11]', err && err.message ? err.message : err); } catch(_){}
}

