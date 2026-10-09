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

## 4. Stan (2026-10-09)
- MASTER v0.04 w repo; mapa chemii CHEM-001…133 ↔ kanon CHE v0.3 w `MAPA_WSPOLNYCH.md` (generator `narzedzia/mapa_chemia.py`).
- **Konkursy LKO:** zakresy 2025/26 (OCR) i arkusz rejonowy chemii 2025/26 w `zrodla/LKO/`; terminy i zakresy etapów — `PRIORYTETY.md` §1. Pakiet 2026/27 jeszcze nieopublikowany.
- **Etapy szkolne pokryte lekcjami (2026-10-08):**
  - chemia (pkt I–VII): REV01 Powtórka kl. 7, F01–F06, **N01 Powietrze i gazy**, **R03 Woda, roztwory i stężenie %**, tlenki, wodorotlenki, kwasy, sole, wodorki — `chemia/che-modular/lessons-md/gotowe/`;
  - biologia (pkt I–II): **REV01 Organizacja i chemizm życia**, **REV02 Różnorodność życia** — `biologia/bio/md/`.
- Treść N01, REV02 (i część R03, BIO REV01) napisana od zera — **do przeglądu merytorycznego** przez użytkownika (zwłaszcza liczby: skład powietrza, gęstości gazów, rozpuszczalności).

- **Szkielety czekające na dane od użytkownika (2026-10-09):** `olimpiada/do_uzupelnienia/` — chemia X04 szereg aktywności, J03 równania jonowe i strącanie, R07 nadmiar (bez mola); biologia B2 homeostaza + B2a–B2f (skóra i ruch, pokarmowy, oddychanie i wydalanie, nerwowy i zmysły, dokrewny, rozmnażanie); polski `polski/do_uzupelnienia/` L007–L011 (przegląd części mowy, części zdania, zdania złożone, środki stylistyczne, morał/puenta/budowa utworu). Pod „DANE:” w każdym pliku — czego brakuje. Gdy dane przyjdą: przerobić na dialekt kanonu, przenieść do `lessons-md/gotowe/` / `biologia/bio/md/`, build + test.
- **Audyt na prawdziwych zadaniach (w toku, nic jeszcze niezapisane):** BIO REV01/REV02, CHE N01/R03 vs arkusze etapu szkolnego Bydgoszcz 2025/26 (`kuratorium.bydgoszcz.pl/wp-content/uploads/2025/12/{biologia,chemia}_{arkusz,klucz}.pdf`, WebFetch). Znalezione luki — BIO: poziomy organizacji od atomu (REV01 błędnie mówi, że atom to nie poziom), makro/mikroelementy z funkcjami, bakteriofag, zwarcica i naczynia, cykle mszaków/paproci (przedrośle, plemnie, rodnie), drzewa (wierzba, topola, osika, olsza), gąbki/parzydełkowce + tabela cech (segmentacja, odbyt, tkanki, symetria), szkielet zewnętrzny = przyczep mięśni, jajo-/żyworodność, podwójna wymiana gazowa ptaków. CHE REV01: progi Δχ Paulinga, gęstość cieczy niemieszających się (jest w F03). Plan: `olimpiada/audyt/AUDYT_KP_SZ_2526.md` (format z MD użytkownika: Treść / Rozwiązanie / Klucz / Dlaczego / Typowe błędy / Lekcja / Decyzja / Działania), potem łatki lekcji. Arkusze LKO (lubelskie, powiat kraśnicki) — kuratorium.lublin.pl blokuje pobieranie; użytkownik ma dosłać ZIP-y etapu szkolnego 2025/26.

## 5. Następne kroki (propozycja)
0. **Priorytet klasy 8** (`PRIORYTETY.md` §2): C4 doświadczenia chemiczne zbiorczo · C3 F17 + obliczenia z równań · etap rejonowy: chemia C1c (szereg aktywności, równania jonowe, nadmiar, konfiguracje do Z = 36), biologia B2 (człowiek + homeostaza, źródło `biologia/md/BIO.01.L002.powtorka_czlowiek.md`) · bank zadań z arkuszy LKO (gdy użytkownik dośle etap szkolny 2024/25).
1. Mapowanie BIO-001… (biologia), potem POL, MAT, OLI — jak chemia (generator na przedmiot).
2. Plakietki poziomów 0–4 w dialekcie MD + przełącznik „E8 / Olimpiada” w md2html (jeden plik, dwa widoki).
3. Format banku zadań (MASTER §46) jako MD/JSON + pierwsze zadania archiwalne (tylko ze źródeł oficjalnych — MASTER §12–13).
4. Diagnostyka startowa (MASTER §93 — minimalny zestaw).

## Pakiet 2026-10-09 (od użytkownika, nie z Perplexity)
- Całość: `olimpiada/zrodla/pakiet_2026-10-09/` (lekcje MAX/UZUPEŁNIONY, arkusze LKO szkolne 2025/26 + klucze jako tekst, MASTER-y, podsumowania).
- Szkielety wypełnione: `olimpiada/do_uzupelnienia/` CHE X04/J03/R07 (MAX), BIO B2 (MAX), B2a–f (UZUPEŁNIONY); `polski/do_uzupelnienia/` PL L007–L011 (v02). Linie `DANE:` ze szkieletów zostały na końcu plików.
- Do scalenia bez strat: `OLIMPIADA_8_MASTER_v003.md` (pakiet, v0.3, 57 KB) z `olimpiada/OLIMPIADA_8_MASTER.md` (repo, v0.1, 82 KB) oraz `KONKURSY_LUBELSKIE_MASTER_PREMIUM_v05.md`.

