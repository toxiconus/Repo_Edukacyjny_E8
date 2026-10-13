#!/usr/bin/env python3
"""Strona z zakładkami (okladki/index.html) i osobne okładki (okladka_<przedmiot>.html).
Kolumny tabeli: Plik | Tytuł | MD (rozmiar + link) | HTML (rozmiar + link) | Stan weryfikacji.
Użycie: python3 narzedzia/okladki_zakladki.py
- Chemia i LKO: linki do pakietów z kopiami (chemia/pakiet, olimpiada/LKO_pakiet) — md i stan z pakietu.
- Polski, Biologia, Angielski, Olimpiada (OLI): kopie html w okladki/<grupa>/html/; md i stan szukane po nazwie pliku w katalogu przedmiotu.
Uruchom po zbuduj_wszystkie.py i pakiety_okladki.py. Generowane — nie edytować ręcznie.
"""
import datetime, html, re, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "okladki"

GRUPY = [
    # slug, nazwa zakładki, katalog html, tryb ("ref" = link do pakietu, "copy" = kopie), katalog źródłowy md
    ("chemia", "Chemia", ROOT / "chemia/pakiet/html", "ref", None),
    ("lko", "LKO (olimpiada chemiczna)", ROOT / "olimpiada/LKO_pakiet/html", "ref", None),
    ("polski", "Polski", ROOT / "polski/html", "copy", ROOT / "polski"),
    ("biologia", "Biologia", ROOT / "biologia/html", "copy", ROOT / "biologia"),
    ("angielski", "Angielski", ROOT / "angielski/html", "copy", ROOT / "angielski"),
    ("olimpiada", "Olimpiada (OLI)", ROOT / "olimpiada/html", "copy", ROOT / "olimpiada"),
]

def tytul_html(p):
    t = p.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"<title>(.*?)</title>", t, re.S | re.I)
    return html.unescape(m.group(1).strip()) if m else p.stem

def stan_md(p):
    t = p.read_text(encoding="utf-8", errors="ignore")
    m = re.match(r"---\n(.*?)\n---", t, re.S)
    if not m:
        return None
    r = re.search(r'^stan:\s*"?(.*?)"?\s*$', m.group(1), re.M)
    return r.group(1).strip() if r else None

VIZ_RE = re.compile(r'data-che-lesson-viz=|data-bio-viz=|data-viz=')

def ile_viz(p):
    """Liczba osadzonych wizualizacji w pliku HTML (sloty silnika chemii, biologii i polskiego)."""
    return len(VIZ_RE.findall(p.read_text(encoding="utf-8", errors="ignore")))

def pliki_html(d):
    return sorted(p for p in d.glob("*.html") if p.name != "index.html")

def kb(p):
    return f"{round(p.stat().st_size / 1024)} KB"

def znajdz_md(stem, root):
    """Szuka md o tej nazwie w katalogu przedmiotu (bez archiwum i katalogów html/dist/pakiet)."""
    if root is None or not root.exists():
        return None
    for p in root.rglob(stem + ".md"):
        if any(part in ("archiwum", "html", "dist", "pakiet", "node_modules") for part in p.parts):
            continue
        return p
    return None

def zbierz(slug, src, tryb, md_root):
    """Zwraca listę słowników: stem, tytul, html_href, md_href, html_kb, md_kb, stan."""
    out_dir = OUT / slug / "html"
    if tryb == "copy":
        if (OUT / slug).exists():
            shutil.rmtree(OUT / slug)
        out_dir.mkdir(parents=True)
    wiersze = []
    for h in pliki_html(src) if src.exists() else []:
        if tryb == "copy":
            shutil.copy2(h, out_dir / h.name)
            html_href = f"{slug}/html/{h.name}"
            md_src = znajdz_md(h.stem, md_root)
            md_href = None
            if md_src is not None:
                md_dst = OUT / slug / "md" / md_src.name
                md_dst.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(md_src, md_dst)
                md_href = f"{slug}/md/{md_src.name}"
        else:
            html_href = "../" + h.relative_to(ROOT).as_posix()
            md_src = h.parent.parent / "md" / (h.stem + ".md")
            md_href = "../" + md_src.relative_to(ROOT).as_posix() if md_src.exists() else None
        md_path = md_src if tryb == "copy" else (h.parent.parent / "md" / (h.stem + ".md"))
        stan = stan_md(md_path) if md_path is not None and md_path.exists() else None
        wiersze.append({
            "stem": h.stem,
            "tytul": tytul_html(h),
            "html_href": html_href,
            "md_href": md_href,
            "html_kb": kb(h),
            "viz": ile_viz(h),
            "md_kb": kb(md_path) if md_path is not None and md_path.exists() else None,
            "stan": stan,
        })
    return wiersze

def komorka_md(w):
    if not w["md_kb"]:
        return '<span class="brak">brak md</span>'
    link = f'<a href="{html.escape(w["md_href"])}">MD</a>' if w["md_href"] else "MD"
    return f'{link} · {w["md_kb"]}'

def komorka_html(w):
    return f'<a href="{html.escape(w["html_href"])}">HTML</a> · {w["html_kb"]}'

def wiersze_tabeli(wiersze):
    if not wiersze:
        return '<tr><td colspan="6">brak lekcji</td></tr>'
    out = []
    for w in wiersze:
        stan = html.escape(w["stan"]) if w["stan"] else '<span class="brak">brak stanu (brak md)</span>'
        out.append(
            f"<tr><td><code>{html.escape(w['stem'])}</code></td>"
            f"<td>{html.escape(w['tytul'])}</td>"
            f"<td>{komorka_md(w)}</td>"
            f"<td>{komorka_html(w)}</td>"
            f"<td class=\"r\">{w['viz']}</td>"
            f"<td>{stan}</td></tr>")
    return "".join(out)

NAGLOWEK = "<thead><tr><th>Plik</th><th>Tytuł</th><th>MD</th><th>HTML</th><th class=\"r\">Wizualizacje</th><th>Stan weryfikacji</th></tr></thead>"

CSS = """body{font-family:system-ui,sans-serif;margin:0;background:#f7f7f5;color:#222}
main{max-width:1100px;margin:0 auto;padding:16px}
h1{margin:.2em 0;font-size:24px}.meta{color:#555;font-size:14px}
.tabs{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}
.tabs button{border:1px solid #bbb;background:#fff;padding:8px 12px;border-radius:6px;cursor:pointer;font-size:14px}
.tabs button.act{background:#0a58ca;color:#fff;border-color:#0a58ca}
section.tab{display:none}section.tab.act{display:block}
table{border-collapse:collapse;width:100%;background:#fff;font-size:14px}
th,td{border-bottom:1px solid #ddd;padding:6px 8px;text-align:left;vertical-align:top}
th{background:#eee}td.r{text-align:right;white-space:nowrap}a{color:#0a58ca}
.brak{color:#b00}
footer{margin-top:16px;color:#666;font-size:12px}"""

JS = """function pokaz(id){document.querySelectorAll('.tabs button').forEach(function(b){b.classList.toggle('act',b.dataset.t===id)});
document.querySelectorAll('section.tab').forEach(function(s){s.classList.toggle('act',s.id===id)});}
document.addEventListener('DOMContentLoaded',function(){pokaz('e8');});"""

def main():
    dzis = datetime.date.today().isoformat()
    OUT.mkdir(exist_ok=True)
    dane = []
    for slug, nazwa, src, tryb, md_root in GRUPY:
        dane.append((slug, nazwa, zbierz(slug, src, tryb, md_root)))

    przyciski = ['<button data-t="e8" onclick="pokaz(\'e8\')">E8 — przegląd</button>']
    sekcje = []
    podsum = []
    for slug, nazwa, wiersze in dane:
        przyciski.append(f'<button data-t="{slug}" onclick="pokaz(\'{slug}\')">{html.escape(nazwa)} ({len(wiersze)})</button>')
        podsum.append((nazwa, len(wiersze), sum(1 for w in wiersze if w["md_kb"]), sum(1 for w in wiersze if w["stan"]), sum(w["viz"] for w in wiersze)))
        sekcje.append(f'<section class="tab" id="{slug}"><h2>{html.escape(nazwa)}</h2>'
                      f'<table>{NAGLOWEK}<tbody>{wiersze_tabeli(wiersze)}</tbody></table></section>')

    podsum_html = "".join(
        f"<tr><td>{html.escape(n)}</td><td class=\"r\">{l}</td><td class=\"r\">{m}</td><td class=\"r\">{s}</td><td class=\"r\">{v}</td></tr>"
        for n, l, m, s, v in podsum)
    e8 = (f'<section class="tab" id="e8"><h2>E8 — cały kurs (przegląd)</h2>'
          f'<p>Zakładki przedmiotów: chemia, polski, biologia, angielski. Olimpiada (LKO i OLI) to osobny nurt, ale lekcje są wspólne z kursem E8.</p>'
          f'<table><thead><tr><th>Przedmiot / nurt</th><th class="r">Lekcji (HTML)</th><th class="r">Z md</th><th class="r">Z stanem weryfikacji</th><th class="r">Wizualizacje</th></tr></thead>'
          f'<tbody>{podsum_html}</tbody></table></section>')

    doc = f"""<!doctype html><html lang="pl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Indeks lekcji — E8</title><style>{CSS}</style></head><body><main>
<h1>Indeks lekcji — E8 i olimpiada</h1>
<p class="meta">Stan na {dzis}. Zakładki: po jednej dla każdego przedmiotu, LKO i OLI oraz przegląd E8.</p>
<div class="tabs">{''.join(przyciski)}</div>
{e8}{''.join(sekcje)}
<footer>Wygenerowano przez narzedzia/okladki_zakladki.py — nie edytować ręcznie. Kopie pochodzą z katalogów html przedmiotów; chemia i LKO linkują do pakietów.</footer>
</main><script>{JS}</script></body></html>"""
    (OUT / "index.html").write_text(doc, encoding="utf-8")

    for slug, nazwa, wiersze in dane:
        okl = (f'<!doctype html><html lang="pl"><head><meta charset="utf-8">'
               f'<meta name="viewport" content="width=device-width,initial-scale=1">'
               f'<title>Okładka — {html.escape(nazwa)}</title><style>{CSS}</style></head><body><main>'
               f'<h1>{html.escape(nazwa)}</h1><p class="meta">Stan na {dzis} · lekcji: {len(wiersze)} · <a href="index.html">wszystkie zakładki</a></p>'
               f'<table>{NAGLOWEK}<tbody>{wiersze_tabeli(wiersze)}</tbody></table>'
               f'<footer>Wygenerowano przez narzedzia/okladki_zakladki.py — nie edytować ręcznie.</footer></main></body></html>')
        (OUT / f"okladka_{slug}.html").write_text(okl, encoding="utf-8")
    print("zakładki:", ", ".join(f"{n}={len(w)} (md {sum(1 for x in w if x['md_kb'])}, stan {sum(1 for x in w if x['stan'])}, viz {sum(x['viz'] for x in w)})" for _, n, w in dane))

if __name__ == "__main__":
    main()
