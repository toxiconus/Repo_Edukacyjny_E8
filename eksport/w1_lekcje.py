"""Paczka W1 + ulepszenia dla wybranych lekcji (dowolny przedmiot), prompt z eksport/W1_PROMPT.md.

Użycie: python3 eksport/w1_lekcje.py NAZWA plik1.md plik2.md ...
Wynik: eksport/out/W1_<NAZWA>.md. Pomija frontmatter i historię audytów (sekcje AUDYT, MATERIAŁ ŹRÓDŁOWY, Status kontroli).
Limit: Perplexity czyta ok. 80–100 KB załącznika — skrypt ostrzega powyżej 100 000 znaków.
"""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent

def strip(t):
    if t.startswith('---'):
        t = t.split('\n---\n', 1)[1]
    out, skip = [], False
    for line in t.split('\n'):
        if re.match(r'^#{1,3} .*(AUDYT|MATERIAŁ ŹRÓDŁOWY|Status kontroli|Doprecyzowanie)', line):
            skip = True; continue
        if skip and re.match(r'^## ', line):
            skip = False
        if not skip:
            out.append(line)
    return '\n'.join(out)

def main():
    nazwa, pliki = sys.argv[1], sys.argv[2:]
    kody = []
    czesci = []
    for f in pliki:
        t = Path(f).read_text()
        kod = next((l.split(':', 1)[1].strip() for l in t.split('\n') if l.startswith('kod:')), Path(f).stem)
        tyt = next((l.split(':', 1)[1].strip() for l in t.split('\n') if l.startswith('tytul:')), kod)
        kody.append(kod)
        czesci.append(f'\n\n---\n\n# LEKCJA: {kod} — {tyt}\n\n' + strip(t))
    head = (f"# WERYFIKACJA W1 + ULEPSZENIA — {', '.join(kody)}\n\n"
            "> Skopiuj tę sekcję jako polecenie, a cały plik dołącz jako załącznik.\n\n")
    s = head + (ROOT / 'eksport' / 'W1_PROMPT.md').read_text() + ''.join(czesci)
    out = ROOT / 'eksport' / 'out' / f'W1_{nazwa}.md'
    out.parent.mkdir(exist_ok=True)
    out.write_text(s)
    print(f'{out.relative_to(ROOT)}: {len(kody)} lekcji, {len(s)//1000} KB' + ('  ⚠ ponad 100 KB — ryzyko ucięcia' if len(s) > 100000 else ''))

if __name__ == '__main__':
    main()
