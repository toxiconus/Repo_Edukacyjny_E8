# Plan rysunków i wizualizacji biologii (stan 2026-10-20)

Zasady (z ustaleń): grafika tylko tam, gdzie jest potrzebna do zrozumienia lub do zadania z arkusza (rysunki w arkuszach LKO: podpisz, rozpoznaj, kolejność, odczyt wykresu); małe komponenty `BIO.define(...)` w `biologia/bio/szablon/bio-viz.js`, jeden wspólny styl (zmienne CSS bio, linie i kolory jak `CHE.GFX.STYL`); animacje startują same, gdy grafika jest widoczna: „tam i z powrotem” (oddychanie, przepona) lub „do przodu i od początku” (cykle, droga pokarmu); doświadczenia startują kliknięciem. Każdy rysunek ma `@opis` w md (co widać, podpisy, wniosek) — opis musi być w lekcji także bez rysunku (do pakietów dla Perplexity).

Wspólny tryb **„podpisz”** (dla wszystkich schematów anatomicznych): numerowane punkty + lista nazw do przeciągnięcia/wyboru; przycisk „pokaż podpisy”. To odpowiada zadaniom typu „podpisz elementy budowy…”.

## Etap I — priorytet (rysunki występujące w arkuszach 2022–2026)
| # | Komponent (id) | Co pokazuje | Tryby / animacja | Lekcja | Zadania z arkuszy |
|---|---|---|---|---|---|
| 1 | `ryba-budowa` | płetwy parzyste (piersiowe, brzuszne) i nieparzyste (grzbietowa, odbytowa, ogonowa), skrzela, linia boczna | podpisz | REV02 §8.1 | 25/26 z.1 |
| 2 | `mikroskop-budowa` | okular, obiektyw, rewolwer, stolik, śruby makro/mikro, zwierciadło/oświetlacz + licznik powiększenia | podpisz; suwak obiektywu (powiększenie = okular × obiektyw) | REV01 §2 | 22/23 z.4, 23/24 z.1 |
| 3 | `preparat-krok` | przekrój: szkiełko podstawowe, kropla, skórka cebuli, nakrywkowe pod kątem; 6 kroków | kroki „do przodu i od początku”; podpisz szkiełka | REV01 §2, REV02 D+ | 25/26 z.6 |
| 4 | `kwiat-cykl` | budowa kwiatu (pręcik, słupek, okwiat) → zapylenie → łagiewka → zapłodnienie podwójne → nasiono/owoc | animacja kroków; podpisz | REV02 §4.5 | 22/23 z.14, rej. 23/24 z.1 |
| 5 | `jajo-ptaka` | skorupa, błony, komora powietrzna, białko, chalazy, żółtko, tarczka zarodkowa | podpisz | REV02 §8.4 | 23/24 z.6 |
| 6 | `komorki-porownanie` | komórka bakterii, roślinna, zwierzęca, grzyba obok siebie, wspólne i różne organelle | podpisz; filtr „co ma/czego nie ma” | REV01 §3–4 | 23/24 z.5, 25/26 z.5 |
| 7 | `tkanki-zwierzece` | 4 tkanki (nabłonek, łączna, mięśniowa x3, nerwowa) w widoku mikroskopowym | podpisz; klik = funkcja | REV02 §6.1 | 22/23 z.15, 23/24 z.10 |
| 8 | `wykres-dane` | tabela → wykres liniowy/słupkowy z osiami, jednostkami, odczyt wartości, zaznaczenie trendu | dane z opcji md (`dane="x:y;…"`), tryb „narysuj sam” | REV01 §9.1, REV02 D+ | 22/23 z.3, rej. 23/24 z.13 |
| 9 | `stawonogi-budowa` | rak (głowotułów + odwłok), owad (głowa-tułów-odwłok), pająk; podpisy odnóży i czułków | podpisz; przeobrażenie zupełne vs niezupełne (animacja) | REV02 §7.4 | 23/24 z.12, rej. 23/24 z.5 |
| 10 | `cykl-zaby` | jaja → kijanka → przeobrażenie → żaba | kolejność etapów, „do przodu i od początku” | REV02 §8.2 | 25/26 z.8 |
| 11 | `cykl-tasiemca` | żywiciel pośredni (świnia/bydło) → wągier → człowiek → jaja | animacja kroków | REV02 §7.1 | 22/23 z.16 |
| 12 | `cykl-mchu-paproci` | gametofit ↔ sporofit mchu (płonnik) i paproci; zarodnie | kroki; podpisz | REV02 §4.2–4.3 | 23/24 z.13, rej. 22/23 z.2 |
| 13 | `szyszki-igly` | sosna, świerk, jodła, modrzew: igły i szyszki obok siebie | rozpoznaj (quiz) | REV02 §4.4 | 22/23 z.10 |
| 14 | `faga-cykl` | cykl lityczny bakteriofaga (adsorpcja → wstrzyknięcie → namnażanie → liza) | „do przodu i od początku” | REV02 §2.1 | — (wzorzec) |

## Etap II — po rysunkach etapu I (powiązane z B2*)
`serce-obieg` (przekrój, obieg mały/duży, zastawki; animacja krwi) · `krew-morfotyczne` (erytrocyty, leukocyty, płytki) · `naczynia-krwionosne` · `uklad-limfatyczny` · `neuron-i-odruch` · `przepona-wdech` (animacja tam i z powrotem) · `staw-czaszka` · `miesnie-antagonistyczne` · `skora-przekroj` · `trawienie-przewod` · `nefron`. Szczegóły w planach B2h/B2i.

## Kolejność wykonania i pakowanie
1. Najpierw `wykres-dane` (#8) i `komorki-porownanie` (#6) — używane w wielu lekcjach i zadaniach.
2. Potem rysunki z podpisami (#1, 2, 5, 7, 9) wspólnym trybem „podpisz”.
3. Animacje cykli (#3, 4, 10, 11, 12, 14) na wspólnym silniku kroków (`lancuch` już istnieje — rozszerzyć o oś czasu i auto-powtarzanie).
4. Do czasu powstania rysunków: w md pisać `@opis` (słowny opis schematu) i dołączać pełny opis w paczkach dla zewnętrznego AI.
Wszystkie nowe komponenty: wpis w `biologia/bio/BIO_KATALOG.md` i test `node biologia/bio/narzedzia/sprawdz_bio.js`.

## Stan realizacji (2026-10-20)
Zrobione (`szablon/bio-rysunki.js`, wstawione w REV01/REV02): wykres-dane, komorki-porownanie, ryba-budowa, mikroskop-budowa, jajo-ptaka, tkanki-zwierzece, stawonogi-budowa + dodatkowo jajo-porownanie (jajo u różnych grup, ścieżka ewolucyjna).
Zrobione też: komponent `cykl` (żaba, tasiemiec, mech, paproć, kwiat, faga). Do zrobienia: preparat-krok, szyszki-igly; etap II: serce-obieg, krew, naczynia, neuron-odruch, przepona, nefron, trawienie, skóra, staw-czaszka.

## Stan 2026-10-20 (wieczorem) — aktualizacja
Etap I i II zrobione (większość pozycji jest w `bio-rysunki.js` i w bibliotece `wizualizacje/`): m.in. preparat-mikroskopowy, szyszki-iglaste, kwiat-budowa, serce, krew, naczynia, neuron, nefron, przewód pokarmowy, skóra, staw.
Dodane dziś z arkuszy i brakujących tematów: nablonki-rodzaje, krew-skladniki, miesnie-trzy, polip-meduza, bezkregowce-sylwetki, drzewa-krzewy, mapa-narzadow, liscie-rodzaje, owoce-rozsiewanie, przeksztalcenia-organow, nasiono-ziarniak, zboza-klosy, neurony-mielina, osmoza-komorka, mutacje-punktowe.
Rozstawienie w lekcjach wyrównane: transfuzja → L019, kontrola-podzialow → L009, mapa-narzadow → L002, osmoza → L005, mutacje → L020.
Do zrobienia (luki): lekcje bez żadnej wizualizacji (L003 diagnoza, X01 szablon — celowo); kolejne tematy z olimpiady: dyfuzja (prosty model), chromosomy i kariotyp, drzewo rodowodowe, budowa DNA→chromosom (jest poziomy-dna), fotosynteza doświadczenie (próba kontrolna jest), układ limfatyczny, oko (jest), staw-czaszka.
