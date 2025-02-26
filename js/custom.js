(function ($) {
  "use strict";
  $(document).ready(function () {

   

    //MAOX =================================================

    // Responsive sidebar menu and sticky menu show hide
    
      // Function to manage sticky class based on scroll position
      function handleSticky() {
        if ($(window).scrollTop() > 100 && !$(".main-menu").hasClass("show")) {
          $("body").addClass("sticky");
        } else {
          $("body").removeClass("sticky");
        }
      }
    
      // Initial check when page loads
      handleSticky();
    
      // Scroll event to manage sticky class dynamically
      $(window).scroll(function () {
        handleSticky();
      });
    
      // Show sidebar menu on menu button click
      $(".menu-btn").click(function () {
        $(".main-menu").addClass("show");
        $(".sidebar").addClass("show");
    
        // Only remove 'sticky' class if screen width is ≤ 991px
          if ($(window).width() <= 991) {
            $("body").removeClass("sticky");
          }else{
            $("body").addClass("sticky");
          }
        // Remove 'sticky' class when menu is shown
       // $("body").removeClass("sticky");
      });
    
      // Hide sidebar menu on close button click
      $(".close-btn").click(function () {
        $(".main-menu").removeClass("show");
        $(".sidebar").removeClass("show");
    
        // Re-add 'sticky' class only if scrolled past 100px
        handleSticky();
      });
    
    
    // slick slider testimonial =============
    $(document).ready(function () {

      

      $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        asNavFor: '.testimonial-authors-slider'
      });


      $('.testimonial-authors-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        focusOnSelect: true, 
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        asNavFor: '.testimonial-slider',
        infinite: true,
      });
    });
 
 
    const homeSlider = new Swiper('.home-1-blog-slider', {
      loop: true, 
      autoplay: true,
      freeMode: true,
      spaceBetween: 24,
      slidesPerView: 3, 
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            centeredSlides: true,
            spaceBetween: 15,
            slidesPerView: 1.5,
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
      },
    });
    const slideCarousel = new Swiper('.slide-carousel-wrapper', {
      loop: true, 
      autoplay: {
        delay: 0,
    },
      freeMode: true,
      spaceBetween: 15,
      speed: 2000,
      slidesPerView: 4, 
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
          
        },
        480: {
            
            spaceBetween: 10,
            slidesPerView: 1.5
        },
        576: {
            
            spaceBetween: 10,
            slidesPerView: 2
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4 ,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 24,
        }
      },
    });

    // home 2 blog slider
    const h2blog = new Swiper('.home-2-blog-slider', {
      loop: true, 
      autoplay: true,
      freeMode: true,
      spaceBetween: 24,
      slidesPerView: 3, 
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            centeredSlides: true,
            spaceBetween: 15,
            slidesPerView: 1.5,
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
      },
    });

    // h2-service slider
    const h2service = new Swiper('.h2-swiper-sevice-wrapper', {
      loop: true,
      freeMode: true,
      spaceBetween: 24,
      slidesPerView: 3, 
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            centeredSlides: true,
            spaceBetween: 15,
            slidesPerView: 1.5,
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
      },
    });

    //h2 testimonial slider
    const h2testimonial = new Swiper('.h2-testimonial-swiper', {
      loop: true,
      freeMode: true,
      autoplay: true,
      spaceBetween: 40
    });
    //blog-details-testimonial-slider
    const blogDetailsTestimonialSlider = new Swiper('.blog-details-testimonial-slider', {
      loop: true,
      freeMode: true,
      autoplay: true,
      spaceBetween: 40
    });


  /* Counter Js ============================*/
          $(".counter").counterUp({
            delay: 10,
            time: 1500,
          });

    // veno box video player

    new VenoBox({
      selector: '.my-video-links',
    });

    /*
    //         Jquery Wow Js
    //         ============================*/

    new WOW().init();
   
 
  });

})(jQuery);
