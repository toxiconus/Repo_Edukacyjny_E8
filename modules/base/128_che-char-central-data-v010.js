<script id="che-char-central-data-v010">
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const R=C.REACTION||{};
const CM=C.CHARACTER_MIGRATION||{};
function lookup(eq){return CM.reactionByText?CM.reactionByText(eq):null;}
const old=C.LEGACY_WIDGETS?.charSim;
if(!old || !C.define) return;
/* Adapter is intentionally small: only the chemical facts move to the engine. */
C.define('charSim', ({root})=>{
  const rules={
    Na2O:{ch:'zasadowy',eq:'Na₂O + H₂O → 2 NaOH',extra:'Reaguje z wodą — powstaje wodorotlenek sodu.',cls:'ok',color:'#2e7d4f'},
    CaO:{ch:'zasadowy',eq:'CaO + H₂O → Ca(OH)₂',extra:'Wapno palone reaguje z wodą. Reakcja jest egzotermiczna.',cls:'ok',color:'#2e7d4f'},
    MgO:{ch:'zasadowy',eq:'MgO + H₂O → praktycznie nie',extra:'Z wodą reaguje bardzo słabo; z kwasami reaguje.',cls:'warn',color:'#b06f1c'},
    Al2O3:{ch:'amfoteryczny',eq:'Al₂O₃ + H₂O → nie',extra:'Reaguje zarówno z kwasami, jak i zasadami.',cls:'ok',color:'#6b3fa0'},
    ZnO:{ch:'amfoteryczny',eq:'ZnO + H₂O → nie',extra:'Reaguje zarówno z kwasami, jak i zasadami.',cls:'ok',color:'#6b3fa0'},
    Fe2O3:{ch:'zasadowy',eq:'Fe₂O₃ + H₂O → nie',extra:'Z kwasem: Fe₂O₃ + 6 HCl → 2 FeCl₃ + 3 H₂O.',cls:'warn',color:'#b06f1c'},
    CuO:{ch:'zasadowy',eq:'CuO + H₂O → nie',extra:'Z kwasem: CuO + H₂SO₄ → CuSO₄ + H₂O.',cls:'warn',color:'#b06f1c'},
    CO2:{ch:'kwasowy',eq:'CO₂ + H₂O → H₂CO₃ (słaby)',extra:'Z zasadą: CO₂ + 2 NaOH → Na₂CO₃ + H₂O.',cls:'ok',color:'#2b5e9c'},
    SO2:{ch:'kwasowy',eq:'SO₂ + H₂O → H₂SO₃',extra:'Z zasadą: SO₂ + 2 KOH → K₂SO₃ + H₂O.',cls:'ok',color:'#2b5e9c'},
    SO3:{ch:'kwasowy',eq:'SO₃ + H₂O → H₂SO₄',extra:'Z zasadą: SO₃ + 2 NaOH → Na₂SO₄ + H₂O.',cls:'ok',color:'#2b5e9c'},
    SiO2:{ch:'kwasowy',eq:'SiO₂ + H₂O → praktycznie nie',extra:'Reaguje z mocnymi zasadami, zwykle po ogrzaniu.',cls:'warn',color:'#b06f1c'},
    CO:{ch:'obojętny',eq:'CO + H₂O → nie',extra:'Nie reaguje w typowych warunkach z kwasami ani zasadami.',cls:'warn',color:'#8892a0'},
    Mn2O7:{ch:'kwasowy (wyjątek)',eq:'Mn₂O₇ + H₂O → 2 HMnO₄',extra:'Tlenek manganu(VII) ma charakter kwasowy.',cls:'ok',color:'#2b5e9c'},
    CrO3:{ch:'kwasowy (wyjątek)',eq:'CrO₃ + H₂O → H₂CrO₄',extra:'Tlenek chromu(VI) ma charakter kwasowy.',cls:'ok',color:'#2b5e9c'}
  };
  const stage=root.querySelector('.stage-box'),fb=root.querySelector('.char-fb');
  function render(key){
    const d=rules[key]; if(!d)return;
    const rx=lookup(d.eq);
    const eq=rx?.equation||rx?.formula||d.eq;
    stage.innerHTML='<div style="font-family:JetBrains Mono,monospace;font-size:1.15rem;font-weight:800;color:var(--accent-dark);">'+(root.querySelector('[data-ox].active')?.textContent||key)+'</div>'+ '<div style="font-size:1.4rem;font-weight:800;color:'+d.color+';margin:6px 0;">'+d.ch+'</div><div style="font-family:JetBrains Mono,monospace;font-size:.92rem;color:var(--text-soft);">'+eq+'</div>';
    fb.className='result-card '+d.cls; fb.textContent=d.extra+(rx?.conditions?' Warunki: '+rx.conditions+'.':'');
  }
  return {mount(){root.querySelectorAll('[data-ox]').forEach(b=>b.addEventListener('click',()=>{root.querySelectorAll('[data-ox]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.ox);}));},reset(){}};
});
})();
</script>
