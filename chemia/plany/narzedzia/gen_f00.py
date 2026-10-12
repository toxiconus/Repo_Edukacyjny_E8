import re, os
R="/home/claude/repo_edukacyjny_e8/"
src=open(R+"chemia/plany/CHE_SPIS_TRESCI.md",encoding="utf-8").read().split("\n")
blocks=[("F","Fundamenty (blok F)"),("N","Chemia nieorganiczna"),("R","Roztwory i stechiometria"),("J","Chemia jonowa"),("O","Chemia organiczna"),("X","Redoks"),("E","Elektrochemia"),("K","Energetyka, kinetyka i równowaga"),("A","Chemia jądrowa"),("P","Układ okresowy — pogłębienie")]
rows={}
cur=None
for i,ln in enumerate(src):
    m=re.match(r"^#### ([A-Z]\d\d) — (.+)$",ln)
    if m:
        kod,tytul=m.group(1),m.group(2).strip()
        rec={"tytul":tytul,"cel":"","wymaga":"","poglebia":"","status":""}
        for j in range(i+1,min(i+25,len(src))):
            t=src[j]
            if t.startswith("#### ") or t.startswith("## "): break
            if t.startswith("**Cel:**") and not rec["cel"]: rec["cel"]=t.replace("**Cel:**","").strip()
            for key in ("wymaga","poglebia","status"):
                mm=re.match(r'^%s:\s*"?([^"]*)"?\s*$'%key,t)
                if mm and not rec[key]: rec[key]=mm.group(1).strip()
        rows.setdefault(kod[0],[]).append((kod,rec))
# materiał (plik md) per kod
files={}
for d,_,fs in os.walk(R+"chemia/lekcje_md"):
    for f in fs:
        if f.endswith(".md"):
            mm=re.match(r"CHE\.\d\d\.([A-Z]\d\d)",f)
            if mm: files.setdefault(mm.group(1),[]).append(os.path.relpath(os.path.join(d,f),R))
out=[]
out.append("## Bloki kursu: 21 lekcji F + 9 działów\n")
out.append("Kolumny: kod, tytuł, zakres (cel ucznia), wymaga, pogłębia, status w spisie kanonu, plik materiału w repo. Źródło: `chemia/plany/CHE_SPIS_TRESCI.md` (generowany).\n")
for b,name in blocks:
    lst=rows.get(b,[])
    out.append(f"### {b} — {name} ({len(lst)} lekcji)\n")
    out.append("| Kod | Tytuł | Zakres (cel) | Wymaga | Pogłębia | Status | Materiał w repo |")
    out.append("|---|---|---|---|---|---|---|")
    for kod,rec in lst:
        mat=", ".join(files.get(kod,[])) or "—"
        mat=mat.replace("chemia/lekcje_md/","")
        out.append(f"| {kod} | {rec['tytul']} | {rec['cel'] or '—'} | {rec['wymaga'] or '—'} | {rec['poglebia'] or '—'} | {rec['status'] or '—'} | {mat} |")
    out.append("")
# blok 00 i uzupełnienia
out.append("### 00 — Wprowadzenie, system kursu i powtórki (materiał wspólny)\n")
out.append("| Kod | Co | Plik w repo |")
out.append("|---|---|---|")
for kod,co in [("W00","Wstęp do pakietu kursu"),("S00","System kursu (zasady pracy)"),("LAB","Zbiór doświadczeń LAB01–24, przypisanych do lekcji przez `wymaga`"),("REV01","Powtórka fundamentów z klasy 7 (start klasy 8)"),("REV02","Powtórka klasy 8"),("REV06","Pomost akademicki / zaawansowana"),("REV03–05","LO podstawowe, LO rozszerzone, zadania przekrojowe (do zrobienia)"),("REV07","Mapa kompetencji i diagnostyka zależności (do zrobienia)")]:
    f=[x for x in files.get(kod.split("–")[0],[])] if kod not in ("W00","S00","LAB") else []
    if kod in ("W00","S00","LAB","REV01","REV02","REV06"):
        pref={"W00":"CHE.00.W00","S00":"CHE.00.S00","LAB":"CHE.00.LAB","REV01":"CHE.00.REV01","REV02":"CHE.00.REV02","REV06":"CHE.00.REV06"}[kod]
        ff=[p for p in sum(files.values(),[]) if p.split("/")[-1].startswith(pref)]
        out.append(f"| {kod} | {co} | {ff[0] if ff else '—'} |")
    else:
        out.append(f"| {kod} | {co} | — |")
out.append("")
out.append("### Uzupełnienia\n")
out.append("| Kod | Co | Status |")
out.append("|---|---|---|")
out.append("| FIZ-01 | Elektrostatyka (pomost do F04 i F11) | gotowa, poza kanonem CHE |")
for k in range(0,11):
    out.append(f"| RT{k:02d} | Powtórka tematyczna (szkic w `plany/audyty/W1_perplexity_REV00-REV10_2026-10-09.md`) | do zrobienia |")
open(R+"chemia/lekcje_md/F/CHE.01.F00.wspolne_bloku_F.md.tmp","w",encoding="utf-8").write("\n".join(out)+"\n")
print(sum(len(v) for v in rows.values()), {k:len(v) for k,v in rows.items()})
