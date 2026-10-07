;/* ===== v0.38: 'ion-map-v02' zastąpiony — mapa jonów z danych silnika (SOLUBILITY_TABLE, ACID_SYSTEMS, CHE.COLORS, CHE.IONIC).
   Klik jon → ładunek, pochodzenie, barwa w roztworze, partnerzy tworzący osad (wykrywanie), sól z wybranym przeciwjonem. ===== */
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define||!C.IONIC)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var COLID={Cu:'ion-cu2',Fe2:'ion-fe2',Fe3:'ion-fe3',Ni:'ion-ni2',Mn:'ion-mn2'};
var TESTS={Cl:'+ AgNO₃ → biały, serowaty osad AgCl (nie roztwarza się w HNO₃)',Br:'+ AgNO₃ → bladożółty osad AgBr',I:'+ AgNO₃ → żółty osad AgI; + Pb²⁺ → żółty PbI₂',SO4:'+ BaCl₂ → biały osad BaSO₄ (nie roztwarza się w kwasach)',CO3:'+ kwas → musowanie, CO₂ mętni wodę wapienną',S:'+ Pb²⁺ lub Cu²⁺ → czarny osad siarczku; z kwasem — zapach H₂S',PO4:'+ AgNO₃ → żółty osad Ag₃PO₄',OH:'fenoloftaleina malinowa; papierek uniwersalny niebieski',NO3:'azotany są rozpuszczalne — brak reakcji strąceniowych (test obrączkowy z FeSO₄ — LO)',CH3COO:'+ mocny kwas → zapach octu (powstaje CH₃COOH)',SO3:'+ kwas → ostry zapach SO₂',SiO3:'+ kwas → galaretowaty osad H₂SiO₃',HCO3:'+ kwas → CO₂; ogrzewanie → CO₂ (nietrwały)',F:'+ Ca²⁺ → biały osad CaF₂',
 Ag:'+ Cl⁻ → biały osad AgCl',Ba:'+ SO₄²⁻ → biały osad BaSO₄; płomień żółtozielony',Ca:'+ CO₃²⁻ → biały osad CaCO₃; płomień ceglastoczerwony',Cu:'+ OH⁻ → niebieski galaretowaty osad Cu(OH)₂; płomień zielony',Fe3:'+ OH⁻ → rdzawobrunatny osad Fe(OH)₃',Fe2:'+ OH⁻ → zielonkawy osad Fe(OH)₂ (brunatnieje na powietrzu)',Pb:'+ I⁻ → żółty osad PbI₂',Mg:'+ OH⁻ → biały osad Mg(OH)₂',Al:'+ OH⁻ → biały osad Al(OH)₃, rozpuszcza się w nadmiarze zasady (amfoteryczny)',Zn:'+ OH⁻ → biały osad Zn(OH)₂, rozpuszcza się w nadmiarze zasady',Na:'płomień żółty (sole sodu dobrze rozpuszczalne)',K:'płomień fioletowy',NH4:'+ zasada, ogrzewanie → NH₃ (wilgotny papierek niebieszczeje)',Mn:'+ OH⁻ → biały osad Mn(OH)₂ (brunatnieje)',Ni:'+ OH⁻ → zielony osad Ni(OH)₂',Sn:'+ OH⁻ → biały osad Sn(OH)₂'};
V.define('ion-map-v02',{title:'Mapa jonów — ładunek, pochodzenie, wykrywanie, sole',tag:'E8',
 hint:'Kliknij jon. Zobaczysz jego ładunek, z jakiego kwasu lub zasady pochodzi, barwę w roztworze, z którymi jonami tworzy osad (wykrywanie) oraz wzór soli z wybranym przeciwjonem.',
 foot:'Dane: CHE.DATA.SOLUBILITY_TABLE, ACID_SYSTEMS, CHE.COLORS (barwy jonów i osadów), CHE.IONIC (wzory i nazwy soli).',
 build:function(host){host.innerHTML='';var T=C.DATA.SOLUBILITY_TABLE,I=C.IONIC,A=C.DATA.ACID_SYSTEMS||{},CO=C.COLORS;
  var top=el('div');host.appendChild(top);var r1=el('div','r','<b style="min-width:70px">Kationy:</b> '),r2=el('div','r','<b style="min-width:70px">Aniony:</b> ');top.append(r1,r2);
  var card=el('div');host.appendChild(card);var sel={kind:'an',id:'Cl'};
  var ions=[].concat(T.cations.map(function(c){return{kind:'cat',id:c.id,ion:c.ion}}),[{kind:'cat',id:'H3O',ion:'H₃O⁺'}],T.anions.map(function(a){return{kind:'an',id:a.id,ion:a.ion}}));
  ions.forEach(function(o){var b=el('button',null,o.ion);b.type='button';b.dataset.k=o.kind+':'+o.id;b.onclick=function(){sel=o;show()};(o.kind==='cat'?r1:r2).appendChild(b)});
  function hex(c){return '#'+c.map(function(v){return (v|0).toString(16).padStart(2,'0')}).join('')}
  function sw(col){return col?'<span style="display:inline-block;width:14px;height:14px;border-radius:3px;vertical-align:-2px;border:1px solid #94a3b8;background:'+col+'"></span> ':''}
  function pptCol(f){try{var r=(CO.list('precipitate')||[]).find(function(q){return q.name&&q.name.replace(/[₀-₉]/g,function(ch){return '₀₁₂₃₄₅₆₇₈₉'.indexOf(ch)})===f});return r?r.hex:null}catch(_){return null}}
  function show(){[].forEach.call(top.querySelectorAll('button'),function(b){b.classList.toggle('on',b.dataset.k===sel.kind+':'+sel.id)});var h='',o=ions.find(function(x){return x.kind===sel.kind&&x.id===sel.id});
   if(o.id==='H3O'){h='<h4 style="margin:6px 0">H₃O⁺ — jon hydroniowy (kation, ładunek +1)</h4><p>Powstaje, gdy kwas oddaje proton wodzie: HA + H₂O → H₃O⁺ + A⁻. Odpowiada za odczyn kwasowy (pH = −log[H₃O⁺]); wskaźnik uniwersalny czerwienieje, oranż metylowy czerwony.</p><p><b>Partner:</b> OH⁻ → H₂O (zobojętnianie, jonowo: H⁺ + OH⁻ → H₂O).</p>';card.innerHTML='<div class="note">'+h+'</div>';return}
   var q=sel.kind==='cat'?(o.ion.match(/(\d?)[⁺]/)?0:0):0;var sup=o.ion.replace(/^[^⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/,''),dg=sup.replace(/[⁺⁻]/g,'').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,function(c){return '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)})||'1',chg=(sup.indexOf('⁻')>=0?'−':'+')+dg;
   h+='<h4 style="margin:6px 0">'+o.ion+' — '+(sel.kind==='cat'?'kation':'anion')+', ładunek '+chg+'</h4>';
   if(sel.kind==='an'){var acids=Object.keys(A).filter(function(k){var a=A[k];return a.species&&a.species[a.species.length-1]===o.ion||(a.anion===o.ion)});h+='<p><b>Pochodzi z kwasu:</b> '+(acids.length?acids.map(function(k){return A[k].formula+(A[k].strong?' (mocny)':' (słaby, pKa '+String(A[k].pKa[0]).replace('.',',')+')')}).join(', '):o.id==='OH'?'— (z zasad: NaOH → Na⁺ + OH⁻)':'—')+' · <b>nazwa soli:</b> '+(T.anions.find(function(a){return a.id===sel.id})||{}).name+'</p>'}
   else{var hy=I.compound(sel.id,'OH');h+='<p><b>Wodorotlenek:</b> '+(hy?hy.pretty+' ('+hy.name+') — '+(T.legend[hy.sol]||hy.sol):'—')+' · <b>nazwa w soli:</b> „… '+I.cationName(sel.id)+'”</p>';
    var ci=COLID[sel.id]?CO.at(COLID[sel.id]):null;h+='<p><b>Barwa w roztworze:</b> '+(ci?sw(hex(ci))+(CO.get(COLID[sel.id]).state||''):'bezbarwny')+'</p>'}
   if(TESTS[sel.id])h+='<p><b>Wykrywanie:</b> '+TESTS[sel.id]+'</p>';
   var partners=sel.kind==='an'?T.cations.map(function(c){return{id:c.id,ion:c.ion,k:I.compound(c.id,sel.id)}}):T.anions.map(function(a){return{id:a.id,ion:a.ion,k:I.compound(sel.id,a.id)}});
   var ppt=partners.filter(function(p){return p.k&&(p.k.sol==='N'||p.k.sol==='T')});
   h+='<p><b>Tworzy osad z:</b> '+(ppt.length?ppt.map(function(p){var c=pptCol(p.k.formula);return '<span style="white-space:nowrap">'+sw(c)+p.ion+' → '+p.k.pretty+'↓'+(p.k.sol==='T'?' (T)':'')+'</span>'}).join(' · '):'z żadnym z tabeli — wszystkie sole rozpuszczalne')+'</p>';
   var opts=partners.filter(function(p){return p.k}).map(function(p){return '<option value="'+p.id+'">'+p.ion+'</option>'}).join('');
   h+='<p><b>Sól z przeciwjonem:</b> <select class="pc">'+opts+'</select> <span class="pr"></span></p>';
   card.innerHTML='<div class="note">'+h+'</div>';var s=card.querySelector('.pc'),pr=card.querySelector('.pr');
   var upd=function(){var p=partners.find(function(x){return x.id===s.value}),k=p.k;var qa=(sel.kind==='an'?o.ion:p.ion),qc=(sel.kind==='an'?p.ion:o.ion);pr.innerHTML='→ <b>'+k.pretty+'</b> — '+k.name+' · '+(T.legend[k.sol]||k.sol)+' · bilans ładunków: liczby jonów dobrane tak, by suma ładunków = 0'};s.onchange=upd;upd()}
  show()}});
})();
