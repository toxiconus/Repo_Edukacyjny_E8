# Mapa połączeń — gdzie czego szukać

Stan: 2026-10-15. Dokument ręczny; raporty wizualizacji generuje `wizualizacje-projekty/narzedzia/uzycia_wizualizacji.py` (nie edytować ręcznie). Ogólna mapa plików: `MAPA.md`.

## 1. Źródło → build → HTML → indeks

| Przedmiot | Źródło md (to, co edytujemy) | Build | HTML | Indeks i kolejność |
|---|---|---|---|---|
| Chemia | `chemia/lekcje_md/<grupa>/*.md` (93) — także `chemia/che-modular/lessons-md/gotowe/` (81) i `chemia/pakiet/md/` (81) | `narzedzia/zbuduj_wszystkie.py` → `chemia/html/` | `chemia/html/` (94) | `index.html` w kolejności **folderów grup**, nie kanonu |
| Biologia | `biologia/bio/md/*.md` (23) oraz `biologia/md/BIO.*.md` (36) — dwa źródła | `biologia/bio/narzedzia/md2html_bio.py` i `zbuduj_wszystkie.py` | `biologia/html/` (47) | `index.html` z obu źródeł; kolejność wg globów |
| Polski | `polski/lekcje_md/`, `polski/podstawy/`, `polski/do_uzupelnienia/`, `polski/blok_D/lekcje/` | `zbuduj_wszystkie.py` | `polski/html/` (48) | wg kolejności globów |
| Angielski | `angielski/lekcje_md/*.md` | `zbuduj_wszystkie.py` | `angielski/html/` (7) | wg globu |
| Olimpiada / LKO | `olimpiada/do_uzupelnienia/OLI.*.md`; `olimpiada/LKO_pakiet/md/` (19) | `zbuduj_wszystkie.py` / `lekcja_html.py -p oli` | `olimpiada/html/` (11+1), `olimpiada/LKO_pakiet/html/` (19) | wg globu |

**Plany kolejności (kanon):** `chemia/plany/CHE_SPIS_TRESCI.md` (kanon 113 lekcji, generowany), `chemia/PLAN_LEKCJI.md`, `SPIS_WSZYSTKICH.md` (repo). Indeks HTML nie czyta planu — kolejność w indeksie i w planie się różnią.

## 2. Gdzie są wizualizacje

| Co | Gdzie | Uwagi |
|---|---|---|
| Klocki (lekkie, wielokrotnego użytku) | `chemia/che-modular/engine/src/klocki/` + `manifest.json` | opis: `README.md` w tym katalogu; ZIP: `narzedzia/zipuj_przekazanie.py` |
| Silnik lite / sceny i naczynia | `chemia/che-modular/engine/src/gfx/` (`KATALOG.md`, `index.json`) | reakcje, naczynia, efekty, sceny |
| Modele CHE | `chemia/che-modular/KATALOG_MODELI.md`, `wizualizacje-projekty/baza-mala/biblioteki/chemia/KATALOG_MODELI.md` | |
| Biblioteka BIO | `wizualizacje-projekty/baza-mala/biblioteki/biologia/BIO_KATALOG.md`, `biologia/bio/BIO_KATALOG.md` | 2 kopie katalogu |
| Biblioteka POL | `wizualizacje-projekty/baza-mala/biblioteki/polski/POL_KATALOG_GRAFIK.md`, `polski/szablon/` | grafiki w polskim to wyjątek |
| Raport użycia (co gdzie) | `wizualizacje-projekty/baza-mala/UZYCIA_WIZUALIZACJI.md` (+ `uzycia.json`) | stan 2026-10-14 |
| Raport braków | `wizualizacje-projekty/baza-mala/BRAKI_WIZUALIZACJI.md` | stan 2026-10-14 |

## 3. Stan wizualizacji (z raportu 2026-10-14)

- W bazie: **329** wizualizacji. Użyte 0 razy: **196**. Użyte 1 raz: **84**. Użyte 2 lub więcej razy: **49**.
- Nieużywane wg bibliotek: CHE gfx/reakcje 50, CHE model 49, CHE gfx/naczynia 36, CHE gfx/efekty 31, CHE zlewka (lite) 19, CHE gfx/sceny 5, klocki 4, CHE pracownia (lite) 1, POL 1.
- Najczęściej używane: `sole-doswiadczenia-v01` (N05, 14×), `kw-doswiadczenia-v01` (N04, 11×), `n02-doswiadczenia-v01` (N03, 8×), `lancuch` (BIO, 6×).
- Identyfikatory w lekcjach, których nie ma w bazie: **13** (np. `caoh2Co2`, `rx-ag-cl`, `szereg`, `wlasciwosci`) — literówki albo klucze pracowni, do sprawdzenia.
- Osadzone 2026-10-14: `uklad-okresowy` (CHE F06), `palniki` plomien (CHE F07), `probowki` (CHE N03), `lancuch` (BIO L004).
- Niepodłączone z powodu: CHE F09, F10, F15 — dedykowane wizualizacje istnieją, ale lekcje są w buildzie kanonicznym, który nie obsługuje `@model` (wymaga wersji w `gotowe` albo obsługi lite).

## 4. Braki wizualizacji (gdzie czego brakuje)

- **Polski:** opisy są, grafik brak (ZBUDOWAĆ) — sekcja 1 raportu braków. Wyjątek zgodnie z zasadą, nie ozdoby.
- **Biologia:** BIO.01.L003 (diagnoza) bez wizualizacji; „POMINIETE_BIO_L030-L043_L091” — szkielety bez grafik.
- **Chemia:** 37 lekcji bez wizualizacji w md i HTML (m.in. F08–F21, J01–J10, K01–K08, N06–N08, R01, R02, R04); 5 lekcji ma wizualizacje w md, ale nie w HTML (F01, F02, F03, F04, R03).
- **Olimpiada/LKO bez wizualizacji:** B1B2 zestawy treningowe, DIAG diagnoza wejściowa, DOSW katalog doświadczeń, SYM-A2 symulacja etap II, Z36 konfiguracje, N06 wodorki.
- **Angielski:** md bez tagów wizualizacji (grafik brak w źródle).

## 5. Problemy do decyzji

1. **Kolejność w indeksach ≠ plan.** Indeks chemii jest budowany z folderów `lekcje_md/<grupa>` (zaczyna od CHE.00 REV, potem CHE.08 A, CHE.06 E…). Kanon zaczyna od F01. Naprawa: sortować indeks wg `CHE_SPIS_TRESCI.md`.
2. **Wiele kopii źródeł md.** Chemia: `lekcje_md` (93) / `gotowe` (81) / `pakiet/md` (81). Biologia: `bio/md` (23) / `biologia/md` (36). Trzeba wskazać jedno źródło prawdy.
3. **Manifest klocków:** wszystkie pliki `.js` w `klocki/` mają wpis w `manifest.json` (sprawdzone 2026-10-15). Wpis `dane/pierwiastki.js` wskazuje na istniejący plik w `klocki/dane/`.
4. **Katalogi BIO w dwóch kopiach** (`biologia/bio/BIO_KATALOG.md` i wizualizacje-projekty) — dwa źródła, mogą się rozjechać.
5. **Ścieżki w przekazaniach:** `PRZEKAZANIE.md` (root), `chemia/che-modular/PRZEKAZANIE.md`, `biologia/bio/PRZEKAZANIE.md`, `olimpiada/PRZEKAZANIE.md`, `wizualizacje-projekty/PRZEKAZANIE.md` — każde wskazuje własne ścieżki. Przed użyciem zweryfikować je w `MAPA.md`.

## 6. Co zrobić dalej (propozycja, do decyzji)

- Sortować indeksy wg planu kanonicznego (chemia najpierw, potem bio, pol, ang, oli).
- Wybrać jedno źródło md na przedmiot i usunąć kopie (po potwierdzeniu).
- Rozstrzygnąć 196 nieużywanych wizualizacji: osadzić albo usunąć z bazy.
