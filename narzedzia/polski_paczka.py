"""Język polski: spis lekcji (zakres, stan, KB, luki) + wszystkie lekcje w jednym md + paczka zip.

Użycie (z katalogu repo):  python3 narzedzia/polski_paczka.py
Wynik:
  polski/SPIS_LEKCJI_POLSKI.md                      — tabela lekcji z lukami (w gicie)
  eksport/out/POLSKI_WSZYSTKIE_LEKCJE.md            — spis + wszystkie lekcje w jednym pliku
  eksport/out/POLSKI_LEKCJE_<data>.zip              — spis, plik zbiorczy i każda lekcja osobno
Lekcje: polski/lekcje_md (L001–L006), polski/do_uzupelnienia (L007–L011), polski/podstawy (G, S),
polski/blok_D/lekcje (D). Luki wykrywane automatycznie (znaczniki, brakujące typy sekcji, puste sekcje,
grafiki bez @opis, stan) — to wskazówki do sprawdzenia, nie ocena merytoryczna.
"""
import datetime, re, sys, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "narzedzia"))
import opis_wizualizacji as OPIS

DZIS = datetime.date.today().isoformat()
OUT = ROOT / "eksport" / "out"
GRUPY = [("Lektury i gramatyka (L001–L006)", "polski/lekcje_md"),
         ("Lekcje przekrojowe (L007–L011)", "polski/do_uzupelnienia"),
         ("Części mowy i składnia (G) · środki stylistyczne (S)", "polski/podstawy"),
         ("Kompetencje egzaminacyjne — blok D (D01–D13)", "polski/blok_D/lekcje")]
ZNACZNIKI = [(r"DO UZUPEŁNIENIA|do uzupełnienia|\bTODO\b|\bTBD\b", "znaczniki „do uzupełnienia”"),
             (r"\[do weryfikacji", "dane „do weryfikacji”"),
             (r"Zarys od Grok", "zostały surowe zarysy (Grok)"),
             (r"do scalenia", "fragmenty „do scalenia”"),
             (r"\bPUSTY\b", "stan PUSTY")]
TYPY = [(r"ćwiczen|zadani|trening", "ćwiczenia"),
        (r"klucz|odpowiedzi|rozwiązan", "klucz odpowiedzi"),
        (r"test|sprawdzian|CKE|egzamin", "test / zadania CKE"),
        (r"fiszk|słownik|ściąg", "fiszki / słownik / ściąga")]


def front(t):
    m = re.match(r"^---\n(.*?)\n---\n", t, re.S)
    d = {}
    if m:
        for ln in m.group(1).split("\n"):
            k = re.match(r"^([\w-]+):\s*(.*)$", ln)
            if k:
                d[k.group(1)] = k.group(2).strip().strip('"')
    return d, (t[m.end():] if m else t)


def skrot(s, n=170):
    s = re.sub(r"\[\[[^\]]*\]\]|[*_`>#|]", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s if len(s) <= n else s[:n].rsplit(" ", 1)[0] + "…"


def zakres(d, body):
    for k in ("zakres", "lead", "opis"):
        if d.get(k):
            return skrot(d[k])
    m = re.search(r"^## [^\n]*(Po co|Cel|Cele)[^\n]*\n(.*?)(?=^## )", body, re.M | re.S)
    if m:
        akapity = [a for a in m.group(2).split("\n\n") if len(a.strip()) > 40 and not a.strip().startswith("|")]
        if akapity:
            return skrot(akapity[0])
    return "—"


REJ = {}   # WERYFIKACJA.md: kod → data W1 (polski)
for _ln in (ROOT / "WERYFIKACJA.md").read_text(encoding="utf-8").split("\n"):
    _c = [x.strip() for x in _ln.strip().strip("|").split("|")]
    if len(_c) > 3 and _c[0] == "polski" and re.match(r"\d{4}-", _c[3]):
        REJ[_c[1]] = _c[3]


def luki(d, body, kod=""):
    out = []
    for rx, opis in ZNACZNIKI:
        n = len(re.findall(rx, body))
        if n:
            out.append(f"{opis} ×{n}")
    naglowki = " ".join(re.findall(r"^#{2,3} (.*)$", body, re.M)).lower()
    brak = [nazwa for rx, nazwa in TYPY if not re.search(rx, naglowki, re.I)
            and not (nazwa == "klucz odpowiedzi" and re.search(r"\*\*(klucz|odpowied)|^klucz|odp\.:|<details", body, re.I | re.M))]
    if brak:
        out.append("brak sekcji: " + ", ".join(brak))
    sekcje = re.split(r"^## .*$", body, flags=re.M)[1:]
    puste = sum(1 for s in sekcje if len(re.sub(r"\s|^#+.*$", "", s, flags=re.M)) < 40)
    if puste:
        out.append(f"puste/szczątkowe sekcje ×{puste}")
    bez = len(OPIS.braki(body))
    if bez:
        out.append(f"grafiki bez @opis ×{bez}")
    stan = (d.get("stan") or d.get("status") or "").lower()
    if "w2" in stan and ("wymagan" in stan or "nadal" in stan):
        out.append("W2 (źródła normatywne) do zrobienia")
    elif "w1" not in stan and "w2" not in stan:
        out.append(f"W1 w rejestrze {REJ[kod]}, stan w pliku nieuzupełniony" if kod in REJ else "bez weryfikacji W1")
    return "; ".join(out) or "—"


def lekcje():
    for grupa, kat in GRUPY:
        for p in sorted((ROOT / kat).glob("*.md")):
            t = p.read_text(encoding="utf-8")
            d, body = front(t)
            kod = re.sub(r"^(PL[._])", "", d.get("kod") or p.name.split(".")[2])
            tyt = re.sub(r"\s*·.*$", "", re.sub(r"^L\d+\s*[–-]\s*", "", d.get("tytul") or p.stem))
            stan = d.get("stan") or d.get("status") or "—"
            yield dict(grupa=grupa, kod=kod, tytul=tyt, zakres=zakres(d, body), stan=skrot(stan, 110),
                       kb=round(p.stat().st_size / 1024, 1), luki=luki(d, body, kod), plik=p.relative_to(ROOT), tekst=t)


def main():
    L = list(lekcje())
    lin = [f"# Język polski — spis lekcji (stan {DZIS})", "",
           f"{len(L)} lekcji, razem {round(sum(x['kb'] for x in L))} KB. Generator: `python3 narzedzia/polski_paczka.py`. "
           "Kolumna „Luki” to automatyczne wskazówki (znaczniki w tekście, brakujące typy sekcji, puste sekcje, "
           "grafiki bez opisu, stan weryfikacji) — do sprawdzenia, nie ocena merytoryczna.", ""]
    for grupa, _ in GRUPY:
        g = [x for x in L if x["grupa"] == grupa]
        lin += [f"## {grupa}", "", "| Kod | Tytuł | Zakres (skrót) | Stan | KB | Luki | Plik |", "|---|---|---|---|---|---|---|"]
        for x in g:
            lin.append(f"| {x['kod']} | {x['tytul']} | {x['zakres']} | {x['stan']} | {x['kb']} | {x['luki']} | `{x['plik']}` |")
        lin.append("")
    lin += ["## Poza spisem (materiały źródłowe, nie lekcje)", "",
            "- `polski/POLSKI_PODSTAWA_PLUS_v7.11.md` — master „Podstawa Plus” (źródło), `polski/L001-L006-PL-Wszystkie-lekcje.md` — dawny zbiór L001–L006,",
            "- audyty: `polski/plany/audyty/`, `polski/blok_D/audyty/`, `polski/blok_G/audyty/`, `polski/blok_S/audyty/`.", ""]
    spis = "\n".join(lin)
    (ROOT / "polski" / "SPIS_LEKCJI_POLSKI.md").write_text(spis, encoding="utf-8")
    OUT.mkdir(parents=True, exist_ok=True)
    zb = [spis, "\n\n---\n\n# Wszystkie lekcje\n"]
    for x in L:
        _, body = front(x["tekst"])
        body = re.sub(r"^(#{1,5}) ", lambda m: "#" + m.group(1) + " ", body.strip(), flags=re.M)
        zb.append(f"\n\n---\n\n# {x['kod']} — {x['tytul']}\n\n_Plik: `{x['plik']}` · stan: {x['stan']}_\n\n{body}\n")
    zbior = OUT / "POLSKI_WSZYSTKIE_LEKCJE.md"
    zbior.write_text("".join(zb), encoding="utf-8")
    zp = OUT / f"POLSKI_LEKCJE_{DZIS}.zip"
    with zipfile.ZipFile(zp, "w", zipfile.ZIP_DEFLATED) as z:
        z.write(ROOT / "polski" / "SPIS_LEKCJI_POLSKI.md", "SPIS_LEKCJI_POLSKI.md")
        z.write(zbior, "POLSKI_WSZYSTKIE_LEKCJE.md")
        for x in L:
            z.write(ROOT / x["plik"], "lekcje/" + str(x["plik"]).replace("polski/", "", 1))
    print(f"{len(L)} lekcji; spis polski/SPIS_LEKCJI_POLSKI.md; zbiorczy {zbior.stat().st_size // 1024} KB; zip {zp.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
