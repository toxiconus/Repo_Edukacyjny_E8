# Nota do audytów W1 Perplexity — X, E, K, A, P, LAB, REV, audyt końcowy (2026-10-09)

Źródło: jeden plik od Perplexity (`audyt_chem_.md`, 4717 linii), podzielony na:

| Plik | Zakres |
|---|---|
| `W1_perplexity_X01-X06_2026-10-09.md` | X01–X06 + most do elektrochemii |
| `W1_perplexity_E01-E06_2026-10-09.md` | E01–E06 + most |
| `W1_perplexity_K01-K11_2026-10-09.md` | K01–K11, klinika błędów, most |
| `W1_perplexity_A01-A08_2026-10-09.md` | A01–A08, klinika błędów, most |
| `W1_perplexity_P01-P06_2026-10-09.md` | P01–P06, klinika błędów, zadanie końcowe |
| `W1_perplexity_LAB00-LAB10_2026-10-09.md` | LAB00–LAB10, diagnostyka |
| `W1_perplexity_REV00-REV10_2026-10-09.md` | REV00–REV10, klinika, checklist, status |
| `W1_perplexity_audyt_koncowy_2026-10-09.md` | poprawki globalne, właściciele pojęć, mosty, rejestr statusów |

Część J01–J06 (linie 1–785) pominięta — identyczna z `W1_perplexity_J01-J00_2026-10-09.md` (różnią się 3 nagłówki).

## Status treści

- Perplexity sam oznacza E, K, A, P, LAB, REV jako **UZUPEŁNIONE REDAKCYJNIE** — to jego propozycja treści, nie audyt istniejących lekcji (lekcji md dla E, K, A, P w repo jeszcze nie ma).
- Poziom często ponad E8 (Ka/pKa, bufory, rząd reakcji, Hess, Faraday, termodynamika) → kandydaci do warstwy rozszerzenia / OLIMPIADA, nie do rdzenia.
- Sprawdzone wyrywkowo i poprawne: KMnO₄+HCl, Zn+HNO₃→NO, półreakcja Cr₂O₇²⁻, MnO₄⁻→MnO₂ (zasadowe), ogniwo Daniella, mostek solny, E° = 1,10 V.
- Do poprawy: J05 klucz zad. 4 nie odpowiada na pytanie (amfoteryczność ≠ obojętność).

## Kolizje numeracji (Perplexity → kanon `CHE_SPIS_TRESCI.md`, wg tytułów)

Numeracja Perplexity NIE jest kanoniczna. Przy scalaniu mapować:

**X**: X01 Utlenianie/redukcja → X01 · X02 Stopnie utlenienia → właściciel F09 (+ dysproporcjonowanie → X08) · X03 Bilans → X03 · X04 Środowisko kwasowe/zasadowe → X06+X07 · X05 Utleniacze/reduktory → X02 · X06 Test → X09. Brak u Perplexity: X04 szereg aktywności (jest w `O08-X04`), X05 redoks jonowy.

**E**: E01 → E01 · E02 Potencjał i szereg → E02+E03 · E03 Elektroliza → E04 · E04 Korozja → E05 · E05 Prawa Faradaya → brak w spisie (rozszerzenie) · E06 Powtórka → brak. Brak u Perplexity: E06 Źródła energii i akumulatory.

**K**: K01 Szybkość → K04 · K02 Prawo szybkości/rząd → brak (rozszerzenie; częściowo K05) · K03 Ea i kataliza → K06+K07 · K04 Efekty energetyczne → K01+K02 · K05 Hess → K02 · K06 Równowaga → K08–K10 · K07 Równowagi kw.-zas. → dublet J06–J09 · K08 Ksp → J04 / rozszerzenie · K09 Termodynamika → brak · K10 Wykresy energii → K01/K06 · K11 Powtórka → brak (w spisie K11 = Równowaga ilościowa). Brak u Perplexity: K03 kalorymetria i przemiany fazowe.

**A**: A01 → A01 (izotopy: właściciel F05) · A02 → A02 · A03 → A03 · A04 → A04 · A05 Dawka/BHP → A06 · A06 Zastosowania → A06 · A07 Energia jądrowa → A05 · A08 Powtórka → brak.

**P**: P01 Systematyka → właściciel F06 · P02 Rodziny → P01+P02+P04 · P03 Metale/niemetale → P03 (częściowo) · P04 Trendy → P06 · P05 Konfiguracja a właściwości → F08/P06 · P06 Zadania → P06.

**LAB**: w repo jedna lekcja `00/CHE.00.LAB.doswiadczenia.md`; LAB00–LAB10 to nowa propozycja podziału.

**REV — kolizja ostra**: w repo REV01 = powtórka kl. 7, REV02 = kl. 8, REV06 = zaawansowana. U Perplexity REV01–REV10 są tematyczne (materia, atom, wiązania…). Nie nadpisywać — przy scalaniu nadać inne kody albo wpiąć jako sekcje istniejących REV.

## Do decyzji użytkownika

1. Czy przyjąć „rejestr statusów” (ŹRÓDŁO / POPRAWIONE / … / GOTOWE HTML) i macierz audytu z `audyt_koncowy`.
2. Czy treść ponad E8 (E05 Faraday, K02 rząd, K09 termodynamika) idzie do OLIMPIADA czy do warstwy rozszerzenia CHE.
3. Nowa numeracja REV dla wersji tematycznej.
