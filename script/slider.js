$(document).ready(function () {
    $('.slider').slick({
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
                    slidesToShow: 1,

                }
            }
        ]

    });
});