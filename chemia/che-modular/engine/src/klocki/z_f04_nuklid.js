/* KLOCEK (przywrócony z commitu 460a00c): model w kontrakcie CHE.VIEW.define przez mostek model_widok.js. */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define||C.EXT_F04N)return;C.EXT_F04N=1;
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
// [symbol, Z, A (najczęstszy nuklid lub szkolny przykład), ładunek jonu]
var ZAD=[['H',1,1,0],['He',2,4,0],['Li',3,7,0],['C',6,12,0],['C',6,14,0],['N',7,14,0],['O',8,16,0],['O',8,16,-2],['F',9,19,-1],['Ne',10,20,0],['Na',11,23,0],['Na',11,23,1],['Mg',12,24,2],['Al',13,27,3],['Si',14,28,0],['P',15,31,0],['S',16,32,-2],['Cl',17,35,0],['Cl',17,37,0],['Cl',17,35,-1],['Ar',18,40,0],['K',19,39,1],['Ca',20,40,2]];
var SUP='⁰¹²³⁴⁵⁶⁷⁸⁹',SUB='₀₁₂₃₄₅₆₇₈₉';function up(n){return String(n).replace(/\d/g,function(d){return SUP[d]})}function dn(n){return String(n).replace(/\d/g,function(d){return SUB[d]})}
function zapis(z){var q=z[3],qs=q?((Math.abs(q)>1?up(Math.abs(q)):'')+(q>0?'⁺':'⁻')):'';return up(z[2])+dn(z[1])+z[0]+qs}
V.define('f04-nuklid-v01',{title:'Trening: odczytaj zapis nuklidu i policz p, n, e',tag:'E8',
 hint:'Odczytaj Z (dół), A (góra) i ładunek. Wpisz liczbę protonów, neutronów i elektronów, potem „Sprawdź”. Po sprawdzeniu zobaczysz model atomu.',
 foot:'rozszerzenia.js §A · CHE.LAB.atomBohr',
 build:function(host){host.innerHTML='';var i=0,ok=0,all=0,stop=null,order=ZAD.map(function(_,k){return k}).sort(function(){return Math.random()-.5});
  var top=el('div',null),zap=el('div',null),form=el('div',null),wyn=el('div',null),pic=el('div',null);
  top.style.cssText='display:flex;justify-content:space-between;align-items:center;font:14px Inter,system-ui,sans-serif';zap.style.cssText='font:700 46px/1.2 Inter,system-ui,sans-serif;text-align:center;margin:8px 0';
  form.style.cssText='display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center;font:15px Inter,system-ui,sans-serif';
  wyn.style.cssText='margin:10px auto;max-width:560px;font:14px/1.5 Inter,system-ui,sans-serif;border-left:4px solid var(--accent,#0d6868);padding:6px 10px;border-radius:8px;background:var(--surface-soft,#f1f5f9)';
  host.append(top,zap,form,wyn,pic);
  var pola={};[['p','protony p⁺'],['n','neutrony n⁰'],['e','elektrony e⁻']].forEach(function(f){var l=el('label',null,f[1]+' '),x=el('input');x.type='number';x.min=0;x.max=60;x.style.cssText='width:64px;font:15px Inter,system-ui;padding:4px 6px';l.appendChild(x);form.appendChild(l);pola[f[0]]=x;x.onkeydown=function(ev){if(ev.key==='Enter')spr()}});
  function btn(t,f){var b=el('button',null,t);b.type='button';b.style.cssText='font:14px Inter,system-ui;padding:6px 12px;border-radius:8px;border:1px solid var(--border,#cbd5e1);background:var(--surface,#fff);color:inherit;cursor:pointer';b.onclick=f;form.appendChild(b);return b}
  btn('Sprawdź',spr);btn('Następny →',function(){i=(i+1)%order.length;nowe()});
  function nowe(){var z=ZAD[order[i]];zap.textContent=zapis(z);Object.keys(pola).forEach(function(k){pola[k].value='';pola[k].style.borderColor=''});wyn.innerHTML='Zapis <b>'+zapis(z)+'</b>: ile protonów, neutronów i elektronów?';pic.innerHTML='';if(stop){stop();stop=null}licz()}
  function licz(){top.innerHTML='<span>Zadanie '+(i+1)+' / '+order.length+'</span><span>Wynik: <b>'+ok+' / '+all+'</b></span>'}
  function spr(){var z=ZAD[order[i]],p=z[1],n=z[2]-z[1],e=z[1]-z[3],dob={p:p,n:n,e:e},trafione=0;
   Object.keys(pola).forEach(function(k){var good=+pola[k].value===dob[k]&&pola[k].value!=='';pola[k].style.borderColor=good?'#16a34a':'#dc2626';if(good)trafione++});
   all++;if(trafione===3)ok++;licz();
   wyn.innerHTML=(trafione===3?'<b style="color:#16a34a">Dobrze!</b> ':'<b style="color:#dc2626">Sprawdź jeszcze raz.</b> ')+
    'p = Z = <b>'+p+'</b> · n = A − Z = '+z[2]+' − '+p+' = <b>'+n+'</b> · e = Z − ładunek = '+p+(z[3]?(z[3]>0?' − ':' + ')+Math.abs(z[3]):' − 0')+' = <b>'+e+'</b>'+
    (z[3]?'<br>'+(z[3]>0?'Kation: atom <b>oddał</b> '+z[3]+' e⁻ — elektronów jest mniej niż protonów.':'Anion: atom <b>przyjął</b> '+(-z[3])+' e⁻ — elektronów jest więcej niż protonów.'):'<br>Atom obojętny: elektronów tyle, ile protonów.');
   var AB=C.LAB&&C.LAB.atomBohr;if(AB&&AB.anim){pic.innerHTML='<canvas width="520" height="520" style="width:100%;max-width:300px;display:block;margin:auto;border-radius:12px" role="img" aria-label="Model atomu: '+p+' p, '+n+' n, '+e+' e"></canvas>';if(stop)stop();stop=AB.anim(pic.firstChild,{p:p,n:n,e:e,lupa:true,zoom:1.3})}}
  nowe()}});
})();
