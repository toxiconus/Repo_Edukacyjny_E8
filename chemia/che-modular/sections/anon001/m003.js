try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DATA = C.DATA || {};
D.MOL3D = {
  C2H5OH:{n:'C₂H₅OH',label:'etanol',atoms:[['C',-130,20,0],['C',0,-50,0],['O',130,20,0],['H',200,-30,0],['H',-130,130,0],['H',-210,-30,60],['H',-210,-30,-60],['H',0,-120,100],['H',0,-120,-100]],bonds:[[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1]],acid:[3],note:'Alkohol: grupa –OH.'},
  C6H6:{n:'C₆H₆',label:'benzen',atoms:[['C',0,-140,0],['C',121,-70,0],['C',121,70,0],['C',0,140,0],['C',-121,70,0],['C',-121,-70,0],['H',0,-250,0],['H',217,-125,0],['H',217,125,0],['H',0,250,0],['H',-217,125,0],['H',-217,-125,0]],bonds:[[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]],acid:[],note:'Pierścień aromatyczny.'},
  C3H6O:{n:'C₃H₆O',label:'aceton',atoms:[['C',-125,70,0],['C',0,0,0],['O',0,-140,0],['C',125,70,0],['H',-125,180,0],['H',-210,25,70],['H',-210,25,-70],['H',125,180,0],['H',210,25,70],['H',210,25,-70]],bonds:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1],[3,7,1],[3,8,1],[3,9,1]],acid:[],note:'Keton: grupa >C=O.'},
  HCl:{n:'HCl',label:'kwas chlorowodorowy',atoms:[['Cl',-60,0,0],['H',70,0,0]],bonds:[[0,1,1]],acid:[1],note:'Mocny. W wodzie H⁺ przechodzi na H₂O: powstają H₃O⁺ i Cl⁻.'},
  HF:{n:'HF',label:'kwas fluorowodorowy',atoms:[['F',-50,0,0],['H',50,0,0]],bonds:[[0,1,1]],acid:[1],note:'Słaby. Silne wiązanie H–F utrudnia oderwanie protonu.'},
  H2O:{n:'H₂O',label:'woda',atoms:[['O',0,0,0],['H',-55,43,0],['H',55,43,0]],bonds:[[0,1,1],[0,2,1]],acid:[1,2],note:'Amfiprotyczna.'},
  H3O:{n:'H₃O⁺',label:'jon hydroniowy',atoms:[['O',0,30,0],['H',95,-20,0],['H',-48,-20,82],['H',-48,-20,-82]],bonds:[[0,1,1],[0,2,1],[0,3,1]],acid:[],note:'Forma protonu w wodzie.'},
  H2SO4:{n:'H₂SO₄',label:'kwas siarkowy(VI)',atoms:[['S',0,0,0],['O',0,110,90],['O',0,110,-90],['O',-130,-70,0],['O',130,-70,0],['H',-200,-110,0],['H',200,-110,0]],bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1],[3,5,1],[4,6,1]],acid:[5,6],note:'Mocny w I stopniu, słaby w II.'},
  H3PO4:{n:'H₃PO₄',label:'kwas fosforowy(V)',atoms:[['P',0,0,0],['O',0,140,0],['O',-125,-55,60],['O',125,-55,60],['O',0,-55,-140],['H',-200,-100,90],['H',200,-100,90],['H',0,-110,-220]],bonds:[[0,1,2],[0,2,1],[0,3,1],[0,4,1],[2,5,1],[3,6,1],[4,7,1]],acid:[5,6,7],note:'Trójprotonowy, słaby.'},
  H2CO3:{n:'H₂CO₃',label:'kwas węglowy',atoms:[['C',0,0,0],['O',0,120,0],['O',-105,-65,0],['O',105,-65,0],['H',-190,-20,20],['H',190,-20,-20]],bonds:[[0,1,2],[0,2,1],[0,3,1],[2,4,1],[3,5,1]],acid:[4,5],note:'Słaby, nietrwały — ⇌ CO₂ + H₂O.'},
  CH3COOH:{n:'CH₃COOH',label:'kwas octowy',atoms:[['C',-140,0,0],['H',-190,90,20],['H',-190,-50,85],['H',-190,-50,-85],['C',0,0,0],['O',60,105,0],['O',70,-105,0],['H',160,-100,20]],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[4,5,2],[4,6,1],[6,7,1]],acid:[7],note:'Tylko H z grupy –COOH jest kwaśny.'},
  HCOOH:{n:'HCOOH',label:'kwas mrówkowy',atoms:[['C',0,0,0],['H',-90,60,0],['O',100,70,0],['O',0,-120,0],['H',85,-170,0]],bonds:[[0,1,1],[0,2,2],[0,3,1],[3,4,1]],acid:[4],note:'Najprostszy kwas karboksylowy.'},
  NH3:{n:'NH₃',label:'amoniak',atoms:[['N',0,-20,0],['H',-60,35,30],['H',50,35,45],['H',10,35,-65]],bonds:[[0,1,1],[0,2,1],[0,3,1]],acid:[],note:'Zasada Brønsteda.'},
  CO2:{n:'CO₂',label:'dwutlenek węgla',atoms:[['O',-95,0,0],['C',0,0,0],['O',95,0,0]],bonds:[[0,1,2],[1,2,2]],acid:[],note:'Liniowy, kąt 180°.'},
  CH4:{n:'CH₄',label:'metan',atoms:[['C',0,0,0],['H',50,50,50],['H',-50,-50,50],['H',-50,50,-50],['H',50,-50,-50]],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],acid:[],note:'Tetraedryczna.'},
  H2S:{n:'H₂S',label:'siarkowodór',atoms:[['S',0,0,0],['H',-90,70,0],['H',90,70,0]],bonds:[[0,1,1],[0,2,1]],acid:[],note:'Cząsteczka kątowa; gazowy produkt ma właściwości toksyczne.'},
  SO2:{n:'SO₂',label:'dwutlenek siarki',atoms:[['S',0,0,0],['O',-105,75,0],['O',105,75,0]],bonds:[[0,1,2],[0,2,2]],acid:[],note:'Cząsteczka kątowa i polarna; tlenek siarki(IV).'},
  HCN:{n:'HCN',label:'cyjanowodór',atoms:[['H',-100,0,0],['C',0,0,0],['N',110,0,0]],bonds:[[0,1,1],[1,2,3]],acid:[0],note:'Cząsteczka liniowa H–C≡N; toksyczny gaz.'},
  H2O2:{n:'H₂O₂',label:'nadtlenek wodoru',atoms:[['O',-60,0,0],['O',60,0,0],['H',-100,75,0],['H',100,-75,0]],bonds:[[0,1,1],[0,2,1],[1,3,1]],acid:[],note:'Zawiera wiązanie nadtlenkowe O–O; geometria uproszczona do ilustracji 2D.'},
  CO:{n:'CO',label:'tlenek węgla(II)',atoms:[['C',-65,0,0],['O',65,0,0]],bonds:[[0,1,3]],acid:[],note:'Dwuatomowa cząsteczka z wiązaniem C≡O; gaz silnie toksyczny.'},
  SO3:{n:'SO₃',label:'tlenek siarki(VI)',atoms:[['S',0,0,0],['O',0,-115,0],['O',100,58,0],['O',-100,58,0]],bonds:[[0,1,2],[0,2,2],[0,3,2]],acid:[],note:'AX₃ — trygonalna płaska, kąt 120°; brak wolnych par na S (zapis wiązań uproszczony).'},
   N2O:{n:'N₂O',label:'tlenek azotu(I)',atoms:[['N',-112,0,0],['N',0,0,0],['O',108,0,0]],bonds:[[0,1,2],[1,2,2]],acid:[],note:'AX₂ — liniowa N=N=O, 180° (gaz rozweselający; tlenek obojętny).'},
   NO2:{n:'NO₂',label:'tlenek azotu(IV)',atoms:[['N',0,-20,0],['O',-100,22,0],['O',100,22,0]],bonds:[[0,1,2],[0,2,1]],acid:[],note:'AX₂E — kątowa, ok. 134°; niesparowany elektron na N — model zamkniętopowłokowy to przybliżenie (brunatny gaz).'}
};
D.MOL2D = {carboxyl:{atoms:[['C',150,145],['H',95,80],['H',65,150],['H',95,215],['C',270,145],['O',335,215],['O',335,75],['H',430,65]],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[4,5,2],[4,6,1],[6,7,1]],groups:[{ids:[4,5,6,7],l:'–COOH',c:'#6b3fa0'}],acid:[7]}};
D.MOLECULES = {};
Object.entries(D.MOL3D).forEach(([id,m])=>{
  D.MOLECULES[id] = { id, name:m.n, label:m.label||m.n,
    atoms:m.atoms.map((a,i)=>({id:i,element:a[0],x:a[1],y:a[2],z:a[3],acid:!!(m.acid||[]).includes(i)})),
    bonds:m.bonds.map(b=>({a:b[0],b:b[1],order:b[2]||1})), note:m.note||'', geometry:null, angles:[], charge:0 };
});
D.MOLECULES.H2O.geometry='kątowa'; D.MOLECULES.H2O.angles=[{atoms:[1,0,2],deg:104.5}];
D.MOLECULES.CO2.geometry='liniowa'; D.MOLECULES.CO2.angles=[{atoms:[0,1,2],deg:180}];
D.MOLECULES.NH3.geometry='piramidalna'; D.MOLECULES.NH3.angles=[{atoms:[1,0,2],deg:107},{atoms:[1,0,3],deg:107},{atoms:[2,0,3],deg:107}];
D.MOLECULES.CH4.geometry='tetraedryczna'; D.MOLECULES.CH4.angles=[{atoms:[1,0,2],deg:109.5},{atoms:[1,0,3],deg:109.5},{atoms:[1,0,4],deg:109.5}];
C.deepFreeze(D.MOLECULES); C.deepFreeze(D.MOL3D); C.deepFreeze(D.MOL2D);
})(window);

} catch (err) {
  try { console.warn('[CHE module 3]', err && err.message ? err.message : err); } catch(_){}
}

