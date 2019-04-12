//******slick slider */
$(document).ready(function() {
    slickInit();
});

function slickInit() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // variableWidth: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
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

$( ".slick-prev" ).append( "<span>zebra</span>" );

//******search field show/hide */
$(".search-btn").click(function(){
    $("input").toggleClass("d-none").focus();
  });