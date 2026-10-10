"""Martwe reguły CSS silnika (engine/src/style): selektory, których klasa/id nie występuje nigdzie poza CSS.
Użycie: python3 tools/css_martwe.py [--zapisz]   (bez --zapisz tylko raport)
Korpus: engine/src (bez style/), modules/, sections/, lessons-md/, tools/*.py|*.cjs|*.html.
Bezpieczne zostają: @keyframes/@font-face, selektory bez .klasy/#id, tokeny złożone dynamicznie (prefiks + ' lub ` w korpusie)."""
import re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
STY = ROOT / "engine/src/style"

def korpus():
    t = []
    for d, wz in (("engine/src", "**/*"), ("modules", "*"), ("sections", "**/*"), ("lessons-md", "**/*.md"), ("tools", "*")):
        for p in (ROOT / d).glob(wz):
            if p.is_file() and STY not in p.parents and p.suffix in (".js", ".html", ".md", ".py", ".cjs", ".json", ".txt"):
                if p.name == "_lab_skeleton.html": continue   # stara kopia szkieletu z wklejonym CSS
                t.append(re.sub(r"/\*@@CSS [\w.-]+@@\*/", "", p.read_text(encoding="utf-8", errors="ignore")))
    return "\n".join(t)

K = ""   # korpus ustawiany w main / przytnij_html
_cache = {}
_SLOWA = (None, set())
def zywy(tok):
    if tok not in _cache:
        global _SLOWA
        if _SLOWA[0] is not K: _SLOWA = (K, set(re.findall(r"[\w-]+", K)))
        _cache[tok] = tok in _SLOWA[1]
        if not _cache[tok]:   # klasa składana dynamicznie: 'pref-'+x, `pref-${x}`, f'pref-{x}', 'pref-%s'
            for i in range(len(tok) - 1, 0, -1):
                if tok[i] in "-_" and re.search(re.escape(tok[:i + 1]) + r"['\"`${%]", K):
                    _cache[tok] = True; break
    return _cache[tok]

def sel_martwy(s):
    s2 = re.sub(r"\[[^\]]*\]", "", s)            # atrybuty nie liczą się
    s2 = re.sub(r":(not|is|where|has)\([^)]*\)", "", s2)   # negacje itp. nie zabijają
    toks = re.findall(r"[.#](-?[A-Za-z_][\w-]*)", s2)
    return any(not zywy(t) for t in toks)

def bloki(css, i=0, glebia=0):
    """Zwraca listę (start, koniec_selektora, koniec_bloku) reguł stylu na tym poziomie; rekurencja w @media/@supports."""
    out = []
    n = len(css)
    while i < n:
        # pomiń komentarze i białe znaki
        if css.startswith("/*", i):
            j = css.find("*/", i + 2); i = n if j < 0 else j + 2; continue
        if css[i] in " \t\r\n;": i += 1; continue
        if css[i] == "}": return out, i + 1
        j = css.find("{", i)
        if j < 0: break
        pre = css[i:j]
        if ";" in pre and pre.lstrip().startswith("@"):   # @import/@charset
            i = css.find(";", i) + 1; continue
        if pre.lstrip().startswith(("@media", "@supports", "@container", "@layer")):
            sub, k = bloki(css, j + 1, glebia + 1)
            out += sub; i = k; continue
        # znajdź koniec bloku (z zagnieżdżeniem)
        d, k = 1, j + 1
        while k < n and d:
            if css.startswith("/*", k): k = css.find("*/", k + 2) + 2; continue
            if css[k] in "\"'":
                q = css[k]; k += 1
                while k < n and css[k] != q: k += 2 if css[k] == "\\" else 1
            elif css[k] == "{": d += 1
            elif css[k] == "}": d -= 1
            k += 1
        if not pre.lstrip().startswith("@"):
            out.append((i, j, k))
        i = k
    return out, n

def przetworz(css):
    bl, _ = bloki(css)
    zm = []   # (start, koniec, nowy_tekst)
    usun = 0
    for a, j, k in bl:
        sel = css[a:j]
        czesci = [c for c in re.split(r",(?![^(]*\))", sel)]
        zyw = [c for c in czesci if not sel_martwy(c.strip())]
        if not zyw:
            zm.append((a, k, "")); usun += k - a
        elif len(zyw) < len(czesci):
            nowy = ",".join(zyw).strip()
            zm.append((a, j, nowy)); usun += (j - a) - len(nowy)
    for a, b, t in sorted(zm, reverse=True):
        css = css[:a] + t + css[b:]
    return css, usun

if __name__ == "__main__":
    K = korpus()
    suma = 0
    for p in sorted(STY.glob("*.css")):
        stary = p.read_text(encoding="utf-8")
        nowy, u = przetworz(stary)
        suma += u
        if u: print(f"{p.name:32} {len(stary)/1024:6.1f} KB  −{u/1024:5.1f} KB")
        if "--zapisz" in sys.argv and nowy != stary:
            p.write_text(nowy, encoding="utf-8")
    print(f"razem martwe: {suma/1024:.1f} KB")


def _staly_korpus():
    t = []
    for d, wz in (("engine/src/lekcja", "*"), ("engine/src/dodatki", "**/*"), ("engine/src", "standalone.html"),
                  ("tools", "*.py"), ("tools", "*.cjs"), ("lessons-md", "**/*.md")):
        for p in (ROOT / d).glob(wz):
            if p.is_file() and p.name != "css_martwe.py":
                t.append(p.read_text(encoding="utf-8", errors="ignore"))
    return "\n".join(t)


def przytnij_html(lab):
    """Profil silnika: usuwa z <style> labu reguły, których klasa/id nie występuje w skryptach i HTML tego labu
    ani w szablonie lekcji, narzędziach i MD lekcji (statycznie; stany :hover/.open zostają, bo ich nazwy są w JS)."""
    global K
    K = re.sub(r"<style[^>]*>.*?</style>", "", lab, flags=re.S) + "\n" + _staly_korpus()
    _cache.clear()
    czesci = re.split(r"(<script\b[^>]*>.*?</script>)", lab, flags=re.S)   # <style> wewnątrz skryptów (napisy JS) — bez zmian
    for i in range(0, len(czesci), 2):
        czesci[i] = re.sub(r"(<style[^>]*>)(.*?)(</style>)", lambda m: m.group(1) + przetworz(m.group(2))[0] + m.group(3), czesci[i], flags=re.S)
    return "".join(czesci)
