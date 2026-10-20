"""Buduje wizualizacje-projekty/baza-mala/ — kopię klocków, gfx, tablic i bibliotek przedmiotowych
oraz KATALOG_KLOCKOW.md (spis, który zewnętrzny model może przeczytać bez dostępu do silnika).

Duża baza zostaje na miejscu (jest źródłem buildu). Ten skrypt tylko kopiuje — nie przenosi.
Uruchom z korzenia repo:  python3 wizualizacje-projekty/narzedzia/zbuduj_baze_mala.py
"""
import json, shutil
from datetime import date
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
OUT = REPO / "wizualizacje-projekty" / "baza-mala"
CHE = REPO / "chemia" / "che-modular"
BIO = REPO / "biologia" / "bio"
POL = REPO / "polski" / "szablon"

# (źródło, cel w baza-mala/)
KOPIE = [
    (CHE / "engine" / "src" / "klocki", "klocki"),
    (CHE / "engine" / "src" / "lite", "klocki/lite"),
    (CHE / "engine" / "src" / "gfx", "gfx"),
    (CHE / "engine" / "src" / "dane", "tablice"),
    (CHE / "engine" / "src" / "lekcja" / "rozszerzenia.js", "biblioteki/chemia/rozszerzenia.js"),
    (CHE / "KATALOG_MODELI.md", "biblioteki/chemia/KATALOG_MODELI.md"),
    (POL / "pol-viz.js", "biblioteki/polski/pol-viz.js"),
    (POL / "POL_KATALOG_GRAFIK.md", "biblioteki/polski/POL_KATALOG_GRAFIK.md"),
    (BIO / "szablon" / "wizualizacje", "biblioteki/biologia/wizualizacje"),
    (BIO / "BIO_KATALOG.md", "biblioteki/biologia/BIO_KATALOG.md"),
]


# pliki pisane ręcznie — generator ich nie kasuje
RECZNE = ["README.md", "BRAKI_WIZUALIZACJI.md"]


def kopiuj():
    zachowane = {n: (OUT / n).read_bytes() for n in RECZNE if (OUT / n).exists()}
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    for n, tresc in zachowane.items():
        (OUT / n).write_bytes(tresc)
    for src, cel in KOPIE:
        dst = OUT / cel
        dst.parent.mkdir(parents=True, exist_ok=True)
        if src.is_dir():
            shutil.copytree(src, dst)
        else:
            shutil.copy2(src, dst)


def rozmiar(p):
    return sum(f.stat().st_size for f in p.rglob("*") if f.is_file()) if p.is_dir() else p.stat().st_size


def tabele(plik, prefiks=("|",)):
    """Wiersze tabel z katalogu (bez nagłówków i separatorów |---|)."""
    out = []
    for l in plik.read_text(encoding="utf-8").splitlines():
        if l.startswith(prefiks) and not l.startswith("|---") and not l.startswith("| ---"):
            out.append(l)
    return out


def katalog():
    dzis = date.today().isoformat()
    L = [
        "# Katalog klocków — baza mała E8",
        "",
        f"Wygenerowano: {dzis} przez `wizualizacje-projekty/narzedzia/zbuduj_baze_mala.py`. **Nie edytować ręcznie** — źródłem jest duża baza (`chemia/che-modular/engine`, `biologia/bio`, `polski/szablon`).",
        "",
        "Ta paczka zawiera kopie tego, co już działa w lekcjach. Zewnętrzny model może z niej wziąć gotowy element zamiast budować go od zera. Spis braków: `BRAKI_WIZUALIZACJI.md`.",
        "",
        "## 1. Mapa paczki",
        "",
        "| Folder | Zawartość | Rozmiar |",
        "|---|---|---|",
    ]
    for _, cel in KOPIE:
        p = OUT / cel
        if p.exists():
            L.append(f"| `{cel}` | {'kopia folderu' if p.is_dir() else 'kopia pliku'} | {rozmiar(p)//1024} KB |")
    L += ["", "## 2. Klocki laboratoryjne (`klocki/`) — mała baza", ""]
    man = json.loads((OUT / "klocki" / "manifest.json").read_text(encoding="utf-8"))
    L += ["| Plik | Co zawiera |", "|---|---|"]
    for f, opis in man["klocki"].items():
        L.append(f"| `{f}` | {opis} |")
    L += ["", "Lekcje i pliki, które wymieniają (`manifest.json` → `lekcje`):", ""]
    for lek, pliki in man["lekcje"].items():
        L.append(f"- **{lek}**: " + ", ".join(f"`{p}`" for p in pliki))
    L += ["", "Lekkie silniki (`klocki/lite/`): `che-lite.js` (rejestr modeli), `rx-lite.js` (naczynia SVG), `stech-lite.js` (kalkulator stechiometryczny), `lab-dane.json` (dane zlewek).", ""]

    L += ["## 3. Modele chemii (`biblioteki/chemia/`)", "",
          "Pełna tabela z `KATALOG_MODELI.md` (id, tytuł w silniku, lekcje). Model wywołuje się w md: `@model <id> | Tytuł | opis`.", ""]
    L += tabele(OUT / "biblioteki" / "chemia" / "KATALOG_MODELI.md")
    L += ["", "Sceny i naczynia GFX (`gfx/`): pełny spis w `gfx/KATALOG.md`, indeks maszynowy w `gfx/index.json`. Sceny laboratoryjne mają prefiks `gfx-scene-`.", ""]

    L += ["## 4. Biologia (`biblioteki/biologia/`)", "",
          "Każda grafika to osobny plik `wizualizacje/<id>.js`. Spis z `BIO_KATALOG.md`:", ""]
    L += tabele(OUT / "biblioteki" / "biologia" / "BIO_KATALOG.md")
    L += ["", "## 5. Polski (`biblioteki/polski/`)", "",
          "Spis z `POL_KATALOG_GRAFIK.md`. Nowa grafika: `POL.define('id', {opis, mount(el, opt)})` w `pol-viz.js`.", ""]
    L += tabele(OUT / "biblioteki" / "polski" / "POL_KATALOG_GRAFIK.md")
    L += ["", "## 6. Tablice danych (`tablice/`)", "",
          "Zbiory JSON z danymi referencyjnymi (pierwiastki, substancje, reakcje, rozpuszczalność itd.). Indeks z flagami i sumami kontrolnymi: `tablice/_indeks.json`.", "",
          "| Plik | KB |", "|---|---|"]
    for f in sorted((OUT / "tablice").glob("*.json")):
        L.append(f"| `{f.name}` | {f.stat().st_size//1024} |")
    L += ["", "## 7. Gfx — liczba wpisów", ""]
    idx = json.loads((OUT / "gfx" / "index.json").read_text(encoding="utf-8"))
    wpisy = [w for v in idx.values() if isinstance(v, list) for w in v]
    L.append(f"Wpisów w `gfx/index.json`: **{len(wpisy)}**. Podział: " + ", ".join(
        f"{k} {sum(1 for w in wpisy if w.get('subject') == k)}" for k in sorted({w.get('subject', '?') for w in wpisy})) + ".")
    L.append("")
    return "\n".join(L)


def main():
    kopiuj()
    (OUT / "KATALOG_KLOCKOW.md").write_text(katalog(), encoding="utf-8")
    import subprocess, sys
    subprocess.run([sys.executable, str(Path(__file__).with_name("uzycia_wizualizacji.py"))], check=True)
    n = sum(1 for f in OUT.rglob("*") if f.is_file())
    print("pliki w baza-mala:", n, "rozmiar KB:", rozmiar(OUT) // 1024)


if __name__ == "__main__":
    main()
