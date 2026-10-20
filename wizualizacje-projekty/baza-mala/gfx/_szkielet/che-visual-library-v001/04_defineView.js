

defineView('periodic-54', {
  title:'Układ okresowy — pierwiastki 1–54, modele atomów, tlenki', tag:'VIZ',
  hint:'Koloruj wg rodzaju / charakteru tlenku / elektroujemności. Kliknij pierwiastek — wartościowość, tlenki i model atomu poniżej.',
  foot:'Wartościowość i tlenki z CHE.DATA.OXIDE_STATES i CHE.OXIDES; kolor „charakter tlenku” — tlenek na najwyższym stopniu utlenienia.',
  build(host) {
    host.innerHTML = '';
    const modeRow = document.createElement('div');
    modeRow.className = 'r'; modeRow.style.marginTop = '0';
    modeRow.innerHTML = '<label>koloruj wg:</label><button data-m="typ" class="on">rodzaj</button><button data-m="ox">charakter tlenku</button><button data-m="en">elektroujemność</button>';
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(18,minmax(30px,1fr));gap:3px;min-width:640px;overflow-x:auto;padding:8px 0';
    const wrap = document.createElement('div');
    wrap.style.cssText = 'overflow-x:auto;width:100%';
    wrap.appendChild(grid);
    const gridHost = document.createElement('div');
    gridHost.style.cssText = 'margin-top:10px;padding:12px;background:var(--surface-soft);border-radius:10px;font-size:13px;line-height:1.55;color:var(--text-soft)';
    const cv = document.createElement('canvas');
    cv.dataset.h = 260;
    cv.style.background = 'radial-gradient(ellipse at 50% 35%, #1e3a5f, #0b1220)';
    cv.style.marginTop = '10px';
    const legend = document.createElement('div');
    legend.style.cssText = 'font-size:11px;color:var(--text-muted);margin-top:6px';
    host.append(modeRow, wrap, gridHost, cv, legend);
    CHE.UI.stageTools(host, gridHost, {zoom:true});

    const T = {m:['metal','#e0e7ff','#6366f1'],p:['półmetal','#fef3c7','#f59e0b'],n:['niemetal','#dcfce7','#16a34a'],h:['halogen','#fce7f3','#ec4899'],g:['gaz szlachetny','#e0f2fe','#0284c7']};
    const CH = {z:['zasadowy','#bfdbfe','#2563eb'],a:['amfoteryczny','#fde68a','#d97706'],k:['kwasowy','#fecaca','#dc2626'],o:['obojętny','#e2e8f0','#94a3b8'],x:['brak tlenku w bazie','#f8fafc','#cbd5e1']};
    const TK = {metal:'m',metalloid:'p',nonmetal:'n',halogen:'h',noble:'g'};
    const CK = {zasadowy:'z',amfoteryczny:'a',kwasowy:'k',obojętny:'o',mieszany:'a'};
    const ROM = ['','I','II','III','IV','V','VI','VII','VIII'];
     
    function oxides(e) {
      const st = (CHE.DATA.OXIDE_STATES || {})[e.s] || [];
      return st.map(v => { const b = CHE.OXIDES && CHE.OXIDES.build(e.s, v); const o = b && CHE.OXIDES.get(b.formula); return {v, f: b ? b.formula : null, pretty: b ? b.pretty : '', o}; }).filter(x => x.o);
    }
    const META = {};
    CHE.DATA.ELEMENTS_54.forEach(e => { const ox = oxides(e), top = ox[ox.length - 1]; META[e.s] = {t: TK[e.t] || 'm', ox, ch: top ? (CK[top.o.char] || 'o') : 'x'}; });
    let mode = 'typ', sel = CHE.DATA.ELEMENTS_54[16];

    function color(e) {
      const m = META[e.s];
      if (mode === 'typ') return T[m.t];
      if (mode === 'ox') return CH[m.ch];
      const v = Math.max(0, Math.min(1, ((e.en || 0.8) - 0.8) / 3.2));
      const p = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
      const a = p('#f0fdfa'), b = p('#0f766e');
      return [e.en ? 'En ' + e.en : '—', '#' + a.map((x, i) => Math.round(x + (b[i] - x) * v).toString(16).padStart(2, '0')).join(''), '#0f766e'];
    }

    function build() {
      grid.innerHTML = '';
      CHE.DATA.ELEMENTS_54.forEach(e => {
        const b = document.createElement('button');
        b.type = 'button';
        b.style.cssText = `grid-column:${e.g};grid-row:${e.p};padding:3px 2px;border-radius:6px;cursor:pointer;font:inherit;display:flex;flex-direction:column;align-items:center;line-height:1.15;border:1.5px solid`;
        const c = color(e);
        b.style.background = c[1];
        b.style.borderColor = c[2];
        const dark = mode === 'en' && e.en && (e.en - 0.8) / 3.2 > 0.5;  
        b.style.color = dark ? '#fff' : 'var(--text)';
        b.innerHTML = `<small style="font-size:.58rem;opacity:.7">${e.z}</small><b style="font-size:.95rem">${e.s}</b><small style="font-size:.55rem;opacity:.8">${mode === 'en' && e.en ? String(e.en).replace('.', ',') : ''}</small>`;
        if (e === sel) b.style.boxShadow = '0 0 0 3px var(--accent)';
        b.onclick = () => { sel = e; build(); info(); };
        grid.appendChild(b);
      });
      const items = mode === 'typ' ? Object.values(T) : mode === 'ox' ? Object.values(CH) : null;
      legend.innerHTML = items
        ? items.map(l => `<span style="display:inline-flex;align-items:center;gap:4px;margin-right:12px"><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:${l[1]};border:2px solid ${l[2]}"></span>${l[0]}</span>`).join('')
        : 'Jaśniejszy = mniejsza elektroujemność, ciemniejszy = większa. Rośnie w prawo i w górę okresu.';
    }
    function info() {
      const e = sel, m = META[e.s];
      const stA = (CHE.DATA.OXIDE_STATES || {})[e.s] || [], val = stA.length ? stA.map(v => ROM[v]).join(', ') : '—';
      const oxs = m.ox.length
        ? m.ox.map(x => `<b>${x.pretty}</b> — <span style="color:${CH[CK[x.o.char] || 'o'][2]}">${x.o.char}</span>`).join(' · ')
        : (e.t === 'noble' ? 'gaz szlachetny — nie tworzy tlenków (model szkolny)' : 'brak tlenku tego pierwiastka w bazie lekcji');
      gridHost.innerHTML = `<b style="color:var(--text);font-size:15px">${e.s} — ${e.n}</b> (Z = ${e.z})<br>
        grupa ${e.g}, okres ${e.p} · wartościowość w tlenkach: <b>${val}</b><br>tlenki: ${oxs}`;
    }
    modeRow.querySelectorAll('[data-m]').forEach(b => b.onclick = () => {
      mode = b.dataset.m;
      modeRow.querySelectorAll('[data-m]').forEach(x => x.classList.toggle('on', x === b));
      build();
    });
    build(); info();

    M.add(cv, (ctx, w, h, time) => {
      const am = (CHE.DATA.ATOM_META || {})[sel.s];
      const shells = am && am.shells ? am.shells : [sel.z];
      const cx = w / 2, cy = h / 2;
      const R0 = 22;
      const dr = Math.min(24, (Math.min(w, h) / 2 - 30 - R0) / shells.length);
      shells.forEach((n, i) => {
        const r = R0 + dr * (i + 1);
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7);
        ctx.strokeStyle = 'rgba(148,163,184,.45)'; ctx.lineWidth = 1.5; ctx.stroke();
        const last = i === shells.length - 1;
        for (let k = 0; k < n; k++) {
          const a = time * (0.9 / (i + 1)) + k * 6.2832 / n + i;
          const px = cx + r * Math.cos(a), py = cy + r * Math.sin(a);
          ctx.beginPath(); ctx.arc(px, py, last ? 5.5 : 4.5, 0, 7);
          ctx.fillStyle = last ? '#fbbf24' : '#60a5fa';
          ctx.fill();
          if (last) { ctx.strokeStyle = '#fff7ed'; ctx.lineWidth = 1; ctx.stroke(); }
        }
      });
      const g = ctx.createRadialGradient(cx - 6, cy - 6, 2, cx, cy, R0);
      g.addColorStop(0, '#fca5a5'); g.addColorStop(1, '#b91c1c');
      ctx.beginPath(); ctx.arc(cx, cy, R0, 0, 7);
      ctx.fillStyle = g; ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '800 13px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(sel.z + '+', cx, cy);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '800 16px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(sel.s, 14, 26);
      ctx.font = '600 11px Inter, system-ui, sans-serif';
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('● walencyjne', 14, h - 32);
      ctx.fillStyle = '#60a5fa';
      ctx.fillText('● wewnętrzne', 14, h - 16);
    });
  }
});

defineView('beaker-prediction-enhanced',{
 title:'Zlewka z predykcją — wybierz obserwację i sprawdź wynik',tag:'MOTION',
 hint:'Najpierw wybierz przewidywane zjawiska. Dopiero potem uruchom doświadczenie.',
 foot:'Wersja ulepszona rozdziela predykcję, obserwację i wniosek — dzięki temu uczeń widzi, co przewidział i co rzeczywiście zaszło.',
 build(host){
  host.innerHTML='';
  const reactions=[
   {n:'Zn + HCl',out:['gaz'],eq:'Zn + 2 HCl → ZnCl₂ + H₂↑',why:'Powstają pęcherzyki wodoru; cynk jest przed wodorem w szeregu aktywności.'},
   {n:'Cu + HCl',out:['nic'],eq:'Cu + HCl → brak reakcji',why:'Miedź nie wypiera wodoru z nieutleniającego kwasu solnego.'},
   {n:'CuO + HCl',out:['barwa'],eq:'CuO + 2 HCl → CuCl₂ + H₂O',why:'Czarny CuO znika, a roztwór przyjmuje barwę związaną z Cu²⁺.'},
   {n:'CaCO₃ + HCl',out:['gaz'],eq:'CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑',why:'Wydziela się CO₂.'},
   {n:'AgNO₃ + HCl',out:['osad'],eq:'AgNO₃ + HCl → AgCl↓ + HNO₃',why:'Powstaje biały osad AgCl.'}
  ];
  const rbar=document.createElement('div');rbar.className='r';reactions.forEach((r,i)=>{const b=document.createElement('button');b.textContent=r.n;b.onclick=()=>{cur=i;reset();rbar.querySelectorAll('button').forEach((x,j)=>x.classList.toggle('on',j===i))};if(!i)b.classList.add('on');rbar.appendChild(b)});
  const pred=document.createElement('div');pred.className='r';pred.innerHTML='<b>Predykcja:</b> <button data-k="gaz">gaz</button><button data-k="osad">osad</button><button data-k="barwa">zmiana barwy</button><button data-k="nic">brak reakcji</button>';
  const cv=document.createElement('canvas');cv.dataset.h=330;cv.style.background='var(--surface-soft)';cv.style.borderRadius='var(--r-sm)';
  const controls=document.createElement('div');controls.className='r';controls.innerHTML='<button class="go">▶ wykonaj doświadczenie</button><button class="reset">↺ od nowa</button>';
  const note=document.createElement('div');note.className='note';note.textContent='Wybierz reakcję i zaznacz przewidywane zjawisko.';
  host.append(rbar,pred,cv,controls,note);
  let cur=0,chosen=new Set(),t0=null,done=false,tNow=0;
  function reset(){chosen.clear();t0=null;done=false;pred.querySelectorAll('[data-k]').forEach(b=>b.classList.remove('on'));controls.querySelector('.go').disabled=false;note.textContent='Najpierw predykcja, potem obserwacja.'}
  pred.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{if(t0!==null&&!done)return;const k=b.dataset.k;if(k==='nic')chosen.clear();else chosen.delete('nic');chosen.has(k)?chosen.delete(k):chosen.add(k);if(k==='nic')chosen.add('nic');b.parentElement.querySelectorAll('[data-k]').forEach(x=>x.classList.toggle('on',chosen.has(x.dataset.k)))});
  controls.querySelector('.reset').onclick=reset;controls.querySelector('.go').onclick=()=>{if(!chosen.size){note.textContent='Najpierw wybierz predykcję.';return}t0=tNow;done=false;controls.querySelector('.go').disabled=true};
  M.add(cv,(ctx,w,h,time)=>{tNow=time;const p=t0===null?0:Math.min(1,(time-t0)/6);const r=reactions[cur];if(t0!==null&&!done&&p>=1){done=true;controls.querySelector('.go').disabled=false;const ok=r.out.length===chosen.size&&r.out.every(x=>chosen.has(x));note.innerHTML=(ok?'✓ <b>Predykcja zgodna.</b>':'<b>Porównaj predykcję z obserwacją.</b>')+'<br><span style="font-family:var(--mono)">'+r.eq+'</span><br>'+r.why+'<br><b>Obserwacja:</b> '+r.out.join(', ')}
    const bx=w*.18,bw=w*.64,by=55,bh=h-88,top=by+bh*.22,bot=by+bh;CHE.LAB.GFX.canvasDraw(ctx,w,h,time,CHE.LAB.GFX.fromReaction(r,p),{rect:{x:bx,y:by,w:bw,h:bh}});
    ctx.fillStyle='var(--text)';ctx.font='800 15px Inter,system-ui';ctx.textAlign='center';ctx.fillText(r.n,w/2,28);ctx.font='600 11px Inter,system-ui';ctx.fillText(t0===null?'przed doświadczeniem':p<1?'reakcja trwa…':'obserwacja zakończona',w/2,45)
  });
 }
});

defineView('equilibrium', {
  title:'Równowaga HA ⇌ H⁺ + A⁻ — reguła przekory', tag:'MOTION',
  hint:'Dodaj H⁺, A⁻, HA, rozcieńcz lub usuń H⁺. Obserwuj Q vs K.',
  foot:'Równowaga dynamiczna: rozpad i łączenie trwają cały czas, z równą szybkością. Model dydaktyczny.',
  build(host) {
    host.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'r'; row.style.marginTop = '0';
    [['+ H⁺ (HCl)','H'],['+ A⁻ (sól)','A'],['+ HA','HA'],['rozcieńcz','dil'],['− usuń H⁺','rm'],['reset','reset']]
      .forEach(([t, k]) => {
        const b = document.createElement('button');
        b.type = 'button'; b.textContent = t; b.dataset.a = k;
        row.appendChild(b);
      });
    const cv = document.createElement('canvas');
    cv.dataset.h = 420;
    cv.style.background = 'var(--surface-soft)';
    cv.style.borderRadius = 'var(--r-sm)';
    const note = document.createElement('div');
    note.className = 'note';
    host.append(row, cv, note);

    const KF = 0.5, KR = 0.0389, SPEED = 2.2, VMAX = 3;
    let P, V, hist, marks, last = 0, acc = 0, msg = '', tm = 0;
    const pt = () => ({ x: Math.random(), y: Math.random() });
    function init() {
      P = { HA: [], H: [], A: [] };
      for (let i = 0; i < 100; i++) P.HA.push(pt());
      V = 1; hist = []; marks = []; acc = 0;
      msg = 'Układ startuje od samych cząsteczek HA i dochodzi do równowagi dynamicznej.';
      tm = 0;
    }
    init();
    const pick = a => a.splice(Math.floor(Math.random() * a.length), 1)[0];
    const K = KF / KR;
    const Q = () => P.HA.length ? P.H.length * P.A.length / V / P.HA.length : 99;
    const mark = l => marks.push({ t: tm, l });
    const say = (a, q) => {
      const s = q > K * 1.15 ? 'Q > K → przesunięcie w lewo (więcej HA)' : q < K / 1.15 ? 'Q < K → przesunięcie w prawo (więcej H⁺ i A⁻)' : 'Q ≈ K → równowaga';
      return a + ' ' + s + '.';
    };
    row.querySelectorAll('button').forEach(b => b.onclick = () => {
      const a = b.dataset.a;
      if (a === 'reset') { init(); return; }
      if (a === 'H') { for (let i = 0; i < 40; i++) P.H.push(pt()); mark('+H⁺'); msg = say('Dodano 40 H⁺ (HCl).', Q()); }
      if (a === 'A') { for (let i = 0; i < 40; i++) P.A.push(pt()); mark('+A⁻'); msg = say('Dodano 40 A⁻ (np. octan sodu).', Q()); }
      if (a === 'HA') { for (let i = 0; i < 40; i++) P.HA.push(pt()); mark('+HA'); msg = say('Dodano 40 HA.', Q()); }
      if (a === 'dil') {
        if (V >= VMAX) { msg = 'To maksymalne rozcieńczenie w modelu.'; return; }
        V = Math.min(VMAX, V * 1.5); mark('rozc.');
        msg = say('Rozcieńczono (większa objętość).', Q()) + ' Stopień dysocjacji α rośnie, choć stężenia jonów maleją.';
      }
      if (a === 'rm') {
        const n = Math.min(30, P.H.length);
        for (let i = 0; i < n; i++) pick(P.H);
        mark('−H⁺');
        msg = say('Usunięto H⁺ (zobojętnienie zasadą).', Q());
      }
    });
    function step(dt) {
      let d = KF * P.HA.length * dt * SPEED, r = KR * P.H.length * P.A.length / V * dt * SPEED;
      for (d = Math.floor(d) + (Math.random() < d % 1 ? 1 : 0); d > 0 && P.HA.length; d--) {
        const p = pick(P.HA);
        P.H.push({ x: p.x, y: p.y });
        P.A.push({ x: Math.max(0, Math.min(1, p.x + 0.04)), y: p.y });
      }
      for (r = Math.floor(r) + (Math.random() < r % 1 ? 1 : 0); r > 0 && P.H.length && P.A.length; r--) {
        const a = pick(P.H), b = pick(P.A);
        P.HA.push(Math.random() < 0.5 ? { x: a.x, y: a.y } : { x: b.x, y: b.y });
      }
    }
    M.add(cv, (ctx, w, h, time, dt) => {
      tm += dt; acc += dt;
      if (acc > 0.05) { last = 0; }
      step(dt * 0.05);
      if (acc > 0.25) {
        acc = 0;
        const n = P.H.length + P.HA.length;
        hist.push({ t:tm, a:n ? P.H.length / n : 0 });
        if (hist.length > 160) hist.shift();
      }
      const bh = 220, by = 56, bw = w * 0.3 + (w * 0.64 - w * 0.3) * (V - 1) / (VMAX - 1), bx = (w - bw) / 2;
      ctx.fillStyle = 'var(--surface-soft)';
      ctx.fillRect(bx, by, bw, bh);
      ctx.strokeStyle = 'var(--text-muted)';
      ctx.lineWidth = 3;
      ctx.strokeRect(bx, by, bw, bh);
      const wob = p => {
        p.x = Math.max(0, Math.min(1, p.x + (Math.random() - 0.5) * 0.012));
        p.y = Math.max(0, Math.min(1, p.y + (Math.random() - 0.5) * 0.012));
        return [bx + 14 + p.x * (bw - 28), by + 14 + p.y * (bh - 28)];
      };
      const dotc = (px, py, r, f, s, tx) => {
        ctx.beginPath(); ctx.arc(px, py, r, 0, 7);
        ctx.fillStyle = f; ctx.fill();
        ctx.strokeStyle = s; ctx.lineWidth = 1.2; ctx.stroke();
        if (tx) {
          ctx.fillStyle = '#0f172a';
          ctx.font = `700 ${Math.round(r * 1.05)}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(tx, px, py);
        }
      };
      P.HA.forEach(p => { const [a, b] = wob(p); dotc(a, b, 8, '#bbf7d0', '#16a34a', ''); dotc(a + 8, b - 5, 4.5, '#fff', '#64748b', ''); });
      P.A.forEach(p => { const [a, b] = wob(p); dotc(a, b, 8, '#bbf7d0', '#16a34a', 'A⁻'); });
      P.H.forEach(p => { const [a, b] = wob(p); dotc(a, b, 5.5, '#fecaca', '#dc2626', 'H⁺'); });
      ctx.fillStyle = 'var(--text)';
      ctx.font = '800 14px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(`HA: ${P.HA.length}   H⁺: ${P.H.length}   A⁻: ${P.A.length}   V: ×${V.toFixed(2).replace('.', ',')}`, 14, 24);
      ctx.font = '600 12px Inter, system-ui, sans-serif';
      ctx.fillStyle = 'var(--text-soft)';
      ctx.fillText(`Q = ${Q().toFixed(1)}  ·  K = ${K.toFixed(1)}`, 14, 44);
      const cx0 = 50, cw = w - 70, cy0 = by + bh + 36, ch = h - cy0 - 28;
      ctx.strokeStyle = 'var(--border)';
      ctx.lineWidth = 1;
      ctx.strokeRect(cx0, cy0, cw, ch);
      ctx.fillStyle = 'var(--text-muted)';
      ctx.font = '600 11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('α 100%', cx0 - 4, cy0 + 8);
      ctx.fillText('0', cx0 - 4, cy0 + ch);
      ctx.textAlign = 'left';
      ctx.fillText('stopień dysocjacji α', cx0, cy0 - 6);
      if (hist.length > 1) {
        const t1 = hist[hist.length - 1].t, t0 = Math.max(0, t1 - 40);
        const X = tt => cx0 + (tt - t0) / (t1 - t0 || 1) * cw;
        marks.forEach(m => {
          if (m.t < t0) return;
          ctx.strokeStyle = 'var(--c-warn)';
          ctx.setLineDash([4, 3]);
          ctx.beginPath(); ctx.moveTo(X(m.t), cy0); ctx.lineTo(X(m.t), cy0 + ch); ctx.stroke();
          ctx.setLineDash([]);
        });
        ctx.strokeStyle = 'var(--accent)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        hist.forEach((q, i) => {
          const px = X(q.t), py = cy0 + ch - q.a * ch;
          i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
        });
        ctx.stroke();
      }
      note.textContent = msg + ' Równowaga dynamiczna: rozpad i łączenie trwają cały czas. Model dydaktyczny.';
    });
  }
});

defineView('acid-game', {
  title:'Mini-gra: kwas, zasada, sól czy tlenek?', tag:'VIZ',
  hint:'10 pytań. Kliknij poprawną kategorię lub kwaśne H w cząsteczce.',
  foot:'Kwas = H + reszta kwasowa · zasada = metal + OH · sól = metal + reszta · tlenek = pierwiastek + O.',
  build(host) {
    host.innerHTML = '';
    const head = document.createElement('div');
    head.className = 'r'; head.style.marginTop = '0';
    head.innerHTML = '<b class="score" style="font-size:.9rem"></b><span class="prog" style="margin-left:auto;font-size:.85rem;color:var(--text-muted)"></span>';
    const q = document.createElement('div');
    q.className = 'note';
    q.style.cssText = 'font-size:1.05rem;font-weight:700;text-align:center';
    const svgHost = document.createElement('div');
    svgHost.style.marginTop = '10px';
    const btnRow = document.createElement('div');
    btnRow.className = 'r';
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = 'Naciśnij start.';
    const startRow = document.createElement('div');
    startRow.className = 'r';
    startRow.innerHTML = '<button class="start on">▶ start (10 pytań)</button>';
    host.append(head, q, svgHost, btnRow, note, startRow);

    const MOLS = [
      {f:'HCl',a:[['H',170,140],['Cl',330,140]],b:[[0,1,1]],ac:[0]},
      {f:'HNO₃',a:[['H',60,140],['O',150,140],['N',260,140],['O',340,65],['O',340,215]],b:[[0,1,1],[1,2,1],[2,3,2],[2,4,1]],ac:[0]},
      {f:'H₂SO₄',a:[['S',260,140],['O',260,55],['O',260,225],['O',160,140],['H',80,140],['O',360,140],['H',440,140]],b:[[0,1,2],[0,2,2],[0,3,1],[3,4,1],[0,5,1],[5,6,1]],ac:[4,6]},
      {f:'H₃PO₄',a:[['P',260,130],['O',260,45],['O',160,130],['H',80,130],['O',360,130],['H',440,130],['O',260,215],['H',335,245]],b:[[0,1,2],[0,2,1],[2,3,1],[0,4,1],[4,5,1],[0,6,1],[6,7,1]],ac:[3,5,7]},
      {f:'CH₃COOH',a:[['C',150,145],['H',95,80],['H',65,150],['H',95,215],['C',270,145],['O',335,215],['O',335,75],['H',430,65]],b:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[4,5,2],[4,6,1],[6,7,1]],ac:[7]},
    ];
    const CLS = [
      ['HCl','kwas'],['H₂SO₄','kwas'],['HNO₃','kwas'],['H₃PO₄','kwas'],['H₂CO₃','kwas'],
      ['NaOH','zasada'],['Ca(OH)₂','zasada'],['KOH','zasada'],
      ['NaCl','sól'],['CaCO₃','sól'],['K₂SO₄','sól'],
      ['CO₂','tlenek'],['CaO','tlenek'],['SO₃','tlenek'],
    ];
    const TIP = {kwas:'kwas = H + reszta kwasowa', zasada:'zasada = metal + OH', sól:'sól = metal + reszta', tlenek:'tlenek = pierwiastek + O'};
    const N = 10;
    let G = null;

    function ask() {
      G.r++;
      head.querySelector('.score').textContent = `Punkty: ${G.s} · seria: ${G.st}`;
      head.querySelector('.prog').textContent = G.over ? '' : `pytanie ${G.r}/${N}`;
      btnRow.innerHTML = '';
      svgHost.innerHTML = '';
      if (G.r > N) {
        G.over = true;
        const pct = Math.round(G.ok / N * 100);
        q.textContent = `Koniec! ${G.s} pkt · poprawnie ${G.ok}/${N} (${pct}%)`;
        note.textContent = pct >= 90 ? 'Mistrz chemii ' : pct >= 70 ? 'Bardzo dobrze ' : pct >= 50 ? 'Nieźle, ćwicz dalej' : 'Powtórz materiał ';
        startRow.querySelector('.start').disabled = false;
        return;
      }
      if (Math.random() < 0.4) {
        const m = MOLS[Math.floor(Math.random() * MOLS.length)];
        G.m = m; G.f = new Set(); G.t = 'mol';
        q.textContent = `Kliknij wszystkie kwaśne H w ${m.f} (${m.ac.length}).`;
        const svg = V.makeSvg(svgHost, [520, 280]);
        m.b.forEach(([i, j, o]) => {
          const p = m.a[i], qq = m.a[j];
          const dx = qq[1]-p[1], dy = qq[2]-p[2], L = Math.hypot(dx, dy);
          const nx = -dy/L*4, ny = dx/L*4;
          (o === 2 ? [-1, 1] : [0]).forEach(s => svg.appendChild(V.el('line', { x1:p[1]+nx*s, y1:p[2]+ny*s, x2:qq[1]+nx*s, y2:qq[2]+ny*s, stroke:'#334155', 'stroke-width':5, 'stroke-linecap':'round' })));
        });
        m.a.forEach((a, i) => {
          const e = CHE.DATA.ELEM[a[0]];
          const g = V.el('g', { style:'cursor:pointer' });
          g.appendChild(V.el('circle', { cx:a[1], cy:a[2], r:e.r, fill:`url(#mg-${a[0]})`, stroke:e.s, 'stroke-width':2.5 }));
          g.appendChild(V.el('text', { x:a[1], y:a[2], 'text-anchor':'middle', 'dominant-baseline':'central', 'font-size':a[0]==='H'?14:17, 'font-weight':800, fill:e.t, 'pointer-events':'none' }, a[0]));
          g.onclick = () => clickAtom(i, g);
          svg.appendChild(g);
        });
        note.textContent = 'Wskazówka: kwaśny H jest połączony z tlenem (grupa –OH kwasu tlenowego).';
      } else {
        const c = CLS[Math.floor(Math.random() * CLS.length)];
        G.c = c; G.t = 'cls';
        q.innerHTML = `Czym jest <span style="font-family:var(--mono);font-size:1.3rem;color:var(--accent)">${c[0]}</span>?`;
        ['kwas','zasada','sól','tlenek'].forEach(k => {
          const b = document.createElement('button');
          b.type = 'button'; b.textContent = k;
          b.onclick = () => answer(k === c[1], k);
          btnRow.appendChild(b);
        });
        note.textContent = 'Wybierz właściwą kategorię.';
      }
    }
    function score(ok) {
      if (ok) { G.st++; G.ok++; G.s += 10 + Math.min(G.st, 5) * 2; }
      else { G.st = 0; G.s = Math.max(0, G.s - 3); }
      head.querySelector('.score').textContent = `Punkty: ${G.s} · seria: ${G.st}`;
    }
    function answer(ok, k) {
      if (G.lock) return;
      G.lock = true;
      score(ok);
      btnRow.querySelectorAll('button').forEach(b => {
        b.disabled = true;
        if (b.textContent === G.c[1]) b.style.background = 'var(--c-e8-bg)';
        else if (b.textContent === k && !ok) b.style.background = 'var(--c-err-bg)';
      });
      note.textContent = (ok ? 'Dobrze! ' : 'To ' + G.c[1] + '. ') + TIP[G.c[1]] + '.';
      setTimeout(() => { G.lock = false; if (G && !G.over) ask(); }, 1600);
    }
    function clickAtom(i, g) {
      if (G.lock) return;
      const m = G.m, a = m.a[i];
      if (a[0] !== 'H') { note.textContent = 'To nie wodór — szukamy kwaśnego H.'; return; }
      if (G.f.has(i)) return;
      if (m.ac.includes(i)) {
        G.f.add(i);
        g.firstChild.setAttribute('stroke', 'var(--c-e8)');
        g.firstChild.setAttribute('stroke-width', 5);
        note.textContent = `Kwaśny H (${G.f.size}/${m.ac.length}).`;
        if (G.f.size === m.ac.length) {
          G.lock = true;
          score(true);
          note.textContent = 'Wszystkie kwaśne H znalezione!';
          setTimeout(() => { G.lock = false; if (!G.over) ask(); }, 1600);
        }
      } else {
        score(false);
        note.textContent = 'Ten H nie jest kwaśny (połączony z C).';
        g.firstChild.setAttribute('stroke', 'var(--c-err)');
      }
    }
    startRow.querySelector('.start').onclick = e => {
      G = { s:0, st:0, ok:0, r:0, over:false, lock:false };
      e.target.disabled = true;
      ask();
    };
    
    const defsSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    defsSvg.setAttribute('width', '0');
    defsSvg.setAttribute('height', '0');
    defsSvg.style.position = 'absolute';
    const NS = 'http://www.w3.org/2000/svg';
    const df = document.createElementNS(NS, 'defs');
    for (const k in CHE.DATA.ELEM) {
      const E = CHE.DATA.ELEM[k];
      const g = document.createElementNS(NS, 'radialGradient');
      g.setAttribute('id', 'mg-' + k);
      g.setAttribute('cx', '.35'); g.setAttribute('cy', '.3'); g.setAttribute('r', '.8');
      const s1 = document.createElementNS(NS, 'stop'); s1.setAttribute('offset', '0'); s1.setAttribute('stop-color', E.c1);
      const s2 = document.createElementNS(NS, 'stop'); s2.setAttribute('offset', '1'); s2.setAttribute('stop-color', E.c2);
      g.appendChild(s1); g.appendChild(s2);
      df.appendChild(g);
    }
    defsSvg.appendChild(df);
    host.appendChild(defsSvg);
  }
});