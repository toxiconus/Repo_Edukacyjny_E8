/* v0.35: CHE.DATA.ACID_SYSTEMS — ujednolicone pKa (25 °C, woda; CRC / IUPAC; CH₃COOH = rekord VERIFIED 4,756) + brakujące kwasy z lekcji N03 */
(function(){
const A=D.ACID_SYSTEMS,set=(k,o)=>{if(A[k])Object.assign(A[k],o)};
set('HF',{pKa:[3.20],Ka:[6.3e-4],note:'słaby mimo dużej elektroujemności F'});
set('CH3COOH',{pKa:[4.756],Ka:[1.75e-5],ref:'PUBCHEM-ACETIC-PKA-25C'});
set('H3PO4',{pKa:[2.16,7.21,12.32],Ka:[6.9e-3,6.2e-8,4.8e-13],note:'średniej mocy (α₁ ≈ 0,23 dla 0,1 mol/dm³)'});
set('H2CO3',{pKa:[6.35,10.33],Ka:[4.47e-7,4.68e-11],note:'stała „pozorna” — dotyczy CO₂(aq) + H₂CO₃'});
set('H2SO4',{note:'mocny tylko w I stopniu; HSO₄⁻ pKa 1,99'});
Object.assign(A,{
 HBr:{id:'HBr',formula:'HBr',species:['HBr','Br⁻'],pKa:[-9],Ka:[null],strong:true,anion:'Br⁻'},
 HI:{id:'HI',formula:'HI',species:['HI','I⁻'],pKa:[-10],Ka:[null],strong:true,anion:'I⁻'},
 HClO4:{id:'HClO4',formula:'HClO₄',species:['HClO₄','ClO₄⁻'],pKa:[-10],Ka:[null],strong:true,anion:'ClO₄⁻'},
 H2SO3:{id:'H2SO3',formula:'H₂SO₃',species:['H₂SO₃','HSO₃⁻','SO₃²⁻'],pKa:[1.85,7.2],Ka:[1.4e-2,6.3e-8],strong:false,anion:'HSO₃⁻',note:'średniej mocy; nietrwały (SO₂ + H₂O)'},
 HNO2:{id:'HNO2',formula:'HNO₂',species:['HNO₂','NO₂⁻'],pKa:[3.35],Ka:[4.5e-4],strong:false,anion:'NO₂⁻'},
 H2S:{id:'H2S',formula:'H₂S',species:['H₂S','HS⁻'],pKa:[7.0],Ka:[1.0e-7],strong:false,anion:'HS⁻',protonsFormal:2,note:'formalnie dwuprotonowy; II stopień praktycznie nie zachodzi (pKa₂ w literaturze 12–19)'},
 H3PO3:{id:'H3PO3',formula:'H₃PO₃',species:['H₃PO₃','H₂PO₃⁻','HPO₃²⁻'],pKa:[1.3,6.7],Ka:[5.0e-2,2.0e-7],strong:false,anion:'H₂PO₃⁻',note:'dwuprotonowy (jeden H związany z P)'},
 C3H6O3:{id:'C3H6O3',formula:'CH₃CH(OH)COOH',species:['kwas mlekowy','mleczan'],pKa:[3.86],Ka:[1.38e-4],strong:false,anion:'CH₃CH(OH)COO⁻'},
 C6H8O7:{id:'C6H8O7',formula:'C₆H₈O₇',species:['H₃Cit','H₂Cit⁻','HCit²⁻','Cit³⁻'],pKa:[3.13,4.76,6.40],Ka:[7.4e-4,1.7e-5,4.0e-7],strong:false,anion:'H₂Cit⁻'}
});
})();
