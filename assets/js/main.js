(function($) {
    "use strict";



    // Responsive nav
    $(".open-mobile-menu").on("click", function() {
        $("div#header-bottom").addClass("open");
    })
    $(".times").on("click", function() {
        $("div#header-bottom").removeClass("open");

    })

    // meanmenu with sidebar
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    $('.open-mobile-menu').on('click', function() {
        $('.side-info').addClass('info-open');
        $('.offcanvas-overlay').addClass('overlay-open');
    })

    $('.side-info-close,.offcanvas-overlay,.mobile_one_page li.menu-item a.nav-link').on('click', function() {
        $('.side-info').removeClass('info-open');
        $('.offcanvas-overlay').removeClass('overlay-open');
    })


    //Swiper slider
    var swiperrecentOne = new Swiper('.myswiper1', {
        slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 4,
            },
            1299: {
                slidesPerView: 4,
            }
        }

    });

    // Testimonial swiper slider
    let swiperrecent = new Swiper('.myswiper2', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        infinite: false,
        grabCursor: true,
        autoplay: {
            delay: 500000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1299: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }

    });

    // Animation 
    AOS.init({
        once: true
    });

    /* sildeBar scroll */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="ti-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // sticky menubar

    (function() {

        var doc = document.documentElement;
        var w = window;
        var curScroll;
        var prevScroll = w.scrollY || doc.scrollTop;
        var curDirection = 0;
        var prevDirection = 0;
        var header = document.getElementById('header');
        var toggled;
        var threshold = 80;

        var checkScroll = function() {
            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > prevScroll) {
                // scrolled down
                curDirection = 2;
            } else {
                //scrolled up
                curDirection = 1;
            }

            if (curDirection !== prevDirection) {
                toggled = toggleHeader();
            }

            prevScroll = curScroll;
            if (toggled) {
                prevDirection = curDirection;
            }
        };

        var toggleHeader = function() {
            toggled = true;
            if (curDirection === 2 && curScroll > threshold) {
                header.classList.add('hide');
            } else if (curDirection === 1) {
                header.classList.remove('hide');
            } else {
                toggled = false;
            }
            return toggled;
        };

        window.addEventListener('scroll', checkScroll);

    })();






})(jQuery);