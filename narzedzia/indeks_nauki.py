"""Odświeża indeksy nauki (HTML) wg aktualnych plików lekcji.
Użycie: python3 narzedzia/indeks_nauki.py [--sprawdz]
Dla każdego wiersza tabeli z kodem: rozmiar MD (lessons-md/gotowe), HTML (chemia/che-modular/dist), stan z front matter.
Nowe lekcje NIE są dodawane automatycznie — skrypt wypisuje lekcje gotowe, których nie ma w indeksie.
--sprawdz: tylko raport, bez zapisu.
"""
import glob, html, os, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GOTOWE = ROOT / "chemia/che-modular/lessons-md/gotowe"
DIST = ROOT / "chemia/che-modular/dist"
INDEKSY = [ROOT / "olimpiada/plany/INDEKS_NAUKI_ETAP_I.html",
           ROOT / "olimpiada/plany/INDEKS_NAUKI_LKO_ETAPY.html"]
SPECIAL = {"LKO-PUŁAPKI-WAPNO": "LKO_pulapki_", "LKO-B1+B2": "LKO_B1B2_", "LKO-SYM-A2": "LKO_SYM-A2_"}

def front(path):
    t = path.read_text(encoding="utf-8")
    m = re.match(r"---\n(.*?)\n---", t, re.S)
    f = m.group(1) if m else ""
    def g(k):
        r = re.search(rf'^{k}:\s*"?(.*?)"?\s*$', f, re.M)
        return r.group(1) if r else None
    return g("tytul"), g("stan")

def kb(p):
    return round(p.stat().st_size / 1024, 1) if p.exists() else None

def plik_dla_kodu(kod):
    pref = SPECIAL.get(kod, kod.replace("-", "_") + "_")
    c = [p for p in GOTOWE.glob("*.md") if p.name.startswith(pref)]
    return c[0] if len(c) == 1 else None

def odswiez(indeks, sprawdz):
    s = indeks.read_text(encoding="utf-8")
    kody_w_indeksie, zmiany = set(), []
    for r in re.findall(r"<tr>(.*?)</tr>", s, re.S):
        tds = re.findall(r"<td[^>]*>(.*?)</td>", r, re.S)
        if len(tds) != 7:
            continue
        kod = re.sub("<[^>]+>", "", tds[1])
        kody_w_indeksie.add(kod)
        f = plik_dla_kodu(kod)
        if not f:
            continue
        _, stan = front(f)
        nowy = r.replace(tds[4], str(kb(f)), 1).replace(tds[5], str(kb(DIST / (f.stem + ".html"))), 1)
        if stan:
            nowy = nowy.replace(tds[6], html.escape(stan), 1)
        if nowy != r:
            zmiany.append(kod)
            s = s.replace(r, nowy, 1)
    dopasowane = {plik_dla_kodu(k).name for k in kody_w_indeksie if plik_dla_kodu(k)}
    brak = sorted(q.name for q in GOTOWE.glob("*.md") if q.name not in dopasowane)
    n, md, hh = 0, 0.0, 0.0
    def renum(m):
        nonlocal n, md, hh
        n += 1
        c = re.findall(r"<td[^>]*>(.*?)</td>", m.group(0), re.S)
        md += float(c[4]); hh += float(c[5])
        return f"<tr><td>{n}</td>{m.group(1)}"
    s = re.sub(r"<tr><td>\d+</td>(<td><code>.*?</tr>)", renum, s, flags=re.S)
    s = re.sub(r"Lekcji: \d+ · MD razem: [\d.]+ KB · HTML razem: [\d.]+ KB",
               f"Lekcji: {n} · MD razem: {md:.1f} KB · HTML razem: {hh:.1f} KB", s)
    print(f"{indeks.name}: wiersze {n}, zmienione {len(zmiany)}, plików gotowe niepowiązanych z tym indeksem: {len(brak)}")
    if not sprawdz:
        indeks.write_text(s, encoding="utf-8")

if __name__ == "__main__":
    for i in INDEKSY:
        odswiez(i, "--sprawdz" in sys.argv)
