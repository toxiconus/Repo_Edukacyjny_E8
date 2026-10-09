
(function(){
 const C=window.CHE;if(!C||!C.VIEW?.views)return; const root=document.getElementById('pane-wizual'),list=document.getElementById('visual-list'); if(!root||!list)return;
 const groups={
 'Schematy i mapy':['obtaining-three','obtaining-hcl-steps','flow-naming','naming-table','flow-egzamin-enhanced','reaction-decision','mind-map','ion-map-v02','chain-scn','ion-vs-diss','diss-three-levels','hydronium','acid-table','ka-pka-table','chart-strength','ph-table','ph-ladder','env-balance','safety','timeline'],
 'Kwasy / pH / lab':['ph-indicators-v03','acid-calculator','strong-vs-weak-enhanced-v02','titration-merged','reactor-enhanced','diss-hcl-mech-v02','metal-reaction-v02','neutralization','ind-lab','buffer','reszta-builder','reakcje-kwasu-v03'],
 'CHE.LAB · zlewka i stanowiska':['lab-beaker-v102','lab-oxides-v102','lab-stations-v102','reakcje-kwasu-v03'],
 'Atom / cząsteczka':['molecule-electrons','molecule-cv','molecule-2d','molecule-orbitals','molecule3d','molecule3d-merged','live-cv'],
 'Reakcje / doświadczenia':['four-reactions','reactor','beaker-prediction-enhanced','equilibrium','lab-beaker-v102'],
 'Rozszerzenia':['alpha-slider','moc-vs-c','kinetics-v01','energy-profile','acid-rain-v01','flashcards-deck','acid-game','compound-cards','periodic-54','chem-profile10']};
 function mount(name){const spec=C.VIEW.views.get(name);if(!spec)return;const old=root.querySelector('.che-viz-focus');if(old)old.remove();const sec=document.createElement('section');sec.className='che-viz-focus';sec.dataset.che=name;const close=document.createElement('button');close.type='button';close.className='che-viz-close';close.textContent='× Zamknij widok';close.onclick=()=>sec.remove();sec.appendChild(close);root.appendChild(sec);C.VIEW.autoMount(sec);sec.scrollIntoView({behavior:'smooth',block:'start'});}
 list.innerHTML=''; Object.entries(groups).forEach(([g,names])=>{const box=document.createElement('div');box.className='che-viz-group';const h=document.createElement('h4');h.textContent=g;box.appendChild(h);names.filter(n=>C.VIEW.views.has(n)).forEach(n=>{const spec=C.VIEW.views.get(n),b=document.createElement('button');b.type='button';b.className='che-viz-pick';b.innerHTML='<b>'+spec.title+'</b><small>'+((spec.tag)||'MODEL')+'</small>';b.onclick=()=>mount(n);box.appendChild(b)});list.appendChild(box)});
 C.VISUAL_LIBRARY=C.VISUAL_LIBRARY||{};C.VISUAL_LIBRARY.mount=mount;C.VISUAL_LIBRARY.groups=groups;
})();
