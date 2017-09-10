(function ($) {
    "use strict";

    var $window = $(window),
        $body = $('body');

    $('.navbar').hide();
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
        $('.preloader').fadeOut(500);
        $body.delay(350).css({
            'overflow-y': 'visible'
        });
        $window.scroll(function () {
            ($(window).scrollTop() >= 150) ? $('.navbar').show().fadeIn("slow") : $('.navbar').hide(700).fadeOut("slow");
        });
    });

})(jQuery);