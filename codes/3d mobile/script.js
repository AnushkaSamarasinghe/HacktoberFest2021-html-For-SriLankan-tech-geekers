$(function(){
  var i = 1;
  $('#control').click(function(){
    $('.parts').removeClass('pos' + i);
    for(var s=1;s<11;s++) {
      $('#side' + s).removeClass('side' + s + 'pos' + i);
    }
    i++;
    if(i > 3) {
      i = 1;
    }
    $('.parts').addClass('pos' + i);
    for(var s=1;s<11;s++) {
      $('#side' + s).addClass('side' + s + 'pos' + i);
    }
  });
  
  $('#button').click(function(){
    $('#display_blank').toggle();
    $('#display_browser').toggle();
  });
});

