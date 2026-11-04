/* model_widok.js — mostek: pozwala klockowi zapisać się w starym kontrakcie CHE.VIEW.define(id, {build(host)}) (modele z rozszerzenia.js).
   Każdy taki model staje się klockiem o tej samej nazwie (id) — bez silnika che-viz.js. Ładować przed plikiem modelu. */
(function () {
  var C = window.CHE = window.CHE || {};
  function portCss() {   // minimalne style kontrolek dla modeli portowanych z visual-library (.r = rząd kontrolek, .note = opis pod rysunkiem)
    if (document.getElementById('che-port-css')) return;
    var st = document.createElement('style'); st.id = 'che-port-css';
    st.textContent = '.che-port .r{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;margin:8px 0;font-size:14px}' +
      '.che-port .r label{display:flex;gap:6px;align-items:center}.che-port .r input[type=range]{flex:1;min-width:140px;max-width:260px;accent-color:var(--accent,#0d6868)}' +
      '.che-port canvas{width:100%;display:block}' +
      '.che-port button{font:inherit;font-size:13px;padding:5px 11px;border:1px solid var(--border-strong,#94a3b8);border-radius:999px;background:var(--surface,#fff);color:inherit;cursor:pointer}' +
      '.che-port .note{font-size:13px;line-height:1.5;margin-top:6px;color:var(--text-muted,#5b6b73)}';
    document.head.appendChild(st);
  }
  if (C.VIEW && C.VIEW.define) return;
  C.VIEW = {define: function (id, d) {
    KLOCKI.def(id, {opis: d.hint || d.title || id, domyslne: {}, html: function (host) { host.style.display = 'block'; host.classList.add('che-port'); portCss(); d.build(host); }});
  }};
})();
