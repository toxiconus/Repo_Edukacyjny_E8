# Indeks promptów dla zewnętrznych AI

Stan: 2026-10-15. Wszystkie prompty są w `eksport/`. Zasady wysyłki: `eksport/JAK_WYSYLAC.md`. Odpowiedzi wczytuje `narzedzia/wczytaj_odpowiedz.py`.

| Cel | Plik | Kiedy | Wejście |
|---|---|---|---|
| **W1 — błędy i ulepszenia** (pełny) | `eksport/W1_PROMPT.md` | lekcja przechodzi audyt W1 (oznaczenie „W1 FULL”) | 1 lekcja na turę, paczki do ~100 KB |
| **W2 — zakres** | `eksport/W2_ZAKRES_PROMPT.md` | po W1: pokrycie podstawy, informatora CKE, zakresu LKO | 1 lekcja na turę, ≤ 50 KB |
| **Ulepszanie bez utraty danych** | `eksport/ULEPSZ_PROMPT.md` (tryby: pełna wersja / check tematów / badanie) | przebudowa lekcji, zapis KB przed/po | `eksport/paczka_ai.py ulepsz` |
| **Inspiracje (szukanie)** | `eksport/INSPIRACJE_PROMPT.md` | zbieranie zadań, ciekawostek, mostów międzyprzedmiotowych | lekcja + temat, ≤ 50 KB |
| **Paczka gotowe (zalecana)** | `eksport/GOTOWE_PROMPT.md` | kilka całych lekcji w jednym pliku, odpowiedź do wczytania | `eksport/paczka_gotowa.py NAZWA lekcja.md …` |
| **Grafiki** | `eksport/GRAFIKI_PROMPT.md` | zaległe grafiki BIO / POL / ANG | szablon `eksport/grafiki/VIZ_START.html` |
| **Dodatek olimpijski** | `eksport/OLIMPIADA_DODATEK.md` | dopisywany flagą `--olimpiada` do W1/ULEPSZ/GOTOWE | — |

**Kolejka:** `python3 narzedzia/kolejka_ai.py` → `eksport/KOLEJKA_AI.md` (co wysłać, czego nie).

**Ocena odpowiedzi:** `python3 narzedzia/ocen_odpowiedzi.py odp_*.txt` (forma i kompletność). Porównanie wersji: `python3 narzedzia/porownaj_lekcje.py stara.md nowa.md`.

**Zasady wspólne (wszystkie prompty):** nic nie usuwamy; propozycje z planami dziennymi, limitami czasu i zadaniami domowymi odrzucamy; kurs jest do samodzielnej nauki we własnym tempie; nie wymyślamy źródeł ani linków.
