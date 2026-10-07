# -*- coding: utf-8 -*-
"""Etap 3: wydzielenie lekcji z kanonu md do sources/chemia/lekcje/<KOD>.md.
Sekcja = nagłówek z listy + wszystko do następnego nagłówka tego samego lub wyższego poziomu (bloki ``` pomijane).
Wydzielona sekcja zostaje w kanonie jako znacznik <!-- @include KOD#k -->; tools/md_assemble.py składa kanon z powrotem (test: bajt w bajt).
Użycie: python3 tools/md_split.py WEJ.md WYJ_kanon.md [KODY np. N03]  (konfiguracja PARTS poniżej; nagłówki porównywane dokładnie)."""
import os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LES = os.path.join(ROOT, 'sources', 'chemia', 'lekcje')
PARTS = {
 'N01': ['### N01 — TLENKI: co szczególnie dopracować', '@RANGE # N01 — Tlenki|# N02 — Wodorotlenki i zasady', '### N01 — Tlenki', '### N01 Tlenki — v4.6 LAB (kanon HTML)',
         '## B4. L002 — Tlenki: wprowadzenie (wrzesień)', '## LAB05 — Tlenki', '## L002', '## N01 — Tlenki', '# 115. N01 FINAL — TLENKI', '### N01 — tlenki', '## 123.1. N01 — tlenki', '## 148.2. N01 — tlenki'],
 'N02': ['### N02 — WODOROTLENKI I ZASADY: co szczególnie dopracować', '@RANGE # N02 — Wodorotlenki i zasady|# N03 — Kwasy', '### L003 — Wodorotlenki', '### L003 Wodorotlenki — v7.8 LAB (kanon HTML)',
         '## LAB06 — Wodorotlenki', '## L003', '## N02 — wydobyte fragmenty ze starego źródła — PO KONSOLIDACJI v13.0', '## N02 — Wodorotlenki i zasady', '## Źródło migracyjne: N02 — Trening interleaving (przeplatany)',
         '# 116. N02 FINAL — WODOROTLENKI I ZASADY', '### N02 — wodorotlenki i zasady', '## 141.1. FINAL N02 — zalecana struktura', '## 123.2. N02 — wodorotlenki i zasady', '## 148.3. N02 — wodorotlenek ≠ zasada',
         '# 243. REJESTR ZMIAN v19.75 — N02 + WIDOK HTML → WARSTWA MD HTML-READY', '## 244. REJESTR PRZELOTU v19.77 — N02 MODELE WIZUALNE + LAB JONOWE'],
 'N03': ['### N03 — KWASY: co szczególnie dopracować', '@RANGE # N03 — Kwasy|# N04 — Sole', '## LAB07 — Kwasy i wskaźniki', '## L004', '## N03 — Kwasy',
         '# 117. N03 FINAL — KWASY', '### N03 — kwasy', '## 141.2. FINAL N03 — zalecana struktura', '## 123.3. N03 — kwasy', '## 148.4. N03 — kwas: siła, stężenie i reaktywność',
         '# 255. N03 — KWASY — SPECYFIKACJA HTML-READY', '# REJESTR PRZELOTU v19.82 — N03 KWASY · ARCHITEKTURA HTML MASTER + PEŁNY KONTRAKT INTERAKCJI',
         '# REJESTR PRZELOTU v19.87 — N03 KWASY · PEŁNA KOREKTA MD + HTML'],
 'N04': ['@RANGE # N04 — Sole|# N05 — Wodorki', '## LAB08 — Sole i reakcje strąceniowe', '## L005', '## N04 — Sole',
         '# 118. N04 FINAL — SOLE', '### N04 — sole', '## 141.3. FINAL N04 — zalecana struktura', '## 123.4. N04 — sole',
         '## 148.5. N04 — sole', '# 256. N04 — SOLE — SPECYFIKACJA HTML-READY'],
}
import glob
UID = {'N01': 'CHE.02.N01.tlenki', 'N02': 'CHE.02.N02.wodorotlenki', 'N03': 'CHE.02.N03.kwasy', 'N04': 'CHE.02.N04.sole'}
def lesson_file(code):
    g = glob.glob(os.path.join(LES, '*.%s.*.md' % code))
    return g[0] if g else os.path.join(LES, (UID.get(code) or code) + '.md')
def heads(lines):
    out, fence = [], False
    for i, l in enumerate(lines):
        pass  # bez śledzenia bloków ``` (w kanonie nieparzysta liczba znaczników)
        if fence: continue
        m = re.match(r'(#{1,6}) ', l)
        if m: out.append((i, len(m.group(1)), l.rstrip('\n')))
    return out
def main(src, dst):
    lines = open(src, encoding='utf-8').read().split('\n'); H = heads(lines)
    spans = []
    only = sys.argv[3].split(',') if len(sys.argv) > 3 else None   # np. N03 — tylko te kody (wcześniejsze już wydzielone)
    for code, lst in PARTS.items():
        if only and code not in only: continue
        for spec in lst:
            if spec.startswith('@RANGE '):
                a, b = spec[7:].split('|'); ia = [i for i, _, t in H if t == a]; ib = [i for i, _, t in H if t == b]
                assert len(ia) == 1 and len(ib) == 1, spec; spans.append((ia[0], ib[0], code, a)); continue
            hit = [(i, lv) for i, lv, t in H if t == spec]
            assert len(hit) >= 1, 'brak: ' + spec
            for i, lv in hit:
                nxt = [j for j, l2, _ in H if j > i and l2 <= lv]; spans.append((i, nxt[0] if nxt else len(lines), code, spec))
    spans.sort()
    clean = []
    for s in spans:
        if clean and s[0] < clean[-1][1]:
            assert s[1] <= clean[-1][1], ('nakładanie', s[3], clean[-1][3]); continue  # zawarta w większej
        clean.append(s)
    out, pos, parts = [], 0, {}
    for a, b, code, title in clean:
        out += lines[pos:a]; k = len(parts.setdefault(code, [])) + 1
        parts[code].append((k, a + 1, title, lines[a:b])); out.append('<!-- @include %s#%d -->' % (code, k)); pos = b
    out += lines[pos:]
    os.makedirs(LES, exist_ok=True)
    for code, pl in parts.items():
        body = ['<!-- Lekcja %s — plik wydzielony z kanonu %s (etap 3). Części #k wracają na swoje miejsca w kanonie: tools/md_assemble.py. -->' % (code, os.path.basename(src))]
        for k, ln, title, seg in pl:
            body.append('<!-- @part %s#%d · kanon wiersz %d · %s -->' % (code, k, ln, title)); body += seg; body.append('<!-- @end %s#%d -->' % (code, k))
        open(lesson_file(code), 'w', encoding='utf-8').write('\n'.join(body) + '\n')
        print(code, len(pl), 'części,', sum(len(s) for *_, s in pl), 'wierszy')
    open(dst, 'w', encoding='utf-8').write('\n'.join(out))
if __name__ == '__main__': main(sys.argv[1], sys.argv[2])
