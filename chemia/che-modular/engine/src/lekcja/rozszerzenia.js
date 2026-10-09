/* rozszerzenia.js — nowe modele, zlewki GFX i pracownie dokładane do zamrożonego silnika (che-viz.js v0_57).
   Wklejane do każdej lekcji przez md2html.py. Dodajesz tu, nie w silniku. API: CHE.LAB.GFX.rx.register, CHE.VIEW.define, CHE.PRACOWNIA.live. */
(function(){
var C=window.CHE;if(!C||!C.VIEW||!C.VIEW.define||C.EXT_V1)return;C.EXT_V1=1;
var V=C.VIEW,G=C.LAB&&C.LAB.GFX,rx=G&&G.rx;
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
var css=el('style');css.textContent=
'.x5{font:14px/1.5 Inter,system-ui,sans-serif;color:inherit}.x5>*{width:100%;box-sizing:border-box}.x5 .bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:4px 0 8px}.x5 .bar b{min-width:150px;font-size:13px}'+
'.x5 button.o{border:1px solid var(--line,#d5dee6);background:var(--panel,#fff);color:inherit;border-radius:8px;padding:5px 10px;font:600 12.5px Inter,system-ui;cursor:pointer}.x5 button.o.on{background:#0d6868;color:#fff;border-color:#0d6868}'+
'.x5 .two{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px;align-items:start}.x5 .eq{font:700 15px ui-monospace,Consolas,monospace;margin:4px 0 8px;overflow-wrap:anywhere}'+
'.x5 .nt{border-left:3px solid #0d6868;background:var(--panel-2,#f1f5f8);padding:8px 10px;border-radius:6px;font-size:13.5px}.x5 .tch{color:#b83a45;font-weight:700}'+
'.x5 .pt{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:4px;max-width:560px}.x5 .pt .h{font:700 10.5px system-ui;color:var(--mut,#667382);text-align:center;align-self:end}'+
'.x5 .pt button{aspect-ratio:1;min-width:0;border-radius:8px;border:2px solid transparent;font:800 15px system-ui;cursor:pointer;padding:0;color:#18212b}.x5 .pt button small{display:block;font:600 9px system-ui;opacity:.75}'+
'.x5 .pt button.on{border-color:#18212b;box-shadow:0 0 0 2px #fff inset}.x5 .t-jon{background:#fbd9b0}.x5 .t-kow{background:#bfe3e0}.x5 .t-pol{background:#d8e6c0}.x5 .t-met{background:#d4d9df}.x5 .t-pos{background:#e9d5f0}'+
'.x5 .lg{display:flex;flex-wrap:wrap;gap:10px;font-size:12px;margin:8px 0}.x5 .lg span{display:inline-flex;align-items:center;gap:5px}.x5 .lg i{width:14px;height:14px;border-radius:4px;display:inline-block}'+
'.x5 table.k{border-collapse:collapse;width:100%;font-size:13.5px}.x5 table.k td{padding:4px 6px;border-bottom:1px solid var(--line,#e2e8ee);vertical-align:top}.x5 table.k td:first-child{color:var(--mut,#667382);width:42%}'+
'.x5 .en{height:10px;border-radius:5px;background:linear-gradient(90deg,#f0a35e,#e9e3c9 50%,#58b4ae);position:relative;margin:4px 0 14px}.x5 .en i{position:absolute;top:-4px;width:3px;height:18px;background:#18212b}.x5 .en em{position:absolute;top:12px;font:600 10px system-ui;transform:translateX(-50%);font-style:normal;white-space:nowrap}'+
'.x5 svg text{font:12px system-ui;fill:currentColor}.x5 .che-zoom-frame{width:100%!important;max-width:640px}.x5 .che-zoom-frame>svg{width:100%!important}';
document.head.appendChild(css);

/* ---------- 1. Zlewki GFX dla N05 Wodorki ---------- */
var u=function(v){return['ind-uniwersalny',v]},php=function(v){return['ind-fenoloftaleina',v]},om=function(v){return['ind-oranz-metylowy',v]};
var pw=function(c){return{col:c,eq:4,end:0,t:'powder',shape:'powder'}};
var RX5={
 cah2H2o:{n:'CaH₂ + H₂O (+ fenoloftaleina)',solid:pw([214,214,206]),l0:php(7),l1:php(12.4),out:['gaz','barwa'],gas:'H2',bubN:1.6,heat:.8,T:40,eq:'CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑',why:'Szary proszek „musuje” — wydziela się wodór (pyka przy płomieniu); roztwór malinowieje: powstał Ca(OH)₂.'},
 nahH2o:{n:'NaH + H₂O (pokaz)',solid:pw([226,226,220]),l0:php(7),l1:php(13),out:['gaz','barwa'],gas:'H2',bubN:2.2,heat:1.4,T:55,splash:.2,teacher:1,eq:'NaH + H₂O → NaOH + H₂↑',why:'Gwałtowne wydzielanie H₂, silne ogrzanie; roztwór silnie zasadowy (malinowy). Tylko pokaz nauczyciela — wodór może się zapalić.'},
 nh4clCaoh2:{n:'NH₄Cl + Ca(OH)₂ (ogrzewanie)',solid:pw([246,246,242]),out:['gaz'],gas:'NH3',bubN:.7,heat:1,T:70,eq:'2 NH₄Cl + Ca(OH)₂ → CaCl₂ + 2 NH₃↑ + 2 H₂O',why:'Po ogrzaniu mieszaniny czuć ostry zapach; wilgotny papierek uniwersalny u wylotu probówki niebieszczeje — to amoniak.'},
 naclH2so4:{n:'NaCl + H₂SO₄ (stęż.) — pokaz',solid:pw([250,250,250]),out:['gaz'],gas:'HCl',fumes:1,bubN:1.1,heat:.6,T:50,teacher:1,eq:'NaCl + H₂SO₄ → NaHSO₄ + HCl↑',why:'Wydziela się bezbarwny gaz, który w wilgotnym powietrzu tworzy białą mgłę — chlorowodór. Pokaz pod dygestorium.'},
 fesHcl:{n:'FeS + HCl',solid:{col:[52,50,48],eq:4,end:.3,t:'chips',shape:'chips'},l1:'ion-fe2',out:['gaz','barwa'],gas:'H2S',bubN:1,teacher:1,eq:'FeS + 2 HCl → FeCl₂ + H₂S↑',why:'Czarne grudki siarczku żelaza(II) roztwarzają się, wydziela się gaz o zapachu zgniłych jaj — siarkowodór; roztwór bladozielony (Fe²⁺). Tylko pod dygestorium.'},
 nh3H2oPhp:{n:'NH₃ + H₂O (+ fenoloftaleina)',l0:php(7),l1:php(11.1),out:['barwa'],gas:'NH3',bubN:.5,noRx:0,eq:'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻',why:'Amoniak bardzo dobrze rozpuszcza się w wodzie; powstają jony OH⁻ — fenoloftaleina malinowa (0,1 mol/dm³: pH ≈ 11).'},
 hclH2oOranz:{n:'HCl + H₂O (+ oranż metylowy)',l0:om(7),l1:om(1),out:['barwa'],gas:'HCl',bubN:.5,eq:'HCl + H₂O → H₃O⁺ + Cl⁻',why:'Chlorowodór rozpuszcza się w wodzie i dysocjuje całkowicie — powstaje kwas solny; oranż metylowy czerwony.'},
 h2sH2oUni:{n:'H₂S + H₂O (+ wskaźnik uniwersalny)',l0:u(7),l1:u(4),out:['barwa'],gas:'H2S',bubN:.5,eq:'H₂S + H₂O ⇌ H₃O⁺ + HS⁻',why:'Siarkowodór rozpuszcza się umiarkowanie i dysocjuje słabo — kwas siarkowodorowy, odczyn lekko kwasowy (pH ≈ 4).'},
 nh3Hcl:{n:'NH₃ + HCl (gazy)',out:['nic'],gas:'HCl',fumes:1,noRx:0,eq:'NH₃ + HCl → NH₄Cl',why:'Nad otwartymi naczyniami ze stężonym amoniakiem i kwasem solnym powstaje biały dym — drobne kryształki chlorku amonu.'},
 h2sPbac:{n:'H₂S + (CH₃COO)₂Pb',ppt:'ppt-pbs',out:['osad'],gas:'H2S',bubN:.6,eq:'H₂S + (CH₃COO)₂Pb → PbS↓ + 2 CH₃COOH',why:'Czarny osad siarczku ołowiu(II) — tak wykrywa się siarkowodór (czernieje bibuła nasączona octanem ołowiu).'},
 h2sCuso4:{n:'H₂S + CuSO₄',l0:'ion-cu2',l1:'sol-water',ppt:'ppt-cus',out:['osad','barwa'],gas:'H2S',bubN:.6,eq:'H₂S + CuSO₄ → CuS↓ + H₂SO₄',why:'Czarny osad siarczku miedzi(II), niebieska barwa roztworu słabnie.'}
};
['nh3H2oPhp','hclH2oOranz','h2sH2oUni'].forEach(function(k){RX5[k].qualitative=1});
/* rekordy reakcji (bilans sprawdza CHE.REACTION) — jak src/d_reactions.js */
var D=C.DATA=C.DATA||{};/* dane silnika są zamrożone (deepFreeze) — podmieniamy na rozszerzalne kopie płytkie */
if(Object.isFrozen(D.REACTIONS||{}))D.REACTIONS=Object.assign({},D.REACTIONS);if(Object.isFrozen(D.REACTION_DATA||{}))D.REACTION_DATA=Object.assign({},D.REACTION_DATA);D.REACTIONS=D.REACTIONS||{};D.REACTION_DATA=D.REACTION_DATA||{};
var R=function(r,p){return{reactants:r.map(function(x){return{formula:x[1],coef:x[0]}}),products:p.map(function(x){return{formula:x[1],coef:x[0]}})}};
var RD5={
 cah2H2o:[R([[1,'CaH2'],[2,'H2O']],[[1,'Ca(OH)2'],[2,'H2']]),{type:'redox',conditions:'woda, temperatura pokojowa',observation:'wydziela się H₂, roztwór zasadowy',safety:['H₂ palny']}],
 nahH2o:[R([[1,'NaH'],[1,'H2O']],[[1,'NaOH'],[1,'H2']]),{type:'redox',conditions:'woda; reakcja gwałtowna',observation:'gwałtowne wydzielanie H₂, silne ogrzanie',safety:['tylko pokaz; ryzyko zapłonu H₂']}],
 nh4clCaoh2:[R([[2,'NH4Cl'],[1,'Ca(OH)2']],[[1,'CaCl2'],[2,'NH3'],[2,'H2O']]),{type:'otrzymywanie',conditions:'ogrzewanie stałej mieszaniny',observation:'ostry zapach, wilgotny papierek uniwersalny niebieszczeje',safety:['NH₃ drażniący — dygestorium']}],
 naclH2so4:[R([[1,'NaCl'],[1,'H2SO4']],[[1,'NaHSO4'],[1,'HCl']]),{type:'otrzymywanie kwasu',conditions:'stężony H₂SO₄, łagodne ogrzewanie',observation:'bezbarwny gaz dymiący w wilgotnym powietrzu',safety:['stężony kwas — tylko pokaz, dygestorium']}],
 fesHcl:[R([[1,'FeS'],[2,'HCl']],[[1,'FeCl2'],[1,'H2S']]),{type:'otrzymywanie',conditions:'kwas solny, aparat Kippa',observation:'zapach zgniłych jaj, roztwór bladozielony',safety:['H₂S bardzo trujący — dygestorium']}],
 nh3Hcl:[R([[1,'NH3'],[1,'HCl']],[[1,'NH4Cl']]),{type:'synteza',conditions:'gazy w temperaturze pokojowej',observation:'biały dym chlorku amonu',safety:['stężone roztwory — dygestorium']}],
 h2sCuso4:[R([[1,'H2S'],[1,'CuSO4']],[[1,'CuS'],[1,'H2SO4']]),{type:'strącanie',conditions:'roztwór wodny',observation:'czarny osad CuS',safety:['H₂S trujący']}],
 h2sPbac:[R([[1,'H2S'],[1,'Pb(CH3COO)2']],[[1,'PbS'],[2,'CH3COOH']]),{type:'strącanie',conditions:'bibuła nasączona octanem ołowiu(II)',observation:'bibuła czernieje (PbS)',safety:['sole ołowiu i H₂S trujące']}]};
if(Object.isFrozen(D.SUBSTANCES||{}))D.SUBSTANCES=Object.assign({},D.SUBSTANCES);D.SUBSTANCES=D.SUBSTANCES||{};
var SB5={CaH2:['wodorek wapnia','s',42.094,'wodorek jonowy (reduktor)',['z wodą wydziela palny H₂'],['osuszanie rozpuszczalników','źródło wodoru']],
 NaH:['wodorek sodu','s',23.998,'wodorek jonowy (zasada, reduktor)',['reaguje gwałtownie z wodą; zapala się w wilgotnym powietrzu'],['mocna zasada w syntezie organicznej']],
 LiH:['wodorek litu','s',7.948,'wodorek jonowy',['z wodą wydziela palny H₂'],['otrzymywanie LiAlH₄']],
 CuS:['siarczek miedzi(II)','s',95.61,'sól (osad czarny)',[],['wykrywanie H₂S i jonów Cu²⁺']],
 PbS:['siarczek ołowiu(II)','s',239.26,'sól (osad czarny), minerał galena',['związki ołowiu trujące'],['wykrywanie H₂S']],
 'Pb(CH3COO)2':['octan ołowiu(II)','aq',325.29,'sól',['trujący'],['bibuła do wykrywania H₂S']],
 CH3COOH:['kwas octowy','aq',60.052,'kwas słaby (organiczny)',['stężony żrący'],['ocet','przemysł spożywczy']],
 NaHSO4:['wodorosiarczan(VI) sodu','s',120.06,'wodorosól',['drażniący'],['środki czyszczące, regulacja pH']]};
var byF={};Object.keys(D.SUBSTANCES).forEach(function(k){var x=D.SUBSTANCES[k];if(x&&x.formula)byF[x.formula]=1});
Object.keys(SB5).forEach(function(f){if(D.SUBSTANCES[f]||byF[f])return;var a=SB5[f];D.SUBSTANCES[f]={formula:f,name:a[0],state:a[1],molarMass:a[2],role:a[3],safety:a[4],uses:a[5],src:'rozszerzenia.js'}});
Object.keys(RD5).forEach(function(k){if(D.REACTIONS[k])return;D.REACTIONS[k]=RD5[k][0];D.REACTION_DATA[k]=Object.assign({products:RD5[k][0].products.map(function(x){return x.formula})},RD5[k][1])});
if(rx)Object.keys(RX5).forEach(function(k){if(!rx.get(k))rx.register(k,RX5[k])});

/* ---------- 2. Pracownia N05 (własna karta: zlewka + równanie + obserwacja + wniosek + BHP) ---------- */
var P5={
 cah2H2o:{war:'proszek CaH₂ do wody z fenoloftaleiną, probówka otwarta',wn:'Wodorek jonowy reaguje z wodą: H⁻ + H₂O → H₂ + OH⁻. Wodór z H⁻ (−I) i z wody (+I) tworzy H₂ (0).',bhp:'Małe ilości, z dala od ognia; okulary.'},
 nahH2o:{war:'szczypta NaH, pokaz nauczyciela',wn:'Im bardziej aktywny metal, tym gwałtowniej jego wodorek reaguje z wodą.',bhp:'Tylko pokaz; NaH zapala się w wilgotnym powietrzu, ryzyko zapłonu H₂.'},
 nh4clCaoh2:{war:'mieszanina stałych soli, ogrzewanie w probówce wylotem w dół',wn:'Sól amonowa + mocna zasada → amoniak. NH₃ zbieramy do probówki odwróconej dnem do góry (lżejszy od powietrza).',bhp:'Nie wąchać bezpośrednio — „nagarniać” dłonią; dygestorium.'},
 naclH2so4:{war:'stała sól + stężony kwas, łagodne ogrzewanie',wn:'Mniej lotny kwas (H₂SO₄) wypiera z soli kwas lotny (HCl). Gaz rozpuszczony w wodzie daje kwas solny.',bhp:'Stężony H₂SO₄ i HCl żrące — tylko pokaz, dygestorium.'},
 fesHcl:{war:'FeS + kwas solny, aparat Kippa lub probówka z rurką',wn:'Siarczek + kwas → siarkowodór (kwas słabszy i lotny wypierany z soli).',bhp:'H₂S bardzo trujący; dygestorium. Zapach zanika przy wyższych stężeniach — to nie znaczy, że gazu nie ma.'},
 nh3H2oPhp:{war:'amoniak wprowadzony do wody z fenoloftaleiną (lub „fontanna”)',wn:'Wodny roztwór amoniaku ma odczyn zasadowy — NH₃ przyłącza H⁺ od wody.',bhp:'Stężony roztwór amoniaku drażni oczy i drogi oddechowe.'},
 hclH2oOranz:{war:'chlorowodór wprowadzony do wody z oranżem',wn:'Wodny roztwór chlorowodoru to mocny kwas (kwas solny).',bhp:'HCl drażni drogi oddechowe; okulary.'},
 h2sH2oUni:{war:'siarkowodór wprowadzony do wody ze wskaźnikiem',wn:'Wodny roztwór siarkowodoru to słaby kwas (kwas siarkowodorowy).',bhp:'H₂S trujący — tylko pod dygestorium.'},
 nh3Hcl:{war:'dwie bagietki zwilżone stęż. NH₃(aq) i stęż. HCl zbliżone do siebie',wn:'Zasadowy NH₃ i kwasowy HCl łączą się w sól — chlorek amonu (biały dym = kryształki).',bhp:'Stężone roztwory — dygestorium, okulary.'},
 h2sPbac:{war:'bibuła nasączona roztworem octanu ołowiu(II) nad wylotem gazu',wn:'Czernienie bibuły (PbS) to próba na siarkowodór.',bhp:'Sole ołowiu trujące; H₂S trujący.'},
 h2sCuso4:{war:'siarkowodór przepuszczany przez roztwór CuSO₄',wn:'Siarkowodór strąca czarne siarczki metali (CuS, PbS) — wykrywanie H₂S i jonów S²⁻.',bhp:'Dygestorium.'},
 caOH2Co2:{war:'gazy ze spalania metanu przepuszczone przez wodę wapienną',wn:'Zmętnienie wody wapiennej = CO₂: w metanie jest węgiel. Rosa na zimnym szkle = H₂O: jest wodór.',bhp:'Palnik — uwaga na włosy i rękawy.',eq:'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O (po: CH₄ + 2 O₂ → CO₂ + 2 H₂O)'}
};
var GR5=[['Wodorki jonowe + woda',['cah2H2o','nahH2o']],['Otrzymywanie',['nh4clCaoh2','naclH2so4','fesHcl']],['Wodorki niemetali w wodzie',['nh3H2oPhp','hclH2oOranz','h2sH2oUni']],['Wykrywanie gazów',['nh3Hcl','h2sPbac','h2sCuso4','caOH2Co2']]];
V.define('n05-doswiadczenia-v01',{title:'Pracownia: doświadczenia z wodorkami',tag:'GFX',hint:'Wodorki jonowe z wodą, otrzymywanie NH₃, HCl i H₂S, odczyn ich roztworów, wykrywanie gazów — zlewka, równanie, obserwacja, wniosek i BHP.',foot:'GFX.rx · rozszerzenia.js (N05)',
 build:function(host){host.innerHTML='';host.classList.add('x5');var bars=el('div'),area=el('div');host.append(bars,area);var all=[];
  if(!rx){area.textContent='Brak GFX.rx';return}
  GR5.forEach(function(g){var r=el('div','bar','<b>'+g[0]+':</b>');g[1].forEach(function(k){if(!rx.get(k))return;var b=el('button','o',(function(n){var a=n.split(' (')[0];return /\+$/.test(a)?n:a})(rx.get(k).n||k));b.type='button';b._k=k;b.onclick=function(){all.forEach(function(x){x.classList.toggle('on',x===b)});show(k)};r.appendChild(b);all.push(b)});bars.appendChild(r)});
  function show(k){area.innerHTML='';var g=el('div','two'),l=el('div'),r=el('div');g.append(l,r);area.appendChild(g);var I=rx.info(k)||{},d=P5[k]||{},sp=rx.get(k)||{};
   var m=rx.mount(l,k,{height:240,dur:6,auto:true});var bb=el('div','bar'),x=el('button','o','▶ powtórz');x.type='button';x.onclick=function(){m.play()};bb.appendChild(x);l.appendChild(bb);
   r.innerHTML='<div class="eq">'+(d.eq||sp.eq||I.eq||'')+'</div><div class="nt"><b>Warunki:</b> '+(d.war||'—')+'<br><b>Obserwacja:</b> '+(sp.why||I.obs||'—')+(I.gas?'<br><b>Gaz:</b> '+I.gas.name+' — '+I.gas.test:'')+'<br><b>Wniosek:</b> '+(d.wn||'—')+'<br><b>BHP:</b> '+(d.bhp||'—')+(sp.teacher?'<br><span class="tch">Tylko pokaz nauczyciela.</span>':'')+'</div>'}
  host._show=function(k){var b=all.filter(function(x){return x._k===k})[0];if(b){b.click();return true}return false};
  var PR=C.PRACOWNIA=C.PRACOWNIA||{};(PR.live=PR.live||{})['n05-doswiadczenia-v01']=host;var p=PR.pending;PR.pending=null;if(p&&host._show(p))return;if(all[0])all[0].click()}});

/* ---------- 3. Mapa wodorków (typ, rola H, elektroujemność, właściwości) ---------- */
/* [sym, grupa, okres, EN(Pauling), wzór, nazwa, typ, stopień utl. H, stan (20 °C), t. wrz. °C, w wodzie, uwaga] */
var HY=[
 ['Li',1,2,.98,'LiH','wodorek litu','jon','−I','stały','—','reaguje: LiH + H₂O → LiOH + H₂↑','LiAlH₄ — silny reduktor w syntezie organicznej'],
 ['Na',1,3,.93,'NaH','wodorek sodu','jon','−I','stały','—','reaguje gwałtownie: NaH + H₂O → NaOH + H₂↑','mocna zasada w syntezie; zapala się w wilgotnym powietrzu'],
 ['K',1,4,.82,'KH','wodorek potasu','jon','−I','stały','—','reaguje bardzo gwałtownie: KH + H₂O → KOH + H₂↑','najaktywniejszy z tej trójki'],
 ['Mg',2,3,1.31,'MgH₂','wodorek magnezu','pos','−I','stały','—','reaguje powoli: MgH₂ + 2 H₂O → Mg(OH)₂ + 2 H₂↑','wiązania pośrednie (jonowo-kowalencyjne); magazyn wodoru (7,6% masy to H)'],
 ['Ca',2,4,1.00,'CaH₂','wodorek wapnia','jon','−I','stały','—','reaguje: CaH₂ + 2 H₂O → Ca(OH)₂ + 2 H₂↑','osuszanie rozpuszczalników; przenośne źródło wodoru'],
 ['B',13,2,2.04,'B₂H₆','diboran','kow','−I (formalnie)','gaz','−92,5','reaguje: B₂H₆ + 6 H₂O → 2 H₃BO₃ + 6 H₂↑','najprostszy borowodór (BH₃ nie istnieje jako trwała cząsteczka); samozapalny, trujący'],
 ['C',14,2,2.55,'CH₄','metan','kow','+I','gaz','−161,5','nie rozpuszcza się, nie reaguje — obojętny','gaz ziemny, biogaz; najprostszy węglowodór'],
 ['Si',14,3,1.90,'SiH₄','silan (krzemowodór)','kow','−I (formalnie)','gaz','−111,9','nie rozpuszcza się; w zasadach rozkłada się z wydzieleniem H₂','samozapalny w powietrzu; źródło czystego krzemu w elektronice'],
 ['N',15,2,3.04,'NH₃','amoniak','kow','+I','gaz','−33,3','bardzo dobrze rozpuszczalny (ok. 700 obj. w 1 obj. wody); odczyn zasadowy','nawozy, kwas azotowy(V), chłodnictwo; synteza Habera–Boscha'],
 ['P',15,3,2.19,'PH₃','fosforowodór (fosfan)','kow','+I (umownie; EN P ≈ EN H)','gaz','−87,7','słabo rozpuszczalny; odczyn praktycznie obojętny','bardzo trujący; zapach czosnku/zgniłych ryb'],
 ['O',16,2,3.44,'H₂O','woda','kow','+I','ciecz','100,0','—','wiązania wodorowe → wyjątkowo wysoka t. wrzenia'],
 ['S',16,3,2.58,'H₂S','siarkowodór','kow','+I','gaz','−60,3','umiarkowanie rozpuszczalny (ok. 2,6 obj.); słaby kwas siarkowodorowy','zapach zgniłych jaj; bardzo trujący'],
 ['Se',16,4,2.55,'H₂Se','selenowodór','kow','+I','gaz','−41,3','kwas selenowodorowy — mocniejszy niż H₂S','bardzo trujący'],
 ['F',17,2,3.98,'HF','fluorowodór','kow','+I','gaz (skrapla się w 19,5 °C)','19,5','kwas fluorowodorowy — słaby, ale bardzo niebezpieczny','trawi szkło: SiO₂ + 4 HF → SiF₄ + 2 H₂O'],
 ['Cl',17,3,3.16,'HCl','chlorowodór','kow','+I','gaz','−85,1','bardzo dobrze rozpuszczalny (ok. 450 obj.); mocny kwas solny','kwas solny: przemysł, żołądek (ok. 0,1 mol/dm³)'],
 ['Br',17,4,2.96,'HBr','bromowodór','kow','+I','gaz','−66,8','mocny kwas bromowodorowy','mocniejszy kwas niż HCl'],
 ['I',17,5,2.66,'HI','jodowodór','kow','+I','gaz','−35,4','najmocniejszy z kwasów beztlenowych fluorowców','wiązanie H–I najdłuższe i najsłabsze'],
 ['Ti','d',4,1.54,'TiH₂','wodorek tytanu','met','—','stały','—','nie reaguje z wodą w zwykłych warunkach','wodorek metaliczny (międzywęzłowy), skład bliski TiH₂'],
 ['Pd','d',5,2.20,'PdHₓ','wodorek palladu','met','—','stały','—','—','pallad pochłania do ok. 900 objętości H₂; skład zmienny (x &lt; 1)']];
var TN={jon:'jonowy (H⁻)',kow:'kowalencyjny',pos:'pośredni (jonowo-kowalencyjny)',met:'metaliczny (międzywęzłowy)'},TC={jon:'t-jon',kow:'t-kow',pos:'t-pos',met:'t-met'};
V.define('n05-wodorki-v01',{title:'Mapa wodorków — typ, rola wodoru, właściwości',tag:'DANE',hint:'Kliknij pierwiastek: wzór i nazwa wodorku, typ wiązania, stopień utlenienia H, elektroujemność względem wodoru, stan, temperatura wrzenia i zachowanie w wodzie.',foot:'dane: rozszerzenia.js (N05); EN wg Paulinga, H = 2,20',
 build:function(host){host.innerHTML='';host.classList.add('x5');
  var cols=[1,2,13,14,15,16,17,'d'],pt=el('div','pt');cols.forEach(function(c){pt.appendChild(el('div','h',c==='d'?'d':c))});
  var btn={};for(var p=2;p<=5;p++)cols.forEach(function(c){var h=HY.filter(function(x){return x[1]===c&&x[2]===p})[0];if(!h){pt.appendChild(el('div'));return}
   var b=el('button',TC[h[6]],h[0]+'<small>'+h[4]+'</small>');b.type='button';b.title=h[5];b.onclick=function(){show(h)};btn[h[0]]=b;pt.appendChild(b)});
  host.appendChild(pt);
  host.appendChild(el('div','lg','<span><i class="t-jon"></i>jonowy</span><span><i class="t-pos"></i>pośredni</span><span><i class="t-kow"></i>kowalencyjny</span><span><i class="t-met"></i>metaliczny</span>'));
  var card=el('div');host.appendChild(card);
  function show(h){Object.keys(btn).forEach(function(k){btn[k].classList.toggle('on',k===h[0])});
   var d=(h[3]-2.20),pos=function(v){return Math.max(0,Math.min(100,(v-0.7)/(4.0-0.7)*100))};
   card.innerHTML='<div class="eq" style="font-size:20px">'+h[4]+' — '+h[5]+'</div>'+
   '<div style="font-size:12px;color:var(--mut,#667382)">elektroujemność: '+h[0]+' '+h[3].toFixed(2).replace('.',',')+' · H 2,20 · różnica '+(d>=0?'+':'−')+Math.abs(d).toFixed(2).replace('.',',')+'</div>'+
   '<div class="en"><i style="left:'+pos(h[3])+'%"></i><em style="left:'+pos(h[3])+'%">'+h[0]+'</em><i style="left:'+pos(2.2)+'%;background:#b83a45"></i><em style="left:'+pos(2.2)+'%;color:#b83a45">H</em></div>'+
   '<table class="k"><tr><td>Typ wodorku</td><td><b>'+TN[h[6]]+'</b></td></tr><tr><td>Stopień utlenienia H</td><td>'+h[7]+'</td></tr><tr><td>Stan w 20 °C</td><td>'+h[8]+'</td></tr><tr><td>Temperatura wrzenia</td><td>'+(h[9]==='—'?'—':h[9]+' °C')+'</td></tr><tr><td>Z wodą / w wodzie</td><td>'+h[10]+'</td></tr><tr><td>Warto wiedzieć</td><td>'+h[11]+'</td></tr></table>'+
   '<div class="nt" style="margin-top:8px">'+(h[6]==='jon'||h[6]==='pos'?'Partner <b>mniej elektroujemny</b> od wodoru i oddaje elektrony → wodór jako <b>H⁻</b> (−I). Taki wodorek z wodą daje <b>wodorotlenek + H₂</b>.':h[6]==='met'?'Atomy wodoru zajmują <b>luki w sieci metalu</b> — skład zmienny, przewodzi prąd jak metal.':h[7].indexOf('−I')===0?'Partner nieco mniej elektroujemny od H — formalnie H ma −I, ale wiązania są <b>kowalencyjne</b> (wspólne pary elektronów).':'Partner <b>bardziej elektroujemny</b> od wodoru → wiązanie kowalencyjne spolaryzowane w stronę partnera; H ma +I. '+(h[0]==='N'?'Azot ma jednak <b>wolną parę</b> elektronów, która przyłącza H⁺ — dlatego NH₃ jest zasadą.':h[0]==='C'?'Polaryzacja jest mała — metan nie oddaje ani nie przyjmuje H⁺ (obojętny).':h[0]==='O'?'Woda jest amfiprotyczna: może oddać H⁺ albo go przyjąć.':'Im większa polaryzacja i słabsze wiązanie E–H, tym łatwiej oddać H⁺ — roztwór kwasowy (zob. §11 Trendy).'))+'</div>'}
  show(HY[8])}});

/* ---------- 4. Temperatury wrzenia wodorków grup 14–17 (wiązania wodorowe) ---------- */
var BP={14:['CH₄','SiH₄','GeH₄','SnH₄',[-161.5,-111.9,-88.5,-51.8],'#5b6675'],15:['NH₃','PH₃','AsH₃','SbH₃',[-33.3,-87.7,-62.5,-17.1],'#2f7fbf'],16:['H₂O','H₂S','H₂Se','H₂Te',[100,-60.3,-41.3,-2.2],'#0d6868'],17:['HF','HCl','HBr','HI',[19.5,-85.1,-66.8,-35.4],'#b06f1c']};
V.define('n05-trendy-v01',{title:'Temperatury wrzenia wodorków — wiązania wodorowe',tag:'WYKRES',hint:'Wodorki grup 14–17 w okresach 2–5. W każdej grupie t. wrzenia rośnie z masą cząsteczki — poza H₂O, HF i NH₃, które wrą „za wysoko”.',foot:'dane: t. wrzenia pod ciśnieniem 1013 hPa',
 build:function(host){host.innerHTML='';host.classList.add('x5');var on={14:1,15:1,16:1,17:1};var bar=el('div','bar','<b>Grupy:</b>');host.appendChild(bar);var box=el('div');host.appendChild(box);var info=el('div','nt');host.appendChild(info);
  Object.keys(BP).forEach(function(g){var b=el('button','o on',g+' ('+BP[g][0]+'…)');b.type='button';b.onclick=function(){on[g]=!on[g];b.classList.toggle('on',!!on[g]);draw()};bar.appendChild(b)});
  function draw(){var W=560,H=330,L=48,R=90,T=26,B=34,y0=-180,y1=110,X=function(i){return L+i*(W-L-R)/3},Y=function(v){return T+(y1-v)/(y1-y0)*(H-T-B)};
   var s='<svg viewBox="0 0 '+W+' '+H+'" width="100%" style="max-width:640px;display:block" role="img" aria-label="Wykres temperatur wrzenia wodorków">';
   for(var v=-150;v<=100;v+=50)s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" stroke="#c9d3dc" stroke-width="'+(v===0?1.4:.6)+'"/><text x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>';
   ['okres 2','okres 3','okres 4','okres 5'].forEach(function(t,i){s+='<text x="'+X(i)+'" y="'+(H-12)+'" text-anchor="middle">'+t+'</text>'});
   s+='<text x="'+(L-6)+'" y="12" text-anchor="end" style="font-size:11px">°C</text>';
   Object.keys(BP).forEach(function(g){if(!on[g])return;var d=BP[g],v=d[4],c=d[5],pts=v.map(function(y,i){return X(i)+','+Y(y)}).join(' ');
    s+='<polyline points="'+pts+'" fill="none" stroke="'+c+'" stroke-width="2.5"/>';
    v.forEach(function(y,i){var hot=i===0&&g!=='14';s+='<circle cx="'+X(i)+'" cy="'+Y(y)+'" r="'+(hot?6:4)+'" fill="'+(hot?'#fff':c)+'" stroke="'+c+'" stroke-width="2.5"><title>'+d[i]+': '+String(y).replace('.',',')+' °C</title></circle>'});
    s+='<text x="'+(X(3)+10)+'" y="'+(Y(v[3])+4)+'" style="fill:'+c+';font-weight:700">'+d[3]+'</text><text x="'+(X(0)+8)+'" y="'+(Y(v[0])-8)+'" style="fill:'+c+';font-weight:700">'+d[0]+'</text>'});
   box.innerHTML=s+'</svg>';
   info.innerHTML='<b>Odczyt:</b> w grupie 14 (CH₄ → SnH₄) temperatura wrzenia rośnie równo z masą cząsteczek — działają tylko słabe oddziaływania międzycząsteczkowe. W grupach 15–17 pierwszy wodorek (puste kółko) wrze <b>znacznie wyżej</b>, niż wynikałoby z trendu: między cząsteczkami NH₃, H₂O i HF tworzą się <b>wiązania wodorowe</b> (H przy bardzo elektroujemnym N, O, F). Woda ma ich najwięcej (2 atomy H i 2 wolne pary na cząsteczkę) — dlatego jako jedyna z tych wodorków jest w 20 °C cieczą.'}
  draw()}});
/* ---------- 5. Wspólny budowniczy pracowni (zlewka + równanie + obserwacja + wniosek + BHP) ----------
   Użycie: pracownia(id, tytuł, podpowiedź, [[grupa,[klucze]]...], {klucz:{war,wn,bhp,eq}}).
   Spec zlewki może mieć `vessel` (beaker, tube, flask, evapDish, crucible, cylinder) — przekazywane do rx.mount. */
function pracownia(id,title,hint,groups,notes,foot){
 V.define(id,{title:title,tag:'GFX',hint:hint,foot:foot||'GFX.rx · rozszerzenia.js',
  build:function(host){host.innerHTML='';host.classList.add('x5');var bars=el('div'),area=el('div');host.append(bars,area);var all=[];
   if(!rx){area.textContent='Brak GFX.rx';return}
   groups.forEach(function(g){var r=el('div','bar','<b>'+g[0]+':</b>'),n=0;g[1].forEach(function(k){if(!rx.get(k))return;n++;var sp=rx.get(k),d=notes[k]||{};var b=el('button','o',d.btn||(sp.n||k).split(' (')[0]);b.type='button';b._k=k;b.onclick=function(){all.forEach(function(x){x.classList.toggle('on',x===b)});show(k)};r.appendChild(b);all.push(b)});if(n)bars.appendChild(r)});
   function show(k){area.innerHTML='';var g=el('div','two'),l=el('div'),r=el('div');g.append(l,r);area.appendChild(g);var I=rx.info(k)||{},d=notes[k]||{},sp=rx.get(k)||{};
    var m=rx.mount(l,k,{height:240,dur:6,auto:true,vessel:sp.vessel});var bb=el('div','bar'),x=el('button','o','▶ powtórz');x.type='button';x.onclick=function(){m.play()};bb.appendChild(x);l.appendChild(bb);
    r.innerHTML='<div class="eq">'+(d.eq||sp.eq||I.eq||'')+'</div><div class="nt"><b>Warunki:</b> '+(d.war||'—')+'<br><b>Obserwacja:</b> '+(d.obs||sp.why||I.obs||'—')+(I.gas&&!sp.noRx?'<br><b>Gaz:</b> '+I.gas.name+' — '+I.gas.test:'')+'<br><b>Wniosek:</b> '+(d.wn||'—')+'<br><b>BHP:</b> '+(d.bhp||'—')+(sp.teacher?'<br><span class="tch">Tylko pokaz nauczyciela.</span>':'')+'</div>'}
   host._show=function(k){var b=all.filter(function(x){return x._k===k})[0];if(b){b.click();return true}return false};
   var PR=C.PRACOWNIA=C.PRACOWNIA||{};(PR.live=PR.live||{})[id]=host;var p=PR.pending;PR.pending=null;if(p&&host._show(p))return;if(all[0])all[0].click()}})}
C.EXT_PRACOWNIA=pracownia;

/* ---------- 6. Zlewki GFX dla F01 (zjawisko fizyczne vs reakcja) ---------- */
var RXF1={
 f01SolWoda:{n:'Sól + woda (rozpuszczanie)',solid:pw([248,248,246]),out:['nic'],qualitative:1,eq:'NaCl(s) → Na⁺(aq) + Cl⁻(aq)',why:'Kryształy przestają być widoczne, roztwór jest przezroczysty i bezbarwny. Sól nie zniknęła — jej jony rozproszyły się w wodzie.'},
 f01Odparowanie:{n:'Roztwór soli — odparowanie',level:.3,ppt:'ppt-caco3',habit:'crystal',out:['osad'],qualitative:1,heat:1,T:100,eq:'NaCl(aq) → NaCl(s) + H₂O(g)↑',why:'Woda paruje, a na dnie parownicy pojawia się i narasta biały osad — kryształy soli. Odzyskaliśmy substancję wyjściową.'},
 f01SodaOcet:{n:'NaHCO₃ + ocet',solid:pw([246,246,240]),out:['gaz'],gas:'CO2',bubN:2.4,foam:.8,eq:'NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂↑',why:'Burzliwe pienienie, wydzielają się pęcherzyki bezbarwnego gazu, proszek znika. Powstał nowy gaz — CO₂ (test: woda wapienna mętnieje).'},
 f01WodaWapienna:{n:'CO₂ + woda wapienna',rxKey:'caoh2Co2',ppt:'ppt-caco3',out:['osad'],gas:'CO2',bubN:.8,eq:'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O',why:'Gaz przepuszczany przez klarowną wodę wapienną powoduje zmętnienie — powstaje biały osad węglanu wapnia. To test na CO₂.'},
 f01Mg:{n:'Spalanie magnezu (pokaz)',rxKey:'mgO2',vessel:'crucible',level:.02,solid:{col:[196,200,206],col2:[250,250,248],eq:3,end:.15,t:'chips',shape:'chips'},ppt:'ppt-caco3',habit:'crystal',out:['osad'],heat:1.6,T:800,teacher:1,eq:'2 Mg + O₂ → 2 MgO',why:'Wstążka spala się oślepiająco jasnym, białym płomieniem; zostaje biały, kruchy proszek bez metalicznego połysku — tlenek magnezu.'},
 f01FeS:{n:'Fe + S (ogrzewanie, pokaz)',vessel:'testTube',solid:{col:[150,146,96],col2:[38,36,34],eq:4,end:.9,t:'powder',shape:'powder'},level:.02,out:['nic'],heat:1.4,T:600,teacher:1,eq:'Fe + S → FeS',why:'Szarożółta mieszanina rozżarza się (także po odsunięciu palnika) i zmienia się w czarną, kruchą masę. Magnes nie przyciąga produktu — powstał siarczek żelaza(II).'}
};
var RDF1={
 f01SodaOcet:[R([[1,'NaHCO3'],[1,'CH3COOH']],[[1,'CH3COONa'],[1,'H2O'],[1,'CO2']]),{type:'wymiana (wodorowęglan + kwas)',conditions:'temperatura pokojowa',observation:'pienienie, wydzielanie bezbarwnego gazu (CO₂)',safety:['ocet drażni oczy']}],
 f01FeS:[R([[1,'Fe'],[1,'S']],[[1,'FeS']]),{type:'synteza',conditions:'ogrzewanie mieszaniny w probówce',observation:'mieszanina rozżarza się, powstaje czarna krucha substancja niemagnetyczna',safety:['pokaz nauczyciela pod wyciągiem; możliwy SO₂']}]};
var SBF1={NaHCO3:['wodorowęglan sodu (soda oczyszczona)','s',84.007,'wodorosól',[],['proszek do pieczenia','gaśnice']],
 CH3COONa:['octan sodu','aq',82.034,'sól',[],['przemysł spożywczy','ogrzewacze chemiczne']],
 FeS:['siarczek żelaza(II)','s',87.91,'sól (czarna)',[],['otrzymywanie H₂S w laboratorium']]};
Object.keys(SBF1).forEach(function(f){if(D.SUBSTANCES[f]||byF[f])return;var a=SBF1[f];D.SUBSTANCES[f]={formula:f,name:a[0],state:a[1],molarMass:a[2],role:a[3],safety:a[4],uses:a[5],src:'rozszerzenia.js'}});
Object.keys(RDF1).forEach(function(k){if(D.REACTIONS[k])return;D.REACTIONS[k]=RDF1[k][0];D.REACTION_DATA[k]=Object.assign({products:RDF1[k][0].products.map(function(x){return x.formula})},RDF1[k][1])});
if(rx)Object.keys(RXF1).forEach(function(k){if(!rx.get(k))rx.register(k,RXF1[k])});

pracownia('f01-doswiadczenia-v01','Pracownia: co naprawdę się zmieniło?','Zjawisko fizyczne czy reakcja chemiczna? Topnienie, rozpuszczanie i odparowanie kontra reakcje z nową substancją — zlewka, obserwacja, wniosek i BHP.',
 [['Zjawiska fizyczne',['f01SolWoda','f01Odparowanie']],['Reakcje chemiczne',['f01SodaOcet','f01Mg','f01FeS']],['Dowód produktu',['f01WodaWapienna']]],
 {f01SolWoda:{war:'łyżeczka soli kuchennej w wodzie, mieszanie bagietką',wn:'Zjawisko fizyczne (rozpuszczanie). Dowód: po odparowaniu wody sól wraca.',bhp:'Nie smakujemy substancji w pracowni.'},
  f01Odparowanie:{war:'część roztworu soli w parownicy, ogrzewanie palnikiem lub płytą',wn:'Odzyskanie substancji wyjściowej potwierdza, że rozpuszczanie nie było reakcją.',bhp:'Gorąca parownica — chwytać szczypcami; okulary (pryskanie przy końcu odparowania).'},
  f01SodaOcet:{war:'łyżeczka sody oczyszczonej, dolewamy ocet',wn:'Reakcja chemiczna: powstaje nowa substancja (gaz CO₂). Nazwa gazu to wniosek — potwierdza go woda wapienna.',bhp:'Okulary; ocet nie do oczu.'},
  f01Mg:{war:'wstążka magnezu w szczypcach, w płomieniu palnika (pokaz)',wn:'Reakcja chemiczna: biały, kruchy MgO ma inne właściwości niż metaliczny magnez.',bhp:'Nie patrzeć w płomień; płonącego magnezu nie gasić wodą.'},
  f01FeS:{war:'mieszanina opiłek żelaza i siarki w probówce, ogrzewanie (pokaz)',wn:'Przed ogrzaniem — mieszanina (magnes wyciąga żelazo); po — związek FeS (magnes nie przyciąga). Rozstrzyga test właściwości.',bhp:'Pokaz pod wyciągiem; możliwy trujący SO₂; gorąca probówka może pęknąć.'},
  f01WodaWapienna:{war:'gaz przepuszczony przez wodę wapienną',wn:'Zmętnienie wody wapiennej to dowód, że gazem był CO₂.',bhp:'Woda wapienna drażni oczy i skórę; okulary.'}},
 'GFX.rx · rozszerzenia.js (F01)');

/* ---------- 7. Zlewki GFX dla F03 (mieszaniny do rozdzielania) — pracownia łączy je z zlewkami F01 ---------- */
var RXF3={
 f03PiasekWoda:{n:'Piasek + woda (zawiesina)',solid:{col:[214,190,140],eq:4,end:1,t:'powder',shape:'powder'},turb:.25,out:['nic'],qualitative:1,eq:'piasek(s) + H₂O(c) — brak reakcji',why:'Piasek nie rozpuszcza się: po zamieszaniu woda mętnieje, po chwili ziarna opadają na dno (sedymentacja), a nad osadem zostaje prawie klarowna woda. Dwie fazy — mieszanina niejednorodna.'},
 f03KredaWoda:{n:'Kreda + woda (zawiesina)',solid:{col:[246,246,242],eq:4,end:1,t:'powder',shape:'powder'},turb:.7,out:['nic'],qualitative:1,eq:'CaCO₃(s) + H₂O(c) — brak reakcji',why:'Drobna kreda tworzy mleczną zawiesinę, która opada wolno. Sączek zatrzymuje cząstki kredy, a przesącz jest klarowny.'}
};
if(rx)Object.keys(RXF3).forEach(function(k){if(!rx.get(k))rx.register(k,RXF3[k])});

pracownia('f03-rozdzielanie-v01','Pracownia: rozdzielanie mieszanin','Najpierw nazwij różnicę właściwości, potem wybierz metodę: zawiesiny (sedymentacja, dekantacja, sączenie), roztwór (odparowanie, krystalizacja).',
 [['Zawiesiny — ciało stałe nierozpuszczalne',['f03PiasekWoda','f03KredaWoda']],['Roztwór — substancja rozpuszczona',['f01SolWoda','f01Odparowanie']]],
 {f03PiasekWoda:{war:'piasek w zlewce z wodą, zamieszanie bagietką, odstawienie',wn:'Różnica: piasek nie rozpuszcza się i ma większą gęstość niż woda → sedymentacja, potem dekantacja albo sączenie.',bhp:'Szkło — ostrożnie; okulary.'},
  f03KredaWoda:{war:'sproszkowana kreda w wodzie, mieszanie',wn:'Drobne cząstki opadają wolno — szybciej rozdzieli je sączenie przez bibułę; przesącz jest klarowny.',bhp:'Okulary; sączek nie może być przedziurawiony bagietką.'},
  f01SolWoda:{war:'sól kuchenna w wodzie, mieszanie',wn:'Sól rozpuszcza się — przechodzi przez sączek razem z wodą. Sączenie nie zadziała; trzeba wykorzystać lotność wody (odparowanie, krystalizacja lub destylacja).',bhp:'Nie smakujemy substancji w pracowni.'},
  f01Odparowanie:{war:'roztwór soli w parownicy, ogrzewanie',wn:'Woda odparowuje, sól krystalizuje na dnie — odzyskujemy substancję rozpuszczoną (wodę tracimy; chcąc ją odzyskać — destylacja).',bhp:'Gorąca parownica — szczypce; okulary (pryskanie pod koniec).'}},
 'GFX.rx · rozszerzenia.js (F03)');

/* ---------- 8. F05 — konstruktor: izotop / jon / inny pierwiastek + masa atomowa jako średnia ważona ----------
   Model wielokrotnego użytku (F04, F05, F06, A01…): `f05-izotopy-v01`. Dane izotopów z silnika (CHE.DATA.ISOTOPES). */
/* dane z silnika (bez lokalnej kopii): CHE.DATA.ELEMENTS_54 (symbol, nazwa) + CHE.DATA.ISOTOPES (A, masa, udział) */
function izo(z){var E=(D.ELEMENTS_54||[]).filter(function(e){return e.z===z})[0];if(!E)return null;
 var L=(D.ISOTOPES||{})[E.s]||[];return [E.s,String(E.n||E.s).toLowerCase(),L.map(function(x){return [x.A,x.atomicMass,(x.abundance||0)*100]}).sort(function(a,b){return b[2]-a[2]||a[0]-b[0]})]}
function supN(n){return String(n).replace(/[0-9]/g,function(d){return '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]})}
function subN(n){return String(n).replace(/[0-9]/g,function(d){return '₀₁₂₃₄₅₆₇₈₉'[d]})}
function chg(q){return q===0?'':(Math.abs(q)>1?supN(Math.abs(q)):'')+(q>0?'⁺':'⁻')}
function pl(x,d){return x.toFixed(d).replace('.',',')}
/* atomSVG usunięty 2026-10-09 — model atomu w lekcjach rysuje wspólny komponent CHE.LAB.atomBohr (engine/src/komponenty/atlas-gfx.js), ten sam co atlas (powłoki K, L, M — model szkolny 2, 8, 8). */
/* atomBohr, orbitalCloud → engine/src/dodatki/atlas-gfx.js (wspólne dla labu i lekcji, CHE.LAB.*) */

V.define('f05-izotopy-v01',{title:'Izotop, jon czy inny pierwiastek? Konstruktor atomu i masa atomowa',tag:'MODEL',
 hint:'Dodawaj i zabieraj protony, neutrony i elektrony. Model mówi, co się zmieniło: pierwiastek (Z), izotop (n) czy ładunek (e). Niżej: skąd się bierze masa atomowa z układu okresowego.',
 foot:'rozszerzenia.js §8 · dane: CHE.DATA.ISOTOPES, ELEMENTS_54',
 build:function(host){host.innerHTML='';host.classList.add('x5');
  var s={p:17,n:18,e:17},start={p:17,n:18,e:17};
  var pick=el('div','bar','<b>Start:</b>');host.appendChild(pick);
  [1,6,8,11,12,17,20].forEach(function(z){var d=izo(z);if(!d||!d[2].length)return;var b=el('button','o',d[0]);b.type='button';b.onclick=function(){s={p:z,n:d[2][0][0]-z,e:z};start={p:s.p,n:s.n,e:s.e};draw()};pick.appendChild(b)});
  var ctl=el('div','bar');host.appendChild(ctl);
  [['p','proton'],['n','neutron'],['e','elektron']].forEach(function(c){
   var m=el('button','o','− '+c[1]),p=el('button','o','+ '+c[1]);m.type=p.type='button';
   m.onclick=function(){if(s[c[0]]>(c[0]==='p'?1:0)){s[c[0]]--;draw()}};p.onclick=function(){if(s[c[0]]<(c[0]==='p'?20:c[0]==='n'?30:22)){s[c[0]]++;draw()}};ctl.append(m,p)});
  var g=el('div','two'),pic=el('div'),txt=el('div');g.append(pic,txt);host.appendChild(g);
  var avg=el('div');host.appendChild(avg);
  var stopAnim=null;
  function sym(z){var d=izo(z);return d?d[0]:('Z='+z)}
  function draw(){var A=s.p+s.n,q=s.p-s.e,X=sym(s.p),d=izo(s.p);
   /* rysunek: jądro (p czerwone, n szare) + elektrony na jednym okręgu (rozmieszczenie na powłokach — F07) */
   var n0=d&&d[2].length?d[2][0][0]-s.p:s.n;   /* obręcz na neutronach ponad najczęstszy izotop — jak w atlasie */
   pic.innerHTML='<canvas width="520" height="520" style="width:100%;max-width:320px;display:block;margin:auto;border-radius:12px" role="img" aria-label="Model atomu: '+s.p+' p, '+s.n+' n, '+s.e+' e"></canvas><div class="nt" style="text-align:center"><span style="color:#d6452b">●</span> proton &nbsp; <span style="color:#6f7882">●</span> neutron &nbsp; <span style="color:#2f8a55">●</span> elektron wewnętrzny &nbsp; <span style="color:#b85f00">●</span> elektron walencyjny <small>(powłoki K, L, M, N jak w atlasie — model szkolny 2, 8, 8; obwódka = neutron ponad najczęstszy izotop)</small></div>';
   if(stopAnim)stopAnim();var AB=C.LAB&&C.LAB.atomBohr;stopAnim=AB?AB.anim(pic.firstChild,{p:s.p,n:s.n,e:s.e,n0:n0,lupa:true,zoom:1.4}):null;
   var iso=d&&d[2].filter(function(x){return x[0]===A})[0];
   var zm=[];if(s.p!==start.p)zm.push('<b>zmieniła się liczba protonów</b> → to już <b>inny pierwiastek</b> ('+sym(start.p)+' → '+X+')');
   else{if(s.n!==start.n)zm.push('zmieniła się liczba neutronów → <b>inny izotop</b> tego samego pierwiastka');if(s.e!==start.e)zm.push('zmieniła się liczba elektronów → <b>jon</b>, pierwiastek ten sam')}
   txt.innerHTML='<div class="eq" style="font-size:22px">'+supN(A)+subN(s.p)+X+chg(q)+'</div>'+
    '<div class="nt"><b>'+(d?d[1]:X)+'</b> · Z = '+s.p+' · A = '+A+'<br>p⁺ = '+s.p+' · n⁰ = A − Z = '+s.n+' · e⁻ = '+s.e+
    '<br><b>Ładunek</b> q = p − e = '+(q>0?'+':'')+q+' → '+(q===0?'atom obojętny':q>0?'<b>kation</b> (oddał '+q+' e⁻)':'<b>anion</b> (przyjął '+(-q)+' e⁻)')+
    '<br><b>Izotop:</b> '+(!d||!d[2].length?'— (brak danych w modelu)':iso?(iso[2]>0?'naturalny, udział '+pl(iso[2],iso[2]<1?3:2)+'%':'występuje śladowo / promieniotwórczy'):'nieznany w przyrodzie — jądro nietrwałe lub nie istnieje')+'</div>'+
    '<div class="nt"><b>Co się zmieniło względem startu:</b><br>'+(zm.length?zm.join('<br>'):'nic — stan startowy (atom obojętny, najczęstszy izotop)')+'</div>';
   /* średnia ważona */
   if(!d||!d[2].length){avg.innerHTML='';return}
   var rows=d[2].filter(function(x){return x[2]>0}),M=0,t='';rows.forEach(function(x){var w=x[1]*x[2]/100;M+=w;
    t+='<tr><td>'+supN(x[0])+d[0]+'</td><td>'+pl(x[1],3)+' u</td><td>'+pl(x[2],x[2]<1?3:2)+'%</td><td>'+pl(w,3)+' u</td><td><div style="height:10px;width:'+Math.max(1,x[2]).toFixed(0)+'%;background:#2f7bd8;border-radius:3px"></div></td></tr>'});
   avg.innerHTML='<div class="nt" style="margin-top:10px"><b>Masa atomowa '+d[0]+' = średnia ważona mas izotopów</b> (masa × udział, potem suma):</div>'+
    '<div class="table-wrap"><table><thead><tr><th>izotop</th><th>masa</th><th>udział</th><th>wkład</th><th></th></tr></thead><tbody>'+t+'</tbody></table></div>'+
    '<div class="eq">Ar('+d[0]+') ≈ '+pl(M,M<100?2:1)+' u'+(rows.length>1?' — wynik leży między masami izotopów, bliżej najczęstszego':' — jeden trwały izotop, więc masa atomowa ≈ jego masa')+'</div>'}
  draw()}});

/* ---------- 9. F06 — rozbudowa istniejącego `periodic-54` (bez nowej tablicy) ----------
   Dokłada tryby: okres i grupa zaznaczonego, blok s/p/d, elektrony walencyjne, promień kowalencyjny, I energia jonizacji,
   oraz kartę „adres → elektrony → przewidywanie”. Dane: CHE.DATA.ELEMENTS_54, ATOM_META (powłoki), ATOMIC_PROPS
   (promień kowalencyjny), FIRST_IONIZATION_ENERGY (NIST). Braki promieni uzupełnia D.COVALENT_RADIUS_EXT (do weryfikacji). */
if(!D.COVALENT_RADIUS_EXT)D.COVALENT_RADIUS_EXT={unit:'pm',source:'Cordero i in., Dalton Trans. 2008 (promienie kowalencyjne; Mn, Fe, Co — niskospinowe) — do weryfikacji',
 values:{Li:128,Be:96,B:84,Ne:58,Ar:106,Sc:170,Ti:160,V:153,Cr:139,Mn:139,Co:126,Ni:124,Ga:122,Ge:120,As:119,Se:120,Br:120,Kr:116,Rb:220,Sr:195,Y:190,Zr:175,Nb:164,Mo:154,Tc:147,Ru:146,Rh:142,Pd:139,Cd:144,In:142,Sn:139,Sb:139,Te:138,Xe:140}};
(function(){
 var P54=V.views&&V.views.get&&V.views.get('periodic-54');if(!P54||P54._f06)return;
 var ROM=['','I','II','III','IV','V','VI','VII','VIII'],SH='KLMNOP';
 var FAM={1:'litowce (metale alkaliczne)',2:'berylowce',13:'borowce',14:'węglowce',15:'azotowce',16:'tlenowce',17:'fluorowce (halogeny)',18:'helowce (gazy szlachetne)'};
 function rad(s){var p=(D.ATOMIC_PROPS||{})[s];if(p&&p.covalentRadius)return p.covalentRadius;return (D.COVALENT_RADIUS_EXT.values||{})[s]||null}
 function ie(s){var x=(D.FIRST_IONIZATION_ENERGY||{})[s];return x&&x.value?x.value*96.485:null}/* eV → kJ/mol */
 function main(e){return e.g<=2||e.g>=13}
 function val(e){if(e.s==='He')return 2;if(!main(e))return null;return e.g<=2?e.g:e.g-10}
 function blk(e){return e.block||(e.s==='He'||e.g<=2?'s':e.g>=13?'p':'d')}
 function shells(e){var m=(D.ATOM_META||{})[e.s];return m&&m.shells?m.shells:null}
 function ion(e){var v=val(e);
  if(e.s==='H')return 'H⁺ (w kwasach) albo H⁻ (w wodorkach metali, N05) — wyjątek';
  if(e.t==='noble')return 'nie tworzy jonów — zewnętrzna powłoka zapełniona ('+(e.s==='He'?'dublet':'oktet')+')';
  if(!main(e))return 'metal przejściowy — kationy o różnych ładunkach (np. Fe²⁺, Fe³⁺); reguła grup głównych tu nie działa (F08)';
  if(e.t==='metal'){if(e.g===14)return 'metal — kationy '+e.s+'²⁺ lub '+e.s+'⁴⁺ (F08)';return 'oddaje '+v+' e⁻ → kation <b>'+e.s+(v>1?'⁰¹²³⁴⁵⁶⁷⁸⁹'[v]:'')+'⁺</b>'}
  if(e.t==='metalloid'||e.g===14)return 'zwykle nie tworzy jonów prostych — wspólne pary elektronów (wiązania kowalencyjne, F11)';
  var q=8-v;return 'przyjmuje '+q+' e⁻ → anion <b>'+e.s+(q>1?'⁰¹²³⁴⁵⁶⁷⁸⁹'[q]:'')+'⁻</b> (w związkach z metalami)'}
 function mix(a,b,t){var p=function(h){return[1,3,5].map(function(i){return parseInt(h.slice(i,i+2),16)})},A=p(a),B=p(b);return'#'+A.map(function(x,i){return Math.round(x+(B[i]-x)*t).toString(16).padStart(2,'0')}).join('')}
 var BC={s:['#fde2e2','#d64545'],p:['#dbeafe','#2f6fd6'],d:['#fef3c7','#c98a0b']};
 var MODES=[['adres','okres i grupa'],['blok','blok s / p / d'],['wal','e⁻ walencyjne'],['r','promień atomu'],['ie','energia jonizacji']];
 var LEG={adres:'Zaznaczony pierwiastek: jego <b>okres</b> (wiersz = liczba powłok w modelu szkolnym) i <b>grupa</b> (kolumna = podobna budowa zewnętrznej powłoki). Kliknij inny pierwiastek.',
  blok:'<b>Blok</b> = typ podpowłoki obsadzanej na końcu: s (grupy 1–2 i He), p (13–18), d (3–12, metale przejściowe). Blok f (lantanowce, aktynowce) leży poza zakresem 1–54. Szczegóły: F07–F08.',
  wal:'Liczba <b>elektronów walencyjnych</b> w grupach głównych: grupy 1–2 → numer grupy, 13–18 → numer grupy − 10 (He: 2). Szare = metale przejściowe — prosta reguła ich nie obejmuje.',
  r:'<b>Promień kowalencyjny</b> [pm]: rośnie w dół grupy (nowa powłoka), maleje w prawo okresu (większy ładunek jądra przy tej samej powłoce). Gazy szlachetne prawie nie tworzą wiązań — ich wartości są szacunkowe, nie wliczaj ich w trend. Ciemniej = większy.',
  ie:'<b>I energia jonizacji</b> [kJ/mol] — energia potrzebna do oderwania pierwszego elektronu: rośnie w prawo i w górę, odwrotnie niż promień. Wyjątki (Be > B, N > O) — §8. Ciemniej = większa.'};
 var B0=P54.build;
 V.define('periodic-54',Object.assign({},P54,{_f06:1,
  title:'Układ okresowy — pierwiastki 1–54: rodzaj, tlenki, okres i grupa, bloki, elektrony walencyjne, trendy',
  hint:'Koloruj wg rodzaju, charakteru tlenku, elektroujemności — albo wg okresu i grupy, bloku, liczby elektronów walencyjnych, promienia, energii jonizacji. Kliknij pierwiastek: adres → elektrony → przewidywanie.',
  foot:P54.foot+' · Tryby F06 (rozszerzenia.js §9): powłoki z CHE.DATA.ATOM_META, promień kowalencyjny z ATOMIC_PROPS + COVALENT_RADIUS_EXT (Cordero 2008, do weryfikacji), I energia jonizacji z FIRST_IONIZATION_ENERGY (NIST ASD, eV × 96,485).',
  build:function(host){B0.call(this,host);
   var row=host.querySelector('.r'),grid=host.querySelector('[style*="repeat(18"]');if(!row||!grid)return;
   var divs=[].slice.call(host.querySelectorAll('div')),leg=divs.filter(function(d){return d.style.fontSize==='11px'}).pop(),
       box=host.querySelector('[style*="surface-soft"]');
   var E=D.ELEMENTS_54,sel=E[16],m=null;
   var row2=document.createElement('div');row2.className='r';row2.style.marginTop='4px';row2.innerHTML='<label>F06:</label>'+MODES.map(function(x){return '<button data-f6="'+x[0]+'">'+x[1]+'</button>'}).join('');
   row.parentNode.insertBefore(row2,row.nextSibling);
   var card=document.createElement('div');card.className='f06-adres';card.style.cssText='margin-top:8px;padding:10px 12px;border-left:3px solid #0d6868;background:var(--surface-soft);border-radius:8px;font-size:13px;line-height:1.55';
   if(box&&box.parentNode)box.parentNode.insertBefore(card,box.nextSibling);else host.appendChild(card);
   function paint(){if(!m)return;var bs=grid.children,max=0,min=1e9,vals=E.map(function(e){return m==='r'?rad(e.s):m==='ie'?ie(e.s):null});
    vals.forEach(function(v){if(v!=null){max=Math.max(max,v);min=Math.min(min,v)}});
    E.forEach(function(e,i){var b=bs[i];if(!b)return;var bg='#f8fafc',bd='#cbd5e1',lab='',dark=false,fade=false;
     if(m==='adres'){var inP=e.p===sel.p,inG=e.g===sel.g;bg=inP&&inG?'#0d6868':inP?'#cde8e6':inG?'#fde7c8':'#f8fafc';bd=inP&&inG?'#0d6868':inP?'#0d6868':inG?'#c98a0b':'#e2e8f0';dark=inP&&inG;fade=!inP&&!inG;lab=inP&&inG?'okr '+e.p+' · gr '+e.g:''}
     else if(m==='blok'){var c=BC[blk(e)]||BC.d;bg=c[0];bd=c[1];lab=blk(e)}
     else if(m==='wal'){var v=val(e);if(v==null){bg='#eef1f4';bd='#cbd5e1';lab='—';fade=true}else{bg=mix('#eef7f6','#0d6868',v/8);bd='#0d6868';dark=v>=5;lab=v+' e⁻'}}
     else{var x=vals[i];if(x==null){lab='—';fade=true}else{var t=(x-min)/(max-min||1);bg=mix(m==='r'?'#fff7ed':'#f5f3ff',m==='r'?'#b45309':'#5b21b6',t);bd=m==='r'?'#b45309':'#5b21b6';dark=t>.55;lab=Math.round(x)+''}
      if(e.t==='noble'&&m==='r')fade=true}
     b.style.background=bg;b.style.borderColor=bd;b.style.color=dark?'#fff':'var(--text)';b.style.opacity=fade?'.55':'1';
     var sm=b.querySelectorAll('small');if(sm[1])sm[1].textContent=lab;
     b.style.boxShadow=e===sel?'0 0 0 3px var(--accent)':''});
    if(leg)leg.innerHTML=LEG[m]}
   function info(){var e=sel,v=val(e),sh=shells(e),r=rad(e.s),I=ie(e.s);
    var fam=e.s==='H'?'wodór — położenie wyjątkowe (§6)':main(e)?FAM[e.g]:'metale przejściowe (grupy 3–12)';
    card.innerHTML='<b>Adres → elektrony → przewidywanie: '+e.s+' ('+e.n+', Z = '+e.z+')</b><br>'+
     '<b>1. Adres:</b> okres '+e.p+', grupa '+e.g+' ('+(main(e)?'główna':'poboczna')+'), blok '+blk(e)+' · rodzina: '+fam+' · '+({metal:'metal',metalloid:'półmetal',nonmetal:'niemetal',halogen:'niemetal (fluorowiec)',noble:'gaz szlachetny'}[e.t]||e.t)+'<br>'+
     '<b>2. Elektrony:</b> '+(sh?'powłoki '+sh.map(function(n,k){return SH[k]}).join(', ')+' = '+sh.join(', ')+' → '+sh.length+' '+(sh.length===1?'powłoka':sh.length<5?'powłoki':'powłok')+' = numer okresu':'')+
     (v!=null?' · elektrony walencyjne: <b>'+v+'</b>':' · elektrony walencyjne: reguła grup głównych nie obejmuje metali przejściowych')+'<br>'+
     '<b>3. Przewidywanie:</b> '+ion(e)+'<br>'+
     '<span style="color:var(--text-muted)">elektroujemność '+(e.en?String(e.en).replace('.',','):'—')+' · promień kowalencyjny '+(r?r+' pm':'—')+' · I energia jonizacji '+(I?Math.round(I)+' kJ/mol':'—')+'</span>'}
   grid.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('button');if(!b)return;var i=[].indexOf.call(grid.children,b);if(i>=0&&E[i]){sel=E[i];info()}},true);
   new MutationObserver(function(){paint()}).observe(grid,{childList:true});
   row.querySelectorAll('[data-m]').forEach(function(b){b.addEventListener('click',function(){m=null;row2.querySelectorAll('[data-f6]').forEach(function(x){x.classList.remove('on')});grid.querySelectorAll('button').forEach(function(x){x.style.opacity='1'})})});
   row2.querySelectorAll('[data-f6]').forEach(function(b){b.onclick=function(){m=b.dataset.f6;row2.querySelectorAll('[data-f6]').forEach(function(x){x.classList.toggle('on',x===b)});row.querySelectorAll('[data-m]').forEach(function(x){x.classList.remove('on')});paint()}});
   host._st={get mode(){return m},get sel(){return sel.s},set:function(s,mm){var i=E.findIndex(function(e){return e.s===s});if(i>=0)grid.children[i].click();if(mm){var b=row2.querySelector('[data-f6="'+mm+'"]');if(b)b.click()}}};
   info()}}));
})();

/* ---------- 10. F06 — pracownia: podobieństwo w grupie i trend reaktywności (litowce + woda, fluorowce — wypieranie) ---------- */
var CLW='#e4ecb4',BRW='#e7a23c';
var RXF6={
 f06Cl2Kbr:{n:'woda chlorowa + KBr',l0:CLW,l1:BRW,out:['barwa'],eq:'Cl₂ + 2 KBr → 2 KCl + Br₂',why:'Bezbarwny roztwór KBr po dodaniu wody chlorowej żółknie, potem staje się pomarańczowy — wydzielił się brom. Chlor wyparł brom z jego soli.'},
 f06Cl2Ki:{n:'woda chlorowa + KI',l0:CLW,l1:'sol-i2',out:['barwa'],eq:'Cl₂ + 2 KI → 2 KCl + I₂',why:'Roztwór KI brunatnieje — wydzielił się jod (ze skrobią: granatowe zabarwienie). Chlor wyparł jod.'},
 f06Br2Ki:{n:'woda bromowa + KI',l0:BRW,l1:'sol-i2',out:['barwa'],eq:'Br₂ + 2 KI → 2 KBr + I₂',why:'Pomarańczowa woda bromowa w roztworze KI zmienia barwę na brunatną — jod został wyparty przez brom.'},
 f06I2Kbr:{n:'woda jodowa + KBr (brak reakcji)',l0:'sol-i2',l1:'sol-i2',out:['nic'],qualitative:1,noRx:1,eq:'I₂ + KBr → brak reakcji',why:'Barwa się nie zmienia: jod jest mniej aktywny od bromu i nie wypiera go z soli.'}
};
var RDF6={
 f06Cl2Kbr:[R([[1,'Cl2'],[2,'KBr']],[[2,'KCl'],[1,'Br2']]),{type:'wypieranie fluorowca (redoks)',conditions:'roztwory wodne, temperatura pokojowa',observation:'roztwór żółknie/pomarańczowieje — wydziela się Br₂',safety:['woda chlorowa i bromowa — dygestorium, rękawice'],level:'LO',lesson:'F06'}],
 f06Cl2Ki:[R([[1,'Cl2'],[2,'KI']],[[2,'KCl'],[1,'I2']]),{type:'wypieranie fluorowca (redoks)',conditions:'roztwory wodne, temperatura pokojowa',observation:'roztwór brunatnieje — wydziela się I₂ (ze skrobią granatowy)',safety:['woda chlorowa — dygestorium'],level:'LO',lesson:'F06'}],
 f06Br2Ki:[R([[1,'Br2'],[2,'KI']],[[2,'KBr'],[1,'I2']]),{type:'wypieranie fluorowca (redoks)',conditions:'roztwory wodne, temperatura pokojowa',observation:'pomarańczowy roztwór brunatnieje — wydziela się I₂',safety:['woda bromowa — dygestorium, rękawice'],level:'LO',lesson:'F06'}]};
var SBF6={KBr:['bromek potasu','s',119.00,'sól',[],['fotografia (dawniej)','źródło jonów Br⁻ w laboratorium']]};
Object.keys(SBF6).forEach(function(f){if(D.SUBSTANCES[f]||byF[f])return;var a=SBF6[f];D.SUBSTANCES[f]={formula:f,name:a[0],state:a[1],molarMass:a[2],role:a[3],safety:a[4],uses:a[5],src:'rozszerzenia.js'}});
Object.keys(RDF6).forEach(function(k){if(D.REACTIONS[k])return;D.REACTIONS[k]=RDF6[k][0];D.REACTION_DATA[k]=Object.assign({products:RDF6[k][0].products.map(function(x){return x.formula})},RDF6[k][1])});
if(rx)Object.keys(RXF6).forEach(function(k){if(!rx.get(k))rx.register(k,RXF6[k])});
pracownia('f06-doswiadczenia-v01','Pracownia: rodzina pierwiastków i trend w grupie','Grupa 1: lit, sód i potas z wodą (z fenoloftaleiną) — ta sama reakcja, rosnąca gwałtowność. Grupa 17: który fluorowiec wypiera który z soli?',
 [['Litowce + woda',['liH2o','naH2o','kH2o']],['Fluorowce — wypieranie',['f06Cl2Kbr','f06Cl2Ki','f06Br2Ki','f06I2Kbr']]],
 {liH2o:{eq:'2 Li + 2 H₂O → 2 LiOH + H₂↑',war:'mała grudka litu w krystalizatorze z wodą i fenoloftaleiną (pokaz)',wn:'Lit reaguje najspokojniej z trzech — leży najwyżej w grupie 1.',bhp:'pokaz nauczyciela; okulary, osłona'},
  naH2o:{eq:'2 Na + 2 H₂O → 2 NaOH + H₂↑',war:'kawałek sodu wielkości ziarna grochu, krystalizator z wodą i fenoloftaleiną, osłona (pokaz)',wn:'Sód reaguje gwałtowniej niż lit: ta sama reakcja (wodorotlenek + wodór), większa szybkość.',bhp:'tylko pokaz; sód przechowywany pod naftą, kroić na sucho; osłona'},
  kH2o:{eq:'2 K + 2 H₂O → 2 KOH + H₂↑',war:'bardzo mała grudka potasu (pokaz za osłoną)',wn:'Potas reaguje najgwałtowniej — reaktywność litowców rośnie w dół grupy (łatwiej oddają elektron walencyjny).',bhp:'wyłącznie pokaz za osłoną; ryzyko rozprysku i zapłonu wodoru'},
  f06Cl2Kbr:{war:'do roztworu KBr dodajemy kilka kropli wody chlorowej',wn:'Chlor jest aktywniejszy od bromu — wypiera go z bromku.',bhp:'dygestorium; chlor i brom trujące'},
  f06Cl2Ki:{war:'do roztworu KI dodajemy kilka kropli wody chlorowej (dla pewności — kroplę kleiku skrobiowego)',wn:'Chlor jest aktywniejszy od jodu.',bhp:'dygestorium'},
  f06Br2Ki:{war:'do roztworu KI dodajemy kilka kropli wody bromowej',wn:'Brom jest aktywniejszy od jodu — reaktywność fluorowców maleje w dół grupy: Cl > Br > I.',bhp:'dygestorium, rękawice'},
  f06I2Kbr:{war:'do roztworu KBr dodajemy wodę jodową',wn:'Brak zmiany potwierdza szereg: słabszy fluorowiec nie wypiera silniejszego.',bhp:'jod barwi skórę; okulary'}},
 'GFX.rx · rozszerzenia.js (F06)');

})();

/* ---------- 11. Wzorcownia → biblioteka (2026-10-09): F09 karty, F10 energia H₂, F15 dipol, F17 bilans ----------
   Prototypy z wizualizacje-projekty/wzorcownia.html przeniesione do CHE.VIEW. Elektroujemność z CHE.DATA (ELEMENTS_118/54),
   zapas: wartości Paulinga. Każdy widok rysuje się w swoim hoście (bez globalnych id) — można montować wielokrotnie. */
(function(){
var C=window.CHE;if(!C||!C.VIEW||!C.VIEW.define||C.EXT_WZOR)return;C.EXT_WZOR=1;
var V=C.VIEW,D=C.DATA||{},NS='http://www.w3.org/2000/svg',MINUS='−',UID=0;
var css=document.createElement('style');css.textContent=
'.xw{font:14px/1.5 Inter,system-ui,sans-serif;color:inherit;display:grid;gap:10px}.xw .ctl{display:flex;flex-wrap:wrap;gap:6px;align-items:center}'+
'.xw .seg{display:flex;flex-wrap:wrap;gap:4px}.xw .seg button,.xw select{font:600 12.5px Inter,system-ui;border:1px solid var(--line,#d5dee6);background:var(--panel,#fff);color:inherit;padding:5px 10px;border-radius:7px;cursor:pointer}'+
'.xw .seg button[aria-pressed=true]{background:#0d6868;border-color:#0d6868;color:#fff}.xw label.chk{display:inline-flex;gap:5px;align-items:center;font-size:13px}'+
'.xw .out{background:var(--panel-2,#f1f5f8);border-left:3px solid #0d6868;border-radius:6px;padding:8px 10px;font-size:13.5px;display:grid;gap:4px}'+
'.xw .tbl{overflow-x:auto}.xw table{border-collapse:collapse;width:100%;font-size:13.5px}.xw th,.xw td{padding:4px 6px;border-bottom:1px solid var(--line,#e2e8ee);text-align:left}'+
'.xw th button{all:unset;cursor:pointer;font-weight:700;border-bottom:2px dotted currentColor}.xw .hl{background:#e3f1f1}.xw .mono{font-family:ui-monospace,Consolas,monospace}'+
'.xw .okc{color:#2b7a4b;font-weight:700}.xw .badc{color:#b83a45;font-weight:700}.xw .chip{display:inline-block;font:600 12px ui-monospace,monospace;padding:1px 8px;border-radius:999px}'+
'.xw .chip.ok{background:#dcefe3;color:#2b7a4b}.xw .chip.bad{background:#f6dfda;color:#b83a45}.xw .chip.warn{background:#f6ecd5;color:#9a6a12}'+
'.xw .eqb{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font:600 15px ui-monospace,Consolas,monospace}'+
'.xw .sp{display:inline-flex;align-items:center;gap:2px;border:1px solid var(--line,#d5dee6);border-radius:8px;padding:3px 4px}.xw .sp button{all:unset;cursor:pointer;width:24px;height:24px;text-align:center;border-radius:5px;background:var(--panel-2,#eef3f6);font-weight:700}'+
'.xw .sp .k{min-width:16px;text-align:center;font-weight:800;color:#0d6868}.xw .tally{display:flex;flex-wrap:wrap;gap:2px;max-width:150px}.xw .tally i{width:9px;height:9px;border-radius:2px;display:inline-block}'+
'.xw svg{width:100%;max-width:560px;display:block}.xw svg text{font-family:system-ui,sans-serif}';
document.head.appendChild(css);
function S(t,a,x){var e=document.createElementNS(NS,t);if(a)for(var k in a)e.setAttribute(k,a[k]);if(x!=null)e.textContent=x;return e}
function H(t,a,h){var e=document.createElement(t);if(a)for(var k in a){if(k==='text')e.textContent=a[k];else e.setAttribute(k,a[k])}if(h!=null)e.innerHTML=h;return e}
function clr(e){while(e.firstChild)e.removeChild(e.firstChild)}
function pl(x,d){return x.toFixed(d).replace('.',',')}
function seg(box,items,cur,cb){clr(box);items.forEach(function(it){var b=H('button',{type:'button','aria-pressed':String(it[0]===cur)});b.textContent=it[1];b.onclick=function(){cb(it[0])};box.appendChild(b)})}
var ROM=['0','I','II','III','IV','V','VI','VII','VIII'];function stTxt(v){return v===0?'0':(v>0?'+':MINUS)+ROM[Math.abs(v)]}
var ENZ={H:2.20,C:2.55,N:3.04,O:3.44,Cl:3.16,F:3.98,S:2.58};
function EN(s){var L=D.ELEMENTS_118||D.ELEMENTS_54||[];for(var i=0;i<L.length;i++)if(L[i].s===s&&L[i].en!=null)return L[i].en;return ENZ[s]}
function base(host,cls){host.innerHTML='';host.classList.add('xw');if(cls)host.classList.add(cls);return host}

/* F09 — ładunek / wartościowość / stopień utlenienia */
var F09={
 H2O:{n:'H₂O',q:0,at:[['H',2,null,1,1],['O',1,null,2,-2]],u:'Wartościowość i stopień utlenienia mają tu tę samą cyfrę, ale stopień utlenienia ma znak. Ładunku nie ma żaden atom: cząsteczka jest obojętna.'},
 O2:{n:'O₂',q:0,at:[['O',2,null,2,0]],u:'Pierwiastek: stopień utlenienia 0, choć każdy atom tlenu tworzy dwa wiązania (wartościowość II).'},
 H2O2:{n:'H₂O₂',q:0,at:[['H',2,null,1,1],['O',2,null,2,-1]],u:'Nadtlenek: tlen ma wartościowość II (H–O–O–H), ale stopień utlenienia −I.'},
 CH4:{n:'CH₄',q:0,at:[['C',1,null,4,-4],['H',4,null,1,1]],u:'Węgiel: wartościowość IV i stopień utlenienia −IV. Ta sama cyfra, inne znaczenie.'},
 CO2:{n:'CO₂',q:0,at:[['C',1,null,4,4],['O',2,null,2,-2]],u:'Węgiel +IV: elektrony wiązań przypisujemy bardziej elektroujemnemu tlenowi.'},
 NaCl:{n:'NaCl',q:0,at:[['Na',1,1,1,1],['Cl',1,-1,1,-1]],u:'Związek jonowy: ładunek jonu, wartościowość i stopień utlenienia pokrywają się liczbowo.'},
 Fe2O3:{n:'Fe₂O₃',q:0,at:[['Fe',2,3,3,3],['O',3,-2,2,-2]],u:'Kationy Fe³⁺ i aniony O²⁻: suma ładunków 2·(3+) + 3·(2−) = 0.'},
 SO4:{n:'SO₄²⁻',q:-2,at:[['S',1,null,6,6],['O',4,null,2,-2]],u:'Jon wieloatomowy: ładunek 2− ma cały jon, nie pojedynczy atom. Suma stopni utlenienia równa się ładunkowi jonu.'}};
var F09D={lad:['Ładunek','Ile ładunków elementarnych ma drobina (jon): ładunek = p − e. Atom w obojętnej cząsteczce nie ma ładunku.',['Czy drobina jest jonem?','Jon prosty: ładunek z położenia w układzie (gr. 1 → 1+, gr. 2 → 2+, gr. 16 → 2−, gr. 17 → 1−).','Jon złożony: ładunek ma cały jon.']],
 wart:['Wartościowość','Liczba wiązań, które tworzy atom (w związku jonowym: liczba oddanych lub przyjętych elektronów). Bez znaku, cyfrą rzymską.',['Narysuj wzór kreskowy.','Policz kreski wychodzące z atomu (wiązanie podwójne = 2).','Zapisz cyfrą rzymską.']],
 st:['Stopień utlenienia','Umowny ładunek atomu, gdyby wszystkie wiązania były jonowe: elektrony wiązania oddajemy atomowi bardziej elektroujemnemu.',['Pierwiastek wolny → 0.','F zawsze −I; O zwykle −II (w nadtlenkach −I); H zwykle +I (w wodorkach metali −I).','Suma stopni utlenienia = ładunek drobiny; policz niewiadomą.']]};
V.define('f09-trzy-liczby-v01',{title:'Ładunek, wartościowość, stopień utlenienia — ta sama drobina, trzy pytania',tag:'MODEL',
 hint:'Wybierz drobinę i kliknij nagłówek kolumny: definicja, algorytm i kontrola sumy stopni utlenienia.',foot:'rozszerzenia.js §11 (V008, wzorcownia)',
 build:function(host){base(host);var sel=H('div',{'class':'seg ctl'}),tw=H('div',{'class':'tbl'}),t=H('table'),out=H('div',{'class':'out'});tw.appendChild(t);[sel,tw,out].forEach(function(e){host.appendChild(e)});
  var st={k:'H2O',col:'st'};
  function draw(){var d=F09[st.k];clr(t);var hr=H('tr');hr.appendChild(H('th',{text:'Atom'}));
   [['lad','Ładunek'],['wart','Wartościowość'],['st','Stopień utlenienia']].forEach(function(c){var th=H('th');if(c[0]===st.col)th.className='hl';var b=H('button',{type:'button','aria-pressed':String(c[0]===st.col)});b.textContent=c[1];b.onclick=function(){st.col=c[0];draw()};th.appendChild(b);hr.appendChild(th)});t.appendChild(hr);
   d.at.forEach(function(a){var tr=H('tr');tr.appendChild(H('td',{'class':'mono',text:a[0]+(a[1]>1?' (×'+a[1]+')':'')}));
    var lad=a[2]!=null?(Math.abs(a[2])+(a[2]>0?'+':MINUS)):(d.q!==0?'— (cały jon: '+Math.abs(d.q)+MINUS+')':'brak');
    [['lad',lad],['wart',ROM[a[3]]],['st',stTxt(a[4])]].forEach(function(c){tr.appendChild(H('td',{'class':'mono'+(c[0]===st.col?' hl':''),text:c[1]}))});t.appendChild(tr)});
   var sum=0,parts=[];d.at.forEach(function(a){sum+=a[1]*a[4];parts.push(a[1]+'·('+stTxt(a[4])+')')});var X=F09D[st.col];
   out.innerHTML='<b>'+X[0]+'</b><span>'+X[1]+'</span><span>Algorytm: '+X[2].map(function(x,i){return (i+1)+'. '+x}).join(' ')+'</span>'+
    '<span>Kontrola: '+parts.join(' + ')+' = '+(sum===0?'0':(sum>0?'+':MINUS)+Math.abs(sum))+' = ładunek drobiny '+(sum===d.q?'<span class="okc">✓</span>':'<span class="badc">✗</span>')+'</span><span><b>'+d.n+':</b> '+d.u+'</span>';
   seg(sel,Object.keys(F09).map(function(k){return [k,F09[k].n]}),st.k,function(k){st.k=k;draw()})}
  draw()}});

/* F10 — energia dwóch atomów H (krzywa Morse'a, schemat) */
V.define('f10-energia-h2-v01',{title:'Energia dwóch atomów wodoru — skąd się bierze wiązanie',tag:'WYKRES',
 hint:'Przesuwaj suwak: atomy zbliżają się, kropka na wykresie pokazuje energię układu. Minimum = długość i energia wiązania H–H.',foot:'krzywa Morse’a dla H₂ (schemat); 74 pm, 436 kJ/mol — do weryfikacji · rozszerzenia.js §11 (V009)',
 build:function(host){base(host);var id='xw'+(++UID),svg=S('svg',{viewBox:'0 0 360 300',role:'img','aria-label':'Dwa atomy wodoru i wykres energii od odległości jąder'}),ctl=H('div',{'class':'ctl'}),out=H('div',{'class':'out'});
  ctl.innerHTML='<label class="chk">Odległość jąder</label>';var rng=H('input',{type:'range',min:'30',max:'300',value:'160',style:'flex:1;min-width:140px','aria-label':'Odległość jąder w pikometrach'});ctl.appendChild(rng);[svg,ctl,out].forEach(function(e){host.appendChild(e)});
  var De=436,re=74,a=0.0194;function E(r){var x=1-Math.exp(-a*(r-re));return De*x*x-De}
  var X0=46,X1=345,Y0=112,Y1=282,EMAX=300,EMIN=-500;function px(r){return X0+(r-30)/(300-30)*(X1-X0)}function py(e){return Y0+(EMAX-e)/(EMAX-EMIN)*(Y1-Y0)}
  var defs=S('defs'),g=S('radialGradient',{id:id+'c'});g.appendChild(S('stop',{offset:'0','stop-color':'#5aa6ad','stop-opacity':'.55'}));g.appendChild(S('stop',{offset:'1','stop-color':'#5aa6ad','stop-opacity':'0'}));defs.appendChild(g);
  var cp=S('clipPath',{id:id+'k'});cp.appendChild(S('rect',{x:X0,y:Y0,width:X1-X0,height:Y1-Y0}));defs.appendChild(cp);
  var mk=S('marker',{id:id+'a',viewBox:'0 0 10 10',refX:'8',refY:'5',markerWidth:'6',markerHeight:'6',orient:'auto-start-reverse'});mk.appendChild(S('path',{d:'M0,0L10,5L0,10z',fill:'#1a2528'}));defs.appendChild(mk);svg.appendChild(defs);
  svg.appendChild(S('text',{x:12,y:18,'font-size':'11',fill:'#5a6a6d'},'model: dwa atomy H'));svg.appendChild(S('line',{x1:10,y1:96,x2:350,y2:96,stroke:'#d3dddb'}));
  for(var e=-400;e<=200;e+=200){svg.appendChild(S('line',{x1:X0,x2:X1,y1:py(e),y2:py(e),stroke:e===0?'#9fb0ad':'#e8efed'}));svg.appendChild(S('text',{x:X0-4,y:py(e)+4,'text-anchor':'end','font-size':'10',fill:'#5a6a6d'},e===0?'0':(e<0?MINUS+(-e):e)))}
  for(var r=50;r<=300;r+=50){svg.appendChild(S('line',{x1:px(r),x2:px(r),y1:Y1,y2:Y1+4,stroke:'#5a6a6d'}));svg.appendChild(S('text',{x:px(r),y:Y1+15,'text-anchor':'middle','font-size':'10',fill:'#5a6a6d'},r))}
  svg.appendChild(S('line',{x1:X0,x2:X1,y1:Y1,y2:Y1,stroke:'#5a6a6d'}));svg.appendChild(S('text',{x:X1,y:Y1-4,'text-anchor':'end','font-size':'10',fill:'#5a6a6d'},'r / pm'));svg.appendChild(S('text',{x:X0+4,y:Y0+10,'font-size':'10',fill:'#5a6a6d'},'E / kJ·mol⁻¹'));
  var dp='';for(var rr=30;rr<=300;rr+=2)dp+=(rr===30?'M':'L')+px(rr).toFixed(1)+','+py(Math.min(E(rr),EMAX+40)).toFixed(1);
  svg.appendChild(S('path',{d:dp,fill:'none',stroke:'#0d6b70','stroke-width':'2.4','clip-path':'url(#'+id+'k)'}));
  svg.appendChild(S('line',{x1:px(re),x2:px(re),y1:py(-De),y2:Y1,stroke:'#0d6b70','stroke-dasharray':'3 3'}));svg.appendChild(S('line',{x1:X0,x2:px(re),y1:py(-De),y2:py(-De),stroke:'#0d6b70','stroke-dasharray':'3 3'}));
  svg.appendChild(S('text',{x:px(re)+6,y:py(-De)+4,'font-size':'10',fill:'#0d6b70','font-weight':'700'},'minimum: 74 pm, '+MINUS+'436'));
  var dyn=S('g');svg.appendChild(dyn);
  function ar(x1,x2,y,c,w){dyn.appendChild(S('line',{x1:x1,y1:y,x2:x2,y2:y,stroke:c,'stroke-width':w,'marker-end':'url(#'+id+'a)'}))}
  function draw(){var r=+rng.value,en=E(r);clr(dyn);var sep=r*0.55,cx=180,y=56,x1=cx-sep/2,x2=cx+sep/2;
   [x1,x2].forEach(function(x){dyn.appendChild(S('circle',{cx:x,cy:y,r:30,fill:'url(#'+id+'c)'}));dyn.appendChild(S('circle',{cx:x,cy:y,r:4,fill:'#c03d2c'}));dyn.appendChild(S('text',{x:x,y:y+44,'text-anchor':'middle','font-size':'10',fill:'#5a6a6d'},'p⁺'))});
   var z=r>220?['Daleko','Atomy prawie się nie oddziałują, energia układu ≈ 0.']:r>=85?['Przyciąganie','Elektron każdego atomu przyciąga też drugie jądro: energia spada, atomy zbliżają się.']:r>=63?['Minimum energii','Najtrwalszy układ. Ta odległość to długość wiązania H–H (ok. 74 pm).']:['Za blisko','Dwa dodatnie jądra silnie się odpychają: energia gwałtownie rośnie.'];
   if(r>=85&&r<=220){ar(x1-38,x1-14,y,'#1a2528',1.6);ar(x2+38,x2+14,y,'#1a2528',1.6)}if(r<63){ar(x1-8,x1-34,y,'#c03d2c',1.8);ar(x2+8,x2+34,y,'#c03d2c',1.8)}
   dyn.appendChild(S('circle',{cx:px(r),cy:py(Math.min(en,EMAX)),r:6,fill:'#f5c542',stroke:'#1a2528','stroke-width':'1.5'}));
   var ro=Math.round(en);out.innerHTML='<b>'+z[0]+'</b><span>'+z[1]+'</span><span class="mono">r = '+r+' pm · E ≈ '+(en>=EMAX?'&gt; 300':(ro<0?MINUS+Math.abs(ro):ro))+' kJ/mol</span>'}
  rng.addEventListener('input',draw);draw()}});

/* F15 — wektory dipola (EN z danych silnika) */
var c68=0.372,s68=Math.sqrt(1-c68*c68),ct=1/3,stt=Math.sqrt(1-ct*ct);
function ring(n,cs,sn,len,off){var o=[];for(var i=0;i<n;i++){var f=(off+i*120)*Math.PI/180;o.push([len*sn*Math.cos(f),-len*cs,len*sn*Math.sin(f)])}return o}
var M15={
 CO2:{n:'CO₂',c:'C',L:[['O',[1.16,0,0]],['O',[-1.16,0,0]]],lp:[],v:'Wiązania C=O są polarne, ale cząsteczka jest liniowa: dwa wektory mają przeciwne zwroty i znoszą się. Cząsteczka niepolarna.'},
 H2O:{n:'H₂O',c:'O',L:[['H',[0.96*Math.sin(0.912),-0.96*Math.cos(0.912),0]],['H',[-0.96*Math.sin(0.912),-0.96*Math.cos(0.912),0]]],lp:[[0.32,0.42,0.2],[-0.32,0.42,-0.2]],v:'Wiązania O–H polarne. Kształt kątowy (104,5°): wektory nie znoszą się, suma wskazuje tlen. Cząsteczka polarna.'},
 NH3:{n:'NH₃',c:'N',L:ring(3,c68,s68,1.01,90).map(function(p){return ['H',p]}),lp:[[0,0.55,0]],v:'Wiązania N–H polarne. Piramida trygonalna (107°): suma wektorów wskazuje azot, po stronie wolnej pary. Cząsteczka polarna.'},
 CH4:{n:'CH₄',c:'C',L:[['H',[0,1.09,0]]].concat(ring(3,ct,stt,1.09,90).map(function(p){return ['H',p]})),lp:[],v:'Wiązania C–H słabo polarne. Tetraedr: cztery jednakowe wektory dają sumę zero. Cząsteczka niepolarna.'},
 HCl:{n:'HCl',c:'Cl',L:[['H',[-1.27,0,0]]],lp:[[0.45,0.3,0],[0.45,-0.3,0],[0.55,0,0.3]],v:'Jedno wiązanie H–Cl, polarne. Nie ma drugiego wektora, który mógłby je znieść. Cząsteczka polarna.'}};
var COL15={H:'#ffffff',C:'#3d4447',N:'#3459c9',O:'#d0402e',Cl:'#3d9a3d'};
V.define('f15-dipol-v01',{title:'Wektory dipola — polarność wiązań a polarność cząsteczki',tag:'MODEL',
 hint:'Włączaj warstwy po kolei: elektroujemność, cząstkowe ładunki δ, wektory wiązań i ich suma μ. Kształt (VSEPR) decyduje, czy wektory się znoszą.',foot:'EN wg Paulinga z danych silnika · strzałka wskazuje atom δ− (konwencja szkolna) · rozszerzenia.js §11 (V012)',
 build:function(host){base(host);var id='xw'+(++UID),sel=H('div',{'class':'seg ctl'}),lb=H('div',{'class':'ctl'}),svg=S('svg',{viewBox:'0 0 360 250',role:'img','aria-label':'Cząsteczka z wektorami dipola'}),out=H('div',{'class':'out'});[sel,lb,svg,out].forEach(function(e){host.appendChild(e)});
  var lay={en:true,d:true,w:true,s:true},cur='H2O',A=25*Math.PI/180,B=14*Math.PI/180,SC=78,CX=180,CY=120;
  function P(p){var x=p[0]*Math.cos(A)+p[2]*Math.sin(A),z=-p[0]*Math.sin(A)+p[2]*Math.cos(A),y=p[1]*Math.cos(B)-z*Math.sin(B);return [CX+x*SC,CY-y*SC,z]}
  function nrm(v){var l=Math.hypot(v[0],v[1],v[2]);return [v[0]/l,v[1]/l,v[2]/l]}
  var defs=S('defs');['#c03d2c','#1a2528'].forEach(function(c,i){var mk=S('marker',{id:id+'a'+i,viewBox:'0 0 10 10',refX:'8',refY:'5',markerWidth:i?'5':'6',markerHeight:i?'5':'6',orient:'auto'});mk.appendChild(S('path',{d:'M0,0L10,5L0,10z',fill:c}));defs.appendChild(mk)});
  function arrow(x1,y1,x2,y2,c,w,m){svg.appendChild(S('line',{x1:x1,y1:y1,x2:x2,y2:y2,stroke:c,'stroke-width':w,'marker-end':'url(#'+id+'a'+m+')','stroke-linecap':'round'}));var dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l,tx=x1+dx/l*7,ty=y1+dy/l*7;svg.appendChild(S('line',{x1:tx+nx*5,y1:ty+ny*5,x2:tx-nx*5,y2:ty-ny*5,stroke:c,'stroke-width':w}))}
  function draw(){var m=M15[cur];clr(svg);svg.appendChild(defs);var pc=P([0,0,0]),sum=[0,0,0],g=S('g');svg.appendChild(g);
   m.L.forEach(function(L){var q=P(L[1]);g.appendChild(S('line',{x1:pc[0],y1:pc[1],x2:q[0],y2:q[1],stroke:'#9aa8a6','stroke-width':'5','stroke-linecap':'round'}))});
   m.lp.forEach(function(lp){var p=P(lp);g.appendChild(S('circle',{cx:p[0]-4,cy:p[1],r:2.6,fill:'#1a2528'}));g.appendChild(S('circle',{cx:p[0]+4,cy:p[1],r:2.6,fill:'#1a2528'}))});
   var all=[[m.c,[0,0,0]]].concat(m.L);
   all.map(function(a,i){return {s:a[0],p:P(a[1]),c:i===0}}).sort(function(a,b){return a.p[2]-b.p[2]}).forEach(function(a){var rad=a.s==='H'?13:19;
    g.appendChild(S('circle',{cx:a.p[0],cy:a.p[1],r:rad,fill:COL15[a.s],stroke:'#1a2528','stroke-width':'1.2'}));g.appendChild(S('text',{x:a.p[0],y:a.p[1]+4,'text-anchor':'middle','font-size':a.s==='H'?'11':'13','font-weight':'700',fill:a.s==='H'?'#1a2528':'#ffffff'},a.s));
    if(lay.en)g.appendChild(S('text',{x:a.p[0],y:a.p[1]+rad+12,'text-anchor':'middle','font-size':'10',fill:'#5a6a6d'},pl(EN(a.s),2)));
    if(lay.d){var o=a.c?m.L[0][0]:m.c,neg=EN(a.s)>EN(o);g.appendChild(S('text',{x:a.p[0]+rad*.75,y:a.p[1]-rad*.75,'font-size':'12','font-weight':'700',fill:neg?'#c03d2c':'#2a62b5'},neg?'δ−':'δ+'))}});
   var dE=0;m.L.forEach(function(L){var d=nrm(L[1]),de=EN(m.c)-EN(L[0]);dE=Math.abs(de);var v=[d[0]*-de,d[1]*-de,d[2]*-de];sum=[sum[0]+v[0],sum[1]+v[1],sum[2]+v[2]];
    if(!lay.w)return;var q=P(L[1]),mx=(pc[0]+q[0])/2,my=(pc[1]+q[1])/2,dx=q[0]-pc[0],dy=q[1]-pc[1],l=Math.hypot(dx,dy),ux=dx/l,uy=dy/l,nx=-uy,ny=ux,len=14+34*Math.abs(de),s=de>0?-1:1;
    arrow(mx-ux*len/2*s+nx*12,my-uy*len/2*s+ny*12,mx+ux*len/2*s+nx*12,my+uy*len/2*s+ny*12,'#1a2528',1.8,1)});
   var mag=Math.hypot(sum[0],sum[1],sum[2]);
   if(lay.s){if(mag>.05){var tip=P([sum[0]*.6,sum[1]*.6,sum[2]*.6]),bs=P([-sum[0]*.25,-sum[1]*.25,-sum[2]*.25]),bx=bs[0]+70,tx=tip[0]+70;arrow(bx,bs[1],tx,tip[1],'#c03d2c',3.2,0);svg.appendChild(S('text',{x:tx+6,y:tip[1]+4,'font-size':'13','font-weight':'700',fill:'#c03d2c'},'μ'));svg.appendChild(S('text',{x:bx+6,y:bs[1]+14,'font-size':'10',fill:'#c03d2c'},'suma'))}
    else svg.appendChild(S('text',{x:300,y:40,'font-size':'13','font-weight':'700',fill:'#2b7a4b','text-anchor':'middle'},'μ = 0'))}
   out.innerHTML='<b>'+m.n+': cząsteczka '+(mag>.05?'polarna':'niepolarna')+'</b><span>'+m.v+'</span><span class="mono">ΔEN wiązania = '+pl(dE,2)+' · długość wektora sumy (umowna): '+pl(mag,2)+'</span>';
   seg(sel,Object.keys(M15).map(function(k){return [k,M15[k].n]}),cur,function(k){cur=k;draw()})}
  [['en','1 · EN'],['d','2 · δ'],['w','3 · wektory wiązań'],['s','4 · suma μ']].forEach(function(x){var l=H('label',{'class':'chk'}),i=H('input',{type:'checkbox'});i.checked=true;i.onchange=function(){lay[x[0]]=i.checked;draw()};l.appendChild(i);l.appendChild(document.createTextNode(x[1]));lb.appendChild(l)});
  draw()}});

/* F17 — bilans równania: atomy + ładunek */
var SUBN='₀₁₂₃₄₅₆₇₈₉',SUP={1:'',2:'²',3:'³'};
function parse(f){var st=[{}],re=/([A-Z][a-z]?|\(|\)|\d+)/g,m,last=null;
 while((m=re.exec(f))){var t=m[1];
  if(t==='('){st.push({});last=null}
  else if(t===')'){last=st.pop();var top=st[st.length-1];for(var k in last)top[k]=(top[k]||0)+last[k];last={grp:last}}
  else if(/\d/.test(t)){var n=+t,t2=st[st.length-1];if(last&&last.grp){for(var k2 in last.grp)t2[k2]+=last.grp[k2]*(n-1)}else if(last){t2[last.el]+=n-1}last=null}
  else{var tp=st[st.length-1];tp[t]=(tp[t]||0)+1;last={el:t}}}
 return st[0]}
function disp(f,q){var s=f.replace(/\d/g,function(d){return SUBN[+d]});if(q){var a=Math.abs(q);s+=(a>1?SUP[a]:'')+(q>0?'⁺':'⁻')}return s}
var EQ17=[
 {n:'wodór + tlen → woda',L:[['H2',0],['O2',0]],R:[['H2O',0]]},{n:'spalanie metanu',L:[['CH4',0],['O2',0]],R:[['CO2',0],['H2O',0]]},
 {n:'spalanie propanu',L:[['C3H8',0],['O2',0]],R:[['CO2',0],['H2O',0]]},{n:'glin + kwas solny',L:[['Al',0],['HCl',0]],R:[['AlCl3',0],['H2',0]]},
 {n:'żelazo + tlen → tlenek żelaza(III)',L:[['Fe',0],['O2',0]],R:[['Fe2O3',0]]},{n:'miedź + jony srebra (ładunek!)',L:[['Cu',0],['Ag',1]],R:[['Cu',2],['Ag',0]]},
 {n:'strącanie wodorotlenku żelaza(III)',L:[['Fe',3],['OH',-1]],R:[['Fe(OH)3',0]]},{n:'siarczan(VI) glinu + wodorotlenek sodu',L:[['Al2(SO4)3',0],['NaOH',0]],R:[['Al(OH)3',0],['Na2SO4',0]]}];
var ECOL={H:'#8fa3a6',O:'#d0402e',C:'#3d4447',N:'#3459c9',Al:'#a07cc5',Cl:'#3d9a3d',Fe:'#b5651d',Cu:'#c47a3a',Ag:'#9aa0a6',S:'#d6b21e',Na:'#7a5bd6'};
C.EXT_BILANS=parse;/* parser wzorów dostępny dla innych widoków */
V.define('f17-bilans-v01',{title:'Bilans równania reakcji — atomy i ładunek',tag:'MODEL',
 hint:'Zmieniasz tylko współczynniki (wzory są stałe — inny indeks to inna substancja). Tabela liczy atomy każdego pierwiastka i łączny ładunek po obu stronach.',foot:'rozszerzenia.js §11 (V015) · tryb ekspercki: najmniejsze współczynniki do obliczeń',
 build:function(host){base(host);var ctl=H('div',{'class':'ctl'}),sel=H('select',{'aria-label':'Równanie'}),xl=H('label',{'class':'chk'}),xp=H('input',{type:'checkbox'}),eq=H('div',{'class':'eqb'}),tw=H('div',{'class':'tbl'}),t=H('table'),out=H('div',{'class':'out'});
  xl.appendChild(xp);xl.appendChild(document.createTextNode(' tryb ekspercki'));ctl.appendChild(sel);ctl.appendChild(xl);tw.appendChild(t);[ctl,eq,tw,out].forEach(function(e){host.appendChild(e)});
  EQ17.forEach(function(e,i){var o=H('option',{value:i});o.textContent=e.n;sel.appendChild(o)});
  var cur=0,co=[];function reset(){co=EQ17[cur].L.concat(EQ17[cur].R).map(function(){return 1})}function gcd(a,b){return b?gcd(b,a%b):a}
  function tally(n,c){var d=H('div',{'class':'tally'});for(var j=0;j<Math.min(n,30);j++){var i=H('i');i.style.background=c;d.appendChild(i)}return d}
  function qs(q){return q===0?'0':(q>0?'+':MINUS)+Math.abs(q)}
  function draw(){var e=EQ17[cur],sp=e.L.concat(e.R),nL=e.L.length;clr(eq);
   sp.forEach(function(s,i){if(i===nL)eq.appendChild(H('span',{text:'→'}));else if(i>0)eq.appendChild(H('span',{text:'+'}));
    var w=H('span',{'class':'sp'}),m=H('button',{type:'button','aria-label':'zmniejsz współczynnik'},MINUS),k=H('span',{'class':'k',text:String(co[i])}),p=H('button',{type:'button','aria-label':'zwiększ współczynnik'},'+');
    m.onclick=function(){if(co[i]>1){co[i]--;draw()}};p.onclick=function(){if(co[i]<12){co[i]++;draw()}};w.appendChild(m);w.appendChild(k);w.appendChild(H('span',{text:disp(s[0],s[1])}));w.appendChild(p);eq.appendChild(w)});
   var Lc={},Rc={},qL=0,qR=0,els=[];sp.forEach(function(s,i){var a=parse(s[0]),tg=i<nL?Lc:Rc;for(var k in a){tg[k]=(tg[k]||0)+a[k]*co[i];if(els.indexOf(k)<0)els.push(k)}if(i<nL)qL+=s[1]*co[i];else qR+=s[1]*co[i]});
   clr(t);var hr=H('tr');['Pierwiastek','Lewa','','Prawa','',''].forEach(function(x){hr.appendChild(H('th',{text:x}))});t.appendChild(hr);var ok=true;
   els.forEach(function(el){var l=Lc[el]||0,r=Rc[el]||0,o=l===r;ok=ok&&o;var tr=H('tr');tr.appendChild(H('td',{'class':'mono',text:el}));tr.appendChild(H('td',{'class':'mono',text:String(l)}));var a1=H('td');a1.appendChild(tally(l,ECOL[el]||'#888'));tr.appendChild(a1);
    tr.appendChild(H('td',{'class':'mono',text:String(r)}));var a2=H('td');a2.appendChild(tally(r,ECOL[el]||'#888'));tr.appendChild(a2);tr.appendChild(H('td',null,o?'<span class="chip ok">OK</span>':'<span class="chip bad">nie</span>'));t.appendChild(tr)});
   var qok=qL===qR,tq=H('tr');tq.appendChild(H('td',{text:'ładunek'}));tq.appendChild(H('td',{'class':'mono',text:qs(qL)}));tq.appendChild(H('td'));tq.appendChild(H('td',{'class':'mono',text:qs(qR)}));tq.appendChild(H('td'));tq.appendChild(H('td',null,qok?'<span class="chip ok">OK</span>':'<span class="chip bad">nie</span>'));t.appendChild(tq);
   var g=co.reduce(gcd),tx=sp.map(function(s,i){return (co[i]>1?co[i]+' ':'')+disp(s[0],s[1])}),eqs=tx.slice(0,nL).join(' + ')+' → '+tx.slice(nL).join(' + '),h;
   if(ok&&qok){h='<b>Równanie uzgodnione</b><span class="mono">'+eqs+'</span>';if(xp.checked)h+=g>1?'<span><span class="chip warn">uwaga</span> Współczynniki można podzielić przez '+g+'. Do obliczeń weź najmniejsze: '+co.map(function(x){return x/g}).join(' : ')+'.</span>':'<span>Stosunek molowy '+co.join(' : ')+' — równanie nadaje się do obliczeń stechiometrycznych.</span>'}
   else h='<b>Jeszcze nie</b><span>'+(!ok?'Liczba atomów się nie zgadza. ':'')+(!qok?'Łączny ładunek po obu stronach jest różny — sam bilans atomów nie wystarcza. ':'')+'</span><span class="mono">'+eqs+'</span>';out.innerHTML=h}
  sel.onchange=function(){cur=+sel.value;reset();draw()};xp.onchange=draw;reset();draw()}});
})();

/* ---------- 12. Osłona canvas: ujemny promień w animacjach (cząstki z malejącym r) rzucał wyjątek — rysujemy wtedy r = 0 ---------- */
(function(){var P=window.CanvasRenderingContext2D&&CanvasRenderingContext2D.prototype;if(!P||P.arc.__xw)return;var a=P.arc;
P.arc=function(x,y,r,s,e,cc){return a.call(this,x,y,r>0?r:0,s,e,cc)};P.arc.__xw=1;
if(P.ellipse){var el=P.ellipse;P.ellipse=function(x,y,rx,ry,ro,s,e,cc){return el.call(this,x,y,rx>0?rx:0,ry>0?ry:0,ro,s,e,cc)}}})();

/* ---------- 13. FIZ-02 — obwód z dwiema żarówkami (wzorcownia → biblioteka, 2026-10-09) ---------- */
(function(){
var C=window.CHE;if(!C||!C.VIEW||!C.VIEW.define||C.EXT_FIZ02)return;C.EXT_FIZ02=1;
var NS='http://www.w3.org/2000/svg',UID=0,MINUS='−';
function S(t,a,x){var e=document.createElementNS(NS,t);if(a)for(var k in a)e.setAttribute(k,a[k]);if(x!=null)e.textContent=x;return e}
function H(t,a,h){var e=document.createElement(t);if(a)for(var k in a){if(k==='text')e.textContent=a[k];else e.setAttribute(k,a[k])}if(h!=null)e.innerHTML=h;return e}
function clr(e){while(e.firstChild)e.removeChild(e.firstChild)}
function pl(x,d){return x.toFixed(d).replace('.',',')}
function seg(box,items,cur,cb){clr(box);items.forEach(function(it){var b=H('button',{type:'button','aria-pressed':String(it[0]===cur)});b.textContent=it[1];b.onclick=function(){cb(it[0])};box.appendChild(b)})}
C.VIEW.define('fiz02-obwod-v01',{title:'Obwód z dwiema żarówkami — szeregowo i równolegle',tag:'MODEL',
 hint:'Połącz żarówki szeregowo albo równolegle, zmień napięcie i opory, otwórz wyłącznik. Tabela: R, I, U, P dla każdej żarówki i całego obwodu.',foot:'żarówki jako stałe opory (model szkolny) · rozszerzenia.js §13 (FIZ-02)',
 build:function(host){host.innerHTML='';host.classList.add('xw');var id='xf'+(++UID),mode='sz',dir='umowny';
  var c1=H('div',{'class':'ctl'}),sm=H('div',{'class':'seg'}),sd=H('div',{'class':'seg'});c1.appendChild(sm);c1.appendChild(sd);
  var svg=S('svg',{viewBox:'0 0 360 230',role:'img','aria-label':'Schemat obwodu elektrycznego'}),c2=H('div',{'class':'ctl'}),us=H('select',{'aria-label':'Napięcie źródła'});
  [1.5,3,4.5,6,9,12].forEach(function(u){var o=H('option',{value:u});o.textContent=pl(u,1)+' V';us.appendChild(o)});us.value='6';
  var r1=H('input',{type:'range',min:'2',max:'20',value:'6',style:'width:110px','aria-label':'Opór R₁'}),r2=H('input',{type:'range',min:'2',max:'20',value:'12',style:'width:110px','aria-label':'Opór R₂'}),sl=H('label',{'class':'chk'}),sw=H('input',{type:'checkbox'});sw.checked=true;sl.appendChild(sw);sl.appendChild(document.createTextNode(' wyłącznik zamknięty'));
  [H('label',{'class':'chk'},'U'),us,H('label',{'class':'chk'},'R₁'),r1,H('label',{'class':'chk'},'R₂'),r2,sl].forEach(function(e){c2.appendChild(e)});
  var tw=H('div',{'class':'tbl'}),t=H('table'),out=H('div',{'class':'out'});tw.appendChild(t);[c1,svg,c2,tw,out].forEach(function(e){host.appendChild(e)});
  function bulb(g,x,y,P,on,lab){var b=on?Math.min(1,P/8):0;g.appendChild(S('circle',{cx:x,cy:y,r:26,fill:'url(#'+id+'g)',opacity:b.toFixed(2)}));g.appendChild(S('circle',{cx:x,cy:y,r:12,fill:b>.05?'#fff6d3':'#ffffff',stroke:'#1a2528','stroke-width':'1.6'}));
   g.appendChild(S('path',{d:'M'+(x-8.5)+','+(y-8.5)+'L'+(x+8.5)+','+(y+8.5)+'M'+(x+8.5)+','+(y-8.5)+'L'+(x-8.5)+','+(y+8.5),stroke:'#1a2528','stroke-width':'1.4'}));g.appendChild(S('text',{x:x,y:y-17,'text-anchor':'middle','font-size':'10','font-weight':'700',fill:'#3b4ea0'},lab))}
  function chev(g,x,y,a){g.appendChild(S('path',{d:'M-4,-4L2,0L-4,4',fill:'none',stroke:dir==='umowny'?'#c03d2c':'#2a62b5','stroke-width':'2',transform:'translate('+x+','+y+') rotate('+a+')'}))}
  function draw(){var U=+us.value,R1=+r1.value,R2=+r2.value,on=sw.checked,I,I1,I2,U1,U2,Rz;
   if(mode==='sz'){Rz=R1+R2;I=on?U/Rz:0;I1=I2=I;U1=I*R1;U2=I*R2}else{Rz=R1*R2/(R1+R2);I1=on?U/R1:0;I2=on?U/R2:0;I=I1+I2;U1=U2=on?U:0}var P1=I1*I1*R1,P2=I2*I2*R2;
   clr(svg);var d=S('defs'),gr=S('radialGradient',{id:id+'g'});gr.appendChild(S('stop',{offset:'0','stop-color':'#f5c542','stop-opacity':'.95'}));gr.appendChild(S('stop',{offset:'1','stop-color':'#f5c542','stop-opacity':'0'}));d.appendChild(gr);svg.appendChild(d);
   var g=S('g',{fill:'none',stroke:'#1a2528','stroke-width':'2'});svg.appendChild(g);function L(p){g.appendChild(S('path',{d:p}))}
   L('M40,100V40');L('M40,118V190');L('M40,40H320V190');if(mode!=='sz')L('M180,40V120H320');L('M40,190H150');L('M210,190H320');
   g.appendChild(S('circle',{cx:150,cy:190,r:3,fill:'#1a2528'}));g.appendChild(S('circle',{cx:210,cy:190,r:3,fill:'#1a2528'}));g.appendChild(S('line',{x1:150,y1:190,x2:on?210:202,y2:on?190:162}));
   svg.appendChild(S('line',{x1:22,y1:100,x2:58,y2:100,stroke:'#1a2528','stroke-width':'2.4'}));svg.appendChild(S('line',{x1:31,y1:118,x2:49,y2:118,stroke:'#1a2528','stroke-width':'5'}));
   svg.appendChild(S('text',{x:64,y:104,'font-size':'12','font-weight':'700',fill:'#c03d2c'},'+'));svg.appendChild(S('text',{x:56,y:126,'font-size':'13','font-weight':'700',fill:'#2a62b5'},MINUS));
   svg.appendChild(S('text',{x:8,y:150,'font-size':'10',fill:'#5a6a6d'},pl(U,1)+' V'));svg.appendChild(S('text',{x:180,y:214,'font-size':'10',fill:'#5a6a6d','text-anchor':'middle'},on?'wyłącznik zamknięty':'wyłącznik otwarty'));
   var ax=mode==='sz'?320:110,ay=mode==='sz'?150:40;svg.appendChild(S('circle',{cx:ax,cy:ay,r:12,fill:'#ffffff',stroke:'#1a2528','stroke-width':'1.8'}));svg.appendChild(S('text',{x:ax,y:ay+4,'text-anchor':'middle','font-size':'11','font-weight':'700',fill:'#1a2528'},'A'));
   svg.appendChild(S('text',{x:mode==='sz'?ax-16:ax,y:mode==='sz'?ay+4:ay+26,'text-anchor':mode==='sz'?'end':'middle','font-size':'10',fill:'#3b4ea0','font-weight':'700'},pl(I,2)+' A'));
   var bg=S('g');svg.appendChild(bg);if(mode==='sz'){bulb(bg,140,40,P1,on,'Ż₁');bulb(bg,240,40,P2,on,'Ż₂')}else{bulb(bg,250,40,P1,on,'Ż₁');bulb(bg,250,120,P2,on,'Ż₂')}
   if(on){var cg=S('g');svg.appendChild(cg);var f=dir==='umowny'?1:-1;chev(cg,40,70,f>0?-90:90);chev(cg,90,40,f>0?0:180);chev(cg,320,100,f>0?90:-90);chev(cg,260,190,f>0?180:0);chev(cg,90,190,f>0?180:0);
    cg.appendChild(S('text',{x:180,y:168,'text-anchor':'middle','font-size':'10','font-weight':'700',fill:dir==='umowny'?'#c03d2c':'#2a62b5'},dir==='umowny'?'kierunek umowny prądu: + → −':'ruch elektronów: − → +'))}
   clr(t);var hr=H('tr');['Wielkość','Ż₁','Ż₂','Cały obwód'].forEach(function(x){hr.appendChild(H('th',{text:x}))});t.appendChild(hr);
   [['Opór R',pl(R1,0)+' Ω',pl(R2,0)+' Ω',pl(Rz,2)+' Ω'],['Natężenie I',pl(I1,2)+' A',pl(I2,2)+' A',pl(I,2)+' A'],['Napięcie U',pl(U1,2)+' V',pl(U2,2)+' V',pl(on?U:0,1)+' V'],['Moc P = U·I',pl(P1,2)+' W',pl(P2,2)+' W',pl(P1+P2,2)+' W']].forEach(function(r){var tr=H('tr');r.forEach(function(x,i){tr.appendChild(H(i?'td':'th',{'class':i?'mono':'',text:x}))});t.appendChild(tr)});
   out.innerHTML=mode==='sz'?'<b>Szeregowo</b><span>Przez obie żarówki płynie ten sam prąd, napięcia się sumują: U = U₁ + U₂. Opór zastępczy R = R₁ + R₂ — jaśniej świeci żarówka o większym oporze.</span>':'<b>Równolegle</b><span>Na obu żarówkach jest to samo napięcie, prądy się sumują: I = I₁ + I₂. Opór zastępczy jest mniejszy od najmniejszego oporu — jaśniej świeci żarówka o mniejszym oporze.</span>';
   if(!on)out.innerHTML+='<span>Obwód otwarty: prąd nie płynie, żarówki nie świecą.</span>';
   seg(sm,[['sz','szeregowo'],['rw','równolegle']],mode,function(m){mode=m;draw()});seg(sd,[['umowny','prąd umowny'],['elektrony','elektrony']],dir,function(m){dir=m;draw()})}
  [us,r1,r2,sw].forEach(function(e){e.addEventListener('input',draw);e.addEventListener('change',draw)});draw()}});
})();

/* §P Probówka v2 — naczynie doświadczeń z pracowni (najczęstsza wizualizacja CHE: 99 reakcji GFX.rx, 65 użyć @zlewka w 11 lekcjach).
   Dotąd każda karta doświadczenia rysowała zlewkę 250 mL ze skalą, choć opisy w lekcjach mówią „probówka”.
   Teraz: domyślnie probówka (szklana, z wywiniętym brzegiem, napełniona do ok. 1/3), statyw-łapa; ogrzewanie → lampa spirytusowa;
   duże doświadczenia (sód/potas z wodą, zwęglanie cukru, rozcieńczanie H₂SO₄) zostają w zlewce. Przycisk „zlewka/probówka” w rogu karty.
   API: rx.mount(host,k,{vessel,heat,toggle:false,...}) — jak dotąd (ctl: play, reset, set, key, progress, api) + ctl.vessel. Reakcja może mieć sp.vessel / sp.heat. */
(function(){
var C=window.CHE,G=C&&C.LAB&&C.LAB.GFX,rx=G&&G.rx;
if(!G||!rx||!G.vessels||!G.mount||C.EXT_PROBOWKA)return;C.EXT_PROBOWKA=1;
var ZLEWKA={naH2o:1,kH2o:1,liH2o:1,h2so4Sugar:1,h2so4Dil:1};           // klasycznie w zlewce / krystalizatorze
var GRZANIE={cuoh2Heat:1,mgH2oHot:1,cuoH2so4:1,cuso4Hydrate:1};       // ogrzewane nad płomieniem
function rr(c,x,y,w,h,q){c.beginPath();c.moveTo(x+q,y);c.lineTo(x+w-q,y);c.quadraticCurveTo(x+w,y,x+w,y+q);c.lineTo(x+w,y+h-q);c.quadraticCurveTo(x+w,y+h,x+w-q,y+h);c.lineTo(x+q,y+h);c.quadraticCurveTo(x,y+h,x,y+h-q);c.lineTo(x,y+q);c.quadraticCurveTo(x,y,x+q,y);c.closePath()}
var LIP=5;
G.vessels.register('probowka',{
 path:function(c,r){var w=r.w,x=r.x,y=r.y+LIP;c.beginPath();c.moveTo(x,y);c.lineTo(x,r.y+r.h-w/2);c.arc(x+w/2,r.y+r.h-w/2,w/2,Math.PI,0,true);c.lineTo(x+w,y)},
 hmax:.86,pad:1,lw:2.5,rim:function(r){return[r.x,r.x+r.w,r.y+LIP]},
 deco:function(c,r,T){var dk=T&&T.dark,x=r.x,w=r.w;
  // wywinięty brzeg
  c.lineWidth=2;c.strokeStyle=dk?'rgba(203,213,225,.85)':'rgba(71,85,105,.85)';c.fillStyle=dk?'rgba(148,163,184,.18)':'rgba(255,255,255,.7)';
  rr(c,x-3,r.y,w+6,LIP+1,2.5);c.fill();c.stroke();
  // pionowy refleks szkła (lewa i prawa krawędź)
  var g=c.createLinearGradient(x,0,x+w,0);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(.18,dk?'rgba(255,255,255,.18)':'rgba(255,255,255,.75)');g.addColorStop(.3,'rgba(255,255,255,0)');g.addColorStop(.82,'rgba(255,255,255,0)');g.addColorStop(.9,dk?'rgba(255,255,255,.1)':'rgba(255,255,255,.45)');g.addColorStop(1,'rgba(255,255,255,0)');
  c.fillStyle=g;c.fillRect(x+1,r.y+LIP+4,w-2,r.h-LIP-w*.6)}
});
// łapa statywu + cień pod probówką (rysowane jako nakładka)
function overlay(geo,heat){return function(c,bw,H,S,t,T){var dk=T&&T.dark,tx=geo.x*bw,tw=geo.w*bw,ty=geo.y*H,th=geo.h*H,cy=ty+th*.16;
 c.save();c.strokeStyle=dk?'#94a3b8':'#64748b';c.fillStyle=dk?'#475569':'#94a3b8';c.lineWidth=3;
 c.beginPath();c.moveTo(tx+tw+5,cy);c.lineTo(Math.min(bw-8,tx+tw+tw*1.6+30),cy);c.stroke();               // ramię łapy
 rr(c,tx-5,cy-6,tw+10,12,4);c.globalAlpha=.9;c.fill();c.globalAlpha=1;c.lineWidth=1.5;c.stroke();          // obejma
 c.fillStyle=dk?'#334155':'#cbd5e1';c.fillRect(Math.min(bw-12,tx+tw+tw*1.6+30)-3,ty-4,6,H-ty-2);            // pręt statywu
 if(!heat){c.fillStyle=dk?'rgba(0,0,0,.35)':'rgba(15,23,42,.12)';c.beginPath();c.ellipse(tx+tw/2,Math.min(H-6,ty+th+10),tw*.9,4,0,0,Math.PI*2);c.fill()}
 c.restore()}}
function wybierz(k,sp,o){if(o.vessel)return o.vessel;if(sp&&sp.vessel&&sp.vessel!=='testTube')return sp.vessel;return ZLEWKA[k]?'beaker':'probowka'}
function grzane(k,sp,o){return o.heat!=null?!!o.heat:!!(sp&&(sp.heat||GRZANIE[k]))}
var stary=rx.mount;
rx.mount=function(host,k,o){o=Object.assign({},o||{});var key=k,t0=null,p=0,dur=o.dur||6,ves=wybierz(k,rx.get(k),o),api=null,box=null;
 var ctl={get api(){return api},get key(){return key},get progress(){return p},get vessel(){return ves},
  play:function(){t0=1;p=0;if(api){api.state.ended=0;api.reset()}},reset:function(){t0=null;p=0;if(api)api.reset()},
  set:function(nk){key=nk;if(!o.vessel){var nv=wybierz(nk,rx.get(nk),o);if(nv!==ves){ves=nv;build()}}this.reset()},
  setVessel:function(v){ves=v;build();this.play()}};
 function stan(){var s=rx.state(key,p);if(!s)return s;if(ves==='probowka'){s.level=Math.min(.5,(s.level==null?.5:s.level)*.5);s.heat=0}return s}
 function build(){if(api&&api.destroy)api.destroy();if(!box){box=document.createElement('div');box.style.position='relative';host.appendChild(box)}
  var heat=grzane(key,rx.get(key),o),spec={height:o.height||260,state:{},get:stan,
   tick:function(S,dt){if(t0!=null){p=Math.min(1,p+dt/dur);if(p>=1&&o.onEnd&&!S.ended){S.ended=1;o.onEnd(key)}}}};
  if(ves==='probowka'){var geo=heat?{x:.43,y:.04,w:.14,h:.56}:{x:.42,y:.07,w:.16,h:.84};spec.aspect=1.4;
   spec.parts=[{id:'probowka',x:geo.x,y:geo.y,w:geo.w,h:geo.h}];
   if(heat)spec.parts.unshift({id:'spiritLamp',x:.35,y:.62,w:.3,h:.37,get:function(){return{lamp:{on:p>0?1:0,lv:.5}}}}); // lampa pod spodem: szkło przesłania płomień
   spec.overlay=overlay(geo,heat)}else spec.vessel=ves;
  api=G.mount(box,spec);if(t0!=null){api.state.ended=0}
  if(o.toggle!==false&&!o.vessel&&!box._btn){var b=document.createElement('button');b.type='button';box._btn=b;
   b.style.cssText='position:absolute;top:6px;right:6px;font:12px/1 system-ui,sans-serif;padding:4px 8px;border-radius:8px;border:1px solid var(--border,#cbd5e1);background:var(--surface,#fff);color:inherit;cursor:pointer;opacity:.85';
   b.onclick=function(){ctl.setVessel(ves==='probowka'?'beaker':'probowka')};box.appendChild(b)}
  if(box._btn){box._btn.textContent=ves==='probowka'?'⇄ zlewka':'⇄ probówka';box._btn.title='Pokaż doświadczenie w '+(ves==='probowka'?'zlewce':'probówce')}}
 build();if(o.auto)ctl.play();return ctl};
rx.mount.stary=stary;
})();
