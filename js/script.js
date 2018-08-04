/* =====================================
  Preloader
======================================*/
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* =====================================
  Navbar
======================================*/

// show & hide white navbar
$(function() {

  //on page load
  showHideNav();

  //on scroll
  $(window).scroll(function() {
    showHideNav()
  });

  //show and hide white navbar
  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      //show
      $("nav").addClass("white-nav-top");

      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      //Back to Top button
      $("#back-to-top").fadeIn();
    } else {
      //hide
      $("nav").removeClass("white-nav-top");

      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      //Back to Top button
      $("#back-to-top").fadeOut();
    }
  }
});

//smooth scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();
    //get section id like #about, #services etc...
    var section_id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
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
    responsive: {
      //breakpoint from 0 up
      0: {
        items: 1,
      },
      //breakpoint from 400 up
      400: {
        items: 2,
      },
    },
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
      }, 1500);
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
    responsive: {
      //breakpoint from 0 up
      0: {
        items: 2,
      },
      //breakpoint from 400 up
      576: {
        items: 6,
      },
    },
  });
});


/* =====================================
  Google Map
======================================*/

$(window).on('load', function() {

  var addressString = "Brooklyn, NY";
  var myLatLng = {
    lat: 40.678178,
    lng: -73.944158
  };

  // render map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });

  // add marker
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Click to see address",
  });

  // add info window
  var infoWindow = new google.maps.InfoWindow({
    content: addressString
  });

  // show info window when user clicks marker
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  // resize
  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
});

/* =====================================
  Animation
======================================*/
// animate on scroll
$(function() {
  new WOW().init();
});

// home animation on page load
$(window).on('load', function() {
  $('#home-heading-1').addClass("animated fadeInDown");
  $('#home-heading-2').addClass("animated fadeInLeft");
  $('#home-text').addClass("animated zoomIn");
  $('#home-btn').addClass("animated zoomIn");
  $('#arrow-down i').addClass("animated fadeInDown infinite");
});
