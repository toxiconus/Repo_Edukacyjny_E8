"""Kolejka lekcji do wysłania innym AI (W1 / paczka_ai) — co wysłać, czego nie, i gotowe zestawy do ok. 95 KB.

Użycie: python3 narzedzia/kolejka_ai.py            → eksport/KOLEJKA_AI.md
Źródło stanu: WERYFIKACJA.md (kolumna W1: „… FULL” = nie wysyłać; data bez FULL = W1 starym promptem — niski priorytet;
„—” = nie było W1 — wysłać). Pliki lekcji szukane po `kod:` we frontmatterze w katalogach poniżej.
"""
import re
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
KATALOGI = {'biologia': ['biologia/bio/md'], 'chemia': ['chemia/che-modular/lessons-md/gotowe'],
            'polski': ['polski/podstawy', 'polski/blok_G', 'polski/blok_S', 'polski/blok_D']}
PROMPT_KB = len((ROOT / 'eksport' / 'ULEPSZ_PROMPT.md').read_bytes())
LIMIT = 100 * 1024 - PROMPT_KB - 3 * 1024  # paczka = prompt + lekcje + nagłówki ≤ ok. 100 KB

def pliki():
    out = {}
    for prz, kat in KATALOGI.items():
        for k in kat:
            for f in sorted((ROOT / k).glob('*.md')) if (ROOT / k).exists() else []:
                if re.match(r'(README|AUDYT|MAPA|SPIS|POSTEP)', f.stem, re.I): continue
                t = f.read_text(errors='ignore')
                m = re.search(r'^kod:\s*(\S+)', t, re.M)
                kod = m.group(1) if m else f.stem.split('.')[2] if f.stem.count('.') >= 2 else f.stem.split('_')[0]
                body = t.split('\n---\n', 1)[1] if t.startswith('---') and '\n---\n' in t else t
                stan = (re.search(r'^stan:\s*(.*)$', t, re.M) or [None, ''])[1]
                if re.search(r'00$', kod): continue  # pliki wprowadzające bloku, nie lekcje
                out[(prz, kod)] = (f, len(body.encode()), stan)
    return out

def rejestr():
    r = {}
    for l in (ROOT / 'WERYFIKACJA.md').read_text().split('\n'):
        c = [x.strip() for x in l.strip().strip('|').split('|')]
        if len(c) >= 4 and c[0] in KATALOGI:
            r[(c[0], c[1])] = c[3]
    return r

def main():
    P, R = pliki(), rejestr()
    grupy = {}
    for (prz, kod), (f, b, stan) in P.items():
        w1 = R.get((prz, kod), '—')
        if 'FULL' in w1 or 'W1 FULL' in stan:
            g = 'nie'
        elif re.search(r'\d{4}-\d\d-\d\d', w1):
            g = 'stary'
        else:
            g = 'tak'
        grupy.setdefault(prz, {}).setdefault(g, []).append((kod, f, b, w1))
    L = ['# Kolejka lekcji dla innych AI', '', '> Generowane: `python3 narzedzia/kolejka_ai.py`. **NIE wysyłać** — W1 FULL (pełny prompt, uwagi wprowadzone). **WYSŁAĆ** — bez W1. **Niski priorytet** — W1 starym promptem (można ponownie, pełnym promptem `eksport/ULEPSZ_PROMPT.md`).', '']
    for prz in KATALOGI:
        G = grupy.get(prz, {})
        if not G: continue
        L.append(f'## {prz}')
        for g, tyt in (('tak', 'WYSŁAĆ (bez W1)'), ('stary', 'niski priorytet (W1 starym promptem)'), ('nie', 'NIE wysyłać (W1 FULL)')):
            x = sorted(G.get(g, []), key=lambda r: str(r[1]))
            if not x: continue
            L.append(f'\n**{tyt} — {len(x)} lekcji, {sum(r[2] for r in x)//1024} KB:** ' + ' · '.join(f'{r[0]} ({r[2]//1024} KB)' for r in x))
            if g == 'tak':
                paczki, cur, kb = [], [], 0
                for r in x:
                    if cur and kb + r[2] > LIMIT:
                        paczki.append(cur); cur, kb = [], 0
                    cur.append(r); kb += r[2]
                if cur: paczki.append(cur)
                for i, pk in enumerate(paczki, 1):
                    L.append(f'\n- zestaw {i} ({sum(r[2] for r in pk)//1024} KB): `python3 eksport/paczka_ai.py ulepsz {prz[:3].upper()}_{'_'.join(r[0] for r in pk)} ' + ' '.join(str(r[1].relative_to(ROOT)) for r in pk) + '`')
        L.append('')
    out = ROOT / 'eksport' / 'KOLEJKA_AI.md'
    out.write_text('\n'.join(L) + '\n')
    for prz, G in grupy.items():
        print(prz + ': ' + ', '.join(f'{k} {len(v)}' for k, v in G.items()))
    print(out.relative_to(ROOT))

if __name__ == '__main__':
    main()
