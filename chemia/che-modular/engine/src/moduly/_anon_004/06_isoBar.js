
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
 
const LSYM = {s:0, p:1, d:2, f:3};
let hintSel = 'rule';
const nl = k => +k[0] + LSYM[k[1]];
const SL = k => `<a class="sl" data-sk="${k}">${k}</a>`;
const orbPl = n => n === 1 ? 'orbital' : n < 5 ? 'orbitale' : 'orbitali';
const cfgS = c => ORDER.filter(k => c[k]).map(k => k + sup(c[k])).join(' ');
const cfgByShell = c => Object.keys(c).sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c[k])).join(' ');
const unpairedN = c => { let u = 0; ORDER.forEach(k => { if(c[k]){ const nb = CAP[k[1]] / 2; u += c[k] <= nb ? c[k] : 2 * nb - c[k]; } }); return u; };
const byRole = c => { const b = {c:0, v:0, r:0}; ORDER.forEach(k => { if(c[k]) b[role(c, k)] += c[k]; }); return b; };
const ionTag = () => chg ? (chg > 0 ? (chg > 1 ? sup(chg) : '') + '⁺' : (chg < -1 ? sup(-chg) : '') + '⁻') : '';
function coreNote(z, c0){
  const ng = [86, 54, 36, 18, 10, 2].find(q => q < z); if(!ng) return '';
  const nc = fill(ng), rest = Object.keys(c0).filter(k => (c0[k] || 0) - (nc[k] || 0) > 0)
    .sort((a, b) => a[0] - b[0] || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1])).map(k => k + sup(c0[k] - (nc[k] || 0))).join(' ');
  return `[${SYM[ng - 1]}] ${rest}`;
}
function hctx(){
  const x = state(), keys = Object.keys(x.c);
  x.N = keys.length ? Math.max(...keys.map(k => +k[0])) : 0;
  x.b = byRole(x.c); x.u = unpairedN(x.c);
  x.last = [...ORDER].reverse().find(k => x.c[k]) || '';
  return x;
}

const HINTS = [
 {id:'rule', t:'Reguła n + l', f:x =>
  `<b>Skąd wiadomo, co zapełnić jako następne?</b> Każdej podpowłoce przypisz liczbę <b>n + l</b> (l: s = 0, p = 1, d = 2, f = 3). Elektrony zajmują podpowłoki od najmniejszej sumy do największej, a gdy sumy są równe, pierwsza jest ta z mniejszym n. Stąd ${SL('4s')} (4) wchodzi przed ${SL('3d')} (5), a ${SL('6s')} (6) przed ${SL('4f')} (7).`
  + `<br><small>Sposób na zapamiętanie: ułóż podpowłoki w rzędach według n (1s / 2s 2p / 3s 3p 3d / 4s 4p 4d 4f …) i czytaj po skosach. Jeden skos to jedna wartość n + l.</small>`
  + (x.last ? `<br>Dla ${sym}${ionTag()}: ostatnia zapełniana podpowłoka to ${SL(x.last)} (${x.c[x.last]}/${CAP[x.last[1]]}, n + l = ${nl(x.last)}), czyli blok ${x.last[1]}.` : '')},
 {id:'bond', t:'Które e⁻ się wiążą?', f:x => {
  const b = x.b;
  return `<b>Do wiązań mogą posłużyć:</b> <span style="color:${COL.v}">elektrony walencyjne</span> (cała zewnętrzna powłoka, n = ${x.N}) oraz <span style="color:${COL.r}">niedokończone podpowłoki d (n−1) i f (n−2)</span>. <span style="color:${COL.c}">Rdzeń</span> leży głęboko i zwykle pozostaje nietknięty. Na modelu każdy elektron ma kolor z jednej z tych trzech grup.`
  + `<br>Dla ${sym}${ionTag()}: walencyjnych ${b.v}, d/f ${b.r}, rdzeń ${b.c}. <b>Do dyspozycji ${b.v + b.r} z ${b.c + b.v + b.r} e⁻.</b>`
  + `<br><small><b>Konwencja tej aplikacji</b> (nie prawo fizyki): pełne d¹⁰ liczymy jako aktywne w grupie 11 (Cu, Ag, Au tworzą np. Cu²⁺, Au³⁺), a jako rdzeń w grupie 12 (Zn, Cd, Hg).</small>`; }},
 {id:'shells', t:'Jak czytać powłoki', f:x =>
  `Powłoki K, L, M, N… to n = 1, 2, 3, 4… i mieszczą najwyżej <b>2n²</b> elektronów (2, 8, 18, 32…). Podpis „M · 8/18” znaczy: w tej powłoce jest 8 elektronów z 18 możliwych. Pomarańczowa obręcz to powłoka walencyjna. Kliknij dowolną obręcz, a zobaczysz jej podpowłoki.`
  + (x.N ? `<br>${sym}${ionTag()} ma ${x.N} ${x.N === 1 ? 'powłokę' : x.N < 5 ? 'powłoki' : 'powłok'} (dla atomu to numer okresu).` : '')},
 {id:'hund', t:'Pauli i Hund', f:x =>
  `<b>Zakaz Pauliego:</b> w jednym orbitalu są najwyżej 2 elektrony i mają przeciwne spiny. <b>Reguła Hunda:</b> w podpowłoce z kilkoma orbitalami (p, d, f) elektrony najpierw zajmują każdy orbital pojedynczo, z równoległymi spinami, i dopiero potem łączą się w pary. Dlatego azot ma 3 niesparowane elektrony na 2p, a tlen tylko 2.`
  + `<br>Dla ${sym}${ionTag()}: niesparowanych <b>${x.u}</b> → ${x.u ? 'paramagnetyk (wciągany do pola magnetycznego)' : 'diamagnetyk (lekko wypychany z pola)'}.`},
 {id:'exc', t:'⚠ Wyjątek od reguły', when:x => chg === 0 && !!EXC[x.e.z], f:x => {
  const z = x.e.z, raw = cfgByShell(fill(z, true)), real = cfgByShell(x.c0);
  const why = [24, 29, 41, 42, 44, 45, 46, 47, 78, 79].includes(z)
    ? 'Poziomy ns i (n−1)d leżą bardzo blisko siebie, a podpowłoka d zapełniona lub zapełniona do połowy daje niższą energię. Opłaca się więc przenieść elektron z s do d.'
    : z === 103 ? 'Przy tak dużym Z efekty relatywistyczne obniżają energię 7p, więc elektron trafia tam, a nie do 6d.'
    : 'Poziomy 4f/5f i 5d/6d są prawie równe energetycznie, więc elektron ląduje w d, gdy atom ma wtedy niższą energię (np. półzapełnione f⁷ w Gd).';
  return `<b>${x.e.s} nie trzyma się prostej reguły n + l.</b><br>Według reguły: ${raw}<br>W rzeczywistości: <b>${real}</b><br>${why}`; }},
 {id:'ion', t:'Jony', f:x =>
  `<b>Kation:</b> elektrony odchodzą z powłoki o największym n, a nie z podpowłoki zapełnianej jako ostatnia. Dlatego Fe → Fe²⁺ traci 4s², choć 3d zapełnia się później niż 4s. <b>Anion:</b> nowe elektrony zajmują najbliższą wolną podpowłokę według n + l (Cl → Cl⁻ dopełnia 3p).`
  + (chg ? `<br>Teraz: ${sym}${ionTag()} = <b>${cfgByShell(x.c) || 'brak elektronów'}</b>` : '<br><small>Wybierz ładunek jonu przy modelu atomu, a zobaczysz to na żywo.</small>')},
 {id:'write', t:'Jak zapisać konfigurację', f:x =>
  `Zapełniamy według n + l, ale w zapisie zwykle porządkujemy według n (3d przed 4s).`
  + `<br>kolejność zapełniania: <span class="mono">${cfgS(x.c) || '—'}</span>`
  + `<br>kolejność powłok: <span class="mono"><b>${cfgByShell(x.c) || '—'}</b></span>`
  + (chg === 0 && coreNote(x.e.z, x.c0) ? `<br>zapis skrócony: <span class="mono"><b>${coreNote(x.e.z, x.c0)}</b></span>` : '')},
 {id:'pos', t:'Konfiguracja → tablica', f:x =>
  `<b>Okres</b> to największe n w konfiguracji. <b>Blok</b> to typ ostatnio zapełnianej podpowłoki (s, p, d lub f). <b>Grupa:</b> w bloku s liczba e⁻ na ns, w bloku p to 10 + e⁻ na ns i np, w bloku d to e⁻ na ns plus (n−1)d.`
  + `<br>${sym}: okres ${x.e.p || x.N}, blok ${x.e.b}, ${gtxt(x.e)}.${x.e.z === 2 ? ' <small>(hel to wyjątek: blok s, ale grupa 18)</small>' : ''}`},
 {id:'lens', t:'Lupa jądra', f:x =>
  `Jądro jest około 10⁴–10⁵ razy mniejsze od atomu, więc w widoku powłok pokazuje je lupa w lewym dolnym rogu. Kliknij ją, by zobaczyć dane jądra. Czerwone kule to protony (Z = ${x.e.z}), szare to neutrony (N = A − Z). Przyciski izotopów nad sceną zmieniają N, a pomarańczowa obręcz oznacza neutron ponad najczęstszy izotop. Przycisk „do jądra” lub dwuklik przybliża samo jądro.`}
];

function subHint(k, x){
  const n = +k[0], l = LSYM[k[1]], sum = n + l, cap = CAP[k[1]], have = x.c[k] || 0, i = ORDER.indexOf(k);
  const peers = ORDER.filter(q => q !== k && nl(q) === sum);
  let t = `<b>${k}</b>: n + l = ${n} + ${l} = <b>${sum}</b> (dla ${k[1]} l = ${l}). Mieści ${cap} e⁻ (${cap / 2} ${orbPl(cap / 2)}).`;
  t += `<br>W ${sym}${ionTag()}: ${have ? `<b>${have}/${cap}</b> — ${have === cap ? 'zapełniona' : 'częściowo zapełniona'}, rola: ${{c:'rdzeń', v:'walencyjna', r:'d/f aktywna'}[role(x.c, k)]}` : 'pusta'}.`;
  t += `<br>Kolejność: ${i ? SL(ORDER[i - 1]) : '—'} → <b>${k}</b> → ${i < ORDER.length - 1 ? SL(ORDER[i + 1]) : '—'}`;
  t += peers.length
    ? `<br>Tę samą sumę mają: ${peers.map(q => SL(q) + ' (' + (+q[0] < n ? 'wcześniej' : 'później') + ')').join(', ')}. Przy remisie pierwsze jest mniejsze n.`
    : '<br>Żadna inna podpowłoka nie ma takiej sumy.';
  if(l === 2) t += `<br><small>${SL((n + 1) + 's')} zapełnia się przed ${k}, dlatego blok d zaczyna się dopiero w okresie ${n + 1}.</small>`;
  if(l === 3) t += `<br><small>${SL((n + 2) + 's')} zapełnia się przed ${k}, dlatego blok f zaczyna się dopiero w okresie ${n + 2}.</small>`;
  return t;
}

function madel(){
  const { e, c0 } = state(), c = viewC(), x = hctx();
  x.last = buildN == null ? x.last : ([...ORDER].reverse().find(k => c[k]) || '');
  const raw = fill(e.z, true);
  const diff = chg === 0 ? new Set(ORDER.filter(k => (raw[k] || 0) !== (c0[k] || 0))) : new Set();
  $('madrow').innerHTML = ORDER.map((k, i) => {
    const have = c[k] || 0, cap = CAP[k[1]], st = have ? (have === cap ? 'f' : 'p') : 'e', r = have ? role(state().c, k) : '';
    return (i ? '<span class="sba">→</span>' : '')
      + `<button type="button" class="sbc ${st}${k === x.last ? ' last' : ''}${diff.has(k) ? ' x' : ''}${hintSel === 'sub:' + k ? ' sel' : ''}" data-sk="${k}" style="--fr:${have / cap * 100}%${r ? ';--cc:' + COL[r] : ''}" title="${k}: n + l = ${+k[0]} + ${LSYM[k[1]]} = ${nl(k)}${diff.has(k) ? ' · wyjątek od reguły' : ''}"><b>${k}</b><em>${have}/${cap}</em></button>`;
  }).join('');
}

function hints(){
  GEO.hlSel = hintSel.startsWith('sub:') ? hintSel.slice(4) : null; GEO.hl = GEO.hlSel;
  if(typeof still !== 'undefined' && still && sm === 'b') bohr(0);
  madel();
  const x = hctx(), list = HINTS.filter(h => !h.when || h.when(x));
  if(!hintSel.startsWith('sub:') && !list.some(h => h.id === hintSel)) hintSel = 'rule';
  $('hchips').innerHTML = list.map(h => `<button type="button" class="hc${hintSel === h.id ? ' on' : ''}" data-h="${h.id}">${h.t}</button>`).join('');
  $('hbody').innerHTML = hintSel.startsWith('sub:') ? subHint(hintSel.slice(4), x) : list.find(h => h.id === hintSel).f(x);
}
function buildStop(){ if(buildT) clearInterval(buildT); buildT = null; buildN = null; GEO.bn = null; const b = $('bld'); if(b) b.textContent = '▶ zbuduj atom'; }
function buildStep(){
  const { c } = state(), tot = Object.values(c).reduce((a, b) => a + b, 0);
  if(buildN == null) buildN = 0;
  buildN++;
  const cur = truncCfg(c, buildN), key = [...ORDER].reverse().find(k => cur[k]);
  GEO.hl = key; GEO.bn = buildN + '/' + tot;
  madel(); if(still) bohr(0);
  if(buildN >= tot){ clearInterval(buildT); buildT = null; $('bld').textContent = '↺ jeszcze raz';
    setTimeout(() => { if(buildN >= tot && !buildT){ buildN = null; GEO.bn = null; hints(); } }, 1600); }
}
$('bld').addEventListener('click', () => {
  if(sm !== 'b') smode('b');
  if(buildT){ buildStop(); hints(); return; }
  const { c } = state(), tot = Object.values(c).reduce((a, b) => a + b, 0);
  if(!tot) return;
  buildN = 0; $('bld').textContent = '■ stop';
  buildT = setInterval(buildStep, Math.max(110, Math.min(450, 7000 / tot)));
});
$('madrow').addEventListener('mouseover', ev => { const b = ev.target.closest('[data-sk]'); if(b && !buildT){ GEO.hl = b.dataset.sk; if(still) bohr(0); } });
$('madrow').addEventListener('mouseleave', () => { if(buildT) return; GEO.hl = GEO.hlSel || null; if(still) bohr(0); });
$('hintbar').addEventListener('click', ev => {
  const b = ev.target.closest('[data-sk],[data-h]'); if(!b) return;
  hintSel = b.dataset.sk ? (hintSel === 'sub:' + b.dataset.sk && b.closest('#madrow') ? 'rule' : 'sub:' + b.dataset.sk) : b.dataset.h;
  hints();
});

function all(){
  GEO.sel=null; buildStop();
  head();
  $('lev').innerHTML = levels();
  cloud();
  $('ie').innerHTML = ie();
  $('rad').innerHTML = rad();
  $('radar').innerHTML = radar();
  $('ph').innerHTML = ph();
  $('iso').innerHTML = iso();
  $('ox').innerHTML = ox();
  $('redox').innerHTML = redox();
  if(still) bohr(0);
  extra();
  renderElementList();
  renderMiniPT();
  fact();
  hints();
}

(function(){
  const C = window.CHE;
  if(!C || !C.DATA){
    window.__CHE_LAB_BRIDGE__ = { active:false, reason:'CHE not loaded' };
    return;
  }
  const D = C.DATA;
  const EL = D.ELEMENTS_118 || [];
  const AP = D.ATOMIC_PROPS || {};
  const ISO = D.ISOTOPES || {};
  const FIE = D.FIRST_IONIZATION_ENERGY || {};
  const META = D.ATOM_META || {};
  const bySym = {};
  EL.forEach(e => { bySym[e.s] = e; });

  const TMAP = {
    metal:'metal', nonmetal:'niemetal', metalloid:'półmetal',
    halogen:'fluorowiec', noble:'gaz szlachetny',
    lanthanide:'lantanowiec', actinide:'aktynowiec'
  };
  const STMAP = { gas:'gaz', solid:'ciało stałe', liquid:'ciecz', plasma:'plazma' };

  function pctAb(v){
    if(v == null || v === '') return 0;
    const n = Number(v);
    if(!Number.isFinite(n)) return 0;
    
    return n > 0 && n <= 1.0000001 ? +(n * 100).toPrecision(6) : n;
  }

  function mapIso(rawIso){
    const out = [];
    if(!rawIso) return out;
    if(Array.isArray(rawIso)){
      rawIso.forEach(x=>{
        if(!x) return;
        const A = x.A != null ? x.A : (x.massNumber != null ? x.massNumber : x.a);
        if(A == null) return;
        const ab = pctAb(x.ab != null ? x.ab : x.abundance);
        const hl = x.hl || x.halfLife || x.half_life || undefined;
        const item = { A: +A, ab };
        if(hl) item.hl = hl;
        if(x.decayMode) item.dm = x.decayMode;
        if(x.stable === false && !hl) item.hl = item.hl || '?';
        out.push(item);
      });
    } else if(typeof rawIso === 'object'){
      Object.keys(rawIso).forEach(A=>{
        const x = rawIso[A];
        if(x && typeof x === 'object')
          out.push({ A:+A, ab:pctAb(x.ab != null ? x.ab : x.abundance), hl:x.hl||x.halfLife||undefined });
        else if(typeof x === 'number')
          out.push({ A:+A, ab:pctAb(x) });
      });
    }
    out.sort((a,b)=>a.A-b.A);
    return out;
  }

  function engProps(sym){
    const e = bySym[sym];
    const p = AP[sym] || {};
    const meta = META[sym] || {};
    if(!e && !Object.keys(p).length && !Object.keys(meta).length) return null;

    const ion = {};
    if(p.ionicRadius){
      Object.keys(p.ionicRadius).forEach(k=>{
        const v = p.ionicRadius[k];
        if(v != null) ion[k] = v;
      });
    }

    let ie = Array.isArray(p.ionizationEnergies) ? p.ionizationEnergies.slice() : null;
    if((!ie || !ie.length) && FIE[sym] != null){
      const v = FIE[sym];
      ie = Array.isArray(v) ? v.slice() : (typeof v === 'object' && v.value != null ? [v.value] : [v]);
    }

    const isoList = mapIso(ISO[sym]);

    const stRaw = p.stateSTP || null;
    const st = stRaw ? (STMAP[String(stRaw).toLowerCase()] || stRaw) : undefined;

    return {
      z: e ? e.z : (meta.Z || null),
      s: sym,
      n: e ? e.n : (meta.name || sym),
      m: e && e.mass != null ? e.mass : (meta.mass != null ? meta.mass : null),
      b: e ? e.block : (meta.block || null),
      g: e ? e.g : (meta.group != null ? meta.group : null),
      p: e ? e.p : (meta.period != null ? meta.period : null),
      t: e ? (TMAP[e.t] || e.t) : null,
      en: (e && e.en != null) ? e.en : (p.electronegativityPauling != null ? p.electronegativityPauling : null),
      ar: p.atomicRadius != null ? p.atomicRadius : null,
      cr: p.covalentRadius != null ? p.covalentRadius : null,
      vdw: p.vdwRadius != null ? p.vdwRadius : null,
      ion: Object.keys(ion).length ? ion : undefined,
      ea: p.electronAffinity != null ? p.electronAffinity : null,
      ie: ie && ie.length ? ie.map(Number) : undefined,
      ox: Array.isArray(p.oxidationStates) ? p.oxidationStates.slice() : undefined,
      pol: p.polarizability != null ? p.polarizability : null,
      mp: p.meltingPoint != null ? p.meltingPoint : null,
      bp: p.boilingPoint != null ? p.boilingPoint : null,
      rho: p.density != null ? p.density : null,
      st: st,
      cs: p.crystalStructure || undefined,
      iso: isoList.length ? isoList : undefined,
      _src: 'CHE'
    };
  }

  function mergePreferLocal(local, eng){
    if(!eng) return local;
    if(!local) return Object.assign({}, eng);
    const out = Object.assign({}, eng, local);
    
    ['m','en','ar','cr','vdw','ea','pol','mp','bp','rho','st','cs','b','g','p','t','n','z'].forEach(k=>{
      if(local[k] == null || local[k] === '') out[k] = eng[k];
      else out[k] = local[k];
    });
    if((!local.ie || !local.ie.length) && eng.ie) out.ie = eng.ie;
    if((!local.ox || !local.ox.length) && eng.ox) out.ox = eng.ox;
    if((!local.ion || !Object.keys(local.ion).length) && eng.ion) out.ion = eng.ion;
    
    if((!local.iso || !local.iso.length) && eng.iso) out.iso = eng.iso;
    else if(local.iso && eng.iso && eng.iso.length > local.iso.length) out.iso = eng.iso;
    out.f = local.f; 
    out._src = local.f ? 'CHE+local' : 'CHE';
    return out;
  }

  let filled = 0, enrichedDB = 0;

  if(typeof ENG !== 'undefined'){
    EL.forEach(e=>{
      const props = engProps(e.s);
      if(!props) return;
      ENG[e.s] = mergePreferLocal(ENG[e.s], props);
      filled++;
    });
  }

  if(typeof DB !== 'undefined'){
    
    Object.keys(DB).forEach(sym=>{
      const props = engProps(sym);
      if(!props) return;
      DB[sym] = mergePreferLocal(DB[sym], props);
      enrichedDB++;
    });
    
    EL.forEach(e=>{
      if(DB[e.s]) return;
      const props = engProps(e.s);
      if(!props) return;
      
      const rich = props.ie || props.ar || props.iso || props.mp != null;
      if(rich){
        DB[e.s] = Object.assign({ f: [] }, props);
        enrichedDB++;
      }
    });
  }

  const _fill = typeof fill === 'function' ? fill : null;
  const cfgFromAtom = (symbol, charge)=>{
    try{
      if(!C.ATOM || !C.ATOM.build) return null;
      const a = C.ATOM.build(symbol, charge || 0);
      if(!a || !a.subshells) return null;
      const cfg = {};
      a.subshells.forEach(ss=>{ if(ss.count) cfg[ss.name] = ss.count; });
      return cfg;
    }catch(_){ return null; }
  };

  if(_fill && C.ATOM && C.ATOM.build){
    window.fill = function(Z, raw){
      if(raw) return _fill(Z, true);
      try{
        const s = (typeof SYM !== 'undefined' && SYM[Z-1]) ? SYM[Z-1] : null;
        if(s){
          const cfg = cfgFromAtom(s, 0);
          if(cfg && Object.keys(cfg).length) return cfg;
        }
      }catch(_){}
      return _fill(Z, raw);
    };
  }

  if(typeof state === 'function'){
    const _state = state;
    window.state = function(){
      const base = _state();
      try{
        if(!C.ATOM || !C.ATOM.build) return base;
        const s = (base.e && (base.e.s || sym)) || sym;
        const ch = typeof chg !== 'undefined' ? chg : 0;
        const c0 = cfgFromAtom(s, 0) || base.c0;
        let c = c0;
        if(ch !== 0){
          const ci = cfgFromAtom(s, ch);
          if(ci) c = ci;
          else {
            
            if(ch > 0 && typeof strip === 'function') c = strip(c0, ch);
            if(ch < 0 && typeof add === 'function') c = add(c0, -ch);
          }
        }
        return { e: base.e, c0, c };
      }catch(_){ return base; }
    };
  }

  const nucCache = {};
  function nucleusInfo(symbol, A){
    const key = symbol + ':' + (A || '');
    if(nucCache[key]) return nucCache[key];
    try{
      if(C.NUCLEUS && C.NUCLEUS.build){
        const n = C.NUCLEUS.build(symbol, A);
        if(n){
          nucCache[key] = {
            A: n.A, N: n.N, Z: n.Z,
            B: n.bindingEnergyMeV,
            BpA: n.bindingEnergyPerNucleon,
            r: n.radiusFm,
            stab: n.stability
          };
          return nucCache[key];
        }
      }
    }catch(_){}
    return null;
  }
  window.__CHE_NUCLEUS__ = nucleusInfo;

  if(typeof DB !== 'undefined' && C.NUCLEUS){
    Object.keys(DB).forEach(sym=>{
      const d = DB[sym];
      if(d.f && d.f.length) return;
      const n = nucleusInfo(sym);
      if(n && n.BpA != null){
        d.f = ['Energia wiązania na nukleon (model): ok. ' + Number(n.BpA).toFixed(2) + ' MeV (CHE.NUCLEUS).'];
      }
    });
  }

  let e8 = false;
  try{ e8 = !!(C.LEVELS && C.LEVELS.E8 && C.EDUCATION && C.EDUCATION.E8); }catch(_){}

  window.__CHE_LAB_BRIDGE__ = {
    active: true,
    version: (C.ENGINE && C.ENGINE.version) || 'CHE',
    dataVersion: (C.ENGINE && C.ENGINE.dataVersion) || null,
    elements: EL.length,
    atomicProps: Object.keys(AP).length,
    isotopes: Object.keys(ISO).length,
    fie: Object.keys(FIE).length,
    engFilled: filled,
    dbEnriched: enrichedDB,
    atomApi: !!(C.ATOM && C.ATOM.build),
    nucleusApi: !!(C.NUCLEUS && C.NUCLEUS.build),
    e8: e8,
    cfgSample: (function(){
      try{
        const a = C.ATOM && C.ATOM.build && C.ATOM.build('Fe', 0);
        return a && a.configFull;
      }catch(_){ return null; }
    })()
  };
  try{ console.info('[CHE↔Lab bridge v052]', window.__CHE_LAB_BRIDGE__); }catch(_){}
})();