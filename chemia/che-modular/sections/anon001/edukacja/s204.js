

try {

(function(C){
  C.EDUCATION=C.EDUCATION||{}; C.EDUCATION_ENGINE=C.EDUCATION_ENGINE||{};
  var E=C.DATA&&C.DATA.ATOMIC_MASS||{};
  function cleanFormula(f){return String(f||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,function(x){return String('₀₁₂₃₄₅₆₇₈₉'.indexOf(x))});}
  function parseFormula(formula){
    var s=cleanFormula(formula).replace(/\s+/g,'');
    var i=0;
    function seq(stop){var out={};
      while(i<s.length && s[i]!==stop){
        if(s[i]==='('){i++;var inner=seq(')');if(s[i]!==')')throw Error('Unclosed group in '+formula);i++;var m='';while(i<s.length&&/\d/.test(s[i]))m+=s[i++];var mult=Number(m||1);Object.keys(inner).forEach(function(k){out[k]=(out[k]||0)+inner[k]*mult;});continue;}
        if(!/[A-Z]/.test(s[i]))throw Error('Unexpected token '+s[i]+' in '+formula);
        var el=s[i++];if(i<s.length&&/[a-z]/.test(s[i]))el+=s[i++];
        var n='';while(i<s.length&&/\d/.test(s[i]))n+=s[i++];out[el]=(out[el]||0)+Number(n||1);
      } return out;}
    var r=seq();if(i!==s.length)throw Error('Unparsed formula '+formula);return r;
  }
  function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){var t=a%b;a=b;b=t;}return a||1;}
  function lcm(a,b){return Math.abs(a/gcd(a,b)*b);}
  function rational(x){if(Math.abs(x)<1e-10)return [0,1];var sign=x<0?-1:1;x=Math.abs(x);var best=[Math.round(x),1],err=Math.abs(x-best[0]);for(var d=1;d<=1000;d++){var n=Math.round(x*d),e=Math.abs(x-n/d);if(e<err){best=[n,d];err=e;if(e<1e-10)break;}}return [sign*best[0],best[1]];}
  function rref(A){var m=A.length,n=A[0].length,row=0,piv=[];for(var c=0;c<n&&row<m;c++){var k=row;for(var r=row+1;r<m;r++)if(Math.abs(A[r][c])>Math.abs(A[k][c]))k=r;if(Math.abs(A[k][c])<1e-10)continue;var t=A[k];A[k]=A[row];A[row]=t;var q=A[row][c];for(var j=c;j<n;j++)A[row][j]/=q;for(var rr=0;rr<m;rr++){if(rr===row)continue;var z=A[rr][c];if(Math.abs(z)<1e-10)continue;for(var jj=c;jj<n;jj++)A[rr][jj]-=z*A[row][jj];}piv.push(c);row++;}return piv;}
  function balanceEquation(eq){
    var raw=String(eq||'').replace(/⇌|⇄|⟶|→|=/,'->');var sides=raw.split('->');if(sides.length!==2)throw Error('Equation needs one arrow');
    function terms(side){return side.split('+').map(function(x){x=x.trim();var m=x.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);return {coef:m?Number(m[1]):1,formula:(m?m[2]:x).replace(/\([aqslg]\)$/,'').trim()};}).filter(function(x){return x.formula;});}
    var L=terms(sides[0]),R=terms(sides[1]), all=L.concat(R), els=[];all.forEach(function(t){Object.keys(parseFormula(t.formula)).forEach(function(e){if(els.indexOf(e)<0)els.push(e);});});
    var A=els.map(function(e){return all.map(function(t,idx){var n=parseFormula(t.formula)[e]||0;return (idx<L.length?n:-n);});});
    if(all.length===1)throw Error('Need at least two species');
    var M=A.map(function(row){return row.slice(0,-1).concat([-row[row.length-1]]);});
    var piv=rref(M),n=all.length,free=-1;for(var c=0;c<n;c++)if(piv.indexOf(c)<0){free=c;break;}if(free<0)throw Error('No free variable; equation may be inconsistent');
    var x=Array(n).fill(0);x[free]=1;for(var rr=0;rr<piv.length;rr++)x[piv[rr]]=-M[rr][free];
    var den=1;x.forEach(function(v){den=lcm(den,rational(v)[1]);});var ints=x.map(function(v){return Math.round(v*den);});var g=ints.reduce(function(a,b){return gcd(a,b);},0);ints=ints.map(function(v){return v/g;});if(ints.some(function(v){return v<0;})){ints=ints.map(function(v){return -v;});}
    var left=ints.slice(0,L.length),right=ints.slice(L.length);var atoms={};els.forEach(function(e){atoms[e]=0;});all.forEach(function(t,idx){var c=ints[idx],f=parseFormula(t.formula);Object.keys(f).forEach(function(e){atoms[e]=(atoms[e]||0)+(idx<L.length?1:-1)*c*f[e];});});
    return {input:eq,reactants:L,products:R,coefficients:{reactants:left,products:right},equation:L.map(function(t,j){return left[j]+' '+t.formula;}).join(' + ')+' -> '+R.map(function(t,j){return right[j]+' '+t.formula;}).join(' + '),balanced:Object.values(atoms).every(function(v){return Math.abs(v)<1e-9;}),atomBalance:atoms,elements:els};
  }
  function molarMass(formula){var a=parseFormula(formula),missing=[];var M=0;Object.keys(a).forEach(function(el){var v=Number(E[el]);if(!isFinite(v)){missing.push(el);}else M+=v*a[el];});return {formula:formula,molarMass:missing.length?null:M,missingElements:missing,composition:a,source:'CHE.DATA.ATOMIC_MASS'};}
  function reactionRatio(bal,from,to,n){var i=bal.reactants.concat(bal.products).findIndex(function(t){return t.formula===from;}),j=bal.reactants.concat(bal.products).findIndex(function(t){return t.formula===to;});if(i<0||j<0)throw Error('Species not found');var ci=bal.coefficients.reactants.concat(bal.coefficients.products)[i],cj=bal.coefficients.reactants.concat(bal.coefficients.products)[j];return n*cj/ci;}
  function stoichMass(bal,from,to,mass){var mm=molarMass(from),mt=molarMass(to);if(mm.molarMass==null||mt.molarMass==null)throw Error('Missing atomic mass for '+(mm.missingElements||[]).concat(mt.missingElements||[]).join(','));var n=mass/mm.molarMass;return {inputMass_g:mass,from:from,to:to,molesFrom:n,molesTo:reactionRatio(bal,from,to,n),massTo:reactionRatio(bal,from,to,n)*mt.molarMass,molarMassFrom:mm.molarMass,molarMassTo:mt.molarMass};}
  function validate(b){var checks={balanced:b.balanced,nonzero:b.coefficients.reactants.concat(b.coefficients.products).every(function(x){return x>0;})};return {ok:Object.values(checks).every(Boolean),checks:checks,atomBalance:b.atomBalance};}
  C.EDUCATION_ENGINE.parseFormula=parseFormula;
  C.EDUCATION_ENGINE.balanceEquation=balanceEquation;
  C.EDUCATION_ENGINE.molarMass=molarMass;
  C.EDUCATION_ENGINE.reactionRatio=reactionRatio;
  C.EDUCATION_ENGINE.stoichMass=stoichMass;
  C.EDUCATION_ENGINE.validate=validate;
  C.EDUCATION_ENGINE.V321={version:'3.21',owner:'CHE.EDUCATION_ENGINE',sourceOfTruth:'CHE.DATA.ATOMIC_MASS',oneCommonEngine:true,noSecondDatabase:true,referenceReady:false};
  C.EDUCATION_ENGINE.selfTest=function(){
    var a=balanceEquation('H2 + O2 -> H2O'),b=balanceEquation('Fe + O2 -> Fe2O3'),c=balanceEquation('HCl + NaOH -> NaCl + H2O');
    var mm=molarMass('Ca(OH)2');return {version:'3.21',equations:[a.equation,b.equation,c.equation],allBalanced:[a,b,c].every(function(x){return validate(x).ok;}),CaOH2_M:Math.round(mm.molarMass*1000)/1000,sourceMass:'CHE.DATA.ATOMIC_MASS'};
  };
  C.EDUCATION.gapAuditV321=function(){return {version:'3.21',engine:true,parseFormula:true,balance:true,molarMass:true,stoichiometry:true,canonicalReactionDB:'CHE.DATA.REACTIONS',referenceReady:false,next:['limiting reagent execution','yield execution','ionic equation engine','L001-L013 source reconciliation']};};
})(window.CHE);

} catch (err) {
  try { console.warn('[CHE module 206]', err && err.message ? err.message : err); } catch(_){}
}