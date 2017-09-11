(function ($) {
    "use strict";

    var $window = $(window),
        $body = $('body');

    /*
        =================================
            Bootstrap menu fix
        ==================================
    */

    $(".navbar-toggle").on("click", function () {
        $body.addClass("mobile-menu-activated");
    });

    $("ul.nav.navbar-nav li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });

    /*
        ====================================================
            background-image flickering solution for mobile
        =======================================================
    */

    var bg = jQuery("#intro-bg");

    function resizeBackground() {
        bg.height(jQuery(window).height() + 0);
    }
    resizeBackground();

    /*=============================
                Parallax
        ==============================*/
    $window.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    /*=============================
            WOW js
    ==============================*/
    new WOW({
        mobile: true
    }).init();

    /*=============================
            Preloder
    ==============================*/

    $window.load(function () {
        $('.spinner').fadeOut();
        $('.preloader').delay(350).fadeOut(500);
        $body.delay(350).css({
            'overflow': 'visible'
        });
    });

})(jQuery);