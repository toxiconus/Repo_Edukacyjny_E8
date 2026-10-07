/* ===================== v1.6: GFX.rx — REJESTR WYGLĄDU REAKCJI (jedno źródło dla lekcji, doświadczeń, Atlasu) =====================
   Klucz = klucz CHE.REACTION (gdy istnieje). Spec = format fromReaction + meta {n, gas (wzór), why, teacher, noRx}.
   Barwy = id CHE.COLORS (ion-*, metal-*, solid-*, ppt-*, ind-* z pH). Dopisywane automatycznie: rekordy CHE.COLORS kind:'reaction'.
   API: rx.get(k) · rx.list(filter) · rx.register(k,spec) · rx.state(k,p,extra) → stan GFX · rx.info(k) (równanie/obserwacja/BHP z CHE.REACTION + gaz z CHE.PHYS)
        rx.mount(host,k,{vessel,dur,height,auto}) → {play,reset,set(k),api} */
const RX={};
/* rekordy barw CHE.COLORS → klucze CHE.REACTION (równania, zapis jonowy, BHP z silnika) */
const RXMAP={'rx-zn-cuso4':'znCuso4','rx-fe-cuso4':'feCuso4','rx-cu-agno3':'cuAgno3','rx-cu-naoh':'cuso4Naoh','rx-fe3-naoh':'fecl3Naoh','rx-ag-cl':'agno3Nacl','rx-pb-i':'pbno32Ki','rx-ba-so4':'bacl2H2so4','rx-ca-co2':'caoh2Co2'};
const RXDEF={
 mgHcl:{n:'Mg + HCl',solid:{col:'metal-mg',eq:4,end:.15,t:'metal'},out:['gaz'],gas:'H2',bubN:1.5,heat:1.2,T:34,why:'Mg jest przed H w szeregu aktywności – wypiera wodór; roztwór się ogrzewa.'},
 znHcl:{n:'Zn + HCl',solid:{col:'metal-zn',eq:4,end:.35,t:'metal',shape:'granule'},out:['gaz'],gas:'H2',bubN:1.1,why:'Zn jest przed H – pęcherzyki wodoru na powierzchni granulek.'},
 feHcl:{n:'Fe + HCl',solid:{col:'metal-fe',eq:4,end:.6,t:'metal',shape:'chips'},l1:'ion-fe2',out:['gaz'],gas:'H2',bubN:.6,bubSize:.8,why:'Fe jest przed H – reakcja wolniejsza; roztwór bladozielony (Fe²⁺).'},
 alHcl:{n:'Al + HCl',solid:{col:'metal-al',eq:4,end:.35,t:'metal'},out:['gaz'],gas:'H2',bubN:1.2,why:'Al jest przed H; z początku wolno (warstwa Al₂O₃).',eq:'2 Al + 6 HCl → 2 AlCl₃ + 3 H₂↑'},
 cuHcl:{n:'Cu + HCl',solid:{col:'metal-cu',eq:4,end:1,t:'metal'},out:['nic'],noRx:1,eq:'Cu + HCl → brak reakcji',why:'Cu jest za H w szeregu – nie wypiera wodoru.'},
 agHcl:{n:'Ag + HCl',solid:{col:'metal-ag',eq:4,end:1,t:'metal'},out:['nic'],noRx:1,eq:'Ag + HCl → brak reakcji',why:'Ag jest za H w szeregu.'},
 cuoH2so4:{n:'CuO + H₂SO₄',solid:{col:'solid-cuo',eq:4,end:0,t:'powder',shape:'powder'},l1:'ion-cu2',out:['barwa'],heat:.6,T:45,why:'Czarny CuO znika, roztwór niebieszczeje (Cu²⁺). Brak gazu. Ogrzewanie przyspiesza.'},
 cuoHcl:{n:'CuO + HCl',solid:{col:'solid-cuo',eq:4,end:0,t:'powder',shape:'powder'},l1:[94,196,201],out:['barwa'],why:'CuO roztwarza się; roztwór CuCl₂ zielononiebieski.'},
 caco3Hcl:{n:'CaCO₃ + HCl',solid:{col:'ppt-caco3',eq:4,end:.3,t:'chips',shape:'chips'},out:['gaz'],gas:'CO2',bubN:1.6,bubSize:1.4,foam:1,why:'Węglan + kwas → CO₂ (burzenie; woda wapienna mętnieje).'},
 hclNaOH:{n:'NaOH + HCl',out:['nic'],heat:.4,T:31,why:'Zobojętnianie: brak gazu i osadu; roztwór lekko się ogrzewa. Zmianę pH widać dopiero ze wskaźnikiem.'},
 'hclNaOH+php':{rxKey:'hclNaOH',n:'NaOH + HCl + fenoloftaleina',l0:['ind-fenoloftaleina',11],l1:['ind-fenoloftaleina',5],out:['barwa'],why:'Fenoloftaleina malinowa w zasadzie (pH > 10), bezbarwna po zobojętnieniu.'},
 agno3Hcl:{n:'AgNO₃ + HCl',ppt:'ppt-agcl',out:['osad'],why:'Biały, serowaty osad AgCl (ciemnieje na świetle).'},
 cuHno3:{n:'Cu + HNO₃ (stęż.)',solid:{col:'metal-cu',eq:4,end:.2,t:'metal'},l1:'ion-cu2',out:['gaz','barwa'],gas:'NO2',fumes:'gas-no2',bubN:1.2,heat:1,T:40,teacher:1,why:'HNO₃ utlenia – nie powstaje H₂, tylko brunatny NO₂ (cięższy od powietrza – opada). Tylko pokaz nauczyciela.'},
 h2so4Dil:{physical:1,n:'Rozcieńczanie H₂SO₄ (kwas do wody!)',out:['nic'],schl:1,heat:1.5,T:70,why:'Silnie egzotermiczne – smugi mieszania i ogrzanie. Zawsze kwas do wody.'},
 naH2o:{rxKey:'naH2o',n:'Na + H₂O (+ fenoloftaleina)',/* Na pływa po powierzchni (ρ=0,97) — bez ciała stałego na dnie */bubFrom:'bottom',l0:['ind-fenoloftaleina',7],l1:['ind-fenoloftaleina',13],out:['gaz','barwa'],gas:'H2',bubN:2,heat:1.5,T:45,splash:.3,teacher:1,why:'Sód topi się w kulkę i biega po powierzchni; wydziela się H₂, roztwór zasadowy (malinowy).'},
 h2so4Sugar:{rxKey:'sugarH2so4',n:'Cukier + stęż. H₂SO₄ (zwęglanie)',level:.03,solid:{col:[248,247,240],col2:[24,20,18],eq:4,end:1,t:'powder',shape:'powder'},out:['barwa'],heat:2.6,T:105,fumes:true,fumeColor:[150,150,150],fumeGas:'SO2',teacher:1,eq:'C₁₂H₂₂O₁₁ →(H₂SO₄ stęż.) 12 C + 11 H₂O',why:'H₂SO₄ odwadnia cukier: zostaje czarny węgiel, ciepło odparowuje wodę (para), część węgla utlenia się (SO₂, CO₂). Tylko pokaz nauczyciela.'},
 hno3Protein:{qualitative:1,n:'Białko + stęż. HNO₃ (reakcja ksantoproteinowa)',l0:[236,234,224],l1:[250,240,205],ppt:[232,196,40],habit:'kłaczkowaty',out:['osad','barwa'],teacher:1,eq:'białko (reszty aromatyczne) + HNO₃ → żółte nitrozwiązki',why:'HNO₃ ścina białko i nitruje pierścienie aromatyczne aminokwasów — żółty osad (wykrywanie białek). Dlatego HNO₃ barwi skórę na żółto.'},
 hno3Light:{rxKey:'hno3Decomp',n:'HNO₃ na świetle żółknie',l1:[240,214,120],out:['barwa'],fumes:true,fumeColor:[146,64,14],fumeGas:'NO2',eq:'4 HNO₃ →(hν) 4 NO₂ + O₂ + 2 H₂O',why:'Rozkład pod wpływem światła; rozpuszczony brunatny NO₂ barwi kwas na żółto — dlatego HNO₃ trzyma się w ciemnych butelkach.'},
 hclFume:{physical:1,n:'Stężony HCl „dymi”',out:['nic'],fumes:true,fumeColor:[232,238,244],fumeGas:'HCl',eq:'HCl(aq, stęż.) → HCl(g)↑; HCl(g) + H₂O(para) → mgiełka kropelek kwasu',why:'Z 36% roztworu ulatnia się chlorowodór; z wilgocią powietrza tworzy białą mgiełkę (nie „biały gaz”). Gaz jest cięższy od powietrza.'},
 caOH2Co2:{rxKey:'caoh2Co2',n:'Ca(OH)₂ + CO₂ (woda wapienna)',ppt:'ppt-caco3',out:['osad'],turb:.8,gas:'CO2',bubN:.8,why:'CO₂ wdmuchiwany do wody wapiennej – zmętnienie (CaCO₃).'}
};
const rxCol=x=>Array.isArray(x)&&typeof x[0]==='string'?(colors.at(x[0],x[1])||colors.water()):Array.isArray(x)?x:typeof x==='string'?(x[0]==='#'?colors.rgb(x):colors.at(x)||colors.water()):null;
function rxResolve(sp){const o=Object.assign({},sp);if(sp.l0!=null)o.l0=rxCol(sp.l0);if(sp.l1!=null)o.l1=rxCol(sp.l1);if(sp.solid)o.solid=Object.assign({},sp.solid,{col:rxCol(sp.solid.col),col2:sp.solid.col2?rxCol(sp.solid.col2):null});
 if(sp.ppt){o.pptCol=rxCol(sp.ppt);o.out=(sp.out||[]).concat(['osad']).filter((v,i,a)=>a.indexOf(v)===i)}
 if(sp.out&&sp.out.indexOf('gaz')>=0&&!sp.gas)o.gas='H2';o.out=(o.out||sp.out||[]).slice();if(o.out.indexOf('gaz')<0&&sp.gas&&!sp.noRx&&sp.turb==null)o.out.push('gaz');
 if(sp.turb){o.turb=sp.turb}if(sp.gas&&!o.fumeGas&&sp.fumes)o.fumeGas=sp.gas;return o}
function rxReg(k,sp){RX[k]=Object.assign({key:k},sp);return RX[k]}
Object.keys(RXDEF).forEach(k=>rxReg(k,RXDEF[k]));
/* rekordy reakcji z CHE.COLORS (osady, wypieranie metali) */
try{(C.COLORS&&C.COLORS.list?C.COLORS.list('reaction'):[]).forEach(d=>{if(RX[d.id])return;const a=C.COLORS.get(d.after),isP=a&&a.kind==='precipitate';
 const dist=(a,b)=>a&&b?Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]):0,cb=C.COLORS.at(d.before),ca=C.COLORS.at(isP?'sol-water':d.after),out=[];if(isP)out.push('osad');if(dist(cb,ca)>40||d.solidBefore)out.push('barwa');if(!out.length)out.push('nic');
 rxReg(d.id,{n:d.name,l0:d.before,l1:isP?'sol-water':d.after,ppt:isP?d.after:null,solid:d.solidBefore?{col:d.solidBefore,col2:d.solidAfter||null,eq:4,end:1,t:'metal'}:null,out,why:d.obs,src:'CHE.COLORS',rxKey:RXMAP[d.id]||undefined})})}catch(_){}
function rxState(k,p,extra){const sp=RX[k];if(!sp)return null;const o=rxResolve(sp),eP=Math.max(0,Math.min(1,p||0)),e=eP*eP*(3-2*eP);
 const st=fromReaction(Object.assign({},o,{out:sp.noRx?[]:o.out}),sp.noRx?0:eP,extra);
 if(sp.T!=null)st.T=25+(sp.T-25)*Math.sin(Math.min(1,eP)*Math.PI*.9+.1)*(eP>0?1:0);if(sp.schl)st.schl=eP>0&&eP<1?Math.sin(eP*Math.PI):0;if(sp.splash&&eP>0&&eP<.8)st.splash=sp.splash;
 if(sp.turb)st.turb=sp.turb*e;if(o.fumeGas)st.fumeGas=o.fumeGas;if(sp.gas)st.gasId=sp.gas;return st}
function rxInfo(k){const sp=RX[k];if(!sp)return null;const E=C.REACTION,rk=sp.rxKey||k,d=E&&E.get&&E.get(rk);const PH=C.PHYS,gas=sp.gas&&PH?PH.gas(sp.gas):null;
 const SUB='₀₁₂₃₄₅₆₇₈₉',pretty=x=>String(x||'').replace(/([A-Za-z\)\]])(\d+)/g,(m,a,n)=>a+n.replace(/\d/g,c=>SUB[c])).replace(/->/g,'→');
 return{key:k,name:sp.n,eq:pretty(d&&E.equation?E.equation(rk):sp.eq||'—'),type:d?((C.DATA&&C.DATA.REACTION_TYPE_NAMES&&C.DATA.REACTION_TYPE_NAMES[d.type])||d.type):sp.noRx?'brak reakcji':'—',obs:d&&d.observation||sp.why||'—',why:sp.why||'',safety:d&&d.safety?d.safety.join(' '):'',out:sp.out||[],teacher:!!sp.teacher,
  gas:gas?{formula:sp.gas,name:gas.name,moves:gas.moves,test:gas.test,color:gas.colorName}:null,src:d?'CHE.REACTION':sp.src||'GFX.rx'}}
function rxMount(host,k,o){o=o||{};let key=k,t0=null,p=0;const dur=o.dur||6;
 const api=mount(host,{vessel:o.vessel||'beaker',height:o.height||260,state:{},tick:(S,dt)=>{if(t0!=null){p=Math.min(1,p+dt/dur);if(p>=1&&o.onEnd&&!S.ended){S.ended=1;o.onEnd(key)}}},get:()=>rxState(key,p)});
 const ctl={api,play(){t0=1;p=0;api.state.ended=0;api.reset()},reset(){t0=null;p=0;api.reset()},set(nk){key=nk;this.reset()},get key(){return key},get progress(){return p}};if(o.auto)ctl.play();return ctl}
const rx={get:k=>RX[k]||null,list:f=>Object.keys(RX).filter(k=>!f||(typeof f==='function'?f(RX[k]):RX[k].out&&RX[k].out.indexOf(f)>=0)),register:rxReg,state:rxState,info:rxInfo,mount:rxMount,resolve:k=>RX[k]?rxResolve(RX[k]):null};
