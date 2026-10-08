sceneReg('gasCollection',{label:'Zbieranie gazu nad wodą',lesson:'kwasy',desc:'Kolba z korkiem i rurką odprowadzającą → odwrócony cylinder w wannie z wodą.',height:340,aspect:1.7,
 init:()=>({gas:'H2',on:1,rem:1,V:0}),
 parts:[{id:'flask',name:'fl',x:.04,y:.38,w:.26,h:.5,get:S=>{const G=GRX[S.gas],r=S.on&&S.rem>0?G.k:0;return{liquid:ACID,level:.45,solids:[Object.assign({eq:.8+3.2*S.rem},G.sol)],gas:r,foam:r*G.foam,stopper:'tube',bubN:1.3,bubSize:.8}}},
  {id:'gasCollect',name:'gc',x:.4,y:.14,w:.58,h:.76,get:S=>({gasV:S.V,gas:S.on&&S.rem>0&&S.V<1?GRX[S.gas].k:0,gasMax:100})}],
 links:[{pts:[[.17,.3],[.17,.2],[.36,.2],[.36,.444],[.4,.444]],flow:S=>S.on&&S.rem>0?GRX[S.gas].k:0}],
 tick(S,dt){if(S.on&&S.rem>0){const k=GRX[S.gas].k;S.rem=Math.max(0,S.rem-dt*.012);S.V=Math.min(1,S.V+k*dt*.025)}},
 overlay(c,W,H,S,t,T){head(c,T,W,GRX[S.gas].n,S.V>=1?'cylinder pełny — zamknij go pod wodą płytką':'gaz wypiera wodę z cylindra',1)},
 ui(h,S,m,api){const r=UI.row(h);UI.sel(r,[['H2','wodór H₂'],['CO2','tlenek węgla(IV) CO₂']],S.gas,v=>{api.reset();S.gas=v;S.on=1;b.textContent='Wstrzymaj'},'Gaz');const b=UI.btn(r,'Wstrzymaj',()=>{S.on=S.on?0:1;b.textContent=S.on?'Wstrzymaj':'Wznów'},1);UI.btn(r,'Powtórz',()=>{const g1=S.gas;api.reset();S.gas=g1;S.on=1;b.textContent='Wstrzymaj'});const n=UI.note(h);return S=>{n.innerHTML=GRX[S.gas].txt}}});