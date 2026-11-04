// Kontrola kontrastu klocków w ciemnym motywie: NODE_PATH=$(npm root -g) node narzedzia/test_kontrast_klockow.js (wymaga zbudowanych lekcji w chemia/html). Wynik "N/M" = liczba elementów tekstu o kontraście < 3 / wszystkich; ma być 0.
const {chromium}=require('playwright');
const L=[['uklad-okresowy-54','F04_atom'],['czasteczki-3d','F02_materia_i_substancje'],['przewodnictwo','CHE.02.N04.kwasy'],['palnik-gazowy','LKO_ORG01_alkany'],['wskazniki-statyw','CHE.02.N03.wodorotlenki'],['kwasy-reszty','CHE.02.N04.kwasy'],['karta-bhp','C2w_wzor_elementarny_rzeczywisty'],['probowki-wybor','CHE.02.N04.kwasy'],['tabela-rozpuszczalnosci','CHE.02.N03.wodorotlenki'],['diagram-bohra','C1c_konfiguracje_elektronowe'],['wzor-2d','CHE.02.N04.kwasy'],['bilans-rownania','C3_rownania_i_obliczenia_z_rownan']];
(async()=>{const b=await chromium.launch();
for(const [n,f] of L){const p=await b.newPage({viewport:{width:420,height:900}});
await p.addInitScript(()=>localStorage.setItem('lekcja-poz','all'));
await p.goto('file:///home/claude/Repo_Edukacyjny_E8/chemia/html/'+f+'.html');await p.waitForTimeout(1000);
await p.evaluate(()=>document.documentElement.setAttribute('data-theme','dark'));
const k=p.locator('[data-klocek="'+n+'"]').first();await k.scrollIntoViewIfNeeded();await p.waitForTimeout(900);
await k.screenshot({path:'/tmp/e_'+n+'.png'});
// kontrast: policz elementy tekstu SVG/canvas niewidoczne: porównaj kolor text z tłem
const r=await k.evaluate(e=>{function lum(c){const m=c.match(/[\d.]+/g);if(!m)return null;const a=m.slice(0,3).map(x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)});return .2126*a[0]+.7152*a[1]+.0722*a[2]}
function bg(el){while(el){const c=getComputedStyle(el).backgroundColor;if(c&&!/rgba\(0, 0, 0, 0\)|transparent/.test(c))return c;el=el.parentElement}return 'rgb(0,0,0)'}
let bad=0,tot=0;e.querySelectorAll('text,span,b,div,p,label,button,td,th,summary').forEach(t=>{if(!t.childNodes.length||![...t.childNodes].some(x=>x.nodeType===3&&x.textContent.trim()))return;const cs=getComputedStyle(t);const fg=(t.namespaceURI.includes('svg')?cs.fill:cs.color);const l1=lum(fg),l2=lum(bg(t));if(l1==null||l2==null)return;tot++;const cr=(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);if(cr<3)bad++});return bad+'/'+tot});
console.log(n,'niski kontrast:',r);await p.close()}await b.close()})()
