(function ($) {
    "use strict";

    var $window = $(window),
        $body = $('body'),
        minScroll = 680, // for mobile
        deviceOS = window.navigator.appVersion.match(/Win/g);

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
    });

    if(deviceOS !== null){
        minScroll = 1050;
    }

    $window.scroll(function () {
        var scrollPosition = $(window).scrollTop() + $(window).height();

        if (scrollPosition <= minScroll) {
            $('.showMyInfo').hide(500).fadeOut("slow");
            $('.showSocialButtons').show(500).fadeIn("slow");
            return true;
        } else {
            $('.showMyInfo').show(500).fadeIn("slow");
            $('.showSocialButtons').hide(500).fadeOut("slow");
            return true;
        }
    });

})(jQuery);