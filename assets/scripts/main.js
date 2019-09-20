$(document).ready(function () {

    // Cases animation
    AOS.init({
        duration: 700
    });

    /* init Jarallax */
    $(window).on('load resize orientationchange', function () {
        if ($(window).width() > 768) {
            jarallax(document.querySelectorAll('.jarallax'));
        }
    });
    
    // Brand Image Carousel
    $('.brand-image .jarallax-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });
});
