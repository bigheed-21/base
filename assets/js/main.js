'use strict';

$('.slide-container').slick({
  slidesToShow: 1,
  dots: true,
  prevArrow: false,
  nextArrow: false
});

if ($(window).innerWidth > 1024) {
  $('.member-image').matchHeight();
  $('.member-content').matchHeight();
}
