<script id="che-local-data-migration-v011">
(function(){
'use strict';
const C=window.CHE=window.CHE||{},W=C.WIDGET_API||{};
const E=C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};

/* WODORGRID: central substance record is authoritative. The tile remains a UI preset. */
(function(){
 const old=C.LEGACY_WIDGETS?.get?.('wodorGrid'); if(!old||!C.define)return;
 const centralSub=f=>{try{return W.substance?.(f)||C.SUBSTANCE?.get?.(f)||C.PROFILE?.substance?.(f)||null}catch(_){return null}};
 const base=[
  {symbol:'Li',val:'+1',formula:'LiOH',sol:'good',solText:'dobrze rozpuszczalny',color:null,precip:false,use:'Odczynnik laboratoryjny, ogniwa litowe.'},
  {symbol:'Na',val:'+1',formula:'NaOH',sol:'good',solText:'bardzo dobrze',color:null,precip:false,use:'Środek do udrażniania rur, produkcja mydła.'},
  {symbol:'K',val:'+1',formula:'KOH',sol:'good',solText:'bardzo dobrze',color:null,precip:false,use:'Mydło potasowe, baterie alkaliczne.'},
  {symbol:'Ca',val:'+2',formula:'Ca(OH)₂',sol:'mid',solText:'trudno rozpuszczalny',color:'#e2e8f0',colorName:'biały',precip:true,use:'Woda wapienna do wykrywania CO₂, zaprawa budowlana.'},
  {symbol:'Ba',val:'+2',formula:'Ba(OH)₂',sol:'good',solText:'rozpuszczalny',color:null,precip:false,use:'Odczynnik laboratoryjny (Ba²⁺ toksyczny).'},
  {symbol:'Al',val:'+3',formula:'Al(OH)₃',sol:'bad',solText:'praktycznie nierozpuszczalny',color:'#f1f5f9',colorName:'biały',precip:true,use:'Lek na zgagę, amfoteryczny.'},
  {symbol:'Cu',val:'+2',formula:'Cu(OH)₂',sol:'bad',solText:'praktycznie nierozpuszczalny',color:'#3b82f6',colorName:'niebieski',precip:true,use:'Niebieski osad — znak Cu(II).'},
  {symbol:'Fe',val:'+3',formula:'Fe(OH)₃',sol:'bad',solText:'praktycznie nierozpuszczalny',color:'#7c2d12',colorName:'brunatny',precip:true,use:'Klasyczna reakcja strącania Fe(III).'}
 ];
 C.define('wodorGrid',({root})=>{
  const items=base.map(x=>{const c=centralSub(x.formula);return Object.assign({},x,{central:c,name:c?.name||x.formula,centralSource:!!c,solText:c?.solubility?.label||c?.solubility?.text||x.solText,centralUse:c?.uses?.join?.(', ')||x.use,centralColor:c?.appearance?.color||c?.color||x.color,centralColorName:c?.appearance?.colorName||c?.colorName||x.colorName});});
  const grid=root.querySelector('.wg-tiles'),detail=root.querySelector('.wg-detail');
  function show(i){const x=items[i],col=x.centralColor,cn=x.centralColorName;const sw=col?'<span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:'+col+';vertical-align:middle;margin-right:6px;border:1px solid #94a3b8;"></span>'+String(cn||col):'—';detail.innerHTML='<h5>'+x.symbol+' → '+x.formula+'</h5><div style="font-size:13px;line-height:1.8;margin-top:6px;"><b>Wartościowość:</b> '+x.val+'<br><b>Rozpuszczalność:</b> '+x.solText+'<br><b>Odczyn:</b> '+(x.central?.role||x.central?.reaction||'—')+'<br><b>Barwa osadu:</b> '+sw+'<br><b>Zastosowanie:</b> '+x.centralUse+'</div>'+(x.centralSource?'<div class="widget-hint" style="margin-top:8px">Źródło: centralny CHE.SUBSTANCE / CHE.PROFILE.</div>':'<div class="widget-hint" style="margin-top:8px">Brak pełnego rekordu centralnego — zachowano dane dydaktyczne widgetu.</div>');}
  return {mount(){items.forEach((x,i)=>{const t=document.createElement('button');t.type='button';t.className='wg-tile '+x.sol;t.innerHTML='<span class="wg-badge">'+(x.sol==='good'?'✓':x.sol==='mid'?'~':'×')+'</span><span class="wg-symbol">'+x.symbol+'</span><span class="wg-val">'+x.val+'</span><span class="wg-formula">'+x.formula+'</span>';t.onclick=()=>{grid.querySelectorAll('.wg-tile').forEach(y=>y.classList.remove('active'));t.classList.add('active');show(i)};grid.appendChild(t)});show(1)},reset(){}};
 });
 E.widgetLocalData=E.widgetLocalData||{};
})();

/* RESZTA: preset selector remains UI; formula/name facts are resolved centrally. */
(function(){
 const old=C.LEGACY_WIDGETS?.get?.('reszta');if(!old||!C.define)return;
 C.define('reszta',({root})=>{
  const sel=root.querySelector('.reszta-sel'),out=root.querySelector('.result-card');
  function render(){const v=sel.value.split('|'), an=v[1], formula=v[2];const sub=W.substance?.(formula)||C.SUBSTANCE?.get?.(formula)||C.PROFILE?.substance?.(formula);const name=sub?.name||v[0];out.className='result-card info';out.innerHTML='<b>'+name+'</b> → reszta: <b>'+an+'</b> → przykładowa sól: <b>'+formula+'</b>'+(sub?'<br><small>Rekord soli pochodzi z centralnego CHE.SUBSTANCE.</small>':'');}
  return {mount(){sel?.addEventListener('change',render);render()},reset(){if(sel){sel.selectedIndex=0;render()}}};
 });
})();

/* ION ASSEMBLY: charge/valence/formula calculation is delegated to WIDGET_API. */
(function(){
 const old=C.LEGACY_WIDGETS?.get?.('ionAssemblyO');if(!old||!C.define)return;
 C.define('ionAssemblyO',({root})=>{
  const cation=root.querySelector('.ia-cation'),product=root.querySelector('.ia-product'),note=root.querySelector('.ia-note');
  function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){const t=a%b;a=b;b=t}return a||1}
  function charge(sym,v){try{const q=W.charge?.(sym,v);if(Number.isFinite(q))return Math.abs(q)}catch(_){}return Math.abs(Number(v)||1)}
  function vals(sym){try{return (W.valences?.(sym)||[]).filter(x=>Number(x)>0).map(Number)}catch(_){return []}}
  function make(sym){const vs=vals(sym),v=sym==='Fe'?(vs.includes(3)?3:Math.max(...vs,1)):Math.max(...vs,1),q=charge(sym,v),a=2,g=gcd(q,a),cat=a/g,o=q/g,formula=sym+(cat===1?'':cat)+(o===1?'O':'O'+o);return {c:sym+(q===1?'⁺':q===2?'²⁺':q===3?'³⁺':q+'⁺'),p:formula,n:cat+'×'+sym+(q===1?'⁺':q===2?'²⁺':q===3?'³⁺':q+'⁺')+' + '+o+'×O²⁻ → '+formula+'. Kontrola ładunku: '+(cat*q)+' + '+(o*-2)+' = 0.'}}
  return {mount(){root.querySelectorAll('[data-ion]').forEach(b=>b.onclick=()=>{root.querySelectorAll('[data-ion]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const d=make(b.dataset.ion);cation.textContent=d.c;product.textContent=d.p;note.textContent=d.n});},reset(){}};
 });
})();

E.widgetLocalData=Object.assign({},E.widgetLocalData,{version:'0.11',sourceOfTruth:'FULL_ENGINE',migrated:['charSim.reactions','indLab.substance-lookup','wodorGrid.central-substance','reszta.central-substance','ionAssemblyO.central-valence-charge-formula'],remaining:['dwStage.scene-graphics','dissWidget.scene-graphics'],policy:'UI presets/scenery remain local; chemical facts and calculations use central engine/data.'});
C.WIDGET_MIGRATION_AUDIT=C.WIDGET_MIGRATION_AUDIT||{};C.WIDGET_MIGRATION_AUDIT.entries=C.WIDGET_MIGRATION_AUDIT.entries||{};
C.WIDGET_MIGRATION_AUDIT.entries.wodorGrid='MIGRATED_SUBSTANCE_ADAPTER';
C.WIDGET_MIGRATION_AUDIT.entries.reszta='MIGRATED_SUBSTANCE_ADAPTER';
C.WIDGET_MIGRATION_AUDIT.entries.ionAssemblyO='MIGRATED_CENTRAL_FORMULA_ADAPTER';
C.ENGINE_AUDIT.widgetLocalData=E.widgetLocalData;
})();
</script>

