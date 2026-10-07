<script id="che-lesson-context-v001">
(function(){
'use strict';
/**
 * CHE.LESSON_CONTEXT — kontrakt modułowości
 *
 * PRZEPŁYW DANYCH (sztywny):
 *   1) CHE.DATA / REACTION / SUBSTANCE / …  — pełna wspólna baza silnika (source of truth)
 *   2) LESSON_CONTEXT (opcjonalnie)         — filtr / preset UI pod lekcję
 *   3) WIZUALIZACJA                        — render i interakcja
 *
 * WIZUALIZACJA  = UI + odczyt z silnika (jedna implementacja w bibliotece)
 * LEKCJA        = tylko zakres (które id z bazy pokazać), NIE osobna chemia
 * MONTAŻ        = ten sam kod widoku ± aktywny kontekst
 *
 * Zasada: nie kopiujemy widgetu ani danych chemicznych do lekcji.
 * Lekcja montuje id z CHE.VIEW i ewentualnie zawęża listę z pełnej bazy.
 */
var C = window.CHE = window.CHE || {};
var LC = C.LESSON_CONTEXT = C.LESSON_CONTEXT || {};
LC.version = '1.3';
LC.sourceOfTruth = 'FULL_ENGINE + lesson data packs';
LC.active = null;

/** Pakiety danych lekcji — tylko zakres, nie logika silnika */
LC.packs = LC.packs || {};

LC.packs.N03 = {
  code: 'N03',
  title: 'Kwasy',
  goal: 'Definicja, nazewnictwo, dysocjacja, moc, pH, otrzymywanie, reakcje kwasów',
  /** Filtry po centralnej bazie — widget czyta przez LESSON_CONTEXT.* */
  substances: [
    'HCl','H2SO4','HNO3','H3PO4','H2CO3','CH3COOH','HF','HBr','HI',
    'NaOH','Ca(OH)2','H2O','CO2','SO2','SO3','NaCl','CaCO3','CuO','Zn','Mg','Fe'
  ],
  reactions: [
    'mgHcl','znHcl','feHcl','cuHno3','h2so4Naoh','cuoH2so4',
    'CO2 + Ca(OH)2','NaCl + H2SO4'
  ],
  /** Presety UI dla konkretnych widgetów (nadpisują domyślne listy w widoku) */
  widgetPresets: {
    'metal-reaction-v02': { metals:['Mg','Zn','Fe','Cu'], acids:['HCl','HNO3','H2SO4'] },
    'ind-lab': { solutions:['hcl','water','naoh','caoh','cuoh'] },
    'reactor-enhanced': { acids:['HCl','CH3COOH','HF','H2SO4','HNO3'], scenarios:['metal','oxide','base','carbonate','silverNitrate'] },
    'reakcje-kwasu-v03': { focus:['gas','precipitate','color'] },
    'beaker-prediction-enhanced': { focus:['precipitate','gas','color'] },
    'acid-table': { focus:'strength' },
    'obtaining-hcl-steps': { product:'HCl' },
    'acid-rain-v01': { pollutants:['SO2','NOx','CO2'] },
    'neutralization': { pairs:[['HCl','NaOH'],['H2SO4','NaOH'],['CH3COOH','NaOH']] },
    'reszta-builder': { acids:['HCl','HNO3','H2SO4','H3PO4','H2CO3','CH3COOH'] },
    'titration-merged': { defaultAcid:'HCl', defaultBase:'NaOH' },
    'diss-hcl-mech-v02': { formula:'HCl' },
    'strong-vs-weak-enhanced-v02': { strong:['HCl','H2SO4','HNO3'], weak:['CH3COOH','H2CO3','HF'] }
  },
  /** Które widoki z biblioteki są „na temat” tej lekcji */
  visualIds: [
    'diss-hcl-mech-v02','ion-vs-diss','diss-stepwise','diss-three-levels','hydronium',
    'acid-table','chart-strength','moc-vs-c','alpha-slider','strong-vs-weak-enhanced-v02',
    'ph-indicators-v03','ind-lab','titration-merged','buffer','acid-calculator',
    'obtaining-hcl-steps','obtaining-three','flow-naming','naming-table','reszta-builder',
    'metal-reaction-v02','neutralization','reactor-enhanced','beaker-prediction-enhanced','reakcje-kwasu-v03','lab-beaker-v102',
    'acid-rain-v01','env-balance','safety','compound-cards','acid-game',
    'flashcards-deck','flow-egzamin-enhanced','mind-map','ion-map-v02'
  ]
};

/** Przykład uniwersalnego packa — ten sam widget, inny zakres (tlenki) */
LC.packs.L02 = {
  code: 'L02',
  title: 'Tlenki',
  goal: 'Charakter tlenków, otrzymywanie, reakcje z wodą/kwasem/zasadą',
  substances: ['Na2O','CaO','MgO','Al2O3','ZnO','CO2','SO2','SO3','SiO2','CO','CuO','Fe2O3','H2O','HCl','H2SO4','NaOH','CaCO3'],
  reactions: ['Na2O + H2O','CaO + H2O','CO2 + H2O','SO3 + H2O','CuO + H2SO4','cuoH2so4','caco3Hcl'],
  widgetPresets: {
    'reactor-enhanced': { scenarios:['oxide','metal'] },
    'beaker-prediction-enhanced': { focus:['color','dissolve'] },
    'lab-oxides-v102': { preset:'l02' },
    'lab-beaker-v102': { preset:'oxides' },
    'reakcje-kwasu-v03': { preset:'acids' }
  },
  visualIds: ['charSim','oxideBuilder','oxGallery','trendBars','mapaReakcji','vseprStage','periodicMini','lab-oxides-v102','lab-beaker-v102','reakcje-kwasu-v03']
};

LC.activate = function(code, extra){
  var pack = LC.packs[code] || null;
  LC.active = {
    code: code,
    pack: pack,
    title: (pack && pack.title) || code,
    activatedAt: Date.now(),
    extra: extra || null
  };
  try {
    document.documentElement.setAttribute('data-che-lesson', code || '');
    document.dispatchEvent(new CustomEvent('che:lesson-context', { detail: LC.active }));
  } catch(_){}
  return LC.active;
};

LC.clear = function(){
  LC.active = null;
  try {
    document.documentElement.removeAttribute('data-che-lesson');
    document.dispatchEvent(new CustomEvent('che:lesson-context', { detail: null }));
  } catch(_){}
};

LC.get = function(){ return LC.active; };

LC.preset = function(widgetId){
  var a = LC.active, p = a && a.pack;
  if(!p || !p.widgetPresets) return null;
  return p.widgetPresets[widgetId] || null;
};

LC.inScopeSubstance = function(formula){
  var a = LC.active, p = a && a.pack;
  if(!p || !p.substances || !p.substances.length) return true; // brak filtra = pełna baza
  var f = String(formula||'').replace(/[₀-₉]/g, function(c){
    var m='₀₁₂₃₄₅₆₇₈₉'; return String(m.indexOf(c)>=0?m.indexOf(c):c);
  });
  return p.substances.some(function(s){
    return s === formula || s === f || String(s).replace(/\s/g,'') === String(formula).replace(/\s/g,'');
  });
};

LC.filterList = function(list, key){
  var a = LC.active, p = a && a.pack;
  if(!p) return list;
  if(!Array.isArray(list)) return list;
  if(key === 'substance' || key === 'formula'){
    return list.filter(function(item){
      var f = typeof item === 'string' ? item : (item.formula || item.id || item.s || item.name);
      return LC.inScopeSubstance(f);
    });
  }
  return list;
};

/**
 * Montaż z kontekstem: jeden kod widoku, opcjonalny zakres lekcji.
 * host — element DOM; id — id z CHE.VIEW; opts.lesson — kod packa (N03…)
 */
LC.mount = function(id, host, opts){
  opts = opts || {};
  if(opts.lesson) LC.activate(opts.lesson);
  else if(opts.clearContext) LC.clear();
  if(!host) return false;
  host.dataset.che = id;
  host.dataset.cheLesson = (LC.active && LC.active.code) || '';
  try {
    if(C.VIEW && typeof C.VIEW.mount === 'function' && C.VIEW.views && C.VIEW.views.get && C.VIEW.views.get(id)){
      host.innerHTML = '';
      C.VIEW.mount(host);
      // opcjonalny pasek kontekstu
      if(LC.active && opts.badge !== false){
        var badge = document.createElement('div');
        badge.className = 'che-ctx-badge';
        badge.innerHTML = '<small>Dane z silnika</small> <b>'+(LC.active.code||'')+'</b> · pełna baza → filtr lekcji → widok';
        host.insertBefore(badge, host.firstChild);
      }
      return true;
    }
    if(typeof C.mount === 'function' && C.LEGACY_WIDGETS && C.LEGACY_WIDGETS.has && C.LEGACY_WIDGETS.has(id)){
      C.mount(id, host, { source: 'LESSON_CONTEXT', lesson: LC.active && LC.active.code });
      return true;
    }
  } catch(e){
    host.innerHTML = '<div class="lab-note">Błąd montażu: '+(e.message||e)+'</div>';
    return false;
  }
  host.innerHTML = '<div class="lab-note">Brak widoku <code>'+id+'</code> w bibliotece.</div>';
  return false;
};

/** Adapter dla widgetów: bierz preset lekcji albo pełne defaulty z silnika */
/**
 * Przepływ danych (obowiązkowy):
 *   CHE.DATA / CHE.REACTION / CHE.SUBSTANCE / …  (pełna baza silnika)
 *        →  opcjonalny filtr LESSON_CONTEXT (zakres lekcji)
 *        →  wizualizacja (UI)
 * Pack lekcji NIGDY nie jest źródłem prawdy chemicznej — tylko maską / presetem UI.
 */
LC.fromEngine = function(){
  return {
    data: C.DATA || null,
    reaction: C.REACTION || null,
    substance: C.SUBSTANCE || null,
    profile: C.PROFILE || null,
    molecule: C.MOLECULE || null,
    chem: C.CHEM || null,
    widgetApi: C.WIDGET_API || null,
    sourceOfTruth: 'FULL_ENGINE'
  };
};

/** Listy z silnika, potem filtr lekcji jeśli aktywny */
LC.engineSubstances = function(){
  var eng = LC.fromEngine();
  var list = [];
  try {
    if(eng.data && eng.data.SUBSTANCES) list = Object.keys(eng.data.SUBSTANCES);
    else if(eng.substance && typeof eng.substance.list === 'function') list = eng.substance.list() || [];
  } catch(_){}
  return LC.filterList(list, 'substance');
};

LC.engineReactions = function(){
  var eng = LC.fromEngine();
  var list = [];
  try {
    if(eng.reaction && typeof eng.reaction.list === 'function') list = eng.reaction.list() || [];
    else if(eng.data && eng.data.REACTIONS) list = Object.keys(eng.data.REACTIONS);
  } catch(_){}
  var a = LC.active, p = a && a.pack;
  if(!p || !p.reactions || !p.reactions.length) return list;
  var allow = {};
  p.reactions.forEach(function(r){ allow[String(r)] = 1; });
  return list.filter(function(id){
    return allow[id] || allow[String(id)];
  });
};

LC.optionsFor = function(widgetId, defaults){
  // 1) baza z silnika (defaults powinny pochodzić z CHE.* — nie z lekcji)
  var base = Object.assign({ sourceOfTruth: 'FULL_ENGINE' }, defaults || {});
  // 2) opcjonalny preset lekcji tylko zawęża / ustawia UI
  var pre = LC.preset(widgetId);
  if(!pre) return base;
  var out = Object.assign({}, base, pre);
  out._lesson = LC.active && LC.active.code;
  out._dataPath = 'ENGINE → LESSON_FILTER → VISUAL';
  out._source = 'FULL_ENGINE'; // chemia zawsze z silnika
  out._uiScope = 'LESSON_CONTEXT';
  return out;
};

C.AUDIT && C.AUDIT.add && C.AUDIT.add(
  'LESSON_CONTEXT: wizualizacja=silnik, lekcja=zakres danych',
  true,
  'Jeden moduł widoku; pack N03/L02 zawęża substancje, reakcje i presety UI bez kopiowania kodu.'
);

try { console.info('[CHE LESSON_CONTEXT v1.0]', { packs: Object.keys(LC.packs) }); } catch(_){}
})();
</script>
