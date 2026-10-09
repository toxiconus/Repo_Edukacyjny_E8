

(function(){
'use strict';
var C=window.CHE=window.CHE||{};
var MIN=1, DEF_MAX=8;
var fsState=null;                        
var attached=new WeakMap();

function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
function isOff(el){return !!(el.closest&&el.closest('[data-zoom="off"]'));}
function isUi(t){return !!(t&&t.closest&&t.closest('button,a,input,select,textarea,label,[contenteditable],[role="button"],[role="slider"],.che-zoom-ui'));}

function Controller(target, frame, opt){
  var self=this;
  this.t=target; this.f=frame; this.o=opt;
  this.s=1; this.x=0; this.y=0;
  this.pts=new Map(); this.pd=0; this.pm=null; this.moved=false;
  this.lastTap=0; this.lastTapX=0; this.lastTapY=0;
  this.onChange=null;

  target.style.transformOrigin='0 0';
  target.style.willChange='transform';

  function rect(){return frame.getBoundingClientRect();}

  this.apply=function(){
    var r=rect(), w=r.width, h=r.height;
     
    self.x=clamp(self.x, w-w*self.s, 0);
    self.y=clamp(self.y, h-h*self.s, 0);
    target.style.transform=(self.s===1&&!self.x&&!self.y)?'':'translate('+self.x+'px,'+self.y+'px) scale('+self.s+')';
    frame.classList.toggle('che-zoomed', self.s>1.001);
     
    if(!self.o.own) frame.style.touchAction=self.s>1.001?'none':'pan-x pan-y';
    if(self.onChange) self.onChange(self);
  };
   
  this.zoomAt=function(ns,px,py){
    ns=clamp(ns,MIN,opt.max||DEF_MAX);
    var r=rect(), cx=px-r.left, cy=py-r.top;
    var k=ns/self.s;
    self.x=cx-(cx-self.x)*k; self.y=cy-(cy-self.y)*k; self.s=ns;
    self.apply();
  };
  this.zoomCenter=function(f){var r=rect();self.zoomAt(self.s*f,r.left+r.width/2,r.top+r.height/2);};
  this.reset=function(){self.s=1;self.x=0;self.y=0;self.apply();};

  function dist(){var a=Array.from(self.pts.values());return Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);}
  function mid(){var a=Array.from(self.pts.values());return {x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2};}

  frame.addEventListener('pointerdown',function(e){
    if(isUi(e.target)) return;
    if(self.o.own){ self.pts.set(e.pointerId,{x:e.clientX,y:e.clientY,t:Date.now()}); self.moved=false; self._down={x:e.clientX,y:e.clientY,id:e.pointerId}; return; }
    if(e.pointerType==='mouse'&&e.button!==0) return;
    var nowp=Date.now(); self.pts.forEach(function(v,k){ if(nowp-(v.t||0)>3000) self.pts.delete(k); });
    self.pts.set(e.pointerId,{x:e.clientX,y:e.clientY,t:nowp});
    self.moved=false;
    if(self.pts.size===2){self.pd=dist();self.pm=mid();self.moved=true;}
    else if(self.s>1.001){try{frame.setPointerCapture(e.pointerId);}catch(_){}}
    self._down={x:e.clientX,y:e.clientY,id:e.pointerId};
  });

  frame.addEventListener('pointermove',function(e){
    if(!self.pts.has(e.pointerId)) return;
    var prev=self.pts.get(e.pointerId);
    self.pts.set(e.pointerId,{x:e.clientX,y:e.clientY,t:Date.now()});
    if(self.o.own){ if(self.pts.size>1||(self._down&&Math.abs(e.clientX-self._down.x)+Math.abs(e.clientY-self._down.y)>8)) self.moved=true; return; }
    if(self.pts.size===2){
      var d=dist(), m=mid();
      if(self.pd>0){
         
        self.x+=m.x-self.pm.x; self.y+=m.y-self.pm.y;
        self.zoomAt(self.s*d/self.pd,m.x,m.y);
      }
      self.pd=d; self.pm=m; self.moved=true;
      e.preventDefault();
    } else if(self.pts.size===1&&self.s>1.001){
      self.x+=e.clientX-prev.x; self.y+=e.clientY-prev.y;
      if(Math.abs(e.clientX-self._down.x)+Math.abs(e.clientY-self._down.y)>6) self.moved=true;
      self.apply(); e.preventDefault();
    } else if(self._down && Math.abs(e.clientX-self._down.x)+Math.abs(e.clientY-self._down.y)>8){
      self.moved=true;
    }
  });

  function up(e){
    var had=self.pts.has(e.pointerId);
    self.pts.delete(e.pointerId); self.pd=0;
    if(!had) return;
    if(self.pts.size===0&&!self.moved&&e.type==='pointerup'&&e.pointerType!=='mouse'){
       
      var now=Date.now();
      if(now-self.lastTap<320&&Math.hypot(e.clientX-self.lastTapX,e.clientY-self.lastTapY)<30){
        self.lastTap=0; if(self.o.onDouble) self.o.onDouble(e);
      } else { self.lastTap=now; self.lastTapX=e.clientX; self.lastTapY=e.clientY; }
    }
  }
  frame.addEventListener('pointerup',up);
  frame.addEventListener('pointercancel',up);

  frame.addEventListener('dblclick',function(e){
    if(isUi(e.target)) return;
    e.preventDefault();
    if(self.o.onDouble) self.o.onDouble(e);
  });

  frame.addEventListener('wheel',function(e){
    if(self.o.own) return;
    if(!(self.o.wheelAlways||e.ctrlKey||e.metaKey)) return;
    e.preventDefault();
    var f=Math.exp(-e.deltaY*(e.ctrlKey?0.01:0.0018));
    self.zoomAt(self.s*f,e.clientX,e.clientY);
  },{passive:false});

  frame.addEventListener('gesturestart',function(e){e.preventDefault();});

  if(window.ResizeObserver) new ResizeObserver(function(){ if(self.s>1.001) self.apply(); }).observe(frame);
}

function ensureFrame(el){
  if(el.parentNode&&el.parentNode.classList&&el.parentNode.classList.contains('che-zoom-frame')) return el.parentNode;
  var cs=getComputedStyle(el), pw=el.parentNode.clientWidth||1;
  var full=el.getBoundingClientRect().width>=pw*0.9||/%/.test(el.style.width||'');
  var f=document.createElement('div');
  f.className='che-zoom-frame'+(full?'':' che-zoom-fit');
  f.style.touchAction='pan-x pan-y';
  el.parentNode.insertBefore(f,el); f.appendChild(el);
  return f;
}

function openFullscreen(el, ctl0){
  if(fsState) return;
  var parent=el.parentNode, next=el.nextSibling;
  var ph=document.createElement('span'); ph.className='che-zoom-ph';
  var rect=el.getBoundingClientRect();
  ph.style.cssText='display:block;width:'+rect.width+'px;height:'+rect.height+'px';
  parent.insertBefore(ph,el);

  var ov=document.createElement('div'); ov.className='che-zoom-ov';
  ov.setAttribute('role','dialog'); ov.setAttribute('aria-label','Powiększenie');
  var stage=document.createElement('div'); stage.className='che-zoom-stage';
  var bar=document.createElement('div'); bar.className='che-zoom-bar che-zoom-ui';
  bar.innerHTML='<button type="button" data-a="out" aria-label="Pomniejsz">−</button>'+
    '<span class="che-zoom-pct">100%</span>'+
    '<button type="button" data-a="in" aria-label="Powiększ">+</button>'+
    '<button type="button" data-a="reset" aria-label="Skala 1×">1×</button>'+
    '<button type="button" data-a="close" class="che-zoom-x" aria-label="Zamknij">✕</button>';
  var hint=document.createElement('div'); hint.className='che-zoom-hint che-zoom-ui';
  hint.textContent='dwuklik = zamknij · szczypnij lub kółko = zoom · przeciągnij = przesuń';
  ov.appendChild(stage); ov.appendChild(bar); ov.appendChild(hint);
  document.body.appendChild(ov);
  stage.appendChild(el);

  var saved={w:el.style.width,h:el.style.height,mw:el.style.maxWidth,mh:el.style.maxHeight,t:el.style.transform};
  el.classList.add('che-zoom-in-fs');
  el.style.transform='';
  var tag=el.tagName.toLowerCase();
  if(tag==='canvas'){
     
    var ar=(el.width&&el.height)?el.width/el.height:(rect.width/rect.height||1);
    stage.dataset.ar=ar;
  }

  var ctl=new Controller(el,stage,{max:16,wheelAlways:true,own:!!(ctl0&&ctl0.o&&ctl0.o.own),onDouble:function(){close();}});
  ctl.onChange=function(c){ov.querySelector('.che-zoom-pct').textContent=Math.round(c.s*100)+'%';};
  bar.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return;
    var a=b.dataset.a;
    if(a==='in') ctl.zoomCenter(1.5); else if(a==='out') ctl.zoomCenter(1/1.5);
    else if(a==='reset') ctl.reset(); else if(a==='close') close();
  });
  function key(e){ if(e.key==='Escape'){e.stopPropagation();close();} else if(e.key==='+'||e.key==='=') ctl.zoomCenter(1.25); else if(e.key==='-') ctl.zoomCenter(.8); else if(e.key==='0') ctl.reset(); }
  document.addEventListener('keydown',key,true);
  document.documentElement.classList.add('che-zoom-lock');

  function close(){
    document.removeEventListener('keydown',key,true);
    document.documentElement.classList.remove('che-zoom-lock');
    el.classList.remove('che-zoom-in-fs');
    el.style.transform=saved.t; el.style.transformOrigin='0 0';
    if(ph.parentNode){ph.parentNode.insertBefore(el,ph);ph.remove();}
    else if(parent) parent.insertBefore(el,next);
    ov.remove(); fsState=null;
    if(ctl0) ctl0.apply();
    try{window.dispatchEvent(new Event('resize'));}catch(_){}
  }
  fsState={close:close,el:el};
  try{window.dispatchEvent(new Event('resize'));}catch(_){}
  return fsState;
}

function attach(el,opts){
  if(!el||attached.has(el)||isOff(el)) return null;
  opts=opts||{};
  if(opts.inline===false&&opts.fullscreen===false) return null;
  var frame=ensureFrame(el), ctl;
  var o={max:opts.max||DEF_MAX,wheelAlways:false,own:!!opts.own,onDouble:function(){ if(opts.fullscreen!==false) openFullscreen(el,ctl); }};
  ctl=new Controller(el,frame,o);
  if(opts.inline===false){ ctl.zoomAt=function(){}; }
   
  var tools=document.createElement('div'); tools.className='che-zoom-tools che-zoom-ui';
  tools.innerHTML='<button type="button" data-a="reset" class="che-zoom-reset" aria-label="Skala 1×" hidden>1×</button>'+
    (opts.fullscreen!==false?'<button type="button" data-a="fs" aria-label="Pełny ekran">⤢</button>':'');
  frame.appendChild(tools);
  tools.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return;
    e.stopPropagation();
    if(b.dataset.a==='fs') openFullscreen(el,ctl); else if(b.dataset.a==='reset') ctl.reset();
  });
  ctl.onChange=function(c){var r=tools.querySelector('.che-zoom-reset'); if(r) r.hidden=!(c.s>1.001);};
  attached.set(el,ctl);
  return ctl;
}

function stageTools(host,el,opts){
  opts=opts||{};
  if(opts.zoom===false) return null;
   
  el=el||host&&host.querySelector('svg,canvas,img'); if(!el) return null;
  var own=el.tagName==='CANVAS';  
  return attach(el,{fullscreen:true,inline:true,own:own});
}
C.UI=C.UI||{}; C.UI.stageTools=stageTools;

C.ZOOM={version:'1.0',attach:attach,openFullscreen:function(el){return openFullscreen(el,attached.get(el));},
  close:function(){if(fsState)fsState.close();},controller:function(el){return attached.get(el)||null;}};

var SEL='.viz-body svg, .viz-body canvas, .viz-body img, .che-lesson-viz-host svg, .che-lesson-viz-host canvas, .che-lesson-viz-host img, [data-zoom] svg, [data-zoom] canvas, img[data-zoom], svg[data-zoom], canvas[data-zoom], .che-viz-ov-body svg, .che-viz-ov-body canvas';
function eligible(el){
  if(attached.has(el)||isOff(el)) return false;
  if(el.closest('.che-zoom-ov,.che-zoom-tools,button,.lab-btn,.btn,[role="button"]')) return false;
  if(el.closest('svg')!==el&&el.tagName.toLowerCase()!=='svg'&&el.closest('svg')) return false;  
  var r=el.getBoundingClientRect();
  if(r.width<120||r.height<60) return false;            
  if(el.tagName.toLowerCase()==='svg'&&el.parentNode&&el.parentNode.closest&&el.parentNode.closest('svg')) return false;
  return true;
}
var pending=false;
function scan(root){
  pending=false;
  (root||document).querySelectorAll(SEL).forEach(function(el){
    if(eligible(el)) try{attach(el);}catch(e){console.warn('[CHE.ZOOM]',e);}
  });
}
function schedule(){ if(pending) return; pending=true; (window.requestAnimationFrame||setTimeout)(function(){setTimeout(scan,60);}); }
if(window.MutationObserver){
  new MutationObserver(function(muts){
    for(var i=0;i<muts.length;i++){ if(muts[i].addedNodes.length){schedule();break;} }
  }).observe(document.documentElement,{childList:true,subtree:true});
}
document.addEventListener('DOMContentLoaded',schedule);
if(document.readyState!=='loading') schedule();
try{console.info('[CHE.ZOOM v1.0] gesty: szczypanie, dwuklik=pełny ekran');}catch(e){}
})();
