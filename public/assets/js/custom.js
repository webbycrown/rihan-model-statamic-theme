/* =====================================
    Template Name: Orion Construction - Tailwind HTML5 Template
    Author Name: WebbyCrown
    Description: Orion Construction - Tailwind HTML5 Template.
    Version:1.0
========================================*/

/*======================================
[ JS Table of contents ]
01. General Open JS
    + Mobile menu
    + Mobile menu dropdown
    + AOS
    + Page scroll to Header sticky

02. Slider Open JS
    + What we do slider
    + Testimonial slider
    + Customer Reviews slider
    + Photos Gallery slider
    + Trending Attractions slider
    + Popular Tours slider
    + Testimonial full slider

03. Popup Open JS
    + Cookie popup js
    + Newsletter Popup JS
    + Our Teachers popup
    + Enquiry form Popup JS
04. Preloader JS
05. Isotope JS



========================================*/

(function ($) {
  rihan_model_agency = {
    init: function () {
      // Home one js
      this.general_open();
      this.slider_open();
      this.popup_open();
      this.Isotope_js();
      this.Preloader_js();
    },

    /*======================================
     01. General Open JS
    ========================================*/
    general_open: function () {
      /* Mobile menu */
      $(document).on(
        "click",
        ".toggle-menu-button a, .mobile-menu .menu-close a",
        function () {
          $(".mobile-menu").toggleClass("open");
          //$(this).toggleClass("active");
        },
      );

      $(document).on("click", ".mobile-toggle", function () {
        $("#navbar-default").toggleClass("open");
        $(this).toggleClass("active");
      });

      /* Page scroll to Header sticky */
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
          $(".header").addClass("sticky-header");
        } else {
          $(".header").removeClass("sticky-header");
        }
      });

      /* Tabs Jquery */
      $(".tabs-list li, .tab-link-title").click(function () {
        var tab_id = $(this).attr("data-tab");
        $(".tabs-list li, .tab-link-title").removeClass("current");
        $(".tabs-content").removeClass("current");
        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
      });

      /* Read more Jquery */
      $(document).on("click", ".more-link", function () {
        $(".more-content").toggleClass("open");
        $(this).toggleClass("active");
      });
    },

    /*======================================
     02. Slider Open JS
    ========================================*/
    slider_open: function () {
      var swiper = new Swiper(".work-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

      var swiper = new Swiper(".work-thumbs", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".work-thumb-view", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
    },

    /*======================================
     03. Popup Open JS
    ========================================*/
    popup_open: function () {
      $(document).ready(function () {
        $(".promote-bus-form").magnificPopup({
          type: "inline",
          preloader: false,
          focus: "#name",

          // When elemened is focused, some mobile browsers in some cases zoom in
          // It looks not nice, so we disable it:
          callbacks: {
            beforeOpen: function () {
              if ($(window).width() < 700) {
                this.st.focus = false;
              } else {
                this.st.focus = "#name";
              }
            },
          },
        });

        /*Hero section youtube popup*/
        $(".popup-youtube").magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });

        $(document).ready(function () {
          $(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            },
            image: {
              tError:
                '<a href="%url%">The image #%curr%</a> could not be loaded.',
              titleSrc: function (item) {
                return (
                  item.el.attr("title") + "<small>by Marsel Van Oosten</small>"
                );
              },
            },
          });
        });
      });
    },

    /*======================================
     04. Preloader JS
    ========================================*/
    // Preloader_js: function () {
    //   //After 2s preloader is fadeOut
    //  $('.preloader').delay(2000).fadeOut('slow');
    //   setTimeout(function () {
    //     //After 2s, the no-scroll class of the body will be removed
    //     $('body').removeClass('no-scroll');
    //   }, 2000); //Here you can change preloader time
    // }
    Preloader_js: function () {
      $(".preloader").delay(2000).fadeOut("slow");

      setTimeout(function () {
        $("body").removeClass("no-scroll");
      }, 2000);
    },

    /*======================================
     05. Isotope JS
    ========================================*/
    Isotope_js: function () {},
  };
  rihan_model_agency.init();
})(jQuery);
