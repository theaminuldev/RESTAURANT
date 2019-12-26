$(document).ready(function () {
    /*===================================*/
    /*LOADER SECTION STRAT*/
    /*===================================*/
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 100);

    /*===================================*/
    /*LOADER SECTION END*/
    /*===================================*/

    /*====================================*/
    /*WOW JS*/
    /*====================================*/
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
    new WOW().init();

    /*================================*/
    /* MOBILE MENU SECTION STRAT*/
    /*================================*/
    var menuKiOpen = false;
    $(".header .mobile-menu").on("click", function () {
        //$(".header .menu").slideToggle(1000);
        if (menuKiOpen == false) {
            $(".header .menu").slideDown(1000);
            $(".header .mobile-menu i").addClass("fa-times").removeClass("fa-bars");
            menuKiOpen = true;
        } else {
            $(".header .menu").slideUp(1000);
            $(".header .mobile-menu i").removeClass("fa-times").addClass("fa-bars");
            menuKiOpen = false;
        }
    });
    $(window).on("resize", function () {
        var deviceWidth = $(window).width();
        if (deviceWidth > 767) {
            $(".header .menu").removeAttr("style");
        }
    });

    /* ==================================== */
    /* MOBILE MENU SEFCTION END*/
    /* ==================================== */




    /*======================================*/
    // scroll top active strat
    //===================================//
    var shapers = $(window);
    var page = $('html, body');

    $(".scrolltop").on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000)
    });
    //
    //==================================//
    // menu fix on scroll
    //==================================//
    shapers.on('scroll', function () {
        if (shapers.scrollTop() > 100) {
            $('.header').addClass('animated slideInDown fix')
        } else {
            $('.deader').removeClass('animated slideInDown fix')
        }
    })
    /*=====================================*/
    /*MENU FIX ON SCROL END*/
    /*=====================================*/





    /*=====================================*/
    /* SOCIAL ICONS SECTION STRAT*/
    /*=====================================*/
    showTheIcons = () => {
        $(".social-media .social-media-icons").slideDown(1000);

        // Right angle icon will rotate
        $(".social-media .controller-icon i").css({
            "transform": "rotate(90deg)",
            "transition": "1s"
        });

        IconKiOpen = true;
    }
    hideTheIcons = () => {
        // Social Media Icons hide
        $(".social-media .social-media-icons").slideUp(1000);

        // Right angle icon will rotate
        $(".social-media .controller-icon i").css({
            "transform": "",
            "transition": "1s"
        });
        IconKiOpen = false;
    }


    var IconKiOpen = false;

    $(".social-media .controller-icon").on("click", function () {

        if (IconKiOpen == false) {
            showTheIcons();
        } else {
            hideTheIcons();
        }
    });

    /*======================================*/
    /*SOCILA ICONS SECTION END*/
    /*======================================*/




    /*======================================*/
    /*CONTACT SECTION STRAT*/
    /*======================================*/

    $(".contact-us .single-input input,.contact-us .single-input textarea").on("focus", function () {
        /*
        $(".contact-us .single-input label").css({
           "top":"8px",
            "transition":".5s"
        });
        */
        $(this).prev().css({
            "top": "8px",
            "transition": ".5s"
        });
    });


    $(".contact-us .single-input input,.contact-us .single-input textarea").on("blur", function () {
        var inputFieldValue = $(this).val();
        if (inputFieldValue == "") {
            $(this).prev().css({
                "top": "",
                "transition": ".5s"
            });
        } else {
            var a = $(this).prev().css({
                "color": "green"
            })
        }
    });
    /* ==================================== */
    /*MENU ACTIVE STRAT*/
    /* ==================================== */

    // Default menu active
    //$(".menu ul li").first().children().addClass("active");


    // click in the menu
    // $(".menu ul li a").on("click", function () {

    //     //$(".menu ul li a").removeClass("active");

    //     $(this).parent().siblings().children().removeClass("active");


    //     //$(this).addClass("active");

    //     $(this).parent().children().addClass("active");
    // });
    /*======================================*/
    /*MENU ACTIVE END*/
    /*======================================*/
});
