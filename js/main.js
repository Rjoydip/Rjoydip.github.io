(function ($) {
    "use strict";

    var $window = $(window),
        $body = $('body');

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

    $window.contextmenu(function(){
        console.log("Context Menu");
    });

    $window.scroll(function(){
       var scrollPosition = $(window).scrollTop() + $(window).height();

        if(scrollPosition <= 680){
            console.log("2");
            $('.showMyInfo').hide().fadeOut("slow");
            $('.showSocialButtons').show().fadeIn("slow");
            return true;
        } else {
            console.log("3");
            $('.showMyInfo').show().fadeIn("slow");
            $('.showSocialButtons').hide().fadeOut("slow");
            return true;
        }
    });

})(jQuery);