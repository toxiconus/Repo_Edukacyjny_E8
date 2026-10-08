

defineView('flashcards-deck', {
  title:'Fiszki + ściąga — powtórka', tag:'VIZ',
  hint:'Kliknij fiszkę, aby obrócić. Ściąga u góry.',
  foot:'Ucz się w odstępach: dziś → jutro → za 3 dni → za tydzień.',
  build(host) {
    host.innerHTML = '';
    const cheat = document.createElement('div');
    cheat.style.cssText = 'background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:12px;padding:14px 18px;margin-bottom:14px;font-size:13.5px;line-height:1.65';
    cheat.innerHTML = `
      <b style="color:var(--accent);display:block;margin-bottom:6px">Ściąga — wszystko w jednym miejscu</b>
      <b>Definicja:</b> kwas = donor H⁺ (Brønsted). <b>Wzór:</b> HₙR. <b>Podział:</b> beztlenowe / tlenowe · mocne / słabe.<br>
      <b>Dysocjacja:</b> HCl → H⁺ + Cl⁻ (mocny, →). CH₃COOH ⇌ H⁺ + CH₃COO⁻ (słaby, ⇌).<br>
      <b>pH = −log[H₃O⁺].</b> pH &lt; 7 kwasowy · 7 obojętny · &gt; 7 zasadowy. Skala logarytmiczna.<br>
      <b>Reakcje:</b> + metal → sól + H₂↑ · + tlenek metalu → sól + H₂O · + wodorotlenek → sól + H₂O · + węglan → sól + H₂O + CO₂↑.<br>
      <b>Szereg:</b> K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Pb &gt; H &gt; Cu &gt; Ag &gt; Au.<br>
      <b>BHP:</b> zawsze kwas do wody, nigdy odwrotnie.
    `;
    host.appendChild(cheat);

    const cards = [
      ['Definicja kwasu (Arrhenius)', 'W wodzie dysocjuje na H⁺ (dokładniej H₃O⁺) i anion reszty kwasowej.'],
      ['Definicja kwasu (Brønsted)', 'Donor protonu H⁺. Zasada = akceptor H⁺.'],
      ['Wzór ogólny kwasu', 'HₙR, gdzie R = reszta kwasowa, n = wartościowość reszty.'],
      ['Podział kwasów', 'Beztlenowe (HCl, HBr, HI, HF, H₂S) vs tlenowe (HNO₃, H₂SO₄, H₂CO₃, H₃PO₄).'],
      ['Kwasy mocne', 'HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ — α ≈ 1.'],
      ['Kwasy słabe', 'HF, H₂S, H₂CO₃, H₂SO₃, HNO₂, H₃PO₄, CH₃COOH — α ≪ 1.'],
      ['Dysocjacja HCl', 'HCl → H⁺ + Cl⁻ (w wodzie: HCl + H₂O → H₃O⁺ + Cl⁻).'],
      ['Dysocjacja H₂SO₄', 'I: → H⁺ + HSO₄⁻ (mocny); II: ⇌ H⁺ + SO₄²⁻ (słaby).'],
      ['Dysocjacja CH₃COOH', 'CH₃COOH ⇌ H⁺ + CH₃COO⁻ (częściowa — słaby kwas).'],
      ['pH — definicja', 'pH = −log[H₃O⁺]. Skala logarytmiczna: różnica 1 = 10× stężenie H₃O⁺.'],
      ['Fenoloftaleina', 'W kwasie bezbarwna; w zasadzie malinowa. Zakres zmiany: pH 8,2–10,0.'],
      ['Oranż metylowy', 'W kwasie czerwony; w zasadzie żółty. Zakres zmiany: pH 3,1–4,4.'],
      ['Szereg aktywności', 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au. Metal przed H reaguje z kwasem → sól + H₂.'],
      ['HNO₃ jako utleniacz', 'Reaguje z Cu, ale NIE wydziela H₂. Powstaje NO₂ lub NO.'],
      ['BHP rozcieńczanie', 'Zawsze kwas do wody, nigdy odwrotnie. Rozcieńczanie jest egzotermiczne.'],
      ['Zobojętnianie — jonowo', 'H⁺ + OH⁻ → H₂O. Jony widzowe: Na⁺, Cl⁻.'],
      ['Kwas mocny ≠ stężony', 'Moc to α (stopień dysocjacji); stężenie to mol/dm³. Dwie różne osie.'],
      ['HCl(g) vs HCl(aq)', 'HCl(g) to gaz chlorowodor; HCl(aq) to roztwór (kwas solny).'],
      ['Ka i pKa', 'Ka = stała równowagi jonizacji. pKa = −log Ka. Mniejsze pKa = mocniejszy kwas.'],
      ['Kwaśne deszcze', 'Opady o pH < 5,6. Źródła: SO₂ i NO₂. Kwasy: H₂SO₄, HNO₃.'],
    ];
    const grid = document.createElement('div');
    grid.className = 'flashcard-grid';
    cards.forEach(([f,b],i) => {
      const d=document.createElement('details');
      d.className='flashcard-details';
      if(i===0) d.open=true;
      const sum=document.createElement('summary');
      sum.textContent=f + (i===0 ? ' — przykład otwarty' : '');
      const ans=document.createElement('div');
      ans.className='flashcard-answer';
      ans.innerHTML=b;
      d.append(sum,ans);
      grid.appendChild(d);
    });
    host.appendChild(grid);
  }
});

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

defineView('env-balance', {
  title:'Bilans mas — wapnowanie jeziora · wspólny model',tag:'ZA',
  hint:'Zmień pH i objętość. Obliczenie przechodzi przez CHE.CHEM.HFromPH + molarMass.',
  foot:'To model edukacyjny: rzeczywiste jezioro ma pojemność buforową i inne składniki, więc samo pH nie wyznacza dawki wapna.',
  build(host){
    host.innerHTML='';const r=document.createElement('div');r.className='r';r.innerHTML='<label>pH <input class="p" type="number" min="0" max="14" step="0.1" value="4"></label><label>V [L] <input class="v" type="number" min="1" value="1000"></label>';const out=document.createElement('div');out.className='note';host.append(r,out);const draw=()=>{const p=+r.querySelector('.p').value,V=+r.querySelector('.v').value,x=CHE.TOOLS.envLime(p,V);out.innerHTML=`<b>[H₃O⁺]</b> = ${x.H.toExponential(2)} mol/L · <b>n(H₃O⁺)</b> ≈ ${x.nH.toFixed(4)} mol<br><b>CaCO₃</b>: n ≈ ${x.nCaCO3.toFixed(4)} mol · M = ${x.molarMassCaCO3.toFixed(2)} g/mol · <b>m ≈ ${x.massG.toFixed(2)} g</b><br><span class="muted">Model stechiometryczny: CaCO₃ + 2 H₃O⁺ → Ca²⁺ + CO₂ + 3 H₂O.</span>`};r.querySelectorAll('input').forEach(i=>i.oninput=draw);draw();
  }
});

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
          linked = true; 
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
      M_.bonds.forEach(b => prim.push({ z:Math.min(Q[b.a].z, Q[b.b].z) - 1, b }));  
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