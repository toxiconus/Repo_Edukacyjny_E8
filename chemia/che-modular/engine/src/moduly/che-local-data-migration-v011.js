
(function(){
'use strict';
const C=window.CHE=window.CHE||{},W=C.WIDGET_API||{};
const E=C.ENGINE_AUDIT=C.ENGINE_AUDIT||{};

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
  
 E.widgetLocalData=E.widgetLocalData||{};
})();

(function(){
 const old=C.LEGACY_WIDGETS?.get?.('reszta');if(!old||!C.define)return;
  
})();

(function(){
 const old=C.LEGACY_WIDGETS?.get?.('ionAssemblyO');if(!old||!C.define)return;
  
})();

E.widgetLocalData=Object.assign({},E.widgetLocalData,{version:'0.11',sourceOfTruth:'FULL_ENGINE',migrated:['charSim.reactions','indLab.substance-lookup','wodorGrid.central-substance','reszta.central-substance','ionAssemblyO.central-valence-charge-formula'],remaining:['dwStage.scene-graphics','dissWidget.scene-graphics'],policy:'UI presets/scenery remain local; chemical facts and calculations use central engine/data.'});
C.WIDGET_MIGRATION_AUDIT=C.WIDGET_MIGRATION_AUDIT||{};C.WIDGET_MIGRATION_AUDIT.entries=C.WIDGET_MIGRATION_AUDIT.entries||{};
C.WIDGET_MIGRATION_AUDIT.entries.wodorGrid='MIGRATED_SUBSTANCE_ADAPTER';
C.WIDGET_MIGRATION_AUDIT.entries.reszta='MIGRATED_SUBSTANCE_ADAPTER';
C.WIDGET_MIGRATION_AUDIT.entries.ionAssemblyO='MIGRATED_CENTRAL_FORMULA_ADAPTER';
C.ENGINE_AUDIT.widgetLocalData=E.widgetLocalData;
})();
