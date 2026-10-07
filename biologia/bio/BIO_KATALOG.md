# Katalog grafik BIO (`szablon/bio-viz.js` v0.1)

Użycie w md lekcji: `@viz <id> {opcja="wartość"} | Tytuł | podpis`. Nowa grafika: `BIO.define('id',{opis,mount(el,opt)})` w `bio-viz.js`, potem wpis tutaj.
Zasady: statyczny widok + kliknięcie = wyjaśnienie (`BIO.fx.info`); ruch tylko na żądanie ucznia (suwak/przycisk). Kolory tylko ze zmiennych CSS (`--nt-A`, `--sugar`, `--nucleus`…). Tylko tryb dzienny.

| id | Co pokazuje | Opcje | Lekcje |
|---|---|---|---|
| lancuch | łańcuch kroków A → B → C (+ czynniki z boku) | kroki="A\|opis > B", boki="x; y", wyroznij="n", pion="nie", ikony="nie" (ikony dobierane same: DNA/gen, RNA, białko, funkcja, cecha) | L010 |
| od-organizmu-do-genu | organizm → komórka → jądro → chromosom → DNA → gen | start="gen" | L010 |
| szuflady-cech | sortowanie: dziedziczna / nabyta / wieloczynnikowa | cechy="nazwa:d\|wyjaśnienie; …" | L010 |
| gdzie-dna | jądro z jąderkiem, mitochondria (grzebienie, mtDNA), cpDNA, nukleoid, plazmidy, rybosomy, erytrocyt (góra + profil) i leukocyt | — | L010 |
| poziomy-dna | chromosom → histony → odcinek DNA (gen, regulator, niekodujące) | — | L010 |
| nukleotyd | fosforan + deoksyryboza + zasada, 1′/3′/5′ | zasada="A" | L010 |
| pary-zasad | A–T, G–C oraz błędne A–G, C–T, A–C (pierścienie, szerokość, wiązania) | — | L010 |
| drabina | dwie nici antyrównoległe, cukry, fosforany, pary, wiązania | seq="ATGCCA" | L010 |
| helisa | suwak drabina ↔ helisa, 2 nm, 3,4 nm / 10 par | seq, skret="0–100" | L010 |
| sekwencje | dwie sekwencje, różnice zaznaczone | a, b | L010 |
| pojemnosc | 4ⁿ vs 3ⁿ, suwak długości | n | L010 |
| trener-nici | dopisywanie nici DNA→DNA / DNA→RNA | seq, tryb="rna" | L010 |

Prymitywy (`BIO.g`): `ring` (puryna 6+5 / pirymidyna 6), `hbonds`, `sugar`, `phos`, `miniHelix`, `squiggle` (chromatyna), `chromosome`. Ikony: `BIO.ICO` (organizm, komorka, jadro, chromosom, dna, rna, bialko, funkcja, gen). Efekty: `BIO.fx.info`, `fx.toggle`, odsłanianie figur przy przewijaniu.

Kontenery md tylko w BIO: `::: mity` (linie `mit || poprawka`), `::: drzewo` (mapa pojęć z wcięć).
