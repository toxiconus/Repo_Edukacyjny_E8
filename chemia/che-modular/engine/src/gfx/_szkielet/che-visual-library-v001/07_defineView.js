

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
 
/*@@GFX widoki/kw-szereg-metali-v01@@*/
 
function rxCards(host,keys,height){var g=G(),grid=el('div');grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:10px';host.appendChild(grid);
 keys.forEach(function(k){var I=g.rx.info(k);if(!I)return;var c=el('div');c.style.cssText='border:1px solid var(--border,#d5dee6);border-radius:12px;padding:8px;min-width:0';c.appendChild(el('b',null,I.name));grid.appendChild(c);
  var m=g.rx.mount(c,k,{height:height||210,dur:6,auto:true});var bar=el('div','r');bar.style.marginTop='6px';c.appendChild(bar);btn(bar,'▶ powtórz',function(){m.play()});
  c.appendChild(el('div','note','<b>'+I.eq+'</b><br>'+(I.why||I.obs)+(I.teacher?'<br><b>Tylko pokaz nauczyciela.</b>':'')))})}
/*@@GFX widoki/kw-wlasciwosci-v01@@*/
 
/*@@GFX widoki/kw-doswiadczenia-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var METAL={Mg:{M:24.305,Ea:30,base:3.0,col:'metal-mg',rx:'mgHcl'},Zn:{M:65.38,Ea:45,base:1.0,col:'metal-zn',rx:'znHcl'},Fe:{M:55.845,Ea:55,base:.3,col:'metal-fe',rx:'feHcl'}};
var FORM={granulka:{S:1,shape:'granule',n:'granulki'},wiorki:{S:3,shape:'chips',n:'wiórki'},proszek:{S:8,shape:'powder',n:'proszek'}};
var R=8.314,COLS=['#2563eb','#dc2626','#16a34a','#9333ea'];
/*@@GFX widoki/kinetics-v01@@*/
})();

;

(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
/*@@GFX widoki/acid-rain-v01@@*/
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
/*@@GFX widoki/neutralization@@*/
/*@@GFX widoki/rownania-jonowe-v01@@*/
/*@@GFX widoki/tabela-rozpuszczalnosci-v01@@*/
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
/*@@GFX widoki/sole-doswiadczenia-v01@@*/
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
/*@@GFX widoki/kw-dysocjacja-v01@@*/
})();

; 
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var SUB='₀₁₂₃₄₅₆₇₈₉',pf=function(s){return String(s).replace(/([A-Za-z\)])(\d+)/g,function(m,a,n){return a+n.replace(/\d/g,function(d){return SUB[d]})})};
 
/*@@GFX widoki/kw-bufor-v01@@*/
 
var RM={HCl:'Cl',HBr:'Br',HI:'I',HF:'F',HNO3:'NO3',H2SO4:'SO4',H2SO3:'SO3',H2CO3:'CO3',H3PO4:'PO4',H2S:'S',CH3COOH:'CH3COO'};
var CATS=['Na','K','NH4','Mg','Ca','Ba','Al','Zn','Fe2','Fe3','Cu','Ag','Pb'];
/*@@GFX widoki/kw-reszty-v01@@*/
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

/*@@GFX widoki/fiz-elektryzowanie-v01@@*/

/*@@GFX widoki/fiz-elektroskop-v01@@*/

/*@@GFX widoki/fiz-coulomb-v01@@*/

/*@@GFX widoki/fiz-przewodniki-v01@@*/

/*@@GFX widoki/fiz-ladunek-v01@@*/
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

/*@@GFX widoki/n01-tlenki-v01@@*/

/*@@GFX widoki/n01-konstruktor-v01@@*/

var CATCOL={Cu:[96,150,220],Fe:[205,160,70],Cr:[110,170,110],Mn:[235,205,215],Ni:[140,200,140]};
/*@@GFX widoki/n01-reaktor-v01@@*/

/*@@GFX widoki/n01-trend-v01@@*/

var BURN={Mg:{rx:'mgO2',fx:'metal',metal:'Mg',prod:'MgO'},Fe:{rx:'feO2',fx:'metal',metal:'Fe',prod:'Fe3O4'},Na:{rx:'naO2',fx:'metal',metal:'Na',prod:'Na2O'},Cu:{rx:'cuO2',fx:'metal',metal:'Cu',prod:'CuO'},
 S:{rx:'sO2',fx:'flame',color:[70,100,255],prod:'SO2'},P:{rx:'pO2',fx:'flame',color:[255,250,235],smoke:1,prod:'P2O5'},H2:{rx:'h2O2',fx:'flame',fuel:'H2',prod:'H2O'},
 C:{rx:'cO2',inc:'cO2Inc',fx:'flame',color:[255,140,60],prod:'CO2',o2:1},CH4:{rx:'ch4O2',inc:'ch4O2Inc',soot:'ch4O2Soot',fx:'flame',fuel:'CH4',prod:'CO2',o2:1}};
/*@@GFX widoki/n01-spalanie-v01@@*/
})();

; 
(function(){
var C=window.CHE,V=C&&C.VIEW;if(!V||!V.define)return;
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var SUB='₀₁₂₃₄₅₆₇₈₉',pf=function(s){return String(s).replace(/\d/g,function(d){return SUB[d]})},fm=function(v,d){return isFinite(v)?(Math.round(v*Math.pow(10,d))/Math.pow(10,d)).toString().replace('.',','):'—'};
var GROUPS=[['tlenki (N01)',/O2$|O2Inc|H2o$|Decomp|O2Soot|cuoH2|cuoC|fe2o3|termit|Naoh|Hcl|H2so4|caoCo2|na2oCo2/],['wszystkie',/.*/]];
/*@@GFX widoki/stech-kalkulator-v01@@*/
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
/*@@GFX widoki/n02-wzory-v01@@*/

/*@@GFX widoki/n02-przeglad-v01@@*/

var MTYPES=[['tlenek zasadowy + woda','1. tlenek + woda'],['metal + woda','2. metal aktywny + woda'],['strącanie wodorotlenku','3. sól + zasada (strącanie)']];
function rxOfType(t){var RD=D().REACTION_DATA||{},R=D().REACTIONS||{},H=HY();return Object.keys(RD).filter(function(k){if(!R[k])return false;var ty=RD[k].type;if(ty===t)return R[k].products.some(function(p){return H.get(p.formula)||p.formula==='Ag2O'});if(t==='metal + woda'&&k==='naH2o')return true;if(t==='strącanie wodorotlenku'&&/^(cuso4Naoh|fecl3Naoh)$/.test(k))return true;return false})}
function specFor(k){var g=G();if(!g||!g.rx)return null;if(g.rx.get(k))return k;var l=g.rx.list(function(sp){return sp.rxKey===k});return l[0]||null}
function beaker(box,k,h){box.innerHTML='';var g=G();k=specFor(k)||k;if(!g||!g.rx||!g.rx.get(k)){box.innerHTML='<div class="note">Brak animacji dla tej reakcji — opis i równanie poniżej.</div>';return null}var m=g.rx.mount(box,k,{height:h||240,dur:6,auto:true});var b=el('div','r');var x=btn(b,'▶ powtórz',function(){m.play()});box.appendChild(b);return m}
function rxCard(k){var H=HY(),d=(D().REACTION_DATA||{})[k]||{},J=null;try{J=C.IONIC&&C.IONIC.equations(k)}catch(_){}
 return eqHtml(H.eq(k))+(J&&J.ionic&&J.net?'<div><b>Jonowo skrócone:</b> '+J.net+'</div>':'')+'<div class="note" style="margin-top:6px"><b>Warunki:</b> '+(d.conditions||'—')+'<br><b>Obserwacja:</b> '+(d.observation||'—')+(d.safety&&d.safety.length?'<br><b>BHP:</b> '+d.safety.join(' '):'')+(d.note?'<br><small>'+d.note+'</small>':'')+'<br><small>poziom: '+(d.level||'E8')+' · klucz silnika: '+k+'</small></div>'}
/*@@GFX widoki/n02-otrzymywanie-v01@@*/

/*@@GFX widoki/n02-stracanie-v01@@*/

/*@@GFX widoki/n02-zobojetnianie-v01@@*/

/*@@GFX widoki/n02-dysocjacja-v01@@*/

/*@@GFX widoki/n02-reaktor-v01@@*/
})();