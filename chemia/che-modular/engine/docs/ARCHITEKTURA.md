# Architektura silnika + packera (rozwój wieloprzedmiotowy)

## Cel

Jeden silnik edukacyjny (CHEMIA → FIZYKA → …), z którego:

- **lab** ładuje wszystko (hub, audyty, wszystkie lekcje),
- **pack lekcji** bierze tylko domeny, dane, GFX i widoki zadeklarowane w manifeście,
- **nowe treści** (lekcja, tablica, efekt, model) wchodzą przez **rejestr**, nie przez kopiowanie monolitu.

## Warstwy

```
┌─────────────────────────────────────────────────────────┐
│  LEKCJE (N01, N02, FIZ01, …)  manifests / lessons.json  │
├─────────────────────────────────────────────────────────┤
│  DOMENY  oxides | acids | salts | electrostatics | …    │
│  (dane + logika + domyślne GFX + tablice)                 │
├─────────────────────────────────────────────────────────┤
│  ASSETY GFX                                              │
│  vessels[]  effects[]  scenes[]  models/views[]          │
│  pogrupowane: chem.glassware, phys.electro, common.ui    │
├─────────────────────────────────────────────────────────┤
│  TABLICE / ZALEŻNOŚCI                                    │
│  tables/index.json → źródło w CHE.DATA / FIZ / …         │
├─────────────────────────────────────────────────────────┤
│  RDZEŃ  CHE namespace, VIEW.mount, STANDALONE, theme     │
└─────────────────────────────────────────────────────────┘
```

## Rejestr (`engine/registry/`)

| Plik | Rola |
|------|------|
| `subjects.json` | Przedmioty: chemia, fizyka, (plan: bio, mat, geo) |
| `domains.json` | Domeny wiedzy → data keys, modules, views, gfx |
| `lessons.json` | Kontrakt lekcji: domains, visuals, vesselGroups, tables |
| `assets/vessels.json` | Naczynia + grupy (chem.glassware, phys.electro…) |
| `assets/effects.json` | Efekty + grupy (chem.reaction, common.ui…) |
| `assets/scenes.json` | Sceny pracowni + wymagane vessels/effects |
| `tables/index.json` | Metadane tablic fizykochemicznych |

## Jak dodać nową lekcję

1. Wpis w `lessons.json` (`code`, `subject`, `domains`, `visuals`, `vesselGroups`, `effectGroups`).
2. Treść HTML jako source module.
3. Nowe widoki → `VIEW.define` + id na liście `visuals`.
4. Nowe GFX → pozycja w `vessels` / `effects` / `scenes` (najlepiej w istniejącej **grupie**).
5. Nowe tablice → `tables/index.json` + dane w domenie.
6. `python3 tools/pack_lesson.py NOWY_KOD`

Packer **rozwiązuje** `vesselGroups` → listę id, `domains` → tagi sekcji anon001 + moduły katalogu.

## Jak dodać nowy przedmiot

1. Wpis w `subjects.json`.
2. Domeny w `domains.json` (nawet puste na start).
3. Grupy assetów z `subjects: ["nowy"]` lub `["*"]` dla common.
4. Pierwsza lekcja jak wyżej.

## Współdzielenie między przedmiotami

- **common.stage**, **common.ui** — scena i etykiety wszędzie.
- **atom** / układ okresowy — chemia + fizyka.
- Efekty `sparks` mogą być w `chem.heat` i `phys.electro` (to samo id, dwie grupy).
- Tablice z `subjects: ["chemia","fizyka"]` nie są duplikowane w packach — jedna definicja, wiele domen.

## Packer (jeden pipeline)

```
lessons.json[code]
  → domains[]     → modules + anon001 tags + tables
  → vesselGroups  → vessels allow-list
  → effectGroups  → effects allow-list
  → scenes[]      → sceneReg allow-list (+ domyślne z domen)
  → visuals[]     → VIEW.define filter
  → source        → treść lekcji
  → HTML pack
```

Lab = ten sam resolver z `include: "all"`.

## Ewolucja danych

- **Nie** trzymać „pełnej kopii DATA” w każdej lekcji.
- Manifest skanuje `data-rx`, `data-ox`, … i docelowo robi `pick(FULL, keys)`.
- Tablice w `tables/index.json` opisują **kontrakt**; implementacja może być w `CHE.DATA` albo w plikach `engine/src/data/<domain>.js`.

## Stan vs monolitu

| Element | Monolit dziś | Docelowo |
|---------|--------------|----------|
| Skrypty | 78 + 279 sekcji anon001 | te same, ale **adresowane rejestrem** |
| GFX | jeden lab-engine | grupy vessels/effects + sceny |
| Lekcje | source w HTML | lessons.json + pack |
| Przedmioty | chemia + FIZ ad hoc | subjects.json |
| Tablice | rozproszone w DATA | tables/index.json |

## Zasada projektowa

> **Rejestr jest źródłem prawdy o zależnościach; kod jest źródłem prawdy o zachowaniu.**

Packer i lab czytają ten sam rejestr. Nowa treść = nowy wpis rejestru + plik kodu, bez puchnięcia „wszystko albo nic”.
