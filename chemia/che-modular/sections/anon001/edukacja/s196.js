

try {

(function(CHE){
  CHE.DATA = CHE.DATA || {};
  CHE.DATA.EDUCATION_MASS_V311 = {
    version:'3.11',
    status:'EDUCATIONAL_SOURCE_BACKED',
    priority:['SP7_8','LO_BIOL_CHEM','LO_EXT'],
    sources:[
      {id:'ZPE_CHEM_SP_2025_2026',kind:'CURRICULUM',url:'https://zpe.gov.pl/podstawa-programowa/szkola-podstawowa/chemia'},
      {id:'ZPE_CHEM_LO_2025_2026',kind:'CURRICULUM',url:'https://zpe.gov.pl/podstawa-programowa/szkola-ponadpodstawowa/chemia'},
      {id:'LIBRETEXTS_SOLUBILITY',kind:'EDUCATIONAL_REFERENCE',url:'https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_%28Physical_and_Theoretical_Chemistry%29/Equilibria/Solubilty/Solubility_Rules'},
      {id:'LIBRETEXTS_INDICATORS',kind:'EDUCATIONAL_REFERENCE',url:'https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_%28Physical_and_Theoretical_Chemistry%29/Equilibria/Acid-Base_Equilibria/6._Acid-Base_Equilibria/6._Acid-Base_Indicators'}
    ],
    solubilityRules:[
      {id:'SR01',anion:'NO3-',rule:'SOLUBLE',exception:'none in standard school rule set'},
      {id:'SR02',anion:'CH3COO-',rule:'SOLUBLE',exception:'none in standard school rule set'},
      {id:'SR03',cation:'Li+/Na+/K+/NH4+',rule:'SOLUBLE',exception:'none in standard school rule set'},
      {id:'SR04',anion:'Cl-/Br-/I-',rule:'MOSTLY_SOLUBLE',exception:'Ag+, Pb2+, Hg2^2+'},
      {id:'SR05',anion:'SO4^2-',rule:'MOSTLY_SOLUBLE',exception:'Ba2+, Sr2+, Pb2+, Ca2+, Ag+; context-dependent'},
      {id:'SR06',anion:'CO3^2-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+'},
      {id:'SR07',anion:'PO4^3-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+'},
      {id:'SR08',anion:'OH-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+; Ca/Sr/Ba are sparingly soluble'},
      {id:'SR09',anion:'S^2-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+; selected Group 2 salts are more soluble'},
      {id:'SR10',anion:'O^2-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and selected Group 2 oxides react with water'},
      {id:'SR11',anion:'CrO4^2-',rule:'MOSTLY_INSOLUBLE',exception:'Group 1 and NH4+'}
    ],
    solubilityExamples:[
      ['NaCl','SOLUBLE'],['KNO3','SOLUBLE'],['NH4Cl','SOLUBLE'],['Na2CO3','SOLUBLE'],['K3PO4','SOLUBLE'],
      ['AgNO3','SOLUBLE'],['AgCl','INSOLUBLE'],['AgBr','INSOLUBLE'],['AgI','INSOLUBLE'],['PbI2','INSOLUBLE'],
      ['BaSO4','INSOLUBLE'],['SrSO4','INSOLUBLE'],['CaSO4','SPARINGLY_SOLUBLE'],['Na2SO4','SOLUBLE'],
      ['CaCO3','INSOLUBLE'],['CuCO3','INSOLUBLE'],['MgCO3','INSOLUBLE'],['NaOH','SOLUBLE'],['KOH','SOLUBLE'],
      ['Mg(OH)2','INSOLUBLE'],['Al(OH)3','INSOLUBLE'],['Cu(OH)2','INSOLUBLE'],['Fe(OH)3','INSOLUBLE'],
      ['Ca(OH)2','SPARINGLY_SOLUBLE'],['Ba(OH)2','SOLUBLE'],['Na3PO4','SOLUBLE'],['Ca3(PO4)2','INSOLUBLE'],
      ['FeS','INSOLUBLE'],['ZnS','INSOLUBLE'],['CuS','INSOLUBLE']
    ].map(function(x){return {formula:x[0],classification:x[1],source:'LIBRETEXTS_SOLUBILITY',layer:'EDUCATIONAL'};}),
    indicators:[
      {id:'phenolphthalein',range:[8.2,10.0],acidColor:'colorless',baseColor:'pink',priority:'SP7_8'},
      {id:'methyl_orange',range:[3.1,4.4],acidColor:'red',baseColor:'yellow',priority:'SP7_8'},
      {id:'litmus',range:[5.0,8.0],acidColor:'red',baseColor:'blue',priority:'SP7_8'},
      {id:'bromothymol_blue',range:[6.0,7.6],acidColor:'yellow',baseColor:'blue',priority:'LO'},
      {id:'methyl_red',range:[4.2,6.3],acidColor:'red',baseColor:'yellow',priority:'LO'},
      {id:'bromocresol_green',range:[3.8,5.4],acidColor:'yellow',baseColor:'blue',priority:'LO'},
      {id:'phenol_red',range:[6.8,8.4],acidColor:'yellow',baseColor:'red',priority:'LO'},
      {id:'thymol_blue_basic',range:[8.0,9.6],acidColor:'yellow',baseColor:'blue',priority:'LO'}
    ].map(function(x){x.source='LIBRETEXTS_INDICATORS';x.layer='EDUCATIONAL';return x;}),
    reactionFamilies:[
      {id:'RF01',name:'synteza',template:'A + B -> AB'},
      {id:'RF02',name:'analiza',template:'AB -> A + B'},
      {id:'RF03',name:'wymiana pojedyncza',template:'A + BC -> AC + B'},
      {id:'RF04',name:'wymiana podwójna',template:'AB + CD -> AD + CB'},
      {id:'RF05',name:'spalanie',template:'fuel + O2 -> oxides'},
      {id:'RF06',name:'neutralizacja',template:'acid + base -> salt + H2O'},
      {id:'RF07',name:'strącanie',template:'soluble ionic + soluble ionic -> precipitate'},
      {id:'RF08',name:'metal + acid',template:'metal + acid -> salt + H2'},
      {id:'RF09',name:'oxide + acid',template:'basic oxide + acid -> salt + H2O'},
      {id:'RF10',name:'oxide + base',template:'acidic/amphoteric oxide + base -> salt + H2O / complex'}
    ],
    redoxCore:[
      {id:'RED01',pair:'Zn2+/Zn',E0:'-0.76 V',role:'reduction/reference'},
      {id:'RED02',pair:'Cu2+/Cu',E0:'+0.34 V',role:'reduction/reference'},
      {id:'RED03',pair:'Fe2+/Fe',E0:'-0.44 V',role:'reduction/reference'},
      {id:'RED04',pair:'Ag+/Ag',E0:'+0.80 V',role:'reduction/reference'},
      {id:'RED05',pair:'H+/H2',E0:'0.00 V',role:'SHE reference'}
    ],
    kinetics:[
      {id:'K01',factor:'concentration',effect:'collision_frequency'},
      {id:'K02',factor:'temperature',effect:'fraction_above_activation_energy'},
      {id:'K03',factor:'surface_area',effect:'contact_frequency'},
      {id:'K04',factor:'catalyst',effect:'lower_activation_energy_path'},
      {id:'K05',factor:'pressure_for_gases',effect:'effective_concentration'}
    ],
    stoichTasks:[
      'n=m/M','m=nM','N=nNA','c=n/V','c1V1=c2V2','mass_fraction','limiting_reagent','yield','gas_volume','empirical_formula','molecular_formula','reaction_stoichiometry'
    ],
    experiments:[
      'density_measurement','mixture_filtration','crystallization','distillation','oxygen_properties','hydrogen_test','carbon_dioxide_test','acid_base_indicator','neutralization','precipitation','metal_acid_reaction','corrosion','reaction_rate','energy_effect','chromatography'
    ],
    biomolecules:[
      {id:'glucose',formula:'C6H12O6',class:'monosaccharide',school:'SP7_8/LO'},
      {id:'fructose',formula:'C6H12O6',class:'monosaccharide',school:'SP7_8/LO'},
      {id:'sucrose',formula:'C12H22O11',class:'disaccharide',school:'SP7_8/LO'},
      {id:'starch',formula:'(C6H10O5)n',class:'polysaccharide',school:'SP7_8/LO'},
      {id:'cellulose',formula:'(C6H10O5)n',class:'polysaccharide',school:'SP7_8/LO'},
      {id:'glycine',formula:'C2H5NO2',class:'amino_acid',school:'LO'},
      {id:'alanine',formula:'C3H7NO2',class:'amino_acid',school:'LO'},
      {id:'ethanol',formula:'C2H6O',class:'alcohol',school:'SP7_8/LO'},
      {id:'acetic_acid',formula:'C2H4O2',class:'carboxylic_acid',school:'SP7_8/LO'},
      {id:'aspirin',formula:'C9H8O4',class:'organic_example',school:'LO'}
    ],
    introducedPolicy:{unchanged:'SKIP_ALREADY_INTRODUCED',changed:'VERIFY_AGAIN',missing:'SEARCH_AND_APPEND'}
  };
  CHE.EDUCATION = CHE.EDUCATION || {};
  CHE.EDUCATION.solubilityClass = function(formula){
    var a=CHE.DATA.EDUCATION_MASS_V311.solubilityExamples.find(function(x){return x.formula===formula;});
    return a ? a.classification : 'NOT_IN_EDUCATIONAL_EXAMPLE_SET';
  };
  CHE.EDUCATION.indicatorAt = function(id,pH){
    var a=CHE.DATA.EDUCATION_MASS_V311.indicators.find(function(x){return x.id===id;});
    if(!a) return null;
    return {id:id,pH:pH,transition:pH<a.range[0]?'acid-side':(pH>a.range[1]?'base-side':'transition-range'),range:a.range};
  };
  CHE.EDUCATION.ledger = CHE.EDUCATION.ledger || {};
  CHE.EDUCATION.ledger.V311 = {status:'INTRODUCED',records:CHE.DATA.EDUCATION_MASS_V311.solubilityExamples.length+CHE.DATA.EDUCATION_MASS_V311.indicators.length+CHE.DATA.EDUCATION_MASS_V311.reactionFamilies.length+CHE.DATA.EDUCATION_MASS_V311.experiments.length+CHE.DATA.EDUCATION_MASS_V311.biomolecules.length,policy:'NO_RESEARCH_FOR_UNCHANGED_RECORDS'};
})(window.CHE || (window.CHE={}));

} catch (err) {
  try { console.warn('[CHE module 196]', err && err.message ? err.message : err); } catch(_){}
}