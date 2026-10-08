

try {
 
(function(g){
  var C=g.CHE=g.CHE||{}, D=C.DATA=C.DATA||{};
  D.SCHOOL_PACK={
  "version": "4.21",
  "policy": "EDUCATIONAL_BASE",
  "activitySeries": [
    "K",
    "Ca",
    "Na",
    "Mg",
    "Al",
    "Zn",
    "Fe",
    "Sn",
    "Pb",
    "H",
    "Cu",
    "Ag",
    "Au"
  ],
  "oxides": [
    {
      "f": "Na2O",
      "name": "tlenek sodu",
      "char": "zasadowy",
      "water": "NaOH"
    },
    {
      "f": "K2O",
      "name": "tlenek potasu",
      "char": "zasadowy",
      "water": "KOH"
    },
    {
      "f": "CaO",
      "name": "tlenek wapnia",
      "char": "zasadowy",
      "water": "Ca(OH)2"
    },
    {
      "f": "MgO",
      "name": "tlenek magnezu",
      "char": "zasadowy",
      "water": "praktycznie nie",
      "note": "w szkole reakcja z wodą bardzo słaba"
    },
    {
      "f": "Al2O3",
      "name": "tlenek glinu",
      "char": "amfoteryczny",
      "water": "nie"
    },
    {
      "f": "ZnO",
      "name": "tlenek cynku",
      "char": "amfoteryczny",
      "water": "nie"
    },
    {
      "f": "FeO",
      "name": "tlenek żelaza(II)",
      "char": "zasadowy",
      "water": "nie"
    },
    {
      "f": "Fe2O3",
      "name": "tlenek żelaza(III)",
      "char": "zasadowy",
      "water": "nie"
    },
    {
      "f": "CuO",
      "name": "tlenek miedzi(II)",
      "char": "zasadowy",
      "water": "nie"
    },
    {
      "f": "CO",
      "name": "tlenek węgla(II)",
      "char": "obojętny",
      "water": "nie",
      "note": "czad"
    },
    {
      "f": "CO2",
      "name": "tlenek węgla(IV)",
      "char": "kwasowy",
      "water": "H2CO3 nietrwały"
    },
    {
      "f": "SO2",
      "name": "tlenek siarki(IV)",
      "char": "kwasowy",
      "water": "H2SO3"
    },
    {
      "f": "SO3",
      "name": "tlenek siarki(VI)",
      "char": "kwasowy",
      "water": "H2SO4"
    },
    {
      "f": "N2O",
      "name": "tlenek azotu(I)",
      "char": "obojętny",
      "water": "nie"
    },
    {
      "f": "NO",
      "name": "tlenek azotu(II)",
      "char": "obojętny",
      "water": "nie"
    },
    {
      "f": "NO2",
      "name": "tlenek azotu(IV)",
      "char": "kwasowy",
      "water": "mieszanina"
    },
    {
      "f": "P2O5",
      "name": "tlenek fosforu(V), zapis szkolny",
      "char": "kwasowy",
      "water": "H3PO4",
      "note": "cząsteczka P4O10"
    },
    {
      "f": "SiO2",
      "name": "tlenek krzemu",
      "char": "kwasowy",
      "water": "nie",
      "note": "brak reakcji z wodą nie znaczy obojętny"
    }
  ],
  "hydroxides": [
    {
      "f": "NaOH",
      "name": "wodorotlenek sodu",
      "base": true,
      "sol": "bardzo dobrze"
    },
    {
      "f": "KOH",
      "name": "wodorotlenek potasu",
      "base": true,
      "sol": "bardzo dobrze"
    },
    {
      "f": "Ca(OH)2",
      "name": "wodorotlenek wapnia",
      "base": true,
      "sol": "słabo",
      "note": "woda wapienna"
    },
    {
      "f": "Mg(OH)2",
      "name": "wodorotlenek magnezu",
      "base": false,
      "sol": "praktycznie nie"
    },
    {
      "f": "Al(OH)3",
      "name": "wodorotlenek glinu",
      "base": false,
      "sol": "nie",
      "amph": true
    },
    {
      "f": "Zn(OH)2",
      "name": "wodorotlenek cynku",
      "base": false,
      "sol": "nie",
      "amph": true
    },
    {
      "f": "Fe(OH)2",
      "name": "wodorotlenek żelaza(II)",
      "base": false,
      "sol": "nie"
    },
    {
      "f": "Fe(OH)3",
      "name": "wodorotlenek żelaza(III)",
      "base": false,
      "sol": "nie"
    },
    {
      "f": "Cu(OH)2",
      "name": "wodorotlenek miedzi(II)",
      "base": false,
      "sol": "nie"
    }
  ],
  "acids": [
    {
      "f": "HCl",
      "name": "chlorowodorowy",
      "common": "solny",
      "residue": "Cl−",
      "H": 1,
      "strength": "mocny",
      "h2": true
    },
    {
      "f": "HBr",
      "name": "bromowodorowy",
      "residue": "Br−",
      "H": 1,
      "strength": "mocny",
      "h2": true
    },
    {
      "f": "HI",
      "name": "jodowodorowy",
      "residue": "I−",
      "H": 1,
      "strength": "mocny",
      "h2": true
    },
    {
      "f": "HF",
      "name": "fluorowodorowy",
      "residue": "F−",
      "H": 1,
      "strength": "słaby",
      "h2": false,
      "note": "wyjątek grupy 17"
    },
    {
      "f": "H2S",
      "name": "siarkowodorowy",
      "residue": "S2−",
      "H": 2,
      "strength": "słaby",
      "h2": false
    },
    {
      "f": "H2SO4",
      "name": "siarkowy(VI)",
      "residue": "SO4 2−",
      "H": 2,
      "strength": "mocny",
      "h2": true
    },
    {
      "f": "H2SO3",
      "name": "siarkowy(IV)",
      "residue": "SO3 2−",
      "H": 2,
      "strength": "słaby",
      "h2": false
    },
    {
      "f": "HNO3",
      "name": "azotowy(V)",
      "residue": "NO3−",
      "H": 1,
      "strength": "mocny",
      "h2": false,
      "note": "utleniający; pasywuje Fe i Al"
    },
    {
      "f": "HNO2",
      "name": "azotowy(III)",
      "residue": "NO2−",
      "H": 1,
      "strength": "słaby",
      "h2": false
    },
    {
      "f": "H2CO3",
      "name": "węglowy",
      "residue": "CO3 2−",
      "H": 2,
      "strength": "słaby",
      "h2": false
    },
    {
      "f": "H3PO4",
      "name": "fosforowy(V)",
      "residue": "PO4 3−",
      "H": 3,
      "strength": "średni",
      "h2": true
    },
    {
      "f": "H3PO3",
      "name": "fosforowy(III)",
      "residue": "HPO3 2−",
      "H": 2,
      "strength": "słaby",
      "h2": false,
      "note": "dwuprotonowy, HPO(OH)2"
    },
    {
      "f": "HClO4",
      "name": "chlorowy(VII)",
      "residue": "ClO4−",
      "H": 1,
      "strength": "mocny",
      "h2": true
    }
  ],
  "hclLevels": [
    {
      "level": "E8",
      "eq": "HCl → H+ + Cl−"
    },
    {
      "level": "dokładniej",
      "eq": "HCl + H2O → H3O+ + Cl−"
    },
    {
      "level": "cząsteczkowo",
      "eq": "HCl(g) kowalencyjny"
    }
  ],
  "solubility": [
    {
      "rule": "azotany(V)",
      "ok": "rozpuszczalne",
      "exc": "brak"
    },
    {
      "rule": "sole Na, K, NH4+",
      "ok": "rozpuszczalne",
      "exc": "—"
    },
    {
      "rule": "chlorki",
      "ok": "rozpuszczalne",
      "exc": "AgCl, PbCl2"
    },
    {
      "rule": "siarczany(VI)",
      "ok": "rozpuszczalne",
      "exc": "BaSO4, PbSO4, CaSO4 słabo"
    },
    {
      "rule": "węglany",
      "ok": "nierozpuszczalne",
      "exc": "Na, K, NH4+"
    }
  ],
  "indicators": [
    {
      "name": "oranż metylowy",
      "acid": "czerwony",
      "base": "żółty"
    },
    {
      "name": "lakmus",
      "acid": "czerwony",
      "base": "niebieski"
    },
    {
      "name": "fenoloftaleina",
      "acid": "bezbarwna",
      "base": "malinowa"
    }
  ],
  "constants": {
    "Vm_dm3": 22.4,
    "Kw": 1e-14,
    "note": "wartości szkolne, nie referencyjne"
  }
};
  C.SCHOOL_PACK_V421={version:'4.21',get:function(){return D.SCHOOL_PACK;}};
})(window);
} catch (err) {
  try { console.warn('[CHE SCHOOL_PACK]', err && err.message ? err.message : err); } catch(_){}
}