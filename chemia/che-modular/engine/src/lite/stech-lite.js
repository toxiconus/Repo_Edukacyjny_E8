/* stech-lite.js — lekki kalkulator stechiometryczny (2026-10-11), ten sam identyfikator co w silniku: stech-kalkulator-v01.
   Rdzeń E8: masy z równania (współczynnik × masa cząsteczkowa), proporcja, nadmiar i reagent ograniczający, kontrola prawem
   zachowania masy. Warstwa ambitna (przełącznik): mole i objętość gazów w warunkach normalnych (22,4 dm³/mol).
   Masy atomowe szkolne (Cl = 35,5). Reakcje: lista RX poniżej — dopisuj w tym samym formacie, równania sprawdza bilans przy starcie. */
(function(){
var C=window.CHE=window.CHE||{};if(!C.VIEW||!C.VIEW.define||C.EXT_STECH_LITE)return;C.EXT_STECH_LITE=1;
var AR={H:1,He:4,Li:7,C:12,N:14,O:16,F:19,Na:23,Mg:24,Al:27,Si:28,P:31,S:32,Cl:35.5,K:39,Ca:40,Mn:55,Fe:56,Cu:64,Zn:65,Br:80,Ag:108,I:127,Ba:137,Pb:207};
var GAZ={H2:1,O2:1,N2:1,CO2:1,CO:1,Cl2:1,NH3:1,HCl:1,CH4:1,C2H6:1,C3H8:1,C4H10:1,SO2:1,H2S:1,NO2:1};
var RX=[['spalanie wodoru','2 H2 + O2 → 2 H2O'],['spalanie węgla','C + O2 → CO2'],['spalanie metanu','CH4 + 2 O2 → CO2 + 2 H2O'],['spalanie propanu','C3H8 + 5 O2 → 3 CO2 + 4 H2O'],
 ['spalanie magnezu','2 Mg + O2 → 2 MgO'],['utlenianie żelaza','4 Fe + 3 O2 → 2 Fe2O3'],['synteza siarczku żelaza(II)','Fe + S → FeS'],['rozkład węglanu wapnia','CaCO3 → CaO + CO2'],
 ['cynk + kwas solny','Zn + 2 HCl → ZnCl2 + H2'],['glin + kwas solny','2 Al + 6 HCl → 2 AlCl3 + 3 H2'],['magnez + kwas solny','Mg + 2 HCl → MgCl2 + H2'],
 ['zobojętnianie NaOH + HCl','NaOH + HCl → NaCl + H2O'],['NaOH + H2SO4','2 NaOH + H2SO4 → Na2SO4 + 2 H2O'],['CuO + H2SO4','CuO + H2SO4 → CuSO4 + H2O'],
 ['tlenek wapnia + woda','CaO + H2O → Ca(OH)2'],['CO2 + woda wapienna','Ca(OH)2 + CO2 → CaCO3 + H2O'],['tlenek sodu + woda','Na2O + H2O → 2 NaOH'],['synteza amoniaku','N2 + 3 H2 → 2 NH3']];
var SUB={'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉'};
function ladny(f){return f.replace(/(\D)(\d+)/g,function(m,a,b){return a+b.replace(/\d/g,function(d){return SUB[d]})}).replace(/\)(\d)/g,')$1')}
function sklad(f){var c={};(function rec(t,m){var i=0;while(i<t.length){if(t[i]==='('){var d=1,j=i+1;while(d){if(t[j]==='(')d++;else if(t[j]===')')d--;j++}var k=/^\d*/.exec(t.slice(j))[0];rec(t.slice(i+1,j-1),m*(+k||1));i=j+k.length}
  else{var g=/^([A-Z][a-z]?)(\d*)/.exec(t.slice(i));if(!g){i++;continue}c[g[1]]=(c[g[1]]||0)+m*(+g[2]||1);i+=g[0].length}}})(f,1);return c}
function Mr(f){var c=sklad(f),s=0;for(var e in c){if(!AR[e])return NaN;s+=AR[e]*c[e]}return Math.round(s*100)/100}
function parse(r){var p=r.split(' → ').map(function(s){return s.split(' + ').map(function(x){var m=/^(\d+)\s+(.*)$/.exec(x.trim());return{k:m?+m[1]:1,f:m?m[2]:x.trim()}})});return{L:p[0],P:p[1]}}
function f2(x){if(!isFinite(x))return '—';var r=Math.abs(x)>=100?Math.round(x*10)/10:Math.round(x*100)/100;return String(r).replace('.',',')}
RX.forEach(function(r){var q=parse(r[1]),bil={};q.L.forEach(function(s){var c=sklad(s.f);for(var e in c)bil[e]=(bil[e]||0)+c[e]*s.k});q.P.forEach(function(s){var c=sklad(s.f);for(var e in c)bil[e]=(bil[e]||0)-c[e]*s.k});
 for(var e in bil)if(Math.abs(bil[e])>1e-9&&window.console)console.warn('stech-lite: nieuzgodnione równanie',r[1])});
var CSS='.stl{font:14px/1.5 Inter,system-ui,sans-serif}.stl .bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:6px 0}.stl select,.stl input[type=number]{font:inherit;padding:4px 6px;border:1px solid rgba(100,116,139,.5);border-radius:6px;background:transparent;color:inherit}'+
 '.stl input[type=number]{width:90px}.stl .eq{font:700 16px ui-monospace,Consolas,monospace;margin:8px 0;overflow-wrap:anywhere}.stl table{border-collapse:collapse;width:100%;font-size:13.5px;margin-top:6px}.stl th,.stl td{padding:5px 6px;border-bottom:1px solid rgba(100,116,139,.25);text-align:right}'+
 '.stl th:first-child,.stl td:first-child{text-align:left}.stl .nt{border-left:3px solid #0d6868;background:rgba(13,104,104,.06);padding:8px 10px;border-radius:6px;margin-top:8px;font-size:13.5px}.stl .lim{color:#b45309;font-weight:700}.stl .wrap{overflow-x:auto}';
C.VIEW.define('stech-kalkulator-v01',{title:'Kalkulator stechiometryczny',hint:'Wybierz reakcję i wpisz masę jednego substratu (drugi w nadmiarze) albo obu — wtedy kalkulator znajdzie reagent ograniczający. Najpierw policz sam, potem sprawdź.',
 build:function(host){if(!document.getElementById('stl-css')){var st=document.createElement('style');st.id='stl-css';st.textContent=CSS;document.head.appendChild(st)}
  host.classList.add('stl');var cur=0,amb=false,dane={};
  var b1=document.createElement('div');b1.className='bar';var sel=document.createElement('select');sel.setAttribute('aria-label','Reakcja');RX.forEach(function(r,i){var o=document.createElement('option');o.value=i;o.textContent=r[0];sel.appendChild(o)});
  var lab=document.createElement('label'),cb=document.createElement('input');cb.type='checkbox';lab.appendChild(cb);lab.appendChild(document.createTextNode(' mole i objętości (ambitne)'));b1.appendChild(sel);b1.appendChild(lab);
  var eq=document.createElement('div');eq.className='eq';var b2=document.createElement('div');b2.className='bar';var tw=document.createElement('div');tw.className='wrap';var out=document.createElement('div');out.className='nt';
  [b1,eq,b2,tw,out].forEach(function(e){host.appendChild(e)});
  function wejscia(){var q=parse(RX[cur][1]);b2.innerHTML='';dane={};q.L.forEach(function(s,i){var l=document.createElement('label');l.innerHTML='m('+ladny(s.f)+') [g] ';var inp=document.createElement('input');inp.type='number';inp.min=0;inp.step='any';
   if(i===0)inp.value=String(s.k*Mr(s.f));inp.oninput=function(){licz()};l.appendChild(inp);b2.appendChild(l);dane[i]=inp})}
  function licz(){var q=parse(RX[cur][1]),all=q.L.concat(q.P),wz=all.map(function(s){return s.k*Mr(s.f)});
   eq.textContent=q.L.map(function(s){return(s.k>1?s.k+' ':'')+ladny(s.f)}).join(' + ')+' → '+q.P.map(function(s){return(s.k>1?s.k+' ':'')+ladny(s.f)}).join(' + ');
   var podane=[];q.L.forEach(function(s,i){var v=parseFloat(String(dane[i].value).replace(',','.'));if(isFinite(v)&&v>0)podane.push({i:i,m:v})});
   if(!podane.length){tw.innerHTML='';out.innerHTML='Wpisz masę co najmniej jednego substratu.';return}
   var x=Math.min.apply(null,podane.map(function(p){return p.m/wz[p.i]})),lim=podane.length>1?podane.filter(function(p){return Math.abs(p.m/wz[p.i]-x)<1e-12})[0].i:null;
   var h='<table><tr><th>substancja</th><th>Mr [u]</th><th>z równania [g]</th><th>przereaguje / powstanie [g]</th>'+(amb?'<th>n [mol]</th><th>V [dm³]*</th>':'')+'</tr>',sL=0,sP=0;
   all.forEach(function(s,i){var m=wz[i]*x,isL=i<q.L.length;if(isL)sL+=m;else sP+=m;var n=s.k*x,gaz=GAZ[s.f];
    h+='<tr><td>'+(isL?'':'→ ')+ladny(s.f)+(i===lim?' <span class="lim">ogranicza</span>':'')+'</td><td>'+f2(Mr(s.f))+'</td><td>'+f2(wz[i])+'</td><td><b>'+f2(m)+'</b></td>'+(amb?'<td>'+f2(n)+'</td><td>'+(gaz?f2(n*22.4):'—')+'</td>':'')+'</tr>'});
   tw.innerHTML=h+'</table>';
   var t='<b>Proporcja:</b> masy z równania (współczynnik × Mr) skalujemy tym samym mnożnikiem ×'+f2(x)+'. ';
   if(podane.length>1){var reszta=podane.filter(function(p){return p.i!==lim}).map(function(p){return '<b>'+f2(p.m-wz[p.i]*x)+' g</b> '+ladny(q.L[p.i].f)})
    t+='Reagent ograniczający: <span class="lim">'+ladny(q.L[lim].f)+'</span> — kończy się pierwszy. W nadmiarze zostaje: '+reszta.join(', ')+'. '}
   else if(q.L.length>1)t+='Pozostałe substraty przyjmujemy w nadmiarze — tabela pokazuje, ile ich przereaguje. ';
   t+='<b>Kontrola:</b> substraty '+f2(sL)+' g = produkty '+f2(sP)+' g (prawo zachowania masy).'+(amb?'<br><small>* objętość gazu w warunkach normalnych (0°C, 1013,25 hPa), 22,4 dm³/mol.</small>':'');
   out.innerHTML=t}
  sel.onchange=function(){cur=+sel.value;wejscia();licz()};cb.onchange=function(){amb=cb.checked;licz()};wejscia();licz()}});
})();
