//******slick slider */
$(document).ready(function() {
    slickInit();
});

function slickInit() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
               
              }
            }
        ]
       
    })
}

//******search field show/hide */
$(".search-btn").click(function(){
    $("input").toggleClass("d-none").focus();
  });