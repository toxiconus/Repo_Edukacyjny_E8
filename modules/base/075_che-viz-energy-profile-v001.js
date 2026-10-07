<script id="che-viz-energy-profile-v001">
(function(){
'use strict';
var C=window.CHE=window.CHE||{}, V=C.VIZ; if(!V||V.energyProfile) return;
/* V.energyProfile(host,{vb:[w,h],type:'exo'|'endo'}) — profil energetyczny z barierą Ea i ΔH */
V.energyProfile=function(host,o){
  o=o||{}; var vb=o.vb||[340,240], W=vb[0], H=vb[1], exo=(o.type!=='endo');
  var svg=V.makeSvg(host,vb), mk=V.marker(svg,'var(--text-muted)',8);
  var L=44, R=W-16, T=22, B=H-34;
  var yR=exo?B-(B-T)*0.50:B-(B-T)*0.22;          /* poziom substratów */
  var yP=exo?B-(B-T)*0.18:B-(B-T)*0.52;          /* poziom produktów */
  var yTop=T+6;                                    /* szczyt bariery */
  function t(x,y,s,a,sz,w,f){svg.appendChild(V.el('text',{x:x,y:y,'text-anchor':a||'middle','font-size':sz||11,'font-weight':w||600,fill:f||'var(--text-muted)'},s));}
  svg.appendChild(V.el('line',{x1:L,y1:T-6,x2:L,y2:B,stroke:'var(--border)','stroke-width':1.5}));
  svg.appendChild(V.el('line',{x1:L,y1:B,x2:R,y2:B,stroke:'var(--border)','stroke-width':1.5}));
  t(14,(T+B)/2,'energia','middle',11,700); svg.lastChild.setAttribute('transform','rotate(-90 14 '+((T+B)/2)+')');
  t((L+R)/2,H-8,'przebieg reakcji','middle',11,700);
  var x1=L+10,x2=L+(R-L)*0.30,x3=L+(R-L)*0.50,x4=L+(R-L)*0.70,x5=R-10;
  var d='M'+x1+' '+yR+' L'+x2+' '+yR+' C'+(x2+26)+' '+yR+' '+(x3-24)+' '+yTop+' '+x3+' '+yTop+' C'+(x3+24)+' '+yTop+' '+(x4-26)+' '+yP+' '+x4+' '+yP+' L'+x5+' '+yP;
  svg.appendChild(V.el('path',{d:d,fill:'none',stroke:exo?'var(--c-ok,#2f8a55)':'var(--c-err,#d6452b)','stroke-width':3}));
  svg.appendChild(V.el('line',{x1:x2-6,y1:yR,x2:x5,y2:yR,stroke:'var(--border)','stroke-dasharray':'4 4'}));
  svg.appendChild(V.el('line',{x1:x4-40,y1:yP,x2:x5,y2:yP,stroke:'var(--border)','stroke-dasharray':'4 4'}));
  /* Ea */
  svg.appendChild(V.el('line',{x1:x3-34,y1:yR,x2:x3-34,y2:yTop+2,stroke:'var(--accent)','stroke-width':1.6,'marker-end':mk}));
  t(x3-38,(yR+yTop)/2+4,'Ea','end',12,800,'var(--accent)');
  /* ΔH */
  var xd=x5-14;
  svg.appendChild(V.el('line',{x1:xd,y1:yR+(exo?3:-3),x2:xd,y2:yP-(exo?3:-3),stroke:'var(--text)','stroke-width':1.6,'marker-end':mk}));
  t(xd-6,(yR+yP)/2+4,exo?'ΔH < 0':'ΔH > 0','end',12,800,'var(--text)');
  t(x1+(x2-x1)/2,yR-7,'substraty','middle',11,700);
  t(x4+(x5-x4)/2-8,yP+(exo?16:-8),'produkty','middle',11,700);
  return svg;
};
})();
</script>

