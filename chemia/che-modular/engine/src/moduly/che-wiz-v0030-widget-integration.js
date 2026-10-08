
(function(){
'use strict';
const C=window.CHE=window.CHE||{};

CHE.define('timelineAnim', ({root}) => {
  const scenes = [
    {year:'1887',who:'Svante Arrhenius',desc:'Teoria dysocjacji elektrolitycznej: kwas = źródło H⁺, zasada = źródło OH⁻ w wodzie. Nobel 1903.'},
    {year:'1923',who:'Johannes Brønsted',desc:'Teoria protonowa: kwas = donor H⁺, zasada = akceptor H⁺. NH₃ jest zasadą mimo braku OH⁻.'},
    {year:'1923',who:'Thomas Lowry',desc:'Niezależnie od Brønsteda ta sama teoria protonowa. Pary sprzężone kwas–zasada.'},
    {year:'1923',who:'Gilbert Lewis',desc:'Teoria elektronowa: kwas = akceptor pary elektronowej, zasada = donor. Najszersza teoria.'},
    {year:'XX w.',who:'Rozwój teorii',desc:'Teoria Pearsona (HSAB), Usanovicha, chemia supramolekularna. Na E8 wystarczy Arrhenius i Brønsted.'}
  ];
  let current = 0;
  function render(){
    const s = scenes[current];
    root.querySelector('.ta-stage').innerHTML =
      '<div class="ta-scene"><div class="ta-year">' + s.year + '</div>' +
      '<div class="ta-who">' + s.who + '</div>' +
      '<div class="ta-desc">' + s.desc + '</div></div>';
    root.querySelector('.ta-progress').textContent = (current+1) + ' / ' + scenes.length;
    root.querySelector('[data-ta="prev"]').disabled = current === 0;
    root.querySelector('[data-ta="next"]').disabled = current === scenes.length - 1;
    root.querySelectorAll('.ta-dot').forEach((d,i) => d.classList.toggle('active', i === current));
  }
  return {
    mount(){
      const dots = root.querySelector('.ta-dots');
      scenes.forEach((s,i) => {
        const d = document.createElement('button');
        d.className = 'ta-dot' + (i === 0 ? ' active' : '');
        d.type = 'button';
        d.setAttribute('aria-label', 'Przejdź do ' + s.year);
        d.addEventListener('click', () => { current = i; render(); });
        dots.appendChild(d);
      });
      root.querySelector('[data-ta="prev"]').addEventListener('click', () => { if(current > 0){ current--; render(); }});
      root.querySelector('[data-ta="next"]').addEventListener('click', () => { if(current < scenes.length-1){ current++; render(); }});
      render();
    },
    reset(){ current = 0; render(); }
  };
});

C.WIZ_V0030={version:'0.30',source:'CHE.wiz.v00.30',
   migrationLayer:'CHE.WIDGET_API v0.05',widgetCount:C.LEGACY_WIDGETS?.size||0,sourceOfTruth:'FULL_ENGINE'};
})();
