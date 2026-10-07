<script id="che-colors-v001">
/* CHE.COLORS v1.0 — baza kolorów silnika: wskaźniki pH, papierki, jony, osady, płomienie, przejścia barw w reakcjach.
   Źródło prawdy dla wizualizacji. Wizualizacje pytają: CHE.COLORS.at(id,pH) / .hex(id) / .transition(id,t) — bez własnych kolorów.
   Status danych: EDUCATIONAL_BASE (barwy orientacyjne, nie spektralne; referenceReady:false). */
(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const SRC={provenance:'EDUCATIONAL_BASE',referenceReady:false,note:'barwa orientacyjna, zależy od stężenia/temperatury/oświetlenia'};
const Y='#facc15',R='#dc2626',B='#2563eb';
/* --- rekordy ---
   universal: stops [[pH,hex]…] + labels [[pHmax,nazwa]…]; indicator: tr [[lo,hi,hexKwasowa,hexZasadowa,hexPośrednia?]…] + names;
   color (jon/osad/płomień/roztwór): hex + state; reaction: before/after (id rekordów) + obs */
const DB=[
 {id:'ind-uniwersalny',kind:'universal',name:'papierek uniwersalny',short:'uniwersalny',
  stops:[[0,'#e5262e'],[2,'#ef5a28'],[4,'#f6a21e'],[6,'#d7d93a'],[7,'#5cb85c'],[8,'#21a89a'],[10,'#2f7fc1'],[12,'#4a4bb5'],[14,'#6b2d8f']],
  labels:[[2.5,'czerwony'],[4.5,'pomarańczowy'],[6.5,'żółty'],[7.5,'zielony'],[9,'turkusowy'],[11,'niebieski'],[13,'granatowy'],[15,'fioletowy']]},
 {id:'ind-kapusta',kind:'universal',name:'sok z czerwonej kapusty',short:'czerwona kapusta',
  stops:[[0,'#dc2626'],[2,'#e11d48'],[4,'#c026d3'],[6,'#8b5cf6'],[7,'#6d5bd0'],[8,'#3b82f6'],[9,'#14b8a6'],[10,'#22c55e'],[12,'#eab308'],[14,'#facc15']],
  labels:[[3,'czerwony'],[5,'różowofioletowy'],[6.5,'fioletowy'],[7.5,'niebieskofioletowy'],[8.5,'niebieski'],[9.5,'niebieskozielony'],[11,'zielony'],[15,'żółty']]},
 {id:'ind-oranz-metylowy',kind:'indicator',name:'oranż metylowy',short:'oranż metylowy',tr:[[3.1,4.4,R,Y]],names:['czerwony','żółty']},
 {id:'ind-czerwien-metylowa',kind:'indicator',name:'czerwień metylowa',short:'czerwień metylowa',tr:[[4.4,6.2,R,Y,'#f97316']],names:['czerwony','żółty']},
 {id:'ind-lakmus',kind:'indicator',name:'lakmus',short:'lakmus',tr:[[4.5,8.3,R,B,'#7c3aed']],names:['czerwony','niebieski']},
 {id:'ind-bbt',kind:'indicator',name:'błękit bromotymolowy',short:'błękit bromotymol.',tr:[[6.0,7.6,Y,B,'#4d9a45']],names:['żółty','niebieski']},
 {id:'ind-czerwien-fenolowa',kind:'indicator',name:'czerwień fenolowa',short:'czerwień fenolowa',tr:[[6.8,8.4,Y,R,'#f97316']],names:['żółty','czerwony']},
 {id:'ind-fenoloftaleina',kind:'indicator',name:'fenoloftaleina',short:'fenoloftaleina',tr:[[8.2,10.0,'transparent','#db2777']],names:['bezbarwny','malinowy']},
 {id:'ind-zolcien-alizarynowa',kind:'indicator',name:'żółcień alizarynowa R',short:'żółcień alizar. R',tr:[[10.1,12.0,Y,'#9f1239']],names:['żółty','czerwonobrunatny']},
 /* roztwór bazowy */
 {id:'sol-water',kind:'solution',name:'woda / roztwór bezbarwny',hex:'#e8f2fa',state:'bezbarwny'},
 /* jony w roztworze wodnym */
 {id:'ion-cu2',kind:'ion',name:'Cu²⁺(aq)',hex:'#3b82c4',state:'niebieski'},
 {id:'ion-fe2',kind:'ion',name:'Fe²⁺(aq)',hex:'#a7c9a0',state:'bladozielony'},
 {id:'ion-fe3',kind:'ion',name:'Fe³⁺(aq)',hex:'#d9a441',state:'żółtobrunatny'},
 {id:'ion-ni2',kind:'ion',name:'Ni²⁺(aq)',hex:'#5fae7a',state:'zielony'},
 {id:'ion-co2',kind:'ion',name:'Co²⁺(aq)',hex:'#e58fa6',state:'różowy'},
 {id:'ion-cr3',kind:'ion',name:'Cr³⁺(aq)',hex:'#4a8f5a',state:'zielony'},
 {id:'ion-mn2',kind:'ion',name:'Mn²⁺(aq)',hex:'#f3dfe3',state:'bladoróżowy'},
 {id:'ion-mno4',kind:'ion',name:'MnO₄⁻(aq)',hex:'#7a1fa2',state:'fioletowy'},
 {id:'ion-cr2o7',kind:'ion',name:'Cr₂O₇²⁻(aq)',hex:'#f08a24',state:'pomarańczowy'},
 {id:'ion-cro4',kind:'ion',name:'CrO₄²⁻(aq)',hex:'#e8d21f',state:'żółty'},
 {id:'sol-i2',kind:'solution',name:'I₂(aq) — woda jodowa',hex:'#b45309',state:'brunatny'},
 /* osady */
 {id:'ppt-cu-oh-2',kind:'precipitate',name:'Cu(OH)₂',hex:'#4fa3e0',state:'galaretowaty, niebieski'},
 {id:'ppt-fe-oh-2',kind:'precipitate',name:'Fe(OH)₂',hex:'#9db79a',state:'zielonkawy, szybko brunatnieje'},
 {id:'ppt-fe-oh-3',kind:'precipitate',name:'Fe(OH)₃',hex:'#a0522d',state:'rdzawobrunatny'},
 {id:'ppt-al-oh-3',kind:'precipitate',name:'Al(OH)₃',hex:'#f5f5f5',state:'biały, galaretowaty'},
 {id:'ppt-zn-oh-2',kind:'precipitate',name:'Zn(OH)₂',hex:'#f5f5f5',state:'biały'},
 {id:'ppt-agcl',kind:'precipitate',name:'AgCl',hex:'#f8fafc',state:'biały, serowaty'},
 {id:'ppt-agbr',kind:'precipitate',name:'AgBr',hex:'#f3ecc0',state:'kremowy'},
 {id:'ppt-agi',kind:'precipitate',name:'AgI',hex:'#f2e04a',state:'żółty'},
 {id:'ppt-baso4',kind:'precipitate',name:'BaSO₄',hex:'#f8fafc',state:'biały'},
 {id:'ppt-caco3',kind:'precipitate',name:'CaCO₃',hex:'#f8fafc',state:'biały'},
 {id:'ppt-pbi2',kind:'precipitate',name:'PbI₂',hex:'#f5d90a',state:'żółty'},
 {id:'ppt-cus',kind:'precipitate',name:'CuS',hex:'#1f1f1f',state:'czarny'},
 {id:'ppt-ag2cro4',kind:'precipitate',name:'Ag₂CrO₄',hex:'#a3341f',state:'ceglastoczerwony'},
 /* v1.1: metale i ciała stałe, dodatkowe osady, reakcje z osadami/wypieraniem */
 {"id": "metal-fe", "kind": "metal", "name": "Fe (ciało stałe)", "hex": "#8b8f94", "state": "szary"},
 {"id": "metal-cu", "kind": "metal", "name": "Cu (ciało stałe)", "hex": "#b87333", "state": "czerwonobrunatny (miedziany)"},
 {"id": "metal-zn", "kind": "metal", "name": "Zn (ciało stałe)", "hex": "#9aa7b3", "state": "niebieskoszary"},
 {"id": "metal-mg", "kind": "metal", "name": "Mg (ciało stałe)", "hex": "#d9dde2", "state": "srebrzystobiały"},
 {"id": "metal-al", "kind": "metal", "name": "Al (ciało stałe)", "hex": "#c8ced4", "state": "srebrzystoszary (pokryty tlenkiem)"},
 {"id": "metal-ag", "kind": "metal", "name": "Ag (ciało stałe)", "hex": "#dfe3e8", "state": "srebrzysty"},
 {"id": "metal-au", "kind": "metal", "name": "Au (ciało stałe)", "hex": "#e6b422", "state": "złoty"},
 {"id": "metal-pb", "kind": "metal", "name": "Pb (ciało stałe)", "hex": "#6b7480", "state": "szaroniebieski"},
 {"id": "metal-sn", "kind": "metal", "name": "Sn (ciało stałe)", "hex": "#b7bcc2", "state": "srebrzystoszary"},
 {"id": "metal-na", "kind": "metal", "name": "Na (ciało stałe)", "hex": "#cfd3d8", "state": "srebrzystobiały, miękki, szybko matowieje"},
 {"id": "metal-k", "kind": "metal", "name": "K (ciało stałe)", "hex": "#c9ccd1", "state": "srebrzystobiały, miękki, szybko matowieje"},
 {"id": "metal-ca", "kind": "metal", "name": "Ca (ciało stałe)", "hex": "#c7cbd0", "state": "srebrzystoszary"},
 {"id": "metal-ni", "kind": "metal", "name": "Ni (ciało stałe)", "hex": "#a8adb2", "state": "srebrzystoszary"},
 {"id": "metal-cr", "kind": "metal", "name": "Cr (ciało stałe)", "hex": "#aab0b6", "state": "srebrzystoszary, błyszczący"},
 {"id": "metal-mn", "kind": "metal", "name": "Mn (ciało stałe)", "hex": "#9a9ea3", "state": "szary"},
 {"id": "metal-hg", "kind": "metal", "name": "Hg (ciało stałe)", "hex": "#c4c8cc", "state": "ciekły, srebrzysty"},
 {"id": "solid-cuo", "kind": "solid", "name": "CuO", "hex": "#1c1c1c", "state": "czarny"},
 {"id": "solid-cu2o", "kind": "solid", "name": "Cu₂O", "hex": "#b5301f", "state": "ceglastoczerwony"},
 {"id": "solid-mno2", "kind": "solid", "name": "MnO₂", "hex": "#3b2f2a", "state": "czarnobrunatny"},
 {"id": "solid-s", "kind": "solid", "name": "S (siarka)", "hex": "#f2e24a", "state": "żółty"},
 {"id": "solid-i2", "kind": "solid", "name": "I₂ (kryształy)", "hex": "#4b3b6b", "state": "ciemnofioletowy, połysk"},
 {"id": "solid-c", "kind": "solid", "name": "C (węgiel)", "hex": "#222222", "state": "czarny"},
 {"id": "ppt-mg-oh-2", "kind": "precipitate", "name": "Mg(OH)₂", "hex": "#f5f5f5", "state": "biały"},
 {"id": "ppt-ni-oh-2", "kind": "precipitate", "name": "Ni(OH)₂", "hex": "#7fc97f", "state": "jasnozielony"},
 {"id": "ppt-co-oh-2", "kind": "precipitate", "name": "Co(OH)₂", "hex": "#8a9fd8", "state": "niebieski, przechodzi w różowy"},
 {"id": "ppt-mn-oh-2", "kind": "precipitate", "name": "Mn(OH)₂", "hex": "#f3ece6", "state": "biały, na powietrzu brunatnieje"},
 {"id": "ppt-cr-oh-3", "kind": "precipitate", "name": "Cr(OH)₃", "hex": "#8aa88a", "state": "szarozielony"},
 {"id": "ppt-pb-oh-2", "kind": "precipitate", "name": "Pb(OH)₂", "hex": "#f5f5f5", "state": "biały"},
 {"id": "ppt-mgco3", "kind": "precipitate", "name": "MgCO₃", "hex": "#f8fafc", "state": "biały"},
 {"id": "ppt-cuco3", "kind": "precipitate", "name": "CuCO₃·Cu(OH)₂", "hex": "#5fb59a", "state": "zielononiebieski (zasadowy węglan)"},
 {"id": "ppt-ag2co3", "kind": "precipitate", "name": "Ag₂CO₃", "hex": "#e8d98a", "state": "żółtawy"},
 {"id": "ppt-pbcl2", "kind": "precipitate", "name": "PbCl₂", "hex": "#f8fafc", "state": "biały, krystaliczny"},
 {"id": "ppt-pbso4", "kind": "precipitate", "name": "PbSO₄", "hex": "#f8fafc", "state": "biały"},
 {"id": "ppt-caso4", "kind": "precipitate", "name": "CaSO₄", "hex": "#f8fafc", "state": "biały, słabo rozpuszczalny"},
 {"id": "ppt-bacro4", "kind": "precipitate", "name": "BaCrO₄", "hex": "#e8d21f", "state": "żółty"},
 {"id": "ppt-pbcro4", "kind": "precipitate", "name": "PbCrO₄", "hex": "#f5c400", "state": "jaskrawożółty"},
 {"id": "ppt-ag3po4", "kind": "precipitate", "name": "Ag₃PO₄", "hex": "#f2d633", "state": "żółty"},
 {"id": "ppt-ca3po4-2", "kind": "precipitate", "name": "Ca₃(PO₄)₂", "hex": "#f8fafc", "state": "biały"},
 {"id": "ppt-zns", "kind": "precipitate", "name": "ZnS", "hex": "#f5f5f5", "state": "biały"},
 {"id": "ppt-pbs", "kind": "precipitate", "name": "PbS", "hex": "#1c1c1c", "state": "czarny"},
 {"id": "ppt-ag2s", "kind": "precipitate", "name": "Ag₂S", "hex": "#1c1c1c", "state": "czarny"},
 {"id": "ppt-fes", "kind": "precipitate", "name": "FeS", "hex": "#222222", "state": "czarny"},
 {"id": "ppt-cds", "kind": "precipitate", "name": "CdS", "hex": "#f6c500", "state": "żółty"},
 {"id": "ppt-mns", "kind": "precipitate", "name": "MnS", "hex": "#e8b4b8", "state": "cielistoróżowy"},
 {"id": "ppt-sns", "kind": "precipitate", "name": "SnS", "hex": "#8b5a2b", "state": "brunatny"},
 {"id": "ppt-hgs", "kind": "precipitate", "name": "HgS", "hex": "#2a2a2a", "state": "czarny (forma czerwona: cynober)"},
 {"id": "rx-zn-cuso4", "kind": "reaction", "name": "Zn + CuSO₄", "before": "ion-cu2", "after": "sol-water", "obs": "niebieski roztwór odbarwia się; na cynku osadza się czerwonobrunatna miedź", "solidBefore": "metal-zn", "solidAfter": "metal-cu"},
 {"id": "rx-fe-cuso4", "kind": "reaction", "name": "Fe + CuSO₄", "before": "ion-cu2", "after": "ion-fe2", "obs": "niebieski roztwór blednie do bladozielonego; na żelazie miedziany nalot", "solidBefore": "metal-fe", "solidAfter": "metal-cu"},
 {"id": "rx-cu-agno3", "kind": "reaction", "name": "Cu + AgNO₃", "before": "sol-water", "after": "ion-cu2", "obs": "roztwór niebieszczeje; na miedzi srebrzyste kryształki Ag", "solidBefore": "metal-cu", "solidAfter": "metal-ag"},
 {"id": "rx-pb-s", "kind": "reaction", "name": "Pb(NO₃)₂ + Na₂S", "before": "sol-water", "after": "ppt-pbs", "obs": "bezbarwny roztwór → czarny osad"},
 {"id": "rx-cu-s", "kind": "reaction", "name": "CuSO₄ + Na₂S", "before": "ion-cu2", "after": "ppt-cus", "obs": "niebieski roztwór → czarny osad"},
 {"id": "rx-cd-s", "kind": "reaction", "name": "CdSO₄ + Na₂S", "before": "sol-water", "after": "ppt-cds", "obs": "bezbarwny roztwór → żółty osad"},
 {"id": "rx-zn-naoh", "kind": "reaction", "name": "ZnSO₄ + NaOH", "before": "sol-water", "after": "ppt-zn-oh-2", "obs": "biały osad, rozpuszcza się w nadmiarze NaOH"},
 {"id": "rx-ni-naoh", "kind": "reaction", "name": "NiSO₄ + NaOH", "before": "ion-ni2", "after": "ppt-ni-oh-2", "obs": "zielony roztwór → jasnozielony osad"},
 {"id": "rx-ba-so4", "kind": "reaction", "name": "BaCl₂ + H₂SO₄", "before": "sol-water", "after": "ppt-baso4", "obs": "biały osad nierozpuszczalny w kwasach"},
 {"id": "rx-ca-co2", "kind": "reaction", "name": "Ca(OH)₂ + CO₂", "before": "sol-water", "after": "ppt-caco3", "obs": "klarowna woda wapienna mętnieje (biały osad)"},
 {"id": "rx-ag-po4", "kind": "reaction", "name": "AgNO₃ + Na₃PO₄", "before": "sol-water", "after": "ppt-ag3po4", "obs": "bezbarwny roztwór → żółty osad"},
 {"id": "rx-pb-cro4", "kind": "reaction", "name": "Pb(NO₃)₂ + K₂CrO₄", "before": "ion-cro4", "after": "ppt-pbcro4", "obs": "żółty roztwór → jaskrawożółty osad"},
 {"id":"gas-no2","kind":"gas","name":"NO₂","hex":"#92400e","state":"brunatny, toksyczny"},
 {"id":"gas-colorless","kind":"gas","name":"gaz bezbarwny (H₂, CO₂ — pęcherzyki)","hex":"#64748b","state":"bezbarwny; pęcherzyki rysowane umownym szarym"},
 /* barwy płomienia (emisja) */
 {id:'flame-li',kind:'flame',name:'Li',hex:'#e11d48',state:'karminowy'},
 {id:'flame-na',kind:'flame',name:'Na',hex:'#ffb300',state:'żółty'},
 {id:'flame-k',kind:'flame',name:'K',hex:'#b388ff',state:'fioletowy'},
 {id:'flame-ca',kind:'flame',name:'Ca',hex:'#ea580c',state:'ceglastoczerwony'},
 {id:'flame-sr',kind:'flame',name:'Sr',hex:'#dc2626',state:'czerwony'},
 {id:'flame-ba',kind:'flame',name:'Ba',hex:'#a3e635',state:'żółtozielony'},
 {id:'flame-cu',kind:'flame',name:'Cu',hex:'#22c55e',state:'zielony'},
 /* przejścia barw w reakcjach: before → after */
 {id:'rx-cu-naoh',kind:'reaction',name:'CuSO₄ + NaOH',before:'ion-cu2',after:'ppt-cu-oh-2',obs:'niebieski roztwór → niebieski galaretowaty osad'},
 {id:'rx-fe3-naoh',kind:'reaction',name:'FeCl₃ + NaOH',before:'ion-fe3',after:'ppt-fe-oh-3',obs:'żółtobrunatny roztwór → rdzawy osad'},
 {id:'rx-ag-cl',kind:'reaction',name:'AgNO₃ + NaCl',before:'sol-water',after:'ppt-agcl',obs:'bezbarwny roztwór → biały serowaty osad'},
 {id:'rx-ag-i',kind:'reaction',name:'AgNO₃ + KI',before:'sol-water',after:'ppt-agi',obs:'bezbarwny roztwór → żółty osad'},
 {id:'rx-pb-i',kind:'reaction',name:'Pb(NO₃)₂ + KI',before:'sol-water',after:'ppt-pbi2',obs:'bezbarwny roztwór → żółty osad'},
 {id:'rx-mno4-red',kind:'reaction',name:'MnO₄⁻ + redukcja (H⁺)',before:'ion-mno4',after:'ion-mn2',obs:'fioletowy → prawie bezbarwny'},
 {id:'rx-cr2o7-cro4',kind:'reaction',name:'Cr₂O₇²⁻ + OH⁻',before:'ion-cr2o7',after:'ion-cro4',obs:'pomarańczowy → żółty'}
].map(r=>Object.assign({},SRC,r));
const byId=new Map(DB.map(r=>[r.id,r]));
/* --- kolor --- */
const rgb=h=>{if(Array.isArray(h))return h.slice();if(typeof h!=='string'||h[0]!=='#')return rgb(byId.get('sol-water').hex);let s=h.slice(1);if(s.length===3)s=s.split('').map(c=>c+c).join('');return [0,2,4].map(i=>parseInt(s.substr(i,2),16))};
const mix=(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*t));
const css=a=>'rgb('+a.join(',')+')';
const get=id=>byId.get(id)||null;
const rec=x=>typeof x==='string'?get(x):x;
function at(id,p){const r=rec(id);if(!r)return null;
 if(r.stops){const s=r.stops;if(p<=s[0][0])return rgb(s[0][1]);for(let i=1;i<s.length;i++)if(p<=s[i][0]){const a=s[i-1],b=s[i];return mix(rgb(a[1]),rgb(b[1]),(p-a[0])/(b[0]-a[0]))}return rgb(s[s.length-1][1])}
 if(r.tr){let last=rgb(r.tr[0][2]);for(const t of r.tr){const F=rgb(t[2]),T=rgb(t[3]);if(p<=t[0])return F;if(p<t[1]){const x=(p-t[0])/(t[1]-t[0]);if(t[4]){const M=rgb(t[4]);return x<.5?mix(F,M,x*2):mix(M,T,(x-.5)*2)}return mix(F,T,x)}last=T}return last}
 return rgb(r.hex)}
function state(id,p){const r=rec(id);if(!r)return null;
 if(r.stops){const l=r.labels.find(x=>p<x[0])||r.labels[r.labels.length-1];return {label:l[1],kind:'cont'}}
 if(r.tr){for(let k=0;k<r.tr.length;k++){if(p<r.tr[k][0])return {label:r.names[k],kind:'plateau'};if(p<=r.tr[k][1])return {label:'barwa pośrednia (zmiana barwy)',kind:'ramp'}}return {label:r.names[r.tr.length],kind:'plateau'}}
 return {label:r.state||'',kind:'static'}}
function gradient(id,lo=0,hi=14){const r=rec(id);if(!r)return '';const vs=new Set([lo,hi]);for(let k=lo*2;k<=hi*2;k++)vs.add(k/2);if(r.tr)r.tr.forEach(t=>{vs.add(t[0]);vs.add(t[1])});
 return 'linear-gradient(90deg,'+[...vs].sort((a,b)=>a-b).map(v=>css(at(r,v))+' '+((v-lo)/(hi-lo)*100).toFixed(2)+'%').join(',')+')'}
function transition(id,t){const r=get(id);if(!r||r.kind!=='reaction')return null;const a=at(r.before),b=at(r.after);return mix(a,b,Math.max(0,Math.min(1,t)))}
/* adapter kształtu używanego dotąd przez panel pH (n/stops/lab/tr/names) */
const legacy=id=>{const r=get(id);if(!r)return null;return r.stops?{id:r.id,n:r.name,stops:r.stops,lab:r.labels}:{id:r.id,n:r.name,tr:r.tr,names:r.names}};
function register(r){if(!r||!r.id||!r.kind)return {ok:false,error:'id i kind wymagane'};if(byId.has(r.id))return {ok:false,error:'duplikat id: '+r.id};
 const n=Object.assign({},SRC,r);DB.push(n);byId.set(n.id,n);return {ok:true,value:n}}
function audit(){const bad=[];const okHex=h=>h==='transparent'||/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(h);
 DB.forEach(r=>{const hs=[];if(r.stops){hs.push(...r.stops.map(x=>x[1]));if(r.stops.some((x,i)=>i&&x[0]<=r.stops[i-1][0]))bad.push(r.id+': stops nie rosną')}
  else if(r.tr){r.tr.forEach(t=>{hs.push(t[2],t[3]);if(t[4])hs.push(t[4]);if(!(t[0]<t[1]))bad.push(r.id+': lo>=hi')});if(r.names.length!==r.tr.length+1)bad.push(r.id+': names≠tr+1')}
  else if(r.kind==='reaction'){if(!get(r.before)||!get(r.after))bad.push(r.id+': brak before/after');['solidBefore','solidAfter'].forEach(k=>{if(r[k]&&!get(r[k]))bad.push(r.id+': brak '+k)})}
  else hs.push(r.hex);
  hs.forEach(h=>{if(!okHex(h))bad.push(r.id+': zły kolor '+h)})});
 const kinds={};DB.forEach(r=>kinds[r.kind]=(kinds[r.kind]||0)+1);
 return {version:'1.2',records:DB.length,kinds,invalid:bad,referenceReady:false,policy:'EDUCATIONAL_BASE'}}
function regression(){const a=audit();return [
 {id:'COL-001',name:'baza kolorów bez błędów',ok:a.invalid.length===0,detail:a.invalid.join('; ')||String(a.records)+' rekordów'},
 {id:'COL-002',name:'lakmus pH 2 czerwony, pH 11 niebieski',ok:at('ind-lakmus',2)[0]>200&&at('ind-lakmus',11)[2]>200},
 {id:'COL-003',name:'fenoloftaleina bezbarwna w pH 7',ok:state('ind-fenoloftaleina',7).label==='bezbarwny'},
 {id:'COL-004',name:'przejście reakcji t=0 i t=1',ok:transition('rx-cu-naoh',0).join()===at('ion-cu2').join()&&transition('rx-cu-naoh',1).join()===at('ppt-cu-oh-2').join()},
 {id:'COL-005',name:'miedź czerwonawa, srebro jasne',ok:(c=>c[0]>c[1]&&c[1]>c[2])(at('metal-cu'))&&at('metal-ag').every(v=>v>200)},
 {id:'COL-006',name:'siarczki czarne (PbS, CuS)',ok:at('ppt-pbs').every(v=>v<60)&&at('ppt-cus').every(v=>v<60)},
 {id:'COL-007',name:'rekordy metal/solid/precipitate mają state',ok:DB.filter(r=>['metal','solid','precipitate'].includes(r.kind)).every(r=>!!r.state)}]}
const API={version:'1.2',data:DB,get,list:k=>{const ks=[].concat(k||[]);return ks.length?DB.filter(r=>ks.includes(r.kind)):DB.slice()},at,rgb,css,mix,state,gradient,transition,legacy,register,audit,regression,
 hex:id=>{const r=get(id);return r&&r.hex||null},water:rgb(byId.get('sol-water').hex)};
API.consumers=['ph-indicators-v03','titration-merged','ind-lab','beaker-prediction-enhanced','four-reactions','reakcje-kwasu-v03'];C.COLORS=API;D.COLOR_DB=DB;
/* D.INDICATORS (stary kontrakt) — kolory wyprowadzone z bazy, nie osobne */
/* v0.33: D.INDICATORS jest zamrożone (deepFreeze) — budujemy nową, zamrożoną kopię z barwami z bazy */if(Array.isArray(D.INDICATORS))D.INDICATORS=Object.freeze(D.INDICATORS.map(x=>{const r=DB.find(q=>q.kind==='indicator'&&q.name===x.name);return r?Object.freeze(Object.assign({},x,{cLo:r.tr[0][2],cHi:r.tr[0][3]})):x}));
E.modules=E.modules||{};E.modules.COLORS='1.2';E.registry=E.registry||{};E.registry.COLORS={layer:'DATA',owner:'CHE.COLORS',depends:['DATA']};
})(window);
</script>
