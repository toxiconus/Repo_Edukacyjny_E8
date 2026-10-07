(function(g){
  var C=g.CHE=g.CHE||{};
  C.SCHOOL_REACT_V421={
    version:'4.21',
    predict:function(metal, acid){
      var p=C.DATA&&C.DATA.SCHOOL_PACK;
      if(!p) return {ok:false, error:'NO_PACK'};
      var series=p.activitySeries||[];
      var a=(p.acids||[]).find(function(x){return x.f===acid});
      if(!a) return {ok:false, error:'NO_ACID'};
      if(a.h2===false) return {ok:true, h2:false, note:a.note||'kwas nie wydziela H2'};
      var im=series.indexOf(metal), ih=series.indexOf('H');
      return {ok:true, h2:im>=0&&ih>=0&&im<ih};
    }
  };
})(window);
} catch (err) { try { console.warn('[CHE SCHOOL_REACT]', err&&err.message); } catch(_){} }

</script>
