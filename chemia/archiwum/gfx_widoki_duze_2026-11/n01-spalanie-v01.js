V.define('n01-spalanie-v01',{title:'Otrzymywanie tlenków: spalanie pierwiastków i paliw',tag:'E8',
 hint:'Kliknij substancję — od razu spala się w tlenie („Powtórz” uruchamia spalanie jeszcze raz). Równanie i obserwacja pochodzą z bazy reakcji silnika. Dla węgla i metanu zmieniaj dopływ tlenu: pełny → CO₂, niedobór → CO (czad), duży niedobór → sadza.',
 foot:'Płomień i spalanie metali: GFX (CHE.PHYS.flame) · równania i obserwacje: CHE.REACTION / REACTION_DATA · próg dopływu O₂ — model jakościowy.',
 build:function(host){host.innerHTML='';var A=OXA(),st={s:'Mg',o2:100,on:1,t0:performance.now()};var bar=el('div','r');host.appendChild(bar);var bs=[];
  function fire(){st.on=1;st.t0=performance.now();ui()}
  Object.keys(BURN).forEach(function(k){var b=btn(bar,A.pretty(k),function(){st.s=k;bs.forEach(function(q){q.classList.toggle('on',q===b)});fire()});bs.push(b);if(k===st.s)b.classList.add('on')});
  var b2=el('div','r');host.appendChild(b2);var go=btn(b2,'Powtórz',fire,'on');btn(b2,'Zgaś',function(){st.on=0;ui()});
  var rl=el('label',null,'dopływ O₂ ');var r=el('input');r.type='range';r.min=20;r.max=120;r.step=5;r.value=100;var ro=el('b');rl.append(r,ro);b2.appendChild(rl);r.oninput=function(){st.o2=+r.value;if(!st.on){st.on=1;st.t0=performance.now()}ui()};
  function cur(){var B=BURN[st.s];if(!B.o2)return B.rx;return st.o2>=100?B.rx:st.o2>=60?(B.inc||B.rx):(B.soot||B.inc||B.rx)}
  var m=G().mount(host,{height:280,parts:[{id:'stage',x:0,y:0,w:1,h:1}],fx:{metalBurn:true,flame:true,sparks:true},get:function(){var B=BURN[st.s],on=st.on,k=on?Math.min(1,(performance.now()-st.t0)/600):0,fx={};
    fx.flame={power:0};fx.metalBurn={power:0};
    if(on&&B.fx==='metal')fx.metalBurn={metal:B.metal,power:1.1*k+.01,sparks:B.metal==='Fe'?2.5:1,smoke:B.metal==='Mg'?1.5:.8,glow:B.metal==='Mg'?1.8:1};
    if(on&&B.fx==='flame'){var phi=B.o2?Math.max(.6,Math.min(2,100/st.o2)):1;fx.flame={power:.9*k,fuel:B.fuel||'CH4',phi:phi,soot:B.o2&&st.o2<60?.8:0,color:B.color||null,size:1.1}}
    return{fx:fx}}});
  var note=el('div','note');host.appendChild(note);
  function ui(){var B=BURN[st.s];rl.style.display=B.o2?'':'none';ro.textContent=st.o2+'%';var k=cur(),RD=(D().REACTION_DATA||{})[k]||{},e=null;try{e=A.prettyEq(C.REACTION.equation(k))}catch(_){}
   note.innerHTML=(st.on?'<b>'+(e||k)+'</b><br>Obserwacja: '+(RD.observation||'—')+(RD.conditions?'<br>Warunki: '+RD.conditions:'')+(RD.safety&&RD.safety.length?'<br><span style="color:#b91c1c">BHP: '+RD.safety.join('; ')+'</span>':'')+
    (B.o2&&st.o2<100?'<br><b style="color:#b91c1c">Niedobór tlenu → spalanie niecałkowite'+(st.o2<60?' (sadza C)':' (CO — czad: bezbarwny, bezwonny, trujący)')+'.</b>':''):'Płomień zgaszony — kliknij substancję lub „Powtórz”. Produkt: '+A.pretty(B.prod)+(st.s==='P'?' (zapis szkolny P₂O₅; cząsteczka P₄O₁₀)':'')+(st.s==='Na'?' (zapis szkolny; przy spalaniu sodu w nadmiarze tlenu powstaje głównie nadtlenek Na₂O₂)':''))}
  ui()}});