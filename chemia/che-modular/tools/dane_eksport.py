#!/usr/bin/env python3
"""dane_eksport.py — CHE.DATA z działającego silnika → czyste pliki JSON wg dziedzin.

Buduje lab (silnik.lab_html()), uruchamia go w Chromium i serializuje każdy klucz CHE.DATA.
Klucz trafia do dziedziny podmodułu sekcji, która go pierwsza tworzy (engine/registry/mapa_sekcji.json).
Wyjście: engine/src/dane/<dziedzina>.json + engine/src/dane/_indeks.json (klucz → dziedzina, sha1, czysty?).
Klucze z funkcjami / cyklami / undefined / NaN nie są „czyste” — zapisywane z oznaczeniami {"$fn": src} itd.
i flagą czysty=false (do ręcznego przejrzenia). Silnika NIE zmienia — to etap eksportu + weryfikacji.
  python3 tools/dane_eksport.py            # eksport
  python3 tools/dane_eksport.py --sprawdz  # tylko porównanie z istniejącymi plikami (sha1)
"""
import hashlib, json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
import silnik  # noqa: E402

OUT = ROOT / "engine/src/dane"
TMP = ROOT / "dist/_dane"
CZAS = re.compile(r'"\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?Z"')

SER = r"""() => {
 const D = (window.CHE && window.CHE.DATA) || {}; const out = {};
 function ser(v, seen, path) {
  if (v === undefined) return {"$undef": 1};
  if (typeof v === 'number' && !isFinite(v)) return {"$num": String(v)};
  if (typeof v === 'function') { flags.fn++; return {"$fn": String(v)}; }
  if (typeof v === 'bigint' || typeof v === 'symbol') { flags.inne++; return {"$inne": String(v)}; }
  if (v === null || typeof v !== 'object') return v;
  if (seen.has(v)) { flags.cykl++; return {"$ref": seen.get(v)}; }
  if (wid.has(v)) flags.wspolne++; else wid.add(v);
  if (v instanceof RegExp) { flags.inne++; return {"$re": String(v)}; }
  seen.set(v, path);
  let r;
  if (Array.isArray(v)) r = v.map((x, i) => ser(x, seen, path + '[' + i + ']'));
  else {
   const p = Object.getPrototypeOf(v);
   if (p !== Object.prototype && p !== null) { flags.inne++; }
   r = {}; for (const k of Object.keys(v)) r[k] = ser(v[k], seen, path + '.' + k);
  }
  seen.delete(v); return r;
 }
 let flags, wid;
 for (const k of Object.keys(D)) {
  flags = {fn: 0, cykl: 0, inne: 0, wspolne: 0}; wid = new Set();
  let val; try { val = ser(D[k], new Map(), k); } catch (e) { val = {"$blad": String(e)}; flags.inne++; }
  out[k] = {v: val, f: flags};
 }
 return out;
}"""


def uruchom():
    TMP.mkdir(parents=True, exist_ok=True)
    html = TMP / "lab.html"
    html.write_text(silnik.lab_html(), encoding="utf-8")
    js = ("const pw=require('playwright');(async()=>{const b=await pw.chromium.launch();const p=await b.newPage();"
          "await p.route(/^https?:/,r=>r.abort());await p.goto('file://'+process.argv[2]);await p.waitForTimeout(4000);"
          "const m=await p.evaluate(" + SER + ");require('fs').writeFileSync(process.argv[3],JSON.stringify(m));await b.close()})();")
    jsf = TMP / "dane.cjs"
    jsf.write_text(js)
    raw = TMP / "dane.json"
    subprocess.run(["node", str(jsf), str(html), str(raw)], check=True, cwd=ROOT / "tools")
    return json.loads(raw.read_text(encoding="utf-8"))


def dziedzina_kluczy():
    m = json.loads((ROOT / "engine/registry/mapa_sekcji.json").read_text(encoding="utf-8"))
    pierwsza = {}
    for plik, v in m.items():  # kolejność sekcji = kolejność w mapie
        for k in v["data"]:
            pierwsza.setdefault(k, plik.split("/")[1])
    return pierwsza


def sha(v):
    return hashlib.sha1(json.dumps(v, ensure_ascii=False, sort_keys=True).encode()).hexdigest()[:12]


def main():
    sprawdz = "--sprawdz" in sys.argv
    dane = uruchom()
    dz = dziedzina_kluczy()
    pliki, indeks = {}, {}
    for k, x in dane.items():
        d = dz.get(k, "inne")
        js = json.dumps(x["v"], ensure_ascii=False)
        js2, n = CZAS.subn('"$czas"', js)
        if n:  # znaczniki czasu tworzone przy starcie silnika — klucz generowany w locie
            x["v"], x["f"]["czas"] = json.loads(js2), n
        czysty = not (x["f"]["fn"] or x["f"]["cykl"] or x["f"]["inne"]) and "$undef" not in json.dumps(x["v"]) and "$num" not in json.dumps(x["v"])
        pliki.setdefault(d, {})[k] = x["v"]
        indeks[k] = {"dziedzina": d, "sha1": sha(x["v"]), "czysty": czysty, **({"flagi": {a: b for a, b in x["f"].items() if b}} if any(x["f"].values()) else {})}
    if sprawdz:
        stary = json.loads((OUT / "_indeks.json").read_text(encoding="utf-8"))
        rozne = [k for k in indeks if stary.get(k, {}).get("sha1") != indeks[k]["sha1"]]
        brak = [k for k in stary if k not in indeks]
        print(f"klucze: {len(indeks)}; różne: {len(rozne)} {rozne[:10]}; brak w silniku: {brak[:10]}")
        sys.exit(1 if rozne or brak else 0)
    OUT.mkdir(parents=True, exist_ok=True)
    for d, obj in sorted(pliki.items()):
        (OUT / f"{d}.json").write_text(json.dumps(obj, ensure_ascii=False, indent=1), encoding="utf-8")
    (OUT / "_indeks.json").write_text(json.dumps(indeks, ensure_ascii=False, indent=1, sort_keys=True), encoding="utf-8")
    n_cz = sum(v["czysty"] for v in indeks.values())
    print(f"klucze CHE.DATA: {len(indeks)}, czyste: {n_cz}, z funkcjami/cyklami: {len(indeks) - n_cz}")
    for d, obj in sorted(pliki.items()):
        print(f"  {d}: {len(obj)} kluczy, {(OUT / f'{d}.json').stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
