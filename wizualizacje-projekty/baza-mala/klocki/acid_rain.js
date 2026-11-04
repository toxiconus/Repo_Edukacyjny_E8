/* KLOCEK: acid-rain-v01 — Kwaśne deszcze: emisja SO₂/NOₓ → chmura → opad → jezioro i las (port z visual-library-v001, 2026-11-04). Wymaga ruch_che.js i model_widok.js. */
(function(){
const CHE=window.CHE,defineView=CHE.VIEW.define;
defineView('acid-rain-v01', {
  title:'Kwaśne deszcze — obieg SO₂/NOₓ → opad → skutki · v0.01', tag:'MOTION',
  hint:'Z komina wydobywają się SO₂ i NOₓ. W chmurze tworzą się kwasy (H₂SO₄, HNO₃), które opadają jako deszcz. Zmień emisję lub włącz odsiarczanie i obserwuj pH deszczu oraz jeziora.',
  foot:'Model poglądowy: wartości pH to uproszczone szacunki (czysty deszcz ≈ 5,6). Poniżej pH ≈ 5 jeziora zaczynają tracić życie.',
  build(host){
    host.innerHTML='';
    const ctl=document.createElement('div'); ctl.className='r'; ctl.style.marginTop='0';
    ctl.innerHTML='<label>Emisja <b class="eo"></b></label><input class="e" type="range" min="0" max="100" value="70"><button type="button" class="fl">Odsiarczanie: wył.</button>';
    const cv=document.createElement('canvas'); cv.dataset.h=300; cv.style.background='var(--surface-soft)'; cv.style.borderRadius='var(--r-sm)';
    const note=document.createElement('div'); note.className='note'; host.append(ctl,cv,note);
    const info=document.createElement('div'); info.className='note'; info.innerHTML='<b>Źródła:</b> spalanie węgla i ropy, elektrownie, transport (SO₂, NOₓ).<br><b>Atmosfera:</b> 2 SO₂ + O₂ → 2 SO₃ · SO₃ + H₂O → H₂SO₄ · 3 NO₂ + H₂O → 2 HNO₃ + NO<br><b>Opad:</b> deszcz, śnieg, mgła o pH &lt; 5,6 (czysty deszcz ≈ 5,6 dzięki CO₂).<br><b>Korozja marmuru:</b> CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂↑ · CaCO₃ + 2 HNO₃ → Ca(NO₃)₂ + H₂O + CO₂↑<br><b>Zapobieganie:</b> odsiarczanie paliw i spalin · filtry · katalizatory · OZE · wapnowanie gleb.'; host.appendChild(info);
    const q=x=>ctl.querySelector(x); let E=.7,filt=false,gas=[],rain=[],cloud=.7,rainPH=5.6-1.8*.7,lake=7-2.2*.7,tree=1-.8*.7,tm=0,lastPh=0,seed=3,acc=0,lastTxt=-1;
    const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
    const eff=()=>E*(filt?.15:1);
    function lab(){q('.eo').textContent=Math.round(E*100)+'%'}
    q('.e').oninput=e=>{E=+e.target.value/100;lab();CHE.MOTION.wake&&CHE.MOTION.wake()};
    q('.fl').onclick=e=>{filt=!filt;e.target.textContent='Odsiarczanie: '+(filt?'wł.':'wył.');CHE.MOTION.wake&&CHE.MOTION.wake()};
    lab();
    function reset(){gas=[];rain=[];cloud=eff();rainPH=5.6-1.8*cloud;lake=7-2.2*cloud;tree=1-.8*cloud;tm=0;lastPh=0;acc=0;seed=3}
    CHE.MOTION.add(cv,(ctx,w,h,ph)=>{
      let dt=ph-lastPh; lastPh=ph; if(dt<0){reset();dt=0} dt=Math.min(dt,.05);
      const cs=getComputedStyle(document.documentElement),tx=cs.getPropertyValue('--text').trim()||'#222',mu=cs.getPropertyValue('--text-muted').trim()||'#777',bl=cs.getPropertyValue('--c-und').trim()||'#2b5e9c',za=cs.getPropertyValue('--c-za').trim()||'#a86a00',gr=cs.getPropertyValue('--c-e8').trim()||'#2e7d4f',er=cs.getPropertyValue('--c-err').trim()||'#b83a45';
      tm+=dt; const g=h*.86, cx=w*.5, cy=h*.2, cw=w*.34, chx=w*.1, chh=h*.3;
      const ef=eff();
      cloud+=(ef-cloud)*Math.min(1,dt/3); rainPH=5.6-1.8*cloud;
      const lt=7-2.2*cloud; lake+=(lt-lake)*Math.min(1,dt/6); tree+=((1-.8*cloud)-tree)*Math.min(1,dt/8);
      acc+=dt*ef*7; while(acc>=1){acc-=1;gas.push({x:chx+9,y:g-chh,k:rnd()<.5?0:1,vx:20+rnd()*15,vy:-(20+rnd()*15)})}
      for(const p of gas){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=(cy-p.y)*.6*dt*.1;p.dead=(Math.abs(p.x-cx)<cw*.6&&p.y<cy+h*.08)}
      gas=gas.filter(p=>!p.dead&&p.x<w);
      const rr=(2+cloud*6)*dt; rain.acc=(rain.acc||0)+rr*3; while(rain.acc>=1){rain.acc-=1;rain.push({x:cx-cw*.5+rnd()*cw,y:cy+h*.07,v:110+rnd()*40,a:cloud})}
      for(const d of rain){d.y+=d.v*dt}
      rain=rain.filter(d=>d.y<g);
      
      ctx.fillStyle=mu;ctx.fillRect(chx,g-chh,18,chh);ctx.fillRect(chx-14,g-6,46,6);
      ctx.fillStyle='rgba(128,128,128,.35)';ctx.beginPath();ctx.ellipse(cx,cy,cw*.5,h*.075,0,0,7);ctx.ellipse(cx-cw*.25,cy+4,cw*.3,h*.06,0,0,7);ctx.ellipse(cx+cw*.25,cy+4,cw*.3,h*.06,0,0,7);ctx.fill();
      ctx.fillStyle='rgba(120,100,70,.5)';ctx.fillRect(0,g,w,h-g);
      const lx=w*.74,lw=w*.22;ctx.fillStyle=lake>5.2?bl:za;ctx.globalAlpha=.55;ctx.fillRect(lx,g,lw,Math.min(16,h-g));ctx.globalAlpha=1;
      for(let i=0;i<5;i++){const x=w*.52+i*w*.035,hh=h*.1;ctx.fillStyle=tree>.55?gr:za;ctx.globalAlpha=.4+.6*tree;ctx.beginPath();ctx.moveTo(x,g-hh);ctx.lineTo(x-9,g);ctx.lineTo(x+9,g);ctx.fill();ctx.globalAlpha=1}
      for(const p of gas){ctx.beginPath();ctx.arc(p.x,p.y,3.5,0,7);ctx.fillStyle=p.k?za:mu;ctx.fill()}
      for(const d of rain){ctx.strokeStyle=cloud>.45?za:bl;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(d.x,d.y);ctx.lineTo(d.x,d.y+7);ctx.stroke()}
      ctx.fillStyle=tx;ctx.font='700 11px Inter,system-ui,sans-serif';ctx.textBaseline='top';ctx.textAlign='left';
      ctx.fillText('SO₂, NOₓ',chx-8,g-chh-16);ctx.textAlign='center';
      ctx.fillText(cloud>.05?'H₂SO₄ · HNO₃':'chmura',cx,cy-6);ctx.fillText('las',w*.6,g+4);ctx.fillText('jezioro',lx+lw/2,g+18);
      if(Math.floor(tm*2)!==lastTxt){lastTxt=Math.floor(tm*2);note.textContent='Efektywna emisja: '+Math.round(ef*100)+'% · pH deszczu ≈ '+rainPH.toFixed(1)+' · pH jeziora ≈ '+lake.toFixed(1)+(lake<5?' · poniżej ~5 życie w jeziorze jest zagrożone':'')+(filt?' · odsiarczanie usuwa ok. 85% SO₂':'')}
    });
  }
});

})();
