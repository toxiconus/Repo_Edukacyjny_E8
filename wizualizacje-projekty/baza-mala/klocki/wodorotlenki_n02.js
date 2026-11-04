/* KLOCKI: rodzina n02-* (N03 wodorotlenki) — n02-wzory-v01, n02-przeglad-v01, n02-otrzymywanie-v01, n02-stracanie-v01, n02-zobojetnianie-v01, n02-dysocjacja-v01, n02-reaktor-v01.
   Przeniesione z dużego silnika (2026-11-04) razem z modułami CHE.HYDROXIDES i CHE.IONIC. Wymaga model_widok.js i ph_panel.js przed sobą. Animacje zlewek (GFX.rx) są pomijane — widok pokazuje wtedy równanie i opis. */


(function(){var C=window.CHE=window.CHE||{};C.LAB=C.LAB||{};var G=C.LAB.GFX=C.LAB.GFX||{};
 if(!document.getElementById('n02-css')){var st=document.createElement('style');st.id='n02-css';st.textContent='.che-port svg[width]{width:auto;max-width:100%}';document.head.appendChild(st)}
 if(G.ions)return;
 /* minimalny model jonów w zlewce (canvas): dissolve = kryształ rozpada się na jony (R: wszystkie, T: część, N: prawie wcale); neutral = OH⁻ znikają po dodaniu H⁺ (powstaje H₂O). */
 G.ions={mount:function(box,o){var cv=document.createElement('canvas');cv.style.cssText='width:100%;height:'+(o.height||260)+'px;display:block;border-radius:12px;background:var(--surface-soft,#f6f8fa)';box.appendChild(cv);
  var bg='rgba(186,230,253,.25)',P=[],t0=performance.now(),alive=true,W=1,H=1,n=o.mode==='dissolve'?14:o.nOH||12,frac=o.mode==='dissolve'?({R:1,T:.35,N:.05}[o.sol]||.05):1,dur=(o.dur||7)*1000;
  function sz(){var d=Math.min(2,window.devicePixelRatio||1);W=cv.clientWidth||300;H=cv.clientHeight||260;cv.width=W*d;cv.height=H*d;cv.getContext('2d').setTransform(d,0,0,d,0,0)}
  function init(){P=[];for(var i=0;i<n;i++){var x=W*.2+Math.random()*W*.6;P.push({k:'c',x:x,y:H*.78,hx:x,hy:H*.78+(i%2)*0,fr:Math.random()<frac,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2});
   for(var j=0;j<(o.mode==='dissolve'?(o.nOH||1):1);j++)P.push({k:o.mode==='dissolve'?'a':'o',x:x+8,y:H*.78+6+j*9,hx:x+8,hy:H*.78+6+j*9,fr:Math.random()<frac,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2,gone:0})}
   if(o.mode==='neutral'){P=[];for(var q=0;q<n;q++){P.push({k:'c',x:Math.random()*W,y:H*.3+Math.random()*H*.6,vx:(Math.random()-.5)*1.4,vy:(Math.random()-.5)*1.4,fr:1});P.push({k:'o',x:Math.random()*W,y:H*.3+Math.random()*H*.6,vx:(Math.random()-.5)*1.4,vy:(Math.random()-.5)*1.4,fr:1})}}}
  var COL={c:o.catCol||'#64748b',a:'#2563eb',o:'#2563eb',h:'#ef4444',an:'#16a34a'};
  function frame(){if(!alive||!cv.isConnected){alive=false;return}var x=cv.getContext('2d'),k=Math.min(1,(performance.now()-t0)/dur);x.clearRect(0,0,W,H);x.fillStyle=bg;x.fillRect(0,H*.25,W,H*.75);x.strokeStyle='#64748b';x.lineWidth=3;x.beginPath();x.moveTo(2,H*.15);x.lineTo(2,H-2);x.lineTo(W-2,H-2);x.lineTo(W-2,H*.15);x.stroke();
   if(o.mode==='dissolve'&&o.solidCol){x.fillStyle=o.solidCol;x.globalAlpha=.4;x.fillRect(W*.15,H*.74,W*.7,H*.24);x.globalAlpha=1}
   P.forEach(function(p){if(p.dead)return;var free=o.mode==='neutral'||(p.fr&&k>(P.indexOf(p)%10)/12);if(free){p.x+=p.vx;p.y+=p.vy;if(p.x<10||p.x>W-10)p.vx*=-1;if(p.y<H*.3||p.y>H-12)p.vy*=-1;if(Math.random()<.05){p.vx+=(Math.random()-.5)*.6;p.vy+=(Math.random()-.5)*.6}}else{p.x=p.hx;p.y=p.hy}
    x.fillStyle=p.k==='c'?COL.c:p.k==='o'||p.k==='a'?COL.a:COL.an;x.beginPath();x.arc(p.x,p.y,p.k==='c'?8:6,0,7);x.fill();x.fillStyle='#fff';x.font='700 8px system-ui';x.textAlign='center';x.fillText(p.k==='c'?(o.cation||'M⁺').slice(0,3):'OH⁻',p.x,p.y+3)});
   x.fillStyle='#64748b';x.font='600 11px system-ui';x.textAlign='left';x.fillText(o.mode==='neutral'?'OH⁻ + H⁺ → H₂O (jony OH⁻ znikają)':(o.sol==='R'?'rozpuszcza się — jony w roztworze':o.sol==='T'?'rozpuszcza się słabo':'praktycznie nierozpuszczalny'),8,14);requestAnimationFrame(frame)}
  sz();init();requestAnimationFrame(frame);
  return{add:function(m){var os=P.filter(function(p){return p.k==='o'&&!p.dead});for(var i=0;i<Math.min(m,os.length);i++)os[i].dead=1},bg:function(c){bg=c},reset:function(){t0=performance.now();init()}}}};
})();
(function(){var C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{},X={"REACTIONS":{"hclNaOH":{"reactants":[{"formula":"HCl","coef":1},{"formula":"NaOH","coef":1}],"products":[{"formula":"NaCl","coef":1},{"formula":"H2O","coef":1}]},"h2so4Naoh":{"reactants":[{"formula":"H2SO4","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Na2SO4","coef":1},{"formula":"H2O","coef":2}]},"agno3Hcl":{"reactants":[{"formula":"AgNO3","coef":1},{"formula":"HCl","coef":1}],"products":[{"formula":"AgCl","coef":1},{"formula":"HNO3","coef":1}]},"h2so4Koh":{"reactants":[{"formula":"H2SO4","coef":1},{"formula":"KOH","coef":2}],"products":[{"formula":"K2SO4","coef":1},{"formula":"H2O","coef":2}]},"caoh2Hno3":{"reactants":[{"formula":"Ca(OH)2","coef":1},{"formula":"HNO3","coef":2}],"products":[{"formula":"Ca(NO3)2","coef":1},{"formula":"H2O","coef":2}]},"aloh3Hcl":{"reactants":[{"formula":"Al(OH)3","coef":1},{"formula":"HCl","coef":3}],"products":[{"formula":"AlCl3","coef":1},{"formula":"H2O","coef":3}]},"h3po4Caoh2":{"reactants":[{"formula":"H3PO4","coef":2},{"formula":"Ca(OH)2","coef":3}],"products":[{"formula":"Ca3(PO4)2","coef":1},{"formula":"H2O","coef":6}]},"mgoh2Hcl":{"reactants":[{"formula":"Mg(OH)2","coef":1},{"formula":"HCl","coef":2}],"products":[{"formula":"MgCl2","coef":1},{"formula":"H2O","coef":2}]},"naH2o":{"reactants":[{"formula":"Na","coef":2},{"formula":"H2O","coef":2}],"products":[{"formula":"NaOH","coef":2},{"formula":"H2","coef":1}]},"cuso4Naoh":{"reactants":[{"formula":"CuSO4","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Cu(OH)2","coef":1},{"formula":"Na2SO4","coef":1}]},"fecl3Naoh":{"reactants":[{"formula":"FeCl3","coef":1},{"formula":"NaOH","coef":3}],"products":[{"formula":"Fe(OH)3","coef":1},{"formula":"NaCl","coef":3}]},"ch3coohNaoh":{"reactants":[{"formula":"CH3COOH","coef":1},{"formula":"NaOH","coef":1}],"products":[{"formula":"CH3COONa","coef":1},{"formula":"H2O","coef":1}]},"na2oH2o":{"reactants":[{"formula":"Na2O","coef":1},{"formula":"H2O","coef":1}],"products":[{"formula":"NaOH","coef":2}]},"k2oH2o":{"reactants":[{"formula":"K2O","coef":1},{"formula":"H2O","coef":1}],"products":[{"formula":"KOH","coef":2}]},"li2oH2o":{"reactants":[{"formula":"Li2O","coef":1},{"formula":"H2O","coef":1}],"products":[{"formula":"LiOH","coef":2}]},"mgoH2o":{"reactants":[{"formula":"MgO","coef":1},{"formula":"H2O","coef":1}],"products":[{"formula":"Mg(OH)2","coef":1}]},"liH2o":{"reactants":[{"formula":"Li","coef":2},{"formula":"H2O","coef":2}],"products":[{"formula":"LiOH","coef":2},{"formula":"H2","coef":1}]},"kH2o":{"reactants":[{"formula":"K","coef":2},{"formula":"H2O","coef":2}],"products":[{"formula":"KOH","coef":2},{"formula":"H2","coef":1}]},"caH2o":{"reactants":[{"formula":"Ca","coef":1},{"formula":"H2O","coef":2}],"products":[{"formula":"Ca(OH)2","coef":1},{"formula":"H2","coef":1}]},"baH2o":{"reactants":[{"formula":"Ba","coef":1},{"formula":"H2O","coef":2}],"products":[{"formula":"Ba(OH)2","coef":1},{"formula":"H2","coef":1}]},"mgH2oHot":{"reactants":[{"formula":"Mg","coef":1},{"formula":"H2O","coef":2}],"products":[{"formula":"Mg(OH)2","coef":1},{"formula":"H2","coef":1}]},"baoH2o":{"reactants":[{"formula":"BaO","coef":1},{"formula":"H2O","coef":1}],"products":[{"formula":"Ba(OH)2","coef":1}]},"mgcl2Naoh":{"reactants":[{"formula":"MgCl2","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Mg(OH)2","coef":1},{"formula":"NaCl","coef":2}]},"alcl3Naoh":{"reactants":[{"formula":"AlCl3","coef":1},{"formula":"NaOH","coef":3}],"products":[{"formula":"Al(OH)3","coef":1},{"formula":"NaCl","coef":3}]},"znso4Naoh":{"reactants":[{"formula":"ZnSO4","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Zn(OH)2","coef":1},{"formula":"Na2SO4","coef":1}]},"feso4Naoh":{"reactants":[{"formula":"FeSO4","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Fe(OH)2","coef":1},{"formula":"Na2SO4","coef":1}]},"cucl2Naoh":{"reactants":[{"formula":"CuCl2","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Cu(OH)2","coef":1},{"formula":"NaCl","coef":2}]},"niso4Naoh":{"reactants":[{"formula":"NiSO4","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Ni(OH)2","coef":1},{"formula":"Na2SO4","coef":1}]},"mnso4Naoh":{"reactants":[{"formula":"MnSO4","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Mn(OH)2","coef":1},{"formula":"Na2SO4","coef":1}]},"pbno32Naoh":{"reactants":[{"formula":"Pb(NO3)2","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Pb(OH)2","coef":1},{"formula":"NaNO3","coef":2}]},"cacl2Naoh":{"reactants":[{"formula":"CaCl2","coef":1},{"formula":"NaOH","coef":2}],"products":[{"formula":"Ca(OH)2","coef":1},{"formula":"NaCl","coef":2}]},"agno3Naoh":{"reactants":[{"formula":"AgNO3","coef":2},{"formula":"NaOH","coef":2}],"products":[{"formula":"Ag2O","coef":1},{"formula":"NaNO3","coef":2},{"formula":"H2O","coef":1}]},"alcl3Nh3":{"reactants":[{"formula":"AlCl3","coef":1},{"formula":"NH3","coef":3},{"formula":"H2O","coef":3}],"products":[{"formula":"Al(OH)3","coef":1},{"formula":"NH4Cl","coef":3}]},"kohHno3":{"reactants":[{"formula":"KOH","coef":1},{"formula":"HNO3","coef":1}],"products":[{"formula":"KNO3","coef":1},{"formula":"H2O","coef":1}]},"naohHno3":{"reactants":[{"formula":"NaOH","coef":1},{"formula":"HNO3","coef":1}],"products":[{"formula":"NaNO3","coef":1},{"formula":"H2O","coef":1}]},"kohHcl":{"reactants":[{"formula":"KOH","coef":1},{"formula":"HCl","coef":1}],"products":[{"formula":"KCl","coef":1},{"formula":"H2O","coef":1}]},"caoh2Hcl":{"reactants":[{"formula":"Ca(OH)2","coef":1},{"formula":"HCl","coef":2}],"products":[{"formula":"CaCl2","coef":1},{"formula":"H2O","coef":2}]},"caoh2H2so4":{"reactants":[{"formula":"Ca(OH)2","coef":1},{"formula":"H2SO4","coef":1}],"products":[{"formula":"CaSO4","coef":1},{"formula":"H2O","coef":2}]},"baoh2H2so4":{"reactants":[{"formula":"Ba(OH)2","coef":1},{"formula":"H2SO4","coef":1}],"products":[{"formula":"BaSO4","coef":1},{"formula":"H2O","coef":2}]},"baoh2Hcl":{"reactants":[{"formula":"Ba(OH)2","coef":1},{"formula":"HCl","coef":2}],"products":[{"formula":"BaCl2","coef":1},{"formula":"H2O","coef":2}]},"cuoh2H2so4":{"reactants":[{"formula":"Cu(OH)2","coef":1},{"formula":"H2SO4","coef":1}],"products":[{"formula":"CuSO4","coef":1},{"formula":"H2O","coef":2}]},"cuoh2Hcl":{"reactants":[{"formula":"Cu(OH)2","coef":1},{"formula":"HCl","coef":2}],"products":[{"formula":"CuCl2","coef":1},{"formula":"H2O","coef":2}]},"feoh3Hcl":{"reactants":[{"formula":"Fe(OH)3","coef":1},{"formula":"HCl","coef":3}],"products":[{"formula":"FeCl3","coef":1},{"formula":"H2O","coef":3}]},"znoh2Hcl":{"reactants":[{"formula":"Zn(OH)2","coef":1},{"formula":"HCl","coef":2}],"products":[{"formula":"ZnCl2","coef":1},{"formula":"H2O","coef":2}]},"aloh3H2so4":{"reactants":[{"formula":"Al(OH)3","coef":2},{"formula":"H2SO4","coef":3}],"products":[{"formula":"Al2(SO4)3","coef":1},{"formula":"H2O","coef":6}]},"mgoh2H2so4":{"reactants":[{"formula":"Mg(OH)2","coef":1},{"formula":"H2SO4","coef":1}],"products":[{"formula":"MgSO4","coef":1},{"formula":"H2O","coef":2}]}},"REACTION_DATA":{"hclNaOH":{"type":"neutralization","conditions":"roztwór wodny","observation":"brak gazu i osadu; reakcja zobojętniania","products":["NaCl","H2O"],"safety":["NaOH jest żrący"]},"h2so4Naoh":{"type":"neutralization","conditions":"roztwór wodny","observation":"zobojętnianie","products":["Na2SO4","H2O"],"safety":["kwas i zasada żrące"]},"agno3Hcl":{"type":"precipitation","conditions":"roztwór wodny","observation":"biały serowaty osad AgCl","products":["AgCl","HNO3"],"safety":["AgNO₃ żrący i plami skórę"]},"h2so4Koh":{"products":["K2SO4","H2O"],"type":"neutralization","conditions":"roztwór wodny","observation":"zobojętnianie, roztwór się ogrzewa","safety":["kwas i zasada żrące"]},"caoh2Hno3":{"products":["Ca(NO3)2","H2O"],"type":"neutralization","conditions":"roztwór wodny","observation":"mętne mleko wapienne staje się klarowne","safety":["kwas i zasada żrące"]},"aloh3Hcl":{"products":["AlCl3","H2O"],"type":"neutralization","conditions":"roztwór wodny","observation":"galaretowaty osad Al(OH)₃ roztwarza się","safety":["kwas żrący"]},"h3po4Caoh2":{"products":["Ca3(PO4)2","H2O"],"type":"neutralization","conditions":"roztwór wodny","observation":"wytrąca się biały osad Ca₃(PO₄)₂","safety":["kwas i zasada żrące"]},"mgoh2Hcl":{"products":["MgCl2","H2O"],"type":"neutralization","conditions":"sok żołądkowy — lek zobojętniający","observation":"zawiesina roztwarza się","safety":[]},"naH2o":{"products":["NaOH","H2"],"type":"metal+water","conditions":"mały kawałek Na w krystalizatorze z wodą; tylko pokaz nauczyciela","observation":"Na topi się w kulkę i biega po powierzchni; wydziela się H₂; z fenoloftaleiną roztwór malinowy","safety":["reakcja gwałtowna — osłona, okulary, mały kawałek"]},"cuso4Naoh":{"products":["Cu(OH)2","Na2SO4"],"type":"precipitation","conditions":"roztwór wodny","observation":"niebieski, galaretowaty osad Cu(OH)₂","safety":["NaOH żrący"]},"fecl3Naoh":{"products":["Fe(OH)3","NaCl"],"type":"precipitation","conditions":"roztwór wodny","observation":"rdzawobrunatny, kłaczkowaty osad Fe(OH)₃","safety":["NaOH żrący"]},"ch3coohNaoh":{"products":["CH3COONa","H2O"],"type":"neutralization","conditions":"roztwór wodny","observation":"zobojętnianie; w PR pH > 7 (hydroliza octanu)","safety":["NaOH żrący"]},"na2oH2o":{"products":["NaOH"],"type":"tlenek zasadowy + woda","conditions":"","observation":"roztwór barwi fenoloftaleinę na malinowo","safety":["NaOH żrący"],"level":"E8","lesson":"N01"},"k2oH2o":{"products":["KOH"],"type":"tlenek zasadowy + woda","conditions":"","observation":"fenoloftaleina malinowa","safety":["KOH żrący"],"level":"E8","lesson":"N01"},"li2oH2o":{"products":["LiOH"],"type":"tlenek zasadowy + woda","conditions":"","observation":"fenoloftaleina malinowa","safety":[],"level":"E8","lesson":"N01"},"mgoH2o":{"products":["Mg(OH)2"],"type":"tlenek zasadowy + woda","conditions":"bardzo powoli, w niewielkim stopniu (szkolnie: praktycznie nie)","observation":"fenoloftaleina słabo różowa","safety":[],"level":"E8","lesson":"N01"},"liH2o":{"products":["LiOH","H2"],"type":"metal + woda","conditions":"temperatura pokojowa","observation":"lit pływa, powoli wydziela się gaz; roztwór zasadowy (fenoloftaleina malinowa)","safety":["pokaz nauczyciela; okulary, osłona"],"level":"E8","lesson":"N02"},"kH2o":{"products":["KOH","H2"],"type":"metal + woda","conditions":"temperatura pokojowa, bardzo mała grudka","observation":"potas „biega” po wodzie, wodór zapala się fioletowym płomieniem; roztwór zasadowy","safety":["wyłącznie pokaz nauczyciela; osłona, okulary"],"level":"E8","lesson":"N02"},"caH2o":{"products":["Ca(OH)2","H2"],"type":"metal + woda","conditions":"temperatura pokojowa","observation":"równomierne wydzielanie gazu, mętnienie (słabo rozpuszczalny Ca(OH)₂); fenoloftaleina malinowa","safety":["okulary"],"level":"E8","lesson":"N02"},"baH2o":{"products":["Ba(OH)2","H2"],"type":"metal + woda","conditions":"temperatura pokojowa","observation":"wydziela się wodór; roztwór zasadowy","safety":["związki baru trujące — tylko pokaz"],"level":"AMB","lesson":"N02"},"mgH2oHot":{"products":["Mg(OH)2","H2"],"type":"metal + woda","conditions":"gorąca woda (z zimną reakcja praktycznie nie zachodzi)","observation":"powolne wydzielanie pęcherzyków; fenoloftaleina słabo różowa","safety":["okulary; ogrzewanie"],"level":"E8","lesson":"N02"},"baoH2o":{"products":["Ba(OH)2"],"type":"tlenek zasadowy + woda","conditions":"temperatura pokojowa","observation":"układ się ogrzewa; roztwór zasadowy","safety":["związki baru trujące"],"level":"AMB","lesson":"N02"},"mgcl2Naoh":{"products":["Mg(OH)2","NaCl"],"type":"strącanie wodorotlenku","conditions":"roztwory wodne","observation":"biały, galaretowaty osad","safety":["NaOH żrący — okulary, rękawice"],"level":"E8","lesson":"N02"},"alcl3Naoh":{"products":["Al(OH)3","NaCl"],"type":"strącanie wodorotlenku","conditions":"NaOH dodawany kroplami, bez nadmiaru","observation":"biały, galaretowaty osad; w nadmiarze NaOH osad się roztwarza (amfoteryczność)","safety":["NaOH żrący"],"level":"E8","lesson":"N02"},"znso4Naoh":{"products":["Zn(OH)2","Na2SO4"],"type":"strącanie wodorotlenku","conditions":"NaOH kroplami, bez nadmiaru","observation":"biały osad; w nadmiarze NaOH znika","safety":["NaOH żrący"],"level":"E8","lesson":"N02"},"feso4Naoh":{"products":["Fe(OH)2","Na2SO4"],"type":"strącanie wodorotlenku","conditions":"świeży roztwór FeSO₄","observation":"zielonkawy osad, na powietrzu brunatnieje (utlenianie do Fe(OH)₃)","safety":["NaOH żrący"],"level":"E8","lesson":"N02"},"cucl2Naoh":{"products":["Cu(OH)2","NaCl"],"type":"strącanie wodorotlenku","conditions":"roztwory wodne","observation":"niebieski, galaretowaty osad","safety":["NaOH żrący"],"level":"E8","lesson":"N02"},"niso4Naoh":{"products":["Ni(OH)2","Na2SO4"],"type":"strącanie wodorotlenku","conditions":"roztwory wodne","observation":"jasnozielony osad","safety":["NaOH żrący; sole niklu uczulają"],"level":"AMB","lesson":"N02"},"mnso4Naoh":{"products":["Mn(OH)2","Na2SO4"],"type":"strącanie wodorotlenku","conditions":"roztwory wodne","observation":"biały (beżowy) osad, brunatnieje na powietrzu","safety":["NaOH żrący"],"level":"AMB","lesson":"N02"},"pbno32Naoh":{"products":["Pb(OH)2","NaNO3"],"type":"strącanie wodorotlenku","conditions":"NaOH kroplami","observation":"biały osad; w nadmiarze NaOH znika","safety":["związki ołowiu trujące — tylko pokaz"],"level":"AMB","lesson":"N02"},"cacl2Naoh":{"products":["Ca(OH)2","NaCl"],"type":"strącanie wodorotlenku","conditions":"tylko roztwory stężone (Ca(OH)₂ trudno, ale nie praktycznie nierozpuszczalny)","observation":"białe zmętnienie","safety":["NaOH żrący"],"level":"E8","lesson":"N02"},"agno3Naoh":{"products":["Ag2O","NaNO3","H2O"],"type":"strącanie wodorotlenku","conditions":"roztwory wodne","observation":"brunatny osad Ag₂O (AgOH nietrwały)","safety":["AgNO₃ plami skórę; NaOH żrący"],"level":"AMB","lesson":"N02","note":"AgOH powstaje przejściowo i od razu przechodzi w Ag₂O"},"alcl3Nh3":{"products":["Al(OH)3","NH4Cl"],"type":"strącanie wodorotlenku","conditions":"woda amoniakalna — nadmiar nie roztwarza osadu","observation":"biały, galaretowaty osad","safety":["NH₃ drażniący — dygestorium"],"level":"LO","lesson":"N02"},"kohHno3":{"products":["KNO3","H2O"],"type":"zobojętnianie","conditions":"roztwory wodne","observation":"brak widocznych zmian; z fenoloftaleiną zanik barwy malinowej","safety":["roztwory żrące"],"level":"E8","lesson":"N02"},"naohHno3":{"products":["NaNO3","H2O"],"type":"zobojętnianie","conditions":"roztwory wodne","observation":"brak widocznych zmian; lekkie ogrzanie","safety":["roztwory żrące"],"level":"E8","lesson":"N02"},"kohHcl":{"products":["KCl","H2O"],"type":"zobojętnianie","conditions":"roztwory wodne","observation":"brak widocznych zmian; lekkie ogrzanie","safety":["roztwory żrące"],"level":"E8","lesson":"N02"},"caoh2Hcl":{"products":["CaCl2","H2O"],"type":"zobojętnianie","conditions":"woda wapienna lub mleko wapienne","observation":"zawiesina klaruje się; zanik barwy fenoloftaleiny","safety":[],"level":"E8","lesson":"N02"},"caoh2H2so4":{"products":["CaSO4","H2O"],"type":"zobojętnianie","conditions":"roztwory","observation":"możliwe białe zmętnienie (CaSO₄ trudno rozpuszczalny)","safety":["H₂SO₄ żrący"],"level":"E8","lesson":"N02"},"baoh2H2so4":{"products":["BaSO4","H2O"],"type":"zobojętnianie","conditions":"roztwory","observation":"biały osad BaSO₄ + zanik barwy fenoloftaleiny (zobojętnianie i strącanie jednocześnie)","safety":["związki baru trujące"],"level":"E8","lesson":"N02"},"baoh2Hcl":{"products":["BaCl2","H2O"],"type":"zobojętnianie","conditions":"roztwory","observation":"brak widocznych zmian; zanik barwy fenoloftaleiny","safety":["związki baru trujące"],"level":"AMB","lesson":"N02"},"cuoh2H2so4":{"products":["CuSO4","H2O"],"type":"zobojętnianie","conditions":"osad + rozcieńczony kwas","observation":"niebieski osad znika, roztwór niebieski","safety":["H₂SO₄ żrący"],"level":"E8","lesson":"N02"},"cuoh2Hcl":{"products":["CuCl2","H2O"],"type":"zobojętnianie","conditions":"osad + kwas","observation":"osad znika, roztwór zielononiebieski","safety":[],"level":"E8","lesson":"N02"},"feoh3Hcl":{"products":["FeCl3","H2O"],"type":"zobojętnianie","conditions":"osad + kwas","observation":"brunatny osad znika, roztwór żółtobrunatny","safety":[],"level":"E8","lesson":"N02"},"znoh2Hcl":{"products":["ZnCl2","H2O"],"type":"zobojętnianie","conditions":"osad + kwas","observation":"biały osad znika, roztwór bezbarwny","safety":[],"level":"E8","lesson":"N02"},"aloh3H2so4":{"products":["Al2(SO4)3","H2O"],"type":"zobojętnianie","conditions":"osad + kwas","observation":"biały osad znika","safety":["H₂SO₄ żrący"],"level":"AMB","lesson":"N02"},"mgoh2H2so4":{"products":["MgSO4","H2O"],"type":"zobojętnianie","conditions":"zawiesina + kwas","observation":"zawiesina klaruje się","safety":[],"level":"AMB","lesson":"N02"}}};D.REACTIONS=D.REACTIONS||X.REACTIONS;D.REACTION_DATA=D.REACTION_DATA||X.REACTION_DATA;
 if(!C.REACTION)C.REACTION={get:function(k){return D.REACTIONS[k]||null},equation:function(k){var r=D.REACTIONS[k];if(!r)return '';var f=function(a){return a.map(function(x){return (x.coef>1?x.coef+' ':'')+x.formula}).join(' + ')};return f(r.reactants)+' → '+f(r.products)}};})();
(function(){
const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
const SUB='₀₁₂₃₄₅₆₇₈₉',SUP={'+':'⁺','-':'⁻','1':'¹','2':'²','3':'³','4':'⁴'};
const pf=s=>String(s).replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,d=>SUB[d]));
const ion=(sym,q)=>sym+(Math.abs(q)>1?SUP[Math.abs(q)]:'')+(q>0?'⁺':'⁻');
const fmt=(v,d)=>(Math.round(v*Math.pow(10,d))/Math.pow(10,d)).toString().replace('.',',');

const T=[
 ['LiOH','wodorotlenek litu','Li',1,null,'#f8fafc','biały','mocna',0,'AMB',{oxide:'li2oH2o',metal:'liH2o'},['najmniej rozpuszczalny z wodorotlenków litowców, ale nadal dobrze rozpuszczalny'],-23.6,null,12.8,'R'],
 ['NaOH','wodorotlenek sodu','Na',1,'Na','#f8fafc','biały','mocna',0,'E8',{oxide:'na2oH2o',metal:'naH2o',acid:'hclNaOH',co2:'naohCo2'},['higroskopijny — „rozpływa się” na powietrzu','żrący; roztwór = zasada sodowa (ług sodowy)','rozpuszczanie silnie egzotermiczne'],-44.5,null,109,null],
 ['KOH','wodorotlenek potasu','K',1,'K','#f8fafc','biały','mocna',0,'E8',{oxide:'k2oH2o',metal:'kH2o',acid:'kohHcl',co2:'co2Koh'},['higroskopijny, żrący; jeszcze lepiej rozpuszczalny niż NaOH','mydła potasowe (płynne), baterie alkaliczne'],-57.6,null,112,null],
 ['Ca(OH)2','wodorotlenek wapnia','Ca',2,'Ca','#f1f5f9','biały','mocna',0,'E8',{oxide:'caoH2o',metal:'caH2o',precip:'cacl2Naoh',acid:'caoh2Hcl',heat:'caoh2Heat',co2:'caoh2Co2'},['wapno gaszone; mleko wapienne = zawiesina, woda wapienna = klarowny roztwór nasycony','słabo rozpuszczalny, ale rozpuszczona część dysocjuje praktycznie całkowicie'],-16.7,12.4,0.173,null],
 ['Ba(OH)2','wodorotlenek baru','Ba',2,'Ba','#f8fafc','biały','mocna',0,'AMB',{oxide:'baoH2o',metal:'baH2o',acid:'baoh2Hcl',co2:'baoh2Co2'},['związki baru są trujące — nie do doświadczeń uczniowskich','rozpuszczalność ok. 3,9 g/100 g (jako hydrat Ba(OH)₂·8H₂O)'],null,null,3.9,null],
 ['Mg(OH)2','wodorotlenek magnezu','Mg',2,'Mg','#f8fafc','biały','—',0,'E8',{oxide:'mgoH2o',metal:'mgH2oHot',precip:'mgcl2Naoh',acid:'mgoh2Hcl',heat:'mgoh2Heat'},['mleko magnezowe — lek zobojętniający kwas żołądkowy','MgO reaguje z wodą bardzo powoli'],null,10.4,0.0009,null],
 ['Al(OH)3','wodorotlenek glinu','Al',3,'Al','#f8fafc','biały, galaretowaty','—',1,'E8',{precip:'alcl3Naoh',acid:'aloh3Hcl',base:'aloh3Naoh',heat:'aloh3Heat'},['amfoteryczny: reaguje z kwasami i z mocnymi zasadami','leki na zgagę; uzdatnianie wody'],null,null,0.0001,null],
 ['Zn(OH)2','wodorotlenek cynku','Zn',2,'Zn','#f8fafc','biały','—',1,'E8',{precip:'znso4Naoh',acid:'znoh2Hcl',base:'znoh2Naoh',heat:'znoh2Heat'},['amfoteryczny'],null,null,0.0001,null],
 ['Fe(OH)2','wodorotlenek żelaza(II)','Fe',2,'Fe2','#9cbf8f','zielonkawy (brunatnieje na powietrzu)','—',0,'E8',{precip:'feso4Naoh',air:'feoh2O2'},['na powietrzu utlenia się do Fe(OH)₃'],null,null,0.0001,null],
 ['Fe(OH)3','wodorotlenek żelaza(III)','Fe',3,'Fe3','#8b4513','rdzawobrunatny','—',0,'E8',{precip:'fecl3Naoh',acid:'feoh3Hcl',heat:'feoh3Heat'},['składnik rdzy'],null,null,0.00001,null],
 ['Cu(OH)2','wodorotlenek miedzi(II)','Cu',2,'Cu','#4f9fe0','niebieski, galaretowaty','—',0,'E8',{precip:'cuso4Naoh',acid:'cuoh2H2so4',heat:'cuoh2Heat'},['po ogrzaniu czernieje (CuO)'],null,null,0.0001,null],
 ['Ni(OH)2','wodorotlenek niklu(II)','Ni',2,'Ni','#7fd38a','jasnozielony','—',0,'AMB',{precip:'niso4Naoh'},['akumulatory Ni-MH'],null,null,0.0001,null],
 ['Mn(OH)2','wodorotlenek manganu(II)','Mn',2,'Mn','#efe6d2','biały / beżowy (brunatnieje)','—',0,'AMB',{precip:'mnso4Naoh'},['na powietrzu utlenia się (brunatnieje)'],null,null,0.0003,null],
 ['Pb(OH)2','wodorotlenek ołowiu(II)','Pb',2,'Pb','#f8fafc','biały','—',1,'AMB',{precip:'pbno32Naoh',base:'pboh2Naoh'},['amfoteryczny; związki ołowiu trujące'],null,null,0.0001,null],
 ['Sn(OH)2','wodorotlenek cyny(II)','Sn',2,'Sn','#f8fafc','biały','—',1,'LO',{},['amfoteryczny'],null,null,0.0001,null],
 ['Cr(OH)3','wodorotlenek chromu(III)','Cr',3,null,'#6b8f71','szarozielony','—',1,'LO',{},['amfoteryczny'],null,null,0.0001,'N'],
 ['AgOH','wodorotlenek srebra(I)','Ag',1,'Ag','#4a3426','— (od razu brunatny Ag₂O)','—',0,'AMB',{precip:'agno3Naoh',heat:'agohDec'},['nietrwały: 2AgOH → Ag₂O + H₂O; nie mów „nie istnieje” — to zbyt duże uproszczenie'],null,null,null,null],
 ['CuOH','wodorotlenek miedzi(I)','Cu',1,null,'#b45309','— (przechodzi w Cu₂O)','—',0,'LO',{heat:'cuohDec'},['nietrwały: 2CuOH → Cu₂O + H₂O'],null,null,null,'—'],
 ['NH4OH','„wodorotlenek amonu” (zapis szkolny)','NH4',1,'NH4','#f8fafc','— (roztwór)','słaba',0,'AMB',{},['tradycyjny skrót: dokładniej NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ — nie ma trwałej cząsteczki NH₄OH','woda amoniakalna ma odczyn zasadowy'],null,11.1,null,null]
];
const K=['f','name','metal','q','cid','hex','color','strength','amph','level','rx','notes','dHsol','phSat','sg','sOwn'];
const ROWS=T.map(r=>{const o={};K.forEach((k,i)=>o[k]=r[i]);o.amph=!!o.amph;o.pretty=pf(o.f);o.cation=o.metal==='NH4'?'NH₄⁺':ion(o.metal,o.q);return Object.freeze(o)});
const BY={};ROWS.forEach(r=>BY[r.f]=r);
 
const SOLHEAT={NaOH:{dH:-44.5,name:'NaOH',M:40.00},KOH:{dH:-57.6,name:'KOH',M:56.11},LiOH:{dH:-23.6,name:'LiOH',M:23.95},'Ca(OH)2':{dH:-16.7,name:'Ca(OH)₂',M:74.09,limit:0.17},NH4NO3:{dH:25.7,name:'NH₄NO₃ (porównanie)',M:80.04},NaCl:{dH:3.9,name:'NaCl (porównanie)',M:58.44}};
const ACIDS={HCl:{n:1,an:'Cl',ion:'Cl⁻',name:'kwas solny',saltSuffix:'chlorek'},HNO3:{n:1,an:'NO3',ion:'NO₃⁻',name:'kwas azotowy(V)',saltSuffix:'azotan(V)'},H2SO4:{n:2,an:'SO4',ion:'SO₄²⁻',name:'kwas siarkowy(VI)',saltSuffix:'siarczan(VI)'}};
const POLY={NO3:1,SO4:1,OH:1,NH4:1,CO3:1,PO4:1};
D.HYDROXIDES=Object.freeze(ROWS);
function solTab(cid){const t=D.SOLUBILITY_TABLE&&D.SOLUBILITY_TABLE.table&&D.SOLUBILITY_TABLE.table.OH;return t&&cid?t[cid]:null}
function atoms(f){f=String(f).replace(/[₀-₉]/g,c=>SUB.indexOf(c)).replace(/\s/g,'');let i=0;
 function grp(){const o={};while(i<f.length&&f[i]!==')'){if(f[i]==='('){i++;const inn=grp();i++;const m=f.slice(i).match(/^\d*/)[0];i+=m.length;const n=+(m||1);for(const k in inn)o[k]=(o[k]||0)+inn[k]*n}
  else{const m=f.slice(i).match(/^([A-Z][a-z]?)(\d*)/);if(!m)return o;i+=m[0].length;o[m[1]]=(o[m[1]]||0)+(+(m[2]||1))}}return o}
 return grp()}
function eqText(k){const r=(D.REACTIONS||{})[k];if(!r)return null;const d=(D.REACTION_DATA||{})[k]||{},typ=d.type||'';
 const GAS={H2:1,CO2:1,NH3:1,O2:1},ppt=f=>{const h=BY[f];if(h)return(sol(f).s==='N'||sol(f).s==='T')&&!/rozkład|utlenianie/.test(typ);return /^(BaSO4|CaCO3|BaCO3|Ag2O|CaSO4)$/.test(f)&&!/rozkład/.test(typ)};
 const side=(a,p)=>a.map(x=>(x.coef>1?x.coef+' ':'')+pf(x.formula)+(p&&GAS[x.formula]?'↑':p&&ppt(x.formula)&&!r.reactants.some(y=>y.formula===x.formula)?'↓':'')).join(' + ');
 return side(r.reactants,0)+' → '+side(r.products,1)}
function sol(f){const r=BY[f];if(!r)return{s:null};let s=r.sOwn||solTab(r.cid)||null;
 const L={R:'dobrze rozpuszczalny',T:'trudno (słabo) rozpuszczalny',N:'praktycznie nierozpuszczalny','—':'nietrwały w wodzie / nie istnieje w roztworze'};
 let odczyn,ph=null;
 if(r.metal==='NH4'){odczyn='zasadowy (słaba zasada)';ph=r.phSat}
 else if(s==='R'){odczyn='silnie zasadowy';ph=null}
 else if(s==='T'){odczyn='zasadowy (roztwór nasycony)';ph=r.phSat}
 else if(s==='N'&&r.phSat){odczyn='słabo zasadowy (zawiesina)';ph=r.phSat}
 else if(s==='N'){odczyn='brak wyraźnego odczynu zasadowego (osad)';}
 else odczyn='—';
 return{s,label:L[s]||'—',odczyn,ph,base:s==='R'||s==='T'||r.metal==='NH4',g100:r.sg,source:r.sOwn?'CHE.HYDROXIDES':'D.SOLUBILITY_TABLE'}}
function build(metal,q){const r=ROWS.find(x=>x.metal===metal&&x.q===q);const f=r?r.f:(metal+(q>1?'(OH)'+q:'OH'));const c=metal==='NH4'?'NH₄⁺':ion(metal,q);
 const steps=['Kation: '+c+' (ładunek +'+q+').','Anion OH⁻ ma zawsze ładunek −1 — to jeden „klocek”.','Potrzeba '+q+' '+(q===1?'grupy':'grup')+' OH⁻, bo (+'+q+') + '+q+'·(−1) = 0.',
  q>1?'Grup OH⁻ jest więcej niż jedna → nawias: '+pf(f)+' (indeks za nawiasem mnoży całą grupę).':'Jedna grupa OH⁻ → bez nawiasu: '+pf(f)+'.',
  'Skład: '+Object.entries(atoms(f)).map(([k,v])=>v+' '+k).join(', ')+'.'];
 return{f,pretty:pf(f),name:r?r.name:'wodorotlenek ('+metal+')',nOH:q,bracket:q>1,cation:c,charge:'(+'+q+') + '+q+'·(−1) = 0',steps,row:r||null}}
 
function check(input,metal,q){const s=String(input||'').replace(/\s/g,'').replace(/[₀-₉]/g,c=>SUB.indexOf(c)),ok=build(metal,q),want=atoms(ok.f),got=atoms(s);
 const same=(a,b)=>Object.keys(a).length===Object.keys(b).length&&Object.keys(a).every(k=>a[k]===b[k]);
 if(s===ok.f)return{ok:true,code:'ok',msg:'Poprawnie: '+ok.pretty+' — '+ok.name+'.'};
 if(!s)return{ok:false,code:'empty',msg:'Wpisz wzór.'};
 if(got[metal]==null&&metal!=='NH4')return{ok:false,code:'metal',msg:'We wzorze brak symbolu metalu '+metal+'.'};
 if(new RegExp('^'+metal+'OH\\d+$').test(s))return{ok:false,code:'bracket',msg:'Brak nawiasu: w '+pf(s)+' indeks dotyczy tylko wodoru (skład '+Object.entries(got).map(([k,v])=>v+' '+k).join(', ')+'). Poprawnie: '+ok.pretty+' — '+q+' całe grupy OH⁻.'};
 if(q===1&&s===metal+'(OH)')return{ok:false,code:'bracket1',msg:'Nawias jest zbędny przy jednej grupie OH⁻: pisz '+ok.pretty+'.'};
 if(same(want,got))return{ok:false,code:'form',msg:'Skład się zgadza, ale zapis gubi grupę OH⁻ — pisz '+ok.pretty+'.'};
 const m=s.match(/^(?:[A-Z][a-z]?|NH4)(?:\(OH\)(\d+)|OH)$/);if(m){const k=+(m[1]||1);return{ok:false,code:'count',msg:'Liczba grup OH⁻: '+k+'. Suma ładunków (+'+q+') + '+k+'·(−1) = '+(q-k>0?'+':'')+(q-k)+' ≠ 0. Potrzeba '+q+'.'}}
 return{ok:false,code:'other',msg:'To nie jest poprawny wzór wodorotlenku dla '+ok.cation+'. Oczekiwany: '+ok.pretty+'.'}}
function dissociation(f){const r=BY[f];if(!r)return null;const S=sol(f);
 if(r.metal==='NH4')return{eq:'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻',note:'woda amoniakalna: tylko część cząsteczek NH₃ reaguje z wodą (słaba zasada)'};
 const right=r.cation+' + '+(r.q>1?r.q:'')+'OH⁻';
 if(S.s==='R')return{eq:pf(f)+' → '+right,note:'dobrze rozpuszczalny, dysocjuje praktycznie całkowicie (mocna zasada)'};
 if(S.s==='T')return{eq:pf(f)+'(s) ⇌ '+right,note:'rozpuszcza się niewiele; rozpuszczona część dysocjuje całkowicie — dlatego woda wapienna ma wyraźny odczyn zasadowy'};
 if(S.s==='N')return{eq:pf(f)+'(s) — praktycznie nie przechodzi do roztworu',note:'nie zapisujemy dysocjacji osadu; do roztworu trafia znikoma ilość jonów OH⁻'};
 return{eq:'—',note:'nietrwały'}}
const METHOD={oxide:'tlenek metalu + woda',metal:'metal aktywny + woda',precip:'sól metalu + zasada (strącanie)'};
function obtain(f){const r=BY[f];if(!r)return[];const S=sol(f);return['oxide','metal','precip'].map(m=>{const k=r.rx[m];
 if(k&&(D.REACTIONS||{})[k]){const d=(D.REACTION_DATA||{})[k]||{};return{method:m,title:METHOD[m],ok:true,rx:k,eq:eqText(k),cond:d.conditions||'',obs:d.observation||'',safety:(d.safety||[]).join(' '),level:d.level||'E8',note:d.note||''}}
 let why;if(m==='oxide')why=r.metal==='NH4'?'nie dotyczy (brak metalu)':'tlenek tego metalu praktycznie nie reaguje z wodą — „tlenek zasadowy” nie oznacza „reaguje z wodą”';
 else if(m==='metal')why=r.metal==='NH4'?'nie dotyczy':'metal zbyt mało aktywny — nie wypiera wodoru z wody w warunkach szkolnych';
 else why=S.s==='R'?'wodorotlenek dobrze rozpuszczalny — nie wytrąci się jako osad':'brak typowej reakcji szkolnej w silniku';
 return{method:m,title:METHOD[m],ok:false,rx:null,eq:null,why}})}
function saltFormula(metal,q,an,n){const g=gcd(q,n),a=n/g,b=q/g;const A=b>1?(POLY[an]?'('+an+')'+b:an+b):an;return{f:metal+(a>1?a:'')+A,a,b}}
function gcd(a,b){return b?gcd(b,a%b):a}
 
function neutralEq(f,acid){const r=BY[f],A=ACIDS[acid];if(!r||!A||r.metal==='NH4')return null;
 const k=Object.keys(D.REACTIONS||{}).find(k=>{const x=D.REACTIONS[k],fs=x.reactants.map(y=>y.formula).sort().join('|');return fs===[f,acid].sort().join('|')&&x.products.some(p=>p.formula==='H2O')});
 if(k)return{rx:k,eq:eqText(k),src:'D.REACTIONS'};
 const s=saltFormula(r.metal,r.q,A.an,A.n),w=s.a*r.q;
 return{rx:null,eq:(s.a>1?s.a+' ':'')+pf(f)+' + '+(s.b>1?s.b+' ':'')+pf(acid)+' → '+pf(s.f)+' + '+(w>1?w+' ':'')+'H₂O',src:'CHE.HYDROXIDES.neutralEq',salt:s.f}}
const REAGENTS=['H2O','HCl','HNO3','H2SO4','NaOH','CO2','ogrzewanie','powietrze'];
function predict(f,g){const r=BY[f];if(!r)return null;const S=sol(f),RX=D.REACTIONS||{};
 const find=(fs)=>Object.keys(RX).find(k=>RX[k].reactants.map(y=>y.formula).sort().join('|')===fs.sort().join('|'));
 const res=(k,extra)=>{const d=(D.REACTION_DATA||{})[k]||{};return Object.assign({ok:true,rx:k,eq:eqText(k),type:d.type||'',obs:d.observation||'',cond:d.conditions||'',level:d.level||'E8',note:d.note||''},extra||{})};
 if(ACIDS[g]){const n=neutralEq(f,g);if(n&&n.rx)return res(n.rx,{why:'wodorotlenek + kwas → sól + woda (zobojętnianie): H⁺ + OH⁻ → H₂O'});
  if(n)return{ok:true,rx:null,eq:n.eq,type:'zobojętnianie',obs:S.s==='N'?'osad roztwarza się':'brak widocznych zmian; zanik barwy fenoloftaleiny',why:'każdy wodorotlenek metalu reaguje z mocnym kwasem; równanie z reguły: liczba H⁺ = liczba OH⁻',level:'E8'};
  return{ok:true,rx:null,eq:'NH₃ + '+pf(g)+' → sól amonowa',type:'zobojętnianie',why:'woda amoniakalna zobojętnia kwasy (powstaje sól amonowa)'}}
 if(g==='NaOH'){if(f==='NaOH')return{ok:false,why:'ta sama substancja — brak reakcji'};
  if(r.amph){const k=r.rx.base;return k?res(k,{why:'amfoteryczny — reaguje także z mocną zasadą (jon kompleksowy, poziom LO)'}):{ok:true,rx:null,eq:'— (jon kompleksowy, poziom LO)',why:'amfoteryczny — roztwarza się w nadmiarze mocnej zasady'}}
  return{ok:false,why:'wodorotlenek o charakterze zasadowym nie reaguje z zasadą'}}
 if(g==='H2O'){const d=dissociation(f);return{ok:S.base,physical:true,eq:d.eq,why:S.label+' — '+d.note,obs:S.s==='R'?'klarowny roztwór, odczyn '+S.odczyn:S.s==='T'?'część się rozpuszcza (zawiesina → po odstaniu klarowny roztwór nasycony)':'osad nie znika'}}
 if(g==='CO2'){const k=r.rx.co2||find([f,'CO2']);if(k)return res(k,{why:'zasada + tlenek kwasowy → sól + woda'});return{ok:false,why:S.base?'reaguje (zasada + tlenek kwasowy), brak rekordu w silniku':'osad praktycznie nie reaguje z CO₂ w warunkach szkolnych'}}
 if(g==='ogrzewanie'){const k=r.rx.heat;if(k)return res(k,{why:'wodorotlenki metali (poza litowcami) przy ogrzewaniu tracą wodę → tlenek'});return{ok:false,why:r.metal==='Na'||r.metal==='K'||r.metal==='Li'?'topi się (NaOH ok. 318 °C), nie rozkłada w warunkach szkolnych':'brak rekordu w silniku'}}
 if(g==='powietrze'){const k=r.rx.air;if(k)return res(k,{why:'tlen z powietrza utlenia Fe²⁺ do Fe³⁺'});if(r.rx.co2)return{ok:true,rx:r.rx.co2,eq:eqText(r.rx.co2),why:'zasady pochłaniają CO₂ z powietrza (dlatego NaOH przechowujemy szczelnie)'};return{ok:false,why:'stabilny na powietrzu'}}
 return null}
 
function neutral(o){const r=BY[o.base],A=ACIDS[o.acid];if(!r||!A)return null;const S=sol(o.base);
 const nOH=o.cB*o.VB/1000*r.q,nH=o.cA*o.VA/1000*A.n,V=(o.VB+o.VA)/1000,c=(nH-nOH)/V,Kw=1e-14;
 const H=c>=0?(c+Math.sqrt(c*c+4*Kw))/2:Kw/((-c+Math.sqrt(c*c+4*Kw))/2),pH=-Math.log10(H);
 const Veq=nOH/(o.cA*A.n)*1000,salt=saltFormula(r.metal,r.q,A.an,A.n).f;
 const ppt=(o.base==='Ba(OH)2'&&o.acid==='H2SO4')?'BaSO4':(o.base==='Ca(OH)2'&&o.acid==='H2SO4')?'CaSO4':null;
 return{nOH0:nOH,nH,excessOH:Math.max(0,nOH-nH),excessH:Math.max(0,nH-nOH),pH,Veq,salt,saltPretty:pf(salt),ppt,water:Math.min(nOH,nH),
  state:Math.abs(nOH-nH)<1e-9?'równoważnik — roztwór obojętny':nOH>nH?'nadmiar OH⁻ — odczyn zasadowy':'nadmiar H⁺ — odczyn kwasowy',
  warn:S.s==='T'&&o.cB>0.02?'Ca(OH)₂ rozpuszcza się tylko do ok. 0,02 mol/dm³ — wyższe stężenie to zawiesina (mleko wapienne)':S.s==='N'?'wodorotlenek nierozpuszczalny — to zawiesina, nie roztwór':''}}
function curve(o,n){const out=[],Vmax=o.Vmax||Math.max(2*(o.cB*o.VB*(BY[o.base]||{q:1}).q)/(o.cA*(ACIDS[o.acid]||{n:1}).n),1);for(let i=0;i<=(n||80);i++){const VA=Vmax*i/(n||80);out.push({V:VA,pH:neutral(Object.assign({},o,{VA})).pH})}return out}
 
function heat(f,m,mW,T0){const h=SOLHEAT[f];if(!h)return null;const n=m/h.M,Q=-h.dH*n*1000,dT=Q/((mW+m)*4.18);
 return{f,name:h.name,dH:h.dH,n,Q,dT,T:(T0==null?20:T0)+dT,kind:h.dH<0?'egzotermiczne (temperatura rośnie)':'endotermiczne (temperatura spada)',limit:h.limit||null}}
 
const KSP={'Ca(OH)2':5.5e-6,'Mg(OH)2':5.6e-12,'Fe(OH)2':4.9e-17,'Fe(OH)3':2.8e-39,'Cu(OH)2':2.2e-20,'Zn(OH)2':3e-17,'Al(OH)3':1.3e-33,'Ni(OH)2':5.5e-16,'Mn(OH)2':2e-13};
function satpH(f){const r=BY[f],K=KSP[f];if(!r||!K)return null;const n=r.q,s=Math.pow(K/Math.pow(n,n),1/(n+1)),oh=n*s,pH=14+Math.log10(Math.max(oh,1e-7));return{f,Ksp:K,n,s,OH:oh,pH:Math.max(7,pH),note:oh<1e-6?'[OH⁻] z osadu mniejsze niż w czystej wodze — odczyn praktycznie obojętny':''}}
function precipitations(){return Object.keys(D.REACTION_DATA||{}).filter(k=>(D.REACTION_DATA[k].type==='strącanie wodorotlenku'||/^(cuso4Naoh|fecl3Naoh)$/.test(k))&&D.REACTIONS[k])}
function get(f){return BY[f]||null}
function list(flt){return ROWS.filter(r=>!flt||(typeof flt==='function'?flt(r):r.level===flt))}
function cations(){return ROWS.filter(r=>r.metal!=='NH4'&&r.sg!==null&&r.level!=='LO').map(r=>({metal:r.metal,q:r.q,ion:r.cation,f:r.f}))}
function audit(){const t=[],ok=(n,v,d)=>t.push([n,!!v,d||'']);const RX=D.REACTIONS||{};
 ok('build Ca²⁺ → Ca(OH)₂',build('Ca',2).f==='Ca(OH)2');ok('build Na⁺ → NaOH (bez nawiasu)',build('Na',1).f==='NaOH'&&!build('Na',1).bracket);
 ok('check: CaOH2 → błąd nawiasu',check('CaOH2','Ca',2).code==='bracket');ok('check: Ca(OH)2 → ok',check('Ca(OH)₂','Ca',2).ok);ok('check: Al(OH)2 → zła liczba OH⁻',check('Al(OH)2','Al',3).code==='count');
 const miss=[];ROWS.forEach(r=>Object.values(r.rx).forEach(k=>{if(!RX[k])miss.push(r.f+':'+k)}));ok('wszystkie klucze rx istnieją w D.REACTIONS',!miss.length,miss.join(', '));
 ok('Cu(OH)₂ praktycznie nierozpuszczalny (z SOLUBILITY_TABLE)',sol('Cu(OH)2').s==='N');ok('Ca(OH)₂ trudno rozpuszczalny',sol('Ca(OH)2').s==='T');ok('NaOH dobrze rozpuszczalny',sol('NaOH').s==='R');
 const ox=[];Object.values(D.OXIDES||{}).forEach(o=>{const k=o&&o.water&&o.water.rx;if(!k||!RX[k])return;const p=RX[k].products.map(x=>x.formula).find(x=>BY[x]);if(p&&BY[p].rx.oxide!==k)ox.push(p+'≠'+k)});
 ok('spójność z N01: tlenek + woda → ten sam klucz reakcji',!ox.length,ox.join(', '));
 const n1=neutral({base:'NaOH',acid:'HCl',cB:.1,VB:50,cA:.1,VA:50});ok('NaOH 0,1 M 50 cm³ + HCl 0,1 M 50 cm³ → pH 7',n1&&Math.abs(n1.pH-7)<.01,n1&&n1.pH.toFixed(2));
 const n2=neutral({base:'Ca(OH)2',acid:'HCl',cB:.01,VB:50,cA:.1,VA:5});ok('Ca(OH)₂: 2 OH⁻ na jednostkę — Veq = 10 cm³',n2&&Math.abs(n2.Veq-10)<1e-9);
 const g=neutralEq('Al(OH)3','H2SO4');ok('zobojętnianie Al(OH)₃ + H₂SO₄ zbilansowane',g&&/2 Al\(OH\)₃ \+ 3 H₂SO₄ → Al₂\(SO₄\)₃ \+ 6 H₂O/.test(g.eq),g&&g.eq);
 const h=heat('NaOH',4,100);ok('4 g NaOH w 100 g wody → ok. +10 K',h&&Math.abs(h.dT-10.2)<.5,h&&h.dT.toFixed(1));
 const sc=satpH('Ca(OH)2'),sm=satpH('Mg(OH)2');ok('Ksp → pH nasyconego Ca(OH)₂ ≈ pH zmierzone (12,4)',sc&&Math.abs(sc.pH-12.4)<.15,sc&&sc.pH.toFixed(2));ok('Ksp → pH zawiesiny Mg(OH)₂ ≈ 10,4',sm&&Math.abs(sm.pH-10.4)<.15,sm&&sm.pH.toFixed(2));
 ok('strącanie: co najmniej 8 reakcji',precipitations().length>=8,precipitations().length);
 ok('predict: Fe(OH)₃ + NaOH → brak reakcji',predict('Fe(OH)3','NaOH').ok===false);ok('predict: Al(OH)₃ + NaOH → reakcja',predict('Al(OH)3','NaOH').ok===true);
 return{ok:t.every(x=>x[1]),tests:t}}
C.HYDROXIDES={version:'1.0',get,list,cations,atoms,pretty:pf,ion,build,check,solubility:sol,dissociation,obtain,neutralEq,saltFormula,predict,REAGENTS,ACIDS,neutral,curve,heat,SOLHEAT,precipitations,KSP,satpH,eq:eqText,audit};
})();

;


(function(){
const C=window.CHE=window.CHE||{},D=C.DATA=C.DATA||{};
const CAT=['Na','K','NH4','Mg','Ca','Ba','Al','Zn','Mn','Fe2','Fe3','Ni','Cu','Ag','Pb','Sn'];
const CATN={Na:'Na⁺',K:'K⁺',NH4:'NH₄⁺',Mg:'Mg²⁺',Ca:'Ca²⁺',Ba:'Ba²⁺',Al:'Al³⁺',Zn:'Zn²⁺',Mn:'Mn²⁺',Fe2:'Fe²⁺',Fe3:'Fe³⁺',Ni:'Ni²⁺',Cu:'Cu²⁺',Ag:'Ag⁺',Pb:'Pb²⁺',Sn:'Sn²⁺'};
const AN={OH:{q:-1,n:'OH⁻',name:'wodorotlenek'},Cl:{q:-1,n:'Cl⁻',name:'chlorek'},Br:{q:-1,n:'Br⁻',name:'bromek'},I:{q:-1,n:'I⁻',name:'jodek'},F:{q:-1,n:'F⁻',name:'fluorek'},NO3:{q:-1,n:'NO₃⁻',name:'azotan(V)'},CH3COO:{q:-1,n:'CH₃COO⁻',name:'octan'},
 S:{q:-2,n:'S²⁻',name:'siarczek'},SO3:{q:-2,n:'SO₃²⁻',name:'siarczan(IV)'},SO4:{q:-2,n:'SO₄²⁻',name:'siarczan(VI)'},CO3:{q:-2,n:'CO₃²⁻',name:'węglan'},SiO3:{q:-2,n:'SiO₃²⁻',name:'krzemian'},PO4:{q:-3,n:'PO₄³⁻',name:'fosforan(V)'},HCO3:{q:-1,n:'HCO₃⁻',name:'wodorowęglan'},HSO4:{q:-1,n:'HSO₄⁻',name:'wodorosiarczan(VI)'}};
 
const T={
 OH:    'R R R N T R N N N N N N N — N N',
 Cl:    'R R R R R R R R R R R R R N T R',
 Br:    'R R R R R R R R R R R R R N T R',
 I:     'R R R R R R R R R R — R — N N R',
 NO3:   'R R R R R R R R R R R R R R R —',
 CH3COO:'R R R R R R R R R R R R R T R —',
 SO4:   'R R R R T N R R R R R R R T N R',
 SO3:   'R R R T N N — N N N — N — N N —',
 CO3:   'R R R N N N — N N N — N N N N —',
 PO4:   'R R R N N N N N N N N N N N N N',
 S:     'R R R — — R — N N N — N N N N N',
 SiO3:  'R R — N N N N N N N — N N N N —',
 F:     'R R R N N T T T T T T T T R T R',
 HCO3:  'R R R R R R — — — R — — — — — —'
};
const TAB={};Object.keys(T).forEach(a=>{const v=T[a].trim().split(/\s+/);TAB[a]={};CAT.forEach((c,i)=>TAB[a][c]=v[i])});
D.SOLUBILITY_TABLE={version:'1.0',temperatureC:20,legend:{R:'dobrze rozpuszczalny (> 1 g / 100 g H₂O)',T:'trudno rozpuszczalny (0,1–1 g)',N:'praktycznie nierozpuszczalny (< 0,1 g)','—':'nie istnieje w roztworze wodnym / rozkłada się'},
 cations:CAT.map(c=>({id:c,ion:CATN[c]})),anions:Object.keys(T).map(a=>({id:a,ion:AN[a].n,name:AN[a].name})),table:TAB,
 source:'szkolna tabela rozpuszczalności (20 °C) — dane edukacyjne; F⁻ i SiO₃²⁻ orientacyjnie',status:'EDUCATIONAL'};
 
const ANS=Object.keys(AN).sort((a,b)=>b.length-a.length);
const SUB='₀₁₂₃₄₅₆₇₈₉',pf=s=>String(s).replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,c=>SUB[c]));
const SUP=q=>{const a=Math.abs(q),d=a>1?String(a).replace(/\d/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[c]):'';return d+(q>0?'⁺':'⁻')};
function parseSalt(f){f=String(f).replace(/\s/g,'');const ma=f.match(/^CH3COO(NH4|[A-Z][a-z]?)$/);if(ma)return{cat:ma[1],cid:ma[1],catN:1,an:'CH3COO',anN:1,qc:1};
 let m=f.match(/^\(CH3COO\)(\d)([A-Z][a-z]?)$/);if(m){const q=+m[1];return{cat:m[2],cid:m[2]==='Fe'?(q===3?'Fe3':'Fe2'):m[2],catN:1,an:'CH3COO',anN:q,qc:q}}
 m=f.match(/^(NH4|\(NH4\)\d|[A-Z][a-z]?)(\d*)(.*)$/);if(!m)return null;let cat=m[1],catN=+(m[2]||1),rest=m[3];
 if(cat.startsWith('(NH4)')){catN=+cat.slice(5);cat='NH4'}
 if(!rest)return null;let an=null,anN=1;
 const pm=rest.match(/^\(([A-Za-z0-9]+)\)(\d+)$/);if(pm){an=pm[1];anN=+pm[2]}else if(AN[rest]){an=rest;anN=1}else{const k=rest.match(/^(.*?)(\d+)$/);if(k&&AN[k[1]]){an=k[1];anN=+k[2]}}
 if(!AN[an])return null;const qc=-AN[an].q*anN/catN;if(!(qc>0)||qc%1)return null;
 let cid=cat==='Fe'?(qc===3?'Fe3':'Fe2'):cat;return{cat,cid,catN,an,anN,qc}}
function solubility(f){const p=parseSalt(f);if(!p)return null;const row=TAB[p.an];return row&&row[p.cid]!=null?{...p,s:row[p.cid]}:{...p,s:null}}
 
const STRONG_BASES=['NaOH','KOH','Ba(OH)2','Ca(OH)2','LiOH'];
function species(f){const A=D.ACID_SYSTEMS||{},S=D.SUBSTANCES||{};f=String(f);
 if(f==='H2O')return{kind:'mol',state:'l',ions:null};
 const sub=Object.values(S).find(x=>x&&x.formula===f)||S[f];
 const acid=A[f]||Object.values(A).find(a=>String(a.formula).replace(/[₀-₉]/g,c=>SUB.indexOf(c))===f);
 if(acid){if(acid.strong||acid.strongFirst){if(f==='H2SO4')return{kind:'ions',ions:[[2,'H⁺'],[1,'SO₄²⁻']],note:'mocny kwas (szkolnie: dysocjacja całkowita)'};return{kind:'ions',ions:[[1,'H⁺'],[1,acid.anion||(AN[f.slice(1)]||{}).n||f.slice(1)+'⁻']],note:'mocny kwas'}}
  return{kind:'mol',state:'aq',ions:null,note:'słaby kwas — zapis cząsteczkowy'}}
 if(/^(H2|O2|N2|Cl2|CO2|SO2|NO2|NO|NH3|H2S|CH4)$/.test(f))return{kind:'mol',state:f==='NH3'||f==='CO2'||f==='SO2'?'g':'g',ions:null,note:'gaz'};
 if(/^[A-Z][a-z]?$/.test(f))return{kind:'mol',state:'s',ions:null,note:'pierwiastek'};
 if(/^[A-Z][a-z]?\d*O\d*$/.test(f)&&f!=='H2O')return{kind:'mol',state:'s',ions:null,note:'tlenek'};
 const p=solubility(f);if(p&&p.s){const ion=[[p.catN,(CATN[p.cid]||p.cat+SUP(p.qc))],[p.anN,AN[p.an].n]];
  if(p.s==='R'||(p.s==='T'&&STRONG_BASES.indexOf(f)>=0&&p.an==='OH'))return{kind:'ions',ions:ion,sol:p.s,note:p.s==='T'?'słabo rozpuszczalna zasada — w roztworze zapis jonowy':''};
  if(p.s==='N'||p.s==='T')return{kind:'mol',state:'s',ions:null,sol:p.s,note:p.s==='N'?'osad (nierozpuszczalny)':'osad (trudno rozpuszczalny)'};
  return{kind:'mol',state:'?',ions:null,sol:p.s,note:'nie istnieje w roztworze'}}
 return{kind:'mol',state:sub&&sub.state||'?',ions:null,note:'brak danych o dysocjacji'}}
 
function side(list,arrowSide){const terms=[];list.forEach(x=>{const sp=species(x.formula);if(sp.kind==='ions')sp.ions.forEach(io=>terms.push({c:io[0]*x.coef,t:io[1],ion:true}));else terms.push({c:x.coef,t:pf(x.formula)+(sp.state==='s'&&arrowSide==='p'&&sp.note!=='pierwiastek'?'↓':(sp.state==='g'&&arrowSide==='p')?'↑':''),base:pf(x.formula),ion:false,note:sp.note})});return terms}
const fmtT=ts=>ts.map(t=>(t.c>1?t.c+' ':'')+t.t).join(' + ');
function equations(rid){const R=C.REACTION,r=R&&R.get?R.get(rid):null;if(!r)return null;const L=side(r.reactants,'r'),P=side(r.products,'p');
 const key=t=>t.ion?t.t:t.base;const mapL={},mapP={};L.forEach(t=>mapL[key(t)]=(mapL[key(t)]||0)+t.c);P.forEach(t=>mapP[key(t)]=(mapP[key(t)]||0)+t.c);
 const spect=[];Object.keys(mapL).forEach(k=>{if(mapP[k]&&L.find(t=>key(t)===k).ion){const m=Math.min(mapL[k],mapP[k]);spect.push([m,k])}});
 const cut=(ts,mp)=>{const left={};spect.forEach(s=>left[s[1]]=s[0]);return ts.map(t=>{const k=key(t);if(left[k]){const d=Math.min(left[k],t.c);left[k]-=d;return {...t,c:t.c-d}}return t}).filter(t=>t.c>0)};
 let nl=cut(L),np=cut(P);const g=[...nl,...np].map(t=>t.c).reduce((a,b)=>{while(b){[a,b]=[b,a%b]}return a},0)||1;if(g>1){nl=nl.map(t=>({...t,c:t.c/g}));np=np.map(t=>({...t,c:t.c/g}))}
 const mol=R.equation(rid).replace(/->/g,'→');
  
 const ionic=L.some(t=>t.ion)||P.some(t=>t.ion),NA='nie dotyczy — reakcja bez udziału jonów w roztworze';
 if(!ionic)return{id:rid,ionic:false,molecular:pf(mol),full:NA,net:NA,spectators:[],notes:[...L,...P].filter(t=>t.note).map(t=>t.base+': '+t.note)};
 return{id:rid,ionic:true,molecular:pf(mol),full:fmtT(L)+' → '+fmtT(P),net:nl.length&&np.length?fmtT(nl)+' → '+fmtT(np):'brak (wszystkie jony są obserwatorami — reakcja nie zachodzi)',spectators:spect.map(s=>(s[0]>1?s[0]+' ':'')+s[1]),notes:[...L,...P].filter(t=>t.note).map(t=>t.base+': '+t.note)}}
const GEN={Na:'sodu',K:'potasu',NH4:'amonu',Mg:'magnezu',Ca:'wapnia',Ba:'baru',Al:'glinu',Zn:'cynku',Mn:'manganu(II)',Fe2:'żelaza(II)',Fe3:'żelaza(III)',Ni:'niklu(II)',Cu:'miedzi(II)',Ag:'srebra',Pb:'ołowiu(II)',Sn:'cyny(II)'};
const QC={Na:1,K:1,NH4:1,Mg:2,Ca:2,Ba:2,Al:3,Zn:2,Mn:2,Fe2:2,Fe3:3,Ni:2,Cu:2,Ag:1,Pb:2,Sn:2};
function compound(cid,an){const qc=QC[cid],qa=-AN[an].q;if(!qc)return null;const g=(a,b)=>b?g(b,a%b):a,k=g(qc,qa),nc=qa/k,na=qc/k,sym=/^Fe[23]$/.test(cid)?'Fe':cid,poly=an.length>1&&an!=='OH'?true:an==='OH';
 const cs=(sym==='NH4'&&nc>1?'(NH4)':sym)+(nc>1?nc:''),mono=/^(Cl|Br|I|F|S)$/.test(an),as=an==='CH3COO'?null:((na>1&&!mono)?'('+an+')'+na:an+(na>1?na:''));
 const f=an==='CH3COO'?(na>1?'(CH3COO)'+na+sym:'CH3COO'+sym):cs+as;const name=AN[an].name+' '+GEN[cid];return{formula:f,pretty:pf(f),name,sol:TAB[an]&&TAB[an][cid]}}
 
const STRONGB=['Na','K','Ca','Ba','Li'],ANACID={Cl:'HCl',Br:'HBr',I:'HI',NO3:'HNO3',SO4:'H2SO4',CH3COO:'CH3COOH',CO3:'H2CO3',HCO3:'H2CO3',PO4:'H3PO4',S:'H2S',SO3:'H2SO3',F:'HF',SiO3:'H2SiO3'};
function saltReaction(f){const p=parseSalt(f);if(!p||p.an==='OH')return null;const A=D.ACID_SYSTEMS||{},a=A[ANACID[p.an]],strongA=!!(a&&(a.strong||a.strongFirst))||p.an==='SO4',strongB=STRONGB.indexOf(p.cid)>=0;
 const r=strongA&&strongB?'obojętny':strongA?'kwasowy':strongB?'zasadowy':'zależy od mocy kwasu i zasady';
 const eq=strongA&&strongB?'brak hydrolizy':strongA?(p.cid==='NH4'?'NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺':(CATN[p.cid]||p.cat)+' + 2 H₂O ⇌ '+(p.cid==='Fe2'||p.cid==='Fe3'?'Fe':p.cid)+'OH'+(p.qc-1>1?SUP(p.qc-1):'⁺')+' + H₃O⁺'):strongB?(AN[p.an].n+' + H₂O ⇌ '+({CO3:'HCO₃⁻',CH3COO:'CH₃COOH',PO4:'HPO₄²⁻',S:'HS⁻',SO3:'HSO₃⁻',F:'HF',HCO3:'H₂CO₃',SiO3:'HSiO₃⁻'}[p.an]||'H'+p.an)+' + OH⁻'):'hydrolizują oba jony';
 return{formula:f,odczyn:r,equation:eq,cationFromStrongBase:strongB,anionFromStrongAcid:strongA}}
C.IONIC={version:'1.1',saltReaction,compound,cationName:c=>GEN[c],table:D.SOLUBILITY_TABLE,solubility,species,equations,parseSalt,
 explain:f=>{const s=solubility(f);return s&&s.s?pf(f)+': '+(D.SOLUBILITY_TABLE.legend[s.s]||s.s)+' (kation '+(CATN[s.cid]||s.cat)+', anion '+AN[s.an].n+')':null}};
})();

;
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function HY(){return C.HYDROXIDES}function G(){return C.LAB&&C.LAB.GFX}function D(){return C.DATA||{}}
function btn(bar,t,f,cls){var b=el('button',cls||null,t);b.type='button';b.onclick=f;bar.appendChild(b);return b}
function seg(bar,items,cur,f){var bs=[];items.forEach(function(it){var b=btn(bar,it[1],function(){bs.forEach(function(q){q.classList.toggle('on',q===b)});f(it[0])});if(it[0]===cur)b.classList.add('on');bs.push(b)});return bs}
function hex(a){return'#'+a.slice(0,3).map(function(v){return(Math.max(0,Math.min(255,v|0))).toString(16).padStart(2,'0')}).join('')}
function rgbCss(a){return a?'rgb('+a.map(function(v){return v|0}).join(',')+')':'#e2e8f0'}
function ind(id,pH){try{return G().colors.at(id,Math.max(0,Math.min(14,pH)))}catch(_){return null}}
function fmt(v,d){if(!isFinite(v))return'—';return(Math.round(v*Math.pow(10,d))/Math.pow(10,d)).toString().replace('.',',')}
function card(t,b,col){return'<div style="border:1px solid var(--border,#e2e8f0);border-left:4px solid '+(col||'var(--accent,#0d6868)')+';border-radius:10px;padding:8px 12px;margin:6px 0;background:var(--surface-soft,#f6f8fa)"><b>'+t+'</b><div style="margin-top:3px">'+b+'</div></div>'}
function eqHtml(e){return e?'<div style="font:700 15px ui-monospace,Consolas,monospace;margin:4px 0;overflow-wrap:anywhere">'+e+'</div>':''}
function grid(host,min){var g=el('div');g.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,'+(min||300)+'px),1fr));gap:12px;align-items:start';host.appendChild(g);return g}
var SOLC={R:'#16a34a',T:'#d97706',N:'#dc2626','—':'#64748b'};var SOLS={R:'✓',T:'~',N:'×','—':'!'};
var LVN={E8:1,AMB:2,LO:3};
function pptId(r){return'ppt-'+r.metal.toLowerCase()+'-oh-'+r.q}
function catCol(r){var k={Cu:'ion-cu2',Fe:r.q===3?'ion-fe3':'ion-fe2',Ni:'ion-ni2',Mn:'ion-mn2',Cr:'ion-cr3'}[r.metal];var a=null;try{a=k&&G()&&G().colors.at(k)}catch(_){}return a?hex(a):'#64748b'}

function modelSVG(r,n,mode){var W=420,H=Math.max(150,60+n*44),cx=70,cy=H/2,M=r.metal,s='<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;max-width:460px;height:auto;display:block;margin:auto" role="img" aria-label="model wodorotlenku">';
 var txt=function(x,y,t,sz,col,w){return'<text x="'+x+'" y="'+y+'" font-size="'+(sz||18)+'" font-weight="'+(w||800)+'" text-anchor="middle" dominant-baseline="middle" fill="'+(col||'currentColor')+'">'+t+'</text>'};
 if(mode==='A'){s+=txt(cx,cy,M,24);for(var i=0;i<n;i++){var y=n===1?cy:30+i*(H-60)/Math.max(1,n-1);s+='<line x1="'+(cx+18)+'" y1="'+cy+'" x2="'+(cx+118)+'" y2="'+y+'" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>'+txt(cx+135,y,'O',20,'#dc2626')+'<line x1="'+(cx+150)+'" y1="'+y+'" x2="'+(cx+196)+'" y2="'+y+'" stroke="currentColor" stroke-width="2.5"/>'+txt(cx+210,y,'H',20,'var(--c-new,#0f766e)')}
  s+='<text x="8" y="'+(H-8)+'" font-size="11" font-weight="600" fill="#64748b">- - - oddziaływanie jonowe M···O    —— wiązanie O–H</text>'}
 else if(mode==='B'){cx=W/2-40;s+=txt(cx,cy,M+'<tspan font-size="12" dy="-8">'+(r.q>1?r.q:'')+'+</tspan>',24);for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/Math.max(1,n)+(n===2?Math.PI/2:0),R=Math.min(H/2-22,110),x=cx+Math.cos(a)*R,yy=cy+Math.sin(a)*R;
   s+='<line x1="'+(cx+Math.cos(a)*24)+'" y1="'+(cy+Math.sin(a)*24)+'" x2="'+(x-Math.cos(a)*26)+'" y2="'+(yy-Math.sin(a)*14)+'" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/><rect x="'+(x-26)+'" y="'+(yy-14)+'" width="52" height="28" rx="8" fill="#dbeafe" stroke="#2563eb"/>'+txt(x,yy,'OH⁻',14,'#1e3a8a')}
  s+=txt(W-70,H-14,'blok OH⁻ = jedna całość',11,'#64748b',600)}
 else{s+='<circle cx="'+cx+'" cy="'+cy+'" r="28" fill="#94a3b8"/>'+txt(cx,cy,r.cation,15,'#fff');for(var k=0;k<n;k++){var x2=170+(k%4)*58,y2=n<=4?cy:cy-24+Math.floor(k/4)*48;s+='<circle cx="'+x2+'" cy="'+y2+'" r="21" fill="#2563eb"/>'+txt(x2,y2,'OH⁻',13,'#fff')}
  var sum=r.q-n;s+=txt(W/2,H-14,'(+'+r.q+') + '+n+'·(−1) = '+(sum>0?'+':'')+sum+(sum===0?'  ✓ obojętny':'  ✗'),13,sum===0?'#16a34a':'#dc2626',800)}
 return s+'</svg>'}
V.define('n02-wzory-v01',{title:'Wzór wodorotlenku: kation + OH⁻ — bilans ładunków, nawias, modele',tag:'E8',
 hint:'Wybierz kation i dokładaj grupy OH⁻, aż suma ładunków wyniesie zero. Przełączaj model: szkolny (A), przestrzenny (B) lub jony. Wpisz wzór — silnik sprawdzi, czy nawias i liczba grup są poprawne.',
 foot:'Model: CHE.HYDROXIDES.build / check (zapis składu M(OH)n — to nie wzór strukturalny cząsteczki; w krysztale jest sieć jonów).',
 build:function(host){host.innerHTML='';var H=HY(),cats=H.cations(),st={r:H.get('Ca(OH)2'),n:1,mode:'A'};
  var bar=el('div','r','<b>Kation:</b> ');host.appendChild(bar);var cb=[];cats.forEach(function(c){var b=btn(bar,c.ion,function(){st.r=H.get(c.f);st.n=1;cb.forEach(function(q){q.classList.toggle('on',q===b)});draw()});if(c.f===st.r.f)b.classList.add('on');cb.push(b)});
  var b2=el('div','r');host.appendChild(b2);btn(b2,'− OH⁻',function(){if(st.n>1){st.n--;draw()}});btn(b2,'+ OH⁻',function(){if(st.n<6){st.n++;draw()}});btn(b2,'dobierz automatycznie',function(){st.n=st.r.q;draw()});
  var sp=el('span',null,' <b style="margin-left:12px">Model:</b> ');b2.appendChild(sp);seg(b2,[['A','A — szkolny'],['B','B — przestrzenny'],['ions','jony']],'A',function(m){st.mode=m;draw()});
  var g=grid(host,300),L=el('div'),R=el('div');g.append(L,R);
  var inp=el('div','r','<b>Sprawdź swój wzór:</b> ');var ii=el('input');ii.placeholder='np. CaOH2 albo Ca(OH)2';ii.style.cssText='font:600 15px ui-monospace,Consolas,monospace;padding:5px 8px;border-radius:8px;border:1px solid var(--border,#cdd5dd);min-width:160px';inp.appendChild(ii);var out=el('div');
  btn(inp,'Sprawdź',function(){var c=H.check(ii.value,st.r.metal,st.r.q);out.innerHTML=card(c.ok?'✓ Dobrze':'✗ Popraw',c.msg,c.ok?'#16a34a':'#dc2626')});host.append(inp,out);
  var br=el('div');host.appendChild(br);
  function bracketDemo(){var b=H.build(st.r.metal,st.r.q);if(!b.bracket){br.innerHTML=card('Nawias','Jedna grupa OH⁻ → bez nawiasu: <b>'+b.pretty+'</b>.','#64748b');return}
   var wrong=st.r.metal+'OH'+st.r.q,wa=H.atoms(wrong),ra=H.atoms(b.f),f=function(a){return Object.keys(a).map(function(k){return a[k]+' '+k}).join(', ')};
   br.innerHTML=card('Dlaczego nawias? (4 kroki)','<ol style="margin:4px 0 0 18px"><li>Błędny zapis: <b style="color:var(--c-error,#b83a45)">'+H.pretty(wrong)+'</b> — indeks '+st.r.q+' stoi tylko przy H.</li><li>Skład zapisu błędnego: '+f(wa)+' → tylko 1 grupa OH i nadmiar H.</li><li>Poprawnie: <b style="color:var(--c-basic,#2e7d4f)">'+b.pretty+'</b> — nawias = „pudełko” na grupę.</li><li>Skład: '+f(ra)+' → '+st.r.q+' całe grupy OH⁻, ładunki: '+b.charge+'.</li></ol>','#d97706')}
  function draw(){var r=st.r,n=st.n,ok=n===r.q,f=r.metal+(n>1?'(OH)'+n:'OH');
   var bars='<div style="display:flex;gap:4px;flex-wrap:wrap;margin:6px 0">'+Array(r.q+1).join('<span style="width:26px;height:26px;border-radius:6px;background:#dc2626;color:#fff;font:800 16px system-ui;display:inline-flex;align-items:center;justify-content:center">+</span>')+'<span style="width:14px"></span>'+Array(n+1).join('<span style="width:26px;height:26px;border-radius:6px;background:#2563eb;color:#fff;font:800 16px system-ui;display:inline-flex;align-items:center;justify-content:center">−</span>')+'</div>';
   L.innerHTML=modelSVG(r,n,st.mode)+'<div style="text-align:center;font:800 28px ui-monospace,Consolas,monospace;margin-top:4px;color:'+(ok?'#16a34a':'#dc2626')+'">'+H.pretty(f)+'</div>';
   var b=H.build(r.metal,r.q);R.innerHTML=card('Bilans ładunków',bars+'(+'+r.q+') + '+n+'·(−1) = <b>'+(r.q-n>0?'+':'')+(r.q-n)+'</b> '+(ok?'✓ związek obojętny':r.q>n?'→ dołóż OH⁻':'→ za dużo OH⁻'),ok?'#16a34a':'#dc2626')
    +(ok?card(b.pretty+' — '+b.name,'<ol style="margin:4px 0 0 18px">'+b.steps.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ol>'):card('Wskazówka','Kation '+r.cation+' potrzebuje tylu grup OH⁻, ile wynosi wartość jego ładunku.','#64748b'));bracketDemo()}
  draw()}});


var MTYPES=[['tlenek zasadowy + woda','1. tlenek + woda'],['metal + woda','2. metal aktywny + woda'],['strącanie wodorotlenku','3. sól + zasada (strącanie)']];
function rxOfType(t){var RD=D().REACTION_DATA||{},R=D().REACTIONS||{},H=HY();return Object.keys(RD).filter(function(k){if(!R[k])return false;var ty=RD[k].type;if(ty===t)return R[k].products.some(function(p){return H.get(p.formula)||p.formula==='Ag2O'});if(t==='metal + woda'&&k==='naH2o')return true;if(t==='strącanie wodorotlenku'&&/^(cuso4Naoh|fecl3Naoh)$/.test(k))return true;return false})}
function specFor(k){var g=G();if(!g||!g.rx)return null;if(g.rx.get(k))return k;var l=g.rx.list(function(sp){return sp.rxKey===k});return l[0]||null}
function beaker(box,k,h){box.innerHTML='';var g=G();k=specFor(k)||k;if(!g||!g.rx||!g.rx.get(k)){box.innerHTML='<div class="note">Brak animacji dla tej reakcji — opis i równanie poniżej.</div>';return null}var m=g.rx.mount(box,k,{height:h||240,dur:6,auto:true});var b=el('div','r');var x=btn(b,'▶ powtórz',function(){m.play()});box.appendChild(b);return m}
function rxCard(k){var H=HY(),d=(D().REACTION_DATA||{})[k]||{},J=null;try{J=C.IONIC&&C.IONIC.equations(k)}catch(_){}
 return eqHtml(H.eq(k))+(J&&J.ionic&&J.net?'<div><b>Jonowo skrócone:</b> '+J.net+'</div>':'')+'<div class="note" style="margin-top:6px"><b>Warunki:</b> '+(d.conditions||'—')+'<br><b>Obserwacja:</b> '+(d.observation||'—')+(d.safety&&d.safety.length?'<br><b>BHP:</b> '+d.safety.join(' '):'')+(d.note?'<br><small>'+d.note+'</small>':'')+'<br><small>poziom: '+(d.level||'E8')+' · klucz silnika: '+k+'</small></div>'}
V.define('n02-przeglad-v01',{title:'Wodorotlenki — rozpuszczalność, barwa osadu, odczyn i otrzymywanie',tag:'E8',
 hint:'Kolor ramki = rozpuszczalność (z tabeli rozpuszczalności silnika), kropka = barwa substancji / osadu. Kliknij kafelek: cztery pytania (co to jest, czy się rozpuszcza, co jest w roztworze, jaki odczyn) i które metody otrzymywania działają.',
 foot:'Dane: CHE.DATA.HYDROXIDES + D.SOLUBILITY_TABLE (OH⁻) · równania: D.REACTIONS · rozpuszczalności g/100 g — orientacyjne (20 °C).',
 build:function(host){host.innerHTML='';var H=HY(),st={lv:1,f:'NaOH'};
  var bar=el('div','r');host.appendChild(bar);seg(bar,[[1,'E8'],[2,'+ ambitne'],[3,'+ liceum']],1,function(v){st.lv=v;tiles()});
  bar.appendChild(el('span',null,'<span style="margin-left:12px;font:600 12px system-ui">'+['R','T','N'].map(function(s){return'<span style="color:'+SOLC[s]+';margin-right:10px">'+SOLS[s]+' '+{R:'dobrze rozpuszczalny',T:'trudno',N:'praktycznie nierozpuszczalny (osad ↓)'}[s]+'</span>'}).join('')+'</span>'));
  var tg=el('div');tg.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(124px,1fr));gap:8px;margin:8px 0';host.appendChild(tg);var det=el('div');host.appendChild(det);
  function tiles(){tg.innerHTML='';H.list(function(r){return(LVN[r.level]||1)<=st.lv}).forEach(function(r){var s=H.solubility(r.f),b=el('button');b.type='button';
   b.style.cssText='display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;white-space:normal;height:auto;min-height:0;overflow:hidden;text-align:left;padding:8px;border-radius:10px;border:2px solid '+(SOLC[s.s]||'#64748b')+';background:var(--surface-soft,#f6f8fa);cursor:pointer;color:inherit;font:inherit'+(r.f===st.f?';box-shadow:0 0 0 3px var(--accent-soft,#99f6e4)':'');
   b.innerHTML='<b style="display:block;font:800 16px Inter,system-ui,sans-serif;white-space:nowrap">'+r.pretty+'</b><small style="display:flex;align-items:center;gap:5px;margin-top:3px;white-space:nowrap"><span style="flex:none;width:12px;height:12px;border-radius:50%;background:'+r.hex+';border:1px solid #94a3b8"></span>'+r.cation+' · <b style="color:'+(SOLC[s.s]||'')+'">'+(SOLS[s.s]||'?')+'</b>'+(r.amph?' · amf.':'')+'</small>';
   b.onclick=function(){st.f=r.f;tiles()};tg.appendChild(b)});show()}
  function show(){var r=H.get(st.f),s=H.solubility(r.f),d=H.dissociation(r.f),ob=H.obtain(r.f);
   det.innerHTML='<h3 style="margin:6px 0">'+r.pretty+' — '+r.name+'</h3>'+'<div class="table-wrap"><table><tbody>'
    +'<tr><th>Co to jest?</th><td>kation '+r.cation+' + '+r.q+' × OH⁻ → '+r.pretty+(r.amph?' · <b>amfoteryczny</b> (reaguje z kwasami i z mocnymi zasadami)':'')+'</td></tr>'
    +'<tr><th>Czy się rozpuszcza?</th><td><b style="color:'+(SOLC[s.s]||'')+'">'+s.label+'</b>'+(s.g100!=null?' (ok. '+fmt(s.g100,s.g100<0.01?4:s.g100<1?3:1)+' g / 100 g wody)':'')+' <small>źródło: '+s.source+'</small></td></tr>'
    +'<tr><th>Co jest w roztworze?</th><td>'+d.eq+'<br><small>'+d.note+'</small></td></tr>'
    +'<tr><th>Jaki odczyn?</th><td>'+s.odczyn+(s.ph?' (pH ≈ '+fmt(s.ph,1)+')':'')+(s.base?' — to <b>zasada</b> (roztwór)':'')+'</td></tr>'
    +'<tr><th>Barwa</th><td><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:'+r.hex+';border:1px solid #94a3b8;vertical-align:-2px"></span> '+r.color+'</td></tr>'
    +'</tbody></table></div>'+'<h4 style="margin:10px 0 4px">Jak go otrzymać?</h4>'+ob.map(function(o){return card((o.ok?'✓ ':'✗ ')+o.title,o.ok?eqHtml(o.eq)+'<small>'+o.cond+(o.obs?' · obserwacja: '+o.obs:'')+(o.safety?' · BHP: '+o.safety:'')+'</small>':'<small>'+o.why+'</small>',o.ok?'#16a34a':'#9aa6b6')}).join('')
    +(r.notes.length?card('Warto wiedzieć','<ul style="margin:2px 0 0 18px">'+r.notes.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul>','#64748b'):'')}
  tiles()}});
V.define('n02-otrzymywanie-v01',{title:'Otrzymywanie wodorotlenków — trzy metody i mapa przemian',tag:'E8',
 hint:'Wybierz metodę i reakcję — zobaczysz doświadczenie w zlewce, równanie i warunki. W trybie „Jak otrzymać…?” silnik sprawdza dla wybranego wodorotlenku, które metody działają, a które nie — i dlaczego.',
 foot:'Równania: D.REACTIONS (gen_hydroxides.py / gen_oxides.py) · animacja: GFX.rx · reguły: CHE.HYDROXIDES.obtain.',
 build:function(host){host.innerHTML='';var H=HY(),st={mode:'m',t:MTYPES[0][0],k:null,f:'Ca(OH)2'};
  var top=el('div','r');host.appendChild(top);seg(top,[['m','Metody'],['f','Jak otrzymać…?'],['map','Mapa przemian']],'m',function(v){st.mode=v;render()});
  var bar=el('div');host.appendChild(bar);var area=el('div');host.appendChild(area);
  function render(){bar.innerHTML='';area.innerHTML='';
   if(st.mode==='m'){var b1=el('div','r');bar.appendChild(b1);seg(b1,MTYPES,st.t,function(t){st.t=t;st.k=null;render()});var ks=rxOfType(st.t);if(!st.k||ks.indexOf(st.k)<0)st.k=ks[0];var b2=el('div','r');bar.appendChild(b2);
    var bs=[];ks.forEach(function(k){var x=btn(b2,H.eq(k).split(' → ')[0],function(){st.k=k;bs.forEach(function(q){q.classList.toggle('on',q===x)});show()});if(k===st.k)x.classList.add('on');bs.push(x)});show()}
   else if(st.mode==='f'){var b3=el('div','r','<b>Wodorotlenek:</b> ');bar.appendChild(b3);var bb=[];H.list(function(r){return r.level!=='LO'&&r.metal!=='NH4'}).forEach(function(r){var x=btn(b3,r.pretty,function(){st.f=r.f;bb.forEach(function(q){q.classList.toggle('on',q===x)});how()});if(r.f===st.f)x.classList.add('on');bb.push(x)});how()}
   else mapa()}
  function show(){area.innerHTML='';var g=grid(area,280),l=el('div'),r=el('div');g.append(l,r);beaker(l,st.k);r.innerHTML=rxCard(st.k)+(st.t==='tlenek zasadowy + woda'?card('Uwaga','„Tlenek zasadowy” nie znaczy „reaguje z wodą”: CuO, FeO, Fe₂O₃ praktycznie nie reagują; MgO — bardzo powoli.','#d97706'):st.t==='metal + woda'?card('Uwaga','Tylko metale aktywne (litowce, Ca, Ba; Mg z gorącą wodą). Pokazy z Na, K — wyłącznie nauczyciel.','#d97706'):card('Kiedy działa?','Gdy powstający wodorotlenek jest trudno rozpuszczalny. NaOH czy KOH tak nie otrzymasz — są dobrze rozpuszczalne.','#d97706'))}
  function how(){var ob=H.obtain(st.f);area.innerHTML=ob.map(function(o){return card((o.ok?'✓ ':'✗ ')+o.title,o.ok?eqHtml(o.eq)+'<small>'+o.cond+'</small>':'<small>'+o.why+'</small>',o.ok?'#16a34a':'#9aa6b6')}).join('');var ok=ob.filter(function(o){return o.ok});if(ok.length){var bx=el('div');bx.style.maxWidth='420px';area.appendChild(bx);beaker(bx,ok[0].rx,220)}}
  function mapa(){var r=H.get(st.f)||H.get('Ca(OH)2'),M=r.metal,OXD=D().OXIDES||{},ox=Object.values(OXD).find(function(o){return o&&o.water&&o.water.rx===r.rx.oxide});
    
   if(!ox&&C.OXIDES&&r.q){var bo=C.OXIDES.build(M,r.q);ox=bo&&OXD[bo.formula]||null}
   var oxF=ox?(ox.f||ox.formula):null,RR=D().REACTIONS||{},kO2=oxF?Object.keys(RR).find(function(k){try{var x=C.REACTION.get(k),re=x.reactants.map(function(a){return a.formula}),pr=x.products.map(function(a){return a.formula});return re.length===2&&re.indexOf(M)>=0&&re.indexOf('O2')>=0&&pr.length===1&&pr[0]===oxF}catch(_){return false}}):null,
   oxWater=ox&&ox.water&&!ox.water.rx?'(z wodą: '+ox.water.text+' — wodorotlenek otrzymuje się z soli)':null,
   step=function(a,b,lab,k,why){return'<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0"><span class="chip" style="padding:4px 10px;border-radius:999px;border:1px solid var(--border,#cbd5e1);font-weight:800">'+a+'</span><span style="font:700 12px system-ui;color:'+(k?'#16a34a':'#94a3b8')+'">— '+lab+' →</span><span class="chip" style="padding:4px 10px;border-radius:999px;border:1px solid var(--border,#cbd5e1);font-weight:800">'+b+'</span>'+(k?'<small style="font-family:ui-monospace,monospace">'+H.eq(k)+'</small>':'<small>'+(why||'(nie zachodzi w warunkach szkolnych)')+'</small>')+'</div>'};
   var b3=el('div','r','<b>Dla:</b> ');bar.appendChild(b3);var bb=[];['NaOH','Ca(OH)2','Mg(OH)2','Cu(OH)2','Fe(OH)3','Al(OH)3'].forEach(function(f){var x=btn(b3,H.pretty(f),function(){st.f=f;render()});if(f===st.f)x.classList.add('on')});
   var neu=H.neutralEq(r.f,'HCl');area.innerHTML=card('Mapa przemian: '+r.pretty,step(M,oxF?H.pretty(oxF):'tlenek','+ O₂',kO2)+step(oxF?H.pretty(oxF):'tlenek',r.pretty,'+ H₂O',r.rx.oxide,oxWater)+step(M,r.pretty,'+ H₂O',r.rx.metal)+step('sól '+M,r.pretty+'↓','+ NaOH',r.rx.precip)+step(r.pretty,'sól + H₂O','+ kwas',neu&&neu.rx)+(neu&&!neu.rx?'<small style="font-family:ui-monospace,monospace">'+neu.eq+'</small>':'')+step(r.pretty,'tlenek + H₂O','ogrzewanie',r.rx.heat)+(r.amph?step(r.pretty,'jon kompleksowy','+ NaOH (nadmiar)',r.rx.base):''))+card('Zapamiętaj','wodorotlenek stoi między tlenkiem a solą: tlenek zasadowy + woda → wodorotlenek; wodorotlenek + kwas → sól + woda; sól + zasada → wodorotlenek↓ + sól.','#64748b')}
  render()}});
V.define('n02-stracanie-v01',{title:'Laboratorium jonowe — strącanie wodorotlenków (model cząsteczkowy)',tag:'E8',
 hint:'Kliknij sól — symulacja rusza od razu: wolne jony → zbliżanie (przyciąganie ładunków) → skupiska → zarodki → osad. Liczniki pokazują wolne jony i cząstki osadu. Po prawej: równanie cząsteczkowe i jonowe z silnika.',
 foot:'Ruch jonów: CHE.sim.ParticleSim (ruch cieplny, zderzenia, opadanie wg CHE.PHYS) · barwy osadów: CHE.COLORS · równania jonowe: CHE.IONIC · model dydaktyczny — rzeczywisty proces obejmuje formy pośrednie (hydroksokompleksy).',
 build:function(host){host.innerHTML='';var H=HY(),ks=H.precipitations(),st={k:ks.indexOf('fecl3Naoh')>=0?'fecl3Naoh':ks[0],T:25},sim=null;
  var bar=el('div','r');host.appendChild(bar);var bs=[];ks.forEach(function(k){var x=btn(bar,H.eq(k).split(' → ')[0],function(){st.k=k;bs.forEach(function(q){q.classList.toggle('on',q===x)});build()});if(k===st.k)x.classList.add('on');bs.push(x)});
  var g=grid(host,300),l=el('div'),r=el('div');g.append(l,r);var cv=el('canvas');cv.style.cssText='width:100%;height:300px;display:block;border-radius:12px;background:var(--surface-soft,#f6f8fa)';l.appendChild(cv);
  var cnt=el('div','r');l.appendChild(cnt);var ctl=el('div','r');l.appendChild(ctl);var pl=btn(ctl,'▶ start',function(){if(!sim)return;if(sim.running){sim.stop();pl.textContent='▶ start'}else{sim.start();pl.textContent='⏸ pauza'}});btn(ctl,'↺ od nowa',function(){build()});
  var tl=el('label',null,' T: ');var ts=el('input');ts.type='range';ts.min=5;ts.max=80;ts.value=25;ts.oninput=function(){st.T=+ts.value;tv.textContent=ts.value+' °C';if(sim&&sim.setT)sim.setT(st.T)};var tv=el('span',null,'25 °C');tl.append(ts,tv);ctl.appendChild(tl);
  function prodRow(k){var R=D().REACTIONS[k];var p=R.products.map(function(x){return H.get(x.formula)}).filter(Boolean)[0];return p||H.get('AgOH')}
  function build(){if(sim){try{sim.stop()}catch(_){}}var p=prodRow(st.k),col=null;try{var a=p.metal==='Ag'?[74,52,38]:G().colors.at(pptId(p));col=a?hex(a):p.hex}catch(_){col=p.hex}
   try{sim=new C.sim.ParticleSim({canvas:cv,T:st.T,config:{particles:[{type:'cation',count:6,r:14,color:catCol(p),label:p.cation,speed:1},{type:'oh',count:6*p.q,r:10,color:'#2563eb',label:'OH⁻',speed:1.2}],reaction:{cation:'cation',anion:'oh',ratio:p.q,product:p.f==='AgOH'?'Ag2O':p.f,color:col,pptId:pptId(p)}},
    onCounters:function(o){cnt.innerHTML='<b>wolne jony:</b> '+o.particles+' · <b>cząstki osadu:</b> '+o.clusters}})}catch(e){cnt.textContent='Symulacja niedostępna: '+e.message}
    
   pl.textContent='▶ start';var s0=sim;setTimeout(function(){if(sim===s0&&sim&&sim.start&&!sim.running){sim.start();pl.textContent=sim.running?'⏸ pauza':'▶ start'}},60);var J=null;try{J=C.IONIC.equations(st.k)}catch(_){}
   r.innerHTML=card('Równanie cząsteczkowe',eqHtml(H.eq(st.k)))+(J&&J.ionic?card('Równanie jonowe','<div><b>pełne:</b> '+J.full+'</div><div><b>skrócone:</b> '+J.net+'</div><div><small>jony widzowe: '+(J.spectators.join(', ')||'—')+'</small></div>','#2563eb'):'')
    +card('Co pokazuje model?','<ol style="margin:2px 0 0 18px"><li>Co widzę? — swobodne jony poruszają się w roztworze.</li><li>Co się dzieje? — '+p.cation+' przyciąga '+p.q+' × OH⁻ (ładunki przeciwne).</li><li>Skupiska rosną w zarodki, zarodki opadają jako osad ↓ (barwa: '+(p.metal==='Ag'?'brunatna — AgOH od razu rozkłada się do Ag₂O':p.color)+').</li><li>Sprawdzam: proporcja jonów 1 : '+p.q+', rozpuszczalność produktu (tabela), zapis jonowy.</li></ol>','#64748b')
    +card('Etapy pośrednie (rozszerzenie)','W rzeczywistości powstają najpierw formy pośrednie, np. Fe³⁺ → Fe(OH)²⁺ → Fe(OH)₂⁺ → Fe(OH)₃↓. Animacja jest modelem dydaktycznym, nie filmem trajektorii.','#9aa6b6')}
  build()}});
V.define('n02-zobojetnianie-v01',{title:'Zobojętnianie — licznik moli, pH, wskaźniki i jony H⁺ + OH⁻ → H₂O',tag:'E8',
 hint:'Ustaw zasadę i kwas, potem dolewaj kwas porcjami. Widzisz mole OH⁻ i H⁺, nadmiar, pH, barwę fenoloftaleiny i oranżu metylowego oraz jony w zlewce. Krzywa pH(V) pokazuje punkt równoważnikowy.',
 foot:'Bilans moli i pH: CHE.HYDROXIDES.neutral (mocna zasada + mocny kwas, Kw = 10⁻¹⁴, bez aktywności) · barwy: CHE.COLORS · jony: GFX.ions · równania: D.REACTIONS / CHE.IONIC.',
 build:function(host){host.innerHTML='';var H=HY(),o={base:'NaOH',acid:'HCl',cB:.1,VB:50,cA:.1,VA:0,step:5},ions=null,scale=1;
  var f1=el('div','r','<b>Zasada:</b> ');host.appendChild(f1);seg(f1,[['NaOH','NaOH'],['KOH','KOH'],['Ca(OH)2','Ca(OH)₂'],['Ba(OH)2','Ba(OH)₂']],o.base,function(v){o.base=v;if(v==='Ca(OH)2'&&o.cB>.02)o.cB=.02;reset()});
  f1.appendChild(el('b',null,' Kwas: '));seg(f1,[['HCl','HCl'],['HNO3','HNO₃'],['H2SO4','H₂SO₄']],o.acid,function(v){o.acid=v;reset()});
  var f2=el('div','r');host.appendChild(f2);function num(lab,key,min,max,stp){var w=el('label',null,lab+' ');var i=el('input');i.type='number';i.min=min;i.max=max;i.step=stp;i.value=o[key];i.style.width='72px';i.onchange=function(){o[key]=Math.max(min,Math.min(max,+i.value||min));i.value=o[key];reset()};w.appendChild(i);f2.appendChild(w);return i}
  var iB=num('c zasady (mol/dm³)','cB',.001,1,.01);num('V zasady (cm³)','VB',5,100,5);num('c kwasu (mol/dm³)','cA',.01,1,.01);num('porcja kwasu (cm³)','step',.5,20,.5);
  var g=grid(host,300),l=el('div'),r=el('div');g.append(l,r);var ib=el('div');l.appendChild(ib);var ctl=el('div','r');l.appendChild(ctl);
  btn(ctl,'+ dodaj porcję kwasu',function(){var before=H.neutral(o);o.VA=Math.round((o.VA+o.step)*100)/100;var after=H.neutral(o);if(ions)ions.add(Math.max(0,Math.round((after.nH-before.nH)*scale)));upd()});btn(ctl,'↺ od nowa',function(){reset()});
  var plot=el('div');l.appendChild(plot);
  function reset(){o.VA=0;iB.value=o.cB;var n0=H.neutral(o);scale=12/Math.max(1e-12,n0.nOH0);var r0=H.get(o.base);ib.innerHTML='';
   try{ions=G().ions.mount(ib,{mode:'neutral',height:240,nOH:12,cation:r0.cation,anion:H.ACIDS[o.acid].ion,auto:true})}catch(e){ib.textContent='GFX.ions: '+e.message;ions=null}upd()}
  function upd(){var n=H.neutral(o),php=ind('ind-fenoloftaleina',n.pH),om=ind('ind-oranz-metylowy',n.pH),un=ind('ind-uniwersalny',n.pH);if(ions&&un)ions.bg('rgba('+un.map(function(v){return v|0}).join(',')+',.18)');
   var neq=H.neutralEq(o.base,o.acid),J=null;try{J=neq.rx&&C.IONIC.equations(neq.rx)}catch(_){}
   r.innerHTML=card('Stan po dodaniu '+fmt(o.VA,2)+' cm³ kwasu','<div class="table-wrap"><table><tbody><tr><th>n(OH⁻) na początku</th><td>'+fmt(n.nOH0*1000,3)+' mmol</td></tr><tr><th>n(H⁺) dodane</th><td>'+fmt(n.nH*1000,3)+' mmol</td></tr><tr><th>powstało H₂O</th><td>'+fmt(n.water*1000,3)+' mmol</td></tr><tr><th>nadmiar</th><td>'+(n.excessOH>0?fmt(n.excessOH*1000,3)+' mmol OH⁻':n.excessH>0?fmt(n.excessH*1000,3)+' mmol H⁺':'0 — równoważnik')+'</td></tr><tr><th>pH</th><td><b>'+fmt(n.pH,2)+'</b> — '+n.state+'</td></tr><tr><th>V w punkcie równoważnikowym</th><td>'+fmt(n.Veq,2)+' cm³</td></tr></tbody></table></div>'
     +'<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px"><span><span style="display:inline-block;width:22px;height:22px;border-radius:6px;border:1px solid #9aa6b6;vertical-align:-6px;background:'+rgbCss(php)+'"></span> fenoloftaleina</span><span><span style="display:inline-block;width:22px;height:22px;border-radius:6px;border:1px solid #9aa6b6;vertical-align:-6px;background:'+rgbCss(om)+'"></span> oranż metylowy</span><span><span style="display:inline-block;width:22px;height:22px;border-radius:6px;border:1px solid #9aa6b6;vertical-align:-6px;background:'+rgbCss(un)+'"></span> wskaźnik uniwersalny</span></div>'+(n.warn?'<div class="note" style="margin-top:6px">Uwaga: '+n.warn+'</div>':''),n.excessOH>0?'#2563eb':n.excessH>0?'#dc2626':'#16a34a')
    +card('Równania',eqHtml(neq.eq)+(J&&J.ionic?'<div><b>jonowo pełne:</b> '+J.full+'</div><div><b>skrócone:</b> '+J.net+'</div>':'<div><b>skrócone:</b> H⁺ + OH⁻ → H₂O</div>')+(n.ppt?'<div class="note">Jednocześnie strącanie: '+H.pretty(n.ppt)+'↓ — roztwór mętnieje.</div>':''),'#64748b');
   var pts=H.curve(Object.assign({},o,{Vmax:Math.max(2*n.Veq,o.VA+o.step)}),90),Vm=pts[pts.length-1].V,W=420,Hh=170,X=function(v){return 34+v/Vm*(W-44)},Y=function(p){return 10+(14-p)/14*(Hh-34)};
   plot.innerHTML='<svg viewBox="0 0 '+W+' '+Hh+'" style="width:100%;max-width:520px;height:auto;display:block;margin-top:8px"><rect x="34" y="10" width="'+(W-44)+'" height="'+(Hh-34)+'" fill="none" stroke="#9aa6b6"/>'+[0,7,14].map(function(p){return'<text x="28" y="'+(Y(p)+4)+'" font-size="10" text-anchor="end" fill="#64748b">'+p+'</text><line x1="34" x2="'+(W-10)+'" y1="'+Y(p)+'" y2="'+Y(p)+'" stroke="#e5e9ee"/>'}).join('')
    +'<line x1="'+X(n.Veq)+'" x2="'+X(n.Veq)+'" y1="10" y2="'+(Hh-24)+'" stroke="#16a34a" stroke-dasharray="4 4"/><polyline fill="none" stroke="#2563eb" stroke-width="2.5" points="'+pts.map(function(p){return X(p.V).toFixed(1)+','+Y(p.pH).toFixed(1)}).join(' ')+'"/><circle cx="'+X(o.VA)+'" cy="'+Y(n.pH)+'" r="5" fill="#dc2626"/><text x="'+(W/2)+'" y="'+(Hh-6)+'" font-size="10" text-anchor="middle" fill="#64748b">V kwasu (cm³) · pH · zielona linia — punkt równoważnikowy</text></svg>'}
  reset()}});
V.define('n02-dysocjacja-v01',{title:'Rozpuszczanie i dysocjacja wodorotlenków — jony, hydratacja, efekt cieplny',tag:'E8',
 hint:'Porównaj NaOH, Ca(OH)₂ i Cu(OH)₂: ile kryształu przechodzi do wody, jakie jony powstają i jak otaczają je cząsteczki wody. W drugiej części zobacz, jak zmienia się temperatura przy rozpuszczaniu.',
 foot:'Rozpuszczalność: D.SOLUBILITY_TABLE · dysocjacja: CHE.HYDROXIDES.dissociation · ΔH rozpuszczania (kJ/mol) — CHE.HYDROXIDES.SOLHEAT, c(wody) = 4,18 J/(g·K), bez strat ciepła · rysunek: GFX.ions.',
 build:function(host){host.innerHTML='';var H=HY(),st={f:'NaOH',hf:'NaOH',m:4,mw:100},ions=null;
  var bar=el('div','r','<b>Substancja:</b> ');host.appendChild(bar);seg(bar,[['NaOH','NaOH'],['KOH','KOH'],['Ca(OH)2','Ca(OH)₂'],['Mg(OH)2','Mg(OH)₂'],['Cu(OH)2','Cu(OH)₂'],['Fe(OH)3','Fe(OH)₃']],st.f,function(v){st.f=v;show()});
  var g=grid(host,300),l=el('div'),r=el('div');g.append(l,r);var cb=el('div');l.appendChild(cb);var ctl=el('div','r');l.appendChild(ctl);btn(ctl,'↺ jeszcze raz',function(){show()});
  var th=el('div');host.appendChild(th);
  function show(){var row=H.get(st.f),s=H.solubility(st.f),d=H.dissociation(st.f);cb.innerHTML='';
   try{ions=G().ions.mount(cb,{mode:'dissolve',height:280,nOH:row.q,cation:row.cation,catCol:catCol(row),sol:s.s,solidCol:row.hex,dur:7})}catch(e){cb.textContent='GFX.ions: '+e.message}
   r.innerHTML='<div class="table-wrap"><table><tbody><tr><th>1. Co to jest?</th><td>'+row.pretty+' — '+row.name+'</td></tr><tr><th>2. Czy się rozpuszcza?</th><td style="color:'+SOLC[s.s]+'"><b>'+s.label+'</b></td></tr><tr><th>3. Co jest w roztworze?</th><td>'+d.eq+'</td></tr><tr><th>4. Jaki odczyn?</th><td>'+s.odczyn+(s.ph?' (pH ≈ '+fmt(s.ph,1)+')':'')+'</td></tr></tbody></table></div>'
    +card('Wniosek',d.note,'#64748b')+card('Hydratacja','Jony w wodzie otaczają się cząsteczkami wody: do kationu zwrócony jest tlen (biegun −), do OH⁻ — wodory (biegun +). Dlatego jony „rozchodzą się” w roztworze.','#2563eb')
    +card('Rozpuszczalny ≠ mocny','Rozpuszczalność mówi, ile substancji przejdzie do wody; moc — jaka część rozpuszczonej substancji jest w postaci jonów. Ca(OH)₂: mało się rozpuszcza, ale to, co się rozpuści, dysocjuje całkowicie.','#d97706')}
  function heat(){th.innerHTML='';var bx=el('div');bx.innerHTML='<h4 style="margin:12px 0 4px">Efekt cieplny rozpuszczania</h4>';th.appendChild(bx);var b=el('div','r');th.appendChild(b);
   seg(b,Object.keys(H.SOLHEAT).map(function(k){return[k,H.SOLHEAT[k].name]}),st.hf,function(v){st.hf=v;calc()});var w=el('label',null,' masa (g): ');var i=el('input');i.type='range';i.min=1;i.max=20;i.value=st.m;var iv=el('b',null,st.m+' g');i.oninput=function(){st.m=+i.value;iv.textContent=st.m+' g';calc()};w.append(i,iv);b.appendChild(w);
   var out=el('div');th.appendChild(out);
   function calc(){var h=H.heat(st.hf,st.m,st.mw,20),T=h.T,pct=Math.max(0,Math.min(1,(T-0)/60));
    out.innerHTML='<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><svg viewBox="0 0 60 200" width="50" height="170"><rect x="22" y="10" width="16" height="160" rx="8" fill="#e5e9ee" stroke="#9aa6b6"/><rect x="25" y="'+(10+155*(1-pct))+'" width="10" height="'+(155*pct+5)+'" rx="5" fill="'+(h.dT>=0?'#dc2626':'#2563eb')+'"/><circle cx="30" cy="180" r="14" fill="'+(h.dT>=0?'#dc2626':'#2563eb')+'"/><text x="44" y="'+(10+155*(1-1/3))+'" font-size="9" fill="#64748b">20°</text></svg>'
     +'<div>'+card(h.name+' — '+h.kind,'n = '+fmt(h.n,3)+' mol · ΔH = '+fmt(h.dH,1)+' kJ/mol → Q = '+fmt(h.Q/1000,2)+' kJ<br>ΔT ≈ <b>'+(h.dT>0?'+':'')+fmt(h.dT,1)+' K</b> → temperatura końcowa ok. <b>'+fmt(h.T,1)+' °C</b> ('+st.m+' g w 100 g wody)'+(h.limit&&st.m/100>h.limit/100?'<div class="note">Uwaga: Ca(OH)₂ rozpuści się tylko ok. 0,17 g — reszta zostanie jako zawiesina; efekt będzie znikomy.</div>':'')+(st.hf==='NaOH'||st.hf==='KOH'?'<div class="note">Uwaga: BHP: stały NaOH/KOH dodawaj małymi porcjami do wody (nie odwrotnie), mieszaj, okulary i rękawice.</div>':''),h.dT>=0?'#dc2626':'#2563eb')+'</div></div>'}
   calc()}
  show();heat()}});
V.define('n02-reaktor-v01',{title:'Reaktor: wodorotlenek + odczynnik — przewiduj, potem sprawdź',tag:'E8',
 hint:'Wybierz wodorotlenek i odczynnik. Najpierw zaznacz przewidywanie (zachodzi / nie zachodzi), potem „Sprawdź” — silnik podaje równanie, typ reakcji, obserwację i uzasadnienie; jeśli jest animacja, zobaczysz zlewkę.',
 foot:'Reguły: CHE.HYDROXIDES.predict (zobojętnianie — także dla par bez rekordu: równanie z reguły H⁺ = OH⁻) · animacja: GFX.rx.',
 build:function(host){host.innerHTML='';var H=HY(),st={f:'Al(OH)3',g:'NaOH',guess:null};
  var b1=el('div','r','<b>Wodorotlenek:</b> ');host.appendChild(b1);seg(b1,H.list(function(r){return r.level!=='LO'&&r.metal!=='NH4'}).map(function(r){return[r.f,r.pretty]}),st.f,function(v){st.f=v;clr()});
  var b2=el('div','r','<b>Odczynnik:</b> ');host.appendChild(b2);seg(b2,H.REAGENTS.map(function(x){return[x,x==='ogrzewanie'||x==='powietrze'?x:H.pretty(x)]}),st.g,function(v){st.g=v;clr()});
  var b3=el('div','r','<b>Twoje przewidywanie:</b> ');host.appendChild(b3);var gb=seg(b3,[['tak','zachodzi reakcja'],['nie','nie zachodzi']],null,function(v){st.guess=v});btn(b3,'Sprawdź',check,'on');
  var g=grid(host,280),l=el('div'),r=el('div');g.append(l,r);
  function clr(){st.guess=null;gb.forEach(function(q){q.classList.remove('on')});l.innerHTML='';r.innerHTML='<div class="note">'+H.pretty(st.f)+' + '+(H.pretty(st.g))+' — co się stanie? Zaznacz przewidywanie i kliknij „Sprawdź”.</div>'}
  function check(){var p=H.predict(st.f,st.g);if(!p){r.innerHTML='—';return}var ok=p.ok&&!p.physical,hit=st.guess==null?null:((st.guess==='tak')===ok);
   r.innerHTML=(hit==null?'':card(hit?'✓ Trafione przewidywanie':'✗ Przewidywanie nietrafione','',hit?'#16a34a':'#dc2626'))+card(ok?'Zachodzi: '+(p.type||'reakcja'):p.physical?'Rozpuszczanie (proces fizyczny + dysocjacja)':'Brak reakcji',(p.eq?eqHtml(p.eq):'')+'<div>'+(p.why||'')+'</div>'+(p.obs?'<div><b>Obserwacja:</b> '+p.obs+'</div>':'')+(p.cond?'<div><b>Warunki:</b> '+p.cond+'</div>':'')+(p.note?'<div><small>'+p.note+'</small></div>':'')+(p.level&&p.level!=='E8'?'<div><small>poziom: '+p.level+'</small></div>':''),ok?'#16a34a':'#9aa6b6');
   l.innerHTML='';if(p.rx)beaker(l,p.rx,240)}
  clr()}});
})();
