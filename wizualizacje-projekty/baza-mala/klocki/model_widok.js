/* model_widok.js — mostek: pozwala klockowi zapisać się w starym kontrakcie CHE.VIEW.define(id, {build(host)}) (modele z rozszerzenia.js).
   Każdy taki model staje się klockiem o tej samej nazwie (id) — bez silnika che-viz.js. Ładować przed plikiem modelu. */
(function () {
  var C = window.CHE = window.CHE || {};
  if (C.VIEW && C.VIEW.define) return;
  C.VIEW = {define: function (id, d) {
    KLOCKI.def(id, {opis: d.hint || d.title || id, domyslne: {}, html: function (host) { host.style.display = 'block'; d.build(host); }});
  }};
})();
