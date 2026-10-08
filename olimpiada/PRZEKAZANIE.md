# PRZEKAZANIE — OLIMPIADA 8 (projekt przełączany) · 2026-10-08

Czytaj po `CLAUDE.md` i głównym `PRZEKAZANIE.md`. Plan nadrzędny: `OLIMPIADA_8_MASTER.md` (v0.04, 3600 linii — czytać tylko potrzebną sekcję: `grep -n '^#' OLIMPIADA_8_MASTER.md`).

## 1. Czym jest
Program przygotowania uczennicy klasy 8 do konkursów i olimpiad: chemia, biologia, polski, matematyka + wspólna warstwa umiejętności OLI. Poziomy 0–4 (fundament → mistrzowski), priorytety A/B/C/O/L, bank zadań, bank błędów, diagnostyka, powtórki.

## 2. Zasada: projekt przełączany, lekcje wspólne
- **Jedna lekcja = jeden plik MD**, wspólny dla kursu E8 (chemia `chemia/che-modular/lessons-md/`, biologia `biologia/bio/md/`, polski, matematyka) i dla OLIMPIADY. Nie kopiujemy treści między projektami.
- Lekcja E8 to poziomy 0–1. OLIMPIADA dokłada w **tej samej lekcji** warstwy poziomów 2–4 (zadania konkursowe, olimpijskie, mistrzowskie, rozwiązania, transfer) albo — gdy materiał jest czysto olimpijski — osobną jednostkę typu O/Z/S w `olimpiada/<przedmiot>/`.
- **Przełącznik projektu** (do zbudowania w md2html): ten sam MD daje widok „E8” (poziomy 0–1) albo „Olimpiada” (wszystkie poziomy + zadania O). Oznaczenia poziomów jako plakietki w MD, obok istniejących `[[basic:E8]] [[extra:…]] [[exam:…]]`.
- Zadania (archiwum, konkursowe) żyją w banku zadań z metadanymi MASTER §11/§46; lekcja odwołuje się do nich po ID (`CHE-O-2021-001`), nie przepisuje ich.
- Materiał „będzie tu i tu”: kurs E8 widzi swoje lekcje, OLIMPIADA widzi te same lekcje + swoje warstwy; postęp i bank błędów są wspólne.

## 3. Struktura (docelowo, wg MASTER §42 dopasowana do repo)
```
olimpiada/
  OLIMPIADA_8_MASTER.md      plan nadrzędny (wersje w gicie, bez kopii v00x)
  MAPA_WSPOLNYCH.md          ID MASTER (CHEM-001…, BIO-001…, POL-…, MAT-…, OLI-…) → plik lekcji w repo / status
  oli/                       umiejętności przekrojowe OLI-01…25
  zadania/<przedmiot>/       bank zadań z metadanymi
  diagnostyka/               testy startowe (MASTER §91–93)
  bledy/                     bank błędów B01–B12
```
Foldery powstają, gdy pojawi się pierwsza treść.

## 4. Stan
- 2026-10-08: dołączony MASTER v0.04 (architektura + szczegółowa mapa §58 + diagnostyka §91–100). Treści lekcji olimpijskich brak.
- `MAPA_WSPOLNYCH.md` — **chemia zmapowana** (2026-10-08, generator `narzedzia/mapa_chemia.py`, przypisania w słowniku M): 133 tematy CHEM ↔ kanon CHE v0.3; 37 ma gotową lekcję E8 (brak poziomów 2–4), 88 czeka na lekcję z kanonu, 8 bez miejsca w kanonie. Kluczowa luka: mol i stechiometria to w kanonie LO, a w MASTER A+ (do decyzji). Biologia, polski, matematyka, OLI — do zrobienia.

## 5. Następne kroki (propozycja)
0. **Priorytet (klasa 8, oceny + konkursy):** `PRIORYTETY.md` — etapy szkolne: biologia 21.10, chemia 23.10 (do weryfikacji w regulaminie LKO). Następna lekcja: **REV01 Powtórka klasy 7** — gotowy plan i policzone zadania konkursowe w `PRIORYTETY.md` §5; potem R03, F17, doświadczenia; biologia: zakres konkursu + genetyka.
1. Mapowanie BIO-001… (biologia), potem POL, MAT, OLI — jak chemia (generator na przedmiot).
2. Plakietki poziomów 0–4 w dialekcie MD + przełącznik „E8 / Olimpiada” w md2html (jeden plik, dwa widoki).
3. Format banku zadań (MASTER §46) jako MD/JSON + pierwsze zadania archiwalne (tylko ze źródeł oficjalnych — MASTER §12–13).
4. Diagnostyka startowa (MASTER §93 — minimalny zestaw).
