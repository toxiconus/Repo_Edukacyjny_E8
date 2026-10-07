return{version:'1.7',electro:ELX,ions:IONX,phys:C.PHYS,rx,colors,fromReaction,canvasDraw,trigger,optionsPanel,presets:PRESETS,flameColors:FLAME_COLORS,flameNames:FLAME_NAMES,metals:METALS,
 effects:{register:effect,get:id=>E[id]||null,list:()=>Object.keys(E),options:id=>E[id]?{label:E[id].label||id,defaults:E[id].defaults||{},schema:E[id].schema||{},free:!!E[id].free,oneShot:!!E[id].oneShot,evented:!!E[id].evented}:null},
 vessels:{register:vessel,get:id=>V[id]||null,list:()=>Object.keys(V)},
 scenes:{register:sceneReg,get:id=>SC[id]||null,list:()=>Object.keys(SC),mount:scene},scene,
 draw,mount,mountEffect,fromLab,theme:th,tempColor:tc,rgba,tube,drips,ui:UI,
 molecules:{atoms:molAtoms,color:e=>ELC[e]||'#94a3b8',radius:e=>ELR[e]||.8,list:()=>Object.keys(MOLS),name:MNAME,charge:id=>CHG[id]||''},indicators:INDS,solutions:SOLS,indicatorColor:indCol}})();
C.LAB.GFX=GFX;
