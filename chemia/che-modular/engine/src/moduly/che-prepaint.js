
 
(function(){var d=document.documentElement,t='light';
try{t=localStorage.getItem('che.theme')||'light'}catch(e){}
if(t==='dark'||t==='night')d.setAttribute('data-theme','dark');
setTimeout(function(){if(d.getAttribute('data-che-ui')!=='ready')d.setAttribute('data-che-ui','ready')},6000);})();
