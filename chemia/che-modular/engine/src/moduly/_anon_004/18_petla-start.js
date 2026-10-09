all();applyMode();
requestAnimationFrame(function loop(ts){
  if(sm==='b'){if(!paused)tA+=ts-(lastTs||ts);lastTs=ts;bohr(tA)}
  if(curKind==='sp'&&$('cmpv').offsetParent)vw();
  if(!still) requestAnimationFrame(loop);
});
 
