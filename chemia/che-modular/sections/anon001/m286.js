try {

(function(g){
  'use strict';
  const C=g.CHE=g.CHE||{}, E=C.ENGINE=C.ENGINE||{};
  const BUILD='054.03';
  E.build=BUILD;
  E.modules=E.modules||{}; E.modules.BUILD_V054_03=BUILD;

  const A=C.ATOM;
  if(A && typeof A.build==='function' && !A.build.__guarded){
    const raw=A.build;
    const guarded=function(symbol,charge){
      const q=Number(charge)||0;
      if(Math.trunc(q)!==q) return null;
      const meta=C.DATA&&C.DATA.ATOM_META&&C.DATA.ATOM_META[symbol];
      if(!meta) return null;
      if(q>meta.Z||q<-4) return null;
      return raw.call(this,symbol,q);
    };
    guarded.__guarded=true; guarded.raw=raw;
    try{ A.build=guarded; }catch(_){}
  }

  C.selfTest=function selfTest(){
    const checks=[]; const add=(name,ok,detail)=>checks.push({name,ok:!!ok,detail:detail==null?'':String(detail)});
    const t0=(g.performance&&performance.now)?performance.now():0;
    const safe=(name,fn)=>{ try{ fn(); }catch(err){ add(name,false,'wyjątek: '+(err&&err.message||err)); } };
    safe('DATA: 118 pierwiastków',()=>{ const n=(C.DATA.ELEMENTS_118||[]).length; add('DATA: 118 pierwiastków',n===118,n); });
    safe('ATOM: Fe ma 4 niesparowane',()=>{ const a=C.ATOM.build('Fe',0); add('ATOM: Fe ma 4 niesparowane',a&&a.unpairedCount===4,a&&a.unpairedCount); });
    safe('ATOM: Cu = 4s1 3d10',()=>{ const a=C.ATOM.build('Cu',0); add('ATOM: Cu = 4s1 3d10',a&&/4s1 3d10$/.test(a.configFull),a&&a.configFull); });
    safe('ATOM: Cr = 4s1 3d5',()=>{ const a=C.ATOM.build('Cr',0); add('ATOM: Cr = 4s1 3d5',a&&/4s1 3d5$/.test(a.configFull),a&&a.configFull); });
    safe('ATOM: Fe3+ kończy się na 3d5',()=>{ const a=C.ATOM.build('Fe',3); add('ATOM: Fe3+ kończy się na 3d5',a&&/3d5$/.test(a.configFull),a&&a.configFull); });
    safe('ATOM: H+ bez elektronów',()=>{ const a=C.ATOM.build('H',1); add('ATOM: H+ bez elektronów',a&&a.electronCount===0,a&&a.electronCount); });
    safe('ATOM: nieznany symbol → null',()=>add('ATOM: nieznany symbol → null',C.ATOM.build('Xx',0)===null));
    safe('ATOM: ładunek > Z → null',()=>add('ATOM: ładunek > Z → null',C.ATOM.build('Na',99)===null));
    safe('ATOM: ładunek ułamkowy → null',()=>add('ATOM: ładunek ułamkowy → null',C.ATOM.build('Na',0.5)===null));
    safe('NUCLEUS: Fe-56',()=>{ const n=C.NUCLEUS.build('Fe'); add('NUCLEUS: Fe-56',n&&n.A===56&&n.Z===26&&n.N===30,n&&('A='+n.A)); });
    safe('NUCLEUS: B/A Fe ≈ 8,8 MeV',()=>{ const n=C.NUCLEUS.build('Fe'); const b=n&&n.bindingEnergyPerNucleon; add('NUCLEUS: B/A Fe ≈ 8,8 MeV',b>8.5&&b<9.1,b&&b.toFixed(3)); });
    return { ok:checks.every(c=>c.ok), build:BUILD, engine:E.version||null, ms:(g.performance&&performance.now)?Math.round(performance.now()-t0):null, passed:checks.filter(c=>c.ok).length, total:checks.length, checks };
  };

  C.READY=true; E.ready=true;
  C.whenReady=function(fn){ if(typeof fn!=='function') return; if(C.READY){ try{ fn(C); }catch(_){} } else g.addEventListener('che:ready',function(){ try{ fn(C); }catch(_){} },{once:true}); };
  try{ g.dispatchEvent(new CustomEvent('che:ready',{detail:{build:BUILD,version:E.version}})); }catch(_){}
})(window);

} catch (err) {
  try { console.warn('[CHE module 286]', err && err.message ? err.message : err); } catch(_){}
}

