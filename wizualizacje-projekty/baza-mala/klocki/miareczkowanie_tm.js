/* KLOCEK: titration-merged — Miareczkowanie: typ (mocny/słaby kwas) + wskaźnik (oranż, BBT, fenoloftaleina) + krzywa + kolba + autoplay
   (port z visual-library-v001, 2026-11-04). Wymaga model_widok.js i ph_panel.js (CHE.COLORS, dane kwasów) przed sobą. */
(function(){
var C=window.CHE=window.CHE||{};C.EQUILIBRIUM=C.EQUILIBRIUM||{};
if(!C.EQUILIBRIUM.titrationPH)C.EQUILIBRIUM.titrationPH=function(o){   /* C, V0 [cm³] kwasu; V [cm³] NaOH o tym samym stężeniu; type: strongStrong | weakStrong (Ka) */
 var Kw=1e-14,Vt=o.V0+o.V,ca=o.C*o.V0/Vt,cn=o.C*o.V/Vt;
 if(o.type==='strongStrong'){var d=ca-cn;if(Math.abs(d)<1e-12)return 7;return d>0?-Math.log10(d):14+Math.log10(-d)}
 var lo=-14,hi=0,Ka=o.Ka||1.8e-5;for(var i=0;i<90;i++){var m=(lo+hi)/2,h=Math.pow(10,m),f=h+cn-ca*Ka/(Ka+h)-Kw/h;if(f>0)lo=m;else hi=m}return -(lo+hi)/2};
})();
(function(){
const CHE=window.CHE,defineView=CHE.VIEW.define;
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
})();
