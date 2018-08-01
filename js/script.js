/* =====================================
  Preloader
======================================*/
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* =====================================
  Team
======================================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots: false,
  });
});

/* =====================================
  Progress Bars
======================================*/
$(function() {

  $("#progress-elements").waypoint(function(direction) {
    // alert("you reached to me");
    $(".progress-bar").each(function() {
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%",
      }, 1000);
    })
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });

});

/* =====================================
  Responsive Tabs
======================================*/
$(function() {
  $("#services-tabs").responsiveTabs({
    animation: 'slide',
  });
});

/* =====================================
  Portfolio
======================================*/
$(window).on('load', function() {
  // initialize isotope
  var $grid = $("#isotope-container").isotope({});

  // filter items on button click
  $('#isotope-filters').on('click', 'button', function() {

    var filterValue = $(this).attr('data-filter');

    $grid.isotope({
      filter: filterValue
    });

    //active buttonß
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/* =====================================
  Magnifier
======================================*/
$(function() {
  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a', //child items selecter
    type: 'image',
    gallery: {
      enabled: true
    },
  });
});

/* =====================================
  Testmonials
======================================*/
$(function() {
  $("#testmonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots: false,
  });
});

/* =====================================
  Stats
======================================*/
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
});

/* =====================================
  Clients
======================================*/
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots: false,
  });
});


/* =====================================
  Google Map
======================================*/

$(window).on('load', function() {

  var addressString = "brooklyn, NY";
  var myLatLng = {
    lat: 40.678178,
    lng: -73.944158
  };

  // render map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });
});
