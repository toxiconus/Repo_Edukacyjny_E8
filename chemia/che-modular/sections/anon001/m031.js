try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DOM;
const scenes = [];
let running = false, last = 0;
const REDUCED = !!(g.matchMedia && g.matchMedia('(prefers-reduced-motion: reduce)').matches);
const IO = typeof IntersectionObserver !== 'undefined'
  ? IntersectionObserver
  : function(cb){ this._cb = cb; this.observe = ()=>{ try{ cb([{target:null,isIntersecting:true}]); }catch(_){} }; this.unobserve = ()=>{}; };
function wake(){ if(!running && scenes.length){ running = true; last = performance.now(); requestAnimationFrame(loop); } }
function fit(canvas){
  const dpr = Math.min(g.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth || 600, h = canvas.clientHeight || Number(canvas.dataset.h) || 320;
  if(canvas.width !== Math.round(w*dpr) || canvas.height !== Math.round(h*dpr)){
    canvas.width = Math.round(w*dpr); canvas.height = Math.round(h*dpr);
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}
function makePilot(s){
  if(s.canvas.dataset.motionPilot === '1') return;
  s.canvas.dataset.motionPilot = '1';
  const wrap = D.el('div', { class:'motion-pilot' });
  const play = D.el('button', { type:'button' }, s.playing ? 'II' : '▶');
  const step = D.el('button', { type:'button' }, '▸|');
  const reset = D.el('button', { type:'button' }, '↺');
  const speed = D.el('select');
  [['0.5','0,5×'],['1','1×'],['1.5','1,5×'],['2','2×']].forEach(([v,t])=>{
    const o = D.el('option', { value:v }, t);
    if(v === '1') o.selected = true;
    speed.appendChild(o);
  });
  const status = D.el('span', { class:'motion-status' }, s.playing ? 'odtwarzanie' : 'pauza');
  wrap.append(play, step, reset, speed, status);
  s.canvas.parentElement.insertBefore(wrap, s.canvas);
  play.onclick = ()=>{ s.playing = !s.playing; status.textContent = s.playing ? 'odtwarzanie' : 'pauza'; play.textContent = s.playing ? 'II' : '▶'; wake(); };
  step.onclick = ()=>{ s.playing = false; play.textContent = '▶'; s.phase += 1/30; s.force = true; status.textContent = 'krok'; renderOne(s, 0); };
  reset.onclick = ()=>{ s.phase = 0; s.force = true; status.textContent = 'reset'; renderOne(s, 0); };
  speed.onchange = ()=>{ s.speed = +speed.value; };
}
function renderOne(s, dt){
  if(!s.canvas.isConnected) return;
  const { ctx, w, h } = fit(s.canvas);
  ctx.clearRect(0, 0, w, h);
  try { s.draw(ctx, w, h, s.phase, dt); }
  catch(e){ if(!s.errorReported){ s.errorReported = true; s.canvas.dataset.motionError = '1'; } }
}
function add(canvas, draw, opts){
  opts = opts || {};
  canvas.dataset.h = canvas.dataset.h || 320;
  canvas.style.height = canvas.dataset.h + 'px';
  const entry = { canvas, draw, visible:true, errorReported:false, playing:opts.autoplay !== false && !REDUCED, phase:0, speed:1, force:true };
  scenes.push(entry);
  if(!running){ running = true; requestAnimationFrame(loop); }
  const io = new IO(es=>{
    for(const e of es){ if(e.target === canvas){ entry.visible = e.isIntersecting; if(entry.visible) entry.force = true; } }
    wake();
  }, { rootMargin:'160px' });
  io.observe(canvas);
  makePilot(entry);
  return ()=>{ const i = scenes.indexOf(entry); if(i>=0) scenes.splice(i, 1); io.unobserve(canvas); };
}
function loop(t){
  if(!scenes.length){ running = false; last = t; return; }
  const raw = Math.min((t-last)/1000, .05); last = t;
  if(document.hidden){ running = false; return; }
  let active = false;
  for(const s of scenes.slice()){
    if(!s.visible || !s.canvas.isConnected) continue;
    if(s.playing || s.force) active = true;
    const dt = s.playing ? raw*s.speed : 0;
    if(s.playing) s.phase += dt;
    if(s.playing || s.force){ s.force = false; renderOne(s, dt); }
  }
  if(active) requestAnimationFrame(loop); else running = false;
}
const helpers = {
  dot(ctx, x, y, r, fill, stroke, text, textColor){
    ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fillStyle = fill; ctx.fill();
    if(stroke){ ctx.strokeStyle = stroke; ctx.lineWidth = 1.4; ctx.stroke(); }
    if(text){ ctx.fillStyle = textColor || '#0f172a'; ctx.font = `700 ${Math.round(r*.85)}px Inter,system-ui,sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, x, y+.5); }
  },
  label(ctx, text, x, y, opts){
    opts = opts || {};
    ctx.fillStyle = opts.color || '#17242c';
    ctx.font = `${opts.weight || 800} ${opts.size || 14}px Inter,system-ui,sans-serif`;
    ctx.textAlign = opts.align || 'center';
    ctx.textBaseline = opts.baseline || 'middle';
    ctx.fillText(text, x, y);
  },
  roundRect(ctx, x, y, w, h, r, fill, stroke){
    ctx.beginPath(); ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y); ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r); ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h); ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r); ctx.quadraticCurveTo(x, y, x+r, y); ctx.closePath();
    if(fill){ ctx.fillStyle = fill; ctx.fill(); }
    if(stroke){ ctx.strokeStyle = stroke; ctx.stroke(); }
  }
};
C.MOTION = { version:'2.17', add, helpers, fit, reduced:REDUCED,
  stats:()=> scenes.map(s=>({ canvas:s.canvas, playing:s.playing, visible:s.visible, phase:s.phase, error:!!s.canvas.dataset.motionError })),
  playAll:()=>{ scenes.forEach(s=> s.playing = true); wake(); },
  pauseAll:()=> scenes.forEach(s=> s.playing = false),
  resetAll:()=>{ scenes.forEach(s=>{ s.phase = 0; s.force = true; }); wake(); },
  stepAll:()=>{ scenes.forEach(s=>{ s.phase += 1/30; s.force = true; }); wake(); },
  wake };
})(window);

} catch (err) {
  try { console.warn('[CHE module 31]', err && err.message ? err.message : err); } catch(_){}
}

