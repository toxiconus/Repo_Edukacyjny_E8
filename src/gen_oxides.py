# -*- coding: utf-8 -*-
"""Generator danych N01 Tlenki → src/d_oxides_sub.js (SUBSTANCES) i src/d_oxides_rx.js (REACTIONS).
Masy molowe liczone z mas atomowych (IUPAC, skrócone). Bilans każdej reakcji sprawdzany tutaj (assert) — i potem przez CHE.REACTION.audit."""
import re, json, os
D = os.path.dirname(os.path.abspath(__file__))
A = {'H':1.008,'Li':6.94,'Be':9.0122,'B':10.81,'C':12.011,'N':14.007,'O':15.999,'F':18.998,'Na':22.990,'Mg':24.305,'Al':26.982,'Si':28.085,'P':30.974,'S':32.06,'Cl':35.45,'K':39.098,'Ca':40.078,'Cr':51.996,'Mn':54.938,'Fe':55.845,'Cu':63.546,'Zn':65.38,'Ag':107.87,'Hg':200.59,'Pb':207.2,'Ti':47.867}
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

# ---------- substancje (dodawane tylko, gdy brak w SUBSTANCES) ----------
SUB = [
 ('K2O','tlenek potasu','s','tlenek zasadowy',['żrący'],[]),
 ('Li2O','tlenek litu','s','tlenek zasadowy',['żrący'],['ceramika, szkło']),
 ('BeO','tlenek berylu','s','tlenek amfoteryczny',['toksyczny (pył)'],['ceramika techniczna']),
 ('B2O3','tlenek boru','s','tlenek kwasowy',[],['szkło borokrzemianowe']),
 ('Al2O3','tlenek glinu','s','tlenek amfoteryczny',[],['korund, szlifierki','warstwa pasywna glinu','ceramika techniczna','rubin/szafir (z domieszkami)']),
 ('FeO','tlenek żelaza(II)','s','tlenek zasadowy',[],[]),
 ('Fe3O4','tlenek żelaza(II,III) (magnetyt)','s','tlenek mieszany',[],['ruda żelaza','magnetyczne nośniki']),
 ('Cu2O','tlenek miedzi(I)','s','tlenek zasadowy',[],['pigment, kupryt']),
 ('P2O5','tlenek fosforu(V) (zapis empiryczny P₂O₅)','s','tlenek kwasowy',['żrący','silnie higroskopijny'],['osuszacz']),
 ('N2O','tlenek azotu(I) (podtlenek azotu, gaz rozweselający)','g','tlenek obojętny',['gaz cieplarniany'],['anestezja','bita śmietana (gaz nośny)']),
 ('Mn2O7','tlenek manganu(VII)','l','tlenek kwasowy',['silny utleniacz, wybuchowy'],[]),
 ('CrO3','tlenek chromu(VI)','s','tlenek kwasowy',['toksyczny, rakotwórczy','silny utleniacz'],['chromowanie']),
 ('Cr2O3','tlenek chromu(III)','s','tlenek amfoteryczny',[],['zielony pigment']),
 ('MnO2','tlenek manganu(IV)','s','tlenek amfoteryczny',[],['baterie','katalizator rozkładu H₂O₂']),
 ('MnO','tlenek manganu(II)','s','tlenek zasadowy',[],[]),
 ('CrO','tlenek chromu(II)','s','tlenek zasadowy',[],[]),
 ('TiO2','tlenek tytanu(IV) (biel tytanowa, rutyl)','s','tlenek amfoteryczny (słabo)',[],['biały pigment','filtry UV','fotokataliza']),
 ('HgO','tlenek rtęci(II)','s','tlenek zasadowy',['toksyczny'],['historyczne otrzymywanie tlenu']),
 ('Ag2O','tlenek srebra(I)','s','tlenek zasadowy',[],['ogniwa srebrowe']),
 ('PbO','tlenek ołowiu(II)','s','tlenek amfoteryczny',['toksyczny'],['szkło ołowiowe']),
 ('PbO2','tlenek ołowiu(IV)','s','tlenek (utleniacz)',['toksyczny'],['akumulator ołowiowy']),
 ('Cl2O7','tlenek chloru(VII)','l','tlenek kwasowy',['wybuchowy'],[]),
 ('Na2O2','nadtlenek sodu','s','nadtlenek (nie tlenek!)',['żrący','silny utleniacz'],['regeneracja powietrza (okręty, statki kosmiczne)']),
 ('H2O2','nadtlenek wodoru (woda utleniona 3%)','aq','nadtlenek (nie tlenek!)',['stężony — żrący, utleniacz'],['dezynfekcja','wybielanie']),
 ('OF2','difluorek tlenu (fluorek tlenu — nie tlenek!)','g','fluorek tlenu',['silnie toksyczny'],[]),
 ('LiOH','wodorotlenek litu','aq','zasada',['żrący'],['pochłaniacze CO₂']),
 ('KOH','wodorotlenek potasu','aq','zasada',['żrący'],['mydła miękkie','elektrolit']),
 ('Mg(OH)2','wodorotlenek magnezu','s','wodorotlenek',[],['lek zobojętniający (mleko magnezowe)']),
 ('HMnO4','kwas manganowy(VII)','aq','kwas',['silny utleniacz'],[]),
 ('H2CrO4','kwas chromowy(VI)','aq','kwas',['toksyczny'],[]),
 ('Fe2(SO4)3','siarczan(VI) żelaza(III)','aq','sól',[],['koagulant (uzdatnianie wody)']),
 ('NaAlO2','glinian sodu (zapis uproszczony / po stopieniu)','s','sól',['żrący'],[]),
 ('NaAl(OH)4','tetrahydroksoglinian sodu','aq','sól kompleksowa',['żrący'],[]),
 ('Na2ZnO2','cynkan sodu (zapis uproszczony)','s','sól',[],[]),
 ('Na2Zn(OH)4','tetrahydroksocynkan sodu','aq','sól kompleksowa',[],[]),
 ('K2CO3','węglan potasu (potaż)','aq','sól',[],['szkło','mydła']),
 ('K2SiO3','krzemian potasu','aq','sól',[],[]),
 ('CaSiO3','krzemian wapnia (żużel wielkopiecowy)','s','sól',[],['cement, materiały budowlane']),
 ('Hg','rtęć','l','metal',['toksyczna (pary)'],[]),
 ('Pb','ołów','s','metal',['toksyczny'],[]),
 ('Fe','żelazo','s','metal',[],[]),('Cu','miedź','s','metal',[],[]),('Al','glin','s','metal',[],[]),('Zn','cynk','s','metal',[],[]),
 ('Mg','magnez','s','metal',['pali się oślepiającym płomieniem'],[]),('Ca','wapń','s','metal',['reaguje z wodą'],[]),('Na','sód','s','metal',['reaguje gwałtownie z wodą'],[]),
 ('C','węgiel','s','niemetal',[],[]),('P','fosfor (zapis szkolny)','s','niemetal',['biały — samozapalny, trujący'],[]),('P4','fosfor biały (cząsteczka P₄)','s','niemetal',['samozapalny, trujący'],[]),
 ('H2','wodór','g','pierwiastek',['palny, mieszanina z O₂ wybuchowa'],[]),('O2','tlen','g','pierwiastek',['podtrzymuje palenie'],[]),
 ('CH4','metan','g','węglowodór',['palny'],['gaz ziemny']),('C3H8','propan','g','węglowodór',['palny'],['butle turystyczne, LPG']),('C8H18','oktan','l','węglowodór',['palny'],['benzyna (składnik)']),
 ('KClO3','chloran(V) potasu','s','sól',['silny utleniacz'],['otrzymywanie tlenu (z MnO₂)']),('KCl','chlorek potasu','s','sól',[],['nawóz']),
 ('NaOH','wodorotlenek sodu','aq','zasada',['żrący'],[]),('NaHCO3','wodorowęglan sodu','s','sól',[],[]),('Na2CO3','węglan sodu','aq','sól',[],[]),
]
# ---------- reakcje ----------
R = []
def r(key, eq, typ, cond='', obs='', safety=None, level='E8', note=''):
    R.append((key, eq, typ, cond, obs, safety or [], level, note))
# spalanie / synteza tlenków
r('sO2','S + O2 → SO2','spalanie','zapalenie siarki na łyżce do spaleń, dygestorium','niebieski płomień; bezbarwny gaz o ostrym, duszącym zapachu',['SO₂ duszący — dygestorium'])
r('mgO2','2 Mg + O2 → 2 MgO','spalanie','zapalenie w płomieniu palnika','oślepiająco białe światło; biały proszek MgO',['nie patrz w płomień; szczypce, okulary'])
r('cO2','C + O2 → CO2','spalanie','nadmiar tlenu','żarzenie; gaz mętniący wodę wapienną')
r('cO2Inc','2 C + O2 → 2 CO','spalanie','niedobór tlenu','—',['CO — czad, trujący, bezbarwny i bezwonny'])
r('coO2','2 CO + O2 → 2 CO2','spalanie','zapalenie','niebieski płomień',['CO trujący'])
r('pO2','4 P + 5 O2 → 2 P2O5','spalanie','zapis szkolny (empiryczny)','biały dym tlenku fosforu(V)',['fosfor biały samozapalny i trujący'],'E8','dokładniej: P₄ + 5 O₂ → P₄O₁₀')
r('p4O2','P4 + 5 O2 → P4O10','spalanie','zapis cząsteczkowy','biały dym',['fosfor biały samozapalny i trujący'],'AMB')
r('feO2','3 Fe + 2 O2 → Fe3O4','spalanie','wata/drut żelazny w czystym tlenie','snop iskier; czarny Fe₃O₄',['okulary; piasek na dnie naczynia'],'AMB')
r('naO2','4 Na + O2 → 2 Na2O','utlenianie','powolne utlenianie na powietrzu (model szkolny)','metaliczny połysk szybko matowieje',['sód — tylko pod naftą'],'E8','przy spalaniu w nadmiarze tlenu powstaje głównie nadtlenek Na₂O₂')
r('naO2Per','2 Na + O2 → Na2O2','spalanie','spalanie w nadmiarze tlenu','żółty płomień; jasnożółty nadtlenek',['sód reaguje gwałtownie'],'AMB')
r('caO2','2 Ca + O2 → 2 CaO','spalanie','ogrzewanie','ceglastoczerwony płomień; biały CaO')
r('cuO2','2 Cu + O2 → 2 CuO','utlenianie','ogrzewanie blaszki w płomieniu','miedź czernieje (warstwa CuO)')
r('alO2','4 Al + 3 O2 → 2 Al2O3','utlenianie','pył Al spala się; blacha pasywuje się w temperaturze pokojowej','cienka, szczelna warstwa Al₂O₃ (pasywacja)')
r('znO2','2 Zn + O2 → 2 ZnO','spalanie','ogrzewanie','biały ZnO (na gorąco żółty)')
r('h2O2','2 H2 + O2 → 2 H2O','spalanie','zapalenie','„pyk” — test na wodór; para wodna',['mieszanina H₂ + O₂ wybuchowa'])
r('ch4O2','CH4 + 2 O2 → CO2 + 2 H2O','spalanie','nadmiar tlenu (całkowite)','niebieski płomień')
r('ch4O2Inc','2 CH4 + 3 O2 → 2 CO + 4 H2O','spalanie','niedobór tlenu (niecałkowite)','żółty, kopcący płomień',['CO — czad'])
r('ch4O2Soot','CH4 + O2 → C + 2 H2O','spalanie','duży niedobór tlenu','sadza (kopcenie)',['CO i sadza'],'E8')
r('c3h8O2','C3H8 + 5 O2 → 3 CO2 + 4 H2O','spalanie','nadmiar tlenu')
r('c3h8O2Inc','2 C3H8 + 7 O2 → 6 CO + 8 H2O','spalanie','niedobór tlenu','',['CO — czad'])
r('c8h18O2','2 C8H18 + 25 O2 → 16 CO2 + 18 H2O','spalanie','silnik benzynowy (model)','',[],'AMB')
# tlenek + woda
r('na2oH2o','Na2O + H2O → 2 NaOH','tlenek zasadowy + woda','','roztwór barwi fenoloftaleinę na malinowo',['NaOH żrący'])
r('k2oH2o','K2O + H2O → 2 KOH','tlenek zasadowy + woda','','fenoloftaleina malinowa',['KOH żrący'])
r('li2oH2o','Li2O + H2O → 2 LiOH','tlenek zasadowy + woda','','fenoloftaleina malinowa')
r('mgoH2o','MgO + H2O → Mg(OH)2','tlenek zasadowy + woda','bardzo powoli, w niewielkim stopniu (szkolnie: praktycznie nie)','fenoloftaleina słabo różowa',[],'E8')
r('p2o5H2o','P2O5 + 3 H2O → 2 H3PO4','tlenek kwasowy + woda','zapis empiryczny','reakcja gwałtowna, egzotermiczna',['P₂O₅ żrący'])
r('mn2o7H2o','Mn2O7 + H2O → 2 HMnO4','tlenek kwasowy + woda','metal na +VII → tlenek kwasowy','fioletowy roztwór',['Mn₂O₇ wybuchowy'],'AMB')
r('cro3H2o','CrO3 + H2O → H2CrO4','tlenek kwasowy + woda','metal na +VI → tlenek kwasowy','pomarańczowo-żółty roztwór',['związki Cr(VI) rakotwórcze'],'AMB')
r('cl2o7H2o','Cl2O7 + H2O → 2 HClO4','tlenek kwasowy + woda','','',['Cl₂O₇ wybuchowy'],'AMB')
# tlenek + kwas
r('al2o3Hcl','Al2O3 + 6 HCl → 2 AlCl3 + 3 H2O','tlenek amfoteryczny + kwas','','biały proszek roztwarza się (wolno)')
r('fe2o3H2so4','Fe2O3 + 3 H2SO4 → Fe2(SO4)3 + 3 H2O','tlenek zasadowy + kwas','','roztwór żółtobrunatny (jony Fe³⁺)')
# tlenek + zasada
r('co2Koh','CO2 + 2 KOH → K2CO3 + H2O','zasada + tlenek kwasowy','przewaga zasady')
r('co2NaohExc','CO2 + NaOH → NaHCO3','zasada + tlenek kwasowy','nadmiar CO₂ (stosunek 1 : 1)','',[],'AMB')
r('na2co3Co2','Na2CO3 + CO2 + H2O → 2 NaHCO3','synteza','dalsze wprowadzanie CO₂','',[],'AMB')
r('so2Naoh','SO2 + 2 NaOH → Na2SO3 + H2O','zasada + tlenek kwasowy','przewaga zasady')
r('so3Naoh','SO3 + 2 NaOH → Na2SO4 + H2O','zasada + tlenek kwasowy')
r('sio2Naoh','SiO2 + 2 NaOH → Na2SiO3 + H2O','zasada + tlenek kwasowy','ogrzewanie lub stopiony NaOH (Δ) — nie szybko w zimnym roztworze','',['NaOH żrący, stopiony — bardzo niebezpieczny'])
r('al2o3NaohMelt','Al2O3 + 2 NaOH → 2 NaAlO2 + H2O','tlenek amfoteryczny + zasada','stapianie (zapis zależny od warunków)','',['NaOH żrący'])
r('al2o3NaohAq','Al2O3 + 2 NaOH + 3 H2O → 2 NaAl(OH)4','tlenek amfoteryczny + zasada','roztwór wodny (jonowo: Al₂O₃ + 2 OH⁻ + 3 H₂O → 2 [Al(OH)₄]⁻)','',['NaOH żrący'],'AMB')
r('znoNaoh','ZnO + 2 NaOH → Na2ZnO2 + H2O','tlenek amfoteryczny + zasada','zapis uproszczony (stapianie)','',['NaOH żrący'])
r('znoNaohAq','ZnO + 2 NaOH + H2O → Na2Zn(OH)4','tlenek amfoteryczny + zasada','roztwór wodny (kompleks hydroksocynkanowy)','',['NaOH żrący'],'AMB')
# tlenek + tlenek
r('na2oCo2','Na2O + CO2 → Na2CO3','synteza','tlenek zasadowy + tlenek kwasowy','',[],'AMB')
r('caoSio2','CaO + SiO2 → CaSiO3','synteza','wysoka temperatura (żużel w wielkim piecu)','',[],'AMB')
# redukcja
r('cuoH2','CuO + H2 → Cu + H2O','redoks','ogrzewanie (Δ)','czarny CuO → czerwonobrunatna miedź; kropelki wody',['H₂ palny'])
r('cuoC','2 CuO + C → 2 Cu + CO2','redoks','silne ogrzewanie (Δ)','czerwonawa miedź; gaz mętniący wodę wapienną')
r('fe2o3Co','Fe2O3 + 3 CO → 2 Fe + 3 CO2','redoks','wielki piec (Δ) — główny przykład przemysłowy','',['CO trujący'])
r('fe2o3C','Fe2O3 + 3 C → 2 Fe + 3 CO','redoks','model uproszczony (Δ)','',[],'E8','w wielkim piecu głównym reduktorem jest CO')
r('termit','Fe2O3 + 2 Al → 2 Fe + Al2O3','redoks','zapłon; lokalnie ok. 2500 °C (zależnie od warunków)','oślepiające światło, płynne żelazo',['wyłącznie analiza równania — nie do wykonania samodzielnie'],'AMB')
r('feH2oSteam','3 Fe + 4 H2O → Fe3O4 + 4 H2','redoks','para wodna H₂O(g), wysoka temperatura — nie zimna woda','',['wodór palny; tylko laboratorium profesjonalne'],'AMB')
r('mgCo2','2 Mg + CO2 → 2 MgO + C','redoks','zapalony magnez w CO₂','magnez pali się dalej; czarne drobiny węgla',['nie gaś palącego się magnezu CO₂!'],'AMB')
# rozkład
r('hgoDecomp','2 HgO → 2 Hg + O2','rozkład termiczny','ogrzewanie (Δ) — doświadczenie historyczne (Priestley)','',['HgO i pary rtęci toksyczne — nie wykonywać'],'AMB')
r('pbo2Decomp','2 PbO2 → 2 PbO + O2','rozkład termiczny','ogrzewanie (Δ)','',['związki ołowiu toksyczne'],'ZA')
r('ag2oDecomp','2 Ag2O → 4 Ag + O2','rozkład termiczny','ogrzewanie (Δ)','',[],'ZA')
r('h2o2Decomp','2 H2O2 → 2 H2O + O2','rozkład','katalizator MnO₂','intensywne pienienie; tlący się łuczek zapala się',['stężony H₂O₂ żrący'])
r('kclo3Decomp','2 KClO3 → 2 KCl + 3 O2','rozkład termiczny','ogrzewanie, katalizator MnO₂','',['silny utleniacz'],'AMB')
r('na2o2H2o','2 Na2O2 + 2 H2O → 4 NaOH + O2','rozkład','nadtlenek + woda','wydziela się tlen',['żrący'],'AMB')
# korozja (model)
r('feO2Rust','4 Fe + 3 O2 → 2 Fe2O3','utlenianie','model przybliżony korozji — rdza to mieszanina uwodnionych tlenków i wodorotlenków żelaza','',[],'E8','dokładniej: 4 Fe + 3 O₂ + n H₂O → 2 Fe₂O₃·nH₂O (też przybliżenie)')

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
rx_js = []
for key, eq, typ, cond, obs, saf, lev, note in R:
    L, P = eq.split(' → ')
    l, p = side(L), side(P)
    assert tot(l) == tot(p), (key, tot(l), tot(p))
    meta = {'type': typ, 'conditions': cond, 'observation': obs, 'safety': saf, 'level': lev, 'lesson': 'N01'}
    if note: meta['note'] = note
    rx_js.append(' %s:[R(%s,%s),%s]' % (key, json.dumps([[c, f] for c, f in l]), json.dumps([[c, f] for c, f in p]), json.dumps(meta, ensure_ascii=False)))
TYPES = {'tlenek zasadowy + woda': 'tlenek zasadowy + woda', 'tlenek kwasowy + woda': 'tlenek kwasowy + woda', 'tlenek amfoteryczny + kwas': 'tlenek amfoteryczny + kwas', 'tlenek zasadowy + kwas': 'tlenek zasadowy + kwas', 'tlenek amfoteryczny + zasada': 'tlenek amfoteryczny + zasada'}
open(os.path.join(D, 'd_oxides_rx.js'), 'w', encoding='utf-8').write(
 '/* v0.44: N01 Tlenki — reakcje (generowane przez src/gen_oxides.py; bilans sprawdzony) */\n(function(){\nconst R=(r,p)=>({reactants:r.map(x=>({formula:x[1],coef:x[0]})),products:p.map(x=>({formula:x[1],coef:x[0]}))});\nconst add={\n'
 + ',\n'.join(rx_js) + '\n};\nObject.keys(add).forEach(k=>{if(D.REACTIONS[k])return;D.REACTIONS[k]=add[k][0];D.REACTION_DATA[k]=Object.assign({products:add[k][0].products.map(x=>x.formula)},add[k][1])});\n'
 + 'Object.assign(D.REACTION_TYPE_NAMES||{},' + json.dumps(TYPES, ensure_ascii=False) + ');\n})();\n')
sub_js = []
for f, name, st, role, saf, uses in SUB:
    sub_js.append(' %s:%s' % (json.dumps(f), json.dumps({'formula': f, 'name': name, 'state': st, 'molarMass': mm(f), 'role': role, 'safety': saf, 'uses': uses}, ensure_ascii=False)))
open(os.path.join(D, 'd_oxides_sub.js'), 'w', encoding='utf-8').write(
 '/* v0.44: N01 Tlenki — substancje (generowane; dodawane tylko, gdy brak) */\n(function(){const add={\n' + ',\n'.join(sub_js) + '\n};Object.keys(add).forEach(k=>{if(!S[k])S[k]=add[k]});})();\n')
print('reakcje', len(R), 'substancje', len(SUB))
