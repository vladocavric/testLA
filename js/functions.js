$(document).ready(function() {
    slickInit();
});

function slickInit() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
    })
}