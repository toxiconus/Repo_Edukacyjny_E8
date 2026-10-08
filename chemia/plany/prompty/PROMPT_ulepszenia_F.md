# PROMPT — audyt i ulepszenia bloku F (bez pisania od zera)

> Wklej poniższy tekst razem z plikiem `CHE.01F_FUNDAMENTY_MASTER_v14.0_21_LEKCJI_UDOSKONALONE.md` (w repo: `chemia/lekcje_md/F_nowe/`). Działa w Claude (nowy wątek „CHE: …”) i w innym LLM. Etap 1 to sam audyt; etap 2 tylko na moje polecenie.

---

Jesteś redaktorem merytorycznym i dydaktykiem chemii (poziom E8 — egzamin ósmoklasisty, z warstwami LO). Dostajesz wstępny kanon bloku F „Fundamenty chemii” — 21 lekcji `CHE.01F.01`–`CHE.01F.21`, ok. 440 KB.

**Zasada nr 1: nie piszesz od zera i nie przepisujesz całych lekcji.** Materiał jest w większości dobry. Twoje zadanie to wskazać, **co** poprawić, **gdzie** i **dlaczego**, a poprawki podawać punktowo. Treści nie ubywa: przy scalaniu albo usuwaniu dubli każdy unikalny szczegół (liczby, wyjątki, przykłady, BHP) musi trafić w inne miejsce.

## Etap 1 — AUDYT (tylko ten etap teraz)

Przeczytaj plik lekcja po lekcji. Nie streszczaj treści. Oddaj:

**A. Tabela stanu 21 lekcji** — kolumny: lekcja · objętość · kompletność części (diagnoza, rdzeń E8, rozumienie/ambitne, doświadczenie, klinika błędów, ćwiczenia z odpowiedziami, test, fiszki, słownik, most do następnej) · ocena 1–5 · najważniejszy brak.

**B. Błędy merytoryczne** — lista: lekcja · cytat (do 15 słów) · co jest źle · poprawna wersja · pewność (pewne / do weryfikacji). Szczególnie: dane liczbowe (masy atomowe, EN, temperatury, kąty), wyjątki (Cr, Cu, oktet), definicje (wartościowość vs stopień utlenienia vs ładunek, izotop vs nuklid, polarność wiązania vs cząsteczki), poziom (czy coś z LO nie udaje E8).

**C. Błędy struktury i spójności** — sprawdź co najmniej:
1. Wspólne bloki („DODATEK MASTER — INTEGRACJA”, „BLOK F — WARSTWA LEKCJI MASTER v5.0”, „WSPÓLNY SYSTEM ZADAŃ”, „WSPÓLNA KLINIKA”, „TEST MISTRZOSTWA”, „SYSTEM POWTÓREK”, „SPECYFIKACJA HTML”, „DANE WSPÓLNE” itd.) są wklejone **dwa razy** — w środku F18 i w środku F19 (prawie identyczne). Zaproponuj jedno miejsce docelowe i co z nich trafia do F18–F21.
2. Lekcje cienkie: **F10** (ok. 10 KB, brak diagnozy, fiszek, słownika, doświadczenia, poziomów), **F15** (ok. 5 KB, brak prawie wszystkiego), **F18–F21** (po 0–1 KB własnej treści). Dla każdej podaj **plan uzupełnienia** (lista sekcji i 2–5 punktów treści na sekcję), nie gotowy tekst.
3. Pojedyncze braki w lekcjach pełnych: F02 (klinika, fiszki, test, słownik), F05 (ćwiczenia, słownik), F06–F07 (słownik), F13 i F17 (diagnoza), F16 (ćwiczenia, fiszki, test, słownik), F03, F08, F13, F17 (brak oznaczeń E8).
4. Rola F01: w pliku F01 to „Mapa chemii i instrukcja fundamentów”. Istnieje osobny dokument architektury bloku (F00, meta). Oceń, czy F01 ma być lekcją „Jak myśli chemik: obserwacja → model → zapis” (diagnoza, doświadczenie, klinika), a mapa/architektura idzie do F00 — i co konkretnie przenieść.
5. Zasada „jeden temat = jedno miejsce”: wypisz tematy wyjaśniane w pełni w więcej niż jednej lekcji (np. elektrony walencyjne w F06/F07/F08/F13, stopień utlenienia w F09 i F17, polarność w F11 i F15) i wskaż lekcję docelową.
6. Spójność nazw i numeracji: kody `CHE.01F.xx-SLUG` w pliku vs uid w repo `CHE.01.Fxx.temat`; odwołania między lekcjami; czy „pięć pytań chemika” / „trzy pytania” i podobne listy są wszędzie takie same.
7. Wizualizacje: plik używa identyfikatorów `V009v001` itd. (18 sztuk). Silnik ma własne modele (katalog: `live-cv`, `periodic-54`, `molecule-electrons`, `molecule-orbitals`, `molecule-2d`, `molecule3d-merged`, `molecule-cv`, `n01-konstruktor-v01`, `n02-wzory-v01`, `ion-map-v02`, `energy-profile`, `reaction`, `substance`, `chem-profile10`, `beaker-prediction-enhanced`, `stech-kalkulator-v01`, `gfx-scene-*`, `flow-egzamin-enhanced`, `flashcards-deck`). Zrób tabelę: `Vxxx` → co ma pokazywać → istniejący model albo „brak — do zrobienia”.

**D. Zgodność ze standardem lekcji CHE** (jak gotowe N01–N05): kolejność części — 1) karta „Muszę umieć na E8 — 10 faktów”, legenda poziomów, rdzeń lekcji, cele i pytanie przewodnie, kompas, diagnoza; 2) rdzeń E8; 3) rozumienie / ambitne (plakietki), treść ponad LO w blokach rozwijanych; 4) praktyka: doświadczenia w formacie egzaminacyjnym (problem → hipoteza → sprzęt → przebieg → obserwacje → wniosek → równanie → BHP), klinika błędów (Błąd | Poprawnie | Dlaczego?), ćwiczenia, test jednokrotnego wyboru; 5) powtórka: karta na jedną stronę + mapa myśli, fiszki, słownik, checklista; 6) dodatki z poziomami; 7) tabela modeli silnika. Dla każdej lekcji: czego brakuje lub co jest w złej kolejności (krótko).

**E. Priorytety** — 10 najważniejszych ulepszeń w kolejności zysk / koszt, każde z szacunkiem: mała / średnia / duża zmiana.

Na koniec zadaj mi **3–5 pytań o decyzje**, których nie możesz podjąć sam (np. 21 czy 19 lekcji — scalenie F18+F19 i F20+F21; gdzie trafiają wspólne bloki; czy F07/F14 w całości jako LO).

Forma: tabele i krótkie listy, po polsku, bez wstępów i bez pochwał. Nie przepisuj lekcji.

## Etap 2 — POPRAWKI (dopiero gdy napiszę „etap 2: …”)

Dla wskazanych punktów podawaj zmiany jako łatki:

```
### Fxx · sekcja „…”
ZNAJDŹ: (dokładny fragment z pliku, krótki, jednoznaczny)
ZAMIEŃ NA: (nowy tekst)
POWÓD: (jedno zdanie)
```

Nowe sekcje (np. uzupełnienia F10, F15, F18–F21) podawaj jako „WSTAW PO: (nagłówek)” + gotowy markdown w stylu pozostałych lekcji. Dane liczbowe, których nie jesteś pewien, oznaczaj `[do weryfikacji]`.
