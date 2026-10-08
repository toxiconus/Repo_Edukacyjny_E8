sceneReg('heating',{label:'Ogrzewanie cieczy na trójnogu (palnik Bunsena)',lesson:'technika',desc:'Moc i dopływ powietrza → barwa płomienia; temperatura rośnie do wrzenia i zatrzymuje się.',height:380,aspect:1.35,
 init:()=>({power:.7,air:80,on:1,T:20}),
 parts:[{id:'burner',x:.3,y:.58,w:.4,h:.42,clip:[0,.63,1,.37],get:S=>({flame:{on:S.on,power:S.power,air:S.air,phi:1.55-S.air/100*.65,soot:S.air<35?.5:0,temp:650+S.air*8}})},
  {id:'tripod',x:.26,y:.62,w:.48,h:.38,get:S=>({heat:S.on?S.power*3:0})},
  {id:'beaker',x:.37,y:.34,w:.26,h:.28,get:S=>({liquid:WATER,level:.6,T:S.T,gas:S.T>=99.5?1:S.T>80?(S.T-80)/40:0,bubSize:1.3,label:'H₂O'})},
  {id:'thermometer',x:.8,y:.12,w:.14,h:.8,get:S=>({T:S.T})}],
 tick(S,dt){const q=S.on?S.power*(.35+.65*S.air/100)*2.4:0;S.T=Math.min(100,S.T+(q-(S.T-20)*.012)*dt)},
 overlay(c,W,H,S,t,T){head(c,T,W,'Ogrzewanie wody',S.T>=99.5?'woda wrze — temperatura stała ≈ 100 °C':'T = '+fmt(S.T,1)+' °C')},
 ui(h,S){const r=UI.row(h);UI.range(r,'Moc',0,1,.05,S.power,v=>S.power=v);UI.range(r,'Powietrze',0,100,5,S.air,v=>S.air=v,v=>v+'%');const b=UI.btn(r,'Zgaś',()=>{S.on=S.on?0:1;b.textContent=S.on?'Zgaś':'Zapal'},1);const n=UI.note(h);return S=>{n.innerHTML=S.air<40?'Mało powietrza: płomień <b>świecący, żółty, kopcący</b> — chłodniejszy.':'Dużo powietrza: płomień <b>nieświecący, niebieski</b> — najgorętszy. Do ogrzewania używamy płomienia nieświecącego.'}}});