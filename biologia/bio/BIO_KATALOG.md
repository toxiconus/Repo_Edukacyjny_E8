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
| transport-blona | przekrój błony: dyfuzja prosta, ułatwiona, transport aktywny (ATP), osmoza + tabela porównawcza | start="dp\|du\|ta\|os" | (L005) |
| siec-troficzna | sieć troficzna lasu: co je / kto go je, poziomy, łańcuchy; tryb „usuń gatunek” | — | (L041–L042) |
| ryba-budowa | ryba kostnoszkieletowa: płetwy, skrzela, linia boczna, pęcherz pławny; tryby poznaj/znajdź/podpisz | — | REV02 §8.1 |
| mikroskop-budowa | mikroskop świetlny: 12 części; 3 tryby | — | REV02 D+ |
| jajo-ptaka | przekrój jaja ptaka: skorupa, błony, komora, białko, żółtko, tarczka, chalazy | — | REV02 §8.4 |
| jajo-porownanie | jajo ryb/płazów, owadów, gadów, ptaków, ssaków: tabela + ścieżka ewolucyjna | — | REV02 §8.5 |
| tkanki-zwierzece | 4 tkanki zwierzęce, rozpoznawanie po budowie; 3 tryby | — | REV02 §6.1 |
| stawonogi-budowa | owad / pająk / rak: tagmy, odnóża, czułki + tabela; 3 tryby | — | REV02 §7.4 |
| komorki-porownanie | komórka zwierzęca / roślinna / drożdży / bakterii + tabela cech; 3 tryby | — | REV01 §3 |
| wykres-dane | czytanie wykresu: osie, skala, punkty, suwak odczytu, 3 zestawy danych | — | REV02 D+ |
| serce-budowa | serce w przekroju: komory, przedsionki, zastawki, naczynia; 3 tryby | — | B10 §2.5 (docelowo B2h) |
| krazenie | obieg krwi: pierścień z krążącą kroplą (niebieska/czerwona), filtr małe/duże, klik = wyjaśnienie | — | B10 §2.5 (docelowo B2h) |
| neuron-budowa | neuron: dendryty, ciało, akson, osłonka, Ranvier, synapsa; 3 tryby | — | B2d §4 |
| nefron-budowa | nefron: kłębuszek, torebka, kanaliki, pętla Henlego, naczynia; 3 tryby | — | B2c §6 |
| wentylacja | wdech/wydech: przepona i żebra, animacja tam i z powrotem + suwak | — | B2c §2 |
| fotosynteza-oddychanie | chloroplast ↔ mitochondrium: krążenie materii, przepływ energii, kropki w pętli, tryby fot/odd/oba + tabela | — | REV01 §7 |
| podzial-komorki | mitoza i mejoza (2n=4) etapami, autostart + ◀ ▶; opcja `typ="mit\|mej"` | — | B2f §4 |
| cykl | cykl życiowy jako pierścień etapów, autostart w widoku (do przodu i od początku), klik = wyjaśnienie + pauza; opcja `cykl="zaba\|tasiemiec\|mech\|paproc\|kwiat\|faga"` (dane w `CY` w bio-rysunki.js) | — | REV02 §2.1, 4.2, 4.3, 4.5, 7.1, 8.2 |

Silnik rysunków z podpisami: `szablon/bio-rysunki.js` (`BIO.lab`, tryby poznaj / znajdź / podpisz; opcja `typ=` wybiera wariant). Plan dalszych: `plany/PLAN_RYSUNKOW_BIO.md`.

Prymitywy (`BIO.g`): `ring` (puryna 6+5 / pirymidyna 6), `hbonds`, `sugar`, `phos`, `miniHelix`, `squiggle` (chromatyna), `chromosome`. Ikony: `BIO.ICO` (organizm, komorka, jadro, chromosom, dna, rna, bialko, funkcja, gen). Efekty: `BIO.fx.info`, `fx.toggle`, odsłanianie figur przy przewijaniu.

Kontenery md tylko w BIO: `::: mity` (linie `mit || poprawka`), `::: drzewo` (mapa pojęć z wcięć).

## Stan lekcji (2026-10-20, generowane z biologia/bio/md)

| Lekcja | KB | @viz | audyty |
|---|---:|---:|---:|
| BIO.00.REV01.organizacja_i_chemizm_zycia | 66 | 9 | 1 |
| BIO.00.REV02.roznorodnosc_zycia | 85 | 17 | 2 |
| BIO.01.B1b.krzyzowki_mendel | 22 | 1 | 0 |
| BIO.01.L001.komorka | 81 | 4 | 0 |
| BIO.01.L001A.dodatek_ambitny_od_komorki_do | 45 | 1 | 1 |
| BIO.01.L002.powtorka_czlowiek | 75 | 1 | 1 |
| BIO.01.L003.diagnoza | 76 | 0 | 0 |
| BIO.01.L004.organizacja_budowy_organizmu_od_komorki | 37 | 2 | 2 |
| BIO.01.L005.blona_komorkowa_i_transport_substancji | 29 | 1 | 2 |
| BIO.01.L006.fotosynteza_skad_roslina_bierze_materie | 30 | 1 | 2 |
| BIO.01.L007.oddychanie_komorkowe_skad_komorka_bierze | 35 | 2 | 3 |
| BIO.01.L008.mikroskop_jak_obserwowac_komorke_a | 28 | 1 | 2 |
| BIO.01.L009.podzial_komorki_wzrost_regeneracja_i | 26 | 1 | 2 |
| BIO.02.B10.powtorka_uklady_czlowieka | 19 | 3 | 0 |
| BIO.02.B2a.skora_uklad_ruchu | 18 | 2 | 0 |
| BIO.02.B2b.uklad_pokarmowy | 19 | 2 | 0 |
| BIO.02.B2c.oddychanie_wydalanie | 17 | 5 | 0 |
| BIO.02.B2d.uklad_nerwowy_zmysly | 20 | 4 | 0 |
| BIO.02.B2e.uklad_dokrewny | 18 | 3 | 0 |
| BIO.02.B2f.rozmnazanie_rozwoj | 19 | 6 | 0 |
| BIO.02.B2g.homeostaza | 32 | 2 | 0 |
| BIO.02.L010.dna_od_zera | 64 | 12 | 3 |
| BIO.02.L011.jak_dna_przechowuje_informacje | 41 | 5 | 1 |
| BIO.02.L012.jak_dna_jest_upakowane_w | 55 | 1 | 1 |
| BIO.02.L013.jak_komorka_kopiuje_dna | 24 | 1 | 4 |
| BIO.02.L014.jak_komorki_ciala_powstaja_i | 61 | 1 | 2 |
| BIO.02.L015.mejoza | 59 | 2 | 2 |
| BIO.02.L016.co_sie_dzieje_gdy_podzialy | 18 | 1 | 3 |
| BIO.02.L016A.zmiennosc_dlaczego_potomstwo_nie_jest | 17 | 1 | 2 |
| BIO.02.L017.jak_przewidywac_dziedziczenie_jednej_cechy | 42 | 1 | 2 |
| BIO.02.L018.jak_dziedziczy_sie_plec_i | 20 | 1 | 4 |
| BIO.02.L019.dlaczego_grupy_krwi_nie_pasuja | 82 | 1 | 1 |
| BIO.02.L020.czym_sa_mutacje_i_jakie | 83 | 1 | 1 |
| BIO.02.L021.powtorka_genetyki | 86 | 2 | 1 |
| BIO.02.L022.biotechnologia_i_inzynieria_genetyczna | 89 | 1 | 2 |
| BIO.03.L030.czym_jest_ewolucja_i_jakie | 20 | 1 | 0 |
| BIO.03.L031.jak_dziala_dobor_naturalny_i | 19 | 1 | 0 |
| BIO.03.L032.powtorka_ewolucji | 15 | 2 | 1 |
| BIO.04.L040.czym_jest_ekosystem_i_jakie | 30 | 1 | 0 |
| BIO.04.L041.jak_zapisac_lancuchy_i_sieci | 19 | 1 | 0 |
| BIO.04.L042.jakie_relacje_panuja_miedzy_organizmami | 19 | 1 | 0 |
| BIO.04.L043.jak_czlowiek_wplywa_na_srodowisko | 21 | 1 | 0 |
| BIO.04.L044.powtorka_ekologii | 14 | 2 | 1 |
| BIO.05.L050.powtorka_roczna | 13 | 2 | 2 |
| BIO.06.L090.extra_olimpijska | 19 | 2 | 2 |
| BIO.06.L091.atp_jak_komorka_magazynuje_energie | 20 | 1 | 0 |
| BIO.07.H01.homeostaza | 80 | 2 | 1 |
| BIO.07.U01.skora_i_uklad_ruchu | 59 | 2 | 1 |
| BIO.07.U03.uklad_pokarmowy_i_odzywianie | 106 | 3 | 1 |
| BIO.07.U04.krazenie_krew_odpornosc | 90 | 2 | 1 |
| BIO.07.U06.oddychanie_i_wydalanie | 81 | 3 | 1 |
| BIO.07.U08.uklad_nerwowy_i_zmysly | 110 | 4 | 2 |
| BIO.07.U10.uklad_dokrewny | 107 | 3 | 2 |
| BIO.07.U11.rozmnazanie_i_rozwoj | 107 | 5 | 1 |
| BIO.99.X00.system | 7 | 0 | 0 |
| BIO.99.X01.szablon_lekcji | 61 | 0 | 1 |
| BIO.99.X02.architektura_v52 | 0 | 0 | 0 |
| BIO.99.X99.warstwy_audyt_backlog | 25 | 0 | 2 |

Razem: 58 lekcji, 2580 KB.
