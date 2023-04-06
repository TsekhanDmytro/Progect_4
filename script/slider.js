//--------------- SLIDER-DEVELOPMENT-COURSES--------//
$(document).ready(function () {
    $('.sliderDC').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,


        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    dots: true,
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 1,

                }
            }
        ]

    });
});
// ----------------------SLIDER-RESPONSE----//
$(document).ready(function () {
    $('.sliderR').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 10000,
    });
});