# UWAGA: ten skrypt NADPISUJE chemia/lekcje_md/F/CHE.01.F00.wspolne_bloku_F.md przy każdym uruchomieniu.
# Nie edytować F00 ręcznie — poprawki wprowadzać w tym skrypcie albo w CHE_SPIS_TRESCI.md.
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
def kody_z_nazwy(czesc):
    # "O13+O15-O20+O22-O23" -> O13, O15..O20, O22..O23 ; "R03+R05" -> R03, R05
    out=[]
    for part in czesc.split("+"):
        m=re.match(r"^([A-Z])(\d\d)(?:-([A-Z])?(\d\d))?$",part)
        if not m: continue
        L,a=m.group(1),int(m.group(2))
        b=int(m.group(4)) if m.group(4) else a
        out+= [f"{L}{i:02d}" for i in range(a,b+1)]
    return out
# materiał (plik md) per kod
files={}
for d,_,fs in os.walk(R+"chemia/lekcje_md"):
    for f in fs:
        if f.endswith(".md"):
            mm=re.match(r"CHE\.\d\d\.([A-Z0-9+\-]+)\.",f)
            if mm:
                for kod in kody_z_nazwy(mm.group(1)):
                    files.setdefault(kod,[]).append(os.path.relpath(os.path.join(d,f),R))
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
for kod,co,st in [
    ("LKO-Z36","Konfiguracje elektronowe do Z=36 (suplement LKO)","szkic 2026-10-13, LKO etap II"),
    ("LKO-KRZYWE","Krzywe rozpuszczalności (suplement LKO)","szkic 2026-10-13, LKO etap I"),
    ("LKO-DIAG","Diagnoza wejściowa LKO","szkic 2026-10-13"),
    ("LKO-A1","Zestaw A1 i symulacja etapu I LKO","szkic 2026-10-13, przed przeglądem W1"),
    ("LKO-pułapki","Pułapki: woda wapienna, mleko wapienne, wapno, kreda, soda","szkic 2026-10-13"),
    ("LKO-METALE","Szereg aktywności, równania jonowe, otrzymywanie soli (LKO etap II)","szkic 2026-10-13, bez audytu W1"),
    ("LKO-STECH","Masy cząsteczkowe i stechiometria z nadmiarem (LKO etap II)","szkic 2026-10-13, bez audytu W1"),
    ("LKO-DOSW","Katalog doświadczeń: schemat opisu, obserwacja vs wniosek, matryce (LKO I–II)","szkic 2026-10-13, bez audytu W1"),
    ("N06","Wodorki: wodór, amoniak, HCl, H₂S (LKO II rozsz. 1)","szkic 2026-10-13, W1 + W2"),
]:
    out.append(f"| {kod} | {co} | {st} |")
for k in range(0,11):
    out.append(f"| RT{k:02d} | Powtórka tematyczna (szkic w `plany/audyty/W1_perplexity_REV00-REV10_2026-10-09.md`) | do zrobienia |")
# --- stan plików: rozmiar md/HTML, wersja, grafiki, samodzielność ---
def stan_pliku(md_rel):
    md=R+md_rel
    base=os.path.basename(md_rel)
    html=R+"chemia/html/"+base.replace(".md",".html")
    txt=open(md,encoding="utf-8").read()
    stan=re.search(r"^stan:\s*(.+)$",txt,re.M)
    stan=stan.group(1).strip().strip('"') if stan else "—"
    stan=stan.split(" — ")[0] if stan.startswith("GOTOWE") is False and " — " in stan else stan
    graf=len(re.findall(r"^(@model|@zlewka|@viz)\b|^!\[|<svg\b",txt,re.M))
    body=re.split(r"^## (?:Źródła|Zrodla|LOG|AUDYT)",txt,flags=re.M)[0]
    body=re.sub(r"^zrodla:.*$","",body,flags=re.M)
    zal=sorted(set(re.findall(r"\bLAB\d{2}\b|szablon/[\w./-]+|pomiar\w*/[\w./-]+",body)))
    samo="tak" if not zal else "wymaga: "+", ".join(zal[:4])
    kb_md=os.path.getsize(md)/1024
    kb_html=os.path.getsize(html)/1024 if os.path.exists(html) else None
    return kb_md,kb_html,stan,graf,samo
out.append("## Stan plików: rozmiar, wersja, grafiki, samodzielność\n")
out.append("Kolumny: kod, plik md (KB), HTML (KB, z `chemia/html/`), wersja (`stan:` z frontmatter), liczba grafik (`@model`, `@zlewka`, `@viz`, obrazy, SVG w md), samodzielność (`tak` = nie odwołuje się do innych plików repo ani do LAB ani do szablonów (sekcje źródeł i logów pominięte); inaczej wymienione zależności). Rozmiary generowane z dysku przy budowie spisu.\n")
out.append("| Kod | MD (KB) | HTML (KB) | Wersja | Grafiki | Samodzielna | Plik |")
out.append("|---|---|---|---|---|---|---|")
for b,_ in blocks:
    for kod,rec in rows.get(b,[]):
        fl=files.get(kod,[])
        if not fl:
            out.append(f"| {kod} | — | — | brak pliku | — | — | — |")
            continue
        for rel in fl:
            kmd,khtml,stan,graf,samo=stan_pliku(rel)
            hs=f"{khtml:.0f}" if khtml is not None else "—"
            out.append(f"| {kod} | {kmd:.1f} | {hs} | {stan} | {graf} | {samo} | {os.path.basename(rel)} |")
out.append("")
gora=open(R+"chemia/plany/narzedzia/f00_gora.md",encoding="utf-8").read().rstrip()+"\n\n"
dol=open(R+"chemia/plany/narzedzia/f00_dol.md",encoding="utf-8").read().rstrip()+"\n"
open(R+"chemia/lekcje_md/F/CHE.01.F00.wspolne_bloku_F.md.tmp","w",encoding="utf-8").write(gora+"\n".join(out)+"\n\n"+dol)
print(sum(len(v) for v in rows.values()), {k:len(v) for k,v in rows.items()})
