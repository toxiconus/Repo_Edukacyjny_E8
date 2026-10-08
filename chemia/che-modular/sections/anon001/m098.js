try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
D.SOURCE_REGISTRY=Object.assign({},D.SOURCE_REGISTRY||{},{
 CIAAW_AW_2024:{id:'CIAAW_AW_2024',name:'CIAAW Standard Atomic Weights 2024',url:'https://www.ciaaw.org/atomic-weights.htm',scope:'standard atomic weights / intervals / no-standard cases'},
 CIAAW_ISO_2024:{id:'CIAAW_ISO_2024',name:'CIAAW Isotopic Compositions 2024',url:'https://www.ciaaw.org/isotopic-abundances.htm',scope:'representative isotopic compositions'},
 NUBASE2020:{id:'NUBASE2020',name:'NUBASE2020',url:'https://amdc.impcas.ac.cn/web/nubase_en.html',scope:'nuclide masses, half-lives, decay, spin/parity'},
 NIST_WEBBOOK:{id:'NIST_WEBBOOK',name:'NIST Chemistry WebBook SRD 69',url:'https://webbook.nist.gov/chemistry/',scope:'thermochemistry, ion energetics and selected physical data'},
 NIST_ASD:{id:'NIST_ASD',name:'NIST Atomic Spectra Database',url:'https://physics.nist.gov/asd',scope:'atomic levels, wavelengths and ionization energies'},
 OPENSTAX_CHEMISTRY_2E:{id:'OPENSTAX_CHEMISTRY_2E',name:'OpenStax Chemistry 2e',url:'https://openstax.org/details/books/chemistry-2e',scope:'standard electrode potential table and stated standard-state conventions'}
});
C.SOURCE_REGISTRY={version:'2.66',get:id=>D.SOURCE_REGISTRY[id]||null,audit:()=>({sources:Object.keys(D.SOURCE_REGISTRY).length,allHaveId:Object.values(D.SOURCE_REGISTRY).every(x=>x&&x.id),allHaveScope:Object.values(D.SOURCE_REGISTRY).every(x=>x&&x.scope)})};
E.modules=E.modules||{};E.modules.SOURCE_REGISTRY='2.66';E.registry=E.registry||{};E.registry.SOURCE_REGISTRY={layer:'PROVENANCE',owner:'CHE.DATA.SOURCE_REGISTRY'};
})(window);

} catch (err) {
  try { console.warn('[CHE module 98]', err && err.message ? err.message : err); } catch(_){}
}

