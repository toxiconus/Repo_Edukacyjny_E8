

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const E = C.ENGINE = C.ENGINE || {};
E.version = '2.48';
E.modules = {
  DATA:'2.17', STRUCTURE:'2.17', CHEM:'2.17', MOLECULE:'2.17', REACTION:'2.17', TRANSFORM:'2.17', ORGANIC:'2.21', GEOMETRY:'2.23', VISUAL:'2.17', EQUILIBRIUM:'2.17',
  STOICH:'2.17', UNITS:'2.17', THERMO:'2.17', ELECTRO:'2.17',
  ATOM:'2.17', NUCLEUS:'2.17', ION:'2.17', ISOTOPE:'2.17', SPECTRA:'2.17', NUCLEAR:'2.17',
  PROFILE:'2.17', STATE:'2.17', OBSERVER:'2.17', PROGRESS:'2.17', DERIVED:'2.17', EDITOR:'2.18', RECONSTRUCT:'2.19', REACTIONSET:'2.20', ORGANIC_GRAPH:'2.21', REPRESENTATION:'2.32', GEOMETRY_CONTRACT:'2.23', MAPPING:'2.29', NOMENCLATURE:'2.33', SCIENCE:'2.26', VALIDATOR:'2.27', ISOMORPHISM:'2.28', REACTION_VALIDATOR:'2.30', SPECTRA_CONTRACT:'2.35', ELECTRONIC_MODEL:'2.36', MECHANISM_GRAPH:'2.37', PROVENANCE:'2.38', DATA_INTEGRITY:'2.47', STEREO_CONTRACT:'2.48',
  DOM:'2.17', VIZ:'2.17', MOTION:'2.17', VIEW:'2.17', EXPLAIN:'2.17',
  REGISTRY:'2.17', CONTRACT:'2.17', AUDIT:'2.17', PUBLIC:'2.17'
};
E.registry = {
  DATA:      { layer:'DATA',         owner:'CHE.DATA',         role:'centralne dane chemiczne i fizyczne', depends:[] },
  STRUCTURE: { layer:'DOMAIN',       owner:'CHE.STRUCTURE',   role:'kanoniczny graf chemiczny, walidacja, grupy funkcyjne i geometria', depends:['DATA','CHEM'] },
  CHEM:      { layer:'DOMAIN',       owner:'CHE.CHEM',         role:'parser, masa, bilans, pH',            depends:['DATA'] },
  MOLECULE:  { layer:'DOMAIN',       owner:'CHE.MOLECULE',     role:'model atomu i cząsteczki',            depends:['DATA'] },
  REACTION:  { layer:'DOMAIN',       owner:'CHE.REACTION',     role:'model reakcji, równanie, bilans',     depends:['DATA','CHEM','THERMO','ELECTRO'] },
  TRANSFORM: { layer:'DOMAIN',       owner:'CHE.TRANSFORM',   role:'transformacje grafu reakcji, atomów i protonów, walidacja reakcji', depends:['STRUCTURE','REACTION'] },
  ORGANIC:   { layer:'DOMAIN',       owner:'CHE.ORGANIC',      role:'chemia organiczna strukturalna: rezonans, tautomeria, stereochemia, konformery', depends:['STRUCTURE','DATA'] },
  GEOMETRY:  { layer:'DOMAIN',       owner:'CHE.GEOMETRY',     role:'wspólna geometria 2D/3D/VSEPR i źródła geometrii', depends:['STRUCTURE','ATOM'] },
  VISUAL:    { layer:'SERVICE',      owner:'CHE.VISUAL',       role:'wspólne projekcje CV atomu, wiązania, grupy i reakcji', depends:['STRUCTURE','ORGANIC','GEOMETRY','TRANSFORM'] },
  EDITOR:    { layer:'SERVICE',      owner:'CHE.EDITOR',       role:'edycja kopii grafu, historia, walidacja i budowanie reakcji', depends:['STRUCTURE','TRANSFORM','ORGANIC','GEOMETRY'] },
  REACTIONSET:{layer:'DOMAIN', owner:'CHE.REACTIONSET', role:'wieloskładnikowe reakcje, role, mapping i transfery między grafami', depends:['STRUCTURE','TRANSFORM','RECONSTRUCT']},
  SPECTRA_CONTRACT:{layer:'DOMAIN', owner:'CHE.SPECTRA_CONTRACT', role:'wspólny kontrakt widm IR/NMR/MS/UV-Vis', depends:['SPECTRA']},
  ELECTRONIC_MODEL:{layer:'DOMAIN', owner:'CHE.ELECTRONIC_MODEL', role:'projekcja konfiguracji elektronowej z CHE.ATOM', depends:['ATOM']},
  MECHANISM_GRAPH:{layer:'DOMAIN', owner:'CHE.MECHANISM_GRAPH', role:'graf stanów i transformacji mechanizmu reakcji', depends:['TRANSFORM','REACTION']},
  PROVENANCE:{layer:'META', owner:'CHE.PROVENANCE', role:'źródła, metoda, niepewność i poziom obliczeniowy', depends:['SCIENCE']} ,
  DATA_INTEGRITY:{layer:'META', owner:'CHE.DATA_INTEGRITY', role:'audyt kompletności danych legacy i braków', depends:['DATA','REACTION']},
  STEREO_CONTRACT:{layer:'DOMAIN', owner:'CHE.STEREO_CONTRACT', role:'jawna walidacja deskryptorów stereochemicznych bez pełnego CIP', depends:['STRUCTURE']},
  RECONSTRUCT:{layer:'DOMAIN', owner:'CHE.RECONSTRUCT', role:'rekonstrukcja jawnych/implicitnych atomów i transformacji grafu', depends:['STRUCTURE','TRANSFORM']},
  VALIDATOR:{layer:'DOMAIN', owner:'CHE.VALIDATOR', role:'walidacja wartościowości, ładunku i implicit H', depends:['STRUCTURE']},
  ISOMORPHISM:{layer:'DOMAIN', owner:'CHE.ISOMORPHISM', role:'izomorfizm i canonical labeling grafów', depends:['STRUCTURE']},
  ORGANIC_GRAPH:{layer:'DOMAIN', owner:'CHE.ORGANIC', role:'rozszerzona chemia organiczna oparta na grafie: równoważność, grupy, rezonans, tautomeria, stereo', depends:['STRUCTURE','RECONSTRUCT','ORGANIC']},
  REPRESENTATION:{layer:'SERVICE', owner:'CHE.REPRESENTATION', role:'formula, półstrukturalny, szkieletowy i Lewis z grafu kanonicznego', depends:['STRUCTURE','DATA','VALIDATOR']},
  GEOMETRY_CONTRACT:{layer:'DOMAIN', owner:'CHE.GEOMETRY_CONTRACT', role:'kontrakt geometrii i źródeł', depends:['STRUCTURE','GEOMETRY']},
  MAPPING:{layer:'SERVICE', owner:'CHE.MAPPING', role:'mapowanie atomów między grafami', depends:['STRUCTURE','RECONSTRUCT']},
  NOMENCLATURE:{layer:'SERVICE', owner:'CHE.NOMENCLATURE', role:'nomenklatura strukturalna wyprowadzana z grafu; bez udawania pełnego IUPAC', depends:['STRUCTURE','REPRESENTATION','ORGANIC_GRAPH']},
  SCIENCE:{layer:'META', owner:'CHE.SCIENCE', role:'wspólny kontrakt typów naukowych', depends:[]},
  LAB:{layer:'LAB', owner:'CHE.LAB', role:'zlewka modułowa, sesja, panele, BHP/pH', depends:['EQUILIBRIUM','DATA']},
  EQUILIBRIUM:{layer:'DOMAIN',       owner:'CHE.EQUILIBRIUM',  role:'równowagi, bufory, miareczkowanie',   depends:['DATA','CHEM'] },
  STOICH:    { layer:'DOMAIN',       owner:'CHE.STOICH',       role:'stechiometria ilościowa',             depends:['CHEM','REACTION'] },
  UNITS:     { layer:'DOMAIN',       owner:'CHE.UNITS',        role:'konwersje jednostek',                 depends:[] },
  THERMO:    { layer:'DOMAIN',       owner:'CHE.THERMO',       role:'termodynamika reakcji i Arrhenius',   depends:['DATA'] },
  ELECTRO:   { layer:'DOMAIN',       owner:'CHE.ELECTRO',      role:'elektrochemia ogniw i Nernst',        depends:['DATA'] },
  ATOM:      { layer:'DOMAIN',       owner:'CHE.ATOM',         role:'model atomu: jądro, powłoki, elektrony', depends:['DATA','MOLECULE'] },
  NUCLEUS:   { layer:'DOMAIN',       owner:'CHE.NUCLEUS',      role:'model jądra: energia wiązania, defekt masy', depends:['DATA'] },
  ION:       { layer:'DOMAIN',       owner:'CHE.ION',          role:'model jonu i izoelektronowości',      depends:['DATA','ATOM'] },
  ISOTOPE:   { layer:'DOMAIN',       owner:'CHE.ISOTOPE',      role:'izotopy, abundancja, rozpady',        depends:['DATA'] },
  SPECTRA:   { layer:'DOMAIN',       owner:'CHE.SPECTRA',      role:'widma atomowe i wzór Rydberga',       depends:['DATA'] },
  NUCLEAR:   { layer:'DOMAIN',       owner:'CHE.NUCLEAR',      role:'reakcje jądrowe i rozpady',           depends:['DATA','NUCLEUS','ISOTOPE'] },
  PROFILE:   { layer:'SERVICE',      owner:'CHE.PROFILE',      role:'most obiektów domenowych',            depends:['DATA','MOLECULE','REACTION','THERMO','ATOM'] },
  STATE:     { layer:'DOMAIN',       owner:'CHE.STATE',        role:'warunki doświadczenia',               depends:[] },
  OBSERVER:  { layer:'SERVICE',      owner:'CHE.OBSERVER',     role:'obserwowalne efekty chemiczne',       depends:['DATA','REACTION'] },
  PROGRESS:  { layer:'DOMAIN',       owner:'CHE.PROGRESS',     role:'postęp reakcji Îľ',                    depends:['REACTION','STOICH'] },
  DERIVED:   { layer:'SERVICE',      owner:'CHE.DERIVED',      role:'wyniki pochodne i cache',             depends:['DATA','CHEM'] },
  DOM:       { layer:'PRESENTATION', owner:'CHE.DOM',          role:'wspólne helpery DOM/SVG',             depends:[] },
  VIZ:       { layer:'PRESENTATION', owner:'CHE.VIZ',          role:'prymitywy SVG',                       depends:['DATA','DOM'] },
  MOTION:    { layer:'PRESENTATION', owner:'CHE.MOTION',       role:'pętla RAF i animacje',                depends:['DOM'] },
  VIEW:      { layer:'PRESENTATION', owner:'CHE.VIEW',         role:'runtime widoków',                     depends:['DOM','VIZ','MOTION'] },
  EXPLAIN:   { layer:'PRESENTATION', owner:'CHE.EXPLAIN',      role:'klikane podpowiedzi',                 depends:['DOM'] },
  REGISTRY:  { layer:'META',         owner:'CHE.ENGINE',       role:'rejestr modułów',                     depends:[] },
  CONTRACT:  { layer:'META',         owner:'CHE.ENGINE',       role:'kontrakt architektury',               depends:['REGISTRY'] },
  AUDIT:     { layer:'META',         owner:'CHE.ENGINE',       role:'audyt spójności',                     depends:['REGISTRY','CONTRACT'] },
  PUBLIC:    { layer:'META',         owner:'CHE.ENGINE',       role:'publiczne API silnika',               depends:['REGISTRY','CONTRACT','AUDIT'] }
};
E.getModule = name => E.registry[name] || null;
E.all = ()=> Object.entries(E.registry).map(([n,m])=>({ name:n, ...m, version:E.modules[n] || '—', loaded: !!C[n] }));
E.layerOf = name => E.registry[name]?.layer || null;
E.ownerOf = name => E.registry[name]?.owner || null;
E.depsOf = name => E.registry[name]?.depends || [];
E.entryOf = name => {
  const owner = E.ownerOf(name);
  if(!owner) return null;
  const parts = owner.split('.');
  let x = g;
  for(const p of parts) x = x?.[p];
  return x || null;
};
})(window);

} catch (err) {
  try { console.warn('[CHE module 60]', err && err.message ? err.message : err); } catch(_){}
}