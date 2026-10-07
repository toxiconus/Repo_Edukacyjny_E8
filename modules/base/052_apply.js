<script>

(function(){
  var C=window.CHE; if(!C||!C.DATA) return;
  var P=C.DATA.ATOMIC_PROPS||{}, I=C.DATA.ISOTOPES||{};
  var n=0;
  function apply(box){
    if(!box) return;
    Object.keys(P).forEach(function(sym){
      var card=box[sym]; if(!card) return;
      var p=P[sym];
      if(card.cr==null && p.covalentRadius!=null){ card.cr=p.covalentRadius; n++; }
      if(card.ar==null && p.atomicRadius!=null) card.ar=p.atomicRadius;
      if(card.vdw==null && p.vdwRadius!=null) card.vdw=p.vdwRadius;
      if((!card.iso||!card.iso.length) && I[sym]&&I[sym].length) card.iso=I[sym];
    });
  }
  apply(window.ENG); apply(window.DB);
  C.VISUAL_LINK={active:true,filled:n,note:'odswiezenie po dopiskach; istniejace pola wizualu nie nadpisane'};
})();
</script>
