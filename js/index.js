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



$(function () {
  $(window).on('scroll', function () {
        var scrollpx = $(this).scrollTop(); //スクロール量観測
      var mainContents = $('#mainContents');
      // $('#mainContents span').text(scrollpx);
      if (scrollpx > 4000) {
          mainContents.css({
              background: 'url(../img/bg-img/bg-img4.jpg) repeat',
          });
      } else if (scrollpx > 3000) {
          mainContents.css({
              background: 'url(../img/bg-img/bg-img5.jpg) repeat'
          });
      } else if (scrollpx > 2000) {
          mainContents.css({
              background: 'url(../img/bg-img/bg-img3.jpg) repeat'
          });
      } else if (scrollpx > 1000) {
          mainContents.css({
              background: 'url(../img/bg-img/bg-img2.jpg) repeat-x center left'
          });
      } else {
          mainContents.css({
              background: 'url(../img/bg-img/bg-img01.jpg) repeat-x'

          });
      }
  });
  });
