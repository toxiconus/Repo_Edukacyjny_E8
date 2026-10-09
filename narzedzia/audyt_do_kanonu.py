"""Dopisuje audyt W1 (odpowiedź Perplexity) do materiału kanonu chemii i rejestru WERYFIKACJA.md.

Użycie: python3 narzedzia/audyt_do_kanonu.py <audyt.md|txt> [--uwaga KOD "tekst"]...
- dzieli odpowiedź po nagłówkach „# KOD. Tytuł” (np. # F15. Polarność…),
- zapisuje surową odpowiedź do chemia/plany/audyty/W1_perplexity_<KODY>_<data>.md,
- LaTeX → Unicode (latex2uni), nagłówki o poziom niżej,
- dopisuje sekcję „## AUDYT W1 …” na końcu chemia/lekcje_md/*/CHE.*.<KOD>.*.md (pomija, jeśli już jest),
- końcówkę „# Powtórka …” / „# Najważniejsze …” dołącza do ostatniej lekcji,
- dopisuje wiersze do WERYFIKACJA.md.
Lekcje z lessons-md/gotowe poprawia się ręcznie w treści (nie tym skryptem).
"""
import datetime, glob, os, re, shutil, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from latex2uni import conv

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DZIS = datetime.date.today().isoformat()

def main(src, uwagi):
    s = open(src, encoding="utf-8").read()
    parts = re.split(r"^# ([A-Z]+\d+)\. (.*)$", s, flags=re.M)
    lekcje = [(parts[i], parts[i + 1].strip(), parts[i + 2]) for i in range(1, len(parts), 3)]
    kody = [k for k, _, _ in lekcje]
    raw = f"chemia/plany/audyty/W1_perplexity_{kody[0]}-{kody[-1]}_{DZIS}.md"
    shutil.copy(src, os.path.join(REPO, raw))
    wiersze = []
    for n, (k, t, body) in enumerate(lekcje):
        m = re.search(r"^# (Powtórka|Najważniejsze).*$", body, flags=re.M)
        if m:
            ogon = body[m.start():]
            body = body[:m.start()] + ("\n" + ogon if n == len(lekcje) - 1 else "")
        body = conv(body.strip().strip("*").strip())
        body = re.sub(r"^(#{1,5}) ", lambda x: "#" * (len(x.group(1)) + 1) + " ", body, flags=re.M)
        f = glob.glob(os.path.join(REPO, f"chemia/lekcje_md/*/CHE.*.{k}.*.md"))
        if not f:
            print("BRAK pliku kanonu dla", k); continue
        f = f[0]; tekst = open(f, encoding="utf-8").read()
        if "## AUDYT W1" in tekst:
            print("już jest", k); continue
        u = f"\n> Uwaga przy scalaniu: {uwagi[k]}\n" if k in uwagi else ""
        tekst = tekst.rstrip("\n") + (f"\n\n## AUDYT W1 — Perplexity, {DZIS} (poprawki i uzupełnienia do wprowadzenia przy budowie lekcji)\n\n"
                                       f"> Źródło: `{raw}`. Weryfikacja treści wysłanego zapisu, nie zakresu.\n{u}\n{body}\n")
        open(f, "w", encoding="utf-8").write(tekst)
        rel = os.path.relpath(os.path.dirname(f), REPO)
        wiersze.append(f"| chemia | {k} | {t} | {DZIS} | dopisane do kanonu jako sekcja „AUDYT W1” (`{rel}/`) — wprowadzić przy budowie lekcji gotowej | `{raw}` | — |")
        print("ok", k, len(body))
    rej = os.path.join(REPO, "WERYFIKACJA.md")
    r = open(rej, encoding="utf-8").read().rstrip("\n")
    open(rej, "w", encoding="utf-8").write(r + "\n" + "\n".join(wiersze) + "\n")

if __name__ == "__main__":
    a = sys.argv[1:]; uw = {}
    while "--uwaga" in a:
        i = a.index("--uwaga"); uw[a[i + 1]] = a[i + 2]; del a[i:i + 3]
    main(a[0], uw)
