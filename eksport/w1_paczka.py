"""Paczka do weryfikacji W1 (treść) lekcji kanonu chemii, które jeszcze jej nie przeszły.

Użycie (z katalogu repo):
  python3 eksport/w1_paczka.py                 # lekcje z „W1 nieprzeprowadzony” w polu stan:
  python3 eksport/w1_paczka.py --max 120000    # limit znaków na plik (domyślnie 120 000)
Wynik: eksport/out/W1_CHEMIA_<n>.md — prompt + lekcje, podział po blokach (J, N, R, O, E, K, A…).
Odpowiedź wgrywać: python3 narzedzia/audyt_do_kanonu.py <odpowiedź> (format nagłówków „# KOD. Tytuł”).
Sekcje „MATERIAŁ ŹRÓDŁOWY…” i „AUDYT…” są pomijane (historia, już sprawdzona).
"""
import datetime, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "eksport" / "out"
DZIS = datetime.date.today().isoformat()
ZNAK = "W1 nieprzeprowadzony"

PROMPT = """# WERYFIKACJA W1 — chemia, treść lekcji (część {nr}/{razem})

> Skopiuj tę sekcję jako polecenie, a cały plik dołącz jako załącznik.

**Rola:** Jesteś nauczycielem chemii i egzaminatorem (E8 i matura rozszerzona). Sprawdzasz **poprawność merytoryczną** lekcji napisanych przez model językowy dla ucznia klasy 8 (poziom E8 + warstwa LO/extra). Zakresu i układu nie oceniaj — tylko treść.

**Sprawdź w każdej lekcji:**
1. Równania reakcji — bilans atomów i ładunku, stany skupienia, strzałki (→ / ⇌), poprawność produktów.
2. Dane liczbowe (Ka, Kb, Ksp, E°, Vₘ, ΔH, okresy półtrwania, pH itp.) — porównaj z tablicami (CKE „Wybrane wzory i stałe fizykochemiczne”, podręczniki); podaj poprawną wartość i źródło.
3. Definicje i reguły — błędne lub nieprecyzyjne sformułowania, sprzeczne z podstawą programową.
4. Klucze odpowiedzi do ćwiczeń i testów — czy są poprawne i kompletne (pokaż rachunek).
5. Bezpieczeństwo — doświadczenia niebezpieczne muszą być pokazem nauczyciela; żadnego wąchania jako metody identyfikacji.
6. Poziom — co przekracza E8 i nie jest oznaczone jako LO / extra.

**Format odpowiedzi (ważne — odpowiedź wgrywa skrypt):** dla każdej lekcji osobny nagłówek pierwszego stopnia dokładnie w postaci
`# KOD. Tytuł` (np. `# J07. Ka, Kb i Kw`), pod nim lista: `cytat (krótki) → poprawka → źródło`. Gdy brak błędów: „Bez uwag merytorycznych.” Na końcu `# Poprawki wspólne` (błędy powtarzające się w wielu lekcjach). Wzory i jednostki zwykłym tekstem/Unicode, bez LaTeX. Pisz po polsku.

---

## Lekcje w tej części

{spis}

---
"""


def lekcje():
    for p in sorted((ROOT / "chemia" / "lekcje_md").glob("*/*.md")):
        t = p.read_text(encoding="utf-8")
        m = re.search(r"^stan:.*$", t, re.M)
        if not (m and ZNAK in m.group(0)):
            continue
        kod = re.search(r'^kod:\s*"?([^"\n]+)"?', t, re.M)
        tyt = re.search(r'^tytul:\s*"?([^"\n]+)"?', t, re.M)
        body = re.sub(r"^---\n.*?\n---\n", "", t, count=1, flags=re.S)
        body = re.split(r"^## (MATERIAŁ ŹRÓDŁOWY|AUDYT)", body, maxsplit=1, flags=re.M)[0]
        body = re.sub(r"^(#{1,5}) ", lambda x: "#" + x.group(1) + " ", body.strip(), flags=re.M)
        yield (kod.group(1) if kod else p.stem.split(".")[2]), (tyt.group(1) if tyt else p.stem), body, p.relative_to(ROOT)


def main():
    mx = int(sys.argv[sys.argv.index("--max") + 1]) if "--max" in sys.argv else 120000
    les = list(lekcje())
    czesci, cur, rozm = [], [], 0
    for x in les:
        if cur and (rozm + len(x[2]) > mx or x[0][0] != cur[-1][0][0] and rozm > mx * 0.6):
            czesci.append(cur); cur, rozm = [], 0
        cur.append(x); rozm += len(x[2])
    if cur:
        czesci.append(cur)
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob("W1_CHEMIA_*.md"):
        old.unlink()
    for i, cz in enumerate(czesci, 1):
        spis = "\n".join(f"- **{k}** — {t}  _(plik: `{z}`)_" for k, t, _, z in cz)
        parts = [PROMPT.format(nr=i, razem=len(czesci), spis=spis)]
        parts += [f"\n\n## {k} — {t}\n\n_Plik: `{z}`_\n\n{b}\n" for k, t, b, z in cz]
        parts.append(f"\n\n---\n_Wygenerowano {DZIS} skryptem eksport/w1_paczka.py._\n")
        f = OUT / f"W1_CHEMIA_{i}.md"
        f.write_text("".join(parts), encoding="utf-8")
        print(f"{f.relative_to(ROOT)}: {len(cz)} lekcji, {f.stat().st_size // 1024} KB — {cz[0][0]}…{cz[-1][0]}")


if __name__ == "__main__":
    main()
