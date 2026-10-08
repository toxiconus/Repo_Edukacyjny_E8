#!/usr/bin/env python3
"""mapa_chemia.py — tematy chemii z OLIMPIADA_8_MASTER (§58.2–58.10) ↔ lekcje kanonu CHE v0.3 i pliki w repo.
Generuje sekcję „Chemia” w olimpiada/MAPA_WSPOLNYCH.md (między znacznikami). Uruchom z katalogu głównego repo:
    python3 olimpiada/narzedzia/mapa_chemia.py
Przypisania edytuj w słowniku M (niżej); tytuły i poziomy lekcji bierze z chemia/plany/narzedzia/kanon_dane.py,
a status z istnienia pliku w chemia/che-modular/lessons-md/gotowe/."""
import re, sys
from pathlib import Path

R = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(R / "chemia/plany/narzedzia"))
import kanon_dane as K  # noqa: E402

KAN = {d["kod"]: d for d in K.L}
GOT = R / "chemia/che-modular/lessons-md/gotowe"
# pliki gotowe nazwane jeszcze wg kanonu v0.1 (N01…N05 → v0.3 N02…N06; przemianowanie czeka na decyzję użytkownika)
STARE = {"N02": "N01_tlenki.md", "N03": "N02_wodorotlenki.md", "N04": "N03_kwasy.md", "N05": "N04_sole.md", "N06": "N05_wodorki.md"}

# ID MASTER → (lekcje kanonu, uwaga). Pusta lista = brak miejsca w kanonie (decyzja: sekcja w lekcji albo jednostka olimpijska).
M = {
    1: ("F01", ""), 2: ("F01 F16", ""), 3: ("F02", ""), 4: ("F02 F03", ""), 5: ("F02", ""), 6: ("F02 F03", ""), 7: ("F03", ""),
    8: ("F01", "piktogramy i BHP w F01; praktyka w F18/F19"), 9: ("F01 F12", ""), 10: ("F18", "„dossier substancji” = czytanie informacji chemicznej"),
    11: ("F04", ""), 12: ("F04", ""), 13: ("F04", ""), 14: ("F05", ""), 15: ("F05", ""), 16: ("F05 F10", ""), 17: ("F04 F07", ""),
    18: ("F07", ""), 19: ("F07", ""), 20: ("F07 F08", ""), 21: ("F06", ""), 22: ("F06", ""), 23: ("F06", ""), 24: ("F08 P06", "trendy: F08 (E8+LO), pełne P06 (LO)"),
    25: ("F08 P06", "rdzeń olimpijski: przewidywanie z położenia"),
    26: ("F10 F11", ""), 27: ("F10 F11", ""), 28: ("F11 F15", ""), 29: ("F11 F15", ""), 30: ("F11", ""), 31: ("F12", ""), 32: ("F12", ""),
    33: ("F13", ""), 34: ("F12", "cząsteczka a jednostka wzoru (kryształ jonowy) — sprawdzić, czy F12 to ma"), 35: ("F15", ""), 36: ("F14", "kanon: LO — dla olimpiady poziom 2"),
    37: ("F14", "kanon: LO"), 38: ("F15 F18", "budowa→właściwość — warstwa olimpijska"),
    39: ("F16", ""), 40: ("F16 F17", ""), 41: ("F16", ""), 42: ("F17", ""), 43: ("F17", ""), 44: ("F17", ""), 45: ("F17 F19", ""), 46: ("F17", ""), 47: ("F17", ""),
    48: ("F17", ""), 49: ("N04 J03", "zobojętnianie: kwasy + reakcje jonowe"), 50: ("J04", ""), 51: ("N04 X04", ""), 52: ("N03 X04", ""), 53: ("N02", ""), 54: ("X04", ""),
    55: ("X01", "kanon: LO — w olimpiadzie poziom 2"), 56: ("F09 X01", ""), 57: ("X03", "kanon: LO"), 58: ("N08 F19", "+ jednostka olimpijska (zadania wieloetapowe)"),
    59: ("N02", ""), 60: ("N02", ""), 61: ("N02", ""), 62: ("N04", ""), 63: ("N04", ""), 64: ("N04", ""), 65: ("N03", ""), 66: ("N05", ""), 67: ("N05 N07", ""),
    68: ("N05 N08", ""), 69: ("J11", ""), 70: ("N08", ""), 71: ("N08", "+ jednostka olimpijska (łańcuchy reakcji)"),
    72: ("R01", ""), 73: ("R01", ""), 74: ("R02", ""), 75: ("R01", ""), 76: ("R03", ""), 77: ("R03", ""), 78: ("R03", ""), 79: ("R03", ""), 80: ("R03", ""), 81: ("R03", ""),
    82: ("R02", ""), 83: ("R02", ""), 84: ("R04", "kanon: LO, MASTER: A+ — mol musi zejść do E8+/poziomu 2"), 85: ("R04", "jak wyżej"), 86: ("R04", "kanon: LO"),
    87: ("R04", "kanon: LO"), 88: ("R06", "kanon: LO"), 89: ("R07", "kanon: LO, MASTER: A+ — kluczowa luka E8 ↔ olimpiada"), 90: ("R07 R08 R09", "kanon: LO"),
    91: ("J02", ""), 92: ("J01 J02", ""), 93: ("J01 J02", ""), 94: ("N03 J02", ""), 95: ("J02", ""), 96: ("J03", ""), 97: ("K01", ""), 98: ("K01", ""),
    99: ("O06", "spalanie ogólne: brak lekcji ogólnej — dziś tylko spalanie węglowodorów (O06)"), 100: ("O06", "warunki spalania (trójkąt spalania) — brak w kanonie, dopisać"),
    101: ("", "płomień i dopływ powietrza — brak w kanonie"), 102: ("K04 K05", "K04 kanon: LO"), 103: ("K05", ""), 104: ("K07", ""), 105: ("K08 K09 K10", "kanon: LO; MASTER: C/O"),
    106: ("O01", ""), 107: ("O02 O04 O05", ""), 108: ("O02", ""), 109: ("O04", ""), 110: ("O08", ""), 111: ("O11", ""), 112: ("O12", ""), 113: ("O21", ""),
    114: ("O15 O16 O17", ""), 115: ("O13", ""), 116: ("O19 O20", ""), 117: ("O18", ""), 118: ("", "DNA/RNA chemicznie — brak w kanonie; wspólna z BIO-031/032"),
    119: ("K07 O19", "enzymy chemicznie — wspólna z BIO-029"),
    120: ("F01 J12", "sprzęt laboratoryjny — brak osobnej lekcji"), 121: ("F01 A06", ""), 122: ("F01 F16", "planowanie doświadczenia"), 123: ("", "próba kontrolna — brak w kanonie (wspólna z BIO-004)"),
    124: ("F16", ""), 125: ("F16 F19", ""), 126: ("J11 F18", ""), 127: ("J04 J11", ""), 128: ("", "analiza tabel/wykresów — wspólna z OLI-06/07"),
    129: ("", "jednostka olimpijska"), 130: ("F21", "+ jednostka olimpijska"), 131: ("", "jednostka olimpijska (archiwum)"), 132: ("", "jednostka olimpijska (archiwum)"),
    133: ("", "symulacja konkursu (olimpiada/)"),
}


def plik(kod):
    if kod in STARE and (GOT / STARE[kod]).exists():
        return STARE[kod]
    f = sorted(GOT.glob(kod + "_*.md"))
    return f[0].name if f else ""


def main():
    master = (R / "olimpiada/OLIMPIADA_8_MASTER.md").read_text(encoding="utf-8")
    blok = master[master.index("## 58.2 CHEMIA"):master.index("## 58.11 BIOLOGIA")]
    out, licz = [], {"[~]": 0, "[ ]": 0, "[!]": 0}
    out.append("| ID | temat (MASTER) | prio | lekcje kanonu CHE v0.3 | plik w repo | brakuje | status | uwaga |")
    out.append("|---|---|---|---|---|---|---|---|")
    dzial = ""
    for line in blok.splitlines():
        if line.startswith("## 58."):
            dzial = line.split("—", 1)[-1].strip()
            out.append(f"| | **{dzial}** | | | | | | |")
            continue
        m = re.match(r"- CHEM-(\d{3}) (.+?) — (.+)$", line)
        if not m:
            continue
        n, temat, prio = int(m.group(1)), m.group(2), m.group(3).strip()
        kody, uw = M.get(n, ("", "BRAK PRZYPISANIA"))
        kody = kody.split()
        pliki = [p for p in (plik(k) for k in kody) if p]
        lek = ", ".join(f"{k} {KAN[k]['tytul']} ({KAN[k]['poziom']})" for k in kody if k in KAN)
        if not kody:
            st, brak = "[!]", "miejsce w kursie"
        elif pliki:
            st, brak = "[~]", "poziomy 2–4"
        else:
            st, brak = "[ ]", "lekcja E8 + poziomy 2–4"
        licz[st] += 1
        out.append(f"| CHEM-{n:03d} | {temat} | {prio} | {lek or '—'} | {', '.join(pliki) or '—'} | {brak} | {st} | {uw} |")
    head = (f"Stan: **{licz['[~]']}** tematów ma gotową lekcję E8 (brak warstw 2–4), **{licz['[ ]']}** czeka na lekcję z kanonu, "
            f"**{licz['[!]']}** nie ma miejsca w kanonie (do decyzji: sekcja w lekcji albo jednostka olimpijska).\n"
            "Generowane: `python3 olimpiada/narzedzia/mapa_chemia.py` (przypisania w słowniku M).\n")
    sekcja = "<!-- CHEMIA:START -->\n" + head + "\n" + "\n".join(out) + "\n<!-- CHEMIA:END -->"
    p = R / "olimpiada/MAPA_WSPOLNYCH.md"
    s = p.read_text(encoding="utf-8")
    if "<!-- CHEMIA:START -->" in s:
        s = re.sub(r"<!-- CHEMIA:START -->.*?<!-- CHEMIA:END -->", lambda _: sekcja, s, flags=re.S)
    else:
        a = "## Chemia\n"
        i = s.index(a) + len(a)
        j = s.index("## Biologia")
        s = s[:i] + sekcja + "\n\n" + s[j:]
    p.write_text(s, encoding="utf-8")
    print("→ olimpiada/MAPA_WSPOLNYCH.md (chemia):", licz)


if __name__ == "__main__":
    main()
