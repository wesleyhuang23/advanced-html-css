$(document).ready(function(){
  $(window).on('scroll', function() {
    var winScroll = $(this).scrollTop();

    $('.left-branch').css({
      'transform': 'translate(-' + winScroll / 10 + '%, 0px)'
    });
    $('.right-branch').css({
      'transform': 'translate(+' + winScroll / 10 + '%, 0px)'
    });
    $('.vader').css({
      'transform': 'translateY(+' + winScroll / 10 + '%)'
    });
  });
});
