

(function(){try{
if(typeof DB==='undefined'||typeof hud!=='function'||typeof REDOX==='undefined')return;
 
try{const RP=(window.CHE&&CHE.DATA&&CHE.DATA.REDOX_POTENTIALS)||{};Object.keys(RP).forEach(k=>{REDOX[k]=RP[k]});if(REDOX['Cr2O7^2-/Cr3+']!=null)delete REDOX['Cr2O7/Cr3+']}catch(_){}
const F={
 H:'W wodzie proton H⁺ nie istnieje samodzielnie — tworzy jon hydroniowy H₃O⁺; pH = −log[H₃O⁺].',
 Li:'Próba płomieniowa: sole litu barwią płomień na karminowo.',
 Na:'Próba płomieniowa: sole sodu barwią płomień na intensywnie żółto — nawet ślady Na zagłuszają inne barwy.',
 K:'Sole potasu barwią płomień na fioletowo; przy domieszce Na obserwuje się go przez niebieskie szkło kobaltowe.',
 Ca:'Sole wapnia barwią płomień na ceglastoczerwono. Wapń reaguje już z wodą; CaCO₃ (marmur, wapień) niszczą kwaśne deszcze.',
 Sr:'Sole strontu barwią płomień na karminowoczerwono (czerwień fajerwerków).',
 Ba:'Sole baru barwią płomień na żółtozielono; BaSO₄ — nierozpuszczalny nawet w kwasach (kontrast RTG).',
 Cu:'Miedź nie wypiera wodoru z HCl (E° = +0,34 V), ale roztwarza się w HNO₃ (NO₂ / NO) i w gorącym stęż. H₂SO₄ (SO₂). Sole miedzi barwią płomień na zielono.',
 Fe:'Z rozcieńczonym HCl żelazo daje FeCl₂ (bladozielony Fe²⁺), a nie FeCl₃; stężony HNO₃ i H₂SO₄ na zimno je pasywują.',
 Al:'Glin reaguje z kwasem z opóźnieniem — najpierw musi rozpuścić się warstwa Al₂O₃; stężony HNO₃ pasywuje glin.',
 Pb:'Ołów stoi przed wodorem, ale z HCl i H₂SO₄ prawie nie reaguje — trudno rozpuszczalny PbCl₂ / PbSO₄ pokrywa metal.',
 Mg:'Magnez gwałtownie reaguje z kwasami (H₂, roztwór się ogrzewa); Mg(OH)₂ to składnik leków na nadkwasotę.',
 Zn:'Cynk + kwas solny to klasyczna laboratoryjna metoda otrzymywania wodoru (aparat Kippa).',
 Au:'Złoto roztwarza tylko woda królewska (HNO₃ + 3 HCl) — Cl⁻ wiąże Au³⁺ w trwały kompleks [AuCl₄]⁻.',
 F:'HF — jedyny słaby kwas wśród fluorowcowodorów (wiązanie H–F ≈ 565 kJ/mol); trawi szkło: SiO₂ + 4 HF → SiF₄ + 2 H₂O.',
 Cl:'HCl(aq) to kwas solny (w żołądku pH ≈ 1,5–2). Kwasy tlenowe chloru: HClO, HClO₂, HClO₃, HClO₄ — moc rośnie z liczbą atomów O.',
 Br:'HBr jest kwasem mocniejszym od HCl — wiązanie H–Br jest dłuższe i słabsze.',
 I:'HI to najmocniejszy z fluorowcowodorów (najsłabsze wiązanie H–X).',
 S:'Siarka tworzy H₂S (słaby, trujący), H₂SO₃ (średniej mocy, nietrwały) i H₂SO₄ (mocny w I stopniu, higroskopijny, zwęgla cukier).',
 N:'HNO₃ to kwas utleniający — z metalami nie daje H₂; z białkiem żółte zabarwienie (reakcja ksantoproteinowa); na świetle żółknie.',
 P:'H₃PO₄ (pKa₁ ≈ 2,16) to kwas średniej mocy (E338); w H₃PO₃ tylko 2 atomy H są kwasowe.',
 C:'CO₂ + H₂O ⇌ H₂CO₃ — nietrwały kwas węglowy; bufor H₂CO₃/HCO₃⁻ utrzymuje pH krwi 7,35–7,45.',
 Si:'SiO₂ nie reaguje z wodą — H₂SiO₃ otrzymuje się z krzemianów (galaretowaty osad; po odwodnieniu silikażel).'
};
Object.keys(F).forEach(k=>{try{const e=DB[k];if(e){if(!Array.isArray(e.f))e.f=[];if(e.f.indexOf(F[k])<0)e.f.push(F[k])}}catch(_){}});
const SUB='₀₁₂₃₄₅₆₇₈₉',pf=s=>String(s||'').replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,c=>SUB[c]));
const els=f=>(String(f).match(/[A-Z][a-z]?/g)||[]);
const WATER=['Li','Na','K','Rb','Cs','Ca','Sr','Ba'],PASS={Fe:'stęż. HNO₃ i stęż. H₂SO₄ na zimno pasywują (warstwa tlenku)',Al:'stęż. HNO₃ pasywuje; z rozc. kwasem z opóźnieniem (warstwa Al₂O₃)',Cr:'stęż. HNO₃ pasywuje',Pb:'z HCl i H₂SO₄ reakcja zahamowana (PbCl₂, PbSO₄ na powierzchni)'};
function E0(s){const k=Object.keys(REDOX).find(q=>q.split('/')[1]===s);return k!=null?{k,v:REDOX[k]}:null}
function card(){if(typeof curKind!=='undefined'&&curKind!=='el')return '';const s=sym,C=window.CHE||{},D=C.DATA||{},P=C.PHYS,e=DB[s]||{};let h='';
  
 const p=E0(s),ser=D.METAL_SERIES||[],isMetal=/metal/i.test(e.t||'')||(p&&p.v<1.6&&!/I|Br|Cl|F/.test(s));
 if(isMetal&&p){let t;
  if(WATER.indexOf(s)>=0)t='reaguje już z <b>wodą</b> (wydziela H₂); z kwasami gwałtownie — tylko pokaz nauczyciela.';
  else if(p.v<0)t='stoi <b>przed wodorem</b> (E° = '+String(p.v).replace('.',',')+' V) — wypiera H₂ z HCl i rozcieńczonego H₂SO₄.';
  else if(s==='Au'||s==='Pt')t='metal szlachetny (E° = +'+String(p.v).replace('.',',')+' V) — nie reaguje z HCl ani HNO₃; roztwarza go woda królewska.';
  else t='stoi <b>za wodorem</b> (E° = +'+String(p.v).replace('.',',')+' V) — nie wypiera H₂ z HCl; roztwarza się w kwasach utleniających (HNO₃, gorący stęż. H₂SO₄).';
  h+='<p><b>Wobec kwasów:</b> '+t+(PASS[s]?' <i>'+PASS[s]+'.</i>':'')+'</p>';
  if(ser.indexOf(s)>=0)h+='<p class="cap">Szereg aktywności: '+ser.map(x=>x===s?'<b style="color:#b85f00">'+x+'</b>':x).join(' &gt; ')+'</p>'}
  
 const fc=P&&P.flameColor?P.flameColor(s):null;
 if(fc)h+='<p><b>Próba płomieniowa:</b> <span style="display:inline-block;width:14px;height:14px;border-radius:50%;vertical-align:-2px;background:rgb('+fc.join(',')+');box-shadow:0 0 8px rgb('+fc.join(',')+')"></span> '+P.flameName(s)+'</p>';
  
 const A=D.ACID_SYSTEMS||{},S=D.SUBSTANCES||{},rows=[];
 Object.keys(S).forEach(k=>{const x=S[k];if(!x||!/^kwas/.test(x.role||''))return;const f=String(x.formula||k).replace(/[+-]/g,'');const es=els(f);if(es.indexOf(s)<0)return;if((s==='H'||s==='O')&&es.length>2)return;
  const a=A[k]||Object.values(A).find(q=>q.formula&&q.formula.replace(/[₀-₉]/g,c=>SUB.indexOf(c))===f);
  rows.push('<tr><td><b>'+pf(f)+'</b></td><td>'+(x.aqName||x.name)+'</td><td>'+(x.strength||(a&&a.strong?'mocny':'—'))+'</td><td>'+(a&&a.pKa?a.pKa.map(v=>String(v).replace('.',',')).join(' · '):'—')+'</td></tr>')});
 if(rows.length)h+='<p><b>Kwasy z tym pierwiastkiem</b> (CHE.DATA):</p><div style="overflow-x:auto"><table style="width:100%;font-size:12.5px;border-collapse:collapse"><tr><th align="left">wzór</th><th align="left">nazwa</th><th align="left">moc</th><th align="left">pKa</th></tr>'+rows.join('')+'</table></div>';
  
 const IO=C.IONIC,ST=D.SOLUBILITY_TABLE;if(IO&&ST){const cids=s==='Fe'?['Fe2','Fe3']:s==='N'?['NH4']:ST.cations.some(c=>c.id===s)?[s]:[];
  cids.forEach(cid=>{const cell=ST.anions.map(a=>{const k=IO.compound(cid,a.id),v=ST.table[a.id][cid];const col=v==='R'?'#2e7d4f':v==='N'?'#b83a45':v==='T'?'#b06f1c':'#64748b';return '<span title="'+(k?k.name:'')+'" style="display:inline-block;margin:2px 3px;padding:1px 6px;border-radius:6px;border:1px solid '+col+'55;color:'+col+';font-size:12px;font-weight:700">'+(k?k.pretty:a.ion)+' '+v+'</span>'}).join('');
   h+='<p style="margin-bottom:2px"><b>Rozpuszczalność związków '+(ST.cations.find(c=>c.id===cid)||{}).ion+'</b> (tabela silnika, 20 °C; R / T / N / —):</p><div>'+cell+'</div>'})}
  
 if(P&&P.gases){const g=Object.keys(P.gases).filter(f=>els(f).indexOf(s)>=0&&(s!=='H'||f.length<=3)).slice(0,6);
  if(g.length)h+='<p><b>Gazy</b> (CHE.PHYS): '+g.map(f=>{const q=P.gas(f);return pf(f)+' — '+q.name+', '+String(q.rel.toFixed(2)).replace('.',',')+'× powietrze, '+q.moves.split(' (')[0]}).join('; ')+'</p>'}
  
 const R=D.REACTIONS||{},RX=C.REACTION,list=Object.keys(R).filter(k=>!R[k].aliasOf&&R[k].reactants.concat(R[k].products).some(q=>els(q.formula).indexOf(s)>=0));
 if(list.length&&RX&&RX.equation)h+='<p><b>Reakcje</b> (CHE.REACTION, '+list.length+'):</p><ul style="margin:4px 0 0 18px;font-size:12.5px">'+list.slice(0,10).map(k=>{let eq='';try{eq=RX.equation(k)}catch(_){}const d=(D.REACTION_DATA||{})[k]||{};return '<li>'+pf(eq).replace(/->/g,'→')+(d.observation?' <span style="opacity:.7">— '+d.observation+'</span>':'')+'</li>'}).join('')+(list.length>10?'<li>… i '+(list.length-10)+' więcej</li>':'')+'</ul>';
 return h?'<h4>Kwasy · aktywność · próba płomieniowa</h4>'+h+'<p class="cap">Te same dane zasilają lekcję N03 „Kwasy”, bibliotekę GFX i doświadczenia.</p>':''}
function render(){try{const pane=document.querySelector('.tabpane[data-tab="redox"]');if(!pane)return;let c=document.getElementById('che-acid-card');if(!c){c=document.createElement('div');c.className='card';c.id='che-acid-card';c.style.marginTop='14px';pane.appendChild(c)}const h=card();c.innerHTML=h;c.style.display=h?'':'none'}catch(e){console.warn('[atlas acid]',e)}}
const _h=hud;hud=function(){_h.apply(this,arguments);render()};render();
}catch(e){try{console.warn('[che-atlas-acid-v001]',e)}catch(_){}}})();
