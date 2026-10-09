

try {

(()=>{
'use strict';
const CHE=window.CHE=window.CHE||{}; const E=CHE.EDUCATION_ENGINE||{}; const X=CHE.EDUCATION_ENGINE_V322||{}; const src='CHE_EDUCATION_ENGINE_V324';
function gcd(a,b){a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b){const t=a%b;a=b;b=t}return a||1}
function lcm(a,b){return Math.abs(a/gcd(a,b)*b)}
function rat(x){let best=[Math.round(x),1],err=Math.abs(x-best[0]);for(let d=1;d<=2000;d++){let n=Math.round(x*d),e=Math.abs(x-n/d);if(e<err){best=[n,d];err=e;if(e<1e-11)break}}return best}
function parse(f){return E.parseFormula(f)}
function solve(A){
 const m=A.length,n=A[0].length, B=A.map(r=>r.slice(0,n-1).concat(-r[n-1])); let row=0,piv=[];
 for(let col=0;col<n-1 && row<m;col++){
  let k=row; for(let r=row+1;r<m;r++) if(Math.abs(B[r][col])>Math.abs(B[k][col])) k=r;
  if(Math.abs(B[k][col])<1e-12) continue;
  [B[row],B[k]]=[B[k],B[row]]; const q=B[row][col]; for(let j=col;j<n;j++) B[row][j]/=q;
  for(let r=0;r<m;r++){if(r===row)continue;const z=B[r][col];if(Math.abs(z)<1e-12)continue;for(let j=col;j<n;j++)B[r][j]-=z*B[row][j]}
  piv.push(col); row++;
 }
 const rank=piv.length; if(rank<n-1) throw Error('Underdetermined equation: multiple free coefficients');
 const x=Array(n).fill(0); x[n-1]=1;
 for(let r=rank-1;r>=0;r--){const c=piv[r];let v=B[r][n-1];for(let j=c+1;j<n-1;j++)v-=B[r][j]*x[j];x[c]=v/B[r][c]}
 return x;
}
E.balanceEquation=function(eq){
 const raw=String(eq||'').replace(/⇌|⇄|⟶|→|=/,'->'), sides=raw.split('->'); if(sides.length!==2)throw Error('Equation needs one arrow');
 const terms=side=>side.split('+').map(x=>{x=x.trim();const m=x.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);return {coef:m?Number(m[1]):1,formula:(m?m[2]:x).replace(/\([aqslg]\)$/,'').trim()}}).filter(x=>x.formula);
 const L=terms(sides[0]),R=terms(sides[1]),all=L.concat(R),els=[];all.forEach(t=>Object.keys(parse(t.formula)).forEach(e=>{if(!els.includes(e))els.push(e)}));
 if(all.length<2)throw Error('Need at least two species');
 const A=els.map(e=>all.map((t,i)=>{const n=parse(t.formula)[e]||0;return i<L.length?n:-n}));
 const x=solve(A); let den=1; x.forEach(v=>den=lcm(den,rat(v)[1])); let ints=x.map(v=>Math.round(v*den)); const g=ints.reduce((a,b)=>gcd(a,b),0); ints=ints.map(v=>v/g);
 if(ints.some(v=>v<=0)) throw Error('No positive stoichiometric solution');
 const atoms={}; els.forEach(e=>atoms[e]=0); all.forEach((t,i)=>Object.keys(parse(t.formula)).forEach(e=>atoms[e]=(atoms[e]||0)+(i<L.length?1:-1)*ints[i]*parse(t.formula)[e]));
 const out={input:eq,reactants:L,products:R,coefficients:{reactants:ints.slice(0,L.length),products:ints.slice(L.length)},equation:L.map((t,j)=>ints[j]+' '+t.formula).join(' + ')+' -> '+R.map((t,j)=>ints[L.length+j]+' '+t.formula).join(' + '),balanced:Object.values(atoms).every(v=>Math.abs(v)<1e-9),atomBalance:atoms,elements:els,source:src};
 return out;
};
X.regressionV324=function(){
 const b=E.balanceEquation('H2 + O2 -> H2O'); const lr=X.limitingReagent(b,{H2:3,O2:2}); const pr=X.theoreticalProduct(b,{H2:3,O2:2},'H2O');
 const b2=E.balanceEquation('Fe + O2 -> Fe2O3'); const b3=E.balanceEquation('HCl + NaOH -> NaCl + H2O');
 const pass=b.equation==='2 H2 + 1 O2 -> 2 H2O'&&b.balanced&&lr.limitingReagents[0]==='O2'&&Math.abs(pr.productAmount-4)<1e-12&&b2.balanced&&b3.balanced;
 return {version:'3.24',equations:[b.equation,b2.equation,b3.equation],limiting:lr.limitingReagents,productAmount:pr.productAmount,pass};
};
CHE.EDUCATION.MAX_REPAIR_V324={version:'3.24',source:src,repairs:['rref no longer pivots on RHS','positive nullspace coefficients enforced','v322 limiting-reagent bridge reuses corrected coefficients'],referenceReady:false,noSecondDatabase:true};
CHE.EDUCATION.gapAuditV324=function(){return {version:'3.24',regression:X.regressionV324(),referenceReady:false,next:['L001-L013 canonical reconciliation','redox electron balance','UI binding audit','browser smoke test']}};
})();

} catch (err) {
  try { console.warn('[CHE module 209]', err && err.message ? err.message : err); } catch(_){}
}