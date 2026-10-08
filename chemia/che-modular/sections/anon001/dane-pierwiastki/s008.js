

try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DATA = C.DATA || {};
D.ISOTOPES = {
  H:[
    { A:1, name:'prot', atomicMass:1.007825, abundance:0.99985, stable:true, nuclearSpin:0.5, magneticMoment:2.7928 },
    { A:2, name:'deuter', atomicMass:2.014102, abundance:0.00015, stable:true, nuclearSpin:1.0, magneticMoment:0.8574, applications:['NMR','reaktory'] },
    { A:3, name:'tryt', atomicMass:3.016049, abundance:0, stable:false, halfLife:'12.32 roku', decayMode:'beta-', daughter:'He-3', nuclearSpin:0.5, applications:['datowanie','znacznik'] }
  ],
  He:[
    { A:3, atomicMass:3.016029, abundance:0.000002, stable:true, nuclearSpin:0.5 },
    { A:4, atomicMass:4.002603, abundance:0.999998, stable:true, nuclearSpin:0 },
    { A:6, atomicMass:6.018889, abundance:0, stable:false, halfLife:'806 ms', decayMode:'beta-', daughter:'Li-6' }
  ],
  Li:[
    { A:6, atomicMass:6.015123, abundance:0.0759, stable:true, nuclearSpin:1 },
    { A:7, atomicMass:7.016004, abundance:0.9241, stable:true, nuclearSpin:1.5 }
  ],
  C:[
    { A:12, atomicMass:12.000000, abundance:0.9893, stable:true, nuclearSpin:0 },
    { A:13, atomicMass:13.003355, abundance:0.0107, stable:true, nuclearSpin:0.5, applications:['NMR','znacznik'] },
    { A:14, atomicMass:14.003242, abundance:0, stable:false, halfLife:'5730 lat', decayMode:'beta-', daughter:'N-14', applications:['datowanie radiowęglowe'] }
  ],
  N:[
    { A:14, atomicMass:14.003074, abundance:0.99636, stable:true, nuclearSpin:1 },
    { A:15, atomicMass:15.000109, abundance:0.00364, stable:true, nuclearSpin:0.5, applications:['NMR','znacznik'] }
  ],
  O:[
    { A:16, atomicMass:15.994915, abundance:0.99757, stable:true, nuclearSpin:0 },
    { A:17, atomicMass:16.999132, abundance:0.00038, stable:true, nuclearSpin:2.5 },
    { A:18, atomicMass:17.999160, abundance:0.00205, stable:true, nuclearSpin:0, applications:['paleoklimat'] }
  ],
  Na:[
    { A:23, atomicMass:22.989770, abundance:1.0, stable:true, nuclearSpin:1.5, applications:['NMR'] },
    { A:24, atomicMass:23.990963, abundance:0, stable:false, halfLife:'15 h', decayMode:'beta-' }
  ],
  P:[
    { A:31, atomicMass:30.973762, abundance:1.0, stable:true, nuclearSpin:0.5, applications:['NMR'] },
    { A:32, atomicMass:31.973907, abundance:0, stable:false, halfLife:'14.27 dnia', decayMode:'beta-', applications:['znacznik'] }
  ],
  S:[
    { A:32, atomicMass:31.972071, abundance:0.9499, stable:true, nuclearSpin:0 },
    { A:33, atomicMass:32.971459, abundance:0.0075, stable:true, nuclearSpin:1.5 },
    { A:34, atomicMass:33.967867, abundance:0.0425, stable:true, nuclearSpin:0 },
    { A:36, atomicMass:35.967081, abundance:0.0001, stable:true, nuclearSpin:0 }
  ],
  Cl:[
    { A:35, atomicMass:34.968853, abundance:0.7576, stable:true, nuclearSpin:1.5 },
    { A:37, atomicMass:36.965903, abundance:0.2424, stable:true, nuclearSpin:1.5 }
  ],
  K:[
    { A:39, atomicMass:38.963707, abundance:0.93258, stable:true, nuclearSpin:1.5 },
    { A:40, atomicMass:39.963999, abundance:0.000117, stable:false, halfLife:'1.25e9 lat', decayMode:'beta-', applications:['datowanie'] },
    { A:41, atomicMass:40.961826, abundance:0.06730, stable:true, nuclearSpin:1.5 }
  ],
  Ca:[
    { A:40, atomicMass:39.962591, abundance:0.96941, stable:true, nuclearSpin:0 },
    { A:44, atomicMass:43.955482, abundance:0.02086, stable:true, nuclearSpin:0 }
  ],
  Fe:[
    { A:54, atomicMass:53.939611, abundance:0.05845, stable:true, nuclearSpin:0 },
    { A:56, atomicMass:55.934938, abundance:0.91754, stable:true, nuclearSpin:0 },
    { A:57, atomicMass:56.935394, abundance:0.02119, stable:true, nuclearSpin:0.5 }
  ],
  Cu:[
    { A:63, atomicMass:62.929601, abundance:0.6915, stable:true, nuclearSpin:1.5 },
    { A:65, atomicMass:64.927794, abundance:0.3085, stable:true, nuclearSpin:1.5 }
  ],
  I:[
    { A:127, atomicMass:126.904473, abundance:1.0, stable:true, nuclearSpin:2.5 },
    { A:131, atomicMass:130.906126, abundance:0, stable:false, halfLife:'8.02 dnia', decayMode:'beta-', applications:['medycyna nuklearna'] }
  ],
  Cs:[
    { A:133, atomicMass:132.905447, abundance:1.0, stable:true, nuclearSpin:3.5 },
    { A:137, atomicMass:136.907090, abundance:0, stable:false, halfLife:'30.17 lat', decayMode:'beta-', applications:['skażenie','wzorzec czasu'] }
  ],
  U:[
    { A:234, atomicMass:234.040952, abundance:0.000054, stable:false, halfLife:'245500 lat', decayMode:'alpha' },
    { A:235, atomicMass:235.043930, abundance:0.007204, stable:false, halfLife:'7.04e8 lat', decayMode:'alpha', applications:['reaktory','broń'] },
    { A:238, atomicMass:238.050788, abundance:0.992742, stable:false, halfLife:'4.468e9 lat', decayMode:'alpha', applications:['datowanie','reaktory'] }
  ],
  Mg:[
    { A:24, atomicMass:23.985042, abundance:0.7899, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:25, atomicMass:24.985837, abundance:0.1000, stable:true, nuclearSpin:2.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:26, atomicMass:25.982593, abundance:0.1101, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Al:[
    { A:27, atomicMass:26.981539, abundance:1.0, stable:true, nuclearSpin:2.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Si:[
    { A:28, atomicMass:27.976927, abundance:0.9223, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:29, atomicMass:28.976495, abundance:0.0467, stable:true, nuclearSpin:0.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:30, atomicMass:29.973770, abundance:0.0310, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Ne:[
    { A:20, atomicMass:19.992440, abundance:0.9048, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:21, atomicMass:20.993846, abundance:0.0027, stable:true, nuclearSpin:1.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:22, atomicMass:21.991385, abundance:0.0925, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Ar:[
    { A:36, atomicMass:35.967546, abundance:0.00337, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:38, atomicMass:37.962732, abundance:0.00063, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:40, atomicMass:39.962383, abundance:0.99600, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Br:[
    { A:79, atomicMass:78.918337, abundance:0.5065, stable:true, nuclearSpin:1.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:81, atomicMass:80.916291, abundance:0.4935, stable:true, nuclearSpin:1.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Zn:[
    { A:64, atomicMass:63.929142, abundance:0.4915, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:66, atomicMass:65.926034, abundance:0.2773, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:67, atomicMass:66.927129, abundance:0.0404, stable:true, nuclearSpin:2.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:68, atomicMass:67.924845, abundance:0.1845, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:70, atomicMass:69.925325, abundance:0.0061, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Ag:[
    { A:107, atomicMass:106.905097, abundance:0.5184, stable:true, nuclearSpin:0.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:109, atomicMass:108.904752, abundance:0.4816, stable:true, nuclearSpin:0.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Ba:[
    { A:130, atomicMass:129.906320, abundance:0.0011, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:132, atomicMass:131.905061, abundance:0.0010, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:134, atomicMass:133.904508, abundance:0.0242, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:135, atomicMass:134.905688, abundance:0.0659, stable:true, nuclearSpin:1.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:136, atomicMass:135.904570, abundance:0.0785, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:137, atomicMass:136.905827, abundance:0.1123, stable:true, nuclearSpin:1.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:138, atomicMass:137.905242, abundance:0.7170, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ],
  Pb:[
    { A:204, atomicMass:203.973043, abundance:0.0140, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:206, atomicMass:205.974465, abundance:0.2410, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:207, atomicMass:206.975896, abundance:0.2210, stable:true, nuclearSpin:0.5, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' },
    { A:208, atomicMass:207.976652, abundance:0.5240, stable:true, nuclearSpin:0, source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' }
  ]
};
const fallbackFeed = {
  B:[{A:10,atomicMass:10.012937,abundance:19.9,stable:true,nuclearSpin:3},{A:11,atomicMass:11.009305,abundance:80.1,stable:true,nuclearSpin:1.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Be:[{A:9,atomicMass:9.012183,abundance:100,stable:true,nuclearSpin:1.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  F:[{A:19,atomicMass:18.998403,abundance:100,stable:true,nuclearSpin:0.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Kr:[{A:78,atomicMass:77.920386,abundance:0.3553,stable:true,nuclearSpin:0},{A:80,atomicMass:79.916378,abundance:2.286,stable:true,nuclearSpin:0},{A:82,atomicMass:81.913485,abundance:11.593,stable:true,nuclearSpin:0},{A:83,atomicMass:82.914136,abundance:11.5,stable:true,nuclearSpin:4.5},{A:84,atomicMass:83.911507,abundance:57.0,stable:true,nuclearSpin:0},{A:86,atomicMass:85.910610,abundance:17.3,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Rb:[{A:85,atomicMass:84.911789,abundance:72.17,stable:true,nuclearSpin:2.5},{A:87,atomicMass:86.909183,abundance:27.83,stable:true,nuclearSpin:1.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Sr:[{A:84,atomicMass:83.913425,abundance:0.56,stable:true,nuclearSpin:0},{A:86,atomicMass:85.909262,abundance:9.86,stable:true,nuclearSpin:0},{A:87,atomicMass:86.908879,abundance:7.0,stable:true,nuclearSpin:4.5},{A:88,atomicMass:87.905614,abundance:82.58,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Y:[{A:89,atomicMass:88.905848,abundance:100,stable:true,nuclearSpin:0.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Zr:[{A:90,atomicMass:89.904704,abundance:51.45,stable:true,nuclearSpin:0},{A:91,atomicMass:90.905645,abundance:11.22,stable:true,nuclearSpin:2.5},{A:92,atomicMass:91.905040,abundance:17.15,stable:true,nuclearSpin:0},{A:94,atomicMass:93.906316,abundance:17.38,stable:true,nuclearSpin:0},{A:96,atomicMass:95.908273,abundance:2.80,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Nb:[{A:93,atomicMass:92.906378,abundance:100,stable:true,nuclearSpin:9/2,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Mo:[{A:92,atomicMass:91.906810,abundance:14.84,stable:true,nuclearSpin:0},{A:94,atomicMass:93.905087,abundance:9.25,stable:true,nuclearSpin:0},{A:95,atomicMass:94.905840,abundance:15.92,stable:true,nuclearSpin:2.5},{A:96,atomicMass:95.904676,abundance:16.68,stable:true,nuclearSpin:0},{A:97,atomicMass:96.906020,abundance:9.55,stable:true,nuclearSpin:2.5},{A:98,atomicMass:97.905406,abundance:24.13,stable:true,nuclearSpin:0},{A:100,atomicMass:99.907477,abundance:9.63,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Ru:[{A:96,atomicMass:95.907598,abundance:5.52,stable:true,nuclearSpin:0},{A:98,atomicMass:97.905287,abundance:1.88,stable:true,nuclearSpin:0},{A:99,atomicMass:98.905939,abundance:12.7,stable:true,nuclearSpin:3/2},{A:100,atomicMass:99.904220,abundance:12.6,stable:true,nuclearSpin:0},{A:101,atomicMass:100.905582,abundance:17.0,stable:true,nuclearSpin:5/2},{A:102,atomicMass:101.904348,abundance:31.6,stable:true,nuclearSpin:0},{A:104,atomicMass:103.905430,abundance:18.7,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Rh:[{A:103,atomicMass:102.905503,abundance:100,stable:true,nuclearSpin:0.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Pd:[{A:102,atomicMass:101.905608,abundance:1.02,stable:true,nuclearSpin:0},{A:104,atomicMass:103.904035,abundance:11.14,stable:true,nuclearSpin:0},{A:105,atomicMass:104.905084,abundance:22.33,stable:true,nuclearSpin:2.5},{A:106,atomicMass:105.903483,abundance:27.33,stable:true,nuclearSpin:0},{A:108,atomicMass:107.903892,abundance:26.46,stable:true,nuclearSpin:0},{A:110,atomicMass:109.905153,abundance:11.72,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Cd:[{A:106,atomicMass:105.906459,abundance:1.25,stable:true,nuclearSpin:0},{A:108,atomicMass:107.904184,abundance:0.89,stable:true,nuclearSpin:0},{A:110,atomicMass:109.903005,abundance:12.49,stable:true,nuclearSpin:0},{A:111,atomicMass:110.904182,abundance:12.8,stable:true,nuclearSpin:0.5},{A:112,atomicMass:111.902757,abundance:24.13,stable:true,nuclearSpin:0},{A:113,atomicMass:112.904401,abundance:12.22,stable:true,nuclearSpin:0.5},{A:114,atomicMass:113.903358,abundance:28.73,stable:true,nuclearSpin:0},{A:116,atomicMass:115.904756,abundance:7.49,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  In:[{A:113,atomicMass:112.904058,abundance:4.29,stable:true,nuclearSpin:4.5},{A:115,atomicMass:114.903878,abundance:95.71,stable:true,nuclearSpin:4.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Sn:[{A:112,atomicMass:111.904822,abundance:0.97,stable:true,nuclearSpin:0},{A:114,atomicMass:113.902779,abundance:0.66,stable:true,nuclearSpin:0},{A:115,atomicMass:114.903342,abundance:0.34,stable:true,nuclearSpin:0.5},{A:116,atomicMass:115.901744,abundance:14.54,stable:true,nuclearSpin:0},{A:117,atomicMass:116.902954,abundance:7.68,stable:true,nuclearSpin:1.5},{A:118,atomicMass:117.901606,abundance:24.22,stable:true,nuclearSpin:0},{A:119,atomicMass:118.903309,abundance:8.59,stable:true,nuclearSpin:0.5},{A:120,atomicMass:119.902197,abundance:32.58,stable:true,nuclearSpin:0},{A:122,atomicMass:121.903440,abundance:4.63,stable:true,nuclearSpin:0},{A:124,atomicMass:123.905274,abundance:5.79,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Sb:[{A:121,atomicMass:120.903818,abundance:57.21,stable:true,nuclearSpin:2.5},{A:123,atomicMass:122.904216,abundance:42.79,stable:true,nuclearSpin:3.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Te:[{A:120,atomicMass:119.904020,abundance:0.09,stable:true,nuclearSpin:0},{A:122,atomicMass:121.903047,abundance:2.55,stable:true,nuclearSpin:0},{A:123,atomicMass:122.904273,abundance:0.89,stable:true,nuclearSpin:1.5},{A:124,atomicMass:123.902819,abundance:4.74,stable:true,nuclearSpin:0},{A:125,atomicMass:124.904430,abundance:7.07,stable:true,nuclearSpin:1.5},{A:126,atomicMass:125.903312,abundance:18.84,stable:true,nuclearSpin:0},{A:128,atomicMass:127.904463,abundance:31.74,stable:true,nuclearSpin:0},{A:130,atomicMass:129.906224,abundance:34.08,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Xe:[{A:124,atomicMass:123.905893,abundance:0.095,stable:true,nuclearSpin:0},{A:126,atomicMass:125.904269,abundance:0.089,stable:true,nuclearSpin:0},{A:128,atomicMass:127.903530,abundance:1.91,stable:true,nuclearSpin:0},{A:129,atomicMass:128.904779,abundance:26.4,stable:true,nuclearSpin:0.5},{A:130,atomicMass:129.903508,abundance:4.07,stable:true,nuclearSpin:0},{A:131,atomicMass:130.905082,abundance:21.23,stable:true,nuclearSpin:1.5},{A:132,atomicMass:131.904153,abundance:26.91,stable:true,nuclearSpin:0},{A:134,atomicMass:133.905395,abundance:10.44,stable:true,nuclearSpin:0},{A:136,atomicMass:135.907220,abundance:8.86,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  La:[{A:138,atomicMass:137.907110,abundance:0.09,stable:true,nuclearSpin:5},{A:139,atomicMass:138.906348,abundance:99.91,stable:true,nuclearSpin:7/2,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Ce:[{A:140,atomicMass:139.905442,abundance:88.48,stable:true,nuclearSpin:0},{A:142,atomicMass:141.909249,abundance:11.08,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Pr:[{A:141,atomicMass:140.907657,abundance:100,stable:true,nuclearSpin:2.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Nd:[{A:142,atomicMass:141.907731,abundance:27.2,stable:true,nuclearSpin:0},{A:143,atomicMass:142.909817,abundance:12.2,stable:true,nuclearSpin:3.5},{A:144,atomicMass:143.910087,abundance:23.8,stable:true,nuclearSpin:0},{A:145,atomicMass:144.912569,abundance:8.3,stable:true,nuclearSpin:3.5},{A:146,atomicMass:145.913116,abundance:17.2,stable:true,nuclearSpin:0},{A:148,atomicMass:147.916891,abundance:5.7,stable:true,nuclearSpin:0},{A:150,atomicMass:149.920892,abundance:5.6,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Sm:[{A:144,atomicMass:143.911999,abundance:3.1,stable:true,nuclearSpin:0},{A:147,atomicMass:146.914904,abundance:14.99,stable:true,nuclearSpin:3.5},{A:148,atomicMass:147.914822,abundance:11.24,stable:true,nuclearSpin:0},{A:149,atomicMass:148.917184,abundance:13.82,stable:true,nuclearSpin:3.5},{A:150,atomicMass:149.917275,abundance:7.38,stable:true,nuclearSpin:0},{A:152,atomicMass:151.919741,abundance:26.75,stable:true,nuclearSpin:0},{A:154,atomicMass:153.922209,abundance:22.75,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Eu:[{A:151,atomicMass:150.919850,abundance:47.8,stable:true,nuclearSpin:2.5},{A:153,atomicMass:152.921230,abundance:52.2,stable:true,nuclearSpin:2.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Gd:[{A:152,atomicMass:151.919789,abundance:0.20,stable:true,nuclearSpin:0},{A:154,atomicMass:153.920874,abundance:2.18,stable:true,nuclearSpin:0},{A:155,atomicMass:154.922630,abundance:14.8,stable:true,nuclearSpin:1.5},{A:156,atomicMass:155.922125,abundance:20.47,stable:true,nuclearSpin:0},{A:157,atomicMass:156.923967,abundance:15.65,stable:true,nuclearSpin:1.5},{A:158,atomicMass:157.924410,abundance:24.84,stable:true,nuclearSpin:0},{A:160,atomicMass:159.927054,abundance:21.86,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Tb:[{A:159,atomicMass:158.925350,abundance:100,stable:true,nuclearSpin:1.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Dy:[{A:156,atomicMass:155.924282,abundance:0.056,stable:true,nuclearSpin:0},{A:158,atomicMass:157.924409,abundance:0.095,stable:true,nuclearSpin:0},{A:160,atomicMass:159.925197,abundance:2.329,stable:true,nuclearSpin:0},{A:161,atomicMass:160.926933,abundance:18.889,stable:true,nuclearSpin:2.5},{A:162,atomicMass:161.926798,abundance:25.475,stable:true,nuclearSpin:0},{A:163,atomicMass:162.928731,abundance:24.896,stable:true,nuclearSpin:3.5},{A:164,atomicMass:163.929175,abundance:28.260,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Ho:[{A:165,atomicMass:164.930330,abundance:100,stable:true,nuclearSpin:3.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Er:[{A:162,atomicMass:161.928787,abundance:0.139,stable:true,nuclearSpin:0},{A:164,atomicMass:163.929175,abundance:1.601,stable:true,nuclearSpin:0},{A:166,atomicMass:165.930293,abundance:33.503,stable:true,nuclearSpin:0},{A:167,atomicMass:166.932048,abundance:22.869,stable:true,nuclearSpin:3.5},{A:168,atomicMass:167.932370,abundance:26.978,stable:true,nuclearSpin:0},{A:170,atomicMass:169.935460,abundance:14.910,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Tm:[{A:169,atomicMass:168.934218,abundance:100,stable:true,nuclearSpin:0.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Yb:[{A:168,atomicMass:167.933897,abundance:0.13,stable:true,nuclearSpin:0},{A:170,atomicMass:169.934761,abundance:3.04,stable:true,nuclearSpin:0},{A:171,atomicMass:170.936325,abundance:14.28,stable:true,nuclearSpin:0.5},{A:172,atomicMass:171.936378,abundance:21.83,stable:true,nuclearSpin:0},{A:173,atomicMass:172.938210,abundance:16.13,stable:true,nuclearSpin:2.5},{A:174,atomicMass:173.938861,abundance:31.83,stable:true,nuclearSpin:0},{A:176,atomicMass:175.942571,abundance:12.76,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Lu:[{A:175,atomicMass:174.940771,abundance:97.41,stable:true,nuclearSpin:7/2},{A:176,atomicMass:175.942694,abundance:2.59,stable:true,nuclearSpin:7,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Hf:[{A:174,atomicMass:173.940046,abundance:0.16,stable:true,nuclearSpin:0},{A:176,atomicMass:175.941408,abundance:5.26,stable:true,nuclearSpin:0},{A:177,atomicMass:176.943221,abundance:18.6,stable:true,nuclearSpin:3.5},{A:178,atomicMass:177.943698,abundance:27.28,stable:true,nuclearSpin:0},{A:179,atomicMass:178.945816,abundance:13.62,stable:true,nuclearSpin:2.5},{A:180,atomicMass:179.946550,abundance:35.08,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Ta:[{A:181,atomicMass:180.947882,abundance:99.988,stable:true,nuclearSpin:3.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  W:[{A:180,atomicMass:179.946704,abundance:0.12,stable:true,nuclearSpin:0},{A:182,atomicMass:181.948206,abundance:26.5,stable:true,nuclearSpin:0},{A:183,atomicMass:182.950224,abundance:14.31,stable:true,nuclearSpin:0.5},{A:184,atomicMass:183.950931,abundance:30.64,stable:true,nuclearSpin:0},{A:186,atomicMass:185.954364,abundance:28.43,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Re:[{A:185,atomicMass:184.952956,abundance:37.4,stable:true,nuclearSpin:2.5},{A:187,atomicMass:186.955751,abundance:62.6,stable:true,nuclearSpin:2.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Os:[{A:184,atomicMass:183.952489,abundance:0.02,stable:true,nuclearSpin:0},{A:186,atomicMass:185.953838,abundance:1.59,stable:true,nuclearSpin:0},{A:187,atomicMass:186.955751,abundance:1.96,stable:true,nuclearSpin:1.5},{A:188,atomicMass:187.955750,abundance:13.24,stable:true,nuclearSpin:0},{A:189,atomicMass:188.958147,abundance:16.15,stable:true,nuclearSpin:1.5},{A:190,atomicMass:189.958447,abundance:26.26,stable:true,nuclearSpin:0},{A:192,atomicMass:191.961481,abundance:40.78,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Ir:[{A:191,atomicMass:190.960594,abundance:37.3,stable:true,nuclearSpin:1.5},{A:193,atomicMass:192.962924,abundance:62.7,stable:true,nuclearSpin:1.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Pt:[{A:194,atomicMass:193.962664,abundance:32.9,stable:true,nuclearSpin:0},{A:195,atomicMass:194.964774,abundance:33.8,stable:true,nuclearSpin:0.5},{A:196,atomicMass:195.964935,abundance:25.3,stable:true,nuclearSpin:0},{A:198,atomicMass:197.967876,abundance:7.2,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Au:[{A:197,atomicMass:196.966569,abundance:100,stable:true,nuclearSpin:1.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Hg:[{A:196,atomicMass:195.965833,abundance:0.15,stable:true,nuclearSpin:0},{A:198,atomicMass:197.966769,abundance:9.97,stable:true,nuclearSpin:0},{A:199,atomicMass:198.968280,abundance:16.87,stable:true,nuclearSpin:0.5},{A:200,atomicMass:199.968326,abundance:23.10,stable:true,nuclearSpin:0},{A:201,atomicMass:200.970293,abundance:13.18,stable:true,nuclearSpin:1.5},{A:202,atomicMass:201.970643,abundance:29.86,stable:true,nuclearSpin:0},{A:204,atomicMass:203.973494,abundance:6.87,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Tl:[{A:203,atomicMass:202.972344,abundance:29.52,stable:true,nuclearSpin:0.5},{A:205,atomicMass:204.974410,abundance:70.48,stable:true,nuclearSpin:0.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Bi:[{A:209,atomicMass:208.980399,abundance:100,stable:true,nuclearSpin:4.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Th:[{A:232,atomicMass:232.038055,abundance:100,stable:true,nuclearSpin:0,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}],
  Pa:[{A:231,atomicMass:231.035884,abundance:100,stable:true,nuclearSpin:3.5,source:'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana'}]
};
Object.entries(fallbackFeed).forEach(([sym, rows]) => {
  const list = Array.isArray(D.ISOTOPES[sym]) ? D.ISOTOPES[sym] : [];
  const seen = new Set(list.map(x => Number(x.A)));
  rows.forEach(item => {
    const A = Number(item.A);
    if (!seen.has(A)) {
      list.push({ ...item, source: item.source || 'LOCAL_EDUCATIONAL_FALLBACK; nie kanoniczne; weryfikacja CIAAW/NIST wymagana' });
      seen.add(A);
    }
  });
  if (list.length) D.ISOTOPES[sym] = list;
});
C.deepFreeze(D.ISOTOPES);
})(window);

} catch (err) {
  try { console.warn('[CHE module 8]', err && err.message ? err.message : err); } catch(_){}
}