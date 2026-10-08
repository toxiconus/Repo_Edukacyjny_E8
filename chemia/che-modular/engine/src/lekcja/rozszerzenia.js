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
/* atomSVG — komponent wielokrotnego użytku (F05, F07, A01…): model atomu jako SVG, kolory jak w atlasie (_anon_004 bohr: elektrony wewnętrzne #2f8a55, walencyjne #b85f00).
   o = {p, n, e, powloki:false|true, W:260}. powloki:false → elektrony na jednym okręgu (F05; powłoki to pojęcie F07);
   powloki:true → powłoki K, L, M, N wg modelu szkolnego 2, 8, 8, … (do Z = 20; dalej uproszczenie — do weryfikacji). Zwraca otwarty <svg…> (zamknąć '</svg>'). */
function atomSVG(o){var W=o.W||260,C=W/2,p=o.p|0,n=o.n|0,e=o.e|0,svg='<svg viewBox="0 0 '+W+' '+W+'" width="100%" style="max-width:'+W+'px;display:block;margin:auto" role="img" aria-label="Model atomu: '+p+' p, '+n+' n, '+e+' e">';
 var N=p+n,sk=W/260;
 for(var i=0;i<N;i++){var a=i*2.39996,r=4.2*sk*Math.sqrt(i+.5);svg+='<circle cx="'+(C+r*Math.cos(a)).toFixed(1)+'" cy="'+(C+r*Math.sin(a)).toFixed(1)+'" r="'+(4.6*sk).toFixed(1)+'" fill="'+(Math.floor((i+1)*p/N)>Math.floor(i*p/N)?'#d9534f':'#8a949e')+'" stroke="#fff" stroke-width=".8"/>'}
 var sh=[];if(o.powloki){var cap=[2,8,8],left=e;for(var q=0;left>0;q++){var c=q<3?Math.min(cap[q],left):left;sh.push(c);left-=c}}else if(e)sh=[e];
 var R0=o.powloki?Math.max(40*sk,6*sk*Math.sqrt(N)+18*sk):104*sk,st=sh.length>1?(104*sk-R0)/(sh.length-1):0;
 sh.forEach(function(cnt,q){var R=sh.length>1?R0+q*st:(o.powloki?R0:104*sk),wal=o.powloki&&q===sh.length-1;
  svg+='<circle cx="'+C+'" cy="'+C+'" r="'+R.toFixed(1)+'" fill="none" stroke="#9aa6b2" stroke-dasharray="4 4"/>';
  if(o.powloki)svg+='<text x="'+(C+R*0.71+4).toFixed(1)+'" y="'+(C-R*0.71-4).toFixed(1)+'" font-size="'+(11*sk).toFixed(0)+'" fill="#5b6773">'+'KLMN'[q]+'</text>';
  for(var k=0;k<cnt;k++){var b=k/cnt*2*Math.PI-Math.PI/2;svg+='<circle cx="'+(C+R*Math.cos(b)).toFixed(1)+'" cy="'+(C+R*Math.sin(b)).toFixed(1)+'" r="'+(5*sk).toFixed(1)+'" fill="'+(o.powloki?(wal?'#b85f00':'#2f8a55'):'#2f7bd8')+'"/>'}});
 if(!e)svg+='<circle cx="'+C+'" cy="'+C+'" r="'+(104*sk)+'" fill="none" stroke="#9aa6b2" stroke-dasharray="4 4"/>';
 return svg}
try{C.LAB=C.LAB||{};C.LAB.atomSVG=atomSVG}catch(_){}
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
  function sym(z){var d=izo(z);return d?d[0]:('Z='+z)}
  function draw(){var A=s.p+s.n,q=s.p-s.e,X=sym(s.p),d=izo(s.p);
   /* rysunek: jądro (p czerwone, n szare) + elektrony na jednym okręgu (rozmieszczenie na powłokach — F07) */
   var svg=atomSVG({p:s.p,n:s.n,e:s.e});
   pic.innerHTML=svg+'</svg><div class="nt" style="text-align:center"><span style="color:#d9534f">●</span> proton &nbsp; <span style="color:#8a949e">●</span> neutron &nbsp; <span style="color:#2f7bd8">●</span> elektron <small>(elektrony na jednym okręgu — powłoki: F07)</small></div>';
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

})();
