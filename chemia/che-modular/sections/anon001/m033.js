try {

(function(g){
'use strict';
const C = g.CHE = g.CHE || {};
const D = C.DOM;
const DATA = {
  'molecule-2d':[ ['Rząd wiązania','Pojedyncze, podwójne, potrójne — pochodzi z CHE.MOLECULE.'],['Kąt','Wartość z modelu lub wyliczona z geometrii XYZ.'],['Wolne pary','Wyliczane z elektronów walencyjnych minus rząd wiązania.'],['Geometria','VSEPR: liczba domen elektronowych wokół atomu centralnego.'] ],
  'molecule-3d':[ ['Obrót','Przeciągnij, aby obrócić model.'],['Zoom','Kółko myszy lub pinch.'],['Autoobrót','Widok obraca się automatycznie wokół osi Y.'],['Źródło','Współrzędne XYZ z CHE.DATA.MOLECULES.'] ],
  'molecule-orbitals':[ ['Pudełko','Reprezentuje orbital; strzałki — elektrony.'],['Zasada Pauliego','Maksymalnie dwa elektrony na orbital.'],['Reguła Hunda','Najpierw pojedyncze obsadzenia, potem parowanie.'],['Walencyjne','Podpowłoki oznaczone ·w są walencyjne.'] ],
  'molecule-cv':[ ['Karta obiektu','Jedno źródło — wiele widoków tej samej cząsteczki.'],['Wzór','Kanoniczny, generowany z atomów.'],['Wiązania','Każde z rzędem i etykietą.'],['Relacje','Substancje i reakcje z CHE.PROFILE.'] ],
  'reaction':[ ['Równanie','Budowane z centralnych współczynników.'],['Bilans','Sprawdzenie atomów i ładunków.'],['Obserwacja','Opis efektu widocznego dla obserwatora.'],['Termochemia','ΔG° z CHE.THERMO — jeśli dane są dostępne.'] ],
  'substance':[ ['Profil','Jedno źródło — DATA — wiele pól pochodnych.'],['Właściwości','Fizyczne, termochemiczne, rozpuszczalność.'],['Relacje','Reakcje z CHE.REACTION.'],['Masa molowa','Sprawdzana z ATOMIC_MASS.'] ]
};
function attach(host, name){
  const items = DATA[name];
  if(!items || host.dataset.cheHints) return;
  host.dataset.cheHints = '1';
  const box = D.el('div', { class:'che-hints' });
  const t = D.el('button', { type:'button', class:'t' }, 'Podpowiedzi ⌄');
  const chips = D.el('div', { class:'chips' });
  const txt = D.el('div', { class:'txt' });
  let cur = -1;
  items.forEach((it, i)=>{
    const b = D.el('button', { type:'button' }, it[0]);
    b.onclick = ()=>{
      const same = cur === i;
      D.$$('button', chips).forEach(x=> x.classList.remove('on'));
      if(same){ cur = -1; txt.classList.remove('show'); return; }
      cur = i; b.classList.add('on'); txt.textContent = it[1]; txt.classList.add('show');
    };
    chips.appendChild(b);
  });
  t.onclick = ()=>{
    const open = box.classList.toggle('open');
    t.textContent = open ? 'Podpowiedzi ⌃' : 'Podpowiedzi ⌄';
    if(!open){ cur = -1; txt.classList.remove('show'); D.$$('button', chips).forEach(x=> x.classList.remove('on')); }
  };
  box.append(t, chips, txt);
  host.appendChild(box);
}
function scan(){
  D.$$('[data-che]').forEach(h=>{ const n = h.dataset.che; if(DATA[n] && !h.dataset.cheHints) attach(h, n); });
}
setTimeout(scan, 0);
g.addEventListener('load', ()=> setTimeout(scan, 80));
C.EXPLAIN = { version:'2.17', attach, scan, data: DATA };
})(window);

} catch (err) {
  try { console.warn('[CHE module 33]', err && err.message ? err.message : err); } catch(_){}
}

