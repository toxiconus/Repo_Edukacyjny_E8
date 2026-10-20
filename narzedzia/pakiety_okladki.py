#!/usr/bin/env python3
"""Pakiety z okładką: LKO oraz cała chemia (gotowe lekcje) — okladka.html + kopie aktualnych md i html.
Użycie: python3 narzedzia/pakiety_okladki.py [--bez-budowy]
- md: chemia/che-modular/lessons-md/gotowe (kopia)
- html: chemia/che-modular/dist (kopia; nieaktualne lub brakujące są najpierw przebudowywane md2html.py)
- LKO: lekcje z tabeli olimpiada/INDEKS_CHEMIA.md → olimpiada/LKO_pakiet/
- chemia: wszystkie gotowe md → chemia/pakiet/
Okładka i kopie są generowane — nie edytować ręcznie. Uruchom ponownie po każdej zmianie lekcji.
"""
import datetime, html, re, shutil, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GOT = ROOT / "chemia/che-modular/lessons-md/gotowe"
DIST = ROOT / "chemia/che-modular/dist"
MD2HTML = ROOT / "chemia/che-modular/tools/md2html.py"
INDEKS_LKO = ROOT / "olimpiada/INDEKS_CHEMIA.md"

def fm(p):
    t = p.read_text(encoding="utf-8")
    m = re.match(r"---\n(.*?)\n---", t, re.S)
    f = m.group(1) if m else ""
    def g(k):
        r = re.search(rf'^{k}:\s*"?(.*?)"?\s*$', f, re.M)
        return r.group(1).strip() if r else ""
    return {k: g(k) for k in ("kod", "tytul", "stan")}

def kb(p):
    return f"{round(p.stat().st_size / 1024)} KB" if p.exists() else "—"

def lko_nazwy():
    out = []
    for l in INDEKS_LKO.read_text(encoding="utf-8").split("\n"):
        m = re.match(r"^\| \d+ \| (.*?) \|", l)
        if m:
            n = m.group(1).split(" (")[0].strip()
            if n.endswith(".md"):
                out.append(n)
    return out

def wszystkie_gotowe():
    return sorted(p.name for p in GOT.glob("*.md"))

def przebuduj(nazwy):
    bledy = []
    for n in nazwy:
        md = GOT / n
        h = DIST / (md.stem + ".html")
        if h.exists() and h.stat().st_mtime >= md.stat().st_mtime:
            continue
        r = subprocess.run([sys.executable, str(MD2HTML), f"lessons-md/gotowe/{n}"],
                           cwd=ROOT / "chemia/che-modular", capture_output=True, text=True)
        if r.returncode != 0 or not h.exists():
            bledy.append(n)
    return bledy

CSS = """body{font-family:system-ui,sans-serif;margin:0;background:#f7f7f5;color:#222}
main{max-width:980px;margin:0 auto;padding:16px}
h1{margin:.2em 0}.meta{color:#555}
table{border-collapse:collapse;width:100%;background:#fff;font-size:14px}
th,td{border-bottom:1px solid #ddd;padding:6px 8px;text-align:left;vertical-align:top}
th{background:#eee}td.r{text-align:right;white-space:nowrap}
a{color:#0a58ca}.brak{color:#b00}
footer{margin-top:16px;color:#666;font-size:12px}"""

def pakiet(out, tytul, nazwy, dzis):
    for sub in ("md", "html"):
        if (out / sub).exists():
            shutil.rmtree(out / sub)
        (out / sub).mkdir(parents=True)
    wiersze = []
    braki = []
    for n in nazwy:
        md = GOT / n
        if not md.exists():
            braki.append(n); continue
        m = fm(md)
        stem = md.stem
        h = DIST / (stem + ".html")
        shutil.copy2(md, out / "md" / n)
        ma_html = h.exists()
        if ma_html:
            shutil.copy2(h, out / "html" / (stem + ".html"))
        else:
            braki.append(n + " (brak HTML)")
        link_h = f'<a href="html/{html.escape(stem)}.html">HTML</a>' if ma_html else '<span class="brak">brak HTML</span>'
        wiersze.append(
            f"<tr><td><code>{html.escape(m['kod'] or stem.split('_')[0])}</code></td>"
            f"<td>{html.escape(m['tytul'] or stem)}</td>"
            f"<td>{html.escape(m['stan'] or '—')}</td>"
            f"<td class=\"r\">{kb(md)}</td><td class=\"r\">{kb(h)}</td>"
            f"<td>{link_h} · <a href=\"md/{html.escape(n)}\">MD</a></td></tr>")
    doc = f"""<!doctype html><html lang="pl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Okładka — {html.escape(tytul)}</title><style>{CSS}</style></head><body><main>
<h1>{html.escape(tytul)}</h1>
<p class="meta">Stan na {dzis} · lekcji: {len(wiersze)}</p>
<table><thead><tr><th>Kod</th><th>Tytuł</th><th>Stan</th><th>MD</th><th>HTML</th><th>Pliki</th></tr></thead>
<tbody>{''.join(wiersze)}</tbody></table>
<footer>Wygenerowano przez narzedzia/pakiety_okladki.py — nie edytować ręcznie. Kopie md i html pochodzą z lessons-md/gotowe i chemia/che-modular/dist.{(' Brakuje: ' + html.escape(', '.join(braki))) if braki else ''}</footer>
</main></body></html>"""
    (out / "okladka.html").write_text(doc, encoding="utf-8")
    return len(wiersze), braki

def main():
    dzis = datetime.date.today().isoformat()
    lko = [n for n in lko_nazwy() if (GOT / n).exists()]
    wszystkie = wszystkie_gotowe()
    bledy = []
    if "--bez-budowy" not in sys.argv:
        bledy = przebuduj(sorted(set(lko) | set(wszystkie)))
    a, ba = pakiet(ROOT / "olimpiada/LKO_pakiet", "LKO — chemia olimpijska 2026/27", lko, dzis)
    b, bb = pakiet(ROOT / "chemia/pakiet", "Chemia — wszystkie lekcje gotowe", wszystkie, dzis)
    print(f"LKO: {a} lekcji; chemia: {b} lekcji")
    if bledy: print("błąd budowy HTML:", ", ".join(bledy))
    for x in ba + bb: print("uwaga:", x)

if __name__ == "__main__":
    main()
