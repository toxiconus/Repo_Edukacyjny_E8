/* ===== GFX.rx — wygląd reakcji N01 Tlenki (klucze CHE.REACTION); barwy wskaźników z CHE.COLORS (ind-uniwersalny) ===== */
(function(){const P=(k,sp)=>{if(!rx.get(k))rx.register(k,sp)};const u=v=>['ind-uniwersalny',v],wh=[245,245,240],pw=c=>({col:c,eq:4,end:0,t:'powder',shape:'powder'});
 P('so3H2o',{n:'SO₃ + H₂O (+ wskaźnik uniwersalny)',solid:pw(wh),l0:u(7),l1:u(1.5),out:['barwa'],heat:1.4,T:50,teacher:1,why:'Reakcja silnie egzotermiczna; powstaje H₂SO₄ — wskaźnik czerwony (odczyn silnie kwasowy).'});
 P('so2H2o',{n:'SO₂ + H₂O (+ wskaźnik uniwersalny)',l0:u(7),l1:u(2.5),out:['barwa'],gas:'SO2',bubN:.6,teacher:1,why:'SO₂ rozpuszcza się w wodzie; roztwór kwasowy (H₂SO₃) — wskaźnik czerwonopomarańczowy. Dygestorium.'});
 P('co2H2o',{n:'CO₂ + H₂O (+ wskaźnik uniwersalny)',l0:u(7),l1:u(5.6),out:['barwa'],gas:'CO2',bubN:.8,why:'CO₂ rozpuszcza się częściowo (równowaga z H₂CO₃) — odczyn słabo kwasowy, pH ≈ 5,6.'});
 P('p4o10H2o',{n:'P₄O₁₀ + H₂O (+ wskaźnik uniwersalny)',solid:pw(wh),l0:u(7),l1:u(1.8),out:['barwa'],heat:1,T:40,teacher:1,why:'Biały proszek znika z sykiem; powstaje H₃PO₄ — odczyn kwasowy.'});
 P('caoHcl',{n:'CaO + HCl',solid:pw(wh),out:['nic'],heat:.8,T:38,why:'Biały proszek znika, roztwór bezbarwny i ciepły (CaCl₂ + H₂O).'});
 P('mgoHcl',{n:'MgO + HCl',solid:pw(wh),out:['nic'],heat:.5,T:32,why:'Biały MgO znika — tlenek zasadowy reaguje z kwasem, choć z wodą prawie nie.'});
 P('znoHcl',{n:'ZnO + HCl',solid:pw(wh),out:['nic'],why:'Biały ZnO znika — roztwór bezbarwny (ZnCl₂).'});
 P('al2o3Hcl',{n:'Al₂O₃ + HCl (na gorąco)',solid:Object.assign(pw(wh),{end:.45}),out:['nic'],T:60,why:'Reakcja powolna, przyspiesza ogrzewanie; tlenek amfoteryczny reaguje z kwasem.'});
 P('fe2o3Hcl',{n:'Fe₂O₃ + HCl',solid:pw([140,52,30]),l1:'ion-fe3',out:['barwa'],T:45,why:'Rdzawy proszek znika, roztwór żółtobrunatny (jony Fe³⁺).'});
 P('fe2o3H2so4',{n:'Fe₂O₃ + H₂SO₄',solid:pw([140,52,30]),l1:'ion-fe3',out:['barwa'],T:45,why:'Rdzawy proszek znika, roztwór żółty (Fe³⁺).'});
 P('so2Naoh',{n:'SO₂ + NaOH',out:['nic'],gas:'SO2',bubN:.5,teacher:1,why:'Gaz jest pochłaniany przez zasadę — brak widocznych zmian w roztworze (Na₂SO₃).'});
 P('so3Naoh',{n:'SO₃ + NaOH (+ fenoloftaleina)',solid:pw(wh),l0:['ind-fenoloftaleina',13],l1:['ind-fenoloftaleina',7],out:['barwa'],heat:1,T:42,teacher:1,why:'Tlenek kwasowy zobojętnia zasadę — malinowa barwa znika.'});
 P('naohCo2',{n:'CO₂ + NaOH',out:['nic'],gas:'CO2',bubN:.7,why:'CO₂ jest pochłaniany (powstaje Na₂CO₃) — bez widocznych zmian; tak pochłania się CO₂ z powietrza.'});
 P('al2o3NaohAq',{n:'Al₂O₃ + NaOH (roztwór, ogrzewanie)',solid:Object.assign(pw(wh),{end:.2}),out:['nic'],T:70,why:'Biały tlenek powoli się roztwarza — amfoteryczność (Na[Al(OH)₄]).'});
 P('znoNaohAq',{n:'ZnO + NaOH (roztwór)',solid:pw(wh),out:['nic'],why:'ZnO roztwarza się w mocnej zasadzie — amfoteryczność.'});
 P('sio2Naoh',{n:'SiO₂ + NaOH (stężony, ogrzewanie)',solid:Object.assign(pw([235,235,230]),{end:.6}),out:['nic'],T:85,teacher:1,why:'Bardzo powolna reakcja na gorąco — sieć kowalencyjna krzemionki jest trwała.'});
})();
