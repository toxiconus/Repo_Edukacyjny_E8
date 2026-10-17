# Audyt scalenia paczki REPO_BRAKOW_UZUPELNIENIA_WATKU_W23 (2026-10-09, Claude)

Paczka: 152 pliki, stare nazwy (PL_G01_…, L001_…, BIO_B2…), zbudowana na stanie repo sprzed zmiany nazw na `PRZ.NN.KOD` i sprzed konwersji dawnych HTML. **Nie nadpisywano plików** — każdy scalono trójstronnie (`git merge-file`: repo ↔ wersja bazowa z historii ↔ paczka), żeby nie stracić zmian zrobionych w repo po jej zbudowaniu.

## Wynik
- 16 plików identycznych — bez zmian.
- 119 lekcji/plików scalonych pod nowymi nazwami (107 bez konfliktu, 12 z konfliktem rozstrzygniętym ręcznie).
- 13 nowych plików: audyty W15–W23, W17 (ANG), W20 (OLI), `chemia/plany/ANALIZA_bloki_XEKAPLR.md`; pliki robocze wątku (`ZADANIA.md`, `MANIFEST_SCALENIA.md`, `POSTEP_W4/W6`, `UZUPELNIENIA_Z_WATKU.md`) w tym folderze.
- Odwołania do starych nazw plików w dopiskach paczki zamienione na nowe.
- Buildy: wszystkie przedmioty (`zbuduj_wszystkie.py`), BIO, CHE — OK; testy CHE 15/15, BIO OK; dług `@opis` nie wzrósł.

## Czego z paczki NIE wzięto (zachowano wersję repo)
1. **BIO L001, L003, L015** — w paczce stare, krótkie md (14–18 KB). W repo są pełne lekcje z konwersji HTML (57–83 KB); nadpisanie skasowałoby ~2000 linii. Z L015 dopisano tylko sekcje „Doprecyzowanie (W15)”, „AUDYT W15”, „AUDYT W18”. Z L001/L003 nic — dopiski paczki były szablonowe.
2. **Widoki `@viz` + `@opis` w BIO L005, L011, L017–L020, L041** — dodane w repo po zbudowaniu paczki; zachowane.
3. **G07, klucz „niedobrze, lecz źle”** — paczka uznała zapis rozdzielny za uzasadniony przeciwstawieniem. Od 1.01.2026 (RJP) „nie” z przysłówkami odprzymiotnikowymi piszemy łącznie bez wyjątku; zostaje wersja repo.
4. **Nagłówki `powiazania:`** w L008–L011 — zostają nowe nazwy plików.

## Poprawki błędów wniesionych przez paczkę
- **Zepsuty markdown w 8 lekcjach BIO** (L014–L021, L015): zamykający backtick `[/BIO: DIAGRAM]` przeniesiony na koniec linii `@opis` → przywrócony.
- **`@opis:` (34 linie)** → `@opis ` — narzędzie rozpoznaje tylko formę ze spacją; inaczej opis nie trafiałby do komentarza HTML.
- **5 szablonowych opisów** („przedstawia zależności przedstawione w schemacie”) w L002, L010, L011, L012, L013 zastąpione opisem tego, co schemat pokazuje, i wnioskiem (zasada z CLAUDE.md).
- **G06** — klucz i punkt 5 audytu: paczka traktowała zapis rozdzielny jako równorzędny „zgodnie z instrukcją paczki”. Poprawione: norma od 2026 — łącznie także przy przeciwstawieniu; CKE w latach 2026–2030 uznaje też zapis dawny.

## Sprawdzone i przyjęte zmiany merytoryczne (wyrywkowo, rachunkiem)
- **R03/R05:** `Cm = 10·Cp·d/M` (Cp w %, d w g/cm³) — poprawne; poprzedni wzór `Cp·d/(100%·M)` dawał mol/cm³. Przyjęte.
- **X01–X09:** stopnie utlenienia tlenu (OF₂ +II, O₂F₂ +I, KO₂ −½), warunki Cl₂ + KOH (zimny/gorący), `2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O` — zbilansowane. Przyjęte.
- **OLI X04:** 20 g CuSO₄ ↔ ok. 8,1 g Zn; przy 5 g Zn → ok. 4,9 g Cu — zgodne (masy zaokrąglone).
- **N05:** usunięto wąchanie jako metodę identyfikacji (H₂S, NH₃, HCl), pokazy z CaH₂/NH₃/HCl tylko dla nauczyciela, rozpuszczalności oznaczone `[do weryfikacji]`. Przyjęte (bezpieczeństwo).
- **REV01:** równanie fotosyntezy `6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂` — poprawne.
- **L018:** model XX/XY jako szkolny, 1/2 dotyczy synów nosicielki — poprawne.
- **G04:** „oboje dzieci przyszło” zamiast niezręcznego „oboje rodzeństwo” — poprawne.

## Uwagi na dalszą pracę
- Audyty paczki (GPT-6) same deklarują kontrolę wyrywkową; statusy „W1/W2/W15…” nie oznaczają niezależnej recenzji.
- Część dopisków to tylko sekcje „AUDYT …” na końcu lekcji — zalecenia (np. L018 „wprowadzić w treści głównej”) czekają na przeniesienie do właściwych sekcji.
- Kanony chemii mają teraz listy z prefiksem „✔ wprowadzone (sekcja UZUPEŁNIENIE KANONICZNE …)” — przy budowie lekcji gotowych prefiksy usunąć.
- `ZADANIA.md` (kolejka z wątku): nazwy plików zamienione na nowe tam, gdzie były pełne; skrótowe odwołania (np. „CHE_J03”) zostały — to zapis historyczny.
