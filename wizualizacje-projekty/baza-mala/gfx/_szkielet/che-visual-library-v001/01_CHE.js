
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