# PRIORYTETY — klasa 8, rok 2026/27 (oceny bieżące + konkursy)

Zasada: najpierw to, co jest **najbliżej w kalendarzu** (konkurs, sprawdzian), potem kolejność szkolna, potem warstwy olimpijskie 2–4.
Lekcje są wspólne z kursem E8 (jeden MD) — każda nowa lekcja od razu służy ocenom i konkursowi.

## 1. Terminy (województwo lubelskie, konkursy Lubelskiego Kuratora Oświaty)
| przedmiot | etap szkolny | dalsze etapy | źródło |
|---|---|---|---|
| biologia | **21.10.2026** | rejonowy, wojewódzki — sprawdzić w regulaminie | konkursy.odrabiamy.pl (pośrednie) |
| chemia | **23.10.2026** | jw. | konkursy.odrabiamy.pl (pośrednie) |
| matematyka, polski | — | — | do ustalenia |

**Do weryfikacji:** daty i zakres wymagań w oficjalnym regulaminie LKO (kuratorium.lublin.pl → Konkursy przedmiotowe 2026/27; strona nie daje się pobrać automatycznie — sprawdzić ręcznie i wpisać tutaj zakres etapu szkolnego).

Typowy arkusz konkursu chemicznego SP: teoria, **obliczenia (stężenie procentowe, skład procentowy, obliczenia z równań reakcji)**, **doświadczenia (obserwacje → wniosek → równanie)**; poza programem bywa konfiguracja elektronowa, typ wiązania, rozdzielanie mieszanin, roztwory.

## 2. Kolejka lekcji — teraz (do etapów szkolnych)
### Chemia (do 23.10)
| # | lekcja | dlaczego | materiał źródłowy | stan |
|---|---|---|---|---|
| C1 | **REV01 Powtórka klasy 7** (fundamenty: BHP, atom i jon, układ okresowy, wartościowość, wzory, wiązania, równania + nowa sekcja obliczeń konkursowych; gazy i roztwory — osobno) | zakres etapu szkolnego = głównie kl. 7 + początek kl. 8 | `chemia/lekcje_md/00/CHE.00.REV01.powtorka_klasy_7.md` | [ ] następna — plan niżej (§5) |
| C2 | R03 Stężenie procentowe (+ R02 rozpuszczalność, krzywe) | obliczenia rozdzielają uczestników | `chemia/lekcje_md/R/CHE.03.R03+R05.stezenia.md` | [ ] |
| C3 | F17 Równania reakcji + obliczenia z równań (masowe, prawo zachowania masy, proporcje — bez mola) | typowe zadanie konkursowe | `lekcje_md/F/CHE.01.F17…`, `R/…stechiometria.md` (część masowa) | [ ] |
| C4 | Doświadczenia: obserwacja → wniosek → równanie (zbiorczo) | typowe zadanie konkursowe | `lekcje_md/00/CHE.00.LAB.doswiadczenia.md` | [ ] |
| — | gotowe: F01–F06, tlenki, wodorotlenki, kwasy, sole, wodorki | | `che-modular/lessons-md/gotowe/` | [~] |

### Biologia (do 21.10)
| # | lekcja | dlaczego | stan |
|---|---|---|---|
| B1 | genetyka bieżąca (L010 gotowa → L011…) | program kl. 8 teraz + konkurs | L010 gotowa |
| B2 | powtórka kl. 5–7 (komórka, organizmy, człowiek) wg zakresu konkursu | etap szkolny | do zaplanowania po zakresie LKO |

## 3. Kolejka — później (oceny bieżące, kolejność szkolna kl. 8)
- Chemia: po solach → **węglowodory** (O01–O07, materiał `lekcje_md/O/CHE.05.O01-O07.weglowodory.md`) → pochodne węglowodorów (O08–O13) → substancje o znaczeniu biologicznym (O15–O20).
- Biologia: genetyka → ewolucja → ekologia.

## 4. Olimpiada (poziomy 2–4) — po etapach szkolnych
- Dopisywanie warstw 2–4 do gotowych lekcji (najpierw atom/układ okresowy/reakcje), bank zadań archiwalnych z oficjalnych źródeł, mol i stechiometria jako poziom 2 (w kanonie LO).

## 5. Plan lekcji REV01 (ustalony 2026-10-08, do napisania)
- Plik: `chemia/che-modular/lessons-md/gotowe/REV01_powtorka_klasy_7.md`, dialekt kanoniczny (`SYSTEM.md` §3), wzór budowy: `F06_uklad_okresowy.md`.
- Źródło (przeczytane w całości): REV01 = fundamenty kl. 7 (BHP, atom/jon, układ okresowy, wartościowość, wzory, wiązania, równania). Pominąć meta-sekcje źródła (instrukcja, filozofia, globalny schemat, metadane, zasady HTML, status, dodatek A). Brak w źródle: powietrze/gazy, woda i roztwory — to osobne lekcje (N01, R01–R03).
- Układ: minimum (10 pkt) · warstwy · rdzeń · jak pracować · mapa lekcji i pułapki · mapa skojarzeń · diagnoza (6 pytań + `::: odp`) · BHP + szkło · atom/izotopy/jony (`@model f05-izotopy-v01`) · układ okresowy (`@model periodic-54`) · wartościowość · wzory, grupy atomów, nawias, 5 pojęć, wzory strukturalne/elektronowe, masa cząsteczkowa (`@model n01-konstruktor-v01`, `@model n02-wzory-v01`) · wiązania (`@model molecule3d-merged`) · równania, typy, spalanie, egzo/endo, warunki, rozpuszczalność (`@model tabela-rozpuszczalnosci-v01`), zapis jonowy · strategia · pułapki + STOP · `::: klinika` (kolumna „Reguła” wliczona do „Dlaczego?”) · wszystkie ćwiczenia źródła z `::: odp` · rozszerzenie/ambitne (`karta extra`) · ściąga · `::: fiszki` (44) · `::: test` (ok. 12 pytań zamkniętych z treści) · `::: slownik` · checklista · powtórki · mapy myśli jako tabele · co dalej.
- **Nowa sekcja „Obliczenia i doświadczenia konkursowe” [[exam:KONKURS]]** (w źródle brak; typowe w arkuszu etapu szkolnego). Przykłady policzone: %O w H₂O = 88,9%; stosunek masowy C:O w CO₂ = 3:8; %C w CaCO₃ = 12%; Fe + S: 5,6 g + 3,2 g → 8,8 g FeS; 2Mg + O₂ → 2MgO: z 12 g Mg → 20 g MgO; C + O₂: 12 g C zużywa 32 g O₂; S:O = 1:1 masowo → SO₂; tlenek żelaza z 70% Fe → Fe₂O₃; 10 g CaCO₃ → 5,6 g CaO + 4,4 g CO₂. Zadania z odp.: %N w NH₄NO₃ = 35%; Mg:O w MgO = 3:2; 4 g H₂ → 36 g H₂O; 20 g Ca → 28 g CaO, tlen 8 g; 2,3 g Na + 3,55 g Cl → NaCl. Doświadczenia (`::: dosw`): 2CuO + C → 2Cu + CO₂ (czarny proszek → czerwonobrunatny osad, woda wapienna mętnieje); wykrywanie CO₂: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O.
- Po napisaniu: `python3 tools/che.py lekcje` + `python3 tools/che.py test`; wpis w `olimpiada/MAPA_WSPOLNYCH.md` (mapa_chemia.py — dodać REV01 do przypisań CHEM-008…048).
