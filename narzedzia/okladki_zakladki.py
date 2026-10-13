#!/usr/bin/env python3
"""Strona z zakładkami (okladki/index.html): osobna zakładka dla każdego przedmiotu, LKO i olimpiady oraz E8 (podsumowanie).
Użycie: python3 narzedzia/okladki_zakladki.py
- Chemia i LKO: linki do pakietów z kopiami (chemia/pakiet, olimpiada/LKO_pakiet).
- Polski, Biologia, Angielski, Olimpiada (OLI): kopie aktualnych html w okladki/<grupa>/html/ (katalog odtwarzany przy każdym uruchomieniu).
Uruchom po zbuduj_wszystkie.py i pakiety_okladki.py. Generowane — nie edytować ręcznie.
"""
import datetime, html, re, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "okladki"

GRUPY = [
    # slug, nazwa zakładki, zrodlo (katalog), tryb ("ref" = link do pakietu, "copy" = kopie)
    ("chemia", "Chemia", ROOT / "chemia/pakiet/html", "ref"),
    ("lko", "LKO (olimpiada chemiczna)", ROOT / "olimpiada/LKO_pakiet/html", "ref"),
    ("polski", "Polski", ROOT / "polski/html", "copy"),
    ("biologia", "Biologia", ROOT / "biologia/html", "copy"),
    ("angielski", "Angielski", ROOT / "angielski/html", "copy"),
    ("olimpiada", "Olimpiada (OLI)", ROOT / "olimpiada/html", "copy"),
]

def tytul_html(p):
    t = p.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"<title>(.*?)</title>", t, re.S | re.I)
    return html.unescape(m.group(1).strip()) if m else p.stem

def pliki_html(d):
    return sorted(p for p in d.glob("*.html") if p.name != "index.html")

def kb(p):
    return f"{round(p.stat().st_size / 1024)} KB"

def zbierz(slug, src, tryb):
    """Zwraca listę (nazwa, tytuł, href_html, href_md|None, rozmiar)."""
    out_dir = OUT / slug / "html"
    if tryb == "copy":
        if (OUT / slug).exists():
            shutil.rmtree(OUT / slug)
        out_dir.mkdir(parents=True)
    wiersze = []
    md_dir = src.parent / "md" if (src.parent / "md").exists() else None
    for h in pliki_html(src) if src.exists() else []:
        if tryb == "copy":
            shutil.copy2(h, out_dir / h.name)
            href = f"{slug}/html/{h.name}"
        else:
            href = "../" + h.relative_to(ROOT).as_posix()
        md = None
        pack_md = h.parent.parent / "md" / (h.stem + ".md")
        if tryb == "ref" and pack_md.exists():
            md = "../" + pack_md.relative_to(ROOT).as_posix()
        wiersze.append((h.stem, tytul_html(h), href, md, kb(h)))
    return wiersze

def e8_podsumowanie(sekcje):
    r = []
    for slug, nazwa, n in sekcje:
        r.append(f"<tr><td>{html.escape(nazwa)}</td><td class=\"r\">{n}</td></tr>")
    return "".join(r)

CSS = """body{font-family:system-ui,sans-serif;margin:0;background:#f7f7f5;color:#222}
main{max-width:1000px;margin:0 auto;padding:16px}
h1{margin:.2em 0;font-size:24px}.meta{color:#555;font-size:14px}
.tabs{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}
.tabs button{border:1px solid #bbb;background:#fff;padding:8px 12px;border-radius:6px;cursor:pointer;font-size:14px}
.tabs button.act{background:#0a58ca;color:#fff;border-color:#0a58ca}
section.tab{display:none}section.tab.act{display:block}
table{border-collapse:collapse;width:100%;background:#fff;font-size:14px}
th,td{border-bottom:1px solid #ddd;padding:6px 8px;text-align:left;vertical-align:top}
th{background:#eee}td.r{text-align:right;white-space:nowrap}a{color:#0a58ca}
footer{margin-top:16px;color:#666;font-size:12px}"""

JS = """function pokaz(id){document.querySelectorAll('.tabs button').forEach(function(b){b.classList.toggle('act',b.dataset.t===id)});
document.querySelectorAll('section.tab').forEach(function(s){s.classList.toggle('act',s.id===id)});}
document.addEventListener('DOMContentLoaded',function(){pokaz('e8');});"""

def main():
    dzis = datetime.date.today().isoformat()
    if OUT.exists():
        pass
    OUT.mkdir(exist_ok=True)
    dane = []
    for slug, nazwa, src, tryb in GRUPY:
        dane.append((slug, nazwa, zbierz(slug, src, tryb)))
    # zakładki
    przyciski = ['<button data-t="e8" onclick="pokaz(\'e8\')">E8 — przegląd</button>']
    sekcje = []
    podsum = []
    for slug, nazwa, wiersze in dane:
        przyciski.append(f'<button data-t="{slug}" onclick="pokaz(\'{slug}\')">{html.escape(nazwa)} ({len(wiersze)})</button>')
        podsum.append((slug, nazwa, len(wiersze)))
        if wiersze:
            tr = "".join(
                f"<tr><td><code>{html.escape(n)}</code></td><td>{html.escape(t)}</td>"
                f"<td><a href=\"{html.escape(h)}\">HTML</a>{(' · <a href=\"' + html.escape(m) + '\">MD</a>') if m else ''}</td>"
                f"<td class=\"r\">{k}</td></tr>"
                for n, t, h, m, k in wiersze)
        else:
            tr = "<tr><td colspan=\"4\">brak lekcji</td></tr>"
        sekcje.append(f'<section class="tab" id="{slug}"><h2>{html.escape(nazwa)}</h2>'
                      f'<table><thead><tr><th>Plik</th><th>Tytuł</th><th>Pliki</th><th>HTML</th></tr></thead><tbody>{tr}</tbody></table></section>')
    e8 = (f'<section class="tab" id="e8"><h2>E8 — cały kurs (przegląd)</h2>'
          f'<p>Zakładki przedmiotów: chemia, polski, biologia, angielski. Olimpiada (LKO i OLI) to osobny nurt, ale lekcje są wspólne z kursem E8.</p>'
          f'<table><thead><tr><th>Przedmiot / nurt</th><th class="r">Lekcji</th></tr></thead><tbody>{e8_podsumowanie(podsum)}</tbody></table></section>')
    doc = f"""<!doctype html><html lang="pl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Okładki przedmiotów — E8</title><style>{CSS}</style></head><body><main>
<h1>Okładki przedmiotów — E8 i olimpiada</h1>
<p class="meta">Stan na {dzis}. Zakładki: po jednej dla każdego przedmiotu, LKO i OLI oraz przegląd E8.</p>
<div class="tabs">{''.join(przyciski)}</div>
{e8}{''.join(sekcje)}
<footer>Wygenerowano przez narzedzia/okladki_zakladki.py — nie edytować ręcznie. Kopie pochodzą z polski/html, biologia/html, angielski/html, olimpiada/html; chemia i LKO linkują do pakietów.</footer>
</main><script>{JS}</script></body></html>"""
    (OUT / "index.html").write_text(doc, encoding="utf-8")
    print("zakładki:", ", ".join(f"{n}={len(w)}" for _, n, w in dane))

if __name__ == "__main__":
    main()
