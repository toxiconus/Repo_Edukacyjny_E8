# -*- coding: utf-8 -*-
"""Generator danych N02 Wodorotlenki → src/d_hydroxides_sub.js (SUBSTANCES) i src/d_hydroxides_rx.js (REACTIONS).
Bilans każdej reakcji sprawdzany tutaj (assert), potem przez CHE.REACTION.audit. Klucze nie mogą kolidować z istniejącymi
(lista: test/rxkeys.txt, odświeżana testem dump) — JS i tak dodaje tylko brakujące."""
import re, json, os
D = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(D)
A = {'H':1.008,'Li':6.94,'Be':9.0122,'C':12.011,'N':14.007,'O':15.999,'Na':22.990,'Mg':24.305,'Al':26.982,'S':32.06,'Cl':35.45,'K':39.098,'Ca':40.078,
     'Cr':51.996,'Mn':54.938,'Fe':55.845,'Ni':58.693,'Cu':63.546,'Zn':65.38,'Ag':107.87,'Sn':118.71,'Ba':137.33,'Pb':207.2}
def parse(f):
    f = f.split('·')[0]
    def grp(s, i):
        o = {}
        while i < len(s) and s[i] != ')':
            if s[i] == '(':
                inner, i = grp(s, i + 1); i += 1; m = re.match(r'\d*', s[i:]).group(0); i += len(m); n = int(m or 1)
                for k, v in inner.items(): o[k] = o.get(k, 0) + v * n
            else:
                m = re.match(r'([A-Z][a-z]?)(\d*)', s[i:]); i += len(m.group(0)); o[m.group(1)] = o.get(m.group(1), 0) + int(m.group(2) or 1)
        return o, i
    return grp(f, 0)[0]
def mm(f): return round(sum(A[k] * v for k, v in parse(f).items()), 3)

# ---------- substancje (JS dodaje tylko brakujące) ----------
SUB = [
 ('LiOH','wodorotlenek litu','s','zasada (rozpuszczalny wodorotlenek)',['żrący'],['pochłaniacze CO₂ (łodzie podwodne, stacje kosmiczne)']),
 ('Ba(OH)2','wodorotlenek baru','s','zasada (rozpuszczalny wodorotlenek)',['żrący','związki baru trujące'],['analiza chemiczna']),
 ('Zn(OH)2','wodorotlenek cynku','s','wodorotlenek amfoteryczny',[],[]),
 ('Fe(OH)2','wodorotlenek żelaza(II)','s','osad (utlenia się na powietrzu)',[],[]),
 ('Ni(OH)2','wodorotlenek niklu(II)','s','osad',['związki niklu uczulają'],['akumulatory Ni-MH']),
 ('Mn(OH)2','wodorotlenek manganu(II)','s','osad (brunatnieje na powietrzu)',[],[]),
 ('Pb(OH)2','wodorotlenek ołowiu(II)','s','wodorotlenek amfoteryczny',['związki ołowiu trujące'],[]),
 ('Sn(OH)2','wodorotlenek cyny(II)','s','wodorotlenek amfoteryczny',[],[]),
 ('Cr(OH)3','wodorotlenek chromu(III)','s','wodorotlenek amfoteryczny',[],[]),
 ('AgOH','wodorotlenek srebra(I)','s','nietrwały (→ Ag₂O)',[],[]),
 ('CuOH','wodorotlenek miedzi(I)','s','nietrwały (→ Cu₂O)',[],[]),
 ('Ag2O','tlenek srebra(I)','s','tlenek zasadowy',[],[]),
 ('Cu2O','tlenek miedzi(I)','s','tlenek zasadowy',[],[]),
 ('Fe2O3','tlenek żelaza(III)','s','tlenek zasadowy (słabo amfoteryczny)',[],['pigment, ruda']),
 ('Al2O3','tlenek glinu','s','tlenek amfoteryczny',[],[]),
 ('ZnO','tlenek cynku','s','tlenek amfoteryczny',[],[]),
 ('CuO','tlenek miedzi(II)','s','tlenek zasadowy',[],[]),
 ('MgO','tlenek magnezu','s','tlenek zasadowy',[],[]),
 ('CaO','tlenek wapnia','s','tlenek zasadowy',['żrący'],[]),
 ('BaO','tlenek baru','s','tlenek zasadowy',['żrący','trujący'],[]),
 ('Li','lit','s','metal',['reaguje z wodą'],[]), ('K','potas','s','metal',['gwałtownie reaguje z wodą'],[]),
 ('Ca','wapń','s','metal',['reaguje z wodą'],[]), ('Ba','bar','s','metal',['reaguje z wodą'],[]),
 ('MgCl2','chlorek magnezu','aq','sól',[],[]), ('AlCl3','chlorek glinu','aq','sól',[],[]), ('ZnSO4','siarczan(VI) cynku','aq','sól',[],[]),
 ('FeSO4','siarczan(VI) żelaza(II)','aq','sól',[],[]), ('CuCl2','chlorek miedzi(II)','aq','sól',[],[]), ('NiSO4','siarczan(VI) niklu(II)','aq','sól',['uczula'],[]),
 ('MnSO4','siarczan(VI) manganu(II)','aq','sól',[],[]), ('Pb(NO3)2','azotan(V) ołowiu(II)','aq','sól',['trujący'],[]), ('CaCl2','chlorek wapnia','aq','sól',[],[]),
 ('AgNO3','azotan(V) srebra','aq','sól',['plami skórę'],[]), ('NaNO3','azotan(V) sodu','aq','sól',[],[]), ('KNO3','azotan(V) potasu','aq','sól',[],[]),
 ('KCl','chlorek potasu','aq','sól',[],[]), ('CaSO4','siarczan(VI) wapnia','s','sól (trudno rozpuszczalna)',[],['gips']), ('BaSO4','siarczan(VI) baru','s','sól (nierozpuszczalna)',[],['kontrast RTG']),
 ('BaCl2','chlorek baru','aq','sól',['trujący'],[]), ('BaCO3','węglan baru','s','sól (nierozpuszczalna)',['trujący'],[]), ('Ca(HCO3)2','wodorowęglan wapnia','aq','sól (wodorosól)',[],['twardość wody']),
 ('Al2(SO4)3','siarczan(VI) glinu','aq','sól',[],['uzdatnianie wody']), ('Na2Pb(OH)4','tetrahydroksoołowian(II) sodu','aq','sól kompleksowa',[],[]),
 ('NH4Cl','chlorek amonu','aq','sól',[],[]), ('NH3','amoniak','g','zasada Brønsteda',['drażniący'],[]), ('Na2CO3','węglan sodu','aq','sól',[],[]),
 ('CaCO3','węglan wapnia','s','sól (nierozpuszczalna)',[],[]), ('Na2SO4','siarczan(VI) sodu','aq','sól',[],[]), ('NaCl','chlorek sodu','aq','sól',[],[]),
 ('CuSO4','siarczan(VI) miedzi(II)','aq','sól',[],[]), ('FeCl3','chlorek żelaza(III)','aq','sól',[],[]), ('ZnCl2','chlorek cynku','aq','sól',[],[]),
 ('CaSO4','siarczan(VI) wapnia','s','sól',[],[]), ('H2','wodór','g','pierwiastek',['palny'],[]), ('O2','tlen','g','pierwiastek',[],[]),
]
R = []
def r(key, eq, typ, cond='', obs='', safety=None, level='E8', note=''):
    R.append((key, eq, typ, cond, obs, safety or [], level, note))
# metal aktywny + woda
r('liH2o','2 Li + 2 H2O → 2 LiOH + H2','metal + woda','temperatura pokojowa','lit pływa, powoli wydziela się gaz; roztwór zasadowy (fenoloftaleina malinowa)',['pokaz nauczyciela; okulary, osłona'])
r('kH2o','2 K + 2 H2O → 2 KOH + H2','metal + woda','temperatura pokojowa, bardzo mała grudka','potas „biega” po wodzie, wodór zapala się fioletowym płomieniem; roztwór zasadowy',['wyłącznie pokaz nauczyciela; osłona, okulary'])
r('caH2o','Ca + 2 H2O → Ca(OH)2 + H2','metal + woda','temperatura pokojowa','równomierne wydzielanie gazu, mętnienie (słabo rozpuszczalny Ca(OH)₂); fenoloftaleina malinowa',['okulary'])
r('baH2o','Ba + 2 H2O → Ba(OH)2 + H2','metal + woda','temperatura pokojowa','wydziela się wodór; roztwór zasadowy',['związki baru trujące — tylko pokaz'],'AMB')
r('mgH2oHot','Mg + 2 H2O → Mg(OH)2 + H2','metal + woda','gorąca woda (z zimną reakcja praktycznie nie zachodzi)','powolne wydzielanie pęcherzyków; fenoloftaleina słabo różowa',['okulary; ogrzewanie'])
# tlenek zasadowy + woda (uzupełnienie N01)
r('baoH2o','BaO + H2O → Ba(OH)2','tlenek zasadowy + woda','temperatura pokojowa','układ się ogrzewa; roztwór zasadowy',['związki baru trujące'],'AMB')
# sól + zasada → wodorotlenek↓ (strącanie)
r('mgcl2Naoh','MgCl2 + 2 NaOH → Mg(OH)2 + 2 NaCl','strącanie wodorotlenku','roztwory wodne','biały, galaretowaty osad',['NaOH żrący — okulary, rękawice'])
r('alcl3Naoh','AlCl3 + 3 NaOH → Al(OH)3 + 3 NaCl','strącanie wodorotlenku','NaOH dodawany kroplami, bez nadmiaru','biały, galaretowaty osad; w nadmiarze NaOH osad się roztwarza (amfoteryczność)',['NaOH żrący'])
r('znso4Naoh','ZnSO4 + 2 NaOH → Zn(OH)2 + Na2SO4','strącanie wodorotlenku','NaOH kroplami, bez nadmiaru','biały osad; w nadmiarze NaOH znika',['NaOH żrący'])
r('feso4Naoh','FeSO4 + 2 NaOH → Fe(OH)2 + Na2SO4','strącanie wodorotlenku','świeży roztwór FeSO₄','zielonkawy osad, na powietrzu brunatnieje (utlenianie do Fe(OH)₃)',['NaOH żrący'])
r('cucl2Naoh','CuCl2 + 2 NaOH → Cu(OH)2 + 2 NaCl','strącanie wodorotlenku','roztwory wodne','niebieski, galaretowaty osad',['NaOH żrący'])
r('niso4Naoh','NiSO4 + 2 NaOH → Ni(OH)2 + Na2SO4','strącanie wodorotlenku','roztwory wodne','jasnozielony osad',['NaOH żrący; sole niklu uczulają'],'AMB')
r('mnso4Naoh','MnSO4 + 2 NaOH → Mn(OH)2 + Na2SO4','strącanie wodorotlenku','roztwory wodne','biały (beżowy) osad, brunatnieje na powietrzu',['NaOH żrący'],'AMB')
r('pbno32Naoh','Pb(NO3)2 + 2 NaOH → Pb(OH)2 + 2 NaNO3','strącanie wodorotlenku','NaOH kroplami','biały osad; w nadmiarze NaOH znika',['związki ołowiu trujące — tylko pokaz'],'AMB')
r('cacl2Naoh','CaCl2 + 2 NaOH → Ca(OH)2 + 2 NaCl','strącanie wodorotlenku','tylko roztwory stężone (Ca(OH)₂ trudno, ale nie praktycznie nierozpuszczalny)','białe zmętnienie',['NaOH żrący'])
r('agno3Naoh','2 AgNO3 + 2 NaOH → Ag2O + 2 NaNO3 + H2O','strącanie wodorotlenku','roztwory wodne','brunatny osad Ag₂O (AgOH nietrwały)',['AgNO₃ plami skórę; NaOH żrący'],'AMB','AgOH powstaje przejściowo i od razu przechodzi w Ag₂O')
r('alcl3Nh3','AlCl3 + 3 NH3 + 3 H2O → Al(OH)3 + 3 NH4Cl','strącanie wodorotlenku','woda amoniakalna — nadmiar nie roztwarza osadu','biały, galaretowaty osad',['NH₃ drażniący — dygestorium'],'LO')
# zobojętnianie (wodorotlenek + kwas → sól + woda)
r('kohHno3','KOH + HNO3 → KNO3 + H2O','zobojętnianie','roztwory wodne','brak widocznych zmian; z fenoloftaleiną zanik barwy malinowej',['roztwory żrące'])
r('naohHno3','NaOH + HNO3 → NaNO3 + H2O','zobojętnianie','roztwory wodne','brak widocznych zmian; lekkie ogrzanie',['roztwory żrące'])
r('kohHcl','KOH + HCl → KCl + H2O','zobojętnianie','roztwory wodne','brak widocznych zmian; lekkie ogrzanie',['roztwory żrące'])
r('caoh2Hcl','Ca(OH)2 + 2 HCl → CaCl2 + 2 H2O','zobojętnianie','woda wapienna lub mleko wapienne','zawiesina klaruje się; zanik barwy fenoloftaleiny',[])
r('caoh2H2so4','Ca(OH)2 + H2SO4 → CaSO4 + 2 H2O','zobojętnianie','roztwory','możliwe białe zmętnienie (CaSO₄ trudno rozpuszczalny)',['H₂SO₄ żrący'])
r('baoh2H2so4','Ba(OH)2 + H2SO4 → BaSO4 + 2 H2O','zobojętnianie','roztwory','biały osad BaSO₄ + zanik barwy fenoloftaleiny (zobojętnianie i strącanie jednocześnie)',['związki baru trujące'],'E8')
r('baoh2Hcl','Ba(OH)2 + 2 HCl → BaCl2 + 2 H2O','zobojętnianie','roztwory','brak widocznych zmian; zanik barwy fenoloftaleiny',['związki baru trujące'],'AMB')
r('cuoh2H2so4','Cu(OH)2 + H2SO4 → CuSO4 + 2 H2O','zobojętnianie','osad + rozcieńczony kwas','niebieski osad znika, roztwór niebieski',['H₂SO₄ żrący'])
r('cuoh2Hcl','Cu(OH)2 + 2 HCl → CuCl2 + 2 H2O','zobojętnianie','osad + kwas','osad znika, roztwór zielononiebieski',[])
r('feoh3Hcl','Fe(OH)3 + 3 HCl → FeCl3 + 3 H2O','zobojętnianie','osad + kwas','brunatny osad znika, roztwór żółtobrunatny',[])
r('znoh2Hcl','Zn(OH)2 + 2 HCl → ZnCl2 + 2 H2O','zobojętnianie','osad + kwas','biały osad znika, roztwór bezbarwny',[])
r('aloh3H2so4','2 Al(OH)3 + 3 H2SO4 → Al2(SO4)3 + 6 H2O','zobojętnianie','osad + kwas','biały osad znika',['H₂SO₄ żrący'],'AMB')
r('mgoh2H2so4','Mg(OH)2 + H2SO4 → MgSO4 + 2 H2O','zobojętnianie','zawiesina + kwas','zawiesina klaruje się',[],'AMB')
# amfoteryczność — wodorotlenek + mocna zasada
r('aloh3Naoh','Al(OH)3 + NaOH → NaAl(OH)4','wodorotlenek amfoteryczny + zasada','nadmiar stężonego NaOH','biały osad roztwarza się — roztwór klarowny',['NaOH żrący'],'LO','zapis kompleksowy: Na[Al(OH)₄]; na E8 wystarczy „reaguje z mocną zasadą”')
r('znoh2Naoh','Zn(OH)2 + 2 NaOH → Na2Zn(OH)4','wodorotlenek amfoteryczny + zasada','nadmiar NaOH','biały osad roztwarza się',['NaOH żrący'],'LO','zapis kompleksowy: Na₂[Zn(OH)₄]')
r('pboh2Naoh','Pb(OH)2 + 2 NaOH → Na2Pb(OH)4','wodorotlenek amfoteryczny + zasada','nadmiar NaOH','osad roztwarza się',['związki ołowiu trujące'],'LO','zapis kompleksowy: Na₂[Pb(OH)₄]')
# zasada + tlenek kwasowy
r('baoh2Co2','Ba(OH)2 + CO2 → BaCO3 + H2O','zasada + tlenek kwasowy','wdmuchiwanie CO₂','białe zmętnienie BaCO₃',['związki baru trujące'],'AMB')
r('caoh2Na2co3','Ca(OH)2 + Na2CO3 → CaCO3 + 2 NaOH','zasada + sól','mleko wapienne + roztwór sody','biały osad CaCO₃; roztwór silnie zasadowy (NaOH)',['NaOH żrący'],'LO','kaustyfikacja — dawna metoda otrzymywania NaOH')
r('nh4clNaoh','NH4Cl + NaOH → NaCl + NH3 + H2O','zasada + sól','ogrzewanie','charakterystyczny zapach amoniaku; zwilżony papierek uniwersalny nad probówką niebieszczeje',['NH₃ drażniący — wąchać „wachlując”'],'AMB','wykrywanie jonów NH₄⁺')
# rozkład termiczny i nietrwałe wodorotlenki
r('cuoh2Heat','Cu(OH)2 → CuO + H2O','rozkład termiczny wodorotlenku','ogrzewanie osadu (już ok. 80 °C w wodzie)','niebieski osad czernieje (CuO)',['gorące naczynie'])
r('feoh3Heat','2 Fe(OH)3 → Fe2O3 + 3 H2O','rozkład termiczny wodorotlenku','prażenie','brunatny osad → czerwonobrunatny proszek',[],'AMB')
r('aloh3Heat','2 Al(OH)3 → Al2O3 + 3 H2O','rozkład termiczny wodorotlenku','prażenie','biały proszek Al₂O₃',[],'AMB')
r('mgoh2Heat','Mg(OH)2 → MgO + H2O','rozkład termiczny wodorotlenku','prażenie (ok. 350 °C)','biały proszek MgO; para wodna',[],'AMB')
r('znoh2Heat','Zn(OH)2 → ZnO + H2O','rozkład termiczny wodorotlenku','ogrzewanie','biały proszek ZnO (na gorąco żółty)',[],'AMB')
r('caoh2Heat','Ca(OH)2 → CaO + H2O','rozkład termiczny wodorotlenku','prażenie (ok. 500 °C)','biały proszek CaO; para wodna',[],'AMB')
r('agohDec','2 AgOH → Ag2O + H2O','rozkład nietrwałego wodorotlenku','temperatura pokojowa','brunatny osad Ag₂O',[],'AMB')
r('cuohDec','2 CuOH → Cu2O + H2O','rozkład nietrwałego wodorotlenku','temperatura pokojowa','czerwonobrunatny Cu₂O',[],'LO')
r('feoh2O2','4 Fe(OH)2 + O2 + 2 H2O → 4 Fe(OH)3','utlenianie wodorotlenku','kontakt z powietrzem','zielonkawy osad brunatnieje od góry',[],'AMB')

# ---------- kontrola kolizji kluczy i bilansu ----------
kf = os.path.join(ROOT, 'test', 'rxkeys.txt')
EXIST = set(open(kf).read().split()) if os.path.exists(kf) else set()
def side(s):
    out = []
    for t in s.split(' + '):
        m = re.match(r'(\d+) (.+)', t.strip())
        out.append((int(m.group(1)), m.group(2)) if m else (1, t.strip()))
    return out
def tot(lst):
    o = {}
    for c, f in lst:
        for k, v in parse(f).items(): o[k] = o.get(k, 0) + c * v
    return o
rx_js, keys = [], set()
for key, eq, typ, cond, obs, saf, lev, note in R:
    assert key not in keys, 'dubel ' + key; keys.add(key)
    assert key not in EXIST, 'klucz zajęty w silniku: ' + key
    L, P = eq.split(' → ')
    l, p = side(L), side(P)
    assert tot(l) == tot(p), (key, tot(l), tot(p))
    meta = {'type': typ, 'conditions': cond, 'observation': obs, 'safety': saf, 'level': lev, 'lesson': 'N02'}
    if note: meta['note'] = note
    rx_js.append(' %s:[R(%s,%s),%s]' % (key, json.dumps([[c, f] for c, f in l]), json.dumps([[c, f] for c, f in p]), json.dumps(meta, ensure_ascii=False)))
TYPES = {t: t for t in sorted(set(x[2] for x in R))}
open(os.path.join(D, 'd_hydroxides_rx.js'), 'w', encoding='utf-8').write(
 '/* N02 Wodorotlenki — reakcje (generowane przez src/gen_hydroxides.py; bilans sprawdzony) */\n(function(){\nconst R=(r,p)=>({reactants:r.map(x=>({formula:x[1],coef:x[0]})),products:p.map(x=>({formula:x[1],coef:x[0]}))});\nconst add={\n'
 + ',\n'.join(rx_js) + '\n};\nObject.keys(add).forEach(k=>{if(D.REACTIONS[k])return;D.REACTIONS[k]=add[k][0];D.REACTION_DATA[k]=Object.assign({products:add[k][0].products.map(x=>x.formula)},add[k][1])});\n'
 + 'D.REACTION_TYPE_NAMES=D.REACTION_TYPE_NAMES||{};Object.keys(' + json.dumps(TYPES, ensure_ascii=False) + ').forEach(function(t){if(!D.REACTION_TYPE_NAMES[t])D.REACTION_TYPE_NAMES[t]=t});\n})();\n')
seen, sub_js = set(), []
for f, name, st, role, saf, uses in SUB:
    if f in seen: continue
    seen.add(f)
    sub_js.append(' %s:%s' % (json.dumps(f), json.dumps({'formula': f, 'name': name, 'state': st, 'molarMass': mm(f), 'role': role, 'safety': saf, 'uses': uses}, ensure_ascii=False)))
open(os.path.join(D, 'd_hydroxides_sub.js'), 'w', encoding='utf-8').write(
 '/* N02 Wodorotlenki — substancje (generowane; dodawane tylko, gdy brak) */\n(function(){const add={\n' + ',\n'.join(sub_js) + '\n};Object.keys(add).forEach(k=>{if(!S[k])S[k]=add[k]});})();\n')
print('N02: reakcje', len(R), 'substancje', len(seen))
