
(function(){
'use strict';
const C=window.CHE=window.CHE||{};
const R=C.REACTION||{};
const CM=C.CHARACTER_MIGRATION||{};
function lookup(eq){return CM.reactionByText?CM.reactionByText(eq):null;}
const old=C.LEGACY_WIDGETS?.charSim;
if(!old || !C.define) return;

})();
