# ZASADY DLA CLAUDE – CHE_lab (instrukcje projektu, v2)

Cel: minimum tokenów, praca na małych częściach, stan w plikach (nie w rozmowie). Odpowiadaj po polsku, bez emoji.

## 1. Start
1. Źródło prawdy: `docs/STATE.md` + ostatni wpis `docs/ZMIANY.md` (w projekcie: CHE/STATE.md). Jeśli masz pliki w obszarze roboczym lub w projekcie — przeczytaj je sam; proś o nie tylko, gdy ich nie ma. Nie zgaduj stanu.
2. Nigdy nie czytaj całego HTML ani całego kanonu md. Szukaj w `docs/INDEX_KODU.md` i `sources/chemia/lekcje/INDEX.md`, czytaj tylko potrzebne fragmenty.
3. Zadanie większe niż 1 moduł: plan w max 5 liniach i od razu wykonuj. Zatrzymaj się tylko, gdy brakuje danych, krok jest nieodwracalny albo wykracza poza zakres.

## 2. Odpowiedzi
- Bez wstępów i powtarzania; wynik w 2–4 zdaniach, szczegóły w `docs/ZMIANY.md`.
- Wyjaśnienia tylko na pytanie. Decyzja projektowa = 1 linia w „Decyzje” w STATE.md.
- Max 1 pytanie naraz. Brak informacji → pytaj, nie wymyślaj.
- Błąd poza zakresem: 1 linia na końcu (i wpis do TODO), bez naprawy bez zgody.
- Testy: raportuj tylko FAIL i przyczynę. Nie twierdź, że coś działa, jeśli test nie był uruchomiony.

## 3. Pliki i build
- Edytujesz: `src/` (silniki, dane, widoki, GFX), `modules/base/` (baza), `lesson/*_new.html` (lekcje), `sources/chemia/CHE.core.md` + `sources/chemia/lekcje/<uid>.md` (kanon md), `docs/`, `tools/`, `test/`. Nigdy ręcznie `out/` ani złożonego kanonu `CHE.all.vXX.md`.
- Build: `python3 build.py` → `out/CHE_lab_wizualizacje_v0_NN_GFX16.html`; kanon: `python3 tools/md_assemble.py`.
- Po zmianie: build → testy (`test/aud.js <plik>`, `LES=<kod> node test/lesl.js x`, `test/vizlesson.js`, `tools/lesson_check.py`) → wynik w 1–3 liniach.
- Kontrakty z STATE.md: `CHE.VIEW.define`, jedna baza danych w silniku (liczby, barwy, równania tylko z silnika), animacje tylko z własnego GFX, jeden model = jedno miejsce w lekcji.
- Wersja (+0.01) tylko przy wydaniu; wydanie = build + testy + ZMIANY + STATE + zip źródeł.

## 4. Długość wątku
Zaproponuj przekazanie i nowy wątek, gdy: ok. 15–20 wymian, zadanie zrobione po wklejeniu dużych plików, zmiana tematu/modułu, albo trzeba cofać się do wcześniejszych ustaleń. Komunikat: „Wątek robi się długi. Proponuję przekazanie i nowy wątek.” + blok z p. 5.

## 5. Blok przekazania (max 15 linii)
```
PRZEKAZANIE <data>
Zrobione: …
Zmienione pliki: …
Otwarte / TODO (max 5): …
Decyzje: …
Znane błędy: …
Sprawdzić ręcznie: …
Następny krok: …
```
Gdy masz dostęp do plików — sam zaktualizuj STATE.md i ZMIANY.md; bez dostępu — podaj diff STATE.md (zmienione sekcje) i wpis do ZMIANY.md (max 10 linii).

## 6. Utrzymanie plików
- `ZMIANY.md`: 2–3 ostatnie wydania, każde max 10 linii; starsze do `ZMIANY_ARCHIWUM.md` (nie wczytywane domyślnie).
- `STATE.md`: tylko stan bieżący; zamknięte sprawy usuwaj.
- `INDEX_KODU.md` generuje `tools/index.py`; `lekcje/INDEX.md` — po zmianach tylko zmienione wiersze.
- Liczby i listy z silnika generuj skryptem, nie przepisuj ręcznie.

## 7. Lekcje
- Standard wyglądu i układu: `docs/STANDARD_LEKCJI.md` (rdzeń E8 → rozumienie → praktyka → powtórka → dodatki; plakietki E8 / ROZUMIENIE / AMBITNE; treść ponad LO w „adv”).
- Kody: F00–F09 fundamenty, N01 Tlenki, N02 Wodorotlenki, N03 Kwasy, N04 Sole…, FIZ-01; uid np. CHE.02.N01.tlenki.
- Jedna lekcja lub jeden dział naraz.
- Treści nie ubywa. Powtórzenia (także ten sam sens innymi słowami) scalaj w jedno pełne wyjaśnienie z odnośnikami; można przeredagować na logiczniejsze lub pełniejsze. Kontrola: `tools/lesson_check.py <migawka> <lekcja> lesson/edits_<KOD>.md` musi dać OK; każde przeredagowane zdanie wpisane jako OLD/NEW.
- md ↔ HTML zawsze na plus: po zmianie lekcji układ i nowe treści trafiają do `sources/chemia/lekcje/<uid>.md`.
- Dopóki lekcja jest szkicem, nie zmieniaj silnika pod nią.

## 8. Czego Claude nie robi
- Nie usuwa i nie zakłada wątków (tylko proponuje).
- Nie traktuje pamięci rozmów jako źródła prawdy — źródłem jest STATE.md.
- Nie usuwa plików ani wiedzy bez kopii/migawki.
