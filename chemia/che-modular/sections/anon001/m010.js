try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const finite = x => Number.isFinite(Number(x));
const positive = x => finite(x) && Number(x) > 0;
const KW = () => Number(C.DATA?.MODEL_LIMITS?.waterKw) || 1e-14;
function pHFromH(H){ return positive(H) ? -Math.log10(Number(H)) : NaN; }
function HFromPH(pH){ return finite(pH) ? Math.pow(10, -Number(pH)) : NaN; }
function solveMonotonic(fn, lo, hi, it){
  it = it || 90;
  let flo = fn(lo), fhi = fn(hi);
  if(!Number.isFinite(flo) || !Number.isFinite(fhi) || flo*fhi > 0) return NaN;
  for(let i=0;i<it;i++){ const m=(lo+hi)/2, fm=fn(m); if(!Number.isFinite(fm)) return NaN; if(fm>0) hi=m; else lo=m; }
  return (lo+hi)/2;
}
function weakAcid(Cc, Ka){
  Cc=Number(Cc); Ka=Number(Ka);
  if(!positive(Cc) || !positive(Ka)) return {H:NaN,OH:NaN,alpha:NaN,pH:NaN};
  const Kw=KW(); const f=H=>H-Kw/H-Cc*Ka/(Ka+H);
  const H=solveMonotonic(f, Math.max(1e-14,Math.min(1e-12,Cc*Ka*1e-6)), Math.max(1,Cc+Ka));
  const A=Cc*Ka/(Ka+H), OH=Kw/H;
  return {H,OH,alpha:A/Cc,pH:pHFromH(H)};
}
function strongAcid(Cc){
  Cc=Number(Cc); if(!positive(Cc)) return {H:NaN,OH:NaN,pH:NaN};
  const Kw=KW(); const H=(Cc+Math.sqrt(Cc*Cc+4*Kw))/2;
  return {H,OH:Kw/H,alpha:1,pH:pHFromH(H)};
}
function strongBase(Cc){
  Cc=Number(Cc); if(!positive(Cc)) return {OH:NaN,H:NaN,pOH:NaN,pH:NaN};
  const Kw=KW(); const OH=(Cc+Math.sqrt(Cc*Cc+4*Kw))/2, H=Kw/OH;
  return {OH,H,pOH:-Math.log10(OH),pH:pHFromH(H)};
}
function bufferPH(pKa, base, acid){
  pKa=Number(pKa); base=Number(base); acid=Number(acid);
  return finite(pKa)&&positive(base)&&positive(acid)?pKa+Math.log10(base/acid):NaN;
}
function polyproticFractions(pH, Kas){
  const H=HFromPH(pH); const ks=(Kas||[]).map(Number);
  if(!positive(H)||!ks.length||ks.some(k=>!positive(k))) return [];
  const logs=[ks.length*Math.log(H)]; let l=logs[0];
  for(let i=0;i<ks.length;i++){ l=l+Math.log(ks[i])-Math.log(H); logs.push(l); }
  const mx=Math.max(...logs); const w=logs.map(x=>Math.exp(x-mx));
  const sum=w.reduce((a,b)=>a+b,0);
  return w.map(x=>x/sum);
}
const SUB={'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'};
const SUP={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9'};
function normalizeFormula(f){
  return String(f||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,m=>SUB[m]).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,m=>SUP[m])
    .replace(/[⁺]/g,'+').replace(/[⁻]/g,'-').replace(/\s+/g,'');
}
function stripCharge(formula){
  const s=normalizeFormula(formula).trim();
  if(!s) return '';
  if(/\^\d*[+-]$/.test(s)) return s.replace(/\^\d*[+-]$/, '');
  if(/[+-]$/.test(s)) return s.replace(/[+-]$/, '');
  return s;
}
function parseCharge(formula){
  const s=normalizeFormula(formula).trim();
  if(!s) return 0;
  const explicit = s.match(/\^(\d*)([+-])$/);
  if(explicit) return (explicit[2]==='-'?-1:1) * Number(explicit[1] || 1);
  if(/[+-]$/.test(s)) return s.endsWith('-') ? -1 : 1;
  return 0;
}
function parseFormula(formula){
  let src=stripCharge(formula);
  if(!src) return null;
  const merge=(to,from,mult)=>{ mult=mult||1; for(const k in from) to[k]=(to[k]||0)+from[k]*mult; };
  function parseSegment(seg){
    let i=0;
    function group(stop){
      const out={};
      while(i<seg.length && seg[i]!==stop){
        const ch=seg[i];
        if(ch==='('||ch==='['){
          const close=ch==='('?')':']';
          i++;
          const inner=group(close);
          if(seg[i]!==close) return null;
          i++;
          const m=(seg.slice(i).match(/^\d+/)||['1'])[0];
          i+=m.length; merge(out,inner,Number(m));
        } else {
          const m=seg.slice(i).match(/^([A-Z][a-z]?)(\d*)/);
          if(!m) return null;
          out[m[1]]=(out[m[1]]||0)+(m[2]?Number(m[2]):1);
          i+=m[0].length;
        }
      }
      return out;
    }
    const lead=(seg.match(/^\d+/)||[''])[0]; i=lead.length;
    const out=group('');
    if(i!==seg.length||!out||!Object.keys(out).length) return null;
    if(lead) for(const k in out) out[k]*=Number(lead);
    return out;
  }
  const parts=src.split(/[·.]/).filter(Boolean); const total={};
  for(const part of parts){ const parsed=parseSegment(part); if(!parsed) return null; merge(total,parsed); }
  return Object.keys(total).length?total:null;
}
function molarMass(formula){
  const f=parseFormula(formula); const M=C.DATA?.ATOMIC_MASS||{};
  if(!f) return NaN;
  let sum=0;
  for(const k in f){ if(!M[k]) return NaN; sum+=M[k]*f[k]; }
  return sum;
}
function balanceReaction(rx){
  const totals=(side)=>{ side=side||[]; return side.reduce((acc,item)=>{
    const f=parseFormula(item.formula), c=Number(item.coef)||1;
    if(!f||c<=0) return null;
    for(const k in f) acc[k]=(acc[k]||0)+f[k]*c;
    return acc;
  },{}); };
  const a=totals(rx?.reactants), b=totals(rx?.products);
  if(!a||!b) return {ok:false,atoms:false,charge:false,reason:'niepoprawny wzór lub współczynnik'};
  const keys=new Set([...Object.keys(a),...Object.keys(b)]);
  const atoms=[...keys].filter(k=>a[k]!==b[k]);
  const inferred=(side)=>(side||[]).reduce((q,x)=>q+(Number(x.coef)||1)*parseCharge(x.formula),0);
  const chargeA=rx?.charges?.reactants ?? inferred(rx?.reactants);
  const chargeB=rx?.charges?.products ?? inferred(rx?.products);
  const charge = Number.isFinite(chargeA) && Number.isFinite(chargeB) && chargeA===chargeB;
  return {ok:atoms.length===0&&charge,atoms:atoms.length===0,charge,unbalanced:atoms,reactants:a,products:b,chargeReactants:chargeA,chargeProducts:chargeB};
}
C.CHEM = { version:'2.17', pHFromH, HFromPH, weakAcid, strongAcid, strongBase, bufferPH,
  polyproticFractions, parseCharge, normalizeFormula, parseFormula, molarMass, balanceReaction };
})(window);

} catch (err) {
  try { console.warn('[CHE module 10]', err && err.message ? err.message : err); } catch(_){}
}

