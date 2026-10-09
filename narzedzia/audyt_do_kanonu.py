"""Dopisuje audyt W1 (odpowiedź Perplexity) do materiału kanonu chemii i rejestru WERYFIKACJA.md.

Użycie:
  python3 narzedzia/audyt_do_kanonu.py <odpowiedź.md|txt> [opcje]
Opcje (można powtarzać):
  --uwaga KOD "tekst"        notka przy scalaniu (np. błąd w kluczu odpowiedzi)
  --plik KOD sciezka         plik docelowy (względem chemia/lekcje_md/), gdy KOD z audytu nie pasuje do nazwy pliku;
                             nieistniejący plik zostanie utworzony jako „materiał wstępny z audytu”
  --kanon KOD KOD_KANONU     kod lekcji w spisie kanonu (gdy Perplexity numerował inaczej)
  --pomin KOD                pomiń (np. lekcja gotowa — poprawki wprowadza się ręcznie w treści)

Działanie: dzieli odpowiedź po nagłówkach „# KOD. Tytuł”, zapisuje ją surowo do chemia/plany/audyty/,
zamienia LaTeX na Unicode (latex2uni), dopisuje JEDNĄ sekcję „## AUDYT W1 …” na plik docelowy
(kilka lekcji w jednym pliku → podsekcje), końcówkę „# Powtórka/Najważniejsze/Poprawki wspólne …”
dołącza do ostatniej lekcji, dopisuje wiersze do WERYFIKACJA.md.
"""
import datetime, glob, os, re, shutil, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from latex2uni import conv

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KANON = os.path.join(REPO, "chemia", "lekcje_md")
DZIS = datetime.date.today().isoformat()


def main(src, uwagi, pliki, kanon, pomin):
    s = open(src, encoding="utf-8").read()
    parts = re.split(r"^# ([A-Z]+\d+)\. (.*)$", s, flags=re.M)
    lekcje = [(parts[i], parts[i + 1].strip(), parts[i + 2]) for i in range(1, len(parts), 3)]
    kody = [k for k, _, _ in lekcje]
    raw = f"chemia/plany/audyty/W1_perplexity_{kody[0]}-{kody[-1]}_{DZIS}.md"
    shutil.copy(src, os.path.join(REPO, raw))
    cele = {}  # plik → [(kod, tytuł, treść)]
    for n, (k, t, body) in enumerate(lekcje):
        m = re.search(r"^# (Powtórka|Najważniejsze|Poprawki wspólne).*$", body, flags=re.M)
        if m:
            ogon = body[m.start():]
            body = body[:m.start()] + ("\n" + ogon if n == len(lekcje) - 1 else "")
        if k in pomin:
            print("pominięto", k); continue
        body = conv(body.strip().strip("*").strip())
        if k in pliki:
            f = os.path.join(KANON, pliki[k])
        else:
            g = glob.glob(os.path.join(KANON, f"*/CHE.*.{k}.*.md"))
            if not g:
                print("BRAK pliku kanonu dla", k, "— użyj --plik"); continue
            f = g[0]
        cele.setdefault(f, []).append((k, t, body))
    wiersze = []
    for f, lst in cele.items():
        nowy = not os.path.exists(f)
        tekst = "" if nowy else open(f, encoding="utf-8").read()
        if "## AUDYT W1" in tekst:
            print("już jest:", os.path.relpath(f, REPO)); continue
        if nowy:
            kk = "; ".join(kanon.get(k, k) for k, _, _ in lst)
            tekst = (f'---\nkod: "{kk}"\ntytul: "{" · ".join(t for _, t, _ in lst)}"\n'
                     f'opis: "Materiał wstępny z audytu W1 (Perplexity, {DZIS}) — w kanonie nie było treści tych lekcji; do weryfikacji przed budową lekcji."\n---\n'
                     f"# {' · '.join(t for _, t, _ in lst)} — materiał wstępny\n")
        sekcja = f"\n\n## AUDYT W1 — Perplexity, {DZIS} (poprawki i uzupełnienia do wprowadzenia przy budowie lekcji)\n\n> Źródło: `{raw}`. Weryfikacja treści wysłanego zapisu, nie zakresu.\n"
        for k, t, body in lst:
            b = re.sub(r"^(#{1,4}) ", lambda x: "#" * (len(x.group(1)) + 2) + " ", body, flags=re.M)
            kk = kanon.get(k, k)
            sekcja += f"\n### {kk} — {t}" + (f" (w audycie: {k})" if kk != k else "") + "\n"
            if k in uwagi:
                sekcja += f"\n> Uwaga przy scalaniu: {uwagi[k]}\n"
            sekcja += "\n" + b + "\n"
            stan = ("materiał wstępny z audytu (w kanonie brak treści) — zweryfikować przed budową lekcji" if nowy else
                    "dopisane do kanonu jako sekcja „AUDYT W1” — wprowadzić przy budowie lekcji gotowej")
            rel = os.path.relpath(f, REPO)
            wiersze.append(f"| chemia | {kk} | {t} | {DZIS} | {stan} (`{rel}`) | `{raw}`" + (f" (w audycie jako {k})" if kk != k else "") + " | — |")
        open(f, "w", encoding="utf-8").write(tekst.rstrip("\n") + sekcja)
        print("ok", os.path.relpath(f, REPO), [k for k, _, _ in lst])
    rej = os.path.join(REPO, "WERYFIKACJA.md")
    r = open(rej, encoding="utf-8").read().rstrip("\n")
    open(rej, "w", encoding="utf-8").write(r + "\n" + "\n".join(wiersze) + "\n")


if __name__ == "__main__":
    a = sys.argv[1:]; uw, pl, ka, po = {}, {}, {}, set()
    i = 1
    src = a[0]
    while i < len(a):
        o = a[i]
        if o == "--uwaga": uw[a[i + 1]] = a[i + 2]; i += 3
        elif o == "--plik": pl[a[i + 1]] = a[i + 2]; i += 3
        elif o == "--kanon": ka[a[i + 1]] = a[i + 2]; i += 3
        elif o == "--pomin": po.add(a[i + 1]); i += 2
        else: raise SystemExit("nieznana opcja: " + o)
    main(src, uw, pl, ka, po)
