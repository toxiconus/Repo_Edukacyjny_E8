/* KLOCKI (przeniesione z rozszerzenia.js §3–4): n05-wodorki-v01 (mapa wodorków) i n05-trendy-v01 (temperatury wrzenia). Mostek: model_widok.js. */
(function(){
var V=window.CHE.VIEW;
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
'.x5 .en{height:10px;border-radius:5px;background:linear-gradient(90deg,#f0a35e,#e9e3c9 50%,#58b4ae);position:relative;margin:4px 0 14px}.x5 .en i{position:absolute;top:-4px;width:3px;height:18px;background:#1b2430}.x5 .en em{position:absolute;top:12px;font:600 10px system-ui;transform:translateX(-50%);font-style:normal;white-space:nowrap}'+
'.x5 svg text{font:12px system-ui;fill:currentColor}.x5 .che-zoom-frame{width:100%!important;max-width:640px}.x5 .che-zoom-frame>svg{width:100%!important}';
document.head.appendChild(css);
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
   for(var v=-150;v<=100;v+=50)s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" stroke="#cdd5dd" stroke-width="'+(v===0?1.4:.6)+'"/><text x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>';
   ['okres 2','okres 3','okres 4','okres 5'].forEach(function(t,i){s+='<text x="'+X(i)+'" y="'+(H-12)+'" text-anchor="middle">'+t+'</text>'});
   s+='<text x="'+(L-6)+'" y="12" text-anchor="end" style="font-size:11px">°C</text>';
   Object.keys(BP).forEach(function(g){if(!on[g])return;var d=BP[g],v=d[4],c=d[5],pts=v.map(function(y,i){return X(i)+','+Y(y)}).join(' ');
    s+='<polyline points="'+pts+'" fill="none" stroke="'+c+'" stroke-width="2.5"/>';
    v.forEach(function(y,i){var hot=i===0&&g!=='14';s+='<circle cx="'+X(i)+'" cy="'+Y(y)+'" r="'+(hot?6:4)+'" fill="'+(hot?'#fff':c)+'" stroke="'+c+'" stroke-width="2.5"><title>'+d[i]+': '+String(y).replace('.',',')+' °C</title></circle>'});
    s+='<text x="'+(X(3)+10)+'" y="'+(Y(v[3])+4)+'" style="fill:'+c+';font-weight:700">'+d[3]+'</text><text x="'+(X(0)+8)+'" y="'+(Y(v[0])-8)+'" style="fill:'+c+';font-weight:700">'+d[0]+'</text>'});
   box.innerHTML=s+'</svg>';
   info.innerHTML='<b>Odczyt:</b> w grupie 14 (CH₄ → SnH₄) temperatura wrzenia rośnie równo z masą cząsteczek — działają tylko słabe oddziaływania międzycząsteczkowe. W grupach 15–17 pierwszy wodorek (puste kółko) wrze <b>znacznie wyżej</b>, niż wynikałoby z trendu: między cząsteczkami NH₃, H₂O i HF tworzą się <b>wiązania wodorowe</b> (H przy bardzo elektroujemnym N, O, F). Woda ma ich najwięcej (2 atomy H i 2 wolne pary na cząsteczkę) — dlatego jako jedyna z tych wodorków jest w 20 °C cieczą.'}
  draw()}});
})();
