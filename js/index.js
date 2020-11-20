$(function() {
  $('.bxslider').bxSlider({
    auto:true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth:300,
    minSlides:1,
    maxSlides:4,
    moveSlides:1,
  });
});

$(function() {
  $('.onlyone-img').bxSlider({
      ticker: true,
      minSlides: 2,
      maxSlides: 3,
      // slideWidth: 500,
      slideMargin: 20,
      tickerHover: true,
      speed: 50000
  });
});

$(function(){
  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});
