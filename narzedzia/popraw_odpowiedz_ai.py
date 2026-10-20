#!/usr/bin/env python3
"""Automatyczne poprawki surowej odpowiedzi AI (Perplexity itp.) przed wklejeniem do lekcji:
- LaTeX → Unicode (narzedzia/latex2uni.conv),
- sklejone nagłówki („tekst## Nagłówek” → osobna linia),
- nagłówek `---` na początku, jeśli brak frontmattera (tylko podgląd, nie zgadujemy wartości).
Użycie: python3 narzedzia/popraw_odpowiedz_ai.py wejście.md [wyjście.md]   (bez wyjścia: nadpisuje wejście; zawsze zapisz surowy plik najpierw)."""
import re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from latex2uni import conv

def popraw(t):
    t = conv(t)
    t = re.sub(r'([^\s#])(#{2,4} )', r'\1\n\n\2', t)          # sklejony nagłówek
    t = re.sub(r'\n{3,}', '\n\n', t)
    t = t.replace('\r\n', '\n')
    return t.strip() + '\n'

if __name__ == '__main__':
    src = sys.argv[1]; dst = sys.argv[2] if len(sys.argv) > 2 else src
    out = popraw(open(src, encoding='utf-8').read())
    open(dst, 'w', encoding='utf-8').write(out)
    print('ok', dst, len(out) // 1024, 'KB', '| LaTeX pozostało:', len(re.findall(r'\\\(|\\\[|\$\$', out)))
