/* Fixed header nav */
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var headerHeight = document.querySelector(".bottom-header").offsetHeight;
    if ($(window).width() >= 992) {
      if (window.scrollY > headerHeight) {
        document.getElementById("masthead").classList.add("fixed-header");
      } else {
        document.getElementById("masthead").classList.remove("fixed-header");
      }
    } else {
      var bottomheaderHeight =
        document.querySelector(".bottom-header").offsetHeight;
      var mobileheaderHeight = headerHeight + bottomheaderHeight;
      if (window.scrollY > mobileheaderHeight) {
        document.getElementById("masthead").classList.add("fixed-header");
      } else {
        document.getElementById("masthead").classList.remove("fixed-header");
      }
    }
  });
});

/* Show or Hide Search field on clicking search icon */
$(document).on("click", ".header-search-icon .search-icon", function (e) {
  e.preventDefault();
  $(".header-search-form").addClass("search-in");
});

$(".header-search-form, .search-close").on("click", function (e) {
  e.preventDefault();
  if (!$(e.target).is(".header-search-form input")) {
    $(".header-search-form").removeClass("search-in");
  }
});

/* Mobile slick nav */
$("#navigation").slicknav({
  duration: 500,
  closedSymbol: '<i class="fas fa-plus"></i>',
  openedSymbol: '<i class="fas fa-minus"></i>',
  prependTo: ".mobile-menu-container",
  allowParentLinks: true,
  nestedParentLinks: false,
  label: "Menu",
  closeOnClick: true, // Close menu when a link is clicked.
});
// side menus slide  start
function openNav() {
  var x = document.getElementById("attorneySidepannel");
  document.getElementById("attorneySidepannel").style.width = "100%";
  if (x.style.width == "100%") {
    clearInterval(interval);
    var interval = setInterval(widthh, 1000);

    function widthh() {
      document.getElementById("attorneySidepannelchild").style.opacity = "1";
      document.getElementById("attorneySidepannelchild").style.top = "0";
      clearInterval(interval);
    }
  }
}

document
  .getElementById("attorneySidepannel")
  .addEventListener("click", closeNav);

function closeNav() {
  var y = document.getElementById("attorneySidepannelchild");
  y.style.opacity = "0";
  y.style.top = "100%";
  if (y.style.top == "100%") {
    clearInterval(interval);
    var interval = setInterval(widthzero, 1000);

    function widthzero() {
      document.getElementById("attorneySidepannel").style.width = "0%";
      clearInterval(interval);
    }
  }
}
// side menus slide end
new Swiper(".swiper_one", {
  // Optional parameters
  direction: "horizontal",
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 7000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Elements Animation
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});

/*-------------------------------------
        OwlCarousel
    -------------------------------------*/
$(".rs-carousel").each(function () {
  var owlCarousel = $(this),
    loop = owlCarousel.data("loop"),
    items = owlCarousel.data("items"),
    margin = owlCarousel.data("margin"),
    stagePadding = owlCarousel.data("stage-padding"),
    autoplay = owlCarousel.data("autoplay"),
    autoplayTimeout = owlCarousel.data("autoplay-timeout"),
    smartSpeed = owlCarousel.data("smart-speed"),
    navSpeed = owlCarousel.data("nav-speed"),
    xsDevice = owlCarousel.data("mobile-device"),
    xsDeviceNav = owlCarousel.data("mobile-device-nav"),
    xsDeviceDots = owlCarousel.data("mobile-device-dots"),
    smDevice = owlCarousel.data("ipad-device"),
    smDeviceNav = owlCarousel.data("ipad-device-nav"),
    smDeviceDots = owlCarousel.data("ipad-device-dots"),
    smDevice2 = owlCarousel.data("ipad-device2"),
    smDeviceNav2 = owlCarousel.data("ipad-device-nav2"),
    smDeviceDots2 = owlCarousel.data("ipad-device-dots2"),
    mdDevice = owlCarousel.data("md-device"),
    centerMode = owlCarousel.data("center-mode"),
    HoverPause = owlCarousel.data("hoverpause"),
    mdDeviceNav = owlCarousel.data("md-device-nav"),
    mdDeviceDots = owlCarousel.data("md-device-dots");
  owlCarousel.owlCarousel({
    loop: loop ? true : false,
    items: items ? items : 4,
    lazyLoad: true,
    center: centerMode ? true : false,
    autoplayHoverPause: HoverPause ? true : false,
    margin: margin ? margin : 0,
    //stagePadding: (stagePadding ? stagePadding : 0),
    autoplay: autoplay ? true : false,
    autoplayTimeout: autoplayTimeout ? autoplayTimeout : 1000,
    smartSpeed: smartSpeed ? smartSpeed : 250,
    navSpeed: navSpeed ? true : false,
    responsiveClass: true,
    responsive: {
      0: {
        items: xsDevice ? xsDevice : 1,
        center: false,
      },
      768: {
        items: smDevice2 ? smDevice2 : 2,
        center: false,
      },
      992: {
        items: smDevice ? smDevice : 3,
        center: false,
      },
      1200: {
        items: mdDevice ? mdDevice : 4,
      },
    },
  });
});

/* Home testimonial slider */
$(".testimonial-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1200,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: false,
  variableWidth: false,
  centerMode: false,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
/*-------------------------------------
    tooltip
  -------------------------------------*/
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Circle progress bar
function animateElements() {
  $(".circle-progressbar-white").each(function () {
    var elementPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    var percent = $(this).find(".circle-bar").attr("data-percent");
    var percentage = parseInt(percent, 10) / parseInt(100, 10);
    var animate = $(this).data("animate");
    if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
      $(this).data("animate", true);
      $(this)
        .find(".circle-bar")
        .circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 4,
          lineCap: "round",
          size: 105,
          emptyFill: "#a7a7a7",
          fill: {
            color: "#FFFFFF",
          },
          animation: {
            duration: 2500,
            easing: "circleProgressEasing",
          },
        })
        .on("circle-animation-progress", function (event, progress, stepValue) {
          $(this)
            .find(".circle-number")
            .text((stepValue * 100).toFixed() + "%");
        })
        .stop();
    }
  });
  $(".circle-progressbar-yellow").each(function () {
    var elementPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    var percent = $(this).find(".circle-bar").attr("data-percent");
    var percentage = parseInt(percent, 10) / parseInt(100, 10);
    var animate = $(this).data("animate");
    if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
      $(this).data("animate", true);
      $(this)
        .find(".circle-bar")
        .circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 4,
          lineCap: "round",
          size: 105,
          emptyFill: "#f1f1f1",
          fill: {
            color: "#977a3e",
          },
          animation: {
            duration: 2500,
            easing: "circleProgressEasing",
          },
        })
        .on("circle-animation-progress", function (event, progress, stepValue) {
          $(this)
            .find(".circle-number")
            .text((stepValue * 100).toFixed() + "%");
        })
        .stop();
    }
  });
}
// Show animated elements
animateElements();
$(window).scroll(animateElements);

// Sponsors Item Carousel
if ($(".sponsors-carousel").length) {
  $(".sponsors-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1024: {
        items: 4,
      },
    },
  });
}
//Hide Loading Box (Preloader)
function handlePreloader() {
  if ($(".loader-wrap").length) {
    $(".loader-wrap").delay(1000).fadeOut(500);
  }
}

if ($(".preloader-close").length) {
  $(".preloader-close").on("click", function () {
    $(".loader-wrap").delay(200).fadeOut(500);
  });
}
$(window).on("load", function () {
  handlePreloader();
});

if ($(".wow").length) {
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
  });
  wow.init();
}
// Facts counter
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000,
});

// accordion
$(".accordion").on("click", ".accordion_tab", function () {
  $(this).next().slideDown();
  $(".accordion_info").not($(this).next()).slideUp();
});

$(".accordion").on("click", ".item", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

//  Isotope Js active for Case Category
// filter items on button click
$(".filters-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

// init Isotope
var $grid = $(".grid").isotope({
  itemSelector: ".grid-item",
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: ".grid-item",
  },
});

//  POST SLIDER
if ($(".post-slider".length)) {
  $(".post-slider").owlCarousel({
    mouseDrag: false,
    smartSpeed: 500,
    margin: 30,
    loop: true,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    dots: false,
    items: 1,
  });
}

// Branch Atm Tab
if ($(".branch-atm-tab").length) {
  $(".branch-atm-tab .tabs-button-box .tab-btn-item").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("data-tab"));

    if ($(target).hasClass("actve-tab")) {
      return false;
    } else {
      $(".branch-atm-tab .tabs-button-box .tab-btn-item").removeClass(
        "active-btn-item"
      );
      $(this).addClass("active-btn-item");
      $(".branch-atm-tab .tabs-content-box .tab-content-box-item").removeClass(
        "tab-content-box-item-active"
      );
      $(target).addClass("tab-content-box-item-active");
    }
  });
}

// Customer Care Numbers Tab
if ($(".customer-care-numbers-tab").length) {
  $(".customer-care-numbers-tab .tabs-button-box .tab-btn-item").on(
    "click",
    function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).hasClass("actve-tab")) {
        return false;
      } else {
        $(
          ".customer-care-numbers-tab .tabs-button-box .tab-btn-item"
        ).removeClass("active-btn-item");
        $(this).addClass("active-btn-item");
        $(
          ".customer-care-numbers-tab .tabs-content-box .tab-content-box-item"
        ).removeClass("tab-content-box-item-active");
        $(target).addClass("tab-content-box-item-active");
      }
    }
  );
}
