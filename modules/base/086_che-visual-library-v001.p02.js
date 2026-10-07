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

/* --- Kinetyka v0.01 (MOTION) · 2026-10-01 --- */
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

/* --- Kwaśne deszcze v0.01 (MOTION) · 2026-10-01 --- */
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
      // tło: komin, chmura, drzewa, jezioro
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

/* --- 41. Bilans mas środowiska --- */
/* [MARTWY KOD — nadpisany przez env-balance niżej (migracja 5). Zawiera wzory i rozpisany przykład 1000 L, pH 4, których nowa wersja nie pokazuje.] */
/* --- 42. Mapa myśli — NAPRAWIONA --- */
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

/* --- 49B. Moc kwasu a stężenie — rzeczywiste ulepszenie v0.01 --- */
defineView('strong-vs-weak-enhanced', {
  title:'Moc kwasu a stężenie — ten sam kwas przy dwóch stężeniach', tag:'MOTION',
  hint:'Wybierz jeden kwas. Porównaj dwa stężenia i uruchom proces, aby zobaczyć jak zmienia się udział cząstek zdysocjowanych.',
  foot:'Model dydaktyczny: dla kwasu słabego rozcieńczenie zwiększa stopień dysocjacji α. Nie oznacza to, że kwas staje się „mocniejszy”.',
  build(host){
    host.innerHTML='';
    const row=document.createElement('div'); row.className='r'; row.style.marginTop='0';
    ['HCl','HF','CH₃COOH','HCN'].forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.textContent=a;b.dataset.a=a;if(i===0)b.classList.add('on');row.appendChild(b)});
    const controls=document.createElement('div'); controls.className='r';
    controls.innerHTML='<label>C₁ <b class="c1o"></b></label><input class="c1" type="range" min="-3" max="0" step="0.05" value="-2"><label>C₂ <b class="c2o"></b></label><input class="c2" type="range" min="-3" max="0" step="0.05" value="-0.5"><button class="play">▶ Start</button><button class="step">▸ Krok</button><button class="reset">↺ Reset</button>';
    const cv=document.createElement('canvas');cv.dataset.h=360;cv.style.background='var(--surface-soft)';cv.style.borderRadius='var(--r-sm)';
    const metrics=document.createElement('div');metrics.className='metric-grid';
    const note=document.createElement('div');note.className='note';
    host.append(row,controls,cv,metrics,note);
    const A={HCl:{k:null},HF:{k:6.8e-4},'CH₃COOH':{k:1.8e-5},HCN:{k:6.2e-10}};
    let acid='HCl',c1=.01,c2=Math.pow(10,-.5),phase=0,playing=false,last=0;
    const c1i=controls.querySelector('.c1'),c2i=controls.querySelector('.c2'),c1o=controls.querySelector('.c1o'),c2o=controls.querySelector('.c2o'),play=controls.querySelector('.play');
    function alpha(C){const k=A[acid].k;if(k==null)return 1;return Math.min(1,(-k+Math.sqrt(k*k+4*k*C))/(2*C));}
    function ph(C,a){if(A[acid].k==null)return -Math.log10(C);const al=alpha(C);return -Math.log10(Math.max(1e-12,C*al));}
    function fmt(C){return C.toFixed(3).replace('.',',')+' M'}
    function syncButtons(){row.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.a===acid));c1=Math.pow(10,+c1i.value);c2=Math.pow(10,+c2i.value);c1o.textContent=fmt(c1);c2o.textContent=fmt(c2);}
    row.querySelectorAll('button').forEach(b=>b.onclick=()=>{acid=b.dataset.a;phase=0;playing=false;syncButtons();});
    [c1i,c2i].forEach(i=>i.oninput=()=>{phase=0;playing=false;syncButtons();});
    play.onclick=()=>{playing=!playing;play.textContent=playing?'⏸ Pauza':'▶ Start'};
    controls.querySelector('.step').onclick=()=>{phase=Math.min(1,phase+.12);render();};
    controls.querySelector('.reset').onclick=()=>{phase=0;playing=false;c1i.value=-2;c2i.value=-.5;syncButtons();render();};
    function drawPanel(ctx,x,y,w,h,C,label,idx){
      const al=alpha(C), shown=al*phase, N=32, diss=Math.round(N*shown);
      ctx.save();ctx.strokeStyle='#94a3b8';ctx.lineWidth=2;ctx.strokeRect(x,y,w,h);
      ctx.fillStyle='#0f172a';ctx.font='800 13px Inter,system-ui';ctx.textAlign='left';ctx.fillText(label+' · '+fmt(C),x+10,y+20);
      ctx.fillStyle='#64748b';ctx.font='600 11px Inter,system-ui';ctx.fillText('α = '+(al*100).toFixed(2).replace('.',',')+'% · pH ≈ '+ph(C,al).toFixed(2).replace('.',','),x+10,y+38);
      for(let i=0;i<N;i++){const col=i<diss?'ion':'ha';const gx=x+18+(i%8)*(w-36)/7;const gy=y+62+Math.floor(i/8)*(h-80)/3;const j=(i*17+idx*31)%N;const wob=Math.sin(Date.now()/700+i)*2;
        ctx.beginPath();ctx.arc(gx+wob,gy, col==='ion'?5:7,0,Math.PI*2);ctx.fillStyle=col==='ion'?'#60a5fa':'#cbd5e1';ctx.fill();ctx.strokeStyle='#64748b';ctx.stroke();ctx.fillStyle='#0f172a';ctx.font='700 7px Inter,system-ui';ctx.textAlign='center';ctx.fillText(col==='ion'?'H⁺/A⁻':'HA',gx+wob,gy+2.5);
      }
      ctx.fillStyle='#0f172a';ctx.font='700 10px Inter,system-ui';ctx.textAlign='left';ctx.fillText('zdysocjowane: '+diss+'/'+N+' · pozostałe HA: '+(N-diss),x+10,y+h-12);ctx.restore();
    }
    function render(){syncButtons();const ctx=cv.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2),w=cv.clientWidth||600,h=360;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);const gap=12,pw=(w-gap)/2;drawPanel(ctx,0,0,pw,h,c1,'Niższe stężenie',1);drawPanel(ctx,pw+gap,0,pw,h,c2,'Wyższe stężenie',2);
      const a1=alpha(c1),a2=alpha(c2);metrics.innerHTML='<div><b>α przy C₁</b><strong>'+(a1*100).toFixed(2).replace('.',',')+'%</strong></div><div><b>α przy C₂</b><strong>'+(a2*100).toFixed(2).replace('.',',')+'%</strong></div><div><b>Różnica α</b><strong>'+(Math.abs(a1-a2)*100).toFixed(2).replace('.',',')+' p.p.</strong></div>';
      note.innerHTML=A[acid].k==null?'<b>HCl:</b> mocny kwas — w modelu przy obu stężeniach dysocjacja jest praktycznie całkowita. Zmiana stężenia zmienia ilość substancji i pH, nie „moc” kwasu.':'<b>'+acid+':</b> przy niższym stężeniu α jest większe. To dobry przykład rozdzielenia pojęć <b>moc kwasu</b> i <b>stężenie</b>.';
    }
    function loop(t){if(playing){phase=Math.min(1,phase+(t-last||0)/1800);if(phase>=1){playing=false;play.textContent='▶ Start'}}last=t;render();requestAnimationFrame(loop)}
    syncButtons();render();requestAnimationFrame(loop);
  }
});


/* --- ULEPSZENIE 01. Moc kwasu a stężenie v0.02 --- */
defineView('strong-vs-weak-enhanced-v02', {
  title:'Moc kwasu a stężenie — v0.02: cząstki i stopień dysocjacji', tag:'MOTION',
  hint:'Ta wersja pokazuje proces na poziomie cząstek: HA pozostaje niezdysocjowane albo przechodzi do H₃O⁺ i A⁻. Zmiana stężenia nie zmienia Ka kwasu.',
  foot:'Model dydaktyczny: dla kwasu słabego rozcieńczenie zwiększa α; dla mocnego kwasu przyjęto w tym uproszczeniu α≈100%.',
  build(host){
    host.innerHTML='';
    const LC=CHE.LESSON_CONTEXT;
    /* Ka / klasyfikacja z centralnego modelu; lista UI z optionsFor */
    const Kengine={HCl:null,HF:6.8e-4,'CH₃COOH':1.8e-5,HCN:6.2e-10,'HNO₃':null,'H₂SO₄':null};
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('strong-vs-weak-enhanced-v02',{
      strong:['HCl','HNO₃','H₂SO₄'], weak:['CH₃COOH','HF','HCN'],
      acids:['HCl','HF','CH₃COOH','HCN']
    }):{acids:['HCl','HF','CH₃COOH','HCN']};
    let acidList=opts.acids||Object.keys(Kengine);
    if(opts.strong||opts.weak){
      const merge=[].concat(opts.strong||[],opts.weak||[]);
      if(merge.length) acidList=merge.filter(function(a,i,arr){return arr.indexOf(a)===i});
    }
    const top=document.createElement('div'); top.className='r';
    top.innerHTML='<b>Wybierz kwas:</b>';
    acidList.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.textContent=a;b.dataset.a=a;if(i===0)b.classList.add('on');top.appendChild(b)});
    const controls=document.createElement('div'); controls.className='r';
    controls.innerHTML='<label>Stężenie A <output class="ca"></output></label><input class="ra" type="range" min="-3" max="-0.3" step="0.05" value="-2"><label>Stężenie B <output class="cb"></output></label><input class="rb" type="range" min="-3" max="-0.3" step="0.05" value="-0.5"><button class="play">▶ Start</button><button class="step">▸ Krok</button><button class="reset">↺ Reset</button>';
    const cv=document.createElement('canvas'); cv.dataset.h=380; cv.style.width='100%'; cv.style.borderRadius='10px';
    const info=document.createElement('div'); info.className='metric-grid';
    const note=document.createElement('div'); note.className='note';
    host.append(top,controls,cv,info,note);
    const K=Kengine;
    let acid=acidList[0]||'HCl', phase=0, playing=false, last=0;
    const ra=controls.querySelector('.ra'),rb=controls.querySelector('.rb'),ca=controls.querySelector('.ca'),cb=controls.querySelector('.cb'),play=controls.querySelector('.play');
    const C=()=>[10**(+ra.value),10**(+rb.value)];
    const alpha=c=>K[acid]==null?1:(CHE.CHEM.weakAcid(c,K[acid]).alpha);
    const ph=c=>K[acid]==null?CHE.CHEM.strongAcid(c).pH:CHE.CHEM.weakAcid(c,K[acid]).pH;
    const fmt=c=>c.toFixed(3).replace('.',',')+' M';
    function sync(){C().forEach((v,i)=>[ca,cb][i].textContent=fmt(v));top.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.a===acid));}
    top.querySelectorAll('button').forEach(b=>b.onclick=()=>{acid=b.dataset.a;phase=0;playing=false;play.textContent='▶ Start';render()});
    [ra,rb].forEach(r=>r.oninput=()=>{phase=0;playing=false;render()});
    play.onclick=()=>{playing=!playing;play.textContent=playing?'⏸ Pauza':'▶ Start'};
    controls.querySelector('.step').onclick=()=>{phase=Math.min(1,phase+.125);render()};
    controls.querySelector('.reset').onclick=()=>{ra.value=-2;rb.value=-.5;acid='HCl';phase=0;playing=false;play.textContent='▶ Start';render()};
    function particle(ctx,x,y,type,idx){
      const r=type==='HA'?7:5.5; ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=type==='HA'?'#dbe4ec':(type==='H₃O⁺'?'#7dd3fc':'#a7f3d0');ctx.fill();ctx.strokeStyle='#64748b';ctx.stroke();
      ctx.fillStyle='#0f172a';ctx.font='700 7px Inter,system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(type,x,y);
    }
    function panel(ctx,x,y,w,h,c,label,idx){
      const a=alpha(c),N=36,d=Math.round(N*a*phase);ctx.save();ctx.strokeStyle='#cbd5e1';ctx.strokeRect(x,y,w,h);
      ctx.fillStyle='#0f172a';ctx.font='800 13px Inter,system-ui';ctx.textAlign='left';ctx.fillText(label+' · '+fmt(c),x+10,y+19);
      ctx.font='600 11px Inter,system-ui';ctx.fillStyle='#475569';ctx.fillText('α = '+(a*100).toFixed(2).replace('.',',')+'% · pH ≈ '+ph(c).toFixed(2).replace('.',','),x+10,y+37);
      for(let i=0;i<N;i++){
        const col=i<d?Math.floor(i/2):i; const row=i%4; const px=x+22+(col%8)*(w-44)/7; const py=y+70+Math.floor(col/8)*(h-94)/4+row*1.5;
        if(i<d){particle(ctx,px-5,py,'H₃O⁺',i);particle(ctx,px+7,py+3,'A⁻',i)} else particle(ctx,px,py,'HA',i);
      }
      ctx.fillStyle='#0f172a';ctx.font='700 10px Inter,system-ui';ctx.fillText('zdysocjowane: '+d+' / '+N+' · HA: '+(N-d),x+10,y+h-12);ctx.restore();
    }
    function render(){sync();const w=cv.clientWidth||650,h=380,dpr=Math.min(devicePixelRatio||1,2);cv.width=w*dpr;cv.height=h*dpr;const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);const gap=12,pw=(w-gap)/2,[c1,c2]=C();panel(ctx,0,0,pw,h,c1,'Niższe stężenie',1);panel(ctx,pw+gap,0,pw,h,c2,'Wyższe stężenie',2);const a1=alpha(c1),a2=alpha(c2);info.innerHTML='<div><b>α A</b><strong>'+(a1*100).toFixed(2).replace('.',',')+'%</strong></div><div><b>α B</b><strong>'+(a2*100).toFixed(2).replace('.',',')+'%</strong></div><div><b>Δα</b><strong>'+((a1-a2)*100).toFixed(2).replace('.',',')+' p.p.</strong></div>';note.innerHTML=K[acid]==null?'<b>HCl:</b> w tym modelu dysocjacja jest praktycznie pełna. Zmiana stężenia zmienia pH i liczbę cząstek w objętości, ale nie moc kwasu.':'<b>'+acid+':</b> przy niższym stężeniu większa część cząsteczek jest zdysocjowana. To efekt równowagi, a nie zmiany wartości Ka.';}
    function loop(t){if(playing){phase=Math.min(1,phase+(t-last)/1700);if(phase>=1){playing=false;play.textContent='▶ Start'}}last=t;render();requestAnimationFrame(loop)}
    render();requestAnimationFrame(loop);
  }
});

/* --- CHE.DATA.EDU — wspólne dane dydaktyczne dla wizualizacji --- */
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

/* --- ULEPSZENIE 02. Algorytm egzaminacyjny v0.02 · 2026-10-01 08:13 --- */
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

/* --- 50. Układ okresowy 1–54 (VIZ + MOTION) --- */
defineView('periodic-54', {
  title:'Układ okresowy — pierwiastki 1–54, modele atomów, tlenki', tag:'VIZ',
  hint:'Koloruj wg rodzaju / charakteru tlenku / elektroujemności. Kliknij pierwiastek — wartościowość, tlenki i model atomu poniżej.',
  foot:'Wartościowość i tlenki z CHE.DATA.OXIDE_STATES i CHE.OXIDES; kolor „charakter tlenku” — tlenek na najwyższym stopniu utlenienia.',
  build(host) {
    host.innerHTML = '';
    const modeRow = document.createElement('div');
    modeRow.className = 'r'; modeRow.style.marginTop = '0';
    modeRow.innerHTML = '<label>koloruj wg:</label><button data-m="typ" class="on">rodzaj</button><button data-m="ox">charakter tlenku</button><button data-m="en">elektroujemność</button>';
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(18,minmax(30px,1fr));gap:3px;min-width:640px;overflow-x:auto;padding:8px 0';
    const wrap = document.createElement('div');
    wrap.style.cssText = 'overflow-x:auto;width:100%';
    wrap.appendChild(grid);
    const gridHost = document.createElement('div');
    gridHost.style.cssText = 'margin-top:10px;padding:12px;background:var(--surface-soft);border-radius:10px;font-size:13px;line-height:1.55;color:var(--text-soft)';
    const cv = document.createElement('canvas');
    cv.dataset.h = 260;
    cv.style.background = 'radial-gradient(ellipse at 50% 35%, #1e3a5f, #0b1220)';
    cv.style.marginTop = '10px';
    const legend = document.createElement('div');
    legend.style.cssText = 'font-size:11px;color:var(--text-muted);margin-top:6px';
    host.append(modeRow, wrap, gridHost, cv, legend);
    CHE.UI.stageTools(host, gridHost, {zoom:true});

    const T = {m:['metal','#e0e7ff','#6366f1'],p:['półmetal','#fef3c7','#f59e0b'],n:['niemetal','#dcfce7','#16a34a'],h:['halogen','#fce7f3','#ec4899'],g:['gaz szlachetny','#e0f2fe','#0284c7']};
    const CH = {z:['zasadowy','#bfdbfe','#2563eb'],a:['amfoteryczny','#fde68a','#d97706'],k:['kwasowy','#fecaca','#dc2626'],o:['obojętny','#e2e8f0','#94a3b8'],x:['brak tlenku w bazie','#f8fafc','#cbd5e1']};
    const TK = {metal:'m',metalloid:'p',nonmetal:'n',halogen:'h',noble:'g'};
    const CK = {zasadowy:'z',amfoteryczny:'a',kwasowy:'k',obojętny:'o',mieszany:'a'};
    const ROM = ['','I','II','III','IV','V','VI','VII','VIII'];
    /* dane tylko z silnika: CHE.DATA.OXIDE_STATES + CHE.OXIDES (build/get) */
    function oxides(e) {
      const st = (CHE.DATA.OXIDE_STATES || {})[e.s] || [];
      return st.map(v => { const b = CHE.OXIDES && CHE.OXIDES.build(e.s, v); const o = b && CHE.OXIDES.get(b.formula); return {v, f: b ? b.formula : null, pretty: b ? b.pretty : '', o}; }).filter(x => x.o);
    }
    const META = {};
    CHE.DATA.ELEMENTS_54.forEach(e => { const ox = oxides(e), top = ox[ox.length - 1]; META[e.s] = {t: TK[e.t] || 'm', ox, ch: top ? (CK[top.o.char] || 'o') : 'x'}; });
    let mode = 'typ', sel = CHE.DATA.ELEMENTS_54[16];

    function color(e) {
      const m = META[e.s];
      if (mode === 'typ') return T[m.t];
      if (mode === 'ox') return CH[m.ch];
      const v = Math.max(0, Math.min(1, ((e.en || 0.8) - 0.8) / 3.2));
      const p = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
      const a = p('#f0fdfa'), b = p('#0f766e');
      return [e.en ? 'En ' + e.en : '—', '#' + a.map((x, i) => Math.round(x + (b[i] - x) * v).toString(16).padStart(2, '0')).join(''), '#0f766e'];
    }

    function build() {
      grid.innerHTML = '';
      CHE.DATA.ELEMENTS_54.forEach(e => {
        const b = document.createElement('button');
        b.type = 'button';
        b.style.cssText = `grid-column:${e.g};grid-row:${e.p};padding:3px 2px;border-radius:6px;cursor:pointer;font:inherit;display:flex;flex-direction:column;align-items:center;line-height:1.15;border:1.5px solid`;
        const c = color(e);
        b.style.background = c[1];
        b.style.borderColor = c[2];
        const dark = mode === 'en' && e.en && (e.en - 0.8) / 3.2 > 0.5; /* ciemne tło → jasny tekst */
        b.style.color = dark ? '#fff' : 'var(--text)';
        b.innerHTML = `<small style="font-size:.58rem;opacity:.7">${e.z}</small><b style="font-size:.95rem">${e.s}</b><small style="font-size:.55rem;opacity:.8">${mode === 'en' && e.en ? String(e.en).replace('.', ',') : ''}</small>`;
        if (e === sel) b.style.boxShadow = '0 0 0 3px var(--accent)';
        b.onclick = () => { sel = e; build(); info(); };
        grid.appendChild(b);
      });
      const items = mode === 'typ' ? Object.values(T) : mode === 'ox' ? Object.values(CH) : null;
      legend.innerHTML = items
        ? items.map(l => `<span style="display:inline-flex;align-items:center;gap:4px;margin-right:12px"><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:${l[1]};border:2px solid ${l[2]}"></span>${l[0]}</span>`).join('')
        : 'Jaśniejszy = mniejsza elektroujemność, ciemniejszy = większa. Rośnie w prawo i w górę okresu.';
    }
    function info() {
      const e = sel, m = META[e.s];
      const stA = (CHE.DATA.OXIDE_STATES || {})[e.s] || [], val = stA.length ? stA.map(v => ROM[v]).join(', ') : '—';
      const oxs = m.ox.length
        ? m.ox.map(x => `<b>${x.pretty}</b> — <span style="color:${CH[CK[x.o.char] || 'o'][2]}">${x.o.char}</span>`).join(' · ')
        : (e.t === 'noble' ? 'gaz szlachetny — nie tworzy tlenków (model szkolny)' : 'brak tlenku tego pierwiastka w bazie lekcji');
      gridHost.innerHTML = `<b style="color:var(--text);font-size:15px">${e.s} — ${e.n}</b> (Z = ${e.z})<br>
        grupa ${e.g}, okres ${e.p} · wartościowość w tlenkach: <b>${val}</b><br>tlenki: ${oxs}`;
    }
    modeRow.querySelectorAll('[data-m]').forEach(b => b.onclick = () => {
      mode = b.dataset.m;
      modeRow.querySelectorAll('[data-m]').forEach(x => x.classList.toggle('on', x === b));
      build();
    });
    build(); info();

    M.add(cv, (ctx, w, h, time) => {
      const am = (CHE.DATA.ATOM_META || {})[sel.s];
      const shells = am && am.shells ? am.shells : [sel.z];
      const cx = w / 2, cy = h / 2;
      const R0 = 22;
      const dr = Math.min(24, (Math.min(w, h) / 2 - 30 - R0) / shells.length);
      shells.forEach((n, i) => {
        const r = R0 + dr * (i + 1);
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7);
        ctx.strokeStyle = 'rgba(148,163,184,.45)'; ctx.lineWidth = 1.5; ctx.stroke();
        const last = i === shells.length - 1;
        for (let k = 0; k < n; k++) {
          const a = time * (0.9 / (i + 1)) + k * 6.2832 / n + i;
          const px = cx + r * Math.cos(a), py = cy + r * Math.sin(a);
          ctx.beginPath(); ctx.arc(px, py, last ? 5.5 : 4.5, 0, 7);
          ctx.fillStyle = last ? '#fbbf24' : '#60a5fa';
          ctx.fill();
          if (last) { ctx.strokeStyle = '#fff7ed'; ctx.lineWidth = 1; ctx.stroke(); }
        }
      });
      const g = ctx.createRadialGradient(cx - 6, cy - 6, 2, cx, cy, R0);
      g.addColorStop(0, '#fca5a5'); g.addColorStop(1, '#b91c1c');
      ctx.beginPath(); ctx.arc(cx, cy, R0, 0, 7);
      ctx.fillStyle = g; ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '800 13px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(sel.z + '+', cx, cy);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '800 16px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(sel.s, 14, 26);
      ctx.font = '600 11px Inter, system-ui, sans-serif';
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('● walencyjne', 14, h - 32);
      ctx.fillStyle = '#60a5fa';
      ctx.fillText('● wewnętrzne', 14, h - 16);
    });
  }
});

/* --- 51. Zlewka z predykcją (MOTION) --- */
defineView('beaker-prediction', {
  title:'Zlewka z predykcją — przewidź, potem zobacz', tag:'GFX',
  hint:'Wybierz reakcję, zaznacz co według Ciebie zobaczysz (gaz / osad / zmiana barwy / nic), potem uruchom zlewkę.',
  foot:'v0.37: dawna wersja z własną zlewką (pusty canvas) zastąpiona modułem z GFX.rx + CHE.REACTION — ten sam co „Reakcje kwasów — katalog”, z włączonym trybem przewidywania.',
  build(host){ reactionsMerged(host,true); }
});

defineView('beaker-prediction-enhanced',{
 title:'Zlewka z predykcją — wybierz obserwację i sprawdź wynik',tag:'MOTION',
 hint:'Najpierw wybierz przewidywane zjawiska. Dopiero potem uruchom doświadczenie.',
 foot:'Wersja ulepszona rozdziela predykcję, obserwację i wniosek — dzięki temu uczeń widzi, co przewidział i co rzeczywiście zaszło.',
 build(host){
  host.innerHTML='';
  const reactions=[
   {n:'Zn + HCl',out:['gaz'],eq:'Zn + 2 HCl → ZnCl₂ + H₂↑',why:'Powstają pęcherzyki wodoru; cynk jest przed wodorem w szeregu aktywności.'},
   {n:'Cu + HCl',out:['nic'],eq:'Cu + HCl → brak reakcji',why:'Miedź nie wypiera wodoru z nieutleniającego kwasu solnego.'},
   {n:'CuO + HCl',out:['barwa'],eq:'CuO + 2 HCl → CuCl₂ + H₂O',why:'Czarny CuO znika, a roztwór przyjmuje barwę związaną z Cu²⁺.'},
   {n:'CaCO₃ + HCl',out:['gaz'],eq:'CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑',why:'Wydziela się CO₂.'},
   {n:'AgNO₃ + HCl',out:['osad'],eq:'AgNO₃ + HCl → AgCl↓ + HNO₃',why:'Powstaje biały osad AgCl.'}
  ];
  const rbar=document.createElement('div');rbar.className='r';reactions.forEach((r,i)=>{const b=document.createElement('button');b.textContent=r.n;b.onclick=()=>{cur=i;reset();rbar.querySelectorAll('button').forEach((x,j)=>x.classList.toggle('on',j===i))};if(!i)b.classList.add('on');rbar.appendChild(b)});
  const pred=document.createElement('div');pred.className='r';pred.innerHTML='<b>Predykcja:</b> <button data-k="gaz">gaz</button><button data-k="osad">osad</button><button data-k="barwa">zmiana barwy</button><button data-k="nic">brak reakcji</button>';
  const cv=document.createElement('canvas');cv.dataset.h=330;cv.style.background='var(--surface-soft)';cv.style.borderRadius='var(--r-sm)';
  const controls=document.createElement('div');controls.className='r';controls.innerHTML='<button class="go">▶ wykonaj doświadczenie</button><button class="reset">↺ od nowa</button>';
  const note=document.createElement('div');note.className='note';note.textContent='Wybierz reakcję i zaznacz przewidywane zjawisko.';
  host.append(rbar,pred,cv,controls,note);
  let cur=0,chosen=new Set(),t0=null,done=false,tNow=0;
  function reset(){chosen.clear();t0=null;done=false;pred.querySelectorAll('[data-k]').forEach(b=>b.classList.remove('on'));controls.querySelector('.go').disabled=false;note.textContent='Najpierw predykcja, potem obserwacja.'}
  pred.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{if(t0!==null&&!done)return;const k=b.dataset.k;if(k==='nic')chosen.clear();else chosen.delete('nic');chosen.has(k)?chosen.delete(k):chosen.add(k);if(k==='nic')chosen.add('nic');b.parentElement.querySelectorAll('[data-k]').forEach(x=>x.classList.toggle('on',chosen.has(x.dataset.k)))});
  controls.querySelector('.reset').onclick=reset;controls.querySelector('.go').onclick=()=>{if(!chosen.size){note.textContent='Najpierw wybierz predykcję.';return}t0=tNow;done=false;controls.querySelector('.go').disabled=true};
  M.add(cv,(ctx,w,h,time)=>{tNow=time;const p=t0===null?0:Math.min(1,(time-t0)/6);const r=reactions[cur];if(t0!==null&&!done&&p>=1){done=true;controls.querySelector('.go').disabled=false;const ok=r.out.length===chosen.size&&r.out.every(x=>chosen.has(x));note.innerHTML=(ok?'✓ <b>Predykcja zgodna.</b>':'<b>Porównaj predykcję z obserwacją.</b>')+'<br><span style="font-family:var(--mono)">'+r.eq+'</span><br>'+r.why+'<br><b>Obserwacja:</b> '+r.out.join(', ')}
    const bx=w*.18,bw=w*.64,by=55,bh=h-88,top=by+bh*.22,bot=by+bh;CHE.LAB.GFX.canvasDraw(ctx,w,h,time,CHE.LAB.GFX.fromReaction(r,p),{rect:{x:bx,y:by,w:bw,h:bh}});
    ctx.fillStyle='var(--text)';ctx.font='800 15px Inter,system-ui';ctx.textAlign='center';ctx.fillText(r.n,w/2,28);ctx.font='600 11px Inter,system-ui';ctx.fillText(t0===null?'przed doświadczeniem':p<1?'reakcja trwa…':'obserwacja zakończona',w/2,45)
  });
 }
});


/* --- reakcje-kwasu-v03: JEDEN widok = metal-reaction + beaker-prediction (predykcja → zlewka → równanie z silnika) --- */
defineView('equilibrium', {
  title:'Równowaga HA ⇌ H⁺ + A⁻ — reguła przekory', tag:'MOTION',
  hint:'Dodaj H⁺, A⁻, HA, rozcieńcz lub usuń H⁺. Obserwuj Q vs K.',
  foot:'Równowaga dynamiczna: rozpad i łączenie trwają cały czas, z równą szybkością. Model dydaktyczny.',
  build(host) {
    host.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'r'; row.style.marginTop = '0';
    [['+ H⁺ (HCl)','H'],['+ A⁻ (sól)','A'],['+ HA','HA'],['rozcieńcz','dil'],['− usuń H⁺','rm'],['reset','reset']]
      .forEach(([t, k]) => {
        const b = document.createElement('button');
        b.type = 'button'; b.textContent = t; b.dataset.a = k;
        row.appendChild(b);
      });
    const cv = document.createElement('canvas');
    cv.dataset.h = 420;
    cv.style.background = 'var(--surface-soft)';
    cv.style.borderRadius = 'var(--r-sm)';
    const note = document.createElement('div');
    note.className = 'note';
    host.append(row, cv, note);

    const KF = 0.5, KR = 0.0389, SPEED = 2.2, VMAX = 3;
    let P, V, hist, marks, last = 0, acc = 0, msg = '', tm = 0;
    const pt = () => ({ x: Math.random(), y: Math.random() });
    function init() {
      P = { HA: [], H: [], A: [] };
      for (let i = 0; i < 100; i++) P.HA.push(pt());
      V = 1; hist = []; marks = []; acc = 0;
      msg = 'Układ startuje od samych cząsteczek HA i dochodzi do równowagi dynamicznej.';
      tm = 0;
    }
    init();
    const pick = a => a.splice(Math.floor(Math.random() * a.length), 1)[0];
    const K = KF / KR;
    const Q = () => P.HA.length ? P.H.length * P.A.length / V / P.HA.length : 99;
    const mark = l => marks.push({ t: tm, l });
    const say = (a, q) => {
      const s = q > K * 1.15 ? 'Q > K → przesunięcie w lewo (więcej HA)' : q < K / 1.15 ? 'Q < K → przesunięcie w prawo (więcej H⁺ i A⁻)' : 'Q ≈ K → równowaga';
      return a + ' ' + s + '.';
    };
    row.querySelectorAll('button').forEach(b => b.onclick = () => {
      const a = b.dataset.a;
      if (a === 'reset') { init(); return; }
      if (a === 'H') { for (let i = 0; i < 40; i++) P.H.push(pt()); mark('+H⁺'); msg = say('Dodano 40 H⁺ (HCl).', Q()); }
      if (a === 'A') { for (let i = 0; i < 40; i++) P.A.push(pt()); mark('+A⁻'); msg = say('Dodano 40 A⁻ (np. octan sodu).', Q()); }
      if (a === 'HA') { for (let i = 0; i < 40; i++) P.HA.push(pt()); mark('+HA'); msg = say('Dodano 40 HA.', Q()); }
      if (a === 'dil') {
        if (V >= VMAX) { msg = 'To maksymalne rozcieńczenie w modelu.'; return; }
        V = Math.min(VMAX, V * 1.5); mark('rozc.');
        msg = say('Rozcieńczono (większa objętość).', Q()) + ' Stopień dysocjacji α rośnie, choć stężenia jonów maleją.';
      }
      if (a === 'rm') {
        const n = Math.min(30, P.H.length);
        for (let i = 0; i < n; i++) pick(P.H);
        mark('−H⁺');
        msg = say('Usunięto H⁺ (zobojętnienie zasadą).', Q());
      }
    });
    function step(dt) {
      let d = KF * P.HA.length * dt * SPEED, r = KR * P.H.length * P.A.length / V * dt * SPEED;
      for (d = Math.floor(d) + (Math.random() < d % 1 ? 1 : 0); d > 0 && P.HA.length; d--) {
        const p = pick(P.HA);
        P.H.push({ x: p.x, y: p.y });
        P.A.push({ x: Math.max(0, Math.min(1, p.x + 0.04)), y: p.y });
      }
      for (r = Math.floor(r) + (Math.random() < r % 1 ? 1 : 0); r > 0 && P.H.length && P.A.length; r--) {
        const a = pick(P.H), b = pick(P.A);
        P.HA.push(Math.random() < 0.5 ? { x: a.x, y: a.y } : { x: b.x, y: b.y });
      }
    }
    M.add(cv, (ctx, w, h, time, dt) => {
      tm += dt; acc += dt;
      if (acc > 0.05) { last = 0; }
      step(dt * 0.05);
      if (acc > 0.25) {
        acc = 0;
        const n = P.H.length + P.HA.length;
        hist.push({ t:tm, a:n ? P.H.length / n : 0 });
        if (hist.length > 160) hist.shift();
      }
      const bh = 220, by = 56, bw = w * 0.3 + (w * 0.64 - w * 0.3) * (V - 1) / (VMAX - 1), bx = (w - bw) / 2;
      ctx.fillStyle = 'var(--surface-soft)';
      ctx.fillRect(bx, by, bw, bh);
      ctx.strokeStyle = 'var(--text-muted)';
      ctx.lineWidth = 3;
      ctx.strokeRect(bx, by, bw, bh);
      const wob = p => {
        p.x = Math.max(0, Math.min(1, p.x + (Math.random() - 0.5) * 0.012));
        p.y = Math.max(0, Math.min(1, p.y + (Math.random() - 0.5) * 0.012));
        return [bx + 14 + p.x * (bw - 28), by + 14 + p.y * (bh - 28)];
      };
      const dotc = (px, py, r, f, s, tx) => {
        ctx.beginPath(); ctx.arc(px, py, r, 0, 7);
        ctx.fillStyle = f; ctx.fill();
        ctx.strokeStyle = s; ctx.lineWidth = 1.2; ctx.stroke();
        if (tx) {
          ctx.fillStyle = '#0f172a';
          ctx.font = `700 ${Math.round(r * 1.05)}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(tx, px, py);
        }
      };
      P.HA.forEach(p => { const [a, b] = wob(p); dotc(a, b, 8, '#bbf7d0', '#16a34a', ''); dotc(a + 8, b - 5, 4.5, '#fff', '#64748b', ''); });
      P.A.forEach(p => { const [a, b] = wob(p); dotc(a, b, 8, '#bbf7d0', '#16a34a', 'A⁻'); });
      P.H.forEach(p => { const [a, b] = wob(p); dotc(a, b, 5.5, '#fecaca', '#dc2626', 'H⁺'); });
      ctx.fillStyle = 'var(--text)';
      ctx.font = '800 14px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(`HA: ${P.HA.length}   H⁺: ${P.H.length}   A⁻: ${P.A.length}   V: ×${V.toFixed(2).replace('.', ',')}`, 14, 24);
      ctx.font = '600 12px Inter, system-ui, sans-serif';
      ctx.fillStyle = 'var(--text-soft)';
      ctx.fillText(`Q = ${Q().toFixed(1)}  ·  K = ${K.toFixed(1)}`, 14, 44);
      const cx0 = 50, cw = w - 70, cy0 = by + bh + 36, ch = h - cy0 - 28;
      ctx.strokeStyle = 'var(--border)';
      ctx.lineWidth = 1;
      ctx.strokeRect(cx0, cy0, cw, ch);
      ctx.fillStyle = 'var(--text-muted)';
      ctx.font = '600 11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('α 100%', cx0 - 4, cy0 + 8);
      ctx.fillText('0', cx0 - 4, cy0 + ch);
      ctx.textAlign = 'left';
      ctx.fillText('stopień dysocjacji α', cx0, cy0 - 6);
      if (hist.length > 1) {
        const t1 = hist[hist.length - 1].t, t0 = Math.max(0, t1 - 40);
        const X = tt => cx0 + (tt - t0) / (t1 - t0 || 1) * cw;
        marks.forEach(m => {
          if (m.t < t0) return;
          ctx.strokeStyle = 'var(--c-warn)';
          ctx.setLineDash([4, 3]);
          ctx.beginPath(); ctx.moveTo(X(m.t), cy0); ctx.lineTo(X(m.t), cy0 + ch); ctx.stroke();
          ctx.setLineDash([]);
        });
        ctx.strokeStyle = 'var(--accent)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        hist.forEach((q, i) => {
          const px = X(q.t), py = cy0 + ch - q.a * ch;
          i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
        });
        ctx.stroke();
      }
      note.textContent = msg + ' Równowaga dynamiczna: rozpad i łączenie trwają cały czas. Model dydaktyczny.';
    });
  }
});

/* --- 53. Kalkulator kwasu (VIZ) --- */
/* [MARTWY KOD — nadpisany przez acid-calculator niżej (migracja 1). NIE KASOWAĆ: ma wykres pH(c) i 3× więcej logiki ruchu/legendy niż aktywna wersja.] */
/* --- 54. Gra: kwas / zasada / sól / tlenek --- */
defineView('acid-game', {
  title:'Mini-gra: kwas, zasada, sól czy tlenek?', tag:'VIZ',
  hint:'10 pytań. Kliknij poprawną kategorię lub kwaśne H w cząsteczce.',
  foot:'Kwas = H + reszta kwasowa · zasada = metal + OH · sól = metal + reszta · tlenek = pierwiastek + O.',
  build(host) {
    host.innerHTML = '';
    const head = document.createElement('div');
    head.className = 'r'; head.style.marginTop = '0';
    head.innerHTML = '<b class="score" style="font-size:.9rem"></b><span class="prog" style="margin-left:auto;font-size:.85rem;color:var(--text-muted)"></span>';
    const q = document.createElement('div');
    q.className = 'note';
    q.style.cssText = 'font-size:1.05rem;font-weight:700;text-align:center';
    const svgHost = document.createElement('div');
    svgHost.style.marginTop = '10px';
    const btnRow = document.createElement('div');
    btnRow.className = 'r';
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = 'Naciśnij start.';
    const startRow = document.createElement('div');
    startRow.className = 'r';
    startRow.innerHTML = '<button class="start on">▶ start (10 pytań)</button>';
    host.append(head, q, svgHost, btnRow, note, startRow);

    const MOLS = [
      {f:'HCl',a:[['H',170,140],['Cl',330,140]],b:[[0,1,1]],ac:[0]},
      {f:'HNO₃',a:[['H',60,140],['O',150,140],['N',260,140],['O',340,65],['O',340,215]],b:[[0,1,1],[1,2,1],[2,3,2],[2,4,1]],ac:[0]},
      {f:'H₂SO₄',a:[['S',260,140],['O',260,55],['O',260,225],['O',160,140],['H',80,140],['O',360,140],['H',440,140]],b:[[0,1,2],[0,2,2],[0,3,1],[3,4,1],[0,5,1],[5,6,1]],ac:[4,6]},
      {f:'H₃PO₄',a:[['P',260,130],['O',260,45],['O',160,130],['H',80,130],['O',360,130],['H',440,130],['O',260,215],['H',335,245]],b:[[0,1,2],[0,2,1],[2,3,1],[0,4,1],[4,5,1],[0,6,1],[6,7,1]],ac:[3,5,7]},
      {f:'CH₃COOH',a:[['C',150,145],['H',95,80],['H',65,150],['H',95,215],['C',270,145],['O',335,215],['O',335,75],['H',430,65]],b:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[4,5,2],[4,6,1],[6,7,1]],ac:[7]},
    ];
    const CLS = [
      ['HCl','kwas'],['H₂SO₄','kwas'],['HNO₃','kwas'],['H₃PO₄','kwas'],['H₂CO₃','kwas'],
      ['NaOH','zasada'],['Ca(OH)₂','zasada'],['KOH','zasada'],
      ['NaCl','sól'],['CaCO₃','sól'],['K₂SO₄','sól'],
      ['CO₂','tlenek'],['CaO','tlenek'],['SO₃','tlenek'],
    ];
    const TIP = {kwas:'kwas = H + reszta kwasowa', zasada:'zasada = metal + OH', sól:'sól = metal + reszta', tlenek:'tlenek = pierwiastek + O'};
    const N = 10;
    let G = null;

    function ask() {
      G.r++;
      head.querySelector('.score').textContent = `Punkty: ${G.s} · seria: ${G.st}`;
      head.querySelector('.prog').textContent = G.over ? '' : `pytanie ${G.r}/${N}`;
      btnRow.innerHTML = '';
      svgHost.innerHTML = '';
      if (G.r > N) {
        G.over = true;
        const pct = Math.round(G.ok / N * 100);
        q.textContent = `Koniec! ${G.s} pkt · poprawnie ${G.ok}/${N} (${pct}%)`;
        note.textContent = pct >= 90 ? 'Mistrz chemii ' : pct >= 70 ? 'Bardzo dobrze ' : pct >= 50 ? 'Nieźle, ćwicz dalej' : 'Powtórz materiał ';
        startRow.querySelector('.start').disabled = false;
        return;
      }
      if (Math.random() < 0.4) {
        const m = MOLS[Math.floor(Math.random() * MOLS.length)];
        G.m = m; G.f = new Set(); G.t = 'mol';
        q.textContent = `Kliknij wszystkie kwaśne H w ${m.f} (${m.ac.length}).`;
        const svg = V.makeSvg(svgHost, [520, 280]);
        m.b.forEach(([i, j, o]) => {
          const p = m.a[i], qq = m.a[j];
          const dx = qq[1]-p[1], dy = qq[2]-p[2], L = Math.hypot(dx, dy);
          const nx = -dy/L*4, ny = dx/L*4;
          (o === 2 ? [-1, 1] : [0]).forEach(s => svg.appendChild(V.el('line', { x1:p[1]+nx*s, y1:p[2]+ny*s, x2:qq[1]+nx*s, y2:qq[2]+ny*s, stroke:'#334155', 'stroke-width':5, 'stroke-linecap':'round' })));
        });
        m.a.forEach((a, i) => {
          const e = CHE.DATA.ELEM[a[0]];
          const g = V.el('g', { style:'cursor:pointer' });
          g.appendChild(V.el('circle', { cx:a[1], cy:a[2], r:e.r, fill:`url(#mg-${a[0]})`, stroke:e.s, 'stroke-width':2.5 }));
          g.appendChild(V.el('text', { x:a[1], y:a[2], 'text-anchor':'middle', 'dominant-baseline':'central', 'font-size':a[0]==='H'?14:17, 'font-weight':800, fill:e.t, 'pointer-events':'none' }, a[0]));
          g.onclick = () => clickAtom(i, g);
          svg.appendChild(g);
        });
        note.textContent = 'Wskazówka: kwaśny H jest połączony z tlenem (grupa –OH kwasu tlenowego).';
      } else {
        const c = CLS[Math.floor(Math.random() * CLS.length)];
        G.c = c; G.t = 'cls';
        q.innerHTML = `Czym jest <span style="font-family:var(--mono);font-size:1.3rem;color:var(--accent)">${c[0]}</span>?`;
        ['kwas','zasada','sól','tlenek'].forEach(k => {
          const b = document.createElement('button');
          b.type = 'button'; b.textContent = k;
          b.onclick = () => answer(k === c[1], k);
          btnRow.appendChild(b);
        });
        note.textContent = 'Wybierz właściwą kategorię.';
      }
    }
    function score(ok) {
      if (ok) { G.st++; G.ok++; G.s += 10 + Math.min(G.st, 5) * 2; }
      else { G.st = 0; G.s = Math.max(0, G.s - 3); }
      head.querySelector('.score').textContent = `Punkty: ${G.s} · seria: ${G.st}`;
    }
    function answer(ok, k) {
      if (G.lock) return;
      G.lock = true;
      score(ok);
      btnRow.querySelectorAll('button').forEach(b => {
        b.disabled = true;
        if (b.textContent === G.c[1]) b.style.background = 'var(--c-e8-bg)';
        else if (b.textContent === k && !ok) b.style.background = 'var(--c-err-bg)';
      });
      note.textContent = (ok ? 'Dobrze! ' : 'To ' + G.c[1] + '. ') + TIP[G.c[1]] + '.';
      setTimeout(() => { G.lock = false; if (G && !G.over) ask(); }, 1600);
    }
    function clickAtom(i, g) {
      if (G.lock) return;
      const m = G.m, a = m.a[i];
      if (a[0] !== 'H') { note.textContent = 'To nie wodór — szukamy kwaśnego H.'; return; }
      if (G.f.has(i)) return;
      if (m.ac.includes(i)) {
        G.f.add(i);
        g.firstChild.setAttribute('stroke', 'var(--c-e8)');
        g.firstChild.setAttribute('stroke-width', 5);
        note.textContent = `Kwaśny H (${G.f.size}/${m.ac.length}).`;
        if (G.f.size === m.ac.length) {
          G.lock = true;
          score(true);
          note.textContent = 'Wszystkie kwaśne H znalezione!';
          setTimeout(() => { G.lock = false; if (!G.over) ask(); }, 1600);
        }
      } else {
        score(false);
        note.textContent = 'Ten H nie jest kwaśny (połączony z C).';
        g.firstChild.setAttribute('stroke', 'var(--c-err)');
      }
    }
    startRow.querySelector('.start').onclick = e => {
      G = { s:0, st:0, ok:0, r:0, over:false, lock:false };
      e.target.disabled = true;
      ask();
    };
    // defs dla gradientów
    const defsSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    defsSvg.setAttribute('width', '0');
    defsSvg.setAttribute('height', '0');
    defsSvg.style.position = 'absolute';
    const NS = 'http://www.w3.org/2000/svg';
    const df = document.createElementNS(NS, 'defs');
    for (const k in CHE.DATA.ELEM) {
      const E = CHE.DATA.ELEM[k];
      const g = document.createElementNS(NS, 'radialGradient');
      g.setAttribute('id', 'mg-' + k);
      g.setAttribute('cx', '.35'); g.setAttribute('cy', '.3'); g.setAttribute('r', '.8');
      const s1 = document.createElementNS(NS, 'stop'); s1.setAttribute('offset', '0'); s1.setAttribute('stop-color', E.c1);
      const s2 = document.createElementNS(NS, 'stop'); s2.setAttribute('offset', '1'); s2.setAttribute('stop-color', E.c2);
      g.appendChild(s1); g.appendChild(s2);
      df.appendChild(g);
    }
    defsSvg.appendChild(df);
    host.appendChild(defsSvg);
  }
});

/* --- 55. Fiszki + ściąga (karty) --- */
defineView('flashcards-deck', {
  title:'Fiszki + ściąga — powtórka', tag:'VIZ',
  hint:'Kliknij fiszkę, aby obrócić. Ściąga u góry.',
  foot:'Ucz się w odstępach: dziś → jutro → za 3 dni → za tydzień.',
  build(host) {
    host.innerHTML = '';
    const cheat = document.createElement('div');
    cheat.style.cssText = 'background:var(--accent-soft);border:1px solid var(--accent-line);border-radius:12px;padding:14px 18px;margin-bottom:14px;font-size:13.5px;line-height:1.65';
    cheat.innerHTML = `
      <b style="color:var(--accent);display:block;margin-bottom:6px">Ściąga — wszystko w jednym miejscu</b>
      <b>Definicja:</b> kwas = donor H⁺ (Brønsted). <b>Wzór:</b> HₙR. <b>Podział:</b> beztlenowe / tlenowe · mocne / słabe.<br>
      <b>Dysocjacja:</b> HCl → H⁺ + Cl⁻ (mocny, →). CH₃COOH ⇌ H⁺ + CH₃COO⁻ (słaby, ⇌).<br>
      <b>pH = −log[H₃O⁺].</b> pH &lt; 7 kwasowy · 7 obojętny · &gt; 7 zasadowy. Skala logarytmiczna.<br>
      <b>Reakcje:</b> + metal → sól + H₂↑ · + tlenek metalu → sól + H₂O · + wodorotlenek → sól + H₂O · + węglan → sól + H₂O + CO₂↑.<br>
      <b>Szereg:</b> K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Pb &gt; H &gt; Cu &gt; Ag &gt; Au.<br>
      <b>BHP:</b> zawsze kwas do wody, nigdy odwrotnie.
    `;
    host.appendChild(cheat);

    const cards = [
      ['Definicja kwasu (Arrhenius)', 'W wodzie dysocjuje na H⁺ (dokładniej H₃O⁺) i anion reszty kwasowej.'],
      ['Definicja kwasu (Brønsted)', 'Donor protonu H⁺. Zasada = akceptor H⁺.'],
      ['Wzór ogólny kwasu', 'HₙR, gdzie R = reszta kwasowa, n = wartościowość reszty.'],
      ['Podział kwasów', 'Beztlenowe (HCl, HBr, HI, HF, H₂S) vs tlenowe (HNO₃, H₂SO₄, H₂CO₃, H₃PO₄).'],
      ['Kwasy mocne', 'HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ — α ≈ 1.'],
      ['Kwasy słabe', 'HF, H₂S, H₂CO₃, H₂SO₃, HNO₂, H₃PO₄, CH₃COOH — α ≪ 1.'],
      ['Dysocjacja HCl', 'HCl → H⁺ + Cl⁻ (w wodzie: HCl + H₂O → H₃O⁺ + Cl⁻).'],
      ['Dysocjacja H₂SO₄', 'I: → H⁺ + HSO₄⁻ (mocny); II: ⇌ H⁺ + SO₄²⁻ (słaby).'],
      ['Dysocjacja CH₃COOH', 'CH₃COOH ⇌ H⁺ + CH₃COO⁻ (częściowa — słaby kwas).'],
      ['pH — definicja', 'pH = −log[H₃O⁺]. Skala logarytmiczna: różnica 1 = 10× stężenie H₃O⁺.'],
      ['Fenoloftaleina', 'W kwasie bezbarwna; w zasadzie malinowa. Zakres zmiany: pH 8,2–10,0.'],
      ['Oranż metylowy', 'W kwasie czerwony; w zasadzie żółty. Zakres zmiany: pH 3,1–4,4.'],
      ['Szereg aktywności', 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au. Metal przed H reaguje z kwasem → sól + H₂.'],
      ['HNO₃ jako utleniacz', 'Reaguje z Cu, ale NIE wydziela H₂. Powstaje NO₂ lub NO.'],
      ['BHP rozcieńczanie', 'Zawsze kwas do wody, nigdy odwrotnie. Rozcieńczanie jest egzotermiczne.'],
      ['Zobojętnianie — jonowo', 'H⁺ + OH⁻ → H₂O. Jony widzowe: Na⁺, Cl⁻.'],
      ['Kwas mocny ≠ stężony', 'Moc to α (stopień dysocjacji); stężenie to mol/dm³. Dwie różne osie.'],
      ['HCl(g) vs HCl(aq)', 'HCl(g) to gaz chlorowodor; HCl(aq) to roztwór (kwas solny).'],
      ['Ka i pKa', 'Ka = stała równowagi jonizacji. pKa = −log Ka. Mniejsze pKa = mocniejszy kwas.'],
      ['Kwaśne deszcze', 'Opady o pH < 5,6. Źródła: SO₂ i NO₂. Kwasy: H₂SO₄, HNO₃.'],
    ];
    const grid = document.createElement('div');
    grid.className = 'flashcard-grid';
    cards.forEach(([f,b],i) => {
      const d=document.createElement('details');
      d.className='flashcard-details';
      if(i===0) d.open=true;
      const sum=document.createElement('summary');
      sum.textContent=f + (i===0 ? ' — przykład otwarty' : '');
      const ans=document.createElement('div');
      ans.className='flashcard-answer';
      ans.innerHTML=b;
      d.append(sum,ans);
      grid.appendChild(d);
    });
    host.appendChild(grid);
  }
});

