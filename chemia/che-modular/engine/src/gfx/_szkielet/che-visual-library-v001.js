
(function(){
'use strict';
const CHE=window.CHE=window.CHE||{};
const C=CHE;
const defineView = CHE.VIEW.define;
const V = CHE.VIZ;
const M = CHE.MOTION;

defineView('conj-pairs', {
  title:'Pary sprzężone i amfiprotyczność', tag:'AMB',
  hint:'Proton przechodzi z kwasu na zasadę; każda reakcja tworzy dwie pary sprzężone różniące się o jeden H⁺.',
  foot:'Kwas Arrheniusa ⊂ kwas Brønsteda. Woda jest amfiprotyczna — kwas i zasada jednocześnie.',
  build(host) {
    const svg = V.makeSvg(host, [735, 250]);
    const boxes = [
      {x:10,y:40,w:150,h:60,kind:'tl',title:'HA — kwas 1',lines:['oddaje H⁺']},
      {x:190,y:40,w:150,h:60,kind:'bl',title:'H₂O — zasada 2',lines:['przyjmuje H⁺']},
      {x:380,y:40,w:150,h:60,kind:'am',title:'H₃O⁺ — kwas 2',lines:['sprzężony z H₂O']},
      {x:560,y:40,w:150,h:60,kind:'gr',title:'A⁻ — zasada 1',lines:['sprzężona z HA']},
    ];
    svg.innerHTML = '';
    boxes.forEach(b => V.box(svg, b));
    svg.appendChild(V.el('text', {x:175,y:74,'text-anchor':'middle','font-size':14,'font-weight':800,fill:'var(--text-muted)'}, '+'));
    svg.appendChild(V.el('text', {x:360,y:74,'text-anchor':'middle','font-size':14,'font-weight':800,fill:'var(--accent)'}, '⇌'));
    svg.appendChild(V.el('text', {x:545,y:74,'text-anchor':'middle','font-size':14,'font-weight':800,fill:'var(--text-muted)'}, '+'));
    const mk = V.marker(svg);
    svg.appendChild(V.el('path', {d:'M85 40 C85 8 265 8 265 36',fill:'none',stroke:'var(--accent)','stroke-width':2,'marker-end':mk}));
    svg.appendChild(V.el('text', {x:175,y:16,'text-anchor':'middle','font-size':12,'font-weight':800,fill:'var(--accent)','font-family':'var(--mono)'}, 'H⁺'));
    svg.appendChild(V.el('text', {x:175,y:130,'text-anchor':'middle','font-size':11.5,'font-weight':700,fill:'var(--accent)'}, 'para sprzężona: H₂O / H₃O⁺'));
    svg.appendChild(V.el('text', {x:400,y:130,'text-anchor':'middle','font-size':11.5,'font-weight':700,fill:'var(--accent)'}, 'para sprzężona: HA / A⁻'));
    svg.appendChild(V.el('rect', {x:5,y:160,width:355,height:82,rx:9,fill:'var(--surface-soft)',stroke:'var(--border)'}));
    svg.appendChild(V.el('text', {x:182,y:180,'text-anchor':'middle','font-size':13,'font-weight':800,fill:'var(--text)'}, 'Kwas bez wody też jest kwasem Brønsteda'));
    svg.appendChild(V.el('text', {x:182,y:200,'text-anchor':'middle','font-size':11.5,fill:'var(--text-soft)','font-family':'var(--mono)'}, 'HCl(g) + NH₃(g) → NH₄Cl(s)'));
    svg.appendChild(V.el('text', {x:182,y:220,'text-anchor':'middle','font-size':11,fill:'var(--text-soft)'}, 'HCl donor H⁺, NH₃ akceptor H⁺'));
    svg.appendChild(V.el('text', {x:182,y:234,'text-anchor':'middle','font-size':11,fill:'var(--text-muted)'}, 'nie potrzeba wody jako rozpuszczalnika'));
    svg.appendChild(V.el('rect', {x:375,y:160,width:355,height:82,rx:9,fill:'var(--c-warn-bg)',stroke:'var(--c-warn-line)'}));
    svg.appendChild(V.el('text', {x:552,y:180,'text-anchor':'middle','font-size':13,'font-weight':800,fill:'var(--text)'}, 'Woda amfiprotyczna'));
    svg.appendChild(V.el('text', {x:552,y:200,'text-anchor':'middle','font-size':11.5,fill:'var(--text-soft)'}, 'kwas wobec NH₃ (oddaje H⁺)'));
    svg.appendChild(V.el('text', {x:552,y:218,'text-anchor':'middle','font-size':11.5,fill:'var(--text-soft)'}, 'zasada wobec HCl (przyjmuje H⁺)'));
    svg.appendChild(V.el('text', {x:552,y:234,'text-anchor':'middle','font-size':11,fill:'var(--text-muted)'}, 'Amfiprot — ma obie właściwości'));
  }
});

defineView('flow-naming', {
  title:'Jak nazwać kwas — algorytm', tag:'AMB',
  hint:'Wartościowość W wynika z bilansu: H (I) + W = O (II). Dla H₂SO₄: 2·1 + W = 4·2 → W = VI.',
  foot:'Wyjątek: H₂CO₃ to kwas węglowy (bez cyfry rzymskiej). HCl(aq) to kwas solny, nie gaz.',
  build(host) {
    V.flowchart(host, { vb:[735, 350], boxes:[
      {x:250,y:8,w:235,h:40,kind:'bx',title:'Wzór kwasu, np. H₂SO₄'},
      {x:207,y:66,w:320,h:44,kind:'am',title:'Czy reszta kwasowa zawiera tlen?'},
      {x:5,y:140,w:350,h:140,kind:'gr',title:'Beztlenowy',lines:[
        'kwas + pierwiastek + „-owodorowy"','HCl chlorowodorowy · HF fluorowodorowy',
        'HBr bromowodorowy · HI jodowodorowy','H₂S siarkowodorowy · HCN cyjanowodorowy','reszty: Cl⁻ F⁻ Br⁻ I⁻ S²⁻ CN⁻']},
      {x:380,y:140,w:350,h:140,kind:'bl',title:'Tlenowy',lines:[
        'kwas + pierwiastek + (wartościowość)','W = 2·(liczba O) − (liczba H)',
        'H₂SO₄: 2·4 − 2 = 6 → siarkowy(VI)','HNO₂: 2·2 − 1 = 3 → azotowy(III)','HClO₄: 2·4 − 1 = 7 → chlorowy(VII)']},
    ], arrows:[
      {x1:367,y1:48,x2:367,y2:64},
      {x1:295,y1:110,x2:180,y2:138,curve:{cx:240,cy:120},label:'nie'},
      {x1:440,y1:110,x2:555,y2:138,curve:{cx:495,cy:120},label:'tak'},
    ], labels:[
      {x:367,y:320,t:'HCl(aq) i HCl(g) to nie to samo',size:13,fill:'var(--text)'},
      {x:367,y:340,t:'kwas solny = roztwór · HCl(g) = chlorowodór, nie kwas',size:11.5,weight:600},
    ]});
  }
});

defineView('naming-table', {
  title:'Wzór → nazwa → reszta → sól → moc', tag:'E8',
  hint:'Jedna tabela do nauki nazewnictwa i mocy kwasów.',
  foot:'Liczba kwaśnych H = ładunek reszty. HCl → Cl⁻; H₂SO₄ → SO₄²⁻; H₃PO₄ → PO₄³⁻.',
  build(host) {
    V.table(host, {
      columns:['Wzór','Nazwa','Kwaśne H','Reszta','Sól','Moc'],
      rows:[
        ['<b>HF</b>','kwas fluorowodorowy','1','F⁻','NaF','słaby'],
        ['<b>HCl</b>','kwas chlorowodorowy (solny)','1','Cl⁻','NaCl','<b style="color:var(--c-e8)">mocny</b>'],
        ['<b>HBr</b>','kwas bromowodorowy','1','Br⁻','KBr','<b style="color:var(--c-e8)">mocny</b>'],
        ['<b>HI</b>','kwas jodowodorowy','1','I⁻','KI','<b style="color:var(--c-e8)">mocny</b>'],
        ['<b>H₂S</b>','kwas siarkowodorowy','2','S²⁻','Na₂S','słaby'],
        ['<b>HCN</b>','kwas cyjanowodorowy','1','CN⁻','KCN','silnie toksyczny'],
        ['<b>HNO₂</b>','kwas azotowy(III)','1','NO₂⁻','NaNO₂','słaby'],
        ['<b>HNO₃</b>','kwas azotowy(V)','1','NO₃⁻','KNO₃','<b style="color:var(--c-e8)">mocny</b>'],
        ['<b>H₂SO₃</b>','kwas siarkowy(IV)','2','SO₃²⁻','Na₂SO₃','słaby'],
        ['<b>H₂SO₄</b>','kwas siarkowy(VI)','2','SO₄²⁻','Na₂SO₄','<b style="color:var(--c-e8)">mocny (I st.)</b>'],
        ['<b>H₂CO₃</b>','kwas węglowy','2','CO₃²⁻','Na₂CO₃','słaby'],
        ['<b>H₃PO₄</b>','kwas fosforowy(V)','3','PO₄³⁻','Ca₃(PO₄)₂','słaby (średni)'],
        ['<b>HClO₄</b>','kwas chlorowy(VII)','1','ClO₄⁻','KClO₄','<b style="color:var(--c-e8)">mocny</b>'],
        ['<b>CH₃COOH</b>','kwas octowy','1 (tylko z –COOH)','CH₃COO⁻','CH₃COONa','słaby'],
      ]
    });
  }
});

defineView('live-cv',{title:'LIVE CV chemii — atom → cząsteczka → substancja → reakcja',tag:'GIGA 9',hint:'Jeden selektor i jeden wspólny most danych. Zmieniaj obiekt, aby przejść od modelu atomowego do substancji i reakcji.',foot:'Widok prezentacyjny korzysta wyłącznie z CHE.PROFILE, CHE.MOLECULE, CHE.DATA i CHE.REACTION; nie tworzy własnej bazy.',build(host){
  host.innerHTML=''; const mode=document.createElement('div');mode.className='r'; const pick=document.createElement('select');pick.style.cssText='min-width:190px;padding:9px;border-radius:10px;border:1px solid var(--border);background:var(--panel-2);color:var(--text)'; const bar=document.createElement('div');bar.className='r'; const grid=document.createElement('div');grid.className='metric-grid'; const details=document.createElement('div');details.className='note'; const links=document.createElement('div');links.className='note';
  const modes=[['molecule','Cząsteczka'],['atom','Atom'],['substance','Substancja'],['reaction','Reakcja']]; modes.forEach(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;pick.appendChild(o)}); let curMode='molecule',cur='H2O'; mode.append(pick); host.append(mode,bar,grid,details,links);
  const keys={molecule:Object.keys(CHE.DATA?.MOLECULES||{}),atom:Object.keys(CHE.DATA?.ATOM_META||{}),substance:Object.keys(CHE.DATA?.SUBSTANCES||{}),reaction:Object.keys(CHE.DATA?.REACTIONS||{})};
  function pills(){bar.innerHTML=''; keys[curMode].filter(k=>curMode!=='molecule'||CHE.MOLECULE.get(k)).forEach(k=>{const b=document.createElement('button');b.type='button';b.dataset.k=k;b.textContent=curMode==='molecule'?(CHE.MOLECULE.get(k)?.formula||k):(curMode==='substance'?(CHE.DATA.SUBSTANCES[k]?.name||k):(curMode==='reaction'?(CHE.REACTION.equation(k)||k):k));b.onclick=()=>{cur=k;CHE.MOLECULE.select(k,{source:'molecule-2d'});render()};bar.appendChild(b)});}
  const card=(k,v)=>{const d=document.createElement('div');d.innerHTML='<b>'+k+'</b><strong>'+((v===null||v===undefined||v==='')?'—':v)+'</strong>';return d;};
  function render(){pills();grid.innerHTML='';details.innerHTML='';links.innerHTML='';
    if(curMode==='molecule'){
      const x=CHE.PROFILE.molecule(cur); if(!x)return;
      [['Wzór',x.formula],['Nazwa',x.name],['Geometria',x.geometry],['Hybrydyzacja',x.hybridization],['e⁻ całkowite',x.totalElectrons],['e⁻ walencyjne',CHE.MOLECULE.valenceElectrons(cur)],['Kąty',x.angles.map(a=>a.deg+'°').join(' · ')||'brak'],['Wiązania',x.bondSummary.join(' · ')||'—']].forEach(([k,v])=>grid.appendChild(card(k,v)));
      details.innerHTML='<b>Atomy:</b> '+x.atoms.map(a=>a.element+' · Z='+a.Z+' · walencyjne='+a.valence+' · LP='+a.lonePairs).join(' | ')+'<hr><b>Opis:</b> '+(x.note||'brak');
      links.innerHTML='<b>Powiązania:</b> substancje '+(x.substances.map(s=>s.name+' ['+s.id+']').join(', ')||'—')+' · reakcje '+(x.reactions.map(r=>r.id).join(', ')||'—');
    } else if(curMode==='atom'){
      const x=CHE.PROFILE.atom(cur); [['Symbol',x.symbol],['Nazwa',x.name],['Z',x.Z],['Elektrony',x.electrons],['Walencyjne',x.valence],['Powłoki',(x.shells||[]).join(' · ')],['Grupa',x.group],['Okres',x.period]].forEach(([k,v])=>grid.appendChild(card(k,v)));
      details.innerHTML='<b>Konfiguracja:</b> '+CHE.MOLECULE.orbitalSummary(cur)+'<hr><b>Podpowłoki:</b> '+Object.entries(x.subshells||{}).map(([o,n])=>o+': '+n).join(' · ');
      links.innerHTML='<b>Uwaga:</b> dane pierwiastka pochodzą z ATOM_META; widok nie tworzy drugiej konfiguracji elektronowej.';
    } else if(curMode==='substance'){
      const x=CHE.PROFILE.substance(cur); if(!x)return;
      [['Wzór',x.formula],['Nazwa',x.name],['Stan',x.state],['Masa molowa',x.molarMass+' g/mol'],['Rola',x.role],['Cząsteczka',x.moleculeId||'brak modelu']].forEach(([k,v])=>grid.appendChild(card(k,v)));
      details.innerHTML='<b>Skład:</b> '+Object.entries(x.composition||{}).map(([e,n])=>e+': '+n).join(' · ')+'<hr><b>Opis:</b> '+(x.notes||'—')+'<br><b>BHP:</b> '+(x.safety||[]).join(' · ')+'<br><b>Zastosowania:</b> '+(x.uses||[]).join(' · ');
      links.innerHTML='<b>Reakcje:</b> '+(x.reactions.map(r=>r.id+' · '+r.equation).join('<br>')||'brak centralnych reakcji');
    } else {
      const x=CHE.PROFILE.reaction(cur); if(!x)return;
      [['Równanie',x.equation],['Typ',x.type],['Warunki',x.conditions],['Obserwacja',x.observation],['Bilans',x.balance?.ok?'OK':'BŁĄD']].forEach(([k,v])=>grid.appendChild(card(k,v)));
      details.innerHTML='<b>Substraty:</b> '+x.reactants.map(r=>r.formula+' × '+r.coef).join(' · ')+'<br><b>Produkty:</b> '+x.products.map(r=>r.formula+' × '+r.coef).join(' · ')+'<hr><b>BHP:</b> '+(x.safety||[]).join(' · ');
      links.innerHTML='<b>Centralne źródła:</b> CHE.REACTION + REACTION_DATA + SUBSTANCES';
    }
    bar.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.k===cur));
  }
  pick.onchange=()=>{curMode=pick.value;cur=keys[curMode][0];render()}; render();
}});

defineView('chem-profile10',{title:'Profil chemiczny — pierwiastek → substancja → reakcje',tag:'GIGA 10',hint:'Jedna karta łączy dane okresowe, atom, substancję, BHP, zastosowania i reakcje. Źródłem pozostaje CHE.DATA + CHE.PROFILE.',foot:'Brak osobnej bazy profilu: widok odczytuje istniejące rekordy i dane pochodne.',build(host){
  host.innerHTML=''; const root=document.createElement('div');root.className='che-profile10'; const tabs=document.createElement('div');tabs.className='profile-tabs'; const main=document.createElement('div');main.className='profile-main'; const left=document.createElement('div');left.className='profile-panel';const right=document.createElement('div');right.className='profile-panel';const pt=document.createElement('div');pt.className='periodic-grid';const detail=document.createElement('div');detail.className='profile-grid';const links=document.createElement('div');links.className='links';
  const modes=[['element','Pierwiastek'],['substance','Substancja']]; let mode='element',cur='O';
  const card=(k,v)=>{const d=document.createElement('div');d.innerHTML='<b>'+k+'</b><strong>'+((v===null||v===undefined||v==='')?'—':v)+'</strong>';return d;};
  const colorFor=e=>({n:'#93c5fd',m:'#e2e8f0',p:'#fbbf24',h:'#a3e635',g:'#c4b5fd'})[e?.t]||'var(--surface)';
  function render(){detail.innerHTML='';links.innerHTML='';pt.innerHTML='';
    if(mode==='element'){
      const x=CHE.PROFILE.atom(cur), p=(CHE.DATA.ELEMENTS_54||[]).find(e=>e.s===cur)||{};
      [['Symbol',x.symbol],['Nazwa',x.name],['Z',x.Z],['Okres',x.period],['Grupa',x.group],['Elektrony',x.electrons],['Walencyjne',x.valence],['Elektroujemność',x.electronegativity||'—'],['Typ',x.classification||'—'],['Przykład tlenku',x.oxidationExample||'—'],['Typowe wartościowości',x.commonValence||'—'],['Konfiguracja',CHE.MOLECULE.orbitalSummary(cur)]].forEach(([k,v])=>detail.appendChild(card(k,v)));
      right.innerHTML='<h3 style="margin-top:0">Dane atomowe</h3><div class="subtle">Powłoki: '+(x.shells||[]).join(' · ')+' · podpowłoki: '+Object.entries(x.subshells||{}).map(([o,n])=>o+'='+n).join(' · ')+'</div><hr><div class="chips"><span class="chip">Z = '+x.Z+'</span><span class="chip">e⁻ = '+x.electrons+'</span><span class="chip">walencyjne = '+x.valence+'</span></div>';
      links.innerHTML='<b>Powiązania w projekcie:</b><br>'+['H2O','HCl','NaOH','CO2','CuO','CuSO4'].filter(id=>CHE.DATA.SUBSTANCES?.[id]&&CHE.CHEM.parseFormula(CHE.DATA.SUBSTANCES[id].formula)?.[cur]).map(id=>'<button type="button" data-sub="'+id+'">'+id+' · '+CHE.DATA.SUBSTANCES[id].name+'</button>').join('')||'<span class="subtle">Brak zarejestrowanej substancji zawierającej ten pierwiastek.</span>';
    } else {
      const x=CHE.PROFILE.substance(cur); if(!x)return;
      [['Wzór',x.formula],['Nazwa',x.name],['Stan',x.state],['Masa molowa',x.molarMass+' g/mol'],['Rola',x.role],['Model cząsteczki',x.moleculeId||'brak'],['pKa',x.acidSystem?.pKa?.join(' · ')||'—'],['Anion sprzężony',x.acidSystem?.anion||'—']].forEach(([k,v])=>detail.appendChild(card(k,v)));
      right.innerHTML='<h3 style="margin-top:0">Opis i BHP</h3><div class="subtle">'+(x.notes||'Brak opisu.')+'</div><hr><div class="safety"><b>BHP</b><br>'+(x.safety?.length?x.safety.join('<br>'):'Brak wpisu BHP w centralnym rekordzie.')+'</div><hr><b>Zastosowania</b><div class="chips" style="margin-top:7px">'+(x.uses?.length?x.uses.map(u=>'<span class="chip">'+u+'</span>').join(''):'<span class="subtle">Brak wpisu.</span>')+'</div>';
      links.innerHTML='<b>Reakcje centralne:</b><br>'+(x.reactions?.length?x.reactions.map(r=>'<button type="button" data-rx="'+r.id+'">'+r.equation+'</button>').join(''):'<span class="subtle">Brak zarejestrowanych reakcji.</span>');
    }
    tabs.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.mode===mode));
    const all=(CHE.DATA.ELEMENTS_54||[]); const pos={}; all.forEach(e=>{pos[e.s]=e});
    for(let row=1;row<=5;row++)for(let col=1;col<=18;col++){const e=all.find(x=>x.p===row&&x.g===col);const b=document.createElement('button');b.type='button';b.className='pt'+(e&&e.s===cur&&mode==='element'?' sel':'');if(!e)b.classList.add('empty');else{b.style.background=colorFor(e);b.innerHTML='<strong>'+e.s+'</strong><span>'+e.z+'</span>';b.title=e.n+' · grupa '+e.g+' · okres '+e.p;b.onclick=()=>{mode='element';cur=e.s;render()};}pt.appendChild(b);}
    links.querySelectorAll('[data-sub]').forEach(b=>b.onclick=()=>{mode='substance';cur=b.dataset.sub;render()});
    links.querySelectorAll('[data-rx]').forEach(b=>b.onclick=()=>{const r=CHE.PROFILE.reaction(b.dataset.rx);right.innerHTML='<h3 style="margin-top:0">Reakcja</h3><div class="che-eq">'+r.equation+'</div><div class="subtle">'+(r.conditions||'')+'</div><hr><b>Obserwacja:</b> '+(r.observation||'—')+'<hr><b>BHP:</b> '+(r.safety||[]).join(' · ');});
  }
  modes.forEach(([m,t])=>{const b=document.createElement('button');b.type='button';b.dataset.mode=m;b.textContent=t;b.onclick=()=>{mode=m;cur=m==='element'?'O':Object.keys(CHE.DATA.SUBSTANCES||{})[0];render()};tabs.appendChild(b)});
  left.innerHTML='<h3 style="margin-top:0">Układ okresowy · Z=1–54</h3><div class="subtle" style="margin-bottom:8px">Kliknij pierwiastek, aby otworzyć jego profil. Układ korzysta bezpośrednio z ELEMENTS_54.</div>';left.appendChild(pt);left.appendChild(links);main.append(left,right);root.append(tabs,main,detail);host.appendChild(root);render();
}});

defineView('molecule-electrons',{title:'Elektrony i podpowłoki — wspólny model CHE.MOLECULE',tag:'MODEL',hint:'Wybierz atom lub cząsteczkę. Obsada podpowłok i elektrony walencyjne są wyliczane z centralnych danych.',foot:'To model dydaktyczny obsadzeń elektronowych; nie jest pełnym rozwiązaniem kwantowym.',build(host){
  host.innerHTML=''; const bar=document.createElement('div');bar.className='r'; const panel=document.createElement('div');panel.className='metric-grid'; const table=document.createElement('div');table.className='note'; const choices=['H','C','N','O','F','Na','Mg','Al','P','S','Cl','Fe','Cu','Zn']; let cur='O';
  function render(){const a=CHE.MOLECULE.atom(cur),cfg=CHE.MOLECULE.electronConfiguration(cur),pairs=[];Object.entries(cfg).forEach(([orb,n])=>pairs.push('<span style="display:inline-block;margin:3px;padding:5px 8px;border:1px solid var(--border);border-radius:8px"><b>'+orb+'</b><br>'+n+' e⁻</span>'));panel.innerHTML='';[['Pierwiastek',a.symbol],['Z',a.Z],['Elektrony',a.electrons],['Walencyjne',a.valence],['Powłoki',(a.shells||[]).join(' · ')],['Obsada',Object.entries(cfg).map(([o,n])=>o+': '+n).join('  ')||'—']].forEach(([k,v])=>{const d=document.createElement('div');d.innerHTML='<b>'+k+'</b><strong>'+v+'</strong>';panel.appendChild(d)});table.innerHTML='<b>Podpowłoki</b><div style="margin-top:8px">'+pairs.join('')+'</div><br><b>Konfiguracja:</b> '+CHE.MOLECULE.orbitalSummary(cur);}
  choices.forEach(k=>{const b=document.createElement('button');b.type='button';b.textContent=k;b.onclick=()=>{cur=k;bar.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));render()};if(k===cur)b.classList.add('on');bar.appendChild(b)});host.append(bar,panel,table);render();
}});

defineView('molecule-cv',{title:'CV cząsteczki — wspólny model CHE.MOLECULE',tag:'MODEL',hint:'Wybierz cząsteczkę. Wszystkie karty są liczone z jednego modelu atomów i wiązań.',foot:'Model dydaktyczny; geometria i kąty pochodzą z danych CHE.MOLECULE.',build(host){
  host.innerHTML=''; const bar=document.createElement('div');bar.className='r'; const grid=document.createElement('div');grid.className='metric-grid'; const details=document.createElement('div');details.className='note'; const keys=['H2O','CO2','NH3','CH4','H2SO4','H3PO4','H2CO3','CH3COOH','HCOOH']; let cur='H2O';
  function render(){const m=CHE.MOLECULE.get(cur),g=CHE.MOLECULE.geometrySummary(cur),l=CHE.MOLECULE.lewisData(cur); grid.innerHTML=''; const cards=[['Wzór',m.formula],['Geometria',m.geometry||'—'],['Hybrydyzacja',m.hybridization],['e⁻ walencyjne',CHE.MOLECULE.valenceElectrons(cur)],['e⁻ całkowite',m.totalElectrons],['Kąty',m.angles.length?m.angles.map(x=>x.deg+'°').join(' · '):'brak danych'],['Wiązania',m.bondSummary.join(' · ')||'—'],['Wolne pary',m.atoms.filter(a=>a.lonePairs).map(a=>a.element+': '+a.lonePairs).join(' · ')||'0']]; cards.forEach(([k,v])=>{const d=document.createElement('div');d.innerHTML='<b>'+k+'</b><strong>'+v+'</strong>';grid.appendChild(d)}); details.innerHTML='<b>'+m.name+'</b><br>'+m.note+'<hr><b>Atomy:</b> '+l.atoms.map(a=>a.element+' · walencyjne '+a.valence+' · wolne pary '+a.lonePairs).join(' | ')+'<br><b>Centra elektronowe:</b> '+Object.values(g.centers).map(x=>'atom '+x.center+': '+x.domains+' domen').join(' | '); bar.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.k===cur));}
  keys.filter(k=>CHE.MOLECULE.get(k)).forEach(k=>{const b=document.createElement('button');b.type='button';b.dataset.k=k;b.textContent=CHE.MOLECULE.get(k).formula;b.onclick=()=>{cur=k;render()};bar.appendChild(b)}); host.append(bar,grid,details); render();
}});

defineView('molecule-2d',{title:'Cząsteczka 2D — wiązania, kąty i wolne pary',tag:'MODEL',hint:'Ten sam CHE.MOLECULE jest źródłem atomów, wiązań, rzędów i kątów.',foot:'Schemat 2D jest wizualizacją dydaktyczną, nie strukturą krystalograficzną.',build(host){
  host.innerHTML=''; const bar=document.createElement('div');bar.className='r'; const wrap=document.createElement('div');wrap.style.cssText='width:100%;overflow:auto;border:1px solid var(--border);border-radius:16px;background:var(--panel)'; const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 760 390');svg.style.cssText='width:100%;min-width:520px;height:auto;display:block'; const note=document.createElement('div');note.className='note'; const keys=['H2O','CO2','NH3','CH4','H2SO4','H3PO4','H2CO3','CH3COOH','HCOOH']; let cur='H2O';
  const NS='http://www.w3.org/2000/svg'; const E=(n,a,t)=>{const e=document.createElementNS(NS,n);Object.entries(a||{}).forEach(([k,v])=>e.setAttribute(k,v));if(t!=null)e.textContent=t;return e};
  function pos(m){const cx=380,cy=205,scale=1.45; return m.atoms.map(a=>({x:cx+a.x*scale,y:cy+a.y*scale}));}
  function render(){const m=CHE.MOLECULE.get(cur),P=pos(m);svg.innerHTML=''; svg.appendChild(E('rect',{x:0,y:0,width:760,height:390,rx:18,fill:'transparent'}));
    m.bonds.forEach(b=>{const a=P[b.a],c=P[b.b],dx=c.x-a.x,dy=c.y-a.y,L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L,offs=b.order===3?[-8,0,8]:b.order===2?[-6,6]:[0];offs.forEach(o=>svg.appendChild(E('line',{x1:a.x+nx*o,y1:a.y+ny*o,x2:c.x+nx*o,y2:c.y+ny*o,stroke:'currentColor','stroke-width':5,'stroke-linecap':'round'}))); const tx=(a.x+c.x)/2,ty=(a.y+c.y)/2-12;svg.appendChild(E('text',{x:tx,y:ty,'text-anchor':'middle','font-size':12,fill:'var(--text-soft)'},CHE.MOLECULE.bondLabel(b.order)));});
    m.atoms.forEach((a,i)=>{const e=CHE.DATA.ELEM[a.element]||{},r=(e.r||22)*.9;svg.appendChild(E('circle',{cx:P[i].x,cy:P[i].y,r,fill:e.c2||'var(--panel-2)',stroke:e.s||'currentColor','stroke-width':2}));svg.appendChild(E('text',{x:P[i].x,y:P[i].y+5,'text-anchor':'middle','font-size':18,'font-weight':800},a.element));if(a.lonePairs>0)svg.appendChild(E('text',{x:P[i].x+r+8,y:P[i].y-r-4,'font-size':12,fill:'var(--accent)'},'LP '+a.lonePairs));});
    (m.angles||[]).forEach((ang,i)=>{const a=P[ang.atoms[0]],c=P[ang.atoms[1]],d=P[ang.atoms[2]],tx=c.x+(a.x+d.x-2*c.x)*.18,ty=c.y+(a.y+d.y-2*c.y)*.18-8;svg.appendChild(E('text',{x:tx,y:ty,'text-anchor':'middle','font-size':13,'font-weight':800,fill:'var(--accent)'},ang.deg+'°'));});
    note.innerHTML='<b>'+m.name+'</b> · '+(m.geometry||'geometria nieokreślona')+' · '+(m.bondSummary.join(' · ')||'brak wiązań')+'<br>'+m.note; bar.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.k===cur));}
  keys.filter(k=>CHE.MOLECULE.get(k)).forEach(k=>{const b=document.createElement('button');b.type='button';b.dataset.k=k;b.textContent=CHE.MOLECULE.get(k).formula;b.onclick=()=>{cur=k;CHE.MOLECULE.select(k,{source:'molecule-2d'});render()};bar.appendChild(b)}); document.addEventListener('che:molecule-select',e=>{const k=e.detail?.id;if(k&&CHE.MOLECULE.get(k)&&keys.includes(k)){cur=k;render();}}); wrap.appendChild(svg); host.append(bar,wrap,note); render();
}});

defineView('molecule-orbitals',{title:'Orbitalne pudełka — obsada elektronowa',tag:'MODEL',hint:'Wybierz atom. Strzałki pokazują elektrony, a pojemność orbitalu wynika z centralnego modelu.',foot:'Schemat dydaktyczny: orbitale są reprezentowane jako pudełka; nie jest to rozkład przestrzenny orbitalu.',build(host){
  host.innerHTML=''; const bar=document.createElement('div');bar.className='r'; const stage=document.createElement('div');stage.className='note'; const choices=['H','C','N','O','F','Na','Mg','Al','P','S','Cl','Fe','Cu','Zn','Ag']; let cur='O';
  function arrows(n,cap){let out='';for(let i=0;i<cap;i++)out+=`<span style=\"display:inline-block;width:20px;text-align:center;font-weight:800;opacity:${i<n?1:.18}\">${i<n?(i%2?'↓':'↑'):'·'}</span>`;return out;}
  function render(){const cfg=CHE.MOLECULE.electronConfiguration(cur); stage.innerHTML='<h3 style=\"margin-top:0\">'+cur+' · '+CHE.MOLECULE.orbitalSummary(cur)+'</h3><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px\">'+Object.entries(cfg).map(([o,n])=>{const cap=o.endsWith('s')?2:o.endsWith('p')?6:o.endsWith('d')?10:14;return '<div style=\"padding:10px;border:1px solid var(--border);border-radius:12px;background:var(--panel-2)\"><b>'+o+'</b><div style=\"margin-top:8px;font-size:1.15rem;letter-spacing:2px\">'+arrows(n,cap)+'</div><small>'+n+'/'+cap+' e⁻</small></div>'}).join('')+'</div>';bar.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.k===cur));}
  choices.forEach(k=>{const b=document.createElement('button');b.type='button';b.dataset.k=k;b.textContent=k;b.onclick=()=>{cur=k;render()};bar.appendChild(b)}); document.addEventListener('che:molecule-select',e=>{const k=e.detail?.id;if(k&&CHE.DATA.ATOM_META?.[k]){cur=k;render();}else{const m=CHE.MOLECULE.get(k);if(m?.atoms?.[0]?.element){cur=m.atoms[0].element;render();}}}); host.append(bar,stage);render();
}});

defineView('obtaining-three', {
  title:'Trzy drogi otrzymywania kwasów', tag:'E8',
  hint:'Tlenek + woda, niemetal + wodór, sól + mocniejszy kwas. Warunki: światło / iskra / Δ.',
  foot:'Wszystkie kończą się tym samym efektem: w wodzie kwas daje H₃O⁺ i resztę kwasową → pH < 7.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT;
    if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> schemat dydaktyczny oparty o centralne typy reakcji · kontekst lekcji <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    V.flowchart(host, { vb:[760, 400], boxes:[
      {x:5,y:10,w:150,h:96,kind:'bl',title:'Tlenek kwasowy',lines:['SO₃, N₂O₅, CO₂']},
      {x:232,y:10,w:498,h:96,kind:'tl',title:'kwas tlenowy',lines:['SO₃ + H₂O → H₂SO₄','N₂O₅ + H₂O → 2 HNO₃  ;  CO₂ + H₂O ⇌ H₂CO₃','Uwaga: SiO₂ z wodą nie reaguje']},
      {x:5,y:122,w:150,h:96,kind:'bl',title:'Niemetal + wodór',lines:['Cl₂, Br₂, S']},
      {x:232,y:122,w:498,h:96,kind:'tl',title:'kwas beztlenowy',lines:['H₂ + Cl₂ → 2 HCl (światło)','H₂ + S → H₂S (Δ)','gazowy HCl dopiero w wodzie tworzy kwas']},
      {x:5,y:234,w:150,h:96,kind:'bl',title:'Sól + kwas',lines:['NaCl, Na₂SiO₃']},
      {x:232,y:234,w:498,h:96,kind:'tl',title:'kwas słabszy / lotny / osad',lines:['NaCl + H₂SO₄(stęż.) → NaHSO₄ + HCl↑','Na₂SiO₃ + 2 HCl → H₂SiO₃↓ + 2 NaCl','wypierany kwas musi być słabszy lub lotny']},
      {x:5,y:352,w:725,h:40,kind:'am',title:'Wspólny efekt: w wodzie kwas daje H₃O⁺ i resztę kwasową → pH < 7'},
    ], arrows:[
      {x1:155,y1:58,x2:230,y2:58,label:'+ H₂O'},
      {x1:155,y1:170,x2:230,y2:170,label:'światło / Δ'},
      {x1:155,y1:282,x2:230,y2:282,label:'Δ / osad'},
    ]});
  }
});

defineView('obtaining-hcl-steps', {
  title:'Otrzymywanie kwasu solnego — etapy', tag:'UND',
  hint:'Od soli do roztworu: gaz otrzymany z NaCl rozpuszczamy w wodzie.',
  foot:'HCl(g) ≠ HCl(aq). W wilgotnym powietrzu HCl(g) tworzy białą mgłę — kropelki kwaśnego roztworu.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT;
    if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> centralny schemat otrzymywania · produkt <b>HCl</b> · kontekst <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    V.flowchart(host, { vb:[735, 172], boxes:[
      {x:5,y:10,w:140,h:72,kind:'bl',title:'1. Substraty',lines:['NaCl + H₂SO₄(stęż.)','pod dygestorium']},
      {x:175,y:10,w:230,h:72,kind:'am',title:'2. Reakcja',lines:['NaCl + H₂SO₄ → NaHSO₄ + HCl↑','wydziela się gazowy HCl']},
      {x:437,y:10,w:130,h:72,kind:'tl',title:'3. Woda',lines:['gaz HCl przez wodę','rozpuszcza się']},
      {x:599,y:10,w:131,h:72,kind:'gr',title:'4. Produkt',lines:['HCl(aq)','kwas chlorowodorowy']},
      {x:5,y:100,w:725,h:60,kind:'gy',title:'HCl(g) ≠ HCl(aq)',lines:['W wilgotnym powietrzu HCl(g) tworzy białą mgłę — kropelki kwaśnego roztworu, nie „biały gaz".']},
    ], arrows:[
      {x1:147,y1:46,x2:173,y2:46},{x1:407,y1:46,x2:435,y2:46},{x1:569,y1:46,x2:597,y2:46},
    ]});
  }
});

defineView('ion-vs-diss', {
  title:'Jonizacja vs dysocjacja — różnica', tag:'AMB',
  hint:'Jonizacja: cząsteczka kowalencyjna + woda → jony. Dysocjacja: kryształ jonowy → jony (już istniały w krysztale).',
  foot:'HCl ulega jonizacji. NaCl ulega dysocjacji. Efekt w wodzie podobny — jony w roztworze.',
  build(host) {
    V.flowchart(host, { vb:[735, 260], boxes:[
      {x:5,y:8,w:355,h:36,kind:'bl',title:'JONIZACJA — HCl w wodzie'},
      {x:375,y:8,w:355,h:36,kind:'am',title:'DYSOCJACJA — NaCl w wodzie'},
      {x:5,y:58,w:355,h:80,kind:'bx',title:'cząsteczka kowalencyjna + woda → jony',lines:['HCl(g) + H₂O → H₃O⁺ + Cl⁻','proton przechodzi z HCl na wodę']},
      {x:375,y:58,w:355,h:80,kind:'bx',title:'kryształ jonowy → rozdzielone jony',lines:['NaCl(s) → Na⁺(aq) + Cl⁻(aq)','jony istniały już w krysztale']},
      {x:5,y:154,w:355,h:96,kind:'gy',title:'Efekt',lines:['w roztworze: H₃O⁺ (kwas) + Cl⁻','pH < 7 — odczyn kwasowy','cząsteczki HCl praktycznie znikają (mocny)']},
      {x:375,y:154,w:355,h:96,kind:'gy',title:'Efekt',lines:['w roztworze: Na⁺ + Cl⁻ (obojętne)','pH ≈ 7 — odczyn obojętny','kryształ znika, jony swobodne']},
    ]});
  }
});

defineView('diss-three-levels', {
  title:'Trzy poziomy zapisu dysocjacji', tag:'AMB',
  hint:'Ten sam proces zapisany szkolnie, dokładniej (z wodą) i stopniowo.',
  foot:'→ oznacza dysocjację praktycznie całkowitą (mocny), ⇌ — równowagę (słaby).',
  build(host) {
    V.table(host, {
      columns:['Kwas','Szkolny zapis','Dokładniej (z wodą)','Stopniowo','α'],
      rows:[
        ['<b>HCl</b> (mocny, 1-protonowy)','HCl → H⁺ + Cl⁻','HCl + H₂O → H₃O⁺ + Cl⁻','jeden stopień','≈ 1'],
        ['<b>H₂SO₄</b> (mocny, 2-protonowy)','H₂SO₄ → 2 H⁺ + SO₄²⁻','H₂SO₄ + 2 H₂O → 2 H₃O⁺ + SO₄²⁻','I: → · II: ⇌','α₁ ≈ 1, α₂ < 1'],
        ['<b>CH₃COOH</b> (słaby, 1-protonowy)','CH₃COOH ⇌ H⁺ + CH₃COO⁻','CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻','jeden stopień','≈ 0,01 (1%)'],
      ]
    });
  }
});

defineView('acid-table', {
  title:'Tabela mocy kwasów', tag:'E8',
  hint:'Mocne i słabe kwasy — porównanie α i zapisu dysocjacji.',
  foot:'Źródło: CHE.DATA.ACID_STRENGTH. Lekcja może zawęzić listę, nie zmieniając bazy.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT;
    const raw=(CHE.DATA&&CHE.DATA.ACID_STRENGTH)||[];
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('acid-table',{acids:raw.map(r=>r.n||r.id||r.formula)}):{};
    let rows=raw.map(r=>{
      const name=r.n||r.id||r.formula||'?';
      const cls=r.c||r.class||'';
      const a=r.a!=null?('α ≈ '+r.a):'—';
      const col=cls.indexOf('moc')>=0?'var(--c-e8)':'var(--c-warn)';
      const arrow=cls.indexOf('moc')>=0?'→':'⇌';
      return ['<b>'+name+'</b>','<b style="color:'+col+'">'+(cls||'—')+'</b>',a,arrow+' H⁺ + reszta'];
    });
    if(opts.acids&&opts.acids.length){
      const allow=opts.acids.map(String);
      const filtered=rows.filter(row=>allow.some(a=>row[0].indexOf(a)>=0));
      if(filtered.length) rows=filtered;
    }
    if(!rows.length){
      rows=[['<b>HCl</b>','mocny','α ≈ 1','→ H⁺ + Cl⁻'],['<b>CH₃COOH</b>','słaby','α ≈ 0,01','⇌ H⁺ + CH₃COO⁻']];
    }
    V.table(host,{columns:['Kwas','Moc','α','Zapis'],rows:rows});
    if(opts._lesson){
      const n=document.createElement('div');n.className='note';n.style.marginTop='8px';
      n.innerHTML='<b>Źródło:</b> CHE.DATA.ACID_STRENGTH → filtr lekcji <b>'+opts._lesson+'</b>.';
      host.appendChild(n);
    }
  }
});

defineView('hf-paradox', {
  title:'Paradoks HF — dlaczego słaby', tag:'AMB',
  hint:'F jest najbardziej elektroujemny, a jednak HF jest słabym kwasem w wodzie.',
  foot:'W grupie 17 moc rośnie w dół: HF ≪ HCl < HBr < HI. Wbrew elektroujemności. O mocy decyduje wypadkowa kilku czynników.',
  build(host) {
    V.flowchart(host, { vb:[760, 260], boxes:[
      {x:5,y:8,w:750,h:60,kind:'am',title:'Fakty',lines:['F — najbardziej elektroujemny pierwiastek','Intuicja: HF powinien być mocnym kwasem']},
      {x:5,y:88,w:370,h:80,kind:'bl',title:'Wyjaśnienie 1',lines:['wiązanie H–F bardzo silne i krótkie','trudno oderwać proton']},
      {x:385,y:88,w:370,h:80,kind:'bl',title:'Wyjaśnienie 2',lines:['wiązania wodorowe F···H–O–H','stabilizują cząsteczkę HF']},
      {x:5,y:188,w:750,h:60,kind:'gy',title:'Porównanie w grupie 17',lines:['HF ≪ HCl < HBr < HI — moc rośnie w dół grupy']},
    ]});
  }
});

defineView('ka-pka-table', {
  title:'Ka, pKa, moc — tabela', tag:'ZA',
  hint:'Ka — stała równowagi jonizacji. pKa = −log Ka. Mniejsze pKa = mocniejszy kwas.',
  foot:'HCl: pKa ≈ −7 · HNO₃: ≈ −1,4 · H₂SO₄ (I): ≈ −3 · HF: 3,17 · CH₃COOH: 4,76 · H₂CO₃: 6,37 · H₂S: 7,00.',
  build(host) {
    V.flowchart(host, { vb:[760, 280], boxes:[
      {x:5,y:8,w:750,h:80,kind:'bx',title:'Ka = [H₃O⁺][A⁻] / [HA]   ·   pKa = −log Ka',lines:['większe Ka = mocniejszy kwas','mniejsze pKa = mocniejszy kwas']},
      {x:5,y:100,w:750,h:170,kind:'gy',title:'Wartości orientacyjne (25 °C)',lines:[
        'HCl:       Ka ≈ 10⁷,    pKa ≈ −7     → bardzo mocny',
        'HNO₃:      Ka ≈ 24,     pKa ≈ −1,4   → mocny',
        'H₂SO₄ (I): Ka ≈ 10³,    pKa ≈ −3     → mocny',
        'HF:        Ka ≈ 6,8·10⁻⁴, pKa ≈ 3,17 → słaby',
        'CH₃COOH:   Ka ≈ 1,8·10⁻⁵, pKa ≈ 4,76 → słaby',
        'H₂CO₃:     Ka ≈ 4,3·10⁻⁷, pKa ≈ 6,37 → słaby',
        'H₂S:       Ka ≈ 1,0·10⁻⁷, pKa ≈ 7,00 → bardzo słaby']},
    ]});
  }
});

defineView('ph-ladder', {
  title:'Obliczanie pH — od stężenia do pH', tag:'UND',
  hint:'Najpierw ustal moc kwasu, potem wybierz wzór. √(Ka·c) stosuje się dla słabych przy α < 5%.',
  foot:'Skala logarytmiczna: pH 2 ma 10× więcej H₃O⁺ niż pH 3. ÷10 stężenia = pH +1.',
  build(host) {
    V.flowchart(host, { vb:[735, 290], boxes:[
      {x:90,y:8,w:180,h:40,kind:'tl',title:'Kwas o stężeniu c',hint:'Zacznij od ustalenia, jaki to kwas i jakie ma stężenie molowe c [mol/dm³].'},
      {x:90,y:64,w:180,h:40,kind:'am',title:'Mocny czy słaby?',more:'Mocne (HCl, HBr, HI, HNO₃, H₂SO₄ w I stopniu) dysocjują praktycznie całkowicie, słabe (CH₃COOH, H₂CO₃, HF, H₂S) tylko częściowo. Rozstrzyga Ka albo stopień dysocjacji α.'},
      {x:5,y:134,w:170,h:120,kind:'gr',title:'Mocny',more:'Dysocjacja całkowita, więc [H₃O⁺] = c. Dla H₂SO₄ w prostych zadaniach liczy się tylko I stopień; II stopień jest znacznie słabszy.',lines:['[H₃O⁺] = c','(H₂SO₄ I st.: ≈ c)','pH = −log c','np. 0,01 M HCl → pH 2']},
      {x:185,y:134,w:170,h:120,kind:'bl',title:'Słaby',hint:'Sprawdź, czy α < 5%. Jeśli nie, użyj pełnego równania kwadratowego.',more:'Z prawa rozcieńczeń Ostwalda: Ka = α²c/(1−α) ≈ α²c, stąd α = √(Ka/c) i [H₃O⁺] = √(Ka·c).',lines:['[H₃O⁺] = α·c','lub ≈ √(Ka·c)','pH = −log [H₃O⁺]','1 M CH₃COOH → pH ≈ 2,4']},
      {x:430,y:10,w:290,h:46,kind:'tl',title:'HCl 0,1 M → pH = 1',more:'HCl jest mocny, więc [H₃O⁺] = 0,1 = 10⁻¹ mol/dm³, a pH = −log 10⁻¹ = 1.'},
      {x:430,y:76,w:290,h:46,kind:'bl',title:'HCl 0,01 M → pH = 2',more:'[H₃O⁺] = 10⁻² mol/dm³, więc pH = 2. To 10× mniej jonów niż w roztworze 0,1 M.'},
      {x:430,y:142,w:290,h:46,kind:'am',title:'HCl 0,001 M → pH = 3',more:'[H₃O⁺] = 10⁻³ mol/dm³, więc pH = 3. Każde rozcieńczenie 10× podnosi pH o 1.'},
      {x:430,y:210,w:290,h:62,kind:'gy',title:'Skala logarytmiczna',hint:'Różnica 2 jednostek pH to 100× różnica stężenia.',more:'pH = −log[H₃O⁺]. Dlatego pH nie uśrednia się jak zwykłych liczb, tylko przelicza z powrotem na stężenia.',lines:['1 jednostka pH = 10× różnica [H₃O⁺]','pH 2 ma 10× więcej H₃O⁺ niż pH 3']},
    ], arrows:[
      {x1:180,y1:48,x2:180,y2:62},
      {x1:140,y1:104,x2:90,y2:132},
      {x1:220,y1:104,x2:270,y2:132},
      {x1:575,y1:56,x2:575,y2:74,label:'÷10 → pH +1'},
      {x1:575,y1:122,x2:575,y2:140,label:'÷10 → pH +1'},
    ]});
  }
});

function reactionsMerged(host,predictDefault){
  host.innerHTML='';
  const E=CHE.REACTION,CO=CHE.COLORS,KEY='che-react-predict',W=['sol-water'];

  const G=CHE.LAB.GFX,RXK=['mgHcl','znHcl','feHcl','alHcl','cuHcl','agHcl','cuoH2so4','caco3Hcl','hclNaOH','hclNaOH+php','agno3Hcl','cuHno3'];
  const R=RXK.filter(x=>G.rx.get(x)).map(x=>{const s=G.rx.get(x);return {rx:x,k:s.noRx?null:(s.rxKey||x),n:s.n,out:(s.out||['nic']).slice(),why:s.why||'',teacher:s.teacher,noRx:s.noRx,eq:s.eq}});
  const nCat=R.length;
  G.rx.list(s=>s.src==='CHE.COLORS').forEach(id=>{const d=CO.get(id),s=G.rx.get(id);if(d)R.push({rx:id,db:d,n:d.name,out:s.out.slice(),why:d.obs})});
  let predict;try{const v=localStorage.getItem(KEY);predict=v===null?!!predictDefault:v==='1'}catch(_){predict=!!predictDefault}
  const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
  const rbar=el('div','r'),rbar2=el('div','r','<b>Osady i wypieranie (CHE.COLORS):</b>'),tog=el('div','r','<label style="display:flex;gap:8px;align-items:center;font-weight:700"><input type="checkbox" class="pt"> Tryb przewidywania (najpierw zaznacz, co zobaczysz)</label>');
  const pred=el('div','r','<b>Predykcja:</b> <button data-k="gaz">gaz</button><button data-k="osad">osad</button><button data-k="barwa">zmiana barwy</button><button data-k="nic">brak zmian</button>');
  const cv=document.createElement('canvas');cv.dataset.h=340;cv.style.background='var(--surface-soft)';cv.style.borderRadius='var(--r-sm)';
  const controls=el('div','r','<button class="go">▶ wykonaj doświadczenie</button><button class="reset">↺ od nowa</button>');
  const detail=el('div','metric-grid'),note=el('div','note');
  host.append(rbar,rbar2,tog,pred,cv,controls,detail,note);
  let cur=0,chosen=new Set(),t0=null,done=false,tNow=0;
  const pt=tog.querySelector('.pt');pt.checked=predict;
  function data(r){
    if(r.db)return {eq:r.db.name,type:'reakcja barwna (osad / wypieranie)',cond:'—',obs:r.db.obs,prod:CO.get(r.db.after).name,bal:'—',saf:'',src:'CHE.COLORS (rekord reakcji)'};
    const d=r.k&&E&&E.get&&E.get(r.k);
    if(d){const PF=x=>String(x||'').replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,c=>'₀₁₂₃₄₅₆₇₈₉'[c])),TN=(CHE.DATA&&CHE.DATA.REACTION_TYPE_NAMES)||{};return {eq:PF(E.equation(r.k)),type:TN[d.type]||d.type,cond:d.conditions||'—',obs:d.observation||'—',prod:PF((d.productKeys||[]).join(', '))||'—',bal:d.balance&&d.balance.ok?'OK':'BŁĄD',saf:(d.safety||[]).join(' '),src:'CHE.REACTION (silnik)'}}
    return {eq:r.eq||'—',type:r.noRx?'brak reakcji':'brak rekordu w silniku',cond:'—',obs:r.noRx?'brak zjawisk':'—',prod:'—',bal:'—',saf:'',src:'zapis lokalny widoku (brak rekordu w CHE.REACTION)'}}
  function showData(){const d=data(R[cur]);detail.innerHTML='';
    [['Równanie',d.eq],['Typ',d.type],['Warunki',d.cond],['Obserwacja',d.obs],['Produkty',d.prod],['Bilans',d.bal]].forEach(([a,b])=>detail.appendChild(el('div',null,'<b>'+a+'</b><strong style="font-size:13px">'+b+'</strong>')))}
  function setMode(){pred.style.display=predict?'':'none';pt.checked=predict;reset()}
  function reset(){chosen.clear();t0=null;done=false;pred.querySelectorAll('[data-k]').forEach(b=>b.classList.remove('on'));controls.querySelector('.go').disabled=false;showData();
    [...rbar.querySelectorAll('button'),...rbar2.querySelectorAll('button')].forEach(b=>b.classList.toggle('on',+b.dataset.i===cur));
    note.textContent=(R[cur].teacher?'Tylko pokaz nauczyciela (toksyczny NO₂). ':'')+(predict?'Najpierw predykcja, potem obserwacja.':'Uruchom zlewkę i obserwuj.')}
  R.forEach((r,i)=>{const b=el('button',null,r.n);b.type='button';b.dataset.i=i;b.onclick=()=>{cur=i;reset()};(i<nCat?rbar:rbar2).appendChild(b)});
  pt.onchange=()=>{predict=pt.checked;try{localStorage.setItem(KEY,predict?'1':'0')}catch(_){}setMode()};
  pred.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{if(t0!==null&&!done)return;const k=b.dataset.k;if(k==='nic')chosen.clear();else chosen.delete('nic');chosen.has(k)?chosen.delete(k):chosen.add(k);if(k==='nic')chosen.add('nic');pred.querySelectorAll('[data-k]').forEach(x=>x.classList.toggle('on',chosen.has(x.dataset.k)))});
  controls.querySelector('.reset').onclick=reset;
  controls.querySelector('.go').onclick=()=>{if(predict&&!chosen.size){note.textContent='Najpierw wybierz predykcję (albo wyłącz tryb przewidywania).';return}t0=tNow;done=false;controls.querySelector('.go').disabled=true};
  setMode();
  M.add(cv,(ctx,w,h,time)=>{
    tNow=time;const r=R[cur],p=t0===null?0:Math.min(1,(time-t0)/6),e=p*p*(3-2*p);
    if(t0!==null&&!done&&p>=1){done=true;controls.querySelector('.go').disabled=false;const d=data(r);
      const ok=r.out.length===chosen.size&&r.out.every(x=>chosen.has(x));
      note.innerHTML=(predict?(ok?'✓ <b>Predykcja zgodna.</b> ':'<b>Porównaj predykcję z obserwacją.</b> '):'')+r.why+'<br><b>Zjawisko:</b> '+r.out.join(', ')+(d.saf?'<br><b>BHP:</b> '+d.saf:'')+'<br><small>Źródło danych: '+d.src+'.</small>'}
    const bw=Math.min(w*.5,300),bx=(w-bw)/2,by=54,bh=h-96,TH=G.theme();
    G.canvasDraw(ctx,w,h,time,G.rx.state(r.rx,p),{rect:{x:bx,y:by+bh*.12,w:bw,h:bh*.88},key:cur+'|'+t0});
    ctx.fillStyle=TH.text;ctx.font='800 15px Inter,system-ui';ctx.textAlign='center';ctx.fillText(r.n,w/2,24);
    ctx.fillStyle=TH.mut;ctx.font='600 12px Inter,system-ui';ctx.fillText(t0===null?'przed doświadczeniem':p<1?'reakcja trwa…':'obserwacja zakończona',w/2,42);
  });
}
 
defineView('reakcje-kwasu-v03', {
  title:'Reakcje kwasów — zlewka modułowa · CHE.LAB v1.02', tag:'LAB',
  hint:'Odczynniki (chipy) → jedna zlewka → równanie, obserwacja, pH, BHP. Wspólna sesja LAB; pH słabych kwasów korzysta z CHE.EQUILIBRIUM gdy dostępne.',
  foot:'Silnik: CHE.LAB v1.02 · dane własne modułu + CHE.EQUILIBRIUM.weakAcidPH · preset acids (bez Na/K/Ca).',
  build(host){
    if(window.CHE&&CHE.LABVIEW){
      CHE.LABVIEW.mount(host,{preset:'acids', session:'viz-reakcje-kwasu'});
    } else if(typeof reactionsMerged==='function'){
      reactionsMerged(host,true);
    } else {
      host.innerHTML='<div class="lab-note">Brak CHE.LABVIEW — wczytaj che-lab-engine-v001.</div>';
    }
  }
});

defineView('lab-library-v001',{title:'Biblioteka elementów laboratorium · v1.0',tag:'LAB',hint:'Naczynia, przyrządy, aparatura, cząsteczki i efekty: jedno źródło GFX dla wszystkich lekcji. Przeglądaj, poprawiaj, uzupełniaj, dopiero potem składaj laby.',foot:'API: CHE.LAB.GFX.mount({vessel,effects,get}) · CHE.LAB.LIBRARY.mount(host).',build(host){CHE.LAB.LIBRARY.mount(host)}});

defineView('lab-beaker-v102', {
  title:'CHE.LAB — uniwersalna zlewka (pełny panel) · v1.02', tag:'LAB',
  hint:'Samodzielny moduł laboratoryjny: kontrolki, zlewka, obserwacje, równanie, pH ze skalą i probówkami, BHP, kolejność, dziennik.',
  foot:'API: CHE.LABVIEW.mount / panel. Sesja współdzielona przez session id. Preset acids lub własna lista panels.',
  build(host){
    if(!(window.CHE&&CHE.LABVIEW)){
      host.innerHTML='<div class="lab-note">Brak CHE.LABVIEW (che-lab-engine-v001).</div>';
      return;
    }
    CHE.LABVIEW.mount(host,{
      preset:'acids',
      session:'viz-lab-beaker-v102',
      titles:true,
      toggle:true
    });
  }
});

defineView('lab-stations-v102', {
  title:'CHE.LAB — stanowiska (zlewka, gaz, chłodnica, palnik, miareczkowanie) · v1.02', tag:'LAB',
  hint:'Multi-lab: kolba, przewód gazowy, odbiornik, chłodnica, spalanie, termika, miareczkowanie, wykresy i przepływ stanowiska.',
  foot:'Preset stations · CHE.LABVIEW · panele: flask, gasLine, gasTrap, cooler, combustion, thermal, titration…',
  build(host){
    if(!(window.CHE&&CHE.LABVIEW)){
      host.innerHTML='<div class="lab-note">Brak CHE.LABVIEW (che-lab-engine-v001).</div>';
      return;
    }
    CHE.LABVIEW.mount(host,{
      preset:'stations',
      session:'viz-lab-stations-v102',
      titles:true,
      toggle:true
    });
  }
});

defineView('neutralization', {
  title:'Zobojętnianie — wspólny model reakcji', tag:'AMB',
  hint:'Wybierz zapis reakcji. Równanie cząsteczkowe pochodzi z CHE.REACTION; zapis jonowy pokazuje sedno procesu.',
  foot:'Dla HCl + NaOH skrócone jonowo: H⁺ + OH⁻ → H₂O. Dane reakcji, bilans i obserwacja są centralne.',
  build(host) {
    host.innerHTML='';
    const LC=CHE.LESSON_CONTEXT;
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('neutralization',{pairs:[['HCl','NaOH']], reactionId:'hclNaOH'}):{reactionId:'hclNaOH'};
    const rid=opts.reactionId||'hclNaOH';
     
    const rx=CHE.REACTION.get(rid);
    const box=document.createElement('div'); box.className='metric-grid';
    const mk=(label,val)=>{const d=document.createElement('div');d.innerHTML='<b>'+label+'</b><strong style="font-size:14px">'+val+'</strong>';return d;};
    const eq=CHE.REACTION.equation(rid);
    const balance=rx?.balance?.ok?'OK':'BŁĄD';
    box.append(mk('Równanie cząsteczkowe',eq),mk('Bilans atomów i ładunku',balance),mk('Typ',rx?.type||'—'));
    if(opts._lesson){ const ctx=document.createElement('div'); ctx.className='note'; ctx.innerHTML='<b>Źródło:</b> CHE.REACTION · kontekst lekcji <b>'+opts._lesson+'</b> (filtr UI, nie osobna baza).'; host.appendChild(ctx); }
    const svgHost=document.createElement('div');
    const explain=document.createElement('div'); explain.className='note';
    V.flowchart(svgHost,{vb:[735,330],boxes:[
      {x:5,y:8,w:725,h:62,kind:'tl',title:'Cząsteczkowe',lines:[eq]},
      {x:5,y:84,w:725,h:62,kind:'bl',title:'Jonowe pełne',lines:['Na⁺ + OH⁻ + H⁺ + Cl⁻ → Na⁺ + Cl⁻ + H₂O']},
      {x:5,y:160,w:725,h:62,kind:'gr',title:'Jonowe skrócone',lines:['H⁺ + OH⁻ → H₂O']},
      {x:5,y:236,w:725,h:78,kind:'gy',title:'Dane z CHE.REACTION',lines:[(rx?.observation||'')+' · '+(rx?.conditions||'brak dodatkowych warunków'), 'BHP: '+((rx?.safety||[]).join(' ')||'standardowe środki ostrożności')]}
    ],arrows:[{x1:367,y1:70,x2:367,y2:82},{x1:367,y1:146,x2:367,y2:158}]});
    const step=document.createElement('div');step.className='r';
    ['Cząsteczkowe','Jonowe pełne','Jonowe skrócone','Obserwacja / warunek'].forEach((t,i)=>{const b=document.createElement('button');b.textContent=t;b.onclick=()=>{explain.innerHTML='<b>Etap '+(i+1)+':</b> '+(i===0?eq:i===1?'Dysocjacja mocnych elektrolitów pokazuje wszystkie jony.':i===2?'Jony Na⁺ i Cl⁻ są obserwatorami; reagują H⁺ i OH⁻.':((rx?.observation||'Brak obserwacji.')+' '+(rx?.conditions||'')));};step.appendChild(b)});
    host.append(box,svgHost,step,explain);
  }
});

defineView('compound-cards', {
  title:'Karty związków — HCl, H₂SO₄, CH₃COOH, H₂CO₃', tag:'UND',
  hint:'Wzór · nazwy · reszta · moc · otrzymywanie · reakcje · zastosowanie · ciekawostka.',
  foot:'Kontrola: liczba kwaśnych H = ładunek reszty kwasowej.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT; if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> karty z centralnych substancji · kontekst <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    host.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'cheat-cards';
    CHE.DATA.COMPOUNDS.forEach(c => {
      const card = document.createElement('div');
      card.className = 'compound-card';
      const tagLabel = c.tag === 'mocny' ? 'MOCNY' : c.tag === 'sredni' ? 'ŚREDNI' : 'SŁABY';
      card.innerHTML = `
        <div class="compound-head">
          <span class="f">${c.f}</span>
          <span class="n">${c.n}</span>
          <span class="tag ${c.tag}">${tagLabel}</span>
        </div>
        ${c.rows.map(([k, v]) => `<div class="compound-row"><b>${k}</b><span>${v}</span></div>`).join('')}`;
      grid.appendChild(card);
    });
    host.appendChild(grid);
  }
});

defineView('safety', {
  title:'Bezpieczeństwo — pierwsza pomoc i zasady', tag:'E8',
  hint:'Trzy scenariusze: skóra/oczy, połknięcie, wdychanie oparów.',
  foot:'Nie neutralizuj kwasu na skórze zasadą — reakcja wydziela ciepło.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT; if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> BHP z silnika dydaktycznego · kontekst <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    V.flowchart(host, { vb:[760, 260], boxes:[
      {x:5,y:6,w:751,h:44,kind:'rd',title:'Zawsze: okulary · rękawice · fartuch · KWAS WLEWAMY DO WODY'},
      {x:5,y:64,w:245,h:124,kind:'bl',title:'Skóra lub oczy',lines:['1. zdejmij odzież','2. płucz wodą min. 15 min','3. oczy: płucz i jedź do lekarza','4. zgłoś nauczycielowi']},
      {x:256,y:64,w:245,h:124,kind:'am',title:'Połknięcie',lines:['1. NIE wywołuj wymiotów','2. wypłucz usta wodą','3. dzwoń 112 / 999','4. pokaż etykietę']},
      {x:507,y:64,w:249,h:124,kind:'gr',title:'Wdychanie oparów',lines:['1. wyjdź na świeże powietrze','2. przewietrz pomieszczenie','3. nie wracaj do oparów','4. duszność → dzwoń 112']},
      {x:5,y:200,w:751,h:48,kind:'gy',title:'Dlaczego „kwas do wody"',lines:['Wlewanie wody do stężonego H₂SO₄ miejscowo gotuje wodę i rozpryskuje kwas.']},
    ]});
  }
});

defineView('carboxyl', {
  title:'Grupa karboksylowa — który H jest kwaśny', tag:'AMB',
  hint:'W kwasach organicznych R–COOH tylko H z grupy karboksylowej oddaje proton.',
  foot:'R–COOH to wzór ogólny kwasów karboksylowych. Najprostszy: HCOOH (mrówkowy).',
  build(host) {
    V.molecule2D(host, { vb:[520, 300], mol: CHE.DATA.MOL2D.carboxyl });
  }
});

defineView('timeline', {
  title:'Historia pojęcia kwasu — 5 scen', tag:'UND',
  hint:'Kliknij kropkę lub użyj przycisków. Autoplay przewija sceny automatycznie.',
  foot:'Na poziomie E8 wystarczą teorie Arrheniusa i Brønsteda.',
  build(host) {
    host.innerHTML = '';
    const stage = document.createElement('div');
    stage.style.cssText = 'min-height:220px;background:var(--surface-soft);border:1px solid var(--border);border-radius:12px;padding:24px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;text-align:center';
    const dots = document.createElement('div');
    dots.style.cssText = 'display:flex;justify-content:center;gap:8px;margin:14px 0 8px';
    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap';
    controls.innerHTML = `
      <button class="prev" style="padding:8px 14px;border:1px solid var(--border-strong);border-radius:8px;background:var(--surface);cursor:pointer;font:700 .82rem var(--sans)">← Poprzedni</button>
      <span class="prog" style="font:700 12.5px var(--mono);color:var(--text-muted)">1 / 5</span>
      <button class="next" style="padding:8px 14px;border:1px solid var(--border-strong);border-radius:8px;background:var(--surface);cursor:pointer;font:700 .82rem var(--sans)">Następny →</button>
      <button class="auto" style="padding:8px 14px;border:1px solid var(--border-strong);border-radius:8px;background:var(--surface);cursor:pointer;font:700 .82rem var(--sans)">▶ Autoplay</button>`;
    host.append(stage, dots, controls);
    let cur = 0, timer = null;
    const TL = CHE.DATA.TIMELINE;
    TL.forEach((_, i) => {
      const d = document.createElement('button');
      d.style.cssText = 'width:12px;height:12px;border-radius:50%;background:var(--border-strong);border:2px solid transparent;cursor:pointer;padding:0;transition:all .2s';
      d.addEventListener('click', () => { stop(); cur = i; render(); });
      dots.appendChild(d);
    });
    const prev = controls.querySelector('.prev');
    const next = controls.querySelector('.next');
    const auto = controls.querySelector('.auto');
    const prog = controls.querySelector('.prog');
    prev.onclick = () => { stop(); if (cur > 0) { cur--; render(); } };
    next.onclick = () => { stop(); if (cur < TL.length - 1) { cur++; render(); } };
    auto.onclick = () => {
      if (timer) { stop(); return; }
      if (cur >= TL.length - 1) cur = 0;
      render();
      timer = setInterval(() => { if (cur >= TL.length - 1) { stop(); return; } cur++; render(); }, 2000);
    };
    function stop() { if (timer) { clearInterval(timer); timer = null; auto.textContent = '▶ Autoplay'; } }
    function render() {
      const s = TL[cur];
      stage.innerHTML = `
        <div style="font:800 28px var(--mono);color:var(--accent);letter-spacing:1px">${s.year}</div>
        <div style="font:800 17px var(--sans);color:var(--text)">${s.who}</div>
        <div style="font-size:13.5px;color:var(--text-soft);max-width:560px;line-height:1.65">${s.desc}</div>`;
      [...dots.children].forEach((d, i) => {
        d.style.background = i === cur ? 'var(--accent)' : 'var(--border-strong)';
        d.style.transform = i === cur ? 'scale(1.25)' : 'scale(1)';
        d.style.boxShadow = i === cur ? '0 0 0 3px var(--accent-glow)' : 'none';
      });
      prog.textContent = (cur + 1) + ' / ' + TL.length;
      prev.disabled = cur === 0; next.disabled = cur === TL.length - 1;
      prev.style.opacity = cur === 0 ? 0.4 : 1;
      next.style.opacity = cur === TL.length - 1 ? 0.4 : 1;
      if (timer) auto.textContent = '⏸ Stop';
    }
    render();
  }
});

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
        const dark = mode === 'en' && e.en && (e.en - 0.8) / 3.2 > 0.5;  
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

CHE.TOOLS = (() => {
  const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
  const indicator=(name,pH)=>{
    const r=(CHE.DATA.INDICATOR_RANGES||[]).find(x=>x.name===name);
    if(!r) return {name,phase:'brak danych'};
    if(pH<r.lo) return {name,phase:'poniżej zakresu',position:'low',range:[r.lo,r.hi]};
    if(pH>r.hi) return {name,phase:'powyżej zakresu',position:'high',range:[r.lo,r.hi]};
    return {name,phase:'w zakresie zmiany',position:'transition',range:[r.lo,r.hi]};
  };
  function pHFor(type,C,Ka){
    return type==='strongAcid'?CHE.CHEM.strongAcid(C):type==='strongBase'?CHE.CHEM.strongBase(C):CHE.CHEM.weakAcid(C,Ka);
  }
  function acidProfile(id,C){
    const _AS=Object.values(CHE.DATA.ACID_SYSTEMS||{}); const a=_AS.find(x=>x.id===id) || _AS[0];
    if(!a)return null;
    const ks=(a.pKa||[]).map(p=>Math.pow(10,-p));
    const r=a.strong&&ks.length===1?CHE.CHEM.strongAcid(C):ks.length===1?CHE.CHEM.weakAcid(C,ks[0]):CHE.EQUILIBRIUM.polyproticPH(C,ks);
    const al=ks.length===1?(a.strong?[1]:[1-r.alpha,r.alpha]):r.alpha;
    return {id:a.id,species:a.species,C,pH:r.pH,H:r.H,alpha:r.alpha??1,forms:al,pKa:a.pKa||[],strong:!!a.strong};
  }
  function envLime(pH,V){
    const H=CHE.CHEM.HFromPH(pH), volume=Number(V), M=CHE.CHEM.molarMass('CaCO3');
    const nH=H*volume, nCaCO3=.5*nH;
    return {pH,volume,H,nH,nCaCO3,molarMassCaCO3:M,massG:nCaCO3*M};
  }
  function reaction(id){return CHE.REACTION.get(id);}
  return {indicator,pHFor,acidProfile,envLime,reaction,clamp};
})();

defineView('acid-calculator', {
  title:'Kalkulator kwasu — pH, dysocjacja, formy · wspólny silnik', tag:'VIZ',
  hint:'Wybierz kwas i stężenie. Wynik pochodzi z CHE.TOOLS → CHE.CHEM / CHE.EQUILIBRIUM.',
  foot:'Warstwa dydaktyczna pozostaje: pKa, pH, udział form i ograniczenia modelu są objaśniane razem.',
  build(host){
    host.innerHTML='';
    const AC=Object.values(CHE.DATA.ACID_SYSTEMS||{});
    let ai=Math.min(6,Math.max(0,AC.length-1)), lc=-1;
    const row=document.createElement('div');row.className='r';
    const cRow=document.createElement('div');cRow.className='r';
    cRow.innerHTML='<label>stężenie</label><input type="range" min="-4" max="0" step="0.05" value="-1"><b style="font:700 .85rem var(--mono);min-width:100px;text-align:right"></b>';
    const out=document.createElement('div');out.className='note';
    const stage=document.createElement('div');stage.style.marginTop='10px';
    host.append(row,cRow,out,stage);
    AC.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.textContent=a.id;b.classList.toggle('on',i===ai);b.onclick=()=>{ai=i;row.querySelectorAll('button').forEach((x,j)=>x.classList.toggle('on',j===i));render()};row.appendChild(b)});
    const inp=cRow.querySelector('input'),cout=cRow.querySelector('b');
    inp.oninput=e=>{lc=+e.target.value;render()};
    function render(){
      const a=AC[ai],C=Math.pow(10,lc),r=CHE.TOOLS.acidProfile(a.id,C); if(!r)return;
      cout.textContent=(C>=.01?C.toFixed(2):C.toExponential(1))+' M';
      out.innerHTML=`<b>${r.species}</b> · pH = <b>${r.pH.toFixed(2)}</b> · [H₃O⁺] = ${r.H.toExponential(2)} M · α = ${(r.alpha*100).toFixed(2)}%<br><span class="muted">Wspólny łańcuch: Ka/pKa → równowaga → [H₃O⁺] → pH. Dla układów wieloprotonowych używany jest centralny solver.</span>`;
      const svg=V.makeSvg(stage,[900,250]),E=V.el;
      r.forms.forEach((v,k)=>{const bw=700/Math.max(1,r.forms.length),x=100+k*bw;svg.appendChild(E('rect',{x,y:205-v*160,width:bw-14,height:v*160,rx:8,fill:'var(--accent)',opacity:.72}));svg.appendChild(E('text',{x:x+(bw-14)/2,y:225,'text-anchor':'middle','font-size':11,fill:'var(--text)'},(a.species||a.id)+(r.forms.length>1?' · forma '+(k+1):'')));svg.appendChild(E('text',{x:x+(bw-14)/2,y:195-v*160,'text-anchor':'middle','font-size':11,'font-weight':800,fill:'var(--text)'},(v*100).toFixed(1)+'%'));});
      svg.appendChild(E('text',{x:450,y:25,'text-anchor':'middle','font-size':13,'font-weight':800,fill:'var(--text)'},'Udział form — wynik centralnego modelu równowagi'));
    }
    render();
  }
});

defineView('env-balance', {
  title:'Bilans mas — wapnowanie jeziora · wspólny model',tag:'ZA',
  hint:'Zmień pH i objętość. Obliczenie przechodzi przez CHE.CHEM.HFromPH + molarMass.',
  foot:'To model edukacyjny: rzeczywiste jezioro ma pojemność buforową i inne składniki, więc samo pH nie wyznacza dawki wapna.',
  build(host){
    host.innerHTML='';const r=document.createElement('div');r.className='r';r.innerHTML='<label>pH <input class="p" type="number" min="0" max="14" step="0.1" value="4"></label><label>V [L] <input class="v" type="number" min="1" value="1000"></label>';const out=document.createElement('div');out.className='note';host.append(r,out);const draw=()=>{const p=+r.querySelector('.p').value,V=+r.querySelector('.v').value,x=CHE.TOOLS.envLime(p,V);out.innerHTML=`<b>[H₃O⁺]</b> = ${x.H.toExponential(2)} mol/L · <b>n(H₃O⁺)</b> ≈ ${x.nH.toFixed(4)} mol<br><b>CaCO₃</b>: n ≈ ${x.nCaCO3.toFixed(4)} mol · M = ${x.molarMassCaCO3.toFixed(2)} g/mol · <b>m ≈ ${x.massG.toFixed(2)} g</b><br><span class="muted">Model stechiometryczny: CaCO₃ + 2 H₃O⁺ → Ca²⁺ + CO₂ + 3 H₂O.</span>`};r.querySelectorAll('input').forEach(i=>i.oninput=draw);draw();
  }
});

(function() {
  const tt = document.getElementById('themeToggle');
  const ls = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }, set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} } };
  const saved = ls.get('che.theme') || 'light';
  if (saved === 'dark') { document.documentElement.setAttribute('data-theme', 'dark'); if (tt) tt.textContent = 'Jasny'; }
  if (tt) tt.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) { document.documentElement.removeAttribute('data-theme'); tt.textContent = '◐'; ls.set('che.theme', 'light'); }
    else { document.documentElement.setAttribute('data-theme', 'dark'); tt.textContent = 'Jasny'; ls.set('che.theme', 'dark'); }
  });

  const tocToggle = document.getElementById('tocToggle');
  const tocWrap = document.getElementById('tocWrapper');
  const tocOverlay = document.getElementById('tocOverlay');
  function buildToc() {
    let html = '<h5>Spis treści — kolejność lekcji</h5><a href="#che-change-log">Rejestr zmian i ulepszeń</a>';
    document.querySelectorAll('main h2').forEach((h2, gi) => {
      h2.id = h2.id || ('sec-auto-' + gi);
      html += `<h5>${h2.textContent.trim()}</h5>`;
      let x = h2.nextElementSibling;
      let linked = false;
      while (x && x.tagName !== 'H2') {
        if (!linked && x.matches && x.matches('[data-che]')) {
          const name = x.dataset.che;
          const spec = CHE.VIEW.views.get(name);
          if (!x.id) x.id = 'viz-' + name;
          html += `<a href="#${x.id}">${(spec && spec.title) || name}</a>`;
          linked = true; 
        }
        x = x.nextElementSibling;
      }
    });
    if(!tocWrap) return;
    tocWrap.innerHTML = html;
    tocWrap.querySelectorAll('a').forEach(a => a.addEventListener('click', ev => {
      const id=(a.getAttribute('href')||'').slice(1);
      const target=id && document.getElementById(id);
      if(target){ ev.preventDefault(); close(); requestAnimationFrame(()=>target.scrollIntoView({behavior:'smooth',block:'start'})); }
    }));
  }
  function open() { if(!tocWrap||!tocOverlay) return; tocWrap.classList.add('is-open'); tocOverlay.classList.add('is-visible'); document.body.style.overflow = 'hidden'; }
  function close() { if(!tocWrap||!tocOverlay) return; tocWrap.classList.remove('is-open'); tocOverlay.classList.remove('is-visible'); document.body.style.overflow = ''; }
  if (tocToggle) tocToggle.addEventListener('click', () => tocWrap.classList.contains('is-open') ? close() : open());
  if (tocOverlay) tocOverlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

defineView('molecule3d-merged', {
  title:'Model 3D cząsteczek — scalony model + geometria + klik atomu', tag:'MOTION',
  hint:'Żółty pierścień = proton kwaśny. Przeciągnij, aby obracać; scroll/pinch = zoom.',
  foot:'Model dydaktyczny — nie jest to geometria kwantowa. Służy rozpoznawaniu składu, wiązań i protonów kwaśnych.',
  build(host) {
    host.innerHTML = '';
    const bar = document.createElement('div');
    bar.className = 'r'; bar.style.marginTop = '0';
    const cv = document.createElement('canvas');
    cv.dataset.h = 340;
    cv.style.background = 'radial-gradient(ellipse at 50% 35%, #1e3a5f, #0b1220)';
    cv.style.cursor = 'grab';
    const note = document.createElement('div');
    note.className = 'note';
    host.append(bar, cv, note);

    const lessonEl = host.closest && host.closest('[data-che-lesson]'), SET = ((CHE.DATA.MOL3D_SETS||{})[lessonEl ? lessonEl.getAttribute('data-che-lesson') : ''] || null);
    const keys = SET ? SET.keys.filter(k => CHE.DATA.MOLECULES && CHE.DATA.MOLECULES[k]) : ['HCl','HF','H2O','H3O','H2SO4','H3PO4','H2CO3','CH3COOH','HCOOH','NH3','CO2','CH4'];
    let cur = SET ? SET.start : 'CH3COOH', yaw = 0.5, pitch = 0.25, zoom = 1;
    let dragging = false, lx = 0, ly = 0, auto = true;
    const pointers = new Map();
    let pd = 0;
    let selectedAtom = null;
    const GEOM = {
      H2O:'kątowa · H–O–H ≈ 104,5°', CO2:'liniowa · O=C=O = 180°',
      CH4:'tetraedryczna · H–C–H ≈ 109,5°', NH3:'piramidalna · H–N–H ≈ 107°'
    };
    if (SET && SET.geom) Object.assign(GEOM, SET.geom);

    if (!CHE.DATA.MOL3D.CH4) CHE.DATA.MOL3D.CH4 = { n:'CH₄', note:'metan · geometria tetraedryczna · kąt ≈ 109,5°', atoms:[['C',0,0,0],['H',50,50,50],['H',-50,-50,50],['H',-50,50,-50],['H',50,-50,-50]], bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], acid:[] };
    keys.forEach(k => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = CHE.MOLECULE.get(k).name;
      b.onclick = () => { cur = k; CHE.MOLECULE.select(k,{source:'molecule3d-merged'}); update(); };
      bar.appendChild(b);
    });
    const autoBtn = document.createElement('button');
    autoBtn.textContent = 'auto-obrót';
    autoBtn.classList.add('on');
    autoBtn.onclick = () => { auto = !auto; autoBtn.classList.toggle('on', auto); };
    bar.appendChild(autoBtn);

    function update() {
      [...bar.children].forEach(b => {
        if (b === autoBtn) return;
        b.classList.toggle('on', b.textContent === CHE.MOLECULE.get(cur).name);
      });
      note.innerHTML = '<b>' + CHE.MOLECULE.get(cur).name + '</b> — ' + CHE.MOLECULE.get(cur).note + (GEOM[cur] ? ' · <b>Geometria:</b> '+GEOM[cur] : '') + (selectedAtom !== null ? ' · <b>atom:</b> '+CHE.MOLECULE.get(cur).atoms[selectedAtom].element+' (kliknięty)' : '');
    }

    cv.addEventListener('pointerdown', e => {
      cv.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, [e.clientX, e.clientY]);
      dragging = true; lx = e.clientX; ly = e.clientY;
      cv.style.cursor = 'grabbing';
    });
    cv.addEventListener('pointermove', e => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, [e.clientX, e.clientY]);
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a[0]-b[0], a[1]-b[1]);
        if (pd) zoom = Math.max(0.5, Math.min(2.4, zoom * d / pd));
        pd = d;
      } else {
        yaw += (e.clientX - lx) * 0.01;
        pitch = Math.max(-1.4, Math.min(1.4, pitch + (e.clientY - ly) * 0.008));
        lx = e.clientX; ly = e.clientY;
      }
    });
    ['pointerup','pointercancel'].forEach(ev => cv.addEventListener(ev, e => {
      pointers.delete(e.pointerId); pd = 0;
      if (!pointers.size) { dragging = false; cv.style.cursor = 'grab'; }
    }));
    cv.addEventListener('wheel', e => {
      e.preventDefault();
      zoom = Math.max(0.5, Math.min(2.4, zoom * (e.deltaY < 0 ? 1.08 : 0.93)));
    }, { passive: false });
    cv.addEventListener('click', e => {
      const r = cv.getBoundingClientRect();
      const x = (e.clientX-r.left), y = (e.clientY-r.top);
      const M_ = CHE.MOLECULE.get(cur);
      let best=-1, bd=1e9;
      
      const ca=Math.cos(yaw),sa=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);
      M_.atoms.forEach((a,i)=>{const X=a.x*ca-a.z*sa,Z=a.x*sa+a.z*ca,Y=a.y*cp-Z*sp,Z2=a.y*sp+Z*cp,ss=zoom*(1+Z2/600)*1.15,px=cv.clientWidth/2+X*ss,py=cv.clientHeight/2+Y*ss,rr=(CHE.DATA.ELEM[a.element]?.r||20)*1.25*ss,d=Math.hypot(x-px,y-py);if(d<rr*1.25&&d<bd){bd=d;best=i;}});
      selectedAtom=best>=0?best:null; update();
    });

    M.add(cv, (ctx, w, h, time) => {
      const M_ = CHE.MOLECULE.get(cur);
      if (auto && !dragging) yaw += 0.006;
      const ca = Math.cos(yaw), sa = Math.sin(yaw);
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      const Q = M_.atoms.map((a, i) => {
        const X = a.x*ca - a.z*sa;
        const Z = a.x*sa + a.z*ca;
        const Y = a.y*cp - Z*sp;
        const Z2 = a.y*sp + Z*cp;
        const s = zoom * (1 + Z2/600);
        return { x: w/2 + X*s*1.15, y: h/2 + Y*s*1.15, z: Z2, s: s*1.15, e: a.element, idx: i };
      });
      const prim = [];
      M_.bonds.forEach(b => prim.push({ z:Math.min(Q[b.a].z, Q[b.b].z) - 1, b }));  
      Q.forEach(q => prim.push({ z:q.z, q }));
      prim.sort((a, b) => a.z - b.z);

      for (const p of prim) {
        if (p.b) {
          const a = Q[p.b.a], b = Q[p.b.b], o = p.b.order || 1;
          const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1;
          const nx = -dy/L, ny = dx/L;
          const offs = o === 2 ? [-5, 5] : [0];
          for (const f of offs) {
            ctx.strokeStyle = 'rgba(203,213,225,.85)';
            ctx.lineWidth = 9 * a.s;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(a.x + nx*f*a.s, a.y + ny*f*a.s);
            ctx.lineTo(b.x + nx*f*a.s, b.y + ny*f*a.s);
            ctx.stroke();
          }
          continue;
        }
        const q = p.q, E = CHE.DATA.ELEM[q.e];
        const r = E.r * 1.25 * q.s;
        const g = ctx.createRadialGradient(q.x - r*0.35, q.y - r*0.4, r*0.1, q.x, q.y, r);
        g.addColorStop(0, E.c1); g.addColorStop(1, E.c2);
        ctx.beginPath(); ctx.arc(q.x, q.y, r, 0, 7);
        ctx.fillStyle = g; ctx.fill();
        ctx.strokeStyle = E.s; ctx.lineWidth = 2; ctx.stroke();
        if (q.idx != null && M_.atoms[q.idx]?.acid) {
          ctx.beginPath();
          ctx.arc(q.x, q.y, r*1.4 + Math.sin(time*2) * 2, 0, 7);
          ctx.strokeStyle = 'rgba(250,204,21,.9)';
          ctx.lineWidth = 2.4;
          ctx.stroke();
        }
        ctx.fillStyle = E.t;
        ctx.font = `800 ${Math.round(r*0.7)}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        if (selectedAtom === q.idx) { ctx.beginPath(); ctx.arc(q.x,q.y,r*1.75,0,7); ctx.strokeStyle='#2dd4bf'; ctx.lineWidth=3; ctx.stroke(); ctx.fillStyle = E.t; }
        ctx.fillText(q.e, q.x, q.y);
      }
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '800 16px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(M_.n || M_.name || cur, 14, 26);
      if (M_.acid && M_.acid.length) {
        ctx.fillStyle = '#fbbf24';
        ctx.font = '700 11px Inter, system-ui, sans-serif';
        ctx.fillText('● proton kwaśny', 14, h - 16);
      }
    });
    document.addEventListener('che:molecule-select',e=>{const k=e.detail?.id;if(k&&keys.includes(k)){cur=k;selectedAtom=null;update();}});
    update();
  }
});

defineView('titration-merged', {
  title:'Titracja — scalony model: typ + wskaźnik + krzywa + kolba', tag:'AMB',
  hint:'Przesuń suwak lub naciśnij Autoplay. Punkt biegnie po krzywej, kolba zmienia barwę.',
  foot:'Punkt równoważnikowy przy V = 25 cm³ (HCl 0,1 M + NaOH 0,1 M). Skok pH ok. 25 cm³.',
  build(host) {
    host.innerHTML = '';
    const LC=CHE.LESSON_CONTEXT;
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('titration-merged',{defaultAcid:'HCl',defaultBase:'NaOH'}):{defaultAcid:'HCl',defaultBase:'NaOH'};
    if(opts._lesson){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> CHE.EQUILIBRIUM.titrationPH · wskaźniki z CHE.DATA · domyślnie <b>'+(opts.defaultAcid||'HCl')+' + '+(opts.defaultBase||'NaOH')+'</b> · kontekst <b>'+opts._lesson+'</b>.';host.appendChild(ctx)}
    const typeRow = document.createElement('div');
    typeRow.className = 'r'; typeRow.style.marginTop = '0';
    const defStrong=(opts.defaultAcid||'HCl')==='HCl'||(opts.defaultAcid||'')==='HNO3';
    typeRow.innerHTML = '<label>Typ:</label><select><option value="strongStrong"'+(defStrong?' selected':'')+'>mocny kwas + mocna zasada (HCl + NaOH)</option><option value="weakStrong"'+(!defStrong?' selected':'')+'>słaby kwas + mocna zasada (CH₃COOH + NaOH)</option></select>';
    const indRow = document.createElement('div'); indRow.className='r'; indRow.innerHTML='<label>Wskaźnik:</label><select><option value="mo">oranż metylowy</option><option value="btb">błękit bromotymolowy</option><option value="pp" selected>fenoloftaleina</option></select>';
    const cv = document.createElement('canvas');
    cv.dataset.h = 330;
    cv.style.background = 'var(--surface-soft)';
    cv.style.borderRadius = 'var(--r-sm)';
    const ctrl = document.createElement('div');
    ctrl.className = 'r';
    ctrl.innerHTML = '<button class="play">▶ Autoplay</button><input type="range" min="0" max="50" step="0.1" value="0"><div style="width:36px;height:48px;border:2px solid var(--border-strong);border-radius:2px 2px 12px 12px;position:relative;transition:background .3s;flex-shrink:0"></div>';
    const readout = document.createElement('div');
    readout.className = 'metric-grid';
    readout.innerHTML = `
      <div><b>V titranta</b><strong data-k="v">0,0 cm³</strong></div>
      <div><b>pH</b><strong data-k="p">—</strong></div>
      <div><b>Wskaźnik</b><strong data-k="i" style="font-size:12px">—</strong></div>`;
    const note = document.createElement('div');
    note.className = 'note';
    host.append(typeRow, indRow, cv, ctrl, readout, note);
    const sel = typeRow.querySelector('select');
    const indSel = indRow.querySelector('select');
    const sl = ctrl.querySelector('input');
    const flask = ctrl.querySelector('div:last-child');
    const play = ctrl.querySelector('.play');
    const q = k => readout.querySelector(`[data-k="${k}"]`);

    const sys=(CHE.DATA&&CHE.DATA.ACID_SYSTEMS)||{};
    const Ka = (sys.CH3COOH&&sys.CH3COOH.Ka&&sys.CH3COOH.Ka[0])||1.8e-5;
    const V0 = 25, C = 0.1, VE = 25, VMAX = 50;
    function pH(type, V) {
      return CHE.EQUILIBRIUM.titrationPH({type,C,V0,V,Ka});
    }
    const IND={};[['mo','ind-oranz-metylowy'],['btb','ind-bbt'],['pp','ind-fenoloftaleina']].forEach(([k,id])=>{const r=CHE.COLORS.get(id);IND[k]={id,n:r.name,lo:r.tr[0][0],hi:r.tr[0][1]}});
    function indicator(type,p){ const I=IND[indSel.value]; const a=Math.max(0,Math.min(1,(p-I.lo)/(I.hi-I.lo))); return [CHE.COLORS.css(CHE.COLORS.at(I.id,p)), I.n+' · '+(a===0?'barwa początkowa':a<1?'zakres przejścia':'barwa końcowa'), I]; }
    let raf = null;
    function draw(V) {
      const type = sel.value;
      const p = pH(type, V);
      const [col, name, I] = indicator(type, p);
      q('v').textContent = V.toFixed(1).replace('.', ',') + ' cm³';
      q('p').textContent = p.toFixed(2).replace('.', ',');
      q('i').textContent = name;
      flask.style.background = col;
      note.innerHTML = `Punkt równoważnikowy przy <b>V = 25 cm³</b>. pH w równoważniku: <b>${pH(type, VE).toFixed(2).replace('.', ',')}</b>.`;
      render();
    }
    play.onclick = () => {
      if (raf) { cancelAnimationFrame(raf); raf = null; play.textContent = '▶ Autoplay'; return; }
      if (+sl.value >= VMAX - 0.1) sl.value = 0;
      play.textContent = '⏸ Pauza';
      (function loop() {
        const v = +sl.value + 0.1;
        if (v >= VMAX) { sl.value = VMAX; draw(VMAX); raf = null; play.textContent = '▶ Autoplay'; return; }
        sl.value = v; draw(v); raf = requestAnimationFrame(loop);
      })();
    };
    sl.addEventListener('input', () => draw(+sl.value));
    sel.addEventListener('change', () => draw(+sl.value));
    indSel.addEventListener('change', () => draw(+sl.value));

    const ctx = cv.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      const r = cv.getBoundingClientRect();
      cv.width = r.width * dpr; cv.height = 330 * dpr;
      cv.style.height = '330px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    }
    function render() {
      const w = cv.width / dpr, h = cv.height / dpr;
      ctx.clearRect(0, 0, w, h);
      const L = 50, R = 20, T = 20, B = 40;
      const W = w - L - R, H = h - T - B;
      const X = v => L + v / VMAX * W;
      const Y = p => T + (1 - p/14) * H;
      const g = ctx.createLinearGradient(0, T, 0, T + H);
      g.addColorStop(0, 'rgba(74,75,181,.08)');
      g.addColorStop(.5, 'rgba(92,184,92,.06)');
      g.addColorStop(1, 'rgba(229,38,46,.08)');
      ctx.fillStyle = g; ctx.fillRect(L, T, W, H);
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillStyle = '#8892a0';
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      for (let p = 0; p <= 14; p += 2) {
        ctx.strokeStyle = p === 7 ? '#cdd5dd' : '#e5e9ee';
        ctx.setLineDash(p === 7 ? [4, 4] : []);
        ctx.beginPath(); ctx.moveTo(L, Y(p)); ctx.lineTo(L + W, Y(p)); ctx.stroke();
        ctx.fillText(p, L - 8, Y(p));
      }
      ctx.setLineDash([]);
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (let v = 0; v <= VMAX; v += 10) { ctx.fillStyle = '#8892a0'; ctx.fillText(v, X(v), T + H + 6); }
      const type = sel.value;
      ctx.beginPath();
      for (let vv = 0; vv <= VMAX + 0.001; vv += 0.2) {
        const x = X(vv), y = Y(pH(type, vv));
        vv === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#0d6868'; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.stroke();
      const I=IND[indSel.value];
      ctx.fillStyle='rgba(100,116,139,.12)'; ctx.fillRect(L,Y(I.hi),W,Math.max(2,Y(I.lo)-Y(I.hi)));
      ctx.fillStyle='#64748b'; ctx.font='700 10px Inter,system-ui,sans-serif'; ctx.textAlign='left'; ctx.fillText(I.n+' · zakres '+I.lo+'–'+I.hi, L+6, Y(I.hi)-5);
      const pe = pH(type, VE);
      ctx.strokeStyle = '#b06f1c'; ctx.setLineDash([6, 5]);
      ctx.beginPath(); ctx.moveTo(X(VE), T); ctx.lineTo(X(VE), T + H); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#b06f1c';
      ctx.beginPath(); ctx.arc(X(VE), Y(pe), 5, 0, 7); ctx.fill();
      const cp = pH(type, +sl.value);
      const cx = X(+sl.value), cy = Y(cp);
      const rg = ctx.createRadialGradient(cx, cy, 2, cx, cy, 16);
      rg.addColorStop(0, 'rgba(13,104,104,.45)');
      rg.addColorStop(1, 'rgba(13,104,104,0)');
      ctx.fillStyle = rg;
      ctx.beginPath(); ctx.arc(cx, cy, 16, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.strokeStyle = '#0d6868'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(cx, cy, 6, 0, 7); ctx.fill(); ctx.stroke();
    }
    new ResizeObserver(resize).observe(cv);
    resize();
    draw(0);
  }
});

function cheBigCanvas(host, height=280){
  const wrap=document.createElement('div'); wrap.className='che-bigpass stage';
  const cv=document.createElement('canvas'); cv.width=900; cv.height=height; wrap.appendChild(cv); host.appendChild(wrap);
  const ctx=cv.getContext('2d');
  const fit=()=>{const d=Math.min(2,devicePixelRatio||1), w=wrap.clientWidth||900; cv.width=Math.max(320,Math.floor(w*d)); cv.height=Math.floor(height*(w/900)*d); cv.style.height=(height*(w/900))+'px'; ctx.setTransform(d*(w/900),0,0,d*(w/900),0,0);};
  new ResizeObserver(fit).observe(wrap); fit(); return {cv,ctx,wrap,fit};
}

defineView('ph-indicators-v03',{
  title:'Panel pH — wskaźniki, roztwory, drabinka · v0.05', tag:'E8',
  hint:'Przeciągnij po skali lub wybierz roztwór i wskaźnik. Kropki na skali to kwasy i zasady o wybranym stężeniu.',
  foot:'Zakresy przejścia są orientacyjne (zależą od stężenia i temperatury). Wskaźnik pokazuje przedział pH, nie jego dokładną wartość. Ca(OH)₂ rozpuszcza się słabo — liczone do nasycenia ≈ 0,02 M.',
  build(host){
    host.innerHTML='';
    const H=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
    const SVGNS='http://www.w3.org/2000/svg';
    const SE=(n,a)=>{const e=document.createElementNS(SVGNS,n);for(const k in (a||{}))e.setAttribute(k,a[k]);return e};
    const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
    const f1=v=>v.toFixed(1).replace('.',','), f2=v=>v.toFixed(2).replace('.',',');
    const SUP={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻'};
    const sci=x=>{let e=Math.floor(Math.log10(x)+1e-9),m=x/Math.pow(10,e);if(m.toFixed(1)==='10.0'){m=1;e++}return m.toFixed(1).replace('.',',')+'·10'+String(e).split('').map(ch=>SUP[ch]).join('')};
    const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if(!document.getElementById('che-php4-css')){
      const st=document.createElement('style');st.id='che-php4-css';
      st.textContent=`
.ph4 .ph4-h{margin:16px 0 6px;font:800 11px var(--mono,ui-monospace,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted,#64748b)}
.ph4 .ph4-h:first-child{margin-top:0}
.ph4-chart{position:relative;margin-top:30px;user-select:none;-webkit-user-select:none}
.ph4-row{display:grid;grid-template-columns:124px 1fr;align-items:center;gap:0;height:23px}
.ph4-row .lab{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:6px;height:22px;padding-right:6px;font:600 11.5px/1.1 system-ui,sans-serif;color:var(--text-soft,#334155);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ph4-row .lab i{flex:0 0 11px;width:11px;height:11px;border-radius:50%;border:1.5px solid #475569}
.ph4-row.sel .lab{font-weight:800;color:var(--text,#0f172a)}
.ph4-tr{height:16px;border-radius:6px;border:1px solid #94a3b8}
.ph4-row.sel .ph4-tr{outline:2px solid var(--accent,#0d6868);outline-offset:1px}
.ph4-ax{position:relative;height:16px;font:700 10px var(--mono,ui-monospace,monospace);color:var(--text-muted,#64748b)}
.ph4-ax span{position:absolute;transform:translateX(-50%)}
.ph4-pins{position:relative;height:16px}
.ph4-pins i{position:absolute;top:3px;width:10px;height:10px;margin-left:-5px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #475569}
.ph4-pins i.a{background:#dc2626}.ph4-pins i.b{background:#2563eb}.ph4-pins i.w{background:#94a3b8}
.ph4-pins i.on{box-shadow:0 0 0 2.5px var(--text,#0f172a);z-index:2}
.ph4-ov{position:absolute;left:124px;right:0;top:0;bottom:0;cursor:ew-resize;touch-action:pan-y;z-index:3}
.ph4-cur{position:absolute;top:-4px;bottom:-2px;width:0;border-left:2px solid var(--text,#0f172a);pointer-events:none;transition:left .12s}
.ph4-cur b{position:absolute;top:-23px;left:0;background:var(--text,#0f172a);color:#fff;font:800 11px var(--mono,ui-monospace,monospace);padding:2px 7px;border-radius:6px;white-space:nowrap;transform:translateX(-50%)}
.ph4-cap{margin:8px 0 2px;font-size:12px;color:var(--text-soft,#475569);min-height:32px}
.ph4-read{display:flex;flex-wrap:wrap;gap:4px 14px;margin:8px 0 4px;font:700 12.5px var(--mono,ui-monospace,monospace)}
.ph4-read span small{font-weight:600;color:var(--text-muted,#64748b);font-family:system-ui,sans-serif}
.ph4-near{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0;font-size:12px;color:var(--text-muted,#64748b);min-height:30px}
.ph4-near button,.ph4-conc button,.ph4-tabs button{min-height:30px;padding:3px 11px;border-radius:999px;font-size:12px}
.ph4-sels{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ph4-sels label{display:block;font:700 11px system-ui,sans-serif;color:var(--text-muted,#64748b);margin-bottom:3px}
.ph4-sels select{width:100%;min-height:42px;font-size:14px;padding:6px 8px;border-radius:10px;border:1px solid var(--border-strong,#cbd5e1);background:var(--surface,#fff);color:var(--text,#0f172a)}
.ph4-conc,.ph4-tabs{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin:8px 0}
.ph4-conc>span{font-size:12px;color:var(--text-muted,#64748b);font-weight:700}
.ph4-rack{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:8px 0 4px}
.ph4-tube{text-align:center;font-size:11.5px;line-height:1.25}
.ph4-tube svg{width:58px;height:auto;display:block;margin:0 auto 3px;overflow:visible}
.ph4-tube .liq{transition:fill .9s ease}
.ph4-tube b{display:block;color:var(--text,#0f172a)}
.ph4-tube span{color:var(--text-soft,#475569)}
.ph4-drop{animation:ph4drop .42s ease-in 3 both}
@keyframes ph4drop{0%{transform:translateY(-8px);opacity:0}20%{opacity:1}100%{transform:translateY(58px);opacity:1}}
.ph4-desc{margin:8px 0;padding:10px 12px;border-radius:12px;border:1px solid var(--border,#e2e8f0);background:var(--surface-soft,#f8fafc);font-size:13px;line-height:1.5}
.ph4-desc p{margin:0 0 6px}.ph4-desc p:last-child{margin:0}
.ph4-eq{font-family:var(--mono,ui-monospace,monospace);font-size:12.5px;color:var(--text,#0f172a)}
.ph4-lad-row{display:grid;grid-template-columns:92px 1fr 40px;gap:8px;align-items:center;padding:4px 6px;border-radius:8px;cursor:pointer;min-height:30px}
.ph4-lad-row.on{background:var(--accent-soft,#e8f3f2);outline:1.5px solid var(--accent,#0d6868)}
.ph4-lad-row b{font-size:12.5px;white-space:nowrap}.ph4-lad-row b small{font-weight:600;color:var(--text-muted,#64748b);font-size:10.5px;margin-left:3px}
.ph4-lad-row .tk{position:relative;height:8px;border-radius:5px;border:1px solid #94a3b8}
.ph4-lad-row .tk i{position:absolute;top:-4px;width:14px;height:14px;margin-left:-7px;border-radius:50%;border:2px solid #0f172a}
.ph4-lad-row em{font:800 12.5px var(--mono,ui-monospace,monospace);font-style:normal;text-align:right}
.ph4-lad-row.ref{opacity:.75}
.ph4-note{margin-top:6px;font-size:12px;color:var(--text-muted,#64748b)}
@media (max-width:420px){.ph4-row{grid-template-columns:112px 1fr}.ph4-ov{left:112px}}
`;
      document.head.appendChild(st);
    }

    if(!document.getElementById('che-php4-css2')){
      const s2=document.createElement('style');s2.id='che-php4-css2';
      s2.textContent=`.ph4-log{margin:8px 0;display:grid;gap:5px}.ph4-lb{display:grid;grid-template-columns:52px 1fr;gap:8px;align-items:center;font:700 11.5px var(--mono,ui-monospace,monospace)}.ph4-lb div{height:14px;border-radius:5px;background:var(--surface-soft,#eef2f6);overflow:hidden}.ph4-lb i{display:block;height:100%;transition:width .15s}.ph4-lb.h i{background:#dc2626}.ph4-lb.o i{background:#2563eb}.ph4-x{font-size:12.5px;line-height:1.45;color:var(--text-soft,#334155)}.ph4-cmp{display:flex;gap:6px 10px;flex-wrap:wrap;align-items:center;font-size:12.5px;margin:4px 0}.ph4-cmp button{min-height:30px;padding:3px 11px;border-radius:999px;font-size:12px}.ph4-ref{position:absolute;top:-4px;bottom:-2px;width:0;border-left:2px dashed #64748b;pointer-events:none}@media(prefers-reduced-motion:reduce){.ph4-lb i{transition:none}}`;
      document.head.appendChild(s2);
    }
    const times=v=>v<100?v.toFixed(1).replace('.',',')+'×':(v<1e6?Math.round(v).toLocaleString('pl-PL'):sci(v))+'×';

    const COL=CHE.COLORS;
    if(!COL){host.textContent='Brak modułu CHE.COLORS — panel pH wymaga bazy kolorów silnika.';return}
    const IND=COL.list(['universal','indicator']).map(r=>COL.legacy(r.id));
    const UNI=IND[0];
    const SHORT={};COL.list(['universal','indicator']).forEach(r=>{SHORT[r.name]=r.short||r.name});
    const WATER=COL.water,rgbOf=COL.rgb,mix=COL.mix,css=COL.css;
    const colorOf=(ind,p)=>COL.at(ind.id,p),stateOf=(ind,p)=>COL.state(ind.id,p),gradCss=ind=>COL.gradient(ind.id);

    const CHEM=CHE.CHEM||{},EQ=CHE.EQUILIBRIUM||{},AS=(CHE.DATA&&CHE.DATA.ACID_SYSTEMS)||{},SUB=(CHE.DATA&&CHE.DATA.SUBSTANCES)||{};
    const Kw=1e-14;
    const bis=(fn,lo,hi)=>{for(let i=0;i<100;i++){const m=(lo+hi)/2;if(fn(m)>0)lo=m;else hi=m}return (lo+hi)/2};
    function weakAcidPH(c,Ka){try{const r=CHEM.weakAcid(c,Ka);if(isFinite(r.pH))return {pH:r.pH,alpha:r.alpha}}catch(_){}
      const h=(-Ka+Math.sqrt(Ka*Ka+4*Ka*c))/2;return {pH:-Math.log10(h),alpha:h/c}}
    function strongAcidPH(c){try{const r=CHEM.strongAcid(c);if(isFinite(r.pH))return r.pH}catch(_){}return -Math.log10(c)}
    function strongBasePH(c){try{const r=CHEM.strongBase(c);if(isFinite(r.pH))return r.pH}catch(_){}return 14+Math.log10(c)}
    function weakBaseSolve(c,Kb){let lo=Math.log(1e-14),hi=Math.log(10);
      for(let i=0;i<100;i++){const m=(lo+hi)/2,o=Math.exp(m),f=c*Kb/(Kb+o)+Kw/o-o;if(f>0)lo=m;else hi=m}
      const oh=Math.exp((lo+hi)/2);return {pH:14+Math.log10(oh),alpha:Kb/(Kb+oh)}}
    const ACIDS=[['HCl','strong'],['HNO3','strong'],['H2SO4','h2so4'],['H3PO4','poly'],['HF','weak'],['HCOOH','weak'],['CH3COOH','weak'],['H2CO3','poly'],['HCN','weak']].filter(a=>AS[a[0]]);
    const BASES=[
      {id:'NaOH',f:'NaOH',name:'wodorotlenek sodu',kind:'strong',n:1,eq:'NaOH → Na⁺ + OH⁻'},
      {id:'KOH',f:'KOH',name:'wodorotlenek potasu',kind:'strong',n:1,eq:'KOH → K⁺ + OH⁻'},
      {id:'CaOH2',f:'Ca(OH)₂',name:'wodorotlenek wapnia',kind:'strong',n:2,cap:0.02,eq:'Ca(OH)₂ → Ca²⁺ + 2 OH⁻'},
      {id:'NH3',f:'NH₃',name:'amoniak (woda amoniakalna)',kind:'weak',Kb:1.8e-5,eq:'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻'}
    ];
    function compute(c){
      const out=[];
      ACIDS.forEach(([id,k])=>{
        const a=AS[id],name=(SUB[id]&&SUB[id].name)||id,pKa=a.pKa||[],Ka=(a.Ka||[]).filter(x=>x!=null);
        let pH,alpha=null,note='';
        if(k==='strong'){pH=strongAcidPH(c);note='kwas mocny — dysocjuje całkowicie, więc [H₃O⁺] = c i pH = −log c.'}
        else if(k==='h2so4'){let r=null;try{r=EQ.polyproticPH(c,[1e3,1.02e-2])}catch(_){}pH=r&&isFinite(r.pH)?r.pH:strongAcidPH(c);
          note='I stopień mocny, II stopień słabszy (pKa₂ = 1,99) — dlatego pH jest nieco niższe niż −log c.'}
        else if(k==='poly'){let r=null;try{r=EQ.polyproticPH(c,Ka)}catch(_){}
          if(r&&isFinite(r.pH)){pH=r.pH;alpha=r.alpha&&r.alpha.length?1-r.alpha[0]:null}else{const w=weakAcidPH(c,Ka[0]);pH=w.pH;alpha=w.alpha}
          note='kwas '+(Ka.length+1===3?'trójprotonowy':'dwuprotonowy')+' średniej/słabej mocy (pKa₁ = '+f2(pKa[0])+'); pH wyznacza głównie I stopień, kolejne są znacznie słabsze.'}
        else{const w=weakAcidPH(c,Ka[0]);pH=w.pH;alpha=w.alpha;note='kwas słaby (pKa = '+f2(pKa[0])+') — dysocjuje częściowo.'}
        const strongish=k==='strong'||k==='h2so4';
        out.push({id:id,f:a.formula,name:name,type:'a',tag:strongish?'mocny':'słaby',pH:pH,alpha:alpha,note:note,
          eq:a.formula+' + H₂O '+(strongish?'→':'⇌')+' H₃O⁺ + '+a.anion,ref:-Math.log10(c)});
      });
      BASES.forEach(b=>{
        let pH,alpha=null,note,cc=c;
        if(b.kind==='strong'){
          if(b.cap&&c>b.cap){cc=b.cap;note='rozpuszcza się słabo — nasycony roztwór ma ≈ '+String(b.cap).replace('.',',')+' M; zasada mocna (całkowicie zdysocjowana), na formułę 2 jony OH⁻.'}
          else note='zasada mocna — dysocjuje całkowicie, [OH⁻] = '+(b.n>1?b.n+'·':'')+'c, a pH = 14 − pOH.';
          pH=strongBasePH(cc*b.n);
        }else{const w=weakBaseSolve(c,b.Kb);pH=w.pH;alpha=w.alpha;note='zasada słaba (Kb = 1,8·10⁻⁵) — tylko część cząsteczek reaguje z wodą, więc pH jest niższe niż dla mocnej zasady o tym samym c.'}
        out.push({id:b.id,f:b.f,name:b.name,type:'b',tag:b.kind==='strong'?'mocna':'słaba',pH:pH,alpha:alpha,note:note,eq:b.eq,ref:14+Math.log10(c)});
      });
      out.push({id:'H2O',f:'H₂O',name:'woda destylowana',type:'w',tag:'',pH:7,alpha:null,note:'woda czysta — [H₃O⁺] = [OH⁻] = 10⁻⁷ M, odczyn obojętny.',eq:'2 H₂O ⇌ H₃O⁺ + OH⁻'});
      out.forEach(o=>{o.pH=clamp(o.pH,0,14)});
      return out;
    }

    const CONC=[[1,'1 M'],[0.1,'0,1 M'],[0.01,'0,01 M']];
    let c=0.1,items=compute(c),sampleId='HCl',indIdx=2,dropped=false,tab='a',cur=0;
    const get=id=>items.find(x=>x.id===id);
    cur=get('HCl')?get('HCl').pH:1;
    const cTxt=()=>CONC.find(x=>x[0]===c)[1];
    const odczyn=p=>{const d=Math.abs(p-7);if(d<.05)return 'obojętny';return (p<7?'kwasowy':'zasadowy')+(d>=4?' (silnie)':d<1?' (słabo)':'')};

    host.classList.add('ph4');
    host.appendChild(H('div','ph4-h','1 · Skala: wszystkie wskaźniki naraz'));
    const chart=H('div','ph4-chart');
    const axisRow=H('div','ph4-row');axisRow.appendChild(H('span'));
    const ax=H('div','ph4-ax');for(let v=0;v<=14;v++){const s=H('span',null,String(v));s.style.left=(v/14*100)+'%';ax.appendChild(s)}axisRow.appendChild(ax);
    const pinRow=H('div','ph4-row');const pl=H('span','lab');pl.style.cssText='cursor:default;font-weight:600;color:var(--text-muted,#64748b)';pl.textContent='kwasy · zasady';pinRow.appendChild(pl);
    const pins=H('div','ph4-pins');pinRow.appendChild(pins);
    chart.append(axisRow,pinRow);
    const rows=IND.map((ind,i)=>{
      const r=H('div','ph4-row'),lab=H('button','lab');lab.type='button';
      const sw=H('i');lab.appendChild(sw);lab.appendChild(document.createTextNode(SHORT[ind.n]||ind.n));lab.title='Wybierz wskaźnik: '+ind.n;
      const tr=H('div','ph4-tr');tr.style.background=gradCss(ind);
      r.append(lab,tr);chart.appendChild(r);
      lab.onclick=()=>{indIdx=i;ddInd.value=String(i);render()};
      return {r:r,sw:sw};
    });
    const ov=H('div','ph4-ov'),curEl=H('div','ph4-cur','<b></b>');ov.appendChild(curEl);chart.appendChild(ov);
    host.appendChild(chart);
    const sl=document.createElement('input');sl.type='range';sl.min=0;sl.max=14;sl.step=.1;sl.value=cur;sl.setAttribute('aria-label','pH roztworu');
    sl.style.cssText='width:100%;margin:10px 0 0;accent-color:var(--accent,#0d6868)';
    const cap=H('div','ph4-cap'),read=H('div','ph4-read'),near=H('div','ph4-near');
    const logBox=H('div','ph4-log'),cmp=H('div','ph4-cmp');let ref=null;
    const refEl=H('div','ph4-ref');ov.appendChild(refEl);
    host.append(sl,read,logBox,cmp,near,cap);

    host.appendChild(H('div','ph4-h','2 · Doświadczenie: roztwór + wskaźnik'));
    const sels=H('div','ph4-sels');
    const mkSel=(lbl)=>{const w=H('div'),l=H('label',null,lbl),s=document.createElement('select');w.append(l,s);sels.appendChild(w);return s};
    const ddSmp=mkSel('Roztwór'),ddInd=mkSel('Odczynnik (wskaźnik)');
    const fill=()=>{ddSmp.innerHTML='';
      const o0=H('option',null,'— dowolne pH (suwak) —');o0.value='free';ddSmp.appendChild(o0);
      [['a','Kwasy'],['b','Zasady'],['w','Woda']].forEach(([t,g])=>{const og=document.createElement('optgroup');og.label=g;
        items.filter(x=>x.type===t).forEach(x=>{const o=H('option',null,x.f+' · '+x.name);o.value=x.id;og.appendChild(o)});ddSmp.appendChild(og)});
      ddSmp.value=sampleId||'free'};
    IND.forEach((x,i)=>{const o=H('option',null,x.n);o.value=String(i);ddInd.appendChild(o)});ddInd.value=String(indIdx);
    const conc=H('div','ph4-conc');conc.appendChild(H('span',null,'Stężenie:'));
    const cBtns=CONC.map(([v,l])=>{const b=H('button',null,l);b.type='button';b.onclick=()=>{c=v;items=compute(c);if(sampleId&&get(sampleId))cur=get(sampleId).pH;fill();render()};conc.appendChild(b);return b});
    const rack=H('div','ph4-rack');
    const dropBtn=H('button',null,'💧 Dodaj krople wskaźnika');dropBtn.type='button';dropBtn.style.cssText='min-height:40px;border-radius:999px;padding:6px 16px';
    const dropRow=H('div','r');dropRow.style.cssText='display:flex;justify-content:center;margin:4px 0';dropRow.appendChild(dropBtn);
    const desc=H('div','ph4-desc');
    host.append(sels,conc,rack,dropRow,desc);

    const mkTube=(titleId)=>{
      const d=H('div','ph4-tube'),svg=SE('svg',{viewBox:'0 0 70 150',role:'img'});
      const liq=SE('path',{d:'M19 52H51V116a16 16 0 0 1-32 0Z',class:'liq'});liq.style.fill=css(WATER);
      const drop=SE('circle',{cx:35,cy:6,r:4.2,opacity:0});
      svg.append(SE('path',{d:'M18 8H52V116a17 17 0 0 1-34 0Z',fill:'rgba(255,255,255,.55)',stroke:'#94a3b8','stroke-width':2}),liq,drop,
        SE('rect',{x:12,y:4,width:46,height:6,rx:3,fill:'#cbd5e1'}),SE('rect',{x:24,y:22,width:4,height:78,rx:2,fill:'#fff','fill-opacity':.5}));
      const b=H('b'),s=H('span');d.append(svg,b,s);rack.appendChild(d);
      return {liq:liq,drop:drop,b:b,s:s};
    };
    const t1=mkTube(),t2=mkTube(),t3=mkTube();

    host.appendChild(H('div','ph4-h','3 · Drabinka pH'));
    const tabs=H('div','ph4-tabs');
    const tBtns=[['a','Kwasy'],['b','Zasady']].map(([k,l])=>{const b=H('button',null,l);b.type='button';b.onclick=()=>{tab=k;render()};tabs.appendChild(b);return b});
    const ladNote=H('span');ladNote.style.cssText='font-size:12px;color:var(--text-muted,#64748b);margin-left:6px';tabs.appendChild(ladNote);
    const ladder=H('div');
    const ladFoot=H('div','ph4-note');
    host.append(tabs,ladder,ladFoot);

    function setFree(v){sampleId=null;cur=Math.round(clamp(v,0,14)*10)/10;ddSmp.value='free';render()}
    function pick(id){const it=get(id);if(!it)return;sampleId=id;cur=it.pH;ddSmp.value=id;if(it.type!=='w')tab=it.type;render()}
    const xToPH=e=>{const r=ov.getBoundingClientRect();return clamp((e.clientX-r.left)/r.width*14,0,14)};
    let drag=null;
    ov.addEventListener('pointerdown',e=>{drag={x:e.clientX,moved:false};try{ov.setPointerCapture(e.pointerId)}catch(_){}setFree(xToPH(e))});
    ov.addEventListener('pointermove',e=>{if(!drag)return;if(Math.abs(e.clientX-drag.x)>4)drag.moved=true;setFree(xToPH(e))});
    const end=e=>{if(drag&&!drag.moved){const p=xToPH(e);let best=null,bd=.45;items.forEach(it=>{const d=Math.abs(it.pH-p);if(d<bd){bd=d;best=it}});if(best)pick(best.id)}drag=null};
    ov.addEventListener('pointerup',end);ov.addEventListener('pointercancel',()=>{drag=null});
    sl.addEventListener('input',()=>setFree(+sl.value));
    ddSmp.onchange=()=>{if(ddSmp.value==='free'){sampleId=null;render()}else pick(ddSmp.value)};
    ddInd.onchange=()=>{indIdx=+ddInd.value;render()};
    dropBtn.onclick=()=>{
      if(dropped){dropped=false;render();return}
      dropped=true;
      if(reduce){render();return}
      const col=css(colorOf(IND[indIdx],cur));t2.drop.setAttribute('fill',col);t2.drop.setAttribute('opacity',1);
      t2.drop.classList.remove('ph4-drop');void t2.drop.getBoundingClientRect();t2.drop.classList.add('ph4-drop');
      setTimeout(()=>{t2.drop.setAttribute('opacity',0);t2.drop.classList.remove('ph4-drop');render()},1300);
      dropBtn.textContent='…';
    };

    function descHTML(){
      const ind=IND[indIdx],p=cur,it=sampleId?get(sampleId):null;
      let h='';
      if(it){
        h+='<p><b>'+it.f+' · '+cTxt()+'</b> — '+it.note+(it.alpha!=null&&it.type!=='w'?' W tym roztworze '+(it.type==='a'?'zdysocjowane jest ok. ':'przereagowało z wodą ok. ')+(it.alpha<0.001?'<0,1':(it.alpha*100).toFixed(it.alpha<.1?1:0).replace('.',','))+' % cząsteczek; przy tym samym stężeniu '+(it.type==='a'?'mocny kwas dałby pH ':'mocna zasada dałaby pH ')+f2(clamp(it.ref,0,14))+'.':'')+'</p>';
        h+='<p class="ph4-eq">'+it.eq+'</p>';
      }else h+='<p>Roztwór o pH = <b>'+f1(p)+'</b> ('+odczyn(p)+'). Wybierz konkretny kwas lub zasadę, aby zobaczyć równanie i stopień dysocjacji.</p>';
      const st=stateOf(ind,p),s7=stateOf(ind,7);
      const a=colorOf(ind,p),b=colorOf(ind,7),dist=Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]);
      let t='<p><b>'+ind.n+'</b>';
      if(ind.tr){t+=' (zakres zmiany barwy pH '+ind.tr.map(x=>f1(x[0])+'–'+f1(x[1])).join(' i ')+')'}
      t+=': przy pH '+f1(p)+' ';
      if(ind.stops)t+='barwa: <b>'+st.label+'</b> — zmienia się płynnie na całej skali (mieszanina wielu wskaźników).';
      else if(st.kind==='ramp')t+='jesteśmy <b>w zakresie przejścia</b> — barwa pośrednia, pH da się tylko przybliżyć.';
      else t+='wskaźnik jest <b>'+st.label+'</b> ('+(p<ind.tr[0][0]?'forma kwasowa':'forma zasadowa')+').';
      t+=' '+(dist>55?'Odróżnia ten roztwór od wody (w wodzie: '+s7.label+').':'Wygląda tak samo jak w wodzie — <b>ten wskaźnik nie odróżni</b> tego roztworu od obojętnego.')+'</p>';
      h+=t;
      return h;
    }

    function render(){
      const p=cur,pct=p/14*100,ind=IND[indIdx];
       
      curEl.style.left=pct+'%';const bub=curEl.firstChild;bub.textContent='pH '+f1(p);
      bub.style.transform=pct<8?'translateX(-12%)':pct>92?'translateX(-88%)':'translateX(-50%)';
      sl.value=p;
      rows.forEach((r,i)=>{r.sw.style.background=css(colorOf(IND[i],p));r.r.classList.toggle('sel',i===indIdx)});
      pins.innerHTML='';
      items.forEach(it=>{const d=H('i',it.type==='a'?'a':it.type==='b'?'b':'w');d.style.left=(it.pH/14*100)+'%';d.title=it.f+' '+cTxt()+' — pH '+f2(it.pH);if(it.id===sampleId)d.classList.add('on');pins.appendChild(d)});
       
      const hh=Math.pow(10,-p),oh=Math.pow(10,p-14);
      read.innerHTML='<span>pH '+f1(p)+'</span><span>'+odczyn(p)+'</span><span>[H₃O⁺] '+sci(hh)+' M</span><span>[OH⁻] '+sci(oh)+' M</span><span>pOH '+f1(14-p)+'</span>';
      const d7=7-p;
      logBox.innerHTML='<div class="ph4-lb h"><span>H₃O⁺</span><div><i style="width:'+((14-p)/14*100).toFixed(1)+'%"></i></div></div><div class="ph4-lb o"><span>OH⁻</span><div><i style="width:'+(p/14*100).toFixed(1)+'%"></i></div></div><div class="ph4-x">Długość belki = wykładnik stężenia (skala logarytmiczna): pH + pOH = 14. '+(Math.abs(d7)<.05?'Tyle samo H₃O⁺ i OH⁻ co w czystej wodzie — odczyn obojętny.':'W porównaniu z czystą wodą: <b>'+times(Math.pow(10,Math.abs(d7)))+' więcej '+(d7>0?'H₃O⁺':'OH⁻')+'</b>.')+'</div>';
      cmp.innerHTML='';const rb=H('button',null,ref==null?'📌 Przypnij pH jako odniesienie':'✕ Usuń odniesienie');rb.type='button';rb.onclick=()=>{ref=ref==null?cur:null;render()};cmp.appendChild(rb);
      if(ref!=null){const dd=p-ref;cmp.appendChild(H('span',null,'pH '+f1(ref)+' → '+f1(p)+': '+(Math.abs(dd)<.05?'bez zmiany.':'różnica '+f1(Math.abs(dd))+' jedn. = <b>'+times(Math.pow(10,Math.abs(dd)))+(dd>0?' mniej':' więcej')+' H₃O⁺</b>.')))}
      refEl.style.display=ref==null?'none':'block';if(ref!=null)refEl.style.left=(ref/14*100)+'%';
       
      near.innerHTML='';
      const nb=items.filter(x=>Math.abs(x.pH-p)<=1.2).sort((a,b)=>Math.abs(a.pH-p)-Math.abs(b.pH-p)).slice(0,4);
      near.appendChild(H('span',null,nb.length?'W pobliżu ('+cTxt()+'):':'W pobliżu: brak kwasów i zasad z listy'));
      nb.forEach(x=>{const b=H('button',null,x.f+' · '+f1(x.pH));b.type='button';if(x.id===sampleId)b.classList.add('on');b.onclick=()=>pick(x.id);near.appendChild(b)});
      cap.innerHTML=ind.tr?('<b>'+ind.n+'</b>: '+ind.tr.map(x=>ind.names[ind.tr.indexOf(x)]+' → '+ind.names[ind.tr.indexOf(x)+1]+' w pH '+f1(x[0])+'–'+f1(x[1])).join('; ')+'. Stuknij nazwę wskaźnika, by go wybrać.'):('<b>'+ind.n+'</b>: barwa zmienia się płynnie na całej skali. Stuknij nazwę innego wskaźnika, by go wybrać.');
       
      ddSmp.value=sampleId||'free';ddInd.value=String(indIdx);
      cBtns.forEach((b,i)=>b.classList.toggle('on',CONC[i][0]===c));
       
      const sampleName=sampleId?get(sampleId).f+' · '+cTxt():'pH '+f1(p);
      t1.liq.style.fill=css(WATER);t1.b.textContent='roztwór';t1.s.textContent=sampleName+' (bezbarwny)';
      t2.liq.style.fill=dropped?css(colorOf(ind,p)):css(WATER);
      t2.b.textContent=ind.n;t2.s.textContent=dropped?stateOf(ind,p).label:'przed dodaniem';
      t3.liq.style.fill=css(colorOf(UNI,p));t3.b.textContent='wskaźnik uniwersalny';t3.s.textContent=stateOf(UNI,p).label;
      dropBtn.textContent=dropped?'↺ Wylej i zacznij od nowa':'💧 Dodaj krople wskaźnika';
      desc.innerHTML=descHTML();
       
      tBtns.forEach((b,i)=>b.classList.toggle('on',['a','b'][i]===tab));
      ladNote.textContent='stężenie '+cTxt()+' (zmień wyżej)';
      ladder.innerHTML='';
      const list=items.filter(x=>x.type===tab).sort((a,b)=>tab==='a'?a.pH-b.pH:b.pH-a.pH).concat(items.filter(x=>x.type==='w'));
      list.forEach(it=>{
        const r=H('div','ph4-lad-row'+(it.id===sampleId?' on':'')+(it.type==='w'?' ref':''));
        r.innerHTML='<b>'+it.f+(it.tag?'<small>'+it.tag+'</small>':'')+'</b><div class="tk"><i></i></div><em>'+f2(it.pH)+'</em>';
        const tk=r.querySelector('.tk');tk.style.background=gradCss(UNI);const dot=tk.firstChild;dot.style.left=(it.pH/14*100)+'%';dot.style.background=css(colorOf(UNI,it.pH));
        r.title=it.name;r.onclick=()=>pick(it.id);ladder.appendChild(r);
      });
      ladFoot.innerHTML=tab==='a'?'Mocny kwas: rozcieńczenie 10× → pH +1. Kwas słaby: rozcieńczenie 10× → pH tylko ≈ +0,5 (rośnie stopień dysocjacji). Kolor kropki = barwa papierka uniwersalnego.'
        :'Mocna zasada: rozcieńczenie 10× → pH −1. Amoniak (słaba zasada) przy tym samym stężeniu ma wyraźnie niższe pH niż NaOH. Ca(OH)₂ ogranicza rozpuszczalność.';
    }
    fill();render();
  }
});

defineView('ion-map-v02',{title:'Mapa jonów — ładunek i rola w procesie · v0.02',tag:'E8',hint:'Kliknij jon. Zobacz ładunek, rolę i bilans ładunków.',foot:'Mapa służy jako wspólny model do późniejszych reakcji jonowych i dysocjacji.',build(host){
  host.classList.add('che-bigpass');const ions=[{n:'H₃O⁺',q:1,role:'produkt przeniesienia protonu'},{n:'Cl⁻',q:-1,role:'anion powstały z HCl'},{n:'OH⁻',q:-1,role:'anion charakterystyczny dla zasadowości'},{n:'Na⁺',q:1,role:'kation obecny np. w NaOH lub soli'}];let sel=0;const row=document.createElement('div');row.className='choice-row';const read=document.createElement('div');read.className='mini-readout';read.innerHTML='<div><b>Jon</b><strong data-k=n></strong></div><div><b>Ładunek</b><strong data-k=q></strong></div><div><b>Rola</b><strong data-k=r></strong></div><div><b>Bilans pary</b><strong data-k=b></strong></div>';const ex=document.createElement('div');ex.className='explain';ions.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x.n;b.onclick=()=>{sel=i;update()};row.appendChild(b)});host.append(row,read,ex);function update(){const x=ions[sel];row.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',i===sel));read.querySelector('[data-k=n]').textContent=x.n;read.querySelector('[data-k=q]').textContent=(x.q>0?'+':'')+x.q;read.querySelector('[data-k=r]').textContent=x.role;read.querySelector('[data-k=b]').textContent=(x.q>0?'+1 + (−1) = 0':'−1 + (+1) = 0');ex.textContent='Kliknięty jon nie jest tylko symbolem: pokazujemy jego ładunek oraz funkcję w konkretnym modelu. Następny etap może powiązać go bezpośrednio z równaniem jonowym.'}update();}});

  CHE.VIEW_STATUS = {
    'titration-merged':{k:'rozwijac'}, 'diss-hcl-mech-v02':{k:'rozwijac'}, 'ph-indicators-v03':{k:'rozwijac',note:'Kanoniczny panel pH: skala wskaźników + doświadczenie + drabinka kwasów i zasad.'},
    'strong-vs-weak-enhanced-v02':{k:'rozwijac'}, 'reactor-enhanced':{k:'rozwijac'}, 'metal-reaction-v02':{k:'rozwijac'},
    'buffer':{k:'rozwijac'}, 'acid-calculator':{k:'rozwijac'}, 'flow-egzamin-enhanced':{k:'rozwijac'}, 'acid-rain-v01':{k:'rozwijac'}, 'kinetics-v01':{k:'rozwijac'},
    'reakcje-kwasu-v03':{k:'engine',note:'Połączone: metal-reaction + beaker-prediction (predykcja → zlewka → równanie z silnika).'},
    'lab-beaker-v102':{k:'engine',note:'CHE.LAB v1.02 — pełna zlewka modułowa (kontrola, pH, BHP, dziennik).'},
    'beaker-prediction-enhanced':{k:'engine',note:'Zlewka z osadami i barwami — dane z CHE.REACTION zamiast zaszytych w widoku.'},
    'moc-vs-c':{k:'engine',note:'Scalić z alpha-slider w strong-vs-weak-enhanced-v02 (cząstki + α z CHE.CHEM).'},
    'alpha-slider':{k:'engine',note:'Scalić z moc-vs-c w strong-vs-weak-enhanced-v02.'},
    'ind-lab':{k:'engine',note:'Aktywna wersja nie ma LESSON_CONTEXT ani trybu „przewiduj i sprawdź” ze starej wersji (usuniętej, w archiwum v0.11).'},
    'mind-map':{k:'engine',note:'Lekcja ma własną mapę (mapSvg); żadna wersja nie korzysta z silnika.'},
    'reactor':{k:'rozwijac',note:'NIE dubel reactor-enhanced: to zlewka z reakcjami (metal, tlenek, zasada, węglan, Cu + HNO₃) z CHE.REACTION; reactor-enhanced pokazuje dysocjację kwasów. Zostaje.'}
  };
  Object.keys(CHE.VIEW_STATUS).forEach(function(id){
    var sp=CHE.VIEW.views.get(id), st=CHE.VIEW_STATUS[id]; if(!sp) return;
    var lbl = st.k==='dubel' ? 'DUBEL → patrz: '+st.ref : st.k==='engine' ? 'PRZEPIĄĆ NA SILNIK' : 'ROZWIJAĆ';
    sp.status = lbl;
    sp.foot = (sp.foot ? sp.foot+' · ' : '') + '[' + lbl + (st.note ? ' — '+st.note : '') + ']';
  });

  CHE.VIEW.autoMount();
  buildToc();
  console.log('[CHE] Views registered:', [...CHE.VIEW.views.keys()].length);
})();

C.VISUAL_LIBRARY=C.VISUAL_LIBRARY||{};
C.VISUAL_LIBRARY.version='v0.06-canonical-visuals';
C.VISUAL_LIBRARY.source='CHE_lab_LATEST_zoom + stare warianty przed konsolidacją';
C.VISUAL_LIBRARY.policy={
  canonical:true,
  mergeRule:'najlepsze elementy starych wariantów → jedna wersja kanoniczna → dalsze ulepszanie',
  keepLegacyUntilCovered:true,
  sharedData:true,
  sharedEngine:true
};
C.VISUAL_LIBRARY.catalog={
  '001-ATOM':['molecule-electrons','molecule-cv','live-cv'],
  '002-UKLAD_OKRESOWY':['periodic-54'],
  '003-CZASTECZKA_2D_3D':['molecule-2d','molecule3d-merged'],
  '004-ORBITALE_ELEKTRONY':['molecule-orbitals','molecule-electrons'],
  '005-WIAZANIA_GEOMETRIA':['molecule-2d','molecule3d-merged'],
  '006-pH_WSKAZNIKI':['ph-indicators-v03','ph-table','ph-ladder'],
  '007-DYSOCJACJA_JONY':['diss-hcl-mech-v02','diss-three-levels','hydronium','ion-map-v02','ion-vs-diss'],
  '008-MOC_KWASU_RÓWNOWAGA':['strong-vs-weak-enhanced-v02','alpha-slider','moc-vs-c','ka-pka-table','buffer'],
  '009-REAKCJE':['four-reactions','neutralization','metal-reaction-v02','reaction-decision','equilibrium'],
  '010-MECHANIZMY':['diss-hcl-mech-v02','step-eq','diss-stepwise','chain-scn'],
  '011-DIAGRAMY_FLOWCHARTY':['obtaining-three','obtaining-hcl-steps','flow-naming','flow-egzamin-enhanced','reaction-decision','env-balance'],
  '012-MAPY_MYSLI':['mind-map'],
  '013-LABORATORIA':['ind-lab','beaker-prediction-enhanced','reakcje-kwasu-v03','lab-beaker-v102','lab-oxides-v102','reactor-enhanced','titration-merged'],
  '014-WYKRESY_MODELE':['energy-profile','kinetics-v01','chart-strength','titration-merged','acid-calculator'],
  '015-SRODOWISKO':['acid-rain-v01','env-balance'],
  '016-NAUKA_PODPOWIEDZI':['flashcards-deck','acid-game','compound-cards','reszta-builder','safety']
};
C.VISUAL_LIBRARY.legacyMining={
  mindMapsFromMD:['ATOM','JON','WZÓR SUMARYCZNY','RÓWNANIE','WIĄZANIA','TYPY REAKCJI','UKŁAD OKRESOWY','KLINIKA BŁĘDÓW'],
  retainedBecauseValuable:['diagramy z podpowiedziami','flowcharty','mapy myśli','porównania wielu próbek','modele obserwacja→wniosek','klinika błędów'],
  status:'SOURCE-INVENTORY-CAPTURED',uiMount:'PANE-WIZUAL-CANONICAL-V004'
};
})();
; 
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var G=function(){return C.LAB&&C.LAB.GFX};
var el=function(t,cls,html){var e=document.createElement(t);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
function btn(bar,txt,fn){var b=el('button',null,txt);b.type='button';b.onclick=fn;bar.appendChild(b);return b}
 
var g0=G();
if(g0&&g0.scenes)g0.scenes.list().forEach(function(id){var D=g0.scenes.get(id);V.define('gfx-scene-'+id,{title:D.label,tag:'GFX',hint:D.desc||'',foot:'Silnik CHE.LAB.GFX · zestaw „'+id+'” · ten sam w bibliotece i lekcji',build:function(host){host.innerHTML='';G().scene(host,id)}})});
 
/*@@GFX views/kw-szereg-metali-v01@@*/
 
function rxCards(host,keys,height){var g=G(),grid=el('div');grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:10px';host.appendChild(grid);
 keys.forEach(function(k){var I=g.rx.info(k);if(!I)return;var c=el('div');c.style.cssText='border:1px solid var(--border,#d5dee6);border-radius:12px;padding:8px;min-width:0';c.appendChild(el('b',null,I.name));grid.appendChild(c);
  var m=g.rx.mount(c,k,{height:height||210,dur:6,auto:true});var bar=el('div','r');bar.style.marginTop='6px';c.appendChild(bar);btn(bar,'▶ powtórz',function(){m.play()});
  c.appendChild(el('div','note','<b>'+I.eq+'</b><br>'+(I.why||I.obs)+(I.teacher?'<br><b>Tylko pokaz nauczyciela.</b>':'')))})}
/*@@GFX views/kw-wlasciwosci-v01@@*/
 
/*@@GFX views/kw-doswiadczenia-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var METAL={Mg:{M:24.305,Ea:30,base:3.0,col:'metal-mg',rx:'mgHcl'},Zn:{M:65.38,Ea:45,base:1.0,col:'metal-zn',rx:'znHcl'},Fe:{M:55.845,Ea:55,base:.3,col:'metal-fe',rx:'feHcl'}};
var FORM={granulka:{S:1,shape:'granule',n:'granulki'},wiorki:{S:3,shape:'chips',n:'wiórki'},proszek:{S:8,shape:'powder',n:'proszek'}};
var R=8.314,COLS=['#2563eb','#dc2626','#16a34a','#9333ea'];
/*@@GFX views/kinetics-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
/*@@GFX views/acid-rain-v01@@*/
})();

; 
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define||!C.IONIC)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var TYPES=[['neutralization','Zobojętnianie'],['precipitation','Strącanie osadu'],['carbonate+acid','Węglan + kwas'],['salt+acid','Sól + kwas'],['acid+basic-oxide','Tlenek + kwas'],['metal+acid','Metal + kwas']];
function eqCard(host,k){var I=C.IONIC.equations(k),d=(C.DATA.REACTION_DATA||{})[k]||{},TN=C.DATA.REACTION_TYPE_NAMES||{};if(!I){host.innerHTML='<div class="note">Brak reakcji '+k+'.</div>';return}
 var row=function(lab,txt,bg){return '<div style="border:1px solid var(--border,#d5dee6);border-left:4px solid '+bg+';border-radius:10px;padding:8px 12px;margin:6px 0"><div style="font-size:11px;font-weight:800;letter-spacing:.04em;opacity:.7;text-transform:uppercase">'+lab+'</div><div style="font:600 16px Inter,system-ui;margin-top:2px">'+txt+'</div></div>'};
 host.innerHTML=row('Cząsteczkowe',I.molecular,'#2b5e9c')+row('Jonowe pełne',I.full,'#6b3fa0')+row('Jonowe skrócone',I.net,'#2e7d4f')+
  '<div class="note"><b>Jony obserwatory</b> (nie zmieniają się): '+(I.spectators.join(', ')||'brak')+'<br>'+(I.notes.length?'<b>Zapis cząsteczkowy zostaje dla:</b> '+I.notes.join(' · ')+'<br>':'')+'<b>Typ:</b> '+(TN[d.type]||d.type||'—')+' · <b>Obserwacja:</b> '+(d.observation||'—')+'</div>'}
function eqView(host,first){host.innerHTML='';var R=C.DATA.REACTIONS||{},RD=C.DATA.REACTION_DATA||{},bar=el('div'),area=el('div'),gfx=el('div');gfx.style.cssText='max-width:420px';host.append(bar,area,gfx);var cur=first||'hclNaOH',m=null;
 TYPES.forEach(function(t){var ks=Object.keys(R).filter(function(k){var J=RD[k]&&RD[k].type===t[0]&&!R[k].aliasOf?C.IONIC.equations(k):null;return J&&J.ionic});if(!ks.length)return;var r=el('div','r','<b style="min-width:120px">'+t[1]+':</b> ');ks.forEach(function(k){var b=el('button',null,C.IONIC.equations(k).molecular.split('→')[0].trim());b.type='button';b.dataset.k=k;b.onclick=function(){cur=k;show()};r.appendChild(b)});bar.appendChild(r)});
 function show(){[].forEach.call(bar.querySelectorAll('button'),function(b){b.classList.toggle('on',b.dataset.k===cur)});eqCard(area,cur);gfx.innerHTML='';var G=C.LAB&&C.LAB.GFX;if(G&&G.rx){var key=G.rx.list(function(s){return (s.rxKey||s.key)===cur})[0]||(G.rx.get(cur)?cur:null);if(key){m=G.rx.mount(gfx,key,{height:220,dur:5,auto:true})}}}
 show()}
/*@@GFX views/neutralization@@*/
/*@@GFX views/rownania-jonowe-v01@@*/
/*@@GFX views/tabela-rozpuszczalnosci-v01@@*/
})();

; 
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var GROUPS=[['Otrzymywanie soli',['hclNaOH+php','cuoH2so4','znHcl']],
 ['Strącanie osadów',['rx-ag-cl','bacl2Na2so4','rx-ba-so4','cacl2Na2co3','rx-cu-naoh','rx-fe3-naoh','rx-pb-i','rx-ag-i','rx-ni-naoh','rx-zn-naoh','rx-pb-cro4','rx-cu-s']],
 ['Wypieranie metali',['rx-zn-cuso4','rx-fe-cuso4','rx-cu-agno3']],
 ['Węglany i cykl wapienny',['caco3Hcl','na2co3Hcl','caoH2o','caOH2Co2']],
 ['Hydrat i odczyn soli',['cuso4Hydrate','hyd-nacl','hyd-na2co3','hyd-nh4cl','hyd-cuso4']]];
function card(host,k){var G=C.LAB.GFX,I=G.rx.info(k),sp=G.rx.get(k);if(!I)return;host.innerHTML='';var c=el('div');c.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px;align-items:start';host.appendChild(c);
 var l=el('div'),r=el('div');c.append(l,r);var m=G.rx.mount(l,k,{height:260,dur:6,auto:true});var bar=el('div','r');l.appendChild(bar);var b=el('button',null,'▶ powtórz');b.type='button';b.onclick=function(){m.play()};bar.appendChild(b);
 var key=sp.rxKey||k,NOION={cuso4Hydrate:1,caoH2o:1},J=!NOION[key]&&C.IONIC&&C.REACTION.get(key)?C.IONIC.equations(key):null;if(J&&J.ionic===false)J=null;
 r.innerHTML='<p style="font:700 16px Inter,system-ui">'+(J?J.molecular:I.eq)+'</p>'+(J?'<p><b>Jonowo pełne:</b> '+J.full+'</p><p><b>Jonowo skrócone:</b> '+J.net+'</p><p><b>Obserwatory:</b> '+(J.spectators.join(', ')||'—')+'</p>':'')+'<div class="note"><b>Obserwacja:</b> '+(I.obs||I.why)+(I.safety?'<br><b>BHP:</b> '+I.safety:'')+'<br><small>źródło: '+I.src+(sp.rxKey?' · '+sp.rxKey:'')+'</small></div>'}
/*@@GFX views/sole-doswiadczenia-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var CH={HCl:['HCl','Cl-'],HNO3:['HNO3','NO3-'],H2SO4:['H2SO4','HSO4-','SO42-'],HF:['HF','F-'],CH3COOH:['CH3COOH','CH3COO-'],H3PO4:['H3PO4','H2PO4-']};
var SUB='₀₁₂₃₄₅₆₇₈₉',pf=function(s){return String(s).replace(/(\d)/g,function(d){return SUB[d]})};
function lbl(id){var G=C.LAB.GFX;try{return G.molecules.name(id)}catch(_){return pf(id)}}
 
function model(acid,c){var A=(C.DATA.ACID_SYSTEMS||{})[acid]||{},K=(A.Ka||[]).map(function(k,i){return k==null&&(A.strong||(i===0&&A.strongFirst))?Infinity:k}),a1,h;
 if(K[0]===Infinity||A.strong){a1=1}else{var k=K[0];a1=(-k+Math.sqrt(k*k+4*k*c))/(2*c)}h=a1*c;var a2=0;
 if(CH[acid].length>2&&K[1]&&isFinite(K[1])){var k2=K[1],x=(-(h+k2)+Math.sqrt((h+k2)*(h+k2)+4*k2*h))/2;a2=Math.max(0,x/h);h+=x}
 return{a1:a1,a2:a2,h:h,pH:-Math.log10(h),pKa:A.pKa||[],strong:!!(A.strong||A.strongFirst)}}
/*@@GFX views/kw-dysocjacja-v01@@*/
})();

; 
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var SUB='₀₁₂₃₄₅₆₇₈₉',pf=function(s){return String(s).replace(/([A-Za-z\)])(\d+)/g,function(m,a,n){return a+n.replace(/\d/g,function(d){return SUB[d]})})};
 
/*@@GFX views/kw-bufor-v01@@*/
 
var RM={HCl:'Cl',HBr:'Br',HI:'I',HF:'F',HNO3:'NO3',H2SO4:'SO4',H2SO3:'SO3',H2CO3:'CO3',H3PO4:'PO4',H2S:'S',CH3COOH:'CH3COO'};
var CATS=['Na','K','NH4','Mg','Ca','Ba','Al','Zn','Fe2','Fe3','Cu','Ag','Pb'];
/*@@GFX views/kw-reszty-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function EL(){return C.FIZ&&C.FIZ.ELEKTRO}
function TH(){try{return C.LAB.GFX.theme()}catch(_){return{text:'#0f172a',mut:'#64748b',dark:false}}}
function cnv(host,h){var c=el('canvas');c.style.cssText='width:100%;height:'+h+'px;display:block;border-radius:12px;background:var(--surface-soft,#f1f5f9);margin-top:6px';host.appendChild(c);return c}
function ctx(c){var d=Math.min(2,window.devicePixelRatio||1),w=c.clientWidth||700,h=c.clientHeight||300;if(c.width!==Math.round(w*d)||c.height!==Math.round(h*d)){c.width=w*d;c.height=h*d}var x=c.getContext('2d');x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,w,h);return{x:x,w:w,h:h}}
function btn(bar,t,f){var b=el('button',null,t);b.type='button';b.onclick=f;bar.appendChild(b);return b}
function sel(bar,label,opts,val){var s=el('select');opts.forEach(function(o){var e=el('option',null,o[1]);e.value=o[0];s.appendChild(e)});s.value=val;var l=el('label',null,label+' ');l.appendChild(s);bar.appendChild(l);return s}
function rng(bar,label,min,max,step,val){var r=el('input');r.type='range';r.min=min;r.max=max;r.step=step;r.value=val;var o=el('b');var l=el('label',null,label+' ');l.append(r,o);bar.appendChild(l);return{r:r,o:o}}
 
function GE(){return C.LAB.GFX.electro}
function chg(x,X,Y,s,r,alpha){if(GE())return GE().charge(x,X,Y,s,r,alpha);r=r||6;x.globalAlpha=alpha==null?1:alpha;x.fillStyle=s>0?'#dc2626':'#2563eb';x.beginPath();x.arc(X,Y,r,0,7);x.fill();x.strokeStyle='#fff';x.lineWidth=1.6;x.beginPath();x.moveTo(X-r*.55,Y);x.lineTo(X+r*.55,Y);if(s>0){x.moveTo(X,Y-r*.55);x.lineTo(X,Y+r*.55)}x.stroke();x.globalAlpha=1}
function fmt(v,d){if(Math.abs(v)<Math.pow(10,-(d==null?2:d))/2)v=0;return String(v.toFixed(d==null?2:d)).replace('.',',')}
function sci(v){if(v===0)return '0';var e=Math.floor(Math.log10(Math.abs(v))),m=v/Math.pow(10,e);if(e>=-2&&e<=3)return fmt(v,e<0?3:2);var S={'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};return fmt(m,2)+'·10'+String(e).split('').map(function(c){return S[c]}).join('')}
var MATCOL={skora:'#e0b089',futro:'#a16207',szklo:'#bae6fd',wlosy:'#78350f',nylon:'#e5e7eb',welna:'#9ca3af',jedwab:'#fde68a',aluminium:'#cbd5e1',papier:'#f8fafc',bawelna:'#f1f5f9',stal:'#94a3b8',drewno:'#b45309',bursztyn:'#f59e0b',ebonit:'#1f2937',miedz:'#c2703d',poliester:'#a5b4fc',styropian:'#f8fafc',pe:'#e2e8f0',balon:'#ef4444',pvc:'#64748b',teflon:'#f5f5f4'};

/*@@GFX views/fiz-elektryzowanie-v01@@*/

/*@@GFX views/fiz-elektroskop-v01@@*/

/*@@GFX views/fiz-coulomb-v01@@*/

/*@@GFX views/fiz-przewodniki-v01@@*/

/*@@GFX views/fiz-ladunek-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function OXA(){return C.OXIDES}function D(){return C.DATA||{}}function G(){return C.LAB.GFX}
function btn(bar,t,f,cls){var b=el('button',cls||null,t);b.type='button';b.onclick=f;bar.appendChild(b);return b}
function rgb(h){h=String(h||'#e2e8f0').replace('#','');var n=parseInt(h,16);return[n>>16&255,n>>8&255,n&255]}
function CC(c){return(D().CHAR_COLORS||{})[c]||'#64748b'}
function chip(o,on){return'<span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:'+CC(o.char)+';margin-right:5px;vertical-align:-1px"></span>'}
function eqHtml(e){return e?'<div style="font:700 15px ui-monospace,Consolas,monospace;margin:4px 0">'+e+'</div>':''}
var LV={E8:1,AMB:2,ZA:3};
 
var PHW={Li2O:13,Na2O:13,K2O:13,BaO:12.8,CaO:12.4,MgO:10.3,SO3:1,SO2:2.3,CO2:5.6,N2O5:1,N2O3:3,NO2:1.5,P2O5:1.5,P4O10:1.5,Cl2O7:1,Mn2O7:1.5,CrO3:1.5,B2O3:5.2};
function phAfter(f){return PHW[f]!=null?PHW[f]:7}
function uni(p){try{return G().colors.at('ind-uniwersalny',Math.max(0,Math.min(14,p)))||[210,230,240]}catch(_){return[210,230,240]}}

/*@@GFX views/n01-tlenki-v01@@*/

/*@@GFX views/n01-konstruktor-v01@@*/

var CATCOL={Cu:[96,150,220],Fe:[205,160,70],Cr:[110,170,110],Mn:[235,205,215],Ni:[140,200,140]};
/*@@GFX views/n01-reaktor-v01@@*/

/*@@GFX views/n01-trend-v01@@*/

var BURN={Mg:{rx:'mgO2',fx:'metal',metal:'Mg',prod:'MgO'},Fe:{rx:'feO2',fx:'metal',metal:'Fe',prod:'Fe3O4'},Na:{rx:'naO2',fx:'metal',metal:'Na',prod:'Na2O'},Cu:{rx:'cuO2',fx:'metal',metal:'Cu',prod:'CuO'},
 S:{rx:'sO2',fx:'flame',color:[70,100,255],prod:'SO2'},P:{rx:'pO2',fx:'flame',color:[255,250,235],smoke:1,prod:'P2O5'},H2:{rx:'h2O2',fx:'flame',fuel:'H2',prod:'H2O'},
 C:{rx:'cO2',inc:'cO2Inc',fx:'flame',color:[255,140,60],prod:'CO2',o2:1},CH4:{rx:'ch4O2',inc:'ch4O2Inc',soot:'ch4O2Soot',fx:'flame',fuel:'CH4',prod:'CO2',o2:1}};
/*@@GFX views/n01-spalanie-v01@@*/
})();

; 
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var SUB='₀₁₂₃₄₅₆₇₈₉',pf=function(s){return String(s).replace(/\d/g,function(d){return SUB[d]})},fm=function(v,d){return isFinite(v)?(Math.round(v*Math.pow(10,d))/Math.pow(10,d)).toString().replace('.',','):'—'};
var GROUPS=[['tlenki (N01)',/O2$|O2Inc|H2o$|Decomp|O2Soot|cuoH2|cuoC|fe2o3|termit|Naoh|Hcl|H2so4|caoCo2|na2oCo2/],['wszystkie',/.*/]];
/*@@GFX views/stech-kalkulator-v01@@*/
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
function card(t,b,col){return'<div style="border:1px solid var(--border,#e2e8f0);border-left:4px solid '+(col||'var(--accent,#0d6868)')+';border-radius:10px;padding:8px 12px;margin:6px 0;background:var(--panel,#fff)"><b>'+t+'</b><div style="margin-top:3px">'+b+'</div></div>'}
function eqHtml(e){return e?'<div style="font:700 15px ui-monospace,Consolas,monospace;margin:4px 0;overflow-wrap:anywhere">'+e+'</div>':''}
function grid(host,min){var g=el('div');g.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,'+(min||300)+'px),1fr));gap:12px;align-items:start';host.appendChild(g);return g}
var SOLC={R:'#16a34a',T:'#d97706',N:'#dc2626','—':'#64748b'};var SOLS={R:'✓',T:'~',N:'×','—':'!'};
var LVN={E8:1,AMB:2,LO:3};
function pptId(r){return'ppt-'+r.metal.toLowerCase()+'-oh-'+r.q}
function catCol(r){var k={Cu:'ion-cu2',Fe:r.q===3?'ion-fe3':'ion-fe2',Ni:'ion-ni2',Mn:'ion-mn2',Cr:'ion-cr3'}[r.metal];var a=null;try{a=k&&G()&&G().colors.at(k)}catch(_){}return a?hex(a):'#64748b'}

function modelSVG(r,n,mode){var W=420,H=Math.max(150,60+n*44),cx=70,cy=H/2,M=r.metal,s='<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;max-width:460px;height:auto;display:block;margin:auto" role="img" aria-label="model wodorotlenku">';
 var txt=function(x,y,t,sz,col,w){return'<text x="'+x+'" y="'+y+'" font-size="'+(sz||18)+'" font-weight="'+(w||800)+'" text-anchor="middle" dominant-baseline="middle" fill="'+(col||'currentColor')+'">'+t+'</text>'};
 if(mode==='A'){s+=txt(cx,cy,M,24);for(var i=0;i<n;i++){var y=n===1?cy:30+i*(H-60)/Math.max(1,n-1);s+='<line x1="'+(cx+18)+'" y1="'+cy+'" x2="'+(cx+118)+'" y2="'+y+'" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>'+txt(cx+135,y,'O',20,'#dc2626')+'<line x1="'+(cx+150)+'" y1="'+y+'" x2="'+(cx+196)+'" y2="'+y+'" stroke="currentColor" stroke-width="2.5"/>'+txt(cx+210,y,'H',20,'#0f766e')}
  s+='<text x="8" y="'+(H-8)+'" font-size="11" font-weight="600" fill="#64748b">- - - oddziaływanie jonowe M···O    —— wiązanie O–H</text>'}
 else if(mode==='B'){cx=W/2-40;s+=txt(cx,cy,M+'<tspan font-size="12" dy="-8">'+(r.q>1?r.q:'')+'+</tspan>',24);for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/Math.max(1,n)+(n===2?Math.PI/2:0),R=Math.min(H/2-22,110),x=cx+Math.cos(a)*R,yy=cy+Math.sin(a)*R;
   s+='<line x1="'+(cx+Math.cos(a)*24)+'" y1="'+(cy+Math.sin(a)*24)+'" x2="'+(x-Math.cos(a)*26)+'" y2="'+(yy-Math.sin(a)*14)+'" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/><rect x="'+(x-26)+'" y="'+(yy-14)+'" width="52" height="28" rx="8" fill="#dbeafe" stroke="#2563eb"/>'+txt(x,yy,'OH⁻',14,'#1e3a8a')}
  s+=txt(W-70,H-14,'blok OH⁻ = jedna całość',11,'#64748b',600)}
 else{s+='<circle cx="'+cx+'" cy="'+cy+'" r="28" fill="#94a3b8"/>'+txt(cx,cy,r.cation,15,'#fff');for(var k=0;k<n;k++){var x2=170+(k%4)*58,y2=n<=4?cy:cy-24+Math.floor(k/4)*48;s+='<circle cx="'+x2+'" cy="'+y2+'" r="21" fill="#2563eb"/>'+txt(x2,y2,'OH⁻',13,'#fff')}
  var sum=r.q-n;s+=txt(W/2,H-14,'(+'+r.q+') + '+n+'·(−1) = '+(sum>0?'+':'')+sum+(sum===0?'  ✓ obojętny':'  ✗'),13,sum===0?'#16a34a':'#dc2626',800)}
 return s+'</svg>'}
/*@@GFX views/n02-wzory-v01@@*/

/*@@GFX views/n02-przeglad-v01@@*/

var MTYPES=[['tlenek zasadowy + woda','1. tlenek + woda'],['metal + woda','2. metal aktywny + woda'],['strącanie wodorotlenku','3. sól + zasada (strącanie)']];
function rxOfType(t){var RD=D().REACTION_DATA||{},R=D().REACTIONS||{},H=HY();return Object.keys(RD).filter(function(k){if(!R[k])return false;var ty=RD[k].type;if(ty===t)return R[k].products.some(function(p){return H.get(p.formula)||p.formula==='Ag2O'});if(t==='metal + woda'&&k==='naH2o')return true;if(t==='strącanie wodorotlenku'&&/^(cuso4Naoh|fecl3Naoh)$/.test(k))return true;return false})}
function specFor(k){var g=G();if(!g||!g.rx)return null;if(g.rx.get(k))return k;var l=g.rx.list(function(sp){return sp.rxKey===k});return l[0]||null}
function beaker(box,k,h){box.innerHTML='';var g=G();k=specFor(k)||k;if(!g||!g.rx||!g.rx.get(k)){box.innerHTML='<div class="note">Brak animacji dla tej reakcji — opis i równanie poniżej.</div>';return null}var m=g.rx.mount(box,k,{height:h||240,dur:6,auto:true});var b=el('div','r');var x=btn(b,'▶ powtórz',function(){m.play()});box.appendChild(b);return m}
function rxCard(k){var H=HY(),d=(D().REACTION_DATA||{})[k]||{},J=null;try{J=C.IONIC&&C.IONIC.equations(k)}catch(_){}
 return eqHtml(H.eq(k))+(J&&J.ionic&&J.net?'<div><b>Jonowo skrócone:</b> '+J.net+'</div>':'')+'<div class="note" style="margin-top:6px"><b>Warunki:</b> '+(d.conditions||'—')+'<br><b>Obserwacja:</b> '+(d.observation||'—')+(d.safety&&d.safety.length?'<br><b>BHP:</b> '+d.safety.join(' '):'')+(d.note?'<br><small>'+d.note+'</small>':'')+'<br><small>poziom: '+(d.level||'E8')+' · klucz silnika: '+k+'</small></div>'}
/*@@GFX views/n02-otrzymywanie-v01@@*/

/*@@GFX views/n02-stracanie-v01@@*/

/*@@GFX views/n02-zobojetnianie-v01@@*/

/*@@GFX views/n02-dysocjacja-v01@@*/

/*@@GFX views/n02-reaktor-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function G(){return C.LAB&&C.LAB.GFX}function D(){return C.DATA||{}}
function specFor(k){var g=G();if(!g||!g.rx)return null;if(g.rx.get(k))return k;var l=g.rx.list(function(sp){return sp.rxKey===k});return l[0]||null}
function rxKey(k){var g=G(),sp=g&&g.rx&&g.rx.get(k);return sp&&sp.rxKey||k}
function eq(k){var R=C.REACTION,kk=rxKey(k),SUB='₀₁₂₃₄₅₆₇₈₉';try{if(R&&R.equation&&R.get(kk))return R.equation(kk).replace(/([A-Za-z\)\]])(\d+)/g,function(m,a,n){return a+n.replace(/\d/g,function(c){return SUB[c]})}).replace(/->/g,'→')}catch(_){}return k}
function card(k){var kk=rxKey(k),d=(D().REACTION_DATA||{})[kk]||{},g=G(),I=g&&g.rx&&specFor(k)?g.rx.info(specFor(k)):null,J=null;try{J=C.IONIC&&C.IONIC.equations(kk)}catch(_){}
 return '<div style="font:700 15px ui-monospace,Consolas,monospace;margin:4px 0;overflow-wrap:anywhere">'+(I?I.eq:eq(k))+'</div>'+(J&&J.ionic&&J.net?'<div><b>Jonowo skrócone:</b> '+J.net+'</div>':'')
  +'<div class="note" style="margin-top:6px"><b>Warunki:</b> '+(d.conditions||'—')+'<br><b>Obserwacja:</b> '+(d.observation||(I&&I.why)||'—')+(d.safety&&d.safety.length?'<br><b>BHP:</b> '+d.safety.join(' '):'')+(I&&I.teacher?'<br><b>Tylko pokaz nauczyciela.</b>':'')+(d.note?'<br><small>'+d.note+'</small>':'')+'<br><small>poziom: '+(d.level||'E8')+' · klucz silnika: '+kk+'</small></div>'}
function define(id,o){V.define(id,{title:o.title,tag:'GFX',hint:o.hint||'Wybierz doświadczenie: animacja w zlewce, równanie cząsteczkowe i jonowe, warunki, obserwacja i BHP — wszystko z silnika.',
 foot:'GFX.rx (barwy CHE.COLORS) · CHE.REACTION / REACTION_DATA · CHE.IONIC',
 build:function(host){host.innerHTML='';var bars=el('div'),area=el('div');host.append(bars,area);var all=[],first=null,R=D().REACTIONS||{};
  o.groups.forEach(function(gr){var ks=gr[1].filter(function(k){return R[rxKey(k)]||R[k.replace('+php','')]});if(!ks.length)return;var r=el('div','r','<b style="min-width:150px">'+gr[0]+':</b> ');
   ks.forEach(function(k){first=first||k;var b=el('button',null,eq(k).split(' → ')[0]+(/\+php$/.test(k)?' + fenoloftaleina':''));b.type='button';b.onclick=function(){all.forEach(function(x){x.classList.toggle('on',x===b)});show(k)};r.appendChild(b);all.push(b)});bars.appendChild(r)});
  function show(k){area.innerHTML='';var g=el('div');g.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px;align-items:start';area.appendChild(g);var l=el('div'),r=el('div');g.append(l,r);
   var s=specFor(k),GX=G();if(s&&GX){var m=GX.rx.mount(l,s,{height:240,dur:6,auto:true});var bb=el('div','r');var x=el('button',null,'▶ powtórz');x.type='button';x.onclick=function(){m.play()};bb.appendChild(x);l.appendChild(bb)}else l.innerHTML='<div class="note">Brak animacji w zlewce dla tej reakcji — opis i równanie obok.</div>';
   r.innerHTML=card(k)}
  var keys=[];all.forEach(function(b,i){b._k=null});o.groups.forEach(function(gr){gr[1].forEach(function(k){if(R[rxKey(k)]||R[k.replace('+php','')])keys.push(k)})});keys.forEach(function(k,i){if(all[i])all[i]._k=k});
  host._show=function(k){var b=all.filter(function(x){return x._k===k})[0];if(b){b.click();return true}return false};(C.PRACOWNIA.live=C.PRACOWNIA.live||{})[id]=host;
  var p=C.PRACOWNIA.pending;C.PRACOWNIA.pending=null;if(p&&host._show(p))return;
  if(first){all[0].classList.add('on');show(first)}}})}
 
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.che-prac-go');if(!b)return;e.preventDefault();var id=b.getAttribute('data-prac'),k=b.getAttribute('data-k'),P=C.PRACOWNIA,doc=b.ownerDocument;
 var h=(P.live||{})[id];if(h&&h.isConnected&&doc.contains(h)&&h._show(k)){h.scrollIntoView({behavior:'smooth',block:'center'});return}
 P.pending=k;var ref=doc.querySelector('.che-lesson-viz-slot[data-che-lesson-viz="'+id+'"]')||doc.querySelector('[data-che-lesson-viz="'+id+'"]');if(!ref)return;ref.scrollIntoView({behavior:'auto',block:'center'});var t=ref.querySelector('button[data-che-open-viz]');if(t)t.click();
 var n=0,iv=setInterval(function(){var hh=(P.live||{})[id];if(hh&&hh.isConnected&&doc.contains(hh)){clearInterval(iv);if(P.pending)hh._show(P.pending);P.pending=null;hh.scrollIntoView({behavior:'smooth',block:'center'})}else if(++n>40)clearInterval(iv)},100)});
C.PRACOWNIA={version:'1.0',define:define,card:card};
/*@@GFX views/n01-doswiadczenia-v01@@*/
/*@@GFX views/n02-doswiadczenia-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function norm(v){if(v==null)return{ok:null,d:'brak wyniku'};if(typeof v==='boolean')return{ok:v,d:''};
 if(Array.isArray(v)&&v.length&&v[0]&&v[0].ok!==undefined){var bad=v.filter(function(x){return x.ok===false});return{ok:!bad.length,d:bad.length?bad.map(function(x){return(x.id||'')+' '+(x.name||'')+(x.detail?': '+x.detail:'')}).join('; '):v.length+' testów'}}
 if(Array.isArray(v.invalid))return{ok:!v.invalid.length,d:(v.records!=null?v.records+' rekordów':'')+(v.invalid.length?' · błędne: '+v.invalid.slice(0,8).join(', '):'')};
 if(Array.isArray(v.tests)){var f=v.tests.filter(function(t){return Array.isArray(t)?!t[1]:t.ok===false});return{ok:!f.length,d:f.length?f.map(function(t){return Array.isArray(t)?t[0]+(t[2]?': '+t[2]:''):(t.name||t.id)}).join('; '):v.tests.length+' testów'}}
 if(Array.isArray(v.rows)){var g=v.rows.filter(function(r){return r.ok===false});return{ok:!g.length,d:g.length?g.map(function(r){return r.id+' '+(r.detail||'')}).join('; '):v.rows.length+' sprawdzeń'}}
 if(Array.isArray(v.unbalanced)){var u=v.unbalanced.length+(v.missingData||[]).length;return{ok:!u,d:(v.count||'?')+' reakcji'+(u?' · niezbilansowane/brak danych: '+v.unbalanced.concat(v.missingData||[]).map(function(x){return x.id||x}).join(', '):'')+((v.incomplete||[]).length?' · niepełne metadane: '+v.incomplete.length:'')}}
 var ok=v.ok!==undefined?v.ok:v.pass!==undefined?v.pass:(v.passed!==undefined&&v.failed!==undefined)?!v.failed:null;
 if(ok===null)return{ok:null,d:'raport informacyjny: '+JSON.stringify(v,function(k,x){return Array.isArray(x)?'['+x.length+']':x}).slice(0,200)};
 var d=ok===false?JSON.stringify(v.failed||v.issues||v.errors||v.fails||'').slice(0,240):(v.passed!==undefined?v.passed+' ok':'');return{ok:ok,d:d}}
function audits(){var out=[],seen={};function run(name,fn,ctx){if(seen[name])return;seen[name]=1;var t0=performance.now();try{var r=norm(fn.call(ctx));out.push({name:name,ok:r.ok,d:r.d,ms:performance.now()-t0})}catch(e){out.push({name:name,ok:false,d:'wyjątek: '+e.message,ms:performance.now()-t0})}}
 [['Spójność danych (CHE.CONSISTENCY)',C.CONSISTENCY,'audit'],['Tlenki (CHE.OXIDES)',C.OXIDES,'audit'],['Wodorotlenki (CHE.HYDROXIDES)',C.HYDROXIDES,'audit'],['Stechiometria (CHE.STECH)',C.STECH,'audit'],
  ['Fizyka: elektrostatyka (CHE.FIZ.ELEKTRO)',C.FIZ&&C.FIZ.ELEKTRO,'audit'],['Fizyka: model (CHE.PHYS)',C.PHYS,'audit'],['Reakcje: bilans i metadane (CHE.REACTION)',C.REACTION,'audit'],['Barwy (CHE.COLORS)',C.COLORS,'audit'],['Barwy — regresja (CHE.COLORS)',C.COLORS,'regression'],['Jony (CHE.IONIC)',C.IONIC,'audit']]
  .forEach(function(a){if(a[1]&&typeof a[1][a[2]]==='function')run(a[0],a[1][a[2]],a[1])});
 Object.keys(C).filter(function(k){return/REGRESSION|AUDIT|SELFTEST|selfTest|GATE|VERIFY|TEST/.test(k)&&!/RESULT/.test(k)}).forEach(function(k){var x=C[k],fn=typeof x==='function'?x:x&&(x.run||x.audit||x.check||x.verify);if(typeof fn==='function')run('regresja: '+k,fn,x)});
 return out}
function smoke(ids,onStep,done){var res=[],i=0,stage=el('div');stage.style.cssText='position:fixed;left:-12000px;top:0;width:960px;height:800px;overflow:hidden;pointer-events:none';document.body.appendChild(stage);
 var errs=[],h=function(e){errs.push((e.message||String(e.reason||e)).slice(0,160))};window.addEventListener('error',h);window.addEventListener('unhandledrejection',h);
 function next(){if(i>=ids.length){window.removeEventListener('error',h);window.removeEventListener('unhandledrejection',h);stage.remove();done(res);return}
  var id=ids[i++],host=el('div');host.dataset.che=id;stage.appendChild(host);errs=[];var t0=performance.now(),ex=null;try{V.mount(host)}catch(e){ex=e.message}
  setTimeout(function(){var ms=performance.now()-t0,len=(host.textContent||'').trim().length+host.querySelectorAll('canvas,svg').length*50;res.push({id:id,ok:!ex&&!errs.length&&len>0,ms:ms,d:ex?'wyjątek: '+ex:errs.length?errs.join(' | '):len?'':'pusty widok'});host.remove();onStep(i,ids.length);next()},120)}
 next()}
/*@@GFX views/che-test-silnika-v01@@*/
})();

