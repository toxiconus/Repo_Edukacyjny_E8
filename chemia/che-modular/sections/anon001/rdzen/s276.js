

try {

(()=>{
  const C=window.CHE=window.CHE||{}, E=C.ENGINE=C.ENGINE||{}, R=E.registry=E.registry||{};
  const ORDER=['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'];
  const CAP={s:2,p:6,d:10,f:14};
  function fillConfig(Z){
    const EX=window.CONFIG_EXCEPTIONS||{};
    if(EX[Z]) return Object.assign({},EX[Z]);
    
    if(C.ATOM?.configuration) return null;
    let left=Z, cfg={};
    for(const name of ORDER){ if(left<=0) break; const n=Math.min(CAP[name.slice(-1)]||2,left); if(n) cfg[name]=n; left-=n; }
    return cfg;
  }
  function valenceFromElement(sym){
    const list=C.DATA?.ELEMENTS_118||C.DATA?.ELEMENTS_54||[];
    const e=list.find(x=>x.s===sym||x.symbol===sym);
    if(!e) return {ok:false,error:'NOT_FOUND'};
    const Z=e.z||e.Z;
    let cfg=null;
    if(C.ATOM?.forUniversity){   }
    cfg=fillConfig(Z);
    if(!cfg) return {ok:false,error:'NO_CONFIG'};
    const shells={};
    Object.keys(cfg).forEach(name=>{ const n=+name[0]; shells[n]=(shells[n]||0)+cfg[name]; });
    const outerN=Math.max(...Object.keys(shells).map(Number));
    const outerCount=shells[outerN]||0;
    let ve=outerCount;
    if(e.block==='d'){ ve=(cfg[outerN+'s']||0)+(cfg[(outerN-1)+'d']||0); }
    if(e.block==='f'){ ve=(cfg[outerN+'s']||0)+(cfg[(outerN-2)+'f']||0); }
    return {ok:true,value:{symbol:sym,Z,valenceElectrons:ve,outerShell:outerN,outerElectrons:outerCount,config:cfg,block:e.block}};
  }
  C.VALENCE={version:'4.14', of:valenceFromElement};
  E.modules=E.modules||{}; E.modules.VALENCE_V414='4.14';
  R.VALENCE_V414={layer:'DOMAIN',owner:'CHE.VALENCE',depends:['DATA'],role:'e⁻ walencyjne (model edukacyjny)'};
})();

} catch (err) {
  try { console.warn('[CHE module 285]', err && err.message ? err.message : err); } catch(_){}
}