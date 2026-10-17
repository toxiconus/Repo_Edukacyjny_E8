# W23 — chemia kanoniczna: F19–F21, O i R (2026-10-09, GPT-6)

## Najważniejsza korekta

W pliku `chemia/lekcje_md/R/CHE.03.R03+R05.stezenia.md` znaleziono błąd we wzorze przeliczania stężenia procentowego na molowe. Poprzedni zapis `Cm = (Cp · d)/(100% · M)` był niespójny z przykładem, gdy `Cp` wpisuje się jako liczbę procentową (np. 36,5), a `d` w g/cm³. Zmieniono wzór we wszystkich znalezionych wystąpieniach na `Cm = 10 · Cp · d / M`. Dodano wariant dla ułamka masowego `w`: `Cm = 1000 · w · d / M`.

**Kontrola liczbowego przykładu HCl:** `10 · 36,5 · 1,18 / 36,5 = 11,8 mol/dm³`. Wynik zgadza się z metodą masy substancji w 1 dm³ roztworu.

## Pozostałe kontrole punktowe

- **F19:** kompletność dossier reakcji — warunki, obserwacje, wnioski, próby identyfikacyjne, energia i BHP.
- **F20:** indeksy kontra współczynniki; `CO₂` kontra `CO₃²⁻`; sprawdzenie wybranych klinik błędów.
- **F21:** tok wnioskowania, bilans równań i oznaczanie danych niewystarczających.
- **O01–O07:** wzory ogólne węglowodorów i ograniczenie ich do klas acyklicznych z odpowiednim typem wiązania.
- **O08/O11/O12:** wybrane równania spalania, reakcji z sodem/węglanem i estryfikacji; warunkowość utleniania alkoholi.
- **O13 i pokrewne:** równania oddychania, fotosyntezy, fermentacji oraz hydrolizy sacharozy; produkty hydrolizy sacharozy to glukoza i fruktoza (izomery o wzorze C₆H₁₂O₆).
- **R04/R07–R09:** wybrane zadania reagenta ograniczającego, nadmiaru i wydajności.

## Zmienione pliki

- `chemia/lekcje_md/F/CHE.01.F19.dossier_reakcji.md`
- `chemia/lekcje_md/F/CHE.01.F20.klinika_bledow_fundamentow.md`
- `chemia/lekcje_md/F/CHE.01.F21.zadania_transferowe_i_diagnostyka.md`
- `chemia/lekcje_md/O/CHE.05.O01-O07.weglowodory.md`
- `chemia/lekcje_md/O/CHE.05.O08+O11+O12.alkohole_kwasy_estry.md`
- `chemia/lekcje_md/O/CHE.05.O13+O15-O20+O22-O23.biochemia.md`
- `chemia/lekcje_md/R/CHE.03.R03+R05.stezenia.md`
- `chemia/lekcje_md/R/CHE.03.R04+R07-R09.stechiometria.md`

## Ograniczenia

To audyt celowany, nie pełna niezależna recenzja wszystkich zadań, źródeł i zakresu konkursu. Priorytetem dalszej pracy jest ponowna kontrola obliczeń i kluczy z bloków R, a następnie przegląd kolizji kodów i wdrożenie poprawek z raportów do kanonu.
