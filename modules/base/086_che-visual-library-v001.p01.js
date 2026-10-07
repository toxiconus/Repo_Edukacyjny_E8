<script id="che-visual-library-v001">
(function(){
'use strict';
const CHE=window.CHE=window.CHE||{};
const C=CHE;
const defineView = CHE.VIEW.define;
const V = CHE.VIZ;
const M = CHE.MOTION;

/* =====================================================================
   WIDOKI
   ===================================================================== */

/* --- 1. Algorytm egzaminacyjny --- */
/* --- 2. Pary sprzężone --- */
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

/* --- 3. Algorytm nazywania --- */
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

/* --- 4. Tabela nazewnictwa --- */
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

/* --- 5. Reszta kwasowa — builder --- */
defineView('reszta-builder', {
  title:'H⁺ + reszta kwasowa → kwas', tag:'UND',
  hint:'Kliknij resztę kwasową — zobacz, ile protonów potrzebuje do utworzenia kwasu.',
  foot:'Liczba protonów = ładunek reszty. Cl⁻ potrzebuje 1 H⁺, SO₄²⁻ — 2 H⁺, PO₄³⁻ — 3 H⁺.',
  build(host) {
    host.innerHTML = '';
    /* Pełny katalog reszt z bazy dydaktycznej silnika; lekcja może zawęzić listę kwasów */
    const dataAll = {
      'Cl⁻':{n:1,formula:'HCl',name:'kwas chlorowodorowy'},
      'SO₄²⁻':{n:2,formula:'H₂SO₄',name:'kwas siarkowy(VI)'},
      'PO₄³⁻':{n:3,formula:'H₃PO₄',name:'kwas fosforowy(V)'},
      'NO₃⁻':{n:1,formula:'HNO₃',name:'kwas azotowy(V)'},
      'CO₃²⁻':{n:2,formula:'H₂CO₃',name:'kwas węglowy'},
      'S²⁻':{n:2,formula:'H₂S',name:'kwas siarkowodorowy'},
      'CH₃COO⁻':{n:1,formula:'CH₃COOH',name:'kwas octowy'},
    };
    const LC=CHE.LESSON_CONTEXT;
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('reszta-builder',{acids:Object.values(dataAll).map(x=>x.formula)}):{acids:Object.values(dataAll).map(x=>x.formula)};
    const allow=opts.acids||[];
    const data={};
    Object.keys(dataAll).forEach(k=>{
      const f=dataAll[k].formula;
      const plain=f.replace(/[₀-₉]/g,'');
      if(!allow.length || allow.some(a=>a===f||a===plain||a.replace(/[₀-₉0-9]/g,'')===plain.replace(/[0-9]/g,''))) data[k]=dataAll[k];
    });
    if(!Object.keys(data).length) Object.assign(data, dataAll);
    const bar = document.createElement('div');
    bar.className = 'r';
    bar.style.marginTop = '0';
    const stage = document.createElement('div');
    stage.style.cssText = 'margin-top:12px;padding:24px;background:var(--surface-soft);border-radius:12px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;font-family:var(--mono);font-size:1.05rem;font-weight:800';
    const note = document.createElement('p');
    note.style.cssText = 'text-align:center;font-size:12.5px;color:var(--text-soft);margin-top:10px;font-style:italic';

    Object.keys(data).forEach(k => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = k;
      b.onclick = () => {
        bar.querySelectorAll('button').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
        render(k);
      };
      bar.appendChild(b);
    });
    function render(k) {
      const d = data[k];
      const protons = Array.from({length:d.n}, () => '<span style="padding:8px 14px;border-radius:999px;background:var(--c-und-bg);border:2px solid var(--c-und-line);color:var(--c-und)">H⁺</span>').join('');
      stage.innerHTML = `${protons}<span style="color:var(--text-muted);font-size:1.4rem">+</span><span style="padding:8px 14px;border-radius:999px;background:var(--c-warn-bg);border:2px solid var(--c-warn-line);color:var(--c-warn)">${k}</span><span style="color:var(--text-muted);font-size:1.4rem">→</span><span style="padding:8px 14px;border-radius:999px;background:var(--c-e8-bg);border:2px solid var(--c-e8-line);color:var(--c-e8)">${d.formula}</span>`;
      note.textContent = d.name + ' — ' + d.n + ' proton' + (d.n > 1 ? 'y' : '') + ' kwaśne.';
    }
    host.append(bar, stage, note);
    bar.children[0].click();
  }
});


/* --- GIGA 9 — LIVE CV atom → cząsteczka → substancja → reakcja --- */
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

/* --- 10. GIGA 10 — profil pierwiastka/substancji + mini układ okresowy --- */
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

/* --- 6. Model elektronowy — CHE.MOLECULE --- */
defineView('molecule-electrons',{title:'Elektrony i podpowłoki — wspólny model CHE.MOLECULE',tag:'MODEL',hint:'Wybierz atom lub cząsteczkę. Obsada podpowłok i elektrony walencyjne są wyliczane z centralnych danych.',foot:'To model dydaktyczny obsadzeń elektronowych; nie jest pełnym rozwiązaniem kwantowym.',build(host){
  host.innerHTML=''; const bar=document.createElement('div');bar.className='r'; const panel=document.createElement('div');panel.className='metric-grid'; const table=document.createElement('div');table.className='note'; const choices=['H','C','N','O','F','Na','Mg','Al','P','S','Cl','Fe','Cu','Zn']; let cur='O';
  function render(){const a=CHE.MOLECULE.atom(cur),cfg=CHE.MOLECULE.electronConfiguration(cur),pairs=[];Object.entries(cfg).forEach(([orb,n])=>pairs.push('<span style="display:inline-block;margin:3px;padding:5px 8px;border:1px solid var(--border);border-radius:8px"><b>'+orb+'</b><br>'+n+' e⁻</span>'));panel.innerHTML='';[['Pierwiastek',a.symbol],['Z',a.Z],['Elektrony',a.electrons],['Walencyjne',a.valence],['Powłoki',(a.shells||[]).join(' · ')],['Obsada',Object.entries(cfg).map(([o,n])=>o+': '+n).join('  ')||'—']].forEach(([k,v])=>{const d=document.createElement('div');d.innerHTML='<b>'+k+'</b><strong>'+v+'</strong>';panel.appendChild(d)});table.innerHTML='<b>Podpowłoki</b><div style="margin-top:8px">'+pairs.join('')+'</div><br><b>Konfiguracja:</b> '+CHE.MOLECULE.orbitalSummary(cur);}
  choices.forEach(k=>{const b=document.createElement('button');b.type='button';b.textContent=k;b.onclick=()=>{cur=k;bar.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));render()};if(k===cur)b.classList.add('on');bar.appendChild(b)});host.append(bar,panel,table);render();
}});

/* --- 7. GIGA 8 — CV cząsteczki + wspólny widok 2D --- */
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

/* --- 7b. GIGA 8 — orbitalne pudełka --- */
defineView('molecule-orbitals',{title:'Orbitalne pudełka — obsada elektronowa',tag:'MODEL',hint:'Wybierz atom. Strzałki pokazują elektrony, a pojemność orbitalu wynika z centralnego modelu.',foot:'Schemat dydaktyczny: orbitale są reprezentowane jako pudełka; nie jest to rozkład przestrzenny orbitalu.',build(host){
  host.innerHTML=''; const bar=document.createElement('div');bar.className='r'; const stage=document.createElement('div');stage.className='note'; const choices=['H','C','N','O','F','Na','Mg','Al','P','S','Cl','Fe','Cu','Zn','Ag']; let cur='O';
  function arrows(n,cap){let out='';for(let i=0;i<cap;i++)out+=`<span style=\"display:inline-block;width:20px;text-align:center;font-weight:800;opacity:${i<n?1:.18}\">${i<n?(i%2?'↓':'↑'):'·'}</span>`;return out;}
  function render(){const cfg=CHE.MOLECULE.electronConfiguration(cur); stage.innerHTML='<h3 style=\"margin-top:0\">'+cur+' · '+CHE.MOLECULE.orbitalSummary(cur)+'</h3><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px\">'+Object.entries(cfg).map(([o,n])=>{const cap=o.endsWith('s')?2:o.endsWith('p')?6:o.endsWith('d')?10:14;return '<div style=\"padding:10px;border:1px solid var(--border);border-radius:12px;background:var(--panel-2)\"><b>'+o+'</b><div style=\"margin-top:8px;font-size:1.15rem;letter-spacing:2px\">'+arrows(n,cap)+'</div><small>'+n+'/'+cap+' e⁻</small></div>'}).join('')+'</div>';bar.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.k===cur));}
  choices.forEach(k=>{const b=document.createElement('button');b.type='button';b.dataset.k=k;b.textContent=k;b.onclick=()=>{cur=k;render()};bar.appendChild(b)}); document.addEventListener('che:molecule-select',e=>{const k=e.detail?.id;if(k&&CHE.DATA.ATOM_META?.[k]){cur=k;render();}else{const m=CHE.MOLECULE.get(k);if(m?.atoms?.[0]?.element){cur=m.atoms[0].element;render();}}}); host.append(bar,stage);render();
}});

/* --- 6. Model 3D (MOTION) --- */
defineView('molecule3d', {
  title:'Model 3D cząsteczek — obrót, zoom, pinch', tag:'MOTION',
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
    CHE.UI.stageTools(host, cv, {zoom:true});

    const keys = ['HCl','HF','H2O','H3O','H2SO4','H3PO4','H2CO3','CH3COOH','HCOOH','NH3','CO2'];
    let cur = 'CH3COOH', yaw = 0.5, pitch = 0.25, zoom = 1;
    let dragging = false, lx = 0, ly = 0, auto = true;
    const pointers = new Map();
    let pd = 0;

    keys.forEach(k => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = CHE.MOLECULE.get(k).name;
      b.onclick = () => { cur = k; CHE.MOLECULE.select(k,{source:'molecule3d'}); update(); };
      bar.appendChild(b);
    });
    const autoBtn = document.createElement('button');
    autoBtn.textContent = 'auto-obrót';
    autoBtn.classList.add('on');
    autoBtn.onclick = () => { auto = !auto; autoBtn.classList.toggle('on', auto); };
    bar.appendChild(autoBtn);
    document.addEventListener('che:molecule-select',e=>{const k=e.detail?.id;if(k&&keys.includes(k)){cur=k;update();}});

    function update() {
      [...bar.children].forEach(b => {
        if (b === autoBtn) return;
        b.classList.toggle('on', b.textContent === CHE.MOLECULE.get(cur).name);
      });
      note.innerHTML = '<b>' + CHE.MOLECULE.get(cur).name + '</b> — ' + CHE.MOLECULE.get(cur).note;
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
      M_.bonds.forEach(b => prim.push({ z:(Q[b.a].z + Q[b.b].z)/2 - 1, b }));
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
        if (M_.atoms[q.idx]?.acid) {
          ctx.beginPath();
          ctx.arc(q.x, q.y, r*1.4 + Math.sin(time*2) * 2, 0, 7);
          ctx.strokeStyle = 'rgba(250,204,21,.9)';
          ctx.lineWidth = 2.4;
          ctx.stroke();
        }
        ctx.fillStyle = E.t;
        ctx.font = `800 ${Math.round(r*0.7)}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(q.e, q.x, q.y);
      }
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '800 16px Inter, system-ui, sans-serif';
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(M_.name, 14, 26);
      if (M_.acid && M_.acid.length) {
        ctx.fillStyle = '#fbbf24';
        ctx.font = '700 11px Inter, system-ui, sans-serif';
        ctx.fillText('● proton kwaśny', 14, h - 16);
      }
    });
    update();
  }
});

/* --- 7. Otrzymywanie — trzy drogi --- */
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

/* --- 8. Otrzymywanie HCl — 4 kroki --- */
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

/* --- 9. Dysocjacja HCl — 4 statyczne kroki --- */
/* --- 10. Równanie krok po kroku (MOTION) --- */
defineView('step-eq', {
  title:'Równanie krok po kroku — CaO + H₂O → Ca(OH)₂', tag:'MOTION',
  hint:'Animacja odtwarza się automatycznie w pętli: substraty → strzałka → produkt.',
  foot:'Bilans: Ca: 1=1 ✓ · O: 1+1=2 ✓ · H: 2=2 ✓.',
  build(host) {
    host.innerHTML = '';
    const stage = document.createElement('div');
    stage.style.cssText = 'min-height:90px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px;font-family:var(--mono);font-weight:800;font-size:1.2rem;padding:20px;background:var(--surface-soft);border-radius:12px;border:1px solid var(--border)';
    host.appendChild(stage);
    const terms = [
      { t:'CaO',     role:'reactant' }, { t:'+', role:'op' }, { t:'H₂O', role:'reactant' },
      { t:'→',       role:'arrow' }, { t:'Ca(OH)₂', role:'product' },
    ];
    terms.forEach((term, i) => {
      const s = document.createElement('span');
      s.textContent = term.t;
      s.style.cssText = 'padding:8px 14px;border-radius:8px;opacity:0;transform:scale(.92);transition:opacity .35s ease,transform .35s ease';
      if (term.role === 'reactant') s.style.cssText += ';background:var(--c-und-bg);border:1px solid var(--c-und-line);color:var(--c-und)';
      if (term.role === 'product')  s.style.cssText += ';background:var(--c-e8-bg);border:1px solid var(--c-e8-line);color:var(--c-e8)';
      if (term.role === 'arrow')    s.style.cssText += ';color:var(--accent);font-size:1.4rem;padding:8px';
      if (term.role === 'op')       s.style.cssText += ';color:var(--text-muted)';
      s.dataset.delay = i * 0.6;
      stage.appendChild(s);
    });
    const t0 = performance.now();
    (function tick() {
      const t = (performance.now() - t0) / 1000;
      const cycle = 8, phase = t % cycle;
      [...stage.children].forEach((el, i) => {
        const d = i * 0.6;
        const vis = phase > d && phase < cycle - 1.2;
        el.style.opacity = vis ? 1 : 0;
        el.style.transform = vis ? 'scale(1)' : 'scale(.92)';
      });
      requestAnimationFrame(tick);
    })();
  }
});

/* --- 11. Jonizacja vs dysocjacja --- */
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

/* --- 12. Dysocjacja stopniowa --- */
defineView('diss-stepwise', {
  title:'Dysocjacja stopniowa kwasów wieloprotonowych', tag:'AMB',
  hint:'Każdy kolejny proton odrywa się trudniej: K₁ ≫ K₂ ≫ K₃. Wartości orientacyjne 25 °C.',
  foot:'H₂SO₄ mocny tylko w I stopniu; HSO₄⁻ ⇌ H⁺ + SO₄²⁻ to słaba dysocjacja. H₃PO₄ i H₂CO₃ słabe.',
  build(host) {
    const boxes = [], arrows = [], labels = [];
    const rows = [
      {y:20,name:'H₂SO₄',steps:['H₂SO₄','HSO₄⁻','SO₄²⁻'],kinds:['tl','am','gr'],labels:['całkowita','K₂ ≈ 1·10⁻²']},
      {y:100,name:'H₃PO₄',steps:['H₃PO₄','H₂PO₄⁻','HPO₄²⁻','PO₄³⁻'],kinds:['tl','am','am','rd'],labels:['K₁ ≈ 7·10⁻³','K₂ ≈ 6·10⁻⁸','K₃ ≈ 4·10⁻¹³']},
      {y:180,name:'H₂CO₃',steps:['H₂CO₃','HCO₃⁻','CO₃²⁻'],kinds:['tl','am','gr'],labels:['K₁ ≈ 4·10⁻⁷','K₂ ≈ 5·10⁻¹¹']},
    ];
    rows.forEach(r => {
      labels.push({ x:5, y:r.y + 28, t:r.name, anchor:'start', size:14, fill:'var(--text)' });
      r.steps.forEach((s, i) => {
        const x = 120 + i * 155;
        boxes.push({ x, y:r.y, w:100, h:46, kind:r.kinds[i], title:s });
        if (i < r.steps.length - 1) {
          arrows.push({ x1:x + 100, y1:r.y + 23, x2:x + 155, y2:r.y + 23 });
          labels.push({ x:(x + 100 + x + 155) / 2, y:r.y + 17, t:r.labels[i], size:10.5, fill:'var(--accent)' });
        }
      });
    });
    V.flowchart(host, { vb:[760, 300], boxes, arrows, labels });
  }
});

/* --- 13. Trzy poziomy zapisu dysocjacji --- */
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

/* --- 14. Jon hydroniowy --- */
defineView('hydronium', {
  title:'Jon hydroniowy H₃O⁺ — dokładniejszy model', tag:'UND',
  hint:'W wodzie H⁺ nie istnieje samodzielnie — łączy się z cząsteczką wody.',
  foot:'W szkole piszemy H⁺, ale poprawnie w wodzie mamy H₃O⁺. To samo dotyczy anionów.',
  build(host) {
    V.flowchart(host, { vb:[735, 200], boxes:[
      {x:5,y:20,w:200,h:80,kind:'bl',title:'H⁺ (proton)',lines:['sam nie istnieje','w wodzie']},
      {x:270,y:20,w:200,h:80,kind:'tl',title:'+ H₂O',lines:['cząsteczka wody','z wolną parą e⁻']},
      {x:535,y:20,w:200,h:80,kind:'gr',title:'H₃O⁺',lines:['jon hydroniowy','trwały w roztworze']},
      {x:5,y:120,w:730,h:66,kind:'gy',title:'Wniosek',lines:[
        'W szkolnym zapisie piszemy HCl → H⁺ + Cl⁻.',
        'Poprawnie w wodzie: HCl + H₂O → H₃O⁺ + Cl⁻.'
      ]},
    ], arrows:[
      {x1:205,y1:60,x2:268,y2:60,label:'+'},
      {x1:470,y1:60,x2:533,y2:60,label:'→'},
    ]});
  }
});

/* --- 15. Wykres mocy kwasów --- */
defineView('chart-strength', {
  title:'Stopień dysocjacji α — wykres słupkowy', tag:'E8',
  hint:'Skala logarytmiczna. Wartości dla c = 0,1 mol/dm³.',
  foot:'Kolor: ciemnozielony = mocny, bursztynowy = średni, czerwony = słaby.',
  build(host) {
    const LC=CHE.LESSON_CONTEXT;
    let rows=(CHE.DATA&&CHE.DATA.ACID_STRENGTH||[]).map(r=>({n:r.n,a:r.a,c:r.c}));
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('chart-strength',{acids:rows.map(r=>r.n)}):{};
    if(opts.acids&&opts.acids.length){
      const f=rows.filter(r=>opts.acids.indexOf(r.n)>=0);
      if(f.length) rows=f;
    }
    V.barChart(host, {
      vb:[760, 400],
      rows: rows,
      min: 0.0005,
      colorOf: r => r.c === 'mocny' ? 'var(--accent)' : r.c === 'średni' ? 'var(--c-warn)' : 'var(--c-err)',
    });
    if(opts._lesson){
      const n=document.createElement('div');n.className='note';n.style.marginTop='8px';
      n.innerHTML='<b>Źródło:</b> CHE.DATA.ACID_STRENGTH · kontekst <b>'+opts._lesson+'</b>.';
      host.appendChild(n);
    }
  }
});

/* --- 16. Tabela mocy kwasów --- */
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

/* --- 17. Moc ≠ stężenie --- */
defineView('moc-vs-c', {
  title:'Moc ≠ stężenie — dwie różne osie', tag:'UND',
  hint:'Po lewej: mocny kwas, ale rozcieńczony. Po prawej: słaby kwas, ale stężony.',
  foot:'Schemat poglądowy. Wniosek: moc (α) i stężenie (mol/dm³) to dwie niezależne osie.',
  build(host) {
    const svg = V.makeSvg(host, [735, 340]);
    const E = V.el;
    svg.appendChild(E('rect', { x:20, y:30, width:330, height:180, rx:12, fill:'var(--c-und-bg)', fillOpacity:.5, stroke:'var(--c-und-line)' }));
    svg.appendChild(E('text', { x:185, y:20, 'text-anchor':'middle', 'font-size':13.5, 'font-weight':800, fill:'var(--c-und)' }, 'HCl — mocny, ale rozcieńczony (0,001 M)'));
    for (let i = 0; i < 5; i++) {
      svg.appendChild(E('circle', { cx:70 + i*60, cy:90 + (i%2)*50, r:8, fill:'#60a5fa', stroke:'#1d4ed8', 'stroke-width':1.2 }));
      svg.appendChild(E('text', { x:70 + i*60, y:93 + (i%2)*50, 'text-anchor':'middle', 'font-size':10, 'font-weight':800, fill:'#fff' }, '+'));
      svg.appendChild(E('circle', { cx:100 + i*60, cy:120 + (i%2)*50, r:8, fill:'#4ade80', stroke:'#15803d', 'stroke-width':1.2 }));
      svg.appendChild(E('text', { x:100 + i*60, y:123 + (i%2)*50, 'text-anchor':'middle', 'font-size':10, 'font-weight':800, fill:'#fff' }, '−'));
    }
    svg.appendChild(E('text', { x:185, y:235, 'text-anchor':'middle', 'font-size':12, 'font-weight':700, fill:'var(--text-soft)' }, 'α ≈ 100% — brak cząsteczek HCl'));
    svg.appendChild(E('text', { x:185, y:253, 'text-anchor':'middle', 'font-size':12, fill:'var(--text-soft)' }, '[H₃O⁺] = 10⁻³ → pH = 3'));
    svg.appendChild(E('text', { x:185, y:275, 'text-anchor':'middle', 'font-size':13, 'font-weight':800, fill:'var(--c-und)' }, 'MOCNY, ale rozcieńczony'));
    svg.appendChild(E('rect', { x:385, y:30, width:330, height:180, rx:12, fill:'var(--c-warn-bg)', fillOpacity:.5, stroke:'var(--c-warn-line)' }));
    svg.appendChild(E('text', { x:550, y:20, 'text-anchor':'middle', 'font-size':13.5, 'font-weight':800, fill:'var(--c-warn)' }, 'CH₃COOH — słaby, ale stężony (1 M)'));
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 6; c++) {
        svg.appendChild(E('ellipse', { cx:425 + c*48, cy:65 + r*32, rx:11, ry:6, fill:'#f59e0b', stroke:'#b45309' }));
      }
    }
    svg.appendChild(E('circle', { cx:470, cy:190, r:8, fill:'#60a5fa', stroke:'#1d4ed8', 'stroke-width':1.2 }));
    svg.appendChild(E('text', { x:470, y:193, 'text-anchor':'middle', 'font-size':10, 'font-weight':800, fill:'#fff' }, '+'));
    svg.appendChild(E('circle', { cx:540, cy:190, r:8, fill:'#4ade80', stroke:'#15803d', 'stroke-width':1.2 }));
    svg.appendChild(E('text', { x:540, y:193, 'text-anchor':'middle', 'font-size':10, 'font-weight':800, fill:'#fff' }, '−'));
    svg.appendChild(E('text', { x:550, y:235, 'text-anchor':'middle', 'font-size':12, 'font-weight':700, fill:'var(--text-soft)' }, 'α ≈ 0,4% — prawie same cząsteczki'));
    svg.appendChild(E('text', { x:550, y:253, 'text-anchor':'middle', 'font-size':12, fill:'var(--text-soft)' }, '[H₃O⁺] ≈ 4·10⁻³ → pH ≈ 2,4'));
    svg.appendChild(E('text', { x:550, y:275, 'text-anchor':'middle', 'font-size':13, 'font-weight':800, fill:'var(--c-warn)' }, 'SŁABY, ale stężony'));
    svg.appendChild(E('rect', { x:20, y:295, width:695, height:34, rx:10, fill:'var(--c-warn-bg)', stroke:'var(--c-warn-line)' }));
    svg.appendChild(E('text', { x:367, y:317, 'text-anchor':'middle', 'font-size':13, 'font-weight':800, fill:'var(--c-warn)' }, 'Moc ≠ stężenie — słaby stężony kwas może dać niższe pH niż mocny rozcieńczony.'));
  }
});

/* --- 18. Interaktywny suwak α --- */
defineView('alpha-slider', {
  title:'Stopień dysocjacji α a stężenie', tag:'UND',
  hint:'Przesuń suwak. Rozcieńczanie zwiększa α słabych kwasów; mocne są zawsze ≈100%.',
  foot:'α = cząstki zdysocjowane / wszystkie. Mocne α ≈ 1, słabe α ≪ 1.',
  build(host) {
    host.innerHTML = '';
    const svg = V.makeSvg(host, [640, 220]);
    const E = V.el;
    const ctrl = document.createElement('div');
    ctrl.className = 'r';
    ctrl.innerHTML = '<label>c =</label><input type="range" min="-4" max="0" step="0.1" value="-1"><b style="font:700 .85rem var(--mono);min-width:120px;text-align:right">0,10 mol/dm³</b>';
    host.appendChild(ctrl);
    const sl = ctrl.querySelector('input');
    const out = ctrl.querySelector('b');
    const Ks = [
      { n:'HCl', K:null, col:'var(--accent)' },
      { n:'HF', K:6.8e-4, col:'var(--c-und)' },
      { n:'CH₃COOH', K:1.8e-5, col:'var(--c-warn)' },
      { n:'H₂CO₃', K:4.3e-7, col:'var(--c-err)' },
    ];
    Ks.forEach((k, i) => {
      const y = 22 + i*48;
      svg.appendChild(E('text', { x:10, y:y+18, 'font-size':13, 'font-weight':700, fill:'var(--text)' }, k.n));
      svg.appendChild(E('rect', { x:110, y, width:440, height:26, rx:6, fill:'var(--surface-soft)' }));
      svg.appendChild(E('rect', { id:'ab'+i, x:110, y, width:0, height:26, rx:6, fill:k.col }));
      svg.appendChild(E('text', { id:'at'+i, x:558, y:y+18, 'font-size':12, 'font-weight':700, fill:'var(--text-soft)', 'font-family':'var(--mono)' }, '—'));
    });
    function update() {
      const c = Math.pow(10, +sl.value);
      out.textContent = (c >= 0.01 ? c.toFixed(2) : c.toExponential(1)).replace('.', ',') + ' mol/dm³';
      Ks.forEach((k, i) => {
        const a = k.K ? (-k.K + Math.sqrt(k.K*k.K + 4*k.K*c)) / (2*c) : 0.999;
        const w = Math.max(a, 0.004) * 440;
        svg.querySelector('#ab'+i).setAttribute('width', w);
        svg.querySelector('#at'+i).textContent = a >= 0.995 ? '≈100%' : (a*100).toFixed(a < 0.1 ? 2 : 1).replace('.', ',') + '%';
      });
    }
    sl.addEventListener('input', update);
    update();
  }
});

/* --- 19. Paradoks HF --- */
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

/* --- 20. Tabela Ka/pKa --- */
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

/* --- 22. Laboratorium wskaźników --- */
/* [MARTWY KOD — nadpisany przez ind-lab niżej (migracja 3). NIE KASOWAĆ: to tryb „przewiduj i sprawdź” + LESSON_CONTEXT, aktywna wersja go nie ma.] */
/* --- 23. Barwy wskaźników w zależności od pH --- */
defineView('indicator-band', {
  title:'Barwy wskaźników w zależności od pH · BAZA / ORYGINAŁ', tag:'AMB',
  hint:'Wskaźnik zmienia barwę tylko w swoim zakresie. Oranż metylowy przy pH 7 jest już żółty.',
  foot:'Fenoloftaleina: 8,2–10 · oranż metylowy: 3,1–4,4 · błękit bromotymolowy: 6,0–7,6 · papierek uniwersalny: cała skala.',
  build(host) {
    host.innerHTML = '';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 760 300');
    svg.classList.add('che-ph-original-palette');
    svg.style.cssText = 'width:100%;height:auto;display:block';
    const NS = 'http://www.w3.org/2000/svg';
    const E = (n, a, t) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); if (t != null) e.textContent = t; return e; };
    const L = 150, W = 760 - L - 20;
    const X = p => L + (p/14) * W;
    for (let p = 0; p <= 14; p++) svg.appendChild(E('text', { x:X(p), y:34, 'text-anchor':'middle', 'font-size':10.5, 'font-weight':600, fill:'var(--text-muted)', 'font-family':'var(--mono)' }, p));
    svg.appendChild(E('text', { x:L, y:20, 'font-size':11, 'font-weight':800, fill:'var(--text-muted)' }, 'pH'));
    const palette = ['#e5262e','#ef5a28','#f6a21e','#e8c22c','#d7d93a','#5cb85c','#21a89a','#2f7fc1','#4a4bb5','#6b2d8f'];
    svg.appendChild(E('text', { x:L-10, y:64, 'text-anchor':'end', 'font-size':12, 'font-weight':700, fill:'var(--text-soft)' }, 'Uniwersalny'));
    palette.forEach((c, i) => {
      const segW = W / 10;
      svg.appendChild(E('rect', { x: L + i*segW, y: 44, width: segW, height: 26, fill: c }));
    });
    const rows = [
      { y:90,  name:'Oranż metylowy', lo:3.1, hi:4.4, cLo:'#dc2626', cHi:'#facc15' },
      { y:140, name:'Błękit bromotymolowy', lo:6.0, hi:7.6, cLo:'#eab308', cHi:'#2563eb' },
      { y:190, name:'Fenoloftaleina', lo:8.2, hi:10.0, cLo:'#f8fafc', cHi:'#db2777' },
    ];
    rows.forEach(r => {
      svg.appendChild(E('text', { x:L-10, y:r.y+20, 'text-anchor':'end', 'font-size':12, 'font-weight':700, fill:'var(--text-soft)' }, r.name));
      const id = 'g' + Math.random().toString(36).slice(2, 7);
      let defs = svg.querySelector('defs'); if (!defs) { defs = E('defs'); svg.appendChild(defs); }
      const lg = E('linearGradient', { id });
      lg.appendChild(E('stop', { offset:'0', 'stop-color':r.cLo }));
      lg.appendChild(E('stop', { offset:'1', 'stop-color':r.cHi }));
      defs.appendChild(lg);
      svg.appendChild(E('rect', { x:X(0), y:r.y, width:X(r.lo)-X(0), height:26, fill:r.cLo }));
      svg.appendChild(E('rect', { x:X(r.lo), y:r.y, width:X(r.hi)-X(r.lo), height:26, fill:`url(#${id})` }));
      svg.appendChild(E('rect', { x:X(r.hi), y:r.y, width:X(14)-X(r.hi), height:26, fill:r.cHi }));
      svg.appendChild(E('text', { x:(X(r.lo)+X(r.hi))/2, y:r.y+42, 'text-anchor':'middle', 'font-size':10.5, 'font-weight':700, fill:'var(--accent)', 'font-family':'var(--mono)' }, `${r.lo}–${r.hi}`));
    });
    svg.appendChild(E('line', { x1:X(7), y1:44, x2:X(7), y2:224, stroke:'var(--text)', 'stroke-dasharray':'4 3', 'stroke-width':1.5 }));
    svg.appendChild(E('text', { x:X(7)+6, y:238, 'font-size':11, 'font-weight':800, fill:'var(--text)' }, 'pH = 7'));
    svg.appendChild(E('text', { x:L + W/6, y:268, 'text-anchor':'middle', 'font-size':11, 'font-weight':800, fill:'var(--c-err)' }, 'kwaśny'));
    svg.appendChild(E('text', { x:L + W/2, y:268, 'text-anchor':'middle', 'font-size':11, 'font-weight':800, fill:'var(--accent)' }, 'obojętny'));
    svg.appendChild(E('text', { x:L + 5*W/6, y:268, 'text-anchor':'middle', 'font-size':11, 'font-weight':800, fill:'var(--c-und)' }, 'zasadowy'));
    svg.appendChild(E('text', { x:L, y:288, 'font-size':11.5, 'font-weight':600, fill:'var(--text-soft)' }, 'Wskaźnik zmienia barwę tylko w swoim zakresie.'));
    host.appendChild(svg);
  }
});

/* --- 24. Obliczanie pH — drabinka --- */
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

/* --- 25. Tabela pH --- */
defineView('ph-table', {
  title:'Skala pH — odczyn i przykłady', tag:'E8',
  hint:'Od silnie kwasowego do silnie zasadowego.',
  foot:'Czysty deszcz ma pH 5,6 (CO₂). Kwaśny deszcz: pH < 5,6.',
  build(host) {
    V.table(host, {
      columns:['pH','Odczyn','Przykład'],
      rows:[
        ['0–3','<b style="color:var(--c-err)">silnie kwasowy</b>','HCl 1 M (pH 0), sok żołądkowy (≈1,5–2), HCl 0,01 M (pH 2), ocet (≈2,5–3)'],
        ['4–6','<b style="color:var(--c-warn)">słabo kwasowy</b>','kawa (≈5), czysty deszcz (≈5,6), mleko (≈6,6)'],
        ['7','<b>obojętny</b>','woda destylowana'],
        ['8–10','<b style="color:var(--c-und)">słabo zasadowy</b>','mydło (pH 9), mleko magnezji (pH 10)'],
        ['11–14','<b style="color:var(--c-und)">silnie zasadowy</b>','woda wapienna (pH 12), NaOH (pH 13)'],
      ]
    });
  }
});

/* --- 26. Cztery typy reakcji --- */
/* --- Reakcje kwasów: katalog CHE.REACTION + zlewka (MOTION) + opcjonalne przewidywanie · v0.02 ---
   Równanie/typ/warunki/obserwacja/BHP: z CHE.REACTION. Kolory: z CHE.COLORS. W widoku zostają tylko atrybuty rysunku i komentarz dydaktyczny. */
function reactionsMerged(host,predictDefault){
  host.innerHTML='';
  const E=CHE.REACTION,CO=CHE.COLORS,KEY='che-react-predict',W=['sol-water'];
  /* Atrybuty rysunku (liq: [kolor przed, po] jako [id,pH?]; sol: [kolor przed, po, ile zostaje]; gas: [liczba, promień]; ppt: id osadu).
     Wszystkie kolory = id rekordów CHE.COLORS. Równania, obserwacje i BHP: CHE.REACTION. */
  /* v0.33: wygląd reakcji = GFX.rx (jedno źródło z biblioteką, lekcją i Atlasem); równania/BHP = CHE.REACTION */
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
defineView('four-reactions', {
  title:'Reakcje kwasów — katalog CHE.REACTION + zlewka · v0.03', tag:'MOTION',
  hint:'Wybierz reakcję i uruchom zlewkę. Równanie, warunki, obserwacja i BHP pochodzą z jednego rejestru. Przewidywanie włączysz przełącznikiem.',
  foot:'Metal reaguje z kwasem tylko, gdy stoi przed wodorem w szeregu aktywności. HNO₃ to kwas utleniający – tylko pokaz nauczyciela. Kolory z CHE.COLORS.',
  build(host){reactionsMerged(host,false)}
});
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



/* --- 27. Szereg aktywności --- */

defineView('lab-oxides-v102', {
  title:'CHE.LAB — tlenki i woda/kwas (preset L02) · v1.02', tag:'LAB',
  hint:'Zlewka pod lekcję tlenków: CaO/MgO/CuO/ZnO, woda, kwasy, węglany. Sesja LAB + dane silnika.',
  foot:'Preset l02/oxides · CHE.LAB v1.02 · REACTION/SUBSTANCES/COLORS gdy dostępne.',
  build(host){
    if(!(window.CHE&&CHE.LABVIEW)){
      host.innerHTML='<div class="lab-note">Brak CHE.LABVIEW (che-lab-engine-v001).</div>';
      return;
    }
    try{ if(CHE.LESSON_CONTEXT) CHE.LESSON_CONTEXT.activate('L02'); }catch(_){}
    CHE.LABVIEW.mount(host,{
      preset:'l02',
      session:'viz-lab-oxides-v102',
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

defineView('metal-series', {
  title:'Szereg aktywności metali — granica wodoru', tag:'E8',
  hint:'Metale przed H wypierają wodór z kwasów nieutleniających. Metale za H (Cu, Ag, Au) nie reagują z HCl.',
  foot:'HNO₃ reaguje z Cu jako utleniający, ale NIE wydziela H₂. K, Na, Ca reagują także z samą wodą.',
  build(host) {
    const svg = V.makeSvg(host, [760, 200]);
    const E = V.el;
    const series = CHE.DATA.METAL_SERIES;
    const bw = (760 - 40) / series.length;
    const bx = 20, by = 60, bh = 50;
    series.forEach((m, i) => {
      const x = bx + i*bw;
      const active = CHE.DATA.METAL_ACTIVE.includes(m);
      const isH = m === 'H';
      let fill = active ? 'var(--accent-soft)' : 'var(--c-err-bg)';
      let stroke = active ? 'var(--accent)' : 'var(--c-err)';
      if (isH) { fill = 'var(--c-warn-bg)'; stroke = 'var(--c-warn)'; }
      svg.appendChild(E('rect', { x:x+2, y:by, width:bw-4, height:bh, rx:8, fill, stroke, 'stroke-width':1.8 }));
      svg.appendChild(E('text', { x:x+bw/2, y:by+bh/2+6, 'text-anchor':'middle', 'font-size':16, 'font-weight':800, fill:stroke }, m));
    });
    const hIdx = series.indexOf('H');
    const hX = bx + hIdx*bw + bw/2;
    svg.appendChild(E('path', { d:`M${bx} ${by-8} V${by-16} H${hX} V${by-8}`, fill:'none', stroke:'var(--accent)', 'stroke-width':2 }));
    svg.appendChild(E('text', { x:(bx+hX)/2, y:by-22, 'text-anchor':'middle', 'font-size':11.5, 'font-weight':800, fill:'var(--accent)' }, 'wypierają H₂ z HCl'));
    svg.appendChild(E('path', { d:`M${hX+bw/2} ${by-8} V${by-16} H${bx+series.length*bw} V${by-8}`, fill:'none', stroke:'var(--c-err)', 'stroke-width':2 }));
    svg.appendChild(E('text', { x:(hX+bw/2 + bx + series.length*bw)/2, y:by-22, 'text-anchor':'middle', 'font-size':11.5, 'font-weight':800, fill:'var(--c-err)' }, 'brak reakcji z HCl'));
    const mk = V.marker(svg);
    svg.appendChild(E('path', { d:`M${bx} 145 H${bx + series.length*bw - 4}`, fill:'none', stroke:'var(--accent)', 'stroke-width':2, 'marker-end':mk }));
    svg.appendChild(E('text', { x:(bx + bx + series.length*bw)/2, y:168, 'text-anchor':'middle', 'font-size':12, 'font-weight':700, fill:'var(--text-soft)' }, 'malejąca aktywność chemiczna metali →'));
    svg.appendChild(E('text', { x:20, y:190, 'font-size':11.5, fill:'var(--text-muted)' }, 'Uwaga: K, Na, Ca reagują z wodą. Pb z H₂SO₄ pasywuje się warstwą PbSO₄.'));
  }
});

/* --- 28. Algorytm decyzyjny reakcji --- */
/* [MARTWY KOD — nadpisany przez reaction-decision niżej (migracja 4). NIE KASOWAĆ: to schemat blokowy 3 pytań; aktywna wersja jest selektorem bez diagramu.] */
/* --- 29. Zobojętnianie --- */
defineView('neutralization', {
  title:'Zobojętnianie — wspólny model reakcji', tag:'AMB',
  hint:'Wybierz zapis reakcji. Równanie cząsteczkowe pochodzi z CHE.REACTION; zapis jonowy pokazuje sedno procesu.',
  foot:'Dla HCl + NaOH skrócone jonowo: H⁺ + OH⁻ → H₂O. Dane reakcji, bilans i obserwacja są centralne.',
  build(host) {
    host.innerHTML='';
    const LC=CHE.LESSON_CONTEXT;
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('neutralization',{pairs:[['HCl','NaOH']], reactionId:'hclNaOH'}):{reactionId:'hclNaOH'};
    const rid=opts.reactionId||'hclNaOH';
    /* Dane wyłącznie z silnika */
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

/* --- 30. Reaktor reakcji (MOTION) --- */
defineView('reactor', {
  title:'Reaktor — zlewka z reakcją kwasu', tag:'MOTION',
  hint:'Wybierz reakcję. Zlewka pokazuje zanikanie substratu, bąbelki gazu, osad lub zmianę barwy.',
  foot:'HNO₃ z Cu to jedyna reakcja, gdzie powstaje niebieski roztwór i brunatny gaz — bez H₂.',
  build(host) {
    host.innerHTML = '';
    const bar = document.createElement('div');
    bar.className = 'r'; bar.style.marginTop = '0';
    const cv = document.createElement('canvas');
    cv.dataset.h = 340;
    cv.style.background = 'var(--surface-soft)';
    cv.style.borderRadius = 'var(--r-sm)';
    const note = document.createElement('div');
    note.className = 'note';
    host.append(bar, cv, note);

    /* v0.33: dane wyglądu z GFX.rx (jedno źródło) */
    const RXM = {metal:'znHcl', oxide:'cuoHcl', base:'hclNaOH+php', carbonate:'caco3Hcl', agno3:'agno3Hcl', hno3cu:'cuHno3'};
    const S = {}; Object.keys(RXM).forEach(k => { const s = CHE.LAB.GFX.rx.get(RXM[k]); if (s) S[k] = { rx: s.rxKey || RXM[k], key: RXM[k], n: s.n }; });
    let cur = 'metal', t0 = null, tNow = 0;
    Object.keys(S).forEach(k => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = S[k].n;
      b.onclick = () => { cur = k; t0 = tNow; update(); };
      bar.appendChild(b);
    });
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'reset';
    resetBtn.onclick = () => { t0 = null; };
    bar.appendChild(resetBtn);

    function update() {
      [...bar.children].forEach(b => {
        if (b === resetBtn) return;
        b.classList.toggle('on', b.textContent === S[cur].n);
      });
      const rx=CHE.REACTION?.get(S[cur].rx);
      note.innerHTML = rx ? '<b>' + S[cur].n + '</b> · ' + CHE.REACTION.equation(S[cur].rx) + '<br>' + rx.observation + '<br><span class="muted">Warunek: '+rx.conditions+' · '+(rx.balance.ok?'✓ bilans OK':'✕ bilans NIEPOPRAWNY')+'</span>' : '<b>'+S[cur].n+'</b> · brak rekordu CHE.REACTION';
    }
    update();

    M.add(cv, (ctx, w, h, time) => {
      tNow = time;
      const Sc = S[cur];
      const p = t0 === null ? 0 : Math.min(1, Math.max(0, (time - t0) / 6));
      const bw = Math.min(w * 0.5, 300), bx = (w - bw) / 2, by = 40, bh = 210, G = CHE.LAB.GFX;
      G.canvasDraw(ctx, w, h, time, G.rx.state(Sc.key, p), {rect:{x:bx, y:by+18, w:bw, h:bh+20}, key:cur+'|'+t0});
      ctx.fillStyle = G.theme().text;
      ctx.font = '800 15px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(Sc.n, w/2, 26);
      ctx.font = '600 12px Inter, system-ui, sans-serif';
      ctx.fillStyle = G.theme().mut;
      ctx.fillText(t0 === null ? 'przed reakcją' : p < 1 ? 'reakcja trwa…' : 'po reakcji', w/2, 44);
    });
  }
});

/* --- 30B. Reaktor ulepszony v0.02: cząstki, hydratacja i czytelny stan --- */
defineView('reactor-enhanced', {
  title:'Reaktor — kwas, stężenie i stopień dysocjacji', tag:'MOTION',
  hint:'Wybierz kwas i stężenie. Zobacz osobno cząsteczki HA oraz jony H₃O⁺ i A⁻, a następnie przejdź przez proces krokami.',
  foot:'Model dydaktyczny: liczba cząstek jest umowna; dla kwasów słabych α jest wyznaczane z Ka i stężenia w przybliżeniu równowagowym.',
  build(host){
    host.innerHTML='';
    const bar=document.createElement('div'); bar.className='r';
    const systems=CHE.DATA.ACID_SYSTEMS||{};
    const LC=CHE.LESSON_CONTEXT;
    const allIds=Object.keys(systems);
    const opts=(LC&&LC.optionsFor)?LC.optionsFor('reactor-enhanced',{acids:allIds, scenarios:['metal','oxide','base','carbonate']}):{acids:allIds};
    let idList=opts.acids&&opts.acids.length?opts.acids.map(function(x){return String(x).replace(/[₀-₉]/g,'').replace('₃','3').replace('₂','2').replace('₄','4') }):allIds;
    idList=idList.map(function(id){
      if(systems[id]) return id;
      var found=allIds.find(function(k){return systems[k].formula===id||k===id.replace(/₃/g,'3')});
      return found||id;
    }).filter(function(id){return !!systems[id]});
    if(!idList.length) idList=['HCl','CH3COOH','HF','H2SO4'].filter(function(id){return !!systems[id]});
    const acids=idList.map(id=>{const a=systems[id];return {...a,name:a.formula+' — '+(a.strong?'mocny':'słaby'),Ka:a.Ka?.[0]??null,eq:a.strong?(a.formula+' + H₂O → H₃O⁺ + '+a.anion):(a.formula+' + H₂O ⇌ H₃O⁺ + '+a.anion)}});
    acids.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.textContent=a.name;b.dataset.id=a.id;if(!i)b.classList.add('on');bar.appendChild(b)});
    const ctl=document.createElement('div'); ctl.className='r';
    ctl.innerHTML='<label>Stężenie: <b class="concVal"></b></label><input class="conc" type="range" min="0.005" max="0.50" step="0.005" value="0.10"><button class="play">▶ Start</button><button class="step">▸ Krok</button><button class="reset">↺ Reset</button>';
    const cv=document.createElement('canvas');cv.dataset.h=380;cv.style.background='var(--surface-soft)';cv.style.borderRadius='var(--r-sm)';cv.style.touchAction='none';
    const metrics=document.createElement('div');metrics.className='metric-grid';
    const note=document.createElement('div');note.className='note';
    const eq=document.createElement('div');eq.className='eq-row';
    if(opts._lesson){const ctx=document.createElement('div');ctx.className='note';ctx.innerHTML='<b>Źródło:</b> CHE.DATA.ACID_SYSTEMS + CHE.CHEM/EQUILIBRIUM · filtr lekcji <b>'+opts._lesson+'</b>.';host.appendChild(ctx)}
    host.append(bar,ctl,cv,metrics,note,eq);
    let cur=acids[0],conc=.10,T=0,playing=false,last=0,raf=0;
    const slider=ctl.querySelector('.conc'), concVal=ctl.querySelector('.concVal'), play=ctl.querySelector('.play');
    function equilibrium(a,C){return a.Ka==null?CHE.CHEM.strongAcid(C):{...CHE.CHEM.weakAcid(C,a.Ka),pH:CHE.EQUILIBRIUM.weakAcidPH(C,a.Ka)};}
    function alphaAt(a,C){return equilibrium(a,C).alpha;}
    function pH(a,C){return equilibrium(a,C).pH;}
    function sync(){bar.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.id===cur.id));concVal.textContent=conc.toFixed(3).replace('.',',')+' mol/dm³';eq.innerHTML='<span class="a">'+cur.eq+'</span>';}
    function resize(){const r=cv.getBoundingClientRect();cv.width=Math.max(320,r.width)*(devicePixelRatio||1);cv.height=380*(devicePixelRatio||1);render();}
    function render(){
      const dpr=devicePixelRatio||1,w=cv.width/dpr,h=cv.height/dpr,ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      const a=alphaAt(cur,conc), shown=Math.min(1,a*T), N=Math.max(20,Math.min(54,Math.round(20+conc*70))), diss=Math.round(N*shown);
      const cx=w/2, top=66, bot=h-34, bx=Math.max(20,w*.08), bw=Math.min(w*.84,w-40);
      ctx.save();ctx.strokeStyle='#64748b';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(bx,top);ctx.lineTo(bx,bot-14);ctx.quadraticCurveTo(bx,bot,bx+14,bot);ctx.lineTo(bx+bw-14,bot);ctx.quadraticCurveTo(bx+bw,bot,bx+bw,bot-14);ctx.lineTo(bx+bw,top);ctx.stroke();
      ctx.fillStyle='rgba(125,180,220,.12)';ctx.fillRect(bx+3,top+40,bw-6,bot-top-43);
      ctx.fillStyle=CHE.LAB.GFX.theme().text;ctx.font='800 15px Inter,system-ui';ctx.textAlign='center';ctx.fillText(cur.name+' · '+conc.toFixed(3).replace('.',',')+' M',cx,24);
      ctx.font='600 11px Inter,system-ui';ctx.fillStyle='var(--text-muted)';ctx.fillText('Proces dysocjacji: '+Math.round(T*100)+'%',cx,43);
      for(let i=0;i<N;i++){
        const isIon=i<diss, phase=(i*2.399+T*5.5), gx=bx+18+((i*37)%100)/100*(bw-36), gy=top+62+((i*61)%100)/100*(bot-top-92);
        const targetX=isIon ? (bx+28+((i*47)%100)/100*(bw-56)) : gx;
        const x=gx+(targetX-gx)*Math.min(1,T), y=gy+Math.sin(phase+T*6)*2;
        if(isIon){
          ctx.beginPath();ctx.arc(x-4,y,4,0,Math.PI*2);ctx.fillStyle='#60a5fa';ctx.fill();ctx.strokeStyle='#2563eb';ctx.stroke();
          ctx.beginPath();ctx.arc(x+4,y,4,0,Math.PI*2);ctx.fillStyle='#f59e0b';ctx.fill();ctx.strokeStyle='#b45309';ctx.stroke();
          ctx.fillStyle='#0f172a';ctx.font='700 7px Inter,system-ui';ctx.fillText('H₃O⁺',x-4,y+14);ctx.fillText(cur.anion,x+4,y-8);
        } else {
          ctx.beginPath();ctx.arc(x,y,9,0,Math.PI*2);ctx.fillStyle='#cbd5e1';ctx.fill();ctx.strokeStyle='#64748b';ctx.stroke();ctx.fillStyle='#0f172a';ctx.font='700 8px Inter,system-ui';ctx.fillText(cur.id==='CH3COOH'?'HA':cur.id,x,y+3);
        }
      }
      metrics.innerHTML='<div><b>Stopień dysocjacji α</b><strong>'+ (a*100).toFixed(2).replace('.',',')+'%</strong></div><div><b>Teraz zdysocjowane</b><strong>'+diss+' / '+N+'</strong></div><div><b>pH ≈</b><strong>'+pH(cur,conc).toFixed(2).replace('.',',')+'</strong></div>';
      note.innerHTML='<b>'+ (T<1?'Co się dzieje?':'Stan końcowy') +'</b> '+(T<1?'W kolejnych krokach część HA przekazuje proton wodzie. Pojawiają się H₃O⁺ i anion A⁻.':'Dla kwasu mocnego model dochodzi do praktycznie pełnej dysocjacji; dla słabego pozostaje część HA.')+' <span class="muted">α opisuje udział cząsteczek, które uległy dysocjacji w stanie równowagi.</span>';
    }
    function step(){T=Math.min(1,T+.12);render();}
    bar.querySelectorAll('button').forEach(b=>b.onclick=()=>{cur=acids.find(a=>a.id===b.dataset.id);T=0;playing=false;play.textContent='▶ Start';sync();render()});
    slider.oninput=()=>{conc=+slider.value;T=0;playing=false;play.textContent='▶ Start';sync();render()};
    ctl.querySelector('.step').onclick=()=>step();
    play.onclick=()=>{if(T>=1)T=0;playing=!playing;play.textContent=playing?'⏸ Pauza':'▶ Start';};
    ctl.querySelector('.reset').onclick=()=>{T=0;playing=false;slider.value=.10;conc=.10;play.textContent='▶ Start';sync();render()};
    function loop(t){if(playing){if(!last)last=t;T=Math.min(1,T+(t-last)/1600);last=t;if(T>=1){playing=false;play.textContent='▶ Start'}}else last=0;render();raf=requestAnimationFrame(loop)}
    new ResizeObserver(resize).observe(cv);sync();resize();requestAnimationFrame(loop);
  }
});

/* --- 31. Kwaśne deszcze --- */
/* --- 32. Karty związków --- */
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

/* --- 33. Bezpieczeństwo --- */
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

/* --- 34. Grupa karboksylowa --- */
defineView('carboxyl', {
  title:'Grupa karboksylowa — który H jest kwaśny', tag:'AMB',
  hint:'W kwasach organicznych R–COOH tylko H z grupy karboksylowej oddaje proton.',
  foot:'R–COOH to wzór ogólny kwasów karboksylowych. Najprostszy: HCOOH (mrówkowy).',
  build(host) {
    V.molecule2D(host, { vb:[520, 300], mol: CHE.DATA.MOL2D.carboxyl });
  }
});

/* --- 35. Timeline historii --- */
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

/* --- 37. Bufor --- */
defineView('buffer', {
  title:'Bufor — wspólny model równowagi', tag:'AMB',
  hint:'Dodawanie H⁺ i OH⁻ zmienia stosunek A⁻/HA; pH liczy CHE.EQUILIBRIUM.',
  foot:'Model ilościowy korzysta z Hendersona–Hasselbalcha; przy [A⁻]=[HA] pH=pKa.',
  build(host) {
    host.innerHTML='';
    const LC=CHE.LESSON_CONTEXT;
    const sys=(CHE.DATA&&CHE.DATA.ACID_SYSTEMS&&CHE.DATA.ACID_SYSTEMS.CH3COOH)||{};
    let acid=1,base=1,pKa=(sys.pKa&&sys.pKa[0]!=null)?sys.pKa[0]:4.76;
    if(LC&&LC.get&&LC.get()){const ctx=document.createElement('div');ctx.className='note';ctx.style.marginBottom='8px';ctx.innerHTML='<b>Źródło:</b> CHE.EQUILIBRIUM (Henderson–Hasselbalch) · pKa domyślne z ACID_SYSTEMS.CH3COOH · kontekst <b>'+LC.get().code+'</b>.';host.appendChild(ctx)}
    const ctl=document.createElement('div');ctl.className='r';
    ctl.innerHTML='<button class="addA">+ H⁺</button><button class="addB">+ OH⁻</button><button class="reset">↺ Reset</button><label>pKa <input class="pk" type="number" min="0" max="14" step="0.01" value="'+pKa+'"></label>';
    const metrics=document.createElement('div');metrics.className='metric-grid';
    const note=document.createElement('div');note.className='note';
    const svgHost=document.createElement('div');
    function draw(){
      const pk=Number(ctl.querySelector('.pk').value);const ph=CHE.EQUILIBRIUM.bufferPH(pk,base,acid);
      metrics.innerHTML='<div><b>[HA]</b><strong>'+acid.toFixed(2)+'</strong></div><div><b>[A⁻]</b><strong>'+base.toFixed(2)+'</strong></div><div><b>pH</b><strong>'+ph.toFixed(2)+'</strong></div>';
      note.innerHTML='<b>Model:</b> pH = pKa + log([A⁻]/[HA]). Dodanie H⁺ zużywa A⁻, a OH⁻ zużywa HA. <b>Zakres orientacyjny:</b> pKa ± 1.';
      const svg=V.makeSvg(svgHost,[760,170]);const E=V.el;const ratio=Math.max(0,Math.min(1,base/(base+acid)));
      svg.appendChild(E('rect',{x:40,y:55,width:680,height:30,rx:15,fill:'var(--surface-soft)',stroke:'var(--border-strong)'}));
      svg.appendChild(E('rect',{x:40,y:55,width:680*ratio,height:30,rx:15,fill:'var(--accent)'}));
      svg.appendChild(E('text',{x:380,y:35,'text-anchor':'middle','font-size':14,'font-weight':800,fill:'var(--text)'},'udział A⁻ / HA = '+ratio.toFixed(2)));
    }
    ctl.querySelector('.addA').onclick=()=>{if(base>0)base=Math.max(0.01,base-0.1);acid+=0.1;draw()};
    ctl.querySelector('.addB').onclick=()=>{if(acid>0)acid=Math.max(0.01,acid-0.1);base+=0.1;draw()};
    ctl.querySelector('.reset').onclick=()=>{acid=1;base=1;draw()};ctl.querySelector('.pk').oninput=draw;
    host.append(ctl,metrics,svgHost,note);draw();
  }
});

/* --- 38. Łańcuch S/C/N --- */
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

/* --- 39. Termochemia --- */
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

/* --- 40. Kinetyka --- */


/* --- Rozkład form kwasu w zależności od pH (v0.01) · 2026-10-01 --- */
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
