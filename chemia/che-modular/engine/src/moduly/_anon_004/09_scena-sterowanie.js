let sm = 'b', zm = 1, paused = 0;
function smode(m){
  sm = m;
  $('bohr').style.display = m === 'b' ? '' : 'none';
  $('cloud').style.display = m === 'o' ? 'block' : 'none';
  $('orbbox').style.display = m === 'o' ? '' : 'none';
  $('stage').classList.toggle('om', m === 'o');
  document.querySelectorAll('[data-sm]').forEach(b => b.classList.toggle('on', b.dataset.sm === m));
  if(m === 'o') cloud();
  else if(still) bohr(0);
}
document.querySelectorAll('[data-sm]').forEach(b => b.onclick = () => smode(b.dataset.sm));
const zin=f=>{if(sm==='o'){zmCloud=Math.min(3,Math.max(.4,zmCloud*f));cloud();}else zt=Math.min(zNuc,Math.max(.6,zt*f));};
$('zi').onclick=()=>zin(1.4);$('zo').onclick=()=>zin(1/1.4);
$('zr').onclick=()=>{if(sm==='o'){zmCloud=1;cloud();}else zt=1;};
$('zn').onclick=()=>{if(sm==='b')zt=zNuc;};
$('zs').oninput=ev=>{zt=.6*Math.pow(zNuc/.6,ev.target.value/100);};
$('bohr').addEventListener('wheel',ev=>{ev.preventDefault();zin(ev.deltaY<0?1.15:1/1.15);},{passive:false});
$('bohr').addEventListener('dblclick',()=>{zt=zt>1.5?1:zNuc;});
$('pz').onclick = () => { paused = !paused; $('pz').textContent = paused ? 'wznów' : 'pauza'; };

