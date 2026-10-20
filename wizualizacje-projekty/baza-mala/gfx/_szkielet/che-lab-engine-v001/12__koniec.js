

try{C.LAB.syncFromEngine&&C.LAB.syncFromEngine();if(C.ENGINE&&C.ENGINE.modules)C.ENGINE.modules.LAB=C.LAB.version;if(C.ENGINE&&C.ENGINE.registry)C.ENGINE.registry.LAB={layer:'LAB',owner:'CHE.LAB',role:'zlewka modułowa + mostek DATA/COLORS/EQUIL',depends:['DATA','COLORS','EQUILIBRIUM']};console.info('[CHE.LAB v'+C.LAB.version+'] engineBound',C.LAB.engineBound);}catch(e){try{console.warn('[CHE.LAB sync]',e)}catch(_){}}
})(window);
