try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const E = C.ENGINE = C.ENGINE || {};
const text = `N03 ENGINE v2.50 · MOD-99 · DIVISION GUIDE
=============================================

Jeden plik HTML, moduły rejestrowane centralnie; wersja 2.48. Nowe moduły Paczki A są częścią domeny wspólnego silnika. Każdy <script id="mod-XX-...">
jest samodzielnym IIFE. Podział na paczki jest mechaniczny.

PACZKA MICRO (~25–30 KB minified, 7–9 KB gzip)
-----------------------------------------------
  mod-00-manifest
  mod-01-data-elements (rdzeń)
  mod-02-data-molecules (3 cząsteczki)
  mod-10-chem
  mod-11-molecule
  mod-12-reaction
Zastosowanie: jedna cząsteczka + jedno równanie.

PACZKA STANDARD (~70–85 KB minified, 18–22 KB gzip)
----------------------------------------------------
  MICRO +
  mod-03-data-reactions
  mod-04-data-substances
  mod-05-data-context
  mod-06-data-atomic-props
  mod-07-data-isotopes
  mod-13-equilibrium
  mod-14-stoich
  mod-15-units
  mod-18-atom
  mod-19-nucleus
  mod-20-profile
  mod-20b-ion
  mod-20c-isotope
  mod-25-dom
  mod-30-viz
Zastosowanie: E7/E8, chemia nieorganiczna, stechiometria.

PACZKA FULL (obecny plik, ~200–240 KB minified, 50–60 KB gzip)
--------------------------------------------------------------
  STANDARD +
  mod-08-data-spectra
  mod-16-thermo
  mod-17-electro
  mod-20d-spectra
  mod-20e-nuclear
  mod-21..24 (state, observer, progress, derived)
  mod-31..33 (motion, view, explain)
  mod-40..43 (registry, contract, audit, public)
  mod-90..91 (periodic, lab)
Zastosowanie: LO biol-chem, wprowadzenie uniwersyteckie.

PACZKA EXTENDED (przyszłość, >280 KB)
--------------------------------------
  FULL +
  CHE.SPECTRA_CONTRACT (IR, NMR, MS, UV-Vis) — kontrakt danych, jednostek, niepewności i provenance
  mod-51-organic (grupy funkcyjne, izomeria)
  CHE.NOMENCLATURE — deskryptor strukturalny, nie pełny IUPAC
  mod-53-crystal
  mod-54-quantum (funkcje falowe, orbitale molekularne)
Zastosowanie: chemia organiczna, spektroskopia, uniwersytet.

REGUŁA WYBORU PACZKI
-------------------------------------
  < 20% API → nie używaj silnika
  20-40%    → MICRO lub STANDARD
  > 40%     → FULL

PROJEKCJE DLA POZIOMÓW EDUKACYJNYCH
====================================
Warstwa CHE.ATOM dostarcza 4 projekcje:

  forPrimary(symbol)     — E7: powłoki K/L/M/N, protony/neutrony/elektrony
  forSecondary(symbol,charge) — E8: konfiguracja pełna/skrócona, jony
  forHighSchool(symbol)  — LO: liczby kwantowe, orbitale, hybrydyzacja
  forUniversity(symbol)  — studia: jądro, termy, izotopy, ATOMIC_PROPS

Każda projekcja to widok TYCH SAMYCH danych źródłowych. Nie duplikuje
danych — filtruje je i formatuje dla poziomu.

=================================================================
KONWENCJE NAZEWNICZE
=================================================================

MODUŁY: mod-NN-nazwa-kebab
DANE (sekcje): SCREAMING_SNAKE_CASE (ELEMENTS_118, ISOTOPES, ATOMIC_PROPS)
SUBSTANCJE: klucz = formuła (HCl, H2O)
REAKCJE: camelCase (hclNaOH, znHcl)
API: CHE.MODUŁ.metoda (camelCase)
STAŁE: CHE.ENGINE.version, CHE.ENGINE.dataVersion
CSS: kebab-case z prefiksem (eu-, pd-, lab-, el-, at-, viz-)
BŁĘDY: CHE.E.KOD

=================================================================
KONTRAKT BŁĘDÓW
=================================================================
Nowe API zwraca:
  Sukces:  { ok: true, value: <dane> }
  Błąd:    { ok: false, error: { code, message, context } }

Konstruktory: CHE.OK(value), CHE.FAIL(code, message, context)

Stare API zachowuje dotychczasowe konwencje (NaN, null, {ok:...}).

=================================================================
ZASADY UTRZYMANIA
=================================================================
1. Nowa domena = nowy mod-NN.
2. Dane źródłowe tylko dla tego, czego nie da się wyliczyć.
3. Nowe funkcje publiczne: {ok, value} lub {ok:false, error}.
4. Object.freeze (deepFreeze) na sekcjach DATA.
5. Testy mają id (ATOM-001) i group ('atom').
6. Nagłówki modułów: 8 linii.
7. Nowy widok = VIEW.define, nie osobny <script> z lokalną bazą.
8. Audyt przed commitem: AUDIT.run().ok === true.
9. Jeśli moduł rośnie > 400 linii, rozważ podział.
10. Wizualizacje konsumują model, nie definiują chemii.

=================================================================
WERSJONOWANIE
=================================================================
ENGINE.version — cały silnik (2.48)
ENGINE.dataVersion — baza danych (2.17)
ENGINE.contractVersion — publiczne API (2.48)
ENGINE.schemaVersion — struktura envelope (2.12)
ENGINE.modules[nazwa] — wersja modułu

Zmiana danych/API/algorytmu = bump MINOR (+0.01).

=================================================================
CO PO v2.17 — KIERUNKI
=================================================================
- v2.17: kanoniczny graf CHE.STRUCTURE + grupy funkcyjne + walidacja + geometry API
- v2.17: CHE.TRANSFORM rozszerzenie reakcji jako transformacji grafu + bilans strukturalny
- v2.17: CHE.VIZ/VIEW — widoki 2D/3D oparte wyłącznie na modelu kanonicznym
- v2.17: CHE.ORGANIC — rezonans, tautomeria, izomeria strukturalna, E/Z, R/S, relacje stereo i konformery
- v2.17: CHE.GEOMETRY — wspólna geometria 2D/3D/VSEPR, źródła i walidacja
- v2.17: CHE.VISUAL — wspólne CV atomu/cząsteczki, wiązania, grupy funkcyjnej i reakcji
- v2.18: CHE.EDITOR — edycja kopii grafu, historia undo/redo, walidacja, grupy funkcyjne i reakcja z diffu
- v2.19: CHE.RECONSTRUCT — wzór z grafu, normalizacja ID, jawny wodór, mapping atomów i szablony transformacji
- v2.20: CHE.REACTIONSET — reakcje wieloskładnikowe, role, mapping i transfery
- v2.21: CHE.ORGANIC — rozszerzenie analizy grafu, równoważność, grupy, rezonans, tautomeria i stereo
- v2.18: edytor grafu i budowanie wzorów/reakcji
- v2.19: dane widm molekularnych IR/NMR/MS
- v2.17: pełniejsza kinetyka i mechanizmy
- v3.00: wspólne typy naukowe + interoperacyjność chemia/fizyka/biologia/matematyka
`;
function render(){ const el = document.getElementById('division-out'); if(el) el.textContent = text; }
function init(){ render(); }
E.DIVISION = { text:()=> text, render };
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
else init();
})(window);

} catch (err) {
  try { console.warn('[CHE module 75]', err && err.message ? err.message : err); } catch(_){}
}

