
(function(){'use strict';try{
var $=function(s,r){return(r||document).querySelector(s)};
 
var root=document.documentElement,KEY='che.theme';
function stored(){try{return localStorage.getItem(KEY)}catch(e){return null}}
function setTheme(t,save){root.dataset.theme=t;var m=$('meta[name="theme-color"]');if(m)m.content=t==='dark'?'#0e141a':'#eef2f6';
 if(save)try{localStorage.setItem(KEY,t)}catch(e){}}
setTheme(stored()||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
function toggleTheme(){setTheme(root.dataset.theme==='dark'?'light':'dark',true)}
 
var SYM='H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'.split(' ');
var MS=[1.008,4.0026,6.94,9.0122,10.81,12.011,14.007,15.999,18.998,20.180,22.990,24.305,26.982,28.085,30.974,32.06,35.45,39.948,39.098,40.078,44.956,47.867,50.942,51.996,54.938,55.845,58.933,58.693,63.546,65.38,69.723,72.630,74.922,78.971,79.904,83.798,85.468,87.62,88.906,91.224,92.906,95.95,98,101.07,102.91,106.42,107.87,112.41,114.82,118.71,121.76,127.60,126.90,131.29,132.91,137.33,138.91,140.12,140.91,144.24,145,150.36,151.96,157.25,158.93,162.50,164.93,167.26,168.93,173.05,174.97,178.49,180.95,183.84,186.21,190.23,192.22,195.08,196.97,200.59,204.38,207.2,208.98,209,210,222,223,226,227,232.04,231.04,238.03,237,244,243,247,247,251,252,257,258,259,266,267,268,269,270,277,278,281,282,285,286,289,290,293,294,294];
var M={};SYM.forEach(function(s,i){M[s]=MS[i]});
function parse(f){var i=0;function grp(close){var o={};while(i<f.length){var c=f[i];
 if(c==='('||c==='['){i++;var inner=grp(c==='('?')':']');var n=num();for(var k in inner)o[k]=(o[k]||0)+inner[k]*n}
 else if(c===close){i++;return o}
 else if(/[A-Z]/.test(c)){var s=c;i++;while(i<f.length&&/[a-z]/.test(f[i]))s+=f[i++];if(!(s in M))throw new Error('Nieznany symbol: '+s);o[s]=(o[s]||0)+num()}
 else throw new Error('Nieoczekiwany znak „'+c+'”')}
 if(close)throw new Error('Brak nawiasu zamykającego');return o}
 function num(){var j=i;while(i<f.length&&/[0-9]/.test(f[i]))i++;return i>j?+f.slice(j,i):1}
 return grp(null)}
function formula(txt){var tot={};txt.replace(/\s+/g,'').replace(/[₀-₉]/g,function(d){return d.charCodeAt(0)-8320}).split(/[·.*•]/).forEach(function(part){
 if(!part)return;var m=part.match(/^(\d+)(.*)$/),k=1;if(m){k=+m[1];part=m[2]}var o=parse(part);for(var e in o)tot[e]=(tot[e]||0)+o[e]*k});return tot}
 
function modal(id,html){var d=document.createElement('div');d.className='che-modal';d.id=id;d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');
 d.innerHTML='<div class="che-box">'+html+'</div>';d.addEventListener('mousedown',function(e){if(e.target===d)close(d)});document.body.appendChild(d);return d}
function open(d){d.classList.add('open');var i=$('input',d);if(i)setTimeout(function(){i.focus();i.select()},0)}
function close(d){d.classList.remove('open')}
function anyOpen(){return document.querySelector('.che-modal.open')}
 
var mm=modal('che-mm','<h2>Masa molowa i przeliczanie</h2><input id="che-f" placeholder="np. Ca(OH)2, CuSO4·5H2O, Al2(SO4)3" autocomplete="off" spellcheck="false" aria-label="Wzór chemiczny"><div class="che-res" id="che-fr"></div>');
var fi=$('#che-f',mm),fr=$('#che-fr',mm);
function fmt(x,d){return x.toLocaleString('pl-PL',{minimumFractionDigits:d,maximumFractionDigits:d})}
fi.addEventListener('input',function(){var v=fi.value.trim();if(!v){fr.innerHTML='<span style="color:var(--dim)">Wpisz wzór. Obsługiwane: nawiasy ( ) [ ], hydraty po „·” lub „.”, indeksy dolne.</span>';return}
 try{var t=formula(v),tot=0,rows='';Object.keys(t).forEach(function(e){tot+=M[e]*t[e]});
  Object.keys(t).forEach(function(e){var w=M[e]*t[e];rows+='<tr><td>'+e+'</td><td>'+t[e]+'</td><td>'+fmt(M[e],3)+'</td><td>'+fmt(w,3)+'</td><td>'+fmt(w/tot*100,2)+' %</td></tr>'});
  fr.innerHTML='<div class="che-big">'+fmt(tot,3)+' g/mol</div><table><tr><th>Pierwiastek</th><th>n</th><th>M</th><th>Wkład</th><th>% mas.</th></tr>'+rows+'</table>'+
  '<div style="margin-top:12px;display:flex;gap:8px;align-items:center"><input id="che-g" type="number" min="0" step="any" placeholder="masa [g]" style="font-size:13px" aria-label="Masa w gramach"><span id="che-n" style="white-space:nowrap;color:var(--mut)">→ n = …</span></div>';
  var g=$('#che-g',fr);g.addEventListener('input',function(){$('#che-n',fr).textContent=g.value===''?'→ n = …':'→ n = '+fmt(+g.value/tot,5)+' mol'})
 }catch(err){fr.innerHTML='<span class="che-err">'+err.message+'</span>'}});
fi.dispatchEvent(new Event('input'));
 
var help=modal('che-help','<h2>Skróty klawiszowe</h2><div class="che-keys"><kbd>Ctrl/⌘ K</kbd><span>Paleta: zakładki i szukanie pierwiastka</span><kbd>1–0</kbd><span>Zakładka po numerze (wbudowane)</span><kbd>/</kbd><span>Szukaj pierwiastka (wbudowane)</span><kbd>Alt M</kbd><span>Masa molowa</span><kbd>Alt D</kbd><span>Tryb jasny / ciemny</span><kbd>Esc</kbd><span>Zamknij okno</span></div>');
 
var pal=modal('che-pal','<input id="che-q" placeholder="Zakładka lub pierwiastek (np. Redoks, Fe, tlen)…" autocomplete="off" aria-label="Paleta poleceń"><div class="che-list che-res" id="che-pl"></div>');
var q=$('#che-q',pal),pl=$('#che-pl',pal),items=[],sel=0;
function tabs(){return[].slice.call(document.querySelectorAll('.tabnav button[data-tab]'))}
function go(b){var t=b.dataset.tab;if(typeof showTab==='function')showTab(t);else b.click()}
function build(){var v=q.value.trim().toLowerCase();items=[];
 tabs().forEach(function(b){if(!v||b.textContent.toLowerCase().indexOf(v)>-1)items.push({t:b.textContent,s:'zakładka',f:function(){go(b)}})});
 if(v){items.push({t:'Szukaj pierwiastka: „'+q.value.trim()+'”',s:'katalog',f:function(){var s=$('.search input');if(!s)return;s.value=q.value.trim();s.dispatchEvent(new Event('input',{bubbles:true}));
  setTimeout(function(){var b=$('#el-list button');if(b)b.click()},30)}});
  items.push({t:'Masa molowa: '+q.value.trim(),s:'kalkulator',f:function(){fi.value=q.value.trim();open(mm);fi.dispatchEvent(new Event('input'))}})}
 sel=0;draw()}
function draw(){pl.innerHTML='';items.slice(0,9).forEach(function(it,i){var b=document.createElement('button');b.className=i===sel?'sel':'';b.innerHTML='<span>'+it.t.replace(/</g,'&lt;')+'</span><small>'+it.s+'</small>';b.onclick=function(){run(it)};pl.appendChild(b)})}
function run(it){close(pal);it.f()}
q.addEventListener('input',build);
q.addEventListener('keydown',function(e){if(e.key==='ArrowDown'){sel=Math.min(sel+1,Math.min(items.length,9)-1);draw();e.preventDefault()}
 else if(e.key==='ArrowUp'){sel=Math.max(sel-1,0);draw();e.preventDefault()}else if(e.key==='Enter'&&items[sel])run(items[sel])});
function openPal(){q.value='';open(pal);build()}
 
var sh=$('.sb-head');if(sh){var tl=document.createElement('div');tl.className='che-tools';
 [['⌘K Paleta',openPal,'Ctrl/⌘+K'],['Masa molowa',function(){open(mm)},'Alt+M'],['Motyw',toggleTheme,'Alt+D']].forEach(function(a){var x=document.createElement('button');x.textContent=a[0];x.title=a[2];x.onclick=a[1];tl.appendChild(x)});sh.after(tl)}
 
var rc=$('#rx-cat');if(rc){var dd=function(){var seen={};rc.querySelectorAll('button[data-r]').forEach(function(x){var k=x.textContent.trim();if(seen[k]){x.hidden=true;x.style.display='none'}else seen[k]=1})};
 new MutationObserver(dd).observe(rc,{childList:true,subtree:true});dd()}
 
var nv=$('#tabnav'),dn=nv&&$('button[data-tab="dane"]',nv);
if(dn&&!$('.tg-s',nv)){var g=document.createElement('span');g.className='tg tg-s';g.textContent='Silnik';nv.insertBefore(g,dn)}
 
addEventListener('keydown',function(e){var mod=e.ctrlKey||e.metaKey;
 if(e.key==='Escape'){var o=anyOpen();if(o){close(o);e.stopPropagation()}return}
 if(mod&&e.key.toLowerCase()==='k'){e.preventDefault();openPal();return}
 if(!e.altKey||mod)return;var k=e.key;
 if(k.toLowerCase()==='m'||e.code==='KeyM'){e.preventDefault();open(mm)}
 else if(k.toLowerCase()==='d'||e.code==='KeyD'){e.preventDefault();toggleTheme()}
},true);
document.title=document.title.replace('v16.20','v16.20');
}catch(err){console.warn('CHE v16.20 overlay:',err)}})();
