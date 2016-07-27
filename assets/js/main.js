'use strict';

$('.slide-container').slick({
  slidesToShow: 1,
  dots: true,
  prevArrow: false,
  nextArrow: false
});

$('.artist-slide-container').slick({
  dots: true,
  slidesToShow: 1,
  prevArrow: '<img src="assets/img/arrow-left-second-slider.png" class="slider-arrow" />',
  nextArrow: '<img src="assets/img/arrow-right-second-slider.png" class="slider-arrow" />'

});

if ($(window).innerWidth > 768) {
  $('.member-image').matchHeight();
  $('.member-content').matchHeight();
}
