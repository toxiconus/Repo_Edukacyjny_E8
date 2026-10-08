
(function(){
'use strict';
 
function fixNode(root){
  if(!root) return;
  var walker=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  var n, list=[];
  while((n=walker.nextNode())){
    if(!n.nodeValue || n.nodeValue.indexOf('\\n')<0) continue;
    var p=n.parentElement;
    if(!p) continue;
    var tag=p.tagName;
    if(tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT') continue;
    list.push(n);
  }
  list.forEach(function(n){
    n.nodeValue=n.nodeValue.split('\\n').join('\n');
  });
}
function fixAll(){
  try{ fixNode(document.body); }catch(e){}
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(fixAll, 0); setTimeout(fixAll, 400); });
else { setTimeout(fixAll, 0); setTimeout(fixAll, 400); }
document.addEventListener('che:lesson-context', function(){ setTimeout(fixAll, 50); });
var mo=new MutationObserver(function(){ clearTimeout(window.__cheNlT); window.__cheNlT=setTimeout(fixAll, 80); });
if(document.body) mo.observe(document.body,{childList:true,subtree:true,characterData:true});
else document.addEventListener('DOMContentLoaded',function(){ mo.observe(document.body,{childList:true,subtree:true,characterData:true}); });
window.CHE=window.CHE||{};
window.CHE.fixLiteralNewlines=fixAll;
})();
