setNavWidth: function(){
  var wi = parseInt(($('navbar-nav').width()-48)*.25);
  for( var i = 0 ; i < 4; i++) {
    $('navli' +i).width(wi);
  }
}
