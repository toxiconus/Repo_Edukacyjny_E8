# _anon_004 — mapa części (generowana: `node tools/opis_modulu.cjs engine/src/moduly/_anon_004`)

Części składają się (w kolejności `_kolejnosc.txt`) w moduł bajt w bajt — zmiana podziału nie zmienia silnika. Role: `_role.txt`.

| część | rola | rozmiar |
|---|---|---|
| `../../komponenty/atlas-gfx.js` | komponenty rysunków wspólne z lekcjami (CHE_GFX: atomBohr, orbitalCloud, isotopeBar, orbitalDiagram) | 18.9 KB |
| `01_dane-pierwiastkow.js` | dane atlasu (DB 118 pierwiastków, nazwy PL/EN, REDOX, kolejność podpowłok ORDER, fill() = konfiguracja e⁻, pozycje w PT, rodziny) | 24.0 KB |
| `02_stan-naglowek.js` | stan wybranego pierwiastka (state, isotopeData, elName), nagłówek, zmienne zoomu/budowania | 2.8 KB |
| `03_rys-bohr.js` | atom Bohra — stan, zoom, GEO, liczniki; rysuje CHE_GFX.atomBohr | 1.4 KB |
| `04_rys-poziomy-chmura.js` | diagram orbitali i chmura orbitalna — podsumowanie i wybór orbitalu; rysują CHE_GFX.orbitalDiagram / orbitalCloud | 1.5 KB |
| `05_wykresy-wlasciwosci.js` | energie jonizacji, promienie, radar, pH, izotopy, stopnie utlenienia, redoks, Slater | 13.8 KB |
| `06_notatki.js` | zakładka Notatki | 2.5 KB |
| `07_czasteczki-dane.js` | baza cząsteczek CD/X (+ CHE.DATA.MOLECULES), właściwości, porównywarka | 14.3 KB |
| `08_czasteczki-rysunki.js` | grupy funkcyjne, rysunki 2D/3D cząsteczek, widok | 9.6 KB |
| `09_scena-sterowanie.js` | tryby sceny i przyciski zoomu (#zi #zo #zr #zn #zs #pz) | 1.1 KB |
| `10_elektrony-lewis-stat.js` | konfiguracja elektronowa, wzór Lewisa, statystyki, kowalencja | 6.7 KB |
| `11_uklad-okresowy.js` | układ okresowy (go, buildPT, szuflada, mini-PT, mapa cieplna) | 6.6 KB |
| `12_katalog-lista.js` | katalog pierwiastków i substancji (filtry, sortowanie, pick, nawigacja, fakty) | 10.3 KB |
| `13_substancje-karta.js` | tryb substancji, karta danych (datasheet), materia (matl) | 13.3 KB |
| `14_hud-izotopy.js` | HUD, pasek izotopów (CHE_GFX.isotopeBar), klik na jądrze, jony (chgHtml) | 5.4 KB |
| `15_podpowiedzi-budowanie.js` | podpowiedzi (HINTS), reguła Madelunga, budowanie atomu krok po kroku | 10.5 KB |
| `16_all.js` | all() — odrysowanie wszystkiego | 0.4 KB |
| `17_most-che.js` | mostek do silnika CHE (opcjonalny: window.CHE?.) i panel diagnostyki labu | 15.4 KB |
| `18_petla-start.js` | start i pętla animacji | 0.2 KB |
| `19_poprawki-ui.js` | późniejsze nakładki UI (motyw, karta, zakładki, skróty, pamięć ustawień, porównania) | 19.2 KB |

## Zależności części

### ../../komponenty/atlas-gfx.js
- definiuje: —
- używa z innych części: 01_dane-pierwiastkow (COL, SH, sup, still, sym, CAP, ORDER, role); 02_stan-naglowek (zNuc); 04_rys-poziomy-chmura (zmCloud); 05_wykresy-wlasciwosci (ph, iso); 07_czasteczki-dane (lab, cur, X); 09_scena-sterowanie (zm)

### 01_dane-pierwiastkow.js
- definiuje: `still` `$` `sup` `K2C` `nodata` `DB` `NAMES` `REDOX` `ORDER` `CAP` `SH` `COL` `EXC` `fill` `srt` `strip` `add` `role` `SYM` `pos` `PM` `blk` `ENG` `STUB` `stub` `sym` `chg` `orb` `lang` `NMT` `SMT` `NGS` `eclass` `FAMS`
- używa z innych części: 02_stan-naglowek (E)
- z silnika (CHE): DATA, DATA.REDOX_POTENTIALS

### 02_stan-naglowek.js
- definiuje: `famOf` `gtxt` `E` `isotopeData` `state` `elName` `head` `zt` `zNuc` `tA` `lastTs` `GEO` `buildN` `buildT` `truncCfg` `viewC`
- używa z innych części: 01_dane-pierwiastkow (FAMS, pos, DB, sym, stub, fill, chg, strip, add, $, eclass, ORDER, …); 10_elektrony-lewis-stat (posviz, statsHtml, lewis, cov); 16_all (all)
- z silnika (CHE): ISOTOPE_VERIFIED_CANDIDATES
- DOM (id): hmeta hcfg pos stats lew cov ec-z ec-mass ec-sym ec-name ec-ions chsel

### 03_rys-bohr.js
- definiuje: `bohr`
- używa z innych części: 01_dane-pierwiastkow ($, ORDER, role, chg); 02_stan-naglowek (state, buildN, truncCfg, isotopeData, zNuc, zt, GEO); 09_scena-sterowanie (zm); 14_hud-izotopy (isoA); 15_podpowiedzi-budowanie (nl)
- DOM (id): bohr bohrinfo zr focus zs

### 04_rys-poziomy-chmura.js
- definiuje: `levels` `zmCloud` `cloud`
- używa z innych części: 01_dane-pierwiastkow (ORDER, role, COL, nodata, $, chg, orb); 02_stan-naglowek (state)
- DOM (id): lev levsum cloud orbname orbsel

### 05_wykresy-wlasciwosci.js
- definiuje: `lin` `ie` `rad` `radar` `ph` `iso` `ox` `redox` `slater`
- używa z innych części: 01_dane-pierwiastkow (nodata, srt, strip, role, COL, chg, DB, sym, sup, $, REDOX, ORDER); 02_stan-naglowek (state, E, isotopeData); 07_czasteczki-dane (cur, X, lab); 12_katalog-lista (items); 14_hud-izotopy (isoA); 16_all (all)
- DOM (id): ph sl

### 06_notatki.js
- definiuje: `notes`
- używa z innych części: 01_dane-pierwiastkow (ORDER, role, fill, sup, CAP); 02_stan-naglowek (state)

### 07_czasteczki-dane.js
- definiuje: `rs` `cup` `CD` `X` `EC` `ER` `molRows` `cprops` `cur` `rx` `ry` `drag` `spc` `lab` `spn` `cmpUI`
- używa z innych części: 01_dane-pierwiastkow (DB, K2C, $); 08_czasteczki-rysunki (fgSvg); 11_uklad-okresowy (go); 12_katalog-lista (spCls, curKind, pick); 13_substancje-karta (MOL, related, spEls)
- z silnika (CHE): DATA, DATA.MOLECULES
- DOM (id): clist cinfo

### 08_czasteczki-rysunki.js
- definiuje: `FGC` `ATC` `fgSvg` `shade` `mol2d` `mol3d` `vw`
- używa z innych części: 01_dane-pierwiastkow (DB, sym, still, $); 07_czasteczki-dane (X, EC, spn, drag, ry, rx, spc, lab, cur, CD, ER)
- DOM (id): cmpv

### 09_scena-sterowanie.js
- definiuje: `sm` `zm` `paused` `smode` `zin`
- używa z innych części: 01_dane-pierwiastkow ($, still); 02_stan-naglowek (zt, zNuc); 03_rys-bohr (bohr); 04_rys-poziomy-chmura (cloud, zmCloud)
- DOM (id): bohr cloud orbbox stage zi zo zr zn zs pz

### 10_elektrony-lewis-stat.js
- definiuje: `elec` `lewis` `posviz` `LG` `STATS` `statsHtml` `cov` `caps`
- używa z innych części: 01_dane-pierwiastkow (ORDER, role, $, COL, SH, eclass, chg, sym, pos, K2C, DB, sup, …); 02_stan-naglowek (state, E, famOf, isotopeData); 09_scena-sterowanie (smode); 16_all (all)
- DOM (id): rb roleskey shl bdg

### 11_uklad-okresowy.js
- definiuje: `hm` `HM` `go` `buildPT` `mist` `showPtInfo` `openDrawer` `closeDrawer` `heatGet` `renderMiniPT`
- używa z innych części: 01_dane-pierwiastkow (sym, chg, orb, $, SYM, pos, DB, blk, lang, stub, fill, ORDER, …); 02_stan-naglowek (elName, famOf); 07_czasteczki-dane (cur, CD); 12_katalog-lista (curKind, fi, SORTS, cSort, items); 13_substancje-karta (applyMode, spEls, E0); 16_all (all)
- DOM (id): pt ptb ptc ptl pt-info drawer drawer-bg pt-btn close-drawer mini-pt mini-cap

### 12_katalog-lista.js
- definiuje: `IC` `KIND` `KINDS` `SPCLS` `spM` `spDX` `valE` `reac` `stateAt` `NA` `spKind` `spCls` `_IT` `items` `SORTS` `GROUPS` `ORD` `nrm` `cSort` `cGrp` `cKind` `cQ` `sortFn` `sortVal` `curId` `curKind` `VIS` `isRel` `renderElementList` `pick` `stepSel` `fi` `fact`
- używa z innych części: 01_dane-pierwiastkow (DB, fill, SYM, eclass, stub, lang, FAMS, sym, $); 02_stan-naglowek (famOf, gtxt, elName, E, head); 05_wykresy-wlasciwosci (lin, ie); 07_czasteczki-dane (CD, cur); 11_uklad-okresowy (go, renderMiniPT, mist); 13_substancje-karta (spEls, applyMode, showTab); 14_hud-izotopy (hud)
- DOM (id): el-list kind c-sort c-grp drawer search-input fact-content next-fact-btn prev-btn next-btn lgb ie

### 13_substancje-karta.js
- definiuje: `spEls` `ELC` `spSvg` `related` `renderMols` `E0` `spHud` `spIso` `nucMode` `showTab` `applyMode` `_hud2` `datasheet` `ldt` `MC` `MR` `MOL` `matl`
- używa z innych części: 01_dane-pierwiastkow (sym, lang, $, DB, stub, NAMES, ORDER, REDOX, chg, sup, fill, SYM); 02_stan-naglowek (E, elName, isotopeData, zt, zNuc, state, gtxt); 05_wykresy-wlasciwosci (iso, redox, ie); 07_czasteczki-dane (CD, X, EC, cur, cmpUI); 08_czasteczki-rysunki (vw); 11_uklad-okresowy (go); 12_katalog-lista (curKind, spM, pick, spKind, IC, KIND, spCls); 14_hud-izotopy (isoA, hud)
- DOM (id): mols hud spiso

### 14_hud-izotopy.js
- definiuje: `isoA` `lastSym` `hud` `isoBar` `_hud` `chgHtml` `extra`
- używa z innych części: 01_dane-pierwiastkow (NAMES, sym, $, still, ORDER, role, SH, COL, sup, chg, CAP, srt, …); 02_stan-naglowek (state, isotopeData, famOf, zt, zNuc, GEO); 03_rys-bohr (bohr); 05_wykresy-wlasciwosci (ie, slater); 06_notatki (notes); 07_czasteczki-dane (rs, cur, cmpUI); 08_czasteczki-rysunki (vw); 09_scena-sterowanie (zm); 10_elektrony-lewis-stat (caps, elec); 11_uklad-okresowy (mist); 12_katalog-lista (fact); 13_substancje-karta (ldt, matl, datasheet)
- DOM (id): hud isobar fs bohr focus chgp mt ds sl nt

### 15_podpowiedzi-budowanie.js
- definiuje: `LSYM` `hintSel` `nl` `SL` `orbPl` `cfgS` `cfgByShell` `unpairedN` `byRole` `ionTag` `coreNote` `hctx` `HINTS` `subHint` `madel` `hints` `buildStop` `buildStep`
- używa z innych części: 01_dane-pierwiastkow (ORDER, sup, CAP, role, chg, fill, SYM, sym, COL, EXC, $, still); 02_stan-naglowek (state, gtxt, viewC, buildN, GEO, buildT, truncCfg); 03_rys-bohr (bohr); 07_czasteczki-dane (cur); 09_scena-sterowanie (sm, smode)
- DOM (id): madrow hchips hbody bld hintbar

### 16_all.js
- definiuje: `all`
- używa z innych części: 01_dane-pierwiastkow ($, still); 02_stan-naglowek (GEO, head); 03_rys-bohr (bohr); 04_rys-poziomy-chmura (levels, cloud); 05_wykresy-wlasciwosci (ie, rad, radar, ph, iso, ox, redox); 11_uklad-okresowy (renderMiniPT); 12_katalog-lista (renderElementList, fact); 14_hud-izotopy (extra); 15_podpowiedzi-budowanie (buildStop, hints)
- DOM (id): lev ie rad radar ph iso ox redox

### 17_most-che.js
- definiuje: —
- używa z innych części: 01_dane-pierwiastkow (sym, ENG, DB, fill, SYM, chg, strip, add, REDOX); 02_stan-naglowek (state, E, isotopeData); 05_wykresy-wlasciwosci (ie); 06_notatki (notes); 13_substancje-karta (datasheet); 14_hud-izotopy (isoA, extra)
- z silnika (CHE): DATA, ENGINE, DATA.ELEMENTS_118, DATA.ATOMIC_PROPS, DATA.ISOTOPES
- DOM (id): cp-iso cp-ph nt che-export-btn

### 18_petla-start.js
- definiuje: —
- używa z innych części: 01_dane-pierwiastkow ($, still); 02_stan-naglowek (tA, lastTs); 03_rys-bohr (bohr); 08_czasteczki-rysunki (vw); 09_scena-sterowanie (sm, paused); 12_katalog-lista (curKind); 13_substancje-karta (applyMode); 16_all (all)
- DOM (id): cmpv

### 19_poprawki-ui.js
- definiuje: `TG` `GP` `_ex40` `_ds41` `cmpSym`
- używa z innych części: 01_dane-pierwiastkow ($, sym, lang, still, SYM, eclass, chg, NAMES, DB, stub, EXC, CAP); 02_stan-naglowek (E, elName, state); 03_rys-bohr (bohr); 05_wykresy-wlasciwosci (iso, radar); 07_czasteczki-dane (cur, CD, cmpUI, lab); 08_czasteczki-rysunki (vw); 09_scena-sterowanie (zin, smode); 11_uklad-okresowy (go); 12_katalog-lista (curKind, stepSel, cQ, renderElementList); 13_substancje-karta (datasheet, showTab, renderMols, nucMode); 14_hud-izotopy (hud, isoA, extra); 15_podpowiedzi-budowanie (cfgByShell, cfgS, HINTS, hintSel, hints)
- DOM (id): mb-sym mb-name mb-sub mb-open mb-prev mb-next sheet-close sb-bg sidebar tabnav bohr ds iso search-input search-clear chgp stage hintbar hud orbbox radar stats q-res q-go q-in

