/* =====================================================================
   GIGA v0.35 — wspólne narzędzia dydaktyczne / migracja lokalnych modeli
   Zasada: CHE.DATA + CHE.CHEM + CHE.REACTION są źródłem obliczeń;
   warstwa wizualna pozostaje osobna. Treści lekcyjne i ograniczenia modelu
   są zachowane celowo, ponieważ pełnią funkcję dydaktyczną.
   ===================================================================== */
CHE.TOOLS = (() => {
  const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
  const indicator=(name,pH)=>{
    const r=(CHE.DATA.INDICATOR_RANGES||[]).find(x=>x.name===name);
    if(!r) return {name,phase:'brak danych'};
    if(pH<r.lo) return {name,phase:'poniżej zakresu',position:'low',range:[r.lo,r.hi]};
    if(pH>r.hi) return {name,phase:'powyżej zakresu',position:'high',range:[r.lo,r.hi]};
    return {name,phase:'w zakresie zmiany',position:'transition',range:[r.lo,r.hi]};
  };
  function pHFor(type,C,Ka){
    return type==='strongAcid'?CHE.CHEM.strongAcid(C):type==='strongBase'?CHE.CHEM.strongBase(C):CHE.CHEM.weakAcid(C,Ka);
  }
  function acidProfile(id,C){
    const _AS=Object.values(CHE.DATA.ACID_SYSTEMS||{}); const a=_AS.find(x=>x.id===id) || _AS[0];
    if(!a)return null;
    const ks=(a.pKa||[]).map(p=>Math.pow(10,-p));
    const r=a.strong&&ks.length===1?CHE.CHEM.strongAcid(C):ks.length===1?CHE.CHEM.weakAcid(C,ks[0]):CHE.EQUILIBRIUM.polyproticPH(C,ks);
    const al=ks.length===1?(a.strong?[1]:[1-r.alpha,r.alpha]):r.alpha;
    return {id:a.id,species:a.species,C,pH:r.pH,H:r.H,alpha:r.alpha??1,forms:al,pKa:a.pKa||[],strong:!!a.strong};
  }
  function envLime(pH,V){
    const H=CHE.CHEM.HFromPH(pH), volume=Number(V), M=CHE.CHEM.molarMass('CaCO3');
    const nH=H*volume, nCaCO3=.5*nH;
    return {pH,volume,H,nH,nCaCO3,molarMassCaCO3:M,massG:nCaCO3*M};
  }
  function reaction(id){return CHE.REACTION.get(id);}
  return {indicator,pHFor,acidProfile,envLime,reaction,clamp};
})();

/* --- Migracja 1: Kalkulator kwasu — jeden model dla pH i form --- */
defineView('acid-calculator', {
  title:'Kalkulator kwasu — pH, dysocjacja, formy · wspólny silnik', tag:'VIZ',
  hint:'Wybierz kwas i stężenie. Wynik pochodzi z CHE.TOOLS → CHE.CHEM / CHE.EQUILIBRIUM.',
  foot:'Warstwa dydaktyczna pozostaje: pKa, pH, udział form i ograniczenia modelu są objaśniane razem.',
  build(host){
    host.innerHTML='';
    const AC=Object.values(CHE.DATA.ACID_SYSTEMS||{});
    let ai=Math.min(6,Math.max(0,AC.length-1)), lc=-1;
    const row=document.createElement('div');row.className='r';
    const cRow=document.createElement('div');cRow.className='r';
    cRow.innerHTML='<label>stężenie</label><input type="range" min="-4" max="0" step="0.05" value="-1"><b style="font:700 .85rem var(--mono);min-width:100px;text-align:right"></b>';
    const out=document.createElement('div');out.className='note';
    const stage=document.createElement('div');stage.style.marginTop='10px';
    host.append(row,cRow,out,stage);
    AC.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.textContent=a.id;b.classList.toggle('on',i===ai);b.onclick=()=>{ai=i;row.querySelectorAll('button').forEach((x,j)=>x.classList.toggle('on',j===i));render()};row.appendChild(b)});
    const inp=cRow.querySelector('input'),cout=cRow.querySelector('b');
    inp.oninput=e=>{lc=+e.target.value;render()};
    function render(){
      const a=AC[ai],C=Math.pow(10,lc),r=CHE.TOOLS.acidProfile(a.id,C); if(!r)return;
      cout.textContent=(C>=.01?C.toFixed(2):C.toExponential(1))+' M';
      out.innerHTML=`<b>${r.species}</b> · pH = <b>${r.pH.toFixed(2)}</b> · [H₃O⁺] = ${r.H.toExponential(2)} M · α = ${(r.alpha*100).toFixed(2)}%<br><span class="muted">Wspólny łańcuch: Ka/pKa → równowaga → [H₃O⁺] → pH. Dla układów wieloprotonowych używany jest centralny solver.</span>`;
      const svg=V.makeSvg(stage,[900,250]),E=V.el;
      r.forms.forEach((v,k)=>{const bw=700/Math.max(1,r.forms.length),x=100+k*bw;svg.appendChild(E('rect',{x,y:205-v*160,width:bw-14,height:v*160,rx:8,fill:'var(--accent)',opacity:.72}));svg.appendChild(E('text',{x:x+(bw-14)/2,y:225,'text-anchor':'middle','font-size':11,fill:'var(--text)'},(a.species||a.id)+(r.forms.length>1?' · forma '+(k+1):'')));svg.appendChild(E('text',{x:x+(bw-14)/2,y:195-v*160,'text-anchor':'middle','font-size':11,'font-weight':800,fill:'var(--text)'},(v*100).toFixed(1)+'%'));});
      svg.appendChild(E('text',{x:450,y:25,'text-anchor':'middle','font-size':13,'font-weight':800,fill:'var(--text)'},'Udział form — wynik centralnego modelu równowagi'));
    }
    render();
  }
});

/* --- Migracja 3: laboratorium wskaźników — bez lokalnej tabeli zakresów --- */
defineView('ind-lab', {
  title:'Laboratorium wskaźników — próbka, wskaźnik, wniosek · wspólne dane',tag:'E8',
  hint:'Przewiduj barwę na podstawie centralnego pH i zakresu wskaźnika.',
  foot:'Treść doświadczenia pozostaje dydaktyczna; liczbowy zakres wskaźnika jest wspólny dla całego LAB.',
  build(host){
    host.innerHTML='';let pH=1.0,ind=CHE.COLORS.list('indicator')[0].name;
    const samples=[['HCl',1],['woda',7],['NaOH',13],['CH₃COOH',3]];
    const row=document.createElement('div');row.className='r';const out=document.createElement('div');out.className='note';host.append(row,out);
    samples.forEach(([n,p])=>{const b=document.createElement('button');b.textContent=n;b.onclick=()=>{pH=p;render()};row.appendChild(b)});
    CHE.COLORS.list('indicator').forEach(r=>{const b=document.createElement('button');b.textContent=r.name;b.onclick=()=>{ind=r.name;render()};row.appendChild(b)});
    function render(){const rec=CHE.COLORS.list('indicator').find(x=>x.name===ind),st=CHE.COLORS.state(rec.id,pH),cl=CHE.COLORS.css(CHE.COLORS.at(rec.id,pH));out.innerHTML=`<span style="display:inline-block;width:22px;height:22px;border-radius:50%;border:1.5px solid #475569;vertical-align:middle;margin-right:8px;background:${cl}"></span><b>Próbka:</b> pH ${pH.toFixed(1)} · <b>${ind}</b>: ${st.label}.<br><span class="muted">Zakres zmiany: pH ${rec.tr[0][0]}–${rec.tr[rec.tr.length-1][1]}. Wniosek o odczynie opiera się na pH, a barwa jest obserwacją pomocniczą.</span>`}
    render();
  }
});

/* --- Migracja 4: algorytm reakcji — szereg aktywności z CHE.DATA --- */
defineView('reaction-decision', {
  title:'Algorytm decyzyjny — metal + kwas · dane centralne',tag:'UND',
  hint:'Wybierz metal i kwas. Algorytm korzysta z centralnego szeregu aktywności oraz katalogu reakcji.',
  foot:'To reguła dydaktyczna. HNO₃ i inne kwasy utleniające wymagają osobnego rozumowania.',
  build(host){
    host.innerHTML='';const metals=CHE.DATA.METAL_SERIES||[];const row=document.createElement('div');row.className='r';
    const sel=document.createElement('select');metals.forEach(m=>{const o=document.createElement('option');o.value=m;o.textContent=m;sel.appendChild(o)});
    const acid=document.createElement('select');['HCl','HNO₃','H₂SO₄'].forEach(a=>{const o=document.createElement('option');o.value=a;o.textContent=a;acid.appendChild(o)});
    row.append('Metal: ',sel,'  Kwas: ',acid);const out=document.createElement('div');out.className='note';host.append(row,out);
    function render(){const m=sel.value,a=acid.value,idx=metals.indexOf(m),h=metals.indexOf('H');const before=idx>=0&&h>=0&&idx<h;let text=before?'W szeregu metal znajduje się przed H → z nieutleniającym kwasem przewidywany jest H₂.':'Metal jest na/za H → z typowym nieutleniającym kwasem nie przewidujemy wypierania H₂.';if(a==='HNO₃')text+=' HNO₃ jest kwasem utleniającym: reguła „metal przed H → H₂” nie wystarcza.';out.innerHTML=`<b>${m} + ${a}</b><br>${text}<br><span class="muted">Szereg centralny: ${metals.join(' > ')}.</span>`}
    sel.onchange=render;acid.onchange=render;render();
  }
});

/* --- Migracja 5: bilans środowiska — obliczenie przez wspólny silnik --- */
defineView('env-balance', {
  title:'Bilans mas — wapnowanie jeziora · wspólny model',tag:'ZA',
  hint:'Zmień pH i objętość. Obliczenie przechodzi przez CHE.CHEM.HFromPH + molarMass.',
  foot:'To model edukacyjny: rzeczywiste jezioro ma pojemność buforową i inne składniki, więc samo pH nie wyznacza dawki wapna.',
  build(host){
    host.innerHTML='';const r=document.createElement('div');r.className='r';r.innerHTML='<label>pH <input class="p" type="number" min="0" max="14" step="0.1" value="4"></label><label>V [L] <input class="v" type="number" min="1" value="1000"></label>';const out=document.createElement('div');out.className='note';host.append(r,out);const draw=()=>{const p=+r.querySelector('.p').value,V=+r.querySelector('.v').value,x=CHE.TOOLS.envLime(p,V);out.innerHTML=`<b>[H₃O⁺]</b> = ${x.H.toExponential(2)} mol/L · <b>n(H₃O⁺)</b> ≈ ${x.nH.toFixed(4)} mol<br><b>CaCO₃</b>: n ≈ ${x.nCaCO3.toFixed(4)} mol · M = ${x.molarMassCaCO3.toFixed(2)} g/mol · <b>m ≈ ${x.massG.toFixed(2)} g</b><br><span class="muted">Model stechiometryczny: CaCO₃ + 2 H₃O⁺ → Ca²⁺ + CO₂ + 3 H₂O.</span>`};r.querySelectorAll('input').forEach(i=>i.oninput=draw);draw();
  }
});

/* =====================================================================
   BOOTSTRAP
   ===================================================================== */
(function() {
  const tt = document.getElementById('themeToggle');
  const ls = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }, set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} } };
  const saved = ls.get('che.theme') || 'light';
  if (saved === 'dark') { document.documentElement.setAttribute('data-theme', 'dark'); if (tt) tt.textContent = 'Jasny'; }
  if (tt) tt.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) { document.documentElement.removeAttribute('data-theme'); tt.textContent = '◐'; ls.set('che.theme', 'light'); }
    else { document.documentElement.setAttribute('data-theme', 'dark'); tt.textContent = 'Jasny'; ls.set('che.theme', 'dark'); }
  });

  const tocToggle = document.getElementById('tocToggle');
  const tocWrap = document.getElementById('tocWrapper');
  const tocOverlay = document.getElementById('tocOverlay');
  function buildToc() {
    let html = '<h5>Spis treści — kolejność lekcji</h5><a href="#che-change-log">Rejestr zmian i ulepszeń</a>';
    document.querySelectorAll('main h2').forEach((h2, gi) => {
      h2.id = h2.id || ('sec-auto-' + gi);
      html += `<h5>${h2.textContent.trim()}</h5>`;
      let x = h2.nextElementSibling;
      let linked = false;
      while (x && x.tagName !== 'H2') {
        if (!linked && x.matches && x.matches('[data-che]')) {
          const name = x.dataset.che;
          const spec = CHE.VIEW.views.get(name);
          if (!x.id) x.id = 'viz-' + name;
          html += `<a href="#${x.id}">${(spec && spec.title) || name}</a>`;
          linked = true; // TOC points only to the first visualization of this section; order stays fixed.
        }
        x = x.nextElementSibling;
      }
    });
    if(!tocWrap) return;
    tocWrap.innerHTML = html;
    tocWrap.querySelectorAll('a').forEach(a => a.addEventListener('click', ev => {
      const id=(a.getAttribute('href')||'').slice(1);
      const target=id && document.getElementById(id);
      if(target){ ev.preventDefault(); close(); requestAnimationFrame(()=>target.scrollIntoView({behavior:'smooth',block:'start'})); }
    }));
  }
  function open() { if(!tocWrap||!tocOverlay) return; tocWrap.classList.add('is-open'); tocOverlay.classList.add('is-visible'); document.body.style.overflow = 'hidden'; }
  function close() { if(!tocWrap||!tocOverlay) return; tocWrap.classList.remove('is-open'); tocOverlay.classList.remove('is-visible'); document.body.style.overflow = ''; }
  if (tocToggle) tocToggle.addEventListener('click', () => tocWrap.classList.contains('is-open') ? close() : open());
  if (tocOverlay) tocOverlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

/* === SCALONE SILNIKI: najlepsze elementy wersji bazowych + V6 === */
defineView('molecule3d-merged', {
  title:'Model 3D cząsteczek — scalony model + geometria + klik atomu', tag:'MOTION',
  hint:'Żółty pierścień = proton kwaśny. Przeciągnij, aby obracać; scroll/pinch = zoom.',
  foot:'Model dydaktyczny — nie jest to geometria kwantowa. Służy rozpoznawaniu składu, wiązań i protonów kwaśnych.',
  build(host) {
    host.innerHTML = '';
    const bar = document.createElement('div');
    bar.className = 'r'; bar.style.marginTop = '0';
    const cv = document.createElement('canvas');
    cv.dataset.h = 340;
    cv.style.background = 'radial-gradient(ellipse at 50% 35%, #1e3a5f, #0b1220)';
    cv.style.cursor = 'grab';
    const note = document.createElement('div');
    note.className = 'note';
    host.append(bar, cv, note);

    const lessonEl = host.closest && host.closest('[data-che-lesson]'), SET = ((CHE.DATA.MOL3D_SETS||{})[lessonEl ? lessonEl.getAttribute('data-che-lesson') : ''] || null);
    const keys = SET ? SET.keys.filter(k => CHE.DATA.MOLECULES && CHE.DATA.MOLECULES[k]) : ['HCl','HF','H2O','H3O','H2SO4','H3PO4','H2CO3','CH3COOH','HCOOH','NH3','CO2','CH4'];
    let cur = SET ? SET.start : 'CH3COOH', yaw = 0.5, pitch = 0.25, zoom = 1;
    let dragging = false, lx = 0, ly = 0, auto = true;
    const pointers = new Map();
    let pd = 0;
    let selectedAtom = null;
    const GEOM = {
      H2O:'kątowa · H–O–H ≈ 104,5°', CO2:'liniowa · O=C=O = 180°',
      CH4:'tetraedryczna · H–C–H ≈ 109,5°', NH3:'piramidalna · H–N–H ≈ 107°'
    };
    if (SET && SET.geom) Object.assign(GEOM, SET.geom);

    if (!CHE.DATA.MOL3D.CH4) CHE.DATA.MOL3D.CH4 = { n:'CH₄', note:'metan · geometria tetraedryczna · kąt ≈ 109,5°', atoms:[['C',0,0,0],['H',50,50,50],['H',-50,-50,50],['H',-50,50,-50],['H',50,-50,-50]], bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], acid:[] };
    keys.forEach(k => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = CHE.MOLECULE.get(k).name;
      b.onclick = () => { cur = k; CHE.MOLECULE.select(k,{source:'molecule3d-merged'}); update(); };
      bar.appendChild(b);
    });
    const autoBtn = document.createElement('button');
    autoBtn.textContent = 'auto-obrót';
    autoBtn.classList.add('on');
    autoBtn.onclick = () => { auto = !auto; autoBtn.classList.toggle('on', auto); };
    bar.appendChild(autoBtn);

    function update() {
      [...bar.children].forEach(b => {
        if (b === autoBtn) return;
        b.classList.toggle('on', b.textContent === CHE.MOLECULE.get(cur).name);
      });
      note.innerHTML = '<b>' + CHE.MOLECULE.get(cur).name + '</b> — ' + CHE.MOLECULE.get(cur).note + (GEOM[cur] ? ' · <b>Geometria:</b> '+GEOM[cur] : '') + (selectedAtom !== null ? ' · <b>atom:</b> '+CHE.MOLECULE.get(cur).atoms[selectedAtom].element+' (kliknięty)' : '');
    }

    cv.addEventListener('pointerdown', e => {
      cv.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, [e.clientX, e.clientY]);
      dragging = true; lx = e.clientX; ly = e.clientY;
      cv.style.cursor = 'grabbing';
    });
    cv.addEventListener('pointermove', e => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, [e.clientX, e.clientY]);
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a[0]-b[0], a[1]-b[1]);
        if (pd) zoom = Math.max(0.5, Math.min(2.4, zoom * d / pd));
        pd = d;
      } else {
        yaw += (e.clientX - lx) * 0.01;
        pitch = Math.max(-1.4, Math.min(1.4, pitch + (e.clientY - ly) * 0.008));
        lx = e.clientX; ly = e.clientY;
      }
    });
    ['pointerup','pointercancel'].forEach(ev => cv.addEventListener(ev, e => {
      pointers.delete(e.pointerId); pd = 0;
      if (!pointers.size) { dragging = false; cv.style.cursor = 'grab'; }
    }));
    cv.addEventListener('wheel', e => {
      e.preventDefault();
      zoom = Math.max(0.5, Math.min(2.4, zoom * (e.deltaY < 0 ? 1.08 : 0.93)));
    }, { passive: false });
    cv.addEventListener('click', e => {
      const r = cv.getBoundingClientRect();
      const x = (e.clientX-r.left), y = (e.clientY-r.top);
      const M_ = CHE.MOLECULE.get(cur);
      let best=-1, bd=1e9;
      // hit-test in current projection
      const ca=Math.cos(yaw),sa=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);
      M_.atoms.forEach((a,i)=>{const X=a.x*ca-a.z*sa,Z=a.x*sa+a.z*ca,Y=a.y*cp-Z*sp,Z2=a.y*sp+Z*cp,ss=zoom*(1+Z2/600)*1.15,px=cv.clientWidth/2+X*ss,py=cv.clientHeight/2+Y*ss,rr=(CHE.DATA.ELEM[a.element]?.r||20)*1.25*ss,d=Math.hypot(x-px,y-py);if(d<rr*1.25&&d<bd){bd=d;best=i;}});
      selectedAtom=best>=0?best:null; update();
    });

    M.add(cv, (ctx, w, h, time) => {
      const M_ = CHE.MOLECULE.get(cur);
      if (auto && !dragging) yaw += 0.006;
      const ca = Math.cos(yaw), sa = Math.sin(yaw);
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      const Q = M_.atoms.map((a, i) => {
        const X = a.x*ca - a.z*sa;
        const Z = a.x*sa + a.z*ca;
        const Y = a.y*cp - Z*sp;
        const Z2 = a.y*sp + Z*cp;
        const s = zoom * (1 + Z2/600);
        return { x: w/2 + X*s*1.15, y: h/2 + Y*s*1.15, z: Z2, s: s*1.15, e: a.element, idx: i };
      });
      const prim = [];
      M_.bonds.forEach(b => prim.push({ z:Math.min(Q[b.a].z, Q[b.b].z) - 1, b })); /* wiązanie pod oboma atomami — nie zasłania symboli */
      Q.forEach(q => prim.push({ z:q.z, q }));
      prim.sort((a, b) => a.z - b.z);

      for (const p of prim) {
        if (p.b) {
          const a = Q[p.b.a], b = Q[p.b.b], o = p.b.order || 1;
          const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1;
          const nx = -dy/L, ny = dx/L;
          const offs = o === 2 ? [-5, 5] : [0];
          for (const f of offs) {
            ctx.strokeStyle = 'rgba(203,213,225,.85)';
            ctx.lineWidth = 9 * a.s;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(a.x + nx*f*a.s, a.y + ny*f*a.s);
            ctx.lineTo(b.x + nx*f*a.s, b.y + ny*f*a.s);
            ctx.stroke();
          }
          continue;
        }
        const q = p.q, E = CHE.DATA.ELEM[q.e];
        const r = E.r * 1.25 * q.s;
        const g = ctx.createRadialGradient(q.x - r*0.35, q.y - r*0.4, r*0.1, q.x, q.y, r);
        g.addColorStop(0, E.c1); g.addColorStop(1, E.c2);
        ctx.beginPath(); ctx.arc(q.x, q.y, r, 0, 7);
        ctx.fillStyle = g; ctx.fill();
        ctx.strokeStyle = E.s; ctx.lineWidth = 2; ctx.stroke();
        if (q.idx != null && M_.atoms[q.idx]?.acid) {
          ctx.beginPath();
          ctx.arc(q.x, q.y, r*1.4 + Math.sin(time*2) * 2, 0, 7);
          ctx.strokeStyle = 'rgba(250,204,21,.9)';
          ctx.lineWidth = 2.4;
          ctx.stroke();
        }
        ctx.fillStyle = E.t;
        ctx.font = `800 ${Math.round(r*0.7)}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        if (selectedAtom === q.idx) { ctx.beginPath(); ctx.arc(q.x,q.y,r*1.75,0,7); ctx.strokeStyle='#2dd4bf'; ctx.lineWidth=3; ctx.stroke(); ctx.fillStyle = E.t; }
        ctx.fillText(q.e, q.x, q.y);
      }
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '800 16px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(M_.n || M_.name || cur, 14, 26);
      if (M_.acid && M_.acid.length) {
        ctx.fillStyle = '#fbbf24';
        ctx.font = '700 11px Inter, system-ui, sans-serif';
        ctx.fillText('● proton kwaśny', 14, h - 16);
      }
    });
    document.addEventListener('che:molecule-select',e=>{const k=e.detail?.id;if(k&&keys.includes(k)){cur=k;selectedAtom=null;update();}});
    update();
  }
});


defineView('titration-merged', {
  title:'Titracja — scalony model: typ + wskaźnik + krzywa + kolba', tag:'AMB',
  hint:'Przesuń suwak lub naciśnij Autoplay. Punkt biegnie po krzywej, kolba zmienia barwę.',
  foot:'Punkt równoważnikowy przy V = 25 cm³ (HCl 0,1 M + NaOH 0,1 M). Skok pH ok. 25 cm³.',
  build(host) {
    host.innerHTML = '';
    const LC=CHE.LESSON_CONTEXT;
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('titration-merged',{defaultAcid:'HCl',defaultBase:'NaOH'}):{defaultAcid:'HCl',defaultBase:'NaOH'};
    if(opts._lesson){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> CHE.EQUILIBRIUM.titrationPH · wskaźniki z CHE.DATA · domyślnie <b>'+(opts.defaultAcid||'HCl')+' + '+(opts.defaultBase||'NaOH')+'</b> · kontekst <b>'+opts._lesson+'</b>.';host.appendChild(ctx)}
    const typeRow = document.createElement('div');
    typeRow.className = 'r'; typeRow.style.marginTop = '0';
    const defStrong=(opts.defaultAcid||'HCl')==='HCl'||(opts.defaultAcid||'')==='HNO3';
    typeRow.innerHTML = '<label>Typ:</label><select><option value="strongStrong"'+(defStrong?' selected':'')+'>mocny kwas + mocna zasada (HCl + NaOH)</option><option value="weakStrong"'+(!defStrong?' selected':'')+'>słaby kwas + mocna zasada (CH₃COOH + NaOH)</option></select>';
    const indRow = document.createElement('div'); indRow.className='r'; indRow.innerHTML='<label>Wskaźnik:</label><select><option value="mo">oranż metylowy</option><option value="btb">błękit bromotymolowy</option><option value="pp" selected>fenoloftaleina</option></select>';
    const cv = document.createElement('canvas');
    cv.dataset.h = 330;
    cv.style.background = 'var(--surface-soft)';
    cv.style.borderRadius = 'var(--r-sm)';
    const ctrl = document.createElement('div');
    ctrl.className = 'r';
    ctrl.innerHTML = '<button class="play">▶ Autoplay</button><input type="range" min="0" max="50" step="0.1" value="0"><div style="width:36px;height:48px;border:2px solid var(--border-strong);border-radius:2px 2px 12px 12px;position:relative;transition:background .3s;flex-shrink:0"></div>';
    const readout = document.createElement('div');
    readout.className = 'metric-grid';
    readout.innerHTML = `
      <div><b>V titranta</b><strong data-k="v">0,0 cm³</strong></div>
      <div><b>pH</b><strong data-k="p">—</strong></div>
      <div><b>Wskaźnik</b><strong data-k="i" style="font-size:12px">—</strong></div>`;
    const note = document.createElement('div');
    note.className = 'note';
    host.append(typeRow, indRow, cv, ctrl, readout, note);
    const sel = typeRow.querySelector('select');
    const indSel = indRow.querySelector('select');
    const sl = ctrl.querySelector('input');
    const flask = ctrl.querySelector('div:last-child');
    const play = ctrl.querySelector('.play');
    const q = k => readout.querySelector(`[data-k="${k}"]`);

    const sys=(CHE.DATA&&CHE.DATA.ACID_SYSTEMS)||{};
    const Ka = (sys.CH3COOH&&sys.CH3COOH.Ka&&sys.CH3COOH.Ka[0])||1.8e-5;
    const V0 = 25, C = 0.1, VE = 25, VMAX = 50;
    function pH(type, V) {
      return CHE.EQUILIBRIUM.titrationPH({type,C,V0,V,Ka});
    }
    const IND={};[['mo','ind-oranz-metylowy'],['btb','ind-bbt'],['pp','ind-fenoloftaleina']].forEach(([k,id])=>{const r=CHE.COLORS.get(id);IND[k]={id,n:r.name,lo:r.tr[0][0],hi:r.tr[0][1]}});
    function indicator(type,p){ const I=IND[indSel.value]; const a=Math.max(0,Math.min(1,(p-I.lo)/(I.hi-I.lo))); return [CHE.COLORS.css(CHE.COLORS.at(I.id,p)), I.n+' · '+(a===0?'barwa początkowa':a<1?'zakres przejścia':'barwa końcowa'), I]; }
    let raf = null;
    function draw(V) {
      const type = sel.value;
      const p = pH(type, V);
      const [col, name, I] = indicator(type, p);
      q('v').textContent = V.toFixed(1).replace('.', ',') + ' cm³';
      q('p').textContent = p.toFixed(2).replace('.', ',');
      q('i').textContent = name;
      flask.style.background = col;
      note.innerHTML = `Punkt równoważnikowy przy <b>V = 25 cm³</b>. pH w równoważniku: <b>${pH(type, VE).toFixed(2).replace('.', ',')}</b>.`;
      render();
    }
    play.onclick = () => {
      if (raf) { cancelAnimationFrame(raf); raf = null; play.textContent = '▶ Autoplay'; return; }
      if (+sl.value >= VMAX - 0.1) sl.value = 0;
      play.textContent = '⏸ Pauza';
      (function loop() {
        const v = +sl.value + 0.1;
        if (v >= VMAX) { sl.value = VMAX; draw(VMAX); raf = null; play.textContent = '▶ Autoplay'; return; }
        sl.value = v; draw(v); raf = requestAnimationFrame(loop);
      })();
    };
    sl.addEventListener('input', () => draw(+sl.value));
    sel.addEventListener('change', () => draw(+sl.value));
    indSel.addEventListener('change', () => draw(+sl.value));

    const ctx = cv.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      const r = cv.getBoundingClientRect();
      cv.width = r.width * dpr; cv.height = 330 * dpr;
      cv.style.height = '330px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    }
    function render() {
      const w = cv.width / dpr, h = cv.height / dpr;
      ctx.clearRect(0, 0, w, h);
      const L = 50, R = 20, T = 20, B = 40;
      const W = w - L - R, H = h - T - B;
      const X = v => L + v / VMAX * W;
      const Y = p => T + (1 - p/14) * H;
      const g = ctx.createLinearGradient(0, T, 0, T + H);
      g.addColorStop(0, 'rgba(74,75,181,.08)');
      g.addColorStop(.5, 'rgba(92,184,92,.06)');
      g.addColorStop(1, 'rgba(229,38,46,.08)');
      ctx.fillStyle = g; ctx.fillRect(L, T, W, H);
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillStyle = '#8892a0';
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      for (let p = 0; p <= 14; p += 2) {
        ctx.strokeStyle = p === 7 ? '#cdd5dd' : '#e5e9ee';
        ctx.setLineDash(p === 7 ? [4, 4] : []);
        ctx.beginPath(); ctx.moveTo(L, Y(p)); ctx.lineTo(L + W, Y(p)); ctx.stroke();
        ctx.fillText(p, L - 8, Y(p));
      }
      ctx.setLineDash([]);
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (let v = 0; v <= VMAX; v += 10) { ctx.fillStyle = '#8892a0'; ctx.fillText(v, X(v), T + H + 6); }
      const type = sel.value;
      ctx.beginPath();
      for (let vv = 0; vv <= VMAX + 0.001; vv += 0.2) {
        const x = X(vv), y = Y(pH(type, vv));
        vv === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#0d6868'; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.stroke();
      const I=IND[indSel.value];
      ctx.fillStyle='rgba(100,116,139,.12)'; ctx.fillRect(L,Y(I.hi),W,Math.max(2,Y(I.lo)-Y(I.hi)));
      ctx.fillStyle='#64748b'; ctx.font='700 10px Inter,system-ui,sans-serif'; ctx.textAlign='left'; ctx.fillText(I.n+' · zakres '+I.lo+'–'+I.hi, L+6, Y(I.hi)-5);
      const pe = pH(type, VE);
      ctx.strokeStyle = '#b06f1c'; ctx.setLineDash([6, 5]);
      ctx.beginPath(); ctx.moveTo(X(VE), T); ctx.lineTo(X(VE), T + H); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#b06f1c';
      ctx.beginPath(); ctx.arc(X(VE), Y(pe), 5, 0, 7); ctx.fill();
      const cp = pH(type, +sl.value);
      const cx = X(+sl.value), cy = Y(cp);
      const rg = ctx.createRadialGradient(cx, cy, 2, cx, cy, 16);
      rg.addColorStop(0, 'rgba(13,104,104,.45)');
      rg.addColorStop(1, 'rgba(13,104,104,0)');
      ctx.fillStyle = rg;
      ctx.beginPath(); ctx.arc(cx, cy, 16, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.strokeStyle = '#0d6868'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(cx, cy, 6, 0, 7); ctx.fill(); ctx.stroke();
    }
    new ResizeObserver(resize).observe(cv);
    resize();
    draw(0);
  }
});


/* =====================================================================
   DUŻY PRZEBIEG v0.02 — cztery wizualizacje przebudowane rzeczywiście
   ===================================================================== */
function cheBigCanvas(host, height=280){
  const wrap=document.createElement('div'); wrap.className='che-bigpass stage';
  const cv=document.createElement('canvas'); cv.width=900; cv.height=height; wrap.appendChild(cv); host.appendChild(wrap);
  const ctx=cv.getContext('2d');
  const fit=()=>{const d=Math.min(2,devicePixelRatio||1), w=wrap.clientWidth||900; cv.width=Math.max(320,Math.floor(w*d)); cv.height=Math.floor(height*(w/900)*d); cv.style.height=(height*(w/900))+'px'; ctx.setTransform(d*(w/900),0,0,d*(w/900),0,0);};
  new ResizeObserver(fit).observe(wrap); fit(); return {cv,ctx,wrap,fit};
}

/* --- ph-indicators-v03: JEDEN panel pH (scala wskaźników → doświadczenie → drabinka) · v0.04 ---
   Scala: wielowarstwowy pasek wszystkich wskaźników + suwak + punkty (kwasy/zasady z silnika). Doświadczenie: roztwór × wskaźnik w probówkach.
   Drabinka: pH kwasów i zasad dla wybranego stężenia. pH liczone silnikiem (CHE.CHEM / CHE.EQUILIBRIUM), zakresy: CHE.DATA.INDICATORS + uzupełnienia. */
defineView('ph-indicators-v03',{
  title:'Panel pH — wskaźniki, roztwory, drabinka · v0.05', tag:'E8',
  hint:'Przeciągnij po skali lub wybierz roztwór i wskaźnik. Kropki na skali to kwasy i zasady o wybranym stężeniu.',
  foot:'Zakresy przejścia są orientacyjne (zależą od stężenia i temperatury). Wskaźnik pokazuje przedział pH, nie jego dokładną wartość. Ca(OH)₂ rozpuszcza się słabo — liczone do nasycenia ≈ 0,02 M.',
  build(host){
    host.innerHTML='';
    const H=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
    const SVGNS='http://www.w3.org/2000/svg';
    const SE=(n,a)=>{const e=document.createElementNS(SVGNS,n);for(const k in (a||{}))e.setAttribute(k,a[k]);return e};
    const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
    const f1=v=>v.toFixed(1).replace('.',','), f2=v=>v.toFixed(2).replace('.',',');
    const SUP={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻'};
    const sci=x=>{let e=Math.floor(Math.log10(x)+1e-9),m=x/Math.pow(10,e);if(m.toFixed(1)==='10.0'){m=1;e++}return m.toFixed(1).replace('.',',')+'·10'+String(e).split('').map(ch=>SUP[ch]).join('')};
    const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if(!document.getElementById('che-php4-css')){
      const st=document.createElement('style');st.id='che-php4-css';
      st.textContent=`
.ph4 .ph4-h{margin:16px 0 6px;font:800 11px var(--mono,ui-monospace,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted,#64748b)}
.ph4 .ph4-h:first-child{margin-top:0}
.ph4-chart{position:relative;margin-top:30px;user-select:none;-webkit-user-select:none}
.ph4-row{display:grid;grid-template-columns:124px 1fr;align-items:center;gap:0;height:23px}
.ph4-row .lab{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:6px;height:22px;padding-right:6px;font:600 11.5px/1.1 system-ui,sans-serif;color:var(--text-soft,#334155);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ph4-row .lab i{flex:0 0 11px;width:11px;height:11px;border-radius:50%;border:1.5px solid #475569}
.ph4-row.sel .lab{font-weight:800;color:var(--text,#0f172a)}
.ph4-tr{height:16px;border-radius:6px;border:1px solid #94a3b8}
.ph4-row.sel .ph4-tr{outline:2px solid var(--accent,#0d6868);outline-offset:1px}
.ph4-ax{position:relative;height:16px;font:700 10px var(--mono,ui-monospace,monospace);color:var(--text-muted,#64748b)}
.ph4-ax span{position:absolute;transform:translateX(-50%)}
.ph4-pins{position:relative;height:16px}
.ph4-pins i{position:absolute;top:3px;width:10px;height:10px;margin-left:-5px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #475569}
.ph4-pins i.a{background:#dc2626}.ph4-pins i.b{background:#2563eb}.ph4-pins i.w{background:#94a3b8}
.ph4-pins i.on{box-shadow:0 0 0 2.5px var(--text,#0f172a);z-index:2}
.ph4-ov{position:absolute;left:124px;right:0;top:0;bottom:0;cursor:ew-resize;touch-action:pan-y;z-index:3}
.ph4-cur{position:absolute;top:-4px;bottom:-2px;width:0;border-left:2px solid var(--text,#0f172a);pointer-events:none;transition:left .12s}
.ph4-cur b{position:absolute;top:-23px;left:0;background:var(--text,#0f172a);color:#fff;font:800 11px var(--mono,ui-monospace,monospace);padding:2px 7px;border-radius:6px;white-space:nowrap;transform:translateX(-50%)}
.ph4-cap{margin:8px 0 2px;font-size:12px;color:var(--text-soft,#475569);min-height:32px}
.ph4-read{display:flex;flex-wrap:wrap;gap:4px 14px;margin:8px 0 4px;font:700 12.5px var(--mono,ui-monospace,monospace)}
.ph4-read span small{font-weight:600;color:var(--text-muted,#64748b);font-family:system-ui,sans-serif}
.ph4-near{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0;font-size:12px;color:var(--text-muted,#64748b);min-height:30px}
.ph4-near button,.ph4-conc button,.ph4-tabs button{min-height:30px;padding:3px 11px;border-radius:999px;font-size:12px}
.ph4-sels{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ph4-sels label{display:block;font:700 11px system-ui,sans-serif;color:var(--text-muted,#64748b);margin-bottom:3px}
.ph4-sels select{width:100%;min-height:42px;font-size:14px;padding:6px 8px;border-radius:10px;border:1px solid var(--border-strong,#cbd5e1);background:var(--surface,#fff);color:var(--text,#0f172a)}
.ph4-conc,.ph4-tabs{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin:8px 0}
.ph4-conc>span{font-size:12px;color:var(--text-muted,#64748b);font-weight:700}
.ph4-rack{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:8px 0 4px}
.ph4-tube{text-align:center;font-size:11.5px;line-height:1.25}
.ph4-tube svg{width:58px;height:auto;display:block;margin:0 auto 3px;overflow:visible}
.ph4-tube .liq{transition:fill .9s ease}
.ph4-tube b{display:block;color:var(--text,#0f172a)}
.ph4-tube span{color:var(--text-soft,#475569)}
.ph4-drop{animation:ph4drop .42s ease-in 3 both}
@keyframes ph4drop{0%{transform:translateY(-8px);opacity:0}20%{opacity:1}100%{transform:translateY(58px);opacity:1}}
.ph4-desc{margin:8px 0;padding:10px 12px;border-radius:12px;border:1px solid var(--border,#e2e8f0);background:var(--surface-soft,#f8fafc);font-size:13px;line-height:1.5}
.ph4-desc p{margin:0 0 6px}.ph4-desc p:last-child{margin:0}
.ph4-eq{font-family:var(--mono,ui-monospace,monospace);font-size:12.5px;color:var(--text,#0f172a)}
.ph4-lad-row{display:grid;grid-template-columns:92px 1fr 40px;gap:8px;align-items:center;padding:4px 6px;border-radius:8px;cursor:pointer;min-height:30px}
.ph4-lad-row.on{background:var(--accent-soft,#e8f3f2);outline:1.5px solid var(--accent,#0d6868)}
.ph4-lad-row b{font-size:12.5px;white-space:nowrap}.ph4-lad-row b small{font-weight:600;color:var(--text-muted,#64748b);font-size:10.5px;margin-left:3px}
.ph4-lad-row .tk{position:relative;height:8px;border-radius:5px;border:1px solid #94a3b8}
.ph4-lad-row .tk i{position:absolute;top:-4px;width:14px;height:14px;margin-left:-7px;border-radius:50%;border:2px solid #0f172a}
.ph4-lad-row em{font:800 12.5px var(--mono,ui-monospace,monospace);font-style:normal;text-align:right}
.ph4-lad-row.ref{opacity:.75}
.ph4-note{margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)}
@media (max-width:420px){.ph4-row{grid-template-columns:112px 1fr}.ph4-ov{left:112px}}
`;
      document.head.appendChild(st);
    }

    if(!document.getElementById('che-php4-css2')){
      const s2=document.createElement('style');s2.id='che-php4-css2';
      s2.textContent=`.ph4-log{margin:8px 0;display:grid;gap:5px}.ph4-lb{display:grid;grid-template-columns:52px 1fr;gap:8px;align-items:center;font:700 11.5px var(--mono,ui-monospace,monospace)}.ph4-lb div{height:14px;border-radius:5px;background:var(--surface-soft,#eef2f6);overflow:hidden}.ph4-lb i{display:block;height:100%;transition:width .15s}.ph4-lb.h i{background:#dc2626}.ph4-lb.o i{background:#2563eb}.ph4-x{font-size:12.5px;line-height:1.45;color:var(--text-soft,#334155)}.ph4-cmp{display:flex;gap:6px 10px;flex-wrap:wrap;align-items:center;font-size:12.5px;margin:4px 0}.ph4-cmp button{min-height:30px;padding:3px 11px;border-radius:999px;font-size:12px}.ph4-ref{position:absolute;top:-4px;bottom:-2px;width:0;border-left:2px dashed #64748b;pointer-events:none}@media(prefers-reduced-motion:reduce){.ph4-lb i{transition:none}}`;
      document.head.appendChild(s2);
    }
    const times=v=>v<100?v.toFixed(1).replace('.',',')+'×':(v<1e6?Math.round(v).toLocaleString('pl-PL'):sci(v))+'×';

    /* ====== wskaźniki — kolory z CHE.COLORS (baza silnika), bez własnych wartości ====== */
    const COL=CHE.COLORS;
    if(!COL){host.textContent='Brak modułu CHE.COLORS — panel pH wymaga bazy kolorów silnika.';return}
    const IND=COL.list(['universal','indicator']).map(r=>COL.legacy(r.id));
    const UNI=IND[0];
    const SHORT={};COL.list(['universal','indicator']).forEach(r=>{SHORT[r.name]=r.short||r.name});
    const WATER=COL.water,rgbOf=COL.rgb,mix=COL.mix,css=COL.css;
    const colorOf=(ind,p)=>COL.at(ind.id,p),stateOf=(ind,p)=>COL.state(ind.id,p),gradCss=ind=>COL.gradient(ind.id);

    /* ====== roztwory (silnik) ====== */
    const CHEM=CHE.CHEM||{},EQ=CHE.EQUILIBRIUM||{},AS=(CHE.DATA&&CHE.DATA.ACID_SYSTEMS)||{},SUB=(CHE.DATA&&CHE.DATA.SUBSTANCES)||{};
    const Kw=1e-14;
    const bis=(fn,lo,hi)=>{for(let i=0;i<100;i++){const m=(lo+hi)/2;if(fn(m)>0)lo=m;else hi=m}return (lo+hi)/2};
    function weakAcidPH(c,Ka){try{const r=CHEM.weakAcid(c,Ka);if(isFinite(r.pH))return {pH:r.pH,alpha:r.alpha}}catch(_){}
      const h=(-Ka+Math.sqrt(Ka*Ka+4*Ka*c))/2;return {pH:-Math.log10(h),alpha:h/c}}
    function strongAcidPH(c){try{const r=CHEM.strongAcid(c);if(isFinite(r.pH))return r.pH}catch(_){}return -Math.log10(c)}
    function strongBasePH(c){try{const r=CHEM.strongBase(c);if(isFinite(r.pH))return r.pH}catch(_){}return 14+Math.log10(c)}
    function weakBaseSolve(c,Kb){let lo=Math.log(1e-14),hi=Math.log(10);
      for(let i=0;i<100;i++){const m=(lo+hi)/2,o=Math.exp(m),f=c*Kb/(Kb+o)+Kw/o-o;if(f>0)lo=m;else hi=m}
      const oh=Math.exp((lo+hi)/2);return {pH:14+Math.log10(oh),alpha:Kb/(Kb+oh)}}
    const ACIDS=[['HCl','strong'],['HNO3','strong'],['H2SO4','h2so4'],['H3PO4','poly'],['HF','weak'],['HCOOH','weak'],['CH3COOH','weak'],['H2CO3','poly'],['HCN','weak']].filter(a=>AS[a[0]]);
    const BASES=[
      {id:'NaOH',f:'NaOH',name:'wodorotlenek sodu',kind:'strong',n:1,eq:'NaOH → Na⁺ + OH⁻'},
      {id:'KOH',f:'KOH',name:'wodorotlenek potasu',kind:'strong',n:1,eq:'KOH → K⁺ + OH⁻'},
      {id:'CaOH2',f:'Ca(OH)₂',name:'wodorotlenek wapnia',kind:'strong',n:2,cap:0.02,eq:'Ca(OH)₂ → Ca²⁺ + 2 OH⁻'},
      {id:'NH3',f:'NH₃',name:'amoniak (woda amoniakalna)',kind:'weak',Kb:1.8e-5,eq:'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻'}
    ];
    function compute(c){
      const out=[];
      ACIDS.forEach(([id,k])=>{
        const a=AS[id],name=(SUB[id]&&SUB[id].name)||id,pKa=a.pKa||[],Ka=(a.Ka||[]).filter(x=>x!=null);
        let pH,alpha=null,note='';
        if(k==='strong'){pH=strongAcidPH(c);note='kwas mocny — dysocjuje całkowicie, więc [H₃O⁺] = c i pH = −log c.'}
        else if(k==='h2so4'){let r=null;try{r=EQ.polyproticPH(c,[1e3,1.02e-2])}catch(_){}pH=r&&isFinite(r.pH)?r.pH:strongAcidPH(c);
          note='I stopień mocny, II stopień słabszy (pKa₂ = 1,99) — dlatego pH jest nieco niższe niż −log c.'}
        else if(k==='poly'){let r=null;try{r=EQ.polyproticPH(c,Ka)}catch(_){}
          if(r&&isFinite(r.pH)){pH=r.pH;alpha=r.alpha&&r.alpha.length?1-r.alpha[0]:null}else{const w=weakAcidPH(c,Ka[0]);pH=w.pH;alpha=w.alpha}
          note='kwas '+(Ka.length+1===3?'trójprotonowy':'dwuprotonowy')+' średniej/słabej mocy (pKa₁ = '+f2(pKa[0])+'); pH wyznacza głównie I stopień, kolejne są znacznie słabsze.'}
        else{const w=weakAcidPH(c,Ka[0]);pH=w.pH;alpha=w.alpha;note='kwas słaby (pKa = '+f2(pKa[0])+') — dysocjuje częściowo.'}
        const strongish=k==='strong'||k==='h2so4';
        out.push({id:id,f:a.formula,name:name,type:'a',tag:strongish?'mocny':'słaby',pH:pH,alpha:alpha,note:note,
          eq:a.formula+' + H₂O '+(strongish?'→':'⇌')+' H₃O⁺ + '+a.anion,ref:-Math.log10(c)});
      });
      BASES.forEach(b=>{
        let pH,alpha=null,note,cc=c;
        if(b.kind==='strong'){
          if(b.cap&&c>b.cap){cc=b.cap;note='rozpuszcza się słabo — nasycony roztwór ma ≈ '+String(b.cap).replace('.',',')+' M; zasada mocna (całkowicie zdysocjowana), na formułę 2 jony OH⁻.'}
          else note='zasada mocna — dysocjuje całkowicie, [OH⁻] = '+(b.n>1?b.n+'·':'')+'c, a pH = 14 − pOH.';
          pH=strongBasePH(cc*b.n);
        }else{const w=weakBaseSolve(c,b.Kb);pH=w.pH;alpha=w.alpha;note='zasada słaba (Kb = 1,8·10⁻⁵) — tylko część cząsteczek reaguje z wodą, więc pH jest niższe niż dla mocnej zasady o tym samym c.'}
        out.push({id:b.id,f:b.f,name:b.name,type:'b',tag:b.kind==='strong'?'mocna':'słaba',pH:pH,alpha:alpha,note:note,eq:b.eq,ref:14+Math.log10(c)});
      });
      out.push({id:'H2O',f:'H₂O',name:'woda destylowana',type:'w',tag:'',pH:7,alpha:null,note:'woda czysta — [H₃O⁺] = [OH⁻] = 10⁻⁷ M, odczyn obojętny.',eq:'2 H₂O ⇌ H₃O⁺ + OH⁻'});
      out.forEach(o=>{o.pH=clamp(o.pH,0,14)});
      return out;
    }

    /* ====== stan ====== */
    const CONC=[[1,'1 M'],[0.1,'0,1 M'],[0.01,'0,01 M']];
    let c=0.1,items=compute(c),sampleId='HCl',indIdx=2,dropped=false,tab='a',cur=0;
    const get=id=>items.find(x=>x.id===id);
    cur=get('HCl')?get('HCl').pH:1;
    const cTxt=()=>CONC.find(x=>x[0]===c)[1];
    const odczyn=p=>{const d=Math.abs(p-7);if(d<.05)return 'obojętny';return (p<7?'kwasowy':'zasadowy')+(d>=4?' (silnie)':d<1?' (słabo)':'')};

    /* ====== 1. skala ====== */
    host.classList.add('ph4');
    host.appendChild(H('div','ph4-h','1 · Skala: wszystkie wskaźniki naraz'));
    const chart=H('div','ph4-chart');
    const axisRow=H('div','ph4-row');axisRow.appendChild(H('span'));
    const ax=H('div','ph4-ax');for(let v=0;v<=14;v++){const s=H('span',null,String(v));s.style.left=(v/14*100)+'%';ax.appendChild(s)}axisRow.appendChild(ax);
    const pinRow=H('div','ph4-row');const pl=H('span','lab');pl.style.cssText='cursor:default;font-weight:600;color:var(--text-muted,#64748b)';pl.textContent='kwasy · zasady';pinRow.appendChild(pl);
    const pins=H('div','ph4-pins');pinRow.appendChild(pins);
    chart.append(axisRow,pinRow);
    const rows=IND.map((ind,i)=>{
      const r=H('div','ph4-row'),lab=H('button','lab');lab.type='button';
      const sw=H('i');lab.appendChild(sw);lab.appendChild(document.createTextNode(SHORT[ind.n]||ind.n));lab.title='Wybierz wskaźnik: '+ind.n;
      const tr=H('div','ph4-tr');tr.style.background=gradCss(ind);
      r.append(lab,tr);chart.appendChild(r);
      lab.onclick=()=>{indIdx=i;ddInd.value=String(i);render()};
      return {r:r,sw:sw};
    });
    const ov=H('div','ph4-ov'),curEl=H('div','ph4-cur','<b></b>');ov.appendChild(curEl);chart.appendChild(ov);
    host.appendChild(chart);
    const sl=document.createElement('input');sl.type='range';sl.min=0;sl.max=14;sl.step=.1;sl.value=cur;sl.setAttribute('aria-label','pH roztworu');
    sl.style.cssText='width:100%;margin:10px 0 0;accent-color:var(--accent,#0d6868)';
    const cap=H('div','ph4-cap'),read=H('div','ph4-read'),near=H('div','ph4-near');
    const logBox=H('div','ph4-log'),cmp=H('div','ph4-cmp');let ref=null;
    const refEl=H('div','ph4-ref');ov.appendChild(refEl);
    host.append(sl,read,logBox,cmp,near,cap);

    /* ====== 2. doświadczenie ====== */
    host.appendChild(H('div','ph4-h','2 · Doświadczenie: roztwór + wskaźnik'));
    const sels=H('div','ph4-sels');
    const mkSel=(lbl)=>{const w=H('div'),l=H('label',null,lbl),s=document.createElement('select');w.append(l,s);sels.appendChild(w);return s};
    const ddSmp=mkSel('Roztwór'),ddInd=mkSel('Odczynnik (wskaźnik)');
    const fill=()=>{ddSmp.innerHTML='';
      const o0=H('option',null,'— dowolne pH (suwak) —');o0.value='free';ddSmp.appendChild(o0);
      [['a','Kwasy'],['b','Zasady'],['w','Woda']].forEach(([t,g])=>{const og=document.createElement('optgroup');og.label=g;
        items.filter(x=>x.type===t).forEach(x=>{const o=H('option',null,x.f+' · '+x.name);o.value=x.id;og.appendChild(o)});ddSmp.appendChild(og)});
      ddSmp.value=sampleId||'free'};
    IND.forEach((x,i)=>{const o=H('option',null,x.n);o.value=String(i);ddInd.appendChild(o)});ddInd.value=String(indIdx);
    const conc=H('div','ph4-conc');conc.appendChild(H('span',null,'Stężenie:'));
    const cBtns=CONC.map(([v,l])=>{const b=H('button',null,l);b.type='button';b.onclick=()=>{c=v;items=compute(c);if(sampleId&&get(sampleId))cur=get(sampleId).pH;fill();render()};conc.appendChild(b);return b});
    const rack=H('div','ph4-rack');
    const dropBtn=H('button',null,'💧 Dodaj krople wskaźnika');dropBtn.type='button';dropBtn.style.cssText='min-height:40px;border-radius:999px;padding:6px 16px';
    const dropRow=H('div','r');dropRow.style.cssText='display:flex;justify-content:center;margin:4px 0';dropRow.appendChild(dropBtn);
    const desc=H('div','ph4-desc');
    host.append(sels,conc,rack,dropRow,desc);

    const mkTube=(titleId)=>{
      const d=H('div','ph4-tube'),svg=SE('svg',{viewBox:'0 0 70 150',role:'img'});
      const liq=SE('path',{d:'M19 52H51V116a16 16 0 0 1-32 0Z',class:'liq'});liq.style.fill=css(WATER);
      const drop=SE('circle',{cx:35,cy:6,r:4.2,opacity:0});
      svg.append(SE('path',{d:'M18 8H52V116a17 17 0 0 1-34 0Z',fill:'rgba(255,255,255,.55)',stroke:'#94a3b8','stroke-width':2}),liq,drop,
        SE('rect',{x:12,y:4,width:46,height:6,rx:3,fill:'#cbd5e1'}),SE('rect',{x:24,y:22,width:4,height:78,rx:2,fill:'#fff','fill-opacity':.5}));
      const b=H('b'),s=H('span');d.append(svg,b,s);rack.appendChild(d);
      return {liq:liq,drop:drop,b:b,s:s};
    };
    const t1=mkTube(),t2=mkTube(),t3=mkTube();

    /* ====== 3. drabinka ====== */
    host.appendChild(H('div','ph4-h','3 · Drabinka pH'));
    const tabs=H('div','ph4-tabs');
    const tBtns=[['a','Kwasy'],['b','Zasady']].map(([k,l])=>{const b=H('button',null,l);b.type='button';b.onclick=()=>{tab=k;render()};tabs.appendChild(b);return b});
    const ladNote=H('span');ladNote.style.cssText='font-size:12px;color:var(--text-muted,#64748b);margin-left:6px';tabs.appendChild(ladNote);
    const ladder=H('div');
    const ladFoot=H('div','ph4-note');
    host.append(tabs,ladder,ladFoot);

    /* ====== logika ====== */
    function setFree(v){sampleId=null;cur=Math.round(clamp(v,0,14)*10)/10;ddSmp.value='free';render()}
    function pick(id){const it=get(id);if(!it)return;sampleId=id;cur=it.pH;ddSmp.value=id;if(it.type!=='w')tab=it.type;render()}
    const xToPH=e=>{const r=ov.getBoundingClientRect();return clamp((e.clientX-r.left)/r.width*14,0,14)};
    let drag=null;
    ov.addEventListener('pointerdown',e=>{drag={x:e.clientX,moved:false};try{ov.setPointerCapture(e.pointerId)}catch(_){}setFree(xToPH(e))});
    ov.addEventListener('pointermove',e=>{if(!drag)return;if(Math.abs(e.clientX-drag.x)>4)drag.moved=true;setFree(xToPH(e))});
    const end=e=>{if(drag&&!drag.moved){const p=xToPH(e);let best=null,bd=.45;items.forEach(it=>{const d=Math.abs(it.pH-p);if(d<bd){bd=d;best=it}});if(best)pick(best.id)}drag=null};
    ov.addEventListener('pointerup',end);ov.addEventListener('pointercancel',()=>{drag=null});
    sl.addEventListener('input',()=>setFree(+sl.value));
    ddSmp.onchange=()=>{if(ddSmp.value==='free'){sampleId=null;render()}else pick(ddSmp.value)};
    ddInd.onchange=()=>{indIdx=+ddInd.value;render()};
    dropBtn.onclick=()=>{
      if(dropped){dropped=false;render();return}
      dropped=true;
      if(reduce){render();return}
      const col=css(colorOf(IND[indIdx],cur));t2.drop.setAttribute('fill',col);t2.drop.setAttribute('opacity',1);
      t2.drop.classList.remove('ph4-drop');void t2.drop.getBoundingClientRect();t2.drop.classList.add('ph4-drop');
      setTimeout(()=>{t2.drop.setAttribute('opacity',0);t2.drop.classList.remove('ph4-drop');render()},1300);
      dropBtn.textContent='…';
    };

    function descHTML(){
      const ind=IND[indIdx],p=cur,it=sampleId?get(sampleId):null;
      let h='';
      if(it){
        h+='<p><b>'+it.f+' · '+cTxt()+'</b> — '+it.note+(it.alpha!=null&&it.type!=='w'?' W tym roztworze '+(it.type==='a'?'zdysocjowane jest ok. ':'przereagowało z wodą ok. ')+(it.alpha<0.001?'<0,1':(it.alpha*100).toFixed(it.alpha<.1?1:0).replace('.',','))+' % cząsteczek; przy tym samym stężeniu '+(it.type==='a'?'mocny kwas dałby pH ':'mocna zasada dałaby pH ')+f2(clamp(it.ref,0,14))+'.':'')+'</p>';
        h+='<p class="ph4-eq">'+it.eq+'</p>';
      }else h+='<p>Roztwór o pH = <b>'+f1(p)+'</b> ('+odczyn(p)+'). Wybierz konkretny kwas lub zasadę, aby zobaczyć równanie i stopień dysocjacji.</p>';
      const st=stateOf(ind,p),s7=stateOf(ind,7);
      const a=colorOf(ind,p),b=colorOf(ind,7),dist=Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]);
      let t='<p><b>'+ind.n+'</b>';
      if(ind.tr){t+=' (zakres zmiany barwy pH '+ind.tr.map(x=>f1(x[0])+'–'+f1(x[1])).join(' i ')+')'}
      t+=': przy pH '+f1(p)+' ';
      if(ind.stops)t+='barwa: <b>'+st.label+'</b> — zmienia się płynnie na całej skali (mieszanina wielu wskaźników).';
      else if(st.kind==='ramp')t+='jesteśmy <b>w zakresie przejścia</b> — barwa pośrednia, pH da się tylko przybliżyć.';
      else t+='wskaźnik jest <b>'+st.label+'</b> ('+(p<ind.tr[0][0]?'forma kwasowa':'forma zasadowa')+').';
      t+=' '+(dist>55?'Odróżnia ten roztwór od wody (w wodzie: '+s7.label+').':'Wygląda tak samo jak w wodzie — <b>ten wskaźnik nie odróżni</b> tego roztworu od obojętnego.')+'</p>';
      h+=t;
      return h;
    }

    function render(){
      const p=cur,pct=p/14*100,ind=IND[indIdx];
      /* skala */
      curEl.style.left=pct+'%';const bub=curEl.firstChild;bub.textContent='pH '+f1(p);
      bub.style.transform=pct<8?'translateX(-12%)':pct>92?'translateX(-88%)':'translateX(-50%)';
      sl.value=p;
      rows.forEach((r,i)=>{r.sw.style.background=css(colorOf(IND[i],p));r.r.classList.toggle('sel',i===indIdx)});
      pins.innerHTML='';
      items.forEach(it=>{const d=H('i',it.type==='a'?'a':it.type==='b'?'b':'w');d.style.left=(it.pH/14*100)+'%';d.title=it.f+' '+cTxt()+' — pH '+f2(it.pH);if(it.id===sampleId)d.classList.add('on');pins.appendChild(d)});
      /* odczyt */
      const hh=Math.pow(10,-p),oh=Math.pow(10,p-14);
      read.innerHTML='<span>pH '+f1(p)+'</span><span>'+odczyn(p)+'</span><span>[H₃O⁺] '+sci(hh)+' M</span><span>[OH⁻] '+sci(oh)+' M</span><span>pOH '+f1(14-p)+'</span>';
      const d7=7-p;
      logBox.innerHTML='<div class="ph4-lb h"><span>H₃O⁺</span><div><i style="width:'+((14-p)/14*100).toFixed(1)+'%"></i></div></div><div class="ph4-lb o"><span>OH⁻</span><div><i style="width:'+(p/14*100).toFixed(1)+'%"></i></div></div><div class="ph4-x">Długość belki = wykładnik stężenia (skala logarytmiczna): pH + pOH = 14. '+(Math.abs(d7)<.05?'Tyle samo H₃O⁺ i OH⁻ co w czystej wodzie — odczyn obojętny.':'W porównaniu z czystą wodą: <b>'+times(Math.pow(10,Math.abs(d7)))+' więcej '+(d7>0?'H₃O⁺':'OH⁻')+'</b>.')+'</div>';
      cmp.innerHTML='';const rb=H('button',null,ref==null?'📌 Przypnij pH jako odniesienie':'✕ Usuń odniesienie');rb.type='button';rb.onclick=()=>{ref=ref==null?cur:null;render()};cmp.appendChild(rb);
      if(ref!=null){const dd=p-ref;cmp.appendChild(H('span',null,'pH '+f1(ref)+' → '+f1(p)+': '+(Math.abs(dd)<.05?'bez zmiany.':'różnica '+f1(Math.abs(dd))+' jedn. = <b>'+times(Math.pow(10,Math.abs(dd)))+(dd>0?' mniej':' więcej')+' H₃O⁺</b>.')))}
      refEl.style.display=ref==null?'none':'block';if(ref!=null)refEl.style.left=(ref/14*100)+'%';
      /* w pobliżu */
      near.innerHTML='';
      const nb=items.filter(x=>Math.abs(x.pH-p)<=1.2).sort((a,b)=>Math.abs(a.pH-p)-Math.abs(b.pH-p)).slice(0,4);
      near.appendChild(H('span',null,nb.length?'W pobliżu ('+cTxt()+'):':'W pobliżu: brak kwasów i zasad z listy'));
      nb.forEach(x=>{const b=H('button',null,x.f+' · '+f1(x.pH));b.type='button';if(x.id===sampleId)b.classList.add('on');b.onclick=()=>pick(x.id);near.appendChild(b)});
      cap.innerHTML=ind.tr?('<b>'+ind.n+'</b>: '+ind.tr.map(x=>ind.names[ind.tr.indexOf(x)]+' → '+ind.names[ind.tr.indexOf(x)+1]+' w pH '+f1(x[0])+'–'+f1(x[1])).join('; ')+'. Stuknij nazwę wskaźnika, by go wybrać.'):('<b>'+ind.n+'</b>: barwa zmienia się płynnie na całej skali. Stuknij nazwę innego wskaźnika, by go wybrać.');
      /* menu / stężenia */
      ddSmp.value=sampleId||'free';ddInd.value=String(indIdx);
      cBtns.forEach((b,i)=>b.classList.toggle('on',CONC[i][0]===c));
      /* probówki */
      const sampleName=sampleId?get(sampleId).f+' · '+cTxt():'pH '+f1(p);
      t1.liq.style.fill=css(WATER);t1.b.textContent='roztwór';t1.s.textContent=sampleName+' (bezbarwny)';
      t2.liq.style.fill=dropped?css(colorOf(ind,p)):css(WATER);
      t2.b.textContent=ind.n;t2.s.textContent=dropped?stateOf(ind,p).label:'przed dodaniem';
      t3.liq.style.fill=css(colorOf(UNI,p));t3.b.textContent='wskaźnik uniwersalny';t3.s.textContent=stateOf(UNI,p).label;
      dropBtn.textContent=dropped?'↺ Wylej i zacznij od nowa':'💧 Dodaj krople wskaźnika';
      desc.innerHTML=descHTML();
      /* drabinka */
      tBtns.forEach((b,i)=>b.classList.toggle('on',['a','b'][i]===tab));
      ladNote.textContent='stężenie '+cTxt()+' (zmień wyżej)';
      ladder.innerHTML='';
      const list=items.filter(x=>x.type===tab).sort((a,b)=>tab==='a'?a.pH-b.pH:b.pH-a.pH).concat(items.filter(x=>x.type==='w'));
      list.forEach(it=>{
        const r=H('div','ph4-lad-row'+(it.id===sampleId?' on':'')+(it.type==='w'?' ref':''));
        r.innerHTML='<b>'+it.f+(it.tag?'<small>'+it.tag+'</small>':'')+'</b><div class="tk"><i></i></div><em>'+f2(it.pH)+'</em>';
        const tk=r.querySelector('.tk');tk.style.background=gradCss(UNI);const dot=tk.firstChild;dot.style.left=(it.pH/14*100)+'%';dot.style.background=css(colorOf(UNI,it.pH));
        r.title=it.name;r.onclick=()=>pick(it.id);ladder.appendChild(r);
      });
      ladFoot.innerHTML=tab==='a'?'Mocny kwas: rozcieńczenie 10× → pH +1. Kwas słaby: rozcieńczenie 10× → pH tylko ≈ +0,5 (rośnie stopień dysocjacji). Kolor kropki = barwa papierka uniwersalnego.'
        :'Mocna zasada: rozcieńczenie 10× → pH −1. Amoniak (słaba zasada) przy tym samym stężeniu ma wyraźnie niższe pH niż NaOH. Ca(OH)₂ ogranicza rozpuszczalność.';
    }
    fill();render();
  }
});

defineView('metal-reaction-v02',{title:'Metal + kwas — wspólny model reakcji · v0.03',tag:'E8',hint:'Wybierz metal i kwas. Warunek, równanie, obserwacja i BHP pochodzą z CHE.REACTION.',foot:'Dane zawsze z silnika (CHE.REACTION). Lista metali/kwasów może być zawężona kontekstem lekcji.',build(host){
  host.innerHTML='';
  const LC=CHE.LESSON_CONTEXT;
  /* 1) pełne listy z silnika / katalogu reakcji, 2) filtr lekcji przez optionsFor */
  const engineDefaults={
    metals:['Mg','Zn','Fe','Cu','Ag','Al'],
    acids:['HCl','HNO₃','H₂SO₄'],
    metalRx:{Mg:'mgHcl',Zn:'znHcl',Fe:'feHcl',Cu:'cuHno3',Al:'alHcl'}
  };
  const opts=(LC&&LC.optionsFor)?LC.optionsFor('metal-reaction-v02',engineDefaults):engineDefaults;
  const metals=opts.metals||engineDefaults.metals;
  const acids=(opts.acids||engineDefaults.acids).map(function(a){
    return a==='HNO3'?'HNO₃':a==='H2SO4'?'H₂SO₄':a;
  });
  const metalRx=Object.assign({},engineDefaults.metalRx,opts.metalRx||{});
  const row=document.createElement('div');row.className='choice-row';
  const acidRow=document.createElement('div');acidRow.className='choice-row';
  const detail=document.createElement('div');detail.className='metric-grid';
  const note=document.createElement('div');note.className='note';
  let metal=metals[0]||'Mg', acid=acids[0]||'HCl';
  metals.forEach(m=>{const b=document.createElement('button');b.type='button';b.textContent=m;b.onclick=()=>{metal=m;row.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');render()};if(m===metal)b.classList.add('on');row.appendChild(b)});
  acids.forEach(a=>{const b=document.createElement('button');b.type='button';b.textContent=a;b.onclick=()=>{acid=a;acidRow.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');render()};if(a===acid)b.classList.add('on');acidRow.appendChild(b)});
  function render(){
    let id=null;
    if((acid==='HNO₃'||acid==='HNO3')&&metal==='Cu') id='cuHno3';
    else if(acid==='HCl'||acid==='HCl') id=metalRx[metal]||null;
    detail.innerHTML='';
    if(!id||!CHE.REACTION||!CHE.REACTION.get(id)){
      detail.innerHTML='<div><b>Warunek</b><strong>Brak centralnego rekordu dla tego wyboru</strong></div><div><b>Interpretacja</b><strong>Nie pokazujemy sztucznego równania.</strong></div>';
      note.innerHTML='<b>Źródło:</b> CHE.REACTION (silnik). Brak rekordu = brak zgadywania w UI.'+(opts._lesson?' <b>Kontekst:</b> '+opts._lesson+'.':'');
      return;
    }
    const r=CHE.REACTION.get(id);
    [['Równanie',CHE.REACTION.equation(id)],['Typ',r.type],['Warunki',r.conditions||'—'],['Obserwacja',r.observation||'—'],['Produkty',(r.productKeys||[]).join(', ')],['Bilans',r.balance&&r.balance.ok?'OK':'BŁĄD']].forEach(([a,b])=>{const d=document.createElement('div');d.innerHTML='<b>'+a+'</b><strong style="font-size:13px">'+b+'</strong>';detail.appendChild(d)});
    note.innerHTML='<b>BHP:</b> '+((r.safety||[]).join(' ')||'standardowe środki ostrożności.')+'<br><b>Źródło danych:</b> CHE.DATA.REACTIONS → CHE.REACTION (pełny silnik)'+(opts._lesson?' → filtr lekcji <b>'+opts._lesson+'</b>':' → bez filtra (pełna lista UI)')+'.';
  }
  host.append(row,acidRow,detail,note);render();
}});

defineView('diss-hcl-mech-v02',{title:'Dysocjacja HCl w wodzie — mechanizm cząsteczkowy · v0.02',tag:'E8',hint:'Klikaj etapy lub pozwól, aby animacja przeszła przez nie automatycznie.',foot:'W wodzie zapisujemy proces jako HCl + H₂O → H₃O⁺ + Cl⁻ (skrót szkolny: HCl → H⁺ + Cl⁻).',build(host){ const LC=CHE.LESSON_CONTEXT; if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> mechanizm dydaktyczny HCl · silnik wspólny · kontekst <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
  host.classList.add('che-bigpass');const c=cheBigCanvas(host,280),ctx=c.ctx;let step=0,playing=true,timer;const steps=[['HCl w wodzie','Cząsteczka HCl jest otoczona przez cząsteczki wody.'],['Orientacja H₂O','Cząsteczka wody ustawia się tak, aby tlen mógł przyjąć proton.'],['Transfer H⁺','Proton przechodzi z HCl na atom tlenu w H₂O, a para elektronów wiązania H–Cl zostaje przy Cl.'],['Jony w roztworze','Powstają H₃O⁺ i Cl⁻, otoczone cząsteczkami wody (hydratacja); zapis cząsteczkowy uwzględnia wodę.']];const sr=document.createElement('div');sr.className='step-row';steps.forEach((x,i)=>{const b=document.createElement('button');b.textContent=i+1;b.onclick=()=>{step=i;playing=false;clearInterval(timer);paint()};if(i===0)b.classList.add('on');sr.appendChild(b)});const ex=document.createElement('div');ex.className='explain';host.append(sr,ex);function paint(){sr.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',i===step));ex.textContent=steps[step][1];ctx.clearRect(0,0,900,280);ctx.fillStyle='#f8fafc';ctx.fillRect(0,0,900,280);ctx.font='800 18px system-ui';ctx.fillStyle='#0f172a';ctx.textAlign='center';ctx.fillText(steps[step][0],450,32);const water=(x,y,ang=0)=>{ctx.save();ctx.translate(x,y);ctx.rotate(ang);ctx.strokeStyle='#2563eb';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-18,0);ctx.lineTo(0,0);ctx.lineTo(13,14);ctx.stroke();ctx.fillStyle='#dc2626';ctx.beginPath();ctx.arc(0,0,13,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.font='700 10px system-ui';ctx.fillText('O',-6,4);ctx.restore()};const atom=(x,y,label,col,r=26)=>{ctx.fillStyle=col;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 12px system-ui';ctx.fillText(label,x,y+4)};ctx.textAlign='left';if(step===0){atom(360,135,'H','#e5e7eb',18);atom(405,135,'Cl','#16a34a',28);for(let i=0;i<4;i++)water(240+i*150,210,(i%2?-.2:.2))}else if(step===1){atom(360,135,'H','#e5e7eb',18);atom(405,135,'Cl','#16a34a',28);water(310,150,-.35);water(500,200,.25)}else if(step===2){atom(330,130,'Cl⁻','#16a34a',32);water(505,135,0);atom(405,130,'H⁺','#cbd5e1',17);ctx.strokeStyle='#dc2626';ctx.setLineDash([5,5]);ctx.beginPath();ctx.moveTo(423,130);ctx.lineTo(485,130);ctx.stroke();ctx.setLineDash([])}else{atom(320,140,'Cl⁻','#16a34a',34);atom(520,135,'H₃O⁺','#2563eb',38);for(let i=0;i<3;i++)water(400+i*55,210,(i-1)*.2)} }paint();timer=setInterval(()=>{if(playing){step=(step+1)%4;paint()}},1700);}});

defineView('ion-map-v02',{title:'Mapa jonów — ładunek i rola w procesie · v0.02',tag:'E8',hint:'Kliknij jon. Zobacz ładunek, rolę i bilans ładunków.',foot:'Mapa służy jako wspólny model do późniejszych reakcji jonowych i dysocjacji.',build(host){
  host.classList.add('che-bigpass');const ions=[{n:'H₃O⁺',q:1,role:'produkt przeniesienia protonu'},{n:'Cl⁻',q:-1,role:'anion powstały z HCl'},{n:'OH⁻',q:-1,role:'anion charakterystyczny dla zasadowości'},{n:'Na⁺',q:1,role:'kation obecny np. w NaOH lub soli'}];let sel=0;const row=document.createElement('div');row.className='choice-row';const read=document.createElement('div');read.className='mini-readout';read.innerHTML='<div><b>Jon</b><strong data-k=n></strong></div><div><b>Ładunek</b><strong data-k=q></strong></div><div><b>Rola</b><strong data-k=r></strong></div><div><b>Bilans pary</b><strong data-k=b></strong></div>';const ex=document.createElement('div');ex.className='explain';ions.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x.n;b.onclick=()=>{sel=i;update()};row.appendChild(b)});host.append(row,read,ex);function update(){const x=ions[sel];row.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',i===sel));read.querySelector('[data-k=n]').textContent=x.n;read.querySelector('[data-k=q]').textContent=(x.q>0?'+':'')+x.q;read.querySelector('[data-k=r]').textContent=x.role;read.querySelector('[data-k=b]').textContent=(x.q>0?'+1 + (−1) = 0':'−1 + (+1) = 0');ex.textContent='Kliknięty jon nie jest tylko symbolem: pokazujemy jego ładunek oraz funkcję w konkretnym modelu. Następny etap może powiązać go bezpośrednio z równaniem jonowym.'}update();}});

  /* ===== STATUS WIZUALIZACJI N03 (przegląd v0.09→v0.11) =====
     k: rozwijac = wersja kanoniczna | engine = działa, ale dane/kolory na sztywno | dubel = starsza wersja tego samego tematu (ref = wersja nadrzędna).
     v0.11: usunięto dublety potwierdzone (flow-egzamin, kinetics, acid-rain, diss-static — po przeniesieniu brakujących treści) oraz 5 martwych definicji nadpisanych później. Pozostałe wpisy 'dubel' mają jeszcze treści do przeniesienia (keepLegacyUntilCovered). */
  CHE.VIEW_STATUS = {
    'titration-merged':{k:'rozwijac'}, 'diss-hcl-mech-v02':{k:'rozwijac'}, 'ph-indicators-v03':{k:'rozwijac',note:'Kanoniczny panel pH: skala wskaźników + doświadczenie + drabinka kwasów i zasad.'},
    'strong-vs-weak-enhanced-v02':{k:'rozwijac'}, 'reactor-enhanced':{k:'rozwijac'}, 'metal-reaction-v02':{k:'rozwijac'},
    'buffer':{k:'rozwijac'}, 'acid-calculator':{k:'rozwijac'}, 'flow-egzamin-enhanced':{k:'rozwijac'}, 'acid-rain-v01':{k:'rozwijac'}, 'kinetics-v01':{k:'rozwijac'},
    'reakcje-kwasu-v03':{k:'engine',note:'Połączone: metal-reaction + beaker-prediction (predykcja → zlewka → równanie z silnika).'},
    'lab-beaker-v102':{k:'engine',note:'CHE.LAB v1.02 — pełna zlewka modułowa (kontrola, pH, BHP, dziennik).'},
    'beaker-prediction-enhanced':{k:'engine',note:'Zlewka z osadami i barwami — dane z CHE.REACTION zamiast zaszytych w widoku.'},
    'moc-vs-c':{k:'engine',note:'Scalić z alpha-slider w strong-vs-weak-enhanced-v02 (cząstki + α z CHE.CHEM).'},
    'alpha-slider':{k:'engine',note:'Scalić z moc-vs-c w strong-vs-weak-enhanced-v02.'},
    'ind-lab':{k:'engine',note:'Aktywna wersja nie ma LESSON_CONTEXT ani trybu „przewiduj i sprawdź” ze starej wersji (usuniętej, w archiwum v0.11).'},
    'mind-map':{k:'engine',note:'Lekcja ma własną mapę (mapSvg); żadna wersja nie korzysta z silnika.'},
    'reactor':{k:'rozwijac',note:'NIE dubel reactor-enhanced: to zlewka z reakcjami (metal, tlenek, zasada, węglan, Cu + HNO₃) z CHE.REACTION; reactor-enhanced pokazuje dysocjację kwasów. Zostaje.'}
  };
  Object.keys(CHE.VIEW_STATUS).forEach(function(id){
    var sp=CHE.VIEW.views.get(id), st=CHE.VIEW_STATUS[id]; if(!sp) return;
    var lbl = st.k==='dubel' ? 'DUBEL → patrz: '+st.ref : st.k==='engine' ? 'PRZEPIĄĆ NA SILNIK' : 'ROZWIJAĆ';
    sp.status = lbl;
    sp.foot = (sp.foot ? sp.foot+' · ' : '') + '[' + lbl + (st.note ? ' — '+st.note : '') + ']';
  });

  /* Montowanie produkcyjne: tylko baza oraz rzeczywiście ukończone ulepszenia. */
  CHE.VIEW.autoMount();
  buildToc();
  console.log('[CHE] Views registered:', [...CHE.VIEW.views.keys()].length);
})();

