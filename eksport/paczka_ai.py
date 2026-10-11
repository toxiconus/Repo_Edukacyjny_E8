"""Paczka dla dowolnego AI: ulepszanie lekcji, check tematów albo badanie tematu — z licznikami „przed”.

Użycie:
  python3 eksport/paczka_ai.py ulepsz NAZWA plik1.md plik2.md ...   # pełne lekcje → model oddaje nowe wersje
  python3 eksport/paczka_ai.py check  NAZWA plik1.md plik2.md ...   # tylko szkielety (nagłówki, minimum, liczniki)
  python3 eksport/paczka_ai.py badanie NAZWA "temat" [plik.md]      # materiał do tematu (+ opcjonalnie istniejąca lekcja)
Wynik: eksport/out/AI_<TRYB>_<NAZWA>.md (poza gitem). Prompt: eksport/ULEPSZ_PROMPT.md.
Po odpowiedzi modelu: zapisz nową wersję obok i uruchom
  python3 narzedzia/porownaj_lekcje.py stara.md nowa.md
— raport KB przed/po i lista tego, co mogło zginąć.
Limit: ok. 100 KB na paczkę (Perplexity); skrypt ostrzega powyżej.
"""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'narzedzia'))
from porownaj_lekcje import liczniki, body, sekcje  # noqa: E402

def meta(t, k, d=''):
    return next((l.split(':', 1)[1].strip() for l in t.split('\n')[:30] if l.startswith(k + ':')), d)

def bez_audytu(t):
    out, skip = [], False
    for line in t.split('\n'):
        if re.match(r'^#{1,3} .*(AUDYT|MATERIAŁ ŹRÓDŁOWY|Status kontroli|Pochodzenie i sprawdzenie)', line):
            skip = True; continue
        if skip and re.match(r'^## ', line):
            skip = False
        if not skip:
            out.append(line)
    return '\n'.join(out)

def naglowek(f, t):
    c = liczniki(t)
    return (f"\n\n---\n\n# LEKCJA: {meta(t, 'kod', f.stem)} — {meta(t, 'tytul', f.stem)}\n\n"
            f"> Plik: `{f.name}` · stan: {meta(t, 'stan', '—')}\n"
            "> **Przed (policzone automatycznie):** " + ', '.join(f'{k}: {v}' for k, v in c.items() if k != 'znaki') + "\n\n")

def szkielet(t):
    b = body(t)
    out, w = [], False
    for l in b.split('\n'):
        if l.startswith('::: minimum'):
            w = True
        if w:
            out.append(l)
            if l.strip() == ':::': w = False
            continue
        if l.startswith('## '):
            out.append(l)
    return '\n'.join(out)

def main():
    if len(sys.argv) < 4:
        print(__doc__); sys.exit(2)
    tryb, nazwa, reszta = sys.argv[1].lower(), sys.argv[2], sys.argv[3:]
    if tryb not in ('ulepsz', 'check', 'badanie'):
        print('TRYB: ulepsz | check | badanie'); sys.exit(2)
    czesci, kody = [], []
    if tryb == 'badanie':
        temat, pliki = reszta[0], reszta[1:]
        czesci.append(f'\n\n---\n\n# TEMAT DO OPRACOWANIA: {temat}\n')
    else:
        pliki = reszta
    for p in pliki:
        f = Path(p); t = f.read_text()
        kody.append(meta(t, 'kod', f.stem))
        tresc = szkielet(t) if tryb == 'check' else bez_audytu(t)
        czesci.append(naglowek(f, t) + tresc)
    head = (f"# PACZKA AI — TRYB: {tryb.upper()} — {', '.join(kody) or sys.argv[3]}\n\n"
            "> Skopiuj polecenie poniżej do okna czatu, a cały plik dołącz jako załącznik. Tryb pracy: **" + tryb.upper() + "**.\n\n")
    s = head + (ROOT / 'eksport' / 'ULEPSZ_PROMPT.md').read_text() + ''.join(czesci)
    out = ROOT / 'eksport' / 'out' / f'AI_{tryb.upper()}_{nazwa}.md'
    out.parent.mkdir(exist_ok=True)
    out.write_text(s)
    kb = len(s.encode('utf-8')) / 1024
    print(f'{out.relative_to(ROOT)}: {len(pliki)} plików, {kb:.0f} KB' + ('  ⚠ ponad 100 KB — podziel paczkę' if kb > 100 else ''))

if __name__ == '__main__':
    main()
