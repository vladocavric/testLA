//******slick slider */
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

$( ".slick-prev" ).append( "<p>Test</p>" );

//******search field show/hide */
$(".search-btn").click(function(){
    $("input").toggleClass("d-none").focus();
  });