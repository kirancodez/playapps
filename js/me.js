$(window).on('load', function () {

    var QuoteHeight = $('.quotetext').outerHeight() + 130;
    $('.quote').css("height", QuoteHeight);

});
$(document).ready(function () {
    $('.languages').slick({
        dots: false,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    var containerOffset = $(".singleLang .container").css("margin-left");
    $(".singleLang .slider,.latest-blogs .slider").css('margin-left', parseInt(containerOffset) + 15);
    $(".singleLang .slider,.latest-blogs .slider").slick({
        slidesToShow: 3,
        SlidesToScroll: 1,
        autoplay: true,
        prevArrow: "<button type='button' class='slick-prev pull-left big-blue'><img class='img-fluid' src='images/icons/back.png'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right big-blue'><img class='img-fluid' src='images/icons/back.png'></button>",
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
});


$(document).ready(function(){
    $('.my-slider').cardslider();
    $('.my-slider').cardslider({

        // keyboard navigation
        keys: {
            next: 38,
            prev: 40
        },

        // 'up', 'down', 'right', 'left'
        direction: 'down',

        // shows navigation
        nav: true,

        // allows swipe event on touch devices
        swipe: false,

        // shows bottom pagination dots
        dots: false,

        // infinite loop
        loop: false,

        // callbacks
        beforeCardChange: null,
        afterCardChange: null

    });

});