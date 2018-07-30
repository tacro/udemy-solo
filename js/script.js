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

/* =====================================
  Progress Bars
======================================*/
$(function(){

  $("#progress-elements").waypoint(function(direction){
    // alert("you reached to me");
    $(".progress-bar").each(function(){
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%",
      },1000);
    })
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });

});
