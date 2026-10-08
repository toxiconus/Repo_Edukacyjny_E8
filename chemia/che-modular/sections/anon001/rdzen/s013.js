

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
function weakAcidPH(Cc, Ka){ return C.CHEM.weakAcid(Number(Cc), Number(Ka)).pH; }
function strongNeutralizationPH(acidM, acidV, baseM, baseV){
  const V=Number(acidV)+Number(baseV); if(!(V>0)) return NaN;
  const H=Number(acidM)*Number(acidV), OH=Number(baseM)*Number(baseV);
  const ex=H-OH;
  if(Math.abs(ex)<1e-14) return 7;
  if(ex>0) return -Math.log10(ex/V);
  return 14+Math.log10((-ex)/V);
}
function titrationPH(opt){
  const type=opt.type||'strongStrong';
  const Cc=Number(opt.C), V0=Number(opt.V0), V=Number(opt.V), Ka=Number(opt.Ka??1.8e-5);
  const vt=V0+V; if(!(Cc>0&&V0>0&&V>=0)) return NaN;
  if(type==='strongStrong') return strongNeutralizationPH(Cc,V0,Cc,V);
  const ca=Cc*V0/vt, cb=Cc*V/vt, Kw=1e-14;
  const f=h=>h+cb-Kw/h-ca*Ka/(Ka+h);
  let lo=1e-14, hi=1;
  for(let i=0;i<100;i++){ const m=(lo+hi)/2; if(f(m)>0) hi=m; else lo=m; }
  return -Math.log10((lo+hi)/2);
}
function equivalenceVolume(Cacid, Vacid, Cbase, stoichAcid, stoichBase){
  stoichAcid=stoichAcid||1; stoichBase=stoichBase||1;
  Cacid=Number(Cacid); Vacid=Number(Vacid); Cbase=Number(Cbase);
  return Cacid>0&&Vacid>=0&&Cbase>0 ? Cacid*Vacid*stoichBase/(Cbase*stoichAcid) : NaN;
}
function bufferPH(pKa, base, acid){ return C.CHEM.bufferPH(pKa, base, acid); }
function polyproticFractions(pH, Kas){ return C.CHEM.polyproticFractions(Number(pH), Kas); }
function polyproticPH(Cc, Kas){
  Cc=Number(Cc); const ks=(Kas||[]).map(Number);
  if(!(Cc>=0)||!ks.length||ks.some(k=>!(k>0))) return NaN;
  const Kw=1e-14;
  const avgCharge=h=>{ const ph=-Math.log10(h); const a=C.CHEM.polyproticFractions(ph,ks); return a.reduce((s,v,i)=>s+i*v,0); };
  const f=h=>h-Kw/h-Cc*avgCharge(h);
  let lo=1e-14, hi=Math.max(1,Cc+1);
  for(let i=0;i<100;i++){ const m=(lo+hi)/2; if(f(m)>0) hi=m; else lo=m; }
  const h=(lo+hi)/2;
  return { pH:-Math.log10(h), H:h, OH:Kw/h, alpha:C.CHEM.polyproticFractions(-Math.log10(h),ks), averageCharge:avgCharge(h) };
}
function speciate(formula, total, spec){
  const Ctot=Number(total); const Kas=Array.isArray(spec)?spec:(spec?.Kas||spec?.pKa||[]);
  if(!Number.isFinite(Ctot)||Ctot<0||!Kas.length) return { ok:false, formula, reason:'brak stężenia lub stałych' };
  const ks=Kas.map(k=>{ const n=Number(k); return n>0&&n<1?n:Math.pow(10,-n); });
  const pH=Number.isFinite(Number(spec?.pH))?Number(spec.pH):null;
  const fractions=pH!==null?C.CHEM.polyproticFractions(pH,ks):Array(ks.length+1).fill(1/(ks.length+1));
  const species=fractions.map((fraction,i)=>({ id:formula+'_'+i,
    label:i===0?'H_nA':('H_'+Math.max(0,ks.length-i)+'A'+(i>0?('^'+i+'-'):'')),
    fraction, concentration:Ctot*fraction, charge:-i }));
  return { ok:true, formula, totalConcentration:Ctot, Kas:ks, pH, fractions, species,
    chargeBalance:species.reduce((s,x)=>s+x.concentration*x.charge,0) };
}
C.EQUILIBRIUM = { version:'2.17', weakAcidPH, strongNeutralizationPH, titrationPH,
  equivalenceVolume, bufferPH, polyproticFractions, polyproticPH, speciate };
})(window);

} catch (err) {
  try { console.warn('[CHE module 13]', err && err.message ? err.message : err); } catch(_){}
}