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

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

$(function () {
  $(window).on('scroll', function () {
        var scrollpx = $(this).scrollTop(); //スクロール量観測
      var mainContents = $('#mainContents');
      // $('#mainContents span').text(scrollpx);
      if (scrollpx > 4000) {
          mainContents.css({
              background: 'url(https://i.pinimg.com/originals/4c/b3/19/4cb3193989a9f649125958061913cdbb.jpg) repeat',
          });
      } else if (scrollpx > 3000) {
          mainContents.css({
              background: 'url(../img/bg-img/bg-img5.jpg) repeat'
          });
      } else if (scrollpx > 2000) {
          mainContents.css({
              background: 'url(https://i.pinimg.com/originals/b3/36/d3/b336d3c1f85a09ca51a5e55b60de74a4.jpg) repeat'
          });
      } else if (scrollpx > 1000) {
          mainContents.css({
              background: 'url(https://i.pinimg.com/originals/7e/5e/eb/7e5eeb6a4f9e0d89749d8b2e240134a2.jpg) repeat-x center left'
          });
      } else {
          mainContents.css({
              background: 'url(https://i.pinimg.com/originals/74/22/47/7422470c65502f368f9f823889234eae.jpg) repeat-x'

          });
      }
  });
  });
