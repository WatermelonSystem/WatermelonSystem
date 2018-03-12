$(function() {
  $('.carousel-home').slick({
    lazyLoad: 'progressive',
    autoplay: false,
    cssEase: 'linear',
    speed: 300,
    autoplaySpeed: 6000,
  })
  $('.slick-active').find('span').addClass('animated');
  $('.carousel-home').on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('span').addClass('animated');
    $('.slick-active').siblings('.slick-slide').find('span').removeClass('animated')
  })
})
