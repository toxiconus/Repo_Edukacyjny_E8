

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DATA = C.DATA || {};
D.ATOMIC_SPECTRA = {
  H:{
    series:['Lyman','Balmer','Paschen','Brackett','Pfund'],
    lines:[
      {series:'Lyman',n1:1,n2:2,wavelength:121.567,energy:10.20,region:'UV'},
      {series:'Lyman',n1:1,n2:3,wavelength:102.572,energy:12.09,region:'UV'},
      {series:'Lyman',n1:1,n2:4,wavelength:97.254,energy:12.75,region:'UV'},
      {series:'Balmer',n1:2,n2:3,wavelength:656.28,energy:1.89,region:'visible',color:'czerwony'},
      {series:'Balmer',n1:2,n2:4,wavelength:486.13,energy:2.55,region:'visible',color:'niebieskozielony'},
      {series:'Balmer',n1:2,n2:5,wavelength:434.05,energy:2.86,region:'visible',color:'niebieski'},
      {series:'Balmer',n1:2,n2:6,wavelength:410.17,energy:3.03,region:'visible',color:'fioletowy'},
      {series:'Balmer',n1:2,n2:7,wavelength:397.00,energy:3.12,region:'near-UV',color:'fioletowy'},
      {series:'Paschen',n1:3,n2:4,wavelength:1875.1,energy:0.66,region:'IR'},
      {series:'Paschen',n1:3,n2:5,wavelength:1281.8,energy:0.97,region:'IR'},
      {series:'Brackett',n1:4,n2:5,wavelength:4051.2,energy:0.31,region:'IR'},
      {series:'Pfund',n1:5,n2:6,wavelength:7460,energy:0.17,region:'IR'}
    ]
  },
  He:{
    lines:[
      {wavelength:587.6,color:'żółty',transition:'3d→2p',intensity:1.0},
      {wavelength:501.6,color:'zielony',transition:'3p→2s',intensity:0.5},
      {wavelength:471.3,color:'niebieski',transition:'4s→2p',intensity:0.3},
      {wavelength:667.8,color:'czerwony',transition:'3d→2p',intensity:0.8}
    ]
  },
  Na:{
    lines:[
      {wavelength:589.00,color:'żółty',transition:'3p→3s',intensity:1.0},
      {wavelength:589.59,color:'żółty',transition:'3p→3s',intensity:1.0},
      {wavelength:818.3,color:'bliskie IR',transition:'3d→3p',intensity:0.4}
    ]
  },
  Li:{
    lines:[
      {wavelength:670.8,color:'czerwony',transition:'2p→2s',intensity:1.0},
      {wavelength:610.4,color:'pomarańczowy',transition:'3d→2p',intensity:0.3}
    ]
  },
  Hg:{
    lines:[
      {wavelength:253.65,color:'UV',transition:'6p→6s',intensity:1.0},
      {wavelength:404.66,color:'fioletowy',transition:'7s→6p',intensity:0.5},
      {wavelength:435.83,color:'niebieski',transition:'7s→6p',intensity:0.7},
      {wavelength:546.07,color:'zielony',transition:'7p→6d',intensity:1.0},
      {wavelength:578.97,color:'żółty',transition:'6d→6p',intensity:0.8}
    ]
  },
  RYDBERG:{ constant:1.0973731568160e7, unit:'1/m', note:'stała Rydberga dla wodoru' }
};
C.deepFreeze(D.ATOMIC_SPECTRA);
})(window);

} catch (err) {
  try { console.warn('[CHE module 9]', err && err.message ? err.message : err); } catch(_){}
}