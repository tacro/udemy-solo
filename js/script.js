/* =====================================
  Preloader
======================================*/
$(window).on('load', function(){
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* =====================================
  Team
======================================*/
$(function(){
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    dots: false,
  });
});
