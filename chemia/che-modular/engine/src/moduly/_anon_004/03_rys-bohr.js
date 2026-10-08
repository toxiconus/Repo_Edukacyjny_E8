/* Atom Bohra: rysunek = komponent CHE_GFX.atomBohr (engine/src/komponenty/atlas-gfx.js); tu stan atlasu, zoom, GEO i liczniki pod sceną. */
function bohr(ts){
  const {e,c:cFull}=state(),c=buildN==null?cFull:truncCfg(cFull,buildN),cv=$('bohr');
  const isotopes=isotopeData(e),top=isotopes.slice().sort((a,b)=>(b.ab||0)-(a.ab||0))[0],A0=top?top.A:(e.m?Math.round(e.m):Math.round(e.z*2.3));
  const A=isoA||A0,N=Math.max(0,A-e.z),N0=Math.max(0,A0-e.z),Rn=3.4*Math.sqrt(e.z+N)+4;
  zNuc=Math.min(70,262/Rn);zt=Math.min(Math.max(zt,.6),zNuc);
  zm=Math.exp(Math.log(zm)+(Math.log(zt)-Math.log(zm))*.14);if(Math.abs(Math.log(zm/zt))<.002)zm=zt;
  const g=CHE_GFX.atomBohr(cv,{p:e.z,n:N,n0:N0,cfg:cFull,cfgShow:c,order:ORDER,role,t:ts,zoom:zm,sel:GEO.sel,hl:GEO.hl,bn:GEO.bn,chg,nl,lupa:true});
  Object.assign(GEO,{R0:g.R0,step:g.step,Rn:g.Rn,rings:g.rings,A,N,inset:false});if(g.ix!=null)Object.assign(GEO,{inset:g.inset,ix:g.ix,iy:g.iy,ir:g.ir});
  $('bohrinfo').innerHTML=`<div class="bi"><span><em>Z</em><b>${e.z}</b></span><span><em>N</em><b>${N}</b>${N!==N0?`<small>${N>N0?'+':''}${N-N0} vs najczęstszy</small>`:''}</span><span><em>A</em><b>${A}</b></span><span><em>e⁻</em><b>${e.z-chg}</b></span><span><em>powłok</em><b>${g.ns}</b></span></div>`;
  $('zr').textContent=(zm<10?zm.toFixed(1):Math.round(zm))+'×';
  {const fo=$('focus');if(fo)fo.style.opacity=zm>zNuc*.45?0:1;}
  const zs=$('zs');if(document.activeElement!==zs)zs.value=100*Math.log(zm/.6)/Math.log(zNuc/.6);
}

