try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const NS = 'http://www.w3.org/2000/svg';
function $(id){ return document.getElementById(id); }
function $$(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
function esc(v){ return String(v ?? '').replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }
function el(tag, attrs, text){
  const e = document.createElement(tag);
  if(attrs) for(const k in attrs){ if(attrs[k] == null) continue; if(k === 'font-family' && /var\(/.test(attrs[k]) && e.style) e.style.fontFamily = attrs[k]; else e.setAttribute(k, attrs[k]); }  
  if(text !== undefined && text !== '') e.textContent = text;
  return e;
}
function svg(tag, attrs, text){
  const e = typeof document.createElementNS === 'function' ? document.createElementNS(NS, tag) : document.createElement(tag);
  try { Object.defineProperty(e,'__cheSvgTag',{value:String(tag),configurable:true}); } catch(_) {}
  if(attrs) for(const k in attrs){ if(attrs[k] == null) continue; if(k === 'font-family' && /var\(/.test(attrs[k]) && e.style) e.style.fontFamily = attrs[k]; else e.setAttribute(k, attrs[k]); }  
  if(text !== undefined && text !== '') e.textContent = text;
  return e;
}
function on(target, event, handler){
  if(!target || typeof handler !== 'function') return ()=>{};
  target.addEventListener(event, handler);
  return ()=> target.removeEventListener(event, handler);
}
function off(target, event, handler){
  if(target && typeof handler === 'function') target.removeEventListener(event, handler);
}
function frag(elements){
  const f = document.createDocumentFragment();
  (elements || []).forEach(e=>{ if(e) f.appendChild(e); });
  return f;
}
C.DOM = { version:'2.17', $, $$, esc, el, svg, on, off, frag, NS };
})(window);

} catch (err) {
  try { console.warn('[CHE module 29]', err && err.message ? err.message : err); } catch(_){}
}

