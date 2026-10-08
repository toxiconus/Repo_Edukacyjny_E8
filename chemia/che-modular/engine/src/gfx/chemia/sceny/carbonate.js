sceneReg('carbonate',{label:'Węglan wapnia + kwas → CO₂ (woda wapienna)',lesson:'kwasy',desc:'Burzenie i piana na marmurze; gaz przepuszczony przez wodę wapienną powoduje zmętnienie.',height:340,aspect:1.7,
 init:()=>({on:1,rem:1,turb:0}),
 parts:[{id:'flask',name:'fl',x:.06,y:.36,w:.28,h:.52,get:S=>{const r=S.on&&S.rem>0?.8:0;return{liquid:ACID,level:.42,solids:[{col:[240,240,232],eq:.8+3.2*S.rem,t:'solid',shape:'chips'}],gas:r,foam:r*.7,stopper:'tube'}}},
  {id:'testTube',name:'tt',x:.63,y:.3,w:.11,h:.58,get:S=>({liquid:[226,238,242],level:.6,turb:S.turb,gas:S.on&&S.rem>0?.7:0,bubFrom:'bottom',bubSize:.8,label:''})}],
 links:[{pts:[[.2,.28],[.2,.16],[.685,.16],[.685,.82]],flow:S=>S.on&&S.rem>0?.8:0}],
 tick(S,dt){if(S.on&&S.rem>0){S.rem=Math.max(0,S.rem-dt*.012);S.turb=Math.min(1,S.turb+dt*.06)}},
 overlay(c,W,H,S,t,T){head(c,T,W,'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑','Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O',1);txt(c,'woda wapienna',W*.685,H*.95,T.mut,'center',10,700)},
 ui(h,S,m,api){const r=UI.row(h);const b=UI.btn(r,'Wstrzymaj',()=>{S.on=S.on?0:1;b.textContent=S.on?'Wstrzymaj':'Wznów'},1);UI.btn(r,'Powtórz',()=>{api.reset();S.on=1;b.textContent='Wstrzymaj'});const n=UI.note(h);return S=>{n.innerHTML=S.turb>.3?'<b>Woda wapienna mętnieje</b> — wytrąca się CaCO₃. To dowód, że gazem jest <b>CO₂</b>.':'Na kawałkach marmuru burzy się gaz; pęcherzyki przechodzą rurką do wody wapiennej.'}}});