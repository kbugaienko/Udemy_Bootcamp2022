$(function () {
  $('.design-slider').slick({
    // dots: true,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img src="images/arrow_left.png" class="arrow arrow-left" alt="arrow-left">',
    nextArrow: '<img src="images/arrow_right.png" class="arrow arrow-right" alt="arrow-right" />',
    responsive: [
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: true,
        }
      }
    ],
  });
});