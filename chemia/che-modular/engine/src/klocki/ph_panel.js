/* KLOCEK: ph-indicators-v03 — Panel pH: skala wskaźników, roztwór × wskaźnik, drabinka kwasów i zasad (przeniesiony z visual-library-v001, 2026-11-04).
   Samodzielny: zawiera moduł barw CHE.COLORS (che-colors-v001.js) i dane kwasów (dane/kwasy-zasady.json). Wymaga model_widok.js przed sobą. */
(function(){
window.CHE=window.CHE||{};window.CHE.DATA=window.CHE.DATA||{};
window.CHE.DATA.ACID_SYSTEMS=window.CHE.DATA.ACID_SYSTEMS||{"HCl": {"id": "HCl", "formula": "HCl", "species": ["HCl", "Cl⁻"], "pKa": [-7], "Ka": [null], "strong": true, "anion": "Cl⁻"}, "HNO3": {"id": "HNO3", "formula": "HNO₃", "species": ["HNO₃", "NO₃⁻"], "pKa": [-1.4], "Ka": [null], "strong": true, "anion": "NO₃⁻"}, "H2SO4": {"id": "H2SO4", "formula": "H₂SO₄", "species": ["H₂SO₄", "HSO₄⁻", "SO₄²⁻"], "pKa": [-3, 1.99], "Ka": [null, 0.0102], "strong": false, "strongFirst": true, "anion": "HSO₄⁻", "note": "mocny tylko w I stopniu; HSO₄⁻ pKa 1,99"}, "H3PO4": {"id": "H3PO4", "formula": "H₃PO₄", "species": ["H₃PO₄", "H₂PO₄⁻", "HPO₄²⁻", "PO₄³⁻"], "pKa": [2.16, 7.21, 12.32], "Ka": [0.0069, 6.2e-08, 4.8e-13], "strong": false, "anion": "H₂PO₄⁻", "note": "średniej mocy (α₁ ≈ 0,23 dla 0,1 mol/dm³)"}, "HF": {"id": "HF", "formula": "HF", "species": ["HF", "F⁻"], "pKa": [3.2], "Ka": [0.00063], "strong": false, "anion": "F⁻", "note": "słaby mimo dużej elektroujemności F"}, "HCOOH": {"id": "HCOOH", "formula": "HCOOH", "species": ["HCOOH", "HCOO⁻"], "pKa": [3.75], "Ka": [0.000178], "strong": false, "anion": "HCOO⁻"}, "CH3COOH": {"id": "CH3COOH", "formula": "CH₃COOH", "species": ["CH₃COOH", "CH₃COO⁻"], "pKa": [4.756], "Ka": [1.75e-05], "strong": false, "anion": "CH₃COO⁻", "ref": "PUBCHEM-ACETIC-PKA-25C"}, "H2CO3": {"id": "H2CO3", "formula": "H₂CO₃", "species": ["H₂CO₃", "HCO₃⁻", "CO₃²⁻"], "pKa": [6.35, 10.33], "Ka": [4.47e-07, 4.68e-11], "strong": false, "anion": "HCO₃⁻", "note": "stała „pozorna” — dotyczy CO₂(aq) + H₂CO₃"}, "HCN": {"id": "HCN", "formula": "HCN", "species": ["HCN", "CN⁻"], "pKa": [9.21], "Ka": [6.2e-10], "strong": false, "anion": "CN⁻"}};
window.CHE.DATA.SUBSTANCES=window.CHE.DATA.SUBSTANCES||{"HCl": {"name": "kwas chlorowodorowy"}, "HNO3": {"name": "kwas azotowy(V)"}, "H2SO4": {"name": "kwas siarkowy(VI)"}, "H3PO4": {"name": "kwas fosforowy(V)"}, "HF": {"name": "kwas fluorowodorowy"}, "HCOOH": {"name": "kwas mrówkowy"}, "CH3COOH": {"name": "kwas octowy"}, "H2CO3": {"name": "kwas węglowy"}, "HCN": {"name": "cyjanowodór"}};
})();


(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const SRC={provenance:'EDUCATIONAL_BASE',referenceReady:false,note:'barwa orientacyjna, zależy od stężenia/temperatury/oświetlenia'};
const Y='#facc15',R='#dc2626',B='#2563eb';

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
  
 {id:'sol-water',kind:'solution',name:'woda / roztwór bezbarwny',hex:'#e8f2fa',state:'bezbarwny'},
  
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
  
 {id:'flame-li',kind:'flame',name:'Li',hex:'#e11d48',state:'karminowy'},
 {id:'flame-na',kind:'flame',name:'Na',hex:'#ffb300',state:'żółty'},
 {id:'flame-k',kind:'flame',name:'K',hex:'#b388ff',state:'fioletowy'},
 {id:'flame-ca',kind:'flame',name:'Ca',hex:'#ea580c',state:'ceglastoczerwony'},
 {id:'flame-sr',kind:'flame',name:'Sr',hex:'#dc2626',state:'czerwony'},
 {id:'flame-ba',kind:'flame',name:'Ba',hex:'#a3e635',state:'żółtozielony'},
 {id:'flame-cu',kind:'flame',name:'Cu',hex:'#22c55e',state:'zielony'},
  
 {id:'rx-cu-naoh',kind:'reaction',name:'CuSO₄ + NaOH',before:'ion-cu2',after:'ppt-cu-oh-2',obs:'niebieski roztwór → niebieski galaretowaty osad'},
 {id:'rx-fe3-naoh',kind:'reaction',name:'FeCl₃ + NaOH',before:'ion-fe3',after:'ppt-fe-oh-3',obs:'żółtobrunatny roztwór → rdzawy osad'},
 {id:'rx-ag-cl',kind:'reaction',name:'AgNO₃ + NaCl',before:'sol-water',after:'ppt-agcl',obs:'bezbarwny roztwór → biały serowaty osad'},
 {id:'rx-ag-i',kind:'reaction',name:'AgNO₃ + KI',before:'sol-water',after:'ppt-agi',obs:'bezbarwny roztwór → żółty osad'},
 {id:'rx-pb-i',kind:'reaction',name:'Pb(NO₃)₂ + KI',before:'sol-water',after:'ppt-pbi2',obs:'bezbarwny roztwór → żółty osad'},
 {id:'rx-mno4-red',kind:'reaction',name:'MnO₄⁻ + redukcja (H⁺)',before:'ion-mno4',after:'ion-mn2',obs:'fioletowy → prawie bezbarwny'},
 {id:'rx-cr2o7-cro4',kind:'reaction',name:'Cr₂O₇²⁻ + OH⁻',before:'ion-cr2o7',after:'ion-cro4',obs:'pomarańczowy → żółty'}
].map(r=>Object.assign({},SRC,r));
const byId=new Map(DB.map(r=>[r.id,r]));
 
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
 
 if(Array.isArray(D.INDICATORS))D.INDICATORS=Object.freeze(D.INDICATORS.map(x=>{const r=DB.find(q=>q.kind==='indicator'&&q.name===x.name);return r?Object.freeze(Object.assign({},x,{cLo:r.tr[0][2],cHi:r.tr[0][3]})):x}));
E.modules=E.modules||{};E.modules.COLORS='1.2';E.registry=E.registry||{};E.registry.COLORS={layer:'DATA',owner:'CHE.COLORS',depends:['DATA']};
})(window);

(function(){
const CHE=window.CHE,defineView=CHE.VIEW.define;
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
})();
