/* start.js — atlas jako osobna strona: bez ekranu powitalnego i zakładek silnika (dane, diagnostyka, lekcje, wizualizacje). */
(function(){var d=document,b=d.body;d.documentElement.setAttribute('data-che-ui','ready');d.documentElement.classList.add('che-atlas-solo');
 b.classList.remove('che-landing');b.classList.add('che-in-module');var l=d.getElementById('che-landing');if(l)l.style.display='none';
 var app=d.querySelector('body > .app');if(app)app.style.display='';
 ['dane','diag','lekcje','wizual'].forEach(function(t){d.querySelectorAll('button[data-tab="'+t+'"],.tabpane[data-tab="'+t+'"]').forEach(function(e){e.style.display='none'})});
 d.title='Atlas pierwiastków — CHE';})();
