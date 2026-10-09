

try {
(function(g){
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  var fill={"Li": {"meltingPoint": 453.7, "boilingPoint": 1603, "density": 0.534, "stateSTP": "solid", "ionizationEnergies": [520.2]}, "Be": {"meltingPoint": 1560, "boilingPoint": 2742, "density": 1.85, "stateSTP": "solid", "ionizationEnergies": [899.5]}, "B": {"meltingPoint": 2349, "boilingPoint": 4200, "density": 2.34, "stateSTP": "solid", "ionizationEnergies": [800.6]}, "Ne": {"meltingPoint": 24.56, "boilingPoint": 27.07, "density": 0.0009, "stateSTP": "gas", "ionizationEnergies": [2080.7]}, "Ar": {"meltingPoint": 83.81, "boilingPoint": 87.3, "density": 0.0018, "stateSTP": "gas", "ionizationEnergies": [1520.6]}, "Sc": {"meltingPoint": 1814, "boilingPoint": 3109, "density": 2.99, "stateSTP": "solid", "ionizationEnergies": [633.1]}, "Ti": {"meltingPoint": 1941, "boilingPoint": 3560, "density": 4.51, "stateSTP": "solid", "ionizationEnergies": [658.8]}, "V": {"meltingPoint": 2183, "boilingPoint": 3680, "density": 6.11, "stateSTP": "solid", "ionizationEnergies": [650.9]}, "Cr": {"meltingPoint": 2180, "boilingPoint": 2944, "density": 7.15, "stateSTP": "solid", "ionizationEnergies": [652.9]}, "Mn": {"meltingPoint": 1519, "boilingPoint": 2334, "density": 7.44, "stateSTP": "solid", "ionizationEnergies": [717.3]}, "Co": {"meltingPoint": 1768, "boilingPoint": 3200, "density": 8.86, "stateSTP": "solid", "ionizationEnergies": [760.4]}, "Ni": {"meltingPoint": 1728, "boilingPoint": 3186, "density": 8.91, "stateSTP": "solid", "ionizationEnergies": [737.1]}, "Ga": {"meltingPoint": 302.9, "boilingPoint": 2673, "density": 5.91, "stateSTP": "solid", "ionizationEnergies": [578.8]}, "Ge": {"meltingPoint": 1211, "boilingPoint": 3106, "density": 5.32, "stateSTP": "solid", "ionizationEnergies": [762]}, "As": {"meltingPoint": 1090, "boilingPoint": 887, "density": 5.73, "stateSTP": "solid", "ionizationEnergies": [947]}, "Se": {"meltingPoint": 494, "boilingPoint": 958, "density": 4.81, "stateSTP": "solid", "ionizationEnergies": [941]}, "Br": {"meltingPoint": 265.8, "boilingPoint": 332.0, "density": 3.12, "stateSTP": "liquid", "ionizationEnergies": [1139.9]}, "Kr": {"meltingPoint": 115.8, "boilingPoint": 119.9, "density": 0.0037, "stateSTP": "gas", "ionizationEnergies": [1350.8]}, "Rb": {"meltingPoint": 312.5, "boilingPoint": 961, "density": 1.53, "stateSTP": "solid", "ionizationEnergies": [403.0]}, "Sr": {"meltingPoint": 1050, "boilingPoint": 1655, "density": 2.64, "stateSTP": "solid", "ionizationEnergies": [549.5]}, "Sn": {"meltingPoint": 505.1, "boilingPoint": 2875, "density": 7.31, "stateSTP": "solid", "ionizationEnergies": [708.6]}, "Sb": {"meltingPoint": 903.8, "boilingPoint": 1860, "density": 6.68, "stateSTP": "solid", "ionizationEnergies": [834]}, "Te": {"meltingPoint": 722.7, "boilingPoint": 1261, "density": 6.24, "stateSTP": "solid", "ionizationEnergies": [869.3]}, "Xe": {"meltingPoint": 161.4, "boilingPoint": 165.1, "density": 0.0059, "stateSTP": "gas", "ionizationEnergies": [1170.4]}, "Cs": {"meltingPoint": 301.6, "boilingPoint": 944, "density": 1.87, "stateSTP": "solid", "ionizationEnergies": [375.7]}, "Au": {"meltingPoint": 1337, "boilingPoint": 3129, "density": 19.3, "stateSTP": "solid", "ionizationEnergies": [890.1]}, "Hg": {"meltingPoint": 234.3, "boilingPoint": 629.9, "density": 13.53, "stateSTP": "liquid", "ionizationEnergies": [1007.1]}, "Pt": {"meltingPoint": 2041, "boilingPoint": 4098, "density": 21.45, "stateSTP": "solid", "ionizationEnergies": [870]}};
  var added=0;
  Object.keys(fill).forEach(function(sym){
    if(D.ATOMIC_PROPS&&D.ATOMIC_PROPS[sym]&&D.ATOMIC_PROPS[sym].meltingPoint!=null) return;
    D.ATOMIC_PROPS=D.ATOMIC_PROPS||{};
    var base=Object.assign({}, D.ATOMIC_PROPS[sym]||{}, fill[sym]);
    var el=(D.ELEMENTS_118||[]).find(function(e){return e.s===sym});
    if(el&&el.en!=null&&base.electronegativityPauling==null) base.electronegativityPauling=el.en;
    base.provenance={source:'EDU_FILL_V1612',note:'wartosci szkolne, nie bramka referencyjna'};
    D.ATOMIC_PROPS[sym]=base;
    if(D.ATOMIC_PROFILES&&D.ATOMIC_PROFILES[sym]){
      D.ATOMIC_PROFILES[sym].properties=Object.assign({}, D.ATOMIC_PROFILES[sym].properties, base);
      D.ATOMIC_PROFILES[sym].status='EDU_PARTIAL';
    }
    added++;
  });
  C.EDU_ATOMIC_FILL_V1612={version:'16.12',added:added,policy:'EDUCATIONAL_BASE',scientificGate:'BLOCKED'};
})(window);
} catch (err) { try { console.warn('[CHE EDU_FILL]', err&&err.message); } catch(_){} }
