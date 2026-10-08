

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DOM;
let uid = 0;
const nextId = p => `${p}${++uid}`;
const el = D.el, svgEl = D.svg;
function makeSvg(host, vb, attrs){
  attrs = attrs || {};
  host.innerHTML = '';
  const s = svgEl('svg', { viewBox:`0 0 ${vb[0]} ${vb[1]}`, xmlns:D.NS, preserveAspectRatio:'xMidYMid meet', ...attrs });
  s.style.cssText = 'width:100%;height:auto;display:block;max-width:100%';
  host.appendChild(s);
  return s;
}
function marker(svg, color, size){
  color = color || 'var(--accent)'; size = size || 9;
  const id = nextId('arr-');
  let defs = svg.querySelector('defs');
  if(!defs){ defs = svgEl('defs'); svg.prepend(defs); }
  const m = svgEl('marker', {id, markerWidth:size, markerHeight:size, refX:size-2, refY:size/2, orient:'auto', markerUnits:'userSpaceOnUse'});
  m.appendChild(svgEl('path', { d:`M0 0 L${size} ${size/2} L0 ${size} z`, fill:color }));
  defs.appendChild(m);
  return `url(#${id})`;
}
const KINDS = {
  tl:{fill:'#e6f2f5',stroke:'#176b8c'}, bl:{fill:'#dbe3ee',stroke:'#2b5e9c'},
  am:{fill:'#e0d8ea',stroke:'#6b3fa0'}, gr:{fill:'#d8e8dd',stroke:'#2e7d4f'},
  pu:{fill:'#e0d8ea',stroke:'#6b3fa0'}, rd:{fill:'#f0d8d8',stroke:'#b83a45'},
  za:{fill:'#eadcc8',stroke:'#b06f1c'}, gy:{fill:'#f0f3f5',stroke:'#cbd5db'},
  bx:{fill:'#ffffff',stroke:'#cbd5db'}
};
function box(svg, opt){
  const k = KINDS[opt.kind] || KINDS.gy;
   
  const info = !!(opt.more || opt.hint);
  const g = info ? svgEl('g', { class:'che-fc-node', tabindex:0, role:'button', 'aria-label':(opt.title||'Element')+' — pokaż rozszerzenie' }) : svg;
  g.appendChild(svgEl('rect', { x:opt.x, y:opt.y, width:opt.w, height:opt.h, rx:10, fill:k.fill, stroke:k.stroke, 'stroke-width':1.8 }));
  const total = (opt.title?1:0) + (opt.lines||[]).length;
  const lh = 15;
  const block = total*lh + (opt.title?4:0);
  let cy = opt.y + (opt.h - block)/2 + 12;
  if(opt.title){
    g.appendChild(svgEl('text', { x: opt.x+opt.w/2, y: cy, 'text-anchor':'middle', 'font-size':13.5, 'font-weight':800, fill:k.stroke, 'font-family':'var(--sans)' }, opt.title));
    cy += lh + 4;
  }
  (opt.lines||[]).forEach((t, i)=>{
    const isMono = /[=→⇌↑↓]/.test(t);
    g.appendChild(svgEl('text', { x: opt.x+opt.w/2, y: cy + i*lh, 'text-anchor':'middle', 'font-size':11.5, fill:'#5e707a', 'font-family': isMono ? 'var(--mono)' : 'var(--sans)' }, t));
  });
  if(info){
    g.appendChild(svgEl('circle', { cx:opt.x+opt.w-12, cy:opt.y+12, r:8, fill:k.stroke }));
    g.appendChild(svgEl('text', { x:opt.x+opt.w-12, y:opt.y+16, 'text-anchor':'middle', 'font-size':11, 'font-weight':800, fill:'#fff', 'font-family':'var(--sans)' }, 'i'));
    svg.appendChild(g);
  }
  return svg;
}
function arrow(svg, opt){
  const mk = marker(svg, opt.color || 'var(--accent)');
  const path = opt.curve ? `M${opt.x1} ${opt.y1} Q${opt.curve.cx} ${opt.curve.cy} ${opt.x2} ${opt.y2}` : `M${opt.x1} ${opt.y1} L${opt.x2} ${opt.y2}`;
  svg.appendChild(svgEl('path', { d:path, fill:'none', stroke:opt.color||'var(--accent)', 'stroke-width':2.2, 'stroke-linecap':'round', 'marker-end':mk, 'stroke-dasharray':opt.dashed?'5 4':'' }));
  if(opt.label){
    const lx = opt.curve ? opt.curve.cx : (opt.x1+opt.x2)/2;
    const ly = opt.curve ? opt.curve.cy - 6 : (opt.y1+opt.y2)/2 - 8;
    svg.appendChild(svgEl('text', { x:lx, y:ly, 'text-anchor':'middle', 'font-size':11.5, 'font-weight':700, fill:'var(--accent)', 'font-family':'var(--mono)' }, opt.label));
  }
}
function fcCss(){
  if(document.getElementById('che-fc-css')) return;
  const st = document.createElement('style'); st.id = 'che-fc-css';
  st.textContent = '.che-fc-node{cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent}'+
    '.che-fc-node:hover rect,.che-fc-node:focus-visible rect{stroke-width:2.8}'+
    '.che-fc-node.on rect{stroke-width:3.4}'+
    '.che-fc-node.on{filter:drop-shadow(0 0 4px rgba(23,107,140,.5))}'+
    '.che-fc-btn{cursor:pointer;outline:none}.che-fc-btn:hover circle,.che-fc-btn:focus-visible circle{fill:#0f5470}';
  document.head.appendChild(st);
}
function fcWrap(text, n){
  const out = []; let line = '';
  String(text||'').split(/\s+/).forEach(w=>{
    if(!w) return;
    if((line+' '+w).trim().length > n){ if(line) out.push(line); line = w; }
    else line = (line+' '+w).trim();
  });
  if(line) out.push(line);
  return out;
}
const FC_PANEL = 112, FC_STEP_MS = 7000;
function fcPanel(s, vbw, y0, boxes, spec){
  fcCss();
  const h = FC_PANEL - 10, perLine = Math.max(28, Math.floor((vbw - 32) / 6.1)), maxLines = Math.floor((h - 34) / 15);
  const stepMs = (spec && spec.stepMs) || FC_STEP_MS;
  const g = svgEl('g', { 'aria-live':'polite' });
  g.appendChild(svgEl('rect', { x:4, y:y0, width:vbw-8, height:h, rx:10, fill:'#fff', stroke:'#cbd5db', 'stroke-width':1.5 }));
  const head = svgEl('text', { x:16, y:y0+21, 'font-size':13, 'font-weight':800, 'font-family':'var(--sans)' });
  const body = svgEl('g');
  const count = svgEl('text', { x:vbw-58, y:y0+21, 'text-anchor':'end', 'font-size':11.5, fill:'#687b85', 'font-weight':700, 'font-family':'var(--mono)' });
  const track = svgEl('rect', { x:16, y:y0+h-9, width:vbw-32, height:3, rx:1.5, fill:'#e3e9ed' });
  const bar = svgEl('rect', { x:16, y:y0+h-9, width:0, height:3, rx:1.5, fill:'#176b8c' });
   
  const btn = svgEl('g', { class:'che-fc-btn che-zoom-ui', tabindex:0, role:'button', 'aria-label':'Autoplay: start/pauza' });
  btn.appendChild(svgEl('circle', { cx:vbw-26, cy:y0+17, r:13, fill:'#176b8c' }));
  const ico = svgEl('g'); btn.appendChild(ico);
  g.appendChild(head); g.appendChild(count); g.appendChild(body); g.appendChild(track); g.appendChild(bar); g.appendChild(btn); s.appendChild(g);
  const nodes = Array.prototype.slice.call(s.querySelectorAll('.che-fc-node'));
  const infos = boxes.filter(b=> b.more || b.hint);
  const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  let cur = -1, playing = (!spec || spec.autoplay !== false) && !reduce, vis = !window.IntersectionObserver, elapsed = 0;
  function drawIco(){
    ico.innerHTML = '';
    const cx = vbw-26, cy = y0+17;
    if(playing){
      ico.appendChild(svgEl('rect', { x:cx-5, y:cy-5.5, width:3.4, height:11, rx:1, fill:'#fff' }));
      ico.appendChild(svgEl('rect', { x:cx+1.6, y:cy-5.5, width:3.4, height:11, rx:1, fill:'#fff' }));
    } else ico.appendChild(svgEl('path', { d:`M${cx-4} ${cy-6} L${cx+6} ${cy} L${cx-4} ${cy+6} z`, fill:'#fff' }));
  }
  function show(i){
    cur = i; body.innerHTML = ''; elapsed = 0; bar.setAttribute('width', 0);
    nodes.forEach((n, j)=> n.classList.toggle('on', j === i));
    if(i < 0){
      head.textContent = playing ? 'Autoplay…' : 'Kliknij ramkę z ikoną „i” albo ▶ (autoplay).';
      head.setAttribute('fill', '#687b85'); head.setAttribute('font-weight', 600); count.textContent = ''; return;
    }
    const b = infos[i];
    head.textContent = b.title || ''; head.setAttribute('fill', '#176b8c'); head.setAttribute('font-weight', 800);
    count.textContent = (i+1) + ' / ' + infos.length;
    let lines = [];
    if(b.hint) lines = lines.concat(fcWrap('Podpowiedź: ' + b.hint, perLine));
    if(b.more) lines = lines.concat(fcWrap(b.more, perLine));
    if(lines.length > maxLines){ lines = lines.slice(0, maxLines); lines[maxLines-1] = lines[maxLines-1].replace(/\s*\S*$/, '') + '…'; }
    lines.forEach((t, j)=> body.appendChild(svgEl('text', { x:16, y:y0+42+j*15, 'font-size':12, fill:'#17242c', 'font-family':'var(--sans)' }, t)));
  }
  function setPlaying(v){ playing = v; elapsed = 0; bar.setAttribute('width', 0); drawIco(); if(v && cur < 0) show(0); else if(cur < 0) show(-1); }
   
  function pick(i, e){
    if(e && e.detail >= 2) return;                
    playing = false; drawIco(); show(cur === i ? -1 : i);
  }
  nodes.forEach((n, i)=>{
    n.addEventListener('click', e=> pick(i, e));
    n.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); pick(i); } });
  });
  const toggle = e=>{ if(e && e.detail >= 2) return; setPlaying(!playing); };
  btn.addEventListener('click', toggle);
  btn.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); } });
  if(window.IntersectionObserver){
    new IntersectionObserver(es=>{ vis = es[es.length-1].isIntersecting; }, { threshold:.4 }).observe(s);
  }
  const TICK = 100;
  const timer = setInterval(()=>{
    if(!s.isConnected) return;                    
    if(!playing || !vis || document.hidden) return;
    if(cur < 0){ show(0); return; }
    elapsed += TICK; bar.setAttribute('width', Math.min(1, elapsed/stepMs) * (vbw-32));
    if(elapsed >= stepMs) show((cur+1) % infos.length);
  }, TICK);
  s.__fcStop = ()=> clearInterval(timer);
  drawIco(); show(-1);
}
function flowchart(host, spec){
  const boxes = spec.boxes || [];
  const vb = spec.vb || [760, 400];
  const info = boxes.some(b=> b.more || b.hint);
  const s = makeSvg(host, info ? [vb[0], vb[1] + FC_PANEL] : vb);
  boxes.forEach(b=> box(s, b));
  (spec.arrows || []).forEach(a=> arrow(s, a));
  (spec.labels || []).forEach(l=>{
    s.appendChild(svgEl('text', { x:l.x, y:l.y, 'text-anchor':l.anchor||'middle', 'font-size':l.size||11.5, fill:l.fill||'#5e707a', 'font-weight':l.weight||700, 'font-family':'var(--sans)' }, l.t));
  });
  if(info) fcPanel(s, vb[0], vb[1] + 8, boxes, spec);
  return s;
}
function barChart(host, opt){
  if(!opt || !Array.isArray(opt.rows) || !opt.rows.length){
    host.innerHTML = '<div class="lab-note">Brak danych do wykresu.</div>';
    return null;
  }
  const s = makeSvg(host, opt.vb || [760, 380]);
  const vw = (opt.vb || [760, 380])[0];
  const L = 150, R = 70, T = 20;
  const W = vw - L - R;
  const BH = 22, GAP = 8;
  const min = opt.min || 0.0005;
  const log10 = v => Math.log10(Math.max(v, min));
  const xMin = log10(min), xMax = log10(1);
  const X = v => L + ((log10(v) - xMin)/(xMax - xMin))*W;
  [0.001, 0.01, 0.1, 1].forEach(t=>{
    const x = X(t);
    s.appendChild(svgEl('line', { x1:x, y1:T, x2:x, y2: T + opt.rows.length*(BH+GAP) + 6, stroke:'#cbd5db', 'stroke-dasharray':'3 4' }));
    s.appendChild(svgEl('text', { x, y: T + opt.rows.length*(BH+GAP) + 26, 'text-anchor':'middle', 'font-size':10.5, fill:'#687b85', 'font-family':'var(--mono)' }, (t*100).toString().replace('.', ',') + '%'));
  });
  opt.rows.forEach((r, i)=>{
    const y = T + i*(BH+GAP);
    s.appendChild(svgEl('text', { x:L-10, y: y+BH/2+4, 'text-anchor':'end', 'font-size':12, fill:'#17242c', 'font-weight':700, 'font-family':'var(--mono)' }, r.n));
    const col = opt.colorOf ? opt.colorOf(r) : 'var(--accent)';
    s.appendChild(svgEl('rect', { x:L, y, width: Math.max(2, X(r.a)-L), height:BH, rx:4, fill:col }));
    const label = r.a >= 0.995 ? '≈100%' : (r.a*100).toFixed(r.a < 0.05 ? 2 : 1).replace('.', ',') + '%';
    s.appendChild(svgEl('text', { x: Math.min(X(r.a)+6, vw-R+4), y: y+BH/2+4, 'font-size':11, fill:'#5e707a', 'font-weight':700, 'font-family':'var(--mono)' }, label));
  });
  return s;
}
function molecule2D(host, opt){
  const s = makeSvg(host, opt.vb || [520, 280]);
  let defs = svgEl('defs'); s.appendChild(defs);
  (opt.mol.atoms || []).forEach(a=>{
    const E = C.DATA.ELEM?.[a[0]];
    if(!E) return;
    if(defs.querySelector(`#mg-${a[0]}`)) return;
    const g = svgEl('radialGradient', { id:`mg-${a[0]}`, cx:'.35', cy:'.3', r:'.8' });
    g.appendChild(svgEl('stop', { offset:0, 'stop-color':E.c1 }));
    g.appendChild(svgEl('stop', { offset:1, 'stop-color':E.c2 }));
    defs.appendChild(g);
  });
  (opt.mol.groups || []).forEach(grp=>{
    const xs = grp.ids.map(i=> opt.mol.atoms[i][1]);
    const ys = grp.ids.map(i=> opt.mol.atoms[i][2]);
    const x = Math.min(...xs) - 42, y = Math.min(...ys) - 42;
    const w = Math.max(...xs) + 42 - x, h = Math.max(...ys) + 42 - y;
    s.appendChild(svgEl('rect', { x, y, width:w, height:h, rx:14, fill:grp.c, 'fill-opacity':.09, stroke:grp.c, 'stroke-width':2, 'stroke-dasharray':'7 5' }));
    s.appendChild(svgEl('text', { x: x+w/2, y: y-8, 'text-anchor':'middle', 'font-size':13, 'font-weight':800, fill:grp.c }, grp.l));
  });
  (opt.mol.bonds || []).forEach(([a, b, o])=>{
    const p = opt.mol.atoms[a], q = opt.mol.atoms[b];
    const dx = q[1]-p[1], dy = q[2]-p[2], L = Math.hypot(dx, dy);
    const nx = -dy/L, ny = dx/L;
    const offs = o === 2 ? [-4.5, 4.5] : [0];
    offs.forEach(f=>{
      s.appendChild(svgEl('line', { x1:p[1]+nx*f, y1:p[2]+ny*f, x2:q[1]+nx*f, y2:q[2]+ny*f, stroke:'#5c6c73', 'stroke-width':6, 'stroke-linecap':'round' }));
    });
  });
  (opt.mol.atoms || []).forEach((a, i)=>{
    const E = C.DATA.ELEM?.[a[0]] || { r:20, s:'#64748b', t:'#0f172a' };
    s.appendChild(svgEl('circle', { cx:a[1], cy:a[2], r:E.r, fill:`url(#mg-${a[0]})`, stroke:E.s, 'stroke-width':2.5 }));
    s.appendChild(svgEl('text', { x:a[1], y:a[2], 'text-anchor':'middle', 'dominant-baseline':'central', 'font-size': a[0]==='H'?14:17, 'font-weight':800, fill:E.t, 'pointer-events':'none' }, a[0]));
    if(opt.mol.acid && opt.mol.acid.includes(i)){
      s.appendChild(svgEl('circle', { cx:a[1], cy:a[2], r:E.r + 9, fill:'none', stroke:'#b83a45', 'stroke-width':3 }));
    }
  });
  return s;
}
function table(host, opt){
  host.innerHTML = '';
  const wrap = el('div');
  wrap.style.cssText = 'overflow-x:auto;width:100%';
  const t = el('table');
  t.style.cssText = 'width:100%;border-collapse:collapse;font-size:13px;min-width:520px';
  const thead = el('thead');
  const hr = el('tr');
  opt.columns.forEach(c=>{
    const th = el('th'); th.textContent = c;
    th.style.cssText = 'background:#f0f3f5;text-align:left;padding:8px 10px;border-bottom:2px solid #cbd5db;font-size:10.5px;color:#5e707a;text-transform:uppercase;letter-spacing:.5px;font-weight:800';
    hr.appendChild(th);
  });
  thead.appendChild(hr); t.appendChild(thead);
  const tb = el('tbody');
  opt.rows.forEach(r=>{
    const tr = el('tr');
    r.forEach(cell=>{
      const td = el('td');
      if(opt.safe === true) td.textContent = String(cell);
      else td.innerHTML = cell;
      td.style.cssText = 'padding:8px 10px;border-bottom:1px solid #d7dfe4;color:#314650;vertical-align:top';
      tr.appendChild(td);
    });
    tb.appendChild(tr);
  });
  t.appendChild(tb); wrap.appendChild(t); host.appendChild(wrap);
  return t;
}
function band(host, opt){
  const s = makeSvg(host, opt.vb || [760, 200]);
  const vw = (opt.vb || [760, 200])[0];
  const L = 60, R = 20, Y = 30, h = 34;
  const W = vw - L - R;
  (opt.segments || []).forEach(seg=>{
    s.appendChild(svgEl('rect', { x: L + W*seg.from, y:Y, width: W*(seg.to-seg.from), height:h, fill:seg.fill||'#f0f3f5', stroke:seg.stroke||'none' }));
    if(seg.label) s.appendChild(svgEl('text', { x: L + W*(seg.from+seg.to)/2, y: Y+h/2+4, 'text-anchor':'middle', 'font-size':11, fill:seg.tcolor||'#17242c', 'font-weight':700 }, seg.label));
  });
  (opt.ticks || []).forEach(t=>{
    const x = L + W*t.at;
    s.appendChild(svgEl('line', { x1:x, y1:Y-6, x2:x, y2:Y+h+6, stroke:'#cbd5db', 'stroke-width':1.5 }));
    s.appendChild(svgEl('text', { x, y: Y+h+22, 'text-anchor':'middle', 'font-size':11, fill:'#687b85', 'font-family':'var(--mono)', 'font-weight':600 }, t.label));
  });
  return s;
}
function scale(host, opt){
  const s = makeSvg(host, opt.vb || [760, 140]);
  const vw = (opt.vb || [760, 140])[0];
  const L = 50, R = 50, Y = 60, h = 22;
  const W = vw - L - R;
  const stops = ['#e5262e','#ef5a28','#f6a21e','#d7d93a','#5cb85c','#21a89a','#2f7fc1','#4a4bb5','#6b2d8f'];
  const id = nextId('grad-');
  let defs = s.querySelector('defs') || svgEl('defs');
  if(!defs.parentNode) s.appendChild(defs);
  const lg = svgEl('linearGradient', { id, x1:'0%', y1:'0%', x2:'100%', y2:'0%' });
  stops.forEach((c, i)=> lg.appendChild(svgEl('stop', { offset:(i/(stops.length-1)*100)+'%', 'stop-color':c })));
  defs.appendChild(lg);
  s.appendChild(svgEl('rect', { x:L, y:Y, width:W, height:h, rx:11, fill:`url(#${id})` }));
  for(let i = opt.min; i <= opt.max; i++){
    const x = L + W * ((i - opt.min)/(opt.max - opt.min));
    s.appendChild(svgEl('text', { x, y: Y+h+18, 'text-anchor':'middle', 'font-size':11, fill:'#687b85', 'font-family':'var(--mono)' }, String(i)));
  }
  if(typeof opt.pos === 'number'){
    const px = L + W*((opt.pos - opt.min)/(opt.max - opt.min));
    s.appendChild(svgEl('line', { x1:px, y1:Y-10, x2:px, y2:Y+h+10, stroke:'#17242c', 'stroke-width':2, 'stroke-dasharray':'4 3' }));
    s.appendChild(svgEl('text', { x:px, y:Y-16, 'text-anchor':'middle', 'font-size':13, 'font-weight':800, fill:'#17242c' }, opt.label||''));
  }
  return s;
}
function radial(host, opt){
  const s = makeSvg(host, opt.vb || [900, 480]);
  const cx = opt.center.x, cy = opt.center.y;
  (opt.nodes || []).forEach((n, i)=>{
    const dx = n.x-cx, dy = n.y-cy;
    const dist = Math.hypot(dx, dy);
    const curve = Math.min(50, dist*0.2);
    const mx = cx + dx*0.5 + (i%2?-curve:curve);
    const my = cy + dy*0.5 + (i%3 - 1)*curve;
    s.appendChild(svgEl('path', { d:`M${cx} ${cy} Q${mx} ${my} ${n.x} ${n.y}`, fill:'none', stroke:n.c, 'stroke-width':3, 'stroke-linecap':'round', opacity:.55 }));
  });
  s.appendChild(svgEl('circle', { cx, cy, r:58, fill:'#e6f2f5', stroke:'#176b8c', 'stroke-width':3 }));
  s.appendChild(svgEl('text', { x:cx, y:cy+8, 'text-anchor':'middle', 'font-size':22, 'font-weight':800, fill:'#176b8c' }, opt.center.label||'KWAS'));
  (opt.nodes || []).forEach(n=>{
    const w = Math.max(120, n.l.length*12);
    s.appendChild(svgEl('rect', { x:n.x-w/2, y:n.y-22, width:w, height:44, rx:12, fill:'#fff', stroke:n.c, 'stroke-width':2.2 }));
    s.appendChild(svgEl('text', { x:n.x, y:n.y+6, 'text-anchor':'middle', 'font-size':15, 'font-weight':800, fill:n.c }, n.l));
  });
  return s;
}
C.VIZ = { version:'2.17', el, makeSvg, marker, box, arrow, flowchart, barChart, molecule2D, table, radial, band, scale };
})(window);

} catch (err) {
  try { console.warn('[CHE module 30]', err && err.message ? err.message : err); } catch(_){}
}