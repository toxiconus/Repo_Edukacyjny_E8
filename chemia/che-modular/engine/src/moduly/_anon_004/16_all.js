function all(){
  GEO.sel=null; buildStop();
  head();
  $('lev').innerHTML = levels();
  cloud();
  $('ie').innerHTML = ie();
  $('rad').innerHTML = rad();
  $('radar').innerHTML = radar();
  $('ph').innerHTML = ph();
  $('iso').innerHTML = iso();
  $('ox').innerHTML = ox();
  $('redox').innerHTML = redox();
  if(still) bohr(0);
  extra();
  renderElementList();
  renderMiniPT();
  fact();
  hints();
}

