# Co pominięto przy przepisywaniu źródeł do gotowe/ (2026-10-12)

Źródła w `chemia/lekcje_md/` nie zostały zmienione ani usunięte. Poniżej: to, czego
NIE przeniesiono do lekcji w `gotowe/`. Logi audytów, duplikaty i puste szablony
(„WSPÓLNY TEST… — ZASTOSOWANIE”, sekcje „MATERIAŁ Z ARCHIWUM”, powtórki kanonu) pominięto
celowo i nie są tu wymienione szczegółowo.

## F19 Dossier reakcji
- Model danych rekordu (`id, substrates[], products[], coefficients[], conditions[], states[],
  observations[], reaction_type[], energy[], catalyst, medium, ionic_form, redox_data, BHP,
  visualization_hooks[]`) — pomysł na strukturę danych, nie treść dla ucznia; zostaje w źródle.
- Opis wizualizacji V017v001 (zakładki OBSERWACJA | RÓWNANIE | CZĄSTKI | BILANS | WARUNKI |
  ENERGIA | BHP) — do zrobienia jako grafika; zostaje w źródle.
- Szablon pełny (tabela pól) — wpisany do lekcji w zmienionej formie (punkt 1).
- Pole „redox_data” — poza zakresem E8; zostaje w źródle.

## F20 Klinika błędów fundamentów
- Wizualizacja diagnostyczna V018v001 „Znajdź błąd” — pomysł na grafikę; ćwiczenie w tekście
  zrobiono jako karty A–D.
- Fiszki „12 pozycji” (pierwszy błąd, błąd pojęciowy/modelowy/…) — częściowo wpisane
  (pozycje o procedurze); reszta to duplikaty tabeli błędów.

## F21 Zadania transferowe i diagnostyka
- Lista 15 zadań z kanonu (tabela z numerami lekcji) — wpisana jako zadania 1–15 w treści.
- Pełny test 25 pytań (źródło) — w lekcji 10 pytań; pozostałe 15 to powtórka F04–F17
  (np. Na w gr. 1, izotopy, Lewis CO₂ jako geometria), zostają w źródle do ewentualnego
  rozszerzenia testu.
- Tabela wyników 0–25 — w lekcji zastąpiona tabelą dla 10 pytań.
- Kryterium zamknięcia bloku F — wpisane.

## J01 Dysocjacja elektrolityczna
- Przykład LO „0,1 mol CH₃COOH” — wpisany.
- Klinika 2.0 (procedura „znajdź błąd”) — w lekcji jako karta E; procedura ogólna zostaje w źródle.
- Dalsze części źródła (po ćwiczeniu 10B, czyli odpowiedzi do 10B i sekcje testu/słownika
  ze źródła) — nie czytałem ich w całości przy przepisywaniu; test i słownik napisano na nowo.
  Do sprawdzenia: `sed -n` od „10B” w `chemia/lekcje_md/J/CHE.04.J01…md`.
- Sekcja „Obserwacja / model” (problem, materiał, ograniczenia, BHP) — wpisana jako dosw.

## J02 Odczyn i pH
- Historia audytów W1–W22 i „materiał źródłowy” — logi, pominięte.
- Pełna treść kanoniczna po W1 (tekst o wskaźnikach i temperaturze) — przeniesione myśli
  do wykładu i kart; sformułowania wiernie nie przepisano.
- Sekcje 10–12 źródła (test 3+2+2+1, słownik tabelaryczny) — zastąpione nowym testem i słownikiem.
  Źródłowy test D (dlaczego nie smakować) — wpisane jako BHP w klinice.

## K01 Energia reakcji
- Warstwa olimpiadzka (sekcja 15 i [[extra:OLIMPIADA]]) — NIE przeniesiona. Do zrobienia
  osobno w `olimpiada/` (wspólna lekcja, warstwa konkursowa).
- Mapa lekcji (tabela warstw) — zastąpiona nagłówkiem „warstwy”.
- Przykłady jak „rozdzielanie magnesów — Khan” z źródła — pominięte (nieprecyzyjne).
- Sekcje po 6C (wykres ASCII, opis, zadania ze źródła) — wykres opisany słownie w punkcie 4.
- Źródłowe ćwiczenia 10A/10B i klucz — zastąpione ćwiczeniami A–D w lekcji.
- Sekcje od 7 (część LO) do końca źródła — nie wszystkie przeczytano przy tej wersji;
  zakres LO ograniczono do zarysu (ΔH, E_a, wiele etapów). Do sprawdzenia: `grep -n '^##'`.

## K02 Entalpia
- Źródło przeczytane do połowy (pierwsze ~6 KB: wprowadzenie, ΔH, ΔH_f°, Hess, spalanie, początek tabeli klinik).
  Reszta źródła (dalsza klinika, ćwiczenia, test, źródła) NIE była przeczytana przy pisaniu lekcji —
  lekcja ma własne ćwiczenia, test i klinikę. Do sprawdzenia: `sed -n` od „Mieszanie kJ i kJ/mol” w źródle.

## K04 Szybkość reakcji
- Konwersja automatyczna (skrypt), treść zachowana w całości z wyjątkami:
  - sekcja „AUDYT W1” (logi wersji 3) → `POMINIETE_K04_audyt.md`;
  - linia ZPE w „Źródłach” (ZPE nie zawiera treści o szybkości, wpis był notatką, nie źródłem) → `POMINIETE_K04_audyt.md`;
  - blok „mity” zamieniono na karty warning („Mit: …”) — tekst bez zmian.

## K08 Równowaga dynamiczna
- Konwersja automatyczna: usunięto stary nagłówek YAML, poprawiono błędne zamknięcia `::::` na `:::`,
  blok „mity” → karty warning, tabele klinik i słownika → składnia dialektu, tagi fiszek `E8:K08` → `basic:podstawa`.
- Sekcje logów (AUDYT Grok, LOG ZMIAN) → `POMINIETE_K08_audyt.md`.

## Lekcje, których źródło nie zostało przepisane 1:1
- F19–F21, J01, J02, K01: napisane od nowa na podstawie źródła (strony czytane wg opisu powyżej).
  Źródła w `chemia/lekcje_md/` pozostają nietknięte.
