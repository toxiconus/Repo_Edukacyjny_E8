#!/usr/bin/env python3
"""Katalog kursu polskiego z kanonu v2 + szkielety nowych lekcji.

Kanon:   polski/plany/POL_SPIS_TRESCI_v2.md (sekcja 3, tabele bloków)
Wynik:   polski/plany/POL_KATALOG.md — plan (temat) vs plik lekcji, KB, stan, audyt W1

Użycie:
  python3 narzedzia/spis_polski.py                    # odśwież katalog
  python3 narzedzia/spis_polski.py --szkielety K02 T01 # puste szkielety (nie nadpisuje)
  python3 narzedzia/spis_polski.py --priorytet 1       # szkielety całego priorytetu produkcji
"""
import datetime, glob, os, re, sys, unicodedata

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KANON = os.path.join(REPO, "polski", "plany", "POL_SPIS_TRESCI_v2.md")
KATALOG = os.path.join(REPO, "polski", "plany", "POL_KATALOG.md")
NOWE = os.path.join(REPO, "polski", "lekcje")
WERYF = os.path.join(REPO, "WERYFIKACJA.md")
DZIS = datetime.date.today().isoformat()

PRIORYTETY = {  # sekcja 6 kanonu „Priorytety produkcji”
    1: "K02-K14 T01-T03 M05",
    2: "R01-R08",
    3: "J01-J03 P01-P04 D16",
    4: "D14 M01-M02 T04 G20 J04-J06",
    5: "B01-B08 S07-S08 D15 M03-M04 M06 G18-G19 K15",
}


def czysc(t):
    return re.sub(r"\*\*", "", t).strip()


def wczytaj_kanon():
    """[(blok, nazwa_bloku, kod, tytul, w1, w2, w3, status)] w kolejności spisu."""
    lekcje, blok, naglowek = [], None, None
    sek3 = False
    for w in open(KANON, encoding="utf-8"):
        if w.startswith("## "):
            sek3 = w.startswith("## 3.")
        if not sek3:
            continue
        m = re.match(r"### (POL\.\d+) (.+)", w)
        if m:
            blok, naglowek = (m.group(1), m.group(2).split("(")[0].strip()), None
            continue
        if not w.startswith("|") or blok is None:
            continue
        kom = [c.strip() for c in w.strip().strip("|").split("|")]
        if kom[0] == "Kod":
            naglowek = kom
            continue
        kod = czysc(kom[0])
        if not re.fullmatch(r"[A-Z]\d{2,3}", kod):
            continue
        d = dict(zip(naglowek, kom))
        w1 = czysc(d.get("W1 — rdzeń (cel)", d.get("W1 — rdzeń", d.get("Zakres", ""))))
        lekcje.append(dict(blok=blok[0], nazwa_bloku=blok[1], kod=kod, tytul=czysc(d["Lekcja"]),
                           w1=w1, w2=czysc(d.get("W2 — konkurs", "")), w3=czysc(d.get("W3 — pomost LO", "")),
                           warstwa=czysc(d.get("Warstwa", "")), status=czysc(d.get("Status", ""))))
    return lekcje


def rozwin(spec):
    kody = []
    for cz in spec.split():
        m = re.fullmatch(r"([A-Z])(\d+)-[A-Z](\d+)", cz)
        kody += [f"{m.group(1)}{i:02d}" for i in range(int(m.group(2)), int(m.group(3)) + 1)] if m else [cz]
    return kody


def pliki_lekcji():
    """kod -> [ścieżki] (md z `kod:` w nagłówku albo nazwa PL_<kod>_ / L00x-PL)."""
    mapa = {}
    for p in glob.glob(os.path.join(REPO, "polski", "**", "*.*"), recursive=True):
        if "/plany/" in p or not p.endswith((".md", ".html")):
            continue
        n = os.path.basename(p)
        m = re.match(r"(?:PL_)?([A-Z]\d{2,3})[_\-]", n)
        kod = m.group(1) if m else None
        if p.endswith(".md"):
            g = re.search(r"^kod: ([A-Z]\d{2,3})", open(p, encoding="utf-8", errors="ignore").read(600), re.M)
            kod = g.group(1) if g else kod
        if kod:
            mapa.setdefault(kod, []).append(p)
    return mapa


def stan(p):
    if not p.endswith(".md"):
        return "HTML"
    g = re.search(r"^stan: (.+)$", open(p, encoding="utf-8", errors="ignore").read(1500), re.M)
    return g.group(1).split("—")[0].split("(")[0].strip() if g else "?"


def audyty():
    a = {}
    if os.path.exists(WERYF):
        for w in open(WERYF, encoding="utf-8"):
            m = re.match(r"\| polski \| ([A-Z]\d{2,3}) \| [^|]+\| (\d{4}-\d\d-\d\d) \|", w)
            if m:
                a[m.group(1)] = "W1 " + m.group(2)
    return a


def katalog(lekcje):
    pl, au = pliki_lekcji(), audyty()
    out = [f"# Język polski — katalog lekcji (kanon v2)\n",
           f"Generowany {DZIS}: `python3 narzedzia/spis_polski.py` — nie edytować ręcznie. "
           "Kanon (plan tematów, warstwy W0–W3, kolejność): `polski/plany/POL_SPIS_TRESCI_v2.md`.\n",
           "**Plan** = temat w kanonie; **lekcja** = plik w repo. Plik: najnowszy md (HTML tylko gdy brak md); KB = rozmiar; stan = pole `stan:` z nagłówka md.\n"]
    ile = dict(plan=len(lekcje), plik=0, audyt=0)
    blok = None
    wiersze = []
    for l in lekcje:
        if l["blok"] != blok:
            blok = l["blok"]
            wiersze.append(f"\n## {blok} {l['nazwa_bloku']}\n\n| Kod | Lekcja | Status w kanonie | Plik | KB | Stan | Audyt |\n|---|---|---|---|---|---|---|")
        ps = pl.get(l["kod"], [])
        md = sorted([p for p in ps if p.endswith(".md")], key=os.path.getmtime)
        p = (md or sorted(ps, key=os.path.getmtime) or [None])[-1]
        if p:
            ile["plik"] += 1
        if l["kod"] in au:
            ile["audyt"] += 1
        dod = f" (+{len(ps) - 1})" if len(ps) > 1 else ""
        wiersze.append("| {} | {} | {} | {} | {} | {} | {} |".format(
            l["kod"], l["tytul"][:70], (l["status"] or l["warstwa"])[:40],
            f"`{os.path.relpath(p, REPO)}`{dod}" if p else "—",
            os.path.getsize(p) // 1024 if p else "—", stan(p) if p else "BRAK", au.get(l["kod"], "—")))
    out.append(f"**Stan:** {ile['plan']} tematów w kanonie · {ile['plik']} z plikiem · {ile['audyt']} z audytem W1.\n")
    out.append("**Priorytety produkcji:** " + " · ".join(f"{k}: {v}" for k, v in PRIORYTETY.items()) + "\n")
    out += wiersze
    open(KATALOG, "w", encoding="utf-8").write("\n".join(out) + "\n")
    print(f"katalog: {ile['plan']} tematów, {ile['plik']} z plikiem, {ile['audyt']} z W1 → {os.path.relpath(KATALOG, REPO)}")


def slug(t):
    t = unicodedata.normalize("NFKD", t.replace("ł", "l").replace("Ł", "L"))
    t = "".join(c for c in t if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", "_", t).strip("_")[:40]


SEKCJE = {  # rodzaj lekcji -> sekcje rdzenia W1 (warstwy W2/W3 dochodzą jako bloki ::: warstwa)
    "K": ["Cel i kryterium gotowości", "Kontekst: autor, czas, gatunek", "Streszczenie i plan wydarzeń (lub treść wiersza)",
          "Bohaterowie — charakterystyka z dowodami", "Problematyka i motywy", "Najważniejsze fragmenty i cytaty (krótkie)",
          "Środki i język utworu", "Lektura jako dowód w rozprawce", "Ćwiczenia A — podstawa", "Zadania w stylu CKE (z kluczem i punktacją)",
          "Fiszki", "Wizualizacja (oś wydarzeń / mapa postaci) + @opis"],
    "*": ["Cel i kryterium gotowości", "Wiedza — definicje i pojęcia", "Procedura krok po kroku", "Przykłady (z lektur obowiązkowych)",
          "Klinika błędów", "Ćwiczenia A — podstawa", "Zadania w stylu CKE (z kluczem i punktacją)", "Fiszki",
          "Wizualizacja + @opis"],
}


def szkielet(l):
    sek = SEKCJE.get(l["kod"][0], SEKCJE["*"])
    s = ["---", f"kod: {l['kod']}", "przedmiot: polski", f"tytul: {l['tytul']}", f"blok: {l['blok']} {l['nazwa_bloku']}",
         f"cel_W1: {l['w1'] or '—'}", f"cel_W2: {l['w2'] or '—'}", f"cel_W3: {l['w3'] or '—'}",
         "stan: PUSTY", f"utworzono: {DZIS}", "---", "",
         "> Szkielet z kanonu v2 (`polski/plany/POL_SPIS_TRESCI_v2.md`). Rdzeń W1 bez znaczników; warstwy w blokach `::: warstwa W2 [KONKURS]` … `:::`. "
         "Każde ćwiczenie ma znacznik `[SPRAWDZIAN]`/`[E8]`/`[KONKURS]`/`[LO]`. Pisownia wg zasad RJP od 2026. `@opis` pod każdą wizualizacją.", ""]
    for i, t in enumerate(sek):
        s += [f"## {i} | {t}", "", "DO UZUPEŁNIENIA", ""]
    if l["w2"] and l["w2"] != "—":
        s += ["::: warstwa W2 [KONKURS]", f"## Rozszerzenie — konkurs/olimpiada: {l['w2']}", "", "DO UZUPEŁNIENIA", ":::", ""]
    if l["w3"] and l["w3"] != "—":
        s += ["::: warstwa W3 [LO]", f"## Pomost LO: {l['w3']}", "", "DO UZUPEŁNIENIA", ":::", ""]
    return "\n".join(s)


def szkielety(lekcje, kody):
    po = {l["kod"]: l for l in lekcje}
    istn, nowe = pliki_lekcji(), 0
    os.makedirs(NOWE, exist_ok=True)
    for k in kody:
        if k not in po:
            print(f"! {k}: brak w kanonie"); continue
        if k in istn:
            continue
        l = po[k]
        open(os.path.join(NOWE, f"PL_{k}_{slug(l['tytul'])}.md"), "w", encoding="utf-8").write(szkielet(l))
        nowe += 1
    print(f"szkielety: {nowe} nowych → {os.path.relpath(NOWE, REPO)}")


def main():
    lekcje = wczytaj_kanon()
    a = sys.argv[1:]
    if a[:1] == ["--szkielety"]:
        szkielety(lekcje, rozwin(" ".join(a[1:])))
    elif a[:1] == ["--priorytet"]:
        szkielety(lekcje, rozwin(PRIORYTETY[int(a[1])]))
    katalog(lekcje)


if __name__ == "__main__":
    main()
