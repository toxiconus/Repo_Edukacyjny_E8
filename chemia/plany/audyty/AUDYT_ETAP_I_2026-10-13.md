# Audyt lekcji do etapu I LKO (23.10.2026) — 2026-10-13

Zakres: 25 lekcji z `chemia/che-modular/lessons-md/gotowe/` pokrywających pkt I–VII (zakres 2025/26) + LKO-A1, LKO-DIAG, LKO-KRZYWE, LKO-pułapki, N06.
Typ audytu: **wewnętrzny, automatyczny i wybiórczy**. To NIE jest W1 (W1 wymaga zewnętrznej recenzji, np. paczki GOTOWE). Pełnego czytania merytorycznego całości (ok. 1,5 MB tekstu) nie wykonano.

## 1. Struktura (`narzedzia/limity_lekcji.py`, `sprawdz_wyklady.py`)
- Blokujące (❌): **N01_tlenki** — powtórzone linie w dwóch quizach (pytania z BANKS i „Quiz główny” zawierają te same pytania: CO₂, Cu₂O, Fe₂O₃ itd.) oraz karty meta („AUDYT W1 — Claude Haiku 5.5”, „v6.0 CHE — integracja z silnikiem”) w treści lekcji. Do poprawy ręcznie: scalić quizy, przenieść karty meta do sekcji LOG.
- Wszystkie pozostałe: bez ❌, brak brakujących wykładów.
- Ostrzeżenia orientacyjne (nie blokują): liczba testów (>5) w F01–F05, F07, N01_powietrze, N04, R03, R03A, REV01, LAB01; fiszki (>30) w F06, N04, REV01, LAB01; sekcje (>25) w większości F-lekcji i N01–N03 — rozważyć podział po etapie I.
- Bloki `:::` zamknięte we wszystkich plikach.

## 2. Status (`stan:`)
- Brak pola `stan` (status nieznany): F01–F09, F16, N01_powietrze_i_gazy, R03, REV01, LKO-DIAG, LKO-Z36, LKO-pułapki.
- Szkice 2026-10-13 (bez W1): LKO-A1, LKO-KRZYWE, LKO-METALE, LKO-STECH, N06.
- „ULEPSZONA — audyt W1 wewnętrzny” (N01_tlenki, N02, N03, N04): to audyt wewnętrzny, nie W1; nie traktować jako zweryfikowanego zewnętrznie.
- Daty „2026-10-22/23” występują tylko w logach zmian — OK.

## 3. Równania (automatyczny bilans atomów, zbiór z 25 plików)
- Zgłoszone ~200 przypadków; po przeglądzie kontekstowym **nie znaleziono błędu merytorycznego**. Flagi to: (a) przykłady celowo niewyrównane („przed wyrównaniem”: F17 przykłady 1–2, karta A1–A8), (b) fałszywe trafienia parsera (zapisy z liczbą na początku, równania z wielokrotnym „→”, opisy zamiast równań).
- Ręcznie sprawdzone rachunki: F17 (MgO → MgCl₂ 47,5 g; Cu/CuO), N06 (H₂S 3,4 g; NH₃ 3,4 g), STECH (cała lekcja), CH₄ (16:64:44:36), fotosynteza (F17 tabela: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ — poprawna).

## 4. Co zostaje do zrobienia przed 23.10 (priorytety)
1. N01_tlenki — scalić dwa quizy, usunąć karty meta z treści (ręcznie, ok. 30 min).
2. Uzupełnić `stan:` w lekcjach z listy z pkt 2 (po przeglądzie każdej).
3. Zewnętrzna recenzja (paczka GOTOWE) dla N04 (sole — bieżący dział kl. 8), N01_powietrze, F02–F03, F16, R03 — tu ryzyko merytoryczne jest największe, a automat go nie wykryje.
4. Przed etapem I nie wykonywać W1 „na pokaz” — status ma być zgodny z faktycznym audytem.
