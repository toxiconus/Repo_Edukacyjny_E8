sceneReg('indicatorRack',{label:'Wskaźnik w siedmiu roztworach (statyw)',lesson:'kwasy',desc:'Porównanie barw jednego wskaźnika w szeregu roztworów od kwasu do zasady.',height:300,aspect:2.6,
 init:()=>({ind:'ind-uniwersalny'}),
 parts:[{id:'tubeRack',x:.04,y:.17,w:.92,h:.8,get:S=>({tubes:Object.keys(SOLS).map(k=>({label:SOLS[k].f.length>6?SOLS[k].f.slice(0,5)+'…':SOLS[k].f,liquid:colors.mix(WATER,indCol(S.ind,SOLS[k].pH),.88),level:.45}))})}],
 overlay(c,W,H,S,t,T){head(c,T,W,'Ten sam wskaźnik, różne roztwory','od lewej: pH rośnie (kwas → zasada)')},
 ui(h,S){const r=UI.row(h);UI.sel(r,INDS,S.ind,v=>S.ind=v,'Wskaźnik');const n=UI.note(h);return S=>{n.innerHTML=Object.keys(SOLS).map(k=>SOLS[k].f+': <b>'+(indName(S.ind,SOLS[k].pH)||'?')+'</b>').join(' · ')}}});