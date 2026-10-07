<script id="che-consistency-v001">
/* ===== CHE.CONSISTENCY v1.0 — audyt spójności: silnik (CHE.DATA) ↔ Atlas ↔ lekcja N03 ↔ GFX/PHYS.
   Zasada: dane liczbowe żyją w silniku; Atlas i lekcje je pokazują (każde w swoim zakresie), a ten audyt wyłapuje rozjazdy.
   API: CHE.CONSISTENCY.audit() → {ok, checks:[{id,area,name,ok,detail}]}; widok 'che-spojnosc-v01'. ===== */
(function(){
const C=window.CHE=window.CHE||{};
const SUB='₀₁₂₃₄₅₆₇₈₉',ascii=s=>String(s||'').replace(/[₀-₉]/g,c=>SUB.indexOf(c)).replace(/[⁺⁻]/g,''),num=s=>parseFloat(String(s).replace('−','-').replace(',','.'));
function lessonHTML(id){try{const e=document.getElementById(id);return e?JSON.parse(e.textContent):''}catch(_){return ''}}
function audit(){const D=C.DATA||{},out=[],add=(id,area,name,ok,detail)=>out.push({id,area,name,ok:!!ok,detail:detail||''});
 const RP=D.REDOX_POTENTIALS||{},AS=D.ACID_SYSTEMS||{},SU=D.SUBSTANCES||{},P=C.PHYS,G=C.LAB&&C.LAB.GFX;
 /* 1. Atlas ↔ silnik: potencjały */
 if(typeof REDOX!=='undefined'){const bad=Object.keys(RP).filter(k=>REDOX[k]!==RP[k]);add('ATL-01','Atlas','potencjały E° Atlasu = CHE.DATA.REDOX_POTENTIALS',!bad.length,bad.join(', ')||Object.keys(RP).length+' par')}
 /* 2. Atlas ↔ silnik: masy atomowe i elektroujemność */
 if(typeof DB!=='undefined'&&Array.isArray(D.ELEMENTS_118)){const bm=[],be=[];D.ELEMENTS_118.forEach(e=>{const a=DB[e.s];if(!a)return;if(a.m!=null&&e.mass!=null&&Math.abs(a.m-e.mass)>0.01)bm.push(e.s+' '+a.m+'≠'+e.mass);if(a.en!=null&&e.en!=null&&Math.abs(a.en-e.en)>0.02)be.push(e.s+' '+a.en+'≠'+e.en)});
  add('ATL-02','Atlas','masy atomowe Atlasu = ELEMENTS_118',!bm.length,bm.slice(0,8).join('; ')||'zgodne');add('ATL-03','Atlas','elektroujemność Atlasu = ELEMENTS_118',!be.length,be.slice(0,8).join('; ')||'zgodne')}
 /* 3. szereg aktywności uporządkowany wg E° */
 const ser=(D.METAL_SERIES||[]).filter(s=>s!=='H'),ev=s=>{const k=Object.keys(RP).find(q=>q.split('/')[1]===s);return k?RP[k]:null},vals=ser.map(ev);
 const disorder=vals.map((v,i)=>i&&v!=null&&vals[i-1]!=null&&v<vals[i-1]-1e-9?ser[i-1]+'>'+ser[i]:null).filter(Boolean);
 add('ENG-01','Silnik','METAL_SERIES zgodny z E° (rosnąco)',!disorder.length,disorder.join(', ')||ser.join(' > '));
 add('ENG-02','Silnik','wszystkie metale szeregu mają E°',vals.every(v=>v!=null),ser.filter((s,i)=>vals[i]==null).join(', ')||'tak');
 /* 4. wskaźniki: DATA.INDICATORS ↔ CHE.COLORS */
 if(C.COLORS&&C.COLORS.list){const ci=C.COLORS.list('indicator'),bad=(D.INDICATORS||[]).filter(x=>{const r=ci.find(q=>q.name===x.name);return !r||!r.tr||Math.abs(r.tr[0][0]-x.lo)>.05||Math.abs(r.tr[0][1]-x.hi)>.05}).map(x=>x.name);
  add('ENG-03','Silnik','zakresy wskaźników DATA.INDICATORS = CHE.COLORS',!bad.length,bad.join(', ')||'zgodne')}
 /* 5. ACID_STRENGTH (α dla 0,1 M) ↔ Ka z ACID_SYSTEMS */
 const alpha=(Ka,c)=>{const x=(-Ka+Math.sqrt(Ka*Ka+4*Ka*c))/2;return x/c},badA=[];(D.ACID_STRENGTH||[]).forEach(r=>{const id=ascii(r.n).replace(/\s*\(.*\)/,'');const a=AS[id];if(!a||a.strong||!a.Ka||!a.Ka[0])return;const al=alpha(a.Ka[0],0.1);if(Math.abs(al-r.a)/al>0.15)badA.push(r.n+': '+r.a+' vs '+al.toFixed(3))});
 add('ENG-04','Silnik','ACID_STRENGTH α = α z Ka (c = 0,1 M)',!badA.length,badA.join('; ')||'zgodne');
 /* 6. każdy kwas z ACID_SYSTEMS ma rekord substancji */
 const noS=Object.keys(AS).filter(k=>!SU[k]&&!Object.values(SU).some(s=>s&&ascii(s.formula)===ascii(AS[k].formula)));add('ENG-05','Silnik','kwasy ACID_SYSTEMS mają rekord SUBSTANCES',!noS.length,noS.join(', ')||Object.keys(AS).length+' kwasów');
 /* 7. reakcje: zbilansowane i z danymi substancji */
 if(C.REACTION&&C.REACTION.audit){const a=C.REACTION.audit();add('ENG-06','Silnik','reakcje zbilansowane',!a.unbalanced.length,a.count+' reakcji');add('ENG-07','Silnik','reakcje mają rekordy substancji',!a.missingData.length,a.missingData.map(m=>m.id).join(', ')||'tak')}
 /* 8. PHYS ↔ silnik */
 if(P){const fb=['Li','Na','K','Ca','Sr','Ba','Cu'].filter(s=>{const c=C.COLORS&&C.COLORS.get&&C.COLORS.get('flame-'+s.toLowerCase());if(!c)return false;const h=c.hex.replace('#',''),rgb=[0,2,4].map(i=>parseInt(h.substr(i,2),16)),f=P.flameColor(s);return !f||rgb.some((v,i)=>v!==f[i])});
  add('PHY-01','PHYS','barwy płomienia PHYS = CHE.COLORS',!fb.length,fb.join(', ')||'zgodne');
  if(C.CHEM&&C.CHEM.molarMass){const bm=Object.keys(P.gases).filter(f=>{let m=null;try{const r=C.CHEM.molarMass(f);m=typeof r==='number'?r:r&&(r.value||r.M||r.molarMass)}catch(_){}return m&&Math.abs(m-P.molarMass(f))>0.05});add('PHY-02','PHYS','masy molowe gazów PHYS = CHE.CHEM',!bm.length,bm.join(', ')||'zgodne')}}
 /* 9. GFX.rx ↔ CHE.REACTION */
 if(G&&G.rx&&C.REACTION){const miss=G.rx.list(s=>!s.noRx&&!s.physical&&!s.qualitative&&s.src!=='CHE.COLORS').filter(k=>{const s=G.rx.get(k);return !C.REACTION.get(s.rxKey||k)});add('GFX-01','GFX','reakcje GFX.rx mają rekord w CHE.REACTION',!miss.length,miss.join(', ')||'wszystkie')}
 /* 9b. tabela rozpuszczalności ↔ reakcje strąceniowe ↔ CHE.COLORS */
 const IO=C.IONIC;if(IO&&C.REACTION){const RD=D.REACTION_DATA||{},bad=Object.keys(RD).filter(k=>/precipitation/.test(RD[k].type||'')&&!(D.REACTIONS[k]||{aliasOf:1}).aliasOf).filter(k=>!D.REACTIONS[k].products.some(p=>{const q=IO.solubility(p.formula);return q&&(q.s==='N'||q.s==='T')}));
  add('ENG-08','Silnik','reakcje strąceniowe mają produkt N/T w tabeli rozpuszczalności',!bad.length,bad.join(', ')||'zgodne');
  if(C.COLORS&&C.COLORS.list){const bp=[];C.COLORS.list('precipitate').forEach(r=>{const f=ascii(r.name).replace(/·.*$/,'').trim(),q=IO.solubility(f);if(q&&q.s==='R')bp.push(r.name)});add('ENG-09','Silnik','osady z CHE.COLORS nie są „R” w tabeli rozpuszczalności',!bp.length,bp.join(', ')||'zgodne')}
  const rt=[];D.SOLUBILITY_TABLE.cations.forEach(c=>D.SOLUBILITY_TABLE.anions.forEach(a=>{const k=IO.compound(c.id,a.id);if(!k)return;const p=IO.parseSalt(k.formula);if(!p||p.cid!==c.id||p.an!==a.id)rt.push(k.formula)}));add('ENG-11','Silnik','wzory soli z tabeli: budowa ↔ rozbiór (CHE.IONIC)',!rt.length,rt.slice(0,10).join(', ')||'wszystkie komórki');
  const ne=IO.equations('hclNaOH');add('ENG-10','Silnik','CHE.IONIC: HCl + NaOH → H⁺ + OH⁻ → H₂O',ne&&ne.net==='H⁺ + OH⁻ → H₂O',ne?ne.net:'brak')}
 /* 10. lekcja N03 ↔ silnik */
 const L=lessonHTML('che-kw-src');if(L){
  const tb=L.slice(L.indexOf('6.6 Stała dysocjacji'),L.indexOf('pH słabego kwasu'));const rows=[...tb.matchAll(/<td>([^<]+)<\/td><td>([^<]+)<\/td>/g)];const badP=[];
  rows.forEach(m=>{const id=ascii(m[1]).replace(/\s*\(.*\)/,'').trim(),a=AS[id]||(id==='kwas mlekowy'?AS.C3H6O3:null);if(!a)return;const lv=m[2].split('·').map(num).filter(isFinite);lv.forEach((v,i)=>{if(a.pKa[i]!=null&&Math.abs(a.pKa[i]-v)>0.02)badP.push(m[1]+' pKa'+(i+1)+' '+v+'≠'+a.pKa[i])})});
  add('LES-01','Lekcja N03','tabela pKa (6.6) = ACID_SYSTEMS',!badP.length,badP.join('; ')||rows.length+' wierszy');
  const ir=[...L.matchAll(/<tr><td>(Fenoloftaleina|Oranż metylowy|Błękit bromotymolowy)<\/td>(?:<td>[^<]*<\/td>){3}<td>([^<]+)<\/td>/g)],badI=[];
  ir.forEach(m=>{const x=(D.INDICATORS||[]).find(q=>q.name===m[1].toLowerCase());const r=m[2].match(/([\d,]+)\s*[–-]\s*([\d,]+)/);if(x&&r&&(Math.abs(num(r[1])-x.lo)>.05||Math.abs(num(r[2])-x.hi)>.05))badI.push(m[1])});
  add('LES-02','Lekcja N03','zakresy wskaźników (7.3) = DATA.INDICATORS',!badI.length,badI.join(', ')||ir.length+' wskaźników');
  const sm=L.match(/K &gt; Ca &gt;[^<]*Au|K > Ca >[^<]*Au/);const ls=sm?sm[0].replace(/&gt;/g,'>').split('>').map(s=>s.trim()):[];add('LES-03','Lekcja N03','szereg aktywności w lekcji = METAL_SERIES',ls.join(',')===(D.METAL_SERIES||[]).join(','),ls.join(' > '));
  const fm=L.match(/\['Kwasy mocne','([^']+)'\]/),strong=fm?fm[1].split(',').map(s=>ascii(s).trim()):[],eng=Object.keys(AS).filter(k=>AS[k].strong||AS[k].strongFirst);
  add('LES-04','Lekcja N03','„kwasy mocne” w lekcji = mocne w ACID_SYSTEMS',strong.length&&strong.every(s=>eng.indexOf(s)>=0)&&eng.every(s=>strong.indexOf(s)>=0),'lekcja: '+strong.join(', ')+' · silnik: '+eng.join(', '));
  if(IO){const n=IO.equations('hclNaOH');add('LES-06','Lekcja N03','zapis jonowy skrócony (9.3.1) = CHE.IONIC',L.indexOf('Jonowe skrócone: H⁺ + OH⁻ → H₂O')>=0&&n&&n.net==='H⁺ + OH⁻ → H₂O',n?n.net:'')}
  const kaHF=L.match(/HF[^<]{0,40}K<sub>a<\/sub> ≈ ([\d,]+)·10⁻⁴/);add('LES-05','Lekcja N03','Ka(HF) w zadaniu klinicznym = ACID_SYSTEMS',!kaHF||Math.abs(num(kaHF[1])*1e-4-AS.HF.Ka[0])/AS.HF.Ka[0]<.03,kaHF?kaHF[1]+'·10⁻⁴ vs '+AS.HF.Ka[0]:'brak')}
 /* 11. równania w lekcjach oznaczone data-rx = CHE.REACTION (N03, N04, kolejne) */
 if(C.REACTION){const PF=x=>String(x||'').replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,c=>SUB[c])),norm=x=>String(x).replace(/<[^>]+>/g,'').replace(/\([a-z]{1,3}\)/g,'').replace(/[↑↓]/g,'').replace(/->|⟶/g,'→').replace(/→\s*\([^)]*\)/g,'→').replace(/\s+/g,'');
  [['che-kw-src','N03'],['che-sole-src','N04']].forEach(([src,code])=>{const H=lessonHTML(src);if(!H)return;const bad=[];let n=0;for(const m of H.matchAll(/data-rx="([^"]+)">([^<]*(?:<[^/][^>]*>[^<]*<\/[^>]+>[^<]*)*)</g)){n++;const k=m[1];let e='';try{e=C.REACTION.equation(k)}catch(_){}if(!e){bad.push(k+' (brak w silniku)');continue}if(norm(m[2])!==norm(PF(e)))bad.push(k+': „'+m[2].replace(/<[^>]+>/g,'')+'” ≠ „'+PF(e)+'”')}
   add('LES-RX-'+code,'Lekcja '+code,'równania data-rx = CHE.REACTION',!bad.length,bad.slice(0,6).join('; ')||n+' równań')})}
  if(C.STECH&&C.STECH.audit){const a=C.STECH.audit();add('ENG-ST','Silnik','CHE.STOICH.audit (masy, objętości, limitujący)',a.ok,a.tests.filter(t=>!t[1]).map(t=>t[0]+': '+t[2]).join('; ')||a.tests.length+' testów')}
  if(C.VIZ_RETIRED){const R=C.VIZ_RETIRED,VV=C.VIEW&&C.VIEW.views,bad=Object.keys(R).filter(k=>{let t=R[k],n=0;while(R[t]&&n++<5)t=R[t];return VV&&!(VV.has(t)||(C.VISUAL_REGISTRY&&C.VISUAL_REGISTRY.groups||[]).some(g=>(g.items||[]).some(x=>x[0]===t)))});add('GFX-RET','Wizualizacje','wycofane widoki mają istniejącego następcę',!bad.length,bad.join(', ')||Object.keys(R).length+' wycofanych')}
 /* N04 Sole: wzory/nazwy (data-cmp ↔ CHE.IONIC.compound), R/T/N (data-sol ↔ tabela), odczyn (data-salt ↔ saltReaction), barwy osadów (data-ppt ↔ CHE.COLORS), modele */
 {const h4=lessonHTML('che-sole-src'),I=C.IONIC;if(h4&&I){const doc=new DOMParser().parseFromString(h4,'text/html'),t=n=>n.textContent.replace(/\s+/g,' ').trim(),bad=[];
  doc.querySelectorAll('[data-cmp]').forEach(n=>{const[c,a]=n.dataset.cmp.split(','),k=I.compound(c,a),td=n.cells;if(!k||t(td[2])!==k.pretty||t(td[3])!==k.name||t(td[4])!==k.sol)bad.push(n.dataset.cmp)});
  add('LES-N04-01','Lekcja N04','wzory, nazwy i R/T/N w tabeli §2 = CHE.IONIC.compound',!bad.length,bad.join(', ')||doc.querySelectorAll('[data-cmp]').length+' soli');
  const bs=[];doc.querySelectorAll('[data-sol]').forEach(n=>{const s=I.solubility(n.dataset.sol);if(!s||s.s!==t(n))bs.push(n.dataset.sol+': '+t(n)+' ≠ '+(s&&s.s))});
  add('LES-N04-02','Lekcja N04','litery R/T/N w lekcji = D.SOLUBILITY_TABLE',!bs.length,bs.join('; ')||doc.querySelectorAll('[data-sol]').length+' oznaczeń');
  const bh=[];doc.querySelectorAll('[data-salt]').forEach(n=>{const r=I.saltReaction(n.dataset.salt);if(!r||t(n.cells[2])!==r.odczyn||t(n.cells[3])!==r.equation)bh.push(n.dataset.salt)});
  add('LES-N04-03','Lekcja N04','odczyn i równania hydrolizy = CHE.IONIC.saltReaction',!bh.length,bh.join(', ')||doc.querySelectorAll('[data-salt]').length+' soli');
  const CD=(C.COLORS&&C.COLORS.data)||[],bp=[];doc.querySelectorAll('[data-ppt]').forEach(n=>{const r=CD.find(x=>x.id===n.dataset.ppt);if(!r||t(n.cells[1])!==r.state||t(n.cells[0])!==r.name)bp.push(n.dataset.ppt)});
  add('LES-N04-04','Lekcja N04','barwy osadów = CHE.COLORS',!bp.length,bp.join(', ')||doc.querySelectorAll('[data-ppt]').length+' osadów');
  const vv=[...doc.querySelectorAll('[data-che-lesson-viz]')].map(n=>n.dataset.cheLessonViz),bv=vv.filter(v=>!(C.VIEW&&C.VIEW.views&&C.VIEW.views.has(v))),dup=vv.filter((v,i)=>vv.indexOf(v)!==i),G=C.LAB&&C.LAB.GFX,bk=[...doc.querySelectorAll('.che-prac-go')].map(n=>n.dataset.k).filter(k=>!(G&&G.rx&&G.rx.get(k)));
  add('LES-N04-05','Lekcja N04','modele → istniejące widoki, bez powtórzeń; „Zobacz w zlewce” → GFX.rx',!bv.length&&!dup.length&&!bk.length,[...bv,...dup.map(d=>'dubel '+d),...bk.map(k=>'brak GFX '+k)].join(', ')||vv.length+' modeli, '+doc.querySelectorAll('.che-prac-go').length+' przycisków pracowni')}}
 /* N01 Tlenki: CHE.OXIDES ↔ CHE.REACTION ↔ SUBSTANCES */
 {const h1=lessonHTML('che-n01-src');if(h1){const doc=new DOMParser().parseFromString(h1,'text/html'),RX=(C.DATA||{}).REACTIONS||{},OX=(C.DATA||{}).OXIDES||{};
  const br=[];doc.querySelectorAll('[data-rx]').forEach(n=>{if(!RX[n.dataset.rx])br.push(n.dataset.rx)});add('LES-N01-01','Lekcja N01','równania data-rx istnieją w D.REACTIONS',!br.length,br.join(', ')||doc.querySelectorAll('[data-rx]').length+' równań');
  const bv=[];doc.querySelectorAll('[data-che-lesson-viz]').forEach(n=>{const v=n.dataset.cheLessonViz;if(!(C.VIEW&&C.VIEW.views&&C.VIEW.views.has(v)))bv.push(v)});add('LES-N01-02','Lekcja N01','przyciski modeli → istniejące widoki silnika',!bv.length,bv.join(', ')||doc.querySelectorAll('[data-che-lesson-viz]').length+' modeli');
  const bc=[];doc.querySelectorAll('[data-ox]').forEach(n=>{const o=OX[n.dataset.ox];if(!o||String(o.color).toLowerCase()!==String(n.dataset.oxCol).toLowerCase())bc.push(n.dataset.ox)});add('LES-N01-03','Lekcja N01','barwy tlenków w lekcji = CHE.DATA.OXIDES',!bc.length,bc.join(', ')||doc.querySelectorAll('[data-ox]').length+' tlenków')}}
 if(C.HYDROXIDES&&C.HYDROXIDES.audit){const a=C.HYDROXIDES.audit();add('ENG-HY','Silnik','CHE.HYDROXIDES.audit (wzory, rozpuszczalność, zobojętnianie, Ksp, spójność z N01)',a.ok,a.tests.filter(t=>!t[1]).map(t=>t[0]+(t[2]?': '+t[2]:'')).join('; ')||a.tests.length+' testów')}
 {const h2=lessonHTML('che-n02-src'),HY=C.HYDROXIDES;if(h2&&HY){const doc=new DOMParser().parseFromString(h2,'text/html'),RX=(C.DATA||{}).REACTIONS||{};
  const bs=[];doc.querySelectorAll('[data-hy]').forEach(n=>n.dataset.hy.split(',').forEach(f=>{const s=HY.solubility(f).s;if(s!==n.dataset.hySol)bs.push(f+': lekcja '+n.dataset.hySol+' ≠ silnik '+s)}));add('LES-N02-01','Lekcja N02','rozpuszczalność w tabeli 5.9 = D.SOLUBILITY_TABLE',!bs.length,bs.join('; ')||doc.querySelectorAll('[data-hy]').length+' wierszy');
  const br=[];doc.querySelectorAll('[data-rx]').forEach(n=>{if(!RX[n.dataset.rx])br.push(n.dataset.rx)});add('LES-N02-02','Lekcja N02','równania data-rx istnieją w D.REACTIONS',!br.length,br.join(', ')||doc.querySelectorAll('[data-rx]').length+' równań');
  const bh=[];doc.querySelectorAll('[data-hy-heat]').forEach(n=>{const k=n.dataset.hyHeat,v=parseFloat(n.cells[1].textContent.replace('−','-').replace(',','.'));if(!HY.SOLHEAT[k]||Math.abs(HY.SOLHEAT[k].dH-v)>.05)bh.push(k)});add('LES-N02-03','Lekcja N02','ΔH rozpuszczania = CHE.HYDROXIDES.SOLHEAT',!bh.length,bh.join(', ')||doc.querySelectorAll('[data-hy-heat]').length+' wartości');
  const bv=[];doc.querySelectorAll('[data-che-lesson-viz]').forEach(n=>{const v=n.dataset.cheLessonViz;if(!(C.VIEW&&C.VIEW.views&&C.VIEW.views.has(v)))bv.push(v)});add('LES-N02-04','Lekcja N02','przyciski modeli → istniejące widoki silnika',!bv.length,bv.join(', ')||doc.querySelectorAll('[data-che-lesson-viz]').length+' modeli')}}
 if(C.OXIDES&&C.OXIDES.audit){const a=C.OXIDES.audit();add('ENG-OX','Silnik','CHE.OXIDES.audit (reakcje, stopnie, konstruktor, trend)',a.ok,a.tests.filter(t=>!t[1]).map(t=>t[0]+(t[2]?': '+t[2]:'')).join('; ')||a.tests.length+' testów')}
 /* FIZYKA: silnik CHE.FIZ.ELEKTRO ↔ lekcja FIZ-01 */
 const FE=C.FIZ&&C.FIZ.ELEKTRO;if(FE){const a=FE.audit();add('FIZ-01','Silnik FIZ','CHE.FIZ.ELEKTRO.audit (stałe, szereg, modele)',a.ok,a.tests.filter(t=>!t[1]).map(t=>t[0]).join('; ')||a.tests.length+' testów');
  const h=lessonHTML('fiz-elektro-src');if(h){const doc=new DOMParser().parseFromString(h,'text/html'),SP='⁰¹²³⁴⁵⁶⁷⁸⁹',pn=t=>{const m=String(t).replace(/\s/g,'').match(/([\d,]+)(?:·10([⁻]?[⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/);if(!m)return NaN;let v=parseFloat(m[1].replace(',','.'));if(m[2]){const e=m[2].replace('⁻','-').split('').map(c=>c==='-'?'-':SP.indexOf(c)).join('');v*=Math.pow(10,+e)}return v};
   const ref={e:FE.CONST.e,k:FE.CONST.k,me:FE.CONST.me,'epsr-woda':FE.EPSR.woda.e},bad=[];doc.querySelectorAll('[data-fiz]').forEach(n=>{const r=ref[n.dataset.fiz],v=pn(n.textContent);if(!(r&&Math.abs(v-r)/r<0.02))bad.push(n.dataset.fiz+'='+n.textContent)});
   add('LES-FIZ-01-01','Lekcja FIZ-01','stałe w lekcji = CHE.FIZ.ELEKTRO.CONST',!bad.length,bad.join('; ')||doc.querySelectorAll('[data-fiz]').length+' wartości');
   const bt=[];doc.querySelectorAll('[data-fiz-tribo]').forEach(n=>{const[p,m]=n.dataset.fizTribo.split('>'),r=FE.rub(p,m);if(!r||r.plus!==p)bt.push(p+'>'+m)});const bs=[];doc.querySelectorAll('[data-fiz-share]').forEach(n=>{const v=n.dataset.fizShare.split(',').map(Number),r=+n.dataset.fizRes,o=C.PHYS.electro.contact(v);if(Math.abs(o[0]-r)>1e-9)bs.push(n.dataset.fizShare)});doc.querySelectorAll('[data-fiz-sharer]').forEach(n=>{const[a,b]=n.dataset.fizSharer.split('|'),o=C.PHYS.electro.contact(a.split(',').map(Number),b.split(',').map(Number)),r=n.dataset.fizRes.split(',').map(Number);if(o.some((x,i)=>Math.abs(x-r[i])>1e-9))bs.push(n.dataset.fizSharer)});add('LES-FIZ-01-05','Lekcja FIZ-01','przykłady dotyku i uziemienia = CHE.PHYS.electro.contact',!bs.length,bs.join('; ')||doc.querySelectorAll('[data-fiz-share],[data-fiz-sharer]').length+' przykładów');
   add('LES-FIZ-01-02','Lekcja FIZ-01','pary tryboelektryczne = FIZ.ELEKTRO.rub',!bt.length,bt.join(', ')||doc.querySelectorAll('[data-fiz-tribo]').length+' par');
   const br=[];doc.querySelectorAll('[data-fiz-rho]').forEach(n=>{const r=FE.RHO[n.dataset.fizRho],v=pn(n.textContent);if(!r||Math.abs(v-r.rho)/r.rho>0.05)br.push(n.dataset.fizRho)});add('LES-FIZ-01-03','Lekcja FIZ-01','tabela ρ = FIZ.ELEKTRO.RHO',!br.length,br.join(', ')||doc.querySelectorAll('[data-fiz-rho]').length+' materiałów');
   const VV=C.VIEW&&C.VIEW.views,miss=[...new Set([...doc.querySelectorAll('[data-che-open-viz]')].map(b=>b.dataset.cheOpenViz))].filter(id=>VV&&!(VV.has?VV.has(id):VV[id]));add('LES-FIZ-01-04','Lekcja FIZ-01','przyciski wizualizacji → istniejące widoki',!miss.length,miss.join(', ')||'wszystkie')}}
 return{ok:out.every(x=>x.ok),passed:out.filter(x=>x.ok).length,total:out.length,checks:out}}
C.CONSISTENCY={version:'1.0',audit};
try{const V=C.VIEW;if(V&&V.define)V.define('che-spojnosc-v01',{title:'Spójność danych: silnik ↔ Atlas ↔ lekcje ↔ GFX',tag:'AUDYT',hint:'Każdy wiersz porównuje dwa miejsca, które pokazują tę samą wielkość. Czerwony = rozjazd do poprawienia w silniku.',foot:'CHE.CONSISTENCY.audit()',
 build(host){const r=audit();host.innerHTML='<p><b>'+r.passed+'/'+r.total+'</b> zgodnych</p><div style="overflow-x:auto"><table style="width:100%;font-size:13px;border-collapse:collapse">'+r.checks.map(c=>'<tr style="border-bottom:1px solid var(--border,#e2e8f0)"><td style="padding:4px 6px">'+(c.ok?'✓':'✗')+'</td><td style="padding:4px 6px"><code>'+c.id+'</code></td><td style="padding:4px 6px">'+c.area+'</td><td style="padding:4px 6px">'+c.name+'</td><td style="padding:4px 6px;opacity:.75">'+c.detail+'</td></tr>').join('')+'</table></div>'}})}catch(_){}
setTimeout(()=>{try{const r=audit();if(!r.ok)console.warn('[CHE.CONSISTENCY] rozjazdy:',r.checks.filter(x=>!x.ok).map(x=>x.id+' '+x.detail).join(' | '))}catch(e){}},1500);
})();
</script>
