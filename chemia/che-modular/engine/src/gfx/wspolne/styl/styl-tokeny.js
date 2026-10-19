/* styl-tokeny — jedna paleta i miary rysunków (chemia, biologia, fizyka). Kolor = znaczenie, nie dekoracja.
   Użycie w canvasie/SVG:
     CHE.GFX.STYL.kolor('ok')              → '#2e7d4f' (jasny) / '#7cc592' (ciemny motyw)
     CHE.GFX.STYL.rgba('blad', .4)         → 'rgba(184,58,69,.4)'
     CHE.GFX.STYL.linia.kontur             → 2.5   (kontur naczyń i ramek)
   Wartości czytane z tokenów CSS lekcji (--c-basic, --c-error, …), więc zmiana motywu działa sama;
   stałe poniżej to tylko zapas, gdy zmiennej brak. Kolory SUBSTANCJI (osady, roztwory, płomienie)
   zostają realistyczne i pochodzą z CHE.COLORS — nie z tej palety. */
(function (root) {
  var J = { tekst: '#1a2332', cichy: '#4a5568', linia: '#e5e9ee', liniaMocna: '#cdd5dd', tlo: '#ffffff', tloMiekkie: '#f6f8fa',
            akcent: '#0d6868', ok: '#2e7d4f', blad: '#b83a45', uwaga: '#b06f1c', info: '#2b5e9c', dodatek: '#6b3fa0', egzamin: '#a86a00', plus: '#dc2626', minus: '#2563eb' };
  var C = { tekst: '#e6ebf2', cichy: '#9aa6b6', linia: '#34404f', liniaMocna: '#46546a', tlo: '#0f141b', tloMiekkie: '#1b2430',
            akcent: '#5cc4c4', ok: '#7cc592', blad: '#e57a85', uwaga: '#e0a35a', info: '#8fb0e0', dodatek: '#b9a0e0', egzamin: '#e0b060', plus: '#f87171', minus: '#60a5fa' };
  var CSS = { tekst: '--text', cichy: '--text-soft', linia: '--border', liniaMocna: '--border-strong', tlo: '--surface', tloMiekkie: '--surface-soft',
              akcent: '--accent', ok: '--c-basic', blad: '--c-error', uwaga: '--c-warn', info: '--c-understand', dodatek: '--c-extra', egzamin: '--c-exam' };
  function ciemny() {
    if (typeof document === 'undefined') return false;
    var t = document.documentElement.dataset.theme;
    return t ? t === 'dark' : !!(root.matchMedia && root.matchMedia('(prefers-color-scheme:dark)').matches);
  }
  function kolor(n) {
    var d = ciemny(), v = '';
    if (!d && typeof document !== 'undefined' && root.getComputedStyle) v = root.getComputedStyle(document.documentElement).getPropertyValue(CSS[n] || '').trim();
    return v || (d ? C : J)[n] || n;
  }
  function rgba(n, a) {
    var h = kolor(n), m = /^#([0-9a-f]{6})$/i.exec(h);
    if (!m) return h;
    var x = parseInt(m[1], 16);
    return 'rgba(' + (x >> 16) + ',' + ((x >> 8) & 255) + ',' + (x & 255) + ',' + a + ')';
  }
  var api = {
    STYL: {
      kolor: kolor, rgba: rgba, ciemny: ciemny,
      szklo: { kontur: function () { return ciemny() ? '#b4c0d0' : '#7f8da0'; }, odblask: function () { return ciemny() ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.75)'; } },
      ciecz: { woda: [190, 225, 245], czysta: [225, 238, 245] },
      linia: { siatka: 1, cienka: 1.5, kontur: 2.5, akcent: 3 },
      font: { etykieta: '12px system-ui, sans-serif', wzor: '13px ui-monospace, Menlo, Consolas, monospace' },
      zasady: ['kolor niesie znaczenie (ok/błąd/uwaga/info; ładunek: plus czerwony, minus niebieski — wszędzie), nie ozdobę', 'kolory substancji realistyczne, tylko z CHE.COLORS',
               'linie: 1 siatka, 2,5 kontur, 3 akcent; końce okrągłe', 'etykiety 12 px, wzory monospace; indeksy Unicode',
               'każdy rysunek działa w jasnym i ciemnym motywie', 'opis słowny (@opis) obowiązkowy']
    }
  };
  root.CHE = root.CHE || {};
  root.CHE.GFX = Object.assign(root.CHE.GFX || {}, api);
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
