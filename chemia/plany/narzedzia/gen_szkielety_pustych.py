# Tworzy szkielety md dla lekcji kanonu, które nie mają jeszcze pliku (stan: PUSTY).
# Uruchamiać ponownie jest bezpieczne: nie nadpisuje istniejących plików.
import re, os, unicodedata
R="/home/claude/repo_edukacyjny_e8/"
src=open(R+"chemia/plany/CHE_SPIS_TRESCI.md",encoding="utf-8").read().split("\n")
sys_path=R+"chemia/plany/narzedzia/gen_f00.py"
ex=open(sys_path,encoding="utf-8").read()
# bierzemy kody_z_nazwy z gen_f00 bez uruchamiania reszty skryptu
ns={}
exec(ex[ex.index("def kody_z_nazwy"):ex.index("# materiał (plik md) per kod")],{"re":re},ns)
kody_z_nazwy=ns["kody_z_nazwy"]
have=set()
for d,_,fs in os.walk(R+"chemia/lekcje_md"):
    for f in fs:
        m=re.match(r"CHE\.\d\d\.([A-Z0-9+\-]+)\.",f)
        if m: have.update(kody_z_nazwy(m.group(1)))
BLOK_NR={"N":"02","A":"08","P":"01"}
DIR={"N":"N","A":"A","P":"P"}
def slug(t):
    t=unicodedata.normalize("NFKD",t.lower()).encode("ascii","ignore").decode()
    t=re.sub(r"[^a-z0-9]+","_",t).strip("_")
    return t[:48]
created=[]
for ln_i,ln in enumerate(src):
    m=re.match(r"^#### ([A-Z]\d\d) — (.+)$",ln)
    if not m: continue
    kod,tytul=m.group(1),m.group(2).strip()
    if kod[0] not in BLOK_NR or kod in have: continue
    cel=wym=pog=""
    for j in range(ln_i+1,min(ln_i+25,len(src))):
        t=src[j]
        if t.startswith("#### ") or t.startswith("## "): break
        if t.startswith("**Cel:**") and not cel: cel=t.replace("**Cel:**","").strip()
        mm=re.match(r'^wymaga:\s*"?([^"]*)"?\s*$',t)
        if mm and not wym: wym=mm.group(1).strip()
        mm=re.match(r'^poglebia:\s*"?([^"]*)"?\s*$',t)
        if mm and not pog: pog=mm.group(1).strip()
    fn=f"CHE.{BLOK_NR[kod[0]]}.{kod}.{slug(tytul)}.md"
    dr=R+f"chemia/lekcje_md/{DIR[kod[0]]}/"
    os.makedirs(dr,exist_ok=True)
    path=dr+fn
    if os.path.exists(path): continue
    body=f'''---
kod: {kod}
tytul: "{tytul}"
poziom: E8
wymaga: "{wym or "—"}"
poglebia: "{pog or "—"}"
zrodla: "kanon chemia/plany/CHE_SPIS_TRESCI.md (zakres i wymagania); materiał źródłowy nie istnieje — lekcja do napisania od zera"
opis: "{cel or tytul}"
stan: PUSTY — szkielet z kanonu, do napisania od zera (nie W1)
---

# CHE.{kod} — {tytul}

**Lead:** {cel or "(do uzupełnienia)"}

## Cele

- (do uzupełnienia przy pisaniu lekcji)

## Pytanie przewodnie

(do uzupełnienia)

## Pojęcia i oznaczenia

(do uzupełnienia — każdy termin i symbol wyjaśniony od zera)

## Wykład 1 — {tytul}

(do napisania: wykład od zera, 300–600 słów)

## Źródła

- (do uzupełnienia: co najmniej 2 źródła, np. CKE/ZPE oraz Khan Academy, OpenStax, Wikipedia)

## LOG ZMIAN — szkielet

Szkielet utworzony automatycznie z kanonu (`gen_szkielety_pustych.py`). Brak treści merytorycznej. Lekcja nie przechodzi limitów ani W1.
'''
    open(path,"w",encoding="utf-8").write(body)
    created.append(os.path.relpath(path,R))
print(len(created)); print("\n".join(created))
