let isoA=null,lastSym=null;
function hud(){const{e}=state(),n=NAMES[sym]||[];if(lastSym!==sym){isoA=null;lastSym=sym}
 const isotopes=isotopeData(e),top=isotopes.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A=isoA||(top?top.A:Math.round(e.m||e.z*2)),N=A-e.z;
 $('hud').setAttribute('data-fam',famOf(e.z));$('hud').innerHTML=ldt(sym,64)+`<b>${e.z}</b><div class="hx-n"><strong>${n.length?n[0]:e.n}</strong>${n.length>1?`<small>${n.slice(1).join(' · ')}</small>`:''}</div><div class="hx-c"><div class="hx-k"><small>rodzina</small>${famOf(e.z)}</div>${e.m?`<div class="hx-k"><small>masa atomowa</small>${e.m} u</div>`:''}${e.st?`<div class="hx-k"><small>stan w 25 °C</small>${e.st}</div>`:''}<div class="hx-k"><small>nuklid główny</small><span><sup>${A}</sup>${sym}: ${e.z} p⁺ · ${N} n⁰ · N/Z ${(N/e.z).toFixed(2)}</span></div></div>`
 + (isotopes.length?`<div class="isos"><small>izotop</small>${isotopes.map(i=>`<button data-i="${i.A}" class="${i.A===A?'on':''}" title="${i.ab?i.ab+' %':'promieniotwórczy, T½ '+i.hl}${i.abundanceProvenance?' · CIAAW 2024':' · lokalny rekord bez weryfikacji'}"><sup>${i.A}</sup>${sym}${i.ab?'':'*'}</button>`).join('')}<small>* promieniotwórczy</small></div>`:'');
 $('hud').querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{isoA=+b.dataset.i;hud();if(still)bohr(0)})}
function isoBar(){const{e}=state(),isotopes=isotopeData(e),tp=isotopes.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A=isoA||(tp?tp.A:0);$('isobar').innerHTML=isotopes.length?'<span>izotop</span>'+isotopes.map(i=>`<button data-i="${i.A}" class="${i.A===A?'on':''}" title="${i.ab?i.ab+' %':'promieniotwórczy, T½ '+i.hl}${i.abundanceProvenance?' · CIAAW 2024':' · lokalny rekord bez weryfikacji'}"><sup>${i.A}</sup>${sym}${i.ab?'':'*'}</button>`).join(''):'';$('isobar').querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{isoA=+b.dataset.i;hud();zt=zNuc;});}
const _hud=hud;hud=function(){_hud();isoBar();};
$('fs').onclick=()=>{const st=document.querySelector('.atom-stage');(document.fullscreenElement?document.exitFullscreen():st.requestFullscreen&&st.requestFullscreen())};
$('bohr').addEventListener('click',ev=>{
 const cv=$('bohr'),r=cv.getBoundingClientRect(),W=760,mx=(ev.clientX-r.left)*W/r.width,my=(ev.clientY-r.top)*W/r.height,
  G=GEO,fo=$('focus'),{e,c}=state(),d=Math.hypot(mx-W/2,my-W/2)/zm;
 if(!G.rings)return;
 fo.classList.add('pick');
 const inLens=G.inset&&Math.hypot(mx-G.ix,my-G.iy)<=G.ir;
 if(inLens||d<=Math.min(G.Rn+6,G.R0-8)){G.sel=null;
  fo.innerHTML=`<b>Jądro</b>: ${e.z} p⁺ + ${G.N} n⁰ · A = ${G.A} · N/Z = ${(G.N/e.z).toFixed(2)}`;return}
 let best=null,bd=1e9;G.rings.forEach(q=>{const t=Math.abs(d-q.R);if(t<bd){bd=t;best=q}});
 if(best&&bd<=G.step/2+4){const b=best.n,sub=ORDER.filter(k=>c[k]&&+k[0]===b),cnt=sub.reduce((a,k)=>a+c[k],0),last=G.rings[G.rings.length-1].n;
  G.sel=b;
  const rs=new Set(sub.map(k=>role(c,k)));
  fo.innerHTML=`<b>Powłoka ${SH[b-1]}</b> (n=${b}): ${cnt}/${2*b*b} e⁻ · ${sub.map(k=>`<span style="color:${COL[role(c,k)]};font-weight:600">${k}${sup(c[k])}</span>`).join(' ')} · ${rs.has('v')?'walencyjna':rs.has('r')?'rdzeń + aktywne d/f':'rdzeniowa'}`;
 }else{G.sel=null;fo.innerHTML='Kliknij obręcz powłoki, jądro albo lupę jądra.'}
});
function chgHtml(){const{e,c0,c}=state();const cfgStr=q=>ORDER.filter(k=>q[k]).map(k=>k+sup(q[k])).join(' ');if(!chg)return'<div class="wide sub">Wybierz ładunek jonu (przyciski ładunku przy modelu atomu). Tu zobaczysz, które elektrony znikają, ile to kosztuje energii i jak zmienia się spin całkowity.</div>';
 const ks=ORDER.filter(k=>c0[k]||c[k]),unp=q=>{let u=0;ORDER.forEach(k=>{if(q[k]){const nb=CAP[k[1]]/2;u+=q[k]<=nb?q[k]:2*nb-q[k]}});return u},ms=u=>Math.sqrt(u*(u+2)).toFixed(2),u0=unp(c0),u1=unp(c);
 let rows=ks.map(k=>{const a=c0[k]||0,b=c[k]||0,keep=Math.min(a,b);return `<div class="cr"><span>${k}</span><div class="eb">${'<i></i>'.repeat(keep)}${'<i class="l"></i>'.repeat(Math.max(0,a-b))}${'<i class="g"></i>'.repeat(Math.max(0,b-a))}</div><span>${a} → ${b}</span></div>`}).join('');
 let cur=c0,steps='';const ie=e.ie||[];if(chg>0)for(let i=0;i<chg;i++){const k=srt(cur)[0];cur=strip(cur,1);steps+=`<div class="dr"><span>I${i+1}: odrywa z ${k}</span><b>${ie[i]!=null?ie[i]+' <u>kJ/mol</u>':'—'}</b></div>`}
 const tot=chg>0?ie.slice(0,chg).reduce((a,b)=>a+b,0):null,ion=e.ion&&e.ion[Math.abs(chg)+(chg>0?'+':'-')];
 return `<div class="wide"><h5>${sym} → ${sym}${chg>0?sup(chg)+'⁺':sup(-chg)+'⁻'}</h5><div class="nt">atom: <b>${cfgStr(c0)}</b><br>jon: <b>${cfgStr(c)}</b></div></div>
 <div><h5>Elektrony w podpowłokach</h5>${rows}<div class="nt">niebieskie = zostają, <b style="color:#e0674a">puste czerwone = tracone</b>, zielone = dodane. ${chg>0?'Najpierw odrywane są elektrony o największym n, tu '+srt(c0)[0]+(c0[(+srt(c0)[0][0]-1)+'d']&&srt(c0)[0][1]==='s'?', mimo że '+(+srt(c0)[0][0]-1)+'d zapełnia się później niż '+srt(c0)[0]+'.':'.'):''}</div></div>
 <div><h5>Koszt energetyczny i spin</h5>${steps}${tot!=null?`<div class="dr"><span>suma</span><b>${tot.toFixed(1)} <u>kJ/mol</u> · ${(tot/96.485).toFixed(1)} <u>eV</u></b></div>`:''}${chg<0&&e.ea!=null?`<div class="dr"><span>powinowactwo e⁻</span><b>${e.ea} <u>kJ/mol</u></b></div>`:''}
 <div class="dr"><span>niesparowane e⁻</span><b>${u0} → ${u1}</b></div><div class="dr"><span>μ spinowy</span><b>${ms(u0)} → ${ms(u1)} <u>μB</u></b></div>${ion&&e.ar?`<div class="dr"><span>promień</span><b>${e.ar} → ${ion} <u>pm</u> (×${(ion/e.ar).toFixed(2)})</b></div>`:''}
 <div class="nt">${u1===5?'<b>d⁵</b>: podpowłoka półzapełniona, maksymalna liczba niesparowanych spinów, stąd trwałość tego jonu. ':''}Wzór μ = √(n(n+2)) dotyczy samego spinu.</div></div>`}
function extra(){$('chgp').innerHTML=chgHtml();$('mt').innerHTML=matl();hud();$('ds').innerHTML=datasheet();
  mist(); fact(); caps(); elec();
  $('sl').innerHTML = slater();
  $('nt').innerHTML = notes();
  cmpUI();
  if(still) vw();
}
 
