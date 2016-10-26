$(document).ready(function(){
  $(window).scroll(function(){
    if(window.scrollTop() > 50){
      $('header').addClass('smaller');
      $('.logo').addClass('logo-small');
    } else {
      $('header').removeClass('smaller');
      $('.logo').removeClass('logo-small');
    }
  })
});
