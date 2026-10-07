;/* ===== v0.56: GFX.rx — wygląd reakcji lekcji N04 Sole (strącanie, węglany, hydrat, odczyn roztworów soli). Równania i obserwacje z CHE.REACTION, gdy klucz istnieje. ===== */
(function(){const P=(k,sp)=>{if(!rx.get(k))rx.register(k,sp)};const u=v=>['ind-uniwersalny',v],wh=[245,245,240],pw=c=>({col:c,eq:4,end:0,t:'powder',shape:'powder'});
 P('bacl2Na2so4',{n:'BaCl₂ + Na₂SO₄',ppt:'ppt-baso4',out:['osad'],why:'Biały osad BaSO₄ — nie roztwarza się w kwasach; tak wykrywamy jony SO₄²⁻.'});
 P('cacl2Na2co3',{n:'CaCl₂ + Na₂CO₃',ppt:'ppt-caco3',out:['osad'],why:'Biały osad CaCO₃ — tak soda zmiękcza wodę twardą; osad musuje po dodaniu kwasu.'});
 P('na2co3Hcl',{n:'Na₂CO₃ + HCl',out:['gaz'],gas:'CO2',bubN:1.4,foam:1,why:'Roztwór sody musuje — wydziela się CO₂ (wykrywanie jonów węglanowych; gaz mętni wodę wapienną).'});
 P('cuso4Hydrate',{n:'CuSO₄ (bezwodny) + H₂O',solid:pw(wh),l1:'ion-cu2',out:['barwa'],heat:.6,T:36,why:'Biały, bezwodny CuSO₄ po dodaniu wody niebieszczeje i lekko się ogrzewa — powstaje hydrat CuSO₄·5H₂O (tak wykrywa się wodę).'});
 P('hyd-nacl',{qualitative:1,n:'NaCl + H₂O (+ wskaźnik uniwersalny)',solid:pw(wh),l0:u(7),l1:u(7),out:['barwa'],eq:'NaCl → Na⁺ + Cl⁻ (brak hydrolizy)',why:'Sól mocnego kwasu i mocnej zasady — wskaźnik pozostaje zielony, pH ≈ 7.'});
 P('hyd-na2co3',{qualitative:1,n:'Na₂CO₃ + H₂O (+ wskaźnik uniwersalny)',solid:pw(wh),l0:u(7),l1:u(11.6),out:['barwa'],eq:'CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻',why:'Anion słabego kwasu reaguje z wodą — powstają jony OH⁻; wskaźnik granatowoniebieski (0,1 mol/dm³: pH ≈ 11,7).'});
 P('hyd-nh4cl',{qualitative:1,n:'NH₄Cl + H₂O (+ wskaźnik uniwersalny)',solid:pw(wh),l0:u(7),l1:u(5.1),out:['barwa'],eq:'NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺',why:'Kation słabej zasady oddaje proton wodzie — powstają jony H₃O⁺; wskaźnik pomarańczowy (0,1 mol/dm³: pH ≈ 5,1).'});
 P('hyd-cuso4',{qualitative:1,n:'CuSO₄ + H₂O (+ wskaźnik uniwersalny)',solid:pw(wh),l0:u(7),l1:u(4),out:['barwa'],eq:'Cu²⁺ + 2 H₂O ⇌ CuOH⁺ + H₃O⁺',why:'Uwodniony jon Cu²⁺ zakwasza roztwór — odczyn kwasowy (pH ok. 4); roztwór niebieski od jonów Cu²⁺.'});
})();
