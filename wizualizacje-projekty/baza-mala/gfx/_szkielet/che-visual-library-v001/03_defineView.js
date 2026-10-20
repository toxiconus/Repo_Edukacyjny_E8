

defineView('chain-scn', {
  title:'Łańcuch przemian: pierwiastek → tlenek → kwas → sól', tag:'AMB',
  hint:'Trzy równoległe ścieżki dla siarki, węgla i azotu. Nadmiar zasady → sól obojętna.',
  foot:'S utlenia się przez SO₂. N₂ w kilku etapach. Nadmiar NaOH → Na₂SO₄; niedomiar → NaHSO₄.',
  build(host) {
    const boxes = [], arrows = [], labels = [];
    ['pierwiastek','tlenek kwasowy','kwas','sól'].forEach((t, i) => {
      labels.push({ x:5 + i*202 + 60, y:16, t, anchor:'middle', size:11, fill:'var(--text-muted)' });
    });
    const paths = [
      { y:28,  from:'S',  to:['SO₃','H₂SO₄','Na₂SO₄'], m1:'+O₂', m2:'+H₂O', m3:'+2 NaOH' },
      { y:100, from:'C',  to:['CO₂','H₂CO₃','Na₂CO₃'], m1:'+O₂', m2:'+H₂O ⇌', m3:'+2 NaOH' },
      { y:172, from:'N₂', to:['N₂O₅','HNO₃','KNO₃'], m1:'+O₂', m2:'+H₂O', m3:'+KOH' },
    ];
    paths.forEach((p, r) => {
      const items = [p.from, ...p.to];
      items.forEach((label, i) => {
        const x = 5 + i*202, w = 120, h = 44;
        boxes.push({ x, y:p.y, w, h, kind: ['gy','am','rd','gr'][i], title:label });
        if (i < items.length - 1) {
          const x1 = x + w, x2 = x + 202;
          arrows.push({ x1, y1:p.y + 22, x2, y2:p.y + 22 });
          labels.push({ x:(x1+x2)/2, y:p.y + 16, t: [p.m1, p.m2, p.m3][i], size:10.5, fill:'var(--accent)' });
        }
      });
    });
    labels.push({ x:5, y:248, t:'S utlenia się przez SO₂ · N₂ w kilku etapach · nadmiar zasady → sól obojętna, niedomiar → wodorosól', anchor:'start', size:11.5, fill:'var(--text-soft)', weight:600 });
    V.flowchart(host, { vb:[760, 300], boxes, arrows, labels });
  }
});

defineView('energy-profile', {
  title:'Termochemia — egzo i endo', tag:'ZA',
  hint:'Ea = energia aktywacji. ΔH < 0 egzotermiczna; ΔH > 0 endotermiczna.',
  foot:'Rozcieńczanie H₂SO₄ egzotermiczne. Zobojętnianie: ΔH ≈ −57 kJ/mol.',
  build(host) {
    host.innerHTML = '';
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%';
    if (window.matchMedia('(max-width: 640px)').matches) grid.style.gridTemplateColumns = '1fr';
    [{type:'exo',label:'Reakcja egzotermiczna',note:'np. zobojętnianie — roztwór się ogrzewa. ΔH < 0.',col:'var(--c-e8)'},
     {type:'endo',label:'Reakcja endotermiczna',note:'np. rozpuszczanie NH₄NO₃ — roztwór się chłodzi. ΔH > 0.',col:'var(--c-err)'}]
      .forEach(item => {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'border:1px solid var(--border);border-radius:12px;padding:10px;background:var(--surface-soft)';
        const h = document.createElement('div');
        h.style.cssText = `text-align:center;font-size:13px;font-weight:800;color:${item.col};margin-bottom:4px`;
        h.textContent = item.label;
        const body = document.createElement('div');
        V.energyProfile(body, { vb:[340, 240], type:item.type });
        const p = document.createElement('p');
        p.style.cssText = 'font-size:11.5px;color:var(--text-soft);text-align:center;margin-top:4px';
        p.textContent = item.note;
        wrap.append(h, body, p);
        grid.appendChild(wrap);
      });
    host.appendChild(grid);
  }
});

defineView('species-v01', {
  title:'Formy kwasu a pH — diagram rozkładu · v0.01', tag:'VIZ',
  hint:'Wybierz kwas i przesuń suwak pH. Krzywe pokazują udział każdej formy (HₙA … Aⁿ⁻). Przy pH = pKa udziały sąsiednich form są równe.',
  foot:'Dane: pKa w 25 °C (wartości tablicowe, zaokrąglone). Dla H₂CO₃ użyto efektywnego pKa₁ ≈ 6,35 (CO₂(aq) + H₂CO₃). Model idealny, bez siły jonowej.',
  build(host){
    host.innerHTML='';
    const AC={'CH₃COOH':{p:[4.76],f:['CH₃COOH','CH₃COO⁻']},'HF':{p:[3.17],f:['HF','F⁻']},'H₂CO₃':{p:[6.35,10.33],f:['H₂CO₃','HCO₃⁻','CO₃²⁻']},'H₃PO₄':{p:[2.15,7.2,12.35],f:['H₃PO₄','H₂PO₄⁻','HPO₄²⁻','PO₄³⁻']}};
    const COL=['--c-err','--c-za','--c-e8','--c-und'];
    const row=document.createElement('div'); row.className='r'; row.style.marginTop='0';
    Object.keys(AC).forEach((k,i)=>{const b=document.createElement('button');b.type='button';b.textContent=k;b.dataset.a=k;if(i===0)b.classList.add('on');row.appendChild(b)});
    const sl=document.createElement('div'); sl.className='r'; sl.innerHTML='<label>pH <b class="po"></b></label><input class="ph" type="range" min="0" max="14" step="0.05" value="7" aria-label="pH roztworu">';
    const box=document.createElement('div'); const out=document.createElement('div'); out.className='note'; out.setAttribute('aria-live','polite');
    host.append(row,sl,box,out);
    let key='CH₃COOH', pH=7;
    const comma=x=>x.toFixed(1).replace('.',',');
    function frac(p,ph){const h=Math.pow(10,-ph),n=p.length,t=[Math.pow(h,n)];let pr=1;for(let j=1;j<=n;j++){pr*=Math.pow(10,-p[j-1]);t.push(pr*Math.pow(h,n-j))}const S=t.reduce((a,b)=>a+b,0);return t.map(x=>x/S)}
    const X=v=>34+v*(316/14), Y=f=>186-f*160;
    function render(){
      const a=AC[key], n=a.f.length; sl.querySelector('.po').textContent=pH.toFixed(2).replace('.',',');
      let g='';
      a.p.forEach(pk=>{g+='<rect x="'+X(Math.max(0,pk-1))+'" y="26" width="'+(X(Math.min(14,pk+1))-X(Math.max(0,pk-1)))+'" height="160" style="fill:var(--accent);opacity:.08"/><line x1="'+X(pk)+'" x2="'+X(pk)+'" y1="26" y2="186" style="stroke:var(--text-muted);stroke-dasharray:3 3"/>'});
      for(let v=0;v<=14;v+=2) g+='<text x="'+X(v)+'" y="202" text-anchor="middle" font-size="10" style="fill:var(--text-muted)">'+v+'</text>';
      [0,50,100].forEach(v=>g+='<text x="28" y="'+(Y(v/100)+3)+'" text-anchor="end" font-size="10" style="fill:var(--text-muted)">'+v+'%</text><line x1="34" x2="350" y1="'+Y(v/100)+'" y2="'+Y(v/100)+'" style="stroke:var(--border)"/>');
      for(let j=0;j<n;j++){let d='';for(let v=0;v<=14.001;v+=.2){d+=(v?'L':'M')+X(v).toFixed(1)+' '+Y(frac(a.p,v)[j]).toFixed(1)}g+='<path d="'+d+'" fill="none" stroke-width="2.2" style="stroke:var('+COL[j]+')"/>'}
      const fr=frac(a.p,pH);
      g+='<line x1="'+X(pH)+'" x2="'+X(pH)+'" y1="26" y2="186" style="stroke:var(--text);stroke-width:1.5"/>';
      fr.forEach((f,j)=>g+='<circle cx="'+X(pH)+'" cy="'+Y(f)+'" r="4" style="fill:var('+COL[j]+')"/>');
      g+='<text x="192" y="16" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--text)">udział formy [%] w zależności od pH</text>';
      box.innerHTML='<svg viewBox="0 0 360 212" role="img" aria-label="Diagram rozkładu form kwasu">'+g+'</svg>';
      let top=0;fr.forEach((f,j)=>{if(f>fr[top])top=j});
      let t=a.f.map((nm,j)=>'<b style="color:var('+COL[j]+')">'+nm+'</b> '+comma(fr[j]*100)+'%').join(' · ');
      const near=a.p.findIndex(pk=>Math.abs(pH-pk)<.15);
      if(near<0) t+='<br>Dominuje: <b>'+a.f[top]+'</b>.'; else t+='<br>';
      if(near>=0) t+=' pH ≈ pKa'+(a.p.length>1?'₍'+(near+1)+'₎':'')+': dwie sąsiednie formy mają po ok. 50% — środek strefy buforowej.';
      else if(a.p.some(pk=>Math.abs(pH-pk)<=1)) t+=' Jesteś w strefie buforowej (pKa ± 1).';
      out.innerHTML=t;
    }
    row.querySelectorAll('button').forEach(b=>b.onclick=()=>{key=b.dataset.a;row.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));render()});
    sl.querySelector('.ph').oninput=e=>{pH=+e.target.value;render()};
    render();
  }
});

defineView('kinetics-v01', {
  title:'Kinetyka — zderzenia cząstek z metalem · v0.01', tag:'MOTION',
  hint:'Cząstki H₃O⁺ uderzają w powierzchnię metalu. Reakcja zachodzi tylko, gdy zderzenie ma energię ≥ Ea (szybka cząstka). Zmieniaj temperaturę, stężenie, powierzchnię i katalizator.',
  foot:'Model poglądowy: stężenie stałe (zużyta cząstka wraca u góry), temperatura w skali względnej. Katalizator obniża Ea, nie zmienia ΔH.',
  build(host){
    host.innerHTML='';
    const ctl=document.createElement('div'); ctl.className='r'; ctl.style.marginTop='0';
    ctl.innerHTML='<label>T <b class="to"></b></label><input class="t" type="range" min="0" max="100" value="40"><label>c <b class="co"></b></label><input class="c" type="range" min="10" max="70" value="30"><button type="button" class="sf">Powierzchnia: granulka</button><button type="button" class="ct">Katalizator: wył.</button>';
    const cv=document.createElement('canvas'); cv.dataset.h=330; cv.style.background='var(--surface-soft)'; cv.style.borderRadius='var(--r-sm)';
    const note=document.createElement('div'); note.className='note'; host.append(ctl,cv,note);
    V.table(host,{columns:['Czynnik','Wpływ','Przykład'],rows:[['Stężenie','większe → szybciej','stężony HCl + Zn szybciej niż rozcieńczony'],['Temperatura','wyższa → szybciej','ogrzewanie przyspiesza reakcję'],['Powierzchnia','rozdrobnienie → szybciej','pył Zn szybciej niż granulka'],['Natura reagentów','różne mechanizmy','Mg z HCl szybciej niż Zn'],['Katalizator','obniża Ea','SO₂ + O₂ → SO₃ z katalizatorem']]});
    const q=x=>ctl.querySelector(x); let T=40,N=30,powder=false,cat=false;
    let P=[],B=[],hits=[],tm=0,lastPh=0,seed=7,W=600,Hh=330,lastTxt=-1;
    const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
    const sig=()=>30+.55*T, vth=()=>cat?70:110;
    const spd=()=>sig()*Math.sqrt(-2*Math.log(1-rnd()*.999));
    function spawn(top){const v=spd(),a=rnd()*6.283;return {x:10+rnd()*(W-20),y:top?8+rnd()*20:10+rnd()*(Hh-60),vx:v*Math.cos(a),vy:v*Math.sin(a)||1}}
    function sync(){while(P.length<N)P.push(spawn(false));while(P.length>N)P.pop();q('.to').textContent=Math.round(10+T*.7)+' °C';q('.co').textContent=(N/100).toFixed(2)+' mol/L'}
    function reset(){seed=7;P=[];B=[];hits=[];tm=0;lastPh=0;sync()}
    q('.t').oninput=e=>{const o=sig();T=+e.target.value;const k=sig()/o;P.forEach(p=>{p.vx*=k;p.vy*=k});sync();CHE.MOTION.wake&&CHE.MOTION.wake()};
    q('.c').oninput=e=>{N=+e.target.value;sync();CHE.MOTION.wake&&CHE.MOTION.wake()};
    q('.sf').onclick=e=>{powder=!powder;e.target.textContent='Powierzchnia: '+(powder?'pył':'granulka');CHE.MOTION.wake&&CHE.MOTION.wake()};
    q('.ct').onclick=e=>{cat=!cat;e.target.textContent='Katalizator: '+(cat?'wł.':'wył.');CHE.MOTION.wake&&CHE.MOTION.wake()};
    sync();
    CHE.MOTION.add(cv,(ctx,w,h,ph)=>{
      W=w;Hh=h; let dt=ph-lastPh; lastPh=ph; if(dt<0){reset();dt=0} dt=Math.min(dt,.05);
      const cs=getComputedStyle(document.documentElement),tx=cs.getPropertyValue('--text').trim()||'#222',mu=cs.getPropertyValue('--text-muted').trim()||'#777',blue=cs.getPropertyValue('--c-und').trim()||'#2b5e9c',acc=cs.getPropertyValue('--accent').trim()||'#0d6868',amb=cs.getPropertyValue('--c-za').trim()||'#a86a00';
      tm+=dt; const mh=16, floor=h-mh, sw=powder?w:w*.28, sx0=powder?0:(w-sw)/2;
      for(const p of P){
        p.x+=p.vx*dt;p.y+=p.vy*dt;
        if(p.x<6){p.x=6;p.vx=Math.abs(p.vx)}else if(p.x>w-6){p.x=w-6;p.vx=-Math.abs(p.vx)}
        if(p.y<6){p.y=6;p.vy=Math.abs(p.vy)}
        if(p.y>floor-5){
          const sp=Math.hypot(p.vx,p.vy);
          if(p.x>=sx0&&p.x<=sx0+sw&&sp>=vth()){hits.push(tm);B.push({x:p.x,y:floor-8,r:3+rnd()*2});Object.assign(p,spawn(true))}
          else{p.y=floor-5;p.vy=-Math.abs(p.vy)}
        }
      }
      for(const b of B){b.y-=40*dt;b.x+=Math.sin(tm*4+b.r)*.4}
      B=B.filter(b=>b.y>-6); hits=hits.filter(t=>tm-t<4);
      ctx.fillStyle=mu;ctx.fillRect(sx0,floor,sw,mh);
      if(!powder){ctx.fillStyle='rgba(128,128,128,.25)';ctx.fillRect(0,floor,sx0,mh);ctx.fillRect(sx0+sw,floor,w-sx0-sw,mh)}
      ctx.fillStyle=tx;ctx.font='700 11px Inter,system-ui,sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(powder?'Zn (pył)':'Zn (granulka)',w/2,floor+mh/2);
      let fast=0;
      for(const p of P){const f=Math.hypot(p.vx,p.vy)>=vth();if(f)fast++;ctx.beginPath();ctx.arc(p.x,p.y,5,0,7);ctx.fillStyle=f?amb:blue;ctx.globalAlpha=f?1:.75;ctx.fill();ctx.globalAlpha=1}
      ctx.strokeStyle=acc;ctx.lineWidth=1.5;for(const b of B){ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.stroke()}
      ctx.textAlign='left';ctx.textBaseline='top';ctx.fillStyle=mu;ctx.font='600 11px Inter,system-ui,sans-serif';
      ctx.fillText('● H₃O⁺ (wolna)   ● H₃O⁺ z energią ≥ Ea   ○ bąbelki H₂',8,6);
      if(Math.floor(tm*2)!==lastTxt){lastTxt=Math.floor(tm*2);const r=hits.length/Math.min(tm,4||1||4);note.textContent='Szybkość ≈ '+(tm>.3?(hits.length/Math.min(tm,4)).toFixed(1):'…')+' reakcji/s · cząstek z energią ≥ Ea: '+Math.round(100*fast/Math.max(1,P.length))+'% · Ea '+(cat?'obniżona katalizatorem':'bez katalizatora')+'.'}
    });
  }
});

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

defineView('mind-map', {
  title:'Mapy myśli — MASTER · wybierz temat', tag:'AMB',
  hint:'Jedna interaktywna mapa myśli zastępuje rozproszone warianty. Kliknij gałąź, aby zobaczyć podpowiedź.',
  foot:'Źródłowe mapy ATOM/JON/WZÓR/RÓWNANIE/WIĄZANIA/TYPY REAKCJI/UKŁAD OKRESOWY/KLINIKA BŁĘDÓW są zebrane w jednym widoku i mogą być później rozwijane.',
  build(host) {
    host.innerHTML='';
    const ctl=document.createElement('div'); ctl.className='r'; ctl.style.marginTop='0';
    const sel=document.createElement('select'); sel.setAttribute('aria-label','Wybierz mapę myśli');
    const maps={
      'KWAS':[['definicja','Kwas Brønsteda: donor H⁺.'],['dysocjacja','HA + H₂O ⇌ H₃O⁺ + A⁻.'],['reakcje','metal · tlenek · wodorotlenek · węglan'],['pH','pH < 7 — odczyn kwasowy.'],['zastosowania','Przykłady zastosowań kwasów.'],['BHP','Kwas zawsze dodajemy do wody.']],
      'ATOM':[['jądro','protony + neutrony'],['elektrony','elektrony zajmują powłoki i podpowłoki'],['izotopy','ten sam Z, różna liczba neutronów'],['jony','utrata lub przyjęcie elektronów'],['wartościowość','elektrony walencyjne a wiązania']],
      'JON':[['kation','ładunek dodatni · oddał elektrony'],['anion','ładunek ujemny · przyjął elektrony'],['ładunek','e⁻ < p⁺ lub e⁻ > p⁺'],['przykład','Na⁺ / Cl⁻'],['bilans','suma ładunków = 0 w związku']],
      'WZÓR SUMARYCZNY':[['symbole','jakie pierwiastki występują'],['indeksy','ile atomów każdego pierwiastka'],['wartościowość','dobór stosunku atomów'],['grupa atomowa','OH⁻, SO₄²⁻, NO₃⁻ itd.'],['kontrola','sprawdź bilans ładunku']],
      'RÓWNANIE':[['substraty','co reaguje'],['produkty','co powstaje'],['współczynniki','wyrównaj liczbę atomów'],['stan','s / l / g / aq'],['warunki','energia · katalizator · światło · temperatura']],
      'WIĄZANIA':[['jonowe','przekazanie elektronów · jony'],['kowalencyjne','uwspólnienie elektronów'],['metaliczne','sieć metalu + zdelokalizowane elektrony'],['polaryzacja','różnica elektroujemności'],['geometria','wiązania → kształt cząsteczki']],
      'TYPY REAKCJI':[['synteza','A + B → AB'],['analiza','AB → A + B'],['wypieranie','A + BC → AC + B'],['podwójna wymiana','AB + CD → AD + CB'],['spalanie','substancja + O₂ → produkty + energia']],
      'UKŁAD OKRESOWY':[['grupa','podobne właściwości i elektrony walencyjne'],['okres','liczba zajętych powłok'],['metal / niemetal','charakter chemiczny'],['elektroujemność','trend okresowy'],['promień / energia','trendy okresowe']],
      'KLINIKA BŁĘDÓW':[['wzór','czy indeksy i wartościowości są poprawne?'],['równanie','czy atomy są wyrównane?'],['ładunek','czy suma ładunków się zgadza?'],['obserwacja','co naprawdę widać?'],['wniosek','czy wynika z obserwacji i danych?']]
    };
    Object.keys(maps).forEach(k=>{const o=document.createElement('option');o.value=k;o.textContent=k;if(k==='KWAS')o.selected=true;sel.appendChild(o)});
    const hint=document.createElement('span'); hint.className='note'; hint.style.margin='0';
    ctl.append('Mapa: ',sel); host.append(ctl,hint);
    const svgHost=document.createElement('div'); host.appendChild(svgHost);
    function render(){
      const key=sel.value, arr=maps[key], cx=450,cy=240,R=175;
      const nodes=arr.map((x,i)=>{const a=-Math.PI/2+i*2*Math.PI/arr.length;return {l:x[0],c:['#2b5e9c','#6b3fa0','#b06f1c','#2e7d4f','#b83a45'][i%5],x:cx+Math.cos(a)*R,y:cy+Math.sin(a)*R,t:x[1]}});
      V.radial(svgHost,{vb:[900,480],center:{x:cx,y:cy,label:key},nodes});
      svgHost.querySelectorAll('text').forEach(t=>{const n=nodes.find(x=>x.l===t.textContent);if(n){t.style.cursor='pointer';t.addEventListener('click',()=>{hint.innerHTML='<b>'+n.l+':</b> '+n.t})}});
      hint.innerHTML='<b>Podpowiedź:</b> kliknij dowolną gałąź.';
    }
    sel.onchange=render; render();
  }
});

(function(){
  const C=window.CHE;if(!C||!C.DATA)return;
  C.DATA.EDU=C.DATA.EDU||{};
  C.DATA.EDU.EXAM_FLOW={
    steps:[
      {title:'1. Co mam?',lines:['wzór, nazwa,','równanie'],detail:'Najpierw odczytaj dokładnie dane: wzór, nazwę, równanie, obserwację albo wartość liczbową. Określ, czego naprawdę szukasz.'},
      {title:'2. Typ zadania?',lines:['nazwa, dysocjacja,','reakcja czy pH?'],detail:'Rozpoznaj typ zadania: nazewnictwo, dysocjacja, reakcja, pH, moc kwasu czy interpretacja doświadczenia.'},
      {title:'3. Jaki model?',lines:['mocny czy słaby;','metal przed/za H?'],detail:'Dobierz model: mocny/słaby kwas, wartościowość, szereg aktywności metali, bilans ładunków albo dane roztworu.'},
      {title:'4. Zapis',lines:['wzór, równanie','cząst. i jonowe'],detail:'Dopiero teraz zapisz wzór lub równanie. W razie potrzeby przejdź do zapisu jonowego.'},
      {title:'5. Kontrola',lines:['ładunki i atomy;','czy to ma sens?'],detail:'Sprawdź atomy, ładunki, współczynniki i sens chemiczny. Sprawdź też, czy reakcja rzeczywiście zachodzi.'}
    ],
    examples:[
      {title:'Przykład: „Ułóż wzór kwasu siarkowego(VI)”',lines:['1–2  nazwa → nazewnictwo tlenowych','3  S(VI), H(I), O(II)','4  H₂SO₄','5  2·(+1) + 6 + 4·(−2) = 0  ✓']},
      {title:'Przykład: „Cu + HCl → ?”',lines:['1–2  metal + kwas','3  Cu stoi ZA H w szeregu','4  brak reakcji','5  H₂ nie powstaje ✓']}
    ]
  };
})();

defineView('flow-egzamin-enhanced', {
  title:'Algorytm egzaminacyjny — interaktywny schemat · v0.06 · 2026-10-01', tag:'E8',
  hint:'Kliknij krok, aby zobaczyć wyjaśnienie. Widok korzysta z centralnych danych CHE.DATA.EDU.EXAM_FLOW.',
  foot:'Wersja HTML/CSS zastępuje problematyczne renderowanie SVG; treść, kolejność i przykłady pozostają wspólnymi danymi dydaktycznymi.',
  build(host){
    host.innerHTML='';
    const edu=CHE.DATA?.EDU?.EXAM_FLOW||{steps:[],examples:[]};
    const wrap=document.createElement('div');
    wrap.className='che-exam-flow-html';
    const row=document.createElement('div'); row.className='che-exam-flow-steps';
    const detail=document.createElement('div'); detail.className='che-flow-detail';
    const buttons=[];
    const steps=edu.steps||[];
    function select(i,fromUser){
      buttons.forEach((b,j)=>b.classList.toggle('active',j===i));
      const d=steps[i]?.detail||'';
      detail.innerHTML='<b>'+((steps[i]?.title)||'Krok')+'</b><div style="margin-top:4px">'+d+'</div>';
      if(fromUser) wrap.dataset.selected=String(i);
    }
    steps.forEach((step,i)=>{
      const card=document.createElement('button'); card.type='button'; card.className='che-exam-step';
      const num=document.createElement('span'); num.className='che-exam-num'; num.textContent=String(i+1);
      const body=document.createElement('span'); body.className='che-exam-body';
      const title=document.createElement('strong'); title.textContent=step.title||('Krok '+(i+1)); body.appendChild(title);
      (step.lines||[]).forEach(line=>{const x=document.createElement('span');x.textContent=line;body.appendChild(x)});
      card.append(num,body); card.onclick=()=>select(i,true); row.appendChild(card); buttons.push(card);
      if(i<steps.length-1){const arrow=document.createElement('span');arrow.className='che-exam-arrow';arrow.textContent='→';arrow.setAttribute('aria-hidden','true');row.appendChild(arrow)}
    });
    wrap.appendChild(row);
    wrap.appendChild(detail);
    const examples=document.createElement('div'); examples.className='che-exam-examples';
    (edu.examples||[]).forEach(ex=>{
      const box=document.createElement('div'); box.className='che-exam-example';
      const h=document.createElement('b'); h.textContent=ex.title||'Przykład'; box.appendChild(h);
      const ul=document.createElement('div'); ul.className='che-exam-example-lines';
      (ex.lines||[]).forEach(line=>{const x=document.createElement('div');x.textContent=line;ul.appendChild(x)});
      box.appendChild(ul); examples.appendChild(box);
    });
    wrap.appendChild(examples); host.appendChild(wrap);
    if(steps.length) select(0,false);
  }
});