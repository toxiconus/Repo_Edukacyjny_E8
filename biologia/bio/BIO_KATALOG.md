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
| kod-genetyczny | DNA (nić kodująca + matrycowa) → mRNA → aminokwasy; klik w zasadę = mutacja (cicha, zmiany sensu, nonsensowna, utrata START) | seq="ATG…" | (L011, L020) |
| punnett | szachownica Punnetta: A/a (Mendel), grupy krwi AB0, hemofilia (X); fenotypy i genotypy w % | tryb="A\|K\|X" | (L017–L019) |
| transport-blona | przekrój błony: dyfuzja prosta, ułatwiona, transport aktywny (ATP), osmoza + tabela porównawcza | start="dp\|du\|ta\|os" | REV01, (L005) |
| siec-troficzna | sieć troficzna lasu: co je / kto go je, poziomy, łańcuchy; tryb „usuń gatunek” | — | (L041–L042) |
| komorka-nakladki | komórka: wspólny rdzeń + nakładki (jądro, mitochondria, chloroplasty, wakuola, ściana, plazmid); przyciski typów i warstw, rozpoznanie typu | start="rdzen\|bakteria\|zwierzeca\|roslinna\|grzyb" | REV01, (L001) |
| mikroskop-model | ta sama komórka: obraz z mikroskopu świetlnego (×400, barwienie) vs model szkolny z podpisami | start="mikroskop\|model" | REV01, (L001) |

| fotosynteza-oddychanie | komórka liścia: chloroplast + mitochondrium, suwak światła → bilans gazów (noc, równowaga, przewaga fotosyntezy) | swiatlo="0–100" | REV01 |
| energia-glukozy | oddychanie tlenowe vs fermentacja alkoholowa i mlekowa: warunki, miejsce, produkty, słupki ATP (ok. 38 / 2 / 2) | start="tl\|al\|ml" | REV01 |
| proba-kontrolna | planowanie doświadczenia: przełączniki warunków w próbie badawczej i kontrolnej, ocena planu (jeden czynnik) | start="mocz\|drozdze" | REV01 |
| klucz-kregowce | klucz dwudzielny tak/nie do 5 gromad kręgowców + tryb „rozpoznaj zwierzę” (delfin, nietoperz, pingwin…) | — | REV02 |
| wirus-bakteria | wirus (kapsyd, DNA/RNA, osłonka) obok bakterii (ściana, błona, rybosomy, nukleoid, plazmid, rzęska); klik = opis; antybiotyki | — | REV02 |
| przeobrazenie-plaza | rozwój złożony żaby: skrzek → kijanka → kijanka z kończynami → młoda żaba → żaba; suwak, oddychanie i środowisko | etap="0–4" | REV02 |
| przeobrazenie-owadow | przeobrażenie zupełne (motyl, z poczwarką) i niezupełne (konik polny, bez poczwarki); klik = opis etapu | — | REV02 |
| podzial-komorki | mitoza i mejoza krok po kroku (model 2n = 4, homologi czerwone/niebieskie, chromatydy, crossing-over, wrzeciono); liczby chromosomów i chromatyd w każdej fazie (model i człowiek) | start="mitoza\|mejoza" | L009, L014, L015 |
| dobor-naturalny | symulacja doboru: ćmy jasne/ciemne na korze (przełącznik tła) albo bakterie wrażliwe/oporne + antybiotyk; pokolenia, wykres udziału cechy | start="cmy\|bakterie" | L031 |
Prymitywy (`BIO.g`): `ring` (puryna 6+5 / pirymidyna 6), `hbonds`, `sugar`, `phos`, `miniHelix`, `squiggle` (chromatyna), `chromosome`. Ikony: `BIO.ICO` (organizm, komorka, jadro, chromosom, dna, rna, bialko, funkcja, gen). Efekty: `BIO.fx.info`, `fx.toggle`, odsłanianie figur przy przewijaniu.

Kontenery md tylko w BIO: `::: mity` (linie `mit || poprawka`), `::: drzewo` (mapa pojęć z wcięć).
